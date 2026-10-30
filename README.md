# UNION CAFE

**LIVE WEBSITE:** https://union-cafe.vercel.app

**GROKBOT TAKEOVER:** [GROKBOT-HANDOFF.md](GROKBOT-HANDOFF.md)

This repository contains a **runnable reconstruction of the published production build**, recovered on October 30, 2026 using the connected Vercel deployment. It is NOT the original editable React/TypeScript Vite source. The website UI, coffee-fluid animation and animated UNION footer remain in a compiled JavaScript asset; Grokbot can inspect and refactor that code, but the original source must be recovered from the earlier Work workspace for a true full transfer.

## Run without waiting for ChatGPT Work quota

Requires Node.js 18.17 or newer. No external npm packages are needed for this snapshot.

1. git clone https://github.com/TimelessVisions/union-cafe.git
2. cd union-cafe
3. npm run dev
4. Open http://localhost:5173

Production-style build: npm run build and then npm run preview.

Optional: npm run hydrate:images downloads four illustrative JPEGs from the immutable former production deployment into public/images and changes the bundle to use local assets. Run this in an Internet-connected computer, review image usage rights, then commit the binaries.

## Known limitations

- JavaScript is a compiled/minified production bundle, not original maintainable source.
- Images are currently loaded from the immutable Vercel deployment, not committed to this repository. The hydrate:images script can download them when online.
- Original animation prompt documents and original full transfer output have not been recovered from the earlier Work session.
- Build and structural checks are not replacements for original unit tests, Playwright checks, or approval by the cafe owner.
- Content still includes illustrative photography and potentially unverified business details.
- Existing page contains a noindex,nofollow robots directive. Do not turn on indexing without business approval.
- The existing Vercel deployment was independently verified as public and serving HTTP 200; do not claim the new GitHub version is linked to Vercel until it actually is.

## Production metadata

- Vercel project: union-cafe, team on-point100
- Project ID: prj_nn3yZj35E8onEbQwm0Hxq8YXEzBf
- Production deployment: dpl_Hh7m7v1EvMHJQ7HXQt1GpQkSWHHQ
- Source image host: union-cafe-31ppw27i8-on-point100.vercel.app
- Creative reference: https://chachamatcha.com/ (inspiration only, no proprietary content copying)

See the handoff document for recovery, refactoring, testing and Vercel Git connection instructions.
