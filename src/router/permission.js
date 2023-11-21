
import router from './index.js'

router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.getItem("token")
  if (isLogin) {
    if (to.path == '/login') {
      next();
      // next('/home')
      return;
    } else {
      next();
      return
    }
  } else {
    next('/login')
  }
})
