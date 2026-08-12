# AE Solutions

Production-oriented website build for **AE Solutions**, positioned as the parent company for a developing portfolio of independent businesses, products and intellectual property.

## Core rule

**AE owns the companies. The individual companies own their customer propositions.**

The parent site should therefore communicate ownership, direction, ventures and long-term standards rather than sell websites, apps, automation or lead generation directly.

## Current group structure

- **AE Solutions** — parent / holding company
- **Camelot** — digital systems, websites, automation and commercial growth services
- **Lumi Project** — consumer technology and interactive digital products
- **Tephtie** — apparel and lifestyle
- **Publishing company** — books, media and intellectual property; brand name still to be decided

These are deliberately presented as developing holdings rather than mature subsidiaries. The site avoids fabricated scale, testimonials, revenue, client counts, investment performance or other unsupported claims.

## Brand direction

- Charcoal / storm-grey mountain atmosphere
- Dark grey typography with fine silver edging
- Restrained, long-term holding-company tone
- Motto: `FORTUNA FAVET FORTIBUS` — Fortune favours the brave
- Responsive, keyboard-accessible UI with reduced-motion support

## Technical structure

- React 19 + TypeScript
- Vite
- No router dependency: a deliberately small history-based router handles the current four public routes
- Portfolio and principles live in `src/data.ts`
- Presentation lives in `src/styles.css`
- No database, authentication, analytics or tracking configured
- Contact form is intentionally demo-only until a real email/CRM endpoint is selected

## Run locally

```bash
npm install
npm run dev
```

## Validation

```bash
npm run check
npm run build
```

GitHub Actions runs the production build on pushes and pull requests to `main`.

## Routes

- `/`
- `/ventures`
- `/about`
- `/contact`

Trailing slashes are normalised client-side. Production hosting should serve the SPA entry document for direct requests to these routes.

## Before public launch

- Connect the contact form to the chosen email/CRM endpoint
- Add final company URLs and brand marks as each holding becomes public-ready
- Add the final publishing-company name when selected
- Add analytics only if there is a clear reporting requirement, then update the privacy/legal position accordingly
