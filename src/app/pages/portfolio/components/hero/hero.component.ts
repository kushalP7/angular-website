import { Component, OnInit, OnDestroy, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PORTFOLIO_CONFIG } from '../../../../core/constants/portfolio.config';
import { zoomIn, slideUp } from '../../../../shared/animations/portfolio.animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [zoomIn, slideUp]
})
export class HeroComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  portfolio = PORTFOLIO_CONFIG;
  typedText = signal('');

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimeout: any;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.handleTyping();
    }
  }

  ngOnDestroy() {
    if (this.typeTimeout) {
      clearTimeout(this.typeTimeout);
    }
  }

  handleTyping() {
    const titles = this.portfolio.titles;
    const currentWord = titles[this.wordIndex];

    if (this.isDeleting) {
      // Deleting character
      this.charIndex--;
    } else {
      // Typing character
      this.charIndex++;
    }

    this.typedText.set(currentWord.substring(0, this.charIndex));

    let typeSpeed = 80;

    if (this.isDeleting) {
      typeSpeed /= 2; // Erase faster
    }

    if (!this.isDeleting && this.charIndex === currentWord.length) {
      // Pause at full word
      typeSpeed = 2200;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % titles.length;
      typeSpeed = 400; // Delay before typing next word
    }

    this.typeTimeout = setTimeout(() => {
      this.handleTyping();
    }, typeSpeed);
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
