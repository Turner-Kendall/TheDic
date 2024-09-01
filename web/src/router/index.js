import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue')
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("../views/register.vue"),
      },
    // {
    //   path: "/page/:name",
    //   name: "Page",
    //   component: Page,
    // },
    // {
    //   path: "/:catchAll(.*)",
    //   name: 'not_found',
    //   component: () => import('../views/NotFound.vue')
    // },
  ]
})

export default router