/**
 * 民族名录页面JavaScript文件
 */

// 民族数据
const nationsData = [
  {
    id: 'han',
    name: '汉族',
    pinyin: 'Hanzu',
    region: ['全国各地'],
    tags: ['春节', '汉服', '京剧', '书法'],
    description: '汉族是中国的主体民族，拥有悠久的历史和灿烂的文化。汉族文化是中华文化的主体，对世界文明发展做出了重要贡献。'
  },
  {
    id: 'mongolian',
    name: '蒙古族',
    pinyin: 'Mengguzu',
    region: ['内蒙古', '新疆', '青海', '甘肃'],
    tags: ['那达慕', '马头琴', '蒙古包', '长调'],
    description: '蒙古族是游牧民族的代表，拥有悠久的草原文化。那达慕大会、马头琴、蒙古包是蒙古族文化的象征。'
  },
  {
    id: 'tibetan',
    name: '藏族',
    pinyin: 'Zangzu',
    region: ['西藏', '青海', '四川', '云南', '甘肃'],
    tags: ['藏历新年', '唐卡', '酥油茶', '藏戏'],
    description: '藏族主要聚居在青藏高原，拥有独特的藏传佛教文化。唐卡、藏戏、酥油茶是藏族文化的代表。'
  },
  {
    id: 'uyghur',
    name: '维吾尔族',
    pinyin: 'Weiwuerzu',
    region: ['新疆'],
    tags: ['十二木卡姆', '手抓饭', '馕', '麦西热甫'],
    description: '维吾尔族是新疆的主体民族，拥有丰富的歌舞艺术传统。十二木卡姆是世界非物质文化遗产。'
  },
  {
    id: 'hui',
    name: '回族',
    pinyin: 'Huizu',
    region: ['宁夏', '甘肃', '青海', '新疆', '河南', '河北', '云南', '山东'],
    tags: ['开斋节', '清真食品', '花儿', '清真寺'],
    description: '回族是中国分布最广的少数民族，以伊斯兰教信仰为纽带，形成了独特的民族文化。'
  },
  {
    id: 'zhuang',
    name: '壮族',
    pinyin: 'Zhuangzu',
    region: ['广西', '云南', '广东', '贵州'],
    tags: ['三月三', '壮锦', '铜鼓', '山歌'],
    description: '壮族是中国人口最多的少数民族，以壮锦、铜鼓、山歌闻名。三月三是壮族的重要节日。'
  },
  {
    id: 'miao',
    name: '苗族',
    pinyin: 'Miaozu',
    region: ['贵州', '湖南', '云南', '广西', '四川', '海南'],
    tags: ['苗年', '银饰', '蜡染', '芦笙'],
    description: '苗族以精美的银饰、刺绣和蜡染闻名。苗年、姊妹节是苗族的重要传统节日。'
  },
  {
    id: 'yi',
    name: '彝族',
    pinyin: 'Yizu',
    region: ['四川', '云南', '贵州', '广西'],
    tags: ['火把节', '十月太阳历', '彝族服饰', '达体舞'],
    description: '彝族拥有独特的十月太阳历和火把节。彝族服饰色彩艳丽，歌舞热情奔放。'
  },
  {
    id: 'buyei',
    name: '布依族',
    pinyin: 'Buyeizu',
    region: ['贵州', '云南', '四川'],
    tags: ['蜡染', '六月六', '布依戏', '八音坐唱'],
    description: '布依族主要聚居在贵州，以蜡染、刺绣闻名。布依族擅长水稻种植，有"水稻民族"之称。'
  },
  {
    id: 'korean',
    name: '朝鲜族',
    pinyin: 'Chaoxianzu',
    region: ['吉林', '黑龙江', '辽宁'],
    tags: ['长鼓舞', '伽倻琴', '泡菜', '冷面'],
    description: '朝鲜族主要聚居在东北地区，以歌舞、体育、美食闻名。长鼓舞、伽倻琴是朝鲜族艺术的代表。'
  },
  {
    id: 'manchu',
    name: '满族',
    pinyin: 'Manzu',
    region: ['辽宁', '吉林', '黑龙江', '河北', '北京', '内蒙古'],
    tags: ['旗袍', '萨其马', '满族说部', '珍珠球'],
    description: '满族曾建立清朝，对中国历史产生深远影响。旗袍、萨其马、酸汤子是满族文化的代表。'
  },
  {
    id: 'dong',
    name: '侗族',
    pinyin: 'Dongzu',
    region: ['贵州', '湖南', '广西', '湖北'],
    tags: ['侗族大歌', '鼓楼', '风雨桥', '侗锦'],
    description: '侗族以鼓楼、风雨桥、大歌闻名。侗族大歌是世界非物质文化遗产。'
  }
];

// 地区映射
const regionMap = {
  'north': ['北京', '天津', '河北', '山西', '内蒙古', '山东', '河南'],
  'south': ['江苏', '浙江', '安徽', '福建', '江西', '湖北', '湖南', '广东', '广西', '海南'],
  'northwest': ['陕西', '甘肃', '青海', '宁夏', '新疆'],
  'southwest': ['四川', '贵州', '云南', '西藏', '重庆'],
  'northeast': ['辽宁', '吉林', '黑龙江']
};

// 当前筛选条件
let currentFilter = 'all';
let searchKeyword = '';

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  renderNationsList();
  initFilters();
  initSearch();
});

/**
 * 渲染民族列表
 */
function renderNationsList() {
  const listContainer = document.getElementById('nationsList');
  if (!listContainer) return;

  // 筛选民族
  let filteredNations = nationsData;
  
  if (currentFilter !== 'all') {
    const targetRegions = regionMap[currentFilter] || [];
    filteredNations = nationsData.filter(nation => 
      nation.region.some(r => targetRegions.some(tr => r.includes(tr)))
    );
  }

  // 搜索筛选
  if (searchKeyword) {
    const keyword = searchKeyword.toLowerCase();
    filteredNations = filteredNations.filter(nation =>
      nation.name.includes(searchKeyword) ||
      nation.pinyin.toLowerCase().includes(keyword) ||
      nation.tags.some(tag => tag.includes(searchKeyword))
    );
  }

  // 渲染列表
  if (filteredNations.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: var(--spacing-xxl); color: var(--text-secondary);">
        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: var(--spacing-md);"></i>
        <p>未找到匹配的民族</p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = filteredNations.map(nation => `
    <div class="nation-card" onclick="goToNationDetail('${nation.id}')">
      <div class="nation-card-image">${nation.name.charAt(0)}</div>
      <div class="nation-card-content">
        <h3 class="nation-card-title">${highlightText(nation.name, searchKeyword)}</h3>
        <p class="nation-card-pinyin">${nation.pinyin}</p>
        <div class="nation-card-tags">
          ${nation.tags.slice(0, 3).map(tag => `
            <span class="nation-card-tag">${highlightText(tag, searchKeyword)}</span>
          `).join('')}
        </div>
        <p class="nation-card-desc">${nation.description}</p>
      </div>
    </div>
  `).join('');
}

/**
 * 高亮搜索文本
 */
function highlightText(text, keyword) {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, 'gi');
  return text.replace(regex, '<span class="search-highlight">$1</span>');
}

/**
 * 跳转到民族详情页
 */
function goToNationDetail(nationId) {
  window.location.href = `nation-detail.html?id=${nationId}`;
}

/**
 * 初始化筛选器
 */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // 更新按钮状态
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // 更新筛选条件
      currentFilter = this.dataset.filter;
      
      // 重新渲染列表
      renderNationsList();
    });
  });
}

/**
 * 初始化搜索
 */
function initSearch() {
  const searchInput = document.querySelector('.search-box input');
  const searchBtn = document.querySelector('.search-btn');
  
  if (searchInput) {
    // 实时搜索
    searchInput.addEventListener('input', debounce(function() {
      searchKeyword = this.value.trim();
      renderNationsList();
    }, 300));
    
    // 回车搜索
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchKeyword = this.value.trim();
        renderNationsList();
      }
    });
  }
  
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      const input = document.querySelector('.search-box input');
      if (input) {
        searchKeyword = input.value.trim();
        renderNationsList();
      }
    });
  }
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
