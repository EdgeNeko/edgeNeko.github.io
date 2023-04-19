"use strict";function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}document.addEventListener("DOMContentLoaded",function(){function M(t){function e(t){var e=0;return t.length&&Array.from(t).forEach(function(t){e+=t.offsetWidth}),e}var n;t&&(t=e(document.querySelector("#blog-info > a").children),n=e(document.getElementById("menus").children),o=t+n,P=document.getElementById("nav")),window.innerWidth<=768||o>P.offsetWidth-120?P.classList.add("hide-menu"):P.classList.remove("hide-menu")}function e(){var t=document.body;t.style.overflow="",t.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),R=!1}var o,P,n,R=!1;function z(t){t.forEach(function(t){var e=t.getAttribute("datetime");t.innerText=btf.diffDate(e,!0),t.style.display="inline"})}document.getElementById("rightside").addEventListener("click",function(t){var e,n,o,i,a=t.target.id?t.target:t.target.parentNode;switch(a.id){case"go-up":btf.scrollToDest(0,500);break;case"rightside_config":o=a,(i=document.getElementById("rightside-config-hide").classList).toggle("show"),o.classList.contains("show")&&(i.add("status"),setTimeout(function(){i.remove("status")},300)),o.classList.toggle("show");break;case"mobile-toc-button":"0"===window.getComputedStyle(document.getElementById("card-toc")).getPropertyValue("opacity")?window.mobileToc.open():window.mobileToc.close();break;case"readmode":(e=document.body).classList.add("read-mode"),(n=document.createElement("button")).type="button",n.className="fas fa-sign-out-alt exit-readmode",e.appendChild(n),n.addEventListener("click",function t(){e.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",t)});break;case"darkmode":"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"function"==typeof changeGiscusTheme&&changeGiscusTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment&&window.loadFBComment(),"function"==typeof runMermaid&&window.runMermaid();break;case"hide-aside-btn":(o=document.documentElement.classList).contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),o.toggle("hide-aside")}}),window.refreshFn=function(){var n,o,i,a,c,r,l,s,d,u,t,f,m,y,p,e,g,h,b,L,v,S,E,q,D,H,A,_,w,G;function I(t,e,n){var o,i=document.createDocumentFragment();u&&((o=document.createElement("div")).className="highlight-tools ".concat(p),o.innerHTML=m+t+y,o.addEventListener("click",h),i.appendChild(o)),d&&e.offsetHeight>d+30&&((t=document.createElement("div")).className="code-expand-btn",t.innerHTML='<i class="fas fa-angle-double-down"></i>',t.addEventListener("click",b),i.appendChild(t)),"hl"===n?e.insertBefore(i,e.firstChild):e.parentNode.insertBefore(i,e)}M(!0),P.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&(N=GLOBAL_CONFIG.noticeOutdate,(B=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=N.limitDay&&((C=document.createElement("div")).className="post-outdate-notice",C.textContent=N.messagePrev+" "+B+" "+N.messageNext,B=document.getElementById("article-container"),"top"===N.position?B.insertBefore(C,B.firstChild):B.appendChild(C))),GLOBAL_CONFIG.relativeDate.post&&z(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&z(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(N=document.getElementById("runtimeshow"))&&(B=N.getAttribute("data-publishDate"),N.innerText=btf.diffDate(B)+" "+GLOBAL_CONFIG.runtime),(C=document.getElementById("last-push-date"))&&(O=C.getAttribute("data-lastPushDate"),C.innerText=btf.diffDate(O,!0)),(O=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&O.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),this.classList.toggle("expand"),t=this.parentNode.nextElementSibling,btf.isHidden(t)?t.style.display="block":t.style.display="none"})})),_=GLOBAL_CONFIG_SITE.isToc,w=GLOBAL_CONFIG.isAnchor,(G=document.getElementById("article-container"))&&(_||w)&&(_&&(v=document.getElementById("card-toc"),E=(S=v.getElementsByClassName("toc-content")[0]).querySelectorAll(".toc-link"),q=v.querySelector(".toc-percentage"),D=S.classList.contains("is-expand"),window.mobileToc={open:function(){v.style.cssText="animation: toc-open .3s; opacity: 1; right: 55px"},close:function(){v.style.animation="toc-close .2s",setTimeout(function(){v.style.cssText="opacity:''; animation: ''; right: ''"},100)}},S.addEventListener("click",function(t){t.preventDefault();var e=t.target.classList;e.contains("toc-content")||(e=e.contains("toc-link")?t.target:t.target.parentElement,btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&window.mobileToc.close())}),L=function(t){var t=t.getBoundingClientRect().top,e=S.scrollTop;t>document.documentElement.clientHeight-100&&(S.scrollTop=e+150),t<100&&(S.scrollTop=e-150)}),H=G.querySelectorAll("h1,h2,h3,h4,h5,h6"),A="",window.tocScrollFn=btf.throttle(function(){var t=window.scrollY||document.documentElement.scrollTop,n=(_&&GLOBAL_CONFIG.percent.toc&&(q.textContent=btf.getScrollPercent(t,G)),t);if(0!==n){var o="",i="";if(H.forEach(function(t,e){n>btf.getEleTop(t)-80&&(t=t.id,o=t?"#"+encodeURI(t):"",i=e)}),A!==i&&(w&&btf.updateAnchor(o),A=i,_&&(S.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),""!==o))){var e=E[i];if(e.classList.add("active"),setTimeout(function(){L(e)},0),!D)for(var a=e.parentNode;!a.matches(".toc");a=a.parentNode)a.matches("li")&&a.classList.add("active")}}},100),window.addEventListener("scroll",tocScrollFn)),GLOBAL_CONFIG_SITE.isHome&&(x=document.getElementById("scroll-down"))&&x.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),(N=GLOBAL_CONFIG.highlight)&&(B=N.highlightCopy,C=N.highlightLang,O=GLOBAL_CONFIG_SITE.isHighlightShrink,d=N.highlightHeightLimit,u=B||C||void 0!==O,t="highlighjs"===N.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),(u||d)&&t.length&&(f="prismjs"===N.plugin,p=!(y=m="")===O?"closed":"",void 0!==O&&(m='<i class="fas fa-angle-down expand '.concat(p,'"></i>')),B&&(y='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),e=function(t){var e,n=t.parentNode,o=(n.classList.add("copy-true"),window.getSelection()),i=document.createRange();f?i.selectNodeContents(n.querySelectorAll("pre code")[0]):i.selectNodeContents(n.querySelectorAll("table .code pre")[0]),o.removeAllRanges(),o.addRange(i),o.toString(),i=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((e=i.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,e.style.opacity=1,setTimeout(function(){e.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):i.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,o.removeAllRanges(),n.classList.remove("copy-true")},g=function(t){var e=_toConsumableArray(t.parentNode.children).slice(1);t.firstChild.classList.toggle("closed"),btf.isHidden(e[e.length-1])?e.forEach(function(t){t.style.display="block"}):e.forEach(function(t){t.style.display="none"})},h=function(t){(t=t.target.classList).contains("expand")?g(this):t.contains("copy-button")&&e(this)},b=function(){this.classList.toggle("expand-done")},C?f?t.forEach(function(t){var e=t.getAttribute("data-language")?t.getAttribute("data-language"):"Code",e='<div class="code-lang">'.concat(e,"</div>");btf.wrap(t,"figure",{class:"highlight"}),I(e,t)}):t.forEach(function(t){var e=t.getAttribute("class").split(" ")[1];I('<div class="code-lang">'.concat(e="plain"!==e&&void 0!==e?e:"Code","</div>"),t,"hl")}):f?t.forEach(function(t){btf.wrap(t,"figure",{class:"highlight"}),I("",t)}):t.forEach(function(t){I("",t,"hl")}))),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,n=t.parentNode,o=t.title||t.alt;o&&!n.parentNode.classList.contains("justified-gallery")&&((e=document.createElement("div")).className="img-alt is-center",e.textContent=o,n.insertBefore(e,t.nextSibling))}),l=document.getElementById("rightside"),s=window.innerHeight+56,document.body.scrollHeight<=s?l.style.cssText="opacity: 1; transform: translateX(-58px)":(o=!(n=0),i=document.getElementById("page-header"),a="function"==typeof chatBtnHide,c="function"==typeof chatBtnShow,r=GLOBAL_CONFIG.percent.rightside,t=btf.throttle(function(){var t=window.scrollY||document.documentElement.scrollTop,e=n<t;56<(n=t)?(e?(i.classList.contains("nav-visible")&&i.classList.remove("nav-visible"),c&&!0===o&&(chatBtnHide(),o=!1)):(i.classList.contains("nav-visible")||i.classList.add("nav-visible"),a&&!1===o&&(chatBtnShow(),o=!0)),i.classList.add("nav-fixed"),"0"===window.getComputedStyle(l).getPropertyValue("opacity")&&(l.style.cssText="opacity: 0.8; transform: translateX(-58px)")):(0===t&&i.classList.remove("nav-fixed","nav-visible"),l.style.cssText="opacity: ''; transform: ''"),r&&(e=t,e=btf.getScrollPercent(e,document.body),t=document.getElementById("go-up"),e<95?(t.classList.add("show-percent"),t.querySelector(".scroll-percent").textContent=e):t.classList.remove("show-percent")),document.body.scrollHeight<=s&&(l.style.cssText="opacity: 0.8; transform: translateX(-58px)")},200),window.scrollCollect=t,window.addEventListener("scroll",scrollCollect));var O,C,B,T,N,k,x=document.querySelectorAll("#article-container .fj-gallery");function F(t){function o(t){return t.replace(/"/g,"&quot;")}var i="";return t.forEach(function(t){var e=t.alt?'alt="'.concat(o(t.alt),'"'):"",n=t.title?'title="'.concat(o(t.title),'"'):"";i+='<div class="fj-gallery-item"><img src="'.concat(t.url,'" ').concat(e+n,'"></div>')}),i}function j(t,e){var n=t.getAttribute("data-limit"),o=e.length;return n<o?t.insertAdjacentHTML("beforeend",F(e.splice(0,n))):(t.insertAdjacentHTML("beforeend",F(e)),t.classList.remove("lazyload")),n<o?n:o}x.length&&((k=x).forEach(function(n){var o,i=JSON.parse(n.querySelector(".gallery-data").textContent);n.classList.contains("lazyload")?(j(n,i),o=n.getAttribute("data-limit"),n.nextElementSibling.addEventListener("click",function t(){var e=j(n,i);fjGallery(n,"appendImages",n.querySelectorAll(".fj-gallery-item:nth-last-child(-n+".concat(e,")"))),btf.loadLightbox(n.querySelectorAll("img")),e<o&&n.nextElementSibling.removeEventListener("click",t)})):n.innerHTML=F(i)}),window.fjGallery?setTimeout(function(){btf.initJustifiedGallery(k)},100):(getCSS("".concat(GLOBAL_CONFIG.source.justifiedGallery.css)),getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js)).then(function(){btf.initJustifiedGallery(k)}))),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(N=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&N.forEach(function(t){btf.wrap(t,"div",{class:"table-wrap"})}),(N=document.querySelectorAll("#article-container .hide-button")).length&&N.forEach(function(t){t.addEventListener("click",function(t){this.classList.add("open");var e=this.nextElementSibling.querySelectorAll(".fj-gallery");e.length&&btf.initJustifiedGallery(e)})}),document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){var e,n,o,i=this.parentNode;i.classList.contains("active")||(e=i.parentNode.nextElementSibling,(o=btf.siblings(i,".active")[0])&&o.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),_toConsumableArray(e.children).forEach(function(t){t.id===n?t.classList.add("active"):t.classList.remove("active")}),0<(o=e.querySelectorAll("#".concat(n," .fj-gallery"))).length&&btf.initJustifiedGallery(o))})}),document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})}),T=!1,(N=document.querySelector("#comment-switch > .switch-btn"))&&N.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"}),T||"function"!=typeof loadOtherComment||(T=!0,loadOtherComment())}),document.getElementById("toggle-menu").addEventListener("click",function(){btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),R=!0})},refreshFn(),window.addEventListener("resize",function(){M(!1),btf.isHidden(document.getElementById("toggle-menu"))&&R&&e()}),document.getElementById("menu-mask").addEventListener("click",function(t){e()}),document.querySelectorAll("#sidebar-menus .site-page.group").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(n=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>n.limitCount?e+"\n\n\n"+n.languages.author+"\n"+n.languages.link+window.location.href+"\n"+n.languages.source+"\n"+n.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});