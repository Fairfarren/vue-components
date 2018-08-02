# vue-components

[预览](https://fairfarren.github.io/vue-components/dist/index.html)

## 写在前面

是使用`vue-cli`脚手架搭建的

其实最先只是想做一些vue的组件，以后自己留着用的

然后发现，有些的步骤比较繁琐，所以用node写了一些自动化的东西

再后来，发现可以当做一个框架来用~~虽然有很多地方还需要优化，现在只有一个雏形~~

## 功能

### 新建页面

> $ yarn run page

**记得去`./src/views/catalog.vue`下添加左边的导航**

### 实时把`README.md`文件转成vue文件

> $ yarn run watchReadme

### 把单独的`README.md`文件转成vue文件

> $ node ./createReadmeVue/app.js

**执行哪个文件，需要进入`app.js`文件下修改名称**
