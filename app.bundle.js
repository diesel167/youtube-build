!function(t){var n={};function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(i,r,function(n){return t[n]}.bind(null,r));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=7)}([function(t,n){t.exports="data:image/jpeg;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICI2Y2EwZmFjYjdjODAyMjkzNmFlNTQxMTZkNGUzYjliMy5qcGVnIjs="},function(t,n,e){var i=e(2);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(5)(i,r);i.locals&&(t.exports=i.locals)},function(t,n,e){n=t.exports=e(3)(!1);var i=e(4),r=i(e(0)),o=i(e(0));n.push([t.i,"body{\n    text-align: center;\n    font-family: Arial, sans-serif;\n    transition:all .1s ease-in;\n}\n\n#searchField{\n    width: 50%;\n    border-radius: 10px;\n    height: 30px;\n    outline: none;\n    font-size: 1.5em;\n    padding-left: 20px;\n}\n\n#searchField:focus{\n    background-color: rgba(91, 166, 95, 0.84);\n}\n\n#searchField:before{\n    background-image: url("+r+");\n}\n\n#container{\n    width: 90%;\n    margin: auto;\n    height: 400px;\n}\n\n#list {\n    position: relative;\n    width: 100%;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    white-space: nowrap;\n    transition: all 0.2s;\n    will-change: transform;\n    cursor: pointer;\n\n}\n\n\n.item {\n    position: relative;\n    display: inline-block;\n    padding-top: 20px;\n    background: skyblue;\n    height: 300px;\n    width: 20%;\n    margin-left: 2.5%;\n    margin-right: 2.5%;\n    margin-top: 70px;\n    transition: all 0.2s;\n}\n.item:hover{\n    transform: scale(1.05);\n}\n.item:hover .preview{\n    transform: scale(.9) rotate(10deg);\n    transition: all 0.2s;\n}\n.active {\n    background: rgba(255,255,255,0.3);\n    cursor: grabbing !important;\n    cursor: -webkit-grabbing;\n\n}\n\n#list::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n}\n\n\n.preview{\n    position: absolute;\n    top: 30px;\n    height: 129px;\n    width: 100%;\n    z-index: 50;\n    background-position: 0 -28px;\n    background-size: 100%;\n}\n\n\n.title{\n    position: relative;\n    padding:10px;\n    z-index: 70 !important;\n    background-color: yellow;\n    font-weight: 700;\n    top: 47px;\n    overflow:hidden;\n    text-overflow: ellipsis;\n}\n\n\n.channel{\n    position: relative;\n    z-index: 70 !important;\n    font-weight: 700;\n    top: 140px;\n}\n\n.views{\n    position: relative;\n    z-index: 70 !important;\n    font-weight: 700;\n    top: 140px;\n}\n\n.views:before{\n    content:'';\n    display: block;\n    width:25px;\n    height:25px;\n    position:absolute;\n    z-index: 70 !important;\n    background-size: 100%;\n    background: url("+o+") 0 50px;\n}\n\na{\n    color:black;\n}\na:hover{\n    color: #8172f9;\n    transition: .1s ease-in;\n}\n\n.date{\n    position: relative;\n    z-index: 70 !important;\n    font-weight: 700;\n    top: 140px;\n}\n\n.description{\n    position: relative;\n    padding:0 10px;\n    z-index: 70 !important;\n    font-size: .6em;\n    top: 140px;\n    height: 55px;\n    overflow: hidden;\n    white-space: initial;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 5;\n    -webkit-box-orient: vertical;\n    text-align: justify;\n}\n",""])},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[e].concat(o).concat([r]).join("\n")}var s;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];null!=s[0]&&i[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),n.push(s))}},n}},function(t,n,e){"use strict";t.exports=function(t,n){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||n?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,n,e){var i,r,o={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),a=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var i=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}n[t]=i}return n[t]}}(),c=null,l=0,u=[],d=e(6);function p(t,n){for(var e=0;e<t.length;e++){var i=t[e],r=o[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(b(i.parts[s],n))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(b(i.parts[s],n));o[i.id]={id:i.id,refs:1,parts:a}}}}function f(t,n){for(var e=[],i={},r=0;r<t.length;r++){var o=t[r],s=n.base?o[0]+n.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):e.push(i[s]={id:s,parts:[a]})}return e}function h(t,n){var e=a(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===t.insertAt)i?i.nextSibling?e.insertBefore(n,i.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),u.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,e);e.insertBefore(n,r)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=u.indexOf(t);n>=0&&u.splice(n,1)}function m(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return e.nc}();i&&(t.attrs.nonce=i)}return g(n,t.attrs),h(t,n),n}function g(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function b(t,n){var e,i,r,o;if(n.transform&&t.css){if(!(o="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=o}if(n.singleton){var s=l++;e=c||(c=m(n)),i=x.bind(null,e,s,!1),r=x.bind(null,e,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(n,t.attrs),h(t,n),n}(n),i=function(t,n,e){var i=e.css,r=e.sourceMap,o=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||o)&&(i=d(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,e,n),r=function(){v(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(n),i=function(t,n){var e=n.css,i=n.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){v(e)});return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else r()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=s()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=f(t,n);return p(e,n),function(t){for(var i=[],r=0;r<e.length;r++){var s=e[r];(a=o[s.id]).refs--,i.push(a)}t&&p(f(t,n),n);for(r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var y,w=(y=[],function(t,n){return y[t]=n,y.filter(Boolean).join("\n")});function x(t,n,e,i){var r=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(n,r);else{var o=document.createTextNode(r),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(o,s[n]):t.appendChild(o)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,i=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var r,o=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,n,e){"use strict";e.r(n);class i{constructor(t){this.state=t}async getData(){const{url:t}=this.state,n=await fetch(t);return await n.json()}static extractVideoId(t){return t.items.map(t=>t.id.videoId).join(",")}async getStats(t){const n=i.extractVideoId(t);console.log(n);const e=`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=${n}&part=snippet,statistics`,r=await fetch(e),o=await r.json();return console.log(o),o}}e(1);var r=class{constructor(t,n){this.data=t,this.stats=n}render(){if(!document.getElementById("container")){const t=document.createElement("div");t.id="container",document.body.appendChild(t);const n=document.createElement("div");n.id="list",t.appendChild(n)}document.getElementById("list").innerHTML=this.data.items.map((t,n)=>`<div class="item">\n                <div class="preview" style="background-image:url('${t.snippet.thumbnails.high.url}')"></div>\n                <div class="title"><a href='https://www.youtube.com/watch?v=${t.id.videoId}'>${t.snippet.title}</a></div>\n                <div class="channel">${this.stats.items[n].snippet.channelTitle}</div>\n                <div class="views">${this.stats.items[n].statistics.viewCount}</div>\n                <div class="date">${this.stats.items[n].snippet.publishedAt.slice(0,10)}</div>\n                <div class="description">${this.stats.items[n].snippet.description}</div>\n         </div>`).join("");const t=document.getElementById("list");let n,e,i,r=!1;t.addEventListener("pointerdown",i=>{r=!0,t.classList.add("active"),n=i.pageX-t.offsetLeft,e=t.scrollLeft}),t.addEventListener("pointerleave",()=>{r=!1,t.classList.remove("active")}),t.addEventListener("pointerup",()=>{r=!1,i>=50&&(t.scrollLeft=e+i,t.scrollLeft=e-document.getElementById("container").offsetWidth),i<=-50&&(t.scrollLeft=e+i,t.scrollLeft=e+document.getElementById("container").offsetWidth),i>=-50&&i<=50&&(t.scrollLeft=e+i),t.classList.remove("active")}),t.addEventListener("pointermove",o=>{if(!r)return;o.preventDefault();const s=o.pageX-t.offsetLeft;i=s-n,t.scrollLeft=e-i})}};(new class{constructor(){this.state={url:""};const t=document.createElement("input");t.type="text",t.id="searchField",document.body.appendChild(t),t.onchange=(()=>{this.state.url=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=${t.value}`,this.start()})}async start(){const t=new i(this.state),n=await t.getData(),e=await t.getStats(n);new r(n,e).render()}}).start()}]);
//# sourceMappingURL=app.bundle.js.map