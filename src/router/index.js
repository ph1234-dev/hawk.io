import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '../views/ChatView.vue'
import RegisterView from '../views/RegisterView.vue'
import SuccessfulRegisterView from "../views/SuccessRegisterView.vue"
import SignInView from "../views/SignInView.vue"
import PrivacyView from "../views/PrivacyView.vue"
import AuthorView from "../views/AuthorView.vue"
import AboutView from "../views/AboutView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ChatView
    },
    {
      path: '/privacy',
      name: 'privacy_statement',
      component: PrivacyView
    },
    {
      path: '/about',
      name: 'about_statement',
      component: AboutView
    },
    {
      path: '/author',
      name: 'author_statement',
      component: AuthorView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: SignInView,
    },
    {
      // you need to add router guard here
      path: '/register/successful',
      name: 'successful_register',
      component: SuccessfulRegisterView
    }
  ]
})

export default router
