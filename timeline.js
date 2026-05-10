/**
 * 民族特色商品页面JavaScript文件
 */

// 商品数据
const productsData = [
  // 手工艺品
  {
    id: 1,
    name: '苗族银饰手镯',
    nation: '苗族',
    nationId: 'miao',
    category: 'craft',
    price: 299,
    originalPrice: 399,
    image: '../images/苗族银饰手镯.jpg',
    icon: '💍',
    desc: '纯手工打造，传统苗族银饰工艺，精美绝伦',
    badge: 'handmade'
  },
  {
    id: 2,
    name: '藏族唐卡 - 观音菩萨',
    nation: '藏族',
    nationId: 'tibetan',
    category: 'art',
    price: 1280,
    originalPrice: 1580,
    image: '../images/藏族唐卡.jpg',
    icon: '🖼️',
    desc: '天然矿物颜料绘制，传统唐卡艺术',
    badge: 'handmade'
  },
  {
    id: 3,
    name: '蒙古族马头琴',
    nation: '蒙古族',
    nationId: 'mongolian',
    category: 'craft',
    price: 899,
    originalPrice: 1099,
    image: '../images/蒙古族马头琴.jpg',
    icon: '🎻',
    desc: '传统手工制作，音色优美，适合初学者',
    badge: 'handmade'
  },
  {
    id: 4,
    name: '壮族壮锦围巾',
    nation: '壮族',
    nationId: 'zhuang',
    category: 'craft',
    price: 168,
    originalPrice: 228,
    image: '../images/壮族壮锦围巾.jpg',
    icon: '🧣',
    desc: '传统壮锦工艺，色彩鲜艳，图案精美',
    badge: 'handmade'
  },
  {
    id: 5,
    name: '维吾尔族手工地毯',
    nation: '维吾尔族',
    nationId: 'uyghur',
    category: 'craft',
    price: 1580,
    originalPrice: 1980,
    image: '../images/维吾尔族手工地毯.jpg',
    icon: '🧶',
    desc: '纯手工编织，图案精美，质地柔软',
    badge: 'limited'
  },
  {
    id: 6,
    name: '彝族漆器茶具套装',
    nation: '彝族',
    nationId: 'yi',
    category: 'craft',
    price: 458,
    originalPrice: 588,
    image: '../images/彝族漆器茶具套装.jpg',
    icon: '🍵',
    desc: '传统彝族漆器工艺，黑红配色，古朴典雅',
    badge: 'handmade'
  },
  // 民族服饰
  {
    id: 7,
    name: '苗族刺绣上衣',
    nation: '苗族',
    nationId: 'miao',
    category: 'clothing',
    price: 388,
    originalPrice: 488,
    image: '../images/苗族刺绣上衣.jpg',
    icon: '👚',
    desc: '纯手工刺绣，精美图案，传统工艺',
    badge: 'handmade'
  },
  {
    id: 8,
    name: '藏族传统藏袍',
    nation: '藏族',
    nationId: 'tibetan',
    category: 'clothing',
    price: 688,
    originalPrice: 888,
    image: '../images/藏族传统藏袍.jpg',
    icon: '🥻',
    desc: '优质羊毛面料，传统款式，保暖舒适',
    badge: 'handmade'
  },
  {
    id: 9,
    name: '蒙古族传统长袍',
    nation: '蒙古族',
    nationId: 'mongolian',
    category: 'clothing',
    price: 568,
    originalPrice: 728,
    image: '../images/蒙古族传统长袍.jpg',
    icon: '🧥',
    desc: '传统蒙古袍款式，精美镶边，大气典雅',
    badge: 'handmade'
  },
  {
    id: 10,
    name: '傣族筒裙',
    nation: '傣族',
    nationId: 'dai',
    category: 'clothing',
    price: 238,
    originalPrice: 298,
    image: '../images/傣族筒裙.jpg',
    icon: '👗',
    desc: '轻薄透气，精美图案，适合夏季穿着',
    badge: ''
  },
  // 特色美食
  {
    id: 11,
    name: '云南普洱茶饼',
    nation: '傣族',
    nationId: 'dai',
    category: 'food',
    price: 168,
    originalPrice: 218,
    image: '../images/云南普洱茶饼.jpg',
    icon: '🍵',
    desc: '陈年普洱，口感醇厚，回甘悠长',
    badge: ''
  },
  {
    id: 12,
    name: '内蒙古风干牛肉',
    nation: '蒙古族',
    nationId: 'mongolian',
    category: 'food',
    price: 128,
    originalPrice: 158,
    image: '../images/内蒙古风干牛肉.jpg',
    icon: '🥩',
    desc: '传统工艺制作，肉质鲜美，营养丰富',
    badge: ''
  },
  {
    id: 13,
    name: '新疆和田大枣',
    nation: '维吾尔族',
    nationId: 'uyghur',
    category: 'food',
    price: 88,
    originalPrice: 108,
    image: '../images/新疆和田大枣.jpg',
    icon: '🫒',
    desc: '个大肉厚，甜而不腻，营养丰富',
    badge: ''
  },
  {
    id: 14,
    name: '广西壮族糍粑',
    nation: '壮族',
    nationId: 'zhuang',
    category: 'food',
    price: 58,
    originalPrice: 78,
    image: '../images/广西壮族糍粑.jpg',
    icon: '🍡',
    desc: '传统手工制作，软糯香甜，老少皆宜',
    badge: 'handmade'
  },
  // 饰品配饰
  {
    id: 15,
    name: '藏族天珠项链',
    nation: '藏族',
    nationId: 'tibetan',
    category: 'jewelry',
    price: 368,
    originalPrice: 468,
    image: '../images/藏族唐卡.jpg',
    icon: '📿',
    desc: '天然玛瑙制作，传统天珠工艺，寓意吉祥',
    badge: 'handmade'
  },
  {
    id: 16,
    name: '苗族银饰耳环',
    nation: '苗族',
    nationId: 'miao',
    category: 'jewelry',
    price: 128,
    originalPrice: 168,
    image: '../images/苗族银饰手镯.jpg',
    icon: '💎',
    desc: '纯手工打造，精美图案，独特设计',
    badge: 'handmade'
  }
];

// 购物车数据
let cart = [];

// 当前筛选状态
let currentCategory = 'all';
let currentNation = 'all';
let searchKeyword = '';

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  loadCart();
  initFilters();
  initSearch();
  initCartModal();
  renderProducts();
});

/**
 * 加载购物车数据
 */
function loadCart() {
  const savedCart = localStorage.getItem('shopCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartUI();
  }
}

/**
 * 保存购物车数据
 */
function saveCart() {
  localStorage.setItem('shopCart', JSON.stringify(cart));
  updateCartUI();
}

/**
 * 更新购物车UI
 */
function updateCartUI() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

/**
 * 初始化筛选器
 */
function initFilters() {
  // 分类筛选
  const categoryBtns = document.querySelectorAll('#categoryFilters .filter-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      categoryBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.dataset.category;
      renderProducts();
    });
  });

  // 民族筛选
  const nationBtns = document.querySelectorAll('#nationFilters .filter-btn');
  nationBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      nationBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentNation = this.dataset.nation;
      renderProducts();
    });
  });
}

/**
 * 初始化搜索
 */
function initSearch() {
  const searchInput = document.getElementById('productSearch');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(function() {
      searchKeyword = this.value.trim().toLowerCase();
      renderProducts();
    }, 300));
  }
}

/**
 * 初始化购物车弹窗
 */
function initCartModal() {
  const cartIcon = document.getElementById('cartIcon');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.getElementById('closeCart');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (cartIcon) {
    cartIcon.addEventListener('click', function() {
      openCartModal();
    });
  }

  if (closeCart) {
    closeCart.addEventListener('click', closeCartModal);
  }

  if (cartModal) {
    cartModal.addEventListener('click', function(e) {
      if (e.target === cartModal) {
        closeCartModal();
      }
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
      if (cart.length === 0) {
        showToast('购物车是空的，请先添加商品');
        return;
      }
      showToast('结算功能开发中...');
    });
  }
}

/**
 * 打开购物车弹窗
 */
function openCartModal() {
  const cartModal = document.getElementById('cartModal');
  if (cartModal) {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
  }
}

/**
 * 关闭购物车弹窗
 */
function closeCartModal() {
  const cartModal = document.getElementById('cartModal');
  if (cartModal) {
    cartModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * 渲染商品列表
 */
function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  const clothingGrid = document.getElementById('clothingGrid');
  const foodGrid = document.getElementById('foodGrid');

  // 筛选商品
  let filteredProducts = productsData.filter(product => {
    const matchCategory = currentCategory === 'all' || product.category === currentCategory;
    const matchNation = currentNation === 'all' || product.nationId === currentNation;
    const matchSearch = !searchKeyword || 
      product.name.toLowerCase().includes(searchKeyword) ||
      product.nation.toLowerCase().includes(searchKeyword) ||
      product.desc.toLowerCase().includes(searchKeyword);
    
    return matchCategory && matchNation && matchSearch;
  });

  // 渲染热门手工艺品
  if (productsGrid) {
    const craftProducts = filteredProducts.filter(p => p.category === 'craft' || p.category === 'art');
    productsGrid.innerHTML = craftProducts.map(product => createProductCard(product)).join('');
  }

  // 渲染民族服饰
  if (clothingGrid) {
    const clothingProducts = filteredProducts.filter(p => p.category === 'clothing');
    clothingGrid.innerHTML = clothingProducts.map(product => createProductCard(product)).join('');
  }

  // 渲染特色美食
  if (foodGrid) {
    const foodProducts = filteredProducts.filter(p => p.category === 'food');
    foodGrid.innerHTML = foodProducts.map(product => createProductCard(product)).join('');
  }

  // 绑定添加购物车事件
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const productId = parseInt(this.dataset.productId);
      addToCart(productId);
    });
  });
}

/**
 * 创建商品卡片HTML
 */
function createProductCard(product) {
  const badgeHTML = product.badge ? `<span class="product-badge ${product.badge}">${getBadgeText(product.badge)}</span>` : '';
  const originalPriceHTML = product.originalPrice ? `<span class="original">¥${product.originalPrice}</span>` : '';
  const imageHTML = product.image ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">` : product.icon;

  return `
    <div class="product-card">
      <div class="product-image">
        ${badgeHTML}
        ${imageHTML}
      </div>
      <div class="product-info">
        <div class="product-nation">${product.nation}</div>
        <h4 class="product-name">${product.name}</h4>
        <p class="product-desc">${product.desc}</p>
        <div class="product-footer">
          <div class="product-price">
            ¥${product.price}
            ${originalPriceHTML}
          </div>
          <button class="add-to-cart" data-product-id="${product.id}">
            <i class="fas fa-cart-plus"></i>
            加入购物车
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * 获取徽章文字
 */
function getBadgeText(badge) {
  const badgeTexts = {
    'handmade': '手工',
    'limited': '限量'
  };
  return badgeTexts[badge] || badge;
}

/**
 * 添加到购物车
 */
function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      icon: product.icon,
      quantity: 1
    });
  }

  saveCart();
  showToast(`已将 ${product.name} 加入购物车`);
}

/**
 * 渲染购物车商品
 */
function renderCartItems() {
  const cartItems = document.getElementById('cartItems');
  const totalItems = document.getElementById('totalItems');
  const subtotal = document.getElementById('subtotal');
  const totalPrice = document.getElementById('totalPrice');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>购物车是空的</p>
        <p style="font-size: 0.9rem; margin-top: var(--spacing-sm);">快去选购心仪的商品吧</p>
      </div>
    `;
    if (checkoutBtn) checkoutBtn.disabled = true;
  } else {
    cartItems.innerHTML = cart.map(item => {
      const itemImageHTML = item.image ? `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">` : item.icon;
      return `
      <div class="cart-item">
        <div class="cart-item-image">${itemImageHTML}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">¥${item.price}</div>
          <div class="cart-item-actions">
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
            <span class="cart-item-quantity">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            <span class="remove-item" onclick="removeFromCart(${item.id})">删除</span>
          </div>
        </div>
      </div>
    `;
    }).join('');
    if (checkoutBtn) checkoutBtn.disabled = false;
  }

  // 更新汇总信息
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (totalItems) totalItems.textContent = `${totalQuantity} 件`;
  if (subtotal) subtotal.textContent = `¥${totalAmount.toFixed(2)}`;
  if (totalPrice) totalPrice.textContent = `¥${totalAmount.toFixed(2)}`;
}

/**
 * 更新商品数量
 */
function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  renderCartItems();
}

/**
 * 从购物车移除
 */
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCartItems();
  showToast('已从购物车移除');
}

/**
 * 显示提示消息
 */
function showToast(message, duration = 2000) {
  const existingToast = document.querySelector('.toast-message');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 10000;
    animation: fadeIn 0.3s ease;
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/**
 * 防抖函数
 */
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
