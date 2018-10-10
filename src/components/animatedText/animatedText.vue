<template>
  <div class="animatedTextBox">
    <span class="animatedText" :class="textClass" :style="{fontSize: FSize + 'px', inlineHeight: 1.5 * FSize + 'px', minHeight: 1.5 * FSize + 'px', height: height || ''}">
      <!-- <b style="opacity: 0;">1</b> -->
      {{value}}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    // 'text', 'addTime', 'deleteTime', 'again', 'textClass', 'wait', 'height',
    text: {
      type: Array
    },
    addTime: {
      type: Number,
      default: 100
    },
    deleteTime: {
      type: Number,
      default: 50
    },
    textClass: {
      type: String
    },
    wait: {
      type: Number,
      default: 1000
    },
    again: {
      type: Boolean,
      default: false
    },
    FSize: {
      type: Number,
      default: 16
    },
    height: {
      type: Number
    }
  },
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
      this.num = (this.num >= this.text.length && this.again) ? 0 : this.num
      if (this.num < this.text.length || this.again) {
        this.getValue()
      }
    },
    // 删除字节
    deleteText () {
      return new Promise((resolve) => {
        const timer = setInterval(() => {
          let length = this.value.length - 1
          if (length <= 0) {
            clearInterval(timer)
            this.value = ''
            resolve()
          } else {
            this.value = this.value.slice(0, length - 1)
          }
        }, this.deleteTime)
      })
    },
    // 添加字节
    addText () {
      return new Promise((resolve) => {
        let arr = this.text[this.num].split('')
        let length = arr.length
        let arrIndex = 0
        const timer = setInterval(() => {
          this.value += arr[arrIndex]
          arrIndex += 1
          if (arrIndex === length) {
            clearInterval(timer)
            this.num += 1
            resolve()
          }
        }, this.addTime)
      })
    },
    waitTime () {
      return new Promise((resolve) => {
        setTimeout(resolve, this.wait)
      })
    }
  },
  mounted () {
    this.getValue()
  }
}
</script>

<style lang="scss" scoped>
.animatedTextBox {
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
.animatedText {
  display: block;
  float: left;
  position: relative;
  padding: {
    right: 5px;
  }
  &::after {
    content: '|';
    animation: opacity 0.8s infinite;
    color: #333;
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
