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
      path: '/tree',
      component: () => import('@/views/box/tree/treeView')
    },
    {
      path: '/multipleSelect',
      component: () => import('@/views/box/multipleSelect/multipleSelectView')
    },
    {
      path: '/animatedText',
      component: () => import('@/views/box/animatedText/animatedTextView')
    }
  ]
})
