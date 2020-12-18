import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Square from '../pages/Square/Square'
import Publish from '../pages/Publish/Publish'
import Message from '../pages/Message/Message'
import Profile from '../pages/Profile/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Square',
      name: 'Square',
      component: Square
    },
    {
      path: '/Publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
