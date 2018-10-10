<template>
  <div id="app">
    <div class="left">
      <catalog />
    </div>
    <div class="box" :style="{maxWidth: width > 768 ? width - 300 + 'px' : '100%'}">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      width: ''
    }
  },
  components: {
    catalog: () => import('@/views/catalog.vue')
  },
  methods: {
    getWidth () {
      this.width = document.getElementById('app').clientWidth
    }
  },
  mounted () {
    this.getWidth()
    window.addEventListener('resize', () => {
      this.getWidth()
    })
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
  // font-family: 'Helvetica Neue For Number','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue','Helvetica','Arial','sans-serif';
  font-family: PingFangSC-Thin, Lantinghei SC, Open Sans, Arial,
    Hiragino Sans GB, Microsoft YaHei, \\5fae\8f6f\96c5\9ed1, STHeiti,
    WenQuanYi Micro Hei, SimSun, sans-serif;
  // font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
}
#app {
  width: 100%;
  max-width: 100vw;
  display: flex;
}
.left {
  // flex: 0 0 299px;
  width: 299px;
  // grid-column: 1 / 2;
  flex-shrink: 0;
  min-height: 100vh;
  background: {
    color: #fafafa;
  }
  border: {
    right: 1px solid rgba(0, 0, 0, 0.07);
  }
}
.box {
  // flex: 1 1 100%;
  flex: 1;
  flex-shrink: 1;
  // max-width: calc(100vw - 300px);
  // grid-column: 2 / auto;
  padding: 20px;
  box-sizing: border-box;
}
.text-center {
  text-align: center;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.5s;
}
.fade-leave {
  transition: all 0.5s;
}
.fade-leave-active {
  transition: all 0.5s;
  transform: translateX(-100%);
  opacity: 0;
}
@media screen and (max-width: 768px) {
  #app {
    display: block;
    position: relative;
  }
  .left {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    min-height: 30px;
    max-width: 100%;
    width: 100%;
  }
  .box {
    padding: {
      top: 87px;
    }
  }
}
.animatedStyle {
  color: #4eb7c3;
  font-size: 24px;
  transition: color 0.5s;
  &:hover {
    color: #FF906E;
  }
}
</style>
