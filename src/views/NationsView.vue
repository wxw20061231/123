<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Grid, List } from '@element-plus/icons-vue'
import { nations } from '@/data/nations'

const router = useRouter()
const searchQuery = ref('')
const viewMode = ref<'grid' | 'list'>('grid')
const selectedRegion = ref('')

const regions = ['全部', '东北', '西北', '西南', '中南', '东南']

const filteredNations = computed(() => {
  let result = nations

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(nation =>
      nation.name.includes(searchQuery.value) ||
      nation.pinyin.toLowerCase().includes(query) ||
      nation.tags.some(tag => tag.includes(searchQuery.value))
    )
  }

  if (selectedRegion.value && selectedRegion.value !== '全部') {
    // 简化的地区筛选逻辑
    const regionMap: Record<string, string[]> = {
      '东北': ['吉林', '黑龙江', '辽宁'],
      '西北': ['新疆', '甘肃', '青海', '宁夏'],
      '西南': ['西藏', '四川', '云南', '贵州'],
      '中南': ['广西', '湖南', '湖北', '河南'],
      '东南': ['广东', '福建', '浙江', '江苏']
    }
    const regionProvinces = regionMap[selectedRegion.value] || []
    result = result.filter(nation =>
      nation.region.some(r => regionProvinces.some(p => r.includes(p)))
    )
  }

  return result
})

const goToNation = (id: string) => {
  router.push(`/nations/${id}`)
}
</script>

<template>
  <div class="nations-view">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">民族名录库</h1>
        <p class="page-description">
          探索中国56个民族的独特文化，了解各民族的历史、语言、风俗和艺术
        </p>
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="filter-bar">
      <div class="container">
        <div class="filter-content">
          <!-- Search -->
          <div class="search-box">
            <el-input
              v-model="searchQuery"
              placeholder="搜索民族名称、拼音或文化标签..."
              clearable
            >
              <template #prefix>
                <el-icon><Search /></el-icon>
              </template>
            </el-input>
          </div>

          <!-- Region Filter -->
          <div class="region-filter">
            <el-radio-group v-model="selectedRegion" size="small">
              <el-radio-button
                v-for="region in regions"
                :key="region"
                :label="region"
              >
                {{ region }}
              </el-radio-button>
            </el-radio-group>
          </div>

          <!-- View Mode -->
          <div class="view-mode">
            <el-button-group>
              <el-button
                :type="viewMode === 'grid' ? 'primary' : 'default'"
                @click="viewMode = 'grid'"
              >
                <el-icon><Grid /></el-icon>
              </el-button>
              <el-button
                :type="viewMode === 'list' ? 'primary' : 'default'"
                @click="viewMode = 'list'"
              >
                <el-icon><List /></el-icon>
              </el-button>
            </el-button-group>
          </div>
        </div>
      </div>
    </div>

    <!-- Nations Grid/List -->
    <div class="nations-content">
      <div class="container">
        <div :class="['nations-container', viewMode]">
          <div
            v-for="nation in filteredNations"
            :key="nation.id"
            :class="['nation-item', viewMode]"
            :style="{ '--nation-color': nation.color.primary }"
            @click="goToNation(nation.id)"
          >
            <!-- Grid View -->
            <template v-if="viewMode === 'grid'">
              <div class="item-image">
                <div
                  class="image-placeholder"
                  :style="{ background: nation.color.primary }"
                >
                  <span class="nation-initial">{{ nation.name[0] }}</span>
                </div>
              </div>
              <div class="item-content">
                <h3 class="nation-name">{{ nation.name }}</h3>
                <p class="nation-pinyin">{{ nation.pinyin }}</p>
                <p class="nation-desc">{{ nation.description.slice(0, 50) }}...</p>
                <div class="nation-tags">
                  <span
                    v-for="tag in nation.tags.slice(0, 3)"
                    :key="tag"
                    class="tag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </template>

            <!-- List View -->
            <template v-else>
              <div
                class="list-image"
                :style="{ background: nation.color.primary }"
              >
                <span class="nation-initial">{{ nation.name[0] }}</span>
              </div>
              <div class="list-content">
                <div class="list-header">
                  <h3 class="nation-name">{{ nation.name }}</h3>
                  <span class="nation-pinyin">{{ nation.pinyin }}</span>
                </div>
                <p class="nation-desc">{{ nation.description }}</p>
                <div class="list-meta">
                  <span class="meta-item">
                    <strong>语言：</strong>{{ nation.language }}
                  </span>
                  <span class="meta-item">
                    <strong>人口：</strong>{{ nation.population }}
                  </span>
                </div>
                <div class="nation-tags">
                  <span v-for="tag in nation.tags" :key="tag" class="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredNations.length === 0" class="empty-state">
          <el-empty description="未找到相关民族" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nations-view {
  padding-top: 64px;
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, #b71c1c 100%);
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

.filter-bar {
  background: white;
  border-bottom: 1px solid var(--border-color);
  padding: var(--spacing-md) 0;
  position: sticky;
  top: 64px;
  z-index: 100;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
}

.filter-content {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  align-items: center;

  .search-box {
    flex: 1;
    min-width: 250px;
  }

  .region-filter {
    flex-shrink: 0;
  }

  .view-mode {
    margin-left: auto;
  }
}

.nations-content {
  padding: var(--spacing-xl) 0;
  background: var(--background-color);
  min-height: 500px;
}

.nations-container {
  &.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);

    @media (min-width: 640px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
      gap: var(--spacing-lg);
    }
  }

  &.list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }
}

.nation-item {
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

  &.grid {
    .item-image {
      aspect-ratio: 16/10;

      .image-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .nation-initial {
          font-size: 4rem;
          color: white;
          font-weight: 700;
          font-family: var(--font-family-title);
        }
      }
    }

    .item-content {
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

  &.list {
    display: flex;
    gap: var(--spacing-md);
    padding: var(--spacing-md);

    .list-image {
      width: 100px;
      height: 100px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      .nation-initial {
        font-size: 2.5rem;
        color: white;
        font-weight: 700;
        font-family: var(--font-family-title);
      }
    }

    .list-content {
      flex: 1;

      .list-header {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        margin-bottom: var(--spacing-sm);

        .nation-name {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .nation-pinyin {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
      }

      .nation-desc {
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin-bottom: var(--spacing-sm);
        line-height: 1.6;
      }

      .list-meta {
        display: flex;
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-sm);

        .meta-item {
          font-size: 0.875rem;
          color: var(--text-secondary);

          strong {
            color: var(--text-primary);
          }
        }
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

.empty-state {
  padding: var(--spacing-xxl) 0;
}
</style>
