<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const interactiveFeatures = [
  {
    id: 'quiz',
    name: '答题闯关',
    icon: '❓',
    description: '挑战民族文化知识，测试你的了解程度',
    color: '#FF6B6B',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #EE5A6F 100%)'
  },
  {
    id: 'costume',
    name: '服饰试穿',
    icon: '👗',
    description: '虚拟体验各民族传统服饰',
    color: '#4ECDC4',
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)'
  },
  {
    id: 'instrument',
    name: '乐器试听',
    icon: '🎵',
    description: '聆听各民族特色乐器的美妙音色',
    color: '#A8E6CF',
    gradient: 'linear-gradient(135deg, #A8E6CF 0%, #88D8A3 100%)'
  },
  {
    id: 'stories',
    name: '故事分享',
    icon: '📖',
    description: '分享你的民族文化体验和故事',
    color: '#FFD93D',
    gradient: 'linear-gradient(135deg, #FFD93D 0%, #F6AD55 100%)'
  }
]

const goToFeature = (id: string) => {
  router.push(`/interactive/${id}`)
}
</script>

<template>
  <div class="interactive-view">
    <!-- Header -->
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">互动体验区</h1>
        <p class="page-description">
          沉浸式体验民族文化魅力，在互动中学习和传承
        </p>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="features-section">
      <div class="container">
        <div class="features-grid">
          <div
            v-for="feature in interactiveFeatures"
            :key="feature.id"
            class="feature-card"
            :style="{ background: feature.gradient }"
            @click="goToFeature(feature.id)"
          >
            <div class="card-icon">{{ feature.icon }}</div>
            <h3 class="card-title">{{ feature.name }}</h3>
            <p class="card-description">{{ feature.description }}</p>
            <div class="card-action">
              <span>立即体验</span>
              <el-icon><ArrowRight /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Coming Soon -->
    <div class="coming-soon-section">
      <div class="container">
        <div class="coming-soon-card">
          <span class="coming-icon">🚀</span>
          <h3>更多精彩功能</h3>
          <p>民族文化数字展厅、线上文化讲座等功能正在开发中，敬请期待！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.interactive-view {
  padding-top: 64px;
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
    max-width: 600px;
    margin: 0 auto;
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

.features-section {
  padding: var(--spacing-xxl) 0;
  background: var(--background-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--spacing-lg);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-card {
  border-radius: var(--radius-xl);
  padding: var(--spacing-xxl);
  color: white;
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: var(--shadow-xl);

    .card-action {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  .card-icon {
    font-size: 4rem;
    margin-bottom: var(--spacing-lg);
  }

  .card-title {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
  }

  .card-description {
    font-size: 1rem;
    opacity: 0.95;
    margin-bottom: var(--spacing-xl);
    line-height: 1.6;
    max-width: 300px;
  }

  .card-action {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-lg);
    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-full);
    font-weight: 500;
    transition: background var(--transition-fast);
  }
}

.coming-soon-section {
  padding: var(--spacing-xxl) 0;

  .coming-soon-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: var(--spacing-xxl);
    text-align: center;
    box-shadow: var(--shadow-sm);

    .coming-icon {
      font-size: 3rem;
      margin-bottom: var(--spacing-md);
      display: block;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: var(--spacing-sm);
    }

    p {
      color: var(--text-secondary);
      max-width: 500px;
      margin: 0 auto;
    }
  }
}
</style>
