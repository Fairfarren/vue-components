<template>
  <div>
    <fairfarrenMultipleSelect theKey="input01" :list="list"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7132, 8, 9, 0, 1, 2]
    }
  }
}
</script>
