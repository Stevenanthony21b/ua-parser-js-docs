import{_ as s,c as n,o as a,N as l}from"./chunks/framework.2ea5d489.js";const C=JSON.parse('{"title":"Extensions Submodule","description":"","frontmatter":{},"headers":[],"relativePath":"api/submodules/extensions/overview.md","lastUpdated":1717860131000}'),e={name:"api/submodules/extensions/overview.md"},o=l(`<h1 id="extensions-submodule" tabindex="-1">Extensions Submodule <a class="header-anchor" href="#extensions-submodule" aria-label="Permalink to &quot;Extensions Submodule&quot;">​</a></h1><h3 id="ua-parser-js-extensions" tabindex="-1"><code>&#39;ua-parser-js/extensions&#39;</code> <a class="header-anchor" href="#ua-parser-js-extensions" aria-label="Permalink to &quot;\`&#39;ua-parser-js/extensions&#39;\`&quot;">​</a></h3><h2 id="list-of-built-in-extensions" tabindex="-1">List of Built-in Extensions: <a class="header-anchor" href="#list-of-built-in-extensions" aria-label="Permalink to &quot;List of Built-in Extensions:&quot;">​</a></h2><ul><li><a href="./clis.html">CLIs ↗</a></li><li><a href="./crawlers.html">Crawlers ↗</a></li><li><a href="./extra-devices.html">ExtraDevices ↗</a></li><li><a href="./emails.html">Emails ↗</a></li><li><a href="./fetchers.html">Fetchers ↗</a></li><li><a href="./inapps.html">InApps ↗</a></li><li><a href="./media-players.html">MediaPlayers ↗</a></li><li><a href="./modules.html">Modules ↗</a></li></ul><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Crawlers</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CLIs</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Emails</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ua-parser-js/extensions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> googleBot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Googlebot-Video/1.0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> facebookBot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Mozilla/5.0 (compatible; FacebookBot/1.0; +https://developers.facebook.com/docs/sharing/webmasters/facebookbot/)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> wget </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Wget/1.21.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    try extends parser with Emails extension</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> emailParser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(Emails)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(emailParser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setUA</span><span style="color:#A6ACCD;">(thunderbird)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBrowser</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {name: &quot;Thunderbird&quot;, version: &quot;78.13.0&quot;, major: &quot;78&quot;, type: &quot;email&quot;});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    try merging multiple extensions</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> crawlerAndCLIParser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">browser </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">Crawlers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">browser</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">CLIs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">browser]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// or simply:</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> crawlerAndCLIParser2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">([Crawlers</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> CLIs])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(crawlerAndCLIParser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setUA</span><span style="color:#A6ACCD;">(wget)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBrowser</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {name: &quot;Wget&quot;, version: &quot;1.21.1&quot;, major: &quot;1&quot;, type:&quot;cli&quot;});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(crawlerAndCLIParser2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setUA</span><span style="color:#A6ACCD;">(facebookBot)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBrowser</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {name: &quot;FacebookBot&quot;, version: &quot;1.0&quot;, major: &quot;1&quot;, type:&quot;bot&quot;});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,6),p=[o];function r(t,c,i,y,D,A){return a(),n("div",null,p)}const u=s(e,[["render",r]]);export{C as __pageData,u as default};