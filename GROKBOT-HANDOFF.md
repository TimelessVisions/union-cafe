# UNION Cafe: full Grokbot takeover instructions

Prepared October 30, 2026. This file tracks observed facts and remaining work. Treat it as an execution brief, **not** proof that the source transfer is complete.

## Verified live properties

- Public prototype: https://union-cafe.vercel.app . Verified HTTP 200 using the Vercel connection.
- Vercel project: `union-cafe`; project ID `prj_nn3yZj35E8onEbQwm0Hxq8YXEzBf`.
- Vercel team: `on-point100` (On Point).
- Production deployment ID: `dpl_Hh7m7v1EvMHJQ7HXQt1GpQkSWHHQ`, state READY.
- Production deployment details: https://vercel.com/on-point100/union-cafe/Hh7m7v1EvMHJQ7HXQt1GpQkSWHHQ
- Deployment framework: Vite. The published tree contains `index.html`, `favicon.svg`, bundled JS/CSS and illustrative photos. These are compiled assets, not the original editable source.
- Current page metadata contains `noindex,nofollow`.
- Public GitHub repository: https://github.com/TimelessVisions/union-cafe .
- The original Vercel project is **not yet linked to this GitHub repo**; do not create a duplicate Vercel project.

## Unrecovered original project

The full editable original was created in the earlier ChatGPT **Work** conversation titled **Clone Cafe Website**.

That session stated the source directory was `/workspace/sites/union-cafe` in the Work cloud computer. That directory is **not** on the user's Mac and is **not** mounted in the current chat. The Work output sidebar also contained a file called `UNION-CAFE-GROKBOT-FULL-TRANSFER...`, plus two prompt documents:

- `docs/UNION-FOOTER-PROMPT.md`
- `docs/COFFEE-FLUID-PROMPT.md`

Those originals must be exported and uploaded unchanged. Do not recreate them from guesswork or claim that this public README represents the original code.

## Product intent

Use https://chachamatcha.com/ as an **inspiration**, rather than copying proprietary HTML, art, photos, trademarks or code. Adapt the design to UNION Cafe with distinctive typography and cafe identity. The first animation concept forms or highlights the word `UNION` in the footer. The second uses coffee-colored fluid movement with touch and pointer interaction. Provide graceful lower-power and reduced-motion alternatives. Include functional navigation and mobile layouts.

The prior Work session reported a production build and desktop/mobile checks, but those tests were **not independently rerun** during this transfer. Do not assert they pass.

Current images are illustrative. Confirm rights to imagery and all factual business information before publishing an official commercial site. The original user spoke to the cafe owner, but no documented approval or complete verified menu, pricing, hours or ordering integrations were supplied in this transfer.

## Grokbot: execute in order

1. Gain authorized access to the original **Clone Cafe Website** Work conversation and export `/workspace/sites/union-cafe` as a ZIP, including hidden nonsecret config files. Obtain the exact original full-transfer output and both animation prompt files. If not accessible, request the user attach the ZIP and output documents. Do not pretend a minified Vercel build is editable source.
2. Audit all files locally. Preserve complete project structure, source components, package lockfile, build configs, styles, images, animations, docs and tests. Exclude `node_modules`, `.env` and other secrets, tokens, credentials and caches. Review copyrighted images, private data and any business-owner approval needs. Use placeholders for unconfirmed claims.
3. Commit the recovered source to the existing public `TimelessVisions/union-cafe` repository on `main`. Do not overwrite the README's verified status facts without reconciling them. Keep the work reproducible: add exact install, dev, test and build commands.
4. Run dependency installation, typecheck/lint/build, available unit tests, desktop/mobile Playwright interaction tests, accessibility basics, touch interactions, WebGL fallback and `prefers-reduced-motion`. Produce screenshots and specific pass/fail logs. Do not invent evidence.
5. In the Vercel dashboard, connect **the existing project** `union-cafe` to this repo under Project Settings > Git. Verify root directory, Vite build command and output directory, environment variables and asset paths before triggering deployment. Ensure Git integration uses the `TimelessVisions` account. Do not delete the existing production project.
6. Verify production deploy from a GitHub commit; note SHA and deployment ID. Compare key screens against the existing public prototype; check navigation, accessibility, mobile breakpoints, animation behavior and all links. Keep `noindex,nofollow` until the owner explicitly approves official public search indexing.
7. Record honest remaining issues, client approvals, transfer files, release notes and source-to-production proof. Only then report the project as fully transferred.

## Definition of complete

- Every relevant **editable** source file is visible on the public GitHub repo, with permitted/licensed assets and no secrets.
- `npm install` or `npm ci` and `npm run build` work from a clean clone, with test results documented.
- Vercel project is **the original** `union-cafe`, linked to `TimelessVisions/union-cafe`.
- A production deploy is traceable to a GitHub commit, and public URL verified.
- The two original prompt documents and original transfer document are preserved.
- Any known unfinished design, factual, licensing or business-owner approvals are documented, not silently asserted.

## Current blocker

The newly created GitHub repository is now accessible and writable. The missing item is an export of the original editable Work project. This repository currently contains documentation only.
