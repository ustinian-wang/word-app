(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();var Ah={};/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */var Cn=Object.freeze({}),be=Array.isArray;function he(e){return e==null}function V(e){return e!=null}function Be(e){return e===!0}function Sh(e){return e===!1}function $r(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"||typeof e=="boolean"}function Ne(e){return typeof e=="function"}function fn(e){return e!==null&&typeof e=="object"}var cc=Object.prototype.toString;function On(e){return cc.call(e)==="[object Object]"}function Ch(e){return cc.call(e)==="[object RegExp]"}function mv(e){var n=parseFloat(String(e));return n>=0&&Math.floor(n)===n&&isFinite(e)}function co(e){return V(e)&&typeof e.then=="function"&&typeof e.catch=="function"}function Fh(e){return e==null?"":Array.isArray(e)||On(e)&&e.toString===cc?JSON.stringify(e,Oh,2):String(e)}function Oh(e,n){return n&&n.__v_isRef?n.value:n}function Er(e){var n=parseFloat(e);return isNaN(n)?e:n}function na(e,n){for(var a=Object.create(null),t=e.split(","),r=0;r<t.length;r++)a[t[r]]=!0;return n?function(i){return a[i.toLowerCase()]}:function(i){return a[i]}}na("slot,component",!0);var Rh=na("key,ref,slot,slot-scope,is");function Ga(e,n){var a=e.length;if(a){if(n===e[a-1]){e.length=a-1;return}var t=e.indexOf(n);if(t>-1)return e.splice(t,1)}}var Ih=Object.prototype.hasOwnProperty;function yn(e,n){return Ih.call(e,n)}function mt(e){var n=Object.create(null);return function(t){var r=n[t];return r||(n[t]=e(t))}}var Dh=/-(\w)/g,st=mt(function(e){return e.replace(Dh,function(n,a){return a?a.toUpperCase():""})}),Ph=mt(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Nh=/\B([A-Z])/g,qr=mt(function(e){return e.replace(Nh,"-$1").toLowerCase()});function Lh(e,n){function a(t){var r=arguments.length;return r?r>1?e.apply(n,arguments):e.call(n,t):e.call(n)}return a._length=e.length,a}function Mh(e,n){return e.bind(n)}var gv=Function.prototype.bind?Mh:Lh;function lo(e,n){n=n||0;for(var a=e.length-n,t=new Array(a);a--;)t[a]=e[a+n];return t}function Re(e,n){for(var a in n)e[a]=n[a];return e}function jv(e){for(var n={},a=0;a<e.length;a++)e[a]&&Re(n,e[a]);return n}function nn(e,n,a){}var ti=function(e,n,a){return!1},xv=function(e){return e};function ot(e,n){if(e===n)return!0;var a=fn(e),t=fn(n);if(a&&t)try{var r=Array.isArray(e),i=Array.isArray(n);if(r&&i)return e.length===n.length&&e.every(function(c,l){return ot(c,n[l])});if(e instanceof Date&&n instanceof Date)return e.getTime()===n.getTime();if(!r&&!i){var s=Object.keys(e),o=Object.keys(n);return s.length===o.length&&s.every(function(c){return ot(e[c],n[c])})}else return!1}catch{return!1}else return!a&&!t?String(e)===String(n):!1}function yv(e,n){for(var a=0;a<e.length;a++)if(ot(e[a],n))return a;return-1}function Bi(e){var n=!1;return function(){n||(n=!0,e.apply(this,arguments))}}function Bh(e,n){return e===n?e===0&&1/e!==1/n:e===e||n===n}var Cl="data-server-rendered",xs=["component","directive","filter"],bv=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],Un={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:ti,isReservedAttr:ti,isUnknownElement:ti,getTagNamespace:nn,parsePlatformTagName:xv,mustUseProp:ti,async:!0,_lifecycleHooks:bv},Uh=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function wv(e){var n=(e+"").charCodeAt(0);return n===36||n===95}function Pa(e,n,a,t){Object.defineProperty(e,n,{value:a,enumerable:!1,writable:!0,configurable:!0})}var zh=new RegExp("[^".concat(Uh.source,".$_\\d]"));function $h(e){if(!zh.test(e)){var n=e.split(".");return function(a){for(var t=0;t<n.length;t++){if(!a)return;a=a[n[t]]}return a}}}var qh="__proto__"in{},Dn=typeof window<"u",$n=Dn&&window.navigator.userAgent.toLowerCase(),Ut=$n&&/msie|trident/.test($n),zt=$n&&$n.indexOf("msie 9.0")>0,_v=$n&&$n.indexOf("edge/")>0;$n&&$n.indexOf("android")>0;var Hh=$n&&/iphone|ipad|ipod|ios/.test($n),Fl=$n&&$n.match(/firefox\/(\d+)/),uo={}.watch,kv=!1;if(Dn)try{var Ol={};Object.defineProperty(Ol,"passive",{get:function(){kv=!0}}),window.addEventListener("test-passive",null,Ol)}catch{}var ri,Hr=function(){return ri===void 0&&(!Dn&&typeof global<"u"?ri=global.process&&Ah.VUE_ENV==="server":ri=!1),ri},Ui=Dn&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Rt(e){return typeof e=="function"&&/native code/.test(e.toString())}var Wr=typeof Symbol<"u"&&Rt(Symbol)&&typeof Reflect<"u"&&Rt(Reflect.ownKeys),Tr;typeof Set<"u"&&Rt(Set)?Tr=Set:Tr=function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(n){return this.set[n]===!0},e.prototype.add=function(n){this.set[n]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var It=null;function Ua(e){e===void 0&&(e=null),e||It&&It._scope.off(),It=e,e&&e._scope.on()}var Rn=function(){function e(n,a,t,r,i,s,o,c){this.tag=n,this.data=a,this.children=t,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=a&&a.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=c,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),et=function(e){e===void 0&&(e="");var n=new Rn;return n.text=e,n.isComment=!0,n};function St(e){return new Rn(void 0,void 0,void 0,String(e))}function vo(e){var n=new Rn(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return n.ns=e.ns,n.isStatic=e.isStatic,n.key=e.key,n.isComment=e.isComment,n.fnContext=e.fnContext,n.fnOptions=e.fnOptions,n.fnScopeId=e.fnScopeId,n.asyncMeta=e.asyncMeta,n.isCloned=!0,n}var Wh=0,ki=[],Gh=function(){for(var e=0;e<ki.length;e++){var n=ki[e];n.subs=n.subs.filter(function(a){return a}),n._pending=!1}ki.length=0},za=function(){function e(){this._pending=!1,this.id=Wh++,this.subs=[]}return e.prototype.addSub=function(n){this.subs.push(n)},e.prototype.removeSub=function(n){this.subs[this.subs.indexOf(n)]=null,this._pending||(this._pending=!0,ki.push(this))},e.prototype.depend=function(n){e.target&&e.target.addDep(this)},e.prototype.notify=function(n){for(var a=this.subs.filter(function(s){return s}),t=0,r=a.length;t<r;t++){var i=a[t];i.update()}},e}();za.target=null;var Ei=[];function $t(e){Ei.push(e),za.target=e}function qt(){Ei.pop(),za.target=Ei[Ei.length-1]}var Ev=Array.prototype,zi=Object.create(Ev),Vh=["push","pop","shift","unshift","splice","sort","reverse"];Vh.forEach(function(e){var n=Ev[e];Pa(zi,e,function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=n.apply(this,t),s=this.__ob__,o;switch(e){case"push":case"unshift":o=t;break;case"splice":o=t.slice(2);break}return o&&s.observeArray(o),s.dep.notify(),i})});var Rl=Object.getOwnPropertyNames(zi),Tv={},lc=!0;function $a(e){lc=e}var Xh={notify:nn,depend:nn,addSub:nn,removeSub:nn},Il=function(){function e(n,a,t){if(a===void 0&&(a=!1),t===void 0&&(t=!1),this.value=n,this.shallow=a,this.mock=t,this.dep=t?Xh:new za,this.vmCount=0,Pa(n,"__ob__",this),be(n)){if(!t)if(qh)n.__proto__=zi;else for(var r=0,i=Rl.length;r<i;r++){var s=Rl[r];Pa(n,s,zi[s])}a||this.observeArray(n)}else for(var o=Object.keys(n),r=0;r<o.length;r++){var s=o[r];ct(n,s,Tv,void 0,a,t)}}return e.prototype.observeArray=function(n){for(var a=0,t=n.length;a<t;a++)wa(n[a],!1,this.mock)},e}();function wa(e,n,a){if(e&&yn(e,"__ob__")&&e.__ob__ instanceof Il)return e.__ob__;if(lc&&(a||!Hr())&&(be(e)||On(e))&&Object.isExtensible(e)&&!e.__v_skip&&!la(e)&&!(e instanceof Rn))return new Il(e,n,a)}function ct(e,n,a,t,r,i,s){s===void 0&&(s=!1);var o=new za,c=Object.getOwnPropertyDescriptor(e,n);if(!(c&&c.configurable===!1)){var l=c&&c.get,d=c&&c.set;(!l||d)&&(a===Tv||arguments.length===2)&&(a=e[n]);var u=r?a&&a.__ob__:wa(a,!1,i);return Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var v=l?l.call(e):a;return za.target&&(o.depend(),u&&(u.dep.depend(),be(v)&&Sv(v))),la(v)&&!r?v.value:v},set:function(v){var h=l?l.call(e):a;if(Bh(h,v)){if(d)d.call(e,v);else{if(l)return;if(!r&&la(h)&&!la(v)){h.value=v;return}else a=v}u=r?v&&v.__ob__:wa(v,!1,i),o.notify()}}}),o}}function dc(e,n,a){if(!uc(e)){var t=e.__ob__;return be(e)&&mv(n)?(e.length=Math.max(e.length,n),e.splice(n,1,a),t&&!t.shallow&&t.mock&&wa(a,!1,!0),a):n in e&&!(n in Object.prototype)?(e[n]=a,a):e._isVue||t&&t.vmCount?a:t?(ct(t.value,n,a,void 0,t.shallow,t.mock),t.dep.notify(),a):(e[n]=a,a)}}function Av(e,n){if(be(e)&&mv(n)){e.splice(n,1);return}var a=e.__ob__;e._isVue||a&&a.vmCount||uc(e)||yn(e,n)&&(delete e[n],a&&a.dep.notify())}function Sv(e){for(var n=void 0,a=0,t=e.length;a<t;a++)n=e[a],n&&n.__ob__&&n.__ob__.dep.depend(),be(n)&&Sv(n)}function Cv(e){return Kh(e,!0),Pa(e,"__v_isShallow",!0),e}function Kh(e,n){uc(e)||wa(e,n,Hr())}function uc(e){return!!(e&&e.__v_isReadonly)}function la(e){return!!(e&&e.__v_isRef===!0)}function fo(e,n,a){Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:function(){var t=n[a];if(la(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=n[a];la(r)&&!la(t)?r.value=t:n[a]=t}})}var kn,Yh=function(){function e(n){n===void 0&&(n=!1),this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=kn,!n&&kn&&(this.index=(kn.scopes||(kn.scopes=[])).push(this)-1)}return e.prototype.run=function(n){if(this.active){var a=kn;try{return kn=this,n()}finally{kn=a}}},e.prototype.on=function(){kn=this},e.prototype.off=function(){kn=this.parent},e.prototype.stop=function(n){if(this.active){var a=void 0,t=void 0;for(a=0,t=this.effects.length;a<t;a++)this.effects[a].teardown();for(a=0,t=this.cleanups.length;a<t;a++)this.cleanups[a]();if(this.scopes)for(a=0,t=this.scopes.length;a<t;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!n){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Jh(e,n){n===void 0&&(n=kn),n&&n.active&&n.effects.push(e)}function Zh(){return kn}function Qh(e){var n=e._provided,a=e.$parent&&e.$parent._provided;return a===n?e._provided=Object.create(a):n}var Dl=mt(function(e){var n=e.charAt(0)==="&";e=n?e.slice(1):e;var a=e.charAt(0)==="~";e=a?e.slice(1):e;var t=e.charAt(0)==="!";return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:n}});function po(e,n){function a(){var t=a.fns;if(be(t))for(var r=t.slice(),i=0;i<r.length;i++)qa(r[i],null,arguments,n,"v-on handler");else return qa(t,null,arguments,n,"v-on handler")}return a.fns=e,a}function Fv(e,n,a,t,r,i){var s,o,c,l;for(s in e)o=e[s],c=n[s],l=Dl(s),he(o)||(he(c)?(he(o.fns)&&(o=e[s]=po(o,i)),Be(l.once)&&(o=e[s]=r(l.name,o,l.capture)),a(l.name,o,l.capture,l.passive,l.params)):o!==c&&(c.fns=o,e[s]=c));for(s in n)he(e[s])&&(l=Dl(s),t(l.name,n[s],l.capture))}function Oa(e,n,a){e instanceof Rn&&(e=e.data.hook||(e.data.hook={}));var t,r=e[n];function i(){a.apply(this,arguments),Ga(t.fns,i)}he(r)?t=po([i]):V(r.fns)&&Be(r.merged)?(t=r,t.fns.push(i)):t=po([r,i]),t.merged=!0,e[n]=t}function em(e,n,a){var t=n.options.props;if(!he(t)){var r={},i=e.attrs,s=e.props;if(V(i)||V(s))for(var o in t){var c=qr(o);Pl(r,s,o,c,!0)||Pl(r,i,o,c,!1)}return r}}function Pl(e,n,a,t,r){if(V(n)){if(yn(n,a))return e[a]=n[a],r||delete n[a],!0;if(yn(n,t))return e[a]=n[t],r||delete n[t],!0}return!1}function nm(e){for(var n=0;n<e.length;n++)if(be(e[n]))return Array.prototype.concat.apply([],e);return e}function vc(e){return $r(e)?[St(e)]:be(e)?Ov(e):void 0}function nr(e){return V(e)&&V(e.text)&&Sh(e.isComment)}function Ov(e,n){var a=[],t,r,i,s;for(t=0;t<e.length;t++)r=e[t],!(he(r)||typeof r=="boolean")&&(i=a.length-1,s=a[i],be(r)?r.length>0&&(r=Ov(r,"".concat(n||"","_").concat(t)),nr(r[0])&&nr(s)&&(a[i]=St(s.text+r[0].text),r.shift()),a.push.apply(a,r)):$r(r)?nr(s)?a[i]=St(s.text+r):r!==""&&a.push(St(r)):nr(r)&&nr(s)?a[i]=St(s.text+r.text):(Be(e._isVList)&&V(r.tag)&&he(r.key)&&V(n)&&(r.key="__vlist".concat(n,"_").concat(t,"__")),a.push(r)));return a}function am(e,n){var a=null,t,r,i,s;if(be(e)||typeof e=="string")for(a=new Array(e.length),t=0,r=e.length;t<r;t++)a[t]=n(e[t],t);else if(typeof e=="number")for(a=new Array(e),t=0;t<e;t++)a[t]=n(t+1,t);else if(fn(e))if(Wr&&e[Symbol.iterator]){a=[];for(var o=e[Symbol.iterator](),c=o.next();!c.done;)a.push(n(c.value,a.length)),c=o.next()}else for(i=Object.keys(e),a=new Array(i.length),t=0,r=i.length;t<r;t++)s=i[t],a[t]=n(e[s],s,t);return V(a)||(a=[]),a._isVList=!0,a}function tm(e,n,a,t){var r=this.$scopedSlots[e],i;r?(a=a||{},t&&(a=Re(Re({},t),a)),i=r(a)||(Ne(n)?n():n)):i=this.$slots[e]||(Ne(n)?n():n);var s=a&&a.slot;return s?this.$createElement("template",{slot:s},i):i}function rm(e){return Vi(this.$options,"filters",e)||xv}function Nl(e,n){return be(e)?e.indexOf(n)===-1:e!==n}function im(e,n,a,t,r){var i=Un.keyCodes[n]||a;return r&&t&&!Un.keyCodes[n]?Nl(r,t):i?Nl(i,e):t?qr(t)!==n:e===void 0}function sm(e,n,a,t,r){if(a&&fn(a)){be(a)&&(a=jv(a));var i=void 0,s=function(c){if(c==="class"||c==="style"||Rh(c))i=e;else{var l=e.attrs&&e.attrs.type;i=t||Un.mustUseProp(n,l,c)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var d=st(c),u=qr(c);if(!(d in i)&&!(u in i)&&(i[c]=a[c],r)){var f=e.on||(e.on={});f["update:".concat(c)]=function(v){a[c]=v}}};for(var o in a)s(o)}return e}function om(e,n){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!n||(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),Rv(t,"__static__".concat(e),!1)),t}function cm(e,n,a){return Rv(e,"__once__".concat(n).concat(a?"_".concat(a):""),!0),e}function Rv(e,n,a){if(be(e))for(var t=0;t<e.length;t++)e[t]&&typeof e[t]!="string"&&Ll(e[t],"".concat(n,"_").concat(t),a);else Ll(e,n,a)}function Ll(e,n,a){e.isStatic=!0,e.key=n,e.isOnce=a}function lm(e,n){if(n&&On(n)){var a=e.on=e.on?Re({},e.on):{};for(var t in n){var r=a[t],i=n[t];a[t]=r?[].concat(r,i):i}}return e}function Iv(e,n,a,t){n=n||{$stable:!a};for(var r=0;r<e.length;r++){var i=e[r];be(i)?Iv(i,n,a):i&&(i.proxy&&(i.fn.proxy=!0),n[i.key]=i.fn)}return t&&(n.$key=t),n}function dm(e,n){for(var a=0;a<n.length;a+=2){var t=n[a];typeof t=="string"&&t&&(e[n[a]]=n[a+1])}return e}function um(e,n){return typeof e=="string"?n+e:e}function Dv(e){e._o=cm,e._n=Er,e._s=Fh,e._l=am,e._t=tm,e._q=ot,e._i=yv,e._m=om,e._f=rm,e._k=im,e._b=sm,e._v=St,e._e=et,e._u=Iv,e._g=lm,e._d=dm,e._p=um}function fc(e,n){if(!e||!e.length)return{};for(var a={},t=0,r=e.length;t<r;t++){var i=e[t],s=i.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,(i.context===n||i.fnContext===n)&&s&&s.slot!=null){var o=s.slot,c=a[o]||(a[o]=[]);i.tag==="template"?c.push.apply(c,i.children||[]):c.push(i)}else(a.default||(a.default=[])).push(i)}for(var l in a)a[l].every(vm)&&delete a[l];return a}function vm(e){return e.isComment&&!e.asyncFactory||e.text===" "}function Ar(e){return e.isComment&&e.asyncFactory}function pr(e,n,a,t){var r,i=Object.keys(a).length>0,s=n?!!n.$stable:!i,o=n&&n.$key;if(!n)r={};else{if(n._normalized)return n._normalized;if(s&&t&&t!==Cn&&o===t.$key&&!i&&!t.$hasNormal)return t;r={};for(var c in n)n[c]&&c[0]!=="$"&&(r[c]=fm(e,a,c,n[c]))}for(var l in a)l in r||(r[l]=pm(a,l));return n&&Object.isExtensible(n)&&(n._normalized=r),Pa(r,"$stable",s),Pa(r,"$key",o),Pa(r,"$hasNormal",i),r}function fm(e,n,a,t){var r=function(){var i=It;Ua(e);var s=arguments.length?t.apply(null,arguments):t({});s=s&&typeof s=="object"&&!be(s)?[s]:vc(s);var o=s&&s[0];return Ua(i),s&&(!o||s.length===1&&o.isComment&&!Ar(o))?void 0:s};return t.proxy&&Object.defineProperty(n,a,{get:r,enumerable:!0,configurable:!0}),r}function pm(e,n){return function(){return e[n]}}function hm(e){var n=e.$options,a=n.setup;if(a){var t=e._setupContext=mm(e);Ua(e),$t();var r=qa(a,null,[e._props||Cv({}),t],e,"setup");if(qt(),Ua(),Ne(r))n.render=r;else if(fn(r))if(e._setupState=r,r.__sfc){var s=e._setupProxy={};for(var i in r)i!=="__sfc"&&fo(s,r,i)}else for(var i in r)wv(i)||fo(e,r,i)}}function mm(e){return{get attrs(){if(!e._attrsProxy){var n=e._attrsProxy={};Pa(n,"_v_attr_proxy",!0),$i(n,e.$attrs,Cn,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var n=e._listenersProxy={};$i(n,e.$listeners,Cn,e,"$listeners")}return e._listenersProxy},get slots(){return jm(e)},emit:gv(e.$emit,e),expose:function(n){n&&Object.keys(n).forEach(function(a){return fo(e,n,a)})}}}function $i(e,n,a,t,r){var i=!1;for(var s in n)s in e?n[s]!==a[s]&&(i=!0):(i=!0,gm(e,s,t,r));for(var s in e)s in n||(i=!0,delete e[s]);return i}function gm(e,n,a,t){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){return a[t][n]}})}function jm(e){return e._slotsProxy||Pv(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function Pv(e,n){for(var a in n)e[a]=n[a];for(var a in e)a in n||delete e[a]}function xm(e){e._vnode=null,e._staticTrees=null;var n=e.$options,a=e.$vnode=n._parentVnode,t=a&&a.context;e.$slots=fc(n._renderChildren,t),e.$scopedSlots=a?pr(e.$parent,a.data.scopedSlots,e.$slots):Cn,e._c=function(i,s,o,c){return qi(e,i,s,o,c,!1)},e.$createElement=function(i,s,o,c){return qi(e,i,s,o,c,!0)};var r=a&&a.data;ct(e,"$attrs",r&&r.attrs||Cn,null,!0),ct(e,"$listeners",n._parentListeners||Cn,null,!0)}var Ti=null;function ym(e){Dv(e.prototype),e.prototype.$nextTick=function(n){return pc(n,this)},e.prototype._render=function(){var n=this,a=n.$options,t=a.render,r=a._parentVnode;r&&n._isMounted&&(n.$scopedSlots=pr(n.$parent,r.data.scopedSlots,n.$slots,n.$scopedSlots),n._slotsProxy&&Pv(n._slotsProxy,n.$scopedSlots)),n.$vnode=r;var i=It,s=Ti,o;try{Ua(n),Ti=n,o=t.call(n._renderProxy,n.$createElement)}catch(c){lt(c,n,"render"),o=n._vnode}finally{Ti=s,Ua(i)}return be(o)&&o.length===1&&(o=o[0]),o instanceof Rn||(o=et()),o.parent=r,o}}function Ls(e,n){return(e.__esModule||Wr&&e[Symbol.toStringTag]==="Module")&&(e=e.default),fn(e)?n.extend(e):e}function bm(e,n,a,t,r){var i=et();return i.asyncFactory=e,i.asyncMeta={data:n,context:a,children:t,tag:r},i}function wm(e,n){if(Be(e.error)&&V(e.errorComp))return e.errorComp;if(V(e.resolved))return e.resolved;var a=Ti;if(a&&V(e.owners)&&e.owners.indexOf(a)===-1&&e.owners.push(a),Be(e.loading)&&V(e.loadingComp))return e.loadingComp;if(a&&!V(e.owners)){var t=e.owners=[a],r=!0,i=null,s=null;a.$on("hook:destroyed",function(){return Ga(t,a)});var o=function(u){for(var f=0,v=t.length;f<v;f++)t[f].$forceUpdate();u&&(t.length=0,i!==null&&(clearTimeout(i),i=null),s!==null&&(clearTimeout(s),s=null))},c=Bi(function(u){e.resolved=Ls(u,n),r?t.length=0:o(!0)}),l=Bi(function(u){V(e.errorComp)&&(e.error=!0,o(!0))}),d=e(c,l);return fn(d)&&(co(d)?he(e.resolved)&&d.then(c,l):co(d.component)&&(d.component.then(c,l),V(d.error)&&(e.errorComp=Ls(d.error,n)),V(d.loading)&&(e.loadingComp=Ls(d.loading,n),d.delay===0?e.loading=!0:i=setTimeout(function(){i=null,he(e.resolved)&&he(e.error)&&(e.loading=!0,o(!1))},d.delay||200)),V(d.timeout)&&(s=setTimeout(function(){s=null,he(e.resolved)&&l(null)},d.timeout)))),r=!1,e.loading?e.loadingComp:e.resolved}}function Nv(e){if(be(e))for(var n=0;n<e.length;n++){var a=e[n];if(V(a)&&(V(a.componentOptions)||Ar(a)))return a}}var _m=1,Lv=2;function qi(e,n,a,t,r,i){return(be(a)||$r(a))&&(r=t,t=a,a=void 0),Be(i)&&(r=Lv),km(e,n,a,t,r)}function km(e,n,a,t,r){if(V(a)&&V(a.__ob__)||(V(a)&&V(a.is)&&(n=a.is),!n))return et();be(t)&&Ne(t[0])&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),r===Lv?t=vc(t):r===_m&&(t=nm(t));var i,s;if(typeof n=="string"){var o=void 0;s=e.$vnode&&e.$vnode.ns||Un.getTagNamespace(n),Un.isReservedTag(n)?i=new Rn(Un.parsePlatformTagName(n),a,t,void 0,void 0,e):(!a||!a.pre)&&V(o=Vi(e.$options,"components",n))?i=Wl(o,a,e,t,n):i=new Rn(n,a,t,void 0,void 0,e)}else i=Wl(n,a,e,t);return be(i)?i:V(i)?(V(s)&&Mv(i,s),V(a)&&Em(a),i):et()}function Mv(e,n,a){if(e.ns=n,e.tag==="foreignObject"&&(n=void 0,a=!0),V(e.children))for(var t=0,r=e.children.length;t<r;t++){var i=e.children[t];V(i.tag)&&(he(i.ns)||Be(a)&&i.tag!=="svg")&&Mv(i,n,a)}}function Em(e){fn(e.style)&&Hi(e.style),fn(e.class)&&Hi(e.class)}function lt(e,n,a){$t();try{if(n)for(var t=n;t=t.$parent;){var r=t.$options.errorCaptured;if(r)for(var i=0;i<r.length;i++)try{var s=r[i].call(t,e,n,a)===!1;if(s)return}catch(o){Ml(o,t,"errorCaptured hook")}}Ml(e,n,a)}finally{qt()}}function qa(e,n,a,t,r){var i;try{i=a?e.apply(n,a):e.call(n),i&&!i._isVue&&co(i)&&!i._handled&&(i.catch(function(s){return lt(s,t,r+" (Promise/async)")}),i._handled=!0)}catch(s){lt(s,t,r)}return i}function Ml(e,n,a){if(Un.errorHandler)try{return Un.errorHandler.call(null,e,n,a)}catch(t){t!==e&&Bl(t)}Bl(e)}function Bl(e,n,a){if(Dn&&typeof console<"u")console.error(e);else throw e}var ho=!1,mo=[],go=!1;function ii(){go=!1;var e=mo.slice(0);mo.length=0;for(var n=0;n<e.length;n++)e[n]()}var or;if(typeof Promise<"u"&&Rt(Promise)){var Tm=Promise.resolve();or=function(){Tm.then(ii),Hh&&setTimeout(nn)},ho=!0}else if(!Ut&&typeof MutationObserver<"u"&&(Rt(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")){var si=1,Am=new MutationObserver(ii),Ul=document.createTextNode(String(si));Am.observe(Ul,{characterData:!0}),or=function(){si=(si+1)%2,Ul.data=String(si)},ho=!0}else typeof setImmediate<"u"&&Rt(setImmediate)?or=function(){setImmediate(ii)}:or=function(){setTimeout(ii,0)};function pc(e,n){var a;if(mo.push(function(){if(e)try{e.call(n)}catch(t){lt(t,n,"nextTick")}else a&&a(n)}),go||(go=!0,or()),!e&&typeof Promise<"u")return new Promise(function(t){a=t})}var Sm="2.7.16",zl=new Tr;function Hi(e){return Ai(e,zl),zl.clear(),e}function Ai(e,n){var a,t,r=be(e);if(!(!r&&!fn(e)||e.__v_skip||Object.isFrozen(e)||e instanceof Rn)){if(e.__ob__){var i=e.__ob__.dep.id;if(n.has(i))return;n.add(i)}if(r)for(a=e.length;a--;)Ai(e[a],n);else if(la(e))Ai(e.value,n);else for(t=Object.keys(e),a=t.length;a--;)Ai(e[t[a]],n)}}var Cm=0,hc=function(){function e(n,a,t,r,i){Jh(this,kn&&!kn._vm?kn:n?n._scope:void 0),(this.vm=n)&&i&&(n._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=t,this.id=++Cm,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Tr,this.newDepIds=new Tr,this.expression="",Ne(a)?this.getter=a:(this.getter=$h(a),this.getter||(this.getter=nn)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){$t(this);var n,a=this.vm;try{n=this.getter.call(a,a)}catch(t){if(this.user)lt(t,a,'getter for watcher "'.concat(this.expression,'"'));else throw t}finally{this.deep&&Hi(n),qt(),this.cleanupDeps()}return n},e.prototype.addDep=function(n){var a=n.id;this.newDepIds.has(a)||(this.newDepIds.add(a),this.newDeps.push(n),this.depIds.has(a)||n.addSub(this))},e.prototype.cleanupDeps=function(){for(var n=this.deps.length;n--;){var a=this.deps[n];this.newDepIds.has(a.id)||a.removeSub(this)}var t=this.depIds;this.depIds=this.newDepIds,this.newDepIds=t,this.newDepIds.clear(),t=this.deps,this.deps=this.newDeps,this.newDeps=t,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Wm(this)},e.prototype.run=function(){if(this.active){var n=this.get();if(n!==this.value||fn(n)||this.deep){var a=this.value;if(this.value=n,this.user){var t='callback for watcher "'.concat(this.expression,'"');qa(this.cb,this.vm,[n,a],this.vm,t)}else this.cb.call(this.vm,n,a)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){for(var n=this.deps.length;n--;)this.deps[n].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&Ga(this.vm._scope.effects,this),this.active){for(var n=this.deps.length;n--;)this.deps[n].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function Fm(e){e._events=Object.create(null),e._hasHookEvent=!1;var n=e.$options._parentListeners;n&&Bv(e,n)}var Sr;function Om(e,n){Sr.$on(e,n)}function Rm(e,n){Sr.$off(e,n)}function Im(e,n){var a=Sr;return function t(){var r=n.apply(null,arguments);r!==null&&a.$off(e,t)}}function Bv(e,n,a){Sr=e,Fv(n,a||{},Om,Rm,Im,e),Sr=void 0}function Dm(e){var n=/^hook:/;e.prototype.$on=function(a,t){var r=this;if(be(a))for(var i=0,s=a.length;i<s;i++)r.$on(a[i],t);else(r._events[a]||(r._events[a]=[])).push(t),n.test(a)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(a,t){var r=this;function i(){r.$off(a,i),t.apply(r,arguments)}return i.fn=t,r.$on(a,i),r},e.prototype.$off=function(a,t){var r=this;if(!arguments.length)return r._events=Object.create(null),r;if(be(a)){for(var i=0,s=a.length;i<s;i++)r.$off(a[i],t);return r}var o=r._events[a];if(!o)return r;if(!t)return r._events[a]=null,r;for(var c,l=o.length;l--;)if(c=o[l],c===t||c.fn===t){o.splice(l,1);break}return r},e.prototype.$emit=function(a){var t=this,r=t._events[a];if(r){r=r.length>1?lo(r):r;for(var i=lo(arguments,1),s='event handler for "'.concat(a,'"'),o=0,c=r.length;o<c;o++)qa(r[o],t,i,t,s)}return t}}var nt=null;function Uv(e){var n=nt;return nt=e,function(){nt=n}}function Pm(e){var n=e.$options,a=n.parent;if(a&&!n.abstract){for(;a.$options.abstract&&a.$parent;)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._provided=a?a._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Nm(e){e.prototype._update=function(n,a){var t=this,r=t.$el,i=t._vnode,s=Uv(t);t._vnode=n,i?t.$el=t.__patch__(i,n):t.$el=t.__patch__(t.$el,n,a,!1),s(),r&&(r.__vue__=null),t.$el&&(t.$el.__vue__=t);for(var o=t;o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode;)o.$parent.$el=o.$el,o=o.$parent},e.prototype.$forceUpdate=function(){var n=this;n._watcher&&n._watcher.update()},e.prototype.$destroy=function(){var n=this;if(!n._isBeingDestroyed){Zn(n,"beforeDestroy"),n._isBeingDestroyed=!0;var a=n.$parent;a&&!a._isBeingDestroyed&&!n.$options.abstract&&Ga(a.$children,n),n._scope.stop(),n._data.__ob__&&n._data.__ob__.vmCount--,n._isDestroyed=!0,n.__patch__(n._vnode,null),Zn(n,"destroyed"),n.$off(),n.$el&&(n.$el.__vue__=null),n.$vnode&&(n.$vnode.parent=null)}}}function Lm(e,n,a){e.$el=n,e.$options.render||(e.$options.render=et),Zn(e,"beforeMount");var t;t=function(){e._update(e._render(),a)};var r={before:function(){e._isMounted&&!e._isDestroyed&&Zn(e,"beforeUpdate")}};new hc(e,t,nn,r,!0),a=!1;var i=e._preWatchers;if(i)for(var s=0;s<i.length;s++)i[s].run();return e.$vnode==null&&(e._isMounted=!0,Zn(e,"mounted")),e}function Mm(e,n,a,t,r){var i=t.data.scopedSlots,s=e.$scopedSlots,o=!!(i&&!i.$stable||s!==Cn&&!s.$stable||i&&e.$scopedSlots.$key!==i.$key||!i&&e.$scopedSlots.$key),c=!!(r||e.$options._renderChildren||o),l=e.$vnode;e.$options._parentVnode=t,e.$vnode=t,e._vnode&&(e._vnode.parent=t),e.$options._renderChildren=r;var d=t.data.attrs||Cn;e._attrsProxy&&$i(e._attrsProxy,d,l.data&&l.data.attrs||Cn,e,"$attrs")&&(c=!0),e.$attrs=d,a=a||Cn;var u=e.$options._parentListeners;if(e._listenersProxy&&$i(e._listenersProxy,a,u||Cn,e,"$listeners"),e.$listeners=e.$options._parentListeners=a,Bv(e,a,u),n&&e.$options.props){$a(!1);for(var f=e._props,v=e.$options._propKeys||[],h=0;h<v.length;h++){var p=v[h],m=e.$options.props;f[p]=bc(p,m,n,e)}$a(!0),e.$options.propsData=n}c&&(e.$slots=fc(r,t.context),e.$forceUpdate())}function zv(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function mc(e,n){if(n){if(e._directInactive=!1,zv(e))return}else if(e._directInactive)return;if(e._inactive||e._inactive===null){e._inactive=!1;for(var a=0;a<e.$children.length;a++)mc(e.$children[a]);Zn(e,"activated")}}function $v(e,n){if(!(n&&(e._directInactive=!0,zv(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)$v(e.$children[a]);Zn(e,"deactivated")}}function Zn(e,n,a,t){t===void 0&&(t=!0),$t();var r=It,i=Zh();t&&Ua(e);var s=e.$options[n],o="".concat(n," hook");if(s)for(var c=0,l=s.length;c<l;c++)qa(s[c],e,null,e,o);e._hasHookEvent&&e.$emit("hook:"+n),t&&(Ua(r),i&&i.on()),qt()}var ga=[],gc=[],Wi={},jo=!1,jc=!1,Ct=0;function Bm(){Ct=ga.length=gc.length=0,Wi={},jo=jc=!1}var qv=0,xo=Date.now;if(Dn&&!Ut){var Ms=window.performance;Ms&&typeof Ms.now=="function"&&xo()>document.createEvent("Event").timeStamp&&(xo=function(){return Ms.now()})}var Um=function(e,n){if(e.post){if(!n.post)return 1}else if(n.post)return-1;return e.id-n.id};function zm(){qv=xo(),jc=!0;var e,n;for(ga.sort(Um),Ct=0;Ct<ga.length;Ct++)e=ga[Ct],e.before&&e.before(),n=e.id,Wi[n]=null,e.run();var a=gc.slice(),t=ga.slice();Bm(),Hm(a),$m(t),Gh(),Ui&&Un.devtools&&Ui.emit("flush")}function $m(e){for(var n=e.length;n--;){var a=e[n],t=a.vm;t&&t._watcher===a&&t._isMounted&&!t._isDestroyed&&Zn(t,"updated")}}function qm(e){e._inactive=!1,gc.push(e)}function Hm(e){for(var n=0;n<e.length;n++)e[n]._inactive=!0,mc(e[n],!0)}function Wm(e){var n=e.id;if(Wi[n]==null&&!(e===za.target&&e.noRecurse)){if(Wi[n]=!0,!jc)ga.push(e);else{for(var a=ga.length-1;a>Ct&&ga[a].id>e.id;)a--;ga.splice(a+1,0,e)}jo||(jo=!0,pc(zm))}}function Gm(e){var n=e.$options.provide;if(n){var a=Ne(n)?n.call(e):n;if(!fn(a))return;for(var t=Qh(e),r=Wr?Reflect.ownKeys(a):Object.keys(a),i=0;i<r.length;i++){var s=r[i];Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))}}}function Vm(e){var n=Hv(e.$options.inject,e);n&&($a(!1),Object.keys(n).forEach(function(a){ct(e,a,n[a])}),$a(!0))}function Hv(e,n){if(e){for(var a=Object.create(null),t=Wr?Reflect.ownKeys(e):Object.keys(e),r=0;r<t.length;r++){var i=t[r];if(i!=="__ob__"){var s=e[i].from;if(s in n._provided)a[i]=n._provided[s];else if("default"in e[i]){var o=e[i].default;a[i]=Ne(o)?o.call(n):o}}}return a}}function xc(e,n,a,t,r){var i=this,s=r.options,o;yn(t,"_uid")?(o=Object.create(t),o._original=t):(o=t,t=t._original);var c=Be(s._compiled),l=!c;this.data=e,this.props=n,this.children=a,this.parent=t,this.listeners=e.on||Cn,this.injections=Hv(s.inject,t),this.slots=function(){return i.$slots||pr(t,e.scopedSlots,i.$slots=fc(a,t)),i.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return pr(t,e.scopedSlots,this.slots())}}),c&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=pr(t,e.scopedSlots,this.$slots)),s._scopeId?this._c=function(d,u,f,v){var h=qi(o,d,u,f,v,l);return h&&!be(h)&&(h.fnScopeId=s._scopeId,h.fnContext=t),h}:this._c=function(d,u,f,v){return qi(o,d,u,f,v,l)}}Dv(xc.prototype);function Xm(e,n,a,t,r){var i=e.options,s={},o=i.props;if(V(o))for(var c in o)s[c]=bc(c,o,n||Cn);else V(a.attrs)&&ql(s,a.attrs),V(a.props)&&ql(s,a.props);var l=new xc(a,s,r,t,e),d=i.render.call(null,l._c,l);if(d instanceof Rn)return $l(d,a,l.parent,i);if(be(d)){for(var u=vc(d)||[],f=new Array(u.length),v=0;v<u.length;v++)f[v]=$l(u[v],a,l.parent,i);return f}}function $l(e,n,a,t,r){var i=vo(e);return i.fnContext=a,i.fnOptions=t,n.slot&&((i.data||(i.data={})).slot=n.slot),i}function ql(e,n){for(var a in n)e[st(a)]=n[a]}function Gi(e){return e.name||e.__name||e._componentTag}var yc={init:function(e,n){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;yc.prepatch(a,a)}else{var t=e.componentInstance=Km(e,nt);t.$mount(n?e.elm:void 0,n)}},prepatch:function(e,n){var a=n.componentOptions,t=n.componentInstance=e.componentInstance;Mm(t,a.propsData,a.listeners,n,a.children)},insert:function(e){var n=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Zn(a,"mounted")),e.data.keepAlive&&(n._isMounted?qm(a):mc(a,!0))},destroy:function(e){var n=e.componentInstance;n._isDestroyed||(e.data.keepAlive?$v(n,!0):n.$destroy())}},Hl=Object.keys(yc);function Wl(e,n,a,t,r){if(!he(e)){var i=a.$options._base;if(fn(e)&&(e=i.extend(e)),typeof e=="function"){var s;if(he(e.cid)&&(s=e,e=wm(s,i),e===void 0))return bm(s,n,a,t,r);n=n||{},_c(e),V(n.model)&&Zm(e.options,n);var o=em(n,e);if(Be(e.options.functional))return Xm(e,o,n,a,t);var c=n.on;if(n.on=n.nativeOn,Be(e.options.abstract)){var l=n.slot;n={},l&&(n.slot=l)}Ym(n);var d=Gi(e.options)||r,u=new Rn("vue-component-".concat(e.cid).concat(d?"-".concat(d):""),n,void 0,void 0,void 0,a,{Ctor:e,propsData:o,listeners:c,tag:r,children:t},s);return u}}}function Km(e,n){var a={_isComponent:!0,_parentVnode:e,parent:n},t=e.data.inlineTemplate;return V(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Ym(e){for(var n=e.hook||(e.hook={}),a=0;a<Hl.length;a++){var t=Hl[a],r=n[t],i=yc[t];r!==i&&!(r&&r._merged)&&(n[t]=r?Jm(i,r):i)}}function Jm(e,n){var a=function(t,r){e(t,r),n(t,r)};return a._merged=!0,a}function Zm(e,n){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(n.attrs||(n.attrs={}))[a]=n.model.value;var r=n.on||(n.on={}),i=r[t],s=n.model.callback;V(i)?(be(i)?i.indexOf(s)===-1:i!==s)&&(r[t]=[s].concat(i)):r[t]=s}var Qm=nn,ca=Un.optionMergeStrategies;function Cr(e,n,a){if(a===void 0&&(a=!0),!n)return e;for(var t,r,i,s=Wr?Reflect.ownKeys(n):Object.keys(n),o=0;o<s.length;o++)t=s[o],t!=="__ob__"&&(r=e[t],i=n[t],!a||!yn(e,t)?dc(e,t,i):r!==i&&On(r)&&On(i)&&Cr(r,i));return e}function Gl(e,n,a){return a?function(){var r=Ne(n)?n.call(a,a):n,i=Ne(e)?e.call(a,a):e;return r?Cr(r,i):i}:n?e?function(){return Cr(Ne(n)?n.call(this,this):n,Ne(e)?e.call(this,this):e)}:n:e}ca.data=function(e,n,a){return a?Gl(e,n,a):n&&typeof n!="function"?e:Gl(e,n)};function eg(e,n){var a=n?e?e.concat(n):be(n)?n:[n]:e;return a&&ng(a)}function ng(e){for(var n=[],a=0;a<e.length;a++)n.indexOf(e[a])===-1&&n.push(e[a]);return n}bv.forEach(function(e){ca[e]=eg});function ag(e,n,a,t){var r=Object.create(e||null);return n?Re(r,n):r}xs.forEach(function(e){ca[e+"s"]=ag});ca.watch=function(e,n,a,t){if(e===uo&&(e=void 0),n===uo&&(n=void 0),!n)return Object.create(e||null);if(!e)return n;var r={};Re(r,e);for(var i in n){var s=r[i],o=n[i];s&&!be(s)&&(s=[s]),r[i]=s?s.concat(o):be(o)?o:[o]}return r};ca.props=ca.methods=ca.inject=ca.computed=function(e,n,a,t){if(!e)return n;var r=Object.create(null);return Re(r,e),n&&Re(r,n),r};ca.provide=function(e,n){return e?function(){var a=Object.create(null);return Cr(a,Ne(e)?e.call(this):e),n&&Cr(a,Ne(n)?n.call(this):n,!1),a}:n};var tg=function(e,n){return n===void 0?e:n};function rg(e,n){var a=e.props;if(a){var t={},r,i,s;if(be(a))for(r=a.length;r--;)i=a[r],typeof i=="string"&&(s=st(i),t[s]={type:null});else if(On(a))for(var o in a)i=a[o],s=st(o),t[s]=On(i)?i:{type:i};e.props=t}}function ig(e,n){var a=e.inject;if(a){var t=e.inject={};if(be(a))for(var r=0;r<a.length;r++)t[a[r]]={from:a[r]};else if(On(a))for(var i in a){var s=a[i];t[i]=On(s)?Re({from:i},s):{from:s}}}}function sg(e){var n=e.directives;if(n)for(var a in n){var t=n[a];Ne(t)&&(n[a]={bind:t,update:t})}}function dt(e,n,a){if(Ne(n)&&(n=n.options),rg(n),ig(n),sg(n),!n._base&&(n.extends&&(e=dt(e,n.extends,a)),n.mixins))for(var t=0,r=n.mixins.length;t<r;t++)e=dt(e,n.mixins[t],a);var i={},s;for(s in e)o(s);for(s in n)yn(e,s)||o(s);function o(c){var l=ca[c]||tg;i[c]=l(e[c],n[c],a,c)}return i}function Vi(e,n,a,t){if(typeof a=="string"){var r=e[n];if(yn(r,a))return r[a];var i=st(a);if(yn(r,i))return r[i];var s=Ph(i);if(yn(r,s))return r[s];var o=r[a]||r[i]||r[s];return o}}function bc(e,n,a,t){var r=n[e],i=!yn(a,e),s=a[e],o=Xl(Boolean,r.type);if(o>-1){if(i&&!yn(r,"default"))s=!1;else if(s===""||s===qr(e)){var c=Xl(String,r.type);(c<0||o<c)&&(s=!0)}}if(s===void 0){s=og(t,r,e);var l=lc;$a(!0),wa(s),$a(l)}return s}function og(e,n,a){if(yn(n,"default")){var t=n.default;return e&&e.$options.propsData&&e.$options.propsData[a]===void 0&&e._props[a]!==void 0?e._props[a]:Ne(t)&&yo(n.type)!=="Function"?t.call(e):t}}var cg=/^\s*function (\w+)/;function yo(e){var n=e&&e.toString().match(cg);return n?n[1]:""}function Vl(e,n){return yo(e)===yo(n)}function Xl(e,n){if(!be(n))return Vl(n,e)?0:-1;for(var a=0,t=n.length;a<t;a++)if(Vl(n[a],e))return a;return-1}var Ca={enumerable:!0,configurable:!0,get:nn,set:nn};function wc(e,n,a){Ca.get=function(){return this[n][a]},Ca.set=function(r){this[n][a]=r},Object.defineProperty(e,a,Ca)}function lg(e){var n=e.$options;if(n.props&&dg(e,n.props),hm(e),n.methods&&hg(e,n.methods),n.data)ug(e);else{var a=wa(e._data={});a&&a.vmCount++}n.computed&&pg(e,n.computed),n.watch&&n.watch!==uo&&mg(e,n.watch)}function dg(e,n){var a=e.$options.propsData||{},t=e._props=Cv({}),r=e.$options._propKeys=[],i=!e.$parent;i||$a(!1);var s=function(c){r.push(c);var l=bc(c,n,a,e);ct(t,c,l,void 0,!0),c in e||wc(e,"_props",c)};for(var o in n)s(o);$a(!0)}function ug(e){var n=e.$options.data;n=e._data=Ne(n)?vg(n,e):n||{},On(n)||(n={});var a=Object.keys(n),t=e.$options.props;e.$options.methods;for(var r=a.length;r--;){var i=a[r];t&&yn(t,i)||wv(i)||wc(e,"_data",i)}var s=wa(n);s&&s.vmCount++}function vg(e,n){$t();try{return e.call(n,n)}catch(a){return lt(a,n,"data()"),{}}finally{qt()}}var fg={lazy:!0};function pg(e,n){var a=e._computedWatchers=Object.create(null),t=Hr();for(var r in n){var i=n[r],s=Ne(i)?i:i.get;t||(a[r]=new hc(e,s||nn,nn,fg)),r in e||Wv(e,r,i)}}function Wv(e,n,a){var t=!Hr();Ne(a)?(Ca.get=t?Kl(n):Yl(a),Ca.set=nn):(Ca.get=a.get?t&&a.cache!==!1?Kl(n):Yl(a.get):nn,Ca.set=a.set||nn),Object.defineProperty(e,n,Ca)}function Kl(e){return function(){var a=this._computedWatchers&&this._computedWatchers[e];if(a)return a.dirty&&a.evaluate(),za.target&&a.depend(),a.value}}function Yl(e){return function(){return e.call(this,this)}}function hg(e,n){e.$options.props;for(var a in n)e[a]=typeof n[a]!="function"?nn:gv(n[a],e)}function mg(e,n){for(var a in n){var t=n[a];if(be(t))for(var r=0;r<t.length;r++)bo(e,a,t[r]);else bo(e,a,t)}}function bo(e,n,a,t){return On(a)&&(t=a,a=a.handler),typeof a=="string"&&(a=e[a]),e.$watch(n,a,t)}function gg(e){var n={};n.get=function(){return this._data};var a={};a.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",n),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=dc,e.prototype.$delete=Av,e.prototype.$watch=function(t,r,i){var s=this;if(On(r))return bo(s,t,r,i);i=i||{},i.user=!0;var o=new hc(s,t,r,i);if(i.immediate){var c='callback for immediate watcher "'.concat(o.expression,'"');$t(),qa(r,s,[o.value],s,c),qt()}return function(){o.teardown()}}}var jg=0;function xg(e){e.prototype._init=function(n){var a=this;a._uid=jg++,a._isVue=!0,a.__v_skip=!0,a._scope=new Yh(!0),a._scope.parent=void 0,a._scope._vm=!0,n&&n._isComponent?yg(a,n):a.$options=dt(_c(a.constructor),n||{},a),a._renderProxy=a,a._self=a,Pm(a),Fm(a),xm(a),Zn(a,"beforeCreate",void 0,!1),Vm(a),lg(a),Gm(a),Zn(a,"created"),a.$options.el&&a.$mount(a.$options.el)}}function yg(e,n){var a=e.$options=Object.create(e.constructor.options),t=n._parentVnode;a.parent=n.parent,a._parentVnode=t;var r=t.componentOptions;a.propsData=r.propsData,a._parentListeners=r.listeners,a._renderChildren=r.children,a._componentTag=r.tag,n.render&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns)}function _c(e){var n=e.options;if(e.super){var a=_c(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var r=bg(e);r&&Re(e.extendOptions,r),n=e.options=dt(a,e.extendOptions),n.name&&(n.components[n.name]=e)}}return n}function bg(e){var n,a=e.options,t=e.sealedOptions;for(var r in a)a[r]!==t[r]&&(n||(n={}),n[r]=a[r]);return n}function Ie(e){this._init(e)}xg(Ie);gg(Ie);Dm(Ie);Nm(Ie);ym(Ie);function wg(e){e.use=function(n){var a=this._installedPlugins||(this._installedPlugins=[]);if(a.indexOf(n)>-1)return this;var t=lo(arguments,1);return t.unshift(this),Ne(n.install)?n.install.apply(n,t):Ne(n)&&n.apply(null,t),a.push(n),this}}function _g(e){e.mixin=function(n){return this.options=dt(this.options,n),this}}function kg(e){e.cid=0;var n=1;e.extend=function(a){a=a||{};var t=this,r=t.cid,i=a._Ctor||(a._Ctor={});if(i[r])return i[r];var s=Gi(a)||Gi(t.options),o=function(l){this._init(l)};return o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.cid=n++,o.options=dt(t.options,a),o.super=t,o.options.props&&Eg(o),o.options.computed&&Tg(o),o.extend=t.extend,o.mixin=t.mixin,o.use=t.use,xs.forEach(function(c){o[c]=t[c]}),s&&(o.options.components[s]=o),o.superOptions=t.options,o.extendOptions=a,o.sealedOptions=Re({},o.options),i[r]=o,o}}function Eg(e){var n=e.options.props;for(var a in n)wc(e.prototype,"_props",a)}function Tg(e){var n=e.options.computed;for(var a in n)Wv(e.prototype,a,n[a])}function Ag(e){xs.forEach(function(n){e[n]=function(a,t){return t?(n==="component"&&On(t)&&(t.name=t.name||a,t=this.options._base.extend(t)),n==="directive"&&Ne(t)&&(t={bind:t,update:t}),this.options[n+"s"][a]=t,t):this.options[n+"s"][a]}})}function Jl(e){return e&&(Gi(e.Ctor.options)||e.tag)}function oi(e,n){return be(e)?e.indexOf(n)>-1:typeof e=="string"?e.split(",").indexOf(n)>-1:Ch(e)?e.test(n):!1}function Zl(e,n){var a=e.cache,t=e.keys,r=e._vnode,i=e.$vnode;for(var s in a){var o=a[s];if(o){var c=o.name;c&&!n(c)&&wo(a,s,t,r)}}i.componentOptions.children=void 0}function wo(e,n,a,t){var r=e[n];r&&(!t||r.tag!==t.tag)&&r.componentInstance.$destroy(),e[n]=null,Ga(a,n)}var Ql=[String,RegExp,Array],Sg={name:"keep-alive",abstract:!0,props:{include:Ql,exclude:Ql,max:[String,Number]},methods:{cacheVNode:function(){var e=this,n=e.cache,a=e.keys,t=e.vnodeToCache,r=e.keyToCache;if(t){var i=t.tag,s=t.componentInstance,o=t.componentOptions;n[r]={name:Jl(o),tag:i,componentInstance:s},a.push(r),this.max&&a.length>parseInt(this.max)&&wo(n,a[0],a,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)wo(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(n){Zl(e,function(a){return oi(n,a)})}),this.$watch("exclude",function(n){Zl(e,function(a){return!oi(n,a)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,n=Nv(e),a=n&&n.componentOptions;if(a){var t=Jl(a),r=this,i=r.include,s=r.exclude;if(i&&(!t||!oi(i,t))||s&&t&&oi(s,t))return n;var o=this,c=o.cache,l=o.keys,d=n.key==null?a.Ctor.cid+(a.tag?"::".concat(a.tag):""):n.key;c[d]?(n.componentInstance=c[d].componentInstance,Ga(l,d),l.push(d)):(this.vnodeToCache=n,this.keyToCache=d),n.data.keepAlive=!0}return n||e&&e[0]}},Cg={KeepAlive:Sg};function Fg(e){var n={};n.get=function(){return Un},Object.defineProperty(e,"config",n),e.util={warn:Qm,extend:Re,mergeOptions:dt,defineReactive:ct},e.set=dc,e.delete=Av,e.nextTick=pc,e.observable=function(a){return wa(a),a},e.options=Object.create(null),xs.forEach(function(a){e.options[a+"s"]=Object.create(null)}),e.options._base=e,Re(e.options.components,Cg),wg(e),_g(e),kg(e),Ag(e)}Fg(Ie);Object.defineProperty(Ie.prototype,"$isServer",{get:Hr});Object.defineProperty(Ie.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(Ie,"FunctionalRenderContext",{value:xc});Ie.version=Sm;var Og=na("style,class"),Rg=na("input,textarea,option,select,progress"),Ig=function(e,n,a){return a==="value"&&Rg(e)&&n!=="button"||a==="selected"&&e==="option"||a==="checked"&&e==="input"||a==="muted"&&e==="video"},Gv=na("contenteditable,draggable,spellcheck"),Dg=na("events,caret,typing,plaintext-only"),Pg=function(e,n){return Xi(n)||n==="false"?"false":e==="contenteditable"&&Dg(n)?n:"true"},Ng=na("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),_o="http://www.w3.org/1999/xlink",kc=function(e){return e.charAt(5)===":"&&e.slice(0,5)==="xlink"},Vv=function(e){return kc(e)?e.slice(6,e.length):""},Xi=function(e){return e==null||e===!1};function Lg(e){for(var n=e.data,a=e,t=e;V(t.componentInstance);)t=t.componentInstance._vnode,t&&t.data&&(n=ed(t.data,n));for(;V(a=a.parent);)a&&a.data&&(n=ed(n,a.data));return Mg(n.staticClass,n.class)}function ed(e,n){return{staticClass:Ec(e.staticClass,n.staticClass),class:V(e.class)?[e.class,n.class]:n.class}}function Mg(e,n){return V(e)||V(n)?Ec(e,Tc(n)):""}function Ec(e,n){return e?n?e+" "+n:e:n||""}function Tc(e){return Array.isArray(e)?Bg(e):fn(e)?Ug(e):typeof e=="string"?e:""}function Bg(e){for(var n="",a,t=0,r=e.length;t<r;t++)V(a=Tc(e[t]))&&a!==""&&(n&&(n+=" "),n+=a);return n}function Ug(e){var n="";for(var a in e)e[a]&&(n&&(n+=" "),n+=a);return n}var zg={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},$g=na("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ac=na("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Xv=function(e){return $g(e)||Ac(e)};function qg(e){if(Ac(e))return"svg";if(e==="math")return"math"}var ci=Object.create(null);function Hg(e){if(!Dn)return!0;if(Xv(e))return!1;if(e=e.toLowerCase(),ci[e]!=null)return ci[e];var n=document.createElement(e);return e.indexOf("-")>-1?ci[e]=n.constructor===window.HTMLUnknownElement||n.constructor===window.HTMLElement:ci[e]=/HTMLUnknownElement/.test(n.toString())}var ko=na("text,number,password,search,email,tel,url");function Wg(e){if(typeof e=="string"){var n=document.querySelector(e);return n||document.createElement("div")}else return e}function Gg(e,n){var a=document.createElement(e);return e!=="select"||n.data&&n.data.attrs&&n.data.attrs.multiple!==void 0&&a.setAttribute("multiple","multiple"),a}function Vg(e,n){return document.createElementNS(zg[e],n)}function Xg(e){return document.createTextNode(e)}function Kg(e){return document.createComment(e)}function Yg(e,n,a){e.insertBefore(n,a)}function Jg(e,n){e.removeChild(n)}function Zg(e,n){e.appendChild(n)}function Qg(e){return e.parentNode}function ej(e){return e.nextSibling}function nj(e){return e.tagName}function aj(e,n){e.textContent=n}function tj(e,n){e.setAttribute(n,"")}var rj=Object.freeze({__proto__:null,createElement:Gg,createElementNS:Vg,createTextNode:Xg,createComment:Kg,insertBefore:Yg,removeChild:Jg,appendChild:Zg,parentNode:Qg,nextSibling:ej,tagName:nj,setTextContent:aj,setStyleScope:tj}),ij={create:function(e,n){Ft(n)},update:function(e,n){e.data.ref!==n.data.ref&&(Ft(e,!0),Ft(n))},destroy:function(e){Ft(e,!0)}};function Ft(e,n){var a=e.data.ref;if(V(a)){var t=e.context,r=e.componentInstance||e.elm,i=n?null:r,s=n?void 0:r;if(Ne(a)){qa(a,t,[i],t,"template ref function");return}var o=e.data.refInFor,c=typeof a=="string"||typeof a=="number",l=la(a),d=t.$refs;if(c||l){if(o){var u=c?d[a]:a.value;n?be(u)&&Ga(u,r):be(u)?u.includes(r)||u.push(r):c?(d[a]=[r],nd(t,a,d[a])):a.value=[r]}else if(c){if(n&&d[a]!==r)return;d[a]=s,nd(t,a,i)}else if(l){if(n&&a.value!==r)return;a.value=i}}}}function nd(e,n,a){var t=e._setupState;t&&yn(t,n)&&(la(t[n])?t[n].value=a:t[n]=a)}var Ra=new Rn("",{},[]),ar=["create","activate","update","remove","destroy"];function Ja(e,n){return e.key===n.key&&e.asyncFactory===n.asyncFactory&&(e.tag===n.tag&&e.isComment===n.isComment&&V(e.data)===V(n.data)&&sj(e,n)||Be(e.isAsyncPlaceholder)&&he(n.asyncFactory.error))}function sj(e,n){if(e.tag!=="input")return!0;var a,t=V(a=e.data)&&V(a=a.attrs)&&a.type,r=V(a=n.data)&&V(a=a.attrs)&&a.type;return t===r||ko(t)&&ko(r)}function oj(e,n,a){var t,r,i={};for(t=n;t<=a;++t)r=e[t].key,V(r)&&(i[r]=t);return i}function cj(e){var n,a,t={},r=e.modules,i=e.nodeOps;for(n=0;n<ar.length;++n)for(t[ar[n]]=[],a=0;a<r.length;++a)V(r[a][ar[n]])&&t[ar[n]].push(r[a][ar[n]]);function s(x){return new Rn(i.tagName(x).toLowerCase(),{},[],void 0,x)}function o(x,C){function U(){--U.listeners===0&&c(x)}return U.listeners=C,U}function c(x){var C=i.parentNode(x);V(C)&&i.removeChild(C,x)}function l(x,C,U,K,Q,ee,ve){if(V(x.elm)&&V(ee)&&(x=ee[ve]=vo(x)),x.isRootInsert=!Q,!d(x,C,U,K)){var L=x.data,ie=x.children,ce=x.tag;V(ce)?(x.elm=x.ns?i.createElementNS(x.ns,ce):i.createElement(ce,x),y(x),h(x,ie,C),V(L)&&m(x,C),v(U,x.elm,K)):Be(x.isComment)?(x.elm=i.createComment(x.text),v(U,x.elm,K)):(x.elm=i.createTextNode(x.text),v(U,x.elm,K))}}function d(x,C,U,K){var Q=x.data;if(V(Q)){var ee=V(x.componentInstance)&&Q.keepAlive;if(V(Q=Q.hook)&&V(Q=Q.init)&&Q(x,!1),V(x.componentInstance))return u(x,C),v(U,x.elm,K),Be(ee)&&f(x,C,U,K),!0}}function u(x,C){V(x.data.pendingInsert)&&(C.push.apply(C,x.data.pendingInsert),x.data.pendingInsert=null),x.elm=x.componentInstance.$el,p(x)?(m(x,C),y(x)):(Ft(x),C.push(x))}function f(x,C,U,K){for(var Q,ee=x;ee.componentInstance;)if(ee=ee.componentInstance._vnode,V(Q=ee.data)&&V(Q=Q.transition)){for(Q=0;Q<t.activate.length;++Q)t.activate[Q](Ra,ee);C.push(ee);break}v(U,x.elm,K)}function v(x,C,U){V(x)&&(V(U)?i.parentNode(U)===x&&i.insertBefore(x,C,U):i.appendChild(x,C))}function h(x,C,U){if(be(C))for(var K=0;K<C.length;++K)l(C[K],U,x.elm,null,!0,C,K);else $r(x.text)&&i.appendChild(x.elm,i.createTextNode(String(x.text)))}function p(x){for(;x.componentInstance;)x=x.componentInstance._vnode;return V(x.tag)}function m(x,C){for(var U=0;U<t.create.length;++U)t.create[U](Ra,x);n=x.data.hook,V(n)&&(V(n.create)&&n.create(Ra,x),V(n.insert)&&C.push(x))}function y(x){var C;if(V(C=x.fnScopeId))i.setStyleScope(x.elm,C);else for(var U=x;U;)V(C=U.context)&&V(C=C.$options._scopeId)&&i.setStyleScope(x.elm,C),U=U.parent;V(C=nt)&&C!==x.context&&C!==x.fnContext&&V(C=C.$options._scopeId)&&i.setStyleScope(x.elm,C)}function T(x,C,U,K,Q,ee){for(;K<=Q;++K)l(U[K],ee,x,C,!1,U,K)}function j(x){var C,U,K=x.data;if(V(K))for(V(C=K.hook)&&V(C=C.destroy)&&C(x),C=0;C<t.destroy.length;++C)t.destroy[C](x);if(V(C=x.children))for(U=0;U<x.children.length;++U)j(x.children[U])}function R(x,C,U){for(;C<=U;++C){var K=x[C];V(K)&&(V(K.tag)?(N(K),j(K)):c(K.elm))}}function N(x,C){if(V(C)||V(x.data)){var U,K=t.remove.length+1;for(V(C)?C.listeners+=K:C=o(x.elm,K),V(U=x.componentInstance)&&V(U=U._vnode)&&V(U.data)&&N(U,C),U=0;U<t.remove.length;++U)t.remove[U](x,C);V(U=x.data.hook)&&V(U=U.remove)?U(x,C):C()}else c(x.elm)}function F(x,C,U,K,Q){for(var ee=0,ve=0,L=C.length-1,ie=C[0],ce=C[L],k=U.length-1,B=U[0],P=U[k],D,Z,re,le,se=!Q;ee<=L&&ve<=k;)he(ie)?ie=C[++ee]:he(ce)?ce=C[--L]:Ja(ie,B)?(M(ie,B,K,U,ve),ie=C[++ee],B=U[++ve]):Ja(ce,P)?(M(ce,P,K,U,k),ce=C[--L],P=U[--k]):Ja(ie,P)?(M(ie,P,K,U,k),se&&i.insertBefore(x,ie.elm,i.nextSibling(ce.elm)),ie=C[++ee],P=U[--k]):Ja(ce,B)?(M(ce,B,K,U,ve),se&&i.insertBefore(x,ce.elm,ie.elm),ce=C[--L],B=U[++ve]):(he(D)&&(D=oj(C,ee,L)),Z=V(B.key)?D[B.key]:_(B,C,ee,L),he(Z)?l(B,K,x,ie.elm,!1,U,ve):(re=C[Z],Ja(re,B)?(M(re,B,K,U,ve),C[Z]=void 0,se&&i.insertBefore(x,re.elm,ie.elm)):l(B,K,x,ie.elm,!1,U,ve)),B=U[++ve]);ee>L?(le=he(U[k+1])?null:U[k+1].elm,T(x,le,U,ve,k,K)):ve>k&&R(C,ee,L)}function _(x,C,U,K){for(var Q=U;Q<K;Q++){var ee=C[Q];if(V(ee)&&Ja(x,ee))return Q}}function M(x,C,U,K,Q,ee){if(x!==C){V(C.elm)&&V(K)&&(C=K[Q]=vo(C));var ve=C.elm=x.elm;if(Be(x.isAsyncPlaceholder)){V(C.asyncFactory.resolved)?W(x.elm,C,U):C.isAsyncPlaceholder=!0;return}if(Be(C.isStatic)&&Be(x.isStatic)&&C.key===x.key&&(Be(C.isCloned)||Be(C.isOnce))){C.componentInstance=x.componentInstance;return}var L,ie=C.data;V(ie)&&V(L=ie.hook)&&V(L=L.prepatch)&&L(x,C);var ce=x.children,k=C.children;if(V(ie)&&p(C)){for(L=0;L<t.update.length;++L)t.update[L](x,C);V(L=ie.hook)&&V(L=L.update)&&L(x,C)}he(C.text)?V(ce)&&V(k)?ce!==k&&F(ve,ce,k,U,ee):V(k)?(V(x.text)&&i.setTextContent(ve,""),T(ve,null,k,0,k.length-1,U)):V(ce)?R(ce,0,ce.length-1):V(x.text)&&i.setTextContent(ve,""):x.text!==C.text&&i.setTextContent(ve,C.text),V(ie)&&V(L=ie.hook)&&V(L=L.postpatch)&&L(x,C)}}function I(x,C,U){if(Be(U)&&V(x.parent))x.parent.data.pendingInsert=C;else for(var K=0;K<C.length;++K)C[K].data.hook.insert(C[K])}var X=na("attrs,class,staticClass,staticStyle,key");function W(x,C,U,K){var Q,ee=C.tag,ve=C.data,L=C.children;if(K=K||ve&&ve.pre,C.elm=x,Be(C.isComment)&&V(C.asyncFactory))return C.isAsyncPlaceholder=!0,!0;if(V(ve)&&(V(Q=ve.hook)&&V(Q=Q.init)&&Q(C,!0),V(Q=C.componentInstance)))return u(C,U),!0;if(V(ee)){if(V(L))if(!x.hasChildNodes())h(C,L,U);else if(V(Q=ve)&&V(Q=Q.domProps)&&V(Q=Q.innerHTML)){if(Q!==x.innerHTML)return!1}else{for(var ie=!0,ce=x.firstChild,k=0;k<L.length;k++){if(!ce||!W(ce,L[k],U,K)){ie=!1;break}ce=ce.nextSibling}if(!ie||ce)return!1}if(V(ve)){var B=!1;for(var P in ve)if(!X(P)){B=!0,m(C,U);break}!B&&ve.class&&Hi(ve.class)}}else x.data!==C.text&&(x.data=C.text);return!0}return function(C,U,K,Q){if(he(U)){V(C)&&j(C);return}var ee=!1,ve=[];if(he(C))ee=!0,l(U,ve);else{var L=V(C.nodeType);if(!L&&Ja(C,U))M(C,U,ve,null,null,Q);else{if(L){if(C.nodeType===1&&C.hasAttribute(Cl)&&(C.removeAttribute(Cl),K=!0),Be(K)&&W(C,U,ve))return I(U,ve,!0),C;C=s(C)}var ie=C.elm,ce=i.parentNode(ie);if(l(U,ve,ie._leaveCb?null:ce,i.nextSibling(ie)),V(U.parent))for(var k=U.parent,B=p(U);k;){for(var P=0;P<t.destroy.length;++P)t.destroy[P](k);if(k.elm=U.elm,B){for(var D=0;D<t.create.length;++D)t.create[D](Ra,k);var Z=k.data.hook.insert;if(Z.merged)for(var re=Z.fns.slice(1),le=0;le<re.length;le++)re[le]()}else Ft(k);k=k.parent}V(ce)?R([C],0,0):V(C.tag)&&j(C)}}return I(U,ve,ee),U.elm}}var lj={create:Bs,update:Bs,destroy:function(n){Bs(n,Ra)}};function Bs(e,n){(e.data.directives||n.data.directives)&&dj(e,n)}function dj(e,n){var a=e===Ra,t=n===Ra,r=ad(e.data.directives,e.context),i=ad(n.data.directives,n.context),s=[],o=[],c,l,d;for(c in i)l=r[c],d=i[c],l?(d.oldValue=l.value,d.oldArg=l.arg,tr(d,"update",n,e),d.def&&d.def.componentUpdated&&o.push(d)):(tr(d,"bind",n,e),d.def&&d.def.inserted&&s.push(d));if(s.length){var u=function(){for(var f=0;f<s.length;f++)tr(s[f],"inserted",n,e)};a?Oa(n,"insert",u):u()}if(o.length&&Oa(n,"postpatch",function(){for(var f=0;f<o.length;f++)tr(o[f],"componentUpdated",n,e)}),!a)for(c in r)i[c]||tr(r[c],"unbind",e,e,t)}var uj=Object.create(null);function ad(e,n){var a=Object.create(null);if(!e)return a;var t,r;for(t=0;t<e.length;t++){if(r=e[t],r.modifiers||(r.modifiers=uj),a[vj(r)]=r,n._setupState&&n._setupState.__sfc){var i=r.def||Vi(n,"_setupState","v-"+r.name);typeof i=="function"?r.def={bind:i,update:i}:r.def=i}r.def=r.def||Vi(n.$options,"directives",r.name)}return a}function vj(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function tr(e,n,a,t,r){var i=e.def&&e.def[n];if(i)try{i(a.elm,e,a,t,r)}catch(s){lt(s,a.context,"directive ".concat(e.name," ").concat(n," hook"))}}var fj=[ij,lj];function td(e,n){var a=n.componentOptions;if(!(V(a)&&a.Ctor.options.inheritAttrs===!1)&&!(he(e.data.attrs)&&he(n.data.attrs))){var t,r,i,s=n.elm,o=e.data.attrs||{},c=n.data.attrs||{};(V(c.__ob__)||Be(c._v_attr_proxy))&&(c=n.data.attrs=Re({},c));for(t in c)r=c[t],i=o[t],i!==r&&rd(s,t,r,n.data.pre);(Ut||_v)&&c.value!==o.value&&rd(s,"value",c.value);for(t in o)he(c[t])&&(kc(t)?s.removeAttributeNS(_o,Vv(t)):Gv(t)||s.removeAttribute(t))}}function rd(e,n,a,t){t||e.tagName.indexOf("-")>-1?id(e,n,a):Ng(n)?Xi(a)?e.removeAttribute(n):(a=n==="allowfullscreen"&&e.tagName==="EMBED"?"true":n,e.setAttribute(n,a)):Gv(n)?e.setAttribute(n,Pg(n,a)):kc(n)?Xi(a)?e.removeAttributeNS(_o,Vv(n)):e.setAttributeNS(_o,n,a):id(e,n,a)}function id(e,n,a){if(Xi(a))e.removeAttribute(n);else{if(Ut&&!zt&&e.tagName==="TEXTAREA"&&n==="placeholder"&&a!==""&&!e.__ieph){var t=function(r){r.stopImmediatePropagation(),e.removeEventListener("input",t)};e.addEventListener("input",t),e.__ieph=!0}e.setAttribute(n,a)}}var pj={create:td,update:td};function sd(e,n){var a=n.elm,t=n.data,r=e.data;if(!(he(t.staticClass)&&he(t.class)&&(he(r)||he(r.staticClass)&&he(r.class)))){var i=Lg(n),s=a._transitionClasses;V(s)&&(i=Ec(i,Tc(s))),i!==a._prevClass&&(a.setAttribute("class",i),a._prevClass=i)}}var hj={create:sd,update:sd},Us="__r",zs="__c";function mj(e){if(V(e[Us])){var n=Ut?"change":"input";e[n]=[].concat(e[Us],e[n]||[]),delete e[Us]}V(e[zs])&&(e.change=[].concat(e[zs],e.change||[]),delete e[zs])}var Fr;function gj(e,n,a){var t=Fr;return function r(){var i=n.apply(null,arguments);i!==null&&Kv(e,r,a,t)}}var jj=ho&&!(Fl&&Number(Fl[1])<=53);function xj(e,n,a,t){if(jj){var r=qv,i=n;n=i._wrapper=function(s){if(s.target===s.currentTarget||s.timeStamp>=r||s.timeStamp<=0||s.target.ownerDocument!==document)return i.apply(this,arguments)}}Fr.addEventListener(e,n,kv?{capture:a,passive:t}:a)}function Kv(e,n,a,t){(t||Fr).removeEventListener(e,n._wrapper||n,a)}function $s(e,n){if(!(he(e.data.on)&&he(n.data.on))){var a=n.data.on||{},t=e.data.on||{};Fr=n.elm||e.elm,mj(a),Fv(a,t,xj,Kv,gj,n.context),Fr=void 0}}var yj={create:$s,update:$s,destroy:function(e){return $s(e,Ra)}},li;function od(e,n){if(!(he(e.data.domProps)&&he(n.data.domProps))){var a,t,r=n.elm,i=e.data.domProps||{},s=n.data.domProps||{};(V(s.__ob__)||Be(s._v_attr_proxy))&&(s=n.data.domProps=Re({},s));for(a in i)a in s||(r[a]="");for(a in s){if(t=s[a],a==="textContent"||a==="innerHTML"){if(n.children&&(n.children.length=0),t===i[a])continue;r.childNodes.length===1&&r.removeChild(r.childNodes[0])}if(a==="value"&&r.tagName!=="PROGRESS"){r._value=t;var o=he(t)?"":String(t);bj(r,o)&&(r.value=o)}else if(a==="innerHTML"&&Ac(r.tagName)&&he(r.innerHTML)){li=li||document.createElement("div"),li.innerHTML="<svg>".concat(t,"</svg>");for(var c=li.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;c.firstChild;)r.appendChild(c.firstChild)}else if(t!==i[a])try{r[a]=t}catch{}}}}function bj(e,n){return!e.composing&&(e.tagName==="OPTION"||wj(e,n)||_j(e,n))}function wj(e,n){var a=!0;try{a=document.activeElement!==e}catch{}return a&&e.value!==n}function _j(e,n){var a=e.value,t=e._vModifiers;if(V(t)){if(t.number)return Er(a)!==Er(n);if(t.trim)return a.trim()!==n.trim()}return a!==n}var kj={create:od,update:od},Ej=mt(function(e){var n={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(r){if(r){var i=r.split(t);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n});function qs(e){var n=Yv(e.style);return e.staticStyle?Re(e.staticStyle,n):n}function Yv(e){return Array.isArray(e)?jv(e):typeof e=="string"?Ej(e):e}function Tj(e,n){for(var a={},t,r=e;r.componentInstance;)r=r.componentInstance._vnode,r&&r.data&&(t=qs(r.data))&&Re(a,t);(t=qs(e.data))&&Re(a,t);for(var i=e;i=i.parent;)i.data&&(t=qs(i.data))&&Re(a,t);return a}var Aj=/^--/,cd=/\s*!important$/,ld=function(e,n,a){if(Aj.test(n))e.style.setProperty(n,a);else if(cd.test(a))e.style.setProperty(qr(n),a.replace(cd,""),"important");else{var t=Sj(n);if(Array.isArray(a))for(var r=0,i=a.length;r<i;r++)e.style[t]=a[r];else e.style[t]=a}},dd=["Webkit","Moz","ms"],di,Sj=mt(function(e){if(di=di||document.createElement("div").style,e=st(e),e!=="filter"&&e in di)return e;for(var n=e.charAt(0).toUpperCase()+e.slice(1),a=0;a<dd.length;a++){var t=dd[a]+n;if(t in di)return t}});function ud(e,n){var a=n.data,t=e.data;if(!(he(a.staticStyle)&&he(a.style)&&he(t.staticStyle)&&he(t.style))){var r,i,s=n.elm,o=t.staticStyle,c=t.normalizedStyle||t.style||{},l=o||c,d=Yv(n.data.style)||{};n.data.normalizedStyle=V(d.__ob__)?Re({},d):d;var u=Tj(n);for(i in l)he(u[i])&&ld(s,i,"");for(i in u)r=u[i],ld(s,i,r??"")}}var Cj={create:ud,update:ud},Jv=/\s+/;function Zv(e,n){if(!(!n||!(n=n.trim())))if(e.classList)n.indexOf(" ")>-1?n.split(Jv).forEach(function(t){return e.classList.add(t)}):e.classList.add(n);else{var a=" ".concat(e.getAttribute("class")||""," ");a.indexOf(" "+n+" ")<0&&e.setAttribute("class",(a+n).trim())}}function Qv(e,n){if(!(!n||!(n=n.trim())))if(e.classList)n.indexOf(" ")>-1?n.split(Jv).forEach(function(r){return e.classList.remove(r)}):e.classList.remove(n),e.classList.length||e.removeAttribute("class");else{for(var a=" ".concat(e.getAttribute("class")||""," "),t=" "+n+" ";a.indexOf(t)>=0;)a=a.replace(t," ");a=a.trim(),a?e.setAttribute("class",a):e.removeAttribute("class")}}function ef(e){if(e){if(typeof e=="object"){var n={};return e.css!==!1&&Re(n,vd(e.name||"v")),Re(n,e),n}else if(typeof e=="string")return vd(e)}}var vd=mt(function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}}),nf=Dn&&!zt,Tt="transition",Hs="animation",Si="transition",Ki="transitionend",Eo="animation",af="animationend";nf&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(Si="WebkitTransition",Ki="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(Eo="WebkitAnimation",af="webkitAnimationEnd"));var fd=Dn?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function tf(e){fd(function(){fd(e)})}function at(e,n){var a=e._transitionClasses||(e._transitionClasses=[]);a.indexOf(n)<0&&(a.push(n),Zv(e,n))}function ja(e,n){e._transitionClasses&&Ga(e._transitionClasses,n),Qv(e,n)}function rf(e,n,a){var t=sf(e,n),r=t.type,i=t.timeout,s=t.propCount;if(!r)return a();var o=r===Tt?Ki:af,c=0,l=function(){e.removeEventListener(o,d),a()},d=function(u){u.target===e&&++c>=s&&l()};setTimeout(function(){c<s&&l()},i+1),e.addEventListener(o,d)}var Fj=/\b(transform|all)(,|$)/;function sf(e,n){var a=window.getComputedStyle(e),t=(a[Si+"Delay"]||"").split(", "),r=(a[Si+"Duration"]||"").split(", "),i=pd(t,r),s=(a[Eo+"Delay"]||"").split(", "),o=(a[Eo+"Duration"]||"").split(", "),c=pd(s,o),l,d=0,u=0;n===Tt?i>0&&(l=Tt,d=i,u=r.length):n===Hs?c>0&&(l=Hs,d=c,u=o.length):(d=Math.max(i,c),l=d>0?i>c?Tt:Hs:null,u=l?l===Tt?r.length:o.length:0);var f=l===Tt&&Fj.test(a[Si+"Property"]);return{type:l,timeout:d,propCount:u,hasTransform:f}}function pd(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max.apply(null,n.map(function(a,t){return hd(a)+hd(e[t])}))}function hd(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function To(e,n){var a=e.elm;V(a._leaveCb)&&(a._leaveCb.cancelled=!0,a._leaveCb());var t=ef(e.data.transition);if(!he(t)&&!(V(a._enterCb)||a.nodeType!==1)){for(var r=t.css,i=t.type,s=t.enterClass,o=t.enterToClass,c=t.enterActiveClass,l=t.appearClass,d=t.appearToClass,u=t.appearActiveClass,f=t.beforeEnter,v=t.enter,h=t.afterEnter,p=t.enterCancelled,m=t.beforeAppear,y=t.appear,T=t.afterAppear,j=t.appearCancelled,R=t.duration,N=nt,F=nt.$vnode;F&&F.parent;)N=F.context,F=F.parent;var _=!N._isMounted||!e.isRootInsert;if(!(_&&!y&&y!=="")){var M=_&&l?l:s,I=_&&u?u:c,X=_&&d?d:o,W=_&&m||f,x=_&&Ne(y)?y:v,C=_&&T||h,U=_&&j||p,K=Er(fn(R)?R.enter:R),Q=r!==!1&&!zt,ee=Sc(x),ve=a._enterCb=Bi(function(){Q&&(ja(a,X),ja(a,I)),ve.cancelled?(Q&&ja(a,M),U&&U(a)):C&&C(a),a._enterCb=null});e.data.show||Oa(e,"insert",function(){var L=a.parentNode,ie=L&&L._pending&&L._pending[e.key];ie&&ie.tag===e.tag&&ie.elm._leaveCb&&ie.elm._leaveCb(),x&&x(a,ve)}),W&&W(a),Q&&(at(a,M),at(a,I),tf(function(){ja(a,M),ve.cancelled||(at(a,X),ee||(cf(K)?setTimeout(ve,K):rf(a,i,ve)))})),e.data.show&&(n&&n(),x&&x(a,ve)),!Q&&!ee&&ve()}}}function of(e,n){var a=e.elm;V(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());var t=ef(e.data.transition);if(he(t)||a.nodeType!==1)return n();if(V(a._leaveCb))return;var r=t.css,i=t.type,s=t.leaveClass,o=t.leaveToClass,c=t.leaveActiveClass,l=t.beforeLeave,d=t.leave,u=t.afterLeave,f=t.leaveCancelled,v=t.delayLeave,h=t.duration,p=r!==!1&&!zt,m=Sc(d),y=Er(fn(h)?h.leave:h),T=a._leaveCb=Bi(function(){a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[e.key]=null),p&&(ja(a,o),ja(a,c)),T.cancelled?(p&&ja(a,s),f&&f(a)):(n(),u&&u(a)),a._leaveCb=null});v?v(j):j();function j(){T.cancelled||(!e.data.show&&a.parentNode&&((a.parentNode._pending||(a.parentNode._pending={}))[e.key]=e),l&&l(a),p&&(at(a,s),at(a,c),tf(function(){ja(a,s),T.cancelled||(at(a,o),m||(cf(y)?setTimeout(T,y):rf(a,i,T)))})),d&&d(a,T),!p&&!m&&T())}}function cf(e){return typeof e=="number"&&!isNaN(e)}function Sc(e){if(he(e))return!1;var n=e.fns;return V(n)?Sc(Array.isArray(n)?n[0]:n):(e._length||e.length)>1}function md(e,n){n.data.show!==!0&&To(n)}var Oj=Dn?{create:md,activate:md,remove:function(e,n){e.data.show!==!0?of(e,n):n()}}:{},Rj=[pj,hj,yj,kj,Cj,Oj],Ij=Rj.concat(fj),Dj=cj({nodeOps:rj,modules:Ij});zt&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Cc(e,"input")});var lf={inserted:function(e,n,a,t){a.tag==="select"?(t.elm&&!t.elm._vOptions?Oa(a,"postpatch",function(){lf.componentUpdated(e,n,a)}):gd(e,n,a.context),e._vOptions=[].map.call(e.options,Yi)):(a.tag==="textarea"||ko(e.type))&&(e._vModifiers=n.modifiers,n.modifiers.lazy||(e.addEventListener("compositionstart",Pj),e.addEventListener("compositionend",yd),e.addEventListener("change",yd),zt&&(e.vmodel=!0)))},componentUpdated:function(e,n,a){if(a.tag==="select"){gd(e,n,a.context);var t=e._vOptions,r=e._vOptions=[].map.call(e.options,Yi);if(r.some(function(s,o){return!ot(s,t[o])})){var i=e.multiple?n.value.some(function(s){return xd(s,r)}):n.value!==n.oldValue&&xd(n.value,r);i&&Cc(e,"change")}}}};function gd(e,n,a){jd(e,n),(Ut||_v)&&setTimeout(function(){jd(e,n)},0)}function jd(e,n,a){var t=n.value,r=e.multiple;if(!(r&&!Array.isArray(t))){for(var i,s,o=0,c=e.options.length;o<c;o++)if(s=e.options[o],r)i=yv(t,Yi(s))>-1,s.selected!==i&&(s.selected=i);else if(ot(Yi(s),t)){e.selectedIndex!==o&&(e.selectedIndex=o);return}r||(e.selectedIndex=-1)}}function xd(e,n){return n.every(function(a){return!ot(a,e)})}function Yi(e){return"_value"in e?e._value:e.value}function Pj(e){e.target.composing=!0}function yd(e){e.target.composing&&(e.target.composing=!1,Cc(e.target,"input"))}function Cc(e,n){var a=document.createEvent("HTMLEvents");a.initEvent(n,!0,!0),e.dispatchEvent(a)}function Ao(e){return e.componentInstance&&(!e.data||!e.data.transition)?Ao(e.componentInstance._vnode):e}var Nj={bind:function(e,n,a){var t=n.value;a=Ao(a);var r=a.data&&a.data.transition,i=e.__vOriginalDisplay=e.style.display==="none"?"":e.style.display;t&&r?(a.data.show=!0,To(a,function(){e.style.display=i})):e.style.display=t?i:"none"},update:function(e,n,a){var t=n.value,r=n.oldValue;if(!t!=!r){a=Ao(a);var i=a.data&&a.data.transition;i?(a.data.show=!0,t?To(a,function(){e.style.display=e.__vOriginalDisplay}):of(a,function(){e.style.display="none"})):e.style.display=t?e.__vOriginalDisplay:"none"}},unbind:function(e,n,a,t,r){r||(e.style.display=e.__vOriginalDisplay)}},Lj={model:lf,show:Nj},df={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function So(e){var n=e&&e.componentOptions;return n&&n.Ctor.options.abstract?So(Nv(n.children)):e}function uf(e){var n={},a=e.$options;for(var t in a.propsData)n[t]=e[t];var r=a._parentListeners;for(var t in r)n[st(t)]=r[t];return n}function bd(e,n){if(/\d-keep-alive$/.test(n.tag))return e("keep-alive",{props:n.componentOptions.propsData})}function Mj(e){for(;e=e.parent;)if(e.data.transition)return!0}function Bj(e,n){return n.key===e.key&&n.tag===e.tag}var Uj=function(e){return e.tag||Ar(e)},zj=function(e){return e.name==="show"},$j={name:"transition",props:df,abstract:!0,render:function(e){var n=this,a=this.$slots.default;if(a&&(a=a.filter(Uj),!!a.length)){var t=this.mode,r=a[0];if(Mj(this.$vnode))return r;var i=So(r);if(!i)return r;if(this._leaving)return bd(e,r);var s="__transition-".concat(this._uid,"-");i.key=i.key==null?i.isComment?s+"comment":s+i.tag:$r(i.key)?String(i.key).indexOf(s)===0?i.key:s+i.key:i.key;var o=(i.data||(i.data={})).transition=uf(this),c=this._vnode,l=So(c);if(i.data.directives&&i.data.directives.some(zj)&&(i.data.show=!0),l&&l.data&&!Bj(i,l)&&!Ar(l)&&!(l.componentInstance&&l.componentInstance._vnode.isComment)){var d=l.data.transition=Re({},o);if(t==="out-in")return this._leaving=!0,Oa(d,"afterLeave",function(){n._leaving=!1,n.$forceUpdate()}),bd(e,r);if(t==="in-out"){if(Ar(i))return c;var u,f=function(){u()};Oa(o,"afterEnter",f),Oa(o,"enterCancelled",f),Oa(d,"delayLeave",function(v){u=v})}}return r}}},vf=Re({tag:String,moveClass:String},df);delete vf.mode;var qj={props:vf,beforeMount:function(){var e=this,n=this._update;this._update=function(a,t){var r=Uv(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,r(),n.call(e,a,t)}},render:function(e){for(var n=this.tag||this.$vnode.data.tag||"span",a=Object.create(null),t=this.prevChildren=this.children,r=this.$slots.default||[],i=this.children=[],s=uf(this),o=0;o<r.length;o++){var c=r[o];c.tag&&c.key!=null&&String(c.key).indexOf("__vlist")!==0&&(i.push(c),a[c.key]=c,(c.data||(c.data={})).transition=s)}if(t){for(var l=[],d=[],o=0;o<t.length;o++){var c=t[o];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),a[c.key]?l.push(c):d.push(c)}this.kept=e(n,null,l),this.removed=d}return e(n,null,i)},updated:function(){var e=this.prevChildren,n=this.moveClass||(this.name||"v")+"-move";!e.length||!this.hasMove(e[0].elm,n)||(e.forEach(Hj),e.forEach(Wj),e.forEach(Gj),this._reflow=document.body.offsetHeight,e.forEach(function(a){if(a.data.moved){var t=a.elm,r=t.style;at(t,n),r.transform=r.WebkitTransform=r.transitionDuration="",t.addEventListener(Ki,t._moveCb=function i(s){s&&s.target!==t||(!s||/transform$/.test(s.propertyName))&&(t.removeEventListener(Ki,i),t._moveCb=null,ja(t,n))})}}))},methods:{hasMove:function(e,n){if(!nf)return!1;if(this._hasMove)return this._hasMove;var a=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(r){Qv(a,r)}),Zv(a,n),a.style.display="none",this.$el.appendChild(a);var t=sf(a);return this.$el.removeChild(a),this._hasMove=t.hasTransform}}};function Hj(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Wj(e){e.data.newPos=e.elm.getBoundingClientRect()}function Gj(e){var n=e.data.pos,a=e.data.newPos,t=n.left-a.left,r=n.top-a.top;if(t||r){e.data.moved=!0;var i=e.elm.style;i.transform=i.WebkitTransform="translate(".concat(t,"px,").concat(r,"px)"),i.transitionDuration="0s"}}var Vj={Transition:$j,TransitionGroup:qj};Ie.config.mustUseProp=Ig;Ie.config.isReservedTag=Xv;Ie.config.isReservedAttr=Og;Ie.config.getTagNamespace=qg;Ie.config.isUnknownElement=Hg;Re(Ie.options.directives,Lj);Re(Ie.options.components,Vj);Ie.prototype.__patch__=Dn?Dj:nn;Ie.prototype.$mount=function(e,n){return e=e&&Dn?Wg(e):void 0,Lm(this,e,n)};Dn&&setTimeout(function(){Un.devtools&&Ui&&Ui.emit("init",Ie)},0);const Xj=`access	v. 获取 n. 接近，入口
project	n. 工程；课题、作业
intention	n. 打算，意图
equivalence	n. 等值，相等
negotiate	v. 谈判，协商，交涉
disappointing	adj. 令人失望的
alternative	n. 代替品
generous	adj. 慷慨的
biological	adj. 生物的
strategy	n. 策略，战略
paradox	n. 悖论；自相矛盾
primary	adj. 主要的，基本的
standpoint	n. 立场
grab	v. 抢先，抢占，抢夺
crucial	adj. 至关重要的
flaw	n. 缺点；错误
depressed	adj. 萧条的；沮丧的
obstacle	n. 阻碍
automatic	adj. 自动的
passionate	adj. 热情的
gambling	n. 赌博
logic	n. 逻辑
theory	n. 理论
download	v. 下载
signal	n. 信号 v. 发信号，打信号；示意
authoritative	adj. 权威的
smooth	adj. 光滑的
institution	n. 社会公共机构；制度；设立，制定
vehicle	n. 车辆
plague	v. 使困扰
psychological	adj. 心理上的
shade	n. 阴凉处
persistent	adj. 持续的；坚持的
voluntary	adj. 自愿的，主动的
tolerance	n. 宽容，容忍
senior	n. 老年人
individual	n. 个人
contemporary	adj. 当代的，现代的
opposite	adj. 相反的
specialize	v. 专业从事
content	n. 内容
philosopher	n. 哲学家
unrest	n. 不安定，动荡
startle	v. 吃惊
emission	n. 排放，辐射
overweight	adj. 超重的
occupation	n. 职业，工作
mainstream	n. 主流
scholarship	n. 奖学金
contract	n. 合同
cheek	n. 脸颊
interdependence	n. 相互依靠
import	n. 进口 v. 进口
fiction	n. 小说，虚构的文学作品
upbringing	n. 养育，培养，教养
preserve	v. 保护
vitally	adv. 极其重要地
masculine	adj. 男性的
advocate	v. 倡导 n. 提倡者，拥护者，鼓吹者
dust	n. 灰尘
track	n. 足迹 v. 追踪，〔循着踪迹、气味等〕找寻
confidence	n. 信心
riotous	adj. 狂暴的
sophisticated	adj. 复杂的；世故的
similar	adj. 相似的
transform	v. 改变
approve	v. 赞成，同意
session	n. 开会，会议
awareness	n. 意识
exhaust	v. 使筋疲力尽
subsidize	v. 提供补贴
grocery	n. 杂货店
ignorance	n. 无知，愚昧
intelligence	n. 智力，智慧，理解力
tiny	adj. 微小的
praise	v. 赞扬，赞美
memorize	v. 熟记，牢记
relative	adj. 相对的 n. 亲戚
breakthrough	n. 突破
incidence	n. 几率，发生率
scratch	n. 抓，划痕
harmful	adj. 有害的
undergo	v. 承受
recession	n. 衰退
extraordinary	adj. 非凡的
improper	adj. 不合适的，不适当的
marginalize	v. 边缘化，排斥
vital	adj. 重要的
fortunately	adv. 幸运地
commencement	n. 毕业典礼
fetch	v. 取回
clumsy	adj. 笨拙的，不圆滑的
establishment	n. 确立
emit	v. 发出，排出
entertaining	adj. 有趣的，使人愉快的
irregular	adj. 不规律的
psychologist	n. 心理学家
era	n. 纪元，年代
triumph	n. 胜利
detection	n. 侦查；察觉
cozy	adj. 舒适的
gallery	n. 美术馆
enormous	adj. 巨大的
obtain	v. 获得
desert	v. 抛弃
aviate	v. 驾驶飞机
determine	v. 决定；下决心
disappear	v. 不见，消失
entitle	v. 使具有权利，使具有资格
relieve	v. 解除，减轻，缓解
generosity	n. 慷慨，大方
colleague	n. 同事
undertake	v. 承担
convenient	adj. 方便的
preferentially	adv. 优先地
column	n. 专栏
affectionate	adj. 深情的，柔情的
issue	v. 发表〔声明〕 n. 问题
inquire	v. 询问
groundlessly	adv. 无缘无故地，无根据地
independently	adv. 独立地
approach	v. 靠近 n. 方法
administration	n. 管理；〔某一时期的〕政府
adversity	n. 逆境，不幸
technician	n. 技术员，技师
regular	adj. 有规律的，经常的
miscalculation	n. 算错，误算
hinder	v. 阻碍
selection	n. 选择，挑选
tide	n. 潮水
superior	adj. 上级的，较高的 n. 上级，长官
matter	v. 要紧，重要
passively	adv. 消极地
grant	v. 授予；允许
liberation	n. 解放
observe	v. 遵守
institute	v. 建立 n. 〔从事科研或教育等的〕机构；学院；研究院
dormitory	n. 宿舍
awful	adj. 可怕的，骇人的
emergency	n. 紧急情况
stress	n. 压力；重音
launch	v. 发动
suppose	v. 料想，以为；假定；期望
remove	v. 消除，移除
exposure	n. 暴露；揭露
promote	v. 促进，提升；推销
engage	v. 从事；吸引
uncertain	adj. 不确定的
accommodate	v. 为…提供住宿
slave	n. 奴隶
mature	adj. 成熟的
contrast	n. 对照物 v. 对比
clinic	n. 诊所
award	v. 授予；判给 n. 奖(金)
worthwhile	adj. 有价值的
cruelty	n. 残暴，残酷
threaten	v. 威胁
chemical	adj. 化学的 n. 化学制品
consistent	adj. 一致的
renew	v. 〔中止后〕重新开始，继续
takeoff	n. 起飞
innocent	adj. 无辜的；天真的
currently	adv. 当前；一般地
dropout	n. 辍学者
replace	v. 代替
sightseeing	n. 观光
honor	n. 荣誉；崇敬，敬重，敬意
imitate	v. 模仿
installment	n. 分期付款
personality	n. 个性，性格
headquarter	v. 设立总部，在…设立总部
ingredient	n. 成分，原料
revenue	n. 收入
sensitive	adj. 敏感的
particular	adj. 特别的，特指的；讲究的；挑剔的，吹毛求疵的
tumor	n. 瘤
consequence	n. 结果，成果
explicitly	adv. 直接地，明确地
sway	v. 影响
technical	adj. 技术的
expert	adj. 熟练的，内行的
harm	n. 损害；危害；伤害 v. 伤害，损害〔某事物〕
imaginary	adj. 虚构的，想象的
contaminate	v. 污染，弄脏
soar	v. 猛增
solely	adv. 单独地，唯一地
tremendous	adj. 巨大的
civilization	n. 文明
tough	adj. 困难的
gift	n. 礼物；天赋
scale	n. 规模；比例
injure	v. 使受伤
embrace	v. 拥抱；欣然接受，乐意采纳 (新思想、意见、宗教等)
seldom	adv. 很少，罕见
performance	n. 演出；履行；表现
violate	v. 违反
associate	v. 把……联系起来；交往；
privacy	n. 隐私
choke	v. 使窒息
capable	adj. 能干的，有能力的
appeal	n. 呼吁 v. 吸引；呼吁；恳请，恳求
careless	adj. 粗心的
hit	n. (唱片、电影或戏剧的) 成功；命中，击中
swallow	v. 咽下，吞下
consult	v. 咨询
preservation	n. 保存，保留
distance	n. 距离
plastic	adj. 塑料的
predict	v. 预言，预测，预告
submit	v. 提交
entertainment	n. 娱乐
critical	adj. 批评的，爱挑剔的
transaction	n. 交易，业务，事务
via	prep. 通过
insist	v. 主张，坚持
distract	v. 分心
subdivision	n. 分支; 分部
yield	v. 产生，得出〔结果、答案或资料 n. 产量
misunderstand	v. 误解
detail	n. 细节
immeasurable	adj. 无法估量的
convincing	adj. 令人信服的
donate	v. 捐赠
compare	v. 比较，对照
item	n. 〔尤指清单上、一群或一组事物中的〕一项，一件，一条
concrete	adj. 具体的
govern	v. 管理，支配
classify	v. 把…分类，把…分级
restrict	v. 限制，限定
establish	v. 建立，创办，设立
counseling	n. 咨询服务
majority	n. 多数
contact	n. 联系，接触 v. 〔写信、打电话〕联系〔某人〕
virtual	adj. 虚拟的
simplicity	n. 简单
enrollment	n. 入学人数
programming	n. 〔计算机的〕程序编写，程序设计；程序；；〔电视或广播〕节目；电视[广播]节目策划，编排
device	n. 装置，设备
previous	adj. 之前的
alter	v. 改变
coach	n. 教练 v. 当…的教练，训练，培训
crisis	n. 危机
interconnect	v. 相互联系
enrich	v. 丰富；使富有
poll	n. 民意调查
consent	v. 允许，同意 n. 同意，赞同
utility	n. 公用事业〔如煤气、电力等〕
poisonous	adj. 有毒的，有害的
collision	n. 冲突，抵触
rank	v. 具有…等级[地位] n. 衔，阶层
fundamentally	adv. 根本上
inflation	n. 通货膨胀
secure	v. 确保……安全
interpret	v. 解释
criticize	v. 批评；评论
arrest	v. 逮捕
afford	v. 负担得起
implementation	n. 实现，履行
initiate	v. 开始，发起
enable	v. 使能够……
narrow	adj. 狭窄的
overcharge	v. 向……多收费
shortcut	n. 捷径，近路
leisure	n. 悠闲，空闲
original	adj. 原始的，最初的
density	n. 密度
sphere	n. 球体；范围
margin	n. 页边的空白，页边，白边
department	n. 部门
desire	n. 渴望，欲望
legend	n. 传奇
dictator	n. 独裁者；专制者
diversity	n. 多样性；差异
quit	v. 放弃
outgoing	adj. 开朗的；外向的；外出的
solution	n. 解决，解答，解决办法
revenge	n. 报仇
reverse	n. 相反情况；正相反 a. 相反的
enroll	v. 注册
logically	adv. 合乎情理地，符合逻辑地
rental	n. 租金
component	n. 成分
quotation	n. 引文
faith	n. 信任
invalid	adj. 无效的
invade	v. 侵入，侵略
separately	adv. 分别地，另行
strain	v. 扭伤，拉伤
accessible	adj. 易接近的
lap	n. 〔坐着时的〕大腿部
character	n. 角色
widespread	adj. 普遍的，广泛的
rearrange	v. 重新安排
hospitalize	v. 就医
avail	v. 有益, 有帮助
instant	adj. 立即的；紧急的；速溶的，方便的
democratic	adj. 民主的
barely	adv. 仅仅，几乎不
vanish	v. 消失
caregiver	n. 照料者
harsh	adj. 严酷的
reliable	adj. 可靠的，可信赖的
massive	adj. (尺寸、数量、规模) 非常大的
alcohol	n. 酒精
pregnant	adj. 怀孕的
adapt	v. 适应于
bogus	adj. 假冒的
slippery	adj. 滑的；模糊的，不明确的，
current	adj. 当前的
overwhelm	v. 压倒，战胜
stressful	adj. 充满著压力的，充满著紧张的
toothache	n. 牙痛，牙疼
eliminate	v. 消除
terminal	n. 终点站，航空站
severe	adj. 严重的
immobile	adj. 稳定的，不变的
diplomatic	adj. 外交的
candidate	n. 申请求职者；投考者；候选人
fund	n. 基金，储备； v. 提供资金
complacency	n. 自满，满足
delight	n. 高兴
inadequate	adj. 不足的，不够的
steady	adj. 稳定的，逐步的
accurate	adj. 精确的，准确的
identification	n. 身份证明；鉴定，识别；认同；
previously	adv. 事先
identical	adj. 相同的
retirement	n. 退休
commit	v. 犯罪；承担义务
element	n. 要素；元素
assess	v. 评价
hire	v. 雇佣
represent	v. 代表
overestimate	v. 对（数量）估计过高
supervision	n. 监督
expose	v. 暴露
seemingly	adv. 表面上看
assignment	n. 作业
preference	n. 偏爱
energetic	adj. 精力充沛的
application	n. 申请；应用
moral	adj. 精神上的, 道德的
dispute	n. 辩论，争论 v. 辩论，争论
influence	n. 影响 v. 影响
illegal	adj. 非法的
esteem	n. 自尊
abundant	adj. 大量的，丰富的
survey	v. 调查；审视，仔细考虑 n. 调查；勘测，测量，测绘
extensively	adv. 广泛地
deserve	v. 值得
crash	v. 坠落;坠毁;撞击 n. 〔汽车的〕撞车事故；〔飞机的〕坠毁，失事
affirm	v. 断言，声明
reputation	n. 名气，名声，名誉
degree	n. 程度
fade	v. 逐渐消失
competitor	n. 竞争者，对手
confuse	v. 使混淆，迷惑
task	n. 任务，工作
lessen	v. 减少
admit	v. 承认；容许
bow	v. 鞠躬
division	n. 除法；部门
literature	n. 文学，文学作品；文献；文献
consultant	n. 顾问
penalty	n. 惩罚
comment	n. 评论
major	adj. 主要的 v. 主修
option	n. 选择
socialize	v. 交往，联谊
bureau	n. 局
budget	n. 预算 v. 编预算
pop	v. 突然出现，跳出
position	n. 职位
unaffordable	adj. 买不起的，负担不起的
function	n. 功能 v. 运行
perceive	v. 察觉
reserve	v. 留出，预定
innovation	n. 改革，创新
alert	v. 提醒；使〔某人〕意识到 adj. 机警的
cautious	adj. 谨慎的
document	n. 文件
characterize	v. 以……特点
achieve	v. 完成，实现
address	v. 解决
inspiration	n. 灵感
agency	n. 机构
formulate	v. 规定，制定
fate	n. 命运
surf	v. 冲浪
steer	v. 驾驶
structure	n. 结构
architect	n. 建筑师
frame	n. 框架
amaze	v. 使吃惊
affirmation	n. 断言，肯定
intelligent	adj. 有智慧的，聪明的，悟性强的
code	n. 代码，密码
burden	n. 重担，负担
absorb	v. 吸收（液体、气体等）
instruction	n. 用法说明；操作指南；命令，指示
admission	n. 承认；准许进(加)入；入场费
additional	adj. 额外的
prejudice	n. 偏见 v. 使有偏见，使有成见
process	n. 过程，进程；；工序；工艺流程 v. 处理
elegant	adj. 优雅的
hospitable	adj. 热情友好的
refreshing	adj. 恢复活力的
ensure	v. 确保
frighten	v. 使惊恐，使恐慌
civilized	adj. 文明的
approval	n. 批准，认可；赞成，同意
publicize	v. 宣布
resident	n. 居民
considerate	adj. 体贴的；考虑周到的
twist	v. 扭曲，使弯曲
citizen	n. 市民，城镇居民；公民
stake	n. 风险
keenly	adv. 敏锐地
superficial	adj. 肤浅的
flexibility	n. 灵活性；适应性
favorable	adj. 赞同的
competent	adj. 胜任的，有能力的
emotional	adj. 情绪(上)的，情感(上)的；激起感情的； 敏感的；情绪激动的〔尤指哭泣〕
pioneer	v. 开拓，开发
sustain	n. 维持
gloomy	adj. 阴沉的，沮丧的
convince	v. 使相信
profitable	adj. 有利可图的，有益的
routinely	adv. 例行公事地
phenomenon	n. 现象
variety	n. 多样
gum	n. 牙龈
criticism	n. 批评
fatal	adj. 致命的，攸关的
delightful	adj. 高兴的
tedious	adj. 单调沉闷的
flexible	adj. 灵活的
considerably	adv. 相当地，非常地
efficiently	adj. 有效地
appearance	n. 外表, 外观；出现
album	n. 粘贴簿，集邮簿，册
optimistic	adj. 乐观的
clue	n. 线索
grief	n. 悲伤
synthetic	adj. 合成的，人造的
resistance	n. 抵御，抵抗；抵抗力
install	v. 安装
pledge	n. 保证，誓言
unique	adj. 独特的，唯一的
stock	n. 股票；库存
disadvantage	n. 不利情况，缺点
compensate	v. 弥补，补偿
rescue	v. 营救，援救
monitor	v. 监控；监听
refusal	n. 拒绝
exile	n. 流放，放逐
encourage	v. 鼓励
concept	n. 观点，观念
render	v. 给予
trait	n. 性格
feature	n. 特点
reframe	v. 再构造(图画、照片等)
identify	v. 认出，识别；视为
impose	v. 强加
snack	n. 零食，小吃
require	v. 要求，命令
donation	n. 捐赠
equal	adj. 相等的，平等的
rare	adj. 罕有的，少见的
specify	v. 指定，具体说明
constant	adj. 不断的，持续的
standardize	v. 使标准化
consume	v. 消费，消耗
status	n. 地位
complement	v. 补充
lengthy	adj. 长的，漫长的
embarrassed	adj. 尴尬的；窘迫的
rational	adj. 神智清楚的
distant	adj. 遥远的
homemaker	n. 主妇
exception	n. 例外
sustainable	adj. 可持续的
trigger	v. 引发，引起
intend	v. 打算
spread	v. 扩散；传播
estimate	v. 估计
technique	n. 技巧，手艺；技术，技能
include	v. 包含
academic	adj. 学术的
distinctive	adj. 独特的，与众不同的
consist	v. 由……组成
bid	n. 出价，投标 v. 出价，投标
benefit	v. 有益于，有助于
downsize	v. 裁员
avoid	v. 避免
gender	n. 性别
interracial	adj. 种族间的
complaint	n. 抱怨; 投诉
pattern	n. 模式
mood	n. 心情
sympathy	n. 同情心
discount	n. 折扣
value	v. 重视
altitude	n. 海拔, 高度
groundsheet	n. 防潮布
evolutionary	adj. 进化的；演变的
implement	v. 实施，执行
dominant	adj. 占优势的
scope	n. 范围
suspect	v. 怀疑，猜想 n. 嫌疑犯
confrontation	n. 冲突，对抗
puzzle	v. 迷惑 n. 难解之事，谜
critic	n. 批评家，评论家
apartment	n. 公寓
analyze	v. 分析
maintain	v. 维持；主张
curb	v. 控制 n. 控制
version	n. 版本
rival	n. 对手
beneficial	adj. 有利的，有益的
substantial	adj. 大量的
recover	v. 恢复；重新获得；寻回
diploma	n. 文凭
carpenter	n. 木匠
circumstance	n. 环境，境遇
canteen	n. 食堂
advocator	n. 主张者，倡导者
disorderly	adj. 杂乱的
essentially	adv. 本质上，根本上
prevent	v. 预防
ceremony	n. 典礼，仪式
assume	v. 假定，认为
demand	n. 需求，要求 v. 要求
principle	n. 原则，原理
reception	n. 接待；反响
transfer	v. 转换，调换 n. 转换，调换
preventable	adj. 可预防的
anticipate	v. 预感
assumption	n. 假定，假设
prescription	n. 处方
evolution	n. 演变，进化
annoy	v. 使反感，厌烦
unintended	adj. 意想不到的
origin	n. 起源
qualify	v. 使……有资格
emergence	n. 出现，发生
complain	v. 抱怨
merit	n. 优点，成绩 v. 值得
forum	n. 论坛
arrange	v. 安排，筹划
determination	n. 意志
bargain	n. 便宜货，减价品
appetite	n. 欲望, 胃口
neutral	adj. 中立的
primitive	adj. 原始的；简单的；简单的，简陋的
therapy	n. 疗法 治疗
conscience	n. 良心
define	v. 确定；下定义
creativity	n. 创造力
tailor	v. 调整使适应
dramatically	adv. 戏剧性地，引人注目地
panic	n. 惊恐
motivation	n. 激励，刺激
durable	adj. 持久的，耐用的
remedy	n. 药物
inevitable	adj. 不可避免的
diverse	adj. 各种各样的
context	n. 背景，环境
prominent	adj. 杰出的；突出的，凸起的
witness	n. 目击者，目击
save	v. 节省
inherit	v. 继承
occasion	n. 场合
initiative	n. 主动权，自主权
insight	n. 洞察力，洞悉
misguided	adj. 被误导的
sponsor	v. 赞助
porter	n. 搬运工
loyalty	n. 忠诚，忠实
overwhelming	adj. 压倒性的
appreciation	n. 感激
setting	n. 背景，环境
display	n. 展览 v. 展览
deliver	v. 发表
astonish	v. 使惊讶，使大为吃惊
adequate	adj. 足够的
consumption	n. 消费，消耗
abuse	v. 虐待；滥用
broad	adj. 宽的
inappropriate	adj. 不合适的
worldwide	adv. 全世界范围地
strict	adj. 严格的
means	n. 方法
reveal	v. 揭露，揭示
confirm	v. 证实
consensus	n. 一致意见
agent	n. 代理商
neighborhood	n. 地区
participate	v. 参与，参加
valid	adj. 有效的
initially	adv. 最初，起初
slightly	adv. 轻微地
objection	n. 反对
atmosphere	n. 气氛；大气；空气
assign	v. 布置；分配
evidence	n. 根据，证据，迹象
racially	adv. 种族上地
exclude	v. 排除，不包括
available	adj. 可利用的，现有的；可获得的
puzzling	adj. 令人困惑的
evaluation	n. 评价，评估
irritate	v. 激怒
distinguished	adj. 显著的，杰出的
depressing	adj. 令人沮丧的
mutually	adv. 互相地
mission	n. 使命，任务；代表团
migration	n. 迁移，移民
site	n. 场所，地址
expectation	n. 期望
update	v. 更新；使现代化
gear	n. 齿轮 v. 使合适
reproductive	adj. 生殖的，再生的
incredible	adj. 不可思议的
backward	adv. 向后
raise	v. 提高；筹款；抚养
prohibit	v. 禁止，阻止，防止
bother	v. 麻烦；打扰
pose	v. 摆姿势，装腔作势 n. 姿势
instrument	n. 仪器，器械，工具
mask	v. 掩饰
essential	adj. 必须的；本质的
harvest	n. 丰收，收获
reject	v. 拒绝，驳回
advancement	n. 进步，提升
skyrocket	v. 突升，猛涨
characteristic	n. 特点
implication	n. 含义，暗示
measure	n. 分量 v. 测量
replacement	n. 代替
easygoing	adj. 脾气随和的，温和的
squeeze	v. 压，榨
exhibition	n. 展览
responsibility	n. 责任
enhance	v. 提高；加强；增加
retain	v. 保留,留用
convey	v. 传达，传递
regulation	n. 管理；规则
integrity	n. 完整
combine	v. 联合，结合
impermanency	n. 非永久性
catalogue	v. 把……编入目录
council	n. 议会
prepare	v. 做准备
inquiry	n. 询问
tension	n. 紧张
prompt	adj. 迅速的；立刻的；及时的 v. 促使；激励
attendance	n. 出席人数
retail	n. 零售 v. 零售
image	n. 形象，声誉，；印象
quantity	n. 量，数量
inspector	n. 检查员
endurance	n. 耐力
simplify	v. 简化
range	n. 范围 v. 在范围内变化
accomplish	v. 完成
treatment	n. 治疗；对待
spare	adj. 空闲的
welfare	n. 幸福；福利
boost	n. 推动 v. 促使，促进
consciousness	n. 意识
patiently	adv. 耐心地
decent	adj. 正派的，体面的
review	n. 回顾 v. 复习
considerable	adj. 相当大(或多)的
misguide	v. 误导
foundation	n. 地基；基础；；基金会
postgraduate	n. 研究生
prevail	v. 流行，盛行
solid	adj. 扎实的，坚实的
counsel	v. 忠告，建议
maximum	n. 最大值，最大量 a. 最大值的，最大量的
abstract	adj. 抽象的
realistic	adj. 现实的，实际的
ban	v. 禁止
ashamed	adj. 羞耻的；内疚的；惭愧的
solve	v. 解决
reinforce	v. 加强，强化
applicant	n. 申请人
tuition	n. 学费
persistence	n. 坚持不懈
overcome	v. 战胜，克服
bride	n. 新娘
engagement	n. 婚约
household	n. 家庭，一家人
evaluate	v. 评价
saint	n. 圣人
delay	v. 推迟，延期
private	adj. 私人的
definition	n. 定义
influential	adj. 有影响力的
recommend	v. 推荐；劝告；使受欢迎
frontier	n. 边境
concern	n. 重要的事情 v. 与…有关，关于
organ	n. 器官
cite	v. 引用
mechanism	n. 机制，机能
contest	n. 比赛
symptom	n. 症状
deadline	n. 最后期限
domination	n. 主导
figure	n. 人物；数字
imply	v. 暗示；意味；
curiosity	n. 好奇心
induce	v. 引诱
acknowledge	v. 承认(…的权威)
gym	n. 体育馆，健身房
chef	n. 厨师
sensible	adj. 明智的
outline	n. 梗概，提纲，草稿，要点
react	v. 对……作出反应
committee	n. 委员会
civilian	n. 平民，百姓
domestic	adj. 国内的
complex	adj. 复杂的
locate	v. 位于，定位
tighten	v. 使变紧
physics	n. 物理，物理学
foothold	n. 立足处（攀登时脚踩的地方）
discharge	v. 释放；排出；批准离开; 命令离开
advanced	adj. 高级的
complicated	adj. 复杂的，难懂的
needy	adj. 贫穷的
stale	adj. 乏味的，没有新意的
casual	adj. 漫不经心的，随便的；偶然的
conform	v. 相一致，遵守
recharge	v. 再充电
annually	adv. 每年，一年一次
frown	v. 皱眉
decline	v. 下降，减少；拒绝
originate	v. 开始
prospect	n. 前景；前途
curious	adj. 好奇的
incentive	n. 动机，刺激
virus	n. 病毒
cultivate	v. 培养， 养成
potential	n. 潜力 adj. 有可能的；潜在的
reluctant	adj. 不愿意的，勉强的
miserable	adj. 痛苦的
persuasion	n. 劝说
competitiveness	n. 竞争力
restriction	n. 限制，限定
minor	adj. 小的
grain	n. 谷物，粮食
rate	n. 比率，速率
radically	adv. 完全地，彻底地
distinct	adj. 明显的；有区别的
equality	n. 平等
hardworking	adj. 苦干的，不辞辛劳的
qualification	n. 资格(证明)，合格证书
bacteria	n. 细菌
corporate	adj. 团体的；法人的
undermine	v. 逐渐削弱; 逐渐动摇
selfish	adj. 自私的
cater	v. 迎合
survival	n. 幸存
favor	v. 偏好, 较喜欢
conflict	v. 冲突
client	n. 客户
garage	n. 车库
fatigue	n. 疲劳，疲乏
plant	n. 工厂
endanger	v. 危及，危害，濒临危险
operation	n. 手术；行动
handle	v. 处理
laborious	adj. 费力的
passion	n. 热情，激情
cooperative	adj. 合作的
inflate	v. (使)膨胀
resourceful	adj. 机智的
exaggerate	v. 夸张
loan	n. 贷款
vocabulary	n. 词汇
illustrate	v. 说明,阐明
overflow	v. 溢出，淹没
fantasize	v. 想象，幻想
amusing	adj. 有趣的，好玩儿的
universal	adj. 宇宙的，全世界的；普遍的
generate	v. 产生
schedule	n. 日程表
backslide	v. 倒退，退步
particle	n. 微粒
menu	n. 菜单
reward	n. 报答，奖赏 v. 报答，奖赏
reproduce	v. 复制
worsen	v. （使）变得更坏
feedback	n. 反馈
equivalent	adj. 相等的，相当的
resign	v. 辞职
motivate	v. 促动，激发，诱导
compel	v. 强迫
revise	v. 修订
dampen	v. 抑制
prosperity	n. 繁荣
flow	n. 流动 v. 流动
humanity	n. 人类〔总称〕；人性
sideways	adv. 向侧面
pursue	v. 追求
innovate	v. 创新，革新
mill	n. 工厂
promotional	adj. 促销的
dump	v. 扔下，倾倒；倾销
resist	v. 抵抗，抗拒
source	n. 来源
legal	adj. 法律的
picky	adj. 挑剔的
steal	v. 偷窃
despite	prep. 尽管
explosion	n. 爆炸
gap	n. 缝隙，缺口；差距
relevant	adj. 有关的，切题的
ignore	v. 忽视，不顾
complete	v. 完成 adj. 完整的，彻底的
sufficient	adj. 足够的
switch	v. 转变，改变
request	n. 要求
stereotype	n. 老套，固定模式
couple	n. 夫妻，情侣
honesty	n. 诚实
transportation	n. 运输
physical	adj. 身体上的
screen	v. 筛查
divine	adj. 神圣的
guideline	n. 指导原则
revolution	n. 革命
interruption	n. 打扰；中断
dishwasher	n. 洗碗机
promising	adj. 有希望的，有前途的
vary	v. 不同；变化
permanent	adj. 永久的
manufacture	v. 制造，生产
fussy	adj. 爱挑剔的；
dictate	v. 命令，规定 n. 命令，规定
professional	adj. 专业的
prosper	v. 繁荣
exchange	n. 交换，交流 v. 交换，交流
concentration	n. 集中
gesture	n. 手势，姿势
deliberate	adj. 故意的
contribution	n. 贡献；捐款
bless	v. 保佑，祝福
detective	n. 侦探
evident	adj. 明显的
retreat	v. 退避，后退；撤退
responsible	adj. 负责的，有责任的
identity	n. 身份
statistics	n. 统计学；数据
appreciate	v. 感激；欣赏
insult	v. 侮辱
neglect	v. 疏忽；忽视
primarily	adv. 主要地，首先
long	v. 渴望
incline	v. 倾向于
asset	n. 有价值的人(或物)资产
overtake	v. 超车
extension	n. 分机
engine	n. 引擎，发动机
emphasize	v. 强调
genuine	adj. 真正的
fascination	n. 魅力；入迷
lodge	v. 住宿，暂住
cheat	v. 欺骗, 作弊
security	n. 安全，安保
painful	adj. 痛苦的，疼痛的，令人不快的
emerge	v. 出现
instance	n. 情况，例子
steep	adj. 陡峭的；急剧升/降的
rigorous	adj. 严格的
persuade	v. 说服
procedure	n. 程序
signature	n. 签名
surpass	v. 超过
campaign	n. 活动
advance	n. 提前 v. 前进
charity	n. 慈善机构
average	adj. 平常的
indispensable	adj. 必不可少的
irrationally	adv. 不合理地，无理性地
accompany	v. 陪伴
aviation	n. 航空
distress	v. 使痛苦，悲痛
invariably	adv. 不变地，一直
invest	v. 投资
approximately	adv. 大约
conservation	n. 保护，保存
ease	n. 轻松，舒适
extracurricular	adj. 课外的
undoubtedly	adv. 无疑
excellent	adj. 卓越的，杰出的，极好的
investigate	v. 调查
judgement	n. 判断，决定
struggle	v. 搏斗
prohibitively	adv. 过分地，非常地
military	adj. 军队的，军事的
consequently	adv. 结果
suffer	v. 受苦；遭受（痛苦）
visible	adj. 看得见的
swift	adj. 迅速的
battle	n. 战争，战役
liability	n. 责任
resistant	adj. 抵抗的；抵制的
nutritious	adj. 营养的
constantly	adv. 不断地，时常地
familiar	adj. 熟悉的
terribly	adv. 可怕地，非常
restore	v. 修复
refine	v. 改善；精炼
inspire	v. 激发；鼓舞；使产生灵感
comply	v. 遵从
justice	n. 公正
district	n. 区
installation	n. 安装；就职；就职仪式
marvelous	adj. 引起惊异的
provoke	v. 激起，挑起
lobby	n. 大堂 v. 游说
interview	n. 面谈（试）；会见； v. 采访 ；面试
release	v. 释放；发布
explore	v. 探索
profound	adj. 深厚的
exploit	v. 开采
startup	n. 启动，开办
constructive	adj. 建设的，建设性的
unbearable	adj. 无法忍受的
laundry	n. 要洗的衣服；刚洗过的衣物；洗衣房
seize	v. 抓住
poison	v. 使中毒
bakery	n. 面包店
tent	n. 帐篷
wedding	n. 婚礼
fair	n. 集市
geographic	adj. 地理的
comprehensive	adj. 综合的，全面的
riot	n. 暴乱
conspicuous	adj. 显著地
block	v. 阻碍 n. 街区
acute	adj. 敏锐的
endure	v. 忍耐；容忍
assembly	n. 装配
opponent	n. 对手
confront	v. 面对
stir	v. 搅动；煽动，激起
rocket	n. 火箭 v. 猛增
attribute	v. 归因于
sentence	n. 判决 v. 判决
tempting	adj. 诱人的，吸引人的
commitment	n. 承诺，保证
feasible	adj. 可行的；可能的；可用的
outcome	n. 结果
diligent	adj. 勤奋的
deprive	v. 剥夺，夺去，使丧失
grid	n. 输电网
distribute	v. 分发
destruction	n. 破坏
divide	v. 分开
highlight	v. 突出；强调 n. 突出的部分
justify	v. 证明……正当
announce	v. 宣布，声称
proposal	n. 提议
advisory	n. 报告，警告
mystery	n. 迷，神秘的事物
punctual	adj. 准时的
derive	v. 得到，导出
harmony	n. 和谐
unwilling	adj. 不愿意的
view	v. 看待
financial	adj. 财政的，经济的
priority	n. 优先，优先权
impermanent	adj. 非永久（性）的；不持久的，暂时的
symbolize	v. 象征
bankrupt	adj. 破产的，倒闭的
intake	n. 摄入
addiction	n. 上瘾
productive	adj. 富有成效的
admire	v. 钦佩，称赞
reflect	v. 反映
underline	v. 强调
representative	n. 代表
blame	v. 指责，责怪
retrain	v. 再教育；再训练
tasteless	adj. 无味的
excessive	adj. 过度的
dishonest	adj. 不诚实的
caution	n. 小心，谨慎 v. 警告，告诫
glorious	adj. 辉煌的
pointless	adj. 无意义的
significant	adj. 重要的
mutual	adj. 相互的
temptation	n. 诱惑，引诱
passive	adj. 被动的
evolve	v. 使发展
treasure	v. 珍爱
shock	v. 感到震惊
disservice	n. 伤害，帮倒忙
ambitious	adj. 有雄心的，野心勃勃的
fancy	adj. 华丽的；别致的
accumulate	v. 积累，增加
fuss	n. 大惊小怪
ultimately	adv. 最后，最终
showmanship	n. 主持演出的技巧
cancel	v. 取消
regulate	v. 管理
peer	n. 同龄人
calculate	v. 计算
virtually	adv. 几乎，差不多
accustom	v. 使习惯
retailer	n. 零售商
programmer	n. 程序设计员
advice	n. 建议
admiration	n. 钦佩，称赞
courageous	adj. 有勇气的
respectful	adj. 有礼貌的，尊重的
makeup	n. 化妆品
reservation	n. 预定
apply	v. 申请；应用
demonstrate	v. 证明；展示
generation	n. 一代人；产生
chat	v. 聊天
ancient	adj. 古代的
evil	n. 邪恶，罪恶
indifferent	adj. 冷漠的
namely	adv. 即，也就是
effect	n. 影响
devote	v. 奉献，致力于
appointment	n. 约会
appoint	v. 任命，委派；约定，确定，指定
resemble	v. 像，相似
assemble	v. 集合；组装；集合
expressiveness	n. 表达
visibility	n. 能见度
distracted	adj. 分心的
debt	n. 债务
substitute	n. 代替者 v. 代替
insecure	adj. 不安全的
chap	n. 小伙子，小家伙，家伙
selective	adj. 选择的,精选的
compensation	n. 弥补，补偿
dilemma	n. 困境
foreseeable	adj. 可以预见的
inadequacy	n. 不足
guarantee	v. 担保 n. 保证，担保
discrimination	n. 歧视
intense	adj. 强烈的
facilitate	v. 使便利，促进
mislead	v. 误导
reassess	v. 重新评估
response	n. 反应
essay	n. 散文，文章
stimulate	v. 刺激
dessert	n. 甜点
peaceful	adj. 平静的；和平的
regularly	adv. 定期地，有规律地
fascinate	v. 强烈地吸引，迷住
durability	n. 持久
discover	v. 发现
constitute	v. 组成
administrative	adj. 管理的
tremble	v. 颤抖
ignorant	adj. 无知的
decorate	v. 装饰
acquire	v. 获得
annual	adj. 每年的
due	adj. 到期的
situation	n. 情况
archive	n. 档案馆，档案室；档案
incomparable	adj. 无比的，无可匹敌的
perspective	n. 视角，观点；远景
compete	v. 竞争
joint	adj. 联合的
overload	n. 负担太重
mechanic	n. 机械师
distinguish	v. 区别，区分
vote	v. 投票，选举
everlasting	adj. 永恒的
construction	n. 建筑
aggressive	adj. 挑衅的，好斗的；有上进心的
classification	n. 分类，级别
melt	v. 融化
detect	v. 觉察；检测
discourage	v. 阻止；使气馁
combination	n. 联合，结合
grave	n. 坟墓
malfunction	n. 失灵，故障
reduce	v. 减少
respectively	adv. 各自地
forefinger	n. 食指
wise	adj. 聪明的，有智慧的
background	n. 背景
symbol	n. 象征，标志
quality	n. 品质
repave	v. 再铺，重新铺砌
downfall	n. （雨等的）大下特下
ring	n. 拳击台
planet	n. 行星
pension	n. 养老金
perception	n. 感知
facility	n. 设施
proportion	n. 比例，部分
involve	v. 卷入，包含
attempt	n. 尝试，试图 v. 尝试，试图
conventional	adj. 传统的
detailed	adj. 细节的，详细的
interpretation	n. 阐释，说明
guilt	n. 有罪，犯罪行为
connectivity	n. 连接，联系
behave	v. 表现
instruct	v. 指导；教授；通知；命令；
infinite	adj. 无限的
hazard	n. 危险
undervalue	v. 低估
specific	adj. 特定的，具体的
appealing	adj. 吸引人的
fitness	n. 健康
conclusion	n. 结论
absent	adj. 缺席的
antique	n. 古玩，古董
myth	n. 神话
intervention	n. 干涉
trace	n. 痕迹
protest	v. 抗议
refuel	v. （给）加油，加燃料
tackle	v. 处理
finance	n. 财政 v. 资助
fine	v. 罚款
indicate	v. 表明
dissatisfy	v. 不满意
expand	v. 扩大
spontaneous	adj. 自发的
offense	n. 犯罪；冒犯
abruptly	adv. 突然地
recycle	v. 循环，再利用
rude	adj. 粗鲁的
contribute	v. 捐款，贡献
embarrass	v. 尴尬
weaken	v. 减少，减弱
mineral	n. 矿物
sticky	adj. 粘的
challenge	n. 挑战 . v. 质疑
excess	n. 过量，过度
recruit	v. 招募，吸收 n. 新兵，新成员
overstate	v. 夸张，夸大
generalization	n. 概括
hub	n. 中心
conservative	adj. 保守的，传统的
restock	v. 重新进货，再储存
convict	v. 证明…有罪
deepen	v. 使加深，加剧
tank	n. 油箱，水箱
negative	adj. 消积的；否定的
accelerate	v. 加速
territory	n. 领土，领域
impact	n. 影响
distraction	n. 分心；消遣
resolve	v. 解决；下决心
refuse	v. 拒绝
soluble	adj. 可溶的；可以解决的
brave	adj. 勇敢的；极好的
hat	n. 帽子（一般指有边的）
beach	n. 海滩，湖滩，河滩
authority	n. 当局，官方；权力
roast	v. 烤，炙；烘
amplify	v. 放大，扩大；增强
bulk	n. 大部分；体积，块头
put	v. 放，摆；使处于
stable	adj. 稳定的，不变的
certificate	n. 证书，证件，执照；（毕业）文凭，合格证书
dragon	n. 龙
capable	adj. 有能力的；有才能的
criticism	n. 批评；批判；评论
accommodation	n. 住处；工作场所
imply	v. 暗示，意指
December	n. 十二月
president	n. 总统；（某组织的）最高权力人
lately	adv. 最近，不久前
down	adv. 向下；在下面
matter	n. 事情；物质 v. 要紧
lake	n. 湖
nor	conj. 既不…也不…；也不
bench	n. 长凳，条凳
rug	n. 小地毯；毛毯
mirror	n. 镜子 v. 与〔另一事物〕相似；反映
draw	v. 画，划
net	n. 网，网状物；互联网
scale	n. 天平，磅秤，秤
outline	n. 轮廓；略图；大纲
quiet	adj. 安静的；寂静的
water	n. 水 v. 使湿，灌溉
nervous	adj. 神经的；易激动的
nevertheless	conj. 然而 adv. 仍然
assembly	n. 集合；集会；装配
fight	v. 打（仗）；斗争
missing	adj. 失去的；缺掉的
lift	v. 提起，提高 n. 电梯
refrigerator	n. 冰箱，冷藏库
dirty	adj. 脏的；下流的
rent	n. 租金 v. 出租
convince	v. 使确信，使信服
abroad	adv. （在）国外
offend	v. 冒犯 v. 犯罪，违法
belong	v. 属于
arouse	v. 引起，唤起；唤醒
admission	n. 承认；允许进入
modify	v. 更改，修改
express	v. 表示 n. 快车；快递
imagine	v. 想象，设想
infinite	adj. 无限的；无数的
barrier	n. 障碍；栅栏；屏障
lane	n. （乡间）小路；跑道
notebook	n. 笔记本，期票簿
realm	n. 领域；王国，国土
lever	n. 控制杆；杆，杠杆
midst	n. 中部，中间，当中
pilot	n. 飞行员；领航员
direct	adj. 直接的；直率的
prejudice	n. 偏见，成见
tour	n. 旅行，旅游 v. 旅游，游历
tolerance	n. 忍受，容忍
discourage	v. 使泄气，使灰心
get	v. 获得，得到；到达；变成，成为
advertisement	n. 广告
ribbon	n. 缎带，丝带；带
partner	n. 配偶；伙伴；搭挡
hamburger	n. 汉堡包，牛肉饼
climb	v. 攀登，爬
differ	v. 不同，相异
exhibition	n. 展览会；展览，陈列
mineral	n. 矿物 adj. 矿物的
public	adj. 公众的 n. 公众
palace	n. 宫，宫殿
pulse	n. 脉搏；脉动；脉冲
immediately	adv. 立即；（immediately involved）直接地
cow	n. 母牛，奶牛；母兽
private	adj. 私人的；私下的
toast	n. 烤面包 v. 烘，烤
scenery	n. 风景；舞台布景
fun	n. 乐趣，娱乐；玩笑
living	adj. 活的 n. 生活，生计
Mediterranean	n. 地中海 adj. 地中海的
worth	adj. 值…的 n. 价值
conquer	v. 征服；战胜
absorb	v. 吸收；中文释义；使专心
enthusiasm	n. 热情，热心，热忱
brood	n. 同窝幼鸟 v. 孵（蛋）
tip	v. 轻击；给小费
accompany	v. 陪伴，陪同；伴随
execute	v. 将…处死；实施
conceal	v. 把…隐藏起来
certain	adj. 肯定的；确实的
apparent	adj. 明显的；表面上的
messenger	n. 送信者，信使
merit	n. 长处，优点
youth	n. 青春；青年们；青年
naval	adj. 海军的，军舰的
downward	adj. 向下的 adv. 向下地
fact	n. 事实；实际，实情
hut	n. 小屋，棚屋
namely	adv. 即，也就是
monument	n. 纪念碑；纪念馆
cool	adj. 凉的；冷静的
governor	n. 州长；主管人员
program	n. 程序；节目单
illness	n. 病，疾病
normal	adj. 正常的，普通的
population	n. 人口；全体居民
frontier	n. 边境；边疆；新领域
quantity	n. 量，数量，分量
order	n. 次序；整齐 v. 命令
learning	n. 学问，知识；学习
everywhere	adv. 到处，处处
stage	n. 阶段；舞台
everyone	pron. 每人，人人
sting	v. 刺；刺痛 n. 刺
hatch	v. （蛋）孵化；孵出
honey	n. 蜜，蜂蜜
nest	n. 巢；窝，穴
degree	n. 度；学位
equivalent	adj. 相等的；等量的
calendar	n. 日历，历书；历法
manual	adj. 体力的 n. 手册
cabinet	n. 内阁；橱，柜
steady	adj. 稳固的 v. 使稳定
more	adj. 更多的 adv. 更
apple	n. 苹果
never	adv. 永不，决不；不
instruction	n. 命令；教学；教训
laughter	n. 笑，笑声
appeal	n. 呼吁；申述 v. 呼吁；申述
idiom	n. 习语，成语
impressive	adj. 给人印象深刻的
fourteen	num. 十四
on	prep. 在…上
stack	n. 堆，垛 v. 堆积
imitate	v. 模仿；仿效；仿制
cast	v. 投，扔，抛；浇铸
pump	n. 泵 v. 用抽机抽
animal	n. 动物，兽 adj. 兽欲/动物本能等（animal urges/instincts）
mend	v. 修补，缝补；修理
dozen	n. 一打，十二个
bathe	v. 给…洗澡
means	n. 方法，手段，工具
emphasis	n. 强调，重点，重要性
shortage	n. 不足，缺少，不足额
contrary	adj. 相反的 n. 相反
tunnel	n. 隧道，坑道，地道
visible	adj. 可见的，看得见的
minimum	n. 最小量 adj. 最小的
hedge	n. 篱笆，树篱
bundle	n. 捆，包，束；包袱
stretch	v. 伸展；伸 n. 伸展
electrical	adj. 电的，电气科学的
artificial	adj. 人工的；娇揉造作的
grateful	adj. 感激的
classmate	n. 同班同学
assess	v. 对（财产等）估价
personal	adj. 个人的；本人的
qualify	v. 使具有资格
shift	v. 替换，转移 n. 转换
preceding	adj. 在前的；在先的
board	n. 板 v. 上（船、车等）
custom	n. 习惯，风俗；海关
patch	n. 补丁；〔与周围部分不同的〕斑，小块 v. 修补，缝补
jar	n. 罐子，坛子，广口瓶
defeat	v. 战胜，击败；挫败
child	n. 小孩，儿童；儿子/女儿
education	n. 教育；训导
stair	n. 楼梯
ornament	n. 装饰物；装饰
downstairs	adv. 在楼下 adj. 楼下的
hare	n. 野兔
brook	n. 小河，溪流
procedure	n. 程序；手续；过程
employ	v. 雇用；用；使忙于
may	modal verb. 可能；可以；祝
province	n. 省；领域，部门
freeze	v. 冻；结冻
artistic	adj. 艺术的；艺术家的
combination	n. 结合，联合；混合
adapt	v. 使适应；改编
ambulance	n. 救护车
burden	n. 担子，重担
innocent	adj. 清白的；幼稚的
option	n. 选择；选择权
fee	n. 费，酬金；赏金
greeting	n. 问候，招呼，致敬
sincere	adj. 真诚的；真挚的
steel	n. 钢，钢铁
guard	v. 守卫；看守 n. 卫兵
worthy	adj. 值得尊敬的；值得的
breakfast	n. 早饭，早餐
sympathize	v. 同情；同感，共鸣
gallery	n. 美术馆，画廊；长廊；走廊
notice	v. 注意 n. 注意；通知
percentage	n. 百分比，百分率
money	n. 货币；金钱；财富
best	adj. 最好的；最大的
meet	v. 遇见
crown	n. 王冠，冕；花冠
beginning	n. 开始，开端；起源
mathematical	adj. 数学的，数学上的
juice	n. （水果等）汁，液
meadow	n. 草地，牧草地
district	n. 地区，区域；区
fish	n. 鱼；鱼肉 v. 钓鱼
incorrect	adj. 不正确的，错误的
lose	v. 失去；迷失；输掉
man	n. 男人；人；人类
mere	adj. 仅仅的；纯粹的
bell	n. 钟，铃，门铃；钟声
mean	v. 作…解释；意指
surrender	v. 交出；投降
complicate	v. 使复杂；使陷入
English	n. 英语 adj. 英国人的
gardener	n. 园丁，花匠
call	v. 把…叫做；叫，喊
pleasant	adj. 令人愉快的，舒适的
conversion	n. 转变，转化；改变
adopt	v. 收养；采用；采取
master	n. 能手；主人；硕士
pipe	n. 管子，导管；烟斗
recover	v. 重新获得；挽回
communicate	v. 通讯；传达
bike	n. 自行车 v. 骑自行车
classify	v. 把…分类
trumpet	n. 喇叭，小号
canoe	n. 独木舟，皮艇，划子
entertain	v. 使欢乐；招待
campaign	n. 运动；战役
abandon	v. 丢弃；放弃，抛弃
lorry	n. 运货汽车，卡车
congress	n. 大会；国会，议会
double	adj. 双的；两倍的
confident	adj. 确信的；自信的
extreme	adj. 极度的；尽头的
frequency	n. 屡次；次数；频率
confess	v. 供认，承认；坦白
lodge	v. 暂住，借宿，投宿
apartment	n. 一套公寓房间
elevator	n. 电梯；升降机
kilogram	n. 千克，公斤
industrial	adj. 工业的；产业的
explosive	n. 炸药 adj. 会爆炸的
challenge	n. 挑战
swear	v. 宣（誓）；诅咒
departure	n. 离开，出发，起程
elastic	n. 松紧带 adj. 有弹性的
break	v. 打破；损坏；破坏
capital	n. 首都；资本，资金
adequate	adj. 足够的；可以胜任的
progress	n. 前进；进展；进步
paste	n. 糊；酱；糨糊
relevant	adj. 有关的，贴切的
exam	n. 考试；检查，细查
conservative	adj. 保守的 n. 保守的人
inhabit	v. 居住于，栖息于
ministry	n. （政府的）部
stem	n. 茎，（树）干 v. 起源
margin	n. 页边的空白；边缘；边缘
core	n. 果实的心；核心
correspondent	n. 通讯员；通信者
possibly	adv. 可能地；也许
roll	v. 滚动；转动
repair	v. 修理，修补 n. 修理，修补
moral	adj. 道德的；合乎道德的
broken	adj. 被打碎的；骨折的
steer	v. 驾驶
wax	n. 蜡，蜂蜡
centimetre	n. 公分，厘米
gaseous	adj. 气体的，气态的
equal	adj. 相等的；平等的
lecture	n. 演讲，讲课 v. 演讲，讲课
recommendation	n. 推荐，介绍；劝告
bleed	v. 出血，流血
kid	n. 小孩，儿童；少年
become	v. 变得；变成；成为
rid	v. 使摆脱，使去掉
land	n. 土地；陆地 v. 上岸
bold	adj. 大胆的；冒失的
prison	n. 监狱；监禁
modest	adj. 谦虚的；不太大的；不很贵的
leather	n. 皮革；皮革制品
length	n. 长，长度；一段
academic	adj. 学院的；学术的
prosperous	adj. 繁荣的，昌盛的
grammatical	adj. 语法上的
physics	n. 物理学
turbine	n. 叶轮机，汽轮机
contempt	n. 轻蔑；藐视；受辱
settlement	n. 解决；殖民，殖民地
label	n. 标签；标记，符号
dew	n. 露，露水
professor	n. 教授
nothing	n. 没有东西 adv. 毫不
palm	n. 手掌，手心
limit	n. 限度；限制；范围
crude	adj. 简陋的；天然的
cold	adj. 冷的；冷淡的 n. 冷
frank	adj. 坦白的，直率的
forget	v. 忘记，遗忘
bean	n. 豆，蚕豆
appear	v. 似乎；出现；来到
price	n. 价格，价钱；代价
emotion	n. 情感，感情；激动
worst	adj. 最坏的 adv. 最坏地
moan	n. 呻吟声 v. 呻吟
terrible	adj. 可怕的；极度的
dollar	n. 元〔美国、加拿大、澳大利亚等国的货币单位〕
answer	v. 回答；响应
barn	n. 谷仓；牲口棚
conclusion	n. 结论，推论；结尾
demand	v. 要求；询问；需要
learn	v. 学，学习
rival	n. 竞争者 adj. 竞争的
industry	n. 工业，产业；勤劳
concern	n. 关心，挂念；重要的事
friendly	adj. 友好的；友谊的
pale	adj. 苍白的；浅的
dramatic	adj. 戏剧的；引人注目的
rhythm	n. 韵律，格律；节奏
local	adj. 地方的；局部的
nuclear	adj. 原子核的
gentleman	n. 绅士；有教养的人
exactly	adv. 确切地；恰恰正是
shield	n. 盾；防护物 v. 保护
hawk	n. 鹰，隼
network	n. 网状物；网络
disease	n. 病，疾病；病害
French	adj. 法国的 n. 法国人
indicate	v. 标示，表示；表明
aural	adj. 耳的，听觉的
basket	n. 篮，篓，筐
interpreter	n. 译员，口译者
mountain	n. 山，山岳；山脉
obtain	v. 获得，得到，买到
activity	n. 活动；活力；行动
lung	n. 肺脏，肺
throughout	prep. 遍及 adv. 到处
measurable	adj. 可测量的
clasp	n. 扣子，钩子；别针
unit	n. 单位；单元；部件
spring	v. 跳，跃 n. 泉；跳跃
home	n. 家；家乡 adj. 家庭的
grammar	n. 语法；语法书
army	n. 军队；陆军
clock	n. 钟，仪表
domestic	adj. 本国的；家庭的
ladder	n. 梯子，梯状物
doubt	n. 怀疑；疑虑 v. 怀疑
fork	n. 餐叉；叉；分叉
course	n. 课程；过程；一道菜
intense	adj. 强烈的；紧张的
advice	n. 劝告；忠告；意见
virtually	adv. 实际上，事实上
envy	v. 妒忌；羡慕 n. 妒忌；羡慕
duck	n. 鸭；中文释义: 雌鸭；鸭肉
remark	n. 评论，谈论 v. 评论，谈论
native	adj. 本土的 n. 本地人
purchase	n. 买，购买 v. 买
explode	v. 使爆炸
tragedy	n. 惨事，惨案；悲剧
scissors	n. 剪刀，剪子
atom	n. 原子；微粒；微量
suck	v. 吸，吮，啜
flag	n. 旗，旗帜
person	n. 人；人身；本人
essay	n. 短文；散文，小品文
cliff	n. 悬崖，峭壁
perspective	n. 透视；远景；观点
inquiry	n. 询问，打听；调查
hair	n. 头发；毛发；毛
clever	adj. 聪明的；机敏的
scratch	v. 搔；抓 n. 搔；抓
insist	v. 坚持；坚持要求
chimney	n. 烟囱，烟筒
orphan	n. 孤儿
plane	n. 飞机；平面
accomplish	v. 达到（目的）；完成
queen	n. 女王；王后；王后
really	adv. 真正地；实在
hook	n. 钩，挂钩 v. 钩住
recognition	n. 承认；认出，识别
leaf	n. 叶，叶子
preliminary	adj. 预备的，初步的
meeting	n. 聚集，会合；会见
property	n. 财产，资产；性质
correct	adj. 正确的 v. 纠正
month	n. 月，月份
destination	n. 目的地，终点
purse	n. 钱包，小钱袋；手袋
feature	n. 特征，特色；面貌
route	n. 路，路线
error	n. 错误，谬误；差错
trust	n. 信任 v. 相信；委托
origin	n. 起源，由来；出身
quick	adj. 快的；敏捷的
hunger	n. 饿，饥饿；渴望
fearful	adj. 害怕的，可怕的
suspicion	n. 怀疑，疑心，猜疑
knowledge	n. 知识，学识；知道
dish	n. 碟，盘子；菜肴
amuse	v. 逗…乐；给…娱乐
cheque	n. 支票
orchestra	n. 管弦乐队
favourite	adj. 特别受喜爱的
centre	n. 中心；中枢 v. 集中
come	v. 来，来到；出现
lion	n. 狮子；勇猛的人
berry	n. 浆果（如草莓等）
edition	n. 版本；版；版次
hatred	n. 憎恶，憎恨，仇恨
poverty	n. 贫穷，贫困
type	n. 型，类型 v. 打字
process	n. 过程；工序 v. 加工
pleasure	n. 愉快，快乐；乐事
banner	n. 横幅；旗，旗帜
experiment	n. 实验；试验
pear	n. 梨子，梨树
Marxism	n. 马克思主义
drip	v. 滴下；漏水 n. 水滴
dictation	n. 口授笔录；听写
advisable	adj. 明智的；可取的
tide	n. 潮，潮汐；潮流
mind	n. 头脑；理智；记忆
blow	v. 吹；吹动；吹响
model	n. 模型；模特儿
compass	n. 罗盘，指南针；圆规
germ	n. 微生物，细菌；幼芽
probably	adv. 或许，大概
library	n. 图书馆；藏书
advance	v. 前进；提高 n. 进展
my	det. 我的
beloved	adj. 为…所爱的 n. 爱人
nephew	n. 侄子，外甥
aluminium	n. 铝
rarely	adv. 很少，难得
subsequent	adj. 随后的，后来的
charity	n. 慈善事业；施舍
itself	pron. 它自己；自身
clue	n. 线索，暗示，提示
jewish	adj. 犹太人的
current	adj. 当前的；通用的
journey	n. 旅行，旅程
sustain	v. 支撑；忍受；供养
enormous	adj. 巨大的，庞大的
bite	v. 咬；咬，叮，螫；剌穿
gift	n. 礼物，赠品；天赋
bullet	n. 枪弹，子弹，弹丸
history	n. 历史；个人经历
list	n. 表，目录 v. 列举
behave	v. 表现，举止；
new	adj. 新的；新近出现的
van	n. 大篷车，运货车
amount	n. 总数；数量；和
calculate	v. 计算；估计
generous	adj. 慷慨的；宽厚的
conventional	adj. 普通的；习惯的
early	adv. 早 adj. 早的，早期的
number	n. 数，数字；号码
hint	n. 暗示，示意；建议
fashionable	adj. 流行的，时髦的
tolerate	v. 忍受，容忍，宽恕
condense	v. 压缩，使缩短
technician	n. 技术员，技师
flash	n. 闪光 v. 闪，闪烁
flour	n. 面粉，粉；粉状物质
catch	v. 捉住；赶上；领会
purple	n. 紫色 adj. 紫的
feed	v. 喂（养）；吃饲料
league	n. 联合会；同盟，联盟
exert	v. 运用；尽（力）
finding	n. 发现；调查的结果
foreign	adj. 外国的；外来的
shave	v. 剃，刮
assume	v. 假定；承担；呈现
response	n. 响应；作答，回答
refine	v. 精炼，提纯
following	adj. 接着的；下列的
play	v. 玩，游戏；演奏
steamer	n. 轮船，汽船
lump	n. 团，块；肿块
prince	n. 王子；亲王
formation	n. 形成；构成；形成物
inward	adj. 内心的 adv. 向内
plentiful	adj. 丰富的，富裕的
mutual	adj. 相互的；共同的
insurance	n. 保险；保险费
humorous	adj. 富于幽默的，诙谐的
dissolve	v. 使溶解；解散
prior	adj. 在先的；优先的
farther	adv. 更远地 adj. 更远的
liner	n. 班船，班机
mist	n. 薄雾
abuse	v. 滥用；虐待 n. 滥用
exceedingly	adv. 极端地，非常
coil	n. （一）卷；线圈 v. 卷
foundation	n. 基础；地基；基金
wit	n. 智力，才智，智能
spin	v. 使旋转；纺 n. 旋转
noise	n. 喧闹声；响声；噪声
anticipate	v. 预料，预期；期望
masterpiece	n. 杰作，名著
illustration	n. 说明，图解；例证
recent	adj. 新近的，最近的
laundry	n. 洗衣房，洗衣店
compute	v. 计算，估计，估算
difficulty	adj. 困难；难事；困境
representative	adj. 代表性的 n. 代表
electricity	n. 电，电学；电流
past	adj. 过去的 n. 过去
alloy	n. 合金；（金属的）成色
temple	n. 圣堂，神殿，庙宇
feast	n. 盛宴；筵席；节日
invitation	n. 邀请，招待；请柬
group	n. 小组，群 v. 聚集
visual	adj. 视觉的，视力的
atmospheric	adj. 大气的；大气层的
annual	adj. 每年的 n. 年报
stranger	n. 陌生人；新来者
present	adj. 现在的 n. 目前
frog	n. 蛙
music	n. 音乐，乐曲；乐谱
simply	adv. 简单地；朴素地
heart	n. 心，内心；勇气
substitute	n. 代替人 v. 用…代替
easily	adv. 容易地
suspend	v. 吊，悬；推迟
burn	v. 烧，燃烧 n. 烧伤
workman	n. 工人，劳动者，工匠
leadership	n. 领导
jealous	adj. 妒忌的
can	n. 罐头，听头；容器
cotton	n. 棉；棉线；棉布
European	adj. 欧洲的 n. 欧洲人
explain	v. 解释；为…辩解
natural	adj. 自然界的；天然的
clean	adj. 清洁的；纯洁的
rebel	v. 造反 n. 造反者
enable	v. 使能够，使可能
evident	adj. 明显的，明白的
rain	n. 雨，雨水 v. 下雨
management	n. 管理；经营，处理
eighth	num. 第八 n. 八分之一
bread	n. 面包；食物，粮食
sorrow	n. 悲痛，悲哀，悲伤
cattle	n. 牛；牲口，家畜
inspect	v. 检查，审查；检阅
mental	adj. 精神的；智力的
mushroom	n. 蘑菇，菌类植物
review	v. 再检查 n. 复习
beautiful	adj. 美的，美丽的
descend	v. 下来，下降；下倾
Fahrenheit	n. 华氏温度
freedom	n. 自由；自主
grave	n. 坟墓 adj. 严重的
lumber	n. 木材；木料；制材
encounter	v. 遭遇，遇到 n. 遭遇
atmosphere	n. 气氛；大气；空气
toe	n. 脚趾；足尖
touch	v. 触摸；触动；感动 n. 触
troublesome	adj. 令人烦恼的；麻烦的
congratulation	n. 祝贺；祝贺词
package	n. 包裹，包，捆
part	n. 一部分；零件
credit	n. 信用贷款；信用
judge	n. 法官；裁判员
original	adj. 最初的；新颖的
decision	n. 决定，决心；果断
compose	v. 创作；组成，构成
rag	n. 破布，碎布，抹布
satellite	n. 人造卫星；卫星
transport	v. 运输 n. 运输
drawing	n. 图画，素描；绘图
protective	adj. 保护的，防护的
ago	adv. 以前
signature	n. 署名，签字，签名
primary	adj. 基本的；最初的
poem	n. 诗，韵文，诗体文
hear	v. 听见；听说；审讯
overall	n. 工装裤 adj. 全面的
freely	adv. 自由地；直率地
creature	n. 生物，动物
specify	v. 详细说明；指定
combine	v. 使结合；兼有
solar	adj. 太阳的，日光的
sort	n. 种类；类别 v. 整理
dishonour	n. 不光彩；丢脸的人
permit	v. 允许 n. 执照
magnificent	adj. 壮丽的；华丽的
drift	v. 漂流；漂泊 n. 趋势；流动
investigate	v. 调查
proper	adj. 适合的；合乎体统的
lame	adj. 跛的；瘸的，残废的
mechanical	adj. 机械的；力学的
vital	adj. 生命的；有生命力的
clumsy	adj. 笨拙的；愚笨的
relieve	v. 减轻；解除
describe	v. 形容；描写，描绘
author	n. 作者，作家
happy	adj. 快乐的；幸福的
glide	v. 滑动 n. 滑行
drain	v. 排去；放水 n. 耗竭
pen	n. 钢笔，自来水笔
fatigue	n. 疲劳，劳累
nonsense	n. 胡说，废话
absolute	adj. 纯粹的；绝对的
sack	n. 袋，麻袋；开除
apparatus	n. 器械，仪器；器官
next	adj. 紧接的；贴近的
grace	n. 优美；文雅；雅致
preface	n. 序言，前言，引语
tone	n. 音；腔调；声调
stove	n. 炉头；炉子
identical	adj. 完全相同的；同一的
adjective	n. 形容词
knee	n. 膝，膝盖，膝关节
artist	n. 艺术家，美术家
choke	v. 使窒息；塞满
regardless	adv. 不顾一切地
reader	n. 读者；读物，读本
horizontal	adj. 地平的；水平的
acceptable	adj. 可接受的，合意的
mail	n. 邮件 v. 邮寄
cloud	n. 云；云状物；阴影
busy	adj. 忙的；繁忙的
secretary	n. 秘书；书记；大臣
deadly	adj. 致命的；死一般的
harbour	n. 海港，港口 v. 庇护
bloom	n. 花；开花，开花期
retain	v. 保持，保留，保有
contest	v. 争夺，争取；辩驳
output	n. 产量；输出量；输出
railroad	n. 铁路
institution	n. 协会；制度，习俗
engine	n. 发动机，引擎；机车
flesh	n. 肉，肌肉；肉体
brother	n. 兄弟；同事，同胞
inch	n. 英寸
aeroplane	n. 飞机
coffee	n. 咖啡，咖啡茶
emit	v. 散发；发射；发表
as	conj. 当…的时候
elementary	adj. 基本的；初级的
editor	n. 编辑，编者，校订者
coin	n. 硬币 v. 铸造（硬币）
definite	adj. 明确的；肯定的
skim	v. 掠过，擦过；略读
tourist	n. 旅游者，观光者
flourish	v. 繁荣，茂盛，兴旺
taste	n. 味觉；品味
ending	n. 结尾，结局
confirm	v. 证实；肯定；批准
nearly	adv. 差不多
away	adv. 离开，远离；…去
puzzle	n. 难题；谜 v. 使迷惑
lawyer	n. 律师；法学家
precision	n. 精确，精密，精密度
debt	n. 债，债务；欠债
promote	v. 促进，发扬；提升
gasp	v. 气喘，喘息
publish	v. 出版；发表；公布
cubic	adj. 立方形的；立方的
smart	adj. 聪颖的，机灵的
floor	n. 地板；楼层
dispute	v. 争论，争执 n. 争论
blackboard	n. 黑板
install	v. 安装，设置
deceit	n. 欺骗，欺诈
forecast	n. 预测，预报 v. 预示
now	adv. 现在；立刻
believe	v. 相信；认为
mile	n. 英里
gap	n. 缺口；间隔；差距
occur	v. 发生；出现；存在
glove	n. 手套
graduate	n. 毕业生 v. 大学毕业
club	n. 〔职业体育的〕俱乐部；俱乐部；夜总会
fierce	adj. 凶猛的；狂热的
dump	v. 倾卸，倾倒；倾销
lag	v. 落后；走得慢
hammer	n. 锤，榔头 v. 锤击
congratulate	v. 祝贺，向…道喜
storage	n. 贮藏；贮藏量
guess	v. 猜测，推测 n. 猜测，推测
desirable	adj. 值得相望的；可取的
critic	n. 批评家；爱挑剔的人
bottom	n. 底，底部，根基
bud	n. 芽，萌芽；蓓蕾
Australia	n. 澳大利亚
resident	adj. 居住的 n. 居民
choose	v. 选择，挑选；情愿
meanwhile	adv. 同时，当时
exclude	v. 把…排除在外
convenience	n. 便利，方便；厕所
rank	n. 排，横行；社会阶层
nowadays	adv. 现今，现在
fall	v. 落下；跌倒；陷落
furious	adj. 狂怒的；狂暴的
tap	n. 轻叩 v. 轻叩
immediate	adj. 立即的；直接的
bruise	n. 青肿，伤痕；擦伤
be	v. 是；在
politics	n. 政治，政纲；政治学
define	v. 给…下定义；限定
heavily	adv. 重重地；大量地
pat	v. 轻拍 n. 轻拍
dose	n. 剂量，用量；一剂
operate	v. 操作；施行手术
observe	v. 看到；遵守；说
auxiliary	adj. 辅助的
proportion	n. 部分；比，比率
record	n. 记录；履历 v. 记录
groan	v. 哼，呻吟 n. 呻吟
faith	n. 信任，信心；信仰
meat	n. 肉
harden	v. 使变硬
particular	adj. 特定的；特殊的
arm	n. 臂；臂状物；武器
lip	n. 嘴唇
fable	n. 寓言；虚构的故事
excuse	v. 原谅；免除 n. 借口
discharge	v. 释放；排出 n. 释放
cellar	n. 地窑，地下室
noisy	adj. 喧闹的；嘈杂的
systematic	adj. 有系统的；有计划的
trail	n. 小径；痕迹 v. 跟踪
her	pron. （宾格）她 determiner.. 她的
rather	adv. 相当；宁可，宁愿
liquid	n. 液体 adj. 液体的
indirect	adj. 间接的；不坦率的
meantime	n. 其时，其间 adv. 当时
portion	n. 一部分；一份
dinner	n. 正餐，主餐；宴会
distribution	n. 分发，分配；分布
African	adj. 非洲的 n. 非洲人
emphasize	v. 强调，着重
kill	v. 杀死；扼杀；消磨
cough	v. 咳，咳嗽 n. 咳嗽
restraint	n. 抑制；遏制；克制
composition	n. 构成；作品；写作
porter	n. 搬运工人
verify	v. 证实，查证；证明
it	pron. 这，那，它
comb	n. 梳子 v. 梳理
conquest	n. 攻取，征服；克服
bristle	n. 短而硬的毛；鬃毛
especially	adv. 尤其；特别，格外
absent	adj. 不在场的；缺乏的
bottle	n. 瓶，酒瓶；一瓶
crush	v. 压碎，碾碎；镇压
delegation	n. 代表团
ourselves	pron. 我们自己
civilization	n. 文明，文化；开化
objective	adj. 客观的；无偏见的
sulphur	n. 硫（磺），硫黄
request	n. 请求，要求 v. 请求，要求
talent	n. 才能；天才；人才
physical	adj. 物质的；物理的
appliance	n. 用具，器具，器械
inspection	n. 检阅；检查，审查
bang	n. 巨响，枪声；猛击
reflect	v. 反射；反映；思考
happiness	n. 幸福，幸运；快乐
attention	n. 注意，留心；注意力
January	n. 一月
venture	n. 冒险 v. 敢于
input	n. 输入；投入的资金
roar	v. 吼叫；呼喊 n. 吼
faithful	adj. 忠诚的；如实的
monkey	n. 猴子，猿
behalf	n. 代表某人
operator	n. 接线员；操作人员
humble	adj. 谦逊的；地位低下的
manufacturer	n. 制造商；制造厂
mug	n. 大杯
goat	n. 山羊
democracy	n. 民主制；民主
represent	v. 代表；象征；描绘
accustom	v. 使习惯
city	n. 城市，都市
spoil	v. 损坏，糟蹋；宠坏
packet	n. 小包（裹），小捆
object	n. 物，物体；目的
rate	n. 比率；速度；价格
American	adj. 美洲的 n. 美国人
pull	v. 拉，拖 n. 拉，拉力
mixture	n. 混合；混合物
October	n. 十月
pigeon	n. 鸽子
conversely	adv. 相反地
multiply	v. 乘；使增加
divorce	n. 离婚，离异 v. 离婚
tray	n. 托盘，碟；（浅）盘
contrast	n. 对比，对照，悬殊
mad	adj. 发疯的；恼火的
sacrifice	n. 牺牲；献祭 v. 牺牲；献祭
various	adj. 各种各样的，不同的
stuff	n. 东西 v. 装，填，塞
rely	v. 依赖，依靠；信赖
diameter	n. 直径
boss	n. 老板，上司 v. 指挥
dying	adj. 垂死的；临终的
indeed	adv. 确实；真正地
ignorant	adj. 不知道的；无知的
occasionally	adv. 偶然；非经常地
decent	adj. 体面的；正派的
human	adj. 人的，人类的 n. 人
glitter	v. 闪闪发光 n. 闪光
receipt	n. 收条，收据；收到
adventure	n. 冒险；惊险活动
lover	n. 情人；情侣；爱好者
infant	n. 婴儿 adj. 婴儿的
muddy	adj. 多泥的，泥泞的
beast	n. 兽，野兽
faint	adj. 微弱的；虚弱的
alarm	n. 警报；惊恐，忧虑
convention	n. 习俗，惯例；公约
durable	adj. 耐久的，耐用的
bed	n. 床，床位；圃；河床
silent	adj. 寂静无声的；沉默的
dislike	v. 不喜爱，厌恶 n. 不喜爱，厌恶
greatly	adv. 大大地，非常
quotation	n. 引用；引文；报价单
pity	n. 遗憾；怜悯 v. 同情
border	n. 边，边缘；边界
panel	n. 专门小组；面，板
wrap	v. 裹，包，捆 n. 披肩
passage	n. 通路，通道；通过
waken	v. 醒来；弄醒
care	v. 介意；关心 n. 小心
major	adj. 较大的 n. 专业
organic	adj. 有机体的；器官的
easy	adj. 容易的；安逸的
improve	v. 改善；使更好
hi	int. 嗨（表示问候等）
tissue	n. 薄绢；薄纸；组织
vigorous	adj. 朝气蓬勃的
fancy	n. 想象力；设想；爱好
income	n. 收入；收益；进款
knot	n. （绳的）结；（树的）节
construction	n. 建造；建筑；建筑物
inquire	v. 打听，询问；调查
spark	n. 火花，火星
aside	adv. 在旁边，到旁边
stripe	n. 条纹，条子
meter	n. 计量器；计，表
frequent	adj. 时常发生的；经常的
pure	adj. 纯粹的；纯洁的
beyond	prep. 在…的那边
eager	adj. 渴望的，热切的
fox	n. 狐狸；狡猾的人
penny	n. （英）便士；（美）分
infer	v. 推论，推断；猜想
steam	n. 蒸汽 v. 蒸发；蒸
file	n. 档案 v. 把…归档
midnight	n. 午夜，子夜，夜半
scientific	adj. 科学（上）的
oil	n. 油；石油 v. 加油于
instruct	v. 指示；教；通知
protest	n. 抗议 v. 抗议
cancer	n. 癌，癌症，肿瘤
instantly	adv. 立即，即刻
Chinese	adj. 中国的 n. 中国人
remedy	n. 治疗；补救 v. 治疗；补救
good	adj. 好的；有本事的
method	n. 方法，办法；教学法
monthly	adj. 每月的 adv. 每月
dream	n. 梦；梦想 v. 做梦
load	v. 装；装满 n. 负载
fuel	n. 燃料 v. 给…加燃料
modern	adj. 现代的，近代的
common	adj. 普通的；共同的
recommend	v. 劝告；推荐，介绍
produce	v. 产生；生产；展现
definition	n. 定义，释义；定界
castle	n. 城堡；巨大建筑物
supreme	adj. 最高的；最大的
ask	v. 问；要求；邀请
dumb	adj. 哑的；无言的
pin	n. 针，饰针 v. 别住
attain	v. 获得；达到
curtain	n. 帘，窗帘；幕（布）
raise	v. 举起；引起；提高
fog	n. 雾；烟雾，尘雾
rotten	adj. 腐烂的，发臭的
mysterious	adj. 神秘的；难以理解的
diary	n. 日记，日记簿
survive	v. 幸免于；活下来
bicycle	n. 自行车，脚踏车
sausage	n. 香肠，腊肠
attack	v. 攻击，进攻 n. 攻击，进攻
saw	n. 锯子 v. 锯，锯开
indication	n. 指示；表示；表明
attempt	v. 尝试，试图 n. 企图
submarine	adj. 水下的 n. 潜水艇
revolution	n. 革命；旋转，绕转
overseas	adv. 海外 adj. 在海外的
oriental	adj. 东方的；东方国家的
for	prep. 给；为；因为
manufacture	v. 制造 n. 制造；产品
healthy	adj. 健康的；有益健康的
multiple	adj. 多的；多种的
cock	n. 公鸡；雄禽；旋塞
actress	n. 女演员
strap	n. 带子 v. 捆扎
economic	adj. 经济的，经济学的
solution	n. 解决，解答；溶解
barrel	n. 桶；圆筒；枪管
hand	n. 手；指针
partly	adv. 部分地，不完全地
paw	n. 脚爪，爪子
upset	v. 弄翻，打翻，倾覆
plunge	v. 使投入；使陷入
injury	n. 损害，伤害；受伤处
hopeless	adj. 没有希望的；绝望的
escape	v. 逃跑；逸出 n. 逃跑
philosophy	n. 哲学；哲理；人生观
thrive	v. 兴旺，繁荣，旺盛
fireman	n. 消防队员
awfully	adv. 令人畏惧的；很
golden	adj. 金色的；极好的
technical	adj. 技术的，工艺的
carrot	n. 胡萝卜
concerning	prep. 关于
lot	pron.. 许多，大量 n. 抽签，抓阄
unlikely	adj. 未必的，未必可能的
liar	n. 说谎的人
family	n. 家，家庭；家族
hay	n. 干草
stress	n. 压力；重音 v. 着重
many	det.. 许多的 pron. 许多人
goal	n. 目的；球门；得分
indefinite	adj. 不明确的；不定的
inner	adj. 内部的；内心的
bear	n. 熊；粗鲁的人
pretty	adj. 漂亮的，标致的
therefore	adv. 因此，所以
goose	n. 鹅；雌鹅
afford	v. 担负得起…；提供
pupil	n. 学生，小学生
dairy	n. 牛奶场 adj. 乳制品
boundary	n. 分界线，边界
afterward	adv. 后来，以后
fan	n. （运动等）狂热爱好者
election	n. 选举；当选
wheat	n. 小麦
plant	n. 植物；工厂 v. 栽种
page	n. 页
spite	3、释义:n. 不顾；恶意，怨恨 v. 刁难，欺侮
relationship	n. 关系；联系
grape	n. 葡萄；葡萄藤
restrain	v. 抑制，遏制；限制
dimension	n. 尺寸，尺度；面积
saucer	n. 茶托，浅碟
observer	n. 观察员，观测者
hero	n. 英雄；勇士；男主角
happen	v. 发生；碰巧，恰好
kick	v. 踢 n. 踢
jet	n. 喷气式飞机；喷嘴
chemistry	n. 化学
interaction	n. 相互作用；干扰
evil	n. 祸害；邪恶 adj. 坏的
sponsor	n. 发起者 v. 发起
gown	n. 长袍，长外衣
shot	n. 发射；弹丸；射门
gay	adj. 快乐的；鲜明的
obstacle	n. 障碍，妨害；障碍物
sometime	adv. 在某一时候；从前
satisfactory	adj. 令人满意的，良好的
particularly	adv. 特别，尤其，格外
distribute	v. 分发，分送；分布
reason	n. 理由；理性 v. 推理
cross	v. 穿过；使交叉
development	n. 发展；生长；开发
sour	adj. 酸的；脾气坏的
disadvantage	n. 不利，不利地位
flush	v. （脸）发红
minor	adj. 较小的；较次要的
canvas	n. 粗帆布；一块油画布
medical	adj. 医学的；内科的
economical	adj. 节约的；经济的
could	modal. 能，会，可以（can的过去式）
oppress	v. 压迫，压制；压抑
acute	adj. 敏锐的
Latin	adj. 拉丁的 n. 拉丁语
rough	adj. 表面不平的；粗略的
merchant	n. 商人；零售商
other	adj. 另外的；其余的
progressive	adj. 进步的；向前进的
heal	v. 治愈；使和解
competition	n. 竞争；比赛
court	n. 法院，法庭；庭院
drink	v. 饮 n. 饮料
ball	n. 球；球状物；舞会
organize	v. 组织；编组
remain	v. 剩下，余留；保持
chart	n. 图，图表；海图
interference	n. 干涉，干预；阻碍
dock	n. 船坞；码头
anchor	n. 锚 v. 抛锚，停泊
breast	n. 乳房；胸脯，胸膛
glance	v. 看一下 n. 一瞥
announce	v. 宣布，宣告，发表
join	v. 参加；连接
poor	adj. 贫穷的；贫乏的
reference	n. 参考；提及
delete	v. 删除；擦掉
digest	v. 消化；领会 n. 文摘
great	adj. 大的；伟大的
nut	n. 坚果，干果；螺母
gun	n. 枪，炮，手枪
urge	v. 催促；推进 n. 冲动
but	conj. 但是，可是
ought	modal. 应当，应该
impossible	adj. 不可能的，办不到的
real	adj. 真的；现实的
score	n. 得分，比数；成绩
devise	v. 设计，发明
equipment	n. 装备，设备；配备
luck	n. 好运，幸运；运气
absolutely	adv. 完全地；绝对地
queue	n. 行列 v. 排队等候
rural	adj. 农村的，田园的
office	n. 办公室；处，局，社
sore	adj. 痛的；恼火的 n. 疮
confuse	v. 使混乱，混淆
neighbourhood	n. 附近地区（的居民）；邻近
Japanese	adj. 日本的 n. 日本人
fulfil	v. 履行；满足；完成
chocolate	n. 巧克力；巧克力糖
chicken	n. 鸡；鸡肉
limited	adj. 有限的
kilometre	n. 千米，公里
separate	adj. 分离的；个别的
campus	n. 校园，学校场地
blanket	n. 毛毯，毯子，羊毛毯
frequently	adv. 时常，常常
thermometer	n. 温度计，寒暑表
undoubtedly	adv. 无容置疑，肯定地
market	n. 市场；集市；销路
big	adj. 大的，巨大的
half	n. 半，一半 adj. 一半的
blade	n. 刀刃，刀片；叶片
afraid	adj. 害怕的；担心的
cinema	n. 电影院；电影，影片
stiff	adj. 硬的；僵直的
librarian	n. 图书馆馆长
lamp	n. 灯
hostile	adj. 不友善的；敌方的
line	n. 线；线条；排；路线
extensive	adj. 广阔的；广泛的
bet	v. 打赌 n. 打赌
prove	v. 证明；结果是
sway	v. 摇动
locomotive	n. 火车头，机车
along	prep. 沿着 adv. 向前
oven	n. 炉，灶；烘箱
bury	v. 埋葬，葬；埋藏
arrow	n. 箭；箭状物；〔指示方向的〕箭号，箭头（符号）
green	adj. 绿色的 n. 绿色
logic	n. 逻辑，推理；逻辑性
fluid	n. 流体，液体
press	v. 压，按；按，揿；催促
firm	n. 商行，商号，公司
funeral	n. 葬礼，丧礼，丧葬
compile	v. 编辑，编制，搜集
grey	adj. 灰色的 n. 灰色
claw	n. 爪，脚爪，螯
fluent	adj. 流利的，流畅的
prominent	adj. 突出的；凸起的
bitterly	adv. 苦苦地；悲痛地
dissatisfy	v. 使不满，使不平
embrace	v. 拥抱；包括
defence	n. 防御；防务；辩护
trade	n. 贸易；职业 v. 交易
owe	v. 欠；应把…归功于
gray	adj. 灰色的 n. 灰色
digital	adj. 数字的，计数的
gradually	adv. 逐渐地，逐步地
ax	n. 斧子
estimate	v. 估计，评价 n. 估计
avoid	v. 避免；躲开
acceleration	n. 加速；加速度
also	adv. 而且，还；亦，也
subway	n. 地道；地下铁路
circumference	n. 圆周，周长，圆周线
seek	v. 寻找，探索；试图
require	v. 需要；要求，命令
bounce	v. 反跳，弹起；跳起
minister	n. 部长，大臣；公使
miracle	n. 奇迹，令人惊奇的人
clothe	v. 给…穿衣服
newly	adv. 新近，最近
confidence	n. 信任；信赖；信心
lack	n. 缺乏，不足 v. 缺乏，不足
bureau	n. 局，司，处；社，所
detection	n. 察觉，发觉；侦察
jury	n. 陪审团；评奖团
difference	n. 差别；差；分歧
hope	v. 希望 n. 希望
grant	n. 授给物 v. 授予
insufficient	adj. 不足的；不适当的
cheerful	adj. 快乐的，愉快的
committee	n. 委员会；全体委员
east	n. 东；东部 adv. 在东方
pronunciation	n. 发音，发音法
photo	n. 照片，相片
occupation	n. 职业；占领，占据
document	n. 公文，文件；证件
popular	adj. 流行的；民众的
resume	v. 重新开始；恢复
eyesight	n. 视力，目力
canal	n. 运河；沟渠；管
obviously	adv. 明显地，显然地
please	v. 使高兴，请满意
breeze	n. 微风，和风
mechanic	n. 技工，机械，机修工
beside	prep. 在…旁边
lid	n. 盖子，盖，囊盖
percent	adj. 百分之…
Englishman	n. 英国男子
mature	adj. 成熟的 v. 使成熟
basketball	n. 篮球运动；篮球
orbit	n. 运行轨道 v. 环绕
govern	v. 统治，治理；支配
expose	v. 使暴露；揭露
nod	v. 点（头）；点头表示
ash	n. 灰，灰末；骨灰
privilege	n. 特权，优惠
grocer	n. 食品商；杂货商
numerous	adj. 为数众多的；许多
swift	adj. 快的；反应快的
arise	v. 出现；由…引起
foremost	adj. 最初的；第一流的
wage	v. 开展（运动）
implication	n. 含义，暗示，暗指
childish	adj. 孩子的；幼稚的
name	n. 名字；名誉 v. 说出
prefer	v. 更喜欢
exact	adj. 确切的；精确的
often	adv. 经常，常常
residence	n. 居住；驻扎；住处
flood	n. 洪水 v. 淹没
generation	n. 一代，一代人；产生
permanent	adj. 永久的；持久的
genius	n. 天才，天赋，天资
desert	n. 沙漠 v. 离弃；擅离
nerve	n. 神经；勇敢，胆量
northern	adj. 北方的，北部的
specialize	v. 成为…专家；专攻
emergency	n. 紧急情况，突然事件
hen	n. 母鸡；雌禽
act	v. 行动；见效 n. 行为
one	num. 一 pron. 一个人
argument	n. 争论，辩论；理由
painter	n. 画家，绘画者；漆工
division	n. 分，分配；除法
burst	v. 使爆裂 n. 爆炸
closely	adv. 紧密地；接近地
church	n. 教堂，礼拜堂；教会
track	n. 行踪；路径；轨道
chase	n. 追逐，追赶；追求
note	n. 笔记；便条；注释
attract	v. 吸引；引起……的兴趣；诱惑
both	pron. 两者（都）
brilliant	adj. 光辉的；卓越的
consume	v. 消耗，消费；消灭
axis	n. 轴，轴线；中心线
plastic	adj. 可塑的 n. 塑料
relation	n. 关系，联系；家属
succession	n. 连续；继任，继承
weaken	v. 削弱
officer	n. 官员；干事；军官
keep	v. 保持；坚持
electronics	n. 电子学
optimistic	adj. 乐观的；乐观主义的
permission	n. 允许，许可，同意
brick	n. 砖，砖块；砖状物
loose	adj. 松的；宽松的
welfare	n. 幸福；福利
paper	n. 纸；官方文件；文章
former	adj. 在前的 n. 前者
truth	n. 事实；真理；真实性
impose	v. 把…强加；征（税）
neglect	v. 疏忽；忽视，忽略
harm	n. 伤害，损害 v. 损害
pie	n. （西点）馅饼
pioneer	n. 拓荒者；先驱者
mystery	n. 神秘；神秘的事物
determination	n. 决心；决定；确定
reply	v. 回答，答复 n. 回答，答复
department	n. 部，司，局，处，系
cake	n. 饼，糕，蛋糕
parcel	n. 包裹，小包，邮包
status	n. 地位，身分
edge	n. 边缘，边；刀口
refusal	n. 拒绝
kettle	n. 水壶；锅
positive	adj. 积极的；确定的
gaze	v. 凝视，盯，注视
close	v. 关，闭；结束
presence	n. 出席，到场；在
production	n. 生产；总产量
foolish	adj. 愚蠢的；鲁莽的
found	v. 创立，创办；建立
whisper	v. 低声地讲
gather	v. 聚集；集合；收集
captive	n. 俘虏，被监禁的人
colonel	n. 陆军上校；中校
hateful	adj. 可恨的，可恶的
routine	n. 例行公事 adj. 日常的
mess	n. 混乱，混杂，肮脏
pronounce	v. 发…的音；宣布
correspond	v. 相符合；相当
blank	adj. 空白的 n. 空白
consequence	n. 结果，后果
hello	int. 喂
slit	n. 裂缝 v. 切开，撕开
chalk	n. 白垩；粉笔
midday	n. 正午，中午
despise	v. 鄙视，蔑视
humour	n. 幽默，诙谐，幽默感
volt	n. 伏特，伏
roller	n. 滚筒，滚轴；滚柱
navigation	n. 航行；航海术
establishment	n. 建立，设立，确立
needle	n. 针；编织针
torch	n. 手电筒；火炬，火把
another	det. 再一个的；别的
bubble	n. 泡 v. 冒泡，沸腾
vary	v. 改变；使多样化
finger	n. 手指；指状物
charming	adj. 迷人的，可爱的
abstract	adj. 抽象的 n. 摘要
endless	adj. 无止境的
fast	adj. 快的；偏快的 adv. 快
painful	adj. 使痛的；费力的
import	n. 输入，进口 v. 输入，进口
additional	adj. 附加的，追加的
die	v. 死，死亡；灭亡
abnormal	adj. 不正常的；变态的
peasant	n. 农民
hydrogen	n. 氢
heel	n. 脚后跟，踵；中文释义: 后跟
base	n. 基础，底层；基地
uncover	v. 揭开…的盖子
interior	adj. 内的；内地的内部 n. 内部
chain	n. 链，链条
slippery	adj. 滑的，使人滑跤的
historical	adj. 历史的，有关历史的
mechanically	adv. 机械地
myself	pron. 我自己；我亲自
signal	n. 信号 v. 发信号
thoughtful	adj. 体贴的；沉思的
discipline	n. 纪律；训练 v. 训练
draft	n. 草稿；汇票 v. 起草
performance	n. 演出；表现；履行
workshop	n. 车间，工场；创作室
listener	n. 听众之一；听者
paint	v. （给…）上油漆；画，绘画
generate	v. 发生；引起
resist	v. 抵制；抵抗
sensitive	adj. 敏感的；灵敏的
perform	v. 演出；履行，执行
fertilizer	n. 肥料
reinforce	v. 加强；增援，支援
recognize	v. 认识，认出；承认
okay	convention. 对，好
police	n. 警察；警察当局
forth	adv. 向前；向外，往外
reproduce	v. 繁殖，生殖
framework	n. 框架，构架，结构
gracious	adj. 有礼貌的；仁慈的
screw	n. 螺旋，螺丝 v. 拧紧
pause	n. 中止，暂停 v. 中止，暂停
cheese	n. 奶酪，干酪
sleeve	n. 袖子，袖套
donkey	n. 驴
vacant	adj. 空的；未被占用的
expense	n. 花费，消费；费用
lead	n. 铅，铅制品
friendship	n. 友谊；友好
bare	adj. 赤裸的；仅仅的
athlete	n. 运动员；田径运动员
regarding	prep. 关于
commonly	adv. 普通地，一般地
magic	n. 魔法，巫术；戏法
cook	v. 烹调，煮；烧菜
intend	v. 想要，打算；意指
powder	n. 粉末；药粉；火药
pitch	n. 沥青
ninth	num. 第九 n. 九分之一
filter	v. 过滤 n. 过滤器
deal	n. 买卖；待遇
collect	v. 收集；收款
conjunction	n. 接合，连接；连接词
bond	n. 债券，公债；联结，联系
jail	n. 监狱 v. 监禁
arrangement	n. 安排；整理，排列
competent	adj. 有能力的
section	n. 切片；一段；部分，部门
confusion	n. 混乱；骚乱；混淆
mercy	n. 仁慈，慈悲，恩惠
successive	adj. 连续的；接连的
pour	v. 灌，倒；倾泻
couple	n. 夫妇；（一）对；几个
mention	v. 提及，说起 n. 提及，说起
stake	n. 赌金；桩；奖品
decide	v. 决定，决心；解决
conscious	adj. 意识到的；有意的
companion	n. 同伴；共事者；伴侣
football	n. 足球
careful	adj. 仔细的；细致的
receive	v. 得到；收到；接待
nowhere	adv. 任何地方都不
settle	v. 安排；安放；调停
sign	n. 符号；招牌 v. 签名
hide	v. 把…藏起来；隐瞒
architecture	n. 建筑式样；建筑学
daylight	n. 白昼，日光；黎明
entitle	v. 给…权利（或资格）
legend	n. 传说，传奇
appropriate	adj. 适当的，恰当的
crust	n. 面包皮；硬外皮
existence	n. 存在，实在；生活
territory	n. 领土，版图；领域
outlet	n. 出口；出路；排遣
compare	v. 比较，对照；比作
emotional	adj. 感情的，情绪的
subtract	v. 减，减去，去掉
Italian	adj. 意大利的 n. 意大利人
density	n. 密集，稠密；密度；〔物质的〕密度
drunk	adj. 醉的；陶醉的
magazine	n. 杂志，期刊
patience	n. 忍耐，容忍，耐心
direction	n. 方向，方位；指导
job	n. 职业；工作；零活
practise	v. 练习，实习，训练
slope	n. 倾斜；斜面 v. 倾斜
ankle	n. 踝，踝节部
dead	adj. 死的，无生命的
sphere	n. 球，圆体；范围
me	pron. （宾格）我
develop	v. 发展；形成；开发
immense	adj. 巨大的；极好的
rabbit	n. 兔子
outset	n. 开始，开端
disguise	v. 隐瞒，掩埋 n. 假装
brisk	adj. 活泼的；清新的
keyboard	n. 键盘
onion	n. 洋葱，洋葱头
energy	n. 活力；精力；能；能量
shriek	v. 尖声喊叫 n. 尖叫声
elaborate	adj. 复杂的；精心制作的
horse	n. 马；马科动物
requirement	n. 需要；要求
grain	n. 谷物，谷粒；颗粒
moment	n. 时刻；片刻，瞬间
occurrence	n. 发生，出现；事件
deed	n. 行为；功绩；劣迹；契约
owl	n. 猫头鹰，枭
isolate	v. 使隔离，使孤立
collection	n. 收藏品；搜集，收集
container	n. 容器；集装箱
knife	n. 小刀，刀，餐刀
ignore	v. 不顾，不理，忽视
sufficient	adj. 足够的，充分的
proposal	n. 提议，建议；求婚
milk	n. 乳，牛奶 v. 挤（奶）
exercise	n. 锻炼；训练 v. 练习
shortly	adv. 立刻；简短地
retire	v. 退休；退职；就寝
communist	n. 共产党员
supplement	n. 增补物，补充物 v. 增补，补充
betray	v. 背叛；辜负；泄漏
meal	n. 膳食，一餐
August	n. 八月
during	prep. 在…期间
brief	adj. 短暂的；简短的
astonish	v. 使惊讶，使吃惊
security	n. 安全工作；安全；安全感
tremble	v. 发抖，哆嗦；摇动
inferior	adj. 下等的；劣等的
marble	n. 大理石
inventor	n. 发明者；发明家
metal	n. 金属，金属制品
efficiency	n. 效率；效能；功效
high	adj. 高的；高级的 adv. 高
born	adj. 天生的；出生的
destroy	v. 破坏；消灭；打破
heating	n. 加热，供暖
comprise	v. 包含，包括；构成
ease	n. 容易；舒适 v. 缓和
liberation	n. 解放
wholly	adv. 完全地，全部
split	v. 被劈开；劈开
basin	n. 洗脸盆；盆；盆地
weed	n. 杂草，野草 v. 除草
calm	adj. 静的，平静的
sweater	n. 厚运动衫，毛线衫
shear	v. 剪；剥夺
swallow	n. 燕子
greet	v. 问候，招呼；反应
practical	adj. 实践的；实用的
basically	adv. 基本上
conductor	n. 售票员；（乐队）指挥
naturally	adv. 自然地；天然地
undertake	v. 从事；承担；保证
despair	n. 绝望 v. 绝望
nose	n. 鼻子
morning	n. 早晨，上午
mild	adj. 温柔的；和缓的
interrupt	v. 打断，打扰；中止
period	n. 时期；学时；句号
loaf	n. 一条面包，一个面包
resistance	n. 抵抗；抵制；抵抗力
enforce	v. 实施，执行；强制
definitely	adv. 一定地，明确地
flow	v. 流动；飘垂；涨潮
grow	v. 增长；生长
federal	adj. 联邦的；联盟的
agent	n. 代理人，代理商
lively	adj. 活泼的
utility	n. 效用，有用，实用
establish	v. 建立，设立；确立
distinct	adj. 与其它不同的
interval	n. 间隔；休息；间距
motor	n. 发动机；机动车
brute	n. 禽兽，畜生
account	n. 记述；解释；账目
gramme	n. 克（重量单位）
absence	n. 缺席，不在场；缺乏
operation	n. 手术；操作；运算
crash	v. 碰撞，坠落 n. 碰撞
beef	n. 牛肉；菜牛
heap	n. （一）堆；大量
deposit	v. 使沉淀；存放
displease	v. 使不愉快，使生气
appoint	v. 任命，委任；约定
bound	adj. 一定的；有义务的
merely	adv. 仅仅，只不过
besides	adv,prep. 而且；除…之外
park	n. 公园；停车场
nineteen	num. 十九，十九个
depress	v. 使沮丧；按下
cry	v. 哭，哭泣；叫喊
into	prep. 进，入；进入到
maths	n. （英）数学
significance	n. 意义，意味；重要性
bag	n. 袋，包，钱包，背包
crack	n. 裂缝，裂纹 v. 爆裂
certainty	n. 必然；肯定
lazy	adj. 懒惰的，懒散的
effect	n. 结果；效果，效力
hurt	v. 使受伤；使痛心
block	n. 街区 v. 堵塞，拦阻
hillside	n. （小山）山腰，山坡
specialist	n. 专家
worm	n. 虫，蠕虫
dictionary	n. 词典，字典
cabbage	n. 洋白菜，卷心菜
date	n. 日期 v. 注…日期
warmth	n. 暖和，温暖；热烈
latter	adj. （两者中）后者的
indoors	adv. 在室内，在屋里
helicopter	n. 直升机
leg	n. 腿，腿部
quality	n. 质量；品质；特性
command	v. 命令；指挥；控制
preference	n. 偏爱；优先；优先权
actually	adv. 实际上；竟然
secondary	adj. 第二的；次要的
academy	n. 专科院校；私立中学
report	v. 报告；汇报
magnet	n. 磁铁，磁石，磁体
none	pron. 没有人；没有一点 adv. 毫不
large	adj. 大的；巨大的
corporation	n. 公司，企业；社团
thorough	adj. 彻底的；详尽的
chin	n. 颏，下巴
nearby	adj. 附近的 adv. 在附近
react	v. 作出反应；有影响
map	n. 地图；图；天体图
vinegar	n. 醋
article	n. 文章；物品；条款
angle	n. 角，角度
zone	n. 地区，区域，范围
rail	n. 横条，横杆；铁轨
holy	adj. 神圣的；圣洁的
copy	n. 抄件 v. 抄写，复制
elephant	n. 象
hasten	v. 催促；赶紧
helpless	adj. 无助的；无能的
mutter	v. 轻声低语；抱怨
musical	adj. 音乐的
silk	n. 蚕丝，丝，丝织品
agency	n. 经办；代理；代理处
conflict	n. 争论；冲突；斗争
anything	pron. 任何事物；一切
outskirt	n. 外边，郊区
peculiar	adj. 特有的；特别的
index	n. 索引；指数；指标
anxious	adj. 忧虑的；渴望的
likely	adj. 可能的 adv. 很可能
mat	n. 席子；草席；垫子
cushion	n. 垫子，坐垫，靠垫
flock	n. 羊群，群；大量
mislead	v. 将…引入歧途，误导
vague	adj. 模糊的；含糊的
generator	n. 发电机；发生者
concrete	n. 混凝土；具体物
scatter	v. 撒；散播；使消散
brake	n. 闸，刹车 v. 制动
brain	n. 脑，脑髓；脑力
commander	n. 司令官，指挥员
arrest	v. 逮捕，拘留；阻止
limb	n. 肢，臂，翼；树枝
highway	n. 公路；大路
quite	adv. 完全；相当；的确
disposal	n. 丢掉，处理，销毁
analyse	v. 分析，分解，解析
flight	n. 航班；飞行；逃跑
consistent	adj. 坚持的，一贯的
repetition	n. 重复，反复
inform	v. 通知，向…报告
flat	adj. 平的，扁平的
idea	n. 想法；思想；意见
blue	adj. 蓝色的 n. 蓝色
married	adj. 已婚的；婚姻的
kitchen	n. 厨房，灶间
bridge	n. 桥，桥梁；桥牌
spare	v. 抽出；拨出；留出；匀出 adj. 多余的
deepen	v. 加深；深化
anyone	pron. 任何人
envelope	n. 信封；封套；封皮
glare	v. 瞪眼 n. 瞪眼
fault	n. 缺点；过失；故障
calculation	n. 计算，计算结果
driver	n. 驾驶员，司机
airport	n. 机场，航空站
intermediate	adj. 中级的；中间的
location	n. 位置，场所
unlike	adj. 不同的 prep. 不象…
detect	v. 察觉，发觉；侦察
fresh	adj. 新的；新鲜的
chance	n. 机会，机遇；可能性
cement	n. 水泥；胶泥 v. 粘结
release	v. 释放；放松；发表
extra	adj. 额外的 adv. 特别地
drill	n. 钻头；操练 v. 钻孔
accessary	n. 同谋，从犯
dwelling	n. 住处，寓所
hardly	adv. 几乎不，简直不
dance	v. 跳舞；摇晃 n. 舞
atomic	adj. 原子的；原子能的
omit	v. 省略，省去；遗漏
neck	n. 颈，脖子
lady	n. 女士，夫人；贵妇人
announcer	n. 播音员
engineering	n. 工程；工程学
formula	n. 公式，式
law	n. 法律；法令；法则
lieutenant	n. 陆军中尉；副职官员
dependent	adj. 依靠的，依赖的
utmost	adj. 最大的 n. 极限
begin	v. 开始
cooperate	v. 合作，协作；配合
rush	v. 冲，奔；催促
grieve	v. 悲痛；使悲痛
gymnasium	n. 体育馆，健身房
brim	n. 边，边缘；帽沿
variety	n. 多样化；种类；变种
construct	v. 建造；建设；构筑
ant	n. 蚂蚁
lovely	adj. 可爱的；令人愉快的
principle	n. 原则，原理
shelter	n. 隐蔽处；掩蔽，庇护
uniform	adj. 一样的 n. 制服
promise	n. 诺言 v. 允诺
handkerchief	n. 手帕
international	adj. 国际的，世界（性）的
shade	n. 荫；遮光物 v. 荫蔽
country	n. 国家，国土；农村
punctual	adj. 严守时刻的；准时的
bend	v. 使弯曲；弯曲
diligent	adj. 勤勉的，勤奋的
learned	adj. 有学问的；学术上的
prescribe	v. 开处（方）；命令
gum	n. 口香糖；树胶
lock	n. 锁 v. 锁上，锁住
relativity	n. 相对性；相对论
moon	n. 月球，月亮；卫星
internal	adj. 国内的；内的
tale	n. 故事；传说
accent	n. 口音，腔调；重音
say	v. 比如说[用于举例]
brandy	n. 白兰地酒
meaning	n. 意义，意思；意图
peaceful	adj. 安静的；和平的
bomb	n. 炸弹 v. 轰炸
fry	v. 油煎，油炸，油炒
lessen	v. 减少，减轻；缩小
finance	n. 财政，金融；财源
maintenance	n. 维修；维持，保持
squeeze	v. 压；挤；捏；榨；压榨
hill	n. 小山，山岗；丘陵
tense	n. 时态，时
fare	n. 车费，船费，票价
tend	v. 照管，照料，护理
passion	n. 强烈的情感，激情；强烈的爱好，热爱
brand	n. 品牌；烙印 v. 铭刻
temptation	n. 诱惑，引诱
correction	n. 改正，纠正，修改
cease	v. 停止，停息 n. 停止，停息
shed	v. 流出；散发；脱落
America	n. 美洲；美国
directly	adv. 直接地；立即
camera	n. 照相机，摄影机
analysis	n. 分析，分解，解析
intentional	adj. 故意的，有意识的
jazz	n. 爵士音乐，爵士舞曲
unity	n. 单一；统一；团结
trial	n. 审判；试，试验
beggar	n. 乞丐，穷人
amongst	prep. 在…之中（among）
colony	n. 殖民地；侨居地
north	n. 北，北方 adj. 北方的
synthetic	adj. 综合的；合成的
strain	v. 拉紧；尽力
funny	adj. 滑稽的；古怪的
camp	n. 野营，营地，兵营
circuit	n. 环行；电路
arrange	v. 筹备；整理
button	n. 扣子；按钮 v. 扣紧
classical	adj. 古典的；经典的
consequently	adv. 因此，因而，所以
reservoir	n. 水库；蓄水池
vision	n. 视力；想象力；梦幻
Friday	n. 星期五
headline	n. 大字标题；新闻提要
product	n. 产品；产物；（乘）积
flexible	adj. 易弯曲的；灵活的
ridge	n. 岭，山脉；脊；垄
objection	n. 反对，异议；不喜欢
bucket	n. 水桶；吊桶；铲斗
need	v. 需要
exceed	v. 超过，胜过；超出
official	adj. 官员的；官方的
obvious	adj. 明显的，显而易见的
leave	v. 离去
wrist	n. 腕，腕关节
hence	adv. 因此，所以；今后；今后
journalist	n. 记者，新闻工作者
profit	n. 利润；益处 v. 得益
compel	v. 强迫，迫使屈服
marine	adj. 海的；海上的
cable	n. 缆，索；电缆；电报
key	n. 钥匙；键；答案
rear	n. 后部，后面；背面
birth	n. 分娩，出生；出身
much	adv. 非常，很 det. 许多的
pardon	n. 原谅；赦免 v. 原谅
phrase	n. 短语；习惯用语
pan	n. 平底锅；烤盘
jewel	n. 宝石；宝石饰物
similar	adj. 相似的，类似的
sword	n. 剑，刀
wander	v. 漫游；迷路；离题
frighten	v. 使惊恐，吓唬
citizen	n. 公民；市民，居民
I	pron. （主格）我
weakness	n. 弱点；虚弱；软弱
exchange	v. 交换；交流 n. 交换
witness	n. 证据；证人 v. 目击
Japan	n. 日本，日本国
picture	n. 画，图片 v. 画
cabin	n. 小屋；船舱；机舱
minute	n. 分，分钟；一会儿
achieve	v. 完成，实现；达到
characteristic	adj. 特有的 n. 特性
semiconductor	n. 半导体
minus	adj. 负面的；使显得有缺陷的 prep. 减（去）
silly	adj. 傻的，愚蠢的
hungry	adj. 饥饿的；渴望的
odd	adj. 奇数的；单只的
traffic	n. 交通，通行；交通量
unconscious	adj. 不省人事的
reading	n. 读书；读，阅读
carbon	n. 碳
senate	n. 参议院，上院
physician	n. 医生，内科医生
proportional	adj. 比例的；相称的
pace	n. 步，步速 v. 踱步
harness	v. 控制[利用]〔自然力等〕 n. 马具，挽具
suspect	v. 怀疑；疑心
license	n. 许可；执照 v. 准许
little	adj. 小的；少；幼小的
accelerate	v. （使）加快；促进
steep	adj. 险峻的，陡峭的
Africa	n. 非洲
organism	n. 生物体；有机体
county	n. 英国的郡，美国的县
globe	n. 地球，世界；地球仪
food	n. 食物，食品；养料，精神食粮
machine	n. 机器；机械
bore	v. 使厌烦；钻，挖
measure	v. 量，测量 n. 掂出某人的分量
reform	v. 改革，改良 n. 改革，改良
radius	n. 半径
fist	n. 拳（头）
nuisance	n. 讨厌的人（东西）
distinction	n. 差别，不同，区分
mosquito	n. 蚊子
typewriter	n. 打字机
accordance	n. 按照某事物
plus	prep. 加，加上 adj. 正的
policeman	n. 警察
Christmas	n. 圣诞节
interest	n. 兴趣；利益；利息
greenhouse	n. 温室，玻璃暖房
farewell	int. 再会 n. 告别
him	pron. （宾格）他
shelf	n. 搁板，架子
later	adv. 后来；过一会儿
fashion	n. 风尚；方式
daily	adj. 每日的 n. 日报
outside	n. 外部；外表 adj. 外部的
principal	adj. 主要的 n. 负责人
mine	pron. 我的
farmer	n. 农民，农夫；农场主
alter	v. 改变，变更；改做
Asia	n. 亚洲
twist	v. 捻；拧 n. 扭弯
playground	n. 操场，运动场
guidance	n. 引导，指导，领导
evaporate	v. 使蒸发
upright	adj. 垂直的；正直的
honour	n. 光荣；尊敬，敬意
rescue	v. 营救，解救，救援 n. 营救，解救，救援
evolution	n. 进化，演化；发展
stocking	n. 长（筒）袜
instrument	n. 工具；仪器；乐器
nice	adj. 美好的，令人愉快的
faculty	n. 系，科；才能，能力
auto	n. （口语）汽车
phone	n. 电话，电话机
preserve	v. 保护；保存；腌渍
undo	v. 解开，打开；取消
liver	n. 肝；肝脏
distance	n. 距离，间距；远处
due	adj. 预期的；应给的
cat	n. 猫，；猫科动物
capacity	n. 容量；能力
offer	v. 提供；提出 n. 提供
conference	n. 会议，讨论会
embarrass	v. 使窘迫，使为难
body	n. 身体；尸体；主体
holiday	n. 假期；假日，节日
glass	n. 玻璃；玻璃杯
royal	adj. 王的；皇家的
wave	n. 波；波涛 v. 波动，挥动，摆动
different	adj. 差异的；各种的
cut	v. 切，割，剪；减少
praise	n. 赞扬，赞美 v. 赞扬
monitor	n. 班长；监视器
dawn	n. 黎明；开端 v. 破晓
oar	n. 浆，橹
kneel	v. 跪，跪下，跪着
ordinary	adj. 平常的；平凡的
postage	n. 邮费，邮资
component	n. 组成部分；成分；组件
hit	v. 打；碰撞 n. 击
cheer	v. 使振作；欢呼
pass	v. 经过；通过；度过
level	n. 水平面 adj. 水平的
anywhere	adv. 在什么地方
affect	v. 影响；感动
deer	 n. 鹿
every	 det. 每一的；每隔…的
a	 art. 一（个）；每一（个）
bar	 n. 酒吧间；条，杆；栅
plenty	 pron. 丰富，充足，大量
baggage	 n. 行李
pint	 n. 品脱
reserve	 v. 预定；储备，保留
fly	 n. 蝇，苍蝇 v. 飞行
friend	 n. 朋友，友人
any	 adj. 什么，一些；任何的
expand	 v. 扩大；使膨胀
nurse	 n. 护士；保姆 v. 看护
toilet	 n. 厕所，盥洗室，浴室
creep	 v. 爬行；缓慢地行进
prompt	 adj. 及时的 v. 敦促
goods	 n. 货物；商品
career	 n. 生涯，职业；经历
museum	 n. 博物馆；展览馆
coast	 n. 海岸，海滨（地区）
diamond	 n. 金钢石，钻石；菱形
increasingly	 adv. 日益，越来越多地
spill	 v. 使溢出
comprehension	 n. 理解，理解力；领悟
consciousness	 n. 意识，觉悟；知觉
chest	 n. 胸腔，胸膛；箱子
otherwise	 adv. 否则；要不然
movement	 n. 动作，活动；移动
bowl	 n. 碗，钵；碗状物
bat	 n. 球拍；蝙蝠
somewhat	 adv. 有点
ancestor	 n. 祖宗，祖先
liberal	 adj. 心胸宽大的；慷慨的
far	 adj. 远的 adv. 远，遥远
battle	 n. 战役；斗争 v. 作战
tropical	 adj. 热带的
molecule	 n. 分子，克分子
general	 adj. 总的；一般的 n. 将军
gentle	 adj. 和蔼的；轻柔的
motion	 n. 运动；手势；提议
however	 adv. 然而；不管怎样
float	 v. 漂浮；使漂浮
adjust	 v. 调整，调节
drama	 n. 戏剧
circular	 adj. 圆的；循环的
financial	 adj. 财政的，金融的
above	 prep. 在…上面；高于
enthusiastic	 adj. 热情的，热心的
landlord	 n. 地主；房东；店主
volcano	 n. 火山
convey	 v. 传送；运送
hard	 adj. 硬的；困难的
microphone	 n. 话筒，麦克风
proud	 adj. 骄傲的；自负的〔含贬义〕；自豪的
gently	 adv. 有礼貌地；柔和地
curl	 n. 卷毛；螺旋 v. 卷曲
gloomy	 adj. 黑暗的；令人沮丧的
flavour	 n. 味，味道；风味
loud	 adj. 响亮的；吵闹的
manner	 n. 方式；态度；礼貌
psychological	 adj. 心理的，心理学的
passive	 adj. 被动的；消极的
tender	 adj. 嫩的；脆弱的
dry	 adj. 干的，干燥的
mute	 adj. 缄默的 n. 哑巴
dorm	 n. 宿舍
discard	 v. 丢弃，抛弃，遗弃
change	 n. 改变，变化；零钱
outstanding	 adj. 突出的，杰出的
distress	 n. 忧虑，悲伤
wear	 v. 磨损
relate	 v. 使联系；叙述
undergo	 v. 经历，经受，忍受
radioactive	 adj. 放射性的
geography	 n. 地理，地理学
his	 pron. 他的，他的东西
probable	 adj. 很可能的；大概的
aware	 adj. 知道的，意识到的
central	 adj. 中心的；主要的
ownership	 n. 所有（权），所有制
household	 n. 家庭，户；家务
site	 n. 地点，地基；场所
nine	 num. 九，九个
voyage	 n. 航海，航空 v. 航海，航行
expensive	 adj. 昂贵的，花钱多的
provide	 v. 提供；装备，供给
before	 prep. 在…以前
empty	 adj. 空的；空洞的
heat	 n. 热；炎热 v. 变热
professional	 adj. 职业的 n. 专业人员
Canadian	 adj. 加拿大的
beam	 n. 梁；横梁；束，柱
last	 adj. 最后的 adv. 最后
cause	 n. 原因；理由；事业
reluctant	 adj. 不愿的，勉强的
exclaim	 v. 呼喊；惊叫
breed	 n. 品种 v. 使繁殖
keeper	 n. 饲养员；看护人
mouth	 n. 嘴，口，口腔
camel	 n. 骆驼
hell	 n. 地狱；极大的痛苦
fourth	 pron. 第四 n. 四分之一
March	 n. 三月
entrance	 n. 入口，门口；进入
essential	 adj. 必要的；本质的
consider	 v. 考虑；认为；关心
compress	 v. 压紧，压缩
brow	 n. 额；眉，眉毛
sound	 adj. 健康的；完好的
recall	 v. 回想；叫回；收回
scarcely	 adv. 几乎不；仅仅
secure	 adj. 安心的；安全的
mayor	 n. 市长
most	 det,pron. 最多的 adv. 最，很
connection	 n. 连接，联系
nature	 n. 大自然；本性；性质
alone	 adj. 单独的 adv. 单独地
marvellous	 adj. 奇迹般的；了不起的
hold	 v. 拿住；掌握；拥有
like	 v. 喜欢；喜爱；希望
treat	 v. 对待；处理 n. 款待
beg	 v. 乞求；请求
footstep	 n. 脚步；脚步声；足迹
himself	 pron. 他自己；他亲自
cure	 v. 医治；消除 n. 治愈
bough	 n. 树枝
bee	 n. 蜂，密蜂；忙碌的人
treaty	 n. 条约；协议，协定
bird	 n. 鸟，禽
butterfly	 n. 蝴蝶
insert	 v. 插入；嵌入；登载
phase	 n. 阶段；相位
irregular	 adj. 不规则的；不整齐的
necessarily	 adv. 必然，必定
cloth	 n. 布；衣料；桌布
door	 n. 门；通道；一家
description	 n. 描写，形容；种类
marry	 v. 结婚；娶，嫁
beat	 v. 打，敲；打败
community	 n. 社区；社会；公社
swing	 v. 摇摆；回转 n. 摇摆
branch	 n. 树枝；分部；分科
stimulate	 v. 刺激；激励，激发
uneasy	 adj. 心神不安的，忧虑的
solemn	 adj. 严肃的，庄重的；庄严的；隆重的
sew	 v. 缝制，缝纫
astronaut	 n. 宇宙航行员，宇航员
memorial	 adj. 纪念的；记忆的
dispose	 v. 去掉，丢掉；销毁
brighten	 v. 使发光；使快活
addition	 n. 附加物；加，加法
sulfur	 n. 硫（磺），硫黄
beginner	 n. 初学者，生手
impress	 v. 给…深刻印象
print	 v. 印刷 n. 印刷的文字
fit	 v. 适合；安装
lay	 v. 置放；铺设；设置
pollute	 v. 弄脏，污染，沾污
experimental	 adj. 实验的，试验的
attach	 v. 缚，系，贴；附加
focus	 v. 聚焦；注视 n. 焦点
hunt	 n. 打猎；搜寻 v. 追猎
cruel	 adj. 残忍的，残酷的
desk	 n. 书桌，办公桌
cost	 n. 价格；代价；成本
slam	 v. 使劲关；砰地放下
decay	 v. 腐烂；衰败 n. 腐烂
opera	 n. 歌剧
towel	 n. 毛巾，手巾
crowd	 n. 人群；一伙人；大众
decade	 n. 十年，十年期
introduction	 n. 介绍；引进；引言
car	 n. 汽车，小汽车，轿车
prime	 adj. 首要的 n. 青春
ache	 v. 痛 n. 疼痛
grand	 adj. 宏伟的；重大的
earn	 v. 赚得，挣得；获得
goodness	 n. 优良，德性，仁慈
gunpowder	 n. 黑色火药；有烟火药
spray	 n. 浪花；喷雾 v. 喷
guide	 n. 导游者 v. 给某人领路，带领
pile	 n. 堆 v. 堆叠，累积
bless	 v. 为…祝福
row	 n. （一）排，（一）行
trick	 n. 诡计；窍门 v. 哄骗
February	 n. 二月
cell	 n. 细胞；小房间
completely	 adv. 十分，完全地
overtake	 v. 追上，赶上
extend	 v. 延长；扩大
pair	 n. 一对 v. 成对，配对
policy	 n. 政策，方针
sympathetic	 adj. 同情的
mass	 n. 团；众多；群众
desperate	 adj. 拼死的；绝望的
initial	 adj. 最初的
red	 adj. 红色的 n. 红色
award	 n. 奖，奖品
dig	 v. 掘，挖；采掘
electron	 n. 电子
comfortable	 adj. 舒适的
association	 n. 协会，团体；联合
labour	 n. 劳动；工作；劳工
diagram	 n. 图解，图表，简图
scheme	 n. 计划，规划；诡计
accustomed	 adj. 惯常的；习惯的
substantial	 adj. 坚固的
awake	 adj. 醒着的 v. 唤醒
entry	 n. 入口处；登记；进入
assistant	 n. 助手，助理；助教
pocket	 n. 衣袋 adj. 袖珍的
code	 n. 准则；法典；代码
lime	 n. 石灰
drum	 n. 鼓；鼓状物；圆桶
singular	 adj. 单数的；非凡的
aim	 v. 瞄准；针对；致力
counter	 n. 柜台；计数器
because	 conj. 由于，因为
religious	 adj. 宗教的；虔诚的
persuade	 v. 说服
consumption	 n. 消耗量；消耗
harmony	 n. 调合，协调，和谐
improvement	 n. 改进，改善；改进之处
dial	 n. 钟面；拨号盘 v. 拨
efficient	 adj. 效率高的，有能力的
loudspeaker	 n. 扬声器，喇叭
typist	 n. 打字员
accumulate	 v. 积累；堆积
grasp	 v. 抓紧；掌握 n. 抓
picnic	 n. 郊游，野餐 v. 野餐
crisis	 n. 危机；存亡之际
underneath	 prep,adv. 在下面，在底下
contain	 v. 包含，容纳
go	 v. 去；走；变为
loyalty	 n. 忠诚；忠心
amaze	 v. 使惊奇，使惊愕
copper	 n. 铜；铜币
delivery	 n. 投递；交付；分娩
institute	 n. 研究所；学院
assign	 v. 指派〔任务〕；分配；分派
intelligence	 n. 智力；理解力；情报
fill	 v. 装满，盛满；占满
overhead	 adj. 在头顶上的；架空的
conscience	 n. 良心，道德心
ours	 pron. 我们的
borrow	 v. 借，借用，借人
landing	 n. 上岸，登陆，着陆
urgent	 adj. 紧急的
Roman	 n. 古罗马人 adj. 罗马的
remind	 v. 提醒，使想起
power	 n. 能力；力；权；幂
pick	 n. 镐，鹤嘴锄
possess	 v. 占用，拥有（财产）
between	 prep. 在…中间
cafe	 n. 咖啡馆；小餐厅
solid	 adj. 固体的 n. 固体
badly	 adv. 坏，差；严重地
or	 conj. 或，或者；即
individual	 adj. 个别的；独特的
headquarters	 n. 总部；司令部
medal	 n. 奖章，勋章，纪念章
associate	 v. 交往 n. 伙伴，同事
post	 n. 柱，桩，杆 v. 贴出
awkward	 adj. 尴尬的；笨拙的
generally	 adv. 一般地；通常地
drop	 v. 使落下；降低
fine	 adj. 美好的；纤细的
its	 det.. 它的
carry	 v. 携带；运载；传送
bill	 n. 账单；票据；招贴
barber	 n. 理发师
payment	 n. 支付
tower	 n. 塔 v. 屹立，高耸
luggage	 n. 行李；皮箱，皮包
important	 adj. 重要的；有势力的
flare	 v. 闪耀
off	 adv. （离）开；（停）止
dear	 adj. 亲爱的 int. 啊
constant	 adj. 经常的；永恒的
mode	 n. 方式；样式
coal	 n. 煤；煤块
approximate	 adj. 近似的 v. 近似
defect	 n. 缺点，缺陷，欠缺
afternoon	 n. 下午，午后
worthless	 adj. 无价值的，无用的
infect	 v. 传染；感染
ultimate	 adj. 最后的，最终的
linen	 n. 亚麻布；亚麻织物
moist	 adj. 湿润的；多雨的
anger	 n. 怒，愤怒 v. 使发怒
April	 n. 四月
fate	 n. 命运，天数
match	 n. 比赛，竞赛；对手
gasoline	 n. （美）汽油
how	 adv. 怎么；怎样；多少
patient	 adj. 忍耐的 n. 病人
cunning	 adj. 狡猾的，狡诈的
paragraph	 n. （文章的）段，节
alternative	 n. 替换物；取舍，抉择
dust	 n. 尘土，灰尘
wound	 n. 创伤，伤 v. 使受伤
grade	 v. 给…分等级 n. 等级
pop	 n. 流行音乐，流行歌曲
aviation	 n. 航空，航空学
vast	 adj. 巨大的；大量的
diverse	 adj. 不一样的，相异的
enjoy	 v. 享受；欣赏，喜爱
potential	 adj. 潜在的 n. 潜力
deceive	 v. 欺骗，蒙蔽，行骗
voltage	 n. 电压
reporter	 n. 记者，通讯员
dialog	 n. 对话，对白
air	 n. 空气；空中
circulate	 v. 使循环
garden	 n. 花园，菜园；公园
discovery	 n. 发现；被发现的事物
underline	 v. 划线于…之下
concept	 n. 概念，观念，设想
look	 v. 看，显得 n. 看
forever	 adv. 永远；总是，老是
worship	 n. 礼拜；崇拜；崇拜: 爱慕：崇敬 v. 崇拜
altogether	 adv. 完全；总而言之
tough	 adj. 坚韧的；健壮的
glimpse	 v. 瞥见 n. 一瞥，一看
dialect	 n. 方言，土语，地方话
vertical	 adj. 垂直的，竖式的
vice	 n. 罪恶；恶习
romantic	 adj. 浪漫的
dictate	 v. 口授；命令
health	 n. 健康状况；健康
awful	 adj. 令人不愉快的
plural	 adj. 复数的 n. 复数
influential	 adj. 有影响的；有权势的
piece	 n. 块；碎片 v. 拼合
free	 adj. 自由的；空闲的
robot	 n. 机器人；自动机
applicable	 adj. 能应用的；适当的
demonstrate	 v. 说明；论证；表露
nobody	 pron. 谁也不；无人
unload	 v. 卸（货）
apologize	 v. 道歉，谢罪，认错
complex	 adj. 复杂的
anxiety	 n. 焦虑，忧虑；渴望
drag	 v. 拖，拉；拖曳
clay	 n. 粘土，泥土
government	 n. 政府；治理；政治
flower	 n. 花，花卉；开花
casual	 adj. 偶然的；随便的
outwards	 adv. 向外，往海外
withstand	 v. 抵挡，反抗
forgive	 v. 原谅，饶恕，宽恕
eve	 n. 前夜，前夕
bind	 v. 捆绑；包扎；装订
pillar	 n. 柱，柱子；栋梁
metric	 adj. 公制的，米制的
pine	 n. 松树；松木
explore	 v. 探险，探索
profession	 n. 职业
eighteen	 num. 十八，十八个
breath	 n. 气息，呼吸
gang	 n. 一帮，一伙
effort	 n. 努力；努力的成果
hardship	 n. 艰难，困苦
near	 adv. 近，接近 adj. 近的
shower	 n. 阵雨；（一）阵；淋浴
alive	 adj. 活着的；活跃的
Indian	 adj. 印度的 n. 印度人
serve	 v. 为…服务；招待
backward	 adj. 向后的；倒退的
fear	 n. 害怕；担心 v. 害怕
operational	 adj. 操作上的；可使用的
delay	 v. 耽搁；延误；推迟
arithmetic	 n. 算术；四则运算
value	 n. 价值；价格 v. 评价
madam	 n. 夫人，女士，太太
dangerous	 adj. 危险的，不安全的
if	 conj. 假如，如果
per	 prep. 每
loss	 n. 遗失；损失；失败
damp	 adj. 潮湿的，有湿气的
age	 n. 年龄；时代 v. 变老
launch	 v. 发射，投射；发动
stain	 v. 沾污；给…着色
vain	 adj. 徒劳的；自负的
gratitude	 n. 感激，感谢，感恩
assignment	 n. 任务；指定的作业
egg	 n. 蛋，卵；蛋，鸡蛋
tailor	 n. 裁缝 v. 专门制作；订做
reliable	 adj. 可靠的，可信赖的
pole	 n. 杆，柱
broad	 adj. 宽的，阔的；广泛的
June	 n. 六月
accordingly	 adv. 照着；因此，所以
careless	 adj. 粗心的；漫不经心的
comfort	 n. 舒适；安慰 v. 安慰
facility	 n. 设备
employee	 n. 受雇者，雇员，雇工
typical	 adj. 典型的，代表性的
nucleus	 n. 核，（原子）核；核心
all	 det. 全部的 pron. 全部
negative	 adj. 否定的；消极的
India	 n. 印度
advanced	 adj. 先进的；高级的
cottage	 n. 村舍，小屋
oblige	 v. 迫使
evaluate	 v. 评价，估…的价
skilled	 adj. 有技能的，熟练的
inn	 n. 小旅店；小酒店
static	 adj. 静的；静态的
forty	 num. 四十，第四十
severe	 adj. 严厉的
portrait	 n. 肖像，画像
derive	 v. 取得；起源
partial	 adj. 部分的；不公平的
yearly	 adj&adv. 每年的
straw	 n. 稻草；麦杆；吸管
dip	 v. 浸，蘸
invite	 v. 邀请；（正式）邀请，请求
cord	 n. 细绳，粗线，索
invasion	 n. 入侵，侵略；侵犯
audience	 n. 听众，观众，读者
compound	 n. 化合物；复合词
risk	 n. 风险，危险；冒险
almost	 adv. 几乎，差不多
loosen	 v. 解开；使松驰
industrialize	 v. 使工业化
glorious	 adj. 光荣的；壮丽的
normally	 adv. 通常；正常地
excess	 n. 超越；过量；过度
ridiculous	 adj. 荒谬的，可笑的
balloon	 n. 气球，玩具气球
in	 prep. 在…里；进，入
everyday	 adj. 每天的，日常的
exaggerate	 v. 夸大，夸张
furthermore	 adv. 而且，此外
transfer	 v. 转移；调动
criminal	 n. 犯人，罪犯，刑事犯
Christian	 n. 基督教徒；信徒
cargo	 n. 船货，货物
plantation	 n. 种植园
gross	 adj. 总的；严重的
gradual	 adj. 逐渐的；渐进的
culture	 n. 文化，文明
position	 n. 姿势；位置；职位
four	 num. 四，四个，第四
immigrant	 n. 移民
trend	 n. 倾向
humid	 adj. 湿的，湿气重的
preparation	 n. 准备，预备；制备
magnetic	 adj. 磁的；有吸引力的
November	 n. 十一月
clothes	 n. 衣服，服装
glow	 n. 白热光 v. 发白热光
pad	 n. 垫；本子 v. 填塞
dusk	 n. 薄暮，黄昏，幽暗
force	 v. 强迫 n. 力，力量
rainy	 adj. 下雨的，多雨的
tame	 adj. 驯服的；顺从的
formal	 adj. 正式的；礼仪上的
switch	 n. 开关；转换 v. 转换
fruit	 n. 水果；果实；成果
equation	 n. 方程（式）；等式
circumstance	 n. 情况，条件；境遇
eighty	 num. 八十，八十个
reach	 v. 抵达；伸出；达到
luxury	 n. 奢侈，奢华；奢侈品
pound	 n. 磅；英磅
beer	 n. 啤酒
accuracy	 n. 准确（性）；准确度
punish	 v. 罚，惩罚，处罚
poetry	 n. 诗，诗歌，诗作
idle	 adj. 空闲的；懒散的
rare	 adj. 稀薄的；稀有的
environment	 n. 环境，外界
island	 n. 岛，岛屿
color	 n. 颜色，彩色；颜料
extremely	 adv. 极端，极其，非常
certainly	 adv. 一定，必定；当然
tractor	 n. 拖拉机；牵引车
handwriting	 n. 笔迹，手迹，书法
aid	 n. 帮助；助手；救护
craft	 n. 工艺；手艺
laugh	 v. 笑，发笑 n. 笑
century	 n. 世纪；百年
hers	 pron. 她的（所有物）
gravity	 n. 重力，引力；严重性
northeast	 n. 东北 adj. 位于东北的
purpose	 n. 目的；意图
issue	 n. 问题；发行 v. 发行
literary	 adj. 文学（上）的
hire	 v. 租借 n. 租用，雇用
nursery	 n. 托儿所；苗圃
excite	 v. 使激动；引起
resolution	 n. 坚决，坚定；决定
disappoint	 v. 使失望，使受挫折
silver	 n. 银；银币；银器
hesitate	 v. 犹豫，踌躇；含糊
transmit	 v. 传送，传达；发射
threaten	 v. 威胁，恐吓
lap	 n. 〔坐着时的〕大腿部；一圈
tremendous	 adj. 极大的，非常的
independence	 n. 独立；自主，自立
manager	 n. 经理，管理人
brass	 n. 黄铜；黄铜器
band	 n. 乐队；带；波段
proceed	 v. 进行；继续进行
expansion	 n. 扩大；扩充；扩张
from	 prep. 从…来
elimination	 n. 排除，消除；消灭
defend	 v. 保卫，防守
significant	 adj. 有意义的；重要的
always	 adv. 总是，一直；永远
rod	 n. 杆，竿，棒
mainland	 n. 大陆
maximum	 n. 最大量 adj. 最大的
honeymoon	 n. 蜜月
content	 adj. 满意的，满足的
scholar	 n. 学者（尤指文学方面）
tedious	 adj. 冗长乏味的，沉闷的
late	 adj. 迟的 adv. 迟，晚
Germany	 n. 德意志，德国
figure	 n. 数字；外形；人物
clearly	 adv. 明白地，清晰地
follow	 v. 跟随；结果是
fortunately	 adv. 幸运地，幸亏
particle	 n. 微粒；粒子
version	 n. 说法；译文；改写本
pink	 n. 粉红色 adj. 粉红色的
bring	 v. 带来；引出；促使
ground	 n. 地；场地；根据
pursue	 v. 进行；追赶，追踪
film	 n. 影片；胶卷；薄层
Canada	 n. 加拿大
propose	 v. 提议；求婚
recorder	 n. 录音机；记录者
economy	 n. 经济；节约，节省
sensible	 adj. 明智的；感觉得到的
among	 prep. 在…之中
discussion	 n. 讨论，谈论；论述
republic	 n. 共和国，共和政体
yawn	 v. 打呵欠 n. 呵欠
lawn	 n. 草地，草坪，草场
gas	 n. 气体；煤气；汽油
distant	 adj. 在远处的；疏远的
ability	 n. 能力；能耐；本领
instinct	 n. 本能；直觉；生性
approval	 n. 批准；赞成，同意
await	 v. 等候，期待
lemon	 n. 柠檬，柠檬树
triangle	 n. 三角（形）
advise	 v. 劝告；建议；通知
bank	 n. 银行；库；沿，堤
measurement	 n. 尺寸；衡量，测量
help	 v. 帮助；援助 n. 帮手
justice	 n. 司法；正义，公正
remember	 v. 记得；想起；记住
widow	 n. 寡妇
telescope	 n. 望远镜
even	 adv. 甚至；甚至更，还
booth	 n. 公用电话亭；货摊
final	 adj. 最后的；决定性的
receiver	 n. 收受者，收件人
drought	 n. 旱灾，干旱
tin	 n. 锡；罐头
left	 adj. 左边的
resign	 v. 放弃
farm	 n. 农场，农庄；饲养场
miner	 n. 矿工
prosperity	 n. 繁荣；昌盛，兴旺
Britain	 n. 不列颠，英国
mix	 v. 使混合，混淆
average	 n. 平均数 adj. 平均的
pinch	 v. 捏，拧，掐掉
whip	 v. 鞭笞；搅打 n. 鞭子
fond	 adj. 喜爱的；溺爱的
expression	 n. 词句；表达；表情
five	 num. 五，五个，第五
agriculture	 n. 农业，农艺；农学
anyhow	 adv. 无论如何
transistor	 n. 晶体管
house	 n. 房屋，住宅；商号
knob	 n. 门把，拉手；旋纽
religion	 n. 宗教信仰；宗教
factor	 n. 因素；系数；因子
inexpensive	 adj. 花费不多的，廉价的
finish	 v. 完成；结束 n. 结尾
phenomenon	 n. 现象
allow	 v. 允许，准许；任
keen	 adj. 热心的；激烈的
presently	 adv. 一会儿；目前
statistical	 adj. 统计的，统计学的
vitamin	 n. 维生素，维他命
enemy	 n. 敌人；仇敌；敌兵
eight	 num. 八，八个
design	 v. 设计 n. 设计；图样
cream	 n. 奶油，乳脂；奶油色
duty	 n. 责任；职责；税
cousin	 n. 堂（或表）兄弟（姐妹）
lamb	 n. 羔羊，小羊；羔羊肉
canteen	 n. 小卖部；临时餐室
clear	 adj. 清晰的 v. 清除
whilst	 conj. 当…的时候
bake	 v. 烤，烘，焙；烧硬
airplane	 n. 飞机
coat	 n. 外套，上衣；皮毛
intention	 n. 意图，意向，目的
interruption	 n. 障碍物；中断，打断
wreck	 n. 沉船，失事船 v. 破坏
affair	 n. 事务；事情，事件
mill	 n. 磨坊；制造厂
cup	 n. 杯子；（一）杯；奖杯
chill	 v. 使变冷 n. 寒冷
physicist	 n. 物理学家
oppose	 v. 反对；反抗
hurry	 v. 赶紧；催促
bad	 adj. 坏的，恶的；严重的
prohibit	 v. 禁止；阻止
pig	 n. 猪，小猪，野猪
grandfather	 n. 祖父；外祖父
gain	 v. 获得；增加 n. 增进
sideways	 adv. 斜着，斜向一边地
except	 prep. 除…之外
weave	 v. 织，编
consist	 v. 由…组成；在于
heir	 n. 后嗣，继承人
continual	 adj. 不断的；连续的
image	 n. 图像；映像；形象；印象
insult	 v. 侮辱，凌辱 n. 侮辱，凌辱
unexpected	 adj. 想不到的，意外的
art	 n. 艺术，美术；技术
reward	 n. 报答；报酬 v. 报答
simplicity	 n. 简单，简易；朴素
interview	 n. 接见；会见；面谈
buy	 v. 买，购买
opposite	 adj. 对面的 n. 对立物
girl	 n. 女孩子，姑娘；女儿
chess	 n. 棋；国际象棋
quote	 v. 引用，引证；报价
exhibit	 v. 陈列，展览；显示
resistant	 adj. 抵抗的；反抗的
kite	 n. 风筝
stroke	 n. 中风；打，击；鸣声
move	 v. 移动；感动 n. 动
beneficial	 adj. 有利的，有益的
sow	 v. 播（种）
prepare	 v. 准备，预备
millimetre	 n. 毫米
council	 n. 理事会，委员会
grocery	 n. 食品杂货店
interfere	 v. 干涉，干预；妨碍
glue	 n. 胶，胶水 v. 胶合
imaginary	 adj. 想象中的，假想的
contemporary	 adj. 当代的；同时代的
at	 prep. 在…里；在…时
crow	 n. 鸦，乌鸦 v. 啼
depend	 v. 依靠，依赖；相信
item	 n. 一项，一件，一条
entire	 adj. 全部的，整个的
charge	 v. 索价；控告 n. 费用
behavior	 n. 行为，举止，态度
provided	 conj. 以…为条件
thus	 adv. 如此，这样；因而
agreement	 n. 协定，协议；同意
device	 n. 器械，装置
clothing	 n. 衣服
cube	 n. 立方形；立方
marriage	 n. 结婚，婚姻；婚礼
kingdom	 n. 王国；界
bow	 n. 鞠躬；弓；蝴蝶结
vessel	 n. 船，飞船；管；容器
automatic	 adj. 自动的；机械的
trace	 n. 痕迹；丝毫 v. 跟踪
overnight	 adv. 一夜；突然
feather	 n. 羽毛；翎毛；羽状物
Monday	 n. 星期一
export	 v. 出口；输出
badminton	 n. 羽毛球
arrival	 n. 到达；到来；到达者
knock	 v. 敲，击，打 n. 敲，击，打
fifteen	 num. 十五；十五个
aunt	 n. 伯母，婶母，姑母
motive	 n. 动机，目的
capture	 v. 捕获，俘获；夺得
handful	 n. 一把；少数，一小撮
being	 n. 存在；生物；生命
contract	 n. 契约，合同
collective	 adj. 集体的；集合性的
building	 n. 建筑物，大楼；建筑
crew	 n. 全体船员
postman	 n. 邮递员
corresponding	 adj. 相应的；符合的
restless	 adj. 不安定的，焦虑的
tempt	 v. 引诱，诱惑；吸引
fix	 v. 决定；使固定
classroom	 n. 教室，课堂
corridor	 n. 走廊，回廊，通路
daughter	 n. 女儿
out	 adv. 出，在外；现出来
outdoors	 adv. 在户外，在野外
universal	 adj. 全世界的；全体的；共同的；普遍的
garage	 n. 车库；加油站
mark	 n. 斑点；记号 v. 标明
outcome	 n. 结果，后果，成果
duration	 n. 持续，持久
consideration	 n. 考虑，思考；体贴
mould	 n. 模子，模型 v. 浇铸
already	 adv. 早已，已经
tune	 n. 调子 v. 调音
logical	 adj. 逻辑的；符合逻辑的
book	 n. 书，书籍 v. 预定
heavy	 adj. 重的；大的；充满的
loan	 n. 贷款；暂借 v. 借出
peach	 n. 桃子，桃树
danger	 n. 危险；危险事物
horsepower	 n. 马力
prevent	 v. 预防，防止；阻止
yield	 v. 出产 n. 产量
punch	 v. 用拳猛击 n. 冲压机
calculator	 n. 计算器，计算者
plate	 n. 盘 v. 电镀
disclose	 v. 揭开，揭发；透露
communication	 n. 通讯；传达；交通
slide	 v. 滑 n. 滑
candidate	 n. 候选人；投考者
mount	 v. 登上，爬上 n. …山
rat	 n. 老鼠，耗子
neighbour	 n. 邻居，邻人；邻国
ceremony	 n. 典礼，仪式；礼节
fiction	 n. 小说；虚构，杜撰
determine	 v. 查明；决定；决心
plan	 n. 计划，打算 v. 计划；打算
Greek	 adj. 希腊的 n. 希腊人
party	 n. 聚会；党，党派
further	 adv. 更远地 adj. 更远的
radio	 n. 无线电；收音机
contribute	 v. 捐献，捐助；投稿
catalog	 n. 目录，目录册
coward	 n. 懦夫；胆怯者
apply	 v. 应用，实施，使用
throat	 n. 咽喉，喉咙；嗓音
ice	 n. 冰，冰块 v. 冰敷
piano	 n. 钢琴
discuss	 v. 讨论，谈论；论述
neat	 adj. 整洁的
refresh	 v. 使清新；恢复精神
curiosity	 n. 好奇，好奇心；珍品
divide	 v. 分；分开；分配
leader	 n. 领袖，领导人；首领
fibre	 n. 纤维质；纤维
trim	 adj. 整齐的 v. 使整齐
baby	 n. 婴儿；孩子气的人
wooden	 adj. 木制的；呆板的
clap	 v. 拍手；拍，轻拍
vibrate	 v. 使颤动
honest	 adj. 诚实的
necklace	 n. 项链，项圈
blame	 v. 责备，把…归咎于
substance	 n. 物质；实质；本旨
merry	 adj. 欢乐的，愉快的
fountain	 n. 泉水，喷泉；源泉
surroundings	 n. 周围的事物，环境
chair	 n. 椅子；主席
procession	 n. 队伍，行列
back	 adv. 回原处；回；在后
jacket	 n. 短上衣，茄克衫
rifle	 n. 步枪，来复枪
our	 pron. 我们的
low	 adj. 低的；矮的；低下的
opponent	 n. 对手，敌手；对抗者
pretend	 v. 假装
bathroom	 n. 浴室；盥洗室
champion	 n. 冠军，得胜者
jump	 v. 跳；暴涨
count	 v. 计算；数，计数
vivid	 adj. 生动的；鲜艳的
biscuit	 n. （英）饼干；（美）软饼
orange	 n. 橙（树）；柑（树）
advantage	 n. 优势；优点；好处
upper	 adj. 上面的；地位较高的
senior	 adj. 地位较高的
regular	 adj. 规则的；整齐的
majority	 n. 多数，大多数
blossom	 n. 花；开花 v. 开花
heading	 n. 标题，题词，题名
fridge	 n. 电冰箱
destruction	 n. 破坏，毁灭，消灭
commerce	 n. 商业，贸易；社交
transmission	 n. 传送；传动；发射
German	 adj. 德国的 n. 德国人
elsewhere	 adv. 在别处，向别处
British	 adj. 不列颠的，英联邦的
discover	 v. 发现
series	 n. 连续，系列；丛书
personnel	 n. 全体人员，全体职员
faulty	 adj. 有缺点的；有错误的
inherit	 v. 继承（传统等）
famous	 adj. 著名的，出名的
only	 adv. 只，仅仅 adj. 唯一的
resolve	 v. 解决；决心 n. 决心
gold	 n. 金 adj. 金制的
leisure	 n. 空闲时间；悠闲
breathe	 v. 呼吸
metre	 n. 米，公尺
rainbow	 n. 虹，彩虹
furniture	 n. 家具
outer	 adj. 外部的，外面的
college	 n. 学院；大学
mother	 n. 母亲，妈妈
hour	 n. 小时；时间；时刻
respective	 adj. 各自的，各个的
crop	 n. 农作物，庄稼；一熟：一季的收成
feel	 v. 有知觉；触，摸
ounce	 n. 盎司，英两
handle	 n. 柄，把手 v. 拿，触
active	 adj. 活跃的；积极的
conservation	 n. 保存，保护
game	 n. 游戏；比赛；猎物
devil	 n. 魔鬼，恶魔
imagination	 n. 想象；想象力；空想
opinion	 n. 意见，看法，主张
maid	 n. 女佣，女仆；少女
admire	 v. 钦佩，羡慕，赞赏
yard	 n. 院子，庭院；场地
doctor	 n. 医生，医师；博士
dam	 n. 水坝，水堤；障碍物
ripe	 adj. 熟的；时机成熟的
soil	 v. 弄脏
earth	 n. 地球；陆地，地面
alphabet	 n. 字母表，字母系统
lucky	 adj. 幸运的；吉祥的
waggon	 n. 四轮运货马车
restore	 v. 恢复；修补；归还
complicated	 adj. 难懂的；复杂的
regret	 v. 懊悔；抱歉 n. 懊悔
rack	 n. 搁物架；行李架
lace	 n. 鞋带，系带；花边
jolly	 adj. 快活的；令人高兴的
area	 n. 地区；面积；领域
Oceania	 n. 大洋洲
chemical	 adj. 化学的 n. 化学制品
ocean	 n. 海洋；洋
lord	 n. 贵族；上帝
intelligent	 adj. 聪明的；理智的
loop	 n. 圈，环，环孔
greedy	 adj. 贪吃的；贪婪的
everything	 pron. 每件事，事事
feedback	 n. 反馈
total	 adj. 总的 v. 合计，总共
ad	 n. 广告
check	 v. 检查；制止 n. 检查
create	 v. 创造；引起，产生
cheap	 adj. 廉价的；劣质的
reject	 v. 拒绝；驳回；丢掉
anyway	 adv. 无论如何
decorate	 v. 装饰，装璜，修饰
string	 n. 线，细绳；一串
moisture	 n. 潮湿，湿气
memory	 n. 记忆；回忆；存储
accept	 v. 接受；同意
behind	 prep. 在…后面
investment	 n. 投资，投资额；投入
false	 adj. 不真实的；伪造的
increase	 v. 增加 n. 增加
guest	 n. 客人，宾客；旅客
constitution	 n. 章程；体质；构造
illegal	 adj. 不合法的，非法的
carriage	 n. 四轮马车；客车厢
summarize	 v. 概括，概述，总结
raw	 adj. 未煮过的；未加工的
extension	 n. 延长部分；伸展
polite	 adj. 有礼貌的；有教养的
broom	 n. 扫帚
thereby	 adv. 因此，从而，由此
threat	 n. 威胁，恐吓；凶兆
justify	 v. 证明…是正当的
strategy	 n. 战略；策略
box	 n. 箱，盒；包厢
simplify	 v. 简化，使单纯
usage	 n. 使用，对待；惯用法
aloud	 adv. 出声地；大声地
delight	 n. 快乐 v. 使高兴
cripple	 n. 跛子；残疾人
cigaret	 n. 香烟，纸烟，卷烟
square	 n. 正方形；广场
pray	 v. 祈祷；请求
attraction	 n. 吸引；吸引力；引力
reputation	 n. 名誉，名声；好名声
decrease	 v. 减少 n. 减少
cave	 n. 山洞，洞穴，窑洞
banana	 n. 香蕉；芭蕉属植物
unknown	 adj. 不知道的；未知的
despite	 prep. 尽管，虽然，任凭
transportation	 n. 运输，运送，客运
collar	 n. 衣领；项圈
lean	 v. 倾斜，屈身；靠
undergraduate	 n. 大学在校生
material	 n. 材料；素材 adj. 物质的
neutral	 adj. 中立的；中性的
male	 adj. 男的，雄的 n. 男子
circle	 n. 圆；圆周；圈子
thickness	 n. 厚（度）；密（度）
news	 n. 新闻；消息
wicked	 adj. 坏的；令人厌恶的
suspicious	 adj. 怀疑的；可疑的
shoot	 v. 发射；射中 n. 芽
publication	 n. 出版；出版物；公布
possibility	 n. 可能；可能的事
lie	 v. 躺；平放；位于
quarrel	 n. 争吵，吵架，口角
here	 adv. 这里；向这里
scrape	 v. 刮；擦 n. 刮；擦伤；擦痕
example	 n. 例子，实例；模范
Bible	 n. 基督教《圣经》
stability	 n. 稳定；稳定性
equip	 v. 装备，配备
forest	 n. 森林；森林地带
reasonable	 adj. 合情合理的；公道的
quit	 v. 离开，退出；退出；停止
lower	 adj. 较低的 v. 放下
beneath	 prep. 在…下方
transform	 v. 改变；改造；变换
musician	 n. 音乐家；作曲家
attribute	 v. 把…归因于 n. 属性
saddle	 n. 鞍子，马鞍
trunk	 n. 树干；大衣箱，皮箱
submit	 v. 服从
customer	 n. 顾客，主顾
observation	 n. 注意；观察；观察力
moderate	 adj. 温和的；有节制的
cope	 v. 对付，应付
king	 n. 国王，君主
reaction	 n. 反应；反作用力
outlook	 n. 观点，看法；展望
member	 n. 成员，会员
passport	 n. 护照
reduction	 n. 减少，减小，缩减
childhood	 n. 童年，幼年；早期
corner	 n. 角；边远地区
grandmother	 n. 祖母，外祖母
lightning	 n. 闪电，闪电放电
of	 prep. …的；由于
classification	 n. 分类；分级；分类法
tension	 n. 紧张，不安；拉紧；张力
strip	 v. 剥去；除去 n. 条，带
interpretation	 n. 解释
condemn	 v. 谴责，指责；判刑
previous	 adj. 先的；前的
hopeful	 adj. 有希望的
invisible	 adj. 看不见的；无形的
occasion	 n. 场合；时刻；时机
noun	 n. 名词
blend	 v. 混和 n. 混和物
colleague	 n. 同事，同僚
electronic	 adj. 电子的
fire	 n. 火；火灾 v. 开火
layer	 n. 层；层次
fade	 v. 逐渐消失；褪色
ahead	 adv. 向前；在前；提前
chop	 v. 砍，劈；切细
gulf	 n. 海湾
convenient	 adj. 便利的；近便的
eleven	 num. 十一，十一个
by	 prep. 在…旁；被，由
Australian	 adj. 澳大利亚的
main	 adj. 主要的，最重要的
candy	 n. 糖果
bacteria	 n. 细菌
repeatedly	 adv. 重复地；一再
explanation	 n. 解释，说明；辩解
impact	 n. 影响，作用；冲击
mainly	 adv. 主要地，大体上
administration	 n. 管理；管理部门
skillful	 adj. 灵巧的，娴熟的
data	 n. 数据；资料
pollution	 n. 污染
possession	 n. 有，所有；占有物
manly	 adj. 男子气概的，果断的
reverse	 v. 颠倒；翻转 n. 背面
gallon	 n. 加仑
have	 aux v. （与过去分词连用构成完成时） v. 有；吃
boy	 n. 男孩，少年；家伙
Mister	 n. 先生
crawl	 v. 爬，爬行
employment	 n. 工作；职业；雇用；使用
dread	 n. 畏惧；恐怖 v. 惧怕
difficult	 adj. 困难的；难对付的
aggressive	 adj. 侵略的；好斗的
elder	 adj. 年龄较大的 n. 长者
twin	 adj. 孪生的 n. 孪生儿
furnace	 n. 炉子，熔炉；鼓风炉
political	 adj. 政治的，政治上的
statue	 n. 塑像，雕像，铸像
geometry	 n. 几何，几何学
union	 n. 协会；联合
accord	 v. 给予；使一致
terminal	 adj. 末端的 n. 〔飞机、公共汽车、轮船客运或货物运输的〕集散站，终点站
petroleum	 n. 石油
northwest	 n. 西北 adj. 位于西北的
wool	 n. 羊毛；毛线，绒线
hollow	 adj. 空的；空洞的
mission	 n. 使命，任务；使团
lantern	 n. 提灯，灯笼
earnest	 adj. 认真的，诚恳的
lavatory	 n. 盥洗室，厕所
oneself	 pron. 自己；亲自
familiar	 adj. 熟悉的
rocket	 n. 火箭，火箭发动机
veteran	 n. 老兵；老手
declare	 v. 断言；声明；表明
span	 n. 持续时间；跨距
bunch	 n. 束，串；一群
approve	 v. 批准；赞成，称许
hobby	 n. 业余爱好，癖好
pea	 n. 豌豆；豌豆属植物
collapse	 v. 倒坍；崩溃，瓦解
insect	 n. 昆虫，虫
he	 pron. （主格）他
eat	 v. 吃
add	 v. 添加，附加，掺加
growth	 n. 增长；增长量；生长
strange	 adj. 陌生的；奇怪的
invention	 n. 发明，创造；捏造， 假话
female	 n. 雌性的动物；女性
disaster	 n. 灾难，灾祸；天灾
headache	 n. 头痛；头痛的事
comment	 n. 评论，意见；批评；指责
damage	 v. 损害，毁坏 n. 损害
assure	 v. 使确信；向…保证
store	 n. 商店；贮藏；贮存品
withdraw	 v. 撤退；收回；撤回
conduct	 n. 举止，行为
bulb	 n. 电灯泡
alcohol	 n. 酒精，乙醇
bitter	 adj. 痛苦的；严寒的
respond	 v. 作答；响应
naked	 adj. 裸体的；无遮敝的
radar	 n. 雷达，无线电探测器
birthday	 n. 生日；诞生的日期
precise	 adj. 精确的，准确的
emerge	 v. 出现，涌现；冒出
reality	 n. 现实；真实
wing	 n. 翼，翅膀，翅
gauge	 v. 量，测量 n. 量器
give	 v. 做，作；送给
end	 n. 末端；目标 v. 结束
rust	 n. 锈 v. 生锈，氧化
disagree	 v. 有分歧；不一致
engineer	 n. 工程师，技师
expert	 n. 专家 adj. 熟练的
plain	 n. 平原 adj. 清楚的
philosopher	 n. 哲学家
eastern	 adj. 朝东的；东方的
automobile	 n. 汽车，机动车
noon	 n. 正午，中午
region	 n. 地区，地带；领域
transformation	 n. 变化；改造；转变
benefit	 n. 利益；恩惠；津贴
least	 det,pron. 最少的 adv. 最少
grind	 v. 磨（碎）；磨利
do	 aux. （用于实义动词前构成否定句和疑问句） v. 做，干，办
national	 adj. 民族的；国家的
excursion	 n. 远足；短途旅行
haste	 n. 急速，急忙；草率
suit	 n. 起诉，诉讼 v. 适合
stock	 n. 库存品；股本
needless	 adj. 不需要的
laser	 n. 激光
boot	 n. 靴子，长统靴
pain	 n. 痛，疼痛；辛苦
stale	 n. 陈腐的；走了气的
habitual	 adj. 习惯性的，惯常的
erect	 v. 建造；使竖立
noticeable	 adj. 显而易见的
hate	 v. 恨，憎恨；不喜欢
orderly	 adj. 整洁的；有秩序的
menu	 n. 菜单
fair	 adj. 公平的；相当的
point	 n. 点；要点；细目；分
live	 v. 居住；活 adj. 活的
altitude	 n. 高，高度；高处
horizon	 n. 地平线；眼界，见识
similarly	 adv. 类似地，相似地
protein	 n. 蛋白质，朊
miserable	 adj. 痛苦的；悲惨的
influence	 n. 影响；势力 v. 影响
July	 n. 七月
sake	 n. 缘故，理由
tendency	 n. 倾向；趋向，趋势
giant	 n. 〔儿童故事中的〕巨人；巨人；巨物
father	 n. 父亲；神父；创始人
specimen	 n. 样本，标本，样品
upward	 adj. 上升的；向上的
ready	 adj. 准备好的；愿意的
path	 n. 路，小道；道路
helmet	 n. 头盔，钢盔
adverb	 n. 副词
information	 n. 消息，信息；通知
exterior	 adj. 外部的
setting	 n. 环境；安装，调整
tidy	 adj. 整洁的；整齐的
eagle	 n. 鹰
variable	 adj. 易变的 n. 变量
belt	 n. 带，腰带；皮带；区
open	 adj. 开的；开放的 v. 开
relative	 adj. 有关系的；相对的
cage	 n. 笼；鸟笼，囚笼
revolt	 n. 反抗；造反 v. 反抗；造反
exist	 v. 存在；生存，生活
width	 n. 宽度
argue	 v. 争论；争辩，辩论
herself	 pron. 她自己；她亲自
potato	 n. 马铃薯，土豆
aspect	 n. 方面；样子，外表
fertile	 adj. 肥沃的
chamber	 n. 〔人体内或某些机器中的〕室，腔；会议室；房间
rotary	 adj. 旋转的，转动的
elbow	 n. 肘，肘部；弯管
dye	 v. 染 n. 染料；染色
condition	 n. 状况，状态；环境
deaf	 adj. 聋的；不愿听的
prize	 n. 奖赏，奖金 v. 珍视
knit	 v. 把…编结
neither	 adj. （两者）都不的
register	 n. 登记，注册 v. 登记，注册
flu	 n. 流行性感冒
petrol	 n. （英）汽油
continent	 n. 大陆；陆地；洲
echo	 n. 回声，反响 v. 重复
boil	 v. 沸腾；汽化；煮沸
accident	 n. 意外事件；事故
log	 n. 原木，木料
cheat	 v. 骗取；哄
grass	 n. 草；牧草；草地
desire	 v. 中文释义；想要：要求 n. 愿望
dense	 adj. 密集的；浓厚的
tank	 n. 大容器，槽；坦克
restrict	 v. 限制，限定；约束
first	 num. 第一 adv. 最初
deliver	 v. 投递，送交；发表
reduce	 v. 减少，减小
aircraft	 n. 飞机，飞行器
specific	 adj. 特有的；具体的
scout	 n. 侦察员，侦察机
instant	 n. 瞬间 adj. 立即的
involve	 v. 使卷入；牵涉
layout	 n. 布局，安排，设计
business	 n. 商业，生意；事务；事务
torture	 n. 拷问；折磨 v. 拷打
shiver	 v. 颤抖，哆嗦 n. 冷颤
contradiction	 n. 矛盾，不一致；否认
photograph	 n. 照片，相片
sophisticated	 adj. 老于世故的；高级的
exploit	 v. 剥削；利用；开拓
likewise	 adv. 同样地；也，又
ratio	 n. 比，比率
textile	 n. 纺织品
employer	 n. 雇佣者，雇主
fisherman	 n. 渔民，渔夫，打鱼人
love	 v. 爱，喜欢 n. 爱
arrive	 v. 到达；来临；达到
preferable	 adj. 更可取的，更好的
indifferent	 adj. 冷漠的；不积极的
impatient	 adj. 不耐烦的，急躁的
vapour	 n. 汽，蒸气
chemist	 n. 化学家；药剂师
novel	 n. 小说 adj. 新的
forward	 adv. 向前；今后，往后
civilize	 v. 使文明；教育
nail	 n. 钉；指甲 v. 钉
harsh	 adj. 严厉的；刺耳的
fail	 v. 失败；不能；失灵
disturb	 v. 打扰，扰乱；弄乱
favourable	 adj. 赞成的；有利的
exciting	 adj. 令人兴奋的
seize	 v. 抓住；夺取；逮捕
day	 n. （一）天；白昼，白天
onto	 prep. 到…上
ninety	 num. 九十，九十个
application	 n. 请求，申请；施用
plot	 n. 小块土地 v. 密谋
hotel	 n. 旅馆
encourage	 v. 鼓励，支持；助长
concentrate	 v. 集中；聚集；浓缩
achievement	 n. 成就，成绩；完成
comparison	 n. 比较，对照；比拟
build	 v. 建筑；建立；创立
bosom	 n. 胸，胸部；内心
bother	 v. 烦扰，迷惑 n. 麻烦
festival	 n. 〔电影、戏剧、音乐等的〕节，节庆，会演；节日
ensure	 v. 保证；保护；赋予
face	 n. 脸；表面
handy	 adj. 便于使用的；手边的
honesty	 n. 诚实，正直
genuine	 adj. 真的；真正的
cycle	 n. 循环；自行车
parent	 n. 父亲，母亲，双亲
graph	 n. （曲线）图，图表
seal	 n. 印记；封蜡 v. 封
strengthen	 v. 加强，巩固
deny	 v. 否定；拒绝相信
empire	 n. 帝国
surgery	 n. 外科，外科手术
fortune	 n. 运气；巨款；命运
interesting	 adj. 有趣的，引人入胜的
project	 n. 方案，工程 v. 伸出
again	 adv. 又一次；而且
favour	 n. 恩惠；赞同
fleet	 n. 舰队；机群
mankind	 n. 人类
liter	 n. 升（容量单位）
mechanics	 n. 力学
schedule	 n. 计划表；时间表
crystal	 n. 结晶体；晶粒；水晶
letter	 n. 信；字母
effective	 adj. 有效的；有影响的
eye	 n. 眼睛；眼力
card	 n. 卡；卡片；名片
bush	 n. 灌木，灌木丛，矮树
rouse	 v. 唤醒，唤起；惊起
reflexion	 n. 映象；反映；反射
Arabian	 adj. 阿拉伯的
widen	 v. 变宽；加宽
violent	 adj. 暴力的；强暴的；猛烈的；狂暴的
basic	 adj. 基本的，基础的
director	 n. 理事；导演；指导者；负责人
own	 adj. 自己的 v. 有，拥有
commit	 v. 犯（错误）；干（坏事）
ampere	 n. 安培
blast	 n. 爆炸，冲击波 v. 炸
doubtless	 adv. 无疑地；很可能
cloak	 n. 斗篷；覆盖（物）
comprehensive	 adj. 广泛的
mistress	 n. 女主；夫人
mathematics	 n. 数学
housewife	 n. 家庭主妇
headmaster	 n. 校长
oak	 n. 栎属植物；栎木，橡木
available	 adj. 可利用的
no	 adv. 不；并不 adj. 没有
somebody	 pron. 某人，有人
rotation	 n. 旋转，转动
virtue	 n. 善；美德；优点
urban	 adj. 都市的，住在都市的
hardware	 n. 硬件；五金器具
annoy	 v. 使恼怒；打搅；打扰
centigrade	 adj. 百分度的
ink	 n. 墨水，油墨
parallel	 adj. 平行的；相同的
naughty	 adj. 顽皮的，淘气的
cassette	 n. 盒式录音带
fifth	 num. 第五 n. 五分之一
organization	 n. 组织；团体，机构
hall	 n. 门厅；过道；会堂
prevail	 v. 流行；胜，优胜
continue	 v. 继续，连续；延伸
microcomputer	 n. 微型计算机，微机
persist	 v. 坚持，固执；持续
unless	 conj. 除非，如果不
manage	 v. 管理；设法；成功应付，对付
owner	 n. 物主，所有人
weep	 v. 哭泣，流泪
vacuum	 n. 真空；真空吸尘器
realize	 v. 认识到；实现
predict	 v. 预言，预告，预测
portable	 adj. 轻便的；手提的
ditch	 n. 沟，沟渠，渠道
relief	 n. 减轻；救济；援救
accommodate	 v. 容纳；供应，供给，提供住宿
laboratory	 n. 实验室，研究室
brush	 n. 刷子，毛刷；画笔
microscope	 n. 显微镜
emperor	 n. 皇帝
render	 v. 使得；表示，给予
plug	 n. 塞子；插头 v. 塞
consult	 v. 请教；查阅
candle	 n. 蜡烛
range	 n. 一系列；范围；山脉
adult	 n. 成年人 adj. 成年的
approach	 v. 向…靠近 n. 靠近
eventually	 adv. 终于；最后
glad	 adj. 高兴的；乐意的
conclude	 v. 推断出；结束
radiation	 n. 辐射；辐射能
accidental	 adj. 偶然的；非本质的
dog	 n. 狗，犬；犬科动物
automation	 n. 自动，自动化
huge	 adj. 巨大的，庞大的
few	 adj. 很少的；少数的
angel	 n. 天使；安琪儿，天使〔指仁慈、善良或美丽的人〕
handsome	 adj. 英俊的；相当大的
class	 n. 班，班级；阶级；等级
nation	 n. 国家；民族
complaint	 n. 抱怨；怨言；控告
era	 n. 时代，年代；纪元
port	 n. 港，港口
column	 n. 柱，支柱，圆柱
message	 n. 信息，消息；启示，要旨，寓意
pack	 v. （把…）打包；（把…）装箱；挤满 n. 包
black	 adj. 黑色的；黑暗的
scan	 v. 细看；浏览；扫描
variation	 n. 变化，变动；变异
planet	 n. 行星
lend	 v. 把…借给；贷（款）
reflection	 n. 映象；反射；反映
acre	 n. 英亩
removal	 n. 移动；移走；除掉；搬迁
sail	 n. 帆；船 v. 航行
France	 n. 法国，法兰西
superior	 adj. 有优越感的；较高的
cafeteria	 n. 自助食堂
costly	 adj. 昂贵的；代价高的
ideal	 adj. 理想的
sample	 n. 样品；标本
continuous	 adj. 连续不断的，持续的
joy	 n. 欢乐，喜悦；乐事
navy	 n. 海军
fabric	 n. 织物，纺织品；结构
evolve	 v. 使进化；使发展
eliminate	 v. 消灭，消除；排除
staff	 n. 全体职员，员工；工作人员；参谋
repeat	 v. 重说，重做 n. 重演，重现
narrow	 adj. 狭的，狭窄的
freight	 n. 货运；货物；运费
educate	 v. 教育；培养；训练；教导
fence	 n. 栅栏
lick	 v. 舔；舔吃
necessary	 adj. 必要的；必然的
primitive	 adj. 原始的；老式的，简陋的
read	 v. 读，看懂
and	 conj. 和，又，并；则，那么
complain	 v. 抱怨，诉苦；控告
thrust	 v. 插，刺 n. 猛冲，猛刺；推进
junior	 adj. 青少年的 n. 晚辈
leading	 adj. 最主要的
spur	 n. 刺激物 v. 刺激
commercial	 adj. 商业的；商品化的
extraordinary	 adj. 非同寻常的；特别的（会议）
inspire	 v. 鼓舞；给…以灵感
climate	 n. 气候；地带；风气
outward	 adj. 外面的；向外的
pessimistic	 adj. 悲观的；厌世的
frost	 n. 冰冻，严寒；霜
curse	 n. 诅咒，咒骂
heroic	 adj. 英雄的；英勇的
dive	 v. 跳水；潜水；俯冲
survey	 v. 调查；测量
leak	 v. 漏；泄露 n. 漏洞
democratic	 adj. 民主的，民主政体的
apart	 adv. 相隔；分开；除去
resort	 vi. 求助，凭借；诉诸于 n. 诉诸
utter	 adj. 完全的，彻底的
penetrate	 v. 穿过
passenger	 n. 乘客，旅客
compete	 v. 竞争；对抗；比赛
boast	 v. 自夸，吹嘘
breadth	 n. 宽度，幅度；幅面
unique	 adj. 唯一的，独一无二的
opportunity	 n. 机会，良机
precious	 adj. 珍贵的，宝贵的
accurate	 adj. 准确的，正确无误的
feeble	 adj. 虚弱的；微弱的
kind	 n. 种类
helpful	 adj. 给予帮助的；有用的
apology	 n. 道歉，认错，谢罪
lighten	 v. 照亮，使明亮
hot	 adj. 热的；刺激的；辣的
hasty	 adj. 急速的；仓促的
civil	 adj. 公民的；普通公民的；平民的
able	 adj. 有能力的；出色的
drive	 v. 驾驶；打入；驱
eleventh	 adj. 第十一（个）
friction	 n. 摩擦；摩擦力
expectation	 n. 期待，预期；期望
commission	 n. 委员会；委任状
old	 adj. 老的；…岁的
night	 n. 夜，夜间
joyful	 adj. 十分喜悦的，快乐的
highly	 adv. 很，非常；高度地
full	 adj. 满的；完全的
detail	 n. 细节；枝节
foot	 n. 脚；最下部；英尺
tag	 n. 标签；附加语
cash	 n. 现金，现款
vanish	 v. 突然不见，消失
movie	 n. 电影；电影院
convert	 v. 使转变；使改变
although	 conj. 尽管，虽然
submerge	 v. 浸没；潜入水中
event	 n. 事件，大事；事变
jam	 n. 果酱
display	 v. 陈列，展览；显示
mutton	 n. 羊肉
exhaust	 v. 使筋疲力尽；用尽
pot	 n. 锅；壶，罐，盆
murder	 n. 谋杀，凶杀 v. 谋杀，凶杀
language	 n. 语言；语言课程
wire	 n. 金属线；电缆
honourable	 adj. 光荣的
nationality	 n. 国籍；民族，族
remove	 v. 移动，搬开；脱掉
spacecraft	 n. 航天器，宇宙飞船
channel	 n. 海峡；渠道；频道
lunch	 n. 午餐，（美）便餐
form	 n. 形式；形状 v. 形成
soak	 v. 浸，泡
mobile	 adj. 运动的；流动的
dim	 adj. 昏暗的；朦胧的
death	 n. 死，死亡；灭亡
inevitable	 adj. 不可避免的，必然的
host	 n. 主人；东道主
Marxist	 adj. 马克思主义的
pork	 n. 猪肉
expect	 v. 预料，预期；等待
disorder	 n. 骚乱；混乱，杂乱
triumph	 n. 凯旋；胜利 v. 成功
jaw	 n. 颌，颚
peak	 n. 山顶，巅 adj. 最高的
practically	 adv. 实际上；几乎
exclusively	 adv. 专门地
noble	 adj. 贵族的；高尚的
liberty	 n. 自由；释放；许可
graceful	 adj. 优美的，优雅的
joint	 n. 关节；接头，接缝
sweep	 v. 扫；刮起；扫过
session	 n. 一段时间；会议
countryside	 n. 乡下，农村
miss	 n. 小姐
hundred	 num. 百，百个 n. 许多
tube	 n. 管；电子管，显像管
jungle	 n. 丛林，密林，莽丛
fool	 n. 蠢人，傻子 v. 欺骗
optical	 adj. 眼的；光学的
attentive	 adj. 注意的；有礼貌的
anybody	 pron. 任何人
complete	 adj. 完整的；完成的
depth	 n. 深度；深厚；深处
participate	 v. 参与，参加；分享
tire	 v. 疲劳，累；厌倦
God	 n. 神，神像；上帝
habit	 n. 习惯；习性
enlarge	 v. 扩大，扩展；放大
bargain	 n. 交易 v. 议价
revolutionary	 adj. 革命的 n. 革命者
instance	 n. 例子，实例，事例
considerate	 adj. 考虑周到的；体谅的
dismiss	 v. 不再考虑；解雇
dare	 v. 敢；竟敢
odour	 n. 气味，味道
cultivate	 v. 耕；种植；培养
thunder	 n. 雷 v. 打雷；吼出
enclose	 v. 附上；围住，圈起
enter	 v. 走进，进入；参加
introduce	 v. 介绍；引进；传入
judgement	 n. 判断；意见；审判
pool	 n. 游泳池；水塘，水池
daring	 adj. 大胆的，勇敢的
postpone	 v. 延迟，推迟，延缓
telegram	 n. 电报
fund	 n. 基金；资金
lifetime	 n. 一生，终身
control	 v. 控制；克制 n. 控制
bronze	 n. 青铜；青铜制品
pit	 n. 坑，地坑；煤矿
lab	 n. 实验室，研究室
dynamic	 adj. 有活力的；动力的
disable	 v. 使无能，使伤残
comparative	 adj. 比较的；相对的
gate	 n. 大门；篱笆门
seed	 n. 种（子），籽；起因，萌芽
worthwhile	 adj. 值得花时间的
fame	 n. 名声，名望
doubtful	 adj. 难以预测的；怀疑的
distinguish	 v. 区别，辨别；认别
concert	 n. 音乐会，演奏会
famine	 n. 饥荒
slice	 n. 薄片，切片；部分
invade	 v. 入侵，侵略；侵袭
celebrate	 v. 庆祝；歌颂，赞美
prisoner	 n. 囚犯
temporary	 adj. 暂时的，临时的
princess	 n. 公主；王妃
treasure	 n. 财富；珍宝 v. 珍视
ill	 adj. 有病的；坏的 adv. 恶劣地；讨厌地
comrade	 n. 亲密的同伴；同志
fragment	 n. 碎片，破片，碎块
problem	 n. 问题；习题，问题
enough	 det. 足够的 adv. 足够地
address	 n. 地址；演说
bath	 n. 浴，洗澡；浴缸
invent	 v. 发明，创造；捏造
provision	 n. 供应；预备；存粮
coordinate	 v. 使协调，调节
devote	 v. 将…奉献，致力于
inside	 prep. 在…里面 n. 内部
valid	 adj. 有效的；正当的
oh	 int. 嗬，哦，唉呀
liberate	 v. 解放；释放
talk	 v. 讲话；谈论
ever	 adv. 在任何时候；曾经
bark	 n. 吠叫声 v. 吠，叫
horror	 n. 恐怖；战栗；憎恶
deduce	 v. 演绎，推论，推断
deserve	 v. 应受；值得
overcome	 v. 克服；战胜
angry	 adj. 愤怒的，生气的
Asian	 adj. 亚洲的 n. 亚洲人
dress	 n. 服装
inefficient	 adj. 效率低的，无能的
mouthful	 n. 满口，一口
appetite	 n. 食欲，胃口；欲望
hospital	 n. 医院
fortnight	 n. 两星期，十四天
chew	 v. 咀嚼，嚼碎
optional	 adj. 可以任意选择的
assist	 v. 援助，帮助
carpet	 n. 地毯，毡毯，毛毯
probability	 n. 可能性；概率
railway	 n. 铁路，铁道
each	 det,pron. 各，各自
explosion	 n. 爆炸，炸裂；爆发
racial	 adj. 种族的；人种的
clerk	 n. 办事员，职员；店员
asleep	 adj. 睡着的，睡熟的
possible	 adj. 可能的；可能存在的
hostess	 n. 女主人
exception	 n. 例外，除外
cathedral	 n. 总教堂；大教堂
acceptance	 n. 接受，验收；承认
might	 v. 可能，会，也许
unite	 v. 联合
ox	 n. 阉牛；牛；公牛
recovery	 n. 重获；痊愈；恢复
fellow	 n. 家伙；伙伴
brown	 n. 褐色，棕色
blind	 adj. 瞎的；盲目的
dash	 v. 使猛撞；溅 n. 猛冲
must	 v. 必须；必然要
importance	 n. 重要；重要性
reception	 adj. 接待；招待会
cap	 n. 帽子，便帽；帽状物
captain	 n. 陆军上尉；队长
rigid	 adj. 刚硬的；僵硬的
mistake	 n. 错误 v. 误解，弄错
depart	 v. 离开，起程；出发
engage	 v. 使从事于；聘用
crazy	 adj. 疯狂的，荒唐的
butcher	 n. 屠夫；屠杀者
pay	 v. 支付；付给；给予
lonely	 adj. 孤独的；荒凉的
corn	 n. 谷物；（英）小麦
pierce	 v. 剌穿
revise	 v. 修订，校订；修改
primarily	 adv. 首先；主要地
field	 n. 田野；田；运动场
compromise	 n. 妥协，和解
crane	 n. 起重机，摄影升降机
future	 n. 将来，未来；前途
external	 adj. 外部的，外面的
fraction	 n. 小部分；片断；分数
delicate	 adj. 纤细的；易碎的
abundant	 adj. 丰富的；大量的
brittle	 adj. 脆的；易损坏的
claim	 v. 声称，主张；索取
appreciate	 v. 领会；感谢；欣赏
about	 prep. 关于；在…周围
parade	 n. 游行；检阅 v. 游行
furnish	 v. 装备，布置 （房间、建筑物）；供应，提供
mourn	 v. 哀痛，哀悼
hazard	 n. 危险；公害
choice	 n. 选择，抉择
liable	 adj. 易于…的；可能的
sum	 n. 金额；总数
foreigner	 n. 外国人
mud	 n. 软泥，泥浆
reveal	 v. 揭示，揭露；展现
fold	 v. 折叠；合拢 n. 褶
beard	 n. 胡须，络腮胡子
illustrate	 v. （用图等）说明
protect	 v. 保护，保卫，警戒
airline	 n. 航空公司
military	 adj. 军事的；军人的
Negro	 n. 黑人
deep	 adj. 深的；纵深的
storey	 n. （层）楼
willing	 adj. 愿意的，心甘情愿的
quarter	 n. 四分之一；一刻钟
obey	 v. 顺从
pattern	 n. 型，式样；模，模型
lightly	 adv. 轻轻地，轻松地
suppose	 v. 猜想；假定
case	 n. 情况；病例；事实
overcoat	 n. 外衣，大衣
installation	 n. 安装；装置；设施
niece	 n. 侄女，外甥女
incline	 n. 斜坡 v. 使倾斜
superficial	 adj. 肤浅的；表面的
appointment	 n. 约定，约会；任命
tyre	 n. 轮胎，车胎
failure	 n. 失败；失败的人
beauty	 n. 美，美丽；美人
painting	 n. 油画；绘画；着色
frown	 v. 皱眉，蹙额
drown	 v. 淹死，溺死
resemble	 v. 像，类似
pressure	 n. 压力；〔工作或生活中的〕压力；压，按
remarkable	 adj. 异常的，非凡的
muscle	 n. 肌肉，肌；体力
nap	 n. 小睡，打盹，瞌睡
polish	 v. 磨光；使优美
company	 n. 公司，商号；同伴
critical	 adj. 批评的；决定性的
renew	 v. 使更新
maintain	 v. 维持；赡养；维修
computer	 n. 计算机，电脑
feasible	 adj. 可行的；可能的
transformer	 n. 变压器
vehicle	 n. 车辆，机动车
politician	 n. 政治家；政客
regard	 v. 把…看作
oral	 adj. 口头的；口的
height	 n. 高，高度；高处
approximately	 adv. 近似地，大约
long	 v. 渴望，极想念
bit	 n. 一点，一些，小片
sole	 n. 脚底；鞋底，袜底
imprison	 v. 关押，监禁；限制
folk	 n. 人们；家属，亲属
carve	 v. 刻，雕刻；切开
practice	 n. 练习；实践；业务
element	 n. 成分；要素；元素
rapid	 adj. 快的
rational	 adj. 理性的；出于理性的
indispensable	 adj. 必不可少的，必需的
contact	 v. 与…联系
treatment	 n. 待遇；治疗，疗法
insure	 v. 给…保险；确保
excellent	 adj. 优秀的，杰出的
loyal	 adj. 忠诚的，忠心的
dull	 adj. 枯燥的；不鲜明的
ghost	 n. 鬼，灵魂；鬼魂
mortal	 adj. 终有一死的；致死的
identify	 v. 认出，识别，鉴定
iron	 n. 铁 v. 烫（衣）
China	 n. 中国
collision	 n. 碰撞；冲突
harmful	 adj. 有害的
volume	 n. 音量；容积；卷，册
bull	 n. 公牛；雄的象
mask	 n. 面具；伪装 v. 掩饰
crime	 n. 犯罪；罪，罪行
debate	 n. 争论，辩论 v. 争论，辩论
newspaper	 n. 报纸，报
criticize	 v. 批评；非难；评论
pencil	 n. 铅笔
courage	 n. 勇气，胆量，胆识
forehead	 n. 额头，前部
perceive	 v. 理解；察觉，发觉
place	 n. 地方，地点；住所
joke	 n. 笑话 v. 说笑话
sheet	 n. 被单；纸张；薄板
dot	 n. 点，圆点 v. 打点于
balance	 v. 使平衡 n. 天平
melon	 n. 瓜，甜瓜
injure	 v. 伤害，损害，损伤
cucumber	 n. 黄瓜
flame	 n. 火焰；热情
less	 adj. 更少的 adv. 更少地
peace	 n. 和平；平静；和睦
solve	 v. 解决；解答，解释
basis	 n. 基础，根据
once	 adv. 一次；曾经
bus	 n. 公共汽车
husband	 n. 丈夫
haircut	 n. 理发
kiss	 v. 吻 n. 吻
pet	 n. 爱畜；宠儿
harvest	 n. 收获；收成 v. 收割
considerable	 adj. 相当大的；重要的
cordial	 adj. 真诚的，诚恳的
sketch	 n. 略图；速写；概略
avenue	 n. 大街；林荫道，道路
bright	 adj. 明亮的；聪明的
intimate	 adj. 亲密的；个人的
locate	 v. 探明，找出，查出
pride	 n. 骄傲；自豪 v. 自夸
ore	 n. 矿，矿石，矿砂
cupboard	 n. 碗柜，碗碟橱；食橱
battery	 n. 电池；一套，一组
impression	 n. 印象；印记
waterproof	 adj. 不透水的，防水的
find	 v. 找到；找出；发觉
chapter	 n. 章，回，篇
powerful	 adj. 有权威的；强有力的
overtime	 n. 加班；加班的时间
carrier	 n. 运输工具；运载工具
troop	 n. 军队；一群，大量
garbage	 n. 垃圾，污物，废料
literature	 n. 文学；文献
excessive	 adj. 过多的，极度的
nasty	 adj. 龌龊的；淫猥的
aboard	 adv. 在船（车）上；上船
outdoor	 adj. 户外的，室外的
accuse	 v. 指责；归咎于
heaven	 n. 天堂；天，天空
include	 v. 包括，包含
poisonous	 adj. 有毒的，有害的
medicine	 n. 内服药；医学
Europe	 n. 欧洲
examine	 v. 检查，仔细观察
halt	 v. 停止；立定 n. 停住
endure	 v. 忍受；容忍
opening	 adj. 开始的 n. 开始
silence	 n. 沉默 v. 使沉默
missile	 n. 导弹；发射物
executive	 adj. 执行的 n. 执行者
reliability	 n. 可靠性
granddaughter	 n. 孙女，外孙女
occasional	 adj. 偶然的；临时的
fortunate	 adj. 幸运的；侥幸的
ear	 n. 耳朵；听力，听觉
sequence	 n. 次序
guarantee	 n. 保证；担保物
link	 v. 有环连接 n. 环
actual	 adj. 实际的
after	 prep. 在…以后；次于
access	 n. 通道，入口
recently	 adv. 最近，新近
intellectual	 n. 知识分子 adj. 智力的
rotate	 v. 旋转
deck	 n. 甲板；舱面；层面
plough	 n. 犁 v. 犁，耕
poison	 n. 毒，毒药 v. 毒害
perhaps	 adv. 也许，可能，多半
acid	 n. 酸 adj. 酸的；酸性的
elect	 v. 选举，推选；选择
cent	 n. 分；分币
arbitrary	 adj. 随心所欲的；专断的
either	 det,pron. （两者）任何一个
Atlantic	 adj. 大西洋的 n. 大西洋
actor	 n. 演剧的人
fever	 n. 发热，发烧；狂热
mostly	 adv. 主要的，大部分
player	 n. 游戏的人；比赛者
swell	 v. 膨胀；增长；隆起
experience	 n. 经验，感受；经历
creative	 adj. 创造性的，创作的
perfect	 adj. 完美的；完全的
affection	 n. 慈爱，爱；爱慕
largely	 adv. 大部分；大量地
extent	 n. 程度；广度；范围
better	 adj. 较好的 adv. 更好地
disappear	 v. 消失；不见；失踪
motivate	 v. 促动；激励，激发
moreover	 adv. 再者，加之，此外
regulate	 v. 管理，控制；调整
respectively	 adv. 各自地，分别地
exit	 n. 出口；退场 v. 退出
chairman	 n. 主席；议长，会长
journal	 n. 日报，杂志；日志
below	 prep. 在…下面（以下）
belief	 n. 信念；信任，相信
minority	 n. 少数；少数民族
over	 prep. 在…上方；超过
conversation	 n. 会话，非正式会谈
factory	 n. 工厂，制造厂
cherry	 n. 樱桃；樱桃树
consent	 n. 同意，赞成 v. 同意
else	 adv. 其它，另外 adj. 别的
mouse	 n. 鼠，耗子
disk	 n. 圆盘，唱片；磁盘
legal	 adj. 法律的；合法的
fundamental	 adj. 基础的，基本的
liquor	 n. 酒
ancient	 adj. 古代的；古老的
pillow	 n. 枕头
grip	 v. 握紧，抓牢 n. 紧握
limitation	 n. 限制；限度，局限
chief	 adj. 首席的；主要的
dark	 adj. 暗的；黑色的
stoop	 v. 俯身；弯身 n. 曲背；驼背
parliament	 n. 议会，国会
weld	 v. 焊接，熔接 n. 焊接点
hang	 v. 挂，悬；吊死
pacific	 adj. 和平的 n. 太平洋
regulation	 n. 规则，规章；管理
against	 prep. 倚在；逆，对着
blood	 n. 血，血液；血统
life	 n. 生命；一生；寿命
cannon	 n. 大炮，火炮；榴弹炮
evening	 n. 傍晚，黄昏，晚上
confine	 v. 禁闭；限制
ceiling	 n. 天花板，顶蓬
ashamed	 adj. 惭愧（的）；羞耻（的）
just	 adv. 正好；只是；刚才
necessity	 n. 必要性；必然性
mercury	 n. 水银，汞
materialism	 n. 唯物主义
let	 v. 允许，让；使
darling	 n. 亲爱的人；宠儿
billion	 num. 万亿（英）
frame	 n. 框架，框子；构架
cheek	 n. 面颊，脸蛋
incident	 n. 发生的事；事件
head	 n. 头；上端 v. 率领
acquaintance	 n. 熟人；认识；了解
fifty	 num. 五十，五十个
people	 n. 人；人民，民族
injection	 n. 注射；注入
fetch	 v. 拿来；请来，接去
indignant	 adj. 愤慨的，义愤的
carpenter	 n. 木工，木匠
function	 n. 功能；职务；函数
transparent	 adj. 透明的；易识破的
exposure	 n. 暴露；揭露；曝光
sightseeing	 n. 观光，游览
around	 prep. 在…周围
everybody	 pron. 每人，人人
cart	 n. 二轮运货马车
theoretical	 adj. 理论（上）的
herd	 n. 兽群，牧群 v. 放牧
fatal	 adj. 致命的
England	 n. 英格兰；英国
sportsman	 n. 运动员
intensity	 n. 强烈，剧烈；〔光、声等的〕强度
violet	 n. 紫罗兰
agree	 v. 同意；持相同意见
lens	 n. 镜头；透镜，镜片
attitude	 n. 态度，看法；姿势
dirt	 n. 尘，污物，污垢；土
assemble	 v. 集合，召集；装配
slender	 adj. 细长的；微薄的
sticky	 adj. 粘性的；胶粘的
drawer	 n. 抽屉
dormitory	 n. 集体寝室；宿舍
ray	 n. 光线；射线，辐射线
delicious	 adj. 美味的；怡人的
admit	 v. 承认；准许…进入
thread	 n. 线；丝；螺纹；头绪
poet	 n. 诗人
somehow	 adv. 由于某种原因
mate	 n. 伙伴，同事；配偶
character	 n. 性格；角色；特性
across	 prep. 横过；在…对面
organ	 n. 器官；管风琴；机构
gesture	 n. 姿势，手势；姿态
equality	 n. 等同，平等；相等
landlady	 n. 女房东；女地主
attend	 v. 出席；照顾，护理
proof	 n. 证据；证明；校样
cover	 v. 盖；包括 n. 盖子
fasten	 v. 扎牢，扣住
push	 v. 推；鼓励；敦促；逼迫
rib	 n. 肋，肋骨
light	 adj. 轻的；少量的
stir	 v. 搅动；搅和；搅拌
earthquake	 n. 地震；大震荡
concentration	 n. 专注；集中；浓度
make	 v. 做，制造；使
wind	 v. 绕，缠绕
guilty	 adj. 内疚的；有罪的
blaze	 n. 火；闪光 v. 燃烧
invest	 v. 投资；投入
cloudy	 adj. 多云的；云一般的
grandson	 n. 孙子，外孙子
feeling	 n. 感觉，知觉；感情
trap	 n. 陷阱；诡计 v. 诱骗
race	 n. 比赛，竞赛，竞争
overlook	 v. 忽略；未注意到；眺望
spade	 n. 铲，铁锹
whistle	 n. 口哨 v. 吹口哨
action	 n. 行动；作用；功能
bolt	 n. 插销；螺栓 v. 闩门
drug	 n. 药，药物，药材
nitrogen	 n. 氮
listen	 v. 听，留神听；听从
murderer	 n. 杀人犯，凶手
evidence	 n. 根据；证据，证人
inhabitant	 n. 居民，住户
instead	 adv. 代替，顶替；反而
alike	 adj. 相像；十分相似
lesson	 n. 功课，课；课程
medium	 n. 媒质 adj. 中等的
lest	 conj. 以免；惟恐
cancel	 v. 取消，撤销
butter	 n. 黄油；奶油
pill	 n. 药丸，丸剂
fairly	 adv. 相当；公平地
horn	 n. 号角；喇叭；角
melt	 v. 融化
preposition	 n. 前置词，介词
fruitful	 adj. 多产的；肥沃的
middle	 n. 中部 adj. 中部的
leap	 v. 跳，跃 n. 跳跃
million	 num. 百万 n. 许多
know	 v. 知道；认识；通晓
biology	 n. 生物学
voluntary	 adj. 自愿的，志愿的
acquire	 v. 取得；获得；学到
independent	 adj. 独立的；自主的
wheel	 n. 轮，车轮
hole	 n. 洞；孔眼；裂开处
symbol	 n. 象征；符号，记号
curious	 adj. 好奇的；稀奇古怪的
bay	 n. 湾
forbid	 v. 禁止，不许；阻止
refer	 v. 谈到
finally	 adv. 最后
nylon	 n. 尼龙，耐纶
ambition	 n. 雄心，抱负，野心
electric	 adj. 电的，电动的
velocity	 n. 速度
relax	 v. 使松弛
golf	 n. 高尔夫球
bone	 n. 骨，骨骼
glory	 n. 光荣；荣誉的事
interpret	 v. 口译；解释，说明
want	 n. 需要；缺乏
mood	 n. 心情，情绪；语气
coach	 n. 长途公共汽车
examination	 n. 考试；检查，细查
kindness	 n. 仁慈，好意
terror	 n. 恐怖，惊骇
heroine	 n. 女英雄；女主角
cricket	 n. 板球；蟋蟀
retreat	 v. （被迫）退却；后退
curve	 n. 曲线；弯 v. 弄弯
structural	 adj. 结构的，构造的
via	 prep. 经过；通过
misunderstand	 v. 误解，误会，曲解
pond	 n. 池塘
precaution	 n. 预防；警惕
shore	 n. 滨，岸
autumn	 n. 秋，秋季
prospect	 n. 展望；前景，前程
question	 n. 问题；疑问
front	 adj. 前面的 n. 前部
broadcast	 n. 广播，播音
background	 n. 背景，经历；后景
appearance	 n. 外观；出现，来到
fur	 n. 软毛；毛皮，裘皮
pronoun	 n. 代词
coarse	 adj. 粗的，粗糙的
clarify	 v. 澄清，阐明
remote	 adj. 相隔很远的；冷淡的
investigation	 n. 调查，调查研究
boat	 n. 小船，艇
attractive	 adj. 有吸引力的
occupy	 v. 占领；占，占有
agony	 n. 极度痛苦
platform	 n. 站台；讲台；平台
communism	 n. 共产主义
not	 adv. 不，没有
intensive	 adj. 加强的；精耕细作的
maybe	 adv. 大概，或许；也许
disgust	 n. 厌恶，憎恶
utilize	 v. 利用
protection	 n. 保护
connect	 v. 连接，连结；联系
cancel	 vt. 取消， 撤销； 删去
explosive	 adj. 爆炸的； 极易引起争论的 n. 炸药
numerous	 adj. 众多的
govern	 vi. 居支配地位， 占优势 vt. 统治，治理，支配
analyse	 vt. 分析； 分解； 解析
discourage	 vt. 使泄气， 使灰心； 阻止， 劝阻
resemble	 vt. 像， 类似于
remote	 adj. 遥远的； 偏僻的； 关系疏远的； 脱离的； 微乎其微的； 孤高的， 冷淡的； 遥控的
salary	 n. 薪金， 薪水
pollution	 n. 污染， 污染物
pretend	 vt. 装作， 假装
kettle	 n. 水壶
wreck	 n. 失事；残骸；精神或身体已垮的人 vt. 破坏
drunk	 adj. 醉的； 陶醉的
calculate	 vt. 计算； 估计； 计划
persistent	 adj. 坚持的， 不屈不挠的； 持续不断的； 反复出现的
sake	 n. 缘故， 理由
conceal	 vt. 把…隐藏起来， 掩盖， 隐瞒
audience	 n. 听众， 观众， 读者
meanwhile	 adv. 与此同时
possess	 vt. 占用， 拥有
competent	 adj. 有能力的， 能胜任的
investment	 n. 投资， 投资额； 投入
neutral	 adj. 中立的； 中性的
scratch	 v. 抓，搔，扒；刮，擦；刻出 n. 抓痕， 划痕； 抓， 搔， 刮
optional	 adj. 可以任选的
require	 vt. 需要； 要求； 命令
circular	 adj. 圆的；循环的；兜圈子的 n. 通知， 通告
analysis	 n. 分析， 分析报告； 分解； 解析
click	 v. 发出咔嗒声；点击 n. 咔嗒声
fashionable	 adj. 流行的， 时髦的
devise	 vt. 设计， 发明
apparent	 adj. 表面上的， 明显的
journalist	 n. 新闻工作者， 新闻记者
exposure	 n. 暴露， 揭露； 曝光
temper	 n. 韧度；心情，情绪 vt. 调和， 使缓和； 【冶】使回火
protective	 adj. 保护的， 防护的
sideways	 adv&adj. 从一边， 向一边； 在一边； 斜着， 侧身
multicultural	 adj. 融合多种文化的
object	 vi. 反对， 不赞成 n. 实物， 物体； 目的， 目标； 对象， 客体； 宾语
humble	 adj. 谦逊的； 地位低下的； 简陋的
chapter	 n. 章， 回， 篇
harbour	 n. 海港，港口 vt. 庇护； 心怀
independent	 adj. 独立的， 自主的； 无偏见的； 不相关联的
carriage	 n. 客车厢， 四轮马车
cliff	 n. 悬崖， 峭壁
infinite	 adj. 无限的； 无穷的
concede	 vt. 承认， 承认…为真； 承认失败； 允许， 让予； 让步， 认输
elect	 vt. 选举， 推选； 选择
weekly	 adv. 每周 adj. 每周的
result	 vi. 发生； 结果 n. 结果；成果；比分
golf	 n. 高尔夫球运动
selfish	 adj. 自私的， 利己的
sexism	 n. 性别偏见， 性别歧视
commission	 n. 委任状；委员会；佣金，回扣；授权，委托 vt. 委任， 委托
headline	 n. 大字标题； 新闻提要
connect	 vt. 连接， 结合， 联系； 给…接通电话
rational	 adj. 理性的， 理智的； 合理的
policy	 n. 政策， 方针； 保险单
editorial	 adj. 编辑的，主笔的，编者的；社论的，社论式的 n. 社论， 重要评论
resume	 vt. 重新开始， 继续， 恢复 n. 摘要， 概要； 简历
rebuild	 v. 重建， 改造； 复原
committee	 n. 委员会， 全体委员
namely	 adv. 即， 也就是
artistic	 adj. 艺术的， 艺术家的； 富有艺术性的， 精美的； 精彩的
union	 n. 工会， 联盟； 联合， 团结； 一致
plentiful	 adj. 丰富的， 充足的； 大量的
halt	 vt. 停止，立定 n. 停住
component	 adj. 组成的， 构成的 n. 组成部分，部件，组件
consultant	 n. 顾问； 会诊医师， 专科医生
sunset	 n. 日落； 晚霞
obvious	 adj. 明显的
illustration	 n. 说明， 图解， 例证
disguise	 vt. 假扮，化装，伪装；掩盖，掩饰 n. 用来伪装的东西； 伪装， 掩饰
wrap	 vt. 裹，包，捆 n. 披肩
surgery	 n. 外科， 外科手术； 手术室
liberal	 adj. 心胸宽大的， 慷慨的； 自由的， 自由主义的
violent	 adj. 暴力引起的， 暴力的； 猛烈的， 剧烈的
harmony	 n. 调和， 协调， 和谐
resolve	 n&v. 解决， 解答； 决定， 决意
chill	 v. 变冷，感到冷 n. 寒冷， 寒气； 风寒， 寒战
confront	 vt. 迎面遇到， 遭遇； 勇敢地面对， 正视； 使对质， 使当面对证
dominate	 vi. 拥有优势 vt. 在…中占首要地位；支配，统治，控制；耸立于，俯视
imitate	 vt. 模仿， 仿效， 仿制
faithful	 adj. 忠诚的； 如实的； 尽职的
reproduce	 v. 复制， 再现； 繁殖， 生殖
institution	 n. 协会； 制度， 习俗
pad	 n. 垫，衬垫；便笺本；发射台，直升机起落场 vt. 填塞
provocation	 n. 激怒， 刺激； 挑衅， 挑拨
ambition	 n. 雄心， 抱负； 野心； 期望得到的东西
scholarship	 n. 奖学金； 学问， 学识
exceed	 vt. 超过， 胜过， 超出
besides	 adv. 而且 prep. 除…之外
preposition	 n. 介词
enlarge	 vt. 扩大， 扩展， 放大
implement	 n. 工具， 器具， 用具 vt. 使生效， 履行， 实施
export	 vt. 输出， 出口 n. 输出， 出口； 输出品， 出口额
Christ	 n. 基督， 救世主
murder	 n. 谋杀，凶杀；谋杀罪 v. 谋杀；杀害
pat	 adj. 非常恰当的， 适时的 n. 轻拍
fantasy	 n. 想象， 幻想； 想象的产物
horsepower	 n. 马力
visibility	 n. 可见度， 能见度； 可见性， 明显性
invitation	 n. 邀请， 招待； 请柬； 吸引， 诱惑
paw	 v. 用爪子抓， 用蹄扒； 翻找 n. 爪子
enormous	 adj. 巨大的， 庞大的
moisture	 n. 潮湿， 湿气
toast	 n. 烤面包；祝酒，祝酒词 vt. 烘， 烤； 向…祝酒， 为…干杯
frustrate	 vt. 使沮丧， 使灰心； 挫败， 使受挫折
external	 adj. 外部的， 外面的
aside	 adv. 在旁边， 到旁边
circumstance	 n. 情况， 条件； 境遇， 境况； 经济情况
revise	 v. 修订， 修改； 复习
authority	 n. 官方； 权力； 当权者， 行政管理机构； 权威， 专家
creature	 n. 创造物， 产物； 生物， 动物， 家畜
harm	 n&vt. 伤害， 损害
semiconductor	 n. 半导体
rope	 n. 绳，索 vt. 用绳捆
provided	 conj. 假如， 若是
instrument	 n. 仪器， 工具； 乐器
gasoline	 n. 汽油
indispensable	 adj. 必不可少的， 必需的
medium	 adj. 中等的 n. 媒体；媒介物，传导体
lens	 n. 透镜， 镜片， 镜头
wisdom	 n. 智慧， 才智； 名言
fatal	 adj. 致命的， 命运的； 重大的， 决定性的
nowhere	 adv. 任何地方都不
motive	 n. 动机， 目的
romantic	 adj. 浪漫的； 多情的； 有浪漫色彩的， 传奇性的； 不切实际的， 空想的
motivate	 vt. 作为…的动机； 激励， 激发
spoil	 v. 损坏，糟蹋；宠坏，溺爱；变质 n. 战利品， 掠夺物
airline	 n. 航空公司； 航线
multiply	 vt. 增加， 繁殖； 乘
ridge	 n. 脊， 山脊； 垄， 埂， 脊状突起
pilot	 adj. 试验性的， 试点的 n. 引航员；飞行员 vt. 驾驶；为引航；试验，试用
umbrella	 n. 伞， 雨伞
approval	 n. 赞成， 同意， 批准
mobile	 adj. 运动的； 流动的； 多变的
perform	 vt. 做， 履行， 完成； 表演， 演出； 工作情况， 表现
multiple	 adj. 复合的，多重的，多样的 n. 倍数
peak	 vi. 达到高峰， 达到最大值 adj. 最大值的，高峰的 n. 山顶，顶点
evolution	 n. 进化， 演化， 发展
portrait	 n. 肖像， 画像
halfway	 adv. 半路地； 在中途， 在半途 adj. 中途的；部分的；不彻底的
expose	 vt. 使接触； 揭露
concentrate	 v. 全神贯注，全力以赴；集中，聚集；浓缩 n. 浓缩物， 浓缩液
magnet	 n. 磁铁， 磁体； 有吸引力的人或事物
explosion	 n. 爆炸， 爆发， 炸裂； 激增， 扩大
weld	 n&vt. 焊接， 熔接
up-to-date	 adj. 直到最近的， 现代的； 跟上时代的
complaint	 n. 抱怨， 怨言； 控告
translation	 n. 翻译； 译文， 译本
cancer	 n. 癌， 癌症； 肿瘤
personnel	 n. 人员， 员工
hopeless	 adj. 没有希望的， 绝望的
outlook	 n. 观点， 看法； 展望， 前景
fountain	 n. 泉水； 喷泉； 源泉
offense	 n. 犯规， 违法行为； 冒犯， 得罪
breadth	 n. 宽度； 幅度， 幅面
catalog	 n. 目录，目录册；一系列 vt. 将…编入目录， 将编目
channel	 n. 海峡， 水道， 航道； 渠道， 途径； 频道
focus	 v. 聚焦；集中 n. 焦点； 中心
invisible	 adj. 看不见的， 无形的
entire	 adj. 全部的， 整个的
pea	 n. 豌豆
pill	 n. 药丸
wrist	 n. 腕， 腕关节
approach	 vt. 向…靠近 n. 靠近
myth	 n. 杜撰出来的人； 神话
flour	 n. 面粉； 粉， 粉状物质
implication	 n. 含意， 暗示， 暗指； 卷入， 牵连
camel	 n. 骆驼
fierce	 adj. 凶猛的； 狂热的
bump	 vi. 碰，撞；颠簸着前进 n. 碰撞， 猛撞； 肿块； 隆起物
reservation	 n. 预订； 保留； 犹豫； 保留地
per	 prep. 每， 每一
proceed	 vi. 继续进行； 行进， 前进
considering	 prep. 鉴于， 考虑到， 顾及
corporation	 n. 公司， 企业， 社团
loyalty	 n. 忠诚， 忠心
bulb	 n. 电灯泡， 球状物
dismiss	 vt. 不再考虑； 解雇， 解散； 驳回
propose	 v. 提议， 建议， 提出； 提名， 推荐； 打算， 计划； 求婚
intelligence	 n. 智力； 理解力； 情报
reform	 n&v. 改革， 改良， 改造； 改正， 改过自新
draught	 n. 穿堂风，冷风 adj. 〔啤酒〕桶装的，散装的
daylight	 n. 白昼， 日光， 黎明
install	 vt. 安装， 设置； 使就职， 任命
integration	 n. 综合
indication	 n. 指示， 表示， 表明； 象征， 迹象
bulk	 vi. 变得越来越大； 使更大 n. 物体；体积；大批
coach	 n. 长途公共汽车；教练，指导；旅客车厢 vt. 训练， 指导， 辅导
despair	 n. 绝望 v. 绝望，感到无望
champion	 n. 冠军， 得胜者； 捍卫者， 拥护者
gum	 n. 口香糖； 树胶
circuit	 n. 电路， 线路； 环行， 巡行
pine	 vi. 消瘦， 衰弱； 痛苦， 悲哀； 渴望 n. 松树，松木
magnificent	 n. 宏伟的， 壮丽的； 华丽的； 极好的
guy	 n. 家伙， 伙计
respectively	 adv. 各自地， 各个地， 分别地
protection	 n. 保护， 防护
pint	 n. 品脱
restrict	 vt. 限制， 约束， 限定
instant	 adj. 立即的； 紧急的； 可以速食的 n. 瞬间
conjunction	 n. 接合， 连接， 联合； 连词
peer	 vi. 仔细看， 费力地看 n. 同龄人，同等地位的人；贵族
orderly	 adj. 整洁的； 有秩序的
costly	 adj. 昂贵的， 价值高的
roast	 v. 烤，炙，烘 adj. 烤过的， 烘过的 n. 烤肉
violence	 n. 猛烈， 激烈； 暴力
succession	 n. 连续； 一连串； 接替， 继任， 继承
accordingly	 adv. 因此， 所以； 照着
consequence	 n. 结果， 后果； 重要， 重大
product	 n. 产品， 产物； 乘积
particularly	 adv. 特别， 尤其
dominant	 adj. 占优势的， 支配的， 统治的； 居高临下的， 高耸的
heading	 n. 标题， 题词， 题名； 新闻提要
lover	 n. 爱好者； 情人
vinegar	 n. 醋
intellectual	 adj. 智力的 n. 知识分子
cheat	 v. 欺骗；作弊；哄，行骗 n. 欺骗， 欺骗行为； 骗子
framework	 n. 框架， 结构； 准则； 体系
undoubtedly	 adv. 毋庸置疑地， 肯定地
infect	 vt. 传染， 感染； 影响
tide	 n. 潮， 潮汐； 潮流， 趋势
prohibit	 vt. 禁止， 不准
bacteria	 n. 细菌
minor	 vi. 辅修 adj. 较小的，较少的；次要的 n. 未成年人；辅修科目
arrow	 n. 箭， 箭状物； 箭头符号
cop	 n. 警察
fuel	 vi. 加燃料； 加油 n. 燃料，燃料剂 vt. 给…加燃料；刺激
hostile	 adj. 敌方的； 不友善的
aeroplane	 n. 飞机
manner	 n. 方式； 态度； 风度； 礼貌， 规矩
employee	 n. 受雇者， 雇员， 雇工
associate	 vi. 结合； 交往 adj. 副的 vt. 把…联系在一起；使联合 n. 伙伴，同事
pray	 v. 祈祷， 祈求； 请求， 恳求
lad	 n. 男孩， 小伙子
crawl	 vi. 爬， 爬行； 缓慢地行进
identical	 adj. 完全相同的， 同一的
lag	 vi. 走得慢 n. 落后
towel	 n. 毛巾， 手巾
charity	 n. 救济金， 施舍物； 慈善团体， 慈善事业； 宽大， 宽容
academic	 adj. 学院的； 学术的； 纯理论的， 不切实际的
function	 vi. 运作， 运行 n. 功能；职务，职责
employer	 n. 雇佣者， 雇主
pit	 n. 地洞，坑；煤矿，矿井 vt. 使有坑
lap	 v. 舔； 拍打 n. 膝部；一圈，一段
mineral	 n. 矿物， 矿石， 矿物质
stock	 adj. 常用的， 常备的 n. 原料，库存品；股本，公债；世系，血统；汤汁；家畜，牲畜 vt. 储备
representative	 adj. 有代表性的， 典型的 n. 代表，代理人
suspend	 vt. 暂停， 终止； 吊， 悬
pigeon	 n. 鸽子
well-known	 adj. 众所周知的， 著名的
beneath	 adv. 在下方， 在底下 prep. 在…下方；低于，次于；在…掩盖下；连…也不值得，有失…的身份
terror	 n. 恐怖， 惊骇； 引起恐怖的人或事
comparison	 n. 比较， 对照； 比拟， 比喻
surge	 vi. 蜂拥而出；洋溢，奔放；汹涌，奔腾 n. 大浪， 波涛； 高涨； 汹涌
lest	 conj. 唯恐， 以免
heroic	 adj. 英雄的； 英勇的
sway	 v. 摇，摇动；动摇 n. 摇摆， 摇动； 起支配作用的影响
basis	 n. 基础， 根据； 原则
tutor	 v. 当…导师， 当…家庭教师 n. 导师；家庭教师，私人教师
senator	 n. 参议员
adventure	 n. 奇遇； 冒险， 冒险活动
successive	 adj. 连续的， 接连的
condition	 n. 状况， 状态； 环境
thirsty	 adj. 渴的； 渴望的
ceremony	 n. 典礼， 仪式， 礼节
obligation	 n. 义务， 责任
improve	 v. 变得更好； 改善； 提高
gym	 n. 体育馆； 健身房
rarely	 adv. 很少， 难得
evil	 adj. 坏的 n. 邪恶，祸害
governor	 n. 州长； 主管人员； 理事， 董事
twist	 v. 缠绕，盘绕；转动，旋动；捻，搓；歪曲，曲解；扭歪，扭伤；曲折前进；转身 n. 扭弯； 转折， 转变； 弯曲， 曲折处
locate	 vt. 探明， 找出； 把…设置在， 使…坐落于
unite	 v. 联合， 统一
lavatory	 n. 盥洗室， 厕所
exterior	 adj. 外部的；对外的 n. 外部， 外表
technique	 n. 技术， 技巧， 技能
combat	 n. 战争，斗争，格斗 vt. 与…斗争， 与…战斗
troop	 vi. 成群结队而行 n. 军队，部队；一群，大量
scenery	 n. 风景， 景色； 舞台布景
unity	 n. 单一， 统一， 团结； 和睦， 协调
effective	 adj. 有效的； 有影响的
pursue	 vt. 继续； 从事； 追赶， 追踪； 追求
similarly	 adv. 类似地， 相似地
convey	 vt. 表达， 传递； 运送， 输送
muscle	 n. 肌肉， 体力； 力量， 实力
design	 vt. 设计；预定，指定 n. 设计， 构想； 图样； 企图
extra	 adv. 特别地 adj. 额外的；特别的 n. 额外的事物， 额外费用
generous	 adj. 慷慨的； 宽厚的； 大量的
victim	 n. 牺牲者， 受害者
possibility	 n. 可能； 可能的事
lane	 n. 小路； 跑道； 航道， 航线
garlic	 n. 大蒜
chief	 adj. 主要的，为首的；总的 n. 首领， 长官； 酋长， 族长
accord	 vi. 相符合； 相一致 n. 一致，符合；谅解，协议 vt. 使符合；使一致；调节；授予，赠与，给予
aircraft	 n. 飞机， 飞行器
automatic	 adj. 自动的，机械的；不假思索的，无意识的；必然的，自然的 n. 自动手枪； 有自动装置的汽车
doubtful	 adj. 难以预测的； 怀疑的
despite	 prep. 不管， 不顾
opening	 adj. 开首的，开始的 n. 口子， 洞， 孔； 开始； 空缺
industrial	 adj. 工业的， 产业的
obey	 v. 顺从， 服从
conduct	 n. 举止， 行为； 指导； 管理； 实施 vt. 进行； 管理， 指挥， 引导； 传输， 传导
stable	 adj. 稳定的，不变的；沉稳的，持重的 n. 厩， 马厩， 牛棚
lamb	 n. 羔羊， 小羊； 羔羊肉
pillow	 n. 枕头
harness	 vt. 治理；给上挽具 n. 马具， 挽具
fantastic	 adj. 极好的， 极出色的， 了不起的； 极大的； 难以相信的； 异想天开的， 不实际的； 奇异的， 古怪的
sketch	 v. 绘…的略图， 画…的素描； 概述 n. 略图；梗概；素描，速写
tidy	 adj. 整洁的，整齐的 v. 整洁， 整齐
respond	 vi. 回答， 答复； 作出反应， 响应
incident	 n. 发生的事， 事件
maintenance	 n. 维持； 保养； 抚养费
marry	 v. 娶， 嫁； 为…证婚； 结婚， 结合
decay	 vi. 腐烂；衰败 n. 腐烂
absorb	 vt. 吸收； 吸引…的注意， 使全神贯注； 把…并入， 同化
supply	 n&vt. 供给， 供应
concern	 n. 关切的事，有关的事；关心，挂念；关系，关联；公司，企业 vt. 涉及， 有关； 使关心， 使担心
circulate	 v. 循环， 流通； 流传， 散布， 传播
liberty	 n. 自由； 许可， 准许； 过于随便， 放肆
liable	 adj. 易于…的； 可能的
cargo	 n. 船货， 货物
confidential	 adj. 秘密的， 机密的； 亲信的
drift	 vi. 漂流，漂泊 n. 漂流； 大意， 主旨； 趋势
element	 n. 成分， 要素， 元素； 基础， 纲要； 自然力
chaos	 n. 混乱， 紊乱
mankind	 n. 人类
abundant	 adj. 丰富的， 富裕的； 大量的， 充足的
pace	 vi. 踱步 n. 步，步速；速度；节奏
exclaim	 vi. 呼喊， 惊叫
probable	 adj. 很可能的， 大概的
forecast	 v. 预测， 预报 n. 预测，预报
uncover	 vt. 揭露， 暴露； 揭开…的盖子
recognize	 vt. 认出， 识别； 承认； 赏识， 表彰， 报偿
pack	 vt. 捆扎，把…打包；使挤在一起，塞满 n. 包， 小盒
restraint	 n. 抑制， 限制， 克制； 约束措施， 约束条件
input	 n. 输入；投入的资金；输入的数据 vt. 把…输入计算机
cue	 n. 暗示，信号；提示 vt. 提示； 暗示
volt	 n. 伏特， 伏
reality	 n. 现实， 实际； 真实
stereotype	 n. 陈规，老套，固定的模式；铅版 vt. 把…浇铸成铅版； 对…形成固定看法
enroll	 vi. 入学，加入 vt. 招收， 吸收
offend	 vt. 冒犯， 伤害…的感情； 使厌恶； 违反
molecule	 n. 分子
resign	 vi. 辞职 vt. 辞去， 放弃； 使听从， 使顺从
bathe	 v. 洗澡； 游泳
workman	 n. 工人， 劳动者， 工匠
sophisticated	 adj. 老于世故的； 高级的； 精密的， 复杂的； 高雅的
sunrise	 n. 日出； 朝霞
entertainment	 n. 娱乐， 文娱节目， 表演会； 招待， 款待， 请客
document	 n. 公文，文件；证件 vt. 用文件等证明
starve	 v. 挨饿， 饿死
battery	 n. 电池， 蓄电池； 排炮， 炮组； 一系列， 一套
chase	 v. 追逐， 追赶； 追求
accident	 n. 意外， 事故
marine	 adj. 海的， 海生的； 海事的， 海军的， 海运的 n. 海军陆战队士兵
clay	 n. 黏土， 泥土； 肉体
anyway	 adv. 无论如何， 至少； 不论以何种方式， 无论从什么角度
promote	 vt. 促进， 增进， 发扬； 提升； 宣传， 推销
routine	 adj. 例行的， 常规的 n. 例行公事，惯例，惯常的程序
attack	 n. 攻击，打击；突然发作 vt. 攻击， 进攻
humour	 n. 幽默， 诙谐， 幽默感
divorce	 v. 离婚； 分离， 脱离 n. 离婚，离异
currency	 n. 通货， 货币； 通行， 流行
canal	 n. 运河， 沟渠； 管
attach	 vt. 缚， 系， 贴； 附加； 使依恋， 使喜爱； 使附属； 认为有
distribute	 vt. 分发， 分送； 分布
ankle	 n. 踝， 踝关节
convict	 vt. 证明…有罪， 宣判…有罪 n. 囚犯
legislation	 n. 法律， 法规； 立法， 法律的制定
clause	 n. 条款； 从句， 分句
quiz	 n. 智力竞赛，问答比赛；小测验 vt. 考查， 盘问
participate	 vi. 参与， 参加； 分享
ingredient	 n. 组成部分， 成分； 原料； 要素， 因素
surplus	 adj. 过剩的， 多余的 n. 过剩，剩余，盈余
correspondence	 n. 信件， 函件； 通信， 通信联系； 符合， 一致， 相似
refresh	 v. 振作精神， 恢复活力
librarian	 n. 图书馆管理员
intimate	 adj. 亲密的；个人的 n. 至交， 密友 vt. 暗示， 提示
reporter	 n. 记者
declaration	 n. 宣布， 宣告； 宣言， 声明； 申报
disclose	 v. 揭示； 透露
religion	 n. 宗教， 宗教信仰
diagram	 n. 图解， 图表， 简图
claw	 v. 抓， 撕 n. 爪，脚爪，螯
torture	 n. 拷问；折磨 vt. 拷打
prayer	 n. 祷告， 祈祷； 祷文； 祈求， 祈望
tragedy	 n. 悲剧， 惨事， 惨案； 悲剧艺术
charm	 n. 迷人的特性，魅力；符咒，咒文 vt. 吸引， 迷住
clap	 v. 拍手，轻拍 n. 拍手， 鼓掌
purple	 adj. 紫的 n. 紫色
quit	 vt. 停止， 放弃； 离开， 辞
economical	 adj. 节约的； 经济学的
prosperous	 adj. 繁荣的， 兴旺的
polish	 vt. 磨光；修改，润色，使优美 n. 擦光剂
cabinet	 n. 橱， 柜； 内阁
chart	 n. 图表；航海图 vt. 用图表表示， 在图上表示
optical	 adj. 眼的， 光学的， 视觉的
fashion	 n. 样子， 方式； 时尚； 流行款式
insurance	 n. 保险， 保险费
preface	 n. 序言， 前言， 引言
principle	 n. 原则， 原理， 道义； 基本信念， 信条
lid	 n. 盖子， 盖
tedious	 adj. 冗长乏味的， 沉闷的
source	 n. 河的源头， 根源； 来源， 出处
secure	 adj. 安全的，可靠的；牢固的，稳固的；无忧虑的，安心的 vt. 得到， 获得； 使安全， 保卫； 缚牢
domestic	 adj. 本国的； 家庭的； 驯养的
deception	 n. 欺骗； 诡计， 骗局
basically	 adv. 基本上， 从根本上说
donation	 n. 捐款， 捐赠物； 捐赠， 赠送
avenue	 n. 林荫道， 道路， 大街
immense	 adj. 巨大的； 极好的
budget	 v. 规划，安排；编预算 adj. 低廉的， 收费公道的 n. 预算，预算拨款
given	 adj. 规定的，特定的；假设的；已知的；有癖好的，有倾向的 prep. 考虑到
hay	 n. 干草
chest	 n. 胸腔， 胸膛； 箱子
tension	 n. 紧张， 不安； 拉紧； 张力， 拉力
definite	 adj. 明确的， 肯定的
reflection	 n. 映像， 倒影； 反射； 反映， 表达； 非议； 沉思， 反省
ultimate	 adj. 最后的，最终的 n. 终极， 顶点
campus	 n. 校园， 学校场地
adapt	 vt. 使适应； 改编
solicitor	 n. 律师， 法律顾问
cheerful	 adj. 快乐的， 愉快的； 使人感到愉快的
merit	 n. 长处，优点，价值；功劳，成绩 vt. 值得， 应受
misunderstand	 vt. 误解， 误会
guilty	 adj. 内疚的； 有罪的
measure	 vt. 测量，度量；衡量 n. 分量； 尺寸； 量具； 计量单位； 量度， 测量； 措施， 办法
overall	 adj. 全面的， 总体的， 全部的
receipt	 n. 发票， 收据； 收入， 进款； 收到， 接到
assume	 vt. 假定， 假设， 臆断； 承担， 担任； 呈现
pepper	 n. 胡椒，胡椒粉 vt. 在…上撒； 使布满
plural	 adj. 复数的 n. 复数
doctoral	 adj. 博士的
concept	 n. 概念， 观念， 设想
resistant	 adj. 抵抗的， 抗…的， 耐…的
effort	 n. 努力， 努力的成果
video	 adj. 录像的；电视的 n. 录像
disaster	 n. 灾难， 灾祸， 天灾； 彻底的失败
agriculture	 n. 农业， 农学
weapon	 n. 武器， 兵器
grocer	 n. 食品商， 杂货商
stare	 n&vi. 盯， 凝视
painful	 adj. 疼痛的， 引起疼痛的； 困难的； 令人不快的
vote	 v. 投票； 表决 n. 票，选票；选举，投票，表决；表决结果，投票总数
steady	 vi. 稳定 adj. 稳的，平稳的；稳定的，持续的；稳固的
enhance	 vt. 提高， 增加， 加强
enclose	 vt. 围住， 圈起； 附上； 把…装入信封
convention	 n. 习俗， 惯例； 公约； 会议
disease	 n. 病， 疾病； 不健全； 弊端
center	 n. 圆心， 正中； 中心
suspicion	 n. 怀疑， 疑心， 猜疑； 一点儿， 少量
purchase	 vt. 买，购买 n. 购买； 购买的物品
refusal	 n. 拒绝
technician	 n. 技术员， 技师
generic	 adj. 【生物】 属的， 类的； 一般的， 普通的
genius	 n. 天才， 天赋， 天资； 天才人物
alike	 adv. 一样地， 相似地； 同样程度地 adj. 同样的，相同的
fund	 n. 资金，基金；存款 vt. 为…提供资金
gravity	 n. 重力， 引力； 严重性； 严肃， 庄重
typical	 adj. 典型的， 代表性的
quotation	 n. 引文， 引语， 语录； 报价， 牌价， 行情
finance	 v. 筹措资金 n. 财政，金融；财源，财务情况
studio	 n. 画室， 摄影室； 播音室， 录音室， 摄影棚
tray	 n. 盘， 托盘， 碟
downward	 adv. 向下地 adj. 向下的
cabbage	 n. 洋白菜， 卷心菜
regulate	 vt. 管理， 控制； 调整， 调节
palm	 n. 手掌， 掌状物； 棕榈树
hydrogen	 n. 氢
infant	 adj. 婴儿的； 幼稚的 n. 婴儿
hen	 n. 母鸡， 雌禽
whoever	 pron. 谁； 无论谁； 究竟是谁
carbon	 n. 碳
unload	 v. 卸， 卸货； 下客； 退出子弹； 卸下胶卷
payment	 n. 支付， 支付的款项
specifically	 adv. 特别地， 特定地； 明确地， 具体地
controversial	 adj. 引起争论的， 有争议的
attain	 vt. 达到， 获得， 完成
trap	 n. 陷阱，捕捉器；圈套，诡计；困境 vt. 设陷阱捕捉； 诱骗
gallery	 n. 画廊， 美术馆； 楼座； 旁听席； 回廊， 走廊
hardware	 n. 五金器具； 硬件
deputy	 n. 副职， 副手； 代表， 代理人
warmth	 n. 暖和， 温暖； 热烈， 热情， 热心
supreme	 adj. 最高的， 最大的； 极度的， 最重要的
ambulance	 n. 救护车； 野战医院
priority	 n. 优先， 重点； 优先考虑的事
slope	 v. 倾斜 n. 倾斜；斜面
philosophy	 n. 哲学， 哲理， 人生哲学
preventive	 adj. 预防性的
creative	 adj. 创造性的， 创作的
junior	 adj. 年少的；资历较浅的 n. 晚辈； 三年级学生
allocate	 vt. 分配， 分派， 把…拨给
provide	 vt. 提供， 供给
standpoint	 n. 立场， 观点
worship	 n. 礼拜；崇拜；信奉 vt. 崇拜
lawn	 n. 草地， 草坪， 草场
primary	 adj. 首要的， 主要的； 基本的； 最初的， 初级的
log	 n. 原木，木料；航海日志 vt. 正式记录
solar	 adj. 太阳的， 日光的； 太阳能的
consume	 vt. 消费， 吃完， 喝光； 毁灭； 使着迷， 充满
formation	 n. 形成， 构成， 形成物； 队形， 排列
layer	 n. 层， 层次
triangle	 n. 三角
accidental	 adj. 偶然的， 意外的
assure	 vt. 使确信； 确保， 向…保证
consult	 vt. 请教； 查阅； 商议
theme	 n. 主题， 题目
smash	 v. 粉碎，打烂；狠打，猛击；破灭，失败；猛撞，猛冲 n. 破碎 ； 猛击， 猛撞； 轰动的演出， 巨大的成功
merely	 adv. 仅仅， 只不过
contradiction	 n. 矛盾， 不一致； 否认， 反驳
fuss	 n&vi. 忙乱； 大惊小怪， 小题大做； 烦恼， 过于忧虑
wealth	 n. 财富， 财产； 丰富
editor	 n. 编辑， 编者， 校订者
barrel	 n. 桶； 圆筒； 枪管
means	 n. 方法， 手段， 工具； 金钱， 财产
desire	 vt. 渴望；要求 n. 愿望； 欲望
survive	 vi. 活下来， 幸存 vt. 从…逃出，幸免于；从中挺过来；比…活得长
efficient	 adj. 效率高的； 有能力的
initial	 adj. 最初的，开始的 n. 首字母
unfortunately	 adv. 不幸地
consistent	 adj. 坚持的， 一贯的； 一致的， 符合的
reverse	 v. 撤销，推翻；反向，倒转；彻底改变 adj. 反向的， 相反的， 倒转的 n. 相反，对立面；反面，背面，后面；挫折，逆境
heterogeneity	 n. 异种， 异质， 不同成分
sword	 n. 剑， 刀
permanent	 adj. 永久的， 固定的
barely	 adv. 仅仅， 只不过， 几乎不
summarize	 vt. 概括， 概述， 总结
chap	 n. 小伙子， 男人， 家伙
facility	 n. 设备； 容易； 场所
beam	 n. 梁，横梁；束，柱；笑容，喜色 vt. 面露喜色； 定向发出， 播送
alliance	 n. 结盟， 联盟
civilization	 n. 文明， 文化； 开化
fiction	 n. 小说； 虚构， 杜撰
possession	 n. 有， 所有； 所有物
replace	 vt. 代替， 取代； 更换， 调换； 把…放回原处
appointment	 n. 任命； 约定； 约会； 委任的职位
hip	 n. 臀部， 髋部
merry	 adj. 欢乐的， 愉快的
dam	 n. 水坝，水堤；障碍物 vt. 筑堤挡住
pessimistic	 adj. 悲观的
commander	 n. 司令官， 指挥员
bloom	 v. 开花 n. 花，开花，开花期；青春焕发
major	 adj. 较大的；主要的；重大的 n. 少校； 专业
zone	 n. 地区， 区域， 范围
emphasis	 n. 强调； 重点， 重要性
interrupt	 v. 打断， 打扰， 中断
feasible	 adj. 可行的， 可能的
prescribe	 vt. 开； 吩咐采用； 规定， 指定
potential	 adj. 潜在的，可能的 n. 潜力， 潜能
bean	 n. 豆， 蚕豆
accustomed	 adj. 惯常的， 习惯的
combination	 n. 结合， 联合； 化合
obtain	 v. 获得； 通用， 流行； 存在
turbine	 n. 叶轮机， 汽轮机
repeatedly	 adv. 一再， 再三， 多次地
curiosity	 n. 好奇， 好奇心； 奇物， 奇事， 珍品
gross	 adj. 总的； 严重的； 粗俗的； 臃肿的
workshop	 n. 车间， 作坊， 创作室； 研讨会， 讲习班
resist	 v. 抵抗， 反抗， 抵制； 抗， 耐； 忍住， 拒受…的影响
liter	 n. 升
format	 n. 设计，安排；格式，样式，版式 vt. 使格式化
sacrifice	 v. 牺牲，舍身；献祭，供奉 n. 牺牲； 供奉； 祭品
illegal	 adj. 不合法的， 非法的
stimulate	 vt. 刺激， 激励， 激发
formal	 adj. 正式的， 礼仪上的
congratulate	 vt. 祝贺， 向…道喜
rainbow	 n. 虹， 彩虹
soak	 v. 浸， 泡
soar	 vi. 猛增， 剧增； 高飞， 升腾； 高涨； 高耸， 屹立
salesman	 n. 售货员， 推销员
interference	 n. 干涉， 干预， 阻碍
fibre	 n. 纤维， 纤维质
sustain	 vt. 保持， 使持续下去； 供养， 维持； 支持， 支撑； 经受， 遭受
entertain	 vt. 使欢乐； 招待， 请客
altitude	 n. 海拔， 高度； 高处
classify	 vt. 把…分类， 把…分级
ease	 n. 容易；舒适 vt. 缓和
critical	 adj. 决定性的； 批评的
colony	 n. 殖民地； 侨居地， 聚居地； 群体， 集群
mathematics	 n. 数学
wagon	 n. 四轮马车， 大篷车； 铁路货车， 客货两用车
elsewhere	 adv. 在别处， 向别处
penetrate	 vt. 透入， 渗入， 进入； 刺穿； 洞察， 了解
principal	 adj. 最重要的，主要的 n. 负责人， 校长； 资本， 本金； 主要演员， 主角
tend	 vi. 照管， 照料， 护理 vt. 易于，往往会；趋向，倾向
exceedingly	 adv. 极端地， 非常
specimen	 n. 样本， 标本， 样品
relief	 n. 轻松， 宽慰； 缓解； 调剂， 消遣； 接替
dimension	 n. 尺寸， 尺度； 方面， 特点； 面积， 规模
introduction	 n. 介绍， 引进； 引言
deserve	 vt. 应受， 值得
process	 n. 过程；制作法；程序 vt. 加工； 办理
philosopher	 n. 哲学家， 哲人
restore	 vt. 恢复， 使回复； 修复， 整修； 归还， 交还
therapy	 n. 治疗， 理疗
alternative	 adj. 两者选一的， 供选择的； 另类的 n. 替换物，选择；选择的自由
banner	 n. 横幅； 旗， 旗帜
concentration	 n. 集中； 专注， 专心； 浓缩， 浓度
encounter	 vt. 遭遇，遇到 n. 遭遇
soda	 n. 碳酸钠， 纯碱； 汽水， 苏打水
colleague	 n. 同事， 同僚
gratitude	 n. 感激， 感谢， 感恩
approve	 vt. 赞成， 称许； 批准
interaction	 n. 相互作用， 干扰
chew	 vt. 咀嚼， 嚼碎
interfere	 vi. 干涉， 干预， 妨碍
apartment	 n. 一套公寓房间
account	 vi. 说明原因； 占 n. 记述；解释；账目
uneasy	 adj. 心神不安的， 忧虑的
tolerate	 vt. 忍受， 容忍； 容许， 承认
developmental	 adj. 发展的
stack	 n. 堆，垛 vt. 堆积， 堆放于
underline	 vt. 在…下面画线； 强调， 使…突出
innocent	 adj. 清白的； 幼稚的； 没有恶意的
compassion	 n. 同情， 怜悯
alphabet	 n. 字母表， 字母系统
parliament	 n. 议会， 国会
evaluation	 n. 评价； 估计
crack	 vi. 爆裂； 噼啪地响； 打， 击 n. 裂缝，裂纹；破裂声
bind	 vt. 捆绑， 包扎； 装订； 约束； 使结合， 使黏合
trim	 adj. 整齐的 vt. 使整齐
appreciate	 vt. 重视， 赏识； 领会， 体会； 感谢； 增值
dental	 adj. 牙齿的， 牙科的
predictable	 adj. 可预料的
diverse	 adj. 不一样的， 相异的； 多种多样的
railway	 n. 铁路
cube	 adj. 清澈透明的 n. 立方形，立方
rally	 v. 集合， 团结； 恢复， 重新振作 n. 集会；公路汽车赛
prime	 adj. 首要的；最好的 n. 青春；全盛时期 vt. 使准备好
happen	 vi. 发生； 碰巧， 恰好
festival	 n. 节日； 音乐节
mild	 adj. 温柔的； 温暖的； 轻微的
profile	 n. 侧面；人物简介；轮廓，形象；姿态，引人注目的状态 vt. 为…描绘； 写…的传略
loyal	 adj. 忠诚的， 忠心的
preference	 n. 喜爱， 偏爱； 偏爱的事物； 优先
impact	 n. 影响， 作用， 冲击
opportunity	 n. 机会， 良机
active	 adj. 活跃的， 积极的； 主动的； 起作用的
dorm	 n. 宿舍
whichever	 pron&adj. 无论哪个， 无论哪些
court	 n. 法院， 法庭； 庭院； 宫廷； 球场
venture	 v. 冒险， 敢于 n. 风险投资，风险项目
mill	 v. 磨， 碾 n. 磨坊；碾磨机；制造厂，工厂
bucket	 n. 水桶， 吊桶； 铲斗
senior	 adj. 资格较老的，地位较高的；年长的 n. 较年长者； 毕业班学生
dose	 n. 剂量， 用量， 一剂
route	 n. 路线， 路程
enthusiasm	 n. 热情， 热心， 热忱； 巨大兴趣
flexible	 adj. 易弯曲的， 灵活的
adult	 adj. 成年的； 成年人的， 适宜于成年人的 n. 成年人
attitude	 n. 态度， 看法； 姿势
relative	 adj. 有关系的，相对的 n. 亲属， 亲戚
organ	 n. 器官； 机构； 管风琴； 新闻媒介
average	 adj. 平均的；平常的 v. 平均 n. 平均数，平均
treatment	 n. 待遇； 治疗， 疗法； 对待， 处理
compare	 vt. 比较， 对照； 把…比作
pluralism	 n. 多重性； 兼职， 兼任
influential	 adj. 有影响的； 有权势的
shiver	 n&vi. 战栗， 颤抖
Bible	 n. 圣经
liquor	 n. 酒， 烈性酒
honourable	 adj. 光荣的； 可敬的； 正直的
characteristic	 adj. 特有的，典型的 n. 特性
transparent	 adj. 透明的； 易识破的； 明显的， 清楚的
interior	 adj. 内部的；内地的 n. 内部
rouse	 vt. 惊起； 唤起； 唤醒
journal	 n. 日报， 杂志， 日志
grasp	 vt. 抓紧，握紧；理解 n. 抓； 理解
involvement	 n. 连累； 包含
spark	 vi. 发出火花 n. 火花，火星
unlike	 adj. 不同的 prep. 不像…
assembly	 n. 立法机构； 议会； 集合； 集会的人们； 装配， 组装
hearing	 n. 听力， 听觉； 听力所及之距离； 意见听取会； 申辩的机会
acquisition	 n. 取得， 获得， 习得； 获得物， 增添的人
volcano	 n. 火山
rigid	 adj. 严格的； 死板的； 刚硬的， 僵硬的
deadline	 n. 最后期限
so-called	 adj. 所谓的， 号称的
grateful	 adj. 感激的； 令人愉快的
chip	 n. 屑片， 碎片； 炸土豆条； 集成电路片， 集成块； 缺口， 瑕疵
chin	 n. 颏， 下巴
emotional	 adj. 感情的， 情绪的
operational	 adj. 运转的； 可使用的； 操作上的
staff	 n. 工作人员；参谋 vt. 为…配备人员
involve	 vt. 使卷入， 牵涉； 包含， 含有
noticeable	 adj. 显而易见的
assemble	 v. 集合， 召集； 装配
blast	 n. 爆炸，冲击波；一阵 vt. 炸
series	 n. 一系列， 连续； 丛书， 连续剧
complicated	 adj. 复杂的， 难懂的
cultivate	 vt. 耕作， 种植； 培养， 陶冶
maximum	 adj. 最大的， 最高的， 顶点的 n. 最大量，顶点
thrive	 vi. 兴旺， 繁荣， 旺盛
purse	 n. 钱包， 女用小提包
represent	 vt. 作为…的代表； 表示， 象征； 描绘， 表现
compete	 vi. 比赛， 竞争， 对抗
dialect	 n. 方言， 土语， 地方话
accountant	 n. 会计人员， 会计师
stocking	 n. 长袜
dim	 adj. 昏暗的；朦胧的；模糊不清的 v. 变暗淡
emergency	 n. 紧急情况， 突然事件
dip	 v. 蘸，浸 n. 游一会儿泳
recreational	 adj. 休养的； 娱乐的
faculty	 n. 才能， 能力； 系， 科； 全体教员
trail	 n. 痕迹，小径 vt. 跟踪， 追踪
passport	 n. 护照
prior	 adj. 在前的； 优先的
considerate	 adj. 考虑周到的， 体贴的， 体谅的
clue	 n. 线索， 暗示， 提示
legal	 adj. 法律的； 合法的
bracket	 n. 括号 vt. 把…归为同一类
highway	 n. 公路， 大路
vanish	 v. 突然不见， 消失； 不复存在， 绝迹
signal	 adj. 显著的， 重大的 n. 信号，暗号；标志，表示 vt. 发信号；标志着
sightseeing	 n. 观光， 游览
parcel	 n. 包裹，小包，邮包 vt. 分， 分配； 把…包起来， 捆扎
static	 adj. 静的，静态的；静止的，停滞的 n. 静电
journey	 vi. 旅行 n. 旅行，旅程
planet	 n. 行星
finally	 adv. 最后； 决定性地
exhaust	 vt. 使筋疲力尽；用尽；详尽论述 n. 排气装置； 废气
creep	 vi. 爬行， 缓慢地行进
strap	 n. 带子 vt. 捆扎； 用绷带包扎
grape	 n. 葡萄， 葡萄藤
conviction	 n. 确信； 坚定的信仰； 说服， 信服； 定罪， 判罪
scholar	 n. 学者； 奖学金获得者
straw	 n. 稻草； 麦秆吸管， 吸管
regarding	 prep. 关于
graph	 n. 图， 图表
vision	 n. 想象力； 梦幻； 视力， 视觉
accompany	 vt. 陪伴， 陪同， 伴随； 为…伴奏
petrol	 n. 汽油
acceptance	 n. 接受； 承认； 容忍
relativity	 n. 相对论； 相关性
beneficial	 adj. 有利的， 有益的
tackle	 vt. 对付，处理；与…交涉；阻截，擒抱 n. 阻截， 擒抱； 用具， 钓具； 辘轳， 滑车
reckon	 vt. 认为， 估计； 指望， 盼望； 测算， 测量
confusion	 n. 困惑， 糊涂； 混淆； 骚乱
occasion	 n. 场合，时刻；重大活动；时机；起因 vt. 引起
loan	 n&v. 贷款， 借
virtual	 adj. 实质上的， 事实上的， 实际上的
squeeze	 v. 挤；压榨，榨取；捏，握 n. 挤； 握手； 拮据， 紧缺
blank	 adj. 空白的；茫然的，无表情的 n. 空白； 空白表格
landlord	 n. 地主， 房东； 店主
session	 n. 会议， 一届会期； 集会
additional	 adj. 附加的， 追加的
worthy	 adj. 有价值的， 值得的
endless	 adj. 无止境的
expectation	 n. 期待， 期望， 预期； 前程， 成功的前景
title	 n. 标题， 题目； 称号， 头衔； 权利， 权益
mist	 v. 蒙上薄雾； 模糊 n. 薄雾
primarily	 adv. 首先； 主要地
duration	 n. 持续， 持久
plantation	 n. 种植园， 人工林
ignore	 vt. 不顾， 不理， 忽视
loaf	 vi. 游荡， 闲逛 n. 面包
nuclear	 adj. 核子的， 核能的， 核武器的； 核心的
reception	 n. 招待会， 欢迎会； 接受； 接待； 接收效果
outward	 adj. 外面的； 外表的； 向外的
bloody	 adv. [用于加强语气]非常，很 adj. [用于加强语气]非常的；该死的；流血的；嗜杀的 vt. 血染
poetry	 n. 诗， 诗歌， 诗集
owner	 n. 物主， 所有人
vapour	 n. 蒸汽
sole	 adj. 单独的， 唯一的 n. 脚底，鞋底，袜底
jury	 n. 陪审团； 评奖团
holy	 adj. 神圣的， 圣洁的， 虔诚的
spelling	 n. 拼字， 拼法， 拼写法
relax	 v. 放松， 松弛； 放宽， 缓和
priest	 n. 神父， 牧师
monitor	 n. 班长；监视器，检测器；显示器 vt. 监听； 检测
permission	 n. 允许， 许可， 准许
grand	 adj. 宏伟的； 重大的； 傲慢的； 派头大的； 绝佳的； 全部的
schedule	 n. 时刻表，日程安排表；清单，明细表 vt. 安排， 排定
postage	 n. 邮费， 邮资
tame	 adj. 驯服的，顺从的；沉闷的，乏味的 vt. 制服， 控制并利用； 驯化， 驯服
material	 adj. 物质的， 实体的； 肉体的； 重要的， 实质性的 n. 材料，素材
universe	 n. 宇宙， 世界； 领域， 范围
interpret	 v. 解释， 说明； 口译
spectacular	 adj. 壮观的，引人注目的 n. 壮观的演出； 惊人之举
inherit	 vi. 成为继承人 vt. 继承
peculiar	 adj. 奇怪的， 古怪的； 特有的
blanket	 n. 毛毯， 毯子， 羊毛毯
grant	 n. 授予物；补助金 vt. 授予， 给予； 同意
injection	 n. 注射， 注入； 充满
envy	 n. 妒忌，羡慕；妒忌的对象 vt. 妒忌， 羡慕
hut	 n. 小屋， 棚屋
invincible	 adj. 不能征服的， 无敌的
discount	 n. 折扣 vt. 将…打折扣； 不信； 漠视， 低估
convert	 v. 转变， 转化； 改变
construct	 vt. 建造； 构思 n. 建筑物； 构想， 观念
attempt	 vt. 尝试， 试图， 努力
thick	 adv. 厚厚地 adj. 厚的，密的，浓的；不清楚的，口音重的
superficial	 adj. 表面的， 肤浅的
division	 n. 分， 分配； 除法； 分歧； 分裂
executive	 adj. 执行的 n. 执行者
navigation	 n. 航行， 航海， 航空； 导航， 领航
melt	 v. 融化； 熔化； 消散
hook	 v. 钩住 n. 钩，挂钩
stale	 adj. 不新鲜的； 陈腐的， 过时的
balance	 vt. 使平衡；称；权衡，比较 n. 天平； 平衡； 结存， 结欠
cigar	 n. 雪茄烟
action	 n. 行动； 已做的事； 作用， 功能； 情节
stadium	 n. 运动场， 体育场
whereas	 conj. 然而， 但是， 尽管
pitch	 vi. 投， 掷； 架设， 搭， 营； 颠簸 n. 球场；程度，强度；高度；音高；沥青 vt. 投掷；使猛然倒下；表达；把…定于特定程度；定调
kindness	 n. 仁慈， 好意
adoptive	 adj. 收养关系的； 采用的
chop	 vt. 砍，劈；切细 n. 排骨
electrical	 adj. 电的， 电气科学的
statue	 n. 塑像， 雕像， 铸像
being	 n. 存在； 生物， 生命
sensitive	 adj. 敏感的， 灵敏的， 神经过敏的； 容易生气的， 易受伤害的
protest	 v. 抗议， 反对 n. 抗议， 反对
classification	 n. 分类， 分级， 分类法； 类别， 级别
vacant	 adj. 空的， 未被占用的； 空缺的； 茫然的， 空虚的
physicist	 n. 物理学家
afford	 vt. 担负得起； 提供
underground	 adv. 在地下，往地下；秘密地，不公开地 adj. 地下的；秘密的，不公开的 n. 地铁； 地下组织
curse	 v. 诅咒，咒骂 n. 天谴； 祸害， 祸根
impression	 n. 印象； 印记
baseball	 n. 棒球
interval	 n. 间隔， 间距； 幕间休息
evaluate	 vt. 评价； 估…的价
machinery	 n. 机器， 机械
status	 n. 地位， 身份； 情形， 状况
shield	 n. 防护物，护罩；盾 vt. 保护， 防护
upset	 adj. 心烦的， 苦恼的； 不适的 vt. 使心烦意乱，使苦恼，使不适；搅乱；弄翻，倾覆 n. 翻倒；搅乱；不安；不适
inference	 n. 推断结果， 结论； 推论， 推理， 推断
curve	 v. 弯曲 n. 曲线，弯，弯曲处
dot	 n. 点，圆点 vt. 打点于
skim	 v. 撇去， 掠过， 擦过； 浏览， 略读
phenomenon	 n. 现象
notify	 vt. 通知， 告知， 报告
mention	 n&vt. 提及， 说起
stream	 v. 流出， 涌出 n. 河，溪流；一股，一串
laundry	 n. 洗衣房， 洗衣店； 待洗的衣服， 洗好的衣服
accumulate	 v. 积累， 堆积
crime	 n. 罪， 罪行， 犯罪
heave	 vi. 起伏，隆起；呕吐，恶心 vt. 举起，提起，拉起，拖；扔；发出 n. 举起； 起伏， 升降
leisure	 n. 空闲时间； 悠闲
nourish	 vt. 提供养分， 养育
surround	 vt. 围， 围绕； 圈住
mat	 n. 席子， 垫子
cigarette	 n. 香烟， 纸烟， 卷烟
torch	 n. 火炬， 火把； 手电筒
positive	 adj. 确实的， 明确的； 积极的， 肯定的
favourite	 adj. 特别受喜爱的 n. 特别受喜爱的人
menu	 n. 菜单
prospect	 v. 勘探， 勘察 n. 前景， 前途， 可能性； 景象， 景色； 可能成为主顾的人； 有希望的候选人
radar	 n. 雷达
refugee	 n. 难民
aluminium	 n. 铝
comparable	 adj. 可比较的； 类似的； 比得上的
specialize	 vi. 成为…专家； 专攻
rotate	 v. 旋转， 转动； 轮流
instance	 n. 例子， 实例， 事例
opera	 n. 歌剧
presumably	 adv. 大概， 可能， 据推测
conscience	 n. 良心， 道德心
subject	 n. 题目； 学科； 主语 vt. 使隶属
practically	 adv. 几乎， 简直； 实际上
recognition	 n. 认出， 识别； 承认； 赏识， 表彰， 报偿
cassette	 n. 盒式录音带
blade	 n. 刀刃， 刀片， 叶片
arrangement	 n. 整理， 排列， 安排； 准备工作
revenue	 n. 收入， 收益； 税收， 岁入
strip	 v. 脱光衣服；剥夺，夺去 n. 条带
solution	 n. 解决； 解决办法； 溶液
continuous	 adj. 连续不断的； 延伸的
opponent	 n. 对手， 敌手， 对抗者
accelerate	 vt. 使加快， 使增速
backward	 adv. [-]倒； 向后， 往回 adj. 向后的，倒的；落后的，进步慢的
grain	 n. 谷物， 谷粒； 颗粒； 少量， 微量
maid	 n. 女仆， 侍女
residence	 n. 住处， 住宅； 居住； 居住资格
credit	 n. 信贷，赊欠；赞扬，荣誉；学分；信任 vt. 相信； 把…记入贷方； 把…归于
regardless	 adv. 不顾后果地； 不管怎样， 无论如何
oxygen	 n. 氧， 氧气
intensive	 adj. 加强的； 精深的， 透彻的； 精耕细作的
alter	 vt. 改变， 变更， 变动
combine	 v. 结合， 联合； 化合 n. 联合企业； 联合收割机
ideal	 adj. 理想的；观念的；空想的 n. 理想； 理想的东西
bearing	 n. 举止， 风度； 方位， 方向感； 影响
illustrate	 vt. 说明
occur	 vi. 发生， 出现， 存在； 被想起， 被想到
comedy	 n. 喜剧， 喜剧性
broom	 n. 扫帚
establishment	 n. 建立， 设立， 确立； 企业； 当权人物
pressure	 n. 压，压强；压迫 vt. 对…施加压力， 迫使
breeze	 vi. 飘然而行 n. 微风，和风
trash	 n. 垃圾，废物；拙劣的文学作品；没用的人，社会渣滓，败类 vt. 捣毁， 破坏
painter	 n. 漆工； 画家
millimetre	 n. 毫米
horn	 n. 角； 号角； 警报器
specialist	 n. 专家
infer	 vt. 推论， 推断； 猜想
compass	 n. 罗盘， 指南针； 圆规； 界限， 范围
background	 n. 出身背景， 经历； 背景资料； 背景， 底子
sore	 adj. 痛的；恼火的；急剧的，剧烈的 n. 疮， 痛处
dispose	 vt. 处理， 解决； 使倾向于
glow	 v. 发白热光 n. 白热光；脸红；激情
curtain	 n. 门帘， 窗帘； 幕
laughter	 n. 笑， 笑声
constitution	 n. 宪法， 章程； 组成； 设立
blend	 n&v. 混合
certificate	 n. 证书， 证件， 执照
mess	 n. 凌乱状态，混乱的局面；困境 vt. 弄糟， 弄脏， 搞乱
sour	 adj. 酸的；馊的，酸味的；脾气坏的 v. 变酸， 变馊； 变得乖戾
delete	 vt. 删除， 擦掉
nonsense	 n. 胡说， 废话； 冒失的行动
stain	 vt. 玷污；给…着色 n. 污点， 污迹
transform	 vt. 使改观， 改革； 变换， 把…转换成
leadership	 n. 领导
genuine	 adj. 真的， 真正的； 真诚的
X-ray	 n. X射线， X光
physical	 adj. 身体的； 物理的； 物质的， 有形的
fulfil	 vt. 履行， 实现， 完成； 满足， 使满意
wicked	 adj. 坏的， 令人厌恶的； 淘气的， 顽皮的
spokesman	 n. 发言人
equation	 n. 方程， 等式
impressive	 adj. 给人深刻印象的
compound	 adj. 复合的， 化合的 n. 化合物，复合物；复合词 vt. 使恶化， 加重； 使化合， 使合成
structure	 n. 结构，构造 vt. 建造
intensity	 n. 强烈， 剧烈； 强度
waken	 v. 醒来， 弄醒
stake	 n. 桩；利害关系；股份；赌金，赌注 vt. 以…打赌， 拿…冒险
extraordinary	 adj. 非同寻常的， 特别的
witness	 n. 证据；目击者，证人 vt. 目击； 为…作证， 证明
concerning	 prep. 关于
attraction	 n. 吸引， 吸引力； 引力； 具有吸引力的事物
conventional	 adj. 普通的； 习惯的， 常规的； 因循守旧的
regulation	 n. 规章， 规则； 管理， 控制； 调节
puzzle	 v. 迷惑，为难；苦思 n. 智力测验； 谜， 难题， 令人费解的事； 困惑， 迷惑
circulation	 n. 循环； 流传； 发行， 流通
bake	 vt. 烤， 烘， 焙
mere	 adj. 仅仅的； 纯粹的
accommodation	 n. 住处； 膳宿
evident	 adj. 明显的， 明白的
suburb	 n. 郊区， 郊外， 近郊
lodge	 v. 暂住，借宿 n. 乡间小屋； 旅舍
threat	 n. 威胁， 恐吓； 凶兆， 征兆
writer	 n. 作者， 作家
simplify	 vt. 简化， 使简明
breast	 n. 乳房； 胸脯， 胸膛
invention	 n. 发明， 创造； 捏造
mercy	 n. 仁慈， 宽容； 恩惠； 幸运
annoy	 vt. 使恼怒； 打搅
curl	 n. 鬈发； 卷曲， 卷曲物
inform	 vi. 告发， 告密 vt. 通知；报告
psychological	 adj. 心理的
glue	 n. 胶，胶水 vt. 胶合
commit	 vt. 犯， 干； 使承诺； 把…托付给； 调拨…供使用， 拨出
scream	 vi. 尖叫，呼啸 n. 尖叫声
sorrow	 n. 悲痛， 悲哀， 悲伤； 伤心事， 不幸的事
crash	 vi. 发出撞击声；垮台，破产；冲，闯 vt. 碰撞；坠落 n. 碰撞； 破裂声
patch	 n. 补丁；斑，与周围不同的部分；一小块地 vt. 补， 修补
observer	 n. 观察员， 观察者
character	 n. 性格， 特性； 性质； 人物， 角色； 符号； 字
reflect	 v. 反映， 显示； 反射， 映现； 深思， 考虑， 反省
procession	 n. 队伍， 行列
contribution	 n. 贡献， 促成作用； 捐款， 捐献物； 稿件
Marxist	 adj. 马克思主义的 n. 马克思主义者
bang	 vi. 猛击， 猛撞； 发出砰的一声， 砰砰地响 n. 巨响，枪声；猛击 vt. 猛击，猛撞；砰地敲
brow	 n. 额， 眉， 眉毛
meaning	 n. 意义， 意思； 目的； 重要性
ignorant	 adj. 不知道的， 无知的
magnetic	 adj. 磁的； 有吸引力的
band	 n. 乐队；群，伙；带；条纹；波段 vt. 用带绑扎
orbit	 n. 轨道 vt. 做轨道运行
comprise	 vt. 包含， 包括， 构成
moderate	 adj. 中等的； 温和的， 稳健的； 有节制的 v. 和缓， 减轻； 节制
resident	 adj. 居住的， 定居的； 住校的， 住院的 n. 居民，定居者；住院医生
spray	 v. 喷， 溅散 n. 浪花，水花；喷雾
distinguish	 vt. 区别， 辨别， 识别； 使显出特色， 使杰出
receiver	 n. 听筒； 接收器
outer	 adj. 外面的， 外层的
invent	 vt. 发明， 创造； 捏造
fluent	 adj. 流利的， 流畅的
shortcoming	 n. 短处， 缺点
substantial	 adj. 可观的， 大量的； 结实的， 坚固的； 实质的， 真实的
execute	 vt. 将…处死； 实施， 执行
benefit	 v. 有益于； 得益 n. 利益，恩惠；救济金，保险金，津贴
flood	 v. 淹没； 涌入 n. 洪水；大量
vitamin	 n. 维生素
intention	 n. 意图， 意向， 目的
rude	 adj. 粗鲁的， 不礼貌的； 粗糙的， 粗陋的
symptom	 n. 症状； 征候， 征兆
pillar	 n. 柱， 柱子； 栋梁
thereby	 adv. 因此， 从而， 由此
unique	 adj. 唯一的， 独一无二的； 极不寻常的， 极好的
funeral	 n. 葬礼， 丧礼， 丧葬
boost	 vt. 提高，使增长；推动，激励；替…做广告，宣扬 n. 提高， 增长； 推动， 激励
fireman	 n. 消防队员； 司炉工
sincere	 adj. 真诚的， 诚挚的
male	 adj. 男的，雄的 n. 男子， 雄性动物
ministry	 n. 部
religious	 adj. 宗教的； 笃信宗教的， 虔诚的
nevertheless	 adv. 仍然， 然而
prominent	 adj. 突出的， 杰出的； 突起的， 凸出的
shelter	 n. 掩蔽处，躲避处；住所；掩蔽，保护 vt. 掩蔽， 庇护； 躲避
outset	 n. 开始， 开端
jewel	 n. 宝石； 宝石饰物
scan	 vt. 细看，审视；扫描，浏览 n. 扫描
association	 n. 协会， 团体； 联合， 交往
fundamental	 adj. 基础的，基本的 n. 基本原则
eliminate	 vt. 消灭， 消除， 排除； 淘汰
global	 adj. 全球的， 全世界的； 总的， 完整的
entitle	 vt. 给…权利； 给题名
outline	 n. 提纲，要点；外形，略图 vt. 概述； 描…外形
fade	 vi. 褪色；逐渐消失；凋谢 vt. 使褪色
unless	 conj. 除非， 如果不
butterfly	 n. 蝴蝶
excess	 adj. 过量的， 额外的 n. 超越； 过量， 过度
glance	 vi. 看一下 n. 一瞥 vt. 用扫视； 反射
perspective	 n. 视角， 观点； 远景， 景观； 透视画法， 透视图
relationship	 n. 关系， 关联
equality	 n. 等同， 平等， 相等
destruction	 n. 破坏， 毁灭， 消灭
dictation	 n. 口授； 听写
stiff	 adv. 极其， 非常； 僵硬地 adj. 硬的，僵直的；不灵活的；拘谨的，生硬的；费劲的；强烈的
expression	 n. 词语； 表达； 表情
invade	 vt. 入侵， 侵略， 侵袭
reaction	 n. 反应； 反作用
childhood	 n. 童年， 幼年， 早期
wolf	 n. 狼
accordance	 n. 一致； 和谐
thorough	 adj. 彻底的， 详尽的
appeal	 vi. 呼吁，恳求；申诉，上诉 vt. 上诉 n. 感染力， 吸引力； 呼吁， 上诉
democracy	 n. 民主， 民主制； 民主国家
transportation	 n. 运输， 运送， 客运
dye	 vt. 染 n. 染料； 染色
evolve	 vt. 使进化， 使发展
extensive	 adj. 广阔的， 广泛的
congratulation	 n. 贺词； 祝贺， 恭喜
abandon	 vt. 离弃，丢弃；遗弃，抛弃；放弃 n. 放任； 纵情
definitely	 adv. 一定地， 明确地
inspire	 vi. 吸气； 赋予灵感 vt. 鼓舞，给…以灵感
marvelous	 adj. 奇迹般的， 了不起的
household	 adj. 家庭的； 家喻户晓的 n. 家庭，户；家务
geometry	 n. 几何， 几何学
ratio	 n. 比， 比率
devote	 vt. 将…奉献给； 把…专用
agent	 n. 代理人， 代理商； 政府代表； 动因， 原因； 剂
wool	 n. 羊毛； 毛线， 绒线
wholly	 adv. 完全地， 全部地
instinct	 n. 本能， 天性； 直觉
approximate	 adj. 近似的 vt. 近似； 估计
invest	 v. 投资， 投入； 授予
afterward	 adv. 后来， 以后
reputation	 n. 名誉， 名气， 名声
project	 v. 伸出； 投射； 预计 n. 方案， 计划； 课题， 项目； 工程
shrug	 n&v. 耸肩
independence	 n. 独立， 自主， 自立
coordination	 n. 同等； 调和
presentation	 n. 提供， 显示； 外观， 图像； 授予， 赠送； 报告， 介绍； 表演
diameter	 n. 直径
barn	 n. 谷仓； 牲口棚
bark	 vi. 吠，叫 n. 吠声， 叫声； 树皮
loop	 v. 成环， 成圈 n. 圈，环，回路；循环
restrain	 vt. 阻止， 控制； 抑制， 遏制
greedy	 adj. 贪吃的； 贪婪的； 渴望的
awkward	 adj. 笨拙的， 尴尬的； 难操纵的， 使用不便的； 不灵巧的
bare	 adj. 赤裸的；光秃的，无遮盖的；刚刚够的，勉强的 vt. 露出， 显露
ruin	 v. 毁坏 n. 毁灭；废墟
crane	 n. 起重机， 摄影升降机； 鹤
beard	 n. 胡须， 络腮胡子
impatient	 adj. 不耐烦的， 急躁的
spill	 v. 溢出，洒落 n. 溢出
owing	 adj. 应付的， 未付的
collection	 n. 搜集， 聚集， 积聚； 收集， 收取； 收藏品， 收集的东西
gardener	 n. 园丁， 花匠
conquest	 n. 攻取， 征服， 克服
finding	 n. 发现； 调查的结果； 裁决
dense	 adj. 密集的， 浓厚的； 密度大的
fortnight	 n. 两星期， 十四天
laboratory	 n. 实验室， 研究室
inspect	 vi. 进行检查； 进行视察 vt. 检查，审查；检阅
campaign	 vi. 参加运动； 参加竞选 n. 战役；运动
systematical	 adj. 有系统的， 有计划的
vital	 adj. 致命的， 生死攸关的； 极其重要的； 生命的， 有生命力的
conflict	 vi. 冲突， 抵触 n. 冲突， 抵触， 争论； 战斗， 战争
farewell	 n. 告别， 欢送会
allow	 vt. 允许， 准许； 同意给； 承认； 允许…进入
appliance	 n. 用具， 器具， 器械； 家电
mass	 adj. 大量的，大规模的 v. 聚集， 集中 n. 众多，大量；团，块，堆；群众；质量
lord	 n. 领主， 君主， 贵族
detect	 vt. 察觉， 发觉； 侦查出
amateur	 adj. 业余爱好的， 业余的； 外行的 n. 业余爱好者；外行
poisonous	 adj. 有毒的； 恶毒的
condemn	 vt. 谴责， 指责； 判…刑， 宣告…有罪
beast	 n. 兽， 野兽， 牲畜； 凶残的人， 令人厌憎的人
assistance	 n. 协助， 援助
commerce	 n. 商业， 贸易； 社交
gesture	 v. 做手势 n. 姿势，手势，姿态
admit	 vt. 承认， 供认； 准许…进入
poem	 n. 诗
interest	 n. 兴趣；利益，利害关系；利息 vt. 使感兴趣
gulf	 n. 海湾； 巨大的分歧
poet	 n. 诗人
definition	 n. 定义， 释义， 定界； 清晰， 鲜明
shave	 v. 剃，刮，刨，削；修面，刮脸 n. 修面， 刮脸
organic	 adj. 有机体的， 有机物的
mask	 n. 面具，面罩，口罩；伪装 vt. 遮盖， 掩饰
summary	 adj. 概括的， 概要的； 实时的， 即决的 n. 摘要，概要，一览
apply	 vi. 适用； 申请， 请求； 涂， 敷， 施 vt. 应用，实施；使用；涂敷；把…施于
inferior	 adj. 下等的，劣等的；次于…的 n. 下级， 下属
steamer	 n. 轮船， 汽船
recently	 adv. 最近， 新近
overlook	 vt. 忽视； 宽恕； 俯瞰
politician	 n. 政治家， 政客
incredible	 adj. 不能相信的， 不可信的； 难以置信的， 不可思议的； 惊人的
dramatic	 adj. 引人注目的， 激动人心的； 突然的
mosquito	 n. 蚊子
guitar	 n. 吉他， 六弦琴
layout	 n. 布局， 安排， 设计
artificial	 adj. 人工的， 人为的； 矫揉造作的； 模拟的
imaginary	 adj. 想象中的， 假想的
removal	 n. 除去， 消除； 移动， 搬迁
formula	 n. 公式， 方程式； 原则， 方案； 配方
comment	 vi. 评论 n. 评论，意见，注释；闲话，议论
revolt	 v. 反叛，起义；反抗，违抗；厌恶，生反感 n. 反叛， 起义
disgust	 n&vt. 厌恶， 憎恶
stem	 vi. 起源 n. 茎，干；词干 vt. 堵住， 止住， 停住
sunshine	 n. 日光， 阳光
trend	 vi. 伸向；倾向 n. 倾向
achievement	 n. 完成； 成就， 成绩
mechanic	 n. 技工， 机修工； 力学， 机械学； 过程， 方法， 技术性细节
desirable	 adj. 值得向往的， 令人满意的
balcony	 n. 阳台； 楼厅， 楼座
consist	 vi. 由…组成； 在于； 一致
preparation	 n. 准备， 预备； 制剂
reliable	 adj. 可靠的， 可信赖的
relate	 vi. 有关， 涉及； 符合； 相处 vt. 使有关联；讲述，叙述
critic	 n. 批评家， 爱挑剔的人
elevator	 n. 电梯， 升降机
grammar	 n. 语法； 语法书
enable	 vt. 使能够， 使可能
preliminary	 adj. 预备的，初步的 n. 初步做法， 起始行为
dependent	 adj. 依靠的， 依赖的； 取决于…的
obstacle	 n. 障碍， 障碍物， 妨碍
profession	 n. 职业； 声明， 表白
calculator	 n. 计算器， 计算者
van	 n. 大篷车， 运货车
biology	 n. 生物学， 生态学
worm	 n. 虫， 蠕虫
compress	 vt. 压紧， 压缩
arise	 vi. 出现； 由…引起； 起身， 起床
collaborative	 adj. 合作的， 协作的， 协力完成的
cherish	 vt. 珍爱； 怀有
constitute	 vt. 组成， 形成； 设立； 任命
cattle	 n. 牛； 牲口， 家畜
imagination	 n. 想象， 想象力， 空想； 想象出
resistance	 n. 反抗， 抵制； 抵抗力， 抵抗性； 阻力； 电阻
underneath	 adv. 在下面，在底下 prep. 在…下面，在…底下 n. 下部， 底部
nursery	 n. 托儿所， 保育室； 苗圃
mate	 v. 成为配偶， 交配 n. 伙伴，同事；配偶，配对物；大副
convince	 vt. 使确信， 使信服， 说服
emperor	 n. 皇帝
prolong	 vt. 拉长， 延长
theory	 n. 理论， 原理； 学说； 意见， 看法
distress	 n. 忧虑， 痛苦， 悲伤； 不幸
flock	 n. 羊群， 群； 大量
internal	 adj. 内的； 国内的； 内心的
extension	 n. 延长部分， 伸展； 电话分机， 分机号码
signature	 n. 署名， 签字， 签名
steep	 adj. 险峻的， 陡峭的； 过高的； 急剧的
thumb	 v. 示意要求搭车 n. 拇指
republican	 adj. 共和政体的；共和党的 n. 共和党人
literary	 adj. 文学的； 文人的， 书卷气的
architect	 n. 建筑师， 设计师； 缔造者
forehead	 n. 额头； 前部
classical	 adj. 古典的， 经典的
privilege	 n. 特权； 优惠
foundation	 n. 基础；
substitute	 n. 代替人；代用品 vt. 用…代替
punch	 vt. 猛击；穿孔 n. 猛击； 冲床； 穿孔机； 力量， 效力
naturally	 adv. 当然； 天然地； 天生地
flexibility	 n. 灵活性， 机动性， 柔韧性
mysterious	 adj. 神秘的， 诡秘的
moreover	 adv. 而且， 再者， 此外
identity	 n. 身份； 个性， 特性； 同一性， 一致性
scatter	 v. 撒， 散播； 散开， 驱散
installation	 n. 安装； 装置， 设施； 就任， 就职
writing	 n. 书写， 写； 著作
federal	 adj. 联邦的， 联盟的
violate	 vt. 违反， 违背； 亵渎； 侵犯； 妨碍
verify	 vt. 证实， 查证， 证明
collective	 adj. 集体的，集合性的 n. 团体， 集体
excursion	 n. 远足， 短途旅行
steer	 v. 掌舵， 驾驶； 操纵
event	 n. 事件， 大事， 事变
academy	 n. 研究会， 学会； 专门学校
undergo	 vt. 经历， 经受， 忍受； 接受
reward	 n. 报答，奖赏；报酬，酬金 vt. 报答， 酬谢， 奖励
include	 vt. 包括， 包含
sympathize	 vi. 同情， 怜悯； 体谅； 赞同
alongside	 adv. 在旁边，沿着边，并排地 prep. 在…旁边， 沿着…的边； 和…在一起
swallow	 n. 燕子；吞，咽 vt. 吞， 咽； 轻信， 轻易接受； 承受， 使不流露； 咽下口水
agency	 n. 经办， 代理； 代理处； 专门行政部门
coupon	 n. 礼券， 优惠券， 配给券； 联票； 票证
railroad	 n. 铁路 vt. 由铁路运输
nucleus	 n. 核心； 核
fascinating	 adj. 迷人的， 有极大吸引力的
abstract	 adj. 抽象的，抽象派的 n. 摘要， 梗概； 抽象派艺术作品 vt. 做…的摘要； 提取
sting	 v. 刺，蜇，叮 n. 刺伤处，蜇伤处
haste	 n. 急速， 急忙； 草率
agenda	 n. 议事日程
appearance	 n. 出现， 来到； 外观
liquid	 adj. 液体的； 清澈的； 流畅的 n. 液体
culture	 n. 文化， 文明； 教养； 培养； 培养菌
sleeve	 n. 袖子， 袖套
devotion	 n. 献身， 奉献； 忠实； 热爱； 虔诚
anonymous	 adj. 匿名的； 无名的； 无特色的
stir	 v. 搅动；拨动；激动；唤起 n. 搅拌， 搅动； 激动， 骚乱
fisherman	 n. 渔民， 渔夫
span	 n. 跨距，一段时间 vt. 持续， 贯穿； 包括； 横跨， 跨越
insult	 vt. 侮辱， 凌辱 n. 侮辱， 凌辱
existence	 n. 存在， 实在， 生存
craft	 n. 工艺， 手艺； 船， 航空器
butcher	 n. 肉商，肉贩，屠夫 vt. 屠宰， 残杀
poll	 n. 民意测验；政治选举，大选 vt. 对…进行民意测验； 获得
minority	 n. 少数； 少数民族
pole	 n. 杆； 极， 磁极， 电极
float	 v. 浮动， 漂浮； 飘动
graceful	 adj. 优美的， 优雅的； 得体的
fourfold	 adv. 四倍， 四重 adj. 四倍的，四重的
preferable	 adj. 更可取的， 更好的， 更合意的
reference	 n. 提到， 论及； 参考； 引文； 参考书目； 证明书， 证明人
frog	 n. 蛙
spite	 n. 恶意，怨恨 vt. 刁难， 欺侮
chamber	 n. 会议室， 会所； 房间； 腔， 室
arrange	 v. 安排， 准备， 整理
coarse	 adj. 粗的， 粗糙的； 粗劣的； 粗俗的
nephew	 n. 侄子， 外甥
publicity	 n. 公众的注意， 名声； 宣传， 宣扬
depart	 vi. 离开， 起程， 出发
exaggerate	 v. 夸大， 夸张
imply	 vt. 暗示， 意指
capture	 vt. 捕获， 俘获； 夺得
commitment	 n. 承诺， 许诺， 保证； 信奉， 献身； 承担的义务
spade	 n. 铲， 铁锹
manufacture	 vt. 制造，加工 n. 制造， 制造业
sequence	 n. 连续， 接续， 一连串； 次序， 顺序
collision	 n. 碰撞； 冲突， 抵触
qualification	 n. 资格， 资格证明， 合格证书； 限制， 限定
provision	 n. 供应； 准备； 条款， 规定； 给养， 口粮
recruit	 vt. 招募，吸收 n. 新兵； 新成员
thrust	 vt. 插；戳，刺 n. 戳， 刺； 要点， 要旨； 推力
fame	 n. 名声， 名望
replacement	 n. 代替， 取代； 更换， 调换； 替代的人
mud	 n. 泥， 泥浆
mug	 n. 大杯 vt. 对…行凶抢劫
pond	 n. 池塘
arrival	 n. 到达， 到来； 到达者， 到达物
scientific	 adj. 科学的
frequent	 adj. 时常发生的，常见的 v. 常到， 常去
according	 adj. 相等的， 一致的， 依…而定的
insure	 vt. 为…投保； 确保
powder	 n. 粉， 粉末
membership	 n. 会员身份， 会籍； 全体会员， 会员数
error	 n. 错误， 谬误， 差错
platform	 n. 平台， 站台， 讲台； 纲领， 宣言
network	 n. 网状物； 广播网， 电视网； 网络
jealous	 adj. 妒忌的， 猜疑的； 精心守护的
rust	 v. 生锈， 氧化 n. 铁锈
trace	 n. 痕迹；丝毫，少许 vt. 跟踪； 追溯； 描摹
Negro	 n. 黑人
modernization	 n. 现代化
grave	 adj. 严重的； 严肃的 n. 坟墓
criminology	 n. 犯罪学， 刑事学
advantage	 n. 优点， 优势， 好处
assistant	 adj. 助理的， 辅助的 n. 助手，助理，助教
inn	 n. 小旅店， 小酒店
instead	 adv. 作为替代； 却， 反而
controversy	 n. 争论， 辩论
command	 vt. 命令， 指挥， 控制
newsstand	 n. 报摊， 杂志摊
worthless	 adj. 无价值的， 无用的
performance	 n. 演出； 执行， 完成； 工作情况， 表现； 工作性能
dessert	 n. 甜食， 点心
ambassador	 n. 大使， 使节， 派驻国际组织的代表
anticipate	 vt. 预料， 预期， 期望； 先于…行动； 提前使用
variable	 adj. 易变的 n. 变量
temple	 n. 圣堂， 神殿， 庙宇
growth	 n. 增长， 增长量； 生长， 生长物
landscape	 n. 风景，景色；风景画；全景 vt. 美化…的景观
weave	 v. 织， 编
carrot	 n. 胡萝卜
normally	 adv. 通常； 正常地
exception	 n. 例外， 除外
vague	 adj. 模糊的， 含糊的
temporary	 adj. 暂时的， 临时的
fare	 vi. 进展 n. 车费，船费，票价
desperate	 adj. 拼死的， 不顾一切的； 绝望的； 极需要的
leading	 adj. 指导的， 带头的； 最主要的； 饰演主角的
awful	 adj. 令人不愉快的， 难过的； 非常的， 极大的
accuracy	 n. 准确， 精确
handy	 adj. 手边的， 便于使用的
urge	 vt. 鼓励；推进，催促；竭力主张，强烈要求 n. 冲动， 强烈的欲望
resolution	 n. 正式决定， 决议； 决心， 决意； 解决， 解答； 分辨率， 清晰度
via	 prep. 经过， 通过
setting	 n. 环境， 背景， 布景； 调节， 设定的位置
score	 v. 得， 给…打分； 画线于， 做记号于； 赢得 n. 得分，比数，成绩；二十
quote	 vt. 引用，援引 n. 引文， 引语； 报价， 牌价； 引号
graduate	 adj. 研究生的 v. 毕业 n. 毕业生；研究生
famine	 n. 饥荒； 严重的缺乏
gramme	 n. gram的英式拼法
absent	 adj. 缺席的， 不在场的； 缺乏的， 不存在的； 心不在焉的
rag	 n. 破布， 碎布； 破旧衣服
visual	 adj. 看得见的 n. 视觉资料
understanding	 adj. 体谅的， 宽容的， 通情达理的 n. 理解，理解力；谅解；协议；相互理解，融洽
empire	 n. 帝国
educate	 vt. 教育， 培养， 训练
fairy	 n. 小精灵， 小仙子
ashamed	 adj. 惭愧的， 羞耻的， 害臊的
instruct	 vt. 指示， 命令； 通知； 教授， 训练
rat	 n. 鼠
mayor	 n. 市长
virtually	 adv. 实际上， 事实上
fairly	 adv. 相当， 尚可， 还； 公平地
handwriting	 n. 笔迹， 手迹； 书法
merchant	 n. 商人
raw	 adj. 自然状态的， 未加工过的； 生的； 未经分析的， 原始的； 生疏无知的， 未经训练的； 露肉而刺痛的
proportional	 adj. 比例的， 成比例的
economy	 n. 经济； 节约， 节省
community	 n. 社区， 社会， 公社； 团体， 界； 群落
packet	 n. 小包， 小盒
version	 n. 译本； 说法； 改写本
airport	 n. 机场， 航空港
courtyard	 n. 庭院， 院子
nationality	 n. 国籍； 民族
selection	 n. 选择， 挑选； 被挑选出来的人， 精选品； 可供选择的东西
institute	 n. 研究所，学院 vt. 建立， 设立
aboard	 adv&prep. 在船上， 上船
endure	 v. 忍受， 容忍； 持久， 持续
detail	 n. 细节，枝节；零件 vt. 详细说明
shortly	 adv. 立刻， 不久； 不耐烦地； 简短地
hobby	 n. 业余爱好， 癖好
appropriate	 adj. 适当的， 恰当的
providing	 conj. 倘若
fate	 n. 命运， 天数
throat	 n. 咽喉， 喉咙； 嗓音
utility	 n. 效用， 有用， 实用； 公用事业
immediately	 adv. 立即， 马上； 直接地， 紧接地
manual	 adj. 用手的；手工做的 n. 手册， 指南
measurement	 n. 衡量， 测量； 尺寸， 大小
optimistic	 adj. 乐观的， 乐观主义的
vocabulary	 n. 词汇表， 词汇， 语汇
retire	 vi. 退休， 退役； 退下， 退出， 撤退； 就寝
aspect	 n. 方面； 朝向， 方向； 样子， 外表
particle	 n. 粒子， 微粒； 小品词， 语助词
aggressive	 adj. 侵略的， 好斗的； 敢做敢为的； 有进取心的
behavior	 n. 行为， 举止， 表现
musician	 n. 音乐家， 乐师
minimize	 vt. 将…减少； 最小化
descend	 vi. 下来， 下降； 下倾
saint	 n. 圣徒； 圣人， 道德高尚的人； [用于人名或地名等前]圣
density	 n. 密集， 稠密； 密度
logical	 adj. 逻辑的， 合乎常理的
oblige	 vt. 迫使； 施恩于， 帮…的忙； 使感激
slam	 v. 砰地关上；猛力拉，砰地放下；猛烈抨击 n. 砰的一声
characterize	 vt. 成为…的特征， 以…为特征； 描绘的特性， 描述
swing	 v. 摇摆，回转；突然转向 n. 摇摆； 秋千
ridiculous	 adj. 荒谬的， 可笑的
handbag	 n. 手提包
invasion	 n. 入侵， 侵略， 侵犯
spin	 v. 旋转；晕眩；纺，织；绞干，甩干 n. 旋转， 自转
severe	 adj. 严重的； 严厉的， 严格的； 严峻的， 艰难的； 朴素的， 不加装饰的
emerge	 vi. 出现， 涌现， 冒出
shallow	 adj. 浅的；浅薄的 n. 浅滩， 浅水处
lease	 n. 租约，租契 vt. 出租； 租得， 租有
exploit	 vt. 剥削； 利用； 开拓 n. 业绩， 功绩
slap	 vt. 掴，掌击，拍；啪的一声放 n. 掴， 掌击， 拍
spit	 v. 吐唾沫，吐出 n. 唾沫， 唾液
scout	 v. 侦察， 寻找 n. 侦察员，侦察机，侦察舰；童子军
anniversary	 n. 周年纪念日
register	 v. 登记， 注册； 指示， 自动记下； 流露； 表示， 表达； 把挂号 n. 登记；登记表
restless	 adj. 焦躁不安的； 静不下来的， 运动不止的
persuasive	 adj. 劝诱的； 有说服力的
fleet	 n. 舰队， 船队
communicate	 v. 通讯； 交际， 交流； 连接， 相通； 传达， 传播； 传染
evidence	 n. 根据， 证据； 证人
saddle	 n. 鞍，鞍状物；车座 vt. 给…装鞍； 使承担任务
rural	 adj. 农村的， 乡村的
official	 adj. 官员的；官方的，正式的 n. 官员， 行政人员， 高级人员
historical	 adj. 历史的， 有关历史的
repetition	 n. 重复， 反复
fortunately	 adv. 幸运地； 幸亏
acid	 adj. 酸的， 酸性的 n. 酸
transmission	 n. 传播， 发射； 传送， 传递； 传染
shortage	 n. 不足， 缺少
discrimination	 n. 区别， 辨别； 识别力； 差别对待， 歧视
female	 adj. 雌的； 女的 n. 雌性动物；女子
microphone	 n. 扩音器， 话筒， 麦克风
swift	 adj. 快的； 反应快的； 敏捷的
surrender	 n&v. 交出， 放弃； 投降
faint	 adj. 不清楚的，模糊的 v. 晕倒，昏厥 n. 昏厥
world-wide	 adj. 遍及全球的
minister	 n. 部长， 大臣； 公使， 外交使节； 牧师
pose	 vi. 摆姿势；假装，装腔作势 vt. 使摆好姿势；造成，引起；提出，陈述 n. 样子， 姿势
remedy	 n. 补救办法，纠正办法；药品；治疗法 vt. 补救， 纠正； 医治， 治疗
jail	 n. 监狱，看守所 vt. 监禁， 拘留； 塞满； 卡住； 干扰
consent	 vi. 同意 n. 同意，赞成
insist	 v. 坚持， 坚决认为； 坚持要求
typewriter	 n. 打字机
helpless	 adj. 无助的； 无能的； 无法抗拒的
respect	 n. 尊敬；尊重；问候；方面 vt. 尊敬； 尊重
volume	 n. 卷， 册， 书卷； 容积， 体积； 音量， 响度
retreat	 n&vi. 退却， 撤退； 退避， 退缩
ache	 vi. 疼痛；渴望 n. 疼痛
mutual	 adj. 相互的； 共同的
shell	 n. 壳，贝壳；外壳，框架；炮弹 vt. 剥…的壳； 炮击
guideline	 n. 指导方针， 准则
loose	 adj. 松的； 不精确的， 不严密的； 散漫的
therefore	 adv. 因此， 所以
exchange	 n&v. 交换； 交流； 兑换
hesitate	 vi. 犹豫， 踌躇； 含糊； 不情愿
rifle	 n. 来复枪， 步枪
private	 adj. 私人的；秘密的；私下的；私营的 n. 士兵， 列兵
baggage	 n. 行李
companion	 n. 同伴， 共事者； 伴侣
breakdown	 n. 垮， 衰竭； 损坏， 故障； 倒塌
paste	 n. 糊，糨糊 vt. 粘， 贴
overtake	 vt. 追上， 超过； 突然降临于， 意外地碰上
jeans	 n. 工装裤， 牛仔裤
overnight	 adv. 整夜， 通宵； 一夜间， 突然 adj. 一整夜的； 一夜间的， 突然的
behave	 v. 表现， 举止； 运转， 作出反应
stretch	 v. 伸展，延续；伸长，拉长；倾注全力；紧张 n. 一段时间， 一段路程， 连绵的一片； 伸展， 延伸
undo	 vt. 解开， 打开； 取消， 撤销
accomplish	 vt. 达到； 完成
laser	 n. 激光
mixture	 n. 混合， 混合物
engine	 n. 引擎， 发动机； 机车
responsible	 adj. 需负责任的， 承担责任的； 有责任感的， 负责可靠的； 责任重大的， 重要的
scope	 n. 范围； 余地， 机会
democratic	 adj. 民主的， 民主政体的
medal	 n. 奖牌， 奖章， 勋章
satellite	 n. 卫星， 人造卫星
bullet	 n. 枪弹， 子弹， 弹丸
recorder	 n. 录音机， 录像机； 记录装置， 记录仪
identify	 vi. 一致 vt. 认出，鉴定；把…等同于
embrace	 n. 拥抱，怀抱 vt. 拥抱； 包括； 包围
nitrogen	 n. 氮
pour	 v. 灌， 倒； 倾泻
label	 n. 标签；标记，符号 vt. 贴标签于； 把…称为
improvement	 n. 改进， 改善； 改进处
slippery	 adj. 滑的； 狡猾的
scissors	 n. 剪刀
significance	 n. 意义， 含义； 重要性， 重大
modify	 vt. 更改， 修改； 修饰
horizon	 n. 地平线； 眼界， 见识
environment	 n. 环境， 外界； 围绕
airplane	 n. 飞机
pledge	 n. 保证，誓言 vt. 保证， 许诺
progressive	 adj. 前进的； 渐进的； 进行式的
reservoir	 n. 水库， 蓄水池； 储藏， 汇集
deliberate	 adj. 故意的， 蓄意的； 慎重的， 深思熟虑的 v. 仔细考虑， 思考
swear	 v. 宣誓； 咒骂
atmosphere	 n. 大气， 空气； 气氛， 环境
decorate	 vt. 装饰， 装潢， 修饰
copyright	 n. 版权
biotechnology	 n. 生物工艺学
career	 n. 生涯， 职业， 经历
occupation	 n. 占领， 占据； 职业； 从事的活动， 消遣
tendency	 n. 趋向， 趋势， 倾向
release	 vt. 释放， 排放； 解除， 解脱； 放开， 松开； 发布； 发行
charter	 adj. 包租的， 租用的 n. 宪章，共同纲领；特许状，许可证；包租 vt. 包，租
slim	 adj. 苗条的；薄的；少的 v. 减轻体重， 变苗条
arithmetic	 n. 算术， 四则运算
rib	 n. 肋骨
faulty	 adj. 有错误的， 有缺点的
liberate	 vt. 解放， 释放
rid	 vt. 使摆脱， 解除…的负担， 从…中清除
variation	 n. 变化， 变动； 变异； 变奏
moral	 adj. 道德的，有道德的 n. 品行； 道德规范； 寓意
defect	 v. 变节， 叛变 n. 缺点， 缺陷， 欠缺
reinforce	 vt. 增强， 加强， 增援
explode	 vi. 爆炸； 激增； 发怒 vt. 使爆炸
casual	 adj. 偶然的； 非正式的； 临时的， 不定期的； 漠不关心的， 冷淡的
decline	 v. 下降， 减少； 衰退， 衰落； 谢绝， 拒绝 n. 下降，减少；衰退
property	 n. 财产， 所有物； 房产； 物业； 性质， 性能
succeeding	 adj. 以后的， 随后的
brave	 adj. 勇敢的； 华丽的
similar	 adj. 相似的， 类似的
viewpoint	 n. 观点， 看法， 见解
anyhow	 adv. 无论如何， 不管怎么说； 随随便便地， 杂乱无章地
specify	 vt. 指定； 详细说明
whistle	 v. 吹口哨， 鸣笛声； 呼啸而过 n. 口哨；呼啸而过
handle	 n. 柄，把手 vt. 拿， 触； 操作， 处理
forth	 adv. 向前； 向外， 往外
tough	 adj. 困难的， 难对付的； 坚强的， 能吃苦耐劳的； 健壮的； 坚硬的， 严格的； 老的， 硬的； 粗暴的， 充满暴力的
crossing	 n. 人行横道， 交叉口； 横渡
script	 n. 剧本， 广播稿； 书写用的字母； 笔迹， 手迹
submerge	 v. 淹没， 潜入水中
system	 n. 系统； 制度， 体制； 方法， 做法； 身体
compose	 vt. 组成， 构成； 创作， 为…谱曲； 使平静， 使镇静
spot	 n. 点，斑点；地点，处所；少量 vt. 认出， 发现； 玷污
roller	 n. 滚筒， 滚轴
partial	 adj. 部分的； 不公平的； 偏爱的， 偏袒的
aid	 n. 帮助； 救护； 助手； 辅助手段
tone	 n. 腔调， 语气； 音调； 风格， 气度； 色调， 明暗
confident	 adj. 确信的， 肯定的； 自信的
retain	 vt. 保留， 保持
swell	 vi. 膨胀，隆起；增长，增强，增多，扩大 n. 波浪起伏； 鼓起， 隆起； 增强
skilled	 adj. 有技能的； 熟练的； 需要技能的
local	 adj. 地方性的； 本地的； 局部的； 狭隘的
remind	 vt. 提醒， 使想起
crude	 adj. 简陋的， 天然的； 粗鲁的， 粗俗的
manufacturer	 n. 制造商； 制造厂
crew	 n. 全体船员； 一队工作人员
valid	 adj. 有效的； 正当的； 有根据的， 有理的
withstand	 vt. 抵挡， 反抗
defeat	 n&vt. 战胜， 挫败
vacuum	 v. 用吸尘器清扫 n. 真空；真空吸尘器
encourage	 vt. 鼓励， 怂恿； 促进， 助长， 激发
bubble	 vi. 冒泡； 沸腾 n. 泡
era	 n. 时代， 年代， 纪元
yield	 v. 出产；让出，放弃；屈服，顺从；倒塌，垮掉 n. 产量
electronic	 adj. 电子的 n. 电子学； 电子设备
vacation	 n. 假期， 休假
outcome	 n. 结果
elegant	 adj. 优美的， 文雅的， 讲究的； 简练的， 简洁的
tender	 adj. 嫩的；脆弱的；疼痛的，一触即痛的；温柔的 vt. 提出 n. 投标
curriculum	 n. 课程， 全部课程
meantime	 n. 其间， 同时
powerful	 adj. 强大的， 有力的， 有权的； 强壮的， 强健的
slip	 v. 滑跤，滑落，溜；下降，跌落；悄悄放进 n. 疏漏， 差错
species	 n. 种， 类
anchor	 v. 抛锚， 停泊； 把…系住， 使固定； 担任主持人； 固定， 扎根 n. 锚；给人安全感的物
preceding	 adj. 在前的， 在先的， 前面的
cite	 vt. 引用， 引证； 传唤， 传讯； 表彰， 嘉奖
logic	 n. 逻辑， 推理， 逻辑学
acquaintance	 n. 认识， 了解； 熟人
royal	 adj. 王室的， 皇家的
internship	 n. 实习生身份； 实习医师期
shed	 vt. 脱落，脱去；流出，流下；发出，散发 n. 棚， 小屋， 货棚
eyesight	 n. 视力， 目力
precision	 n. 精确， 精密
glove	 n. 手套
screen	 n. 屏幕，银幕；屏风；帘，纱窗 vt. 掩蔽， 遮蔽； 放映， 播放； 审查， 甄别
naked	 adj. 裸体的； 无遮蔽的
trial	 n. 试， 试验； 审判； 讨厌的人
correspond	 vi. 相符合， 相当； 通信
spur	 n. 刺激物 vt. 刺激， 鞭策， 激励
perception	 n. 感知， 觉察； 认识， 观念， 看法
rear	 adj. 后部的，背后的 n. 后部，背面；后方 vt. 抚养， 饲养； 种植
amongst	 prep. 在…之中
undertake	 vt. 从事； 承担； 同意； 保证
insect	 n. 昆虫， 虫
bureau	 n. 局， 司， 处， 社， 所
moist	 adj. 湿润的， 潮湿的
cable	 n. 缆， 索， 电缆； 电报
qualify	 v. 胜任， 具有资格， 合格； 限定
intense	 adj. 强烈的； 紧张的； 认真的； 热情的
pregnant	 adj. 怀孕的， 妊娠的
border	 n. 边，边缘，边界 vt. 给…加上边， 围； 邻接； 与…接壤
estate	 n. 土地， 住宅区， 地产； 财产， 遗产； 庄园， 种植园
applicable	 adj. 能应用的； 合适的， 适当的
admission	 n. 允许进入； 承认； 入场费， 入场券
brass	 n. 黄铜， 黄铜器， 铜管乐器
expense	 n. 花费， 消费； 费用， 开支； 业务费用
rumour	 n. 谣传， 谣言
contemporary	 adj. 当代的；同时代的 n. 同代人， 当代人
gear	 n. 齿轮，传动装置，排挡；用具，设备；衣服 vt. 使适应， 使适合
boundary	 n. 分界线， 边界
rob	 vt. 抢劫， 盗窃
elderly	 adj. 较老的，年长的 n. 到了晚年的人， 老年人
financial	 adj. 财政的， 金融的
rod	 n. 杆， 棒
dumb	 adj. 哑的； 无言的； 说不出话的
respective	 adj. 各自的， 各个的， 分别的
media	 n. 新闻媒介， 传播媒介
favour	 n. 好感；赞同；恩惠 vt. 赞同； 喜爱， 偏爱； 有利于
pollute	 vt. 弄脏， 污染； 腐蚀
harden	 v. 变硬； 变得坚强
eve	 n. 前夜， 前夕， 前一刻
pronoun	 n. 代词
define	 vt. 给…下定义， 限定
dictate	 v. 口授； 命令， 规定， 要求 n. 命令， 指挥
construction	 n. 建造； 建筑物； 结构
predict	 vt. 预言， 预告， 预测
dump	 vt. 倾卸，倾倒；倾销 n. 垃圾场
render	 vt. 使得， 致使； 给予， 提供； 翻译
universal	 adj. 普遍的； 通用的； 全世界的
chemist	 n. 化学家， 药剂师
frontier	 n. 边境， 边疆； 新领域
abroad	 adv. 到国外； 在传播， 在流传
radical	 adv. 根本的，基本的；激进的，激进派的 n. 激进分子
relieve	 vt. 使轻松， 使宽慰， 缓解； 使得到调剂； 接替
drawer	 n. 抽屉
requirement	 n. 要求； 必要条件； 需要， 需要的东西
transport	 vt. 运输 n. 运输， 运输工具
employment	 n. 工作； 雇用； 使用
specific	 adj. 特有的；具体的，明确的 n. 详情， 细节
application	 n. 申请， 申请书； 施用， 涂抹； 应用， 实施； 实用性
engage	 vt. 使从事； 聘用； 吸引； 占用； 使订婚
acre	 n. 英亩
whisper	 v. 低声地讲 n. 低语， 耳语
appetite	 n. 食欲， 胃口； 欲望
semester	 n. 学期
strategy	 n. 战略， 策略
dull	 adj. 乏味的， 单调的； 晦暗的， 阴沉的； 低沉的； 笨的； 钝的
collapse	 v. 倒坍；塌下 n. 突然失败；突然瓦解
clumsy	 adj. 笨拙的， 愚笨的； 粗陋的； 不得体的
territory	 n. 领土， 版图； 领域
concession	 n. 让步， 妥协； 特许， 特许权； 承认， 认可
accurate	 adj. 准确的， 正确无误的
maintain	 vt. 维持； 维修， 保养； 主张； 赡养
shift	 v. 移动，转移；改变，转变 n. 转换， 转变； 轮班
echo	 v. 重复， 模仿； 发出回声 n. 回声；反响，共鸣
erect	 adj. 竖直的， 垂直的 vt. 建造；使竖立
bargain	 vi. 讨价还价 n. 特价商品；协议，交易
professional	 adj. 职业的，专业的，专门的 n. 自由职业者， 专业人员
elective	 adj. 选举的，有选举权的；可任意选择的 n. 选修课程
accusation	 n. 谴责； 【律】 指控
protein	 n. 蛋白质
annual	 adj. 每年的，一年一次的 n. 年报， 年鉴； 一年生的植物
exclusive	 adj. 奢华的，高级的；独有的，独享的；排斥的，排他的；不包括…的，不把…计算在内的 n. 独家新闻
jar	 v. 感到不快； 震动， 摇动 n. 罐子，坛子，广口瓶
poverty	 n. 贫穷， 贫困
resort	 vi. 求助，凭借，诉诸 n. 求助， 凭借， 诉诸； 求助的对象， 采用的手段； 常去之地， 胜地
goodness	 int. 天哪 n. 善良， 美德， 好意
lightning	 n. 闪电， 电光
jaw	 n. 颌， 颚
margin	 n. 页边空白； 差数， 差额； 余地； 边缘
remain	 vi. 剩下，余留；保持；仍然是 n. 残余； 残骸； 遗迹
amaze	 vt. 使惊奇， 使惊愕
refine	 vt. 精炼， 精制， 提纯； 使优美， 使完善
mount	 v. 登上；发起；安放；增加，加剧 n. 山， 峰
demand	 vt. 要求， 需要； 查问
mystery	 n. 神秘； 神秘的人
atomic	 adj. 原子的， 原子能的， 原子武器的
deposit	 vt. 使沉淀；存放，储蓄 n. 定金， 押金； 存款； 矿藏
centimetre	 n. 公分， 厘米
telescope	 n. 望远镜
rotten	 adj. 腐烂的； 令人不愉快的； 糟糕的
skillful	 adj. 灵巧的， 娴熟的
flash	 vi. 闪， 闪烁； 飞驰 n. 闪光；闪光灯
accuse	 vt. 指责， 归咎于
housing	 n. 房屋， 住宅； 住房建筑， 住房供给； 外壳， 外罩
devil	 n. 魔鬼， 恶魔； 家伙， 人
guarantee	 n. 保证；保证书；担保物 vt. 保证， 担保
recommend	 vt. 推荐， 举荐； 劝告， 建议； 使成为可取； 使受欢迎
acquire	 vt. 取得， 获得， 学到
fertile	 adj. 肥沃的； 多产的； 丰富的
automobile	 n. 汽车， 机动车
notion	 n. 概念， 观念； 意图， 想法， 念头
diversity	 n. 多样性； 差异； 不同点
helicopter	 n. 直升机
tractor	 n. 拖拉机， 牵引车
patience	 n. 忍耐， 耐心
grace	 n. 优美，优雅；风度，魅力；宽限，缓期 vt. 使优美
advertisement	 n. 广告， 公告， 登广告； 广告活动， 宣传
ripe	 adj. 熟的； 时机成熟的
attribute	 vt. 把…归因于 n. 属性
mechanism	 n. 机械装置； 机制， 机理； 办法， 途径
detection	 n. 察觉， 发觉； 侦查， 探测
triumph	 vi. 成功 n. 凯旋，胜利
vice	 n. 罪恶； 恶习， 缺点； 虎钳
horror	 n. 恐怖； 憎恶； 令人恐怖的事物
poison	 n. 毒，毒药 vt. 毒害
thoughtful	 adj. 沉思的； 体贴的
gram	 n. 克
empower	 vt. 授权于； 使能够
riot	 vi. 聚众闹事 n. 暴乱，骚乱；极度丰富 vt. 把浪费在放荡的生活上
arouse	 vt. 引起； 唤起， 唤醒
nest	 v. 筑巢 n. 巢，窝，穴
tour	 n&vi. 旅行， 游历
calm	 adj. 静的，平静的 v. 平静， 镇静
boring	 adj. 令人厌烦的， 乏味的， 无聊的
classic	 adj. 最优秀的，典型的，标准的；传统式样的，典雅的 n. 文学名著， 经典作品， 杰作； 优秀的典范； 古典文学， 古典语文研究
ownership	 n. 所有， 所有制
metric	 adj. 公制的， 米制的
absolute	 adj. 十足的， 地道的； 绝对的， 完全的； 不受任何限制的
ash	 n. 灰， 灰末； 骨灰
describe	 vt. 形容； 描写； 画出
suck	 v. 吸， 吮， 啜； 吸收
grab	 v. 抓取，攫取；赶紧做；抓住；抓，夺 n. 抓， 夺
rub	 vt. 擦， 摩擦
presently	 adv. 不久， 一会儿； 现在， 目前
wealthy	 adj. 富有的， 富裕的
rug	 n. 地毯
jazz	 n. 爵士音乐， 爵士舞曲
dusk	 n. 薄暮， 黄昏； 幽暗
administration	 n. 管理； 管理部门， 行政机关； 实行， 执行
occasional	 adj. 偶尔的， 间或发生的
boast	 vi. 自夸；自豪 vt. 自夸，吹嘘；以拥有…而自豪 n. 自吹自擂， 自夸的话
operator	 n. 操作人员； 话务员， 报务员
debate	 n&v. 争论， 辩论
spacecraft	 n. 航天器， 宇宙飞船
furniture	 n. 家具
segment	 n. 部分， 片段； 瓣
stripe	 n. 条纹
jet	 vi. 乘喷气式飞机 n. 喷气式飞机；喷嘴；喷射
helpful	 adj. 给予帮助的； 有用的
statistic	 n. 统计数值， 统计资料； 统计学
attractive	 adj. 有吸引力的， 引起注意的
superb	 adj. 极好的； 高质量的
mold	 n. 霉，霉菌；模型，铸模；性格 vt. 用模子制作， 塑造； 使形成， 影响…的形成
engineering	 n. 工程， 工程学
significant	 adj. 相当数量的； 重要的， 意义重大的， 意味深长的
bold	 adj. 勇敢的； 鲁莽的； 粗体的， 黑体的； 醒目的
bleed	 vi. 出血， 流血； 泌脂 vt. 勒索…的钱
delicious	 adj. 美味的； 芬芳的， 怡人的； 有趣的
catalogue	 n. 目录 v. 为…编目录，把…列入目录中
whatever	 adv. [用于否定句中以加强语气]任何； 无论什么
decrease	 v. 减少 n. 减少
volunteer	 v. 自愿提供； 自愿， 志愿 n. 志愿者；志愿兵
museum	 n. 博物馆
ignorance	 n. 无知， 愚昧
senate	 n. 参议院， 上院
trumpet	 n. 喇叭，小号 vt. 大声宣告， 鼓吹
bolt	 n. 螺栓，插销 vt. 闩门
string	 vi. 连成一串； 排成一行前进 n. 线，细绳；一串，一行 vt. 缚，扎，挂；串起，穿；使排成一列；伸展，拉直
import	 vt. 输入， 进口 n. 输入， 进口； 进口商品； 意义， 重要性
occupy	 vt. 占领， 占， 占有
submit	 vi. 屈从， 听从， 服从 vt. 呈送，提交；主张，建议；使服从，使降服
mood	 n. 心情， 情绪； 语气
boom	 vi. 激增， 繁荣， 迅速发展； 发出隆隆声 n. 激增，繁荣，迅速发展；隆隆声，嗡嗡声
absence	 n. 缺席， 不在； 缺席的时间， 外出期； 缺乏， 不存在
attract	 vt. 吸引， 引起…注意
edition	 n. 版， 版本， 版次
simplicity	 n. 简单， 简易； 朴素
cautious	 adj. 十分小心的， 谨慎的
disappear	 vi. 不见， 失踪， 消失
summit	 n. 最高点， 峰顶； 最高级会议
recession	 n. 衰退， 衰退期
conclusion	 n. 结论， 推论； 结尾； 缔结， 议定
typist	 n. 打字员
durable	 adj. 耐久的， 耐用的
negative	 adj. 否定的，消极的；负的；阴性的 n. 负片， 底片； 负数
impose	 vi. 利用， 占便宜； 欺骗 vt. 把…强加于；征
ally	 v. 结盟， 联合 n. 同盟国， 同盟者； 支持者
statement	 n. 陈述， 声明； 结算单， 报表
hence	 adv. 因此， 所以； 今后
memorial	 adj. 纪念的，悼念的 n. 纪念碑， 纪念堂， 纪念仪式
factor	 n. 因素； 因子； 系数
boot	 n. 靴子， 长筒靴； 行李箱； 解雇
pinch	 vt. 捏，拧 n. 撮， 微量
delivery	 n. 投递， 交付； 分娩； 讲话方式； 投递的邮件
rack	 n. 挂架，搁架 vt. 使痛苦， 折磨； 尽力使用
election	 n. 选举； 选择权； 当选
conquer	 vt. 征服， 战胜； 破除， 克服
learned	 adj. 有学问的； 学术上的
substance	 n. 物质； 实质； 大意， 要旨； 根据， 理由
frown	 n&vi. 皱眉， 蹙额
bond	 v. 黏合， 结合 n. 联结，联系；公债；契约，合同
target	 n. 目标 vt. 把…作为目标； 瞄准
wax	 n. 蜡，蜂蜡 vt. 给…上蜡
grind	 v. 磨， 磨快
urban	 adj. 城市的， 都市的； 住在都市的
furthermore	 adv. 而且， 此外
guidance	 n. 引导， 指导， 领导
risk	 n. 危险，风险；引起危险的事物 vt. 冒…的危险， 使遭受危险
flame	 n. 火焰， 光辉； 热情
container	 n. 容器； 集装箱
leader	 n. 领袖， 领导人， 首领
delicate	 adj. 纤细的， 易碎的； 微妙的； 精美的
discard	 vt. 丢弃， 抛弃， 遗弃
fancy	 adj. 昂贵的； 别致的 n. 想象力，设想；爱好 vt. 喜欢；想象，猜想
rebel	 vi. 反叛， 造反； 反对， 不服从 n. 反叛分子， 反对者
bounce	 v. 弹起，反弹；颠簸 n. 弹， 反弹
usage	 n. 使用； 对待； 惯用法
tissue	 n. 组织； 薄绢， 薄纸， 手巾纸
experimental	 adj. 实验的， 试验的
loosen	 vt. 解开； 放松， 松弛
rent	 v. 租借，租用；出租，出借 n. 租金； 出租
nearby	 adv. 在附近 adj. 附近的
carpenter	 n. 木工， 木匠
cart	 n. 运货马车
modest	 adj. 谦虚的； 适中的； 羞怯的
cast	 vt. 投，扔，抛；浇铸 n. 演员表， 全体演员； 石膏绷带； 铸型， 铸件； 投， 抛
anxious	 adj. 忧虑的， 令人焦急的； 渴望的
hatred	 n. 憎恶， 憎恨， 仇恨
crush	 vt. 压碎， 碾碎； 摧毁， 压垮
largely	 adv. 大部分， 大量地
slice	 n. 薄片，切片；部分 vt. 切， 削
frost	 v. 结霜 n. 冰冻，严寒；霜
electron	 n. 电子
incline	 v. 倾斜； 弯； 倾向于 n. 斜坡
truly	 adv. 真正地； 忠实地
cash	 n. 现金，现款 vt. 把…兑现
counsel	 n. 律师，法律顾问；忠告，劝告 vt. 劝告， 提议
item	 n. 条， 条款， 一条
gene	 n. 基因
liver	 n. 肝
suicide	 n&v. 自杀
violet	 adj. 紫色的 n. 紫罗兰
hollow	 adj. 空的， 空洞的； 沉闷的； 虚伪的
trunk	 n. 树干； 大衣箱， 皮箱； 汽车后备箱； 象鼻
saving	 n. 节省， 节约； 储蓄金， 存款
rely	 vi. 依靠， 依赖； 信赖， 指望
hospitalize	 vt. 就医
slide	 v. 滑；悄悄地移动 n. 滑动； 滑道， 滑面； 幻灯片
utilize	 vt. 利用
sticky	 adj. 黏性的， 胶黏的； 湿热的
prevail	 vi. 流行， 盛行
waist	 n. 腰， 腰部
excessive	 adj. 过多的， 极度的
flesh	 n. 肉， 肌肉， 肉体
jungle	 n. 丛林， 密林， 莽丛； 乱七八糟的一堆
portion	 n. 一部分，一份 vt. 分配， 把…分给
settle	 v. 安排， 安放； 调停； 支付， 核算； 安家； 飞落， 停留； 安定
pattern	 n. 型，式样，模型 vt. 仿制， 使照…样子
harsh	 adj. 严厉的； 粗糙的
connexion	 n. connection的英式拼法
vehicle	 n. 车辆， 机动车； 传播媒介， 工具， 手段
scrape	 v. 刮，擦 n. 刮， 擦； 刮擦声
hardship	 n. 艰难， 困苦
confuse	 vt. 使困惑， 把…弄糊涂； 混淆， 把…混同； 混乱， 搞乱
cushion	 n. 垫子， 坐垫， 靠垫
scold	 v. 责骂， 训斥
glorious	 adj. 光荣的； 壮丽的； 令人愉快的
civilize	 vt. 使文明， 使开化， 教育
physician	 n. 内科医生
architecture	 n. 建筑学； 建筑式样， 建筑风格
stress	 n. 压力；强调；重要性；应力；重音 vt. 强调， 着重； 重读
grip	 v. 握紧，抓牢；吸引住 n. 紧握
explore	 vt. 探险， 探索； 仔细查阅， 探究
display	 vt. 陈列， 展览， 显示
electricity	 n. 电
climate	 n. 气候； 风土， 地带； 风气， 气氛
conductor	 n. 售票员， 列车长； 指挥； 导体
bore	 vt. 使厌烦；钻，挖 n. 令人讨厌的人
crust	 n. 面包皮， 硬外皮； 外壳， 地壳
disorder	 n. 混乱， 杂乱， 骚乱
criticize	 vt. 批评； 评论； 非难
organization	 n. 组织， 团体， 机构
rage	 vi. 狂吹； 汹涌； 激烈进行； 发怒， 发火 n. 狂怒，盛怒；风靡一时的事物，时尚
width	 n. 宽阔， 广阔； 宽度
dairy	 adj. 乳制品的 n. 牛奶场；乳制品
board	 vi. 搭伙； 膳宿 n. 板，牌子；木板，纸板；委员会，董事会；伙食 vt. 上
economic	 adj. 经济的，经济学的 n. 经济学； 经济状况
stuff	 n. 材料，东西 vt. 装， 填， 塞； 让…吃饱
arrest	 vt. 逮捕，拘留；停止，阻止；吸引 n. 逮捕， 拘留， 扣留
widow	 n. 寡妇
distinction	 n. 差别， 不同， 区分
mature	 adj. 成熟的；成年人的；深思熟虑的；到期的，应支付的 vt. 使成熟
navy	 n. 海军
fee	 n. 费； 酬金， 赏金
section	 n. 部分， 章节； 部门， 科； 截面， 剖面
influence	 n. 影响，作用；影响力，势力；产生影响力的人 vt. 影响
whip	 vt. 鞭笞；猛地移动；搅打成糊状 n. 鞭子
protocol	 n. 礼仪， 礼节； 草案， 议定书
whale	 n. 鲸
provoke	 vt. 对…挑衅， 激怒； 激起， 引起
threaten	 v. 威胁， 恐吓； 预示快要来临， 是…的征兆； 构成威胁； 可能发生
talent	 n. 天才， 才能； 人才
percentage	 n. 百分比， 百分率
negotiate	 v. 洽谈， 协商； 顺利通过， 成功越过； 协商， 谈判
strain	 v. 扭伤， 拉伤； 尽力； 拉紧 n. 拉紧；过劳；极度紧张；张力；扭伤，拉伤；旋律；品种，家系；气质，个性特点
hunt	 v. 打猎； 搜寻； 驱逐
violin	 n. 小提琴
remonstrate	 v. 抗议
package	 n. 包裹，包装；一揽子交易 vt. 把…打包； 包装
visible	 adj. 可见的， 看得见的， 有形的
crisis	 n. 危机， 存亡之际； 关键阶段
rail	 vi. 责骂， 抱怨 n. 栏杆，横杆；铁轨，轨道；铁路
survival	 n. 幸存； 幸存者， 残存物
germ	 n. 微生物， 细菌； 幼芽
inner	 adj. 内部的； 内心的
market	 n. 市场； 股市； 行情， 销路
keen	 adj. 热心的； 激烈的； 敏锐的， 敏捷的
glimpse	 vi. 看一眼，一瞥 vt. 瞥见 n. 一瞥， 一看
detective	 n. 侦探， 私人侦探
transfer	 v. 搬， 转移； 调动， 转学； 转让， 过户； 乘车， 转乘
footstep	 n. 脚步， 脚步声， 足迹
veteran	 n. 老兵， 老手
indifferent	 adj. 冷漠的， 不积极的； 一般的， 平平的
outside	 adj. 外部的 prep. 在…的外面； 向…的外面； 除…以外 n. 外部，外表
nerve	 n. 神经； 勇敢， 胆量
affection	 n. 感情； 爱， 爱慕
eagle	 n. 鹰
cruise	 vi. 航游，巡航；缓慢巡行 n. 航游， 游弋
elementary	 adj. 基本的， 初级的
topic	 n. 题目， 论题， 话题
solemn	 adj. 庄严的， 隆重的； 严肃的
perceive	 vt. 感知， 感觉， 察觉； 认识到， 意识到； 理解
omit	 vt. 省略； 遗漏
embarrass	 vt. 使窘迫， 使为难
option	 n. 选择， 选择权， 选择自由； 选择的事物或人， 选课
erroneous	 adj. 错误的， 不正确的
raid	 n&vt. 袭击； 突入查抄， 突入搜捕； 劫掠
politics	 n. 政治， 政治学； 政纲， 政见
acute	 adj. 严重的； 急性的； 灵敏的， 敏锐的； 精明的
limitation	 n. 限制， 限度； 局限
sponsor	 n. 发起者 vt. 发起； 资助， 赞助； 支持
kindergarten	 n. 幼儿园
unexpected	 adj. 想不到的， 意外的
crucial	 adj. 至关重要的， 决定性的
contribute	 v. 捐献， 捐款； 投稿
faith	 n. 信任； 信心； 信仰， 信条； 忠诚
generator	 n. 发电机； 发生器
insert	 vt. 插入， 嵌入； 登载
remark	 vt. 说；评论说 n. 话语； 谈论， 评论
forbid	 vt. 禁止， 不许， 阻止
microscope	 n. 显微镜
necessarily	 adv. 必要地； 必然
highlight	 vt. 强调，突出，使显著 n. 最精彩的部分； 最重要的事件
candidate	 n. 候选人； 投考者， 申请求职者
billion	 num. 十亿
parallel	 adj. 平行的；类似的；并列的，并联的 n. 可相比拟的事物；相似处；平行线，平行面；纬线 vt. 与…平行； 与…相似， 与…相当， 比得上
reject	 vt. 拒绝； 拒纳， 退回 n. 次品
patient	 adj. 忍耐的，有耐心的 n. 病人
cashier	 n. 出纳
sheer	 adv. 垂直地，陡峭地 vi. 急转向， 偏离 adj. 完全的，十足的；陡峭的，垂直的；极薄的，透明的
miracle	 n. 奇迹， 令人惊奇的人
profit	 vi. 受益 n. 益处；利润，收益 vt. 有益于，有利于
original	 adj. 最初的；新颖的；原版的 n. 原件， 原作
wit	 n. 风趣； 妙语； 智力， 才智， 智能
handful	 n. 一把， 少数， 一小撮
assignment	 n. 任务， 指定的作业； 分配， 指派
nylon	 n. 尼龙
yawn	 vi. 打呵欠 n. 呵欠
electric	 adj. 电的， 电动的
terminal	 adj. 晚期的，不治的；末端的，终点的，极限的 n. 终点； 终端； 接线端
kingdom	 n. 王国； 领域； 界
differ	 vi. 不同， 相异； 发生分歧
various	 adj. 各种各样的， 不同的
latter	 adj. 后者的； 后一半的
depression	 n. 抑郁， 沮丧； 不景气， 萧条； 洼地， 凹陷
reduction	 n. 减少， 缩小； 下降， 降低
extent	 n. 广度； 范围； 程度
equivalent	 adj. 相等的，等量的 n. 相等物， 等价物
gaol	 vt. 监禁 n. 监狱
conversely	 adv. 相反
sauce	 n. 调味汁， 作料
ban	 vt. 取缔，查禁；禁止 n. 禁止， 禁令
fascinate	 vi. 有吸引力， 迷人 vt. 迷住，强烈吸引
suffer	 v. 遭受， 忍受， 容许； 受痛苦， 受损
diplomatic	 adj. 外交的， 从事外交的； 策略的， 有手腕的
bat	 n. 蝙蝠； 球棒， 球拍
neighbourhood	 n. 四邻； 附近； 接近
draft	 n. 草稿；汇票；征兵；通风 vt. 起草； 征募
complex	 adj. 由许多部分组成的， 复合的； 复杂的， 难懂的
rank	 v. 给…评定等级； 列入， 占特定等级 n. 军衔，职衔；地位，社会阶层；排，行列
assumption	 n. 假定， 臆断； 担任， 承担
pension	 n. 养老金，抚恤金 vt. 发给…养老金
giant	 adj. 巨大的 n. 巨人，巨物；才智超群的人
fluid	 adj. 流动的 n. 流体，液体
bay	 n. 湾； 分隔间
outlet	 n. 出口， 出路； 发泄途径
neglect	 v. 疏于照料；疏忽 n. 疏忽
addition	 n. 加， 加法； 附加物
gang	 vi. 聚集， 结成一伙 n. 一帮，一伙
shrink	 v. 起皱； 收缩； 退缩， 畏缩
ancestor	 n. 祖宗， 祖先； 原型； 先驱
textile	 adj. 纺织的 n. 纺织品；纺织业
former	 adj. 在前的 n. 前者
panic	 v. 恐慌， 惊慌失措 n. 恐慌，惊慌，慌乱
extend	 v. 延长， 扩大； 提供， 给予； 伸展， 达到
fold	 v. 折叠，合拢 n. 褶， 折叠的部分
plastic	 adj. 塑料的；可塑的 n. 塑料， 塑料制品； 信用卡
globe	 n. 地球， 世界； 地球仪； 球体
chemical	 adj. 化学的 n. 化学制品
interpretation	 n. 解释； 口译； 艺术处理
ax	 n. 斧子
intermediate	 adj. 中间的； 中级的
folk	 n. 人们； 家属， 亲属； 大伙儿， 各位
consideration	 n. 考虑， 思考， 要考虑的事； 体贴， 关心
competitive	 adj. 竞争的， 比赛的； 好竞争的， 求胜心切的； 有竞争力的
enquiry	 n. 询问
applause	 n. 鼓掌， 掌声
frank	 adj. 坦白的， 直率的
abuse	 vt. 滥用； 虐待， 伤害； 辱骂， 毁谤 n. 滥用； 虐待， 伤害； 辱骂， 毁谤
prove	 v. 证实， 证明； 结果是
scheme	 v. 密谋， 策划 n. 计划，方案；阴谋
affect	 vt. 影响； 感动
deaf	 adj. 聋的； 不愿听的
admire	 vt. 钦佩， 羡慕； 赞赏， 称赞， 夸奖
consequently	 adv. 因此， 因而， 所以
virus	 n. 病毒； 病毒性疾病， 病毒病
drain	 v. 排去，放水 n. 耗竭； 排水沟， 排水管
isolate	 vt. 使隔离， 使孤立
sailor	 n. 水手， 海员
amuse	 vt. 逗…乐， 给…娱乐
inward	 adv. 向内 adj. 里面的；内心的
responsibility	 n. 责任， 责任心； 职责， 义务
enquire	 v. 询问
civil	 adj. 公民的； 文职的； 民用的； 民事的， 民法的； 文明的
popularity	 n. 普及， 流行； 声望
subsequent	 adj. 随后的， 后来的
indicate	 vt. 标示， 表示， 表明
scarcely	 adv. 几乎不， 简直不； 决不； 刚刚， 才
panel	 n. 专门小组； 面， 板； 控制板， 仪表盘
outstanding	 adj. 突出的， 杰出的； 未解决的； 未偿付的
charge	 v. 索价；控告；充电，充满；向前冲 n. 费用； 管理； 控告， 指责； 电荷， 充电
sew	 v. 缝制， 缝纫
oval	 adj. 椭圆形的 n. 椭圆形
column	 n. 柱， 支柱， 圆柱； 纵队； 栏， 专栏
procedure	 n. 程序， 手续， 步骤
sample	 n. 样品，试样，样本 vt. 从…抽样； 品尝， 体验
integrate	 v. 成为一体， 合并
survivor	 n. 生还者； 残存物
applicant	 n. 申请人
tropical	 adj. 热带的； 炎热的
partner	 vi. 做…的搭档 n. 伙伴，合伙人，搭档，配偶
plunge	 n&v. 纵身投入， 猛冲； 猛跌
diagnose	 vt. 诊断
somewhat	 adv. 有点儿 pron. 一点儿
earnest	 adj. 认真的， 诚恳的
spider	 n. 蜘蛛
interview	 n&vt. 接见， 会见； 面谈， 面试； 采访
essential	 adj. 必要的；本质的 n. 要素； 必需品
clarify	 vt. 澄清， 阐明
furnace	 n. 炉子， 熔炉， 鼓风炉
ditch	 n. 沟， 沟渠， 渠道
deck	 n. 甲板， 舱面； 层面
scare	 v. 吓， 使害怕； 受惊吓， 感到害怕 n. 惊恐，恐慌
thunder	 vi. 打雷， 轰隆响； 大声喊， 吼 n. 雷，雷声；擂鼓般的响声，轰隆声
observe	 vt. 注意到， 观察； 评说； 遵守
humorous	 adj. 幽默的， 诙谐的
furnish	 vt. 供应， 提供； 装备
bet	 vt. 打赌；敢说，确信 n. 打赌； 赌金， 赌注
contact	 n. 接触；联系，交往 vt. 与…接触， 与…取得联系
rare	 adj. 稀有的， 冷僻的； 珍奇的； 出类拔萃的； 稀薄的； 煎得嫩的
discharge	 v. 释放， 排出； 卸货 n. 释放， 放电
exclude	 vt. 把…排除在外
scary	 adj. 引起惊慌的
criticism	 n. 批评， 批判； 评论， 评论文章
utmost	 adj. 最远的 n. 极限
image	 n. 像； 形象； 映像； 形象的描述
consultancy	 n. 咨询公司
ribbon	 n. 缎带， 丝带； 色带
garbage	 n. 垃圾， 废物； 废话； 无用的资料
complain	 vi. 抱怨， 诉苦； 控告， 投诉
mainland	 n. 大陆
homogeneous	 adj. 同种类的， 同性质的， 有相同特征的
anxiety	 n. 焦虑， 忧虑； 渴望， 热望
temptation	 n. 诱惑， 引诱
adjust	 vt. 调整， 调节， 校正
popularize	 vt. 普及
burst	 vi. 爆裂，爆炸；挤满；突然打开；突然发作 vt. 使爆炸；突然打开 n. 爆炸
vigorous	 adj. 朝气蓬勃的； 有力的， 用力的
debt	 n. 债， 债务， 欠债
refrigerator	 n. 冰箱， 冷藏库
necessity	 n. 必需品； 必要性， 需要
fog	 n. 雾， 烟雾， 尘雾
frame	 n. 框架，框子，构架 vt. 给…镶框； 陷害， 诬告； 制定； 表达
lucky	 adj. 幸运的， 侥幸的； 吉利的
origin	 n. 起源， 起因； 出身， 血统
industrialize	 v. 工业化
clash	 vi. 发生冲突；不协调；砰地相撞，发出刺耳的撞击声 n. 冲突； 不协调； 刺耳的撞击声
compel	 vt. 强迫， 迫使屈服
capable	 adj. 有能力的， 有才能的
depress	 vt. 使沮丧； 使不景气； 削弱， 抑制
parade	 v. 游行， 列队前进； 招摇而行 n. 游行；检阅
burden	 n. 重担，精神负担 vt. 加重压于， 烦扰； 负担， 装载
precaution	 n. 预防； 防备， 警惕
lemon	 n. 柠檬； 柠檬树； 柠檬黄， 淡黄色
personality	 n. 人格， 个性； 人物， 名人
plot	 v. 密谋， 计划； 绘制…的平面图， 在图上标绘…的位置 n. 故事情节；计划，密谋；小块土地
sanction	 vt. 批准，认可 n. 批准， 认可； 约束因素， 约束力； 国际制裁
rate	 vi. 被评价； 被列入特定级别 n. 速度，速率；比率；价格，费用；等级 vt. 评估；给…定级，把…列为；值得，应得
alert	 adj. 警觉的，留神的，注意的 vt. 使认识到，使意识到 n. 警戒， 戒备； 警报
await	 vt. 等候； 期待； 将降临到…身上
sin	 vi. 犯戒律， 犯过失 n. 罪，罪孽
client	 n. 委托人， 当事人， 顾客
prosperity	 n. 繁荣， 兴旺
divide	 v. 分，分开；分配，分享；除；产生分歧 n. 分歧； 分界线， 分水岭
contrary	 adj. 相反的 n. 相反
lump	 v. 结块； 将…归并在一起 n. 块，肿块
digital	 adj. 数字的， 数位的
brilliant	 adj. 光辉的； 卓越的
historic	 adj. 历史上著名的， 具有重大历史意义的
oven	 n. 炉， 烤箱
bound	 vi. 跳跃；弹回，反跃 adj. 一定的；有义务的 vt. 跳跃；弹回，反跃；成为…的界限，给…划界 n. 跳跃； 界限， 限制
counter	 n. 柜台； 计数器； 筹码
rhythm	 n. 韵律， 节奏
stroke	 n. 中风；一举，一次努力；划桨，划水；击，敲；报时的钟声；笔画，一笔；抚摸 vt. 抚摸
breed	 v. 繁殖； 养育， 培育； 酿成， 产生 n. 品种
management	 n. 管理； 处理； 管理部门； 管理人员
publish	 vt. 公布， 发表； 出版， 刊印
realm	 n. 界， 领域， 范围； 王国， 国度
correspondent	 n. 通讯员， 记者
avoid	 vt. 避免， 躲开； 撤销
renew	 v. 重新开始， 继续； 更新； 恢复； 延长有效期
bid	 n. 企图，努力；喊价，出价，投标 vt. 喊价， 投标， 出； 祝， 表示； 命令
prompt	 adj. 敏捷的，及时的 vt. 促使，推动；提示 n. 提示台词， 提示
astonish	 vt. 使惊讶， 使吃惊
comprehensive	 adj. 广泛的， 综合的； 理解的
tunnel	 v. 挖， 开 n. 隧道，坑道，地道
withdraw	 v. 收回， 撤回； 撤退
assign	 vt. 指派， 分配， 布置； 指定
elaborate	 adj. 复杂的； 精心制作的 v. 详述， 详细制订
feather	 n. 羽毛， 翎毛
corridor	 n. 走廊， 回廊， 通路
decade	 n. 十年， 十年期
expert	 adj. 熟练的 n. 专家
select	 adj. 精选的， 挑选出来的； 优等的， 第一流的 vt. 选择，挑选
fulfill	 vt. 履行， 实现， 完成； 满足， 使满意
crowd	 v. 聚集； 挤满； 挤； 推 n. 群，一批
congress	 n. 代表大会； [C-]国会， 议会
advanced	 adj. 先进的； 高级的； 年迈的； 后阶段的
mechanical	 adj. 机械的， 机械制造的； 机械学的， 力学的； 呆板的
recommendation	 n. 推荐， 推荐信； 建议； 优点， 可取之处
welfare	 n. 幸福； 福利， 福利救济
flourish	 vi. 繁荣，茂盛，兴旺 vt. 挥动
output	 n. 产量；输出；输出功率 vt. 输出
fatigue	 v. 疲劳 n. 疲劳，劳累
striking	 adj. 显著的， 突出的； 惹人注目的， 容貌出众的
vessel	 n. 容器； 船； 飞船； 管
majority	 n. 多数， 大多数
drag	 v. 拖，拉；迫使，硬拉；拖着脚步走 n. 累赘； 一吸， 一抽
crown	 n. 王冠， 冕
likely	 adv. 可能 adj. 可能的；适合的
inquire	 v. 打听， 询问； 调查
gymnasium	 n. 体育馆， 健身房
issue	 v. 发行， 分发， 发出 n. 问题；发行，分发
vain	 adj. 徒劳的； 自负的
lower	 adj. 较低的；下面的 vt. 放下， 降低
index	 n. 索引； 指数， 指标
fry	 vt. 油煎， 油炸， 油炒
youngster	 n. 青年， 年轻人， 孩子
odd	 adj. 奇特的； 临时的； 奇数的； 单只的； 剩余的， 挂零的
lung	 n. 肺
conservation	 n. 保存； 保护； 守恒
distraction	 n. 分心的事； 心烦意乱； 精神错乱； 娱乐， 消遣
supplement	 n. 增补， 补充； 增刊， 副刊 vt. 增补， 补充
contrast	 vi. 形成对比， 对比之下显出区别 n. 对比， 对照； 反差 vt. 对比，对照
paragraph	 n. 段， 节
judgement	 n. 意见； 审判； 判断
proportion	 n. 比例； 部分， 份儿； 均衡， 相称
widen	 v. 加宽， 变宽
crystal	 n. 水晶， 结晶体， 晶粒
occurrence	 n. 发生， 出现； 发生的事件
inflation	 n. 通货膨胀； 膨胀
thinking	 adj. 深思的， 有理性的 n. 想法，意见，见解
cycle	 n. 循环（周期） v. 骑自行车
disposal	 n. 丢掉， 销毁； 处理； 排列， 布置
settlement	 n. 解决； 协议； 居留地
delegate	 n. 代表， 代表团成员 vt. 委派…为代表； 授 ， 把…委托给
literature	 n. 文学， 文学作品； 文献， 图书资料
sphere	 n. 球， 球体； 范围
inquiry	 n. 询问， 打听； 调查
prejudice	 n. 偏见，成见 vt. 使有偏见； 对…不利， 损害
dissolve	 v. 溶解； 解散； 消失， 减弱； 结束
digest	 vt. 消化； 领会 n. 文摘； 摘要
angle	 n. 角， 角度； 观点， 立场
immigrant	 n. 移民， 侨民
tradition	 n. 传统， 惯例
ability	 n. 能力， 本领； 才能， 才智
urgent	 adj. 紧急的， 急迫的
belief	 n. 信任， 相信； 信念
bundle	 n. 捆，包，束；包袱 vt. 收集， 归拢； 把…塞入
suggestion	 n. 建议， 意见； 细微的迹象； 暗示
systematic	 adj. 有系统的， 有计划的
cupboard	 n. 柜橱； 碗碟橱， 食橱
generally	 adv. 一般地， 通常地； 普遍地
bacon	 n. 咸肉
likewise	 adv. 同样地； 也， 又
slender	 adj. 细长的， 苗条的； 微薄的， 不足的
troublesome	 adj. 令人烦恼的， 麻烦的
instruction	 n. 命令， 指示； 用法说明； 教学， 教导
oral	 adj. 口头的； 口的
married	 adj. 已婚的； 婚姻的
transaction	 n. 办理， 处理； 交易， 业务； 会报， 学报
conscious	 adj. 意识到的， 自觉的； 神志清醒的； 有意的， 存心的
fur	 n. 软毛， 毛皮， 裘皮； 毛皮衣服
auto	 n. 汽车
sigh	 vi. 叹气， 叹息 n. 叹息
constant	 adj. 经常的，不断的，连续发生的；永恒的；忠实的，忠诚的 n. 常数， 恒量
pants	 n. 长裤， 便裤； 内裤
mislead	 vt. 给…错误印象， 使误解； 把…带错路； 使误入歧途
split	 v. 分裂，分离；被撕裂，裂开；分担，分享 n. 裂口
orchestra	 n. 管弦乐队
publication	 n. 出版， 发行； 公布， 发表
sufficient	 adj. 足够的， 充分的
claim	 vt. 声称，主张；对…提出要求，索取；以…为其成果；需要，值得 n. 要求， 认领， 索赔； 声称； 断言
antique	 adj. 古时的， 过时的 n. 古物，古董
sow	 v. 播， 播种
widespread	 adj. 分布广的， 普遍的
petroleum	 n. 石油
communication	 n. 通讯， 交流， 交际； 通信工具， 交通联系
directly	 adv. 直接地； 正好地， 截然； 立即
tolerance	 n. 忍受， 容忍， 忍耐力； 公差
kneel	 vi. 跪， 跪下， 跪着
porter	 n. 搬运工人； 看门人， 大楼管理员
fasten	 v. 扎牢， 扣住
contest	 n. 竞赛， 争夺 vt. 争夺， 与…竞争； 对…提出质疑， 辩驳
author	 n. 著作家， 作者
dirt	 n. 灰尘， 土； 污物， 污垢
astrophysics	 n. 天体物理学
greenhouse	 n. 温室， 暖房
preserve	 vt. 保护， 维持； 保存； 腌制
plus	 adj. 表示加的；正的 prep. 加，加上 n. 加号， 正号
establish	 vt. 建立， 设立； 确立； 证实
expansion	 n. 扩大， 扩充， 扩张， 膨胀
relevant	 adj. 有关的， 切题的
entry	 n. 入口处； 登记； 进入； 参赛者名单； 条目
license	 n. 许可，执照 vt. 准许
synthetic	 adj. 综合的， 合成的； 虚假的
headquarters	 n. 司令部， 总部
expand	 vt. 扩大， 使膨胀
gaze	 n&vi. 凝视， 盯， 注视
essay	 n. 短文， 散文， 小品文
survey	 vt. 俯瞰； 检查； 测量 n. 调查， 勘察； 测量， 勘测； 全面审视， 概括论述
plug	 n. 插头，插座；塞子，栓 vt. 把…塞住， 用…塞住
bunch	 vi. 集中， 挤在一起； 形成一束 n. 群，伙；束，串，捆 vt. 使成一束
thermometer	 n. 温度计， 寒暑表
tense	 adj. 拉紧的；紧张的 v. 拉紧， 绷紧 n. 时态
postpone	 vt. 延迟， 延期
bride	 n. 新娘
favourable	 adj. 有利的， 赞成的； 顺利的
hammer	 v. 锤击 n. 锤，榔头
candy	 n. 糖果
seal	 n. 封铅，封条；印，图章；海豹 vt. 封
mental	 adj. 心理的， 精神的， 思想上的； 精神病的； 智力的
decent	 adj. 像样的， 过得去的， 体面的； 宽厚的， 大方的； 正派的； 合乎礼仪的， 得体的
storage	 n. 贮藏； 贮藏量
investigate	 v. 调查， 研究
racial	 adj. 种族的， 人种的
switch	 v. 转换， 改变 n. 开关，电闸；转换，改变
niece	 n. 侄女， 外甥女
considerable	 adj. 相当大的； 重要的
auxiliary	 adj. 辅助的， 附属的； 后备的
heal	 vi. 愈合， 痊愈， 恢复健康 vt. 使愈合，治愈，使康复；调停，消除
reserve	 vt. 保留，留存；预订 n. 储备； 保留； 拘谨， 矜持； 替补队员， 后备部队； 自然保护区
somehow	 adv. 由于某种原因， 不知怎么的； 以某种方式
dive	 vi. 跳水； 潜水； 俯冲
brick	 n. 砖， 砖块， 砖状物
sympathy	 n. 同情； 一致， 支持， 赞同
heap	 n. 堆， 大量
consumer	 n. 消费者， 用户， 消耗者
rescue	 n&vt. 营救， 救援
cripple	 n. 跛子；残疾人 vt. 使跛； 使残疾
highly	 adv. 高度地， 极， 非常赞许地
brief	 adj. 简短的，短暂的 vt. 向…介绍基本情况，做…的提要 n. 概要， 摘要
keyboard	 n. 键盘
initiative	 n. 主动性； 首创精神； 主动的行动， 倡议； 主动权
recover	 v. 重新获得， 挽回； 恢复
determine	 vi. 决意 vt. 决定；查明；使下决心
nature	 n. 大自然； 本性； 性质
social	 adj. 社会的； 交际的， 社交的
medication	 n. 药物治疗； 药物
drill	 v. 钻， 打； 训练 n. 钻头；操练，训练
intelligent	 adj. 聪明的， 理智的
whilst	 conj. 当…的时候
clerk	 n. 店员， 办事员， 职员
lobby	 v. 向进行游说 n. 大厅；休息室；院外活动集团
acknowledge	 vt. 承认， 承认…的权威； 告知收到， 确认； 对…表示感谢， 报偿
equip	 vt. 装备， 配备； 使有准备
radiation	 n. 放射物， 辐射能； 辐射
Christian	 adj. 基督教的 n. 基督教徒，信徒
pulse	 vi. 搏动， 跳动 n. 脉搏；脉冲
luxury	 n. 奢侈； 奢侈品
spiritual	 adj. 精神的， 心灵的； 宗教的
worthwhile	 adj. 值得花时间的， 值得做的
mould	 n. 霉，霉菌；模型，铸模；性格，气质 vt. 用模子做， 浇铸； 使形成， 把…铸造成
increasingly	 adv. 日益， 越来越多地
elbow	 n. 肘，肘部 vt. 用肘部， 用肘挤
salad	 n. 色拉， 凉拌菜
strategic	 adj. 对全局有重要意义的， 关键的； 战略的
vary	 v. 改变； 多样化
readily	 adv. 乐意地， 欣然地； 容易地； 很快地， 立即
stoop	 v. 俯身，弯腰；堕落，自贬 n. 弯腰， 曲背
upper	 adj. 上面的， 地位较高的
rocket	 vi. 迅速上升， 猛涨 n. 火箭
splendid	 adj. 壮丽的； 极好的
county	 n. 郡， 县
respondent	 n. 回答者； 响应者； 被告
episode	 n. 一个事件； 插曲， 片段； 连续剧的一集
convenience	 n. 方便； 便利设施
determination	 n. 决心， 决定； 确定
discipline	 n. 纪律；训练；惩罚；学科 vt. 训练； 惩罚， 处罚
behalf	 n. 利益
evidently	 adv. 明显地， 显然
objective	 adj. 客观的， 无偏见的 n. 目标，目的
injure	 vt. 伤害， 损害， 使遭受损伤
victimize	 vt. 使受害， 使牺牲
exert	 vt. 尽； 运用
province	 n. 省； 领域， 范围
scandal	 n. 丑事， 丑闻； 流言蜚语； 反感， 愤慨
horrible	 adj. 令人恐惧的， 可怕的； 骇人听闻的； 极讨厌的， 使人不愉快的； 糟透的
estimate	 vt. 估计； 评价 n. 估计； 评价， 看法
strengthen	 vt. 加强， 巩固
drip	 vi. 滴下，漏水 n. 水滴； 滴水声
injury	 n. 损害， 伤害； 受伤处
exhibit	 vt. 显示；陈列，展览 n. 展览品
brand	 n. 品牌；烙印 vt. 铭刻， 打烙印于； 加污名于， 谴责
mushroom	 vi. 迅速成长 n. 蘑菇
alcohol	 n. 酒精， 乙醇
choke	 vt. 使窒息； 塞满， 塞住
proposal	 n. 提议， 建议； 求婚
inevitable	 adj. 不可避免的， 必然的
deny	 vt. 否定， 否认； 拒绝…的要求
miserable	 adj. 痛苦的； 悲惨的； 令人难受的
recreation	 n. 娱乐活动， 消遣
subtract	 vt. 减， 减去， 去掉
allowance	 n. 津贴， 补贴； 零用钱
portable	 adj. 便于携带的， 手提式的
ancient	 adj. 古代的， 古老的； 年老的， 看上去很老的
glory	 n. 光荣， 荣誉的事； 美丽
secondary	 adj. 次要的， 第二的； 中等的； 辅助的， 从属的
mission	 n. 使命， 任务； 使团
attorney	 n. 律师， 代理人
wander	 vi. 漫游， 闲逛， 漫步； 偏离正道； 走神， 恍惚
adopt	 vt. 收养； 采用， 采取； 正式通过， 批准
oppose	 vt. 反对； 反抗
singular	 adj. 单数的； 非凡的， 奇特的； 独一无二的
device	 n. 器械， 装置， 设备； 手段， 策略
mainframe	 n. 主机， 大型机
motor	 n. 发动机， 电动车
minus	 adj. 负的 prep. 减 n. 负数；减号
conservative	 adj. 保守的，守旧的；不时兴的，传统的 n. 保守的人
access	 n. 接近；通道，入口；接近的机会 vt. 存取
conference	 n. 会议， 讨论会； 讨论， 商谈
activity	 n. 活动； 活力； 行动
primitive	 adj. 原始的，早期的；简单的；粗糙的 n. 原人； 原始事物
advisable	 adj. 明智的， 可取的
dormitory	 n. 集体寝室， 宿舍
overcome	 vt. 战胜， 克服； 压倒， 使受不了
cooperate	 vi. 合作， 协作； 配合
cabin	 n. 小屋； 船舱， 机舱
sum	 vi. 共计 n. 总数；金额；算术
current	 adj. 当前的， 通用的； 流行的， 流传的
heel	 n. 脚后跟， 踵； 后跟
variety	 n. 多样化； 种类； 变种
disturb	 vt. 打扰， 扰乱； 弄乱； 使不安
copper	 n. 铜； 铜币， 铜制器
persist	 vi. 坚持， 持续
audio	 adj. 听觉的， 声音的
civilian	 n. 平民， 百姓
pump	 n. 泵 vt. 抽， 泵送， 打气
pierce	 vt. 刺穿， 穿孔于
teenager	 n. 青少年
apart	 adv. 成距离，相间隔；分开，除去 adj. 分离的， 分隔的
calendar	 n. 日历， 历书， 历法
offensive	 adj. 冒犯的，无礼的；进攻的，攻击性的 n. 进攻， 攻势
cartoon	 n. 卡通画， 幽默画； 动画片， 卡通片
speculate	 v. 推测， 推断； 投机， 做投机买卖
launch	 vt. 发射，投射，发动；使下水 n. 发射； 下水
amid	 prep. 在…中间， 在…之中， 被…围绕
beloved	 adj. 所钟爱的， 所爱戴的
single	 adj. 单一的；独身的；单程的 n. 单程票；
confirm	 vt. 证实， 肯定； 确认； 批准
cement	 n. 水泥，胶泥 vt. 黏结； 巩固， 使团结
subway	 n. 地道； 地铁
gallon	 n. 加仑
acquaint	 vt. 使认识， 使了解
appoint	 vt. 任命， 委任； 约定， 指定
elastic	 adj. 有弹性的， 灵活的 n. 松紧带
assist	 vt. 援助， 帮助， 协助
vast	 adj. 巨大的， 大量的； 浩瀚的
intervene	 vi. 干涉， 调停， 干预； 插入， 介入； 干扰， 打扰
undergraduate	 n. 大学本科生
symbol	 n. 象征； 符号， 标志
commercial	 adj. 商业的， 商务的； 商品化的， 商业性的
joint	 adj. 连接的； 共同的 n. 接头，接缝；关节
reasonable	 adj. 通情达理的， 讲道理的； 合理的； 公道的； 尚好的， 过得去的
available	 adj. 现成可使用的， 通用的； 可取的； 联系的； 可得到的
confine	 vt. 限制， 使局限； 使不外出， 禁闭
advocate	 vt. 拥护， 提倡， 主张 n. 拥护者， 提倡者； 辩护者， 律师
frequency	 n. 屡次； 次数， 频率
horizontal	 adj. 地平的， 水平的
luggage	 n. 行李
lick	 vt. 舔，舔吃；打败，克服；轻拍，吞卷 n. 舔； 少量， 少许
missile	 n. 导弹， 飞弹， 投射物
dynamic	 adj. 有活力的；动力的；不断变化的 n. 动力； 动力学
satisfactory	 adj. 令人满意的
military	 adj. 军事的，军用的 n. 军队， 武装力量
reluctant	 adj. 不情愿的， 勉强的
generate	 vt. 发生， 引起； 生殖
unusual	 adj. 不平常的， 少有的； 独特的， 与众不同的
sector	 n. 部门， 部分； 防御地段， 防区； 扇形
passion	 n. 激情， 热情； 酷爱
extreme	 adj. 极度的；末端的 n. 极端， 过分
coil	 n. 卷，圈；线圈 vt. 卷
ensure	 vt. 保证； 保护
coordinate	 adj. 同等的， 并列的 vt. 协调， 调节 n. 坐标
organism	 n. 生物， 有机体； 机体， 有机组织
athlete	 n. 运动员， 体育家
epidemic	 adj. 流行性的；传染的 n. 流行病； 传播
suppose	 vt. 猜想， 假定， 让； [常用于被动语态]期望， 认为应该
upright	 adv. 挺直着， 竖立着 adj. 垂直的；正直的，诚实的
remarkable	 adj. 值得注意的， 引人注目的； 异常的， 非凡的
brake	 v. 制动； 刹住， 用闸使放慢速度 n. 闸，刹车
tube	 n. 管， 电子管， 显像管
naval	 adj. 海军的
failure	 n. 失败， 失败的人； 失灵， 故障； 不履行
accountancy	 n. 会计工作； 会计学
forge	 vt. 打制， 锻造； 伪造
carpet	 n. 地毯
solve	 vt. 解答； 解释； 解决
hint	 v. 暗示， 示意 n. 暗示，示意；细微的迹象；建议
knot	 vi. 打结 n. 结；节疤；节 vt. 把…打成结
demonstrate	 vt. 说明； 论证； 表露
region	 n. 地区， 地带， 区域； 范围， 幅度
support	 vt. 支撑；支持；供养；证实 n. 支持， 支撑物， 支持者
yearly	 adv. 一年一度地 adj. 每年的
deceive	 vt. 欺骗， 蒙蔽， 行骗
saucer	 n. 茶托， 碟子
hire	 n&vt. 租用； 雇用
kid	 v. 戏弄， 开玩笑 n. 小孩；年轻人
donkey	 n. 驴； 笨蛋
destination	 n. 目的地， 终点， 目标
vertical	 adj. 垂直的， 竖式的
learning	 n. 学习； 学问， 知识
monument	 n. 纪念碑， 纪念馆； 历史遗迹
misconception	 n. 误解
damp	 adj. 潮湿的，微湿的 n. 潮湿，湿气 vt. 使潮湿； 使沮丧； 抑制
vivid	 adj. 鲜艳的； 生动的， 栩栩如生的
honey	 n. 蜜， 蜂蜜； 甜， 甜蜜； [常用于称呼] 宝贝儿
screw	 n. 螺丝 vt. 固定， 拧紧
gap	 n. 缺口； 间隔； 差距； 缺陷
missing	 adj. 缺掉的， 失踪的
emphasize	 vt. 强调， 着重
virtue	 n. 善， 美德； 优点， 长处
normal	 adj. 正常的， 平常的； 正规的， 规范的
socialist	 n. 社会主义者
gradual	 adj. 逐渐的， 渐进的； 坡度平缓的
figure	 v. 出现； 合乎情理； 计算； 认为， 猜想 n. 数字；人物；算术；体形，体态；轮廓；画像，塑像；图，图形
ore	 n. 矿， 矿石
slight	 adj. 轻微的，微小的 v. 侮慢；轻视，冷落
previous	 adj. 先的， 前的； 以前的
transmit	 vt. 传送， 传递； 传染； 播送， 发射
socialism	 n. 社会主义
consumption	 n. 消耗， 消费
argue	 vi. 争辩， 争论 vt. 争论，争辩，辩论；主张；说服
technology	 n. 工艺学； 工艺， 技术
weaken	 v. 削弱， 变弱
voltage	 n. 电压
damn	 interjection. 该死，见鬼〔表示很生气或失望〕 adv. 非常，很 adj. 该死的〔表示对某人或某事物生气〕
superior	 adj. 上级的，较高的；优越的；有优越感的，高傲的 n. 上级， 长官
location	 n. 位置， 场所； 外景拍摄地
compensation	 n. 补偿， 赔偿
bankrupt	 adj. 破产的
punctual	 adj. 严守时刻的， 准时的
advertise	 vt. 为…做广告， 宣传； 公告； 登广告
compromise	 v. 妥协； 危及； 放弃 n. 妥协，和解，折中办法
sack	 n. 麻袋，包；解雇；洗劫，劫掠 vt. 解雇； 洗劫， 劫掠
software	 n. 软件
seminar	 n. 研究班， 研讨会
comparative	 adj. 比较的， 相对的
competition	 n. 竞争， 比赛
fruitful	 adj. 多产的， 肥沃的
react	 vi. 反应， 作出反应
dragon	 n. 龙
hesitant	 adj. 犹豫的； 吞吞吐吐的
beyond	 adv. 在更远处， 再往后 prep. 在…的那边，远于；迟于；越出
hell	 n. 地狱； 极大的痛苦
feedback	 n. 回授， 反馈， 反应
hazard	 n. 危险；公害 vt. 尝试着做； 冒…风险
justify	 vt. 证明…是正当的
voluntary	 adj. 自愿的， 志愿的
connection	 n. 联系， 关系； 连接， 衔接； 连贯性； 熟人， 关系
proof	 adj. 耐…的， 能防…的 n. 证据，证明；校样，样张
timber	 n. 木材， 原木； 大木料， 栋木
roar	 v. 吼叫，怒号，咆哮；轰鸣；大声喊出，大声表示 n. 呐喊声， 咆哮声， 吼叫声； 轰鸣
presence	 n. 出席， 到场； 存在； 仪表， 仪态
phase	 n. 阶段； 方面； 相， 相位
surrounding	 adj. 附近的；四周的
efficiency	 n. 效率； 功效， 效能
overhead	 adv. 在头顶上 adj. 在头顶上的，架空的 n. 经常费用， 管理费用
contract	 v. 缩小； 订合同； 感染， 染上 n. 契约， 合同
conclude	 v. 推断出， 推论出； 结束， 终了； 缔结， 议定
comprehension	 n. 理解， 理解力， 领悟； 理解力测验
beggar	 n. 乞丐 vt. 使贫穷
leather	 n. 皮革， 皮革制品
comb	 n. 梳子；鸡冠，冠状物 vt. 梳理； 在…搜寻； 彻底搜查
innovative	 adj. 创新的， 革新的
insight	 n. 洞察力； 洞悉； 深刻见解
fabric	 n. 织物， 纺织品； 结构
revolutionary	 adj. 革命的，革新的 n. 革命者
following	 adj. 接着的，下列的 n. 一批追随者
exact	 adj. 确切的，精确的 vt. 强求， 索取
indoor	 adv. 在室内， 在户内 adj. 室内的
force	 vt. 强迫；用力推动，用力打开 n. 军队， 兵力； 暴力， 武力； 力， 力气； 影响力， 效力
centigrade	 adj. 百分度的； 摄氏的
sexual	 adj. 性的， 两性的； 性别的
sympathetic	 adj. 同情的； 和谐的； 赞同的， 支持的； 合意的
freight	 n. 货运；货物；运费 vt. 运送
range	 v. 变动； 漫游， 四处搜索； 使排列成行 n. 一系列；范围；射程，距离；脉；射击场
distribution	 n. 分发， 分配； 分布
tyre	 n. 轮胎， 车胎
derive	 v. 取得； 起源
capacity	 n. 容量； 能力， 才能； 能量； 身份， 地位
cope	 vi. 应付， 处理
overseas	 adv. 在海外 adj. 在海外的
impress	 vi. 给人印象，引人注目 vt. 给…深刻印象；印，压印 n. 印记； 特征
confess	 vt. 供认， 坦白； 承认
leak	 v. 漏；泄露 n. 漏洞
ghost	 n. 鬼， 灵魂， 鬼魂
feature	 vi. 起重要作用 n. 特征，特色；面貌；特写，专题节目；故事片 vt. 突出；由…主演
lean	 v. 倾斜；屈身；靠 adj. 瘦的； 贫瘠的
flat	 adv. 平直地； 直截了当地 adj. 平的；固定的；漏气的；平淡的；沉闷的；浅的 n. 一套房间，单元住宅
recall	 v. 回忆； 召回， 叫回； 收回， 撤销
leap	 v. 跳，跃 n. 跳跃； 骤变
waterproof	 adj. 不透水的， 防水的
barber	 n. 理发师
precise	 adj. 精确的， 准确的； 严谨的
sensible	 adj. 明智的； 合情理的； 有知觉的
objection	 n. 反对， 异议； 反对的理由
dispute	 v. 争论， 争执； 对…表示异议 n. 争论
precious	 adj. 珍贵的， 宝贵的
observation	 n. 注意， 观察； 言论， 评论； 观察资料
tremble	 vi. 发抖，哆嗦；摇动 n. 颤抖； 摇晃， 摇动
suspect	 adj. 可疑的， 不信任的 vt. 疑有；推测；对…表示怀疑 n. 嫌疑犯，可疑分子
apologize	 vi. 道歉， 谢罪， 认错
inhabitant	 n. 居民， 住户
fraction	 n. 小部分； 片断； 分数
filter	 v. 过滤，透；走漏 n. 滤纸， 过滤嘴
sunlight	 n. 日光， 阳光
site	 n. 地点，场所 vt. 使坐落在； 设置
emotion	 n. 情感， 感情； 激动
massive	 adj. 大的， 大而重的； 大块的； 大量的， 大规模的
cease	 v. 停止， 终止
assess	 vt. 对估价； 评价， 评论
asset	 n. 资产， 财产； 有价值的特性或技能， 优点
owe	 vt. 欠； 应把…归功于； 感激， 感恩
scarce	 adj. 缺乏的， 不足的； 稀少的， 罕见的
minimum	 adj. 最低的， 最小的 n. 最低限度；最小量
queue	 vi. 排队等候 n. 长队，行列
mathematical	 adj. 数学的
apology	 n. 道歉， 认错， 谢罪
magic	 adj. 有魔力的； 魔术的 n. 魔法，魅力
argument	 n. 争论， 辩论； 理由； 说理， 论证
reveal	 vt. 揭露， 泄露； 展现， 显示
data	 n. 资料，数据
theoretical	 adj. 理论的
adequate	 adj. 足够的； 可以胜任的
utter	 adj. 完全的，彻底的 vt. 发出， 说， 讲
onion	 n. 洋葱； 洋葱类植物
vibrate	 v. 颤动
drum	 v. 有节奏地敲击 n. 鼓，鼓状物；圆桶
sausage	 n. 香肠， 腊肠
hopeful	 adj. 有希望的
tremendous	 adj. 极大的， 非常的； 精彩的， 了不起的
condense	 v. 冷凝， 凝结； 浓缩， 压缩， 简缩
barrier	 n. 栅栏； 检票口； 屏障； 障碍， 隔阂
realistic	 adj. 现实的； 实际可行的； 现实主义的； 逼真的
justice	 n. 正义， 公正； 司法
create	 vt. 创造； 引起， 产生
criminal	 adj. 犯罪的， 刑事的 n. 犯人，罪犯，刑事犯
tag	 vi. 尾随 n. 附加语；标签 vt. 给…加上标签
notebook	 n. 笔记本
curious	 adj. 好奇的； 奇怪的
indirect	 adj. 间接的， 婉转的
individual	 adj. 个别的；独特的 n. 个人， 个体
resource	 n. 资源； 财力； 应付办法， 谋略
ugly	 adj. 丑陋的； 可怕的
nuisance	 n. 讨厌的东西
tax	 n. 税，税款；负担 vt. 对…征税； 使负担重， 使费尽力气
earthquake	 n. 地震， 大震荡
excitement	 n. 刺激， 激动， 兴奋； 令人兴奋的事， 刺激的因素
nightmare	 n. 噩梦； 可怕的事物， 无法摆脱的恐惧
cord	 n. 细绳， 粗线， 索； 灯芯绒裤
ending	 n. 结尾， 结局； 死亡
core	 n. 果实的心； 核心， 要点
council	 n. 理事会， 委员会
enforce	 vt. 实施， 执行； 强制， 强迫， 迫使
embassy	 n. 大使馆； 大使馆全体成员
departure	 n. 离开， 起程， 出发； 背离， 违背
dash	 vi. 猛冲，击碎 vt. 使猛撞，飞奔；溅 n. 猛冲； 破折号
concrete	 adj. 实在的， 具体的 n. 混凝土；具体物
penalty	 n. 处罚， 惩罚； 罚金
sociology	 n. 社会学
link	 v. 连接，联系 n. 环节， 联系， 纽带
flee	 v. 逃走， 逃掉， 逃离； 避开， 逃避
distinct	 adj. 与其他不同的； 清楚的， 明显的
scale	 n. 大小，规模；等级，级别；天平，磅秤；比例；刻度，标度；鳞 vt. 攀登， 爬越
recovery	 n. 恢复， 痊愈； 追回， 寻回， 收复
hedge	 v. 用篱笆围； 避免直接回答 n. 篱笆，树篱；障碍物
tune	 n. 调子；和谐 vt. 调整， 调节； 为调音
weep	 v. 哭泣， 流泪； 渗出
aware	 adj. 知道的， 意识到的
drama	 n. 戏剧， 剧本； 戏剧性事件
security	 n. 安全， 保障； 抵押品； 证券
limp	 adj. 软的；不强壮的 v. 〔因一腿受伤而〕跛行，一瘸一拐地走 n. 跛行
award	 n. 奖，奖品；判定 vt. 授予， 给予； 判给， 裁定
organize	 vt. 组织， 把…编组； 使有条理
marriage	 n. 结婚， 婚姻； 婚礼
stove	 n. 炉， 火炉， 电炉
alarm	 n. 惊恐；忧虑；警报 vt. 使惊恐； 使担心
weed	 v. 除草 n. 杂草，野草
continual	 adj. 连续的； 频频的
herd	 n. 兽群，牧群 vt. 放牧
limb	 n. 肢， 臂， 腿； 树枝
balloon	 n. 气球， 玩具气球
motion	 v. 打手势， 示意 n. 运动；手势，眼色，动作；提议
limited	 adj. 有限的
idle	 adj. 空闲的，懒散的；无用的 v. 虚度， 无所事事
confidence	 n. 信任， 信赖； 信心， 自信
arbitrary	 adj. 随心所欲的， 专断的
fearful	 adj. 害怕的， 可怕的； 不安的， 忧虑的
accent	 n. 口音， 腔调； 重音
passive	 adj. 被动的， 消极的
fertilizer	 n. 肥料
lorry	 n. 运货汽车， 卡车
carrier	 n. 运输工具， 运载工具； 带菌者； 载重架， 置物架
fragment	 v. 成碎片 n. 碎片，破片，碎块
corresponding	 adj. 相应的， 符合的
response	 n. 回答， 答复； 反应， 响应
treaty	 n. 条约， 协议， 协定
responsive	 adj. 响应的； 敏感的， 易受影响的
ounce	 n. 盎司
challenge	 n. 挑战；邀请比赛；艰巨的任务；怀疑，质问 vt. 反对， 公然反抗； 向…挑战； 对…质疑
emit	 vt. 散发； 发射； 发表
category	 n. 种类， 类， 类别
rival	 adj. 竞争的，对抗的 n. 竞争对手，敌手；可与匹敌的人 vt. 与 …竞争； 与…匹敌， 比得上
intend	 vt. 想要， 打算； 意思是； 打算使
snap	 v. 咔嚓折断，啪地绷断；吧嗒一声；猛咬；厉声说话，怒声责骂 adj. 仓促的， 突然的 n. 吧嗒声；快照`,Kj=`
consistent	adj. 一致的
battery	n. 电池
competent	adj. 能胜任的，有能力的
preserve	v. 保存，保护
possession	n. 拥有
proximately	adv. 近似，接近
wildfire	n. 野火
compact	adj. 紧密的，紧凑的
defy	v. 违背，违抗
absolutely	adv. 当然
filter	v. 过滤
server	n. 服务器
spoil	v. 溺爱
rustle	v. 发出沙沙声
diversion	n. 转移；娱乐
complaint	n. 抱怨，投诉
merge	v. 合并
priceless	adj. 无价的，难以用价格衡量的
honorary	adj. 荣誉的
chronic	adj. 长期的；慢性的
extracurricular	adj. 课外的
lobby	n. 游说
inexhaustible	adj. 用不完的，无穷无尽的
inevitable	adj. 不可避免的
contamination	n. 污染
suspend	v. 暂停
imminent	adj. 即将来临的
obesity	n. 肥胖
aid	v. 援助，有助于
solution	n. 解决，解决方法；溶液
tuition	n. 学费
esteem	v. 尊重
purchase	n. 购买
incorporate	v. 合并
prevail	v. 流行，普遍
irrational	adj. 不合理的，不理性的
inherent	adj. 固有的
overexcited	adj. 过于激烈的
preference	n. 偏爱
evolution	n. 演变；发展；进化
exotic	adj. 异域的，外国的
stockbroker	n. 股票经理人
misinterpret	v. 误解
prosperity	n. 繁荣
tank	n. 水箱
outdated	adj. 过时的
outnumber	v. 超过
supervisor	n. 督导
fluctuate	v. 波动
substance	n. 物质
profitable	adj. 有利可图的，有利益的
markedly	adv. 显著地
ineffective	adj. 无效的
bleak	adj. 荒凉的
optimistic	adj. 乐观的
ultimate	adj. 最终的
consumption	n. 消耗；消费
foster	v. 促进；培养
receipt	n. 发票
harsh	adj. 严酷的，严峻的
misfortune	n. 不幸；灾祸，灾难
citation	n. 引文
rape	n. 强奸
ecological	adj. 生态学的
lag	v. 落后
controversy	n. 争议
cornerstone	n. 基石
erect	v. 建立
prematurely	adv. 早熟地，过早地
initiative	n. 主动性
dilute	v. 稀释，冲淡
viewpoint	n. 观点
typical	adj. 典型的
stray	n. 走失[流浪]的动物
imbalance	n. 不平衡
affiliation	n. 隶属关系，单位团体
counterpart	n. 对等物
classify	v. 分类
demonstration	n. 展示；游行
outlive	v. 比……活的时间长
reservation	n. 预定
circumstance	n. 情况，环境
revolutionize	v. 革命化
outweigh	v. 超过
cast	v. 投掷，扔
uncertain	adj. 不确定的
threat	n. 威胁
conservative	adj. 保守的
overestimate	v. 高估
documentary	n. 纪录片
relieve	v. 减轻，缓解
regardless	adv. 不管，不顾
pause	n. 暂停，迟疑
launch	v. 发布，推出
apartment	n. 公寓
spark	n. 火花
eliminate	v. 消除
unintentionally	adv. 无意地
opposition	n. 反对
polar	adj. 极地的
integral	adj. 必需的，不可缺少的
guard	v. 保护
branch	n. 分支，分公司
affiliate	v. 使隶属于
irrigation	n. 灌溉
stove	n. 炉子
memorable	adj. 值得纪念的
elimination	n. 消除，淘汰
revenue	n. 收入
decisive	adj. 决定性的
displace	v. 取代
violation	n. 违反
ideological	adj. 意识形态的
neighborhood	n. 附近
calorie	n. 卡路里
fierce	adj. 激烈的
mention	v. 提及
extend	v. 延伸；延期
column	n. 专栏
analytical	adj. 分析的
figure	n. 数字
frighten	v. 使害怕
preindustrial	adj. 工业化以前的
furnish	v. 提供
scarcity	n. 缺乏
transform	v. 转变
misled	v. (mislead过去式)误导
intervene	v. 干涉
vary	v. 变化
bureaucracy	n. 官僚主义
recruiter	n. 招聘者
pattern	n. 模式
necessity	n. 必须，必要性
deny	v. 否认
drift	v. 漂流
endorsement	n. 支持
dare	v. 勇敢，敢于做
consultancy	n. 咨询公司
constant	adj. 不断的
deposit	v. 存放 n. 存款
transmit	v. 传播，传导
undermine	v. 削弱
resign	v. 辞职
respective	adj. 各自的
consent	n. 同意
reunion	n. 团聚
premium	n. 〔尤指每年缴付的〕保险费
interpretation	n. 解释，理解
concrete	adj. 具体的
facility	n. 设施
convert	v. 转换，改变
prompt	v. 促使
weave	v. 织布，编织
conformity	n. 一致
inaction	n. 不作为
trim	v. 修剪
irony	n. 讽刺
monopolize	v. 垄断
workload	n. 工作量
complicated	adj. 复杂的
property	n. 财产
underrepresented	adj. 未被充分代表的
philosophy	n. 哲学
regime	n. 制度，管理体制
bizarre	adj. 古怪的；奇怪的
ruin	v. 毁坏
inspire	v. 鼓励
deforestation	n. 砍伐森林
exceptional	adj. 例外的
hazard	n. 危险
upgrade	v. 升级
abnormally	adv. 不正常地
accidentally	adv. 偶然地，意外地
frontier	n. 边境
considerable	adj. 相当多的
legalize	v. 合法化
dispensable	adj. 可有可无的
certify	v. 保证，证明
insurer	n. 保险公司；承保人
overstate	v. 夸张
profound	adj. 深刻的；博学的
agony	n. 痛苦
craft	n. 手艺 v. 精巧地制作
obscurity	n. 默默无闻
guarantee	v. 保证
dolphin	n. 海豚
severity	n. 严重性
discourage	v. 阻止；使气馁
fault	n. 过失
robbery	n. 抢劫
inanimate	adj. 无生命的
calculation	n. 计算
baffle	v. 使迷惑，困惑
overcharge	v. 多收钱
nap	n. 小睡
disposal	n. 处理；支配
authorities	n. 当局
chronicle	v. 记录
shade	v. 为…遮阳[挡光]，遮蔽〔光线〕
milestone	n. 里程碑
unstable	adj. 不稳定的
strain	n. 压力
municipal	adj. 市政府的
ideologically	adv. 意识形态上地
greedy	adj. 贪婪的
robust	adj. 强健的
diagnose	v. 诊断
definite	adj. 一定的，确切的
reserved	adj. 保留意见的；矜持的
affection	n. 喜爱
material	n. 材料
conduct	v. 进行，实行
association	n. 联系
collide	v. 撞击，碰撞
industrious	adj. 勤奋的
fascinate	v. 使着迷
prevalence	n. 流行，普遍
exert	v. 施加
minor	adj. 次要的，小的
tempting	adj. 吸引人的
appropriation	n. 挪用
injustice	n. 不公正
irrelevant	adj. 无关的
registration	n. 注册，登记
democracy	n. 民主
grateful	adj. 感激的
offense	n. 冒犯
atmosphere	n. 气氛；大气（层）
approach	n. 方法
rival	n. 对手
commitment	n. 承诺
furious	adj. 生气的；激烈的
accurate	adj. 精确的
abstract	adj. 抽象的
deprivation	n. 剥夺，匮乏
designate	v. 指定，委派
turtle	n. 海龟
expertise	n. 专业知识
vessel	n. 血管
ventilate	v. 使通风
trade-off	n. 权衡，交易
endless	adj. 无限的，没完没了的
temptation	n. 诱惑
legislation	n. 立法
duplication	n. 复制品
trick	n. 骗局，诡计
evaluation	n. 评价
abandonment	n. 放弃
turbulent	adj. 动荡的，骚乱的
expel	v. 开除，驱逐
carpenter	n. 木匠
hasty	adj. 匆忙的
unprecedented	adj. 史无前例的
extreme	adj. 极端的
outperform	v. 胜过
modernize	v. 现代化
interactive	adj. 〔人与计算机程序、电视系统等〕交互的，互动的；合作的；相互交流的
successively	adv. 接连着地，继续地
innovation	n. 创新，革新；新观念；新方法；新发明
elaborately	adv. 复杂地，精心设计地
vegetarian	n. 素食主义者
faculty	n. 〔大学的〕全体教员
render	v. 给予
portray	v. 描述
notion	n. 想法，观点
tropical	adj. 热带的
character	n. 角色；某物的特色
infectious	adj. 感染的，传染的
lawn	n. 草坪
permanent	adj. 永久的
transcend	v. 超越
kidnap	v. 绑架
dominate	v. 主导，主宰
stabilize	v. 使稳固，使安定
consult	v. 咨询
resume	n. 简历
migrate	v. 移民；迁徙
isolation	n. 隔绝，隔离
derive	v. 获得
conservation	n. 保护
incidence	n. 发生率
perpetual	adj. 永久的
pessimistic	adj. 悲观的
crew	n. 机组人员
mourn	v. 哀悼
vice	n. 恶习
shot	n. 照相，照片
virus	n. 病毒
dorm	n. 宿舍
erupt	v. 爆发；喷出
impact	n. 影响
index	n. 指数；标志，指标
claim	v. 声称；索取
embrace	v. 采纳，接受
enviable	adj. 值得羡慕的
blouse	n. 女衬衫
deliver	v. 递送；发表演讲
rhythm	n. 节奏
code	n. 代号，密码
monopoly	n. 垄断
interfere	adj. 干涉；妨碍
contestant	n. 参赛者
ridiculous	adj. 滑稽的，可笑的
glamorous	adj. 有魅力的，迷人的
mall	n. 商场
chronically	adv. 慢性地；持久地
prolonged	adj. 长时间的
symptom	n. 症状
compelling	adj. 引人注目的
immensely	adv. 非常，极大地
species	n. 物种
battle	n. 激战，战役
conflict	n. 冲突
permeate	v. 渗透
erroneous	adj. 错误的
compartment	n. 车厢, 隔间
metropolitan	adj. 大都市的
grip	n. 抓住
crush	v. 压碎，压榨
prior	adj. 先前的；优先的
formula	n. 公式
inescapable	adj. 不可避免的
skeptical	adj. 怀疑的
harness	v. 利用，控制
destination	n. 目的地
vocational	adj. 职业的
density	n. 密度
variance	n. 不同
landmark	n. 地标
linger	v. 逗留，徘徊
luxurious	adj. 奢侈的，豪华的
astronomical	adj. 天文数字的
coordination	n. 协调；（肌肉的）协调
currency	n. 货币
blame	v. 谴责
dismiss	v. 解雇
testify	v. 作证；证明，检验
qualify	v. 使有资格
inquire	v. 询问
emphasize	v. 强调
overwhelming	adj. 压倒性的
flame	n. 火焰
imitate	v. 模仿
handle	n. 把手
drought	n. 干旱
drummer	n. 鼓手
revive	v. 复兴；复苏
vulnerable	adj. 脆弱的, 易受影响的
spot	n. 点；地点，处所 v. 发现
suppress	v. 镇压，压制
diminish	v. 减少
reconcile	v. 使一致；使和解，调解
artificial	adj. 人造的；虚伪的
athletic	adj. 强壮的；擅长运动的；运动的，运动员的
confrontational	adj. 对抗的，有敌意的
row	v. 划船
navigate	v. 航行，驾驶
panic	n. 惊慌
hostile	adj. 有敌意的
console	v. 安慰
endanger	v. 使……危险
prospect	n. 前景
discern	v. 识别
judicial	adj. 司法的
impair	v. 损害
motel	n. 汽车旅馆
signal	v. 标志
therapy	n. 疗法
diverse	adj. 各种各样的
conserve	v. 保留，保护
adaptation	n. 改编版；适应
resist	v. 抵制
convince	v. 使……相信
burden	n. 负担
payroll	n. 工资总额
unified	adj. 统一的
hasten	v. 加速
intertwine	v. 交织，纠缠
accommodate	v. 容纳；适应
prescribe	v. 开处方
construction	n. 建筑
endure	v. 忍受
election	n. 选举
jury	n. 陪审团
glory	n. 光荣，荣誉
sew	v. 缝上，缝纫
sector	n. 部门
hazardous	adj. 危险的
deprive	v. 剥夺
generous	adj. 慷慨的
constrain	v. 限制
phenomenon	n. 现象
assume	v. 假定，认为
conscientious	adj. 有良心的，认真负责的
concession	n. 妥协
suspect	v. 怀疑 n. 嫌疑犯
sample	n. 样本，样品
penalty	n. 惩罚
representative	n. 代表
soothe	v. 安慰，减轻
entail	v. 使需要，使必须
objective	n. 目标，目的
submit	v. 提交
identify	v. 认出，识别
infect	v. 感染
burial	n. 埋葬
genius	n. 天才
submerge	v. 淹没
stereotype	n. 刻板印象，固有印象
clarify	v. 澄清，明确
conversion	n. 转变
resident	n. 居民
aspect	n. 方面
apologize	v. 道歉
decent	adj. 像样的；正派的，规矩的
fixture	n. 固定装置
institution	n. 机构
scent	n. 香味
welfare	n. 幸福；福利
subsidy	n. 补助
superficial	adj. 表面的
private	adj. 私人的
conventional	adj. 传统的
wonder	v. 想知道，好奇
tedious	adj. 冗长的
subordinate	adj. 从属的；次要的
frame	v. 制定，拟定〔计划、体制等〕
smuggle	v. 走私
reimbursement	n. 返还费用
disappear	v. 消失
inhale	v. 吸入
majority	n. 大多数
memorize	v. 熟记
cumulative	adj. 积累的
trap	v. 捕捉
lofty	adj. 高耸的；崇高的
clarity	n. 清晰，清楚
interact	v. 互动
refine	v. 提炼；改进，完善
confer	v. 授予
anonymous	adj. 匿名的
commentator	n. 评论员
keen	adj. 敏锐的；浓厚的
enforce	v. 强迫，迫使
grocery	n. 杂货店
spread	v. 传播，扩散
recruit	v. 招聘
justified	adj. 正当的
eccentric	adj. 古怪的
bridge	v. 架桥于…之上；缩小
neglect	v. 疏忽；忽视
principle	n. 道德原则；原则
stain	n. 污渍，污点
encourage	v. 鼓励
convincing	adj. 令人信服的
indiscriminately	adv. 不加选择地，不加区分地
resolute	adj. 坚定的
indicative	adj. 指示的
perish	v. 死亡
philosopher	n. 哲学家
recipe	n. 食谱；秘诀
excessive	adj. 过度的
rigor	n. 严格，严谨
deficient	adj. 不足的，缺乏的
incompetence	n. 无能
entitle	v. 使具有资格
adventurer	n. 冒险者
quicken	v. 加快
divert	v. 使转向；转移注意力
recommend	v. 推荐
incalculable	adj. 不可估量的，无法计算的
outcome	n. 结果
scaffolding	n. 脚手架
garage	n. 车库
domestic	adj. 国内的
cultivate	v. 培养
formulate	v. 制定，规划
shed	v. 洒 (热血)
worldwide	adv. 世界范围地，全世界
fuss	n. 小题大做
contention	n. 争论
hijack	v. 劫持
dweller	n. 居住者
buck	v. 反对 n. 美元
view	v. 看待
pronoun	n. 代词
contribution	n. 贡献
undecided	adj. 不确定的
restrict	v. 限制
reverse	adj. 相反的
grasp	v. 理解；抓住
provoke	v. 激怒
texture	n. 质地
publicity	n. 宣传
format	n. 形式
indifferent	adj. 冷漠的
incentive	n. 刺激
prejudice	n. 偏见
assumption	n. 假设
habitual	adj. 习惯的
sculpture	n. 雕塑
responsibility	n. 责任
manuscript	n. 手稿
duplicate	n. 副本，复制品
ecosystem	n. 生态系统
humorous	adj. 幽默的
contaminate	v. 污染，弄脏
orbit	n. 轨道
evolve	v. 进化
skyrocket	v. 猛增
portion	n. 部分
cautious	adj. 谨慎的
assassinate	v. 刺杀，暗杀
narrow	v. 变窄，缩小
botanical	adj. 植物学的
conquer	v. 征服
regain	v. 重新获得
composition	n. 作文
stress	v. 强调
yield	v. 产生
spectacle	n. 景象
host	v. 主持
release	v. 释放；发布
malicious	adj. 恶毒的
prevailing	adj. 流行的
gratitude	n. 感激
mobility	n. 流动性；活动性
ascend	v. 上升
fake	n. 假货
inflation	n. 通货膨胀
plot	n. 情节
manufacture	v. 生产，制造
criticism	n. 批评
outsource	v. 外包
obstacle	n. 阻碍
appreciative	adj. 表示赞赏的，感谢的
predominantly	adv. 占主导地位地
invasion	n. 入侵
detect	v. 发现
addict	n. 吸毒上瘾者；对…着迷的人
slash	v. 猛削，劈，砍；削减
cognitive	adj. 认知的
extinguish	v. 熄灭；使消亡
disadvantage	n. 缺点，不利条件
alien	adj. 陌生的
barely	adv. 几乎不，仅仅
simulate	v. 模拟，模仿
prospective	adj. 预期的；未来的
interaction	n. 相互影响，相互作用；互动
materialize	v. 实现
contribute	v. 有助于，促成；捐赠
dishonest	adj. 不诚实的
appeal	n. 请求，呼吁,；上诉
applicant	n. 申请者
intelligent	adj. 聪明的
spacious	adj. 宽敞的
fatal	adj. 致命的
counselor	n. 咨询顾问
potential	adj. 潜在的 n. 潜力
assimilate	v. 同化
cropland	n. 农田
relieved	adj. 轻松的，缓解的
compel	v. 强迫
program	v. 计划，安排
capacity	n. 能力；容量
orient	v. 使确定方向；使适应
undertaking	n. 任务，事情
shift	v. 转移注意力；转变
liberation	n. 解放
utterly	adv. 完全地，彻底地
immense	adj. 巨大的
inferior	adj. 比……差
accrue	v. 积累
genuine	adj. 真的；由衷的
nominate	v. 提名
distinctive	adj. 与众不同的
mismanagement	n. 管理不当
reckon	v. 认为，评价
mask	n. 面具 v. 掩饰，掩盖
forge	v. 伪造；锻造
identical	adj. 相同的
imperial	adj. 帝国的
target	n. 目标 v. 把…作为目标
disconnect	v. 断开
immigrant	n. 移民
unqualified	adj. 不合格的，不胜任的
edit	v. 编校；编辑；剪辑
govern	v. 管理
assert	v. 主张，断言
breezy	adj. 轻松愉快的
hesitate	v. 犹豫
presidency	n. 总统任期
quota	n. 配额
dropout	n. 辍学学生
capture	v. 逮捕；捕捉
integrity	n. 正直
flee	v. 离开
certification	n. 证书
instant	adj. 立即的
criminal	adj. 犯罪的 n. 罪犯
clue	n. 线索
arrogant	adj. 傲慢无礼的
elevate	v. 提升；举起
expansion	n. 扩张；扩大
authority	n. 权威；当局
publicize	v. 宣传
reflective	adj. 反映的，反射的；深思熟虑的
quantity	n. 数量
acutely	adv. 强烈地
isolate	v. 使隔离
vigorous	adj. 积极的；精力充沛的
counsel	v. 建议，忠告
vivid	adj. 生动的
hostility	n. 敌意
collaborate	v. 合作
consultation	n. 商议
transition	n. 过渡
deteriorate	v. 恶化
pasture	n. 牧场
eyewitness	n. 目击者
trait	n. 特点
anticipate	v. 期望，预期
numerous	adj. 无数的
combination	n. 组合，结合
slightly	adv. 轻微地
dividend	n. 分红，红利
minimal	adj. 最低的，最小限度的
derail	v. 脱轨
barrier	n. 障碍，阻碍
ingenuity	n. 创造力
bribe	v. 贿赂
guesstimate	n. 大概估计，瞎猜估计
negotiation	n. 协商
hardship	n. 艰难
badge	n. 标记, 徽章
compromise	v. 妥协
excess	n. 过量，过度
descendant	n. 子孙后代
fulfill	v. 实现
collective	adj. 共同的
amend	v. 修订
tangled	adj. 纠缠的；复杂的
qualification	n. 资格
recall	v. 回忆起，想起
adopt	v. 采纳
tasteless	adj. 没有味道的
drown	v. 溺水
tragedy	n. 悲剧
circulation	n. 发行量
grand	adj. 壮丽的，极好的
inadequate	adj. 不足的
household	n. 家庭，一家人
authorization	n. 授权
auxiliary	adj. 辅助的
adverse	adj. 不利的
descriptive	adj. 描写的，描述的
trace	v. 追踪
bloom	v. 开花，茂盛
evaluate	v. 评价
humanistic	adj. 人文的
cozy	adj. 舒适的
plough	n. 犁
melt	v. 融化
lest	conj. 以免
ready	adj. 乐意的，愿意的
formidable	adj. 可怕的；令人敬畏的，令人惊叹的
feasible	adj. 可行的
regarding	prep. 关于
needle	n. 指针；针
dimension	n. 尺寸；维
specialize	v. 专业从事
overturn	v. 推翻
shrank	v. 收缩(shrink过去式)
adversely	adv. 不利地
check	v. 检查；阻止
testimony	n. 证词
rigorous	adj. 严格的
privileged	adj. 有特权的
expectation	n. 期望
bias	n. 偏见
lawsuit	n. 诉讼
eloquent	adj. 口才好的，雄辩的
shrink	v. 缩减，缩小
regulation	n. 规则；管理
alternative	n. 代替品
moist	adj. 潮湿的
surpass	v. 超过
fabric	n. 布料
distinction	n. 区分
eradicate	v. 根除
brilliant	adj. 才华横溢的；极好的
redefine	v. 重新定义
arm	v. 装备，武装
intensely	adv. 强烈地
desperate	adj. 绝望的，不顾一切的
sexism	n. 性别歧视
bruise	v. 使碰伤，擦伤
prominent	adj. 卓越的；突出的
comprehensive	adj. 综合的，全面的
forecast	n. 预报，预测
champion	v. 支持，拥护
specification	n. 说明
layout	n. 布局，设计
rally	n. 集会
romantic	adj. 爱情的
deviate	v. 偏离
insufficient	adj. 不足的
boost	v. 提高
scandal	n. 丑闻
confine	v. 限制
conspicuous	adj. 显著的
significant	adj. 重要的
fresh	adj. 新颖的，新奇的
indulge	v. 放纵
instinctively	adv. 本能地
complement	n. 补充
content	adj. 满意的
squalor	n. 肮脏
fatigue	n. 疲惫
awesome	adj. 令人敬畏的,令人赞叹的；极好的
responsive	adj. 灵敏的，反应的
echo	v. 随声附和，发出回声
division	n. 分歧
gender	n. 性别
correlation	n. 相关，关联
casualty	n. 伤亡人数
appropriate	adj. 适当的
subtle	adj. 微妙的
critical	adj. 批评的；关键的
alternatively	adv. 二选一地；非此即彼
intimate	adj. 亲密的
disengagement	n. 分离
lounge	n. 休息室
gesture	n. 姿势，手势
script	n. 脚本，剧本
prestige	n. 名声，声望
awkward	adj. 尴尬的；棘手的；笨拙的
entrepreneur	n. 企业家
automatic	adj. 自动的
thrive	v. 繁荣，兴旺
enrich	v. 丰富，使富裕
chew	v. 咀嚼；深思
vehicle	n. 车辆
intriguing	adj. 有趣的
segregation	n. 隔离
hurl	v. 猛投
hatch	v. 孵化
disservice	n. 危害
variation	n. 变化
enormous	adj. 巨大的
scare	n. 恐吓，惊恐
alphabetical	adj. 按字母表顺序的
conclusive	adj. 得出结论的
epidemic	n. 流行病
solid	adj. 坚实的；稳固的
clause	n. 条款
attendant	n. 服务人员
collapse	v. 坍塌，崩塌
dispatch	v. 发送，派遣
shrug	v. 耸肩
redundant	adj. 失业的，被解雇的；过剩的
alert	adj. 机警的 v. 提醒
deficit	n. 赤字
restructure	v. 调整，重建
tap	v. 轻敲
simultaneous	adj. 同步的
arise	v. 出现
wildlife	n. 野生动物
overwhelm	v. 压倒，战胜
motivation	n. 动力，积极性
delicate	adj. 细微的；精细的
remarkable	adj. 显著的，杰出的
slavery	n. 奴隶制度
untreated	adj. 未经处理的
suspicious	adj. 怀疑的
ancient	adj. 古代的
distort	v. 歪曲；扭曲
skip	v. 跳过
wishful	adj. 一厢情愿的
entrepreneurship	n. 企业管理
bride	n. 新娘
unfold	v. 展开
interference	n. 干涉
assault	n. 攻击
shareholder	n. 股东
breakthrough	n. 突破性进展
footnote	n. 注脚
applicable	adj. 可应用的
controversial	adj. 受到争议的
inherit	v. 继承
facilitate	v. 使便利；促进
manifest	v. 表明
fiscal	adj. 财政的
gown	n. 长袍
rate	n. 费用
mortality	n. 死亡率
decline	v. 拒绝
mournful	adj. 悲哀的；令人惋惜的
paradox	n. 悖论
simultaneously	adv. 同步地，同时地
strategy	n. 策略
literacy	n. 识字， 有文化
apathy	n. 冷漠
boom	n. 繁荣
oblige	v. 迫使
incompatibility	n. 不兼容
commerce	n. 商业
attribute	v. 归因于
cafeteria	n. 自助餐厅
cripple	n. 残疾，跛子
shuttle	n. 航天飞机
nightmare	n. 噩梦
startle	v. 使惊讶
debris	n. 残骸，碎片
assemble	v. 收集，组装
perception	n. 看法；意识
coastal	adj. 海滨的
desert	v. 放弃，抛弃
peer	n. 同龄人
embody	v. 体现
sympathetic	adj. 同情的
backup	n. 后补，援助
notably	adv. 显著地，尤其
exploit	v. 开发，开采
poetry	n. 诗歌
discriminate	v. 歧视；区别
readjust	v. 重新调整，再调整
slight	adj. 轻微的
strip	n. 狭长的一块
tackle	v. 解决，处理
steady	adj. 稳定的
minority	n. 少数，少数民族
aspirational	adj. 渴望成功的的
discipline	n. 训练，管教
threshold	n. 门槛
soar	v. 高飞
uneven	adj. 不均衡的
crucial	adj. 关键的
athletics	n. 体育运动
needy	adj. 贫穷的
enthusiastic	adj. 热情的
trigger	v. 引发，引起
essential	adj. 必须的；本质的
agenda	n. 议程
owe	v. 欠钱
justice	n. 公平
donor	n. 捐赠者
convict	v. 证明……有罪
underestimate	v. 低估
flat	adj. 平的 n. 公寓
confidential	adj. 机密的
unexpected	adj. 意想不到的
vitamin	n. 维他命
jeopardize	v. 危害，危及
disproportionately	adv. 比例不均地，不成比例地
bacteria	n. 细菌
achieve	v. 达到，实现
bump	v. 颠簸
existence	n. 存在；生存
sweep	v. 扫除，清除
shrewd	adj. 精明的
illuminate	v. 阐释，阐明
realm	n. 领域，方面
blueprint	n. 蓝图，设计图
pension	n. 养老金
administration	n. 管理；政府
track	v. 追踪 n. 轨迹，踪迹
ponder	v. 仔细考虑
paradise	n. 天堂
ethnic	adj. 种族的
accelerate	v. 加速
bitter	adj. 痛苦的
ambition	n. 野心，报复
confess	v. 承认
extent	n. 程度
accountant	n. 会计
sheer	adj. 纯粹的
deliberate	adj. 故意的
pave	v. 铺路
measure	n. 措施
potentially	adv. 潜在地
remove	v. 消除，移除；更新
allergic	adj. 过敏的
available	adj. 可获得的，可利用的
initial	adj. 初步的，最初的
consensus	n. 共识，一致
opponent	n. 反对者
modify	v. 改变
signify	v. 表明，象征
accumulate	v. 积累
mining	n. 采矿业
violent	adj. 暴力的
adversity	n. 逆境
dynamics	n. 动力学
chaos	n. 混乱
persistent	adj. 持续的；坚持不懈的
ritual	n. 仪式
criteria	n. 标准
impose	v. 强加于
untiring	adj. 不知疲倦的
contrary	adj. 相反的
nutritious	adj. 有营养的
anxiety	n. 焦虑
rewarding	adj. 有意义的
straightforward	adj. 直接的
descent	n. 血统, 后裔
hospitality	n. 友好
stuff	n. 材料，东西
reflect	v. 反映；反射；思考
carpentry	n. 木工活
decode	v. 解码
flaw	n. 缺点，瑕疵
reveal	v. 揭露
tutor	v. 辅导
accustom	v. 使习惯
acquaintance	n. 熟人
distribution	n. 分布，分配
trend	n. 趋势
irritate	v. 激怒
intrinsic	adj. 本质的，固有的
deem	v. 认为
arouse	v. 唤起
suburban	adj. 郊区的
pursue	v. 追求
ideology	n. 意识形态
layman	n. 门外汉
instantaneous	adj. 即时的，瞬间的
seasick	adj. 晕船的
lack	v. 缺少
exaggerate	v. 夸张
magnify	v. 放大
utilization	n. 利用
twist	v. 扭曲
expedition	n. 探险，远征
switch	v. 转换
inheritance	n. 继承；遗产
sponsor	v. 赞助 n. 赞助商
deterioration	n. 恶化，退化
ongoing	adj. 持续的，不间断的
refreshing	adj. 新鲜的
incidentally	adv. 顺便地，附带
imprison	v. 监禁
present	v. 呈现，给予
uninformed	adj. 无知的，未受过教育的
overlap	v. 重叠
slim	adj. 苗条的
urban	adj. 城市的，都市的
rank	v. 排列；分级
untrustworthy	adj. 不值得信任的，怀疑的
Automatically	adv. 自动地；不经思考地
accountable	adj. 应负责的，有责任的
collaborative	adj. 合作的
practice	n. 做法
diligence	n. 勤奋
victim	n. 受害者
urge	v. 催促
fertility	n. 多产，肥沃
foundation	n. 基金会
reception	n. 接待
elite	n. 精英
suicide	n. 自杀
incompetent	adj. 无能力的，不胜任的
tremendous	adj. 巨大的
recyclable	adj. 可回收利用的
visualize	v. 想象
exertion	n. 运用
slack	adj. 疲软的，萧条的
rigid	adj. 严格的
organic	adj. 有机的
reproduction	n. 繁殖
strap	v. 用带绑住
precision	n. 精确性
standardize	v. 标准化
aptly	adv. 适当地
promotion	n. 促销
paralyze	v. 瘫痪，麻痹
degeneration	n. 退化，变质
refrain	v. 抑制，避免
flavor	n. 口味
adventure	n. 冒险
agonize	v. 使痛苦
mount	v. 增加
oppose	v. 反对
justifiable	adj. 理所应当的
promote	v. 促进
renewable	adj. 可再生的
hypothesis	n. 假设，假说
presentation	n. 展示；讲话
cater	v. 迎合
unbiased	adj. 公正的
immersive	adj. 沉浸的，身临其境的
domain	n. 领域
primitive	adj. 原始的；简单的
urgent	adj. 急迫的
threaten	v. 威胁
throne	n. 王位
underfunded	adj. 资金不足的
jail	n. 监狱
assessment	n. 评估，评价
frustrate	v. 使挫败，使沮丧
abolition	n. 废除
detective	n. 侦探
skyscraper	n. 摩天大楼
corruption	n. 腐败
intolerant	adj. 无法容忍的
pierce	v. 刺穿
compensate	v. 弥补
gap	n. 差距
worship	v. 崇拜，喜爱
gallery	n. 美术馆
coach	n. 教练
cancel	v. 取消
strike	n. 罢工
rebellion	n. 叛逆
distract	v. 分心，分散注意
imperative	adj. 必须的,必要的
geology	n. 地质学
sway	v. 影响
costume	n. 服装
manual	adj. 手工的；体力的
quantifiable	adj. 可量化的
expenditure	n. 费用，花销
breed	v. 繁殖；导致
emerge	v. 出现
noted	adj. 著名的
position	v. 安放 n. 位置；职位
extinction	n. 灭绝
receptionist	n. 接待员
reckless	adj. 鲁莽的
abuse	n. 虐待 v. 滥用
accuse	v. 指控
biochemistry	n. 生物化学
optimism	n. 乐观
predict	v. 预测
notoriously	adv. 臭名昭著地
board	n. 董事会
pose	v. 形成
memorandum	n. 备忘录
puzzling	adj. 迷惑的，困扰的
reliable	adj. 可靠的
replacement	n. 代替
reinforce	v. 增强，强化
impart	v. 传授，教授
diversity	n. 多样性
occupation	n. 职业
intense	adj. 激烈的，强烈的
dramatically	adv. 大幅度地；戏剧性地
awareness	n. 意识
virtually	adv. 几乎
maturity	n. 成熟
rare	adj. 罕见的，稀少的
curb	v. 限制，控制
favor	v. 恩惠；善意的行为
productivity	n. 生产力
mechanism	n. 机制
helicopter	n. 直升飞机
validity	n. 有效性；真实性
relevant	adj. 相关的
miracle	n. 奇迹
fertilizer	n. 肥料
shady	adj. 阴凉的
poll	n. 民意测验
countermeasure	n. 对策
worldly	adj. 世间的，尘世的
legislator	n. 立法者
campaign	n. 活动
odds	n. 可能性
shepherd	v. 引导，带领
schedule	n. 计划表
access	v. 取得，获取
owl	n. 猫头鹰
interpret	v. 口译；解释
intervention	n. 干涉
bemoan	v. 抱怨；惋惜
determine	v. 决定
incur	v. 引起，导致
literal	adj. 字面的
proposition	n. 提议，主题
feasibility	n. 可行
destructive	adj. 破坏性的，毁灭性的
denationalize	v. 使非国有化
resort	n. 度假胜地
engage	v. 忙于，从事；雇佣
disarm	v. 解除，消除
approximately	adv. 大约
cover	v. 遮盖，遮蔽
validation	n. 证实
widespread	adj. 广泛传播的
unethical	adj. 不道德的
withdraw	v. 撤销，撤退
relay	v. 接替，转播
fluently	adv. 流利地
mysteriously	adv. 神秘地
hinder	v. 阻碍
session	n. 会议；学年
postdoctoral	adj. 博士后的
prioritize	v. 优先
bipartisan	adj. 两党的
reluctance	n. 勉强，不情愿
intuitive	adj. 直觉的
quote	v. 引用
pragmatic	adj. 务实的，讲求实际的
alleviate	v. 减轻，缓解
underlying	adj. 潜在的，基础的
generate	v. 产生
dysfunction	n. 失常
invasive	adj. 入侵的
ignore	v. 忽视
specific	adj. 具体的
elegant	adj. 高雅的，雅致的
capital	adj. 资金的，资本的
indicate	v. 表明
eligible	adj. 适合的；胜任的
procedure	n. 程序
unrealistic	adj. 不现实的
occur	v. 发生
aggravate	v. 加重，加剧
frankly	adv. 坦率地
thrilling	adj. 令人兴奋的
irreversible	adj. 不可逆的；不可取消的
marine	adj. 海洋的
interracial	adj. 种族间的
grave	adj. 严重的
undocumented	adj. 无证明的
appoint	v. 任命
rhetorical	adj. 修辞的
momentum	n. 动力，势头
deserve	v. 值得
drastically	adv. 激烈地，猛烈地
particle	n. 粒子，微粒
miniature	adj. 微型的
merit	v. 值得 n. 优点
category	n. 种类
liability	n. 责任；债务
hack	v. 黑客攻击
matter	v. 重要；要紧
brutal	adj. 残酷的
biodiversity	n. 生物多样性
subsequently	adv. 随后
bother	v. 困扰
subconscious	adj. 下意识的，潜意识的
genetic	adj. 基因的
recurrence	n. 再次发生
defect	n. 缺点
retailer	n. 零售商
memo	n. 备忘录
chain	n. 连锁店
executive	n. 执行官
ballet	n. 芭蕾
enrollment	n. 入学人数
propose	v. 提出
frantic	adj. 疯狂的
allegedly	adv. 据说
manipulate	v. 操纵
coverage	n. 报道
novel	adj. 新颖的
previous	adj. 之前的
neutrality	n. 中立
underscore	v. 强调
indispensable	adj. 必不可少的
puzzle	v. 迷惑
illustrate	v. 阐明，说明
sanitation	n. 卫生环境，卫生设备
defensive	adj. 防守的，防御的
perspective	n. 视角，观点
migration	n. 迁徙，移居
float	v. 漂浮
flexible	adj. 灵活的
capable	adj. 有能力的
practical	adj. 实践的；实用的
territory	n. 领域，领土
urbanization	n. 城市化
privilege	n. 特权
forthcoming	adj. 即将来临的
widen	v. 拓宽，变宽
deduction	n. 扣款
virtual	adj. 虚拟的；事实上的
boast	v. 自夸
monetary	adj. 货币的
dim	adj. 暗淡的；愚蠢的
sensible	adj. 理智的
infant	n. 婴儿
precedent	n. 先例
activate	v. 激活
accomplish	v. 实现
immigration	n. 移民
approve	v. 赞同
pessimist	n. 悲观主义者
aggressive	adj. 挑衅的
toxic	adj. 有毒的
ruling	n. 裁定
prolong	v. 延长
tension	n. 紧张
specialist	n. 专家
encounter	v. 遭遇
reap	v. 收割，收获
institute	n. 研究所，学会，学院
maintenance	n. 维修
legend	n. 传奇
groundless	adj. 无理由的，无根据的
undertake	v. 承担；着手，开始
commodity	n. 商品
stimulate	v. 刺激；激励
tough	adj. 困难的，粗暴的
vital	adj. 重要的
ankle	n. 脚踝
surgical	adj. 手术的
peculiar	adj. 奇怪的；特有的
fade	v. 褪色
pursuit	n. 追求
sophisticated	adj. 复杂的，精密的；老于世故的
lobbyist	n. 游说者
lessen	v. 减少
handgun	n. 手枪
influential	adj. 有影响力的
detached	adj. 冷静的，超然的
biography	n. 传记
curriculum	n. 课程
margin	n. 利润
fearlessly	adv. 无畏地，大胆地
randomly	adv. 随机地
discrimination	n. 歧视
stimulus	n. 刺激
competence	n. 能力
sneak	v. 溜走
exceed	v. 超过
turbulence	n. 气流；骚乱
address	v. 解决
trade	v. 做买卖；交换
deal	v. 买卖毒品
hike	v. 作长途徒步旅行
action	n. 行动
resultant	adj. 作为结果而发生的
consequent	adj. 作为结果的；必然的
composer	n. 作曲家
slave	v. 作苦工；奴役
grunt	v. 作呼噜声；咕哝
abide	v. 忍受；遵守
value	v. 尊重，重视；估价
dignity	n. 庄重；尊严；体面
outermost	adj. 最外面的，最远的
optimum	adj. 最优的，最适宜的
initially	adv. 最初，开始
makeup	n. 化妆品；性格；构造；组成
integral	adj. 作为组成部分的；内置的
composition	n. 组成，构成，结构
block	n. 阻塞；障碍物
damn	v. 谴责
ample	adj. 足够的；宽敞的
suffice	v. 足够
lease	n. 租约，契约，租契
charter	v. 包租（飞机、船等）
headquarters	n. 总部
executive	n. （机构或公司的）主管，经理
main	n. 总管道，干线
overall	adj. 总的
conceit	n. 自负，自高自大
ultraviolet	adj. 紫外（线）的
descendant	n. 子孙，后裔
endow	v. 资助；赋予
datum	n. 资料；数据；已知数
qualification	n. 资格；学历
bourgeois	adj. 中产阶级的；庸俗的；资产阶级的
woodpecker	n. 啄木鸟
bump	v. 撞上
crash	v. （发出巨响的） 猛撞
way	n. （特定的）状态，状况
superb	adj. 壮丽的；超等的
ornament	n. 装饰物
decorative	adj. 装饰的；可作装饰的
ornamental	adj. 装饰的
mount	v. 装配
shipment	n. 装载的货物；装货
can	v. 装罐头
array	v. （美观地）排列 n. 陈列
diversion	n. 转移；改道；娱乐
convert	v. 转变，改变，变换
transition	n. 转变，变迁；过渡
torque	n. 转（力）矩，扭（力）矩
box	n. （法庭的）专席
workshop	n. 专题讨论会
patent	adj. 专利的 n. 专利
clutch	v. 抓住，掌握，攫
nest	v. 筑巢，为…筑巢
coin	v. 铸造（硬币）
noted	adj. 著名的，知名的
watchful	adj. 注意的，警惕的
inject	v. 注射；注满；喷射
storage	n. 贮藏；保管
position	n. 形势；主张，立场
metropolitan	adj. 主要都市的 n. （东正教和天主教的）大主教
principally	adv. 主要，大抵
stalk	n. 主茎，叶柄
preside	v. 主持；主奏
eject	v. 逐出，排斥；喷射
bamboo	n. 竹；竹杆，竹棍
jewellery	n. 珠宝，珠宝饰物
wrinkle	n. 皱纹 vt. 使起皱纹
axial	adj. 轴的；轴向的
axis	n. 轴，轴线
ambient	adj. 周围的，包围着的
periodic	adj. 周期的；一定时期的
anniversary	n. 周年纪念日
peripheral	adj. 外围的的；末梢的
perimeter	n. 周（边）；周长
anybody	n. 重要人物
responsible	adj. 可靠的；责任重大的
consequence	n. 重要（性），重大意义
category	n. 种类，类目；范畴
species	n. 种，物种；种类
hearty	adj. 热情友好的；丰盛的
neutron	n. 中子
intermediate	n. 中间体；调解人
proton	n. 质子，氕核
qualitative	adj. 质的；定性的
fabricate	v. 捏造；制作
fabrication	n. 捏造；制作
volunteer	n. 志愿者 v. 志愿
rebuke	v. 指责，非难，斥责
indicative	adj. 指示的；陈述的
denote	v. 指示，意味着
instructor	n. 指导者，教员
designate	v. 指定；指示；指明
colonial	adj. 殖民地的，殖民的
vocation	n. 职业，行业
notable	adj. 值得注意的；著名的
merit	v. 值得；应受赏（罚）
weaver	n. 织布工，编织者
brace	n. 支柱 v. 拉紧，撑牢
check	n. 支票；帐单
second	v. 支持
bearing	n. 方位；（机器的）承座；轴承；忍受
symptom	n. 症状；征兆，征候
regime	n. 政权，政体；制度
politics	n. 政纲，政见，策略
platform	n. 政纲，党纲，宣言
confirmation	n. 证实，确定；确认
testify	v. 作证；证明，证实
audience	n. 正式会见；拜会
correctly	adv. 正确地，恰当地
positive	adj. 正的，阳性的；正的，正极的，阳性的；正的，正数的
normalization	n. 正常化，标准化
sign	n. 征兆，迹象，病症
conqueror	n. 征服者，胜利者
controversy	n. 争论，辩论，争吵
suppress	v. 镇压；抑制；禁止发表；封锁；查禁
gust	n. 阵风，一阵狂风
clinic	n. 诊所，医务室；会诊；会诊时间；门诊时间
diagnose	v. 诊断（疾病）
sincerity	n. 真诚，诚意；真实
cherish	v. 珍爱；怀有（感情）
detective	n. 侦探，警探；私人侦探，私家侦探
underline	v. 着重；强调 n. 预告
grind	v. 磨碎，碾碎，把...磨成粉
discount	n. 折扣 v. 打折扣卖
literally	adv. 照字义，逐字地
illuminate	v. 照明，照亮；阐明
summon	v. 召唤；鼓起（勇气）
marsh	n. 沼泽地，湿地
entertainment	n. 招待，招待会
hindrance	n. 障碍，妨碍
hose	n. 软管；袜类（包括连裤袜、长筒袜、短袜）
sofa	n. 长沙发，沙发
tensile	adj. 张力的；能伸长的
warfare	n. 战争，战争状态
battle	v. 战斗，与…作战
predominant	adj. 占优势的；主要的
unfold	v. 展开；展现，呈现
cling	v. 粘住；依附；坚持
viscous	adj. 粘滞的，粘性的
coherent	adj. （文章、观点等）连贯的，有条理的，一致的
album	n. （收存照片或邮票的） 册子
glue	v. 粘牢
cement	v. 粘结
adhere	v. 粘附；追随；坚持
strip	n. 窄条，长带
grasshopper	n. 蚱蜢，蝗虫，蚂蚱
wink	v. 眨眼；使眼色
further	v. 增进
multiplication	n. 乘法；增加
liability	n. 责任；债务
shipbuilding	n. 造船（业），造船学
mint	n. 造币厂；巨额钱财
hollow	v. 凿空，挖空
hymn	n. 赞美诗，圣歌；赞歌
glorify	v. 赞美；颂扬（上帝）
fore	adv. 在（或向）船头；在（或向）飞行器头部
therein	adv. 在那里
overseas	adv. 在海外，（向）国外
ashore	adv. 在岸上，上岸
outside	prep. 在…外，向…外
brand	v. 在…上打烙印
alongside	prep. 在…旁边
roam	v. 在…漫步，漫游
over	prep. 在（做）…时
reproduction	n. 再生（产）；繁殖
specification	n. 规格；明确说明，详述
disastrous	adj. 灾难性的；悲惨的
operation	n. 运算
freight	n. 货运；运费
locomotive	adj. 运动的；机动
lunar	adj. 月亮的
undertake	v. 从事；承诺
primitive	adj. 远古的，未开化的
dome	n. 圆屋顶，拱顶
cylinder	n. 圆筒；柱（面）；汽缸
satisfactorily	adv. 圆满地
nucleus	n. 原子核，细胞核
prototype	n. 原型；典型，范例
vowel	n. 元音；元音字母
marshal	n. 元帅；陆军元帅
subscription	n. 订阅（费）；用户费（的缴纳）
prophet	n. 预言家，先知
prophecy	n. 预言；预言能力
prediction	n. 预言，预告；预报
preset	v. 预先装置
beforehand	adv. 预先；提前地
budget	n. 预算；〔政府的〕
foresee	v. 预见，预知，看穿
prevention	n. 预防，阻止，妨碍
tulip	n. 郁金香
intonation	n. 语调，声调；发声
cosmic	adj. 宇宙的；广大无边的，极大的
cosmos	n. 宇宙
overlap	v. 与…交搭，重叠
excuse	v. 为…辩解；使免除
senseless	adj. 愚蠢的，无意义的
amusement	n. 乐趣；娱乐，消遣
torpedo	n. 鱼雷，水雷
margin	n. 余地；（获胜者在时间或票数上领先的）幅度，差额；利润；赚头
roundabout	adj. 转弯抹角的；迂回的
kidnap	v. 诱拐，绑架
guilt	n. 内疚；有罪，犯罪
shadowy	adj. 有影的；幽暗的
avail	v. 有益于，有用 n. 效用
ambitious	adj. 有雄心的；热望的
significant	adj. 重要的，重大的，影响深远的
validity	n. （法律上的）有效；符合逻辑，正确
availability	n. 有效（性）；可得性
finite	adj. 有限的；有尽的
magnet	n. 有吸引力的人（或物）
profitable	adj. 有利的；有益的
advantageous	adj. 有利的，有助的
courteous	adj. 有礼貌的，谦恭的
bead	n. 有孔小珠；水珠；露珠
commonsense	adj. 有常识的
conservative	adj. 保守的，守旧的
liable	adj. 有（法律）责任的
yacht	n. 游艇，快艇
uranium	n. 铀
tanker	n. 油船；空中加油飞机
postal	adj. 邮政的，邮局的
superiority	n. 优越（性），优势
elbow	v. 用肘挤，挤进
paper	v. 贴壁纸
cutter	n. 用于切割的器械
net	v. 用网捕；用网覆盖
head	v. 用头顶（球）；朝...行进
tug	v. 用力拖 n. 猛拉，拖
hook	v. （使）钩住，挂住
formulate	v. 规划；制定；准备
sniff	v. 用鼻子吸，嗅
courageous	adj. 勇敢的，无畏的
emigrate	v. 永久移居国外
perpetual	adj. 永久的；四季开花的
everlasting	adj. 永久的；持久的
eternal	adj. 永久的；不朽的
stiffness	n. 硬度
comply	v. 应允，遵照，照做
bound	adj. 应当的；必定的
salute	v. （向…）行军礼，（向…）致敬
cater	v. 迎合，投合
press	n. 出版社；印刷所；印刷机
printer	n. 印刷工；印花工
harbour	v. 怀着（不好的想法、恐惧或希望）；包含，藏有；窝藏
diet	n. 日常饮食，日常食物
tempt	v. 引诱，诱惑，劝诱
cite	v. 引证；引用；〔法院〕传召，传讯
ignite	v. 引燃，着火
derivation	n. 引出；起源；衍生
banker	n. 银行家
obscure	adj. 无名的；鲜为人知的
inasmuch	adv. 因为，由于
through	prep. 因为，由于
consciousness	n. 意识；知觉
observation	n. 意见，短评，按语
cross	adj. 恼怒的
refrain	v. 抑制，制止，忍住
restrain	v. 制止；抑制
singular	adj. 异常的，奇异的
house	n. 议院，会议厅
obligation	n. 义务，职责，责任
formerly	adv. 以前，从前
veil	v. 以面纱遮掩；遮盖
desert	v. 遗弃；擅离（职守）
forsake	v. 遗弃，抛弃；摒绝，摒弃
transmission	n. 传播，传染
displace	v. 移置；取代；置换
displacement	n. 移置；免职；置换
colonist	n. 移民；殖民地居民
instrumental	adj. 器乐的；有帮助的
wardrobe	n. 衣柜，衣橱，藏衣室
garment	n. 衣服；服装，衣着
Islam	n. 伊斯兰教，回教
evenly	adv. 一致地；平静地
compatible	adj. 兼容的
stitch	n. 一针，缝线 v. 缝
troop	n. 一群，一队，大量
concert	n. 一齐，一致，协作
chop	n. 一块排骨，肉块
baby	n. 一家中年龄最小的人
episode	n. （人生的）一段经历；（小说的）片段，插曲
cluster	n. 串，束，簇；群，组 v. 群聚；聚集
generalization	n. 一般化；概括，综合
burglar	n. 夜盗，窃贼
amateur	adj. 业余的 n. 业余爱好者
metallurgy	n. 冶金学，冶金术
Jesus	n. 耶稣
fort	n. 要塞，堡垒
postulate	v. 假定，假设
prescription	n. 药方，处方；处方药
cradle	n. 摇篮；发源地
waver	v. 犹豫不决；摇摆
wag	v. （狗） 摇摆 （尾巴）；摇晃 （手指）
oxide	n. 氧化物
oxidize	v. 氧化，使生锈
domestic	adj. 家养的
foster	v. 培养；抚育，代养
balcony	n. 阳台；楼厅，楼座
anode	n. 阳极，正极，板极
proverb	n. 谚语，格言，箴言
banquet	n. 宴会，盛会，酒席
scope	n. （学科、活动、书籍等的）范围；（发挥能力的）机会，施展余地；眼界
cloak	v. 掩盖，掩饰；覆盖，笼罩
sharply	adv. 严厉地，苛刻地
prolong	v. 延长，拉长，拖延
retard	v. 阻碍；减缓；放慢
pickle	n. 腌制食品，泡菜
dentist	n. 牙科医生
opium	n. 鸦片；麻醉剂
deposit	n. 押金
squeeze	v. 压榨；榨取
compression	n. 压缩，压紧，浓缩
squash	v. 压碎 n. 果汁饮料
overwhelming	adj. 压倒的，势不可挡的
overwhelm	v. 使（某人）感到不能自持，使不知所措；压倒，击败
velocity	n. 迅速，快速
circulation	n. 血液循环；（资料、货币等）流通
patrol	n. 巡逻，巡查
cruise	v. 巡航，巡航于…
quest	v. 寻找，追求
cigar	n. 雪茄烟，叶卷烟
scholarship	n. 奖学金；学问，学识
radiant	adj. 容光焕发的；灿烂的
gorgeous	adj. 极其漂亮的，极其吸引人的；绚丽的，华丽的
option	n. 选择，取舍
cock	n. 公鸡
melody	n. 旋律，曲调；歌曲
overhang	v. 悬于…之上，悬垂
console	n. 悬臂，肘托；控制台
propaganda	n. 宣传
declaration	n. 宣布，宣言
narration	n. 叙述；故事；叙述法
sequence	n. 序列，顺序
warrant	n. （法院授权警方采取行动的）令状；许可证
requisite	adj. 需要的，必要的 n. 必需品
embroidery	n. 绣花，刺绣；绣制品
nun	n. 修女，尼姑
eloquence	n. 雄辩；口才，修辞
wind	n. 风
directory	n. 姓名地址录
pacific	adj. 性情温和的
survival	n. 幸存；残存；幸存者
flush	n. 脸红；一阵强烈情感；（流露出的）一阵激情
formal	adj. 正规的；庄重的
constituent	adj. 构成的 n. 选民
scarlet	n. 猩红色 adj. 猩红的
religion	n. 宗教
novelty	n. 新颖；新奇的事物
regenerative	adj. 回授的；再生的
bridegroom	n. 新郎
novel	adj. 新的，异常的
zinc	n. 锌 v. 在…上镀锌
appreciation	n. 欣赏；感激
psychology	n. 心理学；心理
crab	n. 蟹；蟹肉 v. 捕蟹
subscript	adj. 写在下方的 n. 下标
sideways	adv. 斜向一边地
jean	n. 斜纹布；牛仔裤
gradient	n. 斜坡
vicious	adj. 邪恶的；恶性的
evil	n. 邪恶，罪恶；祸害
collaborate	v. 协作，合作；协调
team	v. 协作，合作
coefficient	n. 协同因素；系数，率
wedge	n. 楔 v. 楔入；挤入
calibration	n. 校准；标定，刻度
paragraph	n. （文章的）段，段落
cautious	adj. 小心的，谨慎的
caution	n. 小心 v. 告诫，警告
suitcase	n. 手提箱，衣箱
decimal	adj. 小数的，十进制的
footpath	n. 小路，人行道
puppy	n. 小狗；幼小的动物
closet	n. 小房间；壁碗橱
pamphlet	n. 小册子
slack	adj. 萧条的；懈怠的
disappearance	n. 消失，消散；失踪
recreation	n. 消遣，娱乐活动
consumer	n. 消费者，用户
consumption	n. 消费（量）
depression	n. 消沉；不景气萧条期
token	n. 辅币；象征
ivory	n. 象牙（质）；乳白色
forward	adv. 向前；向将来 v. 转递
southwards	adv. 向南方
orientation	n. 定位；方向
defy	v. 向…挑战；蔑视
hail	v. 向…欢呼，招呼
yearn	v. 渴望，向往
spice	n. 香料，调味品
pilgrim	n. 香客，朝圣者
fragrant	adj. 香的，芬芳的
incense	n. 香，熏香；香气
uniformly	adv. 相同地；一贯
resemblance	n. 相似，相似性
analogy	n. 相似，类似；比拟
interact	v. 相互作用
correlation	n. 相互关系
reciprocal	adj. 相互的；互利的
coincide	v. 相巧合；相符合
inversely	adv. 相反地
devotion	n. 献身，热诚，专心
linear	adj. 线的；长度的
qualify	v. 限制，限定，修饰
realistic	adj. 现实的；现实主义的
striking	adj. 显著的，惊人的
microscopic	adj. 显微镜的；微观的，极小的
apparent	adj. 显然的
distinctly	adv. 显然，清楚地
bacon	n. 咸猪肉，熏猪肉
gossip	n. 闲谈；碎嘴子；漫笔
ramble	v. 闲逛，漫步；漫谈，闲聊
precede	v. 先于…，领先
priority	n. 先，前；优先，重点
shower	v. 下阵雨，使湿透
decline	v. 下倾；偏斜；衰退
descent	n. 下降；出身；斜坡
subordinate	adj. 下级的，辅助的
inferior	n. 下级；晚辈；次品
slim	adj. 细长的；微小的
taper	n. 细小的蜡烛；微光
petty	adj. 细小的；器量小的
nice	adj. 细微的，微妙的
filament	n. 细丝；长丝；灯丝
bacterium	n. 细菌
germ	n. 细菌，病原菌；幼芽
systematically	adv. 系统地，有规则地
spectrum	n. 系列，范围；波谱
lace	v. 系带，用带子束紧
tape	v. 系，捆
drama	n. 戏剧性事件；戏剧性
theatre	n. 剧场，戏院
comedy	n. 喜剧；喜剧场面
assault	v. 袭击 n. 攻击
usage	n. 习惯用法
quench	v. 熄灭，扑灭；压制
extinguish	v. 熄灭，扑灭；消灭
absorption	n. 吸收；专注
intake	n. 吸入；输入能量
physically	adv. 身体上；体格上
substantial	adj. 大而坚固的
body	n. 物体
luncheon	n. 午宴，午餐，便宴
ignorance	n. 无知，无学，愚昧
insignificant	adj. 无意义的；低微的
doubtless	adv. 无疑地；很可能
indefinite	adj. 无限期的
infinitely	adv. 无限地，无边地
unlimited	adj. 无限的；不定的
infinite	n. 无限；无穷（大）
fearless	adj. 无畏的，大胆的
innumerable	adj. 无数的，数不清的
inorganic	adj. 无生物的；无机的
ruthless	adj. 无情的，冷酷的
incapable	adj. 无能力的；无资格的
unique	adj. 无可匹敌的；极好的
faultless	adj. 无过失的；无缺点的
foreign	adj. 外国的，国外的
nought	n. 无，零
filth	n. 污秽，污物；淫猥；淫猥
snail	n. 蜗牛；行动缓慢的人
hum	n. 嗡嗡声 v. 哼曲子
compliment	n. 致意，问候 v. 赞美，祝贺
question	v. 问，询问，讯问
literal	adj. 文字（上）的；字面的
illiterate	adj. 文盲的 n. 文盲
stationery	n. 信笺，信纸；文具
plague	n. 瘟疫；鼠疫（尤指腺鼠疫）
softness	n. 温和，柔和；软弱
graze	v. 喂草；放牧（牲畜）
locality	n. 位置，地点，发生地
situated	adj. 位于…的
bachelor	n. 未婚男子；学士
unpaid	adj. 未付的；无偿的
stern	n. 艉，船尾；臀部
commission	n. 委托，委任；委托状
latitude	n. 纬度；黄纬
vitamin	n. 维生素，维他命
Venus	n. 维纳斯；美人
idealism	n. 唯心主义；理想主义
mast	n. 桅杆
enclosure	n. 围场，围栏；围绕
violation	n. 违犯；侵犯，妨碍
violate	v. 违犯，违背；侵犯
towards	prep. 用于，有助于
plead	v. 为…辩护，抗辩
catalogue	v. 为…编目录
microprocessor	n. 微信息处理机
subtle	adj. 微妙的；精巧的
atom	n. 原子
calculus	n. 微积分；结石
gleam	n. 微光 v. 发微光
negligible	adj. 微不足道的
microwave	n. 微波
awful	adj. 威严的；令人崇敬的
majesty	n. 雄伟，威严，庄严；陛下
prestige	n. 威望，威信，声望
endanger	v. 危及，危害
crisis	n. 危机；转折点
peril	n. 危机；危险的事物
dismiss	v. 解雇，开除
fro	adv. 往，去，回，向后
mesh	n. 网眼，筛孔，网络
network	n. 网络；广播网
web	n. 网，网状物
stubborn	adj. 顽固的；顽强的
trifle	v. 玩忽；闲混；嬉耍
completion	n. 完成，结束，完满
crooked	adj. 弯的，歪的；畸形的
hull	n. 外壳，豆荚；薄膜
diplomatic	adj. 外交的；有策略的
alien	adj. 外国的 n. 外国人
strange	adj. 陌生的，不熟悉的
distort	v. 歪曲，曲解；扭曲
twist	v. 歪曲，曲解
tile	n. 瓷砖；贴砖；瓦片
watt	n. 瓦（特）
elliptical	adj. 椭圆的；省略的
haul	v. 拖曳；拖运
hip	n. 臀部，髋
devour	v. 吞食；吞灭，毁灭
retirement	n. 退休，引退；退隐
drawback	n. 妨碍；弊端
inference	n. 推论；推断的结果
rational	adj. 合理的；适度的
propulsion	n. 推进，推进力
propel	v. 推进，推动
recommendation	n. 推荐，介绍；建议
overthrow	v. 推翻 n. 推翻，瓦解
impulse	n. 冲动；推动
presumably	adv. 推测起来，大概
gather	v. 推测，推断
shove	v. 推，（使劲）推
solidarity	n. 团结；休戚相关
regiment	n. 团，军团；一大群
bandit	n. 土匪，盗匪，歹徒
lever	n. 途径，工具，手段
overtake	v. 突然发生；压倒
nose	n. 突出部分（如船头等）
bald	adj. 秃头的；无毛的
projector	n. 投影仪；探照灯
poll	n. 投票 v. 对…进行民意测验（调查）
dizzy	adj. 头晕眼花的，眩晕的
steal	v. 偷偷地做，窃取
misery	n. 痛苦，悲惨，不幸
torment	n. 痛苦 v. 折磨
thrash	v. 痛打，鞭打，打
dominant	adj. 统治的 n. 主因
dominate	v. 统治，支配，控制
statistics	n. 统计，统计数字
even	adj. 平稳的，均匀的
identical	adj. 同一的；恒等的
likeness	n. 同样；类似，相似
simultaneous	adj. 同时的，同时存在的
accessory	n. 同谋，帮凶 adj. 附属的
homogeneous	adj. 同类的
coordinate	adj. 同等的
whilst	conj. 同时；然而
notify	v. 通知，告知；报告
advertise	v. 登广告
correspondence	n. 通信；相关；相似
popularity	n. 通俗性；普及，流行
inflation	n. 通货膨胀，物价飞涨
currency	n. 通货；货币
entry	n. 入口，通道；条目
customary	adj. 通常的；照惯例的
ordinarily	adv. 通常，大概
hydrocarbon	n. 烃，碳氢化合物
resignation	n. 听从，屈从，顺从
blacksmith	n. 铁匠，锻工
ferrous	adj. 铁的；亚铁的
adjoin	v. 贴近，毗连；靠近
hop	v. （人）单足跳
skip	v. 蹦跳着走；跳绳；略过
overlook	v. 眺望；看漏；宽容
regulate	v. 调整，调节，校准
modulate	v. 调整，调节（声音）
settlement	n. 调停；（尤指拓荒者居住的）定居点，村落
mischief	n. 调皮，捣蛋，胡闹
accord	n. 符合；协议
questionnaire	n. 调查表，征求意见表
sweetness	n. 甜蜜，芬芳；愉悦，美好
dessert	n. 甜点心
Catholic	adj. 天主教的 n. 天主教徒
astronomy	n. 天文学
embody	v. 体现；包含，收录
theme	n. 题目；主题；主旋律；（句子的）主位；词干
nominate	v. 提名，推荐；任命
finance	v. 提供资金
nourish	v. 提供养分，养育
enhance	v. 提高，增加；改进
elevate	v. 提拔；抬高
purify	v. 提纯，精炼（金属）
raise	v. 提出，发起，发出
introduce	v. 提出（议案等）
peculiarity	n. 特性，独特性；怪癖
individual	adj. 特殊的
essential	adj. 极其重要的；必不可少的
bore	n. 讨厌的人；麻烦事
earthenware	n. 陶器
flee	v. 逃走，逃避
outlaw	n. 逃犯，歹徒
wade	v. 趟（河），跋涉
probe	n. 探针 v. 用探针探查
expedition	n. 探险；探险队
charcoal	n. 炭，木炭；生物炭
plain	adj. 坦白的；普通的
negotiate	v. 谈判，交涉，议定
greed	n. 贪心，贪婪
moss	n. 苔藓，地衣
pedal	n. （自行车的）踏脚，踏板，脚蹬；（汽车或机器的）踏板
thereof	adv. 它的，其；由此
trivial	adj. 琐碎的；平常的
detail	n. 琐碎，小事
concern	n. 所关切的事；商行
what	adj. 所…的
miniature	n. 缩影 adj. 缩小的
hurt	n. （对感情造成的）伤害，创伤
deform	v. 损坏…的形状
deformation	n. 损坏；变形；畸形
fringe	n. 穗，毛边；边缘
scrap	n. 碎片；废料 v. 废弃
random	n. 随机 adj. 随机的
garlic	n. 蒜，大蒜
plastic	adj. 塑料的；塑性的
shorthand	n. 速记，速记法
scout	v. 搜索，侦察
laundry	n. 送洗衣店去洗的东西
replace	v. 把...放回原处
loosely	adv. 松松地，松散地
rear	v. 饲养，培植；抚养
perish	v. 死亡，夭折；枯萎
hiss	n. 嘶嘶声 v. 嘶嘶作声
rip	v. 撕，扯破，划破
speculate	v. 猜测，推测；投机
smuggle	v. 私运，走私
confidence	n. 私房话，秘密，机密
velvet	adj. 丝绒制的；柔软光滑的
treasurer	n. 司库，财务主管
exposition	n. 说明，解释；展览会，博览会
preach	v. 说教，布道；鼓吹
observe	v. 说，评述，评论
momentary	adj. 瞬息间的，片刻的
instantaneous	adj. 瞬间的，即刻的
couch	n. 睡椅，长沙发椅
slumber	n. 睡眠；沉睡状态
buffalo	n. 水牛；水陆坦克
hydraulic	adj. 水力的；水力学的
watery	adj. 充满水的；与水有关的；湿的；（食物、饮料等）味淡的
rinse	v. 冲洗；嗽（口）
wrestle	n. 摔交；斗争，搏斗
numerical	adj. 数字的，数值的
reckon	v. 计算；认为
harp	n. 竖琴；天琴座
erect	adj. 直立的
terminology	n. 术语学，术语
proficient	adj. 熟练的，精通的
proficiency	n. 熟练，精通
input	v. 输入 n. 输入
grant	n. 拨款
dependant	n. 受赡养者
miser	n. 守财奴，吝啬鬼
trolley	n. 手推车；有轨电车
manuscript	n. 手稿，底稿，原稿
handbook	n. 手册，便览，指南
adoption	n. 收养；采纳，采取
revenue	n. 收入；收入数目
oath	n. 誓言，誓约，宣誓
vow	n. 誓言，誓约，许愿
pledge	n. 誓言 v. 使发誓
indoor	adj. 室内的；室内进行的
wholesome	adj. 对健康有益的
moderately	adv. 适度地，适中
fitting	adj. 适当的 n. 配件
fitness	n. 适当，恰当；健康
vision	n. 视力；眼力，想象力
attendant	n. 侍者；（要人的）侍从；（病人的）护理人员
occurrence	n. 发生的事
snob	n. 势利小人
snobbish	adj. 势利的，谄上欺下的
influence	n. 势力，权势
municipal	adj. 市的，市立的
conform	v. 使遵守；一致
automate	v. 使自动化
divert	v. 使转向；转移
specialize	v. 使专门化，专业化
hazard	v. 使遭危险 n. 危险
standardize	v. 使与标准比较
lengthen	v. 使延长，变长
shame	v. 使羞愧；玷辱
freshen	v. 使显得新鲜
distinguish	v. 使显出特色，使杰出
evaporate	v. 使脱水，发散蒸气
ventilate	v. 使通风，使换气
moor	v. 使停泊；使固定
resign	v. 使顺从，使听任于
perfect	v. 使熟练，使改善
infect	v. 使受影响
lubricate	v. 使润滑，加润滑油
soften	v. 使软化，变温和
facilitate	v. 使容易；助长
acquaint	v. 使认识，使了解
tiresome	adj. 使人厌倦的，讨厌的
sorrowful	adj. 使人伤心的；悲伤的
blaze	v. 使燃烧，燃烧
subdue	v. 使屈服，征服
bend	v. 使屈从，屈从
suit	v. 使配合，彼此协调
confront	v. 使面对；使对证
paralyse	v. 使麻痹，使瘫痪
deafen	v. 使聋
subject	v. 使隶属
terrify	v. 使恐怖，使惊吓
insulate	v. 使绝缘，使绝热
integrate	v. 使结合，使并入
alternate	v. 使交替 adj. 交替的
degrade	v. 使降低；使堕落
minimize	v. 使减到最小
mingle	vt. 使混合，混合起来
interconnect	v. 使互相联系
reconcile	v. 使和好；调停
oblige	v. 使感激；施恩惠于
enrich	v. 使富裕；使丰富
embarrass	v. 使…陷入困境
decay	v. 使腐朽，使腐烂
contrast	v. 使对比；形成对比
baffle	v. 使挫折 n. 迷惑
mature	v. 使成熟，成熟
ice	v. 使成冰，结冰
overload	v. 使超载
tangle	v. 使缠结，使纠缠
sweeten	v. 使变甜，变甜
thicken	v. 使变厚（或粗、密）
establish	v. 使…被接受
develop	v. 使（底片）显影
jog	v. 慢跑（尤作为锻炼）
engage	v. 使（齿轮等）啮合
vector	n. 矢量；飞机航线
nourishment	n. 食物；营养（情况）
pantry	n. 食品柜，餐具室
experimentally	adv. 实验上，实验性地
experimentation	n. 实验；试验
virtual	adj. 实际上的，实质上的
execution	n. 实行，执行；处死刑
quartz	n. 石英
graphite	n. 石墨，石墨电极
whitewash	n. 石灰水 v. 粉饰
limestone	n. 石灰石
humidity	n. 湿气；湿度
handout	n. 施舍物，救济品
verse	n. 诗，韵文；诗节
unemployment	n. 失业；失业人数
disgrace	n. 失宠，耻辱，丢脸
residual	adj. 剩余的；残余的
remainder	n. 剩余（物）；余数
excel	v. 胜过，杰出
stiff	adj. 生硬的
ecology	n. 生态学；个体生态学
hide	n. 生皮，兽皮，皮革
vital	adj. 生命的，生机的
producer	n. 生产者；舞台监督
productivity	n. 生产率；多产
productive	adj. 生产的；出产…的
hoist	v. 升起，扯起来
kidney	n. 肾，腰子
deliberately	adv. 故意地；审慎地
censor	v. 审查，检查
mystery	n. 神秘小说，侦探小说
shrine	n. 神殿，神龛，圣祠
divine	adj. 神的；敬神的
deliberate	adj. 深思熟虑的；审慎的
profound	adj. 见解深刻的；渊博的
trench	n. 深沟；壕沟，战壕
photography	n. 摄影术
editorial	n. 社论，期刊的社论
sociology	n. 社会学
conceive	v. 设想，以为；怀孕
reject	v. 舍弃，抛弃；排斥
serpent	n. 蛇（尤指大蛇或毒蛇）
extravagant	adj. 奢侈的；过度的
maid	n. 少女；处女
maiden	n. 少女，未婚女子
scorch	v. 烧焦；枯萎
context	n. 上下文；来龙去脉
Heaven	n. 上帝，神
counsel	n. 商议；忠告；律师
tradesman	n. 商人，店主；手艺人
trader	n. 商人
dealer	n. 商人；毒品贩；发牌者
ware	n. 物品；商品，货物
merchandise	n. 商品，货物
blue	adj. 伤心的；下流的
goodness	n. 善良，善行，美德
underwear	n. 衫衣，内衣，贴身衣
cancel	v. 取消
gap	n. 差距；山口，山峡
sift	v. 筛，过滤
shark	n. 鲨鱼；诈骗钱财者
gravel	n. 砂跞；砂砾层；结石
sardine	n. 沙丁鱼
tone	n. 色调，光度
scan	n. 扫描
uproar	n. 骚动，扰乱；喧嚣
prose	n. 散文
emission	n. 散发；传播；发出物
stroll	n. 散步，溜达，闲逛
triangular	adj. 三角的；三者间的
mute	n. 弱音器
choice	n. 入选者 adj. 优等的
tolerant	adj. 容忍的；有耐力的
commodity	n. 日用品，商品，物品
routine	adj. 日常的 n. 常规
undertaking	n. 任务，事业；承诺
deem	v. 认为，相信，想
awake	v. 认识到
recognition	n. 认出，识别
identification	n. 身份证；认出，鉴定
merciful	adj. 仁慈的，宽大的
hostage	n. 人质
pitch	n. 沥青
personnel	n. 人事部门
humanity	n. 人类；人性，人情
personality	n. 人格，个性；名人
thermal	adj. 热的；温热的
tropic	n. 回归线；热带地区
tropical	adj. 热带的；（天气）湿热的
concession	n. 让步，迁就
combustion	n. 燃烧
whisker	n. 髯，连鬓胡子
flock	v. 群集，聚集
conviction	n. 确信，信服，深信
certainty	n. 确实性，确信，确实
positively	adv. 确定的，断然
quantify	v. 确定…的数量
deficient	adj. 缺乏的；欠缺的
deficiency	n. 缺乏；不足
scarcity	n. 缺乏，不足
flaw	n. 缺点，瑕疵
induce	v. 劝诱；引起
persuasion	n. 劝说，说服
claim	n. 权利，所有权
late	adj. 去世不久的
extract	v. 取出；提取 n. 摘录
crank	n. 曲柄 v. 用曲柄转动
expel	v. 开除；驱逐；排出
dissipate	v. 驱散；消散；浪费
spherical	adj. 球形的，球面的
global	adj. 全球的
Jupiter	n. 木星；丘庇特
plea	n. 请愿，请求，恳求
petition	n. 请愿 v. 向…请愿
sight	n. 景象；名胜，风景
mistress	n. 情妇，情人
mosque	n. 清真寺
cleanliness	n. 清洁
inclination	n. 倾斜，点头；斜坡
rap	n. 轻敲击声 v. 敲击
rash	adj. 轻率的；鲁莽的
bronze	n. 青铜色
industrious	adj. 勤劳的，勤奋的
admiration	n. 钦佩；赞美，羡慕
agreeable	adj. 惬意的；同意的
section	n. 部分
segment	n. 切片，部分；段，节
slit	v. 切开 n. 狭长的切口
hardy	adj. 强壮的，耐劳的
compulsory	adj. 强迫的，义务的
constraint	n. 限制，束缚，约束
mighty	adj. 强大的；巨大的
thoughtless	adj. 欠考虑的；自私的
denounce	v. 谴责，声讨；告发
pious	adj. 虔诚的；虔奉宗教的
lobby	n. 前厅，（剧院的）门廊
consistent	adj. 前后一致的，连贯的
predecessor	n. 前辈，前任者
visa	n. 签证
modesty	n. 谦逊；端庄
gracious	adj. 谦和的
migrate	v. 迁移，移居
kilowatt	n. 千瓦（特）
pertinent	adj. 恰当的；有关的
apt	adj. 恰当的；聪明的
utensil	n. 器皿，用具
maple	n. 槭树，枫树
follower	n. 信徒，追随者
siren	n. 汽笛，警报器
motel	n. 汽车游客旅馆
garage	n. 汽车修理站
motorway	n. 汽车道，快车路
hitherto	adv. 迄今，到目前为止
barometer	n. 气压计，睛雨表
pant	v. 气喘
jack	n. 起重器；传动装置
scratch	n. （某人皮肤上的）划痕，划伤
count	n. 起拆理由，罪状
message	n. 启示，要旨，教训
enlighten	v. 启发，开导；启蒙
implore	v. 乞求，恳求，哀求
knight	n. 骑士，武士；爵士
marvel	n. 奇迹；惊奇 v. 惊奇
subsequently	adv. 其后，其次，接着
cheat	n. 欺诈；骗取
periodical	n. 期刊，杂志
currently	adv. 当前
universally	adv. 普遍地，一般地
bushel	n. 蒲式耳（容量单位）
raisin	n. 葡萄干
fracture	n. 破裂；裂痕 v. 破裂
destructive	adj. 破坏（性）的，危害的
bankrupt	adj. 破产的 v. 使破产
persecute	v. 迫害，残害
incline	n. 坡度
flask	n. 瓶
tack	n. 平头钉 v. 钉住
terrace	n. 平台，阳台，露台
civilian	n. 平民 adj. 平民的
tranquil	adj. 平静的；稳定的
equation	n. 平衡；反应式
equilibrium	n. 平衡，均衡；均衡论
commonplace	adj. 平凡的 n. 平常话
frequency	n. 频繁，屡次；频率
barren	adj. 贫瘠的；不孕的
float	n. 漂浮物；浮标，木筏
bleach	v. 漂白，变白
flake	n. 片，薄片
deflection	n. 偏斜，歪斜；偏差
prejudice	n. 偏见，成见；损害
adjacent	adj. 毗连的；紧接着的
cape	n. 披肩，斗篷；海角
clash	n. 冲突，抵触；碰撞声
collide	v. 碰撞；冲突，抵触
ingredient	n. 配料，成分
shell	n. 炮弹，猎枪子弹
battery	n. 炮组，排炮
foam	n. 泡沫塑料；泡沫
bypass	n. 旁通管 v. 绕过
limp	v. 蹒跚，跛行 n. 跛行
stagger	v. 蹒跚，使摇晃
ascend	v. 攀登，登高
dispatch	v. 派遣；调度 n. 急件
faction	n. 派别，宗派，小集团
hover	v. 徘徊；傍徨；翱翔；盘旋
drainage	n. 排水；下水道
range	v. 排列
clap	n. 拍手喝采声；霹雳声
reptile	n. 爬行动物
overhear	v. 偶然听到；偷听
ohm	n. 欧姆
hostess	n. 女主人；旅馆女老板
feminine	adj. 女性的；女子气的
waitress	n. 女侍者，女服务员
goddess	n. 女神
blouse	n. 女衬衫；罩衫
coward	adj. 懦怯的，胆小的
radiator	n. 暖气片；散热器
strive	v. 努力，奋斗，力求
mess	v. 弄脏，弄乱，搞糟
distortion	n. 歪曲；畸变
shorten	v. 弄短，缩小，减少
Saturn	n. 土星
milky	adj. 牛奶的；乳白色的
wrench	v. 拧，扭伤 n. 拧
wring	v. 拧，挤，扭，榨
peer	v. 凝视
nickel	n. 镍；镍币
junior	n. 年少者；晚辈
annually	adv. 年年，每年
practicable	adj. 能实行的；适用的
capability	n. 能力，才能
basin	n. 内海；盆地；流域
interior	n. 内部 adj. 内部的
tickle	v. 挠，胳肢；逗乐
incredible	adj. 难以置信的，惊人的
difficult	adj. 难以满足的
refugee	n. 难民，流亡者
pumpkin	n. 南瓜
polar	adj. 南（北）极的；极性的
masculine	adj. 男性的
baron	n. 男爵；贵族；巨商
endurance	n. 耐久力，持久力
sodium	n. 钠
pasture	n. 牧场
intent	adj. 目不转睛的，热切的
end	n. 目标，目的
oyster	n. 牡蛎
magician	n. 魔法师；变戏法的人
skyscraper	n. 摩天楼
module	n. 模块；组件
ambiguous	adj. 模棱两可的；分歧的
feel	v. 摸起来
destiny	n. 命运，天数
doom	n. 厄运，毁灭 v. 注定
proposition	n. 命题，主题；提议
bid	v. 报价；命令
destine	v. 命定，注定；预定
sensible	adj. 明显的，感觉得到的
explicit	adj. 明晰的；直率的
decidedly	adv. 明确地，坚决地
formulation	n. 表述方式
brightness	n. 明亮，辉煌，聪明
classic	n. 名著 adj. 不朽的
promptly	adv. 敏捷地，迅速地
sensitivity	n. 敏感（性）；灵敏性
representation	n. 描写；陈述；代表
nursery	n. 苗圃
deposition	n. 免职，罢免
confidential	adj. 秘密的；亲信的
enchant	v. 迷住；用魔法迷惑
fascinate	v. 迷住，迷人
superstition	n. 迷信，迷信行为
stray	v. 迷路 adj. 迷路的
perplex	v. 迷惑，困惑，难住
bewilder	v. 迷惑，把…弄糊涂
snap	v. 猛咬；突然折断
hurl	v. 猛投；猛冲
jerk	v. 猛地一拉，急拉
ally	n. 盟国；同盟者，伙伴
threshold	n. 门槛；入门，开端
charm	n. 魅力；妩媚 v. 迷人
fair	adj. 美丽的
offensive	adj. 冒犯的；进攻的
pore	n. 毛孔，气孔，细孔
fuss	n. 大惊小怪 v. 忙乱
cartoon	n. 动画片；漫画
vine	n. 蔓，藤，藤本植物
expire	v. 满期，到期；断气
bull	n. 买空的证券投机商
wharf	n. 码头，停泊所
circus	n. 马戏；马戏团
filter	v. 滤过
ass	n. 傻瓜，蠢笨的人；驴
propeller	n. 螺旋桨，推进器
spiral	adj. 螺旋（形）的，盘旋的
nut	n. 螺帽，螺母
Roman	n. 古罗马人；罗马人
thesis	n. 论文；论题，论点
forum	n. 论坛，讨论会
oval	adj. 卵形的 n. 卵形
video	adj. 录像的
reed	n. 芦笛，牧笛
leakage	n. 漏，泄漏；漏出物
hug	v. 搂 n. 紧紧拥抱
stairway	n. 楼梯
monopoly	n. 垄断；独占，专利
bridle	n. 马笼头；马勒 v. 束缚；抑制
willow	n. 柳树，柳木
streamline	n. 流线；流线型
rascal	n. 流氓，恶棍，无赖
prevalent	adj. 流行的；盛行的
exile	v. 流放 n. 被流放者
flux	n. 流；涨潮；流量
track	v. 留下足迹
gramophone	n. 留声机
otherwise	adv. 另外；在其他方面
province	n. 领域，范围，职权
consul	n. 领事
retail	n. 零售
flexible	adj. 灵活的，可变通的
inspiration	n. 灵感；妙想；鼓舞
grove	n. 林子，小树林，园林
neighbouring	adj. 邻近的，接壤的
vicinity	n. 邻近；附近地区
fission	n. 裂开；分裂生殖
prey	n. 猎物 v. 捕获
martyr	n. 烈士，殉难者
grin	v. 咧着嘴笑
expect	v. 料想，认为
quantitative	adj. 量的；定量的
blush	v. 脸红，害臊 n. 脸红
allied	adj. 联合的；联姻的
ripple	n. 涟漪，细浪，波纹
mitten	n. 连指手套
attachment	n. 爱慕；附件；连接物
junction	n. 连接点，汇合处
chestnut	n. 栗子；栗树；栗色
exceptional	adj. 优越的；例外的
solar	adj. 利用太阳光的
impose	v. 将（想法、信仰等）强加于（某人）
utilization	n. 利用，效用
stereo	n. 立体声 adj. 立体声的
cubic	adj. 立方体的；立方的
legislation	n. 立法；法规
historian	n. 历史学家；编史家
historic	adj. 历史的；历史性的
mechanics	n. 力学，机械学
intellect	n. 理智，智力，才智
ideally	adv. 理想地；理论上
abstract	adj. 理论上的 n. 抽象派作品
slang	n. 俚语；行话，黑话
courtesy	n. 礼貌，谦恭
twilight	n. 黄昏
ion	n. 离子
excursion	n. （尤指集体）远足，短途旅行
grim	adj. 严厉的
prism	n. 棱镜；棱柱（体）
troublesome	adj. 困难的
analogue	n. 类似物
similarity	n. 类似，相似；类似点
flank	n. 肋，肋腹；侧面
comprehend	v. 了解，理解，领会
optimism	n. 乐观，乐观主义
sophisticated	adj. 老于世故的；高级的
straightforward	adj. 老实的，坦率的
wasteful	adj. 浪费的
idleness	n. 懒惰；赋闲无事
shabby	adj. 破旧的；褴褛的
dust	n. 灰尘
flight	n. 溃退，逃跑
rapture	n. 狂喜，欢天喜地
fury	n. 狂怒，暴怒；猛烈
violent	adj. 狂暴的
furious	adj. 狂暴的；强烈的
satisfaction	n. 满足，愉快
snack	n. 快餐，小吃
rapidity	n. 快，迅速；陡，险峻
parade	v. 夸耀（才能等）
pants	n. 裤子；男用短衬裤
bitterness	n. 苦味，辛酸，苦难
wither	v. 枯萎；使衰弱
clasp	v. 扣住，扣紧，钩住
fastener	n. 扣件，钮扣，揿钮
stammer	v. 口吃地说 n. 口吃
panic	n. 恐慌，惊慌
terrorist	n. 恐怖分子
peacock	n. 孔雀
fantastic	adj. 空想的；奇异的
pneumatic	adj. 空气的；气动的
aerial	adj. 空气的；航空的
spatial	adj. 空间的，占据空间的
void	adj. 无效的；空的
gnaw	v. 啃，咬断，啮
longing	n. 渴望 adj. 显示渴望的
suspicious	adj. 可疑的；猜疑的
shady	adj. 可疑的，靠不住的
questionable	adj. 可疑的，不可靠的
portable	adj. 可移动的
grateful	adj. 感谢的，感激的
adjustable	adj. 可调整的，可校准的
frightful	adj. 可怕的；讨厌的
formidable	adj. 可怕的；难对付的
dreadful	adj. 可怕的；令人畏惧的
monstrous	adj. 极大的；可怕的
possibility	n. 可能的事
likelihood	n. 可能（性）
respectable	adj. 可敬的；人格高尚的
appreciable	adj. 可察觉的
shameful	adj. 可耻的；不道德的
comparable	adj. 可比较的；类似的
particular	adj. 特称的；苛求的
whereby	adv. 靠什么；靠那个
ponder	v. 考虑，沉思
exploration	n. 考察；勘探；探查
generosity	n. 慷慨，宽宏大量
discern	v. 弄清楚，辨别；看出，辨出
fell	v. 砍倒（树等）；砍伐
carry	v. 刊登
inaugurate	v. 使就职；开始
initiate	v. 开始，创始；启蒙
commence	v. 开始；获得学位
reclaim	v. 开垦，开拓；回收
evolution	n. 进化
start	v. 开动，着手；开设
unlock	v. 开…的锁；开启
sheriff	n. 郡长
monarch	n. 君主，最高统治者
sovereign	n. 君主 adj. 统治的
bugle	n. 军号，喇叭
extinct	adj. 绝种的
decisive	adj. 决定性的；果断的
govern	v. 决定，支配；控制
winding	n. 蜿蜒曲折的路径 adj. 蜿蜒曲折的
curly	adj. 卷曲的；有卷毛的
reel	v. 卷，绕
mob	v. 团团围住（名人等）
polymer	n. 聚合物，多聚物
hurricane	n. 飓风，十二级风
sting	n. 剧痛；刺痛 v. 刺
repel	v. 使厌恶；拒绝
gigantic	adj. 巨大的；巨人似的
uphold	v. 维护
exemplify	v. 举例证明（解释）
rectangle	n. 矩形，长方形
administration	n. 局（或署、处等）
reside	v. 居住，驻扎；属于
dwell	v. 居住；凝思，细想
induction	n. 就职；归纳推理
Christ	n. 救世主（耶稣基督）
symposium	n. 座谈会
whoever	pron. 究竟是谁
rectify	v. 纠正；调整
vein	n. 静脉，血管；矿脉
competitor	n. 竞争者，敌手
competitive	adj. 竞争的，比赛的
contend	v. 竞争；坚决主张
alert	adj. 警惕的
warning	n. 警告，告诫，鉴诫
whale	n. 鲸
selection	n. 选择；精选的东西
thorough	adj. 精心的；详尽的
finely	adv. 精细地；美好地
literary	adj. 文学的
refinery	n. 精炼厂，提炼厂
vigorous	adj. 精力旺盛的，茁壮的
fright	n. 惊吓，恐怖
astonishment	n. 惊奇，惊讶
dismay	n. 惊慌，沮丧，灰心
empirical	adj. 经验主义的
longitude	n. 经线，经度
support	v. 经受，承受
economics	n. 经济学；经济
prohibition	n. 禁止；禁令，禁律
shortcut	n. 近路；捷径
inlet	n. 水湾；进口
perfection	n. 尽善尽美；无比精确
notwithstanding	prep. 尽管，虽然
prudent	adj. 谨慎的；精明的
compact	adj. 紧密的 v. 使紧凑
tightly	adv. 紧地，牢固地
barely	adv. 勉强；仅仅
metallic	adj. 金属的
tuna	n. 金枪鱼
henceforth	adv. 今后，从今以后
mustard	n. 芥子，芥末
presentation	n. 介绍；呈现
interpret	v. 口译；解释
version	n. 解释
untie	v. 解开，松开；解放
tackle	v. 解决，对付 n. 用具
dissolve	v. 解除（婚约等）
tuberculosis	n. 结核病，肺结核
incorporate	v. 结合，合并，收编
construction	n. 建筑结构
economically	adv. 在经济上；节约地
abbreviation	n. 节略，缩写，缩短
thrifty	adj. 节俭的
interview	v. 接见，会见，会谈
receiver	n. 接待者；收受者
yeast	n. 酵母
doctrine	n. 教义，主义；学说
tutor	v. 教，指导
disillusion	v. 觉醒，使觉醒
horn	n. 角状物；喇叭形物
reef	n. 礁，礁石，暗礁
coke	n. 焦炭
symphony	n. 交响乐；交响乐团
intercourse	n. 交际，往来，交流
soy	n. 大豆，黄豆；酱油
parachute	n. 降落伞
degradation	n. 降级；退化；衰变
oar	n. 桨
discourse	n. 讲话，演说，讲道
ginger	n. 姜，生姜
splash	v. 溅泼；泼水 n. 溅泼声
architect	n. 建筑师；创造者
theory	n. （未证明的）见解，看法，推测
clip	v. 剪；剪辑报刊
diminish	v. 减少，减小
lessen	v. 减少，变少
inspector	n. 检查员；巡官
reserve	n. 缄默，自我克制
challenge	n. 艰巨任务
enterprise	n. 艰巨的事业；事业心
resolute	adj. 坚决的，果敢的
firmness	n. 坚固，坚定，稳固
sturdy	adj. 牢固的；坚定的
steady	adj. 稳定的，扎实的
stability	n. 稳定
insistent	adj. 坚持的
persistence	n. 坚持；持续，存留
persevere	v. 坚持，不屈不挠
shrill	adj. 尖声的 v. 尖声地叫
bridge	v. 架桥于，用桥连接
rate	n. 价格 v. 对…评定
hypothesis	n. 假设；前提
sham	n. 假冒；膺品 v. 假装
fake	n. 假货，膺品 adj. 假的
presume	v. 假定，假设，揣测
beetle	n. 甲虫
clamp	v. 夹住，夹紧 n. 夹子
sandwich	v. 夹入，挤进
homely	adj. 家常的
fowl	n. 家禽；禽肉
poultry	n. 家禽
heater	n. 加热器
deepen	vt. （使色泽等）加浓
heighten	v. 加高，提高；增加
line	v. 加衬里于
stillness	n. 寂静，无声
lodging	n. 寄宿，住宿；住所
successor	n. 继承人，继任者
succession	n. 继承（权）
quarterly	adj&adv. 季度的（地）
craft	n. 技巧
souvenir	n. 纪念品
documentary	adj. 纪录的；文献的
marginal	adj. 边缘的；记在页边的
terminal	n. 计算机终端；线接头
scheme	v. 计划，搞阴谋
geometrical	adj. 几何学的
bazaar	n. 集市，廉价商店
gathering	n. 集会，聚会，聚集
set	n. 集（合）
disorder	n. 疾病，小病
complaint	n. 疾病，病痛
forthcoming	adj. 即将到来的；现成的
polarity	n. （人、意见或观念的）截然相反，截然对立；极性
extreme	n. 极端不同的性质
guitar	n. 吉他，六弦琴
timely	adj. 及时的；适时的
irritate	v. 激怒；引起不愉快
drastic	adj. 激烈的；严厉的
severe	adj. 艰难的；简朴的
Christian	adj. 基督教的
elemental	adj. 基本的；自然力的
radical	adj. 基本的；激进的
ultimate	adj. 首要的；基本的
energetic	adj. 积极的；精力旺盛的
muscular	adj. 肌肉发达的，强健的
witty	adj. 机智的；风趣的
mechanism	n. 机械装置；机制
tact	n. 机敏，圆滑，得体
ingenious	adj. 精巧制成的；机灵的
ingenuity	n. 机灵；设计新颖
framework	n. 体制
fence	n. 击剑（术），击剑
stall	n. 货摊，书摊；马厩
fellowship	n. 伙伴关系；联谊会
Mars	n. 火星
ham	n. 火腿
piston	n. 活塞
vigour	n. 活力，精力；元气
cloudy	adj. 混浊的；模糊不清的
mixer	n. 搅拌器
engagement	n. 婚约；约会
bribe	n. 贿赂 v. 向…行贿
corrupt	v. 使腐化 adj. 腐败的
response	n. 回应
badge	n. 徽章，像章；标志
wield	v. 挥（剑）；行使
locust	n. 蝗虫
wasp	n. 黄蜂
royalty	n. 皇家，王族，皇族
desolate	adj. 荒芜的；孤独的
illusion	n. 幻想；错觉；假象
modification	n. 修改
environmental	adj. 环境的，环境产生的
pregnant	adj. 怀孕的；意义深长的；意义深长的
fossil	n. 化石
glider	n. 滑翔机；滑翔导弹
pulley	n. 滑轮，滑车，皮带轮
slide	n. 滑动，滑行
granite	adj. 花岗岩，花岗石
correlate	n. 互相关联的事物
walnut	n. 核桃；胡桃树
arc	n. 弧，弓形物；弧光
exclamation	n. 呼喊，惊叫；感叹
outcome	n. 后果，成果
ruby	n. 红宝石
hit	n. 轰动一时的人（或事）
traverse	v. 横越
transverse	adj. 横的
bed	n. 河床，（湖）底
harmonious	adj. 和谐的，协调的
monk	n. 和尚，僧侣，修道士
cooperative	adj. 合作的 n. 合作社
hinge	n. 合页，折叶，铰链
proper	adj. 合乎体统的，正派的
composite	adj. 合成的 n. 合成物
synthesis	n. 综合，综合物；（化学或生物学物质的）合成；（用电子方式对声音、语音或音乐的）合成
applause	n. 喝彩；夸奖，称赞
applaud	v. 鼓掌；喝彩
hurrah	int. 好哇，万岁，乌拉
pal	n. 好朋友；同谋
hospitality	n. 好客，殷勤
romantic	adj. 好幻想的
howl	n. 嚎叫；哀号；吠
aerospace	n. 航空航天工业
log	n. 航海日志；飞行日志
pedestrian	n. 行人，步行者
move	n. 行动，步骤
hesitate	v. 犹豫；迟疑不决
pest	n. 害虫
strait	n. 海峡
turtle	n. 海龟，玳瑁
custom	n. 海关
seaport	n. 海港，港口，港市
cable	n. 电缆
pirate	n. 海盗
seaside	n. 海滨（胜地）；海边
surplus	n. 过剩，剩余（物资）
overestimate	v. 过高估计
excessively	adv. 过分，极端地
excess	n. 过度行为，暴行
orchard	n. 果园
peel	n. 果皮，蔬菜皮
stone	n. 果核，（水果的）硬核
slap	v. 掴 n. 巴掌
inland	adj. 国内的；内地的
boiler	n. 锅炉
roller	n. 滚筒；滚柱
valuable	n. 贵重物品，财宝
salmon	n. 鲑，大马哈鱼
silicon	n. 硅（旧名矽）
regulation	n. 规章，规则
regularity	n. 规则性；整齐，端正
define	v. 规定；立（界限）
provision	n. 规定，条款，条项
replacement	n. 取代；置换
spacious	adj. 广阔的，广大的
amplitude	n. 振幅；广大；充足
radial	adj. 放射状的
photoelectric	adj. 光电的
optical	adj. 光的；光学的
shrub	n. 灌木，灌木丛
irrigation	n. 灌溉；（医）冲洗法
inertia	n. 惯性；无力
orchestra	n. 管弦乐队
blast	n. 管乐器的声音
pipe	n. 管乐器
coffin	n. 棺材，灵柩
bureaucracy	n. 官僚主义；官僚机构
monster	n. 怪物；畸形的动植物
client	n. 顾客；诉讼委托人
obstinate	adj. 固执的；顽强的
inherent	adj. 固有的，生来的
fixture	n. 固定设备
pluck	v. 鼓起（勇气），振作
agitation	n. 鼓动，煸动；搅动
skeleton	n. 骨骼，骷髅；骨架
thigh	n. 股，大腿
cereal	n. 谷类，五谷，禾谷
antique	adj. 古代的 n. 古物
assessment	n. 估定；查定
constitute	v. 构成，组成
hound	n. 猎犬
gutter	n. 沟，边沟；檐槽
tribute	n. 献礼；贡物
number	v. 共计，达…之数
commonwealth	n. 联邦
arch	n. 拱门 v. （使）拱起
vault	n. 拱顶；（教堂的）地下墓室
mercury	n. 汞，水银
consolidate	v. 巩固；合并
impartial	adj. 公正的，无偏见的
convention	n. 公约，（换俘等）协定
duke	n. 公爵；君主
rooster	n. 公鸡
studio	n. 播音室；工作室
earnings	n. 工资，收入；收益
implement	n. 工具 v. 贯彻
workpiece	n. 工（作）件
combat	v. 跟…战斗，格斗
impart	v. 给予；传递；告诉
energize	v. 供给…能量
vaccinate	v. 给…接种疫苗
flavour	v. 给…调味
insulator	n. 隔离者；绝缘体
lattice	n. 格子结构
dove	n. 鸽子，斑鸠
reveal	v. 告诉，揭示，泄露
plateau	n. 高原；平稳时期
lofty	adj. 高耸的；高尚的
tower	v. 高耸，屹立；翱翔
elevation	n. 高度，海拔
intervene	v. 干涉，干预
dry	adj. 干巴巴的，枯燥的
olive	n. 橄榄；橄榄树
sentiment	n. 感情；情绪
perception	n. 感知；理解力
sensation	n. 感觉，知觉；轰动
Thanksgiving	n. 感恩节
chill	v. 感到寒冷；冷藏
outline	v. 概述，概括
notion	n. 概念；看法
conception	n. 概念，观念，想法
summary	adj. 概括的；速决的
generalize	v. 概括出
impress	v. 盖印，在…打记号
mend	v. 修理；改正
duplicate	n. 复制品 v. 复制
complication	n. 复杂，混乱；并发症
complexity	n. 复杂（性）
satellite	n. 附属国
appendix	n. 附录；阑尾
extra	n. 附加物；额外的东西
incidentally	adv. 附带地；顺便提及
charge	n. 负荷；充电 v. 装满
negative	adj. 负的；（结果）阴性的
corrosion	n. 腐蚀，侵蚀；锈
erosion	n. 腐蚀，侵蚀；糜烂
subsidiary	adj. 辅助的，补充的
coach	v. 指导，训练；辅导
answer	v. 符合，适合
emerge	v. 浮现，出现；显露
obedient	adj. 服从的，顺从的
obedience	n. 服从，顺从
maintenance	n. 扶养费；维持
veto	n. 否决，否决权；禁止
denial	n. 否定；拒绝相信
Buddhism	n. 佛教，释教
dedicate	v. 奉献；献身
flatter	v. 奉承，阿谀，谄媚
pineapple	n. 凤梨，波萝
seam	n. 缝口；接缝；骨缝
landscape	n. 风景，景色，景致
windmill	n. 风车
plump	adj. 丰满的
abundance	n. 丰富，充裕
indignation	n. 愤怒，愤慨，义愤
shatter	v. 粉碎，破碎；毁坏
molecular	adj. 分子的；克分子的
limb	n. 肢；手臂；腿
offset	v. 抵销
fraction	n. 分数
distract	v. 分散（心思）；打扰
installment	n. 分期付款
split	n. 分裂，分化，派系
detach	v. 分开；派遣（军队）
partition	n. 分开，分割；隔墙
interface	n. 分界面
relay	v. 分程传递；使接替；转播
diverge	v. 分岔；分歧
litter	n. 废物；杂乱 v. 乱扔
abolish	v. 废除，取消
gangster	n. 匪徒，歹徒，暴徒
extraordinarily	adv. 非常地，特别地
fly	v. 飞跑；逃跑，消失
aviation	n. 飞行（术）
indulge	v. 放纵（感情），纵情
herd	v. 成群；放牧
magnify	v. 放大，扩大
imitation	n. 仿制品，伪制物
pattern	v. 仿制，仿造，模仿
reproduce	v. 仿造
estate	n. 财产，产业；房地产
hamper	v. 妨碍，阻碍，牵制
handicap	v. 妨碍，使不利
handy	adj. 方便的；便于使用的
offence	n. 犯罪，犯规；冒犯
blunder	v. 犯大错 n. 大错
mirror	n. 反映，借鉴
reactor	n. 反应堆
echo	v. 回响
contrary	n. 反对命题
contradict	v. 反驳，否认
propagation	n. 繁殖；传播；蔓延
propagate	v. 传播，普及；繁殖
toss	v. 翻来覆去
decree	n. 法令，政令
flannel	n. 法兰绒
valve	n. 阀，阀门；电子管
originate	v. 发源；首创
spokesman	n. 发言人，代言人
outlet	n. 发泄（感情等）的方法
incidence	n. 发生率，影响；入射
generate	v. 发生，产生；生成
invoice	n. 发票，发货清单
detector	n. 发觉者，探测器
flame	v. 燃烧
exert	v. 发挥（威力），施加
luminous	adj. 发光的；夜明的
beam	v. 发光，发热；开怀大笑
motive	adj. 发动的，运动的
dynamo	n. 发电机
rattle	v. 发出格格声
dioxide	n. 二氧化物
bait	n. 饵；引诱物
subsequent	adj. 尔后的
whereas	conj. 而，却，反之
youngster	n. 儿童，少年，年轻人
offspring	n. 儿女，子孙，后代
malice	n. 恶意；蓄意犯罪
spite	n. 恶意，怨恨
nightmare	n. 恶梦；经常的恐惧
yoke	n. 轭，牛轭；枷锁
deprive	v. 夺去；使（人）失去
mountainous	adj. 多山的；山一般的
windy	adj. 多风的，刮风的
versatile	adj. 多方面的；通用的
stew	v. 炖 n. 炖菜
mop	n. 拖把，墩布；洗碗刷
halve	v. 对分；平摊
symmetrical	adj. 对称的，匀称的
symmetry	n. 对称（性），匀称
provoke	v. 对…挑衅；激发
resent	v. 对…不满，怨恨
alignment	n. 排成直线；结盟，联合
assert	v. 断言，宣称；维护
affirm	v. 断言，证实
shortage	n. 短缺，不足额
ferry	n. 渡船 v. 运送
jealousy	n. 妒忌，嫉妒，猜忌
cuckoo	n. 杜鹃，布谷鸟
gamble	n. 赌博 v. 冒…的险
jam	n. 堵塞 v. 使…堵塞
distinct	adj. 清楚的
solo	n. 独唱，独奏；独唱曲
dictator	n. 独裁者，专政者
linger	v. 逗留，徘徊；拖延
tease	v. 逗乐，戏弄
fighter	n. 战斗机；斗争者
champion	n. 斗士；提倡者
insight	n. 洞察力；洞悉，见识
cavity	n. 洞，穴，空腔
jelly	n. 冻，果冻；胶状物
mobilize	v. 动员，动员起来
grease	n. 动物脂，脂肪
disturbance	n. 动乱；干扰
kinetic	adj. 动力（学）的；活动的
orient	n. 东方；亚洲，远东
location	n. 定位，测位
theorem	n. 定理；原理，原则
subscribe	v. 订购；认购；预订
summit	n. 顶点，最高点；极度
sculpture	n. 雕刻品；雕刻（术）
electronics	n. 电子学
pressure	n. 大气压力
capacitor	n. 电容器
capacitance	n. 电容，电容量
electrode	n. 电极；电焊条
electrician	n. 电工，电气技师
telex	n. 电传，用户电报
kindle	v. 点燃，着火
geology	n. 地质学；（某地）地质
basement	n. 地下室；地窖；底层
geographical	adj. 地理的；地区（性）的
magistrate	n. 地方法官
mortgage	n. 抵押贷款 v. 抵押
hostile	adj. 敌对的；不友好的
whisper	v. 低声地讲；私下说
underestimate	v. 低估，看轻
murmur	n. 低沉连续的声音
equivalent	adj. 等面（体）积的
enroll	v. 登记，招收，参军
burner	n. 煤气头
triumphant	adj. 得胜的；得意洋洋的
clatter	n. 得得声，卡嗒声
morality	n. 道德，美德，品行
theft	n. 盗窃，偷窃（行为）
attendance	n. 到场；出席人数
between	adv. 当中，中间
yolk	n. 蛋黄，卵黄
cartridge	n. 弹药筒
detain	v. 扣押，拘留；耽搁
simple	adj. 单纯的；迟钝的
simplicity	n. 单纯，质朴
fill	v. 担任（职务）；填补
jug	n. 带柄水罐，大壶
algebra	n. 代数学
attorney	n. 代理人；辩护律师
deputy	n. 代理人 adj. 副的
representative	adj. 代表性的；代议制的
delegate	n. 代表，委员，特派员
gorilla	n. 大猩猩
magnitude	n. 重大；星等
massacre	n. 大屠杀，残杀
stride	v. 大踏步走 n. 大步
embassy	n. 大使馆；大使的职务
ambassador	n. 大使，使节
mansion	n. 大厦，大楼；宅第
multitude	n. 大批，大群；大量
barley	n. 大麦
continental	adj. 大陆的，大陆性的
infinity	n. 无穷大
steak	n. 大块牛肉；牛排
butt	n. 大酒桶，桶
largely	adv. 主要地
widely	adv. 大大地
prairie	n. 大草原，牧场
smash	v. 打碎，打破，粉碎
sneeze	v. 打喷嚏
lighter	n. 打火机，引燃器
snore	v. 打鼾，打呼噜
thresh	v. 打谷，脱粒
forge	v. 打（铁等），锻造
passport	n. 达到目的的手段
inaccessible	adj. 达不到的，难接近的
frustrate	v. 挫败
latent	adj. 存在但看不见的
frail	adj. 脆弱的
fragile	adj. 脆弱的；体质弱的
crisp	adj. 脆的
catalyst	n. 催化剂；刺激因素
promotion	n. 促进；提升
reckless	adj. 粗心大意的；鲁莽的
vulgar	adj. 粗俗的，庸俗的
massive	adj. 粗大的；大而重的
harsh	adj. 粗糙的；严厉的
jungle	n. 丛林，密林，莽丛
follow	v. 从事（职业），经营
overflow	v. 从…中溢出
smart	v. 刺疼，扎疼，剧痛
prick	v. 刺（穿） n. 刺痛
thereafter	adv. 此后，以后
magnetism	n. 磁；魅力
porcelain	n. 瓷 adj. 瓷的，瓷制的
initial	adj. 词首的
glossary	n. 词汇表；术语汇编
vocabulary	n. 词汇表，词汇汇编
stem	n. 词干
poke	v. 戳，刺；伸（头等）
lipstick	n. 唇膏，口红
stainless	adj. 不锈的；纯洁的
sheer	adj. 纯粹的；全然的
perpendicular	adj. 垂直的
author	n. 创造者，创始人
innovation	n. 创新，改革；新设施
initiative	n. 倡议；新方案
puff	v. 喘气；喷（烟等）
shipwreck	n. 船舶失事
report	n. 传说，议论
infectious	adj. 传染的；感染性的
romance	n. 传奇；浪漫文学
herald	n. 传令官；通报者
missionary	n. 传教士
sensor	n. 传感器，灵敏元件
circular	n. 传单，通报，通函
leaflet	n. 传单
convey	v. 传达；传播；转让
pierce	v. 穿透，戳穿
penetration	n. 穿入；渗透
antenna	n. 触角；天线
virgin	n. 处女 adj. 处女的
transaction	n. 交易；处理
penalty	n. 处罚，刑罚，罚款
exclusive	adj. 除外的
notorious	adj. 臭名昭著的
scandal	n. 丑事，丑闻；耻辱
specimen	n. 抽样，样品
extraction	n. 抽出；提取法
adore	v. 崇拜，爱慕；很喜欢
worship	v. 崇拜；做礼拜
bug	n. 虫子；臭虫
punch	v. 打孔 n. 冲压机
strife	n. 冲突，竞争
equator	n. 赤道，天球赤道
gear	n. 齿轮，传动装置
persist	v. 持续，存留
breakfast	v. 吃早餐
dine	v. 吃饭
proceeding	n. 程序，行动，事项
length	n. 长度
acknowledge	v. 承认；告知收到
shoulder	v. 承担；挑起
integrity	n. 诚实，正直
offer	v. 出现
membership	n. 成员资格；会员人数
systematic	adj. 成体系的
kit	n. 成套工具；用具包
commend	v. 称赞，表扬；推荐
brood	v. 沉思，郁闭地沉思
muse	v. 沉思，默想，冥想
meditate	v. 沉思；冥想
hush	n. 沉默 int. 嘘！
immerse	v. 沉浸；给…施洗礼
repeal	v. 撤销
lathe	n. 车床 v. 用车床加工
row	n. 吵架，口角
mock	v. 嘲弄，挖苦
reign	n. （某君主的）统治时期
supersonic	adj. 超声的，超声速的
ultrasonic	adj. 超声的 n. 超声波
surpass	v. 超过，超越，胜过
nickname	n. 绰号，诨号
waggon	n. 敞蓬车厢
spectacle	n. 场面，景象；奇观
resident	n. 常住者
haunt	v. （鬼魂）经常出没
visit	v. 拜访
frequent	adj. 常见的；频繁的
shovel	n. 铲，铁铲 v. 铲
toad	n. 蟾蜍，癞蛤蟆
diesel	n. 柴油发动机，内燃机
errand	n. 差使，差事
ascertain	vt. 查明，确定，弄清
horizon	n. 地平线
tactics	n. 战术，兵法
grassy	adj. 草多的
herb	n. 草本植物；香草
groove	n. 槽
manipulate	v. 操作；操纵，控制
hatch	v. 策划；密谋
warehouse	n. 仓库，货栈
cruelty	n. 残酷；残酷行为
napkin	n. 餐巾（纸）
participate	v. 参与
senator	n. 参议员
reference	n. 参考文献；参照物
participant	n. 参加者
spectator	n. 参观者，观众
parameter	n. 参（变）数；参量
recipe	n. 菜谱，烹饪法
assumption	n. 假定
rule	v. 裁决，裁定
substance	n. 内容，本旨；财产
friction	n. 摩擦
sermon	n. 布道，讲道；说教
absent	adj. 不在的
disagreement	n. 争论；不一致
awkward	adj. 令人尴尬的
immortal	adj. 不朽的；永生的
wretched	adj. 不幸的
misfortune	n. 不幸，灾祸，灾难
incompatible	adj. 不相容的
instability	n. 不稳定性
incomplete	adj. 不完全的，未完成的
stuffy	adj. 不透气的，闷热的
opaque	adj. 不透明的
improper	adj. 不适当的；不合理的
dissatisfaction	n. 不满，不平
watertight	adj. 不漏水的，防水的
inevitably	adv. 不可避免地
irrespective	adj. 不考虑的，不顾的
inaccurate	adj. 不精密的，不准确的
unreasonable	adj. 不讲道理的；过高的
undesirable	adj. 不合需要的；讨厌的
unfit	adj. 不合适的；无能力的
absurd	adj. 不合理的，荒唐的
irregularity	n. 不规则；不整齐
disregard	v. 不管，不顾 n. 忽视
uncertain	adj. 不定的；无常的
impurity	n. 杂质；不纯
inadequate	adj. 不充足的，不适当的
invariably	adv. 不变地，永恒地
uneasy	adj. 不安的；拘束的
mammal	n. 哺乳动物
supplement	n. 补角
complement	v. 补充 n. 补足（物）
compensation	n. 补偿，赔偿，赔偿费
humanitarian	adj. 博爱的 n. 慈善家
barge	n. 驳船；大型游船
fluctuation	n. 波动
fluctuate	v. 波动，使波动
invalid	n. 病人
ward	n. 病房，病室；监房
strength	n. 兵力；强度
icy	adj. 冰冷的；冷冰冰的
objective	n. 目标 adj. 宾格的
villa	n. 别墅
characterize	v. 表现…的特性
signify	v. 表示，意味着
manifest	v. 表明 adj. 明显的
seemingly	adv. 表面上，外表上
superficial	adj. 表面的；肤浅的
criterion	n. 标准，准则，尺度
norm	n. 标准，规范；平均数
heading	n. 标题，题词，题名
reason	v. 论证，推断
advocate	v. 拥护 n. 辩护律师
discrimination	n. 歧视；辨别；识别力
transform	v. 变换
loosen	v. 变松
alteration	n. 变更，改变
fall	v. 变成，成为，陷入
program	v. 编制程序
edit	v. 编辑，编纂；校订
verge	n. 边缘，边界
rim	n. 边；边缘，（眼镜）框
hearth	n. 壁炉地面；炉边
fireplace	n. 壁炉
patron	n. 庇护人；赞助人
diploma	n. 毕业文凭，学位证书
indispensable	adj. 必不可少的，必需的
sullen	adj. 绷着脸不高兴的
bandage	n. 绷带，包带
breakdown	n. 崩溃，倒塌，失败
essence	n. 本质，本体
captive	adj. 被俘虏的
reverse	n. 背面，反面
deviation	n. 背离，偏离；偏差
arctic	adj. 北极的 n. 北极
tragic	adj. 悲惨的；悲剧的
woe	n. 悲哀，悲痛，苦恼
grief	n. 悲哀，悲痛，悲伤
firework	n. 爆竹，花炮，烟火
storm	n. 爆发 v. 猛攻
tyranny	n. 暴政，专制；残暴
wrath	n. 暴怒，狂怒，愤慨
tyrant	n. 暴君；专制君主
panther	n. 豹，黑豹；美洲狮
leopard	n. 豹
grumble	v. 抱怨，发牢骚
announce	v. 报告…的来到
vengeance	n. 报复，报仇，复仇
fortress	n. 堡垒，要塞
assurance	n. 保证
fuse	n. 保险丝；导火线
reservation	n. 预定，预订；保留意见
safeguard	n. 保护措施
preservation	n. 保存，储藏；保持
saturation	n. 饱和（状态）；浸透
mist	n. 薄雾 v. 下薄雾
chip	n. 薄片，碎片
inclusive	adj. 包括的
siege	n. 包围，围攻，围困
embrace	v. 包括，包含
baseball	n. 棒球运动；棒球
hemisphere	n. 半球
radius	n. 半径距离，半径范围
scar	n. 瘢痕
liner	n. 班船，定期班机
trigger	n. 扳机 v. 触发，引起
tar	n. 柏油；焦油
blind	n. 百叶窗；窗帘；遮帘
shutter	n. 百叶窗；（相机）快门
lily	n. 百合，百合花
millionaire	n. 百分富翁，巨富
white	adj. 白种（人）的
blond	n. 白肤金发碧眼的人
idiot	n. 白痴；傻子
bank	v. 把钱存入银行
tabulate	v. 把…制成表
bestow	v. 把…赠与
subdivide	v. 把…再分
dock	v. 把…引入船坞
straighten	v. 把…弄直；挺起来
flatten	v. 把…弄平；击倒
ascribe	v. 把…归于
except	v. 把…除外，除去
entitle	v. 把…称作
ballet	n. 芭蕾舞；芭蕾舞剧
haughty	adj. 傲慢的，轻蔑的
foul	adj. 肮脏的；丑恶的
assassinate	v. 暗杀，行刺；中伤
burial	n. 安葬，埋葬；埋藏
luxurious	adj. 爱好奢侈的，豪华的
patriot	n. 爱国者，爱国主义者
patriotic	adj. 爱国的
dwarf	n. 矮子，侏儒
stout	adj. 肥胖的；厚实牢固的
alas	int. 唉，哎呀
Egyptian	adj. 埃及的 n. 埃及人
pathetic	adj. 哀婉动人的；可怜的
should	v. 应该；竟然会
ought	v. 早应该，本应
scripture	n. 《圣经》；圣书
referee	n. （足球等）裁判员
pendulum	n. （钟等的）摆
shuttle	n. （织机的）梭
outbreak	n. （战争、愤怒等）爆发
market	v. 推销
gross	adj. （语言、举止）粗俗的
heave	v. （用力地）举起；抛
pop	v. （意外地）出现
lining	n. （衣服里的）衬里
mild	adj. 味淡的
panel	n. （选定的）专门小组
rigorous	adj. 严格的
climax	n. 顶点
epoch	n. （新）时代；历元
shrimp	n. （小）虾，河虾，褐虾
peak	n. （物体的）尖端
cane	n. （藤等）茎；手杖
drain	v. （水等）流掉
switch	n. （树木的）软枝条
board	v. 付费（在某人家里）膳宿
immigrate	v. （使）移居入境
disperse	v. （使）分散；驱散
lump	v. （使）成团，结块
deviate	v. （使）背离，偏离
pose	v. （使）摆好姿势
expenditure	n. （时间等）支出，消费
elapse	v. （时间）过去，消逝
hoarse	adj. （声音）嘶哑的
clearing	n. （森林中的）空旷地
shade	n. （色彩的）浓淡，深浅
eclipse	n. （日，月）食
constitution	n. （人的）体格，素质
spill	n. （人）摔下，跌下
unanimous	adj. （全体）一致的
quiver	v. （轻微地）颤动
perch	n. （禽鸟的）栖木
span	n. （桥墩间的）墩距
pier	n. 码头；（桥）墩
frock	n. （女）连衣裙
flutter	v. （鸟）振翼；飘动
resume	n. （谋职者的）个人简历
clown	n. （马戏的）小丑，丑角
pace	v. 踱步
lounge	n. （旅馆等的）休息室
pope	n. （罗马天主教的）教皇
axle	n. （轮）轴，车轴，心棒
measurement	n. （量得的）尺寸，大小
realization	n. （理想等的）实现
chord	n. 和弦
pyjamas	n. （宽大的）睡衣裤
elegant	adj. （举止、服饰等）雅致的
hard	adj. （酒）烈性的
refreshment	n. （精力的）恢复，爽快
ticket	n. （交通违章）罚款传票
gesture	v. （讲话时等）做手势
situation	n. （建筑物等的）位置
software	n. （计算机的）软件
bishop	n. （基督教的）主教
insert	v. 插入，放进
kernel	n. （果实的）核；谷粒
wisdom	n. 智慧
growl	v. （狗等）嗥叫；咆哮
shaft	n. （工具的）柄，杆状物
buzz	v. （蜂等）嗡嗡叫
breed	n. （动物）品种
ear	n. （稻麦等的）穗
dean	n. （大学）院长，系主任
fertile	adj. （创造力）丰富的
sink	n. （厨房内的）洗涤槽
versus	prep. （比赛等中）对
ranch	n. （北美洲的）大牧场
grope	v. （暗中）摸索，探索
pedlar	n. （挨户兜售的）小贩
rally	v. 集合
squat	v. （使）蹲下
fling	v. （用力）扔，抛
scrub	v. 擦洗，擦净 n. 擦洗
tread	v. 踩，踏，践踏
crack	v. 发出爆裂声
slander	n. 诽谤，诋毁 v. 诽谤，诋毁
escort	v. 护卫，护送 n. 护卫者，护送车辆
swell	v. 使膨胀；隆起
menace	n. 威胁 v. （进行）威胁
tramp	v. 以沉重的脚步走（过） n. 跋涉
trample	v. 践踏，蹂躏 n. 践踏，蹂躏
suicide	n. 自杀 v. 自杀
tighten	v. （使）变紧
jingle	v. （使）丁当响
fret	v. （使）烦恼
thrill	v. （使）激动
deflect	v. （使）偏斜
tilt	v. （使）倾斜
revolve	v. （使）旋转
rotate	v. （使）旋转
compensate	v. 补偿，赔偿
default	n. 不履行义务 v. 不履行义务
infer	v. 推断
repay	v. 偿还；报答
scoff	v. 嘲笑，嘲弄
hoe	v. 锄地
retort	v. 反击；反驳
broaden	v. 放宽，变阔
decompose	v. 腐败；分解
chorus	v. 合唱，齐声说
supervise	v. 监督，监视
beware	v. 谨防，当心
grab	v. 攫取，抓取
entreat	v. 恳求
concentrate	v. 浓缩，提浓
urge	v. 强烈希望
riot	n. 骚乱，暴乱 v. 发动骚乱
shrug	v. 耸（肩） n. 耸肩
revive	v. 苏醒；复兴
terminate	v. 停止，终止
solidify	v. 凝固
dazzle	v. 使目眩；使倾倒
transplant	v. 移植（器官、皮肤等）；移植，移种（植物）
xerox	v. 用静电复印
peck	v. 啄，啄起
trot	v. （马）小跑 n. （马）小跑；慢跑
ridicule	v. 嘲弄，挖苦 n. 嘲弄，挖苦
chatter	v. 喋喋不休 n. 喋喋不休
sneer	v. 冷笑；嘲笑 n. 冷笑；嘲笑
boycott	v. 联合抵制 n. 抵制行动，受抵制时期
plunder	v. 掠夺，劫掠 n. 掠夺，抢劫
endeavor	v. 努力，尽力 n. 努力，尝试
scramble	v. 爬行，攀登 n. 爬行，攀登
flap	v. 拍打 n. 拍打，拍动
slaughter	v. 屠杀；屠宰 n. 屠杀；屠宰
tow	v. 拖引，牵引 n. 拖引，牵引
credit	v. 相信，信任 n. 相信，信任
clockwise	adv. 顺时针方向转地 adj. 顺时针方向转的
headlong	adv. 头向前地 adj. 头向前的
counter	adv. 相反地 adj. 相反的
eastward	adv. 向东
Moslem	n. 穆斯林 adj. 穆斯林的
melancholy	n. 忧郁的 adj. 忧郁，悲伤
bulletin	n. 告示，公告，公报
allowance	n. 津贴，补助费
cancel	vt. 取消， 撤销， 删去
numerous	adj. 众多的
surgeon	n. 外科医生
analyse	vt. 分析； 分解， 解析
abrupt	adj. 突然的， 意外的； 唐突的， 鲁莽的
spacious	adj. 宽广的， 宽敞的
disapproval	n. 不赞成
spontaneous	adj. 自发的， 无意识的； 自然的， 天真率直的
remote	adj. 遥远的， 偏僻的； 关系疏远的； 脱离的； 绝少的； 微乎其微的； 孤高的， 冷淡的
cafeteria	n. 自助餐馆， 自助食堂
rupture	v. 破裂 n. 破裂，裂开；决裂，断绝
wreck	n. 失事，残骸；精神或身体已垮的人 vt. 破坏
virgin	adj. 未经开发的， 未经使用的， 未经触动的； 处女的 n. 处女，未婚女子
afflict	vt. 使苦恼， 折磨
reproach	n&vt. 责备， 批评
fluctuate	vi. 波动， 涨落， 起伏
compartment	n. 卧车包房， 隔间； 分隔的空间
gloomy	adj. 忧郁的， 沮丧的； 令人沮丧的； 昏暗的， 阴沉的
kidnap	n. 绑架， 诱拐
warrant	n. 授权令；理由，根据 vt. 证明…是正当的
calculate	v. 计算， 推算； 计划， 打算
persistent	adj. 坚持不懈的， 执意的； 持续的
authorize	vt. 授权， 批准
sake	n. 缘故， 理由
audience	n. 听众， 观众； 读者
rehearsal	n. 排练， 排演
sniff	v. 以鼻吸气，用力吸入；嗅，闻 n. 吸气； 嗅， 闻
narrative	n. 叙述文， 故事； 叙述， 讲述
possess	vt. 占用， 拥有
coincide	vi. 同时发生； 相符， 相一致； 位置重合， 重叠
neutral	adj. 中立的， 中性的
scratch	v. 抓，搔，扒；刮擦，刻划 n. 抓痕， 划痕； 抓， 搔， 刮
analysis	n. 分析， 分析报告； 分解， 解析
devise	vt. 设计， 发明
cooperative	adj. 有合作意向的，乐意合作的；合作的，协作的 n. 合作社， 合作商店
triple	adj. 三部分的，三方的；三倍的，三重的 v. 增至三倍
clutch	vi. 企图抓住 vt. 抓紧，紧握 n. 离合器； 掌握， 控制； 把握， 抓紧
temper	n. 韧度；心情，情绪 vt. 调和， 使缓和； 回火
grope	vi. 暗中摸索，搜索；探索，搜寻 vt. 摸索
rejoice	vi. 感到高兴， 充满喜悦
frantic	adj. 慌乱不安的； 发疯似的， 发狂的
tickle	vi. 发痒 vt. 使发痒；使高兴，逗乐 n. 痒
object	vi. 反对， 不赞成 n. 实物， 物体； 目的， 目标； 对象， 客体； 宾语
humble	adj. 谦逊的；地位低下的；简陋的 vt. 使谦恭； 使卑下
commodity	n. 商品， 货物
cliff	n. 悬崖， 峭壁
obedient	adj. 服从的， 顺从的
infinite	adj. 无限的， 无数的
misery	n. 痛苦， 苦恼， 苦难； 悲惨的境遇， 贫苦
blur	v. 变模糊 n. 模糊，模糊的东西
suffice	vi. 足够
concede	vi. 让步， 认输 vt. 承认，承认…为真；承认失败；允许，让予
notable	adj. 值得注意的，显著的；著名的 n. 名人， 要人
plausible	adj. 似有道理的， 似乎正确的， 貌似可信的
equator	n. 赤道
commission	n. 委任状；委员会；佣金，回扣；授权，委托 vt. 委任， 委托
staircase	n. 楼梯
flip	adj. 〈口〉无理的， 轻率的， 轻浮的 vt. 快速翻动，转动 n. 捻掷，轻抛；轻拍
rational	adj. 理性的， 理智的； 合理的
barricade	n. 路障，栅栏，障碍 vt. 设路障于， 挡住
resume	vt. 重新开始， 继续， 恢复 n. 摘要， 概要； 简历
provocative	adj. 挑衅的， 煽动的， 刺激的； 挑逗的
committee	n. 委员会， 全体委员
posture	vi. 摆出姿势， 装模作样 n. 姿势，姿态；看法，态度
spiral	vi. 盘旋上升； 不断急剧地上升 adj. 螺旋的 n. 螺旋，螺旋式的上升
subtle	adj. 微妙的， 难以捉摸的； 诡秘的， 狡诈的； 隐约的
component	adj. 组成的， 构成的 n. 组成部分，部件，组件
overwhelm	vt. 使受不了， 使不知所措； 征服， 制服
suite	n. 套间； 一套家具； 套， 组， 系列
consultant	n. 顾问； 会诊医师， 专科医生
disguise	vt. 假扮，化装，伪装；掩盖，掩饰 n. 用来伪装的东西； 伪装， 掩饰
imperial	adj. 帝国的， 帝王的； 英制的
facet	n. 一个方面； 面
liberal	adj. 心胸宽大的， 慷慨的； 自由的， 自由主义的
surgery	n. 外科， 外科手术； 手术室
harmony	n. 调和； 协调； 和谐
violent	adj. 暴力引起的， 强暴的； 猛烈的， 剧烈的
resolve	v. 决定；解决；分解 n. 决心
cozy	adj. 舒适的； 亲切友好的
confront	vt. 迎面遇到， 遭遇； 勇敢地面对， 正视； 使对质， 使当面对证
dominate	v. 在…中占首要地位； 支配， 统治； 耸立于， 俯视； 拥有优势
imitate	vt. 模仿； 仿效； 仿制
deadly	adv. 非常， 极度地 adj. 致死的，致命的；不共戴天的；极度的，十足的
compute	v. 计算， 估算
institution	n. 协会； 制度； 习俗
huddle	vi. 聚集在一起，挤作一团；把身子蜷成一团，蜷缩 vt. 使聚集在一起 n. 挤在一起的人； 一堆杂乱的东西
skeleton	n. 骨骼； 框架， 骨干； 梗概， 提要
ambition	n. 雄心， 抱负， 野心； 期望得到的东西
intersection	n. 道路交叉口， 交点
exceed	vt. 超过， 胜过， 超出
implement	vt. 使生效， 履行， 实施 n. 工具， 器具， 用具
disperse	vi. 分散， 赶散； 消散， 驱散 vt. 使分散，散开；使消散，消失
avert	vt. 防止， 避免； 转移
fantasy	n. 想象， 幻想； 想象的产物
shipment	n. 装运， 装船； 装载的货物
vicious	adj. 恶毒的， 凶残的； 剧烈的， 严重的
lace	n. 网眼花边，透孔织品；鞋带，系带 vt. 用系带束紧
enormous	adj. 巨大的， 庞大的
external	adj. 外部的， 外面的
gorgeous	adj. 华丽的， 灿烂的， 绚丽的； 令人十分愉快的， 极好的
circumstance	n. 情况，条件，境遇；
authority	n. 官方； 权力； 当权者， 行政管理机构； 权威， 专家
erosion	n. 腐蚀， 侵蚀， 磨损； 削弱， 减少
ascend	vi. 渐渐上升，升高 vt. 攀登， 登上
provided	conj. 假如， 若是
instrument	n. 仪器， 工具； 乐器
medium	adj. 中等的 n. 媒质，媒介物；传导体
indispensable	adj. 必不可少的， 必需的
lens	n. 透镜， 镜片； 镜头
embody	vt. 代表， 表现， 体现； 包括； 包含； 收录
fatal	adj. 致命的， 灾难性的， 毁灭性的； 重大的， 决定性的
motive	n. 动机， 目的
envisage	vt. 想象， 设想
wrestle	n. 摔跤； 斗争， 搏斗
motivate	vt. 作为…的动机； 激励， 激发
marginal	adj. 微小的， 少量的； 不重要的； 仅以微弱多数票获胜的； 记在页边的， 有旁注的
spoil	vi. 变质 vt. 损坏，糟蹋；宠坏，溺爱 n. 战利品， 掠夺物
multiply	v. 增加， 繁殖； 乘
pasture	n. 牧草地，牧场 vt. 放牧
approval	n. 赞成， 同意； 认可， 批准
mobile	adj. 运动的；流动的；多变的 n. 移动电话
multiple	adj. 复合的；多重的，多样的 n. 倍数
evolution	n. 进化， 演化； 发展
peak	vi. 达到高峰； 达到最大值 adj. 最大值的；高峰的 n. 山顶，顶点，顶峰
magnet	n. 磁铁， 磁体； 有吸引力的人和事物
concentrate	v. 全神贯注，全力以赴；集中，聚集；浓缩 n. 浓缩物， 浓缩液
expose	vt. 使暴露， 揭露
versatile	adj. 多才多艺的， 有多种技能的； 有多种用途的， 多功能的， 万用的
versus	prep. 以…为对手， 对； 与…相对， 与…相比之下
complaint	n. 抱怨， 怨言； 控告
permissible	adj. 可允许的， 许可的
cancer	n. 癌， 癌症， 肿瘤
splash	v. 溅，泼 n. 溅泼声； 溅出的水； 斑点
inject	vt. 注射， 给…注射； 注入， 引入， 投入
romance	n. 恋爱， 恋爱关系； 浪漫气氛， 传奇色彩； 爱情小说， 传奇故事
offense	n. 犯规， 违法行为； 冒犯， 得罪
atlas	n. 地图集
invisible	adj. 看不见的， 无形的
focus	v. 聚焦；集中 n. 焦点， 中心
hamper	vt. 妨碍，束缚，限制 n. 大篮子
motel	n. 汽车旅馆
approach	vt. 向…靠近 n. 靠近； 途径， 方式
exaggeration	n. 夸张； 夸大之词
peg	n. 小钉，栓，挂物钉；桩 vt. 用钉子钉， 用钉固定； 限定； 将…看成， 将…归入
myth	n. 杜撰出来的人； 神话
decisive	adj. 决定性的； 坚定的， 果断的， 决断的
concise	adj. 简明的， 简要的
implication	n. 含意， 暗示， 暗指； 卷入， 牵连
thesis	n. 论文， 毕业论文； 论题， 论点
bump	vi. 碰，撞；
reservation	n. 预订； 保留； 犹豫； 居留地
revive	v. 复苏
cordial	adj. 热情友好的， 热诚的
timid	adj. 羞怯的， 胆小的
loyalty	n. 忠诚， 忠心
dismiss	vt. 不再考虑； 解雇， 解散； 驳回
underlying	adj. 在下面的； 含蓄的； 潜在的
reform	n&v. 改革， 改良， 改造； 改正， 改过自新
install	vt. 安装， 设置； 使就职， 任命
ensue	vi. 接着发生， 接踵而来， 因而产生
indication	n. 指出， 指示； 迹象， 暗示
bulk	v. 变得越来越大； 使更大 n. 物体，体积；大批
bull	n. 公牛； 雄兽； 买进证券投机图利者， 看涨的人
champion	n. 冠军， 得胜者； 捍卫者， 拥护者
ceramic	adj. 陶器的 n. 陶瓷器
queer	adj. 奇怪的， 异常的； 不舒服的， 眩晕的
successor	n. 接替的人或事物， 继任者
enlightenment	n. 启发， 开导； 开明， 文明
booklet	n. 小册子
magnificent	adj. 壮丽的， 华丽的； 极好的
stagger	vi. 摇晃，蹒跚 vt. 使吃惊；使错开，使交错 n. 蹒跚， 踉跄
irony	n. 反话， 冷嘲， 嘲弄； 具有讽刺意味的事
restrict	vt. 限制， 约束， 限定
bandage	n. 绷带 vt. 用绷带绑扎
prevalence	n. 流行
scrap	n. 碎片，碎屑；废金属；残羹剩饭；少量，点滴 vt. 废弃， 抛弃
syndrome	n. 综合病症， 综合症状； 一系列表现
tow	n&vt. 拖， 拉， 牵引
imperative	adj. 必要的；紧急的，极重要的；命令的 n. 必要的事， 必须完成的事； 【语】祈使语气
meadow	n. 草地
hitherto	adv. 到目前为止， 迄今
energetic	adj. 精力充沛的， 充满活力的
haul	vt. 拖，拉；拖运，运送 n. 拖， 拉， 托运； 一次获得的数量
avail	v. 有帮助； 有益； 有用 n. 效用，利益，帮助
consequence	n. 结果， 后果； 重要， 重大
linear	adj. 线的， 直线的， 线状的； 长度的； 线性的
robust	adj. 强壮的， 健康的
dominant	adj. 占优势的， 支配的， 统治的； 居高临下的， 高耸的
premier	adj. 首要的， 首位的， 首次的 n. 总理，首相
peel	vi. 剥落，脱皮 vt. 削…的皮，剥…的壳 n. 皮， 外衣
intellectual	adj. 智力的 n. 知识分子
reclaim	vt. 要回； 开垦； 回收
denounce	vt. 谴责， 指责； 告发
verge	vi. 接近， 濒临 n. 边，边缘
pastry	n. 油酥面团， 酥皮糕点
messenger	n. 送信人， 信使
disable	vt. 丧失能力， 伤残
irrespective	adj. 不考虑的， 不顾及的
entity	n. 实体， 独立存在体， 实际存在物
prohibit	vt. 禁止， 不准
bacteria	n. 细菌
fuel	n. 燃料，燃料剂 vt. 给…加燃料； 刺激
hostile	adj. 敌方的， 不友善的
reign	vi. 当政， 统治； 占主导地位 n. 君主的统治，君主的统治时期
tempo	n. 速度； 节奏， 行进速度
descendant	n. 后裔， 后代
foresee	vt. 预见， 预知
bruise	n. 青肿，挫伤；伤痕，擦痕 vt. 打青， 使受淤伤； 挫伤， 伤害
associate	v. 把…联系在一起；使联合，结合；交往	[ə'səuʃiət] adj. 副的 n. 伙伴，同事
gown	n. 女礼服， 女裙服； 长袍； 罩衣
crawl	n&v. 爬行， 蠕动； 缓慢行进
identical	adj. 完全相同的， 同一的
plead	vi. 恳求，请求；申诉，答辩，辩护 vt. 为…辩护， 提出…为理由
kidney	n. 肾， 肾脏
gleam	n&vi. 闪亮， 闪烁； 闪现， 流露
ambitious	adj. 有抱负的， 雄心勃勃的； 有野心的
academic	adj. 学院的；学术的；纯理论的，不切实际的 n. 大学教师
function	vi. 工作， 运行； 起作用 n. 功能，职务；【数】函数；重大聚会
stock	v. 储备 adj. 常用的， 常备的 n. 原料，库存品；股本，公债；世系，血统；汤汁；家畜，牲畜
sneak	vi. 偷偷地走，溜 vt. 偷偷地做
void	adj. 无效的；没有的，缺乏的 n. 空虚感，寂寞感；真空，空白 vt. 使无效
comparison	n. 比较， 对照； 比拟， 比喻
surge	vi. 蜂拥而出；洋溢，奔放；汹涌，奔腾 n. 洋溢， 奔放； 急剧上升， 猛增； 浪涛般汹涌奔腾
swap	n&v. 交换
ritual	adj. 作为仪式一部分的； 例行的 n. 仪式；例行公事，老规矩
liability	n. 责任； 负债， 债务； 不利条件， 起妨碍作用的人
hatch	vt. 孵出；筹划， n. 舱门； 开口； 孵化
patriot	n. 爱国者， 爱国主义者
tick	vi. 发出滴答声 n. 记号，勾号；滴答声 vt. 给…标记号
basis	n. 基础， 根据； 原则
tutor	v. 当…导师， 当…家庭教师 n. 导师；家庭教师，私人教师
senator	n. 参议员
successive	adj. 连续的， 接连的
quantify	vt. 确定…的数量， 量化
reconcile	vt. 使协调； 使和解； 使顺从， 使甘心
tempt	vt. 吸引， 引起…的兴趣； 引诱， 诱惑
obligation	n. 义务， 责任
paperback	n. 平装本， 简装本
evil	adj. 坏的 n. 邪恶，祸害
rarely	adv. 不常， 难得
hawk	n. 鹰，隼；“鹰派”人物 vt. 叫卖， 兜售
twist	v. 缠绕，盘绕；转动，旋动；捻，搓；歪曲，曲解；扭歪，扭伤；曲折前进；转身 n. 扭弯； 转折， 转变； 弯曲， 曲折处
forthcoming	adj. 即将到来的； 可得到的； 乐于提供消息的
patriotic	adj. 爱国的， 有爱国心的， 显示爱国精神的
complication	n. 困难， 难题； 并发症
perplex	vt. 使困惑， 使费解； 使复杂化
combat	n. 战争，斗争，格斗 vt. 与…斗争， 与…战斗
despise	vt. 鄙视， 看不起
levy	vt. 征收 n. 征税， 税款
indulge	vi. 沉溺， 纵容自己， 肆意从事 vt. 使沉溺于，满足；纵容，迁就
intimidate	vt. 恐吓， 威胁
effective	adj. 有效的； 有影响的
unity	n. 单一， 统一， 团结； 和睦， 协调
pursue	vt. 继续， 从事； 追赶， 追踪； 追求
vulgar	adj. 粗野的， 下流的； 庸俗的， 粗俗的
catastrophe	n. 大灾难， 灾祸
convey	vt. 表达； 传递； 运送， 输送
design	vt. 设计；预定，指定 n. 设计， 构想； 图样； 企图
generous	adj. 慷慨的， 宽厚的； 大量的
coincidence	n. 巧合， 巧事； 一致， 符合
victim	n. 牺牲者； 受害者
bust	vi. 爆裂，坏掉 vt. 打破，打碎 n. 胸像， 半身像； 胸部， 胸围
skull	n. 颅骨， 脑壳
hysterical	adj. 情绪异常激动的， 歇斯底里般的
lane	n. 小路， 跑道； 航道， 航线
contaminate	vt. 弄脏， 污染
ammunition	n. 弹药， 军火
chief	adj. 主要的，为首的；总的 n. 首领， 长官； 酋长， 族长
accord	v. 相符合， 相一致， 相和谐； 授予， 赠与， 给予 n. 一致，符合；谅解，协议
foremost	adj. 最好的， 最著名的， 最重要的
automatic	adj. 自动的； 必然发生的； 无意识的 n. 自动机械
despite	prep. 不管， 不顾
consecutive	adj. 连续的， 连贯的
probe	v. 探索，查究，调查；用探针探查，探测 n. 探针， 探测器； 探索， 调查
assimilation	n. 同化， 同化作用； 消化
groan	vi. 呻吟，抱怨；发出呻吟般的声音 n. 呻吟， 抱怨； 呻吟般的声音
industrial	adj. 工业的， 产业的
conduct	n. 举止，行为；指导；管理，实施	[kən'dʌkt] vt. 进行； 管理， 指挥， 引导； 传输， 传导
velvet	n. 天鹅绒， 丝绒
quantitative	adj. 量的， 定量的
stable	adj. 稳定的，不变的；沉稳的，持重的 n. 厩， 马厩， 牛棚
reunion	n. 重聚， 团聚； 聚会， 联谊活动
fantastic	adj. 极好的， 极出色的； 了不起的； 极大的； 难以相信的； 异想天开的， 不实际的； 奇异的， 古怪的
drainage	n. 排水系统， 下水道； 排水， 放水
respond	vi. 回答， 答复； 作出反应， 响应
incident	n. 发生的事， 事件
lame	adj. 跛的， 瘸的； 站不住脚的， 差劲的； 蹩脚的
tub	n. 桶， 塑料杯， 纸杯； 盆， 洗澡盆， 浴缸
cluster	vi. 群集，丛生 n. 串，簇；群，组 vt. 使群集， 集中
prey	vi. 捕食； 折磨， 使烦恼 n. 被捕食的动物，捕获物；受害者
apparatus	n. 器械， 器具， 仪器； 机构， 组织
lieutenant	n. 陆军中尉； 海军上尉
tug	v. 用力拖 n. 拖船； 猛拉， 牵引
expedition	n. 旅行， 远征； 远征队， 探险队， 考察队； 迅速， 动作敏捷
decay	vi. 腐烂，衰败 n. 腐烂， 衰败状态
grieve	vi. 感到悲痛，伤心 vt. 使伤心， 为…而伤心
absorb	vt. 吸收； 吸引…的注意， 使全神贯注； 把…并入， 同化
concern	n. 关切的事，有关的事；关心，挂念；关系，关联；公司，企业 vt. 涉及， 有关； 使关心， 使担心
fracture	v. 断裂，折断 n. 裂缝， 裂痕； 折断
rectify	vt. 纠正， 修复
integrity	n. 正直， 诚实， 诚恳； 完整， 完全， 完善
refrain	vi. 抑制，克制，戒除 n. 叠句， 副歌
pact	n. 契约， 协定， 条约
notation	n. 记号， 标记法
merge	v. 结合， 合并， 合为一体
liable	adj. 易于…的， 可能的
recycle	vt. 回收利用
dock	vi. 靠码头， 进港 n. 码头，船埠；被告席 vt. 使靠码头；扣
marsh	n. 沼泽， 湿地
element	n. 成分， 要素， 元素； 基础， 纲要； 自然力
confidential	adj. 秘密的， 机密的； 表示信任的； 担任机密工作的
abundant	adj. 丰富的， 富裕的； 大量的， 充足的
exclaim	vi. 呼喊， 惊叫
ballet	n. 芭蕾舞， 芭蕾舞剧； 芭蕾舞团
mute	adj. 缄默的，无声的；哑的，不会说话的；不发音的 vt. 消除， 减轻
courtesy	n. 谦恭有礼； 有礼貌的举止
deteriorate	vi. 恶化， 变坏
warehouse	n. 仓库， 货栈
recognize	vt. 认出， 识别； 承认， 确认， 认可； 赏识， 表彰， 报偿
restraint	n. 抑制， 限制， 克制； 约束措施， 约束条件
pollutant	n. 污染物质
bamboo	n. 竹， 竹子
input	n. 输入；投入的资金，输入的数据 vt. 把…输入计算机
induce	vt. 引导， 劝； 引起， 导致
abnormal	adj. 反常的， 异常的
shrewd	adj. 机灵的， 敏锐的， 精明的
stereotype	n. 陈规，老套，固定的模式 vt. 对…形成固定看法
molecule	n. 分子
enroll	vi. 入学，加入 vt. 招收， 吸收
resign	vi. 辞职；听任 vt. 辞去， 放弃； 使顺从
safeguard	vt. 保护，维护 n. 预防措施； 保证条款
diligent	adj. 勤勉的， 勤奋的
sophisticated	adj. 老于世故的； 高级的； 精密的， 复杂的； 高雅的
entertainment	n. 娱乐， 文娱节目， 表演会； 招待， 款待， 请客
reside	vi. 居住， 定居； 存在， 在于
indicative	adj. 标示的，指示的，象征的；陈述的 n. 【语】陈述语气
ward	n. 病房； 区； 受监护人
dread	vt. 担忧，忧虑；惧怕 n. 担忧， 畏惧
scrutiny	n. 详细检查， 仔细观察
chase	n&vt. 追逐， 追赶， 追求
accident	n. 意外， 事故
promote	vt. 促进， 增进， 发扬； 提升； 宣传， 推销
routine	adj. 例行的， 常规的 n. 例行公事，惯例，惯常的程序
attack	n&vt. 攻击， 进攻； 突然发作
divorce	n. 离婚，离异 vt. 离婚； 分离， 脱离
tariff	n. 关税， 税率； 价目表， 收费表
attach	vt. 缚， 系， 贴， 附加； 使依恋， 使喜爱； 使附属； 认为有
graphic	adj. 生动的， 形象的； 绘画的， 文字的， 图表的
convict	vt. 证明…有罪，宣判…有罪['kɒnvɪkt] n. 囚犯
retention	n. 保留， 保持
creation	n. 创造， 创建； 创造的作品， 产物； 宇宙， 天地万物
legislation	n. 法律， 法规； 立法， 法律的制定
dodge	vi. 闪身躲开 vt. 回避，逃避 n. 托辞， 伎俩； 躲闪， 躲避
ingredient	n. 组成部分， 原料； 要素
surplus	adj. 过剩的， 多余的 n. 过剩，剩余，盈余
consolidate	v. 巩固， 加强； 联为一体， 合并
correspondence	n. 信件， 函件； 通信， 通信联系； 符合， 一致， 相似
inhibit	vt. 阻止， 妨碍， 抑制
refresh	v. 振作精神， 恢复活力
intimate	adj. 亲密的，个人的 n. 至交， 密友 vt. 暗示， 提示
shove	vi. 用力推，挤 vt. 乱推，挤；乱塞，随意放 n. 猛推
theft	n. 偷窃， 失窃
disclose	vt. 揭露， 泄露， 透露
religion	n. 宗教， 宗教信仰
yacht	n. 快艇， 帆船， 游艇
mistress	n. 情妇； 主妇， 女主人
oxide	n. 氧化物
miniature	adj. 小型的，微小的 n. 微小的模型， 缩影； 微型画， 微型人物像
clan	n. 宗族， 家族
economical	adj. 节约的； 经济学的
prosperous	adj. 繁荣的， 兴旺的
polish	vt. 磨光；修改，润色，使优美 n. 擦光剂
reassess	vt. 再评价
cabinet	n. 橱， 柜； 内阁
optical	adj. 眼的， 视觉的； 光学的
evoke	vt. 唤起， 引起， 使人想起
insurance	n. 保险； 保险费
dazzle	vt. 使眩目，耀；使赞叹不已；使倾倒 n. 耀眼的光； 令人赞叹的东西
principle	n. 原则， 原理， 道义； 基本信念， 信条
thigh	n. 大腿
tedious	adj. 冗长乏味的， 沉闷的
tilt	v. 倾斜，倾侧 n. 倾斜， 倾侧
inferiority	n. 自卑； 次等
participant	n. 参加者， 参与者
initiate	vt. 开始， 创造， 发起； 使初步了解； 接纳， 让…加入 n. 新加入组织的人
domestic	adj. 本国的； 家庭的； 驯养的
glare	vi. 怒目而视；发射强光，发出刺眼的光线 n. 强光； 怒视， 瞪眼； 炫耀， 张扬
irrigation	n. 灌溉
compile	vt. 汇编； 编制， 编纂
vitality	n. 活力； 生机， 元气
locomotive	n. 机车
tile	n. 瓦，瓷砖 vt. 铺瓦于， 贴瓷砖于
donation	n. 捐款， 捐赠物； 捐赠， 赠送
immense	adj. 广大的， 巨大的； 无限的
inherent	adj. 内在的； 固有的， 生来就有的
stability	n. 稳定， 稳固
budget	v. 规划，安排；编预算 adj. 低廉的， 收费公道的 n. 预算，预算拨款
radiate	v. 发出， 辐射； 流露， 显示
given	adj. 规定的，特定的；假设的，已知的；有癖好的，有倾向的 prep. 考虑到
perish	vi. 丧生， 毁灭， 消亡； 失去弹性， 老化
pastime	n. 消遣， 娱乐
ultimate	adj. 最后的，最终的 n. 终极， 顶点
adapt	vt. 使适应； 改编
prosecute	vi. 起诉， 告发 vt. 对…提起公诉，告发，检举；继续从事
batch	n. 一批， 一组， 一群； 一批生产量
merit	n. 长处，优点；价值；功劳，成绩 vt. 值得， 应受
verbal	adj. 口头的； 用言辞的， 用文字的； 动词的
solicitor	n. 初级律师， 事务律师
intrinsic	adj. 固有的； 本质的； 内在的
proximity	n. 接近， 邻近
luminous	adj. 发光的， 发亮的； 光明的
lash	v. 将系牢；鞭打，抽打；猛烈打击；猛烈抨击，严厉斥责 n. 鞭打； 假睫毛； 鞭梢
receipt	n. 发票， 收据； 收入， 进款； 收到， 接到
assume	vt. 假定， 假设； 臆断； 承担， 担任； 呈现
predestine	vt. 预先确定； 注定
chant	vt. 反复有节奏地喊叫；吟诵，咏唱 n. 反复有节奏的喊叫； 赞美诗， 圣歌
destiny	n. 命运； 定数， 天命
capsule	n. 胶囊； 航天舱， 密封舱
concept	n. 概念， 观念； 设想
resistant	adj. 抵抗的； 抗…的， 耐…的
ozone	n. 臭氧
indefinite	adj. 无限期的； 模糊的， 不确定的
disaster	n. 灾难， 灾祸， 天灾； 彻底的失败
ecology	n. 生态； 生态学
minimal	adj. 最小的， 最低限度的
cocktail	n. 鸡尾酒； 餐前开胃小吃； 混合物
enhance	vt. 提高， 增加， 加强
convention	n. 习俗， 惯例； 公约； 会议
disease	n. 病， 疾病； 不健全， 弊端
calcium	n. 钙
notwithstanding	adv. 尽管
suspicion	n. 怀疑， 疑心， 猜疑； 一点儿， 少量
purchase	vt. 买，购买 n. 购买； 购买的物品
refusal	n. 拒绝
disposable	adj. 可任意使用的 n. 一次性物品， 不回收物品
bypass	n. 旁道，迂回道 vt. 绕过， 绕…走； 越过， 置…于不顾
silicon	n. 硅
clarity	n. 清楚， 明晰
fund	n. 资金，基金；存款 vt. 为…提供资金
typical	adj. 典型的， 有代表性的
recipient	n. 接受者， 接收者
commonwealth	n. [C-]英联邦； 联邦， 联合体
watt	n. 瓦
buzz	vi. 发出嗡嗡声；忙乱，急行；发出嘈杂的谈话声 n. 嗡嗡声； 嘈杂的谈话声
finance	n. 财政，金融；财源，财务情况 vt. 为…提供资金
incur	vt. 招致， 引起； 遭受
notorious	adj. 臭名昭著的， 声名狼藉的
assassination	n. 刺杀， 暗杀
infant	adj. 婴儿的， 幼稚的 n. 婴儿
gland	n. 腺
premise	n. 房屋和地基， 经营场址； 前提， 假设
circus	n. 马戏， 马戏团； 喧闹的场面； 环形广场
controversial	adj. 引起争论的， 有争议的
attain	vt. 达到， 获得； 完成
deprive	vt. 剥夺， 使丧失
tenant	n. 房客， 佃户
resultant	adj. 作为结果的， 因而发生的
pest	n. 有害生物， 害虫； 讨厌的人
pedal	vi. 踩踏板，骑车 n. 踏板，踏脚 vt. 脚蹬， 踩动…的踏板
batter	v. 连续猛击 n. 面糊
heritage	n. 遗产； 继承物； 传统
supreme	adj. 最高的， 最大的； 极度的， 最重要的
hostage	n. 人质
priority	n. 优先， 重点； 优先考虑的事
slope	v. 倾斜 n. 倾斜，斜面
inlet	n. 小湾， 水湾； 进口， 入口
metallic	adj. 金属的， 金属制的； 有金属特性的， 像金属的
shuttle	vi. 穿梭般来回 n. 短程穿梭运行的飞机；航天飞机；梭子 vt. 短程穿梭运送
regenerate	vi. 新生， 再生， 起革新作用 vt. 使新生，重建，改革，革新
allocate	vt. 分配； 分派， 把…拨给
latent	adj. 潜在的， 隐伏的， 不易察觉的
terrific	adj. 极妙的； 极大的； 令人恐惧的
standpoint	n. 立场， 观点
primary	adj. 首要的， 主要的； 基本的； 最初的， 初级的
pirate	n. 非法盗印者，侵犯版权者；海盗 vt. 盗用， 非法盗印
stubborn	adj. 顽固的， 执拗的， 倔强的； 难对付的， 难于克服的
formulate	vt. 构想出， 规划； 系统地阐述
consume	vi. 消灭， 毁灭 vt. 消费；吃完，喝光
dome	n. 圆屋顶， 穹顶
layer	n. 层， 层次
alien	adj. 外国的，外国人的；陌生的；性质不同的，不相容的 n. 外国人， 外侨； 外星人
competence	n. 能力， 胜任， 称职
fuse	v. 熔合， 合并； 因保险丝熔断而中断工作 n. 保险丝，熔丝；导火线
elite	n. [总称] 上层人士， 掌权人物， 实力集团； [总称]出类拔萃的人， 精英
premium	adj. 高级的，优质的；售价高的 n. 保险金；额外费用，加付款；奖品，赠品；额外津贴
ornament	n. 装饰品，点缀品；装饰，点缀 vt. 装饰， 点缀， 美化
assure	vt. 使确信； 确保， 向…保证
pretext	n. 借口， 托辞
ivory	n. 象牙； 象牙色， 乳白色
theme	n. 主题， 题目
consult	vt. 请教； 查阅； 商议
solidarity	n. 团结一致
tumble	vi. 跌倒，摔下，滚下；翻滚；暴跌；不由自主地卷入 n. 跌倒， 摔倒
gracious	adj. 亲切的，和蔼的；优美的；雅致的，雍容华贵的 int. 天哪!
smash	vi. 猛撞，猛冲 vt. 使粉碎，使打烂；狠打，猛击；使破灭，使失败 n. 破碎； 猛击， 猛撞； 轰动的演出， 巨大的成功
merely	adv. 仅仅， 只不过
appropriation	n. 据为己有， 占有； 挪用； 拨款
contradiction	n. 矛盾， 不一致； 否认， 反驳
wealth	n. 财富； 财产； 丰富
henceforth	adv. 从今以后， 从此以后
wallet	n. 皮夹子
survive	vi. 活下来，继续存在；幸免于 vt. 从中挺过来； 从…逃出； 比…活得长
desire	vt. 想要，渴望 n. 愿望， 欲望
initial	adj. 最初的，开始的 n. 首字母
efficient	adj. 效率高的； 有能力的
murmur	n&v. 小声说； 小声抱怨， 咕哝； 发出连续而低沉的声音
fury	n. 狂怒， 暴怒； 狂暴， 狂烈
unify	vt. 使联合， 统一； 使相同， 使一致
muddy	adj. 泥泞的，沾满烂泥的；灰暗的，暗淡的；模糊的，糊涂的 vt. 使沾上烂泥； 使显得扑朔迷离
hound	n. 猎犬 vt. 追逼， 烦恼， 纠缠
consistent	adj. 坚持的， 一贯的； 一致的， 符合的
dole	n. 救济，救济金 vt. 发放， 发给
reverse	vi. 反向，倒转 adj. 反向的； 相反的； 颠倒的 vt. 撤销，废除；使完全相反，彻底转变；使反转，使次序颠倒 n. 相反情况，对立面；反面，背面，后面；损失，倒退
barren	adj. 贫瘠的， 荒芜的； 不结果实的， 不育的； 无益的， 没有结果的
eternal	adj. 永久的， 永世的； 无休止的； 永恒的， 永不改变的
permanent	adj. 永久的， 固定的
foster	adj. 收养的 vt. 收养，养育；培养，促进
barely	adv. 仅仅， 只不过， 几乎不
prevalent	adj. 流行的， 普遍的
cling	vi. 紧紧抓住； 黏着， 挨近； 依附， 依恋； 坚持， 墨守， 忠实于
incidence	n. 发生率
clip	n. 夹子，回形针，别针；弹夹，弹仓；剪，修剪；剪报，电影片断 vt. 夹住， 扣住； 剪， 修剪
beam	v. 面露喜色； 定向发出， 播送 n. 梁，横梁；束，柱；笑容，喜色
compact	adj. 紧凑的，小巧的；坚实的 vt. 把…压实，使坚实['kɔmpækt] n. 契约， 合同
alliance	n. 结盟； 联盟
invaluable	adj. 非常宝贵的， 极为贵重的， 无价的
fiction	n. 小说； 虚构， 杜撰
doom	vt. 注定，命定 n. 厄运， 劫数
cucumber	n. 黄瓜
aviation	n. 航空， 航空学； 飞机制造业
pessimistic	adj. 悲观的
denote	vt. 意思是； 表示， 是…的标志
emphasis	n. 强调； 重视； 重要性
interrupt	v. 打断， 中止； 打扰
propagate	v. 繁殖， 增殖； 传播， 宣传， 普及
feasible	adj. 可行的， 可能的
majesty	n. 陛下； 雄伟， 壮丽； 庄严
flatter	vt. 向…谄媚， 奉承； 使满意， 使感到荣幸； 使显得好看， 使显得突出
potential	adj. 潜在的，可能的 n. 潜力， 潜能
necessitate	vt. 成为必要， 需要
orthodox	adj. 传统的； 正统的， 正宗的
accustomed	adj. 惯常的， 习惯的
combination	n. 结合， 联合； 化合
obtain	vi. 通用， 流行； 存在 vt. 获得
statesman	n. 国务活动家， 政治家
tack	n. 平头钉，大头钉；行动方向，方针 vt. 用平头钉钉； 附加， 增补
gross	adj. 总的； 严重的； 粗俗的； 臃肿的
lounge	vi. 倚，躺；闲逛，闲荡 n. 休息厅， 休息室
porch	n. 门廊
workshop	n. 车间， 工场； 专题讨论会
format	n. 设计，安排；格式，样式，版式 vt. 使格式化
sacrifice	n&v. 牺牲， 舍身； 献祭， 供奉； 祭品
illegal	adj. 不合法的， 非法的
corps	n. 队， 部队； 一组
eclipse	n. 食；消失，黯然失色 vt. 食， 遮掩光； 使暗淡， 使失色， 使相形见绌
formal	adj. 正式的； 礼仪上的
correlate	vi. 相关， 关联 vt. 使相互关联
soar	vi. 猛增， 剧增； 高飞， 升腾； 高涨； 高耸， 屹立
commute	vi. 乘公交车上下班，经常乘车往返于两地 vt. 减； 折合， 折偿； 上下班交通
sustain	vt. 保持， 使持续下去； 供养， 维持； 支持， 支撑； 经受， 遭受
critical	adj. 决定性的； 批评的
shepherd	n. 牧羊人，羊倌 vt. 带领， 引导
outcry	n. 大声疾呼， 呐喊； 强烈抗议
radiant	adj. 容光焕发的， 喜形于色的； 光芒四射的， 光辉灿烂的； 辐射的
principal	adj. 最重要的，主要的 n. 负责人， 校长； 资本， 本金； 主要演员， 主角
exceedingly	adv. 极端地， 非常
uphold	vt. 支持， 维护
exotic	adj. 外来的， 异国情调的； 奇异的
relief	n. 轻松， 宽慰； 缓解， 减轻， 解除； 使得到调剂； 接替， 替下
boycott	n&vt. 抵制， 拒绝参与
dimension	n. 尺寸， 尺度， 面积； 方面， 特点； 面积， 规模
deserve	vt. 应受， 值得
process	n. 过程；制作方法；程序 vt. 加工， 办理
revenge	n. 报复，报仇 vt. 为…报仇， 报…之仇
restore	vt. 恢复， 使恢复； 修复， 整修； 归还， 交还
subscribe	vi. 订阅，订购；同意，赞成 vt. 捐助， 赞助
distill	vt. 蒸馏， 用蒸馏法提取； 吸取， 提炼
alternative	adj. 两者选一的， 供选择的； 另类的 n. 替换物，选择；选择的自由
concentration	n. 集中； 专注， 专心； 浓缩； 浓度
velocity	n. 速度， 速率
encounter	vt. 遭遇，遇到 n. 遭遇
fellowship	n. 伙伴关系， 交情， 友谊； 团体， 协会， 联谊会； 奖学金， 研究员职位
colleague	n. 同事， 同僚
approve	vi. 赞成， 称许 vt. 赞成，称许；批准
interaction	n. 相互作用
pedestrian	n. 步行者， 行人
interfere	vi. 干涉， 干预， 妨碍
apartment	n. 一套公寓房间
account	vi. 说明…的原因； 占… n. 记述；解释；账目
fitting	adj. 适合的， 恰当的 n. 设备，家具，日用器具；配件，附件，零件；试穿，试衣
stack	n. 堆，垛 vt. 堆积， 堆放于
radioactive	adj. 放射性的， 有辐射能的
resent	vt. 对…表示愤恨， 怨恨
stride	vi. 大踏步走 n. 大步； 步法， 步态； 进展， 进步
ambiguous	adj. 引起歧义的， 模棱两可的， 含糊不清的
impulsive	adj. 冲动的
qualitative	adj. 性质的， 定性的
diverse	adj. 不一样的， 相异的； 多种多样的
crisp	adj. 脆的，鲜脆的；挺括的；清新的，干冷的；简明扼要的，利落的 n. 油炸土豆片
prime	adj. 首要的；最好的 n. 青春；全盛时期 vt. 使准备好
intellect	n. 智力， 理解力； 才智非凡的人
preference	n. 喜爱， 偏爱； 优先； 偏爱的事物
mild	adj. 温柔的； 温暖的； 轻微的
loyal	adj. 忠诚的， 忠心的
impact	v. 影响， 作用， 冲击 n. [Im'pækt]
paralysis	n. 麻痹， 瘫痪， 中风； 无能， 无力
court	n. 法院， 法庭； 庭院； 宫廷； 球场
chapel	n. 小教堂， 祈祷室
distort	vi. 变形 vt. 歪曲，曲解；扭曲，使变形
subsidiary	adj. 辅助的，次要的，附设的 n. 子公司， 附属机构
venture	vi. 冒险； 大胆行事 n. 风险投资，风险项目 vt. 拿…冒险；敢于
discern	vt. 看出， 察觉出； 识别， 认出
enthusiasm	n. 热情， 热心， 热忱； 巨大兴趣
flexible	adj. 易弯曲的； 灵活的
domain	n. 领域， 范围； 领地， 势力范围
census	n. 人口普查， 统计
corpse	n. 死尸， 尸体
willful	adj. 故意的， 特意的
attitude	n. 态度， 看法； 姿势
relative	adj. 有关系的，相对的 n. 亲属， 亲戚
compare	vt. 比较， 对照； 把…比作
depict	vt. 描绘， 描述
hop	vi. 单足跳跃，单足跳行；齐足跳跃，齐足跳行 vt. 跳上 n. 蹦跳； 短程航行
characteristic	adj. 特有的，典型的 n. 特性
involvement	n. 连累； 包含
pave	vt. 铺， 铺筑
integral	adj. 构成整体所必需的， 基本的
lubricate	vt. 使润滑
comet	n. 彗星
deadline	n. 最后期限
bully	n. 恃强欺弱者 vt. 威吓， 欺负
chip	n. 屑片， 碎片； 炸土豆条； 集成电路片， 集成块； 缺口， 瑕疵
medieval	adj. 中世纪的； 中古的
tanker	n. 油轮
involve	vt. 使卷入， 牵涉； 包含， 含有
pistol	n. 手枪
assemble	vi. 集合，召集 vt. 集合， 聚集； 装配
watertight	adj. 不透水的， 防水的； 严密的， 无懈可击的
transition	n. 过渡， 转变
repel	vt. 使厌恶； 击退， 逐回， 驱除； 排斥
mutter	n&v. 轻声低语； 小声抱怨
series	n. 一系列， 连续； 丛书， 连续剧
complicated	adj. 复杂的， 难懂的
junk	n. 废旧物品，破烂 vt. 丢弃， 废弃
maximum	adj. 最大的； 最高的； 顶点的 n. 最大量；顶点
thrive	vi. 兴旺， 繁荣， 旺盛
imaginative	adj. 富有想象力的， 爱想象的
penguin	n. 企鹅
represent	vt. 作为…的代表， 表示， 象征； 描绘， 表现
masterpiece	n. 杰作
compete	vi. 比赛， 竞争， 对抗
tolerant	adj. 宽容的， 容忍的
dispatch	vt. 派遣，调遣，发送 n. 急件， 快信； 新闻报道； 派遣， 调遣
emergency	n. 紧急情况， 突然事件
dim	adj. 昏暗的，朦胧的；模糊不清的 v. 变暗淡
paralyze	vt. 使瘫痪， 使麻痹； 使丧失作用； 使惊愕， 使呆若木鸡
interpersonal	adj. 人与人之间的， 关于人与人之间关系的
exemplary	adj. 可作楷模的， 典范的
faculty	n. 才能， 能力； 系， 科； 全体教员
layoff	n. 解雇； 裁员； 歇工期， 停工期
wretched	adj. 极不愉快的， 难受的， 可怜的； 令人苦恼的， 讨厌的； 拙劣的
absurd	adj. 荒谬的， 荒唐的
modesty	n. 谦虚
considerate	adj. 考虑周到的， 体贴的， 体谅的
glamor	n. 魅力， 诱惑力
clue	n. 线索， 暗示， 提示
bracket	n. 括号；等级段，档次；壁架，托架 vt. 把…置于括号内； 把…归入同一类
legal	adj. 法律的； 合法的
midst	n. 中部； 中间； 当中
trait	n. 特征， 特点， 特性
radius	n. 半径， 半径范围
disintegration	n. 破裂， 分裂； 瓦解
signal	adj. 显著的， 重大的 n. 信号，暗号；标志，表示 vt. 发信号；标志着
impair	vt. 损害， 损伤； 削弱
dolphin	n. 海豚
sightseeing	n. 观光， 游览
stray	vi. 走失，迷路；分心，走神；离题 adj. 迷路的，走失的；孤立的，零星的 n. 走失的家畜
planet	n. 行星
exhaust	vt. 使筋疲力尽，用尽；详尽论述 n. 排气装置； 废气
thereafter	adv. 之后， 以后
soluble	adj. 可溶的； 可解决的
feast	vi. 尽情地吃， 宴饮； 参加宴会 n. 盛宴，筵席；节日
vision	n. 想象力， 梦幻； 视力， 视觉
accompany	v. 陪同， 伴随； 为…伴奏
armor	n. 盔甲， 装甲； 保护物
acceptance	n. 接受， 承认； 容忍
beneficial	adj. 有利的， 有益的
paradise	n. 天堂， 乐园
tackle	vt. 对付，处理；与…交涉；阻截，擒抱 n. 阻截， 擒抱； 用具， 钓具； 辘轳， 滑车
reckon	vt. 认为， 估计； 指望， 盼望； 测算， 测量
confusion	n. 困惑， 糊涂； 混淆； 骚乱
distract	vt. 转移， 使分心
hinge	vi. 以…为转移 n. 铰链 vt. 装铰链
virtual	adj. 实质上的， 事实上的， 实际上的
squeeze	v. 压榨，挤 n. 榨取， 勒索
blank	adj. 空白的；茫然的，无表情的 n. 空白； 空白表格
additional	adj. 附加的， 追加的
worthy	adj. 有价值的， 值得的
primarily	adv. 首先， 主要地
telecommunications	n. 通信， 电信
ferry	n. 渡船 vt. 渡运
ignore	vt. 不顾， 不理； 忽视
hemisphere	n. 地球的半球； 大脑半球
reception	n. 招待会， 欢迎会； 接受， 接纳； 接待， 迎接； 接收效果
applaud	vi. 鼓掌，喝彩 vt. 向…鼓掌， 向…喝彩； 称赞， 赞许
outward	adv. 向外地 adj. 外面的，外表的
lunar	adj. 月的， 月球的
poetry	n. 诗， 诗歌， 诗集
jury	n. 陪审团， 评奖团
arrogant	adj. 傲慢的， 自大的
idiot	n. 白痴； 傻子， 笨蛋
relay	n. 接力赛；中继转播 vt. 传送， 传达， 转述； 中继转播
priest	n. 神父， 牧师
monitor	n. 班长；监视器，检测器；显示器 vt. 监听， 检测
solo	adv. 以独力，单独地 adj. 单独的，单独进行的 n. 独奏， 独唱， 独舞
tuition	n. 教学， 讲授， 指导； 学费
permeate	v. 弥漫， 遍布， 散布； 渗入， 渗透
utopian	adj. 乌托邦的； 理想的
schedule	n. 时刻表，日程安排表；清单，明细表 vt. 安排， 排定
tame	adj. 驯服的，顺从的；沉闷的，乏味的 vt. 制服， 控制并利用； 驯化， 驯服
adjoin	vt. 贴近； 与…毗连
universe	n. 宇宙， 世界； 领域， 范围
inherit	vt. 继承
overwhelming	adj. 势不可挡的， 压倒的； 巨大的
interpret	v. 解释， 说明； 口译
peculiar	adj. 奇怪的， 古怪的； 特有的
idiom	n. 习语， 成语； 风格， 特色
diplomat	n. 外交官， 外交家； 有交际手腕的人， 圆滑的人
hug	vi. 紧抱在一起，互相拥抱 vt. 拥抱；紧抱，怀抱 n. 紧抱， 热烈拥抱
grant	n. 授给物 vt. 授予， 给予
muscular	adj. 肌肉发达的， 强壮的； 肌肉的
sparkle	vi. 发光，闪耀，闪烁；活跃，焕发 n. 闪光， 闪耀， 闪烁； 活力， 生气
hum	vi. 哼曲子；发嗡嗡声 vt. 哼 n. 嗡嗡声， 营营声， 嘈杂声
staple	adj. 主要的； 经常需要的 n. 订书钉，U形钉；主食；主要产品 vt. 用订书钉订
discount	n. 折扣 vt. 把…打折扣； 不全信； 漠视， 低估
construct	vt. 建造； 构思 n. 建筑物； 构想； 观念
royalty	n. 王族； 版税
convert	vt. 转变， 转化； 改变
attempt	vt. 尝试， 试图， 努力
rivalry	n. 竞争， 竞赛； 对抗
relish	vt. 享受，从…中获得乐趣 n. 享受， 滋味， 乐趣； 调味品
fluorescent	adj. 荧光的， 发荧光的
division	n. 分， 分割； 部门， 科， 处； 除法
superficial	adj. 表面的， 肤浅的
executive	adj. 执行的；行政的 n. 执行者
navigation	n. 航行， 航海， 航空； 导航， 领航
melt	v. 融化； 溶化； 消散
stalk	vi. 高视阔步地走 n. 茎，梗，柄 vt. 悄悄地跟踪
whereas	conj. 然而， 但是， 尽管
pitch	v. 投掷， 使猛然倒下； 表达， 定下特定程度； 定调； 架设， 搭， 扎； 颠簸 n. 球场；程度，强度；高度，高音；沥青
casualty	n. 伤亡人员， 死伤者； 受害人， 损失的东西
gauge	n. 测量仪表；厚度，直径；规格、尺寸 vt. 估计， 判断； 计量， 度量
oriental	adj. 东方的； 东方人的； 东方文化的
electrical	adj. 电的； 电气科学的
stall	v. 熄火； 拖延， 推迟 n. 货摊；
protest	v. ['prəutest] n. 抗议， 反对
sensitive	adj. 敏感的， 灵敏的； 神经过敏的， 容易生气的； 易受伤害的
classification	n. 分类， 分级， 分类法； 类别， 级别
brew	vi. 冲泡；酝酿，行将发生 vt. 酿造；冲泡 n. 冲泡的饮料
vacant	adj. 空的， 未被占用的； 空缺的； 茫然的， 空虚的
menace	n. 具有危险性的人；威胁，威吓 vt. 威胁， 威吓
afford	vt. 担负得起； 提供
invalid	adj. 无效的，作废的；无可靠根据的，站不住脚的 n. 病弱者， 残疾者
curse	v. 诅咒，咒骂，天谴 n. 祸害， 祸根； 咒骂， 诅咒， 咒语
legitimate	adj. 合情合理的；合理的，法律认可的 vt. 使合法
appease	vt. 平息， 抚慰； 姑息
sieve	n. 筛子，漏勺 vt. 筛， 滤
whereby	adv. 凭此； 借以； 由于
evaluate	vt. 评价， 估…的价
status	n. 地位， 身份； 情形， 状况
machinery	n. 机器， 机械
shield	n. 防护物，护罩；盾 vt. 保护， 防护
skip	vi. 跳，蹦跳；跳绳 vt. 跳过，略过，漏过 n. 跳， 蹦跳
instantaneous	adj. 瞬间的， 即刻的
phenomenon	n. 现象， 迹象； 非凡的人
quarterly	adv. 按季度，一季一次 adj. 季度的，每季一次的 n. 季刊
notify	vt. 通知， 告知； 报告
bibliography	n. 参考书目； 书目
stream	v. 流出， 涌出 n. 河，溪流；一股，一串
recur	vi. 再发生， 重现
coalition	n. 结合体， 同盟； 结合， 联合
generalize	vt. 概括， 归纳， 推断； 普及
accumulate	v. 积累， 堆积
crime	n. 罪， 罪行， 犯罪
dwarf	adj. 矮小的，发育不全的 n. 矮子，侏儒 vt. 使显得矮小， 使相形见绌
heave	v. 举起，提起；扔；发出；起伏，隆起；呕吐，恶心 n. 举起， 升降
leisure	n. 空闲时间； 悠闲
nourish	vt. 养育， 喂养， 滋养； 怀有， 增强
grease	n. 油脂；润滑脂，润滑油 vt. 用油脂涂， 给…加润滑油
allege	vt. 断言， 宣称， 硬说
pilgrim	n. 朝圣者
trigger	n. 扳机；引起反应的行动 vt. 触发， 引起
assimilate	vi. 被吸收， 被消化； 被同化 vt. 吸收，消化；使同化
positive	adj. 确实的， 明确的； 积极的， 肯定的
segregate	vt. 使隔离， 使分开
addict	n. 有瘾的人； 入迷的人 vt. 使成瘾， 使入迷
prospect	n. 前景， 前途， 可能性； 景象， 景色； 可能成为主顾的人， 有希望的候选人
withhold	vt. 拒绝， 不给； 抑制， 制止
comparable	adj. 可比较的； 类似的； 比得上的
discreet	adj. 谨慎的， 慎重的， 审慎的
specialize	vi. 专攻，专门研究 vt. 使适应特殊目的， 使专用于
instance	n. 例子， 实例， 事例
presumably	adv. 大概， 可能， 据推测
bonus	n. 奖金， 红利； 额外给予的东西
recognition	n. 认出， 识别； 承认， 确认， 认可； 赏识， 表彰， 报偿
banquet	n. 宴会， 盛宴
thrill	v. 非常兴奋， 非常激动 n. 兴奋，激动；引起激动的事物
aisle	n. 过道， 通道
convene	vi. 开会，集合 vt. 召集
arrangement	n. 整理， 排列； 安排； 准备工作
revenue	n. 收入， 收益； 税收， 岁入
solution	n. 解决； 解决办法； 溶液
monopoly	n. 垄断， 专卖； 垄断物， 垄断商品， 专卖商品
opponent	n. 对手； 敌手， 对抗者
accelerate	vt. 使加快， 使增速
supplementary	adj. 增补的， 补充的
grain	n. 谷物， 谷粒， 颗粒； 少量， 微量
credit	n. 信贷，赊欠；赞扬，荣誉；学分；信任 vt. 相信； 把…记入贷方； 把…归于
oxygen	n. 氧， 氧气
intensive	adj. 加强的； 精耕细作的
alter	vt. 改变， 变更， 变动
combine	v. 结合，联合；化合 n. 联合企业； 联合收割机
ideal	adj. 理想的，观念的，空想的 n. 理想， 理想的东西
occur	vi. 发生， 出现， 存在； 被想起， 被想到
illustrate	vt. 说明
hose	n. 软管，水龙带 vt. 用软管淋浇
definitive	adj. 最可靠的， 权威性的； 决定性的
streak	vi. 飞跑，疾驶 n. 条纹，条痕；个性特征；一阵子，一连串 vt. 在…上加条纹
pressure	n. 压，压强；压迫 vt. 对…施加压力， 迫使， 说服
dentist	n. 牙科医生
brood	vi. 沉思，考虑；孵蛋 n. 一窝； 全体孩子
literacy	n. 识字， 有文化， 读写能力
originate	vi. 起源于，来自，产生 vt. 创造， 创始， 开创
specialist	n. 专家
background	n. 出身背景， 经历； 背景资料； 背景， 底子
millionaire	n. 百万富翁， 大富翁
transit	n. 运输， 载运
adolescent	adj. 青春期的； 青少年的 n. 青少年
nonetheless	adv. 尽管如此， 依然， 然而
dispose	v. 去掉， 销毁； 处理， 解决； 使倾向于
petty	adj. 小的， 琐碎的； 不重要的； 气量小的， 心胸狭窄的
glow	vi. 发光； 燃烧 n. 白热光；脸红；激情
sentiment	n. 意见， 观点； 感情， 情绪
differentiation	n. 区别
constitution	n. 宪法， 章程； 组成； 设立
patent	adj. 专利的，受专利保护的 n. 专利，专利权 vt. 得到…的专利权
cocaine	n. 可卡因， 古柯碱
groove	n. 沟， 槽
abundance	n. 大量， 丰富， 充足
racket	n. 喧嚷， 吵闹； 敲诈， 勒索， 诈骗； 球拍
conceive	vi. 构想出， 设想； 怀孕 vt. 想出，认为；怀
sour	adj. 酸的；馊的，酸味的；脾气坏的 v. 变酸， 变馊； 变得乖戾
transform	vt. 使改观， 改革； 变换， 把…转换成
napkin	n. 餐巾
reckless	adj. 鲁莽的， 不考虑后果的
paradox	n. 似乎矛盾而正确的说法； 自相矛盾的人
magnitude	n. 重要性， 重大； 巨大， 广大
justification	n. 正当的理由， 借口
genuine	adj. 真的， 真正的； 真诚的
execution	n. 死刑； 实行， 执行， 履行； 演奏， 表演
immune	adj. 免疫的， 有免疫力的， 不受影响的； 免除的， 豁免的
brochure	n. 小册子
stern	adj. 严厉的，严格的，严峻的 n. 船尾
rotary	adj. 旋转的， 转动的
compound	adj. 复合的，化合的 n. 化合物，复合物；复合词 vt. 使恶化， 加重； 使化合， 使合成
dub	vt. 给…起绰号， 把…称为； 为配音， 译制
masculine	adj. 男性的， 男子的； 男子气的
extraordinary	adj. 非同寻常的， 特别的
witness	n. 证据；目击者，证人 vt. 目击； 为…作证， 证明
conventional	adj. 普通的； 习惯的， 常规的； 因循守旧的
regulation	n. 规章， 规则； 管理， 控制， 调节
conform	vi. 遵守， 适应； 顺从； 相似， 一致， 符合
circulation	n. 循环， 流通； 流传， 传播， 发行； 发行量； 流通
authentic	adj. 真的， 真正的； 可靠的， 可信的
mere	adj. 仅仅的， 纯粹的
accommodation	n. 住处， 膳宿
evident	adj. 明显的， 明白的
suburb	n. 郊区， 郊外， 近郊
pumpkin	n. 南瓜
annoy	vt. 使恼怒； 打搅
profess	vt. 表示， 承认； 宣称信仰
psychological	adj. 心理的
credible	adj. 可信的， 可靠的
empirical	adj. 以经验为依据的， 经验主义的， 经验的
commit	vt. 犯， 干； 使承诺； 把…托付给； 调拨…供使用， 拨出
curb	vt. 控制，约束 n. 控制， 约束； 路缘
crash	vi. 倒下，坠落；发出撞击声；垮台，破产 vt. 碰撞，砸碎；冲，闯 n. 碰撞； 破裂声
character	n. 性格， 特性； 性质； 人物， 角色； 符号， 字
reflect	v. 反映， 显示； 反射， 映现； 深思， 考虑， 反省
outfit	n. 全套服装； 一组人； 全套装备， 全套工具
contribution	n. 贡献； 促成作用； 捐款， 捐献物； 稿件
ongoing	adj. 持续的， 继续的
massacre	vt. 大规模屠杀，残杀；彻底击败 n. 大屠杀， 残杀； 惨败
reassure	vt. 使放心
bang	v. 猛击， 猛撞； 发出砰的一声， 砰砰地响； 砰地敲 n. 巨响；枪声；猛击
magnetic	adj. 磁的； 有吸引力的
cholesterol	n. 胆固醇
orbit	n. 轨道 vt. 作轨道运行
band	n. 乐队；群，伙；带；条纹；波段 vt. 用带绑扎
negligible	adj. 可忽略不计的， 微不足道的
setback	n. 挫折， 倒退， 失败
resident	adj. 居住的， 定居的； 住校的， 住院的 n. 居民，定居者；住院医生
symbolic	adj. 符号的； 象征性的
distinguish	vt. 区别， 辨别， 识别； 使杰出； 使著名
mall	n. 购物中心
module	n. 组件， 模块， 模件； 舱
howl	n&vi. 嗥叫； 呼啸； 吼叫， 哀号
execute	vt. 将…处死； 实施
substantial	adj. 可观的， 大量的； 物质的， 坚固的； 实质的， 真实的
benefit	vi. 得益 n. 利益，恩惠；救济金，保险金，津贴 vt. 有益于
booth	n. 小房间， 公用电话亭， 岗亭； 售货棚， 货摊
enthusiastic	adj. 满腔热情的， 热心的， 极感兴趣的
disastrous	adj. 灾难性的， 造成灾害的； 极坏的， 很糟的
unique	adj. 唯一的， 独一无二的； 极不寻常的， 极好的
processing	n. 处理
boost	v. 推动， 促进， 激励； 替…做广告， 宣扬； 提高， 使增长 n. 提高，增长；推动，激励
impulse	n. 冲动， 一时的念头； 推动， 驱使； 脉冲
sober	adj. 未醉的，有节制的；严肃的，持重的；素淡的，暗淡的 v. 醒酒， 清醒
crystallize	v. 结晶； 变得清晰而明确； 使具体化
religious	adj. 宗教的； 笃信宗教的， 虔诚的
infectious	adj. 传染的， 有传染性的； 有感染力的
shelter	v. 掩蔽， 躲避， 庇护 n. 掩蔽处，躲避处；掩蔽，保护
prominent	adj. 突出的， 杰出的； 突起的； 凸出的
expel	vt. 把…除名， 把…开除； 驱逐， 赶走， 放逐； 排出， 喷出
superiority	n. 优越， 优等
outset	n. 开始， 开端
latitude	n. 纬度； 纬度地区； 回旋余地， 自由
scan	vt. 细看，审视，浏览 n. 扫描
association	n. 协会， 团体； 联合， 交往
fundamental	adj. 基础的，基本的 n. 基本原则
eliminate	vt. 消灭， 消除， 排除； 淘汰
cute	adj. 漂亮的， 娇小可爱的； 聪明伶俐的， 精明的
entitle	vt. 给…权利； 给题名
outline	n. 提纲，要点；外形；略图 vt. 概述； 描…的外形
partition	n. 分隔物，隔墙；分割，划分 vt. 隔开； 分割， 瓜分
nominal	adj. 名义上的， 有名无实的； 很少的， 象征性的； 名词性的
excess	adj. 过量的， 额外的 n. 超越，过量，过度['3ks3s]
glance	vi. 看一下 n. 一瞥
perspective	n. 视角， 观点； 远景， 景观； 透视画法， 透视图
galaxy	n. 星系； 银河系， 银河； 一群
equality	n. 等同； 平等； 相等
destruction	n. 破坏， 毁灭； 消灭
rebellion	n. 反叛， 反抗
expression	n. 词语； 表达， 表情
reaction	n. 反应， 反作用
accordance	n. 一致， 和谐， 符合
weary	vi. 厌烦， 不耐烦 adj. 疲劳的，疲倦的；使人疲劳的，令人厌倦的
appeal	vi. 求助，诉请；要求；有吸引力 vt. 控诉，移交上级法院审理 n. 吸引力； 呼吁； 上诉
swamp	n. 沼泽 vt. 淹没， 浸没； 难倒， 压倒
entrepreneur	n. 企业家
dedicate	vt. 题献词于上； 把献给， 把用于
peninsula	n. 半岛
extensive	adj. 广阔的； 广泛的
residential	adj. 居住的， 住宅的； 寄宿的， 住在住所的
definitely	adv. 一定地， 明确地
stab	n&v. 刺， 戳
abandon	vt. 离弃， 丢弃； 遗弃； 抛弃； 放弃
collaboration	n. 合作， 协作； 勾结
inspire	vt. 鼓舞； 给…以灵感
impart	vt. 告知， 透露； 赋予， 给予
bureaucracy	n. 官僚主义， 官僚作风； 官僚机构； 官僚制度； 官僚
household	adj. 家庭的， 家喻户晓的 n. 家庭，户；家务
glide	n. 滑行， 滑动； 滑翔
adverse	adj. 不利的， 有害的
bulletin	n. 简明新闻， 最新消息； 公告， 布告， 公报； 学报， 期刊
devote	vt. 将…奉献给， 把…专用
junction	n. 联结点， 交叉点， 枢纽
crumble	vi. 崩溃， 瓦解 vt. 弄碎
agent	n. 代理人， 代理商； 政府代表； 动因， 原因； 剂
abortion	n. 流产， 堕胎
salvation	n. 拯救， 解救； 解救措施
instinct	n. 本能； 直觉， 生性
cannon	n. 加农炮， 大炮， 火炮
invest	v. 投资， 投入； 授予
reputation	n. 名誉， 名气， 名声
project	v. 伸出； 投射； 放映 n. 方案， 计划； 课题， 项目； 工程
shrug	n&v. 耸肩
arena	n. 表演场地， 竞技场； 活动场所
independence	n. 独立； 自主； 自立
shrub	n. 灌木
presentation	n. 提供， 显示； 外观， 图像； 授予， 赠送； 报告， 介绍； 表演
nominate	vt. 提名， 任命； 推荐， 指定
loom	vi. 阴森地逼近， 隐现； 即将来临 n. 织布机
stationary	adj. 固定的， 静止不动的
restrain	vt. 阻止， 控制； 抑制， 遏制
awkward	adj. 笨拙的， 尴尬的； 难操纵的， 使用不便的； 不灵巧的
ruin	v. 毁坏 n. 毁灭；废墟
beforehand	adv. 预先， 事先
formidable	adj. 可怕的， 令人敬畏的； 难以克服的， 难对付的
impatient	adj. 不耐烦的， 急躁的； 热切的， 急切的
invert	vt. 使倒转， 使倒置， 使颠倒
cradle	n. 摇篮；策源地，发源地 vt. 轻轻地抱， 捧
discrete	adj. 分离的， 不相关联的
assurance	n. 把握， 信心； 保证， 表示保证的话； 保险
psychiatrist	n. 精神科医生， 精神病专家
squad	n. 班， 小队， 小组
disrupt	vt. 使中断； 扰乱
scar	v. 留下伤痕 n. 伤疤，伤痕；创伤
sergeant	n. 中士， 警官
vital	adj. 生死攸关的， 极其重要的； 生命的， 有生命力的
eccentric	adj. 古怪的，怪癖的，异乎寻常的 n. 古怪的人， 怪癖的人
conflict	vi. 冲突， 抵触 n. 冲突， 抵触； 争论； 战斗， 战争
appliance	n. 用具， 器具， 器械
alloy	n. 合金 vt. 将…铸成合金
delusion	n. 欺骗； 哄骗
mass	adj. 大量的，大规模的 v. 聚集， 集中 n. 众多，大量；团，块，堆；群众；质量
detect	vt. 察觉， 发觉； 侦查出
update	vt. 更新；使现代化 n. 最新信息
renaissance	n. 文艺复兴， 文艺复兴时期； 复兴， 再生
poisonous	adj. 有毒的； 恶毒的
condemn	vt. 谴责， 指责； 判…刑， 宣告…有罪
assistance	n. 协助， 援助
auction	n&vt. 拍卖
propel	vt. 推进， 推动； 激励， 驱使
admit	vi. 承认 vt. 承认，供认；准许…进入
uneven	adj. 不平坦的， 不平滑的； 不一致的， 不相等的
definition	n. 定义， 释义， 定界； 清晰， 鲜明
mansion	n. 大厦， 宅邸
mask	n. 面具，面罩，口罩；伪装 vt. 遮盖， 掩饰
patrol	v. 巡逻，巡查 n. 巡逻， 巡查； 巡逻兵， 巡逻队
nickel	n. 镍； 五分镍币， 五分钱
patron	n. 资助人， 赞助人； 老主顾， 顾客
entail	vt. 使承担； 使成为必要， 需要
inferior	adj. 下等的，劣等的 n. 下级， 下属
apply	vi. 应用，实施，使用；适用；申请，请求 vt. 涂， 敷， 施
propaganda	n. 宣传
overlook	vt. 忽视； 宽恕； 俯瞰
refuge	n. 庇护所， 避难处； 庇护
dramatic	adj. 引人注目的， 激动人心的； 戏剧的
incredible	adj. 不能相信的， 不可信的， 难以置信的； 惊人的
certainty	n. 必然的事， 确定的事实； 确信， 确实
corrode	v. 腐蚀， 侵蚀
spine	n. 脊柱， 脊椎； 刺， 刺毛； 书脊
commend	vt. 称赞， 表扬； 推荐
parasite	n. 寄生生物； 寄生虫
artificial	adj. 人工的， 人为的； 矫揉造作的； 模拟的
deficiency	n. 缺乏， 不足； 缺点， 缺陷
imaginary	adj. 想象中的， 假想的
formula	n. 公式， 式； 原则， 方案； 配方
disgust	n&vt. 厌恶， 憎恶
transcend	vt. 超出， 超越范围
tribute	n. 颂词， 称赞， 礼物； 贡品
mob	n. 暴民，乌合之众 vt. 成群围住， 聚众袭击
subordinate	adj. 下级的，级别低的；次要的，从属的 n. 部属， 下级 vt. 使处于次要地位， 使从属于
trend	vi. 伸向，倾向 n. 倾向
achievement	n. 完成； 成就， 成绩
sturdy	adj. 强壮的， 结实的， 坚固的； 坚定的， 坚强的
desirable	adj. 吸引人的， 可取的
consist	vi. 由…组成； 在于； 一致
reliable	adj. 可靠的， 可依赖的
compatible	adj. 兼容的； 能和睦相处的， 合得来的
incentive	n. 刺激， 鼓励
critic	n. 批评家， 爱挑剔的人
preliminary	adj. 预备的，初步的 n. 初步做法， 起始行为
obstacle	n. 障碍， 障碍物； 妨害
profession	n. 职业； 公开表示
van	n. 大篷车， 运货车
dizzy	adj. 头晕目眩的，眩晕的；头晕的 vt. 令人发晕
resemblance	n. 相似， 形似
exceptional	adj. 优越的， 杰出的； 例外的， 独特的， 异常的
constitute	vt. 组成， 形成； 设立； 任命
cherish	vt. 珍爱， 珍视； 爱护， 抚育； 抱有， 怀有
discrepancy	n. 不符合， 不一致
spectrum	n. 谱， 光谱， 频谱； 范围， 幅度， 系列
convince	vt. 使确信， 使信服， 说服
prolong	vt. 延长， 拉长， 拖延
missionary	n. 传教士
terminate	v. 停止， 终止
valve	n. 阀， 活门； 瓣膜， 活瓣
refund	n. 退款 vt. 退还
remnant	n. 残留部分
internal	adj. 内的， 国内的； 内心的
literary	adj. 文学的； 文人的， 书卷气的
classical	adj. 古典的， 经典的
privilege	n. 特权； 优惠
substitute	n. 代替人，代用品 vt. 用…代替
mortgage	n. 抵押，抵押借款 vt. 抵押
blaze	vi. 熊熊燃烧，着火；发光，放光彩；迸发，爆发 n. 火焰， 烈火； 光辉， 强烈的光； 迸发， 爆发； 灿烂， 炫耀
moreover	adv. 而且， 再者， 此外
scatter	vt. 撒， 散播； 使散开， 驱散
violate	vt. 违反， 违背； 亵渎； 侵犯， 妨碍
federal	adj. 联邦的， 联盟的
verify	vt. 证实， 查证， 证明
excursion	n. 远足， 短途旅行
inaugurate	vt. 开始， 开展； 为…举行就职典礼； 为…举行开幕式， 为…举行落成仪式
undergo	vt. 经历； 经受， 忍受
reward	n. 报答，奖赏；报酬，酬金 vt. 报答， 酬谢， 奖励
graze	vi. 吃青草 vt. 放牧；擦伤；擦过，掠过 n. 擦破
coupon	n. 礼券， 优惠券； 配给券， 票证
multitude	n. 大量， 许多； 大众， 民众
inhabit	vt. 居住于， 栖居于
siege	n. 包围， 围困
abstract	adj. 抽象的，抽象派的 n. 摘要，梗概；抽象派艺术作品
agenda	n. 议程
degenerate	vi. 衰退，堕落，蜕化 adj. 衰退的，堕落的 n. 堕落者
nurture	n&vt. 养育， 培育， 滋养
destructive	adj. 破坏的， 毁灭的
appearance	n. 出现， 来到； 外观
culture	n. 文化， 文明； 教养； 培养； 培养菌
paternity	n. 父权， 父子关系
hasty	adj. 草率的， 轻率的； 急速的， 匆忙的， 仓促完成的
anonymous	adj. 无名的， 不具名的； 匿名的； 无特色的， 无个性特征的
fake	adj. 假的，伪造的 n. 假货；骗子 vt. 伪造， 捏造； 伪装
span	n. 跨距，一段时间 vt. 持续， 贯穿， 包括； 横跨， 跨越
escort	n. 护卫者，护送者 vt. 护送， 护卫
bizarre	adj. 奇形怪状的， 怪诞的
existence	n. 存在， 实在； 生存
ascribe	vt. 把…归因于， 把…归属于
threshold	n. 门槛， 门口； 入门， 开端， 起始点
float	v. 浮动， 漂浮， 飘动
minority	n. 少数； 少数民族
axis	n. 轴， 轴线， 中心线； 坐标轴， 基准线
pole	n. 杆； 极， 磁极， 电极
preferable	adj. 更可取的， 更好的， 更合意的
reference	n. 提到， 论及； 参考， 查阅； 引文； 参考书目； 证明书， 推荐信
spite	n. 恶意，怨恨；不顾 vt. 刁难， 欺侮
defendant	n. 被告
arrange	v. 安排， 准备； 整理
olive	n. 橄榄， 橄榄树
coarse	adj. 粗的， 粗糙的； 粗劣的； 粗俗的
exaggerate	v. 夸大， 夸张
streamline	vt. 使成流线型； 精简， 使效率更高
imply	vt. 暗示， 意指
offset	vt. 补偿， 抵消
commitment	n. 承诺， 许诺， 保证； 信奉， 献身； 承担的义务
cavity	n. 洞， 穴， 凹处； 龋洞
coward	n. 胆小鬼， 懦夫
fossil	n. 化石； 食古不化的人， 老顽固
poke	vi. 伸出，突出 vt. 戳，捅；用…戳，把…戳向；伸出，突出 n. 戳， 捅
rejection	n. 拒绝
fixture	n. 固定装置； 固定在某位置的人
manufacture	vt. 制造，加工 n. 制造， 制造业
collision	n. 碰撞； 冲突， 抵触
sequence	n. 连续， 接续， 一连串； 次序， 顺序
recruit	vt. 招募， 吸收
provision	n. 供应； 准备， 预备； 条款， 规定； 给养， 口粮
calorie	n. 大卡； 卡
slogan	n. 标语， 口号； 广告语
invariably	adv. 不变地， 始终如一地， 总是
commence	v. 开始
tract	n. 传单， 小册子； 大片
configuration	n. 配置， 布局， 构造
mercury	n. 水银， 汞
frequent	adj. 时常发生的， 常见的
chunk	n. 厚片， 大块； 相当大的部分
interact	vi. 相互作用， 相互影响
commonplace	adj. 普通的，平庸的 n. 寻常的事物， 平庸的东西
aggregate	adj. 总计的， 合计的 n. 总数，合计 vt. 总计达， 合计； 使聚集， 使积聚
seemingly	adv. 表面上， 看上去
attendant	adj. 伴随的， 随之产生的 n. 服务人员，侍者，随从
array	n. 展示；陈列，一系列；排列，队形；衣服，盛装；
parameter	n. 界限， 范围； 参数
extinct	adj. 灭绝的， 绝种的； 不再活跃的， 熄灭了的， 已废弃的
discriminate	vi. 区别， 辨别； 有差别地对待， 歧视
degrade	vt. 降低…的身份， 有辱…的人格； 使降解， 使退化
opaque	adj. 不透明的， 不透光的； 难理解的， 晦涩的
repay	vt. 归还； 报答
monetary	adj. 钱的， 货币的； 金融的
grave	adj. 严重的， 严肃的 n. 坟墓
advantage	n. 优点， 优势； 好处
controversy	n. 争论， 辩论
command	n&vt. 命令， 指挥； 控制
compulsory	adj. 必须做的， 强制性的； 必修的
performance	n. 演出； 履行， 执行， 完成； 工作情况， 表现， 工作性能
serial	adj. 连续的， 顺序排列的 n. 连续剧，连载故事
anticipate	vt. 预料， 预期， 期望； 先于…行动， 提前使用
detach	vt. 拆卸； 使分开， 使分离
slash	vt. 砍；大幅度削减 n. 砍， 砍痕； 斜线号
fabricate	vt. 捏造， 伪造， 编造； 建造
comic	adj. 喜剧的，滑稽的 n. 连环漫画； 喜剧演员
perfection	n. 完美， 完善
vague	adj. 不明确的； 含糊的； 暧昧的
pope	n. 教皇， 罗马主教
exception	n. 例外， 除外
ego	n. 自我， 自己， 自尊
urge	vt. 鼓励；推进，催促；竭力主张，强烈要求 n. 冲动， 强烈的欲望
spouse	n. 配偶
score	n. 得分，比数，成绩；二十 vt. 分， 给…打分； 画线于； 获胜
isle	n. 小岛， 岛
enclosure	n. 四周有篱笆的场地， 围场； 附件
graduate	adj. 研究生的 v. 毕业 n. 毕业生；研究生
famine	n. 饥荒； 严重的缺乏
quota	n. 定额， 限额， 配额
unanimous	adj. 全体一致的， 一致同意的
scorn	n. 轻蔑，鄙视 vt. 轻蔑， 鄙视； 拒绝， 不屑
thermal	adj. 热的， 由热造成的； 保暖的
sulfur	n. 硫
visual	adj. 看的， 视觉的
terrain	n. 地形， 地势
grief	n. 悲伤， 悲痛； 悲伤的事， 悲痛的缘由
rap	vi. 说唱 vt. 敲击，急敲；突然厉声说出；责备，训斥 n. 敲击， 急敲
upgrade	vt. 提升，使升级 n. 向上的斜坡
instruct	vt. 教， 指示； 通知； 教育
appendix	n. 阑尾； 附录
virtually	adv. 事实上， 实质上
agreeable	adj. 令人愉快的， 惬意的； 同意的， 乐意的
economy	n. 经济； 节约， 节省
community	n. 社区， 社会， 公社； 团体， 界； 群落
version	n. 译文， 说法， 改写本
sprinkle	v. 撒，洒 n. 少量， 少数
bronze	n. 青铜， 青铜色， 古铜色； 青铜制品， 铜牌
conception	n. 思想， 观念， 概念； 构想， 设想； 怀孕
municipal	adj. 市的， 市政的
detain	vt. 拘留， 扣留； 留住， 耽搁
institute	n. 研究所，学院 vt. 建立， 设立
endure	v. 忍受， 容忍； 持久， 持续
detail	n. 细节，枝节；零件 vt. 详细说明
subculture	n. 亚文化
appropriate	adj. 适当的，恰当的 vt. 私吞； 拨款供专用
criterion	n. 标准， 准则
essence	n. 本质， 实质， 要素； 精髓， 精华
pore	vi. 仔细阅读， 审视 n. 毛孔，细孔
utility	n. 效用， 有用
manual	adj. 用手的，手工做的 n. 手册， 指南
maneuver	vi. 设法变动位置； 用策略， 耍花招 n. 谨慎而熟练的动作；策略，花招；演习 vt. 设法使变动位置；操纵，控制
symphony	n. 交响乐， 交响曲； 和谐， 协调
eloquent	adj. 雄辩的， 口才流利的， 有说服力的； 明白显示出的
optimistic	adj. 乐观的， 乐观主义的
dual	adj. 双的， 两重的
submarine	adj. 水底的， 海底的 n. 潜水艇
aspect	n. 方面； 朝向、 方向； 样子， 外表
aggressive	adj. 侵略的， 好斗的； 敢作敢为的； 有进取心的
stump	vi. 脚步沉重地走 n. 树桩；残根，残余部分 vt. 把…难住，使为难；在…做巡回演说
behavior	n. 行为， 举止， 表现
federation	n. 联合会； 联邦
minimize	vt. 使减少到最低限度； 极力贬低， 对…作最低估计
descend	vi. 下来，下降 vt. 走下， 爬下
signify	vi. 有重要性 vt. 表示…的意思，意味，预示
logical	adj. 逻辑的， 合乎常理的
reconciliation	n. 和解， 调和
weird	adj. 古怪的， 离奇的； 怪诞的， 神秘而可怕的
characterize	vt. 成为…的特征， 以…为特征； 描绘的特性， 描述
descent	n. 下降， 下倾； 斜坡， 坡道； 血统， 世系
ridiculous	adj. 荒谬的， 可笑的
turbulent	adj. 动荡的， 混乱的； 汹涌的， 狂暴的
overt	adj. 公开的， 不隐蔽的
refute	vt. 驳斥， 驳倒
precedent	n. 先例， 范例； 【法】 判例； 惯例
severe	adj. 严重的； 严厉的， 严格的； 严峻的， 艰难的； 朴素的， 不加装饰的
emerge	vi. 出现， 涌现， 冒出
exemplify	vt. 是…的典型； 例示， 举例证明
lease	n. 租约，租契 vt. 出租； 租得， 租有
exploit	vt. 剥削； 利用； 开拓 n. 业绩， 功绩
slap	vt. 掴，掌击，拍；啪的一声放 n. 掴， 掌击， 拍
anniversary	n. 周年
register	v. 登记， 注册； 指示， 自动记下； 表示， 表达； 注意到， 记住； 把挂号 n. 登记，注册；登记表，注册簿
communicate	v. 通讯， 交际， 交流； 连接， 相通； 传达， 传播； 传染
evidence	n. 根据， 证据； 证人
jerk	v. 猝然一动，猛拉 n. 急推， 急拉， 急扭
fling	vt. 扔，掷；使扑，使投身 n. 尽情欢乐的一阵， 一时的放纵
stun	vt. 使震惊， 使目瞪口呆； 把…打昏， 使昏迷
acid	adj. 酸的， 酸性的； 尖刻的， 刻薄的 n. 酸
autonomy	n. 自治， 自治权； 人身自由， 自主权
transmission	n. 传播， 发射； 传送， 传递； 传染
blush	n&vi. 脸红
dubious	adj. 怀疑的， 犹豫不决的， 无把握的； 有问题的； 靠不住的
intuition	n. 直觉； 由直觉获知的信息
artillery	n. 火炮， 大炮； 炮兵
educational	adj. 教育的， 教育性的
pose	v. 造成，引起；提出，陈述；摆姿势；假装，冒充，装腔作势 n. 样子， 姿势
finite	adj. 有限的， 有限制的； 限定的
amend	vt. 修改，修订，改进 n. 赔罪， 赔偿
erupt	vi. 喷发， 喷出； 爆发， 突然发生
exquisite	adj. 精美的， 精致的； 敏锐的， 有高度鉴赏力的； 剧烈的， 感觉强烈的
collide	vi. 碰撞， 互撞； 冲突， 抵触
remedy	n. 补救办法，纠正办法；药品，治疗法 vt. 补救， 纠正； 医治， 治疗
cardinal	adj. 最重要的； 基本的 n. 红衣主教；【数】基数
consent	n&vi. 同意， 赞成
insist	v. 坚持； 坚持要求； 坚决认为
fusion	n. 联合， 合并； 核聚变
volume	n. 卷， 册， 书卷； 容积， 体积； 音量， 响度
mutual	adj. 相互的； 共同的
therefore	adv. 因此， 所以
exchange	n&vt. 交换； 交流； 兑换
indignant	adj. 愤怒的， 愤慨的， 义愤的
hesitate	vi. 犹豫， 踌躇， 含糊； 不情愿
decimal	adj. 十进位的 n. 小数
cynical	adj. 愤世嫉俗的， 怀疑的
ventilate	vt. 使通风； 把…公开， 公开讨论
scoop	v. 舀出； 抢在之前报道新闻 n. 勺子；抢先报道的新闻
companion	n. 同伴， 共事者； 伴侣
culminate	vi. 告终
breakdown	n. 垮台， 破裂； 衰竭， 衰弱； 损坏， 故障； 明细， 清单
directory	n. 人名地址录； 工商行名录； 号码簿
behave	vi. 表现，举止；运转，做出反应 vt. 检点自己的行为
accomplish	vt. 达到， 完成
strand	n. 股，缕；一个组成部分 vt. 使搁浅
constituent	adj. 组成的， 构成的 n. 选民，选区居民；成分，组成；配料
engine	n. 引擎， 发动机； 机车
irritate	vt. 使恼怒， 使烦躁； 使不适， 使疼痛
scope	n. 范围； 余地， 机会
responsible	adj. 需负责任的， 承担责任的； 有责任感的， 负责可靠的； 责任重大的， 重要的
linen	n. 日用织品； 亚麻织品， 亚麻布
expectancy	n. 预料； 期待； 盼望
illuminate	vt. 照明， 照亮； 阐明， 启发
liner	n. 衬里； 大客轮
identify	vt. 认出， 鉴定； 把…等同于
citizenship	n. 公民的身份, 公民的职责和权力
label	n. 标签，标记，符号 vt. 贴标签于； 把…称为
slippery	adj. 滑的； 狡猾的
forum	n. 论坛， 讨论会； 专题讨论节目
contempt	n. 轻视， 蔑视
modify	vt. 更改， 修改； 修饰
environment	n. 环境； 外界； 围绕
clone	v. 无性繁殖， 克隆 n. 无性繁殖系，克隆；复制品，翻版
betray	vt. 背叛， 出卖； 失信于， 辜负； 泄露； 暴露， 显露
progressive	adj. 前进的； 渐进的； 进行式的
pledge	n. 保证，誓言 vt. 保证， 许诺
exempt	adj. 被免除的， 被豁免的 vt. 免除，豁免
deliberate	adj. 故意的， 蓄意的； 慎重的， 深思熟虑的 v. 仔细考虑， 思考
physiological	adj. 生理的， 生理学的
shaft	n. 柄， 杆； 束， 光线； 轴； 竖井， 升降井
aesthetic	adj. 美学的， 审美的； 悦目的， 雅致的
atmosphere	n. 大气， 空气； 气氛， 环境
decorate	vt. 装饰， 装潢， 修饰
electrician	n. 电工， 电气技师
occupation	n. 占领， 占据； 职业； 从事的活动， 消遣
tendency	n. 趋向， 趋势， 倾向
release	n&vt. 释放， 排放； 解除， 解脱； 放开， 松开； 发布； 发行
caption	n. 说明文字， 字幕
hardy	adj. 能吃苦耐劳的， 坚强的； 耐寒的
purify	vt. 使纯净， 提纯； 使纯洁
toll	v. 敲 n. 过路费，过桥费；伤亡人数，损失
variation	n. 变化， 变动， 变异； 变奏
moral	adj. 道德的，有道德的 n. 品行， 道德规范； 寓意
rig	vt. 操纵，垄断；给装配帆及索具；用临时替代材料迅速搭起 n. 船桅的装置， 成套器械
eject	vt. 驱逐， 逐出； 喷射， 排出； 弹出
defect	vi. 变节， 叛变 n. 缺点，缺陷，欠缺[dI'fekt]
reinforce	vt. 增强， 加强， 增援
casual	adj. 偶然的； 非正式的； 临时的， 不定期的； 漠不关心的， 冷淡的
slack	vi. 懈怠， 懒散 adj. 懈怠的，马虎的；萧条的，清淡的，不活跃的；松的 n. 松弛部分；宽松裤
rim	n. 边，缘 vt. 环绕边缘
property	n. 财产， 所有物； 房产； 物业； 性质， 性能
rip	v. 扯破，撕坏 n. 裂口， 裂缝
outbreak	n. 爆发， 突然发生
manipulate	vt. 操纵， 控制； 影响； 操作， 使用
similar	adj. 相似的， 类似的
contradict	vt. 反驳， 否认…的真实性； 与…发生矛盾， 与…抵触
melody	n. 旋律， 曲调； 悦耳的音乐
likelihood	n. 可能， 可能性
converge	vi. 会合， 互相靠拢； 聚集， 集中； 趋近
compose	vt. 组成， 构成； 创作， 为…谱曲； 使平静， 使镇静
catholic	adj. [C-]天主教的；普遍的，广泛的 n. [C-]天主教徒
partial	adj. 部分的； 不公平的； 偏爱的， 偏袒的
aid	n. 帮助，救护；助手，辅助手段 vt. 帮助， 援助
supersonic	adj. 超声的， 超音速的
optimism	n. 乐观， 乐观主义
confident	adj. 确信的， 肯定的； 自信的
retain	vt. 保留， 保持
drastic	adj. 严厉的， 极端的； 激烈的， 迅猛的
epoch	n. 时期， 时代
saleable	adj. 适合销售的
crew	n. 全体船员； 一队工作人员
manufacturer	n. 制造商， 制造厂
defeat	n&vt. 战胜， 挫败
valid	adj. 有效的， 正当的； 有根据的， 有理的
inertia	n. 不活动， 惰性； 惯性
encourage	vt. 鼓励， 怂恿； 促进， 助长， 激发
vacuum	v. 收集； 用真空吸尘器打扫 n. 真空；真空吸尘器
extravagant	adj. 奢侈的； 过度的， 过分的， 放肆的
accommodate	vt. 容纳； 向…提供住处； 使适应， 顺应
bubble	vi. 冒泡， 起泡， 沸腾 n. 泡，泡沫，水泡，气泡；幻想的计划
morality	n. 道德， 道德性； 德行， 品行； 道德观， 道德规则
yield	v. 出产；让出，放弃；屈服，顺从；倒塌，垮掉 n. 产量
electronic	adj. 电子的 n. 电子学； 电子设备
transplant	vt. 移栽，移种；移植；使迁移，使移居 n. 移植
terrace	n. 排屋；地坪，草坪；
deficit	n. 赤字， 亏空， 亏损
sacred	adj. 神圣的； 宗教的； 神圣不可侵犯的
cathedral	n. 大教堂
elegant	adj. 优美的， 文雅的， 讲究的； 简练的， 简洁的
synthesis	n. 综合； 合成
incidentally	adv. 顺便提及地， 顺便提一句
polar	adj. 地极的， 近地极的； 磁极的； 正好相反的， 截然对立的
shark	n. 鲨鱼； 勒索者， 诈骗者， 放高利贷的人
linger	vi. 继续逗留， 留恋徘徊， 继续存留； 缓慢消失
historian	n. 历史学家， 史学工作者
cumulative	adj. 积累的， 渐增的
prototype	n. 原型
overpass	n. 天桥， 立交桥
species	n. 种， 类
slip	v. 滑跤，滑落，溜；下降，跌落；悄悄放进 n. 疏漏， 差错
temperament	n. 气质， 性格
cite	vt. 引用， 引证； 传唤， 传讯； 表彰， 嘉奖
acquaintance	n. 认识， 了解； 熟人
moan	vi. 呻吟，呜咽；抱怨，发牢骚 vt. 抱怨 n. 呻吟声， 呜咽声； 怨声， 牢骚
quench	vt. 止； 扑灭
shed	vt. 脱落，脱去；流出，流下；发出，散发 n. 棚， 小屋， 货棚
spice	n. 香料，调味品；趣味，情趣，风味 vt. 使增添趣味； 加香料于
rating	n. 等级， 品级， 评定结果； 收视率， 收听率
assertive	adj. 断定的； 过分自信的
autonomous	adj. 自治的； 独立自主的
referee	vi. 当裁判 n. 裁判员；证明人，推荐人；仲裁者，调解者
aerial	adj. 飞机的，航空的；空中的，架空的 n. 天线
trial	n. 试， 试验； 审判； 讨厌的人
perception	n. 感知， 觉察； 认识， 观念， 看法
elapse	vi. 消逝， 过去
symmetry	n. 对称； 匀称， 整齐
visualize	vt. 想象； 设想
reap	vt. 收割， 收获； 获得， 得到
insect	n. 昆虫， 虫
presume	vi. 擅自行事 vt. 推测，假定，相信；冒昧，擅自；认定，推定
complement	n. 补充，互为补充的东西；编制名额；装备定额；补语['kɒmplɪm3nt] vt. 补充， 与…相配
cable	n. 缆，索，电缆，电报 vt. 给… 发电报， 用电报传送
nasty	adj. 令人讨厌的， 令人厌恶的； 难弄的， 困难的； 严重的， 恶劣的， 险恶的； 下流的， 道德败坏的
intense	adj. 强烈的； 紧张的； 认真的； 热情的
border	vi. 近似， 与…接壤 n. 边，边缘，边界 vt. 给…加上边，围；邻接
estate	n. 地产， 房地产
articulate	adj. 善于表达的， 发音清晰的； 表达得清楚有力的 vt. 明确有力地表达； 清楚地吐， 清晰地发
adhere	vi. 黏附， 附着； 遵守； 坚持； 追随， 支持
expense	n. 花费， 消费， 费用； 开支， 业务费用
traverse	vt. 横渡， 横越
rigorous	adj. 严密的， 缜密的； 严格的， 严厉的
yell	n&vi. 号叫， 叫喊
contemporary	adj. 现代的， 当代的； 同时代的
tribe	n. 部落； 族
activate	vt. 使活动起来； 使开始作用
mobilize	vi. 动员起来 vt. 动员；调动，鼓动起
mock	vi. 嘲笑，嘲弄 adj. 模拟的， 演习的； 假的， 假装的 vt. 嘲笑，嘲弄；模仿
minibus	n. 小型公共汽车
repetitive	adj. 重复的， 反复性的
gear	n. 齿轮，传动装置，挡；用具，设备，衣服 vt. 使适应， 使适合
facilitate	vt. 使…变得容易， 使便利
precipitate	v. 使突然发生； 猛然抛下； 使沉淀
endow	vt. 资助， 捐赠； 给予， 赋予， 认为…具有某种特质
financial	adj. 财政的， 金融的
respective	adj. 各自的， 各个的， 分别的
quiver	vi. 颤抖，发抖，抖动 n. 颤抖， 抖动， 颤声
slot	n. 狭缝，狭槽；位置，空位 vt. 把…放入狭长开口中； 把…纳入其中， 使有位置
harden	v. 变硬
rot	v. 腐烂，腐朽 n. 腐烂， 腐朽
define	vt. 给…下定义， 限定
predict	vt. 预言， 预告， 预测
dictate	v. ['dIkteIt] n. 口授； 命令， 规定， 要求
memorize	vt. 记住， 熟记
render	vt. 使得， 致使； 给予， 提供； 翻译
undermine	vt. 暗中破坏， 逐渐削弱； 侵蚀…的基础
subjective	adj. 主观的， 个人的
blossom	vi. 开花； 发展， 长成 n. 花
radical	adj. 根本的，基本的；激进的，激进派的 n. 激进分子
manifest	adj. 明显的，显然的，明了的 vt. 显示， 表明， 证明； 使显现， 使显露
blunt	adj. 钝的；率直的，直言不讳的 vt. 使迟钝； 使减弱； 使钝
endeavor	n&v. 努力， 尽力， 尝试
relieve	vt. 使轻松， 使宽慰； 缓解， 减轻， 解除； 使得到调剂； 接替， 替下
quartz	n. 石英
air-conditioning	n. 空调设备， 空调系统
adjacent	adj. 邻近的， 毗连的
employment	n. 工作； 雇用； 使用
transport	vt. 运输 n. 运输， 运输工具
specific	adj. 特有的；明确的；具体的 n. 详情， 细节
analogy	n. 比拟； 类比， 类推
application	n. 申请， 申请书； 施用， 涂抹； 应用， 实施； 实用性
productive	adj. 多产的， 富饶的； 富有成效的
prune	vt. 修剪， 修整； 删除， 削减
engage	vt. 使从事于， 聘用； 吸引， 占用； 使订婚
chord	n. 和弦， 和音； 弦， 心弦
semester	n. 学期
strategy	n. 战略， 策略
remainder	n. 余下的部分， 剩下的人数
hypothesis	n. 假设， 假说， 前提
revolve	vi. 旋转
collapse	n&vi. 倒坍， 瓦解； 崩溃， 突然失败
territory	n. 领土， 版图； 领域
summon	vt. 召唤， 传唤； 鼓起， 振作； 召集， 召开
flare	vi. 闪耀，烧旺；突发，突然发怒 n. 闪光信号， 照明弹
accurate	adj. 准确的， 正确无误的
legend	n. 传说， 传奇故事； 传奇人物
maintain	vt. 维持； 维修， 保养； 主张； 赡养
expertise	n. 专门知识， 专长
bargain	vi. 讨价还价 n. 特价商品；协议，交易
erect	adj. 竖直的， 挺直的 vt. 建造，使竖立
professional	adj. 职业的，专业的，专门的 n. 自由职业者， 专业人员
nil	n. 无， 零
identification	n. 身份证明； 鉴定， 验明， 认出； 认同
migrant	n. 移居者， 移民； 候鸟， 迁移动物
protein	n. 蛋白质
annual	adj. 每年的，一年一次的 n. 年报， 年鉴； 一年生的植物
exclusive	adj. 奢华的，高级的；独有的；排斥的；不包括…的 n. 独家新闻
repertoire	n. 全部节目
poverty	n. 贫穷， 贫困
resort	vi. 求助，凭借，诉诸 n. 求助， 凭借， 诉诸； 求助的对象， 采用的手段； 常去之地， 胜地
testify	vi. 作证，证明；表明，说明 vt. 作证， 证明
pearl	n. 珍珠； 珠状物； 珍品
conclusive	adj. 确实的； 最后的； 决定性的
margin	n. 页边空白； 差数， 差额； 余地； 边缘
apt	adj. 易于…的， 有…倾向的； 恰当的， 适宜的； 聪明的， 反应敏捷的
remain	vi. 剩下，余留，保持；仍然是 n. 残余； 残骸； 遗迹
pregnancy	n. 怀孕
shabby	adj. 破旧的， 衣衫褴褛的； 卑鄙的； 不公正的
toss	vi. 掷钱币来决定；翻来覆去 vt. 扔，抛，掷；猛抬；拌；掷；使摇动，使颠簸 n. 掷钱币来决定； 猛抬头
demand	vt. 要求，需要；询问 n. 要求， 需要
reel	vi. 摇摇晃晃地移动，蹒跚；眩晕，发昏 n. 卷轴，卷筒，卷盘 vt. 卷， 绕
pathetic	adj. 差劲的， 令人生厌的； 引起怜悯的， 可怜的， 可悲的
dissipate	vi. 消散，消失 vt. 使消散， 使消失； 浪费， 挥霍
flask	n. 长颈瓶， 酒瓶， 烧瓶
accuse	vt. 指责， 归咎于
disturbance	n. 扰乱， 打扰； 骚乱， 混乱； 心神不安， 烦恼
visceral	adj. 内脏的， 腑脏的； 出自内心的， 发自肺腑的
simultaneous	adj. 同时发生的， 同时存在的； 同步的， 一齐的
instructional	adj. 指导的， 教育的
guarantee	n. 保证，担保物 vt. 保证， 担保
odor	n. 气味
predecessor	n. 前任， 前辈； 原有事物， 前身
acquire	vt. 取得， 获得； 学到
literal	adj. 照字面的， 原义的； 逐字的
notion	n. 概念， 观念； 意图， 想法， 念头
default	v. 不履行义务， 拖欠 n. 违约，拖欠；弃权；预设，缺省
arc	n. 弧形； 弧； 电弧， 弧光
beverage	n. 饮料
captive	adj. 被俘虏的，被捕获的 n. 俘虏
insane	adj. 极蠢的， 荒唐的； 精神病的， 精神失常的， 疯狂的
attribute	vt. 把…归因于 n. 属性
cemetery	n. 墓地， 公墓
genetic	adj. 遗传的 n. [-s]遗传学
stitch	v. 缝， 绣 n. 一针，线迹；缝法，针法，编结法；突然剧痛
triumph	vi. 成功 n. 凯旋，胜利
vice	n. 罪恶， 恶习， 缺点； 虎钳
detection	n. 察觉， 发觉； 侦查， 探测
bowel	n. 肠； 内部， 深处
arouse	vt. 引起； 唤起， 唤醒
optimum	adj. 最合适的， 最优的， 最佳的
suppress	vt. 压制， 镇压； 禁止发表， 查禁； 抑制， 忍住； 阻止…的生长
pudding	n. 布丁
wrinkle	v. 起皱纹 n. 皱纹
consensus	n. 一致， 一致同意
boring	adj. 令人厌烦的， 乏味的， 无聊的
classic	adj. 最优秀的，典型的，标准的；传统式样的，典雅的 n. 文学名著，经典作品，杰作；优秀的典范；
supervise	v. 监督， 管理， 指导
gossip	vi. 传播流言蜚语 n. 流言蜚语；爱说长道短的人
describe	vt. 形容， 描写； 画出
dilemma	n. 窘境， 困境
engagement	n. 订婚， 婚约； 约会
wealthy	adj. 富的， 富裕的
slum	n. 贫民窟
foam	vi. 起泡沫， 吐白沫 n. 泡沫；泡沫材料，泡沫状物
disregard	vt. 不理会，漠视 n. 忽视， 漠视
administration	n. 管理； 管理部门， 行政机关； 实行， 执行
occasional	adj. 偶尔的， 间或发生的
dwell	vi. 居住
incorporate	vt. 包含； 加上， 吸收； 把…合并， 使并入
debate	n&v. 争论， 辩论
extinguish	vt. 熄灭， 扑灭； 使消亡， 使破灭
vulnerable	adj. 易受伤的， 脆弱的； 易受攻击的， 难防御的
furniture	n. 家具
segment	n. 部分， 片段； 瓣
counterpart	n. 与对方地位相当的人， 与另一方作用相当的物
preach	vi. 布道， 说教 vt. 宣讲，布道；竭力鼓吹，宣传
flank	n. 肋，肋腹，侧边；侧翼 vt. 位于…的侧面
donate	vt. 捐赠， 赠送
pendulum	n. 摆， 钟摆； 摇摆不定的事态
defiance	n. 违抗； 藐视
sovereign	adj. 拥有最高统治权的， 至高无上的； 具有独立主权的 n. 君主，元首
cater	vi. 满足需要， 迎合； 提供饮食及服务， 承办酒席
attractive	adj. 有吸引力的， 引起注意的
significant	adj. 相当数量的； 重要的， 意义重大的， 意味深长的
duplicate	adj. 完全一样的， 复制的 n. 完全一样的东西，复制品 vt. 复制， 复印； 重复
bleed	vi. 出血，流血；泌脂 vt. 勒索…的钱
rein	n. 缰绳 vt. 勒缰使停步； 控制， 约束
decrease	v. 减少 n. [dI'kriːs]
flutter	vi. 振翼，拍翅而飞；飘动，飘扬；快速跳动 n. 紧张， 激动不安
volunteer	v. 自愿； 自愿提供； 志愿 n. 志愿者；志愿兵
overlap	v. 部分重叠； 部分相同 n. 重叠， 重叠的部分
materialism	n. 唯物主义
installment	n. 分期付款， 分期交付； 部分
mourn	v. 哀悼； 感到痛心
cane	n. 手杖； 茎
trifle	vi. 嘲笑； 轻视 n. 琐事，小事，无价值的东西
migrate	vi. 迁徙， 移栖； 移居， 迁移
Easter	n. 复活节
submit	vi. 屈从， 听从； 忍受； 甘心 vt. 屈从，听从，服从；呈送，提交；主张，建议
novelty	n. 新奇事物； 新奇， 新奇感， 新奇性； 新颖小巧而廉价的物品
occupy	vt. 占领； 占； 占有
string	n. 线， 细绳； 一串， 一行
boom	vi. 激增， 繁荣， 迅速发展； 发出隆隆声 n. 激增，繁荣，迅速发展；隆隆声，嗡嗡声
absence	n. 缺席， 不在； 缺席的时间， 外出期； 缺乏， 不存在
abolish	vt. 彻底废除， 废止
attract	vt. 吸引， 引起…注意
cautious	adj. 十分小心的， 谨慎的
snatch	vi. 一把抓住 vt. 夺，夺走，抢走；一下子拉，一把抓住；抓住机会做，抽空做 n. 片断
blink	vi. 眨眼睛；闪亮，闪烁 n. 眨眼睛； 一瞬间
summit	n. 最高点， 峰顶； 最高级会议
perfume	n. 香水，香料，香气 vt. 使充满芳香； 洒香水于
magnify	vt. 放大， 扩大； 夸大， 夸张
redundant	adj. 多余的， 过剩的
situated	adj. 位于…的， 坐落在…的； 处于…境地的
recession	n. 衰退， 衰退期
doubtless	adv. 无疑地， 肯定地
negative	adj. 否定的，消极的；负的，阴性的 n. 负片， 底片； 负数
impose	vt. 把…强加； 征
statement	n. 陈述， 声明； 结算单， 报表
trademark	n. 商标， 牌号； 特征， 标记
factor	n. 因素， 因子； 系数
analogous	adj. 类似的， 相似的； 可比拟的
substance	n. 物质； 实质； 大意， 要旨； 根据， 理由
complexion	n. 肤色， 面色； 局面； 性质
continuity	n. 连续， 持续
sculpture	n. 雕刻， 雕塑； 雕刻作品， 雕塑品
target	n. 靶， 标的， 目标
momentum	n. 动力， 冲力， 势头； 动量
wax	n. 蜡，蜂蜡 vt. 给…上蜡
sensation	n. 感觉能力； 感觉， 知觉； 轰动， 引起轰动的事件
urban	adj. 都市的， 住在都市的
furthermore	adv. 而且， 此外
timely	adj. 及时的， 适时的
cape	n. 斗篷， 披肩； 海角， 岬
discard	vt. 丢弃， 抛弃， 遗弃
delicate	adj. 纤细的； 易碎的； 微妙的； 精美的
rebel	vi. 反叛， 造反； 反对， 不服从 n. 反叛分子，反对者
subsidy	n. 津贴， 补助金
bounce	v. 弹起，反弹，颠跳 n. 弹， 反弹
obscene	adj. 淫秽的， 下流的； 可憎的， 可恶的
tissue	n. 组织； 薄绢， 薄纸， 手巾纸
Thanksgiving	n. 感恩节
proficiency	n. 熟练， 精通
modest	adj. 谦虚的； 适中的； 羞怯的
cast	vt. 投，扔，抛；浇铸 n. 演员表， 全体演员； 石膏绷带； 铸型， 铸件； 投， 抛
vocational	adj. 职业的， 业务的
crush	vt. 压碎， 碾碎， 镇压
hatred	n. 憎恶， 憎恨， 仇恨
slice	n. 薄片，切片，部分 vt. 切， 削， 剁
electron	n. 电子
embed	vt. 把…嵌入， 扎牢； 使深留脑中
incline	n. 斜坡[In'klaIn] vt. 使倾斜
elevate	vt. 提升…的职位， 提高， 改善； 使情绪高昂； 举起， 使上升
designate	vt. 指派， 委任； 标出； 把…定名为
promising	adj. 有希望的， 有前途的
slick	adj. 圆滑的， 口齿伶俐的； 精巧的， 巧妙的， 灵巧的； 光滑的， 滑溜的
practicable	adj. 可行的， 适用的
item	n. 条， 条款
counsel	n. 律师，法律顾问；忠告，劝告 vt. 劝告， 提议
canvas	n. 帆布； 帆布画布， 油画
superintendent	n. 主管人， 监管人， 负责人； 警长
probability	n. 可能性， 可能发生的事； 概率
contention	n. 论点； 争论， 争辩
lofty	adj. 高傲的， 傲慢的； 崇高的， 高尚的； 高耸的， 极高的
explicit	adj. 详述的， 明确的， 明晰的； 直言的， 露骨的
rely	vi. 依靠， 依赖； 信赖， 指望
slide	v. 滑；悄悄地移动 n. 滑动； 滑道， 滑面； 幻灯片
utilize	vt. 利用
sticky	adj. 黏性的， 胶粘的； 湿热的
prevail	vi. 流行， 盛行
excessive	adj. 过多的， 极度的
denial	n. 否认； 拒绝， 拒绝给予
assault	n. 攻击， 袭击
implicit	adj. 不言明的， 含蓄的； 内含的， 固有的； 无疑问的
intensify	v. 增强， 加剧
feminine	adj. 女性的， 女子的； 女子气的
purity	n. 纯净， 纯洁， 纯正
pattern	n. 型，式样；模，模型 vt. 仿制， 使…仿效
settle	v. 安排， 安放； 调停； 支付， 核算； 安家； 飞落， 停留； 安定
heighten	v. 提高， 加强
vehicle	n. 车辆， 机动车； 传播媒介， 工具， 手段
scrape	v. 刮，擦；勉强过日子 n. 刮， 擦； 刮擦声
web	n. 网； 网络； 错综复杂的事物
femininity	n. 女性气质
plateau	n. 高原； 稳定时期
tragic	adj. 悲惨的， 可悲的； 悲剧的
grin	n. 咧嘴笑
grip	vt. 握紧，抓牢；吸引住…的注意力 n. 紧握
reliance	n. 依靠， 依赖
explore	v. 探险， 探索； 仔细查阅， 探究
display	n&vt. 陈列， 展览； 显示
electricity	n. 电
climate	n. 气候； 风土， 地带； 风气， 气氛
tentative	adj. 试探的， 试验的
disorder	n. 混乱， 杂乱； 骚乱
aggravate	vt. 加重， 加剧， 使恶化； 激怒， 使恼火
criticize	vt. 批评， 评论， 非难
preside	vi. 主持，主管
economic	adj. 经济的；经济学的 n. 经济学； 经济状况
transistor	n. 晶体管， 晶体管收音机
statistics	n. 统计学； 统计表
grim	adj. 讨厌的， 糟糕的； 严厉的； 冷酷的， 无情的
giggle	n. 咯咯笑， 傻笑
offspring	n. 子女， 子孙， 后代； 崽
arrest	vt. 逮捕，拘留；停止，阻止；吸引 n. 逮捕， 拘留， 扣留
mature	adj. 成熟的，成年人的；深思熟虑的；到期的，应支付的 vt. 使成熟
alleviate	vt. 减轻； 缓解， 缓和
notification	n. 通知， 告示； 通知书
overflow	vi. 满得外溢，外流，泛滥；充满，洋溢 vt. 淹没， 从…中溢出， 多得无法容纳 n. 容纳不下的物； 溢出， 满出； 溢流口， 溢流管
provoke	vt. 对…挑衅， 激怒； 激起， 引起
threaten	v. 威胁， 恐吓； 预示快要来临； 构成威胁， 可能发生
enrich	vt. 充实， 使丰富； 使富裕， 使富有
foil	n. 箔，金属薄片；陪衬，衬托 vt. 挫败， 使受挫折
strain	v. 扭伤， 拉伤； 尽力使用， 紧张； 拉紧； 尽力 n. 拉紧；过劳，极度紧张；张力；扭伤，拉伤；旋律；品种，家系；气质，个性特点
negotiate	v. 洽谈， 协商， 谈判； 顺利通过， 成功越过
cellar	n. 地窖， 地下室； 酒窖
tangle	v. 缠结，乱作一团 n. 乱糟糟的一堆， 混乱； 复杂的问题； 困惑
package	n. 包裹，包装；一揽子交易 vt. 把…打包； 包装
intrigue	vi. 耍阴谋，施诡计 vt. 激起…的好奇心，迷住 n. 阴谋， 诡计， 密谋
orient	vi. 转向特定方向；适应[theO-] vt. 使适应，使熟悉情况；使朝向，以…为方向 n. 东方， 亚洲， 东半球
crisis	n. 危机， 存亡之际； 关键阶段
handicap	n. 缺陷；障碍，不利条件 vt. 妨碍， 使不利
survival	n. 幸存； 幸存者； 残存物
shatter	vi. 碎裂 vt. 使粉碎，砸碎；使破灭；使震惊
plea	n. 恳求， 请求； 抗辩， 答辩， 辩护； 借口， 托辞
persuasion	n. 说服， 劝说； 信念， 信仰
keen	adj. 热心的； 激烈的； 敏锐的， 敏捷的
nutrition	n. 营养
detective	n. 侦探， 私人侦探
transfer	v. 搬， 转移； 调动， 转学； 转让， 过户； 乘车， 转乘
veteran	adj. 经验丰富的 n. 老手；老兵
cereal	n. 加工而成的谷类食物； 谷类植物， 谷物
esthetic	adj. 美学的， 审美的； 悦目的， 雅致的
indifferent	adj. 冷漠的， 不积极的； 一般的， 平平的
affection	n. 感情； 爱， 爱慕
diversion	n. 转移， 转向； 消遣， 娱乐； 临时绕行路
elementary	adj. 基本的， 初级的
eagle	n. 鹰
solemn	adj. 庄严的， 隆重的； 严肃的
embarrass	vt. 使窘迫， 使为难
erroneous	adj. 错误的， 不正确的
option	n. 选择， 选择权， 选择自由； 选择的事物， 选课
acute	adj. 严重的； 急性的； 灵敏的， 敏锐的； 精明的
limitation	n. 限制， 限度； 局限
jog	n&v. 慢跑； 轻轻碰撞
terrify	vt. 使害怕， 使惊吓
handbook	n. 手册， 便览
ascertain	vt. 弄清， 查明； 确定
crucial	adj. 至关重要的， 决定性的
contribute	v. 捐献， 捐款； 投稿
insert	vt. 插入， 嵌入； 登载
faith	n. 信任， 信心； 信仰， 信条
inspiration	n. 灵感； 鼓舞人心的人
endurance	n. 忍耐力； 持久， 耐久
highlight	vt. 强调，突出，使显著 n. 最精彩的部分， 最重要的事件
candidate	n. 候选人， 投考者， 申请求职者
strive	vi. 努力， 奋斗， 力求
database	n. 数据库
intelligible	adj. 可理解的， 明白易懂的， 清楚的
parallel	adj. 并列的，平行的；类似的；对应的；并联的 n. 可相比拟的事物，相似处；平行线，平行面；纬线 vt. 与…相似， 与… 相当， 比得上
reject	vt. 拒绝； 拒纳， 退回， 摈弃 n. 被拒货品， 不合格产品
hospitality	n. 友好款待， 好客
sheer	adv. 垂直地，陡峭地 vi. 急转向， 偏离 adj. 完全的，十足的；陡峭的，垂直的；极薄的，透明的
imitation	n. 模仿； 仿制， 伪制品； 赝品
compliment	n. 赞美，恭维；致意，问候 vt. 赞美， 恭维
blunder	vi. 跌跌撞撞地走， 慌乱地走； 犯错误 n. 错误
breach	n. 破坏，违反；破裂，不和；缺口，裂口 vt. 攻破， 在…造成缺口； 破坏， 违反
original	adj. 最初的；新颖的；原版的 n. 原件， 原作
comply	vi. 遵从， 依从， 服从
deviate	vi. 背离， 偏离
assignment	n. 任务； 指定的作业； 分配， 指派
album	n. 粘贴簿， 集邮簿， 相册
stimulus	n. 促进； 刺激
electric	adj. 电的， 电动的
bewilder	vt. 使迷惑； 使难住
regiment	n. 团；大量 vt. 严格地管制， 严密地编组
diminish	vi. 变少，变小，降低 vt. 减少， 减小， 降低
surpass	vt. 超过， 优于， 多于； 超过…的界限， 非…所能办到
various	adj. 各种各样的， 不同的
depression	n. 抑郁， 沮丧； 不景气， 萧条； 洼地， 凹陷
affiliate	vt. 使隶属于 n. 附属机构， 分公司
unfold	v. 展开， 打开； 显露， 展现
extent	n. 广度； 范围； 程度
equivalent	adj. 相等的，等量的 n. 相等物， 等价物
sensational	adj. 轰动的， 耸人听闻的； 使人感动的， 非常好的
wedge	n. 楔 vt. 楔入， 塞入
alienate	vt. 使疏远， 使不友好， 离间； 转让， 让渡
brink	n. 边缘， 边沿
plague	n. 瘟疫，鼠疫；灾难，祸患 vt. 使痛苦， 给…造成困难
perpetual	adj. 永久的， 永恒的， 长期的； 无休止的， 没完没了的
retrospect	n. 回顾
fascinate	vt. 强烈地吸引， 迷住
colonial	adj. 殖民地的
warfare	n. 战争； 斗争， 冲突
draft	n. 草稿；汇票；征兵；通风 vt. 起草； 征募
complex	adj. 由许多部分组成的，复合的；复杂的，难懂的 n. 综合体， 集合体； 情结， 夸大的情绪反应
assumption	n. 假定， 臆断； 担任， 承担
humidity	n. 湿度， 潮湿， 湿气
rank	vi. 列入， 占特定等级 n. 军衔，职衔；地位，社会阶层；排，行列 vt. 把…分等，给…评定等级
pamphlet	n. 小册子
preparatory	adj. 预备的
neglect	n&vt. 忽视， 忽略； 疏忽
addition	n. 加， 加法； 附加物
vein	n. 静脉， 血管； 叶脉； 纹理， 纹路； 方式， 风格
carve	vt. 切， 把…切碎； 雕刻， 刻
veil	n. 面纱，面罩；遮盖物，掩饰物 vt. 掩盖， 掩饰
shrink	vi. 起皱； 收缩； 退缩， 畏缩
hierarchy	n. 等级制度； 统治集团， 领导层
ancestor	n. 祖宗， 祖先； 原型； 先驱
hazardous	adj. 危险的； 冒险的
locality	n. 地区， 地点
proceeding	n. 诉讼
artery	n. 动脉； 干线， 要道
panic	v. 恐慌， 惊慌失措 n. 恐慌，惊慌，慌乱
underestimate	vt. 对…估计不足，低估 n. 估计不足， 低估
fold	vt. 折叠，合拢 n. 褶， 折叠的部分
transient	adj. 短暂的， 转瞬即逝的； 临时的， 暂住的
hurl	vt. 猛投， 狠掷； 大声叫骂
competitive	adj. 竞争的， 比赛的； 好竞争的， 求胜心切的； 有竞争力的
dean	n. 教长， 主任牧师； 学院院长， 系主任， 训导主任
sponge	v. 用湿海绵擦， 揩； 过寄生生活 n. 海绵
abuse	vt. 滥用； 虐待； 辱骂， 毁谤 n. 滥用； 虐待； 辱骂
scheme	v. 密谋， 策划 n. 计划，方案；阴谋
insulate	vt. 使绝缘， 使隔热， 使隔音； 隔离， 使隔绝
consequently	adv. 因此， 因而， 所以
drain	vi. 慢慢减少 vt. 排去，放水；渐渐耗尽 n. 耗竭； 排水沟， 排水管
reluctance	n. 不愿， 勉强
rape	n&vt. 强奸
isolate	vt. 使隔离， 使孤立
popularity	n. 普及， 流行； 声望
nickname	n. 绰号，诨名 vt. 给…起绰号
subsequent	adj. 随后的， 后来的
metabolic	adj. 代谢作用的， 新陈代谢的
humanity	n. 人类， 人； 人性； 人道， 博爱； 人文学科
innovation	n. 新方法， 新事物； 革新， 创新
litter	vi. 乱扔废弃物 vt. 乱扔东西 n. 废弃物， 被胡乱扔掉的东西； 一窝； 杂乱的东西
charge	v. 索价；控告；使充电，使充满；向前冲 n. 费用； 管理； 控告， 指责； 电荷， 充电
shutter	n. 百叶窗； 快门
alternate	adj. 交替的， 轮流的； 间隔的 v. 轮流， 交替
biography	n. 传记
procedure	n. 程序； 手续； 步骤
sample	n. 样品，试样，样本 vt. 从…抽样； 品尝， 体验
plunge	n&v. 纵身投入， 猛冲， 猛跌
skeptical	adj. 表示怀疑的
ultraviolet	adj. 紫外的
planetary	n. 行星的
visa	n. 签证
diagnose	vt. 诊断； 判断
petition	v. 请愿， 正式请求 n. 请愿书，申请书；诉状
vicinity	n. 周围地区， 邻近地区
naive	adj. 幼稚的； 天真的； 轻信的
essential	adj. 必要的，本质的 n. 要素； 必需品
expenditure	n. 经费， 支出额； 花费， 支出， 消耗
vent	n. 通风口，排放口；开衩 vt. 表达， 发泄
haunt	vt. 常出没于；使苦恼，使担忧；萦绕在心头，缠绕 n. 常去的地方
precede	vt. 在…之前， 先于
gasp	vi. 喘气，倒抽气 vt. 喘着气说出 n. 喘气， 倒抽气
stroll	n&vi. 散步， 闲逛
furnish	vt. 供应， 提供； 装备
differentiate	vi. 区分，区别 vt. 区分， 区别； 使不同， 使有差异
contact	n. 接触，联系，交往 vt. 与…接触， 与…取得联系
garment	n. 衣服
discharge	v. 释放，排出；卸货 n. 释放， 放电
exclude	vt. 把…排除在外
scary	adj. 可怕的， 骇人的； 惊慌的， 害怕的； 胆小的， 易受惊的
criticism	n. 批评， 批判； 评论， 评论文章
enlighten	vt. 启发， 开导
utmost	adj. 最远的 n. 极限
prospective	adj. 预期的； 未来的； 可能的
deduct	v. 减去， 扣除
plaster	n. 灰浆，灰泥；石膏；橡皮膏，膏药 vt. 在…上抹灰泥， 厚厚地涂抹
consultancy	n. 顾问； 顾问服务公司
metropolitan	adj. 大都市的， 大都会的； 首都的
portray	vt. 描写， 描绘； 扮演， 饰演
garbage	n. 垃圾， 废物； 废话； 无用的资料
suspicious	adj. 猜疑的， 疑心的； 可疑的； 表示怀疑的
scrub	v. 用力擦洗，把…擦净；取消 n. 矮树丛， 灌木丛
complain	vi. 抱怨， 诉苦； 控告， 投诉
homogeneous	adj. 同种类的， 同性质的， 有相同特征的
affirm	vt. 断言， 坚持声称； 证实， 确认
profound	adj. 深度的， 深切的， 深远的； 知识渊博的， 见解深刻的； 深奥的
marble	n. 大理石； 弹子； 弹子游戏
anxiety	n. 焦虑， 忧虑； 渴望， 热望
adjust	vi. 适应 vt. 调整，调节；校正
aspiration	n. 强烈的愿望； 志向， 抱负
vigorous	adj. 朝气蓬勃的； 有力的， 用力的
vocal	adj. 喜欢畅所欲言的，直言不讳的；嗓音的，发声的 n. 声乐节目
deem	vt. 认为， 视为
origin	n. 起源， 起因； 出身， 血统
clash	vi. 发生冲突；不协调；砰地相撞，发出刺耳的撞击声 n. 冲突； 不协调； 刺耳的撞击声
overturn	vi. 倾覆， 翻转， 翻倒 vt. 使翻转，使倾覆，使倒下；颠覆，推翻
compel	vt. 强迫， 迫使屈服
depress	vt. 使沮丧， 使不景气； 按下
capable	adj. 有能力的， 有才能的
burden	n. 重担，精神负担 vt. 加重压于， 烦扰； 负担， 装载
salute	vi. 敬礼，致意 vt. 向…敬礼，向…致意；赞扬，颂扬 n. 敬礼， 致意
clasp	n. 扣子，钩子；紧抱，紧握 vt. 抱紧， 握紧； 扣住， 扣紧
symposium	n. 讨论会， 专题报告会； 专题论文集
hover	vi. 翱翔； 逗留在近旁， 徘徊； 彷徨， 犹豫
random	adj. 任意的， 随机的
dine	vi. 进餐 vt. 宴请
personality	n. 人格， 个性； 人物
sanction	vt. 批准，认可 n. 批准， 认可； 约束因素， 约束力； 国际制裁
alert	adj. 警觉的，留神的，注意的 vt. 使认识到，使意识到 n. 警戒， 戒备； 警报
deduce	vt. 推论， 推断， 演绎
oak	n. 栎树， 橡树； 栎木， 橡木
client	n. 委托人， 当事人； 顾客
sip	v. 小口地喝，抿，呷 n. 小口喝， 一小口的量
dutiful	adj. 恭敬顺从的； 尽职的
contend	vi. 争夺，竞争；搏斗，争斗 vt. 声称， 主张
conversion	n. 转变， 变换； 改变信仰， 皈依
brilliant	adj. 光辉的； 卓越的
gamble	vi. 赌博，打赌；投机，冒险 vt. 赌，以…为赌注 n. 赌博； 投机， 冒险
bound	adj. 一定的；有义务的 v. 跳跃；弹回，反跃；成为…的界限，给…划界 n. 跳跃； 界限， 限制
specification	n. 规格， 规范； 明确说明； 说明书
deport	vt. 把…驱逐出境
counter	n. 柜台； 计数器； 筹码
rhythm	n. 韵律， 节奏
layman	n. 门外汉， 外行
conserve	vt. 保护， 保藏， 保存
stroke	n. 中风；一举，一次努力；划桨，划水；击，敲；报时的钟声；笔画，一笔；抚摸 vt. 抚摸
breed	v. 繁殖； 养育， 培育； 酿成， 产生 n. 品种
tease	vt. 戏弄， 取笑； 挑逗， 撩拨
rash	adj. 轻率的，鲁莽的 n. 疹， 皮疹； 爆发的一连串
fragrance	n. 芳香， 香味； 香水
management	n. 管理； 处理； 管理部门， 管理人员
cylinder	n. 圆柱体， 圆筒； 气缸， 泵体
fort	n. 堡垒， 城堡
avoid	vt. 避免， 躲开； 撤销
comprehensive	adj. 广泛的； 综合的； 理解的
tunnel	v. 挖， 开 n. 隧道，坑道，地道
assign	vt. 指派， 分配； 布置； 指定
withdraw	v. 收回， 撤回； 撤退
straightforward	adj. 正直的， 坦率的； 易懂的， 简单的
elaborate	adj. 复杂的； 精心制作的 v. 详述， 详细制定
expert	adj. 熟练的 n. 专家
decade	n. 十年， 十年期
fulfill	vt. 履行， 实现， 完成； 满足， 使满意
crowd	vi. 聚集， 挤， 涌 n. 群，一批 vt. 挤；挤满
congress	n. 代表大会； 国会， 议会
mechanical	adj. 机械的， 机械制造的， 机械学的， 力学的； 呆板的
divine	adj. 神的， 神授的， 天赐的； 极好的， 极美的
slaughter	n&vt. 屠杀， 杀戮； 屠宰
foul	adj. 难闻的，发臭的；令人不愉快的，糟透了的；污浊的，肮脏的；下流的，辱骂性的；恶劣的，有暴风雨的；邪恶的，罪恶的 vt. 对…犯规；弄脏，弄污 n. 犯规
output	n. 产量；输出，输出功率 vt. 输出
intricate	adj. 错综复杂的， 复杂精细的
fatigue	v. 疲劳 n. 疲劳，劳累
agony	n. 痛苦， 苦恼
contemplate	vt. 盘算， 计议； 思量， 对…周密考虑； 注视， 凝视
majority	n. 多数， 大多数
drag	v. 拖，拉；迫使，硬拉；拖着脚步走 n. 累赘； 一吸， 一抽
zinc	n. 锌
costume	n. 服装， 服饰； 戏装， 成套服装
clamp	vt. 夹紧，夹住，固定 n. 夹头， 夹具， 夹钳
issue	v. 发行； 分发， 发出 n. 问题；发行；分发
maturity	n. 成熟
vain	adj. 徒劳的； 自负的
decree	n. 法令，政令；判决，裁决 vt. 判决， 命令
conservation	n. 保存， 保护， 避免浪费； 守恒
supplement	n. 增补， 补充； 增刊， 副刊 vt. 增补， 补充
contrast	vi. 形成对比， 对比之下显出区别 n. 对比，对照；反差[kən'trɑːst] vt. 对比，对照
verdict	n. 裁定； 定论， 判断性意见
stereo	adj. 立体的；立体声的 n. 立体声
defy	vt. 违抗， 蔑视； 使成为不可能； 惹， 激
doctrine	n. 教义， 教条； 主义
paragraph	n. 段， 节
mediate	vi. 调解，斡旋 vt. 经调解解决； 经斡旋促成
pursuit	n. 追求， 寻求； 追赶， 追逐； 事， 嗜好， 消遣
prophet	n. 先知； 预言者
cycle	n&v. 自行车、 摩托车； 循环
amplify	vt. 放大， 增强； 扩大； 详述， 进一步阐述
lure	vt. 吸引，引诱，诱惑 n. 吸引力， 诱惑物； 诱饵， 鱼饵
disposal	n. 丢掉， 销毁； 处理； 排列， 布置
settlement	n. 解决； 协议； 居留地， 小社区
whirl	vi. 旋转，急转；发晕，变混乱 n. 旋转， 回旋； 混乱； 一连串的事
recede	vi. 退， 退去， 渐渐远去； 向后倾斜， 缩进
literature	n. 文学， 文学作品； 文献， 图书资料
digest	vt. 消化， 领会 n. 文摘
slump	vi. 大幅度下降，暴跌；突然倒下 n. 萧条期， 低潮
prejudice	n. 偏见，成见 vt. 使有偏见； 对…不利， 损害
clearance	n. 净空， 余隙； 许可， 批准； 票据交换， 清算； 清除， 清理， 出空
customary	adj. 习惯上的， 惯常的， 合乎习俗的
immigrant	n. 移民， 侨民
guardian	n. 监护人； 守卫者， 保护者
veto	n&vt. 否决
thorn	n. 刺， 荆棘； 带刺小灌木
disposition	n. 性情， 性格； 意向， 倾向； 排列， 部署
corporate	adj. 法人团体的， 公司的； 全体的， 共同的
stabilize	v. 稳定， 稳固
compensate	v. 补偿， 弥补； 抵消
conscious	adj. 意识到的， 自觉的； 神志清醒的； 有意的， 存心的
transaction	n. 交易， 业务
constant	adj. 经常的，不断的，连续发生的；永恒的；忠实的，忠诚的 n. 常数， 恒量
bribe	vt. 向…贿赂，买通 n. 贿赂， 行贿物
certify	vt. 证明， 证实； 发证书给
intermittent	adj. 间歇的， 断断续续的
outrage	n. 义愤，愤慨；暴行，骇人听闻的事件 vt. 激起…的义愤， 激怒
solitary	adj. 单独的， 独自的； 单个的， 唯一的； 孤独的， 隐居的
diffuse	v. 扩散， 弥漫； 传播， 散布 adj. 冗长的， 漫无边际的； 四散的， 弥漫的
scramble	vi. 攀登，爬；争夺，抢夺 vt. 扰乱，搞乱 n. 攀登， 爬行； 争夺， 抢夺
orchestra	n. 管弦乐队
immerse	vt. 使浸没； 使沉浸在， 使专心于
sufficient	adj. 足够的， 充分的
marshal	n. 元帅，最高指挥官；总指挥，司仪；执法官，警察局长，消防队长 vt. 整理， 排列， 集结
champagne	n. 香槟酒
claim	vt. 声称，主张；对…提出要求，索取；使失踪或死亡；需要，值得 n. 要求； 认领； 索赔； 声称， 断言
widespread	adj. 分布广泛的， 普遍的
antique	adj. 古时的，古老的 n. 古物， 古玩， 古董
communication	n. 通讯， 交流， 交际； 通信工具， 交通联系
chronic	adj. 慢性的， 久病的； 长久的， 不断的； 积习难改的
toxic	adj. 有毒的， 因中毒引起的
contest	n. 竞赛， 争夺 vt. 争夺， 与…竞争； 对…提出质疑， 辩驳
author	n. 著作家， 作者
lever	n. 杠，杠杆；途径，手段，工具 vt. 撬动， 撬起
preserve	vt. 保护， 维持； 保存， 保藏； 腌制
establish	vt. 建立， 设立； 确立； 证实
expansion	n. 扩大； 扩充； 扩张； 膨胀
wrench	vt. 猛拧，猛扭；挣脱；使扭伤 n. 痛苦， 难受； 猛扭， 猛拉； 扳手
relevant	adj. 有关的， 切题的
expand	v. 扩大， 膨胀
gaze	n&vi. 凝视， 盯， 注视
proclaim	vt. 宣告， 宣布， 声明； 显示
magistrate	n. 地方行政官， 地方法官； 治安官
retrieve	vi. 重新得到， 取回， 收回； 挽回， 补救； 检索
survey	v. 俯瞰， 眺望； 全面审视， 调查； 测量， 勘定 n. [sə'veɪ]
jeopardize	vt. 危及， 危害
spy	vi. 当间谍；暗中监视 n. 间谍 vt. 看见， 发现
displace	vt. 取代， 替代； 迫使…离开家园， 使离开原位
predominant	adj. 占主导地位的， 显著的
recipe	n. 烹饪法， 食谱； 方法， 秘诀， 诀窍
ideology	n. 思想， 思想意识
mental	adj. 心理的， 精神的， 思想上的； 精神病的； 智力的
decent	adj. 像样的， 过得去的， 体面的； 宽厚的， 大方的； 正派的； 合乎礼仪的， 得体的
seam	n. 缝， 接缝； 煤层
investigate	v. 调查， 研究
racial	adj. 种族的， 人种的
illusion	n. 幻想， 错误的观念； 错觉， 幻觉， 假象
considerable	adj. 相当大的； 重要的
productivity	n. 生产力； 生产率
proposition	n. 论点， 主张； 建议， 提案； 命题
reserve	vt. 保留，留存；预订 n. 储备； 保留； 拘谨， 矜持； 替补队员； 后备部队； 自然保护区
savage	adj. 残暴的，凶猛的，粗鲁的；未开化的，野蛮的 n. 野蛮人，粗鲁的人 vt. 乱咬； 激烈抨击
heap	n. 堆， 大量
sympathy	n. 同情； 一致； 支持， 赞同
consumer	n. 消费者， 用户， 消耗者
cripple	n. 跛子，伤残人 vt. 使跛， 使受伤致残； 严重削弱， 使陷入瘫痪
brief	adj. 简短的，短暂的 vt. 向…介绍基本情况，做…的提要 n. 概要， 摘要
console	vt. 安慰，慰问 n. 控制台， 操纵台
initiative	n. 主动性， 首创精神； 主动的行动， 倡议； 主动权
recover	v. 重新获得， 挽回； 恢复
clockwise	adv. 顺时针方向地
embark	vi. 上船； 着手， 开始工作
medication	n. 药物治疗； 药物
drill	v. 钻， 打； 训练 n. 钻头；操练，训练
friction	n. 不和， 抵触； 摩擦
confer	vi. 商谈，商议 vt. 授予， 赋予
intelligent	adj. 聪明的； 理智的
clerk	n. 店员； 办事员， 职员
acknowledge	vt. 承认， 承认…的权威； 告知收到， 确认； 对…表示谢意， 报偿
equip	vt. 装备， 配备； 使有准备
deferential	adj. 恭敬的， 恭顺的
manuscript	n. 手稿， 原稿， 底稿； 手写本
luxury	n. 奢侈； 奢侈品
overthrow	vt. 推翻，打倒；使终止，摒弃 n. 推翻， 终止， 结束
knit	vi. 编结， 编织； 愈合 vt. 编结，编织；使紧密地结合，使紧凑；皱紧，皱
inflict	vt. 把…强加给； 使…遭受， 使…承担
worthwhile	adj. 值得花时间做的
inland	adv. 在内地， 向内地 adj. 内陆的， 内地的
stumble	vi. 绊脚， 绊倒； 跌跌撞撞地走； 结结巴巴
specialty	n. 特产， 名产， 特色菜； 专业， 专长
vary	vi. 变化， 有差异 vt. 改变，使多样化
readily	adv. 乐意地， 欣然地； 容易地； 很快地， 立即
coherent	adj. 条理清楚的， 连贯的； 一致的， 协调的
intercourse	n. 性交； 交流， 交往， 交际
convenience	n. 方便； 便利设施
decency	n. 得体；宽容，大方；正派，合乎礼仪，体面；
falsehood	n. 谬误， 虚假； 谎言， 说谎
discipline	n. 纪律，训练；惩罚；学科 vt. 训练； 惩罚， 处罚
ponder	v. 思索， 考虑， 沉思
objective	adj. 客观的， 无偏见的 n. 目标，目的
exert	vt. 用， 尽； 运用， 行使
scandal	n. 丑事， 丑闻； 流言蜚语； 反感， 愤慨
composite	adj. 混合成的，综合成的 n. 合成物； 复合材料
hinder	vt. 阻碍， 妨碍
scent	n. 香味，气味；臭迹；踪迹，线索；香水 vt. 嗅到， 察觉
estimate	vt. 估计； 评价 n. 估计； 评价； 看法
diploma	n. 毕业文凭， 毕业证书， 资格证书
exhibit	vt. 显示；陈列，展览 n. 展览品
brand	n. 商标，牌子 vt. 铭刻， 打烙印于； 加污名于， 谴责
suspension	n. 暂停， 中止； 暂令停止参加， 暂时剥夺； 悬架， 悬置机构； 悬浮液； 悬， 挂， 吊
alcohol	n. 酒精， 乙醇
inevitable	adj. 不可避免的， 必然的
deny	vt. 否定， 拒绝相信
trench	n. 沟， 沟渠
subtract	vt. 减， 减去； 去掉
recreation	n. 娱乐活动， 消遣
frustration	n. 挫败， 挫折， 受挫
allowance	n. 津贴， 补贴； 零用钱
hurricane	n. 飓风
hike	vi. 徒步旅行 n. 徒步旅行；增加，上升 vt. 提高
ancient	adj. 古代的， 古老的； 年老的， 看上去很老的
mission	n. 使命， 任务； 使团
cognitive	adj. 认知的， 认识能力的
adopt	vt. 收养； 采用， 采取； 正式通过， 批准
expire	vi. 期满， 终止； 断气， 死亡
smuggle	vt. 走私， 非法私运； 偷运， 偷带
hustle	v. 催促，赶紧做；猛推，挤，强迫 n. 忙碌， 奔忙； 挤
oppose	vt. 反对， 反抗
device	n. 器械， 装置； 设计； 手段， 策略
commentary	n. 实况报道， 解说词； 评论， 评论文章
sue	v. 控告， 起诉； 要求， 请求
conservative	adj. 保守的，守旧的；不时兴的，传统的 n. 保守的人
belly	n. 肚子， 腹部
access	n. 接近；通道，入口；接近的机会 vt. 存取
conference	n. 会议， 讨论会； 讨论， 商谈
primitive	adj. 原始的，早期的；简单的；粗糙的 n. 原人； 原始事物
knob	n. 球形把手， 球形柄； 旋钮； 小块
advisable	adj. 可取的； 适当的
overcome	vt. 战胜， 克服； 压倒， 使受不了
cabin	n. 小屋； 船舱， 机舱
recite	v. 背诵， 朗诵； 列举， 一一说出
oppress	vt. 压迫， 压制； 使沉重， 使烦恼
current	adj. 当前的，通用的；流行的，流传的 n. 潮流； 电流； 趋势， 倾向
heel	n. 脚后跟， 踵； 后跟
gloom	n. 昏暗， 阴暗； 忧郁， 沮丧
adore	vt. 崇拜， 敬慕； 爱慕， 热爱； 非常喜欢
persist	vi. 坚持， 持续
caution	n. 小心，谨慎；注意，警告 vt. 警告， 劝…小心
offensive	adj. 冒犯的，无礼的，使人不快的；进攻的，攻击性的 n. 进攻， 攻势
texture	n. 质地； 结构
closet	adj. 私下的；隐蔽的 n. 橱，壁橱 vt. 把…引进密室会谈
speculate	v. 推测， 推断； 投机， 做投机买卖
dismantle	vt. 拆开， 拆卸
monster	adj. 大的， 庞大的 n. 怪物；极其残酷的人；巨人，巨兽，巨大的东西
bud	vi. 发芽， 萌芽 n. 花蕾，叶芽
confirm	vt. 证实， 肯定； 确认； 批准
bug	n. 虫子；小病；故障，缺陷；窃听器 vt. 烦扰， 纠缠； 在…装窃听器
prescient	adj. 预知的， 预见的
acquaint	vt. 使认识， 使了解； 使熟悉
elastic	adj. 有弹性的； 灵活的 n. 松紧带
consequent	adj. 作为结果的， 随之发生的
vast	adj. 巨大的， 大量的； 浩瀚的
intervene	vi. 干涉， 干预； 干扰， 阻挠
symbol	n. 象征； 符号， 标志
ignite	vi. 着火 vt. 点燃，引发
commercial	adj. 商业的， 商务的； 商品化的， 商业性的
revelation	n. 被提示的真相， 新发现； 揭示， 透露， 显示
available	adj. 现成可使用的， 通用的； 可取的； 联系的； 可得到的
innumerable	adj. 无数的， 数不清的
advocate	vt. 拥护， 提倡， 主张 n. 拥护者， 提倡者； 辩护者， 律师
confine	vt. 限制，使局限；使不外出，禁闭
quest	n. 寻找， 搜索； 追求
frequency	n. 屡次， 次数， 频率； 经常发生
elicit	vt. 诱出， 探出
relegate	vt. 使降位， 使降级； 把…委托给
trivial	adj. 琐碎的， 不重要的
burial	n. 葬， 掩埋； 葬礼
luggage	n. 行李
drawback	n. 缺点， 欠缺； 不利条件
longevity	n. 长寿， 寿命
military	adj. 军事的；军用的 n. 军队， 武装力量
dynamic	adj. 动力的， 动力学的； 动态的； 有活力的， 有生气的
wardrobe	n. 衣柜； 全部衣物
reluctant	adj. 不情愿的， 勉强的
conscientious	adj. 认真的， 勤勤恳恳的
passion	n. 激情， 热情； 酷爱
generate	vt. 发生， 引起； 生殖
extreme	adj. 极度的；最后的 n. 极端， 过分
tuck	vt. 把边塞到下面；把…夹入，把…藏入 n. 褶， 裥
authoritative	adj. 有权威性的， 可信的； 专断的， 命令式的
athlete	n. 运动员， 体育家
upright	adv. 挺直着， 竖立着 adj. 垂直的；正直的，诚实的
extract	vt. 取出，抽出；采掘，提炼，榨取；获得，索取；摘录['3kstrækt] n. 摘录， 选段； 提出物， 精， 汁
obscure	adj. 不著名的，不重要的；费解的，模糊不清的 vt. 使变糊， 掩盖
dismay	n. 失望，气馁；惊恐 vt. 使失望， 使气馁； 使惊恐
expend	vt. 花费， 消费； 消耗
forge	vt. 打制， 锻造； 伪造
demonstrate	vt. 说明， 论证； 表露
region	n. 地区， 地带， 区域； 范围， 幅度
deceive	vi. 行骗 vt. 欺骗，蒙蔽
preview	n. 预映， 预演； 预告
ingenious	adj. 设计独特的， 别致的， 巧妙的； 灵巧的， 善于创造发明的
questionnaire	n. 问卷， 征求意见表
breakthrough	n. 突破， 突破性进展， 重要的新发现
snack	n. 快餐， 小吃， 点心
yoke	n. 牛轭；束缚，枷锁 vt. 结合， 联结
destination	n. 目的地， 终点； 目标
throne	n. 御座， 宝座； 王位， 王权
privacy	n. 个人自由； 隐私， 私生活， 私事
reciprocal	adj. 相互的； 互惠的
vertical	adj. 垂直的， 竖式的
inventory	n. 详细目录， 存货清单
vivid	adj. 鲜艳的； 生动的， 栩栩如生的
flush	vi. 发红 adj. 齐平的， 同高的
heir	n. 继承人
screw	n. 螺丝 vt. 用螺钉固定， 拧， 拧紧
kit	n. 成套工具，成套用品；配套元件 vt. 装备
virtue	n. 善， 美德； 优点， 长处
emphasize	vt. 强调， 着重
turnover	n. 营业额， 成交量； 人员调整， 人员更替率
mortal	adj. 终有一死的；致命的；你死我活的，不共戴天的 n. 凡人， 人类
coverage	n. 新闻报道； 覆盖范围
figure	vi. 出现；合乎情理 n. 数字；人物；算术；体型，风姿；轮廓；画像，塑像；图，图形 vt. 计算； 认为， 猜想
brutal	adj. 野兽般的， 残忍的； 无情的， 冷酷的， 难以忍受的
slight	adj. 轻微的，微小的 v. 侮慢；轻视，冷落
ore	n. 矿， 矿石
corrupt	adj. 堕落的，腐败的，贪赃舞弊的 vt. 腐蚀， 使堕落
preclude	vt. 排除； 阻止， 妨碍
previous	adj. 先的， 前的， 以前的
regime	n. 政治制度， 政权
transmit	vt. 传送， 传递； 传染； 播送， 发射
commemorate	vt. 纪念， 庆祝
argue	vi. 争论，争辩，辩论 vt. 主张； 说服
consumption	n. 消耗， 消费； 肺病
premature	adj. 比预期时间早的； 不成熟的， 仓促的
superior	adj. 上级的，较高的；优越的；有优越感的，高傲的 n. 上级， 长官
drought	n. 干旱， 旱灾
periodical	adj. 周期的； 定期的； 时而发生的 n. 期刊
leaflet	v. 散发传单 n. 传单，散页印刷品，小册子
accessory	n. 附件， 零件， 配件； 装饰品； 同谋， 帮凶， 包庇犯
compromise	v. 妥协； 危及； 放弃 n. 妥协，和解；折中办法
retort	n&v. 反驳， 回嘴
electrify	vt. 使充电， 使电气化； 使激动， 使兴奋
seminar	n. 研究班， 研讨会
fringe	adj. 附加的 n. 刘海；饰以流苏的边；边缘，外围 vt. 成为…的边缘
competition	n. 比赛； 竞争
beyond	adv. 在更远处， 再往后 prep. 在…的那边，远于；迟于；越出
hazard	n. 危险，公害 vt. 尝试着做， 冒…风险
justify	vt. 证明…是正当的
dreadful	adj. 糟透了的， 极不合意的； 极端的， 极其大的； 可怕的
voluntary	adj. 自愿的， 志愿的
connection	n. 连接； 联系； 连接物， 连接点； 亲戚
proof	adj. 耐…的， 能防…的 n. 证据，证明；校样，样张
militant	adj. 激进的；好斗的 n. 激进分子， 斗士
simulate	vt. 模仿， 模拟； 假装， 冒充
intricacy	n. 错综复杂；
phase	n. 阶段； 方面； 相， 相位
dilute	adj. 稀释的， 冲淡的 vt. 稀释，冲淡
inclusive	adj. 包括一切的， 包括一切费用在内的； 所有数目包括在内的
efficiency	n. 效率； 功效， 效能
ethnic	adj. 种族的
spectacle	n. 演出， 场面； 景象， 壮观； 眼镜
overhead	adv. 在头顶上 adj. 在头顶上的；架空的 n. 经常费用， 管理费用
contract	v. 缩小； 订合同； 感染， 染上 n. 契约， 合同
conclude	vi. 结束， 终了 vt. 推断出，推论出；缔结，议定
profitable	adj. 有利可图的， 有益的
misfortune	n. 不幸， 厄运， 逆境； 不幸事故， 灾难， 灾祸
comprehension	n. 理解， 理解力， 领悟； 理解力测验
susceptible	adj. 易受影响的； 过敏的； 能经受的， 容许的
leather	n. 皮革； 皮革制品
insight	n. 洞察力； 洞悉， 深刻的见解
intact	adj. 完整无缺的； 未经触动的； 未受损伤的
instrumental	adj. 起作用的， 有帮助的； 用乐器演奏的
fabric	n. 织物， 纺织品； 结构
revolutionary	adj. 革命的；革新的 n. 革命者
unemployment	n. 失业， 失业人数
juvenile	adj. 少年的，少年特有的；幼稚的，不成熟的 n. 未成年人， 少年
force	vt. 强迫；用力推动，用力打开 n. 军队， 兵力； 暴力， 武力； 力， 力气； 影响力， 效力
sympathetic	adj. 同情的； 和谐的； 赞同的， 支持的； 合意的
periodic	adj. 周期的， 定期的， 时而发生的
distribution	n. 分发， 分配， 分布
derive	vi. 起源， 衍生 vt. 取得，得到；追溯…的起源或来由
capacity	n. 容量； 能力； 能量； 才能； 身份， 地位
cope	vi. 应付， 处理
overhear	vt. 无意中听到， 偷听到
dart	vi. 猛冲，飞奔 vt. 投射 n. 飞镖， 飞镖游戏； 急驰， 飞奔
flaw	n. 缺点， 瑕疵， 缺陷
saturate	vt. 使湿透， 浸透； 使充满， 使饱和
feature	n. 特征，特色；面貌；特写，专题节目；故事片 vt. 突出； 由…主演
flat	adv. 平直地； 直截了当地 adj. 平的；固定的；漏气的；单调的，沉闷的；浅的 n. 一套房间，单元住宅
assert	vt. 肯定地说， 断言； 维护， 坚持； 坚持己见
climax	n. 高潮， 最令人兴奋的部分
recall	vt. 回忆； 召回， 叫回； 收回， 撤销
rectangular	adj. 长方形的， 矩形的
flap	vi. 飘动， 拍动； 振翅 n. 片状垂悬物；飘动，摆动，振动；激动，慌忙状态 vt. 使拍动，使飘动
precise	adj. 精确的， 准确的； 严谨的
sensible	adj. 明智的， 合情理的
objection	n. 反对， 异议； 反对的理由
precious	adj. 珍贵的， 宝贵的
contrive	vt. 谋划， 策划； 设法做到； 设计， 想出
inhabitant	n. 居民， 住户
fraction	n. 小部分， 片断； 【数】 分数
token	adj. 象征性的， 装样子的 n. 筹码；信物，标志，纪念品；代金券，礼券
emotion	n. 情感， 感情； 激动
massive	adj. 大的， 大而重的； 大块的； 大量的， 大规模的
assess	vt. 对估价； 评价， 评论
mingle	vi. 混合起来， 相混合； 相交往， 相往来 vt. 使混合，使相混
prescription	n. 处方， 药方， 药； 开处方， 开药方
spectator	n. 观众， 旁观者
edible	adj. 可以吃的， 可食用的
prone	adj. 易于…的， 很有可能…的； 俯卧的
chorus	n. 合唱队；合唱，合唱曲；副歌，叠句；齐声，齐声说的话 vt. 齐声说， 随声附和
owe	vt. 欠； 应把…归功于； 感激， 感恩
asset	n. 资产， 财产； 有价值的特性或技能， 优点
exposition	n. 阐述， 讲解； 展览会， 博览会
minimum	adj. 最低的， 最小的 n. 最低限度，最小量
apology	n. 道歉， 认错， 谢罪
reveal	vt. 揭露， 泄露； 展现， 显示
adequate	adj. 足够的； 可以胜任的
owl	n. 猫头鹰
cork	n. 软木，软木塞 vt. 用瓶塞塞住
tremendous	adj. 极大的， 非常的； 精彩的， 了不起的
norm	n. 标准， 规范； 准则
condense	vt. 使冷凝， 使凝结； 浓缩， 压缩， 简缩
impetus	n. 推动， 促进， 刺激； 推动力
indignation	n. 愤怒， 愤慨， 义愤
barrier	n. 栅栏； 检票口； 屏障； 障碍， 隔阂
realistic	adj. 现实的； 实际可行的； 现实主义的， 逼真的
divert	vt. 使转向， 使改道； 转移， 转移…的注意力； 使娱乐， 使消遣
conspicuous	adj. 显眼的， 明显的
verse	n. 诗， 诗句
criminal	adj. 犯罪的， 刑事的 n. 犯人，罪犯，刑事犯
furious	adj. 狂怒的， 暴怒的； 强烈的， 激烈的
obesity	n. 过度肥胖
tan	vi. 晒成棕褐色 vt. 使晒成棕褐色；硝制 n. 棕褐色， 棕黄色； 晒成棕褐色， 晒黑
individual	adj. 个别的；独特的 n. 个人， 个体
briefcase	n. 公文包， 公事包
nuisance	n. 讨厌的人； 麻烦事
brace	vi. 做好准备；振作精神 vt. 使防备，使受锻炼；支住，撑牢，使绷紧 n. 支架， 托架
constrain	vt. 限制， 约束； 克制， 抑制
brisk	adj. 轻快的， 生气勃勃的； 兴隆的， 繁忙活跃的； 寒冷而清新的
prestige	n. 威信， 威望
insulation	n. 绝缘
cord	n. 细绳， 粗线， 索； 灯芯绒裤
startle	vt. 使惊吓， 使吃惊
interim	adj. 暂时的，临时的 n. 间歇， 过渡期间
fraud	n. 欺诈， 诈骗； 骗子
testimony	n. 证词； 见证， 证明
council	n. 理事会， 委员会
reaffirm	vt. 重申； 再确认
enforce	vt. 实施， 执行； 强制， 强迫， 迫使
glitter	vi. 闪闪发光，闪耀 n. 闪光， 灿烂的光辉； 耀眼， 辉煌
destined	adj. 命中注定的， 预定的； 以…为目的地的
repression	n. 压抑， 压制， 镇压
fragile	adj. 易碎的， 脆的， 易损坏的； 虚弱的， 脆弱的
penalty	n. 处罚， 惩罚； 罚金
sociology	n. 社会学
exile	n. 流放，流亡；被流放者，流亡国外者 vt. 流放， 放逐， 使流亡
scale	n. 大小，规模；等级，级别；天平，磅秤；比例；刻度，标度；鳞 vt. 攀登， 爬越
gigantic	adj. 巨大的， 庞大的
distinct	adj. 与其他不同的； 清楚的， 明确的
vegetation	n. 植物， 草木
recovery	n. 恢复， 痊愈； 追回， 寻回， 收复
geology	n. 地质学； 地质情况
hoist	vt. 举起，升起，吊起 n. 起重器械； 举起， 升起， 吊起
aware	adj. 知道的， 意识到的
quart	n. 夸脱
numerical	adj. 数字的； 用数字表示的； 数值的
limp	vi. 一瘸一拐地走，蹒跚 adj. 软弱的，无生气的，无精神的；软的，松沓的 n. 跛行
security	n. 安全， 保障； 抵押品； 证券
award	n. 奖，奖品；判定 vt. 授予， 给予； 判给， 裁定
buck	vi. 猛然弓背跃起 n. 美元，澳元；雄鹿，雄兔
eligible	adj. 有条件被选中的； 合适的， 合意的
alarm	n. 惊恐，忧虑，警报 vt. 使惊恐， 使担心
feeble	adj. 虚弱的， 衰弱的， 无力的； 无效的， 无益的
appraisal	n. 估计， 估量； 评价
continual	adj. 连续的； 频频的
herb	n. 药草， 香草； 草本植物
prose	n. 散文
limb	n. 肢， 臂， 腿； 树枝
orientation	n. 方向， 目标， 方位； 熟悉情况， 适应， 情况介绍
refreshment	n. 茶点， 点心； 恢复， 精神爽快
confidence	n. 信任， 信赖； 信心， 自信
arbitrary	adj. 随心所欲的； 专断的
intent	adj. 专心的， 专注的； 急切的 n. 意图，意向，目的
passive	adj. 被动的， 消极的
fertilizer	n. 肥料
corresponding	adj. 相应的， 符合的
oath	n. 誓言， 誓约； 咒骂， 诅咒语
response	n. 回答， 答复； 反应， 响应
treaty	n. 条约， 协议， 协定
dignity	n. 庄严， 端庄； 尊严， 高贵
challenge	n. 挑战，邀请比赛；艰巨的任务；怀疑，质问 vt. 反对， 公然反抗； 向…挑战； 对…质疑
rival	adj. 竞争的，对抗的 n. 竞争对手，敌手；可与匹敌的人 vt. 与…竞争； 与…匹敌， 比得上
`,Yj=`
pharmacy	n. 药房；配药学，药剂学；制药业；一批备用药品
toilsome	adj. 辛苦的；劳苦的；费力的
efface	v. 抹去，抹掉；使自己不受人注意
plastic	adj. 塑料的；（外科）造型的；可塑的 n. 塑料制品；整形；可塑体
advocacy	n. 主张；拥护；辩护
clutter	n. 杂乱，混乱 v. 使凌乱；胡乱地填满
profession	n. 职业，专业；声明，宣布，表白
parsimonious	adj. 吝啬的；过于节俭的；质量差的
Phosphorus	n. 磷
bravo	n. 喝彩；亡命徒 v. 喝彩 int. 好极了
alkali	n. 碱；可溶性无机盐 adj. 碱性的
augment	v. 增加；增大 n. 增加；增大
quarrelsome	adj. 喜欢吵架的；好争论的
upheave	v. 鼓起；举起；使隆起
unaccountable	adj. 无责任的；莫名其妙的；不可理解的
surmise	v. 猜测；推测 n. 推测；猜度
celebrity	n. 名人；名声
laborious	adj. 勤劳的；艰苦的；费劲的
petulant	adj. 暴躁的；任性的；难以取悦的
volant	adj. 迅速的；会飞的；飞行的 n. (Volant)人名；(法)沃朗
degenerate	v. 使退化；恶化 adj. 退化的；堕落的 n. 堕落的人
chimerical	adj. 空想的，妄想的；荒唐的
slope	n. 斜坡；倾斜；斜率；扛枪姿势 v. 倾斜；逃走
scathe	vt. 损伤；损害 n. 损伤；危害；损害
generation	n. 一代；产生；一代人；生殖
brigade	n. 旅；大部队；队列 v. 把…编成旅；把…编成队
alternate	v. 交替；轮流 adj. 交替的；轮流的 n. 替换物
triennial	adj. 每三年的；连续三年的 n. 三年生植物
impugn	v. 指责，非难；抨击；反驳；对…表示怀疑
altimeter	n. 测高仪，高度计
orthodoxy	n. 正统；正教；正统说法
gasoline	n. 汽油
hindrance	n. 障碍；妨碍；妨害；阻碍物
flaunt	v. 炫耀；飘扬 n. 炫耀；飘扬；招展
evolution	n. 演变；进化论；进展
toll	n. 通行费；代价；钟声；伤亡人数 v. 征收；敲钟
assertive	adj. 肯定的；独断的；坚定而自信的
median	n. n中值，中位数；三角形中线；梯形中位线 adj. 中值的；中央的
salient	adj. 显著的；突出的；跳跃的 n. 凸角；突出部分
constructive	adj. 建设性的；推定的；构造上的；有助益的
anathema	n. 诅咒；革出教门；被诅咒者；令人厌恶的人
retrograde	adj. 倒退的；退化的；次序颠倒的 v. 逆行；倒退；退步 adv. 倒退地；向后地
wherever	adv. 无论什么地方；究竟在哪里 conj. 无论在哪里；无论什么情况下
effeminate	adj. 柔弱的；女人气的 n. 女子气的男人 vt. 使柔弱；使无男子汉气概 vi. 变得无男子汉气概；变得柔弱
torrid	adj. 晒热的；热情的
dynamic	adj. 动态的；动力的；动力学的；有活力的 n. 动态；动力
resignation	n. 辞职；放弃；辞职书；顺从
literacy	n. 读写能力；精通文学
dissipate	v. 浪费；使…消散
imaginary	adj. 虚构的，假想的；想像的；虚数的
symptomatic	adj. 有症状的；症候的
purposeful	adj. 有目的的；有决心的
pervade	v. 遍及；弥漫
aesthetic	adj. 美的；美学的；审美的，具有审美趣味的
caustic	adj. [化学] 腐蚀性的；[化学] 苛性的；刻薄的；焦散的 n. [助剂] 腐蚀剂；苛性钠；焦散曲线
timer	n. [电子] 定时器；计时器；计时员，记时员；跑表；延时调节器
helix	n. 螺旋，螺旋状物；[解剖] 耳轮
advantageous	adj. 有利的；有益的
lucrative	adj. 有利可图的，赚钱的；合算的
canonical	adj. 依教规的；权威的；牧师的 n. 牧师礼服
guise	n. 伪装；装束；外观 vt. 使化装 vi. 伪装
censorship	n. 审查制度；审查机构
illegal	adj. [法] 非法的；违法的；违反规则的 n. 非法移民，非法劳工
consultant	n. 顾问；咨询者；会诊医生
burgeon	n. 芽, 嫩枝 v. 萌芽, 发芽
automaton	n. 自动机；机器人；自动机器
analyze	v. 对…进行分析，分解（等于analyse）
resonate	v. 共鸣；共振
safeguard	n. [安全] 保护；保卫；保护措施 v. [安全] 保护，护卫
rectify	v. 改正；精馏；整流
debut	n. 初次登台；开张 v. 初次登台
braze	v. 用黄铜制；使成黄铜色 n. 铜焊
pestilence	n. 瘟疫（尤指鼠疫）；有害的事物
medieval	adj. 中世纪的；原始的；仿中世纪的；老式的
suspend	v. 延缓，推迟；使暂停；使悬浮
demolition	n. 拆除（等于demolishment）；破坏；毁坏
soliloquy	n. 独白；自言自语
exemplary	adj. 典范的；惩戒性的；可仿效的
paradigm	n. 范例；词形变化表
dilate	v. 扩大；膨胀；详述
entity	n. 实体；存在；本质
pecuniary	adj. 金钱的；应罚款的
grandiose	adj. 宏伟的；堂皇的；浮夸的；宏大的
censorious	adj. 挑剔的；受批判的（名词censoriousness，副词censoriously）
atypical	adj. 非典型的；不合规则的
gastronomy	n. 烹饪法，美食法；享乐主义
witticism	n. 妙语；名言；俏皮话
enumerate	v. 列举；枚举；计算
echo	v. 反射；重复 n. 回音；效仿
qualification	n. 资格；条件；限制；赋予资格
invalid	adj. 无效的；有病的；残废的 n. 病人；残废者 v. 使伤残；使退役
antediluvian	adj. 大洪水前的；远古的；陈旧的；旧式的 n. 大洪水以前的人；年迈的人；不合时宜的人
moratorium	n. 暂停，中止；[金融] 延期偿付
provocative	adj. 刺激的，挑拨的；气人的 n. 刺激物，挑拨物；兴奋剂
undulate	v. 起伏，波动；震动；呈波浪形 adj. 波动的；起伏的；波浪形的
salvage	n. 打捞；海上救助；抢救财货；救难的奖金 v. 抢救；海上救助
gourmet	n. 美食家 adj. 菜肴精美的
reciprocal	adj. 互惠的；相互的；倒数的，彼此相反的 n. [数] 倒数；互相起作用的事物
adulatory	adj. 阿谀的，奉承的；谄媚的
append	v. 附加；贴上；盖章 n. 设置数据文件的搜索路径
rationalize	v. 使……合理化；使……有理化；为……找借口
assay	n. 化验；试验 v. 分析；化验；尝试
renovate	v. 更新；修复；革新；刷新
leisure	n. 闲暇；空闲；安逸 adj. 空闲的；有闲的；业余的
churlish	adj. 没有礼貌的；脾气暴躁的
sermonize	v. 说教；布道
incandescent	adj. 辉耀的；炽热的；发白热光的
quadrant	n. 象限；[海洋][天] 象限仪；四分之一圆
canine	adj. 犬的；犬齿的；犬科的；似犬的 n. 犬；[解剖] 犬齿
seminar	n. 讨论会，研讨班
veracity	n. 诚实；精确性；老实；说真实话
disrepute	n. 不光彩，坏名声
column	n. 纵队，列；专栏；圆柱，柱形物
deduce	v. 推论，推断；演绎出
contradict	v. 反驳；否定；与…矛盾；与…抵触
effulgence	n. 灿烂；光辉
votary	n. 崇拜者；出家人 adj. 立誓任圣职的；誓约的
sparse	adj. 稀疏的；稀少的
inveterate	adj. 根深的；积习的；成癖的
indicator	n. 指示器；[试剂] 指示剂；[计] 指示符；压力计
ray	n. 射线；光线；【鱼类】鳐形目(Rajiformes)鱼 v. 放射；显出
aristocrat	n. 贵族
deduct	v. 扣除，减去；演绎
disturb	v. 打扰；妨碍；使不安；弄乱；使恼怒
discord	n. 不和；不调和；嘈杂声 v. 不一致；刺耳
brightness	n. [光][天] 亮度；聪明，活泼；鲜艳；愉快
pusillanimous	adj. 胆怯的；懦弱的；优柔寡断的
ruthless	adj. 无情的，残忍的
mordacious	adj. 锐利的；辛辣的
quantum	n. 量子论；额；美国昆腾公司（世界领先的硬盘生产商）
bravado	n. 虚张声势；冒险
tawdry	adj. 非常华丽的；廉价而俗丽的 n. 俗丽的东西；廉价而俗丽之物
supplement	v. 增补，补充 n. 增补，补充；补充物；增刊，副刊
aqueous	adj. 水的，水般的
espy	v. 看到；认出；发现 n. (Espy)人名；(英、法)埃斯皮
lament	n. 挽歌；恸哭；悲痛之情 v. 哀悼；悲叹；悔恨
hinder	v. 成为阻碍 adj. 后面的 n. (Hinder)人名；(芬)欣德
admonish	v. 告诫；劝告
dominate	v. 控制；支配；占优势；在…中占主要地位
vacillate	v. 犹豫；踌躇；摇摆
proportionate	adj. 成比例的；相称的；适当的 vt. 使成比例；使相称
conformity	n. 一致，适合；符合；相似
axis	n. 轴；轴线；轴心国
misrepresent	v. 歪曲，误传；不合适地代表
conductor	n. 导体；售票员；领导者；管理人
travail	n. 分娩的痛苦；艰苦劳动 v. 辛勤努力；经受分娩的阵痛
inefficacious	adj. 无用的；无效果的
excrement	n. 粪便，排泄物
magnitude	n. 大小；量级；[地震] 震级；重要；光度
orthodox	adj. 正统的；传统的；惯常的；东正教的 n. 正统的人；正统的事物
colleague	n. 同事，同僚
assignee	n. 代理人；受托人；分配到任务的人
brittle	adj. 易碎的，脆弱的；易生气的
assertion	n. 断言，声明；主张，要求；坚持；认定
confront	v. 面对；遭遇；比较
peruse	v. 详细考察；精读
deport	v. 驱逐出境；举止；放逐 n. (Deport)人名；(捷)德波特；(法)德波尔
ludicrous	adj. 滑稽的；荒唐的
advantage	n. 优势；利益；有利条件 v. 获利
rag	n. 破布；碎屑 v. 戏弄；责骂
amusement	n. 消遣，娱乐；乐趣
intermittent	adj. 间歇的；断断续续的；间歇性
exhaust	v. 排出；耗尽；使精疲力尽；彻底探讨 n. 排气；废气；排气装置
suspicious	adj. 可疑的；怀疑的；多疑的
regress	v. 逆行，倒退；复归 n. 回归；退回
souvenir	n. 纪念品；礼物 vt. 把…留作纪念
recumbent	adj. 斜倚的；休息的
neural	adj. 神经的；神经系统的；背的；神经中枢的 n. (Neural)人名；(捷)诺伊拉尔
amateur	n. 爱好者；业余爱好者；外行 adj. 业余的；外行的
sealant	n. [机] 密封剂
subside	v. 平息；减弱；沉淀；坐下
haste	n. 匆忙；急忙；轻率 vi. 匆忙；赶紧 vt. 赶快
numeration	n. 计算；数字的读法；[数] 命数法；编号
depraved	adj. 堕落的；腐化的；卑鄙的 v. 使腐化（deprave的过去式和过去分词）
zeal	n. 热情；热心；热诚
preamble	n. 序文；电报报头；先兆 v. 作序文
testimonial	n. 证明书；推荐书 adj. 证明的；褒奖的；表扬的
upturn	n. 情况好转 vt. 使……转朝上；翻转 vi. 向上
alight	v. 下来；飞落 adj. 烧着的；点亮着的
indiscriminate	adj. 任意的；无差别的；不分皂白的
rationality	n. 合理性；合理的行动
sterling	adj. 纯正的；英币的；纯银制的 n. 英国货币；标准纯银
element	n. 元素；要素；原理；成分；自然环境
obstinate	adj. 顽固的；倔强的；难以控制的
writhe	v. 翻滚；蠕动 n. 翻滚；扭动；苦恼
embody	v. 体现，使具体化；具体表达 n. (Embody)人名；(英)恩博迪
ascetic	adj. 苦行的；禁欲主义的 n. 苦行者；禁欲者
equilibrium	n. 均衡；平静；保持平衡的能力
dominant	adj. 显性的；占优势的；支配的，统治的 n. 显性
rob	v. 抢劫；使…丧失；非法剥夺
recant	v. 宣布放弃；公开认错
interpreter	n. 解释者；口译者；注释器
verification	n. 确认，查证；核实
brusque	adj. 唐突的；直率的；无礼的 n. (Brusque)人名；(法)布吕斯克
dissect	v. 切细；仔细分析
branch	v. 分支；出现分歧 n. 树枝，分枝；分部；支流
cathode	n. 阴极（电解）
turmoil	n. 混乱，骚动
mandate	n. 授权；命令，指令；委托管理；受命进行的工作 v. 授权；托管
trivial	adj. 不重要的，琐碎的；琐细的
lugubrious	adj. 悲哀的，悲惨的
space	n. 空间；太空；距离 v. 留间隔
rationalism	n. 理性主义；唯理主义
epitaph	n. 碑文，墓志铭
resilience	n. 恢复力；弹力；顺应力
cognate	adj. [地质] 同源的；同类的 n. 同族；同根词
winsome	adj. 迷人的；可爱的；引人注目的
appellation	n. 称呼；名称；名目
agitation	n. 激动；搅动；煽动；烦乱
unanimity	n. 同意，全体一致
commotion	n. 骚动；暴乱
astute	adj. 机敏的；狡猾的，诡计多端的
pepsin	n. 胃蛋白酶
retort	n. 反驳，顶嘴；曲颈瓶 v. 反驳，反击
subconscious	adj. 潜意识的；下意识的 n. 潜在意识；下意识心理活动
enormous	adj. 庞大的，巨大的；凶暴的，极恶的
foster	v. 培养；养育，抚育；抱（希望等） adj. 收养的，养育的 n. (Foster)人名；(英、捷、意、葡、法、德、俄、西)福斯特
ethereal	adj. 优雅的；轻飘的；缥缈的；超凡的
irresolute	adj. 优柔寡断的；踌躇不定的；无决断的
convoke	v. 召集；召集…开会
codicil	n. 遗嘱的附录
reserved	adj. 保留的，预订的；缄默的，冷淡的，高冷的；包租的
morose	adj. 郁闷的；孤僻的
drowsy	adj. 昏昏欲睡的；沉寂的；催眠的
gibberish	n. 乱语；快速而不清楚的言语
dogmatist	n. 教条主义者；独断家；独断论者
alien	adj. 外国的；相异的，性质不同的；不相容的 n. 外国人，外侨；外星人 v. 让渡，转让
cartographer	n. 制图师；地图制作者
embitter	v. 使怨恨；使难受；使受苦
obtrusive	adj. 突出的；强迫人的；冒失的
emulate	v. 仿真；模仿；尽力赶上；同…竞争 n. 仿真；仿效
regale	v. 取悦；盛情款待 n. 款待
innumerable	adj. 无数的，数不清的
calorie	n. 卡路里（热量单位）
nemesis	n. 报应；给与惩罚的人；天罚
conundrum	n. 难题；谜语
whine	v. 发牢骚；哭诉；嘎嘎响；发呜呜声 n. 抱怨；牢骚；哀鸣
incriminate	v. 控告；暗示有罪
extinction	n. 灭绝；消失；消灭；废止
penalty	n. 罚款，罚金；处罚
vigilance	n. 警戒，警觉；警醒症
analyst	n. 分析者；精神分析医师；分解者
joint	n. 关节；接缝；接合处，接合点；（牛，羊等的腿）大块肉 adj. 共同的；连接的；联合的，合办的 v. 连接，贴合；接合；使有接头
furtive	adj. 鬼鬼祟祟的，秘密的
authentic	adj. 真正的，真实的；可信的
contract	v. 收缩；感染；订约 n. 合同；婚约
philosophy	n. 哲学；哲理；人生观
defiant	adj. 挑衅的；目中无人的，蔑视的；挑战的
uphold	v. 支撑；鼓励；赞成；举起
infringe	v. 侵犯；违反；破坏
genome	n. 基因组；染色体组
equestrian	adj. 马的；骑马的；骑术的 n. 骑手；骑马者
stationary	adj. 固定的；静止的；定居的；常备军的 n. 不动的人；驻军
imitate	v. 模仿，仿效；仿造，仿制
tangent	adj. 切线的，相切的；接触的；离题的 n. [数] 切线，[数] 正切
vain	adj. 徒劳的；自负的；无结果的；无用的
interference	n. 干扰，冲突；干涉
violent	adj. 暴力的；猛烈的
quotation	n. [贸易] 报价单；引用语；引证
impurity	n. 杂质；不纯；不洁
elevated	adj. 提高的；高尚的；严肃的；欢欣的 v. 提高；抬起；振奋；提拔（elevate的过去分词） n. 高架铁路
polish	n. 磨光，擦亮；擦亮剂；优雅，精良 v. 擦亮，变光滑 adj. 波兰的
decay	v. 衰退，[核] 衰减；腐烂，腐朽 n. 衰退，[核] 衰减；腐烂，腐朽
disciple	n. 门徒，信徒；弟子
grip	n. 紧握；柄；支配；握拍方式；拍柄绷带 v. 紧握；夹紧
prepossessing	adj. 给人好感的；有魅力的；引人注意的 v. 预先影响；使先具有（prepossess的现在分词）
besmear	v. 弄脏，涂抹；玷污
recourse	n. 求援，求助；[经] 追索权；依赖；救生索
repudiate	v. 拒绝；否定；批判；与…断绝关系；拒付
centenary	n. 一百年；百年纪念 adj. 一百年的
assailant	n. 攻击者 adj. 袭击的；攻击的
brigand	n. 强盗；土匪；盗贼
jeopardize	v. 危害；使陷危地；使受危困
sanctimonious	adj. 假装虔诚的；假装圣洁的；假装诚实的
errant	adj. 不定的；周游的；错误的；偏离正路的
alias	n. 别名，化名 adv. 别名叫；化名为
predation	n. 捕食；掠夺
drub	v. 用棒打；硬灌；打击
abeyance	n. 中止，停顿；归属待定，暂搁
patriotism	n. 爱国主义；爱国心，爱国精神
pervasive	adj. 普遍的；到处渗透的；流行的
instrument	n. 仪器；工具；乐器；手段；器械
accede	v. 加入；同意；就任
innocuous	adj. 无害的；无伤大雅的
amphitheater	n. 竞技场；[建] 圆形露天剧场；古罗马剧场
demeanor	n. 风度；举止；行为
commodity	n. 商品，货物；日用品
callous	adj. 无情的；麻木的；硬结的；起老茧的 v. 使冷酷无情；使硬结；使生茧 n. 硬皮；老茧
countermand	n. 取消；反对命令 v. 取消，撤消；下反对命令召回
slander	v. 诽谤；造谣中伤 n. 诽谤；中伤
deride	v. 嘲笑；嘲弄
sugar	n. 糖；食糖；甜言蜜语 v. 加糖于；粉饰
replenish	v. 补充，再装满；把…装满；给…添加燃料
recitation	n. 背诵；朗诵；详述；背诵的诗
atrocity	n. 暴行；凶恶，残暴
wield	v. 使用；行使；挥舞
speculate	v. 推测；投机；思索
wittingly	adv. 有意地，存心地
maintain	v. 维持；继续；维修；主张；供养
lucubration	n. 刻苦钻研；苦心而成的著作
malediction	n. 坏话，诅咒
vindicate	v. 维护；证明…无辜；证明…正确
invidious	adj. 诽谤的；不公平的；引起反感的；易招嫉妒的
melodious	adj. 悦耳的；旋律优美的
fluid	adj. 流动的；流畅的；不固定的 n. 流体；液体
insidious	adj. 阴险的；隐伏的；暗中为害的；狡猾的
concurrent	adj. 并发的；一致的；同时发生的 n. [数] 共点；同时发生的事件
appeal	v. 呼吁，恳求；上诉；诉诸，求助；有吸引力，迎合爱好；（体育比赛中）诉诸裁判 n. 呼吁，请求；吸引力，感染力；上诉；诉诸裁判
derelict	adj. 玩忽职守的；无主的；被抛弃了的 n. 遗弃物；玩忽职守者；被遗弃的人
despoil	v. 掠夺，剥夺；夺取
derive	v. 源于；得自；获得 n. (Derive)人名；(法)德里夫
nonplus	n. 迷惑；困惑 v. 使困惑
charter	v. 特许；包租；发给特许执照 n. 宪章；执照；特许状
futile	adj. 无用的；无效的；没有出息的；琐细的；不重要的
undervalue	v. 低估之价值；看轻
jaded	adj. 厌倦的；疲倦不堪的 v. 厌倦（jade的过去分词）；变得疲倦；精疲力竭
omnivore	n. [动] 杂食动物；不偏食的人
fuse	v. 融合；熔化，熔融 n. 保险丝，熔线；导火线，雷管
nauseate	v. 作呕；厌恶；产生恶感
distend	v. 使…膨胀；使…扩张
superlative	adj. 最高的；最高级的；过度的 n. 最高级；最好的人；最高程度；夸大话
scurrilous	adj. 下流的；说话粗鄙恶劣的；无礼的
advocate	v. 提倡，主张，拥护 n. 提倡者；支持者；律师
eliminate	v. 消除；排除
posit	v. 安置；假定 n. 假设；设想
artifice	n. 诡计；欺骗；巧妙的办法
diabolical	adj. 恶魔的
lively	adj. 活泼的；生动的；真实的；生气勃勃的 n. (Lively)人名；(英)莱夫利
malicious	adj. 恶意的；恶毒的；蓄意的；怀恨的
rue	v. 后悔；悲伤 n. 芸香；后悔
vitiate	v. 损害，弄坏；使无效；污染
superintend	v. 监督；管理；主管；指挥
ancillary	adj. 辅助的；副的；从属的 n. 助手；附件
odds	n. 几率；胜算；不平等；差别
significant	adj. 重大的；有效的；有意义的；值得注意的；意味深长的 n. 象征；有意义的事物
preordain	v. 注定；预先决定
sagacious	adj. 睿智的，聪慧的；有远见的，聪慧的
graduate	v. 授予…学位；分等级；标上刻度 n. 研究生；毕业生 adj. 毕业的；研究生的
bibliophile	n. 藏书家；爱书的人
autonomous	adj. 自治的；自主的；自发的
conjugal	adj. 婚姻的；结婚的；夫妻之间的
negligible	adj. 微不足道的，可以忽略的
heedful	adj. 注意的；深切注意的；深切留心的
scrutiny	n. 详细审查；监视；细看；选票复查
retract	v. 缩回；缩进；取消 n. 收缩核
sensitive	adj. 敏感的；感觉的；[仪] 灵敏的；感光的；易受伤害的；易受影响的 n. 敏感的人；有灵异能力的人
sarcasm	n. 讽刺；挖苦；嘲笑
bridle	n. 缰绳；马勒；系带；约束物 v. 控制；给装马勒
transposition	n. [数] 移项；调换；换置；变调
premonition	n. 预告；征兆
paralysis	n. 麻痹；无力；停顿
metabolism	n. [生理] 新陈代谢
fretful	adj. 焦躁的；烦燥的；起波纹的
dilapidate	v. 毁坏；荒废；浪费
emergence	n. 出现，浮现；发生；露头
belabor	v. 痛打；抨击；过度说明；反复讨论
medium	adj. 中间的，中等的；半生熟的 n. 方法；媒体；媒介；中间物
perverse	adj. 堕落的，不正当的；倔强的；违反常情的
gland	n. 腺
reliance	n. 信赖；信心；受信赖的人或物
aviary	n. 鸟类饲养场；大型鸟舍
panegyric	n. 颂词，赞颂
obviate	v. 排除；避免；消除
debilitate	v. 使衰弱；使虚弱
biased	adj. 有偏见的；结果偏倚的，有偏的
condone	v. 宽恕；赦免
scruple	n. 微量；顾虑；踌躇 v. 有顾忌；踌躇
wrest	v. 用力拧；抢夺；歪曲 n. 扭，拧
infuse	v. 灌输；使充满；浸渍
timbre	n. [声] 音色；音质；音品
impute	v. 归罪于，归咎于；嫁祸于
spineless	adj. 没有骨气的；无脊椎的；懦弱的
infuriate	v. 激怒；使大怒 adj. 狂怒的
emergency	n. 紧急情况；突发事件；非常时刻 adj. 紧急的；备用的
unaffected	adj. 不受影响的；自然的；真挚的；不矫揉造作的
bowler	n. 圆顶礼帽；投球手；玩滚球的人
grasshopper	n. 蚱蜢；[植保] 蝗虫；小型侦察机 vi. 见异思迁；蚱蜢似地跳
clandestine	adj. 秘密的，私下的；偷偷摸摸的
pinnacle	n. 高峰；小尖塔；尖峰；极点 v. 造小尖塔；置于尖顶上；置于高处
proclaim	v. 宣告，公布；声明；表明；赞扬
gruff	adj. 粗暴的；粗哑的；脾气坏的 vt. 粗鲁地说；生硬地说 vi. 粗鲁地说；生硬地说话 n. 格拉夫（英国珠宝品牌）
aptitude	n. 天资；自然倾向；适宜
radiance	n. 辐射；光辉；发光；容光焕发
deplore	v. 谴责；悲悼；哀叹；对…深感遗憾
morality	n. 道德；品行，美德
literary	adj. 文学的；书面的；精通文学的
ion	n. [化学] 离子
gesticulation	n. 手势；姿势；示意动作
preeminence	n. 卓越；杰出
clamorous	adj. 吵闹的；大声要求的
enthrall	v. 迷住，使着迷
complacent	adj. 自满的；得意的；满足的
collaborate	v. 合作；勾结，通敌
solicitude	n. 焦虑；渴望；担心
prim	adj. 拘谨的；整洁的；呆板的 v. 使显得一本正经；把…打扮得整整齐齐 n. (Prim)人名；(法、德、匈、捷、瑞典、西、葡)普里姆
aboriginal	adj. 土著的；原始的 n. 土著居民；土生生物
soothe	v. 安慰；使平静；缓和
elusive	adj. 难懂的；易忘的；逃避的；难捉摸的
kiosk	n. 凉亭；公用电话亭；报摊
discretionary	adj. 任意的；自由决定的
gallop	n. 疾驰；飞奔 v. 飞驰；急速进行；急急忙忙地说
flux	n. [流][机] 流量；变迁；不稳定；流出 v. 使熔融；用焊剂处理
repulse	v. 拒绝；驱逐；憎恶 n. 拒绝；击退
spheroid	n. 球状体；回转椭球体
dominance	n. 优势；统治；支配
insure	v. 确保，保证；给…保险
assimilate	v. 吸收；使同化；把…比作；使相似
dismissal	n. 解雇；免职
irk	v. 使烦恼；使厌倦
acute	adj. 严重的，[医] 急性的；敏锐的；激烈的；尖声的
Oxygen	n. [化学] 氧气，[化学] 氧
breach	n. 违背，违反；缺口 v. 违反，破坏；打破
pursue	v. 继续；从事；追赶；纠缠
suasion	n. 说服，劝告
accessory	n. 配件；附件；[法] 从犯 adj. 副的；同谋的；附属的
commentary	n. 评论；注释；评注；说明
repository	n. 贮藏室，仓库；知识库；智囊团
terrestrial	adj. 地球的；陆地的，[生物] 陆生的；人间的 n. 陆地生物；地球上的人
strenuous	adj. 紧张的；费力的；奋发的；艰苦的；热烈的
atrocious	adj. 凶恶的，残暴的
adoration	n. 崇拜；爱慕
corroborate	v. 证实；使坚固
successive	adj. 连续的；继承的；依次的；接替的
plague	n. 瘟疫；灾祸；麻烦；讨厌的人 v. 折磨；使苦恼；使得灾祸
methane	n. [有化] 甲烷；[能源] 沼气
tremulous	adj. 胆小的；战栗的；震颤的
ravine	n. 沟壑，山涧；峡谷
counter	n. 柜台；对立面；计数器；（某些棋盘游戏的）筹码 v. 反击，还击；反向移动，对着干；反驳，回答 adj. 相反的 adv. 反方向地；背道而驰地
differentiation	n. 变异，[生物] 分化；区别
reign	v. 统治；支配；盛行；君临 n. 统治；统治时期；支配
accompaniment	n. 伴奏；伴随物
ire	n. 忿怒 vt. 使发怒
charge	n. 费用；电荷；掌管；控告；命令；负载 v. 使充电；使承担；指责；装载；对…索费；向…冲去
disdain	n. 蔑视 v. 鄙弃
trajectory	n. [物] 轨道，轨线；[航][军] 弹道
incomprehensible	adj. 费解的；不可思议的；无限的
stultify	v. 使变无效；使显得愚笨；使无价值
artistic	adj. 艺术的；风雅的；有美感的
surfeit	n. 过度；饮食过度；恶心（由于饮食过度所引起） v. 使饮食过度；使厌腻；使过度沉溺于
gloomy	adj. 黑暗的；沮丧的；阴郁的
implausible	adj. 难以置信的，不像真实的
espouse	v. 支持；嫁娶；赞成；信奉
zero	n. 零点，零度 num. 零
residue	n. 残渣；剩余；滤渣
outgoing	adj. 对人友好的，开朗的；出发的，外出的；即将离职的；乐于助人的 n. 外出；流出；开支 v. 超过；优于（outgo的ing形式）
litigant	n. 诉讼当事人 adj. 诉讼的
apparition	n. 幽灵；幻影；鬼怪；离奇出现的东西
chronological	adj. 按年代顺序排列的；依时间前后排列而记载的
vapid	adj. 无趣味的；无生气的；索然乏味的
stock	n. 股份，股票；库存；血统；树干；家畜 adj. 存货的，常备的；平凡的 v. 进货；备有；装把手于…
reform	n. 改革，改良；改正 v. 改革，革新；重新组成 adj. 改革的；改革教会的
fervent	adj. 热心的；强烈的；炽热的；热烈的
bilateral	adj. 双边的；有两边的
compelling	adj. 引人注目的；强制的；激发兴趣的 v. 强迫；以强力获得（compel的ing形式）
dissentious	adj. 争吵的；好争论的
bombard	v. 轰炸；炮击 n. 射石炮
sebaceous	adj. 分泌脂质的；脂肪的，脂肪质的；似油脂或皮脂的
elapse	v. 消逝；时间过去 n. 流逝；时间的过去
productive	adj. 能生产的；生产的，生产性的；多产的；富有成效的
polarize	v. （使）极化；（使）偏振；（使）两极分化
ruddy	adj. 红的；红润的 adv. 极度；非常 vt. 使变红 vi. 变红 n. (Ruddy)人名；(英)拉迪
sap	n. [植] 树液；精力，元气；活力；坑道 v. 使衰竭，使伤元气；挖掘以破坏基础
philanthropic	adj. 博爱的；仁慈的
visual	adj. 视觉的，视力的；栩栩如生的
philanthropy	n. 博爱，慈善；慈善事业
cant	n. 斜面；伪善之言；黑话；角落 v. 倾斜；讲黑话 adj. 行话的；哀诉声的；假仁假义的
combination	n. 结合；组合；联合；[化学] 化合
pulverize	v. 粉碎；使成粉末；研磨
fulsome	adj. 令人生厌的；过度的
mundane	adj. 世俗的，平凡的；世界的，宇宙的
line	n. 路线，航线；排；绳 v. 排成一行；划线于；以线条标示；使…起皱纹
jubilant	adj. 欢呼的；喜洋洋的
afire	adj. 燃烧的；着火的 adv. 燃烧着；着火地
fortunate	adj. 幸运的；侥幸的；吉祥的；带来幸运的
apathy	n. 冷漠，无兴趣，漠不关心；无感情
atone	v. 赎罪；弥补；偿还
precaution	n. 预防，警惕；预防措施 vt. 警惕；预先警告
reticent	adj. 沉默的；有保留的；谨慎的
demure	adj. 端庄的；娴静的；严肃的；假装正直的 n. (Demure)人名；(法)德米尔
symmetrical	adj. 匀称的，对称的
revert	v. 回复；重提；返祖遗传；归还 n. 恢复原状者
pile	n. 堆；大量；建筑群 v. 累积；打桩于
disprove	v. 反驳，证明…是虚假的
molecule	n. [化学] 分子；微小颗粒，微粒
revocation	n. 取消；撤回；废除
zenith	n. 顶峰；顶点；最高点
robust	adj. 强健的；健康的；粗野的；粗鲁的
embolden	v. 使有胆量，使大胆
choleric	adj. 易怒的；暴躁的；胆汁质的
machination	n. 阴谋；诡计
revere	v. 敬畏；尊敬；崇敬
encroach	v. 蚕食，侵占
hallmark	n. 特点；品质证明 v. 给…盖上品质证明印记；使具有…标志
quintessence	n. 精华；典范；第五元素（被视为地、水、火、风以外之构成宇宙的元素）
chagrin	n. 懊恼；委屈；气愤 v. 使…懊恼
zest	n. 风味；热心；强烈的兴趣 v. 给…调味
arrange	v. 安排；排列；整理
assemble	v. 集合，聚集；装配；收集
cornea	n. [解剖] 角膜
spate	n. 洪水；一阵；大雨；突然迸发
agitate	v. 摇动；骚动；使…激动
tour	n. 旅游，旅行；巡回演出 v. 旅行，在……旅游；在……作巡回演出
blithesome	adj. 愉快的
tout	v. 兜售；招徕；刺探赛马情报 n. 侦查者；兜售者
anecdote	n. 轶事；奇闻；秘史
cerebellum	n. [解剖] 小脑
factious	adj. 好捣乱的；好搞派系的；源于派别的
artistry	n. 艺术性；工艺；艺术技巧；艺术效果；艺术工作
obdurate	adj. 顽固的，执拗的；冷酷无情的
overcome	v. 克服；胜过
iconoclast	n. 偶像破坏者；提倡打破旧习的人
acceleration	n. 加速，促进；[物] 加速度
poignant	adj. 尖锐的；辛酸的；深刻的；切中要害的 n. (Poignant)人名；(法)普瓦尼昂
pungent	adj. 辛辣的；刺激性的；刺鼻的；苦痛的；尖刻的
heat	n. 高温；压力；热度；热烈 v. 使激动；把…加热
restitution	n. 恢复；赔偿；归还
awry	adj. 错误的；扭曲的 adv. 歪曲地；歪斜地；错误地
mordent	n. 涟音；波音
dejected	adj. 沮丧的，灰心的
upshot	n. 结果，结局；要点
relegate	v. 把降低到；归入；提交
narcissistic	adj. 自恋的；自我陶醉的
intellectual	adj. 智力的；聪明的；理智的 n. 知识分子；凭理智做事者
sloth	n. 怠惰，懒惰；[脊椎] 树懒
heedless	adj. 不注意的；不留心的
arboriculture	n. 树木的培植/栽培
fulminate	v. 爆炸；电闪；怒喝 n. 雷酸盐；烈性炸药
dwarf	v. 变矮小 n. 侏儒，矮子 adj. 矮小的
resonance	n. [力] 共振；共鸣；反响
retrace	v. 追溯；折回；重描
dogged	adj. 顽强的；顽固的 vt. 跟踪；尾随（dog的过去式）
diminutive	adj. 小的，小型的，微小的 n. 爱称；指小词；身材极小的人
symmetry	n. 对称（性）；整齐，匀称
facile	adj. （言语或理论）轻率的，未经深思熟虑的
dissolve	v. 使溶解；使分解；使液化 n. 叠化画面；画面的溶暗
repetition	n. 重复；背诵；副本
stoic	n. 斯多葛学派哲学家；禁欲主义者；恬淡寡欲的人，不以苦乐为意的人 adj. 坚忍的，苦修的；斯多葛派的；禁欲主义的
gross	adj. 总共的；粗野的；恶劣的；显而易见的 v. 总共收入 n. 总额，总数
allegory	n. 寓言
artless	adj. 天真的；朴实的；无虚饰的
reciprocate	v. 报答；互换；互给
virus	n. [病毒] 病毒；恶毒；毒害
quarantine	v. 检疫；隔离；使隔离 n. 检疫；隔离；检疫期；封锁
temporary	adj. 暂时的，临时的 n. 临时工，临时雇员
superintendent	n. 监督人；负责人；主管；指挥者
remiss	adj. 怠慢的；迟缓的；不小心的
eclipse	v. 使黯然失色；形成蚀 n. 日蚀，月蚀；黯然失色
equality	n. 平等；相等；[数] 等式
virtu	n. 古董；艺术品爱好
dramatic	adj. 戏剧的；急剧的；引人注目的；激动人心的
reprimand	n. 谴责；训斥；申诉 v. 谴责；训斥；责难
august	adj. 威严的；令人敬畏的 n. 八月（简写为Aug）
immerse	v. 沉浸；使陷入
suffrage	n. 选举权；投票；参政权；代祷；赞成票
truculent	adj. 好斗的；野蛮的；言词刻毒的
bailiff	n. 法警；执行官；区镇的地方长官
indignant	adj. 愤愤不平的；义愤的
paramount	adj. 最重要的，主要的；至高无上的 n. 最高统治者
grievance	n. 不满，不平；委屈；冤情
affectation	n. 做作；矫揉造作；假装
neuron	n. [解剖] 神经元，神经单位
savor	v. 尽情享受；使有风味；加调味品于；品尝，欣赏 n. 滋味；气味；食欲
quagmire	n. 沼泽，沼泽地；无法脱身的困境
unconscionable	adj. 不合理的；昧着良心的；肆无忌惮的；过度的
posse	n. 一队；民防团；地方武装团队
nutriment	n. 营养物；促进生长的东西
bombast	n. 夸大的言辞 adj. 夸大的
chateau	n. （法国封建时代的）城堡；（尤指法国的）别墅
formula	n. [数] 公式，准则；配方；婴儿食品
harass	v. 使困扰；使烦恼；反复袭击
combustible	adj. 易燃的；易激动的；燃烧性的 n. 可燃物；易燃物
purity	n. [化学] 纯度；纯洁；纯净；纯粹
calamity	n. 灾难；不幸事件
inhuman	adj. 残忍的；野蛮的；无人性的
disavow	v. 否认，否定；抵赖；拒绝对…的责任
diversify	v. 使多样化，使变化；增加产品种类以扩大
amity	n. 友好；亲善关系；友好关系
juncture	n. 接缝；连接；接合
askew	adj. 歪斜的 adv. 歪斜地，斜地 n. (Askew)人名；(英)艾斯丘
preface	n. 前言；引语 v. 为…加序言；以…开始
arithmetic	n. 算术，算法
cadenza	n. 装饰乐段
memorize	v. 记住，背熟；记忆
ingenious	adj. 有独创性的；机灵的，精制的；心灵手巧的
waif	n. 流浪者；流浪儿；飘流物；无主物；信号旗
collision	n. 碰撞；冲突；（意见，看法）的抵触；（政党等的）倾轧
stanch	v. 止血；使不漏；平息 adj. 坚固的；忠实的；防水的
prehensile	adj. 适于抓握的；善于领会的
hodgepodge	n. 大杂烩；混煮；一团糟 vt. 使混乱
ribald	adj. 下流的；言谈粗俗的 n. 言谈粗俗的人；说下流话的人
undue	adj. 过度的，过分的；不适当的；未到期的
biodegradable	adj. 生物所能分解的，能进行生物降解的
saline	adj. 盐的；含盐分的 n. 盐湖；碱盐泻药
recombination	n. 复合，再结合；[遗] 重组
preferential	adj. 优先的；选择的；特惠的；先取的
vulnerable	adj. 易受攻击的，易受…的攻击；易受伤害的；有弱点的
digit	n. 数字；手指或足趾；一指宽
antipathy	n. 反感；厌恶；憎恶；不相容
carnal	adj. 肉体的；肉欲的；淫荡的；性欲的 n. (Carnal)人名；(西)卡纳尔
stealth	n. 秘密；秘密行动；鬼祟
beaker	n. 烧杯；大口杯
meddler	n. 干涉者；爱管闲事的人
decent	adj. 正派的；得体的；相当好的
transcendent	adj. 卓越的；超常的；出类拔萃的 n. 卓越的人；超绝物
modulate	v. 调节；（信号）调制；调整
untoward	adj. 不幸的；麻烦的；倔强的；困难的
Iron	n. 熨斗；烙铁；坚强 v. 熨；用铁铸成 adj. 铁的；残酷的；刚强的
acclaim	v. 称赞；为…喝彩，向…欢呼 n. 欢呼，喝彩；称赞
adhere	v. 坚持；依附；粘着；追随
fern	n. [植] 蕨；[植] 蕨类植物
naive	adj. 天真的,幼稚的
distraught	adj. 发狂的；心烦意乱的
salacious	adj. 好色的；猥亵的；淫荡的
supercilious	adj. 目空一切的，高傲的；傲慢的，自大的
giraffe	n. 长颈鹿
perspicuous	adj. 明了的；清晰明白的；易懂的
donate	v. 捐赠；捐献 n. 捐赠；捐献
skirt	n. 裙子 v. 绕过，回避；位于…边缘
elicit	v. 抽出，引出；引起
integer	n. [数] 整数；整体；完整的事物
clergy	n. 神职人员；牧师；僧侣
compliment	n. 恭维；称赞；问候；致意；道贺 v. 恭维；称赞
unequivocal	adj. 明确的；不含糊的
incredulous	adj. 怀疑的；不轻信的
glimpse	n. 一瞥，一看 v. 瞥见
soda	n. 苏打；碳酸水
altruistic	adj. 利他的；无私心的
pallid	adj. 苍白的；暗淡的；无生气的
cession	n. （权利的）转让，出让；（领土的）割让
adjuration	n. 严令；恳请；立誓
forage	n. 饲料；草料；搜索 v. 搜寻粮草；搜寻
erudite	adj. 博学的；有学问的 n. 饱学之士
retouch	n. 润饰；修整部分 v. 润饰；修整
conception	n. 怀孕；概念；设想；开始
warrant	n. 根据；证明；正当理由；委任状 v. 保证；担保；批准；辩解
body	n. 身体；主体；大量；团体；主要部分 v. 赋以形体
trepidation	n. 恐惧；惊恐；忧虑；颤抖
haggard	adj. 憔悴的；野性的 n. 野鹰
egregious	adj. 惊人的；过分的；恶名昭彰的
acclivity	n. 向上的斜坡；[建] 上斜
virtuoso	n. 艺术品鉴赏家；古董收藏家；艺术大师 adj. 行家里手的；艺术爱好者的
captious	adj. 挑剔的；吹毛求疵的
adulate	v. 过分称赞；谄媚；奉承
antenatal	adj. 产前的；出生前的
solecism	n. 语法错误，文理不通；谬误，失礼
semiconscious	adj. 半意识的；半清醒的
perambulate	v. 巡行；巡视；漫步
mishap	n. 灾祸；不幸事故；晦气
butte	n. 孤峰；孤立的丘
impromptu	n. 即兴曲；即席演出 adv. 即席地 adj. 即席的
mystify	v. 使神秘化；使迷惑，使困惑
frenzied	adj. 疯狂的；狂乱的；激怒的 v. 使狂乱（frenzy的过去式）
ken	n. 视野范围，见地，知识范围
counterpoint	n. 复调；对位法；旋律配合；对应物
submerge	v. 淹没；把…浸入；沉浸
derisive	adj. 嘲笑的，嘲弄的；可付之一笑的
light	n. 光；光线；灯；打火机；领悟；浅色；天窗 adj. 轻的；浅色的；明亮的；轻松的；容易的；清淡的 v. 点着；变亮；着火 adv. 轻地；清楚地；轻便地
key	n. （打字机等的）键；关键；钥匙 v. 键入；锁上；调节…的音调；提供线索 adj. 关键的
coup	n. 政变；妙计；出乎意料的行动；砰然的一击 vt. 使…颠倒；使…倾斜 vi. 推倒；倾斜；溢出
insulin	n. [生化][药] 胰岛素
script	n. 脚本；手迹；书写用的字母 v. 把…改编为剧本
measurement	n. 测量；[计量] 度量；尺寸；量度制
scowl	n. 愁容；怒容；阴沉沉的样子 v. 皱眉；怒视
receptive	adj. 善于接受的；能容纳的
propellant	n. 推进物；推进燃料；发射火药 adj. 推进的
comprise	v. 包含；由…组成
typography	n. 排印；[印刷] 活版印刷术；印刷格式
pedantic	adj. 迂腐的；学究式的；卖弄学问的；假装学者的
diode	n. [电子] 二极管
statuesque	adj. 雕像般的；轮廓清晰的；均衡的
terminate	v. 使终止；使结束；解雇 adj. 结束的
illustrious	adj. 著名的，杰出的；辉煌的
set	n. [数] 集合；一套；布景；[机] 装置 v. 树立；点燃；点缀； adj. 固定的；规定的；固执的
virtuous	adj. 善良的；有道德的；贞洁的；正直的；有效力的
kinetic	adj. [力] 运动的；活跃的
consensus	n. 一致；舆论；合意
dictatorial	adj. 独裁的，专政的；专横傲慢的
submersion	n. 淹没，浸没
plural	adj. 复数的 n. 复数
bursar	n. 财务主管；会计员；领取奖学金的学生
assimilation	n. 同化；吸收；[生化] 同化作用
enhance	v. 提高；加强；增加
irascible	adj. 易怒的
gratuity	n. 赏钱，小费；赠物；[劳经] 退职金
instantaneous	adj. 瞬间的；即时的；猝发的
naturalistic	adj. 自然的；自然主义的；博物学的
suspension	n. 悬浮；暂停；停职
tenuous	adj. 纤细的；稀薄的；贫乏的
languish	v. 憔悴；凋萎；失去活力；苦思
equanimity	n. 平静；镇定
dimension	n. 方面;[数] 维；尺寸；次元；容积 vt标出尺寸 adj. 规格的
recollect	v. 回忆，想起
trammel	v. 束缚；拘束；阻碍 n. 拘束；束缚；束缚物
peevish	adj. 易怒的，暴躁的；带怒气的；撒娇的
cilia	n. 纤毛；睫毛
outlaw	n. 歹徒；罪犯；亡命之徒；被剥夺法律保护者 v. 宣布…为不合法；将…放逐；剥夺…的法律保护
camaraderie	n. 友情；同志之爱
respiration	n. 呼吸；呼吸作用
ancestry	n. 祖先；血统
symphonious	adj. 和谐的；调和的
punctuate	v. 不时打断；强调；加标点于
indigence	n. 穷困；贫乏；贫穷
cajole	v. 以甜言蜜语哄骗；勾引
forsake	v. 放弃；断念
mariner	n. 水手；船员
bizarre	adj. 奇异的（指态度，容貌，款式等）
saccharine	adj. 含糖的；极甜的；和颜悦色的 n. （美）糖精
terse	adj. 简洁的，精练的，扼要的
polemics	n. 辩论术；论证法（polemic的复数）
retinue	n. 随行人员；扈从
renaissance	n. 文艺复兴（欧洲14至17世纪）
urbane	adj. 彬彬有礼的，温文尔雅的；都市化的
ecstatic	adj. 狂喜的；入迷的 n. 狂喜的人
gypsum	vt. 用石膏处理；施石膏肥料于 n. 石膏；石膏肥料
apparatus	n. 装置，设备；仪器；器官
embrace	v. 拥抱；信奉，皈依；包含 n. 拥抱
inhibit	v. 抑制；禁止
contradictory	adj. 矛盾的；反对的；反驳的；抗辩的 n. 对立物；矛盾因素
prohibitive	adj. 禁止的，禁止性的；抑制的；（费用，价格等）过高的；类同禁止的
vociferate	v. 喊叫；大叫
archaeology	n. 考古学
alimentary	adj. 滋养的；食物的
credulity	n. 轻信；易受骗
counteract	v. 抵消；中和；阻碍
apogee	n. 最高点，极点；远地点 vt. 位于远地点；位于最高点
rabid	adj. 激烈的；狂暴的；偏激的；患狂犬病的
diurnal	adj. 白天的；每日的，一日间的 n. 日记账；日报，日刊
emotion	n. 情感；情绪
heteromorphic	adj. [生物] 异形的，[生物] 异态的；[化学] 多晶型的
displace	v. 取代；置换；转移；把…免职；排水
stripling	n. 年轻人，小伙子
terrify	v. 恐吓；使恐怖；使害怕
indolent	adj. 懒惰的；无痛的
recriminate	v. 反责；反唇相讥
apparent	adj. 显然的；表面上的
perennial	adj. 多年生的；常年的；四季不断的；常在的；反复的 n. 多年生植物
inimical	adj. 敌意的；有害的
heterogeneity	n. [生物] 异质性；[化学] 不均匀性；[化学] 多相性
nominate	v. 推荐；提名；任命；指定
seclusion	n. 隔离；隐退；隐蔽的地方
polar	adj. 极地的；两极的；正好相反的 n. 极面；极线
scour	v. 冲刷；擦；腹泻 n. 擦，冲刷；洗涤剂；（畜类等的）腹泻
stigma	n. [植] 柱头；耻辱；污名；烙印；特征
refractory	adj. 难治的；难熔的；不听话的 n. 倔强的人；耐火物质
disregard	v. 忽视；不理；漠视；不顾 n. 忽视；不尊重
simultaneous	adj. 同时的；联立的；同时发生的 n. 同时译员
levee	n. 堤坝（码头）；（旧时君主或显贵的）早晨接见 vt. 为…筑堤
pollute	v. 污染；玷污；败坏
prejudice	n. 偏见；侵害 v. 损害；使有偏见
stern	n. 船尾；末端 adj. 严厉的；坚定的
colloid	adj. 胶质的 n. [物化] 胶质
admittance	n. 进入；入场权；通道
ductile	adj. 柔软的；易教导的；易延展的
divergent	adj. 相异的，分歧的；散开的
triangle	n. 三角（形）；三角关系；三角形之物；三人一组
detonate	v. 使爆炸
occult	adj. 神秘的；超自然的；难以理解的 v. 掩蔽 n. 神秘学
inchoate	adj. 早期的；刚开始的；未充分发展的 vt. 开始 vi. 开始
placenta	n. [胚] 胎盘；[植] 胎座
inconsistent	adj. 不一致的；前后矛盾的
adhesion	n. 粘附；支持；固定
taunt	n. 嘲弄；讥讽 v. 奚落；逗弄 adj. 很高的
juxtaposition	n. 并置，并列；毗邻
testament	n. [法] 遗嘱；圣约；确实的证明
acquainted	adj. 熟识的；知晓的；有知识的 v. 使了解（acquaint的过去分词）
inventive	adj. 发明的；有发明才能的；独出心裁的
adversity	n. 逆境；不幸；灾难；灾祸
erratic	adj. 不稳定的；古怪的 n. 漂泊无定的人；古怪的人
reck	vt. 顾虑；和…相干 vi. 介意；有关系 n. (Reck)人名；(英、德、匈、波)雷克
instruct	v. 指导；通知；命令；教授
substantiate	v. 证实；使实体化
centurion	n. 百夫长；百人队队长
recuperate	v. 恢复，复原；挽回损失
diagonal	adj. 斜的；对角线的；斜纹的 n. 对角线；斜线
prehension	n. 理解；抓住
effigy	n. 雕像，肖像
neutrality	n. 中立；中性；中立立场
competence	n. 能力，胜任；权限；作证能力；足以过舒适生活的收入
rapine	n. 掠夺；劫掠
appropriate	adj. 适当的；恰当的；合适的 v. 占用，拨出
benignant	adj. 良性的；仁慈的；有益的；和蔼的
overlap	n. 重叠；重复 v. 部分重叠；部分的同时发生
premise	v. 引出，预先提出；作为…的前提 n. 前提；上述各项；房屋连地基
outburst	n. （火山、情感等的）爆发；破裂
usurious	adj. 高利贷的
forthright	adj. 直率的；直截了当的 adv. 直率地；马上；立即 n. 直路
inviolable	adj. 不可侵犯的；神圣的；不可亵渎的
academy	n. 学院；研究院；学会；专科院校
encyclopedia	n. 百科全书（亦是encyclopaedia）
conventional	adj. 符合习俗的，传统的；常见的；惯例的
intersect	v. 相交，交叉
dearth	n. 缺乏；饥馑；粮食不足
bridge	n. 桥；桥牌；桥接器；船桥 v. 架桥；渡过
release	v. 释放；发射；让与；允许发表 n. 释放；发布；让与
accolade	n. 荣誉；荣誉称号授予仪式；连谱号；称赞
appreciate	v. 欣赏；感激；领会；鉴别
equivalent	adj. 等价的，相等的；同意义的 n. 等价物，相等物
nomadic	adj. 游牧的；流浪的；游动的
scope	n. 范围；余地；视野；眼界；导弹射程 v. 审视
erosion	n. 侵蚀，腐蚀
organelle	n. [细胞] 细胞器；细胞器官
mutation	n. [遗] 突变；变化；元音变化
combustion	n. 燃烧，氧化；骚动
adverse	adj. 不利的；相反的；敌对的（名词adverseness，副词adversely）
achromatic	adj. 消色差的；非染色质的；非彩色的
affiliate	n. 联号；隶属的机构等 v. 使附属；接纳；使紧密联系
fungi	n. 真菌；菌类；蘑菇（fungus的复数）
variegated	adj. 杂色的；斑驳的；富于变化的 v. 成为杂色（variegate的过去式）
poverty	n. 贫困；困难；缺少；低劣
stupor	n. 昏迷，恍惚；麻木
inhume	v. 埋葬；土葬
indifferent	adj. 漠不关心的；无关紧要的；中性的，中立的
generator	n. 发电机；发生器；生产者
evolve	v. 发展，进化；进化；使逐步形成；推断出
abstract	n. 摘要；抽象；抽象的概念 adj. 抽象的；深奥的 v. 摘要；提取；使……抽象化；转移(注意力、兴趣等)；使心不在焉
granule	n. 颗粒
bauxite	n. 矾土，[矿物] 铁铝氧石；[矿物] 铝土矿
bowdlerize	v. 删改；删除不妥的文句
puissant	adj. 强大的，强盛的；有势力的，有权力的 n. (Puissant)人名；(法)皮桑
shriek	v. 尖叫；促人注意 n. 尖声；尖锐的响声
esteem	v. 尊敬；认为；考虑；估价 n. 尊重；尊敬
diligent	adj. 勤勉的；用功的，费尽心血的 n. (Diligent)人名；(法)迪利让
renunciation	n. 放弃；脱离关系；拒绝承认；抛弃；弃权
propitious	adj. 适合的；吉利的；顺利的
divisor	n. 除数；因子
vile	adj. 卑鄙的；邪恶的；低廉的；肮脏的 n. (Vile)人名；(英)瓦伊尔；(芬)维莱
eradicate	v. 根除，根绝；消灭
everlasting	adj. 永恒的；接连不断的
venerate	v. 崇敬，尊敬
duration	n. 持续，持续的时间，期间
benediction	n. 祝福；赐福；恩赐；祈求上帝赐福的仪式
unconscious	adj. 无意识的；失去知觉的；不省人事的；未发觉的
fossil	n. 化石；僵化的事物；顽固不化的人 adj. 化石的；陈腐的，守旧的
digestion	n. 消化；领悟
accursed	adj. 被诅咒的；讨厌的；可憎的
constitute	v. 组成，构成；建立；任命
volitive	adj. 意志的；表示意志的；发自意志的
introspect	v. 反省；内省
compound	n. [化学] 化合物；混合物；复合词 adj. 复合的；混合的 v. 合成；混合；恶化，加重；和解，妥协
decorous	adj. 有礼貌的，高雅的；端正的
redeem	v. 赎回；挽回；兑换；履行；补偿；恢复
metabolic	adj. 变化的；新陈代谢的
lucid	adj. 明晰的；透明的；易懂的；头脑清楚的
quail	v. 畏缩，胆怯；感到恐惧 n. 鹌鹑
neutralize	v. 抵销；使…中和；使…无效；使…中立
torque	n. 转矩，[力] 扭矩；项圈，金属领圈 v. (向轴、螺栓、圆轮等)施以扭动力；(使)沿轴转动；使(绕轴等)扭转；施加转矩
optimal	adj. 最佳的；最理想的
wistful	adj. 渴望的；沉思的，默想的；引起怀念的；不满足似的
playwright	n. 剧作家
calumniate	v. 诽谤；中伤；诬蔑
bustle	v. 喧闹；忙乱；充满 n. 喧闹；活跃；裙撑；热闹的活动
conscientious	adj. 认真的；尽责的；本着良心的；小心谨慎的
cerebration	n. 思考；精神活动；脑髓作用
imperative	adj. 必要的，不可避免的；紧急的；命令的，专横的；势在必行的；[语]祈使的 n. 必要的事；命令；需要；规则；[语]祈使语气
inspiration	n. 灵感；鼓舞；吸气；妙计
befog	v. 使困惑，使模糊；罩入雾中
equiangular	adj. 等角的
acidify	v. [化学] 酸化；变酸
avalanche	n. 雪崩 v. 雪崩
homogeneous	adj. 均匀的；[数] 齐次的；同种的；同类的，同质的
pugnacious	adj. 好斗的，好战的
callosity	n. 无情；老茧皮；硬结
ultramontane	n. 山那边的人；教皇绝对权力主义者 adj. 山那边的
calumny	n. 诽谤；中伤；诬蔑
seedy	adj. 多种子的；结籽的；破烂的；没精打采的；下流的
qualm	n. 疑虑；不安
taciturn	adj. 沉默寡言的；无言的，不太说话的
punctual	adj. 准时的，守时的；精确的
displacement	n. 取代，位移；[船] 排水量
periscope	n. 潜望镜
assess	v. 评定；估价；对…征税
pauper	n. 乞丐；穷人；靠救济度日者 adj. 贫民的
colloquy	n. 以对话体写的文章；谈话，会话
bestrew	v. 布满；散布
intrinsic	adj. 本质的，固有的
comely	adj. 清秀的，标致的
homologous	adj. 相应的；[生物] 同源的；类似的；一致的
ingenuous	adj. 天真的；坦白的；正直的；朴实的
nebula	n. 星云；角膜云翳
prosecute	v. 检举；贯彻；从事；依法进行
ebullient	adj. 热情洋溢的；沸腾的
absence	n. 没有；缺乏；缺席；不注意
coercion	n. 强制；强迫；高压政治；威压
circumvent	v. 包围；智取；绕行，规避
amatory	adj. 恋爱的，情人的
swindle	n. 欺诈；骗局 v. 诈骗；骗取
preemption	n. 优先购买；强制收购；抢先占有；取代
athirst	adj. 渴望的
ensemble	n. 全体；总效果；全套服装；全套家具；合奏组 adv. 同时
artifact	n. 人工制品；手工艺品
succumb	v. 屈服；死；被压垮
mixture	n. 混合；混合物；混合剂
assert	v. 维护，坚持；断言；主张；声称
viceroy	n. 总督；（北美）一种黑色蝴蝶
variable	adj. 变量的；可变的；易变的，多变的；变异的，[生物] 畸变的 n. [数] 变量；可变物，可变因素
feat	n. 功绩，壮举；技艺表演 adj. 合适的；灵巧的
decrease	n. 减少，减小；减少量 v. 减少，减小
figurine	n. 小雕像，小塑像
prohibition	n. 禁止；禁令；禁酒；诉讼中止令
caucus	n. 干部会议；核心会议；党团会议 v. 召开干部会议；开核心会议
hormone	n. [生理] 激素，荷尔蒙
sentient	adj. 有感情的；有感觉力的；意识到的 n. 有知觉的人
blockbuster	n. 轰动；巨型炸弹；一鸣惊人者
questionable	adj. 可疑的；有问题的
punctilious	adj. 一丝不苟的；精密细心的；拘泥形式的
album	n. 相簿；唱片集；集邮簿；签名纪念册
valediction	n. 告别演说；告别词
encounter	v. 遭遇，邂逅；遇到 n. 遭遇，偶然碰见
ruminate	v. 反刍；沉思；反复思考
stunt	n. 噱头，手腕；绝技 v. 阻碍…的正常生长或发展
abrupt	adj. 生硬的；突然的；唐突的；陡峭的
drought	n. 干旱；缺乏
affected	adj. 受到影响的；做作的；假装的 vt. 影响；假装；使…感动（affect的过去式和过去分词）
commit	v. 犯罪，做错事；把交托给；指派…作战；使…承担义务
cherish	v. 珍爱
glamorous	adj. 迷人的，富有魅力的
pluralism	n. 多元主义；多元论；兼任
instance	n. 实例；情况；建议 v. 举为例
barometer	n. [气象] 气压计；晴雨表；显示变化的事物
austere	adj. 严峻的；简朴的；苦行的；无装饰的
disingenuous	adj. 虚伪的；不诚实的；不老实的；狡猾的
miscount	v. 数错；算错 n. 数错；误算
charming	adj. 迷人的；可爱的 v. 使陶醉（charm的现在分词）
deference	n. 顺从；尊重
preempt	v. 先占；先取；以先买权获得
practitioner	n. 开业者，从业者，执业医生
pageant	n. 盛会；游行；虚饰；露天表演
pigment	n. [物][生化] 色素；颜料 v. 给…着色
lacerate	v. 伤害，使…痛心；割裂；撕碎 adj. 受折磨的；撕碎的
efficacious	adj. 有效的；灵验的
conjugation	n. 结合，配合；动词的词形变化
ambulance	n. [车辆][医] 救护车；战时流动医院
humble	adj. 谦逊的；简陋的；（级别或地位）低下的；不大的 v. 使谦恭；轻松打败（尤指强大的对手）；低声下气
minority	n. 少数民族；少数派；未成年 adj. 少数的；属于少数派的
fortitude	n. 刚毅；不屈不挠；勇气
antibody	n. [免疫] 抗体
narrate	v. 叙述；给…作旁白
sophism	n. 诡辩
sum	n. 金额；总数 v. 概括
unyielding	adj. 不屈的；坚强的；[材] 不易弯曲的
paragon	n. 模范；完美之物；优秀之人 adj. 完美的
aliment	n. 滋养品；食物 v. 向…提供营养物
illiterate	adj. 文盲的；不识字的；没受教育的 n. 文盲
panorama	n. 全景，全貌；全景画；概论
vivify	v. 使生动；使活跃；给与生气
abundant	adj. 丰富的；充裕的；盛产
acrimony	n. 辛辣；尖刻；严厉
rust	n. 锈；生锈；[植保] 锈病 v. 使生锈；腐蚀
fission	n. 裂变；分裂；分体；分裂生殖法
volition	n. 意志，意志力；决断力
recapitulate	v. 概括；重述要点；摘要
ominous	adj. 预兆的；不吉利的
pedigree	n. 血统；家谱 adj. 纯种的
ethnic	adj. 种族的；人种的
negate	v. 否定；取消；使无效 n. 对立面；反面
granular	adj. 颗粒的；粒状的
malodorous	adj. 有恶臭的；令人极为反感的；不合法的
nascent	adj. 初期的；开始存在的，发生中的
negotiate	v. 谈判，商议；转让；越过
capricious	adj. 反复无常的；任性的
impartial	adj. 公平的，公正的；不偏不倚的
organic	adj. [有化] 有机的；组织的；器官的；根本的
distort	v. 扭曲；使失真；曲解
temporal	adj. 暂时的；当时的；现世的 n. 世间万物；暂存的事物
scribble	n. 潦草写成的东西；潦草的写法；杂文 v. 乱写；滥写；潦草地书写
calculus	n. [病理] 结石；微积分学
electrolysis	n. [化学] 电解，[化学] 电解作用；以电针除痣
circuit	n. [电子] 电路，回路；巡回；一圈；环道 v. 环行
dissuade	v. 劝阻，劝止
relish	n. 滋味；风味；食欲；开胃小菜；含义；调味品 v. 盼望;期待;享受; 品味；喜爱；给…加佐料
brief	adj. 简短的，简洁的；短暂的，草率的 n. 摘要，简报；概要，诉书 v. 简报，摘要；作…的提要
impetuous	adj. 冲动的；鲁莽的；猛烈的
odorous	adj. 香的；有气味的；难闻的
malice	n. 恶意；怨恨；预谋
astringent	adj. 涩的；收敛性的；止血的；严厉的 n. [药] 收敛剂；止血药
brine	n. 卤水；盐水；海水 v. 用浓盐水处理（或浸泡）
venerable	adj. 庄严的，值得尊敬的；珍贵的
prototype	n. 原型；标准，模范
corrupt	adj. 腐败的，贪污的；堕落的 v. 使腐烂；使堕落，使恶化
agility	n. 敏捷；灵活；机敏
coercive	adj. 强制的；胁迫的；高压的
carnage	n. 大屠杀；残杀；大量绝灭
simultaneously	adv. 同时地
urea	n. [肥料] 尿素
serenity	n. 平静，宁静；晴朗，风和日丽
toxic	adj. 有毒的；中毒的
yearling	n. 一岁家畜；满一岁的动物 adj. 一岁的
guile	n. 狡猾；诡计；欺诈
affiliation	n. 友好关系；加入；联盟；从属关系
compression	n. 压缩，浓缩；压榨，压迫
cameo	n. （影视剧中的）配角；刻有浮雕的宝石或贝壳；小品文
sacrosanct	adj. 神圣不可侵犯的；极神圣的
nugatory	adj. 无价值的；琐碎的；无效的；无法律效力的
brigadier	n. 准将；陆军准将
gregarious	adj. 社交的；群居的
unqualified	adj. 不合格的；无资格的；不胜任的；不受限制的；无条件的；绝对的
risible	adj. 可笑的；爱笑的；引人笑的
criticize	v. 批评；评论；非难
bauble	n. 小玩意；美观而无价值的饰物
assiduous	adj. 刻苦的，勤勉的
irksome	adj. 令人厌烦的，讨厌的；令人厌恶的
alienable	adj. 可让与的，可转让的
benevolence	n. 仁慈；善行
tripod	n. [摄] 三脚架；三脚桌
cavil	v. 吹毛求疵；挑剔 n. 吹毛求疵；苛责；无端的指责
acumen	n. 聪明，敏锐
episode	n. 插曲；一段情节；插话；有趣的事件
negligent	adj. 疏忽的；粗心大意的
monarchy	n. 君主政体；君主国；君主政治
hydrolysis	n. 水解作用
sphere	n. 范围；球体 vt. 包围；放入球内；使…成球形 adj. 球体的
wane	v. 衰落；变小；亏缺；退潮；消逝 n. 衰退；月亏；衰退期；缺损
probe	n. 探针；调查 v. 调查；探测
figurative	adj. 比喻的；修饰丰富的；形容多的
odoriferous	adj. 臭的，散发气味的；芬芳的
usurp	v. 篡夺；夺取；侵占
inconsequential	adj. 不重要的；不合理的；不合逻辑的
chronology	n. 年表；年代学
impalpable	adj. 感触不到的；难理解的；无形的
overweight	adj. 超重的；过重的 vt. 使负担过重 n. 超重
length	n. 长度，长；时间的长短；（语）音长
usury	n. 高利；高利贷；利益
pejorative	adj. 轻蔑的；[临床] 恶化的，变坏的 n. 轻蔑语
prolific	adj. 多产的；丰富的
obsequious	adj. 谄媚的；奉承的；顺从的
concede	v. 承认；退让；给予，容许
edge	n. 边缘；优势；刀刃；锋利 v. 使锐利；将…开刃；给…加上边
profuse	adj. 丰富的；很多的；慷慨的；浪费的
toxin	n. 毒素；毒质
nuisance	n. 讨厌的人；损害；麻烦事；讨厌的东西
denominator	n. [数] 分母；命名者；共同特征或共同性质；平均水平或标准
abjure	v. 发誓放弃；公开放弃；避免
sanguineous	adj. 血的；血红色的；多血质的；乐观的
access	v. 使用；存取；接近 n. 进入；使用权；通路
zeitgeist	n. 时代思潮，时代精神
gratuitous	adj. 无理由的，无端的；免费的
stun	v. 使震惊；打昏；给以深刻的印象 n. 昏迷；打昏；惊倒；令人惊叹的事物
abrasion	n. 磨损；磨耗；擦伤
spontaneous	adj. 自发的；自然的；无意识的
malign	v. 诽谤，污蔑；中伤，说坏话 adj. 恶意的，恶性的；有害的
foliate	v. 把…打成箔；加叶饰 adj. 有叶的；叶状的；成薄片的
ruin	n. 废墟；毁坏；灭亡 v. 毁灭；使破产
perimeter	n. 周长；周界；[眼科] 视野计
watt	n. 瓦特
esoteric	adj. 秘传的；限于圈内人的；难懂的
ponder	v. 仔细考虑；衡量 n. (Ponder)人名；(英)庞德
subsist	v. 存在；维持生活
surmount	v. 克服，越过；战胜
immaculate	adj. 完美的；洁净的；无瑕疵的
bole	n. [林] 树干；红玄武土
stipend	n. 奖学金；固定薪金；定期津贴；养老金
servile	adj. 奴隶的；奴性的；卑屈的；卑屈的
compromise	v. 妥协；危害 n. 妥协，和解；折衷
incongruous	adj. 不协调的；不一致的；不和谐的
transformer	n. [电] 变压器；促使变化的人
transcription	n. 抄写；抄本；誊写
ensconce	v. 安置；安顿下来；使…隐藏
complicate	v. 使复杂化；使恶化；使卷入
rationalization	n. 合理化
accuse	v. 控告，指控；谴责；归咎于
chronometer	n. [天] 精密记时表；高度精确的钟表；航海经线仪
implication	n. 含义；暗示；牵连，卷入；可能的结果，影响
imperious	adj. 专横的；迫切的；傲慢的
prescient	adj. 预知的；有先见之明的
innate	adj. 先天的；固有的；与生俱来的
dissent	v. 不同意；不信奉国教 n. 异议；（大写）不信奉国教
discourteous	adj. 失礼的，无礼貌的；粗鲁的
sleight	n. 手法，技巧；熟练，灵巧；诡计
ostensible	adj. 表面的；假装的
controversial	adj. 有争议的；有争论的
indebted	adj. 负债的；感激的；受惠的 v. 使负债；使受恩惠（indebt的过去分词）
obtrude	v. 逼使；强迫；冲出
ambassador	n. 大使；代表；使节
wiry	adj. 金属线制的；金属丝般的；坚硬的；瘦长结实的；（噪音）尖细的
wave	v. 波动；起伏；挥手示意；摇动；呈波形 n. 波动；波浪；高潮；挥手示意；卷曲
summon	v. 召唤；召集；鼓起；振作
penurious	adj. 吝啬的；缺乏的；贫困的
knead	v. 揉合，揉捏；按摩；捏制
justifiable	adj. 可辩解的，有道理的；可证明为正当的
concordant	adj. 和谐的；协调的；一致的；和声的
dismantle	v. 拆除；取消；解散；除掉…的覆盖物
orchestra	n. 管弦乐队；乐队演奏处
alcove	n. 凹室；壁龛
outweigh	v. 比…重（在重量上）；比…重要；比…有价值
bond	n. 债券；结合；约定；粘合剂；纽带 v. 结合，团结在一起
votive	adj. 奉献的（副词votively）；献纳的；诚心祈求的
sanguine	adj. 乐观的；满怀希望的；面色红润的 vt. 血染；以血沾污 n. 血红色
verisimilitude	n. 逼真，貌似真实；逼真的事物
wary	adj. 谨慎的；机警的；惟恐的；考虑周到的
vector	n. 矢量；带菌者；航线 vt. 用无线电导航
triple	adj. 三倍的；三方的 n. 三倍数；三个一组 v. 增至三倍
mean	adj. 平均的；卑鄙的；低劣的；吝啬的 v. 意味；想要；意欲 n. 平均值
percolate	v. 过滤；渗出；浸透 n. 滤过液；渗出液
perturb	v. 扰乱；使…混乱；使…心绪不宁
longevity	n. 长寿，长命；寿命
coalition	n. 联合；结合，合并
ephemeral	adj. 短暂的；朝生暮死的 n. 只生存一天的事物
immoral	adj. 不道德的；邪恶的；淫荡的
impassioned	adj. 充满激情的；感激的 v. 使充满激情（impassion的过去式和过去分词）
consecrate	v. 奉献；使神圣；供神用；献身于 adj. 神圣的；被献给神的
avow	v. 承认；公开宣称；坦率承认
familiarity	n. 熟悉，精通；亲密；随便
matter	n. 物质；事件 v. 有关系；要紧
lunatic	adj. 疯狂的；精神错乱的；愚蠢的 n. 疯子；疯人
gesture	n. 姿态；手势 v. 作手势；用动作示意
precipitate	n. [化学] 沉淀物 v. 使沉淀；促成；猛抛；使陷入 adj. 突如其来的；猛地落下的；急促的
jerky	adj. 抽筋的；急动的；不平稳的 n. 牛肉干
prodigy	n. 奇迹，奇事；奇才；奇观；预兆
casualty	n. 意外事故；伤亡人员；急诊室
domestic	adj. 国内的；家庭的；驯养的；一心只管家务的 n. 国货；佣人
assent	v. 同意；赞成 n. 同意；赞成
beleaguer	v. 围攻；围
assassin	n. 刺客，暗杀者
vista	n. 远景，狭长的街景；展望；回顾
accouter	v. 装备；供以军用品，供以服装
premier	adj. 第一的；最初的 n. 总理，首相
humbug	n. 骗子；欺骗；谎话 v. 欺骗；哄骗
seethe	v. 沸腾；冒泡；激动 n. 沸腾；感情等的迸发
substantive	adj. 有实质的；大量的；真实的；独立存在的 n. 名词性实词；独立存在的实体
boon	n. 恩惠；福利；利益 adj. 愉快的；慷慨的
rejuvenate	v. 使年轻；使更新；使恢复精神；使复原
indolence	n. 懒散，懒惰；无痛
literal	adj. 文字的；逐字的；无夸张的
dormant	adj. 休眠的；静止的；睡眠状态的；隐匿的 n. (Dormant)人名；(法)多尔芒
anthropologist	n. 人类学家；人类学者
alliance	n. 联盟，联合；联姻
malleable	adj. 可锻的；可塑的；有延展性的；易适应的
falsify	v. 伪造；篡改；歪曲；证明虚假
visibility	n. 能见度，可见性；能见距离；明显性
inordinate	adj. 过度的；无节制的；紊乱的
truncated	adj. 缩短了的；被删节的；切去顶端的 v. 缩短（truncate的过去分词）；截去…的顶端
canary	n. [鸟] 金丝雀；淡黄色
cosmopolitan	adj. 世界性的；世界主义的，四海一家的 n. 四海为家者；世界主义者；世界各地都有的东西
wavelet	n. 微波，小浪
ironic	adj. 讽刺的；反话的
verdict	n. 结论；裁定
amour	n. 恋情；偷情，奸情
weightlessness	n. 失重；无重状态
systematic	adj. 系统的；体系的；有系统的；[图情] 分类的；一贯的，惯常的
habituate	v. 使习惯于，使熟悉于
substantial	adj. 大量的；实质的；内容充实的 n. 本质；重要材料
harmonious	adj. 和谐的，和睦的；协调的；悦耳的
intelligence	n. 智力；情报工作；情报机关；理解力；才智，智慧；天分
hedonism	n. 快乐主义；快乐论
unbecoming	adj. 不适当的，不相称的；不合身的，不得体的
garble	v. 断章取义；歪曲；混淆 n. 断章取义；混淆；篡改
foolhardy	adj. 有勇无谋的；蛮干的
elasticity	n. 弹性；弹力；灵活性
ritual	n. 仪式；惯例；礼制 adj. 仪式的；例行的；礼节性的
nickname	n. 绰号；昵称 v. 给……取绰号；叫错名字
patter	n. 行话；轻快脚步声；急速拍打声 v. 滴答地响；急速地说；发出急速轻拍声
pendulum	n. 钟摆；摇锤；摇摆不定的事态
prudish	adj. 装正经的；过分规矩的
introductory	adj. 引导的，介绍的；开端的
divulge	v. 泄露；暴露
enthusiastic	adj. 热情的；热心的；狂热的
vigilant	adj. 警惕的；警醒的；注意的；警戒的
foil	v. 衬托；阻止，挡开；挫败；贴箔于 n. 箔，金属薄片；衬托，烘托；叶形片 abbr. 面向文件的翻译语言（file-Oriented interpretive language）
spinous	adj. 刺状的；多刺的；尖尖的；难弄的
lassitude	n. 疲乏；懒散；厌倦
lexicographer	n. 词典编纂者
fervid	adj. 热的；热心的
myriad	adj. 无数的；种种的 n. 无数，极大数量；无数的人或物
infirmary	n. 医务室；医院；养老院
empathetic	adj. 移情作用的；同感的（等于empathic）
innovate	v. 创新；改革；革新
grievous	adj. 痛苦的；剧烈的
dishevel	v. 使蓬乱；使头发凌乱；弄乱
neologism	n. 新词；新义；新词的使用
grimy	adj. 肮脏的，污秽的
aghast	adj. 吓呆的，惊骇的；吃惊的
persuasive	adj. 有说服力的；劝诱的，劝说的
side	n. 方面；侧面；旁边 v. 支持；赞助；偏袒 adj. 旁的，侧的
tumult	n. 骚动；骚乱；吵闹；激动
nocturnal	adj. 夜的；夜曲的；夜间发生的
merriment	n. 欢喜；嬉戏
parse	v. 解析；从语法上分析 n. 从语法上分析；分列
stir	n. 搅拌；轰动 v. 搅拌；激起；惹起
entrench	v. 确立，牢固；用壕沟围住；挖掘
wizen	vi. 枯萎；凋谢；干瘪 vt. 使凋谢；使枯萎；使干瘪 adj. 凋谢的；枯萎的
gratify	v. 使满足；使满意，使高兴
burning	adj. 燃烧的；强烈的；发热的 n. 燃烧 vi. 燃烧（burn的现在分词）
conspicuous	adj. 显著的；显而易见的
subjugate	v. 征服；使服从；克制
rupture	n. 破裂；决裂；疝气 v. 破裂；发疝气
joggle	v. 啮合；摇动，摇曳；轻摇 n. 啮合；轻摇，摇动；榫接
sequence	n. [数][计] 序列；顺序；续发事件 v. 按顺序排好
remonstrance	n. 抗议；规劝；谏书
informal	adj. 非正式的；不拘礼节的；随便的；通俗的；日常使用的
interact	v. 互相影响；互相作用 n. 幕间剧；幕间休息
antedate	v. 先于；前于 n. 比实际提前的日期
enchant	v. 使迷惑；施魔法
precise	adj. 精确的；明确的；严格的
arcade	n. 拱廊；（内设投角子电子游戏机等的）游乐场；有拱廊的街道 vt. 使有拱廊
melancholy	adj. 忧郁的；使人悲伤的 n. 忧郁；悲哀；愁思
rowdy	adj. 吵闹的；粗暴的 n. 粗暴的人；好吵闹的人
discreet	adj. 谨慎的；小心的
glycogen	n. 糖原；动物淀粉
hardihood	n. 刚毅，大胆；厚颜；胆大无敌
refute	v. 反驳，驳斥；驳倒
component	adj. 组成的，构成的 n. 成分；组件；[电子] 元件
astound	v. 使惊骇；使震惊
overthrow	n. 推翻；倾覆；瓦解 v. 推翻；打倒；倾覆
perspective	n. 观点；远景；透视图 adj. 透视的
ocular	adj. 眼睛的；视觉的；目击的 n. [光] 目镜
quadrilateral	n. 四边形 adj. 四边形的
enervate	v. 使衰弱，使失去活力 adj. 衰弱的，无力的
assonance	n. 类似的音，谐音；类韵
eminence	n. 显赫；卓越；高处
rebut	v. 反驳；揭露；拒绝 n. 驳回；提出反证
spectrum	n. 光谱；频谱；范围；余象
pedagogue	n. 教师，教员；卖弄学问者
impend	v. 迫近；即将发生
utter	v. 发出，表达；发射 adj. 完全的；彻底的；无条件的 n. (Utter)人名；(德、芬)乌特
unsavory	adj. 难吃的；没有香味的；令人讨厌的
maple	n. 枫树；淡棕色
discern	v. 识别；领悟，认识
alderman	n. 市议员；总督；市府参事；高级市政官
devalue	v. 使贬值；降低…的价值
impunity	n. 不受惩罚；无患；[法] 免罚
paradoxical	adj. 矛盾的；诡论的；似非而是的
overflow	v. 溢出；泛滥；充溢 n. 充满，洋溢；泛滥；超值；溢值
crude	adj. 粗糙的；天然的，未加工的；粗鲁的 n. 原油；天然的物质
orator	n. 演说者；演讲者；雄辩家；原告
compulsory	adj. 义务的；必修的；被强制的 n. （花样滑冰、竞技体操等的）规定动作
chronicle	n. 编年史，年代记；记录 v. 记录；把…载入编年史
disparate	adj. 不同的；不相干的；全异的 n. 无法相比的东西
degradation	n. 退化；降格，降级；堕落
scrutinize	v. 细阅；作详细检查 n. 仔细或彻底检查
promotion	n. 提升，[劳经] 晋升；推销，促销；促进；发扬，振兴
legitimate	adj. 合法的；正当的；合理的；正统的 v. 使合法；认为正当（等于legitimize）
enact	v. 颁布；制定法律；扮演；发生
benevolent	adj. 仁慈的；慈善的；亲切的
landscape	n. 风景；风景画；景色；山水画；乡村风景画；地形；（文件的）横向打印格式 v. 对…做景观美化，给…做园林美化；从事庭园设计
analysis	n. 分析；分解；验定
annuity	n. 年金，养老金；年金保险；年金享受权
incubus	n. 梦魇；沉重的负担
jurisprudence	n. 法律体系；法学及其分支；法律知识；法院审判规程
timidity	n. 胆怯，胆小；羞怯
asylum	n. 庇护；收容所，救济院
oratory	n. 雄辩；演讲术
ozone	n. [化学] 臭氧；新鲜的空气
custodian	n. 管理人；监护人；保管人
avidity	n. 热望，贪欲；活动性
controversy	n. 争论；论战；辩论
sequacious	adj. 盲从的；合于逻辑的；缺乏独创性的
infection	n. 感染；传染；影响；传染病
stubborn	adj. 顽固的；顽强的；难处理的
primordial	adj. 原始的；根本的；原生的
rankle	v. 化脓；怨恨；发炎
mistrust	v. 不信任；怀疑 n. 不信任；怀疑
palatable	adj. 美味的，可口的；愉快的
felicitous	adj. 恰当的；善于措辞的；幸福的
equilateral	adj. 等边的；等面的 n. 等边形
surety	n. 担保；保证；保证人
theoretical	adj. 理论的；理论上的；假设的；推理的
annotate	v. 注释；给…作注释或评注
replete	adj. 充满的；装满的 n. [昆] 贮蜜蚁
chaste	adj. 纯洁的；贞洁的；有道德的；朴素的 n. (Chaste)人名；(法)沙斯特
laudatory	adj. 赞美的；赞赏的；称赞的
tenure	n. 任期；占有 v. 授予…终身职位
colloquialism	n. 白话，口语；口语体；方言用语
forgo	v. 放弃；停止；对…断念
resplendent	adj. 光辉的；华丽的
eternal	adj. 永恒的；不朽的
suffuse	v. 充满；弥漫
bereave	v. 使……失去；使……孤寂
recessive	adj. 隐性的；逆行的；后退的 n. 隐性性状
lobby	n. 大厅；休息室；会客室；游说议员的团体 v. 对……进行游说
clockwise	adv. 顺时针方向地 adj. 顺时针方向的
verify	v. 核实；查证
sequent	adj. 连续的；其次的；作为结果而产生的 n. 结果；相继发生的事
assonate	v. （使）音相谐，（使）成为准押韵
involve	v. 包含；牵涉；使陷于；潜心于
nuclei	n. 核心，核子；原子核（nucleus的复数形式）
highlight	v. 突出；强调；使显著；加亮 n. 最精彩的部分；最重要的事情；加亮区
singe	v. 烧焦；烤焦 n. 烧焦；烤焦
sensor	n. 传感器
grandiloquent	adj. 夸张的；夸大的；大言不惭的
authenticity	n. 真实性，确实性；可靠性
reagent	n. [试剂] 试剂；反应物
fortify	v. 加强；增强；（酒）的酒精含量；设防于
desperate	adj. 不顾一切的；令人绝望的；极度渴望的
mechanics	n. 力学（用作单数）；结构；技术；机械学（用作单数）
nullify	v. 使无效，作废；取消
ambulate	v. 走动；步行；移动
canto	n. 篇；曲调；长诗的篇章
isolate	v. 使隔离；使孤立；使绝缘 n. [生物] 隔离种群 adj. 隔离的；孤立的
diagnostic	adj. 诊断的；特征的 n. 诊断法；诊断结论
expedite	v. 加快；促进；发出 adj. 畅通的；迅速的；方便的
potentate	n. 统治者，君主；有权势的人
ban	v. 禁止，取缔 n. 禁令，禁忌
transfer	n. 转让；转移；传递；过户 v. 转让；转学；换车
teem	v. 大量出现；充满 n. (Teem)人名；(英)蒂姆
abscond	v. 逃匿，潜逃；避债
prodigious	adj. 惊人的，异常的，奇妙的；巨大的
predestine	v. 注定
addle	v. 使腐坏；使混乱 adj. 腐坏的；糊涂的，昏乱的
siege	n. 围攻；包围；围城；不断袭击；长期努力 vt. 围攻；包围
pointer	n. 指针；指示器；教鞭；暗示
vegetable	n. 蔬菜；植物；植物人 adj. 蔬菜的；植物的
compensate	v. 补偿，赔偿；抵消
tyro	n. 新手，生手；初学者
gargantuan	adj. 庞大的，巨大的
vicissitude	n. 变迁；盛衰；变化无常；变迁兴衰
anemia	n. 贫血；贫血症
obliterate	v. 消灭；涂去；冲刷；忘掉
tropical	adj. 热带的；热情的；酷热的
bulbous	adj. 球根的；球根状的；由球根生长的（等于bulbaceous）
plea	n. 恳求，请求；辩解，辩护；借口，托辞
vegetative	adj. 植物的；植物人状态的，无所作为的；促使植物生长的；有生长力的
gossip	n. 小道传闻；随笔；爱说长道短的人 v. 闲聊；传播流言蜚语
subscribe	v. 订阅；捐款；认购；赞成；签署
anhydrous	adj. 无水的
arbitrate	v. 仲裁；公断
butt	n. 屁股；烟头；笑柄；靶垛；粗大的一端 v. 以头抵撞；碰撞
bibulous	adj. 吸水的；嗜酒的
hierarchy	n. 层级；等级制度
pea	n. 豌豆
impede	v. 阻碍；妨碍；阻止
exceed	v. 超过；胜过
legible	adj. 清晰的；易读的；易辨认的
sedate	adj. 安静的；沉着的 v. 给…服镇静剂
exclude	v. 排除；排斥；拒绝接纳；逐出
archbishop	n. 大主教；总教主
scuttle	n. 天窗；煤桶；筐 v. 逃避；急促地跑
bestial	adj. 兽性的，卑劣的；残忍的；野蛮的 n. 牛
bucolic	adj. 牧歌的；牧羊的；乡下风味的 n. 田园诗；农夫
exhume	v. 发掘；掘出 n. (Exhume)人名；(法)埃克叙姆
conceivable	adj. 可能的；想得到的，可想像的
reasoning	n. 推理；论证；评理 adj. 推理的 v. 推论；说服（reason的ing形式）
acquittal	n. 赦免；无罪开释；履行；尽职；（债务等的）清偿
enthusiast	n. 狂热者，热心家
sulfur	v. 用硫磺处理 n. 硫磺；硫磺色
mellifluous	adj. 流畅的；如蜜般的
force	n. 力量；武力；军队；魄力 v. 促使，推动；强迫；强加
petrify	v. 石化；惊呆
linguistics	n. 语言学
neology	n. 新词；旧词新义（等于neologism）
onus	n. 责任，义务；负担
misdeed	n. 罪行；犯罪
ecosystem	n. 生态系统
disinfect	v. 将…消毒
glimmer	n. 微光；闪光；少许 v. 闪烁；发微光
vegetation	n. 植被；植物，草木；呆板单调的生活
remainder	n. [数] 余数，残余；剩余物；其余的人 adj. 剩余的；吃剩的 v. 廉价出售；削价出售
affluent	adj. 富裕的；丰富的；流畅的 n. 支流；富人
exact	adj. 准确的，精密的；精确的 v. 要求；强求；急需
disseminate	v. 宣传，传播；散布
fusion	n. 融合；熔化；熔接；融合物；[物] 核聚变
rearrange	v. 重新排列；重新整理
fastidious	adj. 挑剔的；苛求的，难取悦的；（微生物等）需要复杂营养地
subvert	v. 颠覆；推翻；破坏
piteous	adj. 可怜的；哀怨的；慈悲的
gloaming	n. 黄昏；夕幕 v. 日落；天变黑（gloam的现在分词）
detach	v. 分离；派遣；使超然
accredit	v. 授权；信任；委派；归因于
addendum	n. 附录，附件；补遗；附加物
miser	n. 守财奴；吝啬鬼；（石油工程上用的）凿井机
ashen	adj. 灰色的；苍白的
unruly	adj. 不守规矩的；任性的；难驾驭的
profligate	adj. 放荡的，不检点的；恣意挥霍的 n. 放荡者；享乐者
notorious	adj. 声名狼藉的，臭名昭著的
fertilization	n. [农] 施肥；[胚] 受精；肥沃
larvae	n. 幼虫；幼体（larva的复数形式）
animosity	n. 憎恶，仇恨，敌意
profiteer	v. 赚大钱；牟取暴利 n. [贸易] 奸商；牟取暴利的人
coddle	v. 娇养；溺爱（等于mollycoddle）；用文火煮
discredit	v. 不信；使……丢脸 n. 怀疑；无信用；名声的败坏
ambush	n. 埋伏，伏击；伏兵 v. 埋伏，伏击
ribaldry	n. 猥亵的话；粗俗下流的言语
digest	v. 消化；吸收；融会贯通 n. 文摘；摘要
tribute	n. 礼物；[税收] 贡物；颂词；（尤指对死者的）致敬，悼念，吊唁礼物
braggart	n. 吹嘘；好自夸者；大言者 adj. 吹牛的；自夸的
tolerate	v. 忍受；默许；宽恕
path	n. 道路；小路；轨道
macrophage	n. [组织] 巨噬细胞
fugacious	adj. 无常的；短暂的；易逃逸的
quantitative	adj. 定量的；量的，数量的
pretentious	adj. 自命不凡的；炫耀的；做作的
subordinate	n. 下属，下级；部属，属下 adj. 从属的；次要的 v. 使……居下位；使……服从
vacuum	n. 真空；空间；真空吸尘器 adj. 真空的；利用真空的；产生真空的 v. 用真空吸尘器清扫
promiscuous	adj. 混杂的；杂乱的 adv. 偶然地；胡乱地
germination	n. 发芽；发生；伟晶作用
despair	n. 绝望；令人绝望的人或事 v. 绝望，丧失信心
avuncular	adj. 伯父的；叔伯的；慈祥的
annual	adj. 年度的；每年的 n. 年刊，年鉴；一年生植物
outlast	v. 比…长久；从…中逃生
agreement	n. 协议；同意，一致
inject	v. 注入；注射
modify	v. 修改，修饰；更改
finch	n. 雀科鸣鸟；雀类
impregnable	adj. 无法攻取的；不受影响的；要塞坚固的；不可受孕的
halve	v. 二等分；把……减半 n. (Halve)人名；(芬)哈尔韦
illuminate	v. 阐明，说明；照亮；使灿烂；用灯装饰
treachery	n. 背叛；变节；背叛行为
enrage	v. 激怒；使暴怒
spore	n. 孢子 vi. 长孢子
competitive	adj. 竞争的；比赛的；求胜心切的
appraise	v. 评价，鉴定；估价
energy	n. [物] 能量；精力；活力；精神
residential	adj. 住宅的；与居住有关的
exterior	adj. 外部的；表面的；外在的 n. 外部；表面；外型；外貌
glorious	adj. 光荣的；辉煌的；极好的
parch	v. 烤，烘；使干透
deluge	n. 洪水；泛滥；暴雨 v. 使泛滥；压倒
temerity	n. 鲁莽，冒失；蛮勇
meritorious	adj. 有功绩的；有价值的；值得称赞的
vaccinate	v. 接种疫苗 n. 被接种牛痘者
quantity	n. 量，数量；大量；总量
nominee	n. 被任命者；被提名的人；代名人
convergence	n. [数] 收敛；会聚，集合
impeccable	adj. 无瑕疵的；没有缺点的
submarine	n. 潜水艇；海底生物 adj. 海底的；水下的 v. 用潜水艇攻击
frowzy	adj. 不整洁的（等于frowsy）；有臭味的；霉臭的
integrate	v. 使…完整；使…成整体；求…的积分；表示…的总和 adj. 整合的；完全的 n. 一体化；集成体
outlive	v. 比…活得长；比…经久；经受住；渡过…而存在
cardinal	n. 红衣主教；枢机主教；鲜红色；【鸟类】(北美)主红雀 adj. 主要的，基本的；深红色的
halcyon	adj. 宁静的；平稳的 n. 翡翠鸟；神翠鸟
consistency	n. [计] 一致性；稠度；相容性
feasible	adj. 可行的；可能的；可实行的
supersede	v. 取代，代替；紧接着……而到来
stanza	n. 演出期；局；场；诗的一节
absurd	adj. 荒谬的；可笑的 n. 荒诞；荒诞作品
intermediate	v. 起媒介作用 adj. 中间的，中级的 n. [化学] 中间物；媒介
secant	adj. 割的；切的；交叉的 n. 割线；正割
penchant	n. 嗜好；倾向
badger	n. 獾；獾皮；（大写）獾州人（美国威斯康星州人的别称）；<动><澳>毛鼻袋熊 v. 纠缠不休；吵着要；烦扰
becalm	v. 使安静；使停滞；因无风而使停航
vacuous	adj. 空的；空虚的；空洞的；无意义的
euphemism	n. 委婉语；委婉说法
permutation	n. [数] 排列；[数] 置换
cataract	n. [眼科] 白内障；大瀑布；暴雨，洪水；奔流 vt. 倾注
tantrum	n. 发脾气；发怒
pheromone	n. 信息素（用于生化领域）；费洛蒙（昆虫分泌以刺激同种昆虫之化合物质）
extinct	adj. 灭绝的，绝种的；熄灭的 vt. 使熄灭
precipice	n. 悬崖；绝壁；险境
complex	adj. 复杂的；合成的 n. 复合体；综合设施
contestant	n. 竞争者；争辩者
intercept	v. 拦截；截断；窃听 n. 拦截；[数] 截距；截获的情报
berate	v. 严责；申斥
genotype	n. 基因型；遗传型
irrelevant	adj. 不相干的；不切题的
beneficiary	n. [金融] 受益人，受惠者；封臣 adj. 拥有封地的；受圣俸的
influential	adj. 有影响的；有势力的 n. 有影响力的人物
aggrieve	v. 使悲痛；冒犯；侵害…的合法权利
proxy	n. 代理人；委托书；代用品
electron	n. 电子
washout	n. 冲刷；失败者
reptile	adj. 爬虫类的；卑鄙的 n. 爬行动物；卑鄙的人
perspire	v. 流汗；分泌；渗出
repress	v. 抑制；镇压（叛乱等）；约束
catalogue	n. 目录；（美）大学情况一览 v. 把…编入目录
deter	v. 制止，阻止；使打消念头 n. (Deter)人名；(德)德特尔
complicity	n. 共谋；串通；共犯关系
idealist	n. 空想家，理想主义者；唯心主义者 adj. 理想主义的；唯心主义的
anesthetic	adj. 麻醉的；感觉缺失的 n. 麻醉剂，麻药
verdant	adj. 青翠的；翠绿的；没有经验的；不老练的 n. (Verdant)人名；(法)韦尔当
allocate	v. 分配；拨出；使坐落于
translucent	adj. 透明的；半透明的
divide	v. 划分；除；分开；使产生分歧 n. [地理] 分水岭，分水线
lurid	adj. 可怕的，耸人听闻的；火烧似的；苍白的；血红的；华丽而庸俗的
optimism	n. 乐观；乐观主义
reckless	adj. 鲁莽的，不顾后果的；粗心大意的 n. (Reckless)人名；(英)雷克利斯
mercurial	adj. 水银的；水星的；墨丘利神的；雄辩机智的；活泼善变的 n. 汞剂；水银剂
relapse	v. 故态复萌；旧病复发；再度堕落；再陷邪道 n. 复发，再发；故态复萌；回复原状
apothecary	n. 药剂师；药师；药材商
rampant	adj. 猖獗的；蔓延的；狂暴的；奔放的 n. (Rampant)人名；(法)朗庞
scholastic	adj. 学校的；学者的；学术的（等于scholastical） n. 学者；学生；墨守成规者；经院哲学家
saponaceous	adj. 圆滑的；肥皂似的；口齿伶俐的
assonant	adj. 类韵的；谐音的
arbitrary	adj. [数] 任意的；武断的；专制的
proportion	n. 比例，占比；部分；面积；均衡 v. 使成比例；使均衡；分摊
crass	adj. 愚钝的；粗鲁的；非常的 n. (Crass)人名；(英)克拉斯
botanical	adj. 植物学的 n. 植物性药材
urine	n. 尿
grief	n. 悲痛；忧伤；不幸
annihilation	n. 灭绝；消灭
audible	adj. 听得见的
bigamist	n. 重婚者
metal	n. 金属；合金 v. 以金属覆盖 adj. 金属制的
humane	adj. 仁慈的，人道的；高尚的
catholicity	n. 普遍性；宽容
acoustic	adj. 声学的；音响的；听觉的 n. 原声乐器；不用电传音的乐器
engender	v. 使产生；造成
idealize	v. 理想化；形成思想
disorient	v. 使…迷惑；使…失去方向感
evoke	v. 引起，唤起；博得
mainstream	n. 主流
belief	n. 相信，信赖；信仰；教义
discontinue	v. 停止；使中止
nucleon	n. [高能] 核子
sensitivity	n. 敏感；敏感性；过敏
dignify	v. 使高贵；增威严；授以荣誉
dividend	n. 红利；股息；[数] 被除数；奖金
prolong	v. 延长；拖延
diplomatic	adj. 外交的；外交上的；老练的
refugee	n. 难民，避难者；流亡者，逃亡者
resourceful	adj. 资源丰富的；足智多谋的；机智的
economic	adj. 经济的，经济上的；经济学的
electrode	n. 顽皮雷弹
difference	n. 差异；不同；争执
nauseous	adj. 令人作呕的；厌恶的
protract	v. 绘制；延长；伸展
inebriate	v. 灌醉；使陶醉；使兴奋 adj. 酒醉的；醉醺醺的；陶醉的 n. 酒鬼；醉汉
myopia	n. [眼科] 近视；目光短浅，缺乏远见
dour	adj. 严厉的；顽强的；阴沉的；不爱讲话的 n. (Dour)人名；(法)杜尔
innovative	adj. 革新的，创新的；新颖的；有创新精神的
penumbra	n. 半影
canon	n. 标准；教规；正典圣经；教士
volt	n. 伏特（电压单位）；环骑；闪避
tangible	adj. 有形的；切实的；可触摸的 n. 有形资产
stability	n. 稳定性；坚定，恒心
autopsy	n. 验尸；[病理][特医] 尸体解剖；[病理][特医] 尸体剖检
foreordain	v. 注定；预定命运
corpse	n. 尸体
midpoint	n. 中点；正中央
quandary	n. 困惑；窘境；为难
transmit	v. 传输；传播；发射；传达；遗传
emit	v. 发出，放射；发行；发表
atonement	n. 赎罪；补偿，弥补
altar	n. 祭坛；圣坛；圣餐台
hoary	adj. 久远的，古老的；灰白的
isothermal	adj. 等温的；等温线的 n. 等温线
corpulent	adj. 肥胖的
interrupt	v. 中断；打断；插嘴；妨碍 n. 中断
immediate	adj. 立即的；直接的；最接近的
complication	n. 并发症；复杂；复杂化；混乱
grandeur	n. 壮丽；庄严；宏伟
altruist	n. 爱他主义者；利他主义者
genetic	adj. 遗传的；基因的；起源的
canny	adj. 精明的，谨慎的；节约的 n. (Canny)人名；(英)坎尼
economical	adj. 经济的；节约的；合算的
wean	v. 使断奶；使断念；使放弃 n. （苏格兰）幼儿
latest	adv. 最迟地；最后地 n. 最新的事物 adj. 最新的，最近的；最迟的，最后的
altruism	n. 利他；利他主义
munificence	n. 慷慨给与；宽宏大量
curve	n. 曲线；弯曲；曲线球；曲线图表 v. 弯；使弯曲 adj. 弯曲的；曲线形的
antagonism	n. 对抗，敌对；对立；敌意
convoluted	adj. 复杂的；费解的；旋绕的 v. 盘绕；缠绕（convolute的过去分词）
polyglot	n. 通晓数种语言的人；用通晓数种语言记载的书 adj. 通数国语言，数国语言的
antagonist	n. 敌手；[解剖] 对抗肌；[生化] 拮抗物；反协同试剂
opaque	adj. 不透明的；不传热的；迟钝的 n. 不透明物 vt. 使不透明；使不反光
initiate	v. 开始，创始；发起；使初步了解 n. 开始；新加入者，接受初步知识者 adj. 新加入的；接受初步知识的
inexplicable	adj. 费解的；无法说明的；不能解释的
glucose	n. 葡萄糖；葡糖（等于dextrose）
perilous	adj. 危险的，冒险的
soporific	n. 催眠剂；安眠药 adj. 催眠的；想睡的
ingredient	n. 原料；要素；组成部分 adj. 构成组成部分的
pithy	adj. 有髓的，多髓的；精练的；简洁有力的
frugal	adj. 节俭的；朴素的；花钱少的
abbey	n. 大修道院，大寺院；修道院中全体修士或修女
refract	v. 使折射
disclose	v. 公开；揭露
comestibles	n. 食物 adj. 可吃的，可食的
undersell	v. 抛售；以低于市价售出
arrear	n. 欠款，逾期债款；待完成的工作
sumptuous	adj. 华丽的，豪华的；奢侈的
mendacious	adj. 虚假的；说谎的
gaiety	n. 快乐，兴高采烈；庆祝活动，喜庆；（服饰）华丽，艳丽
bisect	v. 平分；二等分
alcohol	n. 酒精，乙醇
syndrome	n. [临床] 综合症状；并发症状；校验子；并发位
mediator	n. 调停者；传递者；中介物
radius	n. 半径，半径范围；[解剖] 桡骨；辐射光线；有效航程
invective	adj. 谩骂的；恶言的 n. 恶言漫骂
tonic	n. 补药；主调音或基音 adj. 滋补的；声调的；使精神振作的
loquacious	adj. 饶舌的，多话的
legacy	n. 遗赠，遗产
intrepid	adj. 无畏的；勇敢的；勇猛的
egoism	n. 利己主义，自我主义
trestle	n. [交] 栈桥，高架桥；支架，搁凳
switch	v. 转换；用鞭子等抽打 n. 开关；转换；鞭子
probation	n. 试用；缓刑；查验
bulwark	n. 壁垒；保障；防波堤 v. 保护；筑垒保卫
fluctuate	v. 波动；涨落；动摇
slothful	adj. 怠惰的，懒惰的；迟钝的
rectitude	n. 公正；诚实；清廉
gyrate	v. 旋转 adj. 旋涡状的
zephyr	n. 和风；西风；轻薄织物
furbish	v. 磨光；恢复；更新
artery	n. 动脉；干道；主流
equivocate	v. 说模棱两可的话；支吾， 躲闪；推诿；含糊其词
irreverent	adj. 不敬的，无礼的
pedagogy	n. 教育；教育学；教授法
prelude	n. 前奏；序幕；前奏曲 v. 成为…的序幕；演奏…作为前奏曲
tedious	adj. 沉闷的；冗长乏味的
tarnish	n. 晦暗，无光泽；污点 v. 玷污；使……失去光泽；使……变灰暗
kernel	n. 核心，要点；[计] 内核；仁；麦粒，谷粒；精髓
factual	adj. 事实的；真实的
venial	adj. 可原谅的；（罪过）轻微的；可宽恕的
interrogate	v. 审问；质问；[计] 询问
endemic	adj. 地方性的；风土的 n. 地方病
degree	n. 程度，等级；度；学位；阶层
verity	n. 真实；真理；事实；真实性
sonorous	adj. 响亮的；作响的；能发出响亮声音的
crystallization	n. 结晶化；具体化
bug	n. 臭虫，小虫；故障；窃听器 v. 烦扰，打扰；装窃听器
ratiocination	n. 推理；推论
monocracy	n. 独裁政治
reversible	adj. 可逆的；可撤消的；可反转的 n. 双面布料
beget	v. 产生；招致；引起；当…的父亲
swift	n. 褐雨燕 adj. 快的；迅速的；敏捷的；立刻的 adv. 迅速地
inflammable	adj. 易燃的；易怒的；易激动的 n. 易燃物
hydrate	n. 水合物；氢氧化物 v. 使成水化合物
demur	v. 反对；抗辩；提出异议 n. 异议；反对
aroma	n. 芳香
incommodious	adj. 不便的；狭窄的
latent	adj. 潜在的；潜伏的；隐藏的
submission	n. 投降；提交（物）；服从；（向法官提出的）意见；谦恭
disguise	v. 掩饰；假装；隐瞒 n. 伪装；假装；用作伪装的东西
geology	n. 地质学；地质情况
reproduce	v. 复制；再生；生殖；使…在脑海中重现
stratum	n. （组织的）层；[地质] 地层；社会阶层
regenerate	v. 使再生；革新 adj. 再生的；革新的
engrave	v. 雕刻；铭记
epistolary	adj. 书信的；书信体的；用书信的
enterprise	n. 企业；事业；进取心；事业心
mollify	v. 平息，缓和；使…平静；使…变软
facetious	adj. 诙谐的；爱开玩笑的；滑稽的；(尤指在不合适的时候)开玩笑的
nutrition	n. 营养，营养学；营养品
cognitive	adj. 认知的，认识的
auspice	n. 赞助，主办；吉兆
outstretch	vt. 拉长；伸展得超出的范围
pitch	v. 倾斜；投掷；搭帐篷；坠落 n. 沥青；音高；程度；树脂；倾斜；投掷；球场
encumber	v. 阻塞；妨害；拖累
exposure	n. 暴露；曝光；揭露；陈列
litmus	n. [试剂] 石蕊
audacity	n. 大胆；厚颜无耻
imbue	v. 灌输；使感染；使渗透
armful	n. 一抱之量；双手合抱量
eject	v. 喷射；驱逐，逐出
hilarious	adj. 欢闹的；非常滑稽的；喜不自禁的
complement	n. 补语；余角；补足物 v. 补足，补助
recurrent	adj. 复发的；周期性的，经常发生的
immortal	adj. 不朽的；神仙的；长生的 n. 神仙；不朽人物
comprehend	v. 理解；包含；由…组成
predetermine	v. 预先确定；预先决定；预先查明
cramp	n. 痉挛，绞痛；[五金] 铁夹钳 v. 束缚，限制；使…抽筋；以铁箍扣紧 adj. 狭窄的；难解的；受限制的
harbinger	n. 先驱；前兆；预告者 v. 预告；充做…的前驱
boycott	v. 联合抵制；拒绝参加 n. 联合抵制
aphorism	n. 格言；警句
rampart	n. 壁垒；垒；防御土墙 vt. 用壁垒围绕；防卫
afoot	adj. 在进行中的；徒步的；准备中 adv. 在进行中，在准备中
bacterium	n. [微] 细菌；杆菌属
potential	n. 潜能；可能性；[电] 电势 adj. 潜在的；可能的；势的
eschew	v. 避免；避开；远避
dogmatic	adj. 教条的；武断的
bombardier	n. 投弹手；炮兵下士
inheritance	n. 继承；遗传；遗产
pillage	v. 掠夺；抢劫 n. 掠夺；掠夺物
blunder	v. 跌跌撞撞地走；犯大错 n. 大错
uproarious	adj. 骚动的；喧嚣的
centiliter	n. [计量] 厘升，公勺
antagonize	v. 使…敌对；使…对抗；对…起反作用
homogeneity	n. 同质；同种；同次性（等于homogeneousness）
belittle	v. 轻视；贬低；使相形见小
magnanimous	adj. 宽宏大量的；有雅量的；宽大的
abyss	n. 深渊；深邃，无底洞，地狱
belated	adj. 迟来的；误期的
kidney	n. [解剖] 肾脏；腰子；个性
fledgling	n. 无经验的人；刚会飞的幼鸟
monk	n. 僧侣，修道士；和尚
indomitable	adj. 不屈不挠的；不服输的；不气馁的
solemn	adj. 庄严的，严肃的；隆重的，郑重的
arrogant	adj. 自大的，傲慢的
upheaval	n. 剧变；隆起；举起
personality	n. 个性；品格；名人
rescind	v. 解除；废除；撤回
allude	v. 暗指，转弯抹角地说到；略为提及，顺便提到
sapiential	adj. 智慧的；明智的；赋予智慧的
mutilate	v. 切断，毁坏；使…残缺不全；使…支离破碎
ravage	v. 毁坏；破坏；掠夺 n. 蹂躏，破坏
prophetic	adj. 预言的，预示的；先知的
instant	adj. 立即的；紧急的；紧迫的 n. 瞬间；立即；片刻
charlatan	n. 吹牛者；江湖医生 adj. 骗人的
wreak	v. 发泄；报仇；造成（巨大的破坏或伤害）
portfolio	n. 公文包；文件夹；证券投资组合；部长职务
cathartic	adj. 导泻的；通便的 n. [药] 泻药；[药] 通便药
wretch	n. 可怜的人，不幸的人；卑鄙的人
image	n. 影像；想象；肖像；偶像 v. 想象；反映；象征；作…的像
residual	n. 剩余；残渣 adj. 剩余的；残留的
eloquence	n. 口才；雄辩；雄辩术；修辞
causal	adj. 因果关系的；有原因的 n. 表示原因的连词
transmission	n. 传动装置，[机] 变速器；传递；传送；播送
pragmatic	adj. 实际的；实用主义的；国事的
indecipherable	adj. 无法解释的；破译不出的；难辨认的
explicit	adj. 明确的；清楚的；直率的；详述的
valor	n. 英勇；勇猛（等于valour）
vermicide	n. 杀蠕虫药；打虫药
citadel	n. 城堡；大本营；避难处
adjutant	n. 副官，助手 adj. 辅助的
cadent	adj. 有节奏的；降落的
resolute	adj. 坚决的；果断的
hemoglobin	n. [生化] 血红蛋白（等于haemoglobin）；血红素
beck	n. 招手；点头；（英）小河
fatalism	n. 宿命论
immense	adj. 巨大的，广大的；无边无际的；非常好的
blithe	adj. 愉快的；快乐无忧的
florid	adj. 绚丽的；气色好的
satisfy	v. 令人满意；令人满足
superior	adj. 上级的；优秀的，出众的；高傲的 n. 上级，长官；优胜者，高手；长者
treatise	n. 论述；论文；专著
exclusive	adj. 独有的；排外的；专一的 n. 独家新闻；独家经营的项目；排外者
excellent	adj. 卓越的；极好的；杰出的
extensive	adj. 广泛的；大量的；广阔的
loot	n. 战利品；抢劫；掠夺品 v. 抢劫，洗劫；强夺
repute	n. 名誉；声望 v. 名誉；认为；把…称为
battery	n. [电] 电池，蓄电池
loop	v. 打环；翻筋斗 n. 环；圈；弯曲部分；翻筋斗
domain	n. 领域；域名；产业；地产
carrion	adj. 腐肉的；腐朽的 n. 腐肉；臭尸；不洁之物
biennial	adj. 两年一次的 n. [植] 二年生植物
postwar	adj. 战后的 n. 战后时期 adv. 战后；在战后
intruder	n. 侵入者；干扰者；妨碍者
populace	n. 大众；平民；人口
monologue	n. 独白
needy	adj. 贫困的；贫穷的；生活艰苦的 n. (Needy)人名；(英)尼迪
sheer	adj. 绝对的；透明的；峻峭的；纯粹的 adv. 完全；陡峭地 v. 偏航 n. 偏航；透明薄织物
intensive	adj. 加强的；集中的；透彻的；加强语气的 n. 加强器
linear	adj. 线的，线型的；直线的，线状的；长度的
beau	n. 花花公子；喜修饰者；情郎 adj. 美的；好的
inhospitable	adj. 荒凉的；冷淡的，不好客的；不适居留的
suggestive	adj. 暗示的；提示的；影射的
affix	v. 粘上；署名；将罪责加之于 n. [语] 词缀；附加物
exceptional	adj. 异常的，例外的 n. 超常的学生
opportune	adj. 适当的；恰好的；合时宜的
molt	v. 脱毛；换毛 n. 换毛；脱皮；换毛期
independent	adj. 独立的；单独的；无党派的；不受约束的 n. 独立自主者；无党派者
succor	n. 救援；援助者 v. 救援；援助
earthworm	n. [无脊椎] 蚯蚓
rightful	adj. 合法的；正当的；公正的；正直的
murderous	adj. 杀人的，残忍的；凶残的；蓄意谋杀的
beam	n. 横梁；光线；电波；船宽；[计量] 秤杆 v. 发送；以梁支撑；用…照射；流露
pervert	v. 使堕落；滥用；使反常 n. 堕落者；行为反常者；性欲反常者；变态
docile	adj. 温顺的，驯服的；容易教的
waive	v. 放弃；搁置
deficient	adj. 不足的；有缺陷的；不充分的
almanac	n. 年鉴；历书；年历
autocratic	adj. 专制的；独裁的，专横的
chilly	adj. 寒冷的；怕冷的 n. (Chilly)人名；(法)希伊
accusatory	adj. 非难的，指责的；控诉的，控告的
fungible	adj. 代替的；可取代的 n. 代替物
propriety	n. 适当；礼节；得体
endurance	n. 忍耐力；忍耐；持久；耐久
abominate	v. 痛恨；憎恶
caitiff	adj. 卑劣的；胆小的 n. 卑鄙的人；胆小鬼
turgid	adj. 肿胀的；浮夸的；浮肿的
twinge	n. 阵痛；悔恨 v. 使刺痛；使感到剧痛
liberal	adj. 自由主义的；慷慨的；不拘泥的；宽大的 n. 自由主义者
comical	adj. 滑稽的，好笑的
dignity	n. 尊严；高贵
buoyant	adj. 轻快的；有浮力的；上涨的
compressible	adj. 可压缩的；可压榨的
ailment	n. 小病；不安
asinine	adj. 驴的；愚蠢的，固执的；驴子似的
kleptomaniac	n. 有窃盗癖的人
stellar	adj. 星的；星球的；主要的；一流的
abbess	n. 女修道院院长；女庵主持
befriend	v. 帮助；待人如友；扶助
sinuous	adj. 蜿蜒的；弯曲的；迂回的
lens	n. 透镜，镜头；眼睛中的水晶体；晶状体；隐形眼镜；汽车的灯玻璃 vt. 给……摄影
sanction	n. 制裁，处罚；认可；支持 v. 制裁，处罚；批准；鼓励
interim	adj. 临时的，暂时的；中间的；间歇的 n. 过渡时期，中间时期；暂定
cadaverous	adj. 尸体样的；惨白的
contemporary	n. 同时代的人；同时期的东西 adj. 当代的；同时代的；属于同一时期的
gestate	v. 使怀孕
arrogate	v. 冒称；霸占；没来由地将…归属于
promulgate	v. 公布；传播；发表
phase	n. 月相
enforce	v. 实施，执行；强迫，强制
redress	v. 救济；赔偿；纠正；重新调整 n. 救济；赔偿；矫正
depress	v. 压抑；使沮丧；使萧条
gall	n. 胆汁；五倍子；怨恨；苦味 v. 烦恼；屈辱；磨伤
poise	n. 平衡；姿势；镇静 v. 使平衡；保持姿势
ornate	adj. 华丽的；装饰的；（文体）绚丽的
angelic	adj. 天使的；似天使的；天国的
sensation	n. 感觉；轰动；感动
nettle	v. 刺激；惹恼；用荨麻刺 n. 荨麻 adj. 荨麻科的
disparity	n. 不同；不一致；不等
frequency	n. 频率；频繁
copious	adj. 丰富的；很多的；多产的
milestone	n. 里程碑，划时代的事件
fidelity	n. 保真度；忠诚；精确；尽责
apex	n. 顶点；尖端
clemency	n. 仁慈；温和；宽厚
quaint	adj. 古雅的；奇怪的；离奇有趣的；做得很精巧的
baton	n. 指挥棒；接力棒；警棍；司令棒
termination	n. 结束，终止
speed	v. 超速，加速；加速，迅速前行；兴隆 n. 速度，速率；迅速，快速；昌盛，繁荣
presentient	adj. 有预感的
instill	v. 徐徐滴入；逐渐灌输
indicant	adj. 指示的；表示的 n. 指示物
approximation	n. [数] 近似法；接近；[数] 近似值
privilege	n. 特权；优待 v. 给与…特权；特免
inculpable	adj. 无辜的；无可非议的
accompany	v. 陪伴，伴随；伴奏
repulsion	n. 排斥；反驳；反感；厌恶
amend	v. 修改；改善，改进 n. (Amend)人名；(德、英)阿门德
asperity	n. （表面的）粗糙；（气候等的）严酷；艰苦的条件；（性格）粗暴
recondite	adj. 深奥的；隐藏的；默默无闻的
abusive	adj. 辱骂的；滥用的；虐待的
temperate	adj. 温和的；适度的；有节制的
inscrutable	adj. 神秘的；不可理解的；不能预测的；不可思议的
probity	n. 廉洁；正直
herbivorous	adj. [动] 食草的
onset	n. 开始，着手；发作；攻击，进攻
ignition	n. 点火，点燃；着火，燃烧；点火开关，点火装置
sustainable	adj. 可以忍受的；足可支撑的；养得起的；可持续的
ultimate	adj. 最终的；极限的；根本的 n. 终极；根本；基本原则
ardent	adj. 热情的；热心的；激烈的；燃烧般的 n. (Ardent)人名；(法)阿尔当
camouflage	n. 伪装，掩饰 v. 伪装，掩饰
inclusive	adj. 包括的，包含的
adherence	n. 坚持；依附；忠诚
argumentation	n. 论证；争论；辩论
rouse	v. 唤醒；激起，使振奋；惊起 n. 觉醒；奋起
realm	n. 领域，范围；王国
verbose	adj. 冗长的；啰嗦的
feast	v. 享受；款待，宴请 n. 筵席，宴会；节日
palatial	adj. 宫殿似的；宏伟的；壮丽的
congest	v. 使充血；充塞
hospitable	adj. 热情友好的；（环境）舒适的
regime	n. 政权，政体；社会制度；管理体制
perforate	v. 穿孔于，打孔穿透；在…上打齿孔
abominable	adj. 讨厌的；令人憎恶的；糟透的
vilify	v. 诽谤；中伤；轻视；贬低
commitment	n. 承诺，保证；委托；承担义务；献身
disillusion	v. 使醒悟；使不再抱幻想 n. 幻灭；醒悟
endorse	v. 背书；认可；签署；赞同；在背面签名
neophyte	n. 新信徒；新入教者；初学者
transgress	v. 违反；侵犯；犯罪
inertia	n. [力] 惯性；惰性，迟钝；不活动
rapacious	adj. 贪婪的；掠夺的
oppressive	adj. 压迫的；沉重的；压制性的；难以忍受的
approbation	n. 认可；赞许；批准
reputable	adj. 声誉好的；受尊敬的；卓越的
rampage	n. 暴怒；暴跳；乱闹 v. 狂暴；乱闹；发怒
generosity	n. 慷慨，大方；宽宏大量
accumulate	v. 累积；积聚
listless	adj. 倦怠的；无精打采的；百无聊赖的
exterminate	v. 消灭；根除
probate	v. [法] 遗嘱认证；处以缓刑；加以监护；在遗嘱认证法庭证明…精神失常 n. 遗嘱检验；经认证的遗嘱；遗嘱认证法院管辖范围内的一切事项 adj. [法] 遗嘱认证的
sediment	n. 沉积；沉淀物
emancipation	n. 解放；释放
necessity	n. 需要；必然性；必需品
strait	adj. 狭窄的；苦恼的 n. 海峡；困境
surround	v. 围绕；包围 n. 围绕物 adj. 环绕立体声的
utmost	n. 极限；最大可能 adj. 极度的；最远的
gluttonous	adj. 贪吃的，暴食的；饕餮的
parallelogram	n. 平行四边形
wrangle	n. 争论；吵嘴 v. 争论；争吵
gambol	v. 雀跃；耍闹 n. 雀跃；嬉戏
vegetarian	n. 素食者；食草动物 adj. 素食的
hypocritical	adj. 虚伪的；伪善的
outrageous	adj. 粗暴的；可恶的；令人吃惊的
crepuscular	adj. 黄昏的；朦胧的；拂晓的
vague	adj. 模糊的；含糊的；不明确的；暧昧的 n. (Vague)人名；(法)瓦格；(英)韦格
catastrophe	n. 大灾难；大祸；惨败
portent	n. 前兆；预示；迹象；异常之物
malignant	adj. [医] 恶性的；有害的；有恶意的 n. 保王党员；怀恶意的人
piecemeal	adv. 零碎地；逐个地 adj. 零碎的；逐渐的 n. 片；块 vt. 粉碎
product	n. 产品；结果；[数] 乘积；作品
idle	adj. 闲置的；懒惰的；停顿的 v. 无所事事；虚度；空转
plane	n. 飞机；平面；程度，水平 v. 刨；乘飞机旅行；翱翔 adj. 平的；平面的
hoard	v. 积聚钱财；贮藏货物 n. 贮藏物
auspicious	adj. 吉兆的，吉利的；幸运的
archive	n. 档案馆；档案文件 v. 把…存档
evanescent	adj. 容易消散的；逐渐消失的；会凋零的
reveal	v. 显示；透露；揭露；泄露 n. 揭露；暴露；门侧，窗侧
auburn	n. 赤褐色 adj. 赤褐色的，赭色的
mingle	v. 混合；交往 n. (Mingle)人名；(加纳、英)明格尔
technology	n. 技术；工艺；术语
insipid	adj. 清淡的；无趣的
palette	n. 调色板；颜料
seditious	adj. 煽动性的；扰乱治安的；参与煽动的
hypnotic	adj. 催眠的，催眠术的；易于催眠的 n. 安眠药；催眠状态的人
temper	n. 脾气；（钢等）回火；性情；倾向 v. 使回火；锻炼；调和；使缓和
versatile	adj. 多才多艺的；通用的，万能的；多面手的
pontiff	n. 主教，教皇；罗马教宗
instigate	v. 唆使；煽动；教唆；怂恿
eclectic	adj. 折衷的；选择的；折衷学派的 n. 折衷派的人；折衷主义者
underscore	v. 强调；划线于…下 n. 底线，[计] 下划线
enmity	n. 敌意；憎恨
pristine	adj. 原始的，古时的；纯朴的
trait	n. 特性，特点；品质；少许
salamander	n. 火蜥蜴；蝾螈目动物；耐火的人；烤箱
herbaceous	adj. 草本的；绿色的；叶状的
reiterate	v. 重申；反复地做
deplete	v. 耗尽，用尽；使衰竭，使空虚
stature	n. 身高，身材；（精神、道德等的）高度
abbreviate	v. 缩写，使省略；使简短
glance	n. 一瞥；一滑；闪光 v. 扫视，匆匆一看；反光；瞥闪，瞥见
expulsion	n. 驱逐；开除
loophole	n. 漏洞；枪眼；换气孔；射弹孔
understate	v. 少说，少报；保守地说；有意轻描淡写
remonstrate	v. 责备，告诫；抗议；表示异议
discrepant	adj. 有差异的；相差的；矛盾的
endure	v. 忍耐；容忍
hostility	n. 敌意；战争行动
amply	adv. 充足地；广大地 n. (Amply)人名；(俄)安普利
euphonious	adj. 悦耳的
levy	n. 征收；征兵，征税 v. 征收（税等）；征集（兵等）
fluctuation	n. 起伏，波动
precarious	adj. 危险的；不确定的
superstitious	adj. 迷信的；由迷信引起的
acrid	adj. 辛辣的；苦的；刻薄的
alteration	n. 修改，改变；变更
ado	n. 忙乱，纷扰，麻烦
catastrophic	adj. 灾难的；悲惨的；灾难性的，毁灭性的
ethics	n. 伦理学；伦理观；道德标准
theory	n. 理论；原理；学说；推测
insight	n. 洞察力；洞悉
dome	n. 圆屋顶 vi. 成圆顶状 vt. 加圆屋顶于…上
add	v. 加；增加；加起来；做加法 n. 加法，加法运算
gibe	v. 嘲笑；愚弄 n. 嘲讽话
microscope	n. 显微镜
isochronous	adj. [物] 等时的；等步的
interchangeable	adj. 可互换的；可交换的；可交替的
butane	n. [有化] 丁烷
nausea	n. 恶心，晕船；极端的憎恶
ample	adj. 丰富的；足够的；宽敞的 n. (Ample)人名；(西)安普尔
semblance	n. 外貌；假装；类似
radiate	v. 辐射；传播；流露；发射；广播 adj. 辐射状的，有射线的
frustrate	v. 挫败；阻挠；使感到灰心 adj. 挫败的；无益的
celebrate	v. 庆祝；举行；赞美；祝贺；宣告
statute	n. [法] 法规；法令；条例
transcribe	v. 转录；抄写
effectual	adj. 奏效的；会应验的；有法律效力的
deft	adj. 灵巧的；机敏的；敏捷熟练的
potent	adj. 有效的；强有力的，有权势的；有说服力的
buffoonery	n. 滑稽；打诨
resource	n. 资源，财力；办法；智谋
destructive	adj. 破坏的；毁灭性的；有害的，消极的
yip	n. 叫喊声 v. 犬吠；尖叫
circumspect	adj. 细心的，周到的；慎重的
insulate	v. 隔离，使孤立；使绝缘，使隔热
salvageable	adj. 可抢救的；可打捞的；可挽回的；能利用的
congenital	adj. 先天的，天生的；天赋的
nimble	adj. 敏捷的；聪明的；敏感的
painstaking	adj. 艰苦的；勤勉的；小心的 n. 辛苦；勤勉
intonation	n. 声调，语调；语音的抑扬
monition	n. 忠告；法庭传票；宗教法庭的诫谕
place	n. 地方；住所；座位 v. 放置；任命；寄予
castigate	v. 严惩；苛评；矫正；修订
composed	adj. 镇静的；沉着的 v. 组成；作曲（compose的过去分词）；著作
jocund	adj. 快活的；高兴的
untimely	adj. 不合时宜的；过早的 adv. 不合时宜地；过早地
respite	n. 缓解；暂缓；暂时的休息；缓期执行 v. 使缓解；使暂缓；使延期；缓期执行
tantalize	v. 逗弄；使干着急
homeostasis	n. [生理] 体内平衡；[自] 内稳态
acquaint	v. 使熟悉；使认识
tortuous	adj. 扭曲的，弯曲的；啰嗦的
hadron	n. [高能] 强子（参与强相互作用的基本粒子）
bristle	n. 猪鬃；刚毛 v. 发怒；竖起
abhorrent	adj. 可恶的；厌恶的；格格不入的
appease	v. 使平息；使满足；使和缓；对…让步
digression	n. 离题；脱轨
indulgent	adj. 放纵的；宽容的；任性的
ownership	n. 所有权；物主身份
descendent	adj. 派生的；降落的；世袭的 n. 后裔；派生物
disparage	v. 蔑视；毁谤
minuscule	n. 小写字；草写小字 adj. 极小的；用草写小字写的
fallible	adj. 易犯错误的；不可靠的
hypercritical	adj. 吹毛求疵的，苛评的
zealous	adj. 热心的，热情的，积极的 n. (Zealous)人名；(英)泽勒斯
prescription	n. 药方；指示；惯例 adj. 凭处方方可购买的
apprehensible	adj. 可理解的，可了解的
irritate	v. 刺激，使兴奋；激怒
havoc	n. 大破坏；浩劫；蹂躏 vt. 严重破坏 vi. 损毁
centipede	n. [无脊椎][中医] 蜈蚣
percipient	adj. 目光敏锐的；有洞察力的 n. 有感知力的人
shrivel	v. 枯萎；皱缩
consummate	adj. 至上的；完美的；圆满的 v. 完成；作成；使达到极点
transgression	n. [地质] 海侵；犯罪；违反；逸出
descry	v. 看见；发现；察看
demagoguery	n. 散布谣言；煽动行为；群众煽动
irrevocable	adj. 不可改变的；不能取消的；不能挽回的
noxious	adj. 有害的；有毒的；败坏道德的；讨厌的
denote	v. 表示，指示
induct	v. 引导；感应；使…就职；征召入伍
discourse	n. 论述；谈话；演讲 v. 演说；谈论；讲述
bipartisan	adj. 两党连立的；代表两党的
procrastinate	v. 耽搁，延迟
facilitate	v. 促进；帮助；使容易
transcend	v. 胜过，超越
vocal	adj. 歌唱的；声音的，有声的 n. 声乐作品；元音
epidermis	n. 上皮，表皮
induce	v. 诱导；引起；引诱；感应
pare	v. 消减；削皮；剪；修掉（边等） n. (Pare)人名；(英)佩尔；(法)帕尔
deleterious	adj. 有毒的，有害的
ambiguous	adj. 模糊不清的；引起歧义的
reasonable	adj. 合理的，公道的；通情达理的
field	n. 领域；牧场；旷野；战场；运动场 v. 担任场外队员 adj. 扫描场；田赛的；野生的
concoct	v. 捏造；混合而制；调合；图谋
slick	adj. 光滑的；华而不实的；聪明的；熟练的；老套的 n. [机] 平滑器；[机] 修光工具；通俗杂志 adv. 灵活地；聪明地 v. 使光滑；使漂亮
sensibility	n. 情感；敏感性；感觉；识别力
despicable	adj. 卑劣的；可鄙的
braggadocio	n. 自夸，吹牛；吹牛大王
string	n. 线，弦，细绳；一串，一行
plumb	v. 使垂直；探测，探索 n. 垂直；铅锤 adv. 恰恰，正；垂直地 adj. 垂直的
moribund	adj. 垂死的；停滞不前的 n. 垂死的人
incumbent	adj. 现任的；依靠的；负有职责的 n. 在职者；现任者；领圣俸者
cancer	n. 癌症；恶性肿瘤
lewd	adj. 淫荡的；猥亵的；下流的
ogle	v. 向…抛媚眼；注视 n. 眉目传情；媚眼
aye	n. 赞成票；投赞成票者 adv. 赞成
octagon	n. 八边形，八角形
round	n. 圆；循环；一回合；圆形物 adj. 圆的；完全的；大概的；肥胖的 adv. 在周围；迂回地；朝反方向；挨个 v. 完成；围捕；绕行；弄圆 prep. 附近；绕过；大约；在…周围
askance	adv. 怀疑地；斜视地
outright	adv. 全部地；立刻地；率直地；一直向前；痛快地 adj. 完全的，彻底的；直率的；总共的
dissonant	adj. 刺耳的；不谐和的；不调和的
inspection	n. 视察，检查
eligible	adj. 合格的，合适的；符合条件的；有资格当选的 n. 合格者；适任者；有资格者
finite	adj. 有限的；限定的 n. 有限之物
amount	v. 总计，合计；相当于；共计；产生…结果 n. 数量；总额，总数
urchin	n. 顽童，淘气鬼；海胆；刺猬
conservative	adj. 保守的 n. 保守派，守旧者
exasperate	v. 恶化；使恼怒；激怒
spasmodic	adj. 痉挛的，痉挛性的；间歇性的
antecedent	n. 前情；先行词；祖先 adj. 先行的；前驱的；先前的
submit	v. 使服从；主张；呈递
cajolery	n. 甜言蜜语；诱骗；谄媚
villainous	adj. 罪恶的；恶棍的；恶毒的；坏透的
impression	n. 印象；效果，影响；压痕，印记；感想；曝光（衡量广告被显示的次数。打开一个带有该广告的网页，则该广告的impression 次数增加一次）
fatuous	adj. 愚笨的；昏庸的；发呆的；自满的
putrid	adj. 腐败的；腐烂的；令人厌恶的
overt	adj. 明显的；公然的；蓄意的
input	n. 投入；输入电路 v. [自][电子] 输入；将…输入电脑
noisome	adj. 恶臭的；有害的
choral	adj. 合唱的；合唱队的 n. 赞美诗；唱诗班
dispensation	n. 分配；免除；豁免；天命
vindictive	adj. 怀恨的；有报仇心的；惩罚的
extricate	v. 使解脱；解救；使游离
adept	adj. 熟练的；擅长…的 n. 内行；能手
acknowledge	v. 承认；答谢；报偿；告知已收到
gamble	v. 赌博；孤注一掷；投机；打赌 n. 赌博；冒险；打赌
archaic	adj. 古代的；陈旧的；古体的；古色古香的
repeal	v. 废除；撤销；废止；放弃；否定 n. 废除；撤销
deprecate	v. 反对；抨击；轻视；声明不赞成
accost	v. 勾引；引诱；对…说话；搭讪
cantankerous	adj. 脾气坏的；爱吵架的；难相处的
expend	v. 花费；消耗；用光；耗尽
reprobate	v. 非难；拒绝；斥责 adj. 邪恶的；堕落的 n. 恶棍，无赖
didactic	adj. 说教的；教诲的
aversion	n. 厌恶；讨厌的人
shun	v. 避开，避免；回避 n. (Shun)人名；(日)春(姓)
melee	n. 混战，格斗；互殴
liberty	n. 自由；许可；冒失
multiform	adj. 多样的；多种形式的
sycophant	n. 谄媚者；奉承者 adj. 奉承的；拍马的
inadvertent	adj. 疏忽的；不注意的（副词inadvertently）；无意中做的
extravagance	n. 奢侈，浪费；过度；放肆的言行
atheism	n. 不信神，无神论
iridescent	adj. 彩虹色的；闪光的
apathetic	adj. 冷漠的；无动于衷的，缺乏兴趣的
diaphanous	adj. 透明的；精致的；模糊的
implement	v. 实施，执行；实现，使生效 n. 工具，器具；手段
muddle	v. 混合；使咬字不清晰；使微醉 n. 糊涂；困惑；混浊状态
confession	n. 忏悔，告解；供认；表白
icon	n. 图标；偶像；肖像，画像；圣像
mitigate	v. 使缓和，使减轻
separate	v. 使分离；使分开；使分居 adj. 单独的；分开的；不同的；各自的； n. 分开；抽印本
cerebral	adj. 大脑的，脑的
tepid	adj. 微温的，温热的；不太热烈的；不热情的
pathos	n. 悲怅；痛苦；同情；哀婉动人的词句
heartrending	adj. 悲惨的；令人心碎的
forceps	n. [医] 钳子；医用镊子
analogy	n. 类比；类推；类似
plenitude	n. 充分；丰富；大量
foggy	adj. 有雾的；模糊的，朦胧的
dilemma	n. 困境；进退两难；两刀论法
conservationist	n. 自然资源保护论者
burgher	n. 市民（现主要指某些欧洲国家中产阶级的市民或镇民）；公民
momentary	adj. 瞬间的；短暂的；随时会发生的
sully	v. 玷污；使丢脸 n. 污点，损伤
subterranean	adj. 地下的；秘密的；隐蔽的 n. 地下工作者
generalize	v. 概括；推广；使一般化
hiatus	n. 裂缝，空隙；脱漏部分
artful	adj. 巧妙的；狡猾的；有技巧的；欺诈的
slovenly	adj. 懒散的；不整洁的；马虎的 adv. 邋遢地；马虎地；不整洁地
expanse	n. 宽阔；广阔的区域；苍天；膨胀扩张
acquaintance	n. 熟人；相识；了解；知道
forte	n. 长处；特长 adj. 强音的；响的 adv. 响亮地
oscillate	v. 使振荡；使振动；使动摇
apostasy	n. 变节；脱党；背教
diagnosis	n. 诊断
energetic	adj. 精力充沛的；积极的；有力的
ponderous	adj. 笨重的；沉闷的；呆板的
bibliography	n. 参考书目；文献目录
expect	v. 期望；指望；认为；预料
circular	adj. 循环的；圆形的；间接的 n. 通知，传单
arc	n. 弧（度）；弧光（全称electric arc）；弧形物；天穹 adj. 圆弧的；反三角函数的 v. 形成电弧；走弧线
aggravation	n. 加剧；激怒；更恶化
cauterize	v. 烧灼；腐蚀；使麻木（等于cauterise）
clarify	v. 澄清；阐明
retard	v. 延迟；阻止；妨碍；使减速 n. 延迟；阻止
readjust	v. 再调整；重新适应
archipelago	n. 群岛，列岛；多岛的海区
periodical	adj. [数] 周期的；定期的 n. 期刊；杂志
culpable	adj. 有罪的；该责备的；不周到的；应受处罚的
circuitous	adj. 迂曲的；绕行的；迂回线路的
apostate	adj. 变节的；脱党的；背教的 n. 脱党者；变节者；叛教者
projector	n. [仪] 投影仪；放映机；探照灯；设计者
plus	n. 正号，加号；好处；附加额 adj. 正的；附加的 prep. 加，加上
polymer	n. [高分子] 聚合物
phonic	adj. 有声的，浊音的；声音的，语音的；声学的
sturdy	adj. 坚定的；强健的；健全的 n. 羊晕倒病
plagiarism	n. 剽窃；剽窃物
monotone	n. 单调；单音调 adj. 单调的 vt. 单调地读
cite	v. 引用；传讯；想起；表彰
assessor	n. 评审员；确定税款的人；顾问
skirmish	n. 小冲突，小规模战斗；小争论 v. 进行小规模战斗；发生小争论
extinguish	v. 熄灭；压制；偿清
decry	v. 责难，谴责；诽谤
riddance	n. 摆脱；驱逐；解除
aerostat	n. 航空器；高空气球
humdrum	adj. 单调的；无聊的 n. 单调；乏味 vi. 单调乏味地进行
alveolar	adj. 肺泡的；齿槽的 n. 齿槽音
occlude	v. 使闭塞；封闭；挡住
squander	v. 浪费 n. 浪费
contact	n. 接触，联系 v. 使接触，联系
mode	n. 模式；方式；风格；时尚
qualitative	adj. 定性的；质的，性质上的
equipoise	n. 平衡；均势
typical	adj. 典型的；特有的；象征性的
evaporate	v. 使……蒸发；使……脱水；使……消失
outrage	n. 愤怒，愤慨；暴行；侮辱 v. 凌辱，强奸；对…施暴行；激起愤怒
acquire	v. 获得；取得；学到；捕获
carouse	v. 畅饮；欢宴 n. 喧闹的酒会或宴会；一饮而尽
sequester	v. 使隔绝；使隐退；没收，扣押
mock	n. 英国模拟考试（mocks） v. 愚弄，嘲弄 adj. 仿制的，模拟的，虚假的，不诚实的
apiece	adv. 每人；每个；各自地
hut	n. 小屋；临时营房 vt. 使住在小屋中；驻扎 vi. 住在小屋中；驻扎
chastise	v. 惩罚；严惩；责骂
profound	adj. 深厚的；意义深远的；渊博的
insurgent	adj. 叛乱的；起义的 n. 叛乱者；起义者
admissible	adj. 可容许的；可采纳的；可接受的
belligerent	adj. 交战的；好战的；交战国的 n. 交战国；参加斗殴的人或集团
ostentatious	adj. 招摇的；卖弄的；夸耀的；铺张的；惹人注目的
ulterior	adj. 将来的，较远的；在那边的；隐秘不明的
point	n. 要点；得分；标点；[机] 尖端 v. 指向；弄尖；加标点于
scatter	v. 分散，散开；散射 n. 分散；散播，撒播
outbreak	n. （战争的）爆发；（疾病的）发作 vi. 爆发
deceitful	adj. 欺骗的；欺诈的；谎言的；虚伪的
precipitation	n. [化学] 沉淀，[化学] 沉淀物；降水；冰雹；坠落；鲁莽
bacteria	n. [微] 细菌
ebullience	n. 奔放；兴高采烈；沸腾；冒泡
protagonist	n. 主角，主演；主要人物，领导者
cogent	adj. 强有力的；使人信服的
propel	v. 推进；驱使；激励；驱策
transcript	n. 成绩单；抄本，副本；文字记录
persevere	v. 坚持；不屈不挠；固执己见（在辩论中）
vegetal	adj. 植物的，植物性的；生长的 n. 植物；蔬菜
bosom	n. 胸；胸怀；中间；胸襟；内心；乳房；内部 v. 怀抱；把…藏在心中 adj. 知心的；亲密的
determination	n. 决心；果断；测定
farcical	adj. 滑稽的；闹剧的；引人发笑的
indiscernible	adj. 难识别的；看不见的
omnivorous	adj. 杂食的；什么都读的；无所不吃的
divisible	adj. 可分的；可分割的
destitution	n. 穷困；缺乏
supposition	n. 假定；推测；想像；见解
armory	n. [军] 军械库；[军] 兵工厂（等于armoury）
garnish	v. 装饰 n. 为增加色香味而添加的配菜；装饰品
decoy	n. 诱饵；诱骗 v. 诱骗
refusal	n. 拒绝；优先取舍权；推却；取舍权
heterodox	adj. 异端的；非正统的
hydraulic	adj. 液压的；水力的；水力学的
autobiography	n. 自传；自传文学
postdate	v. 填迟……的日期；把……的日期填迟；继……之后 n. 事后日期；推迟日期
fugue	n. 赋格曲；神游症 vi. 作赋格曲 vt. 把…编成赋格曲
chastity	n. 贞洁；纯洁；简洁
perpetuate	v. 使不朽；保持 adj. 长存的
garrulous	adj. 唠叨的；喋喋不休的；多嘴的
bellicose	adj. 好战的；好斗的
immoderate	adj. 无节制的，过度的；不适中的
outstrip	v. 超过；胜过；比…跑得快
identical	adj. 同一的；完全相同的 n. 完全相同的事物
somber	adj. 忧郁的；昏暗的；严峻的；阴天的
tyranny	n. 暴政；专横；严酷；残暴的行为（需用复数）
athwart	adv. 横跨着；相反 prep. 横跨；与相反
specific	adj. 特殊的，特定的；明确的；详细的；[药] 具有特效的 n. 特性；细节；特效药
absolution	n. 赦免；免罪
testimony	n. [法] 证词，证言；证据
excess	n. 超过，超额；过度，过量；无节制 adj. 额外的，过量的；附加的
object	n. 目标；物体；客体；宾语 v. 提出…作为反对的理由
trite	adj. 陈腐的；平庸的；老一套的
epicure	n. 老饕；美食家；享乐主义者
impoverish	v. 使贫穷；使枯竭
emollient	n. [药] 润肤剂；软化剂 adj. 使柔软的
intuition	n. 直觉；直觉力；直觉的知识
permeable	adj. 能透过的；有渗透性的
reliant	adj. 依赖的；可靠的；信赖的
osmosis	n. [物] 渗透；[物] 渗透性；渗透作用
error	n. 误差；错误；过失
salutatory	adj. 致敬意的；表示欢迎的 n. 祝词；开幕词
pertinacious	adj. 顽固的；执拗的
urgent	adj. 紧急的；急迫的
electromagnet	n. 电磁体，[电] 电磁铁；电磁石
denounce	v. 谴责；告发；公然抨击；通告废除
fold	v. 折叠；合拢；抱住；笼罩 n. 折痕；信徒；羊栏
puerile	adj. 幼稚的；孩子气的；未成熟的；天真的
superficial	adj. 表面的；肤浅的 ；表面文章的；外表的；（人）浅薄的
term	n. 术语；学期；期限；条款；(代数式等的)项 v. 把…叫做
betide	v. 预示；降临于，发生于
menace	n. 威胁；恐吓 v. 恐吓；进行威胁
guarantee	n. 保证；担保；保证人；保证书；抵押品 v. 保证；担保
nihilism	n. 虚无主义；无政府主义；恐怖行为
incentive	n. 动机；刺激 adj. 激励的；刺激的
despondent	adj. 沮丧的；失望的
shatter	v. 粉碎；打碎；破坏；破掉；使散开 n. 碎片；乱七八糟的状态
morass	n. 沼泽；困境；乱糟糟的一堆
linchpin	n. 关键（等于lynchpin）；制轮楔；轮辖
apprehensive	adj. 忧虑的；不安的；敏悟的；知晓的
attraction	n. 吸引，吸引力；引力；吸引人的事物
enzyme	n. [生化] 酶
detrimental	adj. 不利的；有害的 n. 有害的人（或物）；不受欢迎的求婚者
autonomy	n. 自治，自治权
nonchalant	adj. 冷淡的，漠不关心的
exacting	adj. 严格的；苛求的；吃力的 v. 逼取；急需（exact的ing形式）
thoroughbred	n. 受过严格训练的人；良种动物 adj. 良种的；受过严格训练的；优秀的
grimace	v. 扮鬼脸；作怪相；作苦相 n. 鬼脸；怪相；痛苦的表情
trick	n. 诡计；恶作剧；窍门；花招；骗局；欺诈 v. 欺骗；哄骗；装饰；打扮 adj. 特技的；欺诈的；有决窍的
right	adj. 正确的；直接的；右方的 v. 复正；恢复平稳 n. 正确；右边；正义 adv. 正确地；恰当地；彻底地
prate	v. 瞎扯 n. 唠叨；空谈；瞎扯
distinction	n. 区别；差别；特性；荣誉、勋章
nexus	n. 关系；连结，连系
actuary	n. [保险] 保险计算员；保险精算师
forerun	vt. 预示；预告；走在…之前
differentiate	v. 区分，区别
amputate	v. 截肢；切断；删除
perspicuity	n. （语言、文章、表达等的）明晰；简明
inert	adj. [化学] 惰性的；呆滞的；迟缓的；无效的
alacrity	n. 敏捷；轻快；乐意
junction	n. 连接，接合；交叉点；接合点
paradox	n. 悖论，反论；似非而是的论点；自相矛盾的人或事
incinerate	v. 把……烧成灰；烧弃
native	adj. 本国的；土著的；天然的；与生俱来的；天赋的 n. 本地人；土产；当地居民
repertory	n. 储备；仓库；全部剧目
exacerbate	v. 使加剧；使恶化；激怒
caprice	n. 任性，反复无常；随想曲，怪想
insignificant	adj. 无关紧要的
enthrone	v. 使登基；立…为王；任为主教；崇拜
domineer	v. 跋扈；作威作福
justify	v. 证明合法；整理版面
vivid	adj. 生动的；鲜明的；鲜艳的
secondary	adj. 第二的；中等的；次要的；中级的 n. 副手；代理人
fraudulent	adj. 欺骗性的；不正的
token	n. 表征；代币；记号 adj. 象征的；表意的；作为对某事的保证的 vt. 象征；代表
scintillate	v. 发出火花；闪烁
trial	n. 试验；审讯；努力；磨炼 adj. 试验的；审讯的
sophisticated	adj. 复杂的；精致的；久经世故的；富有经验的 v. 使变得世故；使迷惑；篡改（sophisticate的过去分词形式）
ridiculous	adj. 可笑的；荒谬的
aggress	v. 攻击；侵略
illegible	adj. 难辨认的；字迹模糊的
drainage	n. 排水；排水系统；污水；排水面积
bountiful	adj. 丰富的；慷慨的；宽大的
hazard	v. 赌运气；冒…的危险，使遭受危险 n. 危险，冒险；冒险的事
solar	adj. 太阳的；日光的；利用太阳光的；与太阳相关的 n. 日光浴室
distill	v. 提取；蒸馏；使滴下
ciliate	n. 纤毛虫 adj. 有纤毛的
senile	adj. 高龄的；老衰的；高龄所致的
ornamental	adj. 装饰的，装饰性的 n. 观赏植物；装饰品
expiate	v. 赎罪；补偿
aquatic	adj. 水生的；水栖的；在水中或水面进行的 n. 水上运动；水生植物或动物
feign	v. 假装；装作；捏造；想象
predict	v. 预报，预言；预知
irrational	adj. 不合理的；无理性的；荒谬的 n. [数] 无理数
cipher	n. 密码；暗号；零 v. 使用密码；计算；做算术
succinct	adj. 简洁的；简明的；紧身的
abstain	v. 自制；放弃；避免
garner	v. 获得；储存；把…储入谷仓 n. 谷仓
inalienable	adj. 不可分割的；不可剥夺的；不能让与的
appalling	adj. 可怕的；令人震惊的 v. 使惊愕；惊吓（appal的ing形式）
perspicacious	adj. 有洞察力的；聪颖的；敏锐的
reluctant	adj. 不情愿的；勉强的；顽抗的
root	n. 根；根源；词根；祖先 v. 生根；根除
resistant	adj. 抵抗的，反抗的；顽固的 n. 抵抗者
incognito	adj. 改名的；微行的；隐姓埋名的 adv. 隐姓埋名地 n. 匿名者；微行者
lead	n. 领导；铅；导线；榜样 v. 领导；致使；引导；指挥 adj. 带头的；最重要的
comestible	n. 食物 adj. 可吃的，可食的
precedent	n. 先例；前例 adj. 在前的；在先的
chicanery	n. 狡辩；欺骗；强词夺理
ambidextrous	adj. 双手灵巧的；怀有二心的
superfluous	adj. 多余的；不必要的；奢侈的
malevolent	adj. 恶毒的；有恶意的；坏心肠的
height	n. 高地；高度；身高；顶点
personnel	n. 人事部门；全体人员 adj. 人员的；有关人事的
inundate	v. 淹没；泛滥；浸水；（洪水般的）扑来
burnish	v. 擦亮；使…光亮；将…打磨光亮 n. 光泽；抛光；闪闪发光
condescending	adj. 表现出优越感的；居高临下的 v. 屈尊（condescend的ing形式）
fumigate	v. 熏制；香薰；用烟熏消毒
heretical	adj. 异端的；异教的
cataclysm	n. 灾难；大洪水，地震；（社会政治的）大变动
aggravate	v. 加重；使恶化；激怒
execute	v. 实行；执行；处死
guileless	adj. 诚实的
fat	adj. 肥的，胖的；油腻的；丰满的 n. 脂肪，肥肉 v. 养肥；在…中加入脂肪
notable	adj. 值得注意的，显著的；著名的 n. 名人，显要人物
hemolysis	n. [生理][免疫] 溶血（现象）；血细胞溶解
regiment	v. 把…编成团；严格地管制 n. 团；大量
fanfare	n. 吹牛，炫耀；喇叭或号角嘹亮的吹奏声 vt. 热热闹闹地宣布
sluggish	adj. 萧条的；迟钝的；行动迟缓的；懒惰的 n. 市况呆滞；市势疲弱
inequity	n. 不公平，不公正
rural	adj. 农村的，乡下的；田园的，有乡村风味的
fascinate	v. 使着迷，使神魂颠倒
confrontation	n. 对抗；面对；对质
proximity	n. 接近，[数]邻近；接近；接近度，距离；亲近
flagella	n. 鞭毛；鞭节（flagellum的复数）
complacence	n. 满足，自满；沾沾自喜
agrarian	adj. 土地的；耕地的；有关土地的
raze	v. 夷为平地；破坏；消除；拆毁 n. (Raze)人名；(法)拉兹
sordid	adj. 肮脏的；卑鄙的；利欲熏心的；色彩暗淡的
heterogeneous	adj. [化学] 多相的；异种的；[化学] 不均匀的；由不同成分形成的
actuate	v. 开动（机器等）；促使，驱使；激励（人等）
cumulative	adj. 累积的
tutelage	n. 监护；指导
breech	n. 臀部；后膛 vt. 给…穿上裤子；给…装上炮尾
hallowed	adj. 神圣的，神圣化的
therapeutic	adj. 治疗的；治疗学的；有益于健康的 n. 治疗剂；治疗学家
occasion	n. 时机，机会；场合；理由 v. 引起，惹起
abidance	n. 持续；遵守；居住
hydrocarbon	n. [有化] 碳氢化合物
lavish	adj. 浪费的；丰富的；大方的 v. 浪费；慷慨给予；滥用
effete	adj. 衰老的；疲惫的；（土地）贫瘠的；（动植物）不育的
pathogen	n. 病原体；病菌
voluminous	adj. 大量的；多卷的，长篇的；著书多的
gradual	adj. 逐渐的；平缓的 n. 弥撒升阶圣歌集
truism	n. 自明之理；老生常谈；老套；众所周知；真实性
rational	adj. 合理的；理性的 n. 有理数
locus	n. [数] 轨迹；地点，所在地
population	n. 人口；[生物] 种群，[生物] 群体；全体居民
circulate	v. 传播，流传；循环；流通
noticeable	adj. 显而易见的，显著的；值得注意的
obsolete	adj. 废弃的；老式的 n. 废词；陈腐的人 vt. 淘汰；废弃
malaise	n. 不舒服；心神不安
factorable	adj. 可分解因子的
sensual	adj. 感觉的；肉欲的；世俗的；感觉论的
syllable	n. 音节 vt. 划分音节 vi. 按音节发音；讲话
tremendous	adj. 极大的，巨大的；惊人的；极好的
sprightly	adj. 活泼的；愉快的 adv. 活泼地
obnoxious	adj. 讨厌的；可憎的；不愉快的
relinquish	v. 放弃；放手；让渡
adroit	adj. 敏捷的，灵巧的；熟练的
ballad	n. 歌谣，民谣；叙事歌谣；流行抒情歌曲
reimburse	v. 偿还；赔偿
prominent	adj. 突出的，显著的；杰出的；卓越的
albeit	conj. 虽然；即使
barbarian	adj. 野蛮的；未开化的 n. 野蛮人
rigor	n. 严厉；精确；苛刻；僵硬
inure	v. 使…习惯；使…适应
elated	adj. 兴高采烈的；得意洋洋的 v. 使兴奋（elate的过去式和过去分词）
prickle	n. 刺；刺痛；植物的皮刺；针刺般的感觉 v. 针一般地刺；戳；使感到刺痛
libel	n. 诽谤罪；诋毁；毁坏名誉的东西；控诉书 v. 中伤；控告；对…进行诽谤
diverse	adj. 不同的；多种多样的；变化多的
onrush	n. 猛冲；突进；袭击；急流
rant	v. 咆哮；痛骂；大声责骂 n. 咆哮；激昂的演说
amphibious	adj. [生物] 两栖的，水陆两用的；具有双重性的
requital	n. 报答；偿还；报仇
feral	adj. 野生的；凶猛的；阴郁的
miserly	adj. 吝啬的；贪婪的
absorption	n. 吸收；全神贯注，专心致志
slogan	n. 标语；呐喊声
frivolity	n. 轻浮；轻薄；轻率
mechanical	adj. 机械的；力学的；呆板的；无意识的；手工操作的
meteorology	n. 气象状态，气象学
accelerate	v. 使……加快；使……增速
suspense	n. 悬念；悬疑；焦虑；悬而不决
underexposure	n. [摄] 曝光不足
pervious	adj. 能被通过的；能接受的；可渗透的
epidemic	adj. 流行的；传染性的 n. 传染病；流行病；风尚等的流行
heretofore	adv. 直到此时，迄今为止；在这以前
nestle	v. 舒适地坐定；偎依；半隐半现地处于
pedant	n. 学究；书呆子；卖弄学问的人；空谈家
hoarse	adj. 嘶哑的
tenacity	n. 韧性；固执；不屈不挠；黏性
bonanza	n. 富矿带；带来好运之事；幸运
inconvenient	adj. 不便的；打扰的
catalyst	n. [物化] 催化剂；刺激因素
invigorate	v. 鼓舞；使精力充沛
antique	adj. 古老的，年代久远的；过时的，古董的；古风的，古式的 n. 古董，古玩；古风，古希腊和古罗马艺术风格 v. 觅购古玩
persecution	n. 迫害；烦扰
perpendicular	adj. 垂直的，正交的；直立的；陡峭的 n. 垂线；垂直的位置
arbor	n. [植] 乔木；凉亭；藤架
rapt	adj. 全神贯注的；入迷的
faction	n. 派别；内讧；小集团；纪实小说
vacuity	n. 空虚；空白；思想贫乏；无聊之事
anonymous	adj. 匿名的，无名的；无个性特征的
autocracy	n. 独裁政治；专制政治；独裁政府；独裁统治的国家
acquisition	n. 获得物，获得；收购
reservoir	n. 水库；蓄水池
distance	n. 距离；远方；疏远；间隔 v. 疏远；把…远远甩在后面
benign	adj. 良性的；和蔼的，亲切的；吉利的 n. (Benign)人名；(俄)贝尼根
magnetism	n. 磁性，磁力；磁学；吸引力
analogous	adj. 类似的；[昆] 同功的；可比拟的
ineffectual	adj. 无效的，不起作用的；徒劳无益的 n. 无用的人；无一技之长者
complaisant	adj. 彬彬有礼的；顺从的；殷勤的
flounder	v. 挣扎，折腾；错乱地做事或说话 n. 挣扎，辗转；比目鱼
concentration	n. 浓度；集中；浓缩；专心；集合
formidable	adj. 强大的；可怕的；令人敬畏的；艰难的
hackney	n. 乘用马；出租马车；出租汽车；操贱役的人 vt. 役使；出租 adj. 供出租的
motley	adj. 杂色的；混杂的；五颜六色的 n. 混杂；杂色衣服；小丑
ethical	adj. 伦理的；道德的；凭处方出售的 n. 处方药
unknown	adj. 未知的；陌生的，默默无闻的 n. 未知数；未知的事物，默默无闻的人
abhorrence	n. 痛恨，厌恶
tenet	n. 原则；信条；教义
supplementary	adj. 补充的；追加的 n. 补充者；增补物
prosperity	n. 繁荣，成功
rookie	n. 新手
squelch	v. 消除；镇压；压碎；使…咯吱咯吱的响 n. 噪声控制；嘎吱声；压倒对方的反驳；压碎的一堆
square	adj. 平方的；正方形的；直角的；正直的 v. 使成方形；与…一致 n. 平方；广场；正方形 adv. 成直角地
spindle	n. 轴；纺锤，锭子；细长的人或物 adj. 锭子的，锭子似的；细长的 vt. 装锭子于 vi. 长得细长，变细长
quotient	n. [数] 商；系数；份额
optics	n. [光] 光学
colossus	n. 巨像；巨人；巨大的东西
proverb	n. 谚语，格言；众所周知的人或事
synthetic	adj. 综合的；合成的，人造的 n. 合成物
multiplicity	n. 多样性；[物] 多重性
fable	n. 寓言；无稽之谈 vi. 编寓言；虚构 vt. 煞有介事地讲述；虚构
elucidate	v. 阐明；说明
penury	n. 贫困；贫穷
endanger	v. 危及；使遭到危险
pretext	n. 借口；托辞 vt. 以…为借口
afresh	adv. 重新；再度
reparable	adj. 可修缮的；可补偿的；可挽回的
experiment	v. 尝试；进行实验 n. 实验，试验；尝试
fictitious	adj. 虚构的；假想的；编造的；假装的
elocution	n. 朗诵法；演说法；雄辩术
proceed	v. 开始；继续进行；发生；行进 n. 收入，获利
infamous	adj. 声名狼藉的；无耻的；邪恶的；不名誉的
obscure	adj. 昏暗的，朦胧的；晦涩的，不清楚的；隐蔽的；不著名的，无名的 v. 使…模糊不清，掩盖；隐藏；使难理解 n. 某种模糊的或不清楚的东西
quiescent	adj. 静止的；不活动的；沉寂的
scanner	n. [计] 扫描仪；扫描器；光电子扫描装置
anthropoid	adj. 类人猿的；类人的；（猿等）似人类的 n. 类人猿
doleful	adj. 寂寞的；悲哀的；阴沉的；忧郁的
prudential	adj. 谨慎的；明辨的
imminent	adj. 即将来临的；迫近的
intellect	n. 智力，理解力；知识分子；思维逻辑领悟力；智力高的人
momentum	n. 势头；[物] 动量；动力；冲力
peripheral	adj. 外围的；次要的；（神经）末梢区域的 n. 外部设备
clarification	n. 澄清，说明；净化
vicarious	adj. 替代的；代理的；发同感的
languor	n. 疲倦；无精打采；柔情；呆滞 vi. 变得衰弱无力
countless	adj. 无数的；数不尽的
prodigal	adj. 挥霍的；十分慷慨的 n. 浪子；挥霍者
overshadow	v. 使失色；使阴暗；遮阴；夺去…的光彩
aspiration	n. 渴望；抱负；送气；吸气；吸引术
drastic	adj. 激烈的；猛烈的 n. 烈性泻药
skittish	adj. （人或动物）不安的，易受惊的；难驾驭的
scale	n. 规模；比例；鳞；刻度；天平；数值范围 v. 衡量；攀登；剥落；生水垢
infest	v. 骚扰；寄生于；大批出没；大批滋生
calculable	adj. 可计算的；能预测的；可靠的
monotonous	adj. 单调的，无抑扬顿挫的；无变化的
circle	n. 循环，周期；圆；圈子；圆形物 v. 盘旋，旋转；环行
attache	n. 专员，公使；使馆随员；大使馆专员
rate	n. 比率，率；速度；价格；等级 v. 认为；估价；责骂
celibacy	n. 独身
unwieldy	adj. 笨拙的；笨重的；不灵便的；难处理的
abrogate	v. 废除；取消
allotment	n. 分配；分配物；养家费；命运
syllabus	n. 教学大纲，摘要；课程表
relevant	adj. 相关的；切题的；中肯的；有重大关系的；有意义的，目的明确的
plasticity	n. 塑性，可塑性；适应性；柔软性
premature	adj. 早产的；不成熟的；比预期早的 n. 早产儿；过早发生的事物
lexicon	n. 词典，辞典
larceny	n. 盗窃；盗窃罪
incontrovertible	adj. 无可争议的；无疑的；明白的
perusal	n. 熟读；精读
temperance	n. 戒酒；节欲；（气候等的）温和 adj. 温暖的；有节制的
morale	n. 士气，斗志
cereal	n. 谷类，谷物；谷类食品；谷类植物 adj. 谷类的；谷类制成的
reconciliation	n. 和解；调和；和谐；甘愿
omen	n. 预兆；征兆 v. 预示；有…的前兆；预告
evade	v. 逃避；规避；逃脱
evaporation	n. 蒸发；消失
anxious	adj. 焦虑的；担忧的；渴望的；急切的
schedule	v. 安排，计划；编制目录；将……列入计划表 n. 时间表；计划表；一览表
prank	n. 恶作剧，开玩笑；戏谑 v. 装饰；打扮
perceptible	adj. 可察觉的；可感知的；看得见的
caricature	n. 漫画；讽刺画；漫画手法 v. 画成漫画讽刺
lithe	adj. 轻盈的（等于lithesome）；柔软的；易弯曲的
primer	n. 初级读本；识字课本；原始物
inequality	n. 不平等；不同；不平均
claimant	n. 原告；[贸易] 索赔人；提出要求者
oxidize	v. 使氧化；使生锈
technique	n. 技巧，技术；手法
reparation	n. 赔偿；修理；赔款
misunderstand	v. 误解；误会
effusion	n. 渗出；泻出；渗漏物
scar	v. 伤害；给留下伤痕 n. 创伤；伤痕
affront	v. 冒犯，有意冒犯；面对；公开侮辱 n. 轻蔑；公开侮辱
impulsive	adj. 冲动的；受感情驱使的；任性的
indisputable	adj. 明白的；无争论之余地的
blunt	adj. 钝的，不锋利的；生硬的；直率的 v. 使迟钝 n. (Blunt)人名；(英)布伦特
condescend	v. 屈尊；俯就；（对某人）表现出优越感
temperature	n. 温度；体温；气温；发烧
beatific	adj. 幸福的；祝福的；快乐的
mite	n. 极小量；小虫；小孩儿；微小的东西
topography	n. 地势；地形学；地志
liquidate	v. 清算；偿付；消除
veritable	adj. 真正的，名副其实的
hustle	v. 催促；猛推；强夺 n. 推；奔忙；拥挤喧嚷
pensive	adj. 沉思的，忧郁的；悲伤的，哀愁的
comprehensive	adj. 综合的；广泛的；有理解力的 n. 综合学校；专业综合测验
solder	v. 焊接 n. 焊料；接合物
renascent	adj. 新生的，复活的；复兴的
chaos	n. 混沌，混乱
hysterical	adj. 歇斯底里的；异常兴奋的
aperture	n. 孔，穴；（照相机，望远镜等的）光圈，孔径；缝隙
cyclical	adj. 周期的，循环的
austerity	n. 紧缩；朴素；苦行；严厉
peddle	v. 叫卖；兜售；散播 n. (Peddle)人名；(英)佩德尔
extant	adj. 现存的；显著的
sagacity	n. 睿智；聪敏；有远见
accompanist	n. 伴奏者；伴随者
befuddle	v. 使迷惑；使昏沉
resuscitate	v. 使复苏；使复兴
peccadillo	n. 轻罪；小过失；小瑕疵
ascribe	v. 归因于；归咎于
bureaucracy	n. 官僚主义；官僚机构；官僚政治
decrepit	adj. 衰老的；破旧的
nautical	adj. 航海的，海上的；船员的
arduous	adj. 努力的；费力的；险峻的
amicable	adj. 友好的；友善的
advert	v. 注意；谈到 n. 广告
capacitor	n. [电] 电容器
visualize	v. 形象，形象化；想像，设想
oration	n. 演说；致辞；叙述法
proponent	n. 支持者；建议者；提出认证遗嘱者
tipsy	adj. 喝醉的；歪曲的；不稳的
overpower	v. 压倒；克服；使无法忍受
antemeridian	adj. 上午的
suave	adj. 柔和的，温和的；文雅的，娴雅的
likelihood	n. 可能性，可能
luminescent	adj. 发冷光的，冷光的
placid	adj. 平静的；温和的；沉着的
inexcusable	adj. 不可原谅的；没法辩解的；不可宽恕的
chasm	n. 峡谷；裂口；分歧；深坑
abridge	v. 删节；缩短；节略
cringe	v. 畏缩；奉承；阿谀 n. 畏缩；奉承
mimic	v. 模仿，摹拟 n. 效颦者，模仿者；仿制品；小丑 adj. 模仿的，模拟的；假装的
dubious	adj. 可疑的；暧昧的；无把握的；半信半疑的
laudation	n. 赞美；颂词；称赞
procedure	n. 程序，手续；步骤
idolatry	n. 偶像崇拜；盲目崇拜；邪神崇拜
abdominal	adj. 腹部的；有腹鳍的
overlord	n. 霸王；大君主；最高统治者；封建领主
sentimental	adj. 伤感的；多愁善感的；感情用事的；寓有情感的
eyepiece	n. [光] 目镜，[光] 接目镜
species	n. [生物] 物种；种类 adj. 物种上的
purloin	v. 偷窃
cancellation	n. 取消；删除
liable	adj. 有责任的，有义务的；应受罚的；有…倾向的；易…的
repugnant	adj. 讨厌的；矛盾的；敌对的
bewilder	v. 使迷惑，使不知所措
visage	n. 面貌，容貌；外表
borough	n. 区；自治的市镇
sustenance	n. 食物；生计；支持
candor	n. 坦白；直率
oust	v. 驱逐；剥夺；取代
alter	v. 改变，更改 n. (Alter)人名；(英)奥尔特；(德、捷、葡、爱沙、立陶、拉脱、俄、西、罗、瑞典)阿尔特
muffle	v. 蒙住；裹住；抑制；发低沉的声音 n. 低沉的声音；消声器；包裹物（如头巾，围巾等）；唇鼻部
pancreas	n. [解剖] 胰腺
mount	v. 增加；爬上；使骑上马；安装，架置；镶嵌，嵌入；准备上演；成立（军队等） n. 山峰；底座；乘骑用马；攀，登；运载工具；底座
accession	n. 增加；就职；到达 v. 登记入册
chart	n. 图表；海图；图纸；排行榜 v. 绘制…的图表；在海图上标出；详细计划；记录；记述；跟踪（进展或发展
mate	n. 助手，大副；配偶；同事；配对物 v. 使配对；使一致；结伴
vertical	adj. 垂直的，直立的；[解剖] 头顶的，顶点的 n. 垂直线，垂直面
thrall	n. 奴隶；束缚 adj. 受奴役的 vt. 使成为奴隶
perform	v. 执行；完成；演奏
dumbfound	v. 使惊呆；使人惊愕失声
menacing	adj. 威胁的；险恶的 v. 威胁（menace的ing形式）；恐吓
egocentric	adj. [心理] 自我中心的；利己主义的 n. 利己主义者
voluble	adj. 健谈的；缠绕的；易旋转的
derivative	n. [化学] 衍生物，派生物；导数 adj. 派生的；引出的
odious	adj. 可憎的；讨厌的
nostalgia	n. 乡愁；怀旧之情；怀乡病
intercession	n. 调解；说情；仲裁
archetype	n. 原型
raconteur	n. 健谈者；善谈者；擅长讲故事的人
veto	n. 否决权 v. 否决；禁止
verifiable	adj. 可证实的；能作证的；可检验的
extraction	n. 取出；抽出；拔出；抽出物；出身
ensnare	v. 诱捕；诱入陷阱；进入罗网
oblique	adj. 斜的；不光明正大的 n. 倾斜物 vi. 倾斜
germane	adj. 有密切关系的；贴切的；恰当的 n. (Germane)人名；(英)杰曼
oxidizer	n. [助剂] 氧化剂
morbid	adj. 病态的；由病引起的；恐怖的；病变部位的
regulate	v. 调节，规定；控制；校准；有系统的管理
sinecure	n. 闲职；挂名职务
advent	n. 到来；出现；基督降临；基督降临节
valid	adj. 有效的；有根据的；合法的；正当的
opulent	adj. 丰富的；富裕的；大量的
shrinkage	n. 收缩；减低
supine	adj. 仰卧的；懒散的；掌心向上的；向后靠的
era	n. 时代；年代；纪元
hypotenuse	n. 直角三角形的斜边
bestride	v. 跨骑
revive	v. 复兴；复活；苏醒；恢复精神
overlook	v. 忽略；俯瞰；远眺；检查；高耸于…之上 n. 忽视；眺望
sociable	adj. 社交的；好交际的；友善的 n. 联谊会
synopsis	n. 概要，大纲
hectic	n. 脸红；患肺结核 adj. 兴奋的，狂热的；脸上发红；肺病的；忙碌的
compassionate	adj. 慈悲的；富于同情心的 v. 同情；怜悯
transparent	adj. 透明的；显然的；坦率的；易懂的
multiple	adj. 多重的；多样的；许多的 n. 倍数；[电] 并联
querulous	adj. 易怒的，暴躁的；爱发牢骚的，抱怨的；爱挑剔的
typify	v. 代表；作为…的典型；具有…的特点
protocol	n. 协议；草案；礼仪 vt. 拟定 vi. 拟定
plasma	n. [等离子] 等离子体；血浆；[矿物] 深绿玉髓
turpitude	n. 卑鄙；奸恶
lambaste	v. 痛打；严责；鞭打
forecast	v. 预报，预测；预示 n. 预测，预报；预想
infrared	n. 红外线 adj. 红外线的
cogitate	v. 仔细考虑；谋划
community	n. 社区；[生态] 群落；共同体；团体
delude	v. 欺骗；哄骗；诱惑；【罕用】迷惑；逃避；使失望
multiply	v. 乘；使增加；使繁殖；使相乘 adv. 多样地；复合地 adj. 多层的；多样的
starch	n. 淀粉；刻板，生硬 v. 给…上浆
aristocracy	n. 贵族；贵族统治；上层社会；贵族政治
myth	n. 神话；虚构的人，虚构的事
indelible	adj. 难忘的；擦不掉的
congruent	adj. 适合的，一致的；全等的；和谐的
refulgent	adj. 辉煌的；灿烂的
tempestuous	adj. 有暴风雨的；暴乱的；剧烈的
designate	v. 指定；指派；标出；把…定名为 adj. 指定的；选定的
misstate	v. 说错；作虚伪叙述，谎报
airy	adj. 空气的；通风的；幻想的；轻快的；空中的 n. (Airy)人名；(英)艾里
clarity	n. 清楚，明晰；透明
pretend	v. 假装，伪装，佯装 adj. 假装的
endocrine	n. 内分泌；激素；内分泌物 adj. 内分泌的；激素的
historical	adj. 历史的；史学的；基于史实的
magnet	n. 磁铁；[电磁] 磁体；磁石
lodge	n. 旅馆；门房；集会处；山林小屋 v. 提出；寄存；借住；嵌入
rectangular	adj. 矩形的；成直角的
imperceptive	adj. 无感觉的；缺乏感知力的
laxative	n. 泻药；[药] 缓泻药 adj. 通便的
insouciance	n. 无忧无虑；漫不经心；满不在乎
revolution	n. 革命；旋转；运行；循环
leaven	v. 使发酵；影响 n. 酵母；酵素；潜移默化的影响
jovial	adj. 天性快活的；主神朱庇特的
capacious	adj. 宽敞的；广阔的；容积大的
contingent	adj. 因情况而异的；不一定的；偶然发生的；可能的；依情况而定的；偶然的；[逻]有条件的 n. 分遣队；偶然事件；分得部分；代表团
anthology	n. （诗、文、曲、画等的）选集
avarice	n. 贪婪，贪财
pacify	v. 使平静；安慰；平定
obscurity	n. 朦胧；阴暗；晦涩；身份低微；不分明
sacrifice	n. 牺牲；祭品；供奉 v. 牺牲；献祭；亏本出售
benison	n. 祝福
alleviate	v. 减轻，缓和
homonym	n. 同音异义词；同形异义词；同形同音异义词；同名异物
exponent	n. [数] 指数；典型；说明者，说明物 adj. 说明的
cubic	adj. 立方体的，立方的 n. (Cubic)人名；(罗)库比克
whimsical	adj. 古怪的；异想天开的；反复无常的
stimulation	n. 刺激；激励，鼓舞
solid	adj. 固体的；可靠的；立体的；结实的；一致的 n. 固体；立方体
meticulous	adj. 一丝不苟的；小心翼翼的；拘泥小节的
covert	n. 隐藏处；树丛；蔽覆羽翮基部的羽毛 adj. 隐蔽的；隐密的；偷偷摸摸的；在丈夫保护下的
jungle	n. 丛林，密林；危险地带 adj. 丛林的；蛮荒的
vertex	n. 顶点；[昆] 头顶；[天] 天顶
embattle	vt. 布阵；列阵；整军备战；严阵以待
gravitation	n. 重力；万有引力；地心吸力
malinger	v. 装病以逃避职责
engross	v. 使全神贯注；用大字体书写；正式写成（决议等）；独占；吸引
shield	n. 盾；防护物；保护者 v. 遮蔽；包庇；避开；保卫
antidote	n. [药] 解毒剂；解药；矫正方法
knave	n. 无赖；流氓；（纸牌中的）杰克
propaganda	n. 宣传；传道总会
estrange	v. 使疏远；离间
range	n. 范围；幅度；排；山脉 v. （在内）变动；平行，列为一行；延伸；漫游；射程达到
physics	n. 物理学；物理现象
translation	n. 翻译；译文；转化；调任
bedeck	v. 装饰；修饰
emergent	adj. 紧急的；浮现的；意外的；自然发生的
quibble	n. 谬论；双关语；遁辞 v. 诡辩；挑剔；说模棱两可的话
vaporization	n. 蒸发；喷雾器；蒸馏器
delegate	v. 委派…为代表 n. 代表
commencement	n. 开始，发端；毕业典礼
tranquil	adj. 安静的，平静的；安宁的；稳定的
ramify	v. 分枝，分叉；成网状
fallacious	adj. 谬误的；骗人的；靠不住的；不合理的
casual	adj. 随便的；非正式的；临时的；偶然的 n. 便装；临时工人；待命士兵
aggressive	adj. 侵略性的；好斗的；有进取心的；有闯劲的
paraphrase	n. 释义；解释；意译 v. 释义
feint	n. 佯攻；伪装 v. 佯攻；假装 adj. 假的
readily	adv. 容易地；乐意地；无困难地
observation	n. 观察；监视；观察报告
assassinate	v. 暗杀；行刺
humorous	adj. 诙谐的，幽默的；滑稽的，可笑的
confidence	n. 信心；信任；秘密 adj. （美）诈骗的；骗得信任的
obfuscate	v. 使模糊；使迷乱；弄暗
uproot	v. 根除，连根拔起；迫使某人离开出生地或定居处
solidification	n. 凝固；团结；浓缩
peninsular	adj. 半岛的；形成半岛的；半岛状的 n. 半岛居民
shuffle	v. 洗牌；推诿，推卸；拖曳，慢吞吞地走；搅乱 n. 洗牌，洗纸牌；混乱，蒙混；拖着脚走
hereditary	adj. 遗传的；世袭的；世代相传的 n. 遗传类
insolent	adj. 无礼的；傲慢的；粗野的；无耻的
arraign	v. 传讯，控告；责难，指责
buffoon	n. 丑角；滑稽剧演员
equitable	adj. 公平的，公正的；平衡法的
elevate	v. 提升；举起；振奋情绪等；提升…的职位
procure	v. 获得，取得；导致
celerity	n. 快速；敏捷
mask	n. 面具；口罩；掩饰 v. 掩饰；戴面具；化装
bacchanalia	n. （古罗马的）酒神节；大酒宴
semiconductor	n. [电子][物] 半导体
mass	n. 块，团；群众，民众；大量，众多；质量 adj. 群众的，民众的；大规模的，集中的 v. 聚集起来，聚集
revile	v. 辱骂；斥责
parody	n. 拙劣的模仿；诙谐的改编诗文 v. 拙劣模仿
luxuriant	adj. 繁茂的；丰富的；奢华的；肥沃的
commute	v. （搭乘车、船等）通勤；代偿 n. 通勤（口语）
cower	v. 退缩；抖缩；蜷缩；弯腰屈膝
annex	v. 附加；获得；并吞 n. 附加物；附属建筑物
remunerate	v. 酬劳；给与报酬；赔偿
maritime	adj. 海的；海事的；沿海的；海员的
isotope	n. 同位素
acquit	v. 无罪释放；表现；脱卸义务和责任；清偿
frolicsome	adj. 嬉戏的，爱闹着玩的
abstruse	adj. 深奥的；难懂的
chromatic	adj. 彩色的；色品的；易染色的
candid	adj. 公正的；坦白的；率直的；偷拍的 n. (Candid)人名；(罗)坎迪德
reconnoiter	v. 侦察，勘查
zany	adj. 滑稽的；古怪的；愚蠢的 n. 小丑；笨人；马屁精
incite	v. 煽动；激励；刺激
abstemious	adj. 节约的，节省的；有节制的
pundit	n. 专家；博学者；梵文学者
wry	adj. 歪斜的，扭歪的；歪曲的；用反语表达幽默的；揶揄的 vt. 扭曲；扭歪 vi. 扭曲；扭歪
serene	adj. 平静的；安详的；清澈的；晴朗的 n. 平静；晴朗 vt. 使平静
virulent	adj. 剧毒的；恶性的；有恶意的
collegian	n. 学院的学生；学院的一员
generic	adj. 类的；一般的；属的；非商标的
antilogy	n. 前后矛盾
trough	n. 水槽，水槽；低谷期；饲料槽；低气压
issue	n. 问题；流出；期号；发行物 v. 发行，发布；发给；放出，排出
redundant	adj. 多余的，过剩的；被解雇的，失业的；冗长的，累赘的
obesity	n. 肥大，肥胖
engrossing	adj. 引人入胜的 v. 使全神贯注（engross的ing形式）
attribute	n. 属性；特质 v. 归属；把…归于
skeleton	n. 骨架，骨骼；纲要；骨瘦如柴的人 adj. 骨骼的；骨瘦如柴的；概略的
veil	n. 面纱；面罩；遮蔽物；托词 v. 遮蔽；掩饰；以面纱遮掩；用帷幕分隔
inept	adj. 笨拙的；不适当的
vein	n. 血管；叶脉；[地质] 岩脉；纹理；翅脉；性情 v. 使成脉络；象脉络般分布于
offshoot	n. 分支；支流；衍生物
disadvantage	n. 缺点；不利条件；损失
credible	adj. 可靠的，可信的
opponent	n. 对手；反对者；敌手 adj. 对立的；敌对的
rhombus	n. [数] 菱形；[数] 斜方形
underling	n. 下属，部下；走卒
intelligible	adj. 可理解的；明了的；仅能用智力了解的
plunder	n. 抢夺；战利品；掠夺品 v. 掠夺；抢劫；侵吞
autocrat	n. 独裁者，专制君主；独断独行的人
vivacious	adj. 活泼的；快活的；有生气的
tacit	adj. 缄默的；不言而喻的；心照不宣的；默许的
pictograph	n. [语] 象形文字；古代石壁画；统计图表
tense	adj. 紧张的；拉紧的 v. 变得紧张；使拉紧 n. 时态
prominence	n. 突出；显著；突出物；卓越
lobster	n. 龙虾
decimal	adj. 小数的；十进位的 n. 小数
serendipity	n. 意外发现珍奇事物的本领；有意外发现珍宝的运气
surpass	v. 超越；胜过，优于；非…所能办到或理解
abridgement	n. 节略，缩写；减少
bedlam	n. 混乱，骚乱；精神病院，疯人院
opprobrium	n. 耻辱，不名誉；责骂，咒骂
fundamental	adj. 基本的，根本的 n. 基本原理；基本原则
inexorable	adj. 无情的；不屈不挠的；不可阻挡的；无法改变的
maneuver	n. [军] 机动；演习；策略；调遣 v. [军] 机动；演习；调遣；用计谋
specialty	n. 专业，专长；特产；特性；招牌菜 adj. 特色的；专门的；独立的
total	adj. 全部的；完全的；整个的 v. 总数达 n. 总数，合计
succulent	adj. 多汁的；多水分的；多汁性的 n. 肉质植物；多汁植物
agape	adj. 张开著；张口惊视的 adv. 目瞪口呆 n. (Agape)人名；(罗)阿加佩
abet	v. 煽动，教唆；支持 n. (Abet)人名；(意)阿贝特；(匈)奥拜特
brazier	n. 火盆；铜匠（等于 brasier）
brethren	n. <旧>兄弟们，同胞；〈旧〉同党，会友
exonerate	v. 使免罪
bullock	n. 小公牛；阉牛
peremptory	adj. 强制的；绝对的；断然的；专横的
plenteous	adj. 丰富的；丰饶的
hypocrite	n. 伪君子；伪善者
abed	adv. 在床上 n. (Abed)人名；(法)阿贝；(阿拉伯)阿比德
bleak	adj. 阴冷的；荒凉的，无遮蔽的；黯淡的，无希望的；冷酷的；单调的
protein	n. 蛋白质；朊 adj. 蛋白质的
staid	adj. 固定的；沉着的；沉静的；古板的，保守的
hypocrisy	n. 虚伪；伪善
discharge	v. 解雇；卸下；放出；免除 n. 排放；卸货；解雇
trifle	n. 琐事；蛋糕；少量 v. 开玩笑；闲混；嘲弄
prism	n. 棱镜；[晶体][数] 棱柱
circumference	n. 圆周；周长；胸围
refurbish	v. 刷新；再磨光
solute	n. [化学] 溶质；[化学] 溶解物 adj. 溶解的
anticlimax	n. 突降法；虎头蛇尾；令人扫兴的结尾
miff	n. 微怒；小争执 v. 使……恼怒
comparable	adj. 可比较的；比得上的
primeval	adj. 原始的；初期的（等于primaeval）
ohm	n. 欧姆（电阻单位）
adumbrate	v. 预示；画…的轮廓；遮蔽
voltage	n. [电] 电压
commiserate	v. 同情，怜悯
ridicule	v. 嘲笑；嘲弄；愚弄 n. 嘲笑；笑柄；愚弄
contingency	n. 偶然性；[安全] 意外事故；可能性；[审计] 意外开支；[离散数学或逻辑学]偶然式
ungainly	adj. 笨拙的；不雅的 adv. 笨拙地；不雅地
accusation	n. 控告，指控；谴责
stagy	adj. 做作的，不自然的
akin	adj. 类似的；同类的；同族的 n. (Akin)人名；(土、瑞典、尼日利)阿金；(匈)奥金；(英)埃金
hypodermic	n. 皮下注射；皮下注射器 adj. 皮下的
ingrate	adj. 忘恩的；不知恩的 n. 忘恩负义的人
indubitable	adj. 不容置疑的；明确的
subdue	v. 征服；抑制；减轻
adamant	adj. 固执的，坚强的；坚定不移的；坚硬无比的 n. 坚硬的东西；坚石
geometric	adj. 几何学的；[数] 几何学图形的
division	n. [数] 除法；部门；分配；分割；师（军队）；赛区
missile	n. 导弹；投射物 adj. 导弹的；可投掷的；用以发射导弹的
accommodate	v. 容纳；使适应；供应；调解
anode	n. 阳极（电解）
placate	v. 抚慰；怀柔；使和解
swamp	n. 沼泽；湿地 v. 使陷于沼泽；使沉没；使陷入困境
downplay	v. 不予重视；将轻描淡写
obese	adj. 肥胖的，过胖的
rendezvous	n. 约会；约会地点；集结地 v. 会合；约会
monopoly	n. 垄断；垄断者；专卖权
wrath	n. 愤怒；激怒
surreptitious	adj. 秘密的；鬼鬼祟祟的；暗中的
wee	adj. 极小的；很早的 n. 一点点
reminiscent	adj. 怀旧的，回忆往事的；耽于回想的 n. 回忆录作者；回忆者
abdicate	v. 退位；放弃
unify	v. 统一；使相同，使一致
hermit	n. （尤指宗教原因的）隐士；隐居者
provincial	adj. 省的；地方性的；偏狭的 n. 粗野的人；乡下人；外地人
bolster	n. 支持；长枕 v. 支持；支撑
hydrogen	n. [化学] 氢
adulterant	n. 掺杂物 adj. 掺杂用的
disfigure	v. 使变丑；损毁…的外形；使大为减色
barrister	n. 律师；（加拿大）出庭律师（等于arrister-at-law）；（英）（有资格出席高等法庭并辩护的）专门律师
vernacular	adj. 本国的；地方的；用本地语写成的 n. 本地话，方言；动植物的俗名
fray	n. 争论；打架；磨损处 v. 使磨损；变得令人紧张、急躁
exigent	adj. 迫切的；紧急的；苛求的
solicitous	adj. 热切期望的；热心的；挂念的
apotheosis	n. 神化；崇拜，颂扬；尊奉为神
considerable	adj. 相当大的；重要的，值得考虑的
egalitarian	adj. 平等主义的 n. 平等主义；平等主义者
intimidate	v. 恐吓，威胁；胁迫
plaintive	adj. 哀伤的；悲哀的
knavery	n. 恶行，欺诈；无赖行为
buoyancy	n. 浮力；轻快；轻松的心情；（股票）保持高价或回升
priggish	adj. 一本正经的；自负的；死板的
suspicion	n. 怀疑；嫌疑；疑心；一点儿 vt. 怀疑
slight	adj. 轻微的，少量的；脆弱的；细长的；不重要的 v. 轻视，忽略；怠慢 n. 怠慢；轻蔑
latency	n. 潜伏；潜在因素
polygamy	n. 一夫多妻，一妻多夫，多配偶
imprint	n. 印记；痕迹；特征；版本说明 v. 加特征；刻上记号
frightful	adj. 可怕的；惊人的；非常的
tribulation	n. 苦难；磨难；忧患
medley	n. 混合；混杂；混合物 adj. 混合的；拼凑的
annalist	n. 编年史作者；纪年表编者
renown	n. 声誉；名望 vt. 使有声望
abase	v. 使…谦卑；降低…的品格；降低…的地位
abash	v. 使困窘；使羞愧；使局促不安
keepsake	n. 纪念品
dilute	adj. 稀释的；淡的 v. 稀释；冲淡；削弱
impervious	adj. 不受影响的，无动于衷的；不能渗透的
apology	n. 道歉；谢罪；辩护；勉强的替代物
efficacy	n. 功效，效力
predicament	n. 窘况，困境；状态
prescience	n. 先见；预知
compress	v. 受压缩小
recede	v. 后退；减弱
immigrate	v. 移入
mawkish	adj. 令人作呕的，令人厌恶的；自作多情的；淡而无味的
contemplation	n. 沉思；注视；意图
imperil	v. 危及；使陷于危险
acclimate	v. 服水土；适应新环境
tentative	adj. 试验性的，暂定的；踌躇的 n. 假设，试验
gel	v. 胶化 n. [物化] 凝胶，胶体
salt	n. 盐；风趣，刺激性 adj. 咸水的；含盐的，咸味的；盐腌的；猥亵的 v. 用盐腌；给…加盐；将盐撒在道路上使冰或雪融化
reflection	n. 反射；沉思；映象
abate	v. 减轻；减少；废除 n. (Abate)人名；(英、意、法、埃塞)阿巴特
accentuate	v. 强调；重读
intangible	adj. 无形的，触摸不到的；难以理解的
pomp	n. 盛况；浮华；壮丽；夸耀
misanthropy	n. 厌恶人类；厌世，愤世嫉俗
area	n. 区域，地区；面积；范围
erroneous	adj. 错误的；不正确的
repentant	adj. 悔改的；后悔的
bumper	adj. 丰盛的，丰富的 n. 缓冲器，保险杆，减震物 vt. 装满；为…祝酒 vi. 干杯
hypothesis	n. 假设
discipline	n. 学科；纪律；训练；惩罚 v. 训练，训导；惩戒
regularity	n. 规则性；整齐；正规；匀称
fraction	n. 分数；部分；小部分；稍微
restoration	n. 恢复；复位；王政复辟；归还
desolate	adj. 荒凉的；无人烟的 v. 使荒凉；使孤寂
still	adv. 仍然；更；静止地 adj. 静止的，不动的；寂静的，平静的；不起泡的 n. 寂静；剧照；蒸馏室 conj. 仍然；但是；尽管如此 v. 蒸馏；使…静止；使…平静下来
vaccine	n. 疫苗；牛痘苗 adj. 疫苗的；牛痘的
amnesia	n. 健忘症，[内科] 记忆缺失
cantata	n. 大合唱；（意）清唱剧；康塔塔（一种声乐套曲）
augur	n. 预言者；占兆官；占卜师 v. 预言；是…的预兆
ceremonial	adj. 仪式的；正式的，礼仪的 n. 仪式，礼节
fetid	adj. 臭的；恶臭的；腐臭的
eulogize	v. 颂扬；称赞
enigmatic	adj. 神秘的；高深莫测的；谜一般的
reprisal	n. 报复（行为）；报复性劫掠
mischievous	adj. 淘气的；（人、行为等）恶作剧的；有害的
provoke	v. 驱使；激怒；煽动；惹起
radioactive	adj. [核] 放射性的；有辐射的
redemption	n. 赎回；拯救；偿还；实践
repartee	n. 机敏的应答；妙语；巧辩
optic	adj. 光学的；视觉的；眼睛的 n. 眼睛；镜片
sacrilege	n. 冒渎；亵渎圣物；悖理逆天的行为
emblem	n. 象征；徽章；符号 vt. 象征；用符号表示；用纹章装饰
rotate	v. 旋转；循环 adj. [植] 辐状的
sedulous	adj. 聚精会神的；勤勉的；勤苦工作的
inception	n. 起初；获得学位
subsistence	n. 生活；生存；存在
refraction	n. 折射；折光
sensuous	adj. 感觉上的，依感观的；诉诸美感的
lactose	n. [有化] 乳糖
tactician	n. 战术家；谋士
bawdy	adj. 猥亵的；下流的；卖淫的
operation	n. 操作；经营；[外科] 手术；[数][计] 运算
deportment	n. 举止；行为；态度
venous	adj. 静脉的；有脉纹的
arbiter	n. [法] 仲裁者；裁决人
fecund	adj. 肥沃的；多产的；丰饶的；生殖力旺盛的
occurrence	n. 发生；出现；事件；发现
tumultuous	adj. 吵闹的；骚乱的；狂暴的
meander	n. 漫步；曲流（常用复数） v. 漫步；蜿蜒缓慢流动
synthesis	n. 综合，[化学] 合成；综合体
abduction	n. 诱拐，绑架；诱导
effusive	adj. 流出的；感情横溢的
aggrandize	v. 增加；夸大；强化
shiftless	adj. 偷懒的；无计谋的；无能的
flexible	adj. 灵活的；柔韧的；易弯曲的
vitality	n. 活力，生气；生命力，生动性
detest	v. 厌恶；憎恨
discount	n. 折扣；贴现率 v. 贴现；打折扣出售商品
destination	n. 目的地，终点
gas	n. 气体；[矿业] 瓦斯；汽油；毒气 v. 加油；毒（死）
tenable	adj. （主张等）站得住脚的；可维持的
haughty	adj. 傲慢的；自大的
annals	n. 年报；编年史；年鉴
beseech	v. 恳求，哀求；乞求，急切地要求得到
theorist	n. 理论家
thwart	v. 挫败；反对；阻碍；横过 adj. 横放的；固执的 n. 划手座；独木舟的横梁 adv. 横过 prep. 横过
tractable	adj. 易于管教的；易驾驭的；易处理的；驯良的
pension	n. 退休金，抚恤金；津贴；膳宿费 v. 发给养老金或抚恤金
abandon	n. 放任；狂热 v. 遗弃；放弃
allay	v. 减轻；使缓和；使平静
filch	v. 窃取；偷窃
novel	adj. 新奇的；异常的 n. 小说
gap	n. 间隙；缺口；差距；分歧 v. 裂开
abundance	n. 充裕，丰富
creation	n. 创造，创作；创作物，产物
humanity	n. 人类；人道；仁慈；人文学科
recline	v. 靠；依赖；斜倚
moment	n. 片刻，瞬间，时刻；重要，契机
pertinent	adj. 相关的，相干的；中肯的；切题的
trenchant	adj. 尖刻的；锐利的；苛刻的；锋利的（名词trenchancy，副词trenchantly） n. (Trenchant)人名；(法)特朗尚
manifest	v. 证明，表明；显示 n. 载货单，货单；旅客名单 adj. 显然的，明显的；明白的
cadaver	n. [医] 尸体；死尸
stagnate	v. 停滞；淤塞；变萧条
arid	adj. 干旱的；不毛的，[农] 荒芜的
proficiency	n. 精通，熟练
collusion	n. 勾结；共谋
recover	v. 恢复；弥补；重新获得 n. 还原至预备姿势
variant	adj. 不同的；多样的 n. 变体；转化
trove	n. 被发现的东西；收藏的东西
oak	n. 橡树；橡木色；橡木家具 adj. 栎树的；栎木制的
prepossess	v. 使先具有；预先灌输情感（或思想等）；使…先怀偏见；先有好感
radical	adj. 激进的；根本的；彻底的 n. 基础；激进分子；[物化] 原子团；[数] 根数
similar	adj. 相似的 n. 类似物
relent	v. 变温和，变宽厚；减弱；缓和
neutralization	n. [化学] 中和；[化学] 中和作用；中立状态
consecutive	adj. 连贯的；连续不断的
rotary	adj. 旋转的，转动的；轮流的 n. 旋转式机器；[动力] 转缸式发动机
obsequies	n. 葬礼
lingual	adj. 语言的；舌的，舌音的 n. 舌音，舌音字
fallow	adj. 休耕的；不活跃的 n. 休耕地；休耕 vt. 使（土地）休闲；潜伏
bigamy	n. 重婚罪，重婚
differ	v. 使…相异；使…不同 n. (Differ)人名；(法)迪费
persistent	adj. 固执的，坚持的；持久稳固的
benignity	n. 仁慈；善举
astounding	adj. 令人震惊的；令人惊骇的
fabricate	v. 制造；伪造；装配
backstage	adv. 在后台；向后台
salutation	n. 称呼；问候；招呼；寒喧
resemblance	n. 相似；相似之处；相似物；肖像
negligence	n. 疏忽；忽视；粗心大意
enlighten	v. 启发，启蒙；教导，开导；照耀
rebellious	adj. 反抗的；造反的；难控制的
integrity	n. 完整；正直；诚实；廉正
fragile	adj. 脆的；易碎的
chromosome	n. [遗][细胞][染料] 染色体（形容词chromosomal，副词chromosomally）
adulterate	adj. 通奸的；搀杂的 v. 掺假
subtle	adj. 微妙的；精细的；敏感的；狡猾的；稀薄的
buffer	n. [计] 缓冲区；缓冲器，[车辆] 减震器 v. 缓冲
partition	n. 划分，分开；[数] 分割；隔墙；隔离物 v. [数] 分割；分隔；区分
mediocrity	n. 平庸之才；平常
nondescript	adj. 平凡的，没有特色的；难以区别的；莫可名状的 n. 不属任何类型的人；难以形容的人或物
licentious	adj. 放肆的；放纵的
archaeologist	n. 考古学家
birthright	n. 与生俱来的权利；长子继承权
biology	n. （一个地区全部的）生物；生物学
champion	n. 冠军；拥护者；战士 v. 支持；拥护 adj. 优胜的；第一流的
objective	adj. 客观的；目标的；宾格的 n. 目的；目标；[光] 物镜；宾格
coerce	v. 强制，迫使
humility	n. 谦卑，谦逊
ammonia	n. [无化] 氨，阿摩尼亚
exhaustive	adj. 详尽的；彻底的；消耗的
misgiving	n. 担忧；疑虑；不安 v. 担忧；使…疑虑；害怕（misgive的ing形式）
intransigent	adj. 不妥协的；不让步的 n. 不妥协的人
banal	adj. 陈腐的；平庸的；老一套的 n. (Banal)人名；(法、意)巴纳尔
comparison	n. 比较；对照；比喻；比较关系
federate	adj. 同盟的；联邦制度下的；联合的 v. 使结成同盟；使结成联邦
statement	n. 声明；陈述，叙述；报表，清单
unassuming	adj. 谦逊的；不装腔作势的；不出风头的
denominate	v. 为…命名；把…称作… adj. 有特定名称的
extemporaneous	adj. 即席的，临时的；无准备的；不用讲稿的；善于即席讲话的
pique	v. 刺激；伤害…自尊心；激怒 n. 生气；愠怒；呕气
agglomerate	adj. 凝聚的；成团的，结块的 n. 团块；[岩] 集块岩；附聚物 v. 使结块；使成团
aural	adj. 听觉的；耳的；气味的；先兆的 n. (Aural)人名；(西)奥拉尔
omniscient	adj. 全知的；无所不知的 n. 上帝；无所不知者
captivate	v. 迷住，迷惑
seclude	v. 使隔离，使隔绝
plummet	n. [测] 铅锤，坠子 v. 垂直落下；（价格、水平等）骤然下跌
accomplish	v. 完成；实现；达到
earnest	adj. 认真的，热心的；重要的 n. 认真；定金；诚挚
projection	n. 投射；规划；突出；发射；推测
circumscribe	v. 外切，外接；限制；在…周围画线
vitalize	v. 赋予…生命；激发；使有生气
disengage	v. 使脱离；解开；解除
symphony	n. 交响乐；谐声，和声
primp	v. 精心打扮；装饰
network	n. 网络；广播网；网状物
naval	adj. 海军的；军舰的 n. (Naval)人名；(西、德、印)纳瓦尔
ordinate	n. [数] 纵坐标
rudimentary	adj. 基本的；初步的；退化的；残遗的；未发展的
accessible	adj. 易接近的；可进入的；可理解的
powerless	adj. 无力的；[劳经] 无能力的，无权的
vegetate	v. 过单调呆板的生活
undercharge	v. 充电不足；索价低于常价；弹药装填不足 n. 充电不足；低的索价；填不够量的火药
preoccupy	v. 迷住；使全神贯注
avert	v. 避免，防止；转移
denigrate	v. 诋毁；使变黑；玷污
perfunctory	adj. 敷衍的；马虎的；得过且过的
sophistical	adj. 诡辩的；强词夺理的；诡辩法的
posterior	adj. 其次的；较后的 n. 后部；臀部
fervor	n. 热情；热烈；热心；炽热
tundra	n. [生态] 苔原；[地理] 冻原；冻土地带
solvent	adj. 有偿付能力的；有溶解力的 n. 溶剂；解决方法
epitome	n. 缩影；摘要；象征
blemish	n. 瑕疵；污点；缺点 v. 玷污；损害；弄脏
retrospect	n. 回顾，追溯 v. 回顾，追溯；回想
contort	v. 扭曲；曲解
phenomenon	n. 现象；奇迹；杰出的人才
rife	adj. 普遍的；流行的；盛传的 n. (Rife)人名；(西)里费；(英)赖夫
classify	v. 分类；分等
microorganism	n. [微] 微生物；微小动植物
anticipate	v. 预期，期望；占先，抢先；提前使用
languid	adj. 倦怠的；呆滞的；软弱无力的
wanton	adj. 嬉戏的；繁茂的；荒唐的；无节制的；放纵的 n. 荡妇；水性杨花的女人 v. 放肆；嬉戏；闲荡
connotation	n. 内涵；含蓄；暗示，隐含意义；储蓄的东西（词、语等）
resistance	n. 阻力；电阻；抵抗；反抗；抵抗力
adherent	n. 信徒；追随者 adj. 附着的；粘着的
bereft	adj. 丧失的；被剥夺的；失去亲人的 v. 失去…的（bereave的过去式）
flair	n. 天资；天分；资质；鉴别力
cynical	adj. 愤世嫉俗的；冷嘲的
instinct	n. 本能，直觉；天性 adj. 充满着的
tolerable	adj. 可以的；可容忍的
presumptuous	adj. 专横的；放肆的；冒昧的
undermine	v. 破坏，渐渐破坏；挖掘地基
pentagon	n. 五角形
voluptuous	adj. 撩人的；骄奢淫逸的；沉溺酒色的
palliate	v. 减轻；掩饰；辩解
abut	v. 邻接；毗邻；紧靠 n. (Abut)人名；(英、土)阿布特
intercede	v. 调解，调停；求情，说项
academician	n. 院士；大学生；学会会员；大学教师
theorize	v. 建立理论或学说；推理
glacial	adj. 冰的；冰冷的；冰河时代的
dielectric	adj. 非传导性的；诱电性的 n. 电介质；绝缘体
face	n. 脸；表面；面子；面容；外观；威信 v. 向；朝
dilettante	n. 业余爱好者；一知半解者 adj. 浅薄的；业余艺术爱好的 vi. （在艺术、科学等方面）浅尝辄止
progression	n. 前进；连续
outlandish	adj. 古怪的；奇异的；异国风格的；偏僻的
scanty	adj. 缺乏的；吝啬的；仅有的；稀疏的
monogamy	n. 一夫一妻制；[动] 单配偶，[动] 单配性
ramble	n. 漫步；漫游；随笔 v. 漫步于…
prohibit	v. 阻止，禁止
desiccate	v. 变干
defer	v. 推迟；延期；服从 n. (Defer)人名；(法)德费
lapse	n. (一时的) 走神，判断错误
motor	n. 发动机，马达；汽车 adj. 汽车的；机动的 v. 乘汽车
possess	v. 控制；使掌握；持有；迷住；拥有，具备
itinerary	n. 旅程，路线； 旅行日程 adj. 旅程的； 巡回的，流动的
underlie	v. 成为……的基础；位于……之下
equivocal	adj. 模棱两可的；可疑的
belle	n. 美女
ovum	n. [细胞][组织] 卵；卵子；卵形装饰
projectile	adj. 抛射的；抛掷的；供抛射用的；（触角等）能伸出的 n. 射弹；抛射体；自动推进武器
guzzle	v. 狂饮；暴食 n. 狂饮；豪饮作乐
resent	v. 怨恨；愤恨；厌恶
hail	n. 冰雹；致敬；招呼；一阵 v. 致敬；招呼；向欢呼；猛发；使像下雹样落下（过去式hailed，过去分词hailed，现在分词hailing，第三人称单数hails） int. 万岁；欢迎
encore	n. 再演唱的要求；经要求而再唱 v. 要求再演或唱 int. 再来一个
inaccessible	adj. 难达到的；难接近的；难见到的
itinerate	v. 巡回；巡回传教
plausible	adj. 貌似可信的，花言巧语的；貌似真实的，貌似有理的
phosphate	n. 磷酸盐；皮膜化成
cull	v. 精选；采集（鲜花等）；剔除 n. 剔出来杀掉的动物；拣出的等外品
tumor	n. 肿瘤；肿块；赘生物
factor	n. 因素；要素；[物] 因数；代理人 v. 做代理商
telescope	v. 压缩；使套叠 n. 望远镜；缩叠式旅行袋
paroxysm	n. （疾病周期性）发作；突发
invalidate	v. 使无效；使无价值
affinity	n. 密切关系；吸引力；姻亲关系；类同
angle	v. 钓鱼；谋取 n. 角度，角，方面
vulgar	adj. 粗俗的；通俗的；本土的 n. 平民，百姓
requite	v. 报答，回报；酬谢
lung	n. 肺；呼吸器
intervene	v. 干涉；调停；插入
preference	n. 偏爱，倾向；优先权
saturation	n. 饱和；色饱和度；浸透；磁化饱和
producer	n. 制作人，制片人；生产者；发生器
reclaim	v. 开拓；回收再利用；改造某人，使某人悔改 n. 改造，感化；再生胶
irony	n. 讽刺；反语；具有讽刺意味的事 adj. 铁的；似铁的
unctuous	adj. 油质的；虚情假意的；油腔滑调的
competitor	n. 竞争者，对手
nomad	n. 游牧民；流浪者 adj. 游牧的；流浪的
alkaloid	n. [有化] 生物碱；植物碱基
facet	n. 面；方面；小平面 vt. 在…上琢面
travesty	n. 歪曲；滑稽作品；拙劣的模仿作品 v. 歪曲；滑稽地模仿
resurrection	n. 复活；恢复；复兴
seize	v. 抓住；夺取；理解；逮捕
surrender	v. 使投降；放弃；交出；听任 n. 投降；放弃；交出；屈服
oblivion	n. 遗忘；湮没；赦免
penitent	adj. 忏悔的，悔过的 n. 悔罪者，忏悔者
marsh	n. 沼泽；湿地 adj. 沼泽的；生长在沼泽地的
candidate	n. 候选人，候补者；应试者
protrude	v. 使突出，使伸出
alley	n. 小巷；小路；小径
mendicant	adj. 行乞的；托钵修道会的 n. 乞丐；托钵僧
transistor	n. 晶体管（收音机）
validity	n. [计] 有效性；正确；正确性
provident	adj. 节俭的；有先见之明的；顾及未来的
interpolate	v. 篡改；插入新语句
fermentation	n. 发酵
arboretum	n. 植物园；（供科研等的）树木园
pamphlet	n. 小册子
excursion	n. 偏移；远足；短程旅行；离题；游览，游览团
demonstrate	v. 证明；展示；论证
inherent	adj. 固有的；内在的；与生俱来的，遗传的
contour	n. 轮廓；等高线；周线；电路；概要 v. 画轮廓；画等高线
prologue	n. 开场白；序言 vt. 加上…前言；为…作序
transient	adj. 短暂的；路过的 n. 瞬变现象；过往旅客；候鸟
billion	n. 十亿；大量 num. 十亿 adj. 十亿的
enlist	v. 支持；从军；应募；赞助
precocious	adj. 早熟的；过早发育的
licit	adj. 正当的，合法的
extrovert	n. 外向；外倾者；性格外向者（等于extravert）
linguist	n. 语言学家
glacier	n. 冰河，冰川
emigrate	v. 移居；移居外国
explosion	n. 爆炸；爆发；激增
vicious	adj. 恶毒的；恶意的；堕落的；有错误的；品性不端的；剧烈的 n. (Vicious)人名；(英)维舍斯
passive	adj. 被动的，消极的；被动语态的 n. 被动语态
obstreperous	adj. 吵闹的，喧嚣的；难驾驭的
forfeit	n. 罚金；没收物；丧失的东西 adj. 因受罚而丧失的；被没收的 v. （因犯罪、失职、违约等）丧失（权利、名誉、生命等）
embellish	v. 修饰；装饰；润色
rancor	n. 深仇；怨恨；敌意
blockade	v. 封锁 n. 阻塞
gaucherie	n. 笨拙；无礼
quorum	n. 法定人数
onerous	adj. 繁重的；麻烦的；负有义务的；负有法律责任的
extraneous	adj. 外来的；没有关联的；来自体外的
tube	n. 管；电子管；隧道；电视机 v. 使成管状；把…装管；用管输送
prosecutor	n. 检察官；公诉人；[法] 起诉人；实行者
acoustics	n. 声学；音响效果，音质
compulsion	n. 强制；强迫；强制力
inclination	n. 倾向，爱好；斜坡
exotic	adj. 异国的；外来的；异国情调的
appreciable	adj. 可感知的；可评估的；相当可观的
photography	n. 摄影；摄影术
impulse	n. 冲动；[电子] 脉冲；刺激；神经冲动；推动力 vt. 推动
facility	n. 设施；设备；容易；灵巧
equidistant	adj. 等距的；距离相等的
rail	n. 铁轨；扶手；横杆；围栏 v. 抱怨；责骂
definite	adj. 一定的；确切的
rile	v. 激怒；搅浑；惹怒 n. (Rile)人名；(塞)里莱
stagnant	adj. 停滞的；不景气的；污浊的；迟钝的
baleful	adj. 恶意的；有害的
denude	v. 剥夺；使裸露
boorish	adj. 粗野的；粗鲁的；粗鄙的；笨拙的；乡土气的
attenuate	adj. 减弱的；稀薄的；细小的 v. 使减弱；使纤细
quixotic	adj. 唐吉诃德式的；狂想家的；愚侠的
vinery	n. 葡萄园，葡萄温室
perfidious	adj. 背信弃义的；不忠的
impinge	v. 撞击；侵犯
germinate	v. 使发芽；使生长
vaudeville	n. 杂耍；轻歌舞剧；歌舞杂耍表演
glutinous	adj. 粘的；粘性的；胶状的
supple	adj. 柔软的；灵活的；顺从的；易弯曲的；逢迎的 v. 使柔软；使顺从 n. (Supple)人名；(意、西)苏普莱
desiccant	adj. 去湿的，使干燥的 n. [助剂] 干燥剂
edify	v. 熏陶；启发；教诲
sedition	n. 暴动；煽动性的言论或行为；妨害治安
invoke	v. 调用；祈求；引起；恳求
belie	v. 掩饰；与…不符；使失望；证明…虚假错误
commodious	adj. 宽敞的；方便的
unparalleled	adj. 无比的；无双的；空前未有的
subliminal	adj. [生理] 阈下的；潜在意识的；微小得难以察觉的 n. 潜意识；阈下意识
tension	n. 张力，拉力；紧张，不安；电压 vt. 使紧张；使拉紧
epitomize	v. 摘要；概括；成为…的缩影
quarterly	adj. 季度的，按季度的；一年四次的 adv. 按季度，[农] 一季一次地；纵横四分地 n. 季刊
flask	n. [分化] 烧瓶；长颈瓶，细颈瓶；酒瓶，携带瓶
sober	adj. 冷静的，清醒的；未醉的 v. 使严肃；使醒酒，使清醒 n. (Sober)人名；(英)索伯
specious	adj. 似是而非的；外表美观的；华而不实的；徒有其表的
exultant	adj. 非常高兴的；欢跃的；狂喜的；欢欣鼓舞的
inclement	adj. 险恶的；气候严酷的；狂风暴雨的
antipodes	n. 地球上处于正相对应的两个地区，尤指（与欧洲形成对跖地的）澳大拉西亚
belay	v. 把缆绳拴在系索栓上 n. (Belay)人名；(法)贝莱
declaim	v. 慷慨陈词；演讲；朗读
jocose	adj. 诙谐的；开玩笑的
possessive	adj. 占有的；所有的；所有格的；占有欲强的 n. 所有格
satiate	v. 充分满足；使厌腻 adj. 饱足的；厌腻的
misbehave	v. 作弊；行为不礼貌
tricycle	n. [车辆] 三轮车
anatomy	n. 解剖；解剖学；剖析；骨骼
xenophobe	n. 仇外；害怕生人者；畏惧和憎恨外国人的人
devastate	v. 毁灭；毁坏
agile	adj. 敏捷的；机敏的；活泼的
sedative	n. [药] 镇静剂；能使安静的东西；止痛药 adj. 使镇静的；使安静的
vie	v. 争；竞争 n. (Vie)人名；(英)维
legislator	n. 立法者
satire	n. 讽刺；讽刺文学，讽刺作品
respondent	adj. 回答的；应答的 n. [法] 被告；应答者
pediatrics	n. 小儿科
satirize	v. 讽刺；挖苦
exhausted	adj. 疲惫的；耗尽的 v. 耗尽；用尽；使…精疲力尽（exhaust的过去式）
contempt	n. 轻视，蔑视；耻辱
hideous	adj. 可怕的；丑恶的
guilty	adj. 有罪的；内疚的
obtuse	adj. 迟钝的；圆头的；不锋利的
anachronistic	adj. 时代错误的
table	n. 桌子；表格；平地层 v. 制表；搁置；嵌合 adj. 桌子的
prescript	adj. 规定的；有时效的 n. 规定；命令
imbibe	v. 吸收，接受；喝；吸入
adduce	v. 举出；引证
boiling	adj. 沸腾的；激昂的 n. 沸腾；煮沸；起泡 adv. 沸腾
unwitting	adj. 不知情的；不知不觉的，无意的 v. 使精神错乱；使丧失智能（unwit的ing形式）
diffident	adj. 羞怯的；缺乏自信的；谦虚谨慎的
motto	n. 座右铭，格言；箴言
cube	n. 立方；立方体；骰子 v. 使成立方形；使自乘二次；量…的体积
frenetic	adj. 狂热的；发狂的 n. 疯子；狂人
benefactor	n. 恩人；捐助者；施主
inkling	n. 暗示；略知；模糊概念 v. 暗示 （inkle的ing形式）；略知；低声说出
matriarchy	n. 母权制；女家长制；女族长制；母系氏族
impasse	n. 僵局；死路
query	n. 疑问，质问；疑问号 ；[计] 查询 v. 询问；对……表示疑问
expurgate	v. 删除，删去
enamor	v. 使迷恋，使倾心
dual	adj. 双的；双重的 n. 双数；双数词
fanatic	n. 狂热入迷者；盲信者；盲信 adj. 狂热的；盲信的
particle	n. 颗粒；[物] 质点；极小量；小品词
sapid	adj. 有滋味的；有趣的
repellent	adj. 排斥的；防水的；弹回的；令人讨厌的 n. 防护剂；防水布；排斥力
feudal	adj. 封建制度的；领地的；世仇的
velocity	n. 【物】速度
fake	n. 假货；骗子；假动作 v. 捏造；假装…的样子 adj. 伪造的
simplify	v. 简化；使单纯；使简易
recur	v. 复发；重现；采用；再来；循环；递归
crestfallen	adj. 垂头丧气的，气馁的
algebra	n. 代数学
autarchy	n. 专制，独裁；专制国家
gigantic	adj. 巨大的，庞大的
desert	v. 遗弃；放弃；逃跑 n. 沙漠；荒原；应得的赏罚 adj. 沙漠的；荒凉的；不毛的
cantonment	n. 宿营地；兵营
decagon	n. [数] 十角形；[数] 十边形
caption	n. 标题；字幕；说明；逮捕 v. 加上说明；加上标题
unbiased	adj. 公正的；无偏见的
crystal	n. 结晶，晶体；水晶；水晶饰品 adj. 水晶的；透明的，清澈的
demolish	v. 拆除；破坏；毁坏；推翻；驳倒
prattle	v. 闲聊；胡说；小孩般说话 n. 无聊话；咿咿呀呀声
effrontery	n. 厚颜无耻
cardiac	n. 强心剂；强胃剂 adj. 心脏的；心脏病的；贲门的
afterthought	n. 事后的想法；后来添加的东西
vainglorious	adj. 虚荣心强的；非常自负的
vermin	n. 害虫；寄生虫；歹徒
disburse	v. 支付；支出
advertiser	n. 广告客户；刊登广告的人
diplomat	n. 外交家，外交官；有外交手腕的人；处事圆滑机敏的人
affable	adj. 和蔼可亲的；友善的
genre	n. 类型；种类；体裁；样式；流派；风俗画 adj. 风俗画的；以日常情景为主题的
sector	n. 部门；扇形，扇区；象限仪；函数尺 vt. 把…分成扇形
virile	adj. 男性的；有男子气概的；刚健的 n. (Virile)人名；(意)维里莱
cortex	n. [解剖] 皮质；树皮；果皮
ascendant	n. 优势；运星；支配地位 adj. 上升的；优越的
pretension	n. 自负；要求；主张；借口；骄傲
anthropology	n. 人类学
preclude	v. 排除；妨碍；阻止
discomfit	v. 挫败；扰乱，破坏；使…为难；使…破灭
lasting	adj. 持久的；永恒的 n. [纺] 厚实斜纹织物 v. 持续；维持（last的ing形式）
interposition	n. 干涉，介入；插入，放入
justification	n. 理由；辩护；认为有理，认为正当；释罪
appertain	v. 属于；和……有关，有关系
stymie	v. 从中作梗，阻挠；妨碍 n. 妨碍球
audition	n. 听力，听觉；试听 v. 试听；试音
misfortune	n. 不幸；灾祸，灾难
characterize	v. 描绘…的特性；具有…的特征
positive	adj. 积极的；[数] 正的，[医][化学] 阳性的；确定的，肯定的；实际的，真实的；绝对的 n. 正数；[摄] 正片
work	n. 工作；[物] 功；产品；操作；职业；行为；事业；工厂；著作；文学、音乐或艺术作品 v. 使工作；操作；经营；使缓慢前进
recrudescent	adj. 复发的，再发作的
celebrated	adj. 著名的；有名望的 v. 庆祝（celebrate的过去式和过去分词）
dialect	n. 方言，土话；同源语；行话；个人用语特征 adj. 方言的
global	adj. 全球的；总体的；球形的
platitude	n. 陈词滥调；平凡；陈腐
restrict	v. 限制；约束；限定
annihilate	v. 歼灭；战胜；废止
landmark	n. [航]陆标；地标；界标；里程碑；纪念碑；地界标；划时代的事 adj. 有重大意义或影响的
appall	v. 使胆寒；使惊骇
righteous	adj. 正义的；正直的；公正的
prostrate	adj. 俯卧的；拜倒的；降伏的；沮丧的 v. 使…屈服；将…弄倒；使…俯伏
promote	v. 促进；提升；推销；发扬
torturous	adj. 折磨人的，痛苦的
conditional	adj. 有条件的；假定的 n. 条件句；条件语
cryptic	adj. 神秘的，含义模糊的；[动] 隐藏的
racy	adj. 生动的；保持原味的；适于赛跑的；猥亵的 n. (Racy)人名；(葡、阿拉伯)拉西
encompass	v. 包含；包围，环绕；完成
brandish	v. 挥舞；炫耀 n. 挥舞
pulley	n. 滑轮；皮带轮；滑车 vt. 用滑轮升起
herbivore	n. [动] 食草动物
enfranchise	v. 给予选举权；给予自治权；解放，释放
malfeasance	n. 渎职，违法行为；不正当，坏事
botany	n. 植物学；地区植物总称
precedence	n. 优先；居先
alloy	v. 使成合金；使减低成色 n. 合金
cursory	adj. 粗略的；草率的；匆忙的
forebode	v. 预示；预感；预兆
allot	v. 分配；拨给；分派 n. (Allot)人名；(英)阿洛特；(西)阿略特；(法)阿洛
serum	n. 血清；浆液；免疫血清；乳清；树液
congenial	adj. 意气相投的；性格相似的；适意的；一致的
flame	n. 火焰；热情；光辉 v. 焚烧；泛红
minute	n. 分，分钟；片刻，一会儿；备忘录，笔记；会议记录 v. 将…记录下来 adj. 微小的，详细的 [maɪˈnjuːt; US -ˈnuːt; maɪˋnut]
paralyze	v. 使麻痹；使瘫痪
protuberate	v. 伸出的
graph	n. 图表；曲线图 v. 用曲线图表示
outdo	v. 超过；胜过
dipper	n. 长柄勺；浸染工；[鸟] 河鸟
retroactive	adj. 追溯的；有追溯效力的；反动的
defraud	v. 欺骗
wintry	adj. 寒冷的，冬天的；冷淡的
cupidity	n. 贪心，贪婪
retrench	v. 删除；减少；紧缩开支
foreshadow	v. 预示；成为…的前兆 n. 预兆
antitoxin	n. 抗毒素；抗毒素血清
retaliate	v. 报复；回敬
contentment	n. 满足；满意
moderate	adj. 稳健的，温和的；适度的，中等的；有节制的 v. 变缓和，变弱
visceral	adj. 内脏的；出于本能的；发自肺腑的；粗俗的
stolid	adj. 迟钝的；缺乏热情的；冷漠的
electroscope	n. [电] 验电器
complaisance	n. 殷勤；彬彬有礼；柔顺
genesis	n. 发生；起源
exculpate	v. 开脱；使无罪
clan	n. 宗族；部落；集团
accomplice	n. 同谋者，[法] 共犯
savage	adj. 野蛮的；残酷的；狂怒的；荒凉的 n. 未开化的人；粗鲁的人；残暴成性的人 v. 乱咬；粗暴的对待
fortuitous	adj. 偶然的，意外的；幸运的
frizzle	v. 使卷缩；使卷曲 n. 卷发；吱吱响声
preservation	n. 保存，保留
tantamount	adj. 同等的；相当于…的
unawares	adv. 不知不觉地；出其不意地；不料
photon	n. [物] 光子；辐射量子；见光度（等于light quantum）
lascivious	adj. 好色的；淫荡的；挑动情欲的
external	adj. 外部的；表面的；[药] 外用的；外国的；外面的 n. 外部；外观；外面
portray	v. 描绘；扮演
seminary	n. 神学院；学校；发源地；高级中学
minnow	n. [鱼] 鲦鱼（一种小淡水鱼）
obsolescent	adj. 荒废的；即将过时的；逐渐被废弃的
academic	adj. 学术的；理论的；学院的 n. 大学生，大学教师；学者
incorporate	v. 包含，吸收；体现；把……合并 adj. 合并的；一体化的；组成公司的
refer	v. 参考；涉及；提到；查阅
auxiliary	n. 助动词；辅助者，辅助物；附属机构 adj. 辅助的；副的；附加的
rebuke	v. 指责，非难；制止；使相形见绌 n. 非难，指责；谴责，鞭策
condense	v. 浓缩；凝结
buttress	n. 扶壁；拱壁；支撑物 v. 支持；以扶壁支撑
microphone	n. 扩音器，麦克风
contentious	adj. 诉讼的；有异议的，引起争论的；爱争论的
duplicate	v. 复制；使加倍 n. 副本；复制品 adj. 复制的；二重的
mansion	n. 大厦；宅邸
intoxicate	v. 使陶醉；使喝醉；使中毒
insightful	adj. 有深刻见解的，富有洞察力的
numerator	n. 分子；计算者；计算器
neutral	adj. 中立的，中性的；中立国的；非彩色的 n. 中立国；中立者；非彩色；齿轮的空档
gruesome	adj. 可怕的；阴森的
ratification	n. 批准；承认，认可
divers	adj. 不同种类的，各式各样的 n. (Divers)人名；(英)戴弗斯；(法)迪韦尔
divert	v. 转移；使…欢娱；使…转向 n. (Divert)人名；(法)迪韦尔
bygone	adj. 过去的 n. 过去的事
fawn	v. 奉承 n. 小鹿；浅黄褐色；小动物 adj. 浅黄褐色的
resumption	n. 恢复；重新开始；取回；重获；恢复硬币支付
besmirch	v. 弄污；损害；诽谤
vex	v. 使烦恼；使困惑；使恼怒
intermit	v. 使中断
trickery	n. 欺骗；诡计；奸计
ostracize	v. 放逐；排斥；按贝壳流放法放逐
perceive	v. 察觉，感觉；理解；认知
jargon	n. 行话，术语；黄锆石
liquefy	v. 液化；溶解
divest	v. 剥夺；使脱去，迫使放弃
detract	v. 转移，使分心
emphasis	n. 重点；强调；加强语气
liberate	v. 解放；放出；释放
subtlety	n. 微妙；敏锐；精明
coherent	adj. 连贯的，一致的；明了的；清晰的；凝聚性的；互相耦合的；粘在一起的
materialist	n. 唯物主义者；实利主义者
juvenile	adj. 青少年的；幼稚的 n. 青少年；少年读物
recoil	v. 畏缩；弹回；报应 n. 畏缩；弹回；反作用
ensure	v. 保证，确保；使安全
waver	v. 摇曳；踌躇；摆动 n. 动摇；踌躇；挥动者
cartridge	n. 弹药筒，打印机的（墨盒）；[摄] 暗盒；笔芯；一卷软片
censure	v. 责难，责备 n. 责难
revitalize	v. 使…复活；使…复兴；使…恢复生气
dullard	n. 笨蛋；愚人
edible	adj. 可食用的 n. 食品；食物
sonar	n. 声纳；声波定位仪（等于asdic）
salubrious	adj. 清爽的；气候有益健康的
utility	n. 实用；效用；公共设施；功用 adj. 实用的；通用的；有多种用途的
bass	n. 鲈鱼；男低音；低音部；椴树 adj. 低音的
unduly	adv. 过度地；不适当地；不正当地
base	n. 基础；底部；垒 adj. 卑鄙的；低劣的 v. 以…作基础
grisly	adj. 可怕的；厉害的；严重的
rehabilitate	v. 使康复；使恢复名誉；使恢复原状
coincide	v. 一致，符合；同时发生
raucous	adj. 沙哑的；刺耳的；粗声的
predominate	v. 支配，主宰；在…中占优势
bask	v. 晒太阳；取暖；愉快或舒适 n. (Bask)人名；(芬)巴斯克
coefficient	n. [数] 系数；率；协同因素 adj. 合作的；共同作用的
hesitant	adj. 迟疑的；踌躇的；犹豫不定的
conviction	n. 定罪；确信；证明有罪；确信，坚定的信仰
precursor	n. 先驱，前导
qualify	v. 限制；使具有资格；证明…合格
extenuate	v. 减轻；低估；为…找借口；使人原谅
rustic	adj. 乡村的；纯朴的；粗野的；手工粗糙的 n. 乡下人；乡巴佬
bounce	n. 跳；弹力；活力 v. 弹跳；使弹起
bane	n. 毒药；祸害；灭亡的原因
overwork	v. 工作过度 n. 过度工作
retrospective	adj. 回顾的；怀旧的；可追溯的 n. 回顾展
boatswain	n. 水手长
empiricism	n. 经验主义；经验论
terminal	n. 末端；终点；终端机；极限 adj. 末端的；终点的；晚期的
diversion	n. 转移；消遣；分散注意力
interlocutor	n. 对话者；谈话者
specimen	n. 样品，样本；标本
mythology	n. 神话；神话学；神话集
invasion	n. 入侵，侵略；侵袭；侵犯
squabble	v. 发生口角；大声争吵 n. 争吵；口角
dissever	v. 使分离；使分裂
peccant	adj. 犯罪的；有过失的
widespread	adj. 普遍的，广泛的；分布广的
effuse	v. 流出；涌出；泻出 adj. [植] 疏展的
corrosion	n. 腐蚀；腐蚀产生的物质；衰败
derogate	v. 减损；贬损
vital	adj. 至关重要的；生死攸关的；有活力的 n. (Vital)人名；(法、德、意、俄、葡)维塔尔；(西)比塔尔
mandatory	adj. 强制的；托管的；命令的 n. 受托者（等于mandatary）
cognizant	adj. 审理的；已认知的
allusion	n. 暗示；提及
orbit	n. 轨道；眼眶；势力范围；生活常规 v. 盘旋；绕轨道运行
furlough	n. 休假；暂时解雇；放假 v. 准假；暂时解雇
blatant	adj. 喧嚣的；公然的；炫耀的；俗丽的
subjection	n. 隶属；服从；征服
disorder	n. 混乱；骚乱 v. 使失调；扰乱
accustomed	adj. 习惯的；通常的；独有的 v. 使习惯于（accustom的过去分词）
rebuff	n. 断然拒绝；回绝；漠不关心 v. 断然拒绝
aerate	v. 充气；让空气进入；使暴露于空气中
deteriorate	v. 恶化，变坏
miasma	n. 瘴气；臭气；不良影响
bile	n. 胆汁；愤怒
auricular	adj. 耳的；耳状的
bilk	v. 欺骗，诈骗；使受挫折；赖帐 n. 诈骗；骗子；赖帐
evidence	n. 证据，证明；迹象；明显 v. 证明
stimulus	n. 刺激；激励；刺激物
credo	n. 信条，教义
blaze	v. 在树皮上刻路标；公开宣布 n. 火焰，烈火；光辉；情感爆发
embargo	v. 禁止出入港口；禁止或限制贸易；征用或扣押 n. 禁令；禁止；封港令
algae	n. [植] 藻类；[植] 海藻
vacate	v. 空出，腾出；辞职；休假
blight	n. 枯萎病；荒芜 v. 破坏；使…枯萎
gallant	adj. 英勇的，勇敢的；华丽的；雄伟的 n. (Gallant)人名；(法)加朗；(英)加伦特
vocative	adj. 呼格的；称呼的 n. 呼格
homily	n. 说教；训诫
complementary	adj. 补足的，补充的
predominant	adj. 主要的；卓越的；支配的；有力的；有影响的
derange	v. 扰乱；使错乱；使发狂
emphasize	v. 强调，着重
timorous	adj. 胆怯的；胆小的；羞怯的
complaint	n. 抱怨；诉苦；疾病；委屈
indistinct	adj. 模糊的，不清楚的；朦胧的；难以清楚辨认的
impenitent	n. 顽固的人；不知悔改的人 adj. 顽固的；不知悔改的
law	n. 法律；规律；法治；法学；诉讼；司法界 vi. 起诉；控告 vt. 控告；对…起诉
coax	v. 哄；哄诱；慢慢将…弄好
precision	n. 精度，[数] 精密度；精确 adj. 精密的，精确的
constant	adj. 不变的；恒定的；经常的 n. [数] 常数；恒量
witchcraft	n. 巫术；魔法
amiable	adj. 和蔼可亲的，亲切的 n. (Amiable)人名；(法)阿米亚布勒；(英)阿米娅布尔
maverick	n. 没打烙印的动物；持不同意见的人 vt. 用不正当手段获取 vi. 迷途；背离 adj. 未打烙印的；行为不合常规的；特立独行的
disrupt	v. 破坏；使瓦解；使分裂；使中断；使陷于混乱 adj. 分裂的，中断的；分散的
foible	n. 弱点；小缺点；癖好
pseudonym	n. 笔名；假名
acid	n. 酸；<俚>迷幻药 adj. 酸的；讽刺的；刻薄的
source	n. 来源；水源；原始资料
retrieve	v. [计] 检索；恢复；重新得到 n. [计] 检索；恢复，取回
obligate	v. 使负义务；强使，强迫；对…施以恩惠 adj. 有责任的，有义务的；必需的
botanize	v. 研究植物；采集植物 n. 研究并采集植物
knighthood	n. 骑士；骑士身份
vitamin	n. [生化] 维生素；[生化] 维他命
meager	adj. 贫乏的；瘦的 n. 兆
thermal	adj. 热的；热量的；保热的 n. 上升的热气流
plaudit	n. 喝彩；赞美
shrubbery	n. 灌木；[林] 灌木林
deliberate	adj. 故意的；深思熟虑的；从容的 v. 仔细考虑；商议
habitable	adj. 可居住的；适于居住的
brotherhood	n. 兄弟关系；手足情谊；四海之内皆兄弟的信念
acne	n. [皮肤] 痤疮，[皮肤] 粉刺
cue	n. 提示，暗示；线索 v. 给…暗示
convey	v. 传达；运输；让与
troubadour	n. 行吟诗人；民谣歌手
undersize	adj. 不够大的；小于一般尺寸的 n. 尺寸不足
rotation	n. 旋转；循环，轮流
audacious	adj. 无畏的；鲁莽的
redound	v. 有助于；报偿，报应；被转移
intolerable	adj. 无法忍受的；难耐的
dispel	v. 驱散，驱逐；消除（烦恼等）
wile	vt. 欺骗，诱骗；消遣 n. 诡计，阴谋
maudlin	adj. 感情脆弱的；容易流泪的；酒后伤感的 n. 伤感；易流泪
reproof	n. 责备；谴责
luminary	n. 发光体；杰出人物；知识渊博的人
numerous	adj. 许多的，很多的
privacy	n. 隐私；秘密；隐居；隐居处
secretive	adj. 秘密的；偷偷摸摸的；促进分泌的
antenna	n. [电讯] 天线；[动] 触角，[昆] 触须
reconsider	v. 重新考虑；重新审议
wily	adj. 狡猾的；诡计多端的 n. (Wily)人名；(英)威利
compliant	adj. 顺从的；服从的；应允的
forbearance	n. 自制，忍耐；宽容
dehydration	n. 脱水
gypsy	n. 吉卜赛人；吉卜赛语；像吉布赛的人；歌舞剧中的歌舞队员 adj. 象吉卜赛人的；吉卜赛人的；无照的 vi. 流浪
incident	n. 事件，事变；插曲 adj. [光] 入射的；附带的；易发生的，伴随而来的
virtual	adj. [计] 虚拟的；实质上的，事实上的（但未在名义上或正式获承认）
foresight	n. 先见，远见；预见；深谋远虑
debacle	n. 崩溃；灾害；解冻
entangle	v. 使纠缠；卷入；使混乱
playful	adj. 开玩笑的；幽默的；爱嬉戏的
lecherous	adj. 好色的；淫荡的；引起淫欲的
beatitude	n. 祝福；至福
preceding	adj. 在前的；前述的 v. 在之前（precede的ing形式）
quip	n. 妙语；嘲弄；讽刺语 v. 嘲弄；讥讽
dexterity	n. 灵巧；敏捷；机敏
susceptible	adj. 易受影响的；易感动的；容许…的 n. 易得病的人
predatory	adj. 掠夺的，掠夺成性的；食肉的；捕食生物的
excavate	v. 挖掘；开凿
symbolize	v. 象征；用符号表现
perplexing	adj. 复杂的，令人费解的；令人困惑的
depot	n. 仓库；停车场；航空站 vt. 把…存放在储藏处 adj. 药性持久的
macabre	adj. 可怕的；以死亡为主题的；令人毛骨悚然的（等于macaber）
probability	n. 可能性；机率；[数] 或然率
introvert	v. 使内向；使内倾；使内弯 n. 内向的人；内翻的东西
ardor	n. 热情；狂热；灼热
primitive	adj. 原始的，远古的；简单的，粗糙的 n. 原始人
baffle	v. 使…困惑；使…受挫折；用挡板控制 n. 挡板；困惑
fertile	adj. 富饶的，肥沃的；能生育的
portion	n. 部分；一份；命运 v. 分配；给…嫁妆
reactionary	adj. 保守的，反动的；反动主义的；反对改革的 n. 反动分子；反动派；保守派
diversity	n. 多样性；差异
hone	n. 磨刀石；想念；抱怨 v. 用磨刀石磨
unfavorable	adj. 不宜的；令人不快的；不顺利的
vendor	n. 卖主；小贩；供应商；[贸易] 自动售货机
acme	n. 顶点，极点；最高点
yummy	adj. 好吃的；美味的；愉快的 n. 美味的东西；令人喜爱的东西
amenity	n. 舒适；礼仪；愉快；便利设施
populous	adj. 人口稠密的；人口多的
verisimilar	adj. 好像是真的
workmanship	n. 手艺，工艺；技巧
frequent	adj. 频繁的；时常发生的；惯常的 v. 常到，常去；时常出入于
anomaly	n. 异常；不规则；反常事物
extraordinary	adj. 非凡的；特别的；离奇的；临时的；特派的
secede	v. 脱离；退出
outcry	n. 强烈抗议；大声疾呼；尖叫；倒彩
gainsay	v. 反驳；否定 n. 否认；反对
magnification	n. 放大；放大率；放大的复制品
littoral	adj. 沿海的；海滨的 n. 沿海地区（等于litora）
omission	n. 疏忽，遗漏；省略；冗长
inflammatory	adj. 炎症性的；煽动性的；激动的
auricle	n. 耳廓；外耳；心耳
devour	v. 吞食；毁灭
asexual	adj. [生物] 无性的；无性生殖的
recalcitrant	adj. 反抗的；反对的；顽强的 n. 顽抗者；不服从的人
debunk	v. 揭穿；拆穿…的假面具；暴露
carnivorous	adj. 食肉的；肉食性的
embroil	v. 使卷入；使混乱
narrative	n. 叙述；故事；讲述 adj. 叙事的，叙述的；叙事体的
segment	v. 分割 n. 段；部分
variation	n. 变化；[生物] 变异，变种
defect	n. 缺点，缺陷；不足之处 v. 变节；叛变
aforesaid	adj. 前述的，上述的
exert	v. 运用，发挥；施以影响
revoke	v. 撤回，取消；废除 n. 有牌不跟
ambivalent	adj. 矛盾的；好恶相克的
vocation	n. 职业；天职；天命；神召
peerless	adj. 无与伦比的；出类拔萃的；无比的
preferable	adj. 更好的，更可取的；更合意的
presumption	n. 放肆，傲慢；推测
census	v. 实施统计调查 n. 人口普查，人口调查
minus	prep. 减，减去 n. 负号，减号；不足；负数 adj. 减的；负的
tirade	n. 激烈的长篇演说
labyrinth	n. 迷宫；[解剖] 迷路；难解的事物
circumnavigate	v. 环航
empower	v. 授权，允许；使能够
depth	n. [海洋] 深度；深奥
condemn	v. 谴责；判刑，定罪；声讨
fainthearted	adj. 懦弱的，胆小的；无精神的
panic	n. 恐慌，惊慌；大恐慌 adj. 恐慌的；没有理由的 v. 使恐慌
synthesize	v. 合成；综合
intricate	adj. 复杂的；错综的，缠结的
remnant	n. 剩余 adj. 剩余的
acerbic	adj. 尖刻的（等于acerb）；酸的；辛辣的
aeronautics	n. 航空学；飞行术
laconic	adj. 简洁的，简明的
misbehavior	n. 品行不端；不礼貌（等于misbehaviour）
randomly	adv. 随便地，任意地；无目的地，胡乱地；未加计划地
ultimatum	n. 最后通牒；最后结论；基本原理
reassure	v. 使…安心，使消除疑虑
lackadaisical	adj. 懒洋洋的；无精打采的；伤感的
anterior	adj. 前面的；先前的
affray	n. 滋事；骚乱；争论
erode	v. 腐蚀，侵蚀
potion	n. 一剂；一服；饮剂
sedentary	adj. 久坐的；坐惯的；定栖的；静坐的
animadversion	n. 批评；非难；评语
misinterpret	v. 曲解，误解
alto	n. 女低音；男声最高音；中音乐器 adj. 中音部的
leaflet	n. 小叶；传单
interpose	v. 提出（异议等）；使插入；使干涉
anemometer	n. 风力计，[气象] 风速计
munificent	adj. 慷慨的；丰厚的；宽宏的
vocabulary	n. 词汇；词表；词汇量
bawl	v. 大叫；放声痛哭 n. 叫骂声
demographic	adj. 人口统计学的；人口学的
blazon	v. 宣布；装饰 n. 纹章；描绘
laggard	adj. 落后的；迟钝的；迟缓的 n. 落后者；迟钝者
excoriate	v. 严厉的责难；擦破的皮肤
convenient	adj. 方便的；[废语]适当的；[口语]近便的；实用的
genial	adj. 亲切的，友好的；和蔼的；适宜的
subterfuge	n. 托词；借口；诡计
meditate	v. 考虑；计划；企图
characteristic	adj. 典型的；特有的；表示特性的 n. 特征；特性；特色
bungle	v. 笨手笨脚地做；把…搞糟 n. 粗劣；失败；笨拙
aspire	v. 渴望；立志；追求
drudgery	n. 苦工，苦差事
photosynthesis	n. 光合作用
disclaim	v. 否认，拒绝；放弃，弃权；拒绝承认
insulator	n. [物] 绝缘体；从事绝缘工作的工人
inevitable	adj. 必然的，不可避免的
enrapture	v. 使狂喜；使著迷
baldness	n. 光秃；率直；枯燥
equipment	n. 设备，装备；器材
abject	adj. 卑鄙的；可怜的；不幸的；（境况）凄惨的，绝望的
dissension	n. 纠纷；意见不合；争吵；倾轧
validate	v. 证实，验证；确认；使生效
utopian	adj. 乌托邦的；空想的；理想化的 n. 空想家；乌托邦的居民
vertigo	n. 晕头转向，[临床] 眩晕
recruit	n. 招聘；新兵；新成员 v. 补充；聘用；征募；使…恢复健康
sear	v. 烤焦；使…枯萎 adj. 枯萎的；烤焦的 n. 烙印；烧焦痕迹
beset	v. 困扰；镶嵌；围绕
battalion	n. 营，军营；军队，部队
torpor	n. 不活泼；麻木；懒散，迟缓
rigorous	adj. 严格的，严厉的；严密的；严酷的
stupendous	adj. 惊人的；巨大的
commission	n. 委员会；佣金；犯；委任；委任状 v. 委任；使服役；委托制作
bureau	n. 局，处；衣柜；办公桌
barring	prep. 除非；不包括；除…以外 v. 阻拦（bar的ing形式） n. (Barring)人名；(德)巴林
fickle	adj. 浮躁的；易变的；变幻无常的
gnash	v. 咬牙切齿 n. 咬
ignoble	adj. 不光彩的；卑鄙的；卑贱的
static	adj. 静态的；静电的；静力的 n. 静电；静电干扰
vexation	n. 苦恼；恼怒；令人烦恼的事
insensate	adj. 无感觉的；无情的；无生命的
hamper	v. 妨碍；束缚；使困累 n. 食盒，食篮；阻碍物
narcissism	n. [心理] 自恋，自我陶醉
conscious	adj. 意识到的；故意的；神志清醒的
aloof	adj. 冷淡的；远离的；冷漠的 adv. 远离；避开地
antecede	v. 在之前；胜过；居前
exaggerate	v. 使扩大；使增大
graphic	adj. 形象的；图表的；绘画似的
expatriate	v. 使移居国外；流放，放逐；使放弃国籍 n. 被流放者；移居国外者 adj. 移居国外的；被流放的
daunt	v. 使气馁，使畏缩；威吓 n. (Daunt)人名；(英)当特
adorn	v. 装饰；使生色 n. (Adorn)人名；(泰)阿隆
subdivide	v. 细分，再分
resurgent	adj. 复活的；复苏的 n. 复活者
apposite	adj. 适当的；贴切的
remission	n. 缓解；宽恕；豁免
serviceable	adj. 有用的，可供使用的；耐用的
lengthy	adj. 漫长的，冗长的；啰唆的
kismet	n. 天命；命运
immutable	adj. 不变的；不可变的；不能变的
pedestal	n. 基架，基座；基础 vt. 搁在台上；支持；加座
unsavoury	adj. 难吃的；令人讨厌的
proficient	adj. 熟练的，精通的 n. 精通；专家，能手
license	n. 执照，许可证；特许 v. 许可；特许；发许可证给
communicative	adj. 交际的；爱说话的，健谈的；无隐讳交谈的
landlord	n. 房东，老板；地主
diffusion	n. 扩散，传播；[光] 漫射
lifetime	n. 一生；寿命；终生；使用期 adj. 一生的；终身的
autumnal	adj. 秋天的；已过中年的
plaintiff	n. 原告
seed	n. 种子；根据；精液；萌芽；子孙；原由 v. 播种；结实；成熟；去…籽
litigious	adj. 好诉讼的；好争论的
oxide	n. [化学] 氧化物
prevaricate	v. 搪塞；支吾其辞，闪烁其辞
original	n. 原件；原作；原物；原型 adj. 原始的；最初的；独创的；新颖的
periodicity	n. [数] 周期性；频率；定期性
suppress	v. 抑制；镇压；废止
orifice	n. [机] 孔口
auditory	n. 听众；礼堂 adj. 听觉的；耳朵的
implicate	v. 使卷入；涉及；暗指；影响
progeny	n. 子孙；后裔；成果
synonym	n. 同义词；同义字
doctrinaire	adj. 教条主义的；空谈理论的 n. 教条主义者；空论家，纯理论家
coy	adj. 腼腆的；忸怩作态的；怕羞的 vi. 忸怩作态 vt. 爱抚 n. (Coy)人名；(法)库瓦；(英、德、西)科伊
discretion	n. 自由裁量权；谨慎；判断力；判定；考虑周到
somnolent	adj. 催眠的，想睡的
rapprochement	n. 友好；恢复邦交；友善关系的建立
compunction	n. 悔恨，后悔；内疚
acquiesce	v. 默许；勉强同意
scrupulous	adj. 细心的；小心谨慎的；一丝不苟的
resilient	adj. 弹回的，有弹力的
vibration	n. 振动；犹豫；心灵感应
replica	n. 复制品，复制物
devious	adj. 偏僻的；弯曲的；不光明正大的
cacophonous	adj. 粗腔横调的；发音不和谐的
dauntless	adj. 无畏的；勇敢的；不屈不挠的
prudent	adj. 谨慎的；精明的；节俭的 n. (Prudent)人名；(法)普吕当
cylinder	n. 圆筒；汽缸；[数] 柱面；圆柱状物
beneficent	adj. 慈善的；善行的
vehement	adj. 激烈的，猛烈的；热烈的
period	n. 周期，期间；时期；月经；课时；（语法学）句点，句号 adj. 某一时代的
scribe	n. 抄写员；作家；划线器 v. 写下，记下；用划线器划
thesis	n. 论文；论点
ambrosial	adj. 特别美味的；芬香的
prankster	n. 爱开玩笑的人；顽皮的人；恶作剧的人
sound	v. 听（诊）；测量，测…深；使发声；试探；宣告 n. 声音，语音；噪音；海峡；吵闹；听力范围；[医] 探条 adj. 健全的，健康的；合理的；可靠的；有效彻底的 adv. 彻底地，充分地
crest	n. [物] 波峰；冠；山顶；顶饰 v. 到达绝顶；形成浪峰
simile	n. 明喻；直喻
neutron	n. [核] 中子
abomination	n. 厌恶；憎恨；令人厌恶的事物
christen	v. 为…命名；为…施洗礼 n. (Christen)人名；(法、德、西、丹、挪)克里斯滕；(英)克里森
exorbitant	adj. （要价等）过高的；（性格等）过分的；不在法律范围之内的
acreage	n. 面积，英亩数
hurricane	n. 飓风，暴风
hirsute	adj. 多毛的；[昆] 有粗毛的
arrant	adj. 极恶的；声名狼藉的；彻头彻尾的
glycerol	n. [有化] 甘油；丙三醇
clairvoyance	n. 千里眼；异常的洞察力
telepathy	n. 心灵感应；传心术
inspire	v. 激发；鼓舞；启示；产生；使生灵感
censor	v. 审查，检查；检查和删节 n. 检查员；[心理] 潜意识压抑力；信件检查员
profile	n. 侧面；轮廓；外形；剖面；简况 v. 描…的轮廓；扼要描述
reactor	n. [化工] 反应器；[核] 反应堆；起反应的人
contrition	n. 痛悔；悔悟
unilateral	adj. 单边的；[植] 单侧的；单方面的；单边音；（父母）单系的
vernal	adj. 春天的；和煦的；青春的
condensation	n. 冷凝；凝结；压缩；缩合聚合
callow	adj. 年轻而无经验的；羽毛未丰的 n. (Callow)人名；(英)卡洛
fluent	adj. 流畅的，流利的；液态的；畅流的
cabinet	n. 内阁；橱柜；展览艺术品的小陈列室 adj. 内阁的；私下的，秘密的
approval	n. 批准；认可；赞成
avocation	n. 副业；业余爱好；嗜好
precession	n. 岁差（等于precession of the equinoxes）；先行；优先
coincidence	n. 巧合；一致；同时发生
arboreal	adj. 树木的；栖息在树上的
exploit	v. 开发，开拓；剥削；开采 n. 勋绩；功绩
unit	n. 单位，单元；装置；[军] 部队；部件
misadventure	n. 灾难；不幸遭遇
nationality	n. 国籍，国家；民族；部落
valedictory	adj. 告别的 n. 告别辞
usage	n. 使用；用法；惯例
cleanliness	n. 清洁
gossamer	n. 蛛丝；薄纱；小蜘蛛网 adj. 轻飘飘的；薄弱的
purgatory	n. 炼狱；涤罪；暂时的苦难 adj. 涤罪的（等于purgative）
felonious	adj. 凶恶的；重罪的；极恶的
melodrama	n. 情节剧；音乐剧；耸人听闻的事件，闹剧
trapezoid	n. [数] 梯形；[数] 不规则四边形 adj. 梯形的；[数] 不规则四边形的
deficit	n. 赤字；不足额
dissimilar	adj. 不同的
brokerage	n. 佣金；回扣；中间人业务
fracture	n. 破裂，断裂；[外科] 骨折 v. 破裂；折断
modest	adj. 谦虚的，谦逊的；适度的；端庄的；羞怯的 n. (Modest)人名；(罗)莫代斯特；(德)莫德斯特；(俄)莫杰斯特
vaporize	v. 蒸发
prolix	adj. 冗长的；说话啰嗦的
spectroscope	n. [光] 分光镜
elocutionist	n. 演说家；雄辩家；朗诵者
jocular	adj. 爱开玩笑的；打趣的；滑稽的
focus	n. 焦点；中心；清晰；焦距 v. 使集中；使聚焦
unused	adj. 不用的；从未用过的
betrothal	n. 订婚；婚约
setback	n. 挫折；退步；逆流
stimulant	n. [药] 兴奋剂；刺激物；酒精饮料 adj. 激励的；使人兴奋的
dwindle	v. 减少；变小
greedy	adj. 贪婪的；贪吃的；渴望的
slender	adj. 细长的；苗条的；微薄的
outcast	n. 流浪的人；被驱逐的人 adj. 被遗弃的；无家可归的；被逐出的
curtail	v. 缩减；剪短；剥夺…特权等
logical	adj. 合逻辑的，合理的；逻辑学的
transact	v. 交易；谈判
amenable	adj. 有责任的：顺从的，服从的；有义务的；经得起检验的
utilize	v. 利用
educe	v. 引出；演绎；使显出
loathe	v. 讨厌，厌恶
foment	v. 煽动；挑起；热敷
judicious	adj. 明智的；头脑精明的；判断正确的
straightforward	adj. 简单的；坦率的；明确的；径直的 adv. 直截了当地；坦率地
anarchy	n. 无政府状态；混乱；无秩序
polarization	n. 极化；偏振；两极分化
emancipate	v. 解放；释放
funnel	n. 漏斗；烟囱 v. 通过漏斗或烟囱等；使成漏斗形
miscreant	adj. 异端的；邪道的；极恶的 n. 异端；恶棍；罪大恶极之人
parentage	n. 出身；亲子关系；门第；起源
torpid	adj. 迟钝的，迟缓的；不活泼的；麻痹的；[生物] 蛰伏的
galvanize	v. 镀锌；通电；刺激
pandemic	adj. （疾病等）（全国、全球i）流行的；普遍的 n. 流行性疾病
antonym	n. [语] 反义词
gusto	n. 爱好；由衷的高兴；嗜好
zealot	n. 狂热者；犹太教狂热信徒
lifelong	adj. 终身的
gibber	v. 喋喋而言；胡扯 n. 三棱石；无法听懂的话
furrow	n. 皱纹；犁沟；车辙 v. 犁；耕；弄绉
mirror	n. 镜子；真实的写照；榜样 v. 反射；反映
sardonic	adj. 讽刺的；嘲笑的，冷笑的
ravenous	adj. 贪婪的；渴望的；狼吞虎咽的
remorseless	adj. 冷酷的；不知过错的；坚持不懈的；不屈不挠的
chloroplast	n. [植] 叶绿体
balk	n. 障碍；错误 v. 阻止；推诿；错过
penetrate	v. 渗透；穿透；洞察
cache	n. 电脑高速缓冲存储器；贮存物；隐藏处 v. 隐藏；窖藏
bale	n. 包；捆；灾祸；不幸 v. 将打包
nurture	v. 养育；鼓励；培植 n. 养育；教养；营养物
levity	n. 多变；轻浮；轻率；不稳定
practicable	adj. 可用的；行得通的；可实行的
transplant	v. 移植；迁移；使移居 n. 移植；移植器官；被移植物；移居者
leg	n. 腿；支柱
omnipresent	adj. 无所不在的
nickel	n. 镍；镍币；五分镍币 v. 镀镍于
bland	adj. 乏味的；温和的；冷漠的 vt. 使…变得淡而无味；除掉…的特性 vi. 变得平淡无奇；丧失特性 n. (Bland)人名；(英)布兰德
overleap	v. 越过；跳过；忽略
fractious	adj. 易怒的；倔强的，难以对待的
carbohydrate	n. [有化] 碳水化合物；[有化] 糖类
lethal	adj. 致命的，致死的 n. 致死因子
radar	n. [雷达] 雷达，无线电探测器
remote	adj. 遥远的；偏僻的；疏远的 n. 远程
chord	n. 弦；和弦；香水的基调
explode	v. 爆炸，爆发；激增
commonplace	n. 老生常谈；司空见惯的事；普通的东西 adj. 平凡的；陈腐的
synchronous	adj. 同步的；同时的
deceive	v. 欺骗；行骗
antibiotics	n. [药] 抗生素；抗生学
parochial	adj. 教区的；狭小的；地方范围的
status	n. 地位；状态；情形；重要身份
herald	n. 预兆，征兆；先驱；传令官；报信者 v. 通报；预示…的来临
literature	n. 文学；文献；文艺；著作
limitation	n. 限制；限度；极限；追诉时效；有效期限；缺陷
biography	n. 传记；档案；个人简介
insensible	adj. 昏迷的；无知觉的；麻木不仁的
endurable	adj. 能忍耐的；可忍受的；能持久的
preparatory	adj. 预备的 n. 预科；预备学校
wavelength	n. [物] 波长
statue	n. 雕像，塑像 vt. 以雕像装饰
barren	adj. 贫瘠的；不生育的；无益的；沉闷无趣的；空洞的 n. 荒地
transitory	adj. 短暂的，暂时的；瞬息的
presentiment	n. 预感
unkempt	adj. 蓬乱的，不整洁的；（言语等）粗野的
legislate	v. 用立法规定；通过立法
barrel	v. 把……装入桶内 n. 桶；枪管，炮管
output	n. 输出，输出量；产量；出产 v. 输出
antemundane	世界形成前的
delineate	v. 描绘；描写；画…的轮廓
ferocious	adj. 残忍的；惊人的
laudable	adj. 值得赞赏的
anticyclone	n. 反气旋，反旋风；高气压
manometer	n. 压力计；[流] 测压计；血压计
convert	v. 使转变；转换…；使…改变信仰 n. 皈依者；改变宗教信仰者
desertification	n. （土壤）荒漠化；沙漠化（等于desertization）
proscribe	v. 剥夺……的公权；禁止
solution	n. 解决方案；溶液；溶解；解答
modicum	n. 少量，一点点
beatify	v. 行宣福礼；使享福
transfigure	v. 使变形；使改观；美化；理想化
veneer	n. 外表；虚饰；饰面；胶合板的一层；薄木片 v. 胶合；虚饰；给…镶以饰片
devoid	adj. 缺乏的；全无的
affair	n. 事情；事务；私事；（尤指关系不长久的）风流韵事
carnivore	n. [动] 食肉动物；食虫植物
pellucid	adj. 透明的；清晰的；明了的
blase	adj. 玩厌了的，厌烦于享乐的 n. (Blase)人名；(德)布拉泽；(法)布拉斯
transverse	adj. 横向的；横断的；贯轴的 n. 横断面；贯轴；横肌
veracious	adj. 诚实的；真实的
coalescence	n. 合并；联合；接合
purport	v. 声称；意图；意指；打算 n. 意义，主旨；意图
participate	v. 参与，参加；分享
ceremonious	adj. 隆重的；讲究仪式的；正式的
unspeakable	adj. 无法形容的；不能以言语表达的；坏透了的
anachronism	n. 时代错误；不合潮流的人或物
abnormal	adj. 反常的，不规则的；变态的
pressure	n. 压力；压迫，[物] 压强 v. 迫使；密封；使……增压
palpable	adj. 明显的；可感知的；易觉察的
excerpt	n. 摘录，引用 v. 引用，摘录
aerial	adj. 空中的，航空的；空气的；空想的 n. [电讯] 天线
embarrass	v. 使局促不安；使困窘；阻碍
kinsfolk	n. 亲属；家属
regimen	n. [医] 养生法；生活规则；政体；支配
Calvinism	n. 加尔文主义；加尔文教派
ampere	n. 安培（计算电流强度的标准单位）
coil	v. 盘绕，把…卷成圈 n. 线圈；卷
hesitation	n. 犹豫
berth	n. 卧铺；停泊处，锚位；差事 v. 使……停泊；为……提供铺位
evict	v. 驱逐；逐出
punitive	adj. 惩罚性的；刑罚的
ebb	n. 衰退；退潮；衰落 v. 衰退；减少；衰落；潮退
revelation	n. 启示；揭露；出乎意料的事；被揭露的真相
triumph	n. 胜利，凯旋；欢欣 v. 获得胜利，成功
oblivious	adj. 遗忘的；健忘的；不注意的；不知道的
principal	adj. 主要的；资本的 n. 首长；校长；资本；当事人
spider	n. 蜘蛛；设圈套者；三脚架
tremor	n. [医] 震颤；颤动
frantic	adj. 狂乱的，疯狂的
conduit	n. [电] 导管；沟渠；导水管
pyre	n. 火葬用的柴堆
duplicity	n. 口是心非；表里不一；不诚实
conflagration	n. 大火；快速燃烧；突发；冲突
supplicant	n. 恳求者，乞求者
tutorship	n. 辅导；教师职位
capitulate	v. 认输，屈服；屈从，停止反抗；有条件投降；让步
despotic	adj. 暴虐的，暴君的；专横的
withstand	v. 抵挡；禁得起；反抗
stringent	adj. 严格的；严厉的；紧缩的；短缺的
jubilation	n. 喜欢；庆祝；欢呼
ratio	n. 比率，比例
persuade	v. 说服，劝说；使某人相信；劝某人做（不做）某事 adj. 空闲的，有闲的
upbraid	v. 责骂；训斥
appendage	n. 附加物；下属；[动][解剖] 附器（如植物的枝叶和动物的腿尾）
averse	adj. 反对的；不愿意的
senator	n. 参议员；（古罗马的）元老院议员；评议员，理事
ingratiate	v. 使迎合；使讨好；使逢迎
exuberant	adj. 繁茂的；生气勃勃的，充溢的
perjure	v. 作伪证；使发伪誓；使破坏誓言
nude	adj. 裸的，裸体的；无装饰的；与生俱有的 n. 裸体；裸体画
peak	n. 山峰；最高点；顶点；帽舌 v. 使达到最高点；使竖起 adj. 最高的；最大值的
reprieve	v. 缓期执行；暂时解救 n. 暂缓；缓刑
ignominious	adj. 可耻的；下流的
midway	n. 中途；娱乐场 adj. 中途的 adv. 中途
affluence	n. 富裕；丰富；流入；汇聚
emaciated	adj. 瘦弱的；憔悴的 v. 憔悴；消瘦下去（emaciate的过去分词）
aqueduct	n. [水利] 渡槽；导水管；沟渠
collage	n. 抽象拚贴画（用报纸、布、压平的花等碎片拼合而成的） vt. 把…创作成拼贴画，拼贴
unveil	v. 使公之于众，揭开；揭幕
disastrous	adj. 灾难性的；损失惨重的；悲伤的
vestige	n. 遗迹；残余；退化的器官
tabulate	adj. 平板状的；有平面的 v. 使成平面；把…制成表格
needlework	n. 刺绣，缝纫；女红的作品
fraternal	adj. 兄弟般的；友好的
commemorate	v. 庆祝，纪念；成为…的纪念
repine	v. 抱怨；不满
unanimous	adj. 全体一致的；意见一致的；无异议的
alienate	v. 使疏远，离间；让与
unscrupulous	adj. 肆无忌惮的；寡廉鲜耻的；不讲道德的
volume	n. 量；体积；卷；音量；大量；册 adj. 大量的 vi. 成团卷起 vt. 把…收集成卷
debase	v. 降低；使…贬值；掺杂 n. (Debase)人名；(意)德巴塞
precede	v. 领先，在…之前；优于，高于
disagreeable	adj. 不愉快的；厌恶的；不为人喜的；难相处的；脾气坏的
heinous	adj. 可憎的；极凶恶的
distressed	adj. 痛苦的；忧虑的；贫困的；受损的 v. 使痛苦；使紧张；使困苦（distress的过去分词）
expression	n. 表现，表示，表达；表情，脸色，态度，腔调，声调；式，符号；词句，语句，措辞，说法
successor	n. 继承者；后续的事物
counselor	n. 顾问；法律顾问；参事（等于counsellor）
supplicate	v. 恳求，哀求；恳请
ossify	v. 骨化；硬化；僵化
ablution	n. 洗礼；洗澡（常用复数）；斋戒沐浴
balance	n. 平衡；余额；匀称 v. 使平衡；结算；使相称
propagate	v. 传播；传送；繁殖；宣传
approximately	adv. 大约，近似地；近于
sufficiency	n. 足量，充足；自满
collide	v. 碰撞；抵触，冲突
squalid	adj. 肮脏的；污秽的；卑劣的
distillation	n. 精馏，蒸馏，净化；蒸馏法；精华，蒸馏物
superb	adj. 极好的；华丽的；宏伟的 n. (Superb)人名；(罗)苏佩尔布
contemptible	adj. 可鄙的；卑劣的；可轻视的
breakdown	n. 故障；崩溃；分解；分类；衰弱；跺脚曳步舞
accountant	n. 会计师；会计人员
colloquial	adj. 白话的；通俗的；口语体的
impale	v. 刺穿；钉住；使绝望
reclusive	adj. 隐居的；隐遁的
jingoism	n. 侵略主义；沙文主义；武力外交政策
ratify	v. 批准；认可
collier	n. 矿工；运煤船
brooch	n. （女用的）胸针，领针
bemoan	v. 惋惜；为…恸哭
arguable	adj. 可论证的；可议的；可疑的
nitrogen	n. [化学] 氮
legislative	adj. 立法的；有立法权的 n. 立法权；立法机构
workmanlike	adj. 技术熟练的；精工细作的
multiplication	n. [数] 乘法；增加
natal	adj. 出生的；诞生的；分娩的；出生地的 n. (Natal)人名；(英、法、西、葡)纳塔尔
redirect	v. 使改方向；重新寄送 adj. 再直接的 n. 再直接询问
Catholicism	n. 天主教；天主教义
defendant	adj. 辩护的；为自己辩护的 n. 被告
abnegate	v. 放弃；舍弃；禁忌
treacherous	adj. 奸诈的，叛逆的，背叛的；危险的；不牢靠的
parallel	n. 平行线；对比 v. 使…与…平行 adj. 平行的；类似的，相同的
diameter	n. 直径
uniform	adj. 统一的；一致的；相同的；均衡的；始终如一的 n. 制服 v. 使穿制服；使成一样
abdomen	n. 腹部；下腹；腹腔
stimulate	v. 刺激；鼓舞，激励
nadir	n. 最低点，最底点；[天] 天底
indefinitely	adv. 不确定地，无限期地；模糊地，不明确地
replicate	v. 复制；折叠 adj. 复制的；折叠的 n. 复制品；八音阶间隔的反覆音
discriminate	v. 歧视；区别；辨别
foretell	v. 预言；预示；预告
irate	adj. 生气的；发怒的
curmudgeon	n. 脾气坏的人，乖戾的人；吝啬鬼；存心不良的人
endue	v. 授予，赋予；穿上
numerical	adj. 数值的；数字的；用数字表示的（等于numeric）
extol	v. 颂扬；赞美；赞颂
olfactory	adj. 嗅觉的；味道的 n. 嗅觉器官
electrolyte	n. 电解液，电解质；电解
fabulous	adj. 难以置信的；传说的，寓言中的；极好的
choir	n. 唱诗班；合唱队；舞蹈队 v. 合唱
ruinous	adj. 破坏性的，毁灭性的；零落的
aborigine	n. 土著；土著居民
hundredth	adj. 第一百的；一百分之一的 n. 第一百，第一百个；百分之一
intriguing	adj. 有趣的；迷人的 v. 引起…的兴趣；策划阴谋；私通（intrigue的ing形式）
acerbity	n. 酸，涩；刻薄
sympathetic	adj. 同情的；交感神经的；共鸣的；赞同的；和谐的；合意的 n. 交感神经；容易感受的人
swerve	v. 转弯；突然转向；背离 n. 转向；偏离的程度
whim	n. 奇想；一时的兴致；怪念头；幻想
determinate	adj. 确定的；决定的 vt. 确定；弄清楚
coagulate	v. 使…凝结
capillary	n. 毛细管 adj. 毛细管的；毛状的
biped	adj. 有两足的 n. 两足动物
supplant	v. 代替；排挤掉
tenacious	adj. 顽强的；坚韧的；固执的；紧握的；黏着力强的
laser	n. 激光
effervescent	adj. 冒泡的，沸腾的；兴奋的
assuage	v. 平息；缓和；减轻
occupant	n. 居住者；占有者
gene	n. [遗] 基因，遗传因子
frigid	adj. 寒冷的，严寒的；冷淡的
recreant	n. 懦夫；叛徒 adj. 胆小的；怯懦的；不忠的
pompous	adj. 自大的；浮夸的；华而不实的；爱炫耀的
theorem	n. [数] 定理；原理
antiquary	n. 古文物研究者；古董商人；收集古文物者
clothier	n. 衣庄；呢绒商
dormancy	n. [生物] 休眠，冬眠；[生物] 蛰伏
exoskeleton	n. [昆] 外骨骼
geometry	n. 几何学
impetus	n. 动力；促进；冲力
bronchus	n. 支气管
glamorize	v. 美化；使有魅力
proliferate	v. 增殖；扩散；激增
absolve	v. 免除；赦免；宣告…无罪
bethink	v. 想起，忆起；使……思考；使……考虑
amplitude	n. 振幅；丰富，充足；广阔
antiquate	v. 废弃；使…过时；使…具有古旧形式或风格 adj. 过时的；旧式的
series	n. 系列，连续；[电] 串联；级数；丛书
condenser	n. 冷凝器；[电] 电容器；[光] 聚光器
desultory	adj. 断断续续的；散漫的；不连贯的，无条理的
interval	n. 间隔；间距；幕间休息
pernicious	adj. 有害的；恶性的；致命的；险恶的
caste	n. （印度社会中的）种姓；（具有严格等级差别的）社会地位；（排他的）社会团体
principle	n. 原理，原则；主义，道义；本质，本义；根源，源泉
inspiring	adj. 鼓舞人心的；灌输的；启发灵感的 v. 鼓舞；激发；使感悟（inspire的ing形式）
adjustment	n. 调整，调节；调节器
animadvert	v. 批判；非难；责备
withdraw	v. 撤退；收回；撤消；拉开
extortion	n. 勒索；敲诈；强夺；被勒索的财物
amorphous	adj. 无定形的；无组织的；[物] 非晶形的
semiannual	adj. 一年两次的；半年一次的
realism	n. 现实主义；实在论；现实主义的态度和行为
vagabond	adj. 流浪的；流浪者的；浪荡的；漂泊的 n. 流浪者；浪子；流氓；懒汉 v. 到处流浪
immune	adj. 免疫的；免于……的，免除的 n. 免疫者；免除者
subsequent	adj. 后来的，随后的
indiscreet	adj. 轻率的；不慎重的
homage	n. 敬意；尊敬；效忠
outcome	n. 结果，结局；成果
valorous	adj. 勇敢的；勇武的
irritable	adj. 过敏的；急躁的；易怒的
apposition	n. 并置，同格；同位语
beguile	v. 欺骗；使着迷；轻松地消磨
amorous	adj. 多情的；恋爱的；热情的；色情的
overrun	n. 泛滥成灾；超出限度 v. 泛滥；超过；蹂躏
amok	adv. 狂乱地；杀人狂地 adj. 杀人狂的；狂乱的
commingle	v. 使混合；掺和
dismiss	v. 解散；解雇；开除；让离开；不予理会、不予考虑
cacophony	n. 刺耳的音调；不和谐音
atom	n. 原子
prowess	n. 英勇；超凡技术；勇猛
selective	adj. 选择性的
recreate	v. 娱乐；消遣
wearisome	adj. 使疲倦的；使厌倦的；乏味的
abrade	v. 擦伤；磨损
lethargy	n. 昏睡；死气沉沉；嗜眠（症）
politic	adj. 精明的；有策略的；狡猾的；审慎的；政治的 vi. 拉选票
armada	n. （西班牙的）无敌舰队
incessant	adj. 不断的；不停的；连续的
humiliate	v. 羞辱；使…丢脸；耻辱
niggardly	adj. 小气的；很少量的 adv. 小气地；很少量地
conciliatory	adj. 安抚的；调和的；调停的
ration	v. 配给；定量供应 n. 定量；口粮；配给量
velvety	adj. 天鹅绒般柔软的；醇和的，可口的
preposterous	adj. 荒谬的；可笑的
pious	adj. 虔诚的；敬神的；可嘉的；尽责的
flag	v. 标记；衰退；枯萎 n. 标志；旗子
liquid	adj. 液体的；清澈的；明亮的；易变的 n. 液体，流体；流音
permanent	adj. 永久的，永恒的；不变的 n. 烫发（等于permanent wave）
plethora	n. 过多；过剩；[医] 多血症
bibliomania	n. 藏书癖；（尤指珍本书）收藏狂
vociferous	adj. 大声叫的；喊叫的，喧嚷的
adjunct	n. 附属物；助手；修饰语 adj. 附属的
transpire	v. 发生；蒸发；泄露
hemorrhage	n. [病理] 出血（等于haemorrhage）；番茄汁 v. [病理] 出血
gravity	n. 重力，地心引力；严重性；庄严
utilitarian	adj. 功利的；功利主义的；实利的 n. 功利主义者
acquiescence	n. 默许；默从
frivolous	adj. 无聊的；轻佻的；琐碎的
polytechnic	adj. 各种工艺的；综合技术的 n. 工艺学校；理工专科学校
demise	n. 死亡，终止；转让；传位 vt. 遗赠；禅让
pantomime	n. 哑剧；舞剧；手势 v. 打手势；演哑剧
shroud	n. 寿衣；覆盖物；船的横桅索；[电] 护罩 v. 覆盖；包以尸衣
eccentric	adj. 古怪的，反常的 n. 古怪的人
laud	v. 赞美；称赞 n. 赞美；称赞；颂歌
betimes	adv. 及时，准时；早
suspect	n. 嫌疑犯 adj. 可疑的；不可信的 v. 怀疑；猜想
bilingual	adj. 双语的 n. 通两种语言的人
recluse	n. 隐士；隐居者 adj. 隐居的
subjacent	adj. 在底下的；在下级的
studious	adj. 用功的；热心的；专心的；故意的；适于学习的
begrudge	v. 羡慕，嫉妒；吝惜，舍不得给
judicature	n. 司法；法官；司法权；法官的职位
gullible	adj. 易受骗的；轻信的
facsimile	n. 传真；复写 adj. 复制的 v. 传真；临摹
violation	n. 违反；妨碍，侵害；违背；强奸
jade	n. 翡翠；[宝] 碧玉；老马 adj. 玉制的；绿玉色的 v. 疲倦
transition	n. 过渡；转变；[分子生物] 转换；变调
whet	v. 刺激；磨快；促进 n. 磨；开胃物；刺激物
section	n. 截面；部分；部门；地区；章节 v. 被切割成片；被分成部分
lave	v. 洗；沐浴；冲刷 n. 剩余物
witling	n. 玩弄小聪明的人
embezzle	v. 盗用；挪用；贪污
absorb	v. 吸收；吸引；承受；理解；使…全神贯注
cessation	n. 停止；中止；中断
kudos	n. 荣誉；名望；称赞
influx	n. 流入；汇集；河流的汇集处
summary	adj. 简易的；扼要的 n. 概要，摘要，总结
chattel	n. 动产；奴隶（常用复数）
tangential	adj. [数] 切线的，[数] 正切的；离题的，扯远的 n. 正切，切线
reclamation	n. 开垦；收回；再利用；矫正
socialize	v. 使社会化；使社会主义化；使适应社会生活
comport	v. 行为；举动
unsettle	v. 使动摇；使不安定；使心神不宁
misstep	n. 失足；过失；踏错；失策 vi. 失足；走上歧途
hexagon	n. 六角形，六边形 adj. 成六角的；成六边的
urgency	n. 紧急；催促；紧急的事
felicity	n. 幸福；快乐；幸运
infinitesimal	adj. 无穷小的；无限小的；极小的 n. 无限小；极微量；极小量
reprehend	v. 申斥；指责 n. 责备
subsidize	v. 资助；给与奖助金；向…行贿
antiquarian	adj. 古文物研究的；古文物的 n. 古文物研究者；[古] 古文物收藏家
panacea	n. 灵丹妙药；万能药
cordial	adj. 热忱的，诚恳的；兴奋的 n. 补品；兴奋剂；甜香酒，甘露酒
amass	v. 积聚，积累
option	n. [计] 选项；选择权；买卖的特权
exhale	v. 呼气；发出；发散；使蒸发
volatile	adj. [化学] 挥发性的；不稳定的；爆炸性的；反复无常的 n. 挥发物；有翅的动物
bronchitis	n. [内科] 支气管炎
contend	v. 竞争；奋斗；斗争；争论
entreaty	n. 恳求；乞求
nebulous	adj. 朦胧的；星云的，星云状的
bight	n. 海湾，绳圈；曲线
momentous	adj. 重要的；重大的
catalog	n. [图情][计] 目录；登记 v. 登记；为…编目录
cell	n. 细胞；电池；蜂房的巢室；单人小室 vi. 住在牢房或小室中
moo	v. 发出哞哞声 n. 牛叫声
severely	adv. 严重地；严格地，严厉地；纯朴地
pedal	v. 踩踏板；骑车 n. 踏板；脚蹬子 adj. 脚的；脚踏的
quietus	n. 解除；偿清；生命的终止；寂灭
importunate	adj. 强求的，纠缠不休的
salutary	adj. 有益的，有用的；有益健康的
aberration	n. 失常；离开正路，越轨
inestimable	adj. 无价的；难以估计的
insatiable	adj. 贪得无厌的；不知足的
shrewd	adj. 精明的；狡猾的；机灵的 n. 精明（的人）；机灵（的人）
sensational	adj. 轰动的；耸人听闻的；非常好的；使人感动的
assurance	n. 保证，担保；（人寿）保险；确信；断言；厚脸皮，无耻
frank	adj. 坦白的，直率的；老实的 n. 免费邮寄特权 v. 免费邮寄
juxtapose	v. 并列；并置
data	n. 数据（datum的复数）；资料
recapture	v. 夺回；拿回；再体验；政府征收再经历 n. 夺回；取回；政府对公司超额收益或利润的征收
alleged	adj. 所谓的；声称的；被断言的 v. 宣称（allege的过去式和过去分词）；断言
witness	n. 证人；目击者；证据 v. 目击；证明；为…作证
entrance	n. 入口；进入 v. 使出神，使入迷
reprehensible	adj. 应斥责的；应该谴责的
browbeat	v. 恫吓，吓唬；欺侮
explicate	v. 说明，解释
vivacity	n. 活泼；快活；精神充沛
cabal	n. 阴谋（尤指政治上的）；阴谋集团 v. 策划阴谋
equation	n. 方程式，等式；相等；[化学] 反应式
perspicacity	n. 洞察力；聪颖；睿智
nuance	n. 细微差别
electrification	n. 电气化；带电；充电
proton	n. [物] 质子
bedaub	v. 俗气地装饰；涂污
beneficence	n. 慈善；善行；捐款
terminus	n. 终点；终点站；界标；界石
presage	n. 预感；前兆 v. 预感；预言
territorial	adj. 领土的；区域的；土地的；地方的 n. 地方自卫队士兵
navigate	v. 驾驶，操纵；使通过；航行于
posthumous	adj. 死后的；遗腹的；作者死后出版的
brag	n. 吹牛，自夸 v. 吹牛，自夸
brae	n. 斜坡；山坡
credence	n. 信任；凭证；祭器台（等于credence table，credenza）
stifle	v. 扼杀；使窒息；藏匿 n. （马等的）后膝关节；（马等的）[动] 后膝关节病
transmute	v. 使变形；使变质
pertinacity	n. 顽固；执拗
altercation	n. 争执
essence	n. 本质，实质；精华；香精
oversee	v. 监督；审查；俯瞰；偷看到，无意中看到
bray	v. 叫；捣碎 n. 驴叫声；喇叭声
inborn	adj. 天生的；先天的
blandishment	n. 奉承；谄媚；哄诱
impropriety	n. 不适当；不正确；用词错误；[审计] 不正当行为
contemptuous	adj. 轻蔑的；侮辱的
mirage	n. 海市蜃楼；幻想，妄想
exhilarate	v. 使高兴，使振奋；使愉快
emanate	v. 放射（过去式emanated，过去分词emanated，现在分词emanating，第三人称单数emanates，形容词emanative）；发散
expand	v. 扩张；使膨胀；详述
hydroxide	n. [无化] 氢氧化物；羟化物
indigenous	adj. 本土的；土著的；国产的；固有的
incipient	adj. 初期的；初始的；起初的；发端的
collapse	v. 倒塌；瓦解；暴跌 n. 倒塌；失败；衰竭
boisterous	adj. 喧闹的；狂暴的；猛烈的
maintenance	n. 维护，维修；保持；生活费用
alternative	adj. 供选择的；选择性的；交替的 n. 二中择一；供替代的选择
venal	adj. 贪污的；用金钱买得的；贿赂的；贪赃枉法的 n. (Venal)人名；(英)维纳尔
emerge	v. 浮现；摆脱；暴露
inalterable	adj. 不变的；不能变更的
concupiscence	n. 强烈的邪欲
mediocre	adj. 普通的；平凡的；中等的
prosaic	adj. 平凡的，乏味的；散文体的
comparative	adj. 比较的；相当的 n. 比较级；对手
repel	v. 击退；抵制；使厌恶；使不愉快
commensurate	adj. 相称的；同量的；同样大小的
overdose	v. 配药过量；使过分沉溺 n. 药量过多（等于overdosage）
solace	n. 安慰；慰藉；安慰之物 v. 安慰；抚慰；使快乐（过去式solaced，过去分词solaced，现在分词solacing，第三人称单数solaces）
clumsy	adj. 笨拙的
liquor	n. 酒，含酒精饮料；溶液；液体；烈酒 vi. 喝酒，灌酒 vt. 使喝醉
harangue	n. 长篇大论；高谈阔论；热烈的演说 v. 向…滔滔不绝地演讲；大声训斥
weight	n. 重量，重力；负担；砝码；重要性 v. 加重量于，使变重
density	n. 密度
stratagem	n. 策略；计谋
perception	n. 知觉；[生理] 感觉；看法；洞察力；获取
transience	n. 短暂；无常；顷刻（等于transiency）
carcass	n. （人或动物的）尸体；残骸；（除脏去头备食用的）畜体
impassive	adj. 冷漠的；无感觉的
phlegmatic	adj. 冷淡的；迟钝的；冷漠的
pyromania	n. 放火狂；纵火癖
withhold	v. 保留，不给；隐瞒；抑制
elliptical	adj. 椭圆的；省略的
galore	adv. 丰富地 adj. 丰富的；大量的
bumptious	adj. 傲慢的；瞎自夸的
pedestrian	adj. 徒步的；缺乏想像力的 n. 行人；步行者
nefarious	adj. 邪恶的；穷凶极恶的；不法的
pillory	v. 给…上颈手枷；使…惹人嘲笑 n. 示众；颈手枷；使惹人嘲笑
incisive	adj. 深刻的；敏锐的；锋利的
aspirant	n. 有抱负的人；野心家 adj. 上进的；有野心的
injurious	adj. 有害的；诽谤的
ameliorate	v. 改善；减轻（痛苦等）；改良
scarcity	n. 不足；缺乏
illusion	n. 幻觉，错觉；错误的观念或信仰
humid	adj. 潮湿的；湿润的；多湿气的
proclamation	n. 公告；宣布；宣告；公布
gloat	v. 幸灾乐祸；心满意足地注视 n. 幸灾乐祸；贪婪的盯视；洋洋得意
vortex	n. [航][流] 涡流；漩涡；（动乱，争论等的）中心；旋风
vogue	n. 时尚；流行，时髦 adj. 时髦的，流行的
admonition	n. 警告
cholera	n. [内科] 霍乱
cohesive	adj. 凝聚的；有结合力的；紧密结合的；有粘着力的
cadence	n. 节奏；韵律；抑扬顿挫
elude	v. 逃避，躲避
omnipotent	adj. 无所不能的；全能的；有无限权力的
hackneyed	adj. 陈腐的；平庸的 v. 出租（马匹、马车等）；役使（hackney的过去式）
coagulant	n. [建][化工] 促凝剂；凝血剂；凝结剂
reverent	adj. 虔诚的；恭敬的；尊敬的
sinister	adj. 阴险的；凶兆的；灾难性的；左边的
dilatory	adj. 拖拉的；缓慢的，不慌不忙的
aggregate	v. 集合；聚集；合计 n. 合计；集合体；总计 adj. 聚合的；集合的；合计的
preponderate	v. （在重量、数量、力量等方面）占优势
altitude	n. 高地；高度；[数] 顶垂线；（等级和地位等的）高级；海拔
perceptive	adj. 感知的，知觉的；有知觉力的
obstruct	v. 妨碍；阻塞；遮断
discountenance	v. 使丢脸；不赞成；使慌张 n. 不赞成
center	n. 中心，中央；中锋；中心点 v. 居中，被置于中心 adj. 中央的，位在正中的
ether	n. 乙醚；[有化] 以太；苍天；天空醚
advisory	adj. 咨询的；顾问的；劝告的 n. 报告；公告
behold	v. 看；注视；把视为 int. 瞧；看呀
prerogative	n. 特权 adj. 有特权的
irreparable	adj. 不能挽回的；不能修补的
soluble	adj. [化学] 可溶的，可溶解的；可解决的
cohesion	n. 凝聚；结合；[力] 内聚力
awkward	adj. 尴尬的；笨拙的；棘手的；不合适的
ascent	n. 上升；上坡路；登高
ambitious	adj. 野心勃勃的；有雄心的；热望的；炫耀的
imaginative	adj. 富于想象的；有创造力的
tempt	v. 诱惑；引起；冒…的风险；使感兴趣
pipette	n. 移液管；吸移管 vt. 用移液器吸取
celibate	n. 独身者 adj. 独身的；禁欲的
brevity	n. 简洁，简短；短暂，短促
intentional	adj. 故意的；蓄意的；策划的
overwhelming	adj. 压倒性的；势不可挡的 v. 压倒；淹没（overwhelm的ing形式）；制服
culmination	n. 顶点；高潮
malignancy	n. 恶性（肿瘤等）；恶意
impair	v. 损害；削弱；减少
reaction	n. 反应，感应；反动，复古；反作用
collaboration	n. 合作；勾结；通敌
habitude	n. 习俗；习惯
attest	v. 证明；证实；为…作证
stingy	adj. 吝啬的，小气的；有刺的；缺乏的
overpass	vt. 超越；胜过；忽略 n. 天桥；陆桥
circumlocution	n. 婉转曲折的说法，累赘的陈述；遁辞
proctor	n. 代理人；学监 v. 监督
impotent	adj. 无力的；无效的；虚弱的；阳萎的
contest	v. 争辩；质疑 n. 竞赛；争夺；争论
escalate	v. 逐步增强；逐步升高
regnant	adj. 统治的；占优势的；流行的，广泛的
version	n. 版本；译文；倒转术
extrude	v. 挤出，压出；使突出；逐出
rectangle	n. 矩形；长方形
apprentice	n. 学徒；生手 v. 使…当学徒
tendency	n. 倾向，趋势；癖好
acquired	adj. [医] 后天的；已获得的；已成习惯的 v. 取得；捕获（acquire的过去分词）
smelt	v. 熔炼，冶炼；精炼 n. 香鱼；胡瓜鱼
elongate	v. 拉长；使延长；使伸长 adj. 伸长的；延长的
campaign	v. 作战；参加竞选；参加活动 n. 运动；活动；战役
alchemy	n. 点金术；魔力
ubiquitous	adj. 普遍存在的；无所不在的
mastermind	v. 策划 n. 优秀策划者；才子
voracious	adj. 贪婪的；贪吃的；狼吞虎咽的
trigger	v. 引发，引起；触发 n. 扳机；[电子] 触发器；制滑机
corporal	adj. 肉体的，身体的 n. 下士
blaspheme	v. 亵渎；咒骂，辱骂
slit	v. 撕裂；使有狭缝 n. 裂缝；投币口
thermometer	n. 温度计；体温计
lyric	adj. 抒情的；吟唱的 n. 抒情诗；歌词
collagen	n. [生化] 胶原，胶原质
Aluminum	n. 铝
aeronaut	 n. 飞船或气球驾驶员；飞船或气球乘客
rhetorical	 adj. 修辞的；修辞学的；夸张的
juridical	 adj. 司法的；法院的；裁判上的
aerosol	 n. [物化] 气溶胶；气雾剂；喷雾器；浮质 adj. 喷雾的；喷雾器的
spartan	 adj. 斯巴达的；斯巴达式的；（生活方式）简朴的，清苦的。 n. 斯巴达人；勇士
inveigh	 v. 痛骂；漫骂；猛烈抨击
plebeian	 adj. 平民的；普通的；粗俗的 n. 平民；百姓；粗俗的人
remorse	 n. 懊悔；同情
comprehensible	 adj. 可理解的
spectacle	 n. 景象；场面；奇观；壮观；公开展示；表相，假相 n（复）眼镜
impact	 n. 影响；效果；碰撞；冲击力 v. 挤入，压紧；撞击；对…产生影响
tact	 n. 机智；老练；圆滑；鉴赏力
imprudent	 adj. 轻率的，鲁莽的；不小心的
cooling	 adj. 冷却的 n. 冷却
power	 n. 力量，能力；电力，功率；政权，势力；[数] 幂 v. 激励；供以动力；使…有力量 adj. 借影响有权势人物以操纵权力的
remembrance	 n. 回想，回忆；纪念品；记忆力
dais	 n. 讲台
pastoral	 adj. 牧师的；牧人的；田园生活的；乡村的 n. 牧歌；田园诗；田园景色
hazardous	 adj. 有危险的；冒险的；碰运气的
redolent	 adj. 芬芳的；有…香味的；令人想起…的
irreversible	 adj. 不可逆的；不能取消的；不能翻转的
preponderant	 adj. 占优势的；突出的；压倒性的
cartilage	 n. 软骨
spurious	 adj. 假的；伪造的；欺骗的
misnomer	 n. 用词不当；误称；写错姓名
antiseptic	 adj. 防腐的，抗菌的；非常整洁的 n. 防腐剂，抗菌剂
collective	 adj. 集体的；共同的；集合的；集体主义的 n. 集团；集合体；集合名词
prevalent	 adj. 流行的；普遍的，广传的
queasy	 adj. 呕吐的；不稳定的；催吐的
delusion	 n. 迷惑，欺骗；错觉；幻想
catabolism	 n. [生化] 分解代谢
kiln	 vt. 烧窑；在干燥炉干燥 n. （砖，石灰等的）窑；炉；干燥炉
bide	 v. 等待；面临；禁得起
subjective	 adj. 主观的；个人的；自觉的
monetary	 adj. 货币的；财政的
filter	 v. 滤过；渗入；慢慢传开 n. 滤波器；[化工] 过滤器；筛选；滤光器
incorrigible	 adj. 不可救药的；积习难改的 n. 不可救药的人
chivalry	 n. 骑士精神（复数chivalries）；骑士制度
constituent	 n. 成分；选民；委托人 adj. 构成的；选举的
redoubtable	 adj. 可怕的；令人敬畏的
invaluable	 adj. 无价的；非常贵重的
surrogate	 n. 代理；代用品；遗嘱检验法官 vt. 代理；指定某人为自己的代理人 adj. 代理的；替代的
esophagus	 n. [解剖] 食管；[解剖] 食道
parameter	 n. 参数；系数；参量
dissemble	 v. 掩饰，掩盖；假装
order	 n. 命令；顺序；规则；[贸易] 定单 v. 命令；整理；定购
appellate	 adj. 上诉的；受理上诉的
psychic	 adj. 精神的；心灵的；灵魂的；超自然的 n. 灵媒；巫师
scapegoat	 n. 替罪羊，替人顶罪者；替身 vt. 使成为…的替罪羊
conjecture	 n. 推测；猜想 v. 推测；揣摩
habitual	 adj. 习惯的；惯常的；习以为常的
requisite	 adj. 必备的，必不可少的；需要的 n. 必需品
steadfast	 adj. 坚定的；不变的
exempt	 v. 免除；豁免 adj. 被免除的；被豁免的 n. 免税者；被免除义务者
depreciate	 v. 使贬值；贬低；轻视
aurora	 n. [地物] 极光；曙光
origin	 n. 起源；原点；出身；开端
unisonous	 adj. 同音的；和谐的
surcharge	 n. 超载；额外费 v. 追加罚款；使…装载过多；使…负担过重
flamboyant	 adj. 艳丽的；火焰似的；炫耀的 n. 凤凰木
assiduity	 n. 勤勉；刻苦；殷勤
stratify	 v. 分层；成层；使形成阶层
composure	 n. 镇静；沉着
decisive	 adj. 决定性的；果断的，坚定的
administrator	 n. 管理人；行政官
context	 n. 环境；上下文；来龙去脉
forgery	 n. 伪造；伪造罪；伪造物
insinuate	 v. 暗示；使逐渐而巧妙地取得；使迂回地潜入
clientele	 n. 客户；诉讼委托人
misdeed	 n.  罪行， 犯罪
recline	 v.  向后靠， 斜倚
belligerent	 adj.  好战的， 好斗的； 交战国的； 交战的
supplant	 v.  排挤掉， 代替
abrupt	 adj.  突然的， 意外的；  唐突的， 鲁莽的
oversee	 v.  监视； 检查； 视察
spontaneous	 adj.  自发的， 自然产生的
pretend	 v.  假装；  装扮； 骗…说
licit	 adj.  合法的， 正当的
gloomy	 adj.  令人沮丧的， 抑郁的； 阴沉的， 阴暗的
warrant	 v.  保证， 担保 n. 正当理由；许可证，委任状
scanty	 adj.  缺乏的， 不足的
energy	 n.  能量
deference	 n.  顺从， 尊重
solid	 adj. 固体的；坚硬的 n. 固体
opulent	 adj.  富裕的， 丰富的
narrative	 adj. 叙述的；有故事性的 n.  叙述， 记叙文
coincide	 v.  一致， 符合
circular	 adj.  圆形的； 环形的
prankster	 n.  顽皮的人， 爱开玩笑的人
compassionate	 adj.  富于同情心的
perspicacity	 n.  聪明； 敏锐； 洞察力
irritable	 adj.  易怒的， 急躁的
triple	 adj. 三部分的，三方的；三倍的，三重的 v.  使增至三倍
reserved	 adj.  保留的， 留作专用的； 缄默的， 有节制的， 冷淡的
temper	 n. 脾气，情绪 vt.  调和， 调节
munificence	 n.  宽宏大量； 慷慨
legible	 adj.  清楚的， 易读的
resumption	 n.  恢复， 再开始
resurgent	 adj.  复活的
frantic	 adj.  狂乱的， 疯狂的
grandiloquent	 adj.  夸张的， 浮夸的， 华而不实的
statute	 n.  成文法； 法令， 法规； 章程， 规则； 条例
cardiac	 adj.  心脏的
object	 n.  物体
accessible	 adj.  易接近的， 可达到的； 易受影响的； 可理解的
indigence	 n.  贫乏； 穷困
notable	 adj.  值得注意的； 显著的， 著名的
concede	 vt.   承认， 承认…为真  ；  承认失败； 允许， 让予
unparalleled	 adj.  无比的， 无双的， 空前的
midway	 n.  中途
venous	 adj.  静脉的
reprimand	 n.  严责， 惩戒
wreak	 v.  发泄； 报仇
evaporate	 vt.   蒸发
commission	 n. 委任，委托，代办，代理；犯；佣金 vt.  委任， 任命， 委托； 委托制作
multiplication	 n.  乘法
rational	 adj.  理性的； 合理的
rescind	 v.  废除； 取消
provocative	 adj.  挑衅的； 惹人讨厌的
glucose	 n.  葡萄糖
Oxygen	 n.  氧
salt	 n.  盐
impassioned	 adj.  热情洋溢的
truncated	 adj.  缩短了的； 截形的
artistic	 adj.  艺术  的， 美术  的； 有美感的； 风雅的
effrontery	 n.  厚颜无耻
decagon	 n.  十角形， 十边形
ramble	 v.  漫游； 漫谈， 闲聊
vocation	 n.  职业， 业务
preponderant	 adj.  占有优势的
stature	 n.  身高， 身材
quarantine	 n.  检疫期
dogged	 adj.  顽固的， 顽强的
plasma	 n.  等离子体
brevity	 n.   短暂；  简短
exorbitant	 adj.  过度的； 过高的； 昂贵的
reimburse	 v.  偿还
violent	 adj.  猛烈的， 激烈的； 暴力引起的， 强暴的
inaccessible	 adj.  不可接近的
confront	 v.  使面临， 使遭遇； 面对
onus	 n.  责任； 负担
cathartic	 n. 泻药；
counterpoint	 n.  对音位； 对应物
obese	 adj.  肥胖的， 过胖的
undulate	 v.  波动， 起伏， 成波浪形
beatific	 adj.  祝福的； 快乐的， 幸福的
reproduce	 v.  翻版； 繁殖； 复制； 再现
skeleton	 n.  骨骼
illiterate	 adj.  文盲的， 未受教育的
federate	 v.  使联合， 使结成同盟
myriad	 adj.  无数的； 一万的
inflammable	 adj.  易燃的
pervade	 v.  遍及
implement	 v.  贯彻， 实现 n. 工具，器具
erratic	 adj.  不规律的； 不稳定的
justifiable	 adj.  有理由的； 可辩护的
incinerate	 v.  把…烧成灰， 烧掉， 火化
cajolery	 n.  甜言蜜语； 诱骗； 谄媚
adoration	 n.  崇拜， 爱慕
sagacious	 adj.  有洞察力的， 有远见的； 精明的， 敏锐的
capillary	 adj.  毛状的； 毛细血管的 n. 毛细管
erode	 v.  侵蚀， 腐蚀； 使变化
beset	 vt.  困扰
nestle	 v.  舒适地安顿下来
frustrate	 v.  挫败， 阻挠， 使灰心； 阻止
sparse	 adj.  稀少的， 稀疏的
pragmatic	 adj.  实际的； 注重实效的
anticyclone	 n.  反气旋， 高气压
erosion	 n.  腐蚀， 磨损， 侵蚀； 削弱， 减少
methane	 n.  甲烷
plenteous	 adj.  许多的， 丰饶的， 充足的， 丰富的
superstitious	 adj.  迷信的
neural	 adj.  神经系统的
embezzle	 v.  盗用； 挪用
absent-minded	 adj.  心不在焉的， 出神的
elasticity	 n.  弹性
aboriginal	 adj. 土著的，原始的 n.  土著居民
emollient	 adj. 柔软的；有缓和作用的 n.  润肤剂
lens	 n.  透镜
embody	 v.  体现， 使具体化
regale	 v.  使愉悦， 使高兴
tripod	 n.  三脚桌； 三脚架
verifiable	 adj.  可证实的
comprehensible	 adj.  可理解的， 易于了解的
ascent	 n.  上升；  提高； 攀登； 上坡路
emancipate	 vt.  解放， 解除
elliptical	 adj.  椭圆的
root	 n.  方根； 方程的根
possessive	 adj.  所有的， 占有的 n. 所有格
hedonism	 n.  享乐主义
projection	 v.  发射； 计划； 投影
multiply	 v.  乘
preponderate	 v.  占优势， 超过， 胜过
iridescent	 adj.  彩虹色的；  闪光的
approval	 n.  赞成， 同意； 认可， 批准
cartilage	 n.  【解】 软骨
multiple	 adj. 多倍的，
adjuration	 n.  恳请， 请愿
requite	 v.  报答， 酬谢
versatile	 adj.  通用的， 万用的； 多才多艺的， 多方面的
magnet	 n.  磁体
bemoan	 v.  哀叹
avow	 vt.  公开声明； 承认
tundra	 n.  苔原； 冻土地带
explosion	 n.  爆炸
aggrieve	 v.  使委屈； 使苦恼； 侵害
haggard	 adj.  憔悴的， 形容枯槁的； 野性的
omnivorous	 adj.  杂食的
poignant	 adj.  强烈的； 尖刻的
translation	 n.  平移
cancer	 n.  癌症
personnel	 n.  全体人员， 全体职员； 人事
bestride	 v.  骑
refractory	 adj.  难控制的
biodegradable	 adj.  生物可降解的
irrelevant	 adj.  不相关的， 不切题的
pile	 n.  电池组
artistry	 n.  艺术技巧； 艺术性
catalog	 n.  目录； 目录册
hilarious	 adj.  欢闹的
immortal	 adj.  不死的； 不会消亡的
chilly	 adj.  寒冷的； 冷淡的
conjecture	 v.  推测， 猜想
myth	 n.  神话； 虚构的理论， 荒诞的说法
experiment	 n.  实验
implication	 n.  含意， 暗示
cordial	 adj.  诚恳的， 亲切的， 热诚的
odorous	 adj.  有气味的
order	 n.  顺序； 订单
carrion	 n.  死肉； 腐肉
vocative	 adj.  呼唤的
aghast	 adj.  惊骇的， 吓呆的
scurrilous	 adj.  说话粗鄙恶劣的； 下流的
modulate	 vt.  调整， 调节
indelible	 adj.  去不掉的， 不能拭除的
felicity	 n.  幸福， 幸运， 福气
resonance	 n.  共鸣， 回声， 反响； 共振
gaiety	 n.  高兴， 快乐； 作乐， 欢庆
reform	 v. 改进；改革 n. 改进；改革
mutation	 n.  变化； 转变
fallow	 adj.  休耕的 n. 休耕地
malevolent	 adj.  有恶意的； 坏心肠的
fermentation	 n.  发酵
homage	 n.  敬意
averse	 adj.  不愿意的； 反对的
refract	 v.   折射
successor	 n.  继承人， 继任者
matter	 n.  物质
irony	 n.  具有讽刺意味的事， 出人意料的事情或情况； 反话， 讽刺， 嘲弄
mandatory	 n.  命令的； 委托的
syndrome	 n.  综合症
neutrality	 n.  中立， 中性
recumbent	 adj.  靠着的， 斜躺着的； 休息的
energetic	 adj.  有力的， 精力旺盛的
product	 n.   生成物
impoverish	 v.  使贫穷； 使枯竭
hallowed	 adj.  神圣的， 奉为神圣的
foreordain	 v.  注定； 预先决定
premier	 adj.  第一的， 首要的 n. 首相，总理
hydrate	 n.  水合物
intellectual	 adj. 智力的，脑力的 n. 知识分子
reclaim	 v.  要求归还， 收回； 开垦
interchangeable	 adj.  可交换的
allegory	 n.  寓言
nautical	 adj.  船员的； 船舶的； 海上的， 航海的
disengage	 v.  脱离， 松开
gibber	 v.  模糊地讲话
descendent	 adj.  派生的
anecdote	 n.  轶事， 奇闻； 短故事
mendicant	 n.  乞丐
extravagance	 n.  过度， 放肆
cantankerous	 adj.  脾气坏的； 好吵架的
kudos	 n.  名望； 荣誉； 声誉
irreversible	 adj.  不能撤回的， 不能取消的
coy	 adj.  腼腆的， 羞涩的， 忸怩的； 献媚的， 卖弄风情的
AluminumAl	 n.  铝
pacify	 v.  使平静， 安慰， 抚慰
bulwark	 n.  壁垒； 防波堤
identical	 adj.  同一的， 完全相同的； 相等的， 恒等的
abject	 adj.  卑贱的
monologue	 n.  独白， 独角戏
incontrovertible	 adj.  无可争议的， 无疑的， 明白的
ambitious	 adj.  有雄心的， 雄心勃勃的
contemptuous	 adj.  轻蔑的， 侮辱的
academic	 adj.  学院的； 学术的 n. 学者；大学教师；学会会员
hadron	 n.  强子
grisly	 adj.  恐怖的， 可怕的， 令人毛骨悚然的
revere	 v.  尊敬， 敬畏， 崇敬
salacious	 adj.  猥亵的， 好色的
comparison	 n.  比较， 对比； 比喻， 比拟
law	 n.  定律
parallel lines	 平行线
distingusihed	 adj.  著名的， 卓越的
pernicious	 adj.  有害的， 有毒的
centiliter	 n.  毫升
revert	 v.  回复， 回返
herbivore	 n.  食草动物
successive	 adj.  连续的， 相继的
peddle	 v.  挑卖， 沿街叫卖
violation	 n.  违反， 违背； 妨碍， 侵害
metabolism	 n.  新陈代谢
abdicate	 v.  退位； 放弃
emanate	 v.  流出， 发出； 发散， 放射
impenitent	 adj.  不悔悟的； 顽固的
avocation	 n.   副业； 业余爱好
exterior	 adj. 外部的，外在的 n.  外部
censure	 n. 严厉批评，谴责 v. 严厉批评，正式谴责
technique	 n.  技术， 技巧
chattel	 n. 动产；私人财产
levy	 vt. 征收 n.  征税， 税款； 征兵
intimidate	 vt.  恐吓， 威胁， 胁迫
xenophobe	 n.  畏惧或憎恨外国人 / 事物的人
timer	 n.  定时器
malinger	 v.  装病
flux	 n.  流， 流出， 流动； 涨潮； 变迁
coincidence	 n.  一致， 符合， 同时发生或同时存在  的事
becalm	 v.  使安静； 因无风而使停航
detrimental	 adj.  有害的
well-wisher	 n.  祝福者
capitulate	 vi.  有条件投降； 屈服， 停止抵抗
celibate	 n.  独身者， 独身主义者
vicarious	 adj.  代理的； 间接感受到的
satiate	 v.  使充分满足； 享用过度； 使厌腻
lengthy	 adj.   冗长的， 过分的
spore	 n.  孢子
rampage	 v.  发怒， 乱闹， 狂暴
kinsfolk	 n.  亲属， 家属
probe	 v.   探查， 穿刺， 查究 n. 针；探测器
sensuous	 adj.  感觉的
quantitative	 adj.  数量的， 定量的
remission	 n.   减轻； 豁免
foment	 v.  煽动
skirmish	 n.  小冲突
equilibrium	 n.  平衡； 平静； 均衡
bereft	 adj.  被剥夺的； 失去亲人的； 丧失的
narcissism	 n.  自我陶醉； 自恋
esophagus	 n.  食管
incident	 n.  事件， 事变
maintenance	 n.  维修， 保养； 维持， 保持
intermit	 v.  间歇， 中断
hypercritical	 adj.  吹毛求疵的， 过分苛刻的
peccant	 adj.  犯罪的； 堕落的
neuron	 n.  神经元
absorb	 vt.  吸收； 使专心
burgher	 n.  自治市  居民， 市民
circulate	 vt.   流通，  运行，  循环；  传播
leg	 n.  梯形的两条不平行的边
resuscitate	 v.   复苏；  复活
rectify	 v.  纠正， 整顿
antonym	 n.  反义词
integrity	 n.  正直， 诚实； 完整， 完全
liable	 adj.  有责任的， 有义务的； 有…倾向的， 易于…的
midpoint	 n.  中点
quagmire	 n.  沼泽； 困境
undue	 adj.  不适当的， 过度的
element	 n.  元素； 组成部分， 成分
panacea	 n.  万灵药
symphonious	 adj.  和谐的， 调和的
mendacious	 adj.  虚伪的； 说谎的
callosity	 n.  无情， 冷酷
pervious	 adj.  能被通过的
lucubration	 n.  刻苦钻研
tutelage	 n.  指导； 教导
cartridge	 n.  弹药筒
theorem	 n.  原理
cue	 n.  提示， 暗示
lewd	 adj.  好色的， 淫荡的
supple	 v.  使柔软， 使顺从
infringe	 v.  破坏， 侵犯， 违反
bravado	 n.  虚张声势， 装作有自信的样子
ardent	 adj.  热心的， 热情洋溢的； 激烈的， 燃烧般的
concurrent	 adj.  并发的； 协作的， 一致的
assonance	 n.  谐音； 半谐音
cohesive	 adj.  黏着的， 黏合性的
untoward	 adj.  麻烦的； 不幸的
battery	 n.  电池组
harass	 vt.  侵扰， 烦扰
moment	 n.  时刻
irreverent	 adj.  不敬的
promote	 v.  促进， 发扬； 提升， 提拔； 增进， 助长； 宣传
hackney	 v.  役使； 出租
graphic	 adj.  生动的， 形象的； 绘画的， 文字的， 图表的
creation	 n.  产生
inclination	 n.  倾斜； 倾向， 爱好
ingredient	 n.  组成部分， 成分
participate	 v.  参与， 参加； 分享， 分担
authenticity	 n.  确实性； 真实性
rapacious	 adj.  掠夺的； 贪婪的
unisonous	 adj.  和谐的； 同音的
cadenza	 n.  【乐】  装饰奏
absolution	 n.  免罪， 赦免
haughty	 adj.  傲慢的
contour	 n.  轮廓； 周线
lyric	 n.  抒情诗， 歌词
misrepresent	 v.  误传
salvageable	 adj.  可抢救的； 可打捞的； 可挽救的
homily	 n.  布道； 说教
bibliomania	 n.  藏书癖
clan	 n.  部落； 氏族， 宗族； 帮派
economical	 adj.  节约的， 节俭的， 节省的， 经济的
urchin	 n.  顽童； 小淘气
vitalize	 v.  使有生气
polish	 v. 磨光，擦亮；使优美，润饰 n.  擦光剂， 上光蜡
cabinet	 adj.  内阁的 n. 橱柜；内阁
quip	 n.  嘲弄， 挖苦话； 双关语
ostensible	 adj.  可公开的；  表面的， 虚假的
principle	 n.  原理； 原则； 主义， 信念
litigant	 n.  诉讼人
tedious	 adj.  乏味的， 单调的， 冗长的
source	 n.  电源
initiate	 v.  开始， 发动
domestic	 adj.  家里的， 家庭的； 本国的； 驯养的
infirmary	 n.  医院； 医务室
prepossessing	 adj.  讨人喜欢的； 给人好感的
prim	 adj.  整齐的
terrestrial	 adj.  陆地的； 陆栖的
smelt	 v.  冶炼
vitality	 n.  生命力， 活力
slovenly	 adj.  懒散的； 不修边幅的
lackadaisical	 adj.  懒洋洋的
ravenous	 adj.  贪婪的， 渴望的， 狼吞虎咽的
abbess	 n.  女修道院院长， 尼姑庵住持
acquired	 adj.  已获得的； 后天通过自己的努力得到的
stability	 n.  稳定 ， 安定
radiate	 v.  放射， 辐射； 散布， 传播
tension	 n.  张力
reflection	 n.  反射； 映象， 倒影； 反省， 沉思
tenuous	 adj.  簿的； 稀薄的， 空洞无力的
winsome	 adj.  迷人的
ultimate	 adj.  最后的， 最终的； 根本的
ballad	 n.  民歌； 歌谣； 叙事歌； 流行歌曲； 情歌
caustic	 adj.  腐蚀性的； 刻薄的
prosecute	 v.  实行， 从事； 告发， 起诉
misunderstand	 vt.  误解， 误会
hydrocarbon	 n.  碳氢化合物
ampere	 n.  安培
precocious	 adj.  早熟的
pecuniary	 adj.  金钱的， 金钱上的
redound	 v.  有助于
arboreal	 adj.  树的， 乔木的； 树栖的
carnivorous	 adj.  食肉类的
philanthropy	 n.  慈爱； 慈善事业
fetid	 adj.  有恶臭的
predestine	 v.  注定； 预先确定
polymer	 n.  聚合物
askance	 adv.  斜， 斜视
contort	 v.  扭曲， 歪曲
resistant	 adj.  抵抗的， 有抵抗力的
salamander	 n.  蝾螈
intercede	 v.  调解
catholicity	 n.  普遍性； 宽容
progeny	 n.  后裔
enhance	 v.  提高 ， 增强
witchcraft	 n.  魔法； 魔力
antiseptic	 adj.  防腐的， 杀菌的， 消过毒的 n. 防腐剂，杀菌剂
polytechnic	 adj.  各种工艺的； 综合技术的
suspicion	 n.  怀疑， 猜疑
center	 n.  圆心
refusal	 n.  拒绝， 推却
churlish	 adj.  粗野的； 脾气坏的； 无礼的
isochronous	 adj.  同步的
dogmatist	 n.  武断论者； 教条主义者
flaunt	 v.  夸耀， 炫耀
teem	 v.  大量出现
neutralize	 v.  使中立； 抵消
foreshadow	 v.  预示
gravity	 n.  重力， 引力； 严肃， 庄重
homologous chromosome	 [遗] 同源染色体
replete	 adj.  充分供应的， 饱足的； 充满的
enfranchise	 v.  释放， 解放， 给予自由； 给予…公民权
alight	 v. 落下 adj.  点着的， 发亮的
blemish	 v.  弄脏， 玷污， 损害 n. 污点，缺点，瑕疵
befuddle	 vt.  使酒醉昏迷； 使迷惑， 使迷糊
inundate	 v.  淹没
recoil	 v.  反冲
funnel	 n.  漏斗
dogmatic	 adj.  教条的， 独断的
dilettante	 n.  业余文学、 艺术爱好者； 浅薄的涉猎者
regulate	 v.  管理， 控制， 使遵守规章； 调节 ， 调整， 校对
listless	 adj.  倦怠的； 冷漠的； 情绪低落的
punitive	 adj.  刑罚的； 惩罚  的
gland	 n.  腺体
complementary	 adj.  互补的
scapegoat	 n.  替罪羊
extant	 adj.  现存的
consistency	 n.  始终一贯， 前后一致
complacent	 adj.  自满的
plumb	 n.  铅锤
premise	 n.  前提， 假设；   房屋和地基， 经营场
vilify	 v.  诽谤， 辱骂； 贬低， 轻视
cliché	 n.  陈词滥调
controversial	 adj.  引起争论的， 有争议的
intransigent	 adj. 非妥协性的 n.  不妥协的人
unbecoming	 adj.  不恰当的， 不得体的
restoration	 n.  修复； 恢复
epidermis	 n.  表皮； 上皮
benignant	 adj.  仁慈的， 和蔼的； 有益的
plaintiff	 n.  原告
heteromorphic	 adj.  异形的
quadrant	 n.  象限
bide	 v.  居住， 滞留； 忍受
inveigh	 v.  猛烈抨击； 痛骂， 漫骂
anathema	 n.  诅咒； 令人厌恶的事
wretch	 n.  不幸的人， 苦命的人； 卑劣的人， 无耻的人， 坏人
detonate	 v.  使突发大爆炸
prudish	 adj.  过分拘谨的
mythology	 n.  神话学
symptomatic	 adj.  症状的， 征候的
allocate	 vt.  分配， 分派， 把…拨给
tonic	 adj. 激励的；滋补的 n.  滋补品
muffle	 v.  包， 蒙住； 压抑
abjure	 vt.  发誓放弃； 避免
enterprise	 n.   工作； 事业， 企业； 事业心， 进取心， 冒险精神
solar	 adj.  太阳的， 日光的
dome	 n.  圆屋顶； 半球形物； 苍穹
collegian	 n.  大学生
benefactor	 n.  恩人； 捐助者； 赠送者； 赞助人
domineer	 v.  跋扈， 作威作福
unknown	 n.  未知量
fuse	 v.  熔化， 熔合 n. 保险丝，导火线
competence	 n.  胜任， 能力
frivolous	 adj.  轻佻的， 琐碎的
tutorship	 n.  家庭教师； 辅导
pretext	 n.  借口， 托词
emergent	 adj.  突现的； 意外的； 紧急的
homonym	 n.  同音异义字， 同名异物
undervalue	 v.  低估
test tube	 n. 试管
incisive	 adj.  深刻的； 尖锐的； 激烈的
rudimentary	 adj.  基础的； 未发展的
Phosphorus	 n.  磷
precarious	 adj.  不确定的， 不安全的； 靠不住的， 根据不充足的
heterogeneity	 n.  异质性
capacitor	 n.  电容器
infest	 v.  扰乱， 骚扰
contemplation	 n.  注视； 沉思； 预期， 打算
miff	 v.  发脾气， 微怒； 无谓的争吵
eternal	 adj.  永恒的， 永远的； 不灭的； 不朽的
redress	 v.  纠正， 矫正
parentage	 n.  出身； 起源
habituate	 v.  使习惯于
plebeian	 adj.  卑俗的 n. 平民，庶民
randomly	 adv.  随机地
prevalent	 adj.  流行的； 普遍的
satire	 n.  讽刺文学， 讽刺
projectile	 n.  抛体
sprightly	 adj.  轻快的
overpower	 v.  制服， 压倒； 供给…过强的力量
recapitulate	 v.  扼要重述； 概括
alliance	 n.  结盟， 联盟； 联姻
invaluable	 adj.  非常宝贵的， 无价的
outlaw	 n.  罪犯， 歹徒
omniscient	 adj.  全知的， 无所不知的
shrivel	 v.   起皱纹；  失效
solecism	 n.  语法错误； 失礼
denote	 v.  指示， 表示
bedeck	 v.  装饰， 修饰
celebrated	 adj.  著名的
audible	 adj.  听得见的
propagate	 v.  增殖； 扩散
affair	 n.  事， 事情， 事件
galore	 adj.  丰盛的， 丰富的
Anglo-Saxon	 n.  盎格鲁—撒克逊人
orthodox	 adj.  传统的， 符合社会风俗的； 正统的
accustomed	 adj.  通常的； 习惯的
maverick	 n.  未烙印的小牛  ； 不服从的人
combination	 n.  合成作用
unkempt	 adj.   不整洁的， 未梳理的，  蓬乱的
ambush	 v.  埋伏 n. 埋伏；伏兵
adept	 adj.  精通的， 内行的 n.  行家， 熟手
repute	 v.  认为， 称为 n. 名誉，名声
nimble	 adj.  敏捷的， 灵巧的
amiable	 adj.  和蔼可亲的， 友好的， 可爱的， 亲切的
sacrifice	 n.  牺牲； 供奉
illegal	 adj.  不合法的， 非法的
countless	 adj.  无数的
fervor	 n.  热情， 热烈； 炽热
ample	 adj.  充分的， 富裕的； 宽敞的， 宽大的
wavelet	 n.  小浪； 微波
surety	 n.  担保， 保证
cohesion	 n.  结合， 凝聚
retrench	 v.  节省； 减少； 缩减
overrun	 v.  超过； 泛滥 n. 泛滥成灾，超出限度
reactor	 n.  核反应堆
outcry	 n.  大声疾呼； 强烈抗议
penetrate	 v.  穿过； 渗入； 看穿， 洞察
reproof	 n.  谴责， 非难
homogeneity	 n.  同种； 同质
principal	 adj.  主要的， 首要的 n. 负责人，首长；主犯
pare	 v.  剥， 削， 修
synonym	 n.  同义词
somber	 adj.  昏暗的； 忧郁的
perspicuity	 n.  明白
equitable	 adj.  公平的， 公正的
specimen	 n.  标本， 样本
exotic	 adj.  异国情调的， 外来的； 奇异的
psychic	 adj.  精神的； 超自然的
amply	 adv.  充足地， 详细地
boycott	 vt.  联合抵制； 联合排斥某国货物或与某国绝交
preposterous	 adj.  荒谬的
semiannual	 adj.  每半年的； 半年期的
annals	 n.  编年史； 年报
subscribe	 v.  订购， 订阅， 预订
distill	 vt.  蒸馏， 用蒸馏法提取； 吸取， 提炼
chromosome	 n.  染色体
concentration	 n.  浓度
aristocrat	 n.  贵族
velocity	 n.  速度
invalidate	 v.  使无效
colleague	 n.  同事， 同僚
malfeasance	 n.  违法行为， 渎职
commiserate	 v.  怜悯， 同情
confession	 n.  供认， 承认， 招供
lithe	 adj.  柔软的； 易弯的
antenatal	 adj.  【医】 出生前的
reclamation	 n.  开垦； 改造；  收回
tolerate	 v.  容忍， 默许
intangible	 adj.  感觉不到的
bombardier	 n.  投弹手， 炮兵下士
resent	 v.  愤恨， 怨恨
underling	 n.  部下， 下属； 走卒
instigate	 v.  教唆； 怂恿
ambiguous	 adj.  不明确的； 模棱两可的
asylum	 n.  庇护； 收容所
allay	 vt.  减轻， 减少； 使安静
avidity	 n.  热望； 贪婪
path	 n.  路程
impulsive	 adj.  冲动的
ashen	 adj.  灰色的； 苍白的
palliate	 v.  减轻
gravitation	 n.  引力
botanical	 adj. 植物学的 n.  植物性药材
soporific	 adj.  催眠的， 想睡的
angelic	 adj.  天使的； 天使般的
acoustics	 n.  声学
scanner	 n.  扫描器
conceivable	 adj.  可能的， 想得到的， 可想像的
cube	 n.  立方体； 立方； 三次幂
adulterate	 vt.  掺杂
apparition	 n.  离奇出现的东西；  鬼怪， 幻影
impact	 n. 作用；影响 v. (对…)产生〔重要或明显的〕影响
profile	 n.  侧面 ； 轮廓， 外形； 人物简介
bilk	 vt.  诈骗
paralysis	 n.  瘫痪， 麻痹
macrophage	 n.  巨噬细胞
laudation	 n.  赞美， 称赞， 颂词
peninsular	 adj.  半岛  的； 半岛的
acrid	 adj.  辛辣的，  刻薄的
bile	 n.  胆汁
bigamist	 n.  重婚者
supine	 adj.  仰卧的
dilate	 v.  扩大， 膨胀
census	 n.  人口普查
domain	 n.   领域， 范围； 领土， 领地
assignee	 n.  受让人； 受托人
nascent	 adj.  初生的
influential	 adj.  有影响的； 有权势的
impinge	 v.  撞击
pluralism	 n.  多元化， 多元性； 兼职
amenity	 n.  宜人； 生活福利设施， 便利设施
dour	 adj.  固执的； 阴沉的； 严厉的
annuity	 n.  年金， 养老金； 年金享受权
transparent	 adj.  透明的； 显然的， 明显的； 清楚的， 易懂的
academician	 n.  学会会员； 院士； 学者
arrogate	 v.  冒称
brag	 v.  吹牛
term	 n.  项
brae	 n.  斜坡； 山坡
acquisition	 n.  获得， 获得物
addle	 v.  使腐败； 使糊涂
factorable	 adj.  可分解因子的
emergence	 n.  浮现， 露出
advent	 n.  到来， 来临， 出现
medieval	 adj.  中世纪的， 仿中世纪的； 老式的， 原始的
involve	 vt.  使某人卷入， 陷入， 连累； 包含， 含有， 涉及
right	 adj.  直的
requisite	 adj.  需要的， 必不可少的， 必备的
elude	 v.  不记得， 不理解； 躲避， 逃避
herbaceous	 adj.  草本的
obsequious	 adj.  谄媚的， 奉承的， 拍马屁的
amnesia	 n.  健忘症
sedition	 n.  煽动， 暴乱
retrograde	 adj.  倒退的
clairvoyance	 n.  透视， 洞察力
supersede	 v.  代替， 取代
ruminate	 v.  反刍； 沉思
desert	 v.  丢弃， 放弃 n.  沙漠
finch	 n.  雀类
syllabus	 n.  课程大纲
pulverize	 v.  研磨成粉； 彻底毁灭
dialect	 n.  方言
rigor	 n.  严格， 严厉
turgid	 adj.  肿的； 浮夸的
emergency	 n.  紧急情况， 突然事件， 非常时刻
paralyze	 v.  使瘫痪， 使麻痹
misstate	 v.  说错， 作虚伪叙述
gesticulation	 n.  姿势； 做姿势传达； 手势
anachronistic	 adj.  时代错误的； 过时的
exemplary	 adj.  典型的
incumbent	 adj.  职责所在的， 负有…义务的
acceleration	 n.  加速度
adamant	 adj.  坚定不移的， 固执的
hydraulic	 adj.  水力的； 水压的
phlegmatic	 adj.  冷淡的， 漠然的
radius	 n.  半径
fortitude	 n.  坚忍； 刚毅
impair	 v.  损害， 损伤； 削弱， 减少
emancipation	 n.  释放， 解放
sumptuous	 adj.  奢侈的， 豪华的
static	 adj.  静态的
cajole	 v.  以甜言蜜语哄骗； 勾引
bray	 v.  叫， 嘶叫 n. 驴叫声，喇叭声
exhaust	 v. 使筋疲力尽，耗尽；抽完，汲干 n.  排气装置； 废气
soluble	 adj.  可溶的
intriguing	 adj.  迷人的， 有迷惑力的； 引起兴趣  的
ostentatious	 adj.  装饰表面的； 卖弄的
conviction	 n.  深信， 确信
diversify	 v.   多样化， 使不同， 使变化
comely	 adj.  清秀的， 标致的； 合适的
inventive	 adj.  善于创造的； 发明的
hideous	 adj.  骇人听闻的
graph	 n. 图表，曲线图
feast	 n.  节日； 宴会
imbibe	 v.  吸收
vertigo	 n.  眩晕， 晕头转向
pretentious	 adj.  自负的
solvent	 adj.  有溶解力的， 溶剂的； 有偿付能力的
nude	 adj.  裸体的
occasion	 n.  场合， 时节， 时刻； 时机， 机会
proportionate	 adj.  成比例的
virtual	 adj.  虚拟的； 实际上的， 事实上的
vegetate	 v.  过单调乏味的生活
arraign	 vt.  提问； 传讯； 责难
apposite	 adj.  适当的
guzzle	 v.  狂饮； 暴食
conjugal	 adj.  结婚的， 夫妇间的
optics	 n.  光学
awry	 adj.  歪曲的； 错误的
duration	 n.  持久； 期间； 持续时间
aqueduct	 n.  沟渠； 导水管
precession	 n.  先行； 领先
frenzied	 adj.  狂乱的， 激怒的， 疯狂似的
arrogant	 adj.  傲慢的； 自大的
erudite	 adj.  博学的
abusive	 adj.  辱骂的， 滥用的
undersell	 v.  以低于市价售出； 抛售
length	 n.  长度
advert	 vi.  注意， 留意
schedule	 n.  目录， 一览表， 清单； 程序表， 计划表， 时间表， 课程表
insurgent	 adj.  起义的； 暴动的； 叛乱的
achromatic	 adj.  非彩色的
faction	 n.  派别， 小派系
arduous	 adj.  费力的； 艰巨的
overwhelming	 adj.  势不可挡的， 压倒的
ludicrous	 adj.  可笑的； 滑稽的； 愚蠢的
atrocious	 adj.  残暴的， 凶恶的
append	 v.  附加， 添加
turpitude	 n.  奸恶， 卑鄙
frigid	 adj.  寒冷的； 冷淡的，  缺乏性感的
invincible	 adj.  不能征服的； 无敌的
tantamount	 adj.  等价的
exhausted	 adj.  耗尽的； 疲惫的
misgiving	 n.  疑惧， 疑虑
discount	 n. 减价，折扣 v. 忽视，不重视〔某事〕
verity	 n.  真实； 事实； 真理
convert	 v.  变换， 转化
relish	 n.  享受， 乐趣
cadent	 adj.  有节奏的； 降落的
division	 n.  除法
dissentious	 adj.  好争论的， 争吵的
balance	 n.  天平
distillation	 n.  蒸馏
exasperate	 v.  激怒； 加剧
pancreas	 n.  胰腺
iconoclast	 n.  偶像破坏者； 攻击传统观念和习俗的人
mimic	 vt.  模仿； 模拟
pitch	 n.  音调
feat	 n.  功绩， 伟业， 技艺， 壮举
incessant	 adj.  不断的， 不停的
inspection	 n.  检验
immaculate	 adj.  纯洁无瑕的； 完美的
adversity	 n.  不幸， 灾祸
inadvertent	 adj.  不注意的， 疏忽的
statue	 n.  塑像， 雕像
pretension	 n.  借口； 要求， 主张； 自负， 骄傲
menace	 n. 威胁；危险的人 vt.  恐吓， 威胁
benison	 n.  祝福
quintessence	 n.  精华； 典型
plethora	 n.  过剩， 过多； 多血症
debunk	 v.  揭穿， 拆穿假面具， 暴露
field	 n.  场
virtuous	 adj.  有道德的， 善良的， 正直的， 贞洁的
invalid	 adj.  有病的， 伤残的； 供病人用的； 无效的； 作废的； 无根据的， 站不住脚的 n.  病人， 病弱者， 伤残人
interval	 n.  间隔， 区间
legitimate	 v. 合法 adj.  正当的， 合理的； 合法的
cosmopolitan	 adj.  世界性的； 全球  的
mite	 n.  微小的东西
status	 n.  地位， 身份； 情形， 状况
renown	 n.  名望， 声誉
rebuff	 v.  回绝； 冷落
imperious	 adj.  专横的
blithesome	 adj.  愉快的， 高兴的
familiarity	 n.  亲密； 熟悉； 精通
diffusion	 n.  扩散， 传播
petrify	 v.  使石  化， 使僵硬； 使麻木
curve	 n.  曲线
extraneous	 adj.  外来的； 无关的
disseminate	 vt.  散布， 传播
liquefy	 v.   溶解，  液化
abomination	 n.  憎恨， 厌恶； 可憎的事物
legislator	 n.  立法者
digression	 n.  离题
herald	 v.  传达， 通告； 预示…的来临 n. 传令官；使者，报信者；先驱，前锋
recur	 vi.  再发生， 重现； 重新提起
coalition	 n.  合并， 接合； 联合
accumulate	 v.  积累， 堆积， 积蓄
exoskeleton	 n.  外骨骼
pristine	 adj.  纯洁的， 质朴的； 清新的； 原始的
dwarf	 adj.  矮小的， 发育不全的 n. 矮子，侏儒 vt. 使显得矮小，使相形见绌
cull	 v.  精选
leisure	 n.  空闲， 闲暇； 悠闲， 安逸
surround	 v.  包围， 环绕
juncture	 n.  交界处， 接合点
alcove	 n.  凹室， 壁橱
ogle	 v.  抛媚眼
multiform	 adj.  多样的
assimilate	 v.   吸收；  消化；  同化
ethical	 adj.  与伦理有关的； 道德的
zealous	 adj.  热心的
trenchant	 adj.   锐利的， 锋利的
prostrate	 v.  使屈服
virtuoso	 n.  艺术大师； 音乐名手
glamorize	 v.  使有魔力； 使吸引人
succor	 v.  援助， 救援 n. 救援；援助者
comparable	 adj.  可比较的， 比得上的
pantomime	 n.  哑剧
discreet	 adj.  言行谨慎的， 小心的， 慎重的， 审慎的
beatitude	 n.  至福； 祝福
bedlam	 n.  混乱； 吵闹的地方
evict	 v.  驱逐
sufficiency	 n.  充足， 足量
monopoly	 n.  垄断， 专卖
stagy	 adj.  做作的
fungible	 adj.  可互换的， 代替的
bilingual	 adj.  能说两种语言的
bipartisan	 adj.  两党的， 两党成员的
intensive	 adj.  加强的； 集中的； 深入细致的
discountenance	 v.  不赞成， 不支持
alter	 v.  改变， 变更
PhosphorusP	 n.  磷
fraudulent	 adj.  欺诈的， 欺骗性的
insinuate	 v.  含沙射影地说
approximation	 n.  近似值
syllable	 n.  音节
effuse	 v.  涌出， 流出， 泻出
travesty	 n.  滑稽模仿； 贬低
abduction	 n.  诱拐， 诱导
felicitous	 adj.  恰当的， 巧妙的； 幸福的
heedless	 adj.  不注意的
equipment	 n.  装置
embroil	 v.  使卷入， 牵连； 使纠缠
pressure	 n.  压强； 压力
literacy	 n.  识字， 有文化； 读写能力
staid	 adj.  认真的， 沉着的
antidote	 n.  【医】 解毒剂； 解毒药
pithy	 adj.  有髓的； 简练的
hardihood	 n.  大胆， 鲁莽
zeitgeist	 n.  时代精神， 时代思潮
demure	 adj.  端庄的； 假装矜持的
bumper	 n.  缓冲器
wrangle	 v.  争论， 争吵， 口角
ubiquitous	 adj.  到处存在的，  普遍存在的
differentiation	 n.  变异； 区别
mystify	 v.  迷惑
paradigm	 n.  范例
transformer	 n.  变压器
presage	 v.  预示； 预知
fidelity	 n.  忠实， 诚实
diabolical	 adj.  恶魔的
incandescent	 adj.  遇热发光的； 热情的
balk	 v.  犹豫不决； 畏缩不前； 阻止， 妨碍
electrode	 n.  电极
reckless	 adj.  不计后果的
bale	 v.  打包， 捆包， 包装 n. 大包；大捆
paradox	 n.  似是而非的话， 自相矛盾的话
sebaceous	 adj.  脂肪的， 脂肪分泌的， 脂肪过多的
justification	 n.  认为有理， 认为正当
X-ray	 n.  X射线
spindle	 n.  纺锤体
reprehensible	 adj.  应受责难的
repeal	 v.  废止， 撤销
toilsome	 adj.  劳苦的， 劳累的
rebuke	 n.  指责， 谴责
noisome	 adj.  有害的， 有毒的； 令人讨厌的
banal	 adj.  平凡的； 陈腐的， 老一套的
mordacious	 adj.  辛辣的； 锐利的
beaker	 n.  烧杯
admittance	 n.  入场许可； 准入
bellicose	 adj.  好战的， 好斗的
adulterant	 n.  掺杂物
witness	 v.  目击， 目睹； 作证， 证明 n. 目击者，证人；证据
fortify	 v.  在…设要塞， 在…建防御工事； 加强
contingency	 n.  偶然事件； 可能性； 意外事故
authentic	 adj.  真正的， 真实的； 可靠的
Catholicism	 n.  天主教义、 信仰及组织； 天主教
lodge	 v. 住宿，投宿，留宿 n.   山林小屋；  旅馆； 临时住宿； 容纳
hydrochloric acid	 n. 氢氯酸，盐酸
taunt	 v.  嘲弄， 奚落
devoid	 adj.  全无的， 缺乏的
recombination	 n.  重组
dearth	 n.  缺乏
commit	 v.  把…交托给， 提交； 犯 ， 干
outdo	 v.  胜过
incorrigible	 adj.  无药可救的； 不能被纠正的
secant	 n.  割线
precipitation	 n. 降水；降水量
consummate	 v. 完成，完整，圆满 adj.  圆满的； 至上的； 完美的
reassure	 vt.  使放心， 使安心， 安慰
divulge	 v.  泄露； 暴露
bane	 adj.  有害的； 使人苦恼的
crass	 adj.  粗鲁的； 愚钝的
addendum	 n.  附录； 补遗
palette	 n.  调色板
orbit	 n.  轨道
beneficent	 adj.  有益的， 受益的
salutary	 adj.  有益健康的； 有益的
vexation	 n.  恼怒； 烦恼； 苦恼的原因
comprise	 v.  包含， 包括， 构成
height	 n.  高
moderate	 adj. 中等的，适度的，温和的，稳健的 v.  缓和
upheaval	 v.  举起， 抬起， 隆起； 动乱， 大变动
expurgate	 v.  删除
august	 adj.  令人敬畏的， 威严的
divergent	 adj.  分歧的
artless	 adj.  朴实的
polyglot	 adj. 通晓多种语言的；多种语言的 n.  精通数国语言的人， 数种文字的对照本
fluent	 adj.  流利的， 流畅的
amour	 n.  奸情； 恋情
substantial	 adj.  实质的， 真实的； 坚固的， 结实的； 富裕的， 可观的
execute	 v.  实行， 实施， 执行， 完成， 实现； 履行； 处决
celerity	 n.  敏捷， 快速
nihilism	 n.  虚无主义； 怀疑论； 无政府主义
afresh	 adv.  重新； 再度
furtive	 adj.  偷偷摸摸的， 鬼鬼祟祟的
miscreant	 adj. 堕落的，卑劣的；异端的 n.  恶棍； 异端
sober	 adj.  清醒的； 认真的， 冷静的， 严肃的； 颜色不鲜艳， 暗淡的
lascivious	 adj.  好色的， 淫荡的； 挑动情欲的
tawdry	 adj.  俗丽的； 花哨而庸俗的
prolific	 adj.  多产的； 富有创造力的
invective	 adj.  谩骂的， 非难的， 恶言的
alderman	 n.  市府参事， 市议员
eliminate	 v.  消除； 排除
augment	 v.  增加， 增大
tangent	 adj.  切线的， 相切的； 离题的
partition	 n.  区分， 隔开， 分割
glance	 n.  匆匆一看， 一瞥， 眼色
benign	 adj.   良性的；  良好的； 仁慈的； 和蔼的
overlord	 n.  最高统治者； 封建君主
acquit	 v.  宣告无罪， 脱卸义务和责任； 还清
redirect	 v.  更改  姓名地址； 使改变方向； 使改道
reverent	 adj.  尊敬的， 虔诚的
atrocity	 n.  残暴； 暴行； 凶恶
expression	 n.  表达式
appeal	 v.  呼吁， 要求； 对…有吸引力； 申述， 上诉 n. 呼吁，要求；吸引力
swamp	 n.  沼泽， 沼地
abscond	 vt.  潜逃； 避债
puissant	 adj.  强大的； 有势力的
extensive	 adj.  广大的， 广阔的
gyrate	 v.  回旋
kismet	 n.  命运
residential	 adj.  住宅的， 适合居住的， 做住家用的
monotonous	 adj.  单调的
collaboration	 n.  协作
negate	 v.  否定， 打消
inspire	 v.  鼓舞， 感动， 激发， 启示， 使生灵感； 吸入
bureaucracy	 n.  官僚； 官僚主义； 行政系统
geometry	 n.  几何学
overwork	 v. (使)过度工作，(使)过分劳累 n. 过于繁重的工作；过分劳累
littoral	 adj.  海岸的， 沿岸的
aliment	 n.  食物； 养料
odious	 adj.  令人作呕的， 令人讨厌的
appellate	 adj.  有权受理上诉的
trepidation	 n.  颤抖， 惊恐， 恐惧
chronology	 n.  年代学； 年表
hexagon	 n.  六边形
eclectic	 adj.  折中的； 博采众长的
affectation	 n.  假装， 虚饰， 做作
nominate	 vt.  提名， 任命
imperil	 v.  使处于危险， 危害
diameter	 n.  直径
stationary	 adj.  静止的， 固定的
loop	 n.  回路
greedy	 adj.  贪食的； 贪婪的； 渴望的
loot	 v.  掠夺， 抢劫， 劫掠
abrogate	 vt.  废除， 取消
formidable	 adj.  可怕的， 令人畏惧的； 难以克服的， 难对付的
lobster	 n.  龙虾
peccadillo	 n.  轻罪， 小过失
seedy	 adj.  多籽的， 结籽的； 低级的
nucleon	 n.  核子
nausea	 n.  反胃， 晕船
unanimity	 n.  全体一致
assurance	 n.  确信， 断言； 保证， 担保
intercession	 n.  代为求情
immutable	 adj.  永远不变的
temperate	 adj.   温和的， 温带的； 自制的
disrupt	 v.  使分裂， 使瓦解， 破坏； 使陷于混乱； 使中断
scar	 n.  疤， 瘢痕； 创伤
coefficient	 n.  系数
carnal	 adj.  肉体的； 肉欲的， 性欲的， 色欲的； 淫荡的
eccentric	 adj.   古怪的， 怪癖的， 异乎寻常的 n. 古怪的人，怪癖的人
callow	 adj.  年轻而无经验的；  未生羽毛的
defer	 v.  推迟， 延期； 听从， 服从
alloy	 n.  合金
drowsy	 adj.  昏昏欲睡的
mass	 n.  质量
revoke	 v.  撤回； 废除， 宣告无效
renaissance	 n.  复兴， 复活， 新生； 文艺复兴， 文艺复兴时期
castigate	 vt.  惩罚； 严厉批评
jurisprudence	 n.  法律学
vegetable	 n.  蔬菜； 生活呆板、 单调的人
despicable	 adj.  可鄙的， 卑劣的
contemptible	 adj.  可鄙的
speed	 n.  速率
gesture	 n.  姿势， 姿态， 手势
allot	 vt.  分配， 拨给
propel	 vt.  推进， 推动； 激励， 驱使
urgency	 n.  紧急， 紧急的事
rampant	 adj.  猖獗的； 蔓生的； 猛烈的， 狂暴的
berth	 v.  使停泊 n. 停泊处；卧铺
backstage	 adv.   后台；  后台
organic	 adj.  有机的
prologue	 n.  序言
mask	 n. 面具，面罩；假面具，伪装 vt.  掩饰， 掩盖
chaste	 adj.  贞洁的； 有道德的； 朴素的
unaffected	 adj.  不矫揉造作的， 自然的； 未受影响的
autumnal	 adj.  秋的， 秋天的； 已过中年的
unctuous	 adj.  油脂的； 塑性的； 假装虔诚的， 假殷勤的
canary	 n.  金丝雀； 淡黄色
cubic	 adj.  立方体的； 立方的
barbarian	 adj.  粗鲁无礼的； 野蛮的
jargon	 n.  行话， 术语
postwar	 adj.  战后的
overlook	 v.  看漏， 忽略； 俯瞰， 眺望； 宽容， 放任
ethereal	 adj.  飘逸的； 天上的， 超凡的
scribe	 n.  抄写员
concoct	 v.  调制， 调和； 编造
bass	 adj.  男低音的 n. 低音部；男低音；低音乐器
bask	 v.  晒太阳  ； 感到温暖、 愉快或舒适
formula	 n.  公式， 配方
avalanche	 v.  雪崩 n. 雪崩
temperance	 n.  节制； 戒酒， 禁酒
tribute	 n.  贡品； 颂词， 称赞；  礼物
base	 n.  碱
endanger	 v.  使遭到危险， 危及， 危害
oblique	 adj.  倾斜的； 间接的； 不坦率的， 无诚意的
intonation	 n.  声调
subordinate	 adj. 次要的，从属的；下级的 n.  部属， 下级
elocutionist	 n.  雄辩家， 演说家
parallelogram	 n.  平行四边形
ungainly	 adj.  难看的； 不雅的； 笨拙的
itinerary	 n.  行程表； 路线； 旅行路线
pugnacious	 adj.  好斗的， 爱吵闹的
moo	 v.  鸣叫
revolution	 n.  旋转
incentive	 n.  刺激； 动机； 鼓励
fern	 n.  蕨类植物
repudiate	 v.  拒绝接受
stealth	 n.  秘密行动
espy	 v.  看出； 窥探
bombast	 n.  夸大的言辞
punctilious	 adj.  拘泥细节的， 谨小慎微的， 一丝不苟的
mishap	 n.  灾祸
fickle	 adj.   变化无常的， 浮躁的
devious	 adj.  偏僻的； 迂回的； 偏离的
still	 n.  蒸馏釜
magnification	 n.  放大倍数
biology	 n.  生物学
obtrude	 v.  冲出； 强迫
work	 n.  功
resemblance	 n.  相似， 相似处
exceptional	 adj.  例外的， 异常的， 特殊的； 优越的
constitute	 v.  构成， 组成
anthology	 n.  选集； 文选
chronometer	 n.  记时计
expanse	 n.  宽阔的区域， 宽阔
impale	 v.  刺穿
inequality	 n.  不等式
itinerate	 v.  巡回
mate	 v.  使配对； 结伴 n. 伙伴，同事；配偶
disorient	 v.  使失去方向感； 使迷惑
pipette	 n.  吸液管
terminate	 v.   停止， 结束
theory	 n.  理论
bawdy	 adj.  猥亵的， 好色的
galvanize	 v.  电镀， 镀锌； 电击
deprecate	 v.  抗议， 不赞成
priggish	 adj.  自负的
literary	 adj.  文学上的， 文学的； 精通文学的， 从事写作的
stolid	 adj.  不易激动的， 感觉迟钝的， 神经麻木的
rampart	 n.  垒， 壁垒； 城墙
falsify	 v.  伪造
queasy	 adj.  令人作恶的； 忧虑的
verify	 v.  证实， 证明
refulgent	 adj.  辉煌的； 灿烂的
excursion	 n.  短途旅行， 游览
cramp	 v.  用夹子夹紧 n. 夹子，扣钉
playful	 adj.  好玩的， 嬉戏的； 十分有趣的； 顽皮的
plenitude	 n.  充分
academy	 n.   专科院校， 研究院， 学会， 学术团体
washout	 n.  冲刷
persecution	 n.  迫害， 烦扰
inhume	 v.  埋葬
bygone	 adj.  过去的
gusto	 n.  趣味， 兴味
ebb	 v.  退潮， 落潮； 减少， 衰落 n. 退潮，落潮
medley	 adj.  混合的， 拼凑的 n. 混合，混杂；集成曲
disagreeable	 adj.  不愉快的； 脾气坏的
haste	 v.  赶快； 匆忙 n. 急速，匆忙，紧迫，仓促；轻率，草率
nurture	 vt. 教养，抚育；给…营养物 n.  营养物， 食物； 养育
destructive	 adj.  破坏性的， 毁害的
degenerate	 v.  衰退， 堕落， 蜕化 adj.  堕落的， 退化的
censor	 v.  检查， 审查 n. 检查员
bawl	 v.  大叫 n. 叫骂声
perambulate	 v.  巡行
provident	 adj.  有远见的
devour	 v.  狼吞虎咽地吃， 贪食； 破坏， 吞没； 毁灭
stir	 v.  搅拌， 搅动；  动，  摇动； 激动； 轰动； 煽动， 鼓动
homologous	 adj.  相应的； 一致的
avarice	 n.  贪财； 贪婪
compunction	 n.  良心的谴责； 后悔， 悔恨
beleaguer	 vt.  围， 围攻； 使苦恼
axis	 n.  轴
aeronaut	 n.  气球  驾驶员
juxtaposition	 n.  毗邻， 并置， 并列
unqualified	 adj.  不合格的； 无条件限制的， 绝对的
negligent	 adj.  疏忽的； 粗心大意的
portfolio	 n.  文件夹； 公事包
uproarious	 adj.  骚动的
desolate	 v.  使荒芜 adj.  荒凉的， 无人烟的； 孤独的
defendant	 n.  被告
evade	 v.  逃避， 回避， 避开， 躲避
chicanery	 n.  强辩， 强词夺理； 狡辩， 欺骗
alley	 n.  小路， 巷， 小径
exaggerate	 v.  夸大， 夸张
upturn	 v.  向上翻转
cortex	 n.  树皮； 皮层
vex	 v.  使烦恼， 恼怒
aberration	 n.  失常
peruse	 v.  熟 / 精 / 细读
recitation	 n.  朗诵， 背诵； 叙述
qualification	 n.  资格， 合格； 技能； 限定， 条件； 合格证
sequence	 n.  次序， 顺序， 序列； 数列
combustion	 n.  燃烧
recruit	 v. 招募，招收 n.  新兵， 新成员
pathogen	 n.  病原体
senile	 adj.  高龄的， 衰老的
jade	 n.  碧玉， 翡翠； 老马
insure	 vt.  保险， 给…保险； 保证
bombard	 v.  炮轰； 轰炸
protract	 v.  延长
commonplace	 adj.  平凡的 n. 平凡的事，平常话
libel	 v.  诽谤， 中伤， 诬蔑 n. 中伤、诽谤
urea	 n.  尿素
captivate	 v.  迷住； 迷惑
enmity	 n.  敌意， 仇恨， 憎恨
jovial	 adj.  愉快的
derogate	 v.  贬损； 毁损
parameter	 n.  参量
extinct	 adj.  灭绝的； 熄灭了的
sully	 v.  玷污
accompaniment	 n.  伴随物； 伴奏
petulant	 adj.  脾气坏的； 使性子的
foggy	 adj.  有雾的； 不清楚的
appertain	 v.  属于
percolate	 v.  过滤
opaque	 adj.  不透明  的； 难理解的， 晦涩的
retinue	 n.  随员， 扈从
advantage	 n. 优点，长处；有利条件；利益，好处 vt.  有利于， 有益于
circulatory system	 [解剖] 循环系统
tepid	 adj.  微温的， 温热的； 不太热烈的； 不热情的
humid	 adj.  湿的， 湿气重的
controversy	 n.  争论， 辩论
grimace	 n.   怪相， 鬼脸
embolden	 v.  壮胆； 鼓励
compulsory	 adj.  强制的， 义务的， 必修的
anticipate	 v.  预期， 预料， 预感， 期望
variable	 adj. 易变的；可变的，变量的 n.  变量
detach	 v.  分开， 分离
fabricate	 v.  捏造， 编造 ； 建造， 制造
uproot	 v.  连根拔起， 根除； 离开家园
locus	 n.  基因座
landscape	 n.  风景
imperceptive	 adj.  无知觉  的
effervescent	 adj.  冒泡的， 沸腾的； 奋发的， 愉快的
temporary	 adj.  暂时的， 临时的
optimal	 adj.  最佳的， 最理想的
desperate	 adj.  令人绝望的； 不顾一切的， 拼死的
annotate	 v.  注释， 评注
rapine	 n.  抢夺， 掠夺
branch	 n.  支路
vie	 v.  竞争
refraction	 n.  折射
torrid	 adj.  炎热的
omnivore	 n.  杂食动物
visual	 adj.  视觉的
pedantic	 adj.  学究式的； 没有想象力的
dehydration	 n.  干燥； 脱水
anthropoid	 n.  类人猿
extortion	 n.  勒索； 敲诈； 强求
inept	 adj.  不适当的； 无能的
hermit	 n.  隐士
agreement	 n.  同意， 一致； 协定， 协议
fugacious	 adj.  短暂的
instruct	 vt.  教， 教授； 命令， 指示
oscillate	 v.  振荡
vinery	 n.  葡萄园； 葡萄温室
auburn	 adj.  赤褐色的 n. 赤褐色
biased	 adj.  有偏见的
conundrum	 n.   谜语； 难题
perforate	 v.  打孔
community	 n.  团体， 社会
ailment	 n.  疾病  ； 不宁， 不安
impetuous	 adj.  冲动的； 猛烈的； 激烈的
version	 n.  版本； 说法， 看法
propellant	 n.  推进物
conception	 n.  概念， 观念
derelict	 adj.  被抛弃的； 玩忽职守的
retroactive	 adj.  追溯的； 涉及以往的
sinecure	 n.  工作清闲而报酬丰厚的职位， 挂名职务， 闲职
unused	 adj.  未用过的； 空着的， 未消耗的； 无经验的， 不习惯的
despotic	 adj.  专制的； 专横的； 暴虐的
discomfit	 v.  扰乱
vista	 n.  景色， 景观
appropriate	 adj.  适当的， 恰如其分的
exhale	 v.  呼气
connotation	 n.   含义， 内涵
brusque	 adj.  唐突的， 无礼的； 直率的； 粗暴的
utility	 n.  效用， 有用
resignation	 n.  辞职， 让位， 退职； 屈从， 服从， 听任
abrasion	 n.  磨损
measurement	 n.  测量
symphony	 n.  交响乐， 交响曲
proponent	 n.  建议者； 支持者
clamorous	 adj.  吵闹的， 喧哗的， 吵吵嚷嚷的
shiftless	 adj.  无能的； 不思上进的； 偷懒的
submarine	 adj. 水下的，
antipathy	 n.  憎恶， 反感
empiricism	 n.  经验论； 经验主义
elevated	 adj.  提高的； 严肃的； 欢欣的
catastrophic	 adj.  悲惨的； 灾难的
prohibition	 n.  禁止， 阻止； 禁酒令
particle	 n.  质点， 粒子
typify	 v.  代表
alimentary	 adj.  食物的； 营养的
stagnant	 adj.  停滞的； 迟钝的
perceptive	 adj.  知觉的； 感觉  的
endocrine	 adj.  内分泌的 n. 内分泌
density	 n.  密度
superlative	 adj.  最高的
canine	 adj.  犬的； 似犬的； 犬齿的； 犬科的 n. 犬齿
mechanics	 n.  力学
onset	 n.  攻击， 进攻； 开始
logical	 adj.  逻辑的； 符合逻辑的
characterize	 v.  表现…的特色， 刻画…的性格
stunt	 v. 阻碍…发育，妨碍…生长 n.  发育迟缓； 矮小的人
ridiculous	 adj.  荒谬的， 可笑的
aperture	 n.  孔， 穴， 缝隙；  光圈， 孔径
assiduous	 adj.  勤勉的， 刻苦的
refute	 v.  反驳， 驳斥
immoderate	 adj.  无节制的
emerge	 v.  浮现， 出现， 显现
virile	 adj.  男人的； 强壮的； 刚健的
exploit	 v.  开拓， 开发， 开采
ancillary	 adj.  补助的； 副的
isothermal	 n.  等温线
trapezoid	 n.  梯形
evidence	 n.  证据， 根据， 论据； 迹象， 痕迹， 征兆
gratuitous	 adj.  免费的； 无偿的
flamboyant	 adj.  火焰似的， 火红色的； 艳丽的， 灿烂的， 虚张的， 虚饰的
amity	 n.  友好， 亲善关系
lethal	 adj.  致命的
entangle	 vt.  使…纠缠， 卷入； 连累； 使混乱
garnish	 v.  装饰
historical	 adj.  历史的； 有关历史的
borough	 n.  自治市镇；  区
repellent	 adj.  讨厌的， 令人厌恶的； 防…的
ethics	 n.  伦理， 伦理学
repetition	 n.  重复， 反复
stun	 vt.  使震惊， 使目瞪口呆； 把…打昏， 使昏迷
suspense	 n.  焦虑， 悬念， 悬而不决
mollify	 v.  平息
narrate	 v.  叙述， 讲述
autonomy	 n.  自治； 自治权； 人身自由； 自主权； 自立
ambulate	 v.  走动
gibe	 v.  嘲笑
knave	 n.  流氓
microphone	 n.  话筒， 扩音器
surrender	 v.  投降， 交出， 放弃
hypnotic	 adj.  催眠的， 易被催眠的
caste	 n.  印度的世袭阶级；  社会地位； 社会等级制度
collide	 v.  碰撞， 抵触
cardinal	 adj.  主要的； 最重要的 n. 枢机主教；红衣主教
volume	 n.  体积
transact	 v.  交易； 处理
nefarious	 adj.  邪恶的， 穷凶极恶的
beneficiary	 n.  受惠者， 受益人
catalyst	 n.  催化剂
errant	 adj.  周游的； 迷途的
gluttonous	 adj.  暴食的， 饕餮的， 贪吃的
perverse	 adj.  执拗的， 任性的， 不通情理的
unawares	 adv.  不料， 吃惊地； 不知不觉地
indignant	 adj.  愤慨的， 愤慨不平的
decimal	 n. 小数〔如0.5，0.175，0.661 等〕 adj. 十进制的，小数的
lasting	 adj.  持久的， 永久的
cynical	 adj.  愤世嫉俗的， 冷嘲热讽的， 玩世不恭的
breakdown	 n.  击穿
Iron	 n.  铁
tortuous	 adj.  曲折的； 转弯抹角的
lactose	 n.  乳糖
veneer	 n.  薄板， 单板； 外表， 虚饰
ribald	 adj.  下流的
calamity	 n.  大灾祸， 灾难， 不幸
accomplish	 v.  完成， 达到； 实现
constituent	 adj.  形成的， 组成的； 选举的 n. 成分，要素
irritate	 v.  激怒， 恼火， 使急躁； 刺激
havoc	 n.  大破坏
illuminate	 v.  照亮， 照明； 阐明； 启蒙
scholastic	 adj.  学校的； 学者的
cipher	 n.  密码
pageant	 n.  盛会， 庆典， 游行
protrude	 v.  突出
barring	 prep.  不包括； 除非
flounder	 v. 挣扎，困难地往前走；笨拙而错乱地说或做事 n.  比目鱼
enthrall	 v.  迷住， 着迷
residue	 n.  残余； 渣滓； 滤渣
contempt	 n.  轻视， 轻蔑
fulminate	 v.  使爆发； 以严词谴责
figurative	 adj.  比喻的； 形容多的
deliberate	 adj.  深思熟虑的， 故意的； 先有准备的
collier	 n.  矿工； 运煤船
discretionary	 adj.  任意的， 自由决定的
rife	 adj.  普遍的
Calvinism	 n.   加尔文教义， 加尔文主义
charter	 v. 租，包 n.  特权， 豁免权； 合同， 契约； 宪章
release	 v.  释放， 解放
usurious	 adj.  高利的； 高利贷的
liberate	 vt.  解放， 释放
toll	 n.  通行税
apex	 n.  最高点； 顶点
bravo	 n. 亡命徒；喝彩 int.  好啊！妙！
aspire	 vi.  有志于； 热望； 向往
brethren	 n.  弟兄们； 教友们
rancor	 n.  深仇， 怨恨
explode	 v.   爆炸，  爆发
pillory	 n.   颈手枷
zealot	 n.  狂热者
luxuriant	 adj.  丰富的， 肥沃的
outbreak	 n.  爆发
appellation	 n.  名称， 称呼
antipodes	 n.  相对极
abominate	 vt.  痛恨， 憎恶
similar	 adj.   相似的
contradict	 v.  同…矛盾； 同…抵触
practitioner	 n.  开业者  ； 从业者
comport	 v.  举止
momentous	 adj.  重大的， 重要的
fecund	 adj.  生殖力强的； 多产的， 丰饶的， 肥沃的
forte	 n.  特长； 专长
submerge	 v.  沉没， 淹没； 潜入
dissonant	 adj.  不和谐的
altimeter	 n.  测高仪
atypical	 adj.  非典型的
pertinent	 adj.  相干的， 中肯的
giraffe	 n.  长颈鹿
charming	 adj.  令人高兴的， 可爱的
circumscribe	 v.  限制， 约束
supercilious	 adj.  自大的， 傲慢的， 目空一切的
expulsion	 n.  逐出； 开除
bibulous	 adj.  饮酒的； 嗜酒的； 吸水的
optimism	 n.  乐观， 乐观主义
savor	 v. 欣赏；使有味 n.  滋味； 气味
materialist	 n.  唯物主义者
malediction	 n.  咒骂； 坏话
cell	 n.  细胞
crude	 adj.  天然的， 未加工的； 粗糙的， 拙劣的； 粗鲁的
withstand	 v.  抵挡， 反抗； 经得住， 耐
valid	 adj.  有效的； 合理的， 有根据的
indubitable	 adj.  不容置疑的， 确实的， 明白的
saponaceous	 adj. 圆滑的；肥皂似的；口齿伶俐的
inertia	 n.  惯性
epitomize	 v.  作…的摘要； 成为…的典型
wintry	 adj.  冬天的； 寒冷的； 冷淡的
vacuum	 n.  真空
arrear	 n.  欠款
pauper	 n.  乞丐； 贫民
era	 n.  时代， 年代， 阶段， 纪元
vacillate	 v.  摆动， 震荡； 摇摆不定， 犹豫不决
morality	 n.  道德， 美德
incriminate	 v.  控告…有罪； 使负罪； 控告
cataclysm	 n.  灾难； 大洪水；  大变动
surreptitious	 adj.  暗中的， 秘密的， 偷偷摸摸的
transplant	 v.  移植
spineless	 adj.  无脊椎的
elucidate	 vt.  阐明； 说明
deficit	 n.  赤字， 逆差
obstinate	 adj.  倔强的， 顽固的
overdose	 n.  配药量过多
braze	 v.  用黄铜镀或制造
askew	 adj.  歪斜的
grasshopper	 n.  蝗虫
endue	 v.  授予， 赋予
cession	 n.  割让， 转让， 【律】 让与  债权
dispel	 v.  驱散
cumulative	 adj.  累加的
supplicate	 v.  恳求， 哀求， 恳请
slit	 n.  狭缝
genome	 n.  基因组
enigmatic	 adj.  谜一般的， 高深莫测的
overpass	 n.  过街天桥
species	 n.   种， 种类
reprisal	 n.  报复
betide	 v.  发生； 预示
avant-garde	 n.   先锋派， 前卫派
preceding	 adj.  在前的， 先前的
polarize	 v.  两极分化
alveolar	 n.  牙槽部
salubrious	 adj.  有益健康的
hemorrhage	 n.  出血
ignominious	 adj.  可耻的； 不光彩的
pedagogy	 n.  教学； 教育学
degradation	 n.  降解
autonomous	 adj.  自治的
vibration	 n.  振动
aerial	 adj.  航空的； 生活在空气中的， 空气的； 高耸的 n. 天线
trial	 n.  审讯； 试验， 考验
perception	 n.  理解， 知觉； 感受， 体会； 知觉作用， 知觉过程； 理解力， 洞察力
furlough	 n.   休假
equanimity	 n.  平静， 沉着， 镇定
saturation	 n.  饱和
indigenous	 adj.  本地的； 土产的； 土著的
bridle	 v.  上笼头； 昂首 ； 抑制 n. 马勒，缰绳
visualize	 v.  形象， 形象化
rejuvenate	 v.  使年轻； 使复原
bureau	 n.  局； 办公署
entrance	 n.  进入
introvert	 n. 性格内向的人 vt.  向内弯曲
laggard	 adj. 落后的 n.  落后者
motley	 adj.  混杂的
frolicsome	 adj.  爱闹着玩的， 嬉戏的
charlatan	 n.  庸医； 吹牛者
acreage	 n.  英亩数； 面积
manometer	 n.  流体压强计
acoustic	 adj.  有关声音的， 声学的
parody	 n.   诙谐性的模仿作品； 拙劣的模仿
gastronomy	 n.  美食法， 烹饪法
dignify	 v.  使尊荣， 使高贵
outlandish	 adj.  外国气派的； 古怪的， 奇异的
jocose	 adj.  诙谐的
tropical rain forest	 热带雨林
rigorous	 adj.  严格的， 严厉的
foretell	 v.  预言， 预示， 预测
effete	 adj.   生产力已枯竭的； 衰老的； 疲惫的， 衰微的
strenuous	 adj.  积极的， 奋发的； 费劲的
lethargy	 n.  无生气； 懒洋洋
amusement	 n.  娱乐， 消遣， 娱乐活动
supplicant	 n.  恳求者， 恳请者
precipitate	 v.  猛地落下
mandate	 n.  命令； 训令； 要求
rile	 v.  搅混； 惹怒
meander	 v.  蜿蜒而流； 漫步
progression	 n.  行进
ensemble	 n.  全体合唱团
trick	 v.  欺骗， 哄骗
prudential	 adj.  谨慎的
plaudit	 n.   喝彩
pollute	 v.  弄脏； 污染
transposition	 n.  调换， 变换
larceny	 n.  盗窃罪
reversible	 adj.  可逆的
insipid	 adj.  无情趣的； 乏味的
memorize	 vt.  记住； 记忆
commensurate	 adj.  相称的， 相当的
diaphanous	 adj.  透明的； 精致的
stimulation	 n.  激励， 鼓舞； 刺激
permutation	 n.  改变， 交换
derange	 v.  使精神错乱； 使发狂
remiss	 adj.  玩忽职守的
manifest	 adj.  明白的， 显然的 vt. 表明，证明，显示
prelude	 n.  先驱； 前奏， 序幕
enrage	 v.  激怒
underexposure	 n.  曝光不足
specific	 adj.  明确的， 具体的； 特定的； 特有的， 特殊的
ignoble	 adj.  不光彩的； 卑鄙的； 可耻的
cacophony	 n.  刺耳的音调； 不谐和音； 杂音
regnant	 adj.  在位的； 占优势的； 流行的
gestate	 v.  孕育； 创意
adroit	 adj.  熟练的
chord	 n.  弦
frivolity	 n.  轻薄， 轻率； 无聊的举动
remainder	 n.  余数
neologism	 n.  新语； 新词； 旧词新义
hiatus	 n.  裂缝， 脱落
clumsy	 adj.  笨拙的， 愚笨的
summon	 v.  召唤； 召集； 传讯， 传唤； 鼓起 ， 振作
spurious	 adj.  伪造的， 假的
collage	 n.  抽象拼贴画
maintain	 vt.  维修， 保养； 维持， 保持； 坚持， 主张， 支持
echo	 n.  回声
rehabilitate	 v.  使恢复名誉； 使复原
birthright	 n.  与生俱来的权利
ramify	 v.   分支，  分叉
trammel	 n.  拘束； 阻碍物， 束缚物
annihilate	 vt.  消灭， 歼灭
upshot	 n.  结果
accusation	 n.  谴责； 指控
rabid	 adj.  狂暴的， 激烈的； 患有狂犬病的
implausible	 adj.  难以置信的； 不像真实的
remorse	 n.  懊悔； 自责； 同情， 怜悯
chimerical	 adj.  空想的
beneficence	 n.  善行； 仁慈； 赠物
dissuade	 v.  劝阻
palatial	 adj.  富丽堂皇的； 宫殿般的
witling	 adj.  玩弄小聪明的人
diminutive	 adj.  小的； 小型的
encompass	 v.  包围， 环绕； 包含或包括某事物
cache	 n.  隐藏处所； 隐藏的粮食或物资， 贮藏物
waver	 v. 减弱；动摇
imminent	 adj.  即将来临， 逼近的
primeval	 adj.  原始的
sustenance	 n.  食物， 营养  ； 支持， 维持， 扶持； 生计
congenital	 adj.  天生的， 先天的
velvety	 adj.  像天鹅绒的， 柔软的
prickle	 v.  刺， 扎， 戳
immoral	 adj.  不道德的， 邪恶的
dissipate	 vi. 消散，消失 vt.  使消散， 使消失； 浪费， 挥霍
querulous	 adj.  爱发牢骚的； 易怒的； 爱挑剔的
flask	 n.  烧瓶
fluctuation	 n.  波动， 起伏
impassive	 adj.  冷漠的
occult	 v. 掩蔽，隐藏 adj.  神秘的， 玄妙的； 超自然的； 隐蔽的
needlework	 n.  刺绣， 缝纫
athirst	 adj.  渴望的
simultaneous	 adj.  同时的， 同时发生的
predation	 n.  掠夺； 掠食
guarantee	 v.  保证， 担保 n. 保证，保证书
nebula	 n.  星云
literal	 adj.  文字的； 照字面上的， 无夸张的
prodigious	 adj.  庞大的； 惊异的； 奇妙的
amorous	 adj.  多情的， 恋爱的， 表示爱情的
commingle	 v.  混合
indolent	 adj.  懒惰的； 不痛的
vendor	 n.  小贩； 【律】卖主
mawkish	 adj.  令人作恶的； 无味的
attribute	 v.  把…归于； 认为…是…所为 n.  属性； 品质； 特征
repentant	 adj.  后悔的， 悔改的； 有后悔表现的
genetic	 adj.  基因的， 遗传  的
triumph	 n.  狂喜； 胜利， 成功
cataract	 n.  大瀑布； 白内障
ratification	 n.  批准； 承认
bauxite	 n.  铝氧石
tout	 v.  吹捧
palpable	 adj.  可触知的； 明显的
fortunate	 adj.  幸运的； 侥幸的
tour	 n.  旅行， 游览；  巡回演出， 巡回医疗；  任期
persuade	 v.  说服， 劝说
consensus	 n.  一致同意； 多数人的意见； 舆论
exacting	 adj.  苛求的， 严格的； 吃力的， 需付出极大耐心
irresolute	 adj.  犹豫不决的
judicature	 n.  司法
embellish	 v.  装饰， 美化； 添加细节
retract	 v.  缩回， 缩进； 收回， 取消， 撤销
blazon	 v. 广布，宣布；夸示 n.  细致准确地绘制或描述
swerve	 v.  突然转向
gossip	 v.  传播流言蜚语； 说长道短 n. 闲话，聊天；非议，流言
sarcasm	 n.  挖苦， 讽刺
antecedent	 adj.  先行的 n. 先辈
didactic	 adj.  说教的； 教诲的
colloquial	 adj.  口语的； 通俗语的
sterling	 adj.  纯正的
granular	 adj.  由小粒而成的， 粒状的
fatuous	 adj.  愚昧的； 昏庸的
incorporate	 v.  合并， 纳入， 结合
recapture	 n.  取回， 夺回
clemency	 n.  温和； 仁慈， 和蔼
benediction	 n.  祝福
reiterate	 v.  反复地说， 重申； 重做
segment	 n.  弓形； 部分
sinister	 adj.  左边的； 险恶的
menacing	 adj.  威胁的； 险恶的
pendulum	 n.  钟摆； 摆锤
aerosol	 n.  气溶胶
termination	 n.  结局； 末端， 终点
superb	 adj.  极好的， 高质量的
regress	 v.  复原； 逆行； 使倒退
duplicate	 adj.  复制的， 二重的， 二倍的 v.  复写， 复制， 使加倍 n. 复制品，副本
affable	 adj.  和蔼可亲的
decrease	 v. （使）变小，（使）减少 n. 减少；减少的量
engrossing	 adj.  引人入胜的， 极有趣的
surmise	 v. 推测，猜测 n.  推测， 猜测
eradicate	 v.  根除， 灭绝
germinate	 v.  使发芽； 使发展
conservationist	 n.   保护管理论者
patriotism	 n.  爱国心， 爱国精神
abdominal	 adj.  腹部的
hackneyed	 adj.  陈腐的； 常见的
despondent	 adj.  垂头丧气的； 沮丧的
trifle	 v.  玩忽， 不认真对待 n. 少量，少许；小事，琐事，微不足道的东西
accomplice	 n.  同盟者， 帮凶
apogee	 n.  远地点
string	 v.  缚， 捆； 悬挂 n. 弦，线，细绳；一串，一行
submit	 v.  使服从， 屈服； 呈送， 提交
affluent	 adj.  丰富的； 富裕的
garble	 v.  断章取义； 混淆
macabre	 adj.  恐怖的， 令人毛骨悚然的
redundant	 adj.  多余的
racy	 adj.  有活力的； 有原来风味的， 天然的， 地道的
contrition	 n.  悔悟， 后悔
admissible	 adj.  容许的； 可采纳的
mellifluous	 adj.  嗓音如蜜般的； 甜美的； 流畅的
condensation	 n.  凝结
statement	 n.  声明， 陈述
factor	 v.  将…分解因子 n. 因子
asinine	 adj.  愚笨的
respiratory system	 [解剖] 呼吸系统
carbon dioxide	 n. 二氧化碳
mischievous	 adj.  恶作剧的； 淘气的
dumbfound	 v.  使人哑然失声； 使发愣
aural	 adj.  听觉的
barometer	 n.  气压计
triennial	 adj.  每三年一度的
sensation	 n.  感觉， 知觉
brightness	 n.  亮度
refer	 v.  提交， 谈及
stellar	 adj.  星的； 星形的； 主要的； 主角的
flame	 n.  火焰
occupant	 n.  占有者； 居住者
typography	 n.  排版， 排印
truism	 n.  公认的真理， 自明之理
prohibitive	 adj.  禁止的， 抑制的； 价格极高的
flair	 n.  天赋； 天资
modest	 adj.  谦虚的， 谦让的， 谦逊的； 适度的
moribund	 adj.  垂死的
unaccountable	 adj.  无法解释的
conflagration	 n.  大火， 大火灾
miasma	 n.  沼气
fat	 n.  脂肪
electron	 n.  电子
citadel	 n.  根据地， 大本营
panegyric	 n.  颂词； 颂文
brooch	 n.  胸针， 领针
ambivalent	 adj.  矛盾的
practicable	 adj.  能实行的， 行得通的， 可以实行的
esoteric	 adj.  深奥的； 隐秘的
probability	 n.  概率
browbeat	 vt.  恫吓， 吓唬
explicit	 adj.  清晰的， 明确的， 清楚的； 直率的， 不含糊的
propriety	 n.  适当， 正当， 得体； 礼节， 礼仪
abash	 vt.  使局促不安， 使困窘
mastermind	 n.  具有极高才智的人， 出谋划策的人， 设计者
imbue	 v.  浸透
abase	 vt.  降低自己， 使卑下
aerostat	 n.  航空器
utilize	 v.  利用
idealist	 n.  理想主义者
subside	 v.  下沉； 沉淀； 平息； 减退
antilogy	 n.   前后矛盾
epistolary	 adj.  书信的； 书信体的
elated	 adj.  兴高采烈的； 得意洋洋的
purity	 n.  纯度
portion	 n.  一部分
futile	 adj.  无效的， 无用的， 无希望的， 无意义的； 琐细的
algae	 n.  海藻； 藻类
pensive	 adj.  沉思的； 悲伤的
isotope	 n.  同位素
clothier	 n.  衣商
engross	 v.  吸引， 使全神贯注； 独占
acumen	 n.  敏锐， 聪明
abate	 v.  减少； 减轻
wee	 adj.  很少的， 微小的
wistful	 adj.  伤感的， 徒然神往的
risible	 adj.  可笑的, 滑稽的
eschew	 v.  避开， 回避
melee	 n.  混战， 搏斗， 格斗
amass	 vt.  收集， 积聚
souvenir	 n.  纪念品
seminary	 n.  神学院
quaint	 adj.  离奇有趣的； 奇怪的； 做得很精巧的
comical	 adj.  好笑的， 滑稽的
grip	 n. 紧握，紧抓；握力 v. 紧握，紧抓
adjutant	 adj. 辅助的 n.  副官
bronchitis	 n.  【医】 支气管炎
biennial	 adj.  两年生的； 两年一次的
tentative	 adj.  试验性的， 试探的
egoism	 n.  自我主义； 利己主义
criticize	 v.  批评， 评论
wanton	 adj.  荒唐的， 嬉戏的； 恣意的
incredulous	 adj.  怀疑的， 不轻信的
whet	 v.  磨， 磨快； 兴奋
circumference	 n.  圆周， 周长； 周围
crystallization	 n.  结晶
behold	 v.  目睹， 看见
dominance	 n.  优势； 统治
indebted	 adj.  负债的； 感恩的
economic	 adj.  经济  的， 经济学的
indicator	 n.  指示剂
whim	 n.  一时的兴致； 幻想
thrall	 n.  奴隶； 束缚； 奴役
distinction	 n.  区别， 差别
retrace	 v.  折回； 退回
heretofore	 adv.  迄今
abnegate	 v.  放弃
section	 n.  断面； 一部分
ruinous	 adj.  破坏性的， 灾难性的， 毁灭性的； 已成废墟的
malignant	 adj.  恶性的， 致命的； 恶意的， 恶毒的
precedence	 n.  优先， 居先
undercharge	 v.  索价低于常价
protocol	 n.  草案； 协议
overflow	 v.   泛滥，  溢出，  充溢 n. 溢出
provoke	 v.  挑动； 激发； 招惹
foil	 v.  挫败 n. 箔，金属薄片
respite	 v.  暂缓
remonstrate	 v.  抗议
gruesome	 adj.  可怕的， 可憎的， 令人厌恶的
foolhardy	 adj.  鲁莽的， 有勇无谋的
rapprochement	 n.  友好关系的恢复， 和解， 亲善
salutatory	 n.  大学毕业典礼的贺词
repugnant	 adj.  令人讨厌的； 冲突的； 不一致的
rail	 v.  责骂， 抱怨
tranquil	 adj.  安静的， 安详的
plea	 n.  恳求， 请求； 抗辩， 答辩， 辩护； 借口， 托辞
boatswain	 n.  水手长
strait	 n. 海峡；〔狭窄的〕水道
choleric	 adj.  易怒的
denominator	 n.  标准； 分母
fastidious	 adj.  难取悦的； 挑剔的； 苛求的
nutrition	 n.  营养
cereal	 n.  谷类食品； 谷类
invigorate	 v.  鼓舞
indifferent	 adj.  不关心的， 冷淡的， 不感兴趣的； 无偏袒的， 中立的， 公平的
undersize d	 adj.  较一般为小的， 不够大的
unfavorable	 adj.  相反的； 不适宜的， 不顺利的； 令人不快的
producer	 n.  生产者
solemn	 adj.  庄严的， 隆重的； 严肃的
dictatorial	 adj.  独裁的； 傲慢的， 专横的
perceive	 vt.  察觉， 感知； 理解， 领悟
sugar	 n.  糖类
electrolyte	 n.  电解质
embarrass	 v.  使窘迫， 使为难
option	 n.  选择， 选择权；  选择的事物 ； 选课
acute	 adj.  敏锐的， 尖锐的；  急性的
stigma	 n.  污名， 耻辱
unveil	 v.  除去面纱； 使暴露； 展示， 介绍
generator	 n.  发电机
sonar	 n.  声纳
endurance	 n.  忍耐， 持久， 耐久
microscope	 n.  显微镜
farcical	 adj.  滑稽的， 引人发笑的
candidate	 n.  候选人； 候补者； 报考者
cognizant	 adj.  认知的
intelligible	 adj.  可理解的， 明白易懂的， 易领悟的， 清楚的
parallel	 adj. 平行的；相同的；类似的 n.  平行线， 平行面； 类似， 相似物
wearisome	 adj.  使疲倦的， 使厌倦的， 乏味的
prattle	 v.  说孩子气的话； 闲聊
inert	 adj.  无活动的； 惰性的； 迟钝的
blunder	 vi.  跌跌撞撞地走； 犯大错， 做错 n. 大错
pertinacious	 adj.  固执的
enzyme	 n.  酶
breach	 n. 违背；破坏；破裂，裂口 vt.  打破； 突破
granule	 n.  细粒
selective	 adj.  选择的， 选择性的； 精挑细选的
stimulus	 n. 刺激（物）；促进因素
agglomerate	 adj.  成块的， 凝聚的 v.  使成团， 使成块， 使凝聚 n. 大团，大块
bewilder	 vt.  使迷惑； 使不知所措； 使昏乱
regiment	 n.  团
curmudgeon	 n.  脾气坏的人
gall	 n.  胆汁； 恶毒； 怨恨； 愚勇
terminal	 n.  终点站； 终端， 接线端； 计算机终端
egalitarian	 adj.  平等主义的
linguist	 n.  语言学家
surpass	 v.  超过， 超越； 胜过
aloof	 adv.  远离地； 冷漠超然地 adj. 孤零的，冷淡的
idealize	 v.  使理想化， 使合乎理想
stagnate	 vt.   停滞，  变萧条
fainthearted	 adj.  懦弱的， 胆小的
succumb	 v.  屈服， 屈从； 死
amatory	 adj.  恋爱的； 情人的
rant	 v.  怒气冲冲地叫嚷； 夸夸其谈
translucent	 adj.   透明的
conciliatory	 adj.  抚慰的， 调和的
arbitrate	 v.  做出公断
brine	 n.  盐水
aversion	 n.  厌恶； 讨厌的事和人
dipper	 n.  药勺
pension	 n.  养老金， 年金
preparatory	 adj.  预备的
vein	 n.  静脉
veil	 v.  用面纱掩盖； 掩饰 n. 面纱，遮蔽物
hierarchy	 n.  等级制度； 统治集团
licentious	 adj.  放肆的
posterior	 adj.  较晚的
amphitheater	 n.  古罗马的圆形剧场， 竞技场， 似圆形剧场的场所
panic	 n.  恐慌， 惊慌
proxy	 n.  代理人
fold	 v.  对折
patter	 v.  喋喋不休
boiling	 n.  沸腾
impervious	 adj.  不可渗透的； 不可破坏的
intermediate	 adj. 中间的，居间的；中级的 n.  中间体， 媒介物
simultaneously	 adv.  同时地
competitive	 adj.  竞争的
compression	 n.  浓缩， 压缩， 压榨；  压缩
ambrosial	 adj.  芳香的， 特别美味的
sentient	 adj.  有感觉力的
frank	 adj.  坦白的， 直率的
exacerbate	 v.  使恶化， 使加剧； 使发怒
rapt	 adj.  全神贯注的
heterodox	 adj.  异端的； 非正统的
virus	 n.  病毒
aerate	 v.  使充满气体
anterior	 adj.  前面的； 逻辑上在前的
blaspheme	 v.  亵渎； 咒骂， 辱骂
recourse	 n.  求援， 求助
virtu	 n.  古董类
revocation	 n.  撤回
extinction	 n.  灭绝
cadaver	 n.  死尸， 尸体
contestant	 n.  竞争者； 参赛者
nickname	 n. 诨号，绰号 vt.  给…起绰号
genre	 n.  类型； 流派
trickery	 n.  欺骗
relinquish	 v.  放弃
ignition	 n.  灼烧
humanity	 n.  人类， 人性， 人情； 人文科学
radiance	 n.  光辉； 闪烁
charge	 n. 费用，价钱 v. 控告，指控
appendage	 n.  附属肢体
alternate	 v. 交替，轮流 adj.  交替的， 轮流的
infuriate	 adj.  狂怒的 v.  激怒
cacophonous	 adj.  发音不和谐的
recreate	 v.   得到休养，  得到娱乐
assuage	 vt.  缓和， 减轻； 镇定
tropical	 adj.  热带的
repulsion	 n.  斥力
forgery	 n.  伪造
renascent	 adj.  新生的， 复活的， 复兴的
enchant	 v.  对…施行妖法， 用妖术迷惑； 使心醉， 使销魂， 使迷住
burgeon	 vi.  萌芽； 快速成长
naive	 adj.  天真的； 幼稚的
clarify	 v.  澄清， 阐明
duplicity	 n.  奸诈， 狡猾
residual	 n.  残留
congenial	 adj.  性格相似的， 意气相投的
generosity	 n.  慷慨， 宽大
acclimate	 v.  使适应新环境
exclude	 v.  把…排除在外， 排斥
enlighten	 v.  启发， 启蒙， 教导， 启迪， 开导
utmost	 adj. 极度的，极端的 n.  极限， 极度， 最大可能
perturb	 v.  使感到不安
needy	 adj.  贫困的， 非常贫穷的
oxidize	 v.  氧化
buffoonery	 n.  打诨； 滑稽
deduct	 v.  扣除， 减去
specious	 adj.  华而不实的， 徒有其表的； 似是而非的
voracious	 adj.  狼吞虎咽的； 贪婪的
image	 n.  像
caricature	 n. 讽刺画，漫画；讽刺描述法；歪曲的模仿 vt.  画成漫画讽刺
terse	 adj.  简洁的， 扼要的
pallid	 adj.  苍白的； 暗淡的
topography	 n.  地形， 地形学
quorum	 n.  法定人数； 选出的团体
portray	 v.  画 ， 画  ； 描绘， 描写， 描述
inexplicable	 adj.  无法说明的； 难以理解的
blight	 vt.  毁灭
ruddy	 adj.  红色的； 红润的
pontiff	 n.  罗马教皇； 主教
confrontation	 n.  对抗
comestible	 adj. 可吃的 n.  食物
profound	 adj.  深刻的， 意义深远的； 渊博的， 造诣深的
homogeneous	 adj.  同种类的， 同性质的， 有相同特征的
penumbra	 n.  半影
usurp	 v.  篡夺； 篡位； 侵占
aggress	 v.  攻击； 侵犯
condone	 v.  宽恕， 赦免
electroscope	 n.  验电器
aspiration	 n.  强烈的愿望； 志向， 抱负
usury	 n.  高利贷； 高利
necessity	 n.  必要性，  需要； 必需品
foible	 n.  小缺点； 弱点
abeyance	 n.  暂时无效； 中止
recreant	 n.  懦夫
compelling	 adj.  强制的； 引人注目的
halcyon	 adj.  平静的
origin	 n.  起源， 由来； 出身， 来历； 原点
vocal	 adj.  嗓音的， 声音的， 有声的
precaution	 n.  预防， 警惕， 谨慎， 小心； 预防措施
personality	 n.  人格， 个性； 人物
subterfuge	 n.  托辞； 借口
rate	 n.  率， 比率； 速度， 速率
sanction	 v.  同意， 许可， 准许
deduce	 v.  推论， 演绎出
obsolescent	 adj.  逐渐被废弃的； 即将过时的
extemporaneous	 adj.  无准备的， 即席的
oak	 n.  橡树
proverb	 n.  谚语
tangential	 adj.  切线的
prosperity	 n.  繁荣， 兴旺
divide	 v.  除
adulatory	 adj.  奉承的
contend	 v.  斗争， 竞争； 主张
covert	 adj.  隐蔽的， 偷偷摸摸的
potion	 n.  一服， 一剂
thwart	 v.  反对， 阻碍； 横过
armory	 n.  兵工厂， 军械库
gamble	 v. 赌博 n. 冒险，碰运气
gaucherie	 n.  笨拙
deport	 v.  举止； 驱逐
luminescent	 adj.  发冷光的
counter	 n.  计数器
crestfallen	 adj.  垂头丧气的
coagulate	 v.  凝结
cylinder	 n.  圆柱体
affray	 v.   吵架， 打架
starch	 n.  淀粉
sedate	 adj.  安静的； 稳重的
withdraw	 v.  取回， 收回； 撤销
promotion	 n.  提升， 晋级；  宣传， 推销
colloquialism	 n.  口语体； 口语用法
wry	 adj.  扭歪的； 挖苦的， 揶揄的
straightforward	 adj.  直截了当的， 简单明了的； 正直的， 诚实的， 坦率的
transcription	 n.  转录
exhilarate	 v.  使高兴； 使振奋
languish	 v.  憔悴； 凋萎
tabulate	 v.  把…制成表格
capricious	 adj.  任性的； 反复无常的
legislative	 adj.  立法的， 立法机关的
transcribe	 v.  转录
lunatic	 adj.  精神错乱的， 疯狂的； 极端愚蠢的
intricate	 adj.  错综复杂的， 难以理解的
capacious	 adj.  容积大的； 宽敞的； 广阔的
ciliate	 adj. 有纤毛的；有睫毛的；纤毛虫的 n.  纤毛虫
context	 n.  上下文， 文章前后关系
abidance	 n.  居住； 遵守
augur	 v.  占卜， 预言 n. 占兆官；占卜师，预言者
advisory	 adj.  咨询的； 劝告的
issue	 v. 流出，放出；发行，发表，颁布 n.  发行 ，  期号； 问题， 争论点， 争端
pundit	 n.  博学者
lingual	 adj.  语言的
subsistence	 n.  生存； 生活
dejected	 adj.  沮丧的， 灰心的
metal	 n.  金属
audacity	 n.  大胆， 厚颜
autarchy	 n.  独裁； 专制
germination	 n.  发芽
habitable	 adj.  可居住的
malign	 v. 诽谤 adj.  恶毒的
plaintive	 adj.  悲哀的， 哀伤的
lively	 adj.  活泼的， 活跃的
malleable	 adj.  有延展性的， 可锻的； 易受影响的， 能根据环境的变化而调整的， 适应的
supplement	 n.  补角， 指两角之和为180度
alteration	 n.  变更， 改造
brittle	 adj.  易碎的； 脆弱的
affinity	 n.  构造相似； 特点相近； 密切关系
gypsy	 n.  吉普赛人
pedestal	 n.   基座， 台座， 柱脚
pertinacity	 n.  顽固
semblance	 n.  外表； 伪装
solicitude	 n.  关怀
admonish	 vt.  劝告， 训诫， 警告
indefinitely	 adv.  无限定地
gibberish	 n.  快速而含混不清的言语， 胡言乱语
occurrence	 n.  发生， 出现； 事件， 事故， 发生的事情
bauble	 n.  小玩意
recede	 vi.  退， 退去， 渐渐远去； 向后倾斜； 缩进
delegate	 n.  代表， 代表团成员 vt.  委派  …为代表； 授 ， 把…委托给
literature	 n.  文学； 文学作品； 文献
sphere	 n.  球体
digest	 v.  消化 n. 摘要，文摘
melodious	 adj.  旋律优美的
irreparable	 adj.  不能挽回的
abyss	 n.  深渊
belief	 n.  信仰， 信条； 相信， 信念
veto	 v. 否决〔尤指他人或其他组织已赞同之事〕 n. 否决(权)
centipede	 n.  蜈蚣
encore	 n.  要求再演； 加演
exuberant	 adj.  繁茂的； 丰富的； 兴高采烈的， 热情洋溢的
proficient	 adj.  精通的， 熟练的
remembrance	 n.  回想， 记忆
halve	 v.  把…平分为二； 将…减半
obnoxious	 adj.  不愉快的； 讨厌的
penitent	 adj.  忏悔的； 悔过的
impromptu	 n.  即席演出， 即兴之作
verbose	 adj.  冗长的； 嗦的
photon	 n.  光子
slender	 adj.  修长的， 苗条的； 微小的， 微薄的
terminus	 n.  终点
compensate	 v.  偿还， 补偿， 付报酬
attache	 n.  随员； 大使馆馆员
conscious	 adj.  意识到的， 自觉的； 有意识的， 神志清醒的
dilatory	 adj.  拖拉的
malodorous	 adj.  有恶臭的
animadversion	 n.  批评， 非难
prodigal	 adj. 浪费的 n.  挥霍者
outcast	 n.  被驱逐者， 流浪者
placid	 adj.  平静的
coax	 v.  劝诱； 诱骗
contentment	 n.  满足， 满意
beatify	 v.  使享福；  为  行宣福礼
laudable	 adj.  值得赞美的， 值得称赞的
edge	 n.  立体的边或棱
brotherhood	 n.  手足情谊， 兄弟关系
skirt	 n.  边缘
orchestra	 n.  管弦乐队
widespread	 adj.  分布广泛的， 普遍的
antique	 adj.  古时的， 古老的 n. 古物，古玩，古董
asexual	 adj.  无性的； 无性生殖的
morose	 adj.  郁闷的； 乖僻的
toxic	 adj.  有毒的， 因中毒引起的
coalescence	 n.  合并， 接合； 联合
contest	 v.  争论， 争辩， 竞赛， 争夺 n.  竞争， 竞赛， 比赛
turmoil	 n.  骚动； 混乱
organelle	 n.  细胞器
overleap	 v.  越过
diagnosis	 n.  诊断
doctrinaire	 n.  空谈家； 教条主义者
plus	 adj.  表示加的； 正的 prep. 加，加上
raze	 v.  夷为平地
license	 n.  许可  ； 执照
expand	 v.   膨胀，  扩张； 张开， 展开
dismissal	 n.  免职， 解雇
ohm	 n.  欧姆
squander	 v.  浪费
perimeter	 n.  周长
suggestive	 adj.  提示的， 暗示的
retrieve	 v.  重新得到； 恢复
cantata	 n.  清唱剧； 康塔塔； 大合唱
malice	 n.  恶意， 怨恨
thermometer	 n.  温度计
athwart	 adv. 横跨着，斜穿过；逆，相反 prep.  横过， 反对， 逆
heat	 n.  热
discrepant	 adj.  差异的
furrow	 n.  分裂沟
code	 n.  密码； 代码， 代号， 编码
legacy	 n.  遗赠的财物， 遗产
displace	 v.  移置， 转移； 取代， 置换
nutriment	 n.  营养品
swindle	 v.  诈骗
veritable	 adj.  真正的
hemoglobin	 n.  血红蛋白
inestimable	 adj.  无价的， 无法估计的
illusion	 n.  错觉， 幻觉； 假象
whine	 v.  哭诉， 发牢骚， 发呜呜声
considerable	 adj.  相当大  的， 可观的； 值得考虑的， 重要的
toxin	 n.  毒素
subsist	 v.  生存， 生活； 供养
brief	 adj.  简短的； 短暂的 n. 摘要，大纲 vt. 简短介绍；简要汇报
recover	 v.  重新获得； 痊愈， 复原
influx	 n.  流入
devastate	 v.  毁坏
prodigy	 n.  天才  ； 奇观， 奇事
exonerate	 v.  免罪； 免除
surfeit	 v.  使饮食过度
disavow	 v.  不承认， 否认； 否定， 抵赖
maple	 n.  枫树
compliant	 adj.  顺从的； 适应的
obsequies	 n. 葬礼，丧礼
diagonal	 adj. 对角的，对角线的
prophetic	 adj.  预言的
aroma	 n.  芳香， 香气， 香味
transmute	 v.  改变
readily	 adv.  容易地； 乐意地， 欣然地
projector lens	 放映机镜头
oratory	 n.  讲演术
wrest	 n.  夺取， 强夺； 歪曲
determination	 n.  决心， 果断
discipline	 v.  训练； 锻炼 n. 纪律；学科；规定；训练
burnish	 vi.  磨光； 擦亮
calculus	 n.  微积分学； 结石
ensconce	 v.  使隐藏； 安置
proclamation	 n.  宣布
valediction	 n.  告别； 告别词
suspension	 n.  吊； 悬浮； 悬浮液； 暂停， 中止； 悬而未决， 延迟
inevitable	 adj.  不可避免的， 必然发生的
relapse	 v.  旧病复发
antecede	 v.  先前， 先行
insensible	 adj.  失去知觉的； 麻木不仁的； 无感觉的
vaccinate	 v.  进行预防接种
cognitive	 adj.  认知的， 认识的， 有感知的
sear	 v.  烤焦， 使枯萎
disingenuous	 adj.  不真诚的， 无诚意的
placenta	 n.  胎盘
bridge	 n. 桥 vt.  架桥； 渡过
evaporation	 n.  蒸发
commentary	 n.  注释， 解说词
impeccable	 adj.  完美的； 无懈可击的
minus	 adj.  表示减  的， 负的； 阴性的 prep. 减，除
mistrust	 n.  不信任， 猜疑
conservative	 adj.  保守的； 谨慎的 n. 保守主义者
serenity	 n.  平静
seed	 n.  种子
lifelong	 adj.  终身的， 毕生的
anaerobic respiration	 [植] 无氧呼吸；[微] 厌氧呼吸
torque	 n.  扭矩
dais	 n.  台， 讲台
workmanlike	 adj.  精巧的， 技巧熟练的
belle	 n.  美女， 美人
chromatic	 adj.  彩色的； 半音的
disturb	 v.  扰乱； 打乱； 打扰， 使不安； 使烦恼
lecherous	 adj.  淫荡的； 好色的
vector	 n.  矢量
armful	 n.  一抱之量
sensual	 adj.  感觉的
righteous	 adj.  正直的， 正当的； 公正的， 正义的
abominable	 adj.  讨厌的， 令人憎恶的
speculate	 v.  推测， 思索； 做投机买卖
recrudescent	 adj.  复发的
adorn	 vt.  装饰
dismantle	 v.  拆掉…覆盖物； 拆卸  ； 摧毁， 粉碎
bedaub	 v.  涂污； 过分地装饰
cantonment	 n.  宿营地，  军营， 兵营
acquaint	 v.  使认识， 使了解
censorship	 n.  审查； 审查制度
acquiescence	 n.  默许
vacuity	 n.  空虚
temperate forest	 温带森林（等于temperate woodland）
joint	 adj. 联合的，共同的，共有的 n. 关节 v. 把〔肉〕切成大块
saline	 adj.  盐的； 含盐的
separate	 adj. 分开的 v.  分开
urine	 n.  尿
reasonable	 adj.  合理的， 有道理的； 适度的； 通情达理的
innumerable	 adj.  无数的， 数不清的
stultify	 v.  使显得愚笨； 使变无效， 使成为徒劳
fatalism	 n.  宿命论
elicit	 vt.  得出， 引出， 抽出， 引起
relegate	 v.  驱逐， 放逐； 丢弃； 委托； 移交
qualm	 n.  疑虑
trivial	 adj.  琐碎的； 无足轻重的
misadventure	 n.  遭遇
longevity	 n.  长寿； 寿命； 耐久性
reluctant	 adj.  不情愿的， 勉强的
scuttle	 v.  凿洞沉船
conscientious	 adj.  认真的， 谨慎的
forgo	 v.  抛弃， 放弃
coil	 n.  线圈
ensure	 v.  确保， 保证
prescience	 n.  预知； 先见
venal	 adj.  贪污的
entreaty	 n.  恳求； 乞求
epidemic	 adj. 流行性的；传染的 n.  流行病； 传播
alacrity	 n.  敏捷， 轻快； 乐意， 欣然同意的表示
plasticity	 n.  可塑性
anarchy	 n.  无政府状态； 政治混乱
carnage	 n.   残杀， 大屠杀； 流血
recluse	 n.  隐居者， 隐士
equidistant	 adj.  等距离的
scruple	 n.  踌躇， 犹豫
genotype	 n.  基因型
archbishop	 n. 大主教
obscure	 adj. 暗的，朦胧的；模糊的，晦涩的 vt.  使暗， 使不明显
trove	 n.  被发现的东西， 收藏的东西
noxious	 adj.  有害的
bolster	 n. 垫子 vt.  支持
omnipresent	 adj.  无所不在的， 普遍存在的
deceive	 v.  欺骗， 蒙蔽
ingenious	 adj.  机灵的； 有独创性的； 心灵手巧的
populace	 n.  平民
amphibious	 adj.  两栖的
imprint	 vt. 印，压印；铭记 n.  印记； 深刻的印象； 持久的特征、 标志
destination	 n.  目的地， 目标
privacy	 n.  隐居； 私事， 隐私
reciprocal	 n.  倒数
vertical	 adj. 垂直的，竖的 n.  垂线
gruff	 adj.   粗暴的， 生硬的
perpetuate	 v.  使长存， 使不朽
quail	 v.  感到恐惧 n. 鹌鹑
osmosis	 n.  渗透作用
cringe	 v.  畏缩； 阿谀， 奉承
puerile	 adj.  不成熟的； 孩子气的， 幼稚的
gap	 n.  间隙， 缺口； 隔阂； 不足， 空白
neology	 n.  新词的使用， 旧词新义
gas	 n.  气体
emphasize	 v.  强调， 着重
overweight	 n.  超重
shriek	 n.  尖声叫喊
slight	 adj.  轻微的， 微小的
tumultuous	 adj.  喧嚣的， 动乱的； 激动的
regime	 n.  政体， 制度
effeminate	 adj.  柔弱的； 女人气的， 娇气的
zenith	 n.  天顶； 最高点； 顶点
arcade	 n.  【建】 拱廊， 有拱廊的街道
soliloquy	 n.  自言自语； 独白
anthropologist	 n.  人类学家
pedigree	 n.  血统； 家谱
ceremonious	 adj.  讲究仪式的； 正式的， 隆重的
daunt	 v.  使沮丧
belie	 vt.  掩饰； 证明为假
superior	 adj. 优良的，卓越的；较…多的，优于… n.  上级， 长官
premature	 adj.  未成熟的， 太早的， 早熟的
restitution	 n.  归还
promiscuous	 adj.  混杂的
choir	 n.   唱诗班； 合唱团
subsidize	 v.  给补助金 / 津贴 / 奖金
variegated	 adj.  杂色的， 斑驳的； 多样化的
truculent	 adj.  好战的； 凶狠的
accessory	 adj.  附属的 n. 附件，配件
biped	 n.  两足动物
retort	 n.  曲颈甑
antenna	 n.  天线
machination	 n.  诡计； 阴谋
ecosystem	 n.  生态系统
seminar	 n.   研究班， 研讨会
annihilation	 n.  湮没
tempestuous	 adj.  有暴风雨的； 暴乱的
respiration	 n.  呼吸作用
brigadier	 n.  旅长， 陆军指挥
zany	 n.  小丑， 丑角
repository	 n.  仓库； 学识渊博的人
therapeutic	 adj.  治疗的
meddler	 n.  爱管闲事的人
hazard	 v.  冒险， 拼命 n. 危险，冒险，危害
belay	 v.  用绳索拴住； 中止
melodrama	 n.  情节剧； 音乐剧
vegetative	 adj.  有关植物生长的， 植物的
harbinger	 n.  先驱； 先兆
dilute	 adj.  冲淡的， 稀释的 vt. 冲淡，稀释
phase	 n.  位相
coagulant	 n.  凝结剂； 凝血剂
lambaste	 v.  痛打； 严责
ominous	 adj.  预兆的； 不祥的， 不吉的
veracity	 n.  真实； 诚实
contract	 v.  缩小， 缩短； 订 ； 感染 n. 合同，契约
sluggish	 adj.  懒散的； 反应迟钝的
misfortune	 n.  不幸； 灾祸， 灾难
braggadocio	 v.  自夸 n. 吹牛大王
susceptible	 adj.  敏感的， 易受感动的， 易受影响的， 易感染的； 可被…的， 可能…的
befriend	 vt.  待人如友， 帮助
countermand	 v.  取消， 撤消； 下反对命令召回
innovative	 adj.  创新的
insight	 n.  洞察力
quiescent	 adj.  静止的
exact	 v.  强求； 急需， 要求
cooling	 n.  冷却
resourceful	 adj.   资源丰富的； 机智的， 多策略的
force	 n.  力
premonition	 n.  预先的警告； 预感， 前兆
cerebral	 adj.  脑的， 大脑的； 理智的
gambol	 n.  欢跳， 雀跃， 嬉戏
squelch	 v.  压制
suffuse	 v.  充满
caprice	 n.  反复无常； 任性； 怪念头
vagabond	 adj. 流浪的；漂泊的 n.  流浪者
debacle	 n.  冰河的溃裂； 大败
magnetism	 n.  磁学
slander	 n.  诽谤， 诋毁
sedentary	 adj.  久坐不动的； 定居一处的
cabal	 vi.  策划阴谋 n. 阴谋小集团；阴谋
baleful	 adj.  有害的； 恶意的
gel	 n.  凝胶体
eminence	 n.  卓越， 显赫， 著名
virulent	 adj.  有剧毒的； 致命的； 敌意的， 痛恨的， 恶毒的
Oxygen O	 n.  氧
predetermine	 v.  预定， 预先确定
divisor	 n.  除数； 约数
transcript	 n.  抄本
troubadour	 n.  行吟诗人
rectangular	 adj.  矩形的； 成直角的
precise	 adj.  精确的， 准确的
power	 n.  幂， 次方
enrapture	 v.  使狂喜
ulterior	 adj.  隐秘的， 别有用心的
suspect	 v. 怀疑，猜疑，疑心 adj.  令人怀疑的 n. 嫌疑犯
infuse	 v.  输入， 注入； 浸泡
oblivion	 n.  遗忘
emaciated	 adj.  瘦弱的； 衰弱的
depth	 n.  深度
mingle	 vi.  混合起来； 相往来 vt. 使混合
edible	 adj.  可以吃的， 可食用的
inscrutable	 adj.  难以理解的； 高深莫测的
antediluvian	 adj.   大洪水前的； 上古的， 古风的
unyielding	 adj.  坚定的， 不能弯曲的； 不屈的
anesthetic	 n.  麻醉剂， 麻药
reveal	 v.  泄露， 显露， 揭露
depot	 n.  储存
hindrance	 n.  妨碍， 障碍
data	 n.  数据
theoretical	 n.  理论的
rightful	 adj.  公正的
sound	 n.  声
hospitable	 adj.  好客的； 招待周到的；  宜人的；  易接受的
impetus	 n.  推动 ， 促进
revitalize	 v.  使苏醒
discourteous	 adj.  失礼的， 无礼貌的
bight	 n.  海岸线  的宽缓弯曲； 海湾
recalcitrant	 adj.  反抗的， 顽强的； 不顺从的
resource	 n.  资源
nuisance	 n.  讨厌的人  ； 麻烦事
delude	 v.  迷惑， 蛊惑
drub	 v.  敲打； 猛烈批评； 彻底打败
tyro	 n.  生手； 初学者； 新手
fission	 n. 〔原子的〕裂变
rectangle	 n.  矩形
interposition	 n.  介入； 干涉
sagacity	 n.  睿智， 聪敏
fractious	 adj.  易怒的， 乖张的
ancestry	 n.  祖先  ； 家系， 血统
abridge	 vt.  删节， 削减， 精简
penalty	 n.  处罚， 惩罚
line	 n.  直线； 线段
scale	 n.  鳞片
vegetation	 n.  植被
aggrandize	 v.  增加， 夸大
jingoism	 n.  沙文主义， 侵略主义
subdivide	 v.  再分； 细分
surmount	 v.  战胜； 超越； 克服
purport	 n.   意义，含义， 主旨
salient	 adj.  显著的， 卓越的； 凸出的， 突起的
matriarchy	 n.  母权制； 母系社会
inure	 v.  使习惯于； 使坚强， 使加固
regimen	 n.  养生之道
obtuse	 adj.  愚蠢的； 迟钝的
ostracize	 v.  放逐； 排斥
obstreperous	 adj.  喧嚣的； 任性的
confidence	 n.  信任； 信心， 自信； 秘密， 机密
eulogize	 v.  称赞， 颂扬
wily	 adj.  老谋深算的
arbitrary	 adj.  任意的； 武断的； 独裁的， 专断的
exultant	 adj.  非常高兴的， 欢跃的
loophole	 n.  枪眼； 观察孔
interrogate	 v.  审问， 询问
assay	 v. 鉴定，化验，分析〔尤指金属纯度或成分等〕
astute	 adj.  机敏的； 狡猾的
humdrum	 adj.  单调的
dignity	 n.  高贵， 体面； 可敬的品格
wile	 n.  诡计， 阴谋， 欺骗
emit	 v.  发出， 放射； 吐露； 散发； 发表， 发行
celibacy	 n.  独身生活； 禁欲
ebullient	 adj.  沸腾的； 热情洋溢的
votary	 n.  信徒； 崇拜者
almanac	 n.  历书； 年鉴
numerous	 adj.  众多的， 许多的， 大批的
accouter	 v.  装备， 配备
encumber	 v.  阻碍
remote	 adj.  偏远的， 偏僻的； 关系疏远的
assassin	 n.  暗杀者； 刺客
conjugation	 n.  结合； 配合
befog	 v.  罩入雾中； 使朦胧； 使迷惑
rupture	 v.  破裂， 裂开； 断绝
antemeridian	 adj.  上午的
stratagem	 n.  计策， 计谋， 策略
carcass	 n.   畜体
paragon	 n.  模范
collusion	 n.  共谋， 勾结
pellucid	 adj.  透明的， 澄清的； 易懂的
fluctuate	 v.  使波动， 使起伏
presentient	 adj.  有预感的
persistent	 adj.  坚持的， 百折不挠的； 持续的
everlasting	 adj.  永恒的； 无止境的
possess	 v.  占有， 拥有
neutral	 adj.  中立的； 中性的， 中和的
coup	 n.  出乎意料的行动
analysis	 n.  分解
apparent	 adj.  明显的， 显而易见的； 表面的； 貌似的
dissension	 n.  意见分歧， 冲突
exposure	 n.  暴露， 揭露； 受到
assonate	 v.   音相谐，  成为准押韵
placate	 v.  安抚
presumption	 n.  假定
humble	 adj. 谦卑的，恭顺的；低下的，卑贱的；粗陋的 v.  降低， 贬抑
commodity	 n.  商品， 物品
airy	 adj.  空气的； 空中的， 通风的； 轻快的
poise	 n.  平衡， 均衡； 姿势； 镇静
independent	 adj.  独立的， 自主的
elocution	 n.  演说； 演说术
urbane	 adj.  有礼貌的， 文雅的
alleged	 adj.  无根据的， 声称的； 所谓的
minuscule	 adj.  极小的
plausible	 adj.  似乎合理的， 似乎可信的
deluge	 v.  使泛滥； 淹， 浸； 压倒
cerebellum	 n.  小脑
revile	 v.  辱骂， 斥责
indulgent	 adj.  纵容的
mundane	 adj.  世界的， 世俗的； 平凡的
insidious	 adj.  阴险的
alkali	 n.  碱， 强碱
fortuitous	 adj.  偶然的， 意外的
slothful	 adj.  偷懒的
antiquarian	 n.  古文物研究者， 收集古文物者
fervent	 adj.  热心的， 热烈的， 强烈的
deceitful	 adj.  欺诈的
pervert	 vt.  使堕落， 诱惑； 使反常
adduce	 vt.  引证， 举出
audition	 n.  听； 听力； 试听
fertilization	 n.  受精
kernel	 n.   核， 仁
stingy	 adj.  吝啬的， 小气的
anode	 n.  阳极； 正极
excavate	 v.  挖掘， 开凿； 挖洞
subtle	 adj.  敏锐的； 精细的， 微妙的
unsavoury	 adj.  声名狼藉的， 寡廉鲜耻的； 难吃的
component	 adj.  组成的， 构成的 n. 成分
impartial	 adj.  公平的， 不偏不倚的
consultant	 n.  会诊医师， 顾问医生； 顾问
indisputable	 adj.  无争论之余地的， 明白的
disguise	 v. 装扮，假扮 n. 伪装物，化装用具；伪装
facet	 n.  方面；  刻面
rationalize	 v.  合理化
novel	 adj.  新奇的， 新颖的 n. 小说
prominence	 n.  突出， 显著
liberal	 adj.  慷慨的， 大方的； 丰富的， 富足的； 自由的， 思想开明的
genial	 adj.  亲切的
epitome	 n.  摘要； 象征
obdurate	 adj.  冷酷无情的； 顽固的， 执拗的
orthodoxy	 n.  正统
imitate	 v.  模仿， 仿效； 仿造， 伪造
dominate	 v.  支配， 统治， 控制； 占优势
rearrange	 v.  再排列， 重新整理
impalpable	 adj.  感触不到的， 摸不到的
exceed	 v.  超过， 胜过
torpid	 adj.  麻木的； 迟钝的；  冬眠的
avert	 vt.  防止， 避免； 转移
callous	 adj.  无情的； 冷淡的； 硬结的； 起老茧的
grievance	 n.  委屈， 冤情， 不平
claimant	 n.  要求者； 原告
area	 n.  面积
monarchy	 n.  君主制
vicious	 adj.  恶毒的， 凶残的， 邪恶的
visibility	 n.  可见度
tractable	 adj.  易驾驭的， 驯良的； 易处理的
determinate	 adj.  确定的
enormous	 adj.  巨大的， 庞大的
sloth	 n.  怠惰
sleight	 n.  技巧， 手法
wiry	 adj.  金属丝般的； 瘦长结实的
external	 adj.  外部的， 外面的
remunerate	 v.  酬劳
aspirant	 adj.  上进的； 有野心的 n. 有抱负者，有野心者
paramount	 adj.  最重要的
salutation	 n.  招呼
agility	 n.  敏捷， 活泼
outgoing	 adj.  即将离职的； 对人友好的
deleterious	 adj.   有害的， 有毒的
sociable	 adj.  好交际的， 友善的； 喜欢群居的
semiconductor	 n.  半导体
obsolete	 adj.  已废弃的， 过时的
instrument	 n.  仪器
gasoline	 n.  汽油
medium	 n.  介质
inhospitable	 adj.  冷淡的， 不好客的；  不适合居住的，  荒凉的
hormone	 n.  荷尔蒙
pyromania	 n.  放火癖， 放火狂
eloquence	 n.  雄辩， 口才
outstrip	 v.  超过
engender	 v.  使发生， 使产生， 引起， 造成
vegetal	 adj.  植物的； 植物性的
inkling	 n.  暗示； 迹象
audacious	 adj.  大胆的； 鲁莽的
perform	 v.  履行， 执行， 做； 表演， 演出
retrospective	 adj.  回顾的
knavery	 n.  流氓行为
germane	 adj.  有密切关系的； 恰当的
evolution	 n.  进化， 演变， 演化
peak	 n.  峰值
lucrative	 adj.  赚钱的， 获利的
quietus	 n.  解脱， 死；  偿清， 义务解除
pastoral	 adj.  田园生活的
redemption	 n.  赎回， 偿还
weightlessness	 n.  失重
complaint	 n.  诉苦， 抱怨
pinnacle	 n.  山顶； 顶点； 尖顶
pediatrics	 n.  小儿科
animadvert	 v.  批判， 非难
analyst	 n.  分析家； 分解者
inject	 v.  注射， 注入
hectic	 adj.  发烧的， 发热的； 兴奋的
copious	 adj.  丰富的， 大量的
inception	 n.  起初
focus	 n.  焦点
hamper	 v.  妨碍， 阻碍
exterminate	 v.  消除
pea	 n.  豌豆
pictograph	 n.  统计图表
overshadow	 v.  遮蔽； 使…失色
unconscionable	 adj.  不合理的； 过度的
anachronism	 n.  不合时代的人或事； 过时现象
assiduity	 n.  勤勉， 刻苦
decisive	 adj.  决定性的
thesis	 n.  论文； 论题； 论点
precursor	 n.  先驱
cameo	 n.  刻有浮雕的宝石或贝壳
revive	 v.  恢复；  复苏
fumigate	 v.  熏蒸
explicate	 v.   解释， 说明；  阐明， 分析， 引申， 发展
arid	 adj.  无趣的； 贫瘠的
period	 n.  周期
amorphous	 adj.  无定形的； 非结晶的
proceed	 v.  进行， 开始， 着手； 出发； 继续进行； 发生， 出自
introspect	 v.  内省， 内观
interpolate	 v.  篡改； 插入
dismiss	 v.  使退去， 让离开， 打发走； 免职， 解雇， 解散， 开除  ； 消除  ； 不考虑
verisimilitude	 n.  逼真的事物
intelligence	 n.  智力， 聪明； 理解力； 情报， 消息， 报导
utilitarian	 adj.  功利的； 功利主义的
automaton	 n.  自动机器； 机器人
analyze	 vt.  分析， 分解
dishevel	 v.  使蓬乱； 使头发蓬松； 使衣服弄皱； 弄乱
bulk	 n. 体积，大小；大多数 vt.  使膨胀或延伸
antiquary	 n.  古文物研究者， 收集古文物者， 古董商
despair	 v.  对…绝望 n. 绝望
champion	 n.  冠军； 战士
stoic	 n. 坚忍克己的人；不以苦乐为意的人
dispensation	 n.  分配； 豁免
circuit	 n.  电路
restrict	 v.  限制， 约束
avuncular	 adj.  伯父的； 伯父似的
conduit	 n.  导管
instant	 adj. 立即的，直接的；紧迫的；速溶的，方便的 n.  瞬间， 即刻
waif	 n.  流浪者
antiquate	 v.  使成为过时而淘汰， 因陈旧而废弃
native	 adj.  本地的； 与生俱来的
legislate	 v.  制定法律， 通过立法
prolix	 adj.  冗长的； 说话嗦的
accolade	 n.  赞美
imperative	 adj. 强制的；必要的；紧急的 n.  必要的事， 必须完成的事； 祈使语气
piecemeal	 adj.  逐渐的
linear	 adj.  线的， 直线的， 线状的； 线性的
robust	 adj.  强壮的， 健康的
dominant	 adj.  支配的， 统治的， 占优势的
devalue	 v.  贬值
Iron Fe	 n.  铁
electrification	 n.  起电
inconsistent	 adj.  不一致的； 不协调的； 矛盾
scribble	 n.  潦草的笔迹
denounce	 vt.  谴责， 公开指责， 公然抨击； 告发某人
jaded	 adj.  疲倦不堪的； 厌倦的
humbug	 n.  欺骗
caucus	 n.   领导人秘密会议； 核心小组会议
ineffectual	 adj.  无效的； 不成功的
microorganism	 n.  微生物
disfigure	 v.  损伤外貌， 使变丑
entity	 n.  实体， 存在物
chronicle	 n.  编年史
prohibit	 v.  禁止， 不准， 阻止
asperity	 n.  严酷； 粗暴； 刻薄
frugal	 adj.  节俭的， 朴素的
bacteria	 n.  细菌
replica	 n.  复制品
carouse	 v.  痛饮， 狂饮欢闹
assessor	 n.   估价员，  审核员； 估税员
reign	 n.  统治， 支配
comestibles	 n.  食物
alkaloid	 n.  生物碱
rationalism	 n.  理性主义， 唯理论
servile	 adj.  奴隶的； 卑屈的
scrupulous	 adj.  小心谨慎的， 细心的
buttress	 n. 扶壁；支持物 vt.  支持，  扶住
kidney	 n.  肾
aphorism	 n.  格言， 警语， 谚语
detract	 v.  转移
rowdy	 n.  无赖， 凶暴的人
brazier	 n.  火盆； 黄铜匠
stock	 n.  备料， 库存， 现货； 股票， 公债； 砧木
verification	 n.  确认， 查证
suspend	 v.  吊， 悬挂； 推迟； 暂停
baldness	 n.  秃头
distraught	 adj.  发狂的
misbehave	 v.  行为不礼貌； 行为不端
vociferous	 adj.  大声叫的， 喊叫的； 喧嚷的
ritual	 adj.  典礼的，  仪式的 n. 典礼，仪式；礼节
quarrelsome	 adj.  喜欢吵架的， 好争论的
voluble	 adj.  易旋转的； 流利的， 健谈的
belittle	 vt.  轻视； 使…显得渺小
indiscriminate	 adj.  不加分析的， 不加选择的
affected	 adj.  假装的， 做作的
resolute	 adj.  坚决的， 果断的
senator	 n.  参议员
impugn	 v.  质疑
tempt	 v.  诱惑， 引诱； 吸引， 使感兴趣
votive	 adj.  奉献的
reciprocate	 v.  互给； 回报； 报答
agape	 adj.  张口发呆的， 目瞪口呆的
inveterate	 adj.  根深蒂固的； 积习的
absolve	 vt.  免除
seclusion	 n.  隔离
denominate	 v.  命名
complication	 n.  复杂化；  因素； 【医】 并发症
procrastinate	 v.  延迟， 耽搁
ether	 n.  以太
nuance	 n.  细微差别
abdomen	 n.  腹， 腹部
embattle	 v.  备战
latency	 n.  潜伏， 潜在； 潜伏物
accost	 vt.  对…说话， 搭话
afoot	 adj.  徒步的； 进行中的
acquittal	 n.  宣判无罪
grievous	 adj.  令人忧伤的
pursue	 v.  追赶， 追踪； 继续； 从事
vulgar	 adj.  粗俗的， 庸俗的； 普通的， 通俗的
catastrophe	 n.  大灾难， 大祸
convey	 v.  运送， 搬运； 传达， 表达
redeem	 v.  赎回， 挽回； 恢复， 补偿； 兑换
rationality	 n.  合理性
conformity	 n.  一致， 符合
monogamy	 n.  一夫一妻制
hysterical	 adj.  情绪异常激动的， 歇斯底里的
cholera	 n.  【医】 霍乱
torpor	 n.  麻痹； 迟钝
allude	 vi.  暗指， 影射， 间接提到
ante-room	 n.  接待室， 前厅
chagrin	 n.  懊恼； 气愤； 委屈
custodian	 n.  管理人； 保管人
forfeit	 v.  没收， 丧失
euphemism	 n.  委婉的说法
choral	 adj.  合唱队的
consecutive	 adj.  连续的
assimilation	 n.  同化； 同化作用
burning	 n.  燃烧
dexterity	 n.  灵巧， 机敏
quotient	 n.  商
encyclopedia	 n.  百科全书
renunciation	 v.  放弃， 弃权； 脱离关系
plunder	 v.  抢劫
drainage	 n.  排水， 排水装置
cilia	 n.  纤毛
indecipherable	 adj.  破译不出的， 难领悟的
bigamy	 n.  重婚； 重婚罪
immigrate	 v.  移居入境
Aluminum	 n.  铝
apparatus	 n.  器械， 设备， 仪器， 装置
proscribe	 v.  禁止
decay	 v. （使）腐烂；（使）变坏 n. 腐烂，朽烂
induct	 v.  感应
fracture	 v.   断裂，  折断 n. 裂缝，裂痕；骨折
figurine	 n.  小雕像
liberty	 n.  自由； 冒失， 冒昧， 失礼
rendezvous	 n.  约会； 约会地点
camaraderie	 n.  同志之爱； 友情
apprentice	 n.  学徒； 初学者
marsh	 n.  湿地， 沼泽， 沼泽地
anthropology	 n.  人类学
chaos	 n.  混乱； 混沌
absorption	 n.  吸收
abundant	 adj.  丰富的， 充分的， 充裕的
pigment	 n.  色素； 颜料
forecast	 n. 预测，预报 v. 预测，预报
deteriorate	 v.   恶化，  变坏
input	 n. 〔输入计算机的〕信息 v. 把〔资料〕输入〔计算机〕
induce	 v.  劝诱； 促使； 引起， 导致； 感应
bisect	 v.  把…二等分
thoroughbred	 adj.   纯种的， 良种的
abnormal	 adj.  反常的， 不正常的
wane	 v.  变小， 衰落
volt	 n.  伏特
satirize	 v.  讽刺
shrewd	 adj.  敏捷的， 机灵的， 精明的， 伶俐的
difference	 n.  差； 差额
baffle	 vt.  困惑； 阻碍； 为难
extricate	 v.  救出； 使脱离
molecule	 n.  分子
circle	 n.  圆
reminiscent	 adj.  回忆往事的
butt	 v.  以头低撞， 碰撞 n. 粗大的一端；笑柄
safeguard	 v. 维护，保护，捍卫 n.  安全装置， 安全措施
diligent	 adj.  勤奋的， 刻苦的
sophisticated	 adj.  尖端的， 复杂的， 先进的； 老练的， 老于世故的
anomaly	 n.  不规则， 异常的人或物
equivocal	 adj.  意义不明确的； 模棱两可的； 可疑的
prehensile	 adj.  适于抓住的
scrutiny	 n.  详细审查
realism	 n.  现实主义
archaic	 adj.  古老的； 古代的； 陈旧的
ravine	 n.  沟壑； 峡谷
inalienable	 adj.   不能让与的， 不可剥夺的
quadrilateral	 n.  四边形
chasm	 n.  深坑， 裂口
butane	 n.  丁烷
reprobate	 v.  非难
digestion	 n.  消化
putrid	 adj.  腐烂的； 非常讨厌的
inclement	 adj.  险恶的； 严酷的
enlist	 v.  征募， 征召， 参军
latest	 adj.  最近的
validate	 v.  使有效， 使有法律效力； 批准； 确认
guileless	 adj.  坦率的
a. 灵巧的， 熟练的	 n.  灵巧， 机敏
inhibit	 vt.  阻止， 妨碍， 抑制
disclose	 v.  泄露； 揭发； 解开
unspeakable	 adj.  无法形容的， 不能以言语表达的
disparate	 adj.  全异的
clientele	 n.  诉讼委托人， 客户
dilapidate	 v.   荒废，  毁坏
defiant	 adj.  挑战的， 挑衅的， 目中无人的
powerless	 adj.  无能力的
oxide	 n.  氧化物
perusal	 n.  熟读， 精读
arbor	 n.  树阴处，  藤架， 凉亭
antagonize	 v.   敌对；  对抗
chart	 n.  图表
evoke	 vt.  唤起， 引起， 使人想起
preface	 n.  序言， 引言， 前言
antagonism	 n.  对抗； 敌对
antagonist	 n.  敌手， 对手
incite	 v.  激动， 煽动
neutron	 n.  中子
mediocrity	 n.  平凡； 平庸之才
interpose	 v.  插入
inexcusable	 adj.  无法辩解的， 不可宽赦的
immense	 adj.  广大的， 巨大的
vacate	 v.  腾出； 空出， 离 ， 退
inherent	 adj.  固有的， 内在的， 天生的
advantageous	 adj.  有利的
encroach	 v.   侵占， 蚕食； 超出通常  界线
facsimile	 n.  复制品， 摹本
definite	 adj.  明确的， 肯定的， 一定的
wary	 adj.  机警的
weight	 n.  重量
intrinsic	 adj.  固有的， 本质的， 内在的
dissemble	 v.  掩饰
guilty	 adj.  犯罪的， 有罪的； 自觉有罪的， 内疚的， 心虚的
median	 n.  中点； 中线
vestige	 n.  退化器官； 残余
kleptomaniac	 n.  有盗窃癖的人
proximity	 n.  接近， 近似
maritime	 adj.  海上的； 海事的， 海运的； 海员的
injurious	 adj.  有害的
quibble	 n.  谬论； 双关话； 俏皮话； 吹毛求疵的意见
plural	 adj. 复数的 n.  复数
prank	 n.  胡闹， 开玩笑， 恶作剧
bullock	 n.  阉牛； 一岁半以下的小公牛
heartrending	 adj.  悲惨的； 令人心碎的
ceremonial	 adj.  仪式的； 礼仪的 n. 仪式
ozone	 n.  臭氧
wave	 n.  波
squabble	 v.  争论
rustic	 adj.  乡村的
distend	 v.  扩大； 膨胀
tipsy	 adj.  喝醉的
lave	 v.  为…沐浴； 洗
prudent	 adj.  谨慎的， 深谋远虑的
autocrat	 n.  独裁者
cower	 v.  畏缩， 退缩
attenuate	 v.  稀释
juxtapose	 v.  并置， 并列
loathe	 vt.  厌恶， 憎恶
rotation	 n.  转动
temerity	 n.  鲁莽； 冒失
intruder	 n.  入侵者
infinitesimal	 adj. 无穷小的，极小的 n.  极小量， 极微量， 无限小
volatile	 adj.  挥发性的； 易变的； 不稳定的
contentious	 adj.  好争吵的； 争论的， 有异议的
communicative	 adj.  爱说话的， 畅谈的
generic	 adj.  一般的， 普通的
endorse	 v.  在  背面签名； 签注 ； 认可
clarity	 n.  清楚， 透明
laud	 n.  称赞， 赞美； 颂歌
seclude	 v.  隐居， 与世隔绝
heinous	 adj.  可憎的， 极恶的
typical	 adj.  典型的， 象征性的
embargo	 v.  禁止  出入港口， 禁止通商， 禁运
quotation	 n.  引用语
watt	 n.  瓦特
nocturnal	 adj.  夜的， 夜间发生的
corrosion	 n.  腐蚀
vortex	 n.  旋涡， 旋风， 涡流；  的中心
notorious	 adj.  臭名昭著的， 声名狼藉的
accusatory	 adj.  非难的， 控诉的， 指责的
verisimilar	 adj.  好像真实的
aggravation	 n.  加重， 恶化； 恼怒
hydrogen	 n.  氢
outstretch	 v.  伸出， 伸展
prate	 v.  唠叨； 闲聊
artifact	 n.  人工制品
hypotenuse	 n.  直角三角形的斜边
aviary	 n.   大型鸟舍； 鸟类饲养场
pedal	 v.  踩踏板； 骑自行车 n. 踏板
endemic	 adj.  风土的； 地方的 n. 地方病
nugatory	 adj.  无价值的； 无效的
insightful	 adj.  洞察力强的
ambulance	 n.  救护车
extraction	 n.  萃取
philosophy	 n.  哲学
slope	 n.   斜率
blatant	 adj.  明显的； 明目张胆的； 厚颜无耻的
pungent	 adj.  辣的；  有刺激性的
lapse	 vi.  终止， 失效； 陷入  …状态 n. 失误，疏忽；行为有失检点，失足；流逝，间隔
perfunctory	 adj.  马虎的； 敷衍的
latent	 adj.  潜在的， 潜伏的， 不易察觉的
quandary	 n.  困惑， 窘境， 进退两难
regenerate	 v.  使再生； 重建
light	 n.  光
nauseate	 v.  产生恶感， 厌恶； 作呕
corporal	 adj.  肉体的； 身体的
stanza	 n.  诗的一节
diode	 n.  二级管
impute	 v.  归罪于， 归咎于， 归因于
indomitable	 adj.  不屈服的， 不屈不挠的
acidify	 v.  使酸化， 使成酸性
antibiotics	 n.  抗生素
muddle	 v.  混合
jocund	 adj.  欢乐的， 高兴的
ponderous	 adj.  笨重的； 冗长的， 沉重的； 呆板的
infection	 n.  感染
stubborn	 adj.  顽固的， 倔强的； 难对付的， 难以克服的
actuate	 vt.  开动， 促使
emigrate	 v.  迁居
triangle	 n.  三角形
sinuous	 adj.  蜿蜒的； 曲折的
alien	 adj.  外国的； 相异的； 不相容的 n. 外侨；外星人
bucolic	 adj.  牧羊的； 牧歌的； 田园风味的
attest	 v.  证明
cavil	 v.  吹毛求疵， 挑剔； 指责
berate	 vt.  严厉指责； 申斥
profligate	 adj.  放荡的， 荒淫的； 挥霍浪费的
lexicon	 n.  词典
predatory	 adj.  掠夺的； 食肉的
deficient	 adj.  不足的， 缺乏的， 欠缺的
impropriety	 n.  不适当的行为； 不适当
yip	 v.  犬吠； 叫喊
barrel	 n.  桶； 枪管， 炮管
unify	 v.  统一， 使成一体
sapiential	 adj.  明智的
rookie	 n.  新手
ravage	 v.  毁坏， 掠夺
barren	 adj.   贫瘠的， 荒芜的； 不结果实的， 不  育的； 无益的， 没有结果的
garrulous	 adj.  饶舌的， 多嘴的
accompanist	 n.  伴奏者
fungi	 n.  真菌
grandiose	 adj.  宏伟的； 冠冕堂皇的， 浮夸的
permanent	 adj.  永久的， 持久的
foster	 adj.  收养的， 收养孩子的 vt. 收养，养育；领养；培养，促进
tricycle	 n.  三轮车
facility	 n. 设施；设备；容易；灵巧
gregarious	 adj.  社交的； 群居的
hydrolysis	 n.  水解作用
beam	 n.  光束
peevish	 adj.  易怒的， 暴躁的
gallant	 adj.  英勇的， 豪侠的
inalterable	 adj.  不能变更的， 不变的
visage	 n.  面貌， 容貌
solidification	 n.  凝固
perspire	 v.  出汗， 流汗
emulate	 n.  仿效； 超越
assonant	 adj.  谐韵的
synthesize	 v.  综合； 合成
irascible	 adj.  易怒的， 暴躁的
sanguineous	 adj.  血的
peremptory	 adj.  断然的； 专横的； 强制的
circumlocution	 n.  婉转曲折的陈述
vindictive	 adj.  报复性的
playwright	 n.  剧作家
interrupt	 v.  中断， 阻碍； 打断 ， 打扰
emphasis	 n.  强调， 重点
beau	 n.  好打扮者； 花花公子； 男朋友
feasible	 adj.  可行的， 切实可行的
unassuming	 adj.  谦逊的； 不装腔作势的
forebode	 v.  预示， 预言， 预兆
prepossess	 vt.  使先有好感， 使偏爱； 预先拥有
potential	 adj. 潜在的，可能的；势的，位的 n.  潜能， 潜力
volant	 adj.  会飞的； 迅速的， 敏捷的
actuary	 n.  保险进算师， 保险  计算员
gross	 adj.  总的， 毛的
vigilant	 adj.  警惕着的， 警醒的
tact	 n.  机智， 老练
bereave	 vt.  剥夺， 使失去
epicure	 n.  美食家
allotment	 n.  分配
archive	 n. 档案馆 vt.  存档
valorous	 adj.  勇敢的， 无畏的
stimulate	 v.  刺激， 使兴奋； 激励， 鼓舞
eclipse	 n.  日食， 月食
square	 n.  正方形
counteract	 v.  抵消， 中和； 阻碍
animosity	 n.  仇恨， 憎恶
debilitate	 v.  使衰弱， 使虚弱
interference	 n.  干涉
commute	 v.  交换； 减刑； 通勤
altitude	 n.  高度， 海拔
riddance	 n.  摆脱； 解除
classify	 v.  分类， 分等
nadir	 n.  天底； 最低点； 深渊
composure	 n.  镇静， 沉着
beck	 n.  点头示意； 招手示意
convergence	 n.  集中
stipend	 n.  薪金， 定期生活津贴
allusion	 n.  典故， 引用典故； 暗示
sacrosanct	 adj.  不可侵犯的； 极神圣的
point	 n.  小数点
beguile	 vt.  诱骗； 诱惑
debut	 n.  初次登台
forerun	 v.  预示； 跑在…之前
prehension	 n.  抓住； 理解
evanescent	 adj.  易消散的； 会凋零的
stripling	 n.  年轻人
uphold	 v.  支持， 赞成； 举起； 坚持
alias	 n.  别名， 化名
dimension	 n.  尺寸， 尺度； 维  ； 度  ， 元
nostalgia	 n.  思家病， 乡愁； 向往过去, 怀旧之情
obtrusive	 adj.  突出的； 强迫的； 引人注意的
alternative	 adj.  选择性的， 两者择一的 n. 两者择一，可供选择的办法
workmanship	 n.  手艺， 技艺， 技巧
encounter	 v. 遇到，遭遇〔尤指问题或反对〕 n. 相遇，邂逅
soda	 n.  苏打
empathetic	 adj.  移情作用的， 感情移入的
lassitude	 n.  疲乏； 没精打采
agrarian	 adj.  有关土地的， 耕地的
extrovert	 n.  性格外向者
mean	 v. 表示…的意思；意指；意味着；意欲，打算；注定；怀有特定用意；具有意义 adj. 低劣的，卑鄙的；平庸的；没有价值的；难看的，破旧的；吝啬的；中等的；平均的；中项的 n.  平均 ， 中数
pedestrian	 adj.  徒步的； 呆板的； 平庸的 n. 步行者
appall	 vt.  使惊骇， 使大吃一惊， 使恐怖
radioactive	 adj.  放射性的， 放射引起的
repulse	 v.  拒绝， 排斥； 憎恶
hoarse	 adj.  嘶哑的
rectitude	 n.  正直； 公正
tenable	 adj.   守得住的， 可防守的；  站得住脚的；  有条理的
stimulant	 n.  刺激物
vivacity	 n.  活泼
appreciate	 vt.  感谢， 感激； 正确评价， 欣赏， 赏识
undersize	 adj.  较一般为小的， 不够大的
qualitative	 adj.  性质上的， 定性的
diverse	 adj.  多种多样的， 不同的， 变化多的
murderous	 adj.  行凶的， 凶恶的； 非常危险的
fictitious	 adj.  小说中的， 假想的； 假装的； 虚伪的
intellect	 n.  智力
preoccupy	 v.  使全神贯注， 迷住
preference	 n.  偏爱， 喜爱； 优惠； 优先选择
mainstream	 n.  主流
enthusiast	 n.  热情者， 热衷者
apotheosis	 n.  尊为神， 神话； 典范
temperate grassland	 温带草原，温带草地
alchemy	 n.  炼金术
distort	 v.  弄歪  ； 扭曲， 歪曲
litigious	 adj.  好诉讼的； 好争论的
population	 n.  种群
discern	 v.  认出， 发现； 辨别， 识别； 看清楚
cancellation	 n.  约掉； 消掉
flexible	 adj.  柔韧的， 易弯曲的， 灵活的
diurnal	 adj.  日间的
transience	 n.  短暂
overstride	 v.  跨过， 超过， 越过
timorous	 adj.  胆小的
agile	 adj.  敏捷的， 轻快的； 灵活的
corpse	 n.  尸体
phonic	 adj.  声音的； 有声的
intoxicate	 v.  使陶醉； 使中毒
replenish	 v.  补充
amenable	 adj.  顺从的， 服从劝导的
mirror	 n.  镜
edify	 v.  启发； 教化
perennial	 adj.  四季不断的， 终年的
sustainable	 adj.  可维持的
inflammatory	 adj.  煽动性的
liquor	 n.  酒， 烈性酒
catabolism	 n.  分解代谢
characteristic	 adj.  特有的， 表示特性的； 典型的
secede	 v.  脱离， 分离
rouse	 v.  惊起； 唤起， 唤醒
boorish	 adj.  粗野的， 粗鄙的
reprehend	 v.  责备
disparity	 n.  不同， 不等； 不一致
affix	 vt.  使附于， 黏贴
saccharine	 adj.  糖  的， 似糖的； 产糖的， 含糖的
replicate	 v.  复制
desultory	 adj.  散漫的， 不连贯的
parsimonious	 adj.  吝啬的； 过于俭省的
assemble	 vt.  集合， 集会； 装配， 组装
noticeable	 adj.  显而易见的， 值得注意的
transition	 n.  转变， 过渡
atonement	 n.  赎罪， 弥补过失
chivalry	 n.   骑士精神； 骑士制度
repel	 v.  击退； 抵制， 拒绝， 排斥
underscore	 v.  画线于…下； 强调
series	 n.  系列
timidity	 n.  胆小， 羞怯， 怯懦
imaginative	 adj.  富有想象力的， 想象的； 幻想的， 虚构的
serum	 n.  血清
blase	 adj.  不感兴趣的； 厌倦的
celebrity	 n.  名声
archaeologist	 n.  考古学家
accountant	 n.  会计人员， 会计师
malignancy	 n.  恶意
apathetic	 adj.  缺乏兴趣的， 缺乏感情的； 无动于衷的
inborn	 adj.  天生的， 生来的， 先天的
inconvenient	 adj.  不便的， 有困难的
presentiment	 n.  预感， 不祥之感
absurd	 adj.  荒唐的
blockade	 v.  封锁 n. 阻塞
purgatory	 n.  炼狱， 暂时的苦难
trait	 n.  特征， 特点， 特性
solute	 n.  溶质
serviceable	 adj.  耐用的
landmark	 n.   明显的陆标， 地标； 划时代的事件； 界碑
hundredth	 n.  第一百个； 百分之一
impregnable	 adj.  无法攻取的， 坚不可摧的
venerate	 v.  崇敬
vacuous	 adj.  空虚的； 茫然若失的， 无所事事的
afterthought	 n.  事后的想法， 追悔
trough	 n.  波谷
blandishment	 n.  奉承， 哄诱
abed	 adv.  在床上
contradictory	 adj.  反对的， 矛盾的
preeminence	 n.  卓越， 杰出
succulent	 adj.  多汁的， 多水分的
accompany	 v.  陪同， 伴随； 为…伴奏
obviate	 v.  消除； 排除； 预防
probity	 n.  正直； 诚实
perspicuous	 adj.   明白易懂的， 清楚的
immediate	 adj.  直接的； 立即的， 即刻的
excerpt	 n.  摘录， 选录， 节录
abet	 vt.  教唆， 煽动； 帮助， 支持
minnow	 n.  鲤类小鱼
platitude	 n.  陈词滥调； 陈腐
subtlety	 n.  微妙， 敏锐， 细微的区别
upbraid	 v.  责备， 叱责
landlord	 n.  房东， 地主
factious	 adj.  闹派别的； 好捣乱的
ingratiate	 v.  使迎合， 使讨好
introductory	 adj.  引导的， 介绍的
buffoon	 n.  小丑
caitiff	 adj.  卑劣的； 胆小的
apiece	 adv.  每人， 每个
lurid	 adj.  苍白的， 可怕的； 血红的； 耸人听闻的
preempt	 v.  预先制止； 抢在…之前做或说
hone	 v.   磨， 把…放在磨石上磨 n. 细磨刀石
cursory	 adj.  仓促的， 草率的
insouciance	 n.  漫不经心， 不在乎
primp	 v.  细心打扮， 过分装饰
corroborate	 v.  使坚固； 确证
bland	 adj.  温和的， 柔和的； 乏味的； 冷漠的
atone	 vi.  弥补
disparage	 v.  蔑视， 贬损； 使失去信誉
yummy	 adj.  美味的； 赏心悦目的
bursar	 n.   会计
outlast	 v.  比…长久， 比…活得长
utopian	 adj.  乌托邦的， 理想化的
tangible	 adj.  确实的， 触摸得到的， 具体的
impend	 v.  即将发生
pious	 adj.  虔诚的
congest	 v.  使充满， 使拥塞
mordent	 n.  【音】 波音
witticism	 n.  妙语； 俏皮话
approximately	 adv.  近似地， 大约地
diplomat	 n.  外交官
monocracy	 n.  独裁政治
incubus	 n.  梦魇； 沉重的负担
hut	 n.  小屋， 棚屋
artifice	 n.  巧办法； 欺骗
collaborate	 v.  协作， 合作
superficial	 adj.  表面的； 肤浅的， 浅薄的
opprobrium	 n.  耻辱； 责骂
mirage	 n.  海市蜃楼； 幻想
impasse	 n.  僵局
subterranean	 adj.  地下的
lacerate	 v.  割裂
demolition	 n.  毁坏
displacement	 n.  位移
oration	 n.  演说
casualty	 n.  伤亡事故； 人员伤亡
whimsical	 adj.  异想天开的； 反复无常的
prism	 n.  棱镜
penury	 n.  贫困， 贫穷
cartographer	 n.  地图制作者
valedictory	 adj. 告别的 n.  告别词
idolatry	 n.  偶像崇拜； 盲目崇拜
studious	 adj.  好学的； 刻苦的， 勤奋的
ridicule	 v.  嘲笑， 奚落
propulsion	 n.  推进力
butte	 n.   孤山， 孤峰
sensitive	 adj.  敏感的； 灵敏的
scintillate	 v.  发出火花
singe	 v.  烧焦， 烤焦
irate	 adj.  生气的， 发怒的
impression	 n.  印象， 感想； 盖印， 压痕
inequity	 n.  不公平， 不公正
appease	 vt.  平息； 安抚， 缓和； 满足
impede	 v.  妨碍， 阻碍， 阻止
volitive	 adj.  意志的， 表示祈望或准许的
pepsin	 n.  胃蛋白酶
shield	 v.  保护， 防护， 遮蔽 n.  防护物， 护罩， 盾， 盾状物
statuesque	 adj.  雕像般的； 庄严而优雅的
anatomy	 n.  解剖学； 解剖结构
gratuity	 n.  赠物， 赏钱
credo	 n.  信条
instantaneous	 adj.  瞬间的， 即刻的
phenomenon	 n. 现象
writhe	 v.  扭曲， 扭歪； 翻腾
quarterly	 adv. 每季一次 adj. 每季的 n.  季刊
zephyr	 n.  西风； 微风
alienable	 adj.  可让与的
abbey	 n.  大修道院； 大教堂
sensibility	 n.  敏感性
bibliography	 n.   书目； 参考书目
buoyant	 adj.  有浮力的； 轻快的
chloroplast	 n.  叶绿体
intrepid	 adj.  无畏的； 勇猛的
travail	 n.  辛苦； 苦役； 工作
dullard	 n.  傻瓜
generalize	 v.  推广
accredit	 v.  信任
condenser	 n.  冷凝器
paradoxical	 adj.  似非而是的； 自相矛盾的
dissever	 v.  割裂； 分开
postdate	 v.  推迟…的日期
subdue	 v.  征服； 抑制
positive	 adj. 确实的，明确的；积极的，肯定的；正的，阳性的；十足的，完全的 n.   正片
trigger	 vt. 引发，导致 n.  扳机
culmination	 n.  顶点
meticulous	 adj.  小心翼翼的
recriminate	 v.  反责， 反唇相讥
jubilation	 n.  庆祝
radar	 n.  雷达
withhold	 v.  拒绝， 不给
presumptuous	 adj.  自以为是的； 专横的
twinge	 n.  阵痛， 刺痛， 剧痛
refugee	 n.  难民， 流亡者
kinetic	 adj.   动学， 动力  的
rotate	 v.   旋转
bowler	 n.  玩保龄球的人；  投手
instance	 n.  例子， 事例， 例证
spartan	 n.  斯巴达人； 强悍勇敢、 结实强壮的人
inconsequential	 adj.  不合逻辑的； 不合理的
inheritance	 n.  遗传
convoluted	 adj.  旋绕的； 费解的
laconic	 adj.  简洁的， 简明的
embitter	 v.  使有苦味； 使受苦， 使难受； 使怨恨
reptile	 n.  爬行动物
integer	 n.  整数
tantalize	 v.  挑逗， 惹弄
receptive	 adj.  善于接受的， 能接纳的
heterogeneous	 adj.  不同种类的
astound	 vt.  使惊骇， 使大吃一惊
solution	 n.  溶解
extrude	 v.  突出， 伸出
opponent	 adj.  对立的， 对抗的 n. 对手，反对者，敌手
supplementary	 adj.  增补的， 补充的
accelerate	 v.  加速； 促进
spate	 n.  大水； 大量
emblem	 n.  象征， 徽章， 符号
sophism	 n.  诡辩； 谬论
wavelength	 n.  波长
clutter	 n.  混乱， 喧嚣
meteorology	 n.  气象学
divisible	 adj.  可整除的
canonical	 adj.  规范的； 权威的
nomad	 n.  游牧民； 流浪者
abrade	 v.  磨损， 摩擦； 折磨
convenient	 adj.  方便的； 便利的
vernal	 adj.  春天的
populous	 adj.  人口多的， 人口稠密的
curtail	 v.  缩减， 减少
exhume	 v.  掘出； 发掘
nexus	 n.  连结
transgression	 v.  侵越， 超过； 违背； 犯罪； 犯规
abundance	 n.  丰富， 充裕
quantum	 n.  量子
peerless	 adj.  无匹敌的， 无比的， 无双的， 绝世的
suasion	 n.  说服； 劝告
competitor	 n.  竞争者
magnitude	 n.  大小， 数量； 巨大， 广大； 重要性， 重要程度
agitate	 v.  鼓动， 搅动； 搅拌； 使激动， 使不安
insulator	 n.  绝缘体
nebulous	 adj.  星云的， 云雾状的； 模糊的， 朦胧的
prescript	 adj.  作为条例指定的， 指定的
immune	 adj.  免疫的， 有免疫力的； 不受影响的； 免除的， 豁免的
equation	 n.  等式， 方程式
stern	 adj. 严厉的，苛刻的；严峻的，难对付的 n.  船尾， 舟尾
rotary	 adj.  旋转的
brandish	 v.  挥舞； 炫耀
compound	 n.  化合物
volition	 n.  意志
discredit	 v.  不信； 使成为不可信； 败坏…的声誉 n. 丧失信用；怀疑，不信任
badger	 v.  烦扰； 吵着要 n. 獾；獾皮毛
underlie	 v.  成为…的基础
extraordinary	 adj.  非常的， 格外的
yearling	 n.  一岁家禽
gnash	 v.  咬牙切齿
flagella	 n.  鞭毛
attraction	 n.  引力
conventional	 adj.  惯例的， 常规的； 习俗的， 传统的
complicate	 v.   变复杂
hypocrisy	 n.  伪善； 虚伪
relent	 v.  变温和； 减弱， 缓和
simplify	 v.  单一化， 简单化
hypocrite	 n.  伪君子
sedulous	 adj.  勤勉的
credible	 adj.  可信的
intentional	 adj.  有意图的， 故意的
insensate	 adj.  没有感觉的
blockbuster	 n.  风靡一时之物；  巨型炸弹
solder	 v.  焊接 n. 焊料
bungle	 vt.  办糟
negligible	 adj.  可以忽略的， 微不足道的
misstep	 n.  失足
temporal	 adj.  时间的
pentagon	 n.  五边形
proton	 n.  质子
setback	 n.  挫折， 阻碍
brokerage	 n.  经纪人之业务； 回扣
pointer	 n.  指针
hydroxide	 n.  氢氧化物
primordial	 adj.  原始的， 初发的
habitude	 n.  习俗
vitamin	 n.  维生素
dissimilar	 adj.  不同的
elongate	 v.  拉长
enthusiastic	 adj.  热情的， 热心的
fray	 v.  磨损
wield	 v.  支配， 掌权
disastrous	 adj.  灾难性的， 悲惨的
impulse	 n.  冲量
remonstrance	 n.  抗议
chastity	 n.  纯洁； 贞节； 简洁
prominent	 adj.  突起的， 凸起的； 杰出的， 著名的； 显著的
insulin	 n.  胰岛素
ironic	 adj.  讽刺的， 反讽的
permeable	 adj.  有浸透性的， 能透过的
pedagogue	 n.  教师； 喜欢卖弄学问的教师
pusillanimous	 adj.  懦弱的， 胆小的， 优柔寡断的
fundamental	 adj. 基础的，基本的 n.  基本原则， 基本原理
global	 adj.  全球的， 世界的； 球状的， 球面的； 总括的， 普遍的， 综合的， 全局的
promulgate	 v.  发布； 传播
counselor	 n.  顾问； 律师
excess	 adj. 过量的，额外的 n.  过量， 过剩
temperature	 n.  温度
perspective	 n.  透视画法， 透视图； 远景， 前途； 观点， 看法
retaliate	 v.  报复
tactician	 n.  有谋略的人
equality	 n.  等式
admonition	 n.  警告
reaction	 n.  反应， 反作用
transverse	 adj.  横向的； 横断的
jubilant	 adj.  欢呼的
valor	 n.  英勇， 勇猛
adhesion	 n.  黏着； 因守； 皈依
monotone	 n.  单调
repine	 v.  抱怨
vainglorious	 adj.  虚荣的
evolve	 v.   发展，  进化， 演化； 引申出， 推理， 引出
face	 n.  立体的面
circumnavigate	 v.  环航
narcissistic	 adj.  自恋的， 自我陶醉的
abandon	 vt.  放弃； 放纵
cessation	 n.  停止
sacrilege	 n.  亵渎圣物
extol	 v.  赞美
intolerable	 adj.  无法忍受的； 难受的
operation	 n.  运算
adverse	 adj.  不利的， 有害的
preemption	 n.  优先购买  ； 抢先占有
ratio	 n.  比； 比率
junction	 n.  连接， 接合； 交叉点， 接合处， 枢纽站
electrolysis	 n.  电解作用
circumvent	 vt.  智胜， 用计谋取胜， 挫败
habitual	 adj.  习惯的， 惯常的
conditional	 adj.  有条件的； 以…为条件的
instinct	 n.  本能， 直觉， 天性
gourmet	 n.  美食家
melancholy	 adj.  忧郁
redoubtable	 adj.  可怕的
niggardly	 adj.  吝啬的， 小气的
genesis	 n.  起源
probate	 v.  检验遗嘱 n. 遗嘱；遗嘱检验
bumptious	 adj.  盲目自大的， 傲慢的
beseech	 v.  恳求； 哀求
subliminal	 adj.  下意识的； 潜在意识的
engrave	 vt.   雕刻；  铭记， 深印于 ， 铭刻
exhaustive	 adj.   详尽的， 无遗漏的， 彻底的
awkward	 adj.  笨拙的， 不灵活的； 棘手的； 尴尬的； 使用不便的
provincial	 adj.  省的， 州的； 狭隘的
glimmer	 n.  闪光
ruin	 v. 破产；堕落，毁灭 n.  毁灭， 崩溃； 废墟， 遗迹
leaven	 v.  使发酵
maudlin	 adj.  感情脆弱的
celebrate	 v.  庆祝， 祝贺
abut	 v.  领接， 毗邻
anemia	 n.  贫血， 贫血症
ultramontane	 adj.  山那边的  ； 阿尔卑斯山以南的
incommodious	 adj.  不便的， 偏促的， 狭窄的
rankle	 v.  激怒
geometric	 n.  几何级数， 等比级数
campaign	 vi.  参加活动， 从事活动； 作战 n. 战役；活动，竞选运动
salvage	 n.  抢救财物
vital	 adj.  生死攸关的， 重要的， 重大的； 生命的， 生机的
euphonious	 adj.  悦耳的， 声音和谐的
seethe	 v.  沸腾； 激动， 骚动
delusion	 n.  错觉
ebullience	 n.  奔放的； 兴高采烈的
barrister	 n.  律师； 法律顾问
derivative	 adj. 衍生的；无创意的 n.  衍生物
amateur	 adj.  业余的 n. 业余活动者
condemn	 v.  谴责， 指责； 判刑， 宣告有罪
lexicographer	 n.  词典编纂者
fallacious	 adj.  谬误的； 虚伪的； 使人误解的
causal	 adj.  原因的， 因果关系的
mansion	 n.  大厦， 官邸
summary	 n.  摘要， 概要
nickel	 n.  五分
offshoot	 n.  分支， 支流
akin	 adj.  近似的， 有关系的， 类似的
inebriate	 v.  灌醉
antedate	 v.  提前日期； 先于， 早于 n.  比正确日期早的日期
propaganda	 n.  宣传
ascetic	 adj.  苦行的； 禁欲主义的
dramatic	 adj.  戏剧的， 剧本的； 戏剧性的； 引人注目的； 突然的
archetype	 n.  原型
chastise	 v.  严惩， 惩罚
imaginary	 adj.  假想的， 想象的， 虚构的
bestial	 adj.  野兽的； 兽性的； 残忍的
venerable	 adj.  值得尊敬的
vaporize	 v.   蒸发
transcend	 vt.  超出， 超越  的范围
chronological	 adj.  编年史， 按年代顺序的
coerce	 v.  强制； 强迫
surcharge	 v.  额外收费 n. 额外费用
equestrian	 adj.  骑马的， 骑术的； 马的
sturdy	 adj.  强健的， 结实的
reasoning	 n.  推理
fable	 n.  寓言， 神话； 谎言
quixotic	 adj.  唐吉诃德式的； 狂想的
instill	 v.  慢慢地灌输
palatable	 adj.  美味的
photosynthesis	 n.  光合作用
politic	 adj.  精明的； 有策略的
profiteer	 n.  奸商， 乘机获暴利者
opportune	 adj.   凑巧的， 恰好的；  及时的， 适宜的
scathe	 v.  损伤， 损害， 伤害
dielectric	 n.  电介质
crest	 n.  波峰
profession	 n.  职业， 自由职业； 公开表示
deplore	 v.  表示悲痛
ecstatic	 adj.  欣喜若狂的， 入迷的， 出神的
botanize	 v.  研究植物； 采集植物
compress	 v.  压缩， 浓缩
resilient	 adj.  弹回的， 有回弹力的
cherish	 v.  珍爱； 怀抱
outlive	 v.  比…长命， 比…耐久； 经受住
resistance	 n.  反抗， 抵抗； 抵抗力
fallible	 adj.  易错的， 可能犯错的
occlude	 v.  使闭塞
spectrum	 n.  谱， 光谱， 频谱； 范围； 幅度
natal	 adj.  出生的， 诞生的
prolong	 v.  拉长， 延长
inhuman	 adj.  野蛮的
nuclei	 n.  核
remnant	 n.  残余部分， 剩余部分
linguistics	 n.  语言学
compressible	 adj.  可压缩的， 可压榨的
interlocutor	 n.  对话者
irksome	 adj.  令人厌恶的； 讨厌的
seize	 v.  抓住， 逮住； 夺取
nettle	 v.  刺激； 惹怒
privilege	 v.  给予优惠， 给予特权 n. 特权，优惠，特许
shroud	 v.  遮蔽； 隐藏
discontinue	 v.  停止， 中断
uniform	 adj.  一直不变的
amplitude	 n.  振幅
bountiful	 adj.  慷慨的； 宽大的； 大量的
blaze	 vi.  燃烧， 冒火焰； 照耀， 发光 n. 火焰；光辉
meager	 adj.  缺乏的
belabor	 vt.  过分冗长地讨论； 痛打； 辱骂
scatter	 v.  分散， 散开； 撒开， 驱散
polarization	 n.  偏振
collective	 adj.  集体的 n. 集体
pheromone	 n.  外激素
wherever	 adv.  无论那里； 无论什么情况下
delineate	 v.  描绘
innocuous	 adj.  无害的； 无毒的
innate	 adj.  先天的， 天生的
siege	 n.  包围， 围困
gratify	 v.  使满意， 使高兴； 纵容
abstract	 v. 摘要，提炼 adj.  抽象的； 深奥的； 理论的 n. 摘要，概要，抽象
liquid	 n.  液体
anonymous	 adj.  匿名的； 无名的； 无特色的
vivacious	 adj.  活泼的， 快活的
fake	 adj. 假的，冒充的 n. 假货，赝品；骗子，冒充者 vt.  伪造， 捏造； 伪装
egocentric	 adj.  自我中心的， 自私自利的
nonplus	 v.  使困惑
impurity	 n.  杂质
bizarre	 adj.  古怪可笑的； 奇异的
docile	 adj.  听话的， 温顺的
abridgement	 n.  删节， 节略
ascribe	 vt.  归因于， 归咎于
minority	 n.  少数； 少数派； 少数民族
stringent	 adj.  严厉的； 迫切的
space	 n.  空间
preferable	 adj.  更可取的， 更好的
cauterize	 vt.  烧灼， 烙； 使麻木不仁
arrange	 v.  整理； 排列； 布置； 安排； 筹备
litmus	 n.  石蕊
recuperate	 v.  复原， 恢复
exponent	 n.  指数
circuitous	 adj.  迂回线路的， 不直接的
commitment	 n.  委任； 许诺
fossil	 n.  化石
jocular	 adj.  诙谐的； 打趣的
disciple	 n.  信徒， 门徒； 追随者
munificent	 adj.  宽宏的， 慷慨的
autocratic	 adj.  独裁的， 专制的
collision	 n.  碰撞
arbiter	 n.  仲裁者
calorie	 n.  卡路里  ， 大卡
predicament	 n.  困境
slogan	 n.  标语， 口号
bosom	 n.  胸部， 胸
acerbic	 adj.  酸的； 尖刻的
aforesaid	 adj.  上述的， 前述的
inefficacious	 adj.  无效力的， 无用的
unwitting	 adj.  不知情的
trite	 adj.  陈腐的
deportment	 n.  行为， 举止
ingrate	 n.  忘恩负义者
frequent	 adj.  时常发生的； 频繁的； 常见的
stymie	 v.  从中作梗， 完全妨碍
interact	 vi.  互相作用， 互相影响
outright	 a& ad.  直率  地， 痛快  地； 全部  地
error	 n.  误差
superintend	 v.  主管， 指挥， 监督
network	 n.  网状物； 广播网， 电视网； 网络
ocular	 adj.  眼睛的； 视觉的
aggregate	 v.  聚集， 集合； 合计
forsake	 v.  放弃， 抛弃
rust	 v.  生锈
pomp	 n.  壮观； 盛况； 炫耀
complicity	 n.  同谋， 共犯
nominee	 n.  被提名的人， 被任命者
discriminate	 v.  区别， 辨别； 有差别地对待， 歧视
camouflage	 n. 伪装 vt.  伪装
account for	 对…负有责任；对…做出解释；说明……的原因；导致；（比例）占
annex	 v.  并吞， 附加 n. 附件
potentate	 n.  君主， 统治者
procure	 v.  取得， 获得
monetary	 adj.  金融的， 货币的
quantity	 n.  量， 数量
argumentation	 n.  论证
antitoxin	 n.  抗毒素
stifle	 v.  使窒息； 扼杀， 抑制
bacchanalia	 n.    酒神节； 狂饮作乐
demolish	 v.  毁坏， 破坏； 推翻， 粉碎
artificial fertilization	 n. 人工受精；[畜牧] 人工授精
round	 v.  四舍五入
ambassador	 n.  大使
transfigure	 v.  美化
sanctimonious	 adj.  假装神圣的
misinterpret	 v.  曲解
unsettle	 v.  使不安
eyepiece	 n.  接目镜
vague	 adj.  不明确的， 含糊的
juridical	 adj.  法律上的
resplendent	 adj.  灿烂的； 光辉的； 华丽的
ion	 n.  离子
ephemeral	 adj.  朝生暮死的； 短暂的， 短命的
braggart	 n.  吹牛者
impunity	 n.  不受惩罚
probation	 n.  试用； 见习； 鉴定， 检验； 缓刑
precipice	 n.  悬崖； 危急的处境
graduate	 n.  量筒， 量杯； 一量筒或量杯的量
unanimous	 adj.  全体一致的， 一致同意的
thermal	 adj.  热的， 由热造成的； 保暖的
orifice	 n.  孔， 口
sulfur	 n.  硫
rag	 v.  揶揄， 戏弄， 欺负 n. 抹布；破旧衣服
ablution	 n.  清洗
diagnostic	 adj.  诊断的
grief	 n.  悲伤， 悲痛； 悲伤的事， 悲痛的缘由
navigate	 v.  航行， 航海； 导航； 驾驶； 横渡； 〈喻〉设法穿越
culpable	 adj.  该谴责的
excellent	 adj.  卓越的， 极好的
ray	 n.  射线
moratorium	 n.  延期偿付
wizen	 adj.  枯萎或皱缩的
gainsay	 v.  否认； 反对
untimely	 adj.  不适时的， 不合时宜的
nationality	 n.  国籍， 民族
artful	 adj.  巧妙的， 狡猾的
harangue	 n.  长篇大论， 滔滔不绝的高声训斥
endure	 v.  忍受， 容忍， 持久， 持续
feign	 v.  装作， 假装； 伪造， 捏造， 杜撰
jerky	 adj.  急拉的， 急动急停的
rhetorical	 adj.  修辞学的
primer	 n.  初级读本
essence	 n.  本质， 实质
ornamental	 adj.  装饰性的
prowess	 n.  英勇； 非凡的能力
sentimental	 adj.  情感上的； 多愁善感的
bulbous	 adj.  球根的， 球根状的， 球根长成的
maneuver	 v.  调遣； 换防
indiscernible	 adj.  难识别的， 看不见的
omnipotent	 adj.  全能的
begrudge	 vt.  羡慕； 舍不得给
dual	 adj.  双的， 二重的， 双重的
vocabulary	 n.  词汇， 词汇量； 词汇表
treatise	 n.  论文； 论述
hirsute	 adj.  多毛的； 有鬃毛的
cupidity	 n.  贪心， 贪婪
efface	 v.  抹掉
vegetarian	 n.  素食主义者
aggressive	 adj.  侵略的， 好斗的； 敢作敢为的， 有进取心的； 积极的； 强有力的
resilience	 n.  弹回， 有弹力， 恢复力
ire	 n.  愤怒
pathos	 n.  痛苦， 感伤； 悲悯， 同情
irk	 v.  使厌倦； 使苦恼
mitigate	 v.  减轻
succinct	 adj.  简洁的
reconciliation	 n.  和解， 调和， 和谐一致
disdain	 n.  轻蔑
stratum	 n. 岩层；地层
overt	 adj.  公然的
invasion	 n.  侵入， 侵略
precedent	 n.  先例， 范例， 惯例
dissect	 v.  解剖； 仔细研究
pulley	 n.  滑轮
concordant	 adj.  协调的； 一致的
loquacious	 adj.  多话的
malaise	 n.  不舒服
scour	 v.  擦洗； 冲刷
persuasive	 adj.  善说服的
inculpable	 adj.  无罪的
numeration	 n.  计算， 编号
centenary	 adj.  百年的 n. 百年
rural	 adj.  农村的
demise	 n.  死亡
acclaim	 v.  欢呼， 称赞； 欢呼着同意 n. 称赞，欢迎
laxative	 adj.  通便的
pandemic	 adj.  大范围流行的
languor	 n.  身心疲惫
acid	 n.  酸
transmission	 n.  播送， 发射； 传动， 传送， 传播， 传染
paroxysm	 n.  发作； 突发
negligence	 n.  疏忽
dubious	 adj.  有问题的， 靠不住的；  怀疑的； 犹豫不决的； 半信半疑的， 可疑的
intuition	 n.  直觉
swift	 adj.  快速的， 敏捷的
ductile	 adj.  易延展的； 易教导的
add	 v.  加
liquidate	 v.  清算
accede	 vi.  同意； 即位， 继任
ratify	 v.  批准
effulgence	 n.  光辉， 灿烂
vivify	 v.  给予生气， 使复生； 使生动， 使活跃
abstemious	 adj.  有节制的  ； 节约的
amend	 v.  修改， 修正
finite	 adj.  有限的；  限定的
carbon monoxide	 n. 一氧化碳
constructive	 adj.  建设性的
propitious	 adj.  吉利的； 顺利的
tantrum	 n.  发脾气
nullify	 v.  使无效
benevolent	 adj.  慈善的
ado	 n.  纷扰； 忙乱
purloin	 v.  偷窃， 盗取
fusion	 n.  融熔
carnivore	 n.  食肉动物
pharmacy	 n.  药房； 药剂学； 配药业， 制药业
upheave	 v.  举起， 推上去使上升， 隆起
adjustment	 n.  调节
rationalization	 n.  合理化
reproductive system	 [解剖] 生殖系统；繁殖方式
treachery	 n.  背叛， 反叛
aborigine	 n.  土著居民
benevolence	 n.  仁爱心； 善行
disinfect	 v.  消毒
expiate	 v.  赎罪； 补偿
perjure	 v.  发假誓， 作伪证
grandeur	 n.  庄严， 宏伟， 壮观
laser	 n.  激光； 激光器
mixture	 n.  混合物
scope	 n.   范围； 机会， 余地
stratify	 vt.  使成层， 使分层； 使形成阶层
archaeology	 n.  考古学
enumerate	 v.  数， 点； 枚举， 列举
morale	 n.  士气， 民心
expatriate	 v.  逐出国外
estrange	 v.  疏远
embrace	 v.  拥抱； 包含
intersect	 v.  直线相交
breech	 n.  臀部
assailant	 n.  攻击者
nitrogen	 n.  氮
judicious	 adj.  明智的； 审慎的
denude	 v.  使裸露； 剥夺
vermin	 n.  害虫， 害兽， 寄生虫
modify	 vt.  更改， 修改， 改造， 修饰
steadfast	 adj.  稳定的； 坚定的， 忠实的
effusive	 adj.  过分热情的
mariner	 n.  水手
villainous	 adj.  恶毒的， 缺德的
detest	 v.  厌恶， 憎恨
exempt	 adj.  被免除  的， 被豁免的 vt. 免除，豁免
theorize	 v.  建立理论， 理论化
reservoir	 n.  水库， 蓄水池
fawn	 v.  奉承， 讨好
albeit	 conj.  虽然
aesthetic	 adj.  美学的， 艺术的； 审美的
incongruous	 adj.  不调和的； 不适宜的
tendency	 n.  趋向， 趋势
furbish	 v.  擦亮； 磨光
caption	 n. 标题 vt.  加上标题； 加上说明
arithmetic	 n.  算术
knighthood	 n.  骑士身份， 骑士风格， 侠义精神
variation	 n.  变化， 变动； 变种， 变异
subconscious	 adj.  下意识的
carbohydrate	 n.  糖类
chateau	 n.  城堡； 别墅
codicil	 n.  遗嘱的附录； 附录
eject	 v.  喷射， 排出； 驱逐
defect	 n.  缺陷
odds	 n.  事物发生的可能性， 机会
acme	 n.  顶点， 顶端
casual	 adj.  偶然的； 临时的
incomprehensible	 adj.  不能理解的
rebut	 v.  反驳； 揭穿
morass	 n.  沼泽； 困境
rhombus	 n.  菱形
telepathy	 n.  心灵感应， 感应
captious	 adj.  吹毛求疵的； 挑剔的
frenetic	 adj.  发狂的； 狂热的
nonchalant	 adj.  冷淡的
shrubbery	 n.  灌木林
script	 n.  剧本， 广播稿； 文字体系； 笔迹， 手迹
guise	 n.  外观， 装束； 伪装， 假装
likelihood	 n.  可能， 可能性
reactionary	 adj.  反作用的， 反动的
imprudent	 adj.  不谨慎的； 轻率的
drastic	 adj.  激烈的；  猛烈的
venial	 adj.  可宽恕的
innovate	 vi.  革新， 创新
vaporization	 n.  蒸发
accommodate	 v.  留宿， 收容； 供应， 供给； 调和， 适应
tenacity	 n.  坚韧
protagonist	 n.  领导者； 积极参加者
assertion	 n.  主张； 断言， 声明
prevaricate	 v.  支吾； 说谎
outcome	 n.  结果， 成果
polar	 adj.  地极的， 近地极的； 磁极的
synthesis	 n.  综合； 合成
advertiser	 n.  登广告者； 广告客户
cryptic	 adj.  秘密的， 含义模糊的
circumspect	 adj.  慎重的； 周到的
synopsis	 n.  大纲
meditate	 v. 沉思，冥想；反省；考虑；策划 vt.  内心策划
tribulation	 n.  苦难， 磨难
prototype	 n.  原型； 标准； 模范
demographic	 adj.  人口统计学的
recollect	 v.  回忆， 想起， 记起
acne	 n.  【医】痤疮， 粉刺
altercation	 n.  争论， 口角
cite	 v.  引用， 引证
acquaintance	 n.  相识， 熟人
atom	 n.  原子
bethink	 v.  想起
infamous	 adj.  声名狼藉的
prosaic	 adj.  散文的， 散文体的； 乏味的， 平凡的
fledgling	 n.  羽毛初长的雏鸟， 刚会飞的幼鸟； 无经验的人
precision	 n.  准确， 精确； 精确度
viceroy	 n.  总督
assertive	 adj.  断言的， 肯定的
larvae	 n.  幼虫
tolerable	 adj.  可容忍的； 可以的， 尚好的
body	 n.  物体
mode	 n.  众数
elapse	 vi.   消逝， 流逝
symmetry	 n.  对称  ； 匀称， 整齐
acrimony	 n.  刻毒； 讽刺； 毒辣
nemesis	 n.  报应； 复仇女神
retouch	 v.  润饰
buffer	 n.  缓冲器
bristle	 v.   竖起； 发怒 n. 刚毛，猪鬃
complement	 n. 补足物 vt.  补助， 补足
qualify	 v.   具有资格， 证明合格； 限制， 限定； 修饰
abhorrence	 n.  痛恨， 憎恶
adhere	 v.  黏附， 胶着； 坚持
vapid	 adj.  索然乏味的
sediment	 n.  沉淀物， 沉积物
tremulous	 adj.  震颤的； 颤抖的
unit	 n.  单位
panorama	 n.  全景； 概括， 综述
contemporary	 adj.  现代的， 当代的； 同时代的
substantive	 adj.  独立存在的； 真实的， 有实质的； 大量的， 巨额的
scowl	 v.  皱眉头
vermicide	 n.  驱虫剂， 打虫药
mock	 v. 嘲笑，讥笑 adj. 仿制的，假装的；模拟的，演习的 n.  模拟考试
archipelago	 n.  群岛； 多岛屿的海
territorial	 adj.  领土的
sensor	 n.  传感器
cathode	 n.  阴极
credence	 n.  信用， 信任
facilitate	 v.  使变得  容易， 使便利
rob	 v.  抢夺， 抢掠； 剥夺
verdant	 adj.  翠绿的， 青翠的； 生疏的， 没有经验的
accession	 n.  就职； 添加物， 增加物
buoyancy	 n.  浮性
rebellious	 adj.  谋反的， 反叛的； 反抗的； 难控制的
tacit	 adj.  默许的
demagoguery	 n.  煽动群众者
ration	 v.  配给， 分发， 实行定量配给 n. 定量，配给量；定量配给
predict	 v.  预言， 预测， 预告
linchpin	 n.  关键
undermine	 v.  暗中破坏， 逐渐削弱； 侵蚀…的基础
gloaming	 n.  黄昏；薄暮
subjective	 adj.  主观的
radical	 adj. 基本的，重要的；激进的，极端的；根本的 n.  根号， 根式
blunt	 adj.  钝的； 不敏感的； 坦诚的， 直率的
contingent	 adj.  可能发生的
hoary	 adj.   灰白的； 古老的， 古色古香的
reck	 v.  顾虑
minute	 adj.  微小的 n. 分，分钟；笔记；会议记录 vt. 记录，摘要
analogy	 n.  比拟， 类比
acerbity	 n.  涩， 酸； 刻薄
transcendent	 adj.  卓越的， 出众的
redolent	 adj.  芬芳的
milestone	 n.  里程碑， 里程标； 重要事件， 转折点
productive	 adj.  生产  的； 能产的， 多产的
reliant	 adj.  信赖的， 依靠的
outburst	 n.   爆发， 突发
hypothesis	 n.  假说， 假设， 前提
collapse	 v.  倒塌， 崩溃； 虚脱
profuse	 adj.  极其丰富的； 奢侈的
comprehend	 v.  理解， 了解
multiplicity	 n.  多样性
synchronous	 adj.  同时的
paraphrase	 v.  解释， 释义
battalion	 n.  军营； 军队
ribaldry	 n.  下流， 下流的话
bronchus	 n.  【解】 支气管
altar	 n.  祭坛，  圣坛；  讲坛
protein	 n.  蛋白质
modicum	 n.  少量， 一点点
immune system	 n. 〔身体的〕免疫系统
annual	 adj.  一年一次的， 每年的； 一年生的 n. 一年生植物；年刊，年鉴
exclusive	 adj.  专有的， 独占的； 除外的， 排他的
demur	 v.  犹豫不决
sequacious	 adj.  盲从的
poverty	 n.  贫穷； 缺少， 贫乏， 不足；  贫瘠
dwindle	 v.  减少； 缩小
perplexing	 adj.  复杂的， 令人困惑的
tarnish	 v.  失去光泽
inchoate	 adj.  未形成的， 不完全的， 早期的
testament	 n.  作为确实的证据或实证的事物； 遗嘱
mount	 v. 登上，爬上；安装，装配，固定，镶嵌 n.  支架， 底座， 底板； 山峰
acquiesce	 vi.  默许， 勉强同意
auspice	 n.  预兆， 吉兆；  占卜； 赞助； 支持
hodgepodge	 n.  大杂烩
telescope	 v.  压缩 n. 望远镜
requital	 n.  报酬； 报复
aqueous	 adj.  水的； 水般的
photography	 n.  照相术
accuse	 v.  控告， 谴责， 非难
visceral	 adj.  内脏的； 出自内心的
accentuate	 v.  着重强调
autocracy	 n.  独裁政治； 独裁政府
mutilate	 v.  毁伤
forthright	 adj.  直率的； 径直的
voluptuous	 adj.  性感的； 纵欲的
impotent	 adj.  无力的， 虚弱的； 无效的
algebra	 n.  代数学
aristocracy	 n.  贵族； 贵族政府； 贵族统治
espouse	 v.  嫁娶； 支持， 赞成
inspiring	 adj.  灌输的； 鼓舞的
acquire	 vt.  取得， 获得； 学到
fertile	 adj.  肥沃的， 富饶的； 能繁殖的
diversity	 n.  差异； 多样性
arc	 n.  弧， 圆周的任意一段
auricular	 n.  耳的； 耳状的
dividend	 n.  被除数
abstruse	 adj.  奥妙的， 深奥的
retard	 v.  延迟， 使减速
esteem	 n. 尊敬，敬重 v. 尊敬，敬重
acclivity	 n.  向上的斜坡
outweigh	 v.   超过
obfuscate	 v.  使模糊； 使混乱
decimal point	 n.  小数点
vociferate	 v.  大叫， 喊叫
antemundane	 adj.  世界形成以前的
collagen	 n.  胶原蛋白
miserly	 adj.  吝啬的， 贪婪的
empower	 v.  授权， 准许
suppress	 v.  镇压， 压制； 抑制， 忍住
ownership	 n.  所有 ， 所有制
tumor	 n.  肿瘤
ossify	 v.  使骨化； 使硬化
fulsome	 adj.   因过分而显得可厌的
serene	 adj.  安定的， 没有风波的； 沉着的， 沉静的， 安详的
fabulous	 adj.  极好的， 极妙的； 寓言般的， 神话般的； 惊人的， 难以置信的
dilemma	 n.   窘境， 困境
solace	 v.  安慰； 平息； 抚慰
belated	 adj.  误期的； 迟来的
rue	 v.  后悔， 懊悔
seditious	 adj.  煽动的； 煽动叛变的
disregard	 v.  不理， 不顾； 蔑视
lifetime	 n.  一生， 终身
cant	 v.  使倾斜； 倾斜 n. 伪善之言；隐语，行话；斜面
enact	 v.  制定法律， 颁布
indiscreet	 adj.  不慎重的， 轻率的
treacherous	 adj.  背叛的， 背信弃义的
scrutinize	 v.  细察
extinguish	 v.  熄灭 ， 消灭， 扑灭； 结束； 使失色， 使黯然
aeronautics	 n.  航空学； 航空术
vulnerable	 adj.  易受伤害的， 易受攻击的
affiliation	 n.   隶属关系； 隶属， 从属
defraud	 v.  欺骗
molt	 v.  脱毛；换毛
subjugate	 v.  征服， 镇压
piteous	 adj.  哀怨的， 可怜的
donate	 v.  捐赠， 赠送
deplete	 v.  耗尽； 使衰竭
recurrent	 adj.  再发生的， 周期性发生的， 循环的
bonanza	 n.  富矿带； 致富之源， 幸运
egregious	 adj.  异乎寻常的； 震惊的； 极坏的
sanguine	 adj.  血红的； 红润的； 乐观的， 怀有希望的
bole	 n.  树干， 树身
significant	 adj.  有意义的， 意味深长的； 重要的， 重大的； 非偶然的
consecrate	 v.  用作祭祀， 献给， 使神圣
complaisant	 adj.  彬彬有礼的， 殷勤的； 柔顺的
derisive	 adj.  嘲笑的， 可付之一笑的
catalogue	 n.  目录； 目录册
glycerol	 n.  甘油
agitation	 n.  煽动； 搅动； 使不安
overlap	 v.  部分重叠， 部分搭交
debase	 vt.  降低， 贬损
assassinate	 vt.  暗杀， 行刺； 中伤
forbearance	 n.  自制， 忍耐
complaisance	 n.  彬彬有礼； 殷勤
boon	 n.  恩惠； 实惠； 利益
distance	 n.  距离
abstain	 vi.  禁绝， 放弃
absence	 n.  不在场， 缺席； 缺乏， 没有
malicious	 adj.  怀恶意的， 恶毒的
vigilance	 n.  警戒； 警惕
surrogate	 n.  代理者； 代用品
outrageous	 adj.  蛮横的， 残暴的； 无耻的， 可恶的
solicitous	 adj.  热切的； 期望的
analogous	 adj.  类似的， 相似的； 可比拟的
abbreviate	 v.  缩写， 缩短， 简化
anticlimax	 n.  突降法， 突减； 虎头蛇尾
equivocate	 v.  说模棱两可的话； 支吾
adherent	 n.  信徒， 追随者， 拥护者
lavish	 adj.  非常大方的； 过分丰富的； 浪费的
grimy	 adj.  污秽的
approbation	 n.  官方批准； 认可， 嘉许
clarification	 n.  澄清
monk	 n.  和尚； 僧侣； 修道士
bond	 n.  原子的聚合
convoke	 v.  召集
discourse	 n. 〔关于某个主题的〕演讲，论述，著述
momentum	 n.  动量
obstruct	 vt.  阻塞， 截断， 堵塞； 阻碍， 阻止， 妨碍
oust	 v.  剥夺， 取代， 驱逐
octagon	 n.  八边形
ardor	 n.  热情
labyrinth	 n.  迷路， 迷宫； 难解的事物； 【解】  迷路
aquatic	 adj.  水的， 水上的； 水生的， 水栖的
kiosk	 n.  亭子
sequent	 adj.  接续而来的
symbolize	 v.  象征， 作为…的象征
cerebration	 n.  用脑， 思考
commotion	 n.  骚动； 暴乱
bounce	 v. （使）弹起，（使）反弹，（使）弹跳 n. 跳起，弹回，反弹
usage	 n.  用法， 惯用法
ammonia	 n.  氨
proficiency	 n.  熟练， 精通
oxidizer	 n.  氧化剂
anxious	 adj.  担忧的； 渴望的， 盼望的
drudgery	 n.  苦差事， 苦工
auditory	 adj.  耳的； 听觉的
monition	 n.  忠告； 警告
serendipity	 n.  意外发现珍奇  事物的本领
apothecary	 n.  药剂师； 药材商
olfactory	 adj.  嗅觉的
severely	 adv.  严格地， 激烈地
feint	 n.  伪装， 假装， 佯攻
elevate	 v.  举起， 提高， 抬高； 提升， 提拔； 使精神振奋， 使兴高采烈
designate	 v.  指明， 指出， 任命， 指派
slick	 adj.  光滑的； 熟练的
oppressive	 adj.  压制性的， 压迫的， 沉重的； 难以忍受的
generation	 n.  产生， 发生； 生殖， 生育； 一代人， 世代
humiliate	 vt.  使屈辱， 使丢脸
superintendent	 n.  主管， 负责人， 指挥者， 管理者
sulfur disoxide	 n. 二氧化硫
calculable	 adj.  可计算的； 能预测的
gene	 n.  基因
educe	 v.  得出, 导出； 引出， 唤起， 使显出
aye	 n.  赞成票； 投赞成票者
unequivocal	 adj.  明确的； 坦白的， 直率的
cleanliness	 n.  洁净
effigy	 n.   肖像， 雕像； 模拟像
feral	 adj.  野生的， 未驯服的； 野兽的
tenacious	 adj.  顽固的
omen	 n.  预兆， 征兆
desiccate	 v.  使干涸， 使脱水， 使枯竭
spectroscope	 n.  分光镜
jungle	 n.   丛林， 密林； 乱七八糟的一堆
armada	 n.  舰队
annalist	 n.  编年史编者
vindicate	 v.  为…而辩护； 复仇
apprehensible	 adj.  可了解的， 可理解的
bestrew	 v.  散布， 布满
unilateral	 adj.  一方的； 单方的； 一侧的， 片面的
pejorative	 adj.  轻蔑的； 贬抑的
misnomer	 n.  误称
ingenuous	 adj.  天真的， 坦白的
preferential	 adj.  先取的， 特惠的
bleak	 adj.  阴冷的， 寒冷的； 没有指望的； 令人沮丧的
kiln	 n.  窑
reclusive	 adj.  隐遁的， 隐居的
connective tissue	 n. 结缔组织〔如肌肉等〕
physics	 n.  物理学
bilateral	 adj.  有两边的， 双边的
glorious	 adj.  壮丽的， 辉煌的； 光荣的
aptitude	 n.  能力， 才能； 天资
besmear	 v.  涂抹； 弄脏
vile	 adj.  卑鄙的， 可耻的， 恶劣的； 坏透的
levity	 n.  轻率； 轻浮； 变化无常
reliance	 n.  信赖， 依靠
apostasy	 n.  变节， 背教， 脱党
dauntless	 adj.  不屈不挠的， 大胆的
superfluous	 adj.  多余的， 过剩的， 过量的； 不必要的
glycogen	 n.  糖原
conductor	 n.  导体
appreciable	 adj.  可感知的； 可评估的
reprieve	 v.  暂减， 缓期执行
apostate	 n.  变节者， 背教者， 脱党者
astringent	 adj.  收敛性的； 止血的； 尖刻的 n. 收敛剂
disorder	 n.  无序
aggravate	 vt.  恶化， 加重， 加剧
waive	 v.  放弃
transistor	 n.  晶体管
persevere	 vi.  坚持不懈， 锲而不舍
bowdlerize	 vt.  删除  不妥的文句； 删改； 修订
questionable	 adj.  可疑的
tyranny	 n.  暴政； 专政
voluminous	 adj.  多卷的； 容量大的； 庞大的
sealant	 n.  密封剂
amicable	 adj.  友善的
philanthropic	 adj.  博爱的
alleviate	 v.  减轻， 缓解， 缓和
obscurity	 n.  阴暗， 朦胧； 隐匿， 晦涩
afire	 adj.  燃烧着的
condescending	 adj.  谦逊的， 故意屈尊的
shun	 v.  避开， 避免
desiccant	 n.  干燥剂
sedative	 adj. 镇静的，止痛的 n.  镇静剂， 止痛药
factual	 adj.  事实的； 事实上的， 实际的
negotiate	 v.  谈判， 交涉， 商议
recondite	 adj.  深奥的； 隐藏的
supposition	 n.  假定， 想象； 推测， 推想
tumult	 n.  骚动； 烦乱
exigent	 adj.  紧急的， 迫切的； 苛求的， 要求很高的
shatter	 v.  打碎， 使散开； 粉碎， 破坏
vaudeville	 n.  歌舞杂耍； 综合演出
resurrection	 n.  复苏
glimpse	 n. 一瞥，瞟一眼 v. 一瞥，看一眼
transfer	 v.  转移， 调动， 转职； 转车； 转业， 转学； 转让， 过户
efficacious	 adj.  有效的； 灵验的
diversion	 n.  转向， 转移， 变更
affluence	 n.  富裕； 大量， 丰富
equiangular	 adj.  等角的
unscrupulous	 adj.  肆无忌惮的， 无道德的； 不谨慎的
morbid	 adj.  病态的
autopsy	 n.   尸体解剖； 验尸
erroneous	 adj.  错误的， 不正确的
limitation	 n.  限制， 局限性
destitution	 n.  贫穷， 穷困
terrify	 v.  使害怕， 使惊恐
denigrate	 v.  贬低， 诋毁
downplay	 v.  不予重视
inspiration	 n.  吸入， 吸气； 鼓舞， 激动； 灵感
alto	 n.  女低音； 女低音歌手
proctor	 n.   学监
theorist	 n.  理论家， 空谈家
highlight	 v. 使显著，使突出；强调 n.   光线最强处； 最精彩的部分， 最重要的事件
administrator	 n.  管理人； 行政官员
billion	 n.   万亿  ；  十亿
sheer	 adj.  全然的， 纯粹的； 绝对的， 彻底的； 极其薄的， 透明的； 峻峭的
compliment	 v.  称赞， 褒扬， 恭维 n. 称赞，恭维；致敬，问候
veracious	 adj.  说真话的， 可靠的； 真实的， 正确的
sequester	 v.  使隐退； 使隔绝； 扣
fugue	 n.  赋格曲
subvert	 v.  推翻； 搅乱， 暗中破坏
amount	 v.  合计
original	 adj. 最初的，原始的，原文的；新颖的，有独创性的 n.  原物， 原作， 原文
sap	 v.  使衰竭 n. 树汁；体液
album	 n.  集邮簿， 相册
adherence	 n.  黏着； 坚持； 忠诚
arrant	 adj.  彻头彻尾的； 声名狼藉的， 极恶的
glutinous	 adj.  黏性的
prosecutor	 n.  检举人
feudal	 adj.  封建的
pestilence	 n.  瘟疫
differ	 v.  不同， 相异
facetious	 adj.  幽默的， 滑稽的； 喜开玩笑的
affiliate	 n. 附属机构，分公司 vt.  使隶属  于
recessive	 adj.  隐性的
plane	 n.  平面
equivalent	 adj. 相等的，等价的，等值的；等面积的；等体积的 n.  相等物， 等价物， 等值物
momentary	 adj.  瞬间的， 刹那间的
hypocritical	 adj.  伪善的， 伪君子的
gloat	 v.  幸灾乐祸
christen	 v.  命名为
sensational	 adj.  轰动性的， 引起哗然的
depraved	 adj.  堕落的， 颓废的； 邪恶的
facile	 adj.  易做到的， 易得到的； 熟练的， 流畅的；  柔顺的， 温和的
alienate	 vt.  疏远
perfidious	 adj.  背信弃义的
plague	 n.  祸患， 瘟疫， 灾害
retrospect	 n.  回顾， 反顾
ban	 n. 禁止，禁令 vt.   禁止
canon	 n.   教规；  正典， 经典圣经；  真作集
apposition	 n.   并置， 并列
fascinate	 v.  使着迷； 使神魂颠倒
diplomatic	 adj.  外交的， 老练的； 策略的， 有手腕的
projector	 n.  投影仪
importunate	 adj.  不断要求的， 急切的
percipient	 adj.  感知的； 有觉察力的
complex	 adj.  复杂的 n. 联合体
fluid	 adj. 流动的，液体的 n.  流体， 液体
submersion	 n.  淹没
resonate	 v.   共鸣
pamphlet	 n.  小册子
posit	 v.  安置
ornate	 adj.  装饰的， 华丽的；  绚丽的
neutralization	 n.  中和
proliferate	 v.   繁殖， 繁衍； 激增
disclaim	 v.  放弃， 弃权； 拒绝
vernacular	 n.  方言； 本地话
hazardous	 adj.  危险的， 冒险的； 碰运气的
artery	 n.  动脉
florid	 adj.   华丽的；  红润的
plastic	 n.  塑胶
transient	 adj.  短促的， 片刻的， 一瞬间的； 暂住的， 临时的
wittingly	 adv.  有意地， 故意地
disrepute	 n.  坏名声
sonorous	 adj.   洪亮的， 响亮的； 能发出响亮的声音的 		【记】	词根记忆： son  + orous → 声音洪亮的
canny	 adj.  谨慎的； 精明的
hesitation	 n.  踌躇， 含糊； 口吃， 停顿
neophyte	 n.  新入修道院者； 新信徒
bibliophile	 n.  爱书者， 藏书家
accursed	 adj.  被咒的
insulate	 vt.  隔离， 孤立； 使绝缘， 使绝热
scarcity	 n.  缺乏
icon	 n.  图标； 偶像； 雕像
onerous	 adj.  繁重的； 麻烦的； 负有法律责任的
fervid	 adj.  热烈的， 热情的， 激烈的
amputate	 v.  切除
isolate	 v.  隔离， 孤立
effectual	 adj.  奏效的， 有效的
subsequent	 adj.  随后的， 后来的
omission	 n.  省略， 忽略， 疏忽
metabolic	 adj.  变化的； 新陈代谢的
tremor	 n.  震动； 颤动
plummet	 v.  垂直落下 n. 铅锤
set	 n.  集合
punctuate	 v.  加标点于； 不时打断； 强调
column	 n.  列； 圆柱
portent	 n.  征兆
procedure	 n.  手续， 步骤
biography	 n.  传记
integrate	 v.   成为一体，  结合在一起，  合并
pique	 n.  不满， 生气
pompous	 adj.  华而不实的； 自命不凡的； 浮华的
decry	 v.  谴责
validity	 n.  有效性， 正确性
earnest	 adj.  热心的， 诚挚的， 认真的
shrinkage	 n.  收缩
spider	 n.  蜘蛛
inordinate	 adj.  紊乱的； 过分的
testimonial	 n.  证明书
precede	 v.  领先 ， 在  前； 优先， 先于
disillusion	 v.  觉醒； 幻灭
humorous	 adj.  幽默的， 诙谐的
deride	 v.  嘲弄， 嘲笑
vehement	 adj.  激烈的， 猛烈的；  热烈的
differentiate	 v.  区分， 区别；  不同
reticent	 adj.  沉默寡言的
advocacy	 n.  拥护； 提倡
contact	 n.  接触
discharge	 v. 正式准许〔某人〕离开〔尤指让病人出院或让军人退伍等〕；通知〔病人〕出院；开除〔士兵〕军籍 n. 准许离开；出院；退伍
digit	 n.  数字，  数
disadvantage	 n.  不便， 不利， 不利的情况；  损害， 损失
suspicious	 adj.  可疑的， 令人怀疑的
zeal	 n.  热心， 热情
polygamy	 n.  一夫多妻制， 一妻多夫制
epitaph	 n.  墓志铭， 碑文
renovate	 v.  革新； 刷新， 修复
crepuscular	 adj.  朦胧的； 拂晓的； 黄昏的
mediator	 n.  调停者， 仲裁人
lucid	 adj.  清澈的； 透明的
invidious	 adj.  易招嫉妒的， 有害的； 诽谤的
humane	 adj.  有人性的， 有同情心的
perpendicular	 adj.  垂直的， 正交的
unruly	 adj.  不受拘束的， 难驾驭的
ordinate	 n.  纵坐标
depress	 v.  压抑， 降低； 使沮丧， 使消沉； 使萧条
boisterous	 adj. 〔尤指儿童〕喧闹的，活跃的
repress	 v.  压制
appalling	 adj.  令人震惊的， 骇人听闻的
reagent	 n.  试剂
candid	 adj.  无偏见的， 公正的； 坦白的， 率直的
vicissitude	 n.  变换； 兴衰
brigade	 n.  旅， 队
decoy	 n. 诱饵，用作诱饵的人
diffident	 adj.  缺乏自信的
inimical	 adj.  敌意的
coercion	 n.  强迫， 威压
corpulent	 adj.  肥大的， 肥胖的
parse	 v.  从语法上分析
reparable	 adj.  可修缮的； 可赔偿的
indicant	 adj.  指示的， 表示的
trajectory	 n.  轨道
descry	 v.  察看， 发现； 远远看到
prerogative	 n.  特权
elusive	 adj.  逃避的； 难懂的， 难捉摸的
appraise	 vt.  评价， 评定
implicate	 v.  使受牵连； 暗示
unwieldy	 adj.  笨拙的， 难处理的， 难使用的， 笨重的
realm	 n.  王国， 国土； 领域
extenuate	 v.  减轻
anemometer	 n.  风速计
comprehensive	 adj.  内容广泛的， 综合的
atheism	 n.  无神论
cornea	 n.  角膜
odoriferous	 adj.  有香气的
mechanical	 adj.  机械的， 机械制的； 机械似的， 呆板的
tirade	 n.  长篇的攻击性演说
invoke	 v.  唤起； 引起
brigand	 n.  土匪， 强盗， 歹徒
candor	 n.  坦白， 直率
gossamer	 n.  蛛丝； 薄纱
hemolysis	 n.  溶血
output	 n. 产量；产品 v. 〔计算机〕输出〔信息〕
knead	 v.  揉  成团， 捏制
symmetrical	 adj.  对称的， 均匀的
calumniate	 v.  中伤； 诽谤
deft	 adj.  巧妙的， 熟练的； 敏捷的， 灵巧的
baton	 n.  司令棒， 指挥棒， 警棍
vain	 adj.  徒然的， 无益的； 自负的， 虚荣的
fretful	 adj.  烦躁的， 焦躁的
harmonious	 adj.  协调的； 相称的； 和睦的， 融洽的
foresight	 n.  远见， 深谋远虑
spheroid	 n.  球状体
lung	 n.  肺
intercept	 vt.  中途拦截， 截击， 截取
verdict	 n.  裁定； 定论， 判断， 意见
reconsider	 v.  重新考虑， 重新审议
bacterium	 n.  细菌
cadaverous	 adj.  像尸体的； 苍白的
proportion	 n.  比， 比率； 比例
cogitate	 v.  思考， 考虑
crystal	 n.  晶体
stupor	 n.  昏迷
lugubrious	 adj.  可怜的， 悲惨的， 悲哀的
abhorrent	 adj.  可恶的
arboretum	 n.  树园， 植物园
ruthless	 adj.  残酷的， 无情的
simile	 n.  明喻
composed	 adj.  镇静的； 沉着的
prejudice	 v.  使抱偏见； 影响某人； 损害 n. 偏见，成见；损害，侵害
dissolve	 v.   溶解，  融化；  分解
angle	 n.  角
clergy	 n.  牧师， 神职人员
levee	 n.  防洪堤， 大堤
urgent	 adj.  急迫的， 紧迫的
cyclical	 adj.  轮转的
optic	 adj.  眼的； 视觉的； 光学上的
fanatic	 adj. 狂热的，盲信的 n.  狂热者， 盲信者， 入迷者
table	 v.  搁置； 把…列入议事日程 n. 桌子，台子；一桌人；表格
trestle	 n.  脚手架； 栈桥
side	 n.  边， 立体的面
predominate	 v.  统治， 支配； 占优势
systematic	 adj.  系统的， 体系的
vogue	 n.  时尚， 风气， 流行
gypsum	 n.  石膏
combustible	 adj.  易燃的
irrevocable	 adj.  不能取消的
stupendous	 adj.  惊人的； 巨大的
condescend	 v.  谦逊， 屈尊
transitory	 adj.  瞬间的， 一时的， 昙花一现的
mercurial	 adj. 墨丘利神的；水星的；精明的，易变的；水银的 n.  汞制剂
frowzy	 adj.  不整洁的
shuffle	 v.  搅乱； 洗牌
disburse	 v.  支付
keepsake	 n.  纪念品
constant	 n.  常量
congruent	 adj.   全等的
lament	 v.  哀悼； 悔恨 n. 悲伤，哀悼，恸哭；挽诗，悼词
intermittent	 adj.  间歇的， 断断续续的
outrage	 vt. 激怒 n.  暴行， 骇人听闻的事件； 愤慨
insatiable	 adj.  不知足的， 贪求无厌的
adumbrate	 v.  预示； 画轮廓
timbre	 n.  音色， 音质
felonious	 adj.  极恶的， 重罪的
immerse	 v.  使沉浸在； 使浸没， 使陷入
perilous	 adj.  危险的
helix	 n.  螺旋
coercive	 adj.  强制的； 强迫的
sardonic	 adj.  嘲笑的， 挖苦的， 讥讽的
onrush	 n.  奔流； 猛冲
depreciate	 v.  反对； 轻视； 折旧，  贬值
electromagnet	 n.  电磁体
peripheral	 adj.  周界的， 外围的， 外部的， 边缘的
discretion	 n.  判断 ， 辨别  ； 慎重， 谨慎
bailiff	 n.  法庭监守， 法警
beget	 vt.  做父亲； 为…生父； 产生； 引起， 招致
sordid	 adj.  肮脏的
magnanimous	 adj.  宽宏大量的； 高尚的
luminary	 n.  发光体； 才智出众的人
enamor	 v.  使倾心； 使迷恋
relevant	 adj.  有关的
deter	 v.  阻止
synthetic	 adj.  合成的， 人造的； 综合的
commodious	 adj.  宽敞的
enthrone	 v.  使登基； 崇拜， 尊崇
forceps	 n.  镊子
proclaim	 v.  宣告， 声明； 显示， 显露
jeopardize	 vt.  危害
tense	 adj. 拉紧的， n. 时态
protuberate	 v.  隆起， 凸出
excrement	 n.  排泄物
preordain	 v.  预定； 注定
decorous	 adj.  有礼貌的
predominant	 adj.  主要的， 支配的； 流行的
pyre	 n.  火葬用的柴堆
purposeful	 adj.  有目的的； 有意义的
arboriculture	 n.  树木的培植 		【记】	词根记忆： arbor  + i + culture  → 树木的培植
decent	 adj.  体面的， 像样的； 正派的， 合乎礼仪的； 合适的
hostility	 n.  敌意， 敌视， 敌对； 反对， 抵抗， 战争 ， 战斗
autobiography	 n.  自传
regularity	 n.  规则性， 规律性， 一致性
pseudonym	 n.  假名； 笔名
naturalistic	 adj.  自然的； 自然主义的
switch	 n.  开关
preservation	 n.  保存
total	 adj. 完全的，彻底的 n. 总数，总量，总额 v. 总数为，共计
auxiliary	 adj.  辅助的； 补助的
astounding	 adj.  令人惊讶的
socialize	 v.  交往、 交际
savage	 adj. 野蛮的，未开化的 n.  原始的人， 粗鲁的人
auspicious	 adj.  吉兆的； 幸运的
misbehavior	 n.  不礼貌； 品行不端
clockwise	 adv. 顺时针方向地
benignity	 n.  仁慈； 善行
frightful	 adj.  可怕的， 非常的
lobby	 v.  向议员游说 n. 门廊，门厅；休息厅
dormant	 adj.  休眠的； 冬眠的
acknowledge	 vt.  承认； 致谢
equipoise	 n.  平衡； 均衡
ameliorate	 v.  改善， 改进
decrepit	 adj.  衰老的
equilateral	 adj.  等边的 n. 等边形
posse	 n.  武装队
overthrow	 v. 〔尤指用武力〕颠覆，推翻〔某领导或政府〕 n. 〔尤指用武力对某领导或政府的〕打倒，推翻
hereditary	 adj.  遗传  的
stanch	 v.  止
repartee	 n.  巧妙的应答
preamble	 n.  序文； 前言
hoard	 v.  贮藏， 囤积， 积蓄 n. 储藏物；储藏，积蓄
specialty	 n.  专业
ensnare	 v.  诱捕
squalid	 adj.  肮脏的； 卑劣的
coherent	 adj.  黏在一起的， 黏附的； 一致的； 连贯的， 条理清楚的
inviolable	 adj.  神圣的； 不可亵渎的； 不可侵犯的
clandestine	 adj.  秘密的
episode	 n.  一段情节， 片断，  一集
infrared	 n.  红外线
respondent	 n.  回答问题的人； 被告
ponder	 v.  思索， 考虑， 沉思
transgress	 v.  违反， 犯罪， 侵犯
objective	 adj.  客观的， 真实的 n. 目标，目的；物镜
desertification	 n.  沙漠化
exert	 v.  尽 ， 施加
unduly	 adv.  不适当地， 过度地， 不正当地
insolent	 adj.  傲慢的； 无礼的
guile	 n.  狡猾， 诡计，奸诈
dormancy	 n.  休眠状态
hinder	 v.  阻止， 妨碍
reputable	 adj.  声誉好的
betrothal	 n.  婚约
adjunct	 adj.  附属的； 辅助的 n. 附件；助手
altruistic	 adj.  利他的， 无私心的
alcohol	 n.  酒精
sycophant	 n.  拍马屁的人， 谄媚者， 奉承者
interpreter	 n.  解释者， 口译员
hurricane	 n.  飓风
exculpate	 v.  开脱； 申明  无罪
miscount	 v.  数错
secondary	 adj.  第二的； 间接的， 非原始的
joggle	 v.  轻摇， 摇动
transgenic animals	 [遗] 转基因动物，转化的动物
remorseless	 adj.  无恻隐心的
hustle	 v.  急速活动
affront	 v.  公开侮辱， 冒犯； 面对 n. 公开侮辱，轻蔑
heedful	 adj.  注意的， 留心的
motor	 n.  电动机
sermonize	 v.  讲道， 布道； 对…说教
access	 v.  接近 n. 接近，进入；入口，通道；接近的方法
primitive	 adj.  原始的， 远古的， 早期的； 粗糙的， 简单的
overcome	 v.  战胜， 克服， 胜过； 征服
sum	 n.  和
obliterate	 v.  消灭， 冲刷 ； 忘却； 涂抹， 遮蔽； 擦去
obligate	 vt.  使负义务
ken	 n.  视野； 知识领域， 见地
transpire	 v.  发生； 使蒸发； 使排出； 泄露
herbivorous	 adj.  食草的
heretical	 adj.  异教的； 异端的
key	 n.  电键
misanthropy	 n.  厌世； 不愿与人来往
orator	 n.  演说者， 演讲者
penurious	 adj.  吝啬的； 缺乏的
merriment	 n.  欢乐； 嬉戏
nondescript	 adj.  难以区别的； 无特征的
understate	 v.  保守地说， 有意轻描淡写
centurion	 n.  百人队长， 百夫长
homeostasis	 n.  体内平衡
bug	 n. 小虫，臭虫；毛病 vt.  打扰
gallop	 v. 〔马〕飞奔，疾驰 n. 飞速
prescient	 adj.  预知的； 有先见的
censorious	 adj.  爱批判的， 挑剔的
somnolent	 adj.  想睡的； 催眠的
intervene	 v.  干涉， 干预； 插入， 介入； 指  介于其间
dissent	 v.  持异议
vertex	 n.  顶点
revelation	 n.  显示， 揭露
auricle	 n.  外耳
indolence	 n.  懒惰
ovum	 n.  卵细胞
excoriate	 v.  擦伤  ， 磨掉  ； 痛斥， 责骂
garner	 v.  收藏， 储藏； 取得， 获得
advocate	 n.  提倡者， 鼓吹者 vt.  提倡， 鼓吹
posthumous	 adj.  死后的
frequency	 n.  频率
zero	 n.  零
subjection	 n.  征服
austerity	 n.  严峻， 严厉； 朴素， 节俭； 苦行
variant	 n.  变体， 变种， 变形
missile	 n.  导弹， 发射物
dynamic	 adj.  动力的； 动力学的； 动态的
sector	 n.  扇形
parch	 v.  烤干， 焦干
polemics	 n.  辩论术， 辩论法
demeanor	 n.  行为， 风度
taciturn	 adj.  沉默寡言的
pedant	 n.  学究
despoil	 v.  剥夺； 掠夺
query	 v.  向…提问 n.  疑问， 问题
degree	 n.  度； 度数
anhydrous	 adj.  无水的
colloquy	 n.  谈话， 会话
cogent	 adj.  强有力的， 使人信服的
subjacent	 adj.  在底下的， 在下方的， 在下级的
numerator	 n.  分数的分子
tube	 n.  试管
discord	 n.  不一致， 意见不合； 嘈杂声； 不和谐
naval	 adj.  海军的， 军舰的
altruism	 n.  利他主义 ， 无私
expend	 v.  消费， 花费， 支出
myopia	 n.  近视； 缺乏远见
illegible	 adj.  难辨认的， 字迹模糊的
demonstrate	 v.  证明， 证实； 演示， 举例说明； 表明
altruist	 n.  利他主义者
concupiscence	 n.  强烈的性欲
fanfare	 n.  喇叭或号角嘹亮的吹奏声； 吹牛
doleful	 adj.  悲哀的； 阴沉的
vitiate	 v.  损害
ambidextrous	 adj.  两手都善用的
austere	 adj.  严峻的， 严厉的；  一丝不苟的； 简朴的
vivid	 adj.  鲜艳的； 生动的， 栩栩如生的
fraternal	 adj.  兄弟的； 兄弟般的； 友爱的
assent	 n. 同意，赞成 v. 〔经审慎考虑后〕同意，赞成
adulate	 v.  奉承， 献媚
compulsion	 n. 〔难以克制的〕强烈欲望，冲动
gradual	 adj.  逐渐的， 逐步的
corrupt	 v. 贿赂，收买；使腐败，使败坏 adj.  腐败的， 贪污的； 被破坏的
preclude	 vt.  阻止， 排除， 妨碍
phosphate	 n.  磷酸盐
colossus	 n.  巨像； 巨人
transmit	 v.  传播， 发射； 传递， 传导
commemorate	 v.  纪念， 庆祝
technology	 n.  工艺， 科技， 技术
repertory	 n.  保留剧目汇演
apathy	 n.  缺乏感情或兴趣； 冷漠
voltage	 n.  电压
mediocre	 adj.  平凡的
vaccine	 n.  疫苗
credulity	 n.  易信， 轻信
zest	 n.  趣味； 热情， 热心
drought	 n.  旱灾， 干旱
unbiased	 adj.  没有偏见的
periodical	 adj.  周期的， 定期的 n. 期刊，杂志
leaflet	 n.  小叶， 嫩叶； 传单， 活页
punctual	 adj.  严守时刻的， 准时的
compromise	 v.  妥协， 折衷； 危及…安全 n. 妥协，折衷
sapid	 adj.   有味道的， 滋味好的；  有趣味的
gullible	 adj.  易受骗的
expedite	 v.  加速
laudatory	 adj.  赞美的， 赞赏的
humility	 n.  谦恭， 卑微
comparative	 adj.  比较的， 相当的
potent	 adj.  有力的， 有效的
hesitant	 adj.  犹豫的， 犹豫不决的 ； 吞吞吐吐的
cognate	 adj.  同词源的， 同类的
commencement	 n.  开始； 毕业典礼
meritorious	 adj.  有功的
recant	 v.  放弃； 撤回
frizzle	 v.  使卷缩， 使卷曲
periscope	 n.  潜望镜
justify	 vt. 证明…是正当的，
wrath	 n.  愤怒， 大怒
entrench	 v.  以壕沟防护
tenet	 n.  原则； 信条； 教义
inclusive	 adj.  包括的， 包含的
ethnic	 adj.  人种的， 种族的
spectacle	 n.  奇观， 景象
antibody	 n.  抗体
amok	 adv.  狂乱地； 杀气腾腾地
plagiarism	 n.  剽窃， 抄袭； 剽窃物
pillage	 v.  掠夺
motto	 n.  座右铭， 格言
acquainted	 adj.  认识的； 通晓的
juvenile	 adj.  青少年的， 少年特有的； 幼稚的 n. 未成年人，少年
sensitivity	 n.  灵敏度
pervasive	 adj.  弥漫的； 广泛存在的， 普遍的
laborious	 adj.   艰苦的， 费力的；  勤劳的
spasmodic	 adj.  痉挛的； 间歇性的
flag	 v.  无力地下垂， 低垂； 变弱， 疲乏； 精力或力量上的减弱 n. 国旗，旗帜；标志，特征
sympathetic	 adj.  同情的； 共鸣的， 赞同的
sophistical	 adj.  诡辩的； 强词夺理的
insignificant	 adj.  无关紧要的； 可忽略的
unsavory	 adj.  声名狼藉的， 寡廉鲜耻的； 难吃的
gargantuan	 adj.  巨大的， 庞大的
languid	 adj.  疲倦的； 无力的； 没精打采的
botany	 n.  植物学的
perceptible	 adj.  可感知的， 可以理解的
range	 n.  量程
aurora	 n.  曙光， 极光
glamorous	 adj.  迷人的， 富有魅力的
wean	 v.  使断奶； 使丢弃， 使断念
spinous	 adj.  多刺的
disprove	 v.  证明…不成立， 证明…是错误的
derive	 v.  取得， 导出， 引申； 起源于， 出自
prokaryotic cell	 [细胞] 原核细胞
distressed	 adj.  哀伤的
reconnoiter	 v.  侦察； 勘查
complacence	 n.  满足； 自满
assert	 vt.  断言； 坚持； 主张； 维护
penchant	 n.   倾向； 趣味； 嗜好
place	 n.   数
irrational	 adj.  无理性的， 失去理性的
glacial	 adj.  冰冷的； 冰的， 冰状的
coddle	 v.  娇养， 溺爱； 悉心照料
observation	 n.  观察
ascendant	 adj.  上升的； 优势的 n. 优越，支配力
refurbish	 v.  再磨光； 刷新
lead	 n.  导线
token	 n.  辅币
fraction	 n.  分数
filter	 n.  滤管
torturous	 adj.  折磨的， 痛苦的
expect	 v.  期待， 预期， 盼望， 指望
inexorable	 adj.  无情的
soothe	 v.  安慰， 使平静； 缓和 ， 减轻
emotion	 n.  情绪， 情感
assess	 vt.  估定； 评定
miser	 n.  守财奴； 吝啬鬼
prescription	 n.  指示， 规定； 法规； 药方， 处方； 医生开的药
apprehensive	 adj.  忧虑的， 担心的； 有理解力的
parochial	 adj.  教区的； 地方性的； 狭隘的， 狭小的
periodicity	 n.  周期性
submission	 n.  屈服， 降服
apology	 n.  道歉， 歉意， 认错
arguable	 adj.  可辩论的， 可论证的
incipient	 adj.  初始的
foliate	 adj.  叶状的
utter	 adj. 完全的，彻底的，十足的 v.  发出声音
calumny	 n.  诽谤， 中伤
perspicacious	 adj.  有洞察力的
incognito	 adj.  隐名埋姓的
hypodermic	 adj.  皮下的
bustle	 vi.  匆匆忙忙 n. 忙乱；喧嚣
tremendous	 adj.  巨大的， 极大的
escalate	 v.   逐步增长 ，  逐步升级，  更紧张； 逐步上升， 逐步加强， 扩大
condense	 v.   压缩，  凝结； 精简
substantiate	 v.  使实体化； 证实
divert	 vt.  使转向， 使改道  ； 转移…的注意力； 使消遣， 使娱乐
divers	 adj.  各种各样的
conspicuous	 adj.  显眼的， 明显的
raucous	 adj.  沙哑的； 刺耳的
indistinct	 adj.  不清楚的； 模糊的， 朦胧的
tenure	 n.   占有，  使用  ， 所有权； 保有， 享有
obesity	 n.  肥胖症， 过胖
hallmark	 n.   检验标记； 质量证明； 特点
effusion	 n.  溢出， 泻出
suave	 adj.  温和的
skittish	 adj.  易惊的， 羞怯的， 胆小的； 多变的
cadence	 n.   抑扬顿挫； 节奏， 韵律， 调子
reparation	 n.  赔偿， 弥补， 修理
suffrage	 n.  投票； 选举权， 参政权
semiconscious	 adj.  半意识的
declaim	 v.  雄辩， 演说
interim	 adj. 暂时的，临时的 n.  间歇， 过渡期间， 中间时期
testimony	 n.  证据， 证词； 表明， 说明
enforce	 v.  实施， 执行； 强制
fragile	 adj.  脆弱的， 易受伤害的； 易碎的
painstaking	 adj.  辛勤的， 艰苦的
secretive	 adj.  隐匿的， 隐秘的
raconteur	 n.  善谈者
ferocious	 adj.  凶恶的， 残忍的， 凶猛的； 十分强烈的， 极度的
forage	 v.  搜索 n. 草料
colloid	 n.  胶体
gigantic	 adj.  巨大的， 庞大的
geology	 n.  地质
nomadic	 adj.  游牧的； 流浪的
numerical	 adj.  数字的， 用数字表示的
readjust	 v.  重新调整， 再调整
eligible	 adj.  符合条件的， 合格的；  合适的， 合意的
endurable	 adj.  可忍受的， 能忍耐的
besmirch	 v.  弄污； 诽谤
glacier	 n.  冰川， 冰河
ultimatum	 n.  最后通牒
filch	 v.  偷窃  ， 窃取
illustrious	 adj.  杰出的， 著名的， 光荣的； 辉煌的， 灿烂的
unconscious	 adj.  无意识的， 失去知觉的； 不知道的， 没觉察到
ratiocination	 n.  推理
idle	 adj. 空闲的，闲置的；无用的，无效的；懒散的 v.  空费， 虚度
satisfy	 v.  使…成立
earthworm	 n.  蚯蚓
enervate	 v.  使衰弱； 使无力
canto	 n.  长诗中的篇
blithe	 adj.  愉快的， 高兴的
hail	 v. 下雹；向…欢呼，欢迎 n.  雹
passive	 adj.  被动的， 消极的
efficacy	 n.  功效
nauseous	 adj.  令人作呕的； 使人厌恶的
betimes	 adv.  早； 及时
divest	 v.  剥夺， 脱去
oblivious	 adj.  遗忘的， 忘却的； 茫然的， 不自觉的
informal	 adj.  不正式的； 不拘礼节的
`;let ys=[];ys.push(Fc(1,"cet4",Xj));ys.push(Fc(2,"cet6",Kj));ys.push(Fc(3,"sta",Yj));const Jj=ys;function Fc(e,n,a){const t=a.split(`
`).filter(Boolean).map(r=>{const[i,s]=r.split("	");return{en:i,zh:s}});return{id:e,name:n,words:t}}const Oc="myWordBooks",ff="currentWordBookIdx",wd="wordBooksInited",Co="wordBooksProgress";function Ji(){return JSON.parse(localStorage.getItem(Oc)||"[]")}function _d(e){localStorage.setItem(Oc,JSON.stringify(e))}function Zi(){return Number(localStorage.getItem(ff)||0)}function pf(e){localStorage.setItem(ff,e)}function kd(){var a;const e=Ji(),n=Zi();return((a=e[n])==null?void 0:a.words)||[]}function Zj(){localStorage.getItem(wd)||(localStorage.setItem(Oc,JSON.stringify(Jj)),localStorage.setItem(wd,"1"))}function hf(e){return JSON.parse(localStorage.getItem(Co)||"{}")[e]||{group:0,learned:[],percent:0}}function Qj(e,n){const a=JSON.parse(localStorage.getItem(Co)||"{}");a[e]=n,localStorage.setItem(Co,JSON.stringify(a))}function ex(e){return`https://api.dictionaryapi.dev/media/pronunciations/en/${e}-us.mp3`}function _n(e,n,a,t,r,i,s,o){var c=typeof e=="function"?e.options:e;return n&&(c.render=n,c.staticRenderFns=a,c._compiled=!0),i&&(c._scopeId="data-v-"+i),{exports:e,options:c}}const nx={name:"BackToHome",methods:{goHome(){this.$router.push("/")}}};var ax=function(){var n=this,a=n._self._c;return a("button",{staticClass:"back-home-btn",attrs:{title:"返回首页"},on:{click:n.goHome}},[a("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#3578e5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M3 12L12 3l9 9"}}),a("path",{attrs:{d:"M9 21V9h6v12"}})])])},tx=[],rx=_n(nx,ax,tx,!1,null,"5c362ea4");const ix=rx.exports,sx={name:"BackButton",methods:{goBack(){this.$router.back()}}};var ox=function(){var n=this,a=n._self._c;return a("button",{staticClass:"back-btn",attrs:{title:"返回上一页"},on:{click:n.goBack}},[a("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#3578e5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M15 18l-6-6 6-6"}})])])},cx=[],lx=_n(sx,ox,cx,!1,null,"c5e24153");const dx=lx.exports,ux={name:"FabMenu",data(){return{menuOpen:!1,dragging:!1,dragStart:{x:0,y:0},pos:{right:22,bottom:90},expandTo:"left",menuItems:[{label:"图片识别",icon:"📷",route:"/recognize?auto=true"},{label:"背单词",icon:"📖",route:"/words"},{label:"词库",icon:"📚",route:"/wordbooks"},{label:"首页",icon:"🏠",route:"/"}]}},methods:{toggleMenu(){this.menuOpen||this.snapToEdge(),this.menuOpen=!this.menuOpen},snapToEdge(){const e=this.$el.getBoundingClientRect(),n=e.left<window.innerWidth/2;this.expandTo=n?"right":"left",n?this.pos.right=window.innerWidth-e.width-10:this.pos.right=10},onDragStart(e){this.dragging=!0;const n=e.touches?e.touches[0]:e;this.dragStart={x:n.clientX,y:n.clientY,right:this.pos.right,bottom:this.pos.bottom},document.addEventListener("mousemove",this.onDragMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchmove",this.onDragMove,{passive:!1}),document.addEventListener("touchend",this.onDragEnd)},onDragMove(e){if(!this.dragging)return;const n=e.touches?e.touches[0]:e,a=this.dragStart.x-n.clientX,t=this.dragStart.y-n.clientY;let r=this.dragStart.right+a,i=this.dragStart.bottom+t;r=Math.max(0,Math.min(window.innerWidth-60,r)),i=Math.max(0,Math.min(window.innerHeight-60,i)),this.pos={right:r,bottom:i},e.preventDefault&&e.preventDefault()},onDragEnd(e){this.dragging=!1,document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchmove",this.onDragMove),document.removeEventListener("touchend",this.onDragEnd),this.menuOpen&&this.snapToEdge()},handleGlobalClick(e){if(!this.menuOpen)return;let n=e.target;for(;n;){if(n.classList&&n.classList.contains("fab-menu"))return;n=n.parentElement}this.menuOpen=!1},goMenu(e){this.$router.push(e),this.menuOpen=!1}},mounted(){document.addEventListener("mousedown",this.handleGlobalClick),document.addEventListener("touchstart",this.handleGlobalClick)},beforeDestroy(){document.removeEventListener("mousedown",this.handleGlobalClick),document.removeEventListener("touchstart",this.handleGlobalClick)}};var vx=function(){var n=this,a=n._self._c;return a("div",{staticClass:"fab-menu",style:{right:n.pos.right+"px",bottom:n.pos.bottom+"px"},on:{touchstart:n.onDragStart,mousedown:n.onDragStart}},[a("button",{staticClass:"fab-main",on:{click:n.toggleMenu}},[a("Icon",{attrs:{icon:"mdi:plus",width:"28",height:"28"}})],1),a("transition",{attrs:{name:"fab-menu-fade"}},[n.menuOpen?a("div",{staticClass:"fab-menu-list",class:n.expandTo},n._l(n.menuItems,function(t){return a("button",{key:t.route,staticClass:"fab-menu-item",on:{click:function(r){return n.goMenu(t.route)}}},[a("span",{staticClass:"icon"},[n._v(n._s(t.icon))]),a("span",{staticClass:"label"},[n._v(n._s(t.label))])])}),0):n._e()])],1)},fx=[],px=_n(ux,vx,fx,!1,null,"27265cd3");const hx=px.exports,mx={name:"App",components:{BackToHome:ix,BackButton:dx,FabMenu:hx},beforeCreate(){Zj()}};var gx=function(){var n=this,a=n._self._c;return a("div",{attrs:{id:"app"}},[n.$route.path!=="/"?[a("BackButton"),a("BackToHome")]:n._e(),a("router-view"),n._e(),a("FabMenu")],2)},jx=[],xx=_n(mx,gx,jx,!1,null,null);const yx=xx.exports;/*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */function Xn(e,n){for(var a in n)e[a]=n[a];return e}var bx=/[!'()*]/g,wx=function(e){return"%"+e.charCodeAt(0).toString(16)},_x=/%2C/g,kt=function(e){return encodeURIComponent(e).replace(bx,wx).replace(_x,",")};function Fo(e){try{return decodeURIComponent(e)}catch{}return e}function kx(e,n,a){n===void 0&&(n={});var t=a||Ex,r;try{r=t(e||"")}catch{r={}}for(var i in n){var s=n[i];r[i]=Array.isArray(s)?s.map(Ed):Ed(s)}return r}var Ed=function(e){return e==null||typeof e=="object"?e:String(e)};function Ex(e){var n={};return e=e.trim().replace(/^(\?|#|&)/,""),e&&e.split("&").forEach(function(a){var t=a.replace(/\+/g," ").split("="),r=Fo(t.shift()),i=t.length>0?Fo(t.join("=")):null;n[r]===void 0?n[r]=i:Array.isArray(n[r])?n[r].push(i):n[r]=[n[r],i]}),n}function Tx(e){var n=e?Object.keys(e).map(function(a){var t=e[a];if(t===void 0)return"";if(t===null)return kt(a);if(Array.isArray(t)){var r=[];return t.forEach(function(i){i!==void 0&&(i===null?r.push(kt(a)):r.push(kt(a)+"="+kt(i)))}),r.join("&")}return kt(a)+"="+kt(t)}).filter(function(a){return a.length>0}).join("&"):null;return n?"?"+n:""}var Qi=/\/?$/;function es(e,n,a,t){var r=t&&t.options.stringifyQuery,i=n.query||{};try{i=Oo(i)}catch{}var s={name:n.name||e&&e.name,meta:e&&e.meta||{},path:n.path||"/",hash:n.hash||"",query:i,params:n.params||{},fullPath:Td(n,r),matched:e?Ax(e):[]};return a&&(s.redirectedFrom=Td(a,r)),Object.freeze(s)}function Oo(e){if(Array.isArray(e))return e.map(Oo);if(e&&typeof e=="object"){var n={};for(var a in e)n[a]=Oo(e[a]);return n}else return e}var Va=es(null,{path:"/"});function Ax(e){for(var n=[];e;)n.unshift(e),e=e.parent;return n}function Td(e,n){var a=e.path,t=e.query;t===void 0&&(t={});var r=e.hash;r===void 0&&(r="");var i=n||Tx;return(a||"/")+i(t)+r}function mf(e,n,a){return n===Va?e===n:n?e.path&&n.path?e.path.replace(Qi,"")===n.path.replace(Qi,"")&&(a||e.hash===n.hash&&Ci(e.query,n.query)):e.name&&n.name?e.name===n.name&&(a||e.hash===n.hash&&Ci(e.query,n.query)&&Ci(e.params,n.params)):!1:!1}function Ci(e,n){if(e===void 0&&(e={}),n===void 0&&(n={}),!e||!n)return e===n;var a=Object.keys(e).sort(),t=Object.keys(n).sort();return a.length!==t.length?!1:a.every(function(r,i){var s=e[r],o=t[i];if(o!==r)return!1;var c=n[r];return s==null||c==null?s===c:typeof s=="object"&&typeof c=="object"?Ci(s,c):String(s)===String(c)})}function Sx(e,n){return e.path.replace(Qi,"/").indexOf(n.path.replace(Qi,"/"))===0&&(!n.hash||e.hash===n.hash)&&Cx(e.query,n.query)}function Cx(e,n){for(var a in n)if(!(a in e))return!1;return!0}function gf(e){for(var n=0;n<e.matched.length;n++){var a=e.matched[n];for(var t in a.instances){var r=a.instances[t],i=a.enteredCbs[t];if(!(!r||!i)){delete a.enteredCbs[t];for(var s=0;s<i.length;s++)r._isBeingDestroyed||i[s](r)}}}}var Fx={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(n,a){var t=a.props,r=a.children,i=a.parent,s=a.data;s.routerView=!0;for(var o=i.$createElement,c=t.name,l=i.$route,d=i._routerViewCache||(i._routerViewCache={}),u=0,f=!1;i&&i._routerRoot!==i;){var v=i.$vnode?i.$vnode.data:{};v.routerView&&u++,v.keepAlive&&i._directInactive&&i._inactive&&(f=!0),i=i.$parent}if(s.routerViewDepth=u,f){var h=d[c],p=h&&h.component;return p?(h.configProps&&Ad(p,s,h.route,h.configProps),o(p,s,r)):o()}var m=l.matched[u],y=m&&m.components[c];if(!m||!y)return d[c]=null,o();d[c]={component:y},s.registerRouteInstance=function(j,R){var N=m.instances[c];(R&&N!==j||!R&&N===j)&&(m.instances[c]=R)},(s.hook||(s.hook={})).prepatch=function(j,R){m.instances[c]=R.componentInstance},s.hook.init=function(j){j.data.keepAlive&&j.componentInstance&&j.componentInstance!==m.instances[c]&&(m.instances[c]=j.componentInstance),gf(l)};var T=m.props&&m.props[c];return T&&(Xn(d[c],{route:l,configProps:T}),Ad(y,s,l,T)),o(y,s,r)}};function Ad(e,n,a,t){var r=n.props=Ox(a,t);if(r){r=n.props=Xn({},r);var i=n.attrs=n.attrs||{};for(var s in r)(!e.props||!(s in e.props))&&(i[s]=r[s],delete r[s])}}function Ox(e,n){switch(typeof n){case"undefined":return;case"object":return n;case"function":return n(e);case"boolean":return n?e.params:void 0}}function jf(e,n,a){var t=e.charAt(0);if(t==="/")return e;if(t==="?"||t==="#")return n+e;var r=n.split("/");(!a||!r[r.length-1])&&r.pop();for(var i=e.replace(/^\//,"").split("/"),s=0;s<i.length;s++){var o=i[s];o===".."?r.pop():o!=="."&&r.push(o)}return r[0]!==""&&r.unshift(""),r.join("/")}function Rx(e){var n="",a="",t=e.indexOf("#");t>=0&&(n=e.slice(t),e=e.slice(0,t));var r=e.indexOf("?");return r>=0&&(a=e.slice(r+1),e=e.slice(0,r)),{path:e,query:a,hash:n}}function Na(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var ns=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},Ht=bf,Ix=Rc,Dx=Mx,Px=xf,Nx=yf,Lx=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Rc(e,n){for(var a=[],t=0,r=0,i="",s=n&&n.delimiter||"/",o;(o=Lx.exec(e))!=null;){var c=o[0],l=o[1],d=o.index;if(i+=e.slice(r,d),r=d+c.length,l){i+=l[1];continue}var u=e[r],f=o[2],v=o[3],h=o[4],p=o[5],m=o[6],y=o[7];i&&(a.push(i),i="");var T=f!=null&&u!=null&&u!==f,j=m==="+"||m==="*",R=m==="?"||m==="*",N=o[2]||s,F=h||p;a.push({name:v||t++,prefix:f||"",delimiter:N,optional:R,repeat:j,partial:T,asterisk:!!y,pattern:F?zx(F):y?".*":"[^"+Fi(N)+"]+?"})}return r<e.length&&(i+=e.substr(r)),i&&a.push(i),a}function Mx(e,n){return xf(Rc(e,n),n)}function Bx(e){return encodeURI(e).replace(/[\/?#]/g,function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})}function Ux(e){return encodeURI(e).replace(/[?#]/g,function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})}function xf(e,n){for(var a=new Array(e.length),t=0;t<e.length;t++)typeof e[t]=="object"&&(a[t]=new RegExp("^(?:"+e[t].pattern+")$",Dc(n)));return function(r,i){for(var s="",o=r||{},c=i||{},l=c.pretty?Bx:encodeURIComponent,d=0;d<e.length;d++){var u=e[d];if(typeof u=="string"){s+=u;continue}var f=o[u.name],v;if(f==null)if(u.optional){u.partial&&(s+=u.prefix);continue}else throw new TypeError('Expected "'+u.name+'" to be defined');if(ns(f)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(f.length===0){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(v=l(f[h]),!a[d].test(v))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(v)+"`");s+=(h===0?u.prefix:u.delimiter)+v}continue}if(v=u.asterisk?Ux(f):l(f),!a[d].test(v))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+v+'"');s+=u.prefix+v}return s}}function Fi(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function zx(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function Ic(e,n){return e.keys=n,e}function Dc(e){return e&&e.sensitive?"":"i"}function $x(e,n){var a=e.source.match(/\((?!\?)/g);if(a)for(var t=0;t<a.length;t++)n.push({name:t,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Ic(e,n)}function qx(e,n,a){for(var t=[],r=0;r<e.length;r++)t.push(bf(e[r],n,a).source);var i=new RegExp("(?:"+t.join("|")+")",Dc(a));return Ic(i,n)}function Hx(e,n,a){return yf(Rc(e,a),n,a)}function yf(e,n,a){ns(n)||(a=n||a,n=[]),a=a||{};for(var t=a.strict,r=a.end!==!1,i="",s=0;s<e.length;s++){var o=e[s];if(typeof o=="string")i+=Fi(o);else{var c=Fi(o.prefix),l="(?:"+o.pattern+")";n.push(o),o.repeat&&(l+="(?:"+c+l+")*"),o.optional?o.partial?l=c+"("+l+")?":l="(?:"+c+"("+l+"))?":l=c+"("+l+")",i+=l}}var d=Fi(a.delimiter||"/"),u=i.slice(-d.length)===d;return t||(i=(u?i.slice(0,-d.length):i)+"(?:"+d+"(?=$))?"),r?i+="$":i+=t&&u?"":"(?="+d+"|$)",Ic(new RegExp("^"+i,Dc(a)),n)}function bf(e,n,a){return ns(n)||(a=n||a,n=[]),a=a||{},e instanceof RegExp?$x(e,n):ns(e)?qx(e,n,a):Hx(e,n,a)}Ht.parse=Ix;Ht.compile=Dx;Ht.tokensToFunction=Px;Ht.tokensToRegExp=Nx;var Sd=Object.create(null);function Oi(e,n,a){n=n||{};try{var t=Sd[e]||(Sd[e]=Ht.compile(e));return typeof n.pathMatch=="string"&&(n[0]=n.pathMatch),t(n,{pretty:!0})}catch{return""}finally{delete n[0]}}function Pc(e,n,a,t){var r=typeof e=="string"?{path:e}:e;if(r._normalized)return r;if(r.name){r=Xn({},e);var i=r.params;return i&&typeof i=="object"&&(r.params=Xn({},i)),r}if(!r.path&&r.params&&n){r=Xn({},r),r._normalized=!0;var s=Xn(Xn({},n.params),r.params);if(n.name)r.name=n.name,r.params=s;else if(n.matched.length){var o=n.matched[n.matched.length-1].path;r.path=Oi(o,s,"path "+n.path)}return r}var c=Rx(r.path||""),l=n&&n.path||"/",d=c.path?jf(c.path,l,a||r.append):l,u=kx(c.query,r.query,t&&t.options.parseQuery),f=r.hash||c.hash;return f&&f.charAt(0)!=="#"&&(f="#"+f),{_normalized:!0,path:d,query:u,hash:f}}var Wx=[String,Object],Gx=[String,Array],Cd=function(){},Vx={name:"RouterLink",props:{to:{type:Wx,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:Gx,default:"click"}},render:function(n){var a=this,t=this.$router,r=this.$route,i=t.resolve(this.to,r,this.append),s=i.location,o=i.route,c=i.href,l={},d=t.options.linkActiveClass,u=t.options.linkExactActiveClass,f=d??"router-link-active",v=u??"router-link-exact-active",h=this.activeClass==null?f:this.activeClass,p=this.exactActiveClass==null?v:this.exactActiveClass,m=o.redirectedFrom?es(null,Pc(o.redirectedFrom),null,t):o;l[p]=mf(r,m,this.exactPath),l[h]=this.exact||this.exactPath?l[p]:Sx(r,m);var y=l[p]?this.ariaCurrentValue:null,T=function(x){Fd(x)&&(a.replace?t.replace(s,Cd):t.push(s,Cd))},j={click:Fd};Array.isArray(this.event)?this.event.forEach(function(x){j[x]=T}):j[this.event]=T;var R={class:l},N=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:o,navigate:T,isActive:l[h],isExactActive:l[p]});if(N){if(N.length===1)return N[0];if(N.length>1||!N.length)return N.length===0?n():n("span",{},N)}if(this.tag==="a")R.on=j,R.attrs={href:c,"aria-current":y};else{var F=wf(this.$slots.default);if(F){F.isStatic=!1;var _=F.data=Xn({},F.data);_.on=_.on||{};for(var M in _.on){var I=_.on[M];M in j&&(_.on[M]=Array.isArray(I)?I:[I])}for(var X in j)X in _.on?_.on[X].push(j[X]):_.on[X]=T;var W=F.data.attrs=Xn({},F.data.attrs);W.href=c,W["aria-current"]=y}else R.on=j}return n(this.tag,R,this.$slots.default)}};function Fd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){var n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function wf(e){if(e){for(var n,a=0;a<e.length;a++)if(n=e[a],n.tag==="a"||n.children&&(n=wf(n.children)))return n}}var as;function Ro(e){if(!(Ro.installed&&as===e)){Ro.installed=!0,as=e;var n=function(r){return r!==void 0},a=function(r,i){var s=r.$options._parentVnode;n(s)&&n(s=s.data)&&n(s=s.registerRouteInstance)&&s(r,i)};e.mixin({beforeCreate:function(){n(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,a(this,this)},destroyed:function(){a(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",Fx),e.component("RouterLink",Vx);var t=e.config.optionMergeStrategies;t.beforeRouteEnter=t.beforeRouteLeave=t.beforeRouteUpdate=t.created}}var Gr=typeof window<"u";function ui(e,n,a,t,r){var i=n||[],s=a||Object.create(null),o=t||Object.create(null);e.forEach(function(d){Io(i,s,o,d,r)});for(var c=0,l=i.length;c<l;c++)i[c]==="*"&&(i.push(i.splice(c,1)[0]),l--,c--);return{pathList:i,pathMap:s,nameMap:o}}function Io(e,n,a,t,r,i){var s=t.path,o=t.name,c=t.pathToRegexpOptions||{},l=Kx(s,r,c.strict);typeof t.caseSensitive=="boolean"&&(c.sensitive=t.caseSensitive);var d={path:l,regex:Xx(l,c),components:t.components||{default:t.component},alias:t.alias?typeof t.alias=="string"?[t.alias]:t.alias:[],instances:{},enteredCbs:{},name:o,parent:r,matchAs:i,redirect:t.redirect,beforeEnter:t.beforeEnter,meta:t.meta||{},props:t.props==null?{}:t.components?t.props:{default:t.props}};if(t.children&&t.children.forEach(function(p){var m=i?Na(i+"/"+p.path):void 0;Io(e,n,a,p,d,m)}),n[d.path]||(e.push(d.path),n[d.path]=d),t.alias!==void 0)for(var u=Array.isArray(t.alias)?t.alias:[t.alias],f=0;f<u.length;++f){var v=u[f],h={path:v,children:t.children};Io(e,n,a,h,r,d.path||"/")}o&&(a[o]||(a[o]=d))}function Xx(e,n){var a=Ht(e,[],n);return a}function Kx(e,n,a){return a||(e=e.replace(/\/$/,"")),e[0]==="/"||n==null?e:Na(n.path+"/"+e)}function Yx(e,n){var a=ui(e),t=a.pathList,r=a.pathMap,i=a.nameMap;function s(v){ui(v,t,r,i)}function o(v,h){var p=typeof v!="object"?i[v]:void 0;ui([h||v],t,r,i,p),p&&p.alias.length&&ui(p.alias.map(function(m){return{path:m,children:[h]}}),t,r,i,p)}function c(){return t.map(function(v){return r[v]})}function l(v,h,p){var m=Pc(v,h,!1,n),y=m.name;if(y){var T=i[y];if(!T)return f(null,m);var j=T.regex.keys.filter(function(M){return!M.optional}).map(function(M){return M.name});if(typeof m.params!="object"&&(m.params={}),h&&typeof h.params=="object")for(var R in h.params)!(R in m.params)&&j.indexOf(R)>-1&&(m.params[R]=h.params[R]);return m.path=Oi(T.path,m.params),f(T,m,p)}else if(m.path){m.params={};for(var N=0;N<t.length;N++){var F=t[N],_=r[F];if(Jx(_.regex,m.path,m.params))return f(_,m,p)}}return f(null,m)}function d(v,h){var p=v.redirect,m=typeof p=="function"?p(es(v,h,null,n)):p;if(typeof m=="string"&&(m={path:m}),!m||typeof m!="object")return f(null,h);var y=m,T=y.name,j=y.path,R=h.query,N=h.hash,F=h.params;if(R=y.hasOwnProperty("query")?y.query:R,N=y.hasOwnProperty("hash")?y.hash:N,F=y.hasOwnProperty("params")?y.params:F,T)return i[T],l({_normalized:!0,name:T,query:R,hash:N,params:F},void 0,h);if(j){var _=Zx(j,v),M=Oi(_,F);return l({_normalized:!0,path:M,query:R,hash:N},void 0,h)}else return f(null,h)}function u(v,h,p){var m=Oi(p,h.params),y=l({_normalized:!0,path:m});if(y){var T=y.matched,j=T[T.length-1];return h.params=y.params,f(j,h)}return f(null,h)}function f(v,h,p){return v&&v.redirect?d(v,p||h):v&&v.matchAs?u(v,h,v.matchAs):es(v,h,p,n)}return{match:l,addRoute:o,getRoutes:c,addRoutes:s}}function Jx(e,n,a){var t=n.match(e);if(t){if(!a)return!0}else return!1;for(var r=1,i=t.length;r<i;++r){var s=e.keys[r-1];s&&(a[s.name||"pathMatch"]=typeof t[r]=="string"?Fo(t[r]):t[r])}return!0}function Zx(e,n){return jf(e,n.parent?n.parent.path:"/",!0)}var Qx=Gr&&window.performance&&window.performance.now?window.performance:Date;function _f(){return Qx.now().toFixed(3)}var kf=_f();function bs(){return kf}function Ef(e){return kf=e}var Tf=Object.create(null);function Af(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,n=window.location.href.replace(e,""),a=Xn({},window.history.state);return a.key=bs(),window.history.replaceState(a,"",n),window.addEventListener("popstate",Od),function(){window.removeEventListener("popstate",Od)}}function La(e,n,a,t){if(e.app){var r=e.options.scrollBehavior;r&&e.app.$nextTick(function(){var i=e1(),s=r.call(e,n,a,t?i:null);s&&(typeof s.then=="function"?s.then(function(o){Dd(o,i)}).catch(function(o){}):Dd(s,i))})}}function Sf(){var e=bs();e&&(Tf[e]={x:window.pageXOffset,y:window.pageYOffset})}function Od(e){Sf(),e.state&&e.state.key&&Ef(e.state.key)}function e1(){var e=bs();if(e)return Tf[e]}function n1(e,n){var a=document.documentElement,t=a.getBoundingClientRect(),r=e.getBoundingClientRect();return{x:r.left-t.left-n.x,y:r.top-t.top-n.y}}function Rd(e){return Lt(e.x)||Lt(e.y)}function Id(e){return{x:Lt(e.x)?e.x:window.pageXOffset,y:Lt(e.y)?e.y:window.pageYOffset}}function a1(e){return{x:Lt(e.x)?e.x:0,y:Lt(e.y)?e.y:0}}function Lt(e){return typeof e=="number"}var t1=/^#\d/;function Dd(e,n){var a=typeof e=="object";if(a&&typeof e.selector=="string"){var t=t1.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(t){var r=e.offset&&typeof e.offset=="object"?e.offset:{};r=a1(r),n=n1(t,r)}else Rd(e)&&(n=Id(e))}else a&&Rd(e)&&(n=Id(e));n&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:n.x,top:n.y,behavior:e.behavior}):window.scrollTo(n.x,n.y))}var Ma=Gr&&function(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function ts(e,n){Sf();var a=window.history;try{if(n){var t=Xn({},a.state);t.key=bs(),a.replaceState(t,"",e)}else a.pushState({key:Ef(_f())},"",e)}catch{window.location[n?"replace":"assign"](e)}}function Do(e){ts(e,!0)}var gt={redirected:2,aborted:4,cancelled:8,duplicated:16};function r1(e,n){return ws(e,n,gt.redirected,'Redirected when going from "'+e.fullPath+'" to "'+c1(n)+'" via a navigation guard.')}function i1(e,n){var a=ws(e,n,gt.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return a.name="NavigationDuplicated",a}function Pd(e,n){return ws(e,n,gt.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+n.fullPath+'" with a new navigation.')}function s1(e,n){return ws(e,n,gt.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+n.fullPath+'" via a navigation guard.')}function ws(e,n,a,t){var r=new Error(t);return r._isRouter=!0,r.from=e,r.to=n,r.type=a,r}var o1=["params","query","hash"];function c1(e){if(typeof e=="string")return e;if("path"in e)return e.path;var n={};return o1.forEach(function(a){a in e&&(n[a]=e[a])}),JSON.stringify(n,null,2)}function rs(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function _s(e,n){return rs(e)&&e._isRouter&&(n==null||e.type===n)}function Nd(e,n,a){var t=function(r){r>=e.length?a():e[r]?n(e[r],function(){t(r+1)}):t(r+1)};t(0)}function l1(e){return function(n,a,t){var r=!1,i=0,s=null;Cf(e,function(o,c,l,d){if(typeof o=="function"&&o.cid===void 0){r=!0,i++;var u=Ld(function(p){u1(p)&&(p=p.default),o.resolved=typeof p=="function"?p:as.extend(p),l.components[d]=p,i--,i<=0&&t()}),f=Ld(function(p){var m="Failed to resolve async component "+d+": "+p;s||(s=rs(p)?p:new Error(m),t(s))}),v;try{v=o(u,f)}catch(p){f(p)}if(v)if(typeof v.then=="function")v.then(u,f);else{var h=v.component;h&&typeof h.then=="function"&&h.then(u,f)}}}),r||t()}}function Cf(e,n){return Ff(e.map(function(a){return Object.keys(a.components).map(function(t){return n(a.components[t],a.instances[t],a,t)})}))}function Ff(e){return Array.prototype.concat.apply([],e)}var d1=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function u1(e){return e.__esModule||d1&&e[Symbol.toStringTag]==="Module"}function Ld(e){var n=!1;return function(){for(var a=[],t=arguments.length;t--;)a[t]=arguments[t];if(!n)return n=!0,e.apply(this,a)}}var aa=function(n,a){this.router=n,this.base=v1(a),this.current=Va,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};aa.prototype.listen=function(n){this.cb=n};aa.prototype.onReady=function(n,a){this.ready?n():(this.readyCbs.push(n),a&&this.readyErrorCbs.push(a))};aa.prototype.onError=function(n){this.errorCbs.push(n)};aa.prototype.transitionTo=function(n,a,t){var r=this,i;try{i=this.router.match(n,this.current)}catch(o){throw this.errorCbs.forEach(function(c){c(o)}),o}var s=this.current;this.confirmTransition(i,function(){r.updateRoute(i),a&&a(i),r.ensureURL(),r.router.afterHooks.forEach(function(o){o&&o(i,s)}),r.ready||(r.ready=!0,r.readyCbs.forEach(function(o){o(i)}))},function(o){t&&t(o),o&&!r.ready&&(!_s(o,gt.redirected)||s!==Va)&&(r.ready=!0,r.readyErrorCbs.forEach(function(c){c(o)}))})};aa.prototype.confirmTransition=function(n,a,t){var r=this,i=this.current;this.pending=n;var s=function(p){!_s(p)&&rs(p)&&(r.errorCbs.length?r.errorCbs.forEach(function(m){m(p)}):console.error(p)),t&&t(p)},o=n.matched.length-1,c=i.matched.length-1;if(mf(n,i)&&o===c&&n.matched[o]===i.matched[c])return this.ensureURL(),n.hash&&La(this.router,i,n,!1),s(i1(i,n));var l=f1(this.current.matched,n.matched),d=l.updated,u=l.deactivated,f=l.activated,v=[].concat(h1(u),this.router.beforeHooks,m1(d),f.map(function(p){return p.beforeEnter}),l1(f)),h=function(p,m){if(r.pending!==n)return s(Pd(i,n));try{p(n,i,function(y){y===!1?(r.ensureURL(!0),s(s1(i,n))):rs(y)?(r.ensureURL(!0),s(y)):typeof y=="string"||typeof y=="object"&&(typeof y.path=="string"||typeof y.name=="string")?(s(r1(i,n)),typeof y=="object"&&y.replace?r.replace(y):r.push(y)):m(y)})}catch(y){s(y)}};Nd(v,h,function(){var p=g1(f),m=p.concat(r.router.resolveHooks);Nd(m,h,function(){if(r.pending!==n)return s(Pd(i,n));r.pending=null,a(n),r.router.app&&r.router.app.$nextTick(function(){gf(n)})})})};aa.prototype.updateRoute=function(n){this.current=n,this.cb&&this.cb(n)};aa.prototype.setupListeners=function(){};aa.prototype.teardown=function(){this.listeners.forEach(function(n){n()}),this.listeners=[],this.current=Va,this.pending=null};function v1(e){if(!e)if(Gr){var n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return e.charAt(0)!=="/"&&(e="/"+e),e.replace(/\/$/,"")}function f1(e,n){var a,t=Math.max(e.length,n.length);for(a=0;a<t&&e[a]===n[a];a++);return{updated:n.slice(0,a),activated:n.slice(a),deactivated:e.slice(a)}}function Nc(e,n,a,t){var r=Cf(e,function(i,s,o,c){var l=p1(i,n);if(l)return Array.isArray(l)?l.map(function(d){return a(d,s,o,c)}):a(l,s,o,c)});return Ff(t?r.reverse():r)}function p1(e,n){return typeof e!="function"&&(e=as.extend(e)),e.options[n]}function h1(e){return Nc(e,"beforeRouteLeave",Of,!0)}function m1(e){return Nc(e,"beforeRouteUpdate",Of)}function Of(e,n){if(n)return function(){return e.apply(n,arguments)}}function g1(e){return Nc(e,"beforeRouteEnter",function(n,a,t,r){return j1(n,t,r)})}function j1(e,n,a){return function(r,i,s){return e(r,i,function(o){typeof o=="function"&&(n.enteredCbs[a]||(n.enteredCbs[a]=[]),n.enteredCbs[a].push(o)),s(o)})}}var Rf=function(e){function n(a,t){e.call(this,a,t),this._startLocation=cr(this.base)}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var r=this.router,i=r.options.scrollBehavior,s=Ma&&i;s&&this.listeners.push(Af());var o=function(){var c=t.current,l=cr(t.base);t.current===Va&&l===t._startLocation||t.transitionTo(l,function(d){s&&La(r,d,c,!0)})};window.addEventListener("popstate",o),this.listeners.push(function(){window.removeEventListener("popstate",o)})}},n.prototype.go=function(t){window.history.go(t)},n.prototype.push=function(t,r,i){var s=this,o=this,c=o.current;this.transitionTo(t,function(l){ts(Na(s.base+l.fullPath)),La(s.router,l,c,!1),r&&r(l)},i)},n.prototype.replace=function(t,r,i){var s=this,o=this,c=o.current;this.transitionTo(t,function(l){Do(Na(s.base+l.fullPath)),La(s.router,l,c,!1),r&&r(l)},i)},n.prototype.ensureURL=function(t){if(cr(this.base)!==this.current.fullPath){var r=Na(this.base+this.current.fullPath);t?ts(r):Do(r)}},n.prototype.getCurrentLocation=function(){return cr(this.base)},n}(aa);function cr(e){var n=window.location.pathname,a=n.toLowerCase(),t=e.toLowerCase();return e&&(a===t||a.indexOf(Na(t+"/"))===0)&&(n=n.slice(e.length)),(n||"/")+window.location.search+window.location.hash}var If=function(e){function n(a,t,r){e.call(this,a,t),!(r&&x1(this.base))&&Md()}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var r=this.router,i=r.options.scrollBehavior,s=Ma&&i;s&&this.listeners.push(Af());var o=function(){var l=t.current;Md()&&t.transitionTo(Ri(),function(d){s&&La(t.router,d,l,!0),Ma||Ii(d.fullPath)})},c=Ma?"popstate":"hashchange";window.addEventListener(c,o),this.listeners.push(function(){window.removeEventListener(c,o)})}},n.prototype.push=function(t,r,i){var s=this,o=this,c=o.current;this.transitionTo(t,function(l){Bd(l.fullPath),La(s.router,l,c,!1),r&&r(l)},i)},n.prototype.replace=function(t,r,i){var s=this,o=this,c=o.current;this.transitionTo(t,function(l){Ii(l.fullPath),La(s.router,l,c,!1),r&&r(l)},i)},n.prototype.go=function(t){window.history.go(t)},n.prototype.ensureURL=function(t){var r=this.current.fullPath;Ri()!==r&&(t?Bd(r):Ii(r))},n.prototype.getCurrentLocation=function(){return Ri()},n}(aa);function x1(e){var n=cr(e);if(!/^\/#/.test(n))return window.location.replace(Na(e+"/#"+n)),!0}function Md(){var e=Ri();return e.charAt(0)==="/"?!0:(Ii("/"+e),!1)}function Ri(){var e=window.location.href,n=e.indexOf("#");return n<0?"":(e=e.slice(n+1),e)}function Po(e){var n=window.location.href,a=n.indexOf("#"),t=a>=0?n.slice(0,a):n;return t+"#"+e}function Bd(e){Ma?ts(Po(e)):window.location.hash=e}function Ii(e){Ma?Do(Po(e)):window.location.replace(Po(e))}var y1=function(e){function n(a,t){e.call(this,a,t),this.stack=[],this.index=-1}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.push=function(t,r,i){var s=this;this.transitionTo(t,function(o){s.stack=s.stack.slice(0,s.index+1).concat(o),s.index++,r&&r(o)},i)},n.prototype.replace=function(t,r,i){var s=this;this.transitionTo(t,function(o){s.stack=s.stack.slice(0,s.index).concat(o),r&&r(o)},i)},n.prototype.go=function(t){var r=this,i=this.index+t;if(!(i<0||i>=this.stack.length)){var s=this.stack[i];this.confirmTransition(s,function(){var o=r.current;r.index=i,r.updateRoute(s),r.router.afterHooks.forEach(function(c){c&&c(s,o)})},function(o){_s(o,gt.duplicated)&&(r.index=i)})}},n.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},n.prototype.ensureURL=function(){},n}(aa),De=function(n){n===void 0&&(n={}),this.app=null,this.apps=[],this.options=n,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=Yx(n.routes||[],this);var a=n.mode||"hash";switch(this.fallback=a==="history"&&!Ma&&n.fallback!==!1,this.fallback&&(a="hash"),Gr||(a="abstract"),this.mode=a,a){case"history":this.history=new Rf(this,n.base);break;case"hash":this.history=new If(this,n.base,this.fallback);break;case"abstract":this.history=new y1(this,n.base);break}},Df={currentRoute:{configurable:!0}};De.prototype.match=function(n,a,t){return this.matcher.match(n,a,t)};Df.currentRoute.get=function(){return this.history&&this.history.current};De.prototype.init=function(n){var a=this;if(this.apps.push(n),n.$once("hook:destroyed",function(){var s=a.apps.indexOf(n);s>-1&&a.apps.splice(s,1),a.app===n&&(a.app=a.apps[0]||null),a.app||a.history.teardown()}),!this.app){this.app=n;var t=this.history;if(t instanceof Rf||t instanceof If){var r=function(s){var o=t.current,c=a.options.scrollBehavior,l=Ma&&c;l&&"fullPath"in s&&La(a,s,o,!1)},i=function(s){t.setupListeners(),r(s)};t.transitionTo(t.getCurrentLocation(),i,i)}t.listen(function(s){a.apps.forEach(function(o){o._route=s})})}};De.prototype.beforeEach=function(n){return Lc(this.beforeHooks,n)};De.prototype.beforeResolve=function(n){return Lc(this.resolveHooks,n)};De.prototype.afterEach=function(n){return Lc(this.afterHooks,n)};De.prototype.onReady=function(n,a){this.history.onReady(n,a)};De.prototype.onError=function(n){this.history.onError(n)};De.prototype.push=function(n,a,t){var r=this;if(!a&&!t&&typeof Promise<"u")return new Promise(function(i,s){r.history.push(n,i,s)});this.history.push(n,a,t)};De.prototype.replace=function(n,a,t){var r=this;if(!a&&!t&&typeof Promise<"u")return new Promise(function(i,s){r.history.replace(n,i,s)});this.history.replace(n,a,t)};De.prototype.go=function(n){this.history.go(n)};De.prototype.back=function(){this.go(-1)};De.prototype.forward=function(){this.go(1)};De.prototype.getMatchedComponents=function(n){var a=n?n.matched?n:this.resolve(n).route:this.currentRoute;return a?[].concat.apply([],a.matched.map(function(t){return Object.keys(t.components).map(function(r){return t.components[r]})})):[]};De.prototype.resolve=function(n,a,t){a=a||this.history.current;var r=Pc(n,a,t,this),i=this.match(r,a),s=i.redirectedFrom||i.fullPath,o=this.history.base,c=b1(o,s,this.mode);return{location:r,route:i,href:c,normalizedTo:r,resolved:i}};De.prototype.getRoutes=function(){return this.matcher.getRoutes()};De.prototype.addRoute=function(n,a){this.matcher.addRoute(n,a),this.history.current!==Va&&this.history.transitionTo(this.history.getCurrentLocation())};De.prototype.addRoutes=function(n){this.matcher.addRoutes(n),this.history.current!==Va&&this.history.transitionTo(this.history.getCurrentLocation())};Object.defineProperties(De.prototype,Df);var Pf=De;function Lc(e,n){return e.push(n),function(){var a=e.indexOf(n);a>-1&&e.splice(a,1)}}function b1(e,n,a){var t=a==="hash"?"#"+n:n;return e?Na(e+"/"+t):t}De.install=Ro;De.version="3.6.5";De.isNavigationFailure=_s;De.NavigationFailureType=gt;De.START_LOCATION=Va;Gr&&window.Vue&&window.Vue.use(De);function Mc(e){return new Promise((n,a)=>{const t=new FileReader;t.readAsDataURL(e),t.onload=()=>n(t.result)})}function Nf(){return new Promise((e,n)=>{const a=document.createElement("input");a.type="file",a.accept="image/*",a.capture="environment",a.style.display="none",document.body.appendChild(a),a.addEventListener("change",t=>{const r=a.files[0];document.body.removeChild(a),r?e(r):n(new Error("未获取到图片文件"))},{once:!0}),a.click()})}const w1={name:"CameraCaptureButton",methods:{async handleClick(){try{const e=await Nf(),n=await Mc(e);this.$emit("capture",n)}catch{}}}};var _1=function(){var n=this,a=n._self._c;return a("button",{staticClass:"camera-btn",attrs:{title:"拍照"},on:{click:n.handleClick}},[a("svg",{attrs:{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2z"}}),a("circle",{attrs:{cx:"12",cy:"13",r:"4"}})])])},k1=[],E1=_n(w1,_1,k1,!1,null,"e2b312c0");const T1=E1.exports,A1={};var S1=function(){var n=this,a=n._self._c;return a("header",{staticClass:"page-header"},[n._t("default")],2)},C1=[],F1=_n(A1,S1,C1,!1,null,"9ad97d93");const O1=F1.exports;function R1(){if(typeof global<"u")return global.window;if(typeof window<"u")return window}function I1(e,n=void 0,a={}){let{replacer:t,space:r}=a;try{return JSON.stringify(e,t,r)}catch(i){return console.error("jsonStringify error ",i),n}}function Vr(e){return Array.isArray(e)}function Lf(e){return typeof e=="object"&&e!==null&&!Vr(e)}function Mf(e){return typeof e=="string"||e instanceof String}function D1(){let e=Array.from(arguments);return e.reduce(n,e[0]);function n(a,t){if(a||(a=Array.isArray(t)?[]:{}),t&&typeof t=="object")for(let r in t)t.hasOwnProperty(r)&&(t[r]&&typeof t[r]=="object"?a[r]=n(a[r],t[r]):a[r]=t[r]);return a}}function P1(){}function N1(e,n="",a=void 0){if(!Lf(e)||!Mf(n))return a;const t=n.split(".");let r=e;for(const i of t){if(/\[\d+]/.test(i)){const s=parseInt(i.match(/\d+/)[0]);r=r[s]}else r=r[i];if(r===void 0)return a}return r}function Bf(e){return Vr(e)&&e.length>0}function L1(e,n=P1){return Bf(e)&&e.every(n)}function M1(e){return L1(e,Mf)}const B1=e=>{let n=N1(e,"fileTypeList",[]);return U1(n,!1)},U1=async(e=[],n=!1)=>(e=Vr(e)?e:[],e=z1(e),new Promise(a=>{if(!R1())return a();const t=document.createElement("input");t.style.display="none",t.setAttribute("type","file"),n&&t.setAttribute("multiple","multiple");let r=e.length?e.join(","):"*/*";t.setAttribute("accept",r),t.onchange=()=>{const{files:i}=t;a(n?i:i[0]),document.body.removeChild(t)},t.click(),document.body.appendChild(t)}));function z1(e){return e=$1(e),e.map(n=>Ud[n]?Ud[n]:n).filter(Boolean)}const $1=(e=[])=>{if(!Vr(e))return[];if(Bf(e)&&!M1(e))return[];e=[...e].map(a=>a.toLowerCase());let n=["jpg","jpeg"];return e.some(a=>n.includes(a))&&n.forEach(a=>{e.includes(a)||e.push(a)}),e},Fe={ZIP:"zip",JPG:"jpg",SVG:"svg",JPEG:"jpeg",PNG:"png",GIF:"gif",BMP:"bmp",DOC:"doc",XLS:"xls",DOCX:"docx",XLSX:"xlsx",PPT:"ppt",PPTX:"pptx",MP3:"mp3",M4A:"m4a",MP4:"mp4",PDF:"pdf",EXE:"exe",HTML:"html",ICO:"ico",TXT:"txt",FLV:"flv",SWF:"swf",PSD:"psd",AI:"ai",RAR:"rar"},Ud={[Fe.ZIP]:"application/x-zip-compressed",[Fe.JPG]:"image/jpg",[Fe.SVG]:"image/svg+xml",[Fe.JPEG]:"image/jpeg",[Fe.PNG]:"image/png",[Fe.GIF]:"image/gif",[Fe.BMP]:"image/bmp",[Fe.DOC]:"application/msword",[Fe.XLS]:"application/vnd.ms-excel",[Fe.DOCX]:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",[Fe.XLSX]:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",[Fe.PPT]:"application/vnd.ms-powerpoint",[Fe.PPTX]:"application/vnd.openxmlformats-officedocument.presentationml.presentation",[Fe.MP3]:"audio/mpeg",[Fe.M4A]:"audio/MP4A-LATM",[Fe.MP4]:"video/mp4",[Fe.PDF]:"application/pdf",[Fe.EXE]:"application/x-msdownload",[Fe.HTML]:"text/html",[Fe.ICO]:"image/x-icon",[Fe.TXT]:"text/plain",[Fe.FLV]:"flv",[Fe.SWF]:"application/x-shockwave-flash",[Fe.PSD]:"psd",[Fe.AI]:"ai",[Fe.RAR]:".rar"},q1=(()=>{function e(a){if(!a)return{};const t={},r=(a[0]==="?"?a.substring(1):a).split("&");for(let i=0;i<r.length;i++){const s=r[i].split("="),o=decodeURIComponent(s[0]),c=s.length===2?decodeURIComponent(s[1]):null;t[o]===void 0?t[o]=c:Array.isArray(t[o])?t[o].push(c):t[o]=[t[o],c]}return t}function n(a){return""+Object.keys(a).map(t=>{const r=a[t];return Array.isArray(r)?r.map(i=>`${encodeURIComponent(t)}=${encodeURIComponent(i)}`).join("&"):`${encodeURIComponent(t)}=${encodeURIComponent(r)}`}).join("&")}return{parse:e,stringify:n}})(),H1=e=>{e.interceptors.request.use(n=>{if(n.method==="post"){n.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";let a={};Object.keys(n.data).forEach(t=>{let r=n.data[t];typeof r=="object"?a[t]=JSON.stringify(r):a[t]=r}),n.data=q1.stringify(a)}return n},n=>Promise.reject(n))},W1=e=>{e.interceptors.request.use(n=>{let a=G1();return a&&(n.params=D1({},n.params,{_TOKEN:a})),n})};function G1(){try{return window.document.querySelector("#_TOKEN").getAttribute("value")}catch{return""}}const V1=e=>{e.interceptors.request.use(n=>(n.method==="get"&&(n.params=X1(n.params)),n))},X1=e=>(e||(e={}),Object.keys(e).forEach(n=>{let a=e[n];(Lf(a)||Vr(a))&&(a=I1(a)),e[n]=a}),e);function Uf(e,n){return function(){return e.apply(n,arguments)}}const{toString:K1}=Object.prototype,{getPrototypeOf:Bc}=Object,ks=(e=>n=>{const a=K1.call(n);return e[a]||(e[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),ta=e=>(e=e.toLowerCase(),n=>ks(n)===e),Es=e=>n=>typeof n===e,{isArray:Wt}=Array,Or=Es("undefined");function Y1(e){return e!==null&&!Or(e)&&e.constructor!==null&&!Or(e.constructor)&&zn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const zf=ta("ArrayBuffer");function J1(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&zf(e.buffer),n}const Z1=Es("string"),zn=Es("function"),$f=Es("number"),Ts=e=>e!==null&&typeof e=="object",Q1=e=>e===!0||e===!1,Di=e=>{if(ks(e)!=="object")return!1;const n=Bc(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ey=ta("Date"),ny=ta("File"),ay=ta("Blob"),ty=ta("FileList"),ry=e=>Ts(e)&&zn(e.pipe),iy=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||zn(e.append)&&((n=ks(e))==="formdata"||n==="object"&&zn(e.toString)&&e.toString()==="[object FormData]"))},sy=ta("URLSearchParams"),[oy,cy,ly,dy]=["ReadableStream","Request","Response","Headers"].map(ta),uy=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Xr(e,n,{allOwnKeys:a=!1}={}){if(e===null||typeof e>"u")return;let t,r;if(typeof e!="object"&&(e=[e]),Wt(e))for(t=0,r=e.length;t<r;t++)n.call(null,e[t],t,e);else{const i=a?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(t=0;t<s;t++)o=i[t],n.call(null,e[o],o,e)}}function qf(e,n){n=n.toLowerCase();const a=Object.keys(e);let t=a.length,r;for(;t-- >0;)if(r=a[t],n===r.toLowerCase())return r;return null}const Hf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Wf=e=>!Or(e)&&e!==Hf;function No(){const{caseless:e}=Wf(this)&&this||{},n={},a=(t,r)=>{const i=e&&qf(n,r)||r;Di(n[i])&&Di(t)?n[i]=No(n[i],t):Di(t)?n[i]=No({},t):Wt(t)?n[i]=t.slice():n[i]=t};for(let t=0,r=arguments.length;t<r;t++)arguments[t]&&Xr(arguments[t],a);return n}const vy=(e,n,a,{allOwnKeys:t}={})=>(Xr(n,(r,i)=>{a&&zn(r)?e[i]=Uf(r,a):e[i]=r},{allOwnKeys:t}),e),fy=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),py=(e,n,a,t)=>{e.prototype=Object.create(n.prototype,t),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),a&&Object.assign(e.prototype,a)},hy=(e,n,a,t)=>{let r,i,s;const o={};if(n=n||{},e==null)return n;do{for(r=Object.getOwnPropertyNames(e),i=r.length;i-- >0;)s=r[i],(!t||t(s,e,n))&&!o[s]&&(n[s]=e[s],o[s]=!0);e=a!==!1&&Bc(e)}while(e&&(!a||a(e,n))&&e!==Object.prototype);return n},my=(e,n,a)=>{e=String(e),(a===void 0||a>e.length)&&(a=e.length),a-=n.length;const t=e.indexOf(n,a);return t!==-1&&t===a},gy=e=>{if(!e)return null;if(Wt(e))return e;let n=e.length;if(!$f(n))return null;const a=new Array(n);for(;n-- >0;)a[n]=e[n];return a},jy=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Bc(Uint8Array)),xy=(e,n)=>{const a=(e&&e[Symbol.iterator]).call(e);let t;for(;(t=a.next())&&!t.done;){const r=t.value;n.call(e,r[0],r[1])}},yy=(e,n)=>{let a;const t=[];for(;(a=e.exec(n))!==null;)t.push(a);return t},by=ta("HTMLFormElement"),wy=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,a,t){return a.toUpperCase()+t}),zd=(({hasOwnProperty:e})=>(n,a)=>e.call(n,a))(Object.prototype),_y=ta("RegExp"),Gf=(e,n)=>{const a=Object.getOwnPropertyDescriptors(e),t={};Xr(a,(r,i)=>{let s;(s=n(r,i,e))!==!1&&(t[i]=s||r)}),Object.defineProperties(e,t)},ky=e=>{Gf(e,(n,a)=>{if(zn(e)&&["arguments","caller","callee"].indexOf(a)!==-1)return!1;const t=e[a];if(zn(t)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},Ey=(e,n)=>{const a={},t=r=>{r.forEach(i=>{a[i]=!0})};return Wt(e)?t(e):t(String(e).split(n)),a},Ty=()=>{},Ay=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n,Ws="abcdefghijklmnopqrstuvwxyz",$d="0123456789",Vf={DIGIT:$d,ALPHA:Ws,ALPHA_DIGIT:Ws+Ws.toUpperCase()+$d},Sy=(e=16,n=Vf.ALPHA_DIGIT)=>{let a="";const{length:t}=n;for(;e--;)a+=n[Math.random()*t|0];return a};function Cy(e){return!!(e&&zn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Fy=e=>{const n=new Array(10),a=(t,r)=>{if(Ts(t)){if(n.indexOf(t)>=0)return;if(!("toJSON"in t)){n[r]=t;const i=Wt(t)?[]:{};return Xr(t,(s,o)=>{const c=a(s,r+1);!Or(c)&&(i[o]=c)}),n[r]=void 0,i}}return t};return a(e,0)},Oy=ta("AsyncFunction"),Ry=e=>e&&(Ts(e)||zn(e))&&zn(e.then)&&zn(e.catch),Y={isArray:Wt,isArrayBuffer:zf,isBuffer:Y1,isFormData:iy,isArrayBufferView:J1,isString:Z1,isNumber:$f,isBoolean:Q1,isObject:Ts,isPlainObject:Di,isReadableStream:oy,isRequest:cy,isResponse:ly,isHeaders:dy,isUndefined:Or,isDate:ey,isFile:ny,isBlob:ay,isRegExp:_y,isFunction:zn,isStream:ry,isURLSearchParams:sy,isTypedArray:jy,isFileList:ty,forEach:Xr,merge:No,extend:vy,trim:uy,stripBOM:fy,inherits:py,toFlatObject:hy,kindOf:ks,kindOfTest:ta,endsWith:my,toArray:gy,forEachEntry:xy,matchAll:yy,isHTMLForm:by,hasOwnProperty:zd,hasOwnProp:zd,reduceDescriptors:Gf,freezeMethods:ky,toObjectSet:Ey,toCamelCase:wy,noop:Ty,toFiniteNumber:Ay,findKey:qf,global:Hf,isContextDefined:Wf,ALPHABET:Vf,generateString:Sy,isSpecCompliantForm:Cy,toJSONObject:Fy,isAsyncFn:Oy,isThenable:Ry};function xe(e,n,a,t,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),a&&(this.config=a),t&&(this.request=t),r&&(this.response=r)}Y.inherits(xe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Xf=xe.prototype,Kf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Kf[e]={value:e}});Object.defineProperties(xe,Kf);Object.defineProperty(Xf,"isAxiosError",{value:!0});xe.from=(e,n,a,t,r,i)=>{const s=Object.create(Xf);return Y.toFlatObject(e,s,function(o){return o!==Error.prototype},o=>o!=="isAxiosError"),xe.call(s,e.message,n,a,t,r),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const Iy=null;function Lo(e){return Y.isPlainObject(e)||Y.isArray(e)}function Yf(e){return Y.endsWith(e,"[]")?e.slice(0,-2):e}function qd(e,n,a){return e?e.concat(n).map(function(t,r){return t=Yf(t),!a&&r?"["+t+"]":t}).join(a?".":""):n}function Dy(e){return Y.isArray(e)&&!e.some(Lo)}const Py=Y.toFlatObject(Y,{},null,function(e){return/^is[A-Z]/.test(e)});function As(e,n,a){if(!Y.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,a=Y.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,h){return!Y.isUndefined(h[v])});const t=a.metaTokens,r=a.visitor||l,i=a.dots,s=a.indexes,o=(a.Blob||typeof Blob<"u"&&Blob)&&Y.isSpecCompliantForm(n);if(!Y.isFunction(r))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(Y.isDate(v))return v.toISOString();if(!o&&Y.isBlob(v))throw new xe("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(v)||Y.isTypedArray(v)?o&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function l(v,h,p){let m=v;if(v&&!p&&typeof v=="object"){if(Y.endsWith(h,"{}"))h=t?h:h.slice(0,-2),v=JSON.stringify(v);else if(Y.isArray(v)&&Dy(v)||(Y.isFileList(v)||Y.endsWith(h,"[]"))&&(m=Y.toArray(v)))return h=Yf(h),m.forEach(function(y,T){!(Y.isUndefined(y)||y===null)&&n.append(s===!0?qd([h],T,i):s===null?h:h+"[]",c(y))}),!1}return Lo(v)?!0:(n.append(qd(p,h,i),c(v)),!1)}const d=[],u=Object.assign(Py,{defaultVisitor:l,convertValue:c,isVisitable:Lo});function f(v,h){if(!Y.isUndefined(v)){if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+h.join("."));d.push(v),Y.forEach(v,function(p,m){(!(Y.isUndefined(p)||p===null)&&r.call(n,p,Y.isString(m)?m.trim():m,h,u))===!0&&f(p,h?h.concat(m):[m])}),d.pop()}}if(!Y.isObject(e))throw new TypeError("data must be an object");return f(e),n}function Hd(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return n[a]})}function Uc(e,n){this._pairs=[],e&&As(e,this,n)}const Jf=Uc.prototype;Jf.append=function(e,n){this._pairs.push([e,n])};Jf.toString=function(e){const n=e?function(a){return e.call(this,a,Hd)}:Hd;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function Ny(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Zf(e,n,a){if(!n)return e;const t=a&&a.encode||Ny,r=a&&a.serialize;let i;if(r?i=r(n,a):i=Y.isURLSearchParams(n)?n.toString():new Uc(n,a).toString(t),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Wd{constructor(){this.handlers=[]}use(n,a,t){return this.handlers.push({fulfilled:n,rejected:a,synchronous:t?t.synchronous:!1,runWhen:t?t.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){Y.forEach(this.handlers,function(a){a!==null&&n(a)})}}const Qf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ly=typeof URLSearchParams<"u"?URLSearchParams:Uc,My=typeof FormData<"u"?FormData:null,By=typeof Blob<"u"?Blob:null,Uy={isBrowser:!0,classes:{URLSearchParams:Ly,FormData:My,Blob:By},protocols:["http","https","file","blob","url","data"]},zc=typeof window<"u"&&typeof document<"u",zy=(e=>zc&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),$y=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",qy=zc&&window.location.href||"http://localhost",Hy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:zc,hasStandardBrowserEnv:zy,hasStandardBrowserWebWorkerEnv:$y,origin:qy},Symbol.toStringTag,{value:"Module"})),Qn={...Hy,...Uy};function Wy(e,n){return As(e,new Qn.classes.URLSearchParams,Object.assign({visitor:function(a,t,r,i){return Qn.isNode&&Y.isBuffer(a)?(this.append(t,a.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},n))}function Gy(e){return Y.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function Vy(e){const n={},a=Object.keys(e);let t;const r=a.length;let i;for(t=0;t<r;t++)i=a[t],n[i]=e[i];return n}function e0(e){function n(a,t,r,i){let s=a[i++];if(s==="__proto__")return!0;const o=Number.isFinite(+s),c=i>=a.length;return s=!s&&Y.isArray(r)?r.length:s,c?(Y.hasOwnProp(r,s)?r[s]=[r[s],t]:r[s]=t,!o):((!r[s]||!Y.isObject(r[s]))&&(r[s]=[]),n(a,t,r[s],i)&&Y.isArray(r[s])&&(r[s]=Vy(r[s])),!o)}if(Y.isFormData(e)&&Y.isFunction(e.entries)){const a={};return Y.forEachEntry(e,(t,r)=>{n(Gy(t),r,a,0)}),a}return null}function Xy(e,n,a){if(Y.isString(e))try{return(n||JSON.parse)(e),Y.trim(e)}catch(t){if(t.name!=="SyntaxError")throw t}return(a||JSON.stringify)(e)}const Kr={transitional:Qf,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const a=n.getContentType()||"",t=a.indexOf("application/json")>-1,r=Y.isObject(e);if(r&&Y.isHTMLForm(e)&&(e=new FormData(e)),Y.isFormData(e))return t?JSON.stringify(e0(e)):e;if(Y.isArrayBuffer(e)||Y.isBuffer(e)||Y.isStream(e)||Y.isFile(e)||Y.isBlob(e)||Y.isReadableStream(e))return e;if(Y.isArrayBufferView(e))return e.buffer;if(Y.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(r){if(a.indexOf("application/x-www-form-urlencoded")>-1)return Wy(e,this.formSerializer).toString();if((i=Y.isFileList(e))||a.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return As(i?{"files[]":e}:e,s&&new s,this.formSerializer)}}return r||t?(n.setContentType("application/json",!1),Xy(e)):e}],transformResponse:[function(e){const n=this.transitional||Kr.transitional,a=n&&n.forcedJSONParsing,t=this.responseType==="json";if(Y.isResponse(e)||Y.isReadableStream(e))return e;if(e&&Y.isString(e)&&(a&&!this.responseType||t)){const r=!(n&&n.silentJSONParsing)&&t;try{return JSON.parse(e)}catch(i){if(r)throw i.name==="SyntaxError"?xe.from(i,xe.ERR_BAD_RESPONSE,this,null,this.response):i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qn.classes.FormData,Blob:Qn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Y.forEach(["delete","get","head","post","put","patch"],e=>{Kr.headers[e]={}});const Ky=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yy=e=>{const n={};let a,t,r;return e&&e.split(`
`).forEach(function(i){r=i.indexOf(":"),a=i.substring(0,r).trim().toLowerCase(),t=i.substring(r+1).trim(),!(!a||n[a]&&Ky[a])&&(a==="set-cookie"?n[a]?n[a].push(t):n[a]=[t]:n[a]=n[a]?n[a]+", "+t:t)}),n},Gd=Symbol("internals");function rr(e){return e&&String(e).trim().toLowerCase()}function Pi(e){return e===!1||e==null?e:Y.isArray(e)?e.map(Pi):String(e)}function Jy(e){const n=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let t;for(;t=a.exec(e);)n[t[1]]=t[2];return n}const Zy=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Gs(e,n,a,t,r){if(Y.isFunction(t))return t.call(this,n,a);if(r&&(n=a),!!Y.isString(n)){if(Y.isString(t))return n.indexOf(t)!==-1;if(Y.isRegExp(t))return t.test(n)}}function Qy(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,a,t)=>a.toUpperCase()+t)}function eb(e,n){const a=Y.toCamelCase(" "+n);["get","set","has"].forEach(t=>{Object.defineProperty(e,t+a,{value:function(r,i,s){return this[t].call(this,n,r,i,s)},configurable:!0})})}let Tn=class{constructor(e){e&&this.set(e)}set(e,n,a){const t=this;function r(s,o,c){const l=rr(o);if(!l)throw new Error("header name must be a non-empty string");const d=Y.findKey(t,l);(!d||t[d]===void 0||c===!0||c===void 0&&t[d]!==!1)&&(t[d||o]=Pi(s))}const i=(s,o)=>Y.forEach(s,(c,l)=>r(c,l,o));if(Y.isPlainObject(e)||e instanceof this.constructor)i(e,n);else if(Y.isString(e)&&(e=e.trim())&&!Zy(e))i(Yy(e),n);else if(Y.isHeaders(e))for(const[s,o]of e.entries())r(o,s,a);else e!=null&&r(n,e,a);return this}get(e,n){if(e=rr(e),e){const a=Y.findKey(this,e);if(a){const t=this[a];if(!n)return t;if(n===!0)return Jy(t);if(Y.isFunction(n))return n.call(this,t,a);if(Y.isRegExp(n))return n.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=rr(e),e){const a=Y.findKey(this,e);return!!(a&&this[a]!==void 0&&(!n||Gs(this,this[a],a,n)))}return!1}delete(e,n){const a=this;let t=!1;function r(i){if(i=rr(i),i){const s=Y.findKey(a,i);s&&(!n||Gs(a,a[s],s,n))&&(delete a[s],t=!0)}}return Y.isArray(e)?e.forEach(r):r(e),t}clear(e){const n=Object.keys(this);let a=n.length,t=!1;for(;a--;){const r=n[a];(!e||Gs(this,this[r],r,e,!0))&&(delete this[r],t=!0)}return t}normalize(e){const n=this,a={};return Y.forEach(this,(t,r)=>{const i=Y.findKey(a,r);if(i){n[i]=Pi(t),delete n[r];return}const s=e?Qy(r):String(r).trim();s!==r&&delete n[r],n[s]=Pi(t),a[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return Y.forEach(this,(a,t)=>{a!=null&&a!==!1&&(n[t]=e&&Y.isArray(a)?a.join(", "):a)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const a=new this(e);return n.forEach(t=>a.set(t)),a}static accessor(e){const n=(this[Gd]=this[Gd]={accessors:{}}).accessors,a=this.prototype;function t(r){const i=rr(r);n[i]||(eb(a,r),n[i]=!0)}return Y.isArray(e)?e.forEach(t):t(e),this}};Tn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Y.reduceDescriptors(Tn.prototype,({value:e},n)=>{let a=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(t){this[a]=t}}});Y.freezeMethods(Tn);function Vs(e,n){const a=this||Kr,t=n||a,r=Tn.from(t.headers);let i=t.data;return Y.forEach(e,function(s){i=s.call(a,i,r.normalize(),n?n.status:void 0)}),r.normalize(),i}function n0(e){return!!(e&&e.__CANCEL__)}function Gt(e,n,a){xe.call(this,e??"canceled",xe.ERR_CANCELED,n,a),this.name="CanceledError"}Y.inherits(Gt,xe,{__CANCEL__:!0});function a0(e,n,a){const t=a.config.validateStatus;!a.status||!t||t(a.status)?e(a):n(new xe("Request failed with status code "+a.status,[xe.ERR_BAD_REQUEST,xe.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))}function nb(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function ab(e,n){e=e||10;const a=new Array(e),t=new Array(e);let r=0,i=0,s;return n=n!==void 0?n:1e3,function(o){const c=Date.now(),l=t[i];s||(s=c),a[r]=o,t[r]=c;let d=i,u=0;for(;d!==r;)u+=a[d++],d=d%e;if(r=(r+1)%e,r===i&&(i=(i+1)%e),c-s<n)return;const f=l&&c-l;return f?Math.round(u*1e3/f):void 0}}function tb(e,n){let a=0;const t=1e3/n;let r=null;return function(){const i=this===!0,s=Date.now();if(i||s-a>t)return r&&(clearTimeout(r),r=null),a=s,e.apply(null,arguments);r||(r=setTimeout(()=>(r=null,a=Date.now(),e.apply(null,arguments)),t-(s-a)))}}const is=(e,n,a=3)=>{let t=0;const r=ab(50,250);return tb(i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,c=s-t,l=r(c),d=s<=o;t=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o&&d?(o-s)/l:void 0,event:i,lengthComputable:o!=null};u[n?"download":"upload"]=!0,e(u)},a)},rb=Qn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let a;function t(r){let i=r;return e&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return a=t(window.location.href),function(r){const i=Y.isString(r)?t(r):r;return i.protocol===a.protocol&&i.host===a.host}}():function(){return function(){return!0}}(),ib=Qn.hasStandardBrowserEnv?{write(e,n,a,t,r,i){const s=[e+"="+encodeURIComponent(n)];Y.isNumber(a)&&s.push("expires="+new Date(a).toGMTString()),Y.isString(t)&&s.push("path="+t),Y.isString(r)&&s.push("domain="+r),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function sb(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ob(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function t0(e,n){return e&&!sb(n)?ob(e,n):n}const Vd=e=>e instanceof Tn?{...e}:e;function ut(e,n){n=n||{};const a={};function t(l,d,u){return Y.isPlainObject(l)&&Y.isPlainObject(d)?Y.merge.call({caseless:u},l,d):Y.isPlainObject(d)?Y.merge({},d):Y.isArray(d)?d.slice():d}function r(l,d,u){if(Y.isUndefined(d)){if(!Y.isUndefined(l))return t(void 0,l,u)}else return t(l,d,u)}function i(l,d){if(!Y.isUndefined(d))return t(void 0,d)}function s(l,d){if(Y.isUndefined(d)){if(!Y.isUndefined(l))return t(void 0,l)}else return t(void 0,d)}function o(l,d,u){if(u in n)return t(l,d);if(u in e)return t(void 0,l)}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:o,headers:(l,d)=>r(Vd(l),Vd(d),!0)};return Y.forEach(Object.keys(Object.assign({},e,n)),function(l){const d=c[l]||r,u=d(e[l],n[l],l);Y.isUndefined(u)&&d!==o||(a[l]=u)}),a}const r0=e=>{const n=ut({},e);let{data:a,withXSRFToken:t,xsrfHeaderName:r,xsrfCookieName:i,headers:s,auth:o}=n;n.headers=s=Tn.from(s),n.url=Zf(t0(n.baseURL,n.url),e.params,e.paramsSerializer),o&&s.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):"")));let c;if(Y.isFormData(a)){if(Qn.hasStandardBrowserEnv||Qn.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[l,...d]=c?c.split(";").map(u=>u.trim()).filter(Boolean):[];s.setContentType([l||"multipart/form-data",...d].join("; "))}}if(Qn.hasStandardBrowserEnv&&(t&&Y.isFunction(t)&&(t=t(n)),t||t!==!1&&rb(n.url))){const l=r&&i&&ib.read(i);l&&s.set(r,l)}return n},cb=typeof XMLHttpRequest<"u",lb=cb&&function(e){return new Promise(function(n,a){const t=r0(e);let r=t.data;const i=Tn.from(t.headers).normalize();let{responseType:s}=t,o;function c(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}let l=new XMLHttpRequest;l.open(t.method.toUpperCase(),t.url,!0),l.timeout=t.timeout;function d(){if(!l)return;const f=Tn.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),v={data:!s||s==="text"||s==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:f,config:e,request:l};a0(function(h){n(h),c()},function(h){a(h),c()},v),l=null}"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(d)},l.onabort=function(){l&&(a(new xe("Request aborted",xe.ECONNABORTED,t,l)),l=null)},l.onerror=function(){a(new xe("Network Error",xe.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let f=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||Qf;t.timeoutErrorMessage&&(f=t.timeoutErrorMessage),a(new xe(f,v.clarifyTimeoutError?xe.ETIMEDOUT:xe.ECONNABORTED,t,l)),l=null},r===void 0&&i.setContentType(null),"setRequestHeader"in l&&Y.forEach(i.toJSON(),function(f,v){l.setRequestHeader(v,f)}),Y.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),s&&s!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",is(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",is(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=f=>{l&&(a(!f||f.type?new Gt(null,e,l):f),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const u=nb(t.url);if(u&&Qn.protocols.indexOf(u)===-1){a(new xe("Unsupported protocol "+u+":",xe.ERR_BAD_REQUEST,e));return}l.send(r||null)})},db=(e,n)=>{let a=new AbortController,t;const r=function(c){if(!t){t=!0,s();const l=c instanceof Error?c:this.reason;a.abort(l instanceof xe?l:new Gt(l instanceof Error?l.message:l))}};let i=n&&setTimeout(()=>{r(new xe(`timeout ${n} of ms exceeded`,xe.ETIMEDOUT))},n);const s=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(c=>{c&&(c.removeEventListener?c.removeEventListener("abort",r):c.unsubscribe(r))}),e=null)};e.forEach(c=>c&&c.addEventListener&&c.addEventListener("abort",r));const{signal:o}=a;return o.unsubscribe=s,[o,()=>{i&&clearTimeout(i),i=null}]},ub=function*(e,n){let a=e.byteLength;if(a<n){yield e;return}let t=0,r;for(;t<a;)r=t+n,yield e.slice(t,r),t=r},vb=async function*(e,n,a){for await(const t of e)yield*ub(ArrayBuffer.isView(t)?t:await a(String(t)),n)},Xd=(e,n,a,t,r)=>{const i=vb(e,n,r);let s=0;return new ReadableStream({type:"bytes",async pull(o){const{done:c,value:l}=await i.next();if(c){o.close(),t();return}let d=l.byteLength;a&&a(s+=d),o.enqueue(new Uint8Array(l))},cancel(o){return t(o),i.return()}},{highWaterMark:2})},Kd=(e,n)=>{const a=e!=null;return t=>setTimeout(()=>n({lengthComputable:a,total:e,loaded:t}))},Ss=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",i0=Ss&&typeof ReadableStream=="function",Mo=Ss&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),fb=i0&&(()=>{let e=!1;const n=new Request(Qn.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n})(),Yd=64*1024,Bo=i0&&!!(()=>{try{return Y.isReadableStream(new Response("").body)}catch{}})(),ss={stream:Bo&&(e=>e.body)};Ss&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!ss[n]&&(ss[n]=Y.isFunction(e[n])?a=>a[n]():(a,t)=>{throw new xe(`Response type '${n}' is not supported`,xe.ERR_NOT_SUPPORT,t)})})})(new Response);const pb=async e=>{if(e==null)return 0;if(Y.isBlob(e))return e.size;if(Y.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(Y.isArrayBufferView(e))return e.byteLength;if(Y.isURLSearchParams(e)&&(e=e+""),Y.isString(e))return(await Mo(e)).byteLength},hb=async(e,n)=>Y.toFiniteNumber(e.getContentLength())??pb(n),mb=Ss&&(async e=>{let{url:n,method:a,data:t,signal:r,cancelToken:i,timeout:s,onDownloadProgress:o,onUploadProgress:c,responseType:l,headers:d,withCredentials:u="same-origin",fetchOptions:f}=r0(e);l=l?(l+"").toLowerCase():"text";let[v,h]=r||i||s?db([r,i],s):[],p,m;const y=()=>{!p&&setTimeout(()=>{v&&v.unsubscribe()}),p=!0};let T;try{if(c&&fb&&a!=="get"&&a!=="head"&&(T=await hb(d,t))!==0){let F=new Request(n,{method:"POST",body:t,duplex:"half"}),_;Y.isFormData(t)&&(_=F.headers.get("content-type"))&&d.setContentType(_),F.body&&(t=Xd(F.body,Yd,Kd(T,is(c)),null,Mo))}Y.isString(u)||(u=u?"cors":"omit"),m=new Request(n,{...f,signal:v,method:a.toUpperCase(),headers:d.normalize().toJSON(),body:t,duplex:"half",withCredentials:u});let j=await fetch(m);const R=Bo&&(l==="stream"||l==="response");if(Bo&&(o||R)){const F={};["status","statusText","headers"].forEach(M=>{F[M]=j[M]});const _=Y.toFiniteNumber(j.headers.get("content-length"));j=new Response(Xd(j.body,Yd,o&&Kd(_,is(o,!0)),R&&y,Mo),F)}l=l||"text";let N=await ss[Y.findKey(ss,l)||"text"](j,e);return!R&&y(),h&&h(),await new Promise((F,_)=>{a0(F,_,{data:N,headers:Tn.from(j.headers),status:j.status,statusText:j.statusText,config:e,request:m})})}catch(j){throw y(),j&&j.name==="TypeError"&&/fetch/i.test(j.message)?Object.assign(new xe("Network Error",xe.ERR_NETWORK,e,m),{cause:j.cause||j}):xe.from(j,j&&j.code,e,m)}}),Uo={http:Iy,xhr:lb,fetch:mb};Y.forEach(Uo,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const Jd=e=>`- ${e}`,gb=e=>Y.isFunction(e)||e===null||e===!1,s0={getAdapter:e=>{e=Y.isArray(e)?e:[e];const{length:n}=e;let a,t;const r={};for(let i=0;i<n;i++){a=e[i];let s;if(t=a,!gb(a)&&(t=Uo[(s=String(a)).toLowerCase()],t===void 0))throw new xe(`Unknown adapter '${s}'`);if(t)break;r[s||"#"+i]=t}if(!t){const i=Object.entries(r).map(([o,c])=>`adapter ${o} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=n?i.length>1?`since :
`+i.map(Jd).join(`
`):" "+Jd(i[0]):"as no adapter specified";throw new xe("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return t},adapters:Uo};function Xs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Gt(null,e)}function Zd(e){return Xs(e),e.headers=Tn.from(e.headers),e.data=Vs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),s0.getAdapter(e.adapter||Kr.adapter)(e).then(function(n){return Xs(e),n.data=Vs.call(e,e.transformResponse,n),n.headers=Tn.from(n.headers),n},function(n){return n0(n)||(Xs(e),n&&n.response&&(n.response.data=Vs.call(e,e.transformResponse,n.response),n.response.headers=Tn.from(n.response.headers))),Promise.reject(n)})}const o0="1.7.2",$c={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{$c[e]=function(a){return typeof a===e||"a"+(n<1?"n ":" ")+e}});const Qd={};$c.transitional=function(e,n,a){function t(r,i){return"[Axios v"+o0+"] Transitional option '"+r+"'"+i+(a?". "+a:"")}return(r,i,s)=>{if(e===!1)throw new xe(t(i," has been removed"+(n?" in "+n:"")),xe.ERR_DEPRECATED);return n&&!Qd[i]&&(Qd[i]=!0,console.warn(t(i," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,i,s):!0}};function jb(e,n,a){if(typeof e!="object")throw new xe("options must be an object",xe.ERR_BAD_OPTION_VALUE);const t=Object.keys(e);let r=t.length;for(;r-- >0;){const i=t[r],s=n[i];if(s){const o=e[i],c=o===void 0||s(o,i,e);if(c!==!0)throw new xe("option "+i+" must be "+c,xe.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new xe("Unknown option "+i,xe.ERR_BAD_OPTION)}}const zo={assertOptions:jb,validators:$c},Aa=zo.validators;let tt=class{constructor(e){this.defaults=e,this.interceptors={request:new Wd,response:new Wd}}async request(e,n){try{return await this._request(e,n)}catch(a){if(a instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=new Error;const r=t.stack?t.stack.replace(/^.+\n/,""):"";try{a.stack?r&&!String(a.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+r):a.stack=r}catch{}}throw a}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ut(this.defaults,n);const{transitional:a,paramsSerializer:t,headers:r}=n;a!==void 0&&zo.assertOptions(a,{silentJSONParsing:Aa.transitional(Aa.boolean),forcedJSONParsing:Aa.transitional(Aa.boolean),clarifyTimeoutError:Aa.transitional(Aa.boolean)},!1),t!=null&&(Y.isFunction(t)?n.paramsSerializer={serialize:t}:zo.assertOptions(t,{encode:Aa.function,serialize:Aa.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=r&&Y.merge(r.common,r[n.method]);r&&Y.forEach(["delete","get","head","post","put","patch","common"],v=>{delete r[v]}),n.headers=Tn.concat(i,r);const s=[];let o=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(o=o&&v.synchronous,s.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let l,d=0,u;if(!o){const v=[Zd.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,c),u=v.length,l=Promise.resolve(n);d<u;)l=l.then(v[d++],v[d++]);return l}u=s.length;let f=n;for(d=0;d<u;){const v=s[d++],h=s[d++];try{f=v(f)}catch(p){h.call(this,p);break}}try{l=Zd.call(this,f)}catch(v){return Promise.reject(v)}for(d=0,u=c.length;d<u;)l=l.then(c[d++],c[d++]);return l}getUri(e){e=ut(this.defaults,e);const n=t0(e.baseURL,e.url);return Zf(n,e.params,e.paramsSerializer)}};Y.forEach(["delete","get","head","options"],function(e){tt.prototype[e]=function(n,a){return this.request(ut(a||{},{method:e,url:n,data:(a||{}).data}))}});Y.forEach(["post","put","patch"],function(e){function n(a){return function(t,r,i){return this.request(ut(i||{},{method:e,headers:a?{"Content-Type":"multipart/form-data"}:{},url:t,data:r}))}}tt.prototype[e]=n(),tt.prototype[e+"Form"]=n(!0)});let xb=class c0{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(r){a=r});const t=this;this.promise.then(r=>{if(!t._listeners)return;let i=t._listeners.length;for(;i-- >0;)t._listeners[i](r);t._listeners=null}),this.promise.then=r=>{let i;const s=new Promise(o=>{t.subscribe(o),i=o}).then(r);return s.cancel=function(){t.unsubscribe(i)},s},n(function(r,i,s){t.reason||(t.reason=new Gt(r,i,s),a(t.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const a=this._listeners.indexOf(n);a!==-1&&this._listeners.splice(a,1)}static source(){let n;return{token:new c0(function(a){n=a}),cancel:n}}};function yb(e){return function(n){return e.apply(null,n)}}function bb(e){return Y.isObject(e)&&e.isAxiosError===!0}const $o={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($o).forEach(([e,n])=>{$o[n]=e});function l0(e){const n=new tt(e),a=Uf(tt.prototype.request,n);return Y.extend(a,tt.prototype,n,{allOwnKeys:!0}),Y.extend(a,n,null,{allOwnKeys:!0}),a.create=function(t){return l0(ut(e,t))},a}const Ge=l0(Kr);Ge.Axios=tt;Ge.CanceledError=Gt;Ge.CancelToken=xb;Ge.isCancel=n0;Ge.VERSION=o0;Ge.toFormData=As;Ge.AxiosError=xe;Ge.Cancel=Ge.CanceledError;Ge.all=function(e){return Promise.all(e)};Ge.spread=yb;Ge.isAxiosError=bb;Ge.mergeConfig=ut;Ge.AxiosHeaders=Tn;Ge.formToJSON=e=>e0(Y.isHTMLForm(e)?new FormData(e):e);Ge.getAdapter=s0.getAdapter;Ge.HttpStatusCode=$o;Ge.default=Ge;const{Axios:FF,AxiosError:OF,CanceledError:RF,isCancel:IF,CancelToken:DF,VERSION:PF,all:NF,Cancel:LF,isAxiosError:MF,spread:BF,toFormData:UF,AxiosHeaders:zF,HttpStatusCode:$F,formToJSON:qF,getAdapter:HF,mergeConfig:WF}=Ge;function wb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ks,eu;function _b(){if(eu)return Ks;eu=1;const e=new Set(["ENOTFOUND","ENETUNREACH","UNABLE_TO_GET_ISSUER_CERT","UNABLE_TO_GET_CRL","UNABLE_TO_DECRYPT_CERT_SIGNATURE","UNABLE_TO_DECRYPT_CRL_SIGNATURE","UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY","CERT_SIGNATURE_FAILURE","CRL_SIGNATURE_FAILURE","CERT_NOT_YET_VALID","CERT_HAS_EXPIRED","CRL_NOT_YET_VALID","CRL_HAS_EXPIRED","ERROR_IN_CERT_NOT_BEFORE_FIELD","ERROR_IN_CERT_NOT_AFTER_FIELD","ERROR_IN_CRL_LAST_UPDATE_FIELD","ERROR_IN_CRL_NEXT_UPDATE_FIELD","OUT_OF_MEM","DEPTH_ZERO_SELF_SIGNED_CERT","SELF_SIGNED_CERT_IN_CHAIN","UNABLE_TO_GET_ISSUER_CERT_LOCALLY","UNABLE_TO_VERIFY_LEAF_SIGNATURE","CERT_CHAIN_TOO_LONG","CERT_REVOKED","INVALID_CA","PATH_LENGTH_EXCEEDED","INVALID_PURPOSE","CERT_UNTRUSTED","CERT_REJECTED","HOSTNAME_MISMATCH"]);return Ks=n=>!e.has(n&&n.code),Ks}var kb=_b();const Eb=wb(kb),qc="axios-retry";function d0(e){const n=["ERR_CANCELED","ECONNABORTED"];return e.response||!e.code||n.includes(e.code)?!1:Eb(e)}const u0=["get","head","options"],Tb=u0.concat(["put","delete"]);function Hc(e){return e.code!=="ECONNABORTED"&&(!e.response||e.response.status===429||e.response.status>=500&&e.response.status<=599)}function Ab(e){var n;return(n=e.config)!=null&&n.method?Hc(e)&&u0.indexOf(e.config.method)!==-1:!1}function v0(e){var n;return(n=e.config)!=null&&n.method?Hc(e)&&Tb.indexOf(e.config.method)!==-1:!1}function f0(e){return d0(e)||v0(e)}function Wc(e=void 0){var n;const a=(n=e==null?void 0:e.response)==null?void 0:n.headers["retry-after"];if(!a)return 0;let t=(Number(a)||0)*1e3;return t===0&&(t=(new Date(a).valueOf()||0)-Date.now()),Math.max(0,t)}function Sb(e=0,n=void 0){return Math.max(0,Wc(n))}function Cb(e=0,n=void 0,a=100){const t=2**e*a,r=Math.max(t,Wc(n)),i=r*.2*Math.random();return r+i}function Fb(e=100){return(n=0,a=void 0)=>{const t=n*e;return Math.max(t,Wc(a))}}const Ob={retries:3,retryCondition:f0,retryDelay:Sb,shouldResetTimeout:!1,onRetry:()=>{},onMaxRetryTimesExceeded:()=>{},validateResponse:null};function Rb(e,n){return{...Ob,...n,...e[qc]}}function nu(e,n,a=!1){const t=Rb(e,n||{});return t.retryCount=t.retryCount||0,(!t.lastRequestTime||a)&&(t.lastRequestTime=Date.now()),e[qc]=t,t}function Ib(e,n){e.defaults.agent===n.agent&&delete n.agent,e.defaults.httpAgent===n.httpAgent&&delete n.httpAgent,e.defaults.httpsAgent===n.httpsAgent&&delete n.httpsAgent}async function Db(e,n){const{retries:a,retryCondition:t}=e,r=(e.retryCount||0)<a&&t(n);if(typeof r=="object")try{return await r!==!1}catch{return!1}return r}async function Pb(e,n,a,t){var r;n.retryCount+=1;const{retryDelay:i,shouldResetTimeout:s,onRetry:o}=n,c=i(n.retryCount,a);if(Ib(e,t),!s&&t.timeout&&n.lastRequestTime){const l=Date.now()-n.lastRequestTime,d=t.timeout-l-c;if(d<=0)return Promise.reject(a);t.timeout=d}return t.transformRequest=[l=>l],await o(n.retryCount,a,t),(r=t.signal)!=null&&r.aborted?Promise.resolve(e(t)):new Promise(l=>{var d;const u=()=>{clearTimeout(f),l(e(t))},f=setTimeout(()=>{var v;l(e(t)),(v=t.signal)!=null&&v.removeEventListener&&t.signal.removeEventListener("abort",u)},c);(d=t.signal)!=null&&d.addEventListener&&t.signal.addEventListener("abort",u,{once:!0})})}async function Nb(e,n){e.retryCount>=e.retries&&await e.onMaxRetryTimesExceeded(n,e.retryCount)}const da=(e,n)=>{const a=e.interceptors.request.use(r=>{var i;return nu(r,n,!0),(i=r[qc])!=null&&i.validateResponse&&(r.validateStatus=()=>!1),r}),t=e.interceptors.response.use(null,async r=>{var i;const{config:s}=r;if(!s)return Promise.reject(r);const o=nu(s,n);return r.response&&(i=o.validateResponse)!=null&&i.call(o,r.response)?r.response:await Db(o,r)?Pb(e,o,r,s):(await Nb(o,r),Promise.reject(r))});return{requestInterceptorId:a,responseInterceptorId:t}};da.isNetworkError=d0;da.isSafeRequestError=Ab;da.isIdempotentRequestError=v0;da.isNetworkOrIdempotentRequestError=f0;da.exponentialDelay=Cb;da.linearDelay=Fb;da.isRetryableError=Hc;function p0(){let e=Ge.create({timeout:15e3,headers:{post:{"Content-Type":"application/x-www-form-urlencoded"}}});return da(e,{retries:3,retryDelay:da.exponentialDelay,retryCondition:n=>da.isNetworkOrIdempotentRequestError(n)||n.response&&n.response.status>=500}),H1(e),W1(e),V1(e),e}p0();const Lb={name:"Toast",props:{message:String,type:{type:String,default:"success"},visible:Boolean}};var Mb=function(){var n=this,a=n._self._c;return a("transition",{attrs:{name:"fade"}},[n.visible?a("div",{staticClass:"toast",class:n.type},[n.type==="loading"?a("span",{staticClass:"spinner"}):n._e(),a("span",[n._v(n._s(n.message))])]):n._e()])},Bb=[],Ub=_n(Lb,Mb,Bb,!1,null,"045bfa5d");const zb=Ub.exports;let $b=Ie.extend(zb),Vn=null,qo=null;function vi({message:e,type:n="success",duration:a=2e3}){Vn&&(Vn.$destroy(),document.body.removeChild(Vn.$el),Vn=null);let t=new $b({propsData:{message:e,type:n,visible:!0}});t.$mount(),document.body.appendChild(t.$el),Vn=t,n!=="loading"&&(qo=setTimeout(()=>{t.visible=!1,setTimeout(()=>{t.$destroy(),document.body.removeChild(t.$el),Vn=null},300)},a))}function qb(){Vn&&(Vn.visible=!1,setTimeout(()=>{Vn.$destroy(),document.body.removeChild(Vn.$el),Vn=null,qo&&clearTimeout(qo)},300))}const lr={success(e,n){vi({message:e,type:"success",duration:n})},error(e,n){vi({message:e,type:"error",duration:n})},warning(e,n){vi({message:e,type:"warning",duration:n})},loading(e){vi({message:e,type:"loading",duration:999999})},hide:qb},Hb={name:"ImageUploader",data(){return{previewUrl:""}},methods:{async upload(){let e=await B1({accept:"image/*",onSelect:n=>{console.log("jser [upload] 111",n)}});if(e){const n=await Mc(e);n?(lr.loading("上传图片中..."),await this.$nextTick(),this.previewUrl=n,this.$emit("image-uploaded",n)):console.error("图片转base64失败")}console.log("jser [upload] 222",e)},async onFileChange(e){e.target.files[0]}}};var Wb=function(){var n=this,a=n._self._c;return a("div",{staticClass:"uploader-container"},[a("label",{staticClass:"upload-btn",on:{click:n.upload}},[n._v(" 选择图片 ")]),n.previewUrl?a("div",{staticClass:"preview-box"},[a("img",{attrs:{src:n.previewUrl,alt:"预览"}})]):n._e()])},Gb=[],Vb=_n(Hb,Wb,Gb,!1,null,"65255884");const Xb=Vb.exports,Kb={name:"ImageTagOverlay",props:["imageUrl","products"],data(){return{imgWidth:1,imgHeight:1,activeIdx:null,popupStyle:{}}},methods:{onImgLoad(){const e=this.$refs.img;this.imgWidth=e.naturalWidth,this.imgHeight=e.naturalHeight},getBoxStyle(e){const n=e.XMin/this.imgWidth*100,a=e.YMin/this.imgHeight*100,t=(e.XMax-e.XMin)/this.imgWidth*100,r=(e.YMax-e.YMin)/this.imgHeight*100;return{position:"absolute",left:n+"%",top:a+"%",width:t+"%",height:r+"%",border:"2px solid #f00",boxSizing:"border-box",cursor:"pointer",zIndex:10}},getScaleX(){const e=this.$refs.img;return e?e.width/this.imgWidth:1},getScaleY(){const e=this.$refs.img;return e?e.height/this.imgHeight:1},showInfo(e,n){this.activeIdx=e,this.popupStyle={position:"absolute",left:n.offsetX+10+"px",top:n.offsetY+10+"px",background:"#fff",border:"1px solid #ccc",padding:"8px",zIndex:100}}}};var Yb=function(){var n=this,a=n._self._c;return a("div",{staticStyle:{position:"relative",display:"inline-block"}},[a("img",{ref:"img",attrs:{src:n.imageUrl},on:{load:n.onImgLoad}}),n._l(n.products,function(t,r){return a("div",{key:r,staticClass:"tag-box",style:n.getBoxStyle(t),on:{click:function(i){return n.showInfo(r,i)}}},[a("span",{staticClass:"tag-label"},[n._v(n._s(t.Name))]),n.activeIdx===r?a("div",{staticClass:"tag-popup",style:n.popupStyle},[a("div",[a("strong",[n._v(n._s(t.Name))]),a("br"),n._v(" 分类: "+n._s(t.Parents)),a("br"),n._v(" 置信度: "+n._s(t.Confidence)+"% ")]),a("button",{on:{click:function(i){i.stopPropagation(),n.activeIdx=null}}},[n._v("关闭")])]):n._e()])})],2)},Jb=[],Zb=_n(Kb,Yb,Jb,!1,null,"d101e3ea");const Qb=Zb.exports,ew={name:"RecognitionResult",props:{imageUrl:String,products:Array},components:{ImageTagOverlay:Qb}};var nw=function(){var n=this,a=n._self._c;return n.imageUrl&&n.products&&n.products.length?a("div",{staticClass:"card"},[a("ImageTagOverlay",{attrs:{"image-url":n.imageUrl,products:n.products}})],1):n._e()},aw=[],tw=_n(ew,nw,aw,!1,null,null);const rw=tw.exports;let h0=p0();const iw="http://10.1.0.229:3001/";h0.defaults.baseURL=iw;const sw=e=>h0.post("/api/recognize",e),ow={name:"App",components:{CameraCaptureButton:T1,PageHeader:O1,ImageUploader:Xb,RecognitionResult:rw},data(){return{imageUrl:"",products:[]}},methods:{async onAutoImgUpload(){const e=await Nf(),n=await Mc(e);this.onImageUploaded(n)},async onImageUploaded(e){this.imageUrl=e,this.products=[];try{lr.loading("识别中..");const n=await sw({ImageBase64:e});n.data.success?(lr.success("识别成功"),this.products=n.data.data.Products):(lr.error("识别失败"),alert("识别失败"))}catch{lr.error("识别失败"),alert("识别失败")}this.$forceUpdate()}},beforeMount(){this.$route.query.auto&&this.onAutoImgUpload()}};var cw=function(){var n=this,a=n._self._c;return a("div",{staticClass:"app-container",attrs:{id:"app"}},[a("CameraCaptureButton",{on:{capture:n.onImageUploaded}}),a("PageHeader",[n._v("图片识别 Demo")]),a("div",{staticClass:"card"},[a("ImageUploader",{on:{"image-uploaded":n.onImageUploaded}})],1),a("RecognitionResult",{attrs:{imageUrl:n.imageUrl,products:n.products}})],1)},lw=[],dw=_n(ow,cw,lw,!1,null,null);const uw=dw.exports,vw={name:"FinishModal",props:{visible:{type:Boolean,default:!1},bookName:{type:String,default:""}}};var fw=function(){var n=this,a=n._self._c;return n.visible?a("div",{staticClass:"finish-mask"},[a("div",{staticClass:"finish-modal"},[a("div",{staticClass:"finish-title"},[n._v("🎉 恭喜你！")]),a("div",{staticClass:"finish-desc"},[n._v("本轮词库「"+n._s(n.bookName)+"」已全部学完")]),a("div",{staticClass:"finish-actions"},[a("button",{staticClass:"finish-btn",on:{click:function(t){return n.$emit("restart")}}},[n._v("再来一轮")]),a("button",{staticClass:"finish-btn home-btn",on:{click:function(t){return n.$emit("returnHome")}}},[n._v("休息一下")])])])]):n._e()},pw=[],hw=_n(vw,fw,pw,!1,null,"acd8d9a2");const mw=hw.exports,hr=/^[a-z0-9]+(-[a-z0-9]+)*$/,Cs=(e,n,a,t="")=>{const r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;t=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const o=r.pop(),c=r.pop(),l={provider:r.length>0?r[0]:t,prefix:c,name:o};return n&&!Ni(l)?null:l}const i=r[0],s=i.split("-");if(s.length>1){const o={provider:t,prefix:s.shift(),name:s.join("-")};return n&&!Ni(o)?null:o}if(a&&t===""){const o={provider:t,prefix:"",name:i};return n&&!Ni(o,a)?null:o}return null},Ni=(e,n)=>e?!!((e.provider===""||e.provider.match(hr))&&(n&&e.prefix===""||e.prefix.match(hr))&&e.name.match(hr)):!1,m0=Object.freeze({left:0,top:0,width:16,height:16}),os=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),g0=Object.freeze({...m0,...os}),Ho=Object.freeze({...g0,body:"",hidden:!1});function gw(e,n){const a={};!e.hFlip!=!n.hFlip&&(a.hFlip=!0),!e.vFlip!=!n.vFlip&&(a.vFlip=!0);const t=((e.rotate||0)+(n.rotate||0))%4;return t&&(a.rotate=t),a}function au(e,n){const a=gw(e,n);for(const t in Ho)t in os?t in e&&!(t in a)&&(a[t]=os[t]):t in n?a[t]=n[t]:t in e&&(a[t]=e[t]);return a}function jw(e,n){const a=e.icons,t=e.aliases||Object.create(null),r=Object.create(null);function i(s){if(a[s])return r[s]=[];if(!(s in r)){r[s]=null;const o=t[s]&&t[s].parent,c=o&&i(o);c&&(r[s]=[o].concat(c))}return r[s]}return Object.keys(a).concat(Object.keys(t)).forEach(i),r}function xw(e,n,a){const t=e.icons,r=e.aliases||Object.create(null);let i={};function s(o){i=au(t[o]||r[o],i)}return s(n),a.forEach(s),au(e,i)}function j0(e,n){const a=[];if(typeof e!="object"||typeof e.icons!="object")return a;e.not_found instanceof Array&&e.not_found.forEach(r=>{n(r,null),a.push(r)});const t=jw(e);for(const r in t){const i=t[r];i&&(n(r,xw(e,r,i)),a.push(r))}return a}const yw={provider:"",aliases:{},not_found:{},...m0};function Ys(e,n){for(const a in n)if(a in e&&typeof e[a]!=typeof n[a])return!1;return!0}function x0(e){if(typeof e!="object"||e===null)return null;const n=e;if(typeof n.prefix!="string"||!e.icons||typeof e.icons!="object"||!Ys(e,yw))return null;const a=n.icons;for(const r in a){const i=a[r];if(!r.match(hr)||typeof i.body!="string"||!Ys(i,Ho))return null}const t=n.aliases||Object.create(null);for(const r in t){const i=t[r],s=i.parent;if(!r.match(hr)||typeof s!="string"||!a[s]&&!t[s]||!Ys(i,Ho))return null}return n}const tu=Object.create(null);function bw(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}function vt(e,n){const a=tu[e]||(tu[e]=Object.create(null));return a[n]||(a[n]=bw(e,n))}function Gc(e,n){return x0(n)?j0(n,(a,t)=>{t?e.icons[a]=t:e.missing.add(a)}):[]}function ww(e,n,a){try{if(typeof a.body=="string")return e.icons[n]={...a},!0}catch{}return!1}let Rr=!1;function y0(e){return typeof e=="boolean"&&(Rr=e),Rr}function _w(e){const n=typeof e=="string"?Cs(e,!0,Rr):e;if(n){const a=vt(n.provider,n.prefix),t=n.name;return a.icons[t]||(a.missing.has(t)?null:void 0)}}function kw(e,n){const a=Cs(e,!0,Rr);if(!a)return!1;const t=vt(a.provider,a.prefix);return ww(t,a.name,n)}function Ew(e,n){if(typeof e!="object")return!1;if(typeof n!="string"&&(n=e.provider||""),Rr&&!n&&!e.prefix){let r=!1;return x0(e)&&(e.prefix="",j0(e,(i,s)=>{s&&kw(i,s)&&(r=!0)})),r}const a=e.prefix;if(!Ni({provider:n,prefix:a,name:"a"}))return!1;const t=vt(n,a);return!!Gc(t,e)}const b0=Object.freeze({width:null,height:null}),w0=Object.freeze({...b0,...os}),Tw=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Aw=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ru(e,n,a){if(n===1)return e;if(a=a||100,typeof e=="number")return Math.ceil(e*n*a)/a;if(typeof e!="string")return e;const t=e.split(Tw);if(t===null||!t.length)return e;const r=[];let i=t.shift(),s=Aw.test(i);for(;;){if(s){const o=parseFloat(i);isNaN(o)?r.push(i):r.push(Math.ceil(o*n*a)/a)}else r.push(i);if(i=t.shift(),i===void 0)return r.join("");s=!s}}const Sw=e=>e==="unset"||e==="undefined"||e==="none";function Cw(e,n){const a={...g0,...e},t={...w0,...n},r={left:a.left,top:a.top,width:a.width,height:a.height};let i=a.body;[a,t].forEach(h=>{const p=[],m=h.hFlip,y=h.vFlip;let T=h.rotate;m?y?T+=2:(p.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),p.push("scale(-1 1)"),r.top=r.left=0):y&&(p.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),p.push("scale(1 -1)"),r.top=r.left=0);let j;switch(T<0&&(T-=Math.floor(T/4)*4),T=T%4,T){case 1:j=r.height/2+r.top,p.unshift("rotate(90 "+j.toString()+" "+j.toString()+")");break;case 2:p.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:j=r.width/2+r.left,p.unshift("rotate(-90 "+j.toString()+" "+j.toString()+")");break}T%2===1&&(r.left!==r.top&&(j=r.left,r.left=r.top,r.top=j),r.width!==r.height&&(j=r.width,r.width=r.height,r.height=j)),p.length&&(i='<g transform="'+p.join(" ")+'">'+i+"</g>")});const s=t.width,o=t.height,c=r.width,l=r.height;let d,u;s===null?(u=o===null?"1em":o==="auto"?l:o,d=ru(u,c/l)):(d=s==="auto"?c:s,u=o===null?ru(d,l/c):o==="auto"?l:o);const f={},v=(h,p)=>{Sw(p)||(f[h]=p.toString())};return v("width",d),v("height",u),f.viewBox=r.left.toString()+" "+r.top.toString()+" "+c.toString()+" "+l.toString(),{attributes:f,body:i}}const Fw=/\sid="(\S+)"/g,Ow="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Rw=0;function Iw(e,n=Ow){const a=[];let t;for(;t=Fw.exec(e);)a.push(t[1]);if(!a.length)return e;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return a.forEach(i=>{const s=typeof n=="function"?n(i):n+(Rw++).toString(),o=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+s+r+"$3")}),e=e.replace(new RegExp(r,"g"),""),e}const Wo=Object.create(null);function Dw(e,n){Wo[e]=n}function Go(e){return Wo[e]||Wo[""]}function Vc(e){let n;if(typeof e.resources=="string")n=[e.resources];else if(n=e.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Xc=Object.create(null),ir=["https://api.simplesvg.com","https://api.unisvg.com"],Li=[];for(;ir.length>0;)ir.length===1||Math.random()>.5?Li.push(ir.shift()):Li.push(ir.pop());Xc[""]=Vc({resources:["https://api.iconify.design"].concat(Li)});function Pw(e,n){const a=Vc(n);return a===null?!1:(Xc[e]=a,!0)}function Kc(e){return Xc[e]}const Nw=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let iu=Nw();function Lw(e,n){const a=Kc(e);if(!a)return 0;let t;if(!a.maxURL)t=0;else{let r=0;a.resources.forEach(s=>{r=Math.max(r,s.length)});const i=n+".json?icons=";t=a.maxURL-r-a.path.length-i.length}return t}function Mw(e){return e===404}const Bw=(e,n,a)=>{const t=[],r=Lw(e,n),i="icons";let s={type:i,provider:e,prefix:n,icons:[]},o=0;return a.forEach((c,l)=>{o+=c.length+1,o>=r&&l>0&&(t.push(s),s={type:i,provider:e,prefix:n,icons:[]},o=c.length),s.icons.push(c)}),t.push(s),t};function Uw(e){if(typeof e=="string"){const n=Kc(e);if(n)return n.path}return"/"}const zw=(e,n,a)=>{if(!iu){a("abort",424);return}let t=Uw(n.provider);switch(n.type){case"icons":{const i=n.prefix,o=n.icons.join(","),c=new URLSearchParams({icons:o});t+=i+".json?"+c.toString();break}case"custom":{const i=n.uri;t+=i.slice(0,1)==="/"?i.slice(1):i;break}default:a("abort",400);return}let r=503;iu(e+t).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{a(Mw(s)?"abort":"next",s)});return}return r=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?a("abort",i):a("next",r)});return}setTimeout(()=>{a("success",i)})}).catch(()=>{a("next",r)})},$w={prepare:Bw,send:zw};function qw(e){const n={loaded:[],missing:[],pending:[]},a=Object.create(null);e.sort((r,i)=>r.provider!==i.provider?r.provider.localeCompare(i.provider):r.prefix!==i.prefix?r.prefix.localeCompare(i.prefix):r.name.localeCompare(i.name));let t={provider:"",prefix:"",name:""};return e.forEach(r=>{if(t.name===r.name&&t.prefix===r.prefix&&t.provider===r.provider)return;t=r;const i=r.provider,s=r.prefix,o=r.name,c=a[i]||(a[i]=Object.create(null)),l=c[s]||(c[s]=vt(i,s));let d;o in l.icons?d=n.loaded:s===""||l.missing.has(o)?d=n.missing:d=n.pending;const u={provider:i,prefix:s,name:o};d.push(u)}),n}function _0(e,n){e.forEach(a=>{const t=a.loaderCallbacks;t&&(a.loaderCallbacks=t.filter(r=>r.id!==n))})}function Hw(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!n.length)return;let a=!1;const t=e.provider,r=e.prefix;n.forEach(i=>{const s=i.icons,o=s.pending.length;s.pending=s.pending.filter(c=>{if(c.prefix!==r)return!0;const l=c.name;if(e.icons[l])s.loaded.push({provider:t,prefix:r,name:l});else if(e.missing.has(l))s.missing.push({provider:t,prefix:r,name:l});else return a=!0,!0;return!1}),s.pending.length!==o&&(a||_0([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let Ww=0;function Gw(e,n,a){const t=Ww++,r=_0.bind(null,a,t);if(!n.pending.length)return r;const i={id:t,icons:n,callback:e,abort:r};return a.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),r}function Vw(e,n=!0,a=!1){const t=[];return e.forEach(r=>{const i=typeof r=="string"?Cs(r,n,a):r;i&&t.push(i)}),t}var Xw={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Kw(e,n,a,t){const r=e.resources.length,i=e.random?Math.floor(Math.random()*r):e.index;let s;if(e.random){let F=e.resources.slice(0);for(s=[];F.length>1;){const _=Math.floor(Math.random()*F.length);s.push(F[_]),F=F.slice(0,_).concat(F.slice(_+1))}s=s.concat(F)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const o=Date.now();let c="pending",l=0,d,u=null,f=[],v=[];typeof t=="function"&&v.push(t);function h(){u&&(clearTimeout(u),u=null)}function p(){c==="pending"&&(c="aborted"),h(),f.forEach(F=>{F.status==="pending"&&(F.status="aborted")}),f=[]}function m(F,_){_&&(v=[]),typeof F=="function"&&v.push(F)}function y(){return{startTime:o,payload:n,status:c,queriesSent:l,queriesPending:f.length,subscribe:m,abort:p}}function T(){c="failed",v.forEach(F=>{F(void 0,d)})}function j(){f.forEach(F=>{F.status==="pending"&&(F.status="aborted")}),f=[]}function R(F,_,M){const I=_!=="success";switch(f=f.filter(X=>X!==F),c){case"pending":break;case"failed":if(I||!e.dataAfterTimeout)return;break;default:return}if(_==="abort"){d=M,T();return}if(I){d=M,f.length||(s.length?N():T());return}if(h(),j(),!e.random){const X=e.resources.indexOf(F.resource);X!==-1&&X!==e.index&&(e.index=X)}c="completed",v.forEach(X=>{X(M)})}function N(){if(c!=="pending")return;h();const F=s.shift();if(F===void 0){if(f.length){u=setTimeout(()=>{h(),c==="pending"&&(j(),T())},e.timeout);return}T();return}const _={status:"pending",resource:F,callback:(M,I)=>{R(_,M,I)}};f.push(_),l++,u=setTimeout(N,e.rotate),a(F,n,_.callback)}return setTimeout(N),y}function k0(e){const n={...Xw,...e};let a=[];function t(){a=a.filter(o=>o().status==="pending")}function r(o,c,l){const d=Kw(n,o,c,(u,f)=>{t(),l&&l(u,f)});return a.push(d),d}function i(o){return a.find(c=>o(c))||null}return{query:r,find:i,setIndex:o=>{n.index=o},getIndex:()=>n.index,cleanup:t}}function su(){}const Js=Object.create(null);function Yw(e){if(!Js[e]){const n=Kc(e);if(!n)return;const a=k0(n),t={config:n,redundancy:a};Js[e]=t}return Js[e]}function Jw(e,n,a){let t,r;if(typeof e=="string"){const i=Go(e);if(!i)return a(void 0,424),su;r=i.send;const s=Yw(e);s&&(t=s.redundancy)}else{const i=Vc(e);if(i){t=k0(i);const s=e.resources?e.resources[0]:"",o=Go(s);o&&(r=o.send)}}return!t||!r?(a(void 0,424),su):t.query(n,r,a)().abort}const ou="iconify2",Ir="iconify",E0=Ir+"-count",cu=Ir+"-version",T0=36e5,Zw=168;function Vo(e,n){try{return e.getItem(n)}catch{}}function Yc(e,n,a){try{return e.setItem(n,a),!0}catch{}}function lu(e,n){try{e.removeItem(n)}catch{}}function Xo(e,n){return Yc(e,E0,n.toString())}function Ko(e){return parseInt(Vo(e,E0))||0}const Fs={local:!0,session:!0},A0={local:new Set,session:new Set};let Jc=!1;function Qw(e){Jc=e}let fi=typeof window>"u"?{}:window;function S0(e){const n=e+"Storage";try{if(fi&&fi[n]&&typeof fi[n].length=="number")return fi[n]}catch{}Fs[e]=!1}function C0(e,n){const a=S0(e);if(!a)return;const t=Vo(a,cu);if(t!==ou){if(t){const o=Ko(a);for(let c=0;c<o;c++)lu(a,Ir+c.toString())}Yc(a,cu,ou),Xo(a,0);return}const r=Math.floor(Date.now()/T0)-Zw,i=o=>{const c=Ir+o.toString(),l=Vo(a,c);if(typeof l=="string"){try{const d=JSON.parse(l);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>r&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&n(d,o))return!0}catch{}lu(a,c)}};let s=Ko(a);for(let o=s-1;o>=0;o--)i(o)||(o===s-1?(s--,Xo(a,s)):A0[e].add(o))}function F0(){if(!Jc){Qw(!0);for(const e in Fs)C0(e,n=>{const a=n.data,t=n.provider,r=a.prefix,i=vt(t,r);if(!Gc(i,a).length)return!1;const s=a.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function e_(e,n){const a=e.lastModifiedCached;if(a&&a>=n)return a===n;if(e.lastModifiedCached=n,a)for(const t in Fs)C0(t,r=>{const i=r.data;return r.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===n});return!0}function n_(e,n){Jc||F0();function a(t){let r;if(!Fs[t]||!(r=S0(t)))return;const i=A0[t];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=Ko(r),!Xo(r,s+1))return;const o={cached:Math.floor(Date.now()/T0),provider:e.provider,data:n};return Yc(r,Ir+s.toString(),JSON.stringify(o))}n.lastModified&&!e_(e,n.lastModified)||Object.keys(n.icons).length&&(n.not_found&&(n=Object.assign({},n),delete n.not_found),a("local")||a("session"))}function du(){}function a_(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Hw(e)}))}function t_(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:a,prefix:t}=e,r=e.iconsToLoad;delete e.iconsToLoad;let i;if(!r||!(i=Go(a)))return;i.prepare(a,t,r).forEach(o=>{Jw(a,o,c=>{if(typeof c!="object")o.icons.forEach(l=>{e.missing.add(l)});else try{const l=Gc(e,c);if(!l.length)return;const d=e.pendingIcons;d&&l.forEach(u=>{d.delete(u)}),n_(e,c)}catch(l){console.error(l)}a_(e)})})}))}const r_=(e,n)=>{const a=Vw(e,!0,y0()),t=qw(a);if(!t.pending.length){let c=!0;return n&&setTimeout(()=>{c&&n(t.loaded,t.missing,t.pending,du)}),()=>{c=!1}}const r=Object.create(null),i=[];let s,o;return t.pending.forEach(c=>{const{provider:l,prefix:d}=c;if(d===o&&l===s)return;s=l,o=d,i.push(vt(l,d));const u=r[l]||(r[l]=Object.create(null));u[d]||(u[d]=[])}),t.pending.forEach(c=>{const{provider:l,prefix:d,name:u}=c,f=vt(l,d),v=f.pendingIcons||(f.pendingIcons=new Set);v.has(u)||(v.add(u),r[l][d].push(u))}),i.forEach(c=>{const{provider:l,prefix:d}=c;r[l][d].length&&t_(c,r[l][d])}),n?Gw(n,t,i):du};function i_(e,n){const a={...e};for(const t in n){const r=n[t],i=typeof r;t in b0?(r===null||r&&(i==="string"||i==="number"))&&(a[t]=r):i===typeof a[t]&&(a[t]=t==="rotate"?r%4:r)}return a}const s_=/[\s,]+/;function o_(e,n){n.split(s_).forEach(a=>{switch(a.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function c_(e,n=0){const a=e.replace(/^-?[0-9.]*/,"");function t(r){for(;r<0;)r+=4;return r%4}if(a===""){const r=parseInt(e);return isNaN(r)?0:t(r)}else if(a!==e){let r=0;switch(a){case"%":r=25;break;case"deg":r=90}if(r){let i=parseFloat(e.slice(0,e.length-a.length));return isNaN(i)?0:(i=i/r,i%1===0?t(i):0)}}return n}const uu={...w0,inline:!1},l_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Mi={};["horizontal","vertical"].forEach(e=>{const n=e.slice(0,1)+"Flip";Mi[e+"-flip"]=n,Mi[e.slice(0,1)+"-flip"]=n,Mi[e+"Flip"]=n});const vu=(e,n,a,t)=>{const r=i_(uu,n),i={...l_},s={};for(let u in n){const f=n[u];if(f!==void 0)switch(u){case"icon":case"style":case"onLoad":break;case"inline":case"hFlip":case"vFlip":r[u]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&o_(r,f);break;case"color":s.color=f;break;case"rotate":typeof f=="string"?r[u]=c_(f):typeof f=="number"&&(r[u]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete i["aria-hidden"];break;default:const v=Mi[u];v?(f===!0||f==="true"||f===1)&&(r[v]=!0):uu[u]===void 0&&(i[u]=f)}}const o=Cw(t,r);for(let u in o.attributes)i[u]=o.attributes[u];r.inline&&(s.verticalAlign="-0.125em");let c=0,l=n.id;typeof l=="string"&&(l=l.replace(/-/g,"_"));const d={attrs:i,domProps:{innerHTML:Iw(o.body,l?()=>l+"ID"+c++:"iconifyVue")}};return Object.keys(s).length>0&&(d.style=s),a&&(["on","ref"].forEach(u=>{a[u]!==void 0&&(d[u]=a[u])}),["staticClass","class"].forEach(u=>{a[u]!==void 0&&(d.class=a[u])})),e("svg",d)};y0(!0);Dw("",$w);if(typeof document<"u"&&typeof window<"u"){F0();const e=window;if(e.IconifyPreload!==void 0){const n=e.IconifyPreload,a="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(t=>{try{(typeof t!="object"||t===null||t instanceof Array||typeof t.icons!="object"||typeof t.prefix!="string"||!Ew(t))&&console.error(a)}catch{console.error(a)}})}if(e.IconifyProviders!==void 0){const n=e.IconifyProviders;if(typeof n=="object"&&n!==null)for(let a in n){const t="IconifyProviders["+a+"] is invalid.";try{const r=n[a];if(typeof r!="object"||!r||r.resources===void 0)continue;Pw(a,r)||console.error(t)}catch{console.error(t)}}}}const d_={body:""},O0=Ie.extend({inheritAttrs:!1,data(){return{iconMounted:!1}},beforeMount(){this._name="",this._loadingIcon=null,this.iconMounted=!0},beforeDestroy(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,n){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let a;if(typeof e!="string"||(a=Cs(e,!1,!0))===null)return this.abortLoading(),null;const t=_w(a);if(!t)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",t!==null&&(this._loadingIcon={name:e,abort:r_([a],()=>{this.$forceUpdate()})})),null;this.abortLoading(),this._name!==e&&(this._name=e,n&&n(e));const r=["iconify"];return a.prefix!==""&&r.push("iconify--"+a.prefix),a.provider!==""&&r.push("iconify--"+a.provider),{data:t,classes:r}}},render(e){const n=Object.assign({},this.$attrs);let a=this.$data;const t=this.iconMounted?this.getIcon(n.icon,n.onLoad):null;return t?(t.classes&&(a={...a,class:(typeof a.class=="string"?a.class+" ":"")+t.classes.join(" ")}),vu(e,n,a,t.data)):vu(e,n,a,d_)}}),u_=1,sr={LAST:-1,NOW:0,NEXT:1},pi=10,v_={name:"Words",components:{FinishModal:mw,Icon:O0},data(){return{words:[],wordBooks:[],currentBookIdx:0,learningQueue:[],currentIdx:0,revealedSet:new Set,touchStartX:0,deltaX:0,isDragging:!1,isAnimating:!1,showBookList:!1,showConfirm:!1,bookToSwitch:null,currentGroup:0,learnedArr:[],groupCount:1,finishAll:!1,audioPlayer:null}},computed:{sliderWords(){const e=this.learningQueue[this.currentIdx-1],n=this.learningQueue[this.currentIdx],a=this.learningQueue[this.currentIdx+1],t=r=>typeof r=="number"?this.words[r]:{en:"",zh:"",enDef:""};return[t(e),t(n),t(a)]},progressPercent(){return this.learnedArr.length>0?Math.round(this.learnedArr.length/this.words.length*100):0},progressText(){return this.words.length>0?`${this.currentIdx+1} / ${this.learningQueue.length}`:""},isZhRevealed(){return this.revealedSet.has(this.learningQueue[this.currentIdx])}},methods:{sliderStyle(e){const n=(e-1)*100,a=e===0||e===2?0:this.deltaX/window.innerWidth*100;return{transform:`translateX(calc(${n}% + ${a}vw))`,zIndex:e===1?2:1,transition:this.isAnimating?"transform 0.3s cubic-bezier(.25,.8,.5,1)":"none"}},onTouchStart(e){this.isAnimating||this.learningQueue.length===0||(this.isDragging=!0,this.touchStartX=e.changedTouches[0].clientX,this.deltaX=0)},onTouchMove(e){if(!this.isDragging)return;const n=e.changedTouches[0].clientX-this.touchStartX;this.currentIdx===0&&n>0||this.currentIdx===this.learningQueue.length-1&&n<0?this.deltaX=n*u_:this.deltaX=n},onTouchEnd(){if(!this.isDragging)return;this.isDragging=!1;const e=window.innerWidth/16;this.deltaX<-e?this.animateTo(sr.LAST,this.handlePass):this.deltaX>e?this.animateTo(sr.NEXT,this.handleFail):this.animateTo(sr.NOW)},animateTo(e,n){this.isAnimating=!0,this.deltaX=e*window.innerWidth,setTimeout(()=>{this.isAnimating=!1,this.deltaX=0,n&&n()},300)},revealZh(){this.revealedSet.add(this.learningQueue[this.currentIdx]),this.revealedSet=new Set(this.revealedSet)},passWord(){this.animateTo(sr.LAST,this.handlePass)},failWord(){this.animateTo(sr.NEXT,this.handleFail)},handlePass(){if(this.learningQueue.length<=1){this.learnedArr.push(this.learningQueue[this.currentIdx]),this.saveProgress(),this.nextGroupOrFinish();return}this.learnedArr.push(this.learningQueue[this.currentIdx]),this.learningQueue.splice(this.currentIdx,1),this.currentIdx>=this.learningQueue.length&&(this.currentIdx=this.learningQueue.length-1),this.revealedSet.clear(),this.revealedSet=new Set,this.saveProgress()},handleFail(){this.currentIdx<this.learningQueue.length-1&&this.currentIdx++,this.revealedSet.clear(),this.revealedSet=new Set,this.saveProgress()},nextGroupOrFinish(){if(this.learnedArr.length>=this.words.length){this.finishAll=!0,this.saveProgress();return}this.currentGroup++,this.currentGroup>=this.groupCount&&(this.currentGroup=this.groupCount-1),this.initLearningQueue()},confirmSwitch(e){this.bookToSwitch=e,this.showConfirm=!0},doSwitchBook(){pf(this.bookToSwitch),this.currentBookIdx=this.bookToSwitch,this.loadProgress(),this.showConfirm=!1,this.showBookList=!1},restartLearning(){this.currentGroup=0,this.learnedArr=[],this.finishAll=!1,this.saveProgress(),this.initLearningQueue()},initLearningQueue(){this.wordBooks=Ji(),this.currentBookIdx=Zi(),this.words=kd(),this.groupCount=Math.ceil(this.words.length/pi);const e=this.currentGroup*pi,n=Math.min(e+pi,this.words.length),a=[];for(let t=e;t<n;t++)this.learnedArr.includes(t)||a.push(t);this.learningQueue=a,console.log(this.learningQueue,e,n,this.words),this.currentIdx=0,this.revealedSet=new Set,this.deltaX=0,this.isDragging=!1,this.isAnimating=!1},saveProgress(){var n;const e=(n=this.wordBooks[this.currentBookIdx])==null?void 0:n.id;e&&Qj(e,{group:this.currentGroup,learned:this.learnedArr,percent:this.progressPercent/100})},loadProgress(){var a;this.wordBooks=Ji(),this.currentBookIdx=Zi(),this.words=kd();const e=(a=this.wordBooks[this.currentBookIdx])==null?void 0:a.id;if(!e)return;const n=hf(e);this.currentGroup=n.group||0,this.learnedArr=n.learned||[],this.finishAll=this.learnedArr.length>=this.words.length,this.groupCount=Math.ceil(this.words.length/pi),this.initLearningQueue()},goHome(){this.$router.push("/")},playAudio(){const e=this.sliderWords[1];if(!(e!=null&&e.en))return;const n=ex(e.en);this.audioPlayer&&this.audioPlayer.pause(),this.audioPlayer=new Audio(n),this.audioPlayer.play().catch(a=>{console.error("Failed to play audio:",a)})}},mounted(){this.loadProgress(),window.addEventListener("storage",this.loadProgress)},beforeDestroy(){window.removeEventListener("storage",this.loadProgress),this.audioPlayer&&(this.audioPlayer.pause(),this.audioPlayer=null)}};var f_=function(){var t,r,i;var n=this,a=n._self._c;return a("div",{staticClass:"words-page",on:{touchstart:n.onTouchStart,touchmove:n.onTouchMove,touchend:n.onTouchEnd}},[a("div",{staticClass:"words-header"},[a("span",{staticClass:"book-title",on:{click:function(s){n.showBookList=!0}}},[n._v(" "+n._s(((t=n.wordBooks[n.currentBookIdx])==null?void 0:t.name)||"词库")+" "),a("svg",{staticClass:"arrow",attrs:{width:"16",height:"16",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M6 10l6 6 6-6",stroke:"#3578e5","stroke-width":"2",fill:"none","stroke-linecap":"round"}})])])]),a("div",{staticClass:"slider-container"},n._l(n.sliderWords,function(s,o){return a("div",{key:o,staticClass:"word-card",class:{"is-animating":n.isAnimating},style:n.sliderStyle(o)},[a("div",{staticClass:"word-en"},[n._v(n._s(s.en))]),a("div",{staticClass:"word-zh",class:{mosaic:!n.isZhRevealed},on:{click:n.revealZh}},[n._v(" "+n._s(s.zh)+" ")]),a("div",{staticClass:"audio-btn",attrs:{title:"播放发音"},on:{click:n.playAudio}},[a("Icon",{style:{color:"#3578e5"},attrs:{icon:"mdi:volume-high",width:"32",height:"32"}})],1)])}),0),a("div",{staticClass:"card-actions"},[a("div",{staticClass:"action-btn pass-btn",attrs:{title:"已掌握"},on:{click:n.passWord}},[a("Icon",{style:{color:"#4caf50"},attrs:{icon:"mdi:check",width:"28",height:"28"}})],1),a("div",{staticClass:"action-btn fail-btn",attrs:{title:"再看一次"},on:{click:n.failWord}},[a("Icon",{style:{color:"#e55"},attrs:{icon:"mdi:close",width:"28",height:"28"}})],1)]),a("div",{staticClass:"progress-bar-fixed"},[n.learningQueue.length>0?a("div",{staticClass:"progress-bar-bg"},[a("div",{staticClass:"progress-bar-fg",style:{width:n.progressPercent+"%"}})]):n._e(),a("div",{staticClass:"progress-text"},[n._v(" "+n._s(n.progressText)+" ")])]),n.showBookList?a("div",{staticClass:"book-modal-mask",on:{click:function(s){if(s.target!==s.currentTarget)return null;n.showBookList=!1}}},[a("div",{staticClass:"book-modal"},[a("h3",[n._v("切换词库")]),a("ul",n._l(n.wordBooks,function(s,o){return a("li",{key:s.id,class:{active:o===n.currentBookIdx}},[a("span",[n._v(n._s(s.name))]),o!==n.currentBookIdx?a("button",{on:{click:function(c){return n.confirmSwitch(o)}}},[n._v("切换")]):a("span",{staticClass:"current-label"},[n._v("当前")])])}),0),a("button",{staticClass:"close-btn",on:{click:function(s){n.showBookList=!1}}},[n._v("取消")])])]):n._e(),n.showConfirm?a("div",{staticClass:"confirm-mask"},[a("div",{staticClass:"confirm-modal"},[a("div",[n._v("确定切换到词库「"+n._s((r=n.wordBooks[n.bookToSwitch])==null?void 0:r.name)+"」吗？")]),a("div",{staticClass:"confirm-actions"},[a("button",{on:{click:n.doSwitchBook}},[n._v("确定")]),a("button",{on:{click:function(s){n.showConfirm=!1}}},[n._v("取消")])])])]):n._e(),a("FinishModal",{attrs:{visible:n.finishAll,bookName:((i=n.wordBooks[n.currentBookIdx])==null?void 0:i.name)||""},on:{restart:n.restartLearning,returnHome:n.goHome}})],1)},p_=[],h_=_n(v_,f_,p_,!1,null,"3d3d6040");const m_=h_.exports;/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */var R0=1252,g_=[874,932,936,949,950,1250,1251,1252,1253,1254,1255,1256,1257,1258,1e4],Zc={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969},Qc=function(e){g_.indexOf(e)!=-1&&(R0=Zc[0]=e)};function j_(){Qc(1252)}var Yn=function(e){Qc(e)};function I0(){Yn(1200),j_()}function fu(e){for(var n=[],a=0,t=e.length;a<t;++a)n[a]=e.charCodeAt(a);return n}function x_(e){for(var n=[],a=0;a<e.length>>1;++a)n[a]=String.fromCharCode(e.charCodeAt(2*a)+(e.charCodeAt(2*a+1)<<8));return n.join("")}function D0(e){for(var n=[],a=0;a<e.length>>1;++a)n[a]=String.fromCharCode(e.charCodeAt(2*a+1)+(e.charCodeAt(2*a)<<8));return n.join("")}var dr=function(e){var n=e.charCodeAt(0),a=e.charCodeAt(1);return n==255&&a==254?x_(e.slice(2)):n==254&&a==255?D0(e.slice(2)):n==65279?e.slice(1):e},hi=function(n){return String.fromCharCode(n)},pu=function(n){return String.fromCharCode(n)},Yo,Ia="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function hu(e){for(var n="",a=0,t=0,r=0,i=0,s=0,o=0,c=0,l=0;l<e.length;)a=e.charCodeAt(l++),i=a>>2,t=e.charCodeAt(l++),s=(a&3)<<4|t>>4,r=e.charCodeAt(l++),o=(t&15)<<2|r>>6,c=r&63,isNaN(t)?o=c=64:isNaN(r)&&(c=64),n+=Ia.charAt(i)+Ia.charAt(s)+Ia.charAt(o)+Ia.charAt(c);return n}function In(e){var n="",a=0,t=0,r=0,i=0,s=0,o=0,c=0;e=e.replace(/[^\w\+\/\=]/g,"");for(var l=0;l<e.length;)i=Ia.indexOf(e.charAt(l++)),s=Ia.indexOf(e.charAt(l++)),a=i<<2|s>>4,n+=String.fromCharCode(a),o=Ia.indexOf(e.charAt(l++)),t=(s&15)<<4|o>>2,o!==64&&(n+=String.fromCharCode(t)),c=Ia.indexOf(e.charAt(l++)),r=(o&3)<<6|c,c!==64&&(n+=String.fromCharCode(r));return n}var _e=function(){return typeof Buffer<"u"&&typeof process<"u"&&typeof process.versions<"u"&&!!process.versions.node}(),jt=function(){if(typeof Buffer<"u"){var e=!Buffer.from;if(!e)try{Buffer.from("foo","utf8")}catch{e=!0}return e?function(n,a){return a?new Buffer(n,a):new Buffer(n)}:Buffer.from.bind(Buffer)}return function(){}}();function Ha(e){return _e?Buffer.alloc?Buffer.alloc(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}function mu(e){return _e?Buffer.allocUnsafe?Buffer.allocUnsafe(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}var Kn=function(n){return _e?jt(n,"binary"):n.split("").map(function(a){return a.charCodeAt(0)&255})};function xt(e){if(Array.isArray(e))return e.map(function(t){return String.fromCharCode(t)}).join("");for(var n=[],a=0;a<e.length;++a)n[a]=String.fromCharCode(e[a]);return n.join("")}function el(e){if(typeof ArrayBuffer>"u")throw new Error("Unsupported");if(e instanceof ArrayBuffer)return el(new Uint8Array(e));for(var n=new Array(e.length),a=0;a<e.length;++a)n[a]=e[a];return n}var Fa=_e?function(e){return Buffer.concat(e.map(function(n){return Buffer.isBuffer(n)?n:jt(n)}))}:function(e){if(typeof Uint8Array<"u"){var n=0,a=0;for(n=0;n<e.length;++n)a+=e[n].length;var t=new Uint8Array(a),r=0;for(n=0,a=0;n<e.length;a+=r,++n)if(r=e[n].length,e[n]instanceof Uint8Array)t.set(e[n],a);else{if(typeof e[n]=="string")throw"wtf";t.set(new Uint8Array(e[n]),a)}return t}return[].concat.apply([],e.map(function(i){return Array.isArray(i)?i:[].slice.call(i)}))};function y_(e){for(var n=[],a=0,t=e.length+250,r=Ha(e.length+255),i=0;i<e.length;++i){var s=e.charCodeAt(i);if(s<128)r[a++]=s;else if(s<2048)r[a++]=192|s>>6&31,r[a++]=128|s&63;else if(s>=55296&&s<57344){s=(s&1023)+64;var o=e.charCodeAt(++i)&1023;r[a++]=240|s>>8&7,r[a++]=128|s>>2&63,r[a++]=128|o>>6&15|(s&3)<<4,r[a++]=128|o&63}else r[a++]=224|s>>12&15,r[a++]=128|s>>6&63,r[a++]=128|s&63;a>t&&(n.push(r.slice(0,a)),a=0,r=Ha(65535),t=65530)}return n.push(r.slice(0,a)),Fa(n)}var bn=/\u0000/g,ur=/[\u0001-\u0006]/g;function Dt(e){for(var n="",a=e.length-1;a>=0;)n+=e.charAt(a--);return n}function Jn(e,n){var a=""+e;return a.length>=n?a:Ue("0",n-a.length)+a}function nl(e,n){var a=""+e;return a.length>=n?a:Ue(" ",n-a.length)+a}function cs(e,n){var a=""+e;return a.length>=n?a:a+Ue(" ",n-a.length)}function b_(e,n){var a=""+Math.round(e);return a.length>=n?a:Ue("0",n-a.length)+a}function w_(e,n){var a=""+e;return a.length>=n?a:Ue("0",n-a.length)+a}var gu=Math.pow(2,32);function Et(e,n){if(e>gu||e<-gu)return b_(e,n);var a=Math.round(e);return w_(a,n)}function ls(e,n){return n=n||0,e.length>=7+n&&(e.charCodeAt(n)|32)===103&&(e.charCodeAt(n+1)|32)===101&&(e.charCodeAt(n+2)|32)===110&&(e.charCodeAt(n+3)|32)===101&&(e.charCodeAt(n+4)|32)===114&&(e.charCodeAt(n+5)|32)===97&&(e.charCodeAt(n+6)|32)===108}var ju=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],Zs=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function __(e){return e||(e={}),e[0]="General",e[1]="0",e[2]="0.00",e[3]="#,##0",e[4]="#,##0.00",e[9]="0%",e[10]="0.00%",e[11]="0.00E+00",e[12]="# ?/?",e[13]="# ??/??",e[14]="m/d/yy",e[15]="d-mmm-yy",e[16]="d-mmm",e[17]="mmm-yy",e[18]="h:mm AM/PM",e[19]="h:mm:ss AM/PM",e[20]="h:mm",e[21]="h:mm:ss",e[22]="m/d/yy h:mm",e[37]="#,##0 ;(#,##0)",e[38]="#,##0 ;[Red](#,##0)",e[39]="#,##0.00;(#,##0.00)",e[40]="#,##0.00;[Red](#,##0.00)",e[45]="mm:ss",e[46]="[h]:mm:ss",e[47]="mmss.0",e[48]="##0.0E+0",e[49]="@",e[56]='"上午/下午 "hh"時"mm"分"ss"秒 "',e}var je={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"上午/下午 "hh"時"mm"分"ss"秒 "'},xu={5:37,6:38,7:39,8:40,23:0,24:0,25:0,26:0,27:14,28:14,29:14,30:14,31:14,50:14,51:14,52:14,53:14,54:14,55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,67:9,68:10,69:12,70:13,71:14,72:14,73:15,74:16,75:17,76:20,77:21,78:22,79:45,80:46,81:47,82:0},k_={5:'"$"#,##0_);\\("$"#,##0\\)',63:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',41:'_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'};function ds(e,n,a){for(var t=e<0?-1:1,r=e*t,i=0,s=1,o=0,c=1,l=0,d=0,u=Math.floor(r);l<n&&(u=Math.floor(r),o=u*s+i,d=u*l+c,!(r-u<5e-8));)r=1/(r-u),i=s,s=o,c=l,l=d;if(d>n&&(l>n?(d=c,o=i):(d=l,o=s)),!a)return[0,t*o,d];var f=Math.floor(t*o/d);return[f,t*o-f*d,d]}function Qa(e,n,a){if(e>2958465||e<0)return null;var t=e|0,r=Math.floor(86400*(e-t)),i=0,s=[],o={D:t,T:r,u:86400*(e-t)-r,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(o.u)<1e-6&&(o.u=0),n&&n.date1904&&(t+=1462),o.u>.9999&&(o.u=0,++r==86400&&(o.T=r=0,++t,++o.D)),t===60)s=a?[1317,10,29]:[1900,2,29],i=3;else if(t===0)s=a?[1317,8,29]:[1900,1,0],i=6;else{t>60&&--t;var c=new Date(1900,0,1);c.setDate(c.getDate()+t-1),s=[c.getFullYear(),c.getMonth()+1,c.getDate()],i=c.getDay(),t<60&&(i=(i+6)%7),a&&(i=F_(c,s))}return o.y=s[0],o.m=s[1],o.d=s[2],o.S=r%60,r=Math.floor(r/60),o.M=r%60,r=Math.floor(r/60),o.H=r,o.q=i,o}var P0=new Date(1899,11,31,0,0,0),E_=P0.getTime(),T_=new Date(1900,2,1,0,0,0);function N0(e,n){var a=e.getTime();return n?a-=1461*24*60*60*1e3:e>=T_&&(a+=24*60*60*1e3),(a-(E_+(e.getTimezoneOffset()-P0.getTimezoneOffset())*6e4))/(24*60*60*1e3)}function al(e){return e.indexOf(".")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,"$1")}function A_(e){return e.indexOf("E")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,"$1E").replace(/(E[+-])(\d)$/,"$10$2")}function S_(e){var n=e<0?12:11,a=al(e.toFixed(12));return a.length<=n||(a=e.toPrecision(10),a.length<=n)?a:e.toExponential(5)}function C_(e){var n=al(e.toFixed(11));return n.length>(e<0?12:11)||n==="0"||n==="-0"?e.toPrecision(6):n}function Dr(e){var n=Math.floor(Math.log(Math.abs(e))*Math.LOG10E),a;return n>=-4&&n<=-1?a=e.toPrecision(10+n):Math.abs(n)<=9?a=S_(e):n===10?a=e.toFixed(10).substr(0,12):a=C_(e),al(A_(a.toUpperCase()))}function ft(e,n){switch(typeof e){case"string":return e;case"boolean":return e?"TRUE":"FALSE";case"number":return(e|0)===e?e.toString(10):Dr(e);case"undefined":return"";case"object":if(e==null)return"";if(e instanceof Date)return qn(14,N0(e,n&&n.date1904),n)}throw new Error("unsupported value in General format: "+e)}function F_(e,n){n[0]-=581;var a=e.getDay();return e<60&&(a=(a+6)%7),a}function O_(e,n,a,t){var r="",i=0,s=0,o=a.y,c,l=0;switch(e){case 98:o=a.y+543;case 121:switch(n.length){case 1:case 2:c=o%100,l=2;break;default:c=o%1e4,l=4;break}break;case 109:switch(n.length){case 1:case 2:c=a.m,l=n.length;break;case 3:return Zs[a.m-1][1];case 5:return Zs[a.m-1][0];default:return Zs[a.m-1][2]}break;case 100:switch(n.length){case 1:case 2:c=a.d,l=n.length;break;case 3:return ju[a.q][0];default:return ju[a.q][1]}break;case 104:switch(n.length){case 1:case 2:c=1+(a.H+11)%12,l=n.length;break;default:throw"bad hour format: "+n}break;case 72:switch(n.length){case 1:case 2:c=a.H,l=n.length;break;default:throw"bad hour format: "+n}break;case 77:switch(n.length){case 1:case 2:c=a.M,l=n.length;break;default:throw"bad minute format: "+n}break;case 115:if(n!="s"&&n!="ss"&&n!=".0"&&n!=".00"&&n!=".000")throw"bad second format: "+n;return a.u===0&&(n=="s"||n=="ss")?Jn(a.S,n.length):(t>=2?s=t===3?1e3:100:s=t===1?10:1,i=Math.round(s*(a.S+a.u)),i>=60*s&&(i=0),n==="s"?i===0?"0":""+i/s:(r=Jn(i,2+t),n==="ss"?r.substr(0,2):"."+r.substr(2,n.length-1)));case 90:switch(n){case"[h]":case"[hh]":c=a.D*24+a.H;break;case"[m]":case"[mm]":c=(a.D*24+a.H)*60+a.M;break;case"[s]":case"[ss]":c=((a.D*24+a.H)*60+a.M)*60+Math.round(a.S+a.u);break;default:throw"bad abstime format: "+n}l=n.length===3?1:2;break;case 101:c=o,l=1;break}var d=l>0?Jn(c,l):"";return d}function Da(e){var n=3;if(e.length<=n)return e;for(var a=e.length%n,t=e.substr(0,a);a!=e.length;a+=n)t+=(t.length>0?",":"")+e.substr(a,n);return t}var L0=/%/g;function R_(e,n,a){var t=n.replace(L0,""),r=n.length-t.length;return ya(e,t,a*Math.pow(10,2*r))+Ue("%",r)}function I_(e,n,a){for(var t=n.length-1;n.charCodeAt(t-1)===44;)--t;return ya(e,n.substr(0,t),a/Math.pow(10,3*(n.length-t)))}function M0(e,n){var a,t=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(n==0)return"0.0E+0";if(n<0)return"-"+M0(e,-n);var r=e.indexOf(".");r===-1&&(r=e.indexOf("E"));var i=Math.floor(Math.log(n)*Math.LOG10E)%r;if(i<0&&(i+=r),a=(n/Math.pow(10,i)).toPrecision(t+1+(r+i)%r),a.indexOf("e")===-1){var s=Math.floor(Math.log(n)*Math.LOG10E);for(a.indexOf(".")===-1?a=a.charAt(0)+"."+a.substr(1)+"E+"+(s-a.length+i):a+="E+"+(s-i);a.substr(0,2)==="0.";)a=a.charAt(0)+a.substr(2,r)+"."+a.substr(2+r),a=a.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");a=a.replace(/\+-/,"-")}a=a.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(o,c,l,d){return c+l+d.substr(0,(r+i)%r)+"."+d.substr(i)+"E"})}else a=n.toExponential(t);return e.match(/E\+00$/)&&a.match(/e[+-]\d$/)&&(a=a.substr(0,a.length-1)+"0"+a.charAt(a.length-1)),e.match(/E\-/)&&a.match(/e\+/)&&(a=a.replace(/e\+/,"e")),a.replace("e","E")}var B0=/# (\?+)( ?)\/( ?)(\d+)/;function D_(e,n,a){var t=parseInt(e[4],10),r=Math.round(n*t),i=Math.floor(r/t),s=r-i*t,o=t;return a+(i===0?"":""+i)+" "+(s===0?Ue(" ",e[1].length+1+e[4].length):nl(s,e[1].length)+e[2]+"/"+e[3]+Jn(o,e[4].length))}function P_(e,n,a){return a+(n===0?"":""+n)+Ue(" ",e[1].length+2+e[4].length)}var U0=/^#*0*\.([0#]+)/,z0=/\).*[0#]/,$0=/\(###\) ###\\?-####/;function gn(e){for(var n="",a,t=0;t!=e.length;++t)switch(a=e.charCodeAt(t)){case 35:break;case 63:n+=" ";break;case 48:n+="0";break;default:n+=String.fromCharCode(a)}return n}function yu(e,n){var a=Math.pow(10,n);return""+Math.round(e*a)/a}function bu(e,n){var a=e-Math.floor(e),t=Math.pow(10,n);return n<(""+Math.round(a*t)).length?0:Math.round(a*t)}function N_(e,n){return n<(""+Math.round((e-Math.floor(e))*Math.pow(10,n))).length?1:0}function L_(e){return e<2147483647&&e>-2147483648?""+(e>=0?e|0:e-1|0):""+Math.floor(e)}function Mn(e,n,a){if(e.charCodeAt(0)===40&&!n.match(z0)){var t=n.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return a>=0?Mn("n",t,a):"("+Mn("n",t,-a)+")"}if(n.charCodeAt(n.length-1)===44)return I_(e,n,a);if(n.indexOf("%")!==-1)return R_(e,n,a);if(n.indexOf("E")!==-1)return M0(n,a);if(n.charCodeAt(0)===36)return"$"+Mn(e,n.substr(n.charAt(1)==" "?2:1),a);var r,i,s,o,c=Math.abs(a),l=a<0?"-":"";if(n.match(/^00+$/))return l+Et(c,n.length);if(n.match(/^[#?]+$/))return r=Et(a,0),r==="0"&&(r=""),r.length>n.length?r:gn(n.substr(0,n.length-r.length))+r;if(i=n.match(B0))return D_(i,c,l);if(n.match(/^#+0+$/))return l+Et(c,n.length-n.indexOf("0"));if(i=n.match(U0))return r=yu(a,i[1].length).replace(/^([^\.]+)$/,"$1."+gn(i[1])).replace(/\.$/,"."+gn(i[1])).replace(/\.(\d*)$/,function(h,p){return"."+p+Ue("0",gn(i[1]).length-p.length)}),n.indexOf("0.")!==-1?r:r.replace(/^0\./,".");if(n=n.replace(/^#+([0.])/,"$1"),i=n.match(/^(0*)\.(#*)$/))return l+yu(c,i[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,i[1].length?"0.":".");if(i=n.match(/^#{1,3},##0(\.?)$/))return l+Da(Et(c,0));if(i=n.match(/^#,##0\.([#0]*0)$/))return a<0?"-"+Mn(e,n,-a):Da(""+(Math.floor(a)+N_(a,i[1].length)))+"."+Jn(bu(a,i[1].length),i[1].length);if(i=n.match(/^#,#*,#0/))return Mn(e,n.replace(/^#,#*,/,""),a);if(i=n.match(/^([0#]+)(\\?-([0#]+))+$/))return r=Dt(Mn(e,n.replace(/[\\-]/g,""),a)),s=0,Dt(Dt(n.replace(/\\/g,"")).replace(/[0#]/g,function(h){return s<r.length?r.charAt(s++):h==="0"?"0":""}));if(n.match($0))return r=Mn(e,"##########",a),"("+r.substr(0,3)+") "+r.substr(3,3)+"-"+r.substr(6);var d="";if(i=n.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return s=Math.min(i[4].length,7),o=ds(c,Math.pow(10,s)-1,!1),r=""+l,d=ya("n",i[1],o[1]),d.charAt(d.length-1)==" "&&(d=d.substr(0,d.length-1)+"0"),r+=d+i[2]+"/"+i[3],d=cs(o[2],s),d.length<i[4].length&&(d=gn(i[4].substr(i[4].length-d.length))+d),r+=d,r;if(i=n.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return s=Math.min(Math.max(i[1].length,i[4].length),7),o=ds(c,Math.pow(10,s)-1,!0),l+(o[0]||(o[1]?"":"0"))+" "+(o[1]?nl(o[1],s)+i[2]+"/"+i[3]+cs(o[2],s):Ue(" ",2*s+1+i[2].length+i[3].length));if(i=n.match(/^[#0?]+$/))return r=Et(a,0),n.length<=r.length?r:gn(n.substr(0,n.length-r.length))+r;if(i=n.match(/^([#0?]+)\.([#0]+)$/)){r=""+a.toFixed(Math.min(i[2].length,10)).replace(/([^0])0+$/,"$1"),s=r.indexOf(".");var u=n.indexOf(".")-s,f=n.length-r.length-u;return gn(n.substr(0,u)+r+n.substr(n.length-f))}if(i=n.match(/^00,000\.([#0]*0)$/))return s=bu(a,i[1].length),a<0?"-"+Mn(e,n,-a):Da(L_(a)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(h){return"00,"+(h.length<3?Jn(0,3-h.length):"")+h})+"."+Jn(s,i[1].length);switch(n){case"###,##0.00":return Mn(e,"#,##0.00",a);case"###,###":case"##,###":case"#,###":var v=Da(Et(c,0));return v!=="0"?l+v:"";case"###,###.00":return Mn(e,"###,##0.00",a).replace(/^0\./,".");case"#,###.00":return Mn(e,"#,##0.00",a).replace(/^0\./,".")}throw new Error("unsupported format |"+n+"|")}function M_(e,n,a){for(var t=n.length-1;n.charCodeAt(t-1)===44;)--t;return ya(e,n.substr(0,t),a/Math.pow(10,3*(n.length-t)))}function B_(e,n,a){var t=n.replace(L0,""),r=n.length-t.length;return ya(e,t,a*Math.pow(10,2*r))+Ue("%",r)}function q0(e,n){var a,t=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(n==0)return"0.0E+0";if(n<0)return"-"+q0(e,-n);var r=e.indexOf(".");r===-1&&(r=e.indexOf("E"));var i=Math.floor(Math.log(n)*Math.LOG10E)%r;if(i<0&&(i+=r),a=(n/Math.pow(10,i)).toPrecision(t+1+(r+i)%r),!a.match(/[Ee]/)){var s=Math.floor(Math.log(n)*Math.LOG10E);a.indexOf(".")===-1?a=a.charAt(0)+"."+a.substr(1)+"E+"+(s-a.length+i):a+="E+"+(s-i),a=a.replace(/\+-/,"-")}a=a.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(o,c,l,d){return c+l+d.substr(0,(r+i)%r)+"."+d.substr(i)+"E"})}else a=n.toExponential(t);return e.match(/E\+00$/)&&a.match(/e[+-]\d$/)&&(a=a.substr(0,a.length-1)+"0"+a.charAt(a.length-1)),e.match(/E\-/)&&a.match(/e\+/)&&(a=a.replace(/e\+/,"e")),a.replace("e","E")}function oa(e,n,a){if(e.charCodeAt(0)===40&&!n.match(z0)){var t=n.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return a>=0?oa("n",t,a):"("+oa("n",t,-a)+")"}if(n.charCodeAt(n.length-1)===44)return M_(e,n,a);if(n.indexOf("%")!==-1)return B_(e,n,a);if(n.indexOf("E")!==-1)return q0(n,a);if(n.charCodeAt(0)===36)return"$"+oa(e,n.substr(n.charAt(1)==" "?2:1),a);var r,i,s,o,c=Math.abs(a),l=a<0?"-":"";if(n.match(/^00+$/))return l+Jn(c,n.length);if(n.match(/^[#?]+$/))return r=""+a,a===0&&(r=""),r.length>n.length?r:gn(n.substr(0,n.length-r.length))+r;if(i=n.match(B0))return P_(i,c,l);if(n.match(/^#+0+$/))return l+Jn(c,n.length-n.indexOf("0"));if(i=n.match(U0))return r=(""+a).replace(/^([^\.]+)$/,"$1."+gn(i[1])).replace(/\.$/,"."+gn(i[1])),r=r.replace(/\.(\d*)$/,function(h,p){return"."+p+Ue("0",gn(i[1]).length-p.length)}),n.indexOf("0.")!==-1?r:r.replace(/^0\./,".");if(n=n.replace(/^#+([0.])/,"$1"),i=n.match(/^(0*)\.(#*)$/))return l+(""+c).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,i[1].length?"0.":".");if(i=n.match(/^#{1,3},##0(\.?)$/))return l+Da(""+c);if(i=n.match(/^#,##0\.([#0]*0)$/))return a<0?"-"+oa(e,n,-a):Da(""+a)+"."+Ue("0",i[1].length);if(i=n.match(/^#,#*,#0/))return oa(e,n.replace(/^#,#*,/,""),a);if(i=n.match(/^([0#]+)(\\?-([0#]+))+$/))return r=Dt(oa(e,n.replace(/[\\-]/g,""),a)),s=0,Dt(Dt(n.replace(/\\/g,"")).replace(/[0#]/g,function(h){return s<r.length?r.charAt(s++):h==="0"?"0":""}));if(n.match($0))return r=oa(e,"##########",a),"("+r.substr(0,3)+") "+r.substr(3,3)+"-"+r.substr(6);var d="";if(i=n.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return s=Math.min(i[4].length,7),o=ds(c,Math.pow(10,s)-1,!1),r=""+l,d=ya("n",i[1],o[1]),d.charAt(d.length-1)==" "&&(d=d.substr(0,d.length-1)+"0"),r+=d+i[2]+"/"+i[3],d=cs(o[2],s),d.length<i[4].length&&(d=gn(i[4].substr(i[4].length-d.length))+d),r+=d,r;if(i=n.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return s=Math.min(Math.max(i[1].length,i[4].length),7),o=ds(c,Math.pow(10,s)-1,!0),l+(o[0]||(o[1]?"":"0"))+" "+(o[1]?nl(o[1],s)+i[2]+"/"+i[3]+cs(o[2],s):Ue(" ",2*s+1+i[2].length+i[3].length));if(i=n.match(/^[#0?]+$/))return r=""+a,n.length<=r.length?r:gn(n.substr(0,n.length-r.length))+r;if(i=n.match(/^([#0]+)\.([#0]+)$/)){r=""+a.toFixed(Math.min(i[2].length,10)).replace(/([^0])0+$/,"$1"),s=r.indexOf(".");var u=n.indexOf(".")-s,f=n.length-r.length-u;return gn(n.substr(0,u)+r+n.substr(n.length-f))}if(i=n.match(/^00,000\.([#0]*0)$/))return a<0?"-"+oa(e,n,-a):Da(""+a).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(h){return"00,"+(h.length<3?Jn(0,3-h.length):"")+h})+"."+Jn(0,i[1].length);switch(n){case"###,###":case"##,###":case"#,###":var v=Da(""+c);return v!=="0"?l+v:"";default:if(n.match(/\.[0#?]*$/))return oa(e,n.slice(0,n.lastIndexOf(".")),a)+gn(n.slice(n.lastIndexOf(".")))}throw new Error("unsupported format |"+n+"|")}function ya(e,n,a){return(a|0)===a?oa(e,n,a):Mn(e,n,a)}function U_(e){for(var n=[],a=!1,t=0,r=0;t<e.length;++t)switch(e.charCodeAt(t)){case 34:a=!a;break;case 95:case 42:case 92:++t;break;case 59:n[n.length]=e.substr(r,t-r),r=t+1}if(n[n.length]=e.substr(r),a===!0)throw new Error("Format |"+e+"| unterminated string ");return n}var H0=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function Vt(e){for(var n=0,a="",t="";n<e.length;)switch(a=e.charAt(n)){case"G":ls(e,n)&&(n+=6),n++;break;case'"':for(;e.charCodeAt(++n)!==34&&n<e.length;);++n;break;case"\\":n+=2;break;case"_":n+=2;break;case"@":++n;break;case"B":case"b":if(e.charAt(n+1)==="1"||e.charAt(n+1)==="2")return!0;case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0;case"A":case"a":case"上":if(e.substr(n,3).toUpperCase()==="A/P"||e.substr(n,5).toUpperCase()==="AM/PM"||e.substr(n,5).toUpperCase()==="上午/下午")return!0;++n;break;case"[":for(t=a;e.charAt(n++)!=="]"&&n<e.length;)t+=e.charAt(n);if(t.match(H0))return!0;break;case".":case"0":case"#":for(;n<e.length&&("0#?.,E+-%".indexOf(a=e.charAt(++n))>-1||a=="\\"&&e.charAt(n+1)=="-"&&"0#".indexOf(e.charAt(n+2))>-1););break;case"?":for(;e.charAt(++n)===a;);break;case"*":++n,(e.charAt(n)==" "||e.charAt(n)=="*")&&++n;break;case"(":case")":++n;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;n<e.length&&"0123456789".indexOf(e.charAt(++n))>-1;);break;case" ":++n;break;default:++n;break}return!1}function z_(e,n,a,t){for(var r=[],i="",s=0,o="",c="t",l,d,u,f="H";s<e.length;)switch(o=e.charAt(s)){case"G":if(!ls(e,s))throw new Error("unrecognized character "+o+" in "+e);r[r.length]={t:"G",v:"General"},s+=7;break;case'"':for(i="";(u=e.charCodeAt(++s))!==34&&s<e.length;)i+=String.fromCharCode(u);r[r.length]={t:"t",v:i},++s;break;case"\\":var v=e.charAt(++s),h=v==="("||v===")"?v:"t";r[r.length]={t:h,v},++s;break;case"_":r[r.length]={t:"t",v:" "},s+=2;break;case"@":r[r.length]={t:"T",v:n},++s;break;case"B":case"b":if(e.charAt(s+1)==="1"||e.charAt(s+1)==="2"){if(l==null&&(l=Qa(n,a,e.charAt(s+1)==="2"),l==null))return"";r[r.length]={t:"X",v:e.substr(s,2)},c=o,s+=2;break}case"M":case"D":case"Y":case"H":case"S":case"E":o=o.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(n<0||l==null&&(l=Qa(n,a),l==null))return"";for(i=o;++s<e.length&&e.charAt(s).toLowerCase()===o;)i+=o;o==="m"&&c.toLowerCase()==="h"&&(o="M"),o==="h"&&(o=f),r[r.length]={t:o,v:i},c=o;break;case"A":case"a":case"上":var p={t:o,v:o};if(l==null&&(l=Qa(n,a)),e.substr(s,3).toUpperCase()==="A/P"?(l!=null&&(p.v=l.H>=12?"P":"A"),p.t="T",f="h",s+=3):e.substr(s,5).toUpperCase()==="AM/PM"?(l!=null&&(p.v=l.H>=12?"PM":"AM"),p.t="T",s+=5,f="h"):e.substr(s,5).toUpperCase()==="上午/下午"?(l!=null&&(p.v=l.H>=12?"下午":"上午"),p.t="T",s+=5,f="h"):(p.t="t",++s),l==null&&p.t==="T")return"";r[r.length]=p,c=o;break;case"[":for(i=o;e.charAt(s++)!=="]"&&s<e.length;)i+=e.charAt(s);if(i.slice(-1)!=="]")throw'unterminated "[" block: |'+i+"|";if(i.match(H0)){if(l==null&&(l=Qa(n,a),l==null))return"";r[r.length]={t:"Z",v:i.toLowerCase()},c=i.charAt(1)}else i.indexOf("$")>-1&&(i=(i.match(/\$([^-\[\]]*)/)||[])[1]||"$",Vt(e)||(r[r.length]={t:"t",v:i}));break;case".":if(l!=null){for(i=o;++s<e.length&&(o=e.charAt(s))==="0";)i+=o;r[r.length]={t:"s",v:i};break}case"0":case"#":for(i=o;++s<e.length&&"0#?.,E+-%".indexOf(o=e.charAt(s))>-1;)i+=o;r[r.length]={t:"n",v:i};break;case"?":for(i=o;e.charAt(++s)===o;)i+=o;r[r.length]={t:o,v:i},c=o;break;case"*":++s,(e.charAt(s)==" "||e.charAt(s)=="*")&&++s;break;case"(":case")":r[r.length]={t:t===1?"t":o,v:o},++s;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(i=o;s<e.length&&"0123456789".indexOf(e.charAt(++s))>-1;)i+=e.charAt(s);r[r.length]={t:"D",v:i};break;case" ":r[r.length]={t:o,v:o},++s;break;case"$":r[r.length]={t:"t",v:"$"},++s;break;default:if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(o)===-1)throw new Error("unrecognized character "+o+" in "+e);r[r.length]={t:"t",v:o},++s;break}var m=0,y=0,T;for(s=r.length-1,c="t";s>=0;--s)switch(r[s].t){case"h":case"H":r[s].t=f,c="h",m<1&&(m=1);break;case"s":(T=r[s].v.match(/\.0+$/))&&(y=Math.max(y,T[0].length-1)),m<3&&(m=3);case"d":case"y":case"M":case"e":c=r[s].t;break;case"m":c==="s"&&(r[s].t="M",m<2&&(m=2));break;case"X":break;case"Z":m<1&&r[s].v.match(/[Hh]/)&&(m=1),m<2&&r[s].v.match(/[Mm]/)&&(m=2),m<3&&r[s].v.match(/[Ss]/)&&(m=3)}switch(m){case 0:break;case 1:l.u>=.5&&(l.u=0,++l.S),l.S>=60&&(l.S=0,++l.M),l.M>=60&&(l.M=0,++l.H);break;case 2:l.u>=.5&&(l.u=0,++l.S),l.S>=60&&(l.S=0,++l.M);break}var j="",R;for(s=0;s<r.length;++s)switch(r[s].t){case"t":case"T":case" ":case"D":break;case"X":r[s].v="",r[s].t=";";break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":r[s].v=O_(r[s].t.charCodeAt(0),r[s].v,l,y),r[s].t="t";break;case"n":case"?":for(R=s+1;r[R]!=null&&((o=r[R].t)==="?"||o==="D"||(o===" "||o==="t")&&r[R+1]!=null&&(r[R+1].t==="?"||r[R+1].t==="t"&&r[R+1].v==="/")||r[s].t==="("&&(o===" "||o==="n"||o===")")||o==="t"&&(r[R].v==="/"||r[R].v===" "&&r[R+1]!=null&&r[R+1].t=="?"));)r[s].v+=r[R].v,r[R]={v:"",t:";"},++R;j+=r[s].v,s=R-1;break;case"G":r[s].t="t",r[s].v=ft(n,a);break}var N="",F,_;if(j.length>0){j.charCodeAt(0)==40?(F=n<0&&j.charCodeAt(0)===45?-n:n,_=ya("n",j,F)):(F=n<0&&t>1?-n:n,_=ya("n",j,F),F<0&&r[0]&&r[0].t=="t"&&(_=_.substr(1),r[0].v="-"+r[0].v)),R=_.length-1;var M=r.length;for(s=0;s<r.length;++s)if(r[s]!=null&&r[s].t!="t"&&r[s].v.indexOf(".")>-1){M=s;break}var I=r.length;if(M===r.length&&_.indexOf("E")===-1){for(s=r.length-1;s>=0;--s)r[s]==null||"n?".indexOf(r[s].t)===-1||(R>=r[s].v.length-1?(R-=r[s].v.length,r[s].v=_.substr(R+1,r[s].v.length)):R<0?r[s].v="":(r[s].v=_.substr(0,R+1),R=-1),r[s].t="t",I=s);R>=0&&I<r.length&&(r[I].v=_.substr(0,R+1)+r[I].v)}else if(M!==r.length&&_.indexOf("E")===-1){for(R=_.indexOf(".")-1,s=M;s>=0;--s)if(!(r[s]==null||"n?".indexOf(r[s].t)===-1)){for(d=r[s].v.indexOf(".")>-1&&s===M?r[s].v.indexOf(".")-1:r[s].v.length-1,N=r[s].v.substr(d+1);d>=0;--d)R>=0&&(r[s].v.charAt(d)==="0"||r[s].v.charAt(d)==="#")&&(N=_.charAt(R--)+N);r[s].v=N,r[s].t="t",I=s}for(R>=0&&I<r.length&&(r[I].v=_.substr(0,R+1)+r[I].v),R=_.indexOf(".")+1,s=M;s<r.length;++s)if(!(r[s]==null||"n?(".indexOf(r[s].t)===-1&&s!==M)){for(d=r[s].v.indexOf(".")>-1&&s===M?r[s].v.indexOf(".")+1:0,N=r[s].v.substr(0,d);d<r[s].v.length;++d)R<_.length&&(N+=_.charAt(R++));r[s].v=N,r[s].t="t",I=s}}}for(s=0;s<r.length;++s)r[s]!=null&&"n?".indexOf(r[s].t)>-1&&(F=t>1&&n<0&&s>0&&r[s-1].v==="-"?-n:n,r[s].v=ya(r[s].t,r[s].v,F),r[s].t="t");var X="";for(s=0;s!==r.length;++s)r[s]!=null&&(X+=r[s].v);return X}var wu=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function _u(e,n){if(n==null)return!1;var a=parseFloat(n[2]);switch(n[1]){case"=":if(e==a)return!0;break;case">":if(e>a)return!0;break;case"<":if(e<a)return!0;break;case"<>":if(e!=a)return!0;break;case">=":if(e>=a)return!0;break;case"<=":if(e<=a)return!0;break}return!1}function $_(e,n){var a=U_(e),t=a.length,r=a[t-1].indexOf("@");if(t<4&&r>-1&&--t,a.length>4)throw new Error("cannot find right format for |"+a.join("|")+"|");if(typeof n!="number")return[4,a.length===4||r>-1?a[a.length-1]:"@"];switch(a.length){case 1:a=r>-1?["General","General","General",a[0]]:[a[0],a[0],a[0],"@"];break;case 2:a=r>-1?[a[0],a[0],a[0],a[1]]:[a[0],a[1],a[0],"@"];break;case 3:a=r>-1?[a[0],a[1],a[0],a[2]]:[a[0],a[1],a[2],"@"];break}var i=n>0?a[0]:n<0?a[1]:a[2];if(a[0].indexOf("[")===-1&&a[1].indexOf("[")===-1)return[t,i];if(a[0].match(/\[[=<>]/)!=null||a[1].match(/\[[=<>]/)!=null){var s=a[0].match(wu),o=a[1].match(wu);return _u(n,s)?[t,a[0]]:_u(n,o)?[t,a[1]]:[t,a[s!=null&&o!=null?2:1]]}return[t,i]}function qn(e,n,a){a==null&&(a={});var t="";switch(typeof e){case"string":e=="m/d/yy"&&a.dateNF?t=a.dateNF:t=e;break;case"number":e==14&&a.dateNF?t=a.dateNF:t=(a.table!=null?a.table:je)[e],t==null&&(t=a.table&&a.table[xu[e]]||je[xu[e]]),t==null&&(t=k_[e]||"General");break}if(ls(t,0))return ft(n,a);n instanceof Date&&(n=N0(n,a.date1904));var r=$_(t,n);if(ls(r[1]))return ft(n,a);if(n===!0)n="TRUE";else if(n===!1)n="FALSE";else if(n===""||n==null)return"";return z_(r[1],n,a,r[0])}function rt(e,n){if(typeof n!="number"){n=+n||-1;for(var a=0;a<392;++a){if(je[a]==null){n<0&&(n=a);continue}if(je[a]==e){n=a;break}}n<0&&(n=391)}return je[n]=e,n}function W0(){je=__()}var q_={5:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',23:"General",24:"General",25:"General",26:"General",27:"m/d/yy",28:"m/d/yy",29:"m/d/yy",30:"m/d/yy",31:"m/d/yy",32:"h:mm:ss",33:"h:mm:ss",34:"h:mm:ss",35:"h:mm:ss",36:"m/d/yy",41:'_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',50:"m/d/yy",51:"m/d/yy",52:"m/d/yy",53:"m/d/yy",54:"m/d/yy",55:"m/d/yy",56:"m/d/yy",57:"m/d/yy",58:"m/d/yy",59:"0",60:"0.00",61:"#,##0",62:"#,##0.00",63:'"$"#,##0_);\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',67:"0%",68:"0.00%",69:"# ?/?",70:"# ??/??",71:"m/d/yy",72:"m/d/yy",73:"d-mmm-yy",74:"d-mmm",75:"mmm-yy",76:"h:mm",77:"h:mm:ss",78:"m/d/yy h:mm",79:"mm:ss",80:"[h]:mm:ss",81:"mmss.0"},G0=/[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;function H_(e){var n=typeof e=="number"?je[e]:e;return n=n.replace(G0,"(\\d+)"),new RegExp("^"+n+"$")}function W_(e,n,a){var t=-1,r=-1,i=-1,s=-1,o=-1,c=-1;(n.match(G0)||[]).forEach(function(u,f){var v=parseInt(a[f+1],10);switch(u.toLowerCase().charAt(0)){case"y":t=v;break;case"d":i=v;break;case"h":s=v;break;case"s":c=v;break;case"m":s>=0?o=v:r=v;break}}),c>=0&&o==-1&&r>=0&&(o=r,r=-1);var l=(""+(t>=0?t:new Date().getFullYear())).slice(-4)+"-"+("00"+(r>=1?r:1)).slice(-2)+"-"+("00"+(i>=1?i:1)).slice(-2);l.length==7&&(l="0"+l),l.length==8&&(l="20"+l);var d=("00"+(s>=0?s:0)).slice(-2)+":"+("00"+(o>=0?o:0)).slice(-2)+":"+("00"+(c>=0?c:0)).slice(-2);return s==-1&&o==-1&&c==-1?l:t==-1&&r==-1&&i==-1?d:l+"T"+d}var G_=function(){var e={};e.version="1.2.0";function n(){for(var _=0,M=new Array(256),I=0;I!=256;++I)_=I,_=_&1?-306674912^_>>>1:_>>>1,_=_&1?-306674912^_>>>1:_>>>1,_=_&1?-306674912^_>>>1:_>>>1,_=_&1?-306674912^_>>>1:_>>>1,_=_&1?-306674912^_>>>1:_>>>1,_=_&1?-306674912^_>>>1:_>>>1,_=_&1?-306674912^_>>>1:_>>>1,_=_&1?-306674912^_>>>1:_>>>1,M[I]=_;return typeof Int32Array<"u"?new Int32Array(M):M}var a=n();function t(_){var M=0,I=0,X=0,W=typeof Int32Array<"u"?new Int32Array(4096):new Array(4096);for(X=0;X!=256;++X)W[X]=_[X];for(X=0;X!=256;++X)for(I=_[X],M=256+X;M<4096;M+=256)I=W[M]=I>>>8^_[I&255];var x=[];for(X=1;X!=16;++X)x[X-1]=typeof Int32Array<"u"?W.subarray(X*256,X*256+256):W.slice(X*256,X*256+256);return x}var r=t(a),i=r[0],s=r[1],o=r[2],c=r[3],l=r[4],d=r[5],u=r[6],f=r[7],v=r[8],h=r[9],p=r[10],m=r[11],y=r[12],T=r[13],j=r[14];function R(_,M){for(var I=M^-1,X=0,W=_.length;X<W;)I=I>>>8^a[(I^_.charCodeAt(X++))&255];return~I}function N(_,M){for(var I=M^-1,X=_.length-15,W=0;W<X;)I=j[_[W++]^I&255]^T[_[W++]^I>>8&255]^y[_[W++]^I>>16&255]^m[_[W++]^I>>>24]^p[_[W++]]^h[_[W++]]^v[_[W++]]^f[_[W++]]^u[_[W++]]^d[_[W++]]^l[_[W++]]^c[_[W++]]^o[_[W++]]^s[_[W++]]^i[_[W++]]^a[_[W++]];for(X+=15;W<X;)I=I>>>8^a[(I^_[W++])&255];return~I}function F(_,M){for(var I=M^-1,X=0,W=_.length,x=0,C=0;X<W;)x=_.charCodeAt(X++),x<128?I=I>>>8^a[(I^x)&255]:x<2048?(I=I>>>8^a[(I^(192|x>>6&31))&255],I=I>>>8^a[(I^(128|x&63))&255]):x>=55296&&x<57344?(x=(x&1023)+64,C=_.charCodeAt(X++)&1023,I=I>>>8^a[(I^(240|x>>8&7))&255],I=I>>>8^a[(I^(128|x>>2&63))&255],I=I>>>8^a[(I^(128|C>>6&15|(x&3)<<4))&255],I=I>>>8^a[(I^(128|C&63))&255]):(I=I>>>8^a[(I^(224|x>>12&15))&255],I=I>>>8^a[(I^(128|x>>6&63))&255],I=I>>>8^a[(I^(128|x&63))&255]);return~I}return e.table=a,e.bstr=R,e.buf=N,e.str=F,e}(),ke=function(){var n={};n.version="1.2.1";function a(g,E){for(var b=g.split("/"),w=E.split("/"),A=0,S=0,q=Math.min(b.length,w.length);A<q;++A){if(S=b[A].length-w[A].length)return S;if(b[A]!=w[A])return b[A]<w[A]?-1:1}return b.length-w.length}function t(g){if(g.charAt(g.length-1)=="/")return g.slice(0,-1).indexOf("/")===-1?g:t(g.slice(0,-1));var E=g.lastIndexOf("/");return E===-1?g:g.slice(0,E+1)}function r(g){if(g.charAt(g.length-1)=="/")return r(g.slice(0,-1));var E=g.lastIndexOf("/");return E===-1?g:g.slice(E+1)}function i(g,E){typeof E=="string"&&(E=new Date(E));var b=E.getHours();b=b<<6|E.getMinutes(),b=b<<5|E.getSeconds()>>>1,g.write_shift(2,b);var w=E.getFullYear()-1980;w=w<<4|E.getMonth()+1,w=w<<5|E.getDate(),g.write_shift(2,w)}function s(g){var E=g.read_shift(2)&65535,b=g.read_shift(2)&65535,w=new Date,A=b&31;b>>>=5;var S=b&15;b>>>=4,w.setMilliseconds(0),w.setFullYear(b+1980),w.setMonth(S-1),w.setDate(A);var q=E&31;E>>>=5;var J=E&63;return E>>>=6,w.setHours(E),w.setMinutes(J),w.setSeconds(q<<1),w}function o(g){tn(g,0);for(var E={},b=0;g.l<=g.length-4;){var w=g.read_shift(2),A=g.read_shift(2),S=g.l+A,q={};switch(w){case 21589:b=g.read_shift(1),b&1&&(q.mtime=g.read_shift(4)),A>5&&(b&2&&(q.atime=g.read_shift(4)),b&4&&(q.ctime=g.read_shift(4))),q.mtime&&(q.mt=new Date(q.mtime*1e3));break}g.l=S,E[w]=q}return E}var c;function l(){return c||(c={})}function d(g,E){if(g[0]==80&&g[1]==75)return Sl(g,E);if((g[0]|32)==109&&(g[1]|32)==105)return bh(g,E);if(g.length<512)throw new Error("CFB file size "+g.length+" < 512");var b=3,w=512,A=0,S=0,q=0,J=0,z=0,H=[],G=g.slice(0,512);tn(G,0);var ne=u(G);switch(b=ne[0],b){case 3:w=512;break;case 4:w=4096;break;case 0:if(ne[1]==0)return Sl(g,E);default:throw new Error("Major Version: Expected 3 or 4 saw "+b)}w!==512&&(G=g.slice(0,w),tn(G,28));var oe=g.slice(0,w);f(G,b);var fe=G.read_shift(4,"i");if(b===3&&fe!==0)throw new Error("# Directory Sectors: Expected 0 saw "+fe);G.l+=4,q=G.read_shift(4,"i"),G.l+=4,G.chk("00100000","Mini Stream Cutoff Size: "),J=G.read_shift(4,"i"),A=G.read_shift(4,"i"),z=G.read_shift(4,"i"),S=G.read_shift(4,"i");for(var te=-1,ue=0;ue<109&&(te=G.read_shift(4,"i"),!(te<0));++ue)H[ue]=te;var ge=v(g,w);m(z,S,ge,w,H);var Le=T(ge,q,H,w);Le[q].name="!Directory",A>0&&J!==C&&(Le[J].name="!MiniFAT"),Le[H[0]].name="!FAT",Le.fat_addrs=H,Le.ssz=w;var Me={},on=[],Zt=[],Qt=[];j(q,Le,ge,on,A,Me,Zt,J),h(Zt,Qt,on),on.shift();var er={FileIndex:Zt,FullPaths:Qt};return E&&E.raw&&(er.raw={header:oe,sectors:ge}),er}function u(g){if(g[g.l]==80&&g[g.l+1]==75)return[0,0];g.chk(U,"Header Signature: "),g.l+=16;var E=g.read_shift(2,"u");return[g.read_shift(2,"u"),E]}function f(g,E){var b=9;switch(g.l+=2,b=g.read_shift(2)){case 9:if(E!=3)throw new Error("Sector Shift: Expected 9 saw "+b);break;case 12:if(E!=4)throw new Error("Sector Shift: Expected 12 saw "+b);break;default:throw new Error("Sector Shift: Expected 9 or 12 saw "+b)}g.chk("0600","Mini Sector Shift: "),g.chk("000000000000","Reserved: ")}function v(g,E){for(var b=Math.ceil(g.length/E)-1,w=[],A=1;A<b;++A)w[A-1]=g.slice(A*E,(A+1)*E);return w[b-1]=g.slice(b*E),w}function h(g,E,b){for(var w=0,A=0,S=0,q=0,J=0,z=b.length,H=[],G=[];w<z;++w)H[w]=G[w]=w,E[w]=b[w];for(;J<G.length;++J)w=G[J],A=g[w].L,S=g[w].R,q=g[w].C,H[w]===w&&(A!==-1&&H[A]!==A&&(H[w]=H[A]),S!==-1&&H[S]!==S&&(H[w]=H[S])),q!==-1&&(H[q]=w),A!==-1&&w!=H[w]&&(H[A]=H[w],G.lastIndexOf(A)<J&&G.push(A)),S!==-1&&w!=H[w]&&(H[S]=H[w],G.lastIndexOf(S)<J&&G.push(S));for(w=1;w<z;++w)H[w]===w&&(S!==-1&&H[S]!==S?H[w]=H[S]:A!==-1&&H[A]!==A&&(H[w]=H[A]));for(w=1;w<z;++w)if(g[w].type!==0){if(J=w,J!=H[J])do J=H[J],E[w]=E[J]+"/"+E[w];while(J!==0&&H[J]!==-1&&J!=H[J]);H[w]=-1}for(E[0]+="/",w=1;w<z;++w)g[w].type!==2&&(E[w]+="/")}function p(g,E,b){for(var w=g.start,A=g.size,S=[],q=w;b&&A>0&&q>=0;)S.push(E.slice(q*x,q*x+x)),A-=x,q=Za(b,q*4);return S.length===0?Je(0):Fa(S).slice(0,g.size)}function m(g,E,b,w,A){var S=C;if(g===C){if(E!==0)throw new Error("DIFAT chain shorter than expected")}else if(g!==-1){var q=b[g],J=(w>>>2)-1;if(!q)return;for(var z=0;z<J&&(S=Za(q,z*4))!==C;++z)A.push(S);m(Za(q,w-4),E-1,b,w,A)}}function y(g,E,b,w,A){var S=[],q=[];A||(A=[]);var J=w-1,z=0,H=0;for(z=E;z>=0;){A[z]=!0,S[S.length]=z,q.push(g[z]);var G=b[Math.floor(z*4/w)];if(H=z*4&J,w<4+H)throw new Error("FAT boundary crossed: "+z+" 4 "+w);if(!g[G])break;z=Za(g[G],H)}return{nodes:S,data:Iu([q])}}function T(g,E,b,w){var A=g.length,S=[],q=[],J=[],z=[],H=w-1,G=0,ne=0,oe=0,fe=0;for(G=0;G<A;++G)if(J=[],oe=G+E,oe>=A&&(oe-=A),!q[oe]){z=[];var te=[];for(ne=oe;ne>=0;){te[ne]=!0,q[ne]=!0,J[J.length]=ne,z.push(g[ne]);var ue=b[Math.floor(ne*4/w)];if(fe=ne*4&H,w<4+fe)throw new Error("FAT boundary crossed: "+ne+" 4 "+w);if(!g[ue]||(ne=Za(g[ue],fe),te[ne]))break}S[oe]={nodes:J,data:Iu([z])}}return S}function j(g,E,b,w,A,S,q,J){for(var z=0,H=w.length?2:0,G=E[g].data,ne=0,oe=0,fe;ne<G.length;ne+=128){var te=G.slice(ne,ne+128);tn(te,64),oe=te.read_shift(2),fe=ol(te,0,oe-H),w.push(fe);var ue={name:fe,type:te.read_shift(1),color:te.read_shift(1),L:te.read_shift(4,"i"),R:te.read_shift(4,"i"),C:te.read_shift(4,"i"),clsid:te.read_shift(16),state:te.read_shift(4,"i"),start:0,size:0},ge=te.read_shift(2)+te.read_shift(2)+te.read_shift(2)+te.read_shift(2);ge!==0&&(ue.ct=R(te,te.l-8));var Le=te.read_shift(2)+te.read_shift(2)+te.read_shift(2)+te.read_shift(2);Le!==0&&(ue.mt=R(te,te.l-8)),ue.start=te.read_shift(4,"i"),ue.size=te.read_shift(4,"i"),ue.size<0&&ue.start<0&&(ue.size=ue.type=0,ue.start=C,ue.name=""),ue.type===5?(z=ue.start,A>0&&z!==C&&(E[z].name="!StreamData")):ue.size>=4096?(ue.storage="fat",E[ue.start]===void 0&&(E[ue.start]=y(b,ue.start,E.fat_addrs,E.ssz)),E[ue.start].name=ue.name,ue.content=E[ue.start].data.slice(0,ue.size)):(ue.storage="minifat",ue.size<0?ue.size=0:z!==C&&ue.start!==C&&E[z]&&(ue.content=p(ue,E[z].data,(E[J]||{}).data))),ue.content&&tn(ue.content,0),S[fe]=ue,q.push(ue)}}function R(g,E){return new Date((Sn(g,E+4)/1e7*Math.pow(2,32)+Sn(g,E)/1e7-11644473600)*1e3)}function N(g,E){return l(),d(c.readFileSync(g),E)}function F(g,E){var b=E&&E.type;switch(b||_e&&Buffer.isBuffer(g)&&(b="buffer"),b||"base64"){case"file":return N(g,E);case"base64":return d(Kn(In(g)),E);case"binary":return d(Kn(g),E)}return d(g,E)}function _(g,E){var b=E||{},w=b.root||"Root Entry";if(g.FullPaths||(g.FullPaths=[]),g.FileIndex||(g.FileIndex=[]),g.FullPaths.length!==g.FileIndex.length)throw new Error("inconsistent CFB structure");g.FullPaths.length===0&&(g.FullPaths[0]=w+"/",g.FileIndex[0]={name:w,type:5}),b.CLSID&&(g.FileIndex[0].clsid=b.CLSID),M(g)}function M(g){var E="Sh33tJ5";if(!ke.find(g,"/"+E)){var b=Je(4);b[0]=55,b[1]=b[3]=50,b[2]=54,g.FileIndex.push({name:E,type:2,content:b,size:4,L:69,R:69,C:69}),g.FullPaths.push(g.FullPaths[0]+E),I(g)}}function I(g,E){_(g);for(var b=!1,w=!1,A=g.FullPaths.length-1;A>=0;--A){var S=g.FileIndex[A];switch(S.type){case 0:w?b=!0:(g.FileIndex.pop(),g.FullPaths.pop());break;case 1:case 2:case 5:w=!0,isNaN(S.R*S.L*S.C)&&(b=!0),S.R>-1&&S.L>-1&&S.R==S.L&&(b=!0);break;default:b=!0;break}}if(!(!b&&!E)){var q=new Date(1987,1,19),J=0,z=Object.create?Object.create(null):{},H=[];for(A=0;A<g.FullPaths.length;++A)z[g.FullPaths[A]]=!0,g.FileIndex[A].type!==0&&H.push([g.FullPaths[A],g.FileIndex[A]]);for(A=0;A<H.length;++A){var G=t(H[A][0]);w=z[G],w||(H.push([G,{name:r(G).replace("/",""),type:1,clsid:Q,ct:q,mt:q,content:null}]),z[G]=!0)}for(H.sort(function(fe,te){return a(fe[0],te[0])}),g.FullPaths=[],g.FileIndex=[],A=0;A<H.length;++A)g.FullPaths[A]=H[A][0],g.FileIndex[A]=H[A][1];for(A=0;A<H.length;++A){var ne=g.FileIndex[A],oe=g.FullPaths[A];if(ne.name=r(oe).replace("/",""),ne.L=ne.R=ne.C=-(ne.color=1),ne.size=ne.content?ne.content.length:0,ne.start=0,ne.clsid=ne.clsid||Q,A===0)ne.C=H.length>1?1:-1,ne.size=0,ne.type=5;else if(oe.slice(-1)=="/"){for(J=A+1;J<H.length&&t(g.FullPaths[J])!=oe;++J);for(ne.C=J>=H.length?-1:J,J=A+1;J<H.length&&t(g.FullPaths[J])!=t(oe);++J);ne.R=J>=H.length?-1:J,ne.type=1}else t(g.FullPaths[A+1]||"")==t(oe)&&(ne.R=A+1),ne.type=2}}}function X(g,E){var b=E||{};if(b.fileType=="mad")return wh(g,b);switch(I(g),b.fileType){case"zip":return hh(g,b)}var w=function(fe){for(var te=0,ue=0,ge=0;ge<fe.FileIndex.length;++ge){var Le=fe.FileIndex[ge];if(Le.content){var Me=Le.content.length;Me>0&&(Me<4096?te+=Me+63>>6:ue+=Me+511>>9)}}for(var on=fe.FullPaths.length+3>>2,Zt=te+7>>3,Qt=te+127>>7,er=Zt+ue+on+Qt,Ya=er+127>>7,Ns=Ya<=109?0:Math.ceil((Ya-109)/127);er+Ya+Ns+127>>7>Ya;)Ns=++Ya<=109?0:Math.ceil((Ya-109)/127);var ma=[1,Ns,Ya,Qt,on,ue,te,0];return fe.FileIndex[0].size=te<<6,ma[7]=(fe.FileIndex[0].start=ma[0]+ma[1]+ma[2]+ma[3]+ma[4]+ma[5])+(ma[6]+7>>3),ma}(g),A=Je(w[7]<<9),S=0,q=0;{for(S=0;S<8;++S)A.write_shift(1,K[S]);for(S=0;S<8;++S)A.write_shift(2,0);for(A.write_shift(2,62),A.write_shift(2,3),A.write_shift(2,65534),A.write_shift(2,9),A.write_shift(2,6),S=0;S<3;++S)A.write_shift(2,0);for(A.write_shift(4,0),A.write_shift(4,w[2]),A.write_shift(4,w[0]+w[1]+w[2]+w[3]-1),A.write_shift(4,0),A.write_shift(4,4096),A.write_shift(4,w[3]?w[0]+w[1]+w[2]-1:C),A.write_shift(4,w[3]),A.write_shift(-4,w[1]?w[0]-1:C),A.write_shift(4,w[1]),S=0;S<109;++S)A.write_shift(-4,S<w[2]?w[1]+S:-1)}if(w[1])for(q=0;q<w[1];++q){for(;S<236+q*127;++S)A.write_shift(-4,S<w[2]?w[1]+S:-1);A.write_shift(-4,q===w[1]-1?C:q+1)}var J=function(fe){for(q+=fe;S<q-1;++S)A.write_shift(-4,S+1);fe&&(++S,A.write_shift(-4,C))};for(q=S=0,q+=w[1];S<q;++S)A.write_shift(-4,ee.DIFSECT);for(q+=w[2];S<q;++S)A.write_shift(-4,ee.FATSECT);J(w[3]),J(w[4]);for(var z=0,H=0,G=g.FileIndex[0];z<g.FileIndex.length;++z)G=g.FileIndex[z],G.content&&(H=G.content.length,!(H<4096)&&(G.start=q,J(H+511>>9)));for(J(w[6]+7>>3);A.l&511;)A.write_shift(-4,ee.ENDOFCHAIN);for(q=S=0,z=0;z<g.FileIndex.length;++z)G=g.FileIndex[z],G.content&&(H=G.content.length,!(!H||H>=4096)&&(G.start=q,J(H+63>>6)));for(;A.l&511;)A.write_shift(-4,ee.ENDOFCHAIN);for(S=0;S<w[4]<<2;++S){var ne=g.FullPaths[S];if(!ne||ne.length===0){for(z=0;z<17;++z)A.write_shift(4,0);for(z=0;z<3;++z)A.write_shift(4,-1);for(z=0;z<12;++z)A.write_shift(4,0);continue}G=g.FileIndex[S],S===0&&(G.start=G.size?G.start-1:C);var oe=S===0&&b.root||G.name;if(H=2*(oe.length+1),A.write_shift(64,oe,"utf16le"),A.write_shift(2,H),A.write_shift(1,G.type),A.write_shift(1,G.color),A.write_shift(-4,G.L),A.write_shift(-4,G.R),A.write_shift(-4,G.C),G.clsid)A.write_shift(16,G.clsid,"hex");else for(z=0;z<4;++z)A.write_shift(4,0);A.write_shift(4,G.state||0),A.write_shift(4,0),A.write_shift(4,0),A.write_shift(4,0),A.write_shift(4,0),A.write_shift(4,G.start),A.write_shift(4,G.size),A.write_shift(4,0)}for(S=1;S<g.FileIndex.length;++S)if(G=g.FileIndex[S],G.size>=4096)if(A.l=G.start+1<<9,_e&&Buffer.isBuffer(G.content))G.content.copy(A,A.l,0,G.size),A.l+=G.size+511&-512;else{for(z=0;z<G.size;++z)A.write_shift(1,G.content[z]);for(;z&511;++z)A.write_shift(1,0)}for(S=1;S<g.FileIndex.length;++S)if(G=g.FileIndex[S],G.size>0&&G.size<4096)if(_e&&Buffer.isBuffer(G.content))G.content.copy(A,A.l,0,G.size),A.l+=G.size+63&-64;else{for(z=0;z<G.size;++z)A.write_shift(1,G.content[z]);for(;z&63;++z)A.write_shift(1,0)}if(_e)A.l=A.length;else for(;A.l<A.length;)A.write_shift(1,0);return A}function W(g,E){var b=g.FullPaths.map(function(z){return z.toUpperCase()}),w=b.map(function(z){var H=z.split("/");return H[H.length-(z.slice(-1)=="/"?2:1)]}),A=!1;E.charCodeAt(0)===47?(A=!0,E=b[0].slice(0,-1)+E):A=E.indexOf("/")!==-1;var S=E.toUpperCase(),q=A===!0?b.indexOf(S):w.indexOf(S);if(q!==-1)return g.FileIndex[q];var J=!S.match(ur);for(S=S.replace(bn,""),J&&(S=S.replace(ur,"!")),q=0;q<b.length;++q)if((J?b[q].replace(ur,"!"):b[q]).replace(bn,"")==S||(J?w[q].replace(ur,"!"):w[q]).replace(bn,"")==S)return g.FileIndex[q];return null}var x=64,C=-2,U="d0cf11e0a1b11ae1",K=[208,207,17,224,161,177,26,225],Q="00000000000000000000000000000000",ee={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:C,FREESECT:-1,HEADER_SIGNATURE:U,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:Q,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};function ve(g,E,b){l();var w=X(g,b);c.writeFileSync(E,w)}function L(g){for(var E=new Array(g.length),b=0;b<g.length;++b)E[b]=String.fromCharCode(g[b]);return E.join("")}function ie(g,E){var b=X(g,E);switch(E&&E.type||"buffer"){case"file":return l(),c.writeFileSync(E.filename,b),b;case"binary":return typeof b=="string"?b:L(b);case"base64":return hu(typeof b=="string"?b:L(b));case"buffer":if(_e)return Buffer.isBuffer(b)?b:jt(b);case"array":return typeof b=="string"?Kn(b):b}return b}var ce;function k(g){try{var E=g.InflateRaw,b=new E;if(b._processChunk(new Uint8Array([3,0]),b._finishFlushFlag),b.bytesRead)ce=g;else throw new Error("zlib does not expose bytesRead")}catch(w){console.error("cannot use native zlib: "+(w.message||w))}}function B(g,E){if(!ce)return Tl(g,E);var b=ce.InflateRaw,w=new b,A=w._processChunk(g.slice(g.l),w._finishFlushFlag);return g.l+=w.bytesRead,A}function P(g){return ce?ce.deflateRawSync(g):ye(g)}var D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Z=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],re=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function le(g){var E=(g<<1|g<<11)&139536|(g<<5|g<<15)&558144;return(E>>16|E>>8|E)&255}for(var se=typeof Uint8Array<"u",ae=se?new Uint8Array(256):[],Te=0;Te<256;++Te)ae[Te]=le(Te);function O(g,E){var b=ae[g&255];return E<=8?b>>>8-E:(b=b<<8|ae[g>>8&255],E<=16?b>>>16-E:(b=b<<8|ae[g>>16&255],b>>>24-E))}function $e(g,E){var b=E&7,w=E>>>3;return(g[w]|(b<=6?0:g[w+1]<<8))>>>b&3}function Se(g,E){var b=E&7,w=E>>>3;return(g[w]|(b<=5?0:g[w+1]<<8))>>>b&7}function Ce(g,E){var b=E&7,w=E>>>3;return(g[w]|(b<=4?0:g[w+1]<<8))>>>b&15}function we(g,E){var b=E&7,w=E>>>3;return(g[w]|(b<=3?0:g[w+1]<<8))>>>b&31}function de(g,E){var b=E&7,w=E>>>3;return(g[w]|(b<=1?0:g[w+1]<<8))>>>b&127}function qe(g,E,b){var w=E&7,A=E>>>3,S=(1<<b)-1,q=g[A]>>>w;return b<8-w||(q|=g[A+1]<<8-w,b<16-w)||(q|=g[A+2]<<16-w,b<24-w)||(q|=g[A+3]<<24-w),q&S}function Pn(g,E,b){var w=E&7,A=E>>>3;return w<=5?g[A]|=(b&7)<<w:(g[A]|=b<<w&255,g[A+1]=(b&7)>>8-w),E+3}function ra(g,E,b){var w=E&7,A=E>>>3;return b=(b&1)<<w,g[A]|=b,E+1}function pa(g,E,b){var w=E&7,A=E>>>3;return b<<=w,g[A]|=b&255,b>>>=8,g[A+1]=b,E+8}function Yt(g,E,b){var w=E&7,A=E>>>3;return b<<=w,g[A]|=b&255,b>>>=8,g[A+1]=b&255,g[A+2]=b>>>8,E+16}function Ea(g,E){var b=g.length,w=2*b>E?2*b:E+5,A=0;if(b>=E)return g;if(_e){var S=mu(w);if(g.copy)g.copy(S);else for(;A<g.length;++A)S[A]=g[A];return S}else if(se){var q=new Uint8Array(w);if(q.set)q.set(g);else for(;A<b;++A)q[A]=g[A];return q}return g.length=w,g}function An(g){for(var E=new Array(g),b=0;b<g;++b)E[b]=0;return E}function ha(g,E,b){var w=1,A=0,S=0,q=0,J=0,z=g.length,H=se?new Uint16Array(32):An(32);for(S=0;S<32;++S)H[S]=0;for(S=z;S<b;++S)g[S]=0;z=g.length;var G=se?new Uint16Array(z):An(z);for(S=0;S<z;++S)H[A=g[S]]++,w<A&&(w=A),G[S]=0;for(H[0]=0,S=1;S<=w;++S)H[S+16]=J=J+H[S-1]<<1;for(S=0;S<z;++S)J=g[S],J!=0&&(G[S]=H[J+16]++);var ne=0;for(S=0;S<z;++S)if(ne=g[S],ne!=0)for(J=O(G[S],w)>>w-ne,q=(1<<w+4-ne)-1;q>=0;--q)E[J|q<<ne]=ne&15|S<<4;return w}var Ta=se?new Uint16Array(512):An(512),Jt=se?new Uint16Array(32):An(32);if(!se){for(var mn=0;mn<512;++mn)Ta[mn]=0;for(mn=0;mn<32;++mn)Jt[mn]=0}(function(){for(var g=[],E=0;E<32;E++)g.push(5);ha(g,Jt,32);var b=[];for(E=0;E<=143;E++)b.push(8);for(;E<=255;E++)b.push(9);for(;E<=279;E++)b.push(7);for(;E<=287;E++)b.push(8);ha(b,Ta,288)})();var ia=function(){for(var E=se?new Uint8Array(32768):[],b=0,w=0;b<re.length-1;++b)for(;w<re[b+1];++w)E[w]=b;for(;w<32768;++w)E[w]=29;var A=se?new Uint8Array(259):[];for(b=0,w=0;b<Z.length-1;++b)for(;w<Z[b+1];++w)A[w]=b;function S(J,z){for(var H=0;H<J.length;){var G=Math.min(65535,J.length-H),ne=H+G==J.length;for(z.write_shift(1,+ne),z.write_shift(2,G),z.write_shift(2,~G&65535);G-- >0;)z[z.l++]=J[H++]}return z.l}function q(J,z){for(var H=0,G=0,ne=se?new Uint16Array(32768):[];G<J.length;){var oe=Math.min(65535,J.length-G);if(oe<10){for(H=Pn(z,H,+(G+oe==J.length)),H&7&&(H+=8-(H&7)),z.l=H/8|0,z.write_shift(2,oe),z.write_shift(2,~oe&65535);oe-- >0;)z[z.l++]=J[G++];H=z.l*8;continue}H=Pn(z,H,+(G+oe==J.length)+2);for(var fe=0;oe-- >0;){var te=J[G];fe=(fe<<5^te)&32767;var ue=-1,ge=0;if((ue=ne[fe])&&(ue|=G&-32768,ue>G&&(ue-=32768),ue<G))for(;J[ue+ge]==J[G+ge]&&ge<250;)++ge;if(ge>2){te=A[ge],te<=22?H=pa(z,H,ae[te+1]>>1)-1:(pa(z,H,3),H+=5,pa(z,H,ae[te-23]>>5),H+=3);var Le=te<8?0:te-4>>2;Le>0&&(Yt(z,H,ge-Z[te]),H+=Le),te=E[G-ue],H=pa(z,H,ae[te]>>3),H-=3;var Me=te<4?0:te-2>>1;Me>0&&(Yt(z,H,G-ue-re[te]),H+=Me);for(var on=0;on<ge;++on)ne[fe]=G&32767,fe=(fe<<5^J[G])&32767,++G;oe-=ge-1}else te<=143?te=te+48:H=ra(z,H,1),H=pa(z,H,ae[te]),ne[fe]=G&32767,++G}H=pa(z,H,0)-1}return z.l=(H+7)/8|0,z.l}return function(z,H){return z.length<8?S(z,H):q(z,H)}}();function ye(g){var E=Je(50+Math.floor(g.length*1.1)),b=ia(g,E);return E.slice(0,b)}var He=se?new Uint16Array(32768):An(32768),Nn=se?new Uint16Array(32768):An(32768),Ye=se?new Uint16Array(128):An(128),Ka=1,El=1;function vh(g,E){var b=we(g,E)+257;E+=5;var w=we(g,E)+1;E+=5;var A=Ce(g,E)+4;E+=4;for(var S=0,q=se?new Uint8Array(19):An(19),J=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],z=1,H=se?new Uint8Array(8):An(8),G=se?new Uint8Array(8):An(8),ne=q.length,oe=0;oe<A;++oe)q[D[oe]]=S=Se(g,E),z<S&&(z=S),H[S]++,E+=3;var fe=0;for(H[0]=0,oe=1;oe<=z;++oe)G[oe]=fe=fe+H[oe-1]<<1;for(oe=0;oe<ne;++oe)(fe=q[oe])!=0&&(J[oe]=G[fe]++);var te=0;for(oe=0;oe<ne;++oe)if(te=q[oe],te!=0){fe=ae[J[oe]]>>8-te;for(var ue=(1<<7-te)-1;ue>=0;--ue)Ye[fe|ue<<te]=te&7|oe<<3}var ge=[];for(z=1;ge.length<b+w;)switch(fe=Ye[de(g,E)],E+=fe&7,fe>>>=3){case 16:for(S=3+$e(g,E),E+=2,fe=ge[ge.length-1];S-- >0;)ge.push(fe);break;case 17:for(S=3+Se(g,E),E+=3;S-- >0;)ge.push(0);break;case 18:for(S=11+de(g,E),E+=7;S-- >0;)ge.push(0);break;default:ge.push(fe),z<fe&&(z=fe);break}var Le=ge.slice(0,b),Me=ge.slice(b);for(oe=b;oe<286;++oe)Le[oe]=0;for(oe=w;oe<30;++oe)Me[oe]=0;return Ka=ha(Le,He,286),El=ha(Me,Nn,30),E}function fh(g,E){if(g[0]==3&&!(g[1]&3))return[Ha(E),2];for(var b=0,w=0,A=mu(E||1<<18),S=0,q=A.length>>>0,J=0,z=0;(w&1)==0;){if(w=Se(g,b),b+=3,w>>>1)w>>1==1?(J=9,z=5):(b=vh(g,b),J=Ka,z=El);else{b&7&&(b+=8-(b&7));var H=g[b>>>3]|g[(b>>>3)+1]<<8;if(b+=32,H>0)for(!E&&q<S+H&&(A=Ea(A,S+H),q=A.length);H-- >0;)A[S++]=g[b>>>3],b+=8;continue}for(;;){!E&&q<S+32767&&(A=Ea(A,S+32767),q=A.length);var G=qe(g,b,J),ne=w>>>1==1?Ta[G]:He[G];if(b+=ne&15,ne>>>=4,(ne>>>8&255)===0)A[S++]=ne;else{if(ne==256)break;ne-=257;var oe=ne<8?0:ne-4>>2;oe>5&&(oe=0);var fe=S+Z[ne];oe>0&&(fe+=qe(g,b,oe),b+=oe),G=qe(g,b,z),ne=w>>>1==1?Jt[G]:Nn[G],b+=ne&15,ne>>>=4;var te=ne<4?0:ne-2>>1,ue=re[ne];for(te>0&&(ue+=qe(g,b,te),b+=te),!E&&q<fe&&(A=Ea(A,fe+100),q=A.length);S<fe;)A[S]=A[S-ue],++S}}}return E?[A,b+7>>>3]:[A.slice(0,S),b+7>>>3]}function Tl(g,E){var b=g.slice(g.l||0),w=fh(b,E);return g.l+=w[1],w[0]}function Al(g,E){if(g)typeof console<"u"&&console.error(E);else throw new Error(E)}function Sl(g,E){var b=g;tn(b,0);var w=[],A=[],S={FileIndex:w,FullPaths:A};_(S,{root:E.root});for(var q=b.length-4;(b[q]!=80||b[q+1]!=75||b[q+2]!=5||b[q+3]!=6)&&q>=0;)--q;b.l=q+4,b.l+=4;var J=b.read_shift(2);b.l+=6;var z=b.read_shift(4);for(b.l=z,q=0;q<J;++q){b.l+=20;var H=b.read_shift(4),G=b.read_shift(4),ne=b.read_shift(2),oe=b.read_shift(2),fe=b.read_shift(2);b.l+=8;var te=b.read_shift(4),ue=o(b.slice(b.l+ne,b.l+ne+oe));b.l+=ne+oe+fe;var ge=b.l;b.l=te+4,ph(b,H,G,S,ue),b.l=ge}return S}function ph(g,E,b,w,A){g.l+=2;var S=g.read_shift(2),q=g.read_shift(2),J=s(g);if(S&8257)throw new Error("Unsupported ZIP encryption");for(var z=g.read_shift(4),H=g.read_shift(4),G=g.read_shift(4),ne=g.read_shift(2),oe=g.read_shift(2),fe="",te=0;te<ne;++te)fe+=String.fromCharCode(g[g.l++]);if(oe){var ue=o(g.slice(g.l,g.l+oe));(ue[21589]||{}).mt&&(J=ue[21589].mt),((A||{})[21589]||{}).mt&&(J=A[21589].mt)}g.l+=oe;var ge=g.slice(g.l,g.l+H);switch(q){case 8:ge=B(g,G);break;case 0:break;default:throw new Error("Unsupported ZIP Compression method "+q)}var Le=!1;S&8&&(z=g.read_shift(4),z==134695760&&(z=g.read_shift(4),Le=!0),H=g.read_shift(4),G=g.read_shift(4)),H!=E&&Al(Le,"Bad compressed size: "+E+" != "+H),G!=b&&Al(Le,"Bad uncompressed size: "+b+" != "+G),Ps(w,fe,ge,{unsafe:!0,mt:J})}function hh(g,E){var b=E||{},w=[],A=[],S=Je(1),q=b.compression?8:0,J=0,z=0,H=0,G=0,ne=0,oe=g.FullPaths[0],fe=oe,te=g.FileIndex[0],ue=[],ge=0;for(z=1;z<g.FullPaths.length;++z)if(fe=g.FullPaths[z].slice(oe.length),te=g.FileIndex[z],!(!te.size||!te.content||fe=="Sh33tJ5")){var Le=G,Me=Je(fe.length);for(H=0;H<fe.length;++H)Me.write_shift(1,fe.charCodeAt(H)&127);Me=Me.slice(0,Me.l),ue[ne]=G_.buf(te.content,0);var on=te.content;q==8&&(on=P(on)),S=Je(30),S.write_shift(4,67324752),S.write_shift(2,20),S.write_shift(2,J),S.write_shift(2,q),te.mt?i(S,te.mt):S.write_shift(4,0),S.write_shift(-4,ue[ne]),S.write_shift(4,on.length),S.write_shift(4,te.content.length),S.write_shift(2,Me.length),S.write_shift(2,0),G+=S.length,w.push(S),G+=Me.length,w.push(Me),G+=on.length,w.push(on),S=Je(46),S.write_shift(4,33639248),S.write_shift(2,0),S.write_shift(2,20),S.write_shift(2,J),S.write_shift(2,q),S.write_shift(4,0),S.write_shift(-4,ue[ne]),S.write_shift(4,on.length),S.write_shift(4,te.content.length),S.write_shift(2,Me.length),S.write_shift(2,0),S.write_shift(2,0),S.write_shift(2,0),S.write_shift(2,0),S.write_shift(4,0),S.write_shift(4,Le),ge+=S.l,A.push(S),ge+=Me.length,A.push(Me),++ne}return S=Je(22),S.write_shift(4,101010256),S.write_shift(2,0),S.write_shift(2,0),S.write_shift(2,ne),S.write_shift(2,ne),S.write_shift(4,ge),S.write_shift(4,G),S.write_shift(2,0),Fa([Fa(w),Fa(A),S])}var ai={htm:"text/html",xml:"text/xml",gif:"image/gif",jpg:"image/jpeg",png:"image/png",mso:"application/x-mso",thmx:"application/vnd.ms-officetheme",sh33tj5:"application/octet-stream"};function mh(g,E){if(g.ctype)return g.ctype;var b=g.name||"",w=b.match(/\.([^\.]+)$/);return w&&ai[w[1]]||E&&(w=(b=E).match(/[\.\\]([^\.\\])+$/),w&&ai[w[1]])?ai[w[1]]:"application/octet-stream"}function gh(g){for(var E=hu(g),b=[],w=0;w<E.length;w+=76)b.push(E.slice(w,w+76));return b.join(`\r
`)+`\r
`}function jh(g){var E=g.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(H){var G=H.charCodeAt(0).toString(16).toUpperCase();return"="+(G.length==1?"0"+G:G)});E=E.replace(/ $/mg,"=20").replace(/\t$/mg,"=09"),E.charAt(0)==`
`&&(E="=0D"+E.slice(1)),E=E.replace(/\r(?!\n)/mg,"=0D").replace(/\n\n/mg,`
=0A`).replace(/([^\r\n])\n/mg,"$1=0A");for(var b=[],w=E.split(`\r
`),A=0;A<w.length;++A){var S=w[A];if(S.length==0){b.push("");continue}for(var q=0;q<S.length;){var J=76,z=S.slice(q,q+J);z.charAt(J-1)=="="?J--:z.charAt(J-2)=="="?J-=2:z.charAt(J-3)=="="&&(J-=3),z=S.slice(q,q+J),q+=J,q<S.length&&(z+="="),b.push(z)}}return b.join(`\r
`)}function xh(g){for(var E=[],b=0;b<g.length;++b){for(var w=g[b];b<=g.length&&w.charAt(w.length-1)=="=";)w=w.slice(0,w.length-1)+g[++b];E.push(w)}for(var A=0;A<E.length;++A)E[A]=E[A].replace(/[=][0-9A-Fa-f]{2}/g,function(S){return String.fromCharCode(parseInt(S.slice(1),16))});return Kn(E.join(`\r
`))}function yh(g,E,b){for(var w="",A="",S="",q,J=0;J<10;++J){var z=E[J];if(!z||z.match(/^\s*$/))break;var H=z.match(/^(.*?):\s*([^\s].*)$/);if(H)switch(H[1].toLowerCase()){case"content-location":w=H[2].trim();break;case"content-type":S=H[2].trim();break;case"content-transfer-encoding":A=H[2].trim();break}}switch(++J,A.toLowerCase()){case"base64":q=Kn(In(E.slice(J).join("")));break;case"quoted-printable":q=xh(E.slice(J));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+A)}var G=Ps(g,w.slice(b.length),q,{unsafe:!0});S&&(G.ctype=S)}function bh(g,E){if(L(g.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var b=E&&E.root||"",w=(_e&&Buffer.isBuffer(g)?g.toString("binary"):L(g)).split(`\r
`),A=0,S="";for(A=0;A<w.length;++A)if(S=w[A],!!/^Content-Location:/i.test(S)&&(S=S.slice(S.indexOf("file")),b||(b=S.slice(0,S.lastIndexOf("/")+1)),S.slice(0,b.length)!=b))for(;b.length>0&&(b=b.slice(0,b.length-1),b=b.slice(0,b.lastIndexOf("/")+1),S.slice(0,b.length)!=b););var q=(w[1]||"").match(/boundary="(.*?)"/);if(!q)throw new Error("MAD cannot find boundary");var J="--"+(q[1]||""),z=[],H=[],G={FileIndex:z,FullPaths:H};_(G);var ne,oe=0;for(A=0;A<w.length;++A){var fe=w[A];fe!==J&&fe!==J+"--"||(oe++&&yh(G,w.slice(ne,A),b),ne=A)}return G}function wh(g,E){var b=E||{},w=b.boundary||"SheetJS";w="------="+w;for(var A=["MIME-Version: 1.0",'Content-Type: multipart/related; boundary="'+w.slice(2)+'"',"","",""],S=g.FullPaths[0],q=S,J=g.FileIndex[0],z=1;z<g.FullPaths.length;++z)if(q=g.FullPaths[z].slice(S.length),J=g.FileIndex[z],!(!J.size||!J.content||q=="Sh33tJ5")){q=q.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(ge){return"_x"+ge.charCodeAt(0).toString(16)+"_"}).replace(/[\u0080-\uFFFF]/g,function(ge){return"_u"+ge.charCodeAt(0).toString(16)+"_"});for(var H=J.content,G=_e&&Buffer.isBuffer(H)?H.toString("binary"):L(H),ne=0,oe=Math.min(1024,G.length),fe=0,te=0;te<=oe;++te)(fe=G.charCodeAt(te))>=32&&fe<128&&++ne;var ue=ne>=oe*4/5;A.push(w),A.push("Content-Location: "+(b.root||"file:///C:/SheetJS/")+q),A.push("Content-Transfer-Encoding: "+(ue?"quoted-printable":"base64")),A.push("Content-Type: "+mh(J,q)),A.push(""),A.push(ue?jh(G):gh(G))}return A.push(w+`--\r
`),A.join(`\r
`)}function _h(g){var E={};return _(E,g),E}function Ps(g,E,b,w){var A=w&&w.unsafe;A||_(g);var S=!A&&ke.find(g,E);if(!S){var q=g.FullPaths[0];E.slice(0,q.length)==q?q=E:(q.slice(-1)!="/"&&(q+="/"),q=(q+E).replace("//","/")),S={name:r(E),type:2},g.FileIndex.push(S),g.FullPaths.push(q),A||ke.utils.cfb_gc(g)}return S.content=b,S.size=b?b.length:0,w&&(w.CLSID&&(S.clsid=w.CLSID),w.mt&&(S.mt=w.mt),w.ct&&(S.ct=w.ct)),S}function kh(g,E){_(g);var b=ke.find(g,E);if(b){for(var w=0;w<g.FileIndex.length;++w)if(g.FileIndex[w]==b)return g.FileIndex.splice(w,1),g.FullPaths.splice(w,1),!0}return!1}function Eh(g,E,b){_(g);var w=ke.find(g,E);if(w){for(var A=0;A<g.FileIndex.length;++A)if(g.FileIndex[A]==w)return g.FileIndex[A].name=r(b),g.FullPaths[A]=b,!0}return!1}function Th(g){I(g,!0)}return n.find=W,n.read=F,n.parse=d,n.write=ie,n.writeFile=ve,n.utils={cfb_new:_h,cfb_add:Ps,cfb_del:kh,cfb_mov:Eh,cfb_gc:Th,ReadShift:mr,CheckField:pp,prep_blob:tn,bconcat:Fa,use_zlib:k,_deflateRaw:ye,_inflateRaw:Tl,consts:ee},n}();function V_(e){if(typeof Deno<"u")return Deno.readFileSync(e);if(typeof $<"u"&&typeof File<"u"&&typeof Folder<"u")try{var n=File(e);n.open("r"),n.encoding="binary";var a=n.read();return n.close(),a}catch(t){if(!t.message||!t.message.match(/onstruct/))throw t}throw new Error("Cannot access file "+e)}function ua(e){for(var n=Object.keys(e),a=[],t=0;t<n.length;++t)Object.prototype.hasOwnProperty.call(e,n[t])&&a.push(n[t]);return a}function tl(e){for(var n=[],a=ua(e),t=0;t!==a.length;++t)n[e[a[t]]]=a[t];return n}var us=new Date(1899,11,30,0,0,0);function wn(e,n){var a=e.getTime(),t=us.getTime()+(e.getTimezoneOffset()-us.getTimezoneOffset())*6e4;return(a-t)/(24*60*60*1e3)}var V0=new Date,X_=us.getTime()+(V0.getTimezoneOffset()-us.getTimezoneOffset())*6e4,ku=V0.getTimezoneOffset();function Os(e){var n=new Date;return n.setTime(e*24*60*60*1e3+X_),n.getTimezoneOffset()!==ku&&n.setTime(n.getTime()+(n.getTimezoneOffset()-ku)*6e4),n}function K_(e){var n=0,a=0,t=!1,r=e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);if(!r)throw new Error("|"+e+"| is not an ISO8601 Duration");for(var i=1;i!=r.length;++i)if(r[i]){switch(a=1,i>3&&(t=!0),r[i].slice(r[i].length-1)){case"Y":throw new Error("Unsupported ISO Duration Field: "+r[i].slice(r[i].length-1));case"D":a*=24;case"H":a*=60;case"M":if(t)a*=60;else throw new Error("Unsupported ISO Duration Field: M")}n+=a*parseInt(r[i],10)}return n}var Eu=new Date("2017-02-19T19:06:09.000Z"),X0=isNaN(Eu.getFullYear())?new Date("2/19/17"):Eu,Y_=X0.getFullYear()==2017;function an(e,n){var a=new Date(e);if(Y_)return n>0?a.setTime(a.getTime()+a.getTimezoneOffset()*60*1e3):n<0&&a.setTime(a.getTime()-a.getTimezoneOffset()*60*1e3),a;if(e instanceof Date)return e;if(X0.getFullYear()==1917&&!isNaN(a.getFullYear())){var t=a.getFullYear();return e.indexOf(""+t)>-1||a.setFullYear(a.getFullYear()+100),a}var r=e.match(/\d+/g)||["2017","2","19","0","0","0"],i=new Date(+r[0],+r[1]-1,+r[2],+r[3]||0,+r[4]||0,+r[5]||0);return e.indexOf("Z")>-1&&(i=new Date(i.getTime()-i.getTimezoneOffset()*60*1e3)),i}function pt(e,n){if(_e&&Buffer.isBuffer(e)){if(n){if(e[0]==255&&e[1]==254)return fr(e.slice(2).toString("utf16le"));if(e[1]==254&&e[2]==255)return fr(D0(e.slice(2).toString("binary")))}return e.toString("binary")}if(typeof TextDecoder<"u")try{if(n){if(e[0]==255&&e[1]==254)return fr(new TextDecoder("utf-16le").decode(e.slice(2)));if(e[0]==254&&e[1]==255)return fr(new TextDecoder("utf-16be").decode(e.slice(2)))}var a={"€":"","‚":"",ƒ:"","„":"","…":"","†":"","‡":"","ˆ":"","‰":"",Š:"","‹":"",Œ:"",Ž:"","‘":"","’":"","“":"","”":"","•":"","–":"","—":"","˜":"","™":"",š:"","›":"",œ:"",ž:"",Ÿ:""};return Array.isArray(e)&&(e=new Uint8Array(e)),new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g,function(i){return a[i]||i})}catch{}for(var t=[],r=0;r!=e.length;++r)t.push(String.fromCharCode(e[r]));return t.join("")}function rn(e){if(typeof JSON<"u"&&!Array.isArray(e))return JSON.parse(JSON.stringify(e));if(typeof e!="object"||e==null)return e;if(e instanceof Date)return new Date(e.getTime());var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=rn(e[a]));return n}function Ue(e,n){for(var a="";a.length<n;)a+=e;return a}function ea(e){var n=Number(e);if(!isNaN(n))return isFinite(n)?n:NaN;if(!/\d/.test(e))return n;var a=1,t=e.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){return a*=100,""});return!isNaN(n=Number(t))||(t=t.replace(/[(](.*)[)]/,function(r,i){return a=-a,i}),!isNaN(n=Number(t)))?n/a:n}var J_=["january","february","march","april","may","june","july","august","september","october","november","december"];function Mt(e){var n=new Date(e),a=new Date(NaN),t=n.getYear(),r=n.getMonth(),i=n.getDate();if(isNaN(i))return a;var s=e.toLowerCase();if(s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)){if(s=s.replace(/[^a-z]/g,"").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/,""),s.length>3&&J_.indexOf(s)==-1)return a}else if(s.match(/[a-z]/))return a;return t<0||t>8099?a:(r>0||i>1)&&t!=101?n:e.match(/[^-0-9:,\/\\]/)?a:n}var Z_=function(){var e="abacaba".split(/(:?b)/i).length==5;return function(a,t,r){if(e||typeof t=="string")return a.split(t);for(var i=a.split(t),s=[i[0]],o=1;o<i.length;++o)s.push(r),s.push(i[o]);return s}}();function K0(e){return e?e.content&&e.type?pt(e.content,!0):e.data?dr(e.data):e.asNodeBuffer&&_e?dr(e.asNodeBuffer().toString("binary")):e.asBinary?dr(e.asBinary()):e._data&&e._data.getContent?dr(pt(Array.prototype.slice.call(e._data.getContent(),0))):null:null}function Y0(e){if(!e)return null;if(e.data)return fu(e.data);if(e.asNodeBuffer&&_e)return e.asNodeBuffer();if(e._data&&e._data.getContent){var n=e._data.getContent();return typeof n=="string"?fu(n):Array.prototype.slice.call(n)}return e.content&&e.type?e.content:null}function Q_(e){return e&&e.name.slice(-4)===".bin"?Y0(e):K0(e)}function Bn(e,n){for(var a=e.FullPaths||ua(e.files),t=n.toLowerCase().replace(/[\/]/g,"\\"),r=t.replace(/\\/g,"/"),i=0;i<a.length;++i){var s=a[i].replace(/^Root Entry[\/]/,"").toLowerCase();if(t==s||r==s)return e.files?e.files[a[i]]:e.FileIndex[i]}return null}function rl(e,n){var a=Bn(e,n);if(a==null)throw new Error("Cannot find file "+n+" in zip");return a}function Xe(e,n,a){if(!a)return Q_(rl(e,n));if(!n)return null;try{return Xe(e,n)}catch{return null}}function Fn(e,n,a){if(!a)return K0(rl(e,n));if(!n)return null;try{return Fn(e,n)}catch{return null}}function e2(e,n,a){return Y0(rl(e,n))}function Tu(e){for(var n=e.FullPaths||ua(e.files),a=[],t=0;t<n.length;++t)n[t].slice(-1)!="/"&&a.push(n[t].replace(/^Root Entry[\/]/,""));return a.sort()}function n2(e,n,a){if(e.FullPaths){if(typeof a=="string"){var t;return _e?t=jt(a):t=y_(a),ke.utils.cfb_add(e,n,t)}ke.utils.cfb_add(e,n,a)}else e.file(n,a)}function J0(e,n){switch(n.type){case"base64":return ke.read(e,{type:"base64"});case"binary":return ke.read(e,{type:"binary"});case"buffer":case"array":return ke.read(e,{type:"buffer"})}throw new Error("Unrecognized type "+n.type)}function vr(e,n){if(e.charAt(0)=="/")return e.slice(1);var a=n.split("/");n.slice(-1)!="/"&&a.pop();for(var t=e.split("/");t.length!==0;){var r=t.shift();r===".."?a.pop():r!=="."&&a.push(r)}return a.join("/")}var Z0=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,a2=/([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,Au=/<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg,t2=/<[^>]*>/g,hn=Z0.match(Au)?Au:t2,r2=/<\w*:/,i2=/<(\/?)\w+:/;function pe(e,n,a){for(var t={},r=0,i=0;r!==e.length&&!((i=e.charCodeAt(r))===32||i===10||i===13);++r);if(n||(t[0]=e.slice(0,r)),r===e.length)return t;var s=e.match(a2),o=0,c="",l=0,d="",u="",f=1;if(s)for(l=0;l!=s.length;++l){for(u=s[l],i=0;i!=u.length&&u.charCodeAt(i)!==61;++i);for(d=u.slice(0,i).trim();u.charCodeAt(i+1)==32;)++i;for(f=(r=u.charCodeAt(i+1))==34||r==39?1:0,c=u.slice(i+1+f,u.length-f),o=0;o!=d.length&&d.charCodeAt(o)!==58;++o);if(o===d.length)d.indexOf("_")>0&&(d=d.slice(0,d.indexOf("_"))),t[d]=c,t[d.toLowerCase()]=c;else{var v=(o===5&&d.slice(0,5)==="xmlns"?"xmlns":"")+d.slice(o+1);if(t[v]&&d.slice(o-3,o)=="ext")continue;t[v]=c,t[v.toLowerCase()]=c}}return t}function va(e){return e.replace(i2,"<$1")}var Q0={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"},s2=tl(Q0),Ae=function(){var e=/&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig,n=/_x([\da-fA-F]{4})_/ig;return function a(t){var r=t+"",i=r.indexOf("<![CDATA[");if(i==-1)return r.replace(e,function(o,c){return Q0[o]||String.fromCharCode(parseInt(c,o.indexOf("x")>-1?16:10))||o}).replace(n,function(o,c){return String.fromCharCode(parseInt(c,16))});var s=r.indexOf("]]>");return a(r.slice(0,i))+r.slice(i+9,s)+a(r.slice(s+3))}}(),o2=/[&<>'"]/g,c2=/[\u0000-\u001f]/g;function il(e){var n=e+"";return n.replace(o2,function(a){return s2[a]}).replace(/\n/g,"<br/>").replace(c2,function(a){return"&#x"+("000"+a.charCodeAt(0).toString(16)).slice(-4)+";"})}var Su=function(){var e=/&#(\d+);/g;function n(a,t){return String.fromCharCode(parseInt(t,10))}return function(t){return t.replace(e,n)}}();function Pe(e){switch(e){case 1:case!0:case"1":case"true":case"TRUE":return!0;default:return!1}}function Qs(e){for(var n="",a=0,t=0,r=0,i=0,s=0,o=0;a<e.length;){if(t=e.charCodeAt(a++),t<128){n+=String.fromCharCode(t);continue}if(r=e.charCodeAt(a++),t>191&&t<224){s=(t&31)<<6,s|=r&63,n+=String.fromCharCode(s);continue}if(i=e.charCodeAt(a++),t<240){n+=String.fromCharCode((t&15)<<12|(r&63)<<6|i&63);continue}s=e.charCodeAt(a++),o=((t&7)<<18|(r&63)<<12|(i&63)<<6|s&63)-65536,n+=String.fromCharCode(55296+(o>>>10&1023)),n+=String.fromCharCode(56320+(o&1023))}return n}function Cu(e){var n=Ha(2*e.length),a,t,r=1,i=0,s=0,o;for(t=0;t<e.length;t+=r)r=1,(o=e.charCodeAt(t))<128?a=o:o<224?(a=(o&31)*64+(e.charCodeAt(t+1)&63),r=2):o<240?(a=(o&15)*4096+(e.charCodeAt(t+1)&63)*64+(e.charCodeAt(t+2)&63),r=3):(r=4,a=(o&7)*262144+(e.charCodeAt(t+1)&63)*4096+(e.charCodeAt(t+2)&63)*64+(e.charCodeAt(t+3)&63),a-=65536,s=55296+(a>>>10&1023),a=56320+(a&1023)),s!==0&&(n[i++]=s&255,n[i++]=s>>>8,s=0),n[i++]=a%256,n[i++]=a>>>8;return n.slice(0,i).toString("ucs2")}function Fu(e){return jt(e,"binary").toString("utf8")}var mi="foo bar bazâð£",Oe=_e&&(Fu(mi)==Qs(mi)&&Fu||Cu(mi)==Qs(mi)&&Cu)||Qs,fr=_e?function(e){return jt(e,"utf8").toString("binary")}:function(e){for(var n=[],a=0,t=0,r=0;a<e.length;)switch(t=e.charCodeAt(a++),!0){case t<128:n.push(String.fromCharCode(t));break;case t<2048:n.push(String.fromCharCode(192+(t>>6))),n.push(String.fromCharCode(128+(t&63)));break;case(t>=55296&&t<57344):t-=55296,r=e.charCodeAt(a++)-56320+(t<<10),n.push(String.fromCharCode(240+(r>>18&7))),n.push(String.fromCharCode(144+(r>>12&63))),n.push(String.fromCharCode(128+(r>>6&63))),n.push(String.fromCharCode(128+(r&63)));break;default:n.push(String.fromCharCode(224+(t>>12))),n.push(String.fromCharCode(128+(t>>6&63))),n.push(String.fromCharCode(128+(t&63)))}return n.join("")},Pr=function(){var e={};return function(a,t){var r=a+"|"+(t||"");return e[r]?e[r]:e[r]=new RegExp("<(?:\\w+:)?"+a+'(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?'+a+">",t||"")}}(),ep=function(){var e=[["nbsp"," "],["middot","·"],["quot",'"'],["apos","'"],["gt",">"],["lt","<"],["amp","&"]].map(function(n){return[new RegExp("&"+n[0]+";","ig"),n[1]]});return function(a){for(var t=a.replace(/^[\t\n\r ]+/,"").replace(/[\t\n\r ]+$/,"").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/[\t\n\r ]+/g," ").replace(/<\s*[bB][rR]\s*\/?>/g,`
`).replace(/<[^>]*>/g,""),r=0;r<e.length;++r)t=t.replace(e[r][0],e[r][1]);return t}}(),l2=function(){var e={};return function(a){return e[a]!==void 0?e[a]:e[a]=new RegExp("<(?:vt:)?"+a+">([\\s\\S]*?)</(?:vt:)?"+a+">","g")}}(),d2=/<\/?(?:vt:)?variant>/g,u2=/<(?:vt:)([^>]*)>([\s\S]*)</;function Ou(e,n){var a=pe(e),t=e.match(l2(a.baseType))||[],r=[];if(t.length!=a.size){if(n.WTF)throw new Error("unexpected vector length "+t.length+" != "+a.size);return r}return t.forEach(function(i){var s=i.replace(d2,"").match(u2);s&&r.push({v:Oe(s[2]),t:s[1]})}),r}var v2=/(^\s|\s$|\n)/;function f2(e){return ua(e).map(function(n){return" "+n+'="'+e[n]+'"'}).join("")}function p2(e,n,a){return"<"+e+(a!=null?f2(a):"")+(n!=null?(n.match(v2)?' xml:space="preserve"':"")+">"+n+"</"+e:"/")+">"}function sl(e){if(_e&&Buffer.isBuffer(e))return e.toString("utf8");if(typeof e=="string")return e;if(typeof Uint8Array<"u"&&e instanceof Uint8Array)return Oe(xt(el(e)));throw new Error("Bad input format: expected Buffer or string")}var Nr=/<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg,h2={CT:"http://schemas.openxmlformats.org/package/2006/content-types"},m2=["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"];function g2(e,n){for(var a=1-2*(e[n+7]>>>7),t=((e[n+7]&127)<<4)+(e[n+6]>>>4&15),r=e[n+6]&15,i=5;i>=0;--i)r=r*256+e[n+i];return t==2047?r==0?a*(1/0):NaN:(t==0?t=-1022:(t-=1023,r+=Math.pow(2,52)),a*Math.pow(2,t-52)*r)}function j2(e,n,a){var t=(n<0||1/n==-1/0?1:0)<<7,r=0,i=0,s=t?-n:n;isFinite(s)?s==0?r=i=0:(r=Math.floor(Math.log(s)/Math.LN2),i=s*Math.pow(2,52-r),r<=-1023&&(!isFinite(i)||i<Math.pow(2,52))?r=-1022:(i-=Math.pow(2,52),r+=1023)):(r=2047,i=isNaN(n)?26985:0);for(var o=0;o<=5;++o,i/=256)e[a+o]=i&255;e[a+6]=(r&15)<<4|i&15,e[a+7]=r>>4|t}var Ru=function(e){for(var n=[],a=10240,t=0;t<e[0].length;++t)if(e[0][t])for(var r=0,i=e[0][t].length;r<i;r+=a)n.push.apply(n,e[0][t].slice(r,r+a));return n},Iu=_e?function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0].map(function(n){return Buffer.isBuffer(n)?n:jt(n)})):Ru(e)}:Ru,Du=function(e,n,a){for(var t=[],r=n;r<a;r+=2)t.push(String.fromCharCode(xa(e,r)));return t.join("").replace(bn,"")},ol=_e?function(e,n,a){return Buffer.isBuffer(e)?e.toString("utf16le",n,a).replace(bn,""):Du(e,n,a)}:Du,Pu=function(e,n,a){for(var t=[],r=n;r<n+a;++r)t.push(("0"+e[r].toString(16)).slice(-2));return t.join("")},np=_e?function(e,n,a){return Buffer.isBuffer(e)?e.toString("hex",n,n+a):Pu(e,n,a)}:Pu,Nu=function(e,n,a){for(var t=[],r=n;r<a;r++)t.push(String.fromCharCode(At(e,r)));return t.join("")},Yr=_e?function(n,a,t){return Buffer.isBuffer(n)?n.toString("utf8",a,t):Nu(n,a,t)}:Nu,ap=function(e,n){var a=Sn(e,n);return a>0?Yr(e,n+4,n+4+a-1):""},tp=ap,rp=function(e,n){var a=Sn(e,n);return a>0?Yr(e,n+4,n+4+a-1):""},ip=rp,sp=function(e,n){var a=2*Sn(e,n);return a>0?Yr(e,n+4,n+4+a-1):""},op=sp,cp=function(n,a){var t=Sn(n,a);return t>0?ol(n,a+4,a+4+t):""},lp=cp,dp=function(e,n){var a=Sn(e,n);return a>0?Yr(e,n+4,n+4+a):""},up=dp,vp=function(e,n){return g2(e,n)},vs=vp,fp=function(n){return Array.isArray(n)||typeof Uint8Array<"u"&&n instanceof Uint8Array};_e&&(tp=function(n,a){if(!Buffer.isBuffer(n))return ap(n,a);var t=n.readUInt32LE(a);return t>0?n.toString("utf8",a+4,a+4+t-1):""},ip=function(n,a){if(!Buffer.isBuffer(n))return rp(n,a);var t=n.readUInt32LE(a);return t>0?n.toString("utf8",a+4,a+4+t-1):""},op=function(n,a){if(!Buffer.isBuffer(n))return sp(n,a);var t=2*n.readUInt32LE(a);return n.toString("utf16le",a+4,a+4+t-1)},lp=function(n,a){if(!Buffer.isBuffer(n))return cp(n,a);var t=n.readUInt32LE(a);return n.toString("utf16le",a+4,a+4+t)},up=function(n,a){if(!Buffer.isBuffer(n))return dp(n,a);var t=n.readUInt32LE(a);return n.toString("utf8",a+4,a+4+t)},vs=function(n,a){return Buffer.isBuffer(n)?n.readDoubleLE(a):vp(n,a)},fp=function(n){return Buffer.isBuffer(n)||Array.isArray(n)||typeof Uint8Array<"u"&&n instanceof Uint8Array});var At=function(e,n){return e[n]},xa=function(e,n){return e[n+1]*256+e[n]},x2=function(e,n){var a=e[n+1]*256+e[n];return a<32768?a:(65535-a+1)*-1},Sn=function(e,n){return e[n+3]*(1<<24)+(e[n+2]<<16)+(e[n+1]<<8)+e[n]},Za=function(e,n){return e[n+3]<<24|e[n+2]<<16|e[n+1]<<8|e[n]},y2=function(e,n){return e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3]};function mr(e,n){var a="",t,r,i=[],s,o,c,l;switch(n){case"dbcs":if(l=this.l,_e&&Buffer.isBuffer(this))a=this.slice(this.l,this.l+2*e).toString("utf16le");else for(c=0;c<e;++c)a+=String.fromCharCode(xa(this,l)),l+=2;e*=2;break;case"utf8":a=Yr(this,this.l,this.l+e);break;case"utf16le":e*=2,a=ol(this,this.l,this.l+e);break;case"wstr":return mr.call(this,e,"dbcs");case"lpstr-ansi":a=tp(this,this.l),e=4+Sn(this,this.l);break;case"lpstr-cp":a=ip(this,this.l),e=4+Sn(this,this.l);break;case"lpwstr":a=op(this,this.l),e=4+2*Sn(this,this.l);break;case"lpp4":e=4+Sn(this,this.l),a=lp(this,this.l),e&2&&(e+=2);break;case"8lpp4":e=4+Sn(this,this.l),a=up(this,this.l),e&3&&(e+=4-(e&3));break;case"cstr":for(e=0,a="";(s=At(this,this.l+e++))!==0;)i.push(hi(s));a=i.join("");break;case"_wstr":for(e=0,a="";(s=xa(this,this.l+e))!==0;)i.push(hi(s)),e+=2;e+=2,a=i.join("");break;case"dbcs-cont":for(a="",l=this.l,c=0;c<e;++c){if(this.lens&&this.lens.indexOf(l)!==-1)return s=At(this,l),this.l=l+1,o=mr.call(this,e-c,s?"dbcs-cont":"sbcs-cont"),i.join("")+o;i.push(hi(xa(this,l))),l+=2}a=i.join(""),e*=2;break;case"cpstr":case"sbcs-cont":for(a="",l=this.l,c=0;c!=e;++c){if(this.lens&&this.lens.indexOf(l)!==-1)return s=At(this,l),this.l=l+1,o=mr.call(this,e-c,s?"dbcs-cont":"sbcs-cont"),i.join("")+o;i.push(hi(At(this,l))),l+=1}a=i.join("");break;default:switch(e){case 1:return t=At(this,this.l),this.l++,t;case 2:return t=(n==="i"?x2:xa)(this,this.l),this.l+=2,t;case 4:case-4:return n==="i"||(this[this.l+3]&128)===0?(t=(e>0?Za:y2)(this,this.l),this.l+=4,t):(r=Sn(this,this.l),this.l+=4,r);case 8:case-8:if(n==="f")return e==8?r=vs(this,this.l):r=vs([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,r;e=8;case 16:a=np(this,this.l,e);break}}return this.l+=e,a}var b2=function(e,n,a){e[a]=n&255,e[a+1]=n>>>8&255,e[a+2]=n>>>16&255,e[a+3]=n>>>24&255},w2=function(e,n,a){e[a]=n&255,e[a+1]=n>>8&255,e[a+2]=n>>16&255,e[a+3]=n>>24&255},_2=function(e,n,a){e[a]=n&255,e[a+1]=n>>>8&255};function k2(e,n,a){var t=0,r=0;if(a==="dbcs"){for(r=0;r!=n.length;++r)_2(this,n.charCodeAt(r),this.l+2*r);t=2*n.length}else if(a==="sbcs"){for(n=n.replace(/[^\x00-\x7F]/g,"_"),r=0;r!=n.length;++r)this[this.l+r]=n.charCodeAt(r)&255;t=n.length}else if(a==="hex"){for(;r<e;++r)this[this.l++]=parseInt(n.slice(2*r,2*r+2),16)||0;return this}else if(a==="utf16le"){var i=Math.min(this.l+e,this.length);for(r=0;r<Math.min(n.length,e);++r){var s=n.charCodeAt(r);this[this.l++]=s&255,this[this.l++]=s>>8}for(;this.l<i;)this[this.l++]=0;return this}else switch(e){case 1:t=1,this[this.l]=n&255;break;case 2:t=2,this[this.l]=n&255,n>>>=8,this[this.l+1]=n&255;break;case 3:t=3,this[this.l]=n&255,n>>>=8,this[this.l+1]=n&255,n>>>=8,this[this.l+2]=n&255;break;case 4:t=4,b2(this,n,this.l);break;case 8:if(t=8,a==="f"){j2(this,n,this.l);break}case 16:break;case-4:t=4,w2(this,n,this.l);break}return this.l+=t,this}function pp(e,n){var a=np(this,this.l,e.length>>1);if(a!==e)throw new Error(n+"Expected "+e+" saw "+a);this.l+=e.length>>1}function tn(e,n){e.l=n,e.read_shift=mr,e.chk=pp,e.write_shift=k2}function pn(e,n){e.l+=n}function Je(e){var n=Ha(e);return tn(n,0),n}function ka(e,n,a){if(e){var t,r,i;tn(e,e.l||0);for(var s=e.length,o=0,c=0;e.l<s;){o=e.read_shift(1),o&128&&(o=(o&127)+((e.read_shift(1)&127)<<7));var l=js[o]||js[65535];for(t=e.read_shift(1),i=t&127,r=1;r<4&&t&128;++r)i+=((t=e.read_shift(1))&127)<<7*r;c=e.l+i;var d=l.f&&l.f(e,i,a);if(e.l=c,n(d,l,o))return}}}function Jo(){var e=[],n=_e?256:2048,a=function(l){var d=Je(l);return tn(d,0),d},t=a(n),r=function(){t&&(t.length>t.l&&(t=t.slice(0,t.l),t.l=t.length),t.length>0&&e.push(t),t=null)},i=function(l){return t&&l<t.length-t.l?t:(r(),t=a(Math.max(l+1,n)))},s=function(){return r(),Fa(e)},o=function(l){r(),t=l,t.l==null&&(t.l=t.length),i(n)};return{next:i,push:o,end:s,_bufs:e}}function gr(e,n,a){var t=rn(e);if(n.s?(t.cRel&&(t.c+=n.s.c),t.rRel&&(t.r+=n.s.r)):(t.cRel&&(t.c+=n.c),t.rRel&&(t.r+=n.r)),!a||a.biff<12){for(;t.c>=256;)t.c-=256;for(;t.r>=65536;)t.r-=65536}return t}function Lu(e,n,a){var t=rn(e);return t.s=gr(t.s,n.s,a),t.e=gr(t.e,n.s,a),t}function jr(e,n){if(e.cRel&&e.c<0)for(e=rn(e);e.c<0;)e.c+=n>8?16384:256;if(e.rRel&&e.r<0)for(e=rn(e);e.r<0;)e.r+=n>8?1048576:n>5?65536:16384;var a=me(e);return!e.cRel&&e.cRel!=null&&(a=A2(a)),!e.rRel&&e.rRel!=null&&(a=E2(a)),a}function eo(e,n){return e.s.r==0&&!e.s.rRel&&e.e.r==(n.biff>=12?1048575:n.biff>=8?65536:16384)&&!e.e.rRel?(e.s.cRel?"":"$")+Ze(e.s.c)+":"+(e.e.cRel?"":"$")+Ze(e.e.c):e.s.c==0&&!e.s.cRel&&e.e.c==(n.biff>=12?16383:255)&&!e.e.cRel?(e.s.rRel?"":"$")+sn(e.s.r)+":"+(e.e.rRel?"":"$")+sn(e.e.r):jr(e.s,n.biff)+":"+jr(e.e,n.biff)}function cl(e){return parseInt(T2(e),10)-1}function sn(e){return""+(e+1)}function E2(e){return e.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}function T2(e){return e.replace(/\$(\d+)$/,"$1")}function ll(e){for(var n=S2(e),a=0,t=0;t!==n.length;++t)a=26*a+n.charCodeAt(t)-64;return a-1}function Ze(e){if(e<0)throw new Error("invalid column "+e);var n="";for(++e;e;e=Math.floor((e-1)/26))n=String.fromCharCode((e-1)%26+65)+n;return n}function A2(e){return e.replace(/^([A-Z])/,"$$$1")}function S2(e){return e.replace(/^\$([A-Z])/,"$1")}function C2(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function xn(e){for(var n=0,a=0,t=0;t<e.length;++t){var r=e.charCodeAt(t);r>=48&&r<=57?n=10*n+(r-48):r>=65&&r<=90&&(a=26*a+(r-64))}return{c:a-1,r:n-1}}function me(e){for(var n=e.c+1,a="";n;n=(n-1)/26|0)a=String.fromCharCode((n-1)%26+65)+a;return a+(e.r+1)}function Xt(e){var n=e.indexOf(":");return n==-1?{s:xn(e),e:xn(e)}:{s:xn(e.slice(0,n)),e:xn(e.slice(n+1))}}function Ee(e,n){return typeof n>"u"||typeof n=="number"?Ee(e.s,e.e):(typeof e!="string"&&(e=me(e)),typeof n!="string"&&(n=me(n)),e==n?e:e+":"+n)}function ze(e){var n={s:{c:0,r:0},e:{c:0,r:0}},a=0,t=0,r=0,i=e.length;for(a=0;t<i&&!((r=e.charCodeAt(t)-64)<1||r>26);++t)a=26*a+r;for(n.s.c=--a,a=0;t<i&&!((r=e.charCodeAt(t)-48)<0||r>9);++t)a=10*a+r;if(n.s.r=--a,t===i||r!=10)return n.e.c=n.s.c,n.e.r=n.s.r,n;for(++t,a=0;t!=i&&!((r=e.charCodeAt(t)-64)<1||r>26);++t)a=26*a+r;for(n.e.c=--a,a=0;t!=i&&!((r=e.charCodeAt(t)-48)<0||r>9);++t)a=10*a+r;return n.e.r=--a,n}function Mu(e,n){var a=e.t=="d"&&n instanceof Date;if(e.z!=null)try{return e.w=qn(e.z,a?wn(n):n)}catch{}try{return e.w=qn((e.XF||{}).numFmtId||(a?14:0),a?wn(n):n)}catch{return""+n}}function _a(e,n,a){return e==null||e.t==null||e.t=="z"?"":e.w!==void 0?e.w:(e.t=="d"&&!e.z&&a&&a.dateNF&&(e.z=a.dateNF),e.t=="e"?wt[e.v]||e.v:n==null?Mu(e,e.v):Mu(e,n))}function Xa(e,n){var a=n&&n.sheet?n.sheet:"Sheet1",t={};return t[a]=e,{SheetNames:[a],Sheets:t}}function hp(e,n,a){var t=a||{},r=e?Array.isArray(e):t.dense,i=e||(r?[]:{}),s=0,o=0;if(i&&t.origin!=null){if(typeof t.origin=="number")s=t.origin;else{var c=typeof t.origin=="string"?xn(t.origin):t.origin;s=c.r,o=c.c}i["!ref"]||(i["!ref"]="A1:A1")}var l={s:{c:1e7,r:1e7},e:{c:0,r:0}};if(i["!ref"]){var d=ze(i["!ref"]);l.s.c=d.s.c,l.s.r=d.s.r,l.e.c=Math.max(l.e.c,d.e.c),l.e.r=Math.max(l.e.r,d.e.r),s==-1&&(l.e.r=s=d.e.r+1)}for(var u=0;u!=n.length;++u)if(n[u]){if(!Array.isArray(n[u]))throw new Error("aoa_to_sheet expects an array of arrays");for(var f=0;f!=n[u].length;++f)if(!(typeof n[u][f]>"u")){var v={v:n[u][f]},h=s+u,p=o+f;if(l.s.r>h&&(l.s.r=h),l.s.c>p&&(l.s.c=p),l.e.r<h&&(l.e.r=h),l.e.c<p&&(l.e.c=p),n[u][f]&&typeof n[u][f]=="object"&&!Array.isArray(n[u][f])&&!(n[u][f]instanceof Date))v=n[u][f];else if(Array.isArray(v.v)&&(v.f=n[u][f][1],v.v=v.v[0]),v.v===null)if(v.f)v.t="n";else if(t.nullError)v.t="e",v.v=0;else if(t.sheetStubs)v.t="z";else continue;else typeof v.v=="number"?v.t="n":typeof v.v=="boolean"?v.t="b":v.v instanceof Date?(v.z=t.dateNF||je[14],t.cellDates?(v.t="d",v.w=qn(v.z,wn(v.v))):(v.t="n",v.v=wn(v.v),v.w=qn(v.z,v.v))):v.t="s";if(r)i[h]||(i[h]=[]),i[h][p]&&i[h][p].z&&(v.z=i[h][p].z),i[h][p]=v;else{var m=me({c:p,r:h});i[m]&&i[m].z&&(v.z=i[m].z),i[m]=v}}}return l.s.c<1e7&&(i["!ref"]=Ee(l)),i}function Kt(e,n){return hp(null,e,n)}function F2(e){return e.read_shift(4,"i")}function vn(e){var n=e.read_shift(4);return n===0?"":e.read_shift(n,"dbcs")}function O2(e){return{ich:e.read_shift(2),ifnt:e.read_shift(2)}}function dl(e,n){var a=e.l,t=e.read_shift(1),r=vn(e),i=[],s={t:r,h:r};if((t&1)!==0){for(var o=e.read_shift(4),c=0;c!=o;++c)i.push(O2(e));s.r=i}else s.r=[{ich:0,ifnt:0}];return e.l=a+n,s}var R2=dl;function Hn(e){var n=e.read_shift(4),a=e.read_shift(2);return a+=e.read_shift(1)<<16,e.l++,{c:n,iStyleRef:a}}function yt(e){var n=e.read_shift(2);return n+=e.read_shift(1)<<16,e.l++,{c:-1,iStyleRef:n}}var I2=vn;function ul(e){var n=e.read_shift(4);return n===0||n===4294967295?"":e.read_shift(n,"dbcs")}var D2=vn,Zo=ul;function vl(e){var n=e.slice(e.l,e.l+4),a=n[0]&1,t=n[0]&2;e.l+=4;var r=t===0?vs([0,0,0,0,n[0]&252,n[1],n[2],n[3]],0):Za(n,0)>>2;return a?r/100:r}function mp(e){var n={s:{},e:{}};return n.s.r=e.read_shift(4),n.e.r=e.read_shift(4),n.s.c=e.read_shift(4),n.e.c=e.read_shift(4),n}var bt=mp;function dn(e){if(e.length-e.l<8)throw"XLS Xnum Buffer underflow";return e.read_shift(8,"f")}function P2(e){var n={},a=e.read_shift(1),t=a>>>1,r=e.read_shift(1),i=e.read_shift(2,"i"),s=e.read_shift(1),o=e.read_shift(1),c=e.read_shift(1);switch(e.l++,t){case 0:n.auto=1;break;case 1:n.index=r;var l=it[r];l&&(n.rgb=Mr(l));break;case 2:n.rgb=Mr([s,o,c]);break;case 3:n.theme=r;break}return i!=0&&(n.tint=i>0?i/32767:i/32768),n}function N2(e){var n=e.read_shift(1);e.l++;var a={fBold:n&1,fItalic:n&2,fUnderline:n&4,fStrikeout:n&8,fOutline:n&16,fShadow:n&32,fCondense:n&64,fExtend:n&128};return a}function gp(e,n){var a={2:"BITMAP",3:"METAFILEPICT",8:"DIB",14:"ENHMETAFILE"},t=e.read_shift(4);switch(t){case 0:return"";case 4294967295:case 4294967294:return a[e.read_shift(4)]||""}if(t>400)throw new Error("Unsupported Clipboard: "+t.toString(16));return e.l-=4,e.read_shift(0,n==1?"lpstr":"lpwstr")}function L2(e){return gp(e,1)}function M2(e){return gp(e,2)}var fl=2,En=3,gi=11,Bu=12,fs=19,ji=64,B2=65,U2=71,z2=4108,$2=4126,en=80,jp=81,q2=[en,jp],H2={1:{n:"CodePage",t:fl},2:{n:"Category",t:en},3:{n:"PresentationFormat",t:en},4:{n:"ByteCount",t:En},5:{n:"LineCount",t:En},6:{n:"ParagraphCount",t:En},7:{n:"SlideCount",t:En},8:{n:"NoteCount",t:En},9:{n:"HiddenCount",t:En},10:{n:"MultimediaClipCount",t:En},11:{n:"ScaleCrop",t:gi},12:{n:"HeadingPairs",t:z2},13:{n:"TitlesOfParts",t:$2},14:{n:"Manager",t:en},15:{n:"Company",t:en},16:{n:"LinksUpToDate",t:gi},17:{n:"CharacterCount",t:En},19:{n:"SharedDoc",t:gi},22:{n:"HyperlinksChanged",t:gi},23:{n:"AppVersion",t:En,p:"version"},24:{n:"DigSig",t:B2},26:{n:"ContentType",t:en},27:{n:"ContentStatus",t:en},28:{n:"Language",t:en},29:{n:"Version",t:en},255:{},2147483648:{n:"Locale",t:fs},2147483651:{n:"Behavior",t:fs},1919054434:{}},W2={1:{n:"CodePage",t:fl},2:{n:"Title",t:en},3:{n:"Subject",t:en},4:{n:"Author",t:en},5:{n:"Keywords",t:en},6:{n:"Comments",t:en},7:{n:"Template",t:en},8:{n:"LastAuthor",t:en},9:{n:"RevNumber",t:en},10:{n:"EditTime",t:ji},11:{n:"LastPrinted",t:ji},12:{n:"CreatedDate",t:ji},13:{n:"ModifiedDate",t:ji},14:{n:"PageCount",t:En},15:{n:"WordCount",t:En},16:{n:"CharCount",t:En},17:{n:"Thumbnail",t:U2},18:{n:"Application",t:en},19:{n:"DocSecurity",t:En},255:{},2147483648:{n:"Locale",t:fs},2147483651:{n:"Behavior",t:fs},1919054434:{}},Uu={1:"US",2:"CA",3:"",7:"RU",20:"EG",30:"GR",31:"NL",32:"BE",33:"FR",34:"ES",36:"HU",39:"IT",41:"CH",43:"AT",44:"GB",45:"DK",46:"SE",47:"NO",48:"PL",49:"DE",52:"MX",55:"BR",61:"AU",64:"NZ",66:"TH",81:"JP",82:"KR",84:"VN",86:"CN",90:"TR",105:"JS",213:"DZ",216:"MA",218:"LY",351:"PT",354:"IS",358:"FI",420:"CZ",886:"TW",961:"LB",962:"JO",963:"SY",964:"IQ",965:"KW",966:"SA",971:"AE",972:"IL",974:"QA",981:"IR",65535:"US"},G2=[null,"solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"];function V2(e){return e.map(function(n){return[n>>16&255,n>>8&255,n&255]})}var X2=V2([0,16777215,16711680,65280,255,16776960,16711935,65535,0,16777215,16711680,65280,255,16776960,16711935,65535,8388608,32768,128,8421376,8388736,32896,12632256,8421504,10066431,10040166,16777164,13434879,6684774,16744576,26316,13421823,128,16711935,16776960,65535,8388736,8388608,32896,255,52479,13434879,13434828,16777113,10079487,16751052,13408767,16764057,3368703,3394764,10079232,16763904,16750848,16737792,6710937,9868950,13158,3381606,13056,3355392,10040064,10040166,3355545,3355443,16777215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),it=rn(X2),wt={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"},xp={"#NULL!":0,"#DIV/0!":7,"#VALUE!":15,"#REF!":23,"#NAME?":29,"#NUM!":36,"#N/A":42,"#GETTING_DATA":43,"#WTF?":255},zu={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.sheet.macroEnabled.main+xml":"workbooks","application/vnd.ms-excel.sheet.binary.macroEnabled.main":"workbooks","application/vnd.ms-excel.addin.macroEnabled.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":"sheets","application/vnd.ms-excel.worksheet":"sheets","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":"charts","application/vnd.ms-excel.chartsheet":"charts","application/vnd.ms-excel.macrosheet+xml":"macros","application/vnd.ms-excel.macrosheet":"macros","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":"dialogs","application/vnd.ms-excel.dialogsheet":"dialogs","application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":"strs","application/vnd.ms-excel.sharedStrings":"strs","application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":"styles","application/vnd.ms-excel.styles":"styles","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":"comments","application/vnd.ms-excel.comments":"comments","application/vnd.ms-excel.threadedcomments+xml":"threadedcomments","application/vnd.ms-excel.person+xml":"people","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"metadata","application/vnd.ms-excel.sheetMetadata":"metadata","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-office.chartex+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"TODO","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"};function K2(){return{workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],threadedcomments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],metadata:[],people:[],TODO:[],xmlns:""}}function Y2(e){var n=K2();if(!e||!e.match)return n;var a={};if((e.match(hn)||[]).forEach(function(t){var r=pe(t);switch(r[0].replace(r2,"<")){case"<?xml":break;case"<Types":n.xmlns=r["xmlns"+(r[0].match(/<(\w+):/)||["",""])[1]];break;case"<Default":a[r.Extension]=r.ContentType;break;case"<Override":n[zu[r.ContentType]]!==void 0&&n[zu[r.ContentType]].push(r.PartName);break}}),n.xmlns!==h2.CT)throw new Error("Unknown Namespace: "+n.xmlns);return n.calcchain=n.calcchains.length>0?n.calcchains[0]:"",n.sst=n.strs.length>0?n.strs[0]:"",n.style=n.styles.length>0?n.styles[0]:"",n.defaults=a,delete n.calcchains,n}var Ot={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",SHEET:"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",XPATH:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",XMISS:"http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",XLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",CXML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",CXMLP:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",CMNT:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",SST:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",STY:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",THEME:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",CHART:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",CHARTEX:"http://schemas.microsoft.com/office/2014/relationships/chartEx",CS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",WS:["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],DS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",MS:"http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",IMG:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",DRAW:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",XLMETA:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",TCMNT:"http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",PEOPLE:"http://schemas.microsoft.com/office/2017/10/relationships/person",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"};function Qo(e){var n=e.lastIndexOf("/");return e.slice(0,n+1)+"_rels/"+e.slice(n+1)+".rels"}function xr(e,n){var a={"!id":{}};if(!e)return a;n.charAt(0)!=="/"&&(n="/"+n);var t={};return(e.match(hn)||[]).forEach(function(r){var i=pe(r);if(i[0]==="<Relationship"){var s={};s.Type=i.Type,s.Target=i.Target,s.Id=i.Id,i.TargetMode&&(s.TargetMode=i.TargetMode);var o=i.TargetMode==="External"?i.Target:vr(i.Target,n);a[o]=s,t[i.Id]=s}}),a["!id"]=t,a}var J2="application/vnd.oasis.opendocument.spreadsheet";function Z2(e,n){for(var a=sl(e),t,r;t=Nr.exec(a);)switch(t[3]){case"manifest":break;case"file-entry":if(r=pe(t[0],!1),r.path=="/"&&r.type!==J2)throw new Error("This OpenDocument is not a spreadsheet");break;case"encryption-data":case"algorithm":case"start-key-generation":case"key-derivation":throw new Error("Unsupported ODS Encryption");default:if(n&&n.WTF)throw t}}var yr=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]],Q2=function(){for(var e=new Array(yr.length),n=0;n<yr.length;++n){var a=yr[n],t="(?:"+a[0].slice(0,a[0].indexOf(":"))+":)"+a[0].slice(a[0].indexOf(":")+1);e[n]=new RegExp("<"+t+"[^>]*>([\\s\\S]*?)</"+t+">")}return e}();function yp(e){var n={};e=Oe(e);for(var a=0;a<yr.length;++a){var t=yr[a],r=e.match(Q2[a]);r!=null&&r.length>0&&(n[t[1]]=Ae(r[1])),t[2]==="date"&&n[t[1]]&&(n[t[1]]=an(n[t[1]]))}return n}var ek=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]];function bp(e,n,a,t){var r=[];if(typeof e=="string")r=Ou(e,t);else for(var i=0;i<e.length;++i)r=r.concat(e[i].map(function(d){return{v:d}}));var s=typeof n=="string"?Ou(n,t).map(function(d){return d.v}):n,o=0,c=0;if(s.length>0)for(var l=0;l!==r.length;l+=2){switch(c=+r[l+1].v,r[l].v){case"Worksheets":case"工作表":case"Листы":case"أوراق العمل":case"ワークシート":case"גליונות עבודה":case"Arbeitsblätter":case"Çalışma Sayfaları":case"Feuilles de calcul":case"Fogli di lavoro":case"Folhas de cálculo":case"Planilhas":case"Regneark":case"Hojas de cálculo":case"Werkbladen":a.Worksheets=c,a.SheetNames=s.slice(o,o+c);break;case"Named Ranges":case"Rangos con nombre":case"名前付き一覧":case"Benannte Bereiche":case"Navngivne områder":a.NamedRanges=c,a.DefinedNames=s.slice(o,o+c);break;case"Charts":case"Diagramme":a.Chartsheets=c,a.ChartNames=s.slice(o,o+c);break}o+=c}}function nk(e,n,a){var t={};return n||(n={}),e=Oe(e),ek.forEach(function(r){var i=(e.match(Pr(r[0]))||[])[1];switch(r[2]){case"string":i&&(n[r[1]]=Ae(i));break;case"bool":n[r[1]]=i==="true";break;case"raw":var s=e.match(new RegExp("<"+r[0]+"[^>]*>([\\s\\S]*?)</"+r[0]+">"));s&&s.length>0&&(t[r[1]]=s[1]);break}}),t.HeadingPairs&&t.TitlesOfParts&&bp(t.HeadingPairs,t.TitlesOfParts,n,a),n}var ak=/<[^>]+>[^<]*/g;function tk(e,n){var a={},t="",r=e.match(ak);if(r)for(var i=0;i!=r.length;++i){var s=r[i],o=pe(s);switch(o[0]){case"<?xml":break;case"<Properties":break;case"<property":t=Ae(o.name);break;case"</property>":t=null;break;default:if(s.indexOf("<vt:")===0){var c=s.split(">"),l=c[0].slice(4),d=c[1];switch(l){case"lpstr":case"bstr":case"lpwstr":a[t]=Ae(d);break;case"bool":a[t]=Pe(d);break;case"i1":case"i2":case"i4":case"i8":case"int":case"uint":a[t]=parseInt(d,10);break;case"r4":case"r8":case"decimal":a[t]=parseFloat(d);break;case"filetime":case"date":a[t]=an(d);break;case"cy":case"error":a[t]=Ae(d);break;default:if(l.slice(-1)=="/")break;n.WTF&&typeof console<"u"&&console.warn("Unexpected",s,l,c)}}else if(s.slice(0,2)!=="</"){if(n.WTF)throw new Error(s)}}}return a}var rk={Title:"Title",Subject:"Subject",Author:"Author",Keywords:"Keywords",Comments:"Description",LastAuthor:"LastAuthor",RevNumber:"Revision",Application:"AppName",LastPrinted:"LastPrinted",CreatedDate:"Created",ModifiedDate:"LastSaved",Category:"Category",Manager:"Manager",Company:"Company",AppVersion:"Version",ContentStatus:"ContentStatus",Identifier:"Identifier",Language:"Language"},no;function ik(e,n,a){no||(no=tl(rk)),n=no[n]||n,e[n]=a}function pl(e){var n=e.read_shift(4),a=e.read_shift(4);return new Date((a/1e7*Math.pow(2,32)+n/1e7-11644473600)*1e3).toISOString().replace(/\.000/,"")}function wp(e,n,a){var t=e.l,r=e.read_shift(0,"lpstr-cp");if(a)for(;e.l-t&3;)++e.l;return r}function _p(e,n,a){var t=e.read_shift(0,"lpwstr");return t}function kp(e,n,a){return n===31?_p(e):wp(e,n,a)}function ec(e,n,a){return kp(e,n,a===!1?0:4)}function sk(e,n){if(!n)throw new Error("VtUnalignedString must have positive length");return kp(e,n,0)}function ok(e){for(var n=e.read_shift(4),a=[],t=0;t!=n;++t){var r=e.l;a[t]=e.read_shift(0,"lpwstr").replace(bn,""),e.l-r&2&&(e.l+=2)}return a}function ck(e){for(var n=e.read_shift(4),a=[],t=0;t!=n;++t)a[t]=e.read_shift(0,"lpstr-cp").replace(bn,"");return a}function lk(e){var n=e.l,a=ps(e,jp);e[e.l]==0&&e[e.l+1]==0&&e.l-n&2&&(e.l+=2);var t=ps(e,En);return[a,t]}function dk(e){for(var n=e.read_shift(4),a=[],t=0;t<n/2;++t)a.push(lk(e));return a}function $u(e,n){for(var a=e.read_shift(4),t={},r=0;r!=a;++r){var i=e.read_shift(4),s=e.read_shift(4);t[i]=e.read_shift(s,n===1200?"utf16le":"utf8").replace(bn,"").replace(ur,"!"),n===1200&&s%2&&(e.l+=2)}return e.l&3&&(e.l=e.l>>3<<2),t}function Ep(e){var n=e.read_shift(4),a=e.slice(e.l,e.l+n);return e.l+=n,(n&3)>0&&(e.l+=4-(n&3)&3),a}function uk(e){var n={};return n.Size=e.read_shift(4),e.l+=n.Size+3-(n.Size-1)%4,n}function ps(e,n,a){var t=e.read_shift(2),r,i=a||{};if(e.l+=2,n!==Bu&&t!==n&&q2.indexOf(n)===-1&&!((n&65534)==4126&&(t&65534)==4126))throw new Error("Expected type "+n+" saw "+t);switch(n===Bu?t:n){case 2:return r=e.read_shift(2,"i"),i.raw||(e.l+=2),r;case 3:return r=e.read_shift(4,"i"),r;case 11:return e.read_shift(4)!==0;case 19:return r=e.read_shift(4),r;case 30:return wp(e,t,4).replace(bn,"");case 31:return _p(e);case 64:return pl(e);case 65:return Ep(e);case 71:return uk(e);case 80:return ec(e,t,!i.raw).replace(bn,"");case 81:return sk(e,t).replace(bn,"");case 4108:return dk(e);case 4126:case 4127:return t==4127?ok(e):ck(e);default:throw new Error("TypedPropertyValue unrecognized type "+n+" "+t)}}function qu(e,n){var a=e.l,t=e.read_shift(4),r=e.read_shift(4),i=[],s=0,o=0,c=-1,l={};for(s=0;s!=r;++s){var d=e.read_shift(4),u=e.read_shift(4);i[s]=[d,u+a]}i.sort(function(T,j){return T[1]-j[1]});var f={};for(s=0;s!=r;++s){if(e.l!==i[s][1]){var v=!0;if(s>0&&n)switch(n[i[s-1][0]].t){case 2:e.l+2===i[s][1]&&(e.l+=2,v=!1);break;case 80:e.l<=i[s][1]&&(e.l=i[s][1],v=!1);break;case 4108:e.l<=i[s][1]&&(e.l=i[s][1],v=!1);break}if((!n||s==0)&&e.l<=i[s][1]&&(v=!1,e.l=i[s][1]),v)throw new Error("Read Error: Expected address "+i[s][1]+" at "+e.l+" :"+s)}if(n){var h=n[i[s][0]];if(f[h.n]=ps(e,h.t,{raw:!0}),h.p==="version"&&(f[h.n]=String(f[h.n]>>16)+"."+("0000"+String(f[h.n]&65535)).slice(-4)),h.n=="CodePage")switch(f[h.n]){case 0:f[h.n]=1252;case 874:case 932:case 936:case 949:case 950:case 1250:case 1251:case 1253:case 1254:case 1255:case 1256:case 1257:case 1258:case 1e4:case 1200:case 1201:case 1252:case 65e3:case-536:case 65001:case-535:Yn(o=f[h.n]>>>0&65535);break;default:throw new Error("Unsupported CodePage: "+f[h.n])}}else if(i[s][0]===1){if(o=f.CodePage=ps(e,fl),Yn(o),c!==-1){var p=e.l;e.l=i[c][1],l=$u(e,o),e.l=p}}else if(i[s][0]===0){if(o===0){c=s,e.l=i[s+1][1];continue}l=$u(e,o)}else{var m=l[i[s][0]],y;switch(e[e.l]){case 65:e.l+=4,y=Ep(e);break;case 30:e.l+=4,y=ec(e,e[e.l-4]).replace(/\u0000+$/,"");break;case 31:e.l+=4,y=ec(e,e[e.l-4]).replace(/\u0000+$/,"");break;case 3:e.l+=4,y=e.read_shift(4,"i");break;case 19:e.l+=4,y=e.read_shift(4);break;case 5:e.l+=4,y=e.read_shift(8,"f");break;case 11:e.l+=4,y=We(e,4);break;case 64:e.l+=4,y=an(pl(e));break;default:throw new Error("unparsed value: "+e[e.l])}f[m]=y}}return e.l=a+t,f}function Hu(e,n,a){var t=e.content;if(!t)return{};tn(t,0);var r,i,s,o,c=0;t.chk("feff","Byte Order: "),t.read_shift(2);var l=t.read_shift(4),d=t.read_shift(16);if(d!==ke.utils.consts.HEADER_CLSID&&d!==a)throw new Error("Bad PropertySet CLSID "+d);if(r=t.read_shift(4),r!==1&&r!==2)throw new Error("Unrecognized #Sets: "+r);if(i=t.read_shift(16),o=t.read_shift(4),r===1&&o!==t.l)throw new Error("Length mismatch: "+o+" !== "+t.l);r===2&&(s=t.read_shift(16),c=t.read_shift(4));var u=qu(t,n),f={SystemIdentifier:l};for(var v in u)f[v]=u[v];if(f.FMTID=i,r===1)return f;if(c-t.l==2&&(t.l+=2),t.l!==c)throw new Error("Length mismatch 2: "+t.l+" !== "+c);var h;try{h=qu(t,null)}catch{}for(v in h)f[v]=h[v];return f.FMTID=[i,s],f}function Sa(e,n){return e.read_shift(n),null}function vk(e,n,a){for(var t=[],r=e.l+n;e.l<r;)t.push(a(e,r-e.l));if(r!==e.l)throw new Error("Slurp error");return t}function We(e,n){return e.read_shift(n)===1}function Ke(e){return e.read_shift(2,"u")}function Tp(e,n){return vk(e,n,Ke)}function fk(e){var n=e.read_shift(1),a=e.read_shift(1);return a===1?n:n===1}function Jr(e,n,a){var t=e.read_shift(a&&a.biff>=12?2:1),r="sbcs-cont";if(a&&a.biff>=8,!a||a.biff==8){var i=e.read_shift(1);i&&(r="dbcs-cont")}else a.biff==12&&(r="wstr");a.biff>=2&&a.biff<=5&&(r="cpstr");var s=t?e.read_shift(t,r):"";return s}function pk(e){var n=e.read_shift(2),a=e.read_shift(1),t=a&4,r=a&8,i=1+(a&1),s=0,o,c={};r&&(s=e.read_shift(2)),t&&(o=e.read_shift(4));var l=i==2?"dbcs-cont":"sbcs-cont",d=n===0?"":e.read_shift(n,l);return r&&(e.l+=4*s),t&&(e.l+=o),c.t=d,r||(c.raw="<t>"+c.t+"</t>",c.r=c.t),c}function ht(e,n,a){var t;if(a){if(a.biff>=2&&a.biff<=5)return e.read_shift(n,"cpstr");if(a.biff>=12)return e.read_shift(n,"dbcs-cont")}var r=e.read_shift(1);return r===0?t=e.read_shift(n,"sbcs-cont"):t=e.read_shift(n,"dbcs-cont"),t}function Zr(e,n,a){var t=e.read_shift(a&&a.biff==2?1:2);return t===0?(e.l++,""):ht(e,t,a)}function _t(e,n,a){if(a.biff>5)return Zr(e,n,a);var t=e.read_shift(1);return t===0?(e.l++,""):e.read_shift(t,a.biff<=4||!e.lens?"cpstr":"sbcs-cont")}function hk(e){var n=e.read_shift(1);e.l++;var a=e.read_shift(2);return e.l+=2,[n,a]}function mk(e){var n=e.read_shift(4),a=e.l,t=!1;n>24&&(e.l+=n-24,e.read_shift(16)==="795881f43b1d7f48af2c825dc4852763"&&(t=!0),e.l=a);var r=e.read_shift((t?n-24:n)>>1,"utf16le").replace(bn,"");return t&&(e.l+=24),r}function gk(e){for(var n=e.read_shift(2),a="";n-- >0;)a+="../";var t=e.read_shift(0,"lpstr-ansi");if(e.l+=2,e.read_shift(2)!=57005)throw new Error("Bad FileMoniker");var r=e.read_shift(4);if(r===0)return a+t.replace(/\\/g,"/");var i=e.read_shift(4);if(e.read_shift(2)!=3)throw new Error("Bad FileMoniker");var s=e.read_shift(i>>1,"utf16le").replace(bn,"");return a+s}function jk(e,n){var a=e.read_shift(16);switch(a){case"e0c9ea79f9bace118c8200aa004ba90b":return mk(e);case"0303000000000000c000000000000046":return gk(e);default:throw new Error("Unsupported Moniker "+a)}}function xi(e){var n=e.read_shift(4),a=n>0?e.read_shift(n,"utf16le").replace(bn,""):"";return a}function xk(e,n){var a=e.l+n,t=e.read_shift(4);if(t!==2)throw new Error("Unrecognized streamVersion: "+t);var r=e.read_shift(2);e.l+=2;var i,s,o,c,l="",d,u;r&16&&(i=xi(e,a-e.l)),r&128&&(s=xi(e,a-e.l)),(r&257)===257&&(o=xi(e,a-e.l)),(r&257)===1&&(c=jk(e,a-e.l)),r&8&&(l=xi(e,a-e.l)),r&32&&(d=e.read_shift(16)),r&64&&(u=pl(e)),e.l=a;var f=s||o||c||"";f&&l&&(f+="#"+l),f||(f="#"+l),r&2&&f.charAt(0)=="/"&&f.charAt(1)!="/"&&(f="file://"+f);var v={Target:f};return d&&(v.guid=d),u&&(v.time=u),i&&(v.Tooltip=i),v}function Ap(e){var n=e.read_shift(1),a=e.read_shift(1),t=e.read_shift(1),r=e.read_shift(1);return[n,a,t,r]}function Sp(e,n){var a=Ap(e);return a[3]=0,a}function fa(e){var n=e.read_shift(2),a=e.read_shift(2),t=e.read_shift(2);return{r:n,c:a,ixfe:t}}function yk(e){var n=e.read_shift(2),a=e.read_shift(2);return e.l+=8,{type:n,flags:a}}function bk(e,n,a){return n===0?"":_t(e,n,a)}function wk(e,n,a){var t=a.biff>8?4:2,r=e.read_shift(t),i=e.read_shift(t,"i"),s=e.read_shift(t,"i");return[r,i,s]}function Cp(e){var n=e.read_shift(2),a=vl(e);return[n,a]}function _k(e,n,a){e.l+=4,n-=4;var t=e.l+n,r=Jr(e,n,a),i=e.read_shift(2);if(t-=e.l,i!==t)throw new Error("Malformed AddinUdf: padding = "+t+" != "+i);return e.l+=i,r}function Rs(e){var n=e.read_shift(2),a=e.read_shift(2),t=e.read_shift(2),r=e.read_shift(2);return{s:{c:t,r:n},e:{c:r,r:a}}}function Fp(e){var n=e.read_shift(2),a=e.read_shift(2),t=e.read_shift(1),r=e.read_shift(1);return{s:{c:t,r:n},e:{c:r,r:a}}}var kk=Fp;function Op(e){e.l+=4;var n=e.read_shift(2),a=e.read_shift(2),t=e.read_shift(2);return e.l+=12,[a,n,t]}function Ek(e){var n={};return e.l+=4,e.l+=16,n.fSharedNote=e.read_shift(2),e.l+=4,n}function Tk(e){var n={};return e.l+=4,e.cf=e.read_shift(2),n}function cn(e){e.l+=2,e.l+=e.read_shift(2)}var Ak={0:cn,4:cn,5:cn,6:cn,7:Tk,8:cn,9:cn,10:cn,11:cn,12:cn,13:Ek,14:cn,15:cn,16:cn,17:cn,18:cn,19:cn,20:cn,21:Op};function Sk(e,n){for(var a=e.l+n,t=[];e.l<a;){var r=e.read_shift(2);e.l-=2;try{t.push(Ak[r](e,a-e.l))}catch{return e.l=a,t}}return e.l!=a&&(e.l=a),t}function yi(e,n){var a={BIFFVer:0,dt:0};switch(a.BIFFVer=e.read_shift(2),n-=2,n>=2&&(a.dt=e.read_shift(2),e.l-=2),a.BIFFVer){case 1536:case 1280:case 1024:case 768:case 512:case 2:case 7:break;default:if(n>6)throw new Error("Unexpected BIFF Ver "+a.BIFFVer)}return e.read_shift(n),a}function Ck(e,n){return n===0||e.read_shift(2),1200}function Fk(e,n,a){if(a.enc)return e.l+=n,"";var t=e.l,r=_t(e,0,a);return e.read_shift(n+t-e.l),r}function Ok(e,n,a){var t=a&&a.biff==8||n==2?e.read_shift(2):(e.l+=n,0);return{fDialog:t&16,fBelow:t&64,fRight:t&128}}function Rk(e,n,a){var t=e.read_shift(4),r=e.read_shift(1)&3,i=e.read_shift(1);switch(i){case 0:i="Worksheet";break;case 1:i="Macrosheet";break;case 2:i="Chartsheet";break;case 6:i="VBAModule";break}var s=Jr(e,0,a);return s.length===0&&(s="Sheet1"),{pos:t,hs:r,dt:i,name:s}}function Ik(e,n){for(var a=e.l+n,t=e.read_shift(4),r=e.read_shift(4),i=[],s=0;s!=r&&e.l<a;++s)i.push(pk(e));return i.Count=t,i.Unique=r,i}function Dk(e,n){var a={};return a.dsst=e.read_shift(2),e.l+=n-2,a}function Pk(e){var n={};n.r=e.read_shift(2),n.c=e.read_shift(2),n.cnt=e.read_shift(2)-n.c;var a=e.read_shift(2);e.l+=4;var t=e.read_shift(1);return e.l+=3,t&7&&(n.level=t&7),t&32&&(n.hidden=!0),t&64&&(n.hpt=a/20),n}function Nk(e){var n=yk(e);if(n.type!=2211)throw new Error("Invalid Future Record "+n.type);var a=e.read_shift(4);return a!==0}function Lk(e){return e.read_shift(2),e.read_shift(4)}function Wu(e,n,a){var t=0;a&&a.biff==2||(t=e.read_shift(2));var r=e.read_shift(2);a&&a.biff==2&&(t=1-(r>>15),r&=32767);var i={Unsynced:t&1,DyZero:(t&2)>>1,ExAsc:(t&4)>>2,ExDsc:(t&8)>>3};return[i,r]}function Mk(e){var n=e.read_shift(2),a=e.read_shift(2),t=e.read_shift(2),r=e.read_shift(2),i=e.read_shift(2),s=e.read_shift(2),o=e.read_shift(2),c=e.read_shift(2),l=e.read_shift(2);return{Pos:[n,a],Dim:[t,r],Flags:i,CurTab:s,FirstTab:o,Selected:c,TabRatio:l}}function Bk(e,n,a){if(a&&a.biff>=2&&a.biff<5)return{};var t=e.read_shift(2);return{RTL:t&64}}function Uk(){}function zk(e,n,a){var t={dyHeight:e.read_shift(2),fl:e.read_shift(2)};switch(a&&a.biff||8){case 2:break;case 3:case 4:e.l+=2;break;default:e.l+=10;break}return t.name=Jr(e,0,a),t}function $k(e){var n=fa(e);return n.isst=e.read_shift(4),n}function qk(e,n,a){a.biffguess&&a.biff==2&&(a.biff=5);var t=e.l+n,r=fa(e);a.biff==2&&e.l++;var i=Zr(e,t-e.l,a);return r.val=i,r}function Hk(e,n,a){var t=e.read_shift(2),r=_t(e,0,a);return[t,r]}var Wk=_t;function Gu(e,n,a){var t=e.l+n,r=a.biff==8||!a.biff?4:2,i=e.read_shift(r),s=e.read_shift(r),o=e.read_shift(2),c=e.read_shift(2);return e.l=t,{s:{r:i,c:o},e:{r:s,c}}}function Gk(e){var n=e.read_shift(2),a=e.read_shift(2),t=Cp(e);return{r:n,c:a,ixfe:t[0],rknum:t[1]}}function Vk(e,n){for(var a=e.l+n-2,t=e.read_shift(2),r=e.read_shift(2),i=[];e.l<a;)i.push(Cp(e));if(e.l!==a)throw new Error("MulRK read error");var s=e.read_shift(2);if(i.length!=s-r+1)throw new Error("MulRK length mismatch");return{r:t,c:r,C:s,rkrec:i}}function Xk(e,n){for(var a=e.l+n-2,t=e.read_shift(2),r=e.read_shift(2),i=[];e.l<a;)i.push(e.read_shift(2));if(e.l!==a)throw new Error("MulBlank read error");var s=e.read_shift(2);if(i.length!=s-r+1)throw new Error("MulBlank length mismatch");return{r:t,c:r,C:s,ixfe:i}}function Kk(e,n,a,t){var r={},i=e.read_shift(4),s=e.read_shift(4),o=e.read_shift(4),c=e.read_shift(2);return r.patternType=G2[o>>26],t.cellStyles&&(r.alc=i&7,r.fWrap=i>>3&1,r.alcV=i>>4&7,r.fJustLast=i>>7&1,r.trot=i>>8&255,r.cIndent=i>>16&15,r.fShrinkToFit=i>>20&1,r.iReadOrder=i>>22&2,r.fAtrNum=i>>26&1,r.fAtrFnt=i>>27&1,r.fAtrAlc=i>>28&1,r.fAtrBdr=i>>29&1,r.fAtrPat=i>>30&1,r.fAtrProt=i>>31&1,r.dgLeft=s&15,r.dgRight=s>>4&15,r.dgTop=s>>8&15,r.dgBottom=s>>12&15,r.icvLeft=s>>16&127,r.icvRight=s>>23&127,r.grbitDiag=s>>30&3,r.icvTop=o&127,r.icvBottom=o>>7&127,r.icvDiag=o>>14&127,r.dgDiag=o>>21&15,r.icvFore=c&127,r.icvBack=c>>7&127,r.fsxButton=c>>14&1),r}function Yk(e,n,a){var t={};return t.ifnt=e.read_shift(2),t.numFmtId=e.read_shift(2),t.flags=e.read_shift(2),t.fStyle=t.flags>>2&1,n-=6,t.data=Kk(e,n,t.fStyle,a),t}function Jk(e){e.l+=4;var n=[e.read_shift(2),e.read_shift(2)];if(n[0]!==0&&n[0]--,n[1]!==0&&n[1]--,n[0]>7||n[1]>7)throw new Error("Bad Gutters: "+n.join("|"));return n}function Vu(e,n,a){var t=fa(e);(a.biff==2||n==9)&&++e.l;var r=fk(e);return t.val=r,t.t=r===!0||r===!1?"b":"e",t}function Zk(e,n,a){a.biffguess&&a.biff==2&&(a.biff=5);var t=fa(e),r=dn(e);return t.val=r,t}var Xu=bk;function Qk(e,n,a){var t=e.l+n,r=e.read_shift(2),i=e.read_shift(2);if(a.sbcch=i,i==1025||i==14849)return[i,r];if(i<1||i>255)throw new Error("Unexpected SupBook type: "+i);for(var s=ht(e,i),o=[];t>e.l;)o.push(Zr(e));return[i,r,s,o]}function Ku(e,n,a){var t=e.read_shift(2),r,i={fBuiltIn:t&1,fWantAdvise:t>>>1&1,fWantPict:t>>>2&1,fOle:t>>>3&1,fOleLink:t>>>4&1,cf:t>>>5&1023,fIcon:t>>>15&1};return a.sbcch===14849&&(r=_k(e,n-2,a)),i.body=r||e.read_shift(n-2),typeof r=="string"&&(i.Name=r),i}var eE=["_xlnm.Consolidate_Area","_xlnm.Auto_Open","_xlnm.Auto_Close","_xlnm.Extract","_xlnm.Database","_xlnm.Criteria","_xlnm.Print_Area","_xlnm.Print_Titles","_xlnm.Recorder","_xlnm.Data_Form","_xlnm.Auto_Activate","_xlnm.Auto_Deactivate","_xlnm.Sheet_Title","_xlnm._FilterDatabase"];function Yu(e,n,a){var t=e.l+n,r=e.read_shift(2),i=e.read_shift(1),s=e.read_shift(1),o=e.read_shift(a&&a.biff==2?1:2),c=0;(!a||a.biff>=5)&&(a.biff!=5&&(e.l+=2),c=e.read_shift(2),a.biff==5&&(e.l+=2),e.l+=4);var l=ht(e,s,a);r&32&&(l=eE[l.charCodeAt(0)]);var d=t-e.l;a&&a.biff==2&&--d;var u=t==e.l||o===0||!(d>0)?[]:P4(e,d,a,o);return{chKey:i,Name:l,itab:c,rgce:u}}function Rp(e,n,a){if(a.biff<8)return nE(e,n,a);for(var t=[],r=e.l+n,i=e.read_shift(a.biff>8?4:2);i--!==0;)t.push(wk(e,a.biff>8?12:6,a));if(e.l!=r)throw new Error("Bad ExternSheet: "+e.l+" != "+r);return t}function nE(e,n,a){e[e.l+1]==3&&e[e.l]++;var t=Jr(e,n,a);return t.charCodeAt(0)==3?t.slice(1):t}function aE(e,n,a){if(a.biff<8){e.l+=n;return}var t=e.read_shift(2),r=e.read_shift(2),i=ht(e,t,a),s=ht(e,r,a);return[i,s]}function tE(e,n,a){var t=Fp(e);e.l++;var r=e.read_shift(1);return n-=8,[N4(e,n,a),r,t]}function Ju(e,n,a){var t=kk(e);switch(a.biff){case 2:e.l++,n-=7;break;case 3:case 4:e.l+=2,n-=8;break;default:e.l+=6,n-=12}return[t,I4(e,n,a)]}function rE(e){var n=e.read_shift(4)!==0,a=e.read_shift(4)!==0,t=e.read_shift(4);return[n,a,t]}function iE(e,n,a){if(!(a.biff<8)){var t=e.read_shift(2),r=e.read_shift(2),i=e.read_shift(2),s=e.read_shift(2),o=_t(e,0,a);return a.biff<8&&e.read_shift(1),[{r:t,c:r},o,s,i]}}function sE(e,n,a){return iE(e,n,a)}function oE(e,n){for(var a=[],t=e.read_shift(2);t--;)a.push(Rs(e));return a}function cE(e,n,a){if(a&&a.biff<8)return dE(e,n,a);var t=Op(e),r=Sk(e,n-22,t[1]);return{cmo:t,ft:r}}var lE={8:function(e,n){var a=e.l+n;e.l+=10;var t=e.read_shift(2);e.l+=4,e.l+=2,e.l+=2,e.l+=2,e.l+=4;var r=e.read_shift(1);return e.l+=r,e.l=a,{fmt:t}}};function dE(e,n,a){e.l+=4;var t=e.read_shift(2),r=e.read_shift(2),i=e.read_shift(2);e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=6,n-=36;var s=[];return s.push((lE[t]||pn)(e,n,a)),{cmo:[r,t,i],ft:s}}function uE(e,n,a){var t=e.l,r="";try{e.l+=4;var i=(a.lastobj||{cmo:[0,0]}).cmo[1],s;[0,5,7,11,12,14].indexOf(i)==-1?e.l+=6:s=hk(e,6,a);var o=e.read_shift(2);e.read_shift(2),Ke(e,2);var c=e.read_shift(2);e.l+=c;for(var l=1;l<e.lens.length-1;++l){if(e.l-t!=e.lens[l])throw new Error("TxO: bad continue record");var d=e[e.l],u=ht(e,e.lens[l+1]-e.lens[l]-1);if(r+=u,r.length>=(d?o:2*o))break}if(r.length!==o&&r.length!==o*2)throw new Error("cchText: "+o+" != "+r.length);return e.l=t+n,{t:r}}catch{return e.l=t+n,{t:r}}}function vE(e,n){var a=Rs(e);e.l+=16;var t=xk(e,n-24);return[a,t]}function fE(e,n){e.read_shift(2);var a=Rs(e),t=e.read_shift((n-10)/2,"dbcs-cont");return t=t.replace(bn,""),[a,t]}function pE(e){var n=[0,0],a;return a=e.read_shift(2),n[0]=Uu[a]||a,a=e.read_shift(2),n[1]=Uu[a]||a,n}function hE(e){for(var n=e.read_shift(2),a=[];n-- >0;)a.push(Sp(e));return a}function mE(e){for(var n=e.read_shift(2),a=[];n-- >0;)a.push(Sp(e));return a}function gE(e){e.l+=2;var n={cxfs:0,crc:0};return n.cxfs=e.read_shift(2),n.crc=e.read_shift(4),n}function Ip(e,n,a){if(!a.cellStyles)return pn(e,n);var t=a&&a.biff>=12?4:2,r=e.read_shift(t),i=e.read_shift(t),s=e.read_shift(t),o=e.read_shift(t),c=e.read_shift(2);t==2&&(e.l+=2);var l={s:r,e:i,w:s,ixfe:o,flags:c};return(a.biff>=5||!a.biff)&&(l.level=c>>8&7),l}function jE(e,n){var a={};return n<32||(e.l+=16,a.header=dn(e),a.footer=dn(e),e.l+=2),a}function xE(e,n,a){var t={area:!1};if(a.biff!=5)return e.l+=n,t;var r=e.read_shift(1);return e.l+=3,r&16&&(t.area=!0),t}var yE=fa,bE=Tp,wE=Zr;function _E(e){var n=e.read_shift(2),a=e.read_shift(2),t=e.read_shift(4),r={fmt:n,env:a,len:t,data:e.slice(e.l,e.l+t)};return e.l+=t,r}function kE(e,n,a){a.biffguess&&a.biff==5&&(a.biff=2);var t=fa(e);++e.l;var r=_t(e,n-7,a);return t.t="str",t.val=r,t}function EE(e){var n=fa(e);++e.l;var a=dn(e);return n.t="n",n.val=a,n}function TE(e){var n=fa(e);++e.l;var a=e.read_shift(2);return n.t="n",n.val=a,n}function AE(e){var n=e.read_shift(1);return n===0?(e.l++,""):e.read_shift(n,"sbcs-cont")}function SE(e,n){e.l+=6,e.l+=2,e.l+=1,e.l+=3,e.l+=1,e.l+=n-13}function CE(e,n,a){var t=e.l+n,r=fa(e),i=e.read_shift(2),s=ht(e,i,a);return e.l=t,r.t="str",r.val=s,r}var FE=[2,3,48,49,131,139,140,245],Zu=function(){var e={1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127,8:865,9:437,10:850,11:437,13:437,14:850,15:437,16:850,17:437,18:850,19:932,20:850,21:437,22:850,23:865,24:437,25:437,26:850,27:437,28:863,29:850,31:852,34:852,35:852,36:860,37:850,38:866,55:850,64:852,77:936,78:949,79:950,80:874,87:1252,88:1252,89:1252,108:863,134:737,135:852,136:857,204:1257,255:16969},n=tl({1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127});function a(o,c){var l=[],d=Ha(1);switch(c.type){case"base64":d=Kn(In(o));break;case"binary":d=Kn(o);break;case"buffer":case"array":d=o;break}tn(d,0);var u=d.read_shift(1),f=!!(u&136),v=!1,h=!1;switch(u){case 2:break;case 3:break;case 48:v=!0,f=!0;break;case 49:v=!0,f=!0;break;case 131:break;case 139:break;case 140:h=!0;break;case 245:break;default:throw new Error("DBF Unsupported Version: "+u.toString(16))}var p=0,m=521;u==2&&(p=d.read_shift(2)),d.l+=3,u!=2&&(p=d.read_shift(4)),p>1048576&&(p=1e6),u!=2&&(m=d.read_shift(2));var y=d.read_shift(2),T=c.codepage||1252;u!=2&&(d.l+=16,d.read_shift(1),d[d.l]!==0&&(T=e[d[d.l]]),d.l+=1,d.l+=2),h&&(d.l+=36);for(var j=[],R={},N=Math.min(d.length,u==2?521:m-10-(v?264:0)),F=h?32:11;d.l<N&&d[d.l]!=13;)switch(R={},R.name=Yo.utils.decode(T,d.slice(d.l,d.l+F)).replace(/[\u0000\r\n].*$/g,""),d.l+=F,R.type=String.fromCharCode(d.read_shift(1)),u!=2&&!h&&(R.offset=d.read_shift(4)),R.len=d.read_shift(1),u==2&&(R.offset=d.read_shift(2)),R.dec=d.read_shift(1),R.name.length&&j.push(R),u!=2&&(d.l+=h?13:14),R.type){case"B":(!v||R.len!=8)&&c.WTF&&console.log("Skipping "+R.name+":"+R.type);break;case"G":case"P":c.WTF&&console.log("Skipping "+R.name+":"+R.type);break;case"+":case"0":case"@":case"C":case"D":case"F":case"I":case"L":case"M":case"N":case"O":case"T":case"Y":break;default:throw new Error("Unknown Field Type: "+R.type)}if(d[d.l]!==13&&(d.l=m-1),d.read_shift(1)!==13)throw new Error("DBF Terminator not found "+d.l+" "+d[d.l]);d.l=m;var _=0,M=0;for(l[0]=[],M=0;M!=j.length;++M)l[0][M]=j[M].name;for(;p-- >0;){if(d[d.l]===42){d.l+=y;continue}for(++d.l,l[++_]=[],M=0,M=0;M!=j.length;++M){var I=d.slice(d.l,d.l+j[M].len);d.l+=j[M].len,tn(I,0);var X=Yo.utils.decode(T,I);switch(j[M].type){case"C":X.trim().length&&(l[_][M]=X.replace(/\s+$/,""));break;case"D":X.length===8?l[_][M]=new Date(+X.slice(0,4),+X.slice(4,6)-1,+X.slice(6,8)):l[_][M]=X;break;case"F":l[_][M]=parseFloat(X.trim());break;case"+":case"I":l[_][M]=h?I.read_shift(-4,"i")^2147483648:I.read_shift(4,"i");break;case"L":switch(X.trim().toUpperCase()){case"Y":case"T":l[_][M]=!0;break;case"N":case"F":l[_][M]=!1;break;case"":case"?":break;default:throw new Error("DBF Unrecognized L:|"+X+"|")}break;case"M":if(!f)throw new Error("DBF Unexpected MEMO for type "+u.toString(16));l[_][M]="##MEMO##"+(h?parseInt(X.trim(),10):I.read_shift(4));break;case"N":X=X.replace(/\u0000/g,"").trim(),X&&X!="."&&(l[_][M]=+X||0);break;case"@":l[_][M]=new Date(I.read_shift(-8,"f")-621356832e5);break;case"T":l[_][M]=new Date((I.read_shift(4)-2440588)*864e5+I.read_shift(4));break;case"Y":l[_][M]=I.read_shift(4,"i")/1e4+I.read_shift(4,"i")/1e4*Math.pow(2,32);break;case"O":l[_][M]=-I.read_shift(-8,"f");break;case"B":if(v&&j[M].len==8){l[_][M]=I.read_shift(8,"f");break}case"G":case"P":I.l+=j[M].len;break;case"0":if(j[M].name==="_NullFlags")break;default:throw new Error("DBF Unsupported data type "+j[M].type)}}}if(u!=2&&d.l<d.length&&d[d.l++]!=26)throw new Error("DBF EOF Marker missing "+(d.l-1)+" of "+d.length+" "+d[d.l-1].toString(16));return c&&c.sheetRows&&(l=l.slice(0,c.sheetRows)),c.DBF=j,l}function t(o,c){var l=c||{};l.dateNF||(l.dateNF="yyyymmdd");var d=Kt(a(o,l),l);return d["!cols"]=l.DBF.map(function(u){return{wch:u.len,DBF:u}}),delete l.DBF,d}function r(o,c){try{return Xa(t(o,c),c)}catch(l){if(c&&c.WTF)throw l}return{SheetNames:[],Sheets:{}}}var i={B:8,C:250,L:1,D:8,"?":0,"":0};function s(o,c){var l=c||{};if(+l.codepage>=0&&Yn(+l.codepage),l.type=="string")throw new Error("Cannot write DBF to JS string");var d=Jo(),u=oc(o,{header:1,raw:!0,cellDates:!0}),f=u[0],v=u.slice(1),h=o["!cols"]||[],p=0,m=0,y=0,T=1;for(p=0;p<f.length;++p){if(((h[p]||{}).DBF||{}).name){f[p]=h[p].DBF.name,++y;continue}if(f[p]!=null){if(++y,typeof f[p]=="number"&&(f[p]=f[p].toString(10)),typeof f[p]!="string")throw new Error("DBF Invalid column name "+f[p]+" |"+typeof f[p]+"|");if(f.indexOf(f[p])!==p){for(m=0;m<1024;++m)if(f.indexOf(f[p]+"_"+m)==-1){f[p]+="_"+m;break}}}}var j=ze(o["!ref"]),R=[],N=[],F=[];for(p=0;p<=j.e.c-j.s.c;++p){var _="",M="",I=0,X=[];for(m=0;m<v.length;++m)v[m][p]!=null&&X.push(v[m][p]);if(X.length==0||f[p]==null){R[p]="?";continue}for(m=0;m<X.length;++m){switch(typeof X[m]){case"number":M="B";break;case"string":M="C";break;case"boolean":M="L";break;case"object":M=X[m]instanceof Date?"D":"C";break;default:M="C"}I=Math.max(I,String(X[m]).length),_=_&&_!=M?"C":M}I>250&&(I=250),M=((h[p]||{}).DBF||{}).type,M=="C"&&h[p].DBF.len>I&&(I=h[p].DBF.len),_=="B"&&M=="N"&&(_="N",F[p]=h[p].DBF.dec,I=h[p].DBF.len),N[p]=_=="C"||M=="N"?I:i[_]||0,T+=N[p],R[p]=_}var W=d.next(32);for(W.write_shift(4,318902576),W.write_shift(4,v.length),W.write_shift(2,296+32*y),W.write_shift(2,T),p=0;p<4;++p)W.write_shift(4,0);for(W.write_shift(4,0|(+n[R0]||3)<<8),p=0,m=0;p<f.length;++p)if(f[p]!=null){var x=d.next(32),C=(f[p].slice(-10)+"\0\0\0\0\0\0\0\0\0\0\0").slice(0,11);x.write_shift(1,C,"sbcs"),x.write_shift(1,R[p]=="?"?"C":R[p],"sbcs"),x.write_shift(4,m),x.write_shift(1,N[p]||i[R[p]]||0),x.write_shift(1,F[p]||0),x.write_shift(1,2),x.write_shift(4,0),x.write_shift(1,0),x.write_shift(4,0),x.write_shift(4,0),m+=N[p]||i[R[p]]||0}var U=d.next(264);for(U.write_shift(4,13),p=0;p<65;++p)U.write_shift(4,0);for(p=0;p<v.length;++p){var K=d.next(T);for(K.write_shift(1,0),m=0;m<f.length;++m)if(f[m]!=null)switch(R[m]){case"L":K.write_shift(1,v[p][m]==null?63:v[p][m]?84:70);break;case"B":K.write_shift(8,v[p][m]||0,"f");break;case"N":var Q="0";for(typeof v[p][m]=="number"&&(Q=v[p][m].toFixed(F[m]||0)),y=0;y<N[m]-Q.length;++y)K.write_shift(1,32);K.write_shift(1,Q,"sbcs");break;case"D":v[p][m]?(K.write_shift(4,("0000"+v[p][m].getFullYear()).slice(-4),"sbcs"),K.write_shift(2,("00"+(v[p][m].getMonth()+1)).slice(-2),"sbcs"),K.write_shift(2,("00"+v[p][m].getDate()).slice(-2),"sbcs")):K.write_shift(8,"00000000","sbcs");break;case"C":var ee=String(v[p][m]!=null?v[p][m]:"").slice(0,N[m]);for(K.write_shift(1,ee,"sbcs"),y=0;y<N[m]-ee.length;++y)K.write_shift(1,32);break}}return d.next(1).write_shift(1,26),d.end()}return{to_workbook:r,to_sheet:t,from_sheet:s}}(),OE=function(){var e={AA:"À",BA:"Á",CA:"Â",DA:195,HA:"Ä",JA:197,AE:"È",BE:"É",CE:"Ê",HE:"Ë",AI:"Ì",BI:"Í",CI:"Î",HI:"Ï",AO:"Ò",BO:"Ó",CO:"Ô",DO:213,HO:"Ö",AU:"Ù",BU:"Ú",CU:"Û",HU:"Ü",Aa:"à",Ba:"á",Ca:"â",Da:227,Ha:"ä",Ja:229,Ae:"è",Be:"é",Ce:"ê",He:"ë",Ai:"ì",Bi:"í",Ci:"î",Hi:"ï",Ao:"ò",Bo:"ó",Co:"ô",Do:245,Ho:"ö",Au:"ù",Bu:"ú",Cu:"û",Hu:"ü",KC:"Ç",Kc:"ç",q:"æ",z:"œ",a:"Æ",j:"Œ",DN:209,Dn:241,Hy:255,S:169,c:170,R:174,"B ":180,0:176,1:177,2:178,3:179,5:181,6:182,7:183,Q:185,k:186,b:208,i:216,l:222,s:240,y:248,"!":161,'"':162,"#":163,"(":164,"%":165,"'":167,"H ":168,"+":171,";":187,"<":188,"=":189,">":190,"?":191,"{":223},n=new RegExp("\x1BN("+ua(e).join("|").replace(/\|\|\|/,"|\\||").replace(/([?()+])/g,"\\$1")+"|\\|)","gm"),a=function(f,v){var h=e[v];return typeof h=="number"?pu(h):h},t=function(f,v,h){var p=v.charCodeAt(0)-32<<4|h.charCodeAt(0)-48;return p==59?f:pu(p)};e["|"]=254;function r(f,v){switch(v.type){case"base64":return i(In(f),v);case"binary":return i(f,v);case"buffer":return i(_e&&Buffer.isBuffer(f)?f.toString("binary"):xt(f),v);case"array":return i(pt(f),v)}throw new Error("Unrecognized type "+v.type)}function i(f,v){var h=f.split(/[\n\r]+/),p=-1,m=-1,y=0,T=0,j=[],R=[],N=null,F={},_=[],M=[],I=[],X=0,W;for(+v.codepage>=0&&Yn(+v.codepage);y!==h.length;++y){X=0;var x=h[y].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g,t).replace(n,a),C=x.replace(/;;/g,"\0").split(";").map(function(D){return D.replace(/\u0000/g,";")}),U=C[0],K;if(x.length>0)switch(U){case"ID":break;case"E":break;case"B":break;case"O":break;case"W":break;case"P":C[1].charAt(0)=="P"&&R.push(x.slice(3).replace(/;;/g,";"));break;case"C":var Q=!1,ee=!1,ve=!1,L=!1,ie=-1,ce=-1;for(T=1;T<C.length;++T)switch(C[T].charAt(0)){case"A":break;case"X":m=parseInt(C[T].slice(1))-1,ee=!0;break;case"Y":for(p=parseInt(C[T].slice(1))-1,ee||(m=0),W=j.length;W<=p;++W)j[W]=[];break;case"K":K=C[T].slice(1),K.charAt(0)==='"'?K=K.slice(1,K.length-1):K==="TRUE"?K=!0:K==="FALSE"?K=!1:isNaN(ea(K))?isNaN(Mt(K).getDate())||(K=an(K)):(K=ea(K),N!==null&&Vt(N)&&(K=Os(K))),Q=!0;break;case"E":L=!0;var k=Pt(C[T].slice(1),{r:p,c:m});j[p][m]=[j[p][m],k];break;case"S":ve=!0,j[p][m]=[j[p][m],"S5S"];break;case"G":break;case"R":ie=parseInt(C[T].slice(1))-1;break;case"C":ce=parseInt(C[T].slice(1))-1;break;default:if(v&&v.WTF)throw new Error("SYLK bad record "+x)}if(Q&&(j[p][m]&&j[p][m].length==2?j[p][m][0]=K:j[p][m]=K,N=null),ve){if(L)throw new Error("SYLK shared formula cannot have own formula");var B=ie>-1&&j[ie][ce];if(!B||!B[1])throw new Error("SYLK shared formula cannot find base");j[p][m][1]=qp(B[1],{r:p-ie,c:m-ce})}break;case"F":var P=0;for(T=1;T<C.length;++T)switch(C[T].charAt(0)){case"X":m=parseInt(C[T].slice(1))-1,++P;break;case"Y":for(p=parseInt(C[T].slice(1))-1,W=j.length;W<=p;++W)j[W]=[];break;case"M":X=parseInt(C[T].slice(1))/20;break;case"F":break;case"G":break;case"P":N=R[parseInt(C[T].slice(1))];break;case"S":break;case"D":break;case"N":break;case"W":for(I=C[T].slice(1).split(" "),W=parseInt(I[0],10);W<=parseInt(I[1],10);++W)X=parseInt(I[2],10),M[W-1]=X===0?{hidden:!0}:{wch:X},Bt(M[W-1]);break;case"C":m=parseInt(C[T].slice(1))-1,M[m]||(M[m]={});break;case"R":p=parseInt(C[T].slice(1))-1,_[p]||(_[p]={}),X>0?(_[p].hpt=X,_[p].hpx=Br(X)):X===0&&(_[p].hidden=!0);break;default:if(v&&v.WTF)throw new Error("SYLK bad record "+x)}P<1&&(N=null);break;default:if(v&&v.WTF)throw new Error("SYLK bad record "+x)}}return _.length>0&&(F["!rows"]=_),M.length>0&&(F["!cols"]=M),v&&v.sheetRows&&(j=j.slice(0,v.sheetRows)),[j,F]}function s(f,v){var h=r(f,v),p=h[0],m=h[1],y=Kt(p,v);return ua(m).forEach(function(T){y[T]=m[T]}),y}function o(f,v){return Xa(s(f,v),v)}function c(f,v,h,p){var m="C;Y"+(h+1)+";X"+(p+1)+";K";switch(f.t){case"n":m+=f.v||0,f.f&&!f.F&&(m+=";E"+gA(f.f,{r:h,c:p}));break;case"b":m+=f.v?"TRUE":"FALSE";break;case"e":m+=f.w||f.v;break;case"d":m+='"'+(f.w||f.v)+'"';break;case"s":m+='"'+f.v.replace(/"/g,"").replace(/;/g,";;")+'"';break}return m}function l(f,v){v.forEach(function(h,p){var m="F;W"+(p+1)+" "+(p+1)+" ";h.hidden?m+="0":(typeof h.width=="number"&&!h.wpx&&(h.wpx=ms(h.width)),typeof h.wpx=="number"&&!h.wch&&(h.wch=gs(h.wpx)),typeof h.wch=="number"&&(m+=Math.round(h.wch))),m.charAt(m.length-1)!=" "&&f.push(m)})}function d(f,v){v.forEach(function(h,p){var m="F;";h.hidden?m+="M0;":h.hpt?m+="M"+20*h.hpt+";":h.hpx&&(m+="M"+20*Up(h.hpx)+";"),m.length>2&&f.push(m+"R"+(p+1))})}function u(f,v){var h=["ID;PWXL;N;E"],p=[],m=ze(f["!ref"]),y,T=Array.isArray(f),j=`\r
`;h.push("P;PGeneral"),h.push("F;P0;DG0G8;M255"),f["!cols"]&&l(h,f["!cols"]),f["!rows"]&&d(h,f["!rows"]),h.push("B;Y"+(m.e.r-m.s.r+1)+";X"+(m.e.c-m.s.c+1)+";D"+[m.s.c,m.s.r,m.e.c,m.e.r].join(" "));for(var R=m.s.r;R<=m.e.r;++R)for(var N=m.s.c;N<=m.e.c;++N){var F=me({r:R,c:N});y=T?(f[R]||[])[N]:f[F],!(!y||y.v==null&&(!y.f||y.F))&&p.push(c(y,f,R,N))}return h.join(j)+j+p.join(j)+j+"E"+j}return{to_workbook:o,to_sheet:s,from_sheet:u}}(),RE=function(){function e(i,s){switch(s.type){case"base64":return n(In(i),s);case"binary":return n(i,s);case"buffer":return n(_e&&Buffer.isBuffer(i)?i.toString("binary"):xt(i),s);case"array":return n(pt(i),s)}throw new Error("Unrecognized type "+s.type)}function n(i,s){for(var o=i.split(`
`),c=-1,l=-1,d=0,u=[];d!==o.length;++d){if(o[d].trim()==="BOT"){u[++c]=[],l=0;continue}if(!(c<0)){var f=o[d].trim().split(","),v=f[0],h=f[1];++d;for(var p=o[d]||"";(p.match(/["]/g)||[]).length&1&&d<o.length-1;)p+=`
`+o[++d];switch(p=p.trim(),+v){case-1:if(p==="BOT"){u[++c]=[],l=0;continue}else if(p!=="EOD")throw new Error("Unrecognized DIF special command "+p);break;case 0:p==="TRUE"?u[c][l]=!0:p==="FALSE"?u[c][l]=!1:isNaN(ea(h))?isNaN(Mt(h).getDate())?u[c][l]=h:u[c][l]=an(h):u[c][l]=ea(h),++l;break;case 1:p=p.slice(1,p.length-1),p=p.replace(/""/g,'"'),p&&p.match(/^=".*"$/)&&(p=p.slice(2,-1)),u[c][l++]=p!==""?p:null;break}if(p==="EOD")break}}return s&&s.sheetRows&&(u=u.slice(0,s.sheetRows)),u}function a(i,s){return Kt(e(i,s),s)}function t(i,s){return Xa(a(i,s),s)}var r=function(){var i=function(c,l,d,u,f){c.push(l),c.push(d+","+u),c.push('"'+f.replace(/"/g,'""')+'"')},s=function(c,l,d,u){c.push(l+","+d),c.push(l==1?'"'+u.replace(/"/g,'""')+'"':u)};return function(c){var l=[],d=ze(c["!ref"]),u,f=Array.isArray(c);i(l,"TABLE",0,1,"sheetjs"),i(l,"VECTORS",0,d.e.r-d.s.r+1,""),i(l,"TUPLES",0,d.e.c-d.s.c+1,""),i(l,"DATA",0,0,"");for(var v=d.s.r;v<=d.e.r;++v){s(l,-1,0,"BOT");for(var h=d.s.c;h<=d.e.c;++h){var p=me({r:v,c:h});if(u=f?(c[v]||[])[h]:c[p],!u){s(l,1,0,"");continue}switch(u.t){case"n":var m=u.w;!m&&u.v!=null&&(m=u.v),m==null?u.f&&!u.F?s(l,1,0,"="+u.f):s(l,1,0,""):s(l,0,m,"V");break;case"b":s(l,0,u.v?1:0,u.v?"TRUE":"FALSE");break;case"s":s(l,1,0,isNaN(u.v)?u.v:'="'+u.v+'"');break;case"d":u.w||(u.w=qn(u.z||je[14],wn(an(u.v)))),s(l,0,u.w,"V");break;default:s(l,1,0,"")}}}s(l,-1,0,"EOD");var y=`\r
`,T=l.join(y);return T}}();return{to_workbook:t,to_sheet:a,from_sheet:r}}(),IE=function(){function e(u){return u.replace(/\\b/g,"\\").replace(/\\c/g,":").replace(/\\n/g,`
`)}function n(u){return u.replace(/\\/g,"\\b").replace(/:/g,"\\c").replace(/\n/g,"\\n")}function a(u,f){for(var v=u.split(`
`),h=-1,p=-1,m=0,y=[];m!==v.length;++m){var T=v[m].trim().split(":");if(T[0]==="cell"){var j=xn(T[1]);if(y.length<=j.r)for(h=y.length;h<=j.r;++h)y[h]||(y[h]=[]);switch(h=j.r,p=j.c,T[2]){case"t":y[h][p]=e(T[3]);break;case"v":y[h][p]=+T[3];break;case"vtf":var R=T[T.length-1];case"vtc":switch(T[3]){case"nl":y[h][p]=!!+T[4];break;default:y[h][p]=+T[4];break}T[2]=="vtf"&&(y[h][p]=[y[h][p],R])}}}return f&&f.sheetRows&&(y=y.slice(0,f.sheetRows)),y}function t(u,f){return Kt(a(u,f),f)}function r(u,f){return Xa(t(u,f),f)}var i=["socialcalc:version:1.5","MIME-Version: 1.0","Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`),s=["--SocialCalcSpreadsheetControlSave","Content-type: text/plain; charset=UTF-8"].join(`
`)+`
`,o=["# SocialCalc Spreadsheet Control Save","part:sheet"].join(`
`),c="--SocialCalcSpreadsheetControlSave--";function l(u){if(!u||!u["!ref"])return"";for(var f=[],v=[],h,p="",m=Xt(u["!ref"]),y=Array.isArray(u),T=m.s.r;T<=m.e.r;++T)for(var j=m.s.c;j<=m.e.c;++j)if(p=me({r:T,c:j}),h=y?(u[T]||[])[j]:u[p],!(!h||h.v==null||h.t==="z")){switch(v=["cell",p,"t"],h.t){case"s":case"str":v.push(n(h.v));break;case"n":h.f?(v[2]="vtf",v[3]="n",v[4]=h.v,v[5]=n(h.f)):(v[2]="v",v[3]=h.v);break;case"b":v[2]="vt"+(h.f?"f":"c"),v[3]="nl",v[4]=h.v?"1":"0",v[5]=n(h.f||(h.v?"TRUE":"FALSE"));break;case"d":var R=wn(an(h.v));v[2]="vtc",v[3]="nd",v[4]=""+R,v[5]=h.w||qn(h.z||je[14],R);break;case"e":continue}f.push(v.join(":"))}return f.push("sheet:c:"+(m.e.c-m.s.c+1)+":r:"+(m.e.r-m.s.r+1)+":tvf:1"),f.push("valueformat:1:text-wiki"),f.join(`
`)}function d(u){return[i,s,o,s,l(u),c].join(`
`)}return{to_workbook:r,to_sheet:t,from_sheet:d}}(),Lr=function(){function e(d,u,f,v,h){h.raw?u[f][v]=d:d===""||(d==="TRUE"?u[f][v]=!0:d==="FALSE"?u[f][v]=!1:isNaN(ea(d))?isNaN(Mt(d).getDate())?u[f][v]=d:u[f][v]=an(d):u[f][v]=ea(d))}function n(d,u){var f=u||{},v=[];if(!d||d.length===0)return v;for(var h=d.split(/[\r\n]/),p=h.length-1;p>=0&&h[p].length===0;)--p;for(var m=10,y=0,T=0;T<=p;++T)y=h[T].indexOf(" "),y==-1?y=h[T].length:y++,m=Math.max(m,y);for(T=0;T<=p;++T){v[T]=[];var j=0;for(e(h[T].slice(0,m).trim(),v,T,j,f),j=1;j<=(h[T].length-m)/10+1;++j)e(h[T].slice(m+(j-1)*10,m+j*10).trim(),v,T,j,f)}return f.sheetRows&&(v=v.slice(0,f.sheetRows)),v}var a={44:",",9:"	",59:";",124:"|"},t={44:3,9:2,59:1,124:0};function r(d){for(var u={},f=!1,v=0,h=0;v<d.length;++v)(h=d.charCodeAt(v))==34?f=!f:!f&&h in a&&(u[h]=(u[h]||0)+1);h=[];for(v in u)Object.prototype.hasOwnProperty.call(u,v)&&h.push([u[v],v]);if(!h.length){u=t;for(v in u)Object.prototype.hasOwnProperty.call(u,v)&&h.push([u[v],v])}return h.sort(function(p,m){return p[0]-m[0]||t[p[1]]-t[m[1]]}),a[h.pop()[1]]||44}function i(d,u){var f=u||{},v="",h=f.dense?[]:{},p={s:{c:0,r:0},e:{c:0,r:0}};d.slice(0,4)=="sep="?d.charCodeAt(5)==13&&d.charCodeAt(6)==10?(v=d.charAt(4),d=d.slice(7)):d.charCodeAt(5)==13||d.charCodeAt(5)==10?(v=d.charAt(4),d=d.slice(6)):v=r(d.slice(0,1024)):f&&f.FS?v=f.FS:v=r(d.slice(0,1024));var m=0,y=0,T=0,j=0,R=0,N=v.charCodeAt(0),F=!1,_=0,M=d.charCodeAt(0);d=d.replace(/\r\n/mg,`
`);var I=f.dateNF!=null?H_(f.dateNF):null;function X(){var W=d.slice(j,R),x={};if(W.charAt(0)=='"'&&W.charAt(W.length-1)=='"'&&(W=W.slice(1,-1).replace(/""/g,'"')),W.length===0)x.t="z";else if(f.raw)x.t="s",x.v=W;else if(W.trim().length===0)x.t="s",x.v=W;else if(W.charCodeAt(0)==61)W.charCodeAt(1)==34&&W.charCodeAt(W.length-1)==34?(x.t="s",x.v=W.slice(2,-1).replace(/""/g,'"')):xA(W)?(x.t="n",x.f=W.slice(1)):(x.t="s",x.v=W);else if(W=="TRUE")x.t="b",x.v=!0;else if(W=="FALSE")x.t="b",x.v=!1;else if(!isNaN(T=ea(W)))x.t="n",f.cellText!==!1&&(x.w=W),x.v=T;else if(!isNaN(Mt(W).getDate())||I&&W.match(I)){x.z=f.dateNF||je[14];var C=0;I&&W.match(I)&&(W=W_(W,f.dateNF,W.match(I)||[]),C=1),f.cellDates?(x.t="d",x.v=an(W,C)):(x.t="n",x.v=wn(an(W,C))),f.cellText!==!1&&(x.w=qn(x.z,x.v instanceof Date?wn(x.v):x.v)),f.cellNF||delete x.z}else x.t="s",x.v=W;if(x.t=="z"||(f.dense?(h[m]||(h[m]=[]),h[m][y]=x):h[me({c:y,r:m})]=x),j=R+1,M=d.charCodeAt(j),p.e.c<y&&(p.e.c=y),p.e.r<m&&(p.e.r=m),_==N)++y;else if(y=0,++m,f.sheetRows&&f.sheetRows<=m)return!0}e:for(;R<d.length;++R)switch(_=d.charCodeAt(R)){case 34:M===34&&(F=!F);break;case N:case 10:case 13:if(!F&&X())break e;break}return R-j>0&&X(),h["!ref"]=Ee(p),h}function s(d,u){return!(u&&u.PRN)||u.FS||d.slice(0,4)=="sep="||d.indexOf("	")>=0||d.indexOf(",")>=0||d.indexOf(";")>=0?i(d,u):Kt(n(d,u),u)}function o(d,u){var f="",v=u.type=="string"?[0,0,0,0]:wl(d,u);switch(u.type){case"base64":f=In(d);break;case"binary":f=d;break;case"buffer":u.codepage==65001?f=d.toString("utf8"):(u.codepage,f=_e&&Buffer.isBuffer(d)?d.toString("binary"):xt(d));break;case"array":f=pt(d);break;case"string":f=d;break;default:throw new Error("Unrecognized type "+u.type)}return v[0]==239&&v[1]==187&&v[2]==191?f=Oe(f.slice(3)):u.type!="string"&&u.type!="buffer"&&u.codepage==65001?f=Oe(f):u.type=="binary",f.slice(0,19)=="socialcalc:version:"?IE.to_sheet(u.type=="string"?f:Oe(f),u):s(f,u)}function c(d,u){return Xa(o(d,u),u)}function l(d){for(var u=[],f=ze(d["!ref"]),v,h=Array.isArray(d),p=f.s.r;p<=f.e.r;++p){for(var m=[],y=f.s.c;y<=f.e.c;++y){var T=me({r:p,c:y});if(v=h?(d[p]||[])[y]:d[T],!v||v.v==null){m.push("          ");continue}for(var j=(v.w||(_a(v),v.w)||"").slice(0,10);j.length<10;)j+=" ";m.push(j+(y===0?" ":""))}u.push(m.join(""))}return u.join(`
`)}return{to_workbook:c,to_sheet:o,from_sheet:l}}();function DE(e,n){var a=n||{},t=!!a.WTF;a.WTF=!0;try{var r=OE.to_workbook(e,a);return a.WTF=t,r}catch(i){if(a.WTF=t,!i.message.match(/SYLK bad record ID/)&&t)throw i;return Lr.to_workbook(e,n)}}var br=function(){function e(k,B,P){if(k){tn(k,k.l||0);for(var D=P.Enum||ie;k.l<k.length;){var Z=k.read_shift(2),re=D[Z]||D[65535],le=k.read_shift(2),se=k.l+le,ae=re.f&&re.f(k,le,P);if(k.l=se,B(ae,re,Z))return}}}function n(k,B){switch(B.type){case"base64":return a(Kn(In(k)),B);case"binary":return a(Kn(k),B);case"buffer":case"array":return a(k,B)}throw"Unsupported type "+B.type}function a(k,B){if(!k)return k;var P=B||{},D=P.dense?[]:{},Z="Sheet1",re="",le=0,se={},ae=[],Te=[],O={s:{r:0,c:0},e:{r:0,c:0}},$e=P.sheetRows||0;if(k[2]==0&&(k[3]==8||k[3]==9)&&k.length>=16&&k[14]==5&&k[15]===108)throw new Error("Unsupported Works 3 for Mac file");if(k[2]==2)P.Enum=ie,e(k,function(de,qe,Pn){switch(Pn){case 0:P.vers=de,de>=4096&&(P.qpro=!0);break;case 6:O=de;break;case 204:de&&(re=de);break;case 222:re=de;break;case 15:case 51:P.qpro||(de[1].v=de[1].v.slice(1));case 13:case 14:case 16:Pn==14&&(de[2]&112)==112&&(de[2]&15)>1&&(de[2]&15)<15&&(de[1].z=P.dateNF||je[14],P.cellDates&&(de[1].t="d",de[1].v=Os(de[1].v))),P.qpro&&de[3]>le&&(D["!ref"]=Ee(O),se[Z]=D,ae.push(Z),D=P.dense?[]:{},O={s:{r:0,c:0},e:{r:0,c:0}},le=de[3],Z=re||"Sheet"+(le+1),re="");var ra=P.dense?(D[de[0].r]||[])[de[0].c]:D[me(de[0])];if(ra){ra.t=de[1].t,ra.v=de[1].v,de[1].z!=null&&(ra.z=de[1].z),de[1].f!=null&&(ra.f=de[1].f);break}P.dense?(D[de[0].r]||(D[de[0].r]=[]),D[de[0].r][de[0].c]=de[1]):D[me(de[0])]=de[1];break}},P);else if(k[2]==26||k[2]==14)P.Enum=ce,k[2]==14&&(P.qpro=!0,k.l=0),e(k,function(de,qe,Pn){switch(Pn){case 204:Z=de;break;case 22:de[1].v=de[1].v.slice(1);case 23:case 24:case 25:case 37:case 39:case 40:if(de[3]>le&&(D["!ref"]=Ee(O),se[Z]=D,ae.push(Z),D=P.dense?[]:{},O={s:{r:0,c:0},e:{r:0,c:0}},le=de[3],Z="Sheet"+(le+1)),$e>0&&de[0].r>=$e)break;P.dense?(D[de[0].r]||(D[de[0].r]=[]),D[de[0].r][de[0].c]=de[1]):D[me(de[0])]=de[1],O.e.c<de[0].c&&(O.e.c=de[0].c),O.e.r<de[0].r&&(O.e.r=de[0].r);break;case 27:de[14e3]&&(Te[de[14e3][0]]=de[14e3][1]);break;case 1537:Te[de[0]]=de[1],de[0]==le&&(Z=de[1]);break}},P);else throw new Error("Unrecognized LOTUS BOF "+k[2]);if(D["!ref"]=Ee(O),se[re||Z]=D,ae.push(re||Z),!Te.length)return{SheetNames:ae,Sheets:se};for(var Se={},Ce=[],we=0;we<Te.length;++we)se[ae[we]]?(Ce.push(Te[we]||ae[we]),Se[Te[we]]=se[Te[we]]||se[ae[we]]):(Ce.push(Te[we]),Se[Te[we]]={"!ref":"A1"});return{SheetNames:Ce,Sheets:Se}}function t(k,B){var P=B||{};if(+P.codepage>=0&&Yn(+P.codepage),P.type=="string")throw new Error("Cannot write WK1 to JS string");var D=Jo(),Z=ze(k["!ref"]),re=Array.isArray(k),le=[];Gn(D,0,i(1030)),Gn(D,6,c(Z));for(var se=Math.min(Z.e.r,8191),ae=Z.s.r;ae<=se;++ae)for(var Te=sn(ae),O=Z.s.c;O<=Z.e.c;++O){ae===Z.s.r&&(le[O]=Ze(O));var $e=le[O]+Te,Se=re?(k[ae]||[])[O]:k[$e];if(!(!Se||Se.t=="z"))if(Se.t=="n")(Se.v|0)==Se.v&&Se.v>=-32768&&Se.v<=32767?Gn(D,13,v(ae,O,Se.v)):Gn(D,14,p(ae,O,Se.v));else{var Ce=_a(Se);Gn(D,15,u(ae,O,Ce.slice(0,239)))}}return Gn(D,1),D.end()}function r(k,B){var P=B||{};if(+P.codepage>=0&&Yn(+P.codepage),P.type=="string")throw new Error("Cannot write WK3 to JS string");var D=Jo();Gn(D,0,s(k));for(var Z=0,re=0;Z<k.SheetNames.length;++Z)(k.Sheets[k.SheetNames[Z]]||{})["!ref"]&&Gn(D,27,L(k.SheetNames[Z],re++));var le=0;for(Z=0;Z<k.SheetNames.length;++Z){var se=k.Sheets[k.SheetNames[Z]];if(!(!se||!se["!ref"])){for(var ae=ze(se["!ref"]),Te=Array.isArray(se),O=[],$e=Math.min(ae.e.r,8191),Se=ae.s.r;Se<=$e;++Se)for(var Ce=sn(Se),we=ae.s.c;we<=ae.e.c;++we){Se===ae.s.r&&(O[we]=Ze(we));var de=O[we]+Ce,qe=Te?(se[Se]||[])[we]:se[de];if(!(!qe||qe.t=="z"))if(qe.t=="n")Gn(D,23,X(Se,we,le,qe.v));else{var Pn=_a(qe);Gn(D,22,_(Se,we,le,Pn.slice(0,239)))}}++le}}return Gn(D,1),D.end()}function i(k){var B=Je(2);return B.write_shift(2,k),B}function s(k){var B=Je(26);B.write_shift(2,4096),B.write_shift(2,4),B.write_shift(4,0);for(var P=0,D=0,Z=0,re=0;re<k.SheetNames.length;++re){var le=k.SheetNames[re],se=k.Sheets[le];if(!(!se||!se["!ref"])){++Z;var ae=Xt(se["!ref"]);P<ae.e.r&&(P=ae.e.r),D<ae.e.c&&(D=ae.e.c)}}return P>8191&&(P=8191),B.write_shift(2,P),B.write_shift(1,Z),B.write_shift(1,D),B.write_shift(2,0),B.write_shift(2,0),B.write_shift(1,1),B.write_shift(1,2),B.write_shift(4,0),B.write_shift(4,0),B}function o(k,B,P){var D={s:{c:0,r:0},e:{c:0,r:0}};return B==8&&P.qpro?(D.s.c=k.read_shift(1),k.l++,D.s.r=k.read_shift(2),D.e.c=k.read_shift(1),k.l++,D.e.r=k.read_shift(2),D):(D.s.c=k.read_shift(2),D.s.r=k.read_shift(2),B==12&&P.qpro&&(k.l+=2),D.e.c=k.read_shift(2),D.e.r=k.read_shift(2),B==12&&P.qpro&&(k.l+=2),D.s.c==65535&&(D.s.c=D.e.c=D.s.r=D.e.r=0),D)}function c(k){var B=Je(8);return B.write_shift(2,k.s.c),B.write_shift(2,k.s.r),B.write_shift(2,k.e.c),B.write_shift(2,k.e.r),B}function l(k,B,P){var D=[{c:0,r:0},{t:"n",v:0},0,0];return P.qpro&&P.vers!=20768?(D[0].c=k.read_shift(1),D[3]=k.read_shift(1),D[0].r=k.read_shift(2),k.l+=2):(D[2]=k.read_shift(1),D[0].c=k.read_shift(2),D[0].r=k.read_shift(2)),D}function d(k,B,P){var D=k.l+B,Z=l(k,B,P);if(Z[1].t="s",P.vers==20768){k.l++;var re=k.read_shift(1);return Z[1].v=k.read_shift(re,"utf8"),Z}return P.qpro&&k.l++,Z[1].v=k.read_shift(D-k.l,"cstr"),Z}function u(k,B,P){var D=Je(7+P.length);D.write_shift(1,255),D.write_shift(2,B),D.write_shift(2,k),D.write_shift(1,39);for(var Z=0;Z<D.length;++Z){var re=P.charCodeAt(Z);D.write_shift(1,re>=128?95:re)}return D.write_shift(1,0),D}function f(k,B,P){var D=l(k,B,P);return D[1].v=k.read_shift(2,"i"),D}function v(k,B,P){var D=Je(7);return D.write_shift(1,255),D.write_shift(2,B),D.write_shift(2,k),D.write_shift(2,P,"i"),D}function h(k,B,P){var D=l(k,B,P);return D[1].v=k.read_shift(8,"f"),D}function p(k,B,P){var D=Je(13);return D.write_shift(1,255),D.write_shift(2,B),D.write_shift(2,k),D.write_shift(8,P,"f"),D}function m(k,B,P){var D=k.l+B,Z=l(k,B,P);if(Z[1].v=k.read_shift(8,"f"),P.qpro)k.l=D;else{var re=k.read_shift(2);R(k.slice(k.l,k.l+re),Z),k.l+=re}return Z}function y(k,B,P){var D=B&32768;return B&=-32769,B=(D?k:0)+(B>=8192?B-16384:B),(D?"":"$")+(P?Ze(B):sn(B))}var T={51:["FALSE",0],52:["TRUE",0],70:["LEN",1],80:["SUM",69],81:["AVERAGEA",69],82:["COUNTA",69],83:["MINA",69],84:["MAXA",69],111:["T",1]},j=["","","","","","","","","","+","-","*","/","^","=","<>","<=",">=","<",">","","","","","&","","","","","","",""];function R(k,B){tn(k,0);for(var P=[],D=0,Z="",re="",le="",se="";k.l<k.length;){var ae=k[k.l++];switch(ae){case 0:P.push(k.read_shift(8,"f"));break;case 1:re=y(B[0].c,k.read_shift(2),!0),Z=y(B[0].r,k.read_shift(2),!1),P.push(re+Z);break;case 2:{var Te=y(B[0].c,k.read_shift(2),!0),O=y(B[0].r,k.read_shift(2),!1);re=y(B[0].c,k.read_shift(2),!0),Z=y(B[0].r,k.read_shift(2),!1),P.push(Te+O+":"+re+Z)}break;case 3:if(k.l<k.length){console.error("WK1 premature formula end");return}break;case 4:P.push("("+P.pop()+")");break;case 5:P.push(k.read_shift(2));break;case 6:{for(var $e="";ae=k[k.l++];)$e+=String.fromCharCode(ae);P.push('"'+$e.replace(/"/g,'""')+'"')}break;case 8:P.push("-"+P.pop());break;case 23:P.push("+"+P.pop());break;case 22:P.push("NOT("+P.pop()+")");break;case 20:case 21:se=P.pop(),le=P.pop(),P.push(["AND","OR"][ae-20]+"("+le+","+se+")");break;default:if(ae<32&&j[ae])se=P.pop(),le=P.pop(),P.push(le+j[ae]+se);else if(T[ae]){if(D=T[ae][1],D==69&&(D=k[k.l++]),D>P.length){console.error("WK1 bad formula parse 0x"+ae.toString(16)+":|"+P.join("|")+"|");return}var Se=P.slice(-D);P.length-=D,P.push(T[ae][0]+"("+Se.join(",")+")")}else return ae<=7?console.error("WK1 invalid opcode "+ae.toString(16)):ae<=24?console.error("WK1 unsupported op "+ae.toString(16)):ae<=30?console.error("WK1 invalid opcode "+ae.toString(16)):ae<=115?console.error("WK1 unsupported function opcode "+ae.toString(16)):console.error("WK1 unrecognized opcode "+ae.toString(16))}}P.length==1?B[1].f=""+P[0]:console.error("WK1 bad formula parse |"+P.join("|")+"|")}function N(k){var B=[{c:0,r:0},{t:"n",v:0},0];return B[0].r=k.read_shift(2),B[3]=k[k.l++],B[0].c=k[k.l++],B}function F(k,B){var P=N(k);return P[1].t="s",P[1].v=k.read_shift(B-4,"cstr"),P}function _(k,B,P,D){var Z=Je(6+D.length);Z.write_shift(2,k),Z.write_shift(1,P),Z.write_shift(1,B),Z.write_shift(1,39);for(var re=0;re<D.length;++re){var le=D.charCodeAt(re);Z.write_shift(1,le>=128?95:le)}return Z.write_shift(1,0),Z}function M(k,B){var P=N(k);P[1].v=k.read_shift(2);var D=P[1].v>>1;if(P[1].v&1)switch(D&7){case 0:D=(D>>3)*5e3;break;case 1:D=(D>>3)*500;break;case 2:D=(D>>3)/20;break;case 3:D=(D>>3)/200;break;case 4:D=(D>>3)/2e3;break;case 5:D=(D>>3)/2e4;break;case 6:D=(D>>3)/16;break;case 7:D=(D>>3)/64;break}return P[1].v=D,P}function I(k,B){var P=N(k),D=k.read_shift(4),Z=k.read_shift(4),re=k.read_shift(2);if(re==65535)return D===0&&Z===3221225472?(P[1].t="e",P[1].v=15):D===0&&Z===3489660928?(P[1].t="e",P[1].v=42):P[1].v=0,P;var le=re&32768;return re=(re&32767)-16446,P[1].v=(1-le*2)*(Z*Math.pow(2,re+32)+D*Math.pow(2,re)),P}function X(k,B,P,D){var Z=Je(14);if(Z.write_shift(2,k),Z.write_shift(1,P),Z.write_shift(1,B),D==0)return Z.write_shift(4,0),Z.write_shift(4,0),Z.write_shift(2,65535),Z;var re=0,le=0,se=0,ae=0;return D<0&&(re=1,D=-D),le=Math.log2(D)|0,D/=Math.pow(2,le-31),ae=D>>>0,(ae&2147483648)==0&&(D/=2,++le,ae=D>>>0),D-=ae,ae|=2147483648,ae>>>=0,D*=Math.pow(2,32),se=D>>>0,Z.write_shift(4,se),Z.write_shift(4,ae),le+=16383+(re?32768:0),Z.write_shift(2,le),Z}function W(k,B){var P=I(k);return k.l+=B-14,P}function x(k,B){var P=N(k),D=k.read_shift(4);return P[1].v=D>>6,P}function C(k,B){var P=N(k),D=k.read_shift(8,"f");return P[1].v=D,P}function U(k,B){var P=C(k);return k.l+=B-10,P}function K(k,B){return k[k.l+B-1]==0?k.read_shift(B,"cstr"):""}function Q(k,B){var P=k[k.l++];P>B-1&&(P=B-1);for(var D="";D.length<P;)D+=String.fromCharCode(k[k.l++]);return D}function ee(k,B,P){if(!(!P.qpro||B<21)){var D=k.read_shift(1);k.l+=17,k.l+=1,k.l+=2;var Z=k.read_shift(B-21,"cstr");return[D,Z]}}function ve(k,B){for(var P={},D=k.l+B;k.l<D;){var Z=k.read_shift(2);if(Z==14e3){for(P[Z]=[0,""],P[Z][0]=k.read_shift(2);k[k.l];)P[Z][1]+=String.fromCharCode(k[k.l]),k.l++;k.l++}}return P}function L(k,B){var P=Je(5+k.length);P.write_shift(2,14e3),P.write_shift(2,B);for(var D=0;D<k.length;++D){var Z=k.charCodeAt(D);P[P.l++]=Z>127?95:Z}return P[P.l++]=0,P}var ie={0:{n:"BOF",f:Ke},1:{n:"EOF"},2:{n:"CALCMODE"},3:{n:"CALCORDER"},4:{n:"SPLIT"},5:{n:"SYNC"},6:{n:"RANGE",f:o},7:{n:"WINDOW1"},8:{n:"COLW1"},9:{n:"WINTWO"},10:{n:"COLW2"},11:{n:"NAME"},12:{n:"BLANK"},13:{n:"INTEGER",f},14:{n:"NUMBER",f:h},15:{n:"LABEL",f:d},16:{n:"FORMULA",f:m},24:{n:"TABLE"},25:{n:"ORANGE"},26:{n:"PRANGE"},27:{n:"SRANGE"},28:{n:"FRANGE"},29:{n:"KRANGE1"},32:{n:"HRANGE"},35:{n:"KRANGE2"},36:{n:"PROTEC"},37:{n:"FOOTER"},38:{n:"HEADER"},39:{n:"SETUP"},40:{n:"MARGINS"},41:{n:"LABELFMT"},42:{n:"TITLES"},43:{n:"SHEETJS"},45:{n:"GRAPH"},46:{n:"NGRAPH"},47:{n:"CALCCOUNT"},48:{n:"UNFORMATTED"},49:{n:"CURSORW12"},50:{n:"WINDOW"},51:{n:"STRING",f:d},55:{n:"PASSWORD"},56:{n:"LOCKED"},60:{n:"QUERY"},61:{n:"QUERYNAME"},62:{n:"PRINT"},63:{n:"PRINTNAME"},64:{n:"GRAPH2"},65:{n:"GRAPHNAME"},66:{n:"ZOOM"},67:{n:"SYMSPLIT"},68:{n:"NSROWS"},69:{n:"NSCOLS"},70:{n:"RULER"},71:{n:"NNAME"},72:{n:"ACOMM"},73:{n:"AMACRO"},74:{n:"PARSE"},102:{n:"PRANGES??"},103:{n:"RRANGES??"},104:{n:"FNAME??"},105:{n:"MRANGES??"},204:{n:"SHEETNAMECS",f:K},222:{n:"SHEETNAMELP",f:Q},65535:{n:""}},ce={0:{n:"BOF"},1:{n:"EOF"},2:{n:"PASSWORD"},3:{n:"CALCSET"},4:{n:"WINDOWSET"},5:{n:"SHEETCELLPTR"},6:{n:"SHEETLAYOUT"},7:{n:"COLUMNWIDTH"},8:{n:"HIDDENCOLUMN"},9:{n:"USERRANGE"},10:{n:"SYSTEMRANGE"},11:{n:"ZEROFORCE"},12:{n:"SORTKEYDIR"},13:{n:"FILESEAL"},14:{n:"DATAFILLNUMS"},15:{n:"PRINTMAIN"},16:{n:"PRINTSTRING"},17:{n:"GRAPHMAIN"},18:{n:"GRAPHSTRING"},19:{n:"??"},20:{n:"ERRCELL"},21:{n:"NACELL"},22:{n:"LABEL16",f:F},23:{n:"NUMBER17",f:I},24:{n:"NUMBER18",f:M},25:{n:"FORMULA19",f:W},26:{n:"FORMULA1A"},27:{n:"XFORMAT",f:ve},28:{n:"DTLABELMISC"},29:{n:"DTLABELCELL"},30:{n:"GRAPHWINDOW"},31:{n:"CPA"},32:{n:"LPLAUTO"},33:{n:"QUERY"},34:{n:"HIDDENSHEET"},35:{n:"??"},37:{n:"NUMBER25",f:x},38:{n:"??"},39:{n:"NUMBER27",f:C},40:{n:"FORMULA28",f:U},142:{n:"??"},147:{n:"??"},150:{n:"??"},151:{n:"??"},152:{n:"??"},153:{n:"??"},154:{n:"??"},155:{n:"??"},156:{n:"??"},163:{n:"??"},174:{n:"??"},175:{n:"??"},176:{n:"??"},177:{n:"??"},184:{n:"??"},185:{n:"??"},186:{n:"??"},187:{n:"??"},188:{n:"??"},195:{n:"??"},201:{n:"??"},204:{n:"SHEETNAMECS",f:K},205:{n:"??"},206:{n:"??"},207:{n:"??"},208:{n:"??"},256:{n:"??"},259:{n:"??"},260:{n:"??"},261:{n:"??"},262:{n:"??"},263:{n:"??"},265:{n:"??"},266:{n:"??"},267:{n:"??"},268:{n:"??"},270:{n:"??"},271:{n:"??"},384:{n:"??"},389:{n:"??"},390:{n:"??"},393:{n:"??"},396:{n:"??"},512:{n:"??"},514:{n:"??"},513:{n:"??"},516:{n:"??"},517:{n:"??"},640:{n:"??"},641:{n:"??"},642:{n:"??"},643:{n:"??"},644:{n:"??"},645:{n:"??"},646:{n:"??"},647:{n:"??"},648:{n:"??"},658:{n:"??"},659:{n:"??"},660:{n:"??"},661:{n:"??"},662:{n:"??"},665:{n:"??"},666:{n:"??"},768:{n:"??"},772:{n:"??"},1537:{n:"SHEETINFOQP",f:ee},1600:{n:"??"},1602:{n:"??"},1793:{n:"??"},1794:{n:"??"},1795:{n:"??"},1796:{n:"??"},1920:{n:"??"},2048:{n:"??"},2049:{n:"??"},2052:{n:"??"},2688:{n:"??"},10998:{n:"??"},12849:{n:"??"},28233:{n:"??"},28484:{n:"??"},65535:{n:""}};return{sheet_to_wk1:t,book_to_wk3:r,to_workbook:n}}();function PE(e){var n={},a=e.match(hn),t=0,r=!1;if(a)for(;t!=a.length;++t){var i=pe(a[t]);switch(i[0].replace(/\w*:/g,"")){case"<condense":break;case"<extend":break;case"<shadow":if(!i.val)break;case"<shadow>":case"<shadow/>":n.shadow=1;break;case"</shadow>":break;case"<charset":if(i.val=="1")break;n.cp=Zc[parseInt(i.val,10)];break;case"<outline":if(!i.val)break;case"<outline>":case"<outline/>":n.outline=1;break;case"</outline>":break;case"<rFont":n.name=i.val;break;case"<sz":n.sz=i.val;break;case"<strike":if(!i.val)break;case"<strike>":case"<strike/>":n.strike=1;break;case"</strike>":break;case"<u":if(!i.val)break;switch(i.val){case"double":n.uval="double";break;case"singleAccounting":n.uval="single-accounting";break;case"doubleAccounting":n.uval="double-accounting";break}case"<u>":case"<u/>":n.u=1;break;case"</u>":break;case"<b":if(i.val=="0")break;case"<b>":case"<b/>":n.b=1;break;case"</b>":break;case"<i":if(i.val=="0")break;case"<i>":case"<i/>":n.i=1;break;case"</i>":break;case"<color":i.rgb&&(n.color=i.rgb.slice(2,8));break;case"<color>":case"<color/>":case"</color>":break;case"<family":n.family=i.val;break;case"<family>":case"<family/>":case"</family>":break;case"<vertAlign":n.valign=i.val;break;case"<vertAlign>":case"<vertAlign/>":case"</vertAlign>":break;case"<scheme":break;case"<scheme>":case"<scheme/>":case"</scheme>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":r=!0;break;case"</ext>":r=!1;break;default:if(i[0].charCodeAt(1)!==47&&!r)throw new Error("Unrecognized rich format "+i[0])}}return n}var NE=function(){var e=Pr("t"),n=Pr("rPr");function a(i){var s=i.match(e);if(!s)return{t:"s",v:""};var o={t:"s",v:Ae(s[1])},c=i.match(n);return c&&(o.s=PE(c[1])),o}var t=/<(?:\w+:)?r>/g,r=/<\/(?:\w+:)?r>/;return function(s){return s.replace(t,"").split(r).map(a).filter(function(o){return o.v})}}(),LE=function(){var n=/(\r\n|\n)/g;function a(r,i,s){var o=[];r.u&&o.push("text-decoration: underline;"),r.uval&&o.push("text-underline-style:"+r.uval+";"),r.sz&&o.push("font-size:"+r.sz+"pt;"),r.outline&&o.push("text-effect: outline;"),r.shadow&&o.push("text-shadow: auto;"),i.push('<span style="'+o.join("")+'">'),r.b&&(i.push("<b>"),s.push("</b>")),r.i&&(i.push("<i>"),s.push("</i>")),r.strike&&(i.push("<s>"),s.push("</s>"));var c=r.valign||"";return c=="superscript"||c=="super"?c="sup":c=="subscript"&&(c="sub"),c!=""&&(i.push("<"+c+">"),s.push("</"+c+">")),s.push("</span>"),r}function t(r){var i=[[],r.v,[]];return r.v?(r.s&&a(r.s,i[0],i[2]),i[0].join("")+i[1].replace(n,"<br/>")+i[2].join("")):""}return function(i){return i.map(t).join("")}}(),ME=/<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,BE=/<(?:\w+:)?r>/,UE=/<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;function hl(e,n){var a=n?n.cellHTML:!0,t={};return e?(e.match(/^\s*<(?:\w+:)?t[^>]*>/)?(t.t=Ae(Oe(e.slice(e.indexOf(">")+1).split(/<\/(?:\w+:)?t>/)[0]||"")),t.r=Oe(e),a&&(t.h=il(t.t))):e.match(BE)&&(t.r=Oe(e),t.t=Ae(Oe((e.replace(UE,"").match(ME)||[]).join("").replace(hn,""))),a&&(t.h=LE(NE(t.r)))),t):{t:""}}var zE=/<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,$E=/<(?:\w+:)?(?:si|sstItem)>/g,qE=/<\/(?:\w+:)?(?:si|sstItem)>/;function HE(e,n){var a=[],t="";if(!e)return a;var r=e.match(zE);if(r){t=r[2].replace($E,"").split(qE);for(var i=0;i!=t.length;++i){var s=hl(t[i].trim(),n);s!=null&&(a[a.length]=s)}r=pe(r[1]),a.Count=r.count,a.Unique=r.uniqueCount}return a}function WE(e){return[e.read_shift(4),e.read_shift(4)]}function GE(e,n){var a=[],t=!1;return ka(e,function(i,s,o){switch(o){case 159:a.Count=i[0],a.Unique=i[1];break;case 19:a.push(i);break;case 160:return!0;case 35:t=!0;break;case 36:t=!1;break;default:if(s.T,!t||n.WTF)throw new Error("Unexpected record 0x"+o.toString(16))}}),a}function Dp(e){for(var n=[],a=e.split(""),t=0;t<a.length;++t)n[t]=a[t].charCodeAt(0);return n}function ba(e,n){var a={};return a.Major=e.read_shift(2),a.Minor=e.read_shift(2),n>=4&&(e.l+=n-4),a}function VE(e){var n={};return n.id=e.read_shift(0,"lpp4"),n.R=ba(e,4),n.U=ba(e,4),n.W=ba(e,4),n}function XE(e){for(var n=e.read_shift(4),a=e.l+n-4,t={},r=e.read_shift(4),i=[];r-- >0;)i.push({t:e.read_shift(4),v:e.read_shift(0,"lpp4")});if(t.name=e.read_shift(0,"lpp4"),t.comps=i,e.l!=a)throw new Error("Bad DataSpaceMapEntry: "+e.l+" != "+a);return t}function KE(e){var n=[];e.l+=4;for(var a=e.read_shift(4);a-- >0;)n.push(XE(e));return n}function YE(e){var n=[];e.l+=4;for(var a=e.read_shift(4);a-- >0;)n.push(e.read_shift(0,"lpp4"));return n}function JE(e){var n={};return e.read_shift(4),e.l+=4,n.id=e.read_shift(0,"lpp4"),n.name=e.read_shift(0,"lpp4"),n.R=ba(e,4),n.U=ba(e,4),n.W=ba(e,4),n}function ZE(e){var n=JE(e);if(n.ename=e.read_shift(0,"8lpp4"),n.blksz=e.read_shift(4),n.cmode=e.read_shift(4),e.read_shift(4)!=4)throw new Error("Bad !Primary record");return n}function Pp(e,n){var a=e.l+n,t={};t.Flags=e.read_shift(4)&63,e.l+=4,t.AlgID=e.read_shift(4);var r=!1;switch(t.AlgID){case 26126:case 26127:case 26128:r=t.Flags==36;break;case 26625:r=t.Flags==4;break;case 0:r=t.Flags==16||t.Flags==4||t.Flags==36;break;default:throw"Unrecognized encryption algorithm: "+t.AlgID}if(!r)throw new Error("Encryption Flags/AlgID mismatch");return t.AlgIDHash=e.read_shift(4),t.KeySize=e.read_shift(4),t.ProviderType=e.read_shift(4),e.l+=8,t.CSPName=e.read_shift(a-e.l>>1,"utf16le"),e.l=a,t}function Np(e,n){var a={},t=e.l+n;return e.l+=4,a.Salt=e.slice(e.l,e.l+16),e.l+=16,a.Verifier=e.slice(e.l,e.l+16),e.l+=16,e.read_shift(4),a.VerifierHash=e.slice(e.l,t),e.l=t,a}function QE(e){var n=ba(e);switch(n.Minor){case 2:return[n.Minor,eT(e)];case 3:return[n.Minor,nT()];case 4:return[n.Minor,aT(e)]}throw new Error("ECMA-376 Encrypted file unrecognized Version: "+n.Minor)}function eT(e){var n=e.read_shift(4);if((n&63)!=36)throw new Error("EncryptionInfo mismatch");var a=e.read_shift(4),t=Pp(e,a),r=Np(e,e.length-e.l);return{t:"Std",h:t,v:r}}function nT(){throw new Error("File is password-protected: ECMA-376 Extensible")}function aT(e){var n=["saltSize","blockSize","keyBits","hashSize","cipherAlgorithm","cipherChaining","hashAlgorithm","saltValue"];e.l+=4;var a=e.read_shift(e.length-e.l,"utf8"),t={};return a.replace(hn,function(i){var s=pe(i);switch(va(s[0])){case"<?xml":break;case"<encryption":case"</encryption>":break;case"<keyData":n.forEach(function(o){t[o]=s[o]});break;case"<dataIntegrity":t.encryptedHmacKey=s.encryptedHmacKey,t.encryptedHmacValue=s.encryptedHmacValue;break;case"<keyEncryptors>":case"<keyEncryptors":t.encs=[];break;case"</keyEncryptors>":break;case"<keyEncryptor":t.uri=s.uri;break;case"</keyEncryptor>":break;case"<encryptedKey":t.encs.push(s);break;default:throw s[0]}}),t}function tT(e,n){var a={},t=a.EncryptionVersionInfo=ba(e,4);if(n-=4,t.Minor!=2)throw new Error("unrecognized minor version code: "+t.Minor);if(t.Major>4||t.Major<2)throw new Error("unrecognized major version code: "+t.Major);a.Flags=e.read_shift(4),n-=4;var r=e.read_shift(4);return n-=4,a.EncryptionHeader=Pp(e,r),n-=r,a.EncryptionVerifier=Np(e,n),a}function rT(e){var n={},a=n.EncryptionVersionInfo=ba(e,4);if(a.Major!=1||a.Minor!=1)throw"unrecognized version code "+a.Major+" : "+a.Minor;return n.Salt=e.read_shift(16),n.EncryptedVerifier=e.read_shift(16),n.EncryptedVerifierHash=e.read_shift(16),n}function iT(e){var n=0,a,t=Dp(e),r=t.length+1,i,s,o,c,l;for(a=Ha(r),a[0]=t.length,i=1;i!=r;++i)a[i]=t[i-1];for(i=r-1;i>=0;--i)s=a[i],o=(n&16384)===0?0:1,c=n<<1&32767,l=o|c,n=l^s;return n^52811}var Lp=function(){var e=[187,255,255,186,255,255,185,128,0,190,15,0,191,15,0],n=[57840,7439,52380,33984,4364,3600,61902,12606,6258,57657,54287,34041,10252,43370,20163],a=[44796,19929,39858,10053,20106,40212,10761,31585,63170,64933,60267,50935,40399,11199,17763,35526,1453,2906,5812,11624,23248,885,1770,3540,7080,14160,28320,56640,55369,41139,20807,41614,21821,43642,17621,28485,56970,44341,19019,38038,14605,29210,60195,50791,40175,10751,21502,43004,24537,18387,36774,3949,7898,15796,31592,63184,47201,24803,49606,37805,14203,28406,56812,17824,35648,1697,3394,6788,13576,27152,43601,17539,35078,557,1114,2228,4456,30388,60776,51953,34243,7079,14158,28316,14128,28256,56512,43425,17251,34502,7597,13105,26210,52420,35241,883,1766,3532,4129,8258,16516,33032,4657,9314,18628],t=function(s){return(s/2|s*128)&255},r=function(s,o){return t(s^o)},i=function(s){for(var o=n[s.length-1],c=104,l=s.length-1;l>=0;--l)for(var d=s[l],u=0;u!=7;++u)d&64&&(o^=a[c]),d*=2,--c;return o};return function(s){for(var o=Dp(s),c=i(o),l=o.length,d=Ha(16),u=0;u!=16;++u)d[u]=0;var f,v,h;for((l&1)===1&&(f=c>>8,d[l]=r(e[0],f),--l,f=c&255,v=o[o.length-1],d[l]=r(v,f));l>0;)--l,f=c>>8,d[l]=r(o[l],f),--l,f=c&255,d[l]=r(o[l],f);for(l=15,h=15-o.length;h>0;)f=c>>8,d[l]=r(e[h],f),--l,--h,f=c&255,d[l]=r(o[l],f),--l,--h;return d}}(),sT=function(e,n,a,t,r){r||(r=n),t||(t=Lp(e));var i,s;for(i=0;i!=n.length;++i)s=n[i],s^=t[a],s=(s>>5|s<<3)&255,r[i]=s,++a;return[r,a,t]},oT=function(e){var n=0,a=Lp(e);return function(t){var r=sT("",t,n,a);return n=r[1],r[0]}};function cT(e,n,a,t){var r={key:Ke(e),verificationBytes:Ke(e)};return a.password&&(r.verifier=iT(a.password)),t.valid=r.verificationBytes===r.verifier,t.valid&&(t.insitu=oT(a.password)),r}function lT(e,n,a){var t=a||{};return t.Info=e.read_shift(2),e.l-=2,t.Info===1?t.Data=rT(e):t.Data=tT(e,n),t}function dT(e,n,a){var t={Type:a.biff>=8?e.read_shift(2):0};return t.Type?lT(e,n-2,t):cT(e,a.biff>=8?n:n-2,a,t),t}var uT=function(){function e(r,i){switch(i.type){case"base64":return n(In(r),i);case"binary":return n(r,i);case"buffer":return n(_e&&Buffer.isBuffer(r)?r.toString("binary"):xt(r),i);case"array":return n(pt(r),i)}throw new Error("Unrecognized type "+i.type)}function n(r,i){var s=i||{},o=s.dense?[]:{},c=r.match(/\\trowd.*?\\row\b/g);if(!c.length)throw new Error("RTF missing table");var l={s:{c:0,r:0},e:{c:0,r:c.length-1}};return c.forEach(function(d,u){Array.isArray(o)&&(o[u]=[]);for(var f=/\\\w+\b/g,v=0,h,p=-1;h=f.exec(d);){switch(h[0]){case"\\cell":var m=d.slice(v,f.lastIndex-h[0].length);if(m[0]==" "&&(m=m.slice(1)),++p,m.length){var y={v:m,t:"s"};Array.isArray(o)?o[u][p]=y:o[me({r:u,c:p})]=y}break}v=f.lastIndex}p>l.e.c&&(l.e.c=p)}),o["!ref"]=Ee(l),o}function a(r,i){return Xa(e(r,i),i)}function t(r){for(var i=["{\\rtf1\\ansi"],s=ze(r["!ref"]),o,c=Array.isArray(r),l=s.s.r;l<=s.e.r;++l){i.push("\\trowd\\trautofit1");for(var d=s.s.c;d<=s.e.c;++d)i.push("\\cellx"+(d+1));for(i.push("\\pard\\intbl"),d=s.s.c;d<=s.e.c;++d){var u=me({r:l,c:d});o=c?(r[l]||[])[d]:r[u],!(!o||o.v==null&&(!o.f||o.F))&&(i.push(" "+(o.w||(_a(o),o.w))),i.push("\\cell"))}i.push("\\pard\\intbl\\row")}return i.join("")+"}"}return{to_workbook:a,to_sheet:e,from_sheet:t}}();function vT(e){var n=e.slice(e[0]==="#"?1:0).slice(0,6);return[parseInt(n.slice(0,2),16),parseInt(n.slice(2,4),16),parseInt(n.slice(4,6),16)]}function Mr(e){for(var n=0,a=1;n!=3;++n)a=a*256+(e[n]>255?255:e[n]<0?0:e[n]);return a.toString(16).toUpperCase().slice(1)}function fT(e){var n=e[0]/255,a=e[1]/255,t=e[2]/255,r=Math.max(n,a,t),i=Math.min(n,a,t),s=r-i;if(s===0)return[0,0,n];var o=0,c=0,l=r+i;switch(c=s/(l>1?2-l:l),r){case n:o=((a-t)/s+6)%6;break;case a:o=(t-n)/s+2;break;case t:o=(n-a)/s+4;break}return[o/6,c,l/2]}function pT(e){var n=e[0],a=e[1],t=e[2],r=a*2*(t<.5?t:1-t),i=t-r/2,s=[i,i,i],o=6*n,c;if(a!==0)switch(o|0){case 0:case 6:c=r*o,s[0]+=r,s[1]+=c;break;case 1:c=r*(2-o),s[0]+=c,s[1]+=r;break;case 2:c=r*(o-2),s[1]+=r,s[2]+=c;break;case 3:c=r*(4-o),s[1]+=c,s[2]+=r;break;case 4:c=r*(o-4),s[2]+=r,s[0]+=c;break;case 5:c=r*(6-o),s[2]+=c,s[0]+=r;break}for(var l=0;l!=3;++l)s[l]=Math.round(s[l]*255);return s}function hs(e,n){if(n===0)return e;var a=fT(vT(e));return n<0?a[2]=a[2]*(1+n):a[2]=1-(1-a[2])*(1-n),Mr(pT(a))}var Mp=6,hT=15,mT=1,jn=Mp;function ms(e){return Math.floor((e+Math.round(128/jn)/256)*jn)}function gs(e){return Math.floor((e-5)/jn*100+.5)/100}function nc(e){return Math.round((e*jn+5)/jn*256)/256}function ao(e){return nc(gs(ms(e)))}function ml(e){var n=Math.abs(e-ao(e)),a=jn;if(n>.005)for(jn=mT;jn<hT;++jn)Math.abs(e-ao(e))<=n&&(n=Math.abs(e-ao(e)),a=jn);jn=a}function Bt(e){e.width?(e.wpx=ms(e.width),e.wch=gs(e.wpx),e.MDW=jn):e.wpx?(e.wch=gs(e.wpx),e.width=nc(e.wch),e.MDW=jn):typeof e.wch=="number"&&(e.width=nc(e.wch),e.wpx=ms(e.width),e.MDW=jn),e.customWidth&&delete e.customWidth}var gT=96,Bp=gT;function Up(e){return e*96/Bp}function Br(e){return e*Bp/96}var jT={None:"none",Solid:"solid",Gray50:"mediumGray",Gray75:"darkGray",Gray25:"lightGray",HorzStripe:"darkHorizontal",VertStripe:"darkVertical",ReverseDiagStripe:"darkDown",DiagStripe:"darkUp",DiagCross:"darkGrid",ThickDiagCross:"darkTrellis",ThinHorzStripe:"lightHorizontal",ThinVertStripe:"lightVertical",ThinReverseDiagStripe:"lightDown",ThinHorzCross:"lightGrid"};function xT(e,n,a,t){n.Borders=[];var r={},i=!1;(e[0].match(hn)||[]).forEach(function(s){var o=pe(s);switch(va(o[0])){case"<borders":case"<borders>":case"</borders>":break;case"<border":case"<border>":case"<border/>":r={},o.diagonalUp&&(r.diagonalUp=Pe(o.diagonalUp)),o.diagonalDown&&(r.diagonalDown=Pe(o.diagonalDown)),n.Borders.push(r);break;case"</border>":break;case"<left/>":break;case"<left":case"<left>":break;case"</left>":break;case"<right/>":break;case"<right":case"<right>":break;case"</right>":break;case"<top/>":break;case"<top":case"<top>":break;case"</top>":break;case"<bottom/>":break;case"<bottom":case"<bottom>":break;case"</bottom>":break;case"<diagonal":case"<diagonal>":case"<diagonal/>":break;case"</diagonal>":break;case"<horizontal":case"<horizontal>":case"<horizontal/>":break;case"</horizontal>":break;case"<vertical":case"<vertical>":case"<vertical/>":break;case"</vertical>":break;case"<start":case"<start>":case"<start/>":break;case"</start>":break;case"<end":case"<end>":case"<end/>":break;case"</end>":break;case"<color":case"<color>":break;case"<color/>":case"</color>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;default:if(t&&t.WTF&&!i)throw new Error("unrecognized "+o[0]+" in borders")}})}function yT(e,n,a,t){n.Fills=[];var r={},i=!1;(e[0].match(hn)||[]).forEach(function(s){var o=pe(s);switch(va(o[0])){case"<fills":case"<fills>":case"</fills>":break;case"<fill>":case"<fill":case"<fill/>":r={},n.Fills.push(r);break;case"</fill>":break;case"<gradientFill>":break;case"<gradientFill":case"</gradientFill>":n.Fills.push(r),r={};break;case"<patternFill":case"<patternFill>":o.patternType&&(r.patternType=o.patternType);break;case"<patternFill/>":case"</patternFill>":break;case"<bgColor":r.bgColor||(r.bgColor={}),o.indexed&&(r.bgColor.indexed=parseInt(o.indexed,10)),o.theme&&(r.bgColor.theme=parseInt(o.theme,10)),o.tint&&(r.bgColor.tint=parseFloat(o.tint)),o.rgb&&(r.bgColor.rgb=o.rgb.slice(-6));break;case"<bgColor/>":case"</bgColor>":break;case"<fgColor":r.fgColor||(r.fgColor={}),o.theme&&(r.fgColor.theme=parseInt(o.theme,10)),o.tint&&(r.fgColor.tint=parseFloat(o.tint)),o.rgb!=null&&(r.fgColor.rgb=o.rgb.slice(-6));break;case"<fgColor/>":case"</fgColor>":break;case"<stop":case"<stop/>":break;case"</stop>":break;case"<color":case"<color/>":break;case"</color>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;default:if(t&&t.WTF&&!i)throw new Error("unrecognized "+o[0]+" in fills")}})}function bT(e,n,a,t){n.Fonts=[];var r={},i=!1;(e[0].match(hn)||[]).forEach(function(s){var o=pe(s);switch(va(o[0])){case"<fonts":case"<fonts>":case"</fonts>":break;case"<font":case"<font>":break;case"</font>":case"<font/>":n.Fonts.push(r),r={};break;case"<name":o.val&&(r.name=Oe(o.val));break;case"<name/>":case"</name>":break;case"<b":r.bold=o.val?Pe(o.val):1;break;case"<b/>":r.bold=1;break;case"<i":r.italic=o.val?Pe(o.val):1;break;case"<i/>":r.italic=1;break;case"<u":switch(o.val){case"none":r.underline=0;break;case"single":r.underline=1;break;case"double":r.underline=2;break;case"singleAccounting":r.underline=33;break;case"doubleAccounting":r.underline=34;break}break;case"<u/>":r.underline=1;break;case"<strike":r.strike=o.val?Pe(o.val):1;break;case"<strike/>":r.strike=1;break;case"<outline":r.outline=o.val?Pe(o.val):1;break;case"<outline/>":r.outline=1;break;case"<shadow":r.shadow=o.val?Pe(o.val):1;break;case"<shadow/>":r.shadow=1;break;case"<condense":r.condense=o.val?Pe(o.val):1;break;case"<condense/>":r.condense=1;break;case"<extend":r.extend=o.val?Pe(o.val):1;break;case"<extend/>":r.extend=1;break;case"<sz":o.val&&(r.sz=+o.val);break;case"<sz/>":case"</sz>":break;case"<vertAlign":o.val&&(r.vertAlign=o.val);break;case"<vertAlign/>":case"</vertAlign>":break;case"<family":o.val&&(r.family=parseInt(o.val,10));break;case"<family/>":case"</family>":break;case"<scheme":o.val&&(r.scheme=o.val);break;case"<scheme/>":case"</scheme>":break;case"<charset":if(o.val=="1")break;o.codepage=Zc[parseInt(o.val,10)];break;case"<color":if(r.color||(r.color={}),o.auto&&(r.color.auto=Pe(o.auto)),o.rgb)r.color.rgb=o.rgb.slice(-6);else if(o.indexed){r.color.index=parseInt(o.indexed,10);var c=it[r.color.index];r.color.index==81&&(c=it[1]),c||(c=it[1]),r.color.rgb=c[0].toString(16)+c[1].toString(16)+c[2].toString(16)}else o.theme&&(r.color.theme=parseInt(o.theme,10),o.tint&&(r.color.tint=parseFloat(o.tint)),o.theme&&a.themeElements&&a.themeElements.clrScheme&&(r.color.rgb=hs(a.themeElements.clrScheme[r.color.theme].rgb,r.color.tint||0)));break;case"<color/>":case"</color>":break;case"<AlternateContent":i=!0;break;case"</AlternateContent>":i=!1;break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;default:if(t&&t.WTF&&!i)throw new Error("unrecognized "+o[0]+" in fonts")}})}function wT(e,n,a){n.NumberFmt=[];for(var t=ua(je),r=0;r<t.length;++r)n.NumberFmt[t[r]]=je[t[r]];var i=e[0].match(hn);if(i)for(r=0;r<i.length;++r){var s=pe(i[r]);switch(va(s[0])){case"<numFmts":case"</numFmts>":case"<numFmts/>":case"<numFmts>":break;case"<numFmt":{var o=Ae(Oe(s.formatCode)),c=parseInt(s.numFmtId,10);if(n.NumberFmt[c]=o,c>0){if(c>392){for(c=392;c>60&&n.NumberFmt[c]!=null;--c);n.NumberFmt[c]=o}rt(o,c)}}break;case"</numFmt>":break;default:if(a.WTF)throw new Error("unrecognized "+s[0]+" in numFmts")}}}var bi=["numFmtId","fillId","fontId","borderId","xfId"],wi=["applyAlignment","applyBorder","applyFill","applyFont","applyNumberFormat","applyProtection","pivotButton","quotePrefix"];function _T(e,n,a){n.CellXf=[];var t,r=!1;(e[0].match(hn)||[]).forEach(function(i){var s=pe(i),o=0;switch(va(s[0])){case"<cellXfs":case"<cellXfs>":case"<cellXfs/>":case"</cellXfs>":break;case"<xf":case"<xf/>":for(t=s,delete t[0],o=0;o<bi.length;++o)t[bi[o]]&&(t[bi[o]]=parseInt(t[bi[o]],10));for(o=0;o<wi.length;++o)t[wi[o]]&&(t[wi[o]]=Pe(t[wi[o]]));if(n.NumberFmt&&t.numFmtId>392){for(o=392;o>60;--o)if(n.NumberFmt[t.numFmtId]==n.NumberFmt[o]){t.numFmtId=o;break}}n.CellXf.push(t);break;case"</xf>":break;case"<alignment":case"<alignment/>":var c={};s.vertical&&(c.vertical=s.vertical),s.horizontal&&(c.horizontal=s.horizontal),s.textRotation!=null&&(c.textRotation=s.textRotation),s.indent&&(c.indent=s.indent),s.wrapText&&(c.wrapText=Pe(s.wrapText)),t.alignment=c;break;case"</alignment>":break;case"<protection":break;case"</protection>":case"<protection/>":break;case"<AlternateContent":r=!0;break;case"</AlternateContent>":r=!1;break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":r=!0;break;case"</ext>":r=!1;break;default:if(a&&a.WTF&&!r)throw new Error("unrecognized "+s[0]+" in cellXfs")}})}var kT=function(){var n=/<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/,a=/<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/,t=/<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/,r=/<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/,i=/<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;return function(o,c,l){var d={};if(!o)return d;o=o.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");var u;return(u=o.match(n))&&wT(u,d,l),(u=o.match(r))&&bT(u,d,c,l),(u=o.match(t))&&yT(u,d,c,l),(u=o.match(i))&&xT(u,d,c,l),(u=o.match(a))&&_T(u,d,l),d}}();function ET(e,n){var a=e.read_shift(2),t=vn(e);return[a,t]}function TT(e,n,a){var t={};t.sz=e.read_shift(2)/20;var r=N2(e);r.fItalic&&(t.italic=1),r.fCondense&&(t.condense=1),r.fExtend&&(t.extend=1),r.fShadow&&(t.shadow=1),r.fOutline&&(t.outline=1),r.fStrikeout&&(t.strike=1);var i=e.read_shift(2);switch(i===700&&(t.bold=1),e.read_shift(2)){case 1:t.vertAlign="superscript";break;case 2:t.vertAlign="subscript";break}var s=e.read_shift(1);s!=0&&(t.underline=s);var o=e.read_shift(1);o>0&&(t.family=o);var c=e.read_shift(1);switch(c>0&&(t.charset=c),e.l++,t.color=P2(e),e.read_shift(1)){case 1:t.scheme="major";break;case 2:t.scheme="minor";break}return t.name=vn(e),t}var AT=pn;function ST(e,n){var a=e.l+n,t=e.read_shift(2),r=e.read_shift(2);return e.l=a,{ixfe:t,numFmtId:r}}var CT=pn;function FT(e,n,a){var t={};t.NumberFmt=[];for(var r in je)t.NumberFmt[r]=je[r];t.CellXf=[],t.Fonts=[];var i=[],s=!1;return ka(e,function(c,l,d){switch(d){case 44:t.NumberFmt[c[0]]=c[1],rt(c[1],c[0]);break;case 43:t.Fonts.push(c),c.color.theme!=null&&n&&n.themeElements&&n.themeElements.clrScheme&&(c.color.rgb=hs(n.themeElements.clrScheme[c.color.theme].rgb,c.color.tint||0));break;case 1025:break;case 45:break;case 46:break;case 47:i[i.length-1]==617&&t.CellXf.push(c);break;case 48:case 507:case 572:case 475:break;case 1171:case 2102:case 1130:case 512:case 2095:case 3072:break;case 35:s=!0;break;case 36:s=!1;break;case 37:i.push(d),s=!0;break;case 38:i.pop(),s=!1;break;default:if(l.T>0)i.push(d);else if(l.T<0)i.pop();else if(!s||a.WTF&&i[i.length-1]!=37)throw new Error("Unexpected record 0x"+d.toString(16))}}),t}var OT=["</a:lt1>","</a:dk1>","</a:lt2>","</a:dk2>","</a:accent1>","</a:accent2>","</a:accent3>","</a:accent4>","</a:accent5>","</a:accent6>","</a:hlink>","</a:folHlink>"];function RT(e,n,a){n.themeElements.clrScheme=[];var t={};(e[0].match(hn)||[]).forEach(function(r){var i=pe(r);switch(i[0]){case"<a:clrScheme":case"</a:clrScheme>":break;case"<a:srgbClr":t.rgb=i.val;break;case"<a:sysClr":t.rgb=i.lastClr;break;case"<a:dk1>":case"</a:dk1>":case"<a:lt1>":case"</a:lt1>":case"<a:dk2>":case"</a:dk2>":case"<a:lt2>":case"</a:lt2>":case"<a:accent1>":case"</a:accent1>":case"<a:accent2>":case"</a:accent2>":case"<a:accent3>":case"</a:accent3>":case"<a:accent4>":case"</a:accent4>":case"<a:accent5>":case"</a:accent5>":case"<a:accent6>":case"</a:accent6>":case"<a:hlink>":case"</a:hlink>":case"<a:folHlink>":case"</a:folHlink>":i[0].charAt(1)==="/"?(n.themeElements.clrScheme[OT.indexOf(i[0])]=t,t={}):t.name=i[0].slice(3,i[0].length-1);break;default:if(a&&a.WTF)throw new Error("Unrecognized "+i[0]+" in clrScheme")}})}function IT(){}function DT(){}var PT=/<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,NT=/<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,LT=/<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;function MT(e,n,a){n.themeElements={};var t;[["clrScheme",PT,RT],["fontScheme",NT,IT],["fmtScheme",LT,DT]].forEach(function(r){if(!(t=e.match(r[1])))throw new Error(r[0]+" not found in themeElements");r[2](t,n,a)})}var BT=/<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;function zp(e,n){(!e||e.length===0)&&(e=UT());var a,t={};if(!(a=e.match(BT)))throw new Error("themeElements not found in theme");return MT(a[0],t,n),t.raw=e,t}function UT(e,n){var a=[Z0];return a[a.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">',a[a.length]="<a:themeElements>",a[a.length]='<a:clrScheme name="Office">',a[a.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>',a[a.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>',a[a.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>',a[a.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>',a[a.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>',a[a.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>',a[a.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>',a[a.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>',a[a.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>',a[a.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>',a[a.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>',a[a.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>',a[a.length]="</a:clrScheme>",a[a.length]='<a:fontScheme name="Office">',a[a.length]="<a:majorFont>",a[a.length]='<a:latin typeface="Cambria"/>',a[a.length]='<a:ea typeface=""/>',a[a.length]='<a:cs typeface=""/>',a[a.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',a[a.length]='<a:font script="Hang" typeface="맑은 고딕"/>',a[a.length]='<a:font script="Hans" typeface="宋体"/>',a[a.length]='<a:font script="Hant" typeface="新細明體"/>',a[a.length]='<a:font script="Arab" typeface="Times New Roman"/>',a[a.length]='<a:font script="Hebr" typeface="Times New Roman"/>',a[a.length]='<a:font script="Thai" typeface="Tahoma"/>',a[a.length]='<a:font script="Ethi" typeface="Nyala"/>',a[a.length]='<a:font script="Beng" typeface="Vrinda"/>',a[a.length]='<a:font script="Gujr" typeface="Shruti"/>',a[a.length]='<a:font script="Khmr" typeface="MoolBoran"/>',a[a.length]='<a:font script="Knda" typeface="Tunga"/>',a[a.length]='<a:font script="Guru" typeface="Raavi"/>',a[a.length]='<a:font script="Cans" typeface="Euphemia"/>',a[a.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',a[a.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',a[a.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',a[a.length]='<a:font script="Thaa" typeface="MV Boli"/>',a[a.length]='<a:font script="Deva" typeface="Mangal"/>',a[a.length]='<a:font script="Telu" typeface="Gautami"/>',a[a.length]='<a:font script="Taml" typeface="Latha"/>',a[a.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',a[a.length]='<a:font script="Orya" typeface="Kalinga"/>',a[a.length]='<a:font script="Mlym" typeface="Kartika"/>',a[a.length]='<a:font script="Laoo" typeface="DokChampa"/>',a[a.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',a[a.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',a[a.length]='<a:font script="Viet" typeface="Times New Roman"/>',a[a.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',a[a.length]='<a:font script="Geor" typeface="Sylfaen"/>',a[a.length]="</a:majorFont>",a[a.length]="<a:minorFont>",a[a.length]='<a:latin typeface="Calibri"/>',a[a.length]='<a:ea typeface=""/>',a[a.length]='<a:cs typeface=""/>',a[a.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',a[a.length]='<a:font script="Hang" typeface="맑은 고딕"/>',a[a.length]='<a:font script="Hans" typeface="宋体"/>',a[a.length]='<a:font script="Hant" typeface="新細明體"/>',a[a.length]='<a:font script="Arab" typeface="Arial"/>',a[a.length]='<a:font script="Hebr" typeface="Arial"/>',a[a.length]='<a:font script="Thai" typeface="Tahoma"/>',a[a.length]='<a:font script="Ethi" typeface="Nyala"/>',a[a.length]='<a:font script="Beng" typeface="Vrinda"/>',a[a.length]='<a:font script="Gujr" typeface="Shruti"/>',a[a.length]='<a:font script="Khmr" typeface="DaunPenh"/>',a[a.length]='<a:font script="Knda" typeface="Tunga"/>',a[a.length]='<a:font script="Guru" typeface="Raavi"/>',a[a.length]='<a:font script="Cans" typeface="Euphemia"/>',a[a.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',a[a.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',a[a.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',a[a.length]='<a:font script="Thaa" typeface="MV Boli"/>',a[a.length]='<a:font script="Deva" typeface="Mangal"/>',a[a.length]='<a:font script="Telu" typeface="Gautami"/>',a[a.length]='<a:font script="Taml" typeface="Latha"/>',a[a.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',a[a.length]='<a:font script="Orya" typeface="Kalinga"/>',a[a.length]='<a:font script="Mlym" typeface="Kartika"/>',a[a.length]='<a:font script="Laoo" typeface="DokChampa"/>',a[a.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',a[a.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',a[a.length]='<a:font script="Viet" typeface="Arial"/>',a[a.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',a[a.length]='<a:font script="Geor" typeface="Sylfaen"/>',a[a.length]="</a:minorFont>",a[a.length]="</a:fontScheme>",a[a.length]='<a:fmtScheme name="Office">',a[a.length]="<a:fillStyleLst>",a[a.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',a[a.length]='<a:gradFill rotWithShape="1">',a[a.length]="<a:gsLst>",a[a.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',a[a.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',a[a.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',a[a.length]="</a:gsLst>",a[a.length]='<a:lin ang="16200000" scaled="1"/>',a[a.length]="</a:gradFill>",a[a.length]='<a:gradFill rotWithShape="1">',a[a.length]="<a:gsLst>",a[a.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',a[a.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',a[a.length]="</a:gsLst>",a[a.length]='<a:lin ang="16200000" scaled="0"/>',a[a.length]="</a:gradFill>",a[a.length]="</a:fillStyleLst>",a[a.length]="<a:lnStyleLst>",a[a.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',a[a.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',a[a.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',a[a.length]="</a:lnStyleLst>",a[a.length]="<a:effectStyleLst>",a[a.length]="<a:effectStyle>",a[a.length]="<a:effectLst>",a[a.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',a[a.length]="</a:effectLst>",a[a.length]="</a:effectStyle>",a[a.length]="<a:effectStyle>",a[a.length]="<a:effectLst>",a[a.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',a[a.length]="</a:effectLst>",a[a.length]="</a:effectStyle>",a[a.length]="<a:effectStyle>",a[a.length]="<a:effectLst>",a[a.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',a[a.length]="</a:effectLst>",a[a.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',a[a.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',a[a.length]="</a:effectStyle>",a[a.length]="</a:effectStyleLst>",a[a.length]="<a:bgFillStyleLst>",a[a.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',a[a.length]='<a:gradFill rotWithShape="1">',a[a.length]="<a:gsLst>",a[a.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',a[a.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',a[a.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',a[a.length]="</a:gsLst>",a[a.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',a[a.length]="</a:gradFill>",a[a.length]='<a:gradFill rotWithShape="1">',a[a.length]="<a:gsLst>",a[a.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',a[a.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',a[a.length]="</a:gsLst>",a[a.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',a[a.length]="</a:gradFill>",a[a.length]="</a:bgFillStyleLst>",a[a.length]="</a:fmtScheme>",a[a.length]="</a:themeElements>",a[a.length]="<a:objectDefaults>",a[a.length]="<a:spDef>",a[a.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',a[a.length]="</a:spDef>",a[a.length]="<a:lnDef>",a[a.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',a[a.length]="</a:lnDef>",a[a.length]="</a:objectDefaults>",a[a.length]="<a:extraClrSchemeLst/>",a[a.length]="</a:theme>",a.join("")}function zT(e,n,a){var t=e.l+n,r=e.read_shift(4);if(r!==124226){if(!a.cellStyles){e.l=t;return}var i=e.slice(e.l);e.l=t;var s;try{s=J0(i,{type:"array"})}catch{return}var o=Fn(s,"theme/theme/theme1.xml",!0);if(o)return zp(o,a)}}function $T(e){return e.read_shift(4)}function qT(e){var n={};switch(n.xclrType=e.read_shift(2),n.nTintShade=e.read_shift(2),n.xclrType){case 0:e.l+=4;break;case 1:n.xclrValue=HT(e,4);break;case 2:n.xclrValue=Ap(e);break;case 3:n.xclrValue=$T(e);break;case 4:e.l+=4;break}return e.l+=8,n}function HT(e,n){return pn(e,n)}function WT(e,n){return pn(e,n)}function GT(e){var n=e.read_shift(2),a=e.read_shift(2)-4,t=[n];switch(n){case 4:case 5:case 7:case 8:case 9:case 10:case 11:case 13:t[1]=qT(e);break;case 6:t[1]=WT(e,a);break;case 14:case 15:t[1]=e.read_shift(a===1?1:2);break;default:throw new Error("Unrecognized ExtProp type: "+n+" "+a)}return t}function VT(e,n){var a=e.l+n;e.l+=2;var t=e.read_shift(2);e.l+=2;for(var r=e.read_shift(2),i=[];r-- >0;)i.push(GT(e,a-e.l));return{ixfe:t,ext:i}}function XT(e,n){n.forEach(function(a){a[0]})}function KT(e,n){return{flags:e.read_shift(4),version:e.read_shift(4),name:vn(e)}}function YT(e){for(var n=[],a=e.read_shift(4);a-- >0;)n.push([e.read_shift(4),e.read_shift(4)]);return n}function JT(e){return e.l+=4,e.read_shift(4)!=0}function ZT(e,n,a){var t={Types:[],Cell:[],Value:[]},r=a||{},i=[],s=!1,o=2;return ka(e,function(c,l,d){switch(d){case 335:t.Types.push({name:c.name});break;case 51:c.forEach(function(u){o==1?t.Cell.push({type:t.Types[u[0]-1].name,index:u[1]}):o==0&&t.Value.push({type:t.Types[u[0]-1].name,index:u[1]})});break;case 337:o=c?1:0;break;case 338:o=2;break;case 35:i.push(d),s=!0;break;case 36:i.pop(),s=!1;break;default:if(!l.T){if(!s||r.WTF&&i[i.length-1]!=35)throw new Error("Unexpected record 0x"+d.toString(16))}}}),t}function QT(e,n,a){var t={Types:[],Cell:[],Value:[]};if(!e)return t;var r=!1,i=2,s;return e.replace(hn,function(o){var c=pe(o);switch(va(c[0])){case"<?xml":break;case"<metadata":case"</metadata>":break;case"<metadataTypes":case"</metadataTypes>":break;case"<metadataType":t.Types.push({name:c.name});break;case"</metadataType>":break;case"<futureMetadata":for(var l=0;l<t.Types.length;++l)t.Types[l].name==c.name&&(s=t.Types[l]);break;case"</futureMetadata>":break;case"<bk>":break;case"</bk>":break;case"<rc":i==1?t.Cell.push({type:t.Types[c.t-1].name,index:+c.v}):i==0&&t.Value.push({type:t.Types[c.t-1].name,index:+c.v});break;case"</rc>":break;case"<cellMetadata":i=1;break;case"</cellMetadata>":i=2;break;case"<valueMetadata":i=0;break;case"</valueMetadata>":i=2;break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":r=!0;break;case"</ext>":r=!1;break;case"<rvb":if(!s)break;s.offsets||(s.offsets=[]),s.offsets.push(+c.i);break;default:if(!r&&a.WTF)throw new Error("unrecognized "+c[0]+" in metadata")}return o}),t}function eA(e){var n=[];if(!e)return n;var a=1;return(e.match(hn)||[]).forEach(function(t){var r=pe(t);switch(r[0]){case"<?xml":break;case"<calcChain":case"<calcChain>":case"</calcChain>":break;case"<c":delete r[0],r.i?a=r.i:r.i=a,n.push(r);break}}),n}function nA(e){var n={};n.i=e.read_shift(4);var a={};a.r=e.read_shift(4),a.c=e.read_shift(4),n.r=me(a);var t=e.read_shift(1);return t&2&&(n.l="1"),t&8&&(n.a="1"),n}function aA(e,n,a){var t=[];return ka(e,function(i,s,o){switch(o){case 63:t.push(i);break;default:if(!s.T)throw new Error("Unexpected record 0x"+o.toString(16))}}),t}function tA(e,n,a,t){if(!e)return e;var r=t||{},i=!1;ka(e,function(o,c,l){switch(l){case 359:case 363:case 364:case 366:case 367:case 368:case 369:case 370:case 371:case 472:case 577:case 578:case 579:case 580:case 581:case 582:case 583:case 584:case 585:case 586:case 587:break;case 35:i=!0;break;case 36:i=!1;break;default:if(!c.T){if(!i||r.WTF)throw new Error("Unexpected record 0x"+l.toString(16))}}},r)}function rA(e,n){if(!e)return"??";var a=(e.match(/<c:chart [^>]*r:id="([^"]*)"/)||["",""])[1];return n["!id"][a].Target}function Qu(e,n,a,t){var r=Array.isArray(e),i;n.forEach(function(s){var o=xn(s.ref);if(r?(e[o.r]||(e[o.r]=[]),i=e[o.r][o.c]):i=e[s.ref],!i){i={t:"z"},r?e[o.r][o.c]=i:e[s.ref]=i;var c=ze(e["!ref"]||"BDWGO1000001:A1");c.s.r>o.r&&(c.s.r=o.r),c.e.r<o.r&&(c.e.r=o.r),c.s.c>o.c&&(c.s.c=o.c),c.e.c<o.c&&(c.e.c=o.c);var l=Ee(c);l!==e["!ref"]&&(e["!ref"]=l)}i.c||(i.c=[]);var d={a:s.author,t:s.t,r:s.r,T:a};s.h&&(d.h=s.h);for(var u=i.c.length-1;u>=0;--u){if(!a&&i.c[u].T)return;a&&!i.c[u].T&&i.c.splice(u,1)}if(a&&t){for(u=0;u<t.length;++u)if(d.a==t[u].id){d.a=t[u].name||d.a;break}}i.c.push(d)})}function iA(e,n){if(e.match(/<(?:\w+:)?comments *\/>/))return[];var a=[],t=[],r=e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);r&&r[1]&&r[1].split(/<\/\w*:?author>/).forEach(function(s){if(!(s===""||s.trim()==="")){var o=s.match(/<(?:\w+:)?author[^>]*>(.*)/);o&&a.push(o[1])}});var i=e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);return i&&i[1]&&i[1].split(/<\/\w*:?comment>/).forEach(function(s){if(!(s===""||s.trim()==="")){var o=s.match(/<(?:\w+:)?comment[^>]*>/);if(o){var c=pe(o[0]),l={author:c.authorId&&a[c.authorId]||"sheetjsghost",ref:c.ref,guid:c.guid},d=xn(c.ref);if(!(n.sheetRows&&n.sheetRows<=d.r)){var u=s.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),f=!!u&&!!u[1]&&hl(u[1])||{r:"",t:"",h:""};l.r=f.r,f.r=="<t></t>"&&(f.t=f.h=""),l.t=(f.t||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),n.cellHTML&&(l.h=f.h),t.push(l)}}}}),t}function sA(e,n){var a=[],t=!1,r={},i=0;return e.replace(hn,function(o,c){var l=pe(o);switch(va(l[0])){case"<?xml":break;case"<ThreadedComments":break;case"</ThreadedComments>":break;case"<threadedComment":r={author:l.personId,guid:l.id,ref:l.ref,T:1};break;case"</threadedComment>":r.t!=null&&a.push(r);break;case"<text>":case"<text":i=c+o.length;break;case"</text>":r.t=e.slice(i,c).replace(/\r\n/g,`
`).replace(/\r/g,`
`);break;case"<mentions":case"<mentions>":t=!0;break;case"</mentions>":t=!1;break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":t=!0;break;case"</ext>":t=!1;break;default:if(!t&&n.WTF)throw new Error("unrecognized "+l[0]+" in threaded comments")}return o}),a}function oA(e,n){var a=[],t=!1;return e.replace(hn,function(i){var s=pe(i);switch(va(s[0])){case"<?xml":break;case"<personList":break;case"</personList>":break;case"<person":a.push({name:s.displayname,id:s.id});break;case"</person>":break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":t=!0;break;case"</ext>":t=!1;break;default:if(!t&&n.WTF)throw new Error("unrecognized "+s[0]+" in threaded comments")}return i}),a}function cA(e){var n={};n.iauthor=e.read_shift(4);var a=bt(e);return n.rfx=a.s,n.ref=me(a.s),e.l+=16,n}var lA=vn;function dA(e,n){var a=[],t=[],r={},i=!1;return ka(e,function(o,c,l){switch(l){case 632:t.push(o);break;case 635:r=o;break;case 637:r.t=o.t,r.h=o.h,r.r=o.r;break;case 636:if(r.author=t[r.iauthor],delete r.iauthor,n.sheetRows&&r.rfx&&n.sheetRows<=r.rfx.r)break;r.t||(r.t=""),delete r.rfx,a.push(r);break;case 3072:break;case 35:i=!0;break;case 36:i=!1;break;case 37:break;case 38:break;default:if(!c.T){if(!i||n.WTF)throw new Error("Unexpected record 0x"+l.toString(16))}}}),a}var uA="application/vnd.ms-office.vbaProject";function vA(e){var n=ke.utils.cfb_new({root:"R"});return e.FullPaths.forEach(function(a,t){if(!(a.slice(-1)==="/"||!a.match(/_VBA_PROJECT_CUR/))){var r=a.replace(/^[^\/]*/,"R").replace(/\/_VBA_PROJECT_CUR\u0000*/,"");ke.utils.cfb_add(n,r,e.FileIndex[t].content)}}),ke.write(n)}function fA(){return{"!type":"dialog"}}function pA(){return{"!type":"dialog"}}function hA(){return{"!type":"macro"}}function mA(){return{"!type":"macro"}}var Pt=function(){var e=/(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,n={r:0,c:0};function a(t,r,i,s){var o=!1,c=!1;i.length==0?c=!0:i.charAt(0)=="["&&(c=!0,i=i.slice(1,-1)),s.length==0?o=!0:s.charAt(0)=="["&&(o=!0,s=s.slice(1,-1));var l=i.length>0?parseInt(i,10)|0:0,d=s.length>0?parseInt(s,10)|0:0;return o?d+=n.c:--d,c?l+=n.r:--l,r+(o?"":"$")+Ze(d)+(c?"":"$")+sn(l)}return function(r,i){return n=i,r.replace(e,a)}}(),$p=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,gA=function(){return function(n,a){return n.replace($p,function(t,r,i,s,o,c){var l=ll(s)-(i?0:a.c),d=cl(c)-(o?0:a.r),u=d==0?"":o?d+1:"["+d+"]",f=l==0?"":i?l+1:"["+l+"]";return r+"R"+u+"C"+f})}}();function qp(e,n){return e.replace($p,function(a,t,r,i,s,o){return t+(r=="$"?r+i:Ze(ll(i)+n.c))+(s=="$"?s+o:sn(cl(o)+n.r))})}function jA(e,n,a){var t=Xt(n),r=t.s,i=xn(a),s={r:i.r-r.r,c:i.c-r.c};return qp(e,s)}function xA(e){return e.length!=1}function ev(e){return e.replace(/_xlfn\./g,"")}function Ve(e){e.l+=1}function Wa(e,n){var a=e.read_shift(2);return[a&16383,a>>14&1,a>>15&1]}function Hp(e,n,a){var t=2;if(a){if(a.biff>=2&&a.biff<=5)return Wp(e);a.biff==12&&(t=4)}var r=e.read_shift(t),i=e.read_shift(t),s=Wa(e),o=Wa(e);return{s:{r,c:s[0],cRel:s[1],rRel:s[2]},e:{r:i,c:o[0],cRel:o[1],rRel:o[2]}}}function Wp(e){var n=Wa(e),a=Wa(e),t=e.read_shift(1),r=e.read_shift(1);return{s:{r:n[0],c:t,cRel:n[1],rRel:n[2]},e:{r:a[0],c:r,cRel:a[1],rRel:a[2]}}}function yA(e,n,a){if(a.biff<8)return Wp(e);var t=e.read_shift(a.biff==12?4:2),r=e.read_shift(a.biff==12?4:2),i=Wa(e),s=Wa(e);return{s:{r:t,c:i[0],cRel:i[1],rRel:i[2]},e:{r,c:s[0],cRel:s[1],rRel:s[2]}}}function Gp(e,n,a){if(a&&a.biff>=2&&a.biff<=5)return bA(e);var t=e.read_shift(a&&a.biff==12?4:2),r=Wa(e);return{r:t,c:r[0],cRel:r[1],rRel:r[2]}}function bA(e){var n=Wa(e),a=e.read_shift(1);return{r:n[0],c:a,cRel:n[1],rRel:n[2]}}function wA(e){var n=e.read_shift(2),a=e.read_shift(2);return{r:n,c:a&255,fQuoted:!!(a&16384),cRel:a>>15,rRel:a>>15}}function _A(e,n,a){var t=a&&a.biff?a.biff:8;if(t>=2&&t<=5)return kA(e);var r=e.read_shift(t>=12?4:2),i=e.read_shift(2),s=(i&16384)>>14,o=(i&32768)>>15;if(i&=16383,o==1)for(;r>524287;)r-=1048576;if(s==1)for(;i>8191;)i=i-16384;return{r,c:i,cRel:s,rRel:o}}function kA(e){var n=e.read_shift(2),a=e.read_shift(1),t=(n&32768)>>15,r=(n&16384)>>14;return n&=16383,t==1&&n>=8192&&(n=n-16384),r==1&&a>=128&&(a=a-256),{r:n,c:a,cRel:r,rRel:t}}function EA(e,n,a){var t=(e[e.l++]&96)>>5,r=Hp(e,a.biff>=2&&a.biff<=5?6:8,a);return[t,r]}function TA(e,n,a){var t=(e[e.l++]&96)>>5,r=e.read_shift(2,"i"),i=8;if(a)switch(a.biff){case 5:e.l+=12,i=6;break;case 12:i=12;break}var s=Hp(e,i,a);return[t,r,s]}function AA(e,n,a){var t=(e[e.l++]&96)>>5;return e.l+=a&&a.biff>8?12:a.biff<8?6:8,[t]}function SA(e,n,a){var t=(e[e.l++]&96)>>5,r=e.read_shift(2),i=8;if(a)switch(a.biff){case 5:e.l+=12,i=6;break;case 12:i=12;break}return e.l+=i,[t,r]}function CA(e,n,a){var t=(e[e.l++]&96)>>5,r=yA(e,n-1,a);return[t,r]}function FA(e,n,a){var t=(e[e.l++]&96)>>5;return e.l+=a.biff==2?6:a.biff==12?14:7,[t]}function nv(e){var n=e[e.l+1]&1,a=1;return e.l+=4,[n,a]}function OA(e,n,a){e.l+=2;for(var t=e.read_shift(a&&a.biff==2?1:2),r=[],i=0;i<=t;++i)r.push(e.read_shift(a&&a.biff==2?1:2));return r}function RA(e,n,a){var t=e[e.l+1]&255?1:0;return e.l+=2,[t,e.read_shift(a&&a.biff==2?1:2)]}function IA(e,n,a){var t=e[e.l+1]&255?1:0;return e.l+=2,[t,e.read_shift(a&&a.biff==2?1:2)]}function DA(e){var n=e[e.l+1]&255?1:0;return e.l+=2,[n,e.read_shift(2)]}function PA(e,n,a){var t=e[e.l+1]&255?1:0;return e.l+=a&&a.biff==2?3:4,[t]}function Vp(e){var n=e.read_shift(1),a=e.read_shift(1);return[n,a]}function NA(e){return e.read_shift(2),Vp(e)}function LA(e){return e.read_shift(2),Vp(e)}function MA(e,n,a){var t=(e[e.l]&96)>>5;e.l+=1;var r=Gp(e,0,a);return[t,r]}function BA(e,n,a){var t=(e[e.l]&96)>>5;e.l+=1;var r=_A(e,0,a);return[t,r]}function UA(e,n,a){var t=(e[e.l]&96)>>5;e.l+=1;var r=e.read_shift(2);a&&a.biff==5&&(e.l+=12);var i=Gp(e,0,a);return[t,r,i]}function zA(e,n,a){var t=(e[e.l]&96)>>5;e.l+=1;var r=e.read_shift(a&&a.biff<=3?1:2);return[$4[r],Yp[r],t]}function $A(e,n,a){var t=e[e.l++],r=e.read_shift(1),i=a&&a.biff<=3?[t==88?-1:0,e.read_shift(1)]:qA(e);return[r,(i[0]===0?Yp:z4)[i[1]]]}function qA(e){return[e[e.l+1]>>7,e.read_shift(2)&32767]}function HA(e,n,a){e.l+=a&&a.biff==2?3:4}function WA(e,n,a){if(e.l++,a&&a.biff==12)return[e.read_shift(4,"i"),0];var t=e.read_shift(2),r=e.read_shift(a&&a.biff==2?1:2);return[t,r]}function GA(e){return e.l++,wt[e.read_shift(1)]}function VA(e){return e.l++,e.read_shift(2)}function XA(e){return e.l++,e.read_shift(1)!==0}function KA(e){return e.l++,dn(e)}function YA(e,n,a){return e.l++,Jr(e,n-1,a)}function JA(e,n){var a=[e.read_shift(1)];if(n==12)switch(a[0]){case 2:a[0]=4;break;case 4:a[0]=16;break;case 0:a[0]=1;break;case 1:a[0]=2;break}switch(a[0]){case 4:a[1]=We(e,1)?"TRUE":"FALSE",n!=12&&(e.l+=7);break;case 37:case 16:a[1]=wt[e[e.l]],e.l+=n==12?4:8;break;case 0:e.l+=8;break;case 1:a[1]=dn(e);break;case 2:a[1]=_t(e,0,{biff:n>0&&n<8?2:n});break;default:throw new Error("Bad SerAr: "+a[0])}return a}function ZA(e,n,a){for(var t=e.read_shift(a.biff==12?4:2),r=[],i=0;i!=t;++i)r.push((a.biff==12?bt:Rs)(e));return r}function QA(e,n,a){var t=0,r=0;a.biff==12?(t=e.read_shift(4),r=e.read_shift(4)):(r=1+e.read_shift(1),t=1+e.read_shift(2)),a.biff>=2&&a.biff<8&&(--t,--r==0&&(r=256));for(var i=0,s=[];i!=t&&(s[i]=[]);++i)for(var o=0;o!=r;++o)s[i][o]=JA(e,a.biff);return s}function e4(e,n,a){var t=e.read_shift(1)>>>5&3,r=!a||a.biff>=8?4:2,i=e.read_shift(r);switch(a.biff){case 2:e.l+=5;break;case 3:case 4:e.l+=8;break;case 5:e.l+=12;break}return[t,0,i]}function n4(e,n,a){if(a.biff==5)return a4(e);var t=e.read_shift(1)>>>5&3,r=e.read_shift(2),i=e.read_shift(4);return[t,r,i]}function a4(e){var n=e.read_shift(1)>>>5&3,a=e.read_shift(2,"i");e.l+=8;var t=e.read_shift(2);return e.l+=12,[n,a,t]}function t4(e,n,a){var t=e.read_shift(1)>>>5&3;e.l+=a&&a.biff==2?3:4;var r=e.read_shift(a&&a.biff==2?1:2);return[t,r]}function r4(e,n,a){var t=e.read_shift(1)>>>5&3,r=e.read_shift(a&&a.biff==2?1:2);return[t,r]}function i4(e,n,a){var t=e.read_shift(1)>>>5&3;return e.l+=4,a.biff<8&&e.l--,a.biff==12&&(e.l+=2),[t]}function s4(e,n,a){var t=(e[e.l++]&96)>>5,r=e.read_shift(2),i=4;if(a)switch(a.biff){case 5:i=15;break;case 12:i=6;break}return e.l+=i,[t,r]}var o4=pn,c4=pn,l4=pn;function Qr(e,n,a){return e.l+=2,[wA(e)]}function gl(e){return e.l+=6,[]}var d4=Qr,u4=gl,v4=gl,f4=Qr;function Xp(e){return e.l+=2,[Ke(e),e.read_shift(2)&1]}var p4=Qr,h4=Xp,m4=gl,g4=Qr,j4=Qr,x4=["Data","All","Headers","??","?Data2","??","?DataHeaders","??","Totals","??","??","??","?DataTotals","??","??","??","?Current"];function y4(e){e.l+=2;var n=e.read_shift(2),a=e.read_shift(2),t=e.read_shift(4),r=e.read_shift(2),i=e.read_shift(2),s=x4[a>>2&31];return{ixti:n,coltype:a&3,rt:s,idx:t,c:r,C:i}}function b4(e){return e.l+=2,[e.read_shift(4)]}function w4(e,n,a){return e.l+=5,e.l+=2,e.l+=a.biff==2?1:4,["PTGSHEET"]}function _4(e,n,a){return e.l+=a.biff==2?4:5,["PTGENDSHEET"]}function k4(e){var n=e.read_shift(1)>>>5&3,a=e.read_shift(2);return[n,a]}function E4(e){var n=e.read_shift(1)>>>5&3,a=e.read_shift(2);return[n,a]}function T4(e){return e.l+=4,[0,0]}var av={1:{n:"PtgExp",f:WA},2:{n:"PtgTbl",f:l4},3:{n:"PtgAdd",f:Ve},4:{n:"PtgSub",f:Ve},5:{n:"PtgMul",f:Ve},6:{n:"PtgDiv",f:Ve},7:{n:"PtgPower",f:Ve},8:{n:"PtgConcat",f:Ve},9:{n:"PtgLt",f:Ve},10:{n:"PtgLe",f:Ve},11:{n:"PtgEq",f:Ve},12:{n:"PtgGe",f:Ve},13:{n:"PtgGt",f:Ve},14:{n:"PtgNe",f:Ve},15:{n:"PtgIsect",f:Ve},16:{n:"PtgUnion",f:Ve},17:{n:"PtgRange",f:Ve},18:{n:"PtgUplus",f:Ve},19:{n:"PtgUminus",f:Ve},20:{n:"PtgPercent",f:Ve},21:{n:"PtgParen",f:Ve},22:{n:"PtgMissArg",f:Ve},23:{n:"PtgStr",f:YA},26:{n:"PtgSheet",f:w4},27:{n:"PtgEndSheet",f:_4},28:{n:"PtgErr",f:GA},29:{n:"PtgBool",f:XA},30:{n:"PtgInt",f:VA},31:{n:"PtgNum",f:KA},32:{n:"PtgArray",f:FA},33:{n:"PtgFunc",f:zA},34:{n:"PtgFuncVar",f:$A},35:{n:"PtgName",f:e4},36:{n:"PtgRef",f:MA},37:{n:"PtgArea",f:EA},38:{n:"PtgMemArea",f:t4},39:{n:"PtgMemErr",f:o4},40:{n:"PtgMemNoMem",f:c4},41:{n:"PtgMemFunc",f:r4},42:{n:"PtgRefErr",f:i4},43:{n:"PtgAreaErr",f:AA},44:{n:"PtgRefN",f:BA},45:{n:"PtgAreaN",f:CA},46:{n:"PtgMemAreaN",f:k4},47:{n:"PtgMemNoMemN",f:E4},57:{n:"PtgNameX",f:n4},58:{n:"PtgRef3d",f:UA},59:{n:"PtgArea3d",f:TA},60:{n:"PtgRefErr3d",f:s4},61:{n:"PtgAreaErr3d",f:SA},255:{}},A4={64:32,96:32,65:33,97:33,66:34,98:34,67:35,99:35,68:36,100:36,69:37,101:37,70:38,102:38,71:39,103:39,72:40,104:40,73:41,105:41,74:42,106:42,75:43,107:43,76:44,108:44,77:45,109:45,78:46,110:46,79:47,111:47,88:34,120:34,89:57,121:57,90:58,122:58,91:59,123:59,92:60,124:60,93:61,125:61},S4={1:{n:"PtgElfLel",f:Xp},2:{n:"PtgElfRw",f:g4},3:{n:"PtgElfCol",f:d4},6:{n:"PtgElfRwV",f:j4},7:{n:"PtgElfColV",f:f4},10:{n:"PtgElfRadical",f:p4},11:{n:"PtgElfRadicalS",f:m4},13:{n:"PtgElfColS",f:u4},15:{n:"PtgElfColSV",f:v4},16:{n:"PtgElfRadicalLel",f:h4},25:{n:"PtgList",f:y4},29:{n:"PtgSxName",f:b4},255:{}},C4={0:{n:"PtgAttrNoop",f:T4},1:{n:"PtgAttrSemi",f:PA},2:{n:"PtgAttrIf",f:IA},4:{n:"PtgAttrChoose",f:OA},8:{n:"PtgAttrGoto",f:RA},16:{n:"PtgAttrSum",f:HA},32:{n:"PtgAttrBaxcel",f:nv},33:{n:"PtgAttrBaxcel",f:nv},64:{n:"PtgAttrSpace",f:NA},65:{n:"PtgAttrSpaceSemi",f:LA},128:{n:"PtgAttrIfError",f:DA},255:{}};function ei(e,n,a,t){if(t.biff<8)return pn(e,n);for(var r=e.l+n,i=[],s=0;s!==a.length;++s)switch(a[s][0]){case"PtgArray":a[s][1]=QA(e,0,t),i.push(a[s][1]);break;case"PtgMemArea":a[s][2]=ZA(e,a[s][1],t),i.push(a[s][2]);break;case"PtgExp":t&&t.biff==12&&(a[s][1][1]=e.read_shift(4),i.push(a[s][1]));break;case"PtgList":case"PtgElfRadicalS":case"PtgElfColS":case"PtgElfColSV":throw"Unsupported "+a[s][0]}return n=r-e.l,n!==0&&i.push(pn(e,n)),i}function ni(e,n,a){for(var t=e.l+n,r,i,s=[];t!=e.l;)n=t-e.l,i=e[e.l],r=av[i]||av[A4[i]],(i===24||i===25)&&(r=(i===24?S4:C4)[e[e.l+1]]),!r||!r.f?pn(e,n):s.push([r.n,r.f(e,n,a)]);return s}function F4(e){for(var n=[],a=0;a<e.length;++a){for(var t=e[a],r=[],i=0;i<t.length;++i){var s=t[i];if(s)switch(s[0]){case 2:r.push('"'+s[1].replace(/"/g,'""')+'"');break;default:r.push(s[1])}else r.push("")}n.push(r.join(","))}return n.join(";")}var O4={PtgAdd:"+",PtgConcat:"&",PtgDiv:"/",PtgEq:"=",PtgGe:">=",PtgGt:">",PtgLe:"<=",PtgLt:"<",PtgMul:"*",PtgNe:"<>",PtgPower:"^",PtgSub:"-"};function R4(e,n){if(!e&&!(n&&n.biff<=5&&n.biff>=2))throw new Error("empty sheet name");return/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)?"'"+e+"'":e}function Kp(e,n,a){if(!e)return"SH33TJSERR0";if(a.biff>8&&(!e.XTI||!e.XTI[n]))return e.SheetNames[n];if(!e.XTI)return"SH33TJSERR6";var t=e.XTI[n];if(a.biff<8)return n>1e4&&(n-=65536),n<0&&(n=-n),n==0?"":e.XTI[n-1];if(!t)return"SH33TJSERR1";var r="";if(a.biff>8)switch(e[t[0]][0]){case 357:return r=t[1]==-1?"#REF":e.SheetNames[t[1]],t[1]==t[2]?r:r+":"+e.SheetNames[t[2]];case 358:return a.SID!=null?e.SheetNames[a.SID]:"SH33TJSSAME"+e[t[0]][0];case 355:default:return"SH33TJSSRC"+e[t[0]][0]}switch(e[t[0]][0][0]){case 1025:return r=t[1]==-1?"#REF":e.SheetNames[t[1]]||"SH33TJSERR3",t[1]==t[2]?r:r+":"+e.SheetNames[t[2]];case 14849:return e[t[0]].slice(1).map(function(i){return i.Name}).join(";;");default:return e[t[0]][0][3]?(r=t[1]==-1?"#REF":e[t[0]][0][3][t[1]]||"SH33TJSERR4",t[1]==t[2]?r:r+":"+e[t[0]][0][3][t[2]]):"SH33TJSERR2"}}function tv(e,n,a){var t=Kp(e,n,a);return t=="#REF"?t:R4(t,a)}function ln(e,n,a,t,r){var i=r&&r.biff||8,s={s:{c:0,r:0}},o=[],c,l,d,u=0,f=0,v,h="";if(!e[0]||!e[0][0])return"";for(var p=-1,m="",y=0,T=e[0].length;y<T;++y){var j=e[0][y];switch(j[0]){case"PtgUminus":o.push("-"+o.pop());break;case"PtgUplus":o.push("+"+o.pop());break;case"PtgPercent":o.push(o.pop()+"%");break;case"PtgAdd":case"PtgConcat":case"PtgDiv":case"PtgEq":case"PtgGe":case"PtgGt":case"PtgLe":case"PtgLt":case"PtgMul":case"PtgNe":case"PtgPower":case"PtgSub":if(c=o.pop(),l=o.pop(),p>=0){switch(e[0][p][1][0]){case 0:m=Ue(" ",e[0][p][1][1]);break;case 1:m=Ue("\r",e[0][p][1][1]);break;default:if(m="",r.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][p][1][0])}l=l+m,p=-1}o.push(l+O4[j[0]]+c);break;case"PtgIsect":c=o.pop(),l=o.pop(),o.push(l+" "+c);break;case"PtgUnion":c=o.pop(),l=o.pop(),o.push(l+","+c);break;case"PtgRange":c=o.pop(),l=o.pop(),o.push(l+":"+c);break;case"PtgAttrChoose":break;case"PtgAttrGoto":break;case"PtgAttrIf":break;case"PtgAttrIfError":break;case"PtgRef":d=gr(j[1][1],s,r),o.push(jr(d,i));break;case"PtgRefN":d=a?gr(j[1][1],a,r):j[1][1],o.push(jr(d,i));break;case"PtgRef3d":u=j[1][1],d=gr(j[1][2],s,r),h=tv(t,u,r),o.push(h+"!"+jr(d,i));break;case"PtgFunc":case"PtgFuncVar":var R=j[1][0],N=j[1][1];R||(R=0),R&=127;var F=R==0?[]:o.slice(-R);o.length-=R,N==="User"&&(N=F.shift()),o.push(N+"("+F.join(",")+")");break;case"PtgBool":o.push(j[1]?"TRUE":"FALSE");break;case"PtgInt":o.push(j[1]);break;case"PtgNum":o.push(String(j[1]));break;case"PtgStr":o.push('"'+j[1].replace(/"/g,'""')+'"');break;case"PtgErr":o.push(j[1]);break;case"PtgAreaN":v=Lu(j[1][1],a?{s:a}:s,r),o.push(eo(v,r));break;case"PtgArea":v=Lu(j[1][1],s,r),o.push(eo(v,r));break;case"PtgArea3d":u=j[1][1],v=j[1][2],h=tv(t,u,r),o.push(h+"!"+eo(v,r));break;case"PtgAttrSum":o.push("SUM("+o.pop()+")");break;case"PtgAttrBaxcel":case"PtgAttrSemi":break;case"PtgName":f=j[1][2];var _=(t.names||[])[f-1]||(t[0]||[])[f],M=_?_.Name:"SH33TJSNAME"+String(f);M&&M.slice(0,6)=="_xlfn."&&!r.xlfn&&(M=M.slice(6)),o.push(M);break;case"PtgNameX":var I=j[1][1];f=j[1][2];var X;if(r.biff<=5)I<0&&(I=-I),t[I]&&(X=t[I][f]);else{var W="";if(((t[I]||[])[0]||[])[0]==14849||(((t[I]||[])[0]||[])[0]==1025?t[I][f]&&t[I][f].itab>0&&(W=t.SheetNames[t[I][f].itab-1]+"!"):W=t.SheetNames[f-1]+"!"),t[I]&&t[I][f])W+=t[I][f].Name;else if(t[0]&&t[0][f])W+=t[0][f].Name;else{var x=(Kp(t,I,r)||"").split(";;");x[f-1]?W=x[f-1]:W+="SH33TJSERRX"}o.push(W);break}X||(X={Name:"SH33TJSERRY"}),o.push(X.Name);break;case"PtgParen":var C="(",U=")";if(p>=0){switch(m="",e[0][p][1][0]){case 2:C=Ue(" ",e[0][p][1][1])+C;break;case 3:C=Ue("\r",e[0][p][1][1])+C;break;case 4:U=Ue(" ",e[0][p][1][1])+U;break;case 5:U=Ue("\r",e[0][p][1][1])+U;break;default:if(r.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][p][1][0])}p=-1}o.push(C+o.pop()+U);break;case"PtgRefErr":o.push("#REF!");break;case"PtgRefErr3d":o.push("#REF!");break;case"PtgExp":d={c:j[1][1],r:j[1][0]};var K={c:a.c,r:a.r};if(t.sharedf[me(d)]){var Q=t.sharedf[me(d)];o.push(ln(Q,s,K,t,r))}else{var ee=!1;for(c=0;c!=t.arrayf.length;++c)if(l=t.arrayf[c],!(d.c<l[0].s.c||d.c>l[0].e.c)&&!(d.r<l[0].s.r||d.r>l[0].e.r)){o.push(ln(l[1],s,K,t,r)),ee=!0;break}ee||o.push(j[1])}break;case"PtgArray":o.push("{"+F4(j[1])+"}");break;case"PtgMemArea":break;case"PtgAttrSpace":case"PtgAttrSpaceSemi":p=y;break;case"PtgTbl":break;case"PtgMemErr":break;case"PtgMissArg":o.push("");break;case"PtgAreaErr":o.push("#REF!");break;case"PtgAreaErr3d":o.push("#REF!");break;case"PtgList":o.push("Table"+j[1].idx+"[#"+j[1].rt+"]");break;case"PtgMemAreaN":case"PtgMemNoMemN":case"PtgAttrNoop":case"PtgSheet":case"PtgEndSheet":break;case"PtgMemFunc":break;case"PtgMemNoMem":break;case"PtgElfCol":case"PtgElfColS":case"PtgElfColSV":case"PtgElfColV":case"PtgElfLel":case"PtgElfRadical":case"PtgElfRadicalLel":case"PtgElfRadicalS":case"PtgElfRw":case"PtgElfRwV":throw new Error("Unsupported ELFs");case"PtgSxName":throw new Error("Unrecognized Formula Token: "+String(j));default:throw new Error("Unrecognized Formula Token: "+String(j))}var ve=["PtgAttrSpace","PtgAttrSpaceSemi","PtgAttrGoto"];if(r.biff!=3&&p>=0&&ve.indexOf(e[0][y][0])==-1){j=e[0][p];var L=!0;switch(j[1][0]){case 4:L=!1;case 0:m=Ue(" ",j[1][1]);break;case 5:L=!1;case 1:m=Ue("\r",j[1][1]);break;default:if(m="",r.WTF)throw new Error("Unexpected PtgAttrSpaceType "+j[1][0])}o.push((L?m:"")+o.pop()+(L?"":m)),p=-1}}if(o.length>1&&r.WTF)throw new Error("bad formula stack");return o[0]}function I4(e,n,a){var t=e.l+n,r=a.biff==2?1:2,i,s=e.read_shift(r);if(s==65535)return[[],pn(e,n-2)];var o=ni(e,s,a);return n!==s+r&&(i=ei(e,n-s-r,o,a)),e.l=t,[o,i]}function D4(e,n,a){var t=e.l+n,r=a.biff==2?1:2,i,s=e.read_shift(r);if(s==65535)return[[],pn(e,n-2)];var o=ni(e,s,a);return n!==s+r&&(i=ei(e,n-s-r,o,a)),e.l=t,[o,i]}function P4(e,n,a,t){var r=e.l+n,i=ni(e,t,a),s;return r!==e.l&&(s=ei(e,r-e.l,i,a)),[i,s]}function N4(e,n,a){var t=e.l+n,r,i=e.read_shift(2),s=ni(e,i,a);return i==65535?[[],pn(e,n-2)]:(n!==i+2&&(r=ei(e,t-i-2,s,a)),[s,r])}function L4(e){var n;if(xa(e,e.l+6)!==65535)return[dn(e),"n"];switch(e[e.l]){case 0:return e.l+=8,["String","s"];case 1:return n=e[e.l+2]===1,e.l+=8,[n,"b"];case 2:return n=e[e.l+2],e.l+=8,[n,"e"];case 3:return e.l+=8,["","s"]}return[]}function to(e,n,a){var t=e.l+n,r=fa(e);a.biff==2&&++e.l;var i=L4(e),s=e.read_shift(1);a.biff!=2&&(e.read_shift(1),a.biff>=5&&e.read_shift(4));var o=D4(e,t-e.l,a);return{cell:r,val:i[0],formula:o,shared:s>>3&1,tt:i[1]}}function Is(e,n,a){var t=e.read_shift(4),r=ni(e,t,a),i=e.read_shift(4),s=i>0?ei(e,i,r,a):null;return[r,s]}var M4=Is,Ds=Is,B4=Is,U4=Is,z4={0:"BEEP",1:"OPEN",2:"OPEN.LINKS",3:"CLOSE.ALL",4:"SAVE",5:"SAVE.AS",6:"FILE.DELETE",7:"PAGE.SETUP",8:"PRINT",9:"PRINTER.SETUP",10:"QUIT",11:"NEW.WINDOW",12:"ARRANGE.ALL",13:"WINDOW.SIZE",14:"WINDOW.MOVE",15:"FULL",16:"CLOSE",17:"RUN",22:"SET.PRINT.AREA",23:"SET.PRINT.TITLES",24:"SET.PAGE.BREAK",25:"REMOVE.PAGE.BREAK",26:"FONT",27:"DISPLAY",28:"PROTECT.DOCUMENT",29:"PRECISION",30:"A1.R1C1",31:"CALCULATE.NOW",32:"CALCULATION",34:"DATA.FIND",35:"EXTRACT",36:"DATA.DELETE",37:"SET.DATABASE",38:"SET.CRITERIA",39:"SORT",40:"DATA.SERIES",41:"TABLE",42:"FORMAT.NUMBER",43:"ALIGNMENT",44:"STYLE",45:"BORDER",46:"CELL.PROTECTION",47:"COLUMN.WIDTH",48:"UNDO",49:"CUT",50:"COPY",51:"PASTE",52:"CLEAR",53:"PASTE.SPECIAL",54:"EDIT.DELETE",55:"INSERT",56:"FILL.RIGHT",57:"FILL.DOWN",61:"DEFINE.NAME",62:"CREATE.NAMES",63:"FORMULA.GOTO",64:"FORMULA.FIND",65:"SELECT.LAST.CELL",66:"SHOW.ACTIVE.CELL",67:"GALLERY.AREA",68:"GALLERY.BAR",69:"GALLERY.COLUMN",70:"GALLERY.LINE",71:"GALLERY.PIE",72:"GALLERY.SCATTER",73:"COMBINATION",74:"PREFERRED",75:"ADD.OVERLAY",76:"GRIDLINES",77:"SET.PREFERRED",78:"AXES",79:"LEGEND",80:"ATTACH.TEXT",81:"ADD.ARROW",82:"SELECT.CHART",83:"SELECT.PLOT.AREA",84:"PATTERNS",85:"MAIN.CHART",86:"OVERLAY",87:"SCALE",88:"FORMAT.LEGEND",89:"FORMAT.TEXT",90:"EDIT.REPEAT",91:"PARSE",92:"JUSTIFY",93:"HIDE",94:"UNHIDE",95:"WORKSPACE",96:"FORMULA",97:"FORMULA.FILL",98:"FORMULA.ARRAY",99:"DATA.FIND.NEXT",100:"DATA.FIND.PREV",101:"FORMULA.FIND.NEXT",102:"FORMULA.FIND.PREV",103:"ACTIVATE",104:"ACTIVATE.NEXT",105:"ACTIVATE.PREV",106:"UNLOCKED.NEXT",107:"UNLOCKED.PREV",108:"COPY.PICTURE",109:"SELECT",110:"DELETE.NAME",111:"DELETE.FORMAT",112:"VLINE",113:"HLINE",114:"VPAGE",115:"HPAGE",116:"VSCROLL",117:"HSCROLL",118:"ALERT",119:"NEW",120:"CANCEL.COPY",121:"SHOW.CLIPBOARD",122:"MESSAGE",124:"PASTE.LINK",125:"APP.ACTIVATE",126:"DELETE.ARROW",127:"ROW.HEIGHT",128:"FORMAT.MOVE",129:"FORMAT.SIZE",130:"FORMULA.REPLACE",131:"SEND.KEYS",132:"SELECT.SPECIAL",133:"APPLY.NAMES",134:"REPLACE.FONT",135:"FREEZE.PANES",136:"SHOW.INFO",137:"SPLIT",138:"ON.WINDOW",139:"ON.DATA",140:"DISABLE.INPUT",142:"OUTLINE",143:"LIST.NAMES",144:"FILE.CLOSE",145:"SAVE.WORKBOOK",146:"DATA.FORM",147:"COPY.CHART",148:"ON.TIME",149:"WAIT",150:"FORMAT.FONT",151:"FILL.UP",152:"FILL.LEFT",153:"DELETE.OVERLAY",155:"SHORT.MENUS",159:"SET.UPDATE.STATUS",161:"COLOR.PALETTE",162:"DELETE.STYLE",163:"WINDOW.RESTORE",164:"WINDOW.MAXIMIZE",166:"CHANGE.LINK",167:"CALCULATE.DOCUMENT",168:"ON.KEY",169:"APP.RESTORE",170:"APP.MOVE",171:"APP.SIZE",172:"APP.MINIMIZE",173:"APP.MAXIMIZE",174:"BRING.TO.FRONT",175:"SEND.TO.BACK",185:"MAIN.CHART.TYPE",186:"OVERLAY.CHART.TYPE",187:"SELECT.END",188:"OPEN.MAIL",189:"SEND.MAIL",190:"STANDARD.FONT",191:"CONSOLIDATE",192:"SORT.SPECIAL",193:"GALLERY.3D.AREA",194:"GALLERY.3D.COLUMN",195:"GALLERY.3D.LINE",196:"GALLERY.3D.PIE",197:"VIEW.3D",198:"GOAL.SEEK",199:"WORKGROUP",200:"FILL.GROUP",201:"UPDATE.LINK",202:"PROMOTE",203:"DEMOTE",204:"SHOW.DETAIL",206:"UNGROUP",207:"OBJECT.PROPERTIES",208:"SAVE.NEW.OBJECT",209:"SHARE",210:"SHARE.NAME",211:"DUPLICATE",212:"APPLY.STYLE",213:"ASSIGN.TO.OBJECT",214:"OBJECT.PROTECTION",215:"HIDE.OBJECT",216:"SET.EXTRACT",217:"CREATE.PUBLISHER",218:"SUBSCRIBE.TO",219:"ATTRIBUTES",220:"SHOW.TOOLBAR",222:"PRINT.PREVIEW",223:"EDIT.COLOR",224:"SHOW.LEVELS",225:"FORMAT.MAIN",226:"FORMAT.OVERLAY",227:"ON.RECALC",228:"EDIT.SERIES",229:"DEFINE.STYLE",240:"LINE.PRINT",243:"ENTER.DATA",249:"GALLERY.RADAR",250:"MERGE.STYLES",251:"EDITION.OPTIONS",252:"PASTE.PICTURE",253:"PASTE.PICTURE.LINK",254:"SPELLING",256:"ZOOM",259:"INSERT.OBJECT",260:"WINDOW.MINIMIZE",265:"SOUND.NOTE",266:"SOUND.PLAY",267:"FORMAT.SHAPE",268:"EXTEND.POLYGON",269:"FORMAT.AUTO",272:"GALLERY.3D.BAR",273:"GALLERY.3D.SURFACE",274:"FILL.AUTO",276:"CUSTOMIZE.TOOLBAR",277:"ADD.TOOL",278:"EDIT.OBJECT",279:"ON.DOUBLECLICK",280:"ON.ENTRY",281:"WORKBOOK.ADD",282:"WORKBOOK.MOVE",283:"WORKBOOK.COPY",284:"WORKBOOK.OPTIONS",285:"SAVE.WORKSPACE",288:"CHART.WIZARD",289:"DELETE.TOOL",290:"MOVE.TOOL",291:"WORKBOOK.SELECT",292:"WORKBOOK.ACTIVATE",293:"ASSIGN.TO.TOOL",295:"COPY.TOOL",296:"RESET.TOOL",297:"CONSTRAIN.NUMERIC",298:"PASTE.TOOL",302:"WORKBOOK.NEW",305:"SCENARIO.CELLS",306:"SCENARIO.DELETE",307:"SCENARIO.ADD",308:"SCENARIO.EDIT",309:"SCENARIO.SHOW",310:"SCENARIO.SHOW.NEXT",311:"SCENARIO.SUMMARY",312:"PIVOT.TABLE.WIZARD",313:"PIVOT.FIELD.PROPERTIES",314:"PIVOT.FIELD",315:"PIVOT.ITEM",316:"PIVOT.ADD.FIELDS",318:"OPTIONS.CALCULATION",319:"OPTIONS.EDIT",320:"OPTIONS.VIEW",321:"ADDIN.MANAGER",322:"MENU.EDITOR",323:"ATTACH.TOOLBARS",324:"VBAActivate",325:"OPTIONS.CHART",328:"VBA.INSERT.FILE",330:"VBA.PROCEDURE.DEFINITION",336:"ROUTING.SLIP",338:"ROUTE.DOCUMENT",339:"MAIL.LOGON",342:"INSERT.PICTURE",343:"EDIT.TOOL",344:"GALLERY.DOUGHNUT",350:"CHART.TREND",352:"PIVOT.ITEM.PROPERTIES",354:"WORKBOOK.INSERT",355:"OPTIONS.TRANSITION",356:"OPTIONS.GENERAL",370:"FILTER.ADVANCED",373:"MAIL.ADD.MAILER",374:"MAIL.DELETE.MAILER",375:"MAIL.REPLY",376:"MAIL.REPLY.ALL",377:"MAIL.FORWARD",378:"MAIL.NEXT.LETTER",379:"DATA.LABEL",380:"INSERT.TITLE",381:"FONT.PROPERTIES",382:"MACRO.OPTIONS",383:"WORKBOOK.HIDE",384:"WORKBOOK.UNHIDE",385:"WORKBOOK.DELETE",386:"WORKBOOK.NAME",388:"GALLERY.CUSTOM",390:"ADD.CHART.AUTOFORMAT",391:"DELETE.CHART.AUTOFORMAT",392:"CHART.ADD.DATA",393:"AUTO.OUTLINE",394:"TAB.ORDER",395:"SHOW.DIALOG",396:"SELECT.ALL",397:"UNGROUP.SHEETS",398:"SUBTOTAL.CREATE",399:"SUBTOTAL.REMOVE",400:"RENAME.OBJECT",412:"WORKBOOK.SCROLL",413:"WORKBOOK.NEXT",414:"WORKBOOK.PREV",415:"WORKBOOK.TAB.SPLIT",416:"FULL.SCREEN",417:"WORKBOOK.PROTECT",420:"SCROLLBAR.PROPERTIES",421:"PIVOT.SHOW.PAGES",422:"TEXT.TO.COLUMNS",423:"FORMAT.CHARTTYPE",424:"LINK.FORMAT",425:"TRACER.DISPLAY",430:"TRACER.NAVIGATE",431:"TRACER.CLEAR",432:"TRACER.ERROR",433:"PIVOT.FIELD.GROUP",434:"PIVOT.FIELD.UNGROUP",435:"CHECKBOX.PROPERTIES",436:"LABEL.PROPERTIES",437:"LISTBOX.PROPERTIES",438:"EDITBOX.PROPERTIES",439:"PIVOT.REFRESH",440:"LINK.COMBO",441:"OPEN.TEXT",442:"HIDE.DIALOG",443:"SET.DIALOG.FOCUS",444:"ENABLE.OBJECT",445:"PUSHBUTTON.PROPERTIES",446:"SET.DIALOG.DEFAULT",447:"FILTER",448:"FILTER.SHOW.ALL",449:"CLEAR.OUTLINE",450:"FUNCTION.WIZARD",451:"ADD.LIST.ITEM",452:"SET.LIST.ITEM",453:"REMOVE.LIST.ITEM",454:"SELECT.LIST.ITEM",455:"SET.CONTROL.VALUE",456:"SAVE.COPY.AS",458:"OPTIONS.LISTS.ADD",459:"OPTIONS.LISTS.DELETE",460:"SERIES.AXES",461:"SERIES.X",462:"SERIES.Y",463:"ERRORBAR.X",464:"ERRORBAR.Y",465:"FORMAT.CHART",466:"SERIES.ORDER",467:"MAIL.LOGOFF",468:"CLEAR.ROUTING.SLIP",469:"APP.ACTIVATE.MICROSOFT",470:"MAIL.EDIT.MAILER",471:"ON.SHEET",472:"STANDARD.WIDTH",473:"SCENARIO.MERGE",474:"SUMMARY.INFO",475:"FIND.FILE",476:"ACTIVE.CELL.FONT",477:"ENABLE.TIPWIZARD",478:"VBA.MAKE.ADDIN",480:"INSERTDATATABLE",481:"WORKGROUP.OPTIONS",482:"MAIL.SEND.MAILER",485:"AUTOCORRECT",489:"POST.DOCUMENT",491:"PICKLIST",493:"VIEW.SHOW",494:"VIEW.DEFINE",495:"VIEW.DELETE",509:"SHEET.BACKGROUND",510:"INSERT.MAP.OBJECT",511:"OPTIONS.MENONO",517:"MSOCHECKS",518:"NORMAL",519:"LAYOUT",520:"RM.PRINT.AREA",521:"CLEAR.PRINT.AREA",522:"ADD.PRINT.AREA",523:"MOVE.BRK",545:"HIDECURR.NOTE",546:"HIDEALL.NOTES",547:"DELETE.NOTE",548:"TRAVERSE.NOTES",549:"ACTIVATE.NOTES",620:"PROTECT.REVISIONS",621:"UNPROTECT.REVISIONS",647:"OPTIONS.ME",653:"WEB.PUBLISH",667:"NEWWEBQUERY",673:"PIVOT.TABLE.CHART",753:"OPTIONS.SAVE",755:"OPTIONS.SPELL",808:"HIDEALL.INKANNOTS"},Yp={0:"COUNT",1:"IF",2:"ISNA",3:"ISERROR",4:"SUM",5:"AVERAGE",6:"MIN",7:"MAX",8:"ROW",9:"COLUMN",10:"NA",11:"NPV",12:"STDEV",13:"DOLLAR",14:"FIXED",15:"SIN",16:"COS",17:"TAN",18:"ATAN",19:"PI",20:"SQRT",21:"EXP",22:"LN",23:"LOG10",24:"ABS",25:"INT",26:"SIGN",27:"ROUND",28:"LOOKUP",29:"INDEX",30:"REPT",31:"MID",32:"LEN",33:"VALUE",34:"TRUE",35:"FALSE",36:"AND",37:"OR",38:"NOT",39:"MOD",40:"DCOUNT",41:"DSUM",42:"DAVERAGE",43:"DMIN",44:"DMAX",45:"DSTDEV",46:"VAR",47:"DVAR",48:"TEXT",49:"LINEST",50:"TREND",51:"LOGEST",52:"GROWTH",53:"GOTO",54:"HALT",55:"RETURN",56:"PV",57:"FV",58:"NPER",59:"PMT",60:"RATE",61:"MIRR",62:"IRR",63:"RAND",64:"MATCH",65:"DATE",66:"TIME",67:"DAY",68:"MONTH",69:"YEAR",70:"WEEKDAY",71:"HOUR",72:"MINUTE",73:"SECOND",74:"NOW",75:"AREAS",76:"ROWS",77:"COLUMNS",78:"OFFSET",79:"ABSREF",80:"RELREF",81:"ARGUMENT",82:"SEARCH",83:"TRANSPOSE",84:"ERROR",85:"STEP",86:"TYPE",87:"ECHO",88:"SET.NAME",89:"CALLER",90:"DEREF",91:"WINDOWS",92:"SERIES",93:"DOCUMENTS",94:"ACTIVE.CELL",95:"SELECTION",96:"RESULT",97:"ATAN2",98:"ASIN",99:"ACOS",100:"CHOOSE",101:"HLOOKUP",102:"VLOOKUP",103:"LINKS",104:"INPUT",105:"ISREF",106:"GET.FORMULA",107:"GET.NAME",108:"SET.VALUE",109:"LOG",110:"EXEC",111:"CHAR",112:"LOWER",113:"UPPER",114:"PROPER",115:"LEFT",116:"RIGHT",117:"EXACT",118:"TRIM",119:"REPLACE",120:"SUBSTITUTE",121:"CODE",122:"NAMES",123:"DIRECTORY",124:"FIND",125:"CELL",126:"ISERR",127:"ISTEXT",128:"ISNUMBER",129:"ISBLANK",130:"T",131:"N",132:"FOPEN",133:"FCLOSE",134:"FSIZE",135:"FREADLN",136:"FREAD",137:"FWRITELN",138:"FWRITE",139:"FPOS",140:"DATEVALUE",141:"TIMEVALUE",142:"SLN",143:"SYD",144:"DDB",145:"GET.DEF",146:"REFTEXT",147:"TEXTREF",148:"INDIRECT",149:"REGISTER",150:"CALL",151:"ADD.BAR",152:"ADD.MENU",153:"ADD.COMMAND",154:"ENABLE.COMMAND",155:"CHECK.COMMAND",156:"RENAME.COMMAND",157:"SHOW.BAR",158:"DELETE.MENU",159:"DELETE.COMMAND",160:"GET.CHART.ITEM",161:"DIALOG.BOX",162:"CLEAN",163:"MDETERM",164:"MINVERSE",165:"MMULT",166:"FILES",167:"IPMT",168:"PPMT",169:"COUNTA",170:"CANCEL.KEY",171:"FOR",172:"WHILE",173:"BREAK",174:"NEXT",175:"INITIATE",176:"REQUEST",177:"POKE",178:"EXECUTE",179:"TERMINATE",180:"RESTART",181:"HELP",182:"GET.BAR",183:"PRODUCT",184:"FACT",185:"GET.CELL",186:"GET.WORKSPACE",187:"GET.WINDOW",188:"GET.DOCUMENT",189:"DPRODUCT",190:"ISNONTEXT",191:"GET.NOTE",192:"NOTE",193:"STDEVP",194:"VARP",195:"DSTDEVP",196:"DVARP",197:"TRUNC",198:"ISLOGICAL",199:"DCOUNTA",200:"DELETE.BAR",201:"UNREGISTER",204:"USDOLLAR",205:"FINDB",206:"SEARCHB",207:"REPLACEB",208:"LEFTB",209:"RIGHTB",210:"MIDB",211:"LENB",212:"ROUNDUP",213:"ROUNDDOWN",214:"ASC",215:"DBCS",216:"RANK",219:"ADDRESS",220:"DAYS360",221:"TODAY",222:"VDB",223:"ELSE",224:"ELSE.IF",225:"END.IF",226:"FOR.CELL",227:"MEDIAN",228:"SUMPRODUCT",229:"SINH",230:"COSH",231:"TANH",232:"ASINH",233:"ACOSH",234:"ATANH",235:"DGET",236:"CREATE.OBJECT",237:"VOLATILE",238:"LAST.ERROR",239:"CUSTOM.UNDO",240:"CUSTOM.REPEAT",241:"FORMULA.CONVERT",242:"GET.LINK.INFO",243:"TEXT.BOX",244:"INFO",245:"GROUP",246:"GET.OBJECT",247:"DB",248:"PAUSE",251:"RESUME",252:"FREQUENCY",253:"ADD.TOOLBAR",254:"DELETE.TOOLBAR",255:"User",256:"RESET.TOOLBAR",257:"EVALUATE",258:"GET.TOOLBAR",259:"GET.TOOL",260:"SPELLING.CHECK",261:"ERROR.TYPE",262:"APP.TITLE",263:"WINDOW.TITLE",264:"SAVE.TOOLBAR",265:"ENABLE.TOOL",266:"PRESS.TOOL",267:"REGISTER.ID",268:"GET.WORKBOOK",269:"AVEDEV",270:"BETADIST",271:"GAMMALN",272:"BETAINV",273:"BINOMDIST",274:"CHIDIST",275:"CHIINV",276:"COMBIN",277:"CONFIDENCE",278:"CRITBINOM",279:"EVEN",280:"EXPONDIST",281:"FDIST",282:"FINV",283:"FISHER",284:"FISHERINV",285:"FLOOR",286:"GAMMADIST",287:"GAMMAINV",288:"CEILING",289:"HYPGEOMDIST",290:"LOGNORMDIST",291:"LOGINV",292:"NEGBINOMDIST",293:"NORMDIST",294:"NORMSDIST",295:"NORMINV",296:"NORMSINV",297:"STANDARDIZE",298:"ODD",299:"PERMUT",300:"POISSON",301:"TDIST",302:"WEIBULL",303:"SUMXMY2",304:"SUMX2MY2",305:"SUMX2PY2",306:"CHITEST",307:"CORREL",308:"COVAR",309:"FORECAST",310:"FTEST",311:"INTERCEPT",312:"PEARSON",313:"RSQ",314:"STEYX",315:"SLOPE",316:"TTEST",317:"PROB",318:"DEVSQ",319:"GEOMEAN",320:"HARMEAN",321:"SUMSQ",322:"KURT",323:"SKEW",324:"ZTEST",325:"LARGE",326:"SMALL",327:"QUARTILE",328:"PERCENTILE",329:"PERCENTRANK",330:"MODE",331:"TRIMMEAN",332:"TINV",334:"MOVIE.COMMAND",335:"GET.MOVIE",336:"CONCATENATE",337:"POWER",338:"PIVOT.ADD.DATA",339:"GET.PIVOT.TABLE",340:"GET.PIVOT.FIELD",341:"GET.PIVOT.ITEM",342:"RADIANS",343:"DEGREES",344:"SUBTOTAL",345:"SUMIF",346:"COUNTIF",347:"COUNTBLANK",348:"SCENARIO.GET",349:"OPTIONS.LISTS.GET",350:"ISPMT",351:"DATEDIF",352:"DATESTRING",353:"NUMBERSTRING",354:"ROMAN",355:"OPEN.DIALOG",356:"SAVE.DIALOG",357:"VIEW.GET",358:"GETPIVOTDATA",359:"HYPERLINK",360:"PHONETIC",361:"AVERAGEA",362:"MAXA",363:"MINA",364:"STDEVPA",365:"VARPA",366:"STDEVA",367:"VARA",368:"BAHTTEXT",369:"THAIDAYOFWEEK",370:"THAIDIGIT",371:"THAIMONTHOFYEAR",372:"THAINUMSOUND",373:"THAINUMSTRING",374:"THAISTRINGLENGTH",375:"ISTHAIDIGIT",376:"ROUNDBAHTDOWN",377:"ROUNDBAHTUP",378:"THAIYEAR",379:"RTD",380:"CUBEVALUE",381:"CUBEMEMBER",382:"CUBEMEMBERPROPERTY",383:"CUBERANKEDMEMBER",384:"HEX2BIN",385:"HEX2DEC",386:"HEX2OCT",387:"DEC2BIN",388:"DEC2HEX",389:"DEC2OCT",390:"OCT2BIN",391:"OCT2HEX",392:"OCT2DEC",393:"BIN2DEC",394:"BIN2OCT",395:"BIN2HEX",396:"IMSUB",397:"IMDIV",398:"IMPOWER",399:"IMABS",400:"IMSQRT",401:"IMLN",402:"IMLOG2",403:"IMLOG10",404:"IMSIN",405:"IMCOS",406:"IMEXP",407:"IMARGUMENT",408:"IMCONJUGATE",409:"IMAGINARY",410:"IMREAL",411:"COMPLEX",412:"IMSUM",413:"IMPRODUCT",414:"SERIESSUM",415:"FACTDOUBLE",416:"SQRTPI",417:"QUOTIENT",418:"DELTA",419:"GESTEP",420:"ISEVEN",421:"ISODD",422:"MROUND",423:"ERF",424:"ERFC",425:"BESSELJ",426:"BESSELK",427:"BESSELY",428:"BESSELI",429:"XIRR",430:"XNPV",431:"PRICEMAT",432:"YIELDMAT",433:"INTRATE",434:"RECEIVED",435:"DISC",436:"PRICEDISC",437:"YIELDDISC",438:"TBILLEQ",439:"TBILLPRICE",440:"TBILLYIELD",441:"PRICE",442:"YIELD",443:"DOLLARDE",444:"DOLLARFR",445:"NOMINAL",446:"EFFECT",447:"CUMPRINC",448:"CUMIPMT",449:"EDATE",450:"EOMONTH",451:"YEARFRAC",452:"COUPDAYBS",453:"COUPDAYS",454:"COUPDAYSNC",455:"COUPNCD",456:"COUPNUM",457:"COUPPCD",458:"DURATION",459:"MDURATION",460:"ODDLPRICE",461:"ODDLYIELD",462:"ODDFPRICE",463:"ODDFYIELD",464:"RANDBETWEEN",465:"WEEKNUM",466:"AMORDEGRC",467:"AMORLINC",468:"CONVERT",724:"SHEETJS",469:"ACCRINT",470:"ACCRINTM",471:"WORKDAY",472:"NETWORKDAYS",473:"GCD",474:"MULTINOMIAL",475:"LCM",476:"FVSCHEDULE",477:"CUBEKPIMEMBER",478:"CUBESET",479:"CUBESETCOUNT",480:"IFERROR",481:"COUNTIFS",482:"SUMIFS",483:"AVERAGEIF",484:"AVERAGEIFS"},$4={2:1,3:1,10:0,15:1,16:1,17:1,18:1,19:0,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,34:0,35:0,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,63:0,65:3,66:3,67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:0,75:1,76:1,77:1,79:2,80:2,83:1,85:0,86:1,89:0,90:1,94:0,95:0,97:2,98:1,99:1,101:3,102:3,105:1,106:1,108:2,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,144:4,161:1,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,186:1,189:3,190:1,195:3,196:3,197:1,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,225:0,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,247:4,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,382:3,385:1,392:1,393:1,396:2,397:2,398:2,399:1,400:1,401:1,402:1,403:1,404:1,405:1,406:1,407:1,408:1,409:1,410:1,414:4,415:1,416:1,417:2,420:1,421:1,422:2,424:1,425:2,426:2,427:2,428:2,430:3,438:3,439:3,440:3,443:2,444:2,445:2,446:2,447:6,448:6,449:2,450:2,464:2,468:3,476:2,479:1,480:2,65535:0};function rv(e){return e.slice(0,3)=="of:"&&(e=e.slice(3)),e.charCodeAt(0)==61&&(e=e.slice(1),e.charCodeAt(0)==61&&(e=e.slice(1))),e=e.replace(/COM\.MICROSOFT\./g,""),e=e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,function(n,a){return a.replace(/\./g,"")}),e=e.replace(/\[.(#[A-Z]*[?!])\]/g,"$1"),e.replace(/[;~]/g,",").replace(/\|/g,";")}function ro(e){var n=e.split(":"),a=n[0].split(".")[0];return[a,n[0].split(".")[1]+(n.length>1?":"+(n[1].split(".")[1]||n[1].split(".")[0]):"")]}var wr={},Nt={};function _r(e,n){if(e){var a=[.7,.7,.75,.75,.3,.3];n=="xlml"&&(a=[1,1,1,1,.5,.5]),e.left==null&&(e.left=a[0]),e.right==null&&(e.right=a[1]),e.top==null&&(e.top=a[2]),e.bottom==null&&(e.bottom=a[3]),e.header==null&&(e.header=a[4]),e.footer==null&&(e.footer=a[5])}}function Jp(e,n,a,t,r,i){try{t.cellNF&&(e.z=je[n])}catch(o){if(t.WTF)throw o}if(!(e.t==="z"&&!t.cellStyles)){if(e.t==="d"&&typeof e.v=="string"&&(e.v=an(e.v)),(!t||t.cellText!==!1)&&e.t!=="z")try{if(je[n]==null&&rt(q_[n]||"General",n),e.t==="e")e.w=e.w||wt[e.v];else if(n===0)if(e.t==="n")(e.v|0)===e.v?e.w=e.v.toString(10):e.w=Dr(e.v);else if(e.t==="d"){var s=wn(e.v);(s|0)===s?e.w=s.toString(10):e.w=Dr(s)}else{if(e.v===void 0)return"";e.w=ft(e.v,Nt)}else e.t==="d"?e.w=qn(n,wn(e.v),Nt):e.w=qn(n,e.v,Nt)}catch(o){if(t.WTF)throw o}if(t.cellStyles&&a!=null)try{e.s=i.Fills[a],e.s.fgColor&&e.s.fgColor.theme&&!e.s.fgColor.rgb&&(e.s.fgColor.rgb=hs(r.themeElements.clrScheme[e.s.fgColor.theme].rgb,e.s.fgColor.tint||0),t.WTF&&(e.s.fgColor.raw_rgb=r.themeElements.clrScheme[e.s.fgColor.theme].rgb)),e.s.bgColor&&e.s.bgColor.theme&&(e.s.bgColor.rgb=hs(r.themeElements.clrScheme[e.s.bgColor.theme].rgb,e.s.bgColor.tint||0),t.WTF&&(e.s.bgColor.raw_rgb=r.themeElements.clrScheme[e.s.bgColor.theme].rgb))}catch(o){if(t.WTF&&i.Fills)throw o}}}function q4(e,n){var a=ze(n);a.s.r<=a.e.r&&a.s.c<=a.e.c&&a.s.r>=0&&a.s.c>=0&&(e["!ref"]=Ee(a))}var H4=/<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,W4=/<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/,G4=/<(?:\w:)?hyperlink [^>]*>/mg,V4=/"(\w*:\w*)"/,X4=/<(?:\w:)?col\b[^>]*[\/]?>/g,K4=/<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,Y4=/<(?:\w:)?pageMargins[^>]*\/>/g,Zp=/<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,J4=/<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/,Z4=/<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;function Q4(e,n,a,t,r,i,s){if(!e)return e;t||(t={"!id":{}});var o=n.dense?[]:{},c={s:{r:2e6,c:2e6},e:{r:0,c:0}},l="",d="",u=e.match(W4);u?(l=e.slice(0,u.index),d=e.slice(u.index+u[0].length)):l=d=e;var f=l.match(Zp);f?jl(f[0],o,r,a):(f=l.match(J4))&&eS(f[0],f[1]||"",o,r,a);var v=(l.match(/<(?:\w*:)?dimension/)||{index:-1}).index;if(v>0){var h=l.slice(v,v+50).match(V4);h&&q4(o,h[1])}var p=l.match(Z4);p&&p[1]&&sS(p[1],r);var m=[];if(n.cellStyles){var y=l.match(X4);y&&tS(m,y)}u&&oS(u[1],o,n,c,i,s);var T=d.match(K4);T&&(o["!autofilter"]=rS(T[0]));var j=[],R=d.match(H4);if(R)for(v=0;v!=R.length;++v)j[v]=ze(R[v].slice(R[v].indexOf('"')+1));var N=d.match(G4);N&&nS(o,N,t);var F=d.match(Y4);if(F&&(o["!margins"]=aS(pe(F[0]))),!o["!ref"]&&c.e.c>=c.s.c&&c.e.r>=c.s.r&&(o["!ref"]=Ee(c)),n.sheetRows>0&&o["!ref"]){var _=ze(o["!ref"]);n.sheetRows<=+_.e.r&&(_.e.r=n.sheetRows-1,_.e.r>c.e.r&&(_.e.r=c.e.r),_.e.r<_.s.r&&(_.s.r=_.e.r),_.e.c>c.e.c&&(_.e.c=c.e.c),_.e.c<_.s.c&&(_.s.c=_.e.c),o["!fullref"]=o["!ref"],o["!ref"]=Ee(_))}return m.length>0&&(o["!cols"]=m),j.length>0&&(o["!merges"]=j),o}function jl(e,n,a,t){var r=pe(e);a.Sheets[t]||(a.Sheets[t]={}),r.codeName&&(a.Sheets[t].CodeName=Ae(Oe(r.codeName)))}function eS(e,n,a,t,r){jl(e.slice(0,e.indexOf(">")),a,t,r)}function nS(e,n,a){for(var t=Array.isArray(e),r=0;r!=n.length;++r){var i=pe(Oe(n[r]),!0);if(!i.ref)return;var s=((a||{})["!id"]||[])[i.id];s?(i.Target=s.Target,i.location&&(i.Target+="#"+Ae(i.location))):(i.Target="#"+Ae(i.location),s={Target:i.Target,TargetMode:"Internal"}),i.Rel=s,i.tooltip&&(i.Tooltip=i.tooltip,delete i.tooltip);for(var o=ze(i.ref),c=o.s.r;c<=o.e.r;++c)for(var l=o.s.c;l<=o.e.c;++l){var d=me({c:l,r:c});t?(e[c]||(e[c]=[]),e[c][l]||(e[c][l]={t:"z",v:void 0}),e[c][l].l=i):(e[d]||(e[d]={t:"z",v:void 0}),e[d].l=i)}}}function aS(e){var n={};return["left","right","top","bottom","header","footer"].forEach(function(a){e[a]&&(n[a]=parseFloat(e[a]))}),n}function tS(e,n){for(var a=!1,t=0;t!=n.length;++t){var r=pe(n[t],!0);r.hidden&&(r.hidden=Pe(r.hidden));var i=parseInt(r.min,10)-1,s=parseInt(r.max,10)-1;for(r.outlineLevel&&(r.level=+r.outlineLevel||0),delete r.min,delete r.max,r.width=+r.width,!a&&r.width&&(a=!0,ml(r.width)),Bt(r);i<=s;)e[i++]=rn(r)}}function rS(e){var n={ref:(e.match(/ref="([^"]*)"/)||[])[1]};return n}var iS=/<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;function sS(e,n){n.Views||(n.Views=[{}]),(e.match(iS)||[]).forEach(function(a,t){var r=pe(a);n.Views[t]||(n.Views[t]={}),+r.zoomScale&&(n.Views[t].zoom=+r.zoomScale),Pe(r.rightToLeft)&&(n.Views[t].RTL=!0)})}var oS=function(){var e=/<(?:\w+:)?c[ \/>]/,n=/<\/(?:\w+:)?row>/,a=/r=["']([^"']*)["']/,t=/<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,r=/ref=["']([^"']*)["']/,i=Pr("v"),s=Pr("f");return function(c,l,d,u,f,v){for(var h=0,p="",m=[],y=[],T=0,j=0,R=0,N="",F,_,M=0,I=0,X,W,x=0,C=0,U=Array.isArray(v.CellXf),K,Q=[],ee=[],ve=Array.isArray(l),L=[],ie={},ce=!1,k=!!d.sheetStubs,B=c.split(n),P=0,D=B.length;P!=D;++P){p=B[P].trim();var Z=p.length;if(Z!==0){var re=0;e:for(h=0;h<Z;++h)switch(p[h]){case">":if(p[h-1]!="/"){++h;break e}if(d&&d.cellStyles){if(_=pe(p.slice(re,h),!0),M=_.r!=null?parseInt(_.r,10):M+1,I=-1,d.sheetRows&&d.sheetRows<M)continue;ie={},ce=!1,_.ht&&(ce=!0,ie.hpt=parseFloat(_.ht),ie.hpx=Br(ie.hpt)),_.hidden=="1"&&(ce=!0,ie.hidden=!0),_.outlineLevel!=null&&(ce=!0,ie.level=+_.outlineLevel),ce&&(L[M-1]=ie)}break;case"<":re=h;break}if(re>=h)break;if(_=pe(p.slice(re,h),!0),M=_.r!=null?parseInt(_.r,10):M+1,I=-1,!(d.sheetRows&&d.sheetRows<M)){u.s.r>M-1&&(u.s.r=M-1),u.e.r<M-1&&(u.e.r=M-1),d&&d.cellStyles&&(ie={},ce=!1,_.ht&&(ce=!0,ie.hpt=parseFloat(_.ht),ie.hpx=Br(ie.hpt)),_.hidden=="1"&&(ce=!0,ie.hidden=!0),_.outlineLevel!=null&&(ce=!0,ie.level=+_.outlineLevel),ce&&(L[M-1]=ie)),m=p.slice(h).split(e);for(var le=0;le!=m.length&&m[le].trim().charAt(0)=="<";++le);for(m=m.slice(le),h=0;h!=m.length;++h)if(p=m[h].trim(),p.length!==0){if(y=p.match(a),T=h,j=0,R=0,p="<c "+(p.slice(0,1)=="<"?">":"")+p,y!=null&&y.length===2){for(T=0,N=y[1],j=0;j!=N.length&&!((R=N.charCodeAt(j)-64)<1||R>26);++j)T=26*T+R;--T,I=T}else++I;for(j=0;j!=p.length&&p.charCodeAt(j)!==62;++j);if(++j,_=pe(p.slice(0,j),!0),_.r||(_.r=me({r:M-1,c:I})),N=p.slice(j),F={t:""},(y=N.match(i))!=null&&y[1]!==""&&(F.v=Ae(y[1])),d.cellFormula){if((y=N.match(s))!=null&&y[1]!==""){if(F.f=Ae(Oe(y[1])).replace(/\r\n/g,`
`),d.xlfn||(F.f=ev(F.f)),y[0].indexOf('t="array"')>-1)F.F=(N.match(r)||[])[1],F.F.indexOf(":")>-1&&Q.push([ze(F.F),F.F]);else if(y[0].indexOf('t="shared"')>-1){W=pe(y[0]);var se=Ae(Oe(y[1]));d.xlfn||(se=ev(se)),ee[parseInt(W.si,10)]=[W,se,_.r]}}else(y=N.match(/<f[^>]*\/>/))&&(W=pe(y[0]),ee[W.si]&&(F.f=jA(ee[W.si][1],ee[W.si][2],_.r)));var ae=xn(_.r);for(j=0;j<Q.length;++j)ae.r>=Q[j][0].s.r&&ae.r<=Q[j][0].e.r&&ae.c>=Q[j][0].s.c&&ae.c<=Q[j][0].e.c&&(F.F=Q[j][1])}if(_.t==null&&F.v===void 0)if(F.f||F.F)F.v=0,F.t="n";else if(k)F.t="z";else continue;else F.t=_.t||"n";switch(u.s.c>I&&(u.s.c=I),u.e.c<I&&(u.e.c=I),F.t){case"n":if(F.v==""||F.v==null){if(!k)continue;F.t="z"}else F.v=parseFloat(F.v);break;case"s":if(typeof F.v>"u"){if(!k)continue;F.t="z"}else X=wr[parseInt(F.v,10)],F.v=X.t,F.r=X.r,d.cellHTML&&(F.h=X.h);break;case"str":F.t="s",F.v=F.v!=null?Oe(F.v):"",d.cellHTML&&(F.h=il(F.v));break;case"inlineStr":y=N.match(t),F.t="s",y!=null&&(X=hl(y[1]))?(F.v=X.t,d.cellHTML&&(F.h=X.h)):F.v="";break;case"b":F.v=Pe(F.v);break;case"d":d.cellDates?F.v=an(F.v,1):(F.v=wn(an(F.v,1)),F.t="n");break;case"e":(!d||d.cellText!==!1)&&(F.w=F.v),F.v=xp[F.v];break}if(x=C=0,K=null,U&&_.s!==void 0&&(K=v.CellXf[_.s],K!=null&&(K.numFmtId!=null&&(x=K.numFmtId),d.cellStyles&&K.fillId!=null&&(C=K.fillId))),Jp(F,x,C,d,f,v),d.cellDates&&U&&F.t=="n"&&Vt(je[x])&&(F.t="d",F.v=Os(F.v)),_.cm&&d.xlmeta){var Te=(d.xlmeta.Cell||[])[+_.cm-1];Te&&Te.type=="XLDAPR"&&(F.D=!0)}if(ve){var O=xn(_.r);l[O.r]||(l[O.r]=[]),l[O.r][O.c]=F}else l[_.r]=F}}}}L.length>0&&(l["!rows"]=L)}}();function cS(e,n){var a={},t=e.l+n;a.r=e.read_shift(4),e.l+=4;var r=e.read_shift(2);e.l+=1;var i=e.read_shift(1);return e.l=t,i&7&&(a.level=i&7),i&16&&(a.hidden=!0),i&32&&(a.hpt=r/20),a}var lS=bt;function dS(){}function uS(e,n){var a={},t=e[e.l];return++e.l,a.above=!(t&64),a.left=!(t&128),e.l+=18,a.name=I2(e),a}function vS(e){var n=Hn(e);return[n]}function fS(e){var n=yt(e);return[n]}function pS(e){var n=Hn(e),a=e.read_shift(1);return[n,a,"b"]}function hS(e){var n=yt(e),a=e.read_shift(1);return[n,a,"b"]}function mS(e){var n=Hn(e),a=e.read_shift(1);return[n,a,"e"]}function gS(e){var n=yt(e),a=e.read_shift(1);return[n,a,"e"]}function jS(e){var n=Hn(e),a=e.read_shift(4);return[n,a,"s"]}function xS(e){var n=yt(e),a=e.read_shift(4);return[n,a,"s"]}function yS(e){var n=Hn(e),a=dn(e);return[n,a,"n"]}function Qp(e){var n=yt(e),a=dn(e);return[n,a,"n"]}function bS(e){var n=Hn(e),a=vl(e);return[n,a,"n"]}function wS(e){var n=yt(e),a=vl(e);return[n,a,"n"]}function _S(e){var n=Hn(e),a=dl(e);return[n,a,"is"]}function kS(e){var n=Hn(e),a=vn(e);return[n,a,"str"]}function ES(e){var n=yt(e),a=vn(e);return[n,a,"str"]}function TS(e,n,a){var t=e.l+n,r=Hn(e);r.r=a["!row"];var i=e.read_shift(1),s=[r,i,"b"];if(a.cellFormula){e.l+=2;var o=Ds(e,t-e.l,a);s[3]=ln(o,null,r,a.supbooks,a)}else e.l=t;return s}function AS(e,n,a){var t=e.l+n,r=Hn(e);r.r=a["!row"];var i=e.read_shift(1),s=[r,i,"e"];if(a.cellFormula){e.l+=2;var o=Ds(e,t-e.l,a);s[3]=ln(o,null,r,a.supbooks,a)}else e.l=t;return s}function SS(e,n,a){var t=e.l+n,r=Hn(e);r.r=a["!row"];var i=dn(e),s=[r,i,"n"];if(a.cellFormula){e.l+=2;var o=Ds(e,t-e.l,a);s[3]=ln(o,null,r,a.supbooks,a)}else e.l=t;return s}function CS(e,n,a){var t=e.l+n,r=Hn(e);r.r=a["!row"];var i=vn(e),s=[r,i,"str"];if(a.cellFormula){e.l+=2;var o=Ds(e,t-e.l,a);s[3]=ln(o,null,r,a.supbooks,a)}else e.l=t;return s}var FS=bt;function OS(e,n){var a=e.l+n,t=bt(e),r=ul(e),i=vn(e),s=vn(e),o=vn(e);e.l=a;var c={rfx:t,relId:r,loc:i,display:o};return s&&(c.Tooltip=s),c}function RS(){}function IS(e,n,a){var t=e.l+n,r=mp(e),i=e.read_shift(1),s=[r];if(s[2]=i,a.cellFormula){var o=M4(e,t-e.l,a);s[1]=o}else e.l=t;return s}function DS(e,n,a){var t=e.l+n,r=bt(e),i=[r];if(a.cellFormula){var s=U4(e,t-e.l,a);i[1]=s,e.l=t}else e.l=t;return i}var PS=["left","right","top","bottom","header","footer"];function NS(e){var n={};return PS.forEach(function(a){n[a]=dn(e)}),n}function LS(e){var n=e.read_shift(2);return e.l+=28,{RTL:n&32}}function MS(){}function BS(){}function US(e,n,a,t,r,i,s){if(!e)return e;var o=n||{};t||(t={"!id":{}});var c=o.dense?[]:{},l,d={s:{r:2e6,c:2e6},e:{r:0,c:0}},u=!1,f=!1,v,h,p,m,y,T,j,R,N,F=[];o.biff=12,o["!row"]=0;var _=0,M=!1,I=[],X={},W=o.supbooks||r.supbooks||[[]];if(W.sharedf=X,W.arrayf=I,W.SheetNames=r.SheetNames||r.Sheets.map(function(ve){return ve.name}),!o.supbooks&&(o.supbooks=W,r.Names))for(var x=0;x<r.Names.length;++x)W[0][x+1]=r.Names[x];var C=[],U=[],K=!1;js[16]={n:"BrtShortReal",f:Qp};var Q;if(ka(e,function(L,ie,ce){if(!f)switch(ce){case 148:l=L;break;case 0:v=L,o.sheetRows&&o.sheetRows<=v.r&&(f=!0),R=sn(m=v.r),o["!row"]=v.r,(L.hidden||L.hpt||L.level!=null)&&(L.hpt&&(L.hpx=Br(L.hpt)),U[L.r]=L);break;case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 13:case 14:case 15:case 16:case 17:case 18:case 62:switch(h={t:L[2]},L[2]){case"n":h.v=L[1];break;case"s":j=wr[L[1]],h.v=j.t,h.r=j.r;break;case"b":h.v=!!L[1];break;case"e":h.v=L[1],o.cellText!==!1&&(h.w=wt[h.v]);break;case"str":h.t="s",h.v=L[1];break;case"is":h.t="s",h.v=L[1].t;break}if((p=s.CellXf[L[0].iStyleRef])&&Jp(h,p.numFmtId,null,o,i,s),y=L[0].c==-1?y+1:L[0].c,o.dense?(c[m]||(c[m]=[]),c[m][y]=h):c[Ze(y)+R]=h,o.cellFormula){for(M=!1,_=0;_<I.length;++_){var k=I[_];v.r>=k[0].s.r&&v.r<=k[0].e.r&&y>=k[0].s.c&&y<=k[0].e.c&&(h.F=Ee(k[0]),M=!0)}!M&&L.length>3&&(h.f=L[3])}if(d.s.r>v.r&&(d.s.r=v.r),d.s.c>y&&(d.s.c=y),d.e.r<v.r&&(d.e.r=v.r),d.e.c<y&&(d.e.c=y),o.cellDates&&p&&h.t=="n"&&Vt(je[p.numFmtId])){var B=Qa(h.v);B&&(h.t="d",h.v=new Date(B.y,B.m-1,B.d,B.H,B.M,B.S,B.u))}Q&&(Q.type=="XLDAPR"&&(h.D=!0),Q=void 0);break;case 1:case 12:if(!o.sheetStubs||u)break;h={t:"z",v:void 0},y=L[0].c==-1?y+1:L[0].c,o.dense?(c[m]||(c[m]=[]),c[m][y]=h):c[Ze(y)+R]=h,d.s.r>v.r&&(d.s.r=v.r),d.s.c>y&&(d.s.c=y),d.e.r<v.r&&(d.e.r=v.r),d.e.c<y&&(d.e.c=y),Q&&(Q.type=="XLDAPR"&&(h.D=!0),Q=void 0);break;case 176:F.push(L);break;case 49:Q=((o.xlmeta||{}).Cell||[])[L-1];break;case 494:var P=t["!id"][L.relId];for(P?(L.Target=P.Target,L.loc&&(L.Target+="#"+L.loc),L.Rel=P):L.relId==""&&(L.Target="#"+L.loc),m=L.rfx.s.r;m<=L.rfx.e.r;++m)for(y=L.rfx.s.c;y<=L.rfx.e.c;++y)o.dense?(c[m]||(c[m]=[]),c[m][y]||(c[m][y]={t:"z",v:void 0}),c[m][y].l=L):(T=me({c:y,r:m}),c[T]||(c[T]={t:"z",v:void 0}),c[T].l=L);break;case 426:if(!o.cellFormula)break;I.push(L),N=o.dense?c[m][y]:c[Ze(y)+R],N.f=ln(L[1],d,{r:v.r,c:y},W,o),N.F=Ee(L[0]);break;case 427:if(!o.cellFormula)break;X[me(L[0].s)]=L[1],N=o.dense?c[m][y]:c[Ze(y)+R],N.f=ln(L[1],d,{r:v.r,c:y},W,o);break;case 60:if(!o.cellStyles)break;for(;L.e>=L.s;)C[L.e--]={width:L.w/256,hidden:!!(L.flags&1),level:L.level},K||(K=!0,ml(L.w/256)),Bt(C[L.e+1]);break;case 161:c["!autofilter"]={ref:Ee(L)};break;case 476:c["!margins"]=L;break;case 147:r.Sheets[a]||(r.Sheets[a]={}),L.name&&(r.Sheets[a].CodeName=L.name),(L.above||L.left)&&(c["!outline"]={above:L.above,left:L.left});break;case 137:r.Views||(r.Views=[{}]),r.Views[0]||(r.Views[0]={}),L.RTL&&(r.Views[0].RTL=!0);break;case 485:break;case 64:case 1053:break;case 151:break;case 152:case 175:case 644:case 625:case 562:case 396:case 1112:case 1146:case 471:case 1050:case 649:case 1105:case 589:case 607:case 564:case 1055:case 168:case 174:case 1180:case 499:case 507:case 550:case 171:case 167:case 1177:case 169:case 1181:case 551:case 552:case 661:case 639:case 478:case 537:case 477:case 536:case 1103:case 680:case 1104:case 1024:case 663:case 535:case 678:case 504:case 1043:case 428:case 170:case 3072:case 50:case 2070:case 1045:break;case 35:u=!0;break;case 36:u=!1;break;case 37:u=!0;break;case 38:u=!1;break;default:if(!ie.T){if(!u||o.WTF)throw new Error("Unexpected record 0x"+ce.toString(16))}}},o),delete o.supbooks,delete o["!row"],!c["!ref"]&&(d.s.r<2e6||l&&(l.e.r>0||l.e.c>0||l.s.r>0||l.s.c>0))&&(c["!ref"]=Ee(l||d)),o.sheetRows&&c["!ref"]){var ee=ze(c["!ref"]);o.sheetRows<=+ee.e.r&&(ee.e.r=o.sheetRows-1,ee.e.r>d.e.r&&(ee.e.r=d.e.r),ee.e.r<ee.s.r&&(ee.s.r=ee.e.r),ee.e.c>d.e.c&&(ee.e.c=d.e.c),ee.e.c<ee.s.c&&(ee.s.c=ee.e.c),c["!fullref"]=c["!ref"],c["!ref"]=Ee(ee))}return F.length>0&&(c["!merges"]=F),C.length>0&&(c["!cols"]=C),U.length>0&&(c["!rows"]=U),c}function zS(e){var n=[],a=e.match(/^<c:numCache>/),t;(e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg)||[]).forEach(function(i){var s=i.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);s&&(n[+s[1]]=a?+s[2]:s[2])});var r=Ae((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/)||["","General"])[1]);return(e.match(/<c:f>(.*?)<\/c:f>/mg)||[]).forEach(function(i){t=i.replace(/<.*?>/g,"")}),[n,r,t]}function $S(e,n,a,t,r,i){var s=i||{"!type":"chart"};if(!e)return i;var o=0,c=0,l="A",d={s:{r:2e6,c:2e6},e:{r:0,c:0}};return(e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm)||[]).forEach(function(u){var f=zS(u);d.s.r=d.s.c=0,d.e.c=o,l=Ze(o),f[0].forEach(function(v,h){s[l+sn(h)]={t:"n",v,z:f[1]},c=h}),d.e.r<c&&(d.e.r=c),++o}),o>0&&(s["!ref"]=Ee(d)),s}function qS(e,n,a,t,r){if(!e)return e;t||(t={"!id":{}});var i={"!type":"chart","!drawel":null,"!rel":""},s,o=e.match(Zp);return o&&jl(o[0],i,r,a),(s=e.match(/drawing r:id="(.*?)"/))&&(i["!rel"]=s[1]),t["!id"][i["!rel"]]&&(i["!drawel"]=t["!id"][i["!rel"]]),i}function HS(e,n){e.l+=10;var a=vn(e);return{name:a}}function WS(e,n,a,t,r){if(!e)return e;t||(t={"!id":{}});var i={"!type":"chart","!drawel":null,"!rel":""},s=!1;return ka(e,function(c,l,d){switch(d){case 550:i["!rel"]=c;break;case 651:r.Sheets[a]||(r.Sheets[a]={}),c.name&&(r.Sheets[a].CodeName=c.name);break;case 562:case 652:case 669:case 679:case 551:case 552:case 476:case 3072:break;case 35:s=!0;break;case 36:s=!1;break;case 37:break;case 38:break;default:if(!(l.T>0)){if(!(l.T<0)){if(!s||n.WTF)throw new Error("Unexpected record 0x"+d.toString(16))}}}},n),t["!id"][i["!rel"]]&&(i["!drawel"]=t["!id"][i["!rel"]]),i}var eh=[["allowRefreshQuery",!1,"bool"],["autoCompressPictures",!0,"bool"],["backupFile",!1,"bool"],["checkCompatibility",!1,"bool"],["CodeName",""],["date1904",!1,"bool"],["defaultThemeVersion",0,"int"],["filterPrivacy",!1,"bool"],["hidePivotFieldList",!1,"bool"],["promptedSolutions",!1,"bool"],["publishItems",!1,"bool"],["refreshAllConnections",!1,"bool"],["saveExternalLinkValues",!0,"bool"],["showBorderUnselectedTables",!0,"bool"],["showInkAnnotation",!0,"bool"],["showObjects","all"],["showPivotChartFilter",!1,"bool"],["updateLinks","userSet"]],GS=[["activeTab",0,"int"],["autoFilterDateGrouping",!0,"bool"],["firstSheet",0,"int"],["minimized",!1,"bool"],["showHorizontalScroll",!0,"bool"],["showSheetTabs",!0,"bool"],["showVerticalScroll",!0,"bool"],["tabRatio",600,"int"],["visibility","visible"]],VS=[],XS=[["calcCompleted","true"],["calcMode","auto"],["calcOnSave","true"],["concurrentCalc","true"],["fullCalcOnLoad","false"],["fullPrecision","true"],["iterate","false"],["iterateCount","100"],["iterateDelta","0.001"],["refMode","A1"]];function iv(e,n){for(var a=0;a!=e.length;++a)for(var t=e[a],r=0;r!=n.length;++r){var i=n[r];if(t[i[0]]==null)t[i[0]]=i[1];else switch(i[2]){case"bool":typeof t[i[0]]=="string"&&(t[i[0]]=Pe(t[i[0]]));break;case"int":typeof t[i[0]]=="string"&&(t[i[0]]=parseInt(t[i[0]],10));break}}}function sv(e,n){for(var a=0;a!=n.length;++a){var t=n[a];if(e[t[0]]==null)e[t[0]]=t[1];else switch(t[2]){case"bool":typeof e[t[0]]=="string"&&(e[t[0]]=Pe(e[t[0]]));break;case"int":typeof e[t[0]]=="string"&&(e[t[0]]=parseInt(e[t[0]],10));break}}}function nh(e){sv(e.WBProps,eh),sv(e.CalcPr,XS),iv(e.WBView,GS),iv(e.Sheets,VS),Nt.date1904=Pe(e.WBProps.date1904)}var KS="][*?/\\".split("");function YS(e,n){if(e.length>31)throw new Error("Sheet names cannot exceed 31 chars");var a=!0;return KS.forEach(function(t){if(e.indexOf(t)!=-1)throw new Error("Sheet name cannot contain : \\ / ? * [ ]")}),a}var JS=/<\w+:workbook/;function ZS(e,n){if(!e)throw new Error("Could not find file");var a={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},Names:[],xmlns:""},t=!1,r="xmlns",i={},s=0;if(e.replace(hn,function(c,l){var d=pe(c);switch(va(d[0])){case"<?xml":break;case"<workbook":c.match(JS)&&(r="xmlns"+c.match(/<(\w+):/)[1]),a.xmlns=d[r];break;case"</workbook>":break;case"<fileVersion":delete d[0],a.AppVersion=d;break;case"<fileVersion/>":case"</fileVersion>":break;case"<fileSharing":break;case"<fileSharing/>":break;case"<workbookPr":case"<workbookPr/>":eh.forEach(function(u){if(d[u[0]]!=null)switch(u[2]){case"bool":a.WBProps[u[0]]=Pe(d[u[0]]);break;case"int":a.WBProps[u[0]]=parseInt(d[u[0]],10);break;default:a.WBProps[u[0]]=d[u[0]]}}),d.codeName&&(a.WBProps.CodeName=Oe(d.codeName));break;case"</workbookPr>":break;case"<workbookProtection":break;case"<workbookProtection/>":break;case"<bookViews":case"<bookViews>":case"</bookViews>":break;case"<workbookView":case"<workbookView/>":delete d[0],a.WBView.push(d);break;case"</workbookView>":break;case"<sheets":case"<sheets>":case"</sheets>":break;case"<sheet":switch(d.state){case"hidden":d.Hidden=1;break;case"veryHidden":d.Hidden=2;break;default:d.Hidden=0}delete d.state,d.name=Ae(Oe(d.name)),delete d[0],a.Sheets.push(d);break;case"</sheet>":break;case"<functionGroups":case"<functionGroups/>":break;case"<functionGroup":break;case"<externalReferences":case"</externalReferences>":case"<externalReferences>":break;case"<externalReference":break;case"<definedNames/>":break;case"<definedNames>":case"<definedNames":t=!0;break;case"</definedNames>":t=!1;break;case"<definedName":i={},i.Name=Oe(d.name),d.comment&&(i.Comment=d.comment),d.localSheetId&&(i.Sheet=+d.localSheetId),Pe(d.hidden||"0")&&(i.Hidden=!0),s=l+c.length;break;case"</definedName>":i.Ref=Ae(Oe(e.slice(s,l))),a.Names.push(i);break;case"<definedName/>":break;case"<calcPr":delete d[0],a.CalcPr=d;break;case"<calcPr/>":delete d[0],a.CalcPr=d;break;case"</calcPr>":break;case"<oleSize":break;case"<customWorkbookViews>":case"</customWorkbookViews>":case"<customWorkbookViews":break;case"<customWorkbookView":case"</customWorkbookView>":break;case"<pivotCaches>":case"</pivotCaches>":case"<pivotCaches":break;case"<pivotCache":break;case"<smartTagPr":case"<smartTagPr/>":break;case"<smartTagTypes":case"<smartTagTypes>":case"</smartTagTypes>":break;case"<smartTagType":break;case"<webPublishing":case"<webPublishing/>":break;case"<fileRecoveryPr":case"<fileRecoveryPr/>":break;case"<webPublishObjects>":case"<webPublishObjects":case"</webPublishObjects>":break;case"<webPublishObject":break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":t=!0;break;case"</ext>":t=!1;break;case"<ArchID":break;case"<AlternateContent":case"<AlternateContent>":t=!0;break;case"</AlternateContent>":t=!1;break;case"<revisionPtr":break;default:if(!t&&n.WTF)throw new Error("unrecognized "+d[0]+" in workbook")}return c}),m2.indexOf(a.xmlns)===-1)throw new Error("Unknown Namespace: "+a.xmlns);return nh(a),a}function QS(e,n){var a={};return a.Hidden=e.read_shift(4),a.iTabID=e.read_shift(4),a.strRelID=Zo(e),a.name=vn(e),a}function eC(e,n){var a={},t=e.read_shift(4);a.defaultThemeVersion=e.read_shift(4);var r=n>8?vn(e):"";return r.length>0&&(a.CodeName=r),a.autoCompressPictures=!!(t&65536),a.backupFile=!!(t&64),a.checkCompatibility=!!(t&4096),a.date1904=!!(t&1),a.filterPrivacy=!!(t&8),a.hidePivotFieldList=!!(t&1024),a.promptedSolutions=!!(t&16),a.publishItems=!!(t&2048),a.refreshAllConnections=!!(t&262144),a.saveExternalLinkValues=!!(t&128),a.showBorderUnselectedTables=!!(t&4),a.showInkAnnotation=!!(t&32),a.showObjects=["all","placeholders","none"][t>>13&3],a.showPivotChartFilter=!!(t&32768),a.updateLinks=["userSet","never","always"][t>>8&3],a}function nC(e,n){var a={};return e.read_shift(4),a.ArchID=e.read_shift(4),e.l+=n-8,a}function aC(e,n,a){var t=e.l+n;e.l+=4,e.l+=1;var r=e.read_shift(4),i=D2(e),s=B4(e,0,a),o=ul(e);e.l=t;var c={Name:i,Ptg:s};return r<268435455&&(c.Sheet=r),o&&(c.Comment=o),c}function tC(e,n){var a={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},xmlns:""},t=[],r=!1;n||(n={}),n.biff=12;var i=[],s=[[]];return s.SheetNames=[],s.XTI=[],js[16]={n:"BrtFRTArchID$",f:nC},ka(e,function(c,l,d){switch(d){case 156:s.SheetNames.push(c.name),a.Sheets.push(c);break;case 153:a.WBProps=c;break;case 39:c.Sheet!=null&&(n.SID=c.Sheet),c.Ref=ln(c.Ptg,null,null,s,n),delete n.SID,delete c.Ptg,i.push(c);break;case 1036:break;case 357:case 358:case 355:case 667:s[0].length?s.push([d,c]):s[0]=[d,c],s[s.length-1].XTI=[];break;case 362:s.length===0&&(s[0]=[],s[0].XTI=[]),s[s.length-1].XTI=s[s.length-1].XTI.concat(c),s.XTI=s.XTI.concat(c);break;case 361:break;case 2071:case 158:case 143:case 664:case 353:break;case 3072:case 3073:case 534:case 677:case 157:case 610:case 2050:case 155:case 548:case 676:case 128:case 665:case 2128:case 2125:case 549:case 2053:case 596:case 2076:case 2075:case 2082:case 397:case 154:case 1117:case 553:case 2091:break;case 35:t.push(d),r=!0;break;case 36:t.pop(),r=!1;break;case 37:t.push(d),r=!0;break;case 38:t.pop(),r=!1;break;case 16:break;default:if(!l.T){if(!r||n.WTF&&t[t.length-1]!=37&&t[t.length-1]!=35)throw new Error("Unexpected record 0x"+d.toString(16))}}},n),nh(a),a.Names=i,a.supbooks=s,a}function rC(e,n,a){return n.slice(-4)===".bin"?tC(e,a):ZS(e,a)}function iC(e,n,a,t,r,i,s,o){return n.slice(-4)===".bin"?US(e,t,a,r,i,s,o):Q4(e,t,a,r,i,s,o)}function sC(e,n,a,t,r,i,s,o){return n.slice(-4)===".bin"?WS(e,t,a,r,i):qS(e,t,a,r,i)}function oC(e,n,a,t,r,i,s,o){return n.slice(-4)===".bin"?hA():mA()}function cC(e,n,a,t,r,i,s,o){return n.slice(-4)===".bin"?fA():pA()}function lC(e,n,a,t){return n.slice(-4)===".bin"?FT(e,a,t):kT(e,a,t)}function dC(e,n,a){return zp(e,a)}function uC(e,n,a){return n.slice(-4)===".bin"?GE(e,a):HE(e,a)}function vC(e,n,a){return n.slice(-4)===".bin"?dA(e,a):iA(e,a)}function fC(e,n,a){return n.slice(-4)===".bin"?aA(e):eA(e)}function pC(e,n,a,t){return a.slice(-4)===".bin"?tA(e,n,a,t):void 0}function hC(e,n,a){return n.slice(-4)===".bin"?ZT(e,n,a):QT(e,n,a)}var ah=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,th=/([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;function Wn(e,n){var a=e.split(/\s+/),t=[];if(t[0]=a[0],a.length===1)return t;var r=e.match(ah),i,s,o,c;if(r)for(c=0;c!=r.length;++c)i=r[c].match(th),(s=i[1].indexOf(":"))===-1?t[i[1]]=i[2].slice(1,i[2].length-1):(i[1].slice(0,6)==="xmlns:"?o="xmlns"+i[1].slice(6):o=i[1].slice(s+1),t[o]=i[2].slice(1,i[2].length-1));return t}function mC(e){var n=e.split(/\s+/),a={};if(n.length===1)return a;var t=e.match(ah),r,i,s,o;if(t)for(o=0;o!=t.length;++o)r=t[o].match(th),(i=r[1].indexOf(":"))===-1?a[r[1]]=r[2].slice(1,r[2].length-1):(r[1].slice(0,6)==="xmlns:"?s="xmlns"+r[1].slice(6):s=r[1].slice(i+1),a[s]=r[2].slice(1,r[2].length-1));return a}var kr;function gC(e,n){var a=kr[e]||Ae(e);return a==="General"?ft(n):qn(a,n)}function jC(e,n,a,t){var r=t;switch((a[0].match(/dt:dt="([\w.]+)"/)||["",""])[1]){case"boolean":r=Pe(t);break;case"i2":case"int":r=parseInt(t,10);break;case"r4":case"float":r=parseFloat(t);break;case"date":case"dateTime.tz":r=an(t);break;case"i8":case"string":case"fixed":case"uuid":case"bin.base64":break;default:throw new Error("bad custprop:"+a[0])}e[Ae(n)]=r}function xC(e,n,a){if(e.t!=="z"){if(!a||a.cellText!==!1)try{e.t==="e"?e.w=e.w||wt[e.v]:n==="General"?e.t==="n"?(e.v|0)===e.v?e.w=e.v.toString(10):e.w=Dr(e.v):e.w=ft(e.v):e.w=gC(n||"General",e.v)}catch(i){if(a.WTF)throw i}try{var t=kr[n]||n||"General";if(a.cellNF&&(e.z=t),a.cellDates&&e.t=="n"&&Vt(t)){var r=Qa(e.v);r&&(e.t="d",e.v=new Date(r.y,r.m-1,r.d,r.H,r.M,r.S,r.u))}}catch(i){if(a.WTF)throw i}}}function yC(e,n,a){if(a.cellStyles&&n.Interior){var t=n.Interior;t.Pattern&&(t.patternType=jT[t.Pattern]||t.Pattern)}e[n.ID]=n}function bC(e,n,a,t,r,i,s,o,c,l){var d="General",u=t.StyleID,f={};l=l||{};var v=[],h=0;for(u===void 0&&o&&(u=o.StyleID),u===void 0&&s&&(u=s.StyleID);i[u]!==void 0&&(i[u].nf&&(d=i[u].nf),i[u].Interior&&v.push(i[u].Interior),!!i[u].Parent);)u=i[u].Parent;switch(a.Type){case"Boolean":t.t="b",t.v=Pe(e);break;case"String":t.t="s",t.r=Su(Ae(e)),t.v=e.indexOf("<")>-1?Ae(n||e).replace(/<.*?>/g,""):t.r;break;case"DateTime":e.slice(-1)!="Z"&&(e+="Z"),t.v=(an(e)-new Date(Date.UTC(1899,11,30)))/(24*60*60*1e3),t.v!==t.v?t.v=Ae(e):t.v<60&&(t.v=t.v-1),(!d||d=="General")&&(d="yyyy-mm-dd");case"Number":t.v===void 0&&(t.v=+e),t.t||(t.t="n");break;case"Error":t.t="e",t.v=xp[e],l.cellText!==!1&&(t.w=e);break;default:e==""&&n==""?t.t="z":(t.t="s",t.v=Su(n||e));break}if(xC(t,d,l),l.cellFormula!==!1)if(t.Formula){var p=Ae(t.Formula);p.charCodeAt(0)==61&&(p=p.slice(1)),t.f=Pt(p,r),delete t.Formula,t.ArrayRange=="RC"?t.F=Pt("RC:RC",r):t.ArrayRange&&(t.F=Pt(t.ArrayRange,r),c.push([ze(t.F),t.F]))}else for(h=0;h<c.length;++h)r.r>=c[h][0].s.r&&r.r<=c[h][0].e.r&&r.c>=c[h][0].s.c&&r.c<=c[h][0].e.c&&(t.F=c[h][1]);l.cellStyles&&(v.forEach(function(m){!f.patternType&&m.patternType&&(f.patternType=m.patternType)}),t.s=f),t.StyleID!==void 0&&(t.ixfe=t.StyleID)}function wC(e){e.t=e.v||"",e.t=e.t.replace(/\r\n/g,`
`).replace(/\r/g,`
`),e.v=e.w=e.ixfe=void 0}function io(e,n){var a=n||{};W0();var t=dr(sl(e));(a.type=="binary"||a.type=="array"||a.type=="base64")&&(t=Oe(t));var r=t.slice(0,1024).toLowerCase(),i=!1;if(r=r.replace(/".*?"/g,""),(r.indexOf(">")&1023)>Math.min(r.indexOf(",")&1023,r.indexOf(";")&1023)){var s=rn(a);return s.type="string",Lr.to_workbook(t,s)}if(r.indexOf("<?xml")==-1&&["html","table","head","meta","script","style","div"].forEach(function(qe){r.indexOf("<"+qe)>=0&&(i=!0)}),i)return OC(t,a);kr={"General Number":"General","General Date":je[22],"Long Date":"dddd, mmmm dd, yyyy","Medium Date":je[15],"Short Date":je[14],"Long Time":je[19],"Medium Time":je[18],"Short Time":je[20],Currency:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',Fixed:je[2],Standard:je[4],Percent:je[10],Scientific:je[11],"Yes/No":'"Yes";"Yes";"No";@',"True/False":'"True";"True";"False";@',"On/Off":'"Yes";"Yes";"No";@'};var o,c=[],l,d={},u=[],f=a.dense?[]:{},v="",h={},p={},m=Wn('<Data ss:Type="String">'),y=0,T=0,j=0,R={s:{r:2e6,c:2e6},e:{r:0,c:0}},N={},F={},_="",M=0,I=[],X={},W={},x=0,C=[],U=[],K={},Q=[],ee,ve=!1,L=[],ie=[],ce={},k=0,B=0,P={Sheets:[],WBProps:{date1904:!1}},D={};Nr.lastIndex=0,t=t.replace(/<!--([\s\S]*?)-->/mg,"");for(var Z="";o=Nr.exec(t);)switch(o[3]=(Z=o[3]).toLowerCase()){case"data":if(Z=="data"){if(o[1]==="/"){if((l=c.pop())[0]!==o[3])throw new Error("Bad state: "+l.join("|"))}else o[0].charAt(o[0].length-2)!=="/"&&c.push([o[3],!0]);break}if(c[c.length-1][1])break;o[1]==="/"?bC(t.slice(y,o.index),_,m,c[c.length-1][0]=="comment"?K:h,{c:T,r:j},N,Q[T],p,L,a):(_="",m=Wn(o[0]),y=o.index+o[0].length);break;case"cell":if(o[1]==="/")if(U.length>0&&(h.c=U),(!a.sheetRows||a.sheetRows>j)&&h.v!==void 0&&(a.dense?(f[j]||(f[j]=[]),f[j][T]=h):f[Ze(T)+sn(j)]=h),h.HRef&&(h.l={Target:Ae(h.HRef)},h.HRefScreenTip&&(h.l.Tooltip=h.HRefScreenTip),delete h.HRef,delete h.HRefScreenTip),(h.MergeAcross||h.MergeDown)&&(k=T+(parseInt(h.MergeAcross,10)|0),B=j+(parseInt(h.MergeDown,10)|0),I.push({s:{c:T,r:j},e:{c:k,r:B}})),!a.sheetStubs)h.MergeAcross?T=k+1:++T;else if(h.MergeAcross||h.MergeDown){for(var re=T;re<=k;++re)for(var le=j;le<=B;++le)(re>T||le>j)&&(a.dense?(f[le]||(f[le]=[]),f[le][re]={t:"z"}):f[Ze(re)+sn(le)]={t:"z"});T=k+1}else++T;else h=mC(o[0]),h.Index&&(T=+h.Index-1),T<R.s.c&&(R.s.c=T),T>R.e.c&&(R.e.c=T),o[0].slice(-2)==="/>"&&++T,U=[];break;case"row":o[1]==="/"||o[0].slice(-2)==="/>"?(j<R.s.r&&(R.s.r=j),j>R.e.r&&(R.e.r=j),o[0].slice(-2)==="/>"&&(p=Wn(o[0]),p.Index&&(j=+p.Index-1)),T=0,++j):(p=Wn(o[0]),p.Index&&(j=+p.Index-1),ce={},(p.AutoFitHeight=="0"||p.Height)&&(ce.hpx=parseInt(p.Height,10),ce.hpt=Up(ce.hpx),ie[j]=ce),p.Hidden=="1"&&(ce.hidden=!0,ie[j]=ce));break;case"worksheet":if(o[1]==="/"){if((l=c.pop())[0]!==o[3])throw new Error("Bad state: "+l.join("|"));u.push(v),R.s.r<=R.e.r&&R.s.c<=R.e.c&&(f["!ref"]=Ee(R),a.sheetRows&&a.sheetRows<=R.e.r&&(f["!fullref"]=f["!ref"],R.e.r=a.sheetRows-1,f["!ref"]=Ee(R))),I.length&&(f["!merges"]=I),Q.length>0&&(f["!cols"]=Q),ie.length>0&&(f["!rows"]=ie),d[v]=f}else R={s:{r:2e6,c:2e6},e:{r:0,c:0}},j=T=0,c.push([o[3],!1]),l=Wn(o[0]),v=Ae(l.Name),f=a.dense?[]:{},I=[],L=[],ie=[],D={name:v,Hidden:0},P.Sheets.push(D);break;case"table":if(o[1]==="/"){if((l=c.pop())[0]!==o[3])throw new Error("Bad state: "+l.join("|"))}else{if(o[0].slice(-2)=="/>")break;c.push([o[3],!1]),Q=[],ve=!1}break;case"style":o[1]==="/"?yC(N,F,a):F=Wn(o[0]);break;case"numberformat":F.nf=Ae(Wn(o[0]).Format||"General"),kr[F.nf]&&(F.nf=kr[F.nf]);for(var se=0;se!=392&&je[se]!=F.nf;++se);if(se==392){for(se=57;se!=392;++se)if(je[se]==null){rt(F.nf,se);break}}break;case"column":if(c[c.length-1][0]!=="table")break;if(ee=Wn(o[0]),ee.Hidden&&(ee.hidden=!0,delete ee.Hidden),ee.Width&&(ee.wpx=parseInt(ee.Width,10)),!ve&&ee.wpx>10){ve=!0,jn=Mp;for(var ae=0;ae<Q.length;++ae)Q[ae]&&Bt(Q[ae])}ve&&Bt(ee),Q[ee.Index-1||Q.length]=ee;for(var Te=0;Te<+ee.Span;++Te)Q[Q.length]=rn(ee);break;case"namedrange":if(o[1]==="/")break;P.Names||(P.Names=[]);var O=pe(o[0]),$e={Name:O.Name,Ref:Pt(O.RefersTo.slice(1),{r:0,c:0})};P.Sheets.length>0&&($e.Sheet=P.Sheets.length-1),P.Names.push($e);break;case"namedcell":break;case"b":break;case"i":break;case"u":break;case"s":break;case"em":break;case"h2":break;case"h3":break;case"sub":break;case"sup":break;case"span":break;case"alignment":break;case"borders":break;case"border":break;case"font":if(o[0].slice(-2)==="/>")break;o[1]==="/"?_+=t.slice(M,o.index):M=o.index+o[0].length;break;case"interior":if(!a.cellStyles)break;F.Interior=Wn(o[0]);break;case"protection":break;case"author":case"title":case"description":case"created":case"keywords":case"subject":case"category":case"company":case"lastauthor":case"lastsaved":case"lastprinted":case"version":case"revision":case"totaltime":case"hyperlinkbase":case"manager":case"contentstatus":case"identifier":case"language":case"appname":if(o[0].slice(-2)==="/>")break;o[1]==="/"?ik(X,Z,t.slice(x,o.index)):x=o.index+o[0].length;break;case"paragraphs":break;case"styles":case"workbook":if(o[1]==="/"){if((l=c.pop())[0]!==o[3])throw new Error("Bad state: "+l.join("|"))}else c.push([o[3],!1]);break;case"comment":if(o[1]==="/"){if((l=c.pop())[0]!==o[3])throw new Error("Bad state: "+l.join("|"));wC(K),U.push(K)}else c.push([o[3],!1]),l=Wn(o[0]),K={a:l.Author};break;case"autofilter":if(o[1]==="/"){if((l=c.pop())[0]!==o[3])throw new Error("Bad state: "+l.join("|"))}else if(o[0].charAt(o[0].length-2)!=="/"){var Se=Wn(o[0]);f["!autofilter"]={ref:Pt(Se.Range).replace(/\$/g,"")},c.push([o[3],!0])}break;case"name":break;case"datavalidation":if(o[1]==="/"){if((l=c.pop())[0]!==o[3])throw new Error("Bad state: "+l.join("|"))}else o[0].charAt(o[0].length-2)!=="/"&&c.push([o[3],!0]);break;case"pixelsperinch":break;case"componentoptions":case"documentproperties":case"customdocumentproperties":case"officedocumentsettings":case"pivottable":case"pivotcache":case"names":case"mapinfo":case"pagebreaks":case"querytable":case"sorting":case"schema":case"conditionalformatting":case"smarttagtype":case"smarttags":case"excelworkbook":case"workbookoptions":case"worksheetoptions":if(o[1]==="/"){if((l=c.pop())[0]!==o[3])throw new Error("Bad state: "+l.join("|"))}else o[0].charAt(o[0].length-2)!=="/"&&c.push([o[3],!0]);break;case"null":break;default:if(c.length==0&&o[3]=="document"||c.length==0&&o[3]=="uof")return vv(t,a);var Ce=!0;switch(c[c.length-1][0]){case"officedocumentsettings":switch(o[3]){case"allowpng":break;case"removepersonalinformation":break;case"downloadcomponents":break;case"locationofcomponents":break;case"colors":break;case"color":break;case"index":break;case"rgb":break;case"targetscreensize":break;case"readonlyrecommended":break;default:Ce=!1}break;case"componentoptions":switch(o[3]){case"toolbar":break;case"hideofficelogo":break;case"spreadsheetautofit":break;case"label":break;case"caption":break;case"maxheight":break;case"maxwidth":break;case"nextsheetnumber":break;default:Ce=!1}break;case"excelworkbook":switch(o[3]){case"date1904":P.WBProps.date1904=!0;break;case"windowheight":break;case"windowwidth":break;case"windowtopx":break;case"windowtopy":break;case"tabratio":break;case"protectstructure":break;case"protectwindow":break;case"protectwindows":break;case"activesheet":break;case"displayinknotes":break;case"firstvisiblesheet":break;case"supbook":break;case"sheetname":break;case"sheetindex":break;case"sheetindexfirst":break;case"sheetindexlast":break;case"dll":break;case"acceptlabelsinformulas":break;case"donotsavelinkvalues":break;case"iteration":break;case"maxiterations":break;case"maxchange":break;case"path":break;case"xct":break;case"count":break;case"selectedsheets":break;case"calculation":break;case"uncalced":break;case"startupprompt":break;case"crn":break;case"externname":break;case"formula":break;case"colfirst":break;case"collast":break;case"wantadvise":break;case"boolean":break;case"error":break;case"text":break;case"ole":break;case"noautorecover":break;case"publishobjects":break;case"donotcalculatebeforesave":break;case"number":break;case"refmoder1c1":break;case"embedsavesmarttags":break;default:Ce=!1}break;case"workbookoptions":switch(o[3]){case"owcversion":break;case"height":break;case"width":break;default:Ce=!1}break;case"worksheetoptions":switch(o[3]){case"visible":if(o[0].slice(-2)!=="/>")if(o[1]==="/")switch(t.slice(x,o.index)){case"SheetHidden":D.Hidden=1;break;case"SheetVeryHidden":D.Hidden=2;break}else x=o.index+o[0].length;break;case"header":f["!margins"]||_r(f["!margins"]={},"xlml"),isNaN(+pe(o[0]).Margin)||(f["!margins"].header=+pe(o[0]).Margin);break;case"footer":f["!margins"]||_r(f["!margins"]={},"xlml"),isNaN(+pe(o[0]).Margin)||(f["!margins"].footer=+pe(o[0]).Margin);break;case"pagemargins":var we=pe(o[0]);f["!margins"]||_r(f["!margins"]={},"xlml"),isNaN(+we.Top)||(f["!margins"].top=+we.Top),isNaN(+we.Left)||(f["!margins"].left=+we.Left),isNaN(+we.Right)||(f["!margins"].right=+we.Right),isNaN(+we.Bottom)||(f["!margins"].bottom=+we.Bottom);break;case"displayrighttoleft":P.Views||(P.Views=[]),P.Views[0]||(P.Views[0]={}),P.Views[0].RTL=!0;break;case"freezepanes":break;case"frozennosplit":break;case"splithorizontal":case"splitvertical":break;case"donotdisplaygridlines":break;case"activerow":break;case"activecol":break;case"toprowbottompane":break;case"leftcolumnrightpane":break;case"unsynced":break;case"print":break;case"printerrors":break;case"panes":break;case"scale":break;case"pane":break;case"number":break;case"layout":break;case"pagesetup":break;case"selected":break;case"protectobjects":break;case"enableselection":break;case"protectscenarios":break;case"validprinterinfo":break;case"horizontalresolution":break;case"verticalresolution":break;case"numberofcopies":break;case"activepane":break;case"toprowvisible":break;case"leftcolumnvisible":break;case"fittopage":break;case"rangeselection":break;case"papersizeindex":break;case"pagelayoutzoom":break;case"pagebreakzoom":break;case"filteron":break;case"fitwidth":break;case"fitheight":break;case"commentslayout":break;case"zoom":break;case"lefttoright":break;case"gridlines":break;case"allowsort":break;case"allowfilter":break;case"allowinsertrows":break;case"allowdeleterows":break;case"allowinsertcols":break;case"allowdeletecols":break;case"allowinserthyperlinks":break;case"allowformatcells":break;case"allowsizecols":break;case"allowsizerows":break;case"nosummaryrowsbelowdetail":f["!outline"]||(f["!outline"]={}),f["!outline"].above=!0;break;case"tabcolorindex":break;case"donotdisplayheadings":break;case"showpagelayoutzoom":break;case"nosummarycolumnsrightdetail":f["!outline"]||(f["!outline"]={}),f["!outline"].left=!0;break;case"blackandwhite":break;case"donotdisplayzeros":break;case"displaypagebreak":break;case"rowcolheadings":break;case"donotdisplayoutline":break;case"noorientation":break;case"allowusepivottables":break;case"zeroheight":break;case"viewablerange":break;case"selection":break;case"protectcontents":break;default:Ce=!1}break;case"pivottable":case"pivotcache":switch(o[3]){case"immediateitemsondrop":break;case"showpagemultipleitemlabel":break;case"compactrowindent":break;case"location":break;case"pivotfield":break;case"orientation":break;case"layoutform":break;case"layoutsubtotallocation":break;case"layoutcompactrow":break;case"position":break;case"pivotitem":break;case"datatype":break;case"datafield":break;case"sourcename":break;case"parentfield":break;case"ptlineitems":break;case"ptlineitem":break;case"countofsameitems":break;case"item":break;case"itemtype":break;case"ptsource":break;case"cacheindex":break;case"consolidationreference":break;case"filename":break;case"reference":break;case"nocolumngrand":break;case"norowgrand":break;case"blanklineafteritems":break;case"hidden":break;case"subtotal":break;case"basefield":break;case"mapchilditems":break;case"function":break;case"refreshonfileopen":break;case"printsettitles":break;case"mergelabels":break;case"defaultversion":break;case"refreshname":break;case"refreshdate":break;case"refreshdatecopy":break;case"versionlastrefresh":break;case"versionlastupdate":break;case"versionupdateablemin":break;case"versionrefreshablemin":break;case"calculation":break;default:Ce=!1}break;case"pagebreaks":switch(o[3]){case"colbreaks":break;case"colbreak":break;case"rowbreaks":break;case"rowbreak":break;case"colstart":break;case"colend":break;case"rowend":break;default:Ce=!1}break;case"autofilter":switch(o[3]){case"autofiltercolumn":break;case"autofiltercondition":break;case"autofilterand":break;case"autofilteror":break;default:Ce=!1}break;case"querytable":switch(o[3]){case"id":break;case"autoformatfont":break;case"autoformatpattern":break;case"querysource":break;case"querytype":break;case"enableredirections":break;case"refreshedinxl9":break;case"urlstring":break;case"htmltables":break;case"connection":break;case"commandtext":break;case"refreshinfo":break;case"notitles":break;case"nextid":break;case"columninfo":break;case"overwritecells":break;case"donotpromptforfile":break;case"textwizardsettings":break;case"source":break;case"number":break;case"decimal":break;case"thousandseparator":break;case"trailingminusnumbers":break;case"formatsettings":break;case"fieldtype":break;case"delimiters":break;case"tab":break;case"comma":break;case"autoformatname":break;case"versionlastedit":break;case"versionlastrefresh":break;default:Ce=!1}break;case"datavalidation":switch(o[3]){case"range":break;case"type":break;case"min":break;case"max":break;case"sort":break;case"descending":break;case"order":break;case"casesensitive":break;case"value":break;case"errorstyle":break;case"errormessage":break;case"errortitle":break;case"inputmessage":break;case"inputtitle":break;case"combohide":break;case"inputhide":break;case"condition":break;case"qualifier":break;case"useblank":break;case"value1":break;case"value2":break;case"format":break;case"cellrangelist":break;default:Ce=!1}break;case"sorting":case"conditionalformatting":switch(o[3]){case"range":break;case"type":break;case"min":break;case"max":break;case"sort":break;case"descending":break;case"order":break;case"casesensitive":break;case"value":break;case"errorstyle":break;case"errormessage":break;case"errortitle":break;case"cellrangelist":break;case"inputmessage":break;case"inputtitle":break;case"combohide":break;case"inputhide":break;case"condition":break;case"qualifier":break;case"useblank":break;case"value1":break;case"value2":break;case"format":break;default:Ce=!1}break;case"mapinfo":case"schema":case"data":switch(o[3]){case"map":break;case"entry":break;case"range":break;case"xpath":break;case"field":break;case"xsdtype":break;case"filteron":break;case"aggregate":break;case"elementtype":break;case"attributetype":break;case"schema":case"element":case"complextype":case"datatype":case"all":case"attribute":case"extends":break;case"row":break;default:Ce=!1}break;case"smarttags":break;default:Ce=!1;break}if(Ce||o[3].match(/!\[CDATA/))break;if(!c[c.length-1][1])throw"Unrecognized tag: "+o[3]+"|"+c.join("|");if(c[c.length-1][0]==="customdocumentproperties"){if(o[0].slice(-2)==="/>")break;o[1]==="/"?jC(W,Z,C,t.slice(x,o.index)):(C=o,x=o.index+o[0].length);break}if(a.WTF)throw"Unrecognized tag: "+o[3]+"|"+c.join("|")}var de={};return!a.bookSheets&&!a.bookProps&&(de.Sheets=d),de.SheetNames=u,de.Workbook=P,de.SSF=rn(je),de.Props=X,de.Custprops=W,de}function ac(e,n){switch(bl(n=n||{}),n.type||"base64"){case"base64":return io(In(e),n);case"binary":case"buffer":case"file":return io(e,n);case"array":return io(xt(e),n)}}function _C(e){var n={},a=e.content;if(a.l=28,n.AnsiUserType=a.read_shift(0,"lpstr-ansi"),n.AnsiClipboardFormat=L2(a),a.length-a.l<=4)return n;var t=a.read_shift(4);if(t==0||t>40||(a.l-=4,n.Reserved1=a.read_shift(0,"lpstr-ansi"),a.length-a.l<=4)||(t=a.read_shift(4),t!==1907505652)||(n.UnicodeClipboardFormat=M2(a),t=a.read_shift(4),t==0||t>40))return n;a.l-=4,n.Reserved2=a.read_shift(0,"lpwstr")}var kC=[60,1084,2066,2165,2175];function EC(e,n,a,t,r){var i=t,s=[],o=a.slice(a.l,a.l+i);if(r&&r.enc&&r.enc.insitu&&o.length>0)switch(e){case 9:case 521:case 1033:case 2057:case 47:case 405:case 225:case 406:case 312:case 404:case 10:break;case 133:break;default:r.enc.insitu(o)}s.push(o),a.l+=i;for(var c=xa(a,a.l),l=tc[c],d=0;l!=null&&kC.indexOf(c)>-1;)i=xa(a,a.l+2),d=a.l+4,c==2066?d+=4:(c==2165||c==2175)&&(d+=12),o=a.slice(d,a.l+4+i),s.push(o),a.l+=4+i,l=tc[c=xa(a,a.l)];var u=Fa(s);tn(u,0);var f=0;u.lens=[];for(var v=0;v<s.length;++v)u.lens.push(f),f+=s[v].length;if(u.length<t)throw"XLS Record 0x"+e.toString(16)+" Truncated: "+u.length+" < "+t;return n.f(u,u.length,r)}function sa(e,n,a){if(e.t!=="z"&&e.XF){var t=0;try{t=e.z||e.XF.numFmtId||0,n.cellNF&&(e.z=je[t])}catch(i){if(n.WTF)throw i}if(!n||n.cellText!==!1)try{e.t==="e"?e.w=e.w||wt[e.v]:t===0||t=="General"?e.t==="n"?(e.v|0)===e.v?e.w=e.v.toString(10):e.w=Dr(e.v):e.w=ft(e.v):e.w=qn(t,e.v,{date1904:!!a,dateNF:n&&n.dateNF})}catch(i){if(n.WTF)throw i}if(n.cellDates&&t&&e.t=="n"&&Vt(je[t]||String(t))){var r=Qa(e.v);r&&(e.t="d",e.v=new Date(r.y,r.m-1,r.d,r.H,r.M,r.S,r.u))}}}function _i(e,n,a){return{v:e,ixfe:n,t:a}}function TC(e,n){var a={opts:{}},t={},r=n.dense?[]:{},i={},s={},o=null,c=[],l="",d={},u,f="",v,h,p,m,y={},T=[],j,R,N=[],F=[],_={Sheets:[],WBProps:{date1904:!1},Views:[{}]},M={},I=function(ye){return ye<8?it[ye]:ye<64&&F[ye-8]||it[ye]},X=function(ye,He,Nn){var Ye=He.XF.data;if(!(!Ye||!Ye.patternType||!Nn||!Nn.cellStyles)){He.s={},He.s.patternType=Ye.patternType;var Ka;(Ka=Mr(I(Ye.icvFore)))&&(He.s.fgColor={rgb:Ka}),(Ka=Mr(I(Ye.icvBack)))&&(He.s.bgColor={rgb:Ka})}},W=function(ye,He,Nn){if(!(ce>1)&&!(Nn.sheetRows&&ye.r>=Nn.sheetRows)){if(Nn.cellStyles&&He.XF&&He.XF.data&&X(ye,He,Nn),delete He.ixfe,delete He.XF,u=ye,f=me(ye),(!s||!s.s||!s.e)&&(s={s:{r:0,c:0},e:{r:0,c:0}}),ye.r<s.s.r&&(s.s.r=ye.r),ye.c<s.s.c&&(s.s.c=ye.c),ye.r+1>s.e.r&&(s.e.r=ye.r+1),ye.c+1>s.e.c&&(s.e.c=ye.c+1),Nn.cellFormula&&He.f){for(var Ye=0;Ye<T.length;++Ye)if(!(T[Ye][0].s.c>ye.c||T[Ye][0].s.r>ye.r)&&!(T[Ye][0].e.c<ye.c||T[Ye][0].e.r<ye.r)){He.F=Ee(T[Ye][0]),(T[Ye][0].s.c!=ye.c||T[Ye][0].s.r!=ye.r)&&delete He.f,He.f&&(He.f=""+ln(T[Ye][1],s,ye,L,x));break}}Nn.dense?(r[ye.r]||(r[ye.r]=[]),r[ye.r][ye.c]=He):r[f]=He}},x={enc:!1,sbcch:0,snames:[],sharedf:y,arrayf:T,rrtabid:[],lastuser:"",biff:8,codepage:0,winlocked:0,cellStyles:!!n&&!!n.cellStyles,WTF:!!n&&!!n.wtf};n.password&&(x.password=n.password);var C,U=[],K=[],Q=[],ee=[],ve=!1,L=[];L.SheetNames=x.snames,L.sharedf=x.sharedf,L.arrayf=x.arrayf,L.names=[],L.XTI=[];var ie=0,ce=0,k=0,B=[],P=[],D;x.codepage=1200,Yn(1200);for(var Z=!1;e.l<e.length-1;){var re=e.l,le=e.read_shift(2);if(le===0&&ie===10)break;var se=e.l===e.length?0:e.read_shift(2),ae=tc[le];if(ae&&ae.f){if(n.bookSheets&&ie===133&&le!==133)break;if(ie=le,ae.r===2||ae.r==12){var Te=e.read_shift(2);if(se-=2,!x.enc&&Te!==le&&((Te&255)<<8|Te>>8)!==le)throw new Error("rt mismatch: "+Te+"!="+le);ae.r==12&&(e.l+=10,se-=10)}var O={};if(le===10?O=ae.f(e,se,x):O=EC(le,ae,e,se,x),ce==0&&[9,521,1033,2057].indexOf(ie)===-1)continue;switch(le){case 34:a.opts.Date1904=_.WBProps.date1904=O;break;case 134:a.opts.WriteProtect=!0;break;case 47:if(x.enc||(e.l=0),x.enc=O,!n.password)throw new Error("File is password-protected");if(O.valid==null)throw new Error("Encryption scheme unsupported");if(!O.valid)throw new Error("Password is incorrect");break;case 92:x.lastuser=O;break;case 66:var $e=Number(O);switch($e){case 21010:$e=1200;break;case 32768:$e=1e4;break;case 32769:$e=1252;break}Yn(x.codepage=$e),Z=!0;break;case 317:x.rrtabid=O;break;case 25:x.winlocked=O;break;case 439:a.opts.RefreshAll=O;break;case 12:a.opts.CalcCount=O;break;case 16:a.opts.CalcDelta=O;break;case 17:a.opts.CalcIter=O;break;case 13:a.opts.CalcMode=O;break;case 14:a.opts.CalcPrecision=O;break;case 95:a.opts.CalcSaveRecalc=O;break;case 15:x.CalcRefMode=O;break;case 2211:a.opts.FullCalc=O;break;case 129:O.fDialog&&(r["!type"]="dialog"),O.fBelow||((r["!outline"]||(r["!outline"]={})).above=!0),O.fRight||((r["!outline"]||(r["!outline"]={})).left=!0);break;case 224:N.push(O);break;case 430:L.push([O]),L[L.length-1].XTI=[];break;case 35:case 547:L[L.length-1].push(O);break;case 24:case 536:D={Name:O.Name,Ref:ln(O.rgce,s,null,L,x)},O.itab>0&&(D.Sheet=O.itab-1),L.names.push(D),L[0]||(L[0]=[],L[0].XTI=[]),L[L.length-1].push(O),O.Name=="_xlnm._FilterDatabase"&&O.itab>0&&O.rgce&&O.rgce[0]&&O.rgce[0][0]&&O.rgce[0][0][0]=="PtgArea3d"&&(P[O.itab-1]={ref:Ee(O.rgce[0][0][1][2])});break;case 22:x.ExternCount=O;break;case 23:L.length==0&&(L[0]=[],L[0].XTI=[]),L[L.length-1].XTI=L[L.length-1].XTI.concat(O),L.XTI=L.XTI.concat(O);break;case 2196:if(x.biff<8)break;D!=null&&(D.Comment=O[1]);break;case 18:r["!protect"]=O;break;case 19:O!==0&&x.WTF&&console.error("Password verifier: "+O);break;case 133:i[O.pos]=O,x.snames.push(O.name);break;case 10:{if(--ce)break;if(s.e){if(s.e.r>0&&s.e.c>0){if(s.e.r--,s.e.c--,r["!ref"]=Ee(s),n.sheetRows&&n.sheetRows<=s.e.r){var Se=s.e.r;s.e.r=n.sheetRows-1,r["!fullref"]=r["!ref"],r["!ref"]=Ee(s),s.e.r=Se}s.e.r++,s.e.c++}U.length>0&&(r["!merges"]=U),K.length>0&&(r["!objects"]=K),Q.length>0&&(r["!cols"]=Q),ee.length>0&&(r["!rows"]=ee),_.Sheets.push(M)}l===""?d=r:t[l]=r,r=n.dense?[]:{}}break;case 9:case 521:case 1033:case 2057:{if(x.biff===8&&(x.biff={9:2,521:3,1033:4}[le]||{512:2,768:3,1024:4,1280:5,1536:8,2:2,7:2}[O.BIFFVer]||8),x.biffguess=O.BIFFVer==0,O.BIFFVer==0&&O.dt==4096&&(x.biff=5,Z=!0,Yn(x.codepage=28591)),x.biff==8&&O.BIFFVer==0&&O.dt==16&&(x.biff=2),ce++)break;if(r=n.dense?[]:{},x.biff<8&&!Z&&(Z=!0,Yn(x.codepage=n.codepage||1252)),x.biff<5||O.BIFFVer==0&&O.dt==4096){l===""&&(l="Sheet1"),s={s:{r:0,c:0},e:{r:0,c:0}};var Ce={pos:e.l-se,name:l};i[Ce.pos]=Ce,x.snames.push(l)}else l=(i[re]||{name:""}).name;O.dt==32&&(r["!type"]="chart"),O.dt==64&&(r["!type"]="macro"),U=[],K=[],x.arrayf=T=[],Q=[],ee=[],ve=!1,M={Hidden:(i[re]||{hs:0}).hs,name:l}}break;case 515:case 3:case 2:r["!type"]=="chart"&&(n.dense?(r[O.r]||[])[O.c]:r[me({c:O.c,r:O.r})])&&++O.c,j={ixfe:O.ixfe,XF:N[O.ixfe]||{},v:O.val,t:"n"},k>0&&(j.z=B[j.ixfe>>8&63]),sa(j,n,a.opts.Date1904),W({c:O.c,r:O.r},j,n);break;case 5:case 517:j={ixfe:O.ixfe,XF:N[O.ixfe],v:O.val,t:O.t},k>0&&(j.z=B[j.ixfe>>8&63]),sa(j,n,a.opts.Date1904),W({c:O.c,r:O.r},j,n);break;case 638:j={ixfe:O.ixfe,XF:N[O.ixfe],v:O.rknum,t:"n"},k>0&&(j.z=B[j.ixfe>>8&63]),sa(j,n,a.opts.Date1904),W({c:O.c,r:O.r},j,n);break;case 189:for(var we=O.c;we<=O.C;++we){var de=O.rkrec[we-O.c][0];j={ixfe:de,XF:N[de],v:O.rkrec[we-O.c][1],t:"n"},k>0&&(j.z=B[j.ixfe>>8&63]),sa(j,n,a.opts.Date1904),W({c:we,r:O.r},j,n)}break;case 6:case 518:case 1030:{if(O.val=="String"){o=O;break}if(j=_i(O.val,O.cell.ixfe,O.tt),j.XF=N[j.ixfe],n.cellFormula){var qe=O.formula;if(qe&&qe[0]&&qe[0][0]&&qe[0][0][0]=="PtgExp"){var Pn=qe[0][0][1][0],ra=qe[0][0][1][1],pa=me({r:Pn,c:ra});y[pa]?j.f=""+ln(O.formula,s,O.cell,L,x):j.F=((n.dense?(r[Pn]||[])[ra]:r[pa])||{}).F}else j.f=""+ln(O.formula,s,O.cell,L,x)}k>0&&(j.z=B[j.ixfe>>8&63]),sa(j,n,a.opts.Date1904),W(O.cell,j,n),o=O}break;case 7:case 519:if(o)o.val=O,j=_i(O,o.cell.ixfe,"s"),j.XF=N[j.ixfe],n.cellFormula&&(j.f=""+ln(o.formula,s,o.cell,L,x)),k>0&&(j.z=B[j.ixfe>>8&63]),sa(j,n,a.opts.Date1904),W(o.cell,j,n),o=null;else throw new Error("String record expects Formula");break;case 33:case 545:{T.push(O);var Yt=me(O[0].s);if(v=n.dense?(r[O[0].s.r]||[])[O[0].s.c]:r[Yt],n.cellFormula&&v){if(!o||!Yt||!v)break;v.f=""+ln(O[1],s,O[0],L,x),v.F=Ee(O[0])}}break;case 1212:{if(!n.cellFormula)break;if(f){if(!o)break;y[me(o.cell)]=O[0],v=n.dense?(r[o.cell.r]||[])[o.cell.c]:r[me(o.cell)],(v||{}).f=""+ln(O[0],s,u,L,x)}}break;case 253:j=_i(c[O.isst].t,O.ixfe,"s"),c[O.isst].h&&(j.h=c[O.isst].h),j.XF=N[j.ixfe],k>0&&(j.z=B[j.ixfe>>8&63]),sa(j,n,a.opts.Date1904),W({c:O.c,r:O.r},j,n);break;case 513:n.sheetStubs&&(j={ixfe:O.ixfe,XF:N[O.ixfe],t:"z"},k>0&&(j.z=B[j.ixfe>>8&63]),sa(j,n,a.opts.Date1904),W({c:O.c,r:O.r},j,n));break;case 190:if(n.sheetStubs)for(var Ea=O.c;Ea<=O.C;++Ea){var An=O.ixfe[Ea-O.c];j={ixfe:An,XF:N[An],t:"z"},k>0&&(j.z=B[j.ixfe>>8&63]),sa(j,n,a.opts.Date1904),W({c:Ea,r:O.r},j,n)}break;case 214:case 516:case 4:j=_i(O.val,O.ixfe,"s"),j.XF=N[j.ixfe],k>0&&(j.z=B[j.ixfe>>8&63]),sa(j,n,a.opts.Date1904),W({c:O.c,r:O.r},j,n);break;case 0:case 512:ce===1&&(s=O);break;case 252:c=O;break;case 1054:if(x.biff==4){B[k++]=O[1];for(var ha=0;ha<k+163&&je[ha]!=O[1];++ha);ha>=163&&rt(O[1],k+163)}else rt(O[1],O[0]);break;case 30:{B[k++]=O;for(var Ta=0;Ta<k+163&&je[Ta]!=O;++Ta);Ta>=163&&rt(O,k+163)}break;case 229:U=U.concat(O);break;case 93:K[O.cmo[0]]=x.lastobj=O;break;case 438:x.lastobj.TxO=O;break;case 127:x.lastobj.ImData=O;break;case 440:for(m=O[0].s.r;m<=O[0].e.r;++m)for(p=O[0].s.c;p<=O[0].e.c;++p)v=n.dense?(r[m]||[])[p]:r[me({c:p,r:m})],v&&(v.l=O[1]);break;case 2048:for(m=O[0].s.r;m<=O[0].e.r;++m)for(p=O[0].s.c;p<=O[0].e.c;++p)v=n.dense?(r[m]||[])[p]:r[me({c:p,r:m})],v&&v.l&&(v.l.Tooltip=O[1]);break;case 28:{if(x.biff<=5&&x.biff>=2)break;v=n.dense?(r[O[0].r]||[])[O[0].c]:r[me(O[0])];var Jt=K[O[2]];v||(n.dense?(r[O[0].r]||(r[O[0].r]=[]),v=r[O[0].r][O[0].c]={t:"z"}):v=r[me(O[0])]={t:"z"},s.e.r=Math.max(s.e.r,O[0].r),s.s.r=Math.min(s.s.r,O[0].r),s.e.c=Math.max(s.e.c,O[0].c),s.s.c=Math.min(s.s.c,O[0].c)),v.c||(v.c=[]),h={a:O[1],t:Jt.TxO.t},v.c.push(h)}break;case 2173:XT(N[O.ixfe],O.ext);break;case 125:{if(!x.cellStyles)break;for(;O.e>=O.s;)Q[O.e--]={width:O.w/256,level:O.level||0,hidden:!!(O.flags&1)},ve||(ve=!0,ml(O.w/256)),Bt(Q[O.e+1])}break;case 520:{var mn={};O.level!=null&&(ee[O.r]=mn,mn.level=O.level),O.hidden&&(ee[O.r]=mn,mn.hidden=!0),O.hpt&&(ee[O.r]=mn,mn.hpt=O.hpt,mn.hpx=Br(O.hpt))}break;case 38:case 39:case 40:case 41:r["!margins"]||_r(r["!margins"]={}),r["!margins"][{38:"left",39:"right",40:"top",41:"bottom"}[le]]=O;break;case 161:r["!margins"]||_r(r["!margins"]={}),r["!margins"].header=O.header,r["!margins"].footer=O.footer;break;case 574:O.RTL&&(_.Views[0].RTL=!0);break;case 146:F=O;break;case 2198:C=O;break;case 140:R=O;break;case 442:l?M.CodeName=O||M.name:_.WBProps.CodeName=O||"ThisWorkbook";break}}else ae||console.error("Missing Info for XLS Record 0x"+le.toString(16)),e.l+=se}return a.SheetNames=ua(i).sort(function(ia,ye){return Number(ia)-Number(ye)}).map(function(ia){return i[ia].name}),n.bookSheets||(a.Sheets=t),!a.SheetNames.length&&d["!ref"]?(a.SheetNames.push("Sheet1"),a.Sheets&&(a.Sheets.Sheet1=d)):a.Preamble=d,a.Sheets&&P.forEach(function(ia,ye){a.Sheets[a.SheetNames[ye]]["!autofilter"]=ia}),a.Strings=c,a.SSF=rn(je),x.enc&&(a.Encryption=x.enc),C&&(a.Themes=C),a.Metadata={},R!==void 0&&(a.Metadata.Country=R),L.names.length>0&&(_.Names=L.names),a.Workbook=_,a}var ov={SI:"e0859ff2f94f6810ab9108002b27b3d9",DSI:"02d5cdd59c2e1b10939708002b2cf9ae",UDI:"05d5cdd59c2e1b10939708002b2cf9ae"};function AC(e,n,a){var t=ke.find(e,"/!DocumentSummaryInformation");if(t&&t.size>0)try{var r=Hu(t,H2,ov.DSI);for(var i in r)n[i]=r[i]}catch(l){if(a.WTF)throw l}var s=ke.find(e,"/!SummaryInformation");if(s&&s.size>0)try{var o=Hu(s,W2,ov.SI);for(var c in o)n[c]==null&&(n[c]=o[c])}catch(l){if(a.WTF)throw l}n.HeadingPairs&&n.TitlesOfParts&&(bp(n.HeadingPairs,n.TitlesOfParts,n,a),delete n.HeadingPairs,delete n.TitlesOfParts)}function rh(e,n){n||(n={}),bl(n),I0(),n.codepage&&Qc(n.codepage);var a,t;if(e.FullPaths){if(ke.find(e,"/encryption"))throw new Error("File is password-protected");a=ke.find(e,"!CompObj"),t=ke.find(e,"/Workbook")||ke.find(e,"/Book")}else{switch(n.type){case"base64":e=Kn(In(e));break;case"binary":e=Kn(e);break;case"buffer":break;case"array":Array.isArray(e)||(e=Array.prototype.slice.call(e));break}tn(e,0),t={content:e}}var r,i;if(a&&_C(a),n.bookProps&&!n.bookSheets)r={};else{var s=_e?"buffer":"array";if(t&&t.content)r=TC(t.content,n);else if((i=ke.find(e,"PerfectOffice_MAIN"))&&i.content)r=br.to_workbook(i.content,(n.type=s,n));else if((i=ke.find(e,"NativeContent_MAIN"))&&i.content)r=br.to_workbook(i.content,(n.type=s,n));else throw(i=ke.find(e,"MN0"))&&i.content?new Error("Unsupported Works 4 for Mac file"):new Error("Cannot find Workbook stream");n.bookVBA&&e.FullPaths&&ke.find(e,"/_VBA_PROJECT_CUR/VBA/dir")&&(r.vbaraw=vA(e))}var o={};return e.FullPaths&&AC(e,o,n),r.Props=r.Custprops=o,n.bookFiles&&(r.cfb=e),r}var js={0:{f:cS},1:{f:vS},2:{f:bS},3:{f:mS},4:{f:pS},5:{f:yS},6:{f:kS},7:{f:jS},8:{f:CS},9:{f:SS},10:{f:TS},11:{f:AS},12:{f:fS},13:{f:wS},14:{f:gS},15:{f:hS},16:{f:Qp},17:{f:ES},18:{f:xS},19:{f:dl},20:{},21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{},31:{},32:{},33:{},34:{},35:{T:1},36:{T:-1},37:{T:1},38:{T:-1},39:{f:aC},40:{},42:{},43:{f:TT},44:{f:ET},45:{f:AT},46:{f:CT},47:{f:ST},48:{},49:{f:F2},50:{},51:{f:YT},52:{T:1},53:{T:-1},54:{T:1},55:{T:-1},56:{T:1},57:{T:-1},58:{},59:{},60:{f:Ip},62:{f:_S},63:{f:nA},64:{f:MS},65:{},66:{},67:{},68:{},69:{},70:{},128:{},129:{T:1},130:{T:-1},131:{T:1,f:pn,p:0},132:{T:-1},133:{T:1},134:{T:-1},135:{T:1},136:{T:-1},137:{T:1,f:LS},138:{T:-1},139:{T:1},140:{T:-1},141:{T:1},142:{T:-1},143:{T:1},144:{T:-1},145:{T:1},146:{T:-1},147:{f:uS},148:{f:lS,p:16},151:{f:RS},152:{},153:{f:eC},154:{},155:{},156:{f:QS},157:{},158:{},159:{T:1,f:WE},160:{T:-1},161:{T:1,f:bt},162:{T:-1},163:{T:1},164:{T:-1},165:{T:1},166:{T:-1},167:{},168:{},169:{},170:{},171:{},172:{T:1},173:{T:-1},174:{},175:{},176:{f:FS},177:{T:1},178:{T:-1},179:{T:1},180:{T:-1},181:{T:1},182:{T:-1},183:{T:1},184:{T:-1},185:{T:1},186:{T:-1},187:{T:1},188:{T:-1},189:{T:1},190:{T:-1},191:{T:1},192:{T:-1},193:{T:1},194:{T:-1},195:{T:1},196:{T:-1},197:{T:1},198:{T:-1},199:{T:1},200:{T:-1},201:{T:1},202:{T:-1},203:{T:1},204:{T:-1},205:{T:1},206:{T:-1},207:{T:1},208:{T:-1},209:{T:1},210:{T:-1},211:{T:1},212:{T:-1},213:{T:1},214:{T:-1},215:{T:1},216:{T:-1},217:{T:1},218:{T:-1},219:{T:1},220:{T:-1},221:{T:1},222:{T:-1},223:{T:1},224:{T:-1},225:{T:1},226:{T:-1},227:{T:1},228:{T:-1},229:{T:1},230:{T:-1},231:{T:1},232:{T:-1},233:{T:1},234:{T:-1},235:{T:1},236:{T:-1},237:{T:1},238:{T:-1},239:{T:1},240:{T:-1},241:{T:1},242:{T:-1},243:{T:1},244:{T:-1},245:{T:1},246:{T:-1},247:{T:1},248:{T:-1},249:{T:1},250:{T:-1},251:{T:1},252:{T:-1},253:{T:1},254:{T:-1},255:{T:1},256:{T:-1},257:{T:1},258:{T:-1},259:{T:1},260:{T:-1},261:{T:1},262:{T:-1},263:{T:1},264:{T:-1},265:{T:1},266:{T:-1},267:{T:1},268:{T:-1},269:{T:1},270:{T:-1},271:{T:1},272:{T:-1},273:{T:1},274:{T:-1},275:{T:1},276:{T:-1},277:{},278:{T:1},279:{T:-1},280:{T:1},281:{T:-1},282:{T:1},283:{T:1},284:{T:-1},285:{T:1},286:{T:-1},287:{T:1},288:{T:-1},289:{T:1},290:{T:-1},291:{T:1},292:{T:-1},293:{T:1},294:{T:-1},295:{T:1},296:{T:-1},297:{T:1},298:{T:-1},299:{T:1},300:{T:-1},301:{T:1},302:{T:-1},303:{T:1},304:{T:-1},305:{T:1},306:{T:-1},307:{T:1},308:{T:-1},309:{T:1},310:{T:-1},311:{T:1},312:{T:-1},313:{T:-1},314:{T:1},315:{T:-1},316:{T:1},317:{T:-1},318:{T:1},319:{T:-1},320:{T:1},321:{T:-1},322:{T:1},323:{T:-1},324:{T:1},325:{T:-1},326:{T:1},327:{T:-1},328:{T:1},329:{T:-1},330:{T:1},331:{T:-1},332:{T:1},333:{T:-1},334:{T:1},335:{f:KT},336:{T:-1},337:{f:JT,T:1},338:{T:-1},339:{T:1},340:{T:-1},341:{T:1},342:{T:-1},343:{T:1},344:{T:-1},345:{T:1},346:{T:-1},347:{T:1},348:{T:-1},349:{T:1},350:{T:-1},351:{},352:{},353:{T:1},354:{T:-1},355:{f:Zo},357:{},358:{},359:{},360:{T:1},361:{},362:{f:Rp},363:{},364:{},366:{},367:{},368:{},369:{},370:{},371:{},372:{T:1},373:{T:-1},374:{T:1},375:{T:-1},376:{T:1},377:{T:-1},378:{T:1},379:{T:-1},380:{T:1},381:{T:-1},382:{T:1},383:{T:-1},384:{T:1},385:{T:-1},386:{T:1},387:{T:-1},388:{T:1},389:{T:-1},390:{T:1},391:{T:-1},392:{T:1},393:{T:-1},394:{T:1},395:{T:-1},396:{},397:{},398:{},399:{},400:{},401:{T:1},403:{},404:{},405:{},406:{},407:{},408:{},409:{},410:{},411:{},412:{},413:{},414:{},415:{},416:{},417:{},418:{},419:{},420:{},421:{},422:{T:1},423:{T:1},424:{T:-1},425:{T:-1},426:{f:IS},427:{f:DS},428:{},429:{T:1},430:{T:-1},431:{T:1},432:{T:-1},433:{T:1},434:{T:-1},435:{T:1},436:{T:-1},437:{T:1},438:{T:-1},439:{T:1},440:{T:-1},441:{T:1},442:{T:-1},443:{T:1},444:{T:-1},445:{T:1},446:{T:-1},447:{T:1},448:{T:-1},449:{T:1},450:{T:-1},451:{T:1},452:{T:-1},453:{T:1},454:{T:-1},455:{T:1},456:{T:-1},457:{T:1},458:{T:-1},459:{T:1},460:{T:-1},461:{T:1},462:{T:-1},463:{T:1},464:{T:-1},465:{T:1},466:{T:-1},467:{T:1},468:{T:-1},469:{T:1},470:{T:-1},471:{},472:{},473:{T:1},474:{T:-1},475:{},476:{f:NS},477:{},478:{},479:{T:1},480:{T:-1},481:{T:1},482:{T:-1},483:{T:1},484:{T:-1},485:{f:dS},486:{T:1},487:{T:-1},488:{T:1},489:{T:-1},490:{T:1},491:{T:-1},492:{T:1},493:{T:-1},494:{f:OS},495:{T:1},496:{T:-1},497:{T:1},498:{T:-1},499:{},500:{T:1},501:{T:-1},502:{T:1},503:{T:-1},504:{},505:{T:1},506:{T:-1},507:{},508:{T:1},509:{T:-1},510:{T:1},511:{T:-1},512:{},513:{},514:{T:1},515:{T:-1},516:{T:1},517:{T:-1},518:{T:1},519:{T:-1},520:{T:1},521:{T:-1},522:{},523:{},524:{},525:{},526:{},527:{},528:{T:1},529:{T:-1},530:{T:1},531:{T:-1},532:{T:1},533:{T:-1},534:{},535:{},536:{},537:{},538:{T:1},539:{T:-1},540:{T:1},541:{T:-1},542:{T:1},548:{},549:{},550:{f:Zo},551:{},552:{},553:{},554:{T:1},555:{T:-1},556:{T:1},557:{T:-1},558:{T:1},559:{T:-1},560:{T:1},561:{T:-1},562:{},564:{},565:{T:1},566:{T:-1},569:{T:1},570:{T:-1},572:{},573:{T:1},574:{T:-1},577:{},578:{},579:{},580:{},581:{},582:{},583:{},584:{},585:{},586:{},587:{},588:{T:-1},589:{},590:{T:1},591:{T:-1},592:{T:1},593:{T:-1},594:{T:1},595:{T:-1},596:{},597:{T:1},598:{T:-1},599:{T:1},600:{T:-1},601:{T:1},602:{T:-1},603:{T:1},604:{T:-1},605:{T:1},606:{T:-1},607:{},608:{T:1},609:{T:-1},610:{},611:{T:1},612:{T:-1},613:{T:1},614:{T:-1},615:{T:1},616:{T:-1},617:{T:1},618:{T:-1},619:{T:1},620:{T:-1},625:{},626:{T:1},627:{T:-1},628:{T:1},629:{T:-1},630:{T:1},631:{T:-1},632:{f:lA},633:{T:1},634:{T:-1},635:{T:1,f:cA},636:{T:-1},637:{f:R2},638:{T:1},639:{},640:{T:-1},641:{T:1},642:{T:-1},643:{T:1},644:{},645:{T:-1},646:{T:1},648:{T:1},649:{},650:{T:-1},651:{f:HS},652:{},653:{T:1},654:{T:-1},655:{T:1},656:{T:-1},657:{T:1},658:{T:-1},659:{},660:{T:1},661:{},662:{T:-1},663:{},664:{T:1},665:{},666:{T:-1},667:{},668:{},669:{},671:{T:1},672:{T:-1},673:{T:1},674:{T:-1},675:{},676:{},677:{},678:{},679:{},680:{},681:{},1024:{},1025:{},1026:{T:1},1027:{T:-1},1028:{T:1},1029:{T:-1},1030:{},1031:{T:1},1032:{T:-1},1033:{T:1},1034:{T:-1},1035:{},1036:{},1037:{},1038:{T:1},1039:{T:-1},1040:{},1041:{T:1},1042:{T:-1},1043:{},1044:{},1045:{},1046:{T:1},1047:{T:-1},1048:{T:1},1049:{T:-1},1050:{},1051:{T:1},1052:{T:1},1053:{f:BS},1054:{T:1},1055:{},1056:{T:1},1057:{T:-1},1058:{T:1},1059:{T:-1},1061:{},1062:{T:1},1063:{T:-1},1064:{T:1},1065:{T:-1},1066:{T:1},1067:{T:-1},1068:{T:1},1069:{T:-1},1070:{T:1},1071:{T:-1},1072:{T:1},1073:{T:-1},1075:{T:1},1076:{T:-1},1077:{T:1},1078:{T:-1},1079:{T:1},1080:{T:-1},1081:{T:1},1082:{T:-1},1083:{T:1},1084:{T:-1},1085:{},1086:{T:1},1087:{T:-1},1088:{T:1},1089:{T:-1},1090:{T:1},1091:{T:-1},1092:{T:1},1093:{T:-1},1094:{T:1},1095:{T:-1},1096:{},1097:{T:1},1098:{},1099:{T:-1},1100:{T:1},1101:{T:-1},1102:{},1103:{},1104:{},1105:{},1111:{},1112:{},1113:{T:1},1114:{T:-1},1115:{T:1},1116:{T:-1},1117:{},1118:{T:1},1119:{T:-1},1120:{T:1},1121:{T:-1},1122:{T:1},1123:{T:-1},1124:{T:1},1125:{T:-1},1126:{},1128:{T:1},1129:{T:-1},1130:{},1131:{T:1},1132:{T:-1},1133:{T:1},1134:{T:-1},1135:{T:1},1136:{T:-1},1137:{T:1},1138:{T:-1},1139:{T:1},1140:{T:-1},1141:{},1142:{T:1},1143:{T:-1},1144:{T:1},1145:{T:-1},1146:{},1147:{T:1},1148:{T:-1},1149:{T:1},1150:{T:-1},1152:{T:1},1153:{T:-1},1154:{T:-1},1155:{T:-1},1156:{T:-1},1157:{T:1},1158:{T:-1},1159:{T:1},1160:{T:-1},1161:{T:1},1162:{T:-1},1163:{T:1},1164:{T:-1},1165:{T:1},1166:{T:-1},1167:{T:1},1168:{T:-1},1169:{T:1},1170:{T:-1},1171:{},1172:{T:1},1173:{T:-1},1177:{},1178:{T:1},1180:{},1181:{},1182:{},2048:{T:1},2049:{T:-1},2050:{},2051:{T:1},2052:{T:-1},2053:{},2054:{},2055:{T:1},2056:{T:-1},2057:{T:1},2058:{T:-1},2060:{},2067:{},2068:{T:1},2069:{T:-1},2070:{},2071:{},2072:{T:1},2073:{T:-1},2075:{},2076:{},2077:{T:1},2078:{T:-1},2079:{},2080:{T:1},2081:{T:-1},2082:{},2083:{T:1},2084:{T:-1},2085:{T:1},2086:{T:-1},2087:{T:1},2088:{T:-1},2089:{T:1},2090:{T:-1},2091:{},2092:{},2093:{T:1},2094:{T:-1},2095:{},2096:{T:1},2097:{T:-1},2098:{T:1},2099:{T:-1},2100:{T:1},2101:{T:-1},2102:{},2103:{T:1},2104:{T:-1},2105:{},2106:{T:1},2107:{T:-1},2108:{},2109:{T:1},2110:{T:-1},2111:{T:1},2112:{T:-1},2113:{T:1},2114:{T:-1},2115:{},2116:{},2117:{},2118:{T:1},2119:{T:-1},2120:{},2121:{T:1},2122:{T:-1},2123:{T:1},2124:{T:-1},2125:{},2126:{T:1},2127:{T:-1},2128:{},2129:{T:1},2130:{T:-1},2131:{T:1},2132:{T:-1},2133:{T:1},2134:{},2135:{},2136:{},2137:{T:1},2138:{T:-1},2139:{T:1},2140:{T:-1},2141:{},3072:{},3073:{},4096:{T:1},4097:{T:-1},5002:{T:1},5003:{T:-1},5081:{T:1},5082:{T:-1},5083:{},5084:{T:1},5085:{T:-1},5086:{T:1},5087:{T:-1},5088:{},5089:{},5090:{},5092:{T:1},5093:{T:-1},5094:{},5095:{T:1},5096:{T:-1},5097:{},5099:{},65535:{n:""}},tc={6:{f:to},10:{f:Sa},12:{f:Ke},13:{f:Ke},14:{f:We},15:{f:We},16:{f:dn},17:{f:We},18:{f:We},19:{f:Ke},20:{f:Xu},21:{f:Xu},23:{f:Rp},24:{f:Yu},25:{f:We},26:{},27:{},28:{f:sE},29:{},34:{f:We},35:{f:Ku},38:{f:dn},39:{f:dn},40:{f:dn},41:{f:dn},42:{f:We},43:{f:We},47:{f:dT},49:{f:zk},51:{f:Ke},60:{},61:{f:Mk},64:{f:We},65:{f:Uk},66:{f:Ke},77:{},80:{},81:{},82:{},85:{f:Ke},89:{},90:{},91:{},92:{f:Fk},93:{f:cE},94:{},95:{f:We},96:{},97:{},99:{f:We},125:{f:Ip},128:{f:Jk},129:{f:Ok},130:{f:Ke},131:{f:We},132:{f:We},133:{f:Rk},134:{},140:{f:pE},141:{f:Ke},144:{},146:{f:mE},151:{},152:{},153:{},154:{},155:{},156:{f:Ke},157:{},158:{},160:{f:bE},161:{f:jE},174:{},175:{},176:{},177:{},178:{},180:{},181:{},182:{},184:{},185:{},189:{f:Vk},190:{f:Xk},193:{f:Sa},197:{},198:{},199:{},200:{},201:{},202:{f:We},203:{},204:{},205:{},206:{},207:{},208:{},209:{},210:{},211:{},213:{},215:{},216:{},217:{},218:{f:Ke},220:{},221:{f:We},222:{},224:{f:Yk},225:{f:Ck},226:{f:Sa},227:{},229:{f:oE},233:{},235:{},236:{},237:{},239:{},240:{},241:{},242:{},244:{},245:{},246:{},247:{},248:{},249:{},251:{},252:{f:Ik},253:{f:$k},255:{f:Dk},256:{},259:{},290:{},311:{},312:{},315:{},317:{f:Tp},318:{},319:{},320:{},330:{},331:{},333:{},334:{},335:{},336:{},337:{},338:{},339:{},340:{},351:{},352:{f:We},353:{f:Sa},401:{},402:{},403:{},404:{},405:{},406:{},407:{},408:{},425:{},426:{},427:{},428:{},429:{},430:{f:Qk},431:{f:We},432:{},433:{},434:{},437:{},438:{f:uE},439:{f:We},440:{f:vE},441:{},442:{f:Zr},443:{},444:{f:Ke},445:{},446:{},448:{f:Sa},449:{f:Lk,r:2},450:{f:Sa},512:{f:Gu},513:{f:yE},515:{f:Zk},516:{f:qk},517:{f:Vu},519:{f:wE},520:{f:Pk},523:{},545:{f:Ju},549:{f:Wu},566:{},574:{f:Bk},638:{f:Gk},659:{},1048:{},1054:{f:Hk},1084:{},1212:{f:tE},2048:{f:fE},2049:{},2050:{},2051:{},2052:{},2053:{},2054:{},2055:{},2056:{},2057:{f:yi},2058:{},2059:{},2060:{},2061:{},2062:{},2063:{},2064:{},2066:{},2067:{},2128:{},2129:{},2130:{},2131:{},2132:{},2133:{},2134:{},2135:{},2136:{},2137:{},2138:{},2146:{},2147:{r:12},2148:{},2149:{},2150:{},2151:{f:Sa},2152:{},2154:{},2155:{},2156:{},2161:{},2162:{},2164:{},2165:{},2166:{},2167:{},2168:{},2169:{},2170:{},2171:{},2172:{f:gE,r:12},2173:{f:VT,r:12},2174:{},2175:{},2180:{},2181:{},2182:{},2183:{},2184:{},2185:{},2186:{},2187:{},2188:{f:We,r:12},2189:{},2190:{r:12},2191:{},2192:{},2194:{},2195:{},2196:{f:aE,r:12},2197:{},2198:{f:zT,r:12},2199:{},2200:{},2201:{},2202:{f:rE,r:12},2203:{f:Sa},2204:{},2205:{},2206:{},2207:{},2211:{f:Nk},2212:{},2213:{},2214:{},2215:{},4097:{},4098:{},4099:{},4102:{},4103:{},4105:{},4106:{},4107:{},4108:{},4109:{},4116:{},4117:{},4118:{},4119:{},4120:{},4121:{},4122:{},4123:{},4124:{},4125:{},4126:{},4127:{},4128:{},4129:{},4130:{},4132:{},4133:{},4134:{f:Ke},4135:{},4146:{},4147:{},4148:{},4149:{},4154:{},4156:{},4157:{},4158:{},4159:{},4160:{},4161:{},4163:{},4164:{f:xE},4165:{},4166:{},4168:{},4170:{},4171:{},4174:{},4175:{},4176:{},4177:{},4187:{},4188:{f:hE},4189:{},4191:{},4192:{},4193:{},4194:{},4195:{},4196:{},4197:{},4198:{},4199:{},4200:{},0:{f:Gu},1:{},2:{f:TE},3:{f:EE},4:{f:kE},5:{f:Vu},7:{f:AE},8:{},9:{f:yi},11:{},22:{f:Ke},30:{f:Wk},31:{},32:{},33:{f:Ju},36:{},37:{f:Wu},50:{f:SE},62:{},52:{},67:{},68:{f:Ke},69:{},86:{},126:{},127:{f:_E},135:{},136:{},137:{},145:{},148:{},149:{},150:{},169:{},171:{},188:{},191:{},192:{},194:{},195:{},214:{f:CE},223:{},234:{},354:{},421:{},518:{f:to},521:{f:yi},536:{f:Yu},547:{f:Ku},561:{},579:{},1030:{f:to},1033:{f:yi},1091:{},2157:{},2163:{},2177:{},2240:{},2241:{},2242:{},2243:{},2244:{},2245:{},2246:{},2247:{},2248:{},2249:{},2250:{},2251:{},2262:{r:12},29282:{}};function Gn(e,n,a,t){var r=n;if(!isNaN(r)){var i=(a||[]).length||0,s=e.next(4);s.write_shift(2,r),s.write_shift(2,i),i>0&&fp(a)&&e.push(a)}}function cv(e,n){var a=n||{},t=a.dense?[]:{};e=e.replace(/<!--.*?-->/g,"");var r=e.match(/<table/i);if(!r)throw new Error("Invalid HTML: could not find <table>");var i=e.match(/<\/table/i),s=r.index,o=i&&i.index||e.length,c=Z_(e.slice(s,o),/(:?<tr[^>]*>)/i,"<tr>"),l=-1,d=0,u=0,f=0,v={s:{r:1e7,c:1e7},e:{r:0,c:0}},h=[];for(s=0;s<c.length;++s){var p=c[s].trim(),m=p.slice(0,3).toLowerCase();if(m=="<tr"){if(++l,a.sheetRows&&a.sheetRows<=l){--l;break}d=0;continue}if(!(m!="<td"&&m!="<th")){var y=p.split(/<\/t[dh]>/i);for(o=0;o<y.length;++o){var T=y[o].trim();if(T.match(/<t[dh]/i)){for(var j=T,R=0;j.charAt(0)=="<"&&(R=j.indexOf(">"))>-1;)j=j.slice(R+1);for(var N=0;N<h.length;++N){var F=h[N];F.s.c==d&&F.s.r<l&&l<=F.e.r&&(d=F.e.c+1,N=-1)}var _=pe(T.slice(0,T.indexOf(">")));f=_.colspan?+_.colspan:1,((u=+_.rowspan)>1||f>1)&&h.push({s:{r:l,c:d},e:{r:l+(u||1)-1,c:d+f-1}});var M=_.t||_["data-t"]||"";if(!j.length){d+=f;continue}if(j=ep(j),v.s.r>l&&(v.s.r=l),v.e.r<l&&(v.e.r=l),v.s.c>d&&(v.s.c=d),v.e.c<d&&(v.e.c=d),!j.length){d+=f;continue}var I={t:"s",v:j};a.raw||!j.trim().length||M=="s"||(j==="TRUE"?I={t:"b",v:!0}:j==="FALSE"?I={t:"b",v:!1}:isNaN(ea(j))?isNaN(Mt(j).getDate())||(I={t:"d",v:an(j)},a.cellDates||(I={t:"n",v:wn(I.v)}),I.z=a.dateNF||je[14]):I={t:"n",v:ea(j)}),a.dense?(t[l]||(t[l]=[]),t[l][d]=I):t[me({r:l,c:d})]=I,d+=f}}}}return t["!ref"]=Ee(v),h.length&&(t["!merges"]=h),t}function SC(e,n,a,t){for(var r=e["!merges"]||[],i=[],s=n.s.c;s<=n.e.c;++s){for(var o=0,c=0,l=0;l<r.length;++l)if(!(r[l].s.r>a||r[l].s.c>s)&&!(r[l].e.r<a||r[l].e.c<s)){if(r[l].s.r<a||r[l].s.c<s){o=-1;break}o=r[l].e.r-r[l].s.r+1,c=r[l].e.c-r[l].s.c+1;break}if(!(o<0)){var d=me({r:a,c:s}),u=t.dense?(e[a]||[])[s]:e[d],f=u&&u.v!=null&&(u.h||il(u.w||(_a(u),u.w)||""))||"",v={};o>1&&(v.rowspan=o),c>1&&(v.colspan=c),t.editable?f='<span contenteditable="true">'+f+"</span>":u&&(v["data-t"]=u&&u.t||"z",u.v!=null&&(v["data-v"]=u.v),u.z!=null&&(v["data-z"]=u.z),u.l&&(u.l.Target||"#").charAt(0)!="#"&&(f='<a href="'+u.l.Target+'">'+f+"</a>")),v.id=(t.id||"sjs")+"-"+d,i.push(p2("td",f,v))}}var h="<tr>";return h+i.join("")+"</tr>"}var CC='<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',FC="</body></html>";function OC(e,n){var a=e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);if(!a||a.length==0)throw new Error("Invalid HTML: could not find <table>");if(a.length==1)return Xa(cv(a[0],n),n);var t=_l();return a.forEach(function(r,i){kl(t,cv(r,n),"Sheet"+(i+1))}),t}function RC(e,n,a){var t=[];return t.join("")+"<table"+(a&&a.id?' id="'+a.id+'"':"")+">"}function IC(e,n){var a=n||{},t=a.header!=null?a.header:CC,r=a.footer!=null?a.footer:FC,i=[t],s=Xt(e["!ref"]);a.dense=Array.isArray(e),i.push(RC(e,s,a));for(var o=s.s.r;o<=s.e.r;++o)i.push(SC(e,s,o,a));return i.push("</table>"+r),i.join("")}function ih(e,n,a){var t=a||{},r=0,i=0;if(t.origin!=null)if(typeof t.origin=="number")r=t.origin;else{var s=typeof t.origin=="string"?xn(t.origin):t.origin;r=s.r,i=s.c}var o=n.getElementsByTagName("tr"),c=Math.min(t.sheetRows||1e7,o.length),l={s:{r:0,c:0},e:{r,c:i}};if(e["!ref"]){var d=Xt(e["!ref"]);l.s.r=Math.min(l.s.r,d.s.r),l.s.c=Math.min(l.s.c,d.s.c),l.e.r=Math.max(l.e.r,d.e.r),l.e.c=Math.max(l.e.c,d.e.c),r==-1&&(l.e.r=r=d.e.r+1)}var u=[],f=0,v=e["!rows"]||(e["!rows"]=[]),h=0,p=0,m=0,y=0,T=0,j=0;for(e["!cols"]||(e["!cols"]=[]);h<o.length&&p<c;++h){var R=o[h];if(lv(R)){if(t.display)continue;v[p]={hidden:!0}}var N=R.children;for(m=y=0;m<N.length;++m){var F=N[m];if(!(t.display&&lv(F))){var _=F.hasAttribute("data-v")?F.getAttribute("data-v"):F.hasAttribute("v")?F.getAttribute("v"):ep(F.innerHTML),M=F.getAttribute("data-z")||F.getAttribute("z");for(f=0;f<u.length;++f){var I=u[f];I.s.c==y+i&&I.s.r<p+r&&p+r<=I.e.r&&(y=I.e.c+1-i,f=-1)}j=+F.getAttribute("colspan")||1,((T=+F.getAttribute("rowspan")||1)>1||j>1)&&u.push({s:{r:p+r,c:y+i},e:{r:p+r+(T||1)-1,c:y+i+(j||1)-1}});var X={t:"s",v:_},W=F.getAttribute("data-t")||F.getAttribute("t")||"";_!=null&&(_.length==0?X.t=W||"z":t.raw||_.trim().length==0||W=="s"||(_==="TRUE"?X={t:"b",v:!0}:_==="FALSE"?X={t:"b",v:!1}:isNaN(ea(_))?isNaN(Mt(_).getDate())||(X={t:"d",v:an(_)},t.cellDates||(X={t:"n",v:wn(X.v)}),X.z=t.dateNF||je[14]):X={t:"n",v:ea(_)})),X.z===void 0&&M!=null&&(X.z=M);var x="",C=F.getElementsByTagName("A");if(C&&C.length)for(var U=0;U<C.length&&!(C[U].hasAttribute("href")&&(x=C[U].getAttribute("href"),x.charAt(0)!="#"));++U);x&&x.charAt(0)!="#"&&(X.l={Target:x}),t.dense?(e[p+r]||(e[p+r]=[]),e[p+r][y+i]=X):e[me({c:y+i,r:p+r})]=X,l.e.c<y+i&&(l.e.c=y+i),y+=j}}++p}return u.length&&(e["!merges"]=(e["!merges"]||[]).concat(u)),l.e.r=Math.max(l.e.r,p-1+r),e["!ref"]=Ee(l),p>=c&&(e["!fullref"]=Ee((l.e.r=o.length-h+p-1+r,l))),e}function sh(e,n){var a=n||{},t=a.dense?[]:{};return ih(t,e,n)}function DC(e,n){return Xa(sh(e,n),n)}function lv(e){var n="",a=PC(e);return a&&(n=a(e).getPropertyValue("display")),n||(n=e.style&&e.style.display),n==="none"}function PC(e){return e.ownerDocument.defaultView&&typeof e.ownerDocument.defaultView.getComputedStyle=="function"?e.ownerDocument.defaultView.getComputedStyle:typeof getComputedStyle=="function"?getComputedStyle:null}function NC(e){var n=e.replace(/[\t\r\n]/g," ").trim().replace(/ +/g," ").replace(/<text:s\/>/g," ").replace(/<text:s text:c="(\d+)"\/>/g,function(t,r){return Array(parseInt(r,10)+1).join(" ")}).replace(/<text:tab[^>]*\/>/g,"	").replace(/<text:line-break\/>/g,`
`),a=Ae(n.replace(/<[^>]*>/g,""));return[a]}var dv={day:["d","dd"],month:["m","mm"],year:["y","yy"],hours:["h","hh"],minutes:["m","mm"],seconds:["s","ss"],"am-pm":["A/P","AM/PM"],"day-of-week":["ddd","dddd"],era:["e","ee"],quarter:["\\Qm",'m\\"th quarter"']};function oh(e,n){var a=n||{},t=sl(e),r=[],i,s,o={name:""},c="",l=0,d,u,f={},v=[],h=a.dense?[]:{},p,m,y={value:""},T="",j=0,R=[],N=-1,F=-1,_={s:{r:1e6,c:1e7},e:{r:0,c:0}},M=0,I={},X=[],W={},x=0,C=0,U=[],K=1,Q=1,ee=[],ve={Names:[]},L={},ie=["",""],ce=[],k={},B="",P=0,D=!1,Z=!1,re=0;for(Nr.lastIndex=0,t=t.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");p=Nr.exec(t);)switch(p[3]=p[3].replace(/_.*$/,"")){case"table":case"工作表":p[1]==="/"?(_.e.c>=_.s.c&&_.e.r>=_.s.r?h["!ref"]=Ee(_):h["!ref"]="A1:A1",a.sheetRows>0&&a.sheetRows<=_.e.r&&(h["!fullref"]=h["!ref"],_.e.r=a.sheetRows-1,h["!ref"]=Ee(_)),X.length&&(h["!merges"]=X),U.length&&(h["!rows"]=U),d.name=d.名称||d.name,typeof JSON<"u"&&JSON.stringify(d),v.push(d.name),f[d.name]=h,Z=!1):p[0].charAt(p[0].length-2)!=="/"&&(d=pe(p[0],!1),N=F=-1,_.s.r=_.s.c=1e7,_.e.r=_.e.c=0,h=a.dense?[]:{},X=[],U=[],Z=!0);break;case"table-row-group":p[1]==="/"?--M:++M;break;case"table-row":case"行":if(p[1]==="/"){N+=K,K=1;break}if(u=pe(p[0],!1),u.行号?N=u.行号-1:N==-1&&(N=0),K=+u["number-rows-repeated"]||1,K<10)for(re=0;re<K;++re)M>0&&(U[N+re]={level:M});F=-1;break;case"covered-table-cell":p[1]!=="/"&&++F,a.sheetStubs&&(a.dense?(h[N]||(h[N]=[]),h[N][F]={t:"z"}):h[me({r:N,c:F})]={t:"z"}),T="",R=[];break;case"table-cell":case"数据":if(p[0].charAt(p[0].length-2)==="/")++F,y=pe(p[0],!1),Q=parseInt(y["number-columns-repeated"]||"1",10),m={t:"z",v:null},y.formula&&a.cellFormula!=!1&&(m.f=rv(Ae(y.formula))),(y.数据类型||y["value-type"])=="string"&&(m.t="s",m.v=Ae(y["string-value"]||""),a.dense?(h[N]||(h[N]=[]),h[N][F]=m):h[me({r:N,c:F})]=m),F+=Q-1;else if(p[1]!=="/"){++F,T="",j=0,R=[],Q=1;var le=K?N+K-1:N;if(F>_.e.c&&(_.e.c=F),F<_.s.c&&(_.s.c=F),N<_.s.r&&(_.s.r=N),le>_.e.r&&(_.e.r=le),y=pe(p[0],!1),ce=[],k={},m={t:y.数据类型||y["value-type"],v:null},a.cellFormula)if(y.formula&&(y.formula=Ae(y.formula)),y["number-matrix-columns-spanned"]&&y["number-matrix-rows-spanned"]&&(x=parseInt(y["number-matrix-rows-spanned"],10)||0,C=parseInt(y["number-matrix-columns-spanned"],10)||0,W={s:{r:N,c:F},e:{r:N+x-1,c:F+C-1}},m.F=Ee(W),ee.push([W,m.F])),y.formula)m.f=rv(y.formula);else for(re=0;re<ee.length;++re)N>=ee[re][0].s.r&&N<=ee[re][0].e.r&&F>=ee[re][0].s.c&&F<=ee[re][0].e.c&&(m.F=ee[re][1]);switch((y["number-columns-spanned"]||y["number-rows-spanned"])&&(x=parseInt(y["number-rows-spanned"],10)||0,C=parseInt(y["number-columns-spanned"],10)||0,W={s:{r:N,c:F},e:{r:N+x-1,c:F+C-1}},X.push(W)),y["number-columns-repeated"]&&(Q=parseInt(y["number-columns-repeated"],10)),m.t){case"boolean":m.t="b",m.v=Pe(y["boolean-value"]);break;case"float":m.t="n",m.v=parseFloat(y.value);break;case"percentage":m.t="n",m.v=parseFloat(y.value);break;case"currency":m.t="n",m.v=parseFloat(y.value);break;case"date":m.t="d",m.v=an(y["date-value"]),a.cellDates||(m.t="n",m.v=wn(m.v)),m.z="m/d/yy";break;case"time":m.t="n",m.v=K_(y["time-value"])/86400,a.cellDates&&(m.t="d",m.v=Os(m.v)),m.z="HH:MM:SS";break;case"number":m.t="n",m.v=parseFloat(y.数据数值);break;default:if(m.t==="string"||m.t==="text"||!m.t)m.t="s",y["string-value"]!=null&&(T=Ae(y["string-value"]),R=[]);else throw new Error("Unsupported value type "+m.t)}}else{if(D=!1,m.t==="s"&&(m.v=T||"",R.length&&(m.R=R),D=j==0),L.Target&&(m.l=L),ce.length>0&&(m.c=ce,ce=[]),T&&a.cellText!==!1&&(m.w=T),D&&(m.t="z",delete m.v),(!D||a.sheetStubs)&&!(a.sheetRows&&a.sheetRows<=N))for(var se=0;se<K;++se){if(Q=parseInt(y["number-columns-repeated"]||"1",10),a.dense)for(h[N+se]||(h[N+se]=[]),h[N+se][F]=se==0?m:rn(m);--Q>0;)h[N+se][F+Q]=rn(m);else for(h[me({r:N+se,c:F})]=m;--Q>0;)h[me({r:N+se,c:F+Q})]=rn(m);_.e.c<=F&&(_.e.c=F)}Q=parseInt(y["number-columns-repeated"]||"1",10),F+=Q-1,Q=0,m={},T="",R=[]}L={};break;case"document":case"document-content":case"电子表格文档":case"spreadsheet":case"主体":case"scripts":case"styles":case"font-face-decls":case"master-styles":if(p[1]==="/"){if((i=r.pop())[0]!==p[3])throw"Bad state: "+i}else p[0].charAt(p[0].length-2)!=="/"&&r.push([p[3],!0]);break;case"annotation":if(p[1]==="/"){if((i=r.pop())[0]!==p[3])throw"Bad state: "+i;k.t=T,R.length&&(k.R=R),k.a=B,ce.push(k)}else p[0].charAt(p[0].length-2)!=="/"&&r.push([p[3],!1]);B="",P=0,T="",j=0,R=[];break;case"creator":p[1]==="/"?B=t.slice(P,p.index):P=p.index+p[0].length;break;case"meta":case"元数据":case"settings":case"config-item-set":case"config-item-map-indexed":case"config-item-map-entry":case"config-item-map-named":case"shapes":case"frame":case"text-box":case"image":case"data-pilot-tables":case"list-style":case"form":case"dde-links":case"event-listeners":case"chart":if(p[1]==="/"){if((i=r.pop())[0]!==p[3])throw"Bad state: "+i}else p[0].charAt(p[0].length-2)!=="/"&&r.push([p[3],!1]);T="",j=0,R=[];break;case"scientific-number":break;case"currency-symbol":break;case"currency-style":break;case"number-style":case"percentage-style":case"date-style":case"time-style":if(p[1]==="/"){if(I[o.name]=c,(i=r.pop())[0]!==p[3])throw"Bad state: "+i}else p[0].charAt(p[0].length-2)!=="/"&&(c="",o=pe(p[0],!1),r.push([p[3],!0]));break;case"script":break;case"libraries":break;case"automatic-styles":break;case"default-style":case"page-layout":break;case"style":break;case"map":break;case"font-face":break;case"paragraph-properties":break;case"table-properties":break;case"table-column-properties":break;case"table-row-properties":break;case"table-cell-properties":break;case"number":switch(r[r.length-1][0]){case"time-style":case"date-style":s=pe(p[0],!1),c+=dv[p[3]][s.style==="long"?1:0];break}break;case"fraction":break;case"day":case"month":case"year":case"era":case"day-of-week":case"week-of-year":case"quarter":case"hours":case"minutes":case"seconds":case"am-pm":switch(r[r.length-1][0]){case"time-style":case"date-style":s=pe(p[0],!1),c+=dv[p[3]][s.style==="long"?1:0];break}break;case"boolean-style":break;case"boolean":break;case"text-style":break;case"text":if(p[0].slice(-2)==="/>")break;if(p[1]==="/")switch(r[r.length-1][0]){case"number-style":case"date-style":case"time-style":c+=t.slice(l,p.index);break}else l=p.index+p[0].length;break;case"named-range":s=pe(p[0],!1),ie=ro(s["cell-range-address"]);var ae={Name:s.name,Ref:ie[0]+"!"+ie[1]};Z&&(ae.Sheet=v.length),ve.Names.push(ae);break;case"text-content":break;case"text-properties":break;case"embedded-text":break;case"body":case"电子表格":break;case"forms":break;case"table-column":break;case"table-header-rows":break;case"table-rows":break;case"table-column-group":break;case"table-header-columns":break;case"table-columns":break;case"null-date":break;case"graphic-properties":break;case"calculation-settings":break;case"named-expressions":break;case"label-range":break;case"label-ranges":break;case"named-expression":break;case"sort":break;case"sort-by":break;case"sort-groups":break;case"tab":break;case"line-break":break;case"span":break;case"p":case"文本串":if(["master-styles"].indexOf(r[r.length-1][0])>-1)break;if(p[1]==="/"&&(!y||!y["string-value"])){var Te=NC(t.slice(j,p.index));T=(T.length>0?T+`
`:"")+Te[0]}else pe(p[0],!1),j=p.index+p[0].length;break;case"s":break;case"database-range":if(p[1]==="/")break;try{ie=ro(pe(p[0])["target-range-address"]),f[ie[0]]["!autofilter"]={ref:ie[1]}}catch{}break;case"date":break;case"object":break;case"title":case"标题":break;case"desc":break;case"binary-data":break;case"table-source":break;case"scenario":break;case"iteration":break;case"content-validations":break;case"content-validation":break;case"help-message":break;case"error-message":break;case"database-ranges":break;case"filter":break;case"filter-and":break;case"filter-or":break;case"filter-condition":break;case"list-level-style-bullet":break;case"list-level-style-number":break;case"list-level-properties":break;case"sender-firstname":case"sender-lastname":case"sender-initials":case"sender-title":case"sender-position":case"sender-email":case"sender-phone-private":case"sender-fax":case"sender-company":case"sender-phone-work":case"sender-street":case"sender-city":case"sender-postal-code":case"sender-country":case"sender-state-or-province":case"author-name":case"author-initials":case"chapter":case"file-name":case"template-name":case"sheet-name":break;case"event-listener":break;case"initial-creator":case"creation-date":case"print-date":case"generator":case"document-statistic":case"user-defined":case"editing-duration":case"editing-cycles":break;case"config-item":break;case"page-number":break;case"page-count":break;case"time":break;case"cell-range-source":break;case"detective":break;case"operation":break;case"highlighted-range":break;case"data-pilot-table":case"source-cell-range":case"source-service":case"data-pilot-field":case"data-pilot-level":case"data-pilot-subtotals":case"data-pilot-subtotal":case"data-pilot-members":case"data-pilot-member":case"data-pilot-display-info":case"data-pilot-sort-info":case"data-pilot-layout-info":case"data-pilot-field-reference":case"data-pilot-groups":case"data-pilot-group":case"data-pilot-group-member":break;case"rect":break;case"dde-connection-decls":case"dde-connection-decl":case"dde-link":case"dde-source":break;case"properties":break;case"property":break;case"a":if(p[1]!=="/"){if(L=pe(p[0],!1),!L.href)break;L.Target=Ae(L.href),delete L.href,L.Target.charAt(0)=="#"&&L.Target.indexOf(".")>-1?(ie=ro(L.Target.slice(1)),L.Target="#"+ie[0]+"!"+ie[1]):L.Target.match(/^\.\.[\\\/]/)&&(L.Target=L.Target.slice(3))}break;case"table-protection":break;case"data-pilot-grand-total":break;case"office-document-common-attrs":break;default:switch(p[2]){case"dc:":case"calcext:":case"loext:":case"ooo:":case"chartooo:":case"draw:":case"style:":case"chart:":case"form:":case"uof:":case"表:":case"字:":break;default:if(a.WTF)throw new Error(p)}}var O={Sheets:f,SheetNames:v,Workbook:ve};return a.bookSheets&&delete O.Sheets,O}function uv(e,n){n=n||{},Bn(e,"META-INF/manifest.xml")&&Z2(Xe(e,"META-INF/manifest.xml"),n);var a=Fn(e,"content.xml");if(!a)throw new Error("Missing content.xml in ODS / UOF file");var t=oh(Oe(a),n);return Bn(e,"meta.xml")&&(t.Props=yp(Xe(e,"meta.xml"))),t}function vv(e,n){return oh(e,n)}/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */function xl(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function rc(e){return typeof TextDecoder<"u"?new TextDecoder().decode(e):Oe(xt(e))}function ic(e){var n=e.reduce(function(r,i){return r+i.length},0),a=new Uint8Array(n),t=0;return e.forEach(function(r){a.set(r,t),t+=r.length}),a}function fv(e){return e-=e>>1&1431655765,e=(e&858993459)+(e>>2&858993459),(e+(e>>4)&252645135)*16843009>>>24}function LC(e,n){for(var a=(e[n+15]&127)<<7|e[n+14]>>1,t=e[n+14]&1,r=n+13;r>=n;--r)t=t*256+e[r];return(e[n+15]&128?-t:t)*Math.pow(10,a-6176)}function Ur(e,n){var a=n?n[0]:0,t=e[a]&127;e:if(e[a++]>=128&&(t|=(e[a]&127)<<7,e[a++]<128||(t|=(e[a]&127)<<14,e[a++]<128)||(t|=(e[a]&127)<<21,e[a++]<128)||(t+=(e[a]&127)*Math.pow(2,28),++a,e[a++]<128)||(t+=(e[a]&127)*Math.pow(2,35),++a,e[a++]<128)||(t+=(e[a]&127)*Math.pow(2,42),++a,e[a++]<128)))break e;return n&&(n[0]=a),t}function Qe(e){var n=0,a=e[n]&127;e:if(e[n++]>=128){if(a|=(e[n]&127)<<7,e[n++]<128||(a|=(e[n]&127)<<14,e[n++]<128)||(a|=(e[n]&127)<<21,e[n++]<128))break e;a|=(e[n]&127)<<28}return a}function un(e){for(var n=[],a=[0];a[0]<e.length;){var t=a[0],r=Ur(e,a),i=r&7;r=Math.floor(r/8);var s=0,o;if(r==0)break;switch(i){case 0:{for(var c=a[0];e[a[0]++]>=128;);o=e.slice(c,a[0])}break;case 5:s=4,o=e.slice(a[0],a[0]+s),a[0]+=s;break;case 1:s=8,o=e.slice(a[0],a[0]+s),a[0]+=s;break;case 2:s=Ur(e,a),o=e.slice(a[0],a[0]+s),a[0]+=s;break;case 3:case 4:default:throw new Error("PB Type ".concat(i," for Field ").concat(r," at offset ").concat(t))}var l={data:o,type:i};n[r]==null?n[r]=[l]:n[r].push(l)}return n}function yl(e,n){return(e==null?void 0:e.map(function(a){return n(a.data)}))||[]}function MC(e){for(var n,a=[],t=[0];t[0]<e.length;){var r=Ur(e,t),i=un(e.slice(t[0],t[0]+r));t[0]+=r;var s={id:Qe(i[1][0].data),messages:[]};i[2].forEach(function(o){var c=un(o.data),l=Qe(c[3][0].data);s.messages.push({meta:c,data:e.slice(t[0],t[0]+l)}),t[0]+=l}),(n=i[3])!=null&&n[0]&&(s.merge=Qe(i[3][0].data)>>>0>0),a.push(s)}return a}function BC(e,n){if(e!=0)throw new Error("Unexpected Snappy chunk type ".concat(e));for(var a=[0],t=Ur(n,a),r=[];a[0]<n.length;){var i=n[a[0]]&3;if(i==0){var s=n[a[0]++]>>2;if(s<60)++s;else{var o=s-59;s=n[a[0]],o>1&&(s|=n[a[0]+1]<<8),o>2&&(s|=n[a[0]+2]<<16),o>3&&(s|=n[a[0]+3]<<24),s>>>=0,s++,a[0]+=o}r.push(n.slice(a[0],a[0]+s)),a[0]+=s;continue}else{var c=0,l=0;if(i==1?(l=(n[a[0]]>>2&7)+4,c=(n[a[0]++]&224)<<3,c|=n[a[0]++]):(l=(n[a[0]++]>>2)+1,i==2?(c=n[a[0]]|n[a[0]+1]<<8,a[0]+=2):(c=(n[a[0]]|n[a[0]+1]<<8|n[a[0]+2]<<16|n[a[0]+3]<<24)>>>0,a[0]+=4)),r=[ic(r)],c==0)throw new Error("Invalid offset 0");if(c>r[0].length)throw new Error("Invalid offset beyond length");if(l>=c)for(r.push(r[0].slice(-c)),l-=c;l>=r[r.length-1].length;)r.push(r[r.length-1]),l-=r[r.length-1].length;r.push(r[0].slice(-c,-c+l))}}var d=ic(r);if(d.length!=t)throw new Error("Unexpected length: ".concat(d.length," != ").concat(t));return d}function UC(e){for(var n=[],a=0;a<e.length;){var t=e[a++],r=e[a]|e[a+1]<<8|e[a+2]<<16;a+=3,n.push(BC(t,e.slice(a,a+r))),a+=r}if(a!==e.length)throw new Error("data is not a valid framed stream!");return ic(n)}function zC(e,n,a,t){var r=xl(e),i=r.getUint32(4,!0),s=(t>1?12:8)+fv(i&(t>1?3470:398))*4,o=-1,c=-1,l=NaN,d=new Date(2001,0,1);i&512&&(o=r.getUint32(s,!0),s+=4),s+=fv(i&(t>1?12288:4096))*4,i&16&&(c=r.getUint32(s,!0),s+=4),i&32&&(l=r.getFloat64(s,!0),s+=8),i&64&&(d.setTime(d.getTime()+r.getFloat64(s,!0)*1e3),s+=8);var u;switch(e[2]){case 0:break;case 2:u={t:"n",v:l};break;case 3:u={t:"s",v:n[c]};break;case 5:u={t:"d",v:d};break;case 6:u={t:"b",v:l>0};break;case 7:u={t:"n",v:l/86400};break;case 8:u={t:"e",v:0};break;case 9:if(o>-1)u={t:"s",v:a[o]};else if(c>-1)u={t:"s",v:n[c]};else if(!isNaN(l))u={t:"n",v:l};else throw new Error("Unsupported cell type ".concat(e.slice(0,4)));break;default:throw new Error("Unsupported cell type ".concat(e.slice(0,4)))}return u}function $C(e,n,a){var t=xl(e),r=t.getUint32(8,!0),i=12,s=-1,o=-1,c=NaN,l=NaN,d=new Date(2001,0,1);r&1&&(c=LC(e,i),i+=16),r&2&&(l=t.getFloat64(i,!0),i+=8),r&4&&(d.setTime(d.getTime()+t.getFloat64(i,!0)*1e3),i+=8),r&8&&(o=t.getUint32(i,!0),i+=4),r&16&&(s=t.getUint32(i,!0),i+=4);var u;switch(e[1]){case 0:break;case 2:u={t:"n",v:c};break;case 3:u={t:"s",v:n[o]};break;case 5:u={t:"d",v:d};break;case 6:u={t:"b",v:l>0};break;case 7:u={t:"n",v:l/86400};break;case 8:u={t:"e",v:0};break;case 9:if(s>-1)u={t:"s",v:a[s]};else throw new Error("Unsupported cell type ".concat(e[1]," : ").concat(r&31," : ").concat(e.slice(0,4)));break;case 10:u={t:"n",v:c};break;default:throw new Error("Unsupported cell type ".concat(e[1]," : ").concat(r&31," : ").concat(e.slice(0,4)))}return u}function qC(e,n,a){switch(e[0]){case 0:case 1:case 2:case 3:return zC(e,n,a,e[0]);case 5:return $C(e,n,a);default:throw new Error("Unsupported payload version ".concat(e[0]))}}function Ba(e){var n=un(e);return Ur(n[1][0].data)}function pv(e,n){var a=un(n.data),t=Qe(a[1][0].data),r=a[3],i=[];return(r||[]).forEach(function(s){var o=un(s.data),c=Qe(o[1][0].data)>>>0;switch(t){case 1:i[c]=rc(o[3][0].data);break;case 8:{var l=e[Ba(o[9][0].data)][0],d=un(l.data),u=e[Ba(d[1][0].data)][0],f=Qe(u.meta[1][0].data);if(f!=2001)throw new Error("2000 unexpected reference to ".concat(f));var v=un(u.data);i[c]=v[3].map(function(h){return rc(h.data)}).join("")}break}}),i}function HC(e,n){var a,t,r,i,s,o,c,l,d,u,f,v,h,p,m=un(e),y=Qe(m[1][0].data)>>>0,T=Qe(m[2][0].data)>>>0,j=((t=(a=m[8])==null?void 0:a[0])==null?void 0:t.data)&&Qe(m[8][0].data)>0||!1,R,N;if((i=(r=m[7])==null?void 0:r[0])!=null&&i.data&&n!=0)R=(o=(s=m[7])==null?void 0:s[0])==null?void 0:o.data,N=(l=(c=m[6])==null?void 0:c[0])==null?void 0:l.data;else if((u=(d=m[4])==null?void 0:d[0])!=null&&u.data&&n!=1)R=(v=(f=m[4])==null?void 0:f[0])==null?void 0:v.data,N=(p=(h=m[3])==null?void 0:h[0])==null?void 0:p.data;else throw"NUMBERS Tile missing ".concat(n," cell storage");for(var F=j?4:1,_=xl(R),M=[],I=0;I<R.length/2;++I){var X=_.getUint16(I*2,!0);X<65535&&M.push([I,X])}if(M.length!=T)throw"Expected ".concat(T," cells, found ").concat(M.length);var W=[];for(I=0;I<M.length-1;++I)W[M[I][0]]=N.subarray(M[I][1]*F,M[I+1][1]*F);return M.length>=1&&(W[M[M.length-1][0]]=N.subarray(M[M.length-1][1]*F)),{R:y,cells:W}}function WC(e,n){var a,t=un(n.data),r=(a=t==null?void 0:t[7])!=null&&a[0]?Qe(t[7][0].data)>>>0>0?1:0:-1,i=yl(t[5],function(s){return HC(s,r)});return{nrows:Qe(t[4][0].data)>>>0,data:i.reduce(function(s,o){return s[o.R]||(s[o.R]=[]),o.cells.forEach(function(c,l){if(s[o.R][l])throw new Error("Duplicate cell r=".concat(o.R," c=").concat(l));s[o.R][l]=c}),s},[])}}function GC(e,n,a){var t,r=un(n.data),i={s:{r:0,c:0},e:{r:0,c:0}};if(i.e.r=(Qe(r[6][0].data)>>>0)-1,i.e.r<0)throw new Error("Invalid row varint ".concat(r[6][0].data));if(i.e.c=(Qe(r[7][0].data)>>>0)-1,i.e.c<0)throw new Error("Invalid col varint ".concat(r[7][0].data));a["!ref"]=Ee(i);var s=un(r[4][0].data),o=pv(e,e[Ba(s[4][0].data)][0]),c=(t=s[17])!=null&&t[0]?pv(e,e[Ba(s[17][0].data)][0]):[],l=un(s[3][0].data),d=0;l[1].forEach(function(u){var f=un(u.data),v=e[Ba(f[2][0].data)][0],h=Qe(v.meta[1][0].data);if(h!=6002)throw new Error("6001 unexpected reference to ".concat(h));var p=WC(e,v);p.data.forEach(function(m,y){m.forEach(function(T,j){var R=me({r:d+y,c:j}),N=qC(T,o,c);N&&(a[R]=N)})}),d+=p.nrows})}function VC(e,n){var a=un(n.data),t={"!ref":"A1"},r=e[Ba(a[2][0].data)],i=Qe(r[0].meta[1][0].data);if(i!=6001)throw new Error("6000 unexpected reference to ".concat(i));return GC(e,r[0],t),t}function XC(e,n){var a,t=un(n.data),r={name:(a=t[1])!=null&&a[0]?rc(t[1][0].data):"",sheets:[]},i=yl(t[2],Ba);return i.forEach(function(s){e[s].forEach(function(o){var c=Qe(o.meta[1][0].data);c==6e3&&r.sheets.push(VC(e,o))})}),r}function KC(e,n){var a=_l(),t=un(n.data),r=yl(t[1],Ba);if(r.forEach(function(i){e[i].forEach(function(s){var o=Qe(s.meta[1][0].data);if(o==2){var c=XC(e,s);c.sheets.forEach(function(l,d){kl(a,l,d==0?c.name:c.name+"_"+d,!0)})}})}),a.SheetNames.length==0)throw new Error("Empty NUMBERS file");return a}function so(e){var n,a,t,r,i={},s=[];if(e.FullPaths.forEach(function(c){if(c.match(/\.iwpv2/))throw new Error("Unsupported password protection")}),e.FileIndex.forEach(function(c){if(c.name.match(/\.iwa$/)){var l;try{l=UC(c.content)}catch(u){return console.log("?? "+c.content.length+" "+(u.message||u))}var d;try{d=MC(l)}catch(u){return console.log("## "+(u.message||u))}d.forEach(function(u){i[u.id]=u.messages,s.push(u.id)})}}),!s.length)throw new Error("File has no messages");var o=((r=(t=(a=(n=i==null?void 0:i[1])==null?void 0:n[0])==null?void 0:a.meta)==null?void 0:t[1])==null?void 0:r[0].data)&&Qe(i[1][0].meta[1][0].data)==1&&i[1][0];if(o||s.forEach(function(c){i[c].forEach(function(l){var d=Qe(l.meta[1][0].data)>>>0;if(d==1)if(!o)o=l;else throw new Error("Document has multiple roots")})}),!o)throw new Error("Cannot find Document root");return KC(i,o)}function YC(e){return function(a){for(var t=0;t!=e.length;++t){var r=e[t];a[r[0]]===void 0&&(a[r[0]]=r[1]),r[2]==="n"&&(a[r[0]]=Number(a[r[0]]))}}}function bl(e){YC([["cellNF",!1],["cellHTML",!0],["cellFormula",!0],["cellStyles",!1],["cellText",!0],["cellDates",!1],["sheetStubs",!1],["sheetRows",0,"n"],["bookDeps",!1],["bookSheets",!1],["bookProps",!1],["bookFiles",!1],["bookVBA",!1],["password",""],["WTF",!1]])(e)}function JC(e){return Ot.WS.indexOf(e)>-1?"sheet":e==Ot.CS?"chart":e==Ot.DS?"dialog":e==Ot.MS?"macro":e&&e.length?e:"sheet"}function ZC(e,n){if(!e)return 0;try{e=n.map(function(t){return t.id||(t.id=t.strRelID),[t.name,e["!id"][t.id].Target,JC(e["!id"][t.id].Type)]})}catch{return null}return!e||e.length===0?null:e}function QC(e,n,a,t,r,i,s,o,c,l,d,u){try{i[t]=xr(Fn(e,a,!0),n);var f=Xe(e,n),v;switch(o){case"sheet":v=iC(f,n,r,c,i[t],l,d,u);break;case"chart":if(v=sC(f,n,r,c,i[t],l,d,u),!v||!v["!drawel"])break;var h=vr(v["!drawel"].Target,n),p=Qo(h),m=rA(Fn(e,h,!0),xr(Fn(e,p,!0),h)),y=vr(m,h),T=Qo(y);v=$S(Fn(e,y,!0),y,c,xr(Fn(e,T,!0),y),l,v);break;case"macro":v=oC(f,n,r,c,i[t],l,d,u);break;case"dialog":v=cC(f,n,r,c,i[t],l,d,u);break;default:throw new Error("Unrecognized sheet type "+o)}s[t]=v;var j=[];i&&i[t]&&ua(i[t]).forEach(function(R){var N="";if(i[t][R].Type==Ot.CMNT){N=vr(i[t][R].Target,n);var F=vC(Xe(e,N,!0),N,c);if(!F||!F.length)return;Qu(v,F,!1)}i[t][R].Type==Ot.TCMNT&&(N=vr(i[t][R].Target,n),j=j.concat(sA(Xe(e,N,!0),c)))}),j&&j.length&&Qu(v,j,!0,c.people||[])}catch(R){if(c.WTF)throw R}}function Ln(e){return e.charAt(0)=="/"?e.slice(1):e}function eF(e,n){if(W0(),n=n||{},bl(n),Bn(e,"META-INF/manifest.xml")||Bn(e,"objectdata.xml"))return uv(e,n);if(Bn(e,"Index/Document.iwa")){if(typeof Uint8Array>"u")throw new Error("NUMBERS file parsing requires Uint8Array support");if(typeof so<"u"){if(e.FileIndex)return so(e);var a=ke.utils.cfb_new();return Tu(e).forEach(function(U){n2(a,U,e2(e,U))}),so(a)}throw new Error("Unsupported NUMBERS file")}if(!Bn(e,"[Content_Types].xml"))throw Bn(e,"index.xml.gz")?new Error("Unsupported NUMBERS 08 file"):Bn(e,"index.xml")?new Error("Unsupported NUMBERS 09 file"):new Error("Unsupported ZIP file");var t=Tu(e),r=Y2(Fn(e,"[Content_Types].xml")),i=!1,s,o;if(r.workbooks.length===0&&(o="xl/workbook.xml",Xe(e,o,!0)&&r.workbooks.push(o)),r.workbooks.length===0){if(o="xl/workbook.bin",!Xe(e,o,!0))throw new Error("Could not find workbook");r.workbooks.push(o),i=!0}r.workbooks[0].slice(-3)=="bin"&&(i=!0);var c={},l={};if(!n.bookSheets&&!n.bookProps){if(wr=[],r.sst)try{wr=uC(Xe(e,Ln(r.sst)),r.sst,n)}catch(U){if(n.WTF)throw U}n.cellStyles&&r.themes.length&&(c=dC(Fn(e,r.themes[0].replace(/^\//,""),!0)||"",r.themes[0],n)),r.style&&(l=lC(Xe(e,Ln(r.style)),r.style,c,n))}r.links.map(function(U){try{var K=xr(Fn(e,Qo(Ln(U))),U);return pC(Xe(e,Ln(U)),K,U,n)}catch{}});var d=rC(Xe(e,Ln(r.workbooks[0])),r.workbooks[0],n),u={},f="";r.coreprops.length&&(f=Xe(e,Ln(r.coreprops[0]),!0),f&&(u=yp(f)),r.extprops.length!==0&&(f=Xe(e,Ln(r.extprops[0]),!0),f&&nk(f,u,n)));var v={};(!n.bookSheets||n.bookProps)&&r.custprops.length!==0&&(f=Fn(e,Ln(r.custprops[0]),!0),f&&(v=tk(f,n)));var h={};if((n.bookSheets||n.bookProps)&&(d.Sheets?s=d.Sheets.map(function(K){return K.name}):u.Worksheets&&u.SheetNames.length>0&&(s=u.SheetNames),n.bookProps&&(h.Props=u,h.Custprops=v),n.bookSheets&&typeof s<"u"&&(h.SheetNames=s),n.bookSheets?h.SheetNames:n.bookProps))return h;s={};var p={};n.bookDeps&&r.calcchain&&(p=fC(Xe(e,Ln(r.calcchain)),r.calcchain));var m=0,y={},T,j;{var R=d.Sheets;u.Worksheets=R.length,u.SheetNames=[];for(var N=0;N!=R.length;++N)u.SheetNames[N]=R[N].name}var F=i?"bin":"xml",_=r.workbooks[0].lastIndexOf("/"),M=(r.workbooks[0].slice(0,_+1)+"_rels/"+r.workbooks[0].slice(_+1)+".rels").replace(/^\//,"");Bn(e,M)||(M="xl/_rels/workbook."+F+".rels");var I=xr(Fn(e,M,!0),M.replace(/_rels.*/,"s5s"));(r.metadata||[]).length>=1&&(n.xlmeta=hC(Xe(e,Ln(r.metadata[0])),r.metadata[0],n)),(r.people||[]).length>=1&&(n.people=oA(Xe(e,Ln(r.people[0])),n)),I&&(I=ZC(I,d.Sheets));var X=Xe(e,"xl/worksheets/sheet.xml",!0)?1:0;e:for(m=0;m!=u.Worksheets;++m){var W="sheet";if(I&&I[m]?(T="xl/"+I[m][1].replace(/[\/]?xl\//,""),Bn(e,T)||(T=I[m][1]),Bn(e,T)||(T=M.replace(/_rels\/.*$/,"")+I[m][1]),W=I[m][2]):(T="xl/worksheets/sheet"+(m+1-X)+"."+F,T=T.replace(/sheet0\./,"sheet.")),j=T.replace(/^(.*)(\/)([^\/]*)$/,"$1/_rels/$3.rels"),n&&n.sheets!=null)switch(typeof n.sheets){case"number":if(m!=n.sheets)continue e;break;case"string":if(u.SheetNames[m].toLowerCase()!=n.sheets.toLowerCase())continue e;break;default:if(Array.isArray&&Array.isArray(n.sheets)){for(var x=!1,C=0;C!=n.sheets.length;++C)typeof n.sheets[C]=="number"&&n.sheets[C]==m&&(x=1),typeof n.sheets[C]=="string"&&n.sheets[C].toLowerCase()==u.SheetNames[m].toLowerCase()&&(x=1);if(!x)continue e}}QC(e,T,j,u.SheetNames[m],m,y,s,W,n,d,c,l)}return h={Directory:r,Workbook:d,Props:u,Custprops:v,Deps:p,Sheets:s,SheetNames:u.SheetNames,Strings:wr,Styles:l,Themes:c,SSF:rn(je)},n&&n.bookFiles&&(e.files?(h.keys=t,h.files=e.files):(h.keys=[],h.files={},e.FullPaths.forEach(function(U,K){U=U.replace(/^Root Entry[\/]/,""),h.keys.push(U),h.files[U]=e.FileIndex[K]}))),n&&n.bookVBA&&(r.vba.length>0?h.vbaraw=Xe(e,Ln(r.vba[0]),!0):r.defaults&&r.defaults.bin===uA&&(h.vbaraw=Xe(e,"xl/vbaProject.bin",!0))),h}function nF(e,n){var a=n||{},t="Workbook",r=ke.find(e,t);try{if(t="/!DataSpaces/Version",r=ke.find(e,t),!r||!r.content)throw new Error("ECMA-376 Encrypted file missing "+t);if(VE(r.content),t="/!DataSpaces/DataSpaceMap",r=ke.find(e,t),!r||!r.content)throw new Error("ECMA-376 Encrypted file missing "+t);var i=KE(r.content);if(i.length!==1||i[0].comps.length!==1||i[0].comps[0].t!==0||i[0].name!=="StrongEncryptionDataSpace"||i[0].comps[0].v!=="EncryptedPackage")throw new Error("ECMA-376 Encrypted file bad "+t);if(t="/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace",r=ke.find(e,t),!r||!r.content)throw new Error("ECMA-376 Encrypted file missing "+t);var s=YE(r.content);if(s.length!=1||s[0]!="StrongEncryptionTransform")throw new Error("ECMA-376 Encrypted file bad "+t);if(t="/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary",r=ke.find(e,t),!r||!r.content)throw new Error("ECMA-376 Encrypted file missing "+t);ZE(r.content)}catch{}if(t="/EncryptionInfo",r=ke.find(e,t),!r||!r.content)throw new Error("ECMA-376 Encrypted file missing "+t);var o=QE(r.content);if(t="/EncryptedPackage",r=ke.find(e,t),!r||!r.content)throw new Error("ECMA-376 Encrypted file missing "+t);if(o[0]==4&&typeof decrypt_agile<"u")return decrypt_agile(o[1],r.content,a.password||"",a);if(o[0]==2&&typeof decrypt_std76<"u")return decrypt_std76(o[1],r.content,a.password||"",a);throw new Error("File is password-protected")}function wl(e,n){var a="";switch((n||{}).type||"base64"){case"buffer":return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];case"base64":a=In(e.slice(0,12));break;case"binary":a=e;break;case"array":return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];default:throw new Error("Unrecognized type "+(n&&n.type||"undefined"))}return[a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2),a.charCodeAt(3),a.charCodeAt(4),a.charCodeAt(5),a.charCodeAt(6),a.charCodeAt(7)]}function aF(e,n){return ke.find(e,"EncryptedPackage")?nF(e,n):rh(e,n)}function tF(e,n){var a,t=e,r=n||{};return r.type||(r.type=_e&&Buffer.isBuffer(e)?"buffer":"base64"),a=J0(t,r),eF(a,r)}function ch(e,n){var a=0;e:for(;a<e.length;)switch(e.charCodeAt(a)){case 10:case 13:case 32:++a;break;case 60:return ac(e.slice(a),n);default:break e}return Lr.to_workbook(e,n)}function rF(e,n){var a="",t=wl(e,n);switch(n.type){case"base64":a=In(e);break;case"binary":a=e;break;case"buffer":a=e.toString("binary");break;case"array":a=pt(e);break;default:throw new Error("Unrecognized type "+n.type)}return t[0]==239&&t[1]==187&&t[2]==191&&(a=Oe(a)),n.type="binary",ch(a,n)}function iF(e,n){var a=e;return n.type=="base64"&&(a=In(a)),a=Yo.utils.decode(1200,a.slice(2),"str"),n.type="binary",ch(a,n)}function sF(e){return e.match(/[^\x00-\x7F]/)?fr(e):e}function oo(e,n,a,t){return t?(a.type="string",Lr.to_workbook(e,a)):Lr.to_workbook(n,a)}function sc(e,n){I0();var a=n||{};if(typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer)return sc(new Uint8Array(e),(a=rn(a),a.type="array",a));typeof Uint8Array<"u"&&e instanceof Uint8Array&&!a.type&&(a.type=typeof Deno<"u"?"buffer":"array");var t=e,r=[0,0,0,0],i=!1;if(a.cellStyles&&(a.cellNF=!0,a.sheetStubs=!0),Nt={},a.dateNF&&(Nt.dateNF=a.dateNF),a.type||(a.type=_e&&Buffer.isBuffer(e)?"buffer":"base64"),a.type=="file"&&(a.type=_e?"buffer":"binary",t=V_(e),typeof Uint8Array<"u"&&!_e&&(a.type="array")),a.type=="string"&&(i=!0,a.type="binary",a.codepage=65001,t=sF(e)),a.type=="array"&&typeof Uint8Array<"u"&&e instanceof Uint8Array&&typeof ArrayBuffer<"u"){var s=new ArrayBuffer(3),o=new Uint8Array(s);if(o.foo="bar",!o.foo)return a=rn(a),a.type="array",sc(el(t),a)}switch((r=wl(t,a))[0]){case 208:if(r[1]===207&&r[2]===17&&r[3]===224&&r[4]===161&&r[5]===177&&r[6]===26&&r[7]===225)return aF(ke.read(t,a),a);break;case 9:if(r[1]<=8)return rh(t,a);break;case 60:return ac(t,a);case 73:if(r[1]===73&&r[2]===42&&r[3]===0)throw new Error("TIFF Image File is not a spreadsheet");if(r[1]===68)return DE(t,a);break;case 84:if(r[1]===65&&r[2]===66&&r[3]===76)return RE.to_workbook(t,a);break;case 80:return r[1]===75&&r[2]<9&&r[3]<9?tF(t,a):oo(e,t,a,i);case 239:return r[3]===60?ac(t,a):oo(e,t,a,i);case 255:if(r[1]===254)return iF(t,a);if(r[1]===0&&r[2]===2&&r[3]===0)return br.to_workbook(t,a);break;case 0:if(r[1]===0&&(r[2]>=2&&r[3]===0||r[2]===0&&(r[3]===8||r[3]===9)))return br.to_workbook(t,a);break;case 3:case 131:case 139:case 140:return Zu.to_workbook(t,a);case 123:if(r[1]===92&&r[2]===114&&r[3]===116)return uT.to_workbook(t,a);break;case 10:case 13:case 32:return rF(t,a);case 137:if(r[1]===80&&r[2]===78&&r[3]===71)throw new Error("PNG Image File is not a spreadsheet");break}return FE.indexOf(r[0])>-1&&r[2]<=12&&r[3]<=31?Zu.to_workbook(t,a):oo(e,t,a,i)}function oF(e,n,a,t,r,i,s,o){var c=sn(a),l=o.defval,d=o.raw||!Object.prototype.hasOwnProperty.call(o,"raw"),u=!0,f=r===1?[]:{};if(r!==1)if(Object.defineProperty)try{Object.defineProperty(f,"__rowNum__",{value:a,enumerable:!1})}catch{f.__rowNum__=a}else f.__rowNum__=a;if(!s||e[a])for(var v=n.s.c;v<=n.e.c;++v){var h=s?e[a][v]:e[t[v]+c];if(h===void 0||h.t===void 0){if(l===void 0)continue;i[v]!=null&&(f[i[v]]=l);continue}var p=h.v;switch(h.t){case"z":if(p==null)break;continue;case"e":p=p==0?null:void 0;break;case"s":case"d":case"b":case"n":break;default:throw new Error("unrecognized type "+h.t)}if(i[v]!=null){if(p==null)if(h.t=="e"&&p===null)f[i[v]]=null;else if(l!==void 0)f[i[v]]=l;else if(d&&p===null)f[i[v]]=null;else continue;else f[i[v]]=d&&(h.t!=="n"||h.t==="n"&&o.rawNumbers!==!1)?p:_a(h,p,o);p!=null&&(u=!1)}}return{row:f,isempty:u}}function oc(e,n){if(e==null||e["!ref"]==null)return[];var a={t:"n",v:0},t=0,r=1,i=[],s=0,o="",c={s:{r:0,c:0},e:{r:0,c:0}},l=n||{},d=l.range!=null?l.range:e["!ref"];switch(l.header===1?t=1:l.header==="A"?t=2:Array.isArray(l.header)?t=3:l.header==null&&(t=0),typeof d){case"string":c=ze(d);break;case"number":c=ze(e["!ref"]),c.s.r=d;break;default:c=d}t>0&&(r=0);var u=sn(c.s.r),f=[],v=[],h=0,p=0,m=Array.isArray(e),y=c.s.r,T=0,j={};m&&!e[y]&&(e[y]=[]);var R=l.skipHidden&&e["!cols"]||[],N=l.skipHidden&&e["!rows"]||[];for(T=c.s.c;T<=c.e.c;++T)if(!(R[T]||{}).hidden)switch(f[T]=Ze(T),a=m?e[y][T]:e[f[T]+u],t){case 1:i[T]=T-c.s.c;break;case 2:i[T]=f[T];break;case 3:i[T]=l.header[T-c.s.c];break;default:if(a==null&&(a={w:"__EMPTY",t:"s"}),o=s=_a(a,null,l),p=j[s]||0,!p)j[s]=1;else{do o=s+"_"+p++;while(j[o]);j[s]=p,j[o]=1}i[T]=o}for(y=c.s.r+r;y<=c.e.r;++y)if(!(N[y]||{}).hidden){var F=oF(e,c,y,f,t,i,m,l);(F.isempty===!1||(t===1?l.blankrows!==!1:l.blankrows))&&(v[h++]=F.row)}return v.length=h,v}var hv=/"/g;function cF(e,n,a,t,r,i,s,o){for(var c=!0,l=[],d="",u=sn(a),f=n.s.c;f<=n.e.c;++f)if(t[f]){var v=o.dense?(e[a]||[])[f]:e[t[f]+u];if(v==null)d="";else if(v.v!=null){c=!1,d=""+(o.rawNumbers&&v.t=="n"?v.v:_a(v,null,o));for(var h=0,p=0;h!==d.length;++h)if((p=d.charCodeAt(h))===r||p===i||p===34||o.forceQuotes){d='"'+d.replace(hv,'""')+'"';break}d=="ID"&&(d='"ID"')}else v.f!=null&&!v.F?(c=!1,d="="+v.f,d.indexOf(",")>=0&&(d='"'+d.replace(hv,'""')+'"')):d="";l.push(d)}return o.blankrows===!1&&c?null:l.join(s)}function lh(e,n){var a=[],t=n??{};if(e==null||e["!ref"]==null)return"";var r=ze(e["!ref"]),i=t.FS!==void 0?t.FS:",",s=i.charCodeAt(0),o=t.RS!==void 0?t.RS:`
`,c=o.charCodeAt(0),l=new RegExp((i=="|"?"\\|":i)+"+$"),d="",u=[];t.dense=Array.isArray(e);for(var f=t.skipHidden&&e["!cols"]||[],v=t.skipHidden&&e["!rows"]||[],h=r.s.c;h<=r.e.c;++h)(f[h]||{}).hidden||(u[h]=Ze(h));for(var p=0,m=r.s.r;m<=r.e.r;++m)(v[m]||{}).hidden||(d=cF(e,r,m,u,s,c,i,t),d!=null&&(t.strip&&(d=d.replace(l,"")),(d||t.blankrows!==!1)&&a.push((p++?o:"")+d)));return delete t.dense,a.join("")}function lF(e,n){n||(n={}),n.FS="	",n.RS=`
`;var a=lh(e,n);return a}function dF(e){var n="",a,t="";if(e==null||e["!ref"]==null)return[];var r=ze(e["!ref"]),i="",s=[],o,c=[],l=Array.isArray(e);for(o=r.s.c;o<=r.e.c;++o)s[o]=Ze(o);for(var d=r.s.r;d<=r.e.r;++d)for(i=sn(d),o=r.s.c;o<=r.e.c;++o)if(n=s[o]+i,a=l?(e[d]||[])[o]:e[n],t="",a!==void 0){if(a.F!=null){if(n=a.F,!a.f)continue;t=a.f,n.indexOf(":")==-1&&(n=n+":"+n)}if(a.f!=null)t=a.f;else{if(a.t=="z")continue;if(a.t=="n"&&a.v!=null)t=""+a.v;else if(a.t=="b")t=a.v?"TRUE":"FALSE";else if(a.w!==void 0)t="'"+a.w;else{if(a.v===void 0)continue;a.t=="s"?t="'"+a.v:t=""+a.v}}c[c.length]=n+"="+t}return c}function dh(e,n,a){var t=a||{},r=+!t.skipHeader,i=e||{},s=0,o=0;if(i&&t.origin!=null)if(typeof t.origin=="number")s=t.origin;else{var c=typeof t.origin=="string"?xn(t.origin):t.origin;s=c.r,o=c.c}var l,d={s:{c:0,r:0},e:{c:o,r:s+n.length-1+r}};if(i["!ref"]){var u=ze(i["!ref"]);d.e.c=Math.max(d.e.c,u.e.c),d.e.r=Math.max(d.e.r,u.e.r),s==-1&&(s=u.e.r+1,d.e.r=s+n.length-1+r)}else s==-1&&(s=0,d.e.r=n.length-1+r);var f=t.header||[],v=0;n.forEach(function(p,m){ua(p).forEach(function(y){(v=f.indexOf(y))==-1&&(f[v=f.length]=y);var T=p[y],j="z",R="",N=me({c:o+v,r:s+m+r});l=zr(i,N),T&&typeof T=="object"&&!(T instanceof Date)?i[N]=T:(typeof T=="number"?j="n":typeof T=="boolean"?j="b":typeof T=="string"?j="s":T instanceof Date?(j="d",t.cellDates||(j="n",T=wn(T)),R=t.dateNF||je[14]):T===null&&t.nullError&&(j="e",T=0),l?(l.t=j,l.v=T,delete l.w,delete l.R,R&&(l.z=R)):i[N]=l={t:j,v:T},R&&(l.z=R))})}),d.e.c=Math.max(d.e.c,o+f.length-1);var h=sn(s);if(r)for(v=0;v<f.length;++v)i[Ze(v+o)+h]={t:"s",v:f[v]};return i["!ref"]=Ee(d),i}function uF(e,n){return dh(null,e,n)}function zr(e,n,a){if(typeof n=="string"){if(Array.isArray(e)){var t=xn(n);return e[t.r]||(e[t.r]=[]),e[t.r][t.c]||(e[t.r][t.c]={t:"z"})}return e[n]||(e[n]={t:"z"})}return typeof n!="number"?zr(e,me(n)):zr(e,me({r:n,c:a||0}))}function vF(e,n){if(typeof n=="number"){if(n>=0&&e.SheetNames.length>n)return n;throw new Error("Cannot find sheet # "+n)}else if(typeof n=="string"){var a=e.SheetNames.indexOf(n);if(a>-1)return a;throw new Error("Cannot find sheet name |"+n+"|")}else throw new Error("Cannot find sheet |"+n+"|")}function _l(){return{SheetNames:[],Sheets:{}}}function kl(e,n,a,t){var r=1;if(!a)for(;r<=65535&&e.SheetNames.indexOf(a="Sheet"+r)!=-1;++r,a=void 0);if(!a||e.SheetNames.length>=65535)throw new Error("Too many worksheets");if(t&&e.SheetNames.indexOf(a)>=0){var i=a.match(/(^.*?)(\d+)$/);r=i&&+i[2]||0;var s=i&&i[1]||a;for(++r;r<=65535&&e.SheetNames.indexOf(a=s+r)!=-1;++r);}if(YS(a),e.SheetNames.indexOf(a)>=0)throw new Error("Worksheet with name |"+a+"| already exists!");return e.SheetNames.push(a),e.Sheets[a]=n,a}function fF(e,n,a){e.Workbook||(e.Workbook={}),e.Workbook.Sheets||(e.Workbook.Sheets=[]);var t=vF(e,n);switch(e.Workbook.Sheets[t]||(e.Workbook.Sheets[t]={}),a){case 0:case 1:case 2:break;default:throw new Error("Bad sheet visibility setting "+a)}e.Workbook.Sheets[t].Hidden=a}function pF(e,n){return e.z=n,e}function uh(e,n,a){return n?(e.l={Target:n},a&&(e.l.Tooltip=a)):delete e.l,e}function hF(e,n,a){return uh(e,"#"+n,a)}function mF(e,n,a){e.c||(e.c=[]),e.c.push({t:n,a:a||"SheetJS"})}function gF(e,n,a,t){for(var r=typeof n!="string"?n:ze(n),i=typeof n=="string"?n:Ee(n),s=r.s.r;s<=r.e.r;++s)for(var o=r.s.c;o<=r.e.c;++o){var c=zr(e,s,o);c.t="n",c.F=i,delete c.v,s==r.s.r&&o==r.s.c&&(c.f=a,t&&(c.D=!0))}return e}var jF={encode_col:Ze,encode_row:sn,encode_cell:me,encode_range:Ee,decode_col:ll,decode_row:cl,split_cell:C2,decode_cell:xn,decode_range:Xt,format_cell:_a,sheet_add_aoa:hp,sheet_add_json:dh,sheet_add_dom:ih,aoa_to_sheet:Kt,json_to_sheet:uF,table_to_sheet:sh,table_to_book:DC,sheet_to_csv:lh,sheet_to_txt:lF,sheet_to_json:oc,sheet_to_html:IC,sheet_to_formulae:dF,sheet_to_row_object_array:oc,sheet_get_cell:zr,book_new:_l,book_append_sheet:kl,book_set_sheet_visibility:fF,cell_set_number_format:pF,cell_set_hyperlink:uh,cell_set_internal_link:hF,cell_add_comment:mF,sheet_set_array_formula:gF,consts:{SHEET_VISIBLE:0,SHEET_HIDDEN:1,SHEET_VERY_HIDDEN:2}};const xF={name:"WordBooks",data(){return{wordBooks:Ji(),currentBookIdx:Zi(),progressMap:{}}},created(){this.refreshProgress()},methods:{async onExcelUpload(e){const n=e.target.files[0];if(!n)return;const a=await n.arrayBuffer(),t=sc(a),r=t.Sheets[t.SheetNames[0]],s=jF.sheet_to_json(r,{header:1}).filter(c=>c[0]&&c[1]).map(c=>({en:c[0],zh:c[1]})),o=n.name.replace(/\.[^.]+$/,"");this.wordBooks.push({id:Date.now(),name:o,words:s}),_d(this.wordBooks),this.refreshProgress(),this.$forceUpdate()},selectBook(e){pf(e),this.currentBookIdx=e,this.refreshProgress(),this.$message&&this.$message.success("已切换词库")},removeBook(e){if(e===this.currentBookIdx){this.$message&&this.$message.error("不能删除当前词库");return}this.wordBooks.splice(e,1),_d(this.wordBooks),this.refreshProgress(),this.$forceUpdate()},refreshProgress(){const e={};for(const n of this.wordBooks){const a=hf(n.id);e[n.id]=Math.round((a.percent||0)*100)}this.progressMap=e}}};var yF=function(){var n=this,a=n._self._c;return a("div",{staticClass:"wordbooks-page"},[n._m(0),n.wordBooks.length===0?a("div",{staticClass:"empty-tip"},[n._v(" 暂无词库，请导入或添加新词库 ")]):n._e(),a("ul",{staticClass:"book-list"},n._l(n.wordBooks,function(t,r){return a("li",{key:t.id,class:{active:r===n.currentBookIdx}},[a("div",{staticClass:"book-info"},[a("span",{staticClass:"book-name"},[n._v(n._s(t.name))]),a("span",{staticClass:"book-count"},[n._v(n._s(t.words.length)+"词")]),n.progressMap[t.id]!==void 0?a("span",{staticClass:"book-progress"},[n._v(n._s(n.progressMap[t.id])+"%")]):n._e()]),a("div",{staticClass:"book-actions"},[r!==n.currentBookIdx?a("button",{staticClass:"switch-btn",on:{click:function(i){return n.selectBook(r)}}},[n._v("切换")]):a("span",{staticClass:"current-label"},[n._v("当前")]),a("button",{staticClass:"delete-btn",on:{click:function(i){return n.removeBook(r)}}},[a("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M6 6l12 12M6 18L18 6",stroke:"#e55","stroke-width":"2",fill:"none","stroke-linecap":"round"}})])])])])}),0),a("div",{staticClass:"add-button-container"},[a("button",{staticClass:"upload-btn",on:{click:function(t){return n.$refs.excelInput.click()}}},[a("svg",{staticStyle:{"vertical-align":"middle","margin-right":"4px"},attrs:{width:"18",height:"18",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12 5v14m7-7H5",stroke:"#3578e5","stroke-width":"2",fill:"none","stroke-linecap":"round"}})]),n._v(" 导入 ")]),a("input",{ref:"excelInput",staticStyle:{display:"none"},attrs:{type:"file",accept:".xlsx,.xls"},on:{change:n.onExcelUpload}})])])},bF=[function(){var e=this,n=e._self._c;return n("header",{staticClass:"wb-header"},[n("h2",{staticClass:"title"},[e._v("词库管理")])])}],wF=_n(xF,yF,bF,!1,null,"517142b1");const _F=wF.exports,kF={name:"Index",data(){return{dailyWord:{en:"serendipity",zh:"意外发现美好事物的能力"},dailySentence:{en:"The best way to get started is to quit talking and begin doing.",zh:"开始的最好方法就是停止空谈并付诸行动。"}}},methods:{goWords(){this.$router.push("/words")}}};var EF=function(){var n=this,a=n._self._c;return a("div",{staticClass:"index-page"},[a("div",{staticClass:"bg-img"}),a("div",{staticClass:"content"},[a("div",{staticClass:"daily-word-block"},[a("div",{staticClass:"daily-label"},[n._v("每日精选单词")]),a("div",{staticClass:"daily-word"},[n._v(n._s(n.dailyWord.en))]),a("div",{staticClass:"daily-zh"},[n._v(n._s(n.dailyWord.zh))])]),a("div",{staticClass:"daily-sentence-block"},[a("div",{staticClass:"sentence-label"},[n._v("每日英文句子")]),a("div",{staticClass:"sentence-en"},[n._v("“"+n._s(n.dailySentence.en)+"”")]),a("div",{staticClass:"sentence-zh"},[n._v(n._s(n.dailySentence.zh))])]),a("button",{staticClass:"start-btn",on:{click:n.goWords}},[n._v(" 开始背单词 ")])])])},TF=[],AF=_n(kF,EF,TF,!1,null,"15013f3f");const SF=AF.exports;Ie.use(Pf);const CF=new Pf({routes:[{path:"/",component:SF,name:"首页"},{path:"/recognize",component:uw,name:"图片识别"},{path:"/words",component:m_,name:"背单词"},{path:"/wordbooks",component:_F,name:"词库"}]});Ie.component("Icon",O0);new Ie({router:CF,render:e=>e(yx)}).$mount("#app");
