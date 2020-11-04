import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// routes
import RegisterPage from '@/components/pages/RegisterPage.vue'
import LoginPage from '@/components/pages/LoginPage.vue'
import HomaPage from '@/components/pages/HomePage.vue'
// routes

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: LoginPage
    },
    {
      name: 'Register',
      path: '/register',
      component: RegisterPage
    },
    {
      name: 'Home',
      path: '/',
      component: HomaPage,
      meta: {
        requiresAuth: true
      }
    }
  ]
})