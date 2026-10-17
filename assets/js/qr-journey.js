/**
 * Polar Specialist Coatings — QR Mobile Customer Journey Engine
 * Manages localStorage cart state, UI toasts, cart drawers, and presentation tools.
 */

const QR_CONFIG = {
  deployedUrl: 'https://ravinderdesigns.github.io/polar/qr-landing.html?utm_source=qr&utm_medium=packaging&utm_campaign=quick_order',
  freeShippingThreshold: 50.00,
  standardShippingFee: 4.95,
  storageKey: 'polar_qr_cart_v1'
};

// Cart State Manager
class PolarQRCart {
  static getItems() {
    try {
      const data = localStorage.getItem(QR_CONFIG.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
      return [];
    }
  }

  static saveItems(items) {
    try {
      localStorage.setItem(QR_CONFIG.storageKey, JSON.stringify(items));
    } catch (e) {
      console.warn('Could not write cart to localStorage', e);
    }
    PolarQRCart.updateBadges();
  }

  static addItem(productId, variantId, qty = 1) {
    const product = getProductById(productId);
    if (!product) return;

    let variant = product.variants.find(v => v.id === variantId);
    if (!variant) {
      variant = product.variants[0];
    }

    const items = PolarQRCart.getItems();
    const existingIndex = items.findIndex(item => item.variantId === variant.id);

    if (existingIndex > -1) {
      items[existingIndex].quantity += parseInt(qty, 10);
    } else {
      items.push({
        productId: product.id,
        variantId: variant.id,
        title: product.title,
        shortTitle: product.shortTitle,
        variantName: variant.name || variant.size || variant.title,
        price: parseFloat(variant.price),
        image: product.image,
        liveUrl: product.liveUrl,
        quantity: parseInt(qty, 10)
      });
    }

    PolarQRCart.saveItems(items);
    showQRToast(`Added ${qty}× ${product.shortTitle} to your basket`);
    
    // Dispatch custom event for reactive UI updates
    window.dispatchEvent(new CustomEvent('polar:cart-updated', { detail: { items } }));
  }

  static updateQuantity(variantId, quantity) {
    let items = PolarQRCart.getItems();
    const newQty = parseInt(quantity, 10);

    if (newQty <= 0) {
      items = items.filter(item => item.variantId !== variantId);
    } else {
      const target = items.find(item => item.variantId === variantId);
      if (target) {
        target.quantity = newQty;
      }
    }

    PolarQRCart.saveItems(items);
    window.dispatchEvent(new CustomEvent('polar:cart-updated', { detail: { items } }));
  }

  static removeItem(variantId) {
    const items = PolarQRCart.getItems().filter(item => item.variantId !== variantId);
    PolarQRCart.saveItems(items);
    showQRToast('Item removed from basket');
    window.dispatchEvent(new CustomEvent('polar:cart-updated', { detail: { items } }));
  }

  static clear() {
    localStorage.removeItem(QR_CONFIG.storageKey);
    PolarQRCart.updateBadges();
    window.dispatchEvent(new CustomEvent('polar:cart-updated', { detail: { items: [] } }));
  }

  static getTotals() {
    const items = PolarQRCart.getItems();
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const isFreeShipping = subtotal >= QR_CONFIG.freeShippingThreshold || count === 0;
    const shipping = count === 0 ? 0 : (isFreeShipping ? 0 : QR_CONFIG.standardShippingFee);
    const total = subtotal + shipping;
    const shortfall = Math.max(0, QR_CONFIG.freeShippingThreshold - subtotal);

    return {
      count,
      subtotal: subtotal.toFixed(2),
      shipping: shipping.toFixed(2),
      total: total.toFixed(2),
      isFreeShipping,
      shortfall: shortfall.toFixed(2)
    };
  }

  static updateBadges() {
    const totals = PolarQRCart.getTotals();
    const badges = document.querySelectorAll('.qr-cart-count');
    badges.forEach(badge => {
      badge.textContent = totals.count;
      badge.style.display = totals.count > 0 ? 'inline-flex' : 'none';
    });
  }

  // Preload demo cart if user opens checkout directly without items
  static seedDemoCartIfEmpty() {
    const items = PolarQRCart.getItems();
    if (items.length === 0) {
      PolarQRCart.addItem('leakfix', 'lf-blk-1l', 1);
      PolarQRCart.addItem('dampseal', 'ds-wht-1l', 1);
    }
  }
}

// Toast System
function showQRToast(message, duration = 3000) {
  let toast = document.querySelector('.qr-toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'qr-toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="qr-toast-inner">
      <i data-lucide="check-circle-2" style="width: 18px; height: 18px; color: #10B981; flex-shrink: 0;"></i>
      <span>${message}</span>
    </div>
  `;

  if (window.lucide) {
    lucide.createIcons({ root: toast });
  }

  toast.classList.add('visible');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, duration);
}

// URL Parameter Extraction Helper
function getURLParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// QR Presenter Modal (Presentation Mode for client testing)
function initQRPresenterModal() {
  const trigger = document.querySelector('.qr-demo-trigger-pill');
  if (!trigger) return;

  const modalHtml = `
    <div class="qr-presenter-overlay" id="qrPresenterModal" style="display: none;">
      <div class="qr-presenter-card">
        <button class="qr-modal-close" aria-label="Close QR Modal">
          <i data-lucide="x" style="width: 20px; height: 20px;"></i>
        </button>
        <div class="qr-modal-header">
          <span class="qr-badge-accent">CLIENT PRESENTATION TOOL</span>
          <h3>Scan to Test on Mobile</h3>
          <p>Point your smartphone camera at this live QR code to open the landing page directly on your phone.</p>
        </div>
        <div class="qr-code-graphic-wrap">
          <!-- Live QR Code pointing to deployed GitHub Pages URL -->
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(QR_CONFIG.deployedUrl)}&color=0b4154&bgcolor=ffffff" 
               alt="QR Code to Polar Coatings Mobile Experience" 
               class="qr-live-code-img"
               loading="lazy">
          <div class="qr-url-chip">
            <i data-lucide="smartphone" style="width: 14px; height: 14px;"></i>
            <span>Deployed HTTPS URL</span>
          </div>
        </div>
        <div class="qr-link-copy-row">
          <input type="text" value="${QR_CONFIG.deployedUrl}" readonly id="qrTargetUrlInput">
          <button class="btn btn-sm btn-primary" onclick="copyQRTargetUrl()">Copy Link</button>
        </div>
        <div class="qr-modal-footer">
          <button class="qr-reset-cart-link" onclick="PolarQRCart.clear(); location.reload();">
            <i data-lucide="rotate-ccw" style="width: 13px; height: 13px;"></i>
            <span>Reset Demo Basket</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  if (window.lucide) lucide.createIcons();

  const modal = document.getElementById('qrPresenterModal');
  const closeBtn = modal.querySelector('.qr-modal-close');

  trigger.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
}

function copyQRTargetUrl() {
  const input = document.getElementById('qrTargetUrlInput');
  if (input) {
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value).then(() => {
      showQRToast('Campaign URL copied to clipboard');
    }).catch(() => {
      document.execCommand('copy');
      showQRToast('Campaign URL copied');
    });
  }
}

// Global initialization on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  PolarQRCart.updateBadges();
  initQRPresenterModal();
  if (window.lucide) {
    lucide.createIcons();
  }
});
