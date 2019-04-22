import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RpmResults from './views/RpmResults.vue'
import Angle from './views/Angle.vue'
import Tap from './views/Tap.vue'
import Materials from './views/Materials.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rpm',
      name: 'rpmresults',
      component: RpmResults
    },
    {
      path: '/angle',
      name: 'angle',
      component: Angle
    },
    {
      path: '/tap',
      name: 'tap',
      component: Tap
    },
    {
      path: '/materials',
      name: 'materials',
      component: Materials
    }
  ]
})
