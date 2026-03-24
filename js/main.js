// ============================================
// SCROLL REVEAL - Intersection Observer
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale, .section-divider, .section-glow, .star, .dot, .cta-streak'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Don't unobserve stars and dots (they loop)
          if (!entry.target.classList.contains('star') && !entry.target.classList.contains('dot')) {
            observer.unobserve(entry.target);
          }
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
});
