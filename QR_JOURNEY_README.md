# Polar Coatings — Mobile-First QR Code Customer Journey

A dedicated, lightweight, mobile-first shopping experience designed for customers scanning QR codes on Polar Specialist Coatings packaging and printed trade marketing materials.

---

## 🎯 Strategic Purpose & Goals

When a customer scans a packaging QR code on a Polar tin (e.g. *Polar LeakFix*, *Polar DampSeal*, *Floor Paint*, etc.), they need an **immediate, low-friction, high-speed mobile experience**:
1. **Immediate Brand Recognition**: Clean industrial luxury aesthetic matching Polar's British heritage.
2. **Instant Understanding**: Clear value proposition without bloated desktop marketing banners or intrusive popups.
3. **Frictionless Navigation**: Smooth horizontal category scrolling and sticky filter chips.
4. **Rich Decision-Making**: Actionable surface suitability, coverage rates, drying times, and size/variant selectors.
5. **Fast Demo Conversion**: Streamlined mobile checkout simulation with localStorage persistence and official live store fallback.

---

## 📱 User Flow & Architecture

```
[ Packaging QR Scan ]
         │
         ▼
[ qr-landing.html ]   ───► Hero Value Prop, Quick Categories, Best Sellers, Video Demo
         │
         ▼
[ qr-category.html ]  ───► Sticky Category Filter Chips, 2-Column Responsive Grid
         │
         ▼
[ qr-product.html ]   ───► Hero Pack Image, Variant Chips, 3 Key Benefits, Sticky Add-to-Basket
         │
         ▼
[ qr-checkout.html ]  ───► Basket Summary, Quantity Controls, Shipping Meter, Demo Order Modal
```

---

## 📂 File Structure Added to the Project

The existing homepage (`index.html`), stylesheet (`style.css`), and assets remain **completely untouched**. The QR journey operates as an independent, modular system:

| File | Purpose |
| :--- | :--- |
| [`qr-landing.html`](file:///e:/Projects/polar/qr-landing.html) | **Page 1: Mobile Landing Entry**. Features compact header, hero headline, packaging pack visual, horizontal category scroll, 6 best sellers, video demo, and reassurance strip. |
| [`qr-category.html`](file:///e:/Projects/polar/qr-category.html) | **Page 2: Category Catalogue**. URL parameter routing (`?cat=repair`), sticky category filter chips, dynamic 2-column mobile card grid. |
| [`qr-product.html`](file:///e:/Projects/polar/qr-product.html) | **Page 3: Product Detail Stage**. Large stage photography, dynamic size/pack variant selector, 3 key benefits, surface suitability tags, and sticky bottom Add-to-Basket bar. |
| [`qr-checkout.html`](file:///e:/Projects/polar/qr-checkout.html) | **Page 4: Streamlined Mobile Checkout**. Basket item management, live price calculation, Free UK Delivery meter (£50 threshold), customer details form, payment method mockups, and live store fallback. |
| [`assets/css/qr-journey.css`](file:///e:/Projects/polar/assets/css/qr-journey.css) | **Dedicated Mobile-First Stylesheet**. Touch targets (44px+), safe-area insets (`env(safe-area-inset-bottom)`), reduced motion support, and Polar design tokens (`#0b4154`, `#0F766E`, `#D9F4EB`). |
| [`assets/js/qr-data.js`](file:///e:/Projects/polar/assets/js/qr-data.js) | **Verified Product Catalog**. Data extracted from `parsed_products.json` and `polarcoatings.co.uk` (LeakFix, DampSeal, Garage Floor Paint, Patio Sealer, Metal Paint, Bathroom Paint, Rust Converter, Paint Stripper). |
| [`assets/js/qr-journey.js`](file:///e:/Projects/polar/assets/js/qr-journey.js) | **Journey Engine**. LocalStorage cart state, badge counter reactivity, floating toast notifications, and client presentation QR generator modal. |

---

## 🛠️ Key Technical & UX Features

### 1. Presentation Mode / Live QR Code Generator
At the top of `qr-landing.html`, click **"Scan on Phone"**:
- Displays a high-contrast vector QR code pointing directly to the deployed production HTTPS URL:
  `https://ravinderdesigns.github.io/polar/qr-landing.html?utm_source=qr&utm_medium=packaging&utm_campaign=quick_order`
- Includes a one-click **"Copy Link"** button and **"Reset Demo Basket"** action.
- Clients can point any iPhone or Android camera at the screen and test the real mobile experience instantaneously.

### 2. Persistent `localStorage` Cart
- Products added on `qr-product.html` or `qr-landing.html` persist across all pages.
- Header basket badge updates in real time (`.qr-cart-count`).
- Items, quantities, and selected size variants synchronize automatically with `qr-checkout.html`.

### 3. Responsive Screen Support
- Optimized for mobile viewports: **320px** (iPhone SE), **375px**, **390px** (iPhone 12–16), **430px** (Pro Max), as well as tablet and desktop previews.
- On desktop monitors, the page renders within an elegant 600px mobile app viewport frame for natural presentation aesthetics.

### 4. Verified Data & Anti-Fabrication Compliance
- Real Polar products with exact UK pricing (`£23.99`, `£16.99`, `£59.99`, `£49.99`, etc.).
- Direct link on checkout and PDP to the official live website (`https://polarcoatings.co.uk`) for customers wishing to place real orders.
- Clear disclaimer on checkout that it is an interactive presentation prototype.

---

## 🧪 How to Test Locally

1. Run the local PowerShell server:
   ```powershell
   .\server.ps1
   ```
2. Open in your browser:
   - [http://localhost:3000/qr-landing.html](http://localhost:3000/qr-landing.html)
   - [http://localhost:3000/qr-category.html](http://localhost:3000/qr-category.html)
   - [http://localhost:3000/qr-product.html?id=leakfix](http://localhost:3000/qr-product.html?id=leakfix)
   - [http://localhost:3000/qr-checkout.html](http://localhost:3000/qr-checkout.html)
3. Open Chrome DevTools (`Ctrl + Shift + I` or `F12`), toggle Device Toolbar (`Ctrl + Shift + M`), and select **iPhone 14 / Pixel 7** to experience the mobile-first ergonomics.
