<template>
  <div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        text: 'box1',
        childrens: [{
          text: 'small1'
        }, {
          text: 'small2'
        }]
      }, {
        text: 'box2'
      }]
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
</style>
