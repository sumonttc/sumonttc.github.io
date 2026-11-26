/* Usage: npm install   (once)   then   node scripts/generate-og.js
   Reads data/data.js, writes images/og-image.png (1200x630) and refreshes the meta tags in index.html. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const { createCanvas, loadImage, GlobalFonts } = require('@napi-rs/canvas');
const { draw, meta } = require('./og-draw.js');
const root = path.join(__dirname, '..'), box = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'data/data.js'), 'utf8'), box);
const d = box.window.PORTFOLIO_DATA, fonts = path.join(__dirname, 'fonts');
/* Optional: put Archivo .ttf files in scripts/fonts/ to match the website's headline font. */
if (fs.existsSync(fonts)) fs.readdirSync(fonts).filter((f) => /\.(ttf|otf)$/i.test(f)).forEach((f) => GlobalFonts.registerFromPath(path.join(fonts, f)));
(async () => {
  let photo = null;
  try { photo = await loadImage(path.join(root, 'images/profile.jpg')); } catch (_) {}
  const canvas = createCanvas(1200, 630);
  draw(canvas.getContext('2d'), 1200, 630, d, photo);
  fs.writeFileSync(path.join(root, 'images/og-image.png'), canvas.toBuffer('image/png'));
  const file = path.join(root, 'index.html');
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace(/<!-- META:START -->[\s\S]*<!-- META:END -->/, meta(d)));
  console.log('Done: images/og-image.png written and index.html meta tags updated.');
})();
