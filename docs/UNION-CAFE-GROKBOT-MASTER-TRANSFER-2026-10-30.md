# UNION CAFE | COMPLETE GROKBOT ENGINEERING TRANSFER

**Version:** 1.0, October 30, 2026  
**Project:** UNION Cafe, Harlem, NYC  
**Owner's public GitHub repository:** https://github.com/TimelessVisions/union-cafe  
**Current public website:** https://union-cafe.vercel.app  
**Execution mode:** Continue building immediately. No dependence on the previous ChatGPT Work session.  
**Important truth boundary:** The GitHub repository contains a recovered *compiled production snapshot*, not the original editable React/Vite source. The full transfer of original source code remains incomplete.

---

## 0. COPY/PASTE COMMAND FOR GROKBOT

> You are the principal engineer, creative technical director, QA lead, and deployment operator taking over the UNION Cafe project. Start executing now, not just planning. Clone `https://github.com/TimelessVisions/union-cafe`, read this master transfer, the repository `README.md`, and `GROKBOT-HANDOFF.md`, and independently verify the current deployment before making changes. Your first mission is to make the recovered production snapshot independently reproducible, preserve the existing design, coffee-fluid animation and animated UNION footer, and evolve it into maintainable, original React/Vite source. Do not claim to possess the original unminified code or the original animation prompt documents unless you actually recover them. Work in a branch, run tests, save visual proof, open a reviewable PR, and prepare the **existing** Vercel project for reliable Git-based deployment. Never create a duplicate production Vercel project, expose secrets, replace the live site without approval, copy proprietary reference-site code, or invent cafe business facts. Continue as far as account permissions and free-tier limits allow; report concrete commits, working URLs, test outputs and only genuine blockers.

**User's immediate objective:** Bring this website into Grokbot *now* so further development can continue despite the earlier ChatGPT Work five-hour usage limit. This is a valid continuation from the public GitHub snapshot, not a workaround that bypasses an account limit.

---

## 1. VERIFIED STATE AND EVIDENCE

The information below was verified through the connected GitHub and Vercel accounts during the preceding handoff. Recheck it because external state can change.

| Resource | Verified value | Notes |
| --- | --- | --- |
| GitHub account | `TimelessVisions` | Authenticated connector had admin/push permission |
| Repository | `TimelessVisions/union-cafe` | **Public**, default branch `main` |
| Repository URL | https://github.com/TimelessVisions/union-cafe | Contains recovered bundle and scripts |
| Recovered snapshot commit | `1b816c0e98f5c23d932a1185623f52cbea83a50f` | Commit includes project skeleton, assets, recovery scripts and prior handoff |
| GitHub commit | https://github.com/TimelessVisions/union-cafe/commit/1b816c0e98f5c23d932a1185623f52cbea83a50f | Source starting point; fetch fresh `main` HEAD before editing |
| Original public site | https://union-cafe.vercel.app | HTTP 200 confirmed, do not disrupt |
| Vercel team | `on-point100` (`On Point`) | Team ID `team_vi2Gtb1S3HWJybrZWhrxyt3R` |
| Existing Vercel project | `union-cafe` | Project ID `prj_nn3yZj35E8onEbQwm0Hxq8YXEzBf` |
| Original production deployment | `dpl_Hh7m7v1EvMHJQ7HXQt1GpQkSWHHQ` | State `READY`; kept intact |
| Original production deployment URL | https://union-cafe-31ppw27i8-on-point100.vercel.app | Used for temporary image paths |
| Git-sourced preview deployment | `dpl_3bT46p4XfBsXjPNZPSCdQHM5cvnQ` | State `READY`, metadata associates it with snapshot commit `1b816c0...` |
| Preview hostname | `union-cafe-bwqtyys2g-on-point100.vercel.app` | Preview URL was **not** independently confirmed viewable; do not claim page-level QA |
| Preview alias | `union-cafe-git-main-on-point100.vercel.app` | Alias was returned by Vercel |
| Source framework in original Vercel project | `vite` | The recovered repository is a lightweight static snapshot instead of a reconstructed Vite source tree |
| Indexing | `noindex,nofollow` | Keep until cafe owner approval and factual-content review |

**Distinguish these claims precisely:**

1. **Verified:** Public production site returned HTTP 200; Vercel project and deployments exist; GitHub repo is public and contains a recovered compiled bundle; preview build reached `READY` with GitHub commit metadata.
2. **Not verified:** Original editable components; original Work prompt files; original test suite; production deployment automatically triggered on each Git push; full preview-browser rendering; cafe owner signoff; licensing of illustrative photos; verified menu, hours, ordering and other business information.
3. **Not the same thing:** Successfully issuing a one-off Git-sourced Vercel deployment is **not** proof that the project's persistent Git integration is configured and automatic builds are wired up.

## 2. ORIGINAL REQUEST AND PRODUCT SCOPE

The user met the owner of UNION Cafe and asked for a website inspired by the design approach at **https://chachamatcha.com/**, then adapted to **UNION Cafe**. The user supplied reference code/notes for two animations and asked:

- Adapt the **first concept to display `UNION`** as an animated wordmark, especially in the footer.
- Adapt the **second concept into an interactive coffee-fluid animation**.
- Deliver a polished responsive cafe site suitable for demonstrating to the owner.
- Make it publicly viewable on Vercel.
- Put the complete project in a public GitHub repository.
- Provide a thorough project transfer so Grokbot can continue development.

**The reference site is an experience and layout inspiration, not a source-code or asset license.** Do not rip HTML, image assets, brand elements, text or proprietary interactions from another business. Create original visual code and brand composition with clear provenance.

### Current identity and intent

- Brand name: **UNION CAFE** (use uppercase `UNION` when appropriate for visual branding).
- Current page title captured from public deployment: `UNION CAFE — A little more together.`
- Tone: warm, human, inviting, neighborhood-oriented, creative, distinctive.
- Color starting point observed from deployment: warm espresso/dark brown (`#342315` in theme-color), cream, coffee/latte tones. These are current-site observations, **not** proof of a formally approved brand guide.
- Visual language: strong typography, editorial layout, spacious art direction, expressive custom motion, tactile coffee visuals, minimal unnecessary UI.
- Existing original user links: https://www.instagram.com/unioncafenyc/ and https://maps.app.goo.gl/oQBU6zFPd7KSW1ob9 (verify each destination before publishing).
- The deployed description references `115 W 142nd Street, New York`. **Treat address and business details as needing owner confirmation**, regardless of their current appearance on the site.
- Illustrative pictures are not confirmed authentic cafe photographs. Label and replace before an official launch.

## 3. WHAT EXISTS IN THE GITHUB REPOSITORY

At commit `1b816c0...` the recovery package contains these important files (pull latest `main` in case it has changed):

```text
union-cafe/
├── README.md
├── GROKBOT-HANDOFF.md
├── package.json
├── .gitignore
├── index.html
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── index-CGjPMKhG.js
│       └── index-OVsnhrqH.css
└── scripts/
    ├── build.mjs
    ├── serve.mjs
    ├── check.mjs
    └── hydrate-images.mjs
```

The JS and CSS came from the live Vercel static deployment. This is a compiled React application. Components, source maps, original code comments and original Vite configuration are **not** necessarily present.

`public/assets/index-CGjPMKhG.js` includes production website behavior, including the UNION interface, animated footer and coffee-fluid experience. It was altered during recovery only to make `/images/` references point to the immutable original Vercel deployment image host. That is a temporary dependency, not permanent hosting.

The repo's scripts were added to make the published snapshot run without full original Vite build dependencies:

```bash
git clone https://github.com/TimelessVisions/union-cafe.git
cd union-cafe
npm run test      # structural snapshot check only
npm run dev       # local snapshot server (default http://localhost:5173)
npm run build     # copies recovered static bundle to dist/
npm run preview   # serves dist/
```

Node.js 18.17+ is declared for the recovery scripts. These commands are **instructions to run**, not assertions of independently executed QA in this handoff. Check dependencies and environment afresh before refactoring.

Optional image hydration script:

```bash
npm run hydrate:images
```

This fetches `cafe.jpg`, `coffee.jpg`, `latte.jpg`, `pastry.jpg` from the existing immutable Vercel deployment, and rewrites the bundle's image paths to local `/images/` URLs. **Important:** Verify whether redistribution is permitted before publishing the downloaded JPEGs to a public repository. If rights are unclear, use licensed replacements or owner-supplied media instead.

## 4. LOST ORIGINAL MATERIAL: DO NOT FABRICATE IT

The previous ChatGPT **Work** conversation was titled **Clone Cafe Website**. It reportedly created an editable project at:

```text
/workspace/sites/union-cafe
```

This is a path inside the prior Work cloud environment, **not a path on the user's Mac, Grokbot machine, or this chat's container**. The earlier Work conversation's outputs sidebar also showed:

```text
UNION-FOOTER-PROMPT.md
COFFEE-FLUID-PROMPT.md
UNION-CAFE-GROKBOT-FULL-TRANSFER...  (exact extension/name not verified)
```

The recovered public site is enough to continue coding but cannot faithfully recreate unminified source history, project dependencies, tests, or those exact original documents. If Work becomes available later, export those files and compare their contents with the reconstruction. Use exact originals if recovered. Until then, label any newly authored animation specifications **RECONSTRUCTED**.

Do **not** spend the whole session waiting for the original Work quota to reset. Work from GitHub now.

## 5. EXECUTION PRIORITIES, IN ORDER

### Phase 0: Verify access and protect the live deployment

1. Open the repository, identify current `main` commit and list all tracked files. Do not assume the historical commit is still HEAD.
2. Check whether Grokbot has GitHub read/write and Vercel project access. Use normal authenticated app permissions, never solicit credentials in chat or commit API tokens.
3. View the existing live site and capture screenshots at desktop and phone sizes. Record exact observed layout, text, link targets and animation behavior.
4. If possible, reproduce the site locally using the existing `npm` scripts. Confirm baseline before changing aesthetics.
5. Create a branch such as `feat/union-source-reconstruction`. Make small reviewable commits rather than replacing `main` with an unverified rewrite.
6. Preserve the existing production URL and the last known-good deployment. Do **not** create a second Vercel project named `union-cafe` or change production aliases while testing.

**Deliverable:** Baseline report with current commit SHA, environment, screenshots, live vs local differences, and known blockers.

### Phase 1: Recover into maintainable editable source

Use the original Work source if it becomes available. Otherwise reconstruct clean, original maintainable source **from observed behavior and permissible compiled bundle evidence**, not by copying Cha Cha Matcha implementation.

Suggested target organization (modify based on verified app needs):

```text
src/
  main.tsx
  App.tsx
  components/
    Header.tsx
    Hero.tsx
    CoffeeFluid.tsx
    UnionFooter.tsx
    PhotoGrid.tsx
    MenuPreview.tsx
    VisitSection.tsx
  content/
    site.ts
  styles/
    tokens.css
    global.css
  lib/
    motion.ts
public/
  images/
  favicon.svg
index.html
package.json
package-lock.json
vite.config.ts
tsconfig.json
playwright.config.ts
tests/
  smoke.spec.ts
  animation.spec.ts
  responsive.spec.ts
  accessibility.spec.ts
README.md
GROKBOT-HANDOFF.md
```

- Use **React + TypeScript + Vite** unless an existing original source tree dictates otherwise.
- Use normal npm lockfile/install behavior; avoid unnecessary frameworks, paid services, external APIs or unmaintained animation libraries.
- Component boundaries should make edits simple without touching a huge bundled script.
- Preserve semantics and current visual appearance first. Design improvements come **after baseline visual parity**.
- Keep all original content factual and mark unverified data in a centralized config.
- Do not declare the rewrite done until running clean install, build, tests and visual comparison.

### Phase 2: Visual and interaction requirements

**Hero and first impression**

- Brand presence should be immediate. Typography is purposeful, bold, clear and aesthetically refined.
- Page should feel like a distinctive Brooklyn/Harlem/NYC neighborhood cafe, not a generic AI SaaS landing page.
- Preserve warm coffee palette and editorial style from current baseline, allowing the owner to approve changes.
- Make the primary action immediately understandable: discover the cafe, visit, and view verified menu/ordering if available.
- No fake reviews, invented awards, fake social proof or placeholder pricing presented as truth.

**Fluid coffee animation, reconstructed specification**

- Rich fluid visual where espresso, cream and latte tones move like mixing coffee, not neon cyberpunk liquid.
- Support controlled pointer/mouse motion, optional tap/touch motion, time-based gentle idle motion.
- For a WebGL implementation, choose color/quality, simulation resolution, dissipation, curl/vorticity, splat radius, quality and glow based on hardware capability. The original user-provided reference used a `FluidCanvas`-style prop surface with concepts including `colors`, `dissipation`, `curl`, `splatRadius`, `quality`, `glow`, `idle`, `paused`, `captureTouch`, `label`, and `onStatusChange`.
- Never hijack mobile page scrolling: pointer events/touch capture must be deliberate and accessible.
- Pause or reduce work when offscreen, when tab hidden, under `prefers-reduced-motion`, or when low-power hardware is detected.
- Provide a graceful static/CSS fallback if WebGL is unavailable; no blank hero or infinite GPU loop.
- Preserve a visible heading, action and contrast regardless of animation support.
- Validate with real WebGL-disabled and reduced-motion scenarios in Playwright, not just code inspection.

**Animated UNION footer, reconstructed specification**

- Spell **U N I O N**, exactly, with thoughtful editorial motion. Footer wordmark should be substantial, intentional and legible.
- Create an original kinetic typography treatment inspired by the user-supplied first animation concept, without falsely claiming the original prompt is present.
- Animate on viewport entry or user interaction with stable layout, precise easing and no clipping.
- Provide a static readable presentation in reduced-motion mode.
- Footer includes only verified links/contact/visit information. Functional map and Instagram links must be tested.
- No distracting endless autoplay or motion that causes layout shifts.

**Responsive/quality standard**

- Test at minimum 320, 360, 390, 768, 1024 and 1440 px widths, plus landscape on a phone.
- Navigation works with keyboard and touch; obvious focus states and click targets.
- Images have sensible alt text and use modern responsive sizing/lazy loading.
- Avoid horizontal overflow, low-contrast text, cropped key content and layout shifts.
- Honor reduced motion, WebGL failure and slow network.
- No console errors, broken links, or inaccessible controls on intended user paths.

### Phase 3: Content, real photography and ownership review

Current photos are illustrative. They do not establish cafe ownership or license. Confirm or replace every image before a commercial official launch. Obtain owner-approved facts for:

- Correct business name, address, map pin and social handle.
- Actual menu items, descriptions, prices and dietary information (if supplied).
- Opening hours, contact phone/email and official online-ordering platform (if any).
- Real cafe, product, team and interior photography, with permission to publish and redistribute.
- Preferred primary CTA, announcements and launch date.
- Consent to use the cafe name publicly as an official site rather than an independent concept.

If facts are unknown, show a tasteful concept treatment and clearly label it as a proposal. Do not hallucinate or scrape unsupported details to fill gaps. Keep `noindex,nofollow` until business ownership, facts and readiness are approved.

### Phase 4: Baseline and regression testing

Install and use Playwright once source reconstruction is underway. Suggested tests:

1. **Smoke**: homepage returns 200; root mounts; UNION visible; core sections present.
2. **Navigation**: every link, anchor, menu toggle and CTA behaves correctly and targets the right destination.
3. **Responsive**: viewport screenshots at widths above; no overflow or blocking overlays.
4. **Motion**: footer animation appears and completes without hiding the wordmark; fluid canvas reacts if enabled.
5. **Accessibility**: keyboard tab order, meaningful labels, heading hierarchy, image alt text, contrast, reduced-motion fallback.
6. **Failure paths**: WebGL unavailable, low-powered device, hidden tab, slow network, disabled images.
7. **Performance**: page load, JS payload size, canvas idle CPU/GPU demand, resize handling, asset caching, major Web Vitals where measurable.
8. **Truth and security**: no secrets in repo/output, no unlicensed photos committed, no false menu or hours claims, no production analytics/tracking without permission.

Example commands for the **reconstructed** project, after scripts have actually been added:

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
npx playwright install chromium
npx playwright test
```

If some commands do not yet exist, add them with honest scopes instead of pretending they pass. Document concrete counts, screenshots and failing cases. The current repository's `npm run test` is only a **static structural check**, not a complete test suite.

### Phase 5: GitHub and Vercel deployment

**Existing project preservation is mandatory.** The user wants the original public Vercel site to continue working and the repo to become its source of truth.

1. Verify the clean reconstructed branch runs locally and in an isolated preview.
2. Push all safe files, README, lockfile, code, tests and permissioned assets to GitHub.
3. Open a PR with screenshots and test results. Let the owner review significant aesthetic differences.
4. In **existing** Vercel project `union-cafe` under `on-point100`, inspect the project Git settings. Connect `TimelessVisions/union-cafe` through a supported Git connection if it is not persistently linked. A one-off Git-sourced preview build already succeeded; that does not prove webhook-based continuous deployment.
5. Set the correct root, install command, build command and output directory for the actual final project. For the recovered static snapshot, `npm run build` produces `dist/`; for the reconstructed Vite project, confirm the same from its real config.
6. Deploy to a safe **preview** first. Verify its actual URL in a browser and compare it with production. Fix defects before requesting promotion.
7. With explicit owner approval, release to production **within the existing project** and verify `https://union-cafe.vercel.app` returns the new GitHub commit build.
8. Keep rollback details and the last-known-good deployment. Never delete the original project or silently overwrite unrelated environment settings.

### Phase 6: Production-ready handoff

Deliver a concise release packet:

- Current GitHub repository and branch/commit SHA.
- Exact Vercel project and verified, accessible preview or production URLs.
- Commands for local development, production build and deployment.
- Test matrix with **actual** pass/fail counts and screenshots.
- Animation implementation notes and accessibility/performance fallbacks.
- Screenshot comparison with existing live design and list of deliberate changes.
- Photo licenses, owner-approved menu/hours/contact details, and unresolved blockers.
- Exact remaining steps to make the website an officially approved cafe website.

---

## 6. ENGINEERING STRATEGY: DO NOT DESTROY WHAT ALREADY WORKS

**Baseline-first principle:** Reconstruct from the actual rendered behavior and existing bundle, not from a vague fresh design prompt. A complete rewrite can easily lose the user's approved layout and both animations.

Recommended safe strategy:

1. Capture original screenshots and motion behavior before touching code.
2. Keep the recovered snapshot intact on a stable branch or tag, such as `recovered-production-2026-10-30` if repo permissions permit.
3. Extract stable content, design tokens and section structure.
4. Implement equivalent source components one at a time, with visual comparisons.
5. Keep original production hosted until preview parity is proven.
6. Allow creative improvements in a second branch, not bundled invisibly into source recovery.

For AI-assisted parallel execution, split into independently reviewable tracks if supported:

- **Track A, engineering:** source reconstruction, semantic components, scripts, git hygiene.
- **Track B, motion:** coffee fluid, footer kinetic wordmark, fallback and performance.
- **Track C, QA:** Playwright, visual snapshots, responsive/a11y/performance.
- **Track D, operations:** GitHub, Vercel link, preview validation, release records.

Avoid concurrent edits to the same files without merge coordination. Each track must report concrete artifacts rather than only narrating intended work.

## 7. HARD GUARDRAILS

- **Zero invented success:** Do not say tests, deployment, Git connection, owner approval, or full source recovery succeeded without direct verification.
- **Zero cost without approval:** Prefer free/local tools. No premium templates, bought plugins, paid hosting upgrades or hidden spending.
- **Zero secret leakage:** No environment variables, credentials, tokens, authentication cookies, private files, or copied external keys in a public repo.
- **Zero third-party IP copying:** Visual references are not a license to copy another cafe's proprietary art, text, site source or photos.
- **No unsupported commerce:** Do not connect a payment provider, order processor, POS or menu API without owner permission and authenticated integration access.
- **No false business facts:** An existing prototype displaying a statement does not prove its accuracy.
- **No fake SEO claims:** Keep `noindex,nofollow` until explicit approval; never promise rankings.
- **No destructive production changes:** Original public Vercel deployment is the safety baseline.
- **No unnecessary pauses:** When blocked on original source access, build a maintainable reconstruction from the authorized public deployment and keep moving.

## 8. DEFINITION OF COMPLETE

This project is **not fully transferred** until all of the following are true:

- [ ] GitHub contains maintainable *editable* source, not only a minified bundle.
- [ ] A clean clone can install and run local dev, lint, typecheck, test and production build.
- [ ] The coffee-fluid animation and animated `UNION` footer pass interaction, fallback and reduced-motion checks.
- [ ] Desktop and phone visual comparisons show no unintended regressions.
- [ ] Images, content and business facts are reviewed and licensed/approved as appropriate.
- [ ] The existing Vercel project is actually linked for ongoing Git deployment, with an accessible preview proving source-to-deploy traceability.
- [ ] Any production promotion is authorized, verified and rollback-capable.
- [ ] Documentation distinguishes recovered content, reconstructed code, and unrecovered original files.
- [ ] Grokbot reports links, commit hashes, proof and remaining blockers without invented results.

The recovered snapshot is already a legitimate starting point. A successful new Vercel preview build has been recorded, but the original prompt docs, source tree and final QA remain outstanding.

## 9. FIRST TEN COMMANDS OR ACTIONS FOR GROKBOT

Run or adapt as actual environment permits, without skipping the access checks:

```bash
# 1. Clone the existing PUBLIC source snapshot.
git clone https://github.com/TimelessVisions/union-cafe.git

# 2. Enter the repository.
cd union-cafe

# 3. Inspect the repository and latest history.
git status --short --branch
git log -5 --oneline
find . -maxdepth 3 -type f | sort

# 4. Read the local context.
cat README.md
cat GROKBOT-HANDOFF.md
cat package.json

# 5. Validate the recovery snapshot.
npm run test

# 6. Build the recovered snapshot.
npm run build

# 7. Run the local snapshot.
npm run dev

# 8. Inspect in your browser at http://localhost:5173 and record screenshots.

# 9. Start a safe reconstruction branch after confirming a clean worktree.
git switch -c feat/union-source-reconstruction

# 10. Begin component reconstruction; commit small, tested changes.
```

After this, proceed through Phases 1–6. Do not force a pristine install by deleting unknown files or resetting a repository if user changes are present.

## 10. FIRST RESPONSE EXPECTED FROM GROKBOT

A concise factual report, not motivational fluff, in this structure:

```text
UNION CAFE TAKEOVER
Repository access: [verified yes/no]
Checked commit: [SHA]
Working local build: [command and verified result]
Site parity: [observed / not yet verified]
Vercel access: [verified yes/no]
Next action running now: [one concrete task]
Hard blocker (if any): [specific missing permission/file, not a vague question]
```

Then continue doing the work, with verifiable commits and results. Ask the user only for a specific permission, access step, asset-rights decision, or aesthetic approval that actually blocks the next operation.

---

## 11. ADDITIONAL LINKS AND RECOVERY NOTES

- [UNION Cafe GitHub repository](https://github.com/TimelessVisions/union-cafe)
- [Existing GitHub handoff](https://github.com/TimelessVisions/union-cafe/blob/main/GROKBOT-HANDOFF.md)
- [Recovered README](https://github.com/TimelessVisions/union-cafe/blob/main/README.md)
- [Source snapshot commit](https://github.com/TimelessVisions/union-cafe/commit/1b816c0e98f5c23d932a1185623f52cbea83a50f)
- [Current production website](https://union-cafe.vercel.app)
- [Existing Vercel deployment inspector](https://vercel.com/on-point100/union-cafe/Hh7m7v1EvMHJQ7HXQt1GpQkSWHHQ)
- [Visual inspiration](https://chachamatcha.com/)
- [Cafe Instagram reference](https://www.instagram.com/unioncafenyc/)
- [Cafe Google Maps reference](https://maps.app.goo.gl/oQBU6zFPd7KSW1ob9)

### Final instruction to Grokbot

**Act on the repository now.** Do not wait for the previous ChatGPT Work limit to reset. Use the recovered deployment as a truthful visual and behavioral baseline, build the real editable source and testing foundation, keep the existing public website safe, and return precise proof of progress. When the original Work source becomes available, reconcile rather than blindly overwrite your tested work.
