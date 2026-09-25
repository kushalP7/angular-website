import { Directive, ElementRef, Renderer2, OnInit, inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);

  @Input() revealClass = 'reveal-active';
  @Input() delay = 0; // Delay in ms

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.renderer.addClass(this.el.nativeElement, this.revealClass);
              this.renderer.removeClass(this.el.nativeElement, 'reveal-hidden');
            }, this.delay);
            observer.unobserve(this.el.nativeElement);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      });

      observer.observe(this.el.nativeElement);
    }
  }
}
