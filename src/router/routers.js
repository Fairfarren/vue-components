const routers = [
  {
    path: '/banner',
    component: () => import('@/views/box/banner/bannerView')
  }, {
    path: '/tree',
    component: () => import('@/views/box/tree/treeView')
  }, {
    path: '/multipleSelect',
    component: () => import('@/views/box/multipleSelect/multipleSelectView')
  }, {
    path: '/animatedText',
    component: () => import('@/views/box/animatedText/animatedTextView')
  }
]

export default routers
