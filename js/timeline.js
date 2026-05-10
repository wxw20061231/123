/**
 * 历史时间轴页面JavaScript文件
 */

// 历史时间轴数据
const timelineData = [
  {
    period: '先秦时期',
    year: '远古-公元前221年',
    description: '华夏族的形成与各民族的起源',
    events: [
      { title: '炎黄联盟', desc: '炎帝与黄帝部落联盟，形成华夏族的基础' },
      { title: '尧舜禹时代', desc: '禅让制下的部落联盟发展' },
      { title: '夏商周更替', desc: '早期国家形态下的民族融合' }
    ]
  },
  {
    period: '秦汉时期',
    year: '公元前221年-公元220年',
    description: '统一多民族国家的形成',
    events: [
      { title: '秦朝统一', desc: '秦始皇统一六国，建立统一的多民族国家' },
      { title: '张骞通西域', desc: '开辟丝绸之路，促进东西方文化交流' },
      { title: '昭君出塞', desc: '汉匈和亲，促进民族友好往来' }
    ]
  },
  {
    period: '魏晋南北朝',
    year: '公元220年-589年',
    description: '民族大融合时期',
    events: [
      { title: '五胡乱华', desc: '北方少数民族内迁，促进民族融合' },
      { title: '北魏孝文帝改革', desc: '推行汉化政策，促进鲜卑族与汉族融合' },
      { title: '南方开发', desc: '北方人口南迁，促进南方民族发展' }
    ]
  },
  {
    period: '隋唐时期',
    year: '公元581年-907年',
    description: '开明政策下的民族繁荣',
    events: [
      { title: '文成公主入藏', desc: '唐蕃和亲，促进汉藏文化交流' },
      { title: '安西都护府', desc: '设立西域都护府，加强对西域的管理' },
      { title: '回纥归附', desc: '回纥与唐朝建立友好关系' }
    ]
  },
  {
    period: '宋元时期',
    year: '公元907年-1368年',
    description: '多民族政权并立与统一',
    events: [
      { title: '澶渊之盟', desc: '宋辽和议，促进边境和平' },
      { title: '成吉思汗统一蒙古', desc: '蒙古部落统一，建立大蒙古国' },
      { title: '元朝统一', desc: '建立元朝，实现更大范围的统一' }
    ]
  },
  {
    period: '明清时期',
    year: '公元1368年-1912年',
    description: '统一多民族国家的巩固',
    events: [
      { title: '改土归流', desc: '废除土司制度，加强中央对边疆的管理' },
      { title: '土尔扈特东归', desc: '土尔扈特部万里东归，回归祖国' },
      { title: '疆域奠定', desc: '奠定现代中国疆域的基础' }
    ]
  },
  {
    period: '近现代',
    year: '1912年-1949年',
    description: '民族觉醒与抗争',
    events: [
      { title: '辛亥革命', desc: '推翻封建帝制，建立中华民国' },
      { title: '抗日战争', desc: '各民族共同抗日，展现民族团结' },
      { title: '民族区域自治', desc: '探索民族区域自治制度' }
    ]
  },
  {
    period: '当代发展',
    year: '1949年至今',
    description: '各民族共同繁荣发展',
    events: [
      { title: '新中国成立', desc: '建立民族区域自治制度' },
      { title: '西部大开发', desc: '促进西部地区经济社会发展' },
      { title: '脱贫攻坚', desc: '实现全面小康，各民族共同富裕' }
    ]
  }
];

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  renderTimeline();
  initScrollAnimation();
});

/**
 * 渲染时间轴
 */
function renderTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = timelineData.map((item, index) => `
    <div class="timeline-item" data-index="${index}">
      <div class="timeline-content">
        <span class="timeline-period">${item.period}</span>
        <div class="timeline-year">${item.year}</div>
        <p class="timeline-description">${item.description}</p>
        <div class="timeline-events">
          ${item.events.map(event => `
            <div class="timeline-event">
              <h4 class="timeline-event-title">${event.title}</h4>
              <p class="timeline-event-desc">${event.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * 初始化滚动动画
 */
function initScrollAnimation() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = index % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
  });
}
