# Beelix Solutions Website Blueprint

## Recommended First Priority
Start with **UI/UX Design** first, then proceed to the schema and finally content migration.

### Why this order works
1. **UI/UX first** locks in layout blocks, spacing, and responsive behavior.
2. **Database schema second** is easier once content modules and card types are finalized.
3. **Content third** is faster when you can write directly into approved component slots.

## Core Architecture (Modular SPA in Next.js App Router)

### Primary sections (v1)
- Hero
- Services
- Tech Stack
- Projects / Case Studies
- Contact / Inquiry

### Deferred sections (v1.1+)
- Client Portal (auth + subscription/project dashboard)
- Insights/Blog
- Booking integration (Calendly)

## Suggested Route + Component Structure

```txt
app/
  page.tsx                # homepage composition
  layout.tsx
components/
  sections/
    hero.tsx
    services.tsx
    tech-stack.tsx
    case-studies.tsx
    contact.tsx
  ui/
    section-shell.tsx
    gradient-border-card.tsx
lib/
  content/
    services.ts
    tech-stack.ts
    case-studies.ts
```

## Design System Direction (Dark Tech)

### Color tokens
- `--bg-primary`: `#0B0F14`
- `--bg-surface`: `#111827`
- `--text-primary`: `#E5E7EB`
- `--text-muted`: `#94A3B8`
- `--accent`: `#22D3EE` (electric cyan)

### Typography
- Headings: geometric sans (e.g., Inter or Sora)
- Body: Inter/Manrope
- Use high contrast and generous line-height for technical clarity.

### Motion
- Framer Motion fades/slides only on section enter.
- Duration target: 200–350ms.
- Avoid excessive parallax to preserve a "serious engineering" feel.

## Initial Data Model Draft

### `Service`
- `id`
- `slug`
- `title`
- `summary`
- `description`
- `position`

### `Project`
- `id`
- `slug`
- `name`
- `problem`
- `solution`
- `stack` (string array)
- `outcomes`
- `featured`

### `Lead`
- `id`
- `name`
- `email`
- `company`
- `message`
- `createdAt`

## Week 1 Execution Checklist

1. Build homepage skeleton with semantic sections.
2. Add reusable section shell + card components.
3. Apply dark-theme token system.
4. Implement one polished animation pattern across all sections.
5. Connect contact form to a server action (email/log only in v1).

## Next Decision for Implementation
If you want rapid visible progress, proceed with:

1. **UI/UX pass** (wireframe + tokenized theme)  
2. **Then schema** (Prisma models)  
3. **Then copy pass** (services + about + CTAs)
