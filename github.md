repo: yhc-pie/rorr-landing-2608
branch: main

## Last sync
date: 2026-08-14
note: repo holds index/matches/about.html (publish build) + the three .dc.html sources + assets. Publish HTML must be regenerated after any .dc.html change (scripts/build-publish.mjs).

### Updated in this project
- EN/KO language toggle added to all three pages (nav pill, persisted in localStorage as `rorr-lang`).
- Korean typography: Gothic A1 for display, Pretendard for body/mono, `word-break:keep-all` under `html[lang="ko"]`.
- Translation dictionary lives inside each page's logic class; English markup unchanged.
- Publish HTML in the repo is now stale — rerun the build before deploying.

## Screen map
| Project screen | Repo files |
| --- | --- |
| RORR Landing.dc.html | RORR Landing.dc.html → index.html |
| RORR Matches.dc.html | RORR Matches.dc.html → matches.html |
| RORR About.dc.html | RORR About.dc.html → about.html |
| assets/ (logo, Muse poses, founder portraits) | assets/* |
