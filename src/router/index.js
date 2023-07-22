import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechView from "../views/TechView.vue";
import SportView from "../views/SportView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/technolgy',
      name:'technology',
      component: TechView
    },
    {
      path:'/sport',
      name:'sport',
      component: SportView
    }
  ]
})

export default router
