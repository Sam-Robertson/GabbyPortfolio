/* ── Stagger headline ── */
(function () {
  // Line delays (ms): hey, → i'm → gaaby.
  const lineDelays = [120, 520, 760];
  const charDelay  = 75;

  document.querySelectorAll('.stagger-line').forEach((line, li) => {
    const text = line.dataset.text || '';
    line.innerHTML = '';
    [...text].forEach((ch, ci) => {
      const s = document.createElement('span');
      s.className = 'stagger-char';
      s.style.animationDelay = `${lineDelays[li] + ci * charDelay}ms`;
      s.textContent = ch === ' ' ? ' ' : ch;
      line.appendChild(s);
    });
  });
})();

/* ── Hamburger nav toggle ── */
(function () {
  const btn = document.querySelector('.nav-hamburger');
  const nav = document.querySelector('.nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open);
  });

  // Close when a link is tapped
  nav.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      nav.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* ── Work tile hover color ── */
(function () {
  document.querySelectorAll('.tile').forEach(tile => {
    const color = tile.dataset.color;
    if (!color) return;
    tile.style.setProperty('--tile-color', color);

    const img = tile.querySelector('.tile-img');
    if (!img) return;

    tile.addEventListener('mouseenter', () => {
      img.style.setProperty('--hover-color', color);
    });
  });
})();
