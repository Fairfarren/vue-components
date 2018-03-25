# Banner

## 目前已有的功能

1. 自动确定高度
1. 控制轮播的时间
1. 左右按键，小红点选择
1. 鼠标拖动

## 示例
```html
  <fairfarrenBanner :dataList="dataList" timeOut="3000"/>

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
        }]
      }
    }
  }
  </script>
```

> `dataList`里面有两个字段，一个是图片地址，另一个是跳转的路径，可以是外部链接
>
> `timeOut`如果设置成`0`或者不写，则为没有自动轮播效果


|    参数    |   说明   |   类型   |  可选值  |  默认值  |
|:--------:|:------:|:------:|:-----:|:-----:|-----|
| dataList |  轮播的数据 | Object |   -   |   -   |
|  timeOut | 设定轮播时间 | String |   -   |   -   |
