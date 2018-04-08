# multipleSelect

## 目前有的功能

1.  框中输入的文字
2.  删除框中的文字
3.  验证功能，验证的正则需要自己去写
4.  验证不通过文字信息

## 示例

```html
<template>
  <div>
    <fairfarrenMultipleSelect theKey="input01" :reg="mail"/>
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
  }
}
</script>
```

> 必须添加`theKey`字段，因为会去操作dom标签，让它去获取焦点
>
> `reg`就是正则验证和错误提示，可以不写。如果不写，则没有验证

## 接下来准备做的内容

-   [ ] 选择提示

-   [ ] 如果是邮箱选择，提示邮箱的尾缀

-   [ ] 动态添加选择提示

## API

|   参数   |     说明     |   类型   | 可选值 | 默认值 |
| :----: | :--------: | :----: | :-: | :-: |
| theKey | input标签的ID | String |  -  |  -  |
|   reg  |  正则验证和错误提示 | Object |  -  |  -  |
