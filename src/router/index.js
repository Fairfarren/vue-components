import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/banner',
      component: () => import('@/views/box/banner/bannerView')
    },
    {
      path: '/card',
      component: () => import('@/views/box/card/cardView')
    },
    {
      path: '/tree',
      component: () => import('@/views/box/tree/treeView')
    }
  ]
})
