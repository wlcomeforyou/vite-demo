import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: 'hello',
    component: () => import('../components/HelloWorld.vue'),
    children: [
      {
        path: "", // 默认展示 path 为空
        name: "test4",
        component: ()=>import('../components/Test4.vue')
      },
      {
        path: "Test5",
        name: "test5",
        component: ()=>import('@/components/Test5.vue')
      }
    ]
  },
  {
    path: "/home",
    name: 'home',
    component: () => import('../Home.vue')
  },
  {
    path: "/Test",
    name: 'test',
    component: () => import('../components/Test.vue')
  },
  {
    path: "/Test1",
    name: 'test1',
    component: () => import('../components/Test1.vue')
  }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  }
);

export default router
