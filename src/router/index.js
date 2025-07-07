import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import("@/components/Home.vue"),
  },
  { 
    path: '/about', 
    name: 'about',
    component: () => import("@/components/About.vue"),
  },
  { 
    path: '/projects', 
    name: 'projects',
    component: () => import("@/components/Projects.vue"),
  },
  { 
    path: '/goals', 
    name: 'goals',
    component: () => import("@/components/Goals.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;