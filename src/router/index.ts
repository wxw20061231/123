import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nations',
      name: 'nations',
      component: () => import('../views/NationsView.vue')
    },
    {
      path: '/nations/:id',
      name: 'nation-detail',
      component: () => import('../views/NationDetailView.vue')
    },
    {
      path: '/culture',
      name: 'culture',
      component: () => import('../views/CultureView.vue')
    },
    {
      path: '/culture/:type',
      name: 'culture-category',
      component: () => import('../views/CultureCategoryView.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import('../views/TimelineView.vue')
    },
    {
      path: '/interactive',
      name: 'interactive',
      component: () => import('../views/InteractiveView.vue')
    },
    {
      path: '/interactive/quiz',
      name: 'quiz',
      component: () => import('../views/QuizView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
