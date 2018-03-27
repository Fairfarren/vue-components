<template>
  <div id="catalog">
    <div class="text-center">
      <h3>
        <a href="https://fairfarren.github.io" target="_blank">曼妥思的组件</a>
      </h3>
      <div @click="changeFlag">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <transition name="fade">
      <ul v-if="ulShow">
        <li v-for="(data, index) in list" :key="index" @click="changeFlag">
          <router-link :to="data.path" active-class="chioseA">{{ data.text }}</router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        text: 'banner',
        path: '/banner'
      }, {
        text: 'card',
        path: '/card'
      }],
      flag: false,
      ulShow: false
    }
  },
  methods: {
    changeFlag () {
      if (!this.flag) return
      this.ulShow = !this.ulShow
    },
    windowWidth () {
      if (window.innerWidth < 823) {
        this.flag = true
        this.ulShow = false
      } else {
        this.flag = false
        this.ulShow = true
      }
    }
  },
  mounted () {
    this.windowWidth()
    window.addEventListener('resize', () => {
      this.windowWidth()
    })
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
  #catalog {
    >div {
      box-sizing: border-box;
      padding: 20px 10px;
      border: {
        bottom: 1px solid rgba(0,0,0,.07);
      }
      background: {
        color: #fff;
      }
      >div {
        display: none;
      }
    }
    >ul {
      padding: 20px;
      >li {
        padding: 10px 20px;
        a {
          display: block;
          color: black;
          // padding: 10px 20px;
          &:hover {
            text-decoration: underline;
          }
        }
        .chioseA {
          color: #42b983;
          text-decoration: underline;
        }
      }
    }
  }
  .text-center {
    text-align: center;
  }
  .fade-enter-active {
    transition: all 0.5s;
  }
  .fade-enter {
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.5s;
  }
  .fade-leave {
    transition: all 0.5s;
  }
  .fade-leave-active {
    transition: all 0.5s;
    transform: translateY(-100%);
    opacity: 0;
  }
  @media screen and (max-width: 823px) {
    #catalog {
      position: relative;
      >.text-center {
        >h3 {
          text-align: center;
        }
        >div {
          display: block;
          position:absolute;
          right: 20px;
          top: 24px;
          cursor: pointer;
          >span {
            display: block;
            width: 20px;
            height: 2px;
            background: {
              color: #666666;
            }
          }
          >span:nth-child(2) {
            margin: 5px 0;
          }
        }
      }
      >ul {
        position: absolute;
        top: 67px;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        background: {
          color: #fff;
        }
        border: {
          bottom: 1px solid rgba(0, 0, 0, 0.07);
        }
        >li {
          text-align: center;
        }
      }
    }
  }
</style>
