<template>
  <div>
    <fairfarrenMultipleSelect theKey="input01" :ajaxList="list" :reg="mail"/>
    <br>
    <multipleSelectReadme />
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
      },
      mail: {
        reg: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
        text: '邮箱不正确'
      }
    }
  },
  components: {
    multipleSelectReadme: () => import('@/views/box/multipleSelect/multipleSelectReadme.vue')
  }
}
</script>
