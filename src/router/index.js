import { createRouter, createWebHistory } from 'vue-router'


import Home from '@/views/Home.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/About.vue'

const router =createRouter({
  
  history: createWebHistory(),
  
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/blogPosts', name: 'blogPosts', component: BlogPosts },
    { path: '/about', name: 'about', component: About },
  ],
})




export default router