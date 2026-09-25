import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PORTFOLIO_CONFIG } from '../../../../core/constants/portfolio.config';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private sanitizer = inject(DomSanitizer);
  
  portfolio = PORTFOLIO_CONFIG;
  safeMapUrl: SafeResourceUrl | null = null;

  // Signals for form state
  formSubmitted = signal(false);
  isSubmitting = signal(false);
  senderName = signal('');

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngOnInit() {
    if (this.portfolio.contactInfo.mapEmbedUrl) {
      this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.portfolio.contactInfo.mapEmbedUrl
      );
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.isSubmitting.set(true);

    // Simulate API request delay
    setTimeout(() => {
      this.senderName.set(this.formData.name);
      this.formSubmitted.set(true);
      this.isSubmitting.set(false);
    }, 1200);
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.formSubmitted.set(false);
  }
}
