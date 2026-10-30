# UNION CAFE

**Live production site (do not replace from this branch):** https://union-cafe.vercel.app

This repository now has an editable React + TypeScript + Vite reconstruction of the public cafe page. It is **not** the original ChatGPT Work source tree, and it does not include the original animation prompt documents.

`feat/you-me-coffee-redesign` changes only the “YOU + ME + COFFEE.” panel. The type is Anton (SIL Open Font License 1.1, `@fontsource/anton`). The crema wash is an owner-supplied photo, optimized at `public/textures/espresso-crema.jpg`. The other sections stay on the parity reconstruction.

`feat/marquee-coffee-cloud` replaces the yellow marquee’s green asterisks with a crop of a painting signed MS '16, found via Cosmos (https://www.cosmos.so/e/1815613725) and credited on the pin to karenmvaz. The strip background is that painting’s sky. Usage rights are not confirmed. Do not treat this as cleared for production. See `docs/design-review-2026-10-30.md`.

Production deploys only from `main`. This reconstruction lives on `feat/union-source-reconstruction` so Vercel can build a preview without touching https://union-cafe.vercel.app.

## Recovered, reconstructed, and still missing

**Recovered** (preserved on `main` and the tag `recovered-production-2026-10-30`, commit `ba409b04187f63bbeeadc436a2fea859bd3ea753`):

- The compiled production snapshot: page structure, copy, stylesheet, coffee-fluid simulation, and animated UNION footer.
- Public links that were already on that snapshot (Instagram, Google Maps, mailto).
- Image URLs pointing at the immutable deployment `union-cafe-31ppw27i8-on-point100.vercel.app`. The JPEGs are **not** in this repo. Redistribution rights are not established.

**Reconstructed** (this branch):

- Editable page components under `src/components/`.
- Central copy and unverified-fact flags in `src/content/site.ts`.
- `src/motion/recoveredRuntime.js`, a **RECONSTRUCTED** behavior-preserving port of the compiled footer and fluid engines. It is not original source. The page passes `wordmark: "UNION"` and the coffee settings used on the live site.
- Lint, typecheck, unit tests, and Playwright coverage.

**Unrecovered:**

- The original editable project that the Work session reported at `/workspace/sites/union-cafe`.
- `UNION-FOOTER-PROMPT.md`, `COFFEE-FLUID-PROMPT.md`, and the original full-transfer document from that session.
- Owner confirmation of address, hours, email, menu, and photography.

If those original files show up later, compare them with this reconstruction instead of overwriting it blindly.

## Run locally

Node.js 18.17 or newer.

```bash
npm ci
npm run dev        # http://127.0.0.1:5173
npm run lint
npm run typecheck
npm run test       # vitest
npm run build      # tsc --noEmit && vite build, output dist/
npm run preview
npx playwright install chromium
npx playwright test
```

`noindex,nofollow` stays in `index.html` until the owner approves an official launch.

## Vercel project

Existing project only: `union-cafe` on team `on-point100` (`prj_nn3yZj35E8onEbQwm0Hxq8YXEzBf`). Do not create a second project and do not change the production alias.

`vercel.json` for the reconstructed app:

| Setting | Value |
| --- | --- |
| Framework | `vite` |
| Install command | `npm ci --include=dev` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Production branch | `main` |

`--include=dev` keeps TypeScript and Vite available when the platform install runs with production npm settings. Preview deployments are created from this branch. Merging or pushing to `main` would deploy production.

## Content that still needs the owner

`src/content/site.ts` sets `needsOwnerConfirmation` for the address, hours, email, Instagram, map link, photography, and menu. The visible page still shows the same prototype copy as the recovered site, including the design-preview note. Nothing here is a priced menu or a confirmed set of hours.
