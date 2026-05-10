<script setup lang="ts">
const features = [
  {
    icon: '📚',
    title: '权威内容',
    description: '所有内容均经过专业审核，确保文化准确性和权威性'
  },
  {
    icon: '🎨',
    title: '丰富展示',
    description: '图文并茂，配合音视频多媒体，生动展现民族文化'
  },
  {
    icon: '🤝',
    title: '文化传承',
    description: '致力于传承和弘扬中华民族优秀传统文化'
  },
  {
    icon: '🌐',
    title: '开放共享',
    description: '免费开放，让更多人了解和学习民族文化'
  }
]

const stats = [
  { number: '56', label: '个民族' },
  { number: '1000+', label: '文化条目' },
  { number: '100+', label: '非遗项目' },
  { number: '∞', label: '文化价值' }
]
</script>

<template>
  <div class="about-view">
    <!-- Hero Section -->
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">关于我们</h1>
        <p class="page-description">
          致力于建设最全面、最权威的中华民族文化数字平台
        </p>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="mission-section">
      <div class="container">
        <div class="mission-content">
          <h2 class="section-title">我们的使命</h2>
          <p class="mission-text">
            中国各民族文化历史网站是一个致力于传承和弘扬中华民族优秀传统文化的综合性数字平台。
            我们系统、权威、生动地展示中国56个民族的文化、历史、习俗、艺术、非遗、语言、服饰、饮食等内容，
            推动民族文化传播与传承，促进各民族文化交流与融合。
          </p>
          <p class="mission-text">
            我们坚持"中华民族一家亲，同心共筑中国梦"的理念，
            客观展示各民族的特色与共性，突出"各民族共同团结奋斗、共同繁荣发展"的核心思想。
          </p>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features-section">
      <div class="container">
        <h2 class="section-title">平台特色</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <span class="feature-icon">{{ feature.icon }}</span>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="contact-section">
      <div class="container">
        <h2 class="section-title">联系我们</h2>
        <div class="contact-content">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <div class="contact-info">
              <h4>电子邮箱</h4>
              <p>contact@ethnic-culture.cn</p>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📱</span>
            <div class="contact-info">
              <h4>微信公众号</h4>
              <p>中华民族文化</p>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <div class="contact-info">
              <h4>联系地址</h4>
              <p>北京市XX区XX路XX号</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-view {
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
}

.mission-section {
  padding: var(--spacing-xxl) 0;
  background: var(--background-color);

  .mission-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    .section-title {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: var(--spacing-xl);
    }

    .mission-text {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text-secondary);
      margin-bottom: var(--spacing-md);
    }
  }
}

.features-section {
  padding: var(--spacing-xxl) 0;

  .section-title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: var(--spacing-xl);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--spacing-lg);

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .feature-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    text-align: center;
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-normal);

    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: var(--spacing-md);
      display: block;
    }

    .feature-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: var(--spacing-sm);
    }

    .feature-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }
  }
}

.stats-section {
  padding: var(--spacing-xxl) 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);

    @media (min-width: 640px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .stat-item {
    text-align: center;
    color: white;

    .stat-number {
      display: block;
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: var(--spacing-xs);
    }

    .stat-label {
      font-size: 1rem;
      opacity: 0.9;
    }
  }
}

.contact-section {
  padding: var(--spacing-xxl) 0;
  background: var(--background-color);

  .section-title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: var(--spacing-xl);
  }

  .contact-content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--spacing-lg);
    max-width: 800px;
    margin: 0 auto;

    @media (min-width: 640px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    background: white;
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);

    .contact-icon {
      font-size: 2rem;
    }

    .contact-info {
      h4 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: var(--spacing-xs);
      }

      p {
        font-size: 0.9rem;
        color: var(--text-secondary);
      }
    }
  }
}
</style>
