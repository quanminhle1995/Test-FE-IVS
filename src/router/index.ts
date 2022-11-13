import { createRouter, createWebHistory } from 'vue-router'
import Knowledge from '@/views/Knowledge.vue';
import ListBord from "@/components/knowledge/ListBord.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/knowledge'
    },
    {
      path: '/knowledge',
      name: 'Knowledge',
      component: Knowledge,
      children: [
        {
          path: '',
          name: 'ListBord',
          component: ListBord
        },
        {
          path: ':filter',
          name: 'filterListBord',
          component: ListBord
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }import { Knowledge } from '@/views/Knowledge.vue';

  ]
})

export default router
