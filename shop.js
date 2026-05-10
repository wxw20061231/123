/**
 * 搜索页面JavaScript文件
 */

// 搜索数据
const searchData = {
  nations: [
    { id: 'han', name: '汉族', pinyin: 'Hanzu', type: 'nation', desc: '中国的主体民族，拥有悠久的历史和灿烂的文化。' },
    { id: 'mongolian', name: '蒙古族', pinyin: 'Mengguzu', type: 'nation', desc: '游牧民族的代表，拥有悠久的草原文化。' },
    { id: 'tibetan', name: '藏族', pinyin: 'Zangzu', type: 'nation', desc: '主要聚居在青藏高原，拥有独特的藏传佛教文化。' },
    { id: 'uyghur', name: '维吾尔族', pinyin: 'Weiwuerzu', type: 'nation', desc: '拥有丰富的歌舞艺术传统，十二木卡姆是世界非物质文化遗产。' },
    { id: 'hui', name: '回族', pinyin: 'Huizu', type: 'nation', desc: '中国分布最广的少数民族，以伊斯兰教信仰为纽带。' },
    { id: 'zhuang', name: '壮族', pinyin: 'Zhuangzu', type: 'nation', desc: '中国人口最多的少数民族，以壮锦、铜鼓、山歌闻名。' },
    { id: 'miao', name: '苗族', pinyin: 'Miaozu', type: 'nation', desc: '以精美的银饰、刺绣和蜡染闻名。' },
    { id: 'yi', name: '彝族', pinyin: 'Yizu', type: 'nation', desc: '拥有独特的十月太阳历和火把节。' },
    { id: 'buyei', name: '布依族', pinyin: 'Buyeizu', type: 'nation', desc: '主要聚居在贵州，以蜡染、刺绣闻名。' },
    { id: 'korean', name: '朝鲜族', pinyin: 'Chaoxianzu', type: 'nation', desc: '主要聚居在东北地区，以歌舞、体育、美食闻名。' },
    { id: 'manchu', name: '满族', pinyin: 'Manzu', type: 'nation', desc: '曾建立清朝，对中国历史产生深远影响。' },
    { id: 'dong', name: '侗族', pinyin: 'Dongzu', type: 'nation', desc: '以鼓楼、风雨桥、大歌闻名。' }
  ],
  culture: [
    { id: 'art', name: '民族艺术', type: 'culture', desc: '音乐、舞蹈、绘画等艺术形式' },
    { id: 'heritage', name: '非遗项目', type: 'culture', desc: '世界级和国家级非物质文化遗产' },
    { id: 'food', name: '民族美食', type: 'culture', desc: '各民族独特的饮食文化' },
    { id: 'costume', name: '民族服饰', type: 'culture', desc: '精美绝伦的传统服饰' },
    { id: 'architecture', name: '民族建筑', type: 'culture', desc: '独具特色的民居建筑' }
  ],
  festivals: [
    { id: 'nadamu', name: '那达慕大会', type: 'festival', desc: '蒙古族的传统节日，主要举行赛马、摔跤、射箭等活动。' },
    { id: 'huoba', name: '火把节', type: 'festival', desc: '彝族的传统节日，主要在农历六月二十四日举行。' },
    { id: 'miao-nian', name: '苗年', type: 'festival', desc: '苗族的传统节日，通常在农历十月举行。' },
    { id: 'sanyuesan', name: '三月三', type: 'festival', desc: '壮族的重要节日，有唱山歌、抛绣球等传统活动。' }
  ]
};

// 搜索历史
let searchHistory = [];

// 当前搜索状态
let currentTab = 'all';
let searchKeyword = '';

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  loadSearchHistory();
  initSearchInput();
  initSearchButton();
  initTabs();
  initClearHistory();
  initModal();
  initModalTabs();
  
  // 从URL获取搜索关键词
  const urlParams = new URLSearchParams(window.location.search);
  const keyword = urlParams.get('q');
  if (keyword) {
    document.getElementById('searchInput').value = keyword;
    performSearch(keyword);
  }
});

/**
 * 加载搜索历史
 */
function loadSearchHistory() {
  const saved = localStorage.getItem('searchHistory');
  if (saved) {
    searchHistory = JSON.parse(saved);
    renderSearchHistory();
  }
}

/**
 * 保存搜索历史
 */
function saveSearchHistory(keyword) {
  if (!keyword || keyword.trim() === '') return;
  
  // 移除重复项
  searchHistory = searchHistory.filter(item => item !== keyword);
  
  // 添加到开头
  searchHistory.unshift(keyword);
  
  // 限制最多保存10条
  if (searchHistory.length > 10) {
    searchHistory = searchHistory.slice(0, 10);
  }
  
  // 保存到localStorage
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  
  // 更新显示
  renderSearchHistory();
}

/**
 * 渲染搜索历史
 */
function renderSearchHistory() {
  const container = document.getElementById('historyTags');
  if (!container) return;

  if (searchHistory.length === 0) {
    container.innerHTML = '<p style="color: var(--text-tertiary); font-size: 0.9rem;">暂无搜索历史</p>';
    return;
  }

  container.innerHTML = searchHistory.map(keyword => `
    <span class="history-tag" onclick="searchHistoryItem('${keyword}')">${keyword}</span>
  `).join('');
}

/**
 * 搜索历史项
 */
function searchHistoryItem(keyword) {
  document.getElementById('searchInput').value = keyword;
  performSearch(keyword);
}

/**
 * 初始化搜索输入框
 */
function initSearchInput() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch(this.value);
    }
  });
}

/**
 * 初始化搜索按钮
 */
function initSearchButton() {
  const searchBtn = document.getElementById('searchBtn');
  if (!searchBtn) return;

  searchBtn.addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      performSearch(searchInput.value);
    }
  });
}

/**
 * 初始化标签页
 */
function initTabs() {
  const tabs = document.querySelectorAll('.result-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      currentTab = this.dataset.tab;
      performSearch(searchKeyword);
    });
  });
}

/**
 * 初始化清空历史
 */
function initClearHistory() {
  const clearBtn = document.getElementById('clearHistory');
  if (!clearBtn) return;

  clearBtn.addEventListener('click', function() {
    if (confirm('确定要清空搜索历史吗？')) {
      searchHistory = [];
      localStorage.removeItem('searchHistory');
      renderSearchHistory();
    }
  });
}

/**
 * 初始化弹出层
 */
function initModal() {
  const closeBtn = document.getElementById('closeModal');
  if (!closeBtn) return;

  closeBtn.addEventListener('click', function() {
    const modal = document.getElementById('searchModal');
    if (modal) {
      modal.classList.remove('show');
    }
  });

  // 点击背景关闭弹出层
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }
}

/**
 * 初始化弹出层标签页
 */
function initModalTabs() {
  const tabs = document.querySelectorAll('#modalTabs .result-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      currentTab = this.dataset.tab;
      performSearch(searchKeyword);
    });
  });
}

/**
 * 执行搜索
 */
function performSearch(keyword) {
  searchKeyword = keyword.trim();
  
  if (!searchKeyword) {
    renderNoResults();
    return;
  }

  // 保存到搜索历史
  saveSearchHistory(searchKeyword);

  // 执行搜索
  const results = searchAll(searchKeyword);
  
  // 显示弹出层
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.classList.add('show');
  }
  
  // 渲染结果
  renderResults(results);
}

/**
 * 搜索所有数据
 */
function searchAll(keyword) {
  const lowerKeyword = keyword.toLowerCase();
  const results = {
    nations: [],
    culture: [],
    festivals: []
  };

  // 搜索民族
  results.nations = searchData.nations.filter(item => 
    item.name.toLowerCase().includes(lowerKeyword) ||
    item.pinyin.toLowerCase().includes(lowerKeyword) ||
    item.desc.toLowerCase().includes(lowerKeyword)
  );

  // 搜索文化
  results.culture = searchData.culture.filter(item =>
    item.name.toLowerCase().includes(lowerKeyword) ||
    item.desc.toLowerCase().includes(lowerKeyword)
  );

  // 搜索节日
  results.festivals = searchData.festivals.filter(item =>
    item.name.toLowerCase().includes(lowerKeyword) ||
    item.desc.toLowerCase().includes(lowerKeyword)
  );

  return results;
}

/**
 * 渲染搜索结果
 */
function renderResults(results) {
  const container = document.getElementById('modalResults');
  if (!container) return;

  // 根据当前标签页过滤结果
  let filteredResults = [];
  if (currentTab === 'all') {
    filteredResults = [
      ...results.nations.map(item => ({ ...item, category: '民族' })),
      ...results.culture.map(item => ({ ...item, category: '文化' })),
      ...results.festivals.map(item => ({ ...item, category: '节日' }))
    ];
  } else if (currentTab === 'nation') {
    filteredResults = results.nations.map(item => ({ ...item, category: '民族' }));
  } else if (currentTab === 'culture') {
    filteredResults = results.culture.map(item => ({ ...item, category: '文化' }));
  } else if (currentTab === 'festival') {
    filteredResults = results.festivals.map(item => ({ ...item, category: '节日' }));
  }

  // 检查是否有结果
  const totalResults = results.nations.length + results.culture.length + results.festivals.length;
  
  if (totalResults === 0) {
    renderNoResults();
    return;
  }

  // 渲染结果
  let html = '';
  
  // 民族结果
  if (results.nations.length > 0 && (currentTab === 'all' || currentTab === 'nation')) {
    html += `
      <div class="result-section">
        <h3 class="result-section-title">
          <i class="fas fa-users"></i>
          民族
          <span class="result-count">${results.nations.length}</span>
        </h3>
        <div class="result-grid">
          ${results.nations.map(item => `
            <div class="result-card" onclick="goToNation('${item.id}')">
              <span class="result-card-type">民族</span>
              <h4 class="result-card-title">${highlightText(item.name, searchKeyword)}</h4>
              <p class="result-card-desc">${highlightText(item.desc, searchKeyword)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 文化结果
  if (results.culture.length > 0 && (currentTab === 'all' || currentTab === 'culture')) {
    html += `
      <div class="result-section">
        <h3 class="result-section-title">
          <i class="fas fa-palette"></i>
          文化
          <span class="result-count">${results.culture.length}</span>
        </h3>
        <div class="result-grid">
          ${results.culture.map(item => `
            <div class="result-card" onclick="goToCulture('${item.id}')">
              <span class="result-card-type">文化</span>
              <h4 class="result-card-title">${highlightText(item.name, searchKeyword)}</h4>
              <p class="result-card-desc">${highlightText(item.desc, searchKeyword)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 节日结果
  if (results.festivals.length > 0 && (currentTab === 'all' || currentTab === 'festival')) {
    html += `
      <div class="result-section">
        <h3 class="result-section-title">
          <i class="fas fa-calendar-alt"></i>
          节日
          <span class="result-count">${results.festivals.length}</span>
        </h3>
        <div class="result-grid">
          ${results.festivals.map(item => `
            <div class="result-card">
              <span class="result-card-type">节日</span>
              <h4 class="result-card-title">${highlightText(item.name, searchKeyword)}</h4>
              <p class="result-card-desc">${highlightText(item.desc, searchKeyword)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

/**
 * 渲染无结果
 */
function renderNoResults() {
  const container = document.getElementById('modalResults');
  if (!container) return;

  container.innerHTML = `
    <div class="no-results">
      <div class="no-results-icon">
        <i class="fas fa-search"></i>
      </div>
      <h3 class="no-results-text">未找到相关结果</h3>
      <p class="no-results-suggestion">请尝试使用其他关键词搜索</p>
    </div>
  `;
}

/**
 * 高亮搜索文本
 */
function highlightText(text, keyword) {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, 'gi');
  return text.replace(regex, '<span style="background: rgba(211, 47, 47, 0.2); padding: 0 2px;">$1</span>');
}

/**
 * 跳转到民族详情页
 */
function goToNation(nationId) {
  window.location.href = `nation-detail.html?id=${nationId}`;
}

/**
 * 跳转到文化专题页
 */
function goToCulture(cultureId) {
  window.location.href = `culture.html`;
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
