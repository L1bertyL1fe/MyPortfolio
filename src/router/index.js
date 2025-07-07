import { createRouter, createWebHistory } from 'vue-router';
import About from '@/components/About.vue';
import Projects from '@/components/Projects.vue'; // Создай этот компонент позже
import Goals from '@/components/Goals.vue';      // Создай этот компонент позже

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: { template: '<div class="empty-state">Выберите раздел в меню</div>' } 
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
  // Обработка 404
  { 
    path: '/:pathMatch(.*)*', 
    component: { template: '<div>Страница не найдена</div>' } 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;