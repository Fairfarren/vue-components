<template>
<div class='markdown-body entry-content'>
  <h1>AnimatedText</h1>
<h2>目前已有的功能</h2>
<ol>
<li>添加每个字的时间</li>
<li>删除每个字的时间</li>
<li>多行字</li>
<li>是否再次执行</li>
<li>删除前等待时间</li>
</ol>
<h2>示例</h2>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">template</span>&gt;
  &lt;<span class="pl-ent">fairfarrenAnimatedText</span> <span class="pl-e">:text</span>=<span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">:addTime</span>=<span class="pl-s"><span class="pl-pds">"</span>100<span class="pl-pds">"</span></span> <span class="pl-e">:deleteTime</span>=<span class="pl-s"><span class="pl-pds">"</span>50<span class="pl-pds">"</span></span> <span class="pl-e">:again</span>=<span class="pl-s"><span class="pl-pds">"</span>true<span class="pl-pds">"</span></span> <span class="pl-e">textClass</span>=<span class="pl-s"><span class="pl-pds">"</span>animatedStyle<span class="pl-pds">"</span></span> <span class="pl-e">:wait</span>=<span class="pl-s"><span class="pl-pds">"</span>2000<span class="pl-pds">"</span></span> <span class="pl-e">:FSize</span>=<span class="pl-s"><span class="pl-pds">"</span>30<span class="pl-pds">"</span></span>/&gt;
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
<span class="pl-s1"></span>&lt;/<span class="pl-ent">script</span>&gt;</pre></div>
<h2>API</h2>
<blockquote>
<p><code>text</code>必须为Array</p>
<p><code>addTime</code>和<code>deleteTime</code>需要为Nummber</p>
<p><code>textClass</code>可以给字体添加class类名。<strong>注意：</strong><code>&lt;style&gt;</code>标签内的<code>scoped</code>属性</p>
<p><code>FSize</code>。最为了让删掉所有字符的时候，保留一个占位的元素，用了一个透明的标签。但是这就导致了开头没有对齐。所以选择了定义<code>FSize</code>，最小高度为1.5倍</p>
<p><code>height</code>，如果出现有换行的情况，从一排变成两排的时候，会出现下方元素被往下挤的情况。为了不出现这种抖动，可以根据实际情况来定义一下高度。但这并不是必须的。<del>最先设计这个组件的时候，并没有考虑到有多行的情况，初衷是只有一行的展示</del></p>
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
<td align="center">text</td>
<td align="center">需要输入的文字</td>
<td align="center">Array</td>
<td align="center">-</td>
<td align="center">-</td>
</tr>
<tr>
<td align="center">addTime</td>
<td align="center">输入每个字的时间</td>
<td align="center">Number</td>
<td align="center">-</td>
<td align="center">100</td>
</tr>
<tr>
<td align="center">deleteTime</td>
<td align="center">删除每个字的时间</td>
<td align="center">Number</td>
<td align="center">-</td>
<td align="center">50</td>
</tr>
<tr>
<td align="center">again</td>
<td align="center">输入完后是否从头再来</td>
<td align="center">Boolean</td>
<td align="center">-</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">textClass</td>
<td align="center">文字的class类名</td>
<td align="center">String</td>
<td align="center">-</td>
<td align="center">-</td>
</tr>
<tr>
<td align="center">wait</td>
<td align="center">删除字数前等待时间</td>
<td align="center">Number</td>
<td align="center">-</td>
<td align="center">1000</td>
</tr>
<tr>
<td align="center">FSize</td>
<td align="center">字体大小，1.5倍的行高</td>
<td align="center">Number</td>
<td align="center">-</td>
<td align="center">16</td>
</tr>
<tr>
<td align="center">height</td>
<td align="center">组件的高度，必须大于1.5倍的<code>FSize</code></td>
<td align="center">Number</td>
<td align="center">-</td>
<td align="center">-</td>
</tr></tbody></table>
</div>
</template>

<script>
export default {
}
</script>
