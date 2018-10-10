<template>
  <div>
    <fairfarrenAnimatedText :text="text" :addTime="100" :deleteTime="50" :again="true" textClass="animatedStyle" :wait="2000" :FSize="30"/>
    <br />
    <animatedTextReadMe />
  </div>
</template>

<script>
export default {
  components: {
    animatedTextReadMe: () => import('@/views/box/animatedText/animatedTextReadme')
  },
  data () {
    return {
      text: [
        'hello hello hellohellohellohello',
        'worldworldworld world world world world',
        '你好世界！你好世界！你好世界！你好世界！你好世界！',
        '世界说：为了生活！',
        '请给我一个start吧'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
