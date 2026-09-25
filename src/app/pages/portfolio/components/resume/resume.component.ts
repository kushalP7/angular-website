import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_CONFIG } from '../../../../core/constants/portfolio.config';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  portfolio = PORTFOLIO_CONFIG;
}
