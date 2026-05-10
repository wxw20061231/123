<script setup lang="ts">
const footerLinks = [
  {
    title: '关于我们',
    links: [
      { name: '网站介绍', path: '/about' },
      { name: '联系我们', path: '/contact' },
      { name: '合作伙伴', path: '/partners' }
    ]
  },
  {
    title: '内容导航',
    links: [
      { name: '民族名录', path: '/nations' },
      { name: '文化专题', path: '/culture' },
      { name: '历史时间轴', path: '/timeline' }
    ]
  },
  {
    title: '互动体验',
    links: [
      { name: '答题闯关', path: '/interactive/quiz' },
      { name: '服饰试穿', path: '/interactive/costume' },
      { name: '故事分享', path: '/interactive/stories' }
    ]
  }
]

const socialLinks = [
  { name: '微信', icon: '💬' },
  { name: '微博', icon: '📱' },
  { name: '小红书', icon: '📕' }
]
</script>

<template>
  <footer class="app-footer">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <!-- Brand Section -->
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <span class="logo-icon">🏛️</span>
            <span class="logo-text">民族文化</span>
          </router-link>
          <p class="footer-description">
            致力于传承和弘扬中国各民族的优秀文化，
            促进各民族文化交流与融合，
            共建中华民族共有精神家园。
          </p>
          <div class="social-links">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              href="#"
              class="social-link"
              :title="social.name"
            >
              <span class="social-icon">{{ social.icon }}</span>
            </a>
          </div>
        </div>

        <!-- Links Sections -->
        <div class="footer-links">
          <div
            v-for="section in footerLinks"
            :key="section.title"
            class="links-section"
          >
            <h4 class="section-title">{{ section.title }}</h4>
            <ul class="section-list">
              <li v-for="link in section.links" :key="link.path">
                <router-link :to="link.path" class="footer-link">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Cultural Protection Banner -->
      <div class="protection-banner">
        <div class="banner-content">
          <span class="banner-icon">🤝</span>
          <span class="banner-text">
            铸牢中华民族共同体意识，促进各民族像石榴籽一样紧紧抱在一起
          </span>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; 2024 中国各民族文化历史网站 版权所有</p>
          <p class="icp">京ICP备XXXXXXXX号</p>
        </div>
        <div class="bottom-links">
          <router-link to="/privacy">隐私政策</router-link>
          <router-link to="/terms">使用条款</router-link>
          <router-link to="/feedback">留言反馈</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding-top: var(--spacing-xxl);
}

.footer-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
}

.footer-brand {
  .footer-logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);

    .logo-icon {
      font-size: 2rem;
    }

    .logo-text {
      font-family: var(--font-family-title);
    }
  }

  .footer-description {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    margin-bottom: var(--spacing-lg);
    font-size: 0.9rem;
  }
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);

  &:hover {
    background: var(--primary-color);
    transform: translateY(-2px);
  }

  .social-icon {
    font-size: 1.25rem;
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.links-section {
  .section-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    color: white;
  }

  .section-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: var(--spacing-sm);
    }
  }
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color var(--transition-fast);

  &:hover {
    color: white;
  }
}

.protection-banner {
  padding: var(--spacing-lg) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .banner-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);
    flex-wrap: wrap;
    text-align: center;
  }

  .banner-icon {
    font-size: 1.5rem;
  }

  .banner-text {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
    font-weight: 500;
  }
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg) 0;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  .copyright {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;

    p {
      margin: 0;
    }

    .icp {
      margin-top: var(--spacing-xs);
    }
  }

  .bottom-links {
    display: flex;
    gap: var(--spacing-lg);

    a {
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      font-size: 0.85rem;
      transition: color var(--transition-fast);

      &:hover {
        color: white;
      }
    }
  }
}
</style>
