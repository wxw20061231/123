<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Location, User, ChatLineRound } from '@element-plus/icons-vue'
import { getNationById } from '@/data/nations'

const route = useRoute()
const router = useRouter()
const nationId = computed(() => route.params.id as string)
const nation = computed(() => getNationById(nationId.value))

const contentSections = [
  { id: 'history', title: '历史溯源', icon: '📜' },
  { id: 'distribution', title: '人口分布', icon: '🗺️' },
  { id: 'language', title: '语言文字', icon: '🗣️' },
  { id: 'festivals', title: '传统节日', icon: '🎊' },
  { id: 'costume', title: '服饰饮食', icon: '👘' },
  { id: 'architecture', title: '民居建筑', icon: '🏛️' },
  { id: 'arts', title: '民间艺术', icon: '🎨' },
  { id: 'heritage', title: '非遗项目', icon: '🏺' }
]

const goBack = () => {
  router.push('/nations')
}
</script>

<template>
  <div v-if="nation" class="nation-detail">
    <!-- Hero Section -->
    <div class="detail-hero" :style="{ background: nation.color.primary }">
      <div class="hero-overlay"></div>
      <div class="container">
        <button class="back-btn" @click="goBack">
          <el-icon><ArrowLeft /></el-icon>
          返回列表
        </button>
        <div class="hero-content">
          <div class="nation-identity">
            <div class="nation-flag">
              <span class="flag-initial">{{ nation.name[0] }}</span>
            </div>
            <div class="nation-title">
              <h1 class="nation-name">{{ nation.name }}</h1>
              <p class="nation-pinyin">{{ nation.pinyin }}</p>
              <p v-if="nation.nativeName" class="nation-native">{{ nation.nativeName }}</p>
            </div>
          </div>
          <div class="nation-tags">
            <span v-for="tag in nation.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Info -->
    <div class="quick-info">
      <div class="container">
        <div class="info-grid">
          <div class="info-item">
            <el-icon><Location /></el-icon>
            <div class="info-content">
              <span class="info-label">主要分布</span>
              <span class="info-value">{{ nation.region.join('、') }}</span>
            </div>
          </div>
          <div class="info-item">
            <el-icon><ChatLineRound /></el-icon>
            <div class="info-content">
              <span class="info-label">语言文字</span>
              <span class="info-value">{{ nation.language }}</span>
            </div>
          </div>
          <div class="info-item">
            <el-icon><User /></el-icon>
            <div class="info-content">
              <span class="info-label">人口数量</span>
              <span class="info-value">{{ nation.population }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="detail-content">
      <div class="container">
        <div class="content-layout">
          <!-- Sidebar Navigation -->
          <aside class="content-sidebar">
            <div class="sidebar-sticky">
              <h3 class="sidebar-title">目录导航</h3>
              <nav class="sidebar-nav">
                <a
                  v-for="section in contentSections"
                  :key="section.id"
                  :href="`#${section.id}`"
                  class="nav-link"
                >
                  <span class="nav-icon">{{ section.icon }}</span>
                  <span class="nav-text">{{ section.title }}</span>
                </a>
              </nav>
            </div>
          </aside>

          <!-- Main Content Area -->
          <main class="content-main">
            <!-- Introduction -->
            <section class="content-section">
              <div class="section-intro">
                <p class="intro-text">{{ nation.description }}</p>
              </div>
            </section>

            <!-- Content Sections -->
            <section
              v-for="section in contentSections"
              :key="section.id"
              :id="section.id"
              class="content-section"
            >
              <div class="section-header">
                <span class="section-icon">{{ section.icon }}</span>
                <h2 class="section-title">{{ section.title }}</h2>
              </div>
              <div class="section-body">
                <div class="placeholder-content">
                  <el-empty :description="`${section.title}内容正在完善中`">
                    <template #image>
                      <div class="placeholder-icon">{{ section.icon }}</div>
                    </template>
                  </el-empty>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  </div>

  <!-- Not Found -->
  <div v-else class="not-found">
    <div class="container">
      <el-empty description="未找到该民族信息">
        <el-button type="primary" @click="goBack">返回民族列表</el-button>
      </el-empty>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nation-detail {
  padding-top: 64px;
}

.detail-hero {
  position: relative;
  padding: var(--spacing-xxl) 0;
  color: white;
  overflow: hidden;

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%);
  }

  .container {
    position: relative;
    z-index: 1;
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

.hero-content {
  .nation-identity {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);

    .nation-flag {
      width: 100px;
      height: 100px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);

      .flag-initial {
        font-size: 3rem;
        font-weight: 700;
        font-family: var(--font-family-title);
      }
    }

    .nation-title {
      .nation-name {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: var(--spacing-xs);
        font-family: var(--font-family-title);
      }

      .nation-pinyin {
        font-size: 1.25rem;
        opacity: 0.9;
        margin-bottom: var(--spacing-xs);
      }

      .nation-native {
        font-size: 1rem;
        opacity: 0.8;
      }
    }
  }

  .nation-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);

    .tag {
      padding: var(--spacing-xs) var(--spacing-md);
      background: rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-full);
      font-size: 0.9rem;
      backdrop-filter: blur(10px);
    }
  }
}

.quick-info {
  background: white;
  border-bottom: 1px solid var(--border-color);
  padding: var(--spacing-lg) 0;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--spacing-md);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.info-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--background-color);
  border-radius: var(--radius-md);

  .el-icon {
    font-size: 1.5rem;
    color: var(--primary-color);
  }

  .info-content {
    display: flex;
    flex-direction: column;

    .info-label {
      font-size: 0.8rem;
      color: var(--text-secondary);
    }

    .info-value {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--text-primary);
    }
  }
}

.detail-content {
  padding: var(--spacing-xl) 0;
  background: var(--background-color);
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);

  @media (min-width: 1024px) {
    grid-template-columns: 240px 1fr;
  }
}

.content-sidebar {
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }

  .sidebar-sticky {
    position: sticky;
    top: 140px;
  }

  .sidebar-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-sm);
    border-bottom: 2px solid var(--primary-color);
  }

  .sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    color: var(--text-secondary);
    text-decoration: none;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);

    &:hover {
      background: white;
      color: var(--primary-color);
    }

    .nav-icon {
      font-size: 1.25rem;
    }

    .nav-text {
      font-size: 0.9rem;
    }
  }
}

.content-main {
  .content-section {
    background: white;
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-lg);
    box-shadow: var(--shadow-sm);

    .section-intro {
      .intro-text {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--text-primary);
      }
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      margin-bottom: var(--spacing-lg);
      padding-bottom: var(--spacing-md);
      border-bottom: 1px solid var(--border-color);

      .section-icon {
        font-size: 1.5rem;
      }

      .section-title {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }

    .section-body {
      .placeholder-content {
        .placeholder-icon {
          font-size: 4rem;
          margin-bottom: var(--spacing-md);
        }
      }
    }
  }
}

.not-found {
  padding-top: 140px;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
