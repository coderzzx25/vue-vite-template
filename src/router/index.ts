import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:patchMatch(.*)',
    component: () => import('@/views/notfound/notfound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
