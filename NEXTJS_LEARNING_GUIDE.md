# Next.js Learning Guide for This Project

## Step 1: JSX to TSX

All React files were converted from `.jsx` to `.tsx`. TypeScript helps catch mistakes earlier, especially when using data arrays, form fields, and component props.

Examples:

```txt
src/app/page.jsx      -> src/app/page.tsx
src/components/*.jsx  -> src/components/*.tsx
src/data/siteData.js  -> src/data/siteData.ts
```

## Step 2: Homepage sections

The old homepage had many sections in one large file. Now each section has its own component:

```txt
src/components/home/Hero.tsx
src/components/home/HomeServices.tsx
src/components/home/HomeProcess.tsx
src/components/home/HomeTech.tsx
src/components/home/HomeWhyChoose.tsx
src/components/home/HomeWorkShowcase.tsx
```

The homepage route stays simple:

```tsx
import Hero from '@/components/home/Hero';
import HomeServices from '@/components/home/HomeServices';
import HomeProcess from '@/components/home/HomeProcess';
import HomeTech from '@/components/home/HomeTech';
import HomeWhyChoose from '@/components/home/HomeWhyChoose';
import HomeWorkShowcase from '@/components/home/HomeWorkShowcase';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HomeServices />
      <HomeProcess />
      <HomeTech />
      <HomeWhyChoose />
      <HomeWorkShowcase />
    </main>
  );
}
```

In this project, the `main` wrapper is handled by `PageShell` for page fade animation.

## Step 3: Common CSS file

Tailwind is loaded in:

```txt
src/app/globals.css
```

Common CSS is stored in:

```txt
src/styles/index.css
```

This keeps reusable styles like body styling, section padding, grid backgrounds, and hover effects in one place.

## Step 4: Framer Motion

The project uses Framer Motion for animation:

```bash
npm install framer-motion
```

Components using React state or Framer Motion animation are Client Components and include:

```tsx
'use client';
```

## Step 5: Reusable animation components

Use these instead of writing the same animation many times:

```txt
MotionSection.tsx
AnimatedText.tsx
FloatingGlow.tsx
PageShell.tsx
```

## Step 6: Data pattern

Repeated content lives in:

```txt
src/data/siteData.ts
```

Then components import it:

```tsx
import { services } from '@/data/siteData';
```

The UI repeats the data using `.map()`.
