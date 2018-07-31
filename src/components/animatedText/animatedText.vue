<template>
  <div>
    <span class="animatedText" :class="textClass">
      <b style="opacity: 0;">1</b>
      {{value}}
      <i />
    </span>
  </div>
</template>

<script>
export default {
  props: ['text', 'addTime', 'deleteTime', 'again', 'textClass', 'wait'],
  data () {
    return {
      value: ' ',
      num: 0
    }
  },
  methods: {
    async getValue () {
      await this.deleteText()
      await this.addText()
      await this.waitTime()
      if (this.num < this.text.length) {
        this.getValue()
      } else if (this.again) {
        this.num = 0
        this.getValue()
      }
    },
    // 删除字节
    deleteText () {
      return new Promise((resolve) => {
        let timer = setInterval(() => {
          let length = this.value.length - 1
          if (length <= 0) {
            clearInterval(timer)
            this.value = ''
            resolve()
          } else {
            this.value = this.value.slice(0, length - 1)
          }
        }, this.deleteTime || 50)
      })
    },
    // 添加字节
    addText () {
      return new Promise((resolve) => {
        let arr = this.text[this.num].split('')
        let length = arr.length
        let arrIndex = 0
        let timer = setInterval(() => {
          this.value += arr[arrIndex]
          arrIndex += 1
          if (arrIndex === length) {
            clearInterval(timer)
            this.num += 1
            resolve()
          }
        }, this.addTime || 100)
      })
    },
    waitTime () {
      return new Promise((resolve) => {
        setTimeout(resolve, this.wait || 1000)
      })
    }
  },
  mounted () {
    this.getValue()
  }
}
</script>

<style lang="scss" scoped>
.animatedText {
  display: inline-block;
  position: relative;
  padding: {
    right: 5px;
  }
  i {
    position: absolute;
    display: inline-block;
    right: 0;
    top: 0;
    height: 100%;
    width: 2px;
    animation: opacity 0.8s infinite;
    background: {
      color: #333;
    }
  }
}
@keyframes opacity {
  from {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
