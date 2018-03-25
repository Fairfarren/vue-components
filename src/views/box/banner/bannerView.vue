<template>
  <div>
    <fairfarrenBanner :dataList="dataList" timeOut="3000"/>
    <br>
    <bannerReadMe />
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [{
        img: 'https://i.loli.net/2018/03/25/5ab75a03c5ee2.jpeg',
        path: 'https://www.baidu.com'
      }, {
        img: 'https://i.loli.net/2018/03/25/5ab75a0538920.jpeg',
        path: '/card'
      }, {
        img: 'https://i.loli.net/2018/03/25/5ab75a0f40956.jpeg',
        path: '/hello'
      }, {
        img: 'https://i.loli.net/2018/03/25/5ab75a130047b.jpg',
        path: '/home'
      }, {
        img: 'https://i.loli.net/2018/03/25/5ab75a1351249.jpeg',
        path: 'http://www.google.com'
      }, {
        img: 'https://i.loli.net/2018/03/25/5ab75a13f22d6.jpg',
        path: 'asdfasdf'
      }],
      show: false
    }
  },
  components: {
    bannerReadMe: () => import('@/views/box/banner/bannerReadMe.vue')
  }
}
</script>
