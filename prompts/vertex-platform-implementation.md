# Vertex platform implementation prompt

## Goal
Build the Vertex learning platform front end to match the provided design reference and the existing component system, without overbuilding. The app should feel like a polished, production-ready AI-powered learning product with a strong hero, catalog, course cards, and design-system-driven styling.

## Scope
Focus on the current web app in this repo: a Next.js App Router frontend with Tailwind-based styling and reusable component primitives. Keep the work to the frontend shell and visual implementation that already exists in the codebase. Do not introduce Sanity, Clerk, PostHog, or full backend functionality unless the user asks for those later.

## Code reviewed before implementation
I inspected the current repo structure and the most relevant files:
- `app/page.tsx` — home page shell and course listing
- `app/design-system/page.tsx` — design-system reference page and component composition
- `app/globals.css` — design tokens, utility classes, and page styling
- `components/layout/page-frame.tsx` — page container
- `components/layout/site-header.tsx` — header composition
- `components/home/hero.tsx` — hero CTA and search field
- `components/nav/navbar.tsx` — top navigation
- `components/ui/search-input.tsx` — search UI primitive
- `components/cards/course-card.tsx` — course card pattern
- `package.json` — dependencies and scripts

## Design assumptions
- The project already includes a design system foundation using Tailwind theme tokens and custom utility classes.
- The target experience is a clean, premium learning UI with warm orange accents, calm neutrals, generous spacing, and editorial typography.
- The browser reference and the local component structure act as the source of truth for layout, spacing, and text hierarchy.
- The app should remain responsive: preserve the desktop composition and adapt gracefully on narrower screens without redesigning the product.
- Reuse existing components and styling patterns before adding new ones.

## Implementation requirements
1. Complete the visually consistent Vertex homepage and supporting layout patterns that fit the existing components.
2. Reuse and extend the existing `PageFrame`, `SiteHeader`, `Hero`, `Navbar`, `CourseCard`, and `SearchInput` primitives instead of creating unrelated solutions.
3. Keep the app accessible with semantic HTML, proper labels, focus styles, and keyboard-friendly controls.
4. Ensure all styling is driven by the existing design tokens in `app/globals.css`, using the custom type and color utilities already defined.
5. Keep the implementation relatively lean: no unnecessary state management, route churn, or feature creep beyond what the repo already suggests.
6. If a page or component is missing from the provided design, prefer the closest existing pattern rather than inventing a large new system.

## Security and correctness considerations
- Do not add secrets, environment variables, or external auth flows.
- Keep all data static/mock content unless a future task explicitly requires live data.
- Avoid unsafe or unsupported conventions for Next.js 16; follow the repo’s existing app-router patterns.
- Ensure TypeScript and JSX remain valid, and keep code compatible with the current dependency versions in `package.json`.

## Files expected to be touched
Likely files include, but are not limited to:
- `app/page.tsx`
- `app/globals.css`
- `components/home/hero.tsx`
- `components/layout/site-header.tsx`
- `components/nav/navbar.tsx`
- `components/cards/course-card.tsx`
- any supporting component or utility file required to complete the design

## Acceptance criteria
- The home page renders a polished Vertex landing experience using the repo’s existing design system.
- Navigation, hero, search pattern, and course cards align visually with the reference and the current project structure.
- The app remains responsive and does not break layout on smaller viewports.
- `npm run lint` succeeds without new warnings that block a clean build.
- `npm run build` succeeds for the project as configured.

## Validation checks
Run these after implementation:
1. `npm run lint`
2. `npm run build`
3. `npm run dev` and verify the main page loads in the browser.

## Manual test steps
1. Start the app locally.
2. Open the homepage and confirm the header, hero, search field, and course grid look consistent with the provided reference.
3. Verify the top navigation links are styled and active states appear correctly.
4. Resize the viewport to a narrower width and ensure the layout stacks neatly without overflow or collapsed sections.
5. Check keyboard focus and visible focus rings around interactive elements.

## Notes for the agent
- Prefer surgical edits over broad rewrites.
- Build strictly within the repo’s current architecture.
- No extra features beyond the frontend UI build requested here.
- If something is ambiguous, use the existing design system and project conventions as the deciding factor.
