import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_CONFIG } from '../../../../core/constants/portfolio.config';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  portfolio = PORTFOLIO_CONFIG;
}
