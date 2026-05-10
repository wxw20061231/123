<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { nations, searchNations } from '@/data/nations'

const route = useRoute()
const router = useRouter()
const searchQuery = ref((route.query.q as string) || '')

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  return searchNations(searchQuery.value)
})

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.replace({ query: { q: searchQuery.value } })
  }
}

const goToNation = (id: string) => {
  router.push(`/nations/${id}`)
}

watch(() => route.query.q, (newQuery) => {
  searchQuery.value = (newQuery as string) || ''
})
</script>

<template>
  <div class="search-view">
    <div class="container">
      <!-- Search Header -->
      <div class="search-header">
        <h1 class="search-title">搜索民族文化</h1>
        <div class="search-box">
          <el-input
            v-model="searchQuery"
            placeholder="搜索民族名称、拼音或文化标签..."
            size="large"
            clearable
            @keyup.enter="handleSearch"
          >
            <template #prefix>
              <el-icon><Search /></el-icon>
            </template>
            <template #append>
              <el-button type="primary" @click="handleSearch">搜索</el-button>
            </template>
          </el-input>
        </div>
      </div>

      <!-- Search Results -->
      <div class="search-results">
        <div v-if="searchQuery && searchResults.length > 0" class="results-content">
          <p class="results-info">找到 {{ searchResults.length }} 个相关结果</p>
          <div class="results-grid">
            <div
              v-for="nation in searchResults"
              :key="nation.id"
              class="result-card"
              :style="{ '--nation-color': nation.color.primary }"
              @click="goToNation(nation.id)"
            >
              <div class="card-image" :style="{ background: nation.color.primary }">
                <span class="nation-initial">{{ nation.name[0] }}</span>
              </div>
              <div class="card-content">
                <h3 class="nation-name">{{ nation.name }}</h3>
                <p class="nation-pinyin">{{ nation.pinyin }}</p>
                <p class="nation-desc">{{ nation.description.slice(0, 60) }}...</p>
                <div class="nation-tags">
                  <span v-for="tag in nation.tags.slice(0, 3)" :key="tag" class="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="searchQuery" class="no-results">
          <el-empty description="未找到相关结果">
            <p class="no-results-tip">请尝试其他关键词，如：蒙古族、藏历新年、壮锦等</p>
          </el-empty>
        </div>

        <div v-else class="search-suggestions">
          <h3>热门搜索</h3>
          <div class="suggestion-tags">
            <span
              v-for="nation in nations.slice(0, 8)"
              :key="nation.id"
              class="suggestion-tag"
              @click="searchQuery = nation.name; handleSearch()"
            >
              {{ nation.name }}
            </span>
          </div>

          <h3>热门标签</h3>
          <div class="suggestion-tags">
            <span class="suggestion-tag" @click="searchQuery = '那达慕'; handleSearch()">那达慕</span>
            <span class="suggestion-tag" @click="searchQuery = '火把节'; handleSearch()">火把节</span>
            <span class="suggestion-tag" @click="searchQuery = '三月三'; handleSearch()">三月三</span>
            <span class="suggestion-tag" @click="searchQuery = '唐卡'; handleSearch()">唐卡</span>
            <span class="suggestion-tag" @click="searchQuery = '银饰'; handleSearch()">银饰</span>
            <span class="suggestion-tag" @click="searchQuery = '蜡染'; handleSearch()">蜡染</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-view {
  padding-top: 84px;
  min-height: 100vh;
  background: var(--background-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
}

.search-header {
  text-align: center;
  padding: var(--spacing-xl) 0;

  .search-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
  }

  .search-box {
    max-width: 600px;
    margin: 0 auto;
  }
}

.search-results {
  padding-bottom: var(--spacing-xxl);

  .results-info {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-lg);
  }

  .results-grid {
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

  .result-card {
    background: white;
    border-radius: var(--radius-lg);
    overflow: hidden;
    cursor: pointer;
    transition: all var(--transition-normal);
    box-shadow: var(--shadow-sm);

    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .card-image {
      aspect-ratio: 16/9;
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

    .card-content {
      padding: var(--spacing-md);

      .nation-name {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: var(--spacing-xs);
      }

      .nation-pinyin {
        font-size: 0.875rem;
        color: var(--text-secondary);
        margin-bottom: var(--spacing-sm);
      }

      .nation-desc {
        font-size: 0.875rem;
        color: var(--text-secondary);
        margin-bottom: var(--spacing-sm);
        line-height: 1.5;
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
}

.no-results {
  padding: var(--spacing-xxl) 0;

  .no-results-tip {
    color: var(--text-secondary);
    margin-top: var(--spacing-md);
  }
}

.search-suggestions {
  padding: var(--spacing-xl) 0;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
  }

  .suggestion-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-xl);

    .suggestion-tag {
      padding: var(--spacing-sm) var(--spacing-md);
      background: white;
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: all var(--transition-fast);
      box-shadow: var(--shadow-sm);

      &:hover {
        background: var(--primary-color);
        color: white;
      }
    }
  }
}
</style>
