import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_CONFIG } from '../../../../core/constants/portfolio.config';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { listAnimation } from '../../../../shared/animations/portfolio.animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [listAnimation]
})
export class ProjectsComponent {
  portfolio = PORTFOLIO_CONFIG;
  selectedCategory = signal('All');
  
  // Track loaded state of images
  loadedImages = signal<{ [key: string]: boolean }>({});

  categories = computed(() => {
    const list = this.portfolio.projectsList.map(p => p.category);
    return ['All', ...Array.from(new Set(list))];
  });

  filteredProjects = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'All') {
      return this.portfolio.projectsList;
    }
    return this.portfolio.projectsList.filter(p => p.category === cat);
  });

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }

  onImageLoad(title: string) {
    this.loadedImages.update(state => ({ ...state, [title]: true }));
  }

  isLoaded(title: string): boolean {
    return !!this.loadedImages()[title];
  }
}
