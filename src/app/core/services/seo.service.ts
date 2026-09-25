import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string;
  author: string;
  url: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private document = inject(DOCUMENT);

  generateTags(config: SeoMetadata) {
    // 1. Set Page Title
    this.titleService.setTitle(config.title);

    // 2. Set Standard Meta Tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    this.metaService.updateTag({ name: 'author', content: config.author });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    // 3. Set Open Graph (Facebook) Tags
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:url', content: config.url });
    this.metaService.updateTag({ property: 'og:image', content: config.image });

    // 4. Set Twitter Card Tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    this.metaService.updateTag({ name: 'twitter:image', content: config.image });

    // 5. Update Canonical Link
    this.setCanonicalUrl(config.url);

    // 6. Set Structured Data (JSON-LD Person schema)
    this.setSchemaJsonLd(config);
  }

  private setCanonicalUrl(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setSchemaJsonLd(config: SeoMetadata) {
    let script: HTMLScriptElement | null = this.document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = this.document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      this.document.head.appendChild(script);
    }

    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': config.author,
      'url': config.url,
      'image': config.image,
      'description': config.description,
      'jobTitle': 'Senior Software Architect',
      'sameAs': [
        'https://github.com',
        'https://linkedin.com'
      ]
    };

    script.textContent = JSON.stringify(personSchema, null, 2);
  }
}
