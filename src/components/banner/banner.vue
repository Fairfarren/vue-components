<template>
  <div id="banner" :style="{height: imgHeight}">
    <div class="clickLeft" @click="clickChangeIndex(true)">
      <img src="./back.png" alt="">
    </div>
    <div class="clickRight" @click="clickChangeIndex(false)">
      <img src="./more.png" alt="">
    </div>
    <div class="bannerList">
      <span
        v-for="(list, ind) in dataList"
        :key="ind"
        :class="{'nowSpan': nowIndex == ind}"
        @mouseover="nowIndex = ind"
        >
      </span>
    </div>
    <div class="imgBox">
      <ul class="theImg"
        :class="imgBoxHaveTransition"
        :style="{left: moveLeft, width: imgWidth * dataList.length + 'px'}"
        @mousedown="theMouseDown"
        @mousemove="theMouseMove"
        @mouseup="theMouseUp"
        @mouseover="clearTimeOut"
        @mouseout="mouseOutCastMouseUp"
        @touchstart="theTouchStart"
        @touchmove="theTouchMove"
        @touchend="theTouchEnd"
        >
        <li
          v-for="(list, index) in dataList"
          :key="index" :style="{width: imgWidth + 'px'}"
          @mouseup="goToPath(list.path)"
          >
          <div :style="{backgroundImage: `url(${list.img})`, backgroundSize: `cover`, height: imgHeight}"></div>
        </li>
      </ul>
    </div>
    <img class="firstImg" :src="dataList[0].img" width="100%" alt="" style="opacity: 0">
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: null,
      sureGoTo: true,
      imgHeight: '',
      imgWidth: '',
      imgBoxHaveTransition: 'imgBoxHaveTransition',
      nowIndex: 0,
      moveLeft: '0px',
      mouseMoveStatus: {
        flag: false,
        nowLeft: '',
        start: '',
        move: '',
        up: '',
        num: ''
      },
      touchMoveStatus: {
        flag: false,
        nowLeft: '',
        start: '',
        move: '',
        up: '',
        num: ''
      }
    }
  },
  props: ['dataList', 'timeOut'],
  computed: {
  },
  methods: {
    getImgHeight () {
      const firstImg = new Image()
      firstImg.src = this.dataList[0].img
      firstImg.onload = () => {
        const domFirstImg = document.getElementsByClassName('firstImg')[0]
        this.imgHeight = domFirstImg.height + 'px'
        this.imgWidth = domFirstImg.width
      }
    },
    clickChangeIndex (status) {
      if (status) {
        this.nowIndex--
        this.nowIndex = this.nowIndex < 0 ? this.dataList.length - 1 : this.nowIndex
      } else {
        this.nowIndex++
        this.nowIndex = this.nowIndex > this.dataList.length - 1 ? 0 : this.nowIndex
      }
    },
    changeMoveLeft () {
      this.moveLeft = -this.nowIndex * this.imgWidth + 'px'
    },
    theMouseDown (e) {
      const event = e || window.event
      this.mouseMoveStatus.start = event.clientX || event.changedTouches[0].clientX
      this.flag = true
      this.mouseMoveStatus.nowLeft = parseInt(this.moveLeft)
    },
    theMouseMove (e) {
      if (!this.flag) return
      const event = e || window.event
      this.imgBoxHaveTransition = ''
      this.mouseMoveStatus.move = event.clientX || event.changedTouches[0].clientX
      this.mouseMoveStatus.num = this.mouseMoveStatus.start - this.mouseMoveStatus.move
      this.moveLeft = this.mouseMoveStatus.nowLeft - this.mouseMoveStatus.num + 'px'
      this.sureGoTo = false
    },
    theMouseUp (e) {
      const event = e || window.event
      this.mouseMoveStatus.up = event.clientX || event.changedTouches[0].clientX
      let arr = []
      let numArr = []
      let helpMoveNum = this.mouseMoveStatus.num < 0 ? -this.imgWidth * 0.3 : this.imgWidth * 0.3
      this.dataList.forEach((value, index) => {
        arr.push(-index * this.imgWidth)
        numArr.push({
          num: Math.abs(-index * this.imgWidth - parseInt(this.moveLeft) + helpMoveNum),
          index: index
        })
      })
      numArr.sort((a, b) => a.num - b.num)
      this.nowIndex = numArr[0].index
      this.moveLeft = arr[numArr[0].index] + 'px'
      this.flag = false
      this.imgBoxHaveTransition = 'imgBoxHaveTransition'
      this.sureGoTo = true
    },
    theTimeOut () {
      if (parseInt(this.timeOut) === 0 || !this.timeOut) return
      this.timer = setInterval(() => {
        this.clickChangeIndex(false)
      }, this.timeOut)
    },
    mouseOutCastMouseUp (e) {
      this.theTimeOut()
      this.theMouseUp(e)
    },
    theTouchStart (e) {
      this.theMouseDown(e)
    },
    theTouchMove (e) {
      this.theMouseMove(e)
    },
    theTouchEnd (e) {
      this.theMouseUp(e)
    },
    clearTimeOut () {
      clearInterval(this.timer)
    },
    goToPath (path) {
      if (!this.sureGoTo) return
      if (path.indexOf('http') !== -1) {
        window.location.href = path
      } else {
        this.$router.push(path)
      }
    }
  },
  mounted () {
    this.getImgHeight()
    this.theTimeOut()
    window.onresize = () => {
      this.getImgHeight()
    }
  },
  watch: {
    'nowIndex' () {
      this.changeMoveLeft()
    }
  }
}
</script>

<style scoped lang="scss">
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  #banner {
    width: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    >div {
      position: absolute;
      z-index: 2;
    }
    .imgBox {
      z-index: 1;
      position: relative;
    }
    &:hover .clickLeft, &:hover .clickRight {
      display: block;
    }
  }
  .clickLeft, .clickRight {
    top: 50%;
    cursor: pointer;
    transform: translateY(-50%);
    width: 25px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: {
      color: RGBA(223, 223, 223, 0.5)
    }
    display: none;
    img {
      width: 90%;
      height: 30px;
    }
  }
  .clickLeft {
    left: 0;
    border-radius: 0 30px 30px 0;
  }
  .clickRight {
    right: 0;
    border-radius: 30px 0 0 30px;
  }
  .imgBox {
    >ul {
      position: absolute;
      left: 0;
      top: 0;
      >li {
        float: left;
      }
    }
    img {
      width: 100%;
      float: left;
    }
  }
  .imgBoxHaveTransition {
    transition: all 0.5s;
  }
  .bannerList {
    width: 100%;
    bottom: 10%;
    text-align: center;
    >span {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin: 0 5px;
      background: {
        color: #fff;
      }
    }
    >.nowSpan {
      transition: all 0.3s;
      background: {
        color: #D75F50;
      }
    }
  }
</style>
