/**
 * 民族详情页面JavaScript文件
 */

// 民族详细数据
const nationsDetailData = {
  han: {
    id: 'han',
    name: '汉族',
    pinyin: 'Hanzu',
    population: '约12.8亿',
    region: '全国各地',
    language: '汉语（汉藏语系）',
    description: '汉族是中国的主体民族，拥有悠久的历史和灿烂的文化。汉族文化是中华文化的主体，对世界文明发展做出了重要贡献。汉族起源于华夏族，经过数千年的发展，形成了独特的语言、文字、文化和传统。',
    tags: ['春节', '汉服', '京剧', '书法', '国画', '中医'],
    culture: {
      art: '京剧、书法、国画、古琴',
      festivals: '春节、清明节、端午节、中秋节',
      costume: '汉服、唐装、旗袍',
      food: '八大菜系、茶文化、酒文化'
    }
  },
  mongolian: {
    id: 'mongolian',
    name: '蒙古族',
    pinyin: 'Mengguzu',
    population: '约600万',
    region: '内蒙古、新疆、青海、甘肃',
    language: '蒙古语（阿尔泰语系）',
    description: '蒙古族是游牧民族的代表，拥有悠久的草原文化。那达慕大会、马头琴、蒙古包是蒙古族文化的象征。蒙古族以畜牧业为主，形成了独特的游牧生活方式。',
    tags: ['那达慕', '马头琴', '蒙古包', '长调', '摔跤', '射箭'],
    culture: {
      art: '马头琴、长调、呼麦',
      festivals: '那达慕大会、白节',
      costume: '蒙古袍、腰带、靴子',
      food: '手扒肉、奶茶、奶豆腐'
    }
  },
  tibetan: {
    id: 'tibetan',
    name: '藏族',
    pinyin: 'Zangzu',
    population: '约700万',
    region: '西藏、青海、四川、云南、甘肃',
    language: '藏语（汉藏语系）',
    description: '藏族主要聚居在青藏高原，拥有独特的藏传佛教文化。唐卡、藏戏、酥油茶是藏族文化的代表。藏族文化深受佛教影响，形成了独特的宗教艺术和生活方式。',
    tags: ['藏历新年', '唐卡', '酥油茶', '藏戏', '转经筒', '哈达'],
    culture: {
      art: '唐卡、藏戏、热巴舞',
      festivals: '藏历新年、雪顿节',
      costume: '藏袍、邦典、藏靴',
      food: '酥油茶、糌粑、风干肉'
    }
  },
  uyghur: {
    id: 'uyghur',
    name: '维吾尔族',
    pinyin: 'Weiwuerzu',
    population: '约1000万',
    region: '新疆',
    language: '维吾尔语（阿尔泰语系）',
    description: '维吾尔族是新疆的主体民族，拥有丰富的歌舞艺术传统。十二木卡姆是世界非物质文化遗产。维吾尔族文化融合了中亚和中原文化的特色。',
    tags: ['十二木卡姆', '手抓饭', '馕', '麦西热甫', '都塔尔', '花帽'],
    culture: {
      art: '十二木卡姆、麦西热甫',
      festivals: '古尔邦节、肉孜节',
      costume: '花帽、艾德莱斯绸',
      food: '手抓饭、烤羊肉串、馕'
    }
  },
  hui: {
    id: 'hui',
    name: '回族',
    pinyin: 'Huizu',
    population: '约1100万',
    region: '宁夏、甘肃、青海、新疆、河南、河北、云南、山东',
    language: '汉语（通用）',
    description: '回族是中国分布最广的少数民族，以伊斯兰教信仰为纽带，形成了独特的民族文化。回族文化融合了伊斯兰文化和汉文化的特色。',
    tags: ['开斋节', '清真食品', '花儿', '清真寺', '盖碗茶'],
    culture: {
      art: '花儿、宴席曲',
      festivals: '开斋节、古尔邦节',
      costume: '白帽、盖头',
      food: '拉面、羊肉泡馍、油茶'
    }
  },
  zhuang: {
    id: 'zhuang',
    name: '壮族',
    pinyin: 'Zhuangzu',
    population: '约1900万',
    region: '广西、云南、广东、贵州',
    language: '壮语（汉藏语系）',
    description: '壮族是中国人口最多的少数民族，以壮锦、铜鼓、山歌闻名。三月三是壮族的重要节日。壮族文化源远流长，是岭南文化的重要组成部分。',
    tags: ['三月三', '壮锦', '铜鼓', '山歌', '干栏', '五色糯米饭'],
    culture: {
      art: '山歌、铜鼓舞、壮剧',
      festivals: '三月三、中元节',
      costume: '壮锦、绣花鞋',
      food: '五色糯米饭、粽子、酸鱼'
    }
  },
  miao: {
    id: 'miao',
    name: '苗族',
    pinyin: 'Miaozu',
    population: '约1100万',
    region: '贵州、湖南、云南、广西、四川、海南',
    language: '苗语（汉藏语系）',
    description: '苗族以精美的银饰、刺绣和蜡染闻名。苗年、姊妹节是苗族的重要传统节日。苗族文化丰富多彩，是中华文化的重要组成部分。',
    tags: ['苗年', '银饰', '蜡染', '芦笙', '吊脚楼', '酸汤鱼'],
    culture: {
      art: '芦笙舞、苗绣、蜡染',
      festivals: '苗年、姊妹节、四月八',
      costume: '银饰、百褶裙',
      food: '酸汤鱼、腊肉、糯米酒'
    }
  },
  yi: {
    id: 'yi',
    name: '彝族',
    pinyin: 'Yizu',
    population: '约980万',
    region: '四川、云南、贵州、广西',
    language: '彝语（汉藏语系）',
    description: '彝族拥有独特的十月太阳历和火把节。彝族服饰色彩艳丽，歌舞热情奔放。彝族文化历史悠久，是西南地区重要的民族文化。',
    tags: ['火把节', '十月太阳历', '彝族服饰', '达体舞', '毕摩文化'],
    culture: {
      art: '达体舞、彝族民歌',
      festivals: '火把节、彝族年',
      costume: '擦尔瓦、银饰',
      food: '坨坨肉、荞麦饼、杆杆酒'
    }
  },
  buyei: {
    id: 'buyei',
    name: '布依族',
    pinyin: 'Buyeizu',
    population: '约350万',
    region: '贵州、云南、四川',
    language: '布依语（汉藏语系）',
    description: '布依族主要聚居在贵州，以蜡染、刺绣闻名。布依族擅长水稻种植，有"水稻民族"之称。布依族文化与壮族文化相近，同属百越文化体系。',
    tags: ['蜡染', '六月六', '布依戏', '八音坐唱', '石板房'],
    culture: {
      art: '八音坐唱、布依戏',
      festivals: '六月六、三月三',
      costume: '蜡染衣裙、绣花鞋',
      food: '花米饭、腊肉、糯米酒'
    }
  },
  korean: {
    id: 'korean',
    name: '朝鲜族',
    pinyin: 'Chaoxianzu',
    population: '约180万',
    region: '吉林、黑龙江、辽宁',
    language: '朝鲜语（阿尔泰语系）',
    description: '朝鲜族主要聚居在东北地区，以歌舞、体育、美食闻名。长鼓舞、伽倻琴是朝鲜族艺术的代表。朝鲜族文化保留了浓厚的朝鲜半岛文化特色。',
    tags: ['长鼓舞', '伽倻琴', '泡菜', '冷面', '秋千', '跳板'],
    culture: {
      art: '长鼓舞、伽倻琴、朝鲜民歌',
      festivals: '上元节、寒食节',
      costume: '韩服、朝鲜族服饰',
      food: '泡菜、冷面、打糕'
    }
  },
  manchu: {
    id: 'manchu',
    name: '满族',
    pinyin: 'Manzu',
    population: '约1000万',
    region: '辽宁、吉林、黑龙江、河北、北京、内蒙古',
    language: '满语（阿尔泰语系）',
    description: '满族曾建立清朝，对中国历史产生深远影响。旗袍、萨其马、酸汤子是满族文化的代表。满族文化融合了渔猎、游牧和农耕文化的特色。',
    tags: ['旗袍', '萨其马', '满族说部', '珍珠球', '萨满教'],
    culture: {
      art: '满族说部、八角鼓',
      festivals: '颁金节、春节',
      costume: '旗袍、马褂',
      food: '萨其马、酸汤子、白肉血肠'
    }
  },
  dong: {
    id: 'dong',
    name: '侗族',
    pinyin: 'Dongzu',
    population: '约350万',
    region: '贵州、湖南、广西、湖北',
    language: '侗语（汉藏语系）',
    description: '侗族以鼓楼、风雨桥、大歌闻名。侗族大歌是世界非物质文化遗产。侗族文化丰富多彩，是侗族人民智慧的结晶。',
    tags: ['侗族大歌', '鼓楼', '风雨桥', '侗锦', '萨玛节'],
    culture: {
      art: '侗族大歌、侗戏',
      festivals: '萨玛节、吃新节',
      costume: '侗锦、银饰',
      food: '酸鱼、油茶、糯米'
    }
  }
};

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  loadNationDetail();
  renderRelatedNations();
});

/**
 * 加载民族详情
 */
function loadNationDetail() {
  // 从URL获取民族ID
  const urlParams = new URLSearchParams(window.location.search);
  const nationId = urlParams.get('id') || 'han';
  
  const nation = nationsDetailData[nationId];
  if (!nation) {
    showError('未找到该民族信息');
    return;
  }

  // 更新页面标题
  document.title = `${nation.name} - 中华56民族`;

  // 更新页面内容
  updateElement('nationAvatar', nation.name.charAt(0));
  updateElement('nationName', nation.name);
  updateElement('nationPinyin', nation.pinyin);
  updateElement('nationPopulation', nation.population);
  updateElement('nationRegion', nation.region);
  updateElement('nationLanguage', nation.language);
  updateElement('nationDescription', nation.description);

  // 更新标签
  const tagsContainer = document.getElementById('nationTags');
  if (tagsContainer) {
    tagsContainer.innerHTML = nation.tags.map(tag => 
      `<span class="nation-tag">${tag}</span>`
    ).join('');
  }

  // 更新文化特色
  updateCultureFeatures(nation.culture);
}

/**
 * 更新元素内容
 */
function updateElement(id, content) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = content;
  }
}

/**
 * 更新文化特色
 */
function updateCultureFeatures(culture) {
  const container = document.getElementById('cultureFeatures');
  if (!container || !culture) return;

  const features = [
    { icon: '🎭', title: '传统艺术', desc: culture.art },
    { icon: '🎊', title: '传统节日', desc: culture.festivals },
    { icon: '👘', title: '传统服饰', desc: culture.costume },
    { icon: '🍜', title: '饮食文化', desc: culture.food }
  ];

  container.innerHTML = features.map(feature => `
    <div class="culture-feature-card">
      <div class="culture-feature-icon">${feature.icon}</div>
      <div class="culture-feature-title">${feature.title}</div>
      <div class="culture-feature-desc">${feature.desc}</div>
    </div>
  `).join('');
}

/**
 * 渲染相关民族
 */
function renderRelatedNations() {
  const container = document.getElementById('relatedNations');
  if (!container) return;

  // 获取当前民族ID
  const urlParams = new URLSearchParams(window.location.search);
  const currentId = urlParams.get('id') || 'han';

  // 获取其他民族（排除当前民族）
  const relatedNations = Object.values(nationsDetailData)
    .filter(nation => nation.id !== currentId)
    .slice(0, 5);

  container.innerHTML = relatedNations.map(nation => `
    <div class="related-nation-item" onclick="goToNation('${nation.id}')">
      <div class="related-nation-avatar">${nation.name.charAt(0)}</div>
      <div>
        <div style="font-weight: 600;">${nation.name}</div>
        <div style="font-size: 0.85rem; color: var(--text-secondary);">${nation.pinyin}</div>
      </div>
    </div>
  `).join('');
}

/**
 * 跳转到其他民族详情页
 */
function goToNation(nationId) {
  window.location.href = `nation-detail.html?id=${nationId}`;
}

/**
 * 显示错误信息
 */
function showError(message) {
  const container = document.querySelector('.main-content');
  if (container) {
    container.innerHTML = `
      <div class="content-section" style="text-align: center; padding: var(--spacing-xxl);">
        <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: var(--color-zhu-red); margin-bottom: var(--spacing-md);"></i>
        <p>${message}</p>
        <a href="nations.html" class="btn btn-primary" style="margin-top: var(--spacing-lg);">
          返回民族名录
        </a>
      </div>
    `;
  }
}
