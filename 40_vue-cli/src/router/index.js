import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/haha',
    name: 'haha',
    component: () => import('../views/Haha.vue'),
    children: [
      {
        path: 'daxiao',
        name: 'daxiao',
        component: () => import('../views/Daxiao.vue'),
      },
      {
        path: 'pixiaoroubuxiao',
        name: 'pixiaoroubuxiao',
        component: () => import('../views/Pixiaoroubuxiao.vue'),
      },
    ],
  },
  {
    path: '/xixi',
    name: 'xixi',
    component: () => import('../views/Xixi.vue'),
    children: [
      {
        path: ':id',
        name: 'xiaohua',
        component: () => import('../views/Xiaohua.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
