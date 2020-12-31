import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Square from '../pages/Square/Square'
import Publish from '../pages/Publish/Publish'
import Message from '../pages/Message/Message'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Test from '../pages/Test/Test'
import Login from '../pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Square',
      name: 'Square',
      component: Square,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Publish',
      name: 'Publish',
      component: Publish,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }
  ]
})
