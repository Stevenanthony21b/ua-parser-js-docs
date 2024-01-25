import{_ as s,c as n,o as a,N as e}from"./chunks/framework.6abe1570.js";const A=JSON.parse('{"title":"getEngine(): IEngine","description":"","frontmatter":{},"headers":[],"relativePath":"api/ua-parser-js/get-engine.md","lastUpdated":1698751202000}'),l={name:"api/ua-parser-js/get-engine.md"},o=e('<h1 id="getengine-iengine" tabindex="-1"><code>getEngine(): IEngine</code> <a class="header-anchor" href="#getengine-iengine" aria-label="Permalink to &quot;`getEngine(): IEngine`&quot;">​</a></h1><p>Get layout rendering engine name &amp; version from user-agent string.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Result object is structured as follow:</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="name-string" tabindex="-1"><code>name:string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;`name:string`&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># List of possible value of `engine.name`</span></span>\n<span class="line"><span style="color:#FFCB6B;">Amaya,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Blink,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">EdgeHTML,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Flow,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Gecko,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Goanna,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">iCab,</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#FFCB6B;">KHTML,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">LibWeb,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Links,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Lynx,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NetFront,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NetSurf,</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#FFCB6B;">Presto,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Tasman,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Trident,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">w3m,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WebKit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="version-string" tabindex="-1"><code>version:string</code> <a class="header-anchor" href="#version-string" aria-label="Permalink to &quot;`version:string`&quot;">​</a></h2><p>Determined dynamically</p><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> operamini </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> parser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(operamini)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getEngine</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// { name : &quot;Presto&quot;, version : &quot;2.5.25&quot; }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',9),p=[o];function r(t,c,i,y,C,D){return a(),n("div",null,p)}const m=s(l,[["render",r]]);export{A as __pageData,m as default};