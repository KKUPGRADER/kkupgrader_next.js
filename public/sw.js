if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"86167a16995ecff910461dd93056d9ef"},{url:"/Logo.svg",revision:"59eb6a56a8d02f00a63f7680acbe6727"},{url:"/Profile.svg",revision:"058c21fed3a534ac5437afaa549c4ead"},{url:"/_next/static/chunks/0b308cfb-d446dbb9206364b3.js",revision:"d446dbb9206364b3"},{url:"/_next/static/chunks/0c428ae2-71b74d9421cb21a3.js",revision:"71b74d9421cb21a3"},{url:"/_next/static/chunks/154-1c97aef1f56dc23e.js",revision:"1c97aef1f56dc23e"},{url:"/_next/static/chunks/1a48c3c1-7af99bc5e9f004bf.js",revision:"7af99bc5e9f004bf"},{url:"/_next/static/chunks/1bfc9850-390f91b31fdaf569.js",revision:"390f91b31fdaf569"},{url:"/_next/static/chunks/252f366e-fa447140264d6d85.js",revision:"fa447140264d6d85"},{url:"/_next/static/chunks/327-46c91b8f542f1184.js",revision:"46c91b8f542f1184"},{url:"/_next/static/chunks/6728d85a-4d12a1f2fc3faad5.js",revision:"4d12a1f2fc3faad5"},{url:"/_next/static/chunks/692-28c96980f6bc324a.js",revision:"28c96980f6bc324a"},{url:"/_next/static/chunks/719-15bced78e5d950a7.js",revision:"15bced78e5d950a7"},{url:"/_next/static/chunks/734-642ddcd45eec274b.js",revision:"642ddcd45eec274b"},{url:"/_next/static/chunks/78e521c3-24ca2ae6fb806ba9.js",revision:"24ca2ae6fb806ba9"},{url:"/_next/static/chunks/814c6784-38bd67a3fe6f31d4.js",revision:"38bd67a3fe6f31d4"},{url:"/_next/static/chunks/839-5667f5d413c22fc9.js",revision:"5667f5d413c22fc9"},{url:"/_next/static/chunks/865-a864dd673fb72a0d.js",revision:"a864dd673fb72a0d"},{url:"/_next/static/chunks/893-fc8cf4a9510b013a.js",revision:"fc8cf4a9510b013a"},{url:"/_next/static/chunks/911.c0e43c2da57df279.js",revision:"c0e43c2da57df279"},{url:"/_next/static/chunks/9b380ffa-8265a47a82380319.js",revision:"8265a47a82380319"},{url:"/_next/static/chunks/ae51ba48-24d7b3f0a4fa4af5.js",revision:"24d7b3f0a4fa4af5"},{url:"/_next/static/chunks/c31f1870-bb071f02e116f17b.js",revision:"bb071f02e116f17b"},{url:"/_next/static/chunks/d0c16330-df2b54ab83007bdb.js",revision:"df2b54ab83007bdb"},{url:"/_next/static/chunks/d64684d8-ec67d021dfbc3cce.js",revision:"ec67d021dfbc3cce"},{url:"/_next/static/chunks/d7eeaac4-c4eac0ed89378c59.js",revision:"c4eac0ed89378c59"},{url:"/_next/static/chunks/f70991a6.401a8b41209b923b.js",revision:"401a8b41209b923b"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-e57d6711555a8fc7.js",revision:"e57d6711555a8fc7"},{url:"/_next/static/chunks/pages/404-a80003ba8608712b.js",revision:"a80003ba8608712b"},{url:"/_next/static/chunks/pages/_app-6ff130fca32ce59b.js",revision:"6ff130fca32ce59b"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/about-70157b924e58ae45.js",revision:"70157b924e58ae45"},{url:"/_next/static/chunks/pages/blog-88dceb3ac2b72ee3.js",revision:"88dceb3ac2b72ee3"},{url:"/_next/static/chunks/pages/blog/posts/%5Bslug%5D-5a61f7d124897e45.js",revision:"5a61f7d124897e45"},{url:"/_next/static/chunks/pages/contact-11e03c699752ab8e.js",revision:"11e03c699752ab8e"},{url:"/_next/static/chunks/pages/dashboard-309eb1d9a034792f.js",revision:"309eb1d9a034792f"},{url:"/_next/static/chunks/pages/dashboard/admin-62b5039efbf8b7dd.js",revision:"62b5039efbf8b7dd"},{url:"/_next/static/chunks/pages/dashboard/admin/blog-d4f677c3e659cc82.js",revision:"d4f677c3e659cc82"},{url:"/_next/static/chunks/pages/dashboard/admin/blog/posts/%5BpostId%5D/edit-0614bc6b1e155709.js",revision:"0614bc6b1e155709"},{url:"/_next/static/chunks/pages/dashboard/admin/messages-0848af5f167f81a4.js",revision:"0848af5f167f81a4"},{url:"/_next/static/chunks/pages/dashboard/admin/users-5bfdb1447fe05493.js",revision:"5bfdb1447fe05493"},{url:"/_next/static/chunks/pages/dashboard/profile-6d8a84f18c0aaf9a.js",revision:"6d8a84f18c0aaf9a"},{url:"/_next/static/chunks/pages/dashboard/settings-603521b765ffc80e.js",revision:"603521b765ffc80e"},{url:"/_next/static/chunks/pages/index-165144f2808a5954.js",revision:"165144f2808a5954"},{url:"/_next/static/chunks/pages/login-6773960e55591a8c.js",revision:"6773960e55591a8c"},{url:"/_next/static/chunks/pages/pricing-9569fcd091520c37.js",revision:"9569fcd091520c37"},{url:"/_next/static/chunks/pages/privacy-2c47c08d7c044ff8.js",revision:"2c47c08d7c044ff8"},{url:"/_next/static/chunks/pages/signup-a3e4f1a05dd3c710.js",revision:"a3e4f1a05dd3c710"},{url:"/_next/static/chunks/pages/tools-d1f5ee65c897f465.js",revision:"d1f5ee65c897f465"},{url:"/_next/static/chunks/pages/tools/%5BtoolName%5D-beeb1655c55c4977.js",revision:"beeb1655c55c4977"},{url:"/_next/static/chunks/pages/tools/category/%5BcategoryName%5D-85cf144c1f7b37c8.js",revision:"85cf144c1f7b37c8"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f0f42d530c602199.js",revision:"f0f42d530c602199"},{url:"/_next/static/css/75d936ebf23b1774.css",revision:"75d936ebf23b1774"},{url:"/_next/static/css/7d5c9d8c6cb3b74a.css",revision:"7d5c9d8c6cb3b74a"},{url:"/_next/static/css/90390ef1eee22bb4.css",revision:"90390ef1eee22bb4"},{url:"/_next/static/css/e25a9bb4c587fa9c.css",revision:"e25a9bb4c587fa9c"},{url:"/_next/static/media/login-illustration.dcf25a12.webp",revision:"5010a6a05b741864c9f7a1afde2a9a0d"},{url:"/_next/static/rk89FRRQQSpYtTvbmn5MB/_buildManifest.js",revision:"c4c42905404327969a06bc1c30368303"},{url:"/_next/static/rk89FRRQQSpYtTvbmn5MB/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/backgrounds/dashboard.jpg",revision:"b5f593c89f21e0f0305c4c64e662ad30"},{url:"/assets/images/Blog.svg",revision:"2962e4aa54064f2de318bd279f5d695c"},{url:"/assets/images/Thumbs.db",revision:"05e59e39f49acc13786671a1a0948b2d"},{url:"/assets/images/blob.svg",revision:"2962e4aa54064f2de318bd279f5d695c"},{url:"/assets/images/chevron-down.svg",revision:"36438d1b748c30a0ac25821f6d40f855"},{url:"/assets/images/chevron-right.svg",revision:"2f4e73f0f79c7296dcbe8d8023aa947d"},{url:"/assets/images/hero-banner.jpg",revision:"7565f46c11ebf33f284ef55335912f65"},{url:"/assets/images/hero-shape.svg",revision:"33ac34450e08a4f9f549353c10920771"},{url:"/assets/images/icon-1.svg",revision:"f5455a0df37f59a701c6b548d9920e2e"},{url:"/assets/images/icon-2.svg",revision:"79b0f69f6938b07a9720de9a992f9d34"},{url:"/assets/images/icon-3.svg",revision:"fc6272c040975b6c843bd5cae17b0a24"},{url:"/assets/images/icon-4.svg",revision:"9c6701a29620e554a2d82cb55bf1f01e"},{url:"/assets/images/icon-5.svg",revision:"c4a7504a9fdd722542cf8cc994367ebf"},{url:"/assets/images/illustration_dashboard.png",revision:"e5e83bd3d3d0c3c5846d159c4369fc60"},{url:"/assets/images/me.png",revision:"ee5eca5034a922cab2537ac3c90fb7e6"},{url:"/assets/images/metaverse-technology.webp",revision:"904062f272f84b84d6f3a5c73d9e3545"},{url:"/assets/images/project-1.png",revision:"5c490b599263d6dc7581cb1d66ed8e20"},{url:"/assets/images/project-2.png",revision:"b34b60cd423b4184fbc4ec7a27577307"},{url:"/assets/images/project-3.png",revision:"5329136f13cfec5602696e65f4f49bd4"},{url:"/assets/images/project-4.png",revision:"8883d5a2f89d04a1b079e352a0904c0f"},{url:"/assets/images/result-site.png",revision:"560225fe749e3fadd73cd96332524467"},{url:"/assets/images/result-site.webp",revision:"0ebbb2dbc2aaf58fec096abac64b4093"},{url:"/assets/images/web-design.svg",revision:"0a6b1c666fff8dd071be1a3465d8580e"},{url:"/assets/images/web-tools.svg",revision:"389e07c0126ec5656b554aa73a6e45a4"},{url:"/assets/images/web-ui-component-library.gif",revision:"5b9cac4c11405eeeb9b27e2701076a9b"},{url:"/assets/svg-images/about-us.svg",revision:"25a43f1e61fac642d8159356983a7b1f"},{url:"/assets/svg-images/blogging.svg",revision:"af082c875a8e43af01d0cd8e44ada03e"},{url:"/assets/svg-images/firebase.svg",revision:"007bad50400405f896843d18f305d894"},{url:"/assets/svg-images/hero-back-illustration.svg",revision:"7eb920ca0b4ea593a1129dd3ed372b8c"},{url:"/assets/svg-images/hero-top-illustration.svg",revision:"aa0f14cb87e54d157f8fa6dd8b3308f4"},{url:"/assets/svg-images/meta-tag-generator.svg",revision:"577dadcb0d2f3766001242750a478e7d"},{url:"/assets/svg-images/projects.svg",revision:"23c14a6e5bc501b6beb47972e6372eeb"},{url:"/assets/svg-images/tools.svg",revision:"ad303c15ae24df0b217be4354635ba43"},{url:"/contact.svg",revision:"16e65ef6889eef923811f1ef18b2bd18"},{url:"/favicon.ico",revision:"2e752a0e74c2651b822d5e537377e950"},{url:"/fonts.css",revision:"478c447ceacd389967ec8f0b8223d32c"},{url:"/kkupgrader.svg",revision:"058c21fed3a534ac5437afaa549c4ead"},{url:"/logo192.png",revision:"d1c9dd3b7427b71eb77a537c0167432c"},{url:"/logo512.png",revision:"89d4ba5cd4bfe6799780ebfbbd34ba4b"},{url:"/manifest.json",revision:"ec4af12daa21ce164dad4485b481b02b"},{url:"/nexoNauts.svg",revision:"482dd661db239ff6183b8b1ea4f2075b"},{url:"/robots.txt",revision:"cf9e4e8b7d34be1a1d23c231a6113254"},{url:"/sitemap.xml",revision:"3d180b6b34d48ad3c7dc998b0a94aa64"},{url:"/textLogo.svg",revision:"b0a4b38c408cdecf0a2bc740e9c40527"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
