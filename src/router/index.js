import { createRouter, createWebHashHistory } from 'vue-router'

const scrollPositions = new Map();

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/stay',
      name: 'stay',
      component: () => import('../components/Stay.vue')
    },
    {
      path: '/agent',
      name: 'agent',
      component: () => import('../components/Agent.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../components/Team.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../components/Product.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../components/Join.vue')
    }
  ],
  scrollBehavior(to, from) {
    const savedPosition = scrollPositions.get(to.fullPath);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  // Save the scroll position of the current route before navigating away
  scrollPositions.set(from.fullPath, { left: window.scrollX, top: window.scrollY });
  next();
});

export default router;
