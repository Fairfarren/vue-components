<template>
  <div id="catalog">
    <div class="text-center">
      <h3>
        <a href="https://fairfarren.github.io" target="_blank">曼妥思的组件</a>
      </h3>
    </div>
    <ul>
      <li v-for="(data, index) in list" :key="index">
        <router-link :to="data.path" active-class="chioseA">{{ data.text }}</router-link>
      </li>
    </ul>
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
      }]
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
