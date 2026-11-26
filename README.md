# Suman Technical Training Center: portfolio

Plain HTML, CSS and JavaScript. No build step. Dark theme, Swiss grid style, Weld Orange accent. Bengali and English with a language switch.

## Folders
- `index.html` page skeleton
- `css/style.css` design tokens (colors, fonts, spacing) at the top, then layout
- `js/main.js` builds the page from the data file
- `data/data.js` **all content: edit only this file**
- `images/` logos, `profile.jpg`, `work-1.jpg` to `work-6.jpg`, favicons, `og-image.png`
- `scripts/` preview-image generator

## Edit content
Open `data/data.js`. Texts are in two blocks, `bn` and `en`. Parts marked PLACEHOLDER or AUTO-WRITTEN need your review:
1. `siteUrl`: your real GitHub Pages address.
2. `socials`: paste Facebook, TikTok, Instagram and GitHub links. Empty ones show greyed out until you add a link.
3. `map`: `url` (Google Maps link) and `reviewUrl` (Google review link). `credit`: your GitHub profile link for "Created by".
4. `gallery`: replace `images/work-1.jpg` to `work-6.jpg` with real photos (same names, `.jpg`), then set `placeholder: false`.

## Run locally
Double-click `index.html`, or run `python -m http.server` in this folder and open http://localhost:8000.

## Refresh the link preview image
Facebook, WhatsApp and others need a real image file, so it is generated from `data/data.js`. Run again whenever name, title, description or `siteUrl` change.
- With Node.js: `npm install` once, then `node scripts/generate-og.js`. It writes `images/og-image.png` and updates the meta tags in `index.html`.
- Without Node.js: open `scripts/og-generator.html`, download the PNG into `images/`, and copy the meta tags shown there into `index.html`.
The included `og-image.png` is a temporary one. Optional: put Archivo `.ttf` files in `scripts/fonts/` for the exact headline font.
After uploading changes, social sites may cache the old preview. Re-scrape with the Facebook Sharing Debugger.

## Deploy on GitHub Pages
1. Create a repository (for example `suman-portfolio`) and upload everything in this folder.
2. Settings, Pages, Source: Deploy from a branch, branch `main`, folder `/ (root)`, Save.
3. The site goes live at `https://YOUR-USERNAME.github.io/suman-portfolio/`. Put that address in `siteUrl` and regenerate the preview image.

Light theme: not included. Change the tokens in `css/style.css` if you want one later.
