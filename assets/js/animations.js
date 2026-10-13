/**
 * POLAR SPECIALIST COATINGS — GSAP ANIMATION SYSTEM
 * Rock-solid ScrollTrigger reveals that GUARANTEE content is NEVER hidden
 */

document.addEventListener('DOMContentLoaded', () => {
  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || typeof gsap === 'undefined') {
    console.log('Reduced motion enabled or GSAP unavailable. Skipping animations.');
    return;
  }

  // Register ScrollTrigger plugin if available
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 1. Header Entrance
  gsap.fromTo('.site-header', 
    { y: -25, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', clearProps: 'all' }
  );

  // 2. Hero Section Entrance (Immediate above-the-fold entrance)
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl.fromTo('.hero-content .eyebrow', 
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.45, delay: 0.05, clearProps: 'all' }
  )
  .fromTo('.hero-headline', 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, clearProps: 'all' },
    '-=0.15'
  )
  .fromTo('.hero-description', 
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.5, clearProps: 'all' },
    '-=0.2'
  )
  .fromTo('.hero-ctas .btn', 
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, stagger: 0.08, duration: 0.45, clearProps: 'all' },
    '-=0.2'
  )
  .fromTo('.hero-trust-bar', 
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, duration: 0.45, clearProps: 'all' },
    '-=0.15'
  )
  .fromTo('.hero-card-stack', 
    { opacity: 0, scale: 0.97, y: 15 },
    { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'power2.out', clearProps: 'all' },
    '-=0.4'
  )
  .fromTo('.floating-badge', 
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, stagger: 0.12, duration: 0.45, ease: 'back.out(1.4)', clearProps: 'all' },
    '-=0.2'
  );

  // 3. ScrollTrigger Reveals (With immediateRender: false to PREVENT premature hiding)
  if (typeof ScrollTrigger !== 'undefined') {
    // Section Headers
    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.fromTo(header, 
        { opacity: 0, y: 25 },
        {
          scrollTrigger: {
            trigger: header,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true
          },
          immediateRender: false,
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all'
        }
      );
    });

    // Category Cards Stagger
    gsap.fromTo('.category-card', 
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: '.category-grid',
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        },
        immediateRender: false,
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all'
      }
    );

    // Problem Solver Cards Stagger
    gsap.fromTo('.problem-card', 
      { opacity: 0, y: 25 },
      {
        scrollTrigger: {
          trigger: '.problem-grid',
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        },
        immediateRender: false,
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all'
      }
    );

    // Featured Water-Based Range Section
    gsap.fromTo('.range-content', 
      { opacity: 0, x: -25 },
      {
        scrollTrigger: {
          trigger: '.featured-range-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        },
        immediateRender: false,
        opacity: 1,
        x: 0,
        duration: 0.65,
        ease: 'power2.out',
        clearProps: 'all'
      }
    );

    gsap.fromTo('.range-visual', 
      { opacity: 0, x: 25 },
      {
        scrollTrigger: {
          trigger: '.featured-range-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        },
        immediateRender: false,
        opacity: 1,
        x: 0,
        duration: 0.65,
        ease: 'power2.out',
        clearProps: 'all'
      }
    );

    // Video Section Cards
    gsap.fromTo('.video-featured-card', 
      { opacity: 0, scale: 0.98 },
      {
        scrollTrigger: {
          trigger: '.video-section',
          start: 'top 86%',
          toggleActions: 'play none none none',
          once: true
        },
        immediateRender: false,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all'
      }
    );

    gsap.fromTo('.video-mini-card', 
      { opacity: 0, x: 20 },
      {
        scrollTrigger: {
          trigger: '.video-cards-column',
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        },
        immediateRender: false,
        opacity: 1,
        x: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
        clearProps: 'all'
      }
    );

    // Trust Pillars (Why Choose Polar)
    gsap.fromTo('.pillar-card', 
      { opacity: 0, y: 25 },
      {
        scrollTrigger: {
          trigger: '.trust-pillars-grid',
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        },
        immediateRender: false,
        opacity: 1,
        y: 0,
        stagger: 0.07,
        duration: 0.55,
        ease: 'power2.out',
        clearProps: 'all'
      }
    );

    // Heritage Banner
    gsap.fromTo('.heritage-spotlight', 
      { opacity: 0, y: 25 },
      {
        scrollTrigger: {
          trigger: '.heritage-spotlight',
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true
        },
        immediateRender: false,
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power2.out',
        clearProps: 'all'
      }
    );

    // Article Cards
    gsap.fromTo('.article-card', 
      { opacity: 0, y: 25 },
      {
        scrollTrigger: {
          trigger: '.article-grid',
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        },
        immediateRender: false,
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.55,
        ease: 'power2.out',
        clearProps: 'all'
      }
    );

    // Contact Cards
    gsap.fromTo('.contact-card', 
      { opacity: 0, y: 25 },
      {
        scrollTrigger: {
          trigger: '.contact-cards-grid',
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true
        },
        immediateRender: false,
        opacity: 1,
        y: 0,
        stagger: 0.07,
        duration: 0.55,
        ease: 'power2.out',
        clearProps: 'all'
      }
    );

    // Refresh ScrollTrigger once images finish loading
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }

  // 4. Bulletproof Fallback: Ensure all elements are 100% visible
  setTimeout(() => {
    document.querySelectorAll('.section-header, .category-card, .problem-card, .range-content, .range-visual, .video-featured-card, .video-mini-card, .pillar-card, .heritage-spotlight, .article-card, .contact-card').forEach(el => {
      if (getComputedStyle(el).opacity === '0') {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    });
  }, 1000);
});
