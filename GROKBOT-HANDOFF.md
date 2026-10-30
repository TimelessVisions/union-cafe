# UNION CAFE | GROKBOT HANDOFF

Status on October 30, 2026: the public site is still the recovered production deployment. Editable React/Vite source has been reconstructed on `feat/union-source-reconstruction`. `feat/you-me-coffee-redesign` stacks on that branch and restyles only the together-art panel (lime field, Anton word block, owner-supplied crema wash). `feat/marquee-coffee-cloud` stacks on that and replaces the marquee asterisks with a crop of the MS '16 painting credited to karenmvaz via Cosmos (https://www.cosmos.so/e/1815613725). Usage cleared by owner 2026-10-30. See `docs/design-review-2026-10-30.md`. Original Work-session source and prompt documents were **not** recovered. Do not treat the reconstruction as those files.

## Links and verified identifiers

- Live site: https://union-cafe.vercel.app
- Public code: https://github.com/TimelessVisions/union-cafe
- Snapshot tag: `recovered-production-2026-10-30` at `ba409b04187f63bbeeadc436a2fea859bd3ea753`
- Vercel project: `union-cafe` under `on-point100`
- Vercel project ID: `prj_nn3yZj35E8onEbQwm0Hxq8YXEzBf`
- Production deployment kept intact: `dpl_Hh7m7v1EvMHJQ7HXQt1GpQkSWHHQ`
- Immutable image host: https://union-cafe-31ppw27i8-on-point100.vercel.app
- Git link: `TimelessVisions/union-cafe`, production branch `main`
- Preview builds: pushes to a non-main branch or PR. Do not push or merge this work to `main`.

## What each kind of material is

| Kind | Where it is | What it is |
| --- | --- | --- |
| Recovered | Tag `recovered-production-2026-10-30` and `main` at `ba409b0` | Compiled snapshot, recovery scripts, and the handoff that shipped with it |
| Reconstructed | `src/` on `feat/union-source-reconstruction` | Editable page, content config, and a behavior-preserving motion port |
| Unrecovered | Not in this repo | `/workspace/sites/union-cafe`, `UNION-FOOTER-PROMPT.md`, `COFFEE-FLUID-PROMPT.md` |

`src/motion/recoveredRuntime.js` is labeled **RECONSTRUCTED** in the file header. It preserves the compiled coffee-fluid and UNION footer behavior, including:

- Pointer and touch splats, with `touch-action: pan-y` unless `captureTouch` is set, so the hero does not hijack scrolling.
- Gentle idle motion, paused when the canvas is offscreen or `document.hidden` is true.
- `prefers-reduced-motion`: the fluid loop stops and the footer wordmark is static (`animation: none`) while the letters stay visible.
- A 2D `.coffee-marble` canvas when WebGL2 cannot be created, including `webglcontextlost`.

The cafe page calls that runtime with the live site's settings (`dissipation: 0.1`, `curl: 14`, `splatRadius: 0.65`, `quality: "medium"`, `glow: 0`, colors `#f4dfb8`, `#b77b44`, `#6b351e`, `#d8ad78`) and `wordmark: "UNION"`.

## Commands

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
npx playwright install chromium
npx playwright test
```

`npm run build` is `tsc --noEmit && vite build`. Output directory is `dist/`.

Clean `npm ci` on October 30, 2026 (Node 22 locally; the Vercel project is set to Node 26):

| Command | Result |
| --- | --- |
| `npm ci` | exit 0, 0 vulnerabilities |
| `npm run lint` | exit 0 |
| `npm run typecheck` | exit 0 |
| `npm run test` | vitest 6 passed, 1 file |
| `npm run build` | exit 0, `dist/` |
| `npx playwright test` | 19 passed |

`src/motion/recoveredRuntime.js` is eslint-ignored on purpose. It is generated-structure recovered logic, not hand-formatted application code.

## Vercel settings for this project

| Setting | Value |
| --- | --- |
| Framework | vite |
| Install command | `npm ci --include=dev` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Production branch | `main` |

Do not create another Vercel project named `union-cafe`. Do not change production aliases. Do not turn off `noindex,nofollow` until the owner approves an official launch.

## Known differences from the live snapshot

- Hero screenshots will not match pixel-for-pixel. The coffee simulation keeps moving, so two captures of the same build already differ. Header, type, buttons, favorites, together, visit, and the UNION footer matched the live site at a 0.15 pixel threshold on October 30, 2026.
- At 320px the recovered snapshot overflowed horizontally by about 7px (`scrollWidth` 327). The reconstruction sets `min-width: 0` on the tight grids in `src/styles/containment.css` so the page does not scroll sideways. That is the only intentional layout change.
- `data-needs-confirmation` and `data-photo="illustrative"` mark unverified facts. They do not change the painted page.
- Illustrative JPEGs stay on the old deployment host. They are not committed.

## Still needs a person

- Confirm or replace address, hours, email, map pin, Instagram, menu, and photos.
- Decide whether the prototype may become the official cafe site.
- Only then promote a reviewed commit from `main` and revisit indexing.
