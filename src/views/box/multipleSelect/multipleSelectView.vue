<template>
  <div>
    <fairfarrenMultipleSelect theKey="input01" :list="list" :reg="mobile"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1],
      mobile: {
        reg: /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
        text: '手机号不正确'
      }
    }
  }
}
</script>
