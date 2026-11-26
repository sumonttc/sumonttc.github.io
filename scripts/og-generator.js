(async () => {
  const d = window.PORTFOLIO_DATA, c = document.getElementById('c'), x = c.getContext('2d');
  try { await document.fonts.load('800 76px Archivo'); } catch (_) {}
  const photo = await new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.onerror = () => r(null); i.src = '../images/profile.jpg'; });
  OG.draw(x, 1200, 630, d, photo);
  document.getElementById('meta').value = OG.meta(d);
  document.getElementById('dl').addEventListener('click', (ev) => {
    try { ev.target.href = c.toDataURL('image/png'); } catch (_) {
      OG.draw(x, 1200, 630, d, null); ev.target.href = c.toDataURL('image/png'); document.getElementById('note').hidden = false;
    }
  });
})();
