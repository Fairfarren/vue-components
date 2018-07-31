<template>
<div class='markdown-body entry-content'>
    <h1>AnimatedText</h1>
<h2>目前已有的功能</h2>
<ol>
<li>添加字数的时间</li>
<li>删除字数的时间</li>
<li>多行字</li>
<li>是否再次执行</li>
</ol>
<h2>示例</h2>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">template</span>&gt;
  &lt;<span class="pl-ent"><span class="pl-ii">fairfarrenAnimatedText</span></span> <span class="pl-e">:text</span>=<span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">:addTime</span>=<span class="pl-s"><span class="pl-pds">"</span>100<span class="pl-pds">"</span></span> <span class="pl-e">:deleteTime</span>=<span class="pl-s"><span class="pl-pds">"</span>50<span class="pl-pds">"</span></span> <span class="pl-e">:again</span>=<span class="pl-s"><span class="pl-pds">"</span>true<span class="pl-pds">"</span></span> <span class="pl-e">textClass</span>=<span class="pl-s"><span class="pl-pds">"</span>animatedStyle<span class="pl-pds">"</span></span>/&gt;
&lt;/<span class="pl-ent">template</span>&gt;

&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">  <span class="pl-k">export</span> <span class="pl-c1">default</span> {</span>
<span class="pl-s1">  <span class="pl-en">data</span> () {</span>
<span class="pl-s1">    <span class="pl-k">return</span> {</span>
<span class="pl-s1">      text<span class="pl-k">:</span> [</span>
<span class="pl-s1">        <span class="pl-s"><span class="pl-pds">'</span>hello hello hellohellohellohello<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">        <span class="pl-s"><span class="pl-pds">'</span>worldworldworldworldworldworldworld<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">        <span class="pl-s"><span class="pl-pds">'</span>你好世界！你好世界！你好世界！你好世界！你好世界！<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">        <span class="pl-s"><span class="pl-pds">'</span>世界说：为了生活！<span class="pl-pds">'</span></span></span>
<span class="pl-s1">      ]</span>
<span class="pl-s1">    }</span>
<span class="pl-s1">  }</span>
<span class="pl-s1">}</span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<blockquote>
<p><code>text</code>必须为Array</p>
<p><code>addTime</code>和<code>deleteTime</code>需要为Nummber</p>
<p><code>textClass</code>可以给字体添加class类名。<strong>注意：</strong><code>&lt;style&gt;</code>标签内的<code>scoped</code>属性。</p>
</blockquote>
<table>
<thead>
<tr>
<th align="center">参数</th>
<th align="center">说明</th>
<th align="center">类型</th>
<th align="center">可选值</th>
<th align="center">默认值</th>
<th align="center"></th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">text</td>
<td align="center">需要输入的文字</td>
<td align="center">Array</td>
<td align="center">-</td>
<td align="center">-</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">addTime</td>
<td align="center">输入每个字的时间</td>
<td align="center">Number</td>
<td align="center">-</td>
<td align="center">100</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">deleteTime</td>
<td align="center">删除每个字的时间</td>
<td align="center">Number</td>
<td align="center">-</td>
<td align="center">50</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">again</td>
<td align="center">输入完后是否从头再来</td>
<td align="center">Boolean</td>
<td align="center">-</td>
<td align="center">false</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">textClass</td>
<td align="center">文字的class类名</td>
<td align="center">String</td>
<td align="center">-</td>
<td align="center">-</td>
<td align="center"></td>
</tr></tbody></table>
</div>
</template>

<script>
export default {

}
</script>
