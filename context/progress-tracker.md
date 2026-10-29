# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Project dialogs (04-project-dialogs)

## Current Goal

- Editor home screen and project dialogs, backed by mock project data

## Completed

- Design system and UI primitives (shadcn/ui, lucide-react, lib/utils.ts with cn() helper)
- Editor base chrome (editor-navbar, project-sidebar, dialog pattern)
- Auth integration (03-auth): ClerkProvider with dark theme, sign-in/up pages with two-panel layout, proxy.ts with protected-first routing, UserButton in editor navbar
- Project dialogs (04-project-dialogs): editor home, Create/Rename/Delete dialogs, sidebar project actions

## In Progress

- None

## Next Up

- Persist projects behind API routes and Prisma (replaces the mock project store)

## Open Questions

- Slug uniqueness and collision handling are unspecified — the mock store allows duplicate slugs. Decide the rule before persistence lands.
- Project ids are currently generated client-side (`proj_${crypto.randomUUID()}`). Confirm whether the server should assign ids.

## Architecture Decisions

- `hooks/use-project-dialogs.tsx` exposes a context provider, not a plain hook — the editor home and the sidebar both live under `EditorShell` and must drive the same dialogs.
- The hook owns dialog, form, and loading state, and is the single source of truth for the in-memory project list until persistence exists. Mutations run against a simulated latency so loading states are exercised now.
- `Project.role` gates sidebar actions: only `owner` projects expose rename and delete.

## Session Notes

- Dev server was left running on port 3111 at the end of this session.
- UI was verified via typecheck, lint, production build, and the prerendered `/editor` HTML. Client-side interaction (opening dialogs, typing for the slug preview) was not exercised in a browser because `/editor` is gated behind Clerk sign-in.
