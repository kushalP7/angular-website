import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PORTFOLIO_CONFIG } from '../../core/constants/portfolio.config';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  themeService = inject(ThemeService);
  private platformId = inject(PLATFORM_ID);
  
  portfolio = PORTFOLIO_CONFIG;
  currentYear = new Date().getFullYear();

  setTheme(mode: 'light' | 'dark' | 'system') {
    this.themeService.setThemeMode(mode);
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
