
<template>
    <div class='markdown-body entry-content'>
        <h1>multipleSelect</h1>
<h2>目前有的功能</h2>
<ol>
<li>框中输入的文字</li>
<li>删除框中的文字</li>
<li>验证功能，验证的正则需要自己去写</li>
<li>验证不通过文字信息</li>
<li>控制宽度</li>
</ol>
<h2>示例</h2>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">template</span>&gt;
  &lt;<span class="pl-ent">div</span>&gt;
    &lt;<span class="pl-ent">fairfarrenMultipleSelect</span> <span class="pl-e">theKey</span>=<span class="pl-s"><span class="pl-pds">"</span>input01<span class="pl-pds">"</span></span> :<span class="pl-e">reg</span>=<span class="pl-s"><span class="pl-pds">"</span>mail<span class="pl-pds">"</span></span> <span class="pl-e">boxWidth</span>=<span class="pl-s"><span class="pl-pds">"</span>300px<span class="pl-pds">"</span></span>/&gt;
  &lt;/<span class="pl-ent">div</span>&gt;
&lt;/<span class="pl-ent">template</span>&gt;

&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">export</span> <span class="pl-c1">default</span> {</span>
<span class="pl-s1">  <span class="pl-en">data</span> () {</span>
<span class="pl-s1">    <span class="pl-k">return</span> {</span>
<span class="pl-s1">      list<span class="pl-k">:</span> [<span class="pl-c1">1</span>],</span>
<span class="pl-s1">      mobile<span class="pl-k">:</span> {</span>
<span class="pl-s1">        reg<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(((13<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">{1}</span>)<span class="pl-k">|</span>(15<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">{1}</span>)<span class="pl-k">|</span>(18<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">{1}</span>))<span class="pl-k">+</span><span class="pl-c1">\d</span><span class="pl-k">{8}</span>)<span class="pl-k">$</span><span class="pl-pds">/</span></span>,</span>
<span class="pl-s1">        text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>手机号不正确<span class="pl-pds">'</span></span></span>
<span class="pl-s1">      },</span>
<span class="pl-s1">      mail<span class="pl-k">:</span> {</span>
<span class="pl-s1">        reg<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">a-z0-9</span>]</span><span class="pl-k">+</span>(<span class="pl-c1">[<span class="pl-c1">.</span>_<span class="pl-cce">\\</span>-]</span><span class="pl-k">*</span><span class="pl-c1">[<span class="pl-c1">a-z0-9</span>]</span>)<span class="pl-k">*</span>@(<span class="pl-c1">[<span class="pl-c1">a-z0-9</span>]</span><span class="pl-k">+</span><span class="pl-c1">[-<span class="pl-c1">a-z0-9</span>]</span><span class="pl-k">*</span><span class="pl-c1">[<span class="pl-c1">a-z0-9</span>]</span><span class="pl-k">+</span><span class="pl-c1">.</span>)<span class="pl-k">{1,63}</span><span class="pl-c1">[<span class="pl-c1">a-z0-9</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,</span>
<span class="pl-s1">        text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>邮箱不正确<span class="pl-pds">'</span></span></span>
<span class="pl-s1">      }</span>
<span class="pl-s1">    }</span>
<span class="pl-s1">  }</span>
<span class="pl-s1">}</span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<blockquote>
<p>必须添加<code>theKey</code>字段，因为会去操作dom标签，让它去获取焦点</p>
<p><code>reg</code>就是正则验证和错误提示，可以不写。如果不写，则没有验证</p>
</blockquote>
<h2>接下来准备做的内容</h2>
<ul class="contains-task-list">
<li class="task-list-item">
<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 选择提示</p>
</li>
<li class="task-list-item">
<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 如果是邮箱选择，提示邮箱的尾缀</p>
</li>
<li class="task-list-item">
<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 动态添加选择提示</p>
</li>
</ul>
<h2>API</h2>
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
<td align="center">theKey</td>
<td align="center">input标签的ID</td>
<td align="center">String</td>
<td align="center">-</td>
<td align="center">-</td>
</tr>
<tr>
<td align="center">reg</td>
<td align="center">正则验证和错误提示</td>
<td align="center">Object</td>
<td align="center">-</td>
<td align="center">-</td>
</tr>
<tr>
<td align="center">boxWidth</td>
<td align="center">宽度控制，加上单位</td>
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
