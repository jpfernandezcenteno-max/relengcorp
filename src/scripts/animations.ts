/* ============================================================
   ANIMACIONES GSAP — RELENGCORP
   - ScrollTrigger para reveals al hacer scroll (con propósito).
   - Timeline de entrada del Hero.
   - Parallax sutil de fondo.
   Rendimiento: solo anima transform/opacity (compositor, 60fps).
   Accesibilidad: gsap.matchMedia desactiva todo en prefers-reduced-motion.
   ============================================================ */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

/* ---------- Con movimiento (usuario sin preferencia de reducción) ---------- */
mm.add('(prefers-reduced-motion: no-preference)', () => {
  const heroEls = gsap.utils.toArray<HTMLElement>('.hero [data-reveal]');
  const rest = gsap.utils
    .toArray<HTMLElement>('[data-reveal]')
    .filter((el) => !el.closest('.hero'));

  // --- HERO: timeline de entrada secuencial al cargar ---
  if (heroEls.length) {
    gsap.set(heroEls, { opacity: 0, y: 24 });
    gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } }).to(heroEls, {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      delay: 0.1,
    });
  }

  // --- RESTO: reveal por lotes al entrar en viewport ---
  gsap.set(rest, { opacity: 0, y: 32 });
  ScrollTrigger.batch(rest, {
    start: 'top 86%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        overwrite: true,
      }),
  });

  // --- Parallax sutil del fondo del hero ---
  const heroBg = document.querySelector('.hero__bg');
  if (heroBg) {
    gsap.to(heroBg, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // Recalcular posiciones cuando carguen fuentes/imágenes
  ScrollTrigger.refresh();

  return () => {
    // cleanup al cambiar de media query
    gsap.set('[data-reveal]', { clearProps: 'all' });
  };
});

/* ---------- Sin movimiento: todo visible de inmediato ---------- */
mm.add('(prefers-reduced-motion: reduce)', () => {
  gsap.set('[data-reveal]', { opacity: 1, y: 0 });
});
