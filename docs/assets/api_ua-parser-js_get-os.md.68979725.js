import{_ as s,c as a,o as n,N as e}from"./chunks/framework.2ea5d489.js";const u=JSON.parse('{"title":"getOS(): IOS","description":"","frontmatter":{},"headers":[],"relativePath":"api/ua-parser-js/get-os.md","lastUpdated":1719115561000}'),l={name:"api/ua-parser-js/get-os.md"},o=e('<h1 id="getos-ios" tabindex="-1"><code>getOS(): IOS</code> <a class="header-anchor" href="#getos-ios" aria-label="Permalink to &quot;`getOS(): IOS`&quot;">​</a></h1><p>Get operating system name &amp; version from user-agent string.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Result object is structured as follow:</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="name-string" tabindex="-1"><code>name?: string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;`name?: string`&quot;">​</a></h2><ul><li><a href="/list/os/name.html">List of possible <code>os.name</code></a></li></ul><h2 id="version-string" tabindex="-1"><code>version?: string</code> <a class="header-anchor" href="#version-string" aria-label="Permalink to &quot;`version?: string`&quot;">​</a></h2><p>Determined dynamically</p><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> galaxytabs8 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> parser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(galaxytabs8)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOS</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// { name : &quot;Android&quot;, version : &quot;12&quot; }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',9),p=[o];function t(r,c,i,d,y,m){return n(),a("div",null,p)}const D=s(l,[["render",t]]);export{u as __pageData,D as default};