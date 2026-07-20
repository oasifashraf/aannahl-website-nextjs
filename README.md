# Aan Nahl Next.js Advanced Website

This version converts the project from `.jsx` to `.tsx`, moves the homepage into separate components, adds a shared CSS file, and includes Framer Motion animation components.

## Main stack

- Next.js App Router
- TypeScript `.tsx`
- Tailwind CSS 3
- Framer Motion
- Shared CSS in `src/styles/index.css`

## Run locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Important folders

```txt
src/app/                  Next.js routes
src/components/           Shared components
src/components/home/      Homepage section components
src/components/animations Reusable animation components
src/data/siteData.ts      Shared website data
src/styles/index.css      Common CSS outside Tailwind utilities
public/assets/advanced/   New uploaded images used in the design
```

## Homepage route

The homepage is controlled by:

```txt
src/app/page.tsx
```

It loads sections in this order:

```tsx
<Hero />
<HomeServices />
<HomeProcess />
<HomeTech />
<HomeWhyChoose />
<HomeWorkShowcase />
```

## Animation components

```txt
MotionSection.tsx  Scroll reveal animation
AnimatedText.tsx   Word-by-word hero text animation
FloatingGlow.tsx   Floating background glow animation
PageShell.tsx      Soft page fade wrapper
```

## Notes

The contact form is still frontend-only. It validates fields and shows a success message, but it does not send email yet.
