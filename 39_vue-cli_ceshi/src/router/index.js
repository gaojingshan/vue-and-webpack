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
        redirect: '/app/order/allorder',
        name: 'order',
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
  {
    path: '*',
    redirect: '/app/index',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
