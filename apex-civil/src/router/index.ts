import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from '@/views/HomepageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomepageView,
    },
    {
      path: '/our-services',
      name: 'our-services',
      component: () => import('@/views/OurServicesView.vue'),
    },
    {
      path: '/our-services/:name',
      name: 'our-service-details',
      component: () => import('@/views/OurServiceDetailsView.vue'),
      props: true,
    },
    {
      path: '/key-projects',
      name: 'key-projects',
      component: () => import('@/views/KeyProjectsView.vue'),
    },
    {
      path: '/key-projects/:name',
      name: 'key-project-details',
      component: () => import('@/views/KeyProjectDetailsView.vue'),
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 }
  },
})

export default router
