/**
 * 中国各民族文化历史网站 - 主JavaScript文件
 */

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initBackToTop();
  initSearch();
  initHeaderScroll();
});

/**
 * 初始化移动端菜单
 */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        if (mobileMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
    
    // 点击菜单项后关闭菜单
    const menuLinks = mobileMenu.querySelectorAll('.nav-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });
  }
}

/**
 * 初始化返回顶部按钮
 */
function initBackToTop() {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.setAttribute('aria-label', '返回顶部');
  document.body.appendChild(backToTopBtn);
  
  // 滚动时显示/隐藏按钮
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // 点击返回顶部
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 初始化搜索功能
 */
function initSearch() {
  const searchInput = document.querySelector('.search-box input');
  const searchBtn = document.querySelector('.search-btn');
  
  if (searchInput && searchBtn) {
    // 点击搜索按钮
    searchBtn.addEventListener('click', function() {
      performSearch(searchInput.value);
    });
    
    // 按回车键搜索
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch(searchInput.value);
      }
    });
  }
}

/**
 * 执行搜索
 */
function performSearch(keyword) {
  if (keyword && keyword.trim()) {
    window.location.href = 'pages/search.html?q=' + encodeURIComponent(keyword.trim());
  }
}

/**
 * 初始化头部滚动效果
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  
  if (header) {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
      const currentScrollY = window.scrollY;
      
      // 添加/移除阴影
      if (currentScrollY > 10) {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
      }
      
      lastScrollY = currentScrollY;
    });
  }
}

/**
 * 工具函数：节流
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * 工具函数：防抖
 */
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * 工具函数：动画滚动到元素
 */
function scrollToElement(element, offset = 80) {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/**
 * 工具函数：格式化数字
 */
function formatNumber(num) {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  }
  return num.toString();
}

/**
 * 工具函数：复制文本到剪贴板
 */
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('已复制到剪贴板');
  } catch (err) {
    console.error('复制失败:', err);
    showToast('复制失败，请手动复制');
  }
}

/**
 * 工具函数：显示提示消息
 */
function showToast(message, duration = 2000) {
  // 移除已有的toast
  const existingToast = document.querySelector('.toast-message');
  if (existingToast) {
    existingToast.remove();
  }
  
  // 创建新的toast
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
  
  // 自动移除
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
