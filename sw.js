if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>n(e,o),t={module:{uri:o},exports:c,require:d};i[o]=Promise.all(s.map((e=>t[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.78c97fdd.js",revision:null},{url:"assets/vendor.647fa27a.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"ea89766923cbfc090614ae896840f8bb"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"image/icon-192x192.png",revision:"46948595f5d690b99fe96c851d3a6d7d"},{url:"image/icon-256x256.png",revision:"4e1c745c757f43e75eb9023a57c5a704"},{url:"image/icon-384x384.png",revision:"38731108a1999ac5912b1d89a48afe23"},{url:"image/icon-512x512.png",revision:"da69396cf8fd236fd3aad2a87b8c5778"},{url:"manifest.webmanifest",revision:"656dce0d850cfcc31442f81810673db8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
