import banner from '@/components/banner/banner.vue'
import card from '@/components/card/card'

const theComponents = {
  install (Vue) {
    Vue.component('fairfarrenBanner', banner)
    Vue.component('fairfarrenCard', card)
  }
}
export default theComponents
