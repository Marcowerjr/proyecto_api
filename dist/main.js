!function(e){var n={};function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)r.d(t,a,function(n){return e[n]}.bind(null,a));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,r){"use strict";r.r(n);var t=()=>'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1> <a href=\'/proyecto_api\'> API Simpsons </a>  </h1>\n            </div>\n            <div class="Header-nav">\n                <a href="/proyecto_api"/>\n                    Recargar personaje\n                </a>\n            </div>\n        </div>\n    ';var a=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[0]||"/";var o=async()=>{try{const e=await fetch("https://thesimpsonsquoteapi.glitch.me/quotes/");return(await e.json())[0]}catch(e){console.log("fetch error",e)}};var c=async()=>{a();const e=await o(0);return`\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="${e.image}" alt="${e.character}">\n        <h2>${e.character}</h2>\n      </article>\n      <article class="Characters-card">\n        <h3>Nombre: <span>${e.character}</span></h3>\n        <h3>Frase célebre: <span>${e.quote}</span></h3>\n      </article>\n    </div>\n  `};var i=e=>{if(e.length<=3){return"/"===e?e:"/"}return"/"+e};var s=async()=>{const e=document.getElementById("Header"),n=document.getElementById("content");e.innerHTML=await t();let r=a();await i(r);n.innerHTML=await c()};window.addEventListener("load",s),window.addEventListener("hashchange",s)}]);
