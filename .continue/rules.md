# Project Rules for Continue

## Project context
- This repository is a Vite + React + TypeScript website.
- Use TypeScript for new code unless a JavaScript-only change is absolutely necessary.
- Prefer small, reusable React components and keep page-level logic focused in the page files under `src/pages/`.

## Folder conventions
- Put reusable UI components in `src/components/`.
- Put route/page components in `src/pages/`.
- Put shared content/data in `src/lib/data.ts`.
- Keep styling mostly in Tailwind utility classes and avoid introducing new CSS unless the existing pattern requires it.

## UI and routing conventions
- Preserve the existing `BrowserRouter` + `Routes` + `Route` structure in `src/App.tsx`.
- When adding a new page, register its route in `src/App.tsx` and keep the navigation consistent with the current site structure.
- Reuse the existing layout pattern (`Navbar`, `main`, `Footer`) instead of creating a new wrapper.

## Content and data conventions
- Prefer updating or extending the exported arrays in `src/lib/data.ts` for service, brief, person, and partner content rather than hard-coding page-local content.
- Keep content deterministic and easy to maintain; avoid duplicating the same text across multiple files.

## Code style
- Use functional React components.
- Keep imports organized and avoid unused imports.
- Favor existing project patterns over introducing new abstraction layers.
- Do not change routing, layout, or data structures unless the task clearly requires it.

## Verification expectations
- Before claiming the work is complete, verify with the project commands that fit the change.
- Prefer checking `npm run build` and `npm run lint` after implementation changes.
- If a change is purely content-related, keep the update minimal and preserve the existing page flow.

## Guidance for AI-generated changes
- Keep edits focused and minimal.
- Prefer incremental updates that align with the current architecture.
- Do not introduce extra dependencies unless the task absolutely requires them.
- Maintain the current branding and tone of the site.
