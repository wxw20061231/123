/**
 * 文化专题页面JavaScript文件
 */

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  initCategoryCards();
  initFeaturedItems();
});

/**
 * 跳转到分类详情页
 */
function goToCategory(category) {
  // 可以跳转到对应的分类详情页
  // window.location.href = `culture-category.html?type=${category}`;
  
  // 暂时显示提示
  const categoryNames = {
    'art': '民族艺术',
    'heritage': '非遗项目',
    'food': '民族美食',
    'costume': '民族服饰',
    'architecture': '民族建筑'
  };
  
  showToast(`即将跳转到${categoryNames[category]}专题`);
  
  // 模拟跳转延迟
  setTimeout(() => {
    // 实际项目中这里应该跳转到对应页面
    console.log(`跳转到: ${category}`);
  }, 1000);
}

/**
 * 初始化分类卡片动画
 */
function initCategoryCards() {
  const cards = document.querySelectorAll('.category-card');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
}

/**
 * 初始化特色项目
 */
function initFeaturedItems() {
  const items = document.querySelectorAll('.featured-item');
  
  items.forEach(item => {
    item.addEventListener('click', function() {
      const title = this.querySelector('.featured-title').textContent;
      showToast(`查看详情: ${title}`);
    });
  });
}

/**
 * 显示提示消息
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
