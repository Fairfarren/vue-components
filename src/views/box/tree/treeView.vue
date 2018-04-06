<template>
  <div>
    <fairfarrenTree :list="list"/>
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
  }
}
</script>
