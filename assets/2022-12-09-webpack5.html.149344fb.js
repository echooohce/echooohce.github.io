import{_ as n,o as s,c as a,a as p}from"./app.38775100.js";const e={},t=p(`<p>\u4E4B\u524D\u4ECE\u6765\u6CA1\u6709\u8BA4\u771F\u4E86\u89E3\u8FC7webpack\uFF0C\u6BCF\u6B21\u90FD\u662F\u811A\u624B\u67B6\u4E00\u5957\u4E0B\u6765\u4E86\uFF0C\u4E5F\u6CA1\u5C1D\u8BD5\u8FC7\u6539\u4E9B\u4EC0\u4E48\u914D\u7F6E\u5565\u7684\uFF0C\u8FD9\u6B21\u5C31\u597D\u597D\u5B66\u5B66\u5427\u3002</p><h1 id="webpack5-\u591A\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#webpack5-\u591A\u5165\u53E3" aria-hidden="true">#</a> webpack5 \u591A\u5165\u53E3</h1><h2 id="\u7528\u5230\u7684loader" tabindex="-1"><a class="header-anchor" href="#\u7528\u5230\u7684loader" aria-hidden="true">#</a> \u7528\u5230\u7684loader</h2><ul><li>babel-loader</li><li>sass-loader css-loader style-loader</li></ul><h2 id="\u7528\u5230\u7684plugin" tabindex="-1"><a class="header-anchor" href="#\u7528\u5230\u7684plugin" aria-hidden="true">#</a> \u7528\u5230\u7684plugin</h2><ul><li>clean-webpack-plugin\uFF08\u6E05\u7A7A\u8F93\u51FA\u6587\u4EF6\u5939\uFF09</li><li>mini-css-extract-plugin\uFF08\u5408\u5E76\u6240\u6709css\u5230\u4E00\u4E2Acss\u6587\u4EF6\uFF09</li><li>html-webpack-plugin (\u751F\u6210\u4E00\u4E2Ahtml\uFF0C\u5E76\u4E14\u5F15\u5165\u6253\u5305\u540E\u7684js)</li><li>copy-webpack-plugin\uFF08\u62F7\u8D1D\u9759\u6001\u8D44\u6E90\uFF09</li></ul><p>\u6211\u597D\u50CF\u5199\u4E86\u4E9B\u5E9F\u8BDD\uFF0C\u8FD9\u4E9B\u6709\u5565\u597D\u8BB2\u7684\u5462</p><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2><h3 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h3><p>npm init &amp;&amp; npm i -D webpack webpack-cli</p><h3 id="\u5177\u4F53\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5177\u4F53\u4EE3\u7801" aria-hidden="true">#</a> \u5177\u4F53\u4EE3\u7801</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> batch<span class="token punctuation">.</span>entry<span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u914D\u7F6E\u5165\u53E3\u6A21\u677F</span>
    <span class="token operator">...</span>batch<span class="token punctuation">.</span>entryTemplate<span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/[name]/[name].[hash].css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CopyPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">patterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">commons</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;initial&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;commons&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(js|jsx)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>stylesHandler<span class="token punctuation">,</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>stylesHandler<span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;static/[hash][ext][query]&#39;</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> <a href="https://segmentfault.com/a/1190000040392408" target="_blank" rel="noopener noreferrer">\u53C2\u8003\u94FE\u63A5</a></h2>`,13),o=[t];function l(c,r){return s(),a("div",null,o)}var u=n(e,[["render",l],["__file","2022-12-09-webpack5.html.vue"]]);export{u as default};