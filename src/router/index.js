import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  component: () => import('../components/Index.vue'),
  redirect:'hellowWorld',
  children: [
    {
      path: 'hellowWorld',
      component: () => import('../components/HelloWorld.vue'),
    }
  ]
},
{
  path: '/login',
  component:  () => import('../components/Login.vue'),
},
{
  path: '/404',
  component:  () => import('../components/HelloWorld.vue'),
}
]
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem("token") ? true : false;
  if (to.path == '/login') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})


export default router;