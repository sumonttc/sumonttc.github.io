(() => {
  const D = window.PORTFOLIO_DATA, c = D.contact, $ = (s) => document.querySelector(s);
  const IC = {
    wa: '<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>',
    call: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M22 6l-10 7L2 6"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    arrow: '<path d="M7 17L17 7"/><path d="M7 7h10v10"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    tiktok: '<path d="M9 12a4 4 0 1 0 4 4V3c.5 2.5 2.5 4 5 4"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'
  };
  const ic = (n) => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${IC[n]}</svg>`;
  const e = (s) => String(s).replace(/[&<>"]/g, (x) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[x]));
  const href = { wa: `https://wa.me/${c.whatsapp}`, call: `tel:+${c.whatsapp}`, mail: `mailto:${c.email}` };
  const text = { wa: c.phone, call: c.phone, mail: c.email };

  function render(lang) {
    const t = D[lang], u = t.ui;
    const btn = (k, cls) => `<a class="btn ${cls}" href="${href[k]}">${ic(k)}<span>${e(u[k])}</span></a>`;
    const sec = (id, title, body) => `<div class="sec"><h2 id="${id}-t">${e(title)}</h2><div class="body">${body}</div></div>`;
    const link = (url, cls, inner) => url ? `<a class="${cls}" href="${e(url)}" target="_blank" rel="noopener">${inner}</a>` : `<span class="${cls} off" title="${e(u.soon)}">${inner}</span>`;
    document.documentElement.lang = lang;
    document.title = `${t.name} | ${t.brand}`;
    $('#brand').textContent = t.brand;
    $('#lang').textContent = u.otherLang;
    $('#lang').setAttribute('aria-label', u.switchLabel);
    $('#nav').innerHTML = ['about', 'courses', 'experience', 'contact'].map((k) => `<a href="#${k}">${e(u[k])}</a>`).join('');
    $('#top').innerHTML = `<div class="hero-text"><p class="status">${e(t.status)}</p><h1>${e(t.name)}</h1><p class="role">${e(t.title)}</p><p class="lead">${e(t.tagline)}</p><div class="cta">${btn('wa', 'p')}${btn('call', '')}${btn('mail', '')}</div><p class="loc">${ic('pin')}<span>${e(t.location)}</span></p></div><figure class="photo"><img src="images/profile.jpg" width="900" height="1200" alt="${e(t.name)}" fetchpriority="high"></figure>`;
    $('#stats').innerHTML = t.stats.map((s) => `<li><strong>${e(s[0])}</strong><span>${e(s[1])}</span></li>`).join('');
    $('#about').innerHTML = sec('about', u.aboutTitle, t.about.map((p) => `<p>${e(p)}</p>`).join('') + `<ul class="tags" aria-label="${e(u.skills)}">${t.courses.map((x) => `<li>${e(x[0])}</li>`).join('')}</ul>`);
    $('#courses').innerHTML = sec('courses', u.coursesTitle, `<p class="muted" style="margin-bottom:2rem">${e(t.coursesIntro)}</p>` + t.courses.map((x, i) => `<div class="row"><span class="muted">${e(t.duration)}</span><h3>${e(x[0])}</h3><p>${e(x[1])}</p></div>`).join('') + `<dl class="facts">${t.facts.map((f) => `<div><dt>${e(f[0])}</dt><dd>${e(f[1])}</dd></div>`).join('')}</dl>`);
    $('#experience').innerHTML = sec('experience', u.experienceTitle, t.experience.map((x) => `<div class="row"><span class="muted">${e(x[0])}</span><h3>${e(x[1])}</h3><p>${e(x[2])}</p></div>`).join(''));
    $('#gallery').innerHTML = sec('gallery', u.galleryTitle, `<div class="gal">${D.gallery.map((g) => `<figure><img src="${e(g.src)}" width="800" height="600" loading="lazy" alt="${e(g.alt[lang])}">${g.placeholder ? `<span class="ph">${e(u.placeholder)}</span>` : ''}</figure>`).join('')}</div>`);
    const cb = (k) => `<a class="cbtn" href="${href[k]}">${ic(k)}<span><small>${e(u[k])}</small><b>${e(text[k])}</b></span></a>`;
    $('#contact').innerHTML = sec('contact', u.contactTitle, `<p class="cnote">${e(t.contactText)}</p><div class="clist">${['wa', 'call', 'mail'].map(cb).join('')}</div><p class="loc">${ic('pin')}<span>${e(t.location)}</span></p><div class="chips">${link(D.map.url, 'chip', ic('pin') + e(u.viewMap))}${link(D.map.reviewUrl, 'chip', ic('star') + e(u.rate))}</div>`);
    const addr = D.map.url ? `<a href="${e(D.map.url)}" target="_blank" rel="noopener">${ic('pin')}${e(t.location)}</a>` : `<span>${ic('pin')}${e(t.location)}</span>`;
    const soc = D.socials.map((s) => `<li>${link(s.url, '', ic(s.id) + e(s.label))}</li>`).join('');
    const nav = ['about', 'courses', 'experience', 'contact'].map((k) => `<li><a href="#${k}">${e(u[k])}</a></li>`).join('');
    const reach = ['wa', 'call', 'mail'].map((k) => `<li><a href="${href[k]}">${ic(k)}${e(text[k])}</a></li>`).join('');
    $('#foot').innerHTML = `<div class="fgrid"><div><img src="images/logo-full-white.png" alt="${e(t.brand)}" loading="lazy"><p>${e(t.footNote)}</p></div><div><h3>${e(u.quick)}</h3><ul>${nav}</ul></div><div><h3>${e(u.contactTitle)}</h3><ul>${reach}<li>${addr}</li><li>${link(D.map.reviewUrl, '', ic('star') + e(u.rate))}</li></ul></div><div><h3>${e(u.follow)}</h3><ul>${soc}</ul></div></div><div class="fbar"><p>© ${new Date().getFullYear()} ${e(t.brand)}</p><p>${e(u.createdBy)} ${link(D.credit.url, '', ic('github') + e(D.credit.name[lang]))}</p></div>`;
  }

  let lang = 'bn';
  try { lang = localStorage.getItem('lang') || 'bn'; } catch (_) {}
  if (!D[lang]) lang = 'bn';
  render(lang);
  $('#lang').addEventListener('click', () => {
    lang = lang === 'bn' ? 'en' : 'bn';
    try { localStorage.setItem('lang', lang); } catch (_) {}
    render(lang);
  });
})();
