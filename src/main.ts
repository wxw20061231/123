import { createApp } from 'vue'
import type { Component } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import App from './App.vue'
import router from './router'

// 引入自定义样式
import './assets/styles/variables.scss'
import './assets/styles/base.scss'

const app = createApp(App)

// 注册所有Element Plus图标
Object.entries(ElementPlusIconsVue).forEach(([key, component]) => {
  app.component(key, component as Component)
})

app.use(createPinia())
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
  size: 'default',
  zIndex: 3000
})

app.mount('#app')
