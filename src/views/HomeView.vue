<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowRight, Search, Compass, Clock, Game } from '@element-plus/icons-vue'
import { nations } from '@/data/nations'

const router = useRouter()
const featuredNations = nations.slice(0, 8)

const cultureCategories = [
  { id: 'art', name: '民族艺术', icon: '🎭', description: '音乐、舞蹈、绘画等艺术形式', color: '#E91E63' },
  { id: 'heritage', name: '非遗项目', icon: '🏺', description: '世界级和国家级非物质文化遗产', color: '#9C27B0' },
  { id: 'food', name: '民族美食', icon: '🍜', description: '各民族独特的饮食文化', color: '#FF9800' },
  { id: 'costume', name: '民族服饰', icon: '👘', description: '精美绝伦的传统服饰', color: '#2196F3' },
  { id: 'architecture', name: '民族建筑', icon: '🏛️', description: '独具特色的民居建筑', color: '#4CAF50' }
]

const interactiveFeatures = [
  { id: 'quiz', name: '答题闯关', icon: '❓', description: '测试你的民族文化知识' },
  { id: 'costume', name: '服饰试穿', icon: '👗', description: '虚拟体验民族服饰' },
  { id: 'instrument', name: '乐器试听', icon: '🎵', description: '聆听民族乐器之美' },
  { id: 'stories', name: '故事分享', icon: '📖', description: '分享你的民族文化故事' }
]

const timelinePeriods = [
  { period: '先秦', year: '远古-前221', events: ['华夏族形成', '炎黄联盟'] },
  { period: '秦汉', year: '前221-220', events: ['统一多民族国家', '张骞通西域'] },
  { period: '隋唐', year: '581-907', events: ['文成公主入藏', '民族大融合'] },
  { period: '宋元', year: '907-1368', events: ['澶渊之盟', '元朝统一'] },
  { period: '明清', year: '1368-1912', events: ['改土归流', '土尔扈特东归'] },
  { period: '当代', year: '1949至今', events: ['民族区域自治', '脱贫攻坚'] }
]

const goToNation = (id: string) => {
  router.push(`/nations/${id}`)
}

const goToCulture = (id: string) => {
  router.push(`/culture/${id}`)
}

const goToInteractive = (id: string) => {
  router.push(`/interactive/${id}`)
}

onMounted(() => {
  // 添加滚动动画
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-pattern"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-main">中华民族一家亲</span>
          <span class="title-sub">同心共筑中国梦</span>
        </h1>
        <p class="hero-description">
          探索中国56个民族的文化瑰宝，感受多元一体的中华文明
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">56</span>
            <span class="stat-label">个民族</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5000+</span>
            <span class="stat-label">年文明</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">1000+</span>
            <span class="stat-label">项非遗</span>
          </div>
        </div>
        <div class="hero-actions">
          <el-button type="primary" size="large" @click="$router.push('/nations')">
            开始探索
            <el-icon class="el-icon--right"><ArrowRight /></el-icon>
          </el-button>
          <el-button size="large" @click="$router.push('/culture')">
            文化专题
          </el-button>
        </div>
      </div>
    </section>

    <!-- Nations Section -->
    <section class="section nations-section animate-on-scroll">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="title-icon">🏛️</span>
            民族名录库
          </h2>
          <p class="section-subtitle">了解中国56个民族的独特文化</p>
        </div>

        <div class="nations-grid">
          <div
            v-for="nation in featuredNations"
            :key="nation.id"
            class="nation-card"
            :style="{ '--nation-color': nation.color.primary }"
            @click="goToNation(nation.id)"
          >
            <div class="card-image">
              <div class="image-placeholder" :style="{ background: nation.color.primary }">
                <span class="nation-initial">{{ nation.name[0] }}</span>
              </div>
            </div>
            <div class="card-content">
              <h3 class="nation-name">{{ nation.name }}</h3>
              <p class="nation-pinyin">{{ nation.pinyin }}</p>
              <div class="nation-tags">
                <span v-for="tag in nation.tags.slice(0, 2)" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="section-action">
          <el-button type="primary" @click="$router.push('/nations')">
            查看全部民族
            <el-icon class="el-icon--right"><ArrowRight /></el-icon>
          </el-button>
        </div>
      </div>
    </section>

    <!-- Culture Section -->
    <section class="section culture-section animate-on-scroll">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="title-icon">🎨</span>
            文化专题馆
          </h2>
          <p class="section-subtitle">深入探索各民族的艺术瑰宝</p>
        </div>

        <div class="culture-grid">
          <div
            v-for="category in cultureCategories"
            :key="category.id"
            class="culture-card"
            :style="{ '--category-color': category.color }"
            @click="goToCulture(category.id)"
          >
            <div class="card-icon">{{ category.icon }}</div>
            <h3 class="card-title">{{ category.name }}</h3>
            <p class="card-description">{{ category.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="section timeline-section animate-on-scroll">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="title-icon">📜</span>
            民族历史时间轴
          </h2>
          <p class="section-subtitle">追溯各民族的发展脉络与融合历程</p>
        </div>

        <div class="timeline">
          <div
            v-for="(period, index) in timelinePeriods"
            :key="period.period"
            class="timeline-item"
            :class="{ 'item-left': index % 2 === 0, 'item-right': index % 2 === 1 }"
          >
            <div class="timeline-content">
              <span class="period-badge">{{ period.period }}</span>
              <span class="period-year">{{ period.year }}</span>
              <ul class="event-list">
                <li v-for="event in period.events" :key="event">{{ event }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="section-action">
          <el-button @click="$router.push('/timeline')">
            查看完整时间轴
            <el-icon class="el-icon--right"><Clock /></el-icon>
          </el-button>
        </div>
      </div>
    </section>

    <!-- Interactive Section -->
    <section class="section interactive-section animate-on-scroll">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="title-icon">🎮</span>
            互动体验区
          </h2>
          <p class="section-subtitle">沉浸式体验民族文化魅力</p>
        </div>

        <div class="interactive-grid">
          <div
            v-for="feature in interactiveFeatures"
            :key="feature.id"
            class="interactive-card"
            @click="goToInteractive(feature.id)"
          >
            <div class="card-icon">{{ feature.icon }}</div>
            <h3 class="card-title">{{ feature.name }}</h3>
            <p class="card-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">开启民族文化探索之旅</h2>
          <p class="cta-description">
            加入我们，一起传承和弘扬中华民族优秀传统文化
          </p>
          <div class="cta-actions">
            <el-button type="primary" size="large" @click="$router.push('/nations')">
              <el-icon><Compass /></el-icon>
              探索民族
            </el-button>
            <el-button size="large" @click="$router.push('/interactive/quiz')">
              <el-icon><Game /></el-icon>
              答题闯关
            </el-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.home-view {
  padding-top: 64px;
}

// Hero Section
.hero-section {
  position: relative;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  opacity: 0.1;

  .hero-pattern {
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: var(--spacing-xl);
  max-width: 800px;
}

.hero-title {
  margin-bottom: var(--spacing-lg);

  .title-main {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: var(--spacing-sm);
    font-family: var(--font-family-title);

    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }

  .title-sub {
    display: block;
    font-size: 1.5rem;
    color: var(--accent-color);
    font-weight: 500;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
}

.hero-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--spacing-xl);
  line-height: 1.8;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);

  .stat-item {
    text-align: center;

    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: var(--accent-color);

      @media (min-width: 768px) {
        font-size: 2.5rem;
      }
    }

    .stat-label {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

// Section Styles
.section {
  padding: var(--spacing-xxl) 0;

  &:nth-child(even) {
    background: var(--background-color);
  }
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);

  .section-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);

    .title-icon {
      font-size: 1.5rem;
    }
  }

  .section-subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
  }
}

.section-action {
  text-align: center;
  margin-top: var(--spacing-xl);
}

// Nations Section
.nations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-lg);
  }
}

.nation-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .card-image {
    aspect-ratio: 4/3;

    .image-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .nation-initial {
        font-size: 3rem;
        color: white;
        font-weight: 700;
        font-family: var(--font-family-title);
      }
    }
  }

  .card-content {
    padding: var(--spacing-md);

    .nation-name {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: var(--spacing-xs);
    }

    .nation-pinyin {
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin-bottom: var(--spacing-sm);
    }

    .nation-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-xs);

      .tag {
        font-size: 0.75rem;
        padding: 2px 8px;
        background: var(--background-color);
        border-radius: var(--radius-full);
        color: var(--text-secondary);
      }
    }
  }
}

// Culture Section
.culture-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
}

.culture-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  border-top: 4px solid var(--category-color);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .card-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
  }

  .card-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
  }

  .card-description {
    font-size: 0.875rem;
    color: var(--text-secondary);
  }
}

// Timeline Section
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--border-color);

    @media (max-width: 767px) {
      left: 20px;
    }
  }
}

.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-xl);
  width: 50%;

  @media (max-width: 767px) {
    width: 100%;
    padding-left: 50px;
  }

  &.item-left {
    padding-right: var(--spacing-xl);
    text-align: right;

    @media (max-width: 767px) {
      padding-right: 0;
      text-align: left;
    }
  }

  &.item-right {
    margin-left: 50%;
    padding-left: var(--spacing-xl);

    @media (max-width: 767px) {
      margin-left: 0;
      padding-left: 50px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: var(--primary-color);
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: var(--shadow-sm);
    top: 4px;

    @media (min-width: 768px) {
      .item-left & {
        right: -8px;
      }

      .item-right & {
        left: -8px;
      }
    }

    @media (max-width: 767px) {
      left: 12px;
    }
  }
}

.timeline-content {
  background: white;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);

  .period-badge {
    display: inline-block;
    padding: 4px 12px;
    background: var(--primary-color);
    color: white;
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
  }

  .period-year {
    display: block;
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-sm);
  }

  .event-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 0.9rem;
      color: var(--text-primary);
      margin-bottom: 4px;

      &::before {
        content: '•';
        color: var(--primary-color);
        margin-right: var(--spacing-xs);
      }
    }
  }
}

// Interactive Section
.interactive-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.interactive-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: white;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: var(--shadow-lg);
  }

  .card-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
  }

  .card-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
  }

  .card-description {
    font-size: 0.875rem;
    opacity: 0.9;
  }
}

// CTA Section
.cta-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, #b71c1c 100%);
  padding: var(--spacing-xxl) 0;
}

.cta-content {
  text-align: center;
  color: white;

  .cta-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .cta-description {
    font-size: 1.125rem;
    opacity: 0.9;
    margin-bottom: var(--spacing-xl);
  }

  .cta-actions {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    flex-wrap: wrap;

    :deep(.el-button) {
      background: white;
      color: var(--primary-color);
      border: none;

      &:hover {
        background: rgba(255, 255, 255, 0.9);
      }

      &.el-button--primary {
        background: var(--accent-color);
        color: var(--text-primary);

        &:hover {
          background: #ffca28;
        }
      }
    }
  }
}

// Animation
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;

  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
