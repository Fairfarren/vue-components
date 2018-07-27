
<template>
    <div class='markdown-body entry-content'>
        <h1>Banner</h1>
<h2>目前已有的功能</h2>
<ol>
<li>自动确定高度</li>
<li>控制轮播的时间</li>
<li>左右按键，小红点选择</li>
<li>鼠标拖动</li>
<li>手指拖动</li>
</ol>
<h2>示例</h2>
<div class="highlight highlight-text-html-basic"><pre>  &lt;<span class="pl-ent">fairfarrenBanner</span> :<span class="pl-e">dataList</span>=<span class="pl-s"><span class="pl-pds">"</span>dataList<span class="pl-pds">"</span></span> <span class="pl-e">timeOut</span>=<span class="pl-s"><span class="pl-pds">"</span>3000<span class="pl-pds">"</span></span>/&gt;

  &lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">  <span class="pl-k">export</span> <span class="pl-c1">default</span> {</span>
<span class="pl-s1">    <span class="pl-en">data</span> () {</span>
<span class="pl-s1">      <span class="pl-k">return</span> {</span>
<span class="pl-s1">        dataList<span class="pl-k">:</span> [{</span>
<span class="pl-s1">          img<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>https://i.loli.net/2018/03/25/5ab75a03c5ee2.jpeg<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">          path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>https://www.baidu.com<span class="pl-pds">'</span></span></span>
<span class="pl-s1">        }, {</span>
<span class="pl-s1">          img<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>https://i.loli.net/2018/03/25/5ab75a0538920.jpeg<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">          path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/card<span class="pl-pds">'</span></span></span>
<span class="pl-s1">        }, {</span>
<span class="pl-s1">          img<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>https://i.loli.net/2018/03/25/5ab75a0f40956.jpeg<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">          path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/hello<span class="pl-pds">'</span></span></span>
<span class="pl-s1">        }, {</span>
<span class="pl-s1">          img<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>https://i.loli.net/2018/03/25/5ab75a130047b.jpg<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">          path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/home<span class="pl-pds">'</span></span></span>
<span class="pl-s1">        }, {</span>
<span class="pl-s1">          img<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>https://i.loli.net/2018/03/25/5ab75a1351249.jpeg<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">          path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>http://www.google.com<span class="pl-pds">'</span></span></span>
<span class="pl-s1">        }, {</span>
<span class="pl-s1">          img<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>https://i.loli.net/2018/03/25/5ab75a13f22d6.jpg<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">          path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>asdfasdf<span class="pl-pds">'</span></span></span>
<span class="pl-s1">        }]</span>
<span class="pl-s1">      }</span>
<span class="pl-s1">    }</span>
<span class="pl-s1">  }</span>
<span class="pl-s1">  </span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<blockquote>
<p><code>dataList</code>里面有两个字段，一个是图片地址，另一个是跳转的路径，可以是外部链接</p>
<p><code>timeOut</code>如果设置成<code>0</code>或者不写，则为没有自动轮播效果</p>
</blockquote>
<table>
<thead>
<tr>
<th align="center">参数</th>
<th align="center">说明</th>
<th align="center">类型</th>
<th align="center">可选值</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">dataList</td>
<td align="center">轮播的数据</td>
<td align="center">Object</td>
<td align="center">-</td>
<td align="center">-</td>
</tr>
<tr>
<td align="center">timeOut</td>
<td align="center">设定轮播时间</td>
<td align="center">String</td>
<td align="center">-</td>
<td align="center">-</td>
</tr></tbody></table>
    </div>
</template>

<script>
export default {

}
</script>
