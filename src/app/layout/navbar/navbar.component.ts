import { Component, OnInit, OnDestroy, HostListener, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  themeService = inject(ThemeService);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  isScrolled = signal(false);
  isMenuOpen = signal(false);
  activeSection = signal('hero');

  navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  ngOnInit() {
    if (this.isBrowser) {
      this.checkScroll();
      this.initScrollSpy();
    }
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.checkScroll();
    }
  }

  checkScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    if (!this.isBrowser) return;

    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      this.isMenuOpen.set(false);

      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      this.activeSection.set(sectionId);
    }
  }

  private initScrollSpy() {
    if (!this.isBrowser) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Highlights as sections enter screen middle
        threshold: 0
      }
    );

    this.navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });
  }
}
