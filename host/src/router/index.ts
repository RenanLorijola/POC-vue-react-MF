import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import HelloWorld from '../views/HelloWorld.vue';
import TestView from '../views/TestView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/hello-world',
    name: 'hello-world',
    component: HelloWorld,
  },
  {
    path: '/test',
    name: 'test',
    component: TestView,
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
