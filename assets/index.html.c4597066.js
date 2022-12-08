import{_ as p,r as e,o,c as i,b as s,d as n,a as l,e as a}from"./app.dbe36561.js";const c={},r=a(`<h1 id="node学习" tabindex="-1"><a class="header-anchor" href="#node学习" aria-hidden="true">#</a> node学习</h1><h2 id="起因" tabindex="-1"><a class="header-anchor" href="#起因" aria-hidden="true">#</a> 起因</h2><p>项目间隔摸鱼期，忽觉不可摆烂，需good good study, day day up，得人推荐，学习一下node + koa2，试着自己感受下写接口的魅力，于是，下面一个demo诞生了。</p><h2 id="demo介绍" tabindex="-1"><a class="header-anchor" href="#demo介绍" aria-hidden="true">#</a> demo介绍</h2><p>本人较好吃，自己写东西，第一个反应就是跟吃相关，于是，写了个美食记，可新增，可修改，可删除。看到/想到好吃的东西，暂时又吃不了的时候，可以加进去，有机会一一品尝，哪天不想吃了，就可以把它从清单里移除掉，毕竟，不吃就不长胖。言归正传，开始干活。</p><h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈" aria-hidden="true">#</a> 技术栈</h2><p>前端（Vue）+ 后端（node + koa2）+ 数据库（mongodb）</p><h2 id="前端" tabindex="-1"><a class="header-anchor" href="#前端" aria-hidden="true">#</a> 前端</h2><p>vue全家桶，axios，vant，scss，windicss</p><p>主体结构如下：</p><ul><li>src <ul><li>router</li><li>utils <ul><li>api.js</li></ul></li><li>views</li></ul></li></ul><p><strong>tips</strong>: 前端页面就是最最最寻常的Vue全家桶那套，本demo里不重要，重要的是写接口，读写数据库哎喂。</p><h2 id="后端" tabindex="-1"><a class="header-anchor" href="#后端" aria-hidden="true">#</a> 后端</h2><p>后端用的nodejs，框架用的koa2，这里用到的第三方库要说下的，不然会忘的。</p><p>koa-router： 路由</p><p>koa-bodyparser： 请求数据解析</p><p>koa-static：静态资源</p><p>koa-cors：跨域</p><p>mongoose：操作mongodb</p><p>busboy：解析req请求中的文件流</p><p>uuid：生成id</p><p>主体数据如下：</p><ul><li>server <ul><li>controllers（控制器，写接口操作数据库的）</li><li>models（数据库表结构）</li><li>routers（路由）</li><li>static（静态资源）</li><li>utils （工具类，我这里就一个上传文件upload.js）</li><li>app.js (入口文件)</li><li>config.js （配置文件）</li></ul></li></ul><p>这里额外记下路由吧，等会儿数据库写完了，就直接接接口了噻，想想还有点激动~</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义路由，routers文件夹下新建个foodList.js文件</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> foodList_controller <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./../controllers/foodList&#39;</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/foodList&#39;</span><span class="token punctuation">,</span> foodList_controller<span class="token punctuation">.</span>getList<span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/foodList/add&#39;</span><span class="token punctuation">,</span> foodList_controller<span class="token punctuation">.</span>addFood<span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/foodList/edit&#39;</span><span class="token punctuation">,</span> foodList_controller<span class="token punctuation">.</span>editFood<span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/foodList/detail&#39;</span><span class="token punctuation">,</span> foodList_controller<span class="token punctuation">.</span>foodDetail<span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/foodList/delete&#39;</span><span class="token punctuation">,</span> foodList_controller<span class="token punctuation">.</span>delFood<span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router

<span class="token comment">// 再整个index.js，统一管理，不需要在入口文件一个个引</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./../../config&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> foodList <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./foodList&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 接口统一加个/api前缀</span>
router<span class="token punctuation">.</span><span class="token function">prefix</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>apiPrefix<span class="token punctuation">)</span> 

router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>foodList<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> foodList<span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router

<span class="token comment">// 到这里就成了，可以对接口了哈</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2><p>这里用的mongodb，就是觉得名字好听，每次都能想起芒果，而我爱吃芒果~</p>`,27),u={href:"https://zhuanlan.zhihu.com/p/98916948",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>这里简单的记一下定义表结构跟增删改查。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//定义表结构，models文件夹下新建个foodList.js文件</span>
<span class="token keyword">const</span> Schema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema

<span class="token keyword">const</span> foodListSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">create_time</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">collection</span><span class="token operator">:</span> <span class="token string">&#39;foodList&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">versionKey</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;foodList&#39;</span><span class="token punctuation">,</span> foodListSchema<span class="token punctuation">)</span>

<span class="token comment">// 操作数据库，controllers文件夹下新建个foodList.js文件</span>

<span class="token comment">// 查询</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token keyword">await</span> foodList_model<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> req<span class="token punctuation">.</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>pageSize<span class="token punctuation">)</span>

<span class="token comment">// 新增</span>
<span class="token keyword">const</span> newFood <span class="token operator">=</span> <span class="token keyword">await</span> foodList_model<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token punctuation">,</span>
  create_time<span class="token punctuation">,</span>
  <span class="token operator">...</span>req
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 修改</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> foodList_model<span class="token punctuation">.</span><span class="token function">findOneAndUpdate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> req<span class="token punctuation">.</span>id
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  create_time<span class="token punctuation">,</span>
  <span class="token operator">...</span>req
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 删除</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> foodList_model<span class="token punctuation">.</span><span class="token function">findOneAndDelete</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> req<span class="token punctuation">.</span>id
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 其他用法可以看文档吼</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="成果" tabindex="-1"><a class="header-anchor" href="#成果" aria-hidden="true">#</a> 成果</h2><p>最后看一眼效果吧，就配了三张图，再找下去，就该打开某团了~</p><p><img src="https://pic8.58cdn.com.cn/nowater/webim/big/n_v2c8ad9686df1e4afe9ef985cb0981693e.png" alt="好吃的"></p>`,5);function k(v,b){const t=e("ExternalLinkIcon");return o(),i("div",null,[r,s("p",null,[n("我用的mongodb官方提供的免费云数据库的，"),s("a",u,[n("使用教程"),l(t)]),n("，这篇就说的很详细，跟着一步步来，你就拥有了你自己的云数据库，接下来就可以愉快的玩耍了。")]),d])}const h=p(c,[["render",k],["__file","index.html.vue"]]);export{h as default};
