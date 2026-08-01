/**
 * Scroll reveal — IntersectionObserver reutilizable.
 *
 * Soporta dos APIs equivalentes:
 *   - .reveal        → añade .is-visible al entrar en viewport
 *   - .scroll-reveal → añade .visible       al entrar en viewport
 *
 * Adicionalmente, aplica `transition-delay` escalonado a cada
 * `.bento-card` para reproducir el stagger del mockup home.
 */
export function initScrollReveal(): void {
  const revealEls = document.querySelectorAll<HTMLElement>(
    '.reveal:not(.is-visible), .scroll-reveal:not(.visible)',
  );
  const bentoEls = document.querySelectorAll<HTMLElement>('.bento-card');

  if (revealEls.length === 0 && bentoEls.length === 0) return;

  // Stagger delay en bento cards (sólo la primera vez).
  bentoEls.forEach((el, index) => {
    if (!el.dataset.staggerApplied) {
      el.style.transitionDelay = `${index * 0.1}s`;
      el.dataset.staggerApplied = 'true';
    }
  });

  if (typeof IntersectionObserver === 'undefined') {
    revealEls.forEach((el) => el.classList.add('is-visible', 'visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
  );

  revealEls.forEach((el) => observer.observe(el));
}
