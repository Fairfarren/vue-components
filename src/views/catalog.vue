<template>
  <div id="catalog">
    <div class="text-center">
      <h3>
        <a href="https://github.com/Fairfarren/vue-components" target="_blank">曼妥思的组件</a>
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
        text: 'multipleSelect',
        path: '/multipleSelect'
      }, {
        text: 'animatedText',
        path: '/animatedText'
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
    transition: all 0.3s;
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
      >h3 {
        color: black;
        a {
          transition: all 1s;
          color: black;
        }
        &:hover {
          position:relative;
          // background-image: -webkit-linear-gradient(left, blue, red 25%, blue 50%, red 75%, blue 100%);
          // background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 50%, #4facfe 100%);
          // background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
          // background-image: linear-gradient(to right, #a8edea 0%, #fed6e3 100%);
          color: #2af598;
          background-image: -webkit-gradient(linear, left top, right top, from(#2af598), color-stop(25%, #009efd), color-stop(50%, #2af598), color-stop(75%, #009efd), to(#2af598));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: streamer 0.5s infinite linear;
          background-size: 200% 100%;
        }
        &:hover a {
          color: #17C8CD;
        }
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
  @keyframes streamer {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
</style>
