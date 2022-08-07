"use strict";function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}document.addEventListener("DOMContentLoaded",function(){function j(e){e&&(n=document.getElementById("site-name").offsetWidth,e=document.querySelectorAll("#menus .menus_item"),o=0,e.length&&e.forEach(function(e){o+=e.offsetWidth}),e=document.querySelector("#search-button"),i=e?e.offsetWidth:0,M=document.getElementById("nav")),window.innerWidth<768||n+o+i>M.offsetWidth-120?M.classList.add("hide-menu"):M.classList.remove("hide-menu")}function t(){var e=document.body;e.style.overflow="",e.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),R=!1}var n,o,i,M,R=!1;function P(e){e.forEach(function(e){var t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}var a;document.getElementById("rightside").addEventListener("click",function(e){var t,n,o,i,a=e.target.id?e.target:e.target.parentNode;switch(a.id){case"go-up":btf.scrollToDest(0,500);break;case"rightside_config":o=a,(i=document.getElementById("rightside-config-hide").classList).toggle("show"),o.classList.contains("show")&&(i.add("status"),setTimeout(function(){i.remove("status")},300)),o.classList.toggle("show");break;case"mobile-toc-button":"0"===window.getComputedStyle(document.getElementById("card-toc")).getPropertyValue("opacity")?window.mobileToc.open():window.mobileToc.close();break;case"readmode":(t=document.body).classList.add("read-mode"),(n=document.createElement("button")).type="button",n.className="fas fa-sign-out-alt exit-readmode",t.appendChild(n),n.addEventListener("click",function e(){t.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",e)});break;case"darkmode":"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"function"==typeof changeGiscusTheme&&changeGiscusTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),"function"==typeof runMermaid&&window.runMermaid();break;case"hide-aside-btn":(o=document.documentElement.classList).contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),o.toggle("hide-aside")}});window.refreshFn=function(){var o,i,a,c,r,l,s,d,u,m,f,y,h,t,n,g,p,b,e,L,v,E,q,D,H,A,w,S,G;function I(e,t,n){var o,i=document.createDocumentFragment();u&&((o=document.createElement("div")).className="highlight-tools ".concat(h),o.innerHTML=f+e+y,o.addEventListener("click",g),i.appendChild(o)),d&&t.offsetHeight>d+30&&((e=document.createElement("div")).className="code-expand-btn",e.innerHTML='<i class="fas fa-angle-double-down"></i>',e.addEventListener("click",p),i.appendChild(e)),"hl"===n?t.insertBefore(i,t.firstChild):t.parentNode.insertBefore(i,t)}j(!0),M.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&(B=GLOBAL_CONFIG.noticeOutdate,(C=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=B.limitDay&&((O=document.createElement("div")).className="post-outdate-notice",O.textContent=B.messagePrev+" "+C+" "+B.messageNext,C=document.getElementById("article-container"),"top"===B.position?C.insertBefore(O,C.firstChild):C.appendChild(O))),GLOBAL_CONFIG.relativeDate.post&&P(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&P(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(B=document.getElementById("runtimeshow"))&&(C=B.getAttribute("data-publishDate"),B.innerText=btf.diffDate(C)+" "+GLOBAL_CONFIG.runtime),(O=document.getElementById("last-push-date"))&&(_=O.getAttribute("data-lastPushDate"),O.innerText=btf.diffDate(_,!0)),(_=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&_.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),this.classList.toggle("expand"),e=this.parentNode.nextElementSibling,btf.isHidden(e)?e.style.display="block":e.style.display="none"})})),w=GLOBAL_CONFIG_SITE.isToc,S=GLOBAL_CONFIG.isAnchor,(G=document.getElementById("article-container"))&&(w||S)&&(w&&(e=document.getElementById("card-toc"),v=(L=e.getElementsByClassName("toc-content")[0]).querySelectorAll(".toc-link"),E=e.querySelector(".toc-percentage"),q=L.classList.contains("is-expand"),D=function(e){var t=G.clientHeight,n=document.documentElement.clientHeight,o=G.offsetTop,t=n<t?t-n:document.documentElement.scrollHeight-n,n=Math.round((e-o)/t*100);E.textContent=100<n?100:n<=0?0:n},window.mobileToc={open:function(){e.style.cssText="animation: toc-open .3s; opacity: 1; right: 55px"},close:function(){e.style.animation="toc-close .2s",setTimeout(function(){e.style.cssText="opacity:''; animation: ''; right: ''"},100)}},L.addEventListener("click",function(e){e.preventDefault();var t=e.target.classList;t.contains("toc-content")||(t=t.contains("toc-link")?e.target:e.target.parentElement,btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&window.mobileToc.close())}),b=function(e){var e=e.getBoundingClientRect().top,t=L.scrollTop;e>document.documentElement.clientHeight-100&&(L.scrollTop=t+150),e<100&&(L.scrollTop=t-150)}),H=G.querySelectorAll("h1,h2,h3,h4,h5,h6"),A="",window.tocScrollFn=function(){return btf.throttle(function(){var e=window.scrollY||document.documentElement.scrollTop,n=(w&&D(e),e);if(0!==n){var o="",i="";if(H.forEach(function(e,t){n>btf.getEleTop(e)-80&&(e=e.id,o=e?"#"+encodeURI(e):"",i=t)}),A!==i&&(S&&btf.updateAnchor(o),A=i,w&&(L.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")}),""!==o))){var t=v[i];if(t.classList.add("active"),setTimeout(function(){b(t)},0),!q)for(var a=t.parentNode;!a.matches(".toc");a=a.parentNode)a.matches("li")&&a.classList.add("active")}}},100)()},window.addEventListener("scroll",tocScrollFn)),GLOBAL_CONFIG_SITE.isHome&&(F=document.getElementById("scroll-down"))&&F.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),(B=GLOBAL_CONFIG.highlight)&&(C=B.highlightCopy,O=B.highlightLang,_=GLOBAL_CONFIG_SITE.isHighlightShrink,d=B.highlightHeightLimit,u=C||O||void 0!==_,x="highlighjs"===B.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),(u||d)&&x.length&&(m="prismjs"===B.plugin,h=!(y=f="")===_?"closed":"",void 0!==_&&(f='<i class="fas fa-angle-down expand '.concat(h,'"></i>')),C&&(y='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),t=function(e){var t,n=e.parentNode,o=(n.classList.add("copy-true"),window.getSelection()),i=document.createRange();m?i.selectNodeContents(n.querySelectorAll("pre code")[0]):i.selectNodeContents(n.querySelectorAll("table .code pre")[0]),o.removeAllRanges(),o.addRange(i),o.toString(),i=e.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((t=i.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,t.style.opacity=1,setTimeout(function(){t.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):i.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,o.removeAllRanges(),n.classList.remove("copy-true")},n=function(e){var t=_toConsumableArray(e.parentNode.children).slice(1);e.firstChild.classList.toggle("closed"),btf.isHidden(t[t.length-1])?t.forEach(function(e){e.style.display="block"}):t.forEach(function(e){e.style.display="none"})},g=function(e){(e=e.target.classList).contains("expand")?n(this):e.contains("copy-button")&&t(this)},p=function(){this.classList.toggle("expand-done")},O?m?x.forEach(function(e){var t=e.getAttribute("data-language")?e.getAttribute("data-language"):"Code",t='<div class="code-lang">'.concat(t,"</div>");btf.wrap(e,"figure",{class:"highlight"}),I(t,e)}):x.forEach(function(e){var t=e.getAttribute("class").split(" ")[1];I('<div class="code-lang">'.concat(t="plain"!==t&&void 0!==t?t:"Code","</div>"),e,"hl")}):m?x.forEach(function(e){btf.wrap(e,"figure",{class:"highlight"}),I("",e)}):x.forEach(function(e){I("",e,"hl")}))),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(e){var t,n=e.parentNode,o=e.title||e.alt;o&&!n.parentNode.classList.contains("justified-gallery")&&((t=document.createElement("div")).className="img-alt is-center",t.textContent=o,n.insertBefore(t,e.nextSibling))}),l=document.getElementById("rightside"),s=window.innerHeight+56,document.body.scrollHeight<=s?l.style.cssText="opacity: 1; transform: translateX(-58px)":(i=!(o=0),a=document.getElementById("page-header"),c="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow,window.scrollCollect=function(){return btf.throttle(function(e){var t=window.scrollY||document.documentElement.scrollTop,n=o<t;56<(o=t)?(n?(a.classList.contains("nav-visible")&&a.classList.remove("nav-visible"),r&&!0===i&&(chatBtnHide(),i=!1)):(a.classList.contains("nav-visible")||a.classList.add("nav-visible"),c&&!1===i&&(chatBtnShow(),i=!0)),a.classList.add("nav-fixed"),"0"===window.getComputedStyle(l).getPropertyValue("opacity")&&(l.style.cssText="opacity: 0.8; transform: translateX(-58px)")):(0===t&&a.classList.remove("nav-fixed","nav-visible"),l.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=s&&(l.style.cssText="opacity: 0.8; transform: translateX(-58px)")},200)()},window.addEventListener("scroll",scrollCollect));var _,O,B,C,T,k,N,x,F=document.querySelectorAll("#article-container .fj-gallery");F.length&&((T=F).forEach(function(e){e.querySelectorAll("img").forEach(function(e){var t=e.getAttribute("data-lazy-src");t&&(e.src=t),btf.wrap(e,"div",{class:"fj-gallery-item"})})}),window.fjGallery?setTimeout(function(){btf.initJustifiedGallery(T)},100):((k=document.createElement("link")).rel="stylesheet",k.href=GLOBAL_CONFIG.source.justifiedGallery.css,document.body.appendChild(k),getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js)).then(function(){btf.initJustifiedGallery(T)}))),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(k=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&k.forEach(function(e){btf.wrap(e,"div",{class:"table-wrap"})}),(x=document.querySelectorAll("#article-container .hide-button")).length&&x.forEach(function(e){e.addEventListener("click",function(e){this.classList.add("open");var t=this.nextElementSibling.querySelectorAll(".fj-gallery");t.length&&btf.initJustifiedGallery(t)})}),document.querySelectorAll("#article-container .tab > button").forEach(function(e){e.addEventListener("click",function(e){var t,n,o,i=this.parentNode;i.classList.contains("active")||(t=i.parentNode.nextElementSibling,(o=btf.siblings(i,".active")[0])&&o.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),_toConsumableArray(t.children).forEach(function(e){e.id===n?e.classList.add("active"):e.classList.remove("active")}),0<(o=t.querySelectorAll("#".concat(n," .fj-gallery"))).length&&btf.initJustifiedGallery(o))})}),document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(e){e.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})}),N=!1,(x=document.querySelector("#comment-switch > .switch-btn"))&&x.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(e){btf.isHidden(e)?e.style.cssText="display: block;animation: tabshow .5s":e.style.cssText="display: none;animation: ''"}),N||"function"!=typeof loadOtherComment||(N=!0,loadOtherComment())}),document.getElementById("toggle-menu").addEventListener("click",function(){btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),R=!0})},refreshFn(),window.addEventListener("resize",function(){j(!1),btf.isHidden(document.getElementById("toggle-menu"))&&R&&t()}),document.getElementById("menu-mask").addEventListener("click",function(e){t()}),document.querySelectorAll("#sidebar-menus .site-page.group").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("hide")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(a=GLOBAL_CONFIG.copyright,document.body.oncopy=function(e){e.preventDefault();var t=(t=window.getSelection(0).toString()).length>a.limitCount?t+"\n\n\n"+a.languages.author+"\n"+a.languages.link+window.location.href+"\n"+a.languages.source+"\n"+a.languages.info:t;return(e.clipboardData?e:window).clipboardData.setData("text",t)})});