import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [{
  path: '/',
  component: () => import('../components/Index.vue'),
  redirect: '/login',
  children: [
    {
      path: 'hellowWorld',
      component: () => import('../components/HelloWorld.vue'),
    }
  ]
},
{
  path: '/login',
  component: () => import('/src/components/Login.vue'),
},
{
  path: '/404',
  component: () => import('../components/HelloWorld.vue'),
}
]
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
})


export default router;