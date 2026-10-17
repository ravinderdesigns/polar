/**
 * Polar Specialist Coatings — QR Mobile Customer Journey Catalog
 * Verified data matching polarcoatings.co.uk
 */

const POLAR_CATEGORIES = [
  {
    id: 'all',
    name: 'All Products',
    shortName: 'All',
    tagline: 'Complete contractor-grade coatings range',
    icon: 'layers',
    image: 'assets/images/hero-bg-scenic.jpg'
  },
  {
    id: 'repair',
    name: 'Repair & Protection',
    shortName: 'Repair',
    tagline: 'Waterproofing, leak fixes & surface repair',
    icon: 'shield-alert',
    image: 'assets/images/cat-repair.jpg'
  },
  {
    id: 'paints',
    name: 'Paints & Coatings',
    shortName: 'Paints',
    tagline: 'High performance interior, exterior & floor paints',
    icon: 'paint-bucket',
    image: 'assets/images/cat-paints.jpg'
  },
  {
    id: 'sprays',
    name: 'Spray Paints',
    shortName: 'Sprays',
    tagline: 'Direct-to-surface aerosol sprays & rust converters',
    icon: 'sparkles',
    image: 'assets/images/cat-sprays.jpg'
  },
  {
    id: 'sealers',
    name: 'Sealers & Cleaners',
    shortName: 'Sealers',
    tagline: 'Clear sealants, patio protectors & heavy strippers',
    icon: 'droplets',
    image: 'assets/images/cat-sealers.jpg'
  }
];

const POLAR_PRODUCTS = [
  {
    id: 'leakfix',
    handle: 'leakfix-fibred-roof-coating',
    title: 'Polar LeakFix Fibred Roof Coating',
    shortTitle: 'LeakFix Roof Coating',
    category: 'repair',
    badge: 'Best Seller',
    price: 23.99,
    rating: 4.8,
    reviewsCount: 240,
    shortBenefit: 'Instant emergency waterproofing membrane reinforced with synthetic fibres for flat roofs, felt & gutters.',
    liveUrl: 'https://polarcoatings.co.uk/products/leakfix-fibred-roof-coating',
    image: 'assets/images/roof-coating.jpg',
    coverage: '1 - 2 m² per Litre',
    dryingTime: 'Touch dry in 24 hours',
    surfaces: ['Felt & Flat Roofs', 'Gutters & Drainpipes', 'Lead Flashing', 'Asphalt & Concrete'],
    benefits: [
      'Stops active leaks instantly, even in damp conditions',
      'Synthetic fibres bridge hairline cracks and gaps without mesh',
      'Forms a flexible, weather-resistant waterproof membrane'
    ],
    usage: 'Ensure surface is free from loose moss and debris. Apply directly with a brush in a thick uniform coat across the damaged area. Overlap adjoining sound surface by at least 50mm.',
    variants: [
      { id: 'lf-blk-1l', name: 'Black / 1 Litre', price: 23.99, size: '1L' },
      { id: 'lf-blk-5l', name: 'Black / 5 Litre', price: 54.99, size: '5L' },
      { id: 'lf-gry-1l', name: 'Grey / 1 Litre', price: 23.99, size: '1L' }
    ]
  },
  {
    id: 'dampseal',
    handle: 'polar-water-based-dampseal',
    title: 'Polar Water-Based Dampseal Paint',
    shortTitle: 'Water-Based DampSeal',
    category: 'paints',
    badge: '100% Water Based',
    price: 16.99,
    rating: 4.9,
    reviewsCount: 312,
    shortBenefit: 'Permanently seals penetrating damp patches, prevents water marks from bleeding through paint.',
    liveUrl: 'https://polarcoatings.co.uk/products/polar-water-based-dampseal',
    image: 'assets/images/dampseal.png',
    coverage: 'Up to 11 m² per Litre',
    dryingTime: 'Recoatable in 2–3 hours',
    surfaces: ['Interior Plaster', 'Brick & Stone', 'Ceilings & Concrete', 'Living Rooms & Bedrooms'],
    benefits: [
      'Ultra-low odour & low VOC formulation — safe for occupied homes',
      'Blocks damp, soot, nicotine and stubborn water stains permanently',
      'Can be overcoated with any standard emulsion in just 2 hours'
    ],
    usage: 'Scrape away flaking paint or salt efflorescence. Stir well and apply with brush or roller over damp area extending 30cm beyond visible stain. Apply 2 coats for maximum barrier protection.',
    variants: [
      { id: 'ds-wht-500', name: 'White / 500ml', price: 16.99, size: '500ml' },
      { id: 'ds-wht-1l', name: 'White / 1 Litre', price: 24.99, size: '1L' },
      { id: 'ds-wht-25l', name: 'White / 2.5 Litre', price: 39.99, size: '2.5L' },
      { id: 'ds-wht-5l', name: 'White / 5 Litre', price: 65.99, size: '5L' },
      { id: 'ds-mag-1l', name: 'Magnolia / 1 Litre', price: 24.99, size: '1L' }
    ]
  },
  {
    id: 'garage-floor',
    handle: 'water-based-floor-paint',
    title: 'Polar Water Based Garage Floor Paint',
    shortTitle: 'Garage Floor Paint',
    category: 'paints',
    badge: 'Heavy Duty',
    price: 59.99,
    rating: 4.7,
    reviewsCount: 184,
    shortBenefit: 'Hard-wearing, slip-resistant finish for concrete garages, workshops, basements & utility rooms.',
    liveUrl: 'https://polarcoatings.co.uk/products/water-based-floor-paint',
    image: 'assets/images/garage-floor.jpg',
    coverage: 'Up to 12 m² per Litre (60 m² per 5L)',
    dryingTime: 'Light foot traffic in 6h • Full cure 48h',
    surfaces: ['Concrete Garage Floors', 'Workshops & Basements', 'Industrial Screed', 'Utility Floors'],
    benefits: [
      'Resists hot tyre pick-up, oil drips, grease and harsh domestic chemicals',
      'Non-slip textured finish provides confident traction underfoot',
      'Water-based technology with easy soap and water roller clean-up'
    ],
    usage: 'Clean floor thoroughly using a degreaser. On new or porous concrete, thin first coat by 10% water as a primer. Apply second full coat after 4–6 hours with a medium pile roller.',
    variants: [
      { id: 'gf-dg-5l', name: 'Dark Grey / 5 Litre', price: 59.99, size: '5L' },
      { id: 'gf-lg-5l', name: 'Light Grey / 5 Litre', price: 59.99, size: '5L' },
      { id: 'gf-ant-5l', name: 'Anthracite / 5 Litre', price: 59.99, size: '5L' },
      { id: 'gf-mg-5l', name: 'Mid Grey / 5 Litre', price: 59.99, size: '5L' }
    ]
  },
  {
    id: 'patio-sealer',
    handle: 'decking-sealer',
    title: 'Polar Patio & Decking Paint Sealer',
    shortTitle: 'Patio & Decking Sealer',
    category: 'sealers',
    badge: 'Weather Barrier',
    price: 49.99,
    rating: 4.8,
    reviewsCount: 142,
    shortBenefit: 'Durable clear protective sealer for exterior painted patios, paving slabs, walkways and timber decks.',
    liveUrl: 'https://polarcoatings.co.uk/products/decking-sealer',
    image: 'assets/images/cat-sealers.jpg',
    coverage: '8 - 10 m² per Litre',
    dryingTime: 'Rainproof in 2 hours',
    surfaces: ['Paved Patios & Flags', 'Timber Decking', 'Garden Walkways', 'Balconies & Porches'],
    benefits: [
      'Locks in outdoor colours while defending against UV fading and frost cracking',
      'Repels standing rainwater, algae growth, moss and organic staining',
      'Extends the lifespan of existing painted decking and patio coatings'
    ],
    usage: 'Ensure surface is completely dry and clean. Stir thoroughly and apply evenly using a low-pressure sprayer, masonry brush, or roller. Two coats recommended for high-traffic paths.',
    variants: [
      { id: 'ps-clr-5l', name: 'Clear / 5 Litre', price: 49.99, size: '5L' }
    ]
  },
  {
    id: 'metal-paint',
    handle: 'polar-metal-paint',
    title: 'Polar Direct to Rust Metal Paint',
    shortTitle: 'Direct to Rust Metal Paint',
    category: 'repair',
    badge: 'Trade Grade',
    price: 17.99,
    rating: 4.8,
    reviewsCount: 198,
    shortBenefit: 'Applies straight onto rusted iron, steel & railings without primer to lock out moisture and oxygen.',
    liveUrl: 'https://polarcoatings.co.uk/products/polar-metal-paint',
    image: 'assets/images/metal-paint.jpg',
    coverage: '10 m² per Litre',
    dryingTime: 'Touch dry in 2 hours • Recoat in 4h',
    surfaces: ['Iron Gates & Railings', 'Metal Garden Furniture', 'Garage Doors', 'Pipes & Metal Buildings'],
    benefits: [
      'Direct-to-rust chemistry stops oxidation without requiring etch primer',
      'Tough satin finish withstands British coastal and winter weather',
      'Long-lasting anti-corrosion barrier protects exterior metal for years'
    ],
    usage: 'Wire brush loose flakes and wipe away grease. Apply 2 generous coats directly over the rusted surface, ensuring all edges and corners are coated to seal out dampness.',
    variants: [
      { id: 'mp-sat-500', name: 'Satin Black / 500ml', price: 17.99, size: '500ml' },
      { id: 'mp-sat-1l', name: 'Satin Black / 1 Litre', price: 24.99, size: '1L' },
      { id: 'mp-sat-25l', name: 'Satin Black / 2.5 Litre', price: 39.99, size: '2.5L' }
    ]
  },
  {
    id: 'bathroom-paint',
    handle: 'bathroom-paint',
    title: 'Polar Moisture & Mould Resistant Bathroom Paint',
    shortTitle: 'Anti-Mould Bathroom Paint',
    category: 'paints',
    badge: 'Anti-Mould',
    price: 21.99,
    rating: 4.9,
    reviewsCount: 226,
    shortBenefit: 'Durable satin wall paint formulated to combat high humidity, steam condensation and black mould.',
    liveUrl: 'https://polarcoatings.co.uk/products/bathroom-paint',
    image: 'assets/images/bathroom-paint.jpg',
    coverage: '12 m² per Litre',
    dryingTime: 'Recoatable in 2–4 hours',
    surfaces: ['Bathroom Walls & Ceilings', 'Kitchens & Laundry Rooms', 'En-Suites & Wetrooms'],
    benefits: [
      'Active biocide formulation stops unsightly black mould spores from taking hold',
      'Washable, wipe-clean satin finish resists repeated scrubbing and condensation',
      'Bright white finish that will not yellow or peel in steamy conditions'
    ],
    usage: 'Wash down existing mould with fungicidal wash. Stir paint thoroughly. Apply 2 coats with a microfibre roller or synthetic brush, allowing 4 hours drying between coats.',
    variants: [
      { id: 'bp-wht-1l', name: 'White / 1 Litre', price: 21.99, size: '1L' },
      { id: 'bp-wht-25l', name: 'White / 2.5 Litre', price: 39.99, size: '2.5L' },
      { id: 'bp-wht-5l', name: 'White / 5 Litre', price: 59.99, size: '5L' }
    ]
  },
  {
    id: 'rust-converter',
    handle: 'polar-corrosion-rust-converter',
    title: 'Polar Anti-Corrosion Rust Converter Spray',
    shortTitle: 'Rust Converter Aerosol',
    category: 'sprays',
    badge: 'Fast Spray',
    price: 11.99,
    rating: 4.6,
    reviewsCount: 165,
    shortBenefit: 'Neutralises corrosion on contact and transforms rust into an inert, paintable black barrier.',
    liveUrl: 'https://polarcoatings.co.uk/products/polar-corrosion-rust-converter',
    image: 'assets/images/radiator-spray.jpg',
    coverage: 'Approx 2 m² per 500ml can',
    dryingTime: 'Touch dry in 20 mins • Topcoat in 3h',
    surfaces: ['Automotive Panels', 'Chassis & Subframes', 'Garden Railings', 'Metal Machinery'],
    benefits: [
      'No messy wire grinding or heavy sanding required before application',
      'Chemical conversion creates an impermeable black primer layer',
      'Spray nozzle delivers targeted mist into deep crevices and hard-to-reach brackets'
    ],
    usage: 'Shake can for 2 minutes after rattle starts. Spray from 25–30cm distance in thin, overlapping passes. Allow 20 minutes to turn black, then apply second coat if severe rust exists.',
    variants: [
      { id: 'rc-blk-500', name: 'Matt Black / 500ml', price: 11.99, size: '500ml' },
      { id: 'rc-blk-2pack', name: 'Matt Black / 2 x 500ml', price: 17.99, size: '2-Pack' },
      { id: 'rc-blk-6pack', name: 'Matt Black / 6 x 500ml', price: 46.99, size: '6-Pack' }
    ]
  },
  {
    id: 'paint-stripper',
    handle: 'polar-paint-varnish-stripper-spray',
    title: 'Polar Heavy-Duty Paint & Varnish Stripper Spray',
    shortTitle: 'Paint & Varnish Stripper',
    category: 'sealers',
    badge: 'Power Gel',
    price: 12.99,
    rating: 4.6,
    reviewsCount: 98,
    shortBenefit: 'Fast-acting gel formula clings to vertical surfaces to dissolve multiple coats of oil, enamel & varnish.',
    liveUrl: 'https://polarcoatings.co.uk/products/polar-paint-varnish-stripper-spray',
    image: 'assets/images/cat-repair.jpg',
    coverage: 'Approx 1.5 - 2 m² per 500ml',
    dryingTime: 'Works in 15–30 minutes',
    surfaces: ['Wood Furniture & Doors', 'Masonry & Stone', 'Metal Castings & Fixtures'],
    benefits: [
      'Non-drip aerosol gel formula sticks firmly to upright pillars, doors and ceilings',
      'Blisters through up to 5 layers of paint, lacquer and varnish simultaneously',
      'Leaves original grain or metal substrate clean and ready for sanding or re-coating'
    ],
    usage: 'Mask adjacent areas. Spray generously from 20cm until thick foamy gel layer forms. Wait 20–30 minutes until old paint bubbles and blisters. Remove softened residue with a blunt scraper.',
    variants: [
      { id: 'ps-gel-500', name: '500ml Aerosol', price: 12.99, size: '500ml' },
      { id: 'ps-gel-2pack', name: '2 x 500ml Aerosol', price: 18.99, size: '2-Pack' }
    ]
  }
];

// Helper functions for catalog queries
function getProductById(id) {
  return POLAR_PRODUCTS.find(p => p.id === id) || POLAR_PRODUCTS[0];
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return POLAR_PRODUCTS;
  return POLAR_PRODUCTS.filter(p => p.category === category);
}

function getCategoryById(id) {
  return POLAR_CATEGORIES.find(c => c.id === id) || POLAR_CATEGORIES[0];
}
