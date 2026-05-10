<script setup lang="ts">
interface TimelineEvent {
  title: string
  desc: string
}

interface TimelinePeriod {
  period: string
  year: string
  description: string
  events: TimelineEvent[]
}

const timelinePeriods: TimelinePeriod[] = [
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
]
</script>

<template>
  <div class="timeline-view">
    <!-- Header -->
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">民族历史时间轴</h1>
        <p class="page-description">
          追溯中国各民族的发展脉络，见证中华民族多元一体的历史进程
        </p>
      </div>
    </div>

    <!-- Timeline -->
    <div class="timeline-section">
      <div class="container">
        <div class="timeline">
          <div
            v-for="(period, index) in timelinePeriods"
            :key="period.period"
            class="timeline-item"
            :class="{ 'item-left': index % 2 === 0, 'item-right': index % 2 === 1 }"
          >
            <div class="timeline-content">
              <div class="period-header">
                <span class="period-badge">{{ period.period }}</span>
                <span class="period-year">{{ period.year }}</span>
              </div>
              <p class="period-description">{{ period.description }}</p>
              <div class="events-list">
                <div
                  v-for="event in period.events"
                  :key="event.title"
                  class="event-item"
                >
                  <h4 class="event-title">{{ event.title }}</h4>
                  <p class="event-desc">{{ event.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Summary -->
    <div class="summary-section">
      <div class="container">
        <div class="summary-card">
          <h2 class="summary-title">历史启示</h2>
          <div class="summary-content">
            <div class="summary-item">
              <span class="item-icon">🤝</span>
              <div class="item-text">
                <h4>民族团结</h4>
                <p>各民族在长期历史发展中形成了你中有我、我中有你的命运共同体</p>
              </div>
            </div>
            <div class="summary-item">
              <span class="item-icon">🌏</span>
              <div class="item-text">
                <h4>文化交融</h4>
                <p>各民族文化交流互鉴，共同创造了灿烂的中华文明</p>
              </div>
            </div>
            <div class="summary-item">
              <span class="item-icon">🚀</span>
              <div class="item-text">
                <h4>共同发展</h4>
                <p>新时代各民族共同团结奋斗、共同繁荣发展</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline-view {
  padding-top: 64px;
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, #5E35B1 0%, #3949AB 100%);
  color: white;
  padding: var(--spacing-xxl) 0;
  text-align: center;

  .page-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    font-family: var(--font-family-title);
  }

  .page-description {
    font-size: 1.125rem;
    opacity: 0.9;
    max-width: 700px;
    margin: 0 auto;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
}

.timeline-section {
  padding: var(--spacing-xxl) 0;
  background: var(--background-color);
}

.timeline {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, var(--primary-color), #9C27B0);
    border-radius: 2px;

    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-xl);
  padding-left: 60px;

  @media (min-width: 768px) {
    padding-left: 0;
    width: 50%;

    &.item-left {
      padding-right: 40px;
      text-align: right;

      .timeline-content {
        &::before {
          right: -48px;
          left: auto;
        }
      }
    }

    &.item-right {
      margin-left: 50%;
      padding-left: 40px;

      .timeline-content {
        &::before {
          left: -48px;
        }
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 8px;
    width: 20px;
    height: 20px;
    background: white;
    border: 4px solid var(--primary-color);
    border-radius: 50%;
    z-index: 1;

    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.timeline-content {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);

  @media (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: 12px;
      width: 16px;
      height: 16px;
      background: white;
      transform: rotate(45deg);
      box-shadow: -2px -2px 4px rgba(0,0,0,0.05);
    }
  }

  .period-header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-sm);

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      gap: var(--spacing-md);
    }

    .period-badge {
      display: inline-block;
      padding: 4px 16px;
      background: var(--primary-color);
      color: white;
      border-radius: var(--radius-full);
      font-weight: 600;
      font-size: 0.9rem;
    }

    .period-year {
      font-size: 0.85rem;
      color: var(--text-secondary);
    }
  }

  .period-description {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
    font-size: 0.95rem;
  }

  .events-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);

    .event-item {
      padding: var(--spacing-md);
      background: var(--background-color);
      border-radius: var(--radius-md);
      border-left: 3px solid var(--primary-color);

      .event-title {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: var(--spacing-xs);
        color: var(--text-primary);
      }

      .event-desc {
        font-size: 0.875rem;
        color: var(--text-secondary);
        line-height: 1.5;
      }
    }
  }
}

.summary-section {
  padding: var(--spacing-xxl) 0;
}

.summary-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xxl);
  color: white;

  .summary-title {
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: var(--spacing-xl);
  }

  .summary-content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--spacing-lg);

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .summary-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);

    .item-icon {
      font-size: 2.5rem;
      flex-shrink: 0;
    }

    .item-text {
      h4 {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: var(--spacing-xs);
      }

      p {
        font-size: 0.9rem;
        opacity: 0.9;
        line-height: 1.6;
      }
    }
  }
}
</style>
