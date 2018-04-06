import banner from '@/components/banner/banner.vue'
import card from '@/components/card/card'
import tree from '@/components/tree/tree'

const theComponents = {
  install (Vue) {
    Vue.component('fairfarrenBanner', banner)
    Vue.component('fairfarrenCard', card)
    Vue.component('fairfarrenTree', tree)
  }
}
export default theComponents
