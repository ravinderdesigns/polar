/**
 * POLAR SPECIALIST COATINGS — MAIN INTERACTIVE JAVASCRIPT
 * Cart Drawer, Search Modal, Video Modal, Swiper Sliders, Filters
 */

// --- Global Authentic Product Dataset for Predictive Search & Cart ---
const POLAR_PRODUCTS = [
  {
    id: 'prod-leakfix',
    title: 'Polar LeakFix Fibred Roof Coating | Waterproof Roof Sealant',
    category: 'roof',
    price: 23.99,
    rating: 4.8,
    reviews: 240,
    badge: 'Best Seller',
    image: 'assets/images/roof-coating.jpg',
    variants: [
      { size: '500ml', price: 16.99 },
      { size: '1 Litre', price: 23.99 },
      { size: '2.5 Litre', price: 42.99 },
      { size: '5 Litre', price: 69.99 }
    ]
  },
  {
    id: 'prod-dampseal',
    title: 'Polar Water-Based Dampseal | Interior Damp Proof Paint',
    category: 'damp',
    price: 16.99,
    rating: 4.9,
    reviews: 312,
    badge: 'Water-Based',
    image: 'assets/images/dampseal.png',
    variants: [
      { size: '500ml', price: 16.99 },
      { size: '1 Litre', price: 24.99 },
      { size: '2.5 Litre', price: 39.99 },
      { size: '5 Litre', price: 65.99 }
    ]
  },
  {
    id: 'prod-bathroom',
    title: 'Polar Bathroom Paint | Moisture & Mould Resistant Satin Paint',
    category: 'damp',
    price: 7.99,
    rating: 4.7,
    reviews: 185,
    badge: 'Trade Choice',
    image: 'assets/images/bathroom-paint.jpg',
    variants: [
      { size: '500ml', price: 7.99 },
      { size: '1 Litre', price: 14.99 },
      { size: '2.5 Litre', price: 29.99 }
    ]
  },
  {
    id: 'prod-garage',
    title: 'Polar Water Based Garage Floor Paint | Hard Wearing & Slip Resistant',
    category: 'floor',
    price: 59.99,
    rating: 4.8,
    reviews: 142,
    badge: 'Heavy Duty',
    image: 'assets/images/garage-floor.jpg',
    variants: [
      { size: '2.5 Litre', price: 36.99 },
      { size: '5 Litre', price: 59.99 }
    ]
  },
  {
    id: 'prod-metal',
    title: 'Polar Direct to Rust Metal Paint | Satin Black Protective Finish',
    category: 'metal',
    price: 17.99,
    rating: 4.7,
    reviews: 98,
    badge: 'Anti-Rust',
    image: 'assets/images/metal-paint.jpg',
    variants: [
      { size: '500ml', price: 12.99 },
      { size: '1 Litre', price: 17.99 }
    ]
  },
  {
    id: 'prod-radiator',
    title: 'Polar Radiator Spray Paint | Heat Resistant Enamel Paint',
    category: 'metal',
    price: 11.99,
    rating: 4.9,
    reviews: 215,
    badge: 'Fast Dry',
    image: 'assets/images/radiator-spray.jpg',
    variants: [
      { size: '400ml', price: 11.99 },
      { size: '2 x 400ml', price: 16.99 }
    ]
  }
];

// --- Cart State Management ---
let cart = [
  {
    id: 'prod-dampseal',
    title: 'Polar Water-Based Dampseal',
    variant: '1 Litre / Matt White',
    price: 24.99,
    qty: 1,
    image: 'assets/images/dampseal.png'
  },
  {
    id: 'prod-radiator',
    title: 'Polar Radiator Spray Paint',
    variant: '400ml / Matt Black',
    price: 11.99,
    qty: 1,
    image: 'assets/images/radiator-spray.jpg'
  }
];

const FREE_SHIPPING_THRESHOLD = 50.00;

// --- Safe Icon Renderer (Lucide + Inline SVG Fallback) ---
const SVG_ICONS = {
  'phone': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  'message-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/></svg>',
  'mail': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  'chevron-down': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="m6 9 6 6 6-6"/></svg>',
  'chevron-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="m9 18 6-6-6-6"/></svg>',
  'search': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  'user': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  'shopping-bag': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  'menu': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  'x': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  'plus': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  'arrow-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  'arrow-left': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
  'star': '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  'shield-check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>',
  'shield': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>',
  'shield-alert': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>',
  'help-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
  'check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><polyline points="20 6 9 17 4 12"/></svg>',
  'check-circle-2': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
  'award': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  'layers': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.9a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>',
  'flame': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  'crosshair': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>',
  'droplets': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>',
  'cloud-rain': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/></svg>',
  'wrench': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  'play': '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  'play-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
  'clock': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  'leaf': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  'sparkles': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>',
  'lock': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  'trash-2': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>',
  'hammer': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="m15 12-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 3.26-6.36 6.36"/><path d="m16.5 2.5 5 5"/></svg>',
  'book-open': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  'phone-call': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-fallback"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>',
  'facebook': '<svg viewBox="0 0 24 24" fill="currentColor" class="lucide-fallback"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  'instagram': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="lucide-fallback"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  'youtube': '<svg viewBox="0 0 24 24" fill="currentColor" class="lucide-fallback"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon fill="#fff" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>'
};

function renderAllIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    try {
      lucide.createIcons();
    } catch (e) {
      console.warn('Lucide createIcons notice:', e);
    }
  }

  // Fallback for any empty or missed icon elements
  document.querySelectorAll('i[data-lucide]').forEach(el => {
    if (!el.innerHTML.trim() || el.querySelector('svg') === null) {
      const name = el.getAttribute('data-lucide');
      if (SVG_ICONS[name]) {
        el.innerHTML = SVG_ICONS[name];
        const svg = el.querySelector('svg');
        if (svg) {
          if (el.style.width) svg.style.width = el.style.width;
          if (el.style.height) svg.style.height = el.style.height;
          if (el.style.color) svg.style.color = el.style.color;
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderAllIcons();

  initStickyHeader();
  initSwipers();
  initProductCategoryFilters();
  initVariantSelectors();
  initCartDrawer();
  initSearchModal();
  initVideoModal();
  initMobileNav();
  initNewsletterForm();
  updateCartUI();
});

// Update swipers on window load when all images finish downloading
window.addEventListener('load', () => {
  if (productsSwiper) productsSwiper.update();
  if (testimonialsSwiper) testimonialsSwiper.update();
  renderAllIcons();
});

/* ==========================================================================
   1. STICKY HEADER SCROLL LISTENER
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. SWIPER SLIDERS INITIALIZATION
   ========================================================================== */
let productsSwiper = null;
let testimonialsSwiper = null;

function initSwipers() {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper not loaded. Checking CDN.');
    return;
  }

  // Best Sellers Products Slider
  productsSwiper = new Swiper('.products-swiper', {
    slidesPerView: 1.15,
    spaceBetween: 16,
    speed: 500,
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next-prod',
      prevEl: '.swiper-button-prev-prod',
    },
    breakpoints: {
      480: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 28,
      }
    }
  });

  // Testimonials Slider
  testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 600,
    loop: true,
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next-testi',
      prevEl: '.swiper-button-prev-testi',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      }
    }
  });
}

/* ==========================================================================
   3. PRODUCT CATEGORY FILTERS
   ========================================================================== */
function initProductCategoryFilters() {
  const filterPills = document.querySelectorAll('.filter-pill');
  if (!filterPills.length) return;

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterCategory = pill.getAttribute('data-filter');
      const slides = document.querySelectorAll('.products-swiper .swiper-slide');

      slides.forEach(slide => {
        const slideCat = slide.getAttribute('data-category');
        if (filterCategory === 'all' || slideCat === filterCategory) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });

      if (productsSwiper) {
        productsSwiper.update();
        productsSwiper.slideTo(0);
      }
    });
  });
}

/* ==========================================================================
   4. PRODUCT CARD VARIANT CHIP SWITCHER
   ========================================================================== */
function initVariantSelectors() {
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    const chips = card.querySelectorAll('.variant-chip');
    const priceDisplay = card.querySelector('.price-num');

    chips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const newPrice = chip.getAttribute('data-price');
        if (priceDisplay && newPrice) {
          priceDisplay.textContent = newPrice;
        }
      });
    });
  });
}

/* ==========================================================================
   5. CART DRAWER & BASKET STATE
   ========================================================================== */
function initCartDrawer() {
  const cartToggleBtns = document.querySelectorAll('.cart-toggle-btn');
  const cartOverlay = document.querySelector('.cart-drawer-overlay');
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartCloseBtn = document.querySelector('.cart-close-btn');

  const openDrawer = () => {
    cartOverlay?.classList.add('active');
    cartDrawer?.classList.add('active');
    document.body.classList.add('drawer-open');
  };

  const closeDrawer = () => {
    cartOverlay?.classList.remove('active');
    cartDrawer?.classList.remove('active');
    document.body.classList.remove('drawer-open');
  };

  cartToggleBtns.forEach(btn => btn.addEventListener('click', openDrawer));
  cartCloseBtn?.addEventListener('click', closeDrawer);
  cartOverlay?.addEventListener('click', closeDrawer);

  // Esc key closes drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartDrawer?.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Delegate Add to Basket buttons
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-to-basket-btn');
    if (!addBtn) return;

    const prodId = addBtn.getAttribute('data-id');
    const card = addBtn.closest('.product-card') || addBtn.closest('.hero-section') || addBtn.closest('.featured-range-section');
    
    // Find active variant & price
    let variantTitle = '1 Litre';
    let price = 24.99;
    let title = 'Polar Specialist Coating';
    let image = 'assets/images/dampseal.png';

    if (card) {
      const titleElem = card.querySelector('.product-card-title, .hero-headline, .range-title');
      if (titleElem) title = titleElem.textContent.trim().split('|')[0].trim();
      
      const activeChip = card.querySelector('.variant-chip.active');
      if (activeChip) {
        variantTitle = activeChip.textContent.trim();
        price = parseFloat(activeChip.getAttribute('data-price')) || price;
      } else {
        const priceNum = card.querySelector('.price-num');
        if (priceNum) price = parseFloat(priceNum.textContent) || price;
      }

      const imgElem = card.querySelector('.product-card-img, .hero-product-main, .range-featured-img');
      if (imgElem) image = imgElem.getAttribute('src');
    }

    addToCart({ id: prodId || 'item-' + Date.now(), title, variant: variantTitle, price, image });
    showToast(`Added ${title} to your basket!`);
    openDrawer();
  });
}

function addToCart(item) {
  const existing = cart.find(i => i.id === item.id && i.variant === item.variant);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  bumpCartBadge();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCartUI();
}

function updateCartUI() {
  const cartList = document.querySelector('.cart-items-list');
  const cartBadge = document.querySelector('.cart-count');
  const subtotalDisplay = document.querySelector('.cart-subtotal-val');
  const progressFill = document.querySelector('.progress-fill');
  const shippingMsg = document.querySelector('.shipping-target-msg');

  // Count items
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) cartBadge.textContent = totalCount;

  // Calculate Subtotal
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  if (subtotalDisplay) subtotalDisplay.textContent = `£${subtotal.toFixed(2)}`;

  // Shipping Progress
  if (progressFill && shippingMsg) {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      progressFill.style.width = '100%';
      shippingMsg.innerHTML = '<strong>🎉 Congratulations!</strong> You have qualified for <strong>Free UK Delivery!</strong>';
    } else {
      const diff = (FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2);
      const percentage = Math.min(100, Math.max(10, (subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      progressFill.style.width = `${percentage}%`;
      shippingMsg.innerHTML = `Add <strong>£${diff}</strong> more to qualify for <strong>Free UK Delivery</strong>`;
    }
  }

  // Render items
  if (!cartList) return;
  if (cart.length === 0) {
    cartList.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--muted-text);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 700; color: var(--primary-dark);">Your basket is empty</p>
        <p style="font-size: 0.875rem;">Explore our coatings and add trade-grade protection to your order.</p>
      </div>
    `;
    return;
  }

  cartList.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img" onerror="this.src='assets/images/polar-logo.png'">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-variant">${item.variant}</div>
        <div class="cart-item-price">£${item.price.toFixed(2)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${idx}, -1)">−</button>
          <span style="font-weight: 700; font-size: 0.85rem; padding: 0 4px;">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${idx}, 1)">+</button>
          <button onclick="removeFromCart(${idx})" style="margin-left: auto; color: var(--muted-text); font-size: 0.75rem; text-decoration: underline; background: none; border: none; cursor: pointer;">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

function bumpCartBadge() {
  const badge = document.querySelector('.cart-count');
  if (!badge) return;
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);
}

/* ==========================================================================
   6. PREDICTIVE SEARCH MODAL
   ========================================================================== */
function initSearchModal() {
  const searchToggleBtns = document.querySelectorAll('.search-toggle-btn');
  const searchOverlay = document.querySelector('.search-modal-overlay');
  const searchInput = document.querySelector('.search-input-field');
  const searchResults = document.querySelector('.search-results-box');
  const searchCloseBtn = document.querySelector('.search-modal-close');

  const openSearch = () => {
    searchOverlay?.classList.add('active');
    document.body.classList.add('modal-open');
    setTimeout(() => searchInput?.focus(), 100);
  };

  window.openSearchModal = openSearch;

  const closeSearch = () => {
    searchOverlay?.classList.remove('active');
    document.body.classList.remove('modal-open');
    if (searchInput) searchInput.value = '';
    renderSearchResults('');
  };

  searchToggleBtns.forEach(btn => btn.addEventListener('click', openSearch));
  searchCloseBtn?.addEventListener('click', closeSearch);
  searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  // Shortcut Cmd+K or Ctrl+K
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && searchOverlay?.classList.contains('active')) {
      closeSearch();
    }
  });

  // Live input filtering
  searchInput?.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim());
  });

  function renderSearchResults(query) {
    if (!searchResults) return;
    if (!query) {
      searchResults.innerHTML = `
        <div style="padding: 1rem 0; color: var(--muted-text); font-size: 0.875rem;">
          <p style="font-weight: 700; margin-bottom: 0.75rem; color: var(--primary-dark);">Popular Searches:</p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="variant-chip" onclick="quickSearch('Damp')">Damp & Condensation</button>
            <button class="variant-chip" onclick="quickSearch('Roof')">Roof Coating</button>
            <button class="variant-chip" onclick="quickSearch('Garage')">Garage Floor</button>
            <button class="variant-chip" onclick="quickSearch('Radiator')">Radiator Spray</button>
          </div>
        </div>
      `;
      return;
    }

    const filtered = POLAR_PRODUCTS.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      searchResults.innerHTML = `
        <div style="padding: 2rem 0; text-align: center; color: var(--muted-text);">
          <p>No coatings found matching "<strong>${query}</strong>".</p>
          <p style="font-size: 0.8125rem; margin-top: 0.25rem;">Try searching for damp, mould, roof, garage or radiator.</p>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = filtered.map(p => `
      <div class="search-result-item" onclick="quickAddToCart('${p.id}')">
        <img src="${p.image}" alt="${p.title}" style="width: 50px; height: 50px; object-fit: contain; background: var(--bg-main); border-radius: 6px; padding: 4px;">
        <div style="flex-grow: 1;">
          <h4 style="font-size: 0.9375rem; font-weight: 700; color: var(--primary-dark); line-height: 1.25;">${p.title}</h4>
          <span style="font-size: 0.75rem; color: var(--secondary-teal); font-weight: 600;">${p.badge} • ${p.rating} ★ (${p.reviews} reviews)</span>
        </div>
        <div style="font-weight: 800; color: var(--primary-dark); font-family: var(--font-heading);">
          £${p.price.toFixed(2)}
        </div>
      </div>
    `).join('');
  }
}

window.quickSearch = function(term) {
  const searchInput = document.querySelector('.search-input-field');
  if (searchInput) {
    searchInput.value = term;
    searchInput.dispatchEvent(new Event('input'));
  }
};

window.quickAddToCart = function(id) {
  const prod = POLAR_PRODUCTS.find(p => p.id === id);
  if (prod) {
    addToCart({ id: prod.id, title: prod.title, variant: prod.variants[0].size, price: prod.price, image: prod.image });
    document.querySelector('.search-modal-overlay')?.classList.remove('active');
    document.body.classList.remove('modal-open');
    showToast(`Added ${prod.title} to basket!`);
  }
};

/* ==========================================================================
   7. VIDEO SHOWCASE MODAL
   ========================================================================== */
function initVideoModal() {
  const modalOverlay = document.querySelector('.video-modal-overlay');
  const videoElem = document.querySelector('#polarVideoPlayer');
  const modalCloseBtn = document.querySelector('.video-modal-close');
  const videoCards = document.querySelectorAll('[data-video-src]');

  const openVideo = (src) => {
    if (!videoElem) return;
    videoElem.src = src;
    modalOverlay?.classList.add('active');
    document.body.classList.add('modal-open');
    videoElem.play().catch(() => {});
  };

  const closeVideo = () => {
    if (!videoElem) return;
    videoElem.pause();
    videoElem.currentTime = 0;
    videoElem.src = '';
    modalOverlay?.classList.remove('active');
    document.body.classList.remove('modal-open');
  };

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-video-src');
      if (src) openVideo(src);
    });
  });

  modalCloseBtn?.addEventListener('click', closeVideo);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeVideo();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
      closeVideo();
    }
  });
}

/* ==========================================================================
   8. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileClose = document.querySelector('.mobile-nav-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const openNav = () => {
    mobileDrawer?.classList.add('active');
    document.body.classList.add('modal-open');
  };

  const closeNav = () => {
    mobileDrawer?.classList.remove('active');
    document.body.classList.remove('modal-open');
  };

  mobileToggle?.addEventListener('click', openNav);
  mobileClose?.addEventListener('click', closeNav);
  mobileLinks.forEach(link => link.addEventListener('click', closeNav));
}

/* ==========================================================================
   9. NEWSLETTER & TOAST NOTIFICATIONS
   ========================================================================== */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form, #ContactFooter');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('Thank you for subscribing! Check your inbox for 10% off.');
        input.value = '';
      }
    });
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="toast-icon">✓</span>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
