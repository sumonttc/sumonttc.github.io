/* Shared by generate-og.js (Node) and og-generator.html (browser). Draws the 1200x630 preview card. */
(function (root) {
  const S = 'M786 443H1483V783H788V808H1153A342 342 0 0 1 1153 1492H457V1152H1200V1125H786A341 341 0 0 1 786 443Z';
  function wrap(ctx, text, max) {
    const lines = []; let line = '';
    text.split(' ').forEach((w) => { const t = line ? line + ' ' + w : w; if (ctx.measureText(t).width > max && line) { lines.push(line); line = w; } else line = t; });
    return line ? lines.concat(line) : lines;
  }
  function draw(ctx, W, H, d, photo) {
    const t = d.en, textW = photo ? 640 : 1056, F = 'Archivo, "Arial Black", sans-serif';
    ctx.fillStyle = d.ink; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = d.accent; ctx.fillRect(0, 0, W, 12);
    if (photo) {
      const x = 720, w = 480, s = Math.max(w / photo.width, H / photo.height);
      ctx.save(); ctx.beginPath(); ctx.rect(x, 12, w, H - 12); ctx.clip(); ctx.filter = 'grayscale(1)';
      ctx.drawImage(photo, x + (w - photo.width * s) / 2, 12 + (H - 12 - photo.height * s) / 2, photo.width * s, photo.height * s); ctx.restore();
    }
    ctx.save(); ctx.translate(72, 64); ctx.scale(120 / 1050, 120 / 1050); ctx.translate(-445, -443);
    ctx.fillStyle = d.paper; ctx.fill(new Path2D(S)); ctx.fillStyle = d.ink; ctx.fillRect(958, 615, 24, 362); ctx.restore();
    ctx.textBaseline = 'alphabetic'; ctx.fillStyle = d.paper; ctx.font = '800 76px ' + F;
    let y = 270; wrap(ctx, t.name, textW).forEach((l) => { ctx.fillText(l, 72, y); y += 82; });
    ctx.fillStyle = d.accent; ctx.font = '700 34px ' + F;
    y += 14; wrap(ctx, t.title, textW).forEach((l) => { ctx.fillText(l, 72, y); y += 44; });
    ctx.fillStyle = d.paper; ctx.font = '500 28px ' + F;
    ctx.fillText(t.brand, 72, H - 78); ctx.fillStyle = '#A9A6A0'; ctx.fillText(t.location, 72, H - 36);
  }
  function meta(d) {
    const t = d.en, u = d.siteUrl, img = u + 'images/og-image.png', ti = t.name + ' — ' + t.title;
    return `<!-- META:START -->
<title>${ti}</title>
<meta name="description" content="${t.metaDesc}">
<link rel="canonical" href="${u}">
<meta property="og:type" content="website">
<meta property="og:title" content="${ti}">
<meta property="og:description" content="${t.metaDesc}">
<meta property="og:url" content="${u}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${ti}">
<meta name="twitter:description" content="${t.metaDesc}">
<meta name="twitter:image" content="${img}">
<!-- META:END -->`;
  }
  const api = { draw, meta };
  if (typeof module !== 'undefined') module.exports = api; else root.OG = api;
})(this);
