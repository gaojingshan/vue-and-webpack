import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/paidan',
    name: 'paidan',
    component: () => import('../views/paidan/Paidan.vue'),
    redirect: {
      name: 'maoxiansuo',
    },
    children: [
      {
        path: 'maoxiansuo',
        name: 'maoxiansuo',
        component: () => import('../views/paidan/Maoxiansuo.vue'),
      },
      {
        path: 'genjinzhong',
        name: 'genjinzhong',
        component: () => import('../views/paidan/Genjinzhong.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: {
      name: 'paidan',
    },
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

// 前置守卫
// 会回调到哪儿去，从哪儿来，是否放行
// router.beforeEach((to, from, next) => {
//   // 通过这个校验权限
//   console.log(to, from);
//   // 职责链
//   next();
// });

// // 后置守卫
// router.afterEach((to, from) => {
//   console.log(to, from);
// });

export default router;
