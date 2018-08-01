import banner from '@/components/banner/banner.vue'
import multipleSelect from '@/components/multipleSelect/multipleSelect'
import animatedText from '@/components/animatedText/animatedText'

const theComponents = {
  install (Vue) {
    Vue.component('fairfarrenBanner', banner)
    Vue.component('fairfarrenMultipleSelect', multipleSelect)
    Vue.component('fairfarrenAnimatedText', animatedText)
  }
}
export default theComponents
