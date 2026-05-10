<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const cultureCategories = [
  {
    id: 'art',
    name: '民族艺术',
    icon: '🎭',
    description: '探索各民族独特的音乐、舞蹈、绘画等艺术形式',
    color: '#E91E63',
    stats: '100+ 艺术形式'
  },
  {
    id: 'heritage',
    name: '非遗项目',
    icon: '🏺',
    description: '了解世界级和国家级非物质文化遗产',
    color: '#9C27B0',
    stats: '1000+ 非遗项目'
  },
  {
    id: 'food',
    name: '民族美食',
    icon: '🍜',
    description: '品尝各民族独特的饮食文化',
    color: '#FF9800',
    stats: '500+ 特色美食'
  },
  {
    id: 'costume',
    name: '民族服饰',
    icon: '👘',
    description: '欣赏精美绝伦的传统服饰',
    color: '#2196F3',
    stats: '56 民族服饰'
  },
  {
    id: 'architecture',
    name: '民族建筑',
    icon: '🏛️',
    description: '探索独具特色的民居建筑',
    color: '#4CAF50',
    stats: '200+ 建筑类型'
  }
]

const goToCategory = (id: string) => {
  router.push(`/culture/${id}`)
}
</script>

<template>
  <div class="culture-view">
    <!-- Header -->
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">文化专题馆</h1>
        <p class="page-description">
          深入探索中国各民族的艺术瑰宝，感受多元文化的魅力
        </p>
      </div>
    </div>

    <!-- Categories Grid -->
    <div class="categories-section">
      <div class="container">
        <div class="categories-grid">
          <div
            v-for="category in cultureCategories"
            :key="category.id"
            class="category-card"
            :style="{ '--category-color': category.color }"
            @click="goToCategory(category.id)"
          >
            <div class="card-header" :style="{ background: category.color }">
              <span class="card-icon">{{ category.icon }}</span>
              <span class="card-stats">{{ category.stats }}</span>
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ category.name }}</h3>
              <p class="card-description">{{ category.description }}</p>
              <div class="card-action">
                <span>探索更多</span>
                <el-icon><ArrowRight /></el-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Content -->
    <div class="featured-section">
      <div class="container">
        <h2 class="section-title">精选内容</h2>
        <div class="featured-grid">
          <div class="featured-card large">
            <div class="featured-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
              <span class="featured-badge">热门</span>
            </div>
            <div class="featured-content">
              <h3>蒙古族长调民歌</h3>
              <p>世界非物质文化遗产，草原上的天籁之音</p>
            </div>
          </div>
          <div class="featured-card">
            <div class="featured-image" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
              <span class="featured-badge">推荐</span>
            </div>
            <div class="featured-content">
              <h3>苗族银饰工艺</h3>
              <p>精湛的传统手工艺</p>
            </div>
          </div>
          <div class="featured-card">
            <div class="featured-image" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">
              <span class="featured-badge">新品</span>
            </div>
            <div class="featured-content">
              <h3>藏族唐卡艺术</h3>
              <p>宗教与艺术的完美结合</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.culture-view {
  padding-top: 64px;
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%);
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

.categories-section {
  padding: var(--spacing-xxl) 0;
  background: var(--background-color);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--spacing-lg);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.category-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);

    .card-action {
      color: var(--category-color);
    }
  }

  .card-header {
    padding: var(--spacing-lg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    .card-icon {
      font-size: 3rem;
    }

    .card-stats {
      font-size: 0.875rem;
      opacity: 0.9;
      background: rgba(255, 255, 255, 0.2);
      padding: 4px 12px;
      border-radius: var(--radius-full);
    }
  }

  .card-body {
    padding: var(--spacing-lg);

    .card-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: var(--spacing-sm);
    }

    .card-description {
      color: var(--text-secondary);
      margin-bottom: var(--spacing-md);
      line-height: 1.6;
    }

    .card-action {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      font-weight: 500;
      color: var(--text-secondary);
      transition: color var(--transition-fast);
    }
  }
}

.featured-section {
  padding: var(--spacing-xxl) 0;

  .section-title {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: var(--spacing-xl);
    text-align: center;
  }
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--spacing-lg);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

    .featured-card.large {
      grid-column: span 2;
    }
  }
}

.featured-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .featured-image {
    aspect-ratio: 16/9;
    position: relative;

    .featured-badge {
      position: absolute;
      top: var(--spacing-md);
      left: var(--spacing-md);
      background: white;
      padding: 4px 12px;
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-primary);
    }
  }

  .featured-content {
    padding: var(--spacing-lg);

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: var(--spacing-xs);
    }

    p {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
  }

  &.large {
    .featured-image {
      aspect-ratio: 21/9;
    }

    .featured-content {
      h3 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
}
</style>
