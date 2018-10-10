# AnimatedText

## 目前已有的功能

1.  添加每个字的时间
2.  删除每个字的时间
3.  多行字
4.  是否再次执行
5.  删除前等待时间

## 示例

```html
<template>
  <fairfarrenAnimatedText :text="text" :addTime="100" :deleteTime="50" :again="true" textClass="animatedStyle" :wait="2000" :FSize="30"/>
</template>

<script>
  export default {
  data () {
    return {
      text: [
        'hello hello hellohellohellohello',
        'worldworldworldworldworldworldworld',
        '你好世界！你好世界！你好世界！你好世界！你好世界！',
        '世界说：为了生活！'
      ]
    }
  }
}
</script>
```

## API

> `text`必须为Array
>
> `addTime`和`deleteTime`需要为Nummber
>
> `textClass`可以给字体添加class类名。**注意：**`<style>`标签内的`scoped`属性
>
> `FSize`。最为了让删掉所有字符的时候，保留一个占位的元素，用了一个透明的标签。但是这就导致了开头没有对齐。所以选择了定义`FSize`，最小高度为1.5倍
>
> `height`，如果出现有换行的情况，从一排变成两排的时候，会出现下方元素被往下挤的情况。为了不出现这种抖动，可以根据实际情况来定义一下高度。但这并不是必须的。~~最先设计这个组件的时候，并没有考虑到有多行的情况，初衷是只有一行的展示~~

|     参数     |           说明           |    类型   | 可选值 |  默认值  |
| :--------: | :--------------------: | :-----: | :-: | :---: |
|    text    |         需要输入的文字        |  Array  |  -  |   -   |
|   addTime  |        输入每个字的时间        |  Number |  -  |  100  |
| deleteTime |        删除每个字的时间        |  Number |  -  |   50  |
|    again   |       输入完后是否从头再来       | Boolean |  -  | false |
|  textClass |       文字的class类名       |  String |  -  |   -   |
|    wait    |        删除字数前等待时间       |  Number |  -  |  1000 |
|    FSize   |      字体大小，1.5倍的行高      |  Number |  -  |   16  |
|   height   | 组件的高度，必须大于1.5倍的`FSize` |  Number |  -  |   -   |
