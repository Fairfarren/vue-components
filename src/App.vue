<template>
  <div id="app">
    <div class="left">
      <catalog />
    </div>
    <div class="box">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    catalog: () => import('@/views/catalog.vue')
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  html {
    font-family: 'Helvetica Neue For Number','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue','Helvetica','Arial','sans-serif';
    // font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  #app {
    width: 100%;
    display: flex;
  }
  .left {
    width: 299px;
    min-height: 100vh;
    background: {
      color: #fafafa;
    }
    border: {
      right: 1px solid rgba(0,0,0,.07);
    }
  }
  .box {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    >div {
      position: absolute;
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
</style>
