(() => {
  const toggle = document.querySelector('#menuToggle');
  const nav = document.querySelector('#nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  // Scroll animations
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('[data-animate]').forEach((el, idx) => {
      if (!el.style.getPropertyValue('--delay')) {
        el.style.setProperty('--delay', (Math.min(idx % 4, 3) * 80) + 'ms');
      }
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('[data-animate]').forEach((el) => el.classList.add('in-view'));
  }

  // 3D tilt for portrait
  const portraitFrame = document.querySelector('.portrait-frame');
  if (portraitFrame && !reduceMotion) {
    const maxRotate = 10;
    portraitFrame.addEventListener('mousemove', (e) => {
      const rect = portraitFrame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      const rotateY = dx * maxRotate;
      const rotateX = -dy * maxRotate;
      portraitFrame.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const img = portraitFrame.querySelector('.portrait');
      if (img) {
        img.style.transform = `translateZ(40px) translateX(${dx * 6}px) translateY(${dy * 6}px)`;
      }
    });
    portraitFrame.addEventListener('mouseleave', () => {
      portraitFrame.style.transform = 'rotateX(0deg) rotateY(0deg)';
      const img = portraitFrame.querySelector('.portrait');
      if (img) img.style.transform = 'translateZ(20px)';
    });
  }
})();