import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { PORTFOLIO_CONFIG } from '../../core/constants/portfolio.config';

// Import Layout Components
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';

// Import Section Components
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ServicesComponent,
    ResumeComponent,
    ContactComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  private seoService = inject(SeoService);
  portfolio = PORTFOLIO_CONFIG;

  ngOnInit() {
    // Dynamically inject SEO Tags on landing page load
    this.seoService.generateTags({
      title: `${this.portfolio.name} | Professional Personal Portfolio`,
      description: `Explore the personal portfolio of ${this.portfolio.name}, a ${this.portfolio.titles.join(', ')}. ${this.portfolio.introText}`,
      keywords: `angular architect, portfolio, frontend engineer, full stack developer, software architect, typescript, ${this.portfolio.name}`,
      author: this.portfolio.name,
      url: 'https://kushalprajapati.dev', // Can be replaced by deployment URL
      image: 'https://kushalprajapati.dev/assets/images/profile-placeholder.jpeg' // Can be replaced by deployment URL
    });
  }
}
