# Premium Angular 19+ Personal Portfolio Website

A highly responsive, production-ready developer portfolio website crafted with **Angular 19/20**, utilizing standalone components, custom SCSS variables, Angular Signals, and RxJS typing animations.

---

## 🚀 Key Features

*   **⚡ Angular 19/20 Architecture:** Pure standalone components (no NgModules), Signals for state management (scrolling, theme), and custom animations.
*   **🎨 Dual-Theme Configuration:** Native support for Light Mode, Dark Mode, and System Default detection with a seamless navbar theme picker.
*   **📊 Fully Animated Interface:**
    *   Dynamic typing titles with lightweight interval typing simulation.
    *   CSS-driven progress bars triggered by Intersection Observer scroll reveals.
    *   Scroll reveal directives for staggered item entries.
    *   Custom count-up statistics cards.
*   **📁 Centralized Config System:** Define your entire portfolio (bio, projects, experiences, links, stats, contact details) in a single file: `src/app/core/constants/portfolio.config.ts`.
*   **🛠️ Production Ready static hosting:** Tailored for ultra-fast, search-engine-friendly static hosting on platforms like AWS S3 or Netlify (fully client-side routing, SEO tags, schema markup, sitemaps, and manifest support).

---

## 📂 Project Architecture

```text
src/
├── app/
│   ├── core/                  # Core Singletons, Constants & Interfaces
│   │   ├── constants/
│   │   │   └── portfolio.config.ts    # 📝 MAIN PORTFOLIO DATA FILE
│   │   ├── interfaces/
│   │   │   └── portfolio.interface.ts # TypeScript Type Definitions
│   │   └── services/
│   │       ├── seo.service.ts         # Dynamically sets meta tags and JSON-LD schema
│   │       └── theme.service.ts       # Manages theme switching logic & localStorage
│   ├── layout/                # Global Layout Components
│   │   ├── footer/
│   │   └── navbar/
│   ├── pages/                 # Routing Pages & Section Blocks
│   │   ├── not-found/         # Beautiful 404 Route Fallback
│   │   └── portfolio/         # Coordinates the Landing Page sections
│   │       └── components/    # Subsections (Hero, About, Skills, Experience, Projects, Services, Resume, Contact)
│   ├── shared/                # Shared animations and custom directives
│   │   ├── animations/
│   │   │   └── portfolio.animations.ts # Fade, Slide, Zoom, Stagger triggers
│   │   └── directives/
│   │       └── scroll-reveal.directive.ts # IntersectionObserver scroll animator
│   ├── app.component.ts       # Root Angular App Shell
│   ├── app.config.ts          # Angular providers configuration (Animations, Scroll Restoration)
│   └── app.routes.ts          # Route mappings (Lazy loaded landing + 404 wildcard redirects)
├── scss/                      # Style Architecture
│   ├── _mixins.scss           # Custom responsive utilities
│   └── _variables.scss        # CSS Theme Custom properties (Dual Theme)
├── styles.scss                # Global CSS resets, utility modifiers and ambient backgrounds
public/                        # Static assets (Copied as-is to build folder)
├── assets/
│   ├── images/                # SVG/PNG Illustrations, Mockups & Placeholders
│   └── pdf/
│       └── resume-placeholder.pdf # Resume PDF Target
├── robots.txt                 # Search Engine Crawler rules
├── sitemap.xml                # SEO index roadmap
└── manifest.json              # Web Application Manifest
```

---

## ⚙️ Development Guide

### Prerequisites
*   Node.js `v22.21.0` or higher
*   Angular CLI `v19` or higher

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Run Local Development Server
Start the Angular dev server on port `4200` (or `4210` in case of conflicts):
```bash
npm start
# OR run explicitly with ng:
npx ng serve --port 4200
```
Open [http://localhost:4200/](http://localhost:4200/) in your browser. Live reloading is enabled by default.

### 3. Customize Your Data
Simply open `src/app/core/constants/portfolio.config.ts` and modify the text properties, social profiles, list of experiences, skill values, and contact email/phone to update the entire website immediately.

To replace visual assets:
*   Place your avatar image in `public/assets/images/profile-placeholder.jpeg` (or update the filename in config).
*   Place your about illustration in `public/assets/images/about-placeholder.svg`.
*   Put your actual PDF resume in `public/assets/pdf/resume-placeholder.pdf`.

---

## 📦 Production Build & S3 Deployment

### 1. Run Production Build
Compile the Angular application into an optimized, static client-side bundle:
```bash
npm run build
```
This stores the output in `dist/angular-portfolio/browser`.

### 2. Configure AWS S3 Static Website Hosting
1.  Create an AWS S3 Bucket (e.g. `your-domain-portfolio`).
2.  Enable **Static website hosting** under Bucket properties:
    *   Index document: `index.html`
    *   Error document: `index.html` (Redirects wildcard route requests to Angular's client-side 404 handler)
3.  Configure a Public Read Policy under Bucket Permissions:
    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::your-domain-portfolio/*"
        }
      ]
    }
    ```

### 3. Deploy Files Using AWS CLI
Deploy the bundle to your bucket, configuring long-lived caching on immutable assets (hashes) and short-lived caching on entry points:

```bash
# Upload assets and hash bundles with long caching (1 year)
aws s3 sync dist/angular-portfolio/browser/ s3://your-domain-portfolio --exclude "index.html" --exclude "*.txt" --exclude "*.xml" --cache-control "max-age=31536000, public"

# Upload index.html and configuration files with zero-caching to ensure instant updates
aws s3 sync dist/angular-portfolio/browser/ s3://your-domain-portfolio --exclude "*" --include "index.html" --include "robots.txt" --include "sitemap.xml" --cache-control "no-store, no-cache, must-revalidate"
```

---

## 🔍 SEO & Web Vitals Optimizations

*   **JSON-LD Schema Markup:** The website automatically injects a `Person` schema markup representation on load, allowing search engines (like Google) to index personal attributes.
*   **Facebook OpenGraph & Twitter Cards:** Configured dynamically by `SeoService` to generate card previews when your link is shared on social networks.
*   **Accessibility (WCAG 2.1 AA):**
    *   Interactive elements (buttons, inputs, filters) contain semantic `aria-labels` and `roles`.
    *   Text inputs utilize explicit `<label>` attachments.
    *   Focus outlines are custom-styled to provide high contrast indicator outlines.
*   **Lighthouse Performance:**
    *   Images are lazy-loaded (`loading="lazy"`) and utilize SVG placeholders to prevent page jank/layout shifts (CLS).
    *   Critical styling is modularized in global SCSS with lightweight component variables.
