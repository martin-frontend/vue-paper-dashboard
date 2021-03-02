import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'


const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {

  // determine whether the user has logged in
  const hasToken = getToken()
  const authUser = store.getters.authUser
  // const authUser = null
  if (hasToken || authUser) {
    console.log(authUser);
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      // next(`/main/login?redirect=${to.path}`)
      next(`/login`)
    }
  }
})
