import banner from '@/components/banner/banner.vue'
import card from '@/components/card/card'
import multipleSelect from '@/components/multipleSelect/multipleSelect'

const theComponents = {
  install (Vue) {
    Vue.component('fairfarrenBanner', banner)
    Vue.component('fairfarrenCard', card)
    Vue.component('fairfarrenMultipleSelect', multipleSelect)
  }
}
export default theComponents
