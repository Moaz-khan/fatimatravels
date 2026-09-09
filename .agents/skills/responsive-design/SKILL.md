---
name: responsive-design
description: "Implements, refactors, and audits responsive user interfaces for Next.js (App Router), Tailwind CSS, and TypeScript. Use this skill when developing mobile-first layouts, eliminating horizontal scroll blowouts, fixing dynamic mobile viewport height clipping, preventing hydration mismatches in responsive rendering, and optimizing responsive Next.js Image components."
---

# Responsive Design Skill for Next.js, Tailwind CSS & TypeScript

## 1. Core Engineering Directives

### A. Mobile-First Escalation & Fluidity
- **Mobile-First Foundation**: Write base Tailwind classes for mobile screens (0px–639px) without any prefix. Use media query prefixes solely for upward scaling: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px), and `2xl:` (1536px).
- **Desktop-Down Banned**: Never write styles assuming a desktop screen first and then attempt to patch smaller screens using negative overrides.
- **Intrinsic Layouts**: Prioritize CSS Grid `auto-fit`/`auto-fill`, `flex-wrap`, and `clamp()` before adding hardcoded breakpoint media queries.
- **Component Containment**: Use container queries (`@container`, `@sm:`, `@md:`, `@lg:`) for self-contained UI components (cards, dashboard widgets, sidebars) so they adapt to their parent container rather than the browser window.

### B. Dynamic Viewport Heights (Mobile Chrome Handling)
- **Ban `100vh` and `h-screen`**: Static viewport height units do not recalculate for mobile browser address bars (iOS Safari / Android Chrome), causing bottom clipping.
- **Enforce Dynamic Units**:
  - Use `min-h-dvh` on root document wrappers and full-screen hero sections.
  - Use `h-svh` for fixed/sticky headers and toolbars to prevent jumpy layout shifts during scroll momentum.

### C. Flexbox & Grid Overflow Containment (Blowout Defense)
- **Flex Child Containment**: Always add `min-w-0` to flex child containers holding text truncation (`truncate`), badges, code blocks, or dynamic user strings. This overrides the default CSS `min-width: auto`.
- **Root Overflow Control**: Apply `w-full max-w-full` on sections. If overflow clipping is needed, use `overflow-x-clip` rather than `overflow-x-hidden` (which breaks `position: sticky` on child elements).

### D. SSR Hydration Invariance (Next.js App Router)
- **No Window-Size Branching**: Never conditionally render mobile vs. desktop component trees using client-side JavaScript hooks (e.g., `if (windowWidth < 768) return <Mobile />`). This triggers React hydration invariant errors.
- **CSS-Driven Visibility**: Render a unified DOM tree and delegate visibility to Tailwind CSS classes:
  - Mobile-only presentation: `block md:hidden`
  - Desktop-only presentation: `hidden md:flex` (or `md:block`)

### E. Next.js Image Optimization
- **Parent Constraints for `fill`**: When using `fill={true}` on `next/image`, the immediate parent element must have `position: relative`, an explicit aspect ratio (e.g., `aspect-video` or `aspect-square`), and width bounds.
- **Mandatory `sizes` Prop**: Always define the `sizes` attribute when using `fill` or dynamic sizing so Next.js generates targeted responsive `srcset` descriptors.
- **LCP Optimization**: Add `priority={true}` only to above-the-fold hero images.

### F. Accessibility & Touch Standards
- **Touch Target Size**: Interactive controls (buttons, links, tab items) must maintain a minimum bounding box of 44x44 CSS pixels (`min-h-11 min-w-11` or `p-3`).
- **Input Zoom Prevention**: All form inputs, selects, and textareas must use at least `text-base` (16px) on mobile viewports to prevent iOS Safari auto-zoom behavior.

---

## 2. Standard Layout Implementations

### Pattern 1: Fluid Intrinsic Grid (Zero Media Queries)
```tsx
import React from 'react';

interface AutoGridProps {
  children: React.ReactNode;
}

export const AutoGrid: React.FC<AutoGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4 sm:gap-6 w-full">
      {children}
    </div>
  );
};
```

### Pattern 2: Hydration-Immune Responsive Navigation
```tsx
import React from 'react';
import Link from 'next/link';

export const NavigationBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold">
          AppLogo
        </Link>

        {/* Mobile Navigation Toggle: Displayed only below md (768px) */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md border p-2 text-sm"
          >
            Menu
          </button>
        </div>

        {/* Desktop Horizontal Navigation: Displayed only at md (768px) and above */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/dashboard" className="transition-colors hover:text-primary">
            Dashboard
          </Link>
          <Link href="/analytics" className="transition-colors hover:text-primary">
            Analytics
          </Link>
          <Link href="/settings" className="transition-colors hover:text-primary">
            Settings
          </Link>
        </nav>
      </div>
    </header>
  );
};
```

### Pattern 3: Overflow-Resistant Card with Safe Truncation
```tsx
import React from 'react';

interface UserCardProps {
  name: string;
  email: string;
}

export const UserCard = ({ name, email }: UserCardProps) => {
  return (
    <div className="flex w-full max-w-full items-center gap-3 rounded-lg border p-4">
      <div className="size-10 shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-800" />
      {/* min-w-0 forces the flex item to recalculate width and respect truncate */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-semibold">{name}</p>
        <p className="truncate text-sm text-muted-foreground">{email}</p>
      </div>
    </div>
  );
};
```

### Pattern 4: CLS-Safe Responsive Next.js Image
```tsx
import Image from 'next/image';

interface HeroBannerProps {
  src: string;
  alt: string;
}

export const HeroBanner = ({ src, alt }: HeroBannerProps) => {
  return (
    <div className="relative aspect-16/9 w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority
        className="object-cover"
      />
    </div>
  );
};
```

---

## 3. Responsive Layout Decisions

| Component Category | Mobile (< 768px) | Tablet (768px - 1023px) | Desktop (>= 1024px) |
| :--- | :--- | :--- | :--- |
| **Header / Navigation** | Sheet / Off-canvas drawer trigger | Icon bar or compact horizontal links | Full horizontal navigation bar with dropdown menus |
| **Data Tables** | Stacked card list or scrollable cards | Horizontal scrolling container (`overflow-x-auto`) | Full tabular grid with visible columns |
| **Dashboard Layouts** | Single-column stacked vertical feed | 2-column bento / modular grid | Persistent collapsible sidebar with multi-column workspace |
| **Forms & Input Groups**| Full-width vertical stacked fields | 2-column grouped fields | Multi-column grid with contextual sidebar help |

---

## 4. Pre-Output Verification Checklist
Before outputting any code, verify:
1. Are base styles mobile-first, using breakpoint prefixes (`sm:`, `md:`, `lg:`) only for upward scaling?
2. Has `h-screen`/`100vh` been replaced with `min-h-dvh` or `h-svh`?
3. Are all dynamic flex/grid items stabilized with `min-w-0`?
4. Do mobile inputs and textareas use `text-base` (16px) or larger?
5. Does every `next/image` with `fill` contain an explicit `sizes` attribute?
6. Is structural rendering free of client-side window width checks that cause hydration failures?