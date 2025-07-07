import { createRouter, createWebHistory } from 'vue-router';
import About from '@/components/About.vue';
import Projects from '@/components/Projects.vue';
import Goals from '@/components/Goals.vue';
import Home from "@/components/Home.vue";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  { 
    path: '/about', 
    name: 'about',
    component: About 
  },
  { 
    path: '/projects', 
    name: 'projects',
    component: Projects 
  },
  { 
    path: '/goals', 
    name: 'goals',
    component: Goals 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;