# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build to /dist
npm run lint       # TypeScript type-check (no ESLint configured)
npm run preview    # Preview production build
```

## Stack

- **React 19** + **TypeScript** — multi-page SPA with React Router
- **React Router v6** — client-side routing via `BrowserRouter`
- **Vite 6** — build tool; `@tailwindcss/vite` plugin integrates Tailwind v4 directly (no `tailwind.config.js`)
- **Tailwind CSS v4** — configured entirely in `src/index.css` via `@theme {}` block
- **motion/react** (Framer Motion v12) — animations; import from `motion/react`, not `framer-motion`
- **lucide-react** — icons

## Architecture

**`src/App.tsx`** — root component; sets up `<Router>` and `<Routes>`. Contains the `Home` page component with all landing page sections, plus top-level data arrays.

### Routes
| Path | Component |
|---|---|
| `/` | `Home` (inline in App.tsx) |
| `/speciale/:slug` | `SpecialtyPage` |
| `/blog` | `BlogPage` |
| `/betaling` | `PaymentsPage` |
| `/holdtraening` | `HoldtraeningPage` |
| `/politik/:slug` | `PolicyPage` |

### Landing page sections (top → bottom)
1. Hero (full-screen video)
2. Treatments carousel (`TREATMENTS` array)
3. Trust / Om os
4. Team carousel (`TEAM` array)
5. News (derived from `BLOG_POSTS`)
6. FAQ accordion
7. Kontakt & Kort (contact form + Google map)
8. Insurance Partners band
9. Social & Ratings CTA (Facebook/Instagram/reviews)
10. Footer

### Data arrays in `src/App.tsx`
- `TREATMENTS` — 8 items `{ id, title, slug, description, image, link }`
- `TEAM` — 7 items `{ id, title, description, image, link }`
- `GOOGLE_REVIEWS` — 5 rotating review quotes
- `NEWS` — derived from `BLOG_POSTS.slice(0, 4)`

**`src/data/specialtyData.ts`** — `SPECIALTY_DATA` record keyed by slug; full content for each specialty subpage.

### Components (`src/components/`)
- `Navbar.tsx` — fixed top nav with dropdown for specialties; used on all pages via `alwaysSolid` prop for subpages. Background: `bg-[#224C4F]`
- `Carousel.tsx` — horizontal infinite-scroll carousel; accepts `{ id, title, description?, image, link }[]`; exposes `CarouselHandle` ref for external prev/next control
- `ExpandableText.tsx` — truncates to `maxWords` (default 40) with animated expand/collapse
- `Reviews.tsx` — hardcoded Google-style review cards; edit the `REVIEWS` array inside the file
- `FlowingLines.tsx` — decorative SVG background lines (`<FlowingLines />`) and section transition helper (`<WaveDivider fromColor toColor />`)
- `ScrollIndicator.tsx` — thin progress bar at top of page showing scroll position
- `SpecialtyPage.tsx` — template for all `/speciale/:slug` pages
- `BlogPage.tsx` — blog listing page; exports `BLOG_POSTS` array used by App.tsx for news section
- `PaymentsPage.tsx` — prices & payment info page
- `HoldtraeningPage.tsx` — group training page
- `PolicyPage.tsx` — policy pages (privacy, terms, cancellation, membership)

## Styling conventions

Custom design tokens live in `src/index.css` under `@theme {}`:
- `brand-primary` = `#224C4F` (dark teal — used for navbar, footer, CTAs)
- `brand-secondary` = `#DB7F67` (terracotta/salmon)
- `charcoal` = `#333333`
- `celadon` = `#224C4F` (alias for brand-primary)
- `frosted-mint` = `#E6EEF3`

Utility classes defined in `src/index.css`: `section-padding`, `element-spacing`, `inner-spacing`, `no-scrollbar`.

Fonts: **Roboto** (body) loaded from Google Fonts in `index.html`. **Playfair Display** used inline via `style={{ fontFamily: '"Playfair Display", serif' }}` for hero headings.

## Assets (`/public/`)
Images referenced directly by filename: `logo.png`, `nakke.jpeg`, `Skulder.jpeg`, `Ryg.jpeg`, `Hofte.jpeg`, `Knæ.jpeg`, `Søvn.jpeg`, `Triatlon.jpeg`, `Golf.jpeg`, `hero-buttom-cta.png`, `hero-cta.png`.

## Real clinic data

This site is for **Aktiv Fysioterapi** (aktiv-fysioterapi.dk):
- Address: Hobrovej 91B, 9530 Støvring
- Phone: 77 41 44 44
- Email: Info@aktiv-fysioterapi.dk
- CVR: 44632896
- Facebook: AktivfysioterapiFB | Instagram: aktiv_fysio
- Booking: https://system.easypractice.net/overview/aktiv-fysioterapi
