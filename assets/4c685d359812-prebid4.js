var vuukleLoader = (function (window, document) {
/* prebid.js v9.18.0
Updated: 2026-02-18
Modules: paapi, fpdModule, rtdModule, appnexusBidAdapter, openxBidAdapter, rubiconBidAdapter, sovrnBidAdapter, pubmaticBidAdapter, smartadserverBidAdapter, amxBidAdapter, sharethroughBidAdapter, conversantBidAdapter, smilewantedBidAdapter, criteoBidAdapter, adkernelBidAdapter, dfpAdServerVideo, sharedIdSystem, amxIdSystem, identityLinkIdSystem, criteoIdSystem, id5IdSystem, userId, consentManagementTcf, consentManagementUsp, confiantRtdProvider, sizeMappingV2, paapiForGpt, topicsFpdModule, schain */
if(window.vuuklehb&&window.vuuklehb.libLoaded)try{window.vuuklehb.getConfig("debug")&&console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'vuuklehb' instance. Load aborted.")}catch(e){}else (function(){
(()=>{var r,t={433(r,t,e){function n(r,t,e,n,o){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)r=r?r[t[n]]:o;return r===o?e:r}e.d(t,{A:()=>n})},8128(r){
/*
* @license MIT
* Fun Hooks v0.9.10
* (c) @snapwich
*/
f.SYNC=1,f.ASYNC=2,f.QUEUE=4;var t="fun-hooks";var e=Object.freeze({useProxy:!0,ready:0}),n=new WeakMap,o="2,1,0"===[1].reduce(function(r,t,e){return[r,t,e]},2).toString()?Array.prototype.reduce:function(r,t){var e,n=Object(this),o=n.length>>>0,i=0;if(t)e=t;else{for(;i<o&&!(i in n);)i++;e=n[i++]}for(;i<o;)i in n&&(e=r(e,n[i],i,n)),i++;return e};function i(r,t){return Array.prototype.slice.call(r,t)}var u=Object.assign||function(r){return o.call(i(arguments,1),function(r,t){return t&&Object.keys(t).forEach(function(e){r[e]=t[e]}),r},r)};function f(r){var c,a={},l=[];function p(r,t){return"function"==typeof r?h.call(null,"sync",r,t):"string"==typeof r&&"function"==typeof t?h.apply(null,arguments):"object"==typeof r?y.apply(null,arguments):void 0}function y(r,t,e){var n=!0;void 0===t&&(t=Object.getOwnPropertyNames(r),n=!1);var o={},i=["constructor"];do{(t=t.filter(function(t){return!("function"!=typeof r[t]||-1!==i.indexOf(t)||t.match(/^_/))})).forEach(function(t){var n=t.split(":"),i=n[0],u=n[1]||"sync";if(!o[i]){var f=r[i];o[i]=r[i]=h(u,f,e?[e,i]:void 0)}}),r=Object.getPrototypeOf(r)}while(n&&r);return o}function s(r){var e=Array.isArray(r)?r:r.split(".");return o.call(e,function(n,o,i){var u=n[o],f=!1;return u||(i===e.length-1?(c||l.push(function(){f||console.warn(t+": referenced '"+r+"' but it was never created")}),n[o]=v(function(r){n[o]=r,f=!0})):n[o]={})},a)}function v(r){var t=[],e=[],o=function(){},i={before:function(r,e){return c.call(this,t,"before",r,e)},after:function(r,t){return c.call(this,e,"after",r,t)},getHooks:function(r){var n=t.concat(e);"object"==typeof r&&(n=n.filter(function(t){return Object.keys(r).every(function(e){return t[e]===r[e]})}));try{u(n,{remove:function(){return n.forEach(function(r){r.remove()}),this}})}catch(r){console.error("error adding `remove` to array, did you modify Array.prototype?")}return n},removeAll:function(){return this.getHooks().remove()}},f={install:function(n,i,u){this.type=n,o=u,u(t,e),r&&r(i)}};return n.set(i.after,f),i;function c(r,n,i,u){var f={hook:i,type:n,priority:u||10,remove:function(){var n=r.indexOf(f);-1!==n&&(r.splice(n,1),o(t,e))}};return r.push(f),r.sort(function(r,t){return t.priority-r.priority}),o(t,e),this}}function h(e,o,a){var p=o.after&&n.get(o.after);if(p){if(p.type!==e)throw t+": recreated hookable with different type";return o}var y,h,b=a?s(a):v(),d={get:function(r,t){return b[t]||Reflect.get.apply(Reflect,arguments)}};return c||l.push(g),r.useProxy&&"function"==typeof Proxy&&Proxy.revocable?h=new Proxy(o,d):(h=function(){return d.apply?d.apply(o,this,i(arguments)):o.apply(this,arguments)},u(h,b)),n.get(h.after).install(e,h,function(r,t){var n,o=[];r.length||t.length?(r.forEach(u),n=o.push(void 0)-1,t.forEach(u),y=function(r,t,u){var f,c=0,a="async"===e&&"function"==typeof u[u.length-1]&&u.pop();function l(r){"sync"===e?f=r:a&&a.apply(null,arguments)}function p(r){if(o[c]){var n=i(arguments);return p.bail=l,n.unshift(p),o[c++].apply(t,n)}"sync"===e?f=r:a&&a.apply(null,arguments)}return o[n]=function(){var n=i(arguments,1);"async"===e&&a&&(delete p.bail,n.push(p));var o=r.apply(t,n);"sync"===e&&p(o)},p.apply(null,u),f}):y=void 0;function u(r){o.push(r.hook)}g()}),h;function g(){!c&&("sync"!==e||r.ready&f.SYNC)&&("async"!==e||r.ready&f.ASYNC)?"sync"!==e&&r.ready&f.QUEUE?d.apply=function(){var r=arguments;l.push(function(){h.apply(r[1],r[2])})}:d.apply=function(){throw t+": hooked function not ready"}:d.apply=y}}return(r=u({},e,r)).ready?p.ready=function(){c=!0,function(r){for(var t;t=r.shift();)t()}(l)}:c=!0,p.get=s,p}r.exports=f},4705(r,t,e){function n(r){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n(r)}function o(r){var t=function(r,t){if("object"!=n(r)||!r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var o=e.call(r,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"==n(t)?t:t+""}function i(r,t,e){return(t=o(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}e.d(t,{A:()=>i})},3172(r,t,e){function n(r,t,e){t.split&&(t=t.split("."));for(var n,o,i=0,u=t.length,f=r;i<u&&"__proto__"!=(o=""+t[i++])&&"constructor"!==o&&"prototype"!==o;)f=f[o]=i===u?e:typeof(n=f[o])==typeof t?n:0*t[i]!=0||~(""+t[i]).indexOf(".")?{}:[]}e.d(t,{J:()=>n})},5751(r,t,e){function n(r){var t,e,o;if(Array.isArray(r)){for(e=Array(t=r.length);t--;)e[t]=(o=r[t])&&"object"==typeof o?n(o):o;return e}if("[object Object]"===Object.prototype.toString.call(r)){for(t in e={},r)"__proto__"===t?Object.defineProperty(e,t,{value:n(r[t]),configurable:!0,enumerable:!0,writable:!0}):e[t]=(o=r[t])&&"object"==typeof o?n(o):o;return e}return r}e.d(t,{Q:()=>n})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,r=[],n.O=(t,e,o,i)=>{if(!e){var u=1/0;for(l=0;l<r.length;l++){for(var[e,o,i]=r[l],f=!0,c=0;c<e.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every(r=>n.O[r](e[c]))?e.splice(c--,1):(f=!1,i<u&&(u=i));if(f){r.splice(l--,1);var a=o();void 0!==a&&(t=a)}}return t}i=i||0;for(var l=r.length;l>0&&r[l-1][2]>i;l--)r[l]=r[l-1];r[l]=[e,o,i]},n.n=r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return n.d(t,{a:t}),t},n.d=(r,t)=>{for(var e in t)n.o(t,e)&&!n.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:t[e]})},n.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),(()=>{var r={9673:0};n.O.j=t=>0===r[t];var t=(t,e)=>{var o,i,[u,f,c]=e,a=0;if(u.some(t=>0!==r[t])){for(o in f)n.o(f,o)&&(n.m[o]=f[o]);if(c)var l=c(n)}for(t&&t(e);a<u.length;a++)i=u[a],n.o(r,i)&&r[i]&&r[i][0](),r[i]=0;return n.O(l)},e=self.vuuklehbChunk=self.vuuklehbChunk||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))})();var o=n.O(void 0,[802,1085],()=>n(9671));o=n.O(o)})();
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[802],{5789(e,t,n){n.d(t,{A4:()=>u,J7:()=>l,Pg:()=>f});var i=n(1580),r=n(1069),o=n(433),s=n(5901),a=n(7873),c=n(5569);const d=(0,a.m)();function u(e){const{url:t,config:n,id:a,callback:u,loaded:l,adUnitCode:f,renderNow:g}=e;this.url=t,this.config=n,this.handlers={},this.id=a,this.renderNow=g,this.loaded=l,this.cmd=[],this.push=e=>{"function"==typeof e?this.loaded?e.call():this.cmd.push(e):(0,r.vV)("Commands given to Renderer.push must be wrapped in a function")},this.callback=u||(()=>{this.loaded=!0,this.process()}),this.render=function(){const e=arguments,n=()=>{this._render?this._render.apply(this,e):(0,r.JE)("No render function was provided, please use .setRender on the renderer")};!function(e){const t=d.adUnits,n=(0,s.I6)(t,t=>t.code===e);if(!n)return!1;const i=(0,o.A)(n,"renderer"),r=!!(i&&i.url&&i.render),a=(0,o.A)(n,"mediaTypes.video.renderer"),c=!!(a&&a.url&&a.render);return!!(r&&!0!==i.backupOnly||c&&!0!==a.backupOnly)}(f)?g?n():(this.cmd.unshift(n),(0,i.R)(t,c.tp,"outstream",this.callback,this.documentContext)):((0,r.JE)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(f)),n())}.bind(this)}function l(e){return!(!e||!e.url&&!e.renderNow)}function f(e,t,n){let i=null;e.config&&e.config.documentResolver&&(i=e.config.documentResolver(t,document,n)),i||(i=document),e.documentContext=i,e.render(t,e.documentContext)}u.install=function(e){let{url:t,config:n,id:i,callback:r,loaded:o,adUnitCode:s,renderNow:a}=e;return new u({url:t,config:n,id:i,callback:r,loaded:o,adUnitCode:s,renderNow:a})},u.prototype.getConfig=function(){return this.config},u.prototype.setRender=function(e){this._render=e},u.prototype.setEventHandlers=function(e){this.handlers=e},u.prototype.handleVideoEvent=function(e){let{id:t,eventName:n}=e;"function"==typeof this.handlers[n]&&this.handlers[n](),(0,r.OG)("Prebid Renderer event for id ".concat(t," type ").concat(n))},u.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){(0,r.vV)("Error processing Renderer command: ",e)}}},6811(e,t,n){n.d(t,{DL:()=>u,Ml:()=>r,Ue:()=>i,VJ:()=>f,hE:()=>l,hq:()=>d,mo:()=>c,pY:()=>g,qX:()=>o,uc:()=>a,yl:()=>s});const i="accessDevice",r="syncUser",o="enrichUfpd",s="enrichEids",a="fetchBids",c="reportAnalytics",d="transmitEids",u="transmitUfpd",l="transmitPreciseGeo",f="transmitTid",g="loadExternalScript"},3441(e,t,n){n.d(t,{s:()=>r});var i=n(1445);const r=(0,n(2604).ZI)(e=>i.Ay.resolveAlias(e))},5569(e,t,n){n.d(t,{Tn:()=>a,fW:()=>o,tW:()=>r,tp:()=>i,zu:()=>s});const i="prebid",r="bidder",o="userId",s="rtd",a="analytics"},2604(e,t,n){n.d(t,{Dk:()=>s,Ii:()=>o,TQ:()=>g,XG:()=>u,ZI:()=>p,Zw:()=>d,bt:()=>l,e3:()=>f,iK:()=>a,q7:()=>c});var i=n(5569),r=n(9214);const o="component",s=o+"Type",a=o+"Name",c="adapterCode",d="storageType",u="configName",l="syncType",f="syncUrl",g="_config";function p(e){return function(t,n,r){const d={[s]:t,[a]:n,[o]:"".concat(t,".").concat(n)};return t===i.tW&&(d[c]=e(n)),h(Object.assign(d,r))}}const h=(0,r.A_)("sync",e=>e)},6953(e,t,n){n.d(t,{Vx:()=>c,l7:()=>a,p4:()=>m,$V:()=>h,nl:()=>g,ZP:()=>b,$p:()=>v,uD:()=>p});var i=n(433),r=n(3272),o=n(5139),s=n(6811);const a=["data","ext.data","yob","gender","keywords","kwarray","id","buyeruid","customdata"].map(e=>"user.".concat(e)).concat("device.ext.cdep"),c=["user.eids","user.ext.eids"],d=["user.geo.lat","user.geo.lon","device.geo.lat","device.geo.lon"],u=["device.ip"],l=["device.ipv6"];function f(e){return Object.assign({get(){},run(e,t,n,i,r){const o=n&&n[i];if(h(o)&&r()){const e=this.get(o);void 0===e?delete n[i]:n[i]=e}}},e)}function g(e){return e.forEach(e=>{e.paths=e.paths.map(e=>{const t=e.split("."),n=t.pop();return[t.length>0?t.join("."):null,n]})}),function(t,n){const r=[];for(var o=arguments.length,s=new Array(o>2?o-2:0),a=2;a<o;a++)s[a-2]=arguments[a];const c=p(t,...s);return e.forEach(e=>{if(!1!==t[e.name])for(const[o,s]of e.paths){const a=null==o?n:(0,i.A)(n,o);if(r.push(e.run(n,o,a,s,c.bind(null,e))),!1===t[e.name])return}}),r.filter(e=>null!=e)}}function p(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return function(t){return e.hasOwnProperty(t.name)||(e[t.name]=!!t.applies(...n)),e[t.name]}}function h(e){return null!=e&&("object"!=typeof e||Object.keys(e).length>0)}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.io;return function(n){return!t(e,n)}}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.io;return[{name:s.DL,paths:a,applies:m(s.DL,e)},{name:s.hq,paths:c,applies:m(s.hq,e)},{name:s.hE,paths:d,applies:m(s.hE,e),get:e=>Math.round(100*(e+Number.EPSILON))/100},{name:s.hE,paths:u,applies:m(s.hE,e),get:e=>function(e){if(!e)return null;let t=e.split(".").map(Number);if(4!=t.length)return null;let n=[];for(let e=0;e<4;e++){let t=Math.max(0,Math.min(8,24-8*e));n.push(255<<8-t&255)}return t.map((e,t)=>e&n[t]).join(".")}(e)},{name:s.hE,paths:l,applies:m(s.hE,e),get:e=>function(e){if(!e)return null;let t=e.split(":").map(e=>parseInt(e,16));for(t=t.map(e=>isNaN(e)?0:e);t.length<8;)t.push(0);if(8!=t.length)return null;let n=[];for(let e=0;e<8;e++){let t=Math.max(0,Math.min(16,64-16*e));n.push(65535<<16-t&65535)}return t.map((e,t)=>e&n[t]).map(e=>e.toString(16)).join(":")}(e)},{name:s.VJ,paths:["source.tid"],applies:m(s.VJ,e)}].map(f)}const v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.io;const t=g(b(e)),n=g(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.io;return[{name:s.hq,paths:["userId","userIdAsEids"],applies:m(s.hq,e)},{name:s.VJ,paths:["ortb2Imp.ext.tid"],applies:m(s.VJ,e)}].map(f)}(e));return function(e){const i={};return{ortb2:n=>(t(i,n,e),n),bidRequest:t=>(n(i,t,e),t)}}}();(0,o.qB)(s.VJ,"enableTIDs config",()=>{if(!r.$W.getConfig("enableTIDs"))return{allow:!1,reason:"TIDs are disabled"}})},5139(e,t,n){n.d(t,{io:()=>s,qB:()=>o});var i=n(1069),r=n(2604);const[o,s]=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i.h0)("Activity control:");const t={};function n(e){return t[e]=t[e]||[]}function o(t,n,i,o){let s;try{s=i(o)}catch(i){e.logError("Exception in rule ".concat(n," for '").concat(t,"'"),i),s={allow:!1,reason:i}}return s&&Object.assign({activity:t,name:n,component:o[r.Ii]},s)}const s={};function a(t){let{activity:n,name:i,allow:r,reason:o,component:a}=t;const c="".concat(i," ").concat(r?"allowed":"denied"," '").concat(n,"' for '").concat(a,"'").concat(o?":":""),d=s.hasOwnProperty(c);if(d&&clearTimeout(s[c]),s[c]=setTimeout(()=>delete s[c],1e3),!d){const t=[c];o&&t.push(o),(r?e.logInfo:e.logWarn).apply(e,t)}}return[function(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;const o=n(e),s=o.findIndex(e=>{let[t]=e;return r<t}),a=[r,t,i];return o.splice(s<0?o.length:s,0,a),function(){const e=o.indexOf(a);e>=0&&o.splice(e,1)}},function(e,t){let i,r;for(const[s,c,d]of n(e)){if(i!==s&&r)break;i=s;const n=o(e,c,d,t);if(n){if(!n.allow)return a(n),!1;r=n}}return r&&a(r),!0}]}()},9075(e,t,n){n.d(t,{$A:()=>w,BS:()=>P,Hh:()=>q,Pk:()=>x,Uc:()=>C,XO:()=>W,bw:()=>D,qn:()=>j,vB:()=>N,vW:()=>k,vd:()=>S});var i=n(1069),r=n(433),o=n(5023),s=n(8969),a=n(3272),c=n(5789),d=n(1371),u=n(6881),l=n(6031),f=n(9214),g=n(2449),p=n(5555),h=n(1445),m=n(6894);const{AD_RENDER_FAILED:b,AD_RENDER_SUCCEEDED:v,STALE_RENDER:y,BID_WON:E}=s.qY,{EXCEPTION:A}=s.as,w=(0,f.A_)("sync",function(e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.k.resolve()).then(t=>null!=t?t:u.n.findBidByAdId(e)).catch(()=>{})}),I=(0,f.A_)("sync",function(e){o.Ic(E,e),u.n.addWinningBid(e)});function T(e){let{reason:t,message:n,bid:r,id:s}=e;const a={reason:t,message:n};r&&(a.bid=r,a.adId=r.adId),s&&(a.adId=s),(0,i.vV)("Error rendering ad (id: ".concat(s,"): ").concat(n)),o.Ic(b,a)}function O(e){let{doc:t,bid:n,id:i}=e;const r={doc:t};n&&(r.bid=n),i&&(r.adId=i),h.Ay.callAdRenderSucceededBidder(n.adapterCode||n.bidder,n),o.Ic(v,r)}function C(e,t){switch(e.event){case s.qY.AD_RENDER_FAILED:T({bid:t,id:t.adId,reason:e.info.reason,message:e.info.message});break;case s.qY.AD_RENDER_SUCCEEDED:O({doc:null,bid:t,id:t.adId});break;default:(0,i.vV)("Received event request for unsupported event: '".concat(e.event,"' (adId: '").concat(t.adId,"')"))}}function k(e,t,n){let{resizeFn:i,fireTrackers:r=g.vO}=n;if("resizeNativeHeight"===e.action)i(e.width,e.height);else r(e,t)}const B={[s.nl.EVENT]:C};B[s.nl.NATIVE]=k;const S=(0,f.A_)("sync",function(e,t){const{ad:n,adUrl:r,cpm:o,originalCpm:s,width:a,height:c}=e,d={AUCTION_PRICE:s||o,CLICKTHROUGH:(null==t?void 0:t.clickUrl)||""};return{ad:(0,i.gM)(n,d),adUrl:(0,i.gM)(r,d),width:a,height:c}}),R=(0,f.A_)("sync",function(e){let{renderFn:t,resizeFn:n,bidResponse:r,options:o,doc:a,isMainDocument:c=a===document&&!(0,i.al)()}=e;const u=r.mediaType===d.G_;if(c||u)return void T({reason:s.as.PREVENT_WRITING_ON_MAIN_DOCUMENT,message:u?"Cannot render video ad without a renderer":"renderAd was prevented from writing to the main document.",bid:r,id:r.adId});const l=S(r,o);t(Object.assign({adId:r.adId},l));const{width:f,height:g}=l;null!=(null!=f?f:g)&&n(f,g)});function D(e){let{renderFn:t,resizeFn:n,adId:c,options:d,bidResponse:u,doc:l}=e;q(u,()=>{if(null!=u){if(u.status!==s.tl.RENDERED||((0,i.JE)("Ad id ".concat(c," has been rendered before")),o.Ic(y,u),!(0,r.A)(a.$W.getConfig("auctionOptions"),"suppressStaleRender")))try{R({renderFn:t,resizeFn:n,bidResponse:u,options:d,doc:l})}catch(e){T({reason:s.as.EXCEPTION,message:e.message,id:c,bid:u})}}else T({reason:s.as.CANNOT_FIND_AD,message:"Cannot find ad '".concat(c,"'"),id:c})})}function j(e){const t=(0,m.BO)(e.metrics);t.checkpoint("bidRender"),t.timeBetween("bidWon","bidRender","render.deferred"),t.timeBetween("auctionEnd","bidRender","render.pending"),t.timeBetween("requestBids","bidRender","render.e2e"),e.status=s.tl.RENDERED}R.before(function(e,t){const{bidResponse:n,doc:i}=t;(0,c.J7)(n.renderer)?((0,c.Pg)(n.renderer,n,i),O({doc:i,bid:n,id:n.adId}),e.bail()):e(t)},100);const U=new WeakMap,_=new WeakSet;function q(e,t){null!=e?(U.set(e,t),e.deferRendering||N(e),x(e)):t()}function x(e){_.has(e)||(_.add(e),I(e))}function N(e){const t=U.get(e);t&&(t(),j(e),U.delete(e))}function P(e,t,n){let r;function o(e,n){T(Object.assign({id:t,bid:r},{reason:e,message:n}))}function a(t,n){e.defaultView&&e.defaultView.frameElement&&(t&&(e.defaultView.frameElement.width=t),n&&(e.defaultView.frameElement.height=n))}const c=(d={resizeFn:a},function(e,t,n){B.hasOwnProperty(e)&&B[e](t,n,d)});var d;function u(t){t.ad?(e.write(t.ad),e.close(),O({doc:e,bid:r,adId:r.adId})):(0,l.H)(r).then(n=>n(t,{sendMessage:(e,t)=>c(e,t,r),mkFrame:i.hw},e.defaultView)).then(()=>O({doc:e,bid:r,adId:r.adId}),e=>{o((null==e?void 0:e.reason)||s.as.EXCEPTION,null==e?void 0:e.message),(null==e?void 0:e.stack)&&(0,i.vV)(e)});const n=document.createComment("Creative ".concat(r.creativeId," served by ").concat(r.bidder," Prebid.js Header Bidding"));(0,i._s)(n,e,"html")}try{t&&e?w(t).then(i=>{r=i,D({renderFn:u,resizeFn:a,adId:t,options:{clickUrl:null==n?void 0:n.clickThrough},bidResponse:i,doc:e})}):o(s.as.MISSING_DOC_OR_ADID,"missing ".concat(t?"doc":"adId"))}catch(e){o(A,e.message)}}function W(){if(!window.frames[s.IY])if(document.body){const e=(0,i.CA)();e.name=s.IY,document.body.appendChild(e)}else window.requestAnimationFrame(W)}},201(e,t,n){n.d(t,{U:()=>s});var i=n(7873),r=n(1069);const o=(0,i.m)();function s(e,t){o.adServers=o.adServers||{},o.adServers[e]=o.adServers[e]||{},Object.keys(t).forEach(n=>{o.adServers[e][n]?(0,r.JE)("Attempting to add an already registered function property ".concat(n," for AdServer ").concat(e,".")):o.adServers[e][n]=t[n]})}},1445(e,t,n){n.d(t,{Ay:()=>z,pX:()=>G});var i=n(4705),r=n(1069),o=n(433),s=n(2449),a=n(9115),c=n(8044),d=n(3272),u=n(9214),l=n(5901);let f={};function g(e,t,n){let i=function(e,t){let n=f[e]=f[e]||{bidders:{}};return t?n.bidders[t]=n.bidders[t]||{}:n}(e,n);return i[t]=(i[t]||0)+1,i[t]}function p(e){var t;return(null===(t=f)||void 0===t||null===(t=t[e])||void 0===t?void 0:t.requestsCounter)||0}function h(e,t){var n;return(null===(n=f)||void 0===n||null===(n=n[e])||void 0===n||null===(n=n.bidders)||void 0===n||null===(n=n[t])||void 0===n?void 0:n.requestsCounter)||0}function m(e,t){var n;return(null===(n=f)||void 0===n||null===(n=n[e])||void 0===n||null===(n=n.bidders)||void 0===n||null===(n=n[t])||void 0===n?void 0:n.winsCounter)||0}var b=n(7934),v=n(6916),y=n(5023),E=n(8969),A=n(6894),w=n(6881),I=n(5569),T=n(5139),O=n(6811),C=n(2604),k=n(6953);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach(function(t){(0,i.A)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const R="pbsBidAdapter",D={CLIENT:"client",SERVER:"server"},j={isAllowed:T.io,redact:k.$p};let U={},_=U.bidderRegistry={},q=U.aliasRegistry={},x=[];d.$W.getConfig("s2sConfig",e=>{e&&e.s2sConfig&&(x=(0,r.cy)(e.s2sConfig)?e.s2sConfig:[e.s2sConfig])});var N={};const P=(0,C.ZI)(e=>U.resolveAlias(e));const W=(0,u.A_)("sync",function(e){let{bidderCode:t,auctionId:n,bidderRequestId:i,adUnits:s,src:a,metrics:c}=e;return s.reduce((e,s)=>{const d=s.bids.filter(e=>e.bidder===t);return null==t&&0===d.length&&null!=s.s2sBid&&d.push({bidder:null}),e.push(d.reduce((e,d)=>{const u=null==(d=Object.assign({},d,{ortb2Imp:(0,r.D9)({},s.ortb2Imp,d.ortb2Imp)},(0,r.SH)(s,["nativeParams","nativeOrtbRequest","mediaType","renderer"]))).mediaTypes?s.mediaTypes:d.mediaTypes;return(0,r.wD)(u)?d=Object.assign({},d,{mediaTypes:u}):(0,r.vV)("mediaTypes is not correctly configured for adunit ".concat(s.code)),"client"===a&&function(e,t){g(e,"requestsCounter",t)}(s.code,t),e.push(Object.assign({},d,{adUnitCode:s.code,transactionId:s.transactionId,adUnitId:s.adUnitId,sizes:(0,o.A)(u,"banner.sizes")||(0,o.A)(u,"video.playerSize")||[],bidId:d.bid_id||(0,r.s0)(),bidderRequestId:i,auctionId:n,src:a,metrics:c,bidRequestsCount:p(s.code),bidderRequestsCount:h(s.code,d.bidder),bidderWinsCount:m(s.code,d.bidder),deferBilling:!!s.deferBilling})),e},[])),e},[]).reduce(r.Bq,[]).filter(e=>""!==e)},"getBids");const V=(0,u.A_)("sync",function(e,t){let{getS2SBidders:n=G}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==t)return e;{const i=n(t);return e.filter(e=>i.has(e.bidder))}},"filterBidsForAdUnit");const M=(0,u.A_)("sync",(e,t)=>e,"setupAdUnitMediaTypes");function G(e){(0,r.cy)(e)||(e=[e]);const t=new Set([null]);return e.filter(e=>e&&e.enabled).flatMap(e=>e.bidders).forEach(e=>t.add(e)),t}const F=(0,u.A_)("sync",function(e,t){let{getS2SBidders:n=G}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=n(t);return(0,r.ZA)(e).reduce((e,t)=>(e[i.has(t)?D.SERVER:D.CLIENT].push(t),e),{[D.CLIENT]:[],[D.SERVER]:[]})},"partitionBidders");function H(e,t){const n=_[e],i=(null==n?void 0:n.getSpec)&&n.getSpec();if(i&&i[t]&&"function"==typeof i[t])return[i,i[t]]}function $(e,t,n,i){try{(0,r.fH)("Invoking ".concat(e,".").concat(t));for(var o=arguments.length,s=new Array(o>4?o-4:0),a=4;a<o;a++)s[a-4]=arguments[a];d.$W.runWithBidder(e,i.bind(n,...s))}catch(n){(0,r.JE)("Error calling ".concat(t," of ").concat(e))}}function L(e,t,n){if((null==n?void 0:n.source)!==E.RW.SRC){const i=H(e,t);null!=i&&$(e,t,...i,n)}}U.makeBidRequests=(0,u.A_)("sync",function(e,t,n,i,o){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},c=arguments.length>6?arguments[6]:void 0;c=(0,A.BO)(c),y.Ic(E.qY.BEFORE_REQUEST_BIDS,e),(0,s.nk)(e),e.forEach(e=>{(0,r.Qd)(e.mediaTypes)||(e.mediaTypes={}),e.bids=e.bids.filter(e=>!e.bidder||j.isAllowed(O.uc,P(I.tW,e.bidder))),g(e.code,"requestsCounter")}),e=M(e,o);let{[D.CLIENT]:u,[D.SERVER]:f}=F(e,x);d.$W.getConfig("bidderSequence")===d.Ov&&(u=(0,r.k4)(u));const p=(0,b.EN)();let h=[];const m=a.global||{},w=a.bidder||{};function T(e,t){const i=j.redact(null!=t?t:P(I.tW,e.bidderCode)),o=Object.freeze(i.ortb2((0,r.D9)({source:{tid:n}},m,w[e.bidderCode])));return e.ortb2=o,e.bids=e.bids.map(e=>(e.ortb2=o,i.bidRequest(e))),e}x.forEach(i=>{const o=function(e){return P(I.tp,R,{[C.XG]:e.configName})}(i);if(i&&i.enabled&&j.isAllowed(O.uc,o)){let{adUnits:s,hasModuleBids:a}=function(e,t){let n=(0,r.Go)(e),i=!1;return n.forEach(e=>{const n=e.bids.filter(e=>{var n;return e.module===R&&(null===(n=e.params)||void 0===n?void 0:n.configName)===t.configName});1===n.length?(e.s2sBid=n[0],i=!0,e.ortb2Imp=(0,r.D9)({},e.s2sBid.ortb2Imp,e.ortb2Imp)):n.length>1&&(0,r.JE)('Multiple "module" bids for the same s2s configuration; all will be ignored',n),e.bids=V(e.bids,t).map(e=>(e.bid_id=(0,r.s0)(),e))}),n=n.filter(e=>0!==e.bids.length||null!=e.s2sBid),{adUnits:n,hasModuleBids:i}}(e,i),d=(0,r.lk)();(0===f.length&&a?[null]:f).forEach(e=>{const a=(0,r.s0)(),u=c.fork(),l=T({bidderCode:e,auctionId:n,bidderRequestId:a,uniquePbsTid:d,bids:W({bidderCode:e,auctionId:n,bidderRequestId:a,adUnits:(0,r.Go)(s),src:E.RW.SRC,metrics:u}),auctionStart:t,timeout:i.timeout,src:E.RW.SRC,refererInfo:p,metrics:u},o);0!==l.bids.length&&h.push(l)}),s.forEach(e=>{let t=e.bids.filter(e=>(0,l.I6)(h,t=>(0,l.I6)(t.bids,t=>t.bidId===e.bid_id)));e.bids=t}),h.forEach(e=>{void 0===e.adUnitsS2SCopy&&(e.adUnitsS2SCopy=s.filter(e=>e.bids.length>0||null!=e.s2sBid))})}});let k=function(e){let t=(0,r.Go)(e);return t.forEach(e=>{e.bids=V(e.bids,null)}),t=t.filter(e=>0!==e.bids.length),t}(e);return u.forEach(e=>{const s=(0,r.s0)(),a=c.fork(),d=T({bidderCode:e,auctionId:n,bidderRequestId:s,bids:W({bidderCode:e,auctionId:n,bidderRequestId:s,adUnits:(0,r.Go)(k),labels:o,src:"client",metrics:a}),auctionStart:t,timeout:i,refererInfo:p,metrics:a}),u=_[e];u||(0,r.vV)("Trying to make a request for bidder that does not exist: ".concat(e)),u&&d.bids&&0!==d.bids.length&&h.push(d)}),h.forEach(e=>{v.mW.getConsentData()&&(e.gdprConsent=v.mW.getConsentData()),v.t6.getConsentData()&&(e.uspConsent=v.t6.getConsentData()),v.ad.getConsentData()&&(e.gppConsent=v.ad.getConsentData())}),h},"makeBidRequests"),U.callBids=function(e,t,n,i,o,s,a){let u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};if(!t.length)return void(0,r.JE)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");let[l,f]=t.reduce((e,t)=>(e[Number(void 0!==t.src&&t.src===E.RW.SRC)].push(t),e),[[],[]]);var g=[];f.forEach(e=>{for(var t=-1,n=0;n<g.length;++n)if(e.uniquePbsTid===g[n].uniquePbsTid){t=n;break}t<=-1&&g.push(e)});let p=0;x.forEach(e=>{if(e&&g[p]&&G(e).has(g[p].bidderCode)){const t=(0,c.g4)(s,o?{request:o.request.bind(null,"s2s"),done:o.done}:void 0);let d=e.bidders;const l=_[e.adapter];let h=g[p].uniquePbsTid,m=g[p].adUnitsS2SCopy,b=f.filter(e=>e.uniquePbsTid===h);if(l){let o={ad_units:m,s2sConfig:e,ortb2Fragments:u,requestBidsTimeout:s};if(o.ad_units.length){let e=b.map(e=>(e.start=(0,r.vE)(),function(t){t||a(e.bidderRequestId),i.apply(e,arguments)}));const s=(0,r.ZA)(o.ad_units).filter(e=>d.includes(e));(0,r.OG)("CALLING S2S HEADER BIDDERS ==== ".concat(s.length>0?s.join(", "):'No bidder specified, using "ortb2Imp" definition(s) only')),b.forEach(e=>{y.Ic(E.qY.BID_REQUESTED,S(S({},e),{},{tid:e.auctionId}))}),l.callBids(o,f,n,t=>e.forEach(e=>e(t)),t)}}else(0,r.vV)("missing "+e.adapter);p++}}),l.forEach(e=>{e.start=(0,r.vE)();const t=_[e.bidderCode];d.$W.runWithBidder(e.bidderCode,()=>{(0,r.OG)("CALLING BIDDER"),y.Ic(E.qY.BID_REQUESTED,e)});let u=(0,c.g4)(s,o?{request:o.request.bind(null,e.bidderCode),done:o.done}:void 0);const l=i.bind(e);try{d.$W.runWithBidder(e.bidderCode,t.callBids.bind(t,e,n,l,u,()=>a(e.bidderRequestId),d.$W.callbackWithBidder(e.bidderCode)))}catch(t){(0,r.vV)("".concat(e.bidderCode," Bid Adapter emitted an uncaught error when parsing their bidRequest"),{e:t,bidRequest:e}),l()}})},U.videoAdapters=[],U.registerBidAdapter=function(e,t){let{supportedMediaTypes:n=[]}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var i;e&&t?"function"==typeof e.callBids?(_[t]=e,v.o2.register(I.tW,t,null===(i=e.getSpec)||void 0===i?void 0:i.call(e).gvlid),(0,l.mK)(n,"video")&&U.videoAdapters.push(t),(0,l.mK)(n,"native")&&s.mT.push(t)):(0,r.vV)("Bidder adaptor error for bidder code: "+t+"bidder must implement a callBids() function"):(0,r.vV)("bidAdapter or bidderCode not specified")},U.aliasBidAdapter=function(e,t,n){if(void 0===_[t]){let i=_[e];if(void 0===i){const n=[];x.forEach(i=>{if(i.bidders&&i.bidders.length){const r=i&&i.bidders;i&&(0,l.mK)(r,t)?q[t]=e:n.push(e)}}),n.forEach(e=>{(0,r.vV)('bidderCode "'+e+'" is not an existing bidder.',"adapterManager.aliasBidAdapter")})}else try{let o,c=function(e){let t=[];return(0,l.mK)(U.videoAdapters,e)&&t.push("video"),(0,l.mK)(s.mT,e)&&t.push("native"),t}(e);if(i.constructor.prototype!=Object.prototype)o=new i.constructor,o.setBidderCode(t);else{const{useBaseGvlid:s=!1}=n||{};let c=i.getSpec();const d=s?c.gvlid:null==n?void 0:n.gvlid;null==d&&null!=c.gvlid&&(0,r.JE)("Alias '".concat(t,"' will NOT re-use the GVL ID of the original adapter ('").concat(c.code,"', gvlid: ").concat(c.gvlid,"). Functionality that requires TCF consent may not work as expected."));let u=n&&n.skipPbsAliasing;o=(0,a.xb)(Object.assign({},c,{code:t,gvlid:d,skipPbsAliasing:u})),q[t]=e}U.registerBidAdapter(o,t,{supportedMediaTypes:c})}catch(t){(0,r.vV)(e+" bidder does not currently support aliasing.","adapterManager.aliasBidAdapter")}}else(0,r.OG)('alias name "'+t+'" has been already specified.')},U.resolveAlias=function(e){let t,n=e;for(;q[n]&&(!t||!t.has(n));)n=q[n],(t=t||new Set).add(n);return n},U.registerAnalyticsAdapter=function(e){let{adapter:t,code:n,gvlid:i}=e;t&&n?"function"==typeof t.enableAnalytics?(t.code=n,N[n]={adapter:t,gvlid:i},v.o2.register(I.Tn,n,i)):(0,r.vV)('Prebid Error: Analytics adaptor error for analytics "'.concat(n,'"\n        analytics adapter must implement an enableAnalytics() function')):(0,r.vV)("Prebid Error: analyticsAdapter or analyticsCode not specified")},U.enableAnalytics=function(e){(0,r.cy)(e)||(e=[e]),e.forEach(e=>{const t=N[e.provider];t&&t.adapter?j.isAllowed(O.mo,P(I.Tn,e.provider,{[C.TQ]:e}))&&t.adapter.enableAnalytics(e):(0,r.vV)("Prebid Error: no analytics adapter found in registry for '".concat(e.provider,"'."))})},U.getBidAdapter=function(e){return _[e]},U.getAnalyticsAdapter=function(e){return N[e]},U.callTimedOutBidders=function(e,t,n){t=t.map(t=>(t.params=(0,r.SB)(e,t.adUnitCode,t.bidder),t.timeout=n,t)),t=(0,r.$z)(t,"bidder"),Object.keys(t).forEach(e=>{L(e,"onTimeout",t[e])})},U.callBidWonBidder=function(e,t,n){var i,o;t.params=(0,r.SB)(n,t.adUnitCode,t.bidder),i=t.adUnitCode,o=t.bidder,g(i,"winsCounter",o),L(e,"onBidWon",t)},U.triggerBilling=(()=>{const e=new WeakSet;return t=>{e.has(t)||(e.add(t),t.source===E.RW.SRC&&t.burl&&r.mM.triggerPixel(t.burl),L(t.bidder,"onBidBillable",t))}})(),U.callSetTargetingBidder=function(e,t){L(e,"onSetTargeting",t)},U.callBidViewableBidder=function(e,t){L(e,"onBidViewable",t)},U.callBidderError=function(e,t,n){L(e,"onBidderError",{error:t,bidderRequest:n})},U.callAdRenderSucceededBidder=function(e,t){L(e,"onAdRenderSucceeded",t)},U.callDataDeletionRequest=(0,u.A_)("sync",function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const i="onDataDeletionRequest";Object.keys(_).filter(e=>!q.hasOwnProperty(e)).forEach(e=>{const n=H(e,i);if(null!=n){const r=w.n.getBidsRequested().filter(t=>function(e){const t=new Set;for(;q.hasOwnProperty(e)&&!t.has(e);)t.add(e),e=q[e];return e}(t.bidderCode)===e);$(e,i,...n,r,...t)}}),Object.entries(N).forEach(e=>{var n;let[o,s]=e;const a=null==s||null===(n=s.adapter)||void 0===n?void 0:n[i];if("function"==typeof a)try{a.apply(s.adapter,t)}catch(e){(0,r.vV)("error calling ".concat(i," of ").concat(o),e)}})});const z=U},9115(e,t,n){function i(e){var t=e;return{callBids:function(){},setBidderCode:function(e){t=e},getBidderCode:function(){return t}}}n.d(t,{JS:()=>D,eI:()=>O,xb:()=>C,a$:()=>T});var r=n(1445),o=n(3272),s=n(3597),a=n(8230),c=n(2449),d=n(3895),u=n(8969),l=n(5023),f=n(5901),g=n(1069),p=n(9214),h=n(6881),m=n(2693),b=n(6894),v=n(5139),y=n(3441),E=n(5569),A=n(6811);const w=["cpm","ttl","creativeId","netRevenue","currency"],I=["auctionId","transactionId"];function T(e){const t=Array.isArray(e.supportedMediaTypes)?{supportedMediaTypes:e.supportedMediaTypes}:void 0;function n(e){const n=C(e);r.Ay.registerBidAdapter(n,e.code,t)}n(e),Array.isArray(e.aliases)&&e.aliases.forEach(t=>{let i,o,s=t;(0,g.Qd)(t)&&(s=t.code,i=t.gvlid,o=t.skipPbsAliasing),r.Ay.aliasRegistry[s]=e.code,n(Object.assign({},e,{code:s,gvlid:i,skipPbsAliasing:o}))})}const O=(0,g.Bj)(e=>{let{bidderCode:t}=e;if((0,v.io)(A.VJ,(0,y.s)(E.tW,t)))return{bidRequest:e=>e,bidderRequest:e=>e};function n(e,t,n){return I.includes(t)?null:Reflect.get(e,t,n)}function i(e,t){const n=new Proxy(e,t);return Object.entries(e).filter(e=>{let[t,n]=e;return"function"==typeof n}).forEach(t=>{let[i,r]=t;return n[i]=r.bind(e)}),n}const r=(0,g.Bj)(e=>i(e,{get:n}),e=>e.bidId);return{bidRequest:r,bidderRequest:e=>i(e,{get:(t,i,o)=>"bids"===i?e.bids.map(r):n(t,i,o)})}});function C(e){return Object.assign(new i(e.code),{getSpec:function(){return Object.freeze(Object.assign({},e))},registerSyncs:t,callBids:function(n,i,a,p,v,y){if(!Array.isArray(n.bids))return;const E=O(n),A={};function T(e,t){const n=(0,b.BO)(t.metrics);n.checkpoint("addBidResponse"),A[e]=!0,n.measureTime("addBidResponse.validate",()=>function(e,t){let{index:n=h.n.index}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function i(){let e=Object.keys(t);return w.every(n=>(0,f.mK)(e,n)&&!(0,f.mK)([void 0,null],t[n]))}function r(e){return"Invalid bid from ".concat(t.bidderCode,". Ignoring bid: ").concat(e)}if(!e)return(0,g.JE)("No adUnitCode was supplied to addBidResponse."),!1;if(!t)return(0,g.JE)("Some adapter tried to add an undefined bid for ".concat(e,".")),!1;if(!i())return(0,g.vV)(r("Bidder ".concat(t.bidderCode," is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))),!1;if("native"===t.mediaType&&!(0,c.Bm)(t,{index:n}))return(0,g.vV)(r("Native bid missing some required properties.")),!1;if("video"===t.mediaType&&!(0,d.vk)(t,{index:n}))return(0,g.vV)(r("Video bid does not have required vastUrl or renderer property")),!1;if("banner"===t.mediaType&&!function(e,t){let{index:n=h.n.index}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if((t.width||0===parseInt(t.width,10))&&(t.height||0===parseInt(t.height,10)))return t.width=parseInt(t.width,10),t.height=parseInt(t.height,10),!0;const i=n.getBidRequest(t),r=n.getMediaTypes(t),o=i&&i.sizes||r&&r.banner&&r.banner.sizes,s=(0,g.kK)(o);if(1===s.length){const[e,n]=s[0].split("x");return t.width=parseInt(e,10),t.height=parseInt(n,10),!0}return!1}(e,t,{index:n}))return(0,g.vV)(r("Banner bids require a width and height")),!1;return!0}(e,t))?i(e,t):i.reject(e,t,u.Tf.INVALID)}const C=[];function k(){a(),o.$W.runWithBidder(e.code,()=>{l.Ic(u.qY.BIDDER_DONE,n),t(C,n.gdprConsent,n.uspConsent,n.gppConsent)})}const S=D(n).measureTime("validate",()=>n.bids.filter(t=>function(t){if(!e.isBidRequestValid(t))return(0,g.JE)("Invalid bid sent to bidder ".concat(e.code,": ").concat(JSON.stringify(t))),!1;return!0}(E.bidRequest(t))));if(0===S.length)return void k();const j={};S.forEach(e=>{j[e.bidId]=e,e.adUnitCode||(e.adUnitCode=e.placementCode)}),B(e,S,n,p,y,{onRequest:e=>l.Ic(u.qY.BEFORE_BIDDER_HTTP,n,e),onResponse:t=>{v(e.code),C.push(t)},onPaapi:e=>{const t=j[e.bidId];t?R(t,e):(0,g.JE)("Received fledge auction configuration for an unknown bidId",e)},onError:(t,i)=>{i.timedOut||v(e.code),r.Ay.callBidderError(e.code,i,n),l.Ic(u.qY.BIDDER_ERROR,{error:i,bidderRequest:n}),(0,g.vV)("Server call for ".concat(e.code," failed: ").concat(t," ").concat(i.status,". Continuing without bids."))},onBid:t=>{const n=j[t.requestId];if(n){var r;if(t.adapterCode=n.bidder,function(e,t){let n=m.u.get(t,"allowAlternateBidderCodes")||!1,i=m.u.get(t,"allowedAlternateBidderCodes");if(e&&t&&t!==e&&(i=(0,g.cy)(i)?i.map(e=>e.trim().toLowerCase()).filter(e=>!!e).filter(g.hj):i,!n||(0,g.cy)(i)&&"*"!==i[0]&&!i.includes(e)))return!0;return!1}(t.bidderCode,n.bidder))return(0,g.JE)("".concat(t.bidderCode," is not a registered partner or known bidder of ").concat(n.bidder,", hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings.")),void i.reject(n.adUnitCode,t,u.Tf.BIDDER_DISALLOWED);t.originalCpm=t.cpm,t.originalCurrency=t.currency,t.meta=t.meta||Object.assign({},t[n.bidder]),t.deferBilling=n.deferBilling,t.deferRendering=t.deferBilling&&(null!==(r=t.deferRendering)&&void 0!==r?r:"function"!=typeof e.onBidBillable);const o=Object.assign((0,s.O)(u.XQ.GOOD,n),t,(0,g.Up)(n,I));T(n.adUnitCode,o)}else(0,g.JE)("Bidder ".concat(e.code," made bid for unknown request ID: ").concat(t.requestId,". Ignoring.")),i.reject(null,t,u.Tf.INVALID_REQUEST_ID)},onCompletion:k})}});function t(t,n,i,r){S(e,t,n,i,r)}}const k=["bids","paapi"],B=(0,p.A_)("sync",function(e,t,n,i,r,o){let{onRequest:s,onResponse:a,onPaapi:c,onError:d,onBid:u,onCompletion:l}=o;const f=D(n);l=f.startTiming("total").stopBefore(l);const p=O(n);let h=f.measureTime("buildRequests",()=>e.buildRequests(t.map(p.bidRequest),p.bidderRequest(n)));if(!h||0===h.length)return void l();Array.isArray(h)||(h=[h]);const b=(0,g.U6)(l,h.length);h.forEach(t=>{const n=f.fork();function o(e){null!=e&&(e.metrics=n.fork().renameWith()),u(e)}const l=r(function(i,r){h();try{i=JSON.parse(i)}catch(e){}i={body:i,headers:{get:r.getResponseHeader.bind(r)}},a(i);try{i=n.measureTime("interpretResponse",()=>e.interpretResponse(i,t))}catch(t){return(0,g.vV)("Bidder ".concat(e.code," failed to interpret the server's response. Continuing without bids"),null,t),void b()}let s,d;i&&!Object.keys(i).some(e=>!k.includes(e))?(s=i.bids,d=i.paapi):s=i,(0,g.cy)(d)&&d.forEach(c),s&&((0,g.cy)(s)?s.forEach(o):o(s)),b()}),p=r(function(e,t){h(),d(e,t),b()});s(t);const h=n.startTiming("net");function w(n){var i;const r=t.options;return Object.assign(n,r,{browsingTopics:!(null!=r&&r.hasOwnProperty("browsingTopics")&&!r.browsingTopics)&&((null===(i=m.u.get(e.code,"topicsHeader"))||void 0===i||i)&&(0,v.io)(A.DL,(0,y.s)(E.tW,e.code)))})}switch(t.method){case"GET":i("".concat(t.url).concat(function(e){if(e)return"?".concat("object"==typeof e?(0,g.bL)(e):e);return""}(t.data)),{success:l,error:p},void 0,w({method:"GET",withCredentials:!0}));break;case"POST":i(t.url,{success:l,error:p},"string"==typeof t.data?t.data:JSON.stringify(t.data),w({method:"POST",contentType:"text/plain",withCredentials:!0}));break;default:(0,g.JE)("Skipping invalid request from ".concat(e.code,". Request type ").concat(t.type," must be GET or POST")),b()}})},"processBidderRequests"),S=(0,p.A_)("async",function(e,t,n,i,s){const c=o.$W.getConfig("userSync.aliasSyncEnabled");if(e.getUserSyncs&&(c||!r.Ay.aliasRegistry[e.code])){let r=o.$W.getConfig("userSync.filterSettings"),c=e.getUserSyncs({iframeEnabled:!(!r||!r.iframe&&!r.all),pixelEnabled:!(!r||!r.image&&!r.all)},t,n,i,s);c&&(Array.isArray(c)||(c=[c]),c.forEach(t=>{a.zt.registerSync(t.type,e.code,t.url)}),a.zt.bidderDone(e.code))}},"registerSyncs"),R=(0,p.A_)("sync",(e,t)=>{},"addPaapiConfig");function D(e){return(0,b.BO)(e.metrics).renameWith(t=>["adapter.client.".concat(t),"adapters.client.".concat(e.bidderCode,".").concat(t)])}},1580(e,t,n){n.d(t,{R:()=>u});var i=n(6811),r=n(3441),o=n(5139),s=n(5901),a=n(1069);const c=new WeakMap,d=["debugging","outstream","improvedigital","showheroes-bs","aaxBlockmeter","adagio","adloox","akamaidap","arcspan","airgrid","browsi","brandmetrics","clean.io","humansecurity","confiant","contxtful","hadron","mediafilter","medianet","azerionedge","a1Media","geoedge","qortex","dynamicAdBoost","51Degrees","symitridap","wurfl","justtag","tncId","ftrackId","id5"];function u(e,t,n,u,l,f){if(!(0,o.io)(i.pY,(0,r.s)(t,n)))return;if(!n||!e)return void(0,a.vV)("cannot load external script without url and moduleCode");if(!(0,s.mK)(d,n))return void(0,a.vV)("".concat(n," not whitelisted for loading external JavaScript"));l||(l=document);const g=m(l,e);if(g)return u&&"function"==typeof u&&(g.loaded?u():g.callbacks.push(u)),g.tag;const p=c.get(l)||{},h={loaded:!1,tag:null,callbacks:[]};return p[e]=h,c.set(l,p),u&&"function"==typeof u&&h.callbacks.push(u),(0,a.JE)("module ".concat(n," is loading external JavaScript")),function(t,n,i,r){i||(i=document);var o=i.createElement("script");o.type="text/javascript",o.async=!0;const s=m(i,e);s&&(s.tag=o);o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,n())}:o.onload=function(){n()};o.src=t,r&&(0,a.Bg)(o,r);return(0,a._s)(o,i),o}(e,function(){h.loaded=!0;try{for(let e=0;e<h.callbacks.length;e++)h.callbacks[e]()}catch(e){(0,a.vV)("Error executing callback","adloader.js:loadExternalScript",e)}},l,f);function m(e,t){const n=c.get(e);return n&&n[t]?n[t]:null}}},1692(e,t,n){n.d(t,{Q:()=>i});const i=(0,n(9214).A_)("sync",()=>{})},8044(e,t,n){n.d(t,{RD:()=>l,g4:()=>u,hd:()=>f});var i=n(3272),r=n(1069);const o={fetch:window.fetch.bind(window),makeRequest:(e,t)=>new Request(e,t),timeout(e,t){const n=new AbortController;let i=setTimeout(()=>{n.abort(),(0,r.vV)("Request timeout after ".concat(e,"ms"),t),i=null},e);return{signal:n.signal,done(){i&&clearTimeout(i)}}}},s="GET",a="Content-Type";function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,{request:t,done:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(t,n)=>{var r,s;let a;null==e||null!=(null===(r=n)||void 0===r?void 0:r.signal)||i.$W.getConfig("disableAjaxTimeout")||(a=o.timeout(e,t),n=Object.assign({signal:a.signal},n));let c=o.fetch(t,n);return null!=(null===(s=a)||void 0===s?void 0:s.done)&&(c=c.finally(a.done)),c};return null==t&&null==n||(r=(e=>function(i,r){const o=new URL(null==(null==i?void 0:i.url)?i:i.url,document.location).origin;let s=e(i,r);return t&&t(o),n&&(s=s.finally(()=>n(o))),s})(r)),r}function d(e,t){let{status:n,statusText:i="",headers:o,url:s}=e,c=0;function d(e){if(0===c)try{var n;c=(new DOMParser).parseFromString(t,null==o||null===(n=o.get(a))||void 0===n||null===(n=n.split(";"))||void 0===n?void 0:n[0])}catch(t){c=null,e&&e(t)}return c}return{readyState:XMLHttpRequest.DONE,status:n,statusText:i,responseText:t,response:t,responseType:"",responseURL:s,get responseXML(){return d(r.vV)},getResponseHeader:e=>null!=o&&o.has(e)?o.get(e):null,toJSON(){return Object.assign({responseXML:d()},this)},timedOut:!1}}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,{request:t,done:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=c(e,{request:t,done:n});return function(e,t,n){!function(e,t){const{success:n,error:i}="object"==typeof t&&null!=t?t:{success:"function"==typeof t?t:()=>null,error:(e,t)=>(0,r.vV)("Network error",e,t)};e.then(e=>e.text().then(t=>[e,t])).then(e=>{let[t,r]=e;const o=d(t,r);t.ok||304===t.status?n(r,o):i(t.statusText,o)},e=>i("",Object.assign(d({status:0},""),{reason:e,timedOut:"AbortError"===(null==e?void 0:e.name)})))}(i(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=n.method||(t?"POST":s);if(i===s&&t){const i=(0,r.Dl)(e,n);Object.assign(i.search,t),e=(0,r.c$)(i)}const c=new Headers(n.customHeaders);c.set(a,n.contentType||"text/plain");const d={method:i,headers:c};return i!==s&&t&&(d.body=t),n.withCredentials&&(d.credentials="include"),n.browsingTopics&&isSecureContext&&(d.browsingTopics=!0),n.keepalive&&(d.keepalive=!0),o.makeRequest(e,d)}(e,n,arguments.length>3&&void 0!==arguments[3]?arguments[3]:{})),t)}}const l=u(),f=c()},6881(e,t,n){n.d(t,{n:()=>Y});var i=n(1069),r=n(433),o=n(6833),s=n(2449),a=n(8044),c=n(3272);function d(e){let{index:t=Y.index}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=e.vastXml?e.vastXml:function(e,t){let n=(t=t&&(Array.isArray(t)?t:[t]))?t.map(e=>"<Impression><![CDATA[".concat(e,"]]></Impression>")).join(""):"";return'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e,"]]></VASTAdTagURI>\n        ").concat(n,"\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")}(e.vastUrl,e.vastImpUrl),i=t.getAuction(e);let r={type:"xml",value:n,ttlseconds:Number(e.ttl)+15};return c.$W.getConfig("cache.vasttrack")&&(r.bidder=e.bidder,r.bidid=e.requestId,r.aid=e.auctionId),null!=i&&(r.timestamp=i.getAuctionStart()),"string"==typeof e.customCacheKey&&""!==e.customCacheKey&&(r.key=e.customCacheKey),r}const u={store:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.g4;const i={puts:e.map(d)};n(c.$W.getConfig("cache.timeout"))(c.$W.getConfig("cache.url"),function(e){return{success:function(t){let n;try{n=JSON.parse(t).responses}catch(t){return void e(t,[])}n?e(null,n):e(new Error("The cache server didn't respond with a responses property."),[])},error:function(t,n){e(new Error("Error storing video ad in the cache: ".concat(t,": ").concat(JSON.stringify(n))),[])}}}(t),JSON.stringify(i),{contentType:"text/plain",withCredentials:!0})}};function l(e){const t=e.map(e=>e.bidResponse);u.store(t,function(n,r){var o;n?(o=n,(0,i.vV)("Failed to save to the video cache: ".concat(o,". Video bids will be discarded:"),t)):e.length!==r.length?(0,i.vV)("expected ".concat(e.length," cache IDs, got ").concat(r.length," instead")):r.forEach((t,n)=>{const{auctionInstance:r,bidResponse:o,afterBidAdded:s}=e[n];var a;""===t.uuid?(0,i.JE)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."):(o.videoCacheKey=t.uuid,o.vastUrl||(o.vastUrl=(a=o.videoCacheKey,"".concat(c.$W.getConfig("cache.url"),"?uuid=").concat(a))),W(r,o),s())})})}let f,g;c.$W.getConfig("cache",e=>{f="number"==typeof e.cache.batchSize&&e.cache.batchSize>0?e.cache.batchSize:1,g="number"==typeof e.cache.batchTimeout&&e.cache.batchTimeout>0?e.cache.batchTimeout:0});const p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:setTimeout,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,n=[[]],i=!1;const r=e=>e();return function(o,s,a){const c=g>0?e:r;n[n.length-1].length>=f&&n.push([]),n[n.length-1].push({auctionInstance:o,bidResponse:s,afterBidAdded:a}),i||(i=!0,c(()=>{n.forEach(t),n=[[]],i=!1},g))}}();var h=n(5789),m=n(8230),b=n(9214),v=n(5901),y=n(3895),E=n(1371),A=n(2693),w=n(5023),I=n(1445),T=n(8969),O=n(5555),C=n(6894);var k=n(7873);const{syncUsers:B}=m.zt,S="completed";w.on(T.qY.BID_ADJUSTMENT,function(e){!function(e){let t=function(e,t,n){var r;let{index:o=Y.index,bs:s=A.u}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};n=n||o.getBidRequest(t);const a=null==t?void 0:t.adapterCode,c=(null==t?void 0:t.bidderCode)||(null===(r=n)||void 0===r?void 0:r.bidder),d=s.get(null==t?void 0:t.adapterCode,"adjustAlternateBids"),u=s.getOwn(c,"bidCpmAdjustment")||s.get(d?a:c,"bidCpmAdjustment");if(u&&"function"==typeof u)try{return u(e,Object.assign({},t),n)}catch(e){(0,i.vV)("Error during bid adjustment",e)}return e}(e.cpm,e);t>=0&&(e.cpm=t)}(e)});const R={},D={},j=[],U=(0,k.m)();function _(e){let{adUnits:t,adUnitCodes:n,callback:a,cbTimeout:d,labels:u,auctionId:l,ortb2Fragments:f,metrics:g}=e;g=(0,C.BO)(g);const p=t,m=u,b=n,A=l||(0,i.lk)(),k=d,_=new Set,G=(0,O.v)(),F=(0,O.v)();let H,$,z,J,K=[],Q=a,X=[],Z=[],ee=[],te=[],ne=[];function ie(){return{auctionId:A,timestamp:H,auctionEnd:$,auctionStatus:J,adUnits:p,adUnitCodes:b,labels:m,bidderRequests:X,noBids:ee,bidsReceived:Z,bidsRejected:K,winningBids:te,timeout:k,metrics:g,seatNonBids:ne}}function re(e){if(e?w.Ic(T.qY.AUCTION_TIMEOUT,ie()):clearTimeout(z),void 0===$){let n=[];e&&((0,i.OG)("Auction ".concat(A," timedOut")),n=X.filter(e=>!_.has(e.bidderRequestId)).flatMap(e=>e.bids),n.length&&w.Ic(T.qY.BID_TIMEOUT,n)),J=S,$=Date.now(),g.checkpoint("auctionEnd"),g.timeBetween("requestBids","auctionEnd","requestBids.total"),g.timeBetween("callBids","auctionEnd","requestBids.callBids"),G.resolve(),w.Ic(T.qY.AUCTION_END,ie()),P(p,function(){try{if(null!=Q){const t=Z.filter(e=>b.includes(e.adUnitCode)).reduce(L,{});Q.apply(U,[t,e,A]),Q=null}}catch(e){(0,i.vV)("Error executing bidsBackHandler",null,e)}finally{n.length&&I.Ay.callTimedOutBidders(t,n,k);let e=c.$W.getConfig("userSync")||{};e.enableOverride||B(e.syncDelay)}})}}function oe(){c.$W.resetBidder(),(0,i.fH)("Bids Received for Auction with id: ".concat(A),Z),J=S,re(!1)}function se(e){_.add(e)}function ae(e){e.forEach(e=>{var t;t=e,X=X.concat(t)});let t={},n={bidRequests:e,run:()=>{z=setTimeout(()=>re(!0),k),J="inProgress",w.Ic(T.qY.AUCTION_INIT,ie());let n=function(e,t){let{index:n=Y.index}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=0,d=!1,u=new Set,l={};function f(){a--,d&&0===a&&e()}function g(e,t,n){return l[t.requestId]=!0,function(e,t){let{index:n=Y.index}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=n.getBidderRequest(e),o=n.getAdUnit(e),s=r&&r.start||e.requestTimestamp;Object.assign(e,{responseTimestamp:e.responseTimestamp||(0,i.vE)(),requestTimestamp:e.requestTimestamp||s,cpm:parseFloat(e.cpm)||0,bidder:e.bidder||e.bidderCode,adUnitCode:t}),null!=(null==o?void 0:o.ttlBuffer)&&(e.ttlBuffer=o.ttlBuffer);e.timeToRespond=e.responseTimestamp-e.requestTimestamp}(t,e),a++,n(f)}function p(e,a){g(e,a,e=>{let d=function(e){var t;let{index:n=Y.index}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};w.Ic(T.qY.BID_ADJUSTMENT,e);const i=(null===(t=n.getBidRequest(e))||void 0===t?void 0:t.renderer)||n.getAdUnit(e).renderer,r=e.mediaType,s=n.getMediaTypes(e),a=s&&s[r];var d=a&&a.renderer,u=null;d&&d.url&&d.render&&(!0!==d.backupOnly||!e.renderer)?u=d:i&&i.url&&i.render&&(!0!==i.backupOnly||!e.renderer)&&(u=i);u&&(e.renderer=h.A4.install({url:u.url,config:u.options}),e.renderer.setRender(u.render));const l=M(e.mediaType,s,c.$W.getConfig("mediaTypePriceGranularity")),f=(0,o.j)(e.cpm,"object"==typeof l?l:c.$W.getConfig("customPriceBucket"),c.$W.getConfig("currency.granularityMultiplier"));return e.pbLg=f.low,e.pbMg=f.med,e.pbHg=f.high,e.pbAg=f.auto,e.pbDg=f.dense,e.pbCg=f.custom,e}(a);w.Ic(T.qY.BID_ACCEPTED,d),d.mediaType===E.G_?function(e,t,n){let{index:o=Y.index}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=!0;const a=(0,r.A)(o.getMediaTypes({requestId:t.originalRequestId||t.requestId,adUnitId:t.adUnitId}),"video"),d=a&&(0,r.A)(a,"context"),u=a&&(0,r.A)(a,"useCacheKey");c.$W.getConfig("cache.url")&&(u||d!==y.H6)&&(!t.videoCacheKey||c.$W.getConfig("cache.ignoreBidderCacheKey")?(s=!1,V(e,t,n,a)):t.vastUrl||((0,i.vV)("videoCacheKey specified but not required vastUrl for video bid"),s=!1));s&&(W(e,t),n())}(t,d,e):((0,s.l6)(d)&&(0,s.gs)(d,n.getAdUnit(d)),W(t,d),e())})}function m(e,n,r){return g(e,n,e=>{n.rejectionReason=r,(0,i.JE)("Bid from ".concat(n.bidder||"unknown bidder"," was rejected: ").concat(r),n),w.Ic(T.qY.BID_REJECTED,n),t.addBidRejected(n),e()})}function b(){let n=this,r=t.getBidRequests();const o=c.$W.getConfig("auctionOptions");if(u.add(n),o&&!(0,i.Im)(o)){const e=o.secondaryBidders;e&&!r.every(t=>(0,v.mK)(e,t.bidderCode))&&(r=r.filter(t=>!(0,v.mK)(e,t.bidderCode)))}d=r.every(e=>u.has(e)),n.bids.forEach(e=>{l[e.bidId]||(t.addNoBid(e),w.Ic(T.qY.NO_BID,e))}),d&&0===a&&e()}return{addBidResponse:function(){function e(e,t){q.call({dispatch:p},e,t,(()=>{let n=!1;return i=>{n||(m(e,t,i),n=!0)}})())}return e.reject=m,e}(),adapterDone:function(){x(O.k.resolve()).finally(()=>b.call(this))}}}(oe,this);I.Ay.callBids(p,e,n.addBidResponse,n.adapterDone,{request(e,n){d(R,n),d(t,e),D[e]||(D[e]={SRA:!0,origin:n}),t[e]>1&&(D[e].SRA=!1)},done(e){R[e]--,j[0]&&a(j[0])&&j.shift()}},k,se,f),F.resolve()}};function a(e){let t=!0,n=c.$W.getConfig("maxRequestsPerOrigin")||4;return e.bidRequests.some(e=>{let i=1,r=void 0!==e.src&&e.src===T.RW.SRC?"s2s":e.bidderCode;return D[r]&&(!1===D[r].SRA&&(i=Math.min(e.bids.length,n)),R[D[r].origin]+i>n&&(t=!1)),!t}),t&&e.run(),t}function d(e,t){void 0===e[t]?e[t]=1:e[t]++}a(n)||((0,i.JE)("queueing auction due to limited endpoint capacity"),j.push(n))}return w.on(T.qY.SEAT_NON_BID,e=>{var t;e.auctionId===A&&(t=e.seatnonbid,ne=ne.concat(t))}),{addBidReceived:function(e){Z=Z.concat(e)},addBidRejected:function(e){K=K.concat(e)},addNoBid:function(e){ee=ee.concat(e)},callBids:function(){J="started",H=Date.now();let e=g.measureTime("requestBids.makeRequests",()=>I.Ay.makeBidRequests(p,H,A,k,m,f,g));(0,i.fH)("Bids Requested for Auction with id: ".concat(A),e),g.checkpoint("callBids"),e.length<1?((0,i.JE)("No valid bid requests returned for auction"),oe()):N.call({dispatch:ae,context:this},e)},addWinningBid:function(e){te=te.concat(e),I.Ay.callBidWonBidder(e.adapterCode||e.bidder,e,t),e.deferBilling||I.Ay.triggerBilling(e)},setBidTargeting:function(e){I.Ay.callSetTargetingBidder(e.adapterCode||e.bidder,e)},getWinningBids:()=>te,getAuctionStart:()=>H,getAuctionEnd:()=>$,getTimeout:()=>k,getAuctionId:()=>A,getAuctionStatus:()=>J,getAdUnits:()=>p,getAdUnitCodes:()=>b,getBidRequests:()=>X,getBidsReceived:()=>Z,getNoBids:()=>ee,getNonBids:()=>ne,getFPD:()=>f,getMetrics:()=>g,end:G.promise,requestsDone:F.promise}}const q=(0,b.A_)("sync",function(e,t,n){!function(e){const t=c.$W.getConfig("maxBid");return!t||!e.cpm||t>=Number(e.cpm)}(t)?n(T.Tf.PRICE_TOO_HIGH):this.dispatch.call(null,e,t)},"addBidResponse"),x=(0,b.A_)("sync",e=>e,"responsesReady"),N=(0,b.A_)("sync",function(e){this.dispatch.call(this.context,e)},"addBidderRequests"),P=(0,b.A_)("async",function(e,t){t&&t()},"bidsBackCallback");function W(e,t){!function(e){let t;const n=!0===A.u.get(e.bidderCode,"allowZeroCpmBids")?e.cpm>=0:e.cpm>0;e.bidderCode&&(n||e.dealId)&&(t=function(e,t){let{index:n=Y.index}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t)return{};const i=n.getBidRequest(t);var r={};const o=H(t.mediaType,e);$(r,o,t,i),e&&A.u.getOwn(e,T.iD.ADSERVER_TARGETING)&&($(r,A.u.ownSettingsFor(e),t,i),t.sendStandardTargeting=A.u.get(e,"sendStandardTargeting"));t.native&&(r=Object.assign({},r,(0,s.Zj)(t)));return r}(e.bidderCode,e));e.adserverTargeting=Object.assign(e.adserverTargeting||{},t)}(t),(0,C.BO)(t.metrics).timeSince("addBidResponse","addBidResponse.total"),e.addBidReceived(t),w.Ic(T.qY.BID_RESPONSE,t)}const V=(0,b.A_)("async",function(e,t,n,i){p(e,t,n)},"callPrebidCache");function M(e,t,n){if(e&&n){if(e===E.G_){const e=(0,r.A)(t,"".concat(E.G_,".context"),"instream");if(n["".concat(E.G_,"-").concat(e)])return n["".concat(E.G_,"-").concat(e)]}return n[e]}}const G=e=>t=>{const n=e||function(e){let{index:t=Y.index}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=M(e.mediaType,t.getMediaTypes(e),c.$W.getConfig("mediaTypePriceGranularity"));return"string"==typeof e.mediaType&&n?"string"==typeof n?n:"custom":c.$W.getConfig("priceGranularity")}(t);return n===T.UE.AUTO?t.pbAg:n===T.UE.DENSE?t.pbDg:n===T.UE.LOW?t.pbLg:n===T.UE.MEDIUM?t.pbMg:n===T.UE.HIGH?t.pbHg:n===T.UE.CUSTOM?t.pbCg:void 0};function F(e,t){return{key:e,val:"function"==typeof t?function(e,n){return t(e,n)}:function(e){return(0,i._W)(e,t)}}}function H(e,t){const n=Object.assign({},A.u.settingsFor(null));if(n[T.iD.ADSERVER_TARGETING]||(n[T.iD.ADSERVER_TARGETING]=[F(T.xS.BIDDER,"bidderCode"),F(T.xS.AD_ID,"adId"),F(T.xS.PRICE_BUCKET,G()),F(T.xS.SIZE,"size"),F(T.xS.DEAL,"dealId"),F(T.xS.SOURCE,"source"),F(T.xS.FORMAT,"mediaType"),F(T.xS.ADOMAIN,e=>e.meta&&e.meta.advertiserDomains&&e.meta.advertiserDomains.length>0?[e.meta.advertiserDomains].flat()[0]:""),F(T.xS.ACAT,e=>e.meta&&e.meta.primaryCatId?e.meta.primaryCatId:""),F(T.xS.DSP,e=>e.meta&&(e.meta.networkId||e.meta.networkName)?(0,r.A)(e,"meta.networkName")||(0,r.A)(e,"meta.networkId"):""),F(T.xS.CRID,e=>e.creativeId?e.creativeId:"")]),"video"===e){const e=n[T.iD.ADSERVER_TARGETING].slice();if(n[T.iD.ADSERVER_TARGETING]=e,[T.xS.UUID,T.xS.CACHE_ID].forEach(t=>{void 0===(0,v.I6)(e,e=>e.key===t)&&e.push(F(t,"videoCacheKey"))}),c.$W.getConfig("cache.url")&&(!t||!1!==A.u.get(t,"sendStandardTargeting"))){const t=(0,i.Dl)(c.$W.getConfig("cache.url"));void 0===(0,v.I6)(e,e=>e.key===T.xS.CACHE_HOST)&&e.push(F(T.xS.CACHE_HOST,function(e){return(0,r.A)(e,"adserverTargeting.".concat(T.xS.CACHE_HOST))?e.adserverTargeting[T.xS.CACHE_HOST]:t.hostname}))}}return n}function $(e,t,n,r){var o=t[T.iD.ADSERVER_TARGETING];return n.size=n.getSize(),(o||[]).forEach(function(o){var s=o.key,a=o.val;if(e[s]&&(0,i.JE)("The key: "+s+" is being overwritten"),(0,i.fp)(a))try{a=a(n,r)}catch(e){(0,i.vV)("bidmanager","ERROR",e)}(void 0===t.suppressEmptyKeys||!0!==t.suppressEmptyKeys)&&s!==T.xS.DEAL&&s!==T.xS.ACAT&&s!==T.xS.DSP&&s!==T.xS.CRID||!(0,i.xQ)(a)&&null!=a?e[s]=a:(0,i.fH)("suppressing empty key '"+s+"' from adserver targeting")}),e}function L(e,t){return e[t.adUnitCode]||(e[t.adUnitCode]={bids:[]}),e[t.adUnitCode].bids.push(t),e}function z(e){Object.assign(this,{getAuction(t){let{auctionId:n}=t;if(null!=n)return e().find(e=>e.getAuctionId()===n)},getAdUnit(t){let{adUnitId:n}=t;if(null!=n)return e().flatMap(e=>e.getAdUnits()).find(e=>e.adUnitId===n)},getMediaTypes(e){let{adUnitId:t,requestId:n}=e;if(null!=n){const e=this.getBidRequest({requestId:n});if(null!=e&&(null==t||e.adUnitId===t))return e.mediaTypes}else if(null!=t){const e=this.getAdUnit({adUnitId:t});if(null!=e)return e.mediaTypes}},getBidderRequest(t){let{requestId:n,bidderRequestId:i}=t;if(null!=n||null!=i){let t=e().flatMap(e=>e.getBidRequests());return null!=i&&(t=t.filter(e=>e.bidderRequestId===i)),null==n?t[0]:t.find(e=>e.bids&&null!=e.bids.find(e=>e.bidId===n))}},getBidRequest(t){let{requestId:n}=t;if(null!=n)return e().flatMap(e=>e.getBidRequests()).flatMap(e=>e.bids).find(e=>e&&e.bidId===n)},getOrtb2(e){var t,n;return(null===(t=this.getBidderRequest(e))||void 0===t?void 0:t.ortb2)||(null===(n=this.getAuction(e))||void 0===n||null===(n=n.getFPD())||void 0===n||null===(n=n.global)||void 0===n?void 0:n.ortb2)}})}var J=n(6853),K=n(7863);const Q="minBidCacheTTL";const Y=function(){let e=null;const t=(0,J.H)({startTime:e=>e.end.then(()=>e.getAuctionEnd()),ttl:t=>null==e?null:t.end.then(()=>1e3*Math.max(e,...t.getBidsReceived().map(K.L)))});(0,K.u)(()=>{null!=e&&t.refresh()}),c.$W.getConfig(Q,n=>{const i=e;e=null==n?void 0:n[Q],e="number"==typeof e?e:null,i!==e&&t.refresh()});const n={onExpiry:t.onExpiry};function r(e){for(const n of t)if(n.getAuctionId()===e)return n}function o(){return t.toArray().flatMap(e=>e.getBidsReceived())}return n.addWinningBid=function(e){const t=(0,C.BO)(e.metrics);t.checkpoint("bidWon"),t.timeBetween("auctionEnd","bidWon","adserver.pending"),t.timeBetween("requestBids","bidWon","adserver.e2e");const n=r(e.auctionId);n?n.addWinningBid(e):(0,i.JE)("Auction not found when adding winning bid")},Object.entries({getAllWinningBids:{name:"getWinningBids"},getBidsRequested:{name:"getBidRequests"},getNoBids:{},getAdUnits:{},getBidsReceived:{pre:e=>e.getAuctionStatus()===S},getAdUnitCodes:{post:i.hj}}).forEach(e=>{let[i,{name:r=i,pre:o,post:s}]=e;const a=null==o?e=>e[r]():e=>o(e)?e[r]():[],c=null==s?e=>e:e=>e.filter(s);n[i]=()=>c(t.toArray().flatMap(a))}),n.getAllBidsForAdUnitCode=function(e){return o().filter(t=>t&&t.adUnitCode===e)},n.createAuction=function(e){const n=_(e);return function(e){t.add(e)}(n),n},n.findBidByAdId=function(e){return o().find(t=>t.adId===e)},n.getStandardBidderAdServerTargeting=function(){return H()[T.iD.ADSERVER_TARGETING]},n.setStatusForBids=function(e,t){let i=n.findBidByAdId(e);if(i&&(i.status=t),i&&t===T.tl.BID_TARGETING_SET){const e=r(i.auctionId);e&&e.setBidTargeting(i)}},n.getLastAuctionId=function(){const e=t.toArray();return e.length&&e[e.length-1].getAuctionId()},n.clearAllAuctions=function(){t.clear()},n.index=new z(()=>t.toArray()),n}()},7863(e,t,n){n.d(t,{L:()=>a,u:()=>c});var i=n(3272),r=n(1069);let o=1;const s=[];function a(e){return e.ttl-(e.hasOwnProperty("ttlBuffer")?e.ttlBuffer:o)}function c(e){s.push(e)}i.$W.getConfig("ttlBuffer",e=>{if("number"==typeof e.ttlBuffer){const t=o;o=e.ttlBuffer,t!==o&&s.forEach(e=>e(o))}else(0,r.vV)("Invalid value for ttlBuffer",e.ttlBuffer)})},2693(e,t,n){n.d(t,{u:()=>l});var i=n(1069),r=n(433),o=n(7873),s=n(8969);function a(e,t){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.add(e)}function c(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}var d=new WeakSet;function u(e){return null==e?this.defaultScope:e}const l=new class{constructor(e,t){a(this,d),this.getSettings=e,this.defaultScope=t}get(e,t){let n=this.getOwn(e,t);return void 0===n&&(n=this.getOwn(null,t)),n}getOwn(e,t){return e=c(d,this,u).call(this,e),(0,r.A)(this.getSettings(),"".concat(e,".").concat(t))}getScopes(){return Object.keys(this.getSettings()).filter(e=>e!==this.defaultScope)}settingsFor(e){return(0,i.D9)({},this.ownSettingsFor(null),this.ownSettingsFor(e))}ownSettingsFor(e){return e=c(d,this,u).call(this,e),this.getSettings()[e]||{}}}(()=>(0,o.m)().bidderSettings||{},s.iD.BD_SETTING_STANDARD)},3597(e,t,n){n.d(t,{O:()=>o});var i=n(1069);function r(e){let{src:t="client",bidder:n="",bidId:r,transactionId:o,adUnitId:s,auctionId:a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var c=t,d=e||0;Object.assign(this,{bidderCode:n,width:0,height:0,statusMessage:function(){switch(d){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}}(),adId:(0,i.s0)(),requestId:r,transactionId:o,adUnitId:s,auctionId:a,mediaType:"banner",source:c}),this.getStatusCode=function(){return d},this.getSize=function(){return this.width+"x"+this.height},this.getIdentifiers=function(){return{src:this.source,bidder:this.bidderCode,bidId:this.requestId,transactionId:this.transactionId,adUnitId:this.adUnitId,auctionId:this.auctionId}}}function o(e,t){return new r(e,t)}},3272(e,t,n){n.d(t,{$W:()=>b,Ov:()=>f});var i=n(4705),r=n(6833),o=n(5901),s=n(1069),a=n(433),c=n(8969);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}const u="TRUE"===(0,s.Ez)(c.M).toUpperCase(),l={},f="random",g={};g[f]=!0,g.fixed=!0;const p=f,h={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"};function m(e){const t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?{priceGranularity:h.MEDIUM,customPriceBucket:{},mediaTypePriceGranularity:{},bidderSequence:p,auctionOptions:{}}:{};function n(e){return t[e]}function i(n,i){t.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0}),t[n]=i}const a={publisherDomain:{set(e){null!=e&&(0,s.JE)("publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"),i("publisherDomain",e)}},priceGranularity:{set(e){d(e)&&("string"==typeof e?i("priceGranularity",c(e)?e:h.MEDIUM):(0,s.Qd)(e)&&(i("customPriceBucket",e),i("priceGranularity",h.CUSTOM),(0,s.OG)("Using custom price granularity")))}},customPriceBucket:{},mediaTypePriceGranularity:{set(e){null!=e&&i("mediaTypePriceGranularity",Object.keys(e).reduce((t,i)=>(d(e[i])?"string"==typeof e?t[i]=c(e[i])?e[i]:n("priceGranularity"):(0,s.Qd)(e)&&(t[i]=e[i],(0,s.OG)("Using custom price granularity for ".concat(i))):(0,s.JE)("Invalid price granularity for media type: ".concat(i)),t),{}))}},bidderSequence:{set(e){g[e]?i("bidderSequence",e):(0,s.JE)("Invalid order: ".concat(e,". Bidder Sequence was not set."))}},auctionOptions:{set(e){(function(e){if(!(0,s.Qd)(e))return(0,s.JE)("Auction Options must be an object"),!1;for(let t of Object.keys(e)){if("secondaryBidders"!==t&&"suppressStaleRender"!==t)return(0,s.JE)("Auction Options given an incorrect param: ".concat(t)),!1;if("secondaryBidders"===t){if(!(0,s.cy)(e[t]))return(0,s.JE)("Auction Options ".concat(t," must be of type Array")),!1;if(!e[t].every(s.O8))return(0,s.JE)("Auction Options ".concat(t," must be only string")),!1}else if("suppressStaleRender"===t&&!(0,s.Lm)(e[t]))return(0,s.JE)("Auction Options ".concat(t," must be of type boolean")),!1}return!0})(e)&&i("auctionOptions",e)}}};return Object.defineProperties(e,Object.fromEntries(Object.entries(a).map(e=>{let[r,o]=e;return[r,Object.assign({get:n.bind(null,r),set:i.bind(null,r),enumerable:t.hasOwnProperty(r),configurable:!t.hasOwnProperty(r)},o)]}))),e;function c(e){return(0,o.I6)(Object.keys(h),t=>e===h[t])}function d(e){if(!e)return(0,s.vV)("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"==typeof e)c(e)||(0,s.JE)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if((0,s.Qd)(e)&&!(0,r.q)(e))return(0,s.vV)("Invalid custom price value passed to `setPriceGranularity()`"),!1;return!0}}const b=function(){let e,t,n,r=[],c=null;function f(){e={};let i=m({debug:u,bidderTimeout:3e3,enableSendAllBids:true,useBidCache:false,deviceAccess:true,disableAjaxTimeout:false,maxNestedIframes:10,maxBid:5e3,userSync:{topics:l}});t&&A(Object.keys(t).reduce((e,n)=>(t[n]!==i[n]&&(e[n]=i[n]||{}),e),{})),t=i,n={}}function g(){if(c&&n&&(0,s.Qd)(n[c])){let e=n[c];const i=new Set(Object.keys(t).concat(Object.keys(e)));return(0,o.A6)(i).reduce((n,i)=>(void 0===e[i]?n[i]=t[i]:void 0===t[i]?n[i]=e[i]:(0,s.Qd)(e[i])?n[i]=(0,s.D9)({},t[i],e[i]):n[i]=e[i],n),{})}return Object.assign({},t)}const[p,h]=[g,function(){const e=g();return Object.defineProperty(e,"ortb2",{get:function(){throw new Error("invalid access to 'orbt2' config - use request parameters instead")}}),e}].map(e=>function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){const t=arguments.length<=0?void 0:arguments[0];return t?(0,a.A)(e(),t):g()}return E(...arguments)}),[b,v]=[h,p].map(e=>function(){let t=e(...arguments);return t&&"object"==typeof t&&(t=(0,s.Go)(t)),t});function y(n){if(!(0,s.Qd)(n))return void(0,s.vV)("setConfig options must be an object");let i=Object.keys(n),r={};i.forEach(i=>{let o=n[i];(0,s.Qd)(e[i])&&(0,s.Qd)(o)&&(o=Object.assign({},e[i],o));try{r[i]=t[i]=o}catch(e){(0,s.JE)("Cannot set config for property ".concat(i," : "),e)}}),A(r)}function E(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t;if("string"!=typeof e&&(i=e,e="*",n=t||{}),"function"!=typeof i)return void(0,s.vV)("listener must be a function");const o={topic:e,callback:i};return r.push(o),n.init&&i("*"===e?h():{[e]:h(e)}),function(){r.splice(r.indexOf(o),1)}}function A(e){const t=Object.keys(e);r.filter(e=>(0,o.mK)(t,e.topic)).forEach(t=>{t.callback({[t.topic]:e[t.topic]})}),r.filter(e=>"*"===e.topic).forEach(t=>t.callback(e))}function w(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{!function(e){if(!(0,s.Qd)(e))throw"setBidderConfig bidder options must be an object";if(!Array.isArray(e.bidders)||!e.bidders.length)throw"setBidderConfig bidder options must contain a bidders list with at least 1 bidder";if(!(0,s.Qd)(e.config))throw"setBidderConfig bidder options must contain a config object"}(e),e.bidders.forEach(i=>{n[i]||(n[i]=m({},!1)),Object.keys(e.config).forEach(r=>{let o=e.config[r];const a=n[i][r];if((0,s.Qd)(o)&&(null==a||(0,s.Qd)(a))){const e=t?s.D9:Object.assign;n[i][r]=e({},a||{},o)}else n[i][r]=o})})}catch(e){(0,s.vV)(e)}}function I(e,t){c=e;try{return t()}finally{T()}}function T(){c=null}return f(),{getCurrentBidder:function(){return c},resetBidder:T,getConfig:h,getAnyConfig:p,readConfig:b,readAnyConfig:v,setConfig:y,mergeConfig:function(e){if(!(0,s.Qd)(e))return void(0,s.vV)("mergeConfig input must be an object");const t=(0,s.D9)(g(),e);return y(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,i.A)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t)),t},setDefaults:function(n){(0,s.Qd)(e)?(Object.assign(e,n),Object.assign(t,n)):(0,s.vV)("defaults must be an object")},resetConfig:f,runWithBidder:I,callbackWithBidder:function(e){return function(t){return function(){if("function"==typeof t){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return I(e,t.bind(this,...i))}(0,s.JE)("config.callbackWithBidder callback is not a function")}}},setBidderConfig:w,getBidderConfig:function(){return n},mergeBidderConfig:function(e){return w(e,!0)}}}()},6916(e,t,n){n.d(t,{B1:()=>f,SL:()=>B,ad:()=>T,et:()=>O,mW:()=>w,o2:()=>C,t6:()=>I});var i=n(4705),r=n(1069),o=n(5555),s=n(3272);function a(e,t,n){c(e,t),t.set(e,n)}function c(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(e,t){return e.get(l(e,t))}function u(e,t,n){return e.set(l(e,t),n),n}function l(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}const f=Object.freeze({});var g=new WeakMap,p=new WeakMap,h=new WeakMap,m=new WeakMap,b=new WeakMap,v=new WeakMap,y=new WeakSet;class E{constructor(){var e,t;c(e=this,t=y),t.add(e),a(this,g,void 0),a(this,p,void 0),a(this,h,void 0),a(this,m,void 0),a(this,b,!0),a(this,v,void 0),(0,i.A)(this,"generatedTime",void 0),(0,i.A)(this,"hashFields",void 0),this.reset()}reset(){u(h,this,(0,o.v)()),u(g,this,!1),u(p,this,null),u(m,this,!1),this.generatedTime=null}enable(){u(g,this,!0)}get enabled(){return d(g,this)}get ready(){return d(m,this)}get promise(){return d(m,this)?o.k.resolve(d(p,this)):(d(g,this)||l(y,this,A).call(this,null),d(h,this).promise)}setConsentData(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,r.vE)();this.generatedTime=t,u(b,this,!0),l(y,this,A).call(this,e)}getConsentData(){return d(p,this)}get hash(){return d(b,this)&&(u(v,this,(0,r.PB)(JSON.stringify(d(p,this)&&this.hashFields?this.hashFields.map(e=>d(p,this)[e]):d(p,this)))),u(b,this,!1)),d(v,this)}}function A(e){u(m,this,!0),u(p,this,e),d(h,this).resolve(e)}const w=new class extends E{constructor(){super(...arguments),(0,i.A)(this,"hashFields",["gdprApplies","consentString"])}getConsentMeta(){const e=this.getConsentData();if(e&&e.vendorData&&this.generatedTime)return{gdprApplies:e.gdprApplies,consentStringSize:(0,r.O8)(e.vendorData.tcString)?e.vendorData.tcString.length:0,generatedAt:this.generatedTime,apiVersion:e.apiVersion}}},I=new class extends E{getConsentMeta(){if(this.getConsentData()&&this.generatedTime)return{generatedAt:this.generatedTime}}},T=new class extends E{constructor(){super(...arguments),(0,i.A)(this,"hashFields",["applicableSections","gppString"])}getConsentMeta(){if(this.getConsentData()&&this.generatedTime)return{generatedAt:this.generatedTime}}},O=(()=>{function e(){return!!s.$W.getConfig("coppa")}return{getCoppa:e,getConsentData:e,getConsentMeta:e,reset(){},get promise(){return o.k.resolve(e())},get hash(){return e()?"1":"0"}}})(),C=function(){const e={},t={},n={};return{register(i,r,o){o&&((e[r]=e[r]||{})[i]=o,t.hasOwnProperty(r)?t[r]!==o&&(t[r]=n):t[r]=o)},get(i){const r={modules:e[i]||{}};return t.hasOwnProperty(i)&&t[i]!==n&&(r.gvlid=t[i]),r}}}(),k={gdpr:w,usp:I,gpp:T,coppa:O};const B=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;return e=Object.entries(e),Object.assign({get promise(){return o.k.all(e.map(e=>{let[t,n]=e;return n.promise.then(e=>[t,e])})).then(e=>Object.fromEntries(e))},get hash(){return(0,r.PB)(e.map(e=>{let[t,n]=e;return n.hash}).join(":"))}},Object.fromEntries(["getConsentData","getConsentMeta","reset"].map(t=>{return[t,(n=t,function(){return Object.fromEntries(e.map(e=>{let[t,i]=e;return[t,i[n]()]}))})];var n})))}()},8969(e,t,n){n.d(t,{IY:()=>A,M:()=>r,RW:()=>g,Tf:()=>h,UE:()=>d,XQ:()=>o,Zh:()=>l,_B:()=>y,as:()=>a,cA:()=>c,h0:()=>m,iD:()=>i,jO:()=>b,nl:()=>E,oA:()=>v,qY:()=>s,tl:()=>p,x5:()=>f,xS:()=>u});const i={PL_CODE:"code",PL_SIZE:"sizes",PL_BIDS:"bids",BD_BIDDER:"bidder",BD_ID:"paramsd",BD_PL_ID:"placementId",ADSERVER_TARGETING:"adserverTargeting",BD_SETTING_STANDARD:"standard"},r="pbjs_debug",o={GOOD:1},s={AUCTION_INIT:"auctionInit",AUCTION_TIMEOUT:"auctionTimeout",AUCTION_END:"auctionEnd",BID_ADJUSTMENT:"bidAdjustment",BID_TIMEOUT:"bidTimeout",BID_REQUESTED:"bidRequested",BID_RESPONSE:"bidResponse",BID_REJECTED:"bidRejected",NO_BID:"noBid",SEAT_NON_BID:"seatNonBid",BID_WON:"bidWon",BIDDER_DONE:"bidderDone",BIDDER_ERROR:"bidderError",SET_TARGETING:"setTargeting",BEFORE_REQUEST_BIDS:"beforeRequestBids",BEFORE_BIDDER_HTTP:"beforeBidderHttp",REQUEST_BIDS:"requestBids",ADD_AD_UNITS:"addAdUnits",AD_RENDER_FAILED:"adRenderFailed",AD_RENDER_SUCCEEDED:"adRenderSucceeded",TCF2_ENFORCEMENT:"tcf2Enforcement",AUCTION_DEBUG:"auctionDebug",BID_VIEWABLE:"bidViewable",STALE_RENDER:"staleRender",BILLABLE_EVENT:"billableEvent",BID_ACCEPTED:"bidAccepted",RUN_PAAPI_AUCTION:"paapiRunAuction",PBS_ANALYTICS:"pbsAnalytics",PAAPI_BID:"paapiBid",PAAPI_NO_BID:"paapiNoBid",PAAPI_ERROR:"paapiError"},a={PREVENT_WRITING_ON_MAIN_DOCUMENT:"preventWritingOnMainDocument",NO_AD:"noAd",EXCEPTION:"exception",CANNOT_FIND_AD:"cannotFindAd",MISSING_DOC_OR_ADID:"missingDocOrAdid"},c={bidWon:"adUnitCode"},d={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},u={BIDDER:"hb_bidder",AD_ID:"hb_adid",PRICE_BUCKET:"hb_pb",SIZE:"hb_size",DEAL:"hb_deal",SOURCE:"hb_source",FORMAT:"hb_format",UUID:"hb_uuid",CACHE_ID:"hb_cache_id",CACHE_HOST:"hb_cache_host",ADOMAIN:"hb_adomain",ACAT:"hb_acat",CRID:"hb_crid",DSP:"hb_dsp"},l={BIDDER:"hb_bidder",AD_ID:"hb_adid",PRICE_BUCKET:"hb_pb",SIZE:"hb_size",DEAL:"hb_deal",FORMAT:"hb_format",UUID:"hb_uuid",CACHE_HOST:"hb_cache_host"},f={title:"hb_native_title",body:"hb_native_body",body2:"hb_native_body2",privacyLink:"hb_native_privacy",privacyIcon:"hb_native_privicon",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",displayUrl:"hb_native_displayurl",cta:"hb_native_cta",rating:"hb_native_rating",address:"hb_native_address",downloads:"hb_native_downloads",likes:"hb_native_likes",phone:"hb_native_phone",price:"hb_native_price",salePrice:"hb_native_saleprice",rendererUrl:"hb_renderer_url",adTemplate:"hb_adTemplate"},g={SRC:"s2s",DEFAULT_ENDPOINT:"https://prebid.adnxs.com/pbs/v1/openrtb2/auction",SYNCED_BIDDERS_KEY:"pbjsSyncs"},p={BID_TARGETING_SET:"targetingSet",RENDERED:"rendered",BID_REJECTED:"bidRejected"},h={INVALID:"Bid has missing or invalid properties",INVALID_REQUEST_ID:"Invalid request ID",BIDDER_DISALLOWED:"Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes",FLOOR_NOT_MET:"Bid does not meet price floor",CANNOT_CONVERT_CURRENCY:"Unable to convert currency",DSA_REQUIRED:"Bid does not provide required DSA transparency info",DSA_MISMATCH:"Bid indicates inappropriate DSA rendering method",PRICE_TOO_HIGH:"Bid price exceeds maximum value"},m={body:"desc",body2:"desc2",sponsoredBy:"sponsored",cta:"ctatext",rating:"rating",address:"address",downloads:"downloads",likes:"likes",phone:"phone",price:"price",salePrice:"saleprice",displayUrl:"displayurl"},b={sponsored:1,desc:2,rating:3,likes:4,downloads:5,price:6,saleprice:7,phone:8,address:9,desc2:10,displayurl:11,ctatext:12},v={ICON:1,MAIN:3},y=["privacyIcon","clickUrl","sendTargetingKeys","adTemplate","rendererUrl","type"],E={REQUEST:"Prebid Request",RESPONSE:"Prebid Response",NATIVE:"Prebid Native",EVENT:"Prebid Event"},A="__pb_locator__"},6833(e,t,n){n.d(t,{j:()=>l,q:()=>g});var i=n(5901),r=n(1069),o=n(3272);const s={buckets:[{max:5,increment:.5}]},a={buckets:[{max:20,increment:.1}]},c={buckets:[{max:20,increment:.01}]},d={buckets:[{max:3,increment:.01},{max:8,increment:.05},{max:20,increment:.5}]},u={buckets:[{max:5,increment:.05},{max:10,increment:.1},{max:20,increment:.5}]};function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=parseFloat(e);return isNaN(i)&&(i=""),{low:""===i?"":f(e,s,n),med:""===i?"":f(e,a,n),high:""===i?"":f(e,c,n),auto:""===i?"":f(e,u,n),dense:""===i?"":f(e,d,n),custom:""===i?"":f(e,t,n)}}function f(e,t,n){let s="";if(!g(t))return s;const a=t.buckets.reduce((e,t)=>e.max>t.max?e:t,{max:0});let c=0,d=(0,i.I6)(t.buckets,t=>{if(e>a.max*n){let e=t.precision;void 0===e&&(e=2),s=(t.max*n).toFixed(e)}else{if(e<=t.max*n&&e>=c*n)return t.min=c,t;c=t.max}});return d&&(s=function(e,t,n){const i=void 0!==t.precision?t.precision:2,s=t.increment*n,a=t.min*n;let c=Math.floor,d=o.$W.getConfig("cpmRoundingFunction");"function"==typeof d&&(c=d);let u,l,f=Math.pow(10,i+2),g=(e*f-a*f)/(s*f);try{u=c(g)*s+a}catch(e){l=!0}(l||"number"!=typeof u)&&((0,r.JE)("Invalid rounding function passed in config"),u=Math.floor(g)*s+a);return u=Number(u.toFixed(10)),u.toFixed(i)}(e,d,n)),s}function g(e){if((0,r.Im)(e)||!e.buckets||!Array.isArray(e.buckets))return!1;let t=!0;return e.buckets.forEach(e=>{e.max&&e.increment||(t=!1)}),t}},6031(e,t,n){n.d(t,{H:()=>a,k:()=>s});var i=n(5555),r=n(1069),o=n(4595);const s=(0,n(9214).A_)("sync",function(e){return o.G}),a=function(){const e={};return function(t){const n=s(t);return e.hasOwnProperty(n)||(e[n]=new i.k(e=>{const t=(0,r.CA)();t.srcdoc="<script>".concat(n,"<\/script>"),t.onload=()=>e(t.contentWindow.render),document.body.appendChild(t)})),e[n]}}()},5023(e,t,n){n.d(t,{AU:()=>m,Ic:()=>y,kQ:()=>v,on:()=>h});var i=n(1069),r=n(8969),o=n(6853),s=n(3272);const a="eventHistoryTTL";let c=null;const d=(0,o.H)({monotonic:!0,ttl:()=>c});s.$W.getConfig(a,e=>{var t;const n=c;e=null===(t=e)||void 0===t?void 0:t[a],c="number"==typeof e?1e3*e:null,n!==c&&d.refresh()});let u=Array.prototype.slice,l=Array.prototype.push,f=Object.values(r.qY);const g=r.cA,p=function(){let e={},t={};function n(e){return f.includes(e)}return t.has=n,t.on=function(t,r,o){if(n(t)){let n=e[t]||{que:[]};o?(n[o]=n[o]||{que:[]},n[o].que.push(r)):n.que.push(r),e[t]=n}else i.vV("Wrong event name : "+t+" Valid event names :"+f)},t.emit=function(t){!function(t,n){i.OG("Emitting event for: "+t);let r=n[0]||{},o=r[g[t]],s=e[t]||{que:[]};var a=Object.keys(s);let c=[];d.add({eventType:t,args:r,id:o,elapsedTime:i.V()}),o&&a.includes(o)&&l.apply(c,s[o].que),l.apply(c,s.que),(c||[]).forEach(function(e){if(e)try{e.apply(null,n)}catch(e){i.vV("Error executing handler:","events.js",e,t)}})}(t,u.call(arguments,1))},t.off=function(t,n,r){let o=e[t];i.Im(o)||i.Im(o.que)&&i.Im(o[r])||r&&(i.Im(o[r])||i.Im(o[r].que))||(r?(o[r].que||[]).forEach(function(e){let t=o[r].que;e===n&&t.splice(t.indexOf(e),1)}):(o.que||[]).forEach(function(e){let t=o.que;e===n&&t.splice(t.indexOf(e),1)}),e[t]=o)},t.get=function(){return e},t.addEvents=function(e){f=f.concat(e)},t.getEvents=function(){return d.toArray().map(e=>Object.assign({},e))},window.prebidEvents=t,t}();i.cD(p.emit.bind(p));const{on:h,off:m,get:b,getEvents:v,emit:y,addEvents:E,has:A}=p},687(e,t,n){n.d(t,{w:()=>w});var i=n(9214),r=n(7934),o=n(5973),s=n(1069),a=n(3172),c=n(3272),d=n(5555);const u=["architecture","bitness","model","platformVersion","fullVersionList"],l=["brands","mobile","platform"],f=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null===(e=window.navigator)||void 0===e?void 0:e.userAgentData;const n=t&&l.some(e=>void 0!==t[e])?Object.freeze(p(1,t)):null;return function(){return n}}(),g=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null===(e=window.navigator)||void 0===e?void 0:e.userAgentData;const n={},i=new WeakMap;return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;if(!i.has(e)){const t=Array.from(e);t.sort(),i.set(e,t.join("|"))}const r=i.get(e);if(!n.hasOwnProperty(r))try{n[r]=t.getHighEntropyValues(e).then(e=>(0,s.Im)(e)?null:Object.freeze(p(2,e))).catch(()=>null)}catch(e){n[r]=d.k.resolve(null)}return n[r]}}();function p(e,t){function n(e,t){const n={brand:e};return(0,s.O8)(t)&&!(0,s.xQ)(t)&&(n.version=t.split(".")),n}const i={source:e};return t.platform&&(i.platform=n(t.platform,t.platformVersion)),(t.fullVersionList||t.brands)&&(i.browsers=(t.fullVersionList||t.brands).map(e=>{let{brand:t,version:i}=e;return n(t,i)})),void 0!==t.mobile&&(i.mobile=t.mobile?1:0),["model","bitness","architecture"].forEach(e=>{const n=t[e];(0,s.O8)(n)&&(i[e]=n)}),i}var h=n(3858),m=n(5139),b=n(3441),v=n(6811),y=n(5569);const E={getRefererInfo:r.EN,findRootDomain:o.S,getWindowTop:s.mb,getWindowSelf:s.l4,getHighEntropySUA:g,getLowEntropySUA:f},A=(0,h.i8)("FPD"),w=(0,i.A_)("sync",e=>{const t=[e,T().catch(()=>null),d.k.resolve("cookieDeprecationLabel"in navigator&&(0,m.io)(v.Ue,(0,b.s)(y.tp,"cdep"))&&navigator.cookieDeprecationLabel.getValue()).catch(()=>null)];return d.k.all(t).then(e=>{let[t,n,i]=e;const r=E.getRefererInfo();if(Object.entries(C).forEach(e=>{let[n,i]=e;const o=i(t,r);o&&Object.keys(o).length>0&&(t[n]=(0,s.D9)({},o,t[n]))}),n&&(0,a.J)(t,"device.sua",Object.assign({},n,t.device.sua)),i){const e={cdep:i};(0,a.J)(t,"device.ext",Object.assign({},e,t.device.ext))}t=A(t);for(let e of h.Dy)if((0,h.O$)(t,e)){t[e]=(0,s.D9)({},k(t,r),t[e]);break}return t})});function I(e){try{return e(E.getWindowTop())}catch(t){return e(E.getWindowSelf())}}function T(){const e=c.$W.getConfig("firstPartyData.uaHints");return Array.isArray(e)&&0!==e.length?E.getHighEntropySUA(e):d.k.resolve(E.getLowEntropySUA())}function O(e){return(0,s.SH)(e,Object.keys(e))}const C={site(e,t){if(!h.Dy.filter(e=>"site"!==e).some(h.O$.bind(null,e)))return O({page:t.page,ref:t.ref})},device:()=>I(e=>{var t;const n=e.screen.width,i=e.screen.height,r=e.innerWidth||e.document.documentElement.clientWidth||e.document.body.clientWidth,o=e.innerHeight||e.document.documentElement.clientHeight||e.document.body.clientHeight,c={w:n,h:i,dnt:(0,s.l9)()?1:0,ua:e.navigator.userAgent,language:e.navigator.language.split("-").shift(),ext:{vpw:r,vph:o}};return null!==(t=e.navigator)&&void 0!==t&&t.webdriver&&(0,a.J)(c,"ext.webdriver",!0),c}),regs(){const e={};I(e=>e.navigator.globalPrivacyControl)&&(0,a.J)(e,"ext.gpc",1);const t=c.$W.getConfig("coppa");return"boolean"==typeof t&&(e.coppa=t?1:0),e}};function k(e,t){var n,i;const o=(0,r.gR)(t.page,{noLeadingWww:!0});return O({domain:o,keywords:null===(n=I(e=>e.document.querySelector("meta[name='keywords']")))||void 0===n||null===(n=n.content)||void 0===n||null===(i=n.replace)||void 0===i?void 0:i.call(n,/\s/g,""),publisher:O({domain:E.findRootDomain(o)})})}},3858(e,t,n){n.d(t,{Dy:()=>r,O$:()=>s,i8:()=>o});var i=n(1069);const r=["dooh","app","site"];function o(e){return function(t){return r.reduce((n,r)=>(s(t,r)&&(null!=n?((0,i.JE)("".concat(e," specifies both '").concat(n,"' and '").concat(r,"'; dropping the latter.")),delete t[r]):n=r),n),null),t}}function s(e,t){return null!=e[t]&&Object.keys(e[t]).length>0}},5973(e,t,n){n.d(t,{S:()=>o});var i=n(1069);const r=(0,n(2938).CK)("fpdEnrichment"),o=(0,i.Bj)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.host;if(!r.cookiesAreEnabled())return e;const t=e.split(".");if(2===t.length)return e;let n,o,s=-2;const a="_rdc".concat(Date.now()),c="writeable";do{n=t.slice(s).join(".");let e=new Date((0,i.vE)()+1e4).toUTCString();r.setCookie(a,c,e,"Lax",n,void 0);r.getCookie(a,void 0)===c?(o=!1,r.setCookie(a,"","Thu, 01 Jan 1970 00:00:01 GMT",void 0,n,void 0)):(s+=-1,o=Math.abs(s)<=t.length)}while(o);return n})},9214(e,t,n){n.d(t,{A_:()=>s,Gc:()=>c,Y6:()=>g,Yn:()=>d,bz:()=>f,xG:()=>l});var i=n(8128),r=n.n(i),o=n(5555);let s=r()({ready:r().SYNC|r().ASYNC|r().QUEUE});const a=(0,o.v)();s.ready=(()=>{const e=s.ready;return function(){try{return e.apply(s,arguments)}finally{a.resolve()}}})();const c=a.promise,d=s.get;const u={};function l(e,t){let{postInstallAllowed:n=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};s("async",function(i){i.forEach(e=>t(...e)),n&&(u[e]=t)},e)([])}function f(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];const r=u[e];if(r)return r(...n);d(e).before((e,t)=>{t.push(n),e(t)})}function g(e,t){return Object.defineProperties(t,Object.fromEntries(["before","after","getHooks","removeAll"].map(t=>[t,{get:()=>e[t]}]))),t}},1371(e,t,n){n.d(t,{D4:()=>o,G_:()=>r,LM:()=>s,s6:()=>i});const i="native",r="video",o="banner",s="adpod"},2449(e,t,n){n.d(t,{Bm:()=>O,Ex:()=>M,IX:()=>j,Nh:()=>h,Xj:()=>P,Zj:()=>B,gs:()=>k,l6:()=>A,mT:()=>p,nk:()=>I,rn:()=>q,vO:()=>C,yl:()=>U});var i=n(4705),r=n(1069),o=n(433),s=n(5901),a=n(6881),c=n(8969),d=n(1371),u=n(9075),l=n(6031);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,i.A)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const p=[],h=Object.keys(c.x5).map(e=>c.x5[e]),m={image:{ortb:{ver:"1.2",assets:[{required:1,id:1,img:{type:3,wmin:100,hmin:100}},{required:1,id:2,title:{len:140}},{required:1,id:3,data:{type:1}},{required:0,id:4,data:{type:2}},{required:0,id:5,img:{type:1,wmin:20,hmin:20}}]},image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1}}},b=G(c.h0),v=G(c.jO),y={img:1,js:2,1:"img",2:"js"},E=1;function A(e){return e.native&&"object"==typeof e.native}function w(e){if(e&&e.type&&function(e){if(!e||!(0,s.mK)(Object.keys(m),e))return(0,r.vV)("".concat(e," nativeParam is not supported")),!1;return!0}(e.type)&&(e=m[e.type]),!e||!e.ortb||T(e.ortb))return e}function I(e){e.forEach(e=>{const t=e.nativeParams||(0,o.A)(e,"mediaTypes.native");t&&(e.nativeParams=w(t)),e.nativeParams&&(e.nativeOrtbRequest=e.nativeParams.ortb||q(e.nativeParams))})}function T(e){const t=e.assets;if(!Array.isArray(t)||0===t.length)return(0,r.vV)("assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ",t),!1;const n=t.map(e=>e.id);return t.length!==new Set(n).size||n.some(e=>e!==parseInt(e,10))?((0,r.vV)("each asset object must have 'id' property, it must be unique and it must be an integer"),!1):e.hasOwnProperty("eventtrackers")&&!Array.isArray(e.eventtrackers)?((0,r.vV)("ortb.eventtrackers is not an array. Eventtrackers: ",e.eventtrackers),!1):t.every(e=>function(e){if(!(0,r.Qd)(e))return(0,r.vV)("asset must be an object. Provided asset: ",e),!1;if(e.img){if(!(0,r.Et)(e.img.w)&&!(0,r.Et)(e.img.wmin))return(0,r.vV)("for img asset there must be 'w' or 'wmin' property"),!1;if(!(0,r.Et)(e.img.h)&&!(0,r.Et)(e.img.hmin))return(0,r.vV)("for img asset there must be 'h' or 'hmin' property"),!1}else if(e.title){if(!(0,r.Et)(e.title.len))return(0,r.vV)("for title asset there must be 'len' property defined"),!1}else if(e.data){if(!(0,r.Et)(e.data.type))return(0,r.vV)("for data asset 'type' property must be a number"),!1}else if(e.video&&!(Array.isArray(e.video.mimes)&&Array.isArray(e.video.protocols)&&(0,r.Et)(e.video.minduration)&&(0,r.Et)(e.video.maxduration)))return(0,r.vV)("video asset is not properly configured"),!1;return!0}(e))}function O(e){var t;let{index:n=a.n.index}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=n.getAdUnit(e);if(!i)return!1;let c=i.nativeOrtbRequest;return function(e,t){if(!(0,o.A)(e,"link.url"))return(0,r.vV)("native response doesn't have 'link' property. Ortb response: ",e),!1;let n=t.assets.filter(e=>1===e.required).map(e=>e.id),i=e.assets.map(e=>e.id);const a=n.every(e=>(0,s.mK)(i,e));a||(0,r.vV)("didn't receive a bid with all required assets. Required ids: ".concat(n,", but received ids in response: ").concat(i));return a}((null===(t=e.native)||void 0===t?void 0:t.ortb)||V(e.native,c),c)}function C(e,t){const n=t.native.ortb||W(t.native);return"click"===e.action?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{fetchURL:n=r.z$}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t){var i;const r=(e.assets||[]).filter(e=>e.link).reduce((e,t)=>(e[t.id]=t.link,e),{}),o=(null===(i=e.link)||void 0===i?void 0:i.clicktrackers)||[];let s=r[t],a=o;s&&(a=s.clicktrackers||[]),a.forEach(e=>n(e))}else{var o;((null===(o=e.link)||void 0===o?void 0:o.clicktrackers)||[]).forEach(e=>n(e))}}(n,null==e?void 0:e.assetId):function(e){let{runMarkup:t=e=>(0,r.ro)(e),fetchURL:n=r.z$}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=(e.eventtrackers||[]).filter(e=>e.event===E);let{img:o,js:s}=i.reduce((e,t)=>(y.hasOwnProperty(t.method)&&e[y[t.method]].push(t.url),e),{img:[],js:[]});e.imptrackers&&(o=o.concat(e.imptrackers));o.forEach(e=>n(e)),s=s.map(e=>'<script async src="'.concat(e,'"><\/script>')),e.jstracker&&(s=s.concat([e.jstracker]));s.length&&t(s.join("\n"))}(n),e.action}function k(e,t){var n;const i=null==t?void 0:t.nativeOrtbRequest,r=null===(n=e.native)||void 0===n?void 0:n.ortb;if(i&&r){const t=M(r,i);Object.assign(e.native,t)}["rendererUrl","adTemplate"].forEach(n=>{var i;const r=null==t||null===(i=t.nativeParams)||void 0===i?void 0:i[n];r&&(e.native[n]=_(r))})}function B(e){var t;let{index:n=a.n.index}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={};const r=n.getAdUnit(e),s=null==(null==r||null===(t=r.nativeParams)||void 0===t?void 0:t.ortb)&&!1!==(0,o.A)(r,"nativeParams.sendTargetingKeys"),d=function(e){const t={};(0,o.A)(e,"nativeParams.ext")&&Object.keys(e.nativeParams.ext).forEach(e=>{t[e]="hb_native_".concat(e)});return g(g({},c.x5),t)}(r),u=g(g({},e.native),e.native.ext);return delete u.ext,Object.keys(u).forEach(t=>{const n=d[t];let a=_(e.native[t])||_((0,o.A)(e,"native.ext.".concat(t)));if("adTemplate"===t||!n||!a)return;let c=(0,o.A)(r,"nativeParams.".concat(t,".sendId"));if("boolean"!=typeof c&&(c=(0,o.A)(r,"nativeParams.ext.".concat(t,".sendId"))),c){a="".concat(n,":").concat(e.adId)}let u=(0,o.A)(r,"nativeParams.".concat(t,".sendTargetingKeys"));"boolean"!=typeof u&&(u=(0,o.A)(r,"nativeParams.ext.".concat(t,".sendTargetingKeys")));("boolean"==typeof u?u:s)&&(i[n]=a)}),i}function S(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=[];return Object.entries(e).filter(e=>{let[i,r]=e;return r&&(!1===n&&"ext"===i||null==t||t.includes(i))}).forEach(e=>{let[r,o]=e;!1===n&&"ext"===r?i.push(...S(o,t,!0)):(n||c.x5.hasOwnProperty(r))&&i.push({key:r,value:_(o)})}),i}function R(e,t,n){let{index:i=a.n.index}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o={message:"assetResponse",adId:e.adId};let s=(0,u.vd)(t).native;return s?(o.native=Object.assign({},s),o.renderer=(0,l.k)(t),null!=n&&(s.assets=s.assets.filter(e=>{let{key:t}=e;return n.includes(t)}))):s=function(e,t,n){var i;const o=g(g({},(0,r.SH)(e.native,["rendererUrl","adTemplate"])),{},{assets:S(e.native,n),nativeKeys:c.x5});return e.native.ortb?o.ortb=e.native.ortb:null!==(i=t.mediaTypes)&&void 0!==i&&null!==(i=i.native)&&void 0!==i&&i.ortb&&(o.ortb=V(e.native,t.nativeOrtbRequest)),o}(t,i.getAdUnit(t),n),Object.assign(o,s)}const D=Object.fromEntries(Object.entries(c.x5).map(e=>{let[t,n]=e;return[n,t]}));function j(e,t){const n=e.assets.map(e=>D[e]);return R(e,t,n)}function U(e,t){return R(e,t,null)}function _(e){return(null==e?void 0:e.url)||e}function q(e){if(!e&&!(0,r.Qd)(e))return void(0,r.vV)("Native assets object is empty or not an object: ",e);const t={ver:"1.2",assets:[]};for(let n in e){if(c._B.includes(n))continue;if(!c.x5.hasOwnProperty(n)){(0,r.vV)("Unrecognized native asset code: ".concat(n,". Asset will be ignored."));continue}if("privacyLink"===n){t.privacy=1;continue}const i=e[n];let o=0;i.required&&(0,r.Lm)(i.required)&&(o=Number(i.required));const s={id:t.assets.length,required:o};if(n in c.h0)s.data={type:c.jO[c.h0[n]]},i.len&&(s.data.len=i.len);else if("icon"===n||"image"===n){if(s.img={type:"icon"===n?c.oA.ICON:c.oA.MAIN},i.aspect_ratios)if((0,r.cy)(i.aspect_ratios))if(i.aspect_ratios.length){const{min_width:e,min_height:t}=i.aspect_ratios[0];(0,r.Fq)(e)&&(0,r.Fq)(t)?(s.img.wmin=e,s.img.hmin=t):(0,r.vV)("image.aspect_ratios min_width or min_height are invalid: ",e,t);const n=i.aspect_ratios.filter(e=>e.ratio_width&&e.ratio_height).map(e=>"".concat(e.ratio_width,":").concat(e.ratio_height));n.length>0&&(s.img.ext={aspectratios:n})}else(0,r.vV)("image.aspect_ratios was passed, but it's empty:",i.aspect_ratios);else(0,r.vV)("image.aspect_ratios was passed, but it's not a an array:",i.aspect_ratios);i.sizes&&(2===i.sizes.length&&(0,r.Fq)(i.sizes[0])&&(0,r.Fq)(i.sizes[1])?(s.img.w=i.sizes[0],s.img.h=i.sizes[1],delete s.img.hmin,delete s.img.wmin):(0,r.vV)("image.sizes was passed, but its value is not an array of integers:",i.sizes))}else"title"===n?s.title={len:i.len||140}:"ext"===n&&(s.ext=i,delete s.required);t.assets.push(s)}return t}function x(e,t){for(;e&&t&&e!==t;)e>t?e-=t:t-=e;return e||t}function N(e){if(!T(e))return;const t={};for(const n of e.assets){if(n.title){const e={required:!!n.required&&Boolean(n.required),len:n.title.len};t.title=e}else if(n.img){const e={required:!!n.required&&Boolean(n.required)};if(n.img.w&&n.img.h)e.sizes=[n.img.w,n.img.h];else if(n.img.wmin&&n.img.hmin){const t=x(n.img.wmin,n.img.hmin);e.aspect_ratios=[{min_width:n.img.wmin,min_height:n.img.hmin,ratio_width:n.img.wmin/t,ratio_height:n.img.hmin/t}]}n.img.type===c.oA.MAIN?t.image=e:t.icon=e}else if(n.data){let e=Object.keys(c.jO).find(e=>c.jO[e]===n.data.type),i=Object.keys(c.h0).find(t=>c.h0[t]===e);t[i]={required:!!n.required&&Boolean(n.required)},n.data.len&&(t[i].len=n.data.len)}e.privacy&&(t.privacyLink={required:!1})}return t}function P(e){{if(!e||!(0,r.cy)(e))return e;if(!e.some(e=>{var t;return null===(t=((null==e?void 0:e.mediaTypes)||{})[d.s6])||void 0===t?void 0:t.ortb}))return e;let t=(0,r.Go)(e);for(const e of t)e.mediaTypes&&e.mediaTypes[d.s6]&&e.mediaTypes[d.s6].ortb&&(e.mediaTypes[d.s6]=Object.assign((0,r.Up)(e.mediaTypes[d.s6],c._B),N(e.mediaTypes[d.s6].ortb)),e.nativeParams=w(e.mediaTypes[d.s6]));return t}}function W(e){const t={link:{},eventtrackers:[]};return Object.entries(e).forEach(e=>{let[n,i]=e;switch(n){case"clickUrl":t.link.url=i;break;case"clickTrackers":t.link.clicktrackers=Array.isArray(i)?i:[i];break;case"impressionTrackers":(Array.isArray(i)?i:[i]).forEach(e=>{t.eventtrackers.push({event:E,method:y.img,url:e})});break;case"javascriptTrackers":t.jstracker=Array.isArray(i)?i.join(""):i;break;case"privacyLink":t.privacy=i}}),t}function V(e,t){const n=g(g({},W(e)),{},{assets:[]});function i(e,i){let o=t.assets.find(e);null!=o&&(o=(0,r.Go)(o),i(o),n.assets.push(o))}return Object.keys(e).filter(t=>!!e[t]).forEach(t=>{const n=_(e[t]);switch(t){case"title":i(e=>null!=e.title,e=>{e.title={text:n}});break;case"image":case"icon":const e="image"===t?c.oA.MAIN:c.oA.ICON;i(t=>null!=t.img&&t.img.type===e,e=>{e.img={url:n}});break;default:t in c.h0&&i(e=>null!=e.data&&e.data.type===c.jO[c.h0[t]],e=>{e.data={value:n}})}}),n}function M(e,t){var n;const i={},r=(null==t?void 0:t.assets)||[];i.clickUrl=null===(n=e.link)||void 0===n?void 0:n.url,i.privacyLink=e.privacy;for(const t of(null==e?void 0:e.assets)||[]){const e=r.find(e=>t.id===e.id);if(t.title)i.title=t.title.text;else if(t.img){var o;i[(null==e||null===(o=e.img)||void 0===o?void 0:o.type)===c.oA.MAIN?"image":"icon"]={url:t.img.url,width:t.img.w,height:t.img.h}}else if(t.data){var s;i[b[v[null==e||null===(s=e.data)||void 0===s?void 0:s.type]]]=t.data.value}}i.impressionTrackers=[];let a=[];e.imptrackers&&i.impressionTrackers.push(...e.imptrackers);for(const t of(null==e?void 0:e.eventtrackers)||[])t.event===E&&t.method===y.img&&i.impressionTrackers.push(t.url),t.event===E&&t.method===y.js&&a.push(t.url);return a=a.map(e=>'<script async src="'.concat(e,'"><\/script>')),null!=e&&e.jstracker&&a.push(e.jstracker),a.length&&(i.javascriptTrackers=a.join("\n")),i}function G(e){var t={};for(var n in e)t[e[n]]=n;return t}},1e3(e,t,n){n.d(t,{Cf:()=>a,S3:()=>r,Tb:()=>o,WR:()=>s,e4:()=>d,pS:()=>l,qN:()=>c,yB:()=>f,zt:()=>i});const i=["request","imp","bidResponse","response"],[r,o,s,a]=i,[c,d]=["default","pbs"],u=new Set(i);const{registerOrtbProcessor:l,getProcessors:f}=function(){const e={};return{registerOrtbProcessor(t){let{type:n,name:r,fn:o,priority:s=0,dialects:a=[c]}=t;if(!u.has(n))throw new Error("ORTB processor type must be one of: ".concat(i.join(", ")));a.forEach(t=>{e.hasOwnProperty(t)||(e[t]={}),e[t].hasOwnProperty(n)||(e[t][n]={}),e[t][n][r]={priority:s,fn:o}})},getProcessors:t=>e[t]||{}}}()},5901(e,t,n){function i(e,t,n){return e&&e.includes(t,n)||!1}function r(){return Array.from.apply(Array,arguments)}function o(e,t,n){return e&&e.find(t,n)}n.d(t,{A6:()=>r,I6:()=>o,mK:()=>i})},9671(e,t,n){n.d(t,{WH:()=>ie,gH:()=>se});var i=n(7873),r=n(1069),o=n(3172),s=n(433),a=n(4705),c=n(2449),d=n(8969),u=n(5901),l=n(9075),f=n(6031);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){(0,a.A)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const{REQUEST:h,RESPONSE:m,NATIVE:b,EVENT:v}=d.nl,y={[h]:function(e,t,n){(0,l.bw)({renderFn(t){e(Object.assign({message:m,renderer:(0,f.k)(n)},t))},resizeFn:A(t.adId,n),options:t.options,adId:t.adId,bidResponse:n})},[v]:function(e,t,n){if(null==n)return void(0,r.vV)("Cannot find ad '".concat(t.adId,"' for x-origin event request"));if(n.status!==d.tl.RENDERED)return void(0,r.JE)("Received x-origin event request without corresponding render request for ad '".concat(n.adId,"'"));return(0,l.Uc)(t,n)}};function E(){window.addEventListener("message",function(e){!function(e){var t=e.message?"message":"data",n={};try{n=JSON.parse(e[t])}catch(e){return}if(n&&n.adId&&n.message&&y.hasOwnProperty(n.message))(0,l.$A)(n.adId,n.message===d.nl.REQUEST).then(t=>{var i,o;y[n.message]((i=n.adId,o=function(e){return null==e.origin&&0===e.ports.length?function(){const e="Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";throw(0,r.vV)(e),new Error(e)}:e.ports.length>0?function(t){e.ports[0].postMessage(JSON.stringify(t))}:function(t){e.source.postMessage(JSON.stringify(t),e.origin)}}(e),function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return o(Object.assign({},e,{adId:i}),...n)}),n,t)})}(e)},!1)}function A(e,t){return function(n,i){!function(e){let{adId:t,adUnitCode:n,width:i,height:o}=e;function s(e){return e?e+"px":"100%"}function a(e){let i=c(t,n),r=document.getElementById(i);return r&&r.querySelector(e)}function c(e,t){return(0,r.II)()?d(e):(0,r.t1)()?l(t):t}function d(e){const t=(0,u.I6)(window.googletag.pubads().getSlots(),t=>(0,u.I6)(t.getTargetingKeys(),n=>(0,u.mK)(t.getTargeting(n),e)));return t?t.getSlotElementId():null}function l(e){let t=window.apntag.getTag(e);return t&&t.targetId}["div","iframe"].forEach(e=>{let t=a(e+':not([style*="display: none"])');if(t){let e=t.style;e.width=s(i),e.height=s(o)}else(0,r.vV)("Unable to locate matching page element for adUnitCode ".concat(n,".  Can't resize it to ad's dimensions.  Please review setup."))})}(p(p({},t),{},{width:n,height:i,adId:e}))}}Object.assign(y,{[b]:function(e,t,n){if(null==n)return void(0,r.vV)("Cannot find ad for x-origin event request: '".concat(t.adId,"'"));switch(t.action){case"assetRequest":(0,l.Hh)(n,()=>e((0,c.IX)(t,n)));break;case"allAssetRequest":(0,l.Hh)(n,()=>e((0,c.yl)(t,n)));break;default:(0,l.vW)(t,n,{resizeFn:A(t.adId,n)}),(0,l.Pk)(n)}}});var w=n(8230),I=n(3272),T=n(6881),O=n(7779),C=n(9214),k=n(3597),B=n(1580),S=n(5555),R=n(5569);const D="__vuuklehb_debugging__";function j(){return(0,i.m)().installedModules.includes("debugging")}function U(e){return new S.k(t=>{(0,B.R)(e,R.tp,"debugging",t)})}function _(){let{alreadyInstalled:e=j,script:t=U}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=null;return function(){return null==n&&(n=new S.k((n,o)=>{setTimeout(()=>{if(e())n();else{const e="https://cdn.jsdelivr.net/npm/prebid.js@9.18.0/dist/debugging-standalone.js";(0,r.OG)('Debugging module not installed, loading it from "'.concat(e,'"...')),(0,i.m)()._installDebugging=!0,t(e).then(()=>{(0,i.m)()._installDebugging({DEBUG_KEY:D,hook:C.A_,config:I.$W,createBid:k.O,logger:(0,r.h0)("DEBUG:")})}).then(n,o)}})})),n}}const q=function(){let{load:e=_(),hook:t=(0,C.Yn)("requestBids")}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=null,i=!1;function r(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return(n||S.k.resolve()).then(()=>e.apply(this,i))}function o(){t.getHooks({hook:r}).remove(),i=!1}return{enable:function(){i||(n=e(),t.before(r,99),i=!0)},disable:o,reset:function(){n=null,o()}}}();q.reset;I.$W.getConfig("debugging",function(e){let{debugging:t}=e;null!=t&&t.enabled?q.enable():q.disable()});var x=n(2938),N=n(1445),P=n(5023),W=n(6894),V=n(687),M=n(6916),G=n(2713),F=n(3895);const H=(0,i.m)(),{triggerUserSyncs:$}=w.zt,{ADD_AD_UNITS:L,REQUEST_BIDS:z,SET_TARGETING:J}=d.qY,K={bidWon:function(e){if(!T.n.getBidsRequested().map(e=>e.bids.map(e=>e.adUnitCode)).reduce(r.Bq).filter(r.hj).includes(e))return void(0,r.vV)('The "'+e+'" placement is not defined.');return!0}};function Q(e,t){let n=[];return(0,r.cy)(e)&&(t?e.length===t:e.length>0)&&(e.every(e=>(0,r.Uu)(e,2))?n=e:(0,r.Uu)(e,2)&&n.push(e)),n}function Y(e,t){var n,i,s,a,c,d;const u=e.ortb2Imp||{},l=e.mediaTypes||{};null!==(n=u[t])&&void 0!==n&&n.battr&&null!==(i=l[t])&&void 0!==i&&i.battr&&(null===(s=u[t])||void 0===s?void 0:s.battr)!==(null===(a=l[t])||void 0===a?void 0:a.battr)&&(0,r.JE)("Ad unit ".concat(e.code," specifies conflicting ortb2Imp.").concat(t,".battr and mediaTypes.").concat(t,".battr, the latter will be ignored"),e);const f=(null===(c=u[t])||void 0===c?void 0:c.battr)||(null===(d=l[t])||void 0===d?void 0:d.battr);null!=f&&((0,o.J)(e,"ortb2Imp.".concat(t,".battr"),f),(0,o.J)(e,"mediaTypes.".concat(t,".battr"),f))}function X(e){const t=(0,r.Go)(e),n=t.mediaTypes.banner,i=Q(n.sizes);return i.length>0?(n.sizes=i,t.sizes=i):((0,r.vV)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),delete t.mediaTypes.banner),Y(t,"banner"),t}function Z(e){const t=(0,r.Go)(e),n=t.mediaTypes.video;if(n.playerSize){let e="number"==typeof n.playerSize[0]?2:1;const i=Q(n.playerSize,e);i.length>0?(2===e&&(0,r.fH)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."),n.playerSize=i,t.sizes=i):((0,r.vV)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),delete t.mediaTypes.video.playerSize)}return(0,F.aP)(t),Y(t,"video"),t}function ee(e){function t(t){return(0,r.vV)('Error in adUnit "'.concat(e.code,'": ').concat(t,". Removing native request from ad unit"),e),delete i.mediaTypes.native,i}function n(e){for(const t of["sendTargetingKeys","types"])if(o.hasOwnProperty(t)){const n=e(t);if(n)return n}}const i=(0,r.Go)(e),o=i.mediaTypes.native;if(o.ortb){var s;if(null!==(s=o.ortb.assets)&&void 0!==s&&s.some(e=>!(0,r.Et)(e.id)||e.id<0||e.id%1!=0))return t("native asset ID must be a nonnegative integer");if(n(e=>t('ORTB native requests cannot specify "'.concat(e,'"'))))return i;const e=Object.keys(d.x5).filter(e=>d.x5[e].includes("hb_native_")),a=Object.keys(o).filter(t=>e.includes(t));a.length>0&&((0,r.vV)("when using native OpenRTB format, you cannot use legacy native properties. Deleting ".concat(a," keys from request.")),a.forEach(e=>delete i.mediaTypes.native[e]))}else n(e=>"mediaTypes.native.".concat(e," is deprecated, consider using native ORTB instead"));return o.image&&o.image.sizes&&!Array.isArray(o.image.sizes)&&((0,r.vV)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),delete i.mediaTypes.native.image.sizes),o.image&&o.image.aspect_ratios&&!Array.isArray(o.image.aspect_ratios)&&((0,r.vV)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),delete i.mediaTypes.native.image.aspect_ratios),o.icon&&o.icon.sizes&&!Array.isArray(o.icon.sizes)&&((0,r.vV)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),delete i.mediaTypes.native.icon.sizes),Y(i,"native"),i}function te(e,t){let n=(0,s.A)(e,"mediaTypes.".concat(t,".pos"));if(!(0,r.Et)(n)||isNaN(n)||!isFinite(n)){let n="Value of property 'pos' on ad unit ".concat(e.code," should be of type: Number");(0,r.JE)(n),delete e.mediaTypes[t].pos}return e}function ne(e){const t=t=>"adUnit.code '".concat(e.code,"' ").concat(t),n=e.mediaTypes,i=e.bids;return null==i||(0,r.cy)(i)?null==i&&null==e.ortb2Imp?((0,r.vV)(t("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction")),null):n&&0!==Object.keys(n).length?(null==e.ortb2Imp||null!=i&&0!==i.length||(e.bids=[{bidder:null}],(0,r.OG)(t("defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"))),e):((0,r.vV)(t("does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.")),null):((0,r.vV)(t("defines 'adUnit.bids' that is not an array. Removing adUnit from auction")),null)}!function(){let e=null;try{e=window.sessionStorage}catch(e){}if(null!==e){let t=q,n=null;try{n=e.getItem(D)}catch(e){}null!==n&&t.enable()}}(),H.bidderSettings=H.bidderSettings||{},H.libLoaded=!0,H.version="v9.18.0",(0,r.fH)("Prebid.js v9.18.0 loaded"),H.installedModules=H.installedModules||[],H.adUnits=H.adUnits||[],H.triggerUserSyncs=$;const ie={validateAdUnit:ne,validateBannerMediaType:X,validateSizes:Q};Object.assign(ie,{validateNativeMediaType:ee}),Object.assign(ie,{validateVideoMediaType:Z});const re=(0,C.A_)("sync",function(e){const t=[];return e.forEach(e=>{if(null==(e=ne(e)))return;const n=e.mediaTypes;let i,r,o;n.banner&&(i=X(e),n.banner.hasOwnProperty("pos")&&(i=te(i,"banner"))),n.video&&(r=Z(i||e),n.video.hasOwnProperty("pos")&&(r=te(r,"video"))),n.native&&(o=ee(r||(i||e)));const s=Object.assign({},i,r,o);t.push(s)}),t},"checkAdUnitSetup");function oe(e){const t=T.n[e]().filter(e=>T.n.getAdUnitCodes().includes(e.adUnitCode)),n=T.n.getLastAuctionId();return t.map(e=>e.adUnitCode).filter(r.hj).map(e=>t.filter(t=>t.auctionId===n&&t.adUnitCode===e)).filter(e=>e&&e[0]&&e[0].adUnitCode).map(e=>({[e[0].adUnitCode]:{bids:e}})).reduce((e,t)=>Object.assign(e,t),{})}H.getAdserverTargetingForAdUnitCodeStr=function(e){if((0,r.fH)("Invoking vuuklehb.getAdserverTargetingForAdUnitCodeStr",arguments),e){var t=H.getAdserverTargetingForAdUnitCode(e);return(0,r.$D)(t)}(0,r.OG)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},H.getHighestUnusedBidResponseForAdUnitCode=function(e){if(e){const t=T.n.getAllBidsForAdUnitCode(e).filter(O.Yl);return t.length?t.reduce(G.Vk):{}}(0,r.OG)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")},H.getAdserverTargetingForAdUnitCode=function(e){return H.getAdserverTargeting(e)[e]},H.getAdserverTargeting=function(e){return(0,r.fH)("Invoking vuuklehb.getAdserverTargeting",arguments),O.iS.getAllTargeting(e)},H.getConsentMetadata=function(){return(0,r.fH)("Invoking vuuklehb.getConsentMetadata"),M.SL.getConsentMeta()},H.getNoBids=function(){return(0,r.fH)("Invoking vuuklehb.getNoBids",arguments),oe("getNoBids")},H.getNoBidsForAdUnitCode=function(e){return{bids:T.n.getNoBids().filter(t=>t.adUnitCode===e)}},H.getBidResponses=function(){return(0,r.fH)("Invoking vuuklehb.getBidResponses",arguments),oe("getBidsReceived")},H.getBidResponsesForAdUnitCode=function(e){return{bids:T.n.getBidsReceived().filter(t=>t.adUnitCode===e)}},H.setTargetingForGPTAsync=function(e,t){(0,r.fH)("Invoking vuuklehb.setTargetingForGPTAsync",arguments),(0,r.II)()?O.iS.setTargetingForGPT(e,t):(0,r.vV)("window.googletag is not defined on the page")},H.setTargetingForAst=function(e){(0,r.fH)("Invoking vuuklehb.setTargetingForAn",arguments),O.iS.isApntagDefined()?(O.iS.setTargetingForAst(e),P.Ic(J,O.iS.getAllTargeting())):(0,r.vV)("window.apntag is not defined on the page")},H.renderAd=(0,C.A_)("async",function(e,t,n){(0,r.fH)("Invoking vuuklehb.renderAd",arguments),(0,r.OG)("Calling renderAd with adId :"+t),(0,l.BS)(e,t,n)}),H.removeAdUnit=function(e){if((0,r.fH)("Invoking vuuklehb.removeAdUnit",arguments),!e)return void(H.adUnits=[]);let t;t=(0,r.cy)(e)?e:[e],t.forEach(e=>{for(let t=H.adUnits.length-1;t>=0;t--)H.adUnits[t].code===e&&H.adUnits.splice(t,1)})},H.requestBids=function(){const e=(0,C.A_)("async",function(){let{bidsBackHandler:e,timeout:t,adUnits:n,adUnitCodes:i,labels:o,auctionId:s,ttlBuffer:a,ortb2:c,metrics:d,defer:l}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};P.Ic(z);const f=t||I.$W.getConfig("bidderTimeout");(0,r.fH)("Invoking vuuklehb.requestBids",arguments),null==i||Array.isArray(i)||(i=[i]),i&&i.length?n=n.filter(e=>(0,u.mK)(i,e.code)):i=n&&n.map(e=>e.code),i=i.filter(r.hj);const g={global:(0,r.D9)({},I.$W.getAnyConfig("ortb2")||{},c||{}),bidder:Object.fromEntries(Object.entries(I.$W.getBidderConfig()).map(e=>{let[t,n]=e;return[t,n.ortb2]}).filter(e=>{let[t,n]=e;return null!=n}))};return(0,V.w)(S.k.resolve(g.global)).then(t=>(g.global=t,se({bidsBackHandler:e,timeout:f,adUnits:n,adUnitCodes:i,labels:o,auctionId:s,ttlBuffer:a,ortb2Fragments:g,metrics:d,defer:l})))},"requestBids");return(0,C.Y6)(e,function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.adUnits||H.adUnits;return t.adUnits=(0,r.cy)(n)?n.slice():[n],t.metrics=(0,W.K7)(),t.metrics.checkpoint("requestBids"),t.defer=(0,S.v)({promiseFactory:e=>new Promise(e)}),e.call(this,t),t.defer.promise})}();const se=(0,C.A_)("async",function(){let{bidsBackHandler:e,timeout:t,adUnits:n,ttlBuffer:i,adUnitCodes:s,labels:a,auctionId:c,ortb2Fragments:d,metrics:l,defer:f}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const g=(0,N.pX)(I.$W.getConfig("s2sConfig")||[]);function p(t,n,i){if("function"==typeof e)try{e(t,n,i)}catch(e){(0,r.vV)("Error executing bidsBackHandler",null,e)}f.resolve({bids:t,timedOut:n,auctionId:i})}!function(e){e.forEach(e=>(0,F.V0)(e))}(n),n=(0,W.BO)(l).measureTime("requestBids.validate",()=>re(n));const h={};if(n.forEach(e=>{var t;const n=Object.keys(e.mediaTypes||{banner:"banner"}),o=e.bids.map(e=>e.bidder),s=N.Ay.bidderRegistry,a=o.filter(e=>!g.has(e));e.adUnitId=(0,r.lk)();const c=null===(t=e.ortb2Imp)||void 0===t||null===(t=t.ext)||void 0===t?void 0:t.tid;c&&(h.hasOwnProperty(e.code)?(0,r.JE)("Multiple distinct ortb2Imp.ext.tid were provided for twin ad units '".concat(e.code,"'")):h[e.code]=c),null==i||e.hasOwnProperty("ttlBuffer")||(e.ttlBuffer=i),a.forEach(t=>{const i=s[t],o=i&&i.getSpec&&i.getSpec(),a=o&&o.supportedMediaTypes||["banner"];n.some(e=>(0,u.mK)(a,e))||((0,r.JE)((0,r.bz)(e,t)),e.bids=e.bids.filter(e=>e.bidder!==t))})}),n&&0!==n.length){n.forEach(e=>{var t;const n=(null===(t=e.ortb2Imp)||void 0===t||null===(t=t.ext)||void 0===t?void 0:t.tid)||h[e.code]||(0,r.lk)();h.hasOwnProperty(e.code)||(h[e.code]=n),e.transactionId=n,(0,o.J)(e,"ortb2Imp.ext.tid",n)});const e=T.n.createAuction({adUnits:n,adUnitCodes:s,callback:p,cbTimeout:t,labels:a,auctionId:c,ortb2Fragments:d,metrics:l});let i=n.length;i>15&&(0,r.fH)("Current auction ".concat(e.getAuctionId()," contains ").concat(i," adUnits."),n),s.forEach(t=>O.iS.setLatestAuctionForAdUnit(t,e.getAuctionId())),e.callBids()}else(0,r.OG)("No adUnits configured. No bids requested."),p()},"startAuction");H.requestBids.before(function(e,t){function n(e){for(var t;t=e.shift();)t()}n(x.s0),n(ae),e.call(this,t)},49),H.addAdUnits=function(e){(0,r.fH)("Invoking vuuklehb.addAdUnits",arguments),H.adUnits.push.apply(H.adUnits,(0,r.cy)(e)?e:[e]),P.Ic(L)},H.onEvent=function(e,t,n){(0,r.fH)("Invoking vuuklehb.onEvent",arguments),(0,r.fp)(t)?!n||K[e].call(null,n)?P.on(e,t,n):(0,r.vV)('The id provided is not valid for event "'+e+'" and no handler was set.'):(0,r.vV)('The event handler provided is not a function and was not set on event "'+e+'".')},H.offEvent=function(e,t,n){(0,r.fH)("Invoking vuuklehb.offEvent",arguments),n&&!K[e].call(null,n)||P.AU(e,t,n)},H.getEvents=function(){return(0,r.fH)("Invoking vuuklehb.getEvents"),P.kQ()},H.registerBidAdapter=function(e,t){(0,r.fH)("Invoking vuuklehb.registerBidAdapter",arguments);try{N.Ay.registerBidAdapter(e(),t)}catch(e){(0,r.vV)("Error registering bidder adapter : "+e.message)}},H.registerAnalyticsAdapter=function(e){(0,r.fH)("Invoking vuuklehb.registerAnalyticsAdapter",arguments);try{N.Ay.registerAnalyticsAdapter(e)}catch(e){(0,r.vV)("Error registering analytics adapter : "+e.message)}},H.createBid=function(e){return(0,r.fH)("Invoking vuuklehb.createBid",arguments),(0,k.O)(e)};const ae=[],ce=(0,C.A_)("async",function(e){e&&!(0,r.Im)(e)?((0,r.fH)("Invoking vuuklehb.enableAnalytics for: ",e),N.Ay.enableAnalytics(e)):(0,r.vV)("vuuklehb.enableAnalytics should be called with option {}")},"enableAnalyticsCb");function de(e){e.forEach(function(e){if(void 0===e.called)try{e.call(),e.called=!0}catch(e){(0,r.vV)("Error processing command :","prebid.js",e)}})}H.enableAnalytics=function(e){ae.push(ce.bind(this,e))},H.aliasBidder=function(e,t,n){(0,r.fH)("Invoking vuuklehb.aliasBidder",arguments),e&&t?N.Ay.aliasBidAdapter(e,t,n):(0,r.vV)("bidderCode and alias must be passed as arguments","vuuklehb.aliasBidder")},H.aliasRegistry=N.Ay.aliasRegistry,I.$W.getConfig("aliasRegistry",e=>{"private"===e.aliasRegistry&&delete H.aliasRegistry}),H.getAllWinningBids=function(){return T.n.getAllWinningBids()},H.getAllPrebidWinningBids=function(){return T.n.getBidsReceived().filter(e=>e.status===d.tl.BID_TARGETING_SET)},H.getHighestCpmBids=function(e){return O.iS.getWinningBids(e)},H.clearAllAuctions=function(){T.n.clearAllAuctions()},H.markWinningBidAsUsed=function(e){let t,{adId:n,adUnitCode:i}=e;i&&null==n?t=O.iS.getWinningBids(i):n?t=T.n.getBidsReceived().filter(e=>e.adId===n):(0,r.JE)("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."),t.length>0&&(T.n.addWinningBid(t[0]),(0,l.qn)(t[0]))},H.getConfig=I.$W.getAnyConfig,H.readConfig=I.$W.readAnyConfig,H.mergeConfig=I.$W.mergeConfig,H.mergeBidderConfig=I.$W.mergeBidderConfig,H.setConfig=I.$W.setConfig,H.setBidderConfig=I.$W.setBidderConfig,H.que.push(()=>E()),H.cmd.push=function(e){if("function"==typeof e)try{e.call()}catch(e){(0,r.vV)("Error processing command :",e.message,e.stack)}else(0,r.vV)("Commands written into vuuklehb.cmd.push must be wrapped in a function")},H.que.push=H.cmd.push,H.processQueue=function(){(0,l.XO)(),C.A_.ready(),de(H.que),de(H.cmd)},H.triggerBilling=e=>{let{adId:t,adUnitCode:n}=e;T.n.getAllWinningBids().filter(e=>e.adId===t||null==t&&e.adUnitCode===n).forEach(e=>{N.Ay.triggerBilling(e),(0,l.vB)(e)})}},7873(e,t,n){n.d(t,{E:()=>s,m:()=>o});const i=window,r=i.vuuklehb=i.vuuklehb||{};function o(){return r}function s(e){r.installedModules.push(e)}r.cmd=r.cmd||[],r.que=r.que||[],i===window&&(i._pbjsGlobals=i._pbjsGlobals||[],i._pbjsGlobals.push("vuuklehb"))},7934(e,t,n){n.d(t,{EN:()=>c,gR:()=>s});var i=n(3272),r=n(1069);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;if(!e)return e;if(/\w+:\/\//.exec(e))return e;let n=t.location.protocol;try{n=t.top.location.protocol}catch(e){}return/^\/\//.exec(e)?n+e:"".concat(n,"//").concat(e)}function s(e){let{noLeadingWww:t=!1,noPort:n=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{e=new URL(o(e))}catch(e){return}return e=n?e.hostname:e.host,t&&e.startsWith("www.")&&(e=e.substring(4)),e}function a(e){try{const t=e.querySelector("link[rel='canonical']");if(null!==t)return t.href}catch(e){}return null}const c=function(e){let t,n,i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return r.top!==r?e:function(){const o=a(r.document),s=r.location.href;return t===o&&s===n||(t=o,n=s,i=e()),i}}((d=window,function(){const e=[],t=function(e){try{if(!e.location.ancestorOrigins)return;return e.location.ancestorOrigins}catch(e){}}(d),n=i.$W.getConfig("maxNestedIframes");let c,u,l,f,g=!1,p=0,h=!1,m=!1,b=!1;do{const n=c,i=m;let o,s=!1,f=null;m=!1,c=c?c.parent:d;try{o=c.location.href||null}catch(e){s=!0}if(s)if(i){const e=n.context;try{f=e.sourceUrl,u=f,b=!0,h=!0,c===d.top&&(g=!0),e.canonicalUrl&&(l=e.canonicalUrl)}catch(e){}}else{(0,r.JE)("Trying to access cross domain iframe. Continuing without referrer and location");try{const e=n.document.referrer;e&&(f=e,c===d.top&&(g=!0))}catch(e){}!f&&t&&t[p-1]&&(f=t[p-1],c===d.top&&(b=!0)),f&&!h&&(u=f)}else{if(o&&(f=o,u=f,h=!1,c===d.top)){g=!0;const e=a(c.document);e&&(l=e)}c.context&&c.context.sourceUrl&&(m=!0)}e.push(f),p++}while(c!==d.top&&p<n);e.reverse();try{f=d.top.document.referrer}catch(e){}const v=g||b?u:null,y=i.$W.getConfig("pageUrl")||l||null;let E=i.$W.getConfig("pageUrl")||v||o(y,d);return v&&v.indexOf("?")>-1&&-1===E.indexOf("?")&&(E="".concat(E).concat(v.substring(v.indexOf("?")))),{reachedTop:g,isAmp:h,numIframes:p-1,stack:e,topmostLocation:u||null,location:v,canonicalUrl:y,page:E,domain:s(E)||null,ref:f||null,legacy:{reachedTop:g,isAmp:h,numIframes:p-1,stack:e,referer:u||null,canonicalUrl:y}}}));var d},2938(e,t,n){n.d(t,{CK:()=>E,X0:()=>m,qk:()=>h,s0:()=>b,vM:()=>y});var i=n(4705),r=n(1069),o=n(2693),s=n(5569),a=n(5139),c=n(2604),d=n(6811),u=n(3272),l=n(1445),f=n(3441);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){(0,i.A)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const h="html5",m="cookie";let b=[];function v(){let{moduleName:e,moduleType:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{isAllowed:n=a.io}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function i(i,r){let o=e;const a=u.$W.getCurrentBidder();a&&t===s.tW&&l.Ay.aliasRegistry[a]===e&&(o=a);return i({valid:n(d.Ue,(0,f.s)(t,o,{[c.Zw]:r}))})}function o(e,t,n){if(!n||"function"!=typeof n)return i(e,t);b.push(function(){let r=i(e,t);n(r)})}function g(e){const t=e.charAt(0).toUpperCase()+e.substring(1),n=()=>window[e],i=function(t){return o(function(t){if(t&&t.valid)try{return!!n()}catch(t){(0,r.vV)("".concat(e," api disabled"))}return!1},h,t)};return{["has".concat(t)]:i,["".concat(e,"IsEnabled")]:e=>o(function(e){if(e&&e.valid)try{return n().setItem("prebid.cookieTest","1"),"1"===n().getItem("prebid.cookieTest")}catch(e){}finally{try{n().removeItem("prebid.cookieTest")}catch(e){}}return!1},h,e),["setDataIn".concat(t)]:(e,t,r)=>o(function(r){r&&r.valid&&i()&&n().setItem(e,t)},h,r),["getDataFrom".concat(t)]:(e,t)=>o(function(t){return t&&t.valid&&i()?n().getItem(e):null},h,t),["removeDataFrom".concat(t)]:(e,t)=>o(function(t){t&&t.valid&&i()&&n().removeItem(e)},h,t)}}return p(p(p({setCookie:function(e,t,n,i,r,s){return o(function(o){if(o&&o.valid){const o=r&&""!==r?" ;domain=".concat(encodeURIComponent(r)):"",s=n&&""!==n?" ;expires=".concat(n):"",a=null!=i&&"none"==i.toLowerCase()?"; Secure":"";document.cookie="".concat(e,"=").concat(encodeURIComponent(t)).concat(s,"; path=/").concat(o).concat(i?"; SameSite=".concat(i):"").concat(a)}},m,s)},getCookie:function(e,t){return o(function(t){if(t&&t.valid){let t=window.document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]*)\\s*(;|$)");return t?decodeURIComponent(t[2]):null}return null},m,t)},cookiesAreEnabled:function(e){return o(function(e){return!(!e||!e.valid)&&(0,r.GE)()},m,e)}},g("localStorage")),g("sessionStorage")),{},{findSimilarCookies:function(e,t){return o(function(t){if(t&&t.valid){const t=[];if((0,r.N9)()){const n=document.cookie.split(";");for(;n.length;){const i=n.pop();let r=i.indexOf("=");r=r<0?i.length:r;decodeURIComponent(i.slice(0,r).replace(/^\s+/,"")).indexOf(e)>=0&&t.push(decodeURIComponent(i.slice(r+1)))}}return t}},m,t)}})}function y(){let{moduleType:e,moduleName:t,bidderCode:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};function i(){throw new Error("Invalid invocation for getStorageManager: must set either bidderCode, or moduleType + moduleName")}return n?((e&&e!==s.tW||t)&&i(),e=s.tW,t=n):t&&e||i(),v({moduleType:e,moduleName:t})}function E(e){return v({moduleName:e,moduleType:s.tp})}(0,a.qB)(d.Ue,"deviceAccess config",function(){if(!(0,r.N9)())return{allow:!1}}),(0,a.qB)(d.Ue,"bidderSettings.*.storageAllowed",function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.u;if(e[c.Dk]!==s.tW)return;let n=t.get(e[c.q7],"storageAllowed");if(n&&!0!==n){const t=e[c.Zw];n=Array.isArray(n)?n.some(e=>e===t):n===t}else n=!!n;return n?void 0:{allow:n}})},7779(e,t,n){n.d(t,{Yl:()=>I,iS:()=>k,m2:()=>C});var i=n(6881),r=n(7863),o=n(2693),s=n(3272),a=n(8969),c=n(5023),d=n(9214),u=n(1371),l=n(2449),f=n(5901),g=n(1069),p=n(433),h=n(2713),m=[];const b=20,v="targetingControls.allowTargetingKeys",y="targetingControls.addTargetingKeys",E='Only one of "'.concat(v,'" or "').concat(y,'" can be set'),A=Object.keys(a.xS).map(e=>a.xS[e]);let w={isActualBid:e=>e.getStatusCode()===a.XQ.GOOD,isBidNotExpired:e=>e.responseTimestamp+1e3*(0,r.L)(e)>(0,g.vE)(),isUnusedBid:e=>e&&(e.status&&!(0,f.mK)([a.tl.RENDERED],e.status)||!e.status)};function I(e){return!Object.values(w).some(t=>!t(e))}const T=(0,d.A_)("sync",function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:g.Q0;if(!i){const i=[],o=s.$W.getConfig("sendBidsControl.dealPrioritization");let a=(0,g.$z)(e,"adUnitCode");return Object.keys(a).forEach(e=>{let s=[],c=(0,g.$z)(a[e],"bidderCode");Object.keys(c).forEach(e=>{s.push(c[e].reduce(t))}),n?(s=o?s.sort(O(!0)):s.sort((e,t)=>t.cpm-e.cpm),i.push(...s.slice(0,n))):(s=s.sort(r),i.push(...s))}),i}return e});function O(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t,n){return void 0!==t.adserverTargeting.hb_deal&&void 0===n.adserverTargeting.hb_deal?-1:void 0===t.adserverTargeting.hb_deal&&void 0!==n.adserverTargeting.hb_deal?1:e?n.cpm-t.cpm:n.adserverTargeting.hb_pb-t.adserverTargeting.hb_pb}}function C(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>window.googletag.pubads().getSlots())().reduce((e,n)=>{const i=(0,g.fp)(t)&&t(n);return Object.keys(e).filter((0,g.fp)(i)?i:(0,g.iC)(n)).forEach(t=>e[t].push(n)),e},Object.fromEntries(e.map(e=>[e,[]])))}const k=function(e){let t={},n={};function i(e){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1]))return[];const n=A.concat(l.Nh),i=s.$W.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),r=i?i.map(e=>a.xS[e]):n;return e.reduce((e,i)=>{if(!t||i.dealId){const o=function(e,t){return t.reduce((t,n)=>(e.adserverTargeting[n]&&t.push({["".concat(n,"_").concat(e.bidderCode).substring(0,20)]:[e.adserverTargeting[n]]}),t),[])}(i,n.filter(e=>void 0!==i.adserverTargeting[e]&&(t||-1!==r.indexOf(e))));o&&e.push({[i.adUnitCode]:o})}return e},[])}function r(t){return"string"==typeof t?[t]:(0,g.cy)(t)?t:e.getAdUnitCodes()||[]}function w(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.Bq,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=e.getBidsReceived().reduce((e,t)=>{const i=s.$W.getConfig("useBidCache"),r=s.$W.getConfig("bidCacheFilterFunction"),o=n[t.adUnitCode]===t.auctionId,a=!(i&&!o&&"function"==typeof r)||!!r(t);return(i||o)&&a&&(0,p.A)(t,"video.context")!==u.LM&&I(t)&&(t.latestTargetedAuctionId=n[t.adUnitCode],e.push(t)),e},[]);return T(r,t,void 0,void 0,void 0,i)}function k(){return e.getStandardBidderAdServerTargeting().map(e=>e.key).concat(A).filter(g.hj)}return t.setLatestAuctionForAdUnit=function(e,t){n[e]=t},t.resetPresetTargeting=function(e,t){if((0,g.II)()){const n=r(e);Object.values(C(n,t)).forEach(e=>{e.forEach(e=>{!function(e){m.forEach(t=>{e.getTargeting(t)&&e.clearTargeting(t)})}(e)})})}},t.resetPresetTargetingAST=function(e){r(e).forEach(function(e){const t=window.apntag.getTag(e);if(t&&t.keywords){const n=Object.keys(t.keywords),i={};n.forEach(e=>{(0,f.mK)(m,e.toLowerCase())||(i[e]=t.keywords[e])}),window.apntag.modifyTag(e,{keywords:i})}})},t.getAllTargeting=function(t,n,c){let d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:h.Vk,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:g.Q0;c||(c=w(d,u));const A=r(t),I=s.$W.getConfig("enableSendAllBids"),C=s.$W.getConfig("sendBidsControl.bidLimit"),B=I&&(n||C)||0,{customKeysByUnit:S,filteredBids:R}=function(e,t){const n=[],i={},r=s.$W.getConfig("targetingControls.alwaysIncludeDeals");return t.forEach(t=>{const s=(0,f.mK)(e,t.adUnitCode),a=!0===o.u.get(t.bidderCode,"allowZeroCpmBids")?t.cpm>=0:t.cpm>0,c=r&&t.dealId;s&&(c||a)&&(n.push(t),Object.keys(t.adserverTargeting).filter(function(){let e=k();e=e.concat(l.Nh);return function(t){return-1===e.indexOf(t)}}()).forEach(e=>{const n=e.substring(0,b),r=i[t.adUnitCode]||{},o=[t.adserverTargeting[e]];r[n]?r[n]=r[n].concat(o).filter(g.hj):r[n]=o,i[t.adUnitCode]=r}))}),{filteredBids:n,customKeysByUnit:i}}(A,c);let D=function(t,n){const r=function(e){let t=[],n=e.reduce((e,n)=>((0,f.mK)(t,n.adUnitCode)||(e.push(n),t.push(n.adUnitCode)),e),[]),i=k();return n=n.map(e=>({[e.adUnitCode]:Object.keys(e.adserverTargeting).filter(t=>void 0===e.sendStandardTargeting||e.sendStandardTargeting||-1===i.indexOf(t)).reduce((t,n)=>{const i=[e.adserverTargeting[n]],r={[n.substring(0,b)]:i};if(n===a.xS.DEAL){const o="".concat(n,"_").concat(e.bidderCode).substring(0,b),s={[o]:i};return[...t,r,s]}return[...t,r]},[])})),n}(t).concat(function(e,t){return e.reduce((e,n)=>{const i=Object.assign({},n),r=t[i.adUnitCode],o=[];return r&&Object.keys(r).forEach(e=>{e&&r[e]&&o.push({[e]:r[e]})}),e.push({[i.adUnitCode]:o}),e},[])}(t,n)).concat(function(e){const t=s.$W.getConfig("targetingControls.alwaysIncludeDeals");return i(e,s.$W.getConfig("enableSendAllBids")||t,t)}(t)).concat(function(){function t(e){return(0,p.A)(e,a.iD.ADSERVER_TARGETING)}function n(e){const n=t(e);return Object.keys(n).map(function(e){return(0,g.O8)(n[e])&&(n[e]=n[e].split(",").map(e=>e.trim())),(0,g.cy)(n[e])||(n[e]=[n[e]]),{[e]:n[e]}})}return e.getAdUnits().filter(e=>t(e)).reduce((e,t)=>{const i=n(t);return i&&e.push({[t.code]:i}),e},[])}());return r.forEach(e=>{!function(e){Object.keys(e).forEach(t=>{e[t].forEach(e=>{const t=Object.keys(e);-1===m.indexOf(t[0])&&(m=t.concat(m))})})}(e)}),r}(T(R,d,B,void 0,u),S);const j=Object.keys(Object.assign({},a.Zh,a.x5));let U=s.$W.getConfig(v);const _=s.$W.getConfig(y);if(null!=_&&null!=U)throw new Error(E);U=null!=_?j.concat(_):U||j,Array.isArray(U)&&U.length>0&&(D=function(e,t){const n=Object.assign({},a.xS,a.x5),i=Object.keys(n),r={};(0,g.fH)("allowTargetingKeys - allowed keys [ ".concat(t.map(e=>n[e]).join(", ")," ]")),e.map(e=>{const o=Object.keys(e)[0],s=e[o].filter(e=>{const o=Object.keys(e)[0],s=0===i.filter(e=>0===o.indexOf(n[e])).length||(0,f.I6)(t,e=>{const t=n[e];return 0===o.indexOf(t)});return r[o]=!s,s});e[o]=s});const o=Object.keys(r).filter(e=>r[e]);return(0,g.fH)("allowTargetingKeys - removed keys [ ".concat(o.join(", ")," ]")),e.filter(e=>e[Object.keys(e)[0]].length>0)}(D,U)),D=function(e){let t=e.map(e=>({[Object.keys(e)[0]]:e[Object.keys(e)[0]].map(e=>({[Object.keys(e)[0]]:e[Object.keys(e)[0]].join(",")})).reduce((e,t)=>Object.assign(t,e),{})}));return t=t.reduce(function(e,t){var n=Object.keys(t)[0];return e[n]=Object.assign({},e[n],t[n]),e},{}),t}(D);const q=s.$W.getConfig("targetingControls.auctionKeyMaxChars");return q&&((0,g.fH)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(q," characters.  Running checks on auction keys...")),D=function(e,t){let n=(0,g.Go)(e),i=Object.keys(n).map(e=>({adUnitCode:e,adserverTargeting:n[e]})).sort(O());return i.reduce(function(e,i,r,o){let s=(a=i.adserverTargeting,Object.keys(a).reduce(function(e,t){return e+"".concat(t,"%3d").concat(encodeURIComponent(a[t]),"%26")},""));var a;r+1===o.length&&(s=s.slice(0,-3));let c=i.adUnitCode,d=s.length;return d<=t?(t-=d,(0,g.fH)("AdUnit '".concat(c,"' auction keys comprised of ").concat(d," characters.  Deducted from running threshold; new limit is ").concat(t),n[c]),e[c]=n[c]):(0,g.JE)("The following keys for adUnitCode '".concat(c,"' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d,", the current allotted amount was ").concat(t,".\n"),n[c]),r+1===o.length&&0===Object.keys(e).length&&(0,g.vV)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),e},{})}(D,q)),A.forEach(e=>{D[e]||(D[e]={})}),D},s.$W.getConfig("targetingControls",function(e){null!=(0,p.A)(e,v)&&null!=(0,p.A)(e,y)&&(0,g.vV)(E)}),t.setTargetingForGPT=(0,d.A_)("sync",function(n,i){let r=t.getAllTargeting(n),o=Object.fromEntries(m.map(e=>[e,null]));Object.entries(C(Object.keys(r),i)).forEach(e=>{let[t,n]=e;n.forEach(e=>{Object.keys(r[t]).forEach(e=>{let n=r[t][e];"string"==typeof n&&-1!==n.indexOf(",")&&(n=n.split(",")),r[t][e]=n}),(0,g.OG)("Attempting to set targeting-map for slot: ".concat(e.getSlotElementId()," with targeting-map:"),r[t]),e.updateTargetingFromMap(Object.assign({},o,r[t]))})}),Object.keys(r).forEach(t=>{Object.keys(r[t]).forEach(n=>{"hb_adid"===n&&e.setStatusForBids(r[t][n],a.tl.BID_TARGETING_SET)})}),t.targetingDone(r),c.Ic(a.qY.SET_TARGETING,r)},"setTargetingForGPT"),t.targetingDone=(0,d.A_)("sync",function(e){return e},"targetingDone"),t.getWinningBids=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h.Vk,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:g.Q0;const a=[],c=t||w(n,i),d=r(e);return c.reduce((e,t)=>{const n=t.adUnitCode,i=!0===o.u.get(n,"allowZeroCpmBids")?t.cpm>=0:t.cpm>0,r=s.$W.getConfig("targetingControls.alwaysIncludeDeals")&&t.dealId;return(0,f.mK)(d,n)&&!(0,f.mK)(a,n)&&(r||i)&&(e.push(t),a.push(n)),e},[])},t.setTargetingForAst=function(e){let n=t.getAllTargeting(e);try{t.resetPresetTargetingAST(e)}catch(e){(0,g.vV)("unable to reset targeting for AST"+e)}Object.keys(n).forEach(e=>Object.keys(n[e]).forEach(t=>{if((0,g.OG)("Attempting to set targeting for targetId: ".concat(e," key: ").concat(t," value: ").concat(n[e][t])),(0,g.O8)(n[e][t])||(0,g.cy)(n[e][t])){let i={},r=/pt[0-9]/;t.search(r)<0?i[t.toUpperCase()]=n[e][t]:i[t]=n[e][t],window.apntag.setKeywords(e,i,{overrideKeyValue:!0})}}))},t.isApntagDefined=function(){if(window.apntag&&(0,g.fp)(window.apntag.setKeywords))return!0},t}(i.n)},8230(e,t,n){n.d(t,{qh:()=>f,zt:()=>p});var i=n(1069),r=n(3272),o=n(5901),s=n(2938),a=n(5139),c=n(6811),d=n(2604),u=n(5569),l=n(3441);const f={syncEnabled:!0,filterSettings:{image:{bidders:"*",filter:"include"}},syncsPerBidder:5,syncDelay:3e3,auctionDelay:500};r.$W.setDefaults({userSync:(0,i.Go)(f)});const g=(0,s.CK)("usersync");const p=function(e){let t={},n={image:[],iframe:[]},s=new Set,a={},f={image:!0,iframe:!1},g=e.config;function p(){if(g.syncEnabled&&e.browserSupportsCookies){try{!function(){if(!f.iframe)return;h(n.iframe,e=>{let[t,r]=e;(0,i.OG)("Invoking iframe user sync for bidder: ".concat(t)),(0,i.SG)(r),function(e,t){e.image=e.image.filter(e=>e[0]!==t)}(n,t)})}(),function(){if(!f.image)return;h(n.image,e=>{let[t,n]=e;(0,i.OG)("Invoking image pixel user sync for bidder: ".concat(t)),(0,i.z$)(n)})}()}catch(e){return(0,i.vV)("Error firing user syncs",e)}n={image:[],iframe:[]}}}function h(e,t){(0,i.k4)(e).forEach(t)}function m(e,t){let n=g.filterSettings;if(function(e,t){if(e.all&&e[t])return(0,i.JE)('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t,'" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')),!1;let n=e.all?e.all:e[t],r=e.all?"all":t;if(!n)return!1;let o=n.filter,s=n.bidders;if(o&&"include"!==o&&"exclude"!==o)return(0,i.JE)('UserSync "filterSettings.'.concat(r,".filter\" setting '").concat(o,"' is not a valid option; use either 'include' or 'exclude'.")),!1;if("*"!==s&&!(Array.isArray(s)&&s.length>0&&s.every(e=>(0,i.O8)(e)&&"*"!==e)))return(0,i.JE)('Detected an invalid setup in userSync "filterSettings.'.concat(r,".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")),!1;return!0}(n,e)){f[e]=!0;let i=n.all?n.all:n[e],r="*"===i.bidders?[t]:i.bidders;const s={include:(e,t)=>!(0,o.mK)(e,t),exclude:(e,t)=>(0,o.mK)(e,t)};return s[i.filter||"include"](r,t)}return!f[e]}return r.$W.getConfig("userSync",e=>{if(e.userSync){let t=e.userSync.filterSettings;(0,i.Qd)(t)&&(t.image||t.all||(e.userSync.filterSettings.image={bidders:"*",filter:"include"}))}g=Object.assign(g,e.userSync)}),e.regRule(c.Ml,"userSync config",e=>{if(!g.syncEnabled)return{allow:!1,reason:"syncs are disabled"};if(e[d.Dk]===u.tW){const n=e[d.bt],i=e[d.iK];if(!t.canBidderRegisterSync(n,i))return{allow:!1,reason:"".concat(n," syncs are not enabled for ").concat(i)}}}),t.registerSync=(t,r,o)=>s.has(r)?(0,i.OG)('already fired syncs for "'.concat(r,'", ignoring registerSync call')):g.syncEnabled&&(0,i.cy)(n[t])?r?0!==g.syncsPerBidder&&Number(a[r])>=g.syncsPerBidder?(0,i.JE)('Number of user syncs exceeded for "'.concat(r,'"')):void(e.isAllowed(c.Ml,(0,l.s)(u.tW,r,{[d.bt]:t,[d.e3]:o}))&&(n[t].push([r,o]),a=function(e,t){return e[t]?e[t]+=1:e[t]=1,e}(a,r))):(0,i.JE)("Bidder is required for registering sync"):(0,i.JE)('User sync type "'.concat(t,'" not supported')),t.bidderDone=s.add.bind(s),t.syncUsers=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(e)return setTimeout(p,Number(e));p()},t.triggerUserSyncs=()=>{g.enableOverride&&t.syncUsers()},t.canBidderRegisterSync=(e,t)=>!g.filterSettings||!m(e,t),t}(Object.defineProperties({config:r.$W.getConfig("userSync"),isAllowed:a.io,regRule:a.qB},{browserSupportsCookies:{get:function(){return!(0,i.Vt)()&&g.cookiesAreEnabled()}}}))},1069(e,t,n){n.d(t,{$D:()=>C,$l:()=>$e,$z:()=>Be,Bg:()=>ze,Bj:()=>Le,Bk:()=>de,Bq:()=>le,CA:()=>H,D4:()=>fe,D9:()=>Fe,Dl:()=>Ve,El:()=>Je,Et:()=>Q,Ez:()=>$,Fq:()=>qe,GE:()=>Ce,Go:()=>ye,II:()=>he,Im:()=>Z,JE:()=>P,Lm:()=>X,N9:()=>Oe,O8:()=>J,OG:()=>x,PB:()=>He,Q0:()=>be,Qd:()=>Y,SB:()=>De,SG:()=>ae,SH:()=>Se,Tz:()=>ce,U6:()=>ke,Up:()=>xe,Uu:()=>Ne,V:()=>Te,Vt:()=>Ae,ZA:()=>pe,_W:()=>ge,_s:()=>ie,al:()=>Ee,bD:()=>Ge,bL:()=>O,bM:()=>S,bu:()=>te,bz:()=>_e,c$:()=>Me,cD:()=>b,cf:()=>R,cy:()=>K,eP:()=>We,fH:()=>N,fp:()=>z,gM:()=>we,gR:()=>ne,h0:()=>V,hj:()=>ue,hw:()=>F,iC:()=>Ue,k4:()=>ve,kK:()=>B,l4:()=>_,l9:()=>je,lk:()=>I,mM:()=>y,mb:()=>U,nX:()=>D,ro:()=>se,s0:()=>w,t1:()=>me,u5:()=>T,vE:()=>Ie,vV:()=>W,wD:()=>Re,xQ:()=>ee,y$:()=>k,z$:()=>oe});var i=n(3272),r=n(5751),o=n(5901),s=n(8969),a=n(5555),c=n(7873),d=Object.prototype.toString;let u,l=Boolean(window.console),f=Boolean(l&&window.console.log),g=Boolean(l&&window.console.info),p=Boolean(l&&window.console.warn),h=Boolean(l&&window.console.error);const m=(0,c.m)();function b(e){u=e}function v(){null!=u&&u(...arguments)}const y={checkCookieSupport:Ce,createTrackPixelIframeHtml:function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!e)return"";t&&(e=encodeURI(e));n&&(n='sandbox="'.concat(n,'"'));return"<iframe ".concat(n,' id="').concat(w(),'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e,'">\n    </iframe>')},getWindowSelf:_,getWindowTop:U,canAccessWindowTop:function(){try{if(y.getWindowTop().location.href)return!0}catch(e){return!1}},getWindowLocation:q,insertUserSyncIframe:ae,insertElement:ie,isFn:z,triggerPixel:oe,logError:W,logWarn:P,logMessage:x,logInfo:N,parseQS:Pe,formatQS:We,deepEqual:Ge};var E,A=(E=0,function(){return++E});function w(){return A()+Math.random().toString(16).substr(2)}function I(e){return e?(e^(window&&window.crypto&&window.crypto.getRandomValues?crypto.getRandomValues(new Uint8Array(1))[0]%16:16*Math.random())>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,I)}function T(e,t){return(null==t?void 0:t[e])||""}function O(e){let t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t=t.replace(/&$/,""),t}function C(e){return e&&Object.getOwnPropertyNames(e).length>0?Object.keys(e).map(t=>"".concat(t,"=").concat(encodeURIComponent(e[t]))).join("&"):""}function k(e){return"string"==typeof e?e.split(/\s*,\s*/).map(e=>e.match(/^(\d+)x(\d+)$/i)).filter(e=>e).map(e=>{let[t,n,i]=e;return[parseInt(n,10),parseInt(i,10)]}):Array.isArray(e)?j(e)?[e]:e.filter(j):[]}function B(e){return k(e).map(S)}function S(e){return e[0]+"x"+e[1]}function R(e){return{w:e[0],h:e[1]}}function D(e){if(j(e))return R(e)}function j(e){return K(e)&&2===e.length&&!isNaN(e[0])&&!isNaN(e[1])}function U(){return window.top}function _(){return window.self}function q(){return window.location}function x(){G()&&f&&console.log.apply(console,M(arguments,"MESSAGE:"))}function N(){G()&&g&&console.info.apply(console,M(arguments,"INFO:"))}function P(){G()&&p&&console.warn.apply(console,M(arguments,"WARNING:")),v(s.qY.AUCTION_DEBUG,{type:"WARNING",arguments})}function W(){G()&&h&&console.error.apply(console,M(arguments,"ERROR:")),v(s.qY.AUCTION_DEBUG,{type:"ERROR",arguments})}function V(e){function t(t){return function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];t(e,...i)}}return{logError:t(W),logWarn:t(P),logMessage:t(x),logInfo:t(N)}}function M(e,t){e=[].slice.call(e);let n=i.$W.getCurrentBidder();return t&&e.unshift(t),n&&e.unshift(r("#aaa")),e.unshift(r("#3b88c3")),e.unshift("%cPrebid"+(n?"%c".concat(n):"")),e;function r(e){return"display: inline-block; color: #fff; background: ".concat(e,"; padding: 1px 4px; border-radius: 3px;")}}function G(){return!!i.$W.getConfig("debug")}const F=(()=>{const e={border:"0px",hspace:"0",vspace:"0",marginWidth:"0",marginHeight:"0",scrolling:"no",frameBorder:"0",allowtransparency:"true"};return function(t,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=t.createElement("iframe");return Object.assign(r,Object.assign({},e,n)),Object.assign(r.style,i),r}})();function H(){return F(document,{id:w(),width:0,height:0,src:"about:blank"},{display:"none",height:"0px",width:"0px",border:"0px"})}function $(e){return Pe(q().search)[e]||""}function L(e,t){return d.call(e)==="[object "+t+"]"}function z(e){return L(e,"Function")}function J(e){return L(e,"String")}const K=Array.isArray.bind(Array);function Q(e){return L(e,"Number")}function Y(e){return L(e,"Object")}function X(e){return L(e,"Boolean")}function Z(e){return!e||(K(e)||J(e)?!(e.length>0):Object.keys(e).length<=0)}function ee(e){return J(e)&&(!e||0===e.length)}function te(e,t){if(z(null==e?void 0:e.forEach))return e.forEach(t,this);Object.entries(e||{}).forEach(e=>{let[n,i]=e;return t.call(this,i,n)})}function ne(e,t){return z(null==e?void 0:e.includes)&&e.includes(t)}function ie(e,t,n,i){let r;t=t||document,r=n?t.getElementsByTagName(n):t.getElementsByTagName("head");try{if(r=r.length?r:t.getElementsByTagName("body"),r.length){r=r[0];let t=i?null:r.firstChild;return r.insertBefore(e,t)}}catch(e){}}function re(e,t){let n=null;return new a.k(i=>{const r=function(){e.removeEventListener("load",r),e.removeEventListener("error",r),null!=n&&window.clearTimeout(n),i()};e.addEventListener("load",r),e.addEventListener("error",r),null!=t&&(n=window.setTimeout(r,t))})}function oe(e,t,n){const i=new Image;t&&y.isFn(t)&&re(i,n).then(t),i.src=e}function se(e){if(!e)return;const t=H();var n;y.insertElement(t,document,"body"),(n=t.contentWindow.document).open(),n.write(e),n.close()}function ae(e,t,n){let i=y.createTrackPixelIframeHtml(e,!1,"allow-scripts allow-same-origin"),r=document.createElement("div");r.innerHTML=i;let o=r.firstChild;t&&y.isFn(t)&&re(o,n).then(t),y.insertElement(o,document,"html",!0)}function ce(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:encodeURI;if(!e)return"";let n='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return n+='<img src="'+t(e)+'"></div>',n}function de(e){return Array.from(e.matchAll(/\$({[^}]+})/g)).map(e=>e[1]).reduce((e,t)=>e.replace("$"+encodeURIComponent(t),"$"+t),encodeURI(e))}function ue(e,t,n){return n.indexOf(e)===t}function le(e,t){return e.concat(t)}function fe(e,t){if(e)return t.flatMap(e=>e.bids).find(t=>["bidId","adId","bid_id"].some(n=>t[n]===e))}function ge(e,t){return e[t]}function pe(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.adUnits).map(e=>e.bids.map(e=>e.bidder).reduce(le,[])).reduce(le,[]).filter(e=>void 0!==e).filter(ue)}function he(){if(window.googletag&&z(window.googletag.pubads)&&z(window.googletag.pubads().getSlots))return!0}function me(){if(window.apntag&&z(window.apntag.getTag))return!0}const be=(e,t)=>t.cpm-e.cpm;function ve(e){let t=e.length;for(;t>0;){let n=Math.floor(Math.random()*t);t--;let i=e[t];e[t]=e[n],e[n]=i}return e}function ye(e){return(0,r.Q)(e)||{}}function Ee(){try{return y.getWindowSelf()!==y.getWindowTop()}catch(e){return!0}}function Ae(){return/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)}function we(e,t){if(e)return Object.entries(t).reduce((e,t)=>{let[n,i]=t;return e.replace(new RegExp("\\$\\{"+n+"\\}","g"),i||"")},e)}function Ie(){return(new Date).getTime()}function Te(){return window.performance&&window.performance.now&&window.performance.now()||0}function Oe(){return!1!==i.$W.getConfig("deviceAccess")}function Ce(){if(window.navigator.cookieEnabled||document.cookie.length)return!0}function ke(e,t){if(t<1)throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));let n=0;return function(){n++,n===t&&e.apply(this,arguments)}}function Be(e,t){return e.reduce(function(e,n){return(e[n[t]]=e[n[t]]||[]).push(n),e},{})}function Se(e,t){return t.filter(t=>e[t]).reduce((t,n)=>Object.assign(t,{[n]:e[n]}),{})}function Re(e){const t=["banner","native","video"],n=["instream","outstream","adpod"];return!!Object.keys(e).every(e=>(0,o.mK)(t,e))&&(!e.video||!e.video.context||(0,o.mK)(n,e.video.context))}function De(e,t,n){return e.filter(e=>e.code===t).flatMap(e=>e.bids).filter(e=>e.bidder===n).map(e=>e.params||{})}function je(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNotTrack||"yes"===navigator.doNotTrack}function Ue(e){return t=>((e,t)=>e.getAdUnitPath()===t||e.getSlotElementId()===t)(e,t)}function _e(e,t){const n=Object.keys(e.mediaTypes||{banner:"banner"}).join(", ");return"\n    ".concat(e.code," is a ").concat(n," ad unit\n    containing bidders that don't support ").concat(n,": ").concat(t,".\n    This bidder won't fetch demand.\n  ")}const qe=Number.isInteger.bind(Number);function xe(e,t){return"object"!=typeof e?{}:t.reduce((n,i,r)=>{if("function"==typeof i)return n;let o=i,s=i.match(/^(.+?)\sas\s(.+?)$/i);s&&(i=s[1],o=s[2]);let a=e[i];return"function"==typeof t[r+1]&&(a=t[r+1](a,n)),void 0!==a&&(n[o]=a),n},{})}function Ne(e,t){return K(e)&&(!t||e.length===t)&&e.every(e=>qe(e))}function Pe(e){return e?e.replace(/^\?/,"").split("&").reduce((e,t)=>{let[n,i]=t.split("=");return/\[\]$/.test(n)?(n=n.replace("[]",""),e[n]=e[n]||[],e[n].push(i)):e[n]=i||"",e},{}):{}}function We(e){return Object.keys(e).map(t=>Array.isArray(e[t])?e[t].map(e=>"".concat(t,"[]=").concat(e)).join("&"):"".concat(t,"=").concat(e[t])).join("&")}function Ve(e,t){let n=document.createElement("a");t&&"noDecodeWholeURL"in t&&t.noDecodeWholeURL?n.href=e:n.href=decodeURIComponent(e);let i=t&&"decodeSearchAsString"in t&&t.decodeSearchAsString;return{href:n.href,protocol:(n.protocol||"").replace(/:$/,""),hostname:n.hostname,port:+n.port,pathname:n.pathname.replace(/^(?!\/)/,"/"),search:i?n.search:y.parseQS(n.search||""),hash:(n.hash||"").replace(/^#/,""),host:n.host||window.location.host}}function Me(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":".concat(e.port):""))+(e.pathname||"")+(e.search?"?".concat(y.formatQS(e.search||"")):"")+(e.hash?"#".concat(e.hash):"")}function Ge(e,t){let{checkTypes:n=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t||n&&e.constructor!==t.constructor)return!1;{const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!1;for(let r of i){if(!t.hasOwnProperty(r))return!1;if(!Ge(e[r],t[r],{checkTypes:n}))return!1}return!0}}function Fe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(!n.length)return e;const r=n.shift();if(Y(e)&&Y(r))for(const t in r)Y(r[t])?(e[t]||Object.assign(e,{[t]:{}}),Fe(e[t],r[t])):K(r[t])?e[t]?K(e[t])&&r[t].forEach(n=>{let i=1;for(let r=0;r<e[t].length;r++)if(Ge(e[t][r],n)){i=0;break}i&&e[t].push(n)}):Object.assign(e,{[t]:[...r[t]]}):Object.assign(e,{[t]:r[t]});return Fe(e,...n)}function He(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=function(e,t){if(z(Math.imul))return Math.imul(e,t);var n=(4194303&e)*(t|=0);return 4290772992&e&&(n+=(4290772992&e)*t|0),0|n},i=3735928559^t,r=1103547991^t;for(let t,o=0;o<e.length;o++)t=e.charCodeAt(o),i=n(i^t,2654435761),r=n(r^t,1597334677);return i=n(i^i>>>16,2246822507)^n(r^r>>>13,3266489909),r=n(r^r>>>16,2246822507)^n(i^i>>>13,3266489909),(4294967296*(2097151&r)+(i>>>0)).toString()}function $e(e){try{return JSON.parse(e)}catch(e){}}function Le(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};const n=new Map,i=function(){const i=t.apply(this,arguments);return n.has(i)||n.set(i,e.apply(this,arguments)),n.get(i)};return i.clear=n.clear.bind(n),i}function ze(e,t){Object.entries(t).forEach(t=>{let[n,i]=t;return e.setAttribute(n,i)})}function Je(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>e,i=0,r=e.length&&e.length-1;const o=n(t);for(;r-i>1;){const t=i+Math.round((r-i)/2);o>n(e[t])?i=t:r=t}for(;e.length>i&&o>n(e[i]);)i++;return i}},2621(e,t,n){n.d(t,{C:()=>r});var i=n(433);function r(e){return null==e||!e.gdprApplies||!0===(0,i.A)(e,"vendorData.purpose.consents.1")}},6894(e,t,n){n.d(t,{Ak:()=>m,BO:()=>g,K7:()=>p});var i=n(3272);const r="performanceMetrics",o=window.performance&&window.performance.now?()=>window.performance.now():()=>Date.now(),s=new WeakMap;function a(){let{now:e=o,mkNode:t=u,mkTimer:n=d,mkRenamer:i=e=>e,nodes:r=s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){return function o(s){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>({forEach(t){t(e)}});a=i(a);const c=(d="timestamps",function(e){return s.dfWalk({visit(t,n){const i=n[d];if(i.hasOwnProperty(e))return i[e]}})});var d;function u(e,t){const n=a(e);s.dfWalk({follow:(e,t)=>t.propagate&&(!e||!e.stopPropagation),visit(e,i){n.forEach(n=>{null==e?i.metrics[n]=t:(i.groups.hasOwnProperty(n)||(i.groups[n]=[]),i.groups[n].push(t))})}})}function l(t){return n(e,e=>u(t,e))}function f(){let e={};return s.dfWalk({visit(t,n){e=Object.assign({},!t||t.includeGroups?n.groups:null,n.metrics,e)}}),e}const g={startTiming:l,measureTime:function(e,t){return l(e).stopAfter(t)()},measureHookTime:function(e,t,n){const i=l(e);return n(function(e){const t=i.stopBefore(e);return t.bail=e.bail&&i.stopBefore(e.bail),t.stopTiming=i,t.untimed=e,t}(t))},checkpoint:function(t){s.timestamps[t]=e()},timeSince:function(t,n){const i=c(t),r=null!=i?e()-i:null;return null!=n&&u(n,r),r},timeBetween:function(e,t,n){const i=c(e),r=c(t),o=null!=i&&null!=r?r-i:null;return null!=n&&u(n,o),o},setMetric:u,getMetrics:f,fork:function(){let{propagate:e=!0,stopPropagation:n=!1,includeGroups:i=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o(t([[s,{propagate:e,stopPropagation:n,includeGroups:i}]]),a)},join:function(e){let{propagate:t=!0,stopPropagation:n=!1,includeGroups:i=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=r.get(e);null!=o&&o.addParent(s,{propagate:t,stopPropagation:n,includeGroups:i})},newMetrics:function(){return o(s.newSibling(),a)},renameWith:function(e){return o(s,e)},toJSON:()=>f()};return r.set(g,s),g}(t([]))}}function c(e,t,n){return function(){t&&t();try{return e.apply(this,arguments)}finally{n&&n()}}}function d(e,t){const n=e();let i=!1;function r(){i||(t(e()-n),i=!0)}return r.stopBefore=e=>c(e,r),r.stopAfter=e=>c(e,null,r),r}function u(e){return{metrics:{},timestamps:{},groups:{},addParent(t,n){e.push([t,n])},newSibling:()=>u(e.slice()),dfWalk(){let t,{visit:n,follow:i=()=>!0,visited:r=new Set,inEdge:o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!r.has(this)){if(r.add(this),t=n(o,this),null!=t)return t;for(const[s,a]of e)if(i(o,a)&&(t=s.dfWalk({visit:n,follow:i,visited:r,inEdge:a}),null!=t))return t}}}}const l=(()=>{const e=function(){},t=()=>({}),n={forEach:e},i=()=>null;i.stopBefore=e=>e,i.stopAfter=e=>e;const r=Object.defineProperties({dfWalk:e,newSibling:()=>r,addParent:e},Object.fromEntries(["metrics","timestamps","groups"].map(e=>[e,{get:t}])));return a({now:()=>0,mkNode:()=>r,mkRenamer:()=>()=>n,mkTimer:()=>i,nodes:{get:e,set:e}})()})();let f=!0;function g(e){return f&&e||l}i.$W.getConfig(r,e=>{f=!!e[r]});const p=(()=>{const e=a();return function(){return f?e():l}})();function h(e,t){return function(n,i){return function(r){for(var o=arguments.length,s=new Array(o>1?o-1:0),a=1;a<o;a++)s[a-1]=arguments[a];const c=this;return g(t.apply(c,s)).measureHookTime(e+n,r,function(e){return i.call(c,e,...s)})}}}const m=h("requestBids.",e=>e.metrics);h("addBidResponse.",(e,t)=>t.metrics)},5555(e,t,n){function i(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}function r(e,t){return e.get(s(e,t))}function o(e,t,n){return e.set(s(e,t),n),n}function s(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}n.d(t,{k:()=>l,v:()=>g});const a=0,c=1;var d=new WeakMap,u=new WeakMap;class l{static timeout(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new l(t=>{0===e?t():setTimeout(t,e)})}constructor(e){if(i(this,d,void 0),i(this,u,void 0),"function"!=typeof e)throw new Error("resolver not a function");const t=[],n=[];let[r,s]=[a,c].map(e=>function(i){if(e===a&&"function"==typeof(null==i?void 0:i.then))i.then(r,s);else if(!t.length)for(t.push(e,i);n.length;)n.shift()()});try{e(r,s)}catch(e){s(e)}o(d,this,t),o(u,this,n)}then(e,t){const n=r(d,this);return new this.constructor((i,o)=>{const s=()=>{let r=n[1],[s,c]=n[0]===a?[e,i]:[t,o];if("function"==typeof s){try{r=s(r)}catch(e){return void o(e)}c=i}c(r)};n.length?s():r(u,this).push(s)})}catch(e){return this.then(null,e)}finally(e){let t;return this.then(n=>(t=n,e()),n=>(t=this.constructor.reject(n),e())).then(()=>t)}static race(e){return new this((t,n)=>{s(l,this,f).call(this,e,(e,i)=>e?t(i):n(i))})}static all(e){return new this((t,n)=>{let i=[];s(l,this,f).call(this,e,(e,t,r)=>e?i[r]=t:n(t),()=>t(i))})}static allSettled(e){return new this(t=>{let n=[];s(l,this,f).call(this,e,(e,t,i)=>n[i]=e?{status:"fulfilled",value:t}:{status:"rejected",reason:t},()=>t(n))})}static resolve(e){return new this(t=>t(e))}static reject(e){return new this((t,n)=>n(e))}}function f(e,t,n){let i=e.length;function r(){t.apply(this,arguments),--i<=0&&n&&n()}0===e.length&&n?n():e.forEach((e,t)=>this.resolve(e).then(e=>r(!0,e,t),e=>r(!1,e,t)))}function g(){let e,t,{promiseFactory:n=e=>new l(e)}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};function i(e){return t=>e(t)}return{promise:n((n,i)=>{e=n,t=i}),resolve:i(e),reject:i(t)}}},2713(e,t,n){function i(e,t){return e===t?0:e<t?-1:1}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>e;return(t,n)=>i(e(t),e(n))}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return(t,n)=>-e(t,n)||0}function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n){for(const i of t){const t=i(e,n);if(0!==t)return t}return 0}}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return(t,n)=>e(n,t)<0?n:t}function c(){return a(o(arguments.length>0&&void 0!==arguments[0]?arguments[0]:i))}n.d(t,{Bp:()=>a,Bq:()=>f,NV:()=>r,Ph:()=>c,Vk:()=>l});const d=r(e=>e.cpm),u=r(e=>e.responseTimestamp),l=c(s(d,o(r(e=>e.timeToRespond)))),f=c(s(d,o(u)));c(s(d,u))},6853(e,t,n){n.d(t,{H:()=>u});var i=n(5555),r=n(1069);let o=null,s=0,a=[];function c(){document.hidden?o=Date.now():(s+=Date.now()-(null!=o?o:0),o=null,a.forEach(e=>{let{callback:t,startTime:n,setTimerId:i}=e;return i(d(t,s-n)())}),a=[])}function d(e,t){const n=s;let i=setTimeout(()=>{s===n&&null==o?e():null!=o?a.push({callback:e,startTime:n,setTimerId(e){i=e}}):i=d(e,s-n)()},t);return()=>i}function u(){let{startTime:e=r.vE,ttl:t=()=>null,monotonic:n=!1,slack:o=5e3}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const s=new Map,a=[],c=[],u=n?e=>c.push(e):e=>c.splice((0,r.El)(c,e,e=>e.expiry),0,e);let l,f;function g(){if(f&&clearTimeout(f),c.length>0){const e=(0,r.vE)();l=Math.max(e,c[0].expiry+o),f=d(()=>{const e=(0,r.vE)();let t=0;for(const n of c){if(n.expiry>e)break;a.forEach(e=>{try{e(n.item)}catch(e){(0,r.vV)(e)}}),s.delete(n.item),t++}c.splice(0,t),f=null,g()},l-e)}else f=null}function p(n){const r={},s=h;let a;const[c,d]=Object.entries({start:e,delta:t}).map(e=>{let t,[c,d]=e;return function(){const e=t={};i.k.resolve(d(n)).then(n=>{e===t&&(r[c]=n,s===h&&null!=r.start&&null!=r.delta&&(a=r.start+r.delta,u(p),(null==f||l>a+o)&&g()))})}}),p={item:n,refresh:d,get expiry(){return a}};return c(),d(),p}let h={};return{[Symbol.iterator]:()=>s.keys(),add(e){!s.has(e)&&s.set(e,p(e))},clear(){c.length=0,g(),s.clear(),h={}},toArray:()=>Array.from(s.keys()),refresh(){c.length=0,g();for(const e of s.values())e.refresh()},onExpiry:e=>(a.push(e),()=>{const t=a.indexOf(e);t>=0&&a.splice(t,1)})}}document.addEventListener("visibilitychange",c)},3895(e,t,n){n.d(t,{H6:()=>c,V0:()=>l,Zy:()=>u,aP:()=>f,mn:()=>d,vk:()=>g});var i=n(1069),r=n(433),o=n(3272),s=n(9214),a=n(6881);const c="outstream",d="instream",u=new Map([["mimes",e=>Array.isArray(e)&&e.length>0&&e.every(e=>"string"==typeof e)],["minduration",i.Fq],["maxduration",i.Fq],["startdelay",i.Fq],["maxseq",i.Fq],["poddur",i.Fq],["protocols",i.Uu],["w",i.Fq],["h",i.Fq],["podid",i.O8],["podseq",i.Fq],["rqddurs",i.Uu],["placement",i.Fq],["plcmt",i.Fq],["linearity",i.Fq],["skip",e=>[1,0].includes(e)],["skipmin",i.Fq],["skipafter",i.Fq],["sequence",i.Fq],["slotinpod",i.Fq],["mincpmpersec",i.Et],["battr",i.Uu],["maxextended",i.Fq],["minbitrate",i.Fq],["maxbitrate",i.Fq],["boxingallowed",i.Fq],["playbackmethod",i.Uu],["playbackend",i.Fq],["delivery",i.Uu],["pos",i.Fq],["api",i.Uu],["companiontype",i.Uu],["poddedupe",i.Uu]]);function l(e){var t;const n=null==e||null===(t=e.mediaTypes)||void 0===t?void 0:t.video;null!=n&&null==n.plcmt&&(n.context===c||[2,3,4].includes(n.placement)?n.plcmt=4:n.context!==c&&[2,6].includes(n.playbackmethod)&&(n.plcmt=2))}function f(e,t){var n;const r=null==e||null===(n=e.mediaTypes)||void 0===n?void 0:n.video;(0,i.Qd)(r)?null!=r&&Object.entries(r).forEach(n=>{let[o,s]=n;if(!u.has(o))return;u.get(o)(s)||("function"==typeof t?t(o,s,e):(delete r[o],(0,i.JE)('Invalid prop in adUnit "'.concat(e.code,'": Invalid value for mediaTypes.video.').concat(o," ORTB property. The property has been removed."))))}):(0,i.JE)("validateOrtbVideoFields: videoParams must be an object.")}function g(e){let{index:t=a.n.index}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=(0,r.A)(t.getMediaTypes(e),"video"),i=n&&(0,r.A)(n,"context"),o=n&&(0,r.A)(n,"useCacheKey"),s=t.getAdUnit(e);return p(e,s,n,i,o)}const p=(0,s.A_)("sync",function(e,t,n,r,s){return n&&(s||r!==c)?o.$W.getConfig("cache.url")||!e.vastXml||e.vastUrl?!(!e.vastUrl&&!e.vastXml):((0,i.vV)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with vuuklehb.setConfig({ cache: {url: "..."} });\n      '),!1):!(r===c&&!s)||!!(e.renderer||t&&t.renderer||n.renderer)},"checkVideoBidSetup")}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[1085],{4595(e,d,s){s.d(d,{G:()=>n});const n='(()=>{"use strict";window.render=function({ad:d,adUrl:e,width:i,height:r},{mkFrame:n},o){if(!d&&!e)throw{reason:"noAd",message:"Missing ad markup or URL"};{const s=o.document,t={width:i,height:r};e&&!d?t.src=e:t.srcdoc=d,s.body.appendChild(n(s,t))}}})();'}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[8139],{4042(e,s,r){function i(e){if(!e)return;let s=[];if(e.mediaTypes&&e.mediaTypes.banner&&Array.isArray(e.mediaTypes.banner.sizes)){let r=e.mediaTypes.banner.sizes;Array.isArray(r[0])?s=r:s.push(r)}else Array.isArray(e.sizes)&&(Array.isArray(e.sizes[0])?s=e.sizes:s.push(e.sizes));return s}r.d(s,{u:()=>i})}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[1522],{4190(e,o,r){function t(e,o,r){var t,u=1===r.length?r[0]:"*";if("function"==typeof e.getFloor){const r=e.getFloor({currency:"USD",mediaType:o,size:u});"object"!=typeof r||"USD"!==r.currency||isNaN(parseFloat(r.floor))||(t=parseFloat(r.floor))}return t}r.d(o,{M:()=>t})}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[2764],{2339(o,n,e){function t(o,n){return function(){const e=document.domain.split("."),t="_gd".concat(Date.now(),"_").concat(n);for(let n,i,u=0;u<e.length;u++){const c=e.slice(u).join(".");if(o.setCookie(t,"1",void 0,void 0,c),i=o.getCookie(t),o.setCookie(t,"","Thu, 01 Jan 1970 00:00:01 GMT",void 0,c),"1"!==i)return n;n=c}}}e.d(n,{w:()=>t})}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[7247],{8656(r,e,a){a.d(e,{D:()=>c});var n=a(3858),t=a(433);const o=["user.keywords"].concat(n.Dy.flatMap(r=>["keywords","content.keywords"].map(e=>"".concat(r,".").concat(e))));function c(r){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return function(){const r=new Set;for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return a.filter(r=>r).flatMap(r=>Array.isArray(r)?r:r.split(",")).map(r=>r.replace(/^\s*/,"").replace(/\s*$/,"")).filter(r=>r).forEach(e=>r.add(e)),Array.from(r.keys())}(...o.map(e=>(0,t.A)(r,e)),...a)}}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[5444],{554(e,t,r){r.d(t,{QF:()=>g,T_:()=>f,gg:()=>l});var n=r(1069),o=r(433),i=r(8656),c=r(3858);const d={526:"1plusX",527:"1plusX",541:"captify_segments",540:"perid"},u=["user.data"].concat(c.Dy.map(e=>"".concat(e,".content.data")));function a(e,t,r){return null==t?r:(0,n.O8)(t)?t:(0,n.Et)(t)?t.toString():void(0,n.JE)("Unsuported type for param: "+e+" required type: String")}function l(e){return(0,n.O8)(e)&&""!==e?s(e.split(/\s*(?:,)\s*/)):{}}function s(e){const t={};return e.forEach(e=>{if(-1!==e.indexOf("=")){let r=e.split("="),n=r[0],o=r[1];t.hasOwnProperty(n)?t[n].push(o):t[n]=[o]}else t.hasOwnProperty(e)||(t[e]=[])}),t}function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"keywords";const r=[];return(0,n.bu)(e,(e,o)=>{if((0,n.cy)(e)){let r=[];(0,n.bu)(e,e=>{((e=a(t+"."+o,e))||""===e)&&r.push(e)}),e=r}else{if(e=a(t+"."+o,e),!(0,n.O8)(e))return;e=[e]}e=e.filter(e=>""!==e);const i={key:o};e.length>0&&(i.value=e),r.push(i)}),r}((0,n.D9)(...t.map(e=>Object.fromEntries(Object.entries(e||{}).map(e=>{let[t,r]=e;return[t,(0,n.Et)(r)||(0,n.O8)(r)?[r]:r]})))))}function g(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return f(function(e){return s((0,i.D)(e))}(e),function(e){let t={};return u.forEach(r=>{((0,o.A)(e,r)||[]).forEach(e=>{const r=d[(0,o.A)(e,"ext.segtax")];r&&e.segment.forEach(e=>{t[r]?t[r].push(e.id):t[r]=[e.id]})})}),t}(e),...r)}},2349(e,t,r){r.d(t,{DX:()=>i,GS:()=>c,vk:()=>o});var n=r(1069);function o(e){return e.replace(/(?:^|\.?)([A-Z])/g,function(e,t){return"_"+t.toLowerCase()}).replace(/^_/,"")}const i=[{code:"appnexusAst",gvlid:32},{code:"emxdigital",gvlid:183},{code:"emetriq",gvlid:213},{code:"pagescience",gvlid:32},{code:"gourmetads",gvlid:32},{code:"matomy",gvlid:32},{code:"featureforward",gvlid:32},{code:"oftmedia",gvlid:32},{code:"adasta",gvlid:32},{code:"beintoo",gvlid:618},{code:"projectagora",gvlid:1032},{code:"stailamedia",gvlid:32},{code:"uol",gvlid:32},{code:"adzymic",gvlid:723}];function c(e,t){let r=[];for(let o=0;o<t;o++){let t=(0,n.Qd)(e)?(0,n.Go)(e):e;r.push(t)}return r}}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[2126],{5761(e,u,r){r.d(u,{$:()=>t});var n=r(1069);function t(e,u){return Object.keys(e).forEach(r=>{var t,h;u[r]&&((0,n.fp)(e[r])?u[r]=e[r](u[r]):u[r]=(t=e[r],h=u[r],"string"===t?h&&h.toString():"number"===t?Number(h):h),isNaN(u[r])&&delete u.key)}),u}}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[4982],{9906(e,l,u){function h(e,l){let u=[];for(let h=0;h<Math.ceil(e.length/l);h++){let t=h*l,n=t+l;u.push(e.slice(t,n))}return u}u.d(l,{i:()=>h})}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[2698],{4673(A,B,I){I.d(B,{n:()=>u});const u={1:"IAB20-3",2:"IAB18-5",3:"IAB10-1",4:"IAB2-3",5:"IAB19-8",6:"IAB22-1",7:"IAB18-1",8:"IAB12-3",9:"IAB5-1",10:"IAB4-5",11:"IAB13-4",12:"IAB8-7",13:"IAB9-7",14:"IAB7-1",15:"IAB20-18",16:"IAB10-7",17:"IAB19-18",18:"IAB13-6",19:"IAB18-4",20:"IAB1-5",21:"IAB1-6",22:"IAB3-4",23:"IAB19-13",24:"IAB22-2",25:"IAB3-9",26:"IAB17-18",27:"IAB19-6",28:"IAB1-7",29:"IAB9-30",30:"IAB20-7",31:"IAB20-17",32:"IAB7-32",33:"IAB16-5",34:"IAB19-34",35:"IAB11-5",36:"IAB12-3",37:"IAB11-4",38:"IAB12-3",39:"IAB9-30",41:"IAB7-44",42:"IAB7-1",43:"IAB7-30",50:"IAB19-30",51:"IAB17-12",52:"IAB19-30",53:"IAB3-1",55:"IAB13-2",56:"IAB19-30",57:"IAB19-30",58:"IAB7-39",59:"IAB22-1",60:"IAB7-39",61:"IAB21-3",62:"IAB5-1",63:"IAB12-3",64:"IAB20-18",65:"IAB11-2",66:"IAB17-18",67:"IAB9-9",68:"IAB9-5",69:"IAB7-44",71:"IAB22-3",73:"IAB19-30",74:"IAB8-5",78:"IAB22-1",85:"IAB12-2",86:"IAB22-3",87:"IAB11-3",112:"IAB7-32",113:"IAB7-32",114:"IAB7-32",115:"IAB7-32",118:"IAB9-5",119:"IAB9-5",120:"IAB9-5",121:"IAB9-5",122:"IAB9-5",123:"IAB9-5",124:"IAB9-5",125:"IAB9-5",126:"IAB9-5",127:"IAB22-1",132:"IAB1-2",133:"IAB19-30",137:"IAB3-9",138:"IAB19-3",140:"IAB2-3",141:"IAB2-1",142:"IAB2-3",143:"IAB17-13",166:"IAB11-4",175:"IAB3-1",176:"IAB13-4",182:"IAB8-9",183:"IAB3-5"}}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[7109],{965(e,t,n){n.d(t,{c5:()=>i});var r=n(4705),c=n(5555);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){(0,r.A)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const o=0;function i(e){let{apiName:t,apiVersion:n,apiArgs:r=["command","callback","parameter","version"],callbackArgs:a=["returnValue","success"],mode:i=o}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;const u={},f="".concat(t,"Call"),p="".concat(t,"Return");function b(e){var t;const n="string"==typeof e.data&&e.data.includes(p)?JSON.parse(e.data):e.data;if(null!=n&&null!==(t=n[p])&&void 0!==t&&t.callId){const e=n[p];u.hasOwnProperty(e.callId)&&u[e.callId](...a.map(t=>e[t]))}}const[d,O]=function(){let e,n=s,r=!1;for(;null!=n;){try{if("function"==typeof n[t]){e=n,r=!0;break}}catch(e){}try{if(n.frames["".concat(t,"Locator")]){e=n;break}}catch(e){}if(n===s.top)break;n=n.parent}return[e,r]}();if(!d)return;function v(e){return e=Object.assign({version:n},e),r.map(t=>[t,e[t]])}function g(e,t,n,r){const c="function"==typeof e;return function(a,l){if(r&&r(),1!==i){(null==l||l?t:n)(c?void 0:a)}c&&e.apply(this,arguments)}}let k;return O?k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new c.k((n,r)=>{const c=d[t](...v(l(l({},e),{},{callback:e.callback||2===i?g(e.callback,n,r):void 0})).map(e=>{let[t,n]=e;return n}));(1===i||null==e.callback&&i===o)&&n(c)})}:(s.addEventListener("message",b,!1),k=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new c.k((n,r)=>{const c=Math.random().toString(),a={[f]:l(l({},Object.fromEntries(v(e).filter(e=>{let[t]=e;return"callback"!==t}))),{},{callId:c})};u[c]=g(null==e?void 0:e.callback,n,r,(t||null==(null==e?void 0:e.callback))&&(()=>{delete u[c]})),d.postMessage(a,"*"),1===i&&n()})}),Object.assign(k,{isDirect:O,close(){!O&&s.removeEventListener("message",b)}})}}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[10],{3806(n,e,a){a.d(e,{R:()=>t});var i=a(6894),r=a(1069);function t(n,e,a){return(0,i.Ak)(n,function(n,i){var t;t=function(e,a){if(a){let n=r.JE;e&&(n=r.vV,a="".concat(a," Canceling auction as per consentManagement config."));for(var t=arguments.length,o=new Array(t>2?t-2:0),l=2;l<t;l++)o[l-2]=arguments[l];n(a,...o)}e?(n.stopTiming(),"function"==typeof i.bidsBackHandler?i.bidsBackHandler():(0,r.vV)("Error executing bidsBackHandler")):n.call(this,i)},e()?((0,r.fH)("User consent information already known.  Pulling internally stored information..."),t(!1)):a(t)})}}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[8498],{9766(e,t,n){n.d(t,{T:()=>f,A:()=>m});const r=new WeakMap;var i=n(1069),s=n(433),o=n(1371);var a=n(3895);var d=n(5561);var p=n(1e3),u=n(3858);const c={[p.S3]:{fpd:{priority:99,fn(e,t){(0,i.D9)(e,t.ortb2)}},onlyOneClient:{priority:-99,fn:(0,u.i8)("ORTB request")},props:{fn(e,t){Object.assign(e,{id:e.id||(0,i.lk)(),test:e.test||0});const n=parseInt(t.timeout,10);isNaN(n)||(e.tmax=n)}}},[p.Tb]:{fpd:{priority:99,fn(e,t){(0,i.D9)(e,t.ortb2Imp)}},id:{fn(e,t){e.id=t.bidId}},banner:{fn:function(e,t,n){if(n.mediaType&&n.mediaType!==o.D4)return;const r=(0,s.A)(t,"mediaTypes.banner");if(r){const t={topframe:!0===(0,i.al)()?0:1};r.sizes&&(t.format=(0,i.y$)(r.sizes).map(i.cf)),r.hasOwnProperty("pos")&&(t.pos=r.pos),e.banner=(0,i.D9)(t,e.banner)}}},pbadslot:{fn(e){var t;const n=null===(t=e.ext)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.pbadslot;var r;n&&"string"==typeof n||(null===(r=e.ext)||void 0===r||null===(r=r.data)||void 0===r||delete r.pbadslot)}}},[p.WR]:{mediaType:{priority:99,fn:d.K},banner:{fn:function(){let{createPixel:e=e=>(0,i.Tz)(decodeURIComponent(e),i.Bk)}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,n){t.mediaType===o.D4&&(n.adm&&n.nurl?(t.ad=n.adm,t.ad+=e(n.nurl)):n.adm?t.ad=n.adm:n.nurl&&(t.adUrl=n.nurl))}}()},props:{fn(e,t,n){var r,i;Object.entries({requestId:null===(r=n.bidRequest)||void 0===r?void 0:r.bidId,seatBidId:t.id,cpm:t.price,currency:n.ortbResponse.cur||n.currency,width:t.w,height:t.h,dealId:t.dealid,creative_id:t.crid,creativeId:t.crid,burl:t.burl,ttl:t.exp||n.ttl,netRevenue:n.netRevenue}).filter(e=>{let[t,n]=e;return void 0!==n}).forEach(t=>{let[n,r]=t;return e[n]=r}),e.meta||(e.meta={}),t.adomain&&(e.meta.advertiserDomains=t.adomain),null!==(i=t.ext)&&void 0!==i&&i.dsa&&(e.meta.dsa=t.ext.dsa),t.cat&&(e.meta.primaryCatId=t.cat[0],e.meta.secondaryCatIds=t.cat.slice(1)),t.attr&&(e.meta.attr=t.attr)}}}};c[p.Tb].native={fn:function(e,t,n){if(n.mediaType&&n.mediaType!==o.s6)return;let r=t.nativeOrtbRequest;var s;r&&(r=Object.assign({},n.nativeRequest,r),null!==(s=r.assets)&&void 0!==s&&s.length?e.native=(0,i.D9)({},{request:JSON.stringify(r),ver:r.ver},e.native):(0,i.JE)("mediaTypes.native is set, but no assets were specified. Native request skipped.",t))}},c[p.WR].native={fn:function(e,t){if(e.mediaType===o.s6){let n;if(n="string"==typeof t.adm?JSON.parse(t.adm):t.adm,!(0,i.Qd)(n)||!Array.isArray(n.assets))throw new Error("ORTB native response contained no assets");e.native={ortb:n}}}},c[p.Tb].video={fn:function(e,t,n){if(n.mediaType&&n.mediaType!==o.G_)return;const r=(0,s.A)(t,"mediaTypes.video");if(!(0,i.Im)(r)){const t=Object.fromEntries(Object.entries(r).filter(e=>{let[t]=e;return a.Zy.has(t)}));if(r.playerSize){const e=(0,i.y$)(r.playerSize).map(i.cf);e.length>1&&(0,i.JE)("video request specifies more than one playerSize; all but the first will be ignored"),Object.assign(t,e[0])}e.video=(0,i.D9)(t,e.video)}}},c[p.WR].video={fn:function(e,t,n){e.mediaType===o.G_&&((0,s.A)(n.imp,"video.w")&&(0,s.A)(n.imp,"video.h")&&([e.playerWidth,e.playerHeight]=[n.imp.video.w,n.imp.video.h]),t.adm&&(e.vastXml=t.adm),t.nurl&&(e.vastUrl=t.nurl))}};var l=n(9466);function m(){let{context:e={},processors:t=f,overrides:n={},imp:s,request:o,bidResponse:a,response:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const u=new WeakMap;function c(e,i,s,o){let a;return function(){return null==a&&(a=function(){let a=s.bind(this,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!r.has(e)){const t=Object.entries(e);t.sort((e,t)=>(e=e[1].priority||0)===(t=t[1].priority||0)?0:e>t?-1:1),r.set(e,t.map(e=>{let[t,n]=e;return[t,n.fn]}))}const n=r.get(e).filter(e=>{let[n]=e;return!t.hasOwnProperty(n)||t[n]}).map(function(e){let[n,r]=e;return t.hasOwnProperty(n)?t[n].bind(this,r):r});return function(){const e=Array.from(arguments);n.forEach(t=>{t.apply(this,e)})}}(t()[e]||{},n[e]||{}));return i&&(a=i.bind(this,a)),function(){try{return a.apply(this,arguments)}catch(e){o.call(this,e,...arguments)}}}()),a.apply(this,arguments)}}const l=c(p.Tb,s,function(e,t,n){const r={};return e(r,t,n),r},function(e,t,n){(0,i.vV)("Error while converting bidRequest to ORTB imp; request skipped.",{error:e,bidRequest:t,context:n})}),m=c(p.S3,o,function(e,t,n,r){const i={imp:t};return e(i,n,r),i},function(e,t,n,r){throw(0,i.vV)("Error while converting to ORTB request",{error:e,imps:t,bidderRequest:n,context:r}),e}),b=c(p.WR,a,function(e,t,n){const r={};return e(r,t,n),r},function(e,t,n){(0,i.vV)("Error while converting ORTB seatbid.bid to bidResponse; bid skipped.",{error:e,bid:t,context:n})}),v=c(p.Cf,d,function(e,t,n,r){const i={bids:t};return e(i,n,r),i},function(e,t,n,r){throw(0,i.vV)("Error while converting from ORTB response",{error:e,bidResponses:t,ortbResponse:n,context:r}),e});return{toORTB(t){let{bidderRequest:n,bidRequests:r,context:s={}}=t;r=r||n.bids;const o={req:Object.assign({bidRequests:r},e,s),imp:{}};o.req.impContext=o.imp;const a=r.map(t=>{const r=Object.assign({bidderRequest:n,reqContext:o.req},e,s),a=l(t,r);if(null!=a){if(a.hasOwnProperty("id"))return Object.assign(r,{bidRequest:t,imp:a}),o.imp[a.id]=r,a;(0,i.vV)("Converted ORTB imp does not specify an id, ignoring bid request",t,a)}}).filter(Boolean),d=m(a,n,o.req);return o.req.bidderRequest=n,null!=d&&u.set(d,o),d},fromORTB(e){let{request:t,response:n}=e;const r=u.get(t);if(null==r)throw new Error("ortbRequest passed to `fromORTB` must be the same object returned by `toORTB`");function s(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign(e,{ortbRequest:t},n)}const o=Object.fromEntries((t.imp||[]).map(e=>[e.id,e])),a=(n.seatbid||[]).flatMap(e=>(e.bid||[]).map(t=>{if(o.hasOwnProperty(t.impid)&&r.imp.hasOwnProperty(t.impid))return b(t,s(r.imp[t.impid],{imp:o[t.impid],seatbid:e,ortbResponse:n}));(0,i.vV)("ORTB response seatbid[].bid[].impid does not match any imp in request; ignoring bid",t)})).filter(Boolean);return v(a,n,s(r.req))}}}const f=(0,i.Bj)(()=>(0,l.U)(c,(0,p.yB)(p.qN)))},9466(e,t,n){n.d(t,{U:()=>i});var r=n(1e3);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const s=t.shift(),o=t.length>1?i(...t):t[0];return Object.fromEntries(r.zt.map(e=>[e,Object.assign({},s[e],o[e])]))}},5561(e,t,n){n.d(t,{K:()=>s,X:()=>i});var r=n(1371);const i={1:r.D4,2:r.G_,4:r.s6};function s(e,t,n){if(e.mediaType)return;const r=n.mediaType;if(!r&&!i.hasOwnProperty(t.mtype))throw new Error("Cannot determine mediaType for response");e.mediaType=r||i[t.mtype]}}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[5889],{4406(e,n,t){t.d(n,{FE:()=>c});var r=t(1069),s=t(433),u=t(3172);const o=Object.freeze([...["device.sua","source.schain","regs.gdpr","regs.us_privacy","regs.gpp","regs.gpp_sid","user.consent","user.eids"].map(e=>function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e,n)=>"".concat(e,".ext.").concat(n);const[t,r]=function(e){const n=e.split(".");return[n.slice(0,n.length-1).join("."),n[n.length-1]]}(e);return n=n(t,r),e=>{const o=(0,s.A)(e,t);if(null!=(null==o?void 0:o[r]))return(0,u.J)(e,n,o[r]),()=>delete o[r]}}(e)),...["app","content","site","user"].map(function(e){return n=>{var t;const r=null===(t=n[e])||void 0===t?void 0:t.kwarray;if(null!=r){let t=(n[e].keywords||"").split(",");return Array.isArray(r)&&t.push(...r),n[e].keywords=t.join(","),()=>delete n[e].kwarray}}})]);function c(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return function(t){return n.forEach(n=>{try{const r=n(t);"function"==typeof r&&e&&r()}catch(e){(0,r.vV)("Error translating request to ORTB 2.5",e)}}),t}}c()}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[3005],{1252(t,e,n){n.d(e,{eu:()=>i});var u=n(3858),l=n(1069),r=n(433);const a=["IAB_AUDIENCE_1_1","IAB_CONTENT_2_2"];function i(t){return Object.entries({[a[0]]:o(t,["user.data"],4),[a[1]]:o(t,u.Dy.map(t=>"".concat(t,".content.data")),6)}).map(t=>{let[e,n]=t;return n.length?{taxonomy:e,values:n}:null}).filter(t=>t)}function o(t,e,n){return e.flatMap(e=>(0,r.A)(t,e)||[]).filter(t=>{var e;return(null===(e=t.ext)||void 0===e?void 0:e.segtax)===n}).flatMap(t=>{var e;return null===(e=t.segment)||void 0===e?void 0:e.map(t=>t.id)}).filter(t=>t).filter(l.hj)}}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[7650],{5246(t,n,e){e.d(n,{Mu:()=>o,P8:()=>p,QS:()=>d});var s=e(6916);const o={env:"vp",gdfp_req:1,output:"vast",unviewed_position_start:1},p={protocol:"https",host:"securepubads.g.doubleclick.net",pathname:"/gampad/ads"};function d(){const t=s.mW.getConsentData(),n={};return t&&("boolean"==typeof t.gdprApplies&&(n.gdpr=Number(t.gdprApplies)),t.consentString&&(n.gdpr_consent=t.consentString),t.addtlConsent&&(n.addtl_consent=t.addtlConsent)),n}}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[7606],{7194(n,e,t){t.d(e,{$:()=>l});var u=t(6881);const l=()=>function(n){const e=new WeakMap;return function(t){let u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const l=n(t);if(null!=l)return e.has(l)||e.set(l,u),e.get(l)}}(n=>u.n.index.getAuction({auctionId:n}))}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[1225],{6743(n,t,e){e.d(t,{x4:()=>h});var l=e(7873),u=e(2713);function r(n,t,e){let u=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(t===e)return n;let r=n;try{r=(0,l.m)().convertCurrency(n,t,e)}catch(n){if(!u)throw n}return r}function h(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n=>[n.cpm,n.currency],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;return function(l,u){return null==n&&(n=u),e(l,u,n,t)}}();return(0,u.NV)(e=>t.apply(null,n(e)))}}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[5881],{6318(e,n,t){t.d(n,{Qo:()=>h});var r=t(5139),o=t(6811),l=t(6953),c=t(1069),i=t(433),u=t(3172);function s(e){return Object.assign({wp:!0,run(e,n,t,r,o){const s=t&&t.hasOwnProperty(r),f=s?t[r]:void 0,h=s&&null!=f&&"object"==typeof f?(0,c.Go)(f):f;return function(){const t=null==n?e:(0,i.A)(e,n),a=t&&(0,l.$V)(t[r]),d=a?t[r]:void 0;!s&&a&&o()?delete t[r]:s===a&&d===f&&(0,c.bD)(d,h)||!o()||(0,u.J)(e,(null==n?[]:[n]).concat(r).join("."),h)}}},e)}const f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.io;return function(e){const n={},t=[];e.forEach(e=>{e.wp&&t.push(e),e.get&&e.paths.forEach(t=>{let r=n;t.split(".").forEach(e=>{r.children=r.children||{},r.children[e]=r.children[e]||{},r=r.children[e]}),r.rule=e})});const r=(0,l.nl)(t);function o(e,n,t){return new Proxy(e,{get(e,r,c){const i=Reflect.get(e,r,c);if(n.hasOwnProperty(r)){const{children:e,rule:c}=n[r];if(e&&null!=i&&"object"==typeof i)return o(i,e,t);if(c&&(0,l.$V)(i)&&t(c))return c.get(i)}return i}})}return function(e){const t={};for(var c=arguments.length,i=new Array(c>1?c-1:0),u=1;u<c;u++)i[u-1]=arguments[u];return{obj:o(e,n.children||{},(0,l.uD)(t,...i)),verify:(s=r(t,e,...i),function(){s.forEach(e=>e())})};var s}}((0,l.ZP)(e).concat(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.io;return[{name:o.yl,paths:l.Vx,applies:(0,l.p4)(o.yl,e)},{name:o.qX,paths:l.l7,applies:(0,l.p4)(o.qX,e)}].map(s)}(e)))}();const h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;return function(n,t){n.global=n.global||{},n.bidder=n.bidder||{};const r=new Set(Object.keys(n.bidder)),o=[];function l(n){const r=e(n,t);return o.push(r.verify),r.obj}const i={global:l(n.global),bidder:Object.fromEntries(Object.entries(n.bidder).map(e=>{let[n,t]=e;return[n,l(t)]}))};return{obj:i,verify(){Object.entries(i.bidder).filter(e=>{let[n]=e;return!r.has(n)}).forEach(r=>{let[o,l]=r;const i={},u=e(i,t);(0,c.D9)(u.obj,l),u.verify(),n.bidder[o]=i}),o.forEach(e=>e())}}}}()}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[7618],{7967(e,i,d){d.d(i,{m:()=>g});var t=d(9466),n=d(1e3),r=d(433),a=d(1069),o=d(1371),s=d(5561);const c={[o.D4]:"banner",[o.s6]:"native",[o.G_]:"video"};var b=d(1445),l=d(3272),p=d(3172);var v=d(7873);const u={[n.S3]:{extPrebid:{fn:function(e,i){var d;(0,p.J)(e,"ext.prebid",(0,a.D9)({auctiontimestamp:i.auctionStart,targeting:{includewinners:!0,includebidderkeys:!1}},null===(d=e.ext)||void 0===d?void 0:d.prebid)),l.$W.getConfig("debug")&&(e.ext.prebid.debug=!0)}},extPrebidChannel:{fn:function(e){var i;(0,p.J)(e,"ext.prebid.channel",Object.assign({name:"pbjs",version:(0,v.m)().version},null===(i=e.ext)||void 0===i||null===(i=i.prebid)||void 0===i?void 0:i.channel))}},extPrebidAliases:{fn:function(e,i,d){let{am:t=b.Ay}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(t.aliasRegistry[i.bidderCode]){const d=t.bidderRegistry[i.bidderCode];if(!d||!d.getSpec().skipPbsAliasing){var n;(0,p.J)(e,"ext.prebid.aliases.".concat(i.bidderCode),t.aliasRegistry[i.bidderCode]);const r=l.$W.getConfig("gvlMapping.".concat(i.bidderCode))||(null==d||null===(n=d.getSpec)||void 0===n?void 0:n.call(d).gvlid);r&&(0,p.J)(e,"ext.prebid.aliasgvlids.".concat(i.bidderCode),r)}}}}},[n.Tb]:{params:{fn:function(e,i){let d=i.params;d&&(0,p.J)(e,"ext.prebid.bidder.".concat(i.bidder),d)}},adUnitCode:{fn:function(e,i){const d=i.adUnitCode;d&&(0,p.J)(e,"ext.prebid.adunitcode",d)}}},[n.WR]:{mediaType:{fn:function(e,i,d){let t=d.mediaType;var n;t||(t=s.X.hasOwnProperty(i.mtype)?s.X[i.mtype]:null===(n=i.ext)||void 0===n||null===(n=n.prebid)||void 0===n?void 0:n.type,c.hasOwnProperty(t)||(t=o.D4)),e.mediaType=t},priority:99},videoCache:{fn:function(e,i){if(e.mediaType===o.G_){let{cacheId:d,url:t}=(0,r.A)(i,"ext.prebid.cache.vastXml")||{};if(!d||!t){const{hb_uuid:e,hb_cache_host:n,hb_cache_path:a}=(0,r.A)(i,"ext.prebid.targeting")||{};e&&n&&a&&(d=e,t="https://".concat(n).concat(a,"?uuid=").concat(e))}d&&t&&Object.assign(e,{videoCacheKey:d,vastUrl:t})}},priority:-10},bidderCode:{fn(e,i,d){var t;e.bidderCode=d.seatbid.seat,e.adapterCode=(0,r.A)(i,"ext.prebid.meta.adaptercode")||(null===(t=d.bidRequest)||void 0===t?void 0:t.bidder)||e.bidderCode}},pbsBidId:{fn(e,i){const d=(0,r.A)(i,"ext.prebid.bidid");(0,a.O8)(d)&&(e.pbsBidId=d)}},adserverTargeting:{fn(e,i){const d=(0,r.A)(i,"ext.prebid.targeting");(0,a.Qd)(d)&&(e.adserverTargeting=d)}},extPrebidMeta:{fn(e,i){e.meta=(0,a.D9)({},(0,r.A)(i,"ext.prebid.meta"),e.meta)}},pbsWurl:{fn(e,i){const d=(0,r.A)(i,"ext.prebid.events.win");(0,a.O8)(d)&&(e.pbsWurl=d)}}},[n.Cf]:{serverSideStats:{fn(e,i,d){Object.entries({errors:"serverErrors",responsetimemillis:"serverResponseTimeMs"}).forEach(e=>{let[t,n]=e;const a=(0,r.A)(i,"ext.".concat(t,".").concat(d.bidderRequest.bidderCode));a&&(d.bidderRequest[n]=a,d.bidRequests.forEach(e=>e[n]=a))})}}}};var f=d(9766);const g=(0,a.Bj)(()=>(0,t.U)((0,f.T)(),u,(0,n.yB)(n.e4)))}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[6550],{8702(n,p,e){function t(n,p,e){let t={};var i;(n&&("boolean"==typeof n.gdprApplies&&(t.gdpr=Number(n.gdprApplies)),"string"==typeof n.consentString&&(t.gdpr_consent=n.consentString)),p&&(t.us_privacy=encodeURIComponent(p)),null!=e&&e.gppString)&&(t.gpp=e.gppString,t.gpp_sid=null===(i=e.applicableSections)||void 0===i?void 0:i.toString());return t}e.d(p,{d:()=>t})}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[467],{6036(e,n,o){o.d(n,{M:()=>r});var s=o(1371),u=o(1069),c=o(433);function r(e,n,o){const r=[];return(0,u.fp)(e.getFloor)&&((0,c.A)(e,"mediaTypes.".concat(o,".").concat(o===s.G_?"playerSize":"sizes"))||[]).forEach(s=>{const u=e.getFloor({currency:n||"USD",mediaType:o,size:s}).floor;r.push(isNaN(u)?0:u)}),r.length?Math.min(...r):0}}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[817],{848(n,e,u){function o(n,e){if(null==n||!n.nodes)return null;return"".concat(n.ver,",").concat(n.complete,"!")+n.nodes.map(n=>e.map(e=>n[e]?encodeURIComponent(n[e]).replace(/!/g,"%21"):"").join(",")).join("!")}u.d(e,{v:()=>o})}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[9498],{11(r,e,a){a.d(e,{Z:()=>y});var i=a(1069);const y={mimes:r=>Array.isArray(r)&&r.length>0&&r.every(r=>"string"==typeof r),minduration:r=>(0,i.Fq)(r),maxduration:r=>(0,i.Fq)(r),protocols:r=>Array.isArray(r)&&r.every(r=>r>=1&&r<=10),w:r=>(0,i.Fq)(r),h:r=>(0,i.Fq)(r),startdelay:r=>(0,i.Fq)(r),linearity:r=>-1!==[1,2].indexOf(r),skip:r=>-1!==[0,1].indexOf(r),skipmin:r=>(0,i.Fq)(r),skipafter:r=>(0,i.Fq)(r),sequence:r=>(0,i.Fq)(r),battr:r=>Array.isArray(r)&&r.every(r=>r>=1&&r<=17),maxextended:r=>(0,i.Fq)(r),minbitrate:r=>(0,i.Fq)(r),maxbitrate:r=>(0,i.Fq)(r),boxingallowed:r=>-1!==[0,1].indexOf(r),playbackmethod:r=>Array.isArray(r)&&r.every(r=>r>=1&&r<=6),playbackend:r=>-1!==[1,2,3].indexOf(r),api:r=>Array.isArray(r)&&r.every(r=>r>=1&&r<=6)}}}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[9789],{5665(e,t,r){var n=r(4705),i=r(7873),a=r(1069),d=r(433),o=r(3172),s=r(1371),c=r(9115),u=r(5901),p=r(3272),l=r(4042),m=r(4190);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){(0,n.A)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const g=["pos","context","placement","plcmt","api","mimes","protocols","playbackmethod","minduration","maxduration","startdelay","linearity","skip","skipmin","skipafter","minbitrate","maxbitrate","delivery","playbackend","boxingallowed"],v=["battr","pos"],y=["battr","api"],h=["pos"],x=["btype","battr","pos","api"],O={1:"iframe",2:"image"},I="__mf",_="b"+I,k="v"+I,S="n"+I,w=1,J=2,j=4,q={code:"adkernel",gvlid:14,aliases:[{code:"headbidding"},{code:"adsolut"},{code:"oftmediahb"},{code:"audiencemedia"},{code:"waardex_ak"},{code:"roqoon"},{code:"adbite"},{code:"houseofpubs"},{code:"torchad"},{code:"stringads"},{code:"bcm"},{code:"engageadx"},{code:"converge",gvlid:248},{code:"adomega"},{code:"denakop"},{code:"rtbanalytica"},{code:"unibots"},{code:"ergadx"},{code:"turktelekom"},{code:"felixads"},{code:"motionspots"},{code:"sonic_twist"},{code:"displayioads"},{code:"rtbdemand_com"},{code:"bidbuddy"},{code:"didnadisplay"},{code:"qortex"},{code:"adpluto"},{code:"headbidder"},{code:"digiad"},{code:"monetix"},{code:"hyperbrainz"},{code:"voisetech"},{code:"global_sun"},{code:"rxnetwork"}],supportedMediaTypes:[s.D4,s.G_,s.s6],isBidRequestValid:function(e){return"params"in e&&void 0!==e.params.host&&"zoneId"in e.params&&!isNaN(Number(e.params.zoneId))&&e.params.zoneId>0&&e.mediaTypes&&(e.mediaTypes.banner||e.mediaTypes.video||e.mediaTypes.native&&(N((t=e.mediaTypes.native).image)&&N(t.icon)&&!(0,d.A)(t,"privacyLink.required")&&!(0,d.A)(t,"privacyIcon.required")));var t},buildRequests:function(e,t){let r=function(e,t){var r;let n=t&&0===(null===(r=t.page)||void 0===r?void 0:r.indexOf("https:"));return Object.values(e.map(e=>function(e,t){let r={id:e.bidId,tagid:e.adUnitCode};t&&(r.secure=1);var n=[];let i,d=e.mediaTypes,o=~~!(null==d||!d.banner)+~~!(null==d||!d.video)+~~!(null==d||!d.native)>1,c=[];if(null!=d&&d.banner){o?(i=f({},r),i.id=r.id+_):i=r,n=(0,l.u)(e);let t=d.banner;i.banner=f(f(f({},C(e.ortb2Imp,x)),C(t,h)),{},{format:n.map(e=>(0,a.nX)(e)),topframe:0}),z(i,e,n,o?"*":s.D4),c.push(i)}if(null!=d&&d.video){o?(i=f({},r),i.id=i.id+k):i=r;let t=d.video;i.video=f(f({},C(e.ortb2Imp,v)),C(t,g)),t.playerSize?(n=t.playerSize[0],i.video=Object.assign(i.video,(0,a.nX)(n)||{})):t.w&&t.h&&(i.video.w=t.w,i.video.h=t.h),z(i,e,n,o?"*":s.G_),c.push(i)}null!=d&&d.native&&(o?(i=f({},r),i.id=i.id+S):i=r,i.native=f(f({},C(e.ortb2Imp,y)),{},{request:JSON.stringify(e.nativeOrtbRequest)}),z(i,e,n,o?"*":s.s6),c.push(i));return c}(e,n)).reduce((t,r,n)=>{let i=e[n],{zoneId:a,host:d}=i.params,o="".concat(d,"_").concat(a);return t[o]=t[o]||{host:d,zoneId:a,imps:[]},t[o].imps.push(...r),t},{}))}(e,t.refererInfo),n=[],i=e[0].schain;return(0,a.bu)(r,e=>{let{host:r,zoneId:s,imps:c}=e;const u=function(e,t,r){let n=t.ortb2||{},i=(0,a.D9)(function(e,t,r){let n={id:e.bidderRequestId,imp:t,at:1,tmax:parseInt(e.timeout)};(0,a.Im)(r.bcat)||(n.bcat=r.bcat);(0,a.Im)(r.badv)||(n.badv=r.badv);return n}(t,e,n),function(e){let t=(0,a.D9)({ip:"caller",ipv6:"caller",ua:"caller",js:1,language:T()},e.device||{});(0,a.l9)()&&(t.dnt=1);return{device:t}}(n),function(e,t){let{refererInfo:r}=e,n=p.$W.getConfig("app");return(0,a.Im)(n)?{site:E(r,t)}:{app:n}}(t,n),function(e,t){let{gdprConsent:r}=e,n=t.user||{};r&&void 0!==r.consentString&&(0,o.J)(n,"ext.consent",r.consentString);let i=function(e){let t=(0,d.A)(e,"bids.0.userIdAsEids");if((0,a.cy)(t))return t}(e);i&&(0,o.J)(n,"ext.eids",i);if(!(0,a.Im)(n))return{user:n}}(t,n),function(e){let{gdprConsent:t,uspConsent:r,gppConsent:n}=e,i={};t&&void 0!==t.gdprApplies&&(0,o.J)(i,"regs.ext.gdpr",~~t.gdprApplies);n&&((0,o.J)(i,"regs.gpp",n.gppString),(0,o.J)(i,"regs.gpp_sid",n.applicableSections));r&&(0,o.J)(i,"regs.ext.us_privacy",r);p.$W.getConfig("coppa")&&(0,o.J)(i,"regs.coppa",1);if(!(0,a.Im)(i))return i}(t),function(e){let{bidderCode:t}=e,r=function(e){if(!p.$W.getConfig("userSync.syncEnabled"))return;let t=p.$W.getConfig("userSync.filterSettings");if(D(t.all,e)||D(t.iframe,e))return 1;if(D(t.image,e))return 2}(t);if(r){let e={};return(0,o.J)(e,"ext.adk_usersync",r),e}}(t));r&&(0,o.J)(i,"source.ext.schain",r);return i}(c,t,i);n.push({method:"POST",url:"https://".concat(r,"/hb?zone=").concat(s,"&v=").concat("1.7"),data:JSON.stringify(u)})}),n},interpretResponse:function(e,t){let r=e.body;if(!r.seatbid)return[];let n=JSON.parse(t.data);return r.seatbid.forEach(e=>e.bid.forEach(t=>t.seat=e.seat)),r.seatbid.map(e=>e.bid).reduce((e,t)=>e.concat(t),[]).map(e=>{let t=(0,u.I6)(n.imp,t=>t.id===e.impid),i={requestId:e.impid,cpm:e.price,creativeId:e.crid,currency:r.cur||"USD",ttl:360,netRevenue:!0,meta:{demandSource:e.seat}};var d;return i.requestId.endsWith(I)&&(i.requestId=(d=i.requestId).substr(0,d.length-4-1)),e.mtype===w?(i.mediaType=s.D4,i.width=e.w,i.height=e.h,i.ad=function(e){let t=e.adm;"nurl"in e&&(t+=(0,a.Tz)("".concat(e.nurl,"&px=1")));return t}(e)):e.mtype===J?(i.mediaType=s.G_,i.vastUrl=e.nurl,i.width=t.video.w,i.height=t.video.h):e.mtype===j&&(i.mediaType=s.s6,i.native={ortb:P(e.adm)}),(0,a.O8)(e.dealid)&&(i.dealId=e.dealid),(0,a.cy)(e.adomain)&&(0,o.J)(i,"meta.advertiserDomains",e.adomain),(0,a.cy)(e.cat)&&(0,o.J)(i,"meta.secondaryCatIds",e.cat),(0,a.Qd)(e.ext)&&((0,a.Et)(e.ext.advertiser_id)&&(0,o.J)(i,"meta.advertiserId",e.ext.advertiser_id),(0,a.O8)(e.ext.advertiser_name)&&(0,o.J)(i,"meta.advertiserName",e.ext.advertiser_name),(0,a.O8)(e.ext.agency_name)&&(0,o.J)(i,"meta.agencyName",e.ext.agency_name)),i})},getUserSyncs:function(e,t){return t&&0!==t.length&&(e.iframeEnabled||e.pixelEnabled)?t.filter(e=>e.body&&e.body.ext&&e.body.ext.adk_usersync).map(e=>e.body.ext.adk_usersync).reduce((e,t)=>e.concat(t),[]).map(e=>{let{url:t,type:r}=e;return{type:O[r],url:t}}):[]}};function z(e,t,r,n){let i=(0,m.M)(t,n,r);i&&(e.bidfloor=i)}function C(e,t){return void 0===e?{}:(0,a.SH)(e,t)}function D(e,t){if(!e)return!1;let r=(0,a.cy)(e.bidders)?e.bidders:[t],n="include"===e.filter;return(0,a.gR)(r,t)===n}function T(){const e=navigator.language?"language":"userLanguage";return navigator[e].split("-")[0]}function E(e,t){let r={domain:e.domain,page:e.page};return(0,a.D9)(r,t.site),null!=e.ref?r.ref=e.ref:delete r.ref,r}function N(e){return!e||(e.sizes?(0,a.Uu)(e.sizes,2):!(0,a.cy)(e.aspect_ratios)||e.aspect_ratios.length>0&&e.aspect_ratios[0].min_height&&e.aspect_ratios[0].min_width)}function P(e){let t=JSON.parse(e);return"native"in t&&(t=t.native),t}(0,c.a$)(q),(0,i.E)("adkernelBidAdapter")}},e=>{e.O(0,[802,1085,8139,1522],()=>{return t=5665,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[5369],{8835(e,t,n){var r=n(4705),i=n(7873),o=n(9115),s=n(1371),a=n(1069),l=n(433),u=n(3272),d=n(2938),c=n(8044);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,r.A)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const f=(0,d.vM)({bidderCode:"amx"}),b=/\.com?\.\w{2,4}$/,g=/^\s*<\??(?:vast|xml)/i,h="https://1x1.a-mo.net/",y=h+"hbx/",v=h+"e",O="__amuidpb";function w(e,t){return null==e?[]:e.map(t).reduce((e,t)=>null!=t&&e.concat(t),[])}function C(e){return null!=(t=e.adm)&&g.test(t)?s.G_:s.D4;var t}const A=(e,t)=>null==e||typeof e===t;function I(e){const t=e.hostname.split("."),n=t.slice(t.length-(b.test(e.hostname)?3:2)).join(".");return btoa(n).replace(/=+$/,"")}const S=encodeURIComponent;function T(){try{return f.getDataFromLocalStorage(O)}catch(e){return null}}function j(e){const t=[];return Object.keys(e||{}).forEach(n=>{t.push(S(n)+"="+S(String(e[n])))}),S(t.join("&"))}function D(e){const t={};return(0,a.bu)(e,e=>{t[e.bidId]=function(e){const t=(c=e.sizes,p=e.mediaTypes,c.concat((0,l.A)(p,"".concat(s.D4,".sizes"),[])||[]).concat((0,l.A)(p,"".concat(s.G_,".sizes"),[])||[]).sort((e,t)=>t[0]*t[1]-e[0]*e[1])[0]||[0,0]),n=e.mediaType===s.G_||s.G_ in e.mediaTypes,r=n||t[1]>100,i=(0,l.A)(e,"params.tagId"),o=null!=e.params&&"string"==typeof e.params.adUnitId&&""!==e.params.adUnitId?e.params.adUnitId:e.adUnitCode,a=[e.sizes,(0,l.A)(e,"mediaTypes.".concat(s.D4,".sizes"),[])||[],(0,l.A)(e,"mediaTypes.".concat(s.G_,".sizes"),[])||[]],u=(0,l.A)(e,"mediaTypes.".concat(s.G_),{})||{},d={au:o,av:r,vd:u,vr:n,ms:a,aw:t[0],ah:t[1],tf:0,sc:e.schain||{},f:x(k(e)),rtb:e.ortb2Imp};var c,p;"string"==typeof i&&i.length>0&&(d.i=i);return d}(e)}),t}const _=(e,t)=>(0,a.z$)("".concat(y,"g_").concat(e,"?").concat((0,a.eP)(m(m({},t),{},{ts:Date.now(),eid:(0,a.s0)()}))));function x(e){return"number"==typeof e&&isFinite(e)&&e>0?e:0}function k(e){if(!(0,a.fp)(e.getFloor))return(0,l.A)(e,"params.floor",0);try{return e.getFloor({currency:"USD",mediaType:"*",size:"*",bidRequest:e}).floor}catch(e){return(0,a.vV)("call to getFloor failed: ",e),0}}function P(e,t,n){return(0,l.A)(e,"refererInfo."+t,n)}function U(e,t){if(null==e)return!1;const n=e[t];return null!=n&&(!!("*"===n.bidders||(0,a.cy)(n.bidders)&&-1!==n.bidders.indexOf("amx"))&&(null==n.filter||"include"===n.filter))}function q(){const e=u.$W.getConfig("userSync");if(null==e)return{d:0,l:0,t:0,e:!0};const t={d:e.syncDelay,l:e.syncsPerBidder,t:0,e:e.syncEnabled};return U(e.filterSettings,"all")?(t.t=0,t):(U(e.filterSettings,"iframe")&&(t.t|=2),U(e.filterSettings,"image")&&(t.t|=1),t)}function R(e){var t,n;return null!=(null==e?void 0:e.gppConsent)?e.gppConsent:null!==(t=null==e||null===(n=e.ortb2)||void 0===n||null===(n=n.regs)||void 0===n?void 0:n.gpp)&&void 0!==t?t:{gppString:"",applicableSections:""}}function z(e){if(null==e.refererInfo)return{r:"",t:!1,c:"",l:0,s:[]};const t=e.refererInfo;return{r:t.topmostLocation,t:t.reachedTop,l:t.numIframes,s:t.stack,c:t.canonicalUrl}}const E={code:"amx",gvlid:737,supportedMediaTypes:[s.D4,s.G_],isBidRequestValid:e=>A((0,l.A)(e,"params.endpoint",null),"string")&&A((0,l.A)(e,"params.tagId",null),"string"),buildRequests(e,t){const n=(r=t,(0,a.Dl)((null===(i=r.refererInfo)||void 0===i?void 0:i.topmostLocation)||window.location.href));var r,i;const o=(0,l.A)(e[0],"params.tagId",null),s=(0,l.A)(e[0],"params.testMode",0),d=null!=e[0]?e[0]:{bidderRequestsCount:0,bidderWinsCount:0,bidRequestsCount:0};var c,p;return{data:{a:(0,a.lk)(),B:0,b:n.host,brc:d.bidderRequestsCount||0,bwc:d.bidderWinsCount||0,trc:d.bidRequestsCount||0,tm:(p=s,!0===p||1===p||"true"===p),V:"9.18.0",vg:"vuuklehb",i:s&&null!=o?o:I(n),l:{},f:.01,cv:"pba1.3.4",st:"prebid",h:screen.height,w:screen.width,gs:(0,l.A)(t,"gdprConsent.gdprApplies",""),gc:(0,l.A)(t,"gdprConsent.consentString",""),gpp:R(t),u:P(t,"page",n.href),do:P(t,"site",n.hostname),re:P(t,"ref"),am:T(),usp:t.uspConsent||"1---",smt:1,d:"",m:D(e),cpp:u.$W.getConfig("coppa")?1:0,fpd2:t.ortb2,tmax:t.timeout,amp:P(t,"isAmp",null),ri:z(t),sync:q(),eids:(c=e.reduce((e,t)=>(null==t||null==t.userIdAsEids||(0,a.bu)(t.userIdAsEids,t=>{null!=t&&(e[t.source]=t)}),e),{}),null!=Object.values?Object.values(c):Object.keys(c).map(e=>c[e]))},method:"POST",browsingTopics:!0,url:(0,l.A)(e[0],"params.endpoint","https://prebid.a-mo.net/a/c"),withCredentials:!0}},getUserSyncs(e,t,n,r,i){const o={gdpr_consent:S((null==n?void 0:n.consentString)||""),gdpr:S(null!=n&&n.gdprApplies?1:0),us_privacy:S(r||""),gpp:S((null==i?void 0:i.gppString)||""),gpp_sid:S((null==i?void 0:i.applicableSections)||"")},s={url:"https://prebid.a-mo.net/isyn?".concat((0,a.eP)(o)),type:"iframe"};if(null==t||0===t.length)return e.iframeEnabled?[s]:[];const l=[];let u=!1;return(0,a.bu)(t,function(t){let{body:n}=t;null!=n&&null!=n.p&&n.p.hreq&&(0,a.bu)(n.p.hreq,function(t){const n=-1!==t.indexOf("__st=iframe")?"iframe":"image";(e.iframeEnabled||"image"===n)&&(u=u||"iframe"===n||-1!==t.indexOf("cchain"),l.push({url:t,type:n}))})}),!u&&l.length<2&&l.push(s),l},interpretResponse(e,t){var n,r;const i=e.body;if(null==i||"string"==typeof i)return[];i.am&&"string"==typeof i.am&&function(e){try{f.setDataInLocalStorage(O,e)}catch(e){}}(i.am);const o=u.$W.getConfig("bidderSettings"),a=!!(null!==(n=null!==(r=null==o?void 0:o.amx)&&void 0!==r?r:null==o?void 0:o.standard)&&void 0!==n?n:{}).allowAlternateBidderCodes;return w(Object.keys(i.r),e=>w(i.r[e],n=>n.b.map(n=>{var r;const i=C(n),o=n.adm;if(null==o)return null;const l=function(e,t,n){if(null!=e.w&&e.w>1&&null!=e.h&&e.h>1)return[e.w,e.h];const r=t.m[n];return null==r?[0,0]:[r.aw,r.ah]}(n,t.data,e),u=i===s.D4?240:300,{bc:d,ds:c}=null!==(r=n.ext)&&void 0!==r?r:{};return m(m({},null!=d&&a?{bidderCode:d}:{}),{},{requestId:e,cpm:n.price,width:l[0],height:l[1],creativeId:n.crid,currency:"USD",netRevenue:!0,[i===s.G_?"vastXml":"ad"]:o,meta:m({advertiserDomains:n.adomain,mediaType:i},null!=c?{demandSource:c}:{}),mediaType:i,ttl:"number"==typeof n.exp?n.exp:u})})).filter(e=>null!=e))},onSetTargeting(e){null!=e&&_("pbst",{A:e.bidder,w:e.width,h:e.height,bid:e.adId,c1:e.mediaType,np:e.cpm,aud:e.requestId,a:e.adUnitCode,c2:j(e.adserverTargeting),cn3:e.timeToRespond})},onTimeout(e){if(null==e||!e.length)return;let t=null;const n=e.map(e=>{const n=e.params||{},r=function(e){return null==e.sizes||0===e.sizes.length?[0,0]:e.sizes[0]}(e),{domain:i,page:o,ref:s}=null!=e.ortb2&&null!=e.ortb2.site?e.ortb2.site:{};return null==t&&(t={do:i,u:o,U:T(),re:s,V:"9.18.0",vg:"vuuklehb"}),{A:e.bidder,mid:n.tagId,a:n.adunitId||e.adUnitCode,bid:e.bidId,n:"g_pbto",aud:e.transactionId,w:r[0],h:r[1],cn:e.timeout,cn2:e.bidderRequestsCount,cn3:e.bidderWinsCount}}),r=JSON.stringify({c:t,e:n});(0,c.hd)(v,{body:r,keepalive:!0,withCredentials:!0,method:"POST"}).catch(e=>{})},onBidWon(e){null!=e&&_("pbwin",{A:e.bidder,w:e.width,h:e.height,bid:e.adId,C:e.mediaType===s.D4?0:1,np:e.cpm,a:e.adUnitCode})}};(0,o.a$)(E),(0,i.E)("amxBidAdapter")}},e=>{e.O(0,[802,1085],()=>{return t=8835,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[6135],{5289(e,n,t){var a=t(7873),l=t(6916),r=t(8044),o=t(9214),s=t(7934),u=t(1069),c=t(433),i=t(2938),d=t(5569),p=t(2339);const g="amxId",v=g,m={method:"GET",withCredentials:!0,contentType:"text/plain"},f=(0,i.vM)({moduleName:g,moduleType:d.fW});const h={name:g,version:"2.0",gvlid:737,decode:e=>null!=e&&e.length>0?{[v]:e}:void 0,domainOverride:(0,p.w)(f,g),getId(e,n,t){if(!function(e){return!(null!=e.storage&&"number"==typeof e.storage.expires&&e.storage.expires>30&&((0,u.vV)("".concat(g,": storage.expires must be <= 30. ").concat(e.storage.expires," was provided")),1))}(e))return;const a=n||{gdprApplies:!1,consentString:""},o=(0,r.g4)(300),i=l.t6.getConsentData(),d=(0,s.EN)(),p={tagId:(0,c.A)(e,"params.tagId",""),ref:d.ref,u:d.location,tl:d.topmostLocation,nf:d.numIframes,rt:d.reachedTop,v:"9.18.0",av:"2.0",vg:"vuuklehb",us_privacy:i,am:f.localStorageIsEnabled()?f.getDataFromLocalStorage("__amuidpb"):null,gdpr:a.gdprApplies?1:0,gdpr_consent:a.consentString};return{callback:e=>o("https://id.a-mx.com/sync/",{error(n){(0,u.vV)("".concat(g," failed to load"),n),e(null)},success(n){if(null!=n&&n.length>0)try{const t=JSON.parse(n);return void function(e,n,t,a){null!=n.id&&n.id.length>0?a(n.id):null!=n.u&&0!==n.u.length?e(n.u,{error(e){(0,u.vV)("".concat(g," failed on ").concat(n.u),e),a(null)},success(e){if(null!=e&&e.length>0){const n=JSON.parse(e);if(null!=n.id)return void a(n.id)}(0,u.vV)("".concat(g," invalid value"),e),a(null)}},t,m):a(null)}(o,t,p,e)}catch(e){(0,u.vV)("".concat(g," invalid response"),n)}e(null)}},p,m)}},eids:{amxId:{source:"amxdt.net",atype:1}}};(0,o.bz)("userId",h),(0,a.E)("amxIdSystem")}},e=>{e.O(0,[802,1085,2764],()=>{return n=5289,e(e.s=n);var n});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[4599],{791(e,t,r){var i=r(7873),a=r(1069),s=r(433),o=r(5789),n=r(3272),d=r(9115),c=r(1371),p=r(5901),l=r(3895),u=r(2938),m=r(2693),g=r(2621),h=r(2449),_=r(4673),f=r(554),b=r(2349),y=r(5761),v=r(9906);const k="appnexus",w="https://ib.adnxs.com/ut/v3/prebid",I="https://ib.adnxs-simple.com/ut/v3/prebid",x=["id","minduration","maxduration","skippable","playback_method","frameworks","context","skipoffset"],C=["minduration","maxduration","skip","skipafter","playbackmethod","api","startdelay","placement","plcmt"],O=["age","externalUid","external_uid","segments","gender","dnt","language"],T=["geo","device_id"],U=["enabled","dongle","member_id","debug_timeout"],E={apn_debug_dongle:"dongle",apn_debug_member_id:"member_id",apn_debug_timeout:"debug_timeout"},S={playback_method:{unknown:0,auto_play_sound_on:1,auto_play_sound_off:2,click_to_play:3,mouse_over:4,auto_play_sound_unknown:5},context:{unknown:0,pre_roll:1,mid_roll:2,post_roll:3,outstream:4,"in-banner":5,"in-feed":6,interstitial:7,accompanying_content_pre_roll:8,accompanying_content_mid_roll:9,accompanying_content_post_roll:10}},A={body:"description",body2:"desc2",cta:"ctatext",image:{serverName:"main_image",requiredParams:{required:!0}},icon:{serverName:"icon",requiredParams:{required:!0}},sponsoredBy:"sponsored_by",privacyLink:"privacy_link",salePrice:"saleprice",displayUrl:"displayurl"},j="<script",D=/\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,R="trk.js",z=(0,u.vM)({bidderCode:k}),N=new Map([[1,"Mobile/Tablet - General"],[2,"Personal Computer"],[3,"Connected TV"],[4,"Phone"],[5,"Tablet"],[6,"Connected Device"],[7,"Set Top Box"],[8,"OOH Device"]]),q={code:k,gvlid:32,aliases:b.DX,supportedMediaTypes:[c.D4,c.G_,c.s6],isBidRequestValid:function(e){return!!(e.params.placementId||e.params.placement_id||e.params.member&&(e.params.invCode||e.params.inv_code))},buildRequests:function(e,t){var r,i,s;const o=(e=(0,h.Xj)(e)).map(G),d=(0,p.I6)(e,M);let c={};!0===n.$W.getConfig("coppa")&&(c={coppa:!0}),d&&Object.keys(d.params.user).filter(e=>(0,p.mK)(O,e)).forEach(e=>{let t=(0,b.vk)(e);if("segments"===e&&(0,a.cy)(d.params.user[e])){let r=[];d.params.user[e].forEach(e=>{(0,a.Et)(e)?r.push({id:e}):(0,a.Qd)(e)&&r.push(e)}),c[t]=r}else"segments"!==e&&(c[t]=d.params.user[e])});const l=(0,p.I6)(e,K);let u;l&&l.params&&l.params.app&&(u={},Object.keys(l.params.app).filter(e=>(0,p.mK)(T,e)).forEach(e=>u[e]=l.params.app[e]));const m=(0,p.I6)(e,V);let _;m&&m.params&&l.params.app&&l.params.app.id&&(_={appid:m.params.app.id});let k={},x={};const C=z.getCookie("apn_prebid_debug")||null;if(C)try{k=JSON.parse(C)}catch(e){(0,a.vV)("AppNexus Debug Auction Cookie Error:\n\n"+e)}else{Object.keys(E).forEach(e=>{let t=(0,a.Ez)(e);(0,a.O8)(t)&&""!==t&&(k[E[e]]=t,k.enabled=!0)}),k=(0,y.$)({member_id:"number",debug_timeout:"number"},k);const t=(0,p.I6)(e,$);t&&t.debug&&(k=t.debug)}k&&k.enabled&&Object.keys(k).filter(e=>(0,p.mK)(U,e)).forEach(e=>{x[e]=k[e]});const S=(0,p.I6)(e,B),A=S?parseInt(S.params.member,10):0,j=e[0].schain,D=(0,p.I6)(e,W),R={tags:[...o],user:c,sdk:{source:"pbjs",version:"9.18.0"},schain:j};D&&(R.iab_support={omidpn:"Appnexus",omidpv:"9.18.0"}),A>0&&(R.member_id=A),l&&(R.device=u),m&&(R.app=_),null!=t&&null!==(r=t.ortb2)&&void 0!==r&&r.device&&(R.device=R.device||{},(0,a.D9)(R.device,function(e){const t={useragent:e.ua,devicetype:N.get(e.devicetype),make:e.make,model:e.model,os:e.os,os_version:e.osv,w:e.w,h:e.h,ppi:e.ppi,pxratio:e.pxratio};return Object.keys(t).reduce((e,r)=>(t[r]&&(e[r]=t[r]),e),{})}(t.ortb2.device)));let q=(0,a.Go)(t&&t.ortb2),P=(0,a.Go)(n.$W.getConfig("appnexusAuctionKeywords"))||{},J=(0,f.QF)(q,P);if(J.length>0&&(R.keywords=J),n.$W.getConfig("adpod.brandCategoryExclusion")&&(R.brand_category_uniqueness=!0),x.enabled&&(R.debug=x,(0,a.fH)("AppNexus Debug Auction Settings:\n\n"+JSON.stringify(x,null,4))),t&&t.gdprConsent&&(R.gdpr_consent={consent_string:t.gdprConsent.consentString,consent_required:t.gdprConsent.gdprApplies},t.gdprConsent.addtlConsent&&-1!==t.gdprConsent.addtlConsent.indexOf("~"))){let e=t.gdprConsent.addtlConsent,r=e.substring(e.indexOf("~")+1);R.gdpr_consent.addtl_consent=r.split(".").map(e=>parseInt(e,10))}if(t&&t.uspConsent&&(R.us_privacy=t.uspConsent),null!=t&&t.gppConsent?R.privacy={gpp:t.gppConsent.gppString,gpp_sid:t.gppConsent.applicableSections}:null!=t&&null!==(i=t.ortb2)&&void 0!==i&&null!==(i=i.regs)&&void 0!==i&&i.gpp&&(R.privacy={gpp:t.ortb2.regs.gpp,gpp_sid:t.ortb2.regs.gpp_sid}),t&&t.refererInfo){let e={rd_ref:encodeURIComponent(t.refererInfo.topmostLocation),rd_top:t.refererInfo.reachedTop,rd_ifs:t.refererInfo.numIframes,rd_stk:t.refererInfo.stack.map(e=>encodeURIComponent(e)).join(",")},r=t.refererInfo.canonicalUrl;(0,a.O8)(r)&&""!==r&&(e.rd_can=r),R.referrer_detection=e}(0,p.I6)(e,L)&&e.filter(L).forEach(e=>{const t=function(e,t){const{durationRangeSec:r,requireExactDuration:i}=t.mediaTypes.video,a=function(e){const{adPodDurationSec:t,durationRangeSec:r,requireExactDuration:i}=e,a=Math.min(...r),s=Math.floor(t/a);return i?Math.max(s,r.length):s}(t.mediaTypes.video),s=Math.max(...r),o=e.filter(e=>e.uuid===t.bidId);let n=(0,b.GS)(...o,a);if(i){const e=Math.ceil(a/r.length),t=(0,v.i)(n,e);r.forEach((e,r)=>{t[r].map(t=>{H(t,"minduration",e),H(t,"maxduration",e)})})}else n.map(e=>H(e,"maxduration",s));return n}(o,e),r=R.tags.filter(t=>t.uuid!==e.bidId);R.tags=[...r,...t]});if(e[0].userId){let t=[];e[0].userIdAsEids.forEach(e=>{!e||!e.uids||e.uids.length<1||e.uids.forEach(r=>{let i={source:e.source,id:r.id};"adserver.org"==e.source?i.rti_partner="TDID":"uidapi.com"==e.source&&(i.rti_partner="UID2"),t.push(i)})}),t.length&&(R.eids=t)}if(null!=t&&null!==(s=t.ortb2)&&void 0!==s&&null!==(s=s.regs)&&void 0!==s&&null!==(s=s.ext)&&void 0!==s&&s.dsa){const e=t.ortb2.regs.ext.dsa,r={};if(["dsarequired","pubrender","datatopub"].forEach(t=>{(0,a.Et)(e[t])&&(r[t]=e[t])}),(0,a.cy)(e.transparency)&&e.transparency.every(e=>(0,a.Qd)(e))){const t=[];e.transparency.forEach(e=>{(0,a.O8)(e.domain)&&""!=e.domain&&(0,a.cy)(e.dsaparams)&&e.dsaparams.every(e=>(0,a.Et)(e))&&t.push(e)}),t.length>0&&(r.transparency=t)}(0,a.Im)(r)||(R.dsa=r)}o[0].publisher_id&&(R.publisher_id=o[0].publisher_id);const Q=function(e,t){let r=[],i={withCredentials:!0},s=w;(0,g.C)(null==t?void 0:t.gdprConsent)||(s=I);"TRUE"!==(0,a.Ez)("apn_test").toUpperCase()&&!0!==n.$W.getConfig("apn_test")||(i.customHeaders={"X-Is-Test":1});if(e.tags.length>15){const o=(0,a.Go)(e);(0,v.i)(e.tags,15).forEach(e=>{o.tags=e;const a=JSON.stringify(o);r.push({method:"POST",url:s,data:a,bidderRequest:t,options:i})})}else{const a=JSON.stringify(e);r={method:"POST",url:s,data:a,bidderRequest:t,options:i}}return r}(R,t);return Q},interpretResponse:function(e,t){let{bidderRequest:r}=t;e=e.body;const i=[];if(!e||e.error){let t="in response for ".concat(r.bidderCode," adapter");return e&&e.error&&(t+=": ".concat(e.error)),(0,a.vV)(t),i}if(e.tags&&e.tags.forEach(e=>{const t=(n=e)&&n.ads&&n.ads.length&&(0,p.I6)(n.ads,e=>e.rtb);var n;if(t){if((!0===m.u.get(r.bidderCode,"allowZeroCpmBids")?t.cpm>=0:t.cpm>0)&&(0,p.mK)(this.supportedMediaTypes,t.ad_type)){const n=function(e,t,r){const i=(0,a.D4)(e.uuid,[r]),n=(0,a.s0)(),d={adId:n,requestId:e.uuid,cpm:t.cpm,creativeId:t.creative_id,dealId:t.deal_id,currency:"USD",netRevenue:!0,ttl:300,adUnitCode:i.adUnitCode,appnexus:{buyerMemberId:t.buyer_member_id,dealPriority:t.deal_priority,dealCode:t.deal_code}};t.adomain&&(d.meta=Object.assign({},d.meta,{advertiserDomains:[t.adomain]}));t.advertiser_id&&(d.meta=Object.assign({},d.meta,{advertiserId:t.advertiser_id}));t.dsa&&(d.meta=Object.assign({},d.meta,{dsa:t.dsa}));function u(e){return{ver:"1.0",complete:0,nodes:[{bsid:e.buyer_member_id.toString()}]}}t.buyer_member_id&&(d.meta=Object.assign({},d.meta,{dchain:u(t)}));t.brand_id&&(d.meta=Object.assign({},d.meta,{brandId:t.brand_id}));if(t.rtb.video){Object.assign(d,{width:t.rtb.video.player_width,height:t.rtb.video.player_height,vastImpUrl:t.notify_url,ttl:3600});switch((0,s.A)(i,"mediaTypes.video.context")){case c.LM:const i=_.n[t.brand_category_id]?_.n[t.brand_category_id]:null;d.meta=Object.assign({},d.meta,{primaryCatId:i});const n=t.deal_priority;d.video={context:c.LM,durationSeconds:Math.floor(t.rtb.video.duration_ms/1e3),dealTier:n},d.vastUrl=t.rtb.video.asset_url;break;case l.H6:if(d.adResponse=e,d.adResponse.ad=d.adResponse.ads[0],d.adResponse.ad.video=d.adResponse.ad.rtb.video,d.vastXml=t.rtb.video.content,t.renderer_url){const i=(0,p.I6)(r.bids,t=>t.bidId===e.uuid);let n=(0,s.A)(i,"mediaTypes.video.renderer.options");n||(n=(0,s.A)(i,"renderer.options")),d.renderer=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=o.A4.install({id:t.renderer_id,url:t.renderer_url,config:r,loaded:!1,adUnitCode:e});try{i.setRender(J)}catch(e){(0,a.JE)("Prebid Error calling setRender on renderer",e)}return i.setEventHandlers({impression:()=>(0,a.OG)("AppNexus outstream video impression event"),loaded:()=>(0,a.OG)("AppNexus outstream video loaded event"),ended:()=>{(0,a.OG)("AppNexus outstream renderer video event"),document.querySelector("#".concat(e)).style.display="none"}}),i}(d.adUnitCode,t,n)}break;case l.mn:d.vastUrl=t.notify_url+"&redir="+encodeURIComponent(t.rtb.video.asset_url)}}else if(t.rtb[c.s6]){const e=t.rtb[c.s6];let r;if(function(e){if(!e||""===e)return!1;let t=e.match(D),r=null!=t&&t.length>=1,i=e.match(R),a=null!=i&&i.length>=1;return e.startsWith(j)&&a&&r}(t.viewability.config)){let e="pbjs_adid="+n+";pbjs_auc="+i.adUnitCode;r=t.viewability.config.replace("dom_id=%native_dom_id%",e)}let s=e.javascript_trackers;null==s?s=r:(0,a.O8)(s)?s=[s,r]:s.push(r),d[c.s6]={title:e.title,body:e.desc,body2:e.desc2,cta:e.ctatext,rating:e.rating,sponsoredBy:e.sponsored,privacyLink:e.privacy_link,address:e.address,downloads:e.downloads,likes:e.likes,phone:e.phone,price:e.price,salePrice:e.saleprice,clickUrl:e.link.url,displayUrl:e.displayurl,clickTrackers:e.link.click_trackers,impressionTrackers:e.impression_trackers,video:e.video,javascriptTrackers:s},e.main_img&&(d[c.s6].image={url:e.main_img.url,height:e.main_img.height,width:e.main_img.width}),e.icon&&(d[c.s6].icon={url:e.icon.url,height:e.icon.height,width:e.icon.width}),d[c.s6].ext={video:e.video,customImage1:e.image1&&{url:e.image1.url,height:e.image1.height,width:e.image1.width},customImage2:e.image2&&{url:e.image2.url,height:e.image2.height,width:e.image2.width},customImage3:e.image3&&{url:e.image3.url,height:e.image3.height,width:e.image3.width},customImage4:e.image4&&{url:e.image4.url,height:e.image4.height,width:e.image4.width},customImage5:e.image5&&{url:e.image5.url,height:e.image5.height,width:e.image5.width},customIcon1:e.icon1&&{url:e.icon1.url,height:e.icon1.height,width:e.icon1.width},customIcon2:e.icon2&&{url:e.icon2.url,height:e.icon2.height,width:e.icon2.width},customIcon3:e.icon3&&{url:e.icon3.url,height:e.icon3.height,width:e.icon3.width},customIcon4:e.icon4&&{url:e.icon4.url,height:e.icon4.height,width:e.icon4.width},customIcon5:e.icon5&&{url:e.icon5.url,height:e.icon5.height,width:e.icon5.width},customSocialIcon1:e.socialicon1&&{url:e.socialicon1.url,height:e.socialicon1.height,width:e.socialicon1.width},customSocialIcon2:e.socialicon2&&{url:e.socialicon2.url,height:e.socialicon2.height,width:e.socialicon2.width},customSocialIcon3:e.socialicon3&&{url:e.socialicon3.url,height:e.socialicon3.height,width:e.socialicon3.width},customSocialIcon4:e.socialicon4&&{url:e.socialicon4.url,height:e.socialicon4.height,width:e.socialicon4.width},customSocialIcon5:e.socialicon5&&{url:e.socialicon5.url,height:e.socialicon5.height,width:e.socialicon5.width},customTitle1:e.title1,customTitle2:e.title2,customTitle3:e.title3,customTitle4:e.title4,customTitle5:e.title5,customBody1:e.body1,customBody2:e.body2,customBody3:e.body3,customBody4:e.body4,customBody5:e.body5,customCta1:e.ctatext1,customCta2:e.ctatext2,customCta3:e.ctatext3,customCta4:e.ctatext4,customCta5:e.ctatext5,customDisplayUrl1:e.displayurl1,customDisplayUrl2:e.displayurl2,customDisplayUrl3:e.displayurl3,customDisplayUrl4:e.displayurl4,customDisplayUrl5:e.displayurl5,customSocialUrl1:e.socialurl1,customSocialUrl2:e.socialurl2,customSocialUrl3:e.socialurl3,customSocialUrl4:e.socialurl4,customSocialUrl5:e.socialurl5}}else{Object.assign(d,{width:t.rtb.banner.width,height:t.rtb.banner.height,ad:t.rtb.banner.content});try{if(t.rtb.trackers)for(let e=0;e<t.rtb.trackers[0].impression_urls.length;e++){const r=t.rtb.trackers[0].impression_urls[e],i=(0,a.Tz)(r);d.ad+=i}}catch(e){(0,a.vV)("Error appending tracking pixel",e)}}return d}(e,t,r);n.mediaType=function(e){const t=e.ad_type;return t===c.G_?c.G_:t===c.s6?c.s6:c.D4}(t),i.push(n)}}}),e.debug&&e.debug.debug_info){let t="AppNexus Debug Auction for Prebid\n\n"+e.debug.debug_info;t=t.replace(/(<td>|<th>)/gm,"\t").replace(/(<\/td>|<\/th>)/gm,"\n").replace(/^<br>/gm,"").replace(/(<br>\n|<br>)/gm,"\n").replace(/<h1>(.*)<\/h1>/gm,"\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm,"\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim,""),(0,a.OG)("https://console.appnexus.com/docs/understanding-the-debug-auction"),(0,a.OG)(t)}return i},getUserSyncs:function(e,t,r,i,a){if(e.iframeEnabled&&(0,g.C)(r))return[{type:"iframe",url:"https://acdn.adnxs.com/dmp/async_usersync.html"}];if(e.pixelEnabled){return["https://px.ads.linkedin.com/setuid?partner=appNexus"].map(e=>({type:"image",url:e}))}}};function G(e){var t;const r={};Object.keys(e.params).forEach(t=>{let r=(0,b.vk)(t);r!==t&&(e.params[r]=e.params[t],delete e.params[t])}),r.sizes=P(e.sizes),r.primary_size=r.sizes[0],r.ad_types=[],r.uuid=e.bidId,e.params.placement_id?r.id=parseInt(e.params.placement_id,10):r.code=e.params.inv_code;const i=(0,a.Ez)("ast_override_div");if((0,a.O8)(i)&&""!==i){const t=decodeURIComponent(i).split(",").find(t=>t.startsWith("".concat(e.adUnitCode,":")));if(t){const e=t.split(":")[1];e&&(r.force_creative_id=parseInt(e,10))}}r.allow_smaller_sizes=e.params.allow_smaller_sizes||!1,r.use_pmt_rule="boolean"==typeof e.params.use_payment_rule?e.params.use_payment_rule:"boolean"==typeof e.params.use_pmt_rule&&e.params.use_pmt_rule,r.prebid=!0,r.disable_psa=!0;let o=function(e){if(!(0,a.fp)(e.getFloor))return e.params.reserve?e.params.reserve:null;let t=e.getFloor({currency:"USD",mediaType:"*",size:"*"});if((0,a.Qd)(t)&&!isNaN(t.floor)&&"USD"===t.currency)return t.floor;return null}(e);if(o&&(r.reserve=o),e.params.position)r.position={above:1,below:2}[e.params.position]||0;else{let t=(0,s.A)(e,"mediaTypes.banner.pos")||(0,s.A)(e,"mediaTypes.video.pos");0!==t&&1!==t&&3!==t||(r.position=3===t?2:t)}e.params.traffic_source_code&&(r.traffic_source_code=e.params.traffic_source_code),e.params.private_sizes&&(r.private_sizes=P(e.params.private_sizes)),e.params.supply_type&&(r.supply_type=e.params.supply_type),e.params.pub_click&&(r.pubclick=e.params.pub_click),e.params.ext_inv_code&&(r.ext_inv_code=e.params.ext_inv_code),e.params.publisher_id&&(r.publisher_id=parseInt(e.params.publisher_id,10)),e.params.external_imp_id&&(r.external_imp_id=e.params.external_imp_id);const n=(0,f.T_)((0,f.gg)((0,s.A)(e,"ortb2Imp.ext.data.keywords")),null===(t=e.params)||void 0===t?void 0:t.keywords);n.length>0&&(r.keywords=n);let d=(0,s.A)(e,"ortb2Imp.ext.gpid")||(0,s.A)(e,"ortb2Imp.ext.data.pbadslot");if(d&&(r.gpid=d),(e.mediaType===c.s6||(0,s.A)(e,"mediaTypes.".concat(c.s6)))&&(r.ad_types.push(c.s6),0===r.sizes.length&&(r.sizes=P([1,1])),e.nativeParams)){const t=function(e){const t={};return Object.keys(e).forEach(r=>{const i=A[r]&&A[r].serverName||A[r]||r,s=A[r]&&A[r].requiredParams;t[i]=Object.assign({},s,e[r]);if(!(i!==A.image.serverName&&i!==A.icon.serverName)&&t[i].sizes){let e=t[i].sizes;((0,a.Uu)(e)||(0,a.cy)(e)&&e.length>0&&e.every(e=>(0,a.Uu)(e)))&&(t[i].sizes=P(t[i].sizes))}i===A.privacyLink&&(t.privacy_supported=!0)}),t}(e.nativeParams);r[c.s6]={layouts:[t]}}{const t=(0,s.A)(e,"mediaTypes.".concat(c.G_)),i=(0,s.A)(e,"mediaTypes.video.context");r.hb_source=t&&"adpod"===i?7:1,(e.mediaType===c.G_||t)&&r.ad_types.push(c.G_),(e.mediaType===c.G_||t&&"outstream"!==i)&&(r.require_asset_url=!0),e.params.video&&(r.video={},Object.keys(e.params.video).filter(e=>(0,p.mK)(x,e)).forEach(t=>{switch(t){case"context":case"playback_method":let i=e.params.video[t];i=(0,a.cy)(i)?i[0]:i,r.video[t]=S[t][i];break;case"frameworks":break;default:r.video[t]=e.params.video[t]}}),e.params.video.frameworks&&(0,a.cy)(e.params.video.frameworks)&&(r.video_frameworks=e.params.video.frameworks)),t&&(r.video=r.video||{},Object.keys(t).filter(e=>(0,p.mK)(C,e)).forEach(e=>{switch(e){case"minduration":case"maxduration":"number"!=typeof r.video[e]&&(r.video[e]=t[e]);break;case"skip":"boolean"!=typeof r.video.skippable&&(r.video.skippable=1===t[e]);break;case"skipafter":"number"!=typeof r.video.skipoffset&&(r.video.skippoffset=t[e]);break;case"playbackmethod":if("number"!=typeof r.video.playback_method){let i=t[e];i=(0,a.cy)(i)?i[0]:i,i>=1&&i<=4&&(r.video.playback_method=i)}break;case"api":if(!r.video_frameworks&&(0,a.cy)(t[e])){let i=t[e].map(e=>{let t=4===e?5:5===e?4:e;if(t>=1&&t<=5)return t}).filter(e=>e);r.video_frameworks=i}break;case"startdelay":case"plcmt":case"placement":if("number"!=typeof r.video.context){const e=t.plcmt,i=t.placement,a=t.startdelay,s=function(e,t){if(!e)return;if(2===e){if(void 0===t)return;if(0===t)return"accompanying_content_pre_roll";if(-1===t)return"accompanying_content_mid_roll";if(-2===t)return"accompanying_content_post_roll"}else{if(3===e)return"interstitial";if(4===e)return"outstream"}}(e,a)||function(e){if(!e)return;if(2===e)return"in-banner";if(3===e)return"outstream";if(4===e)return"in-feed";if(5===e)return"intersitial"}(i)||function(e){if(!e)return;if(0===e)return"pre_roll";if(-1===e)return"mid_roll";if(-2===e)return"post_roll"}(a);r.video.context=S.context[s]}}})),e.renderer&&(r.video=Object.assign({},r.video,{custom_renderer_present:!0}))}return e.params.frameworks&&(0,a.cy)(e.params.frameworks)&&(r.banner_frameworks=e.params.frameworks),(0,s.A)(e,"mediaTypes.".concat(c.D4))&&r.ad_types.push(c.D4),0===r.ad_types.length&&delete r.ad_types,r}function P(e){let t=[],r={};if((0,a.cy)(e)&&2===e.length&&!(0,a.cy)(e[0]))r.width=parseInt(e[0],10),r.height=parseInt(e[1],10),t.push(r);else if("object"==typeof e)for(let i=0;i<e.length;i++){let a=e[i];r={},r.width=parseInt(a[0],10),r.height=parseInt(a[1],10),t.push(r)}return t}function M(e){return!!e.params.user}function B(e){return!!parseInt(e.params.member,10)}function K(e){if(e.params)return!!e.params.app}function V(e){return e.params&&e.params.app?!!e.params.app.id:!!e.params.app}function $(e){return!!e.debug}function L(e){return e.mediaTypes&&e.mediaTypes.video&&e.mediaTypes.video.context===c.LM}function W(e){let t=!1;const r=e.params,i=e.params.video;return r.frameworks&&(0,a.cy)(r.frameworks)&&(t=(0,p.mK)(e.params.frameworks,6)),!t&&i&&i.frameworks&&(0,a.cy)(i.frameworks)&&(t=(0,p.mK)(e.params.video.frameworks,6)),t}function H(e,t,r){(0,a.Im)(e.video)&&(e.video={}),e.video[t]=r}function J(e,t){!function(e){try{const t=document.getElementById(e).querySelectorAll("div[id^='google_ads']");t[0]&&t[0].style.setProperty("display","none")}catch(e){}}(e.adUnitCode),function(e){try{const t=document.getElementById(e).querySelectorAll("script[id^='sas_script']");t[0].nextSibling&&"iframe"===t[0].nextSibling.localName&&t[0].nextSibling.style.setProperty("display","none")}catch(e){}}(e.adUnitCode),e.renderer.push(()=>{((null==t?void 0:t.defaultView)||window).ANOutstreamVideo.renderAd({tagId:e.adResponse.tag_id,sizes:[e.getSize().split("x")],targetId:e.adUnitCode,uuid:e.adResponse.uuid,adResponse:e.adResponse,rendererOptions:e.renderer.getConfig()},Q.bind(null,e))})}function Q(e,t,r){e.renderer.handleVideoEvent({id:t,eventName:r})}(0,d.a$)(q),(0,i.E)("appnexusBidAdapter")}},e=>{e.O(0,[802,1085,7247,5444,2126,4982,2698],()=>{return t=791,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[4430],{310(n,e,t){var i=t(7873),o=t(9214),a=t(1069),d=t(1580),c=t(5023),r=t(8969),l=t(5569);function u(n){const e="https://cdn.confiant-integrations.net/".concat(n,"/gpt_and_prebid/config.js");(0,d.R)(e,l.zu,"confiant",()=>{})}function s(n){var e,t,i,o;const d=null==n||null===(e=n.params)||void 0===e?void 0:e.propertyId;if(!d)return(0,a.vV)("Confiant pbjs module: no propertyId provided"),!1;const c=window.confiant||Object.create(null);return c[d]=c[d]||Object.create(null),c[d].clientSettings=c[d].clientSettings||Object.create(null),c[d].clientSettings.isMGBL=!0,c[d].clientSettings.prebidExcludeBidders=null==n||null===(t=n.params)||void 0===t?void 0:t.prebidExcludeBidders,c[d].clientSettings.prebidNameSpace=null==n||null===(i=n.params)||void 0===i?void 0:i.prebidNameSpace,null!=n&&null!==(o=n.params)&&void 0!==o&&o.shouldEmitBillableEvent&&(window.frames.cnftComm?f(window,d):b()),u(d),!0}function f(n,e){n.addEventListener("message",function(n){return function(e){e.data.type.indexOf("cnft:reportBillableEvent:"+n)>-1&&c.Ic(r.qY.BILLABLE_EVENT,{auctionId:e.data.auctionId,billingId:(0,a.lk)(),transactionId:e.data.transactionId,type:"impression",vendor:"confiant"})}}(e))}let p;function b(){p=new MutationObserver(n=>{n.forEach(n=>{n.addedNodes.forEach(n=>{if("IFRAME"===n.nodeName&&"cnftComm"===n.name&&!n.pbjsModuleSubscribed){n.pbjsModuleSubscribed=!0,p.disconnect(),p=null;f(n.contentWindow)}})})}),p.observe(document.head,{childList:!0,subtree:!0})}function v(){(0,o.bz)("realTimeData",{name:"confiant",init:n=>{try{return s(n)}catch(n){return(0,a.vV)(n.message),p&&p.disconnect(),!1}}})}v();(0,i.E)("confiantRtdProvider")}},n=>{n.O(0,[802,1085],()=>{return e=310,n(n.s=e);var e});n.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[5081],{6117(n,e,t){var o=t(7873),i=t(1069),s=t(3172),a=t(3272),c=t(6916),r=t(5901),l=t(1e3),u=t(687),d=t(965),p=t(3806);let f,g,m,v,C,b,M=!1,y=!1;const A={iab:function(n){let{onSuccess:e,onError:t,onEvent:o}=n;const s=(0,d.c5)({apiName:"__tcfapi",apiVersion:2,apiArgs:["command","version","callback","parameter"]});if(!s)return t("TCF2 CMP not found.");s.isDirect?(0,i.fH)("Detected CMP API is directly accessible, calling it now..."):(0,i.fH)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now...");s({command:"addEventListener",callback:function(n,s){(0,i.fH)("Received a response from CMP",n),s?(o(n),!1!==n.gdprApplies&&"tcloaded"!==n.eventStatus&&"useractioncomplete"!==n.eventStatus||E(n,{onSuccess:e,onError:t})):t("CMP unable to register callback function.  Please check CMP setup.")}})},static:function(n){let{onSuccess:e,onError:t}=n;E(v,{onSuccess:e,onError:t})}};function S(n){let e,t,o=!1,i=null,s=!1;function a(n){null!=i&&clearTimeout(i),o||null==n||(0===n?e():i=setTimeout(e,n))}function l(e,t,i){if(a(null),o=!0,c.mW.setConsentData(e),"function"==typeof n){for(var s=arguments.length,r=new Array(s>3?s-3:0),l=3;l<s;l++)r[l-3]=arguments[l];n(t,i,...r)}}if(!(0,r.mK)(Object.keys(A),f))return void l(null,!1,"CMP framework (".concat(f,") is not a supported framework.  Aborting consentManagement module and resuming auction."));const u={onSuccess:n=>l(n,!1),onError:function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];l(null,!0,n,...t)},onEvent:function(n){t=n,s||(s=!0,null!=C&&a(C))}};e=()=>{const n=n=>{l(n,!1,"".concat(s?"Timeout waiting for user action on CMP":"CMP did not load",", continuing auction..."))};E(t,{onSuccess:n,onError:()=>n(h(void 0))})},A[f](u),null!=C&&s||a(g)}const P=(0,p.R)("gdpr",()=>b,S);function E(n,e){let{onSuccess:t,onError:o}=e;!function(){const e=n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:m,t=n&&n.tcString;return!("boolean"==typeof e&&(!0!==e||t&&(0,i.O8)(t)))}()?t(h(n)):o("CMP returned unexpected value during lookup process.",n)}function h(n){return b={consentString:n?n.tcString:void 0,vendorData:n||void 0,gdprApplies:n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:m},n&&n.addtlConsent&&(0,i.O8)(n.addtlConsent)&&(b.addtlConsent=n.addtlConsent),b.apiVersion=2,b}a.$W.getConfig("consentManagement",n=>function(n){if((n=n&&(n.gdpr||n.usp||n.gpp?n.gdpr:n))&&"object"==typeof n){var e;(0,i.O8)(n.cmpApi)?f=n.cmpApi:(f="iab",(0,i.fH)("consentManagement config did not specify cmp.  Using system default setting (".concat("iab",")."))),(0,i.Et)(n.timeout)?g=n.timeout:(g=1e4,(0,i.fH)("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4,")."))),C=(0,i.Et)(n.actionTimeout)?n.actionTimeout:null,m=!0===n.defaultGdprScope,M=!!n.dsaPlatform,(0,i.fH)("consentManagement module has been activated..."),"static"===f&&((0,i.Qd)(n.consentData)?(v=n.consentData,null!=(null===(e=v)||void 0===e?void 0:e.getTCData)&&(v=v.getTCData),g=0):(0,i.vV)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),y||(0,o.m)().requestBids.before(P,50),y=!0,c.mW.enable(),S()}else(0,i.JE)("consentManagement (gdpr) config not defined, exiting consent manager")}(n.consentManagement)),u.w.before(function(n,e){return n(e.then(n=>{const e=c.mW.getConsentData();return e&&("boolean"==typeof e.gdprApplies&&(0,s.J)(n,"regs.ext.gdpr",e.gdprApplies?1:0),(0,s.J)(n,"user.ext.consent",e.consentString)),M&&(0,s.J)(n,"regs.ext.dsa.dsarequired",3),n}))}),(0,l.pS)({type:l.S3,name:"gdprAddtlConsent",fn:function(n,e){var t;const o=null===(t=e.gdprConsent)||void 0===t?void 0:t.addtlConsent;o&&"string"==typeof o&&(0,s.J)(n,"user.ext.ConsentedProvidersSettings.consented_providers",o)}}),(0,o.E)("consentManagementTcf")}},n=>{n.O(0,[802,1085,7109,10],()=>{return e=6117,n(n.s=e);var e});n.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[8662],{6056(n,t,e){var o=e(7873),a=e(1069),c=e(3172),s=e(3272),i=e(1445),r=e(6916),u=e(6894),l=e(9214),f=e(687),g=e(965);const d="iab";let m,p,v=d,P=50,S=!1;const b={iab:function(n){let{onSuccess:t,onError:e}=n;let o=function(){const n={};return{consentDataCallback:(o,a)=>{a&&o.uspString&&(n.usPrivacy=o.uspString),n.usPrivacy?y(n,{onSuccess:t,onError:e}):e("Unable to get USP consent string.")}}}();const c=(0,g.c5)({apiName:"__uspapi",apiVersion:1,apiArgs:["command","version","callback"]});if(!c)return e("USP CMP not found.");c.isDirect?(0,a.fH)("Detected USP CMP is directly accessible, calling it now..."):(0,a.fH)("Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now...");c({command:"getUSPData",callback:o.consentDataCallback}),c({command:"registerDeletion",callback:(n,t)=>(null==t||t)&&i.Ay.callDataDeletionRequest(n)}).catch(n=>{(0,a.vV)("Error invoking CMP `registerDeletion`:",n)})},static:function(n){let{onSuccess:t,onError:e}=n;y(m,{onSuccess:t,onError:e})}};function D(n){let t=null,e=!1;function o(o,a){if(null!=t&&clearTimeout(t),e=!0,r.t6.setConsentData(o),null!=n){for(var c=arguments.length,s=new Array(c>2?c-2:0),i=2;i<c;i++)s[i-2]=arguments[i];n(a,...s)}}if(!b[v])return void o(null,"USP framework (".concat(v,") is not a supported framework. Aborting consentManagement module and resuming auction."));const a={onSuccess:o,onError:function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];o(null,"".concat(n," Resuming auction without consent data as per consentManagement config."),...e)}};b[v](a),e||(0===P?y(void 0,a):t=setTimeout(a.onError.bind(null,"USPAPI workflow exceeded timeout threshold."),P))}const h=(0,u.Ak)("usp",function(n,t){var e=this;S||U(),D(function(o){if(null!=o){for(var c=arguments.length,s=new Array(c>1?c-1:0),i=1;i<c;i++)s[i-1]=arguments[i];(0,a.JE)(o,...s)}n.call(e,t)})});function y(n,t){let{onSuccess:e,onError:o}=t;!n||!n.usPrivacy?o("USPAPI returned unexpected value during lookup process.",n):(!function(n){n&&n.usPrivacy&&(p=n.usPrivacy)}(n),e(p))}function U(){let n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];S||((0,a.fH)("USPAPI consentManagement module has been activated".concat(n?"":" using default values (api: '".concat(v,"', timeout: ").concat(P,"ms)"))),S=!0,r.t6.enable()),D()}s.$W.getConfig("consentManagement",n=>function(n){(n=n&&n.usp)&&"object"==typeof n||(0,a.JE)("consentManagement.usp config not defined, using defaults"),n&&(0,a.O8)(n.cmpApi)?v=n.cmpApi:(v=d,(0,a.fH)("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat(d,")."))),n&&(0,a.Et)(n.timeout)?P=n.timeout:(P=50,(0,a.fH)("consentManagement.usp config did not specify timeout. Using system default setting (".concat(50,")."))),"static"===v&&((0,a.Qd)(n.consentData)&&(0,a.Qd)(n.consentData.getUSPData)?(n.consentData.getUSPData.uspString&&(m={usPrivacy:n.consentData.getUSPData.uspString}),P=0):(0,a.vV)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),U(!0)}(n.consentManagement)),(0,l.Yn)("requestBids").before(h,50),f.w.before(function(n,t){return n(t.then(n=>{const t=r.t6.getConsentData();return t&&(0,c.J)(n,"regs.ext.us_privacy",t),n}))}),(0,o.E)("consentManagementUsp")}},n=>{n.O(0,[802,1085,7109],()=>{return t=6056,n(n.s=t);var t});n.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[7976],{5366(e,i,t){var s=t(7873),r=t(1069),n=t(433),a=t(3172),o=t(9115),d=t(1371),u=t(2938),p=t(9766),c=t(5561);const m="conversant",l=(0,u.vM)({gvlid:24,bidderCode:m});function f(e,i){const t=function(e){let i=null;e.userId&&e.userId.pubcid?i=e.userId.pubcid:e.crumbs&&e.crumbs.pubcid&&(i=e.crumbs.pubcid);if(!i){i=function(e){let i;try{if(i=l.getCookie(e),!i){const t=l.getDataFromLocalStorage("".concat(e,"_exp"));(""===t||t&&new Date(t).getTime()-Date.now()>0)&&(i=l.getDataFromLocalStorage(e),i=i?decodeURIComponent(i):i)}(0,r.O8)(i)&&"{"===i.charAt(0)&&(i=JSON.parse(i))}catch(e){(0,r.vV)(e)}return i}((0,r.u5)("pubcid_name",e.params)||"_pubcid")}return i}(e);t&&(0,a.J)(i,"user.ext.fpc",t)}const b=(0,p.A)({context:{netRevenue:!0,ttl:300},request:function(e,i,t,s){const r=e(i,t,s);if(r.at=1,r.cur=["USD"],s.bidRequests){const e=s.bidRequests[0];!function(e,i){e.params.site_id&&(i.site&&(i.site.id=e.params.site_id),i.app&&(i.app.id=e.params.site_id))}(e,r),f(e,r)}return r},imp(e,i,t){const s=e(i,t),n={secure:1,bidfloor:g(i)||0,displaymanager:"Prebid.js",displaymanagerver:"9.18.0"};return y(i.params.tag_id,n,"tagid"),(0,r.D9)(s,n,s),s},bidResponse:function(e,i,t){if(!i.price)return;if(!t.mediaType&&t.bidRequest.mediaTypes){const[e]=Object.keys(t.bidRequest.mediaTypes);Object.values(c.X).includes(e)&&(t.mediaType=e)}return e(i,t)},response:(e,i,t,s)=>e(i,t,s),overrides:{imp:{banner(e,i,t,s){t.mediaTypes&&!t.mediaTypes.banner||(t.params.position&&(0,r.D9)(t,{mediaTypes:{banner:{pos:t.params.position}}}),e(i,t,s))},video(e,i,t,s){var n,a,o,d,u;if(t.mediaTypes&&!t.mediaTypes.video)return;const p={};y(null===(n=t.params)||void 0===n?void 0:n.position,p,"pos"),y(null===(a=t.params)||void 0===a?void 0:a.mimes,p,"mimes"),y(null===(o=t.params)||void 0===o?void 0:o.maxduration,p,"maxduration"),y(null===(d=t.params)||void 0===d?void 0:d.protocols,p,"protocols"),y(null===(u=t.params)||void 0===u?void 0:u.api,p,"api"),i.video=(0,r.D9)(p,i.video),e(i,t,s)}}}}),v={code:m,gvlid:24,aliases:["cnvr","epsilon"],supportedMediaTypes:[d.D4,d.G_],isBidRequestValid:function(e){if(!e||!e.params)return(0,r.JE)(m+": Missing bid parameters"),!1;if(!(0,r.O8)(e.params.site_id))return(0,r.JE)(m+": site_id must be specified as a string"),!1;if(function(e){return"video"===e.mediaType||!!(0,n.A)(e,"mediaTypes.video")}(e)){const i=e.params.mimes||(0,n.A)(e,"mediaTypes.video.mimes");if(i){if(!(0,r.cy)(i)||!i.every(e=>(0,r.O8)(e)))return(0,r.JE)(m+": mimes must be an array of strings"),!1}else(0,r.JE)(m+": mimes should be specified for videos")}return!0},buildRequests:function(e,i){const t=b.toORTB({bidderRequest:i,bidRequests:e});return{method:"POST",url:h(e[0]),data:t}},interpretResponse:function(e,i){return b.fromORTB({request:i.data,response:e.body})},getUserSyncs:function(e,i,t,s){let n={};const a=[];if(t&&(n.gdpr=t.gdprApplies?1:0,n.gdpr_consent=encodeURIComponent(t.consentString||"")),s&&(n.us_privacy=encodeURIComponent(s)),i&&i.ext){const t=[{urls:i.ext.fsyncs,type:"iframe"},{urls:i.ext.psyncs,type:"image"}].filter(i=>i.urls&&("iframe"===i.type&&e.iframeEnabled||"image"===i.type&&e.pixelEnabled)).map(e=>e.urls.map(i=>{let t=(0,r.Dl)(i);return(0,r.D9)(t.search,n),0===Object.keys(t.search).length&&delete t.search,{type:e.type,url:(0,r.c$)(t)}}).reduce((e,i)=>e.concat(i),[])).reduce((e,i)=>e.concat(i),[]);a.push(...t)}return a}};function y(e,i,t){e&&(i[t]=e)}function g(e){let i=(0,r.u5)("bidfloor",e.params);if(!i&&(0,r.fp)(e.getFloor)){const t=e.getFloor({currency:"USD",mediaType:"*",size:"*"});(0,r.Qd)(t)&&!isNaN(t.floor)&&"USD"===t.currency&&(i=t.floor)}return i}function h(e){let i="https://web.hb.ad.cpe.dotomi.com/cvx/client/hb/ortb/25";return e.params.white_label_url&&(i=e.params.white_label_url),i}(0,o.a$)(v),(0,s.E)("conversantBidAdapter")}},e=>{e.O(0,[802,1085,8498],()=>{return i=5366,e(e.s=i);var i});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[1829],{1493(e,t,i){var n=i(4705),a=i(7873),r=i(1069),o=i(433),s=i(3172),d=i(9115),l=i(1371),c=i(2938),p=i(7934),u=i(2621),v=i(5789),m=i(3895),g=i(8044),y=i(9766),f=i(4406);function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach(function(t){(0,n.A)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}const T="criteo",k="https://grid-bidder.criteo.com/openrtb_2_5/pbjs/auction/request",A=(0,c.vM)({bidderCode:T}),P="Criteo: ",I=(0,f.FE)(),S="https://static.criteo.net/js/ld/publishertag.renderer.js",x="cto_optout",O="cto_bundle",w=(0,y.A)({context:{netRevenue:!0,ttl:60},imp:function(e,t,i){var n;let a=e(t,i);const r=t.params;a.tagid=t.adUnitCode,(0,s.J)(a,"ext",h(h(h({},t.params.ext),a.ext),{},{rwdd:a.rwdd,floors:J(t),bidder:{publishersubid:null==r?void 0:r.publisherSubId,zoneid:null==r?void 0:r.zoneId,uid:null==r?void 0:r.uid}})),delete a.rwdd,!i.fledgeEnabled&&null!==(n=a.ext.igs)&&void 0!==n&&n.ae&&delete a.ext.igs.ae;if(U(t)){const e=t.params.video;void 0!==e&&(0,s.J)(a,"video",h(h({},a.video),{},{skip:a.video.skip||e.skip||0,placement:a.video.placement||e.placement,minduration:a.video.minduration||e.minduration,playbackmethod:a.video.playbackmethod||e.playbackmethod,startdelay:a.video.startdelay||e.startdelay||0})),(0,s.J)(a,"video.ext",{context:t.mediaTypes.video.context,playersizes:R((0,o.A)(t,"mediaTypes.video.playerSize"),j),plcmt:t.mediaTypes.video.plcmt,poddur:t.mediaTypes.video.adPodDurationSec,rqddurs:t.mediaTypes.video.durationRangeSec})}if(a.native&&void 0!==a.native.request){let e=JSON.parse(a.native.request);e.assets&&(1!==e.assets.length||Object.keys(e.assets[0]).length)||delete e.assets,(0,s.J)(a,"native.request_native",e),delete a.native.request}return a},request:function(e,t,i,n){let a=e(t,i,n);void 0!==n.publisherId&&(void 0!==a.app?(0,s.J)(a,"app.publisher.id",n.publisherId):(0,s.J)(a,"site.publisher.id",n.publisherId));i&&i.gdprConsent&&(0,s.J)(a,"regs.ext.gdprversion",i.gdprConsent.apiVersion);return a=I(a),a},bidResponse:function(e,t,i){i.mediaType=(0,o.A)(t,"ext.mediatype"),i.mediaType===l.s6&&void 0!==t.adm_native&&(t.adm=t.adm_native,delete t.adm_native);let n=e(t,i);const{bidRequest:a}=i;n.currency=(0,o.A)(t,"ext.cur"),void 0!==(0,o.A)(t,"ext.meta")&&(0,s.J)(n,"meta",h(h({},n.meta),t.ext.meta));void 0!==(0,o.A)(t,"ext.paf.content_id")&&(0,s.J)(n,"meta.paf.content_id",t.ext.paf.content_id);if(n.mediaType===l.G_){var r;n.vastUrl=null===(r=t.ext)||void 0===r?void 0:r.displayurl,(0,o.A)(a,"mediaTypes.video.context")===m.H6&&(n.renderer=function(e){var t,i;if(void 0===(null===(t=e.ext)||void 0===t?void 0:t.videoPlayerConfig)||void 0===(null===(i=e.ext)||void 0===i?void 0:i.videoPlayerType))return;const n={documentResolver:(e,t,i)=>null!=i?i:t},a=(t,i)=>{var n;let a={slotid:e.id,vastUrl:null===(n=e.ext)||void 0===n?void 0:n.displayurl,vastXml:e.adm,documentContext:i},r=e.ext.videoPlayerConfig;window.CriteoOutStream[e.ext.videoPlayerType].play(a,r)},r=v.A4.install({url:S,config:n});return r.setRender(a),r}(t))}return n},response:function(e,t,i,n){let a=e(t,i,n);const r=(0,o.A)(i,"ext.paf.transmission");return a.bids.forEach(e=>{void 0!==r&&void 0!==(0,o.A)(e,"meta.paf.content_id")?(0,s.J)(e,"meta.paf.transmission",r):delete e.meta.paf}),a}});const C={code:T,gvlid:91,supportedMediaTypes:[l.D4,l.G_,l.s6],getUserSyncs:function(e,t,i,n){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},{gppString:o="",applicableSections:s=[]}=a;const d=(0,p.EN)(),l="criteoPrebidAdapter";if(e.iframeEnabled&&(0,u.C)(i)){const e=[];if(e.push("origin=".concat(l)),e.push("topUrl=".concat(d.domain)),i&&(i.gdprApplies&&e.push("gdpr=".concat(1==i.gdprApplies?1:0)),i.consentString&&e.push("gdpr_consent=".concat(i.consentString))),n&&e.push("us_privacy=".concat(n)),e.push("gpp=".concat(o)),Array.isArray(s))for(const t of s)e.push("gpp_sid=".concat(t));const t=Math.random().toString(),a={bundle:q(O),cw:A.cookiesAreEnabled(),lsw:A.localStorageIsEnabled(),optoutCookie:q(x),origin:l,requestId:t,tld:d.domain,topUrl:d.domain,version:"9.18.0".replace(/\./g,"_")};window.addEventListener("message",function e(i){if(!i.data||"https://gum.criteo.com"!=i.origin)return;if(i.data.requestId!==t)return;this.removeEventListener("message",e),i.stopImmediatePropagation();const n=i.data;n.optout?(_(O),E(x,!0,43200,d.domain)):(n.bundle&&E(O,n.bundle,9360,d.domain),n.callbacks&&n.callbacks.forEach(r.z$))},!0);const c=JSON.stringify(a).replace(/"/g,"%22");return[{type:"iframe",url:"https://gum.criteo.com/syncframe?".concat(e.join("&"),"#").concat(c)}]}if(e.pixelEnabled&&(0,u.C)(i)){const e=[];if(e.push("profile=207"),i&&(!0===i.gdprApplies&&e.push("gdprapplies=true"),i.consentString&&e.push("gdpr=".concat(i.consentString))),n&&e.push("ccpa=".concat(n)),e.push("gpp=".concat(o)),Array.isArray(s))for(const t of s)e.push("gpp_sid=".concat(t));return[{type:"image",url:"https://ssp-sync.criteo.com/user-sync/redirect?".concat(e.join("&"))}]}return[]},isBidRequestValid:e=>!(!e||!e.params||!e.params.zoneId&&!e.params.networkId)&&!(U(e)&&!function(e){let t=!0;return["mimes","playerSize","maxduration","protocols","api","skip","placement","playbackmethod"].forEach(function(i){"placement"===i?void 0===(0,o.A)(e,"mediaTypes.video."+i)&&void 0===(0,o.A)(e,"params.video."+i)&&void 0===(0,o.A)(e,"mediaTypes.video.plcmt")&&void 0===(0,o.A)(e,"params.video.plcmt")&&(t=!1,(0,r.vV)("Criteo Bid Adapter: mediaTypes.video."+i+" or mediaTypes.video.plcmt is required")):void 0===(0,o.A)(e,"mediaTypes.video."+i)&&void 0===(0,o.A)(e,"params.video."+i)&&(t=!1,(0,r.vV)("Criteo Bid Adapter: mediaTypes.video."+i+" is required"))}),t}(e)),buildRequests:(e,t)=>{e.forEach(e=>{(function(e){return void 0!==(0,o.A)(e,"mediaTypes.native")})(e)&&(function(e){return!(e.nativeParams&&(e.nativeParams.image&&(!0!==e.nativeParams.image.sendId||!0===e.nativeParams.image.sendTargetingKeys)||e.nativeParams.icon&&(!0!==e.nativeParams.icon.sendId||!0===e.nativeParams.icon.sendTargetingKeys)||e.nativeParams.clickUrl&&(!0!==e.nativeParams.clickUrl.sendId||!0===e.nativeParams.clickUrl.sendTargetingKeys)||e.nativeParams.displayUrl&&(!0!==e.nativeParams.displayUrl.sendId||!0===e.nativeParams.displayUrl.sendTargetingKeys)||e.nativeParams.privacyLink&&(!0!==e.nativeParams.privacyLink.sendId||!0===e.nativeParams.privacyLink.sendTargetingKeys)||e.nativeParams.privacyIcon&&(!0!==e.nativeParams.privacyIcon.sendId||!0===e.nativeParams.privacyIcon.sendTargetingKeys)))}(e)||(0,r.JE)(P+"all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"),null==(0,o.A)(e,"nativeOrtbRequest.assets")&&((0,r.JE)(P+"native asset requirements are missing"),(0,s.J)(e,"nativeOrtbRequest.assets",[{}])))});const i=function(e,t){var i,n,a,o,s;const d=(0,r.Dl)(null==t||null===(i=t.refererInfo)||void 0===i?void 0:i.topmostLocation).search;return{url:(null==t||null===(n=t.refererInfo)||void 0===n?void 0:n.page)||"",debug:"1"===d.pbt_debug,noLog:"1"===d.pbt_nolog,fledgeEnabled:null===(a=t.paapi)||void 0===a?void 0:a.enabled,amp:e.some(e=>"amp"===e.params.integrationMode),networkId:null===(o=e.find(e=>{var t;return null===(t=e.params)||void 0===t?void 0:t.networkId}))||void 0===o?void 0:o.params.networkId,publisherId:null===(s=e.find(e=>{var t;return null===(t=e.params)||void 0===t?void 0:t.pubid}))||void 0===s?void 0:s.params.pubid}}(e,t),n=function(e){let t=k;t+="?profileId=207",t+="&av="+String(37),t+="&wv="+encodeURIComponent("9.18.0"),t+="&cb="+String(Math.floor(99999999999*Math.random())),A.localStorageIsEnabled()?t+="&lsavail=1":t+="&lsavail=0";e.amp&&(t+="&im=1");e.debug&&(t+="&debug=1");e.noLog&&(t+="&nolog=1");const i=q(O);i&&(t+="&bundle=".concat(i));q(x)&&(t+="&optout=1");e.networkId&&(t+="&networkId="+e.networkId);return t}(i),a=w.toORTB({bidderRequest:t,bidRequests:e,context:i});if(a)return{method:"POST",url:n,data:a,bidRequests:e}},interpretResponse:(e,t)=>{var i;if(void 0===(null==e?void 0:e.body))return[];const n=w.fromORTB({response:e.body,request:t.data}).bids||[],a=null===(i=(0,o.A)(e.body,"ext.igi"))||void 0===i?void 0:i.filter(e=>(0,r.cy)(null==e?void 0:e.igs)).flatMap(e=>e.igs);return null!=a&&a.length?{bids:n,paapi:a}:n},onDataDeletionRequest:e=>{const t=q(O);t&&(_(O),(0,g.RD)("https://privacy.criteo.com/api/privacy/datadeletionrequest",null,JSON.stringify({publisherUserId:t}),{contentType:"application/json",method:"POST"}))}};function q(e){const t=A.getCookie(e),i=A.getDataFromLocalStorage(e);return t||i||void 0}function E(e,t,i,n){const a=new Date;a.setTime(a.getTime()+60*i*60*1e3);const r="expires=".concat(a.toUTCString()),o=n.split(".");for(let i=0;i<o.length;++i){const n=o.slice(o.length-i-1,o.length).join(".");try{A.setCookie(e,t,r,null,"."+n);const i=A.getCookie(e);if(i&&i===t)break}catch(e){}}A.setDataInLocalStorage(e,t)}function _(e){A.setCookie(e,"",0),A.removeDataFromLocalStorage(e)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e;return null==e?[]:Array.isArray(e[0])?e.map(e=>t(e)):[t(e)]}function j(e){return e[0]+"x"+e[1]}function U(e){return void 0!==(0,o.A)(e,"mediaTypes.video")}function J(e){try{const a={},r=function(e){if(e.getFloor)return e.getFloor;if(e.params.bidFloor&&e.params.bidFloorCur)try{const t=parseFloat(e.params.bidFloor);return()=>({currency:e.params.bidFloorCur,floor:t})}catch(e){}}(e);if(r){var t,i,n;if(null!==(t=e.mediaTypes)&&void 0!==t&&t.banner){a.banner={};R((0,o.A)(e,"mediaTypes.banner.sizes")).forEach(t=>a.banner[j(t).toString()]=r.call(e,{size:t,mediaType:l.D4}))}if(null!==(i=e.mediaTypes)&&void 0!==i&&i.video){a.video={};R((0,o.A)(e,"mediaTypes.video.playerSize")).forEach(t=>a.video[j(t).toString()]=r.call(e,{size:t,mediaType:l.G_}))}return null!==(n=e.mediaTypes)&&void 0!==n&&n.native&&(a.native={},a.native["*"]=r.call(e,{size:"*",mediaType:l.s6})),a}}catch(e){(0,r.vV)("Could not parse floors from Prebid: "+e)}}(0,d.a$)(C),(0,a.E)("criteoBidAdapter")}},e=>{e.O(0,[802,1085,8498,5889],()=>{return t=1493,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[931],{2843(e,o,t){var n=t(7873),c=t(1069),a=t(8044),l=t(7934),i=t(9214),r=t(2938),d=t(5569),s=t(6916);const u="criteo",p=(0,r.vM)({moduleType:d.fW,moduleName:u}),g="cto_bidid",v="cto_bundle",m="html5",b="cookie",I=new Date(0).toString(),y=new Date((0,c.vE)()+33696e6).toString();function f(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const t=(0,c.Dl)(e,{noDecodeWholeURL:!0});return o?"".concat(t.hostname):"".concat(t.protocol,"://").concat(t.hostname).concat(t.port?":"+t.port:"","/")}function h(e,o){var t,n;return(null==e||null===(t=e.storage)||void 0===t?void 0:t.type)===m?p.getDataFromLocalStorage(o):(null==e||null===(n=e.storage)||void 0===n?void 0:n.type)===b?p.getCookie(o):p.getCookie(o)||p.getDataFromLocalStorage(o)}function S(e,o,t,n){var c,a;o&&t&&((null==e||null===(c=e.storage)||void 0===c?void 0:c.type)===m?p.setDataInLocalStorage(o,t):((null==e||null===(a=e.storage)||void 0===a?void 0:a.type)===b||p.setDataInLocalStorage(o,t),C(o,t,y,n,!0)))}function C(e,o,t,n,c){const a=n.split(".");for(let n=0;n<a.length;++n){const l=a.slice(a.length-n-1,a.length).join(".");try{if(p.setCookie(e,o,t,null,"."+l),c){const t=p.getCookie(e);if(t&&t===o)break}}catch(e){}}}function U(e,o,t){var n,i,r,d;const u=(void 0===(null==e||null===(n=e.storage)||void 0===n?void 0:n.type)||(null==e||null===(i=e.storage)||void 0===i?void 0:i.type)===b)&&p.cookiesAreEnabled(),y=(void 0===(null==e||null===(r=e.storage)||void 0===r?void 0:r.type)||(null==e||null===(d=e.storage)||void 0===d?void 0:d.type)===m)&&p.localStorageIsEnabled(),h=f((0,l.EN)().page),U=f(document.location.href,!0),D="undefined"!=typeof criteo_pubtag,k=function(e,o,t,n,c,a,l){let i="https://gum.criteo.com/sid/json?origin=prebid"+"".concat(e?"&topUrl="+encodeURIComponent(e):"")+"".concat(o?"&domain="+encodeURIComponent(o):"")+"".concat(t?"&bundle="+encodeURIComponent(t):"")+"".concat(n?"&info="+encodeURIComponent(n):"")+"".concat(c?"&cw=1":"")+"".concat(l?"&pbt=1":"")+"".concat(a?"&lsw=1":"");const r=s.t6.getConsentData();r&&(i+="&us_privacy=".concat(encodeURIComponent(r)));const d=s.mW.getConsentData();d&&(i+="".concat(d.consentString?"&gdprString="+encodeURIComponent(d.consentString):""),i+="&gdpr=".concat(!0===d.gdprApplies?1:0));const u=s.ad.getConsentData();return u&&(i+="".concat(u.gppString?"&gpp="+encodeURIComponent(u.gppString):""),i+="".concat(u.applicableSections?"&gpp_sid="+encodeURIComponent(u.applicableSections):"")),i}(h,U,o.bundle,o.dnaBundle,u,y,D),w={success:o=>{const n=JSON.parse(o);if(n.pixels&&n.pixels.forEach(o=>function(e,o,t){t.writeBundleInStorage&&t.bundlePropertyName&&t.storageKeyName?(0,a.RD)(t.pixelUrl,{success:n=>{if(n){const c=JSON.parse(n);c&&c[t.bundlePropertyName]&&S(e,t.storageKeyName,c[t.bundlePropertyName],o)}},error:e=>{(0,c.vV)("criteoIdSystem: unable to sync user id",e)}},void 0,{method:"GET",withCredentials:!0}):(0,c.z$)(t.pixelUrl)}(e,U,o)),n.acwsUrl){("string"==typeof n.acwsUrl?[n.acwsUrl]:n.acwsUrl).forEach(e=>(0,c.z$)(e))}else n.bundle&&S(e,v,n.bundle,U);if(n.bidId){S(e,g,n.bidId,U);const o={criteoId:n.bidId};t(o)}else C(l=g,"",I,U,!0),p.removeDataFromLocalStorage(l),t();var l},error:e=>{(0,c.vV)("criteoIdSystem: unable to sync user id",e),t()}};(0,a.RD)(k,w,void 0,{method:"GET",contentType:"application/json",withCredentials:!0})}const D={name:u,gvlid:91,decode:e=>e,getId(e){let o=function(e){return{bundle:h(e,v),dnaBundle:h(e,"cto_dna_bundle"),bidId:h(e,g)}}(e);return{id:o.bidId?{criteoId:o.bidId}:void 0,callback:t=>U(e,o,t)}},eids:{criteoId:{source:"criteo.com",atype:1}}};(0,i.bz)("userId",D),(0,n.E)("criteoIdSystem")}},e=>{e.O(0,[802,1085],()=>{return o=2843,e(e.s=o);var o});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[6050],{6480(e,n,r){var o=r(7873),i=r(1252),t=r(201),a=r(1692),l=r(6881),s=r(3272),d=r(8969),c=r(5023),u=r(9214),p=r(7934),m=r(7779),v=r(1069),h=r(433),b=r(5246);const f={ri:p.EN};function y(e,n,r){return(0,h.A)(n,"".concat(r,".description_url"))||encodeURIComponent(f.ri().page)}function g(e,n,r){const o=e&&e.adserverTargeting||{};let i={};const t=n&&n.adUnit;if(t){let e=m.iS.getAllTargeting(t.code);i=e?e[t.code]:{}}const a=Object.assign({},{hb_uuid:e&&e.videoCacheKey},{hb_cache_id:e&&e.videoCacheKey},i,o);c.Ic(d.qY.SET_TARGETING,{[t.code]:a});const l=(0,h.A)(n,"params.cust_params"),s=Object.assign({},a,l);let u=encodeURIComponent((0,v.eP)(s));return r&&(u=r+"%26"+u),u}s.$W.getConfig("brandCategoryTranslation.translationFile")&&(0,u.Yn)("registerAdserver").before(function(e){e.call(this,"dfp")}),(0,t.U)("dfp",{buildVideoUrl:function(e){var n,r,o,t;if(!e.params&&!e.url)return void(0,v.vV)("A params object or a url is required to use vuuklehb.adServers.dfp.buildVideoUrl");const s=e.adUnit,d=e.bid||m.iS.getWinningBids(s.code)[0];let c={};if(e.url&&(c=(0,v.Dl)(e.url,{noDecodeWholeURL:!0}),(0,v.Im)(e.params)))return function(e,n,r){const o=y(n,e,"search");o&&(e.search.description_url=o);return e.search.cust_params=g(n,r,e.search.cust_params),(0,v.c$)(e)}(c,d,e);const u={correlator:Date.now(),sz:(0,v.kK)((0,h.A)(s,"mediaTypes.video.playerSize")).join("|"),url:encodeURIComponent(location.href)},p=c.search,f=p&&p.sz;f&&(u.sz=f+"|"+u.sz);let _=g(d,e,p&&p.cust_params);const k=Object.assign({},b.Mu,c.search,u,e.params,{cust_params:_},(0,b.QS)()),A=y(d,e,"params");if(A&&(k.description_url=A),!k.ppid){const e=(0,a.Q)();null!=e&&(k.ppid=e)}const U=null===(n=e.adUnit)||void 0===n||null===(n=n.mediaTypes)||void 0===n?void 0:n.video;Object.entries({plcmt:()=>null==U?void 0:U.plcmt,min_ad_duration:()=>(0,v.Et)(null==U?void 0:U.minduration)?1e3*U.minduration:null,max_ad_duration:()=>(0,v.Et)(null==U?void 0:U.maxduration)?1e3*U.maxduration:null,vpos(){const e=null==U?void 0:U.startdelay;if((0,v.Et)(e))return-2===e?"postroll":-1===e||e>0?"midroll":"preroll"},vconp:()=>Array.isArray(null==U?void 0:U.playbackmethod)&&U.playbackmethod.every(e=>7===e)?"2":void 0,vpa(){if(Array.isArray(null==U?void 0:U.playbackmethod)){const e=U.playbackmethod.some(e=>3===e),n=U.playbackmethod.some(e=>[1,2,4,5,6].includes(e));if(e&&!n)return"click";if(n&&!e)return"auto"}},vpmute(){if(Array.isArray(null==U?void 0:U.playbackmethod)){const e=U.playbackmethod.some(e=>[2,6].includes(e)),n=U.playbackmethod.some(e=>[1,3,4,5].includes(e));if(e&&!n)return"1";if(n&&!e)return"0"}}}).forEach(e=>{let[n,r]=e;if(!k.hasOwnProperty(n)){const e=r();null!=e&&(k[n]=e)}});const C=null!==(r=null===(o=l.n.index.getBidRequest(e.bid||{}))||void 0===o?void 0:o.ortb2)&&void 0!==r?r:null===(t=l.n.index.getAuction(e.bid||{}))||void 0===t||null===(t=t.getFPD())||void 0===t?void 0:t.global,O=(0,i.eu)(C);return O.length&&(k.ppsj=btoa(JSON.stringify({PublisherProvidedTaxonomySignals:O}))),(0,v.c$)(Object.assign({},b.P8,c,{search:k}))}}),(0,o.E)("dfpAdServerVideo")}},e=>{e.O(0,[802,1085,3005,7650],()=>{return n=6480,e(e.s=n);var n});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[1807],{8178(e,t,r){var l=r(7873),n=r(3272),o=r(9214),a=r(1069),u=r(5555),s=r(6894);let b=[];const d=(0,s.Ak)("fpd",function(e,t){(function(){let{global:e={},bidder:t={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.$W.getConfig("firstPartyData")||{},l=u.k.resolve({global:e,bidder:t});return b.sort((e,t)=>(e.queue||1)-(t.queue||1)).forEach(e=>{l=l.then(t=>{let{global:l,bidder:n}=t;return u.k.resolve(e.processFpd(r,{global:l,bidder:n})).catch(t=>((0,a.vV)("Error in FPD module ".concat(e.name),t),{})).then(e=>({global:e.global||l,bidder:e.bidder||n}))})}),l})(t.ortb2Fragments).then(r=>{Object.assign(t.ortb2Fragments,r),e.call(this,t)})});(0,o.xG)("firstPartyData",function(e){b.push(e)}),(0,o.Yn)("startAuction").before(d,10),(0,l.E)("fpdModule")}},e=>{e.O(0,[802,1085],()=>{return t=8178,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[6497],{4263(t,e,r){var n=r(4705),i=r(7873),o=r(1069),a=r(433),s=r(3172),c=r(8044),d=r(9214),u=r(7934),p=r(2938),l=r(6916),g=r(5569),f=r(5555),h=r(1580);function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach(function(e){(0,n.A)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function w(t,e){(function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")})(t,e),e.add(t)}function y(t,e,r){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:r;throw new TypeError("Private element is not present on this object")}const m="id5id",D="User ID - ID5 submodule: ",I="id5-sync.com",O=(0,p.vM)({moduleType:g.fW,moduleName:"id5Id"}),x={name:"id5Id",gvlid:131,decode(t,e){let r,n,i={};if(!t||"string"!=typeof t.universal_uid)return;r=t.universal_uid,i=t.ext||i,n=t.publisherTrueLinkId;let c={id5id:{uid:r,ext:i}};(0,o.Qd)(i.euid)&&(c.euid={uid:i.euid.uids[0].id,source:i.euid.source,ext:{provider:I}}),n&&(c.trueLinkId={uid:n});switch((0,a.A)(t,"ab_testing.result")){case"control":(0,o.fH)(D+"A/B Testing - user is in the Control Group: ID5 ID is NOT exposed"),(0,s.J)(c,"id5id.ext.abTestingControlGroup",!0);break;case"error":(0,o.vV)(D+"A/B Testing ERROR! controlGroupPct must be a number >= 0 and <= 1");break;case"normal":(0,o.fH)(D+"A/B Testing - user is NOT in the Control Group"),(0,s.J)(c,"id5id.ext.abTestingControlGroup",!1)}return(0,o.fH)(D+"Decoded ID",c),c},getId(t,e,r){if(!function(t){if(!t||!t.params||!t.params.partner)return(0,o.vV)(D+"partner required to be defined"),!1;const e=t.params.partner;if("string"==typeof e||e instanceof String){let r=parseInt(e);if(isNaN(r)||r<0)return(0,o.vV)(D+"partner required to be a number or a String parsable to a positive integer"),!1;t.params.partner=r}else if("number"!=typeof e)return(0,o.vV)(D+"partner required to be a number or a String parsable to a positive integer"),!1;if(!t.storage||!t.storage.type||!t.storage.name)return(0,o.vV)(D+"storage required to be set"),!1;t.storage.name!==m&&(0,o.JE)(D+"storage name recommended to be '".concat(m,"'."));return!0}(t))return;if(!B(e))return void(0,o.fH)(D+"Skipping ID5 local storage write because no consent given.");return{callback:function(n){new P(t,e,r,l.t6.getConsentData(),l.ad.getConsentData()).execute().then(t=>{n(t)}).catch(t=>{(0,o.vV)(D+"getId fetch encountered an error",t),n()})}}},extendId:(t,e,r)=>B(e)?((0,o.fH)(D+"using cached ID",r),r&&(r.nbPage=H(r)),r):((0,o.fH)(D+"No consent given for ID5 local storage writing, skipping nb increment."),r),primaryIds:["id5id","trueLinkId"],eids:{id5id:{getValue:function(t){return t.uid},source:I,atype:1,getUidExt:function(t){if(t.ext)return t.ext}},euid:{getValue:function(t){return t.uid},getSource:function(t){return t.source},atype:3,getUidExt:function(t){if(t.ext)return t.ext}},trueLinkId:{getValue:function(t){return t.uid},getSource:function(t){return"true-link-id5-sync.com"},atype:1,getUidExt:function(t){if(t.ext)return t.ext}}}};var C=new WeakSet;class P{constructor(t,e,r,n,i){w(this,C),this.submoduleConfig=t,this.gdprConsentData=e,this.cacheIdObj=r,this.usPrivacyData=n,this.gppData=i}async execute(){const t=y(C,this,T).call(this);if(!y(C,this,S).call(this))return y(C,this,j).call(this,t);try{return await y(C,this,k).call(this,t)}catch(e){return(0,o.vV)(D+"Error while performing ID5 external module flow. Continuing with regular flow.",e),y(C,this,j).call(this,t)}}}function S(){return"string"==typeof this.submoduleConfig.params.externalModuleUrl}async function k(t){await async function(t){return new f.k((e,r)=>{if(window.id5Prebid)e();else try{(0,h.R)(t,g.fW,"id5",e)}catch(t){r(t)}})}(this.submoduleConfig.params.externalModuleUrl);const e=await t;return y(C,this,E).call(this).fetchId5Id(e,this.submoduleConfig.params,(0,u.EN)(),this.gdprConsentData,this.usPrivacyData,this.gppData)}function E(){return window.id5Prebid&&window.id5Prebid.integration}async function j(t){const e=await t,r=await y(C,this,A).call(this,e.extensionsCall),n=await y(C,this,N).call(this,e.fetchCall,r);return y(C,this,_).call(this,n)}async function T(){let t=this.submoduleConfig.params.configUrl||"https://id5-sync.com/api/config/prebid";const e=await(0,c.hd)(t,{method:"POST",body:JSON.stringify(v(v({},this.submoduleConfig),{},{bounce:!0})),credentials:"include"});if(!e.ok)throw new Error("Error while calling config endpoint: ",e);const r=await e.json();return(0,o.fH)(D+"config response received from the server",r),r}async function A(t){if(void 0===t)return;const e=t.url,r=t.method||"GET",n="GET"===r?void 0:JSON.stringify(t.body||{}),i=await(0,c.hd)(e,{method:r,body:n});if(!i.ok)throw new Error("Error while calling extensions endpoint: ",i);const a=await i.json();return(0,o.fH)(D+"extensions response received from the server",a),a}async function N(t,e){const r=t.url,n=t.overrides||{},i=JSON.stringify(v(v(v({},y(C,this,V).call(this)),n),{},{extensions:e})),a=await(0,c.hd)(r,{method:"POST",body:i,credentials:"include"});if(!a.ok)throw new Error("Error while calling fetch endpoint: ",a);const s=await a.json();return(0,o.fH)(D+"fetch response received from the server",s),s}function V(){const t=this.submoduleConfig.params,e=this.gdprConsentData&&"boolean"==typeof this.gdprConsentData.gdprApplies&&this.gdprConsentData.gdprApplies?1:0,r=(0,u.EN)(),n=this.cacheIdObj?this.cacheIdObj.signature:void 0,i=H(this.cacheIdObj),a=window.id5Bootstrap?window.id5Bootstrap.getTrueLinkInfo():{booted:!1},s={partner:t.partner,gdpr:e,nbPage:i,o:"pbjs",tml:r.topmostLocation,ref:r.ref,cu:r.canonicalUrl,top:r.reachedTop?1:0,u:r.stack[0]||window.location.href,v:"9.18.0",storage:this.submoduleConfig.storage,localStorage:O.localStorageIsEnabled()?1:0,true_link:a};!e||void 0===this.gdprConsentData.consentString||(0,o.Im)(this.gdprConsentData.consentString)||(0,o.xQ)(this.gdprConsentData.consentString)||(s.gdpr_consent=this.gdprConsentData.consentString),void 0===this.usPrivacyData||(0,o.Im)(this.usPrivacyData)||(0,o.xQ)(this.usPrivacyData)||(s.us_privacy=this.usPrivacyData),this.gppData&&(s.gpp_string=this.gppData.gppString,s.gpp_sid=this.gppData.applicableSections),void 0===n||(0,o.xQ)(n)||(s.s=n),void 0===t.pd||(0,o.xQ)(t.pd)||(s.pd=t.pd),void 0===t.provider||(0,o.xQ)(t.provider)||(s.provider=t.provider);const c=t.abTesting||{enabled:!1};return c.enabled&&(s.ab_testing={enabled:!0,control_group_pct:c.controlGroupPct}),s}function _(t){try{t.privacy&&window.id5Bootstrap&&window.id5Bootstrap.setPrivacy&&window.id5Bootstrap.setPrivacy(t.privacy)}catch(t){(0,o.vV)(D+"Error while writing privacy info into local storage.",t)}return t}function H(t){return t&&void 0!==t.nbPage?t.nbPage+1:1}function B(t){const e=t&&"boolean"==typeof t.gdprApplies&&t.gdprApplies,r=(0,a.A)(t,"vendorData.purpose.consents.1"),n=(0,a.A)(t,"vendorData.vendor.consents.".concat(131..toString()));return!!(!e||r&&n)}(0,d.bz)("userId",x),(0,i.E)("id5IdSystem")}},t=>{t.O(0,[802,1085],()=>{return e=4263,t(t.s=e);var e});t.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[5153],{3557(e,t,i){var n=i(7873),o=i(1069),r=i(8044),s=i(9214),l=i(2938),p=i(5569),a=i(6916);const d="identityLink",c=(0,l.vM)({moduleType:p.fW,moduleName:d}),v="_lr_env",u={name:d,gvlid:97,decode:e=>({idl_env:e}),getId(e,t){const i=e&&e.params||{};if(!i||"string"!=typeof i.pid)return void o.vV("identityLink: requires partner id to be defined");const n=t&&"boolean"==typeof t.gdprApplies&&t.gdprApplies?1:0,r=n?t.consentString:"";if(n&&(!r||""===r))return void o.fH("identityLink: Consent string is required to call envelope API.");const s=a.ad.getConsentData(),l=!(!s||!s.gppString)&&s.gppString,p=!!(s&&s.gppString&&s.applicableSections.length>0&&-1!==s.applicableSections[0])&&s.applicableSections[0],d=l&&p,u="https://api.rlcdn.com/api/identity/envelope?pid=".concat(i.pid).concat(n?"&ct=4&cv="+r:"").concat(d?"&gpp="+l+"&gpp_sid="+p:"");let y;return y=function(e){if(window.ats&&window.ats.retrieveEnvelope)o.fH("identityLink: ATS exists!"),window.ats.retrieveEnvelope(function(t){t?(o.fH("identityLink: An envelope can be retrieved from ATS!"),g(!0),e(JSON.parse(t).envelope)):f(u,e,i)});else{let t=function(){let e=c.getCookie(v)||c.getDataFromLocalStorage(v);return e?window.atob(e):void 0}();t?(o.fH("identityLink: LiveRamp envelope successfully retrieved from storage!"),e(JSON.parse(t).envelope)):f(u,e,i)}},{callback:y}},eids:{idl_env:{source:"liveramp.com",atype:3}}};function f(e,t,i){const n={success:e=>{let i;if(e)try{i=JSON.parse(e)}catch(e){o.fH(e)}t(i&&i.envelope?i.envelope:"")},error:e=>{o.fH("identityLink: identityLink: ID fetch encountered an error",e),t()}};i.notUse3P||c.getCookie("_lr_retry_request")?t():(!function(){let e=new Date;e.setTime(e.getTime()+36e5),c.setCookie("_lr_retry_request","true",e.toUTCString())}(),o.fH("identityLink: A 3P retrieval is attempted!"),g(!1),(0,r.RD)(e,n,void 0,{method:"GET",withCredentials:!0}))}function g(e){let t=new Date;t.setTime(t.getTime()+2592e6),c.setCookie("_lr_env_src_ats",e,t.toUTCString())}(0,s.bz)("userId",u),(0,n.E)("identityLinkIdSystem")}},e=>{e.O(0,[802,1085],()=>{return t=3557,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[3879],{7257(e,t,r){var n=r(4705),a=r(7873),o=r(3272),s=r(9115),p=r(433),i=r(3172),d=r(1069),c=r(1371),m=r(9766);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,n.A)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const b={code:"openx",gvlid:69,supportedMediaTypes:[c.D4,c.G_],isBidRequestValid:function(e){const t=e.params.delDomain||e.params.platform;if(p.A(e,"mediaTypes.banner")&&t)return!!e.params.unit||p.A(e,"mediaTypes.banner.sizes.length")>0;return!(!e.params.unit||!t)},buildRequests:function(e,t){let r=e.filter(e=>g(e)),n=e.filter(e=>function(e){return p.A(e,"mediaTypes.banner")||!g(e)}(e)),a=n.length?[y(n,t,c.D4)]:[];return r.forEach(e=>{a.push(y([e],t,c.G_))}),a},interpretResponse:function(e,t){e.body||(e.body={nbr:0});return f.fromORTB({request:t.data,response:e.body})},getUserSyncs:function(e,t,r,n){if(e.iframeEnabled||e.pixelEnabled){let a=e.iframeEnabled?"iframe":"image",o=[],s="https://u.openx.net/w/1.0/pd";if(r&&(o.push("gdpr="+(r.gdprApplies?1:0)),o.push("gdpr_consent="+encodeURIComponent(r.consentString||""))),n&&o.push("us_privacy="+encodeURIComponent(n)),t.length>0&&t[0].body&&t[0].body.ext){const e=t[0].body.ext;e.delDomain?s="https://".concat(e.delDomain,"/w/1.0/pd"):e.platform&&o.push("ph="+e.platform)}else o.push("ph=2d1251ae-7f3a-47cf-bd2a-2f288854a0ba");return[{type:a,url:"".concat(s).concat(o.length>0?"?"+o.join("&"):"")}]}}};(0,s.a$)(b);const f=(0,m.A)({context:{netRevenue:!0,ttl:300},imp(e,t,r){const n=e(t,r);return(0,d.D9)(n,{tagid:t.params.unit,ext:{divid:t.adUnitCode}}),t.params.customParams&&i.J(n,"ext.customParams",t.params.customParams),t.params.customFloor&&!n.bidfloor&&(n.bidfloor=t.params.customFloor),n},request(e,t,r,n){const a=e(t,r,n);(0,d.D9)(a,{at:1,ext:{bc:"".concat("hb_pb_ortb","_").concat("2.0"),pv:"9.18.0"}});const o=n.bidRequests[0];return o.params.coppa&&i.J(a,"regs.coppa",1),o.params.doNotTrack&&i.J(a,"device.dnt",1),o.params.platform&&i.J(a,"ext.platform",o.params.platform),o.params.delDomain&&i.J(a,"ext.delDomain",o.params.delDomain),o.params.response_template_name&&i.J(a,"ext.response_template_name",o.params.response_template_name),o.params.test&&(a.test=1),a},bidResponse(e,t,r){const n=e(t,r);return t.ext&&(n.meta.networkId=t.ext.dsp_id,n.meta.advertiserId=t.ext.buyer_id,n.meta.brandId=t.ext.brand_id),n},response(e,t,r,n){const{ortbRequest:a}=n;a.ext&&(a.ext.delDomain&&i.J(r,"ext.delDomain",a.ext.delDomain),a.ext.platform&&i.J(r,"ext.platform",a.ext.platform));const o=e(t,r,n);let s=p.A(r,"ext.fledge_auction_configs");return s?(s=Object.entries(s).map(e=>{var t;let[r,a]=e;return{bidId:r,config:(0,d.D9)(Object.assign({},a),{auctionSignals:{ortb2Imp:null===(t=n.impContext[r])||void 0===t?void 0:t.imp}})}}),{bids:o.bids,paapi:s}):o},overrides:{imp:{bidfloor(e,t,r,n){const a={};e(a,r,l(l({},n),{},{currency:"USD"})),"USD"===a.bidfloorcur&&Object.assign(t,a)},video(e,t,r,n){{let a=r.mediaTypes[c.G_];a&&(a=Object.assign({},a,r.params.video),r=l(l({},r),{},{mediaTypes:{[c.G_]:a}})),e(t,r,n)}}}}});function y(e,t,r){return{method:"POST",url:o.$W.getConfig("openxOrtbUrl")||"https://rtb.openx.net/openrtbb/prebidjs",data:f.toORTB({bidRequests:e,bidderRequest:t,context:{mediaType:r}})}}function g(e){return p.A(e,"mediaTypes.video")}(0,a.E)("openxBidAdapter")}},e=>{e.O(0,[802,1085,8498],()=>{return t=7257,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[362],{3294(e,n,t){var i=t(4705),o=t(7873),r=t(3272),l=t(9214),a=t(1069),c=t(433),s=t(3172),u=t(1e3),d=t(5023),p=t(8969),f=t(6743),g=t(2713),b=t(7194),v=t(9115),m=t(5555),h=t(6881);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach(function(n){(0,i.A)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}const P="PAAPI",O=[],I=new WeakSet;(0,l.xG)("paapi",function(e){O.push(e),e.init&&e.init({getPAAPIConfig:z,expandFilters:H})});const C=(0,b.$)(),E=(0,b.$)(),w=(0,b.$)(),j=(0,b.$)();let S={},x={};function k(){const e={},n=L(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return n&&(e.requestedSize=n),e}function B(){let e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(t.length>0){const i=t.reduce((0,g.Ph)((0,f.x4)(e=>[e.cpm,e.currency])));e=i.cpm,n=i.currency}else{const t=i.map(e=>"function"==typeof e.getFloor&&e.getFloor()).filter(e=>e),o=t.length&&t.reduce((0,g.Bp)((0,f.x4)(e=>[e.floor,e.currency])));e=null==o?void 0:o.floor,n=null==o?void 0:o.currency}const o={};return e&&((0,s.J)(o,"auctionSignals.prebid.bidfloor",e),n&&(0,s.J)(o,"auctionSignals.prebid.bidfloorcur",n)),o}function R(e){var n,t;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null!==(n=null===(t=x)||void 0===t?void 0:t.componentSeller)&&void 0!==n?n:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{compact:e=>{return(n=e.map(e=>e[1]),n.reduce((e,n)=>{if(F(n)){let t=e.find(e=>!e.hasOwnProperty(n.origin)||(0,a.bD)(e[n.origin],n));t||(t={},e.push(t)),t[n.origin]=n}return e},[]).map(e=>Object.values(e))).map(e=>[{},e]);var n},expand:$};if(!o.auctionConfig)return(0,a.JE)(P,"Cannot use IG buyers: paapi.componentSeller.auctionConfig not set",e.map(e=>e[1])),[];return(0,r[o.separateAuctions?"expand":"compact"])(e).map(e=>{let[n,t]=e;const r=(0,a.D9)(i(t),o.auctionConfig);return r.auctionSignals=U(r.auctionSignals||{},n),[n,r]})}function q(e){let{auctionId:n,bidsReceived:t,bidderRequests:i,adUnitCodes:o,adUnits:r}=e;const l=Object.fromEntries((null==r?void 0:r.map(e=>[e.code,e]))||[]),c=null==i?void 0:i.flatMap(e=>e.bids),s=C(n);(o||[]).forEach(e=>{s.hasOwnProperty(e)||(s[e]=null),!S.hasOwnProperty(e)&&(S[e]=null)});const u=E(n),d=w(n);u&&d&&Object.entries(d).forEach(e=>{let[n,t]=e;R(t).forEach(e=>{let[{bidder:t},i]=e;return J(u,n,{id:T(t),config:i})})});const p=j(n),f=Array.from(new Set(Object.keys(u).concat(Object.keys(p)))),g=Object.fromEntries(f.map(e=>{S[e]=n;const i=n=>n.adUnitCode===e;return[e,A(A({},k(l[e])),B(null==t?void 0:t.filter(i),null==c?void 0:c.filter(i)))]})),b={};function v(e,n){Object.entries(n).forEach(n=>{let[t,{resolve:i,default:o}]=n,r=e.hasOwnProperty(t)?e[t]:null;r=null==r&&null==o?void 0:"object"==typeof o&&"object"==typeof r?(0,a.D9)({},o,r):null!=r?r:o,i(r)})}Object.entries(u||{}).forEach(e=>{let[n,t]=e;t.forEach(e=>{let{id:t,config:i}=e;return J(b,t,{adUnitCode:n,config:(0,a.D9)({},g[n],i)})})}),Object.entries(p).forEach(e=>{let[n,{top:t,components:i}]=e;v(g[n],t),Object.entries(i).forEach(e=>{var t;let[i,{deferrals:o}]=e;const r=b.hasOwnProperty(i)?b[i]:[];r.length>1&&(0,a.JE)("Received multiple PAAPI configs for the same bidder and seller (".concat(i,"), active PAAPI auctions will only see the first"));const{config:l}=null!==(t=r.shift())&&void 0!==t?t:{config:A({},g[n])};v(l,o)})});const m=Object.values(b).flatMap(e=>e),h=Object.keys(p).length>0;x.parallel&&h&&m.length>0&&(0,a.vV)("Received PAAPI configs after PAAPI auctions were already started in parallel with their contextual auction",m),m.forEach(e=>{let{adUnitCode:n,config:t}=e;null==s[n]&&(s[n]=A(A({},g[n]),{},{componentAuctions:[]})),s[n].componentAuctions.push((0,a.D9)({},g[n],t))}),x.parallel&&h||O.forEach(e=>{var t;return null===(t=e.onAuctionConfig)||void 0===t?void 0:t.call(e,n,s)})}function J(e,n,t){!e.hasOwnProperty(n)&&(e[n]=[]),e[n].push(t)}function U(e,n){var t,i;let{ortb2:o,ortb2Imp:r}=n;return null!=o&&(0,s.J)(e,"prebid.ortb2",(0,a.D9)({},o,null===(t=e.prebid)||void 0===t?void 0:t.ortb2)),null!=r&&(0,s.J)(e,"prebid.ortb2Imp",(0,a.D9)({},r,null===(i=e.prebid)||void 0===i?void 0:i.ortb2Imp)),e}function D(e,n){return"".concat(e,"::").concat(n)}function T(e){return x.componentSeller.separateAuctions?"igb::".concat(e):"igb"}function Y(e,n,t){if(V(r.$W.getCurrentBidder()).enabled){const{adUnitCode:o,auctionId:l,bidder:c}=n;function s(e,n){const t=e(l);null!=t?J(t,o,n):(0,a.JE)(P,"Received PAAPI config for auction that has closed (auction '".concat(l,"', adUnit '").concat(o,"')"),n)}const{config:u,igb:d}=t;if(u){var i;u.auctionSignals=U(u.auctionSignals||{},n);const p=u.perBuyerSignals=null!==(i=u.perBuyerSignals)&&void 0!==i?i:{};(u.interestGroupBuyers||[]).forEach(e=>{var t;p[e]=U(null!==(t=p[e])&&void 0!==t?t:{},n)}),s(E,{id:D(c,u.seller),config:u})}d&&F(d)&&(d.pbs=U(d.pbs||{},n),s(w,[n,d]))}e(n,t)}r.$W.getConfig("paapi",e=>{var n;(n=e.paapi)&&!0===n.enabled?(x.enabled||((0,l.Yn)("addPaapiConfig").before(Y),(0,l.Yn)("makeBidRequests").before(W),(0,l.Yn)("makeBidRequests").after(K),(0,l.Yn)("processBidderRequests").before(Z),d.on(p.qY.AUCTION_INIT,ee),d.on(p.qY.AUCTION_END,q)),x=n,(0,a.fH)("".concat(P," enabled (browser ").concat(M()?"supports":"does NOT support"," runAdAuction)"),n)):(x.enabled&&((0,l.Yn)("addPaapiConfig").getHooks({hook:Y}).remove(),(0,l.Yn)("makeBidRequests").getHooks({hook:W}).remove(),(0,l.Yn)("makeBidRequests").getHooks({hook:K}).remove(),(0,l.Yn)("processBidderRequests").getHooks({hook:Z}).remove(),d.AU(p.qY.AUCTION_INIT,ee),d.AU(p.qY.AUCTION_END,q)),x={},(0,a.fH)("".concat(P," disabled"),n))});const N={cur:"perBuyerCurrencies",pbs:"perBuyerSignals",ps:"perBuyerPrioritySignals",maxbid:"auctionSignals.prebid.perBuyerMaxbid"};function F(e){if(e.origin)return!0;(0,a.JE)("PAAPI buyer does not specify origin and will be ignored",e)}function G(e){const n=new Set;return Object.assign(e.reduce((t,i)=>(F(i)&&(n.has(i.origin)?(0,a.JE)(P,"Duplicate buyer: ".concat(i.origin,". All but the first will be ignored"),e):(n.add(i.origin),Object.entries(N).forEach(e=>{let[n,o]=e;if(null!=i[n]){const e=(0,c.A)(t,o)||{};e[i.origin]=i[n],(0,s.J)(t,o,e)}}))),t),{}),{interestGroupBuyers:Array.from(n.keys())})}function $(e){const n={},t={};return e.forEach(e=>{let[i,o]=e;!n.hasOwnProperty(i.bidder)&&(n[i.bidder]=i),J(t,i.bidder,o)}),Object.entries(t).map(e=>{let[t,i]=e;return[n[t],i]})}function H(){let{auctionId:e,adUnitCode:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[];return null==n?t=Object.keys(S):S.hasOwnProperty(n)&&(t=[n]),Object.fromEntries(t.map(n=>[n,null!=e?e:S[n]]))}function z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const t={};return Object.entries(H(e)).forEach(e=>{let[i,o]=e;const r=C(o);if(null!=r&&r.hasOwnProperty(i)){const e=r[i];e&&!I.has(e)?(t[i]=e,I.add(e)):n&&(t[i]=null)}else null==o&&n&&(t[i]=null)}),t}function M(){return"runAdAuction"in navigator&&"joinAdInterestGroup"in navigator}function V(e){var n,t;const i=x.enabled&&(null==e||!(null!==(n=x.bidders)&&void 0!==n&&n.length)||(null===(t=x.bidders)||void 0===t?void 0:t.includes(e)));return{enabled:i,ae:i?x.defaultForSlots:void 0}}(0,o.m)().getPAAPIConfig=e=>z(e);const _=(0,l.A_)("sync",function(e){var n,t;if(null!==(t=e=null===(n=e)||void 0===n?void 0:n.filter(e=>{let[n,t]=e;return!(n===t&&n<=5)}))&&void 0!==t&&t.length)return e.reduce((0,g.Ph)((0,g.NV)(e=>{let[n,t]=e;return n*t})))},"getPAAPISize");function L(e){var n;return(null===(n=e.ortb2Imp)||void 0===n||null===(n=n.ext)||void 0===n||null===(n=n.paapi)||void 0===n?void 0:n.requestedSize)||(n=>{const t=_((0,a.y$)(null===(n=e.mediaTypes)||void 0===n||null===(n=n.banner)||void 0===n?void 0:n.sizes));if(t)return{width:t[0],height:t[1]}})()}function W(e,n){M()&&x.enabled&&n.forEach(e=>{var n,t,i;const o=null!=(null===(n=e.ortb2Imp)||void 0===n||null===(n=n.ext)||void 0===n?void 0:n.igs)?e.ortb2Imp.ext.igs.ae||1:null,r=null===(t=e.ortb2Imp)||void 0===t||null===(t=t.ext)||void 0===t?void 0:t.ae;o!==r&&null!=o&&null!=r&&(0,a.JE)(P,"Ad unit defines conflicting ortb2Imp.ext.ae and ortb2Imp.ext.igs, using the latter",e);const l=null!==(i=null!=o?o:r)&&void 0!==i?i:x.defaultForSlots;if(l){(0,s.J)(e,"ortb2Imp.ext.ae",l),e.ortb2Imp.ext.igs=Object.assign({ae:l,biddable:1},e.ortb2Imp.ext.igs);const n=L(e);n&&(0,s.J)(e,"ortb2Imp.ext.paapi.requestedSize",n),e.bids.forEach(e=>{V(e.bidder).enabled||((0,s.J)(e,"ortb2Imp.ext.ae",0),e.ortb2Imp.ext.igs={ae:0,biddable:0})})}});for(var t=arguments.length,i=new Array(t>2?t-2:0),o=2;o<t;o++)i[o-2]=arguments[o];e(n,...i)}function K(e,n){M()&&n.forEach(e=>{var n;const{enabled:t}=V(e.bidderCode);Object.assign(e,{paapi:{enabled:t,componentSeller:!(null===(n=x.componentSeller)||void 0===n||!n.auctionConfig)}})}),e(n)}const Q=["auctionSignals","sellerSignals","perBuyerSignals","perBuyerTimeouts","directFromSellerSignals"],X=(()=>{const e=[{props:["seller"],validate:e=>"string"==typeof e},{props:["interestGroupBuyers"],validate:e=>Array.isArray(e)&&e.length>0},{props:["decisionLogicURL","decisionLogicUrl"],validate:e=>"string"==typeof e}];return function(n){const t=e.find(e=>{let{props:t,validate:i}=e;return t.every(e=>!n.hasOwnProperty(e)||!n[e]||!i(n[e]))});return!t||((0,a.vV)('Partial PAAPI config has missing or invalid property "'.concat(t.props[0],'"'),n),!1)}})();function Z(e,n,t,i){function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={};return[Object.fromEntries(Q.map(t=>{const i=(0,m.v)({promiseFactory:e=>new Promise(e)});return i.default=e.hasOwnProperty(t)?e[t]:null,n[t]=i.promise,[t,i]})),n]}const{auctionId:r,paapi:{enabled:l,componentSeller:c}={}}=i,s=C(r);if(t.map(e=>e.adUnitCode).forEach(e=>{S[e]=r,s.hasOwnProperty(e)||(s[e]=null)}),l&&n.buildPAAPIConfigs){const e=(0,v.JS)(i),l=(0,v.eI)(i);let u;e.measureTime("buildPAAPIConfigs",()=>{try{u=n.buildPAAPIConfigs(t.map(l.bidRequest),l.bidderRequest(i))}catch(e){(0,a.vV)('Error invoking "buildPAAPIConfigs":',e)}});const d=Object.fromEntries(t.map(e=>[e.bidId,e]));(null!=u?u:[]).forEach(e=>{let{bidId:t,config:i,igb:l}=e;const u=d.hasOwnProperty(t)&&d[t];if(u){const e=u.adUnitCode;S[e]=r;const t=j(r),d=()=>{if(!t.hasOwnProperty(e)){const[n,i]=o();s[e]=A(A(A({},k(h.n.index.getAdUnit(u))),i),{},{componentAuctions:[]}),t[e]={top:n,components:{},auctionConfig:s[e]}}return t[e]};if(i&&X(i)){const e=D(u.bidder,i.seller),n=d();if(n.components.hasOwnProperty(e))(0,a.JE)("Received multiple PAAPI configs for the same bidder and seller; config will be ignored",{config:i,bidder:u.bidder});else{const[t,r]=o(i),l=A(A(A({},k(u)),i),r);n.auctionConfig.componentAuctions.push(l),n.components[e]={auctionConfig:l,deferrals:t}}}if(c&&l&&F(l)){const e=T(n.code),t=d(),i=R([[u,l]])[0][1];if(t.components.hasOwnProperty(e)){const{auctionConfig:n,deferrals:o}=t.components[e];if(n.interestGroupBuyers.includes(l.origin))(0,a.JE)("Received the same PAAPI buyer multiple times for the same PAAPI auction. Consider setting paapi.componentSeller.separateAuctions: true",l);else{const e={};Object.entries(i).forEach(n=>{let[t,i]=n;o.hasOwnProperty(t)?(0,a.D9)(o[t],{default:i}):e[t]=i}),(0,a.D9)(n,e)}}else{const[n,r]=o(i),l=A(A(A({},i),k(u)),r);t.components[e]={auctionConfig:l,deferrals:n},t.auctionConfig.componentAuctions.push(l)}}}else(0,a.vV)("Received partial PAAPI config for unknown bidId",{bidId:t,config:i})})}for(var u=arguments.length,d=new Array(u>4?u-4:0),p=4;p<u;p++)d[p-4]=arguments[p];return e.call(this,n,t,i,...d)}function ee(e){let{auctionId:n}=e;x.parallel&&h.n.index.getAuction({auctionId:n}).requestsDone.then(()=>{Object.keys(j(n)).length>0&&O.forEach(e=>{var t;return null===(t=e.onAuctionConfig)||void 0===t?void 0:t.call(e,n,C(n))})})}function ne(e,n,t){e.forEach(e=>{var n;const i=t.impContext[e.impid];null!=i&&null!==(n=i.imp)&&void 0!==n&&null!==(n=n.ext)&&void 0!==n&&n.ae?(i.paapiConfigs=i.paapiConfigs||[],i.paapiConfigs.push(e)):(0,a.JE)(P,"Received auction configuration for an impression that was not in the request or did not ask for it",e,null==i?void 0:i.imp)})}(0,u.pS)({type:u.Tb,name:"impExtAe",fn:function(e,n,t){var i,o,r;null!==(i=t.bidderRequest.paapi)&&void 0!==i&&i.enabled||(null===(o=e.ext)||void 0===o||delete o.ae,null===(r=e.ext)||void 0===r||delete r.igs)}}),(0,u.pS)({type:u.Cf,name:"extPrebidFledge",fn:function(e,n,t){var i;ne((null===(i=n.ext)||void 0===i||null===(i=i.prebid)||void 0===i||null===(i=i.fledge)||void 0===i?void 0:i.auctionconfigs)||[],0,t)},dialects:[u.e4]}),(0,u.pS)({type:u.Cf,name:"extIgiIgs",fn:function(e,n,t){var i;ne(((null===(i=n.ext)||void 0===i?void 0:i.igi)||[]).flatMap(e=>((null==e?void 0:e.igs)||[]).map(n=>{var t;return n.impid!==e.impid&&null!=n.impid&&null!=e.impid&&(0,a.JE)(P,"ORTB response ext.igi.igs.impid conflicts with parent's impid",e),{config:n.config,impid:null!==(t=n.impid)&&void 0!==t?t:e.impid}}).concat(((null==e?void 0:e.igb)||[]).map(n=>({igb:n,impid:e.impid})))),e,t)}}),(0,u.pS)({type:u.Cf,name:"paapiConfigs",priority:-1,fn:function(e,n,t){const i=Object.values(t.impContext).flatMap(e=>(e.paapiConfigs||[]).map(n=>A({bidId:e.bidRequest.bidId},n)));i.length>0&&(e.paapi=i)}}),(0,o.E)("paapi")}},e=>{e.O(0,[802,1085,7606,1225],()=>{return n=3294,e(e.s=n);var n});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[5494],{6178(t,n,e){var o=e(7873),i=e(9214),r=e(1069),c=e(433),a=e(3272),l=e(2713),g=e(7779);const s="paapiForGpt";let u;a.$W.getConfig("paapi",t=>{(0,c.A)(t,"paapi.gpt.configWithTargeting",!0)?((0,r.fH)(s,"enabling PAAPI configuration with setTargetingForGPTAsync"),g.iS.setTargetingForGPT.before(p)):g.iS.setTargetingForGPT.getHooks({hook:p}).remove()});const f=function(){const t={};return function(n,e,o){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(e.length>0){var c;let a=null!==(c=t[n])&&void 0!==c?c:{},l=Object.fromEntries(o.map(t=>[t.seller,t]));const g=Object.keys(l);i?(l=Object.assign(a,l),a=Object.fromEntries(g.map(t=>[t,null]))):g.forEach(t=>{a[t]=null}),Object.keys(a).length?t[n]=a:delete t[n];const u=Object.entries(l).map(t=>{let[n,e]=t;return{configKey:n,auctionConfig:e}});u.length>0&&e.forEach(t=>{t.setConfig({componentAuction:u}),(0,r.fH)(s,"register component auction configs for: ".concat(n,": ").concat(t.getAdUnitPath()),o)})}else o.length>0&&(0,r.JE)(s,"unable to register component auction config for ".concat(n),o)}}(),h=(()=>{const t=[[728,90],[336,280],[300,250],[300,50],[160,600],[1024,768],[970,250],[970,90],[768,1024],[480,320],[468,60],[320,480],[320,100],[320,50],[300,600],[300,100],[250,250],[234,60],[200,200],[180,150],[125,125],[120,600],[120,240],[120,60],[88,31],[980,120],[980,90],[950,90],[930,180],[750,300],[750,200],[750,100],[580,400],[250,360],[240,400]].sort((0,l.NV)(t=>{let[n,e]=t;return-n*e})).map(t=>[t,(0,r.bM)(t)]);return function(n,e){if(null!=e&&e.length){const o=new Set(e.map(r.bM)),i=t.find(t=>{let[n,e]=t;return o.has(e)});if(i)return void n.bail(i[0])}n(e)}})();(0,o.m)().setPAAPIConfigForGPT=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t=>u(t,!0),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.m2;return function(){let o=arguments.length>1?arguments[1]:void 0,i=!1;const c=t(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})||{},a=e(Object.keys(c),o);Object.entries(c).forEach(t=>{let[e,o]=t;null!=o&&(i=!0),n(e,a[e],(null==o?void 0:o.componentAuctions)||[],!0)}),i||(0,r.fH)("".concat(s,": No component auctions available to set"))}}();const p=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,o.m)().setPAAPIConfigForGPT;return function(n,e,o){(Array.isArray(e)?e:[e]).map(t=>null==t?void 0:{adUnitCode:t}).forEach(n=>t(n,o)),n(e,o)}}();(0,i.bz)("paapi",{name:"gpt",init(t){u=t.getPAAPIConfig,(0,i.Yn)("getPAAPISize").before(h)}}),(0,o.E)("paapiForGpt")}},t=>{t.O(0,[802,1085],()=>{return n=6178,t(t.s=n);var n});t.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[1252],{3990(e,t,r){var a=r(4705),i=r(7873),n=r(1069),s=r(433),o=r(3172),d=r(9115),p=r(1371),c=r(3272),l=r(5789),m=r(2693),u=r(8969);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,a.A)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const f="pubmatic",b="PubMatic: ",y="USD",v=void 0,w="https://pubmatic.bbvms.com/r/".concat("$RENDERER",".js"),x={kadpageurl:"",gender:"",yob:"",lat:"",lon:"",wiid:"",profId:"",verId:""},O="number",E="string",I="boolean",T="array",J={mimes:T,minduration:O,maxduration:O,startdelay:O,playbackmethod:T,api:T,protocols:T,w:O,h:O,battr:T,linearity:O,placement:O,plcmt:O,minbitrate:O,maxbitrate:O,skip:O},_=1,P=3,z={battr:T},C={1:"PMP",5:"PREF",6:"PMPG"},S={bootstrapPlayer:function(e){const t={code:e.adUnitCode};if(e.vastXml?t.vastXml=e.vastXml:e.vastUrl&&(t.vastUrl=e.vastUrl),!e.vastXml&&!e.vastUrl)return void(0,n.JE)("".concat(b,": No vastXml or vastUrl on bid, bailing..."));const r=S.getRendererId("pubmatic",e.rendererCode),a=document.getElementById(e.adUnitCode);let i;for(let e=0;e<window.bluebillywig.renderers.length;e++)if(window.bluebillywig.renderers[e]._id===r){i=window.bluebillywig.renderers[e];break}i?i.bootstrap(t,a):(0,n.JE)("".concat(b,": Couldn't find a renderer with ").concat(r))},newRenderer:function(e,t){var r=w.replace("$RENDERER",e);const a=l.A4.install({url:r,loaded:!1,adUnitCode:t});try{a.setRender(S.outstreamRender)}catch(e){(0,n.JE)("".concat(b,": Error tying to setRender on renderer"),e)}return a},outstreamRender:function(e){e.renderer.push(function(){S.bootstrapPlayer(e)})},getRendererId:function(e,t){return"".concat(e,"-").concat(t)}},j=[p.D4,p.G_,p.s6];let k=0,R=!1,U=["pubmatic"];const A=["all"];function q(e,t){if(!(0,n.O8)(t))return t&&(0,n.JE)(b+"Ignoring param key: "+e+", expects string-value, found "+typeof t),v;switch(e){case"pmzoneid":return t.split(",").slice(0,50).map(e=>e.trim()).join();case"kadfloor":case"lat":case"lon":return parseFloat(t)||v;case"yob":return parseInt(t)||v;default:return t}}function D(e){var t;e.params.adUnit="",e.params.adUnitIndex="0",e.params.width=0,e.params.height=0,e.params.adSlot=(t=e.params.adSlot,(0,n.O8)(t)?t.replace(/^\s+/g,"").replace(/\s+$/g,""):(t&&(0,n.JE)(f+": adSlot must be a string. Ignoring adSlot"),""));var r=e.params.adSlot,a=r.split(":");if(r=a[0],2==a.length&&(e.params.adUnitIndex=a[1]),a=r.split("@"),e.params.adUnit=a[0],a.length>1){if(2!=(a=a[1].split("x")).length)return void(0,n.JE)(b+"AdSlot Error: adSlot not in required format");e.params.width=parseInt(a[0],10),e.params.height=parseInt(a[1],10)}else if(e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty(p.D4)&&e.mediaTypes.banner.hasOwnProperty("sizes")){for(var i=0,s=[];i<e.mediaTypes.banner.sizes.length;i++)2===e.mediaTypes.banner.sizes[i].length&&s.push(e.mediaTypes.banner.sizes[i]);e.mediaTypes.banner.sizes=s,e.mediaTypes.banner.sizes.length>=1&&(e.params.width=e.mediaTypes.banner.sizes[0][0],e.params.height=e.mediaTypes.banner.sizes[0][1],e.mediaTypes.banner.sizes=e.mediaTypes.banner.sizes.splice(1,e.mediaTypes.banner.sizes.length-1))}}function N(){let e=window.navigator&&(window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection);switch(null==e?void 0:e.effectiveType){case"ethernet":return 1;case"wifi":return 2;case"slow-2g":case"2g":return 4;case"3g":return 5;case"4g":return 6;default:return 0}}function G(e,t,r){var a,i="Ignoring param key: "+e+", expects "+r+", found "+typeof t;switch(r){case I:a=n.Lm;break;case O:a=n.Et;break;case E:a=n.O8;break;case T:a=n.cy}return a(t)?t:((0,n.JE)(b+i),v)}const F={desc:"desc",desc2:"desc2",body:"desc",body2:"desc2",sponsoredBy:"sponsored",cta:"ctatext",rating:"rating",address:"address",downloads:"downloads",likes:"likes",phone:"phone",price:"price",salePrice:"saleprice",displayUrl:"displayurl",saleprice:"saleprice",displayurl:"displayurl"},M=Object.values(F);function $(e){var t;if(e.ortb){e=e.ortb,t=h(h({ver:"1.2"},e),{},{assets:[]});const{assets:r}=e,a=e=>e.title||e.img||e.data||e.video;if(r.length<1||!r.some(e=>a(e)))return(0,n.JE)("".concat(b,": Native assets object is empty or contains some invalid object")),R=!0,t;r.forEach(e=>{var r=e;r.img&&(r.img.type==P?(r.w=r.w||r.width||(r.sizes?r.sizes[0]:v),r.h=r.h||r.height||(r.sizes?r.sizes[1]:v),r.wmin=r.wmin||r.minimumWidth||(r.minsizes?r.minsizes[0]:v),r.hmin=r.hmin||r.minimumHeight||(r.minsizes?r.minsizes[1]:v)):r.img.type==_&&(r.w=r.w||r.width||(r.sizes?r.sizes[0]:v),r.h=r.h||r.height||(r.sizes?r.sizes[1]:v))),r&&void 0!==r.id&&a(r)&&t.assets.push(r)})}else t=function(e){if(!e&&!(0,n.Qd)(e))return(0,n.JE)("".concat(b,": Native assets object is empty or not an object: ").concat(e)),void(R=!0);const t={ver:"1.2",assets:[]};for(let r in e){if(u._B.includes(r))continue;if(!u.x5.hasOwnProperty(r)&&!M.includes(r)){(0,n.JE)("".concat(b,": Unrecognized native asset code: ").concat(r,". Asset will be ignored."));continue}const a=e[r];let i=0;a.required&&(0,n.Lm)(a.required)&&(i=Number(a.required));const s={id:t.assets.length,required:i};if(r in F)s.data={type:u.jO[F[r]]},(a.len||a.length)&&(s.data.len=a.len||a.length),a.ext&&(s.data.ext=a.ext);else if("icon"===r||"image"===r){if(s.img={type:"icon"===r?u.oA.ICON:u.oA.MAIN},a.aspect_ratios)if((0,n.cy)(a.aspect_ratios))if(a.aspect_ratios.length){const{min_width:e,min_height:t}=a.aspect_ratios[0];(0,n.Fq)(e)&&(0,n.Fq)(t)?(s.img.wmin=e,s.img.hmin=t):(0,n.JE)("".concat(b,": image.aspect_ratios min_width or min_height are invalid: ").concat(e,", ").concat(t));const r=a.aspect_ratios.filter(e=>e.ratio_width&&e.ratio_height).map(e=>"".concat(e.ratio_width,":").concat(e.ratio_height));r.length>0&&(s.img.ext={aspectratios:r})}else(0,n.JE)("".concat(b,": image.aspect_ratios was passed, but it's empty: ").concat(a.aspect_ratios));else(0,n.JE)("".concat(b,": image.aspect_ratios was passed, but it's not a an array: ").concat(a.aspect_ratios));s.img.w=a.w||a.width,s.img.h=a.h||a.height,s.img.wmin=a.wmin||a.minimumWidth||(a.minsizes?a.minsizes[0]:v),s.img.hmin=a.hmin||a.minimumHeight||(a.minsizes?a.minsizes[1]:v),a.sizes&&(2===a.sizes.length&&(0,n.Fq)(a.sizes[0])&&(0,n.Fq)(a.sizes[1])?((0,n.fH)("".concat(b,": if asset.sizes exist, by OpenRTB spec we should remove wmin and hmin")),s.img.w=a.sizes[0],s.img.h=a.sizes[1],delete s.img.hmin,delete s.img.wmin):(0,n.JE)("".concat(b,": image.sizes was passed, but its value is not an array of integers: ").concat(a.sizes))),a.ext&&(s.img.ext=a.ext),a.mimes&&(s.img.mimes=a.mimes)}else"title"===r?(s.title={len:a.len||a.length||140},a.ext&&(s.title.ext=a.ext)):"ext"===r&&(s.ext=a,delete s.required);t.assets.push(s)}return t.assets.length<1?((0,n.JE)("".concat(b,": Could not find any valid asset")),void(R=!0)):t}(e);return t}function W(e){var t,r=e.mediaTypes.banner.sizes,a=[];if(r!==v&&(0,n.cy)(r)){if(t={},e.params.width||e.params.height)t.w=e.params.width,t.h=e.params.height;else{if(0===r.length)return t=v,(0,n.JE)(b+"Error: mediaTypes.banner.size missing for adunit: "+e.params.adUnit+". Ignoring the banner impression in the adunit."),t;t.w=parseInt(r[0][0],10),t.h=parseInt(r[0][1],10),r=r.splice(1,r.length-1)}r.length>0&&(a=[],r.forEach(function(e){e.length>1&&a.push({w:e[0],h:e[1]})}),a.length>0&&(t.format=a)),t.pos=0,t.topframe=(0,n.al)()?0:1;const i=h({},(0,s.A)(e,"ortb2Imp.banner"));for(let e in z)i.hasOwnProperty(e)&&(t[e]=G(e,i[e],z[e]))}else(0,n.JE)(b+"Error: mediaTypes.banner.size missing for adunit: "+e.params.adUnit+". Ignoring the banner impression in the adunit."),t=v;return t}function L(e){var t,r=(0,n.D9)((0,s.A)(e.mediaTypes,"video"),e.params.video);if(r!==v){for(var a in t={},function(e,t){(0,s.A)(e,"plcmt")||(0,n.JE)("Video.plcmt param missing for "+t)}(r,e.adUnitCode),J)r.hasOwnProperty(a)&&(t[a]=G(a,r[a],J[a]));(0,n.cy)(e.mediaTypes.video.playerSize[0])?(t.w=parseInt(e.mediaTypes.video.playerSize[0][0],10),t.h=parseInt(e.mediaTypes.video.playerSize[0][1],10)):(0,n.Et)(e.mediaTypes.video.playerSize[0])&&(t.w=parseInt(e.mediaTypes.video.playerSize[0],10),t.h=parseInt(e.mediaTypes.video.playerSize[1],10))}else t=v,(0,n.JE)(b+"Error: Video config params missing for adunit: "+e.params.adUnit+" with mediaType set as video. Ignoring video impression in the adunit.");return t}function B(e,t){var r,a,i,d,l={},m={},u=e.hasOwnProperty("sizes")?e.sizes:[],g="",f=[],w=null==t||null===(r=t.paapi)||void 0===r?void 0:r.enabled;if(function(e,t){t.params.deals&&((0,n.cy)(t.params.deals)?t.params.deals.forEach(function(t){(0,n.O8)(t)&&t.length>3?(e.pmp||(e.pmp={private_auction:0,deals:[]}),e.pmp.deals.push({id:t})):(0,n.JE)(b+"Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: "+t)}):(0,n.JE)(b+"Error: bid.params.deals should be an array of strings."))}(l={id:e.bidId,tagid:e.params.adUnit||void 0,bidfloor:q("kadfloor",e.params.kadfloor),secure:1,ext:{pmZoneId:q("pmzoneid",e.params.pmzoneid)},bidfloorcur:e.params.currency?q("currency",e.params.currency):y,displaymanager:"Prebid.js",displaymanagerver:"9.18.0",pmp:(null===(a=e.ortb2Imp)||void 0===a?void 0:a.pmp)||void 0},e),function(e,t){var r,a="";if(t.params.dctr)if(a=t.params.dctr,(0,n.O8)(a)&&a.length>0){var i=a.split("|");a="",i.forEach(e=>{a+=e.length>0?e.trim()+"|":""}),r=a.length,"|"===a.substring(r,r-1)&&(a=a.substring(0,r-1)),e.ext.key_val=a.trim()}else(0,n.JE)(b+"Ignoring param : dctr with value : "+a+", expects string-value, found empty or non-string value")}(l,e),function(e,t){var r=t.rtd&&t.rtd.jwplayer&&t.rtd.jwplayer.targeting||void 0,a="";if(void 0!==r&&""!==r&&r.hasOwnProperty("segments")){var i,n=r.segments.length;a+="jw-id="+r.content.id;for(var s=0;s<n;s++)a+="|jw-"+r.segments[s]+"=1";(i=e.ext)&&void 0===i.key_val?i.key_val=a:i.key_val+="|"+a}}(l,e),e.hasOwnProperty("mediaTypes"))for(g in e.mediaTypes)switch(g){case p.D4:(i=W(e))!==v&&(l.banner=i);break;case p.s6:m.request=JSON.stringify($(e.nativeParams)),R?((0,n.JE)(b+"Error: Error in Native adunit "+e.params.adUnit+". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details."),R=!1):l.native=m;break;case p.G_:(d=L(e))!==v&&(l.video=d)}else i={pos:0,w:e.params.width,h:e.params.height,topframe:(0,n.al)()?0:1},(0,n.cy)(u)&&u.length>1&&((u=u.splice(1,u.length-1)).forEach(e=>{f.push({w:e[0],h:e[1]})}),i.format=f),l.banner=i;return function(e,t){const r=h({},(0,s.A)(t,"ortb2Imp.ext.data"));Object.keys(r).forEach(t=>{"pbadslot"===t?"string"==typeof r[t]&&r[t]&&(0,o.J)(e,"ext.data.pbadslot",r[t]):"adserver"===t?["name","adslot"].forEach(t=>{const a=(0,s.A)(r,"adserver.".concat(t));"string"==typeof a&&a&&((0,o.J)(e,"ext.data.adserver.".concat(t.toLowerCase()),a),"adslot"===t&&(0,o.J)(e,"ext.dfp_ad_unit_code",a))}):(0,o.J)(e,"ext.data.".concat(t),r[t])});const a=(0,s.A)(t,"ortb2Imp.ext.gpid");a&&(0,o.J)(e,"ext.gpid",a)}(l,e),function(e,t){let r=-1;"function"!=typeof t.getFloor||c.$W.getConfig("pubmatic.disableFloors")||[p.D4,p.G_,p.s6].forEach(a=>{if(e.hasOwnProperty(a)){let i=[];"banner"===a&&(e[a].w&&e[a].h&&i.push([e[a].w,e[a].h]),(0,n.cy)(e[a].format)&&e[a].format.forEach(e=>i.push([e.w,e.h]))),0===i.length&&i.push("*"),i.forEach(i=>{let s=t.getFloor({currency:e.bidfloorcur,mediaType:a,size:i});if((0,n.fH)(b,"floor from floor module returned for mediatype:",a," and size:",i," is: currency",s.currency,"floor",s.floor),"object"==typeof s&&s.currency===e.bidfloorcur&&!isNaN(parseInt(s.floor))){let e=parseFloat(s.floor);(0,n.fH)(b,"floor from floor module:",e,"previous floor value",r,"Min:",Math.min(e,r)),r=-1===r?e:Math.min(e,r),(0,n.fH)(b,"new floor value:",r)}})}});e.bidfloor&&((0,n.fH)(b,"floor from floor module:",r,"impObj.bidfloor",e.bidfloor,"Max:",Math.max(r,e.bidfloor)),r=Math.max(r,e.bidfloor));e.bidfloor=!isNaN(r)&&r>0?r:v,(0,n.fH)(b,"new impObj.bidfloor value:",e.bidfloor)}(l,e),function(e,t,r){if(r){var a;e.ext=e.ext||{},void 0!==(null==t||null===(a=t.ortb2Imp)||void 0===a||null===(a=a.ext)||void 0===a?void 0:a.ae)&&(e.ext.ae=t.ortb2Imp.ext.ae)}else{var i;null!==(i=e.ext)&&void 0!==i&&i.ae&&delete e.ext.ae}}(l,e,w),l.hasOwnProperty(p.D4)||l.hasOwnProperty(p.s6)||l.hasOwnProperty(p.G_)?l:v}function H(e,t){(t=t.filter(function(e){return"string"==typeof e||((0,n.JE)(b+"acat: Each category should be a string, ignoring category: "+e),!1)}).map(e=>e.trim()).filter((e,t,r)=>r.indexOf(e)===t)).length>0&&((0,n.JE)(b+"acat: Selected: ",t),e.ext.acat=t)}function V(e){return!0===(0,n.cy)(e)&&e.length>0}const X={code:f,gvlid:76,supportedMediaTypes:[p.D4,p.G_,p.s6],isBidRequestValid:e=>{if(e&&e.params){if(!(0,n.O8)(e.params.publisherId))return(0,n.JE)(b+"Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: "+JSON.stringify(e)),!1;if(e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty(p.G_)){let t=(0,s.A)(e.mediaTypes,"video.mimes"),r=(0,s.A)(e,"params.video.mimes");if(!1===V(t)&&!1===V(r))return(0,n.JE)(b+"Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:"+JSON.stringify(e)),!1;if(!e.mediaTypes[p.G_].hasOwnProperty("context"))return(0,n.vV)("".concat(b,": no context specified in bid. Rejecting bid: "),e),!1;if("outstream"===e.mediaTypes[p.G_].context&&!(0,n.O8)(e.params.outstreamAU)&&!e.hasOwnProperty("renderer")&&!e.mediaTypes[p.G_].hasOwnProperty("renderer"))return e.mediaTypes.hasOwnProperty(p.D4)||e.mediaTypes.hasOwnProperty(p.s6)?(delete e.mediaTypes[p.G_],(0,n.JE)("".concat(b,': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: '),e),!0):((0,n.vV)("".concat(b,': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '),e),!1)}return!0}return!1},buildRequests:(e,t)=>{var r,a,i,d,l,u,g,f;t&&t.refererInfo&&(f=t.refererInfo);var w,O=function(e){return{pageURL:(null==e?void 0:e.page)||window.location.href,refURL:(null==e?void 0:e.ref)||window.document.referrer}}(f),E=function(e){return{id:""+(new Date).getTime(),at:1,cur:[y],imp:[],site:{page:e.pageURL,ref:e.refURL,publisher:{}},device:{ua:navigator.userAgent,js:1,dnt:"yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,h:screen.height,w:screen.width,language:navigator.language,connectiontype:N()},user:{},ext:{}}}(O),I="",T=[],J=[],_=[],P=(0,n.lk)();if(e.forEach(e=>{var r;if(e.params.wiid=e.params.wiid||t.auctionId||P,(w=(0,n.Go)(e)).params.adSlot=w.params.adSlot||"",D(w),w.mediaTypes&&w.mediaTypes.hasOwnProperty("video")||w.params.hasOwnProperty("video"));else if(!(w.hasOwnProperty("mediaTypes")&&w.mediaTypes.hasOwnProperty(p.s6)||0!==w.params.width||0!==w.params.height))return void(0,n.JE)(b+"Skipping the non-standard adslot: ",w.params.adSlot,JSON.stringify(w));O.pubId=O.pubId||w.params.publisherId,(O=function(e,t){var r,a,i;for(r in t.kadpageurl||(t.kadpageurl=t.pageURL),x)x.hasOwnProperty(r)&&(a=e[r])&&("object"==typeof(i=x[r])&&(a=i.f(a,t)),(0,n.O8)(a)?t[r]=a:(0,n.JE)(b+"Ignoring param : "+r+" with value : "+x[r]+", expects string-value, found "+typeof a));return t}(w.params,O)).transactionId=null===(r=w.ortb2Imp)||void 0===r||null===(r=r.ext)||void 0===r?void 0:r.tid,""===I?I=w.params.currency||v:w.params.hasOwnProperty("currency")&&I!==w.params.currency&&(0,n.JE)(b+"Currency specifier ignored. Only one currency permitted."),w.params.currency=I,w.params.hasOwnProperty("dctr")&&(0,n.O8)(w.params.dctr)&&T.push(w.params.dctr),w.params.hasOwnProperty("bcat")&&(0,n.cy)(w.params.bcat)&&(J=J.concat(w.params.bcat)),w.params.hasOwnProperty("acat")&&(0,n.cy)(w.params.acat)&&(_=_.concat(w.params.acat));var a=B(w,t);a&&E.imp.push(a)}),0==E.imp.length)return;E.site.publisher.id=O.pubId.trim(),k=O.pubId.trim(),E.ext.wrapper={},E.ext.wrapper.profile=parseInt(O.profId)||v,E.ext.wrapper.version=parseInt(O.verId)||v,E.ext.wrapper.wiid=O.wiid||t.auctionId,E.ext.wrapper.wv="prebid_prebid_9.18.0",E.ext.wrapper.transactionId=O.transactionId,E.ext.wrapper.wp="pbjs";const z=t?m.u.get(t.bidderCode,"allowAlternateBidderCodes"):void 0;if(void 0!==z){if(E.ext.marketplace={},t&&1==z){let e=m.u.get(t.bidderCode,"allowedAlternateBidderCodes");(0,n.cy)(e)?(e=e.map(e=>e.trim().toLowerCase()).filter(e=>!!e).filter(n.hj),U=e.includes("*")?A:[...U,...e]):U=A}E.ext.marketplace.allowedbidders=U.filter(n.hj)}E.user.gender=O.gender?O.gender.trim():v,E.user.geo={},E.user.yob=q("yob",O.yob),E.site.page=O.kadpageurl.trim()||E.site.page.trim(),E.site.domain=function(e){let t=document.createElement("a");return t.href=e,t.hostname}(E.site.page),"object"==typeof c.$W.getConfig("content")&&(E.site.content=c.$W.getConfig("content")),"object"==typeof c.$W.getConfig("device")&&(E.device=Object.assign(E.device,c.$W.getConfig("device"))),E.device.language=E.device.language&&E.device.language.split("-")[0],(0,o.J)(E,"source.tid",null==t||null===(r=t.ortb2)||void 0===r||null===(r=r.source)||void 0===r?void 0:r.tid),-1!==window.location.href.indexOf("pubmaticTest=true")&&(E.test=1),e[0].schain&&(0,o.J)(E,"source.ext.schain",e[0].schain),t&&t.gdprConsent&&((0,o.J)(E,"user.ext.consent",t.gdprConsent.consentString),(0,o.J)(E,"regs.ext.gdpr",t.gdprConsent.gdprApplies?1:0)),t&&t.uspConsent&&(0,o.J)(E,"regs.ext.us_privacy",t.uspConsent),null!=t&&null!==(a=t.gppConsent)&&void 0!==a&&a.gppString?((0,o.J)(E,"regs.gpp",t.gppConsent.gppString),(0,o.J)(E,"regs.gpp_sid",t.gppConsent.applicableSections)):null!=t&&null!==(i=t.ortb2)&&void 0!==i&&null!==(i=i.regs)&&void 0!==i&&i.gpp&&((0,o.J)(E,"regs.gpp",t.ortb2.regs.gpp),(0,o.J)(E,"regs.gpp_sid",t.ortb2.regs.gpp_sid)),!0===c.$W.getConfig("coppa")&&(0,o.J)(E,"regs.coppa",1),null!=t&&null!==(d=t.ortb2)&&void 0!==d&&null!==(d=d.regs)&&void 0!==d&&null!==(d=d.ext)&&void 0!==d&&d.dsa&&(0,o.J)(E,"regs.ext.dsa",t.ortb2.regs.ext.dsa),function(e,t){let r=(0,s.A)(t,"0.userIdAsEids");(0,n.cy)(r)&&r.length>0&&(0,o.J)(e,"user.eids",r)}(E,e);const C=t&&t.ortb2||{},{user:S,device:j,site:R,bcat:G,badv:F}=C;if(R){const{page:e,domain:t,ref:r}=E.site;(0,n.D9)(E,{site:R}),E.site.page=e,E.site.domain=t,E.site.ref=r}if(S&&(0,n.D9)(E,{user:S}),F&&(0,n.D9)(E,{badv:F}),G&&(J=J.concat(G)),null!=j&&j.sua&&(E.device.sua=null==j?void 0:j.sua),null!=j&&null!==(l=j.ext)&&void 0!==l&&l.cdep&&(0,o.J)(E,"device.ext.cdep",j.ext.cdep),null!=S&&S.geo&&null!=j&&j.geo?(E.device.geo=h(h({},E.device.geo),j.geo),E.user.geo=h(h({},E.user.geo),S.geo)):(null!=S&&S.geo||null!=j&&j.geo)&&(E.user.geo=E.device.geo=null!=S&&S.geo?h(h({},E.user.geo),S.geo):h(h({},E.user.geo),j.geo)),null!=t&&null!==(u=t.ortb2)&&void 0!==u&&u.device&&(0,n.D9)(E.device,t.ortb2.device),null!==(g=C.ext)&&void 0!==g&&null!==(g=g.prebid)&&void 0!==g&&null!==(g=g.bidderparams)&&void 0!==g&&null!==(g=g[t.bidderCode])&&void 0!==g&&g.acat){const e=C.ext.prebid.bidderparams[t.bidderCode].acat;H(E,e)}else _.length&&H(E,_);var M;(function(e,t){(t=t.filter(function(e){return"string"==typeof e||((0,n.JE)(b+"bcat: Each category should be a string, ignoring category: "+e),!1)}).map(e=>e.trim()).filter(function(e,t,r){if(e.length>3)return r.indexOf(e)===t;(0,n.JE)(b+"bcat: Each category should have a value of a length of more than 3 characters, ignoring category: "+e)})).length>0&&((0,n.JE)(b+"bcat: Selected: ",t),e.bcat=t)}(E,J),null!=t&&t.timeout)?E.tmax=t.timeout:E.tmax=null===(M=window)||void 0===M||null===(M=M.PWT)||void 0===M||null===(M=M.versionDetails)||void 0===M?void 0:M.timeout;return E.ext.epoch=(new Date).getTime(),"object"==typeof c.$W.getConfig("app")&&(E.app=c.$W.getConfig("app"),E.app.publisher=E.site.publisher,E.app.ext=E.site.ext||v,"object"!=typeof E.app.content&&(E.app.content=E.site.content||v),delete E.site),{method:"POST",url:"https://hbopenbid.pubmatic.com/translator?source=prebid-client",data:JSON.stringify(E),bidderRequest:t}},interpretResponse:(e,t)=>{const r=[];var a=y;let i=JSON.parse(t.data),o=i.site&&i.site.ref?i.site.ref:"";try{e.body&&e.body.seatbid&&(0,n.cy)(e.body.seatbid)&&(a=e.body.cur||a,e.body.seatbid.forEach(e=>{e.bid&&(0,n.cy)(e.bid)&&e.bid.forEach(d=>{let c={requestId:d.impid,cpm:parseFloat((d.price||0).toFixed(2)),width:d.w,height:d.h,creativeId:d.crid||d.id,dealId:d.dealid,currency:a,netRevenue:true,ttl:300,referrer:o,ad:d.adm,pm_seat:e.seat||null,pm_dspid:d.ext&&d.ext.dspid?d.ext.dspid:null,partnerImpId:d.id||""};i.imp&&i.imp.length>0&&i.imp.forEach(e=>{if(d.impid===e.id)switch(function(e,t){if(e.ext&&null!=e.ext.bidtype)t.mediaType=j[e.ext.bidtype];else{(0,n.fH)(b+"bid.ext.bidtype does not exist, checking alternatively for mediaType");var r=e.adm,a="",i=new RegExp(/VAST\s+version/);if(r.indexOf('span class="PubAPIAd"')>=0)t.mediaType=p.D4;else if(i.test(r))t.mediaType=p.G_;else try{(a=JSON.parse(r.replace(/\\/g,"")))&&a.native&&(t.mediaType=p.s6)}catch(e){(0,n.JE)(b+"Error: Cannot parse native reponse for ad response: "+r)}}}(d,c),c.mediaType){case p.D4:break;case p.G_:c.width=d.hasOwnProperty("w")?d.w:e.video.w,c.height=d.hasOwnProperty("h")?d.h:e.video.h,c.vastXml=d.adm,function(e,t){let r,a,i;if(t.bidderRequest&&t.bidderRequest.bids){for(let n=0;n<t.bidderRequest.bids.length;n++)t.bidderRequest.bids[n].bidId===e.requestId&&(r=t.bidderRequest.bids[n].params,a=t.bidderRequest.bids[n].mediaTypes[p.G_].context,i=t.bidderRequest.bids[n].adUnitCode);a&&"outstream"===a&&r&&r.outstreamAU&&i&&(e.rendererCode=r.outstreamAU,e.renderer=S.newRenderer(e.rendererCode,i))}}(c,t),function(e,t,r){var a,i;if(null==t||null===(a=t.ext)||void 0===a||!a.prebiddealpriority)return;const o=(0,n.D4)(e.requestId,[r.bidderRequest]),d=(0,s.A)(o,"mediaTypes.video");if((null==d?void 0:d.context)!=p.LM)return;const c=(null==t||null===(i=t.ext)||void 0===i||null===(i=i.video)||void 0===i?void 0:i.duration)||(null==d?void 0:d.maxduration);e.video={context:p.LM,durationSeconds:c,dealTier:t.ext.prebiddealpriority}}(c,d,t);break;case p.s6:!function(e,t){if(e.hasOwnProperty("adm")){var r="";try{r=JSON.parse(e.adm.replace(/\\/g,""))}catch(e){return void(0,n.JE)(b+"Error: Cannot parse native reponse for ad response: "+t.adm)}t.native={ortb:h({},r.native)},t.mediaType=p.s6,t.width||(t.width=0),t.height||(t.height=0)}}(d,c)}}),d.ext&&d.ext.deal_channel&&(c.dealChannel=C[d.ext.deal_channel]||null),function(e,t,r){e.meta={},t.ext&&t.ext.dspid&&(e.meta.networkId=t.ext.dspid,e.meta.demandSource=t.ext.dspid),t.ext&&t.ext.dchain&&(e.meta.dchain=t.ext.dchain);const a=r||t.ext&&t.ext.advid;a&&(e.meta.advertiserId=a,e.meta.agencyId=a,e.meta.buyerId=a),t.adomain&&V(t.adomain)&&(e.meta.advertiserDomains=t.adomain,e.meta.clickUrl=t.adomain[0],e.meta.brandId=t.adomain[0]),t.cat&&V(t.cat)&&(e.meta.secondaryCatIds=t.cat,e.meta.primaryCatId=t.cat[0]),t.ext&&t.ext.dsa&&Object.keys(t.ext.dsa).length&&(e.meta.dsa=t.ext.dsa)}(c,d,e.seat),e.ext&&e.ext.buyid&&(c.adserverTargeting={hb_buyid_pubmatic:e.ext.buyid}),d.ext&&d.ext.marketplace&&(c.bidderCode=d.ext.marketplace),r.push(c)})}));let d=(0,s.A)(e.body,"ext.fledge_auction_configs");if(d)return d=Object.entries(d).map(e=>{let[t,r]=e;return{bidId:t,config:Object.assign({auctionSignals:{}},r)}}),{bids:r,paapi:d}}catch(e){(0,n.vV)(e)}return r},getUserSyncs:(e,t,r,a,i)=>{var n;let s=""+k;var o;(r&&(s+="&gdpr="+(r.gdprApplies?1:0),s+="&gdpr_consent="+encodeURIComponent(r.consentString||"")),a&&(s+="&us_privacy="+encodeURIComponent(a)),null!=i&&i.gppString&&null!=i&&null!==(n=i.applicableSections)&&void 0!==n&&n.length)&&(s+="&gpp="+encodeURIComponent(i.gppString),s+="&gpp_sid="+encodeURIComponent(null==i||null===(o=i.applicableSections)||void 0===o?void 0:o.join(",")));return!0===c.$W.getConfig("coppa")&&(s+="&coppa=1"),e.iframeEnabled?[{type:"iframe",url:"https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p="+s}]:[{type:"image",url:"https://image8.pubmatic.com/AdServer/ImgSync?p="+s}]}};(0,d.a$)(X),(0,i.E)("pubmaticBidAdapter")}},e=>{e.O(0,[802,1085],()=>{return t=3990,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[1079],{5330(t,e,n){var o=n(7873),a=n(3272),i=n(9214),r=n(1069),c=n(5023),s=n(8969),u=n(1445),f=n(6916),l=n(5901),g=n(6894),d=n(5569),h=n(6318);const D=(0,n(2604).ZI)(t=>u.Ay.resolveAlias(t));let p,E,m=[],v=[],T=[];const y=function(){let t=!1;return function(){t||(Object.entries({[s.qY.AUCTION_INIT]:["onAuctionInitEvent"],[s.qY.AUCTION_END]:["onAuctionEndEvent",I],[s.qY.BID_RESPONSE]:["onBidResponseEvent"],[s.qY.BID_REQUESTED]:["onBidRequestEvent"],[s.qY.BID_ACCEPTED]:["onBidAcceptedEvent"]}).forEach(t=>{let[e,[n,o]]=t;c.on(e,t=>{o&&o(t),v.forEach(e=>{try{e[n]&&e[n](t,e.config,E)}catch(t){(0,r.vV)("RTD provider '".concat(e.name,"': error in '").concat(n,"':"),t)}})})}),t=!0)}}();function R(){return{gdpr:f.mW.getConsentData(),usp:f.t6.getConsentData(),gpp:f.ad.getConsentData(),coppa:!!a.$W.getConfig("coppa")}}function A(){E=R();let t=[];T.forEach(e=>{const n=(0,l.I6)(m,t=>t.name===e.name);n&&n.init&&n.init(e,E)&&t.push(Object.assign(n,{config:e}))}),v=t,(0,r.fH)("Real time data module enabled, using submodules: ".concat(v.map(t=>t.name).join(", ")))}const b=(0,g.Ak)("rtd",function(t,e){E=R();const n=[],o=[];v.forEach(t=>{if("function"!=typeof t.getBidRequestData)return;n.push(t);const e=t.config;e&&e.waitForIt&&o.push(t)});const a=o.length&&p.auctionDelay&&p.auctionDelay>0;let i,r=o.length,c=!1;const s=[];if(!n.length)return f();function u(){c||(this.config&&this.config.waitForIt&&r--,0===r&&setTimeout(f,0))}function f(){c||(c=!0,clearTimeout(i),s.forEach(t=>t()),t.call(this,e))}i=setTimeout(f,a?p.auctionDelay:0),n.forEach(t=>{const n=(0,h.Qo)(e.ortb2Fragments||{},D(d.zu,t.name));s.push(n.verify),e.ortb2Fragments=n.obj,t.getBidRequestData(e,u.bind(t),t.config,E)})});function I(t){const e=v.filter(t=>"function"==typeof t.getTargetingData);if(!e.length)return;const n=t.adUnitCodes;if(!n)return;let o=[];for(let a=e.length-1;a>=0;a--){const i=e[a].getTargetingData(n,e[a].config,E,t);i&&"object"==typeof i?o.push(i):(0,r.JE)("invalid getTargetingData response for sub module",e[a].name)}const a=function(t){if(!Array.isArray(t)||!t.length)return{};return t.reduce((t,e)=>{for(let n in e)if(e.hasOwnProperty(n))if(t.hasOwnProperty(n)){const o=e[n];for(let e in o)o.hasOwnProperty(e)&&(t[n][e]=o[e])}else t[n]=e[n];return t},{})}(o);return t.adUnits.forEach(t=>{const e=t.code&&a[t.code];e&&((0,r.fH)("RTD set ad unit targeting of",e,"for",t),t[s.iD.ADSERVER_TARGETING]=Object.assign(t[s.iD.ADSERVER_TARGETING]||{},e))}),t.adUnits}function q(t){v.forEach(t=>{if("function"==typeof t.onDataDeletionRequest)try{t.onDataDeletionRequest(t.config)}catch(e){(0,r.vV)("Error executing ".concat(t.name,".onDataDeletionRequest"),e)}});for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];t.apply(this,n)}(0,i.xG)("realTimeData",function(t){return m.push(t),f.o2.register(d.zu,t.name,t.gvlid),function(){const e=m.indexOf(t);e>=0&&(m.splice(e,1),A())}}),function(t){const e=t.getConfig("realTimeData",t=>{let{realTimeData:n}=t;n.dataProviders?(e(),p=n,T=n.dataProviders,y(),(0,i.Yn)("startAuction").before(b,20),u.Ay.callDataDeletionRequest.before(q),A()):(0,r.vV)("missing parameters for real time module")})}(a.$W),(0,o.E)("rtdModule")}},t=>{t.O(0,[802,1085,5881],()=>{return e=5330,t(t.s=e);var e});t.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[2711],{1674(e,t,i){var r=i(4705),n=i(7873),o=i(9766),a=i(7967),s=i(9115),d=i(3272),c=i(1371),l=i(5901),u=i(5789),p=i(1069),m=i(433),v=i(3172),b=i(8656),f=i(8702);function x(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach(function(t){(0,r.A)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}const y="https://video-outstream.rubiconproject.com/apex-2.2.1.js";let h=d.$W.getConfig("rubicon")||{};d.$W.getConfig("rubicon",e=>{(0,p.D9)(h,e.rubicon)});let _={};var A={1:"468x60",2:"728x90",5:"120x90",7:"125x125",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",17:"240x400",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",39:"750x100",40:"750x200",41:"750x300",42:"2x4",43:"320x50",44:"300x50",48:"300x300",53:"1024x768",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",64:"580x500",65:"640x480",66:"930x600",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",85:"300x120",90:"548x150",94:"970x310",95:"970x100",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",105:"250x800",108:"320x240",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",144:"980x600",145:"980x150",152:"1000x250",156:"640x320",159:"320x250",179:"250x600",195:"600x300",198:"640x360",199:"640x200",213:"1030x590",214:"980x360",221:"1x1",229:"320x180",230:"2000x1400",232:"580x400",234:"6x6",251:"2x2",256:"480x820",257:"400x600",258:"500x200",259:"998x200",261:"480x480",264:"970x1000",265:"1920x1080",274:"1800x200",278:"320x500",282:"320x400",288:"640x380",484:"720x1280",524:"1x2",548:"500x1000",550:"980x480",552:"300x200",558:"640x640",562:"300x431",564:"320x431",566:"320x300",568:"300x150",570:"300x125",572:"250x350",574:"620x891",576:"610x877",578:"980x552",580:"505x656",622:"192x160",632:"1200x450",634:"340x450",680:"970x570",682:"300x240",684:"970x550",686:"300x210",688:"300x220",690:"970x170"};(0,p.bu)(A,(e,t)=>A[e]=t);const j=(0,o.A)({request(e,t,i,r){var o;const{bidRequests:a}=r,s=e(t,i,r);var c;s.cur=["USD"],s.test=d.$W.getConfig("debug")?1:0,(0,v.J)(s,"ext.prebid.cache",{vastxml:{returnCreative:!0===h.returnVast}}),(0,v.J)(s,"ext.prebid.bidders",{rubicon:{integration:h.int_type||"pbjs"}}),(0,v.J)(s,"ext.prebid.targeting.pricegranularity",{ranges:{low:[{max:5,increment:.5}],medium:[{max:20,increment:.1}],high:[{max:20,increment:.01}],auto:[{max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}],dense:[{max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}],custom:(c=d.$W).getConfig("customPriceBucket")&&c.getConfig("customPriceBucket").buckets}[c.getConfig("priceGranularity")]});let l=(0,n.m)().installedModules;!l||l.length&&-1===l.indexOf("rubiconAnalyticsAdapter")||(0,v.J)(s,"ext.prebid.analytics",{rubicon:{"client-analytics":!0}}),function(e,t,i){var r;let n={};const o=(0,b.D)(i,...t.map(e=>e.params.keywords));t.forEach(t=>{const i={user:{ext:{data:g({},t.params.visitor)}},site:{ext:{data:g({},t.params.inventory)}}},r=e.imp.find(e=>{var t;return null===(t=e.ext)||void 0===t||null===(t=t.prebid)||void 0===t||null===(t=t.bidder)||void 0===t||null===(t=t.rubicon)||void 0===t||null===(t=t.video)||void 0===t?void 0:t.language});var o;r&&(i.site.content={language:null===(o=r.ext)||void 0===o||null===(o=o.prebid)||void 0===o||null===(o=o.bidder)||void 0===o||null===(o=o.rubicon)||void 0===o||null===(o=o.video)||void 0===o?void 0:o.language});n=(0,p.D9)(n,t.ortb2||{},i);const a=d.$W.getConfig("user.id");n.user.id=n.user.id||a}),(0,p.D9)(e,n),o&&o.length&&(0,v.J)(e,"site.keywords",o.join(","));null==e||null===(r=e.ext)||void 0===r||null===(r=r.prebid)||void 0===r||delete r.storedrequest}(s,a,i.ortb2),null==s||null===(o=s.ext)||void 0===o||null===(o=o.prebid)||void 0===o||delete o.storedrequest,!0===h.disableFloors&&delete s.ext.prebid.floors;return a.filter(e=>"object"==typeof e.floorData).length>0&&(s.ext.prebid.floors={enabled:!1}),s},imp(e,t,i){var r;const n=C(t);if(n.includes(c.D4)&&1==n.length)return;const o=e(t,i);return o.id=t.adUnitCode,delete o.banner,"atf"===t.params.position&&o.video&&(o.video.pos=1),"btf"===t.params.position&&o.video&&(o.video.pos=3),null===(r=o.ext)||void 0===r||null===(r=r.prebid)||void 0===r||delete r.storedrequest,!0===t.params.bidonmultiformat&&n.length>1&&(0,v.J)(o,"ext.prebid.bidder.rubicon.formats",n),function(e,t){"USD"!=t.bidfloorcur&&(delete t.bidfloor,delete t.bidfloorcur);if(!t.bidfloor){let i=parseFloat((0,m.A)(e,"params.floor"));isNaN(i)||(t.bidfloor=i,t.bidfloorcur="USD")}}(t,o),o.id=_[o.id]?o.id+_[o.id]++:(_[o.id]=2,o.id),o},bidResponse(e,t,i){var r;const n=e(t,i);n.meta.mediaType=(0,m.A)(t,"ext.prebid.type");const{bidRequest:o}=i;let[a,s]="outstream"===(null===(r=o.mediaTypes.video)||void 0===r?void 0:r.context)?I(o,c.G_):[void 0,void 0];return n.width=t.w||a||n.playerWidth||0,n.height=t.h||s||n.playerHeight||0,n.mediaType===c.G_&&"outstream"===o.mediaTypes.video.context&&(n.renderer=function(e){const t=u.A4.install({id:e.adId,url:h.rendererUrl||y,config:h.rendererConfig||{},loaded:!1,adUnitCode:e.adUnitCode});try{t.setRender(w)}catch(e){(0,p.JE)("Prebid Error calling setRender on renderer",e)}return t}(n)),(0,m.A)(t,"ext.bidder.rp.advid")&&(0,v.J)(n,"meta.advertiserId",t.ext.bidder.rp.advid),n},context:{netRevenue:!1!==h.netRevenue,ttl:360},processors:a.m}),O={code:"rubicon",gvlid:52,supportedMediaTypes:[c.D4,c.G_,c.s6],isBidRequestValid:function(e){let t=!0;if("object"!=typeof e.params)return!1;for(let t=0,i=["accountId","siteId","zoneId"];t<i.length;t++)if(e.params[i[t]]=parseInt(e.params[i[t]]),isNaN(e.params[i[t]]))return(0,p.vV)("Rubicon: wrong format of accountId or siteId or zoneId."),!1;let i=C(e,!0);if(!i.length)return!1;i.includes(c.G_)&&(t=function(e){let t=!0,i=Object.prototype.toString.call([]),r=Object.prototype.toString.call(0);var n={mimes:i,protocols:i,linearity:r};return Object.keys(n).forEach(function(i){Object.prototype.toString.call((0,m.A)(e,"mediaTypes.video."+i))!==n[i]&&(t=!1,(0,p.vV)("Rubicon: mediaTypes.video."+i+" is required and must be of type: "+n[i]))}),t}(e));const r=[c.D4,c.s6].filter(e=>i.includes(e)).length>0;return r?t&&r:t},buildRequests:function(e,t){let i,r=[],n=[];if(i=e.filter(e=>{const t=C(e)||[],{length:i}=t,{bidonmultiformat:r,video:n}=e.params||{};return 1===i&&(t.includes(c.G_)||t.includes(c.s6))||2===i&&!t.includes(c.D4)||n&&t.includes(c.G_)||r&&(t.includes(c.G_)||t.includes(c.s6))}),i&&i.length){const e=j.toORTB({bidRequests:i,bidderRequest:t});T(),n.push({method:"POST",url:"https://".concat(h.videoHost||"prebid-server",".rubiconproject.com/openrtb2/auction"),data:e,bidRequest:i})}const o=e.filter(e=>{const t=C(e)||[],{bidonmultiformat:i,video:r}=e.params||{};return t.includes(c.D4)&&(1===t.length||i||!i&&!r||!i&&r&&!t.includes(c.G_))});if(!0!==h.singleRequest)r=n.concat(o.map(e=>{const i=O.createSlotParams(e,t);return{method:"GET",url:"https://".concat(h.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:O.getOrderedParams(i).reduce((e,t)=>{const r=i[t];return(0,p.O8)(r)&&""!==r||(0,p.Et)(r)?"".concat(e).concat(D(t,r),"&"):e},"")+"slots=1&rand=".concat(Math.random()),bidRequest:e}}));else{const e=o.reduce((e,t)=>((e[t.params.siteId]=e[t.params.siteId]||[]).push(t),e),{}),i=10;r=n.concat(Object.keys(e).reduce((r,n)=>{var o,a;return(o=e[n],a=i,o.map((e,t)=>t%a===0?o.slice(t,t+a):null).filter(e=>e)).forEach(e=>{const i=O.combineSlotUrlParams(e.map(e=>O.createSlotParams(e,t)));r.push({method:"GET",url:"https://".concat(h.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:O.getOrderedParams(i).reduce((e,t)=>{const r=i[t];return(0,p.O8)(r)&&""!==r||(0,p.Et)(r)?"".concat(e).concat(D(t,r),"&"):e},"")+"slots=".concat(e.length,"&rand=").concat(Math.random()),bidRequest:e})}),r},[]))}return r},getOrderedParams:function(e){const t=/^tg_v/,i=/^tg_i/,r=/^eid_|^tpid_/,n=["account_id","site_id","zone_id","size_id","alt_size_ids","p_pos","gdpr","gdpr_consent","us_privacy","gpp","gpp_sid","rp_schain"].concat(Object.keys(e).filter(e=>r.test(e))).concat(["x_liverampidl","ppuid","rf","p_geo.latitude","p_geo.longitude","kw"]).concat(Object.keys(e).filter(e=>t.test(e))).concat(Object.keys(e).filter(e=>i.test(e))).concat(["tk_flint","x_source.tid","l_pb_bid_id","p_screen_res","o_ae","o_cdep","rp_floor","rp_secure","tk_user_key"]);return n.concat(Object.keys(e).filter(e=>-1===n.indexOf(e)))},combineSlotUrlParams:function(e){if(1===e.length)return e[0];const t=e.reduce(function(t,i,r){return Object.keys(i).forEach(function(n){t.hasOwnProperty(n)||(t[n]=new Array(e.length)),t[n].splice(r,1,i[n])}),t},{}),i=new RegExp("^([^;]*)(;\\1)+$");return Object.keys(t).forEach(function(e){const r=t[e].join(";"),n=r.match(i);t[e]=n?n[1]:r}),t},createSlotParams:function(e,t){var i,r,n,o,a;e.startTime=(new Date).getTime();const s=e.params,u=I(e,"banner"),[v,b]=s.latLong||[],f={account_id:s.accountId,site_id:s.siteId,zone_id:s.zoneId,size_id:u[0],alt_size_ids:u.slice(1).join(",")||void 0,rp_floor:(s.floor=parseFloat(s.floor))>=.01?s.floor:void 0,rp_secure:"1",tk_flint:"".concat(h.int_type||"pbjs_lite","_v9.18.0"),"x_source.tid":null===(i=t.ortb2)||void 0===i||null===(i=i.source)||void 0===i?void 0:i.tid,"x_imp.ext.tid":null===(r=e.ortb2Imp)||void 0===r||null===(r=r.ext)||void 0===r?void 0:r.tid,l_pb_bid_id:e.bidId,o_cdep:null===(n=e.ortb2)||void 0===n||null===(n=n.device)||void 0===n||null===(n=n.ext)||void 0===n?void 0:n.cdep,p_screen_res:[window.screen.width,window.screen.height].join("x"),tk_user_key:s.userId,"p_geo.latitude":isNaN(parseFloat(v))?void 0:parseFloat(v).toFixed(4),"p_geo.longitude":isNaN(parseFloat(b))?void 0:parseFloat(b).toFixed(4),"tg_fl.eid":e.code,rf:k(e,t)};if("function"==typeof e.getFloor&&!h.disableFloors){let t;try{t=e.getFloor({currency:"USD",mediaType:"banner",size:"*"})}catch(e){(0,p.vV)("Rubicon: getFloor threw an error: ",e)}f.rp_hard_floor="object"!=typeof t||"USD"!==t.currency||isNaN(parseInt(t.floor))?void 0:t.floor}!0===s.bidonmultiformat&&(0,m.A)(e,"mediaTypes")&&Object.keys(e.mediaTypes).length>1&&(f.p_formats=Object.keys(e.mediaTypes).join(","));let x={1:"atf",3:"btf"}[(0,m.A)(e,"mediaTypes.banner.pos")]||"";f.p_pos="atf"===s.position||"btf"===s.position?s.position:x;const y=d.$W.getConfig("user.id");var _;(y&&(f.ppuid=y),null!=e&&null!==(o=e.ortb2Imp)&&void 0!==o&&null!==(o=o.ext)&&void 0!==o&&o.ae&&(f.o_ae=1),function(e,t){var i,r,n,o;if(!1===h.readTopics)return;let a=[1,2,5,6,7,507].concat((null===(i=h.sendSiteSegtax)||void 0===i?void 0:i.map(e=>Number(e)))||[]),s=[4,508].concat((null===(r=h.sendUserSegtax)||void 0===r?void 0:r.map(e=>Number(e)))||[]),d=(null===(n=e.ortb2)||void 0===n||null===(n=n.user)||void 0===n?void 0:n.data)||[],c=(null===(o=e.ortb2)||void 0===o||null===(o=o.site)||void 0===o||null===(o=o.content)||void 0===o?void 0:o.data)||[];d.forEach(S(t,"v",s)),c.forEach(S(t,"i",a))}(t,f),e.userIdAsEids&&e.userIdAsEids.forEach(e=>{try{if("adserver.org"===e.source)f.tpid_tdid=e.uids[0].id,f["eid_adserver.org"]=e.uids[0].id;else if("liveintent.com"===e.source)f["tpid_liveintent.com"]=e.uids[0].id,f["eid_liveintent.com"]=e.uids[0].id,e.ext&&Array.isArray(e.ext.segments)&&e.ext.segments.length&&(f["tg_v.LIseg"]=e.ext.segments.join(","));else if("liveramp.com"===e.source)f.x_liverampidl=e.uids[0].id;else if("id5-sync.com"===e.source)f["eid_id5-sync.com"]="".concat(e.uids[0].id,"^").concat(e.uids[0].atype,"^").concat(e.uids[0].ext&&e.uids[0].ext.linkType||"");else{const t="rubiconproject.com"===e.source?e.uids[0].id:"".concat(e.uids[0].id,"^").concat(e.uids[0].atype||"");f["eid_".concat(e.source)]=t}if(!f.ppuid){const t=(0,l.I6)(e.uids,e=>e.ext&&"ppuid"===e.ext.stype);t&&t.id&&(f.ppuid=t.id)}}catch(t){(0,p.JE)("Rubicon: error reading eid:",e,t)}}),t.gdprConsent&&("boolean"==typeof t.gdprConsent.gdprApplies&&(f.gdpr=Number(t.gdprConsent.gdprApplies)),f.gdpr_consent=t.gdprConsent.consentString),t.uspConsent&&(f.us_privacy=encodeURIComponent(t.uspConsent)),null!==(a=t.gppConsent)&&void 0!==a&&a.gppString)&&(f.gpp=t.gppConsent.gppString,f.gpp_sid=null===(_=t.gppConsent)||void 0===_||null===(_=_.applicableSections)||void 0===_?void 0:_.toString());return f.rp_maxbids=t.bidLimit||1,function(e,t,i){const r={user:{ext:{data:g({},e.params.visitor)}},site:{ext:{data:g({},e.params.inventory)}}};e.params.keywords&&(r.site.keywords=(0,p.cy)(e.params.keywords)?e.params.keywords.join(","):e.params.keywords);let n=(0,p.D9)({},e.ortb2||{},r),o=(0,m.A)(e.ortb2Imp,"ext")||{},a=(0,m.A)(e.ortb2Imp,"ext.data")||{};const s=(0,m.A)(e,"ortb2Imp.ext.gpid"),d=(0,m.A)(n,"regs.ext.dsa"),l={user:[4],site:[1,2,5,6]},u={user:"tg_v.",site:"tg_i.",adserver:"tg_i.dfp_ad_unit_code",pbadslot:"tg_i.pbadslot",keywords:"kw"},v=function(e,t,i){return"data"===t&&Array.isArray(e)?e.filter(e=>e.segment&&(0,m.A)(e,"ext.segtax")&&l[i]&&-1!==l[i].indexOf((0,m.A)(e,"ext.segtax"))).map(e=>{let t=e.segment.filter(e=>e.id).reduce((e,t)=>(e.push(t.id),e),[]);if(t.length>0)return t.toString()}).toString():("object"!=typeof e||Array.isArray(e))&&void 0!==e?Array.isArray(e)?e.filter(e=>{if("object"!=typeof e&&void 0!==e)return e.toString();(0,p.JE)("Rubicon: Filtered value: ",e,"for key",t,": Expected value to be string, integer, or an array of strings/ints")}).toString():e.toString():void 0},b=function(e,t,r){let n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=v(e,r,t),a=u[r]&&n?"".concat(u[r]):"data"===r?"".concat(u[t],"iab"):"".concat(u[t]).concat(r);i[a]=i[a]?i[a].concat(",",o):o};if(t===c.D4){["site","user"].forEach(e=>{Object.keys(n[e]).forEach(t=>{"site"===e&&"content"===t&&n[e][t].data?b(n[e][t].data,e,"data"):"ext"!==t?b(n[e][t],e,t):n[e][t].data&&Object.keys(n[e].ext.data).forEach(t=>{b(n[e].ext.data[t],e,t,!1)})})}),Object.keys(a).forEach(e=>{"adserver"!==e?b(a[e],"site",e):"gam"===a[e].name&&b(a[e].adslot,name,e)}),s&&(i.p_gpid=s),d&&Object.keys(d).length&&(0,p.Up)(d,["dsainfo",e=>i.dsainfo=e,"dsarequired",e=>i.dsarequired=e,"pubrender",e=>i.dsapubrender=e,"datatopub",e=>i.dsadatatopubs=e,"transparency",e=>{Array.isArray(e)&&e.length&&(i.dsatransparency=e.reduce((e,t)=>{const i=t.domain||"";if(!i)return e;const r=t.dsaparams||t.params;return Array.isArray(r)&&0!==r.length?(e&&(e+="~~"),e+"".concat(i,"~").concat(r.join("_"))):e},""))}]),i["tg_i.pbadslot"]&&delete i["tg_i.dfp_ad_unit_code"];const e=(0,m.A)(n,"device.sua");e&&!1!==h.chEnabled&&(0,p.Up)(e,["architecture",e=>i.m_ch_arch=e,"bitness",e=>i.m_ch_bitness=e,"browsers",e=>{var t,r;if(!Array.isArray(e))return;const[n,o]=e.reduce((e,t)=>{var i,r,n;return e[0].push('"'.concat(null==t?void 0:t.brand,'"|v="').concat(null==t||null===(i=t.version)||void 0===i?void 0:i[0],'"')),e[1].push('"'.concat(null==t?void 0:t.brand,'"|v="').concat(null==t||null===(r=t.version)||void 0===r||null===(n=r.join)||void 0===n?void 0:n.call(r,"."),'"')),e},[[],[]]);i.m_ch_ua=null==n||null===(t=n.join)||void 0===t?void 0:t.call(n,","),i.m_ch_full_ver=null==o||null===(r=o.join)||void 0===r?void 0:r.call(o,",")},"mobile",e=>i.m_ch_mobile="?".concat(e),"model",e=>i.m_ch_model=e,"platform",e=>{var t,r;i.m_ch_platform=null==e?void 0:e.brand,i.m_ch_platform_ver=null==e||null===(t=e.version)||void 0===t||null===(r=t.join)||void 0===r?void 0:r.call(t,".")}])}else Object.keys(o).length&&(0,p.D9)(i.imp[0].ext,o),s&&(i.imp[0].ext.gpid=s),(0,p.D9)(i,n)}(e,c.D4,f),!0===d.$W.getConfig("coppa")&&(f.coppa=1),e.schain&&z(e.schain)&&(f.rp_schain=O.serializeSupplyChain(e.schain)),f},serializeSupplyChain:function(e){if(!z(e))return"";const{ver:t,complete:i,nodes:r}=e;return"".concat(t,",").concat(i,"!").concat(O.serializeSupplyChainNodes(r))},serializeSupplyChainNodes:function(e){const t=["asi","sid","hp","rid","name","domain"];return e.map(e=>t.map(t=>encodeURIComponent(e[t]||"")).join(",")).join("!")},interpretResponse:function(e,t){var i;e=e.body;const{data:r}=t;if(!e||"object"!=typeof e)return[];if(e.seatbid){const t=(0,m.A)(e,"ext.errors.rubicon");Array.isArray(t)&&t.length>0&&(0,p.JE)("Rubicon: Error in video response");return j.fromORTB({request:r,response:e}).bids}let n,o=e.ads,a=0;const{bidRequest:s}=t;if("object"==typeof s&&!Array.isArray(s)&&C(s).includes(c.G_)&&"object"==typeof o&&(o=o[s.adUnitCode]),!Array.isArray(o)||o.length<1)return[];let d=o.reduce((t,i,r)=>{if(i.impression_id&&n===i.impression_id?a++:n=i.impression_id,"ok"!==i.status)return t;const o=Array.isArray(s)?s[r-a]:s;if(o&&"object"==typeof o){let e={requestId:o.bidId,currency:"USD",creativeId:i.creative_id||"".concat(i.network||"","-").concat(i.advertiser||""),cpm:i.cpm||0,dealId:i.deal,ttl:360,netRevenue:!1!==h.netRevenue,rubicon:{advertiserId:i.advertiser,networkId:i.network},meta:{advertiserId:i.advertiser,networkId:i.network,mediaType:c.D4}};i.creative_type&&(e.mediaType=i.creative_type),i.dsa&&Object.keys(i.dsa).length&&(e.meta.dsa=i.dsa),i.adomain&&(e.meta.advertiserDomains=Array.isArray(i.adomain)?i.adomain:[i.adomain]),i.creative_type===c.G_?(e.width=o.params.video.playerWidth,e.height=o.params.video.playerHeight,e.vastUrl=i.creative_depot_url,e.impression_id=i.impression_id,e.videoCacheKey=i.impression_id):(e.ad=(d=i.script,l=i.impression_id,"<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(l,"'>\n<script type='text/javascript'>").concat(d,"<\/script>\n</div>\n</body>\n</html>")),[e.width,e.height]=A[i.size_id].split("x").map(e=>Number(e))),e.rubiconTargeting=(Array.isArray(i.targeting)?i.targeting:[]).reduce((e,t)=>(e[t.key]=t.values[0],e),{rpfl_elemid:o.adUnitCode}),t.push(e)}else(0,p.vV)("Rubicon: bidRequest undefined at index position:".concat(r),s,e);var d,l;return t},[]).sort((e,t)=>(t.cpm||0)-(e.cpm||0)),l=null===(i=e.component_auction_config)||void 0===i?void 0:i.map(e=>({config:e,bidId:e.bidId}));return l?{bids:d,paapi:l}:d},getUserSyncs:function(e,t,i,r,n){if(!E&&e.iframeEnabled){let e=(0,f.d)(i,r,n);return e=Object.keys(e).length?"?".concat((0,p.eP)(e)):"",E=!0,{type:"iframe",url:"https://".concat(h.syncHost||"eus",".rubiconproject.com/usync.html")+e}}}};function k(e,t){let i;return i=e.params.referrer?e.params.referrer:t.refererInfo.page,e.params.secure?i.replace(/^http:/i,"https:"):i}function w(e){const t=document.getElementById(e.adUnitCode);!function(e){const t=e.querySelector("div[id^='google_ads']");t&&t.style.setProperty("display","none")}(t),function(e){const t=e.querySelector("script[id^='sas_script']"),i=t&&t.nextSibling;i&&"iframe"===i.localName&&i.style.setProperty("display","none")}(t);const i=g(g({},{align:"center",position:"append",closeButton:!1,label:void 0,collapse:!0}),e.renderer.getConfig());e.renderer.push(()=>{window.MagniteApex.renderAd({width:e.width,height:e.height,vastUrl:e.vastUrl,placement:{attachTo:t,align:i.align,position:i.position},closeButton:i.closeButton,label:i.label,collapse:i.collapse})})}function I(e,t){let i=e.params;if(t===c.G_){let t=[];return i.video&&i.video.playerWidth&&i.video.playerHeight?t=[i.video.playerWidth,i.video.playerHeight]:Array.isArray((0,m.A)(e,"mediaTypes.video.playerSize"))&&1===e.mediaTypes.video.playerSize.length?t=e.mediaTypes.video.playerSize[0]:Array.isArray(e.sizes)&&e.sizes.length>0&&Array.isArray(e.sizes[0])&&e.sizes[0].length>1&&(t=e.sizes[0]),t}let r=[];return Array.isArray(i.sizes)?r=i.sizes:void 0!==(0,m.A)(e,"mediaTypes.banner.sizes")?r=R(e.mediaTypes.banner.sizes):Array.isArray(e.sizes)&&e.sizes.length>0?r=R(e.sizes):(0,p.JE)("Rubicon: no sizes are setup or found"),function(e){const t=[15,2,9];return e.sort((e,i)=>{const r=t.indexOf(e),n=t.indexOf(i);return r>-1||n>-1?-1===r?1:-1===n?-1:r-n:e-i})}(r)}function S(e,t,i){return r=>{var n;const o=Number(null===(n=r.ext)||void 0===n?void 0:n.segtax);var a;i.includes(o)&&(e["tg_".concat(t,".tax").concat(o)]=null===(a=r.segment)||void 0===a?void 0:a.map(e=>e.id).join(","))}}function R(e){return(0,p.kK)(e).reduce((e,t)=>{let i=parseInt(A[t],10);return i&&e.push(i),e},[])}function C(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=[];if(function(e){let t=void 0!==(0,m.A)(e,"mediaTypes.".concat(c.G_)),i=void 0!==(0,m.A)(e,"mediaTypes.".concat(c.D4)),r=void 0!==(0,m.A)(e,"params.bidonmultiformat"),n="object"!=typeof(0,m.A)(e,"params.video");return!(!t||!r)||(i&&n&&(t=!1),t&&n&&(0,v.J)(e,"params.video",{}),t)}(e)){if(-1===["outstream","instream"].indexOf((0,m.A)(e,"mediaTypes.".concat(c.G_,".context"))))return t&&(0,p.vV)("Rubicon: mediaTypes.video.context must be outstream or instream"),i;if(I(e,c.G_).length<2)return t&&(0,p.vV)("Rubicon: could not determine the playerSize of the video"),i;t&&(0,p.OG)("Rubicon: making video request for adUnit",e.adUnitCode),i.push(c.G_)}if(void 0!==(0,m.A)(e,"mediaTypes.".concat(c.s6))&&i.push(c.s6),void 0!==(0,m.A)(e,"mediaTypes.".concat(c.D4))){if(0===I(e,c.D4).length)return t&&(0,p.vV)("Rubicon: could not determine the sizes for banner request"),i;t&&(0,p.OG)("Rubicon: making banner request for adUnit",e.adUnitCode),i.push(c.D4)}return i}const T=()=>_={};function z(e){let t=!1;const i=["asi","sid","hp"];return e.nodes?(t=e.nodes.reduce((e,t)=>e?i.every(e=>t.hasOwnProperty(e)):e,!0),t||(0,p.vV)("Rubicon: required schain params missing"),t):t}function D(e,t){return"rp_schain"===e?"rp_schain=".concat(t):"".concat(e,"=").concat(encodeURIComponent(t))}var E=!1;(0,s.a$)(O),(0,n.E)("rubiconBidAdapter")}},e=>{e.O(0,[802,1085,8498,7247,7618,6550],()=>{return t=1674,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[1613],{1473(n,e,i){var o=i(7873),c=i(3272),t=i(1445),s=i(1069),a=i(433),r=i(3172),h=i(1e3);const d="Invalid schain object found: ",f=" should be a string",u=" should be an Integer",l=" should be an object",g={STRICT:"strict",RELAXED:"relaxed",OFF:"off"},b=[];function O(n,e){let i=g.STRICT;if(function(n){return!(void 0===n||!(0,s.Qd)(n)&&((0,s.vV)(d+"the following schain config will not be used as schain is not an object.",n),1))}(n)){if((0,s.O8)(n.validation)&&-1!=b.indexOf(n.validation)&&(i=n.validation),i===g.OFF)return n.config;if(function(n,e){let i="Detected something wrong within an schain config:",o="";function c(n){o+="\n"+n}function t(){!0===e?(0,s.vV)(i,n,o):(0,s.JE)(i,n,o)}if(!(0,s.Qd)(n)&&(c("schain.config"+l),t(),e))return!1;if((0,s.Et)(n.complete)&&(0,s.Fq)(n.complete)||c("schain.config.complete"+u),(0,s.O8)(n.ver)||c("schain.config.ver"+f),n.hasOwnProperty("ext")&&((0,s.Qd)(n.ext)||c("schain.config.ext"+l)),(0,s.cy)(n.nodes))n.nodes.forEach((n,e)=>{(0,s.O8)(n.asi)||c("schain.config.nodes[".concat(e,"].asi")+f),(0,s.O8)(n.sid)||c("schain.config.nodes[".concat(e,"].sid")+f),(0,s.Et)(n.hp)&&(0,s.Fq)(n.hp)||c("schain.config.nodes[".concat(e,"].hp")+u),n.hasOwnProperty("rid")&&((0,s.O8)(n.rid)||c("schain.config.nodes[".concat(e,"].rid")+f)),n.hasOwnProperty("name")&&((0,s.O8)(n.name)||c("schain.config.nodes[".concat(e,"].name")+f)),n.hasOwnProperty("domain")&&((0,s.O8)(n.domain)||c("schain.config.nodes[".concat(e,"].domain")+f)),n.hasOwnProperty("ext")&&((0,s.Qd)(n.ext)||c("schain.config.nodes[".concat(e,"].ext")+l))});else if(c("schain.config.nodes should be an Array"),t(),e)return!1;return!(o.length>0&&(t(),e))}(n.config,!(i!==g.STRICT)))return n.config;(0,s.vV)(d+"due to the 'strict' validation setting, this schain config will not be passed to bidder '".concat(e,"'.  See above error for details."))}return null}function p(n,e){const i=c.$W.getConfig("schain"),o=c.$W.getBidderConfig();e.forEach(n=>{let e=n.bidderCode,c=function(n){return o[n]&&o[n].schain||i}(e);n.bids.forEach(n=>{let i=O(c,e);i&&(n.schain=(0,s.Go)(i))})}),n(e)}(0,s.bu)(g,n=>b.push(n)),t.Ay.makeBidRequests.after(p),(0,h.pS)({type:h.S3,name:"sourceExtSchain",fn:function(n,e,i){if(!(0,a.A)(n,"source.ext.schain")){const e=(0,a.A)(i,"bidRequests.0.schain");e&&(0,r.J)(n,"source.ext.schain",e)}}}),(0,o.E)("schain")}},n=>{n.O(0,[802,1085],()=>{return e=1473,n(n.s=e);var e});n.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[5496],{5862(e,o,t){var n=t(7873),d=t(1069),r=t(9214),i=t(6916),u=t(2938),a=t(5569),c=t(2339);const l=(0,u.vM)({moduleType:a.fW,moduleName:"sharedId"}),s="cookie",m="html5",f="_pubcid_optout",p="PublisherCommonId";function g(e,o){if(o===s)return l.getCookie(e);if(o===m&&l.hasLocalStorage()){const o=l.getDataFromLocalStorage("".concat(e,"_exp"));if(!o)return l.getDataFromLocalStorage(e);if(new Date(o).getTime()-Date.now()>0)return l.getDataFromLocalStorage(e)}}function b(e,o){return function(t,n){o?v(o,e,()=>{t(n()||e)})():t(e)}}function v(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0;if(!e)return;const n=(0,d.Dl)(e);n.search.id=encodeURIComponent("pubcid:"+o);const r=(0,d.c$)(n);return function(){(0,d.z$)(r,t)}}function h(){return!!(l.cookiesAreEnabled()&&g(f,s)||l.hasLocalStorage()&&g(f,m))}const I={name:"sharedId",aliasName:"pubCommonId",gvlid:i.B1,decode(e,o){if(h())return void(0,d.fH)("PubCommonId decode: Has opted-out");(0,d.fH)(" Decoded value PubCommonId "+e);return{pubcid:e}},getId:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>2?arguments[2]:void 0;if(h())return void(0,d.fH)("PubCommonId: Has opted-out");if(i.et.getCoppa())return void(0,d.fH)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId");const{params:{create:t=!0,pixelUrl:n}={}}=e;let r=o;if(!r){try{"object"==typeof window[p]&&(r=window[p].getId())}catch(e){}r||(r=t&&(0,d.N9)()?(0,d.lk)():void 0)}return{id:r,callback:b(r,n)}},extendId:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>2?arguments[2]:void 0;if(h())return(0,d.fH)("PubCommonId: Has opted-out"),{id:void 0};if(i.et.getCoppa())return void(0,d.fH)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId");const{params:{extend:t=!1,pixelUrl:n}={}}=e;if(t){if(n){return{callback:v(n,o)}}return{id:o}}},domainOverride:(0,c.w)(l,"sharedId"),eids:{pubcid:{source:"pubcid.org",atype:1}}};(0,r.bz)("userId",I),(0,n.E)("sharedIdSystem")}},e=>{e.O(0,[802,1085,2764],()=>{return o=5862,e(e.s=o);var o});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[89],{5745(e,t,r){var o=r(4705),n=r(7873),i=r(9115),a=r(3272),d=r(1371),l=r(1069),s=r(433);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,o.A)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const c="https://btlr.sharethrough.com/universal/v1?supply_id=".concat("WYu2BXv1"),v={getProtocol:function(){return window.location.protocol}},b={code:"sharethrough",supportedMediaTypes:[d.G_,d.D4],gvlid:80,isBidRequestValid:e=>!!e.params.pkey,buildRequests:(e,t)=>{var r,o,n,i,d,p;const b=t.timeout,y=t.ortb2||{},h=v.getProtocol().indexOf("http")<0||v.getProtocol().indexOf("https")>-1,f={id:(0,l.lk)(),at:1,cur:["USD"],tmax:b,site:u({domain:(0,s.A)(t,"refererInfo.domain",window.location.hostname),page:(0,s.A)(t,"refererInfo.page",window.location.href),ref:(0,s.A)(t,"refererInfo.ref")},y.site),device:{ua:navigator.userAgent,language:navigator.language,js:1,dnt:"1"===navigator.doNotTrack?1:0,h:window.screen.height,w:window.screen.width,ext:{}},regs:{coppa:!0===a.$W.getConfig("coppa")?1:0,ext:{}},source:{tid:null===(r=t.ortb2)||void 0===r||null===(r=r.source)||void 0===r?void 0:r.tid,ext:{version:"9.18.0",str:"4.3.0",schain:e[0].schain}},bcat:(0,s.A)(t.ortb2,"bcat")||e[0].params.bcat||[],badv:(0,s.A)(t.ortb2,"badv")||e[0].params.badv||[],test:0};if(null!==(o=t.ortb2)&&void 0!==o&&null!==(o=o.device)&&void 0!==o&&null!==(o=o.ext)&&void 0!==o&&o.cdep&&(f.device.ext.cdep=t.ortb2.device.ext.cdep),null!=t&&null!==(n=t.ortb2)&&void 0!==n&&n.device&&(0,l.D9)(f.device,t.ortb2.device),f.user=m(y.user,{}),f.user.ext||(f.user.ext={}),f.user.ext.eids=e[0].userIdAsEids||[],t.gdprConsent){const e=!0===t.gdprConsent.gdprApplies;f.regs.ext.gdpr=e?1:0,e&&(f.user.ext.consent=t.gdprConsent.consentString)}t.uspConsent&&(f.regs.ext.us_privacy=t.uspConsent),null!=t&&null!==(i=t.gppConsent)&&void 0!==i&&i.gppString?(f.regs.gpp=t.gppConsent.gppString,f.regs.gpp_sid=t.gppConsent.applicableSections):null!=t&&null!==(d=t.ortb2)&&void 0!==d&&null!==(d=d.regs)&&void 0!==d&&d.gpp&&(f.regs.ext.gpp=t.ortb2.regs.gpp,f.regs.ext.gpp_sid=t.ortb2.regs.gpp_sid),null!=t&&null!==(p=t.ortb2)&&void 0!==p&&null!==(p=p.regs)&&void 0!==p&&null!==(p=p.ext)&&void 0!==p&&p.dsa&&(f.regs.ext.dsa=t.ortb2.regs.ext.dsa);return e.map(e=>{var r;const o={ext:{}},n=(0,s.A)(e,"ortb2Imp.ext.tid");n&&(o.ext.tid=n);const i=(0,s.A)(e,"ortb2Imp.ext.gpid")||(0,s.A)(e,"ortb2Imp.ext.data.pbadslot");i&&(o.ext.gpid=i);const a=(0,s.A)(e,"mediaTypes.video");if(null!==(r=t.paapi)&&void 0!==r&&r.enabled&&e.mediaTypes.banner&&(0,l.D9)(o,{ext:{ae:1}}),a){let[e,t]=[640,360];a.playerSize&&a.playerSize[0]&&a.playerSize[0][0]&&a.playerSize[0][1]&&([e,t]=a.playerSize[0]);const r=(e,t,r)=>{if(["api","battr","mimes","playbackmethod","protocols"].includes(e)){if((!Array.isArray(t[e])||0===t[e].length)&&t[e])return void(0,l.JE)("".concat("Sharethrough:",' Invalid video request property: "').concat(e,'" must be an array with at least 1 entry.  Value supplied: "').concat(t[e],'".  This will not be added to the bid request.'))}t[e]&&(r.video[e]=t[e])};o.video={pos:m(a.pos,0),topframe:(0,l.al)()?0:1,w:e,h:t};["api","battr","companionad","companiontype","delivery","linearity","maxduration","mimes","minduration","placement","playbackmethod","plcmt","protocols","skip","skipafter","skipmin","startdelay"].forEach(e=>{r(e,a,o)})}else{o.banner={pos:(0,s.A)(e,"mediaTypes.banner.pos",0),topframe:(0,l.al)()?0:1,format:e.sizes.map(e=>({w:+e[0],h:+e[1]}))};const t=(0,s.A)(e,"mediaTypes.banner.battr",null)||(0,s.A)(e,"ortb2Imp.banner.battr");t&&(o.banner.battr=t)}return u({id:e.bidId,tagid:String(e.params.pkey),secure:h?1:0,bidfloor:g(e)},o)}).filter(e=>!!e).map(e=>({method:"POST",url:c,data:u(u({},f),{},{imp:[e]})}))},interpretResponse:(e,t)=>{var r;let{body:o}=e;if(!o||!o.seatbid||0===o.seatbid.length||!o.seatbid[0].bid||0===o.seatbid[0].bid.length)return[];const n=null===(r=o.ext)||void 0===r?void 0:r.auctionConfigs,i=o.seatbid[0].bid.map(e=>{var r,n,i,a,l,s,p,u,c,v,b,g,m;const y={requestId:e.impid,width:+e.w,height:+e.h,cpm:+e.price,creativeId:e.crid,dealId:e.dealid||null,mediaType:t.data.imp[0].video?d.G_:d.D4,currency:o.cur||"USD",netRevenue:!0,ttl:360,ad:e.adm,nurl:e.nurl,meta:{advertiserDomains:e.adomain||[],networkId:(null===(r=e.ext)||void 0===r?void 0:r.networkId)||null,networkName:(null===(n=e.ext)||void 0===n?void 0:n.networkName)||null,agencyId:(null===(i=e.ext)||void 0===i?void 0:i.agencyId)||null,agencyName:(null===(a=e.ext)||void 0===a?void 0:a.agencyName)||null,advertiserId:(null===(l=e.ext)||void 0===l?void 0:l.advertiserId)||null,advertiserName:(null===(s=e.ext)||void 0===s?void 0:s.advertiserName)||null,brandId:(null===(p=e.ext)||void 0===p?void 0:p.brandId)||null,brandName:(null===(u=e.ext)||void 0===u?void 0:u.brandName)||null,demandSource:(null===(c=e.ext)||void 0===c?void 0:c.demandSource)||null,dchain:(null===(v=e.ext)||void 0===v?void 0:v.dchain)||null,primaryCatId:(null===(b=e.ext)||void 0===b?void 0:b.primaryCatId)||null,secondaryCatIds:(null===(g=e.ext)||void 0===g?void 0:g.secondaryCatIds)||null,mediaType:(null===(m=e.ext)||void 0===m?void 0:m.mediaType)||null}};return y.mediaType===d.G_&&(y.ttl=3600,y.vastXml=e.adm),y});var a;return n?{bids:i,paapi:(null===(a=o.ext)||void 0===a?void 0:a.auctionConfigs)||{}}:i},getUserSyncs:(e,t)=>e.pixelEnabled&&void 0!==(0,s.A)(t,"0.body.cookieSyncUrls")?t[0].body.cookieSyncUrls.map(e=>({type:"image",url:e})):[],onTimeout:e=>{},onBidWon:e=>{},onSetTargeting:e=>{}};function g(e){let t=null;if("function"==typeof e.getFloor){const r=e.getFloor({currency:"USD",mediaType:e.mediaTypes&&e.mediaTypes.video?"video":"banner",size:e.sizes.map(e=>({w:e[0],h:e[1]}))});"object"!=typeof r||"USD"!==r.currency||isNaN(parseFloat(r.floor))||(t=parseFloat(r.floor))}return null!==t?t:e.params.floor}function m(e,t){return null==e?t:e}(0,i.a$)(b),(0,n.E)("sharethroughBidAdapter")}},e=>{e.O(0,[802,1085],()=>{return t=5745,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[1606],{2090(e,i,n){var t=n(7873),a=n(1069),o=n(5901),r=n(9214),d=n(9671);const c={checkBidderSizeConfigFormat:function(e){let i=!0;Array.isArray(e)&&e.length>0?e.forEach(e=>{const n=Object.keys(e);i=!!((0,o.mK)(n,"minViewPort")&&(0,o.mK)(n,"relevantMediaTypes")&&(0,a.Uu)(e.minViewPort,2)&&Array.isArray(e.relevantMediaTypes)&&e.relevantMediaTypes.length>0&&(e.relevantMediaTypes.length>1?e.relevantMediaTypes.every(e=>(0,o.mK)(["banner","video","native"],e)):["none","banner","video","native"].indexOf(e.relevantMediaTypes[0])>-1))&&(i&&!0)}):i=!1;return i},getActiveSizeBucket:p,getFilteredMediaTypes:function(e){let i,n,t;t=(0,a.Go)(e);let o={banner:void 0,video:void 0,native:void 0};try{i=(0,a.mb)().innerWidth,n=(0,a.mb)().innerHeight}catch(e){(0,a.JE)("SizeMappingv2:: Unfriendly iframe blocks viewport size to be evaluated correctly"),i=window.innerWidth,n=window.innerHeight}const r=[i,n];Object.keys(e).map(i=>{const n=e[i].sizeConfig;if(n){o[i]=p(n,r);const a=n.filter(e=>e.minViewPort===o[i]&&function(e,i){switch(e){case"banner":return i.sizes&&i.sizes.length>0&&i.sizes[0].length>0;case"video":return i.playerSize&&i.playerSize.length>0&&i.playerSize[0].length>0;case"native":return i.active;default:return!1}}(i,e));t[i]=Object.assign({filteredSizeConfig:a},e[i]);const d={banner:"sizes",video:"playerSize"};t[i].filteredSizeConfig.length>0?"native"!==i&&(t[i][d[i]]=t[i].filteredSizeConfig[0][d[i]]):delete t[i]}});return{sizeBucketToSizeMap:Object.keys(o).filter(e=>void 0!==o[e]).reduce((e,i)=>(e[i]={activeSizeBucket:o[i],activeSizeDimensions:"banner"===i?t.banner?t.banner.sizes:[]:"video"===i?t.video?t.video.playerSize:[]:"NA"},e),{}),activeViewport:r,transformedMediaTypes:t}},getAdUnitDetail:function(e,i,n){const t=c.isLabelActivated(e,i,e.code,n),{sizeBucketToSizeMap:o,activeViewport:r,transformedMediaTypes:d}=t&&c.getFilteredMediaTypes(e.mediaTypes);return t&&(0,a.fH)("Size Mapping V2:: Ad Unit: ".concat(e.code,"(").concat(n,") => Active size buckets after filtration: "),o),{activeViewport:r,transformedMediaTypes:d,isLabelActivated:t}},getRelevantMediaTypesForBidder:function(e,i){const n=new Set;if(c.checkBidderSizeConfigFormat(e)){const t=c.getActiveSizeBucket(e,i);e.filter(e=>e.minViewPort===t)[0].relevantMediaTypes.forEach(e=>n.add(e))}return n},isLabelActivated:function(e,i,n,t){let r;const d=Object.keys(e).filter(e=>"labelAny"===e||"labelAll"===e);d&&d.length>1&&(0,a.JE)("Size Mapping V2:: ".concat(e.code?"Ad Unit: ".concat(e.code,"(").concat(t,") => Ad unit has multiple label operators. Using the first declared operator: ").concat(d[0]):"Ad Unit: ".concat(n,"(").concat(t,"), Bidder: ").concat(e.bidder," => Bidder has multiple label operators. Using the first declared operator: ").concat(d[0])));if(r=d[0],r&&!i)return(0,a.JE)("Size Mapping V2:: ".concat(e.code?"Ad Unit: ".concat(e.code,"(").concat(t,") => Found '").concat(r,"' on ad unit, but 'labels' is not set. Did you pass 'labels' to pbjs.requestBids() ?"):"Ad Unit: ".concat(n,"(").concat(t,"), Bidder: ").concat(e.bidder," => Found '").concat(r,"' on bidder, but 'labels' is not set. Did you pass 'labels' to pbjs.requestBids() ?"))),!0;if("labelAll"===r&&Array.isArray(e[r]))return 0===e.labelAll.length?((0,a.JE)("Size Mapping V2:: Ad Unit: ".concat(e.code,"(").concat(t,") => Ad unit has declared property 'labelAll' with an empty array.")),!0):e.labelAll.every(e=>(0,o.mK)(i,e));if("labelAny"===r&&Array.isArray(e[r]))return 0===e.labelAny.length?((0,a.JE)("Size Mapping V2:: Ad Unit: ".concat(e.code,"(").concat(t,") => Ad unit has declared property 'labelAny' with an empty array.")),!0):e.labelAny.some(e=>(0,o.mK)(i,e));return!0}},s=new WeakMap;function l(e){return!!e.find(e=>{if(s.has(e))return s.get(e);if(e.mediaTypes){for(let i of Object.keys(e.mediaTypes))if(e.mediaTypes[i].sizeConfig)return s.set(e,!0),!0;for(let i of e.bids&&(0,a.cy)(e.bids)?e.bids:[])if(i.sizeConfig)return s.set(e,!0),!0;return s.set(e,!1),!1}})}function p(e,i){let n=[];return e.sort((e,i)=>e.minViewPort[0]-i.minViewPort[0]).forEach(e=>{i[0]>=e.minViewPort[0]&&(n=i[1]>=e.minViewPort[1]?e.minViewPort:[])}),n}(0,r.Yn)("checkAdUnitSetup").before(function(e,i){return l(i)?(i=function(e){const i=function(e,i,n){let t=!0;const r={banner:"sizes",video:"playerSize",native:"active"}[e],c={banner:"Removing mediaTypes.banner from ad unit.",video:"Removing mediaTypes.video.sizeConfig from ad unit.",native:"Removing mediaTypes.native.sizeConfig from ad unit."};return Array.isArray(i)?(i.forEach((i,s)=>{const l=Object.keys(i);if(!(0,o.mK)(l,"minViewPort")||!(0,o.mK)(l,r))return(0,a.vV)("Ad unit ".concat(n,": Missing required property 'minViewPort' or 'sizes' from 'mediaTypes.").concat(e,".sizeConfig[").concat(s,"]'. ").concat(c[e])),void(t=!1);if(!(0,a.Uu)(i.minViewPort,2))return(0,a.vV)("Ad unit ".concat(n,": Invalid declaration of 'minViewPort' in 'mediaTypes.").concat(e,".sizeConfig[").concat(s,"]'. ").concat(c[e])),void(t=!1);if("banner"===e||"video"===e){let o=!1;if(Array.isArray(i[r])){const e=d.WH.validateSizes(i[r]);i[r].length>0&&0===e.length&&(t=!1,o=!0)}else t=!1,o=!0;if(o)return void(0,a.vV)("Ad unit ".concat(n,": Invalid declaration of '").concat(r,"' in 'mediaTypes.").concat(e,".sizeConfig[").concat(s,"]'. ").concat(c[e]))}"native"===e&&"boolean"!=typeof i[r]&&((0,a.vV)("Ad unit ".concat(n,": Invalid declaration of 'active' in 'mediaTypes.").concat(e,".sizeConfig[").concat(s,"]'. ").concat(c[e])),t=!1)}),t):((0,a.vV)("Ad unit ".concat(n,": Invalid declaration of 'sizeConfig' in 'mediaTypes.").concat(e,".sizeConfig'. ").concat(c[e])),t=!1,t)},n=[];return e.forEach(e=>{if(null==(e=d.WH.validateAdUnit(e)))return;const t=e.mediaTypes;let o,r,c;t.banner&&(t.banner.sizes?o=d.WH.validateBannerMediaType(e):t.banner.sizeConfig?(o=(0,a.Go)(e),i("banner",t.banner.sizeConfig,e.code)?o.mediaTypes.banner.sizeConfig.forEach(e=>{Array.isArray(e.sizes[0])||(e.sizes=[e.sizes])}):delete o.mediaTypes.banner):((0,a.vV)("Ad unit ".concat(e.code,": 'mediaTypes.banner' does not contain either 'sizes' or 'sizeConfig' property. Removing 'mediaTypes.banner' from ad unit.")),o=(0,a.Go)(e),delete o.mediaTypes.banner)),t.video&&(t.video.playerSize?r=o?d.WH.validateVideoMediaType(o):d.WH.validateVideoMediaType(e):t.video.sizeConfig&&(r=o||(0,a.Go)(e),i("video",t.video.sizeConfig,e.code)?r.mediaTypes.video.sizeConfig.forEach(e=>{Array.isArray(e.playerSize[0])||(e.playerSize=[e.playerSize])}):delete r.mediaTypes.video.sizeConfig)),t.native&&(c=r?d.WH.validateNativeMediaType(r):o?d.WH.validateNativeMediaType(o):d.WH.validateNativeMediaType(e),t.native.sizeConfig)&&(i("native",t.native.sizeConfig,e.code)||delete c.mediaTypes.native.sizeConfig);const s=Object.assign({},o,r,c);n.push(s)}),n}(i),e.bail(i)):e.call(this,i)}),(0,r.Yn)("setupAdUnitMediaTypes").before(function(e,i,n){return l(i)?e.bail(function(e,i){const n={};return e.reduce((e,t)=>{const o=(n.hasOwnProperty(t.code)||(n[t.code]=1),n[t.code]++);if(t.mediaTypes&&(0,a.wD)(t.mediaTypes)){const{activeViewport:n,transformedMediaTypes:r,isLabelActivated:d}=c.getAdUnitDetail(t,i,o);d?0===Object.keys(r).length?(0,a.fH)("Size Mapping V2:: Ad Unit: ".concat(t.code,"(").concat(o,") => Ad unit disabled since there are no active media types after sizeConfig filtration.")):(t.mediaTypes=r,t.bids=t.bids.reduce((e,d)=>{if(c.isLabelActivated(d,i,t.code,o))if(d.sizeConfig){const i=c.getRelevantMediaTypesForBidder(d.sizeConfig,n);if(0===i.size)(0,a.vV)("Size Mapping V2:: Ad Unit: ".concat(t.code,"(").concat(o,"), Bidder: ").concat(d.bidder," => 'sizeConfig' is not configured properly. This bidder won't be eligible for sizeConfig checks and will remain active.")),e.push(d);else if(i.has("none"))(0,a.fH)("Size Mapping V2:: Ad Unit: ".concat(t.code,"(").concat(o,"), Bidder: ").concat(d.bidder," => 'relevantMediaTypes' is set to 'none' in sizeConfig for current viewport size. This bidder is disabled."));else{let n=!1;const c=Object.fromEntries(Object.entries(r).filter(e=>{let[t,a]=e;return!!i.has(t)||(n=!0,!1)}));Object.keys(c).length>0?(n&&(d.mediaTypes=c),e.push(d)):(0,a.fH)("Size Mapping V2:: Ad Unit: ".concat(t.code,"(").concat(o,"), Bidder: ").concat(d.bidder," => 'relevantMediaTypes' does not match with any of the active mediaTypes at the Ad Unit level. This bidder is disabled."))}}else e.push(d);else(0,a.fH)("Size Mapping V2:: Ad Unit: ".concat(t.code,"(").concat(o,"), Bidder: ").concat(d.bidder," => Label check for this bidder has failed. This bidder is disabled."));return e},[]),e.push(t)):(0,a.fH)("Size Mapping V2:: Ad Unit: ".concat(t.code,"(").concat(o,") => Ad unit is disabled due to failing label check."))}else(0,a.JE)("Size Mapping V2:: Ad Unit: ".concat(t.code," => Ad unit has declared invalid 'mediaTypes' or has not declared a 'mediaTypes' property"));return e},[])}(i,n)):e.call(this,i,n)}),(0,t.E)("sizeMappingV2")}},e=>{e.O(0,[802,1085],()=>{return i=2090,e(e.s=i);var i});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[4026],{8518(e,t,r){var a=r(4705),o=r(7873),i=r(1069),n=r(433),s=r(1371),d=r(3272),p=r(6036),l=r(9115);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){(0,a.A)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const m={code:"smartadserver",gvlid:45,aliases:["smart"],supportedMediaTypes:[s.D4,s.G_],isBidRequestValid:function(e){return!!(e.params&&e.params.siteId&&e.params.pageId&&e.params.formatId)},serializeSupplyChain:function(e){if(!e||!e.nodes)return null;const t=["asi","sid","hp","rid","name","domain"];return"".concat(e.ver,",").concat(e.complete,"!")+e.nodes.map(e=>t.map(t=>e[t]?encodeURIComponent(e[t]):"").join(",")).join("!")},adaptBannerSizes:function(e){return e.map(e=>({w:e[0],h:e[1]}))},fillPayloadForVideoBidRequest:function(e,t,r){const a=t.playerSize[0],o={maxbitrate:"vbrmax",maxduration:"vdmax",minbitrate:"vbrmin",minduration:"vdmin",placement:"vpt",plcmt:"vplcmt",skip:"skip"};e.mediaType=s.G_,e.isVideo="instream"===t.context,e.videoData={};for(const[r,a]of Object.entries(o))e.videoData=u(u({},e.videoData),this.getValuableProperty(a,t[r]));e.videoData=u(u(u(u(u(u(u({},e.videoData),this.getValuableProperty("playerWidth",a[0])),this.getValuableProperty("playerHeight",a[1])),this.getValuableProperty("adBreak",this.getStartDelayForVideoBidRequest(t,r))),this.getValuableProperty("videoProtocol",this.getProtocolForVideoBidRequest(t,r))),(0,i.Uu)(t.api)&&t.api.length?{iabframeworks:t.api.toString()}:{}),(0,i.Uu)(t.playbackmethod)&&t.playbackmethod.length?{vpmt:t.playbackmethod}:{})},getValuableProperty:function(e,t){return"string"==typeof e&&(0,i.Fq)(t)&&t?{[e]:t}:{}},getProtocolForVideoBidRequest:function(e,t){return void 0!==t&&t.protocol?t.protocol:void 0!==e&&Array.isArray(e.protocols)?Math.max.apply(Math,e.protocols):null},getStartDelayForVideoBidRequest:function(e,t){if(null!=t&&t.startDelay)return t.startDelay;if(null!=e&&e.startdelay){if(e.startdelay>0||-1==e.startdelay)return 2;if(-2==e.startdelay)return 3}return 1},createServerRequest:function(e,t){return{method:"POST",url:(void 0!==t?t:"https://prg.smartadserver.com")+"/prebid/v1",data:JSON.stringify(e),options:{browsingTopics:!1}}},buildRequests:function(e,t){const r=d.$W.getConfig("currency.adServerCurrency"),a=(0,n.A)(t,"ortb2.user.data",d.$W.getAnyConfig("ortb2.user.data")),o=(0,n.A)(t,"ortb2.site.content.data",d.$W.getAnyConfig("ortb2.site.content.data"));return e.reduce((e,l)=>{var c;let u={siteid:l.params.siteId,pageid:l.params.pageId,formatid:l.params.formatId,currencyCode:r,targeting:l.params.target&&""!==l.params.target?l.params.target:void 0,buid:l.params.buId&&""!==l.params.buId?l.params.buId:void 0,appname:l.params.appName&&""!==l.params.appName?l.params.appName:void 0,ckid:l.params.ckId||0,tagId:l.adUnitCode,pageDomain:t&&t.refererInfo&&t.refererInfo.page?t.refererInfo.page:void 0,transactionId:null===(c=l.ortb2Imp)||void 0===c||null===(c=c.ext)||void 0===c?void 0:c.tid,timeout:d.$W.getConfig("bidderTimeout"),bidId:l.bidId,prebidVersion:"9.18.0",schain:m.serializeSupplyChain(l.schain),sda:a,sdc:o};const g=(0,n.A)(l,"ortb2Imp.ext.gpid")||(0,n.A)(l,"ortb2Imp.ext.data.pbadslot");g&&(u.gpid=g);const y=(0,n.A)(l,"ortb2.regs.ext.dsa");y&&(u.dsa=y),t&&(t.gdprConsent&&(u.addtl_consent=t.gdprConsent.addtlConsent,u.gdpr_consent=t.gdprConsent.consentString,u.gdpr=t.gdprConsent.gdprApplies),t.gppConsent&&(u.gpp=t.gppConsent.gppString,u.gpp_sid=t.gppConsent.applicableSections),t.uspConsent&&(u.us_privacy=t.uspConsent)),l&&l.userIdAsEids&&(u.eids=l.userIdAsEids),t&&t.uspConsent&&(u.us_privacy=t.uspConsent);const b=(0,n.A)(l,"mediaTypes.banner"),f=(0,n.A)(l,"mediaTypes.video"),v=f&&("instream"===f.context||"outstream"===f.context);if(b||v){let t;if(b){if(t=s.D4,u.sizes=m.adaptBannerSizes(b.sizes),v){let t=(0,i.Go)(u);m.fillPayloadForVideoBidRequest(t,f,l.params.video),t.bidfloor=l.params.bidfloor||(0,p.M)(l,r,s.G_),e.push(m.createServerRequest(t,l.params.domain))}}else t=s.G_,m.fillPayloadForVideoBidRequest(u,f,l.params.video);u.bidfloor=l.params.bidfloor||(0,p.M)(l,r,t),e.push(m.createServerRequest(u,l.params.domain))}else e.push({});return e},[])},interpretResponse:function(e,t){const r=[];let a=e.body;try{if(a&&!a.isNoAd&&(a.ad||a.adUrl)){const e=JSON.parse(t.data);let o={requestId:e.bidId,cpm:a.cpm,width:a.width,height:a.height,creativeId:a.creativeId,dealId:a.dealId,currency:a.currency,netRevenue:a.isNetCpm,ttl:a.ttl,dspPixels:a.dspPixels,meta:u(u({},(0,i.cy)(a.adomain)&&!(0,i.Im)(a.adomain)?{advertiserDomains:a.adomain}:{}),(0,i.Im)(a.dsa)?{}:{dsa:a.dsa})};e.mediaType===s.G_?(o.mediaType=s.G_,o.vastUrl=a.adUrl,o.vastXml=a.ad,o.content=a.ad):(o.adUrl=a.adUrl,o.ad=a.ad),r.push(o)}}catch(e){(0,i.vV)("Error while parsing smart server response",e)}return r},getUserSyncs:function(e,t){const r=[];return e.iframeEnabled&&t.length>0&&null!=t[0].body.cSyncUrl?r.push({type:"iframe",url:t[0].body.cSyncUrl}):e.pixelEnabled&&t.length>0&&void 0!==t[0].body.dspPixels&&t[0].body.dspPixels.forEach(function(e){r.push({type:"image",url:e})}),r}};(0,l.a$)(m),(0,o.E)("smartadserverBidAdapter")}},e=>{e.O(0,[802,1085,467],()=>{return t=8518,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[2094],{290(e,t,r){var n=r(4705),i=r(7873),o=r(1069),a=r(433),s=r(5789),d=r(3272),c=r(9115),p=r(1371),l=r(3895),u=r(848),m=r(2449);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){(0,n.A)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const y={code:"smilewanted",gvlid:639,aliases:["smile","sw"],supportedMediaTypes:[p.D4,p.G_,p.s6],isBidRequestValid:function(e){if(!e.params||!e.params.zoneId)return!1;if((0,a.A)(e,"mediaTypes.video")){const t=(0,a.A)(e,"mediaTypes.video",{}),r=(0,a.A)(e,"params.video",{}),n=v(v({},t),r);if(!n.context||![l.mn,l.H6].includes(n.context))return!1}return!0},buildRequests:function(e,t){return(e=(0,m.Xj)(e)).map(e=>{var r;const n={zoneId:e.params.zoneId,currencyCode:d.$W.getConfig("currency.adServerCurrency")||"EUR",tagId:e.adUnitCode,sizes:e.sizes.map(e=>({w:e[0],h:e[1]})),transactionId:null===(r=e.ortb2Imp)||void 0===r||null===(r=r.ext)||void 0===r?void 0:r.tid,timeout:null==t?void 0:t.timeout,bidId:e.bidId,positionType:e.params.positionType||"",prebidVersion:"9.18.0",schain:(0,u.v)(e.schain,["asi","sid","hp","rid","name","domain","ext"])},i=function(e){if((0,o.fp)(e.getFloor)){const t=e.getFloor({currency:"USD",mediaType:"banner",size:e.sizes.map(e=>({w:e[0],h:e[1]}))});if((0,o.Qd)(t)&&!isNaN(t.floor)&&"USD"===t.currency)return parseFloat(t.floor)}return null}(e);i&&(n.bidfloor=i),e.params.bidfloor&&(n.bidfloor=e.params.bidfloor),null!=t&&t.refererInfo&&(n.pageDomain=t.refererInfo.page||""),null!=t&&t.gdprConsent&&(n.gdpr_consent=t.gdprConsent.consentString,n.gdpr=t.gdprConsent.gdprApplies),n.eids=null==e?void 0:e.userIdAsEids;const s=(0,a.A)(e,"mediaTypes.video"),c=(0,a.A)(e,"mediaTypes.video.context");("video"===e.mediaType||s&&c===l.mn||s&&c===l.H6)&&(n.context=c,n.videoParams=(0,o.Go)(s));const p=(0,a.A)(e,"mediaTypes.native");if(p){n.context="native",n.nativeParams=p;let t=(0,a.A)(e,"mediaTypes.native.image.sizes",[]);if(t.length>0){const e=Array.isArray(t[0])?t[0]:t;n.width=e[0]||n.width,n.height=e[1]||n.height}}return{method:"POST",url:"https://prebid.smilewanted.com",data:JSON.stringify(n)}})},interpretResponse:function(e,t){if(!e.body)return[];const r=[];try{const i=e.body,a=JSON.parse(t.data);if(i){var n;const e=i.dealId||"",t={ad:i.ad,cpm:i.cpm,creativeId:i.creativeId,currency:i.currency,dealId:i.dealId,height:i.height,netRevenue:i.isNetCpm,requestId:a.bidId,ttl:i.ttl,width:i.width};if("video_instream"!==i.formatTypeSw&&"video_outstream"!==i.formatTypeSw||(t.mediaType="video",t.vastUrl=i.ad,t.ad=null,"video_outstream"===i.formatTypeSw&&(t.renderer=function(e,t){const r=s.A4.install({id:e.bidId,url:t.OustreamTemplateUrl,loaded:!1});try{r.setRender(h)}catch(e){(0,o.JE)("Prebid Error calling setRender on newRenderer",e)}return r}(a,i))),"native"===i.formatTypeSw){const e=JSON.parse(i.ad),r=(0,m.rn)(a.nativeParams);t.mediaType="native",t.native=(0,m.Ex)(e,r)}e.length>0&&(t.dealId=e),t.meta={},null!==(n=i.meta)&&void 0!==n&&n.advertiserDomains&&(0,o.cy)(i.meta.advertiserDomains)&&(t.meta.advertiserDomains=i.meta.advertiserDomains),r.push(t)}}catch(e){(0,o.vV)("Error while parsing smilewanted response",e)}return r},getUserSyncs:function(e,t,r,n){const i=[];if(e.iframeEnabled){let e=[];r&&"string"==typeof r.consentString&&("boolean"==typeof r.gdprApplies?e.push("gdpr=".concat(Number(r.gdprApplies),"&gdpr_consent=").concat(r.consentString)):e.push("gdpr_consent=".concat(r.consentString))),n&&e.push("us_privacy=".concat(encodeURIComponent(n)));const t=e.length>0?"?"+e.join("&"):"";i.push({type:"iframe",url:"https://csync.smilewanted.com"+t})}return i}};function h(e){e.renderer.push(()=>{window.SmileWantedOutStreamInit({width:e.width,height:e.height,vastUrl:e.vastUrl,elId:e.adUnitCode})})}(0,c.a$)(y),(0,i.E)("smilewantedBidAdapter")}},e=>{e.O(0,[802,1085,817],()=>{return t=290,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[8723],{2605(e,r,t){var i=t(4705),n=t(7873),s=t(1069),o=t(433),a=t(3172),p=t(9115),d=t(1371);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach(function(r){(0,i.A)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}const u=l(l({},t(11).Z),{},{placement:e=>(0,s.Fq)(e)&&e>=1&&e<=5,plcmt:e=>(0,s.Fq)(e)&&e>=1&&e<=4,delivery:e=>Array.isArray(e)&&e.every(e=>e>=1&&e<=3),pos:e=>(0,s.Fq)(e)&&e>=1&&e<=7}),m={context:e=>e!==d.LM,mimes:u.mimes,maxduration:u.maxduration,protocols:u.protocols},y={code:"sovrn",supportedMediaTypes:[d.D4,d.G_],gvlid:13,isBidRequestValid:function(e){var r;const t=null==e||null===(r=e.mediaTypes)||void 0===r?void 0:r.video;return!(!e.params.tagid||isNaN(parseFloat(e.params.tagid))||!isFinite(e.params.tagid)||t&&!Object.keys(m).every(e=>m[e](t[e])))},buildRequests:function(e,r){try{var t;let i,n,p,d,c=[];(0,s.bu)(e,function(e){var t,a;!p&&e.userIdAsEids&&(p=e.userIdAsEids,p.forEach(function(e){e.uids&&e.uids[0]&&"criteo.com"===e.source&&(d=e.uids[0].id)})),e.schain&&(n=n||e.schain),i=i||(0,s.u5)("iv",e.params);const m={adunitcode:e.adUnitCode,id:e.bidId,tagid:String((0,s.u5)("tagid",e.params)),bidfloor:g(e)};if((0,o.A)(e,"mediaTypes.banner")){let r=(0,o.A)(e,"mediaTypes.banner.sizes")||e.sizes;r=(0,s.cy)(r)&&(0,s.cy)(r[0])?r:[r],r=r.filter(e=>(0,s.cy)(e));const t=r.map(e=>({w:parseInt(e[0],10),h:parseInt(e[1],10)}));m.banner={format:t,w:1,h:1}}(0,o.A)(e,"mediaTypes.video")&&(m.video=function(e){const r={},t=(0,o.A)(e,"sizes"),i=(0,o.A)(e,"mediaTypes.video",{}),n=(0,o.A)(e,"params.video",{}),a={};if(t){const e=Array.isArray(t[0])?t[0]:t;a.w=e[0],a.h=e[1]}else if(Array.isArray(i.playerSize)){const e=Array.isArray(i.playerSize[0])?i.playerSize[0]:i.playerSize;a.w=e[0],a.h=e[1]}const p=l(l(l({},a),i),n);return Object.keys(u).forEach(e=>{p.hasOwnProperty(e)&&(u[e](p[e])?r[e]=p[e]:(0,s.JE)("The OpenRTB video param ".concat(e," has been skipped due to misformating. Please refer to OpenRTB 2.5 spec.")))}),r}(e)),m.ext=(0,s.u5)("ext",e.ortb2Imp)||void 0;const y=(0,s.u5)("segments",e.params);y&&(m.ext=m.ext||{},m.ext.deals=y.split(",").map(e=>e.trim()));const b=null==e||null===(t=e.ortb2Imp)||void 0===t||null===(t=t.ext)||void 0===t?void 0:t.ae;var f;null!==(a=r.paapi)&&void 0!==a&&a.enabled&&(0,s.Fq)(b)?(m.ext=m.ext||{},m.ext.ae=b):null!==(f=m.ext)&&void 0!==f&&f.ae&&delete m.ext.ae;c.push(m)});const m=r.ortb2||{},y=m.site||{};y.page=r.refererInfo.page,y.domain=r.refererInfo.domain;const b=(0,o.A)(r,"timeout"),f={id:(0,s.s0)(),imp:c,site:y,user:m.user||{},tmax:b};n&&(f.source={ext:{schain:n}});const v=(0,o.A)(r,"ortb2.source.tid");v&&(0,a.J)(f,"source.tid",v);(0,o.A)(r,"ortb2.regs.coppa")&&(0,a.J)(f,"regs.coppa",1),r.gdprConsent&&((0,a.J)(f,"regs.ext.gdpr",+r.gdprConsent.gdprApplies),(0,a.J)(f,"user.ext.consent",r.gdprConsent.consentString)),r.uspConsent&&(0,a.J)(f,"regs.ext.us_privacy",r.uspConsent),r.gppConsent&&((0,a.J)(f,"regs.gpp",r.gppConsent.gppString),(0,a.J)(f,"regs.gpp_sid",r.gppConsent.applicableSections)),null!=r&&null!==(t=r.ortb2)&&void 0!==t&&t.device&&(f.device=f.device||{},(0,s.D9)(f.device,r.ortb2.device)),p&&((0,a.J)(f,"user.ext.eids",p),d&&(0,a.J)(f,"user.ext.prebid_criteoid",d));let h="https://ap.lijit.com/rtb/bid?src=prebid_prebid_9.18.0";return i&&(h+="&iv=".concat(i)),{method:"POST",url:h,data:JSON.stringify(f),options:{contentType:"text/plain"}}}catch(e){(0,s.vV)("Could not build bidrequest, error deatils:",e)}},interpretResponse:function(e){let{body:{id:r,seatbid:t,ext:i}}=e;if(!r||!t||!Array.isArray(t))return[];try{let e=t.filter(e=>e).map(e=>e.bid.map(e=>{var r;const t={requestId:e.impid,cpm:parseFloat(e.price),width:parseInt(e.w),height:parseInt(e.h),creativeId:e.crid||e.id,dealId:e.dealid||null,currency:"USD",netRevenue:!0,mediaType:e.nurl?d.D4:d.G_,ttl:(null===(r=e.ext)||void 0===r?void 0:r.ttl)||90,meta:{advertiserDomains:e&&e.adomain?e.adomain:[]}};return e.nurl?t.ad=decodeURIComponent("".concat(e.adm,'<img src="').concat(e.nurl,'">')):t.vastXml=decodeURIComponent(e.adm),t})).flat(),r=null;if((0,s.cy)(null==i?void 0:i.igbid)){const e=i.seller,t=i.decisionLogicUrl,n=i.sellerTimeout;i.igbid.filter(e=>{return r=e,!(0,s.xQ)(r.impid)&&(0,s.cy)(r.igbuyer)&&r.igbuyer.length;var r}).forEach(i=>{const o={};i.igbuyer.filter(e=>{return r=e,!(0,s.xQ)(r.igdomain);var r}).forEach(e=>{o[e.igdomain]=e.buyerdata});const a=[...Object.keys(o)];a.length&&(r=r||{},r[i.impid]={seller:e,decisionLogicUrl:t,sellerTimeout:n,interestGroupBuyers:a,perBuyerSignals:o})})}return r?(r=Object.entries(r).map(e=>{let[r,t]=e;return{bidId:r,config:Object.assign({auctionSignals:{}},t)}}),{bids:e,paapi:r}):e}catch(e){return(0,s.vV)("Could not interpret bidresponse, error details:",e),e}},getUserSyncs:function(e,r,t,i,n){try{const s=[];if(r&&0!==r.length){if(e.iframeEnabled){const e=r.filter(e=>(0,o.A)(e,"body.ext.iid")).map(e=>e.body.ext.iid),a=[];t&&t.gdprApplies&&"string"==typeof t.consentString&&a.push(["gdpr_consent",t.consentString]),i&&a.push(["us_privacy",i]),n&&(a.push(["gpp",n.gppString]),a.push(["gpp_sid",n.applicableSections])),e[0]&&(a.push(["informer",e[0]]),s.push({type:"iframe",url:"https://ce.lijit.com/beacon?"+a.map(e=>e.join("=")).join("&")}))}e.pixelEnabled&&r.filter(e=>(0,o.A)(e,"body.ext.sync.pixels")).reduce((e,r)=>e.concat(r.body.ext.sync.pixels),[]).map(e=>e.url).forEach(e=>s.push({type:"image",url:e}))}return s}catch(e){return[]}}};function g(e){const r=e.getFloor&&"function"==typeof e.getFloor?e.getFloor({currency:"USD",mediaType:e.mediaTypes&&e.mediaTypes.banner?"banner":"video",size:"*"}):{},t=parseFloat(r.floor);if(!isNaN(t))return t;const i=parseFloat((0,s.u5)("bidfloor",e.params));return isNaN(i)?void 0:i}(0,p.a$)(y),(0,n.E)("sovrnBidAdapter")}},e=>{e.O(0,[802,1085,9498],()=>{return r=2605,e(e.s=r);var r});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[6015],{9293(e,t,n){var o=n(7873),i=n(1069),r=n(7934),c=n(9214),a=n(5555),s=n(3272),l=n(2938),d=n(5901),u=n(5139),g=n(6811),p=n(3441),f=n(5569);let m=!1,h=[];const b=(0,l.CK)("topicsFpd"),w="prebid:topics",v="lastUpdated",y={1:600,2:601,3:602,4:603};function E(e,t){return t.reduce((t,n)=>{const o=n[e];return t.hasOwnProperty(o)||(t[o]=[]),t[o].push(n),t},{})}function S(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;return Object.entries(E("taxonomyVersion",t)).filter(e=>{let[t]=e;return!!n.hasOwnProperty(t)||((0,i.JE)('Unrecognized taxonomyVersion from Topics API: "'.concat(t,'"; topic will be ignored')),!1)}).flatMap(t=>{let[o,i]=t;return Object.entries(E("modelVersion",i)).map(t=>{let[i,r]=t;const c={ext:{segtax:n[o],segclass:i},segment:r.map(e=>({id:e.topic.toString()}))};return null!=e&&(c.name=e),c})})}function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return"browsingTopics"in e&&e.featurePolicy.allowsFeature("browsing-topics")}const D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=null;try{O(e)&&(t=a.k.resolve(e.browsingTopics()))}catch(e){(0,i.vV)("Could not call topics API",e)}return null==t&&(t=a.k.resolve([])),t}().then(e=>S((0,r.EN)().domain,e));function C(e){if(e&&e.data)try{let t=(0,i.$l)(e.data);if((0,d.mK)(h,e.origin)&&t&&t.segment&&!(0,i.Im)(t.segment.topics)){const{domain:e,topics:n,bidder:o}=t.segment,i=S(e,n);i&&L(o,i)}}catch(e){}}function L(e,t){const n=new Map((0,i.$l)(b.getDataFromLocalStorage(w))),o={[v]:(new Date).getTime()};t.forEach(e=>{o[e.ext.segclass]=e}),n.set(e,o),b.setDataInLocalStorage(w,JSON.stringify([...n]))}function T(e,t){const n=(new Date).getTime();return Math.ceil((n-e)/864e5)>t}(0,c.bz)("firstPartyData",{name:"topics",queue:1,processFpd:function(e,t){let{global:n}=t,{data:o=D}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m||(!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!O(e))return;const t=s.$W.getConfig("userSync.topics");if(t){window.addEventListener("message",C,!1);const r=(n=t.bidders||[],o=t.maxTopicCaller||1,[...n].sort(()=>.5-Math.random()).slice(0,o));r&&r.forEach(t=>{let{bidder:n,iframeURL:o,fetchUrl:r,fetchRate:c}=t;if(n&&o){let t=e.createElement("iframe");t.name="ifrm_".concat(n),t.src="".concat(o,"?bidder=").concat(n),t.style.display="none",a=new URL(o).origin,h.push(a),o&&e.documentElement.appendChild(t)}var a;if(n&&r){const e=new Map((0,i.$l)(b.getDataFromLocalStorage(w))).get(n);(!e||e&&T(e[v],c||1))&&window.fetch("".concat(r,"?bidder=").concat(n),{browsingTopics:!0}).then(e=>e.json()).then(e=>{if(e&&e.segment&&!(0,i.Im)(e.segment.topics)){const{domain:t,topics:n,bidder:o}=e.segment,i=S(t,n);i&&L(o,i)}})}})}else(0,i.JE)("Topics config not defined under userSync Object");var n,o}(),m=!0),o.then(e=>((e=[].concat(e,function(){let e=[];const t=s.$W.getConfig("userSync.topics"),n=(null==t?void 0:t.bidders)||[];let o=new Map((0,i.$l)(b.getDataFromLocalStorage(w)));return o&&o.forEach((t,i)=>{let r=n.find(e=>{let{bidder:t}=e;return i===t});r&&(0,u.io)(g.qX,(0,p.s)(f.tW,i))&&(T(t[v],(null==r?void 0:r.expiry)||21)?(o.delete(i),b.setDataInLocalStorage(w,JSON.stringify([...o]))):Object.keys(t).forEach(n=>{n!==v&&e.push(t[n])}))}),e}())).length&&(0,i.D9)(n,{user:{data:e}}),{global:n}))}}),(0,o.E)("topicsFpdModule")}},e=>{e.O(0,[802,1085],()=>{return t=9293,e(e.s=t);var t});e.O()}]);
(self.vuuklehbChunk=self.vuuklehbChunk||[]).push([[3469],{4836(e,t,n){var o=n(7873),r=n(5901),i=n(3272),a=n(5023),c=n(6916),s=n(1445),l=n(8969),u=n(9214),d=n(1069);const f=new Map;function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;const n={};function o(e){var t;const o=JSON.stringify([null===(t=e.source)||void 0===t?void 0:t.toLowerCase(),e.ext]);n.hasOwnProperty(o)?n[o].uids.push(...e.uids):n[o]=e}return Object.entries(e).forEach(e=>{let[n,r]=e;r=Array.isArray(r)?r:[r];("pubProvidedId"===n?(0,d.Go)(r):r.map(e=>function(e,t,n){if(n&&e){let t={};t.source=(0,d.fp)(n.getSource)?n.getSource(e):n.source;const o=(0,d.fp)(n.getValue)?n.getValue(e):e;if((0,d.O8)(o)){const r={id:o,atype:n.atype};if((0,d.fp)(n.getUidExt)){const t=n.getUidExt(e);t&&(r.ext=t)}if(t.uids=[r],(0,d.fp)(n.getEidExt)){const o=n.getEidExt(e);o&&(t.ext=o)}return t}}return null}(e,0,t.get(n)))).filter(e=>null!=e).forEach(o)}),Object.values(n)}function m(e){const t=new Map,n={};return Object.entries(e).forEach(e=>{let[o,r]=e;const i=r.find(e=>{var t;return null!=(null===(t=e.idObj)||void 0===t?void 0:t[o])});var a;i&&(n[o]=i.idObj[o],t.set(o,null===(a=i.submodule.eids)||void 0===a?void 0:a[o]))}),g(n,t)}var b=n(2938),h=n(3172),v=n(433),p=n(1692),y=n(5555),I=n(6894),w=n(5973),S=n(5569),E=n(5139),D=n(6811),k=n(3441),O=n(8230),j=n(9671);const T="User ID",A=b.X0,x=b.qk,C="_pbjs_id_optout",N=(0,b.CK)("userId"),U={isAllowed:E.io};let _,L,P,J,q,M=!1,F=[],V=[],H={},W=[];const G=(()=>{let e;return()=>(null==e&&(e=(0,I.K7)()),e)})();function R(e){return G().fork().renameWith(t=>["userId.mod.".concat(t),"userId.mods.".concat(e,".").concat(t)])}function B(e,t){t=t||e.storageMgr;const n="function"==typeof e.submodule.domainOverride?e.submodule.domainOverride():null,o=e.config.storage.name;return function(e,r,i){t.setCookie(o+(e||""),r,i,"Lax",n)}}function Q(e,t){const n=e.config.storage;try{const o=new Date(Date.now()+864e5*n.expires).toUTCString(),r=(0,d.Qd)(t)?JSON.stringify(t):t;e.enabledStorageTypes.forEach(t=>{switch(t){case A:!function(e,t,n){const o=e.config.storage,r=B(e);r(null,t,n),r("_cst",me(),n),"number"==typeof o.refreshInSeconds&&r("_last",(new Date).toUTCString(),n)}(e,r,o);break;case x:!function(e,t,n){const o=e.config.storage,r=e.storageMgr;r.setDataInLocalStorage("".concat(o.name,"_exp"),n),r.setDataInLocalStorage("".concat(o.name,"_cst"),me()),r.setDataInLocalStorage(o.name,encodeURIComponent(t)),"number"==typeof o.refreshInSeconds&&r.setDataInLocalStorage("".concat(o.name,"_last"),(new Date).toUTCString())}(e,r,o)}})}catch(e){(0,d.vV)(e)}}function z(e){we(e),e.enabledStorageTypes.forEach(t=>{switch(t){case A:!function(e){const t=B(e,N),n=new Date(Date.now()-864e5).toUTCString();["","_last","_cst"].forEach(e=>{try{t(e,"",n)}catch(e){(0,d.vV)(e)}})}(e);break;case x:!function(e){["","_last","_exp","_cst"].forEach(t=>{try{N.removeDataFromLocalStorage(e.config.storage.name+t)}catch(e){(0,d.vV)(e)}})}(e)}})}function K(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;const n=e.config.storage,o=t?"".concat(n.name,"_").concat(t):n.name;let r;try{e.enabledStorageTypes.find(t=>{switch(t){case A:r=function(e,t){return e.storageMgr.getCookie(t)}(e,o);break;case x:r=function(e,t){const n=e.storageMgr,o=e.config.storage,r=n.getDataFromLocalStorage("".concat(o.name,"_exp"));return""===r?n.getDataFromLocalStorage(t):r&&new Date(r).getTime()-Date.now()>0?decodeURIComponent(n.getDataFromLocalStorage(t)):void 0}(e,o)}return!!r}),"string"==typeof r&&"{"===r.trim().charAt(0)&&(r=JSON.parse(r))}catch(e){(0,d.vV)(e)}return r}function Y(e,t,n){t=G().fork().startTiming("userId.callbacks.total").stopBefore(t);const o=(0,d.U6)(()=>{clearTimeout(void 0),t()},e.length);e.forEach(function(e){const t=R(e.submodule.name).startTiming("callback").stopBefore(o);try{e.callback(function(o){o?(e.config.storage&&Q(e,o),e.idObj=e.submodule.decode(o,e.config),n.refresh(),he(n)):(0,d.fH)("".concat(T,": ").concat(e.submodule.name," - request id responded with an empty value")),t()},K.bind(null,e))}catch(n){(0,d.vV)("Error in userID module '".concat(e.submodule.name,"':"),n),t()}e.callback=void 0})}function $(e){return Object.fromEntries(Object.entries(e).map(e=>{var t;let[n,o]=e;return[n,null===(t=o.find(e=>{var t;return null!=(null===(t=e.idObj)||void 0===t?void 0:t[n])}))||void 0===t||null===(t=t.idObj)||void 0===t?void 0:t[n]]}).filter(e=>{let[t,n]=e;return null!=n}))}function X(e,t,n){const o={};return e.forEach(e=>{const r=n(e),i=function(e){var t;if(e.primaryIds)return e.primaryIds;const n=Object.keys(null!==(t=e.eids)&&void 0!==t?t:{});if(n.length>1)throw new Error("ID submodule ".concat(e.name," can provide multiple IDs, but does not specify 'primaryIds'"));return n}(r);t(e).forEach(t=>{var n,a,c;const s=o[t]=null!==(n=o[t])&&void 0!==n?n:[],l=null!==(a=null===(c=H[t])||void 0===c?void 0:c.indexOf(r.name))&&void 0!==a?a:i.includes(t)?0:-1,u=s.findIndex(e=>{let[t]=e;return t<l});s.splice(-1===u?s.length:u,0,[l,e])})}),Object.fromEntries(Object.entries(o).map(e=>{let[t,n]=e;return[t,n.map(e=>{let[t,n]=e;return n})]}))}function Z(){const e={submodules:[],global:{},bidder:{},combined:{},refresh(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const n=new Set(t.map(e=>e.submodule));e.submodules=e.submodules.filter(e=>!n.has(e.submodule)).concat(t),function(){const t=X(e.submodules,e=>{var t;return Object.keys(null!==(t=e.idObj)&&void 0!==t?t:{})},e=>e.submodule),n={},o={};Object.entries(t).forEach(e=>{let[t,r]=e,i=!0;const a=new Set;r.map(e=>e.config.bidders).forEach(e=>{Array.isArray(e)&&e.length>0?e.forEach(e=>a.add(e)):i=!1}),a.size>0&&!i?(0,d.JE)("userID modules ".concat(r.map(e=>e.submodule.name).join(", ")," provide the same ID ('").concat(t,"'), but are configured for different bidders. ID will be skipped.")):0===a.size?n[t]=r:a.forEach(e=>{var n;o[e]=null!==(n=o[e])&&void 0!==n?n:{},o[e][t]=r})});const r=Object.values(o).concat([n]).reduce((e,t)=>Object.assign(e,t),{});Object.assign(e,{global:n,bidder:o,combined:r})}()}};return e}function ee(e){var t;let{adUnits:n,ortb2Fragments:o}=e;if(o=null!=o?o:{global:{},bidder:{}},function(e){const{global:t,bidder:n}=e,{global:o,bidder:r}=_,i=m(o);var a,c;i.length>0&&(0,h.J)(t,"user.ext.eids",(null!==(a=null===(c=t.user)||void 0===c||null===(c=c.ext)||void 0===c?void 0:c.eids)&&void 0!==a?a:[]).concat(i)),Object.entries(r).forEach(e=>{let[t,o]=e;const r=m(o);var i,a;r.length>0&&(0,h.J)(n,"".concat(t,".user.ext.eids"),(null!==(i=null===(a=n[t])||void 0===a||null===(a=a.user)||void 0===a||null===(a=a.ext)||void 0===a?void 0:a.eids)&&void 0!==i?i:[]).concat(r))})}(o),[n].some(e=>!Array.isArray(e)||!e.length))return;const r=$(_.global),i=(null===(t=o.global.user)||void 0===t||null===(t=t.ext)||void 0===t?void 0:t.eids)||[];n.forEach(e=>{e.bids&&(0,d.cy)(e.bids)&&e.bids.forEach(e=>{var t,n;const a=Object.assign({},r,$(null!==(t=_.bidder[e.bidder])&&void 0!==t?t:{})),c=i.concat((null===(n=o.bidder[e.bidder])||void 0===n||null===(n=n.user)||void 0===n||null===(n=n.ext)||void 0===n?void 0:n.eids)||[]);Object.keys(a).length>0&&(e.userId=a),c.length>0&&(e.userIdAsEids=c)})})}const te={};let ne;function oe(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae()||[];const t=J&&e.find(e=>e.source===J);if(t&&"string"==typeof(0,v.A)(t,"uids.0.id")){const e=t.uids[0].id.replace(/[\W_]/g,"");if(e.length>=32&&e.length<=150)return e;(0,d.JE)("User ID - Googletag Publisher Provided ID for ".concat(J," is not between 32 and 150 characters - ").concat(e))}}const re=(0,I.Ak)("userId",function(e,t){let{delay:n=y.k.timeout,getIds:o=ge}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};y.k.race([o().catch(()=>null),n(P)]).then(()=>{ee(t),G().join((0,I.BO)(t.metrics),{propagate:!1,includeGroups:!0}),e.call(this,t)})});function ie(){return $(_.combined)}function ae(){return m(_.combined)}function ce(e){return ae().filter(t=>t.source===e)[0]}function se(e,t,n){return de().then(()=>{let o={};if((0,d.fp)(n)){(0,d.fH)("".concat(T," - Getting encrypted signal from custom function : ").concat(n.name," & source : ").concat(e," "));const t=n(e);o[e]=t?le(t):null}else{const n=ce(e);(0,d.fH)("".concat(T," - Getting encrypted signal for eids :").concat(JSON.stringify(n))),(0,d.Im)(n)||(o[n.source]=!0===t?le(n):n.uids[0].id)}return(0,d.fH)("".concat(T," - Fetching encrypted eids: ").concat(o[e])),o[e]})}function le(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="";if(1===t)n="object"==typeof e?window.btoa(JSON.stringify(e)):window.btoa(e);return"".concat(t,"||").concat(n)}function ue(){if(!(0,d.II)())return;window.googletag.secureSignalProviders=window.googletag.secureSignalProviders||[];const e=i.$W.getConfig("userSync.encryptedSignalSources");if(e){const t=e.registerDelay||0;setTimeout(()=>{e.sources&&e.sources.forEach(e=>{let{source:t,encrypt:n,customFunc:o}=e;t.forEach(e=>{window.googletag.secureSignalProviders.push({id:e,collectorFunction:()=>se(e,n,o)})})})},t)}else(0,d.JE)("".concat(T," - ESP : encryptedSignalSources config not defined under userSync Object"))}function de(e){return ne(e).then(()=>ie(),e=>e===te?Promise.resolve().then(ge):((0,d.vV)("Error initializing userId",e),y.k.reject(e)))}function fe(){let{submoduleNames:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return de({refresh:!0,submoduleNames:e}).then(e=>(t&&(0,d.fp)(t)&&t(),e))}function ge(){return de()}function me(){let e=Number(c.SL.hash);const t=[];for(;e>0;)t.push(String.fromCharCode(255&e)),e>>>=8;return btoa(t.join())}function be(e,t){const n=c.mW.getConsentData();if(e.config.storage){let o,r=K(e),i=!1;if("number"==typeof e.config.storage.refreshInSeconds){const t=new Date(K(e,"last"));i=t&&Date.now()-t.getTime()>1e3*e.config.storage.refreshInSeconds}if(!r||i||t||function(e){const t=K(e,"cst");return!t||t!==me()}(e)){const t=Object.assign({enabledStorageTypes:e.enabledStorageTypes},e.config);o=e.submodule.getId(t,n,r)}else"function"==typeof e.submodule.extendId&&(o=e.submodule.extendId(e.config,n,r));(0,d.Qd)(o)&&(o.id&&(Q(e,o.id),r=o.id),"function"==typeof o.callback&&(e.callback=o.callback)),r&&(e.idObj=e.submodule.decode(r,e.config))}else if(e.config.value)e.idObj=e.config.value;else{const t=e.submodule.getId(e.config,n,void 0);(0,d.Qd)(t)&&("function"==typeof t.callback&&(e.callback=t.callback),t.id&&(e.idObj=e.submodule.decode(t.id,e.config)))}}function he(e){const t=m(e.combined);if(t.length&&J){const e=oe(t);e&&((0,d.II)()?window.googletag.pubads().setPublisherProvidedId(e):(window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){window.googletag.pubads().setPublisherProvidedId(e)})))}}function ve(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return G().fork().measureTime("userId.init.modules",function(){if(!t.length)return[];if(t.forEach(e=>we(e)),!(t=t.filter(e=>(!e.config.storage||!!e.enabledStorageTypes.length)&&U.isAllowed(D.yl,(0,k.s)(S.fW,e.config.name)))).length)return(0,d.JE)("".concat(T," - no ID module configured")),[];const o=t.reduce((e,t)=>R(t.submodule.name).measureTime("init",()=>{try{be(t,n),e.push(t)}catch(e){(0,d.vV)("Error in userID module '".concat(t.submodule.name,"':"),e)}return e}),[]);return e.refresh(o),he(e),o})}function pe(e){var t;return(null==e||null===(t=e.storage)||void 0===t||null===(t=t.type)||void 0===t?void 0:t.trim().split(/\s*&\s*/))||[]}function ye(e){function t(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];(0,d.JE)("Invalid userSync.userId config: ".concat(e),...n)}return Array.isArray(e)?e.filter(e=>{if(null==e||!e.name)return t('must specify "name"',e);if(e.storage){if(!e.storage.name||!e.storage.type)return t('must specify "storage.name" and "storage.type"',e);if(!function(e){return pe(e).every(e=>Ie.has(e))}(e))return t('invalid "storage.type"',e);["expires","refreshInSeconds"].forEach(n=>{let o=e.storage[n];null!=o&&"number"!=typeof o&&(o=Number(o),isNaN(o)?(t("storage.".concat(n," must be a number and will be ignored"),e),delete e.storage[n]):e.storage[n]=o)})}return!0}):(null!=e&&t("must be an array",e),[])}const Ie=new Set([x,A]);function we(e){if(e.enabledStorageTypes)return;const t=pe(e.config);e.enabledStorageTypes=t.filter(t=>{switch(t){case x:return function(e){return!(!e.storageMgr.localStorageIsEnabled()||N.getDataFromLocalStorage(C)&&((0,d.fH)("".concat(T," - opt-out localStorage found, storage disabled")),1))}(e);case A:return function(e){return!(!e.storageMgr.cookiesAreEnabled()||N.getCookie(C)&&((0,d.fH)("".concat(T," - opt-out cookie found, storage disabled")),1))}(e)}return!1})}function Se(e){f.clear(),Object.entries(X(e,e=>Object.keys(e.eids||{}),e=>e)).forEach(e=>{let[t,n]=e;return f.set(t,n[0].eids[t])})}function Ee(){Se(W);const e=ye(V);if(!e.length)return;const t=W.filter(e=>!(0,r.I6)(F,t=>t.name===e.name));F.splice(0,F.length),t.map(t=>{const n=(0,r.I6)(e,e=>e.name&&(e.name.toLowerCase()===t.name.toLowerCase()||t.aliasName&&e.name.toLowerCase()===t.aliasName.toLowerCase()));return n&&t.name!==n.name&&(n.name=t.name),n?{submodule:t,config:n,callback:void 0,idObj:void 0,storageMgr:(0,b.vM)({moduleType:S.fW,moduleName:n.name})}:null}).filter(e=>null!==e).forEach(e=>F.push(e)),F.length&&(M||(j.gH.before(re,100),s.Ay.callDataDeletionRequest.before(De),p.Q.after(e=>e(oe())),M=!0),(0,d.fH)("".concat(T," - usersync config updated for ").concat(F.length," submodules: "),F.map(e=>e.submodule.name)))}function De(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];(0,d.fH)("UserID: received data deletion request; deleting all stored IDs..."),F.forEach(e=>{if("function"==typeof e.submodule.onDataDeletionRequest)try{e.submodule.onDataDeletionRequest(e.config,e.idObj,...n)}catch(t){(0,d.vV)("Error calling onDataDeletionRequest for ID submodule ".concat(e.submodule.name),t)}z(e)}),e.apply(this,n)}function ke(e){return function(){return Promise.resolve(e.apply(this,arguments))}}!function(e){let{delay:t=y.k.timeout}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};J=void 0,F=[],V=[],_=Z(),ne=function(){let{delay:e=y.k.timeout}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,y.v)(),n=(0,y.v)();let o,r,i=!1;function s(e){return r=G().fork(),null!=o&&o.reject(te),o=(0,y.v)(),y.k.race([e,o.promise]).finally(r.startTiming("userId.total"))}let f=_,g=F;function m(e){return function(){if(f===_&&g===F)return e(...arguments)}}function b(){return c.SL.promise.finally(r.startTiming("userId.init.consent"))}let h=s(y.k.all([u.Gc,t.promise]).then(b).then(m(()=>{ve(f,g)})).then(()=>n.promise.finally(r.startTiming("userId.callbacks.pending"))).then(m(()=>{const e=f.submodules.filter(e=>(0,d.fp)(e.callback));if(e.length)return new y.k(t=>Y(e,t,f))})));return function(){let{refresh:o=!1,submoduleNames:r=null,ready:c=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c&&!i&&(i=!0,t.resolve(),P>0?n.resolve():a.on(l.qY.AUCTION_END,function t(){a.AU(l.qY.AUCTION_END,t),e(L).then(n.resolve)})),o&&i&&(h=s(h.catch(()=>null).then(b).then(m(()=>{const e=ve(f,g.filter(e=>null==r||r.includes(e.submodule.name)),!0).filter(e=>null!=e.callback);if(e.length)return new y.k(t=>Y(e,t,f))})))),h}}({delay:t}),null!=q&&q(),W=[],q=e.getConfig("userSync",e=>{const t=e.userSync;t&&(J=t.ppid,t.userIds&&(V=t.userIds,L=(0,d.Et)(t.syncDelay)?t.syncDelay:O.qh.syncDelay,P=(0,d.Et)(t.auctionDelay)?t.auctionDelay:O.qh.auctionDelay,Ee(),function(e,t){if(e){const n={},o=new Map(t.map(e=>e.aliasName?[e.aliasName,e.name]:[]));Object.keys(e).forEach(t=>{const r=(0,d.cy)(e[t])?[...e[t]].reverse():[];n[t]=r.map(e=>o.has(e)?o.get(e):e)}),H=n}else H={};_.refresh(),Se(t)}(t.idPriority,W),ne({ready:!0})))}),(0,o.m)().getUserIds=ie,(0,o.m)().getUserIdsAsEids=ae,(0,o.m)().getEncryptedEidsForSource=ke(se),(0,o.m)().registerSignalSources=ue,(0,o.m)().refreshUserIds=ke(fe),(0,o.m)().getUserIdsAsync=ke(ge),(0,o.m)().getUserIdsAsEidBySource=ce}(i.$W),(0,u.xG)("userId",function(e){e.findRootDomain=w.S,(0,r.I6)(W,t=>t.name===e.name)||(W.push(e),c.o2.register(S.fW,e.name,e.gvlid),Ee(),ne({refresh:!0,submoduleNames:[e.name]}))},{postInstallAllowed:!0}),(0,o.E)("userId")}},e=>{e.O(0,[802,1085],()=>{return t=4836,e(e.s=t);var t});e.O()}]);
})();var VuuklePlayer = (function () {
    'use strict';

    function insertElem(elem, attrs, events) {
      let e = document.createElement(elem);
      for (let i in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, i)) {
          e[i] = attrs[i];
        }
      }
      for (let i in events) {
        if (Object.prototype.hasOwnProperty.call(events, i)) {
          let v = events[i];
          e.addEventListener(v[0], v[1], v[2]);
        }
      }
      (document.head || document.documentElement).appendChild(e);
    }
    function insertElemLoadPromise(elem, attrs, events) {
      return new Promise(function (resolve) {
        events = events || [];
        events.push(['load', resolve]);
        insertElem(elem, attrs, events);
      });
    }
    function insertScriptLoadPromise(src, options) {
      options = options || {};
      options.type = 'text/javascript';
      options.src = src;
      return insertElemLoadPromise('script', options);
    }
    function preload(url, loadType, prefetch, options) {
      options = options || {};
      options.href = url;
      options.as = loadType ? loadType : 'script';
      options.rel = prefetch ? 'prefetch' : 'preload';
      return insertElemLoadPromise('link', options);
    }
    const debugParam = 'vdebug';
    const dtest = new RegExp(`[?&]${debugParam}(?:[&=]|$)`);
    const vdebugCookie = 'vuukleDebug';
    function enableDebug() {
      setCookie(vdebugCookie, 1);
    }
    function disableDebug() {
      deleteCookie(vdebugCookie);
    }
    function isDebug(dtype) {
      let res = !!window._VuukleDebug;
      const search = window.vuukleIsCreative ? document.referrer : window.location.search;
      res = res || dtest.test(search);
      let par = getParam(search, debugParam, '');
      let isPar = par.length > 0;
      if (dtype && par.split(',').includes(dtype)) {
        return true;
      }
      try {
        res = res || dtest.test(window.top.location.search);
        let par = getParam(window.top.location.search, debugParam, '');
        isPar = isPar || par.length > 0;
        if (dtype && par.split(',').includes(dtype)) {
          return true;
        }
      } catch (error) {
        // nop
      }
      try {
        res = res || window.top._VuukleDebug;
      } catch (error) {
        // nop
      }
      res = res || !!getCookie(vdebugCookie);
      window._VuukleDebug = res;
      try {
        window.top._VuukleDebug = res;
      } catch (error) {
        // nop
      }
      if (dtype && isPar) {
        res = false;
      }
      return res;
    }
    const vdebugPbCookie = 'vuuklePbDebug';
    function enablePbDebug() {
      setCookie(vdebugPbCookie, 1);
    }
    function disablePbDebug() {
      deleteCookie(vdebugPbCookie);
    }
    function isPbDebug() {
      return !!getCookie(vdebugPbCookie);
    }
    function setCookie(name, value, options = {}) {
      options = {
        path: '/',
        ...options
      };
      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
      }
      let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      for (let optionKey in options) {
        if (!Object.prototype.hasOwnProperty.call(options, optionKey)) {
          continue;
        }
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }
      document.cookie = updatedCookie;
    }
    function getCookie(key) {
      key = encodeURIComponent(key);
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${key}=`);
      if (parts.length === 2) {
        return decodeURIComponent(parts.pop().split(';').shift());
      }
      return;
    }
    function deleteCookie(key) {
      setCookie(key, "", {
        'max-age': -1
      });
    }
    function getParam(sString, param, def) {
      let res = def;
      const re = new RegExp(`[?&]${param}=([^&]*)`);
      let m = sString.match(re);
      if (m && m.length > 0) {
        res = decodeURIComponent(m[1]);
      }
      return res;
    }
    function clone(data) {
      if (data === undefined) return undefined;
      return JSON.parse(JSON.stringify(data));
    }
    function delay(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    }
    function gcd(...x) {
      let r = x.shift() || 0;
      while (x.length > 0) {
        r = _gcd(r, x.shift());
      }
      return r;
    }
    function _gcd(n, m) {
      let r = 0;
      while (n !== 0) {
        r = m % n;
        m = n;
        n = r;
      }
      return m;
    }
    var tStr = 'String';
    var tFn = 'Function';
    var tObject = 'Object';
    var toString = Object.prototype.toString;
    function isA(object, _t) {
      return toString.call(object) === '[object ' + _t + ']';
    }
    function isFn(object) {
      return isA(object, tFn);
    }
    function isStr(object) {
      return isA(object, tStr);
    }
    function isPlainObject(object) {
      return isA(object, tObject);
    }

    /**
     * Generate an array of numbers with a start to end by specified increments
     *
     * @param start
     * @param incrementValue
     * @param maxValue
     * @returns
     */
    function generateArrayOfNumbers(start, incrementValue, maxValue) {
      const numbersArray = [];
      for (let i = start; i < maxValue; i += incrementValue) {
        numbersArray.push(i);
      }
      return numbersArray;
    }

    /**
     * Get formatted time from milliseconds in hours:minutes:seconds format
     *
     * @param time
     * @returns
     */
    function getFormattedTime(time) {
      const seconds = Math.trunc(time / 1000 % 60);
      const minutes = Math.trunc(time / 1000 / 60 % 60);
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const hours = Math.trunc(time / 1000 / 60 / 60 % 60);
      return hours > 0 ? `${hours}:${formattedMinutes}:${formattedSeconds}` : `${formattedMinutes}:${formattedSeconds}`;
    }

    /** Get the (0, 0) coordinates of the element
     *
     * @param el
     */
    function getOffset(el) {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };
    }

    /**
     * @name getMetaContentByName
     * @description get meta tags content from document
     * @param {string} tagAttribute
     * @param {string} attributeVal
     * @returns {string} detected content value or empty string if nothing found
     */
    function getMetaContentByName(tagAttribute, attributeVal) {
      const metaTag = document.querySelector(`meta[${tagAttribute}='${attributeVal}']`);
      if (metaTag instanceof HTMLMetaElement) {
        return metaTag.content;
      }
      return '';
    }

    /**
     * @name getTextFromHTML
     * @description Get text from HTML string with HTML tags and HTML character codes
     * @param {string} HTMLString - HTML string from which we need to get text
     * @return {string} - string from rendered html
     */
    function getTextFromHTML(HTMLString) {
      const para = document.createElement('p');
      para.innerHTML = HTMLString;
      return para.innerText.trim();
    }

    /**
     * Generate a v4 GUID
     */
    function generateGUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }

    window.vuukleConsole = window.console;
    const i = document.createElement('iframe');
    i.style.display = 'none';
    if (document.body) {
      document.body.appendChild(i);
      window.vuukleConsole = i.contentWindow.console;
    }
    const logStart = Date.now();
    function dlog() {
      if (!isDebug()) return;
      window.vuukleConsole.log.apply(window.vuukleConsole, log(arguments));
    }
    function dwarn() {
      if (!isDebug()) return;
      window.vuukleConsole.warn.apply(window.vuukleConsole, log(arguments));
    }
    function derr() {
      if (!isDebug()) return;
      window.vuukleConsole.error.apply(window.vuukleConsole, log(arguments));
    }
    function log(arg) {
      if (!isDebug()) return;
      const now = new Date();
      const elapsed = now.getTime() - logStart;
      const time = `[${now.getHours().toString()}:${pad(now.getMinutes())}:${pad(now.getSeconds())}] (${elapsed})`;
      let args = [].slice.call(arg);
      return decorateLog(args, time);
    }
    function pad(num) {
      return num.toString().padStart(2, '0');
    }
    function decorateLog(args, prefix) {
      if (!window._vuukleLrc) {
        window._vuukleLrc = Math.floor(Math.random() * 0x1000000);
      }
      let top = false;
      try {
        top = window === window.top;
      } catch (error) {
        // nop
      }
      args = [].slice.call(args);
      prefix && args.unshift(prefix);
      let bg = window.vuukleIsCreative ? '#8600e6' : '#73e600';
      let rbg = '#' + window._vuukleLrc.toString(16);
      args.unshift(`display: inline-block; color: #fff; background: ${rbg}; padding: 1px 4px; border-radius: 3px;`);
      args.unshift(`display: inline-block; color: #fff; background: ${bg}; padding: 1px 4px; border-radius: 3px;`);
      args.unshift('%cVuukle%c' + (top ? 'o' : 'x'));
      return args;
    }

    function isMobile() {
      return window._vuukleGeo && window._vuukleGeo.device ? window._vuukleGeo.device == 'Mobile' : /Mobi/.test(navigator.userAgent);
    }
    function getBrowserName() {
      if (window._vuukleGeo && window._vuukleGeo.browser) {
        return window._vuukleGeo.browser;
      }

      // Opera 8.0+
      if (window.opr && window.opr.addons || window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
        return 'Opera';
      }

      // Firefox 1.0+
      if (typeof InstallTrigger !== 'undefined') {
        return 'Firefox';
      }

      // Safari 3.0+ "[object HTMLElementConstructor]"
      if (/constructor/i.test(window.HTMLElement) || function (p) {
        return p.toString() === '[object SafariRemoteNotification]';
      }(!window['safari'])) {
        return 'Safari';
      }

      // Internet Explorer 6-11
      if (/* @cc_on!@*/document.documentMode) {
        return 'Internet Explorer';
      }

      // Edge 20+
      if (!document.documentMode && window.StyleMedia) {
        return 'Microsoft Edge';
      }

      // Chromium based Edge
      if (window.chrome && navigator.userAgent.indexOf("Edg") !== -1) {
        return 'Microsoft Edge';
      }

      // Chrome
      if (window.chrome) {
        return 'Chrome';
      }
      return "unknown";
    }
    function androidVersion() {
      if (/Android/.test(navigator.appVersion)) {
        var v = navigator.appVersion.match(/Android (\d+)?.(\d+)/);
        return v;
      }
    }
    function iOSversion() {
      if (/iP(hone|od|ad)/.test(navigator.appVersion)) {
        var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt((v === null || v === void 0 ? void 0 : v[1]) || 0, 10), parseInt((v === null || v === void 0 ? void 0 : v[2]) || 0, 10), parseInt((v === null || v === void 0 ? void 0 : v[3]) || 0, 10)];
      }
    }
    function getOSName() {
      var os, ver;
      if (window._vuukleGeo && window._vuukleGeo.os) {
        return window._vuukleGeo.os;
      }
      if (isMobile()) {
        if (/Windows/.test(navigator.userAgent)) {
          os = 'Windows';
          if (/Phone 8.0/.test(navigator.userAgent)) {
            os += ' Phone 8.0';
          } else if (/Phone 10.0/.test(navigator.userAgent)) {
            os += ' Phone 10.0';
          }
        } else if (/Android/.test(navigator.userAgent)) {
          var _ver;
          ver = androidVersion();
          os = ((_ver = ver) === null || _ver === void 0 ? void 0 : _ver[0]) || 'Android';
        } else if (/iPhone;/.test(navigator.userAgent)) {
          var _ver2, _ver3, _ver4;
          ver = iOSversion();
          os = 'iOS ' + ((_ver2 = ver) === null || _ver2 === void 0 ? void 0 : _ver2[0]) + '.' + ((_ver3 = ver) === null || _ver3 === void 0 ? void 0 : _ver3[1]) + '.' + ((_ver4 = ver) === null || _ver4 === void 0 ? void 0 : _ver4[2]);
        } else if (/iPad;/.test(navigator.userAgent)) {
          var _ver5, _ver6, _ver7;
          ver = iOSversion();
          os = 'iOS ' + ((_ver5 = ver) === null || _ver5 === void 0 ? void 0 : _ver5[0]) + '.' + ((_ver6 = ver) === null || _ver6 === void 0 ? void 0 : _ver6[1]) + '.' + ((_ver7 = ver) === null || _ver7 === void 0 ? void 0 : _ver7[2]);
        } else if (/BBd*/.test(navigator.userAgent)) {
          os = 'BlackBerry';
        }
      } else {
        if (/Windows/.test(navigator.userAgent)) {
          os = 'Windows';
          if (/5.1;/.test(navigator.userAgent)) {
            os += ' XP';
          } else if (/6.0;/.test(navigator.userAgent)) {
            os += ' Vista';
          } else if (/6.1;/.test(navigator.userAgent)) {
            os += ' 7';
          } else if (/6.2/.test(navigator.userAgent)) {
            os += ' 8';
          } else if (/10.0;/.test(navigator.userAgent)) {
            os += ' 10';
          }
          if (/64/.test(navigator.userAgent)) {
            os += ' 64-bit';
          } else {
            os += ' 32-bit';
          }
        } else if (/Macintosh/.test(navigator.userAgent)) {
          os = 'Macintosh';
          if (/OS X/.test(navigator.userAgent)) {
            os += ' OS X';
          }
        }
      }
      return os;
    }
    function getBrowser() {
      return {
        os: getOSName(),
        browser: getBrowserName(),
        language: navigator.language,
        languages: navigator.languages,
        user_agent: navigator.userAgent,
        device: window._vuukleGeo && window._vuukleGeo.device ? window._vuukleGeo.device : isMobile() ? 'Mobile' : 'Desktop',
        referrer: document.referrer || 'N/A',
        online: navigator.onLine,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        screen_resolution: screen.width + ' x ' + screen.height,
        cookie_enabled: navigator.cookieEnabled
      };
    }

    let cmpVersion = 0;
    let consentData;
    let listeners = [];
    function findCMP() {
      let f = window;
      let cmpFrame;
      let cmpFunction;
      while (!cmpFrame) {
        try {
          if (typeof f.__tcfapi === 'function' || typeof f.__cmp === 'function') {
            if (typeof f.__tcfapi === 'function') {
              cmpVersion = 2;
              cmpFunction = f.__tcfapi;
            } else {
              cmpVersion = 1;
              cmpFunction = f.__cmp;
            }
            cmpFrame = f;
            break;
          }
        } catch (e) {
          // nop
        }

        // need separate try/catch blocks due to the exception errors thrown when trying to check for a frame that doesn't exist in 3rd party env
        try {
          if (f.frames['__tcfapiLocator']) {
            cmpVersion = 2;
            cmpFrame = f;
            break;
          }
        } catch (e) {
          // nop
        }
        try {
          if (f.frames['__cmpLocator']) {
            cmpVersion = 1;
            cmpFrame = f;
            break;
          }
        } catch (e) {
          // nop
        }
        if (f === window.top) break;
        f = f.parent;
      }
      return {
        cmpFrame,
        cmpFunction
      };
    }
    function lookupIabConsent(cmpSuccess, cmpError) {
      function v2CmpResponseCallback(tcfData, success) {
        if (success) {
          if (tcfData.gdprApplies === false || tcfData.eventStatus === 'tcloaded' || tcfData.eventStatus === 'useractioncomplete') {
            cmpSuccess(tcfData);
          }
        } else {
          cmpError();
        }
      }
      function handleV1CmpResponseCallbacks() {
        const cmpResponse = {};
        function afterEach() {
          if (cmpResponse.getConsentData && cmpResponse.getVendorConsents) {
            dlog('Received all requested responses from CMP', cmpResponse);
            cmpSuccess(cmpResponse);
          }
        }
        return {
          consentDataCallback: function (consentResponse) {
            cmpResponse.getConsentData = consentResponse;
            afterEach();
          },
          vendorConsentsCallback: function (consentResponse) {
            cmpResponse.getVendorConsents = consentResponse;
            afterEach();
          }
        };
      }
      let v1CallbackHandler = handleV1CmpResponseCallbacks();
      let cmpCallbacks = {};
      let {
        cmpFrame,
        cmpFunction
      } = findCMP();
      if (!cmpFrame) {
        cmpError();
        return;
      }
      if (isFn(cmpFunction)) {
        if (cmpVersion === 1) {
          cmpFunction('getConsentData', null, v1CallbackHandler.consentDataCallback);
          cmpFunction('getVendorConsents', null, v1CallbackHandler.vendorConsentsCallback);
        } else if (cmpVersion === 2) {
          cmpFunction('addEventListener', cmpVersion, v2CmpResponseCallback);
        }
      } else {
        if (cmpVersion === 1) {
          callCmpWhileInIframe('getConsentData', cmpFrame, v1CallbackHandler.consentDataCallback);
          callCmpWhileInIframe('getVendorConsents', cmpFrame, v1CallbackHandler.vendorConsentsCallback);
        } else if (cmpVersion === 2) {
          callCmpWhileInIframe('addEventListener', cmpFrame, v2CmpResponseCallback);
        }
      }
      function callCmpWhileInIframe(commandName, cmpFrame, moduleCallback) {
        let apiName = cmpVersion === 2 ? '__tcfapi' : '__cmp';
        let callId = Math.random() + '';
        let callName = `${apiName}Call`;

        /* Setup up a __cmp function to do the postMessage and stash the callback.
            This function behaves (from the caller's perspective identicially to the in-frame __cmp call */
        if (cmpVersion === 2) {
          window[apiName] = function (cmd, cmpVersion, callback, arg) {
            let msg = {
              [callName]: {
                command: cmd,
                version: cmpVersion,
                parameter: arg,
                callId: callId
              }
            };
            cmpCallbacks[callId] = callback;
            cmpFrame.postMessage(msg, '*');
          };

          /** when we get the return message, call the stashed callback */
          window.addEventListener('message', readPostMessageResponse, false);

          // call CMP
          window[apiName](commandName, cmpVersion, moduleCallback);
        } else {
          window[apiName] = function (cmd, arg, callback) {
            let msg = {
              [callName]: {
                command: cmd,
                parameter: arg,
                callId: callId
              }
            };
            cmpCallbacks[callId] = callback;
            cmpFrame.postMessage(msg, '*');
          };

          /** when we get the return message, call the stashed callback */
          window.addEventListener('message', readPostMessageResponse, false);

          // call CMP
          window[apiName](commandName, undefined, moduleCallback);
        }
        function readPostMessageResponse(event) {
          let cmpDataPkgName = `${apiName}Return`;
          let json = typeof event.data === 'string' && event.data.includes(cmpDataPkgName) ? JSON.parse(event.data) : event.data;
          if (json[cmpDataPkgName] && json[cmpDataPkgName].callId) {
            let payload = json[cmpDataPkgName];
            // TODO - clean up this logic (move listeners?); we have duplicate messages responses because 2 eventlisteners are active from the 2 cmp requests running in parallel
            if (typeof cmpCallbacks[payload.callId] !== 'undefined') {
              cmpCallbacks[payload.callId](payload.returnValue, payload.success);
            }
          }
        }
      }
    }
    function callback(data) {
      listeners.forEach(cb => cb(data));
      listeners = [];
    }
    function requestCMP(cb) {
      listeners.push(cb);
      if (consentData) {
        callback(consentData);
        return;
      }
      lookupIabConsent(function (data) {
        processCmpData(data);
        callback(consentData);
      }, function () {
        callback(consentData);
      });
      setTimeout(callback, 1000);
    }
    function processCmpData(consentObject) {
      function checkV1Data(consentObject) {
        let gdprApplies = consentObject && consentObject.getConsentData && consentObject.getConsentData.gdprApplies;
        return !!(typeof gdprApplies !== 'boolean' || gdprApplies === true && !(isStr(consentObject.getConsentData.consentData) && isPlainObject(consentObject.getVendorConsents) && Object.keys(consentObject.getVendorConsents).length > 1));
      }
      function checkV2Data() {
        let gdprApplies = consentObject && typeof consentObject.gdprApplies === 'boolean' ? consentObject.gdprApplies : undefined;
        let tcString = consentObject && consentObject.tcString;
        return !!(typeof gdprApplies !== 'boolean' || gdprApplies === true && !isStr(tcString));
      }

      // determine which set of checks to run based on cmpVersion
      let checkFn = cmpVersion === 1 ? checkV1Data : cmpVersion === 2 ? checkV2Data : null;
      if (isFn(checkFn)) {
        if (!checkFn(consentObject)) {
          storeConsentData(consentObject);
        }
      }
    }
    function storeConsentData(cmpConsentObject) {
      if (cmpVersion === 1) {
        consentData = {
          consentString: cmpConsentObject ? cmpConsentObject.getConsentData.consentData : undefined,
          vendorData: cmpConsentObject ? cmpConsentObject.getVendorConsents : undefined,
          gdprApplies: cmpConsentObject ? cmpConsentObject.getConsentData.gdprApplies : undefined
        };
      } else {
        consentData = {
          consentString: cmpConsentObject ? cmpConsentObject.tcString : undefined,
          vendorData: cmpConsentObject || undefined,
          gdprApplies: cmpConsentObject && typeof cmpConsentObject.gdprApplies === 'boolean' ? cmpConsentObject.gdprApplies : undefined
        };
        if (cmpConsentObject && cmpConsentObject.addtlConsent && isStr(cmpConsentObject.addtlConsent)) {
          consentData.addtlConsent = cmpConsentObject.addtlConsent;
        }
      }
      consentData.apiVersion = cmpVersion;
    }

    class FakeSlot {
      constructor(slotId, sizes, adId) {
        this.slotId = slotId;
        this.sizes = sizes;
        this.adId = adId;
        this.targetings = {};
      }
      addService() {}
      setCollapseEmptyDiv(col1, col2) {
        this.col1 = col1;
        this.col2 = col2;
      }
      setTargeting(key, val) {
        if (!Array.isArray(val)) {
          val = [val];
        }
        this.targetings[key] = val;
      }
      getTargeting(key) {
        return this.targetings[key];
      }
      clearTargeting(key) {
        delete this.targetings[key];
      }
      getSlotElementId() {
        return this.adId;
      }
      getAdUnitPath() {
        return this.slotId;
      }

      // custom methods
      realInit() {
        let slot = googletag.defineSlot(this.slotId, this.sizes, this.adId);
        const needInit = !!slot;
        if (!needInit) {
          return vuukleSlots.filter(x => x.getSlotElementId() === this.adId)[0];
        }
        slot.addService(googletag.pubads());
        slot.setCollapseEmptyDiv(this.col1, this.col2);
        for (const key in this.targetings) {
          if (!Object.prototype.hasOwnProperty.call(this.targetings, key)) {
            continue;
          }
          slot.setTargeting(key, this.targetings[key]);
        }
        googletag.enableServices();
        vuukleSlots.forEach((v, k) => {
          if (v === this) {
            dlog('replace fake slot to real', this.adId);
            vuukleSlots[k] = slot;
          }
        });
        return slot;
      }
      get isFake() {
        return true;
      }
    }

    // import VuukleVideoPlayer from './player.js';

    const confUrl = 'https://cdn.vuukle.com/ads/';
    const defaultGDPR = 'GB,BE,BG,CZ,DK,DE,EE,IE,EL,ES,FR,HR,IT,CY,LV,LT,LU,HU,MT,NL,AT,PL,PT,RO,SI,SK,FI,SE,IS,LI,NO,California,BR';
    const adkernelMap = {
      "r574745": "xapads",
      "r574350": "loopme",
      "r574902": "pulsepoint",
      "r574348": "apacdex",
      "r574351": "sovrn",
      "r574339": "pubmatic",
      "r575830": "gumgum",
      "r583257": "mediagrid",
      "r575919": "sonobi",
      "r577198": "triplelift",
      "r582371": "gumgum",
      "r577197": "triplelift",
      "r625812": "iqzone",
      "r602159": "33across",
      "r640541": "axonix"
    };
    const userIdMap = {
      "sharedId": ["conversant"],
      "amx": ["amx"],
      "criteo": ["criteo"]
    };
    const apsPriceMapData = {
      price: '0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.10,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.20,0.21,0.22,0.23,0.24,0.25,0.26,0.27,0.28,0.29,0.30,0.31,0.32,0.33,0.34,0.35,0.36,0.37,0.38,0.39,0.40,0.41,0.42,0.43,0.44,0.45,0.46,0.47,0.48,0.49,0.50,0.51,0.52,0.53,0.54,0.55,0.56,0.57,0.58,0.59,0.60,0.61,0.62,0.63,0.64,0.65,0.66,0.67,0.68,0.69,0.70,0.71,0.72,0.73,0.74,0.75,0.76,0.77,0.78,0.79,0.80,0.81,0.82,0.83,0.84,0.85,0.86,0.87,0.88,0.89,0.90,0.91,0.92,0.93,0.94,0.95,0.96,0.97,0.98,0.99,1.00,1.01,1.02,1.03,1.04,1.05,1.06,1.07,1.08,1.09,1.10,1.11,1.12,1.13,1.14,1.15,1.16,1.17,1.18,1.19,1.20,1.21,1.22,1.23,1.24,1.25,1.26,1.27,1.28,1.29,1.30,1.31,1.32,1.33,1.34,1.35,1.36,1.37,1.38,1.39,1.40,1.41,1.42,1.43,1.44,1.45,1.46,1.47,1.48,1.49,1.50,1.51,1.52,1.53,1.54,1.55,1.56,1.57,1.58,1.59,1.60,1.61,1.62,1.63,1.64,1.65,1.66,1.67,1.68,1.69,1.70,1.71,1.72,1.73,1.74,1.75,1.76,1.77,1.78,1.79,1.80,1.81,1.82,1.83,1.84,1.85,1.86,1.87,1.88,1.89,1.90,1.91,1.92,1.93,1.94,1.95,1.96,1.97,1.98,1.99,2.00,2.01,2.02,2.03,2.04,2.05,2.06,2.07,2.08,2.09,2.10,2.11,2.12,2.13,2.14,2.15,2.16,2.17,2.18,2.19,2.20,2.21,2.22,2.23,2.24,2.25,2.26,2.27,2.28,2.29,2.30,2.31,2.32,2.33,2.34,2.35,2.36,2.37,2.38,2.39,2.40,2.41,2.42,2.43,2.44,2.45,2.46,2.47,2.48,2.49,2.50,2.51,2.52,2.53,2.54,2.55,2.56,2.57,2.58,2.59,2.60,2.61,2.62,2.63,2.64,2.65,2.66,2.67,2.68,2.69,2.70,2.71,2.72,2.73,2.74,2.75,2.76,2.77,2.78,2.79,2.80,2.81,2.82,2.83,2.84,2.85,2.86,2.87,2.88,2.89,2.90,2.91,2.92,2.93,2.94,2.95,2.96,2.97,2.98,2.99,3.00,3.05,3.10,3.15,3.20,3.25,3.30,3.35,3.40,3.45,3.50,3.55,3.60,3.65,3.70,3.75,3.80,3.85,3.90,3.95,4.00,4.05,4.10,4.15,4.20,4.25,4.30,4.35,4.40,4.45,4.50,4.55,4.60,4.65,4.70,4.75,4.80,4.85,4.90,4.95,5.00,5.05,5.10,5.15,5.20,5.25,5.30,5.35,5.40,5.45,5.50,5.55,5.60,5.65,5.70,5.75,5.80,5.85,5.90,5.95,6.00,6.05,6.10,6.15,6.20,6.25,6.30,6.35,6.40,6.45,6.50,6.55,6.60,6.65,6.70,6.75,6.80,6.85,6.90,6.95,7.00,7.05,7.10,7.15,7.20,7.25,7.30,7.35,7.40,7.45,7.50,7.55,7.60,7.65,7.70,7.75,7.80,7.85,7.90,7.95,8.00,8.50,9.00,9.50,10.00,10.50,11.00,11.50,12.00,12.50,13.00,13.50,14.00,14.50,15.00,15.50,16.00,16.50,17.00,17.50,18.00,18.50,19.00,19.50,20.00,21.00,22.00,23.00,24.00,25.00,26.00,27.00,28.00,29.00,30.00,31.00,32.00,33.00,34.00,35.00'.split(','),
      code: '1aaaiv4,sj0idc,1s1kjcw,1w3hmo,11enim8,jndi4g,1j5xj40,f7k000,1eq40zk,wyu0hs,1whe1hc,6bwzr4,15uh0qo,o3708w,1nlr18g,czn8xs,1ci79xc,uqx9fk,1u9haf4,4408ow,13mk9og,lva96o,1ldua68,hfgr28,1gy0s1s,z6qrk0,1ypasjk,8jtqtc,182drsw,qb3rb4,1ptnsao,9ns4cg,196c5c0,rf24u8,1qxm5ts,s543k,10ap534,ijf4lc,1i1z5kw,e3lmgw,1dm5ngg,vuvmyo,1vdfny8,57ym80,14qin7k,mz8mps,1mhsnpc,bvoveo,1be8we8,tmyvwg,1t5iww0,301v5s,12ilw5c,krbvnk,1k9vwn4,gbidj4,1fu2eio,y2se0w,1xlcf0g,7fvda8,16yfe9s,p75ds0,1opperk,a7rb40,19qbc3k,rz1bls,1rhlclc,1c4av4,10uobuo,j3ebcw,1ilyccg,enkt8g,1e64u80,weutq8,1vxeups,5rxszk,15ahtz4,nj7thc,1n1rugw,cfo268,1by835s,u6y2o0,1tpi3nk,3k11xc,132l2ww,lbb2f4,1ktv3eo,gvhkao,1ge1la8,ymrksg,1y5bls0,7zuk1s,17iel1c,pr4kjk,1p9olj4,93sxkw,18mcykg,qv2y2o,1qdmz28,85xc0,zqpybk,hzfxts,1hhzytc,djmfpc,1d26gow,vawg74,1utgh6o,4nzfgg,146jgg0,mf9fy8,1lxtgxs,bbpon4,1au9pmo,t2zp4w,1sljq4g,2g2oe8,11ympds,k7cow0,1jpwpvk,frj6rk,1fa37r4,xit79c,1x1d88w,6vw6io,16eg7i8,on670g,1o5q800,b1q39c,1aka48w,st03r4,1sbk4qo,26330g,11on400,jxd3i8,1jfx4hs,fhjlds,1f03mdc,x8tlvk,1wrdmv4,6lwl4w,164gm4g,od6lmo,1nvqmm8,d9mubk,1cs6vb4,v0wutc,1ujgvsw,4dzu2o,13wjv28,m59ukg,1lntvk0,hpgcg0,1h80dfk,zgqcxs,1yzadxc,8ttc74,18cdd6o,ql3cow,1q3ndog,9xrpq8,19gbqps,rp1q80,1r7lr7k,124phc,10koqgw,itepz4,1ibyqyo,edl7uo,1dw58u8,w4v8cg,1vnf9c0,5hy7ls,150i8lc,n9883k,1mrs934,c5ogsg,1bo8hs0,twyha8,1tfii9s,3a1gjk,12slhj4,l1bh1c,1kjvi0w,glhyww,1g41zwg,ycrzeo,1xvc0e8,7puyo0,178eznk,ph4z5s,1ozp05c,ahqwhs,1a0axhc,s90wzk,1rrkxz4,1m3w8w,114nx8g,jddwqo,1ivxxq8,exkem8,1eg4fls,wouf40,1w7eg3k,61xedc,15khfcw,nt7ev4,1nbrfuo,cpnnk0,1c87ojk,ugxo1s,1tzhp1c,3u0nb4,13ckoao,llansw,1l3uosg,h5h5og,1go16o0,ywr668,1yfb75s,89u5fk,17se6f4,q145xc,1pjo6ww,9dsiyo,18wcjy8,r52jgg,1qnmkg0,i5ips,100pjpc,i9fj7k,1hrzk74,dtm134,1dc622o,vkw1kw,1v3g2kg,4xz0u8,14gj1ts,mp91c0,1m7t2bk,blpa0w,1b49b0g,tczaio,1svjbi8,2q29s0,128mark,khca9s,1jzwb9c,g1is5c,1fk2t4w,xsssn4,1xbctmo,75vrwg,16ofsw0,ox5se8,1ofptds,amqp6o,1a5aq68,se0pog,1rwkqo0,1r3oxs,119npxc,jidpfk,1j0xqf4,f2k7b4,1el48ao,wtu7sw,1wce8sg,66x728,15ph81s,ny77k0,1ngr8jk,cung8w,1cd7h8g,ulxgqo,1u4hhq8,3z0g00,13hkgzk,lqaghs,1l8uhhc,hagydc,1gt0zcw,z1qyv4,1ykazuo,8ety4g,17xdz40,q63ym8,1ponzls,9isbnk,191ccn4,ra2c5c,1qsmd4w,n5beo,105pce8,iefbwg,1hwzcw0,dylts0,1dh5urk,vpvu9s,1v8fv9c,52ytj4,1b993pc,kmc2yo,1xgcmbk,a2rif4,10poj5s,w9v11c,1mws1s0,3f198g,1g91slc,pm4ruo,1q8n6dc,demn0g,141jnr4,sxzwg0,1jkwx6o,6qwdts,1afabk0,jsdatc,1wmdu68,d4n1mo,13rk2dc,zbqk8w,1pynkzk,x4wsg,1dr5g5c,n48feo,1taipkw,ggi680,173f6yo,s414ao,1iqy51c,5wxlog,1c37vuo,lgav40,1yabegw,98sq9s,zvpr0g,vfw8w0,1m2t9mo,2l2h34,1ff30g0,os5zpc,1rz2n0g,f523nk,15rz4e8,uofd34,1lbcdts,8hbugw,193u8zk,igx88w,1vaxrls,bt6z28,12g3zsw,y0ahog,1on7if4,19meio,1e3mxvk,ngpx4w,1tn07b4,gszny8,17fwoow,qsl1q8,1hfi2gw,4lhj40,1arrta8,k4usjk,1wyvbwg,az86ww,11m57nk,x6bpj4,1nt8q9s,4bhxq8,1h5ih34,qilgcg,1r53uv4,eb3bi8,14y0c8w,tugkxs,1khdlog,7nd2bk,19xt14w,jaw0e8,1w4wjr4,cn5r7k,13a2ry8,yu99ts,1ph6akg,fnmdc,1d9o5q8,mmr4zk,1st1f5s,fz0vsw,16lxwjk,sbitc0,1iyfu2o,64faps,1capkw0,lnsk5c,1yht3i8,9gafb4,tzgdmo,1yldz4,ktts00,dm4c1s,z7zpq8,5t6r5s,oof56o,c6xeyo,r6bhmo,4.09E+070,izngu8,fnsc8w,w14dts,863aww,o1y22o,a6icxs,t1qqyo,10vrb4,lk1pmo,f1b94w,xwjn5s,4hqolc,qeults,cjewow,2zfe2o,hotvcw,759atc,8y6nsw,1ghmgw,e0h91c,6is7pc,bikwlc,3bwvsw,gddssg,8kg7wg,b2ckcg,irzsw,ej7hmo,5dkw00'.split(',')
    };
    const apsPriceMap = apsPriceMapData.code.reduce((p, x, i) => {
      p[x] = apsPriceMapData.price[i];
      return p;
    }, {});
    const sspCountryInclude = {
      unruly: 'US,UK',
      sharethrough: 'US,UK,CA'
    };
    const sspCountryExclude = {};
    const sspBrowserExclude = {
      //'Opera', 'Firefox', 'Safari', 'Internet Explorer', 'Microsoft Edge', 'Chrome' and "unknown" in other cases, but it's possible that platform.js can define other values in window._vuukleGeo.browser
      "ogury": ["Firefox", "Opera"]
    };
    const sspBrowserInclude = {};
    const nonAdxAdvertisers = [5021216138, 4776294913, 5013183321, 4410490550, 5043796710, 4875868704, 4446948670];
    const prebidAdvertiser = 4430731919;
    const ourNetwork = 213794966;
    const defaultOrder = '7';
    window.vuukleSlots = window.vuukleSlots || [];
    window.vuuklehb = window.vuuklehb || {};
    window.vuuklehb.que = window.vuuklehb.que || [];
    window.googletag = window.googletag || {};
    window.googletag.cmd = window.googletag.cmd || [];
    const auctionTypeNoVideo = 1;
    const auctionTypeOnlyVideo = 2;
    class VuuklePlayer {
      constructor(time, commit, auctionType) {
        if (window.vuuklePlayerComponent) {
          dwarn('double loadind detected, return existing instance');
          return window.vuuklePlayerComponent;
        }
        if (window._VuukleFrame) return;
        dlog(`Build time: ${time}, Commit: ${commit}, auctionType: ${auctionType}`);
        this.time = time;
        this.commit = commit;
        this.auctionType = auctionType;
        this._showed = false;
        this._fullLoaded = false;
        this._showedSlots = {};
        this._displayedAdx = {};
        this._refreshExcluded = {};
        this._forceRefresh = {};
        this.apsPresent = false;
        this._firstAuction = true;
        this._initializedSlots = {};
        this._interstitialAdded = false;
        this._interstitialUnits = [];
        this._slotParams = {};
        this.adUnitCodes = {};
        this._notDisplayedSlots = {};
        this._refQueue = [];
        this._lastRefreshSlot = {};
        this._lastAuction = {};
        this._bidxData = {};
        this._refreshNoAdx = {};
        this._allowGAMRefresh = {};
        this._auctionOptimization = {};
        this._enabledBidders = {};
        this.apsPriceMap = apsPriceMap;
        this._lastBid = {};
        this._lastWonBid = {};
        this._requested = {};
        this._statData = {
          timings: {},
          errors: {}
        };
        this._amzniids = {};
        this._textSlots = {};
        this._counters = {
          prebidAuction: {},
          prebidBid: {},
          refreshSlot: {},
          renderedAd: {}
        };
        this._nonPersonalizedAds = 1;
        // this._ourCMPLoaded = false
        this._CMPData = null;
        this._CCPAData = null;
        this._CMPConsent = false;
        this._floatBanners = {
          dock: {}
        };
        this._checkAuctionTime = 1000;
        this._performance = {
          scriptLoaded: Date.now()
        };
        this._auctionsCount = 0;
        this._observing = {
          thresholds: {},
          adunits: {},
          refreshed: {},
          // refreshInView
          adInView: {},
          dfpViewable: {},
          refreshInViewThreshold: {},
          adunitsMutations: {},
          bannerView: {},
          adxActiveView: {
            threshold: {}
          },
          activeView: {
            threshold: {},
            state: {},
            refreshed: {},
            dfpRefreshed: {},
            onlyFirst: {}
          }
        };

        //this._preload();
        this._dfpCreative();
        this._addPrebidEventHandlers();
        vuuklehb.loadPassbackAds = this._loadPassbackAds.bind(this);
        vuuklehb.vInitSlot = this._vInitSlot.bind(this);
        vuuklehb.vRefresh = this._tryToRefresh.bind(this);
        vuuklehb.processQueue();
        this._load();
      }
      _preload() {
        preload('https://securepubads.g.doubleclick.net/tag/js/gpt.js');
        preload('https://get.geojs.io/v1/ip/geo.json', 'fetch', false, {
          crossOrigin: 'anonymous'
        });
        // preload('https://c.amazon-adsystem.com/aax2/apstag.js');
      }
      _getSource() {
        if (!document.referrer || document.referrer.includes('null') || new RegExp(this._site, 'i').test(document.referrer)) {
          return 'direct_internal';
        } else if (/facebook/i.test(document.referrer)) {
          return 'facebook';
        } else if (/google/i.test(document.referrer)) {
          return 'google';
        }
        return 'referral';
      }
      _getTimeout() {
        if (!this.config && this.config.pbcfg) {
          return 1000;
        }
        return this.config.pbcfg.timeout;
      }
      _vInitSlot(slot) {
        let self = this;
        if (!self._fullLoaded) {
          dlog('gpt preinit not needed');
          return;
        }
        googletag.cmd.push(function () {
          self._createGPTSlots.bind(self)(slot);
        });
      }
      _getWords() {
        let pn;
        try {
          pn = window.top.location.pathname;
        } catch (error) {
          pn = window.location.pathname;
        }
        return pn.replace(/["',=!+#*~;^()<>[\]?@&|]/g, '_').split(/[-_/]/).filter(x => x);
      }
      _addPrebidEventHandlers() {
        const self = this;

        // send bid won information
        vuuklehb.que.push(function () {
          vuuklehb.onEvent('bidTimeout', function (data) {
            self._statData.timings[data.bidder] = {
              time: data.timeout,
              timeout: true
            };
          });
          vuuklehb.onEvent('bidResponse', function (data) {
            self._statData.timings[data.bidder] = {
              time: data.timeToRespond
            };
            dlog('get bid response', data);
          });
          vuuklehb.onEvent('auctionDebug', function (data) {
            if (data.type === 'ERROR') {
              self._statData.errors[Array.from(data.arguments).join('')] = 1;
            }
          });
          vuuklehb.onEvent('bidWon', function (data) {
            if (self._lastWonBid[data.adUnitCode] && self._lastWonBid[data.adUnitCode][data.adId]) {
              dlog('ignore duplicate won event');
              return;
            }
            self._lastWonBid[data.adUnitCode] = self._lastWonBid[data.adUnitCode] || {};
            self._lastWonBid[data.adUnitCode][data.adId] = true;
            data.timings = self._statData.timings;
            data.errors = Object.keys(self._statData.errors);
            self._statData.timings = {};
            self._statData.errors = {};
            self._sendStats(data);
          });
          vuuklehb.onEvent('adRenderSucceeded', function (data) {
            dlog('bid rendered', data);
          });
          vuuklehb.onEvent('setTargeting', function (data) {
            dlog('setTargeting event', data);
          });
        });
      }
      _sendStats(data, beacon) {
        const self = this;
        const sdata = {};
        const fields = ["bidderCode", "width", "height", "statusMessage", "adId", "mediaType", "source", "cpm", "currency", "netRevenue", "originalCpm", "responseTimestamp", "requestTimestamp", "bidder", "adUnitCode", "timeToRespond", "size", "status", "timings", "errors"];
        for (let i in fields) {
          if (!Object.prototype.hasOwnProperty.call(fields, i)) {
            continue;
          }
          let f = fields[i];
          sdata[f] = data[f];
        }
        if (data.bidder == 'adkernel') {
          var _data$meta, _data$meta2;
          sdata.bidder = adkernelMap[(_data$meta = data.meta) === null || _data$meta === void 0 ? void 0 : _data$meta.demandSource] || ((_data$meta2 = data.meta) === null || _data$meta2 === void 0 ? void 0 : _data$meta2.demandSource) || data.bidder;
        }
        sdata.brandName = data.meta && data.meta.brandName ? data.meta.brandName : '';
        try {
          sdata.url = window.top.location.href;
        } catch (error) {
          sdata.url = window.location.href;
        }
        sdata.referrer = document.referrer;
        sdata.host = self._site;
        sdata.country = self._isGDPR ? 'GDPR' : self._geo.country_code;
        sdata.city = self._geo.city;
        const bdata = getBrowser();
        sdata.device = bdata.device;
        sdata.os = bdata.os;
        sdata.browser = bdata.browser;
        sdata.cpm = data.cpm;
        dlog('Send debug info', sdata);
        try {
          if (beacon) {
            // with sendBeacon we can send a request when a page closes without it being cancelled
            navigator.sendBeacon('//publish.vuukle.com/bq-publish/v2/addAdInfo', JSON.stringify(sdata));
          } else {
            fetch('//publish.vuukle.com/bq-publish/v2/addAdInfo', {
              method: 'POST',
              headers: {
                'Content-Type': 'text/plain'
              },
              body: JSON.stringify(sdata)
            });
          }
        } catch (error) {
          dwarn('sendStats error', error);
        }
      }
      enableDebug() {
        enableDebug();
      }
      disableDebug() {
        disableDebug();
      }
      enablePbDebug() {
        enablePbDebug();
        vuuklehb.setConfig({
          debug: true
        });
      }
      disablePbDebug() {
        disablePbDebug();
        vuuklehb.setConfig({
          debug: false,
          debugging: {
            enabled: false
          }
        });
      }
      _dfpCreative() {
        let loc, site;
        try {
          loc = window.top.location;
          site = getParam(loc.search, 'vuusite') || window.top.vuukleSite || loc.hostname || loc.host;
        } catch (e) {
          loc = window.location;
          site = getParam(loc.search, 'vuusite') || window.vuukleSite || loc.hostname || loc.host;
        }
        if (site.match(/google/) && document.referrer) {
          site = getParam(document.referrer, 'vuusite') || document.referrer.replace(/.*:\/\/([^/:]*).*/, '$1') || site;
        }
        this._site = site.replace(/^www\./, '').replace(/^m\./, '');
        dlog('detected site', this._site);
      }
      findSlotById(id) {
        return googletag.pubads().getSlots().find(slot => slot.getSlotElementId() == id);
      }
      async _loadIabCat() {
        this._cat = window._vuukleIabtopic;
        if (this._cat) {
          return new Promise(resolve => {
            googletag.cmd.push(() => {
              googletag.pubads().setTargeting('category', this._cat);
              resolve();
            });
          });
        }
      }
      async _loadArticleBrandSafe() {
        this._articleBrandSafe = window._vuukleArticleBrandSafe;
        if (this._articleBrandSafe !== undefined) {
          dlog("set isArticleBrandSafe targeting", this._articleBrandSafe);
          return new Promise(resolve => {
            googletag.cmd.push(() => {
              googletag.pubads().setTargeting('isArticleBrandSafe', this._articleBrandSafe);
              resolve();
            });
          });
        }
      }
      async _load() {
        const tiab = Date.now();
        this._loadIabCat().then(() => dlog('load_time _loadIabCat', Date.now() - tiab));
        const tabs = Date.now();
        this._loadArticleBrandSafe().then(() => dlog('load_time _loadArticleBrandSafe', Date.now() - tabs));
        const t1 = Date.now();
        let gi = this._loadGeoip().then(() => dlog('load_time _loadGeoip', Date.now() - t1));
        const t3 = Date.now();
        await this._fetchConfig(gi).then(() => dlog('load_time _fetchConfig', Date.now() - t3));
        const t4 = Date.now();
        this._checkEnableBQ().then(() => dlog('load_time _checkEnableBQ', Date.now() - t4));
        const t5 = Date.now();
        this._trackFiveSecondPageExit();
        dlog('load_time _trackFiveSecondPageExit', Date.now() - t5);
        const tv = Date.now();
        const iplayer = this._initPlayer().then(() => dlog('load_time _initPlayer', Date.now() - tv));
        // const t8 = Date.now()
        // this._loadSentry().then(()=>dlog('load_time _loadSentry', Date.now()-t8))
        const t9 = Date.now();
        this._loadConfiant(gi).then(() => dlog('load_time _loadConfiant', Date.now() - t9));
        let atag = Promise.resolve();
        if (this.apsPresent) {
          atag = this._loadApsTag();
        }
        this._atag = atag;
        const t10 = Date.now();
        await Promise.all([gi]);
        dlog('load_time await [gi, lcmp]', Date.now() - t10);
        const t11 = Date.now();
        this._checkConsent().then(() => dlog('load_time _checkConsent', Date.now() - t11));
        const t12 = Date.now();
        this._loadGPT().then(() => dlog('load_time _loadGPT', Date.now() - t12));
        if (this.config) {
          await Promise.all([iplayer, atag]);
          const t13 = Date.now();
          await this._loadPrebid().then(() => dlog('load_time _loadPrebid', Date.now() - t13));
          this._checkRequestAd();
        }
        this._fullLoaded = true;
        dlog('load_time _fullLoaded', Date.now() - t1);
      }
      async _checkEnableBQ(check) {
        if (!(this.config.enableBQ || check) || this._bqSent) {
          return;
        }

        // Send view_page BQ event
        this._bqSent = true;
        const data = this._generateBQData('view_page');
        this._sendBQData(data);
      }
      async _sendBQData(data, beacon) {
        dlog('send bq data', data);
        try {
          if (beacon) {
            navigator.sendBeacon('https://publish.vuukle.com/bq-publish', JSON.stringify(data));
          } else {
            let sdata = [];
            for (let k in data) {
              if (!Object.prototype.hasOwnProperty.call(data, k)) {
                continue;
              }
              sdata.push(encodeURIComponent(`"${k}"`) + ':' + encodeURIComponent(`"${data[k]}"`));
            }
            // Generate JSONP callback from data and send to BQ server
            const search = 'callback=&{' + sdata.join(',') + '}&_=1489139930741';
            fetch('https://publish.vuukle.com/bq-publish?' + search);
          }
        } catch (error) {
          dwarn('sendBQData error', error);
        }
      }
      _generateBQData(action) {
        const bdata = getBrowser();
        const data = {
          "action": action,
          "hashed_email": "",
          "refDomain": "",
          "sessionId": "",
          "version": "4.20",
          "articleImg": "",
          "articleTitle": "",
          "article_id": "",
          "referrer": "",
          "tags": "",
          "browser": bdata.browser,
          "device": bdata.device,
          "os": bdata.os,
          "hashed_article_url": ""
        };

        // try reading article title from meta tag
        data.articleTitle = getTextFromHTML(getMetaContentByName('property', 'og:title'));

        // Update refDomain
        if (document.referrer) {
          // We need only host name from referrer so we can do this with
          // help of creating anchor and getting hostname from it.
          const refLink = document.createElement('a');
          refLink.href = document.referrer;
          data.refDomain = refLink.hostname;
        }
        data.sessionId = this._getSessionID();
        try {
          data.hashed_article_url = window.top.location.href;
        } catch (e) {
          data.hashed_article_url = window.location.href;
        }
        if (this.config.pbcfg && this.config.pbcfg.config && this.config.pbcfg.config.schain && this.config.pbcfg.config.schain.config && this.config.pbcfg.config.schain.config.nodes && this.config.pbcfg.config.schain.config.nodes[0]) {
          data.hostname = this.config.pbcfg.config.schain.config.nodes[0].sid;
        }
        if (this.config.pbcfg && this.config.pbcfg.adUnits && this.config.pbcfg.adUnits[0] && this.config.pbcfg.adUnits[0].host) {
          data.pubdomain = this.config.pbcfg.adUnits[0].host;
        }
        return data;
      }
      _trackFiveSecondPageExit() {
        if (!this.config.track5s || this._fiveSecondTracked) {
          return;
        }
        this._fiveSecondTracked = true;
        const self = this;
        function trackPageClose() {
          if (document.visibilityState === 'hidden') {
            const data = self._generateBQData('exit_5s');
            self._sendBQData(data, true);
          }
        }
        window.addEventListener('visibilitychange', trackPageClose);
        setTimeout(() => window.removeEventListener('visibilitychange', trackPageClose), 5000);
      }

      // get user session ID from cookie or generate a new session ID
      _getSessionID() {
        const ID = getCookie('vsid');
        if (!ID && this._canUpdateStorage) {
          const newID = generateGUID();
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 30);
          setCookie('vsid', newID, {
            expires: expirationDate,
            SameSite: 'Lax'
          });
          return newID;
        }
        return ID || generateGUID();
      }

      // async _loadSentry() {
      //     if (!this.config.sentry) {
      //         return;
      //     }

      //     await insertScriptLoadPromise(`https://js.sentry-cdn.com/${this.config.sentry.key}.min.js`, {
      //         crossorigin: 'anonymous',
      //     })

      //     await new Promise(resolve => {
      //         Sentry.onLoad(resolve);
      //         Sentry.forceLoad();
      //     })

      //     if (this.config.sentry.options) {
      //         Sentry.init(this.config.sentry.options)
      //     }
      // }

      _checkRefreshInView(id, intersectionRatio) {
        let isIntersecting = false;
        let requested = false;
        // inViewRefresh
        if (this._observing.refreshInViewThreshold[id]) {
          const th = this._observing.refreshInViewThreshold[id] / 100;
          isIntersecting = isIntersecting || intersectionRatio >= th;
        }
        let statChange = this._observing.adunits[id] != isIntersecting;
        if (statChange) {
          dlog(`observing change refreshInView status`, id, isIntersecting);
        }
        if (isIntersecting && statChange && (!this._observing.firstRefreshed[id] || !this._observing.firstRefreshOnly[id])) {
          this._observing.firstRefreshed[id] = true;
          this._requestAd([id]);
          requested = true;
        }
        this._observing.adunits[id] = isIntersecting;

        // adxActiveViewRefresh
        const axav = this._observing.adxActiveView;
        if (axav.threshold[id]) {
          const th = axav.threshold[id];
          const slot = vuukleSlots.filter(x => x.getSlotElementId() === id)[0];
          if (intersectionRatio >= th && slot.getTargeting('noAdX').length > 0) {
            slot.clearTargeting('noAdX');
          } else {
            slot.setTargeting('noAdX', 'true');
          }
        }

        // activeViewRefresh
        isIntersecting = false;
        const av = this._observing.activeView;
        if (av.threshold[id]) {
          const th = av.threshold[id];
          isIntersecting = intersectionRatio >= th;
        }
        statChange = av.state[id] != isIntersecting;
        if (statChange) {
          dlog(`observing change activeView status`, id, isIntersecting);
        }
        const oldAW = av.state[id];
        const refTime = (this.config.activeViewRefreshTimeout || 1) * 1000;
        av.state[id] = isIntersecting;
        if (av.state[id] && !oldAW && !requested && document.visibilityState == 'visible') {
          dlog('activeViewRefresh start timeout', id);
          setTimeout(() => {
            this._realRefreshInView(av, id);
          }, refTime);
        }
      }
      _realRefreshInView(av, id) {
        if (!av.state[id]) {
          // if state changed since refTime
          return;
        }
        dlog('activeViewRefresh end timeout', id);
        const oldAWDR = av.dfpRefreshed[id];
        av.dfpRefreshed[id] = true;
        if (!oldAWDR && !this.inAuction && this.config.activeViewFirstRefresh) {
          dlog('activeViewFirstRefresh real refresh', id);
          const slot = vuukleSlots.filter(x => x.getSlotElementId() === id)[0];
          let refTarget = slot.getTargeting("refreshIteration");
          let ref = refTarget.length > 0 ? Math.floor(refTarget[0]) : -1;
          ref++;
          slot.setTargeting("refreshIteration", ref.toString());
          this._setDebugValue(id, 'G_refs', ref.toString());
          this._lastRefreshSlot[id] = Date.now();
          delete this._notDisplayedSlots[id];
          if (!slot.isFake) {
            googletag.display(id);
            if (!googletag.pubads().isInitialLoadDisabled()) {
              googletag.pubads().refresh([slot]);
            }
            this._counters.refreshSlot[id] = (this._counters.refreshSlot[id] || 0) + 1;
          }
        } else {
          this._requestAd([id]);
        }
      }
      showDebugInfo(element, adDiv) {
        if (!isDebug('panel')) {
          return;
        }
        let totalTime = 0;
        let timeViewed = 0;
        let visibilityPercentage = 0;
        let timeViewedInterval;
        let isBeingViewed = false;
        const advertisementId = adDiv.id;
        const debugPanel = document.createElement('div');
        const adDivId = document.createElement('p');
        const gptDivId = document.createElement('p');
        const geoInfo = document.createElement('p');
        const totalTimeSpentText = document.createElement('p');
        const totalTimeViewedText = document.createElement('p');
        const visibilityText = document.createElement('p');
        const closeButton = document.createElement('button');
        const debugPanelStyle = document.createElement('style');
        debugPanel.style.cssText = `
          z-index: 10000;
          background: #4885ED;
          text-align: left;
          position: absolute;
          border: 2px solid #FACC2B;
          width: fit-content;
          max-height: 100px;
          overflow-y: scroll;
        `;
        const paragraphStyles = `
          display: block !important;
          margin: 0px !important;
          padding: 0px !important;
          line-height: 1.15 !important;
          color: #fff !important;
          font-size: 14px !important;
        `;
        closeButton.style.cssText = `
          border: 0 !important;
          background: transparent !important;
          color: #fff !important;
          float: right;
          cursor: pointer;
          padding: 0 !important;
          margin: 0 !important;
          line-height: 1 !important;
        `;
        debugPanelStyle.innerHTML = `
          .vuukle-ad-debug-panel2::-webkit-scrollbar {
            width: 8px;
          }
          .vuukle-ad-debug-panel2::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 10px;
            background: #fff;
          }
          .vuukle-ad-debug-panel2 {
            scrollbar-width: thin;
          }
        `;
        const paragraphs = [adDivId, gptDivId, geoInfo, totalTimeSpentText, totalTimeViewedText, visibilityText];
        paragraphs.forEach(paragraph => {
          debugPanel.appendChild(paragraph);
          paragraph.style.cssText = paragraphStyles;
        });
        closeButton.textContent = '[x]';
        closeButton.ariaLabel = 'Close';
        debugPanel.className = 'vuukle-ad-debug-panel2';
        debugPanel.id = `vuukle-${advertisementId}-debug-panel2`;
        debugPanel.prepend(closeButton);
        debugPanelStyle.id = 'vuukle-debug-panel2-style';
        document.body.appendChild(debugPanel);
        if (!document.getElementById('vuukle-debug-panel2-style')) {
          document.body.appendChild(debugPanelStyle);
        }
        gptDivId.textContent = `#${advertisementId}`;
        const tick = setInterval(() => {
          var _element$parentElemen, _this$_geo;
          totalTime += 1000;
          totalTimeSpentText.textContent = `t=${getFormattedTime(totalTime)}`;
          const coords = getOffset(element);
          debugPanel.style.top = `${coords.top}px`;
          debugPanel.style.left = `${coords.left}px`;
          if ((_element$parentElemen = element.parentElement) !== null && _element$parentElemen !== void 0 && _element$parentElemen.id) {
            var _element$parentElemen2;
            adDivId.textContent = `#${(_element$parentElemen2 = element.parentElement) === null || _element$parentElemen2 === void 0 ? void 0 : _element$parentElemen2.id}`;
          }
          if ((_this$_geo = this._geo) !== null && _this$_geo !== void 0 && _this$_geo.country_code) {
            var _this$_geo2;
            geoInfo.textContent = `country=${(_this$_geo2 = this._geo) === null || _this$_geo2 === void 0 ? void 0 : _this$_geo2.country_code}`;
          }
        }, 1000);
        const allPercentages = generateArrayOfNumbers(0, 0.01, 1);
        const callback = entries => {
          entries.forEach(entry => {
            const {
              intersectionRatio
            } = entry;
            if (intersectionRatio >= 0.5 && !isBeingViewed) {
              adDiv.style.border = `4px dashed #4885ED`;
              isBeingViewed = true;
              timeViewedInterval = setInterval(() => {
                timeViewed += 1000;
                totalTimeViewedText.textContent = `vt=${getFormattedTime(timeViewed)}`;
              }, 1000);
            }
            if (intersectionRatio < 0.5 && isBeingViewed) {
              adDiv.style.border = '4px dashed gray';
              isBeingViewed = false;
              clearInterval(timeViewedInterval);
            }
            visibilityPercentage = intersectionRatio * 100;
            visibilityText.textContent = `p=${Math.round(visibilityPercentage)}%`;
          });
        };
        const observer = new IntersectionObserver(callback, {
          threshold: allPercentages
        });
        observer.observe(element);
        /** Remove intervals, events, disconnect IObserver before deleting the debug panel */
        closeButton.addEventListener('click', () => {
          var _debugPanel$parentNod;
          observer.disconnect();
          clearInterval(tick);
          clearInterval(timeViewedInterval);
          (_debugPanel$parentNod = debugPanel.parentNode) === null || _debugPanel$parentNod === void 0 ? void 0 : _debugPanel$parentNod.removeChild(debugPanel);
        });
      }
      _setRefreshedTargetings(id, intersectionRatio) {
        const slot = vuukleSlots.filter(x => x.getSlotElementId() === id)[0];
        let ratioKey = 0;
        const ranges = [0, 0.25, 0.5, 0.75];
        const rangesStr = ['0-24%', '25-49%', '50-74%', '75-100%'];
        for (const k in ranges) {
          if (!Object.hasOwnProperty.call(ranges, k)) {
            continue;
          }
          let t = ranges[k];
          if (intersectionRatio >= t) {
            ratioKey = k;
          }
        }
        const ratio = ranges[ratioKey];
        if (slot && ratio != this._observing.adInView[id]) {
          const rstr = rangesStr[ratioKey];
          slot.setTargeting('adInView', rstr);
          dlog('observing change adInView', id, rstr, intersectionRatio);
        }
        this._observing.adInView[id] = ratio;
      }
      _bannerObserverFunc(entries) {
        entries.forEach(entry => {
          const id = entry.target.id;
          this._observing.bannerView[id] = entry.intersectionRatio;
          this._checkRefreshInView(id, entry.intersectionRatio);
          this._setRefreshedTargetings(id, entry.intersectionRatio);
        });
      }
      _observeAdunit(id) {
        this._observeChanging(id);
        if (id in this._observing.adunits) {
          return;
        }
        if (!window.IntersectionObserver) {
          dwarn('banners observing not supported');
          this._observing.adunits[id] = true;
          this._observing.adInView[id] = 1;
          vuukleSlots.filter(x => x.getSlotElementId() === id).forEach(s => s.setTargeting('adInView', '75-100%'));
          return;
        }
        this._observing.adunits[id] = false;
        this._observing.adInView[id] = 0;
        for (const t of [0.8, 0.5, 0.3]) {
          this._observing.thresholds[t] = true;
        }
        const sspv = this.config.ssp_viewability || {};
        for (const bidder in sspv) {
          if (!Object.hasOwnProperty.call(sspv, bidder)) {
            continue;
          }
          const val = sspv[bidder];
          this._observing.thresholds[val / 100] = true;
        }
        const options = {
          threshold: Object.keys(this._observing.thresholds).map(Number).sort()
        };
        this._observing.observer = this._observing.observer || new IntersectionObserver(this._bannerObserverFunc.bind(this), options);
        const element = document.getElementById(id);
        if (!element) {
          derr('observed banner element not found', id);
          return;
        }
        dlog('setup observing', id);
        this._observing.observer.observe(element);
      }
      _observeChanging(id) {
        if (id in this._observing.adunitsMutations) {
          return;
        }
        this._observing.adunitsMutations[id] = true;
        if (!window.MutationObserver) {
          dwarn('banners mutation observing not supported', id);
          return;
        }
        this._observing.mtobserver = this._observing.mtobserver || new MutationObserver(this._bannerMtObserverFunc.bind(this));
        const element = document.getElementById(id);
        if (!element) {
          derr('mutation observed banner element not found', id);
          return;
        }
        dlog('setup mutation observing', id);
        const config = {
          childList: true
        };
        this._observing.mtobserver.observe(element, config);
      }
      _bannerMtObserverFunc(mutationsList) {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            const sid = mutation.target.id;
            const otherDiv = document.querySelector(`#${sid} > div > div`);
            if (otherDiv) {
              const isUnblockiaDiv = window.unblockiaVuukle && otherDiv.className.includes('ub-3dlabel');
              if (!isUnblockiaDiv) {
                dlog('mutation observer detects other network', sid);
                this._sendStats({
                  bidder: 'other_network',
                  adUnitCode: otherDiv.id,
                  adId: sid
                });
              }
            }
          }
        }
      }
      _initFloatBanner(adContainer, element) {
        this._observeBanners();
        if (element.container) {
          return;
        }
        element.float = false;
        element.top = this.config.floatingTop || 0;
        const id = adContainer.id;
        if (adContainer.nextElementSibling && adContainer.nextElementSibling.classList.contains('vuukle-ad-label')) {
          element.adLabel = adContainer.nextElementSibling;
        }
        const container = document.createElement('div');
        element.container = container;
        container.id = id + '-cont';
        container.style.position = 'relative';
        container.style.zIndex = element.zIndex || this.config.dockZIndex || 10;
        const wrapper = document.createElement('div');
        element.wrapper = wrapper;
        wrapper.id = id + '-wrap';
        adContainer.before(container);
        container.appendChild(wrapper);
        wrapper.appendChild(adContainer);
        if (element.adLabel) {
          wrapper.appendChild(element.adLabel);
        }
      }
      _setBannerFloat(element, isFloat) {
        var _element$container$ne;
        if (element.float == isFloat) {
          return;
        }
        if (!element.adLabel && (_element$container$ne = element.container.nextElementSibling) !== null && _element$container$ne !== void 0 && _element$container$ne.classList.contains('vuukle-ad-label')) {
          element.adLabel = element.container.nextElementSibling;
          element.wrapper.appendChild(element.adLabel);
        }
        element.float = isFloat;
        dlog('set element floating', isFloat, element);
        const returnAdToOriginalPosition = () => {
          element.wrapper.style.position = 'relative';
          element.wrapper.style.top = '';
          element.container.style.width = '';
          element.container.style.height = '';
        };
        if (isFloat) {
          let h = element.wrapper.clientHeight;
          if (element.adLabel) {
            h += element.adLabel.clientHeight;
          }
          const floatAd = () => {
            element.wrapper.style.position = 'fixed';
            element.wrapper.style.top = `${element.top}px`;
            element.container.style.width = element.wrapper.clientWidth + 'px';
            element.container.style.height = h + 'px';
          };
          floatAd();

          // If the 'float until' element is in the viewport, we should return the ad to the original position until the 'float until' element is out of the viewport
          // This way for example we could make the docked ad float until the website's footer becomes visible and then make it float again when the footer is out of view
          if (this.config.floatUntilElement) {
            const floatElement = document.querySelector(this.config.floatUntilElement);
            if (floatElement && window.IntersectionObserver) {
              const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                  returnAdToOriginalPosition();
                  element.container.style.zIndex = 0;
                } else {
                  floatAd();
                  element.container.style.zIndex = element.zIndex || this.config.dockZIndex || 10;
                }
              }, {
                threshold: [0.01]
              });
              observer.observe(floatElement);
            }
          }
        } else {
          returnAdToOriginalPosition();
        }
      }
      _observeBanners() {
        if (this._floatBanners.observed) {
          return;
        }
        this._floatBanners.observed = true;
        window.addEventListener('scroll', () => {
          let maxTop = NaN;
          let floatedElem;
          for (const id in this._floatBanners.dock) {
            if (!Object.hasOwnProperty.call(this._floatBanners.dock, id)) {
              continue;
            }
            const element = this._floatBanners.dock[id];
            if (!element.container) {
              derr('invalid observed element');
              continue;
            }
            const br = element.container.getBoundingClientRect();
            if (br.top <= element.top && !(br.top < maxTop)) {
              maxTop = br.top;
              floatedElem = element;
            }
          }
          for (const id in this._floatBanners.dock) {
            if (Object.prototype.hasOwnProperty.call(this._floatBanners.dock, id)) {
              const element = this._floatBanners.dock[id];
              this._setBannerFloat(element, element === floatedElem);
            }
          }
          if (floatedElem) {
            this._setBannerFloat(floatedElem, true);
          }
        });
      }
      async _initPlayer() {
        if (!this.config || !this.config.player || !this.config.player.component) {
          return;
        }
        dlog('start player init');
        // this._player = new VuukleVideoPlayer(this.config, this);
        await insertScriptLoadPromise(this.config.player.scriptUrl || 'https://cdn.vuukle.com/static/player.js');
        this._player = new window.VuukleVideoPlayer(this.config, this);
        return this._player._initPlayer();
      }
      _geoInclude(geo) {
        let geoArr = geo.split(',');
        return this._geo ? ~geoArr.indexOf(this._geo.country_code) || ~geoArr.indexOf(this._geo.region) || ~geoArr.indexOf(this._geo.city) : false;
      }
      __oneOfValuesIsTrue(obj) {
        if (!obj) {
          return false;
        }
        for (let i in obj) {
          if (obj[i]) {
            return true;
          }
        }
        return false;
      }
      async _checkConsent() {
        if (!this._isGDPR) {
          return;
        }
        const self = this;
        let data;
        do {
          data = await new Promise(resolve => requestCMP(resolve));
          if (data) {
            dlog('new CMP data', data);
            self._CMPData = data;
            if (data.vendorData) {
              self._CMPConsent = data.vendorData.purpose ? self.__oneOfValuesIsTrue(data.vendorData.purpose.consents) : false;
              self._CMPConsent = self._CMPConsent || (data.vendorData.publisher ? self.__oneOfValuesIsTrue(data.vendorData.publisher.consents) : false);
              self._CMPConsent = self._CMPConsent || (data.vendorData.vendor ? self.__oneOfValuesIsTrue(data.vendorData.vendor.consents) : false);
            }
            dlog('cmp consent status', self._CMPConsent);
            googletag.cmd.push(() => {
              self._checkCMPNPA();
            });
          } else {
            await delay(10);
          }
        } while (!data);
      }
      _checkCMPNPA() {
        const accepted = this._isGdprCcpaAccepted();
        const self = this;
        self._nonPersonalizedAds = accepted ? 0 : 1;
        googletag.pubads().setPrivacySettings({
          nonPersonalizedAds: !accepted
        });
        dlog('personalized ads ' + (self._nonPersonalizedAds === 1 ? 'disabled' : 'enabled'));
        googletag.pubads().setTargeting('CMP_accepted', accepted ? '1' : '0');
        if (accepted) {
          vuuklehb.setConfig({
            deviceAccess: true,
            userSync: {
              syncEnabled: true,
              userIds: self.config.pbcfg.config.userSync.userIds
            }
          });
        }
      }
      _isGdprCcpaAccepted() {
        return this._isGDPR && this._CMPConsent || this._isCA && this.uspConsent() || !this._isGDPR && !this._isCA;
      }
      uspConsent() {
        var _data$usp, _data$usp2;
        const data = vuuklehb.getConsentMetadata();
        dlog('consent metadata', data);
        this._CCPAData = this._CCPAData || {};
        this._CCPAData.usPrivacy = (_data$usp = data.usp) === null || _data$usp === void 0 ? void 0 : _data$usp.usp;
        return data && ((_data$usp2 = data.usp) === null || _data$usp2 === void 0 ? void 0 : _data$usp2.usp) && data.usp.usp[1] != 'N' && data.usp.usp[2] != 'Y';
      }
      _checkRequestAd() {
        this._requestAd(undefined, undefined, undefined, true, true);
        if (isDebug()) {
          this._periodicTasks();
        }
        return;
      }
      _periodicTasks() {
        this._updateTimingsData('TSR', this._lastRefreshSlot);
        this._updateTimingsData('TSA', this._lastAuction);
        setTimeout(this._periodicTasks.bind(this), 1000);
      }
      _updateTimingsData(key, data) {
        for (const id in data) {
          if (!Object.prototype.hasOwnProperty.call(data, id)) {
            continue;
          }
          const ref = data[id];
          if (ref) {
            this._setDebugValue(id, key, getFormattedTime(Date.now() - ref));
          }
        }
      }
      async _loadConfiant(gi) {
        if (!this.config || !this.config.confiant) {
          return;
        }
        dlog('confiant start loading');
        if (this.config.confiantCountryInclude) {
          await gi;
          if (!this._geoInclude(this.config.confiantCountryInclude)) {
            dlog('exclude confiant by confiantCountryInclude');
            return;
          }
        }
        if (this.config.confiantCountryExclude) {
          await gi;
          if (this._geoInclude(this.config.confiantCountryExclude)) {
            dlog('exclude confiant by confiantCountryExclude');
            return;
          }
        }
        let myPropertyId = this.config.confiantID || 'RNw7xiqRu-6_97G1pl1Hr7_2fbE';
        if (!window.confiant) {
          window.confiant = {};
        }
        window.confiant[myPropertyId] = window.confiant[myPropertyId] || {
          clientSettings: {}
        };
        var clientSettings = window.confiant[myPropertyId].clientSettings || (window.confiant[myPropertyId].clientSettings = {});
        clientSettings.prebidNameSpace = 'vuuklehb';
        clientSettings.callback = this._confiantCallback.bind(this);
        clientSettings.prebidCustomizeBid = function (bid) {
          dlog('confiant customize bid', bid);
          if (bid.bidder == 'adkernel') {
            var _bid$meta, _bid$meta2;
            bid.bidder = adkernelMap[(_bid$meta = bid.meta) === null || _bid$meta === void 0 ? void 0 : _bid$meta.demandSource] || ((_bid$meta2 = bid.meta) === null || _bid$meta2 === void 0 ? void 0 : _bid$meta2.demandSource) || bid.bidder;
          }
          return bid;
        };
        if (this.config.confiantExcludeBidder) {
          clientSettings.prebidExcludeBidders = this.config.confiantExcludeBidder.split(',').map(x => x.trim());
        }
        await insertScriptLoadPromise(`https://cdn.confiant-integrations.net/${myPropertyId}/gpt_and_prebid/config.js`);
        dlog('confiant loaded');
        return;
      }
      _confiantCallback(blockingType, blockingId, isBlocked, wrapperId, tagId, impressionData) {
        dlog('Confiant: ad blocked', {
          blockingType,
          blockingId,
          isBlocked,
          wrapperId,
          tagId,
          impressionData
        }, vuukleSlots);
      }
      _createGPTSlots(divId) {
        var _self$_geo;
        const self = this;
        dlog('DFP slots init', divId ? divId : '[autodetection]');
        if (!self.config) {
          derr('dfp init config not found');
          return;
        }
        self._splitSlots();
        let href;
        try {
          href = window.top.location.href;
          googletag.pubads().set('page_url', href);
        } catch (error) {
          href = window.location.href;
        }
        if (href.match(/\.googlesyndication.com/)) {
          href = document.referrer;
          googletag.pubads().set('page_url', href);
        }
        googletag.pubads().setTargeting("url", href);
        googletag.pubads().setTargeting("words", self._getWords());
        googletag.pubads().setTargeting("commit", self.commit);
        googletag.pubads().setCentering(true);
        googletag.pubads().setTargeting("unblockia", window.unblockiaVuukle ? '1' : '0');
        const source = self._getSource();
        if (source) {
          googletag.pubads().setTargeting("source", source);
        }
        self._checkCMPNPA();
        if ((_self$_geo = self._geo) !== null && _self$_geo !== void 0 && _self$_geo.country_code) {
          googletag.pubads().setTargeting('geo', self._geo.country_code);
        }
        const bdata = getBrowser();
        if (bdata !== null && bdata !== void 0 && bdata.device) {
          googletag.pubads().setTargeting("device", bdata.device);
        }
        for (const param of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
          let v, loc;
          try {
            loc = window.top.location;
            v = getParam(loc.search, param);
          } catch (e) {
            loc = window.location;
            v = getParam(loc.search, param);
          }
          if (v !== undefined) {
            googletag.pubads().setTargeting(param, v);
          }
        }
        if (self.config.dfp && self.config.dfp.targetings) {
          for (let t in self.config.dfp.targetings) {
            if (!Object.prototype.hasOwnProperty.call(self.config.dfp.targetings, t)) {
              continue;
            }
            googletag.pubads().setTargeting(t, self.config.dfp.targetings[t]);
          }
        }
        let vuukleSlots = window.vuukleSlots || (window.vuukleSlots = {});
        let slots = [];
        self.config.pbcfg.adUnits.forEach(function (unit) {
          if (!unit.mediaTypes || !unit.dfp || !unit.dfp.path || !(unit.mediaTypes.banner && unit.mediaTypes.banner.sizes) && !unit.mediaTypes.native) {
            return;
          }
          if (unit.mediaTypes.banner && unit.mediaTypes.banner.sizes) {
            unit.mediaTypes.banner.sizes.sort((a, b) => a[0] - b[0]);
          }
          if (unit.dfp.id && unit.dfp.id.match(/\*$/)) {
            const repId = unit.dfp.id.replace(/\*$/, '');
            if (divId && !divId.startsWith(repId)) {
              return;
            }
            const id = divId || repId;
            const target = divId ? `#${id}` : `div[id^=${id}]`;
            dlog('check units', target);
            document.querySelectorAll(target).forEach(e => {
              if (self._initializedSlots[e.id]) {
                return;
              }
              slots.push({
                slotId: unit.dfp.path,
                slotSizes: self._getSizes(unit, e),
                adId: e.id,
                maxHeight: unit.maxHeight,
                dock: !isMobile() && unit.dock,
                enableBQ: unit.enableBQ
              });
              self._initializedSlots[e.id] = true;
              self._refreshNoAdx[e.id] = unit.refreshNoAdx !== undefined ? self._checkRestrictions(unit.refreshNoAdx) : self._checkRestrictions(self.config.refreshNoAdx);
              self._allowGAMRefresh[e.id] = unit.allowGAMRefresh !== undefined ? self._checkRestrictions(unit.allowGAMRefresh) : self._checkRestrictions(self.config.allowGAMRefresh);
              self._auctionOptimization[e.id] = unit.auctionOptimization !== undefined ? self._checkRestrictions(unit.auctionOptimization) : self._checkRestrictions(self.config.auctionOptimization) !== false;
            });
          } else if (!self._initializedSlots[unit.code]) {
            let e = document.getElementById(unit.code);
            if (!e) {
              return;
            }
            slots.push({
              slotId: unit.dfp.path,
              slotSizes: self._getSizes(unit, e),
              adId: unit.code,
              refreshIteration: unit.vuukle.refreshIteration,
              maxHeight: unit.maxHeight,
              collapse: !!unit.collapseEmptyDiv,
              targetings: unit.dfp.targetings,
              interscroller: unit.interscroller,
              iscrollerHeight: unit.iscrollerHeight,
              dock: !isMobile() && unit.dock,
              refreshInView: unit.refreshInView,
              activeViewRefresh: unit.activeViewRefresh,
              activeViewThreshold: unit.activeViewThreshold,
              activeViewOnlyFirst: unit.activeViewOnlyFirst,
              adxActiveViewThreshold: unit.adxActiveViewThreshold,
              enableBQ: unit.enableBQ
            });
            self._initializedSlots[unit.code] = true;
            self._refreshNoAdx[unit.code] = unit.refreshNoAdx !== undefined ? self._checkRestrictions(unit.refreshNoAdx) : self._checkRestrictions(self.config.refreshNoAdx);
            self._allowGAMRefresh[unit.code] = unit.allowGAMRefresh !== undefined ? self._checkRestrictions(unit.allowGAMRefresh) : self._checkRestrictions(self.config.allowGAMRefresh);
            self._auctionOptimization[unit.code] = unit.auctionOptimization !== undefined ? self._checkRestrictions(unit.auctionOptimization) : self._checkRestrictions(self.config.auctionOptimization) !== false;
          }
        });
        let refSlots = [];
        slots.forEach(function (s) {
          let e = document.getElementById(s.adId);
          if (s.enableBQ) {
            self._checkEnableBQ(true);
          }
          if (s.interscroller) {
            self._setupInterscroll(s.adId, s.iscrollerHeight);
          }
          self._showedSlots[s.adId] = false;
          self._slotParams[s.adId] = self._slotParams[s.adId] || {};
          if (s.maxHeight) {
            self._slotParams[s.adId].maxHeight = s.maxHeight;
          }
          let slot;
          if (self._auctionOptimization[s.adId] && self.config.slotPreInit) {
            slot = new FakeSlot(s.slotId, s.slotSizes, s.adId);
          } else {
            slot = googletag.defineSlot(s.slotId, s.slotSizes, s.adId);
          }
          self._setDebugValue(s.adId, 'path', s.slotId);
          let needInit = !!slot;
          if (!slot) {
            dlog('dfp slot defined', s);
            slot = vuukleSlots.filter(x => x.getSlotElementId() === s.adId)[0];
          } else {
            slot.addService(googletag.pubads());
            vuukleSlots.push(slot);
          }
          if (s.collapse) {
            slot.setCollapseEmptyDiv(true, s.collapse);
          }
          if (!self._auctionOptimization[s.adId]) {
            slot.setTargeting("refreshIteration", "0");
          }
          self._setDebugValue(s.adId, 'G_refs', 0);
          self._lastRefreshSlot[s.adId] = Date.now();
          slot.setTargeting("adInView", '0-24%');
          slot.setTargeting('impressionViewable', '0');
          if (s.targetings) {
            for (let t in s.targetings) {
              if (!Object.prototype.hasOwnProperty.call(s.targetings, t)) {
                continue;
              }
              slot.setTargeting(t, s.targetings[t]);
            }
          }
          googletag.enableServices();
          if (needInit) {
            dlog('init slot', s, divId);
            self._initSlot(s, refSlots, slot);
          }
          if (s.dock) {
            self._floatBanners.dock[s.adId] = self._floatBanners.dock[s.adId] || {};
            self._initFloatBanner(e, self._floatBanners.dock[s.adId]);
          }
          if (s.refreshInView) {
            self._observing.refreshInViewThreshold[s.adId] = s.refreshInView;
          }
          if (s.activeViewRefresh) {
            self._observing.activeView.threshold[s.adId] = s.activeViewThreshold;
            self._observing.activeView.onlyFirst[s.adId] = s.activeViewOnlyFirst;
            self._observing.adxActiveView.threshold[s.adId] = s.adxActiveViewThreshold;
          }
          self._observeAdunit(s.adId);
          self.showDebugInfo(e.parentElement, e);
        });
        if (self._interstitialUnits.length > 0 && !self._interstitialAdded) {
          const unit = self._interstitialUnits[0];
          const interstitialSlot = googletag.defineOutOfPageSlot(unit.code, googletag.enums.OutOfPageFormat.INTERSTITIAL);
          self._showedSlots[unit.code] = false;
          if (interstitialSlot) {
            interstitialSlot.setTargeting("refreshIteration", "0");
            if (unit.dfp.targetings) {
              for (let t in unit.dfp.targetings) {
                if (!Object.prototype.hasOwnProperty.call(unit.dfp.targetings, t)) {
                  continue;
                }
                interstitialSlot.setTargeting(t, unit.dfp.targetings[t]);
              }
            }
            self._interstitialAdded = true;
            interstitialSlot.addService(googletag.pubads());
            dlog('create interstitial slot', interstitialSlot.getAdUnitPath());
            vuukleSlots.push(interstitialSlot);
            googletag.pubads().addEventListener('slotOnload', function (event) {
              if (interstitialSlot === event.slot) {
                dlog('interstitial slot is loaded');
              }
            });
            googletag.enableServices();
            // google don't support targeting updates after display
            // self._initSlot({ adId: interstitialSlot.getSlotElementId() }, refSlots, interstitialSlot);
          } else {
            derr('create interstitial failed');
          }
        }
        dlog('created dfp slots', clone(slots), refSlots, vuukleSlots, clone(self._showedSlots));
        if (refSlots.length > 0) {
          refSlots.forEach(s => {
            const id = s.getSlotElementId();
            self._updateBidx(id);
            self._lastRefreshSlot[id] = Date.now();
            self._counters.refreshSlot[id] = (self._counters.refreshSlot[id] || 0) + 1;
          });
          googletag.pubads().refresh(refSlots);
        }
      }
      _getSizes(unit, e) {
        let sizes = [];
        if (unit.mediaTypes.banner) {
          sizes = clone(unit.mediaTypes.banner.sizes);
          dlog('check_sizes', e.id, e.clientWidth, sizes);
          if (!this.config.disableSizeCheck) {
            sizes = sizes.filter(x => x[0] <= e.clientWidth);
          }
          sizes = sizes.length > 0 ? sizes : [unit.mediaTypes.banner.sizes[0]];
        }
        if (unit.mediaTypes.native) {
          sizes.push('fluid');
        }
        return sizes;
      }
      _initSlot(s, refSlots, slot) {
        let self = this;
        if (!self._auctionOptimization[s.adId]) {
          googletag.display(s.adId);
          dlog('DISPLAY SLOT', s.adId);
          if (googletag.pubads().isInitialLoadDisabled()) {
            refSlots.push(slot);
          } else {
            self._counters.refreshSlot[s.adId] = (self._counters.refreshSlot[s.adId] || 0) + 1;
            self._updateBidx(s.adId);
          }
        } else {
          self._notDisplayedSlots[s.adId] = true;
        }
      }
      _isLazyLoad() {
        let block = false;
        if (this.config.lazyLoadSettings) {
          block = block || this.config.lazyLoadSettings.countryInclude && !this._geoInclude(this.config.lazyLoadSettings.countryInclude);
          block = block || this.config.lazyLoadSettings.countryBlock && this._geoInclude(this.config.lazyLoadSettings.countryBlock);
          block = block || this.config.lazyLoadSettings.mobileOnly && !isMobile();
          block = block || this.config.lazyLoadSettings.desktopOnly && isMobile();
          if (this.config.lazyLoadSettings.blockedKeywords) {
            for (const kw of this.config.lazyLoadSettings.blockedKeywords) {
              block = block || this.config.lazyLoadSettings.blockedKeywords && ~location.href.indexOf(kw);
            }
          }
        }
        return this._checkRestrictions(this.config.enableLazyLoad) && !block;
      }
      _updateBidx(id, isBid) {
        dlog('update bidx data', id, isBid);
        this._bidxData[id] = this._bidxData[id] || {};
        const bidx = this._bidxData[id];
        bidx.bids = bidx.bids || 0;
        bidx.reqs = bidx.reqs || 0;
        if (isBid) {
          bidx.bids++;
        } else {
          bidx.reqs++;
        }
        if (bidx.reqs > 0) {
          const cnt = Math.floor(bidx.bids / bidx.reqs * 10000) / 10000;
          const bidxStr = cnt + ' (' + bidx.bids + '/' + bidx.reqs + ')';
          this._setDebugValue(id, 'bidx', bidxStr);
        }
      }
      async _loadGPT() {
        return new Promise(resolve => {
          const self = this;
          if (!googletag.apiReady && !self.config.disableGPTLoad) {
            dlog('start load gpt.js');
            insertElem('script', {
              type: "text/javascript",
              src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js'
            }, []);
          }
          if (!self.config) return resolve();
          googletag.cmd.push(function () {
            if (self.config.enableSingleRequest) {
              let sr = googletag.pubads().enableSingleRequest();
              if (!sr) {
                dwarn('can\'t enable single request');
              } else {
                dlog('single request enabled');
              }
            }
            if (self._isLazyLoad()) {
              dlog('lazy load enabled');
              googletag.pubads().enableLazyLoad(self.config.enableLazyLoad);
            } else {
              dlog('lazy load disabled');
            }
            self._createGPTSlots.bind(self)();
            googletag.pubads().addEventListener('slotResponseReceived', () => {
              self._replaceApsRenderer();
            });
            googletag.pubads().addEventListener('impressionViewable', event => {
              self._dfpSlotImpressionViewable(event);
            });
            googletag.pubads().addEventListener('slotVisibilityChanged', event => {
              self._dfpSlotVisibilityChanged(event);
            });
            googletag.pubads().addEventListener('slotRenderEnded', function (event) {
              const sid = event.slot.getSlotElementId();
              const elem = document.getElementById(sid);
              delete self._requested[sid];
              if (elem && elem.classList.contains('vuukle-interscroller')) {
                self._resizeOverlay(sid);
              }
              const spath = event.slot.getAdUnitPath();
              if (!(sid in self._showedSlots)) return;
              self._setDebugValue(sid, 'path', spath);
              const networkCodes = spath.match(/^\/([^/]*)/)[1].split(',');
              const notOurNetworks = networkCodes[0] != ourNetwork;
              self._forceRefresh[sid] = false;
              const showed = self._showedSlots[sid];
              const refr = Math.floor(event.slot.getTargeting("refreshIteration")[0]) || 0;
              let winAd = vuuklehb.getAllWinningBids().filter(b => b.adUnitCode === sid || b.adUnitCode === spath).pop();
              const isAdx = !winAd && !nonAdxAdvertisers.includes(event.advertiserId);
              const isPrebid = prebidAdvertiser == event.advertiserId;
              if (isPrebid && !winAd) {
                derr(`error in detection logic pb=${isPrebid} wa=${!!winAd}`, winAd);
              } else if (!isPrebid && winAd) {
                dwarn('both prebid and dfp bids and dfp win', isAdx, clone(winAd), event);
                winAd = null;
              }
              const otherDiv = document.querySelector(`#${sid} > div > div`);
              let isUnblockiaDiv;
              if (otherDiv) {
                isUnblockiaDiv = window.unblockiaVuukle && otherDiv.className.includes('ub-3dlabel');
              }
              if (!isUnblockiaDiv && (notOurNetworks || otherDiv)) {
                self._sendStats({
                  bidder: 'other_network',
                  adUnitCode: otherDiv ? otherDiv.id : spath,
                  adId: sid
                });
              }
              let targetings = {};
              googletag.pubads().getTargetingKeys().forEach(k => targetings[k] = googletag.pubads().getTargeting(k));
              event.slot.getTargetingKeys().forEach(k => targetings[k] = event.slot.getTargeting(k));
              dlog('rendered slot', sid, '\nempty = ', event.isEmpty, '\nnetworks = ', networkCodes, '\nadvertiserId = ', event.advertiserId, '\nlineitem =', event.lineItemId || event.sourceAgnosticLineItemId, '\nbidder =', winAd ? winAd.bidder : isAdx ? 'adx' : isPrebid ? 'prebid' : 'direct_line_item', '\ncpm =', winAd ? winAd.cpm : 'undefined', '\nprebid ad =', winAd, '\ntargetings = ', targetings, '\n', event, showed, refr);
              if (targetings.hb_pb && targetings.hb_pb.length > 0 && event.isEmpty) {
                dwarn('got bid but don\'t render', sid, targetings);
              }
              if (!event.isEmpty) {
                self._counters.renderedAd[sid] = (self._counters.renderedAd[sid] || 0) + 1;
                self._updateBidx(sid, true);
                if (isAdx) {
                  self._displayedAdx[sid] = true;
                }
                if (self._slotParams[sid] && self._slotParams[sid].maxHeight > 0 && event.size[1] > self._slotParams[sid].maxHeight) {
                  dlog('cleanup slot', sid, self._slotParams[sid].maxHeight, event.size);
                  //document.getElementById(sid).innerHTML = "";
                  return;
                }
                self._showedSlots[sid] = true;
                if (self.config.pbcfg.refreshExclusion && ~self.config.pbcfg.refreshExclusion.indexOf(event.sourceAgnosticLineItemId)) {
                  self._refreshExcluded[sid] = true;
                }
              } else if (!showed && refr < 2 && (self.adUnitCodes[sid] && self.adUnitCodes[sid].refreshNotDisplayed || self.adUnitCodes[spath] && self.adUnitCodes[spath].refreshNotDisplayed)) {
                dwarn('refresh empty slot', sid, refr);
                self._forceRefresh[sid] = true;
                self._requestAd([sid]);
              } else if (!showed) {
                derr('slot empty', sid);
                self._dumpLog('error', `slot empty ${sid}`);
              }
              dlog('displayed slots', self._showedSlots);
            });
            resolve();
          });
        });
      }
      _dfpSlotImpressionViewable(evt) {
        if (!evt || !evt.slot) {
          return;
        }
        const {
          slot
        } = evt;
        const slotID = slot.getSlotElementId();
        if (!slotID) {
          return;
        }
        if (!vuukleSlots.find(slot => slot.getSlotElementId() == slotID)) {
          return;
        }
        slot.setTargeting('impressionViewable', '1');
        dlog('dfp impressionViewable', slotID, this._observing.dfpViewable[slotID]);
        this._observing.dfpViewable[slotID] = true;

        //this._sendStats({
        //    bidder: 'impressionViewable',
        //    adUnitCode: slotID,
        //});

        this._requestAd([slotID]);
      }
      _dfpSlotVisibilityChanged(evt) {
        if (!evt || !evt.slot) {
          return;
        }
        const slotID = evt.slot.getSlotElementId();
        if (!slotID) {
          return;
        }
        if (this._observing.dfpViewable[slotID] && evt.inViewPercentage < 50) {
          dlog('dfp visibilityChanged to not viewable', slotID);
          evt.slot.setTargeting('impressionViewable', '0');
          this._observing.dfpViewable[slotID] = false;
        }
      }
      _replaceApsRenderer() {
        if (!this.apsPresent) {
          return;
        }
        if (!window.apstag) {
          dwarn('apstag still not initialized, ignore refresh');
          return;
        }
        const self = this;
        const oldRender = window.apstag.renderImp || function (bid) {
          throw new Error('invalid bid', bid);
        };
        if (!oldRender.vuukleRender) {
          dlog('aps replace renderer');
          window.apstag.renderImp = function (doc, bidid) {
            dlog('aps render overrided', arguments);
            if (self._amzniids[bidid]) {
              dlog('aps render our bid');
              self.apsIframe.contentWindow.apstag.renderImp.apply(this, arguments);
            } else {
              dlog('aps render not our bid');
              oldRender.apply(this, arguments);
            }
          };
          window.apstag.renderImp.vuukleRender = true;
        }
      }
      _loadApsTag() {
        const self = this;
        return new Promise(resolve => {
          var _consentMeta$usp;
          let iloaded = false;
          setTimeout(() => {
            if (!iloaded) {
              derr('aps iframe load error');
              self.apsPresent = false;
              resolve();
            }
          }, 10000);
          const rname = '__vuukleCb' + Math.random().toString(16).substr(2, 8);
          window[rname] = () => {
            dlog('aps iframe loaded');
            iloaded = true;
            window.apstag = window.apstag || {
              init: function () {
                window.apstag._Q.push(['i', arguments]);
              },
              fetchBids: function () {
                window.apstag._Q.push(['f', arguments]);
              },
              setDisplayBids: function () {},
              targetingKeys: function () {
                return [];
              },
              _Q: []
            };
            self._replaceApsRenderer();
            resolve();
          };
          const ifrStart = '<html lang="en"><head><meta charset="UTF-8"><script>window.googletag = window.parent.googletag;window.__cmp = window.parent.__cmp; window.__tcfapi = window.parent.__tcfapi;!function(a9,a,p,s,t,A,g){if(a[a9])return; function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]}; A=p.createElement(s); A.async=!0; A.src=t; g=p.getElementsByTagName(s)[0]; g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");apstag.init(';
          const ifrEnd = `);window.parent['${rname}']();</script></head><body></body></html>`;
          const apsOptions = {
            pubID: '842701b4-f689-4de3-9ff4-bc1999093771',
            adServer: 'googletag',
            videoAdServer: 'DFP',
            gdpr: {
              cmpTimeout: 200
            }
          };
          let consentMeta = vuuklehb.getConsentMetadata();
          if ((_consentMeta$usp = consentMeta.usp) !== null && _consentMeta$usp !== void 0 && _consentMeta$usp.usp) {
            var _consentMeta$usp2;
            apsOptions.params = {
              us_privacy: (_consentMeta$usp2 = consentMeta.usp) === null || _consentMeta$usp2 === void 0 ? void 0 : _consentMeta$usp2.usp
            };
          }
          if (this.config && this.config.pbcfg && this.config.pbcfg.config && this.config.pbcfg.config.schain && this.config.pbcfg.config.schain.config) {
            apsOptions.schain = this.config.pbcfg.config.schain.config;
          }
          const iframe = document.createElement('iframe');
          iframe.srcdoc = ifrStart + JSON.stringify(apsOptions) + ifrEnd;
          (iframe.frameElement || iframe).style.cssText = 'width: 1px; height: 1px; border: 0; margin:0;';
          iframe.src = 'javascript:false';
          document.body.appendChild(iframe);
          this.apsIframe = iframe;
        });
      }
      async _loadGeoip() {
        this._geo = await this._loadJson('_vuukleGeo', '_vuukleGeo', 'geo', 'https://get.geojs.io/v1/ip/geo.json', 3600 * 24 * 29, true);
        dlog('geo data:', this._geo);
      }
      async _loadJson(cacheKey, globVar, name, url, ttl, useLocalstorage) {
        let data;
        ttl = (ttl || 60) * 1000;
        try {
          data = clone(window.top[globVar]);
          if (data) {
            dlog('load_' + name + ' from top var');
          }
        } catch (error) {/* nop */}
        if (!data) {
          try {
            data = clone(window[globVar]);
            if (data) {
              dlog('load_' + name + ' from local var');
            }
          } catch (error) {/* nop */}
        }
        if (!data) {
          try {
            let win;
            while (win !== window.parent) {
              win = window.parent;
              data = clone(window[globVar]);
              if (data) {
                dlog('load_' + name + ' from parent window var');
              }
            }
          } catch (error) {/* nop */}
        }
        if (!data) {
          try {
            let c = JSON.parse(window.top.sessionStorage.getItem(cacheKey));
            if (c) {
              if (c.time && Date.now() - c.time < ttl) {
                data = c.data;
                dlog('load_' + name + ' from top session storage');
              }
            }
          } catch (error) {/* nop */}
        }
        if (!data) {
          try {
            let c = JSON.parse(window.sessionStorage.getItem(cacheKey));
            if (c) {
              if (c.time && Date.now() - c.time < ttl) {
                data = c.data;
                dlog('load_' + name + ' from local session storage');
              }
            }
          } catch (error) {/* nop */}
        }
        if (!data && useLocalstorage) {
          try {
            let c = JSON.parse(window.top.localStorage.getItem(cacheKey));
            if (c) {
              if (c.time && Date.now() - c.time < ttl) {
                data = c.data;
                dlog('load_' + name + ' from top storage');
              }
            }
          } catch (error) {/* nop */}
        }
        if (!data && useLocalstorage) {
          try {
            let c = JSON.parse(window.localStorage.getItem(cacheKey));
            if (c) {
              if (c.time && Date.now() - c.time < ttl) {
                data = c.data;
                dlog('load_' + name + ' from local storage');
              }
            }
          } catch (error) {/* nop */}
        }
        let result;
        if (!data) {
          try {
            const rawData = await fetch(url);
            result = await rawData.json();
            dlog('load_' + name + ' from url');
          } catch (error) {/* nop */}
        } else {
          result = data;
        }
        if (result) {
          let cconf = JSON.stringify({
            time: Date.now(),
            data: result
          });
          try {
            window.top.sessionStorage.setItem(cacheKey, cconf);
          } catch (error) {/* nop */}
          if (this._canUpdateStorage) {
            try {
              window.sessionStorage.setItem(cacheKey, cconf);
            } catch (error) {/* nop */}
            if (useLocalstorage) {
              try {
                window.top.localStorage.setItem(cacheKey, cconf);
              } catch (error) {/* nop */}
              try {
                window.localStorage.setItem(cacheKey, cconf);
              } catch (error) {/* nop */}
            }
          }
          try {
            // eslint-disable-next-line require-atomic-updates
            window.top[globVar] = clone(result);
          } catch (error) {/* nop */}
          try {
            // eslint-disable-next-line require-atomic-updates
            window[globVar] = clone(result);
          } catch (error) {/* nop */}
        } else {
          derr('load_' + name + ': config not loaded');
          return;
        }
        return result;
      }
      _splitSlots() {
        var _this$config, _this$config2;
        if (!((_this$config = this.config) !== null && _this$config !== void 0 && _this$config.verticalAdSplit) && !((_this$config2 = this.config) !== null && _this$config2 !== void 0 && _this$config2.horizontalAdSplit)) {
          return;
        }
        this._splitSlotObj(this.config.verticalAdSplit);
        this._splitSlotObj(this.config.horizontalAdSplit, true);
      }
      _splitSlotObj(slots, isHorizontal) {
        if (!slots) {
          return;
        }
        for (const id in slots) {
          if (!Object.prototype.hasOwnProperty.call(slots, id)) {
            continue;
          }
          const div = document.getElementById(id);
          if (!div || div.innerHTML != '') {
            continue;
          }
          if (isHorizontal) {
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
          }
          for (const slot of slots[id]) {
            const slotDiv = document.createElement('div');
            slotDiv.id = slot;
            div.appendChild(slotDiv);
          }
        }
      }
      async _fetchConfig(gi) {
        var _config$player;
        const self = this;
        const curl = confUrl + self._site + '.json';
        const cacheKey = 'vuukleconf' + curl;
        const config = await this._loadJson(cacheKey, '_vuukleConfig', 'config', curl, 60 * 30, true);
        if (!config) {
          derr('can\'t fetch config');
          return;
        }

        //geo filter
        await gi;
        if (config.player && (config.player.countryBlock || config.player.countryInclude)) {
          await gi;
          let block = config.player.countryInclude && !this._geoInclude(config.player.countryInclude);
          block = block || config.player.countryBlock && this._geoInclude(config.player.countryBlock);
          block = block || config.player.mobileOnly && !isMobile();
          block = block || config.player.desktopOnly && isMobile();
          if (block) {
            dlog('player is blocked');
            delete config.player;
          }
        }
        if (config.player && config.player.disableMobile && isMobile()) {
          dlog('player disabled on mobile');
          delete config.player;
        }
        if (config.player && this.auctionType == auctionTypeNoVideo) {
          dlog('player disabled by auction type');
          delete config.player;
        }
        const refTimes = config.player && config.player.refresh ? [config.player.refresh] : [];
        const countryBlockedBids = {};
        const mobileBlockedBids = {};
        config.pbcfg.adUnits = config.pbcfg.adUnits.filter(au => {
          var _au$mediaTypes, _au$mediaTypes2, _au$mediaTypes3;
          // change wildcards
          au.dfp.id = au.code;
          if (au.code.match(/\*$/)) {
            au.code = au.dfp.path;
          }
          if ((_au$mediaTypes = au.mediaTypes) !== null && _au$mediaTypes !== void 0 && _au$mediaTypes.banner && this.auctionType == auctionTypeOnlyVideo) {
            delete au.mediaTypes.banner;
          }
          if ((_au$mediaTypes2 = au.mediaTypes) !== null && _au$mediaTypes2 !== void 0 && _au$mediaTypes2.native && this.auctionType == auctionTypeOnlyVideo) {
            delete au.mediaTypes.native;
          }
          if ((_au$mediaTypes3 = au.mediaTypes) !== null && _au$mediaTypes3 !== void 0 && _au$mediaTypes3.video && this.auctionType == auctionTypeNoVideo) {
            delete au.mediaTypes.video;
          }
          if (au.mediaTypes && au.mediaTypes.banner && !au.mediaTypes.banner.sizes) {
            delete au.mediaTypes.banner;
          }

          // if (au.mediaTypes && au.mediaTypes.native) {
          //     au.mediaTypes.native.sizes = au.mediaTypes.native.sizes || [[1, 1]];
          //     au.mediaTypes.native.sendTargetingKeys = au.mediaTypes.native.sendTargetingKeys || false;

          //     const n = { title: 1, image: 1, icon: 0, sponsoredBy: 1, clickUrl: 1, body: 0 };
          //     for (const f in n) {
          //         if (!Object.prototype.hasOwnProperty.call(n, f)) {
          //             continue;
          //         }

          //         au.mediaTypes.native[f] = au.mediaTypes.native[f] || { "required": !!n[f] };
          //     }
          //     au.mediaTypes.native.title.len = au.mediaTypes.native.title.len || 100;
          //     au.mediaTypes.native.image.sizes = au.mediaTypes.native.image.sizes || au.mediaTypes.banner?.sizes;
          //     au.mediaTypes.native.icon.sizes = au.mediaTypes.native.icon.sizes || [50, 50];
          // }

          if (this._isInstream(au) && !config.player) {
            // remove instream adunits from auction if player blocked
            return false;
          }
          au.vuukle = au.vuukle || {};
          const vref = this._isInstream(au) && config.player.refresh;
          au.vuukle.refreshTime = vref || au.refreshTime || config.pbcfg.refresh || 30000;
          au.refreshInView = au.refreshInView || config.refreshInView;
          if (au.refreshInView === true) {
            au.refreshInView = 10;
          }
          if (au.refreshInView) {
            au.vuukle.refreshTime = Math.max(au.vuukle.refreshTime, 30000);
            this._observing.thresholds[au.refreshInView / 100] = true;
          }
          au.activeViewRefresh = au.activeViewRefresh || config.activeViewRefresh;
          au.activeViewThreshold = au.activeViewThreshold || config.activeViewThreshold || 0.1;
          au.adxActiveViewThreshold = au.adxActiveViewThreshold || config.adxActiveViewThreshold || au.activeViewThreshold;
          if (au.activeViewRefresh) {
            this._observing.thresholds[au.activeViewThreshold] = true;
            this._observing.thresholds[au.adxActiveViewThreshold] = true;
          }
          au.vuukle.lastRefresh = 0;
          au.vuukle.refreshIteration = 0;
          refTimes.push(au.vuukle.refreshTime / 1000);

          // check geo and other
          if (au.a9countryInclude && !this._geoInclude(au.a9countryInclude) || au.a9countryBlock && this._geoInclude(au.a9countryBlock) || sspCountryInclude.a9  || sspCountryExclude.a9  || sspBrowserInclude.a9  || sspBrowserExclude.a9 ) {
            au.a9 = false;
          }

          // check browser size
          if (au.mediaTypes && au.mediaTypes.banner && au.mediaTypes.banner.sizes) {
            let exclDesktopSizes = au.desktopSizeExclude ? au.desktopSizeExclude.split(',').map(x => x.split('x')) : [];
            let exclNonDesktopSizes = au.nonDesktopSizeExclude ? au.nonDesktopSizeExclude.split(',').map(x => x.split('x')) : [];
            let exclPoint = au.minDesktopSize || 640;
            if (window.innerWidth >= exclPoint) {
              au.mediaTypes.banner.sizes = au.mediaTypes.banner.sizes.filter(s => !exclDesktopSizes.some(e => e[0] == s[0] && e[1] == s[1]));
            } else {
              au.mediaTypes.banner.sizes = au.mediaTypes.banner.sizes.filter(s => !exclNonDesktopSizes.some(e => e[0] == s[0] && e[1] == s[1]));
            }
            au.a9sizes = au.a9sizes || au.mediaTypes.banner.sizes.filter(s => {
              return !['1x1', '120x30', '120x60', '120x90', '200x200', '234x60', '250x360', '300x75', '320x270', '320x490', '400x225', '600x338', '640x360', '750x300', '88x31', '950x90', '960x90', '970x66'].includes(`${s[0]}x${s[1]}`);
            });
          }
          if (au.mediaTypes && au.mediaTypes.video && au.mediaTypes.video.mobilePlayerSize && isMobile()) {
            au.mediaTypes.video.playerSize = au.mediaTypes.video.mobilePlayerSize;
          }
          if (au.interscroller && (au.interscrollerDisableDesktop || config.interscrollerDisableDesktop) && !isMobile()) {
            delete au.interscroller;
          }
          au.bids = au.bids.filter(bid => {
            let res = true;
            if (sspCountryInclude[bid.bidder]) {
              res = res && this._geoInclude(sspCountryInclude[bid.bidder]);
            }
            if (sspCountryExclude[bid.bidder]) {
              res = res && !this._geoInclude(sspCountryExclude[bid.bidder]);
            }
            if (sspBrowserInclude[bid.bidder]) {
              res = res && sspBrowserInclude[bid.bidder].includes(getBrowserName());
            }
            if (sspBrowserExclude[bid.bidder]) {
              res = res && !sspBrowserExclude[bid.bidder].includes(getBrowserName());
            }
            if (config.restrictions) {
              const restr = config.restrictions;
              if (restr.sspCountryInclude && restr.sspCountryInclude[bid.bidder]) {
                res = res && this._geoInclude(restr.sspCountryInclude[bid.bidder]);
              }
              if (restr.sspCountryExclude && restr.sspCountryExclude[bid.bidder]) {
                res = res && !this._geoInclude(restr.sspCountryExclude[bid.bidder]);
              }
              if (restr.sspMobileInclude && restr.sspMobileInclude[bid.bidder]) {
                res = res && isMobile();
              }
              if (restr.sspMobileExclude && restr.sspMobileExclude[bid.bidder]) {
                res = res && !isMobile();
              }
              if (restr.sspBrowserInclude && restr.sspBrowserInclude[bid.bidder]) {
                res = res && restr.sspBrowserInclude[bid.bidder].includes(getBrowserName());
              }
              if (restr.sspBrowserExclude && restr.sspBrowserExclude[bid.bidder]) {
                res = res && !restr.sspBrowserExclude[bid.bidder].includes(getBrowserName());
              }
            }
            if (bid.countryInclude) {
              res = res && this._geoInclude(bid.countryInclude);
              delete bid.countryInclude;
            } else if (bid.countryBlock) {
              res = res && !this._geoInclude(bid.countryBlock);
              delete bid.countryBlock;
            }
            if (!res) {
              countryBlockedBids[au.dfp.id] = countryBlockedBids[au.dfp.id] || [];
              countryBlockedBids[au.dfp.id].push(bid);
            }
            if (bid.mobileOnly && !isMobile()) {
              mobileBlockedBids[au.dfp.id] = mobileBlockedBids[au.dfp.id] || [];
              mobileBlockedBids[au.dfp.id].push(bid);
              res = false;
            }
            if (bid.desktopOnly && isMobile()) {
              mobileBlockedBids[au.dfp.id] = mobileBlockedBids[au.dfp.id] || [];
              mobileBlockedBids[au.dfp.id].push(bid);
              res = false;
            }
            if (au.mediaTypes.banner && au.mediaTypes.banner.sizes && bid.params.sizes) {
              bid.params.sizes = bid.params.sizes.filter(s => {
                for (const sz of au.mediaTypes.banner.sizes) {
                  if (sz[0] === s[0] && sz[1] === s[1]) {
                    return true;
                  }
                }
                return false;
              });
            }
            if (res) {
              this._enabledBidders[bid.bidder] = true;
            }
            return res;
          }).map(bid => {
            var _au$mediaTypes4, _au$mediaTypes4$banne;
            if (config.sspSizes && (_au$mediaTypes4 = au.mediaTypes) !== null && _au$mediaTypes4 !== void 0 && (_au$mediaTypes4$banne = _au$mediaTypes4.banner) !== null && _au$mediaTypes4$banne !== void 0 && _au$mediaTypes4$banne.sizes && !bid.sizeConfig) {
              var _config$sspSizes$incl, _config$sspSizes$excl;
              let included,
                excluded = {};
              if ((_config$sspSizes$incl = config.sspSizes.included) !== null && _config$sspSizes$incl !== void 0 && _config$sspSizes$incl[bid.bidder]) {
                included = {};
                for (const [h, w] of config.sspSizes.included[bid.bidder]) {
                  included[h] = included[h] || {};
                  included[h][w] = 1;
                }
              }
              if ((_config$sspSizes$excl = config.sspSizes.excluded) !== null && _config$sspSizes$excl !== void 0 && _config$sspSizes$excl[bid.bidder]) {
                excluded = {};
                for (const [h, w] of config.sspSizes.excluded[bid.bidder]) {
                  excluded[h] = excluded[h] || {};
                  excluded[h][w] = 1;
                }
              }
              const sizes = au.mediaTypes.banner.sizes.filter(size => {
                var _included$h, _excluded$h;
                const [h, w] = size;
                return (!included || ((_included$h = included[h]) === null || _included$h === void 0 ? void 0 : _included$h[w])) && !((_excluded$h = excluded[h]) !== null && _excluded$h !== void 0 && _excluded$h[w]);
              });
              if (sizes.lenght != au.mediaTypes.banner.sizes.length) {
                bid.sizeConfig = [{
                  minViewPort: [0, 0],
                  sizes: sizes
                }];
              }
            }
            return bid;
          });
          if (au.ortb2Imp && au.ortb2Imp.instl === 1) {
            var _config$instl, _config$instl2;
            if ((_config$instl = config.instl) !== null && _config$instl !== void 0 && _config$instl.countryInclude || (_config$instl2 = config.instl) !== null && _config$instl2 !== void 0 && _config$instl2.countryBlock) {
              let block = config.instl.countryInclude && !this._geoInclude(config.instl.countryInclude);
              block = block || config.instl.countryBlock && this._geoInclude(config.instl.countryBlock);
              if (block) {
                return false;
              }
            }
            if (au.dfp && au.dfp.path) {
              au.code = au.dfp.path;
            }
            self._interstitialUnits.push(clone(au));
            return false;
          }
          return au.bids.length && au.mediaTypes && (au.mediaTypes.banner || au.mediaTypes.video || au.mediaTypes.native);
        });
        if (self._geoInclude('IN')) {
          // can be something like 'IN,US'
          config.refreshNoAdx = false;
        }
        if (Object.keys(countryBlockedBids).length > 0) {
          dwarn('blocked by country', countryBlockedBids);
        }
        if (Object.keys(mobileBlockedBids).length > 0) {
          dwarn('blocked by mobileOnly/desktopOnly', mobileBlockedBids);
        }
        config.dfp = config.dfp || {};
        config.dfp.targetings = config.dfp.targetings || {};
        config.dfp.targetings.order = config.dfp.targetings.order || defaultOrder;
        if (config.pbcfg && config.pbcfg.config && config.pbcfg.config.schain && config.pbcfg.config.schain.config && config.pbcfg.config.schain.config.nodes) {
          for (let node of config.pbcfg.config.schain.config.nodes) {
            if (node.asi === 'vuukle.com') {
              config.dfp.targetings.api_key = config.dfp.targetings.api_key || node.sid;
              break;
            }
          }
        }

        // eslint-disable-next-line require-atomic-updates
        self._checkAuctionTime = Math.max(1, gcd(...refTimes)) * 1000;
        dlog('optimized refresh time', self._checkAuctionTime);

        // eslint-disable-next-line require-atomic-updates
        self.config = config;
        self.apsPresent = self.apsPresent || !!((_config$player = config.player) !== null && _config$player !== void 0 && _config$player.a9);
        config.pbcfg.adUnits.forEach(function (unit) {
          self.apsPresent = self.apsPresent || unit.a9;
          self._showedSlots[unit.code] = !!self._showedSlots[unit.code];
          self.adUnitCodes[unit.code] = unit;
        }, {});
        dlog('config loaded', self.config, self.adUnitCodes);
      }
      get _isGDPR() {
        return this._geoInclude(this.config && this.config.cmpCountryInclude ? this.config.cmpCountryInclude : defaultGDPR);
      }
      get _isCA() {
        return this._geoInclude('California');
      }

      // user isn't from a GDPR/CCPA region or has given consent
      get _canUpdateStorage() {
        return this._isGdprCcpaAccepted();
      }
      _loadPrebid() {
        const self = this;
        return new Promise(function (resolve) {
          googletag.cmd.push(function () {
            vuuklehb.que.push(function () {
              self.config.pbcfg.config.priceGranularity = 'dense';
              if (self._isGDPR) {
                self.config.pbcfg.config.consentManagement = self.config.pbcfg.config.consentManagement || {};
                self.config.pbcfg.config.consentManagement.gdpr = self.config.pbcfg.config.consentManagement.gdpr || {
                  defaultGdprScope: true,
                  cmpApi: 'iab',
                  timeout: 3000
                };
              }
              if (self._isCA) {
                self.config.pbcfg.config.consentManagement = self.config.pbcfg.config.consentManagement || {};
                self.config.pbcfg.config.consentManagement.usp = self.config.pbcfg.config.consentManagement.usp || {
                  cmpApi: 'iab'
                };
              }
              self.config.pbcfg.config.useBidCache = !(self.config.pbcfg.config.useBidCache === false);
              vuuklehb.bidderSettings = {
                standard: {
                  // defaults for all bidders
                  storageAllowed: true
                },
                oftmedia: {
                  bidCpmAdjustment: self.__getAdjustmentFn(0.85)
                },
                smilewanted: {
                  bidCpmAdjustment: self.__getAdjustmentFn(1.10)
                },
                smartadserver: {
                  bidCpmAdjustment: self.__getAdjustmentFn(0.95)
                },
                adkernel: {
                  adserverTargeting: [{
                    key: "hb_bidder",
                    val: function (bidResponse) {
                      var _bidResponse$meta, _bidResponse$meta2;
                      dlog('adkernel response', bidResponse);
                      return adkernelMap[(_bidResponse$meta = bidResponse.meta) === null || _bidResponse$meta === void 0 ? void 0 : _bidResponse$meta.demandSource] || ((_bidResponse$meta2 = bidResponse.meta) === null || _bidResponse$meta2 === void 0 ? void 0 : _bidResponse$meta2.demandSource) || bidResponse.bidderCode || bidResponse.bidder;
                    }
                  }, {
                    key: "hb_adid",
                    val: function (bidResponse) {
                      return bidResponse.adId;
                    }
                  }, {
                    key: "hb_pb",
                    val: function (bidResponse) {
                      return bidResponse.pbDg;
                    }
                  }, {
                    key: 'hb_size',
                    val: function (bidResponse) {
                      return bidResponse.size;
                    }
                  }, {
                    key: 'hb_source',
                    val: function (bidResponse) {
                      return bidResponse.source;
                    }
                  }, {
                    key: 'hb_format',
                    val: function (bidResponse) {
                      return bidResponse.mediaType;
                    }
                  }, {
                    key: 'adkernel',
                    val: function () {
                      return '1';
                    }
                  }]
                }
              };
              if (self.config.pbcfg.bidderSettings) {
                // override bidderSettings values from json config
                for (let bidder in self.config.pbcfg.bidderSettings) {
                  if (!Object.prototype.hasOwnProperty.call(self.config.pbcfg.bidderSettings, bidder)) {
                    continue;
                  }
                  vuuklehb.bidderSettings[bidder] = vuuklehb.bidderSettings[bidder] || {};
                  let settings = self.config.pbcfg.bidderSettings[bidder];
                  for (let key in settings) {
                    if (!Object.prototype.hasOwnProperty.call(settings, key)) {
                      continue;
                    }
                    vuuklehb.bidderSettings[bidder][key] = settings[key];
                  }
                }
              }
              if (self.config.pbcfg.config.adjustments) {
                vuuklehb.bidderSettings = vuuklehb.bidderSettings || {};
                for (let bidder in self.config.pbcfg.config.adjustments) {
                  if (!Object.prototype.hasOwnProperty.call(self.config.pbcfg.config.adjustments, bidder)) {
                    continue;
                  }
                  vuuklehb.bidderSettings[bidder] = vuuklehb.bidderSettings[bidder] || {};
                  vuuklehb.bidderSettings[bidder].bidCpmAdjustment = self.__getAdjustmentFn(self.config.pbcfg.config.adjustments[bidder]);
                }
                delete self.config.pbcfg.config.adjustments;
              }
              self.config.pbcfg.config.userSync = self.config.pbcfg.config.userSync || {};
              self.config.pbcfg.config.userSync.userIds = self.config.pbcfg.config.userSync.userIds || [];
              const userIds = self.config.pbcfg.config.userSync.userIds.reduce((r, v) => (r[v.name] = 1, r), {});
              const defaultUserIds = [{
                name: 'amxId',
                storage: {
                  name: 'amxId',
                  type: 'html5',
                  expires: 14
                }
              }
              //    , {
              //    name: "identityLink",
              //    params: {
              //        pid: '13446', // Set your real RampID placement ID here
              //        // notUse3P: true/false    // If you do not want to use 3P endpoint to retrieve the envelope. If you do not set this property to true, 3P endpoint will be fired. By default this property is undefined and 3P request will be fired.
              //    },
              //    storage: {
              //        type: "cookie",
              //        name: "idl_env",  // "idl_env" is the required storage name
              //        expires: 15       // RampID envelope can last for 15 days
              //    }
              //    }
              ];
              if (self._enabledBidders['criteo']) {
                defaultUserIds.push({
                  name: 'criteo'
                });
              }
              if (self.config.sharedId) {
                defaultUserIds.push({
                  name: "pubCommonId",
                  storage: {
                    type: "cookie",
                    name: "_pubcid",
                    expires: 365
                  }
                });
              }

              // if (self.config.id5) {
              //     defaultUserIds.push({
              //         name: 'id5Id',
              //         params: {
              //             partner: 173,            // change to the Partner Number you received from ID5
              //             externalModuleUrl: 'https://cdn.id5-sync.com/api/1.0/id5PrebidModule.js',
              //         },
              //         storage: {
              //             type: 'html5',
              //             name: 'id5id',
              //             expires: 90,
              //             refreshInSeconds: 7200
              //         }
              //     });
              // }

              for (const uid of defaultUserIds) {
                if (!userIds[uid.name]) {
                  self.config.pbcfg.config.userSync.userIds.push(uid);
                }
              }
              self.config.pbcfg.config.userSync.auctionDelay = self.config.pbcfg.config.userSync.auctionDelay || 100;
              self.config.pbcfg.config.userSync.syncDelay = self.config.pbcfg.config.userSync.syncDelay || 2000;
              if (self.config.disableUserid) {
                self.config.pbcfg.config.userSync.userIds = self.config.pbcfg.config.userSync.userIds.filter(x => !~self.config.disableUserid.indexOf(x.name));
              }
              self.config.pbcfg.config.userSync.userIds = self.config.pbcfg.config.userSync.userIds.filter(uid => {
                const bidders = userIdMap[uid.name];
                if (!bidders) {
                  return true;
                }
                for (const name of bidders) {
                  if (name == 'all' || self._enabledBidders[name]) {
                    return true;
                  }
                }
                return false;
              });
              if (self._checkRestrictions(self.config.confiant)) {
                let c = self.config.pbcfg.config;
                c.realTimeData = c.realTimeData || {};
                c.realTimeData.dataProviders = c.realTimeData.dataProviders || [];
                if (!c.realTimeData.dataProviders.some(e => e.name == 'confiant')) {
                  var _self$config$confiant, _self$_geo2, _self$config$confiant2, _self$_geo3, _self$config$confiant3, _self$_geo4;
                  const key = ((_self$config$confiant = self.config.confiant.geokeys) === null || _self$config$confiant === void 0 ? void 0 : _self$config$confiant[(_self$_geo2 = self._geo) === null || _self$_geo2 === void 0 ? void 0 : _self$_geo2.country_code]) || ((_self$config$confiant2 = self.config.confiant.geokeys) === null || _self$config$confiant2 === void 0 ? void 0 : _self$config$confiant2[(_self$_geo3 = self._geo) === null || _self$_geo3 === void 0 ? void 0 : _self$_geo3.region]) || ((_self$config$confiant3 = self.config.confiant.geokeys) === null || _self$config$confiant3 === void 0 ? void 0 : _self$config$confiant3[(_self$_geo4 = self._geo) === null || _self$_geo4 === void 0 ? void 0 : _self$_geo4.city]) || self.config.confiant.key;
                  if (key) {
                    dlog('load confiant with key', key);
                    c.realTimeData.dataProviders.push({
                      "name": "confiant",
                      "params": {
                        "propertyId": key,
                        "prebidNameSpace": "vuuklehb"
                      }
                    });
                  }
                }
              }
              let c = clone(self.config.pbcfg.config);
              if (isPbDebug()) {
                c.debug = true;
              }

              // detect pageURL
              let loc, pageURL, pageHost;
              try {
                loc = window.top.location;
                pageURL = loc.href;
                pageHost = loc.host;
              } catch (e) {
                loc = window.location;
                pageURL = loc.href;
                pageHost = loc.host;
              }
              if (/google/.test(pageHost)) {
                pageURL = document.referrer;
              }
              c.pageURL = c.pageURL || pageURL;
              c.coppa = self.config.pbcfg.config.coppa == undefined ? false : self.config.pbcfg.config.coppa;
              if (!self._isGdprCcpaAccepted) {
                c.deviceAccess = false;
                c.userSync.syncEnabled = false;
                delete c.userSync.userIds;
              }
              vuuklehb.setConfig(c);
              dlog('set config', c);
              resolve();
            });
          });
        });
      }
      __getAdjustmentFn(adj) {
        return function (bidCpm) {
          return bidCpm * adj;
        };
      }
      _cloneUnit(u, res, slotId) {
        let newUnit = clone(u);
        newUnit.code = u.code;
        newUnit.vuuComp = slotId;
        newUnit.vuukle.orig = u;
        const bv = newUnit.code in this._observing.bannerView ? this._observing.bannerView[newUnit.code] : -1;
        newUnit.bids.filter(bid => {
          const sspv = this.config.ssp_viewability;
          if (sspv && bid.bidder in sspv && bv >= 0 && bv < sspv[bid.bidder] / 100) {
            dlog('remove bidder by viewability', newUnit.code, bid.bidder, sspv[bid.bidder] / 100, bv);
            return false;
          }
          return true;
        });
        if (newUnit.bids.length > 0) {
          res[u.code] = newUnit;
          this.adUnitCodes[u.code] = res[u.code];
        }
      }
      forceDebugBid(cpm, bidder) {
        vuuklehb.setConfig({
          debugging: {
            enabled: true,
            bids: [{
              cpm: cpm,
              bidder: bidder
            }]
          }
        });
      }
      _isAVRefAllowed(id) {
        const av = this._observing.activeView;
        const res = !(id in av.threshold) || av.onlyFirst[id] && av.refreshed[id] || av.state[id] && document.visibilityState == 'visible';
        dlog('isAVRefAllowed', id, clone(av), res);
        return res;
      }
      _prepareAdUnits(slotIds) {
        let slots = vuukleSlots.map(slot => slot.getSlotElementId());
        if (slotIds) {
          slots = slots.filter(id => slotIds.includes(id));
        }
        let result = [];
        let res = {};
        const escapeRegex = str => str.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
        this.config.pbcfg.adUnits.forEach(u => {
          let key = u.dfp.id;
          if (this._isInstream(u)) {
            this._cloneUnit(u, res, 'video');
          }
          for (let slotId of slots) {
            if (new RegExp("^" + key.split("*").map(escapeRegex).join(".*") + "$").test(slotId)) {
              this._cloneUnit(u, res, slotId);
            }
          }
        });
        vuuklehb.removeAdUnit();
        const now = Date.now();
        // this._video.requested = false; // reset status before check
        for (let i in res) {
          if (!Object.prototype.hasOwnProperty.call(res, i)) {
            continue;
          }
          let unit = res[i];
          if (!(i in this._textSlots) && unit.addText) {
            this._textSlots[i] = true;
            this._addTextToElement(i);
          }
          this._showedSlots[i] = !!this._showedSlots[i];
          let element = document.getElementById(unit.code);
          if (unit.mediaTypes && unit.mediaTypes.banner && unit.mediaTypes.banner.sizes && unit.code && !unit.code.match(/\*/) && element && element.clientWidth > 0) {
            dlog('check_sizes prebid', unit.code, element.clientWidth, unit.mediaTypes.banner.sizes);
          }
          if (!this.config.disableSizeCheck && unit.mediaTypes && unit.mediaTypes.banner && unit.mediaTypes.banner.sizes && unit.code && !unit.code.match(/\*/) && element && element.clientWidth > 0) {
            unit.mediaTypes.banner.sizes.sort((a, b) => a[0] - b[0]);
            const filtered = [];
            unit.mediaTypes.banner.sizes = unit.mediaTypes.banner.sizes.filter(x => {
              const allow = x[0] <= element.clientWidth;
              if (!allow) {
                filtered.push(x);
              }
              return allow;
            });
            if (filtered.length > 0) {
              dwarn('check_sizes prebid removed', unit.code, filtered);
              this._dumpLog('warning', `check_sizes prebid removed: ${unit.code}, ${JSON.stringify(filtered)}`);
            }
          }
          if (unit.mediaTypes && unit.mediaTypes.banner && unit.mediaTypes.banner.sizes && unit.mediaTypes.banner.sizes.length === 0) {
            delete unit.mediaTypes.banner;
          }
          if ((this.config.inactiveTabDisable || unit.inactiveTabDisable) && document.hidden) {
            continue;
          }
          if (!unit.mediaTypes || Object.keys(unit.mediaTypes).length === 0) {
            continue;
          }
          if (unit.vuukle.lastRefresh + unit.vuukle.refreshTime > now && !this._forceRefresh[i]) {
            continue;
          }
          if (!this.checkCounterLimits(unit, "prepare")) {
            continue;
          }
          const reqTime = new Date();
          reqTime.setMinutes(reqTime.getMinutes() - 2);
          if (unit.code in this._requested && this._requested[unit.code] >= reqTime) {
            dlog('[disabled] ignore requested and not rendered', unit.code, this._requested[unit.code]);
            // continue;
          }
          if (unit.code in this._observing.adunits && unit.refreshInView) {
            if (!this._observing.adunits[unit.code] && this._observing.refreshed[unit.code]) {
              dlog(`refresh for observing ${unit.code} ignored`);
              continue;
            } else {
              this._observing.refreshed[unit.code] = true;
            }
          }
          if (!this._isAVRefAllowed(unit.code)) {
            dlog(`ignore activeViewRefresh ${unit.code}`);
            continue;
          }
          if ((this.config.dfpAdInView || unit.dfpAdInView) && !this._observing.dfpViewable[unit.code]) {
            unit.bids = unit.bids.filter(bid => {
              return this.config.dfpView50Ssps && this.config.dfpView50Ssps[bid.bidder];
            });
          }
          if (unit.bids.length == 0) {
            dlog(`all bidders filtered for ${unit.code}`);
            continue;
          }
          this._observing.activeView.refreshed[unit.code] = true;
          unit.vuukle.orig.vuukle.lastRefresh = now;
          unit.vuukle.orig.vuukle.refreshIteration++;
          unit.vuukle.lastRefresh = now;
          unit.vuukle.refreshIteration++;
          this._lastAuction[unit.code] = Date.now();
          result.push(unit);
          // if (unit.mediaTypes.video) {
          //     this._video.requested = true;
          // }
        }
        const iu = this._interstitialUnits.filter(unit => !(unit.vuukle.lastRefresh + unit.vuukle.refreshTime > now));
        if (iu.length > 0) {
          iu.forEach(unit => {
            const u = clone(unit);
            u.vuukle.orig = unit;
            u.vuukle.orig.vuukle.lastRefresh = now;
            u.vuukle.orig.vuukle.refreshIteration++;
            this._lastAuction[u.code] = Date.now();
            result.push(u);
          });
        }
        result.forEach(x => {
          const id = x.code;
          this._prebidAuctionCounts = this._prebidAuctionCounts || {};
          this._prebidAuctionCounts[id] = this._prebidAuctionCounts[id] || 0;
          const count = this._prebidAuctionCounts[id];
          if (x.auctions) {
            const a = x.auctions;
            const bidders = a.length > count ? a[count] : a[a.length - 1];
            const oldBids = clone(x.bids);
            x.bids = x.bids.filter(b => bidders.includes(b.bidder) || bidders.includes('all'));
            dlog('filtered bids by refresh', id, oldBids, x.bids);
          }
          this._prebidAuctionCounts[id]++;
          this._setDebugValue(id, 'pbauc', this._prebidAuctionCounts[id]);
          this._counters.prebidAuction[id] = (this._counters.prebidAuction[id] || 0) + 1;
        });
        let realUnits = [];
        result.forEach(x => {
          // split adunit by bidders
          for (let type in x.mediaTypes) {
            if (!Object.prototype.hasOwnProperty.call(x.mediaTypes, type)) {
              continue;
            }
            let media = x.mediaTypes[type];
            x.bids.forEach(bid => {
              var _media$sizes;
              let unit = clone(x);
              unit.mediaTypes = {
                [type]: media
              };
              unit.bids = [bid];
              unit.mediaTypes[type].sizes = (_media$sizes = media.sizes) === null || _media$sizes === void 0 ? void 0 : _media$sizes.filter(size => {
                var _this$config$sspOverr, _this$config$sspOverr2, _this$config$sspOverr3, _this$config$sspOverr4;
                let res = true;
                if ((_this$config$sspOverr = this.config.sspOverrides) !== null && _this$config$sspOverr !== void 0 && (_this$config$sspOverr2 = _this$config$sspOverr.sizes) !== null && _this$config$sspOverr2 !== void 0 && _this$config$sspOverr2.include && this.config.sspOverrides.sizes.include[bid.bidder]) {
                  let inc = this.config.sspOverrides.sizes.include[bid.bidder];
                  res = res && inc.some(i => {
                    return size[0] === i[0] && size[1] === i[2];
                  });
                }
                if ((_this$config$sspOverr3 = this.config.sspOverrides) !== null && _this$config$sspOverr3 !== void 0 && (_this$config$sspOverr4 = _this$config$sspOverr3.sizes) !== null && _this$config$sspOverr4 !== void 0 && _this$config$sspOverr4.exclude && this.config.sspOverrides.sizes.exclude[bid.bidder]) {
                  let excl = this.config.sspOverrides.sizes.exclude[bid.bidder];
                  res = res && !excl.some(i => {
                    return size[0] === i[0] && size[1] === i[2];
                  });
                }
                return res;
              });
              if (type == 'banner' && unit.mediaTypes[type].sizes.lenght === 0) {
                // don't add adUnit if all size removed
                return;
              }
              realUnits.push(unit);
            });
          }
        });
        vuuklehb.addAdUnits(realUnits);
        dlog('filtered adunits', realUnits);
        return realUnits;
      }
      checkCounterLimits(unit, ref) {
        let auctionLimit = this.config.auctionLimit || unit.auctionLimit;
        let auctionCount = this._counters.prebidAuction[unit.code] || 0;
        if (auctionLimit && auctionLimit <= auctionCount) {
          dlog('removed by auctionLimit', unit.code, ref);
          return false;
        }
        let prebidBidsLimit = this.config.prebidBidsLimit || unit.prebidBidsLimit;
        let prebidBidsCount = this._counters.prebidBid[unit.code] || 0;
        if (prebidBidsLimit && prebidBidsLimit <= prebidBidsCount) {
          dlog('removed by prebidBidsLimit', unit.code, ref);
          return false;
        }
        let bidsLimit = this.config.bidsLimit || unit.bidsLimit;
        let bidsCount = this._counters.renderedAd[unit.code] || 0;
        if (bidsLimit && bidsLimit < bidsCount) {
          dlog('removed by bidsLimit', unit.code, ref);
          return false;
        }
        let refreshLimit = this.config.refreshLimit || unit.refreshLimit;
        let refreshCount = this._counters.refreshSlot[unit.code] || 0;
        if (refreshLimit && refreshLimit < refreshCount) {
          dlog('removed by refreshLimit', unit.code, ref);
          return false;
        }
        return true;
      }
      _dumpLog(type, message) {
        if (this.config && !this.config.dumpLogs) {
          return;
        }
        this._sendStats({
          bidder: type,
          status: message
        });
      }
      _getVuukleCss() {
        const sheetId = "vuukleStyles";
        let sheet = document.getElementById(sheetId);
        if (!sheet) {
          const head = document.head || document.getElementsByTagName('head')[0];
          sheet = document.createElement('style');
          sheet.id = sheetId;
          head.appendChild(sheet);
        }
        return sheet;
      }
      _addTextToElement(id) {
        const sheet = this._getVuukleCss();
        this._styleId = this._styleId || 1;
        const className = `vuukleStyle${this._styleId}`;
        this._styleId++;
        const elem = document.getElementById(id);
        elem.classList.add(className);
        sheet.innerHTML += `\n.${className}:after {content:"Advertisement"; display:block; text-align: center}`;
      }
      _setupInterscroll(id, iscrollerHeight) {
        const ovlId = id + '-overlay';
        const wrapId = id + '-wrapper';
        let ovlElem = document.getElementById(ovlId);
        if (ovlElem) {
          // already exists
          return;
        }
        const elem = document.getElementById(id);
        if (!elem) {
          // div element doesn't exists
          return;
        }
        const elemWidth = elem.offsetWidth + 'px';
        const height = this.config && iscrollerHeight ? iscrollerHeight : '250px';
        dlog('setup interscroller overlay', id);
        ovlElem = document.createElement('div');
        ovlElem.id = ovlId;
        ovlElem.style.position = 'absolute';
        ovlElem.style.height = height;
        ovlElem.style.width = elemWidth;
        ovlElem.style.clip = `0px ${elemWidth} ${height} 0px`;
        const ovlWrap = document.createElement('div');
        ovlWrap.style.height = height;
        ovlWrap.style.display = 'flex';
        ovlWrap.style.justifyContent = 'center';
        ovlWrap.appendChild(ovlElem);
        const createTextDiv = (did, text) => {
          const div = document.createElement('div');
          div.id = id + did;
          div.innerText = text;
          div.style.backgroundColor = 'black';
          div.style.color = 'white';
          div.style.textAlign = 'center';
          return div;
        };
        const preText = createTextDiv('-pre', 'ADVERTISEMENT');
        const postText = createTextDiv('-post', 'SCROLL TO CONTINUE WITH CONTENT');
        const wrapElem = document.createElement('div');
        wrapElem.id = wrapId;
        wrapElem.style.position = 'relative';
        wrapElem.style.width = '100%';
        wrapElem.style.display = 'flex';
        wrapElem.style.justifyContent = 'space-between';
        wrapElem.style.flexDirection = 'column';
        wrapElem.appendChild(preText);
        wrapElem.appendChild(ovlWrap);
        wrapElem.appendChild(postText);
        elem.before(wrapElem);
        ovlElem.appendChild(elem);

        // elem.style.zIndex = -1;
        elem.style.position = 'fixed';
        elem.style.top = 0;
        elem.classList.add('vuukle-interscroller');

        /**
         * When Unblockia activates, it reset insterscroller position to 'relative'
         * We need to observe the div and make sure it always stays fixed positioned
         */
        if (window.MutationObserver) {
          const observer = new MutationObserver(() => {
            if (elem.style.position !== 'fixed') {
              elem.style.position = 'fixed';
            }
          });
          observer.observe(elem, {
            childList: true
          });
        }
        return;
      }
      _resizeOverlay(id) {
        const ovlId = id + '-overlay';
        const wrapId = id + '-wrapper';
        const ovlElem = document.getElementById(ovlId);
        const wrapElem = document.getElementById(wrapId);
        const elem = document.getElementById(id);
        if (!ovlElem || !wrapElem || !elem) {
          derr('interscroller setup error');
          return;
        }
        const w = elem.offsetWidth + 'px';
        ovlElem.style.width = w;
        ovlElem.style.clip = `rect(0px ${w} ${ovlElem.style.height} 0px)`;
        elem.style.top = '50vh';
        elem.style.transform = 'translate(0, -50%)';
      }
      _loadPassbackAds(adUnits) {
        if (!adUnits || adUnits.length == 0) return;
        dlog('load passback ads', adUnits);
        const self = this;
        googletag.cmd.push(function () {
          adUnits.forEach(function (u) {
            self._createGPTSlots.bind(self)(u.adId);
          });
        });
      }
      _tryToRefresh(slotIds, force) {
        dlog('_tryToRefresh', slotIds, force);
        if (slotIds && !Array.isArray(slotIds)) {
          slotIds = [slotIds];
        }
        if (force) {
          slotIds.forEach(s => this._forceRefresh[s] = true);
        }
        googletag.cmd.push(() => {
          this._requestAd(slotIds);
        });
      }
      _setDebugValue(id, key, val) {
        const style = 'display: block !important; margin: 0px !important; padding: 0px !important; line-height: 1.15 !important; color: rgb(255, 255, 255) !important; font-size: 14px !important; overflow-wrap: anywhere;';
        const eid = 'vuukle-' + id + '-debug-panel2';
        const pid = eid + '-' + key.toLowerCase().replace(/[^a-z0-9_-]/g, '_');
        let p = document.getElementById(pid);
        if (!p) {
          const elem = document.getElementById(eid);
          if (!elem) {
            // debug window not found
            return;
          }
          p = document.createElement('p');
          p.id = pid;
          p.style = style;
          elem.appendChild(p);
        }
        p.textContent = key + '=' + val;
      }
      _requestAd(slotIds, retry, retryCnt, startLogic, mainLoop) {
        const self = this;
        if (self.config.activeViewFirstRefresh && !self._logicStarted && !startLogic) {
          dlog('ignore preauction', slotIds, retry, retryCnt);
          return;
        }
        self._logicStarted = true;
        if (slotIds && !slotIds.length && !self._refQueue.length || retryCnt && retryCnt != self.retryCnt) {
          dlog('ignore dup refresh', slotIds, self._refQueue, retry, retryCnt, self.retryCnt);
          return;
        }
        if (slotIds) {
          let tempSlots = self._refQueue.reduce((a, x) => (a[x] = true, a), {});
          slotIds.forEach(x => tempSlots[x] = true);
          slotIds = Object.keys(tempSlots);
          self._refQueue = slotIds;
        }
        if (self.inAuction) {
          dlog('DEBUG in auction', slotIds, retry, retryCnt, startLogic);
          if (retry >= 100) {
            dwarn('problem in refresh logic, reset auction status');
            self.inAuction = false;
            return;
          }
          retry = retry || 0;
          self.retryCnt = self.retryCnt || 0;
          self.retryCnt++;
          if (retry % 10 == 0) {
            dlog('current auction in progress', self._refQueue, retry, slotIds, self.retryCnt);
          }
          retry++;
          setTimeout(self._requestAd.bind(self), 100, slotIds ? [] : undefined, retry, slotIds ? self.retryCnt : 0, mainLoop);
          return;
        }
        self.retryCnt = 0;
        dlog('start ad request', slotIds || '');
        self._refQueue = [];
        self.inAuction = true;
        self._showed = false;
        self.back = 0;
        self._refreshSlots = {};
        if (!self.config.pbcfg.adUnits.some(u => u.vuukle.lastRefresh + u.vuukle.refreshTime <= Date.now()) && self._interstitialUnits.length == 0) {
          if (!slotIds) {
            self._showed = true;
          }
          self._refreshFn(mainLoop);
          return;
        }

        // check dynamically added slots
        self._createGPTSlots();
        // readd adunits for lazy loaded
        self._prepareAdUnits(slotIds);
        if (vuuklehb.adUnits.length === 0) {
          // all adunits filtered
          if (!slotIds) {
            self._showed = true;
          }
          self._refreshFn(mainLoop);
          return;
        }
        slotIds = [...new Set(vuuklehb.adUnits.map(x => x.code))];
        slotIds.forEach(id => this._requested[id] = new Date());
        dlog(`start auction #${self._auctionsCount}`, vuuklehb.adUnits, slotIds);
        self._auctionsCount++;
        vuuklehb.requestBids({
          bidsBackHandler: function (bids) {
            self.back += 1;
            self._bidsBackHandler.bind(self)(bids, null, slotIds, mainLoop);
          },
          timeout: self._getTimeout()
        });
        self.apsPresent && googletag.cmd.push(function () {
          let apsSlots = [];
          let slots = vuukleSlots.map(slot => {
            return {
              id: slot.getSlotElementId(),
              adPath: slot.getAdUnitPath()
            };
          });
          dlog('dfp slots on page', vuukleSlots.map(s => s.getSlotElementId()), slots);
          for (let slot of slots) {
            let adPath = slot.adPath;
            let id = slot.id;
            let adUnit = self.adUnitCodes[id];
            if (adUnit && adUnit.a9 && adUnit.mediaTypes && adUnit.mediaTypes.banner && adUnit.mediaTypes.banner.sizes) {
              apsSlots.push({
                slotID: id,
                slotName: adPath,
                sizes: adUnit.a9sizes
              });
            }
          }
          dlog('aps slots', apsSlots);
          if (apsSlots.length == 0) {
            self._apsBidsBackHandler.bind(self)(undefined, slotIds, mainLoop);
            return;
          }
          if (self._atag) {
            self._atag.then(() => {
              var _self$apsIframe, _self$apsIframe$conte, _self$apsIframe$conte2;
              dlog('request aps bids');
              if (!((_self$apsIframe = self.apsIframe) !== null && _self$apsIframe !== void 0 && (_self$apsIframe$conte = _self$apsIframe.contentWindow) !== null && _self$apsIframe$conte !== void 0 && (_self$apsIframe$conte2 = _self$apsIframe$conte.apstag) !== null && _self$apsIframe$conte2 !== void 0 && _self$apsIframe$conte2.fetchBids)) {
                var _self$apsIframe2, _self$apsIframe3, _self$apsIframe3$cont;
                derr('no aps handler', !!self.apsIframe, !!((_self$apsIframe2 = self.apsIframe) !== null && _self$apsIframe2 !== void 0 && _self$apsIframe2.contentWindow), !!((_self$apsIframe3 = self.apsIframe) !== null && _self$apsIframe3 !== void 0 && (_self$apsIframe3$cont = _self$apsIframe3.contentWindow) !== null && _self$apsIframe3$cont !== void 0 && _self$apsIframe3$cont.apstag));
                self._apsBidsBackHandler.bind(self)(undefined, slotIds, mainLoop);
                return;
              }
              self.apsIframe.contentWindow.apstag.fetchBids({
                timeout: self._getTimeout(),
                slots: apsSlots
              }, bids => self._apsBidsBackHandler.bind(self)(bids, slotIds, mainLoop));
            });
          } else {
            var _self$apsIframe4, _self$apsIframe5, _self$apsIframe5$cont;
            derr('no aps loader', !!self.apsIframe, !!((_self$apsIframe4 = self.apsIframe) !== null && _self$apsIframe4 !== void 0 && _self$apsIframe4.contentWindow), !!((_self$apsIframe5 = self.apsIframe) !== null && _self$apsIframe5 !== void 0 && (_self$apsIframe5$cont = _self$apsIframe5.contentWindow) !== null && _self$apsIframe5$cont !== void 0 && _self$apsIframe5$cont.apstag));
            self._apsBidsBackHandler.bind(self)(undefined, slotIds, mainLoop);
          }
        });
      }
      _refreshFn(mainLoop) {
        var self = this;
        self.inAuction = false;
        if (!mainLoop) {
          dlog('ignore refresh (observed refresh)');
          return;
        }
        if (!self._showed) {
          dlog('ignore refresh');
          return;
        }
        dlog('wait for next auction');
        self._showed = false;
        setTimeout(self._requestAd.bind(self), self._checkAuctionTime, undefined, undefined, undefined, true, true);
      }
      _apsBidsBackHandler(bids, slotIds, mainLoop) {
        dlog('_apsBidsBackHandler', bids);
        const self = this;
        self.back += 1;
        self._apsBids = bids;
        if (bids) {
          bids.forEach(function (b) {
            if (!~['0', '1', '2'].indexOf(b.amznbid) && self._refreshSlots[b.slotID] != 'pb') {
              self._refreshSlots[b.slotID] = 'aps';
            }
            if (b.amzniid) {
              self._amzniids[b.amzniid] = true;
            }
          });
          googletag.cmd.push(function () {
            self.apsIframe.contentWindow.apstag.setDisplayBids();
          });
        }
        this._realBidsHandler(slotIds, mainLoop);
      }
      _checkRestrictions(data) {
        if (!data || data === true) {
          return data;
        }
        let block = false;
        block = block || data.countryInclude && !this._geoInclude(data.countryInclude);
        block = block || data.countryBlock && this._geoInclude(data.countryBlock);
        block = block || data.mobileOnly && !isMobile();
        block = block || data.desktopOnly && isMobile();
        return !block;
      }
      _bidsBackHandler(bids, timedOut, slotIds, mainLoop) {
        dlog('_BidsBackHandler', bids, slotIds || '');
        this.pbBids = bids;
        this.highBids = vuuklehb.getHighestCpmBids().reduce(function name(prev, cur) {
          prev[cur.adUnitCode] = cur;
          return prev;
        }, {});
        for (const id in bids) {
          if (!Object.prototype.hasOwnProperty.call(bids, id)) {
            continue;
          }
          bids[id].bids.forEach(bid => {
            if (bid.native && !bid.native.body) {
              bid.native.body = ' ';
            }
          });
        }
        if (!timedOut) {
          for (let c in bids) {
            if (!Object.prototype.hasOwnProperty.call(bids, c)) {
              continue;
            }
            if (bids[c].bids.length > 0) {
              this._refreshSlots[c] = 'pb';
              this._counters.prebidBid[c] = (this._counters.prebidBid[c] || 0) + 1;
            }
          }
        }
        this._realBidsHandler(slotIds, mainLoop);
      }
      _isInstream(u) {
        return u.mediaTypes && u.mediaTypes.video && u.mediaTypes.video.context === 'instream';
      }
      _getApsPrice(amznbid) {
        return apsPriceMap[amznbid.replace(/.*_/, '')];
      }
      _realBidsHandler(slotIds, mainLoop) {
        var self = this;
        if (self.apsPresent && self.back < 2 || self._showed && !slotIds) {
          dlog('wait end of auction', self.apsPresent, self.back, self._showed, slotIds);
          self.inAuction = self.apsPresent && self.back < 2;
          return;
        }
        self.inAuction = false;
        if (self._player) {
          self._player._handleVideoBids(self.pbBids);
        }
        self._showed = true;
        for (let id in self._showedSlots) {
          if (!Object.prototype.hasOwnProperty.call(self._showedSlots, id)) {
            continue;
          }
          if (slotIds && !slotIds.includes(id) && !self._requested[id]) {
            dlog('[disabled] slot_not_in_slotids', id, slotIds);
            // continue;
          }
          let adUnitAdInView = self.config.dfpAdInView || self.adUnitCodes[id] && self.adUnitCodes[id].dfpAdInView;
          let adInViewAllowed = !adUnitAdInView || self._observing.dfpViewable[id];
          if (!self._refreshSlots[id] && self._forceRefresh[id]) {
            self._refreshSlots[id] = 'google-fast-ref';
            self._forceRefresh[id] = false;
          }
          if (self._allowGAMRefresh[id] && !self._refreshSlots[id] && id[0] != '/' && self._isAVRefAllowed(id)) {
            self._refreshSlots[id] = 'google';
          }
          if (self._refreshNoAdx[id] && !self._displayedAdx[id] && !self._refreshSlots[id] && id[0] != '/') {
            self._refreshSlots[id] = 'google-noadx';
          }
          if (!self._refreshSlots[id] && self._notDisplayedSlots[id] && self._auctionOptimization[id] && id[0] != '/' && adInViewAllowed) {
            self._refreshSlots[id] = 'google-opt';
          }
          if (vuukleSlots.find(slot => slot.getOutOfPage() && slot.getAdUnitPath() == id)) {
            self._refreshSlots[id] = 'google-instl-adx';
          }
        }
        dlog('select refresh', clone(self._refreshSlots), clone(self._showedSlots));
        const oldFA = self._firstAuction;
        self._firstAuction = false; // disable showed checks
        for (let id in self._refreshExcluded) {
          if (!Object.prototype.hasOwnProperty.call(self._refreshExcluded, id)) {
            continue;
          }
          delete self._refreshSlots[id];
        }
        for (let id in self._requested) {
          if (!Object.prototype.hasOwnProperty.call(self._requested, id)) {
            continue;
          }
          if (!(id in self._refreshSlots)) {
            delete self._requested[id];
          }
        }
        dlog('refr slots', clone(self._refreshSlots));
        let refr = Object.keys(self._refreshSlots);
        if (refr.length == 0) {
          self._refreshFn(mainLoop);
          return;
        }
        googletag.cmd.push(function () {
          vuuklehb.que.push(function () {
            vuuklehb.setTargetingForGPTAsync();
            let newRefr = {};
            refr.forEach(function (id) {
              if (id != 'video' && !/^\//.test(id)) {
                let target = document.getElementById(id);
                if (!target) {
                  dwarn('target element not found', id);
                  return;
                }
                if (!target.querySelector('div')) {
                  dlog('display tag', id);
                  if (googletag.pubads().isInitialLoadDisabled() || self._auctionOptimization[id]) {
                    newRefr[id] = true;
                  }
                } else if (!oldFA) {
                  dlog('Add ref slot', id, oldFA);
                  newRefr[id] = true;
                }
                return;
              }
              newRefr[id] = true;
            });
            let inAuctionSlots = vuuklehb.adUnits.reduce((r, x) => (r[x.code] = true, r), {});
            let toRefresh = vuukleSlots.filter(function (slot) {
              let id = slot.getSlotElementId();
              let ref = newRefr[id] || newRefr[slot.getAdUnitPath()];
              if (ref) {
                inAuctionSlots[id] = true;
              }
              if (self.config.activeViewFirstRefresh && !self._isAVRefAllowed(id) && !(id in self._observing.activeView.dfpRefreshed)) {
                dlog('activeViewFirstRefresh ignore', id);
                return false;
              }
              self._observing.activeView.dfpRefreshed[id] = true;
              return ref;
            }).map(s => s.isFake ? s.realInit() : s);
            Object.keys(inAuctionSlots).forEach(id => self._updateBidx(id));
            dlog('to refresh slots', Object.keys(newRefr), toRefresh, inAuctionSlots);
            let waitRef = [];
            toRefresh = toRefresh.filter(s => {
              let id = s.getSlotElementId();
              let refTarget = s.getTargeting("refreshIteration");
              let ref = refTarget.length > 0 ? Math.floor(refTarget[0]) : -1;
              ref++;
              s.setTargeting("refreshIteration", ref.toString());
              self._setDebugValue(id, 'G_refs', ref.toString());
              self._lastRefreshSlot[id] = Date.now();
              if (self._notDisplayedSlots[id]) {
                delete self._notDisplayedSlots[id];
                googletag.display(id);
                if (!googletag.pubads().isInitialLoadDisabled()) {
                  self._counters.refreshSlot[id] = (self._counters.refreshSlot[id] || 0) + 1;
                  return false;
                }
              }
              if (self.config.hybridWait && self._observing.adInView[id] > 2) {
                waitRef.push(s);
                return false;
              }
              if (!self.checkCounterLimits(id, "prerefresh")) {
                return false;
              }
              return true;
            });
            if (toRefresh.length > 0) {
              for (var i = 0; i < toRefresh.length; i++) {
                let id = toRefresh[i].getSlotElementId();
                self._counters.refreshSlot[id] = (self._counters.refreshSlot[id] || 0) + 1;
              }
              googletag.pubads().refresh(toRefresh);
            }
            if (waitRef.length > 0) {
              setTimeout(() => {
                for (var i = 0; i < waitRef.length; i++) {
                  let id = waitRef[i].getSlotElementId();
                  self._counters.refreshSlot[id] = (self._counters.refreshSlot[id] || 0) + 1;
                }
                googletag.pubads().refresh(waitRef);
              }, 1000);
            }
            self._refreshFn(mainLoop);
          });
        });
      }
    }

    return VuuklePlayer;

})();
window.vuuklePlayerComponent = new VuuklePlayer('2026-02-18T10:19:04+00:00', '8bd06ac9c99394a02e875ab5b3c02fe68ed752da', 0);});vuukleLoader(window, document);window.vuukleLoaded=1;try{window.top.vuukleLoader=window.top.vuukleLoader||vuukleLoader}catch(e){};
