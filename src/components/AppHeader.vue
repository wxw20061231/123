<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Menu } from '@element-plus/icons-vue'

const router = useRouter()
const searchKeyword = ref('')
const mobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '民族名录', path: '/nations' },
  { name: '文化专题', path: '/culture' },
  { name: '历史时间轴', path: '/timeline' },
  { name: '互动体验', path: '/interactive' }
]

const handleSearch = () => {
  if (searchKeyword.value.trim() !== '') {
    router.push({
      path: '/search',
      query: { q: searchKeyword.value }
    })
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <span class="logo-icon">🏛️</span>
        <span class="logo-text">民族文化</span>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ active: $route.path === item.path }"
        >
          {{ item.name }}
        </router-link>
      </nav>

      <!-- Search Box -->
      <div class="search-box">
        <el-input
          v-model="searchKeyword"
          placeholder="搜索民族、文化..."
          class="search-input"
          @keyup.enter="handleSearch"
        >
          <template #suffix>
            <el-icon class="search-icon" @click="handleSearch">
              <Search />
            </el-icon>
          </template>
        </el-input>
      </div>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <el-icon><Menu /></el-icon>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <transition name="slide-down">
      <nav v-if="mobileMenuOpen" class="mobile-nav">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="mobile-nav-link"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.header-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1.25rem;

  .logo-icon {
    font-size: 1.5rem;
  }

  .logo-text {
    font-family: var(--font-family-title);
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: var(--spacing-lg);

  @media (min-width: 768px) {
    display: flex;
  }
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  padding: var(--spacing-sm) 0;
  position: relative;
  transition: color var(--transition-fast);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width var(--transition-fast);
  }

  &:hover,
  &.active {
    color: var(--primary-color);

    &::after {
      width: 100%;
    }
  }
}

.search-box {
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
}

.search-input {
  width: 200px;

  :deep(.el-input__wrapper) {
    border-radius: var(--radius-full);
    box-shadow: 0 0 0 1px var(--border-color) inset;
  }
}

.search-icon {
  cursor: pointer;
  color: var(--text-secondary);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--primary-color);
  }
}

.mobile-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--text-primary);
  font-size: 1.25rem;

  @media (min-width: 768px) {
    display: none;
  }
}

.mobile-nav {
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid var(--border-color);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-md);
}

.mobile-nav-link {
  display: block;
  padding: var(--spacing-md);
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: background var(--transition-fast);

  &:hover {
    background: var(--background-color);
  }
}

// Transitions
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all var(--transition-normal);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
