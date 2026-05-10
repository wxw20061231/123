// 中国各民族文化历史网站 - 基础样式

@use 'variables' as *;

// ==================== 重置样式 ====================
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: $font-family-body;
  font-size: 16px;
  line-height: 1.6;
  color: $text-primary;
  background-color: $background-color;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// ==================== 标题样式 ====================
h1, h2, h3, h4, h5, h6 {
  font-family: $font-family-title;
  font-weight: 600;
  line-height: 1.3;
  color: $text-primary;
}

h1 {
  font-size: 2.5rem;
  
  @include responsive(md) {
    font-size: 3rem;
  }
}

h2 {
  font-size: 2rem;
  
  @include responsive(md) {
    font-size: 2.25rem;
  }
}

h3 {
  font-size: 1.5rem;
  
  @include responsive(md) {
    font-size: 1.75rem;
  }
}

h4 {
  font-size: 1.25rem;
}

h5 {
  font-size: 1.125rem;
}

h6 {
  font-size: 1rem;
}

// ==================== 段落样式 ====================
p {
  margin-bottom: $spacing-md;
  line-height: 1.8;
}

// ==================== 链接样式 ====================
a {
  color: $primary-color;
  text-decoration: none;
  transition: color var(--transition-fast);

  &:hover {
    color: darken(#D32F2F, 10%);
  }
}

// ==================== 列表样式 ====================
ul, ol {
  margin-bottom: $spacing-md;
  padding-left: $spacing-lg;
}

li {
  margin-bottom: $spacing-xs;
}

// ==================== 图片样式 ====================
img {
  max-width: 100%;
  height: auto;
  display: block;
}

// ==================== 按钮基础样式 ====================
button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
  
  &:focus {
    outline: none;
  }
}

// ==================== 输入框样式 ====================
input, textarea, select {
  font-family: inherit;
  font-size: inherit;
  
  &:focus {
    outline: none;
  }
}

// ==================== 工具类 ====================
.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 $spacing-md;
  
  @include responsive(md) {
    padding: 0 $spacing-lg;
  }
  
  @include responsive(lg) {
    padding: 0 $spacing-xl;
  }
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// ==================== 民族色彩类 ====================
.nation-mongolian {
  --nation-primary: var(--color-mongolian-blue);
  --nation-secondary: var(--color-mongolian-green);
}

.nation-tibetan {
  --nation-primary: var(--color-tibetan-red);
  --nation-secondary: var(--color-tibetan-white);
}

.nation-uyghur {
  --nation-primary: var(--color-uyghur-blue);
  --nation-secondary: var(--color-uyghur-gold);
}

.nation-zhuang {
  --nation-primary: var(--color-zhuang-blue);
  --nation-secondary: var(--color-zhuang-yellow);
}

.nation-miao {
  --nation-primary: var(--color-miao-red);
  --nation-secondary: var(--color-miao-silver);
}

.nation-yi {
  --nation-primary: var(--color-yi-fire);
  --nation-secondary: var(--color-yi-black);
}

// ==================== 动画 ====================
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease forwards;
}

.animate-fade-in-down {
  animation: fadeInDown 0.5s ease forwards;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease forwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.5s ease forwards;
}

// ==================== 滚动条样式 ====================
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
  
  &:hover {
    background: #a1a1a1;
  }
}

// ==================== 选中样式 ====================
::selection {
  background-color: var(--color-zhu-red);
  color: white;
}
