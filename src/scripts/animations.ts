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

  // --- Botones "tech": spotlight que sigue el cursor ---
  const btnCleanups: Array<() => void> = [];

  gsap.utils.toArray<HTMLElement>('.btn').forEach((btn) => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      btn.style.setProperty('--mx', `${relX}px`);
      btn.style.setProperty('--my', `${relY}px`);
    };

    const onEnter = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      gsap.to(btn, { scale: 1.045, duration: 0.35, ease: 'power3.out' });
    };

    const onLeave = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      gsap.to(btn, { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.45)' });
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      gsap.to(btn, { scale: 0.97, duration: 0.12, ease: 'power2.out' });
    };

    const onUp = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      gsap.to(btn, { scale: 1.045, duration: 0.25, ease: 'power3.out' });
    };

    btn.addEventListener('pointermove', onMove);
    btn.addEventListener('pointerenter', onEnter);
    btn.addEventListener('pointerleave', onLeave);
    btn.addEventListener('pointerdown', onDown);
    btn.addEventListener('pointerup', onUp);

    btnCleanups.push(() => {
      btn.removeEventListener('pointermove', onMove);
      btn.removeEventListener('pointerenter', onEnter);
      btn.removeEventListener('pointerleave', onLeave);
      btn.removeEventListener('pointerdown', onDown);
      btn.removeEventListener('pointerup', onUp);
      btn.style.removeProperty('--mx');
      btn.style.removeProperty('--my');
    });
  });

  // Recalcular posiciones cuando carguen fuentes/imágenes
  ScrollTrigger.refresh();

  return () => {
    // cleanup al cambiar de media query
    gsap.set('[data-reveal]', { clearProps: 'all' });
    gsap.set('.btn', { clearProps: 'transform' });
    btnCleanups.forEach((cleanup) => cleanup());
  };
});

/* ---------- Sin movimiento: todo visible de inmediato ---------- */
mm.add('(prefers-reduced-motion: reduce)', () => {
  gsap.set('[data-reveal]', { opacity: 1, y: 0 });
});
