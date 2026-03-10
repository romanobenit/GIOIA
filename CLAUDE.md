# CLAUDE.md — GIO.I.A Website Project

## Project Overview

This repository contains the **official website for GIO.I.A**, an Italian APS (Associazione di Promozione Sociale — nonprofit association) that operates in two main areas:
- **Workforce inclusion** for adults with mild intellectual disabilities
- **Socio-recreational activities** to promote integration and wellbeing

The site must be accessible, visually warm, and use inclusive language and visual style throughout.

---

## Repository State

**Current status: Pre-implementation (planning/specification phase)**

The repository currently contains only documentation. No source code, dependencies, or build infrastructure has been set up yet. Development should follow the specifications in this file.

```
/home/user/GIOIA/
├── CLAUDE.md          ← This file (AI assistant guide + project spec)
├── Claude.md          ← Original project spec (Italian, superseded by this file)
└── README.md          ← Minimal project description
```

---

## Technology Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Astro (preferred) or Next.js | Astro for static site; Next.js if dynamic blog needed |
| Styling | Tailwind CSS | Required |
| Content/Blog | Local Markdown files | No external CMS needed; Decap CMS optional for GUI editing |
| Deployment | Netlify or Vercel | Both have free tiers for static sites |
| Maps | Google Maps Embed or OpenStreetMap (Leaflet.js) | For contact page |
| Contact forms | Formspree (free tier) | No backend required |
| Donations | PayPal.me or GoFundMe link | External service |

---

## Site Structure

```
/
├── /                   → Home page
├── /chi-siamo          → About the association (mission, history, team)
├── /attivita           → Activities offered (grid/cards layout)
├── /blog               → News and articles (Markdown-driven)
├── /contatti           → Contact form + interactive map
└── /donazioni          → How to support GIO.I.A
```

### Source directory structure (once scaffolded)

```
src/
├── components/
│   ├── Header.astro (or .tsx)
│   ├── Footer.astro
│   ├── ActivityCard.astro
│   └── BlogCard.astro
├── content/
│   └── blog/
│       └── YYYY-MM-DD-slug.md   ← Blog articles
├── pages/
│   ├── index.astro
│   ├── chi-siamo.astro
│   ├── attivita.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   ├── contatti.astro
│   └── donazioni.astro
└── styles/
    └── global.css

public/
└── images/
    └── blog/             ← Blog cover images
```

---

## Page Requirements

### 1. Home (`/`)
- Hero section with the **GIO.I.A** name and a tagline (e.g., "Insieme, con gioia")
- Brief association introduction
- Two CTAs: "Scopri le attività" and "Sostienici"
- Social media links

### 2. Chi Siamo (`/chi-siamo`)
- APS description: mission, values, history
- Who it serves (adults with mild intellectual disabilities)
- Team/volunteers section (with photos if available)
- Tone: warm, inclusive, positive

### 3. Attività (`/attivita`)
Display activity types in a card grid:
- **Workforce inclusion**: internships, workshops, career guidance
- **Socio-recreational**: outings, creative labs, events, sports
- Each card: title, icon/photo, short description

### 4. Blog (`/blog`)
- Articles sorted by date (newest first)
- Each article: title, date, cover image, body text
- **Updatable** by adding `.md` files to `/src/content/blog/`
- Optional categories: Notizie, Eventi, Storie

### 5. Contatti (`/contatti`)
- Physical address
- Phone number
- Email address
- Interactive map (Google Maps embed)
- Contact form (name, email, message) via Formspree

### 6. Donazioni (`/donazioni`)
- Explanation of why support matters
- Donation methods: PayPal, bank transfer, 5x1000 tax contribution
- Tax ID (Codice Fiscale) for the 5x1000
- Optional: link to crowdfunding campaign

### 7. Header & Footer (global components)
- **Header**: Logo, nav links, optional hamburger menu on mobile
- **Footer**: Logo, APS name, P.IVA / C.F., social links, privacy policy link
- Copyright © GIO.I.A

---

## Visual Identity

| Element | Specification |
|---|---|
| Primary colors | Warm yellow/orange (joy, energy), green (growth, inclusion), white background |
| Font | Sans-serif, accessible: Inter, Nunito, or Poppins |
| Tone | Empathetic, positive, inclusive — avoid technical or cold language |
| Images | Prefer real association photos; use Undraw.co illustrations as fallback |
| Accessibility | WCAG AA contrast, alt text on all images, keyboard navigation |

---

## Blog Article Format

Each blog article is a Markdown file in `/src/content/blog/`:

```markdown
---
title: "Titolo dell'articolo"
date: 2024-03-10
author: "Nome Autore"
category: "Notizie"  # Notizie | Eventi | Storie
coverImage: "/images/blog/nome-immagine.jpg"
excerpt: "Breve descrizione che appare nell'anteprima..."
---

Testo completo dell'articolo qui...
```

To publish a new article: create a new `.md` file with this structure, add the image to `/public/images/blog/`, then deploy.

---

## Placeholder Data

Replace these placeholders with real data before deploying:

```
NOME_COMPLETO_APS  = "GIO.I.A - [nome esteso se esiste]"
INDIRIZZO          = "[Via, Numero, CAP, Città]"
TELEFONO           = "[+39 ...]"
EMAIL              = "[info@gioia...]"
CODICE_FISCALE     = "[CF per 5x1000]"
FACEBOOK_URL       = "[link pagina Facebook]"
INSTAGRAM_URL      = "[link profilo Instagram]"
PAYPAL_LINK        = "[link PayPal donazioni]"
COORDINATE_MAPPA   = "[lat, lng]"
FORMSPREE_ENDPOINT = "[https://formspree.io/f/...]"
```

In code, use `[DA COMPILARE]` as a visible placeholder when real data is unavailable.

---

## Development Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Netlify (after initial setup)
netlify deploy --prod
```

---

## Git Workflow

- **Main branch**: `master`
- **Feature/AI branches**: `claude/<session-id>` pattern
- Commit messages should be clear and descriptive in English or Italian
- Always run `npm run build` successfully before merging to master

---

## Conventions for AI Assistants

### Development order
1. Scaffold the framework (Astro or Next.js) with Tailwind CSS
2. Create all page routes as static shells first
3. Implement shared components (Header, Footer) before page-specific ones
4. Add the blog system with Markdown content collection
5. Implement interactive elements last (map embed, contact form)
6. Test accessibility and responsive layout

### Code style
- Use **TypeScript** where the framework supports it
- Prefer **component-based** architecture — reuse Header, Footer, Card components across pages
- Keep components small and single-purpose
- Use Tailwind utility classes; avoid writing custom CSS unless necessary
- All images must have descriptive `alt` attributes

### Content guidelines
- All user-facing text is in **Italian**
- Code, variable names, and comments may be in English
- Use `[DA COMPILARE]` as a placeholder for missing real data — never invent addresses, phone numbers, or URLs
- Maintain the warm, inclusive tone specified in the Visual Identity section

### Mobile-first
- Design for mobile screens first; most users will access from smartphones
- Test all layouts at 320px, 768px, and 1280px breakpoints
- Navigation must include a hamburger/collapsed menu on mobile

### Accessibility
- Minimum WCAG AA contrast ratios for all text
- Every `<img>` must have a meaningful `alt` attribute
- All interactive elements must be keyboard-accessible
- Use semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`)

### Workflow rules
- After completing each major section, confirm before moving to the next
- If real data (address, phone, etc.) is missing, use `[DA COMPILARE]` — never invent data
- Do not add features beyond what is specified here without explicit confirmation
- Keep the codebase minimal and avoid over-engineering
