/**
 * 首页JavaScript文件
 */

// 民族数据
const nationsData = [
  { id: 'han', name: '汉族', pinyin: 'Hanzu' },
  { id: 'mongolian', name: '蒙古族', pinyin: 'Mengguzu' },
  { id: 'tibetan', name: '藏族', pinyin: 'Zangzu' },
  { id: 'uyghur', name: '维吾尔族', pinyin: 'Weiwuerzu' },
  { id: 'hui', name: '回族', pinyin: 'Huizu' },
  { id: 'zhuang', name: '壮族', pinyin: 'Zhuangzu' },
  { id: 'miao', name: '苗族', pinyin: 'Miaozu' },
  { id: 'yi', name: '彝族', pinyin: 'Yizu' },
  { id: 'buyei', name: '布依族', pinyin: 'Buyeizu' },
  { id: 'korean', name: '朝鲜族', pinyin: 'Chaoxianzu' },
  { id: 'manchu', name: '满族', pinyin: 'Manzu' },
  { id: 'dong', name: '侗族', pinyin: 'Dongzu' }
];

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  renderNationsPreview();
  initStatsAnimation();
});

/**
 * 渲染民族预览列表
 */
function renderNationsPreview() {
  const grid = document.getElementById('nationsGrid');
  if (!grid) return;

  // 只显示前12个民族作为预览
  const previewNations = nationsData.slice(0, 12);
  
  grid.innerHTML = previewNations.map(nation => `
    <div class="nation-item" onclick="goToNation('${nation.id}')">
      <div class="nation-avatar">${nation.name.charAt(0)}</div>
      <div class="nation-name">${nation.name}</div>
    </div>
  `).join('');
}

/**
 * 跳转到民族详情页
 */
function goToNation(nationId) {
  window.location.href = `pages/nation-detail.html?id=${nationId}`;
}

/**
 * 初始化统计数据动画
 */
function initStatsAnimation() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.textContent;
        
        // 如果是数字，执行动画
        if (!isNaN(parseInt(finalValue))) {
          animateNumber(target, parseInt(finalValue));
        }
        
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  statNumbers.forEach(stat => observer.observe(stat));
}

/**
 * 数字动画
 */
function animateNumber(element, finalValue) {
  const duration = 2000;
  const startTime = performance.now();
  const startValue = 0;

  function updateNumber(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // 使用缓动函数
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.floor(startValue + (finalValue - startValue) * easeOutQuart);
    
    element.textContent = currentValue;
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      element.textContent = finalValue;
    }
  }

  requestAnimationFrame(updateNumber);
}

/**
 * 平滑滚动到指定区域
 */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
