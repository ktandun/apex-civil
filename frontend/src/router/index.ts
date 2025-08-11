import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomepageView.vue'),
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
    {
      path: '/our-team',
      name: 'our-team',
      component: () => import('@/views/OurTeamView.vue'),
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('@/views/ContactUsView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    document.getElementById('navbar')?.scrollIntoView({ behavior: 'smooth' })

    return { top: 0, left: 0 }
  },
})

export default router
