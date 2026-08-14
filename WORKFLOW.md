# Working with Claude Code

The goal: stop hand-downloading and hand-uploading files. Claude Code owns git; this design tool owns
the design work. Pick one of the two flows below.

---

## Flow A — attach the local clone (fewest steps)

1. Clone once, locally:
   ```
   gh repo clone yhc-pie/rorr-landing-2608
   cd rorr-landing-2608
   ```
2. In this design project, attach that folder (paperclip → attach local folder). I can then read the
   real repo files and write design changes straight into them — no zip, no upload.
3. In the same folder, run Claude Code and let it handle git:
   ```
   claude
   > 변경된 파일 확인하고, publish 페이지 재생성한 뒤 커밋·푸시해줘
   ```

Division of labour: I edit `RORR *.dc.html` and `assets/`. Claude Code runs the build script, reviews
the diff, writes the commit message, pushes, and checks the Pages deploy.

---

## Flow B — Claude Code pulls from the design tool

If you'd rather not attach the folder, download the project zip when a design change is ready, drop it
next to the clone, and let Claude Code do the merge:

```
> ~/Downloads/rorr-project.zip 를 풀어서 저장소의 .dc.html 과 assets 만 덮어쓰고,
  publish 페이지 재생성하고 커밋해줘. 지워진 asset 은 git rm 으로 정리해줘.
```

Slower than Flow A, but Claude Code still does every git step — you never touch the GitHub web UI.

---

## The one rule

`RORR *.dc.html` are the sources. `index.html` / `matches.html` / `about.html` are generated. After any
source edit, regenerate:

```
node scripts/build-publish.mjs
```

Never edit the generated files by hand — the next build overwrites them.

## A good CLAUDE.md for the repo

Drop this in the repo root so Claude Code knows the rules without being told each time:

```markdown
# rorr-landing-2608

Static marketing site, no build system. Three pages, plain HTML with inline styles.

## Rules
- `RORR *.dc.html` are the editable sources. `index.html`, `matches.html`, `about.html` are generated
  by `node scripts/build-publish.mjs` — never edit them by hand.
- `support.js` is a vendored runtime. Do not modify it.
- Styling is inline only. No stylesheets, no CSS classes, no frameworks, no npm dependencies.
- Palette: background #0A0A0F, gold #FFC24A (metrics), cyan #35F0DC (live/engine). Max two accents.
- Type: Chakra Petch (headlines), Barlow (body), JetBrains Mono (numbers).
- Copy is English-first and must tolerate 1.2–1.5x expansion for Korean localization.
- Metric names are fixed: PCI+, wGE+. WRC+ only appears on About, as an engine component.
- Every footer keeps all four notices: Riot non-endorsement, trademarks, "derived metrics are not
  official records", and the company registration block.
- Deployed by GitHub Pages from main / root. Pushing to main publishes.

## Checks before pushing
- Open each page over http (`python3 -m http.server`) and confirm no console errors.
- Check the layout at 1440px and 390px wide.
```

## Useful Claude Code prompts

```
> Pages 배포 상태 확인하고 실패했으면 원인 알려줘
> 세 페이지 푸터가 서로 다른 부분 있는지 비교해줘
> assets 중에 어느 페이지에서도 참조되지 않는 파일 찾아서 git rm 해줘
> 최근 커밋 3개 되돌리지 말고, 무엇이 바뀌었는지 한국어로 요약해줘
```
