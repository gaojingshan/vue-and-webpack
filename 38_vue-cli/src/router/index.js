import Vue from 'vue';
import VueRouter from 'vue-router';
import HeaderLayout from '../layouts/HeaderLayout.vue';
import LeftLayout from '../layouts/LeftLayout.vue';
import Index from '../views/index/Index.vue';
import AllOrder from '../views/order/AllOrder.vue';
import NewOrder from '../views/order/NewOrder.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/app',
    component: HeaderLayout,
    redirect: '/app/index',
    children: [
      {
        path: 'index',
        component: Index,
        name: 'index',
      },
      {
        path: 'order',
        component: LeftLayout,
        name: 'order',
        // 跳转到order栏目中的默认页（全部订单这个页面）
        redirect: '/app/order/allorder',
        children: [
          {
            path: 'allorder',
            component: AllOrder,
          },
          {
            path: 'neworder',
            component: NewOrder,
          },
        ],
      },
    ],
  },
  // 这个*就表示如果用户输入了其它路由，那么就要跳转到首页
  {
    path: '*',
    redirect: '/app/index',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
