webpackJsonp([0],{Z2QH:function(t,e){},ic6H:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{list:[{text:"banner",path:"/banner"},{text:"card",path:"/card"},{text:"multipleSelect",path:"/multipleSelect"}],flag:!1,ulShow:!1}},methods:{changeFlag:function(){this.flag&&(this.ulShow=!this.ulShow)},windowWidth:function(){window.innerWidth<823?(this.flag=!0,this.ulShow=!1):(this.flag=!1,this.ulShow=!0)}},mounted:function(){var t=this;this.windowWidth(),window.addEventListener("resize",function(){t.windowWidth()})}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"catalog"}},[n("div",{staticClass:"text-center"},[t._m(0),t._v(" "),n("div",{on:{click:t.changeFlag}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.ulShow?n("ul",t._l(t.list,function(e,i){return n("li",{key:i,on:{click:t.changeFlag}},[n("router-link",{attrs:{to:e.path,"active-class":"chioseA"}},[t._v(t._s(e.text))])],1)})):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("a",{attrs:{href:"https://fairfarren.github.io",target:"_blank"}},[this._v("曼妥思的组件")])])}]};var s=n("VU/8")(i,a,!1,function(t){n("Z2QH")},"data-v-5894dbdc",null);e.default=s.exports}});
//# sourceMappingURL=0.ad44487436dec79c590f.js.map