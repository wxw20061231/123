<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const categoryType = computed<string>(() => route.params.type as string)

interface CategoryInfo {
  name: string
  icon: string
  description: string
  color: string
}

const categories: Record<string, CategoryInfo> = {
  art: { name: '民族艺术', icon: '🎭', description: '音乐、舞蹈、绘画等艺术形式', color: '#E91E63' },
  heritage: { name: '非遗项目', icon: '🏺', description: '世界级和国家级非物质文化遗产', color: '#9C27B0' },
  food: { name: '民族美食', icon: '🍜', description: '各民族独特的饮食文化', color: '#FF9800' },
  costume: { name: '民族服饰', icon: '👘', description: '精美绝伦的传统服饰', color: '#2196F3' },
  architecture: { name: '民族建筑', icon: '🏛️', description: '独具特色的民居建筑', color: '#4CAF50' }
}

const categoryInfo = computed<CategoryInfo>(() => {
  const type = categoryType.value
  if (type && type in categories) {
    return categories[type] as CategoryInfo
  }
  return categories.art
})

const goBack = () => {
  router.push('/culture')
}
</script>

<template>
  <div class="culture-category-view">
    <!-- Header -->
    <div class="page-header" :style="{ background: categoryInfo.color }">
      <div class="container">
        <button class="back-btn" @click="goBack">
          <el-icon><ArrowLeft /></el-icon>
          返回文化专题
        </button>
        <div class="header-content">
          <span class="category-icon">{{ categoryInfo.icon }}</span>
          <h1 class="page-title">{{ categoryInfo.name }}</h1>
          <p class="page-description">{{ categoryInfo.description }}</p>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="content-section">
      <div class="container">
        <div class="placeholder-content">
          <el-empty :description="`${categoryInfo.name}内容正在完善中`">
            <template #image>
              <div class="placeholder-icon">{{ categoryInfo.icon }}</div>
            </template>
            <el-button type="primary" @click="goBack">返回文化专题</el-button>
          </el-empty>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.culture-category-view {
  padding-top: 64px;
  min-height: 100vh;
}

.page-header {
  color: white;
  padding: var(--spacing-xxl) 0;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);

    @media (min-width: 768px) {
      padding: 0 var(--spacing-lg);
    }
  }
}

.back-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  cursor: pointer;
  margin-bottom: var(--spacing-lg);
  transition: background var(--transition-fast);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}

.header-content {
  text-align: center;

  .category-icon {
    font-size: 4rem;
    display: block;
    margin-bottom: var(--spacing-md);
  }

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

.content-section {
  padding: var(--spacing-xxl) 0;
  background: var(--background-color);
  min-height: 500px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
}

.placeholder-content {
  padding: var(--spacing-xxl) 0;

  .placeholder-icon {
    font-size: 6rem;
    margin-bottom: var(--spacing-lg);
  }
}
</style>
