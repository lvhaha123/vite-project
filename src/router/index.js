import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [{
  path: '/login',
  component: () => import('../components/Login.vue'),
}, {
  path: '/hellowWorld',
  name: 'user',
  component: () => import('../components/HelloWorld.vue'),
}]
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  const isLogin = sessionStorage.getItem("token") ? true : false;
  if (to.path == '/login') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})


export default router;