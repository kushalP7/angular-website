import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  // Signals for managing theme state
  themeMode = signal<ThemeMode>('system');
  activeTheme = signal<'light' | 'dark'>('dark'); // Resolved theme

  constructor() {
    if (this.isBrowser) {
      // 1. Load saved theme or default to system
      const savedTheme = localStorage.getItem('theme-mode') as ThemeMode;
      if (savedTheme) {
        this.themeMode.set(savedTheme);
      }

      // 2. Setup effect to apply theme changes automatically
      effect(() => {
        const mode = this.themeMode();
        localStorage.setItem('theme-mode', mode);
        this.resolveAndApplyTheme();
      });

      // 3. Listen to system preference changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', () => {
        if (this.themeMode() === 'system') {
          this.resolveAndApplyTheme();
        }
      });
    }
  }

  setThemeMode(mode: ThemeMode) {
    this.themeMode.set(mode);
  }

  toggleTheme() {
    const current = this.themeMode();
    if (current === 'light') {
      this.setThemeMode('dark');
    } else if (current === 'dark') {
      this.setThemeMode('system');
    } else {
      this.setThemeMode('light');
    }
  }

  private resolveAndApplyTheme() {
    if (!this.isBrowser) return;

    const mode = this.themeMode();
    let resolved: 'light' | 'dark' = 'dark';

    if (mode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      resolved = prefersDark ? 'dark' : 'light';
    } else {
      resolved = mode;
    }

    this.activeTheme.set(resolved);

    // Apply attribute and class to documentElement
    const root = document.documentElement;
    root.setAttribute('data-theme', resolved);
    
    if (resolved === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }
}
