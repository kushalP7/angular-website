import { Component, OnInit, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PORTFOLIO_CONFIG } from '../../../../core/constants/portfolio.config';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  portfolio = PORTFOLIO_CONFIG;
  
  // Wrap stats configuration values in signals so we can count them up reactively
  stats = this.portfolio.stats.map(s => ({
    label: s.label,
    value: s.value,
    suffix: s.suffix || '',
    icon: s.icon,
    current: signal(0)
  }));

  ngOnInit() {
    // Add bio description to config if it was empty, or use a default one
    if (!this.portfolio.bio) {
      this.portfolio.bio = 'As a seasoned software systems engineer and frontend architect, I specialize in crafting robust, high-performance web systems. Over the past 8+ years, I have helped startups and Fortune 500 companies build secure, scalable, and responsive platforms. I am deeply passionate about semantic markup, web accessibility (WCAG), code modularity, and smooth user experiences. In my free time, I write open-source libraries and share software development principles at tech conferences.';
    }

    if (isPlatformBrowser(this.platformId)) {
      this.animateCounters();
    }
  }

  animateCounters() {
    this.stats.forEach(stat => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // ms
      const steps = 60;
      const stepDuration = duration / steps;
      const increment = Math.ceil(end / steps);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          stat.current.set(end);
          clearInterval(timer);
        } else {
          stat.current.set(start);
        }
      }, stepDuration);
    });
  }
}
