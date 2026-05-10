/**
 * 互动体验页面JavaScript文件
 */

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  initCostumeSelector();
  initInstrumentPlayer();
  initFoodCards();
  initEmbroideryViewer();
});

/**
 * 初始化虚拟试装
 */
function initCostumeSelector() {
  const costumeDisplay = document.getElementById('costumeDisplay');
  const costumeBtns = document.querySelectorAll('.costume-btn');

  if (!costumeDisplay || costumeBtns.length === 0) return;

  // 汉服图片数组
  const hanfuImages = [
    '../images/汉服 (1).jpg',
    '../images/汉服 (2).jpg',
    '../images/汉服 (3).jpg',
    '../images/汉服 (4).jpg',
    '../images/汉服 (5).jpg',
    '../images/汉服 (6).jpg',
    '../images/汉服 (7).jpg',
    '../images/汉服 (8).jpg',
    '../images/汉服 (9).jpg',
    '../images/汉服 (10).jpg',
    '../images/汉服 (11).jpg',
    '../images/汉服 (12).jpg',
    '../images/汉服 (13).jpg',
    '../images/汉服 (14).jpg',
    '../images/汉服 (15).jpg',
    '../images/汉服 (16).jpg',
    '../images/汉服 (17).jpg',
    '../images/汉服 (18).jpg',
    '../images/汉服 (19).jpg',
    '../images/汉服 (20).jpg'
  ];

  // 其他民族服饰图片数组
  const ethnicImages = [
    '../images/民族服饰 (1).jpg',
    '../images/民族服饰 (2).jpg',
    '../images/民族服饰 (3).jpg',
    '../images/民族服饰 (4).jpg',
    '../images/民族服饰 (5).jpg',
    '../images/民族服饰 (6).jpg',
    '../images/民族服饰 (7）.jpg',
    '../images/民族服饰 (8).jpg',
    '../images/民族服饰 (9).jpg',
    '../images/民族服饰 (10).jpg',
    '../images/民族服饰 (11).jpg',
    '../images/民族服饰 (12).jpg',
    '../images/民族服饰 (13).jpg',
    '../images/民族服饰 (14).jpg',
    '../images/民族服饰 (15).jpg'
  ];

  // 当前图片索引
  let currentHanfuIndex = 0;
  let currentEthnicIndex = 0;

  // 初始显示第一张汉服图片
  if (costumeDisplay) {
    costumeDisplay.innerHTML = `<img src="${hanfuImages[currentHanfuIndex]}" alt="汉服" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">`;
    currentHanfuIndex = (currentHanfuIndex + 1) % hanfuImages.length;
  }

  costumeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // 更新按钮状态
      costumeBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // 获取服饰类型
      const costume = this.dataset.costume;

      // 添加动画效果
      costumeDisplay.style.transform = 'scale(0.8)';
      setTimeout(() => {
        costumeDisplay.style.transform = 'scale(1)';
      }, 150);

      // 如果是汉服，循环显示图片
      if (costume === 'hanfu') {
        // 创建图片元素，使用object-fit: contain显示完整图片
        costumeDisplay.innerHTML = `<img src="${hanfuImages[currentHanfuIndex]}" alt="汉服" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">`;
        // 更新索引，循环显示
        currentHanfuIndex = (currentHanfuIndex + 1) % hanfuImages.length;
      } else if (costume === 'other') {
        // 其他民族服饰循环显示图片
        costumeDisplay.innerHTML = `<img src="${ethnicImages[currentEthnicIndex]}" alt="其他民族服饰" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">`;
        // 更新索引，循环显示
        currentEthnicIndex = (currentEthnicIndex + 1) % ethnicImages.length;
      } else {
        // 其他情况显示emoji
        const icon = this.dataset.icon;
        costumeDisplay.textContent = icon;
      }
    });
  });
}

/**
 * 初始化乐器识别
 */
function initInstrumentPlayer() {
  const instrumentBtns = document.querySelectorAll('.instrument-btn');
  const instrumentDisplay = document.getElementById('instrumentDisplay');

  // 初始显示第一张乐器图片
  if (instrumentDisplay) {
    const firstInstrument = '1';
    const imagePath = `../images/乐器 (${firstInstrument}).jpg`;
    instrumentDisplay.innerHTML = `<img src="${imagePath}" alt="乐器（1）" style="max-width: 100%; max-height: 100%; object-fit: contain;">`;
  }

  instrumentBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const instrumentNumber = this.dataset.instrument;
      const instrumentName = `乐器（${instrumentNumber}）`;
      
      // 移除其他按钮的选中状态
      instrumentBtns.forEach(b => b.classList.remove('active'));
      
      // 添加选中状态
      this.classList.add('active');

      // 显示对应编号的乐器图片
      if (instrumentDisplay) {
        const imagePath = `../images/乐器 (${instrumentNumber}).jpg`;
        instrumentDisplay.innerHTML = `<img src="${imagePath}" alt="${instrumentName}" style="max-width: 100%; max-height: 100%; object-fit: contain;">`;
      }

      // 显示提示
      showToast(`正在播放: ${instrumentName}`);

      // 模拟播放，2秒后停止
      setTimeout(() => {
        // 保持选中状态，不移除
      }, 2000);
    });
  });
}

/**
 * 初始化语言学习
 */
function initLanguageCards() {
  const languageCards = document.querySelectorAll('.language-card');

  languageCards.forEach(card => {
    card.addEventListener('click', function() {
      const lang = this.dataset.lang;
      const hello = this.querySelector('.language-hello').textContent;
      const nation = this.querySelector('.language-nation').textContent;

      // 朗读问候语（使用Web Speech API）
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(hello);
        utterance.lang = getLanguageCode(lang);
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
      }

      // 显示提示
      showToast(`${nation}: ${hello}`);
    });
  });
}

/**
 * 获取语言代码
 */
function getLanguageCode(lang) {
  const langCodes = {
    'chinese': 'zh-CN',
    'mongolian': 'mn',
    'tibetan': 'bo',
    'uyghur': 'ug',
    'zhuang': 'za',
    'miao': 'hmn'
  };
  return langCodes[lang] || 'zh-CN';
}

/**
 * 初始化民族美食卡片
 */
function initFoodCards() {
  const foodCards = document.querySelectorAll('.food-card');
  const foodModal = document.getElementById('foodModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');

  // 美食详细数据
  const foodData = {
    dumpling: {
      title: '汉族・饺子',
      image: '../images/2.饺子.jpg',
      region: '全国广泛流行，北方地区尤为盛行，是春节标志性美食',
      culture: '象征"更岁交子"，寓意团圆吉祥、招财进宝，除夕夜必吃',
      methods: [
        '面粉加水揉成面团，醒发后擀成薄圆皮',
        '馅料以猪肉/羊肉/蔬菜为主，搭配葱姜、酱油等调味',
        '取面皮包入馅料，捏成月牙形或元宝形',
        '沸水煮熟，可蘸醋、蒜泥、辣椒油食用'
      ]
    },
    handmeat: {
      title: '蒙古族・手把肉',
      image: '../images/2.手把肉.jpg',
      region: '内蒙古、新疆、青海等蒙古族聚居区',
      culture: '体现游牧民族豪迈热情，是待客、节庆、祭祀的核心肉食，象征草原生活的质朴与生命力',
      methods: [
        '选用带骨羊肉（如羊排、羊腿），清水下锅，不加过多调料',
        '大火煮沸后转小火慢炖，至肉质软烂（约1-2小时）',
        '捞出后直接用手抓着吃，可蘸盐、韭菜花或蒜蓉酱'
      ]
    },
    tsampa: {
      title: '藏族・糌粑',
      image: '../images/2.糌粑.jpg',
      region: '西藏、青海、四川甘孜、云南迪庆等藏族聚居区',
      culture: '藏族牧民的日常主食，便携耐饿，象征高原生活的坚韧与自给自足，也是宗教祭祀的供品',
      methods: [
        '青稞炒熟后磨成细粉（即糌粑面）',
        '碗中放入酥油、茶叶水、盐，冲入热水搅匀',
        '加入糌粑面，用手不断揉搓成团，直接捏食'
      ]
    },
    pilaf: {
      title: '维吾尔族・手抓饭',
      image: '../images/2.手抓饭.jpg',
      region: '新疆维吾尔自治区，是维吾尔族、哈萨克族等民族的经典美食',
      culture: '节庆、婚礼、待客的必备主食，象征热情好客与生活富足，"抓饭"之名源于传统手抓食用的方式',
      methods: [
        '羊肉切块，胡萝卜、洋葱切丝，葡萄干洗净备用',
        '热油炒香羊肉、洋葱，加入胡萝卜翻炒，加清水煮沸',
        '放入淘洗干净的大米，铺在表面，小火焖煮至米饭熟透',
        '出锅前撒上葡萄干，拌匀后食用'
      ]
    },
    coloredrice: {
      title: '壮族・五色糯米饭',
      image: '../images/2.五色糯米饭.jpg',
      region: '广西、云南、贵州等壮族聚居区，是壮族三月三歌圩节的核心美食',
      culture: '用天然植物染成黑、红、黄、紫、白五色，象征五谷丰登、吉祥如意，也代表对祖先的缅怀',
      methods: [
        '糯米浸泡一夜，分别用枫叶（染黑）、红蓝草（染红）、黄姜（染黄）等天然植物汁液染色',
        '染色后的糯米分层铺入蒸笼，大火蒸熟',
        '出锅后可直接食用，或搭配腊肉、酸菜等配菜'
      ]
    },
    sourfish: {
      title: '苗族・酸汤鱼',
      image: '../images/2.酸汤鱼.jpg',
      region: '贵州、湖南、云南等苗族聚居区，尤以贵州黔东南最为著名',
      culture: '苗家待客的招牌菜，酸辣开胃，象征丰收与团圆，酸汤的发酵工艺代表苗族先民的生活智慧',
      methods: [
        '酸汤以番茄、辣椒、木姜子等发酵而成，是汤底核心',
        '选用鲜活鲤鱼或草鱼，处理干净后切块',
        '酸汤煮沸后放入鱼片，煮至变色即可',
        '搭配蘸水（辣椒、蒜泥、香菜等）食用，也可加入豆腐、蔬菜同煮'
      ]
    }
  };

  // 打开弹窗函数
  function openFoodModal(foodKey) {
    const data = foodData[foodKey];
    if (!data) return;

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalIllustration').innerHTML = `<img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-md);">`;
    document.getElementById('modalRegion').textContent = data.region;
    document.getElementById('modalCulture').textContent = data.culture;

    const methodsList = document.getElementById('modalMethods');
    methodsList.innerHTML = '';
    data.methods.forEach(method => {
      const li = document.createElement('li');
      li.textContent = method;
      methodsList.appendChild(li);
    });

    foodModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // 关闭弹窗函数
  function closeFoodModal() {
    foodModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // 为每个美食卡片添加点击事件
  foodCards.forEach(card => {
    card.addEventListener('click', function() {
      const foodKey = this.dataset.food;
      openFoodModal(foodKey);
    });
  });

  // 关闭按钮点击事件
  if (modalClose) {
    modalClose.addEventListener('click', closeFoodModal);
  }

  // 点击遮罩层关闭弹窗
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeFoodModal);
  }

  // ESC键关闭弹窗
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && foodModal.classList.contains('active')) {
      closeFoodModal();
    }
  });
}

/**
 * 初始化纹样识别游戏
 */
function initPatternGame() {
  const startBtn = document.getElementById('startGameBtn');
  const gameOptions = document.getElementById('gameOptions');
  const gamePattern = document.getElementById('gamePattern');
  const gameScore = document.getElementById('gameScore');

  if (!startBtn || !gameOptions || !gamePattern || !gameScore) return;

  let score = 0;
  let currentPattern = null;
  let isPlaying = false;

  // 纹样数据
  const patterns = [
    { icon: '🎨', answer: 'han', name: '汉族' },
    { icon: '🐎', answer: 'mongol', name: '蒙古族' },
    { icon: '🏔️', answer: 'tibetan', name: '藏族' },
    { icon: '🦋', answer: 'miao', name: '苗族' }
  ];

  // 开始游戏
  startBtn.addEventListener('click', function() {
    if (isPlaying) return;
    isPlaying = true;
    startBtn.textContent = '游戏中...';
    startBtn.disabled = true;

    // 随机选择一个纹样
    currentPattern = patterns[Math.floor(Math.random() * patterns.length)];
    gamePattern.textContent = currentPattern.icon;

    // 重置选项
    const options = gameOptions.querySelectorAll('.game-option');
    options.forEach(opt => {
      opt.classList.remove('correct', 'wrong');
      opt.disabled = false;
    });
  });

  // 选择答案
  const options = gameOptions.querySelectorAll('.game-option');
  options.forEach(option => {
    option.addEventListener('click', function() {
      if (!isPlaying || this.disabled) return;

      const answer = this.dataset.answer;
      
      if (answer === currentPattern.answer) {
        // 答对了
        this.classList.add('correct');
        score += 10;
        gameScore.textContent = score;
        showToast('回答正确！+10分');

        // 延迟后开始下一题
        setTimeout(() => {
          if (isPlaying) {
            startBtn.click();
          }
        }, 1000);
      } else {
        // 答错了
        this.classList.add('wrong');
        showToast(`回答错误！正确答案是${currentPattern.name}`);
        
        // 显示正确答案
        options.forEach(opt => {
          if (opt.dataset.answer === currentPattern.answer) {
            opt.classList.add('correct');
          }
        });

        // 游戏结束
        setTimeout(() => {
          endGame();
        }, 1500);
      }

      this.disabled = true;
    });
  });

  // 结束游戏
  function endGame() {
    isPlaying = false;
    startBtn.textContent = '重新开始';
    startBtn.disabled = false;
    showToast(`游戏结束！最终得分: ${score}`);
  }
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

/**
 * 初始化刺绣欣赏
 */
function initEmbroideryViewer() {
  const embroideryBtns = document.querySelectorAll('.embroidery-btn');
  const embroideryDisplay = document.getElementById('embroideryDisplay');

  // 刺绣图片数组
  const embroideryImages = [
    '../images/刺绣 (1).jpg',
    '../images/刺绣 (2).jpg',
    '../images/刺绣 (3).jpg',
    '../images/刺绣 (4).jpg',
    '../images/刺绣 (5).jpg',
    '../images/刺绣 (6).jpg',
    '../images/刺绣 (7).jpg',
    '../images/刺绣 (8).jpg',
    '../images/刺绣 (9).jpg',
    '../images/刺绣 (10).jpg'
  ];

  // 初始显示第一张刺绣图片
  if (embroideryDisplay) {
    const firstEmbroidery = '1';
    const imagePath = `../images/刺绣 (${firstEmbroidery}).jpg`;
    embroideryDisplay.innerHTML = `<img src="${imagePath}" alt="刺绣（1）" style="max-width: 100%; max-height: 100%; object-fit: contain;">`;
  }

  embroideryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const embroideryNumber = this.dataset.embroidery;
      const embroideryName = `刺绣（${embroideryNumber}）`;
      
      // 移除其他按钮的选中状态
      embroideryBtns.forEach(b => b.classList.remove('active'));
      
      // 添加选中状态
      this.classList.add('active');

      // 显示对应编号的刺绣图片
      if (embroideryDisplay) {
        const imagePath = `../images/刺绣 (${embroideryNumber}).jpg`;
        embroideryDisplay.innerHTML = `<img src="${imagePath}" alt="${embroideryName}" style="max-width: 100%; max-height: 100%; object-fit: contain;">`;
      }

      // 显示提示
      showToast(`正在查看: ${embroideryName}`);
    });
  });
}
