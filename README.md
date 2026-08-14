# RORR — marketing site

Static marketing site for **RORR**, a Chrome side-panel companion for LoL esports viewers, and **Muse**,
the AI companion inside it. Built and maintained as three single-file pages.

Live: https://yhc-pie.github.io/rorr-landing-2608/

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Landing | `index.html` | Hero AI input demo, 5-step Muse scroll story, form factor, install CTA |
| Match report | `matches.html` | Per-match data template — PCI+ control curve, wGE+ timeline, moment cards, player table |
| About | `about.html` | B2B: vision, 3-layer engine, data basis, metric value, offerings, founders |

## Repository layout

```
index.html / matches.html / about.html   deployed pages (generated)
RORR *.dc.html                           editable sources
support.js                               runtime required by every page
assets/                                  logo, Muse artwork, founder portraits
github.md                                sync record for the design tool
```

`RORR Landing.dc.html`, `RORR Matches.dc.html` and `RORR About.dc.html` are the editable sources.
`index/matches/about.html` are copies of them with internal links rewritten to the clean filenames —
**regenerate the copies after editing a source**, don't edit both by hand.

## Local preview

No build step. Serve the repo root over HTTP (fonts and `support.js` need a real origin):

```
python3 -m http.server 8000
# open http://localhost:8000/
```

## Deployment

GitHub Pages, `main` / root. Pushing to `main` publishes.

## Conventions

- All-dark theme: background `#0A0A0F`; accents gold `#FFC24A` (metrics) and cyan `#35F0DC` (live/engine). Max two accents.
- Type: Chakra Petch (headlines), Barlow (body), JetBrains Mono (numbers and metrics).
- Copy is English-first, written to tolerate 1.2–1.5× expansion for later Korean localization.
- Metric names are fixed: `PCI+`, `wGE+`. `WRC+` appears only as an engine component on About.
- Every page footer must carry the Riot Games non-endorsement notice, the trademark notice, the
  "derived metrics are not official records" line, and the company registration block.

## Legal

RORR isn't endorsed by Riot Games. League of Legends and LCK marks belong to Riot Games, Inc. and their
respective owners. PCI+ / wGE+ are our own derived metrics and are not official records.

© 2026 Pitch Interactive Inc.
