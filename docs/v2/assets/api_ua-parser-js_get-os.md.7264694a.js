import{_ as s,c as a,o as n,N as l}from"./chunks/framework.6abe1570.js";const E=JSON.parse('{"title":"getOS(): IOS","description":"","frontmatter":{},"headers":[],"relativePath":"api/ua-parser-js/get-os.md","lastUpdated":1698751202000}'),o={name:"api/ua-parser-js/get-os.md"},p=l(`<h1 id="getos-ios" tabindex="-1"><code>getOS(): IOS</code> <a class="header-anchor" href="#getos-ios" aria-label="Permalink to &quot;\`getOS(): IOS\`&quot;">​</a></h1><p>Get operating system name &amp; version from user-agent string.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Result object is structured as follow:</span></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="name-string" tabindex="-1"><code>name:string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;\`name:string\`&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># List of possible values for \`os.name\`</span></span>
<span class="line"><span style="color:#FFCB6B;">AIX,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Amiga</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Android[-x86],</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Arch,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Bada,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BeOS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BlackBerry,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CentOS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Chromium</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OS,</span></span>
<span class="line"><span style="color:#FFCB6B;">Contiki,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Fedora,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Firefox</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FreeBSD,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Debian,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deepin,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DragonFly,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">elementary</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OS,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">Fuchsia,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Gentoo,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GhostBSD,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GNU,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Haiku,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HarmonyOS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HP-UX,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Hurd,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">iOS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Joli,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">KaiOS,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">Linpus,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Linspire,Linux,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Mac</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Maemo,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Mageia,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Mandriva,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Manjaro,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MeeGo,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Minix,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">Mint,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Morph</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NetBSD,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NetRange,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NetTV,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Nintendo,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OpenBSD,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OpenVMS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OS/</span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Palm,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">PC-BSD,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PCLinuxOS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Plan9,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PlayStation,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">QNX,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Raspbian,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RedHat,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RIM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Tablet</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OS,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">RISC</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Sabayon,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Sailfish,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SerenityOS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Series40,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Slackware,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Solaris,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SUSE,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Symbian,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">Tizen,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Ubuntu,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Unix,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VectorLinux,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Viera,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">watchOS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WebOS,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Windows</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Phone/Mobile</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">, </span></span>
<span class="line"><span style="color:#FFCB6B;">Zenwalk,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="version-string" tabindex="-1"><code>version:string</code> <a class="header-anchor" href="#version-string" aria-label="Permalink to &quot;\`version:string\`&quot;">​</a></h2><p>Determined dynamically</p><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> galaxytabs8 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> parser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(galaxytabs8)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOS</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// { name : &quot;Android&quot;, version : &quot;12&quot; }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9),e=[p];function r(t,c,C,y,D,A){return n(),a("div",null,e)}const d=s(o,[["render",r]]);export{E as __pageData,d as default};