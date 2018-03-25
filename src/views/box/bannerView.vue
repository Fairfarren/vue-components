<template>
  <div>
    <fairfarrenBanner :dataList="dataList" timeOut="1000"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [{
        img: 'https://i.loli.net/2018/03/25/5ab75a03c5ee2.jpeg'
      }, {
        img: 'https://i.loli.net/2018/03/25/5ab75a0538920.jpeg'
      }, {
        img: 'https://i.loli.net/2018/03/25/5ab75a0f40956.jpeg'
      }, {
        img: 'https://i.loli.net/2018/03/25/5ab75a130047b.jpg'
      }, {
        img: 'https://i.loli.net/2018/03/25/5ab75a1351249.jpeg'
      }, {
        img: 'https://i.loli.net/2018/03/25/5ab75a13f22d6.jpg'
      }]
    }
  }
}
</script>
