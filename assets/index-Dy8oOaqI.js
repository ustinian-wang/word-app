(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const b of l)if(b.type==="childList")for(const o of b.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(l){const b={};return l.integrity&&(b.integrity=l.integrity),l.referrerPolicy&&(b.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?b.credentials="include":l.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function s(l){if(l.ep)return;l.ep=!0;const b=r(l);fetch(l.href,b)}})();var define_global_process_env_default={};/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */var emptyObject=Object.freeze({}),isArray=Array.isArray;function isUndef(n){return n==null}function isDef(n){return n!=null}function isTrue(n){return n===!0}function isFalse(n){return n===!1}function isPrimitive(n){return typeof n=="string"||typeof n=="number"||typeof n=="symbol"||typeof n=="boolean"}function isFunction(n){return typeof n=="function"}function isObject$1(n){return n!==null&&typeof n=="object"}var _toString=Object.prototype.toString;function isPlainObject(n){return _toString.call(n)==="[object Object]"}function isRegExp(n){return _toString.call(n)==="[object RegExp]"}function isValidArrayIndex(n){var t=parseFloat(String(n));return t>=0&&Math.floor(t)===t&&isFinite(n)}function isPromise$1(n){return isDef(n)&&typeof n.then=="function"&&typeof n.catch=="function"}function toString(n){return n==null?"":Array.isArray(n)||isPlainObject(n)&&n.toString===_toString?JSON.stringify(n,replacer,2):String(n)}function replacer(n,t){return t&&t.__v_isRef?t.value:t}function toNumber(n){var t=parseFloat(n);return isNaN(t)?n:t}function makeMap(n,t){for(var r=Object.create(null),s=n.split(","),l=0;l<s.length;l++)r[s[l]]=!0;return t?function(b){return r[b.toLowerCase()]}:function(b){return r[b]}}makeMap("slot,component",!0);var isReservedAttribute=makeMap("key,ref,slot,slot-scope,is");function remove$2(n,t){var r=n.length;if(r){if(t===n[r-1]){n.length=r-1;return}var s=n.indexOf(t);if(s>-1)return n.splice(s,1)}}var hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(n,t){return hasOwnProperty.call(n,t)}function cached(n){var t=Object.create(null);return function(s){var l=t[s];return l||(t[s]=n(s))}}var camelizeRE=/-(\w)/g,camelize=cached(function(n){return n.replace(camelizeRE,function(t,r){return r?r.toUpperCase():""})}),capitalize=cached(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}),hyphenateRE=/\B([A-Z])/g,hyphenate=cached(function(n){return n.replace(hyphenateRE,"-$1").toLowerCase()});function polyfillBind(n,t){function r(s){var l=arguments.length;return l?l>1?n.apply(t,arguments):n.call(t,s):n.call(t)}return r._length=n.length,r}function nativeBind(n,t){return n.bind(t)}var bind=Function.prototype.bind?nativeBind:polyfillBind;function toArray(n,t){t=t||0;for(var r=n.length-t,s=new Array(r);r--;)s[r]=n[r+t];return s}function extend$1(n,t){for(var r in t)n[r]=t[r];return n}function toObject(n){for(var t={},r=0;r<n.length;r++)n[r]&&extend$1(t,n[r]);return t}function noop$1(n,t,r){}var no=function(n,t,r){return!1},identity=function(n){return n};function looseEqual(n,t){if(n===t)return!0;var r=isObject$1(n),s=isObject$1(t);if(r&&s)try{var l=Array.isArray(n),b=Array.isArray(t);if(l&&b)return n.length===t.length&&n.every(function(Qe,at){return looseEqual(Qe,t[at])});if(n instanceof Date&&t instanceof Date)return n.getTime()===t.getTime();if(!l&&!b){var o=Object.keys(n),B=Object.keys(t);return o.length===B.length&&o.every(function(Qe){return looseEqual(n[Qe],t[Qe])})}else return!1}catch{return!1}else return!r&&!s?String(n)===String(t):!1}function looseIndexOf(n,t){for(var r=0;r<n.length;r++)if(looseEqual(n[r],t))return r;return-1}function once$1(n){var t=!1;return function(){t||(t=!0,n.apply(this,arguments))}}function hasChanged(n,t){return n===t?n===0&&1/n!==1/t:n===n||t===t}var SSR_ATTR="data-server-rendered",ASSET_TYPES=["component","directive","filter"],LIFECYCLE_HOOKS=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],config={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:no,isReservedAttr:no,isUnknownElement:no,getTagNamespace:noop$1,parsePlatformTagName:identity,mustUseProp:no,async:!0,_lifecycleHooks:LIFECYCLE_HOOKS},unicodeRegExp=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function isReserved(n){var t=(n+"").charCodeAt(0);return t===36||t===95}function def(n,t,r,s){Object.defineProperty(n,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}var bailRE=new RegExp("[^".concat(unicodeRegExp.source,".$_\\d]"));function parsePath$1(n){if(!bailRE.test(n)){var t=n.split(".");return function(r){for(var s=0;s<t.length;s++){if(!r)return;r=r[t[s]]}return r}}}var hasProto="__proto__"in{},inBrowser$1=typeof window<"u",UA=inBrowser$1&&window.navigator.userAgent.toLowerCase(),isIE=UA&&/msie|trident/.test(UA),isIE9=UA&&UA.indexOf("msie 9.0")>0,isEdge=UA&&UA.indexOf("edge/")>0;UA&&UA.indexOf("android")>0;var isIOS=UA&&/iphone|ipad|ipod|ios/.test(UA),isFF=UA&&UA.match(/firefox\/(\d+)/),nativeWatch={}.watch,supportsPassive=!1;if(inBrowser$1)try{var opts={};Object.defineProperty(opts,"passive",{get:function(){supportsPassive=!0}}),window.addEventListener("test-passive",null,opts)}catch{}var _isServer,isServerRendering=function(){return _isServer===void 0&&(!inBrowser$1&&typeof global<"u"?_isServer=global.process&&define_global_process_env_default.VUE_ENV==="server":_isServer=!1),_isServer},devtools=inBrowser$1&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function isNative(n){return typeof n=="function"&&/native code/.test(n.toString())}var hasSymbol$1=typeof Symbol<"u"&&isNative(Symbol)&&typeof Reflect<"u"&&isNative(Reflect.ownKeys),_Set;typeof Set<"u"&&isNative(Set)?_Set=Set:_Set=function(){function n(){this.set=Object.create(null)}return n.prototype.has=function(t){return this.set[t]===!0},n.prototype.add=function(t){this.set[t]=!0},n.prototype.clear=function(){this.set=Object.create(null)},n}();var currentInstance=null;function setCurrentInstance(n){n===void 0&&(n=null),n||currentInstance&&currentInstance._scope.off(),currentInstance=n,n&&n._scope.on()}var VNode=function(){function n(t,r,s,l,b,o,B,Qe){this.tag=t,this.data=r,this.children=s,this.text=l,this.elm=b,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=r&&r.key,this.componentOptions=B,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=Qe,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(n.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),n}(),createEmptyVNode=function(n){n===void 0&&(n="");var t=new VNode;return t.text=n,t.isComment=!0,t};function createTextVNode(n){return new VNode(void 0,void 0,void 0,String(n))}function cloneVNode(n){var t=new VNode(n.tag,n.data,n.children&&n.children.slice(),n.text,n.elm,n.context,n.componentOptions,n.asyncFactory);return t.ns=n.ns,t.isStatic=n.isStatic,t.key=n.key,t.isComment=n.isComment,t.fnContext=n.fnContext,t.fnOptions=n.fnOptions,t.fnScopeId=n.fnScopeId,t.asyncMeta=n.asyncMeta,t.isCloned=!0,t}typeof SuppressedError=="function"&&SuppressedError;var uid$2=0,pendingCleanupDeps=[],cleanupDeps=function(){for(var n=0;n<pendingCleanupDeps.length;n++){var t=pendingCleanupDeps[n];t.subs=t.subs.filter(function(r){return r}),t._pending=!1}pendingCleanupDeps.length=0},Dep=function(){function n(){this._pending=!1,this.id=uid$2++,this.subs=[]}return n.prototype.addSub=function(t){this.subs.push(t)},n.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,pendingCleanupDeps.push(this))},n.prototype.depend=function(t){n.target&&n.target.addDep(this)},n.prototype.notify=function(t){for(var r=this.subs.filter(function(o){return o}),s=0,l=r.length;s<l;s++){var b=r[s];b.update()}},n}();Dep.target=null;var targetStack=[];function pushTarget(n){targetStack.push(n),Dep.target=n}function popTarget(){targetStack.pop(),Dep.target=targetStack[targetStack.length-1]}var arrayProto=Array.prototype,arrayMethods=Object.create(arrayProto),methodsToPatch=["push","pop","shift","unshift","splice","sort","reverse"];methodsToPatch.forEach(function(n){var t=arrayProto[n];def(arrayMethods,n,function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];var b=t.apply(this,s),o=this.__ob__,B;switch(n){case"push":case"unshift":B=s;break;case"splice":B=s.slice(2);break}return B&&o.observeArray(B),o.dep.notify(),b})});var arrayKeys=Object.getOwnPropertyNames(arrayMethods),NO_INITIAL_VALUE={},shouldObserve=!0;function toggleObserving(n){shouldObserve=n}var mockDep={notify:noop$1,depend:noop$1,addSub:noop$1,removeSub:noop$1},Observer=function(){function n(t,r,s){if(r===void 0&&(r=!1),s===void 0&&(s=!1),this.value=t,this.shallow=r,this.mock=s,this.dep=s?mockDep:new Dep,this.vmCount=0,def(t,"__ob__",this),isArray(t)){if(!s)if(hasProto)t.__proto__=arrayMethods;else for(var l=0,b=arrayKeys.length;l<b;l++){var o=arrayKeys[l];def(t,o,arrayMethods[o])}r||this.observeArray(t)}else for(var B=Object.keys(t),l=0;l<B.length;l++){var o=B[l];defineReactive(t,o,NO_INITIAL_VALUE,void 0,r,s)}}return n.prototype.observeArray=function(t){for(var r=0,s=t.length;r<s;r++)observe(t[r],!1,this.mock)},n}();function observe(n,t,r){if(n&&hasOwn(n,"__ob__")&&n.__ob__ instanceof Observer)return n.__ob__;if(shouldObserve&&(r||!isServerRendering())&&(isArray(n)||isPlainObject(n))&&Object.isExtensible(n)&&!n.__v_skip&&!isRef(n)&&!(n instanceof VNode))return new Observer(n,t,r)}function defineReactive(n,t,r,s,l,b,o){o===void 0&&(o=!1);var B=new Dep,Qe=Object.getOwnPropertyDescriptor(n,t);if(!(Qe&&Qe.configurable===!1)){var at=Qe&&Qe.get,ot=Qe&&Qe.set;(!at||ot)&&(r===NO_INITIAL_VALUE||arguments.length===2)&&(r=n[t]);var ct=l?r&&r.__ob__:observe(r,!1,b);return Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:function(){var lt=at?at.call(n):r;return Dep.target&&(B.depend(),ct&&(ct.dep.depend(),isArray(lt)&&dependArray(lt))),isRef(lt)&&!l?lt.value:lt},set:function(lt){var ea=at?at.call(n):r;if(hasChanged(ea,lt)){if(ot)ot.call(n,lt);else{if(at)return;if(!l&&isRef(ea)&&!isRef(lt)){ea.value=lt;return}else r=lt}ct=l?lt&&lt.__ob__:observe(lt,!1,b),B.notify()}}}),B}}function set(n,t,r){if(!isReadonly(n)){var s=n.__ob__;return isArray(n)&&isValidArrayIndex(t)?(n.length=Math.max(n.length,t),n.splice(t,1,r),s&&!s.shallow&&s.mock&&observe(r,!1,!0),r):t in n&&!(t in Object.prototype)?(n[t]=r,r):n._isVue||s&&s.vmCount?r:s?(defineReactive(s.value,t,r,void 0,s.shallow,s.mock),s.dep.notify(),r):(n[t]=r,r)}}function del(n,t){if(isArray(n)&&isValidArrayIndex(t)){n.splice(t,1);return}var r=n.__ob__;n._isVue||r&&r.vmCount||isReadonly(n)||hasOwn(n,t)&&(delete n[t],r&&r.dep.notify())}function dependArray(n){for(var t=void 0,r=0,s=n.length;r<s;r++)t=n[r],t&&t.__ob__&&t.__ob__.dep.depend(),isArray(t)&&dependArray(t)}function shallowReactive(n){return makeReactive(n,!0),def(n,"__v_isShallow",!0),n}function makeReactive(n,t){isReadonly(n)||observe(n,t,isServerRendering())}function isReadonly(n){return!!(n&&n.__v_isReadonly)}function isRef(n){return!!(n&&n.__v_isRef===!0)}function proxyWithRefUnwrap(n,t,r){Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:function(){var s=t[r];if(isRef(s))return s.value;var l=s&&s.__ob__;return l&&l.dep.depend(),s},set:function(s){var l=t[r];isRef(l)&&!isRef(s)?l.value=s:t[r]=s}})}var activeEffectScope,EffectScope=function(){function n(t){t===void 0&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=activeEffectScope,!t&&activeEffectScope&&(this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1)}return n.prototype.run=function(t){if(this.active){var r=activeEffectScope;try{return activeEffectScope=this,t()}finally{activeEffectScope=r}}},n.prototype.on=function(){activeEffectScope=this},n.prototype.off=function(){activeEffectScope=this.parent},n.prototype.stop=function(t){if(this.active){var r=void 0,s=void 0;for(r=0,s=this.effects.length;r<s;r++)this.effects[r].teardown();for(r=0,s=this.cleanups.length;r<s;r++)this.cleanups[r]();if(this.scopes)for(r=0,s=this.scopes.length;r<s;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){var l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this.active=!1}},n}();function recordEffectScope(n,t){t===void 0&&(t=activeEffectScope),t&&t.active&&t.effects.push(n)}function getCurrentScope(){return activeEffectScope}function resolveProvided(n){var t=n._provided,r=n.$parent&&n.$parent._provided;return r===t?n._provided=Object.create(r):t}var normalizeEvent=cached(function(n){var t=n.charAt(0)==="&";n=t?n.slice(1):n;var r=n.charAt(0)==="~";n=r?n.slice(1):n;var s=n.charAt(0)==="!";return n=s?n.slice(1):n,{name:n,once:r,capture:s,passive:t}});function createFnInvoker(n,t){function r(){var s=r.fns;if(isArray(s))for(var l=s.slice(),b=0;b<l.length;b++)invokeWithErrorHandling(l[b],null,arguments,t,"v-on handler");else return invokeWithErrorHandling(s,null,arguments,t,"v-on handler")}return r.fns=n,r}function updateListeners(n,t,r,s,l,b){var o,B,Qe,at;for(o in n)B=n[o],Qe=t[o],at=normalizeEvent(o),isUndef(B)||(isUndef(Qe)?(isUndef(B.fns)&&(B=n[o]=createFnInvoker(B,b)),isTrue(at.once)&&(B=n[o]=l(at.name,B,at.capture)),r(at.name,B,at.capture,at.passive,at.params)):B!==Qe&&(Qe.fns=B,n[o]=Qe));for(o in t)isUndef(n[o])&&(at=normalizeEvent(o),s(at.name,t[o],at.capture))}function mergeVNodeHook(n,t,r){n instanceof VNode&&(n=n.data.hook||(n.data.hook={}));var s,l=n[t];function b(){r.apply(this,arguments),remove$2(s.fns,b)}isUndef(l)?s=createFnInvoker([b]):isDef(l.fns)&&isTrue(l.merged)?(s=l,s.fns.push(b)):s=createFnInvoker([l,b]),s.merged=!0,n[t]=s}function extractPropsFromVNodeData(n,t,r){var s=t.options.props;if(!isUndef(s)){var l={},b=n.attrs,o=n.props;if(isDef(b)||isDef(o))for(var B in s){var Qe=hyphenate(B);checkProp(l,o,B,Qe,!0)||checkProp(l,b,B,Qe,!1)}return l}}function checkProp(n,t,r,s,l){if(isDef(t)){if(hasOwn(t,r))return n[r]=t[r],l||delete t[r],!0;if(hasOwn(t,s))return n[r]=t[s],l||delete t[s],!0}return!1}function simpleNormalizeChildren(n){for(var t=0;t<n.length;t++)if(isArray(n[t]))return Array.prototype.concat.apply([],n);return n}function normalizeChildren(n){return isPrimitive(n)?[createTextVNode(n)]:isArray(n)?normalizeArrayChildren(n):void 0}function isTextNode(n){return isDef(n)&&isDef(n.text)&&isFalse(n.isComment)}function normalizeArrayChildren(n,t){var r=[],s,l,b,o;for(s=0;s<n.length;s++)l=n[s],!(isUndef(l)||typeof l=="boolean")&&(b=r.length-1,o=r[b],isArray(l)?l.length>0&&(l=normalizeArrayChildren(l,"".concat(t||"","_").concat(s)),isTextNode(l[0])&&isTextNode(o)&&(r[b]=createTextVNode(o.text+l[0].text),l.shift()),r.push.apply(r,l)):isPrimitive(l)?isTextNode(o)?r[b]=createTextVNode(o.text+l):l!==""&&r.push(createTextVNode(l)):isTextNode(l)&&isTextNode(o)?r[b]=createTextVNode(o.text+l.text):(isTrue(n._isVList)&&isDef(l.tag)&&isUndef(l.key)&&isDef(t)&&(l.key="__vlist".concat(t,"_").concat(s,"__")),r.push(l)));return r}function renderList(n,t){var r=null,s,l,b,o;if(isArray(n)||typeof n=="string")for(r=new Array(n.length),s=0,l=n.length;s<l;s++)r[s]=t(n[s],s);else if(typeof n=="number")for(r=new Array(n),s=0;s<n;s++)r[s]=t(s+1,s);else if(isObject$1(n))if(hasSymbol$1&&n[Symbol.iterator]){r=[];for(var B=n[Symbol.iterator](),Qe=B.next();!Qe.done;)r.push(t(Qe.value,r.length)),Qe=B.next()}else for(b=Object.keys(n),r=new Array(b.length),s=0,l=b.length;s<l;s++)o=b[s],r[s]=t(n[o],o,s);return isDef(r)||(r=[]),r._isVList=!0,r}function renderSlot(n,t,r,s){var l=this.$scopedSlots[n],b;l?(r=r||{},s&&(r=extend$1(extend$1({},s),r)),b=l(r)||(isFunction(t)?t():t)):b=this.$slots[n]||(isFunction(t)?t():t);var o=r&&r.slot;return o?this.$createElement("template",{slot:o},b):b}function resolveFilter(n){return resolveAsset(this.$options,"filters",n)||identity}function isKeyNotMatch(n,t){return isArray(n)?n.indexOf(t)===-1:n!==t}function checkKeyCodes(n,t,r,s,l){var b=config.keyCodes[t]||r;return l&&s&&!config.keyCodes[t]?isKeyNotMatch(l,s):b?isKeyNotMatch(b,n):s?hyphenate(s)!==t:n===void 0}function bindObjectProps(n,t,r,s,l){if(r&&isObject$1(r)){isArray(r)&&(r=toObject(r));var b=void 0,o=function(Qe){if(Qe==="class"||Qe==="style"||isReservedAttribute(Qe))b=n;else{var at=n.attrs&&n.attrs.type;b=s||config.mustUseProp(t,at,Qe)?n.domProps||(n.domProps={}):n.attrs||(n.attrs={})}var ot=camelize(Qe),ct=hyphenate(Qe);if(!(ot in b)&&!(ct in b)&&(b[Qe]=r[Qe],l)){var ut=n.on||(n.on={});ut["update:".concat(Qe)]=function(lt){r[Qe]=lt}}};for(var B in r)o(B)}return n}function renderStatic(n,t){var r=this._staticTrees||(this._staticTrees=[]),s=r[n];return s&&!t||(s=r[n]=this.$options.staticRenderFns[n].call(this._renderProxy,this._c,this),markStatic(s,"__static__".concat(n),!1)),s}function markOnce(n,t,r){return markStatic(n,"__once__".concat(t).concat(r?"_".concat(r):""),!0),n}function markStatic(n,t,r){if(isArray(n))for(var s=0;s<n.length;s++)n[s]&&typeof n[s]!="string"&&markStaticNode(n[s],"".concat(t,"_").concat(s),r);else markStaticNode(n,t,r)}function markStaticNode(n,t,r){n.isStatic=!0,n.key=t,n.isOnce=r}function bindObjectListeners(n,t){if(t&&isPlainObject(t)){var r=n.on=n.on?extend$1({},n.on):{};for(var s in t){var l=r[s],b=t[s];r[s]=l?[].concat(l,b):b}}return n}function resolveScopedSlots(n,t,r,s){t=t||{$stable:!r};for(var l=0;l<n.length;l++){var b=n[l];isArray(b)?resolveScopedSlots(b,t,r):b&&(b.proxy&&(b.fn.proxy=!0),t[b.key]=b.fn)}return s&&(t.$key=s),t}function bindDynamicKeys(n,t){for(var r=0;r<t.length;r+=2){var s=t[r];typeof s=="string"&&s&&(n[t[r]]=t[r+1])}return n}function prependModifier(n,t){return typeof n=="string"?t+n:n}function installRenderHelpers(n){n._o=markOnce,n._n=toNumber,n._s=toString,n._l=renderList,n._t=renderSlot,n._q=looseEqual,n._i=looseIndexOf,n._m=renderStatic,n._f=resolveFilter,n._k=checkKeyCodes,n._b=bindObjectProps,n._v=createTextVNode,n._e=createEmptyVNode,n._u=resolveScopedSlots,n._g=bindObjectListeners,n._d=bindDynamicKeys,n._p=prependModifier}function resolveSlots(n,t){if(!n||!n.length)return{};for(var r={},s=0,l=n.length;s<l;s++){var b=n[s],o=b.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,(b.context===t||b.fnContext===t)&&o&&o.slot!=null){var B=o.slot,Qe=r[B]||(r[B]=[]);b.tag==="template"?Qe.push.apply(Qe,b.children||[]):Qe.push(b)}else(r.default||(r.default=[])).push(b)}for(var at in r)r[at].every(isWhitespace)&&delete r[at];return r}function isWhitespace(n){return n.isComment&&!n.asyncFactory||n.text===" "}function isAsyncPlaceholder(n){return n.isComment&&n.asyncFactory}function normalizeScopedSlots(n,t,r,s){var l,b=Object.keys(r).length>0,o=t?!!t.$stable:!b,B=t&&t.$key;if(!t)l={};else{if(t._normalized)return t._normalized;if(o&&s&&s!==emptyObject&&B===s.$key&&!b&&!s.$hasNormal)return s;l={};for(var Qe in t)t[Qe]&&Qe[0]!=="$"&&(l[Qe]=normalizeScopedSlot(n,r,Qe,t[Qe]))}for(var at in r)at in l||(l[at]=proxyNormalSlot(r,at));return t&&Object.isExtensible(t)&&(t._normalized=l),def(l,"$stable",o),def(l,"$key",B),def(l,"$hasNormal",b),l}function normalizeScopedSlot(n,t,r,s){var l=function(){var b=currentInstance;setCurrentInstance(n);var o=arguments.length?s.apply(null,arguments):s({});o=o&&typeof o=="object"&&!isArray(o)?[o]:normalizeChildren(o);var B=o&&o[0];return setCurrentInstance(b),o&&(!B||o.length===1&&B.isComment&&!isAsyncPlaceholder(B))?void 0:o};return s.proxy&&Object.defineProperty(t,r,{get:l,enumerable:!0,configurable:!0}),l}function proxyNormalSlot(n,t){return function(){return n[t]}}function initSetup(n){var t=n.$options,r=t.setup;if(r){var s=n._setupContext=createSetupContext(n);setCurrentInstance(n),pushTarget();var l=invokeWithErrorHandling(r,null,[n._props||shallowReactive({}),s],n,"setup");if(popTarget(),setCurrentInstance(),isFunction(l))t.render=l;else if(isObject$1(l))if(n._setupState=l,l.__sfc){var o=n._setupProxy={};for(var b in l)b!=="__sfc"&&proxyWithRefUnwrap(o,l,b)}else for(var b in l)isReserved(b)||proxyWithRefUnwrap(n,l,b)}}function createSetupContext(n){return{get attrs(){if(!n._attrsProxy){var t=n._attrsProxy={};def(t,"_v_attr_proxy",!0),syncSetupProxy(t,n.$attrs,emptyObject,n,"$attrs")}return n._attrsProxy},get listeners(){if(!n._listenersProxy){var t=n._listenersProxy={};syncSetupProxy(t,n.$listeners,emptyObject,n,"$listeners")}return n._listenersProxy},get slots(){return initSlotsProxy(n)},emit:bind(n.$emit,n),expose:function(t){t&&Object.keys(t).forEach(function(r){return proxyWithRefUnwrap(n,t,r)})}}}function syncSetupProxy(n,t,r,s,l){var b=!1;for(var o in t)o in n?t[o]!==r[o]&&(b=!0):(b=!0,defineProxyAttr(n,o,s,l));for(var o in n)o in t||(b=!0,delete n[o]);return b}function defineProxyAttr(n,t,r,s){Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:function(){return r[s][t]}})}function initSlotsProxy(n){return n._slotsProxy||syncSetupSlots(n._slotsProxy={},n.$scopedSlots),n._slotsProxy}function syncSetupSlots(n,t){for(var r in t)n[r]=t[r];for(var r in n)r in t||delete n[r]}function initRender(n){n._vnode=null,n._staticTrees=null;var t=n.$options,r=n.$vnode=t._parentVnode,s=r&&r.context;n.$slots=resolveSlots(t._renderChildren,s),n.$scopedSlots=r?normalizeScopedSlots(n.$parent,r.data.scopedSlots,n.$slots):emptyObject,n._c=function(b,o,B,Qe){return createElement$1(n,b,o,B,Qe,!1)},n.$createElement=function(b,o,B,Qe){return createElement$1(n,b,o,B,Qe,!0)};var l=r&&r.data;defineReactive(n,"$attrs",l&&l.attrs||emptyObject,null,!0),defineReactive(n,"$listeners",t._parentListeners||emptyObject,null,!0)}var currentRenderingInstance=null;function renderMixin(n){installRenderHelpers(n.prototype),n.prototype.$nextTick=function(t){return nextTick(t,this)},n.prototype._render=function(){var t=this,r=t.$options,s=r.render,l=r._parentVnode;l&&t._isMounted&&(t.$scopedSlots=normalizeScopedSlots(t.$parent,l.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&syncSetupSlots(t._slotsProxy,t.$scopedSlots)),t.$vnode=l;var b=currentInstance,o=currentRenderingInstance,B;try{setCurrentInstance(t),currentRenderingInstance=t,B=s.call(t._renderProxy,t.$createElement)}catch(Qe){handleError(Qe,t,"render"),B=t._vnode}finally{currentRenderingInstance=o,setCurrentInstance(b)}return isArray(B)&&B.length===1&&(B=B[0]),B instanceof VNode||(B=createEmptyVNode()),B.parent=l,B}}function ensureCtor(n,t){return(n.__esModule||hasSymbol$1&&n[Symbol.toStringTag]==="Module")&&(n=n.default),isObject$1(n)?t.extend(n):n}function createAsyncPlaceholder(n,t,r,s,l){var b=createEmptyVNode();return b.asyncFactory=n,b.asyncMeta={data:t,context:r,children:s,tag:l},b}function resolveAsyncComponent(n,t){if(isTrue(n.error)&&isDef(n.errorComp))return n.errorComp;if(isDef(n.resolved))return n.resolved;var r=currentRenderingInstance;if(r&&isDef(n.owners)&&n.owners.indexOf(r)===-1&&n.owners.push(r),isTrue(n.loading)&&isDef(n.loadingComp))return n.loadingComp;if(r&&!isDef(n.owners)){var s=n.owners=[r],l=!0,b=null,o=null;r.$on("hook:destroyed",function(){return remove$2(s,r)});var B=function(ct){for(var ut=0,lt=s.length;ut<lt;ut++)s[ut].$forceUpdate();ct&&(s.length=0,b!==null&&(clearTimeout(b),b=null),o!==null&&(clearTimeout(o),o=null))},Qe=once$1(function(ct){n.resolved=ensureCtor(ct,t),l?s.length=0:B(!0)}),at=once$1(function(ct){isDef(n.errorComp)&&(n.error=!0,B(!0))}),ot=n(Qe,at);return isObject$1(ot)&&(isPromise$1(ot)?isUndef(n.resolved)&&ot.then(Qe,at):isPromise$1(ot.component)&&(ot.component.then(Qe,at),isDef(ot.error)&&(n.errorComp=ensureCtor(ot.error,t)),isDef(ot.loading)&&(n.loadingComp=ensureCtor(ot.loading,t),ot.delay===0?n.loading=!0:b=setTimeout(function(){b=null,isUndef(n.resolved)&&isUndef(n.error)&&(n.loading=!0,B(!1))},ot.delay||200)),isDef(ot.timeout)&&(o=setTimeout(function(){o=null,isUndef(n.resolved)&&at(null)},ot.timeout)))),l=!1,n.loading?n.loadingComp:n.resolved}}function getFirstComponentChild(n){if(isArray(n))for(var t=0;t<n.length;t++){var r=n[t];if(isDef(r)&&(isDef(r.componentOptions)||isAsyncPlaceholder(r)))return r}}var SIMPLE_NORMALIZE=1,ALWAYS_NORMALIZE=2;function createElement$1(n,t,r,s,l,b){return(isArray(r)||isPrimitive(r))&&(l=s,s=r,r=void 0),isTrue(b)&&(l=ALWAYS_NORMALIZE),_createElement(n,t,r,s,l)}function _createElement(n,t,r,s,l){if(isDef(r)&&isDef(r.__ob__)||(isDef(r)&&isDef(r.is)&&(t=r.is),!t))return createEmptyVNode();isArray(s)&&isFunction(s[0])&&(r=r||{},r.scopedSlots={default:s[0]},s.length=0),l===ALWAYS_NORMALIZE?s=normalizeChildren(s):l===SIMPLE_NORMALIZE&&(s=simpleNormalizeChildren(s));var b,o;if(typeof t=="string"){var B=void 0;o=n.$vnode&&n.$vnode.ns||config.getTagNamespace(t),config.isReservedTag(t)?b=new VNode(config.parsePlatformTagName(t),r,s,void 0,void 0,n):(!r||!r.pre)&&isDef(B=resolveAsset(n.$options,"components",t))?b=createComponent(B,r,n,s,t):b=new VNode(t,r,s,void 0,void 0,n)}else b=createComponent(t,r,n,s);return isArray(b)?b:isDef(b)?(isDef(o)&&applyNS(b,o),isDef(r)&&registerDeepBindings(r),b):createEmptyVNode()}function applyNS(n,t,r){if(n.ns=t,n.tag==="foreignObject"&&(t=void 0,r=!0),isDef(n.children))for(var s=0,l=n.children.length;s<l;s++){var b=n.children[s];isDef(b.tag)&&(isUndef(b.ns)||isTrue(r)&&b.tag!=="svg")&&applyNS(b,t,r)}}function registerDeepBindings(n){isObject$1(n.style)&&traverse(n.style),isObject$1(n.class)&&traverse(n.class)}function handleError(n,t,r){pushTarget();try{if(t)for(var s=t;s=s.$parent;){var l=s.$options.errorCaptured;if(l)for(var b=0;b<l.length;b++)try{var o=l[b].call(s,n,t,r)===!1;if(o)return}catch(B){globalHandleError(B,s,"errorCaptured hook")}}globalHandleError(n,t,r)}finally{popTarget()}}function invokeWithErrorHandling(n,t,r,s,l){var b;try{b=r?n.apply(t,r):n.call(t),b&&!b._isVue&&isPromise$1(b)&&!b._handled&&(b.catch(function(o){return handleError(o,s,l+" (Promise/async)")}),b._handled=!0)}catch(o){handleError(o,s,l)}return b}function globalHandleError(n,t,r){if(config.errorHandler)try{return config.errorHandler.call(null,n,t,r)}catch(s){s!==n&&logError(s)}logError(n)}function logError(n,t,r){if(inBrowser$1&&typeof console<"u")console.error(n);else throw n}var isUsingMicroTask=!1,callbacks=[],pending=!1;function flushCallbacks(){pending=!1;var n=callbacks.slice(0);callbacks.length=0;for(var t=0;t<n.length;t++)n[t]()}var timerFunc;if(typeof Promise<"u"&&isNative(Promise)){var p_1=Promise.resolve();timerFunc=function(){p_1.then(flushCallbacks),isIOS&&setTimeout(noop$1)},isUsingMicroTask=!0}else if(!isIE&&typeof MutationObserver<"u"&&(isNative(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")){var counter_1=1,observer=new MutationObserver(flushCallbacks),textNode_1=document.createTextNode(String(counter_1));observer.observe(textNode_1,{characterData:!0}),timerFunc=function(){counter_1=(counter_1+1)%2,textNode_1.data=String(counter_1)},isUsingMicroTask=!0}else typeof setImmediate<"u"&&isNative(setImmediate)?timerFunc=function(){setImmediate(flushCallbacks)}:timerFunc=function(){setTimeout(flushCallbacks,0)};function nextTick(n,t){var r;if(callbacks.push(function(){if(n)try{n.call(t)}catch(s){handleError(s,t,"nextTick")}else r&&r(t)}),pending||(pending=!0,timerFunc()),!n&&typeof Promise<"u")return new Promise(function(s){r=s})}var version="2.7.16",seenObjects=new _Set;function traverse(n){return _traverse(n,seenObjects),seenObjects.clear(),n}function _traverse(n,t){var r,s,l=isArray(n);if(!(!l&&!isObject$1(n)||n.__v_skip||Object.isFrozen(n)||n instanceof VNode)){if(n.__ob__){var b=n.__ob__.dep.id;if(t.has(b))return;t.add(b)}if(l)for(r=n.length;r--;)_traverse(n[r],t);else if(isRef(n))_traverse(n.value,t);else for(s=Object.keys(n),r=s.length;r--;)_traverse(n[s[r]],t)}}var uid$1=0,Watcher=function(){function n(t,r,s,l,b){recordEffectScope(this,activeEffectScope&&!activeEffectScope._vm?activeEffectScope:t?t._scope:void 0),(this.vm=t)&&b&&(t._watcher=this),l?(this.deep=!!l.deep,this.user=!!l.user,this.lazy=!!l.lazy,this.sync=!!l.sync,this.before=l.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=s,this.id=++uid$1,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new _Set,this.newDepIds=new _Set,this.expression="",isFunction(r)?this.getter=r:(this.getter=parsePath$1(r),this.getter||(this.getter=noop$1)),this.value=this.lazy?void 0:this.get()}return n.prototype.get=function(){pushTarget(this);var t,r=this.vm;try{t=this.getter.call(r,r)}catch(s){if(this.user)handleError(s,r,'getter for watcher "'.concat(this.expression,'"'));else throw s}finally{this.deep&&traverse(t),popTarget(),this.cleanupDeps()}return t},n.prototype.addDep=function(t){var r=t.id;this.newDepIds.has(r)||(this.newDepIds.add(r),this.newDeps.push(t),this.depIds.has(r)||t.addSub(this))},n.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var r=this.deps[t];this.newDepIds.has(r.id)||r.removeSub(this)}var s=this.depIds;this.depIds=this.newDepIds,this.newDepIds=s,this.newDepIds.clear(),s=this.deps,this.deps=this.newDeps,this.newDeps=s,this.newDeps.length=0},n.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():queueWatcher(this)},n.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||isObject$1(t)||this.deep){var r=this.value;if(this.value=t,this.user){var s='callback for watcher "'.concat(this.expression,'"');invokeWithErrorHandling(this.cb,this.vm,[t,r],this.vm,s)}else this.cb.call(this.vm,t,r)}}},n.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},n.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},n.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&remove$2(this.vm._scope.effects,this),this.active){for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},n}();function initEvents(n){n._events=Object.create(null),n._hasHookEvent=!1;var t=n.$options._parentListeners;t&&updateComponentListeners(n,t)}var target$1;function add$1(n,t){target$1.$on(n,t)}function remove$1(n,t){target$1.$off(n,t)}function createOnceHandler$1(n,t){var r=target$1;return function s(){var l=t.apply(null,arguments);l!==null&&r.$off(n,s)}}function updateComponentListeners(n,t,r){target$1=n,updateListeners(t,r||{},add$1,remove$1,createOnceHandler$1,n),target$1=void 0}function eventsMixin(n){var t=/^hook:/;n.prototype.$on=function(r,s){var l=this;if(isArray(r))for(var b=0,o=r.length;b<o;b++)l.$on(r[b],s);else(l._events[r]||(l._events[r]=[])).push(s),t.test(r)&&(l._hasHookEvent=!0);return l},n.prototype.$once=function(r,s){var l=this;function b(){l.$off(r,b),s.apply(l,arguments)}return b.fn=s,l.$on(r,b),l},n.prototype.$off=function(r,s){var l=this;if(!arguments.length)return l._events=Object.create(null),l;if(isArray(r)){for(var b=0,o=r.length;b<o;b++)l.$off(r[b],s);return l}var B=l._events[r];if(!B)return l;if(!s)return l._events[r]=null,l;for(var Qe,at=B.length;at--;)if(Qe=B[at],Qe===s||Qe.fn===s){B.splice(at,1);break}return l},n.prototype.$emit=function(r){var s=this,l=s._events[r];if(l){l=l.length>1?toArray(l):l;for(var b=toArray(arguments,1),o='event handler for "'.concat(r,'"'),B=0,Qe=l.length;B<Qe;B++)invokeWithErrorHandling(l[B],s,b,s,o)}return s}}var activeInstance=null;function setActiveInstance(n){var t=activeInstance;return activeInstance=n,function(){activeInstance=t}}function initLifecycle(n){var t=n.$options,r=t.parent;if(r&&!t.abstract){for(;r.$options.abstract&&r.$parent;)r=r.$parent;r.$children.push(n)}n.$parent=r,n.$root=r?r.$root:n,n.$children=[],n.$refs={},n._provided=r?r._provided:Object.create(null),n._watcher=null,n._inactive=null,n._directInactive=!1,n._isMounted=!1,n._isDestroyed=!1,n._isBeingDestroyed=!1}function lifecycleMixin(n){n.prototype._update=function(t,r){var s=this,l=s.$el,b=s._vnode,o=setActiveInstance(s);s._vnode=t,b?s.$el=s.__patch__(b,t):s.$el=s.__patch__(s.$el,t,r,!1),o(),l&&(l.__vue__=null),s.$el&&(s.$el.__vue__=s);for(var B=s;B&&B.$vnode&&B.$parent&&B.$vnode===B.$parent._vnode;)B.$parent.$el=B.$el,B=B.$parent},n.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},n.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){callHook$1(t,"beforeDestroy"),t._isBeingDestroyed=!0;var r=t.$parent;r&&!r._isBeingDestroyed&&!t.$options.abstract&&remove$2(r.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),callHook$1(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function mountComponent(n,t,r){n.$el=t,n.$options.render||(n.$options.render=createEmptyVNode),callHook$1(n,"beforeMount");var s;s=function(){n._update(n._render(),r)};var l={before:function(){n._isMounted&&!n._isDestroyed&&callHook$1(n,"beforeUpdate")}};new Watcher(n,s,noop$1,l,!0),r=!1;var b=n._preWatchers;if(b)for(var o=0;o<b.length;o++)b[o].run();return n.$vnode==null&&(n._isMounted=!0,callHook$1(n,"mounted")),n}function updateChildComponent(n,t,r,s,l){var b=s.data.scopedSlots,o=n.$scopedSlots,B=!!(b&&!b.$stable||o!==emptyObject&&!o.$stable||b&&n.$scopedSlots.$key!==b.$key||!b&&n.$scopedSlots.$key),Qe=!!(l||n.$options._renderChildren||B),at=n.$vnode;n.$options._parentVnode=s,n.$vnode=s,n._vnode&&(n._vnode.parent=s),n.$options._renderChildren=l;var ot=s.data.attrs||emptyObject;n._attrsProxy&&syncSetupProxy(n._attrsProxy,ot,at.data&&at.data.attrs||emptyObject,n,"$attrs")&&(Qe=!0),n.$attrs=ot,r=r||emptyObject;var ct=n.$options._parentListeners;if(n._listenersProxy&&syncSetupProxy(n._listenersProxy,r,ct||emptyObject,n,"$listeners"),n.$listeners=n.$options._parentListeners=r,updateComponentListeners(n,r,ct),t&&n.$options.props){toggleObserving(!1);for(var ut=n._props,lt=n.$options._propKeys||[],ea=0;ea<lt.length;ea++){var ta=lt[ea],ra=n.$options.props;ut[ta]=validateProp(ta,ra,t,n)}toggleObserving(!0),n.$options.propsData=t}Qe&&(n.$slots=resolveSlots(l,s.context),n.$forceUpdate())}function isInInactiveTree(n){for(;n&&(n=n.$parent);)if(n._inactive)return!0;return!1}function activateChildComponent(n,t){if(t){if(n._directInactive=!1,isInInactiveTree(n))return}else if(n._directInactive)return;if(n._inactive||n._inactive===null){n._inactive=!1;for(var r=0;r<n.$children.length;r++)activateChildComponent(n.$children[r]);callHook$1(n,"activated")}}function deactivateChildComponent(n,t){if(!(t&&(n._directInactive=!0,isInInactiveTree(n)))&&!n._inactive){n._inactive=!0;for(var r=0;r<n.$children.length;r++)deactivateChildComponent(n.$children[r]);callHook$1(n,"deactivated")}}function callHook$1(n,t,r,s){s===void 0&&(s=!0),pushTarget();var l=currentInstance,b=getCurrentScope();s&&setCurrentInstance(n);var o=n.$options[t],B="".concat(t," hook");if(o)for(var Qe=0,at=o.length;Qe<at;Qe++)invokeWithErrorHandling(o[Qe],n,null,n,B);n._hasHookEvent&&n.$emit("hook:"+t),s&&(setCurrentInstance(l),b&&b.on()),popTarget()}var queue=[],activatedChildren=[],has={},waiting=!1,flushing=!1,index$1=0;function resetSchedulerState(){index$1=queue.length=activatedChildren.length=0,has={},waiting=flushing=!1}var currentFlushTimestamp=0,getNow=Date.now;if(inBrowser$1&&!isIE){var performance_1=window.performance;performance_1&&typeof performance_1.now=="function"&&getNow()>document.createEvent("Event").timeStamp&&(getNow=function(){return performance_1.now()})}var sortCompareFn=function(n,t){if(n.post){if(!t.post)return 1}else if(t.post)return-1;return n.id-t.id};function flushSchedulerQueue(){currentFlushTimestamp=getNow(),flushing=!0;var n,t;for(queue.sort(sortCompareFn),index$1=0;index$1<queue.length;index$1++)n=queue[index$1],n.before&&n.before(),t=n.id,has[t]=null,n.run();var r=activatedChildren.slice(),s=queue.slice();resetSchedulerState(),callActivatedHooks(r),callUpdatedHooks(s),cleanupDeps(),devtools&&config.devtools&&devtools.emit("flush")}function callUpdatedHooks(n){for(var t=n.length;t--;){var r=n[t],s=r.vm;s&&s._watcher===r&&s._isMounted&&!s._isDestroyed&&callHook$1(s,"updated")}}function queueActivatedComponent(n){n._inactive=!1,activatedChildren.push(n)}function callActivatedHooks(n){for(var t=0;t<n.length;t++)n[t]._inactive=!0,activateChildComponent(n[t],!0)}function queueWatcher(n){var t=n.id;if(has[t]==null&&!(n===Dep.target&&n.noRecurse)){if(has[t]=!0,!flushing)queue.push(n);else{for(var r=queue.length-1;r>index$1&&queue[r].id>n.id;)r--;queue.splice(r+1,0,n)}waiting||(waiting=!0,nextTick(flushSchedulerQueue))}}function initProvide(n){var t=n.$options.provide;if(t){var r=isFunction(t)?t.call(n):t;if(!isObject$1(r))return;for(var s=resolveProvided(n),l=hasSymbol$1?Reflect.ownKeys(r):Object.keys(r),b=0;b<l.length;b++){var o=l[b];Object.defineProperty(s,o,Object.getOwnPropertyDescriptor(r,o))}}}function initInjections(n){var t=resolveInject(n.$options.inject,n);t&&(toggleObserving(!1),Object.keys(t).forEach(function(r){defineReactive(n,r,t[r])}),toggleObserving(!0))}function resolveInject(n,t){if(n){for(var r=Object.create(null),s=hasSymbol$1?Reflect.ownKeys(n):Object.keys(n),l=0;l<s.length;l++){var b=s[l];if(b!=="__ob__"){var o=n[b].from;if(o in t._provided)r[b]=t._provided[o];else if("default"in n[b]){var B=n[b].default;r[b]=isFunction(B)?B.call(t):B}}}return r}}function FunctionalRenderContext(n,t,r,s,l){var b=this,o=l.options,B;hasOwn(s,"_uid")?(B=Object.create(s),B._original=s):(B=s,s=s._original);var Qe=isTrue(o._compiled),at=!Qe;this.data=n,this.props=t,this.children=r,this.parent=s,this.listeners=n.on||emptyObject,this.injections=resolveInject(o.inject,s),this.slots=function(){return b.$slots||normalizeScopedSlots(s,n.scopedSlots,b.$slots=resolveSlots(r,s)),b.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return normalizeScopedSlots(s,n.scopedSlots,this.slots())}}),Qe&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=normalizeScopedSlots(s,n.scopedSlots,this.$slots)),o._scopeId?this._c=function(ot,ct,ut,lt){var ea=createElement$1(B,ot,ct,ut,lt,at);return ea&&!isArray(ea)&&(ea.fnScopeId=o._scopeId,ea.fnContext=s),ea}:this._c=function(ot,ct,ut,lt){return createElement$1(B,ot,ct,ut,lt,at)}}installRenderHelpers(FunctionalRenderContext.prototype);function createFunctionalComponent(n,t,r,s,l){var b=n.options,o={},B=b.props;if(isDef(B))for(var Qe in B)o[Qe]=validateProp(Qe,B,t||emptyObject);else isDef(r.attrs)&&mergeProps(o,r.attrs),isDef(r.props)&&mergeProps(o,r.props);var at=new FunctionalRenderContext(r,o,l,s,n),ot=b.render.call(null,at._c,at);if(ot instanceof VNode)return cloneAndMarkFunctionalResult(ot,r,at.parent,b);if(isArray(ot)){for(var ct=normalizeChildren(ot)||[],ut=new Array(ct.length),lt=0;lt<ct.length;lt++)ut[lt]=cloneAndMarkFunctionalResult(ct[lt],r,at.parent,b);return ut}}function cloneAndMarkFunctionalResult(n,t,r,s,l){var b=cloneVNode(n);return b.fnContext=r,b.fnOptions=s,t.slot&&((b.data||(b.data={})).slot=t.slot),b}function mergeProps(n,t){for(var r in t)n[camelize(r)]=t[r]}function getComponentName(n){return n.name||n.__name||n._componentTag}var componentVNodeHooks={init:function(n,t){if(n.componentInstance&&!n.componentInstance._isDestroyed&&n.data.keepAlive){var r=n;componentVNodeHooks.prepatch(r,r)}else{var s=n.componentInstance=createComponentInstanceForVnode(n,activeInstance);s.$mount(t?n.elm:void 0,t)}},prepatch:function(n,t){var r=t.componentOptions,s=t.componentInstance=n.componentInstance;updateChildComponent(s,r.propsData,r.listeners,t,r.children)},insert:function(n){var t=n.context,r=n.componentInstance;r._isMounted||(r._isMounted=!0,callHook$1(r,"mounted")),n.data.keepAlive&&(t._isMounted?queueActivatedComponent(r):activateChildComponent(r,!0))},destroy:function(n){var t=n.componentInstance;t._isDestroyed||(n.data.keepAlive?deactivateChildComponent(t,!0):t.$destroy())}},hooksToMerge=Object.keys(componentVNodeHooks);function createComponent(n,t,r,s,l){if(!isUndef(n)){var b=r.$options._base;if(isObject$1(n)&&(n=b.extend(n)),typeof n=="function"){var o;if(isUndef(n.cid)&&(o=n,n=resolveAsyncComponent(o,b),n===void 0))return createAsyncPlaceholder(o,t,r,s,l);t=t||{},resolveConstructorOptions(n),isDef(t.model)&&transformModel(n.options,t);var B=extractPropsFromVNodeData(t,n);if(isTrue(n.options.functional))return createFunctionalComponent(n,B,t,r,s);var Qe=t.on;if(t.on=t.nativeOn,isTrue(n.options.abstract)){var at=t.slot;t={},at&&(t.slot=at)}installComponentHooks(t);var ot=getComponentName(n.options)||l,ct=new VNode("vue-component-".concat(n.cid).concat(ot?"-".concat(ot):""),t,void 0,void 0,void 0,r,{Ctor:n,propsData:B,listeners:Qe,tag:l,children:s},o);return ct}}}function createComponentInstanceForVnode(n,t){var r={_isComponent:!0,_parentVnode:n,parent:t},s=n.data.inlineTemplate;return isDef(s)&&(r.render=s.render,r.staticRenderFns=s.staticRenderFns),new n.componentOptions.Ctor(r)}function installComponentHooks(n){for(var t=n.hook||(n.hook={}),r=0;r<hooksToMerge.length;r++){var s=hooksToMerge[r],l=t[s],b=componentVNodeHooks[s];l!==b&&!(l&&l._merged)&&(t[s]=l?mergeHook(b,l):b)}}function mergeHook(n,t){var r=function(s,l){n(s,l),t(s,l)};return r._merged=!0,r}function transformModel(n,t){var r=n.model&&n.model.prop||"value",s=n.model&&n.model.event||"input";(t.attrs||(t.attrs={}))[r]=t.model.value;var l=t.on||(t.on={}),b=l[s],o=t.model.callback;isDef(b)?(isArray(b)?b.indexOf(o)===-1:b!==o)&&(l[s]=[o].concat(b)):l[s]=o}var warn=noop$1,strats=config.optionMergeStrategies;function mergeData(n,t,r){if(r===void 0&&(r=!0),!t)return n;for(var s,l,b,o=hasSymbol$1?Reflect.ownKeys(t):Object.keys(t),B=0;B<o.length;B++)s=o[B],s!=="__ob__"&&(l=n[s],b=t[s],!r||!hasOwn(n,s)?set(n,s,b):l!==b&&isPlainObject(l)&&isPlainObject(b)&&mergeData(l,b));return n}function mergeDataOrFn(n,t,r){return r?function(){var l=isFunction(t)?t.call(r,r):t,b=isFunction(n)?n.call(r,r):n;return l?mergeData(l,b):b}:t?n?function(){return mergeData(isFunction(t)?t.call(this,this):t,isFunction(n)?n.call(this,this):n)}:t:n}strats.data=function(n,t,r){return r?mergeDataOrFn(n,t,r):t&&typeof t!="function"?n:mergeDataOrFn(n,t)};function mergeLifecycleHook(n,t){var r=t?n?n.concat(t):isArray(t)?t:[t]:n;return r&&dedupeHooks(r)}function dedupeHooks(n){for(var t=[],r=0;r<n.length;r++)t.indexOf(n[r])===-1&&t.push(n[r]);return t}LIFECYCLE_HOOKS.forEach(function(n){strats[n]=mergeLifecycleHook});function mergeAssets(n,t,r,s){var l=Object.create(n||null);return t?extend$1(l,t):l}ASSET_TYPES.forEach(function(n){strats[n+"s"]=mergeAssets});strats.watch=function(n,t,r,s){if(n===nativeWatch&&(n=void 0),t===nativeWatch&&(t=void 0),!t)return Object.create(n||null);if(!n)return t;var l={};extend$1(l,n);for(var b in t){var o=l[b],B=t[b];o&&!isArray(o)&&(o=[o]),l[b]=o?o.concat(B):isArray(B)?B:[B]}return l};strats.props=strats.methods=strats.inject=strats.computed=function(n,t,r,s){if(!n)return t;var l=Object.create(null);return extend$1(l,n),t&&extend$1(l,t),l};strats.provide=function(n,t){return n?function(){var r=Object.create(null);return mergeData(r,isFunction(n)?n.call(this):n),t&&mergeData(r,isFunction(t)?t.call(this):t,!1),r}:t};var defaultStrat=function(n,t){return t===void 0?n:t};function normalizeProps(n,t){var r=n.props;if(r){var s={},l,b,o;if(isArray(r))for(l=r.length;l--;)b=r[l],typeof b=="string"&&(o=camelize(b),s[o]={type:null});else if(isPlainObject(r))for(var B in r)b=r[B],o=camelize(B),s[o]=isPlainObject(b)?b:{type:b};n.props=s}}function normalizeInject(n,t){var r=n.inject;if(r){var s=n.inject={};if(isArray(r))for(var l=0;l<r.length;l++)s[r[l]]={from:r[l]};else if(isPlainObject(r))for(var b in r){var o=r[b];s[b]=isPlainObject(o)?extend$1({from:b},o):{from:o}}}}function normalizeDirectives$1(n){var t=n.directives;if(t)for(var r in t){var s=t[r];isFunction(s)&&(t[r]={bind:s,update:s})}}function mergeOptions(n,t,r){if(isFunction(t)&&(t=t.options),normalizeProps(t),normalizeInject(t),normalizeDirectives$1(t),!t._base&&(t.extends&&(n=mergeOptions(n,t.extends,r)),t.mixins))for(var s=0,l=t.mixins.length;s<l;s++)n=mergeOptions(n,t.mixins[s],r);var b={},o;for(o in n)B(o);for(o in t)hasOwn(n,o)||B(o);function B(Qe){var at=strats[Qe]||defaultStrat;b[Qe]=at(n[Qe],t[Qe],r,Qe)}return b}function resolveAsset(n,t,r,s){if(typeof r=="string"){var l=n[t];if(hasOwn(l,r))return l[r];var b=camelize(r);if(hasOwn(l,b))return l[b];var o=capitalize(b);if(hasOwn(l,o))return l[o];var B=l[r]||l[b]||l[o];return B}}function validateProp(n,t,r,s){var l=t[n],b=!hasOwn(r,n),o=r[n],B=getTypeIndex(Boolean,l.type);if(B>-1){if(b&&!hasOwn(l,"default"))o=!1;else if(o===""||o===hyphenate(n)){var Qe=getTypeIndex(String,l.type);(Qe<0||B<Qe)&&(o=!0)}}if(o===void 0){o=getPropDefaultValue(s,l,n);var at=shouldObserve;toggleObserving(!0),observe(o),toggleObserving(at)}return o}function getPropDefaultValue(n,t,r){if(hasOwn(t,"default")){var s=t.default;return n&&n.$options.propsData&&n.$options.propsData[r]===void 0&&n._props[r]!==void 0?n._props[r]:isFunction(s)&&getType(t.type)!=="Function"?s.call(n):s}}var functionTypeCheckRE=/^\s*function (\w+)/;function getType(n){var t=n&&n.toString().match(functionTypeCheckRE);return t?t[1]:""}function isSameType(n,t){return getType(n)===getType(t)}function getTypeIndex(n,t){if(!isArray(t))return isSameType(t,n)?0:-1;for(var r=0,s=t.length;r<s;r++)if(isSameType(t[r],n))return r;return-1}var sharedPropertyDefinition={enumerable:!0,configurable:!0,get:noop$1,set:noop$1};function proxy(n,t,r){sharedPropertyDefinition.get=function(){return this[t][r]},sharedPropertyDefinition.set=function(l){this[t][r]=l},Object.defineProperty(n,r,sharedPropertyDefinition)}function initState(n){var t=n.$options;if(t.props&&initProps$1(n,t.props),initSetup(n),t.methods&&initMethods(n,t.methods),t.data)initData(n);else{var r=observe(n._data={});r&&r.vmCount++}t.computed&&initComputed$1(n,t.computed),t.watch&&t.watch!==nativeWatch&&initWatch(n,t.watch)}function initProps$1(n,t){var r=n.$options.propsData||{},s=n._props=shallowReactive({}),l=n.$options._propKeys=[],b=!n.$parent;b||toggleObserving(!1);var o=function(Qe){l.push(Qe);var at=validateProp(Qe,t,r,n);defineReactive(s,Qe,at,void 0,!0),Qe in n||proxy(n,"_props",Qe)};for(var B in t)o(B);toggleObserving(!0)}function initData(n){var t=n.$options.data;t=n._data=isFunction(t)?getData(t,n):t||{},isPlainObject(t)||(t={});var r=Object.keys(t),s=n.$options.props;n.$options.methods;for(var l=r.length;l--;){var b=r[l];s&&hasOwn(s,b)||isReserved(b)||proxy(n,"_data",b)}var o=observe(t);o&&o.vmCount++}function getData(n,t){pushTarget();try{return n.call(t,t)}catch(r){return handleError(r,t,"data()"),{}}finally{popTarget()}}var computedWatcherOptions={lazy:!0};function initComputed$1(n,t){var r=n._computedWatchers=Object.create(null),s=isServerRendering();for(var l in t){var b=t[l],o=isFunction(b)?b:b.get;s||(r[l]=new Watcher(n,o||noop$1,noop$1,computedWatcherOptions)),l in n||defineComputed(n,l,b)}}function defineComputed(n,t,r){var s=!isServerRendering();isFunction(r)?(sharedPropertyDefinition.get=s?createComputedGetter(t):createGetterInvoker(r),sharedPropertyDefinition.set=noop$1):(sharedPropertyDefinition.get=r.get?s&&r.cache!==!1?createComputedGetter(t):createGetterInvoker(r.get):noop$1,sharedPropertyDefinition.set=r.set||noop$1),Object.defineProperty(n,t,sharedPropertyDefinition)}function createComputedGetter(n){return function(){var r=this._computedWatchers&&this._computedWatchers[n];if(r)return r.dirty&&r.evaluate(),Dep.target&&r.depend(),r.value}}function createGetterInvoker(n){return function(){return n.call(this,this)}}function initMethods(n,t){n.$options.props;for(var r in t)n[r]=typeof t[r]!="function"?noop$1:bind(t[r],n)}function initWatch(n,t){for(var r in t){var s=t[r];if(isArray(s))for(var l=0;l<s.length;l++)createWatcher(n,r,s[l]);else createWatcher(n,r,s)}}function createWatcher(n,t,r,s){return isPlainObject(r)&&(s=r,r=r.handler),typeof r=="string"&&(r=n[r]),n.$watch(t,r,s)}function stateMixin(n){var t={};t.get=function(){return this._data};var r={};r.get=function(){return this._props},Object.defineProperty(n.prototype,"$data",t),Object.defineProperty(n.prototype,"$props",r),n.prototype.$set=set,n.prototype.$delete=del,n.prototype.$watch=function(s,l,b){var o=this;if(isPlainObject(l))return createWatcher(o,s,l,b);b=b||{},b.user=!0;var B=new Watcher(o,s,l,b);if(b.immediate){var Qe='callback for immediate watcher "'.concat(B.expression,'"');pushTarget(),invokeWithErrorHandling(l,o,[B.value],o,Qe),popTarget()}return function(){B.teardown()}}}var uid=0;function initMixin$1(n){n.prototype._init=function(t){var r=this;r._uid=uid++,r._isVue=!0,r.__v_skip=!0,r._scope=new EffectScope(!0),r._scope.parent=void 0,r._scope._vm=!0,t&&t._isComponent?initInternalComponent(r,t):r.$options=mergeOptions(resolveConstructorOptions(r.constructor),t||{},r),r._renderProxy=r,r._self=r,initLifecycle(r),initEvents(r),initRender(r),callHook$1(r,"beforeCreate",void 0,!1),initInjections(r),initState(r),initProvide(r),callHook$1(r,"created"),r.$options.el&&r.$mount(r.$options.el)}}function initInternalComponent(n,t){var r=n.$options=Object.create(n.constructor.options),s=t._parentVnode;r.parent=t.parent,r._parentVnode=s;var l=s.componentOptions;r.propsData=l.propsData,r._parentListeners=l.listeners,r._renderChildren=l.children,r._componentTag=l.tag,t.render&&(r.render=t.render,r.staticRenderFns=t.staticRenderFns)}function resolveConstructorOptions(n){var t=n.options;if(n.super){var r=resolveConstructorOptions(n.super),s=n.superOptions;if(r!==s){n.superOptions=r;var l=resolveModifiedOptions(n);l&&extend$1(n.extendOptions,l),t=n.options=mergeOptions(r,n.extendOptions),t.name&&(t.components[t.name]=n)}}return t}function resolveModifiedOptions(n){var t,r=n.options,s=n.sealedOptions;for(var l in r)r[l]!==s[l]&&(t||(t={}),t[l]=r[l]);return t}function Vue$1(n){this._init(n)}initMixin$1(Vue$1);stateMixin(Vue$1);eventsMixin(Vue$1);lifecycleMixin(Vue$1);renderMixin(Vue$1);function initUse(n){n.use=function(t){var r=this._installedPlugins||(this._installedPlugins=[]);if(r.indexOf(t)>-1)return this;var s=toArray(arguments,1);return s.unshift(this),isFunction(t.install)?t.install.apply(t,s):isFunction(t)&&t.apply(null,s),r.push(t),this}}function initMixin(n){n.mixin=function(t){return this.options=mergeOptions(this.options,t),this}}function initExtend(n){n.cid=0;var t=1;n.extend=function(r){r=r||{};var s=this,l=s.cid,b=r._Ctor||(r._Ctor={});if(b[l])return b[l];var o=getComponentName(r)||getComponentName(s.options),B=function(at){this._init(at)};return B.prototype=Object.create(s.prototype),B.prototype.constructor=B,B.cid=t++,B.options=mergeOptions(s.options,r),B.super=s,B.options.props&&initProps(B),B.options.computed&&initComputed(B),B.extend=s.extend,B.mixin=s.mixin,B.use=s.use,ASSET_TYPES.forEach(function(Qe){B[Qe]=s[Qe]}),o&&(B.options.components[o]=B),B.superOptions=s.options,B.extendOptions=r,B.sealedOptions=extend$1({},B.options),b[l]=B,B}}function initProps(n){var t=n.options.props;for(var r in t)proxy(n.prototype,"_props",r)}function initComputed(n){var t=n.options.computed;for(var r in t)defineComputed(n.prototype,r,t[r])}function initAssetRegisters(n){ASSET_TYPES.forEach(function(t){n[t]=function(r,s){return s?(t==="component"&&isPlainObject(s)&&(s.name=s.name||r,s=this.options._base.extend(s)),t==="directive"&&isFunction(s)&&(s={bind:s,update:s}),this.options[t+"s"][r]=s,s):this.options[t+"s"][r]}})}function _getComponentName(n){return n&&(getComponentName(n.Ctor.options)||n.tag)}function matches(n,t){return isArray(n)?n.indexOf(t)>-1:typeof n=="string"?n.split(",").indexOf(t)>-1:isRegExp(n)?n.test(t):!1}function pruneCache(n,t){var r=n.cache,s=n.keys,l=n._vnode,b=n.$vnode;for(var o in r){var B=r[o];if(B){var Qe=B.name;Qe&&!t(Qe)&&pruneCacheEntry(r,o,s,l)}}b.componentOptions.children=void 0}function pruneCacheEntry(n,t,r,s){var l=n[t];l&&(!s||l.tag!==s.tag)&&l.componentInstance.$destroy(),n[t]=null,remove$2(r,t)}var patternTypes=[String,RegExp,Array],KeepAlive={name:"keep-alive",abstract:!0,props:{include:patternTypes,exclude:patternTypes,max:[String,Number]},methods:{cacheVNode:function(){var n=this,t=n.cache,r=n.keys,s=n.vnodeToCache,l=n.keyToCache;if(s){var b=s.tag,o=s.componentInstance,B=s.componentOptions;t[l]={name:_getComponentName(B),tag:b,componentInstance:o},r.push(l),this.max&&r.length>parseInt(this.max)&&pruneCacheEntry(t,r[0],r,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var n in this.cache)pruneCacheEntry(this.cache,n,this.keys)},mounted:function(){var n=this;this.cacheVNode(),this.$watch("include",function(t){pruneCache(n,function(r){return matches(t,r)})}),this.$watch("exclude",function(t){pruneCache(n,function(r){return!matches(t,r)})})},updated:function(){this.cacheVNode()},render:function(){var n=this.$slots.default,t=getFirstComponentChild(n),r=t&&t.componentOptions;if(r){var s=_getComponentName(r),l=this,b=l.include,o=l.exclude;if(b&&(!s||!matches(b,s))||o&&s&&matches(o,s))return t;var B=this,Qe=B.cache,at=B.keys,ot=t.key==null?r.Ctor.cid+(r.tag?"::".concat(r.tag):""):t.key;Qe[ot]?(t.componentInstance=Qe[ot].componentInstance,remove$2(at,ot),at.push(ot)):(this.vnodeToCache=t,this.keyToCache=ot),t.data.keepAlive=!0}return t||n&&n[0]}},builtInComponents={KeepAlive};function initGlobalAPI(n){var t={};t.get=function(){return config},Object.defineProperty(n,"config",t),n.util={warn,extend:extend$1,mergeOptions,defineReactive},n.set=set,n.delete=del,n.nextTick=nextTick,n.observable=function(r){return observe(r),r},n.options=Object.create(null),ASSET_TYPES.forEach(function(r){n.options[r+"s"]=Object.create(null)}),n.options._base=n,extend$1(n.options.components,builtInComponents),initUse(n),initMixin(n),initExtend(n),initAssetRegisters(n)}initGlobalAPI(Vue$1);Object.defineProperty(Vue$1.prototype,"$isServer",{get:isServerRendering});Object.defineProperty(Vue$1.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(Vue$1,"FunctionalRenderContext",{value:FunctionalRenderContext});Vue$1.version=version;var isReservedAttr=makeMap("style,class"),acceptValue=makeMap("input,textarea,option,select,progress"),mustUseProp=function(n,t,r){return r==="value"&&acceptValue(n)&&t!=="button"||r==="selected"&&n==="option"||r==="checked"&&n==="input"||r==="muted"&&n==="video"},isEnumeratedAttr=makeMap("contenteditable,draggable,spellcheck"),isValidContentEditableValue=makeMap("events,caret,typing,plaintext-only"),convertEnumeratedValue=function(n,t){return isFalsyAttrValue(t)||t==="false"?"false":n==="contenteditable"&&isValidContentEditableValue(t)?t:"true"},isBooleanAttr=makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),xlinkNS="http://www.w3.org/1999/xlink",isXlink=function(n){return n.charAt(5)===":"&&n.slice(0,5)==="xlink"},getXlinkProp=function(n){return isXlink(n)?n.slice(6,n.length):""},isFalsyAttrValue=function(n){return n==null||n===!1};function genClassForVnode(n){for(var t=n.data,r=n,s=n;isDef(s.componentInstance);)s=s.componentInstance._vnode,s&&s.data&&(t=mergeClassData(s.data,t));for(;isDef(r=r.parent);)r&&r.data&&(t=mergeClassData(t,r.data));return renderClass(t.staticClass,t.class)}function mergeClassData(n,t){return{staticClass:concat(n.staticClass,t.staticClass),class:isDef(n.class)?[n.class,t.class]:t.class}}function renderClass(n,t){return isDef(n)||isDef(t)?concat(n,stringifyClass(t)):""}function concat(n,t){return n?t?n+" "+t:n:t||""}function stringifyClass(n){return Array.isArray(n)?stringifyArray(n):isObject$1(n)?stringifyObject(n):typeof n=="string"?n:""}function stringifyArray(n){for(var t="",r,s=0,l=n.length;s<l;s++)isDef(r=stringifyClass(n[s]))&&r!==""&&(t&&(t+=" "),t+=r);return t}function stringifyObject(n){var t="";for(var r in n)n[r]&&(t&&(t+=" "),t+=r);return t}var namespaceMap={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},isHTMLTag=makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),isSVG=makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),isReservedTag=function(n){return isHTMLTag(n)||isSVG(n)};function getTagNamespace(n){if(isSVG(n))return"svg";if(n==="math")return"math"}var unknownElementCache=Object.create(null);function isUnknownElement(n){if(!inBrowser$1)return!0;if(isReservedTag(n))return!1;if(n=n.toLowerCase(),unknownElementCache[n]!=null)return unknownElementCache[n];var t=document.createElement(n);return n.indexOf("-")>-1?unknownElementCache[n]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:unknownElementCache[n]=/HTMLUnknownElement/.test(t.toString())}var isTextInputType=makeMap("text,number,password,search,email,tel,url");function query(n){if(typeof n=="string"){var t=document.querySelector(n);return t||document.createElement("div")}else return n}function createElement(n,t){var r=document.createElement(n);return n!=="select"||t.data&&t.data.attrs&&t.data.attrs.multiple!==void 0&&r.setAttribute("multiple","multiple"),r}function createElementNS(n,t){return document.createElementNS(namespaceMap[n],t)}function createTextNode(n){return document.createTextNode(n)}function createComment(n){return document.createComment(n)}function insertBefore(n,t,r){n.insertBefore(t,r)}function removeChild(n,t){n.removeChild(t)}function appendChild(n,t){n.appendChild(t)}function parentNode(n){return n.parentNode}function nextSibling(n){return n.nextSibling}function tagName(n){return n.tagName}function setTextContent(n,t){n.textContent=t}function setStyleScope(n,t){n.setAttribute(t,"")}var nodeOps=Object.freeze({__proto__:null,createElement,createElementNS,createTextNode,createComment,insertBefore,removeChild,appendChild,parentNode,nextSibling,tagName,setTextContent,setStyleScope}),ref={create:function(n,t){registerRef(t)},update:function(n,t){n.data.ref!==t.data.ref&&(registerRef(n,!0),registerRef(t))},destroy:function(n){registerRef(n,!0)}};function registerRef(n,t){var r=n.data.ref;if(isDef(r)){var s=n.context,l=n.componentInstance||n.elm,b=t?null:l,o=t?void 0:l;if(isFunction(r)){invokeWithErrorHandling(r,s,[b],s,"template ref function");return}var B=n.data.refInFor,Qe=typeof r=="string"||typeof r=="number",at=isRef(r),ot=s.$refs;if(Qe||at){if(B){var ct=Qe?ot[r]:r.value;t?isArray(ct)&&remove$2(ct,l):isArray(ct)?ct.includes(l)||ct.push(l):Qe?(ot[r]=[l],setSetupRef(s,r,ot[r])):r.value=[l]}else if(Qe){if(t&&ot[r]!==l)return;ot[r]=o,setSetupRef(s,r,b)}else if(at){if(t&&r.value!==l)return;r.value=b}}}}function setSetupRef(n,t,r){var s=n._setupState;s&&hasOwn(s,t)&&(isRef(s[t])?s[t].value=r:s[t]=r)}var emptyNode=new VNode("",{},[]),hooks=["create","activate","update","remove","destroy"];function sameVnode(n,t){return n.key===t.key&&n.asyncFactory===t.asyncFactory&&(n.tag===t.tag&&n.isComment===t.isComment&&isDef(n.data)===isDef(t.data)&&sameInputType(n,t)||isTrue(n.isAsyncPlaceholder)&&isUndef(t.asyncFactory.error))}function sameInputType(n,t){if(n.tag!=="input")return!0;var r,s=isDef(r=n.data)&&isDef(r=r.attrs)&&r.type,l=isDef(r=t.data)&&isDef(r=r.attrs)&&r.type;return s===l||isTextInputType(s)&&isTextInputType(l)}function createKeyToOldIdx(n,t,r){var s,l,b={};for(s=t;s<=r;++s)l=n[s].key,isDef(l)&&(b[l]=s);return b}function createPatchFunction(n){var t,r,s={},l=n.modules,b=n.nodeOps;for(t=0;t<hooks.length;++t)for(s[hooks[t]]=[],r=0;r<l.length;++r)isDef(l[r][hooks[t]])&&s[hooks[t]].push(l[r][hooks[t]]);function o(fa){return new VNode(b.tagName(fa).toLowerCase(),{},[],void 0,fa)}function B(fa,va){function ka(){--ka.listeners===0&&Qe(fa)}return ka.listeners=va,ka}function Qe(fa){var va=b.parentNode(fa);isDef(va)&&b.removeChild(va,fa)}function at(fa,va,ka,Ra,qa,ha,ja){if(isDef(fa.elm)&&isDef(ha)&&(fa=ha[ja]=cloneVNode(fa)),fa.isRootInsert=!qa,!ot(fa,va,ka,Ra)){var Pa=fa.data,Ba=fa.children,Oa=fa.tag;isDef(Oa)?(fa.elm=fa.ns?b.createElementNS(fa.ns,Oa):b.createElement(Oa,fa),aa(fa),ea(fa,Ba,va),isDef(Pa)&&ra(fa,va),lt(ka,fa.elm,Ra)):isTrue(fa.isComment)?(fa.elm=b.createComment(fa.text),lt(ka,fa.elm,Ra)):(fa.elm=b.createTextNode(fa.text),lt(ka,fa.elm,Ra))}}function ot(fa,va,ka,Ra){var qa=fa.data;if(isDef(qa)){var ha=isDef(fa.componentInstance)&&qa.keepAlive;if(isDef(qa=qa.hook)&&isDef(qa=qa.init)&&qa(fa,!1),isDef(fa.componentInstance))return ct(fa,va),lt(ka,fa.elm,Ra),isTrue(ha)&&ut(fa,va,ka,Ra),!0}}function ct(fa,va){isDef(fa.data.pendingInsert)&&(va.push.apply(va,fa.data.pendingInsert),fa.data.pendingInsert=null),fa.elm=fa.componentInstance.$el,ta(fa)?(ra(fa,va),aa(fa)):(registerRef(fa),va.push(fa))}function ut(fa,va,ka,Ra){for(var qa,ha=fa;ha.componentInstance;)if(ha=ha.componentInstance._vnode,isDef(qa=ha.data)&&isDef(qa=qa.transition)){for(qa=0;qa<s.activate.length;++qa)s.activate[qa](emptyNode,ha);va.push(ha);break}lt(ka,fa.elm,Ra)}function lt(fa,va,ka){isDef(fa)&&(isDef(ka)?b.parentNode(ka)===fa&&b.insertBefore(fa,va,ka):b.appendChild(fa,va))}function ea(fa,va,ka){if(isArray(va))for(var Ra=0;Ra<va.length;++Ra)at(va[Ra],ka,fa.elm,null,!0,va,Ra);else isPrimitive(fa.text)&&b.appendChild(fa.elm,b.createTextNode(String(fa.text)))}function ta(fa){for(;fa.componentInstance;)fa=fa.componentInstance._vnode;return isDef(fa.tag)}function ra(fa,va){for(var ka=0;ka<s.create.length;++ka)s.create[ka](emptyNode,fa);t=fa.data.hook,isDef(t)&&(isDef(t.create)&&t.create(emptyNode,fa),isDef(t.insert)&&va.push(fa))}function aa(fa){var va;if(isDef(va=fa.fnScopeId))b.setStyleScope(fa.elm,va);else for(var ka=fa;ka;)isDef(va=ka.context)&&isDef(va=va.$options._scopeId)&&b.setStyleScope(fa.elm,va),ka=ka.parent;isDef(va=activeInstance)&&va!==fa.context&&va!==fa.fnContext&&isDef(va=va.$options._scopeId)&&b.setStyleScope(fa.elm,va)}function ia(fa,va,ka,Ra,qa,ha){for(;Ra<=qa;++Ra)at(ka[Ra],ha,fa,va,!1,ka,Ra)}function la(fa){var va,ka,Ra=fa.data;if(isDef(Ra))for(isDef(va=Ra.hook)&&isDef(va=va.destroy)&&va(fa),va=0;va<s.destroy.length;++va)s.destroy[va](fa);if(isDef(va=fa.children))for(ka=0;ka<fa.children.length;++ka)la(fa.children[ka])}function ba(fa,va,ka){for(;va<=ka;++va){var Ra=fa[va];isDef(Ra)&&(isDef(Ra.tag)?(_a(Ra),la(Ra)):Qe(Ra.elm))}}function _a(fa,va){if(isDef(va)||isDef(fa.data)){var ka,Ra=s.remove.length+1;for(isDef(va)?va.listeners+=Ra:va=B(fa.elm,Ra),isDef(ka=fa.componentInstance)&&isDef(ka=ka._vnode)&&isDef(ka.data)&&_a(ka,va),ka=0;ka<s.remove.length;++ka)s.remove[ka](fa,va);isDef(ka=fa.data.hook)&&isDef(ka=ka.remove)?ka(fa,va):va()}else Qe(fa.elm)}function sa(fa,va,ka,Ra,qa){for(var ha=0,ja=0,Pa=va.length-1,Ba=va[0],Oa=va[Pa],Ea=ka.length-1,da=ka[0],xa=ka[Ea],Sa,Ha,ir,vr,xr=!qa;ha<=Pa&&ja<=Ea;)isUndef(Ba)?Ba=va[++ha]:isUndef(Oa)?Oa=va[--Pa]:sameVnode(Ba,da)?(ma(Ba,da,Ra,ka,ja),Ba=va[++ha],da=ka[++ja]):sameVnode(Oa,xa)?(ma(Oa,xa,Ra,ka,Ea),Oa=va[--Pa],xa=ka[--Ea]):sameVnode(Ba,xa)?(ma(Ba,xa,Ra,ka,Ea),xr&&b.insertBefore(fa,Ba.elm,b.nextSibling(Oa.elm)),Ba=va[++ha],xa=ka[--Ea]):sameVnode(Oa,da)?(ma(Oa,da,Ra,ka,ja),xr&&b.insertBefore(fa,Oa.elm,Ba.elm),Oa=va[--Pa],da=ka[++ja]):(isUndef(Sa)&&(Sa=createKeyToOldIdx(va,ha,Pa)),Ha=isDef(da.key)?Sa[da.key]:ua(da,va,ha,Pa),isUndef(Ha)?at(da,Ra,fa,Ba.elm,!1,ka,ja):(ir=va[Ha],sameVnode(ir,da)?(ma(ir,da,Ra,ka,ja),va[Ha]=void 0,xr&&b.insertBefore(fa,ir.elm,Ba.elm)):at(da,Ra,fa,Ba.elm,!1,ka,ja)),da=ka[++ja]);ha>Pa?(vr=isUndef(ka[Ea+1])?null:ka[Ea+1].elm,ia(fa,vr,ka,ja,Ea,Ra)):ja>Ea&&ba(va,ha,Pa)}function ua(fa,va,ka,Ra){for(var qa=ka;qa<Ra;qa++){var ha=va[qa];if(isDef(ha)&&sameVnode(fa,ha))return qa}}function ma(fa,va,ka,Ra,qa,ha){if(fa!==va){isDef(va.elm)&&isDef(Ra)&&(va=Ra[qa]=cloneVNode(va));var ja=va.elm=fa.elm;if(isTrue(fa.isAsyncPlaceholder)){isDef(va.asyncFactory.resolved)?Ma(fa.elm,va,ka):va.isAsyncPlaceholder=!0;return}if(isTrue(va.isStatic)&&isTrue(fa.isStatic)&&va.key===fa.key&&(isTrue(va.isCloned)||isTrue(va.isOnce))){va.componentInstance=fa.componentInstance;return}var Pa,Ba=va.data;isDef(Ba)&&isDef(Pa=Ba.hook)&&isDef(Pa=Pa.prepatch)&&Pa(fa,va);var Oa=fa.children,Ea=va.children;if(isDef(Ba)&&ta(va)){for(Pa=0;Pa<s.update.length;++Pa)s.update[Pa](fa,va);isDef(Pa=Ba.hook)&&isDef(Pa=Pa.update)&&Pa(fa,va)}isUndef(va.text)?isDef(Oa)&&isDef(Ea)?Oa!==Ea&&sa(ja,Oa,Ea,ka,ha):isDef(Ea)?(isDef(fa.text)&&b.setTextContent(ja,""),ia(ja,null,Ea,0,Ea.length-1,ka)):isDef(Oa)?ba(Oa,0,Oa.length-1):isDef(fa.text)&&b.setTextContent(ja,""):fa.text!==va.text&&b.setTextContent(ja,va.text),isDef(Ba)&&isDef(Pa=Ba.hook)&&isDef(Pa=Pa.postpatch)&&Pa(fa,va)}}function $a(fa,va,ka){if(isTrue(ka)&&isDef(fa.parent))fa.parent.data.pendingInsert=va;else for(var Ra=0;Ra<va.length;++Ra)va[Ra].data.hook.insert(va[Ra])}var Da=makeMap("attrs,class,staticClass,staticStyle,key");function Ma(fa,va,ka,Ra){var qa,ha=va.tag,ja=va.data,Pa=va.children;if(Ra=Ra||ja&&ja.pre,va.elm=fa,isTrue(va.isComment)&&isDef(va.asyncFactory))return va.isAsyncPlaceholder=!0,!0;if(isDef(ja)&&(isDef(qa=ja.hook)&&isDef(qa=qa.init)&&qa(va,!0),isDef(qa=va.componentInstance)))return ct(va,ka),!0;if(isDef(ha)){if(isDef(Pa))if(!fa.hasChildNodes())ea(va,Pa,ka);else if(isDef(qa=ja)&&isDef(qa=qa.domProps)&&isDef(qa=qa.innerHTML)){if(qa!==fa.innerHTML)return!1}else{for(var Ba=!0,Oa=fa.firstChild,Ea=0;Ea<Pa.length;Ea++){if(!Oa||!Ma(Oa,Pa[Ea],ka,Ra)){Ba=!1;break}Oa=Oa.nextSibling}if(!Ba||Oa)return!1}if(isDef(ja)){var da=!1;for(var xa in ja)if(!Da(xa)){da=!0,ra(va,ka);break}!da&&ja.class&&traverse(ja.class)}}else fa.data!==va.text&&(fa.data=va.text);return!0}return function(va,ka,Ra,qa){if(isUndef(ka)){isDef(va)&&la(va);return}var ha=!1,ja=[];if(isUndef(va))ha=!0,at(ka,ja);else{var Pa=isDef(va.nodeType);if(!Pa&&sameVnode(va,ka))ma(va,ka,ja,null,null,qa);else{if(Pa){if(va.nodeType===1&&va.hasAttribute(SSR_ATTR)&&(va.removeAttribute(SSR_ATTR),Ra=!0),isTrue(Ra)&&Ma(va,ka,ja))return $a(ka,ja,!0),va;va=o(va)}var Ba=va.elm,Oa=b.parentNode(Ba);if(at(ka,ja,Ba._leaveCb?null:Oa,b.nextSibling(Ba)),isDef(ka.parent))for(var Ea=ka.parent,da=ta(ka);Ea;){for(var xa=0;xa<s.destroy.length;++xa)s.destroy[xa](Ea);if(Ea.elm=ka.elm,da){for(var Sa=0;Sa<s.create.length;++Sa)s.create[Sa](emptyNode,Ea);var Ha=Ea.data.hook.insert;if(Ha.merged)for(var ir=Ha.fns.slice(1),vr=0;vr<ir.length;vr++)ir[vr]()}else registerRef(Ea);Ea=Ea.parent}isDef(Oa)?ba([va],0,0):isDef(va.tag)&&la(va)}}return $a(ka,ja,ha),ka.elm}}var directives={create:updateDirectives,update:updateDirectives,destroy:function(t){updateDirectives(t,emptyNode)}};function updateDirectives(n,t){(n.data.directives||t.data.directives)&&_update(n,t)}function _update(n,t){var r=n===emptyNode,s=t===emptyNode,l=normalizeDirectives(n.data.directives,n.context),b=normalizeDirectives(t.data.directives,t.context),o=[],B=[],Qe,at,ot;for(Qe in b)at=l[Qe],ot=b[Qe],at?(ot.oldValue=at.value,ot.oldArg=at.arg,callHook(ot,"update",t,n),ot.def&&ot.def.componentUpdated&&B.push(ot)):(callHook(ot,"bind",t,n),ot.def&&ot.def.inserted&&o.push(ot));if(o.length){var ct=function(){for(var ut=0;ut<o.length;ut++)callHook(o[ut],"inserted",t,n)};r?mergeVNodeHook(t,"insert",ct):ct()}if(B.length&&mergeVNodeHook(t,"postpatch",function(){for(var ut=0;ut<B.length;ut++)callHook(B[ut],"componentUpdated",t,n)}),!r)for(Qe in l)b[Qe]||callHook(l[Qe],"unbind",n,n,s)}var emptyModifiers=Object.create(null);function normalizeDirectives(n,t){var r=Object.create(null);if(!n)return r;var s,l;for(s=0;s<n.length;s++){if(l=n[s],l.modifiers||(l.modifiers=emptyModifiers),r[getRawDirName(l)]=l,t._setupState&&t._setupState.__sfc){var b=l.def||resolveAsset(t,"_setupState","v-"+l.name);typeof b=="function"?l.def={bind:b,update:b}:l.def=b}l.def=l.def||resolveAsset(t.$options,"directives",l.name)}return r}function getRawDirName(n){return n.rawName||"".concat(n.name,".").concat(Object.keys(n.modifiers||{}).join("."))}function callHook(n,t,r,s,l){var b=n.def&&n.def[t];if(b)try{b(r.elm,n,r,s,l)}catch(o){handleError(o,r.context,"directive ".concat(n.name," ").concat(t," hook"))}}var baseModules=[ref,directives];function updateAttrs(n,t){var r=t.componentOptions;if(!(isDef(r)&&r.Ctor.options.inheritAttrs===!1)&&!(isUndef(n.data.attrs)&&isUndef(t.data.attrs))){var s,l,b,o=t.elm,B=n.data.attrs||{},Qe=t.data.attrs||{};(isDef(Qe.__ob__)||isTrue(Qe._v_attr_proxy))&&(Qe=t.data.attrs=extend$1({},Qe));for(s in Qe)l=Qe[s],b=B[s],b!==l&&setAttr(o,s,l,t.data.pre);(isIE||isEdge)&&Qe.value!==B.value&&setAttr(o,"value",Qe.value);for(s in B)isUndef(Qe[s])&&(isXlink(s)?o.removeAttributeNS(xlinkNS,getXlinkProp(s)):isEnumeratedAttr(s)||o.removeAttribute(s))}}function setAttr(n,t,r,s){s||n.tagName.indexOf("-")>-1?baseSetAttr(n,t,r):isBooleanAttr(t)?isFalsyAttrValue(r)?n.removeAttribute(t):(r=t==="allowfullscreen"&&n.tagName==="EMBED"?"true":t,n.setAttribute(t,r)):isEnumeratedAttr(t)?n.setAttribute(t,convertEnumeratedValue(t,r)):isXlink(t)?isFalsyAttrValue(r)?n.removeAttributeNS(xlinkNS,getXlinkProp(t)):n.setAttributeNS(xlinkNS,t,r):baseSetAttr(n,t,r)}function baseSetAttr(n,t,r){if(isFalsyAttrValue(r))n.removeAttribute(t);else{if(isIE&&!isIE9&&n.tagName==="TEXTAREA"&&t==="placeholder"&&r!==""&&!n.__ieph){var s=function(l){l.stopImmediatePropagation(),n.removeEventListener("input",s)};n.addEventListener("input",s),n.__ieph=!0}n.setAttribute(t,r)}}var attrs={create:updateAttrs,update:updateAttrs};function updateClass(n,t){var r=t.elm,s=t.data,l=n.data;if(!(isUndef(s.staticClass)&&isUndef(s.class)&&(isUndef(l)||isUndef(l.staticClass)&&isUndef(l.class)))){var b=genClassForVnode(t),o=r._transitionClasses;isDef(o)&&(b=concat(b,stringifyClass(o))),b!==r._prevClass&&(r.setAttribute("class",b),r._prevClass=b)}}var klass={create:updateClass,update:updateClass},RANGE_TOKEN="__r",CHECKBOX_RADIO_TOKEN="__c";function normalizeEvents(n){if(isDef(n[RANGE_TOKEN])){var t=isIE?"change":"input";n[t]=[].concat(n[RANGE_TOKEN],n[t]||[]),delete n[RANGE_TOKEN]}isDef(n[CHECKBOX_RADIO_TOKEN])&&(n.change=[].concat(n[CHECKBOX_RADIO_TOKEN],n.change||[]),delete n[CHECKBOX_RADIO_TOKEN])}var target$2;function createOnceHandler(n,t,r){var s=target$2;return function l(){var b=t.apply(null,arguments);b!==null&&remove(n,l,r,s)}}var useMicrotaskFix=isUsingMicroTask&&!(isFF&&Number(isFF[1])<=53);function add(n,t,r,s){if(useMicrotaskFix){var l=currentFlushTimestamp,b=t;t=b._wrapper=function(o){if(o.target===o.currentTarget||o.timeStamp>=l||o.timeStamp<=0||o.target.ownerDocument!==document)return b.apply(this,arguments)}}target$2.addEventListener(n,t,supportsPassive?{capture:r,passive:s}:r)}function remove(n,t,r,s){(s||target$2).removeEventListener(n,t._wrapper||t,r)}function updateDOMListeners(n,t){if(!(isUndef(n.data.on)&&isUndef(t.data.on))){var r=t.data.on||{},s=n.data.on||{};target$2=t.elm||n.elm,normalizeEvents(r),updateListeners(r,s,add,remove,createOnceHandler,t.context),target$2=void 0}}var events={create:updateDOMListeners,update:updateDOMListeners,destroy:function(n){return updateDOMListeners(n,emptyNode)}},svgContainer;function updateDOMProps(n,t){if(!(isUndef(n.data.domProps)&&isUndef(t.data.domProps))){var r,s,l=t.elm,b=n.data.domProps||{},o=t.data.domProps||{};(isDef(o.__ob__)||isTrue(o._v_attr_proxy))&&(o=t.data.domProps=extend$1({},o));for(r in b)r in o||(l[r]="");for(r in o){if(s=o[r],r==="textContent"||r==="innerHTML"){if(t.children&&(t.children.length=0),s===b[r])continue;l.childNodes.length===1&&l.removeChild(l.childNodes[0])}if(r==="value"&&l.tagName!=="PROGRESS"){l._value=s;var B=isUndef(s)?"":String(s);shouldUpdateValue(l,B)&&(l.value=B)}else if(r==="innerHTML"&&isSVG(l.tagName)&&isUndef(l.innerHTML)){svgContainer=svgContainer||document.createElement("div"),svgContainer.innerHTML="<svg>".concat(s,"</svg>");for(var Qe=svgContainer.firstChild;l.firstChild;)l.removeChild(l.firstChild);for(;Qe.firstChild;)l.appendChild(Qe.firstChild)}else if(s!==b[r])try{l[r]=s}catch{}}}}function shouldUpdateValue(n,t){return!n.composing&&(n.tagName==="OPTION"||isNotInFocusAndDirty(n,t)||isDirtyWithModifiers(n,t))}function isNotInFocusAndDirty(n,t){var r=!0;try{r=document.activeElement!==n}catch{}return r&&n.value!==t}function isDirtyWithModifiers(n,t){var r=n.value,s=n._vModifiers;if(isDef(s)){if(s.number)return toNumber(r)!==toNumber(t);if(s.trim)return r.trim()!==t.trim()}return r!==t}var domProps={create:updateDOMProps,update:updateDOMProps},parseStyleText=cached(function(n){var t={},r=/;(?![^(]*\))/g,s=/:(.+)/;return n.split(r).forEach(function(l){if(l){var b=l.split(s);b.length>1&&(t[b[0].trim()]=b[1].trim())}}),t});function normalizeStyleData(n){var t=normalizeStyleBinding(n.style);return n.staticStyle?extend$1(n.staticStyle,t):t}function normalizeStyleBinding(n){return Array.isArray(n)?toObject(n):typeof n=="string"?parseStyleText(n):n}function getStyle(n,t){for(var r={},s,l=n;l.componentInstance;)l=l.componentInstance._vnode,l&&l.data&&(s=normalizeStyleData(l.data))&&extend$1(r,s);(s=normalizeStyleData(n.data))&&extend$1(r,s);for(var b=n;b=b.parent;)b.data&&(s=normalizeStyleData(b.data))&&extend$1(r,s);return r}var cssVarRE=/^--/,importantRE=/\s*!important$/,setProp=function(n,t,r){if(cssVarRE.test(t))n.style.setProperty(t,r);else if(importantRE.test(r))n.style.setProperty(hyphenate(t),r.replace(importantRE,""),"important");else{var s=normalize(t);if(Array.isArray(r))for(var l=0,b=r.length;l<b;l++)n.style[s]=r[l];else n.style[s]=r}},vendorNames=["Webkit","Moz","ms"],emptyStyle,normalize=cached(function(n){if(emptyStyle=emptyStyle||document.createElement("div").style,n=camelize(n),n!=="filter"&&n in emptyStyle)return n;for(var t=n.charAt(0).toUpperCase()+n.slice(1),r=0;r<vendorNames.length;r++){var s=vendorNames[r]+t;if(s in emptyStyle)return s}});function updateStyle(n,t){var r=t.data,s=n.data;if(!(isUndef(r.staticStyle)&&isUndef(r.style)&&isUndef(s.staticStyle)&&isUndef(s.style))){var l,b,o=t.elm,B=s.staticStyle,Qe=s.normalizedStyle||s.style||{},at=B||Qe,ot=normalizeStyleBinding(t.data.style)||{};t.data.normalizedStyle=isDef(ot.__ob__)?extend$1({},ot):ot;var ct=getStyle(t);for(b in at)isUndef(ct[b])&&setProp(o,b,"");for(b in ct)l=ct[b],setProp(o,b,l??"")}}var style={create:updateStyle,update:updateStyle},whitespaceRE=/\s+/;function addClass(n,t){if(!(!t||!(t=t.trim())))if(n.classList)t.indexOf(" ")>-1?t.split(whitespaceRE).forEach(function(s){return n.classList.add(s)}):n.classList.add(t);else{var r=" ".concat(n.getAttribute("class")||""," ");r.indexOf(" "+t+" ")<0&&n.setAttribute("class",(r+t).trim())}}function removeClass(n,t){if(!(!t||!(t=t.trim())))if(n.classList)t.indexOf(" ")>-1?t.split(whitespaceRE).forEach(function(l){return n.classList.remove(l)}):n.classList.remove(t),n.classList.length||n.removeAttribute("class");else{for(var r=" ".concat(n.getAttribute("class")||""," "),s=" "+t+" ";r.indexOf(s)>=0;)r=r.replace(s," ");r=r.trim(),r?n.setAttribute("class",r):n.removeAttribute("class")}}function resolveTransition(n){if(n){if(typeof n=="object"){var t={};return n.css!==!1&&extend$1(t,autoCssTransition(n.name||"v")),extend$1(t,n),t}else if(typeof n=="string")return autoCssTransition(n)}}var autoCssTransition=cached(function(n){return{enterClass:"".concat(n,"-enter"),enterToClass:"".concat(n,"-enter-to"),enterActiveClass:"".concat(n,"-enter-active"),leaveClass:"".concat(n,"-leave"),leaveToClass:"".concat(n,"-leave-to"),leaveActiveClass:"".concat(n,"-leave-active")}}),hasTransition=inBrowser$1&&!isIE9,TRANSITION="transition",ANIMATION="animation",transitionProp="transition",transitionEndEvent="transitionend",animationProp="animation",animationEndEvent="animationend";hasTransition&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(transitionProp="WebkitTransition",transitionEndEvent="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(animationProp="WebkitAnimation",animationEndEvent="webkitAnimationEnd"));var raf=inBrowser$1?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(n){return n()};function nextFrame(n){raf(function(){raf(n)})}function addTransitionClass(n,t){var r=n._transitionClasses||(n._transitionClasses=[]);r.indexOf(t)<0&&(r.push(t),addClass(n,t))}function removeTransitionClass(n,t){n._transitionClasses&&remove$2(n._transitionClasses,t),removeClass(n,t)}function whenTransitionEnds(n,t,r){var s=getTransitionInfo(n,t),l=s.type,b=s.timeout,o=s.propCount;if(!l)return r();var B=l===TRANSITION?transitionEndEvent:animationEndEvent,Qe=0,at=function(){n.removeEventListener(B,ot),r()},ot=function(ct){ct.target===n&&++Qe>=o&&at()};setTimeout(function(){Qe<o&&at()},b+1),n.addEventListener(B,ot)}var transformRE=/\b(transform|all)(,|$)/;function getTransitionInfo(n,t){var r=window.getComputedStyle(n),s=(r[transitionProp+"Delay"]||"").split(", "),l=(r[transitionProp+"Duration"]||"").split(", "),b=getTimeout(s,l),o=(r[animationProp+"Delay"]||"").split(", "),B=(r[animationProp+"Duration"]||"").split(", "),Qe=getTimeout(o,B),at,ot=0,ct=0;t===TRANSITION?b>0&&(at=TRANSITION,ot=b,ct=l.length):t===ANIMATION?Qe>0&&(at=ANIMATION,ot=Qe,ct=B.length):(ot=Math.max(b,Qe),at=ot>0?b>Qe?TRANSITION:ANIMATION:null,ct=at?at===TRANSITION?l.length:B.length:0);var ut=at===TRANSITION&&transformRE.test(r[transitionProp+"Property"]);return{type:at,timeout:ot,propCount:ct,hasTransform:ut}}function getTimeout(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max.apply(null,t.map(function(r,s){return toMs(r)+toMs(n[s])}))}function toMs(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function enter(n,t){var r=n.elm;isDef(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());var s=resolveTransition(n.data.transition);if(!isUndef(s)&&!(isDef(r._enterCb)||r.nodeType!==1)){for(var l=s.css,b=s.type,o=s.enterClass,B=s.enterToClass,Qe=s.enterActiveClass,at=s.appearClass,ot=s.appearToClass,ct=s.appearActiveClass,ut=s.beforeEnter,lt=s.enter,ea=s.afterEnter,ta=s.enterCancelled,ra=s.beforeAppear,aa=s.appear,ia=s.afterAppear,la=s.appearCancelled,ba=s.duration,_a=activeInstance,sa=activeInstance.$vnode;sa&&sa.parent;)_a=sa.context,sa=sa.parent;var ua=!_a._isMounted||!n.isRootInsert;if(!(ua&&!aa&&aa!=="")){var ma=ua&&at?at:o,$a=ua&&ct?ct:Qe,Da=ua&&ot?ot:B,Ma=ua&&ra||ut,fa=ua&&isFunction(aa)?aa:lt,va=ua&&ia||ea,ka=ua&&la||ta,Ra=toNumber(isObject$1(ba)?ba.enter:ba),qa=l!==!1&&!isIE9,ha=getHookArgumentsLength(fa),ja=r._enterCb=once$1(function(){qa&&(removeTransitionClass(r,Da),removeTransitionClass(r,$a)),ja.cancelled?(qa&&removeTransitionClass(r,ma),ka&&ka(r)):va&&va(r),r._enterCb=null});n.data.show||mergeVNodeHook(n,"insert",function(){var Pa=r.parentNode,Ba=Pa&&Pa._pending&&Pa._pending[n.key];Ba&&Ba.tag===n.tag&&Ba.elm._leaveCb&&Ba.elm._leaveCb(),fa&&fa(r,ja)}),Ma&&Ma(r),qa&&(addTransitionClass(r,ma),addTransitionClass(r,$a),nextFrame(function(){removeTransitionClass(r,ma),ja.cancelled||(addTransitionClass(r,Da),ha||(isValidDuration(Ra)?setTimeout(ja,Ra):whenTransitionEnds(r,b,ja)))})),n.data.show&&(t&&t(),fa&&fa(r,ja)),!qa&&!ha&&ja()}}}function leave(n,t){var r=n.elm;isDef(r._enterCb)&&(r._enterCb.cancelled=!0,r._enterCb());var s=resolveTransition(n.data.transition);if(isUndef(s)||r.nodeType!==1)return t();if(isDef(r._leaveCb))return;var l=s.css,b=s.type,o=s.leaveClass,B=s.leaveToClass,Qe=s.leaveActiveClass,at=s.beforeLeave,ot=s.leave,ct=s.afterLeave,ut=s.leaveCancelled,lt=s.delayLeave,ea=s.duration,ta=l!==!1&&!isIE9,ra=getHookArgumentsLength(ot),aa=toNumber(isObject$1(ea)?ea.leave:ea),ia=r._leaveCb=once$1(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[n.key]=null),ta&&(removeTransitionClass(r,B),removeTransitionClass(r,Qe)),ia.cancelled?(ta&&removeTransitionClass(r,o),ut&&ut(r)):(t(),ct&&ct(r)),r._leaveCb=null});lt?lt(la):la();function la(){ia.cancelled||(!n.data.show&&r.parentNode&&((r.parentNode._pending||(r.parentNode._pending={}))[n.key]=n),at&&at(r),ta&&(addTransitionClass(r,o),addTransitionClass(r,Qe),nextFrame(function(){removeTransitionClass(r,o),ia.cancelled||(addTransitionClass(r,B),ra||(isValidDuration(aa)?setTimeout(ia,aa):whenTransitionEnds(r,b,ia)))})),ot&&ot(r,ia),!ta&&!ra&&ia())}}function isValidDuration(n){return typeof n=="number"&&!isNaN(n)}function getHookArgumentsLength(n){if(isUndef(n))return!1;var t=n.fns;return isDef(t)?getHookArgumentsLength(Array.isArray(t)?t[0]:t):(n._length||n.length)>1}function _enter(n,t){t.data.show!==!0&&enter(t)}var transition=inBrowser$1?{create:_enter,activate:_enter,remove:function(n,t){n.data.show!==!0?leave(n,t):t()}}:{},platformModules=[attrs,klass,events,domProps,style,transition],modules=platformModules.concat(baseModules),patch=createPatchFunction({nodeOps,modules});isIE9&&document.addEventListener("selectionchange",function(){var n=document.activeElement;n&&n.vmodel&&trigger(n,"input")});var directive={inserted:function(n,t,r,s){r.tag==="select"?(s.elm&&!s.elm._vOptions?mergeVNodeHook(r,"postpatch",function(){directive.componentUpdated(n,t,r)}):setSelected(n,t,r.context),n._vOptions=[].map.call(n.options,getValue)):(r.tag==="textarea"||isTextInputType(n.type))&&(n._vModifiers=t.modifiers,t.modifiers.lazy||(n.addEventListener("compositionstart",onCompositionStart),n.addEventListener("compositionend",onCompositionEnd),n.addEventListener("change",onCompositionEnd),isIE9&&(n.vmodel=!0)))},componentUpdated:function(n,t,r){if(r.tag==="select"){setSelected(n,t,r.context);var s=n._vOptions,l=n._vOptions=[].map.call(n.options,getValue);if(l.some(function(o,B){return!looseEqual(o,s[B])})){var b=n.multiple?t.value.some(function(o){return hasNoMatchingOption(o,l)}):t.value!==t.oldValue&&hasNoMatchingOption(t.value,l);b&&trigger(n,"change")}}}};function setSelected(n,t,r){actuallySetSelected(n,t),(isIE||isEdge)&&setTimeout(function(){actuallySetSelected(n,t)},0)}function actuallySetSelected(n,t,r){var s=t.value,l=n.multiple;if(!(l&&!Array.isArray(s))){for(var b,o,B=0,Qe=n.options.length;B<Qe;B++)if(o=n.options[B],l)b=looseIndexOf(s,getValue(o))>-1,o.selected!==b&&(o.selected=b);else if(looseEqual(getValue(o),s)){n.selectedIndex!==B&&(n.selectedIndex=B);return}l||(n.selectedIndex=-1)}}function hasNoMatchingOption(n,t){return t.every(function(r){return!looseEqual(r,n)})}function getValue(n){return"_value"in n?n._value:n.value}function onCompositionStart(n){n.target.composing=!0}function onCompositionEnd(n){n.target.composing&&(n.target.composing=!1,trigger(n.target,"input"))}function trigger(n,t){var r=document.createEvent("HTMLEvents");r.initEvent(t,!0,!0),n.dispatchEvent(r)}function locateNode(n){return n.componentInstance&&(!n.data||!n.data.transition)?locateNode(n.componentInstance._vnode):n}var show={bind:function(n,t,r){var s=t.value;r=locateNode(r);var l=r.data&&r.data.transition,b=n.__vOriginalDisplay=n.style.display==="none"?"":n.style.display;s&&l?(r.data.show=!0,enter(r,function(){n.style.display=b})):n.style.display=s?b:"none"},update:function(n,t,r){var s=t.value,l=t.oldValue;if(!s!=!l){r=locateNode(r);var b=r.data&&r.data.transition;b?(r.data.show=!0,s?enter(r,function(){n.style.display=n.__vOriginalDisplay}):leave(r,function(){n.style.display="none"})):n.style.display=s?n.__vOriginalDisplay:"none"}},unbind:function(n,t,r,s,l){l||(n.style.display=n.__vOriginalDisplay)}},platformDirectives={model:directive,show},transitionProps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function getRealChild(n){var t=n&&n.componentOptions;return t&&t.Ctor.options.abstract?getRealChild(getFirstComponentChild(t.children)):n}function extractTransitionData(n){var t={},r=n.$options;for(var s in r.propsData)t[s]=n[s];var l=r._parentListeners;for(var s in l)t[camelize(s)]=l[s];return t}function placeholder(n,t){if(/\d-keep-alive$/.test(t.tag))return n("keep-alive",{props:t.componentOptions.propsData})}function hasParentTransition(n){for(;n=n.parent;)if(n.data.transition)return!0}function isSameChild(n,t){return t.key===n.key&&t.tag===n.tag}var isNotTextNode=function(n){return n.tag||isAsyncPlaceholder(n)},isVShowDirective=function(n){return n.name==="show"},Transition={name:"transition",props:transitionProps,abstract:!0,render:function(n){var t=this,r=this.$slots.default;if(r&&(r=r.filter(isNotTextNode),!!r.length)){var s=this.mode,l=r[0];if(hasParentTransition(this.$vnode))return l;var b=getRealChild(l);if(!b)return l;if(this._leaving)return placeholder(n,l);var o="__transition-".concat(this._uid,"-");b.key=b.key==null?b.isComment?o+"comment":o+b.tag:isPrimitive(b.key)?String(b.key).indexOf(o)===0?b.key:o+b.key:b.key;var B=(b.data||(b.data={})).transition=extractTransitionData(this),Qe=this._vnode,at=getRealChild(Qe);if(b.data.directives&&b.data.directives.some(isVShowDirective)&&(b.data.show=!0),at&&at.data&&!isSameChild(b,at)&&!isAsyncPlaceholder(at)&&!(at.componentInstance&&at.componentInstance._vnode.isComment)){var ot=at.data.transition=extend$1({},B);if(s==="out-in")return this._leaving=!0,mergeVNodeHook(ot,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),placeholder(n,l);if(s==="in-out"){if(isAsyncPlaceholder(b))return Qe;var ct,ut=function(){ct()};mergeVNodeHook(B,"afterEnter",ut),mergeVNodeHook(B,"enterCancelled",ut),mergeVNodeHook(ot,"delayLeave",function(lt){ct=lt})}}return l}}},props=extend$1({tag:String,moveClass:String},transitionProps);delete props.mode;var TransitionGroup={props,beforeMount:function(){var n=this,t=this._update;this._update=function(r,s){var l=setActiveInstance(n);n.__patch__(n._vnode,n.kept,!1,!0),n._vnode=n.kept,l(),t.call(n,r,s)}},render:function(n){for(var t=this.tag||this.$vnode.data.tag||"span",r=Object.create(null),s=this.prevChildren=this.children,l=this.$slots.default||[],b=this.children=[],o=extractTransitionData(this),B=0;B<l.length;B++){var Qe=l[B];Qe.tag&&Qe.key!=null&&String(Qe.key).indexOf("__vlist")!==0&&(b.push(Qe),r[Qe.key]=Qe,(Qe.data||(Qe.data={})).transition=o)}if(s){for(var at=[],ot=[],B=0;B<s.length;B++){var Qe=s[B];Qe.data.transition=o,Qe.data.pos=Qe.elm.getBoundingClientRect(),r[Qe.key]?at.push(Qe):ot.push(Qe)}this.kept=n(t,null,at),this.removed=ot}return n(t,null,b)},updated:function(){var n=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";!n.length||!this.hasMove(n[0].elm,t)||(n.forEach(callPendingCbs),n.forEach(recordPosition),n.forEach(applyTranslation),this._reflow=document.body.offsetHeight,n.forEach(function(r){if(r.data.moved){var s=r.elm,l=s.style;addTransitionClass(s,t),l.transform=l.WebkitTransform=l.transitionDuration="",s.addEventListener(transitionEndEvent,s._moveCb=function b(o){o&&o.target!==s||(!o||/transform$/.test(o.propertyName))&&(s.removeEventListener(transitionEndEvent,b),s._moveCb=null,removeTransitionClass(s,t))})}}))},methods:{hasMove:function(n,t){if(!hasTransition)return!1;if(this._hasMove)return this._hasMove;var r=n.cloneNode();n._transitionClasses&&n._transitionClasses.forEach(function(l){removeClass(r,l)}),addClass(r,t),r.style.display="none",this.$el.appendChild(r);var s=getTransitionInfo(r);return this.$el.removeChild(r),this._hasMove=s.hasTransform}}};function callPendingCbs(n){n.elm._moveCb&&n.elm._moveCb(),n.elm._enterCb&&n.elm._enterCb()}function recordPosition(n){n.data.newPos=n.elm.getBoundingClientRect()}function applyTranslation(n){var t=n.data.pos,r=n.data.newPos,s=t.left-r.left,l=t.top-r.top;if(s||l){n.data.moved=!0;var b=n.elm.style;b.transform=b.WebkitTransform="translate(".concat(s,"px,").concat(l,"px)"),b.transitionDuration="0s"}}var platformComponents={Transition,TransitionGroup};Vue$1.config.mustUseProp=mustUseProp;Vue$1.config.isReservedTag=isReservedTag;Vue$1.config.isReservedAttr=isReservedAttr;Vue$1.config.getTagNamespace=getTagNamespace;Vue$1.config.isUnknownElement=isUnknownElement;extend$1(Vue$1.options.directives,platformDirectives);extend$1(Vue$1.options.components,platformComponents);Vue$1.prototype.__patch__=inBrowser$1?patch:noop$1;Vue$1.prototype.$mount=function(n,t){return n=n&&inBrowser$1?query(n):void 0,mountComponent(this,n,t)};inBrowser$1&&setTimeout(function(){config.devtools&&devtools&&devtools.emit("init",Vue$1)},0);const cet4=`access	v. 获取 n. 接近，入口
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
snap	 v. 咔嚓折断，啪地绷断；吧嗒一声；猛咬；厉声说话，怒声责骂 adj. 仓促的， 突然的 n. 吧嗒声；快照`,cet6=`
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
`,sta=`
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
`;let books=[];books.push(createBook(1,"cet4",cet4));books.push(createBook(2,"cet6",cet6));books.push(createBook(3,"sta",sta));const builtinWordBooks=books;function createBook(n,t,r){const s=r.split(`
`).filter(Boolean).map(l=>{const[b,o]=l.split("	");return{en:b,zh:o}});return{id:n,name:t,words:s}}function e(){if(typeof global<"u")return global.window;if(typeof window<"u")return window}function y$1(n){if(f$2(n))try{return JSON.parse(n),!0}catch{return!1}return!1}function A$1(n,t=void 0){return y$1(n)?g$1(n):t}function g$1(n="",t){try{return JSON.parse(n)}catch(r){return console.error("jsonParse error",r,n),console.error("如果要忽略jsonParse的报错，可以调用saveJsonParse，但最好还是查下为什么报错"),t}}function k$1(n,t=void 0,r={}){let{replacer:s,space:l}=r;try{return JSON.stringify(n,s,l)}catch(b){return console.error("jsonStringify error ",b),t}}function u(n){return Array.isArray(n)}function a$3(n){return typeof n=="object"&&n!==null&&!u(n)}function f$2(n){return typeof n=="string"||n instanceof String}function y(){let n=Array.from(arguments);return n.reduce(t,n[0]);function t(r,s){if(r||(r=Array.isArray(s)?[]:{}),s&&typeof s=="object")for(let l in s)s.hasOwnProperty(l)&&(s[l]&&typeof s[l]=="object"?r[l]=t(r[l],s[l]):r[l]=s[l]);return r}}function J$1(n,t="",r=void 0){if(!a$3(n)||!f$2(t))return r;const s=t.split(".");let l=n;for(const b of s){if(/\[\d+]/.test(b)){const o=parseInt(b.match(/\d+/)[0]);l=l[o]}else l=l[b];if(l===void 0)return r}return l}function f$1(n,t){return{cache:n,getData(){return this.cache},containsKey(r){return this.cache.hasOwnProperty(r)},getCache(r){return this.clearExpire(),this.cache[r]?this.cache[r].value:{}.value},setCache(r,s){this.clearExpire(),this.cache[r]={timestamp:new Date().getTime(),value:s}},clearCache(){Object.keys(this.cache).forEach(r=>{delete this.cache[r]})},init(r){Object.assign(this.cache,r)},clearExpire(){let r=new Date().getTime();Object.keys(this.cache).forEach(s=>{let l=this.cache[s]||{};if(!l.timestamp){delete this.cache[s];return}let b=l.timestamp;r-b>t&&delete this.cache[s]})}}}function p$1(n,t,r="localStorage"){let s=e(),l=J$1(s||{},r),b=l||{getItem(){},setItem(){},removeItem(){}},o=b.getItem instanceof Function?b.getItem(n):"{}",B=A$1(o,{})||{},Qe=f$1(B,t);return{Cacher:Qe,getCache(at){return Qe.getCache(at)},setCache(at,ot){Qe.setCache(at,ot);let ct=Qe.getData();try{b.setItem(n,k$1(ct))}catch(ut){console.error(`setCache exception; key=${at}, value=${ot}; error=`,ut),this.reportError(at,ot)}},getTotalData(){return Qe.getData()},reportError(at,ot){let ct=Qe.getData(),ut="";Object.keys(ct).forEach(lt=>{let ea=J$1(ct,`${lt}.value`),ta=(a$3(ea)?k$1(ea):ea)+"";ut.length<ta.length&&(ut=ta)})},clearCache(){Qe.clearCache(),b.removeItem(n)}}}(function(){return p$1("_diskCache",31536e6,"localStorage")})();(function(){return p$1("_ssDiskCache",31536e6,"sessionStorage")})();function a$2(n){const t=f$1({});return function(...r){const s=JSON.stringify(r);if(t.containsKey(s))return t.getCache(s);const l=n.apply(this,r);return t.setCache(s,l),l}}function f(n=0){return new Promise(t=>{setTimeout(t,n)})}const a$1=(()=>{function n(r){if(!r)return{};const s={},l=(r[0]==="?"?r.substring(1):r).split("&");for(let b=0;b<l.length;b++){const o=l[b].split("="),B=decodeURIComponent(o[0]),Qe=o.length===2?decodeURIComponent(o[1]):null;s[B]===void 0?s[B]=Qe:Array.isArray(s[B])?s[B].push(Qe):s[B]=[s[B],Qe]}return s}function t(r){return""+Object.keys(r).map(s=>{const l=r[s];return Array.isArray(l)?l.map(b=>`${encodeURIComponent(s)}=${encodeURIComponent(b)}`).join("&"):`${encodeURIComponent(s)}=${encodeURIComponent(l)}`}).join("&")}return{parse:n,stringify:t}})(),d=n=>{n.interceptors.request.use(t=>{if(t.method==="post"){t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";let r={};Object.keys(t.data).forEach(s=>{let l=t.data[s];typeof l=="object"?r[s]=JSON.stringify(l):r[s]=l}),t.data=a$1.stringify(r)}return t},t=>Promise.reject(t))},h$1=n=>{n.interceptors.request.use(t=>{let r=p();return r&&(t.params=y({},t.params,{_TOKEN:r})),t})};function p(){try{return window.document.querySelector("#_TOKEN").getAttribute("value")}catch{return""}}const j$1=n=>{n.interceptors.request.use(t=>(t.method==="get"&&(t.params=c(t.params)),t))},c=n=>(n||(n={}),Object.keys(n).forEach(t=>{let r=n[t];(a$3(r)||u(r))&&(r=k$1(r)),n[t]=r}),n);function xe(n,t){return function(){return n.apply(t,arguments)}}const{toString:dt}=Object.prototype,{getPrototypeOf:ae}=Object,J=(n=>t=>{const r=dt.call(t);return n[r]||(n[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),_=n=>(n=n.toLowerCase(),t=>J(t)===n),V=n=>t=>typeof t===n,{isArray:F}=Array,q=V("undefined");function pt(n){return n!==null&&!q(n)&&n.constructor!==null&&!q(n.constructor)&&O(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Le=_("ArrayBuffer");function ht(n){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(n):t=n&&n.buffer&&Le(n.buffer),t}const mt=V("string"),O=V("function"),Pe=V("number"),v=n=>n!==null&&typeof n=="object",Et=n=>n===!0||n===!1,H=n=>{if(J(n)!=="object")return!1;const t=ae(n);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},yt=_("Date"),Rt=_("File"),wt=_("Blob"),Tt=_("FileList"),bt=n=>v(n)&&O(n.pipe),St=n=>{let t;return n&&(typeof FormData=="function"&&n instanceof FormData||O(n.append)&&((t=J(n))==="formdata"||t==="object"&&O(n.toString)&&n.toString()==="[object FormData]"))},Ot=_("URLSearchParams"),[At,_t,gt,Ct]=["ReadableStream","Request","Response","Headers"].map(_),Nt=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(n,t,{allOwnKeys:r=!1}={}){if(n===null||typeof n>"u")return;let s,l;if(typeof n!="object"&&(n=[n]),F(n))for(s=0,l=n.length;s<l;s++)t.call(null,n[s],s,n);else{const b=r?Object.getOwnPropertyNames(n):Object.keys(n),o=b.length;let B;for(s=0;s<o;s++)B=b[s],t.call(null,n[B],B,n)}}function Fe(n,t){t=t.toLowerCase();const r=Object.keys(n);let s=r.length,l;for(;s-- >0;)if(l=r[s],t===l.toLowerCase())return l;return null}const Ue=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Be=n=>!q(n)&&n!==Ue;function ee(){const{caseless:n}=Be(this)&&this||{},t={},r=(s,l)=>{const b=n&&Fe(t,l)||l;H(t[b])&&H(s)?t[b]=ee(t[b],s):H(s)?t[b]=ee({},s):F(s)?t[b]=s.slice():t[b]=s};for(let s=0,l=arguments.length;s<l;s++)arguments[s]&&k(arguments[s],r);return t}const Dt=(n,t,r,{allOwnKeys:s}={})=>(k(t,(l,b)=>{r&&O(l)?n[b]=xe(l,r):n[b]=l},{allOwnKeys:s}),n),xt=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Lt=(n,t,r,s)=>{n.prototype=Object.create(t.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:t.prototype}),r&&Object.assign(n.prototype,r)},Pt=(n,t,r,s)=>{let l,b,o;const B={};if(t=t||{},n==null)return t;do{for(l=Object.getOwnPropertyNames(n),b=l.length;b-- >0;)o=l[b],(!s||s(o,n,t))&&!B[o]&&(t[o]=n[o],B[o]=!0);n=r!==!1&&ae(n)}while(n&&(!r||r(n,t))&&n!==Object.prototype);return t},Ft=(n,t,r)=>{n=String(n),(r===void 0||r>n.length)&&(r=n.length),r-=t.length;const s=n.indexOf(t,r);return s!==-1&&s===r},Ut=n=>{if(!n)return null;if(F(n))return n;let t=n.length;if(!Pe(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=n[t];return r},Bt=(n=>t=>n&&t instanceof n)(typeof Uint8Array<"u"&&ae(Uint8Array)),It=(n,t)=>{const r=(n&&n[Symbol.iterator]).call(n);let s;for(;(s=r.next())&&!s.done;){const l=s.value;t.call(n,l[0],l[1])}},qt=(n,t)=>{let r;const s=[];for(;(r=n.exec(t))!==null;)s.push(r);return s},kt=_("HTMLFormElement"),jt=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,s){return r.toUpperCase()+s}),me=(({hasOwnProperty:n})=>(t,r)=>n.call(t,r))(Object.prototype),Ht=_("RegExp"),Ie=(n,t)=>{const r=Object.getOwnPropertyDescriptors(n),s={};k(r,(l,b)=>{let o;(o=t(l,b,n))!==!1&&(s[b]=o||l)}),Object.defineProperties(n,s)},Mt=n=>{Ie(n,(t,r)=>{if(O(n)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const s=n[r];if(O(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},zt=(n,t)=>{const r={},s=l=>{l.forEach(b=>{r[b]=!0})};return F(n)?s(n):s(String(n).split(t)),r},$t=()=>{},Jt=(n,t)=>n!=null&&Number.isFinite(n=+n)?n:t,W="abcdefghijklmnopqrstuvwxyz",Ee="0123456789",qe={DIGIT:Ee,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+Ee},Vt=(n=16,t=qe.ALPHA_DIGIT)=>{let r="";const{length:s}=t;for(;n--;)r+=t[Math.random()*s|0];return r};function vt(n){return!!(n&&O(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const Gt=n=>{const t=new Array(10),r=(s,l)=>{if(v(s)){if(t.indexOf(s)>=0)return;if(!("toJSON"in s)){t[l]=s;const b=F(s)?[]:{};return k(s,(o,B)=>{const Qe=r(o,l+1);!q(Qe)&&(b[B]=Qe)}),t[l]=void 0,b}}return s};return r(n,0)},Kt=_("AsyncFunction"),Wt=n=>n&&(v(n)||O(n))&&O(n.then)&&O(n.catch),a={isArray:F,isArrayBuffer:Le,isBuffer:pt,isFormData:St,isArrayBufferView:ht,isString:mt,isNumber:Pe,isBoolean:Et,isObject:v,isPlainObject:H,isReadableStream:At,isRequest:_t,isResponse:gt,isHeaders:Ct,isUndefined:q,isDate:yt,isFile:Rt,isBlob:wt,isRegExp:Ht,isFunction:O,isStream:bt,isURLSearchParams:Ot,isTypedArray:Bt,isFileList:Tt,forEach:k,merge:ee,extend:Dt,trim:Nt,stripBOM:xt,inherits:Lt,toFlatObject:Pt,kindOf:J,kindOfTest:_,endsWith:Ft,toArray:Ut,forEachEntry:It,matchAll:qt,isHTMLForm:kt,hasOwnProperty:me,hasOwnProp:me,reduceDescriptors:Ie,freezeMethods:Mt,toObjectSet:zt,toCamelCase:jt,noop:$t,toFiniteNumber:Jt,findKey:Fe,global:Ue,isContextDefined:Be,ALPHABET:qe,generateString:Vt,isSpecCompliantForm:vt,toJSONObject:Gt,isAsyncFn:Kt,isThenable:Wt};function h(n,t,r,s,l){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),s&&(this.request=s),l&&(this.response=l)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ke=h.prototype,je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{je[n]={value:n}});Object.defineProperties(h,je);Object.defineProperty(ke,"isAxiosError",{value:!0});h.from=(n,t,r,s,l,b)=>{const o=Object.create(ke);return a.toFlatObject(n,o,function(B){return B!==Error.prototype},B=>B!=="isAxiosError"),h.call(o,n.message,t,r,s,l),o.cause=n,o.name=n.name,b&&Object.assign(o,b),o};const Xt=null;function te(n){return a.isPlainObject(n)||a.isArray(n)}function He(n){return a.endsWith(n,"[]")?n.slice(0,-2):n}function ye(n,t,r){return n?n.concat(t).map(function(s,l){return s=He(s),!r&&l?"["+s+"]":s}).join(r?".":""):t}function Yt(n){return a.isArray(n)&&!n.some(te)}const Qt=a.toFlatObject(a,{},null,function(n){return/^is[A-Z]/.test(n)});function G(n,t,r){if(!a.isObject(n))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(lt,ea){return!a.isUndefined(ea[lt])});const s=r.metaTokens,l=r.visitor||at,b=r.dots,o=r.indexes,B=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(l))throw new TypeError("visitor must be a function");function Qe(lt){if(lt===null)return"";if(a.isDate(lt))return lt.toISOString();if(!B&&a.isBlob(lt))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(lt)||a.isTypedArray(lt)?B&&typeof Blob=="function"?new Blob([lt]):Buffer.from(lt):lt}function at(lt,ea,ta){let ra=lt;if(lt&&!ta&&typeof lt=="object"){if(a.endsWith(ea,"{}"))ea=s?ea:ea.slice(0,-2),lt=JSON.stringify(lt);else if(a.isArray(lt)&&Yt(lt)||(a.isFileList(lt)||a.endsWith(ea,"[]"))&&(ra=a.toArray(lt)))return ea=He(ea),ra.forEach(function(aa,ia){!(a.isUndefined(aa)||aa===null)&&t.append(o===!0?ye([ea],ia,b):o===null?ea:ea+"[]",Qe(aa))}),!1}return te(lt)?!0:(t.append(ye(ta,ea,b),Qe(lt)),!1)}const ot=[],ct=Object.assign(Qt,{defaultVisitor:at,convertValue:Qe,isVisitable:te});function ut(lt,ea){if(!a.isUndefined(lt)){if(ot.indexOf(lt)!==-1)throw Error("Circular reference detected in "+ea.join("."));ot.push(lt),a.forEach(lt,function(ta,ra){(!(a.isUndefined(ta)||ta===null)&&l.call(t,ta,a.isString(ra)?ra.trim():ra,ea,ct))===!0&&ut(ta,ea?ea.concat(ra):[ra])}),ot.pop()}}if(!a.isObject(n))throw new TypeError("data must be an object");return ut(n),t}function Re(n){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ce(n,t){this._pairs=[],n&&G(n,this,t)}const Me=ce.prototype;Me.append=function(n,t){this._pairs.push([n,t])};Me.toString=function(n){const t=n?function(r){return n.call(this,r,Re)}:Re;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function Zt(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ze(n,t,r){if(!t)return n;const s=r&&r.encode||Zt,l=r&&r.serialize;let b;if(l?b=l(t,r):b=a.isURLSearchParams(t)?t.toString():new ce(t,r).toString(s),b){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+b}return n}class we{constructor(){this.handlers=[]}use(t,r,s){return this.handlers.push({fulfilled:t,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const $e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},en=typeof URLSearchParams<"u"?URLSearchParams:ce,tn=typeof FormData<"u"?FormData:null,nn=typeof Blob<"u"?Blob:null,rn={isBrowser:!0,classes:{URLSearchParams:en,FormData:tn,Blob:nn},protocols:["http","https","file","blob","url","data"]},ue=typeof window<"u"&&typeof document<"u",sn=(n=>ue&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),on=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",an=ue&&window.location.href||"http://localhost",cn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ue,hasStandardBrowserEnv:sn,hasStandardBrowserWebWorkerEnv:on,origin:an},Symbol.toStringTag,{value:"Module"})),A={...cn,...rn};function un(n,t){return G(n,new A.classes.URLSearchParams,Object.assign({visitor:function(r,s,l,b){return A.isNode&&a.isBuffer(r)?(this.append(s,r.toString("base64")),!1):b.defaultVisitor.apply(this,arguments)}},t))}function ln(n){return a.matchAll(/\w+|\[(\w*)]/g,n).map(t=>t[0]==="[]"?"":t[1]||t[0])}function fn(n){const t={},r=Object.keys(n);let s;const l=r.length;let b;for(s=0;s<l;s++)b=r[s],t[b]=n[b];return t}function Je(n){function t(r,s,l,b){let o=r[b++];if(o==="__proto__")return!0;const B=Number.isFinite(+o),Qe=b>=r.length;return o=!o&&a.isArray(l)?l.length:o,Qe?(a.hasOwnProp(l,o)?l[o]=[l[o],s]:l[o]=s,!B):((!l[o]||!a.isObject(l[o]))&&(l[o]=[]),t(r,s,l[o],b)&&a.isArray(l[o])&&(l[o]=fn(l[o])),!B)}if(a.isFormData(n)&&a.isFunction(n.entries)){const r={};return a.forEachEntry(n,(s,l)=>{t(ln(s),l,r,0)}),r}return null}function dn(n,t,r){if(a.isString(n))try{return(t||JSON.parse)(n),a.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(n)}const j={transitional:$e,adapter:["xhr","http","fetch"],transformRequest:[function(n,t){const r=t.getContentType()||"",s=r.indexOf("application/json")>-1,l=a.isObject(n);if(l&&a.isHTMLForm(n)&&(n=new FormData(n)),a.isFormData(n))return s?JSON.stringify(Je(n)):n;if(a.isArrayBuffer(n)||a.isBuffer(n)||a.isStream(n)||a.isFile(n)||a.isBlob(n)||a.isReadableStream(n))return n;if(a.isArrayBufferView(n))return n.buffer;if(a.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let b;if(l){if(r.indexOf("application/x-www-form-urlencoded")>-1)return un(n,this.formSerializer).toString();if((b=a.isFileList(n))||r.indexOf("multipart/form-data")>-1){const o=this.env&&this.env.FormData;return G(b?{"files[]":n}:n,o&&new o,this.formSerializer)}}return l||s?(t.setContentType("application/json",!1),dn(n)):n}],transformResponse:[function(n){const t=this.transitional||j.transitional,r=t&&t.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(n)||a.isReadableStream(n))return n;if(n&&a.isString(n)&&(r&&!this.responseType||s)){const l=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(n)}catch(b){if(l)throw b.name==="SyntaxError"?h.from(b,h.ERR_BAD_RESPONSE,this,null,this.response):b}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],n=>{j.headers[n]={}});const pn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hn=n=>{const t={};let r,s,l;return n&&n.split(`
`).forEach(function(b){l=b.indexOf(":"),r=b.substring(0,l).trim().toLowerCase(),s=b.substring(l+1).trim(),!(!r||t[r]&&pn[r])&&(r==="set-cookie"?t[r]?t[r].push(s):t[r]=[s]:t[r]=t[r]?t[r]+", "+s:s)}),t},Te=Symbol("internals");function I(n){return n&&String(n).trim().toLowerCase()}function M(n){return n===!1||n==null?n:a.isArray(n)?n.map(M):String(n)}function mn(n){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(n);)t[s[1]]=s[2];return t}const En=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function X(n,t,r,s,l){if(a.isFunction(s))return s.call(this,t,r);if(l&&(t=r),!!a.isString(t)){if(a.isString(s))return t.indexOf(s)!==-1;if(a.isRegExp(s))return s.test(t)}}function yn(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,s)=>r.toUpperCase()+s)}function Rn(n,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+r,{value:function(l,b,o){return this[s].call(this,t,l,b,o)},configurable:!0})})}let S=class{constructor(n){n&&this.set(n)}set(n,t,r){const s=this;function l(o,B,Qe){const at=I(B);if(!at)throw new Error("header name must be a non-empty string");const ot=a.findKey(s,at);(!ot||s[ot]===void 0||Qe===!0||Qe===void 0&&s[ot]!==!1)&&(s[ot||B]=M(o))}const b=(o,B)=>a.forEach(o,(Qe,at)=>l(Qe,at,B));if(a.isPlainObject(n)||n instanceof this.constructor)b(n,t);else if(a.isString(n)&&(n=n.trim())&&!En(n))b(hn(n),t);else if(a.isHeaders(n))for(const[o,B]of n.entries())l(B,o,r);else n!=null&&l(t,n,r);return this}get(n,t){if(n=I(n),n){const r=a.findKey(this,n);if(r){const s=this[r];if(!t)return s;if(t===!0)return mn(s);if(a.isFunction(t))return t.call(this,s,r);if(a.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,t){if(n=I(n),n){const r=a.findKey(this,n);return!!(r&&this[r]!==void 0&&(!t||X(this,this[r],r,t)))}return!1}delete(n,t){const r=this;let s=!1;function l(b){if(b=I(b),b){const o=a.findKey(r,b);o&&(!t||X(r,r[o],o,t))&&(delete r[o],s=!0)}}return a.isArray(n)?n.forEach(l):l(n),s}clear(n){const t=Object.keys(this);let r=t.length,s=!1;for(;r--;){const l=t[r];(!n||X(this,this[l],l,n,!0))&&(delete this[l],s=!0)}return s}normalize(n){const t=this,r={};return a.forEach(this,(s,l)=>{const b=a.findKey(r,l);if(b){t[b]=M(s),delete t[l];return}const o=n?yn(l):String(l).trim();o!==l&&delete t[l],t[o]=M(s),r[o]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const t=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(t[s]=n&&a.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,t])=>n+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...t){const r=new this(n);return t.forEach(s=>r.set(s)),r}static accessor(n){const t=(this[Te]=this[Te]={accessors:{}}).accessors,r=this.prototype;function s(l){const b=I(l);t[b]||(Rn(r,l),t[b]=!0)}return a.isArray(n)?n.forEach(s):s(n),this}};S.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(S.prototype,({value:n},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(s){this[r]=s}}});a.freezeMethods(S);function Y(n,t){const r=this||j,s=t||r,l=S.from(s.headers);let b=s.data;return a.forEach(n,function(o){b=o.call(r,b,l.normalize(),t?t.status:void 0)}),l.normalize(),b}function Ve(n){return!!(n&&n.__CANCEL__)}function U(n,t,r){h.call(this,n??"canceled",h.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(U,h,{__CANCEL__:!0});function ve(n,t,r){const s=r.config.validateStatus;!r.status||!s||s(r.status)?n(r):t(new h("Request failed with status code "+r.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function wn(n){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return t&&t[1]||""}function Tn(n,t){n=n||10;const r=new Array(n),s=new Array(n);let l=0,b=0,o;return t=t!==void 0?t:1e3,function(B){const Qe=Date.now(),at=s[b];o||(o=Qe),r[l]=B,s[l]=Qe;let ot=b,ct=0;for(;ot!==l;)ct+=r[ot++],ot=ot%n;if(l=(l+1)%n,l===b&&(b=(b+1)%n),Qe-o<t)return;const ut=at&&Qe-at;return ut?Math.round(ct*1e3/ut):void 0}}function bn(n,t){let r=0;const s=1e3/t;let l=null;return function(){const b=this===!0,o=Date.now();if(b||o-r>s)return l&&(clearTimeout(l),l=null),r=o,n.apply(null,arguments);l||(l=setTimeout(()=>(l=null,r=Date.now(),n.apply(null,arguments)),s-(o-r)))}}const z=(n,t,r=3)=>{let s=0;const l=Tn(50,250);return bn(b=>{const o=b.loaded,B=b.lengthComputable?b.total:void 0,Qe=o-s,at=l(Qe),ot=o<=B;s=o;const ct={loaded:o,total:B,progress:B?o/B:void 0,bytes:Qe,rate:at||void 0,estimated:at&&B&&ot?(B-o)/at:void 0,event:b,lengthComputable:B!=null};ct[t?"download":"upload"]=!0,n(ct)},r)},Sn=A.hasStandardBrowserEnv?function(){const n=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function s(l){let b=l;return n&&(t.setAttribute("href",b),b=t.href),t.setAttribute("href",b),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=s(window.location.href),function(l){const b=a.isString(l)?s(l):l;return b.protocol===r.protocol&&b.host===r.host}}():function(){return function(){return!0}}(),On=A.hasStandardBrowserEnv?{write(n,t,r,s,l,b){const o=[n+"="+encodeURIComponent(t)];a.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),a.isString(s)&&o.push("path="+s),a.isString(l)&&o.push("domain="+l),b===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function An(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function _n(n,t){return t?n.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):n}function Ge(n,t){return n&&!An(t)?_n(n,t):t}const be=n=>n instanceof S?{...n}:n;function L(n,t){t=t||{};const r={};function s(at,ot,ct){return a.isPlainObject(at)&&a.isPlainObject(ot)?a.merge.call({caseless:ct},at,ot):a.isPlainObject(ot)?a.merge({},ot):a.isArray(ot)?ot.slice():ot}function l(at,ot,ct){if(a.isUndefined(ot)){if(!a.isUndefined(at))return s(void 0,at,ct)}else return s(at,ot,ct)}function b(at,ot){if(!a.isUndefined(ot))return s(void 0,ot)}function o(at,ot){if(a.isUndefined(ot)){if(!a.isUndefined(at))return s(void 0,at)}else return s(void 0,ot)}function B(at,ot,ct){if(ct in t)return s(at,ot);if(ct in n)return s(void 0,at)}const Qe={url:b,method:b,data:b,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:B,headers:(at,ot)=>l(be(at),be(ot),!0)};return a.forEach(Object.keys(Object.assign({},n,t)),function(at){const ot=Qe[at]||l,ct=ot(n[at],t[at],at);a.isUndefined(ct)&&ot!==B||(r[at]=ct)}),r}const Ke=n=>{const t=L({},n);let{data:r,withXSRFToken:s,xsrfHeaderName:l,xsrfCookieName:b,headers:o,auth:B}=t;t.headers=o=S.from(o),t.url=ze(Ge(t.baseURL,t.url),n.params,n.paramsSerializer),B&&o.set("Authorization","Basic "+btoa((B.username||"")+":"+(B.password?unescape(encodeURIComponent(B.password)):"")));let Qe;if(a.isFormData(r)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((Qe=o.getContentType())!==!1){const[at,...ot]=Qe?Qe.split(";").map(ct=>ct.trim()).filter(Boolean):[];o.setContentType([at||"multipart/form-data",...ot].join("; "))}}if(A.hasStandardBrowserEnv&&(s&&a.isFunction(s)&&(s=s(t)),s||s!==!1&&Sn(t.url))){const at=l&&b&&On.read(b);at&&o.set(l,at)}return t},gn=typeof XMLHttpRequest<"u",Cn=gn&&function(n){return new Promise(function(t,r){const s=Ke(n);let l=s.data;const b=S.from(s.headers).normalize();let{responseType:o}=s,B;function Qe(){s.cancelToken&&s.cancelToken.unsubscribe(B),s.signal&&s.signal.removeEventListener("abort",B)}let at=new XMLHttpRequest;at.open(s.method.toUpperCase(),s.url,!0),at.timeout=s.timeout;function ot(){if(!at)return;const ut=S.from("getAllResponseHeaders"in at&&at.getAllResponseHeaders()),lt={data:!o||o==="text"||o==="json"?at.responseText:at.response,status:at.status,statusText:at.statusText,headers:ut,config:n,request:at};ve(function(ea){t(ea),Qe()},function(ea){r(ea),Qe()},lt),at=null}"onloadend"in at?at.onloadend=ot:at.onreadystatechange=function(){!at||at.readyState!==4||at.status===0&&!(at.responseURL&&at.responseURL.indexOf("file:")===0)||setTimeout(ot)},at.onabort=function(){at&&(r(new h("Request aborted",h.ECONNABORTED,s,at)),at=null)},at.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,s,at)),at=null},at.ontimeout=function(){let ut=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const lt=s.transitional||$e;s.timeoutErrorMessage&&(ut=s.timeoutErrorMessage),r(new h(ut,lt.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,s,at)),at=null},l===void 0&&b.setContentType(null),"setRequestHeader"in at&&a.forEach(b.toJSON(),function(ut,lt){at.setRequestHeader(lt,ut)}),a.isUndefined(s.withCredentials)||(at.withCredentials=!!s.withCredentials),o&&o!=="json"&&(at.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&at.addEventListener("progress",z(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&at.upload&&at.upload.addEventListener("progress",z(s.onUploadProgress)),(s.cancelToken||s.signal)&&(B=ut=>{at&&(r(!ut||ut.type?new U(null,n,at):ut),at.abort(),at=null)},s.cancelToken&&s.cancelToken.subscribe(B),s.signal&&(s.signal.aborted?B():s.signal.addEventListener("abort",B)));const ct=wn(s.url);if(ct&&A.protocols.indexOf(ct)===-1){r(new h("Unsupported protocol "+ct+":",h.ERR_BAD_REQUEST,n));return}at.send(l||null)})},Nn=(n,t)=>{let r=new AbortController,s;const l=function(Qe){if(!s){s=!0,o();const at=Qe instanceof Error?Qe:this.reason;r.abort(at instanceof h?at:new U(at instanceof Error?at.message:at))}};let b=t&&setTimeout(()=>{l(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t);const o=()=>{n&&(b&&clearTimeout(b),b=null,n.forEach(Qe=>{Qe&&(Qe.removeEventListener?Qe.removeEventListener("abort",l):Qe.unsubscribe(l))}),n=null)};n.forEach(Qe=>Qe&&Qe.addEventListener&&Qe.addEventListener("abort",l));const{signal:B}=r;return B.unsubscribe=o,[B,()=>{b&&clearTimeout(b),b=null}]},Dn=function*(n,t){let r=n.byteLength;if(r<t){yield n;return}let s=0,l;for(;s<r;)l=s+t,yield n.slice(s,l),s=l},xn=async function*(n,t,r){for await(const s of n)yield*Dn(ArrayBuffer.isView(s)?s:await r(String(s)),t)},Se=(n,t,r,s,l)=>{const b=xn(n,t,l);let o=0;return new ReadableStream({type:"bytes",async pull(B){const{done:Qe,value:at}=await b.next();if(Qe){B.close(),s();return}let ot=at.byteLength;r&&r(o+=ot),B.enqueue(new Uint8Array(at))},cancel(B){return s(B),b.return()}},{highWaterMark:2})},Oe=(n,t)=>{const r=n!=null;return s=>setTimeout(()=>t({lengthComputable:r,total:n,loaded:s}))},K=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",We=K&&typeof ReadableStream=="function",ne=K&&(typeof TextEncoder=="function"?(n=>t=>n.encode(t))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),Ln=We&&(()=>{let n=!1;const t=new Request(A.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!t})(),Ae=64*1024,re=We&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),$={stream:re&&(n=>n.body)};K&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!$[t]&&($[t]=a.isFunction(n[t])?r=>r[t]():(r,s)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,s)})})})(new Response);const Pn=async n=>{if(n==null)return 0;if(a.isBlob(n))return n.size;if(a.isSpecCompliantForm(n))return(await new Request(n).arrayBuffer()).byteLength;if(a.isArrayBufferView(n))return n.byteLength;if(a.isURLSearchParams(n)&&(n=n+""),a.isString(n))return(await ne(n)).byteLength},Fn=async(n,t)=>a.toFiniteNumber(n.getContentLength())??Pn(t),Un=K&&(async n=>{let{url:t,method:r,data:s,signal:l,cancelToken:b,timeout:o,onDownloadProgress:B,onUploadProgress:Qe,responseType:at,headers:ot,withCredentials:ct="same-origin",fetchOptions:ut}=Ke(n);at=at?(at+"").toLowerCase():"text";let[lt,ea]=l||b||o?Nn([l,b],o):[],ta,ra;const aa=()=>{!ta&&setTimeout(()=>{lt&&lt.unsubscribe()}),ta=!0};let ia;try{if(Qe&&Ln&&r!=="get"&&r!=="head"&&(ia=await Fn(ot,s))!==0){let sa=new Request(t,{method:"POST",body:s,duplex:"half"}),ua;a.isFormData(s)&&(ua=sa.headers.get("content-type"))&&ot.setContentType(ua),sa.body&&(s=Se(sa.body,Ae,Oe(ia,z(Qe)),null,ne))}a.isString(ct)||(ct=ct?"cors":"omit"),ra=new Request(t,{...ut,signal:lt,method:r.toUpperCase(),headers:ot.normalize().toJSON(),body:s,duplex:"half",withCredentials:ct});let la=await fetch(ra);const ba=re&&(at==="stream"||at==="response");if(re&&(B||ba)){const sa={};["status","statusText","headers"].forEach(ma=>{sa[ma]=la[ma]});const ua=a.toFiniteNumber(la.headers.get("content-length"));la=new Response(Se(la.body,Ae,B&&Oe(ua,z(B,!0)),ba&&aa,ne),sa)}at=at||"text";let _a=await $[a.findKey($,at)||"text"](la,n);return!ba&&aa(),ea&&ea(),await new Promise((sa,ua)=>{ve(sa,ua,{data:_a,headers:S.from(la.headers),status:la.status,statusText:la.statusText,config:n,request:ra})})}catch(la){throw aa(),la&&la.name==="TypeError"&&/fetch/i.test(la.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,n,ra),{cause:la.cause||la}):h.from(la,la&&la.code,n,ra)}}),se={http:Xt,xhr:Cn,fetch:Un};a.forEach(se,(n,t)=>{if(n){try{Object.defineProperty(n,"name",{value:t})}catch{}Object.defineProperty(n,"adapterName",{value:t})}});const _e=n=>`- ${n}`,Bn=n=>a.isFunction(n)||n===null||n===!1,Xe={getAdapter:n=>{n=a.isArray(n)?n:[n];const{length:t}=n;let r,s;const l={};for(let b=0;b<t;b++){r=n[b];let o;if(s=r,!Bn(r)&&(s=se[(o=String(r)).toLowerCase()],s===void 0))throw new h(`Unknown adapter '${o}'`);if(s)break;l[o||"#"+b]=s}if(!s){const b=Object.entries(l).map(([B,Qe])=>`adapter ${B} `+(Qe===!1?"is not supported by the environment":"is not available in the build"));let o=t?b.length>1?`since :
`+b.map(_e).join(`
`):" "+_e(b[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:se};function Q(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new U(null,n)}function ge(n){return Q(n),n.headers=S.from(n.headers),n.data=Y.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Xe.getAdapter(n.adapter||j.adapter)(n).then(function(t){return Q(n),t.data=Y.call(n,n.transformResponse,t),t.headers=S.from(t.headers),t},function(t){return Ve(t)||(Q(n),t&&t.response&&(t.response.data=Y.call(n,n.transformResponse,t.response),t.response.headers=S.from(t.response.headers))),Promise.reject(t)})}const Ye="1.7.2",le={};["object","boolean","number","function","string","symbol"].forEach((n,t)=>{le[n]=function(r){return typeof r===n||"a"+(t<1?"n ":" ")+n}});const Ce={};le.transitional=function(n,t,r){function s(l,b){return"[Axios v"+Ye+"] Transitional option '"+l+"'"+b+(r?". "+r:"")}return(l,b,o)=>{if(n===!1)throw new h(s(b," has been removed"+(t?" in "+t:"")),h.ERR_DEPRECATED);return t&&!Ce[b]&&(Ce[b]=!0,console.warn(s(b," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(l,b,o):!0}};function In(n,t,r){if(typeof n!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let l=s.length;for(;l-- >0;){const b=s[l],o=t[b];if(o){const B=n[b],Qe=B===void 0||o(B,b,n);if(Qe!==!0)throw new h("option "+b+" must be "+Qe,h.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new h("Unknown option "+b,h.ERR_BAD_OPTION)}}const oe={assertOptions:In,validators:le},D=oe.validators;let x=class{constructor(n){this.defaults=n,this.interceptors={request:new we,response:new we}}async request(n,t){try{return await this._request(n,t)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const l=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?l&&!String(r.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+l):r.stack=l}catch{}}throw r}}_request(n,t){typeof n=="string"?(t=t||{},t.url=n):t=n||{},t=L(this.defaults,t);const{transitional:r,paramsSerializer:s,headers:l}=t;r!==void 0&&oe.assertOptions(r,{silentJSONParsing:D.transitional(D.boolean),forcedJSONParsing:D.transitional(D.boolean),clarifyTimeoutError:D.transitional(D.boolean)},!1),s!=null&&(a.isFunction(s)?t.paramsSerializer={serialize:s}:oe.assertOptions(s,{encode:D.function,serialize:D.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let b=l&&a.merge(l.common,l[t.method]);l&&a.forEach(["delete","get","head","post","put","patch","common"],lt=>{delete l[lt]}),t.headers=S.concat(b,l);const o=[];let B=!0;this.interceptors.request.forEach(function(lt){typeof lt.runWhen=="function"&&lt.runWhen(t)===!1||(B=B&&lt.synchronous,o.unshift(lt.fulfilled,lt.rejected))});const Qe=[];this.interceptors.response.forEach(function(lt){Qe.push(lt.fulfilled,lt.rejected)});let at,ot=0,ct;if(!B){const lt=[ge.bind(this),void 0];for(lt.unshift.apply(lt,o),lt.push.apply(lt,Qe),ct=lt.length,at=Promise.resolve(t);ot<ct;)at=at.then(lt[ot++],lt[ot++]);return at}ct=o.length;let ut=t;for(ot=0;ot<ct;){const lt=o[ot++],ea=o[ot++];try{ut=lt(ut)}catch(ta){ea.call(this,ta);break}}try{at=ge.call(this,ut)}catch(lt){return Promise.reject(lt)}for(ot=0,ct=Qe.length;ot<ct;)at=at.then(Qe[ot++],Qe[ot++]);return at}getUri(n){n=L(this.defaults,n);const t=Ge(n.baseURL,n.url);return ze(t,n.params,n.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(n){x.prototype[n]=function(t,r){return this.request(L(r||{},{method:n,url:t,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(n){function t(r){return function(s,l,b){return this.request(L(b||{},{method:n,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:l}))}}x.prototype[n]=t(),x.prototype[n+"Form"]=t(!0)});let qn=class Nc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(l){r=l});const s=this;this.promise.then(l=>{if(!s._listeners)return;let b=s._listeners.length;for(;b-- >0;)s._listeners[b](l);s._listeners=null}),this.promise.then=l=>{let b;const o=new Promise(B=>{s.subscribe(B),b=B}).then(l);return o.cancel=function(){s.unsubscribe(b)},o},t(function(l,b,o){s.reason||(s.reason=new U(l,b,o),r(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Nc(function(r){t=r}),cancel:t}}};function kn(n){return function(t){return n.apply(null,t)}}function jn(n){return a.isObject(n)&&n.isAxiosError===!0}const ie={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ie).forEach(([n,t])=>{ie[t]=n});function Ze(n){const t=new x(n),r=xe(x.prototype.request,t);return a.extend(r,x.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return Ze(L(n,s))},r}const w=Ze(j);w.Axios=x;w.CanceledError=U;w.CancelToken=qn;w.isCancel=Ve;w.VERSION=Ye;w.toFormData=G;w.AxiosError=h;w.Cancel=w.CanceledError;w.all=function(n){return Promise.all(n)};w.spread=kn;w.isAxiosError=jn;w.mergeConfig=L;w.AxiosHeaders=S;w.formToJSON=n=>Je(a.isHTMLForm(n)?new FormData(n):n);w.getAdapter=Xe.getAdapter;w.HttpStatusCode=ie;w.default=w;const{Axios:cr,AxiosError:ur,CanceledError:lr,isCancel:fr,CancelToken:dr,VERSION:pr,all:hr,Cancel:mr,isAxiosError:Er,spread:yr,toFormData:Rr,AxiosHeaders:wr,HttpStatusCode:Tr,formToJSON:br,getAdapter:Sr,mergeConfig:Or}=w;function Hn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Z,Ne;function Mn(){if(Ne)return Z;Ne=1;const n=new Set(["ENOTFOUND","ENETUNREACH","UNABLE_TO_GET_ISSUER_CERT","UNABLE_TO_GET_CRL","UNABLE_TO_DECRYPT_CERT_SIGNATURE","UNABLE_TO_DECRYPT_CRL_SIGNATURE","UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY","CERT_SIGNATURE_FAILURE","CRL_SIGNATURE_FAILURE","CERT_NOT_YET_VALID","CERT_HAS_EXPIRED","CRL_NOT_YET_VALID","CRL_HAS_EXPIRED","ERROR_IN_CERT_NOT_BEFORE_FIELD","ERROR_IN_CERT_NOT_AFTER_FIELD","ERROR_IN_CRL_LAST_UPDATE_FIELD","ERROR_IN_CRL_NEXT_UPDATE_FIELD","OUT_OF_MEM","DEPTH_ZERO_SELF_SIGNED_CERT","SELF_SIGNED_CERT_IN_CHAIN","UNABLE_TO_GET_ISSUER_CERT_LOCALLY","UNABLE_TO_VERIFY_LEAF_SIGNATURE","CERT_CHAIN_TOO_LONG","CERT_REVOKED","INVALID_CA","PATH_LENGTH_EXCEEDED","INVALID_PURPOSE","CERT_UNTRUSTED","CERT_REJECTED","HOSTNAME_MISMATCH"]);return Z=t=>!n.has(t&&t.code),Z}var zn=Mn();const $n=Hn(zn),fe="axios-retry";function et(n){const t=["ERR_CANCELED","ECONNABORTED"];return n.response||!n.code||t.includes(n.code)?!1:$n(n)}const tt=["get","head","options"],Jn=tt.concat(["put","delete"]);function de(n){return n.code!=="ECONNABORTED"&&(!n.response||n.response.status===429||n.response.status>=500&&n.response.status<=599)}function Vn(n){var t;return(t=n.config)!=null&&t.method?de(n)&&tt.indexOf(n.config.method)!==-1:!1}function nt(n){var t;return(t=n.config)!=null&&t.method?de(n)&&Jn.indexOf(n.config.method)!==-1:!1}function rt(n){return et(n)||nt(n)}function pe(n=void 0){var t;const r=(t=n==null?void 0:n.response)==null?void 0:t.headers["retry-after"];if(!r)return 0;let s=(Number(r)||0)*1e3;return s===0&&(s=(new Date(r).valueOf()||0)-Date.now()),Math.max(0,s)}function vn(n=0,t=void 0){return Math.max(0,pe(t))}function Gn(n=0,t=void 0,r=100){const s=2**n*r,l=Math.max(s,pe(t)),b=l*.2*Math.random();return l+b}function Kn(n=100){return(t=0,r=void 0)=>{const s=t*n;return Math.max(s,pe(r))}}const Wn={retries:3,retryCondition:rt,retryDelay:vn,shouldResetTimeout:!1,onRetry:()=>{},onMaxRetryTimesExceeded:()=>{},validateResponse:null};function Xn(n,t){return{...Wn,...t,...n[fe]}}function De(n,t,r=!1){const s=Xn(n,t||{});return s.retryCount=s.retryCount||0,(!s.lastRequestTime||r)&&(s.lastRequestTime=Date.now()),n[fe]=s,s}function Yn(n,t){n.defaults.agent===t.agent&&delete t.agent,n.defaults.httpAgent===t.httpAgent&&delete t.httpAgent,n.defaults.httpsAgent===t.httpsAgent&&delete t.httpsAgent}async function Qn(n,t){const{retries:r,retryCondition:s}=n,l=(n.retryCount||0)<r&&s(t);if(typeof l=="object")try{return await l!==!1}catch{return!1}return l}async function Zn(n,t,r,s){var l;t.retryCount+=1;const{retryDelay:b,shouldResetTimeout:o,onRetry:B}=t,Qe=b(t.retryCount,r);if(Yn(n,s),!o&&s.timeout&&t.lastRequestTime){const at=Date.now()-t.lastRequestTime,ot=s.timeout-at-Qe;if(ot<=0)return Promise.reject(r);s.timeout=ot}return s.transformRequest=[at=>at],await B(t.retryCount,r,s),(l=s.signal)!=null&&l.aborted?Promise.resolve(n(s)):new Promise(at=>{var ot;const ct=()=>{clearTimeout(ut),at(n(s))},ut=setTimeout(()=>{var lt;at(n(s)),(lt=s.signal)!=null&&lt.removeEventListener&&s.signal.removeEventListener("abort",ct)},Qe);(ot=s.signal)!=null&&ot.addEventListener&&s.signal.addEventListener("abort",ct,{once:!0})})}async function er(n,t){n.retryCount>=n.retries&&await n.onMaxRetryTimesExceeded(t,n.retryCount)}const g=(n,t)=>{const r=n.interceptors.request.use(l=>{var b;return De(l,t,!0),(b=l[fe])!=null&&b.validateResponse&&(l.validateStatus=()=>!1),l}),s=n.interceptors.response.use(null,async l=>{var b;const{config:o}=l;if(!o)return Promise.reject(l);const B=De(o,t);return l.response&&(b=B.validateResponse)!=null&&b.call(B,l.response)?l.response:await Qn(B,l)?Zn(n,B,l,o):(await er(B,l),Promise.reject(l))});return{requestInterceptorId:r,responseInterceptorId:s}};g.isNetworkError=et;g.isSafeRequestError=Vn;g.isIdempotentRequestError=nt;g.isNetworkOrIdempotentRequestError=rt;g.exponentialDelay=Gn;g.linearDelay=Kn;g.isRetryableError=de;function tr(){let n=w.create({timeout:15e3,headers:{post:{"Content-Type":"application/x-www-form-urlencoded"}}});return g(n,{retries:3,retryDelay:g.exponentialDelay,retryCondition:t=>g.isNetworkOrIdempotentRequestError(t)||t.response&&t.response.status>=500}),d(n),h$1(n),j$1(n),n}tr();async function isUrl404(n){try{const t=await fetch(n,{method:"HEAD"});return console.log("jser url 404",t.status,n),t.status===404}catch(t){return console.error("检查URL状态时发生错误:",t),!1}}function str2Int(n,t=0){return parseInt(n)||t}let request=tr();const API_BASE="http://localhost:3001/";request.defaults.baseURL=API_BASE;request.defaults.timeout=6e4;const recognizeApi=n=>request.post("/api/recognize",n),getDictApi=n=>request.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${n}`),WORD_BOOKS_KEY="myWordBooks",CURRENT_BOOK_IDX_KEY="currentWordBookIdx",INIT_FLAG_KEY="wordBooksInited",PROGRESS_KEY="wordBooksProgress";function getWordBooks(){return JSON.parse(localStorage.getItem(WORD_BOOKS_KEY)||"[]")}function setCurrentBookIndex(n){localStorage.setItem(CURRENT_BOOK_IDX_KEY,str2Int(n))}function initDefaultWordBooks(){localStorage.getItem(INIT_FLAG_KEY)||(localStorage.setItem(WORD_BOOKS_KEY,JSON.stringify(builtinWordBooks)),localStorage.setItem(INIT_FLAG_KEY,"1"))}function getBookProgress(n){return JSON.parse(localStorage.getItem(PROGRESS_KEY)||"{}")[n]||{group:0,learned:[],percent:0}}function setBookProgress(n,t){const r=JSON.parse(localStorage.getItem(PROGRESS_KEY)||"{}");r[n]=t,localStorage.setItem(PROGRESS_KEY,JSON.stringify(r))}function getWordAudioUrl(n){return`https://api.dictionaryapi.dev/media/pronunciations/en/${n}-us.mp3`}const MAX_CACHE_SIZE=1e3;let word_cache={},cache_keys=[];async function getAvailableAudioUrl(n){if(word_cache[n]){const r=cache_keys.indexOf(n);return r>-1&&cache_keys.splice(r,1),cache_keys.push(n),word_cache[n]}let t=0;for(;t<3;){let r=t>0?"-"+t:"",s=getWordUrl(n,r);if(!await isUrl404(s)){if(word_cache[n]=s,cache_keys.push(n),cache_keys.length>MAX_CACHE_SIZE){const l=cache_keys.shift();delete word_cache[l]}return s}t++}return word_cache[n]="",""}function getWordUrl(n,t=""){return`https://api.dictionaryapi.dev/media/pronunciations/en/${n}${t}-us.mp3`}function splitTaggedText(n){const t=/([a-z]*\.\s[^a-z]*)/gi,r=n.match(t);return r?r.map(s=>s.trim()):[]}function getRandomWordInfoApi(){return tr().get("https://v2.xxapi.cn/api/randomenglishwords")}const getDict=a$2(n=>getDictApi(n));async function getPhonetic(n){var r,s;let t=await getDict(n);return(s=(r=t==null?void 0:t.data)==null?void 0:r[0])==null?void 0:s.phonetic}function normalizeComponent(n,t,r,s,l,b,o,B){var Qe=typeof n=="function"?n.options:n;return t&&(Qe.render=t,Qe.staticRenderFns=r,Qe._compiled=!0),b&&(Qe._scopeId="data-v-"+b),{exports:n,options:Qe}}const _sfc_main$j={name:"BackToHome",methods:{goHome(){this.$router.push("/")}}};var _sfc_render$j=function(){var t=this,r=t._self._c;return r("button",{staticClass:"back-home-btn",attrs:{title:"返回首页"},on:{click:t.goHome}},[r("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#3578e5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M3 12L12 3l9 9"}}),r("path",{attrs:{d:"M9 21V9h6v12"}})])])},_sfc_staticRenderFns$j=[],__component__$j=normalizeComponent(_sfc_main$j,_sfc_render$j,_sfc_staticRenderFns$j,!1,null,"7ad0e487");const BackToHome=__component__$j.exports,_sfc_main$i={name:"BackButton",data(){return{canGoBack:!1}},watch:{$route:{immediate:!0,handler(n,t){this.canGoBack=window.history.length>1}}},methods:{goBack(){this.$router.back()}}};var _sfc_render$i=function(){var t=this,r=t._self._c;return t.canGoBack?r("button",{staticClass:"back-btn",attrs:{title:"返回上一页"},on:{click:t.goBack}},[r("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#3578e5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M15 18l-6-6 6-6"}})])]):t._e()},_sfc_staticRenderFns$i=[],__component__$i=normalizeComponent(_sfc_main$i,_sfc_render$i,_sfc_staticRenderFns$i,!1,null,"edd6c788");const BackButton=__component__$i.exports;/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */function applyMixin(n){var t=Number(n.version.split(".")[0]);if(t>=2)n.mixin({beforeCreate:s});else{var r=n.prototype._init;n.prototype._init=function(l){l===void 0&&(l={}),l.init=l.init?[s].concat(l.init):s,r.call(this,l)}}function s(){var l=this.$options;l.store?this.$store=typeof l.store=="function"?l.store():l.store:l.parent&&l.parent.$store&&(this.$store=l.parent.$store)}}var target=typeof window<"u"?window:typeof global<"u"?global:{},devtoolHook=target.__VUE_DEVTOOLS_GLOBAL_HOOK__;function devtoolPlugin(n){devtoolHook&&(n._devtoolHook=devtoolHook,devtoolHook.emit("vuex:init",n),devtoolHook.on("vuex:travel-to-state",function(t){n.replaceState(t)}),n.subscribe(function(t,r){devtoolHook.emit("vuex:mutation",t,r)},{prepend:!0}),n.subscribeAction(function(t,r){devtoolHook.emit("vuex:action",t,r)},{prepend:!0}))}function find(n,t){return n.filter(t)[0]}function deepCopy(n,t){if(t===void 0&&(t=[]),n===null||typeof n!="object")return n;var r=find(t,function(l){return l.original===n});if(r)return r.copy;var s=Array.isArray(n)?[]:{};return t.push({original:n,copy:s}),Object.keys(n).forEach(function(l){s[l]=deepCopy(n[l],t)}),s}function forEachValue(n,t){Object.keys(n).forEach(function(r){return t(n[r],r)})}function isObject(n){return n!==null&&typeof n=="object"}function isPromise(n){return n&&typeof n.then=="function"}function partial(n,t){return function(){return n(t)}}var Module=function(t,r){this.runtime=r,this._children=Object.create(null),this._rawModule=t;var s=t.state;this.state=(typeof s=="function"?s():s)||{}},prototypeAccessors$1={namespaced:{configurable:!0}};prototypeAccessors$1.namespaced.get=function(){return!!this._rawModule.namespaced};Module.prototype.addChild=function(t,r){this._children[t]=r};Module.prototype.removeChild=function(t){delete this._children[t]};Module.prototype.getChild=function(t){return this._children[t]};Module.prototype.hasChild=function(t){return t in this._children};Module.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};Module.prototype.forEachChild=function(t){forEachValue(this._children,t)};Module.prototype.forEachGetter=function(t){this._rawModule.getters&&forEachValue(this._rawModule.getters,t)};Module.prototype.forEachAction=function(t){this._rawModule.actions&&forEachValue(this._rawModule.actions,t)};Module.prototype.forEachMutation=function(t){this._rawModule.mutations&&forEachValue(this._rawModule.mutations,t)};Object.defineProperties(Module.prototype,prototypeAccessors$1);var ModuleCollection=function(t){this.register([],t,!1)};ModuleCollection.prototype.get=function(t){return t.reduce(function(r,s){return r.getChild(s)},this.root)};ModuleCollection.prototype.getNamespace=function(t){var r=this.root;return t.reduce(function(s,l){return r=r.getChild(l),s+(r.namespaced?l+"/":"")},"")};ModuleCollection.prototype.update=function(t){update2([],this.root,t)};ModuleCollection.prototype.register=function(t,r,s){var l=this;s===void 0&&(s=!0);var b=new Module(r,s);if(t.length===0)this.root=b;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],b)}r.modules&&forEachValue(r.modules,function(B,Qe){l.register(t.concat(Qe),B,s)})};ModuleCollection.prototype.unregister=function(t){var r=this.get(t.slice(0,-1)),s=t[t.length-1],l=r.getChild(s);l&&l.runtime&&r.removeChild(s)};ModuleCollection.prototype.isRegistered=function(t){var r=this.get(t.slice(0,-1)),s=t[t.length-1];return r?r.hasChild(s):!1};function update2(n,t,r){if(t.update(r),r.modules)for(var s in r.modules){if(!t.getChild(s))return;update2(n.concat(s),t.getChild(s),r.modules[s])}}var Vue,Store=function(t){var r=this;t===void 0&&(t={}),!Vue&&typeof window<"u"&&window.Vue&&install$1(window.Vue);var s=t.plugins;s===void 0&&(s=[]);var l=t.strict;l===void 0&&(l=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ModuleCollection(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new Vue,this._makeLocalGettersCache=Object.create(null);var b=this,o=this,B=o.dispatch,Qe=o.commit;this.dispatch=function(ut,lt){return B.call(b,ut,lt)},this.commit=function(ut,lt,ea){return Qe.call(b,ut,lt,ea)},this.strict=l;var at=this._modules.root.state;installModule(this,at,[],this._modules.root),resetStoreVM(this,at),s.forEach(function(ct){return ct(r)});var ot=t.devtools!==void 0?t.devtools:Vue.config.devtools;ot&&devtoolPlugin(this)},prototypeAccessors$1$1={state:{configurable:!0}};prototypeAccessors$1$1.state.get=function(){return this._vm._data.$$state};prototypeAccessors$1$1.state.set=function(n){};Store.prototype.commit=function(t,r,s){var l=this,b=unifyObjectStyle(t,r,s),o=b.type,B=b.payload,Qe={type:o,payload:B},at=this._mutations[o];at&&(this._withCommit(function(){at.forEach(function(ct){ct(B)})}),this._subscribers.slice().forEach(function(ot){return ot(Qe,l.state)}))};Store.prototype.dispatch=function(t,r){var s=this,l=unifyObjectStyle(t,r),b=l.type,o=l.payload,B={type:b,payload:o},Qe=this._actions[b];if(Qe){try{this._actionSubscribers.slice().filter(function(ot){return ot.before}).forEach(function(ot){return ot.before(B,s.state)})}catch{}var at=Qe.length>1?Promise.all(Qe.map(function(ot){return ot(o)})):Qe[0](o);return new Promise(function(ot,ct){at.then(function(ut){try{s._actionSubscribers.filter(function(lt){return lt.after}).forEach(function(lt){return lt.after(B,s.state)})}catch{}ot(ut)},function(ut){try{s._actionSubscribers.filter(function(lt){return lt.error}).forEach(function(lt){return lt.error(B,s.state,ut)})}catch{}ct(ut)})})}};Store.prototype.subscribe=function(t,r){return genericSubscribe(t,this._subscribers,r)};Store.prototype.subscribeAction=function(t,r){var s=typeof t=="function"?{before:t}:t;return genericSubscribe(s,this._actionSubscribers,r)};Store.prototype.watch=function(t,r,s){var l=this;return this._watcherVM.$watch(function(){return t(l.state,l.getters)},r,s)};Store.prototype.replaceState=function(t){var r=this;this._withCommit(function(){r._vm._data.$$state=t})};Store.prototype.registerModule=function(t,r,s){s===void 0&&(s={}),typeof t=="string"&&(t=[t]),this._modules.register(t,r),installModule(this,this.state,t,this._modules.get(t),s.preserveState),resetStoreVM(this,this.state)};Store.prototype.unregisterModule=function(t){var r=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var s=getNestedState(r.state,t.slice(0,-1));Vue.delete(s,t[t.length-1])}),resetStore(this)};Store.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};Store.prototype.hotUpdate=function(t){this._modules.update(t),resetStore(this,!0)};Store.prototype._withCommit=function(t){var r=this._committing;this._committing=!0,t(),this._committing=r};Object.defineProperties(Store.prototype,prototypeAccessors$1$1);function genericSubscribe(n,t,r){return t.indexOf(n)<0&&(r&&r.prepend?t.unshift(n):t.push(n)),function(){var s=t.indexOf(n);s>-1&&t.splice(s,1)}}function resetStore(n,t){n._actions=Object.create(null),n._mutations=Object.create(null),n._wrappedGetters=Object.create(null),n._modulesNamespaceMap=Object.create(null);var r=n.state;installModule(n,r,[],n._modules.root,!0),resetStoreVM(n,r,t)}function resetStoreVM(n,t,r){var s=n._vm;n.getters={},n._makeLocalGettersCache=Object.create(null);var l=n._wrappedGetters,b={};forEachValue(l,function(B,Qe){b[Qe]=partial(B,n),Object.defineProperty(n.getters,Qe,{get:function(){return n._vm[Qe]},enumerable:!0})});var o=Vue.config.silent;Vue.config.silent=!0,n._vm=new Vue({data:{$$state:t},computed:b}),Vue.config.silent=o,n.strict&&enableStrictMode(n),s&&(r&&n._withCommit(function(){s._data.$$state=null}),Vue.nextTick(function(){return s.$destroy()}))}function installModule(n,t,r,s,l){var b=!r.length,o=n._modules.getNamespace(r);if(s.namespaced&&(n._modulesNamespaceMap[o],n._modulesNamespaceMap[o]=s),!b&&!l){var B=getNestedState(t,r.slice(0,-1)),Qe=r[r.length-1];n._withCommit(function(){Vue.set(B,Qe,s.state)})}var at=s.context=makeLocalContext(n,o,r);s.forEachMutation(function(ot,ct){var ut=o+ct;registerMutation(n,ut,ot,at)}),s.forEachAction(function(ot,ct){var ut=ot.root?ct:o+ct,lt=ot.handler||ot;registerAction(n,ut,lt,at)}),s.forEachGetter(function(ot,ct){var ut=o+ct;registerGetter(n,ut,ot,at)}),s.forEachChild(function(ot,ct){installModule(n,t,r.concat(ct),ot,l)})}function makeLocalContext(n,t,r){var s=t==="",l={dispatch:s?n.dispatch:function(b,o,B){var Qe=unifyObjectStyle(b,o,B),at=Qe.payload,ot=Qe.options,ct=Qe.type;return(!ot||!ot.root)&&(ct=t+ct),n.dispatch(ct,at)},commit:s?n.commit:function(b,o,B){var Qe=unifyObjectStyle(b,o,B),at=Qe.payload,ot=Qe.options,ct=Qe.type;(!ot||!ot.root)&&(ct=t+ct),n.commit(ct,at,ot)}};return Object.defineProperties(l,{getters:{get:s?function(){return n.getters}:function(){return makeLocalGetters(n,t)}},state:{get:function(){return getNestedState(n.state,r)}}}),l}function makeLocalGetters(n,t){if(!n._makeLocalGettersCache[t]){var r={},s=t.length;Object.keys(n.getters).forEach(function(l){if(l.slice(0,s)===t){var b=l.slice(s);Object.defineProperty(r,b,{get:function(){return n.getters[l]},enumerable:!0})}}),n._makeLocalGettersCache[t]=r}return n._makeLocalGettersCache[t]}function registerMutation(n,t,r,s){var l=n._mutations[t]||(n._mutations[t]=[]);l.push(function(o){r.call(n,s.state,o)})}function registerAction(n,t,r,s){var l=n._actions[t]||(n._actions[t]=[]);l.push(function(o){var B=r.call(n,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:n.getters,rootState:n.state},o);return isPromise(B)||(B=Promise.resolve(B)),n._devtoolHook?B.catch(function(Qe){throw n._devtoolHook.emit("vuex:error",Qe),Qe}):B})}function registerGetter(n,t,r,s){n._wrappedGetters[t]||(n._wrappedGetters[t]=function(b){return r(s.state,s.getters,b.state,b.getters)})}function enableStrictMode(n){n._vm.$watch(function(){return this._data.$$state},function(){},{deep:!0,sync:!0})}function getNestedState(n,t){return t.reduce(function(r,s){return r[s]},n)}function unifyObjectStyle(n,t,r){return isObject(n)&&n.type&&(r=t,t=n,n=n.type),{type:n,payload:t,options:r}}function install$1(n){Vue&&n===Vue||(Vue=n,applyMixin(Vue))}var mapState=normalizeNamespace(function(n,t){var r={};return normalizeMap(t).forEach(function(s){var l=s.key,b=s.val;r[l]=function(){var B=this.$store.state,Qe=this.$store.getters;if(n){var at=getModuleByNamespace(this.$store,"mapState",n);if(!at)return;B=at.context.state,Qe=at.context.getters}return typeof b=="function"?b.call(this,B,Qe):B[b]},r[l].vuex=!0}),r}),mapMutations=normalizeNamespace(function(n,t){var r={};return normalizeMap(t).forEach(function(s){var l=s.key,b=s.val;r[l]=function(){for(var B=[],Qe=arguments.length;Qe--;)B[Qe]=arguments[Qe];var at=this.$store.commit;if(n){var ot=getModuleByNamespace(this.$store,"mapMutations",n);if(!ot)return;at=ot.context.commit}return typeof b=="function"?b.apply(this,[at].concat(B)):at.apply(this.$store,[b].concat(B))}}),r}),mapGetters=normalizeNamespace(function(n,t){var r={};return normalizeMap(t).forEach(function(s){var l=s.key,b=s.val;b=n+b,r[l]=function(){if(!(n&&!getModuleByNamespace(this.$store,"mapGetters",n)))return this.$store.getters[b]},r[l].vuex=!0}),r}),mapActions=normalizeNamespace(function(n,t){var r={};return normalizeMap(t).forEach(function(s){var l=s.key,b=s.val;r[l]=function(){for(var B=[],Qe=arguments.length;Qe--;)B[Qe]=arguments[Qe];var at=this.$store.dispatch;if(n){var ot=getModuleByNamespace(this.$store,"mapActions",n);if(!ot)return;at=ot.context.dispatch}return typeof b=="function"?b.apply(this,[at].concat(B)):at.apply(this.$store,[b].concat(B))}}),r}),createNamespacedHelpers=function(n){return{mapState:mapState.bind(null,n),mapGetters:mapGetters.bind(null,n),mapMutations:mapMutations.bind(null,n),mapActions:mapActions.bind(null,n)}};function normalizeMap(n){return isValidMap(n)?Array.isArray(n)?n.map(function(t){return{key:t,val:t}}):Object.keys(n).map(function(t){return{key:t,val:n[t]}}):[]}function isValidMap(n){return Array.isArray(n)||isObject(n)}function normalizeNamespace(n){return function(t,r){return typeof t!="string"?(r=t,t=""):t.charAt(t.length-1)!=="/"&&(t+="/"),n(t,r)}}function getModuleByNamespace(n,t,r){var s=n._modulesNamespaceMap[r];return s}function createLogger(n){n===void 0&&(n={});var t=n.collapsed;t===void 0&&(t=!0);var r=n.filter;r===void 0&&(r=function(ot,ct,ut){return!0});var s=n.transformer;s===void 0&&(s=function(ot){return ot});var l=n.mutationTransformer;l===void 0&&(l=function(ot){return ot});var b=n.actionFilter;b===void 0&&(b=function(ot,ct){return!0});var o=n.actionTransformer;o===void 0&&(o=function(ot){return ot});var B=n.logMutations;B===void 0&&(B=!0);var Qe=n.logActions;Qe===void 0&&(Qe=!0);var at=n.logger;return at===void 0&&(at=console),function(ot){var ct=deepCopy(ot.state);typeof at>"u"||(B&&ot.subscribe(function(ut,lt){var ea=deepCopy(lt);if(r(ut,ct,ea)){var ta=getFormattedTime(),ra=l(ut),aa="mutation "+ut.type+ta;startMessage(at,aa,t),at.log("%c prev state","color: #9E9E9E; font-weight: bold",s(ct)),at.log("%c mutation","color: #03A9F4; font-weight: bold",ra),at.log("%c next state","color: #4CAF50; font-weight: bold",s(ea)),endMessage(at)}ct=ea}),Qe&&ot.subscribeAction(function(ut,lt){if(b(ut,lt)){var ea=getFormattedTime(),ta=o(ut),ra="action "+ut.type+ea;startMessage(at,ra,t),at.log("%c action","color: #03A9F4; font-weight: bold",ta),endMessage(at)}}))}}function startMessage(n,t,r){var s=r?n.groupCollapsed:n.group;try{s.call(n,t)}catch{n.log(t)}}function endMessage(n){try{n.groupEnd()}catch{n.log("—— log end ——")}}function getFormattedTime(){var n=new Date;return" @ "+pad(n.getHours(),2)+":"+pad(n.getMinutes(),2)+":"+pad(n.getSeconds(),2)+"."+pad(n.getMilliseconds(),3)}function repeat(n,t){return new Array(t+1).join(n)}function pad(n,t){return repeat("0",t-n.toString().length)+n}var index={Store,install:install$1,version:"3.6.2",mapState,mapMutations,mapGetters,mapActions,createNamespacedHelpers,createLogger};const _sfc_main$h={name:"FabMenu",data(){return{menuOpen:!1,dragging:!1,dragStart:{x:0,y:0},pos:{left:16,bottom:16},expandTo:"left"}},computed:{...mapState(["isFullscreen"]),menuItems(){return[{label:"图片识别",icon:"📷",route:"/recognize?auto=true"},{label:"背单词",icon:"📖",route:"/words"},{label:"词库",icon:"📚",route:"/wordbooks"},{label:"清理缓存",icon:"🧹",action:"clearCache"},{label:"全屏",icon:this.fullscreenIcon,action:"toggleFullscreen"}]},fullscreenIcon(){return this.isFullscreen?"🔳":"🔲"}},methods:{toggleMenu(){this.menuOpen||this.snapToEdge(),this.menuOpen=!this.menuOpen},snapToEdge(){const n=this.$el.getBoundingClientRect(),t=n.left<window.innerWidth/2;this.expandTo=t?"right":"left",t?this.pos.left=16:this.pos.left=window.innerWidth-n.width-16},onDragStart(n){this.dragging=!0;const t=n.touches?n.touches[0]:n;this.dragStart={x:t.clientX,y:t.clientY,left:this.pos.left,bottom:this.pos.bottom},document.addEventListener("mousemove",this.onDragMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchmove",this.onDragMove,{passive:!1}),document.addEventListener("touchend",this.onDragEnd)},onDragMove(n){if(!this.dragging)return;const t=n.touches?n.touches[0]:n,r=t.clientX-this.dragStart.x,s=this.dragStart.y-t.clientY;let l=this.dragStart.left+r,b=this.dragStart.bottom+s;const o=this.$el.getBoundingClientRect();l=Math.max(0,Math.min(window.innerWidth-o.width,l)),b=Math.max(0,Math.min(window.innerHeight-o.height,b)),this.pos={left:l,bottom:b},n.preventDefault&&n.preventDefault()},onDragEnd(n){this.dragging=!1,document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchmove",this.onDragMove),document.removeEventListener("touchend",this.onDragEnd);const t=this.$el.getBoundingClientRect(),r=t.left<window.innerWidth/2;r?this.pos.left=16:this.pos.left=window.innerWidth-t.width-16,this.menuOpen&&(this.expandTo=r?"right":"left")},handleGlobalClick(n){if(!this.menuOpen)return;let t=n.target;for(;t;){if(t.classList&&t.classList.contains("fab-menu"))return;t=t.parentElement}this.menuOpen=!1},...mapMutations(["setCacheFrozen","setIsFullscreen"]),async clearCache(){this.setCacheFrozen(!0);try{if(localStorage.clear(),sessionStorage.clear(),(await window.indexedDB.databases()).forEach(t=>{t.name&&window.indexedDB.deleteDatabase(t.name)}),"caches"in window){const t=await caches.keys();await Promise.all(t.map(r=>caches.delete(r)))}window.word_cache&&(window.word_cache={}),this.$message.success("缓存清理成功，页面将在3秒后刷新"),await f(300)}catch(n){console.error("清理缓存失败:",n),this.$message.error("清理缓存失败，请重试")}finally{this.setCacheFrozen(!1),window.location.reload(!0)}},goMenu(n){n.action==="clearCache"?this.clearCache():n.action==="toggleFullscreen"?this.setIsFullscreen(!this.isFullscreen):n.route?this.$router.push(n.route):this.$router.replace({path:"/redirect"+this.$route.fullPath}),this.menuOpen=!1}},mounted(){document.addEventListener("mousedown",this.handleGlobalClick),document.addEventListener("touchstart",this.handleGlobalClick),this.snapToEdge()},beforeDestroy(){document.removeEventListener("mousedown",this.handleGlobalClick),document.removeEventListener("touchstart",this.handleGlobalClick)}};var _sfc_render$h=function(){var t=this,r=t._self._c;return r("div",{staticClass:"fab-menu",style:{left:t.pos.left+"px",bottom:t.pos.bottom+"px"},on:{touchstart:t.onDragStart,mousedown:t.onDragStart}},[r("button",{staticClass:"fab-main",on:{click:t.toggleMenu}},[r("Icon",{attrs:{icon:"mdi:plus",width:"28",height:"28"}})],1),r("transition",{attrs:{name:"fab-menu-fade"}},[t.menuOpen?r("div",{staticClass:"fab-menu-list",class:t.expandTo},t._l(t.menuItems,function(s){return r("button",{key:s.action,staticClass:"fab-menu-item",on:{click:function(l){return t.goMenu(s)}}},[r("span",{staticClass:"icon"},[t._v(t._s(s.icon))]),r("span",{staticClass:"label"},[t._v(t._s(s.label))])])}),0):t._e()])],1)},_sfc_staticRenderFns$h=[],__component__$h=normalizeComponent(_sfc_main$h,_sfc_render$h,_sfc_staticRenderFns$h,!1,null,"92a4425a");const FabMenu=__component__$h.exports,_sfc_main$g={name:"App",components:{BackToHome,BackButton,FabMenu},methods:{toggleFullscreen(){toggleFullscreen(this.$el)}},beforeCreate(){initDefaultWordBooks()}};var _sfc_render$g=function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"app"}},[t.$route.path!=="/"?[r("BackButton"),r("BackToHome")]:t._e(),r("router-view"),t._e(),r("FabMenu")],2)},_sfc_staticRenderFns$g=[],__component__$g=normalizeComponent(_sfc_main$g,_sfc_render$g,_sfc_staticRenderFns$g,!1,null,null);const App=__component__$g.exports;/*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */function extend(n,t){for(var r in t)n[r]=t[r];return n}var encodeReserveRE=/[!'()*]/g,encodeReserveReplacer=function(n){return"%"+n.charCodeAt(0).toString(16)},commaRE=/%2C/g,encode=function(n){return encodeURIComponent(n).replace(encodeReserveRE,encodeReserveReplacer).replace(commaRE,",")};function decode(n){try{return decodeURIComponent(n)}catch{}return n}function resolveQuery(n,t,r){t===void 0&&(t={});var s=r||parseQuery,l;try{l=s(n||"")}catch{l={}}for(var b in t){var o=t[b];l[b]=Array.isArray(o)?o.map(castQueryParamValue):castQueryParamValue(o)}return l}var castQueryParamValue=function(n){return n==null||typeof n=="object"?n:String(n)};function parseQuery(n){var t={};return n=n.trim().replace(/^(\?|#|&)/,""),n&&n.split("&").forEach(function(r){var s=r.replace(/\+/g," ").split("="),l=decode(s.shift()),b=s.length>0?decode(s.join("=")):null;t[l]===void 0?t[l]=b:Array.isArray(t[l])?t[l].push(b):t[l]=[t[l],b]}),t}function stringifyQuery(n){var t=n?Object.keys(n).map(function(r){var s=n[r];if(s===void 0)return"";if(s===null)return encode(r);if(Array.isArray(s)){var l=[];return s.forEach(function(b){b!==void 0&&(b===null?l.push(encode(r)):l.push(encode(r)+"="+encode(b)))}),l.join("&")}return encode(r)+"="+encode(s)}).filter(function(r){return r.length>0}).join("&"):null;return t?"?"+t:""}var trailingSlashRE=/\/?$/;function createRoute(n,t,r,s){var l=s&&s.options.stringifyQuery,b=t.query||{};try{b=clone(b)}catch{}var o={name:t.name||n&&n.name,meta:n&&n.meta||{},path:t.path||"/",hash:t.hash||"",query:b,params:t.params||{},fullPath:getFullPath(t,l),matched:n?formatMatch(n):[]};return r&&(o.redirectedFrom=getFullPath(r,l)),Object.freeze(o)}function clone(n){if(Array.isArray(n))return n.map(clone);if(n&&typeof n=="object"){var t={};for(var r in n)t[r]=clone(n[r]);return t}else return n}var START=createRoute(null,{path:"/"});function formatMatch(n){for(var t=[];n;)t.unshift(n),n=n.parent;return t}function getFullPath(n,t){var r=n.path,s=n.query;s===void 0&&(s={});var l=n.hash;l===void 0&&(l="");var b=t||stringifyQuery;return(r||"/")+b(s)+l}function isSameRoute(n,t,r){return t===START?n===t:t?n.path&&t.path?n.path.replace(trailingSlashRE,"")===t.path.replace(trailingSlashRE,"")&&(r||n.hash===t.hash&&isObjectEqual(n.query,t.query)):n.name&&t.name?n.name===t.name&&(r||n.hash===t.hash&&isObjectEqual(n.query,t.query)&&isObjectEqual(n.params,t.params)):!1:!1}function isObjectEqual(n,t){if(n===void 0&&(n={}),t===void 0&&(t={}),!n||!t)return n===t;var r=Object.keys(n).sort(),s=Object.keys(t).sort();return r.length!==s.length?!1:r.every(function(l,b){var o=n[l],B=s[b];if(B!==l)return!1;var Qe=t[l];return o==null||Qe==null?o===Qe:typeof o=="object"&&typeof Qe=="object"?isObjectEqual(o,Qe):String(o)===String(Qe)})}function isIncludedRoute(n,t){return n.path.replace(trailingSlashRE,"/").indexOf(t.path.replace(trailingSlashRE,"/"))===0&&(!t.hash||n.hash===t.hash)&&queryIncludes(n.query,t.query)}function queryIncludes(n,t){for(var r in t)if(!(r in n))return!1;return!0}function handleRouteEntered(n){for(var t=0;t<n.matched.length;t++){var r=n.matched[t];for(var s in r.instances){var l=r.instances[s],b=r.enteredCbs[s];if(!(!l||!b)){delete r.enteredCbs[s];for(var o=0;o<b.length;o++)l._isBeingDestroyed||b[o](l)}}}}var View={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,r){var s=r.props,l=r.children,b=r.parent,o=r.data;o.routerView=!0;for(var B=b.$createElement,Qe=s.name,at=b.$route,ot=b._routerViewCache||(b._routerViewCache={}),ct=0,ut=!1;b&&b._routerRoot!==b;){var lt=b.$vnode?b.$vnode.data:{};lt.routerView&&ct++,lt.keepAlive&&b._directInactive&&b._inactive&&(ut=!0),b=b.$parent}if(o.routerViewDepth=ct,ut){var ea=ot[Qe],ta=ea&&ea.component;return ta?(ea.configProps&&fillPropsinData(ta,o,ea.route,ea.configProps),B(ta,o,l)):B()}var ra=at.matched[ct],aa=ra&&ra.components[Qe];if(!ra||!aa)return ot[Qe]=null,B();ot[Qe]={component:aa},o.registerRouteInstance=function(la,ba){var _a=ra.instances[Qe];(ba&&_a!==la||!ba&&_a===la)&&(ra.instances[Qe]=ba)},(o.hook||(o.hook={})).prepatch=function(la,ba){ra.instances[Qe]=ba.componentInstance},o.hook.init=function(la){la.data.keepAlive&&la.componentInstance&&la.componentInstance!==ra.instances[Qe]&&(ra.instances[Qe]=la.componentInstance),handleRouteEntered(at)};var ia=ra.props&&ra.props[Qe];return ia&&(extend(ot[Qe],{route:at,configProps:ia}),fillPropsinData(aa,o,at,ia)),B(aa,o,l)}};function fillPropsinData(n,t,r,s){var l=t.props=resolveProps(r,s);if(l){l=t.props=extend({},l);var b=t.attrs=t.attrs||{};for(var o in l)(!n.props||!(o in n.props))&&(b[o]=l[o],delete l[o])}}function resolveProps(n,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(n);case"boolean":return t?n.params:void 0}}function resolvePath(n,t,r){var s=n.charAt(0);if(s==="/")return n;if(s==="?"||s==="#")return t+n;var l=t.split("/");(!r||!l[l.length-1])&&l.pop();for(var b=n.replace(/^\//,"").split("/"),o=0;o<b.length;o++){var B=b[o];B===".."?l.pop():B!=="."&&l.push(B)}return l[0]!==""&&l.unshift(""),l.join("/")}function parsePath(n){var t="",r="",s=n.indexOf("#");s>=0&&(t=n.slice(s),n=n.slice(0,s));var l=n.indexOf("?");return l>=0&&(r=n.slice(l+1),n=n.slice(0,l)),{path:n,query:r,hash:t}}function cleanPath(n){return n.replace(/\/(?:\s*\/)+/g,"/")}var isarray=Array.isArray||function(n){return Object.prototype.toString.call(n)=="[object Array]"},pathToRegexp_1=pathToRegexp,parse_1=parse,compile_1=compile,tokensToFunction_1=tokensToFunction,tokensToRegExp_1=tokensToRegExp,PATH_REGEXP=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function parse(n,t){for(var r=[],s=0,l=0,b="",o=t&&t.delimiter||"/",B;(B=PATH_REGEXP.exec(n))!=null;){var Qe=B[0],at=B[1],ot=B.index;if(b+=n.slice(l,ot),l=ot+Qe.length,at){b+=at[1];continue}var ct=n[l],ut=B[2],lt=B[3],ea=B[4],ta=B[5],ra=B[6],aa=B[7];b&&(r.push(b),b="");var ia=ut!=null&&ct!=null&&ct!==ut,la=ra==="+"||ra==="*",ba=ra==="?"||ra==="*",_a=B[2]||o,sa=ea||ta;r.push({name:lt||s++,prefix:ut||"",delimiter:_a,optional:ba,repeat:la,partial:ia,asterisk:!!aa,pattern:sa?escapeGroup(sa):aa?".*":"[^"+escapeString(_a)+"]+?"})}return l<n.length&&(b+=n.substr(l)),b&&r.push(b),r}function compile(n,t){return tokensToFunction(parse(n,t),t)}function encodeURIComponentPretty(n){return encodeURI(n).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function encodeAsterisk(n){return encodeURI(n).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function tokensToFunction(n,t){for(var r=new Array(n.length),s=0;s<n.length;s++)typeof n[s]=="object"&&(r[s]=new RegExp("^(?:"+n[s].pattern+")$",flags(t)));return function(l,b){for(var o="",B=l||{},Qe=b||{},at=Qe.pretty?encodeURIComponentPretty:encodeURIComponent,ot=0;ot<n.length;ot++){var ct=n[ot];if(typeof ct=="string"){o+=ct;continue}var ut=B[ct.name],lt;if(ut==null)if(ct.optional){ct.partial&&(o+=ct.prefix);continue}else throw new TypeError('Expected "'+ct.name+'" to be defined');if(isarray(ut)){if(!ct.repeat)throw new TypeError('Expected "'+ct.name+'" to not repeat, but received `'+JSON.stringify(ut)+"`");if(ut.length===0){if(ct.optional)continue;throw new TypeError('Expected "'+ct.name+'" to not be empty')}for(var ea=0;ea<ut.length;ea++){if(lt=at(ut[ea]),!r[ot].test(lt))throw new TypeError('Expected all "'+ct.name+'" to match "'+ct.pattern+'", but received `'+JSON.stringify(lt)+"`");o+=(ea===0?ct.prefix:ct.delimiter)+lt}continue}if(lt=ct.asterisk?encodeAsterisk(ut):at(ut),!r[ot].test(lt))throw new TypeError('Expected "'+ct.name+'" to match "'+ct.pattern+'", but received "'+lt+'"');o+=ct.prefix+lt}return o}}function escapeString(n){return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function escapeGroup(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function attachKeys(n,t){return n.keys=t,n}function flags(n){return n&&n.sensitive?"":"i"}function regexpToRegexp(n,t){var r=n.source.match(/\((?!\?)/g);if(r)for(var s=0;s<r.length;s++)t.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return attachKeys(n,t)}function arrayToRegexp(n,t,r){for(var s=[],l=0;l<n.length;l++)s.push(pathToRegexp(n[l],t,r).source);var b=new RegExp("(?:"+s.join("|")+")",flags(r));return attachKeys(b,t)}function stringToRegexp(n,t,r){return tokensToRegExp(parse(n,r),t,r)}function tokensToRegExp(n,t,r){isarray(t)||(r=t||r,t=[]),r=r||{};for(var s=r.strict,l=r.end!==!1,b="",o=0;o<n.length;o++){var B=n[o];if(typeof B=="string")b+=escapeString(B);else{var Qe=escapeString(B.prefix),at="(?:"+B.pattern+")";t.push(B),B.repeat&&(at+="(?:"+Qe+at+")*"),B.optional?B.partial?at=Qe+"("+at+")?":at="(?:"+Qe+"("+at+"))?":at=Qe+"("+at+")",b+=at}}var ot=escapeString(r.delimiter||"/"),ct=b.slice(-ot.length)===ot;return s||(b=(ct?b.slice(0,-ot.length):b)+"(?:"+ot+"(?=$))?"),l?b+="$":b+=s&&ct?"":"(?="+ot+"|$)",attachKeys(new RegExp("^"+b,flags(r)),t)}function pathToRegexp(n,t,r){return isarray(t)||(r=t||r,t=[]),r=r||{},n instanceof RegExp?regexpToRegexp(n,t):isarray(n)?arrayToRegexp(n,t,r):stringToRegexp(n,t,r)}pathToRegexp_1.parse=parse_1;pathToRegexp_1.compile=compile_1;pathToRegexp_1.tokensToFunction=tokensToFunction_1;pathToRegexp_1.tokensToRegExp=tokensToRegExp_1;var regexpCompileCache=Object.create(null);function fillParams(n,t,r){t=t||{};try{var s=regexpCompileCache[n]||(regexpCompileCache[n]=pathToRegexp_1.compile(n));return typeof t.pathMatch=="string"&&(t[0]=t.pathMatch),s(t,{pretty:!0})}catch{return""}finally{delete t[0]}}function normalizeLocation(n,t,r,s){var l=typeof n=="string"?{path:n}:n;if(l._normalized)return l;if(l.name){l=extend({},n);var b=l.params;return b&&typeof b=="object"&&(l.params=extend({},b)),l}if(!l.path&&l.params&&t){l=extend({},l),l._normalized=!0;var o=extend(extend({},t.params),l.params);if(t.name)l.name=t.name,l.params=o;else if(t.matched.length){var B=t.matched[t.matched.length-1].path;l.path=fillParams(B,o,"path "+t.path)}return l}var Qe=parsePath(l.path||""),at=t&&t.path||"/",ot=Qe.path?resolvePath(Qe.path,at,r||l.append):at,ct=resolveQuery(Qe.query,l.query,s&&s.options.parseQuery),ut=l.hash||Qe.hash;return ut&&ut.charAt(0)!=="#"&&(ut="#"+ut),{_normalized:!0,path:ot,query:ct,hash:ut}}var toTypes=[String,Object],eventTypes=[String,Array],noop=function(){},Link={name:"RouterLink",props:{to:{type:toTypes,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:eventTypes,default:"click"}},render:function(t){var r=this,s=this.$router,l=this.$route,b=s.resolve(this.to,l,this.append),o=b.location,B=b.route,Qe=b.href,at={},ot=s.options.linkActiveClass,ct=s.options.linkExactActiveClass,ut=ot??"router-link-active",lt=ct??"router-link-exact-active",ea=this.activeClass==null?ut:this.activeClass,ta=this.exactActiveClass==null?lt:this.exactActiveClass,ra=B.redirectedFrom?createRoute(null,normalizeLocation(B.redirectedFrom),null,s):B;at[ta]=isSameRoute(l,ra,this.exactPath),at[ea]=this.exact||this.exactPath?at[ta]:isIncludedRoute(l,ra);var aa=at[ta]?this.ariaCurrentValue:null,ia=function(fa){guardEvent(fa)&&(r.replace?s.replace(o,noop):s.push(o,noop))},la={click:guardEvent};Array.isArray(this.event)?this.event.forEach(function(fa){la[fa]=ia}):la[this.event]=ia;var ba={class:at},_a=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:Qe,route:B,navigate:ia,isActive:at[ea],isExactActive:at[ta]});if(_a){if(_a.length===1)return _a[0];if(_a.length>1||!_a.length)return _a.length===0?t():t("span",{},_a)}if(this.tag==="a")ba.on=la,ba.attrs={href:Qe,"aria-current":aa};else{var sa=findAnchor(this.$slots.default);if(sa){sa.isStatic=!1;var ua=sa.data=extend({},sa.data);ua.on=ua.on||{};for(var ma in ua.on){var $a=ua.on[ma];ma in la&&(ua.on[ma]=Array.isArray($a)?$a:[$a])}for(var Da in la)Da in ua.on?ua.on[Da].push(la[Da]):ua.on[Da]=ia;var Ma=sa.data.attrs=extend({},sa.data.attrs);Ma.href=Qe,Ma["aria-current"]=aa}else ba.on=la}return t(this.tag,ba,this.$slots.default)}};function guardEvent(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){var t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function findAnchor(n){if(n){for(var t,r=0;r<n.length;r++)if(t=n[r],t.tag==="a"||t.children&&(t=findAnchor(t.children)))return t}}var _Vue;function install(n){if(!(install.installed&&_Vue===n)){install.installed=!0,_Vue=n;var t=function(l){return l!==void 0},r=function(l,b){var o=l.$options._parentVnode;t(o)&&t(o=o.data)&&t(o=o.registerRouteInstance)&&o(l,b)};n.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),n.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(n.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(n.prototype,"$route",{get:function(){return this._routerRoot._route}}),n.component("RouterView",View),n.component("RouterLink",Link);var s=n.config.optionMergeStrategies;s.beforeRouteEnter=s.beforeRouteLeave=s.beforeRouteUpdate=s.created}}var inBrowser=typeof window<"u";function createRouteMap(n,t,r,s,l){var b=t||[],o=r||Object.create(null),B=s||Object.create(null);n.forEach(function(ot){addRouteRecord(b,o,B,ot,l)});for(var Qe=0,at=b.length;Qe<at;Qe++)b[Qe]==="*"&&(b.push(b.splice(Qe,1)[0]),at--,Qe--);return{pathList:b,pathMap:o,nameMap:B}}function addRouteRecord(n,t,r,s,l,b){var o=s.path,B=s.name,Qe=s.pathToRegexpOptions||{},at=normalizePath(o,l,Qe.strict);typeof s.caseSensitive=="boolean"&&(Qe.sensitive=s.caseSensitive);var ot={path:at,regex:compileRouteRegex(at,Qe),components:s.components||{default:s.component},alias:s.alias?typeof s.alias=="string"?[s.alias]:s.alias:[],instances:{},enteredCbs:{},name:B,parent:l,matchAs:b,redirect:s.redirect,beforeEnter:s.beforeEnter,meta:s.meta||{},props:s.props==null?{}:s.components?s.props:{default:s.props}};if(s.children&&s.children.forEach(function(ta){var ra=b?cleanPath(b+"/"+ta.path):void 0;addRouteRecord(n,t,r,ta,ot,ra)}),t[ot.path]||(n.push(ot.path),t[ot.path]=ot),s.alias!==void 0)for(var ct=Array.isArray(s.alias)?s.alias:[s.alias],ut=0;ut<ct.length;++ut){var lt=ct[ut],ea={path:lt,children:s.children};addRouteRecord(n,t,r,ea,l,ot.path||"/")}B&&(r[B]||(r[B]=ot))}function compileRouteRegex(n,t){var r=pathToRegexp_1(n,[],t);return r}function normalizePath(n,t,r){return r||(n=n.replace(/\/$/,"")),n[0]==="/"||t==null?n:cleanPath(t.path+"/"+n)}function createMatcher(n,t){var r=createRouteMap(n),s=r.pathList,l=r.pathMap,b=r.nameMap;function o(lt){createRouteMap(lt,s,l,b)}function B(lt,ea){var ta=typeof lt!="object"?b[lt]:void 0;createRouteMap([ea||lt],s,l,b,ta),ta&&ta.alias.length&&createRouteMap(ta.alias.map(function(ra){return{path:ra,children:[ea]}}),s,l,b,ta)}function Qe(){return s.map(function(lt){return l[lt]})}function at(lt,ea,ta){var ra=normalizeLocation(lt,ea,!1,t),aa=ra.name;if(aa){var ia=b[aa];if(!ia)return ut(null,ra);var la=ia.regex.keys.filter(function(ma){return!ma.optional}).map(function(ma){return ma.name});if(typeof ra.params!="object"&&(ra.params={}),ea&&typeof ea.params=="object")for(var ba in ea.params)!(ba in ra.params)&&la.indexOf(ba)>-1&&(ra.params[ba]=ea.params[ba]);return ra.path=fillParams(ia.path,ra.params),ut(ia,ra,ta)}else if(ra.path){ra.params={};for(var _a=0;_a<s.length;_a++){var sa=s[_a],ua=l[sa];if(matchRoute(ua.regex,ra.path,ra.params))return ut(ua,ra,ta)}}return ut(null,ra)}function ot(lt,ea){var ta=lt.redirect,ra=typeof ta=="function"?ta(createRoute(lt,ea,null,t)):ta;if(typeof ra=="string"&&(ra={path:ra}),!ra||typeof ra!="object")return ut(null,ea);var aa=ra,ia=aa.name,la=aa.path,ba=ea.query,_a=ea.hash,sa=ea.params;if(ba=aa.hasOwnProperty("query")?aa.query:ba,_a=aa.hasOwnProperty("hash")?aa.hash:_a,sa=aa.hasOwnProperty("params")?aa.params:sa,ia)return b[ia],at({_normalized:!0,name:ia,query:ba,hash:_a,params:sa},void 0,ea);if(la){var ua=resolveRecordPath(la,lt),ma=fillParams(ua,sa);return at({_normalized:!0,path:ma,query:ba,hash:_a},void 0,ea)}else return ut(null,ea)}function ct(lt,ea,ta){var ra=fillParams(ta,ea.params),aa=at({_normalized:!0,path:ra});if(aa){var ia=aa.matched,la=ia[ia.length-1];return ea.params=aa.params,ut(la,ea)}return ut(null,ea)}function ut(lt,ea,ta){return lt&&lt.redirect?ot(lt,ta||ea):lt&&lt.matchAs?ct(lt,ea,lt.matchAs):createRoute(lt,ea,ta,t)}return{match:at,addRoute:B,getRoutes:Qe,addRoutes:o}}function matchRoute(n,t,r){var s=t.match(n);if(s){if(!r)return!0}else return!1;for(var l=1,b=s.length;l<b;++l){var o=n.keys[l-1];o&&(r[o.name||"pathMatch"]=typeof s[l]=="string"?decode(s[l]):s[l])}return!0}function resolveRecordPath(n,t){return resolvePath(n,t.parent?t.parent.path:"/",!0)}var Time=inBrowser&&window.performance&&window.performance.now?window.performance:Date;function genStateKey(){return Time.now().toFixed(3)}var _key=genStateKey();function getStateKey(){return _key}function setStateKey(n){return _key=n}var positionStore=Object.create(null);function setupScroll(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var n=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(n,""),r=extend({},window.history.state);return r.key=getStateKey(),window.history.replaceState(r,"",t),window.addEventListener("popstate",handlePopState),function(){window.removeEventListener("popstate",handlePopState)}}function handleScroll(n,t,r,s){if(n.app){var l=n.options.scrollBehavior;l&&n.app.$nextTick(function(){var b=getScrollPosition(),o=l.call(n,t,r,s?b:null);o&&(typeof o.then=="function"?o.then(function(B){scrollToPosition(B,b)}).catch(function(B){}):scrollToPosition(o,b))})}}function saveScrollPosition(){var n=getStateKey();n&&(positionStore[n]={x:window.pageXOffset,y:window.pageYOffset})}function handlePopState(n){saveScrollPosition(),n.state&&n.state.key&&setStateKey(n.state.key)}function getScrollPosition(){var n=getStateKey();if(n)return positionStore[n]}function getElementPosition(n,t){var r=document.documentElement,s=r.getBoundingClientRect(),l=n.getBoundingClientRect();return{x:l.left-s.left-t.x,y:l.top-s.top-t.y}}function isValidPosition(n){return isNumber(n.x)||isNumber(n.y)}function normalizePosition(n){return{x:isNumber(n.x)?n.x:window.pageXOffset,y:isNumber(n.y)?n.y:window.pageYOffset}}function normalizeOffset(n){return{x:isNumber(n.x)?n.x:0,y:isNumber(n.y)?n.y:0}}function isNumber(n){return typeof n=="number"}var hashStartsWithNumberRE=/^#\d/;function scrollToPosition(n,t){var r=typeof n=="object";if(r&&typeof n.selector=="string"){var s=hashStartsWithNumberRE.test(n.selector)?document.getElementById(n.selector.slice(1)):document.querySelector(n.selector);if(s){var l=n.offset&&typeof n.offset=="object"?n.offset:{};l=normalizeOffset(l),t=getElementPosition(s,l)}else isValidPosition(n)&&(t=normalizePosition(n))}else r&&isValidPosition(n)&&(t=normalizePosition(n));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:n.behavior}):window.scrollTo(t.x,t.y))}var supportsPushState=inBrowser&&function(){var n=window.navigator.userAgent;return(n.indexOf("Android 2.")!==-1||n.indexOf("Android 4.0")!==-1)&&n.indexOf("Mobile Safari")!==-1&&n.indexOf("Chrome")===-1&&n.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function pushState(n,t){saveScrollPosition();var r=window.history;try{if(t){var s=extend({},r.state);s.key=getStateKey(),r.replaceState(s,"",n)}else r.pushState({key:setStateKey(genStateKey())},"",n)}catch{window.location[t?"replace":"assign"](n)}}function replaceState(n){pushState(n,!0)}var NavigationFailureType={redirected:2,aborted:4,cancelled:8,duplicated:16};function createNavigationRedirectedError(n,t){return createRouterError(n,t,NavigationFailureType.redirected,'Redirected when going from "'+n.fullPath+'" to "'+stringifyRoute(t)+'" via a navigation guard.')}function createNavigationDuplicatedError(n,t){var r=createRouterError(n,t,NavigationFailureType.duplicated,'Avoided redundant navigation to current location: "'+n.fullPath+'".');return r.name="NavigationDuplicated",r}function createNavigationCancelledError(n,t){return createRouterError(n,t,NavigationFailureType.cancelled,'Navigation cancelled from "'+n.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function createNavigationAbortedError(n,t){return createRouterError(n,t,NavigationFailureType.aborted,'Navigation aborted from "'+n.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function createRouterError(n,t,r,s){var l=new Error(s);return l._isRouter=!0,l.from=n,l.to=t,l.type=r,l}var propertiesToLog=["params","query","hash"];function stringifyRoute(n){if(typeof n=="string")return n;if("path"in n)return n.path;var t={};return propertiesToLog.forEach(function(r){r in n&&(t[r]=n[r])}),JSON.stringify(t,null,2)}function isError(n){return Object.prototype.toString.call(n).indexOf("Error")>-1}function isNavigationFailure(n,t){return isError(n)&&n._isRouter&&(t==null||n.type===t)}function runQueue(n,t,r){var s=function(l){l>=n.length?r():n[l]?t(n[l],function(){s(l+1)}):s(l+1)};s(0)}function resolveAsyncComponents(n){return function(t,r,s){var l=!1,b=0,o=null;flatMapComponents(n,function(B,Qe,at,ot){if(typeof B=="function"&&B.cid===void 0){l=!0,b++;var ct=once(function(ta){isESModule(ta)&&(ta=ta.default),B.resolved=typeof ta=="function"?ta:_Vue.extend(ta),at.components[ot]=ta,b--,b<=0&&s()}),ut=once(function(ta){var ra="Failed to resolve async component "+ot+": "+ta;o||(o=isError(ta)?ta:new Error(ra),s(o))}),lt;try{lt=B(ct,ut)}catch(ta){ut(ta)}if(lt)if(typeof lt.then=="function")lt.then(ct,ut);else{var ea=lt.component;ea&&typeof ea.then=="function"&&ea.then(ct,ut)}}}),l||s()}}function flatMapComponents(n,t){return flatten(n.map(function(r){return Object.keys(r.components).map(function(s){return t(r.components[s],r.instances[s],r,s)})}))}function flatten(n){return Array.prototype.concat.apply([],n)}var hasSymbol=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function isESModule(n){return n.__esModule||hasSymbol&&n[Symbol.toStringTag]==="Module"}function once(n){var t=!1;return function(){for(var r=[],s=arguments.length;s--;)r[s]=arguments[s];if(!t)return t=!0,n.apply(this,r)}}var History=function(t,r){this.router=t,this.base=normalizeBase(r),this.current=START,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};History.prototype.listen=function(t){this.cb=t};History.prototype.onReady=function(t,r){this.ready?t():(this.readyCbs.push(t),r&&this.readyErrorCbs.push(r))};History.prototype.onError=function(t){this.errorCbs.push(t)};History.prototype.transitionTo=function(t,r,s){var l=this,b;try{b=this.router.match(t,this.current)}catch(B){throw this.errorCbs.forEach(function(Qe){Qe(B)}),B}var o=this.current;this.confirmTransition(b,function(){l.updateRoute(b),r&&r(b),l.ensureURL(),l.router.afterHooks.forEach(function(B){B&&B(b,o)}),l.ready||(l.ready=!0,l.readyCbs.forEach(function(B){B(b)}))},function(B){s&&s(B),B&&!l.ready&&(!isNavigationFailure(B,NavigationFailureType.redirected)||o!==START)&&(l.ready=!0,l.readyErrorCbs.forEach(function(Qe){Qe(B)}))})};History.prototype.confirmTransition=function(t,r,s){var l=this,b=this.current;this.pending=t;var o=function(ta){!isNavigationFailure(ta)&&isError(ta)&&(l.errorCbs.length?l.errorCbs.forEach(function(ra){ra(ta)}):console.error(ta)),s&&s(ta)},B=t.matched.length-1,Qe=b.matched.length-1;if(isSameRoute(t,b)&&B===Qe&&t.matched[B]===b.matched[Qe])return this.ensureURL(),t.hash&&handleScroll(this.router,b,t,!1),o(createNavigationDuplicatedError(b,t));var at=resolveQueue(this.current.matched,t.matched),ot=at.updated,ct=at.deactivated,ut=at.activated,lt=[].concat(extractLeaveGuards(ct),this.router.beforeHooks,extractUpdateHooks(ot),ut.map(function(ta){return ta.beforeEnter}),resolveAsyncComponents(ut)),ea=function(ta,ra){if(l.pending!==t)return o(createNavigationCancelledError(b,t));try{ta(t,b,function(aa){aa===!1?(l.ensureURL(!0),o(createNavigationAbortedError(b,t))):isError(aa)?(l.ensureURL(!0),o(aa)):typeof aa=="string"||typeof aa=="object"&&(typeof aa.path=="string"||typeof aa.name=="string")?(o(createNavigationRedirectedError(b,t)),typeof aa=="object"&&aa.replace?l.replace(aa):l.push(aa)):ra(aa)})}catch(aa){o(aa)}};runQueue(lt,ea,function(){var ta=extractEnterGuards(ut),ra=ta.concat(l.router.resolveHooks);runQueue(ra,ea,function(){if(l.pending!==t)return o(createNavigationCancelledError(b,t));l.pending=null,r(t),l.router.app&&l.router.app.$nextTick(function(){handleRouteEntered(t)})})})};History.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)};History.prototype.setupListeners=function(){};History.prototype.teardown=function(){this.listeners.forEach(function(t){t()}),this.listeners=[],this.current=START,this.pending=null};function normalizeBase(n){if(!n)if(inBrowser){var t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^https?:\/\/[^\/]+/,"")}else n="/";return n.charAt(0)!=="/"&&(n="/"+n),n.replace(/\/$/,"")}function resolveQueue(n,t){var r,s=Math.max(n.length,t.length);for(r=0;r<s&&n[r]===t[r];r++);return{updated:t.slice(0,r),activated:t.slice(r),deactivated:n.slice(r)}}function extractGuards(n,t,r,s){var l=flatMapComponents(n,function(b,o,B,Qe){var at=extractGuard(b,t);if(at)return Array.isArray(at)?at.map(function(ot){return r(ot,o,B,Qe)}):r(at,o,B,Qe)});return flatten(s?l.reverse():l)}function extractGuard(n,t){return typeof n!="function"&&(n=_Vue.extend(n)),n.options[t]}function extractLeaveGuards(n){return extractGuards(n,"beforeRouteLeave",bindGuard,!0)}function extractUpdateHooks(n){return extractGuards(n,"beforeRouteUpdate",bindGuard)}function bindGuard(n,t){if(t)return function(){return n.apply(t,arguments)}}function extractEnterGuards(n){return extractGuards(n,"beforeRouteEnter",function(t,r,s,l){return bindEnterGuard(t,s,l)})}function bindEnterGuard(n,t,r){return function(l,b,o){return n(l,b,function(B){typeof B=="function"&&(t.enteredCbs[r]||(t.enteredCbs[r]=[]),t.enteredCbs[r].push(B)),o(B)})}}var HTML5History=function(n){function t(r,s){n.call(this,r,s),this._startLocation=getLocation(this.base)}return n&&(t.__proto__=n),t.prototype=Object.create(n&&n.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var s=this;if(!(this.listeners.length>0)){var l=this.router,b=l.options.scrollBehavior,o=supportsPushState&&b;o&&this.listeners.push(setupScroll());var B=function(){var Qe=s.current,at=getLocation(s.base);s.current===START&&at===s._startLocation||s.transitionTo(at,function(ot){o&&handleScroll(l,ot,Qe,!0)})};window.addEventListener("popstate",B),this.listeners.push(function(){window.removeEventListener("popstate",B)})}},t.prototype.go=function(s){window.history.go(s)},t.prototype.push=function(s,l,b){var o=this,B=this,Qe=B.current;this.transitionTo(s,function(at){pushState(cleanPath(o.base+at.fullPath)),handleScroll(o.router,at,Qe,!1),l&&l(at)},b)},t.prototype.replace=function(s,l,b){var o=this,B=this,Qe=B.current;this.transitionTo(s,function(at){replaceState(cleanPath(o.base+at.fullPath)),handleScroll(o.router,at,Qe,!1),l&&l(at)},b)},t.prototype.ensureURL=function(s){if(getLocation(this.base)!==this.current.fullPath){var l=cleanPath(this.base+this.current.fullPath);s?pushState(l):replaceState(l)}},t.prototype.getCurrentLocation=function(){return getLocation(this.base)},t}(History);function getLocation(n){var t=window.location.pathname,r=t.toLowerCase(),s=n.toLowerCase();return n&&(r===s||r.indexOf(cleanPath(s+"/"))===0)&&(t=t.slice(n.length)),(t||"/")+window.location.search+window.location.hash}var HashHistory=function(n){function t(r,s,l){n.call(this,r,s),!(l&&checkFallback(this.base))&&ensureSlash()}return n&&(t.__proto__=n),t.prototype=Object.create(n&&n.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var s=this;if(!(this.listeners.length>0)){var l=this.router,b=l.options.scrollBehavior,o=supportsPushState&&b;o&&this.listeners.push(setupScroll());var B=function(){var at=s.current;ensureSlash()&&s.transitionTo(getHash(),function(ot){o&&handleScroll(s.router,ot,at,!0),supportsPushState||replaceHash(ot.fullPath)})},Qe=supportsPushState?"popstate":"hashchange";window.addEventListener(Qe,B),this.listeners.push(function(){window.removeEventListener(Qe,B)})}},t.prototype.push=function(s,l,b){var o=this,B=this,Qe=B.current;this.transitionTo(s,function(at){pushHash(at.fullPath),handleScroll(o.router,at,Qe,!1),l&&l(at)},b)},t.prototype.replace=function(s,l,b){var o=this,B=this,Qe=B.current;this.transitionTo(s,function(at){replaceHash(at.fullPath),handleScroll(o.router,at,Qe,!1),l&&l(at)},b)},t.prototype.go=function(s){window.history.go(s)},t.prototype.ensureURL=function(s){var l=this.current.fullPath;getHash()!==l&&(s?pushHash(l):replaceHash(l))},t.prototype.getCurrentLocation=function(){return getHash()},t}(History);function checkFallback(n){var t=getLocation(n);if(!/^\/#/.test(t))return window.location.replace(cleanPath(n+"/#"+t)),!0}function ensureSlash(){var n=getHash();return n.charAt(0)==="/"?!0:(replaceHash("/"+n),!1)}function getHash(){var n=window.location.href,t=n.indexOf("#");return t<0?"":(n=n.slice(t+1),n)}function getUrl(n){var t=window.location.href,r=t.indexOf("#"),s=r>=0?t.slice(0,r):t;return s+"#"+n}function pushHash(n){supportsPushState?pushState(getUrl(n)):window.location.hash=n}function replaceHash(n){supportsPushState?replaceState(getUrl(n)):window.location.replace(getUrl(n))}var AbstractHistory=function(n){function t(r,s){n.call(this,r,s),this.stack=[],this.index=-1}return n&&(t.__proto__=n),t.prototype=Object.create(n&&n.prototype),t.prototype.constructor=t,t.prototype.push=function(s,l,b){var o=this;this.transitionTo(s,function(B){o.stack=o.stack.slice(0,o.index+1).concat(B),o.index++,l&&l(B)},b)},t.prototype.replace=function(s,l,b){var o=this;this.transitionTo(s,function(B){o.stack=o.stack.slice(0,o.index).concat(B),l&&l(B)},b)},t.prototype.go=function(s){var l=this,b=this.index+s;if(!(b<0||b>=this.stack.length)){var o=this.stack[b];this.confirmTransition(o,function(){var B=l.current;l.index=b,l.updateRoute(o),l.router.afterHooks.forEach(function(Qe){Qe&&Qe(o,B)})},function(B){isNavigationFailure(B,NavigationFailureType.duplicated)&&(l.index=b)})}},t.prototype.getCurrentLocation=function(){var s=this.stack[this.stack.length-1];return s?s.fullPath:"/"},t.prototype.ensureURL=function(){},t}(History),VueRouter=function(t){t===void 0&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=createMatcher(t.routes||[],this);var r=t.mode||"hash";switch(this.fallback=r==="history"&&!supportsPushState&&t.fallback!==!1,this.fallback&&(r="hash"),inBrowser||(r="abstract"),this.mode=r,r){case"history":this.history=new HTML5History(this,t.base);break;case"hash":this.history=new HashHistory(this,t.base,this.fallback);break;case"abstract":this.history=new AbstractHistory(this,t.base);break}},prototypeAccessors={currentRoute:{configurable:!0}};VueRouter.prototype.match=function(t,r,s){return this.matcher.match(t,r,s)};prototypeAccessors.currentRoute.get=function(){return this.history&&this.history.current};VueRouter.prototype.init=function(t){var r=this;if(this.apps.push(t),t.$once("hook:destroyed",function(){var o=r.apps.indexOf(t);o>-1&&r.apps.splice(o,1),r.app===t&&(r.app=r.apps[0]||null),r.app||r.history.teardown()}),!this.app){this.app=t;var s=this.history;if(s instanceof HTML5History||s instanceof HashHistory){var l=function(o){var B=s.current,Qe=r.options.scrollBehavior,at=supportsPushState&&Qe;at&&"fullPath"in o&&handleScroll(r,o,B,!1)},b=function(o){s.setupListeners(),l(o)};s.transitionTo(s.getCurrentLocation(),b,b)}s.listen(function(o){r.apps.forEach(function(B){B._route=o})})}};VueRouter.prototype.beforeEach=function(t){return registerHook(this.beforeHooks,t)};VueRouter.prototype.beforeResolve=function(t){return registerHook(this.resolveHooks,t)};VueRouter.prototype.afterEach=function(t){return registerHook(this.afterHooks,t)};VueRouter.prototype.onReady=function(t,r){this.history.onReady(t,r)};VueRouter.prototype.onError=function(t){this.history.onError(t)};VueRouter.prototype.push=function(t,r,s){var l=this;if(!r&&!s&&typeof Promise<"u")return new Promise(function(b,o){l.history.push(t,b,o)});this.history.push(t,r,s)};VueRouter.prototype.replace=function(t,r,s){var l=this;if(!r&&!s&&typeof Promise<"u")return new Promise(function(b,o){l.history.replace(t,b,o)});this.history.replace(t,r,s)};VueRouter.prototype.go=function(t){this.history.go(t)};VueRouter.prototype.back=function(){this.go(-1)};VueRouter.prototype.forward=function(){this.go(1)};VueRouter.prototype.getMatchedComponents=function(t){var r=t?t.matched?t:this.resolve(t).route:this.currentRoute;return r?[].concat.apply([],r.matched.map(function(s){return Object.keys(s.components).map(function(l){return s.components[l]})})):[]};VueRouter.prototype.resolve=function(t,r,s){r=r||this.history.current;var l=normalizeLocation(t,r,s,this),b=this.match(l,r),o=b.redirectedFrom||b.fullPath,B=this.history.base,Qe=createHref(B,o,this.mode);return{location:l,route:b,href:Qe,normalizedTo:l,resolved:b}};VueRouter.prototype.getRoutes=function(){return this.matcher.getRoutes()};VueRouter.prototype.addRoute=function(t,r){this.matcher.addRoute(t,r),this.history.current!==START&&this.history.transitionTo(this.history.getCurrentLocation())};VueRouter.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==START&&this.history.transitionTo(this.history.getCurrentLocation())};Object.defineProperties(VueRouter.prototype,prototypeAccessors);var VueRouter$1=VueRouter;function registerHook(n,t){return n.push(t),function(){var r=n.indexOf(t);r>-1&&n.splice(r,1)}}function createHref(n,t,r){var s=r==="hash"?"#"+t:t;return n?cleanPath(n+"/"+s):s}VueRouter.install=install;VueRouter.version="3.6.5";VueRouter.isNavigationFailure=isNavigationFailure;VueRouter.NavigationFailureType=NavigationFailureType;VueRouter.START_LOCATION=START;inBrowser&&window.Vue&&window.Vue.use(VueRouter);const _sfc_main$f={name:"ImageTagOverlay",props:["imageUrl","products"],data(){return{imgWidth:1,imgHeight:1,activeIdx:null,popupStyle:{}}},methods:{onImgLoad(){const n=this.$refs.img;this.imgWidth=n.naturalWidth,this.imgHeight=n.naturalHeight},getBoxStyle(n){const t=n.XMin/this.imgWidth*100,r=n.YMin/this.imgHeight*100,s=(n.XMax-n.XMin)/this.imgWidth*100,l=(n.YMax-n.YMin)/this.imgHeight*100;return{position:"absolute",left:t+"%",top:r+"%",width:s+"%",height:l+"%",border:"2px solid #f00",boxSizing:"border-box",cursor:"pointer",zIndex:10}},getScaleX(){const n=this.$refs.img;return n?n.width/this.imgWidth:1},getScaleY(){const n=this.$refs.img;return n?n.height/this.imgHeight:1},showInfo(n,t){this.activeIdx=n,this.popupStyle={position:"absolute",left:t.offsetX+10+"px",top:t.offsetY+10+"px",background:"#fff",border:"1px solid #ccc",padding:"8px",zIndex:100}}}};var _sfc_render$f=function(){var t=this,r=t._self._c;return r("div",{staticStyle:{position:"relative",display:"inline-block"}},[r("img",{ref:"img",attrs:{src:t.imageUrl},on:{load:t.onImgLoad}}),t._l(t.products,function(s,l){return r("div",{key:l,staticClass:"tag-box",style:t.getBoxStyle(s),on:{click:function(b){return t.showInfo(l,b)}}},[r("span",{staticClass:"tag-label"},[t._v(t._s(s.Name))]),t.activeIdx===l?r("div",{staticClass:"tag-popup",style:t.popupStyle},[r("div",[r("strong",[t._v(t._s(s.Name))]),r("br"),t._v(" 分类: "+t._s(s.Parents)),r("br"),t._v(" 置信度: "+t._s(s.Confidence)+"% ")]),r("button",{on:{click:function(b){b.stopPropagation(),t.activeIdx=null}}},[t._v("关闭")])]):t._e()])})],2)},_sfc_staticRenderFns$f=[],__component__$f=normalizeComponent(_sfc_main$f,_sfc_render$f,_sfc_staticRenderFns$f,!1,null,"bf9ecad4");const ImageTagOverlay=__component__$f.exports,_sfc_main$e={name:"RecognitionResult",props:{imageUrl:String,products:Array},components:{ImageTagOverlay}};var _sfc_render$e=function(){var t=this,r=t._self._c;return t.imageUrl&&t.products&&t.products.length?r("div",{staticClass:"card"},[r("ImageTagOverlay",{attrs:{"image-url":t.imageUrl,products:t.products}})],1):t._e()},_sfc_staticRenderFns$e=[],__component__$e=normalizeComponent(_sfc_main$e,_sfc_render$e,_sfc_staticRenderFns$e,!1,null,null);const RecognitionResult=__component__$e.exports,_sfc_main$d={name:"Toast",props:{message:String,type:{type:String,default:"success"},visible:Boolean}};var _sfc_render$d=function(){var t=this,r=t._self._c;return r("transition",{attrs:{name:"fade"}},[t.visible?r("div",{staticClass:"toast",class:t.type},[t.type==="loading"?r("span",{staticClass:"spinner"}):t._e(),r("span",[t._v(t._s(t.message))])]):t._e()])},_sfc_staticRenderFns$d=[],__component__$d=normalizeComponent(_sfc_main$d,_sfc_render$d,_sfc_staticRenderFns$d,!1,null,"c3e7338b");const Toast=__component__$d.exports;let toastQueue=[],isProcessing=!1,timer=null;function processQueue(){if(isProcessing||toastQueue.length===0)return;isProcessing=!0;const{message:n,type:t,duration:r}=toastQueue.shift();let s=new Vue$1.extend(Toast)({propsData:{message:n,type:t,visible:!0}});s.$mount(),document.body.appendChild(s.$el),t!=="loading"&&(timer=setTimeout(()=>{s.visible=!1,setTimeout(()=>{s.$destroy(),document.body.contains(s.$el)&&document.body.removeChild(s.$el),isProcessing=!1,processQueue()},300)},r))}function showToast({message:n,type:t="success",duration:r=2e3}){toastQueue.push({message:n,type:t,duration:r}),processQueue()}function hideToast(){timer&&(clearTimeout(timer),timer=null),toastQueue=[],isProcessing=!1}const $message={success(n,t){showToast({message:n,type:"success",duration:t})},error(n,t){showToast({message:n,type:"error",duration:t})},warning(n,t){showToast({message:n,type:"warning",duration:t})},loading(n){showToast({message:n,type:"loading",duration:999999})},hide:hideToast};function compressImage(n,t=800,r=1600,s=.8){return new Promise((l,b)=>{const o=new window.Image,B=new FileReader;B.onload=Qe=>{o.src=Qe.target.result},o.onload=()=>{let{width:Qe,height:at}=o;if(Qe<=t){l(o.src);return}const ot=Math.min(t/Qe,r/at,1);Qe=Qe*ot,at=at*ot;const ct=document.createElement("canvas");ct.width=Qe,ct.height=at,ct.getContext("2d").drawImage(o,0,0,Qe,at),ct.toBlob(lt=>{const ea=new FileReader;ea.onload=ta=>l(ta.target.result),ea.onerror=b,ea.readAsDataURL(lt)},"image/jpeg",s)},o.onerror=b,B.onerror=b,B.readAsDataURL(n)})}const _sfc_main$c={name:"Recognize",components:{RecognitionResult},data(){return{imageUrl:"",products:[]}},methods:{triggerFileInput(){this.$refs.fileInput.click()},async onFileChange(n){const t=n.target.files[0];if(!t)return;const r=Math.min(window.innerWidth,800),s=r*2,l=await compressImage(t,r,s,.8);this.onImageUploaded(l),this.$refs.fileInput.value=""},async onImageUploaded(n){var t,r,s;this.imageUrl=n,this.products=[];try{$message.loading("识别中..");const l=await recognizeApi({ImageBase64:n});l.data.success?($message.success("识别成功"),((s=(r=(t=l==null?void 0:l.data)==null?void 0:t.data)==null?void 0:r.Products)==null?void 0:s.length)===0?$message.error("没有识别到物体"):this.products=l.data.data.Products):$message.error("识别失败")}catch{$message.error("识别失败")}this.$forceUpdate()}},beforeMount(){this.$route.query.auto}};var _sfc_render$c=function(){var t=this,r=t._self._c;return r("div",{staticClass:"recognize-page",attrs:{id:"app"}},[t._m(0),r("div",{staticClass:"recognize-card-group"},[r("div",{staticClass:"recognize-card upload-card"},[r("div",{staticClass:"upload-dropzone",on:{click:t.triggerFileInput}},[r("svg",{staticClass:"upload-icon",attrs:{width:"48",height:"48",viewBox:"0 0 48 48"}},[r("g",{attrs:{fill:"none",stroke:"#3578e5","stroke-width":"2.5"}},[r("rect",{attrs:{x:"6",y:"6",width:"36",height:"36",rx:"8","stroke-dasharray":"6 4"}}),r("path",{attrs:{d:"M24 16v16m0 0l-6-6m6 6l6-6","stroke-linecap":"round","stroke-linejoin":"round"}})])]),r("div",{staticClass:"upload-text"},[t._v("点击上传图片识别")])]),r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}})]),r("div",{staticClass:"recognize-card result-card"},[r("RecognitionResult",{attrs:{imageUrl:t.imageUrl,products:t.products}})],1)])])},_sfc_staticRenderFns$c=[function(){var n=this,t=n._self._c;return t("div",{staticClass:"recognize-header"},[t("span",{staticClass:"recognize-title"},[n._v("图片识别")])])}],__component__$c=normalizeComponent(_sfc_main$c,_sfc_render$c,_sfc_staticRenderFns$c,!1,null,"f0532bc8");const Recognize=__component__$c.exports,book={namespaced:!0,state:{currentBookIdx:0,wordBooks:[],words:[],GROUP_SIZE:10,progress:{currentGroup:0,learnedArr:[]}},getters:{bookName:n=>{var t;return((t=n.wordBooks[n.currentBookIdx])==null?void 0:t.name)||""},bookId:n=>{var t;return((t=n.wordBooks[n.currentBookIdx])==null?void 0:t.id)||0},groupCount:n=>Math.ceil(n.words.length/n.GROUP_SIZE),progressPercent:n=>n.progress.learnedArr.length>0?Math.round(n.progress.learnedArr.length/n.words.length*100):0,progressText:(n,t)=>n.words.length>0?`${n.progress.currentGroup+1} / ${t.groupCount}`:"",groupStart:(n,t)=>n.progress.currentGroup*n.GROUP_SIZE,groupEnd:(n,t)=>Math.min(n.progress.currentGroup*n.GROUP_SIZE+n.GROUP_SIZE,n.words.length),getGroupWords:(n,t)=>()=>{const r=t.groupStart,s=t.groupEnd,l=[];for(let b=r;b<s;b++)n.progress.learnedArr.includes(b)||l.push(b);return l}},mutations:{setCurrentBookIdx(n,t){n.currentBookIdx=t,setCurrentBookIndex(t)},setWordBooks(n,t){n.wordBooks=t},setWords(n,t){n.words=t},setGroupSize(n,t){n.GROUP_SIZE=t}},actions:{moveToNextGroup({getters:n,state:t}){t.progress.currentGroup=t.progress.currentGroup+1,setBookProgress(n.bookId,{group:t.progress.currentGroup,learned:t.progress.learnedArr,percent:n.progressPercent/100})},loadBook({commit:n,getters:t,state:r},s){var o;let l=getWordBooks();n("setCurrentBookIdx",s),n("setWordBooks",l),n("setWords",((o=l[s])==null?void 0:o.words)||[]);const b=getBookProgress(t.bookId);r.progress.currentGroup=b.group||0,r.progress.learnedArr=b.learned||[]},saveProgress({getters:n,state:t}){const r=n.bookId;r&&setBookProgress(r,{group:t.progress.currentGroup,learned:t.progress.learnedArr,percent:n.progressPercent/100})}}};function enterFullscreen(n=document.documentElement){return n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen?n.msRequestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():Promise.reject(new Error("Fullscreen API is not supported"))}function exitFullscreen(){return document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():Promise.reject(new Error("Fullscreen API is not supported"))}Vue$1.use(index);const STUDY_STATUS_DEF={DEFAULT:0,LEARNING:1,LEARNED:2,REVIEWING:3,REVIEWED:4},store=new index.Store({state:{study_status:STUDY_STATUS_DEF.DEFAULT,cache_frozen:!1,isFullscreen:!1},mutations:{setCacheFrozen(n,t){n.cache_frozen=t},setStudyStatus(n,t){n.study_status=t},setIsFullscreen(n,t){n.isFullscreen=t,t?enterFullscreen():exitFullscreen()}},actions:{},getters:{cacheWrapper(n){return function(t){var r;n.cache_frozen||(r=t==null?void 0:t.apply)==null||r.call(t,this,arguments)}}},modules:{book}}),_sfc_main$b={name:"WordsHeader",props:{title:String}};var _sfc_render$b=function(){var t=this,r=t._self._c;return r("div",{staticClass:"words-header"},[r("span",{staticClass:"book-title",on:{click:function(s){return t.$emit("change")}}},[t._v(" "+t._s(t.title||"词库")+" "),r("svg",{staticClass:"arrow",attrs:{width:"16",height:"16",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M6 10l6 6 6-6",stroke:"#3578e5","stroke-width":"2",fill:"none","stroke-linecap":"round"}})])])])},_sfc_staticRenderFns$b=[],__component__$b=normalizeComponent(_sfc_main$b,_sfc_render$b,_sfc_staticRenderFns$b,!1,null,"2079ff2d");const WordsHeader=__component__$b.exports,_sfc_main$a={name:"WordsProgress",props:{total:Number,current:Number},computed:{progressPercent(){let n=this.current/this.total||0;return Math.round(n*100)}}};var _sfc_render$a=function(){var t=this,r=t._self._c;return r("div",{staticClass:"progress-bar-fixed"},[r("div",{staticClass:"progress-bar-bg"},[r("div",{staticClass:"progress-bar-fg",style:{width:t.progressPercent+"%"}})]),r("div",{staticClass:"progress-text"},[t._v(" "+t._s(t.current)+" / "+t._s(t.total)+" ")])])},_sfc_staticRenderFns$a=[],__component__$a=normalizeComponent(_sfc_main$a,_sfc_render$a,_sfc_staticRenderFns$a,!1,null,"4487d368");const WordsProgress=__component__$a.exports,_sfc_main$9={name:"FinishModal",props:{visible:{type:Boolean,default:!1},bookName:{type:String,default:""},subtitle:{type:String,default:""},restartText:{type:String,default:""},homeText:{type:String,default:""}}};var _sfc_render$9=function(){var t=this,r=t._self._c;return t.visible?r("div",{staticClass:"finish-mask"},[r("div",{staticClass:"finish-modal"},[r("div",{staticClass:"finish-title"},[t._v("🎉 恭喜你！")]),r("div",{staticClass:"finish-desc"},[t._v(t._s(t.subtitle||`本轮词库「${t.bookName}」已全部学完`))]),r("div",{staticClass:"finish-actions"},[r("button",{staticClass:"finish-btn",on:{click:function(s){return t.$emit("restart")}}},[t._v(" "+t._s(t.restartText||"再来一轮")+" ")]),r("button",{staticClass:"finish-btn home-btn",on:{click:function(s){return t.$emit("returnHome")}}},[t._v(" "+t._s(t.homeText||"休息一下")+" ")])])])]):t._e()},_sfc_staticRenderFns$9=[],__component__$9=normalizeComponent(_sfc_main$9,_sfc_render$9,_sfc_staticRenderFns$9,!1,null,"be049dc6");const FinishModal=__component__$9.exports;let instance=null;const openFinishModal=(n={})=>(instance&&instance.$destroy(),new Promise(t=>{const r=Vue$1.extend(FinishModal);return instance=new r({propsData:{visible:!0,bookName:n.bookName||"",subtitle:n.subtitle||"",restartText:n.restartText||"",homeText:n.homeText||""}}),instance.$mount(),document.body.appendChild(instance.$el),instance.$on("restart",()=>{hideFinishModal(),t({success:!0,data:!0})}),instance.$on("returnHome",()=>{hideFinishModal(),t({success:!0,data:!1})}),instance})),hideFinishModal=()=>{instance&&(instance.visible=!1,setTimeout(()=>{instance.$destroy(),instance.$el.remove(),instance=null},300))},matchIconName=/^[a-z0-9]+(-[a-z0-9]+)*$/,stringToIcon=(n,t,r,s="")=>{const l=n.split(":");if(n.slice(0,1)==="@"){if(l.length<2||l.length>3)return null;s=l.shift().slice(1)}if(l.length>3||!l.length)return null;if(l.length>1){const B=l.pop(),Qe=l.pop(),at={provider:l.length>0?l[0]:s,prefix:Qe,name:B};return t&&!validateIconName(at)?null:at}const b=l[0],o=b.split("-");if(o.length>1){const B={provider:s,prefix:o.shift(),name:o.join("-")};return t&&!validateIconName(B)?null:B}if(r&&s===""){const B={provider:s,prefix:"",name:b};return t&&!validateIconName(B,r)?null:B}return null},validateIconName=(n,t)=>n?!!((n.provider===""||n.provider.match(matchIconName))&&(t&&n.prefix===""||n.prefix.match(matchIconName))&&n.name.match(matchIconName)):!1,defaultIconDimensions=Object.freeze({left:0,top:0,width:16,height:16}),defaultIconTransformations=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),defaultIconProps=Object.freeze({...defaultIconDimensions,...defaultIconTransformations}),defaultExtendedIconProps=Object.freeze({...defaultIconProps,body:"",hidden:!1});function mergeIconTransformations(n,t){const r={};!n.hFlip!=!t.hFlip&&(r.hFlip=!0),!n.vFlip!=!t.vFlip&&(r.vFlip=!0);const s=((n.rotate||0)+(t.rotate||0))%4;return s&&(r.rotate=s),r}function mergeIconData(n,t){const r=mergeIconTransformations(n,t);for(const s in defaultExtendedIconProps)s in defaultIconTransformations?s in n&&!(s in r)&&(r[s]=defaultIconTransformations[s]):s in t?r[s]=t[s]:s in n&&(r[s]=n[s]);return r}function getIconsTree(n,t){const r=n.icons,s=n.aliases||Object.create(null),l=Object.create(null);function b(o){if(r[o])return l[o]=[];if(!(o in l)){l[o]=null;const B=s[o]&&s[o].parent,Qe=B&&b(B);Qe&&(l[o]=[B].concat(Qe))}return l[o]}return Object.keys(r).concat(Object.keys(s)).forEach(b),l}function internalGetIconData(n,t,r){const s=n.icons,l=n.aliases||Object.create(null);let b={};function o(B){b=mergeIconData(s[B]||l[B],b)}return o(t),r.forEach(o),mergeIconData(n,b)}function parseIconSet(n,t){const r=[];if(typeof n!="object"||typeof n.icons!="object")return r;n.not_found instanceof Array&&n.not_found.forEach(l=>{t(l,null),r.push(l)});const s=getIconsTree(n);for(const l in s){const b=s[l];b&&(t(l,internalGetIconData(n,l,b)),r.push(l))}return r}const optionalPropertyDefaults={provider:"",aliases:{},not_found:{},...defaultIconDimensions};function checkOptionalProps(n,t){for(const r in t)if(r in n&&typeof n[r]!=typeof t[r])return!1;return!0}function quicklyValidateIconSet(n){if(typeof n!="object"||n===null)return null;const t=n;if(typeof t.prefix!="string"||!n.icons||typeof n.icons!="object"||!checkOptionalProps(n,optionalPropertyDefaults))return null;const r=t.icons;for(const l in r){const b=r[l];if(!l.match(matchIconName)||typeof b.body!="string"||!checkOptionalProps(b,defaultExtendedIconProps))return null}const s=t.aliases||Object.create(null);for(const l in s){const b=s[l],o=b.parent;if(!l.match(matchIconName)||typeof o!="string"||!r[o]&&!s[o]||!checkOptionalProps(b,defaultExtendedIconProps))return null}return t}const dataStorage=Object.create(null);function newStorage(n,t){return{provider:n,prefix:t,icons:Object.create(null),missing:new Set}}function getStorage(n,t){const r=dataStorage[n]||(dataStorage[n]=Object.create(null));return r[t]||(r[t]=newStorage(n,t))}function addIconSet(n,t){return quicklyValidateIconSet(t)?parseIconSet(t,(r,s)=>{s?n.icons[r]=s:n.missing.add(r)}):[]}function addIconToStorage(n,t,r){try{if(typeof r.body=="string")return n.icons[t]={...r},!0}catch{}return!1}let simpleNames=!1;function allowSimpleNames(n){return typeof n=="boolean"&&(simpleNames=n),simpleNames}function getIconData(n){const t=typeof n=="string"?stringToIcon(n,!0,simpleNames):n;if(t){const r=getStorage(t.provider,t.prefix),s=t.name;return r.icons[s]||(r.missing.has(s)?null:void 0)}}function addIcon(n,t){const r=stringToIcon(n,!0,simpleNames);if(!r)return!1;const s=getStorage(r.provider,r.prefix);return addIconToStorage(s,r.name,t)}function addCollection(n,t){if(typeof n!="object")return!1;if(typeof t!="string"&&(t=n.provider||""),simpleNames&&!t&&!n.prefix){let l=!1;return quicklyValidateIconSet(n)&&(n.prefix="",parseIconSet(n,(b,o)=>{o&&addIcon(b,o)&&(l=!0)})),l}const r=n.prefix;if(!validateIconName({provider:t,prefix:r,name:"a"}))return!1;const s=getStorage(t,r);return!!addIconSet(s,n)}const defaultIconSizeCustomisations=Object.freeze({width:null,height:null}),defaultIconCustomisations=Object.freeze({...defaultIconSizeCustomisations,...defaultIconTransformations}),unitsSplit=/(-?[0-9.]*[0-9]+[0-9.]*)/g,unitsTest=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function calculateSize(n,t,r){if(t===1)return n;if(r=r||100,typeof n=="number")return Math.ceil(n*t*r)/r;if(typeof n!="string")return n;const s=n.split(unitsSplit);if(s===null||!s.length)return n;const l=[];let b=s.shift(),o=unitsTest.test(b);for(;;){if(o){const B=parseFloat(b);isNaN(B)?l.push(b):l.push(Math.ceil(B*t*r)/r)}else l.push(b);if(b=s.shift(),b===void 0)return l.join("");o=!o}}const isUnsetKeyword=n=>n==="unset"||n==="undefined"||n==="none";function iconToSVG(n,t){const r={...defaultIconProps,...n},s={...defaultIconCustomisations,...t},l={left:r.left,top:r.top,width:r.width,height:r.height};let b=r.body;[r,s].forEach(ea=>{const ta=[],ra=ea.hFlip,aa=ea.vFlip;let ia=ea.rotate;ra?aa?ia+=2:(ta.push("translate("+(l.width+l.left).toString()+" "+(0-l.top).toString()+")"),ta.push("scale(-1 1)"),l.top=l.left=0):aa&&(ta.push("translate("+(0-l.left).toString()+" "+(l.height+l.top).toString()+")"),ta.push("scale(1 -1)"),l.top=l.left=0);let la;switch(ia<0&&(ia-=Math.floor(ia/4)*4),ia=ia%4,ia){case 1:la=l.height/2+l.top,ta.unshift("rotate(90 "+la.toString()+" "+la.toString()+")");break;case 2:ta.unshift("rotate(180 "+(l.width/2+l.left).toString()+" "+(l.height/2+l.top).toString()+")");break;case 3:la=l.width/2+l.left,ta.unshift("rotate(-90 "+la.toString()+" "+la.toString()+")");break}ia%2===1&&(l.left!==l.top&&(la=l.left,l.left=l.top,l.top=la),l.width!==l.height&&(la=l.width,l.width=l.height,l.height=la)),ta.length&&(b='<g transform="'+ta.join(" ")+'">'+b+"</g>")});const o=s.width,B=s.height,Qe=l.width,at=l.height;let ot,ct;o===null?(ct=B===null?"1em":B==="auto"?at:B,ot=calculateSize(ct,Qe/at)):(ot=o==="auto"?Qe:o,ct=B===null?calculateSize(ot,at/Qe):B==="auto"?at:B);const ut={},lt=(ea,ta)=>{isUnsetKeyword(ta)||(ut[ea]=ta.toString())};return lt("width",ot),lt("height",ct),ut.viewBox=l.left.toString()+" "+l.top.toString()+" "+Qe.toString()+" "+at.toString(),{attributes:ut,body:b}}const regex=/\sid="(\S+)"/g,randomPrefix="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let counter=0;function replaceIDs(n,t=randomPrefix){const r=[];let s;for(;s=regex.exec(n);)r.push(s[1]);if(!r.length)return n;const l="suffix"+(Math.random()*16777216|Date.now()).toString(16);return r.forEach(b=>{const o=typeof t=="function"?t(b):t+(counter++).toString(),B=b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp('([#;"])('+B+')([")]|\\.[a-z])',"g"),"$1"+o+l+"$3")}),n=n.replace(new RegExp(l,"g"),""),n}const storage=Object.create(null);function setAPIModule(n,t){storage[n]=t}function getAPIModule(n){return storage[n]||storage[""]}function createAPIConfig(n){let t;if(typeof n.resources=="string")t=[n.resources];else if(t=n.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:n.path||"/",maxURL:n.maxURL||500,rotate:n.rotate||750,timeout:n.timeout||5e3,random:n.random===!0,index:n.index||0,dataAfterTimeout:n.dataAfterTimeout!==!1}}const configStorage=Object.create(null),fallBackAPISources=["https://api.simplesvg.com","https://api.unisvg.com"],fallBackAPI=[];for(;fallBackAPISources.length>0;)fallBackAPISources.length===1||Math.random()>.5?fallBackAPI.push(fallBackAPISources.shift()):fallBackAPI.push(fallBackAPISources.pop());configStorage[""]=createAPIConfig({resources:["https://api.iconify.design"].concat(fallBackAPI)});function addAPIProvider(n,t){const r=createAPIConfig(t);return r===null?!1:(configStorage[n]=r,!0)}function getAPIConfig(n){return configStorage[n]}const detectFetch=()=>{let n;try{if(n=fetch,typeof n=="function")return n}catch{}};let fetchModule=detectFetch();function calculateMaxLength(n,t){const r=getAPIConfig(n);if(!r)return 0;let s;if(!r.maxURL)s=0;else{let l=0;r.resources.forEach(o=>{l=Math.max(l,o.length)});const b=t+".json?icons=";s=r.maxURL-l-r.path.length-b.length}return s}function shouldAbort(n){return n===404}const prepare=(n,t,r)=>{const s=[],l=calculateMaxLength(n,t),b="icons";let o={type:b,provider:n,prefix:t,icons:[]},B=0;return r.forEach((Qe,at)=>{B+=Qe.length+1,B>=l&&at>0&&(s.push(o),o={type:b,provider:n,prefix:t,icons:[]},B=Qe.length),o.icons.push(Qe)}),s.push(o),s};function getPath(n){if(typeof n=="string"){const t=getAPIConfig(n);if(t)return t.path}return"/"}const send=(n,t,r)=>{if(!fetchModule){r("abort",424);return}let s=getPath(t.provider);switch(t.type){case"icons":{const b=t.prefix,B=t.icons.join(","),Qe=new URLSearchParams({icons:B});s+=b+".json?"+Qe.toString();break}case"custom":{const b=t.uri;s+=b.slice(0,1)==="/"?b.slice(1):b;break}default:r("abort",400);return}let l=503;fetchModule(n+s).then(b=>{const o=b.status;if(o!==200){setTimeout(()=>{r(shouldAbort(o)?"abort":"next",o)});return}return l=501,b.json()}).then(b=>{if(typeof b!="object"||b===null){setTimeout(()=>{b===404?r("abort",b):r("next",l)});return}setTimeout(()=>{r("success",b)})}).catch(()=>{r("next",l)})},fetchAPIModule={prepare,send};function sortIcons(n){const t={loaded:[],missing:[],pending:[]},r=Object.create(null);n.sort((l,b)=>l.provider!==b.provider?l.provider.localeCompare(b.provider):l.prefix!==b.prefix?l.prefix.localeCompare(b.prefix):l.name.localeCompare(b.name));let s={provider:"",prefix:"",name:""};return n.forEach(l=>{if(s.name===l.name&&s.prefix===l.prefix&&s.provider===l.provider)return;s=l;const b=l.provider,o=l.prefix,B=l.name,Qe=r[b]||(r[b]=Object.create(null)),at=Qe[o]||(Qe[o]=getStorage(b,o));let ot;B in at.icons?ot=t.loaded:o===""||at.missing.has(B)?ot=t.missing:ot=t.pending;const ct={provider:b,prefix:o,name:B};ot.push(ct)}),t}function removeCallback(n,t){n.forEach(r=>{const s=r.loaderCallbacks;s&&(r.loaderCallbacks=s.filter(l=>l.id!==t))})}function updateCallbacks(n){n.pendingCallbacksFlag||(n.pendingCallbacksFlag=!0,setTimeout(()=>{n.pendingCallbacksFlag=!1;const t=n.loaderCallbacks?n.loaderCallbacks.slice(0):[];if(!t.length)return;let r=!1;const s=n.provider,l=n.prefix;t.forEach(b=>{const o=b.icons,B=o.pending.length;o.pending=o.pending.filter(Qe=>{if(Qe.prefix!==l)return!0;const at=Qe.name;if(n.icons[at])o.loaded.push({provider:s,prefix:l,name:at});else if(n.missing.has(at))o.missing.push({provider:s,prefix:l,name:at});else return r=!0,!0;return!1}),o.pending.length!==B&&(r||removeCallback([n],b.id),b.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),b.abort))})}))}let idCounter=0;function storeCallback(n,t,r){const s=idCounter++,l=removeCallback.bind(null,r,s);if(!t.pending.length)return l;const b={id:s,icons:t,callback:n,abort:l};return r.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(b)}),l}function listToIcons(n,t=!0,r=!1){const s=[];return n.forEach(l=>{const b=typeof l=="string"?stringToIcon(l,t,r):l;b&&s.push(b)}),s}var defaultConfig={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function sendQuery(n,t,r,s){const l=n.resources.length,b=n.random?Math.floor(Math.random()*l):n.index;let o;if(n.random){let sa=n.resources.slice(0);for(o=[];sa.length>1;){const ua=Math.floor(Math.random()*sa.length);o.push(sa[ua]),sa=sa.slice(0,ua).concat(sa.slice(ua+1))}o=o.concat(sa)}else o=n.resources.slice(b).concat(n.resources.slice(0,b));const B=Date.now();let Qe="pending",at=0,ot,ct=null,ut=[],lt=[];typeof s=="function"&&lt.push(s);function ea(){ct&&(clearTimeout(ct),ct=null)}function ta(){Qe==="pending"&&(Qe="aborted"),ea(),ut.forEach(sa=>{sa.status==="pending"&&(sa.status="aborted")}),ut=[]}function ra(sa,ua){ua&&(lt=[]),typeof sa=="function"&&lt.push(sa)}function aa(){return{startTime:B,payload:t,status:Qe,queriesSent:at,queriesPending:ut.length,subscribe:ra,abort:ta}}function ia(){Qe="failed",lt.forEach(sa=>{sa(void 0,ot)})}function la(){ut.forEach(sa=>{sa.status==="pending"&&(sa.status="aborted")}),ut=[]}function ba(sa,ua,ma){const $a=ua!=="success";switch(ut=ut.filter(Da=>Da!==sa),Qe){case"pending":break;case"failed":if($a||!n.dataAfterTimeout)return;break;default:return}if(ua==="abort"){ot=ma,ia();return}if($a){ot=ma,ut.length||(o.length?_a():ia());return}if(ea(),la(),!n.random){const Da=n.resources.indexOf(sa.resource);Da!==-1&&Da!==n.index&&(n.index=Da)}Qe="completed",lt.forEach(Da=>{Da(ma)})}function _a(){if(Qe!=="pending")return;ea();const sa=o.shift();if(sa===void 0){if(ut.length){ct=setTimeout(()=>{ea(),Qe==="pending"&&(la(),ia())},n.timeout);return}ia();return}const ua={status:"pending",resource:sa,callback:(ma,$a)=>{ba(ua,ma,$a)}};ut.push(ua),at++,ct=setTimeout(_a,n.rotate),r(sa,t,ua.callback)}return setTimeout(_a),aa}function initRedundancy(n){const t={...defaultConfig,...n};let r=[];function s(){r=r.filter(B=>B().status==="pending")}function l(B,Qe,at){const ot=sendQuery(t,B,Qe,(ct,ut)=>{s(),at&&at(ct,ut)});return r.push(ot),ot}function b(B){return r.find(Qe=>B(Qe))||null}return{query:l,find:b,setIndex:B=>{t.index=B},getIndex:()=>t.index,cleanup:s}}function emptyCallback$1(){}const redundancyCache=Object.create(null);function getRedundancyCache(n){if(!redundancyCache[n]){const t=getAPIConfig(n);if(!t)return;const r=initRedundancy(t),s={config:t,redundancy:r};redundancyCache[n]=s}return redundancyCache[n]}function sendAPIQuery(n,t,r){let s,l;if(typeof n=="string"){const b=getAPIModule(n);if(!b)return r(void 0,424),emptyCallback$1;l=b.send;const o=getRedundancyCache(n);o&&(s=o.redundancy)}else{const b=createAPIConfig(n);if(b){s=initRedundancy(b);const o=n.resources?n.resources[0]:"",B=getAPIModule(o);B&&(l=B.send)}}return!s||!l?(r(void 0,424),emptyCallback$1):s.query(t,l,r)().abort}const browserCacheVersion="iconify2",browserCachePrefix="iconify",browserCacheCountKey=browserCachePrefix+"-count",browserCacheVersionKey=browserCachePrefix+"-version",browserStorageHour=36e5,browserStorageCacheExpiration=168;function getStoredItem(n,t){try{return n.getItem(t)}catch{}}function setStoredItem(n,t,r){try{return n.setItem(t,r),!0}catch{}}function removeStoredItem(n,t){try{n.removeItem(t)}catch{}}function setBrowserStorageItemsCount(n,t){return setStoredItem(n,browserCacheCountKey,t.toString())}function getBrowserStorageItemsCount(n){return parseInt(getStoredItem(n,browserCacheCountKey))||0}const browserStorageConfig={local:!0,session:!0},browserStorageEmptyItems={local:new Set,session:new Set};let browserStorageStatus=!1;function setBrowserStorageStatus(n){browserStorageStatus=n}let _window=typeof window>"u"?{}:window;function getBrowserStorage(n){const t=n+"Storage";try{if(_window&&_window[t]&&typeof _window[t].length=="number")return _window[t]}catch{}browserStorageConfig[n]=!1}function iterateBrowserStorage(n,t){const r=getBrowserStorage(n);if(!r)return;const s=getStoredItem(r,browserCacheVersionKey);if(s!==browserCacheVersion){if(s){const B=getBrowserStorageItemsCount(r);for(let Qe=0;Qe<B;Qe++)removeStoredItem(r,browserCachePrefix+Qe.toString())}setStoredItem(r,browserCacheVersionKey,browserCacheVersion),setBrowserStorageItemsCount(r,0);return}const l=Math.floor(Date.now()/browserStorageHour)-browserStorageCacheExpiration,b=B=>{const Qe=browserCachePrefix+B.toString(),at=getStoredItem(r,Qe);if(typeof at=="string"){try{const ot=JSON.parse(at);if(typeof ot=="object"&&typeof ot.cached=="number"&&ot.cached>l&&typeof ot.provider=="string"&&typeof ot.data=="object"&&typeof ot.data.prefix=="string"&&t(ot,B))return!0}catch{}removeStoredItem(r,Qe)}};let o=getBrowserStorageItemsCount(r);for(let B=o-1;B>=0;B--)b(B)||(B===o-1?(o--,setBrowserStorageItemsCount(r,o)):browserStorageEmptyItems[n].add(B))}function initBrowserStorage(){if(!browserStorageStatus){setBrowserStorageStatus(!0);for(const n in browserStorageConfig)iterateBrowserStorage(n,t=>{const r=t.data,s=t.provider,l=r.prefix,b=getStorage(s,l);if(!addIconSet(b,r).length)return!1;const o=r.lastModified||-1;return b.lastModifiedCached=b.lastModifiedCached?Math.min(b.lastModifiedCached,o):o,!0})}}function updateLastModified(n,t){const r=n.lastModifiedCached;if(r&&r>=t)return r===t;if(n.lastModifiedCached=t,r)for(const s in browserStorageConfig)iterateBrowserStorage(s,l=>{const b=l.data;return l.provider!==n.provider||b.prefix!==n.prefix||b.lastModified===t});return!0}function storeInBrowserStorage(n,t){browserStorageStatus||initBrowserStorage();function r(s){let l;if(!browserStorageConfig[s]||!(l=getBrowserStorage(s)))return;const b=browserStorageEmptyItems[s];let o;if(b.size)b.delete(o=Array.from(b).shift());else if(o=getBrowserStorageItemsCount(l),!setBrowserStorageItemsCount(l,o+1))return;const B={cached:Math.floor(Date.now()/browserStorageHour),provider:n.provider,data:t};return setStoredItem(l,browserCachePrefix+o.toString(),JSON.stringify(B))}t.lastModified&&!updateLastModified(n,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),r("local")||r("session"))}function emptyCallback(){}function loadedNewIcons(n){n.iconsLoaderFlag||(n.iconsLoaderFlag=!0,setTimeout(()=>{n.iconsLoaderFlag=!1,updateCallbacks(n)}))}function loadNewIcons(n,t){n.iconsToLoad?n.iconsToLoad=n.iconsToLoad.concat(t).sort():n.iconsToLoad=t,n.iconsQueueFlag||(n.iconsQueueFlag=!0,setTimeout(()=>{n.iconsQueueFlag=!1;const{provider:r,prefix:s}=n,l=n.iconsToLoad;delete n.iconsToLoad;let b;if(!l||!(b=getAPIModule(r)))return;b.prepare(r,s,l).forEach(B=>{sendAPIQuery(r,B,Qe=>{if(typeof Qe!="object")B.icons.forEach(at=>{n.missing.add(at)});else try{const at=addIconSet(n,Qe);if(!at.length)return;const ot=n.pendingIcons;ot&&at.forEach(ct=>{ot.delete(ct)}),storeInBrowserStorage(n,Qe)}catch(at){console.error(at)}loadedNewIcons(n)})})}))}const loadIcons=(n,t)=>{const r=listToIcons(n,!0,allowSimpleNames()),s=sortIcons(r);if(!s.pending.length){let Qe=!0;return t&&setTimeout(()=>{Qe&&t(s.loaded,s.missing,s.pending,emptyCallback)}),()=>{Qe=!1}}const l=Object.create(null),b=[];let o,B;return s.pending.forEach(Qe=>{const{provider:at,prefix:ot}=Qe;if(ot===B&&at===o)return;o=at,B=ot,b.push(getStorage(at,ot));const ct=l[at]||(l[at]=Object.create(null));ct[ot]||(ct[ot]=[])}),s.pending.forEach(Qe=>{const{provider:at,prefix:ot,name:ct}=Qe,ut=getStorage(at,ot),lt=ut.pendingIcons||(ut.pendingIcons=new Set);lt.has(ct)||(lt.add(ct),l[at][ot].push(ct))}),b.forEach(Qe=>{const{provider:at,prefix:ot}=Qe;l[at][ot].length&&loadNewIcons(Qe,l[at][ot])}),t?storeCallback(t,s,b):emptyCallback};function mergeCustomisations(n,t){const r={...n};for(const s in t){const l=t[s],b=typeof l;s in defaultIconSizeCustomisations?(l===null||l&&(b==="string"||b==="number"))&&(r[s]=l):b===typeof r[s]&&(r[s]=s==="rotate"?l%4:l)}return r}const separator=/[\s,]+/;function flipFromString(n,t){t.split(separator).forEach(r=>{switch(r.trim()){case"horizontal":n.hFlip=!0;break;case"vertical":n.vFlip=!0;break}})}function rotateFromString(n,t=0){const r=n.replace(/^-?[0-9.]*/,"");function s(l){for(;l<0;)l+=4;return l%4}if(r===""){const l=parseInt(n);return isNaN(l)?0:s(l)}else if(r!==n){let l=0;switch(r){case"%":l=25;break;case"deg":l=90}if(l){let b=parseFloat(n.slice(0,n.length-r.length));return isNaN(b)?0:(b=b/l,b%1===0?s(b):0)}}return t}const defaultExtendedIconCustomisations={...defaultIconCustomisations,inline:!1},svgDefaults={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},customisationAliases={};["horizontal","vertical"].forEach(n=>{const t=n.slice(0,1)+"Flip";customisationAliases[n+"-flip"]=t,customisationAliases[n.slice(0,1)+"-flip"]=t,customisationAliases[n+"Flip"]=t});const render=(n,t,r,s)=>{const l=mergeCustomisations(defaultExtendedIconCustomisations,t),b={...svgDefaults},o={};for(let ct in t){const ut=t[ct];if(ut!==void 0)switch(ct){case"icon":case"style":case"onLoad":break;case"inline":case"hFlip":case"vFlip":l[ct]=ut===!0||ut==="true"||ut===1;break;case"flip":typeof ut=="string"&&flipFromString(l,ut);break;case"color":o.color=ut;break;case"rotate":typeof ut=="string"?l[ct]=rotateFromString(ut):typeof ut=="number"&&(l[ct]=ut);break;case"ariaHidden":case"aria-hidden":ut!==!0&&ut!=="true"&&delete b["aria-hidden"];break;default:const lt=customisationAliases[ct];lt?(ut===!0||ut==="true"||ut===1)&&(l[lt]=!0):defaultExtendedIconCustomisations[ct]===void 0&&(b[ct]=ut)}}const B=iconToSVG(s,l);for(let ct in B.attributes)b[ct]=B.attributes[ct];l.inline&&(o.verticalAlign="-0.125em");let Qe=0,at=t.id;typeof at=="string"&&(at=at.replace(/-/g,"_"));const ot={attrs:b,domProps:{innerHTML:replaceIDs(B.body,at?()=>at+"ID"+Qe++:"iconifyVue")}};return Object.keys(o).length>0&&(ot.style=o),r&&(["on","ref"].forEach(ct=>{r[ct]!==void 0&&(ot[ct]=r[ct])}),["staticClass","class"].forEach(ct=>{r[ct]!==void 0&&(ot.class=r[ct])})),n("svg",ot)};allowSimpleNames(!0);setAPIModule("",fetchAPIModule);if(typeof document<"u"&&typeof window<"u"){initBrowserStorage();const n=window;if(n.IconifyPreload!==void 0){const t=n.IconifyPreload,r="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!addCollection(s))&&console.error(r)}catch{console.error(r)}})}if(n.IconifyProviders!==void 0){const t=n.IconifyProviders;if(typeof t=="object"&&t!==null)for(let r in t){const s="IconifyProviders["+r+"] is invalid.";try{const l=t[r];if(typeof l!="object"||!l||l.resources===void 0)continue;addAPIProvider(r,l)||console.error(s)}catch{console.error(s)}}}}const emptyIcon={body:""},Icon=Vue$1.extend({inheritAttrs:!1,data(){return{iconMounted:!1}},beforeMount(){this._name="",this._loadingIcon=null,this.iconMounted=!0},beforeDestroy(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(n,t){if(typeof n=="object"&&n!==null&&typeof n.body=="string")return this._name="",this.abortLoading(),{data:n};let r;if(typeof n!="string"||(r=stringToIcon(n,!1,!0))===null)return this.abortLoading(),null;const s=getIconData(r);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==n)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:n,abort:loadIcons([r],()=>{this.$forceUpdate()})})),null;this.abortLoading(),this._name!==n&&(this._name=n,t&&t(n));const l=["iconify"];return r.prefix!==""&&l.push("iconify--"+r.prefix),r.provider!==""&&l.push("iconify--"+r.provider),{data:s,classes:l}}},render(n){const t=Object.assign({},this.$attrs);let r=this.$data;const s=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;return s?(s.classes&&(r={...r,class:(typeof r.class=="string"?r.class+" ":"")+s.classes.join(" ")}),render(n,t,r,s.data)):render(n,t,r,emptyIcon)}}),_sfc_main$8={name:"AudioButton",components:{Icon},props:{word:{type:String,required:!0},title:{type:String,default:"播放发音"}},data(){return{isPlaying:!1,isLoading:!1,audioPlayer:null}},methods:{play(){this.handleClick()},async handleClick(){if(console.log("jser click"),!!this.word){this.audioPlayer&&this.audioPlayer.pause(),this.isLoading=!0;try{let n=await getAvailableAudioUrl(this.word);if(!n){$message.error("网络异常，请稍后重试");return}this.audioPlayer=new Audio(n),this.audioPlayer.addEventListener("ended",()=>{this.isPlaying=!1}),await this.audioPlayer.play(),this.isPlaying=!0}catch(n){console.error("Failed to play audio:",n),this.isPlaying=!1,$message.error("播放失败，请稍后重试")}finally{this.isLoading=!1}}}},beforeDestroy(){this.audioPlayer&&(this.audioPlayer.pause(),this.audioPlayer.src="",this.audioPlayer=null),this.isPlaying=!1,this.isLoading=!1}};var _sfc_render$8=function(){var t=this,r=t._self._c;return r("div",{staticClass:"audio-btn",class:{"is-playing":t.isPlaying,"is-loading":t.isLoading},attrs:{title:t.title},on:{click:t.handleClick}},[t.isLoading?r("Icon",{staticClass:"loading-icon",style:{color:"#3578e5"},attrs:{icon:"mdi:loading",width:"32",height:"32"}}):r("Icon",{style:{color:"#3578e5"},attrs:{icon:"mdi:volume-high",width:"32",height:"32"}})],1)},_sfc_staticRenderFns$8=[],__component__$8=normalizeComponent(_sfc_main$8,_sfc_render$8,_sfc_staticRenderFns$8,!1,null,"727b9fb6");const AudioButton=__component__$8.exports,_sfc_main$7={name:"CardActions",components:{Icon},props:{showIframeBtn:{type:Boolean,default:!1}},methods:{handlePass(){this.$emit("pass")},handleFail(){this.$emit("fail")},handleIframe(){this.$emit("iframe")}}};var _sfc_render$7=function(){var t=this,r=t._self._c;return r("div",{staticClass:"card-actions"},[r("div",{staticClass:"action-btn pass-btn",attrs:{title:"已掌握"},on:{click:t.handlePass}},[r("Icon",{style:{color:"#4caf50"},attrs:{icon:"mdi:check",width:"28",height:"28"}})],1),r("div",{staticClass:"action-btn fail-btn",attrs:{title:"再看一次"},on:{click:t.handleFail}},[r("Icon",{style:{color:"#e55"},attrs:{icon:"mdi:close",width:"28",height:"28"}})],1),t.showIframeBtn?r("div",{staticClass:"action-btn iframe-btn",attrs:{title:"打开网页"},on:{click:t.handleIframe}},[r("Icon",{style:{color:"#3578e5"},attrs:{icon:"mdi:web",width:"28",height:"28"}})],1):t._e()])},_sfc_staticRenderFns$7=[],__component__$7=normalizeComponent(_sfc_main$7,_sfc_render$7,_sfc_staticRenderFns$7,!1,null,"ccfa8f3c");const CardActions=__component__$7.exports,dictionaryConfig={youdao:{name:"有道词典",nameEn:"Youdao Dictionary",url:"https://dict.youdao.com/result?word=",icon:"mdi:book-open-variant",color:"#1e88e5",description:"网易有道词典"},iciba:{name:"金山词霸",nameEn:"iCIBA",url:"https://www.iciba.com/word?w=",icon:"mdi:book-open-variant",color:"#1976d2",description:"金山词霸在线词典"},baidu:{name:"百度翻译",nameEn:"Baidu Translate",url:"https://fanyi.baidu.com/#en/zh/",icon:"mdi:book-open-variant",color:"#388e3c",description:"百度翻译词典"},sogou:{name:"搜狗翻译",nameEn:"Sogou Translate",url:"https://fanyi.sogou.com/text?keyword=",icon:"mdi:book-open-variant",color:"#7b1fa2",description:"搜狗翻译词典"},tencent:{name:"腾讯翻译",nameEn:"Tencent Translate",url:"https://fanyi.qq.com/translate?source=auto&target=zh&text=",icon:"mdi:book-open-variant",color:"#ff6f00",description:"腾讯翻译词典"},bing:{name:"必应词典",nameEn:"Bing Dictionary",url:"https://cn.bing.com/dict/search?q=",icon:"mdi:book-open-variant",color:"#c2185b",description:"微软必应词典"},dictcn:{name:"海词词典",nameEn:"Dict.cn",url:"https://dict.cn/",icon:"mdi:book-open-variant",color:"#d32f2f",description:"海词在线词典"},aiciba:{name:"爱词霸",nameEn:"AiCIBA",url:"https://www.aiciba.com/word?w=",icon:"mdi:book-open-variant",color:"#f57c00",description:"爱词霸在线词典"},cambridge:{name:"剑桥词典",nameEn:"Cambridge Dictionary",url:"https://dictionary.cambridge.org/dictionary/english/",icon:"mdi:book-open-variant",color:"#1e88e5",description:"剑桥大学权威英语词典",mayFail:!0,requiresVPN:!0},merriam:{name:"韦氏词典",nameEn:"Merriam-Webster",url:"https://www.merriam-webster.com/dictionary/",icon:"mdi:book-open-variant",color:"#388e3c",description:"美国韦氏词典",mayFail:!0,requiresVPN:!0}};function getDictionaryUrl(n,t){const r=dictionaryConfig[n];if(!r)throw new Error(`未知的词典类型: ${n}`);return r.url+encodeURIComponent(t)}function getDictionaryName(n){const t=dictionaryConfig[n];return t?t.name:"未知词典"}function getDictionaryIcon(n){const t=dictionaryConfig[n];return t?t.icon:"mdi:book-open-variant"}function getRecommendedDictionaries(){return["youdao","iciba","baidu","bing","sogou"]}const _sfc_main$6={name:"IframeModal",components:{Icon},props:{visible:{type:Boolean,default:!1},url:{type:String,default:""},title:{type:String,default:""},showRefresh:{type:Boolean,default:!0},showUrlInput:{type:Boolean,default:!0},width:{type:String,default:"100vw"},height:{type:String,default:"100vh"},closeOnOverlay:{type:Boolean,default:!0}},data(){return{currentUrl:"",urlInput:"",loading:!1,loadTimeout:null,loadStartTime:null,loadDuration:0}},computed:{containerStyle(){return{maxWidth:this.width,maxHeight:this.height}}},watch:{visible(n){n?this.initModal():this.resetModal()},url:{immediate:!0,handler(n){n&&this.visible&&this.loadUrlFromProp(n)}}},methods:{initModal(){this.url&&this.loadUrlFromProp(this.url),document.body.style.overflow="hidden"},resetModal(){this.currentUrl="",this.urlInput="",this.loading=!1,this.clearLoadTimeout(),this.loadStartTime=null,this.loadDuration=0,document.body.style.overflow=""},loadUrlFromProp(n){this.currentUrl=n,this.urlInput=n,this.startLoading()},loadUrl(){const n=this.urlInput.trim();if(n){if(!this.isValidUrl(n)){this.$emit("error",{message:"请输入有效的网址"});return}this.currentUrl=n,this.startLoading(),this.$emit("url-change",n)}},refreshIframe(){if(this.currentUrl){this.startLoading();const n=this.$refs.iframeRef;n&&(n.src=this.currentUrl)}},startLoading(){this.loading=!0,this.loadStartTime=Date.now(),this.clearLoadTimeout(),this.loadTimeout=setTimeout(()=>{this.loading=!1,this.$emit("error",{message:"加载超时，请检查网络连接"})},3e4)},clearLoadTimeout(){this.loadTimeout&&(clearTimeout(this.loadTimeout),this.loadTimeout=null)},onIframeLoad(){this.loading=!1,this.clearLoadTimeout(),this.loadDuration=Date.now()-this.loadStartTime,this.$emit("loaded",this.currentUrl)},onIframeError(){this.loading=!1,this.clearLoadTimeout(),this.$emit("error",{message:"页面加载失败，请检查网址是否正确"})},closeModal(){this.$emit("update:visible",!1),this.$emit("close")},handleOverlayClick(){this.closeOnOverlay&&this.closeModal()},isValidUrl(n){try{return new URL(n),!0}catch{return!1}},getDisplayUrl(n){try{const t=new URL(n);return t.hostname+t.pathname}catch{return n}},cancelLoading(){this.loading=!1,this.clearLoadTimeout(),this.loadDuration=Date.now()-this.loadStartTime,console.log(`加载已取消，耗时: ${this.loadDuration}ms`),this.$emit("error",{message:"加载已取消"})}},beforeDestroy(){this.clearLoadTimeout(),document.body.style.overflow=""}};var _sfc_render$6=function(){var t=this,r=t._self._c;return r("Transition",{attrs:{name:"modal-fade"}},[t.visible?r("div",{staticClass:"iframe-modal-overlay",on:{click:t.handleOverlayClick}},[r("div",{staticClass:"iframe-modal-container",style:t.containerStyle,on:{click:function(s){s.stopPropagation()}}},[t.loading?r("div",{staticClass:"iframe-loading-overlay"},[r("div",{staticClass:"loading-spinner"},[r("Icon",{staticClass:"spinning",attrs:{icon:"mdi:loading",width:"32",height:"32"}}),r("div",{staticClass:"loading-text"},[t._v("正在加载词典内容...")]),r("div",{staticClass:"loading-progress"},[r("div",{staticClass:"progress-bar"},[r("div",{staticClass:"progress-fill"})]),r("div",{staticClass:"progress-text"},[t._v("请稍候，这可能需要几秒钟")])]),r("button",{staticClass:"cancel-load-btn",attrs:{title:"取消加载"},on:{click:t.cancelLoading}},[r("Icon",{attrs:{icon:"mdi:close",width:"16",height:"16"}}),r("span",[t._v("取消加载")])],1)],1)]):t._e(),r("div",{staticClass:"iframe-container"},[t.currentUrl?r("iframe",{ref:"iframeRef",style:{opacity:t.loading?.3:1},attrs:{src:t.currentUrl,frameborder:"0",allowfullscreen:""},on:{load:t.onIframeLoad,error:t.onIframeError}}):r("div",{staticClass:"iframe-placeholder"},[r("Icon",{attrs:{icon:"mdi:web",width:"48",height:"48"}}),r("div",{staticClass:"placeholder-text"},[t._v("请输入要加载的网址")])],1)]),t.showUrlInput?r("div",{staticClass:"iframe-modal-footer"},[r("div",{staticClass:"url-input-container"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.urlInput,expression:"urlInput"}],staticClass:"url-input",attrs:{type:"url",placeholder:"请输入网址 (例如: https://example.com)"},domProps:{value:t.urlInput},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.loadUrl.apply(null,arguments)},input:function(s){s.target.composing||(t.urlInput=s.target.value)}}}),r("button",{staticClass:"load-btn",attrs:{disabled:!t.urlInput.trim()},on:{click:t.loadUrl}},[t._v(" 加载 ")])])]):t._e(),r("div",{staticClass:"iframe-modal-header"},[r("div",{staticClass:"iframe-modal-title"},[t.title?r("span",[t._v(t._s(t.title))]):t.currentUrl?r("span",{staticClass:"url-display"},[t._v(t._s(t.getDisplayUrl(t.currentUrl)))]):t._e()]),r("div",{staticClass:"iframe-modal-actions"},[t.showRefresh?r("button",{staticClass:"action-btn refresh-btn",attrs:{title:"刷新页面"},on:{click:t.refreshIframe}},[r("Icon",{attrs:{icon:"mdi:refresh",width:"20",height:"20"}})],1):t._e(),r("button",{staticClass:"action-btn close-btn",attrs:{title:"关闭"},on:{click:t.closeModal}},[r("Icon",{attrs:{icon:"mdi:close",width:"20",height:"20"}})],1)])])])]):t._e()])},_sfc_staticRenderFns$6=[],__component__$6=normalizeComponent(_sfc_main$6,_sfc_render$6,_sfc_staticRenderFns$6,!1,null,"099836fd");const IframeModal=__component__$6.exports;class IframeModalManager{constructor(){this.instance=null,this.container=null}open(t={}){return new Promise(r=>{this.instance&&this.close(),this.container=document.createElement("div"),document.body.appendChild(this.container);const s=Vue$1.extend(IframeModal);this.instance=new s({propsData:{visible:!0,url:t.url||"",title:t.title||"",showRefresh:t.showRefresh!==!1,showUrlInput:t.showUrlInput!==!1,width:t.width||"100vw",height:t.height||"100vh",closeOnOverlay:t.closeOnOverlay!==!1}}),this.instance.$on("loaded",t.onLoaded),this.instance.$on("error",t.onError),this.instance.$on("url-change",t.onUrlChange),this.instance.$on("close",()=>{this.close(),r()}),this.instance.$on("update:visible",l=>{l||(this.close(),r())}),this.instance.$mount(this.container)})}close(){this.instance&&(document.body.removeChild(this.instance.$el),this.instance.$destroy(),this.instance=null)}isOpen(){return!!this.instance}}const iframeModal=new IframeModalManager,openIframeModal=n=>iframeModal.open(n),_sfc_main$5={name:"DictionaryLinks",components:{Icon},props:{word:{type:String,required:!0}},computed:{dictionaries(){return getRecommendedDictionaries()}},methods:{getDictionaryName(n){return getDictionaryName(n)},getDictionaryIcon(n){return getDictionaryIcon(n)},handleDictionaryClick(n){this.openDictionary(n,this.word)},async openDictionary(n,t){if(t)try{const r=getDictionaryUrl(n,t),s=getDictionaryName(n),l=`${s} - ${t}`;await openIframeModal({url:r,title:l,showRefresh:!0,showUrlInput:!1,width:"100vw",height:"80vh",onLoaded:()=>{},onError:b=>{b.message.includes("frame-ancestors")||b.message.includes("CSP")?alert(n==="cambridge"||n==="merriam"?`${s}不支持在iframe中显示。

建议：
1. 尝试其他国内词典
2. 或直接访问：${r}`:`${s}不支持在iframe中显示，请尝试其他词典。`):b.message.includes("加载已取消")||alert(`${s}加载失败: ${b.message}`)}})}catch(r){alert(`打开${getDictionaryName(n)}失败: ${r.message}`)}}}};var _sfc_render$5=function(){var t=this,r=t._self._c;return r("div",{staticClass:"dictionary-links"},[r("div",{staticClass:"dictionary-title"},[t._v("权威词典")]),r("div",{staticClass:"dictionary-buttons"},t._l(t.dictionaries,function(s){return r("button",{key:s,staticClass:"dict-btn",attrs:{title:t.getDictionaryName(s)},on:{click:function(l){return t.handleDictionaryClick(s)}}},[r("Icon",{attrs:{icon:t.getDictionaryIcon(s),width:"16",height:"16"}}),r("span",[t._v(t._s(t.getDictionaryName(s)))])],1)}),0)])},_sfc_staticRenderFns$5=[],__component__$5=normalizeComponent(_sfc_main$5,_sfc_render$5,_sfc_staticRenderFns$5,!1,null,"0a00376c");const DictionaryLinks=__component__$5.exports,_sfc_main$4={name:"SliderContainer",props:{items:{type:Array,required:!0},isAnimating:{type:Boolean,default:!1},deltaX:{type:Number,default:0}},methods:{getItemStyle(n){const t=(n-1)*100,r=this.deltaX/window.innerWidth*100;return{transform:`translateX(calc(${t}% + ${r}vw))`,transition:this.isAnimating?"transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)":"none",zIndex:n===1?2:1,opacity:n===1?1:.5}}}};var _sfc_render$4=function(){var t=this,r=t._self._c;return r("div",{staticClass:"slider-container"},t._l(t.items,function(s,l){return r("div",{key:l,staticClass:"slider-item",class:{"is-current":l===1},style:t.getItemStyle(l)},[t._t("default",null,{item:s,index:l})],2)}),0)},_sfc_staticRenderFns$4=[],__component__$4=normalizeComponent(_sfc_main$4,_sfc_render$4,_sfc_staticRenderFns$4,!1,null,"782c2f8a");const SliderContainer=__component__$4.exports,_sfc_main$3={name:"Words",components:{WordsHeader,WordsProgress,AudioButton,CardActions,DictionaryLinks,SliderContainer},data(){return{touchStartX:0,deltaX:0,isDragging:!1,isAnimating:!1,learningQueue:[],currentIdx:0,revealedSet:new Set,phonetic:""}},watch:{currentIdx(){this.saveProgress()}},computed:{...mapState("book",["currentBookIdx","wordBooks","words","GROUP_SIZE","progress"]),currentGroup(){return this.progress.currentGroup},learnedArr(){return this.progress.learnedArr},...mapGetters("book",["bookName","bookId","groupCount","groupStart","groupEnd","getGroupWords"]),currWord(){return this.sliderWords[1]},sliderWords(){const n=this.learningQueue[this.currentIdx-1],t=this.learningQueue[this.currentIdx],r=this.learningQueue[this.currentIdx+1],s=l=>typeof l=="number"?this.words[l]||{en:"",zh:"",enDef:""}:{en:"",zh:"",enDef:""};return[s(n),s(t),s(r)]},...mapGetters("book",["progressPercent","progressText"]),isZhRevealed(){return this.revealedSet.has(this.learningQueue[this.currentIdx])},...mapGetters(["cacheWrapper"])},methods:{...mapMutations("book",["setCurrentBookIdx","setWordBooks","setWords"]),...mapMutations(["setStudyStatus"]),getWordAudioUrl,splitTaggedText,onTouchStart(n){this.isAnimating||this.learningQueue.length===0||(this.isDragging=!0,this.touchStartX=n.changedTouches[0].clientX,this.deltaX=0)},onTouchMove(n){if(!this.isDragging)return;const t=n.changedTouches[0].clientX-this.touchStartX;this.deltaX=t},async onTouchEnd(){if(!this.isDragging)return;this.isDragging=!1;const n=window.innerWidth/4;Math.abs(this.deltaX)>n&&(this.isAnimating=!0,this.deltaX>0?this.currentIdx>0?this.currentIdx--:this.currentIdx=this.learningQueue.length-1:this.currentIdx<this.learningQueue.length-1?this.currentIdx++:this.currentIdx=0,this.revealedSet.clear()),this.deltaX=0,await f(300),this.isAnimating=!1,this.loadPhonetics()},async loadPhonetics(){let n=this.currWord;console.log("[loadPhonetics]",n,this.sliderWords),this.phonetic=await getPhonetic((n==null?void 0:n.en)||"")},revealZh(){this.revealedSet.add(this.learningQueue[this.currentIdx]),this.revealedSet=new Set(this.revealedSet)},passWord(){if(this.learningQueue.length<=1){this.learnedArr.push(this.learningQueue[this.currentIdx]),this.saveProgress(),this.nextGroupOrFinish();return}this.learnedArr.push(this.learningQueue[this.currentIdx]),this.learningQueue.splice(this.currentIdx,1),this.currentIdx>=this.learningQueue.length&&(this.currentIdx=this.learningQueue.length-1),this.revealedSet.clear(),this.saveProgress()},failWord(){this.currentIdx<this.learningQueue.length-1?this.currentIdx++:this.currentIdx=0,this.revealedSet.clear(),this.saveProgress()},async nextGroupOrFinish(){if(this.learnedArr.length>=this.words.length){this.saveProgress(),await this.openAllFinishModal();return}this.saveProgress(),await this.openGroupFinishModal()},async openAllFinishModal(){let n=await openFinishModal({bookName:this.bookName});n.success&&(n.data?this.restartLearning():this.stopLearning())},async openGroupFinishModal(){let{currentGroup:n}=this,t=await openFinishModal({bookName:`${this.bookName} - 第${n+1}组`,subtitle:"当前组已学完，是否继续下一组？",restartText:"继续下一组",homeText:"休息一下"});t.success&&(t.data?this.continueToNextGroup():this.stopAtCurrentGroup())},restartLearning(){this.currentGroup=0,this.learnedArr=[],this.saveProgress(),this.initLearningQueue(),this.setStudyStatus(STUDY_STATUS_DEF.LEARNED)},continueToNextGroup(){this.moveToNextGroup(),this.initLearningQueue()},stopAtCurrentGroup(){this.setStudyStatus(STUDY_STATUS_DEF.LEARNED),this.$router.push("/")},initLearningQueue(){this.learningQueue=this.getGroupWords(),console.log("[this.learningQueue initLearningQueue]",this.learningQueue),this.currentIdx=0,this.revealedSet=new Set,this.deltaX=0,this.isDragging=!1,this.isAnimating=!1},...mapActions("book",["loadBook","saveProgress","moveToNextGroup"]),loadProgress(){this.loadBook(this.currentBookIdx),this.initLearningQueue(),this.loadPhonetics()},stopLearning(){this.setStudyStatus(STUDY_STATUS_DEF.LEARNED),this.$router.push("/")},async openBookModal(){this.$router.push("/wordbooks")},async playCurrentWord(){this.$refs.audioButton.play()}},mounted(){this.loadProgress(),this.learningQueue.length===0&&this.nextGroupOrFinish(),this.cacheHandler=this.cacheWrapper(this.loadProgress),window.addEventListener("storage",this.cacheHandler)},beforeDestroy(){window.removeEventListener("storage",this.cacheHandler)}};var _sfc_render$3=function(){var t=this,r=t._self._c;return r("div",{staticClass:"words-page",on:{touchstart:t.onTouchStart,touchmove:t.onTouchMove,touchend:t.onTouchEnd}},[r("WordsHeader",{attrs:{title:t.bookName},on:{change:t.openBookModal}}),r("WordsProgress",{directives:[{name:"show",rawName:"v-show",value:t.learningQueue.length>0,expression:"learningQueue.length > 0"}],attrs:{total:t.learningQueue.length,current:t.currentIdx+1}}),r("SliderContainer",{attrs:{items:t.sliderWords,isAnimating:t.isAnimating,deltaX:t.deltaX},scopedSlots:t._u([{key:"default",fn:function({item:s}){var l;return[r("div",{staticClass:"word-en"},[t._v(t._s(s.en))]),r("div",{staticStyle:{display:"flex","flex-wrap":"nowrap","align-items":"center",gap:"16px"}},[r("div",{staticClass:"phonetic-text",staticStyle:{"min-width":"100px",cursor:"pointer",color:"#666","font-family":"'IPA', monospace"},on:{click:t.playCurrentWord}},[t._v(" "+t._s(t.phonetic)+" ")]),r("AudioButton",{ref:"audioButton",attrs:{word:(l=t.currWord)==null?void 0:l.en,title:"播放发音"}})],1),r("div",{staticClass:"word-zh",class:{mosaic:!t.isZhRevealed},on:{click:t.revealZh}},t._l(t.splitTaggedText(s.zh),function(b){return r("div",{key:b,staticClass:"word-zh-item"},[t._v(" "+t._s(b)+" ")])}),0),r("DictionaryLinks",{attrs:{word:s.en}})]}}])}),r("CardActions",{attrs:{showIframeBtn:!1},on:{pass:t.passWord,fail:t.failWord}})],1)},_sfc_staticRenderFns$3=[],__component__$3=normalizeComponent(_sfc_main$3,_sfc_render$3,_sfc_staticRenderFns$3,!1,null,"63ea4345");const Words=__component__$3.exports,_sfc_main$2={name:"WordBooks",data(){return{}},computed:{...mapState("book",["wordBooks","currentBookIdx","progress"]),progressMap(){let n={};return this.wordBooks.forEach(t=>{var b;let s=((b=getBookProgress(t.id).learned)==null?void 0:b.length)||0,l=(s/t.words.length).toFixed(4);n[t.id]={learned:s,percent:l}}),n}},methods:{...mapMutations("book",["setCurrentBookIdx"]),...mapActions("book",["loadBook"]),selectBook(n){this.setCurrentBookIdx(n),$message.success("已切换词库")}},mounted(){this.loadBook(this.currentBookIdx)}};var _sfc_render$2=function(){var t=this,r=t._self._c;return r("div",{staticClass:"wordbooks-page"},[t._m(0),t.wordBooks.length===0?r("div",{staticClass:"empty-tip"},[t._v("暂无词库，请导入或添加新词库")]):t._e(),r("ul",{staticClass:"book-list"},t._l(t.wordBooks,function(s,l){return r("li",{key:s.id,class:{active:l===t.currentBookIdx}},[r("div",{staticClass:"book-info"},[r("span",{staticClass:"book-name"},[t._v(t._s(s.name))]),r("span",{staticClass:"book-count"},[t._v(t._s(s.words.length)+"词")]),t.progressMap[s.id]!==void 0?r("span",{staticClass:"book-progress"},[t._v(" "+t._s(t.progressMap[s.id].percent)+"% 已学"+t._s(t.progressMap[s.id].learned)+"词 ")]):t._e()]),r("div",{staticClass:"book-actions"},[l!==t.currentBookIdx?r("button",{staticClass:"switch-btn",on:{click:function(b){return t.selectBook(l)}}},[t._v(" 切换 ")]):r("span",{staticClass:"current-label"},[t._v("当前")]),t._e()])])}),0),t._e()])},_sfc_staticRenderFns$2=[function(){var n=this,t=n._self._c;return t("header",{staticClass:"wb-header"},[t("h2",{staticClass:"title"},[n._v("词库管理")])])}],__component__$2=normalizeComponent(_sfc_main$2,_sfc_render$2,_sfc_staticRenderFns$2,!1,null,"926832ec");const WordBooks=__component__$2.exports,_sfc_main$1={name:"Index",data(){return{dailyWord:null,buttonLoading:!1}},methods:{...mapMutations(["setStudyStatus"]),goWords(){this.setStudyStatus(STUDY_STATUS_DEF.LEARNING),this.$router.push("/words")},goNext(n){},handleButtonClick(n){this.buttonLoading||(this.buttonLoading=!0,Promise.resolve(n.action()).finally(()=>{setTimeout(()=>{this.buttonLoading=!1},500)}))}},computed:{bgStyle(){var n;return`background-image: url(${((n=this==null?void 0:this.dailyWord)==null?void 0:n.bg)||""});`},goOptions(){return this.study_status===STUDY_STATUS_DEF.DEFAULT?[{text:"背单词",nextStatus:STUDY_STATUS_DEF.LEARNING,type:"primary",action:()=>{this.setStudyStatus(STUDY_STATUS_DEF.LEARNING),this.$router.push("/words")}},{text:"复习",nextStatus:STUDY_STATUS_DEF.REVIEWING,type:"secondary",action:()=>{this.setStudyStatus(STUDY_STATUS_DEF.REVIEWING),this.$router.push("/words")}}]:this.study_status===STUDY_STATUS_DEF.LEARNING?[{text:"继续背单词",nextStatus:STUDY_STATUS_DEF.LEARNING,type:"primary",action:()=>{this.setStudyStatus(STUDY_STATUS_DEF.LEARNING),this.$router.push("/words")}}]:this.study_status===STUDY_STATUS_DEF.LEARNED?[{text:"再背一组",nextStatus:STUDY_STATUS_DEF.LEARNING,type:"primary",action:()=>{this.setStudyStatus(STUDY_STATUS_DEF.LEARNING),this.$router.push("/words")}},{text:"复习",nextStatus:STUDY_STATUS_DEF.REVIEWING,type:"secondary",action:()=>{this.setStudyStatus(STUDY_STATUS_DEF.REVIEWING),this.$router.push("/words")}}]:this.study_status===STUDY_STATUS_DEF.REVIEWING?[{text:"背单词",nextStatus:STUDY_STATUS_DEF.LEARNING,type:"primary",action:()=>{this.setStudyStatus(STUDY_STATUS_DEF.LEARNING),this.$router.push("/words")}},{text:"继续复习",nextStatus:STUDY_STATUS_DEF.REVIEWING,type:"secondary",action:()=>{this.setStudyStatus(STUDY_STATUS_DEF.REVIEWING),this.$router.push("/words")}}]:this.study_status===STUDY_STATUS_DEF.REVIEWED?[{text:"背单词",nextStatus:STUDY_STATUS_DEF.DEFAULT,type:"primary",action:()=>{this.setStudyStatus(STUDY_STATUS_DEF.DEFAULT),this.$router.push("/words")}},{text:"复习",nextStatus:STUDY_STATUS_DEF.REVIEWING,type:"secondary",action:()=>{this.setStudyStatus(STUDY_STATUS_DEF.REVIEWING),this.$router.push("/words")}}]:[{text:"背单词",nextStatus:STUDY_STATUS_DEF.DEFAULT,type:"primary",action:()=>{this.setStudyStatus(STUDY_STATUS_DEF.DEFAULT),this.$router.push("/words")}}]},...mapState(["study_status"]),buttonText(){switch(this.study_status){case STUDY_STATUS_DEF.DEFAULT:return"背单词";case STUDY_STATUS_DEF.LEARNING:return"继续背单词";case STUDY_STATUS_DEF.LEARNED:return"复习"}}},async mounted(){var s,l,b,o;let t=(await getRandomWordInfoApi()).data.data,r={en:t.word,zh:t.translations.map(B=>`${B.pos}. ${B.tran_cn}`).join(`
`),sentence_en:(l=(s=t==null?void 0:t.sentences)==null?void 0:s[0])==null?void 0:l.s_content,sentence_zh:(o=(b=t==null?void 0:t.sentences)==null?void 0:b[0])==null?void 0:o.s_cn,bg:`https://image.pollinations.ai/prompt/${t.word}`};this.dailyWord=r}};var _sfc_render$1=function(){var t=this,r=t._self._c;return r("div",{staticClass:"index-page"},[r("div",{staticClass:"bg-img",style:t.bgStyle}),t.dailyWord?r("div",{staticClass:"content"},[r("div",{staticClass:"daily-word-block"},[r("div",{staticClass:"daily-label"},[t._v("每日精选单词")]),r("div",{staticClass:"daily-word"},[t._v(t._s(t.dailyWord.en))]),r("div",{staticClass:"daily-zh"},[t._v(t._s(t.dailyWord.zh))])]),r("div",{staticClass:"daily-sentence-block"},[r("div",{staticClass:"sentence-label"},[t._v("每日英文句子")]),r("div",{staticClass:"sentence-en"},[t._v("“"+t._s(t.dailyWord.sentence_en)+"”")]),r("div",{staticClass:"sentence-zh"},[t._v(t._s(t.dailyWord.sentence_zh))])]),r("div",{staticClass:"f_button_group"},t._l(t.goOptions,function(s){return r("button",{key:s.status,staticClass:"start-btn",class:s.type||"primary",attrs:{disabled:t.buttonLoading},on:{click:function(l){return t.handleButtonClick(s)}}},[t._v(" "+t._s(s.text)+" ")])}),0)]):t._e()])},_sfc_staticRenderFns$1=[],__component__$1=normalizeComponent(_sfc_main$1,_sfc_render$1,_sfc_staticRenderFns$1,!1,null,"0777556a");const Index=__component__$1.exports,_sfc_main={name:"Redirect",created(){const{params:n,query:t}=this.$route,{path:r}=n;this.$router.replace({path:"/"+r,query:t})},render:function(n){return n()}};var _sfc_render=function(){var t=this,r=t._self._c;return r("div")},_sfc_staticRenderFns=[],__component__=normalizeComponent(_sfc_main,_sfc_render,_sfc_staticRenderFns,!1,null,null);const Redirect=__component__.exports;Vue$1.use(VueRouter$1);const router=new VueRouter$1({routes:[{path:"/",component:Index,name:"首页"},{path:"/recognize",component:Recognize,name:"图片识别"},{path:"/words",component:Words,name:"背单词"},{path:"/wordbooks",component:WordBooks,name:"词库"},{path:"/redirect/:path(.*)",component:Redirect}]}),scriptRel="modulepreload",assetsURL=function(n){return"/word-app/"+n},seen={},__vitePreload=function(t,r,s){let l=Promise.resolve();if(r&&r.length>0){let o=function(at){return Promise.all(at.map(ot=>Promise.resolve(ot).then(ct=>({status:"fulfilled",value:ct}),ct=>({status:"rejected",reason:ct}))))};document.getElementsByTagName("link");const B=document.querySelector("meta[property=csp-nonce]"),Qe=(B==null?void 0:B.nonce)||(B==null?void 0:B.getAttribute("nonce"));l=o(r.map(at=>{if(at=assetsURL(at),at in seen)return;seen[at]=!0;const ot=at.endsWith(".css"),ct=ot?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${at}"]${ct}`))return;const ut=document.createElement("link");if(ut.rel=ot?"stylesheet":scriptRel,ot||(ut.as="script"),ut.crossOrigin="",ut.href=at,Qe&&ut.setAttribute("nonce",Qe),document.head.appendChild(ut),ot)return new Promise((lt,ea)=>{ut.addEventListener("load",lt),ut.addEventListener("error",()=>ea(new Error(`Unable to preload CSS for ${at}`)))})}))}function b(o){const B=new Event("vite:preloadError",{cancelable:!0});if(B.payload=o,window.dispatchEvent(B),!B.defaultPrevented)throw o}return l.then(o=>{for(const B of o||[])B.status==="rejected"&&b(B.reason);return t().catch(b)})};function registerSW(n={}){const{immediate:t=!1,onNeedRefresh:r,onOfflineReady:s,onRegistered:l,onRegisteredSW:b,onRegisterError:o}=n;let B,Qe;const at=async(ct=!0)=>{await Qe};async function ot(){if("serviceWorker"in navigator){if(B=await __vitePreload(async()=>{const{Workbox:ct}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:ct}},[]).then(({Workbox:ct})=>new ct("/word-app/sw.js",{scope:"/word-app/",type:"classic"})).catch(ct=>{o==null||o(ct)}),!B)return;B.addEventListener("activated",ct=>{(ct.isUpdate||ct.isExternal)&&window.location.reload()}),B.addEventListener("installed",ct=>{ct.isUpdate||s==null||s()}),B.register({immediate:t}).then(ct=>{b?b("/word-app/sw.js",ct):l==null||l(ct)}).catch(ct=>{o==null||o(ct)})}}return Qe=ot(),at}var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var vconsole_min$1={exports:{}};/*!
 * vConsole v3.15.1 (https://github.com/Tencent/vConsole)
 *
 * Tencent is pleased to support the open source community by making vConsole available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */var vconsole_min=vconsole_min$1.exports,hasRequiredVconsole_min;function requireVconsole_min(){return hasRequiredVconsole_min||(hasRequiredVconsole_min=1,function(module,exports){(function(n,t){module.exports=t()})(vconsole_min||self,function(){return function(){var __webpack_modules__={4264:function(n,t,r){n.exports=r(7588)},5036:function(n,t,r){r(1719),r(5677),r(6394),r(5334),r(6969),r(2021),r(8328),r(2129);var s=r(1287);n.exports=s.Promise},2582:function(n,t,r){r(1646),r(6394),r(2004),r(462),r(8407),r(2429),r(1172),r(8288),r(1274),r(8201),r(6626),r(3211),r(9952),r(15),r(9831),r(7521),r(2972),r(6956),r(5222),r(2257);var s=r(1287);n.exports=s.Symbol},8257:function(n,t,r){var s=r(7583),l=r(9212),b=r(5637),o=s.TypeError;n.exports=function(B){if(l(B))return B;throw o(b(B)+" is not a function")}},1186:function(n,t,r){var s=r(7583),l=r(2097),b=r(5637),o=s.TypeError;n.exports=function(B){if(l(B))return B;throw o(b(B)+" is not a constructor")}},9882:function(n,t,r){var s=r(7583),l=r(9212),b=s.String,o=s.TypeError;n.exports=function(B){if(typeof B=="object"||l(B))return B;throw o("Can't set "+b(B)+" as a prototype")}},6288:function(n,t,r){var s=r(3649),l=r(3590),b=r(4615),o=s("unscopables"),B=Array.prototype;B[o]==null&&b.f(B,o,{configurable:!0,value:l(null)}),n.exports=function(Qe){B[o][Qe]=!0}},4761:function(n,t,r){var s=r(7583),l=r(2447),b=s.TypeError;n.exports=function(o,B){if(l(B,o))return o;throw b("Incorrect invocation")}},2569:function(n,t,r){var s=r(7583),l=r(794),b=s.String,o=s.TypeError;n.exports=function(B){if(l(B))return B;throw o(b(B)+" is not an object")}},5766:function(n,t,r){var s=r(2977),l=r(6782),b=r(1825),o=function(B){return function(Qe,at,ot){var ct,ut=s(Qe),lt=b(ut),ea=l(ot,lt);if(B&&at!=at){for(;lt>ea;)if((ct=ut[ea++])!=ct)return!0}else for(;lt>ea;ea++)if((B||ea in ut)&&ut[ea]===at)return B||ea||0;return!B&&-1}};n.exports={includes:o(!0),indexOf:o(!1)}},4805:function(n,t,r){var s=r(2938),l=r(7386),b=r(5044),o=r(1324),B=r(1825),Qe=r(4822),at=l([].push),ot=function(ct){var ut=ct==1,lt=ct==2,ea=ct==3,ta=ct==4,ra=ct==6,aa=ct==7,ia=ct==5||ra;return function(la,ba,_a,sa){for(var ua,ma,$a=o(la),Da=b($a),Ma=s(ba,_a),fa=B(Da),va=0,ka=sa||Qe,Ra=ut?ka(la,fa):lt||aa?ka(la,0):void 0;fa>va;va++)if((ia||va in Da)&&(ma=Ma(ua=Da[va],va,$a),ct))if(ut)Ra[va]=ma;else if(ma)switch(ct){case 3:return!0;case 5:return ua;case 6:return va;case 2:at(Ra,ua)}else switch(ct){case 4:return!1;case 7:at(Ra,ua)}return ra?-1:ea||ta?ta:Ra}};n.exports={forEach:ot(0),map:ot(1),filter:ot(2),some:ot(3),every:ot(4),find:ot(5),findIndex:ot(6),filterReject:ot(7)}},9269:function(n,t,r){var s=r(6544),l=r(3649),b=r(4061),o=l("species");n.exports=function(B){return b>=51||!s(function(){var Qe=[];return(Qe.constructor={})[o]=function(){return{foo:1}},Qe[B](Boolean).foo!==1})}},4546:function(n,t,r){var s=r(7583),l=r(6782),b=r(1825),o=r(5999),B=s.Array,Qe=Math.max;n.exports=function(at,ot,ct){for(var ut=b(at),lt=l(ot,ut),ea=l(ct===void 0?ut:ct,ut),ta=B(Qe(ea-lt,0)),ra=0;lt<ea;lt++,ra++)o(ta,ra,at[lt]);return ta.length=ra,ta}},6917:function(n,t,r){var s=r(7386);n.exports=s([].slice)},5289:function(n,t,r){var s=r(7583),l=r(4521),b=r(2097),o=r(794),B=r(3649)("species"),Qe=s.Array;n.exports=function(at){var ot;return l(at)&&(ot=at.constructor,(b(ot)&&(ot===Qe||l(ot.prototype))||o(ot)&&(ot=ot[B])===null)&&(ot=void 0)),ot===void 0?Qe:ot}},4822:function(n,t,r){var s=r(5289);n.exports=function(l,b){return new(s(l))(b===0?0:b)}},3616:function(n,t,r){var s=r(3649)("iterator"),l=!1;try{var b=0,o={next:function(){return{done:!!b++}},return:function(){l=!0}};o[s]=function(){return this},Array.from(o,function(){throw 2})}catch{}n.exports=function(B,Qe){if(!Qe&&!l)return!1;var at=!1;try{var ot={};ot[s]=function(){return{next:function(){return{done:at=!0}}}},B(ot)}catch{}return at}},9624:function(n,t,r){var s=r(7386),l=s({}.toString),b=s("".slice);n.exports=function(o){return b(l(o),8,-1)}},3058:function(n,t,r){var s=r(7583),l=r(8191),b=r(9212),o=r(9624),B=r(3649)("toStringTag"),Qe=s.Object,at=o(function(){return arguments}())=="Arguments";n.exports=l?o:function(ot){var ct,ut,lt;return ot===void 0?"Undefined":ot===null?"Null":typeof(ut=function(ea,ta){try{return ea[ta]}catch{}}(ct=Qe(ot),B))=="string"?ut:at?o(ct):(lt=o(ct))=="Object"&&b(ct.callee)?"Arguments":lt}},1509:function(n,t,r){var s=r(7386)("".replace),l=String(Error("zxcasd").stack),b=/\n\s*at [^:]*:[^\n]*/,o=b.test(l);n.exports=function(B,Qe){if(o&&typeof B=="string")for(;Qe--;)B=s(B,b,"");return B}},3478:function(n,t,r){var s=r(2870),l=r(929),b=r(6683),o=r(4615);n.exports=function(B,Qe,at){for(var ot=l(Qe),ct=o.f,ut=b.f,lt=0;lt<ot.length;lt++){var ea=ot[lt];s(B,ea)||at&&s(at,ea)||ct(B,ea,ut(Qe,ea))}}},926:function(n,t,r){var s=r(6544);n.exports=!s(function(){function l(){}return l.prototype.constructor=null,Object.getPrototypeOf(new l)!==l.prototype})},4683:function(n,t,r){var s=r(2365).IteratorPrototype,l=r(3590),b=r(4677),o=r(8821),B=r(339),Qe=function(){return this};n.exports=function(at,ot,ct,ut){var lt=ot+" Iterator";return at.prototype=l(s,{next:b(+!ut,ct)}),o(at,lt,!1,!0),B[lt]=Qe,at}},57:function(n,t,r){var s=r(8494),l=r(4615),b=r(4677);n.exports=s?function(o,B,Qe){return l.f(o,B,b(1,Qe))}:function(o,B,Qe){return o[B]=Qe,o}},4677:function(n){n.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},5999:function(n,t,r){var s=r(8734),l=r(4615),b=r(4677);n.exports=function(o,B,Qe){var at=s(B);at in o?l.f(o,at,b(0,Qe)):o[at]=Qe}},9012:function(n,t,r){var s=r(7263),l=r(8262),b=r(6268),o=r(4340),B=r(9212),Qe=r(4683),at=r(729),ot=r(7496),ct=r(8821),ut=r(57),lt=r(1270),ea=r(3649),ta=r(339),ra=r(2365),aa=o.PROPER,ia=o.CONFIGURABLE,la=ra.IteratorPrototype,ba=ra.BUGGY_SAFARI_ITERATORS,_a=ea("iterator"),sa="keys",ua="values",ma="entries",$a=function(){return this};n.exports=function(Da,Ma,fa,va,ka,Ra,qa){Qe(fa,Ma,va);var ha,ja,Pa,Ba=function(ir){if(ir===ka&&Sa)return Sa;if(!ba&&ir in da)return da[ir];switch(ir){case sa:case ua:case ma:return function(){return new fa(this,ir)}}return function(){return new fa(this)}},Oa=Ma+" Iterator",Ea=!1,da=Da.prototype,xa=da[_a]||da["@@iterator"]||ka&&da[ka],Sa=!ba&&xa||Ba(ka),Ha=Ma=="Array"&&da.entries||xa;if(Ha&&(ha=at(Ha.call(new Da)))!==Object.prototype&&ha.next&&(b||at(ha)===la||(ot?ot(ha,la):B(ha[_a])||lt(ha,_a,$a)),ct(ha,Oa,!0,!0),b&&(ta[Oa]=$a)),aa&&ka==ua&&xa&&xa.name!==ua&&(!b&&ia?ut(da,"name",ua):(Ea=!0,Sa=function(){return l(xa,this)})),ka)if(ja={values:Ba(ua),keys:Ra?Sa:Ba(sa),entries:Ba(ma)},qa)for(Pa in ja)(ba||Ea||!(Pa in da))&&lt(da,Pa,ja[Pa]);else s({target:Ma,proto:!0,forced:ba||Ea},ja);return b&&!qa||da[_a]===Sa||lt(da,_a,Sa,{name:ka}),ta[Ma]=Sa,ja}},2219:function(n,t,r){var s=r(1287),l=r(2870),b=r(491),o=r(4615).f;n.exports=function(B){var Qe=s.Symbol||(s.Symbol={});l(Qe,B)||o(Qe,B,{value:b.f(B)})}},8494:function(n,t,r){var s=r(6544);n.exports=!s(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},6668:function(n,t,r){var s=r(7583),l=r(794),b=s.document,o=l(b)&&l(b.createElement);n.exports=function(B){return o?b.createElement(B):{}}},6778:function(n){n.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},9307:function(n,t,r){var s=r(6668)("span").classList,l=s&&s.constructor&&s.constructor.prototype;n.exports=l===Object.prototype?void 0:l},2274:function(n){n.exports=typeof window=="object"},3256:function(n,t,r){var s=r(6918),l=r(7583);n.exports=/ipad|iphone|ipod/i.test(s)&&l.Pebble!==void 0},7020:function(n,t,r){var s=r(6918);n.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(s)},5354:function(n,t,r){var s=r(9624),l=r(7583);n.exports=s(l.process)=="process"},6846:function(n,t,r){var s=r(6918);n.exports=/web0s(?!.*chrome)/i.test(s)},6918:function(n,t,r){var s=r(5897);n.exports=s("navigator","userAgent")||""},4061:function(n,t,r){var s,l,b=r(7583),o=r(6918),B=b.process,Qe=b.Deno,at=B&&B.versions||Qe&&Qe.version,ot=at&&at.v8;ot&&(l=(s=ot.split("."))[0]>0&&s[0]<4?1:+(s[0]+s[1])),!l&&o&&(!(s=o.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=o.match(/Chrome\/(\d+)/))&&(l=+s[1]),n.exports=l},5690:function(n){n.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1178:function(n,t,r){var s=r(6544),l=r(4677);n.exports=!s(function(){var b=Error("a");return!("stack"in b)||(Object.defineProperty(b,"stack",l(1,7)),b.stack!==7)})},7263:function(n,t,r){var s=r(7583),l=r(6683).f,b=r(57),o=r(1270),B=r(460),Qe=r(3478),at=r(4451);n.exports=function(ot,ct){var ut,lt,ea,ta,ra,aa=ot.target,ia=ot.global,la=ot.stat;if(ut=ia?s:la?s[aa]||B(aa,{}):(s[aa]||{}).prototype)for(lt in ct){if(ta=ct[lt],ea=ot.noTargetGet?(ra=l(ut,lt))&&ra.value:ut[lt],!at(ia?lt:aa+(la?".":"#")+lt,ot.forced)&&ea!==void 0){if(typeof ta==typeof ea)continue;Qe(ta,ea)}(ot.sham||ea&&ea.sham)&&b(ta,"sham",!0),o(ut,lt,ta,ot)}}},6544:function(n){n.exports=function(t){try{return!!t()}catch{return!0}}},1611:function(n,t,r){var s=r(8987),l=Function.prototype,b=l.apply,o=l.call;n.exports=typeof Reflect=="object"&&Reflect.apply||(s?o.bind(b):function(){return o.apply(b,arguments)})},2938:function(n,t,r){var s=r(7386),l=r(8257),b=r(8987),o=s(s.bind);n.exports=function(B,Qe){return l(B),Qe===void 0?B:b?o(B,Qe):function(){return B.apply(Qe,arguments)}}},8987:function(n,t,r){var s=r(6544);n.exports=!s(function(){var l=(function(){}).bind();return typeof l!="function"||l.hasOwnProperty("prototype")})},8262:function(n,t,r){var s=r(8987),l=Function.prototype.call;n.exports=s?l.bind(l):function(){return l.apply(l,arguments)}},4340:function(n,t,r){var s=r(8494),l=r(2870),b=Function.prototype,o=s&&Object.getOwnPropertyDescriptor,B=l(b,"name"),Qe=B&&(function(){}).name==="something",at=B&&(!s||s&&o(b,"name").configurable);n.exports={EXISTS:B,PROPER:Qe,CONFIGURABLE:at}},7386:function(n,t,r){var s=r(8987),l=Function.prototype,b=l.bind,o=l.call,B=s&&b.bind(o,o);n.exports=s?function(Qe){return Qe&&B(Qe)}:function(Qe){return Qe&&function(){return o.apply(Qe,arguments)}}},5897:function(n,t,r){var s=r(7583),l=r(9212),b=function(o){return l(o)?o:void 0};n.exports=function(o,B){return arguments.length<2?b(s[o]):s[o]&&s[o][B]}},8272:function(n,t,r){var s=r(3058),l=r(911),b=r(339),o=r(3649)("iterator");n.exports=function(B){if(B!=null)return l(B,o)||l(B,"@@iterator")||b[s(B)]}},6307:function(n,t,r){var s=r(7583),l=r(8262),b=r(8257),o=r(2569),B=r(5637),Qe=r(8272),at=s.TypeError;n.exports=function(ot,ct){var ut=arguments.length<2?Qe(ot):ct;if(b(ut))return o(l(ut,ot));throw at(B(ot)+" is not iterable")}},911:function(n,t,r){var s=r(8257);n.exports=function(l,b){var o=l[b];return o==null?void 0:s(o)}},7583:function(n,t,r){var s=function(l){return l&&l.Math==Math&&l};n.exports=s(typeof globalThis=="object"&&globalThis)||s(typeof window=="object"&&window)||s(typeof self=="object"&&self)||s(typeof r.g=="object"&&r.g)||function(){return this}()||Function("return this")()},2870:function(n,t,r){var s=r(7386),l=r(1324),b=s({}.hasOwnProperty);n.exports=Object.hasOwn||function(o,B){return b(l(o),B)}},4639:function(n){n.exports={}},2716:function(n,t,r){var s=r(7583);n.exports=function(l,b){var o=s.console;o&&o.error&&(arguments.length==1?o.error(l):o.error(l,b))}},482:function(n,t,r){var s=r(5897);n.exports=s("document","documentElement")},275:function(n,t,r){var s=r(8494),l=r(6544),b=r(6668);n.exports=!s&&!l(function(){return Object.defineProperty(b("div"),"a",{get:function(){return 7}}).a!=7})},5044:function(n,t,r){var s=r(7583),l=r(7386),b=r(6544),o=r(9624),B=s.Object,Qe=l("".split);n.exports=b(function(){return!B("z").propertyIsEnumerable(0)})?function(at){return o(at)=="String"?Qe(at,""):B(at)}:B},9734:function(n,t,r){var s=r(7386),l=r(9212),b=r(1314),o=s(Function.toString);l(b.inspectSource)||(b.inspectSource=function(B){return o(B)}),n.exports=b.inspectSource},4402:function(n,t,r){var s=r(794),l=r(57);n.exports=function(b,o){s(o)&&"cause"in o&&l(b,"cause",o.cause)}},2743:function(n,t,r){var s,l,b,o=r(9491),B=r(7583),Qe=r(7386),at=r(794),ot=r(57),ct=r(2870),ut=r(1314),lt=r(9137),ea=r(4639),ta="Object already initialized",ra=B.TypeError,aa=B.WeakMap;if(o||ut.state){var ia=ut.state||(ut.state=new aa),la=Qe(ia.get),ba=Qe(ia.has),_a=Qe(ia.set);s=function(ua,ma){if(ba(ia,ua))throw new ra(ta);return ma.facade=ua,_a(ia,ua,ma),ma},l=function(ua){return la(ia,ua)||{}},b=function(ua){return ba(ia,ua)}}else{var sa=lt("state");ea[sa]=!0,s=function(ua,ma){if(ct(ua,sa))throw new ra(ta);return ma.facade=ua,ot(ua,sa,ma),ma},l=function(ua){return ct(ua,sa)?ua[sa]:{}},b=function(ua){return ct(ua,sa)}}n.exports={set:s,get:l,has:b,enforce:function(ua){return b(ua)?l(ua):s(ua,{})},getterFor:function(ua){return function(ma){var $a;if(!at(ma)||($a=l(ma)).type!==ua)throw ra("Incompatible receiver, "+ua+" required");return $a}}}},114:function(n,t,r){var s=r(3649),l=r(339),b=s("iterator"),o=Array.prototype;n.exports=function(B){return B!==void 0&&(l.Array===B||o[b]===B)}},4521:function(n,t,r){var s=r(9624);n.exports=Array.isArray||function(l){return s(l)=="Array"}},9212:function(n){n.exports=function(t){return typeof t=="function"}},2097:function(n,t,r){var s=r(7386),l=r(6544),b=r(9212),o=r(3058),B=r(5897),Qe=r(9734),at=function(){},ot=[],ct=B("Reflect","construct"),ut=/^\s*(?:class|function)\b/,lt=s(ut.exec),ea=!ut.exec(at),ta=function(aa){if(!b(aa))return!1;try{return ct(at,ot,aa),!0}catch{return!1}},ra=function(aa){if(!b(aa))return!1;switch(o(aa)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ea||!!lt(ut,Qe(aa))}catch{return!0}};ra.sham=!0,n.exports=!ct||l(function(){var aa;return ta(ta.call)||!ta(Object)||!ta(function(){aa=!0})||aa})?ra:ta},4451:function(n,t,r){var s=r(6544),l=r(9212),b=/#|\.prototype\./,o=function(ct,ut){var lt=Qe[B(ct)];return lt==ot||lt!=at&&(l(ut)?s(ut):!!ut)},B=o.normalize=function(ct){return String(ct).replace(b,".").toLowerCase()},Qe=o.data={},at=o.NATIVE="N",ot=o.POLYFILL="P";n.exports=o},794:function(n,t,r){var s=r(9212);n.exports=function(l){return typeof l=="object"?l!==null:s(l)}},6268:function(n){n.exports=!1},5871:function(n,t,r){var s=r(7583),l=r(5897),b=r(9212),o=r(2447),B=r(7786),Qe=s.Object;n.exports=B?function(at){return typeof at=="symbol"}:function(at){var ot=l("Symbol");return b(ot)&&o(ot.prototype,Qe(at))}},4026:function(n,t,r){var s=r(7583),l=r(2938),b=r(8262),o=r(2569),B=r(5637),Qe=r(114),at=r(1825),ot=r(2447),ct=r(6307),ut=r(8272),lt=r(7093),ea=s.TypeError,ta=function(aa,ia){this.stopped=aa,this.result=ia},ra=ta.prototype;n.exports=function(aa,ia,la){var ba,_a,sa,ua,ma,$a,Da,Ma=la&&la.that,fa=!(!la||!la.AS_ENTRIES),va=!(!la||!la.IS_ITERATOR),ka=!(!la||!la.INTERRUPTED),Ra=l(ia,Ma),qa=function(ja){return ba&&lt(ba,"normal",ja),new ta(!0,ja)},ha=function(ja){return fa?(o(ja),ka?Ra(ja[0],ja[1],qa):Ra(ja[0],ja[1])):ka?Ra(ja,qa):Ra(ja)};if(va)ba=aa;else{if(!(_a=ut(aa)))throw ea(B(aa)+" is not iterable");if(Qe(_a)){for(sa=0,ua=at(aa);ua>sa;sa++)if((ma=ha(aa[sa]))&&ot(ra,ma))return ma;return new ta(!1)}ba=ct(aa,_a)}for($a=ba.next;!(Da=b($a,ba)).done;){try{ma=ha(Da.value)}catch(ja){lt(ba,"throw",ja)}if(typeof ma=="object"&&ma&&ot(ra,ma))return ma}return new ta(!1)}},7093:function(n,t,r){var s=r(8262),l=r(2569),b=r(911);n.exports=function(o,B,Qe){var at,ot;l(o);try{if(!(at=b(o,"return"))){if(B==="throw")throw Qe;return Qe}at=s(at,o)}catch(ct){ot=!0,at=ct}if(B==="throw")throw Qe;if(ot)throw at;return l(at),Qe}},2365:function(n,t,r){var s,l,b,o=r(6544),B=r(9212),Qe=r(3590),at=r(729),ot=r(1270),ct=r(3649),ut=r(6268),lt=ct("iterator"),ea=!1;[].keys&&("next"in(b=[].keys())?(l=at(at(b)))!==Object.prototype&&(s=l):ea=!0),s==null||o(function(){var ta={};return s[lt].call(ta)!==ta})?s={}:ut&&(s=Qe(s)),B(s[lt])||ot(s,lt,function(){return this}),n.exports={IteratorPrototype:s,BUGGY_SAFARI_ITERATORS:ea}},339:function(n){n.exports={}},1825:function(n,t,r){var s=r(97);n.exports=function(l){return s(l.length)}},2095:function(n,t,r){var s,l,b,o,B,Qe,at,ot,ct=r(7583),ut=r(2938),lt=r(6683).f,ea=r(8117).set,ta=r(7020),ra=r(3256),aa=r(6846),ia=r(5354),la=ct.MutationObserver||ct.WebKitMutationObserver,ba=ct.document,_a=ct.process,sa=ct.Promise,ua=lt(ct,"queueMicrotask"),ma=ua&&ua.value;ma||(s=function(){var $a,Da;for(ia&&($a=_a.domain)&&$a.exit();l;){Da=l.fn,l=l.next;try{Da()}catch(Ma){throw l?o():b=void 0,Ma}}b=void 0,$a&&$a.enter()},ta||ia||aa||!la||!ba?!ra&&sa&&sa.resolve?((at=sa.resolve(void 0)).constructor=sa,ot=ut(at.then,at),o=function(){ot(s)}):ia?o=function(){_a.nextTick(s)}:(ea=ut(ea,ct),o=function(){ea(s)}):(B=!0,Qe=ba.createTextNode(""),new la(s).observe(Qe,{characterData:!0}),o=function(){Qe.data=B=!B})),n.exports=ma||function($a){var Da={fn:$a,next:void 0};b&&(b.next=Da),l||(l=Da,o()),b=Da}},783:function(n,t,r){var s=r(7583);n.exports=s.Promise},8640:function(n,t,r){var s=r(4061),l=r(6544);n.exports=!!Object.getOwnPropertySymbols&&!l(function(){var b=Symbol();return!String(b)||!(Object(b)instanceof Symbol)||!Symbol.sham&&s&&s<41})},9491:function(n,t,r){var s=r(7583),l=r(9212),b=r(9734),o=s.WeakMap;n.exports=l(o)&&/native code/.test(b(o))},5084:function(n,t,r){var s=r(8257),l=function(b){var o,B;this.promise=new b(function(Qe,at){if(o!==void 0||B!==void 0)throw TypeError("Bad Promise constructor");o=Qe,B=at}),this.resolve=s(o),this.reject=s(B)};n.exports.f=function(b){return new l(b)}},2764:function(n,t,r){var s=r(8320);n.exports=function(l,b){return l===void 0?arguments.length<2?"":b:s(l)}},3590:function(n,t,r){var s,l=r(2569),b=r(8728),o=r(5690),B=r(4639),Qe=r(482),at=r(6668),ot=r(9137),ct=ot("IE_PROTO"),ut=function(){},lt=function(ra){return"<script>"+ra+"<\/script>"},ea=function(ra){ra.write(lt("")),ra.close();var aa=ra.parentWindow.Object;return ra=null,aa},ta=function(){try{s=new ActiveXObject("htmlfile")}catch{}var ra,aa;ta=typeof document<"u"?document.domain&&s?ea(s):((aa=at("iframe")).style.display="none",Qe.appendChild(aa),aa.src="javascript:",(ra=aa.contentWindow.document).open(),ra.write(lt("document.F=Object")),ra.close(),ra.F):ea(s);for(var ia=o.length;ia--;)delete ta.prototype[o[ia]];return ta()};B[ct]=!0,n.exports=Object.create||function(ra,aa){var ia;return ra!==null?(ut.prototype=l(ra),ia=new ut,ut.prototype=null,ia[ct]=ra):ia=ta(),aa===void 0?ia:b.f(ia,aa)}},8728:function(n,t,r){var s=r(8494),l=r(7670),b=r(4615),o=r(2569),B=r(2977),Qe=r(5432);t.f=s&&!l?Object.defineProperties:function(at,ot){o(at);for(var ct,ut=B(ot),lt=Qe(ot),ea=lt.length,ta=0;ea>ta;)b.f(at,ct=lt[ta++],ut[ct]);return at}},4615:function(n,t,r){var s=r(7583),l=r(8494),b=r(275),o=r(7670),B=r(2569),Qe=r(8734),at=s.TypeError,ot=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,ut="enumerable",lt="configurable",ea="writable";t.f=l?o?function(ta,ra,aa){if(B(ta),ra=Qe(ra),B(aa),typeof ta=="function"&&ra==="prototype"&&"value"in aa&&ea in aa&&!aa.writable){var ia=ct(ta,ra);ia&&ia.writable&&(ta[ra]=aa.value,aa={configurable:lt in aa?aa.configurable:ia.configurable,enumerable:ut in aa?aa.enumerable:ia.enumerable,writable:!1})}return ot(ta,ra,aa)}:ot:function(ta,ra,aa){if(B(ta),ra=Qe(ra),B(aa),b)try{return ot(ta,ra,aa)}catch{}if("get"in aa||"set"in aa)throw at("Accessors not supported");return"value"in aa&&(ta[ra]=aa.value),ta}},6683:function(n,t,r){var s=r(8494),l=r(8262),b=r(112),o=r(4677),B=r(2977),Qe=r(8734),at=r(2870),ot=r(275),ct=Object.getOwnPropertyDescriptor;t.f=s?ct:function(ut,lt){if(ut=B(ut),lt=Qe(lt),ot)try{return ct(ut,lt)}catch{}if(at(ut,lt))return o(!l(b.f,ut,lt),ut[lt])}},3130:function(n,t,r){var s=r(9624),l=r(2977),b=r(9275).f,o=r(4546),B=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];n.exports.f=function(Qe){return B&&s(Qe)=="Window"?function(at){try{return b(at)}catch{return o(B)}}(Qe):b(l(Qe))}},9275:function(n,t,r){var s=r(8356),l=r(5690).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(b){return s(b,l)}},4012:function(n,t){t.f=Object.getOwnPropertySymbols},729:function(n,t,r){var s=r(7583),l=r(2870),b=r(9212),o=r(1324),B=r(9137),Qe=r(926),at=B("IE_PROTO"),ot=s.Object,ct=ot.prototype;n.exports=Qe?ot.getPrototypeOf:function(ut){var lt=o(ut);if(l(lt,at))return lt[at];var ea=lt.constructor;return b(ea)&&lt instanceof ea?ea.prototype:lt instanceof ot?ct:null}},2447:function(n,t,r){var s=r(7386);n.exports=s({}.isPrototypeOf)},8356:function(n,t,r){var s=r(7386),l=r(2870),b=r(2977),o=r(5766).indexOf,B=r(4639),Qe=s([].push);n.exports=function(at,ot){var ct,ut=b(at),lt=0,ea=[];for(ct in ut)!l(B,ct)&&l(ut,ct)&&Qe(ea,ct);for(;ot.length>lt;)l(ut,ct=ot[lt++])&&(~o(ea,ct)||Qe(ea,ct));return ea}},5432:function(n,t,r){var s=r(8356),l=r(5690);n.exports=Object.keys||function(b){return s(b,l)}},112:function(n,t){var r={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,l=s&&!r.call({1:2},1);t.f=l?function(b){var o=s(this,b);return!!o&&o.enumerable}:r},7496:function(n,t,r){var s=r(7386),l=r(2569),b=r(9882);n.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var o,B=!1,Qe={};try{(o=s(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(Qe,[]),B=Qe instanceof Array}catch{}return function(at,ot){return l(at),b(ot),B?o(at,ot):at.__proto__=ot,at}}():void 0)},3060:function(n,t,r){var s=r(8191),l=r(3058);n.exports=s?{}.toString:function(){return"[object "+l(this)+"]"}},6252:function(n,t,r){var s=r(7583),l=r(8262),b=r(9212),o=r(794),B=s.TypeError;n.exports=function(Qe,at){var ot,ct;if(at==="string"&&b(ot=Qe.toString)&&!o(ct=l(ot,Qe))||b(ot=Qe.valueOf)&&!o(ct=l(ot,Qe))||at!=="string"&&b(ot=Qe.toString)&&!o(ct=l(ot,Qe)))return ct;throw B("Can't convert object to primitive value")}},929:function(n,t,r){var s=r(5897),l=r(7386),b=r(9275),o=r(4012),B=r(2569),Qe=l([].concat);n.exports=s("Reflect","ownKeys")||function(at){var ot=b.f(B(at)),ct=o.f;return ct?Qe(ot,ct(at)):ot}},1287:function(n,t,r){var s=r(7583);n.exports=s},544:function(n){n.exports=function(t){try{return{error:!1,value:t()}}catch(r){return{error:!0,value:r}}}},5732:function(n,t,r){var s=r(2569),l=r(794),b=r(5084);n.exports=function(o,B){if(s(o),l(B)&&B.constructor===o)return B;var Qe=b.f(o);return(0,Qe.resolve)(B),Qe.promise}},2723:function(n){var t=function(){this.head=null,this.tail=null};t.prototype={add:function(r){var s={item:r,next:null};this.head?this.tail.next=s:this.head=s,this.tail=s},get:function(){var r=this.head;if(r)return this.head=r.next,this.tail===r&&(this.tail=null),r.item}},n.exports=t},6893:function(n,t,r){var s=r(1270);n.exports=function(l,b,o){for(var B in b)s(l,B,b[B],o);return l}},1270:function(n,t,r){var s=r(7583),l=r(9212),b=r(2870),o=r(57),B=r(460),Qe=r(9734),at=r(2743),ot=r(4340).CONFIGURABLE,ct=at.get,ut=at.enforce,lt=String(String).split("String");(n.exports=function(ea,ta,ra,aa){var ia,la=!!aa&&!!aa.unsafe,ba=!!aa&&!!aa.enumerable,_a=!!aa&&!!aa.noTargetGet,sa=aa&&aa.name!==void 0?aa.name:ta;l(ra)&&(String(sa).slice(0,7)==="Symbol("&&(sa="["+String(sa).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!b(ra,"name")||ot&&ra.name!==sa)&&o(ra,"name",sa),(ia=ut(ra)).source||(ia.source=lt.join(typeof sa=="string"?sa:""))),ea!==s?(la?!_a&&ea[ta]&&(ba=!0):delete ea[ta],ba?ea[ta]=ra:o(ea,ta,ra)):ba?ea[ta]=ra:B(ta,ra)})(Function.prototype,"toString",function(){return l(this)&&ct(this).source||Qe(this)})},3955:function(n,t,r){var s=r(7583).TypeError;n.exports=function(l){if(l==null)throw s("Can't call method on "+l);return l}},460:function(n,t,r){var s=r(7583),l=Object.defineProperty;n.exports=function(b,o){try{l(s,b,{value:o,configurable:!0,writable:!0})}catch{s[b]=o}return o}},7730:function(n,t,r){var s=r(5897),l=r(4615),b=r(3649),o=r(8494),B=b("species");n.exports=function(Qe){var at=s(Qe),ot=l.f;o&&at&&!at[B]&&ot(at,B,{configurable:!0,get:function(){return this}})}},8821:function(n,t,r){var s=r(4615).f,l=r(2870),b=r(3649)("toStringTag");n.exports=function(o,B,Qe){o&&!Qe&&(o=o.prototype),o&&!l(o,b)&&s(o,b,{configurable:!0,value:B})}},9137:function(n,t,r){var s=r(7836),l=r(8284),b=s("keys");n.exports=function(o){return b[o]||(b[o]=l(o))}},1314:function(n,t,r){var s=r(7583),l=r(460),b="__core-js_shared__",o=s[b]||l(b,{});n.exports=o},7836:function(n,t,r){var s=r(6268),l=r(1314);(n.exports=function(b,o){return l[b]||(l[b]=o!==void 0?o:{})})("versions",[]).push({version:"3.21.1",mode:s?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},564:function(n,t,r){var s=r(2569),l=r(1186),b=r(3649)("species");n.exports=function(o,B){var Qe,at=s(o).constructor;return at===void 0||(Qe=s(at)[b])==null?B:l(Qe)}},6389:function(n,t,r){var s=r(7386),l=r(7486),b=r(8320),o=r(3955),B=s("".charAt),Qe=s("".charCodeAt),at=s("".slice),ot=function(ct){return function(ut,lt){var ea,ta,ra=b(o(ut)),aa=l(lt),ia=ra.length;return aa<0||aa>=ia?ct?"":void 0:(ea=Qe(ra,aa))<55296||ea>56319||aa+1===ia||(ta=Qe(ra,aa+1))<56320||ta>57343?ct?B(ra,aa):ea:ct?at(ra,aa,aa+2):ta-56320+(ea-55296<<10)+65536}};n.exports={codeAt:ot(!1),charAt:ot(!0)}},8117:function(n,t,r){var s,l,b,o,B=r(7583),Qe=r(1611),at=r(2938),ot=r(9212),ct=r(2870),ut=r(6544),lt=r(482),ea=r(6917),ta=r(6668),ra=r(7520),aa=r(7020),ia=r(5354),la=B.setImmediate,ba=B.clearImmediate,_a=B.process,sa=B.Dispatch,ua=B.Function,ma=B.MessageChannel,$a=B.String,Da=0,Ma={},fa="onreadystatechange";try{s=B.location}catch{}var va=function(ha){if(ct(Ma,ha)){var ja=Ma[ha];delete Ma[ha],ja()}},ka=function(ha){return function(){va(ha)}},Ra=function(ha){va(ha.data)},qa=function(ha){B.postMessage($a(ha),s.protocol+"//"+s.host)};la&&ba||(la=function(ha){ra(arguments.length,1);var ja=ot(ha)?ha:ua(ha),Pa=ea(arguments,1);return Ma[++Da]=function(){Qe(ja,void 0,Pa)},l(Da),Da},ba=function(ha){delete Ma[ha]},ia?l=function(ha){_a.nextTick(ka(ha))}:sa&&sa.now?l=function(ha){sa.now(ka(ha))}:ma&&!aa?(o=(b=new ma).port2,b.port1.onmessage=Ra,l=at(o.postMessage,o)):B.addEventListener&&ot(B.postMessage)&&!B.importScripts&&s&&s.protocol!=="file:"&&!ut(qa)?(l=qa,B.addEventListener("message",Ra,!1)):l=fa in ta("script")?function(ha){lt.appendChild(ta("script")).onreadystatechange=function(){lt.removeChild(this),va(ha)}}:function(ha){setTimeout(ka(ha),0)}),n.exports={set:la,clear:ba}},6782:function(n,t,r){var s=r(7486),l=Math.max,b=Math.min;n.exports=function(o,B){var Qe=s(o);return Qe<0?l(Qe+B,0):b(Qe,B)}},2977:function(n,t,r){var s=r(5044),l=r(3955);n.exports=function(b){return s(l(b))}},7486:function(n){var t=Math.ceil,r=Math.floor;n.exports=function(s){var l=+s;return l!=l||l===0?0:(l>0?r:t)(l)}},97:function(n,t,r){var s=r(7486),l=Math.min;n.exports=function(b){return b>0?l(s(b),9007199254740991):0}},1324:function(n,t,r){var s=r(7583),l=r(3955),b=s.Object;n.exports=function(o){return b(l(o))}},2670:function(n,t,r){var s=r(7583),l=r(8262),b=r(794),o=r(5871),B=r(911),Qe=r(6252),at=r(3649),ot=s.TypeError,ct=at("toPrimitive");n.exports=function(ut,lt){if(!b(ut)||o(ut))return ut;var ea,ta=B(ut,ct);if(ta){if(lt===void 0&&(lt="default"),ea=l(ta,ut,lt),!b(ea)||o(ea))return ea;throw ot("Can't convert object to primitive value")}return lt===void 0&&(lt="number"),Qe(ut,lt)}},8734:function(n,t,r){var s=r(2670),l=r(5871);n.exports=function(b){var o=s(b,"string");return l(o)?o:o+""}},8191:function(n,t,r){var s={};s[r(3649)("toStringTag")]="z",n.exports=String(s)==="[object z]"},8320:function(n,t,r){var s=r(7583),l=r(3058),b=s.String;n.exports=function(o){if(l(o)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return b(o)}},5637:function(n,t,r){var s=r(7583).String;n.exports=function(l){try{return s(l)}catch{return"Object"}}},8284:function(n,t,r){var s=r(7386),l=0,b=Math.random(),o=s(1 .toString);n.exports=function(B){return"Symbol("+(B===void 0?"":B)+")_"+o(++l+b,36)}},7786:function(n,t,r){var s=r(8640);n.exports=s&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},7670:function(n,t,r){var s=r(8494),l=r(6544);n.exports=s&&l(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},7520:function(n,t,r){var s=r(7583).TypeError;n.exports=function(l,b){if(l<b)throw s("Not enough arguments");return l}},491:function(n,t,r){var s=r(3649);t.f=s},3649:function(n,t,r){var s=r(7583),l=r(7836),b=r(2870),o=r(8284),B=r(8640),Qe=r(7786),at=l("wks"),ot=s.Symbol,ct=ot&&ot.for,ut=Qe?ot:ot&&ot.withoutSetter||o;n.exports=function(lt){if(!b(at,lt)||!B&&typeof at[lt]!="string"){var ea="Symbol."+lt;B&&b(ot,lt)?at[lt]=ot[lt]:at[lt]=Qe&&ct?ct(ea):ut(ea)}return at[lt]}},1719:function(n,t,r){var s=r(7263),l=r(7583),b=r(2447),o=r(729),B=r(7496),Qe=r(3478),at=r(3590),ot=r(57),ct=r(4677),ut=r(1509),lt=r(4402),ea=r(4026),ta=r(2764),ra=r(3649),aa=r(1178),ia=ra("toStringTag"),la=l.Error,ba=[].push,_a=function(ua,ma){var $a,Da=arguments.length>2?arguments[2]:void 0,Ma=b(sa,this);B?$a=B(new la,Ma?o(this):sa):($a=Ma?this:at(sa),ot($a,ia,"Error")),ma!==void 0&&ot($a,"message",ta(ma)),aa&&ot($a,"stack",ut($a.stack,1)),lt($a,Da);var fa=[];return ea(ua,ba,{that:fa}),ot($a,"errors",fa),$a};B?B(_a,la):Qe(_a,la,{name:!0});var sa=_a.prototype=at(la.prototype,{constructor:ct(1,_a),message:ct(1,""),name:ct(1,"AggregateError")});s({global:!0},{AggregateError:_a})},1646:function(n,t,r){var s=r(7263),l=r(7583),b=r(6544),o=r(4521),B=r(794),Qe=r(1324),at=r(1825),ot=r(5999),ct=r(4822),ut=r(9269),lt=r(3649),ea=r(4061),ta=lt("isConcatSpreadable"),ra=9007199254740991,aa="Maximum allowed index exceeded",ia=l.TypeError,la=ea>=51||!b(function(){var sa=[];return sa[ta]=!1,sa.concat()[0]!==sa}),ba=ut("concat"),_a=function(sa){if(!B(sa))return!1;var ua=sa[ta];return ua!==void 0?!!ua:o(sa)};s({target:"Array",proto:!0,forced:!la||!ba},{concat:function(sa){var ua,ma,$a,Da,Ma,fa=Qe(this),va=ct(fa,0),ka=0;for(ua=-1,$a=arguments.length;ua<$a;ua++)if(_a(Ma=ua===-1?fa:arguments[ua])){if(ka+(Da=at(Ma))>ra)throw ia(aa);for(ma=0;ma<Da;ma++,ka++)ma in Ma&&ot(va,ka,Ma[ma])}else{if(ka>=ra)throw ia(aa);ot(va,ka++,Ma)}return va.length=ka,va}})},5677:function(n,t,r){var s=r(2977),l=r(6288),b=r(339),o=r(2743),B=r(4615).f,Qe=r(9012),at=r(6268),ot=r(8494),ct="Array Iterator",ut=o.set,lt=o.getterFor(ct);n.exports=Qe(Array,"Array",function(ta,ra){ut(this,{type:ct,target:s(ta),index:0,kind:ra})},function(){var ta=lt(this),ra=ta.target,aa=ta.kind,ia=ta.index++;return!ra||ia>=ra.length?(ta.target=void 0,{value:void 0,done:!0}):aa=="keys"?{value:ia,done:!1}:aa=="values"?{value:ra[ia],done:!1}:{value:[ia,ra[ia]],done:!1}},"values");var ea=b.Arguments=b.Array;if(l("keys"),l("values"),l("entries"),!at&&ot&&ea.name!=="values")try{B(ea,"name",{value:"values"})}catch{}},6956:function(n,t,r){var s=r(7583);r(8821)(s.JSON,"JSON",!0)},5222:function(n,t,r){r(8821)(Math,"Math",!0)},6394:function(n,t,r){var s=r(8191),l=r(1270),b=r(3060);s||l(Object.prototype,"toString",b,{unsafe:!0})},6969:function(n,t,r){var s=r(7263),l=r(8262),b=r(8257),o=r(5084),B=r(544),Qe=r(4026);s({target:"Promise",stat:!0},{allSettled:function(at){var ot=this,ct=o.f(ot),ut=ct.resolve,lt=ct.reject,ea=B(function(){var ta=b(ot.resolve),ra=[],aa=0,ia=1;Qe(at,function(la){var ba=aa++,_a=!1;ia++,l(ta,ot,la).then(function(sa){_a||(_a=!0,ra[ba]={status:"fulfilled",value:sa},--ia||ut(ra))},function(sa){_a||(_a=!0,ra[ba]={status:"rejected",reason:sa},--ia||ut(ra))})}),--ia||ut(ra)});return ea.error&&lt(ea.value),ct.promise}})},2021:function(n,t,r){var s=r(7263),l=r(8257),b=r(5897),o=r(8262),B=r(5084),Qe=r(544),at=r(4026),ot="No one promise resolved";s({target:"Promise",stat:!0},{any:function(ct){var ut=this,lt=b("AggregateError"),ea=B.f(ut),ta=ea.resolve,ra=ea.reject,aa=Qe(function(){var ia=l(ut.resolve),la=[],ba=0,_a=1,sa=!1;at(ct,function(ua){var ma=ba++,$a=!1;_a++,o(ia,ut,ua).then(function(Da){$a||sa||(sa=!0,ta(Da))},function(Da){$a||sa||($a=!0,la[ma]=Da,--_a||ra(new lt(la,ot)))})}),--_a||ra(new lt(la,ot))});return aa.error&&ra(aa.value),ea.promise}})},8328:function(n,t,r){var s=r(7263),l=r(6268),b=r(783),o=r(6544),B=r(5897),Qe=r(9212),at=r(564),ot=r(5732),ct=r(1270);if(s({target:"Promise",proto:!0,real:!0,forced:!!b&&o(function(){b.prototype.finally.call({then:function(){}},function(){})})},{finally:function(lt){var ea=at(this,B("Promise")),ta=Qe(lt);return this.then(ta?function(ra){return ot(ea,lt()).then(function(){return ra})}:lt,ta?function(ra){return ot(ea,lt()).then(function(){throw ra})}:lt)}}),!l&&Qe(b)){var ut=B("Promise").prototype.finally;b.prototype.finally!==ut&&ct(b.prototype,"finally",ut,{unsafe:!0})}},5334:function(n,t,r){var s,l,b,o,B=r(7263),Qe=r(6268),at=r(7583),ot=r(5897),ct=r(8262),ut=r(783),lt=r(1270),ea=r(6893),ta=r(7496),ra=r(8821),aa=r(7730),ia=r(8257),la=r(9212),ba=r(794),_a=r(4761),sa=r(9734),ua=r(4026),ma=r(3616),$a=r(564),Da=r(8117).set,Ma=r(2095),fa=r(5732),va=r(2716),ka=r(5084),Ra=r(544),qa=r(2723),ha=r(2743),ja=r(4451),Pa=r(3649),Ba=r(2274),Oa=r(5354),Ea=r(4061),da=Pa("species"),xa="Promise",Sa=ha.getterFor(xa),Ha=ha.set,ir=ha.getterFor(xa),vr=ut&&ut.prototype,xr=ut,gr=vr,Dr=at.TypeError,qr=at.document,Xr=at.process,Vr=ka.f,Pr=Vr,Ar=!!(qr&&qr.createEvent&&at.dispatchEvent),Mr=la(at.PromiseRejectionEvent),ti="unhandledrejection",fi=!1,mi=ja(xa,function(){var za=sa(xr),Xa=za!==String(xr);if(!Xa&&Ea===66||Qe&&!gr.finally)return!0;if(Ea>=51&&/native code/.test(za))return!1;var ar=new xr(function(Wr){Wr(1)}),sr=function(Wr){Wr(function(){},function(){})};return(ar.constructor={})[da]=sr,!(fi=ar.then(function(){})instanceof sr)||!Xa&&Ba&&!Mr}),Gi=mi||!ma(function(za){xr.all(za).catch(function(){})}),ki=function(za){var Xa;return!(!ba(za)||!la(Xa=za.then))&&Xa},hi=function(za,Xa){var ar,sr,Wr,ii=Xa.value,Ti=Xa.state==1,ya=Ti?za.ok:za.fail,Ia=za.resolve,Ca=za.reject,La=za.domain;try{ya?(Ti||(Xa.rejection===2&&Vi(Xa),Xa.rejection=1),ya===!0?ar=ii:(La&&La.enter(),ar=ya(ii),La&&(La.exit(),Wr=!0)),ar===za.promise?Ca(Dr("Promise-chain cycle")):(sr=ki(ar))?ct(sr,ar,Ia,Ca):Ia(ar)):Ca(ii)}catch(Ga){La&&!Wr&&La.exit(),Ca(Ga)}},Ci=function(za,Xa){za.notified||(za.notified=!0,Ma(function(){for(var ar,sr=za.reactions;ar=sr.get();)hi(ar,za);za.notified=!1,Xa&&!za.rejection&&di(za)}))},Xi=function(za,Xa,ar){var sr,Wr;Ar?((sr=qr.createEvent("Event")).promise=Xa,sr.reason=ar,sr.initEvent(za,!1,!0),at.dispatchEvent(sr)):sr={promise:Xa,reason:ar},!Mr&&(Wr=at["on"+za])?Wr(sr):za===ti&&va("Unhandled promise rejection",ar)},di=function(za){ct(Da,at,function(){var Xa,ar=za.facade,sr=za.value;if(Ri(za)&&(Xa=Ra(function(){Oa?Xr.emit("unhandledRejection",sr,ar):Xi(ti,ar,sr)}),za.rejection=Oa||Ri(za)?2:1,Xa.error))throw Xa.value})},Ri=function(za){return za.rejection!==1&&!za.parent},Vi=function(za){ct(Da,at,function(){var Xa=za.facade;Oa?Xr.emit("rejectionHandled",Xa):Xi("rejectionhandled",Xa,za.value)})},Li=function(za,Xa,ar){return function(sr){za(Xa,sr,ar)}},ui=function(za,Xa,ar){za.done||(za.done=!0,ar&&(za=ar),za.value=Xa,za.state=2,Ci(za,!0))},Bi=function za(Xa,ar,sr){if(!Xa.done){Xa.done=!0,sr&&(Xa=sr);try{if(Xa.facade===ar)throw Dr("Promise can't be resolved itself");var Wr=ki(ar);Wr?Ma(function(){var ii={done:!1};try{ct(Wr,ar,Li(za,ii,Xa),Li(ui,ii,Xa))}catch(Ti){ui(ii,Ti,Xa)}}):(Xa.value=ar,Xa.state=1,Ci(Xa,!1))}catch(ii){ui({done:!1},ii,Xa)}}};if(mi&&(gr=(xr=function(za){_a(this,gr),ia(za),ct(s,this);var Xa=Sa(this);try{za(Li(Bi,Xa),Li(ui,Xa))}catch(ar){ui(Xa,ar)}}).prototype,(s=function(za){Ha(this,{type:xa,done:!1,notified:!1,parent:!1,reactions:new qa,rejection:!1,state:0,value:void 0})}).prototype=ea(gr,{then:function(za,Xa){var ar=ir(this),sr=Vr($a(this,xr));return ar.parent=!0,sr.ok=!la(za)||za,sr.fail=la(Xa)&&Xa,sr.domain=Oa?Xr.domain:void 0,ar.state==0?ar.reactions.add(sr):Ma(function(){hi(sr,ar)}),sr.promise},catch:function(za){return this.then(void 0,za)}}),l=function(){var za=new s,Xa=Sa(za);this.promise=za,this.resolve=Li(Bi,Xa),this.reject=Li(ui,Xa)},ka.f=Vr=function(za){return za===xr||za===b?new l(za):Pr(za)},!Qe&&la(ut)&&vr!==Object.prototype)){o=vr.then,fi||(lt(vr,"then",function(za,Xa){var ar=this;return new xr(function(sr,Wr){ct(o,ar,sr,Wr)}).then(za,Xa)},{unsafe:!0}),lt(vr,"catch",gr.catch,{unsafe:!0}));try{delete vr.constructor}catch{}ta&&ta(vr,gr)}B({global:!0,wrap:!0,forced:mi},{Promise:xr}),ra(xr,xa,!1,!0),aa(xa),b=ot(xa),B({target:xa,stat:!0,forced:mi},{reject:function(za){var Xa=Vr(this);return ct(Xa.reject,void 0,za),Xa.promise}}),B({target:xa,stat:!0,forced:Qe||mi},{resolve:function(za){return fa(Qe&&this===b?xr:this,za)}}),B({target:xa,stat:!0,forced:Gi},{all:function(za){var Xa=this,ar=Vr(Xa),sr=ar.resolve,Wr=ar.reject,ii=Ra(function(){var Ti=ia(Xa.resolve),ya=[],Ia=0,Ca=1;ua(za,function(La){var Ga=Ia++,rr=!1;Ca++,ct(Ti,Xa,La).then(function(kr){rr||(rr=!0,ya[Ga]=kr,--Ca||sr(ya))},Wr)}),--Ca||sr(ya)});return ii.error&&Wr(ii.value),ar.promise},race:function(za){var Xa=this,ar=Vr(Xa),sr=ar.reject,Wr=Ra(function(){var ii=ia(Xa.resolve);ua(za,function(Ti){ct(ii,Xa,Ti).then(ar.resolve,sr)})});return Wr.error&&sr(Wr.value),ar.promise}})},2257:function(n,t,r){var s=r(7263),l=r(7583),b=r(8821);s({global:!0},{Reflect:{}}),b(l.Reflect,"Reflect",!0)},2129:function(n,t,r){var s=r(6389).charAt,l=r(8320),b=r(2743),o=r(9012),B="String Iterator",Qe=b.set,at=b.getterFor(B);o(String,"String",function(ot){Qe(this,{type:B,string:l(ot),index:0})},function(){var ot,ct=at(this),ut=ct.string,lt=ct.index;return lt>=ut.length?{value:void 0,done:!0}:(ot=s(ut,lt),ct.index+=ot.length,{value:ot,done:!1})})},462:function(n,t,r){r(2219)("asyncIterator")},8407:function(n,t,r){var s=r(7263),l=r(8494),b=r(7583),o=r(7386),B=r(2870),Qe=r(9212),at=r(2447),ot=r(8320),ct=r(4615).f,ut=r(3478),lt=b.Symbol,ea=lt&&lt.prototype;if(l&&Qe(lt)&&(!("description"in ea)||lt().description!==void 0)){var ta={},ra=function(){var ua=arguments.length<1||arguments[0]===void 0?void 0:ot(arguments[0]),ma=at(ea,this)?new lt(ua):ua===void 0?lt():lt(ua);return ua===""&&(ta[ma]=!0),ma};ut(ra,lt),ra.prototype=ea,ea.constructor=ra;var aa=String(lt("test"))=="Symbol(test)",ia=o(ea.toString),la=o(ea.valueOf),ba=/^Symbol\((.*)\)[^)]+$/,_a=o("".replace),sa=o("".slice);ct(ea,"description",{configurable:!0,get:function(){var ua=la(this),ma=ia(ua);if(B(ta,ua))return"";var $a=aa?sa(ma,7,-1):_a(ma,ba,"$1");return $a===""?void 0:$a}}),s({global:!0,forced:!0},{Symbol:ra})}},2429:function(n,t,r){r(2219)("hasInstance")},1172:function(n,t,r){r(2219)("isConcatSpreadable")},8288:function(n,t,r){r(2219)("iterator")},2004:function(n,t,r){var s=r(7263),l=r(7583),b=r(5897),o=r(1611),B=r(8262),Qe=r(7386),at=r(6268),ot=r(8494),ct=r(8640),ut=r(6544),lt=r(2870),ea=r(4521),ta=r(9212),ra=r(794),aa=r(2447),ia=r(5871),la=r(2569),ba=r(1324),_a=r(2977),sa=r(8734),ua=r(8320),ma=r(4677),$a=r(3590),Da=r(5432),Ma=r(9275),fa=r(3130),va=r(4012),ka=r(6683),Ra=r(4615),qa=r(8728),ha=r(112),ja=r(6917),Pa=r(1270),Ba=r(7836),Oa=r(9137),Ea=r(4639),da=r(8284),xa=r(3649),Sa=r(491),Ha=r(2219),ir=r(8821),vr=r(2743),xr=r(4805).forEach,gr=Oa("hidden"),Dr="Symbol",qr=xa("toPrimitive"),Xr=vr.set,Vr=vr.getterFor(Dr),Pr=Object.prototype,Ar=l.Symbol,Mr=Ar&&Ar.prototype,ti=l.TypeError,fi=l.QObject,mi=b("JSON","stringify"),Gi=ka.f,ki=Ra.f,hi=fa.f,Ci=ha.f,Xi=Qe([].push),di=Ba("symbols"),Ri=Ba("op-symbols"),Vi=Ba("string-to-symbol-registry"),Li=Ba("symbol-to-string-registry"),ui=Ba("wks"),Bi=!fi||!fi.prototype||!fi.prototype.findChild,za=ot&&ut(function(){return $a(ki({},"a",{get:function(){return ki(this,"a",{value:7}).a}})).a!=7})?function(Ca,La,Ga){var rr=Gi(Pr,La);rr&&delete Pr[La],ki(Ca,La,Ga),rr&&Ca!==Pr&&ki(Pr,La,rr)}:ki,Xa=function(Ca,La){var Ga=di[Ca]=$a(Mr);return Xr(Ga,{type:Dr,tag:Ca,description:La}),ot||(Ga.description=La),Ga},ar=function(Ca,La,Ga){Ca===Pr&&ar(Ri,La,Ga),la(Ca);var rr=sa(La);return la(Ga),lt(di,rr)?(Ga.enumerable?(lt(Ca,gr)&&Ca[gr][rr]&&(Ca[gr][rr]=!1),Ga=$a(Ga,{enumerable:ma(0,!1)})):(lt(Ca,gr)||ki(Ca,gr,ma(1,{})),Ca[gr][rr]=!0),za(Ca,rr,Ga)):ki(Ca,rr,Ga)},sr=function(Ca,La){la(Ca);var Ga=_a(La),rr=Da(Ga).concat(ya(Ga));return xr(rr,function(kr){ot&&!B(Wr,Ga,kr)||ar(Ca,kr,Ga[kr])}),Ca},Wr=function(Ca){var La=sa(Ca),Ga=B(Ci,this,La);return!(this===Pr&&lt(di,La)&&!lt(Ri,La))&&(!(Ga||!lt(this,La)||!lt(di,La)||lt(this,gr)&&this[gr][La])||Ga)},ii=function(Ca,La){var Ga=_a(Ca),rr=sa(La);if(Ga!==Pr||!lt(di,rr)||lt(Ri,rr)){var kr=Gi(Ga,rr);return!kr||!lt(di,rr)||lt(Ga,gr)&&Ga[gr][rr]||(kr.enumerable=!0),kr}},Ti=function(Ca){var La=hi(_a(Ca)),Ga=[];return xr(La,function(rr){lt(di,rr)||lt(Ea,rr)||Xi(Ga,rr)}),Ga},ya=function(Ca){var La=Ca===Pr,Ga=hi(La?Ri:_a(Ca)),rr=[];return xr(Ga,function(kr){!lt(di,kr)||La&&!lt(Pr,kr)||Xi(rr,di[kr])}),rr};if(ct||(Ar=function(){if(aa(Mr,this))throw ti("Symbol is not a constructor");var Ca=arguments.length&&arguments[0]!==void 0?ua(arguments[0]):void 0,La=da(Ca),Ga=function rr(kr){this===Pr&&B(rr,Ri,kr),lt(this,gr)&&lt(this[gr],La)&&(this[gr][La]=!1),za(this,La,ma(1,kr))};return ot&&Bi&&za(Pr,La,{configurable:!0,set:Ga}),Xa(La,Ca)},Pa(Mr=Ar.prototype,"toString",function(){return Vr(this).tag}),Pa(Ar,"withoutSetter",function(Ca){return Xa(da(Ca),Ca)}),ha.f=Wr,Ra.f=ar,qa.f=sr,ka.f=ii,Ma.f=fa.f=Ti,va.f=ya,Sa.f=function(Ca){return Xa(xa(Ca),Ca)},ot&&(ki(Mr,"description",{configurable:!0,get:function(){return Vr(this).description}}),at||Pa(Pr,"propertyIsEnumerable",Wr,{unsafe:!0}))),s({global:!0,wrap:!0,forced:!ct,sham:!ct},{Symbol:Ar}),xr(Da(ui),function(Ca){Ha(Ca)}),s({target:Dr,stat:!0,forced:!ct},{for:function(Ca){var La=ua(Ca);if(lt(Vi,La))return Vi[La];var Ga=Ar(La);return Vi[La]=Ga,Li[Ga]=La,Ga},keyFor:function(Ca){if(!ia(Ca))throw ti(Ca+" is not a symbol");if(lt(Li,Ca))return Li[Ca]},useSetter:function(){Bi=!0},useSimple:function(){Bi=!1}}),s({target:"Object",stat:!0,forced:!ct,sham:!ot},{create:function(Ca,La){return La===void 0?$a(Ca):sr($a(Ca),La)},defineProperty:ar,defineProperties:sr,getOwnPropertyDescriptor:ii}),s({target:"Object",stat:!0,forced:!ct},{getOwnPropertyNames:Ti,getOwnPropertySymbols:ya}),s({target:"Object",stat:!0,forced:ut(function(){va.f(1)})},{getOwnPropertySymbols:function(Ca){return va.f(ba(Ca))}}),mi&&s({target:"JSON",stat:!0,forced:!ct||ut(function(){var Ca=Ar();return mi([Ca])!="[null]"||mi({a:Ca})!="{}"||mi(Object(Ca))!="{}"})},{stringify:function(Ca,La,Ga){var rr=ja(arguments),kr=La;if((ra(La)||Ca!==void 0)&&!ia(Ca))return ea(La)||(La=function(ei,ji){if(ta(kr)&&(ji=B(kr,this,ei,ji)),!ia(ji))return ji}),rr[1]=La,o(mi,null,rr)}}),!Mr[qr]){var Ia=Mr.valueOf;Pa(Mr,qr,function(Ca){return B(Ia,this)})}ir(Ar,Dr),Ea[gr]=!0},8201:function(n,t,r){r(2219)("matchAll")},1274:function(n,t,r){r(2219)("match")},6626:function(n,t,r){r(2219)("replace")},3211:function(n,t,r){r(2219)("search")},9952:function(n,t,r){r(2219)("species")},15:function(n,t,r){r(2219)("split")},9831:function(n,t,r){r(2219)("toPrimitive")},7521:function(n,t,r){r(2219)("toStringTag")},2972:function(n,t,r){r(2219)("unscopables")},4655:function(n,t,r){var s=r(7583),l=r(6778),b=r(9307),o=r(5677),B=r(57),Qe=r(3649),at=Qe("iterator"),ot=Qe("toStringTag"),ct=o.values,ut=function(ea,ta){if(ea){if(ea[at]!==ct)try{B(ea,at,ct)}catch{ea[at]=ct}if(ea[ot]||B(ea,ot,ta),l[ta]){for(var ra in o)if(ea[ra]!==o[ra])try{B(ea,ra,o[ra])}catch{ea[ra]=o[ra]}}}};for(var lt in l)ut(s[lt]&&s[lt].prototype,lt);ut(b,"DOMTokenList")},8765:function(n,t,r){var s=r(5036);r(4655),n.exports=s},5441:function(n,t,r){var s=r(2582);r(4655),n.exports=s},7705:function(n){n.exports=function(t){var r=[];return r.toString=function(){return this.map(function(s){var l="",b=s[5]!==void 0;return s[4]&&(l+="@supports (".concat(s[4],") {")),s[2]&&(l+="@media ".concat(s[2]," {")),b&&(l+="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {")),l+=t(s),b&&(l+="}"),s[2]&&(l+="}"),s[4]&&(l+="}"),l}).join("")},r.i=function(s,l,b,o,B){typeof s=="string"&&(s=[[null,s,void 0]]);var Qe={};if(b)for(var at=0;at<this.length;at++){var ot=this[at][0];ot!=null&&(Qe[ot]=!0)}for(var ct=0;ct<s.length;ct++){var ut=[].concat(s[ct]);b&&Qe[ut[0]]||(B!==void 0&&(ut[5]===void 0||(ut[1]="@layer".concat(ut[5].length>0?" ".concat(ut[5]):""," {").concat(ut[1],"}")),ut[5]=B),l&&(ut[2]&&(ut[1]="@media ".concat(ut[2]," {").concat(ut[1],"}")),ut[2]=l),o&&(ut[4]?(ut[1]="@supports (".concat(ut[4],") {").concat(ut[1],"}"),ut[4]=o):ut[4]="".concat(o)),r.push(ut))}},r}},6738:function(n){n.exports=function(t){return t[1]}},8679:function(n){var t=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,r=window.WeakMap;if(r===void 0){var s=Object.defineProperty,l=Date.now()%1e9;(r=function(){this.name="__st"+(1e9*Math.random()>>>0)+l+++"__"}).prototype={set:function(sa,ua){var ma=sa[this.name];return ma&&ma[0]===sa?ma[1]=ua:s(sa,this.name,{value:[sa,ua],writable:!0}),this},get:function(sa){var ua;return(ua=sa[this.name])&&ua[0]===sa?ua[1]:void 0},delete:function(sa){var ua=sa[this.name];if(!ua)return!1;var ma=ua[0]===sa;return ua[0]=ua[1]=void 0,ma},has:function(sa){var ua=sa[this.name];return!!ua&&ua[0]===sa}}}var b=new r,o=window.msSetImmediate;if(!o){var B=[],Qe=String(Math.random());window.addEventListener("message",function(sa){if(sa.data===Qe){var ua=B;B=[],ua.forEach(function(ma){ma()})}}),o=function(sa){B.push(sa),window.postMessage(Qe,"*")}}var at=!1,ot=[];function ct(){at=!1;var sa=ot;ot=[],sa.sort(function(ma,$a){return ma.uid_-$a.uid_});var ua=!1;sa.forEach(function(ma){var $a=ma.takeRecords();(function(Da){Da.nodes_.forEach(function(Ma){var fa=b.get(Ma);fa&&fa.forEach(function(va){va.observer===Da&&va.removeTransientObservers()})})})(ma),$a.length&&(ma.callback_($a,ma),ua=!0)}),ua&&ct()}function ut(sa,ua){for(var ma=sa;ma;ma=ma.parentNode){var $a=b.get(ma);if($a)for(var Da=0;Da<$a.length;Da++){var Ma=$a[Da],fa=Ma.options;if(ma===sa||fa.subtree){var va=ua(fa);va&&Ma.enqueue(va)}}}}var lt,ea,ta=0;function ra(sa){this.callback_=sa,this.nodes_=[],this.records_=[],this.uid_=++ta}function aa(sa,ua){this.type=sa,this.target=ua,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function ia(sa,ua){return lt=new aa(sa,ua)}function la(sa){return ea||((ma=new aa((ua=lt).type,ua.target)).addedNodes=ua.addedNodes.slice(),ma.removedNodes=ua.removedNodes.slice(),ma.previousSibling=ua.previousSibling,ma.nextSibling=ua.nextSibling,ma.attributeName=ua.attributeName,ma.attributeNamespace=ua.attributeNamespace,ma.oldValue=ua.oldValue,(ea=ma).oldValue=sa,ea);var ua,ma}function ba(sa,ua){return sa===ua?sa:ea&&((ma=sa)===ea||ma===lt)?ea:null;var ma}function _a(sa,ua,ma){this.observer=sa,this.target=ua,this.options=ma,this.transientObservedNodes=[]}ra.prototype={observe:function(sa,ua){var ma;if(ma=sa,sa=window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(ma)||ma,!ua.childList&&!ua.attributes&&!ua.characterData||ua.attributeOldValue&&!ua.attributes||ua.attributeFilter&&ua.attributeFilter.length&&!ua.attributes||ua.characterDataOldValue&&!ua.characterData)throw new SyntaxError;var $a,Da=b.get(sa);Da||b.set(sa,Da=[]);for(var Ma=0;Ma<Da.length;Ma++)if(Da[Ma].observer===this){($a=Da[Ma]).removeListeners(),$a.options=ua;break}$a||($a=new _a(this,sa,ua),Da.push($a),this.nodes_.push(sa)),$a.addListeners()},disconnect:function(){this.nodes_.forEach(function(sa){for(var ua=b.get(sa),ma=0;ma<ua.length;ma++){var $a=ua[ma];if($a.observer===this){$a.removeListeners(),ua.splice(ma,1);break}}},this),this.records_=[]},takeRecords:function(){var sa=this.records_;return this.records_=[],sa}},_a.prototype={enqueue:function(sa){var ua,ma=this.observer.records_,$a=ma.length;if(ma.length>0){var Da=ba(ma[$a-1],sa);if(Da)return void(ma[$a-1]=Da)}else ua=this.observer,ot.push(ua),at||(at=!0,o(ct));ma[$a]=sa},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(sa){var ua=this.options;ua.attributes&&sa.addEventListener("DOMAttrModified",this,!0),ua.characterData&&sa.addEventListener("DOMCharacterDataModified",this,!0),ua.childList&&sa.addEventListener("DOMNodeInserted",this,!0),(ua.childList||ua.subtree)&&sa.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(sa){var ua=this.options;ua.attributes&&sa.removeEventListener("DOMAttrModified",this,!0),ua.characterData&&sa.removeEventListener("DOMCharacterDataModified",this,!0),ua.childList&&sa.removeEventListener("DOMNodeInserted",this,!0),(ua.childList||ua.subtree)&&sa.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(sa){if(sa!==this.target){this.addListeners_(sa),this.transientObservedNodes.push(sa);var ua=b.get(sa);ua||b.set(sa,ua=[]),ua.push(this)}},removeTransientObservers:function(){var sa=this.transientObservedNodes;this.transientObservedNodes=[],sa.forEach(function(ua){this.removeListeners_(ua);for(var ma=b.get(ua),$a=0;$a<ma.length;$a++)if(ma[$a]===this){ma.splice($a,1);break}},this)},handleEvent:function(sa){switch(sa.stopImmediatePropagation(),sa.type){case"DOMAttrModified":var ua=sa.attrName,ma=sa.relatedNode.namespaceURI,$a=sa.target;(Ma=new ia("attributes",$a)).attributeName=ua,Ma.attributeNamespace=ma;var Da=null;typeof MutationEvent<"u"&&sa.attrChange===MutationEvent.ADDITION||(Da=sa.prevValue),ut($a,function(ha){if(ha.attributes&&(!ha.attributeFilter||!ha.attributeFilter.length||ha.attributeFilter.indexOf(ua)!==-1||ha.attributeFilter.indexOf(ma)!==-1))return ha.attributeOldValue?la(Da):Ma});break;case"DOMCharacterDataModified":var Ma=ia("characterData",$a=sa.target);Da=sa.prevValue,ut($a,function(ha){if(ha.characterData)return ha.characterDataOldValue?la(Da):Ma});break;case"DOMNodeRemoved":this.addTransientObserver(sa.target);case"DOMNodeInserted":$a=sa.relatedNode;var fa,va,ka=sa.target;sa.type==="DOMNodeInserted"?(fa=[ka],va=[]):(fa=[],va=[ka]);var Ra=ka.previousSibling,qa=ka.nextSibling;(Ma=ia("childList",$a)).addedNodes=fa,Ma.removedNodes=va,Ma.previousSibling=Ra,Ma.nextSibling=qa,ut($a,function(ha){if(ha.childList)return Ma})}lt=ea=void 0}},t||(t=ra),n.exports=t},7588:function(n){var t=function(r){var s,l=Object.prototype,b=l.hasOwnProperty,o=typeof Symbol=="function"?Symbol:{},B=o.iterator||"@@iterator",Qe=o.asyncIterator||"@@asyncIterator",at=o.toStringTag||"@@toStringTag";function ot(ha,ja,Pa){return Object.defineProperty(ha,ja,{value:Pa,enumerable:!0,configurable:!0,writable:!0}),ha[ja]}try{ot({},"")}catch{ot=function(ja,Pa,Ba){return ja[Pa]=Ba}}function ct(ha,ja,Pa,Ba){var Oa=ja&&ja.prototype instanceof ia?ja:ia,Ea=Object.create(Oa.prototype),da=new ka(Ba||[]);return Ea._invoke=function(xa,Sa,Ha){var ir=lt;return function(vr,xr){if(ir===ta)throw new Error("Generator is already running");if(ir===ra){if(vr==="throw")throw xr;return qa()}for(Ha.method=vr,Ha.arg=xr;;){var gr=Ha.delegate;if(gr){var Dr=Ma(gr,Ha);if(Dr){if(Dr===aa)continue;return Dr}}if(Ha.method==="next")Ha.sent=Ha._sent=Ha.arg;else if(Ha.method==="throw"){if(ir===lt)throw ir=ra,Ha.arg;Ha.dispatchException(Ha.arg)}else Ha.method==="return"&&Ha.abrupt("return",Ha.arg);ir=ta;var qr=ut(xa,Sa,Ha);if(qr.type==="normal"){if(ir=Ha.done?ra:ea,qr.arg===aa)continue;return{value:qr.arg,done:Ha.done}}qr.type==="throw"&&(ir=ra,Ha.method="throw",Ha.arg=qr.arg)}}}(ha,Pa,da),Ea}function ut(ha,ja,Pa){try{return{type:"normal",arg:ha.call(ja,Pa)}}catch(Ba){return{type:"throw",arg:Ba}}}r.wrap=ct;var lt="suspendedStart",ea="suspendedYield",ta="executing",ra="completed",aa={};function ia(){}function la(){}function ba(){}var _a={};ot(_a,B,function(){return this});var sa=Object.getPrototypeOf,ua=sa&&sa(sa(Ra([])));ua&&ua!==l&&b.call(ua,B)&&(_a=ua);var ma=ba.prototype=ia.prototype=Object.create(_a);function $a(ha){["next","throw","return"].forEach(function(ja){ot(ha,ja,function(Pa){return this._invoke(ja,Pa)})})}function Da(ha,ja){function Pa(Oa,Ea,da,xa){var Sa=ut(ha[Oa],ha,Ea);if(Sa.type!=="throw"){var Ha=Sa.arg,ir=Ha.value;return ir&&typeof ir=="object"&&b.call(ir,"__await")?ja.resolve(ir.__await).then(function(vr){Pa("next",vr,da,xa)},function(vr){Pa("throw",vr,da,xa)}):ja.resolve(ir).then(function(vr){Ha.value=vr,da(Ha)},function(vr){return Pa("throw",vr,da,xa)})}xa(Sa.arg)}var Ba;this._invoke=function(Oa,Ea){function da(){return new ja(function(xa,Sa){Pa(Oa,Ea,xa,Sa)})}return Ba=Ba?Ba.then(da,da):da()}}function Ma(ha,ja){var Pa=ha.iterator[ja.method];if(Pa===s){if(ja.delegate=null,ja.method==="throw"){if(ha.iterator.return&&(ja.method="return",ja.arg=s,Ma(ha,ja),ja.method==="throw"))return aa;ja.method="throw",ja.arg=new TypeError("The iterator does not provide a 'throw' method")}return aa}var Ba=ut(Pa,ha.iterator,ja.arg);if(Ba.type==="throw")return ja.method="throw",ja.arg=Ba.arg,ja.delegate=null,aa;var Oa=Ba.arg;return Oa?Oa.done?(ja[ha.resultName]=Oa.value,ja.next=ha.nextLoc,ja.method!=="return"&&(ja.method="next",ja.arg=s),ja.delegate=null,aa):Oa:(ja.method="throw",ja.arg=new TypeError("iterator result is not an object"),ja.delegate=null,aa)}function fa(ha){var ja={tryLoc:ha[0]};1 in ha&&(ja.catchLoc=ha[1]),2 in ha&&(ja.finallyLoc=ha[2],ja.afterLoc=ha[3]),this.tryEntries.push(ja)}function va(ha){var ja=ha.completion||{};ja.type="normal",delete ja.arg,ha.completion=ja}function ka(ha){this.tryEntries=[{tryLoc:"root"}],ha.forEach(fa,this),this.reset(!0)}function Ra(ha){if(ha){var ja=ha[B];if(ja)return ja.call(ha);if(typeof ha.next=="function")return ha;if(!isNaN(ha.length)){var Pa=-1,Ba=function Oa(){for(;++Pa<ha.length;)if(b.call(ha,Pa))return Oa.value=ha[Pa],Oa.done=!1,Oa;return Oa.value=s,Oa.done=!0,Oa};return Ba.next=Ba}}return{next:qa}}function qa(){return{value:s,done:!0}}return la.prototype=ba,ot(ma,"constructor",ba),ot(ba,"constructor",la),la.displayName=ot(ba,at,"GeneratorFunction"),r.isGeneratorFunction=function(ha){var ja=typeof ha=="function"&&ha.constructor;return!!ja&&(ja===la||(ja.displayName||ja.name)==="GeneratorFunction")},r.mark=function(ha){return Object.setPrototypeOf?Object.setPrototypeOf(ha,ba):(ha.__proto__=ba,ot(ha,at,"GeneratorFunction")),ha.prototype=Object.create(ma),ha},r.awrap=function(ha){return{__await:ha}},$a(Da.prototype),ot(Da.prototype,Qe,function(){return this}),r.AsyncIterator=Da,r.async=function(ha,ja,Pa,Ba,Oa){Oa===void 0&&(Oa=Promise);var Ea=new Da(ct(ha,ja,Pa,Ba),Oa);return r.isGeneratorFunction(ja)?Ea:Ea.next().then(function(da){return da.done?da.value:Ea.next()})},$a(ma),ot(ma,at,"Generator"),ot(ma,B,function(){return this}),ot(ma,"toString",function(){return"[object Generator]"}),r.keys=function(ha){var ja=[];for(var Pa in ha)ja.push(Pa);return ja.reverse(),function Ba(){for(;ja.length;){var Oa=ja.pop();if(Oa in ha)return Ba.value=Oa,Ba.done=!1,Ba}return Ba.done=!0,Ba}},r.values=Ra,ka.prototype={constructor:ka,reset:function(ha){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(va),!ha)for(var ja in this)ja.charAt(0)==="t"&&b.call(this,ja)&&!isNaN(+ja.slice(1))&&(this[ja]=s)},stop:function(){this.done=!0;var ha=this.tryEntries[0].completion;if(ha.type==="throw")throw ha.arg;return this.rval},dispatchException:function(ha){if(this.done)throw ha;var ja=this;function Pa(Sa,Ha){return Ea.type="throw",Ea.arg=ha,ja.next=Sa,Ha&&(ja.method="next",ja.arg=s),!!Ha}for(var Ba=this.tryEntries.length-1;Ba>=0;--Ba){var Oa=this.tryEntries[Ba],Ea=Oa.completion;if(Oa.tryLoc==="root")return Pa("end");if(Oa.tryLoc<=this.prev){var da=b.call(Oa,"catchLoc"),xa=b.call(Oa,"finallyLoc");if(da&&xa){if(this.prev<Oa.catchLoc)return Pa(Oa.catchLoc,!0);if(this.prev<Oa.finallyLoc)return Pa(Oa.finallyLoc)}else if(da){if(this.prev<Oa.catchLoc)return Pa(Oa.catchLoc,!0)}else{if(!xa)throw new Error("try statement without catch or finally");if(this.prev<Oa.finallyLoc)return Pa(Oa.finallyLoc)}}}},abrupt:function(ha,ja){for(var Pa=this.tryEntries.length-1;Pa>=0;--Pa){var Ba=this.tryEntries[Pa];if(Ba.tryLoc<=this.prev&&b.call(Ba,"finallyLoc")&&this.prev<Ba.finallyLoc){var Oa=Ba;break}}Oa&&(ha==="break"||ha==="continue")&&Oa.tryLoc<=ja&&ja<=Oa.finallyLoc&&(Oa=null);var Ea=Oa?Oa.completion:{};return Ea.type=ha,Ea.arg=ja,Oa?(this.method="next",this.next=Oa.finallyLoc,aa):this.complete(Ea)},complete:function(ha,ja){if(ha.type==="throw")throw ha.arg;return ha.type==="break"||ha.type==="continue"?this.next=ha.arg:ha.type==="return"?(this.rval=this.arg=ha.arg,this.method="return",this.next="end"):ha.type==="normal"&&ja&&(this.next=ja),aa},finish:function(ha){for(var ja=this.tryEntries.length-1;ja>=0;--ja){var Pa=this.tryEntries[ja];if(Pa.finallyLoc===ha)return this.complete(Pa.completion,Pa.afterLoc),va(Pa),aa}},catch:function(ha){for(var ja=this.tryEntries.length-1;ja>=0;--ja){var Pa=this.tryEntries[ja];if(Pa.tryLoc===ha){var Ba=Pa.completion;if(Ba.type==="throw"){var Oa=Ba.arg;va(Pa)}return Oa}}throw new Error("illegal catch attempt")},delegateYield:function(ha,ja,Pa){return this.delegate={iterator:Ra(ha),resultName:ja,nextLoc:Pa},this.method==="next"&&(this.arg=s),aa}},r}(n.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},8702:function(n,t,r){r.d(t,{Z:function(){return Ba}});var s=r(4296),l=r(6464),b=r(6881),o=r(2942),B=r(7003),Qe=r(3379),at=r.n(Qe),ot=r(7795),ct=r.n(ot),ut=r(569),lt=r.n(ut),ea=r(3565),ta=r.n(ea),ra=r(9216),aa=r.n(ra),ia=r(4589),la=r.n(ia),ba=r(5313),_a={};ba.Z&&ba.Z.locals&&(_a.locals=ba.Z.locals);var sa,ua=0,ma={};ma.styleTagTransform=la(),ma.setAttributes=ta(),ma.insert=lt().bind(null,"head"),ma.domAPI=ct(),ma.insertStyleElement=aa(),_a.use=function(Oa){return ma.options=Oa||{},ua++||(sa=at()(ba.Z,ma)),_a},_a.unuse=function(){ua>0&&!--ua&&(sa(),sa=null)};var $a=_a;function Da(Oa){var Ea,da;return{c:function(){Ea=(0,o.bi5)("svg"),da=(0,o.bi5)("path"),(0,o.Ljt)(da,"d","M599.99999 832.000004h47.999999a24 24 0 0 0 23.999999-24V376.000013a24 24 0 0 0-23.999999-24h-47.999999a24 24 0 0 0-24 24v431.999991a24 24 0 0 0 24 24zM927.999983 160.000017h-164.819997l-67.999998-113.399998A95.999998 95.999998 0 0 0 612.819989 0.00002H411.179993a95.999998 95.999998 0 0 0-82.319998 46.599999L260.819996 160.000017H95.999999A31.999999 31.999999 0 0 0 64 192.000016v32a31.999999 31.999999 0 0 0 31.999999 31.999999h32v671.999987a95.999998 95.999998 0 0 0 95.999998 95.999998h575.999989a95.999998 95.999998 0 0 0 95.999998-95.999998V256.000015h31.999999a31.999999 31.999999 0 0 0 32-31.999999V192.000016a31.999999 31.999999 0 0 0-32-31.999999zM407.679993 101.820018A12 12 0 0 1 417.999993 96.000018h187.999996a12 12 0 0 1 10.3 5.82L651.219989 160.000017H372.779994zM799.999986 928.000002H223.999997V256.000015h575.999989z m-423.999992-95.999998h47.999999a24 24 0 0 0 24-24V376.000013a24 24 0 0 0-24-24h-47.999999a24 24 0 0 0-24 24v431.999991a24 24 0 0 0 24 24z"),(0,o.Ljt)(Ea,"class","vc-icon-delete"),(0,o.Ljt)(Ea,"viewBox","0 0 1024 1024"),(0,o.Ljt)(Ea,"width","200"),(0,o.Ljt)(Ea,"height","200")},m:function(xa,Sa){(0,o.$Tr)(xa,Ea,Sa),(0,o.R3I)(Ea,da)},d:function(xa){xa&&(0,o.ogt)(Ea)}}}function Ma(Oa){var Ea,da,xa;return{c:function(){Ea=(0,o.bi5)("svg"),da=(0,o.bi5)("path"),xa=(0,o.bi5)("path"),(0,o.Ljt)(da,"d","M874.154197 150.116875A511.970373 511.970373 0 1 0 1023.993986 511.991687a511.927744 511.927744 0 0 0-149.839789-361.874812z m-75.324866 648.382129A405.398688 405.398688 0 1 1 917.422301 511.991687a405.313431 405.313431 0 0 1-118.59297 286.507317z"),(0,o.Ljt)(xa,"d","M725.039096 299.274605a54.351559 54.351559 0 0 0-76.731613 0l-135.431297 135.431297L377.274375 299.274605a54.436817 54.436817 0 0 0-76.944756 76.987385l135.388668 135.431297-135.388668 135.473925a54.436817 54.436817 0 0 0 76.944756 76.987385l135.388668-135.431297 135.431297 135.473926a54.436817 54.436817 0 0 0 76.731613-76.987385l-135.388668-135.473926 135.388668-135.431296a54.479445 54.479445 0 0 0 0.213143-77.030014z"),(0,o.Ljt)(Ea,"viewBox","0 0 1024 1024"),(0,o.Ljt)(Ea,"width","200"),(0,o.Ljt)(Ea,"height","200")},m:function(Sa,Ha){(0,o.$Tr)(Sa,Ea,Ha),(0,o.R3I)(Ea,da),(0,o.R3I)(Ea,xa)},d:function(Sa){Sa&&(0,o.ogt)(Ea)}}}function fa(Oa){var Ea,da;return{c:function(){Ea=(0,o.bi5)("svg"),da=(0,o.bi5)("path"),(0,o.Ljt)(da,"fill-rule","evenodd"),(0,o.Ljt)(da,"d","M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"),(0,o.Ljt)(Ea,"class","vc-icon-copy"),(0,o.Ljt)(Ea,"viewBox","0 0 16 16")},m:function(xa,Sa){(0,o.$Tr)(xa,Ea,Sa),(0,o.R3I)(Ea,da)},d:function(xa){xa&&(0,o.ogt)(Ea)}}}function va(Oa){var Ea,da;return{c:function(){Ea=(0,o.bi5)("svg"),da=(0,o.bi5)("path"),(0,o.Ljt)(da,"fill-rule","evenodd"),(0,o.Ljt)(da,"d","M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"),(0,o.Ljt)(Ea,"class","vc-icon-suc"),(0,o.Ljt)(Ea,"viewBox","0 0 16 16")},m:function(xa,Sa){(0,o.$Tr)(xa,Ea,Sa),(0,o.R3I)(Ea,da)},d:function(xa){xa&&(0,o.ogt)(Ea)}}}function ka(Oa){var Ea,da,xa;return{c:function(){Ea=(0,o.bi5)("svg"),da=(0,o.bi5)("path"),xa=(0,o.bi5)("path"),(0,o.Ljt)(da,"d","M776.533333 1024 162.133333 1024C72.533333 1024 0 951.466667 0 861.866667L0 247.466667C0 157.866667 72.533333 85.333333 162.133333 85.333333L469.333333 85.333333c25.6 0 42.666667 17.066667 42.666667 42.666667s-17.066667 42.666667-42.666667 42.666667L162.133333 170.666667C119.466667 170.666667 85.333333 204.8 85.333333 247.466667l0 610.133333c0 42.666667 34.133333 76.8 76.8 76.8l610.133333 0c42.666667 0 76.8-34.133333 76.8-76.8L849.066667 554.666667c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667l0 307.2C938.666667 951.466667 866.133333 1024 776.533333 1024z"),(0,o.Ljt)(xa,"d","M256 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8C217.6 789.333333 213.333333 772.266667 213.333333 759.466667l42.666667-213.333333c0-8.533333 4.266667-17.066667 12.8-21.333333l512-512c17.066667-17.066667 42.666667-17.066667 59.733333 0l170.666667 170.666667c17.066667 17.066667 17.066667 42.666667 0 59.733333l-512 512c-4.266667 4.266667-12.8 8.533333-21.333333 12.8l-213.333333 42.666667C260.266667 810.666667 260.266667 810.666667 256 810.666667zM337.066667 576l-25.6 136.533333 136.533333-25.6L921.6 213.333333 810.666667 102.4 337.066667 576z"),(0,o.Ljt)(Ea,"class","vc-icon-edit"),(0,o.Ljt)(Ea,"viewBox","0 0 1024 1024"),(0,o.Ljt)(Ea,"width","200"),(0,o.Ljt)(Ea,"height","200")},m:function(Sa,Ha){(0,o.$Tr)(Sa,Ea,Ha),(0,o.R3I)(Ea,da),(0,o.R3I)(Ea,xa)},d:function(Sa){Sa&&(0,o.ogt)(Ea)}}}function Ra(Oa){var Ea,da;return{c:function(){Ea=(0,o.bi5)("svg"),da=(0,o.bi5)("path"),(0,o.Ljt)(da,"d","M581.338005 987.646578c-2.867097 4.095853-4.573702 8.669555-8.191705 12.287558a83.214071 83.214071 0 0 1-60.959939 24.029001 83.214071 83.214071 0 0 1-61.028203-24.029001c-3.618003-3.618003-5.324608-8.191705-8.123441-12.15103L24.370323 569.050448a83.418864 83.418864 0 0 1 117.892289-117.89229l369.923749 369.92375L1308.829682 24.438587A83.418864 83.418864 0 0 1 1426.721971 142.194348L581.338005 987.646578z"),(0,o.Ljt)(Ea,"class","vc-icon-don"),(0,o.Ljt)(Ea,"viewBox","0 0 1501 1024"),(0,o.Ljt)(Ea,"width","200"),(0,o.Ljt)(Ea,"height","200")},m:function(xa,Sa){(0,o.$Tr)(xa,Ea,Sa),(0,o.R3I)(Ea,da)},d:function(xa){xa&&(0,o.ogt)(Ea)}}}function qa(Oa){var Ea,da;return{c:function(){Ea=(0,o.bi5)("svg"),da=(0,o.bi5)("path"),(0,o.Ljt)(da,"d","M894.976 574.464q0 78.848-29.696 148.48t-81.408 123.392-121.856 88.064-151.04 41.472q-5.12 1.024-9.216 1.536t-9.216 0.512l-177.152 0q-17.408 0-34.304-6.144t-30.208-16.896-22.016-25.088-8.704-29.696 8.192-29.696 21.504-24.576 29.696-16.384 33.792-6.144l158.72 1.024q54.272 0 102.4-19.968t83.968-53.76 56.32-79.36 20.48-97.792q0-49.152-18.432-92.16t-50.688-76.8-75.264-54.784-93.184-26.112q-2.048 0-2.56 0.512t-2.56 0.512l-162.816 0 0 80.896q0 17.408-13.824 25.6t-44.544-10.24q-8.192-5.12-26.112-17.92t-41.984-30.208-50.688-36.864l-51.2-38.912q-15.36-12.288-26.624-22.016t-11.264-24.064q0-12.288 12.8-25.6t29.184-26.624q18.432-15.36 44.032-35.84t50.688-39.936 45.056-35.328 28.16-22.016q24.576-17.408 39.936-7.168t16.384 30.72l0 81.92 162.816 0q5.12 0 10.752 1.024t10.752 2.048q79.872 8.192 149.504 41.984t121.344 87.552 80.896 123.392 29.184 147.456z"),(0,o.Ljt)(Ea,"class","vc-icon-cancel"),(0,o.Ljt)(Ea,"viewBox","0 0 1024 1024"),(0,o.Ljt)(Ea,"width","200"),(0,o.Ljt)(Ea,"height","200")},m:function(xa,Sa){(0,o.$Tr)(xa,Ea,Sa),(0,o.R3I)(Ea,da)},d:function(xa){xa&&(0,o.ogt)(Ea)}}}function ha(Oa){var Ea,da,xa,Sa,Ha,ir,vr,xr,gr,Dr=Oa[0]==="delete"&&Da(),qr=Oa[0]==="clear"&&Ma(),Xr=Oa[0]==="copy"&&fa(),Vr=Oa[0]==="success"&&va(),Pr=Oa[0]==="edit"&&ka(),Ar=Oa[0]==="done"&&Ra(),Mr=Oa[0]==="cancel"&&qa();return{c:function(){Ea=(0,o.bGB)("i"),Dr&&Dr.c(),da=(0,o.DhX)(),qr&&qr.c(),xa=(0,o.DhX)(),Xr&&Xr.c(),Sa=(0,o.DhX)(),Vr&&Vr.c(),Ha=(0,o.DhX)(),Pr&&Pr.c(),ir=(0,o.DhX)(),Ar&&Ar.c(),vr=(0,o.DhX)(),Mr&&Mr.c(),(0,o.Ljt)(Ea,"class","vc-icon")},m:function(ti,fi){(0,o.$Tr)(ti,Ea,fi),Dr&&Dr.m(Ea,null),(0,o.R3I)(Ea,da),qr&&qr.m(Ea,null),(0,o.R3I)(Ea,xa),Xr&&Xr.m(Ea,null),(0,o.R3I)(Ea,Sa),Vr&&Vr.m(Ea,null),(0,o.R3I)(Ea,Ha),Pr&&Pr.m(Ea,null),(0,o.R3I)(Ea,ir),Ar&&Ar.m(Ea,null),(0,o.R3I)(Ea,vr),Mr&&Mr.m(Ea,null),xr||(gr=(0,o.oLt)(Ea,"click",Oa[1]),xr=!0)},p:function(ti,fi){fi[0],ti[0]==="delete"?Dr||((Dr=Da()).c(),Dr.m(Ea,da)):Dr&&(Dr.d(1),Dr=null),ti[0]==="clear"?qr||((qr=Ma()).c(),qr.m(Ea,xa)):qr&&(qr.d(1),qr=null),ti[0]==="copy"?Xr||((Xr=fa()).c(),Xr.m(Ea,Sa)):Xr&&(Xr.d(1),Xr=null),ti[0]==="success"?Vr||((Vr=va()).c(),Vr.m(Ea,Ha)):Vr&&(Vr.d(1),Vr=null),ti[0]==="edit"?Pr||((Pr=ka()).c(),Pr.m(Ea,ir)):Pr&&(Pr.d(1),Pr=null),ti[0]==="done"?Ar||((Ar=Ra()).c(),Ar.m(Ea,vr)):Ar&&(Ar.d(1),Ar=null),ti[0]==="cancel"?Mr||((Mr=qa()).c(),Mr.m(Ea,null)):Mr&&(Mr.d(1),Mr=null)},i:o.ZTd,o:o.ZTd,d:function(ti){ti&&(0,o.ogt)(Ea),Dr&&Dr.d(),qr&&qr.d(),Xr&&Xr.d(),Vr&&Vr.d(),Pr&&Pr.d(),Ar&&Ar.d(),Mr&&Mr.d(),xr=!1,gr()}}}function ja(Oa,Ea,da){var xa=Ea.name;return(0,B.H3)(function(){$a.use()}),(0,B.ev)(function(){$a.unuse()}),Oa.$$set=function(Sa){"name"in Sa&&da(0,xa=Sa.name)},[xa,function(Sa){o.cKT.call(this,Oa,Sa)}]}var Pa=function(Oa){function Ea(da){var xa;return xa=Oa.call(this)||this,(0,o.S1n)((0,l.Z)(xa),da,ja,ha,o.N8,{name:0}),xa}return(0,b.Z)(Ea,Oa),(0,s.Z)(Ea,[{key:"name",get:function(){return this.$$.ctx[0]},set:function(da){this.$$set({name:da}),(0,o.yl1)()}}]),Ea}(o.f_C),Ba=Pa},3903:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6464),_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6881),svelte_internal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2942),svelte__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7003),_component_icon_icon_svelte__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8702),_logTool__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8665),_log_model__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5629),_logCommand_less__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3411);function get_each_context(n,t,r){var s=n.slice();return s[28]=t[r],s}function create_if_block_2(n){var t,r,s;return{c:function(){(t=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("li")).textContent="Close",(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(t,"class","vc-cmd-prompted-hide")},m:function(l,b){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(l,t,b),r||(s=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(t,"click",n[5]),r=!0)},p:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ZTd,d:function(l){l&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(t),r=!1,s()}}}function create_else_block(n){var t;return{c:function(){(t=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("li")).textContent="No Prompted"},m:function(r,s){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(r,t,s)},p:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ZTd,d:function(r){r&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(t)}}}function create_each_block(n){var t,r,s,l,b=n[28].text+"";function o(){return n[14](n[28])}return{c:function(){t=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("li"),r=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.fLW)(b)},m:function(B,Qe){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(B,t,Qe),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(t,r),s||(l=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(t,"click",o),s=!0)},p:function(B,Qe){n=B,8&Qe&&b!==(b=n[28].text+"")&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.rTO)(r,b)},d:function(B){B&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(t),s=!1,l()}}}function create_if_block_1(n){var t,r,s,l,b;return r=new _component_icon_icon_svelte__WEBPACK_IMPORTED_MODULE_2__.Z({props:{name:"clear"}}),{c:function(){t=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("div"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.YCL)(r.$$.fragment),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(t,"class","vc-cmd-clear-btn")},m:function(o,B){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(o,t,B),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.yef)(r,t,null),s=!0,l||(b=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(t,"click",(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.AT7)(n[17])),l=!0)},p:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ZTd,i:function(o){s||((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(r.$$.fragment,o),s=!0)},o:function(o){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.etI)(r.$$.fragment,o),s=!1},d:function(o){o&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(t),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.vpE)(r),l=!1,b()}}}function create_if_block(n){var t,r,s,l,b;return r=new _component_icon_icon_svelte__WEBPACK_IMPORTED_MODULE_2__.Z({props:{name:"clear"}}),{c:function(){t=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("div"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.YCL)(r.$$.fragment),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(t,"class","vc-cmd-clear-btn")},m:function(o,B){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(o,t,B),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.yef)(r,t,null),s=!0,l||(b=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(t,"click",(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.AT7)(n[19])),l=!0)},p:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ZTd,i:function(o){s||((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(r.$$.fragment,o),s=!0)},o:function(o){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.etI)(r.$$.fragment,o),s=!1},d:function(o){o&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(t),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.vpE)(r),l=!1,b()}}}function create_fragment(n){for(var t,r,s,l,b,o,B,Qe,at,ot,ct,ut,lt,ea,ta,ra,aa,ia,la,ba,_a,sa=n[3].length>0&&create_if_block_2(n),ua=n[3],ma=[],$a=0;$a<ua.length;$a+=1)ma[$a]=create_each_block(get_each_context(n,ua,$a));var Da=null;ua.length||(Da=create_else_block());var Ma=n[1].length>0&&create_if_block_1(n),fa=n[4].length>0&&create_if_block(n);return{c:function(){t=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("form"),r=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("ul"),sa&&sa.c(),s=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)();for(var va=0;va<ma.length;va+=1)ma[va].c();Da&&Da.c(),l=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),b=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("div"),o=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("textarea"),B=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),Ma&&Ma.c(),Qe=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),(at=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("button")).textContent="OK",ot=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),ct=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("form"),ut=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("ul"),lt=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),ea=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("div"),ta=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("textarea"),ra=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),fa&&fa.c(),aa=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),(ia=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("button")).textContent="Filter",(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(r,"class","vc-cmd-prompted"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(r,"style",n[2]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(o,"class","vc-cmd-input"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(o,"placeholder","command..."),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(b,"class","vc-cmd-input-wrap"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(at,"class","vc-cmd-btn"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(at,"type","submit"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(t,"class","vc-cmd"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(ut,"class","vc-cmd-prompted"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(ta,"class","vc-cmd-input"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(ta,"placeholder","filter..."),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(ea,"class","vc-cmd-input-wrap"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(ia,"class","vc-cmd-btn"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(ia,"type","submit"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(ct,"class","vc-cmd vc-filter")},m:function(va,ka){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(va,t,ka),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(t,r),sa&&sa.m(r,null),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(r,s);for(var Ra=0;Ra<ma.length;Ra+=1)ma[Ra].m(r,null);Da&&Da.m(r,null),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(t,l),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(t,b),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(b,o),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.BmG)(o,n[1]),n[16](o),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(b,B),Ma&&Ma.m(b,null),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(t,Qe),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(t,at),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(va,ot,ka),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(va,ct,ka),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(ct,ut),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(ct,lt),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(ct,ea),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(ea,ta),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.BmG)(ta,n[4]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(ea,ra),fa&&fa.m(ea,null),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(ct,aa),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(ct,ia),la=!0,ba||(_a=[(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(o,"input",n[15]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(o,"keydown",n[10]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(o,"keyup",n[11]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(o,"focus",n[8]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(o,"blur",n[9]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(t,"submit",(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.AT7)(n[12])),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(ta,"input",n[18]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(ct,"submit",(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.AT7)(n[13]))],ba=!0)},p:function(va,ka){var Ra=ka[0];if(va[3].length>0?sa?sa.p(va,Ra):((sa=create_if_block_2(va)).c(),sa.m(r,s)):sa&&(sa.d(1),sa=null),136&Ra){var qa;for(ua=va[3],qa=0;qa<ua.length;qa+=1){var ha=get_each_context(va,ua,qa);ma[qa]?ma[qa].p(ha,Ra):(ma[qa]=create_each_block(ha),ma[qa].c(),ma[qa].m(r,null))}for(;qa<ma.length;qa+=1)ma[qa].d(1);ma.length=ua.length,!ua.length&&Da?Da.p(va,Ra):ua.length?Da&&(Da.d(1),Da=null):((Da=create_else_block()).c(),Da.m(r,null))}(!la||4&Ra)&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(r,"style",va[2]),2&Ra&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.BmG)(o,va[1]),va[1].length>0?Ma?(Ma.p(va,Ra),2&Ra&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(Ma,1)):((Ma=create_if_block_1(va)).c(),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(Ma,1),Ma.m(b,null)):Ma&&((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.dvw)(),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.etI)(Ma,1,1,function(){Ma=null}),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.gbL)()),16&Ra&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.BmG)(ta,va[4]),va[4].length>0?fa?(fa.p(va,Ra),16&Ra&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(fa,1)):((fa=create_if_block(va)).c(),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(fa,1),fa.m(ea,null)):fa&&((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.dvw)(),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.etI)(fa,1,1,function(){fa=null}),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.gbL)())},i:function(va){la||((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(Ma),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(fa),la=!0)},o:function(va){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.etI)(Ma),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.etI)(fa),la=!1},d:function(va){va&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(t),sa&&sa.d(),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.RMB)(ma,va),Da&&Da.d(),n[16](null),Ma&&Ma.d(),va&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(ot),va&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(ct),fa&&fa.d(),ba=!1,(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.j7q)(_a)}}}function instance($$self,$$props,$$invalidate){var module=_log_model__WEBPACK_IMPORTED_MODULE_3__.W.getSingleton(_log_model__WEBPACK_IMPORTED_MODULE_3__.W,"VConsoleLogModel"),cachedObjKeys={},dispatch=(0,svelte__WEBPACK_IMPORTED_MODULE_1__.x)(),cmdElement,cmdValue="",promptedStyle="",promptedList=[],filterValue="";(0,svelte__WEBPACK_IMPORTED_MODULE_1__.H3)(function(){_logCommand_less__WEBPACK_IMPORTED_MODULE_4__.Z.use()}),(0,svelte__WEBPACK_IMPORTED_MODULE_1__.ev)(function(){_logCommand_less__WEBPACK_IMPORTED_MODULE_4__.Z.unuse()});var evalCommand=function(n){module.evalCommand(n)},moveCursorToPos=function(n,t){n.setSelectionRange&&setTimeout(function(){n.setSelectionRange(t,t)},1)},clearPromptedList=function(){$$invalidate(2,promptedStyle="display: none;"),$$invalidate(3,promptedList=[])},updatePromptedList=function updatePromptedList(identifier){if(cmdValue!==""){identifier||(identifier=(0,_logTool__WEBPACK_IMPORTED_MODULE_5__.oj)(cmdValue));var objName="window",keyName=cmdValue;if(identifier.front.text!=="."&&identifier.front.text!=="["||(objName=identifier.front.before,keyName=identifier.back.text!==""?identifier.back.before:identifier.front.after),keyName=keyName.replace(/(^['"]+)|(['"']+$)/g,""),!cachedObjKeys[objName])try{cachedObjKeys[objName]=Object.getOwnPropertyNames(eval("("+objName+")")).sort()}catch(n){}try{if(cachedObjKeys[objName])for(var i=0;i<cachedObjKeys[objName].length&&!(promptedList.length>=100);i++){var key=String(cachedObjKeys[objName][i]),keyPattern=new RegExp("^"+keyName,"i");if(keyPattern.test(key)){var completeCmd=objName;identifier.front.text==="."||identifier.front.text===""?completeCmd+="."+key:identifier.front.text==="["&&(completeCmd+="['"+key+"']"),promptedList.push({text:key,value:completeCmd})}}}catch(n){}if(promptedList.length>0){var m=Math.min(200,31*(promptedList.length+1));$$invalidate(2,promptedStyle="display: block; height: "+m+"px; margin-top: "+(-m-2)+"px;"),$$invalidate(3,promptedList)}else clearPromptedList()}else clearPromptedList()},autoCompleteBrackets=function(n,t){if(!(t===8||t===46)&&n.front.after==="")switch(n.front.text){case"[":return $$invalidate(1,cmdValue+="]"),void moveCursorToPos(cmdElement,cmdValue.length-1);case"(":return $$invalidate(1,cmdValue+=")"),void moveCursorToPos(cmdElement,cmdValue.length-1);case"{":return $$invalidate(1,cmdValue+="}"),void moveCursorToPos(cmdElement,cmdValue.length-1)}},dispatchFilterEvent=function(){dispatch("filterText",{filterText:filterValue})},onTapClearText=function(n){n==="cmd"?($$invalidate(1,cmdValue=""),clearPromptedList()):n==="filter"&&($$invalidate(4,filterValue=""),dispatchFilterEvent())},onTapPromptedItem=function onTapPromptedItem(item){var type="";try{type=eval("typeof "+item.value)}catch(n){}$$invalidate(1,cmdValue=item.value+(type==="function"?"()":"")),clearPromptedList()},onCmdFocus=function(){updatePromptedList()},onCmdBlur=function(){},onCmdKeyDown=function(n){n.keyCode===13&&(n.preventDefault(),onCmdSubmit())},onCmdKeyUp=function(n){$$invalidate(3,promptedList=[]);var t=(0,_logTool__WEBPACK_IMPORTED_MODULE_5__.oj)(n.target.value);autoCompleteBrackets(t,n.keyCode),updatePromptedList(t)},onCmdSubmit=function(){cmdValue!==""&&evalCommand(cmdValue),clearPromptedList()},onFilterSubmit=function(n){dispatchFilterEvent()},click_handler=function(n){return onTapPromptedItem(n)};function textarea0_input_handler(){cmdValue=this.value,$$invalidate(1,cmdValue)}function textarea0_binding(n){svelte_internal__WEBPACK_IMPORTED_MODULE_0__.VnY[n?"unshift":"push"](function(){$$invalidate(0,cmdElement=n)})}var click_handler_1=function(){return onTapClearText("cmd")};function textarea1_input_handler(){filterValue=this.value,$$invalidate(4,filterValue)}var click_handler_2=function(){return onTapClearText("filter")};return[cmdElement,cmdValue,promptedStyle,promptedList,filterValue,clearPromptedList,onTapClearText,onTapPromptedItem,onCmdFocus,onCmdBlur,onCmdKeyDown,onCmdKeyUp,onCmdSubmit,onFilterSubmit,click_handler,textarea0_input_handler,textarea0_binding,click_handler_1,textarea1_input_handler,click_handler_2]}var LogCommand=function(n){function t(r){var s;return s=n.call(this)||this,(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.S1n)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.Z)(s),r,instance,create_fragment,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N8,{}),s}return(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__.Z)(t,n),t}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.f_C);__webpack_exports__.Z=LogCommand},4687:function(n,t,r){r.d(t,{x:function(){return l}});var s=r(3313),l=function(){var b=(0,s.fZ)({updateTime:0}),o=b.subscribe,B=b.set,Qe=b.update;return{subscribe:o,set:B,update:Qe,updateTime:function(){Qe(function(at){return at.updateTime=Date.now(),at})}}}()},643:function(n,t,r){r.d(t,{N:function(){return s}});var s=function(){function l(){this._onDataUpdateCallbacks=[]}return l.getSingleton=function(b,o){return o||(o=b.toString()),l.singleton[o]||(l.singleton[o]=new b),l.singleton[o]},l}();s.singleton={}},5103:function(n,t,r){function s(da){var xa=da>0?new Date(da):new Date,Sa=xa.getDate()<10?"0"+xa.getDate():xa.getDate(),Ha=xa.getMonth()<9?"0"+(xa.getMonth()+1):xa.getMonth()+1,ir=xa.getFullYear(),vr=xa.getHours()<10?"0"+xa.getHours():xa.getHours(),xr=xa.getMinutes()<10?"0"+xa.getMinutes():xa.getMinutes(),gr=xa.getSeconds()<10?"0"+xa.getSeconds():xa.getSeconds(),Dr=xa.getMilliseconds()<10?"0"+xa.getMilliseconds():xa.getMilliseconds();return Dr<100&&(Dr="0"+Dr),{time:+xa,year:ir,month:Ha,day:Sa,hour:vr,minute:xr,second:gr,millisecond:Dr}}function l(da){return Object.prototype.toString.call(da)==="[object Number]"}function b(da){return typeof da=="bigint"}function o(da){return typeof da=="string"}function B(da){return Object.prototype.toString.call(da)==="[object Array]"}function Qe(da){return typeof da=="boolean"}function at(da){return da===void 0}function ot(da){return da===null}function ct(da){return typeof da=="symbol"}function ut(da){return!(Object.prototype.toString.call(da)!=="[object Object]"&&(l(da)||b(da)||o(da)||Qe(da)||B(da)||ot(da)||lt(da)||at(da)||ct(da)))}function lt(da){return typeof da=="function"}function ea(da){return typeof HTMLElement=="object"?da instanceof HTMLElement:da&&typeof da=="object"&&da!==null&&da.nodeType===1&&typeof da.nodeName=="string"}function ta(da){var xa=Object.prototype.toString.call(da);return xa==="[object Window]"||xa==="[object DOMWindow]"||xa==="[object global]"}function ra(da){return da!=null&&typeof da!="string"&&typeof da!="boolean"&&typeof da!="number"&&typeof da!="function"&&typeof da!="symbol"&&typeof da!="bigint"&&typeof Symbol<"u"&&typeof da[Symbol.iterator]=="function"}function aa(da){return Object.prototype.toString.call(da).replace(/\[object (.*)\]/,"$1")}r.d(t,{C4:function(){return b},DV:function(){return la},FJ:function(){return ta},Ft:function(){return ot},HD:function(){return o},H_:function(){return Oa},KL:function(){return Ma},Kn:function(){return ut},MH:function(){return Ra},PO:function(){return ba},QI:function(){return Ba},QK:function(){return qa},TW:function(){return ra},_3:function(){return s},_D:function(){return ha},cF:function(){return Pa},hZ:function(){return Da},hj:function(){return l},id:function(){return fa},jn:function(){return Qe},kJ:function(){return B},kK:function(){return ea},mf:function(){return lt},o8:function(){return at},po:function(){return ja},qr:function(){return ka},qt:function(){return Ea},rE:function(){return ua},yk:function(){return ct},zl:function(){return aa}});var ia=/(function|class) ([^ \{\()}]{1,})[\(| ]/;function la(da){var xa;if(da==null)return"";var Sa=ia.exec((da==null||(xa=da.constructor)==null?void 0:xa.toString())||"");return Sa&&Sa.length>1?Sa[2]:""}function ba(da){var xa,Sa=Object.prototype.hasOwnProperty;if(!da||typeof da!="object"||da.nodeType||ta(da))return!1;try{if(da.constructor&&!Sa.call(da,"constructor")&&!Sa.call(da.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}for(xa in da);return xa===void 0||Sa.call(da,xa)}var _a=/[\n\t]/g,sa=function(da){return{"\n":"\\n","	":"\\t"}[da]};function ua(da){return typeof da!="string"?da:String(da).replace(_a,sa)}var ma=function(da,xa){xa===void 0&&(xa=0);var Sa="";return o(da)?(xa>0&&(da=fa(da,xa)),Sa+='"'+ua(da)+'"'):ct(da)?Sa+=String(da).replace(/^Symbol\((.*)\)$/i,'Symbol("$1")'):lt(da)?Sa+=(da.name||"function")+"()":b(da)?Sa+=String(da)+"n":Sa+=String(da),Sa},$a=function da(xa,Sa,Ha){if(Ha===void 0&&(Ha=0),ut(xa)||B(xa))if(Sa.circularFinder(xa)){var ir="";if(B(xa))ir="(Circular Array)";else if(ut(xa)){var vr;ir="(Circular "+(((vr=xa.constructor)==null?void 0:vr.name)||"Object")+")"}Sa.ret+=Sa.standardJSON?'"'+ir+'"':ir}else{var xr="",gr="";if(Sa.pretty){for(var Dr=0;Dr<=Ha;Dr++)xr+="  ";gr=`
`}var qr="{",Xr="}";B(xa)&&(qr="[",Xr="]"),Sa.ret+=qr+gr;for(var Vr=Ra(xa),Pr=0;Pr<Vr.length;Pr++){var Ar=Vr[Pr];Sa.ret+=xr;try{B(xa)||(ut(Ar)||B(Ar)||ct(Ar)?Sa.ret+=Object.prototype.toString.call(Ar):o(Ar)&&Sa.standardJSON?Sa.ret+='"'+Ar+'"':Sa.ret+=Ar,Sa.ret+=": ")}catch{continue}try{var Mr=xa[Ar];if(B(Mr))Sa.maxDepth>-1&&Ha>=Sa.maxDepth?Sa.ret+="Array("+Mr.length+")":da(Mr,Sa,Ha+1);else if(ut(Mr)){var ti;Sa.maxDepth>-1&&Ha>=Sa.maxDepth?Sa.ret+=(((ti=Mr.constructor)==null?void 0:ti.name)||"Object")+" {}":da(Mr,Sa,Ha+1)}else Sa.ret+=ma(Mr,Sa.keyMaxLen)}catch{Sa.ret+=Sa.standardJSON?'"(PARSE_ERROR)"':"(PARSE_ERROR)"}if(Sa.keyMaxLen>0&&Sa.ret.length>=10*Sa.keyMaxLen){Sa.ret+=", (...)";break}Pr<Vr.length-1&&(Sa.ret+=", "),Sa.ret+=gr}Sa.ret+=xr.substring(0,xr.length-2)+Xr}else Sa.ret+=ma(xa,Sa.keyMaxLen)};function Da(da,xa){xa===void 0&&(xa={maxDepth:-1,keyMaxLen:-1,pretty:!1,standardJSON:!1});var Sa,Ha=Object.assign({ret:"",maxDepth:-1,keyMaxLen:-1,pretty:!1,standardJSON:!1,circularFinder:(Sa=new WeakSet,function(ir){if(typeof ir=="object"&&ir!==null){if(Sa.has(ir))return!0;Sa.add(ir)}return!1})},xa);return $a(da,Ha),Ha.ret}function Ma(da){return da<=0?"":da>=1e6?(da/1e3/1e3).toFixed(1)+" MB":da>=1e3?(da/1e3).toFixed(1)+" KB":da+" B"}function fa(da,xa){return da.length>xa&&(da=da.substring(0,xa)+"...("+Ma(function(Sa){try{return encodeURI(Sa).split(/%(?:u[0-9A-F]{2})?[0-9A-F]{2}|./).length-1}catch{return 0}}(da))+")"),da}var va=function(da,xa){return String(da).localeCompare(String(xa),void 0,{numeric:!0,sensitivity:"base"})};function ka(da){return da.sort(va)}function Ra(da){return ut(da)||B(da)?Object.keys(da):[]}function qa(da){var xa=Ra(da),Sa=function(Ha){return ut(Ha)||B(Ha)?Object.getOwnPropertyNames(Ha):[]}(da);return Sa.filter(function(Ha){return xa.indexOf(Ha)===-1})}function ha(da){return ut(da)||B(da)?Object.getOwnPropertySymbols(da):[]}function ja(da,xa){window.localStorage&&(da="vConsole_"+da,localStorage.setItem(da,xa))}function Pa(da){if(window.localStorage)return da="vConsole_"+da,localStorage.getItem(da)}function Ba(da){return da===void 0&&(da=""),"__vc_"+da+Math.random().toString(36).substring(2,8)}function Oa(){return typeof window<"u"&&!!window.__wxConfig&&!!window.wx&&!!window.__virtualDOM__}function Ea(da){if(Oa()&&typeof window.wx[da]=="function")try{for(var xa,Sa=arguments.length,Ha=new Array(Sa>1?Sa-1:0),ir=1;ir<Sa;ir++)Ha[ir-1]=arguments[ir];var vr=(xa=window.wx[da]).call.apply(xa,[window.wx].concat(Ha));return vr}catch(xr){return void console.debug("[vConsole] Fail to call wx."+da+"():",xr)}}},5629:function(n,t,r){r.d(t,{W:function(){return ea}});var s=r(8270),l=r(6881),b=r(5103),o=r(643),B=r(4687),Qe=r(8665),at=r(9923);function ot(ta,ra){var aa=Object.keys(ta);if(Object.getOwnPropertySymbols){var ia=Object.getOwnPropertySymbols(ta);ra&&(ia=ia.filter(function(la){return Object.getOwnPropertyDescriptor(ta,la).enumerable})),aa.push.apply(aa,ia)}return aa}function ct(ta){for(var ra=1;ra<arguments.length;ra++){var aa=arguments[ra]!=null?arguments[ra]:{};ra%2?ot(Object(aa),!0).forEach(function(ia){(0,s.Z)(ta,ia,aa[ia])}):Object.getOwnPropertyDescriptors?Object.defineProperties(ta,Object.getOwnPropertyDescriptors(aa)):ot(Object(aa)).forEach(function(ia){Object.defineProperty(ta,ia,Object.getOwnPropertyDescriptor(aa,ia))})}return ta}function ut(ta,ra){var aa=typeof Symbol<"u"&&ta[Symbol.iterator]||ta["@@iterator"];if(aa)return(aa=aa.call(ta)).next.bind(aa);if(Array.isArray(ta)||(aa=function(la,ba){if(la){if(typeof la=="string")return lt(la,ba);var _a=Object.prototype.toString.call(la).slice(8,-1);if(_a==="Object"&&la.constructor&&(_a=la.constructor.name),_a==="Map"||_a==="Set")return Array.from(la);if(_a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_a))return lt(la,ba)}}(ta))||ra){aa&&(ta=aa);var ia=0;return function(){return ia>=ta.length?{done:!0}:{done:!1,value:ta[ia++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lt(ta,ra){(ra==null||ra>ta.length)&&(ra=ta.length);for(var aa=0,ia=new Array(ra);aa<ra;aa++)ia[aa]=ta[aa];return ia}var ea=function(ta){function ra(){for(var ia,la=arguments.length,ba=new Array(la),_a=0;_a<la;_a++)ba[_a]=arguments[_a];return(ia=ta.call.apply(ta,[this].concat(ba))||this).LOG_METHODS=["log","info","warn","debug","error"],ia.ADDED_LOG_PLUGIN_ID=[],ia.maxLogNumber=1e3,ia.logCounter=0,ia.groupLevel=0,ia.groupLabelCollapsedStack=[],ia.pluginPattern=void 0,ia.logQueue=[],ia.flushLogScheduled=!1,ia.origConsole={},ia}(0,l.Z)(ra,ta);var aa=ra.prototype;return aa.bindPlugin=function(ia){return!(this.ADDED_LOG_PLUGIN_ID.indexOf(ia)>-1)&&(this.ADDED_LOG_PLUGIN_ID.length===0&&this.mockConsole(),at.O.create(ia),this.ADDED_LOG_PLUGIN_ID.push(ia),this.pluginPattern=new RegExp("^\\[("+this.ADDED_LOG_PLUGIN_ID.join("|")+")\\]$","i"),!0)},aa.unbindPlugin=function(ia){var la=this.ADDED_LOG_PLUGIN_ID.indexOf(ia);return la!==-1&&(this.ADDED_LOG_PLUGIN_ID.splice(la,1),at.O.delete(ia),this.ADDED_LOG_PLUGIN_ID.length===0&&this.unmockConsole(),!0)},aa.mockConsole=function(){var ia=this;typeof this.origConsole.log!="function"&&(window.console?(this.LOG_METHODS.map(function(la){ia.origConsole[la]=window.console[la]}),this.origConsole.time=window.console.time,this.origConsole.timeEnd=window.console.timeEnd,this.origConsole.clear=window.console.clear,this.origConsole.group=window.console.group,this.origConsole.groupCollapsed=window.console.groupCollapsed,this.origConsole.groupEnd=window.console.groupEnd):window.console={},this._mockConsoleLog(),this._mockConsoleTime(),this._mockConsoleGroup(),this._mockConsoleClear(),window._vcOrigConsole=this.origConsole)},aa._mockConsoleLog=function(){var ia=this;this.LOG_METHODS.map(function(la){window.console[la]=(function(){for(var ba=arguments.length,_a=new Array(ba),sa=0;sa<ba;sa++)_a[sa]=arguments[sa];ia.addLog({type:la,origData:_a||[]})}).bind(window.console)})},aa._mockConsoleTime=function(){var ia=this,la={};window.console.time=(function(ba){ba===void 0&&(ba=""),la[ba]=Date.now()}).bind(window.console),window.console.timeEnd=(function(ba){ba===void 0&&(ba="");var _a=la[ba],sa=0;_a&&(sa=Date.now()-_a,delete la[ba]),ia.addLog({type:"log",origData:[ba+": "+sa+"ms"]})}).bind(window.console)},aa._mockConsoleGroup=function(){var ia=this,la=function(ba){return(function(_a){_a===void 0&&(_a="console.group");var sa=Symbol(_a);ia.groupLabelCollapsedStack.push({label:sa,collapsed:ba}),ia.addLog({type:"log",origData:[_a],isGroupHeader:ba?2:1,isGroupCollapsed:!1},{noOrig:!0}),ia.groupLevel++,ba?ia.origConsole.groupCollapsed(_a):ia.origConsole.group(_a)}).bind(window.console)};window.console.group=la(!1),window.console.groupCollapsed=la(!0),window.console.groupEnd=(function(){ia.groupLabelCollapsedStack.pop(),ia.groupLevel=Math.max(0,ia.groupLevel-1),ia.origConsole.groupEnd()}).bind(window.console)},aa._mockConsoleClear=function(){var ia=this;window.console.clear=(function(){ia.resetGroup(),ia.clearLog();for(var la=arguments.length,ba=new Array(la),_a=0;_a<la;_a++)ba[_a]=arguments[_a];ia.callOriginalConsole.apply(ia,["clear"].concat(ba))}).bind(window.console)},aa.unmockConsole=function(){for(var ia in this.origConsole)window.console[ia]=this.origConsole[ia],delete this.origConsole[ia];window._vcOrigConsole&&delete window._vcOrigConsole},aa.callOriginalConsole=function(ia){if(typeof this.origConsole[ia]=="function"){for(var la=arguments.length,ba=new Array(la>1?la-1:0),_a=1;_a<la;_a++)ba[_a-1]=arguments[_a];this.origConsole[ia].apply(window.console,ba)}},aa.resetGroup=function(){for(;this.groupLevel>0;)console.groupEnd()},aa.clearLog=function(){var ia=at.O.getAll();for(var la in ia)this.clearPluginLog(la)},aa.clearPluginLog=function(ia){var la=this.logQueue;this.logQueue=[];for(var ba,_a=ut(la);!(ba=_a()).done;){var sa=ba.value;this._extractPluginIdByLog(sa)!==ia&&this.logQueue.push(sa)}at.O.get(ia).update(function(ua){return ua.logList.length=0,ua}),B.x.updateTime()},aa.addLog=function(ia,la){ia===void 0&&(ia={type:"log",origData:[],isGroupHeader:0,isGroupCollapsed:!1});var ba=this.groupLabelCollapsedStack[this.groupLabelCollapsedStack.length-2],_a=this.groupLabelCollapsedStack[this.groupLabelCollapsedStack.length-1],sa={_id:b.QI(),type:ia.type,cmdType:la==null?void 0:la.cmdType,toggle:{},date:Date.now(),data:(0,Qe.b1)(ia.origData||[]),repeated:0,groupLabel:_a==null?void 0:_a.label,groupLevel:this.groupLevel,groupHeader:ia.isGroupHeader,groupCollapsed:ia.isGroupHeader?!(ba==null||!ba.collapsed):!(_a==null||!_a.collapsed)};this._signalLog(sa),la!=null&&la.noOrig||this.callOriginalConsole.apply(this,[ia.type].concat(ia.origData))},aa.evalCommand=function(ia){this.addLog({type:"log",origData:[ia]},{cmdType:"input"});var la=void 0;try{la=eval.call(window,"("+ia+")")}catch{try{la=eval.call(window,ia)}catch{}}this.addLog({type:"log",origData:[la]},{cmdType:"output"})},aa._signalLog=function(ia){var la=this;this.flushLogScheduled||(this.flushLogScheduled=!0,window.requestAnimationFrame(function(){la.flushLogScheduled=!1,la._flushLogs()})),this.logQueue.push(ia)},aa._flushLogs=function(){var ia=this,la=this.logQueue;this.logQueue=[];for(var ba,_a={},sa=ut(la);!(ba=sa()).done;){var ua=ba.value,ma=this._extractPluginIdByLog(ua);(_a[ma]=_a[ma]||[]).push(ua)}for(var $a=function(fa){var va=_a[fa];at.O.get(fa).update(function(ka){for(var Ra,qa=[].concat(ka.logList),ha=ut(va);!(Ra=ha()).done;){var ja=Ra.value;ia._isRepeatedLog(qa,ja)?ia._updateLastLogRepeated(qa):qa.push(ja)}return{logList:qa=ia._limitLogListLength(qa)}})},Da=0,Ma=Object.keys(_a);Da<Ma.length;Da++)$a(Ma[Da]);B.x.updateTime()},aa._extractPluginIdByLog=function(ia){var la,ba="default",_a=(la=ia.data[0])==null?void 0:la.origData;if(b.HD(_a)){var sa=_a.match(this.pluginPattern);if(sa!==null&&sa.length>1){var ua=sa[1].toLowerCase();this.ADDED_LOG_PLUGIN_ID.indexOf(ua)>-1&&(ba=ua,ia.data.shift())}}return ba},aa._isRepeatedLog=function(ia,la){var ba=ia[ia.length-1];if(!ba)return!1;var _a=!1;if(la.type===ba.type&&la.cmdType===ba.cmdType&&la.data.length===ba.data.length){_a=!0;for(var sa=0;sa<la.data.length;sa++)if(la.data[sa].origData!==ba.data[sa].origData){_a=!1;break}}return _a},aa._updateLastLogRepeated=function(ia){var la=ia[ia.length-1],ba=la.repeated?la.repeated+1:2;return ia[ia.length-1]=ct(ct({},la),{},{repeated:ba}),ia},aa._limitLogListLength=function(ia){var la=ia.length,ba=this.maxLogNumber;return la>ba?ia.slice(la-ba,la):ia},ra}(o.N)},9923:function(n,t,r){r.d(t,{O:function(){return l}});var s=r(3313),l=function(){function b(){}return b.create=function(o){return this.storeMap[o]||(this.storeMap[o]=(0,s.fZ)({logList:[]})),this.storeMap[o]},b.delete=function(o){this.storeMap[o]&&delete this.storeMap[o]},b.get=function(o){return this.storeMap[o]},b.getRaw=function(o){return(0,s.U2)(this.storeMap[o])},b.getAll=function(){return this.storeMap},b}();l.storeMap={}},8665:function(n,t,r){r.d(t,{HX:function(){return ot},LH:function(){return b},Tg:function(){return lt},b1:function(){return ut},oj:function(){return at}});var s=r(5103),l=function(ea){var ta=s.hZ(ea,{maxDepth:0}),ra=ta.substring(0,36),aa=s.DV(ea);return ta.length>36&&(ra+="..."),aa=s.rE(aa+" "+ra)},b=function(ea,ta){ta===void 0&&(ta=!0);var ra="undefined",aa=ea;return ea instanceof lt?(ra="uninvocatable",aa="(...)"):s.kJ(ea)?(ra="array",aa=l(ea)):s.Kn(ea)?(ra="object",aa=l(ea)):s.HD(ea)?(ra="string",aa=s.rE(ea),ta&&(aa='"'+aa+'"')):s.hj(ea)?(ra="number",aa=String(ea)):s.C4(ea)?(ra="bigint",aa=String(ea)+"n"):s.jn(ea)?(ra="boolean",aa=String(ea)):s.Ft(ea)?(ra="null",aa="null"):s.o8(ea)?(ra="undefined",aa="undefined"):s.mf(ea)?(ra="function",aa=(ea.name||"function")+"()"):s.yk(ea)&&(ra="symbol",aa=String(ea)),{text:aa,valueType:ra}},o=[".","[","(","{","}"],B=["]",")","}"],Qe=function(ea,ta,ra){ra===void 0&&(ra=0);for(var aa={text:"",pos:-1,before:"",after:""},ia=ea.length-1;ia>=ra;ia--){var la=ta.indexOf(ea[ia]);if(la>-1){aa.text=ta[la],aa.pos=ia,aa.before=ea.substring(ra,ia),aa.after=ea.substring(ia+1,ea.length);break}}return aa},at=function(ea){var ta=Qe(ea,o,0);return{front:ta,back:Qe(ea,B,ta.pos+1)}},ot=function(ea,ta){if(ta==="")return!0;for(var ra=0;ra<ea.data.length;ra++)if(typeof ea.data[ra].origData=="string"&&ea.data[ra].origData.indexOf(ta)>-1)return!0;return!1},ct=/(\%[csdo] )|( \%[csdo])/g,ut=function(ea){if(ct.lastIndex=0,s.HD(ea[0])&&ct.test(ea[0])){for(var ta,ra=[].concat(ea),aa=ra.shift().split(ct).filter(function(Ma){return Ma!==void 0&&Ma!==""}),ia=ra,la=[],ba=!1,_a="";aa.length>0;){var sa=aa.shift();if(/ ?\%c ?/.test(sa)?ia.length>0?typeof(_a=ia.shift())!="string"&&(_a=""):(ta=sa,_a="",ba=!0):/ ?\%[sd] ?/.test(sa)?(ta=ia.length>0?s.Kn(ia[0])?s.DV(ia.shift()):String(ia.shift()):sa,ba=!0):/ ?\%o ?/.test(sa)?(ta=ia.length>0?ia.shift():sa,ba=!0):(ta=sa,ba=!0),ba){var ua={origData:ta};_a&&(ua.style=_a),la.push(ua),ba=!1,ta=void 0,_a=""}}for(var ma=0;ma<ia.length;ma++)la.push({origData:ia[ma]});return la}for(var $a=[],Da=0;Da<ea.length;Da++)$a.push({origData:ea[Da]});return $a},lt=function(){}},5313:function(n,t,r){var s=r(6738),l=r.n(s),b=r(7705),o=r.n(b)()(l());o.push([n.id,`.vc-icon {
  word-break: normal;
  white-space: normal;
  overflow: visible;
}
.vc-icon svg {
  fill: var(--VC-FG-2);
  height: 1em;
  width: 1em;
  vertical-align: -0.11em;
}
.vc-icon .vc-icon-delete {
  vertical-align: -0.11em;
}
.vc-icon .vc-icon-copy {
  height: 1.1em;
  width: 1.1em;
  vertical-align: -0.16em;
}
.vc-icon .vc-icon-suc {
  fill: var(--VC-TEXTGREEN);
  height: 1.1em;
  width: 1.1em;
  vertical-align: -0.16em;
}
`,""]),t.Z=o},1142:function(n,t,r){var s=r(6738),l=r.n(s),b=r(7705),o=r.n(b)()(l());o.push([n.id,`.vc-scroller-viewport {
  position: relative;
  overflow: hidden;
  height: 100%;
}
.vc-scroller-contents {
  min-height: 100%;
  will-change: transform;
}
.vc-scroller-items {
  will-change: height;
  position: relative;
}
.vc-scroller-item {
  display: none;
  position: absolute;
  left: 0;
  right: 0;
}
.vc-scroller-viewport.static .vc-scroller-item {
  display: block;
  position: static;
}
.vc-scroller-scrollbar-track {
  width: 4px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 1px;
}
.vc-scroller-scrollbar-thumb {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 999px;
}
`,""]),t.Z=o},3283:function(n,t,r){var s=r(6738),l=r.n(s),b=r(7705),o=r.n(b)()(l());o.push([n.id,`#__vconsole {
  --VC-BG-0: #ededed;
  --VC-BG-1: #f7f7f7;
  --VC-BG-2: #fff;
  --VC-BG-3: #f7f7f7;
  --VC-BG-4: #4c4c4c;
  --VC-BG-5: #fff;
  --VC-BG-6: rgba(0, 0, 0, 0.1);
  --VC-FG-0: rgba(0, 0, 0, 0.9);
  --VC-FG-HALF: rgba(0, 0, 0, 0.9);
  --VC-FG-1: rgba(0, 0, 0, 0.5);
  --VC-FG-2: rgba(0, 0, 0, 0.3);
  --VC-FG-3: rgba(0, 0, 0, 0.1);
  --VC-RED: #fa5151;
  --VC-ORANGE: #fa9d3b;
  --VC-YELLOW: #ffc300;
  --VC-GREEN: #91d300;
  --VC-LIGHTGREEN: #95ec69;
  --VC-BRAND: #07c160;
  --VC-BLUE: #10aeff;
  --VC-INDIGO: #1485ee;
  --VC-PURPLE: #6467f0;
  --VC-LINK: #576b95;
  --VC-TEXTGREEN: #06ae56;
  --VC-FG: black;
  --VC-BG: white;
  --VC-BG-COLOR-ACTIVE: #ececec;
  --VC-WARN-BG: #fff3cc;
  --VC-WARN-BORDER: #ffe799;
  --VC-ERROR-BG: #fedcdc;
  --VC-ERROR-BORDER: #fdb9b9;
  --VC-DOM-TAG-NAME-COLOR: #881280;
  --VC-DOM-ATTRIBUTE-NAME-COLOR: #994500;
  --VC-DOM-ATTRIBUTE-VALUE-COLOR: #1a1aa6;
  --VC-CODE-KEY-FG: #881391;
  --VC-CODE-PRIVATE-KEY-FG: #cfa1d3;
  --VC-CODE-FUNC-FG: #0d22aa;
  --VC-CODE-NUMBER-FG: #1c00cf;
  --VC-CODE-STR-FG: #c41a16;
  --VC-CODE-NULL-FG: #808080;
  color: var(--VC-FG-0);
  font-size: 13px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-user-select: auto;
  /* global */
}
#__vconsole .vc-max-height {
  max-height: 19.23076923em;
}
#__vconsole .vc-max-height-line {
  max-height: 6.30769231em;
}
#__vconsole .vc-min-height {
  min-height: 3.07692308em;
}
#__vconsole dd,
#__vconsole dl,
#__vconsole pre {
  margin: 0;
}
#__vconsole pre {
  white-space: pre-wrap;
}
#__vconsole i {
  font-style: normal;
}
.vc-table {
  height: 100%;
}
.vc-table .vc-table-row {
  line-height: 1.5;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  overflow: hidden;
  border-bottom: 1px solid var(--VC-FG-3);
}
.vc-table .vc-table-row.vc-left-border {
  border-left: 1px solid var(--VC-FG-3);
}
.vc-table .vc-table-row-icon {
  margin-left: 4px;
}
.vc-table .vc-table-col {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0.23076923em 0.30769231em;
  border-left: 1px solid var(--VC-FG-3);
  overflow: auto;
}
.vc-table .vc-table-col:first-child {
  border: none;
}
.vc-table .vc-table-col-value {
  white-space: pre-wrap;
  word-break: break-word;
  /*white-space: nowrap;
    text-overflow: ellipsis;*/
  -webkit-overflow-scrolling: touch;
}
.vc-table .vc-small .vc-table-col {
  padding: 0 0.30769231em;
  font-size: 0.92307692em;
}
.vc-table .vc-table-col-2 {
  -webkit-box-flex: 2;
  -webkit-flex: 2;
  -moz-box-flex: 2;
  -ms-flex: 2;
  flex: 2;
}
.vc-table .vc-table-col-3 {
  -webkit-box-flex: 3;
  -webkit-flex: 3;
  -moz-box-flex: 3;
  -ms-flex: 3;
  flex: 3;
}
.vc-table .vc-table-col-4 {
  -webkit-box-flex: 4;
  -webkit-flex: 4;
  -moz-box-flex: 4;
  -ms-flex: 4;
  flex: 4;
}
.vc-table .vc-table-col-5 {
  -webkit-box-flex: 5;
  -webkit-flex: 5;
  -moz-box-flex: 5;
  -ms-flex: 5;
  flex: 5;
}
.vc-table .vc-table-col-6 {
  -webkit-box-flex: 6;
  -webkit-flex: 6;
  -moz-box-flex: 6;
  -ms-flex: 6;
  flex: 6;
}
.vc-table .vc-table-row-error {
  border-color: var(--VC-ERROR-BORDER);
  background-color: var(--VC-ERROR-BG);
}
.vc-table .vc-table-row-error .vc-table-col {
  color: var(--VC-RED);
  border-color: var(--VC-ERROR-BORDER);
}
.vc-table .vc-table-col-title {
  font-weight: bold;
}
.vc-table .vc-table-action {
  display: flex;
  justify-content: space-evenly;
}
.vc-table .vc-table-action .vc-icon {
  flex: 1;
  text-align: center;
  display: block;
}
.vc-table .vc-table-action .vc-icon:hover {
  background: var(--VC-BG-3);
}
.vc-table .vc-table-action .vc-icon:active {
  background: var(--VC-BG-1);
}
.vc-table .vc-table-input {
  width: 100%;
  border: none;
  color: var(--VC-FG-0);
  background-color: var(--VC-BG-6);
  height: 3.53846154em;
}
.vc-table .vc-table-input:focus {
  background-color: var(--VC-FG-2);
}
@media (prefers-color-scheme: dark) {
  #__vconsole:not([data-theme="light"]) {
    --VC-BG-0: #191919;
    --VC-BG-1: #1f1f1f;
    --VC-BG-2: #232323;
    --VC-BG-3: #2f2f2f;
    --VC-BG-4: #606060;
    --VC-BG-5: #2c2c2c;
    --VC-BG-6: rgba(255, 255, 255, 0.2);
    --VC-FG-0: rgba(255, 255, 255, 0.8);
    --VC-FG-HALF: rgba(255, 255, 255, 0.6);
    --VC-FG-1: rgba(255, 255, 255, 0.5);
    --VC-FG-2: rgba(255, 255, 255, 0.3);
    --VC-FG-3: rgba(255, 255, 255, 0.05);
    --VC-RED: #fa5151;
    --VC-ORANGE: #c87d2f;
    --VC-YELLOW: #cc9c00;
    --VC-GREEN: #74a800;
    --VC-LIGHTGREEN: #28b561;
    --VC-BRAND: #07c160;
    --VC-BLUE: #10aeff;
    --VC-INDIGO: #1196ff;
    --VC-PURPLE: #8183ff;
    --VC-LINK: #7d90a9;
    --VC-TEXTGREEN: #259c5c;
    --VC-FG: white;
    --VC-BG: black;
    --VC-BG-COLOR-ACTIVE: #282828;
    --VC-WARN-BG: #332700;
    --VC-WARN-BORDER: #664e00;
    --VC-ERROR-BG: #321010;
    --VC-ERROR-BORDER: #642020;
    --VC-DOM-TAG-NAME-COLOR: #5DB0D7;
    --VC-DOM-ATTRIBUTE-NAME-COLOR: #9BBBDC;
    --VC-DOM-ATTRIBUTE-VALUE-COLOR: #f29766;
    --VC-CODE-KEY-FG: #e36eec;
    --VC-CODE-PRIVATE-KEY-FG: #f4c5f7;
    --VC-CODE-FUNC-FG: #556af2;
    --VC-CODE-NUMBER-FG: #9980ff;
    --VC-CODE-STR-FG: #e93f3b;
    --VC-CODE-NULL-FG: #808080;
  }
}
#__vconsole[data-theme="dark"] {
  --VC-BG-0: #191919;
  --VC-BG-1: #1f1f1f;
  --VC-BG-2: #232323;
  --VC-BG-3: #2f2f2f;
  --VC-BG-4: #606060;
  --VC-BG-5: #2c2c2c;
  --VC-BG-6: rgba(255, 255, 255, 0.2);
  --VC-FG-0: rgba(255, 255, 255, 0.8);
  --VC-FG-HALF: rgba(255, 255, 255, 0.6);
  --VC-FG-1: rgba(255, 255, 255, 0.5);
  --VC-FG-2: rgba(255, 255, 255, 0.3);
  --VC-FG-3: rgba(255, 255, 255, 0.05);
  --VC-RED: #fa5151;
  --VC-ORANGE: #c87d2f;
  --VC-YELLOW: #cc9c00;
  --VC-GREEN: #74a800;
  --VC-LIGHTGREEN: #28b561;
  --VC-BRAND: #07c160;
  --VC-BLUE: #10aeff;
  --VC-INDIGO: #1196ff;
  --VC-PURPLE: #8183ff;
  --VC-LINK: #7d90a9;
  --VC-TEXTGREEN: #259c5c;
  --VC-FG: white;
  --VC-BG: black;
  --VC-BG-COLOR-ACTIVE: #282828;
  --VC-WARN-BG: #332700;
  --VC-WARN-BORDER: #664e00;
  --VC-ERROR-BG: #321010;
  --VC-ERROR-BORDER: #642020;
  --VC-DOM-TAG-NAME-COLOR: #5DB0D7;
  --VC-DOM-ATTRIBUTE-NAME-COLOR: #9BBBDC;
  --VC-DOM-ATTRIBUTE-VALUE-COLOR: #f29766;
  --VC-CODE-KEY-FG: #e36eec;
  --VC-CODE-PRIVATE-KEY-FG: #f4c5f7;
  --VC-CODE-FUNC-FG: #556af2;
  --VC-CODE-NUMBER-FG: #9980ff;
  --VC-CODE-STR-FG: #e93f3b;
  --VC-CODE-NULL-FG: #808080;
}
.vc-tabbar {
  border-bottom: 1px solid var(--VC-FG-3);
  overflow-x: auto;
  height: 3em;
  width: auto;
  white-space: nowrap;
}
.vc-tabbar .vc-tab {
  display: inline-block;
  line-height: 3em;
  padding: 0 1.15384615em;
  border-right: 1px solid var(--VC-FG-3);
  text-decoration: none;
  color: var(--VC-FG-0);
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
.vc-tabbar .vc-tab:active {
  background-color: rgba(0, 0, 0, 0.15);
}
.vc-tabbar .vc-tab.vc-actived {
  background-color: var(--VC-BG-1);
}
.vc-toolbar {
  border-top: 1px solid var(--VC-FG-3);
  line-height: 3em;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.vc-toolbar .vc-tool {
  display: none;
  font-style: normal;
  text-decoration: none;
  color: var(--VC-FG-0);
  width: 50%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  position: relative;
  -webkit-touch-callout: none;
}
.vc-toolbar .vc-tool.vc-toggle,
.vc-toolbar .vc-tool.vc-global-tool {
  display: block;
}
.vc-toolbar .vc-tool:active {
  background-color: rgba(0, 0, 0, 0.15);
}
.vc-toolbar .vc-tool:after {
  content: " ";
  position: absolute;
  top: 0.53846154em;
  bottom: 0.53846154em;
  right: 0;
  border-left: 1px solid var(--VC-FG-3);
}
.vc-toolbar .vc-tool-last:after {
  border: none;
}
.vc-topbar {
  background-color: var(--VC-BG-1);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
}
.vc-topbar .vc-toptab {
  display: none;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  line-height: 2.30769231em;
  padding: 0 1.15384615em;
  border-bottom: 1px solid var(--VC-FG-3);
  text-decoration: none;
  text-align: center;
  color: var(--VC-FG-0);
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
.vc-topbar .vc-toptab.vc-toggle {
  display: block;
}
.vc-topbar .vc-toptab:active {
  background-color: rgba(0, 0, 0, 0.15);
}
.vc-topbar .vc-toptab.vc-actived {
  border-bottom: 1px solid var(--VC-INDIGO);
}
.vc-mask {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 10001;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
  overflow-y: scroll;
}
.vc-panel {
  display: none;
  position: fixed;
  min-height: 85%;
  left: 0;
  right: 0;
  bottom: -100%;
  z-index: 10002;
  background-color: var(--VC-BG-0);
  transition: bottom 0.3s;
}
.vc-toggle .vc-switch {
  display: none;
}
.vc-toggle .vc-mask {
  background: rgba(0, 0, 0, 0.6);
  display: block;
}
.vc-toggle .vc-panel {
  bottom: 0;
}
.vc-content {
  background-color: var(--VC-BG-2);
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 3.07692308em;
  left: 0;
  right: 0;
  bottom: 3.07692308em;
  -webkit-overflow-scrolling: touch;
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
}
.vc-content.vc-has-topbar {
  top: 5.46153846em;
}
.vc-plugin-box {
  display: none;
  position: relative;
  min-height: 100%;
}
.vc-plugin-box.vc-fixed-height {
  height: 100%;
}
.vc-plugin-box.vc-actived {
  display: block;
}
.vc-plugin-content {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
  -webkit-tap-highlight-color: transparent;
}
.vc-plugin-content:empty:before {
  content: "Empty";
  color: var(--VC-FG-1);
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 1.15384615em;
  text-align: center;
}
.vc-plugin-empty {
  color: var(--VC-FG-1);
  font-size: 1.15384615em;
  height: 100%;
  width: 100%;
  padding: 1.15384615em 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
  .vc-toolbar,
  .vc-switch {
    bottom: constant(safe-area-inset-bottom);
    bottom: env(safe-area-inset-bottom);
  }
}
`,""]),t.Z=o},7558:function(n,t,r){var s=r(6738),l=r.n(s),b=r(7705),o=r.n(b)()(l());o.push([n.id,`.vc-switch {
  display: block;
  position: fixed;
  right: 0.76923077em;
  bottom: 0.76923077em;
  color: #FFF;
  background-color: var(--VC-BRAND);
  line-height: 1;
  font-size: 1.07692308em;
  padding: 0.61538462em 1.23076923em;
  z-index: 10000;
  border-radius: 0.30769231em;
  box-shadow: 0 0 0.61538462em rgba(0, 0, 0, 0.4);
}
`,""]),t.Z=o},5670:function(n,t,r){var s=r(6738),l=r.n(s),b=r(7705),o=r.n(b)()(l());o.push([n.id,`/* color */
.vcelm-node {
  color: var(--VC-DOM-TAG-NAME-COLOR);
}
.vcelm-k {
  color: var(--VC-DOM-ATTRIBUTE-NAME-COLOR);
}
.vcelm-v {
  color: var(--VC-DOM-ATTRIBUTE-VALUE-COLOR);
}
.vcelm-l.vc-actived > .vcelm-node {
  background-color: var(--VC-FG-3);
}
/* layout */
.vcelm-l {
  padding-left: 8px;
  position: relative;
  word-wrap: break-word;
  line-height: 1.2;
}
/*.vcelm-l.vcelm-noc {
  padding-left: 0;
}*/
.vcelm-l .vcelm-node:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
.vcelm-l.vcelm-noc .vcelm-node:active {
  background-color: transparent;
}
.vcelm-t {
  white-space: pre-wrap;
  word-wrap: break-word;
}
/* level */
/* arrow */
.vcelm-l:before {
  content: "";
  display: block;
  position: absolute;
  top: 6px;
  left: 3px;
  width: 0;
  height: 0;
  border: transparent solid 3px;
  border-left-color: var(--VC-FG-1);
}
.vcelm-l.vc-toggle:before {
  display: block;
  top: 6px;
  left: 0;
  border-top-color: var(--VC-FG-1);
  border-left-color: transparent;
}
.vcelm-l.vcelm-noc:before {
  display: none;
}
`,""]),t.Z=o},3327:function(n,t,r){var s=r(6738),l=r.n(s),b=r(7705),o=r.n(b)()(l());o.push([n.id,"",""]),t.Z=o},1130:function(n,t,r){var s=r(6738),l=r.n(s),b=r(7705),o=r.n(b)()(l());o.push([n.id,`.vc-cmd {
  height: 3.07692308em;
  border-top: 1px solid var(--VC-FG-3);
  display: flex;
  flex-direction: row;
}
.vc-cmd.vc-filter {
  bottom: 0;
}
.vc-cmd-input-wrap {
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
  height: 2.15384615em;
  padding: 0.46153846em 0.61538462em;
}
.vc-cmd-input {
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  padding: 0;
  font-size: 0.92307692em;
  background-color: transparent;
  color: var(--VC-FG-0);
}
.vc-cmd-input::-webkit-input-placeholder {
  line-height: 2.15384615em;
}
.vc-cmd-btn {
  width: 3.07692308em;
  border: none;
  background-color: var(--VC-BG-0);
  color: var(--VC-FG-0);
  outline: none;
  -webkit-touch-callout: none;
  font-size: 1em;
}
.vc-cmd-clear-btn {
  flex: 1 3.07692308em;
  text-align: center;
  line-height: 3.07692308em;
}
.vc-cmd-btn:active,
.vc-cmd-clear-btn:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
.vc-cmd-prompted {
  position: absolute;
  left: 0.46153846em;
  right: 0.46153846em;
  background-color: var(--VC-BG-3);
  border: 1px solid var(--VC-FG-3);
  overflow-x: scroll;
  display: none;
}
.vc-cmd-prompted li {
  list-style: none;
  line-height: 30px;
  padding: 0 0.46153846em;
  border-bottom: 1px solid var(--VC-FG-3);
}
.vc-cmd-prompted li:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
.vc-cmd-prompted-hide {
  text-align: center;
}
`,""]),t.Z=o},7147:function(n,t,r){var s=r(6738),l=r.n(s),b=r(7705),o=r.n(b)()(l());o.push([n.id,`.vc-log-row {
  margin: 0;
  padding: 0.46153846em 0.61538462em;
  overflow: hidden;
  line-height: 1.3;
  border-bottom: 1px solid var(--VC-FG-3);
  word-break: break-word;
  position: relative;
  display: flex;
}
.vc-log-info {
  color: var(--VC-PURPLE);
}
.vc-log-debug {
  color: var(--VC-YELLOW);
}
.vc-log-warn {
  color: var(--VC-ORANGE);
  border-color: var(--VC-WARN-BORDER);
  background-color: var(--VC-WARN-BG);
}
.vc-log-error {
  color: var(--VC-RED);
  border-color: var(--VC-ERROR-BORDER);
  background-color: var(--VC-ERROR-BG);
}
.vc-logrow-icon {
  margin-left: auto;
}
.vc-log-padding {
  width: 1.53846154em;
  border-left: 1px solid var(--VC-FG-3);
}
.vc-log-group .vc-log-content {
  font-weight: bold;
}
.vc-log-group-toggle {
  padding-left: 0.76923077em;
}
.vc-log-group-toggle {
  display: block;
  font-style: italic;
  padding-left: 0.76923077em;
  position: relative;
}
.vc-log-group-toggle:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
.vc-log-group > .vc-log-group-toggle::before {
  content: "";
  position: absolute;
  top: 0.30769231em;
  left: 0.15384615em;
  width: 0;
  height: 0;
  border: transparent solid 0.30769231em;
  border-left-color: var(--VC-FG-1);
}
.vc-log-group.vc-toggle > .vc-log-group-toggle::before {
  top: 0.46153846em;
  left: 0;
  border-top-color: var(--VC-FG-1);
  border-left-color: transparent;
}
.vc-log-time {
  width: 6.15384615em;
  color: #777;
}
.vc-log-repeat i {
  margin-right: 0.30769231em;
  padding: 0 6.5px;
  color: #D7E0EF;
  background-color: #42597F;
  border-radius: 8.66666667px;
}
.vc-log-error .vc-log-repeat i {
  color: #901818;
  background-color: var(--VC-RED);
}
.vc-log-warn .vc-log-repeat i {
  color: #987D20;
  background-color: #F4BD02;
}
.vc-log-content {
  flex: 1;
}
.vc-log-input,
.vc-log-output {
  padding-left: 0.92307692em;
}
.vc-log-input:before,
.vc-log-output:before {
  content: "›";
  position: absolute;
  top: 0.15384615em;
  left: 0;
  font-size: 1.23076923em;
  color: #6A5ACD;
}
.vc-log-output:before {
  content: "‹";
}
`,""]),t.Z=o},1237:function(n,t,r){var s=r(6738),l=r.n(s),b=r(7705),o=r.n(b)()(l());o.push([n.id,`.vc-log-tree {
  display: block;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}
.vc-log-tree-node {
  display: block;
  font-style: italic;
  padding-left: 0.76923077em;
  position: relative;
}
.vc-log-tree.vc-is-tree > .vc-log-tree-node:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
.vc-log-tree.vc-is-tree > .vc-log-tree-node::before {
  content: "";
  position: absolute;
  top: 0.30769231em;
  left: 0.15384615em;
  width: 0;
  height: 0;
  border: transparent solid 0.30769231em;
  border-left-color: var(--VC-FG-1);
}
.vc-log-tree.vc-is-tree.vc-toggle > .vc-log-tree-node::before {
  top: 0.46153846em;
  left: 0;
  border-top-color: var(--VC-FG-1);
  border-left-color: transparent;
}
.vc-log-tree-child {
  margin-left: 0.76923077em;
}
.vc-log-tree-loadmore {
  text-decoration: underline;
  padding-left: 1.84615385em;
  position: relative;
  color: var(--VC-CODE-FUNC-FG);
}
.vc-log-tree-loadmore::before {
  content: "››";
  position: absolute;
  top: -0.15384615em;
  left: 0.76923077em;
  font-size: 1.23076923em;
  color: var(--VC-CODE-FUNC-FG);
}
.vc-log-tree-loadmore:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
`,""]),t.Z=o},845:function(n,t,r){var s=r(6738),l=r.n(s),b=r(7705),o=r.n(b)()(l());o.push([n.id,`.vc-log-key {
  color: var(--VC-CODE-KEY-FG);
}
.vc-log-key-private {
  color: var(--VC-CODE-PRIVATE-KEY-FG);
}
.vc-log-val {
  white-space: pre-line;
}
.vc-log-val-function {
  color: var(--VC-CODE-FUNC-FG);
  font-style: italic !important;
}
.vc-log-val-bigint {
  color: var(--VC-CODE-FUNC-FG);
}
.vc-log-val-number,
.vc-log-val-boolean {
  color: var(--VC-CODE-NUMBER-FG);
}
.vc-log-val-string {
  white-space: pre-wrap;
}
.vc-log-val-string.vc-log-val-haskey {
  color: var(--VC-CODE-STR-FG);
  white-space: normal;
}
.vc-log-val-null,
.vc-log-val-undefined,
.vc-log-val-uninvocatable {
  color: var(--VC-CODE-NULL-FG);
}
.vc-log-val-symbol {
  color: var(--VC-CODE-STR-FG);
}
`,""]),t.Z=o},8747:function(n,t,r){var s=r(6738),l=r.n(s),b=r(7705),o=r.n(b)()(l());o.push([n.id,`.vc-group .vc-group-preview {
  -webkit-touch-callout: none;
}
.vc-group .vc-group-preview:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
.vc-group .vc-group-detail {
  display: none;
  padding: 0 0 0.76923077em 1.53846154em;
  border-bottom: 1px solid var(--VC-FG-3);
}
.vc-group.vc-actived .vc-group-detail {
  display: block;
  background-color: var(--VC-BG-1);
}
.vc-group.vc-actived .vc-table-row {
  background-color: var(--VC-BG-2);
}
.vc-group.vc-actived .vc-group-preview {
  background-color: var(--VC-BG-1);
}
`,""]),t.Z=o},3411:function(n,t,r){var s=r(3379),l=r.n(s),b=r(7795),o=r.n(b),B=r(569),Qe=r.n(B),at=r(3565),ot=r.n(at),ct=r(9216),ut=r.n(ct),lt=r(4589),ea=r.n(lt),ta=r(1130),ra={};ta.Z&&ta.Z.locals&&(ra.locals=ta.Z.locals);var aa,ia=0,la={};la.styleTagTransform=ea(),la.setAttributes=ot(),la.insert=Qe().bind(null,"head"),la.domAPI=o(),la.insertStyleElement=ut(),ra.use=function(ba){return la.options=ba||{},ia++||(aa=l()(ta.Z,la)),ra},ra.unuse=function(){ia>0&&!--ia&&(aa(),aa=null)},t.Z=ra},3379:function(n){var t=[];function r(b){for(var o=-1,B=0;B<t.length;B++)if(t[B].identifier===b){o=B;break}return o}function s(b,o){for(var B={},Qe=[],at=0;at<b.length;at++){var ot=b[at],ct=o.base?ot[0]+o.base:ot[0],ut=B[ct]||0,lt="".concat(ct," ").concat(ut);B[ct]=ut+1;var ea=r(lt),ta={css:ot[1],media:ot[2],sourceMap:ot[3],supports:ot[4],layer:ot[5]};if(ea!==-1)t[ea].references++,t[ea].updater(ta);else{var ra=l(ta,o);o.byIndex=at,t.splice(at,0,{identifier:lt,updater:ra,references:1})}Qe.push(lt)}return Qe}function l(b,o){var B=o.domAPI(o);return B.update(b),function(Qe){if(Qe){if(Qe.css===b.css&&Qe.media===b.media&&Qe.sourceMap===b.sourceMap&&Qe.supports===b.supports&&Qe.layer===b.layer)return;B.update(b=Qe)}else B.remove()}}n.exports=function(b,o){var B=s(b=b||[],o=o||{});return function(Qe){Qe=Qe||[];for(var at=0;at<B.length;at++){var ot=r(B[at]);t[ot].references--}for(var ct=s(Qe,o),ut=0;ut<B.length;ut++){var lt=r(B[ut]);t[lt].references===0&&(t[lt].updater(),t.splice(lt,1))}B=ct}}},569:function(n){var t={};n.exports=function(r,s){var l=function(b){if(t[b]===void 0){var o=document.querySelector(b);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch{o=null}t[b]=o}return t[b]}(r);if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(s)}},9216:function(n){n.exports=function(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}},3565:function(n,t,r){n.exports=function(s){var l=r.nc;l&&s.setAttribute("nonce",l)}},7795:function(n){n.exports=function(t){var r=t.insertStyleElement(t);return{update:function(s){(function(l,b,o){var B="";o.supports&&(B+="@supports (".concat(o.supports,") {")),o.media&&(B+="@media ".concat(o.media," {"));var Qe=o.layer!==void 0;Qe&&(B+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),B+=o.css,Qe&&(B+="}"),o.media&&(B+="}"),o.supports&&(B+="}");var at=o.sourceMap;at&&typeof btoa<"u"&&(B+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(at))))," */")),b.styleTagTransform(B,l,b.options)})(r,t,s)},remove:function(){(function(s){if(s.parentNode===null)return!1;s.parentNode.removeChild(s)})(r)}}}},4589:function(n){n.exports=function(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}},6464:function(n,t,r){function s(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}r.d(t,{Z:function(){return s}})},4296:function(n,t,r){function s(b,o){for(var B=0;B<o.length;B++){var Qe=o[B];Qe.enumerable=Qe.enumerable||!1,Qe.configurable=!0,"value"in Qe&&(Qe.writable=!0),Object.defineProperty(b,Qe.key,Qe)}}function l(b,o,B){return o&&s(b.prototype,o),B&&s(b,B),Object.defineProperty(b,"prototype",{writable:!1}),b}r.d(t,{Z:function(){return l}})},8270:function(n,t,r){function s(l,b,o){return b in l?Object.defineProperty(l,b,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[b]=o,l}r.d(t,{Z:function(){return s}})},6881:function(n,t,r){r.d(t,{Z:function(){return l}});var s=r(2717);function l(b,o){b.prototype=Object.create(o.prototype),b.prototype.constructor=b,(0,s.Z)(b,o)}},2717:function(n,t,r){function s(l,b){return s=Object.setPrototypeOf||function(o,B){return o.__proto__=B,o},s(l,b)}r.d(t,{Z:function(){return s}})},7003:function(n,t,r){r.d(t,{H3:function(){return s.H3E},ev:function(){return s.evW},x:function(){return s.xa3}});var s=r(2942)},2942:function(n,t,r){r.d(t,{f_C:function(){return Ti},hjT:function(){return ti},R3I:function(){return _a},Ljt:function(){return ha},akz:function(){return za},VnY:function(){return Dr},cKT:function(){return xr},gbL:function(){return di},FIv:function(){return lt},XGm:function(){return la},xa3:function(){return vr},YCL:function(){return Xa},nuO:function(){return ea},vpE:function(){return sr},RMB:function(){return ma},ogt:function(){return ua},bGB:function(){return $a},cSb:function(){return va},yl1:function(){return Gi},VOJ:function(){return ia},u2N:function(){return ra},$XI:function(){return ut},lig:function(){return Li},dvw:function(){return Xi},S1n:function(){return ii},$Tr:function(){return sa},sBU:function(){return B},oLt:function(){return ka},yef:function(){return ar},ZTd:function(){return s},AqN:function(){return at},evW:function(){return ir},H3E:function(){return Ha},cly:function(){return ui},AT7:function(){return Ra},j7q:function(){return o},N8:function(){return Qe},rTO:function(){return ja},BmG:function(){return Pa},fxP:function(){return ba},czc:function(){return Ba},DhX:function(){return fa},XET:function(){return qa},LdU:function(){return ct},bi5:function(){return Da},fLW:function(){return Ma},VHj:function(){return Oa},Ui:function(){return Ri},etI:function(){return Vi},GQg:function(){return Bi},kmG:function(){return aa}}),r(2717),r(6881);function s(){}function l(ya){return ya()}function b(){return Object.create(null)}function o(ya){ya.forEach(l)}function B(ya){return typeof ya=="function"}function Qe(ya,Ia){return ya!=ya?Ia==Ia:ya!==Ia||ya&&typeof ya=="object"||typeof ya=="function"}function at(ya,Ia){return ya!=ya?Ia==Ia:ya!==Ia}function ot(ya){return Object.keys(ya).length===0}function ct(ya){if(ya==null)return s;for(var Ia=arguments.length,Ca=new Array(Ia>1?Ia-1:0),La=1;La<Ia;La++)Ca[La-1]=arguments[La];var Ga=ya.subscribe.apply(ya,Ca);return Ga.unsubscribe?function(){return Ga.unsubscribe()}:Ga}function ut(ya){var Ia;return ct(ya,function(Ca){return Ia=Ca})(),Ia}function lt(ya,Ia,Ca){ya.$$.on_destroy.push(ct(Ia,Ca))}function ea(ya,Ia,Ca,La){if(ya){var Ga=ta(ya,Ia,Ca,La);return ya[0](Ga)}}function ta(ya,Ia,Ca,La){return ya[1]&&La?function(Ga,rr){for(var kr in rr)Ga[kr]=rr[kr];return Ga}(Ca.ctx.slice(),ya[1](La(Ia))):Ca.ctx}function ra(ya,Ia,Ca,La){if(ya[2]&&La){var Ga=ya[2](La(Ca));if(Ia.dirty===void 0)return Ga;if(typeof Ga=="object"){for(var rr=[],kr=Math.max(Ia.dirty.length,Ga.length),ei=0;ei<kr;ei+=1)rr[ei]=Ia.dirty[ei]|Ga[ei];return rr}return Ia.dirty|Ga}return Ia.dirty}function aa(ya,Ia,Ca,La,Ga,rr){if(Ga){var kr=ta(Ia,Ca,La,rr);ya.p(kr,Ga)}}function ia(ya){if(ya.ctx.length>32){for(var Ia=[],Ca=ya.ctx.length/32,La=0;La<Ca;La++)Ia[La]=-1;return Ia}return-1}function la(ya){var Ia={};for(var Ca in ya)Ia[Ca]=!0;return Ia}function ba(ya,Ia,Ca){return ya.set(Ca),Ia}function _a(ya,Ia){ya.appendChild(Ia)}function sa(ya,Ia,Ca){ya.insertBefore(Ia,Ca||null)}function ua(ya){ya.parentNode.removeChild(ya)}function ma(ya,Ia){for(var Ca=0;Ca<ya.length;Ca+=1)ya[Ca]&&ya[Ca].d(Ia)}function $a(ya){return document.createElement(ya)}function Da(ya){return document.createElementNS("http://www.w3.org/2000/svg",ya)}function Ma(ya){return document.createTextNode(ya)}function fa(){return Ma(" ")}function va(){return Ma("")}function ka(ya,Ia,Ca,La){return ya.addEventListener(Ia,Ca,La),function(){return ya.removeEventListener(Ia,Ca,La)}}function Ra(ya){return function(Ia){return Ia.preventDefault(),ya.call(this,Ia)}}function qa(ya){return function(Ia){return Ia.stopPropagation(),ya.call(this,Ia)}}function ha(ya,Ia,Ca){Ca==null?ya.removeAttribute(Ia):ya.getAttribute(Ia)!==Ca&&ya.setAttribute(Ia,Ca)}function ja(ya,Ia){Ia=""+Ia,ya.wholeText!==Ia&&(ya.data=Ia)}function Pa(ya,Ia){ya.value=Ia??""}function Ba(ya,Ia,Ca,La){Ca===null?ya.style.removeProperty(Ia):ya.style.setProperty(Ia,Ca,La?"important":"")}function Oa(ya,Ia,Ca){ya.classList[Ca?"add":"remove"](Ia)}function Ea(ya,Ia,Ca){Ca===void 0&&(Ca=!1);var La=document.createEvent("CustomEvent");return La.initCustomEvent(ya,Ca,!1,Ia),La}var da;function xa(ya){da=ya}function Sa(){if(!da)throw new Error("Function called outside component initialization");return da}function Ha(ya){Sa().$$.on_mount.push(ya)}function ir(ya){Sa().$$.on_destroy.push(ya)}function vr(){var ya=Sa();return function(Ia,Ca){var La=ya.$$.callbacks[Ia];if(La){var Ga=Ea(Ia,Ca);La.slice().forEach(function(rr){rr.call(ya,Ga)})}}}function xr(ya,Ia){var Ca=this,La=ya.$$.callbacks[Ia.type];La&&La.slice().forEach(function(Ga){return Ga.call(Ca,Ia)})}var gr=[],Dr=[],qr=[],Xr=[],Vr=Promise.resolve(),Pr=!1;function Ar(){Pr||(Pr=!0,Vr.then(Gi))}function Mr(ya){qr.push(ya)}function ti(ya){Xr.push(ya)}var fi=new Set,mi=0;function Gi(){var ya=da;do{for(;mi<gr.length;){var Ia=gr[mi];mi++,xa(Ia),ki(Ia.$$)}for(xa(null),gr.length=0,mi=0;Dr.length;)Dr.pop()();for(var Ca=0;Ca<qr.length;Ca+=1){var La=qr[Ca];fi.has(La)||(fi.add(La),La())}qr.length=0}while(gr.length);for(;Xr.length;)Xr.pop()();Pr=!1,fi.clear(),xa(ya)}function ki(ya){if(ya.fragment!==null){ya.update(),o(ya.before_update);var Ia=ya.dirty;ya.dirty=[-1],ya.fragment&&ya.fragment.p(ya.ctx,Ia),ya.after_update.forEach(Mr)}}var hi,Ci=new Set;function Xi(){hi={r:0,c:[],p:hi}}function di(){hi.r||o(hi.c),hi=hi.p}function Ri(ya,Ia){ya&&ya.i&&(Ci.delete(ya),ya.i(Ia))}function Vi(ya,Ia,Ca,La){if(ya&&ya.o){if(Ci.has(ya))return;Ci.add(ya),hi.c.push(function(){Ci.delete(ya),La&&(Ca&&ya.d(1),La())}),ya.o(Ia)}}var Li=typeof window<"u"?window:typeof globalThis<"u"?globalThis:commonjsGlobal;function ui(ya,Ia){Vi(ya,1,1,function(){Ia.delete(ya.key)})}function Bi(ya,Ia,Ca,La,Ga,rr,kr,ei,ji,ai,Zi,co){for(var Si=ya.length,Ei=rr.length,Di=Si,Yi={};Di--;)Yi[ya[Di].key]=Di;var lo=[],mo=new Map,ho=new Map;for(Di=Ei;Di--;){var go=co(Ga,rr,Di),Ji=Ca(go),jo=kr.get(Ji);jo?La&&jo.p(go,Ia):(jo=ai(Ji,go)).c(),mo.set(Ji,lo[Di]=jo),Ji in Yi&&ho.set(Ji,Math.abs(Di-Yi[Ji]))}var $o=new Set,ao=new Set;function wo(oo){Ri(oo,1),oo.m(ei,Zi),kr.set(oo.key,oo),Zi=oo.first,Ei--}for(;Si&&Ei;){var Hi=lo[Ei-1],Qi=ya[Si-1],ro=Hi.key,io=Qi.key;Hi===Qi?(Zi=Hi.first,Si--,Ei--):mo.has(io)?!kr.has(ro)||$o.has(ro)?wo(Hi):ao.has(io)?Si--:ho.get(ro)>ho.get(io)?(ao.add(ro),wo(Hi)):($o.add(io),Si--):(ji(Qi,kr),Si--)}for(;Si--;){var Wi=ya[Si];mo.has(Wi.key)||ji(Wi,kr)}for(;Ei;)wo(lo[Ei-1]);return lo}function za(ya,Ia,Ca){var La=ya.$$.props[Ia];La!==void 0&&(ya.$$.bound[La]=Ca,Ca(ya.$$.ctx[La]))}function Xa(ya){ya&&ya.c()}function ar(ya,Ia,Ca,La){var Ga=ya.$$,rr=Ga.fragment,kr=Ga.on_mount,ei=Ga.on_destroy,ji=Ga.after_update;rr&&rr.m(Ia,Ca),La||Mr(function(){var ai=kr.map(l).filter(B);ei?ei.push.apply(ei,ai):o(ai),ya.$$.on_mount=[]}),ji.forEach(Mr)}function sr(ya,Ia){var Ca=ya.$$;Ca.fragment!==null&&(o(Ca.on_destroy),Ca.fragment&&Ca.fragment.d(Ia),Ca.on_destroy=Ca.fragment=null,Ca.ctx=[])}function Wr(ya,Ia){ya.$$.dirty[0]===-1&&(gr.push(ya),Ar(),ya.$$.dirty.fill(0)),ya.$$.dirty[Ia/31|0]|=1<<Ia%31}function ii(ya,Ia,Ca,La,Ga,rr,kr,ei){ei===void 0&&(ei=[-1]);var ji=da;xa(ya);var ai=ya.$$={fragment:null,ctx:null,props:rr,update:s,not_equal:Ga,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(Ia.context||(ji?ji.$$.context:[])),callbacks:b(),dirty:ei,skip_bound:!1,root:Ia.target||ji.$$.root};kr&&kr(ai.root);var Zi,co=!1;if(ai.ctx=Ca?Ca(ya,Ia.props||{},function(Ei,Di){var Yi=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:Di;return ai.ctx&&Ga(ai.ctx[Ei],ai.ctx[Ei]=Yi)&&(!ai.skip_bound&&ai.bound[Ei]&&ai.bound[Ei](Yi),co&&Wr(ya,Ei)),Di}):[],ai.update(),co=!0,o(ai.before_update),ai.fragment=!!La&&La(ai.ctx),Ia.target){if(Ia.hydrate){var Si=(Zi=Ia.target,Array.from(Zi.childNodes));ai.fragment&&ai.fragment.l(Si),Si.forEach(ua)}else ai.fragment&&ai.fragment.c();Ia.intro&&Ri(ya.$$.fragment),ar(ya,Ia.target,Ia.anchor,Ia.customElement),Gi()}xa(ji)}var Ti=function(){function ya(){}var Ia=ya.prototype;return Ia.$destroy=function(){sr(this,1),this.$destroy=s},Ia.$on=function(Ca,La){var Ga=this.$$.callbacks[Ca]||(this.$$.callbacks[Ca]=[]);return Ga.push(La),function(){var rr=Ga.indexOf(La);rr!==-1&&Ga.splice(rr,1)}},Ia.$set=function(Ca){this.$$set&&!ot(Ca)&&(this.$$.skip_bound=!0,this.$$set(Ca),this.$$.skip_bound=!1)},ya}()},3313:function(n,t,r){r.d(t,{U2:function(){return s.$XI},fZ:function(){return B}});var s=r(2942);function l(Qe,at){var ot=typeof Symbol<"u"&&Qe[Symbol.iterator]||Qe["@@iterator"];if(ot)return(ot=ot.call(Qe)).next.bind(ot);if(Array.isArray(Qe)||(ot=function(ut,lt){if(ut){if(typeof ut=="string")return b(ut,lt);var ea=Object.prototype.toString.call(ut).slice(8,-1);if(ea==="Object"&&ut.constructor&&(ea=ut.constructor.name),ea==="Map"||ea==="Set")return Array.from(ut);if(ea==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ea))return b(ut,lt)}}(Qe))||at){ot&&(Qe=ot);var ct=0;return function(){return ct>=Qe.length?{done:!0}:{done:!1,value:Qe[ct++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(Qe,at){(at==null||at>Qe.length)&&(at=Qe.length);for(var ot=0,ct=new Array(at);ot<at;ot++)ct[ot]=Qe[ot];return ct}var o=[];function B(Qe,at){var ot;at===void 0&&(at=s.ZTd);var ct=new Set;function ut(lt){if((0,s.N8)(Qe,lt)&&(Qe=lt,ot)){for(var ea,ta=!o.length,ra=l(ct);!(ea=ra()).done;){var aa=ea.value;aa[1](),o.push(aa,Qe)}if(ta){for(var ia=0;ia<o.length;ia+=2)o[ia][0](o[ia+1]);o.length=0}}}return{set:ut,update:function(lt){ut(lt(Qe))},subscribe:function(lt,ea){ea===void 0&&(ea=s.ZTd);var ta=[lt,ea];return ct.add(ta),ct.size===1&&(ot=at(ut)||s.ZTd),lt(Qe),function(){ct.delete(ta),ct.size===0&&(ot(),ot=null)}}}}}},__webpack_module_cache__={};function __webpack_require__(n){var t=__webpack_module_cache__[n];if(t!==void 0)return t.exports;var r=__webpack_module_cache__[n]={id:n,exports:{}};return __webpack_modules__[n](r,r.exports,__webpack_require__),r.exports}__webpack_require__.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=function(n,t){for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},__webpack_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),__webpack_require__.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)};var __webpack_exports__={};return function(){__webpack_require__.d(__webpack_exports__,{default:function(){return vd}}),__webpack_require__(5441),__webpack_require__(8765);var n=__webpack_require__(4296),t=__webpack_require__(5103),r={one:function(P,T){T===void 0&&(T=document);try{return T.querySelector(P)||void 0}catch{return}},all:function(P,T){T===void 0&&(T=document);try{var E=T.querySelectorAll(P);return[].slice.call(E)}catch{return[]}},addClass:function(P,T){if(P)for(var E=(0,t.kJ)(P)?P:[P],C=0;C<E.length;C++){var R=(E[C].className||"").split(" ");R.indexOf(T)>-1||(R.push(T),E[C].className=R.join(" "))}},removeClass:function(P,T){if(P)for(var E=(0,t.kJ)(P)?P:[P],C=0;C<E.length;C++){for(var R=E[C].className.split(" "),N=0;N<R.length;N++)R[N]==T&&(R[N]="");E[C].className=R.join(" ").trim()}},hasClass:function(P,T){return!(!P||!P.classList)&&P.classList.contains(T)},bind:function(P,T,E,C){C===void 0&&(C=!1),P&&((0,t.kJ)(P)?P:[P]).forEach(function(R){R.addEventListener(T,E,!!C)})},delegate:function(P,T,E,C){P&&P.addEventListener(T,function(R){var N=r.all(E,P);if(N)e:for(var he=0;he<N.length;he++)for(var it=R.target;it;){if(it==N[he]){C.call(it,R,it);break e}if((it=it.parentNode)==P)break}},!1)},removeChildren:function(P){for(;P.firstChild;)P.removeChild(P.lastChild);return P}},s=r,l=__webpack_require__(6464),b=__webpack_require__(6881),o=__webpack_require__(2942),B=__webpack_require__(7003),Qe=__webpack_require__(3379),at=__webpack_require__.n(Qe),ot=__webpack_require__(7795),ct=__webpack_require__.n(ot),ut=__webpack_require__(569),lt=__webpack_require__.n(ut),ea=__webpack_require__(3565),ta=__webpack_require__.n(ea),ra=__webpack_require__(9216),aa=__webpack_require__.n(ra),ia=__webpack_require__(4589),la=__webpack_require__.n(ia),ba=__webpack_require__(7558),_a={};ba.Z&&ba.Z.locals&&(_a.locals=ba.Z.locals);var sa,ua=0,ma={};ma.styleTagTransform=la(),ma.setAttributes=ta(),ma.insert=lt().bind(null,"head"),ma.domAPI=ct(),ma.insertStyleElement=aa(),_a.use=function(P){return ma.options=P||{},ua++||(sa=at()(ba.Z,ma)),_a},_a.unuse=function(){ua>0&&!--ua&&(sa(),sa=null)};var $a=_a;function Da(P){var T,E,C,R;return{c:function(){T=(0,o.bGB)("div"),E=(0,o.fLW)("vConsole"),(0,o.Ljt)(T,"class","vc-switch"),(0,o.czc)(T,"right",P[2].x+"px"),(0,o.czc)(T,"bottom",P[2].y+"px"),(0,o.czc)(T,"display",P[0]?"block":"none")},m:function(N,he){(0,o.$Tr)(N,T,he),(0,o.R3I)(T,E),P[8](T),C||(R=[(0,o.oLt)(T,"touchstart",P[3],{passive:!1}),(0,o.oLt)(T,"touchend",P[4],{passive:!1}),(0,o.oLt)(T,"touchmove",P[5],{passive:!1}),(0,o.oLt)(T,"click",P[7])],C=!0)},p:function(N,he){var it=he[0];4&it&&(0,o.czc)(T,"right",N[2].x+"px"),4&it&&(0,o.czc)(T,"bottom",N[2].y+"px"),1&it&&(0,o.czc)(T,"display",N[0]?"block":"none")},i:o.ZTd,o:o.ZTd,d:function(N){N&&(0,o.ogt)(T),P[8](null),C=!1,(0,o.j7q)(R)}}}function Ma(P,T,E){var C,R=T.show,N=R===void 0||R,he=T.position,it=he===void 0?{x:0,y:0}:he,st={hasMoved:!1,x:0,y:0,startX:0,startY:0,endX:0,endY:0},ft={x:0,y:0};(0,B.H3)(function(){$a.use()}),(0,B.ev)(function(){$a.unuse()});var na=function(oa,ga){var pa=ca(oa,ga);oa=pa[0],ga=pa[1],st.x=oa,st.y=ga,E(2,ft.x=oa,ft),E(2,ft.y=ga,ft),t.po("switch_x",oa+""),t.po("switch_y",ga+"")},ca=function(oa,ga){var pa=Math.max(document.documentElement.offsetWidth,window.innerWidth),wa=Math.max(document.documentElement.offsetHeight,window.innerHeight);return oa+C.offsetWidth>pa&&(oa=pa-C.offsetWidth),ga+C.offsetHeight>wa&&(ga=wa-C.offsetHeight),oa<0&&(oa=0),ga<20&&(ga=20),[oa,ga]};return P.$$set=function(oa){"show"in oa&&E(0,N=oa.show),"position"in oa&&E(6,it=oa.position)},P.$$.update=function(){66&P.$$.dirty&&C&&na(it.x,it.y)},[N,C,ft,function(oa){st.startX=oa.touches[0].pageX,st.startY=oa.touches[0].pageY,st.hasMoved=!1},function(oa){st.hasMoved&&(st.startX=0,st.startY=0,st.hasMoved=!1,na(st.endX,st.endY))},function(oa){if(!(oa.touches.length<=0)){var ga=oa.touches[0].pageX-st.startX,pa=oa.touches[0].pageY-st.startY,wa=Math.floor(st.x-ga),Ta=Math.floor(st.y-pa),Aa=ca(wa,Ta);wa=Aa[0],Ta=Aa[1],E(2,ft.x=wa,ft),E(2,ft.y=Ta,ft),st.endX=wa,st.endY=Ta,st.hasMoved=!0,oa.preventDefault()}},it,function(oa){o.cKT.call(this,P,oa)},function(oa){o.VnY[oa?"unshift":"push"](function(){E(1,C=oa)})}]}var fa=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,Ma,Da,o.N8,{show:0,position:6}),C}return(0,b.Z)(T,P),(0,n.Z)(T,[{key:"show",get:function(){return this.$$.ctx[0]},set:function(E){this.$$set({show:E}),(0,o.yl1)()}},{key:"position",get:function(){return this.$$.ctx[6]},set:function(E){this.$$set({position:E}),(0,o.yl1)()}}]),T}(o.f_C),va=fa;function ka(P){var T,E;return{c:function(){T=(0,o.bGB)("div"),(0,o.Ljt)(T,"id",E="__vc_plug_"+P[0]),(0,o.Ljt)(T,"class","vc-plugin-box"),(0,o.VHj)(T,"vc-fixed-height",P[1]),(0,o.VHj)(T,"vc-actived",P[2])},m:function(C,R){(0,o.$Tr)(C,T,R),P[6](T)},p:function(C,R){var N=R[0];1&N&&E!==(E="__vc_plug_"+C[0])&&(0,o.Ljt)(T,"id",E),2&N&&(0,o.VHj)(T,"vc-fixed-height",C[1]),4&N&&(0,o.VHj)(T,"vc-actived",C[2])},i:o.ZTd,o:o.ZTd,d:function(C){C&&(0,o.ogt)(T),P[6](null)}}}function Ra(P,T,E){var C=T.pluginId,R=C===void 0?"":C,N=T.fixedHeight,he=N!==void 0&&N,it=T.actived,st=it!==void 0&&it,ft=T.content,na=ft===void 0?void 0:ft,ca=void 0,oa=void 0;return P.$$set=function(ga){"pluginId"in ga&&E(0,R=ga.pluginId),"fixedHeight"in ga&&E(1,he=ga.fixedHeight),"actived"in ga&&E(2,st=ga.actived),"content"in ga&&E(4,na=ga.content)},P.$$.update=function(){57&P.$$.dirty&&oa!==R&&na&&ca&&(E(5,oa=R),E(3,ca.innerHTML="",ca),(0,t.HD)(na)?E(3,ca.innerHTML=na,ca):(0,t.kK)(na)&&ca.appendChild(na))},[R,he,st,ca,na,oa,function(ga){o.VnY[ga?"unshift":"push"](function(){E(3,ca=ga),E(5,oa),E(0,R),E(4,na)})}]}var qa=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,Ra,ka,o.N8,{pluginId:0,fixedHeight:1,actived:2,content:4}),C}return(0,b.Z)(T,P),(0,n.Z)(T,[{key:"pluginId",get:function(){return this.$$.ctx[0]},set:function(E){this.$$set({pluginId:E}),(0,o.yl1)()}},{key:"fixedHeight",get:function(){return this.$$.ctx[1]},set:function(E){this.$$set({fixedHeight:E}),(0,o.yl1)()}},{key:"actived",get:function(){return this.$$.ctx[2]},set:function(E){this.$$set({actived:E}),(0,o.yl1)()}},{key:"content",get:function(){return this.$$.ctx[4]},set:function(E){this.$$set({content:E}),(0,o.yl1)()}}]),T}(o.f_C),ha=qa,ja=__webpack_require__(4687),Pa=__webpack_require__(3283),Ba={};Pa.Z&&Pa.Z.locals&&(Ba.locals=Pa.Z.locals);var Oa,Ea=0,da={};da.styleTagTransform=la(),da.setAttributes=ta(),da.insert=lt().bind(null,"head"),da.domAPI=ct(),da.insertStyleElement=aa(),Ba.use=function(P){return da.options=P||{},Ea++||(Oa=at()(Pa.Z,da)),Ba},Ba.unuse=function(){Ea>0&&!--Ea&&(Oa(),Oa=null)};var xa=Ba;function Sa(P,T,E){var C=P.slice();return C[39]=T[E][0],C[40]=T[E][1],C}function Ha(P,T,E){var C=P.slice();return C[43]=T[E],C[45]=E,C}function ir(P,T,E){var C=P.slice();return C[39]=T[E][0],C[40]=T[E][1],C}function vr(P,T,E){var C=P.slice();return C[39]=T[E][0],C[40]=T[E][1],C}function xr(P,T,E){var C=P.slice();return C[43]=T[E],C[45]=E,C}function gr(P,T,E){var C=P.slice();return C[39]=T[E][0],C[40]=T[E][1],C}function Dr(P){var T,E,C,R,N,he=P[40].name+"";function it(){return P[25](P[40])}return{c:function(){T=(0,o.bGB)("a"),E=(0,o.fLW)(he),(0,o.Ljt)(T,"class","vc-tab"),(0,o.Ljt)(T,"id",C="__vc_tab_"+P[40].id),(0,o.VHj)(T,"vc-actived",P[40].id===P[2])},m:function(st,ft){(0,o.$Tr)(st,T,ft),(0,o.R3I)(T,E),R||(N=(0,o.oLt)(T,"click",it),R=!0)},p:function(st,ft){P=st,8&ft[0]&&he!==(he=P[40].name+"")&&(0,o.rTO)(E,he),8&ft[0]&&C!==(C="__vc_tab_"+P[40].id)&&(0,o.Ljt)(T,"id",C),12&ft[0]&&(0,o.VHj)(T,"vc-actived",P[40].id===P[2])},d:function(st){st&&(0,o.ogt)(T),R=!1,N()}}}function qr(P){var T,E=P[40].hasTabPanel&&Dr(P);return{c:function(){E&&E.c(),T=(0,o.cSb)()},m:function(C,R){E&&E.m(C,R),(0,o.$Tr)(C,T,R)},p:function(C,R){C[40].hasTabPanel?E?E.p(C,R):((E=Dr(C)).c(),E.m(T.parentNode,T)):E&&(E.d(1),E=null)},d:function(C){E&&E.d(C),C&&(0,o.ogt)(T)}}}function Xr(P){var T,E,C,R,N,he=P[43].name+"";function it(){for(var st,ft=arguments.length,na=new Array(ft),ca=0;ca<ft;ca++)na[ca]=arguments[ca];return(st=P)[26].apply(st,[P[40],P[45]].concat(na))}return{c:function(){T=(0,o.bGB)("i"),E=(0,o.fLW)(he),(0,o.Ljt)(T,"class",C="vc-toptab vc-topbar-"+P[40].id+" "+P[43].className),(0,o.VHj)(T,"vc-toggle",P[40].id===P[2]),(0,o.VHj)(T,"vc-actived",P[43].actived)},m:function(st,ft){(0,o.$Tr)(st,T,ft),(0,o.R3I)(T,E),R||(N=(0,o.oLt)(T,"click",it),R=!0)},p:function(st,ft){P=st,8&ft[0]&&he!==(he=P[43].name+"")&&(0,o.rTO)(E,he),8&ft[0]&&C!==(C="vc-toptab vc-topbar-"+P[40].id+" "+P[43].className)&&(0,o.Ljt)(T,"class",C),12&ft[0]&&(0,o.VHj)(T,"vc-toggle",P[40].id===P[2]),8&ft[0]&&(0,o.VHj)(T,"vc-actived",P[43].actived)},d:function(st){st&&(0,o.ogt)(T),R=!1,N()}}}function Vr(P){for(var T,E=P[40].topbarList,C=[],R=0;R<E.length;R+=1)C[R]=Xr(xr(P,E,R));return{c:function(){for(var N=0;N<C.length;N+=1)C[N].c();T=(0,o.cSb)()},m:function(N,he){for(var it=0;it<C.length;it+=1)C[it].m(N,he);(0,o.$Tr)(N,T,he)},p:function(N,he){if(8204&he[0]){var it;for(E=N[40].topbarList,it=0;it<E.length;it+=1){var st=xr(N,E,it);C[it]?C[it].p(st,he):(C[it]=Xr(st),C[it].c(),C[it].m(T.parentNode,T))}for(;it<C.length;it+=1)C[it].d(1);C.length=E.length}},d:function(N){(0,o.RMB)(C,N),N&&(0,o.ogt)(T)}}}function Pr(P){var T,E,C,R=ha;function N(he){var it;return{props:{pluginId:he[40].id,fixedHeight:(it=he[40].tabOptions)==null?void 0:it.fixedHeight,actived:he[40].id===he[2],content:he[40].content}}}return R&&(T=new R(N(P))),{c:function(){T&&(0,o.YCL)(T.$$.fragment),E=(0,o.cSb)()},m:function(he,it){T&&(0,o.yef)(T,he,it),(0,o.$Tr)(he,E,it),C=!0},p:function(he,it){var st,ft={};if(8&it[0]&&(ft.pluginId=he[40].id),8&it[0]&&(ft.fixedHeight=(st=he[40].tabOptions)==null?void 0:st.fixedHeight),12&it[0]&&(ft.actived=he[40].id===he[2]),8&it[0]&&(ft.content=he[40].content),R!==(R=ha)){if(T){(0,o.dvw)();var na=T;(0,o.etI)(na.$$.fragment,1,0,function(){(0,o.vpE)(na,1)}),(0,o.gbL)()}R?(T=new R(N(he)),(0,o.YCL)(T.$$.fragment),(0,o.Ui)(T.$$.fragment,1),(0,o.yef)(T,E.parentNode,E)):T=null}else R&&T.$set(ft)},i:function(he){C||(T&&(0,o.Ui)(T.$$.fragment,he),C=!0)},o:function(he){T&&(0,o.etI)(T.$$.fragment,he),C=!1},d:function(he){he&&(0,o.ogt)(E),T&&(0,o.vpE)(T,he)}}}function Ar(P){var T,E,C,R,N,he=P[43].name+"";function it(){for(var st,ft=arguments.length,na=new Array(ft),ca=0;ca<ft;ca++)na[ca]=arguments[ca];return(st=P)[28].apply(st,[P[40],P[45]].concat(na))}return{c:function(){T=(0,o.bGB)("i"),E=(0,o.fLW)(he),(0,o.Ljt)(T,"class",C="vc-tool vc-tool-"+P[40].id),(0,o.VHj)(T,"vc-global-tool",P[43].global),(0,o.VHj)(T,"vc-toggle",P[40].id===P[2])},m:function(st,ft){(0,o.$Tr)(st,T,ft),(0,o.R3I)(T,E),R||(N=(0,o.oLt)(T,"click",it),R=!0)},p:function(st,ft){P=st,8&ft[0]&&he!==(he=P[43].name+"")&&(0,o.rTO)(E,he),8&ft[0]&&C!==(C="vc-tool vc-tool-"+P[40].id)&&(0,o.Ljt)(T,"class",C),8&ft[0]&&(0,o.VHj)(T,"vc-global-tool",P[43].global),12&ft[0]&&(0,o.VHj)(T,"vc-toggle",P[40].id===P[2])},d:function(st){st&&(0,o.ogt)(T),R=!1,N()}}}function Mr(P){for(var T,E=P[40].toolbarList,C=[],R=0;R<E.length;R+=1)C[R]=Ar(Ha(P,E,R));return{c:function(){for(var N=0;N<C.length;N+=1)C[N].c();T=(0,o.cSb)()},m:function(N,he){for(var it=0;it<C.length;it+=1)C[it].m(N,he);(0,o.$Tr)(N,T,he)},p:function(N,he){if(16396&he[0]){var it;for(E=N[40].toolbarList,it=0;it<E.length;it+=1){var st=Ha(N,E,it);C[it]?C[it].p(st,he):(C[it]=Ar(st),C[it].c(),C[it].m(T.parentNode,T))}for(;it<C.length;it+=1)C[it].d(1);C.length=E.length}},d:function(N){(0,o.RMB)(C,N),N&&(0,o.ogt)(T)}}}function ti(P){var T,E,C,R,N,he,it,st,ft,na,ca,oa,ga,pa,wa,Ta,Aa,Na,Fa,or,Ya;function Nr(Za){P[23](Za)}function Br(Za){P[24](Za)}var zr={};P[0]!==void 0&&(zr.show=P[0]),P[1]!==void 0&&(zr.position=P[1]),E=new va({props:zr}),o.VnY.push(function(){return(0,o.akz)(E,"show",Nr)}),o.VnY.push(function(){return(0,o.akz)(E,"position",Br)}),E.$on("click",P[10]);for(var Qa=Object.entries(P[3]),nr=[],Fr=0;Fr<Qa.length;Fr+=1)nr[Fr]=qr(gr(P,Qa,Fr));for(var ci=Object.entries(P[3]),Gr=[],Ur=0;Ur<ci.length;Ur+=1)Gr[Ur]=Vr(vr(P,ci,Ur));for(var jr=Object.entries(P[3]),Va=[],Ka=0;Ka<jr.length;Ka+=1)Va[Ka]=Pr(ir(P,jr,Ka));for(var Kr=function(Za){return(0,o.etI)(Va[Za],1,1,function(){Va[Za]=null})},Ua=Object.entries(P[3]),Ja=[],Ir=0;Ir<Ua.length;Ir+=1)Ja[Ir]=Mr(Sa(P,Ua,Ir));return{c:function(){var Za,Lr;T=(0,o.bGB)("div"),(0,o.YCL)(E.$$.fragment),N=(0,o.DhX)(),he=(0,o.bGB)("div"),it=(0,o.DhX)(),st=(0,o.bGB)("div"),ft=(0,o.bGB)("div");for(var ni=0;ni<nr.length;ni+=1)nr[ni].c();na=(0,o.DhX)(),ca=(0,o.bGB)("div");for(var oi=0;oi<Gr.length;oi+=1)Gr[oi].c();oa=(0,o.DhX)(),ga=(0,o.bGB)("div");for(var vi=0;vi<Va.length;vi+=1)Va[vi].c();pa=(0,o.DhX)(),wa=(0,o.bGB)("div");for(var Zr=0;Zr<Ja.length;Zr+=1)Ja[Zr].c();Ta=(0,o.DhX)(),(Aa=(0,o.bGB)("i")).textContent="Hide",(0,o.Ljt)(he,"class","vc-mask"),(0,o.czc)(he,"display",P[8]?"block":"none"),(0,o.Ljt)(ft,"class","vc-tabbar"),(0,o.Ljt)(ca,"class","vc-topbar"),(0,o.Ljt)(ga,"class","vc-content"),(0,o.VHj)(ga,"vc-has-topbar",((Za=P[3][P[2]])==null||(Lr=Za.topbarList)==null?void 0:Lr.length)>0),(0,o.Ljt)(Aa,"class","vc-tool vc-global-tool vc-tool-last vc-hide"),(0,o.Ljt)(wa,"class","vc-toolbar"),(0,o.Ljt)(st,"class","vc-panel"),(0,o.czc)(st,"display",P[7]?"block":"none"),(0,o.Ljt)(T,"id","__vconsole"),(0,o.Ljt)(T,"style",Na=P[5]?"font-size:"+P[5]+";":""),(0,o.Ljt)(T,"data-theme",P[4]),(0,o.VHj)(T,"vc-toggle",P[6])},m:function(Za,Lr){(0,o.$Tr)(Za,T,Lr),(0,o.yef)(E,T,null),(0,o.R3I)(T,N),(0,o.R3I)(T,he),(0,o.R3I)(T,it),(0,o.R3I)(T,st),(0,o.R3I)(st,ft);for(var ni=0;ni<nr.length;ni+=1)nr[ni].m(ft,null);(0,o.R3I)(st,na),(0,o.R3I)(st,ca);for(var oi=0;oi<Gr.length;oi+=1)Gr[oi].m(ca,null);(0,o.R3I)(st,oa),(0,o.R3I)(st,ga);for(var vi=0;vi<Va.length;vi+=1)Va[vi].m(ga,null);P[27](ga),(0,o.R3I)(st,pa),(0,o.R3I)(st,wa);for(var Zr=0;Zr<Ja.length;Zr+=1)Ja[Zr].m(wa,null);(0,o.R3I)(wa,Ta),(0,o.R3I)(wa,Aa),Fa=!0,or||(Ya=[(0,o.oLt)(he,"click",P[11]),(0,o.oLt)(ga,"touchstart",P[15]),(0,o.oLt)(ga,"touchmove",P[16]),(0,o.oLt)(ga,"touchend",P[17]),(0,o.oLt)(ga,"scroll",P[18]),(0,o.oLt)(Aa,"click",P[11]),(0,o.oLt)(T,"touchstart",P[19].touchStart,{passive:!1,capture:!0}),(0,o.oLt)(T,"touchmove",P[19].touchMove,{passive:!1,capture:!0}),(0,o.oLt)(T,"touchend",P[19].touchEnd,{passive:!1,capture:!0})],or=!0)},p:function(Za,Lr){var ni,oi,vi={};if(!C&&1&Lr[0]&&(C=!0,vi.show=Za[0],(0,o.hjT)(function(){return C=!1})),!R&&2&Lr[0]&&(R=!0,vi.position=Za[1],(0,o.hjT)(function(){return R=!1})),E.$set(vi),(!Fa||256&Lr[0])&&(0,o.czc)(he,"display",Za[8]?"block":"none"),4108&Lr[0]){var Zr;for(Qa=Object.entries(Za[3]),Zr=0;Zr<Qa.length;Zr+=1){var Pi=gr(Za,Qa,Zr);nr[Zr]?nr[Zr].p(Pi,Lr):(nr[Zr]=qr(Pi),nr[Zr].c(),nr[Zr].m(ft,null))}for(;Zr<nr.length;Zr+=1)nr[Zr].d(1);nr.length=Qa.length}if(8204&Lr[0]){var pi;for(ci=Object.entries(Za[3]),pi=0;pi<ci.length;pi+=1){var Ai=vr(Za,ci,pi);Gr[pi]?Gr[pi].p(Ai,Lr):(Gr[pi]=Vr(Ai),Gr[pi].c(),Gr[pi].m(ca,null))}for(;pi<Gr.length;pi+=1)Gr[pi].d(1);Gr.length=ci.length}if(12&Lr[0]){var ri;for(jr=Object.entries(Za[3]),ri=0;ri<jr.length;ri+=1){var Ui=ir(Za,jr,ri);Va[ri]?(Va[ri].p(Ui,Lr),(0,o.Ui)(Va[ri],1)):(Va[ri]=Pr(Ui),Va[ri].c(),(0,o.Ui)(Va[ri],1),Va[ri].m(ga,null))}for((0,o.dvw)(),ri=jr.length;ri<Va.length;ri+=1)Kr(ri);(0,o.gbL)()}if(12&Lr[0]&&(0,o.VHj)(ga,"vc-has-topbar",((ni=Za[3][Za[2]])==null||(oi=ni.topbarList)==null?void 0:oi.length)>0),16396&Lr[0]){var li;for(Ua=Object.entries(Za[3]),li=0;li<Ua.length;li+=1){var Ki=Sa(Za,Ua,li);Ja[li]?Ja[li].p(Ki,Lr):(Ja[li]=Mr(Ki),Ja[li].c(),Ja[li].m(wa,Ta))}for(;li<Ja.length;li+=1)Ja[li].d(1);Ja.length=Ua.length}(!Fa||128&Lr[0])&&(0,o.czc)(st,"display",Za[7]?"block":"none"),(!Fa||32&Lr[0]&&Na!==(Na=Za[5]?"font-size:"+Za[5]+";":""))&&(0,o.Ljt)(T,"style",Na),(!Fa||16&Lr[0])&&(0,o.Ljt)(T,"data-theme",Za[4]),64&Lr[0]&&(0,o.VHj)(T,"vc-toggle",Za[6])},i:function(Za){if(!Fa){(0,o.Ui)(E.$$.fragment,Za);for(var Lr=0;Lr<jr.length;Lr+=1)(0,o.Ui)(Va[Lr]);Fa=!0}},o:function(Za){(0,o.etI)(E.$$.fragment,Za),Va=Va.filter(Boolean);for(var Lr=0;Lr<Va.length;Lr+=1)(0,o.etI)(Va[Lr]);Fa=!1},d:function(Za){Za&&(0,o.ogt)(T),(0,o.vpE)(E),(0,o.RMB)(nr,Za),(0,o.RMB)(Gr,Za),(0,o.RMB)(Va,Za),P[27](null),(0,o.RMB)(Ja,Za),or=!1,(0,o.j7q)(Ya)}}}function fi(P,T,E){var C,R,N=T.theme,he=N===void 0?"":N,it=T.disableScrolling,st=it!==void 0&&it,ft=T.show,na=ft!==void 0&&ft,ca=T.showSwitchButton,oa=ca===void 0||ca,ga=T.switchButtonPosition,pa=ga===void 0?{x:0,y:0}:ga,wa=T.activedPluginId,Ta=wa===void 0?"":wa,Aa=T.pluginList,Na=Aa===void 0?{}:Aa,Fa=(0,B.x)(),or=!1,Ya="",Nr=!1,Br=!1,zr=!1,Qa=!0,nr=0,Fr=null,ci={};(0,B.H3)(function(){var Ua=document.querySelectorAll('[name="viewport"]');if(Ua&&Ua[0]){var Ja=(Ua[Ua.length-1].getAttribute("content")||"").match(/initial\-scale\=\d+(\.\d+)?/),Ir=Ja?parseFloat(Ja[0].split("=")[1]):1;Ir!==1&&E(5,Ya=Math.floor(1/Ir*13)+"px")}xa.use&&xa.use(),C=ja.x.subscribe(function(Za){na&&nr!==Za.updateTime&&(nr=Za.updateTime,Gr())})}),(0,B.ev)(function(){xa.unuse&&xa.unuse(),C&&C()});var Gr=function(){!st&&Qa&&R&&E(9,R.scrollTop=R.scrollHeight-R.offsetHeight,R)},Ur=function(Ua){Ua!==Ta&&(E(2,Ta=Ua),Fa("changePanel",{pluginId:Ua}),setTimeout(function(){R&&E(9,R.scrollTop=ci[Ta]||0,R)},0))},jr=function(Ua,Ja,Ir){var Za=Na[Ja].topbarList[Ir],Lr=!0;if(t.mf(Za.onClick)&&(Lr=Za.onClick.call(Ua.target,Ua,Za.data)),Lr!==!1){for(var ni=0;ni<Na[Ja].topbarList.length;ni++)E(3,Na[Ja].topbarList[ni].actived=Ir===ni,Na);E(3,Na)}},Va=function(Ua,Ja,Ir){var Za=Na[Ja].toolbarList[Ir];t.mf(Za.onClick)&&Za.onClick.call(Ua.target,Ua,Za.data)},Ka={tapTime:700,tapBoundary:10,lastTouchStartTime:0,touchstartX:0,touchstartY:0,touchHasMoved:!1,targetElem:null},Kr={touchStart:function(Ua){if(Ka.lastTouchStartTime===0){var Ja=Ua.targetTouches[0];Ka.touchstartX=Ja.pageX,Ka.touchstartY=Ja.pageY,Ka.lastTouchStartTime=Ua.timeStamp,Ka.targetElem=Ua.target.nodeType===Node.TEXT_NODE?Ua.target.parentNode:Ua.target}},touchMove:function(Ua){var Ja=Ua.changedTouches[0];(Math.abs(Ja.pageX-Ka.touchstartX)>Ka.tapBoundary||Math.abs(Ja.pageY-Ka.touchstartY)>Ka.tapBoundary)&&(Ka.touchHasMoved=!0)},touchEnd:function(Ua){if(Ka.touchHasMoved===!1&&Ua.timeStamp-Ka.lastTouchStartTime<Ka.tapTime&&Ka.targetElem!=null){var Ja=!1;switch(Ka.targetElem.tagName.toLowerCase()){case"textarea":Ja=!0;break;case"select":Ja=!Ka.targetElem.disabled&&!Ka.targetElem.readOnly;break;case"input":switch(Ka.targetElem.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":Ja=!1;break;default:Ja=!Ka.targetElem.disabled&&!Ka.targetElem.readOnly}}Ja?Ka.targetElem.focus():Ua.preventDefault();var Ir=Ua.changedTouches[0],Za=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,screenX:Ir.screenX,screenY:Ir.screenY,clientX:Ir.clientX,clientY:Ir.clientY});Ka.targetElem.dispatchEvent(Za)}Ka.lastTouchStartTime=0,Ka.touchHasMoved=!1,Ka.targetElem=null}};return P.$$set=function(Ua){"theme"in Ua&&E(4,he=Ua.theme),"disableScrolling"in Ua&&E(20,st=Ua.disableScrolling),"show"in Ua&&E(21,na=Ua.show),"showSwitchButton"in Ua&&E(0,oa=Ua.showSwitchButton),"switchButtonPosition"in Ua&&E(1,pa=Ua.switchButtonPosition),"activedPluginId"in Ua&&E(2,Ta=Ua.activedPluginId),"pluginList"in Ua&&E(3,Na=Ua.pluginList)},P.$$.update=function(){6291456&P.$$.dirty[0]&&(na===!0?(E(7,Br=!0),E(8,zr=!0),Fr&&clearTimeout(Fr),E(22,Fr=setTimeout(function(){E(6,Nr=!0),Gr()},10))):(E(6,Nr=!1),Fr&&clearTimeout(Fr),E(22,Fr=setTimeout(function(){E(7,Br=!1),E(8,zr=!1)},330))))},[oa,pa,Ta,Na,he,Ya,Nr,Br,zr,R,function(Ua){Fa("show",{show:!0})},function(Ua){Fa("show",{show:!1})},Ur,jr,Va,function(Ua){if(!(Ua.target.tagName==="INPUT"||Ua.target.tagName==="TEXTAREA")){var Ja=!1;if(typeof window.getComputedStyle=="function"){var Ir=window.getComputedStyle(Ua.target);Ir.overflow!=="auto"&&Ir.overflow!=="initial"&&Ir.overflow!=="scroll"||(Ja=!0)}if(!Ja){var Za=R.scrollTop,Lr=R.scrollHeight,ni=Za+R.offsetHeight;Za===0?(E(9,R.scrollTop=1,R),R.scrollTop===0&&(or=!0)):ni===Lr&&(E(9,R.scrollTop=Za-1,R),R.scrollTop===Za&&(or=!0))}}},function(Ua){or&&Ua.preventDefault()},function(Ua){or=!1},function(Ua){na&&(Qa=R.scrollTop+R.offsetHeight>=R.scrollHeight-50,ci[Ta]=R.scrollTop)},Kr,st,na,Fr,function(Ua){E(0,oa=Ua)},function(Ua){E(1,pa=Ua)},function(Ua){return Ur(Ua.id)},function(Ua,Ja,Ir){return jr(Ir,Ua.id,Ja)},function(Ua){o.VnY[Ua?"unshift":"push"](function(){E(9,R=Ua)})},function(Ua,Ja,Ir){return Va(Ir,Ua.id,Ja)}]}var mi=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,fi,ti,o.N8,{theme:4,disableScrolling:20,show:21,showSwitchButton:0,switchButtonPosition:1,activedPluginId:2,pluginList:3},null,[-1,-1]),C}return(0,b.Z)(T,P),(0,n.Z)(T,[{key:"theme",get:function(){return this.$$.ctx[4]},set:function(E){this.$$set({theme:E}),(0,o.yl1)()}},{key:"disableScrolling",get:function(){return this.$$.ctx[20]},set:function(E){this.$$set({disableScrolling:E}),(0,o.yl1)()}},{key:"show",get:function(){return this.$$.ctx[21]},set:function(E){this.$$set({show:E}),(0,o.yl1)()}},{key:"showSwitchButton",get:function(){return this.$$.ctx[0]},set:function(E){this.$$set({showSwitchButton:E}),(0,o.yl1)()}},{key:"switchButtonPosition",get:function(){return this.$$.ctx[1]},set:function(E){this.$$set({switchButtonPosition:E}),(0,o.yl1)()}},{key:"activedPluginId",get:function(){return this.$$.ctx[2]},set:function(E){this.$$set({activedPluginId:E}),(0,o.yl1)()}},{key:"pluginList",get:function(){return this.$$.ctx[3]},set:function(E){this.$$set({pluginList:E}),(0,o.yl1)()}}]),T}(o.f_C),Gi=mi,ki=function(){function P(E,C){C===void 0&&(C="newPlugin"),this.isReady=!1,this.eventMap=new Map,this.exporter=void 0,this._id=void 0,this._name=void 0,this._vConsole=void 0,this.id=E,this.name=C,this.isReady=!1}var T=P.prototype;return T.on=function(E,C){return this.eventMap.set(E,C),this},T.onRemove=function(){this.unbindExporter()},T.trigger=function(E,C){var R=this.eventMap.get(E);if(typeof R=="function")R.call(this,C);else{var N="on"+E.charAt(0).toUpperCase()+E.slice(1);typeof this[N]=="function"&&this[N].call(this,C)}return this},T.bindExporter=function(){if(this._vConsole&&this.exporter){var E=this.id==="default"?"log":this.id;this._vConsole[E]=this.exporter}},T.unbindExporter=function(){var E=this.id==="default"?"log":this.id;this._vConsole&&this._vConsole[E]&&(this._vConsole[E]=void 0)},T.getUniqueID=function(E){return E===void 0&&(E=""),(0,t.QI)(E)},(0,n.Z)(P,[{key:"id",get:function(){return this._id},set:function(E){if(typeof E!="string")throw"[vConsole] Plugin ID must be a string.";if(!E)throw"[vConsole] Plugin ID cannot be empty.";this._id=E.toLowerCase()}},{key:"name",get:function(){return this._name},set:function(E){if(typeof E!="string")throw"[vConsole] Plugin name must be a string.";if(!E)throw"[vConsole] Plugin name cannot be empty.";this._name=E}},{key:"vConsole",get:function(){return this._vConsole||void 0},set:function(E){if(!E)throw"[vConsole] vConsole cannot be empty";this._vConsole=E,this.bindExporter()}}]),P}(),hi=function(P){function T(C,R,N,he){var it;return(it=P.call(this,C,R)||this).CompClass=void 0,it.compInstance=void 0,it.initialProps=void 0,it.CompClass=N,it.initialProps=he,it}(0,b.Z)(T,P);var E=T.prototype;return E.onReady=function(){this.isReady=!0},E.onRenderTab=function(C){var R=document.createElement("div"),N=this.compInstance=new this.CompClass({target:R,props:this.initialProps});C(R.firstElementChild,N.options)},E.onRemove=function(){P.prototype.onRemove&&P.prototype.onRemove.call(this),this.compInstance&&this.compInstance.$destroy()},T}(ki),Ci=__webpack_require__(8665),Xi=__webpack_require__(9923),di=__webpack_require__(8702);function Ri(P){var T,E;return(T=new di.Z({props:{name:P[0]?"success":"copy"}})).$on("click",P[1]),{c:function(){(0,o.YCL)(T.$$.fragment)},m:function(C,R){(0,o.yef)(T,C,R),E=!0},p:function(C,R){var N={};1&R[0]&&(N.name=C[0]?"success":"copy"),T.$set(N)},i:function(C){E||((0,o.Ui)(T.$$.fragment,C),E=!0)},o:function(C){(0,o.etI)(T.$$.fragment,C),E=!1},d:function(C){(0,o.vpE)(T,C)}}}function Vi(P,T,E){var C=T.content,R=C===void 0?"":C,N=T.handler,he=N===void 0?void 0:N,it={target:document.documentElement},st=!1;return P.$$set=function(ft){"content"in ft&&E(2,R=ft.content),"handler"in ft&&E(3,he=ft.handler)},[st,function(ft){(function(na,ca){var oa=(ca===void 0?{}:ca).target,ga=oa===void 0?document.body:oa,pa=document.createElement("textarea"),wa=document.activeElement;pa.value=na,pa.setAttribute("readonly",""),pa.style.contain="strict",pa.style.position="absolute",pa.style.left="-9999px",pa.style.fontSize="12pt";var Ta=document.getSelection(),Aa=!1;Ta.rangeCount>0&&(Aa=Ta.getRangeAt(0)),ga.append(pa),pa.select(),pa.selectionStart=0,pa.selectionEnd=na.length;var Na=!1;try{Na=document.execCommand("copy")}catch{}pa.remove(),Aa&&(Ta.removeAllRanges(),Ta.addRange(Aa)),wa&&wa.focus()})(t.mf(he)?he(R)||"":t.Kn(R)||t.kJ(R)?t.hZ(R,{maxDepth:10,keyMaxLen:1e4,pretty:!1,standardJSON:!0}):R,it),E(0,st=!0),setTimeout(function(){E(0,st=!1)},600)},R,he]}var Li=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,Vi,Ri,o.N8,{content:2,handler:3}),C}return(0,b.Z)(T,P),(0,n.Z)(T,[{key:"content",get:function(){return this.$$.ctx[2]},set:function(E){this.$$set({content:E}),(0,o.yl1)()}},{key:"handler",get:function(){return this.$$.ctx[3]},set:function(E){this.$$set({handler:E}),(0,o.yl1)()}}]),T}(o.f_C),ui=Li,Bi=__webpack_require__(845),za={};Bi.Z&&Bi.Z.locals&&(za.locals=Bi.Z.locals);var Xa,ar=0,sr={};sr.styleTagTransform=la(),sr.setAttributes=ta(),sr.insert=lt().bind(null,"head"),sr.domAPI=ct(),sr.insertStyleElement=aa(),za.use=function(P){return sr.options=P||{},ar++||(Xa=at()(Bi.Z,sr)),za},za.unuse=function(){ar>0&&!--ar&&(Xa(),Xa=null)};var Wr=za;function ii(P){var T,E,C,R=t.rE(P[1])+"";return{c:function(){T=(0,o.bGB)("i"),E=(0,o.fLW)(R),C=(0,o.fLW)(":"),(0,o.Ljt)(T,"class","vc-log-key"),(0,o.VHj)(T,"vc-log-key-symbol",P[2]==="symbol"),(0,o.VHj)(T,"vc-log-key-private",P[2]==="private")},m:function(N,he){(0,o.$Tr)(N,T,he),(0,o.R3I)(T,E),(0,o.$Tr)(N,C,he)},p:function(N,he){2&he&&R!==(R=t.rE(N[1])+"")&&(0,o.rTO)(E,R),4&he&&(0,o.VHj)(T,"vc-log-key-symbol",N[2]==="symbol"),4&he&&(0,o.VHj)(T,"vc-log-key-private",N[2]==="private")},d:function(N){N&&(0,o.ogt)(T),N&&(0,o.ogt)(C)}}}function Ti(P){var T,E,C,R,N=P[1]!==void 0&&ii(P);return{c:function(){N&&N.c(),T=(0,o.DhX)(),E=(0,o.bGB)("i"),C=(0,o.fLW)(P[3]),(0,o.Ljt)(E,"class",R="vc-log-val vc-log-val-"+P[4]),(0,o.Ljt)(E,"style",P[0]),(0,o.VHj)(E,"vc-log-val-haskey",P[1]!==void 0)},m:function(he,it){N&&N.m(he,it),(0,o.$Tr)(he,T,it),(0,o.$Tr)(he,E,it),(0,o.R3I)(E,C)},p:function(he,it){var st=it[0];he[1]!==void 0?N?N.p(he,st):((N=ii(he)).c(),N.m(T.parentNode,T)):N&&(N.d(1),N=null),8&st&&(0,o.rTO)(C,he[3]),16&st&&R!==(R="vc-log-val vc-log-val-"+he[4])&&(0,o.Ljt)(E,"class",R),1&st&&(0,o.Ljt)(E,"style",he[0]),18&st&&(0,o.VHj)(E,"vc-log-val-haskey",he[1]!==void 0)},i:o.ZTd,o:o.ZTd,d:function(he){N&&N.d(he),he&&(0,o.ogt)(T),he&&(0,o.ogt)(E)}}}function ya(P,T,E){var C=T.origData,R=T.style,N=R===void 0?"":R,he=T.dataKey,it=he===void 0?void 0:he,st=T.keyType,ft=st===void 0?"":st,na="",ca="",oa=!1;return(0,B.H3)(function(){Wr.use()}),(0,B.ev)(function(){Wr.unuse()}),P.$$set=function(ga){"origData"in ga&&E(5,C=ga.origData),"style"in ga&&E(0,N=ga.style),"dataKey"in ga&&E(1,it=ga.dataKey),"keyType"in ga&&E(2,ft=ga.keyType)},P.$$.update=function(){if(122&P.$$.dirty){E(6,oa=it!==void 0);var ga=(0,Ci.LH)(C,oa);E(4,ca=ga.valueType),E(3,na=ga.text),oa||ca!=="string"||E(3,na=na.replace(/\\n/g,`
`).replace(/\\t/g,"    "))}},[N,it,ft,na,ca,C,oa]}var Ia=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,ya,Ti,o.AqN,{origData:5,style:0,dataKey:1,keyType:2}),C}return(0,b.Z)(T,P),(0,n.Z)(T,[{key:"origData",get:function(){return this.$$.ctx[5]},set:function(E){this.$$set({origData:E}),(0,o.yl1)()}},{key:"style",get:function(){return this.$$.ctx[0]},set:function(E){this.$$set({style:E}),(0,o.yl1)()}},{key:"dataKey",get:function(){return this.$$.ctx[1]},set:function(E){this.$$set({dataKey:E}),(0,o.yl1)()}},{key:"keyType",get:function(){return this.$$.ctx[2]},set:function(E){this.$$set({keyType:E}),(0,o.yl1)()}}]),T}(o.f_C),Ca=Ia,La=__webpack_require__(1237),Ga={};La.Z&&La.Z.locals&&(Ga.locals=La.Z.locals);var rr,kr=0,ei={};ei.styleTagTransform=la(),ei.setAttributes=ta(),ei.insert=lt().bind(null,"head"),ei.domAPI=ct(),ei.insertStyleElement=aa(),Ga.use=function(P){return ei.options=P||{},kr++||(rr=at()(La.Z,ei)),Ga},Ga.unuse=function(){kr>0&&!--kr&&(rr(),rr=null)};var ji=Ga;function ai(P,T,E){var C=P.slice();return C[19]=T[E],C[21]=E,C}function Zi(P,T,E){var C=P.slice();return C[19]=T[E],C}function co(P,T,E){var C=P.slice();return C[19]=T[E],C[21]=E,C}function Si(P){for(var T,E,C,R,N,he,it,st=[],ft=new Map,na=[],ca=new Map,oa=[],ga=new Map,pa=P[7],wa=function(Va){return Va[19]},Ta=0;Ta<pa.length;Ta+=1){var Aa=co(P,pa,Ta),Na=wa(Aa);ft.set(Na,st[Ta]=Di(Na,Aa))}for(var Fa=P[11]<P[7].length&&Yi(P),or=P[9],Ya=function(Va){return Va[19]},Nr=0;Nr<or.length;Nr+=1){var Br=Zi(P,or,Nr),zr=Ya(Br);ca.set(zr,na[Nr]=lo(zr,Br))}for(var Qa=P[8],nr=function(Va){return Va[19]},Fr=0;Fr<Qa.length;Fr+=1){var ci=ai(P,Qa,Fr),Gr=nr(ci);ga.set(Gr,oa[Fr]=ho(Gr,ci))}var Ur=P[12]<P[8].length&&go(P),jr=P[10]&&Ji(P);return{c:function(){T=(0,o.bGB)("div");for(var Va=0;Va<st.length;Va+=1)st[Va].c();E=(0,o.DhX)(),Fa&&Fa.c(),C=(0,o.DhX)();for(var Ka=0;Ka<na.length;Ka+=1)na[Ka].c();R=(0,o.DhX)();for(var Kr=0;Kr<oa.length;Kr+=1)oa[Kr].c();N=(0,o.DhX)(),Ur&&Ur.c(),he=(0,o.DhX)(),jr&&jr.c(),(0,o.Ljt)(T,"class","vc-log-tree-child")},m:function(Va,Ka){(0,o.$Tr)(Va,T,Ka);for(var Kr=0;Kr<st.length;Kr+=1)st[Kr].m(T,null);(0,o.R3I)(T,E),Fa&&Fa.m(T,null),(0,o.R3I)(T,C);for(var Ua=0;Ua<na.length;Ua+=1)na[Ua].m(T,null);(0,o.R3I)(T,R);for(var Ja=0;Ja<oa.length;Ja+=1)oa[Ja].m(T,null);(0,o.R3I)(T,N),Ur&&Ur.m(T,null),(0,o.R3I)(T,he),jr&&jr.m(T,null),it=!0},p:function(Va,Ka){67721&Ka&&(pa=Va[7],(0,o.dvw)(),st=(0,o.GQg)(st,Ka,wa,1,Va,pa,ft,T,o.cly,Di,E,co),(0,o.gbL)()),Va[11]<Va[7].length?Fa?Fa.p(Va,Ka):((Fa=Yi(Va)).c(),Fa.m(T,C)):Fa&&(Fa.d(1),Fa=null),66057&Ka&&(or=Va[9],(0,o.dvw)(),na=(0,o.GQg)(na,Ka,Ya,1,Va,or,ca,T,o.cly,lo,R,Zi),(0,o.gbL)()),69897&Ka&&(Qa=Va[8],(0,o.dvw)(),oa=(0,o.GQg)(oa,Ka,nr,1,Va,Qa,ga,T,o.cly,ho,N,ai),(0,o.gbL)()),Va[12]<Va[8].length?Ur?Ur.p(Va,Ka):((Ur=go(Va)).c(),Ur.m(T,he)):Ur&&(Ur.d(1),Ur=null),Va[10]?jr?(jr.p(Va,Ka),1024&Ka&&(0,o.Ui)(jr,1)):((jr=Ji(Va)).c(),(0,o.Ui)(jr,1),jr.m(T,null)):jr&&((0,o.dvw)(),(0,o.etI)(jr,1,1,function(){jr=null}),(0,o.gbL)())},i:function(Va){if(!it){for(var Ka=0;Ka<pa.length;Ka+=1)(0,o.Ui)(st[Ka]);for(var Kr=0;Kr<or.length;Kr+=1)(0,o.Ui)(na[Kr]);for(var Ua=0;Ua<Qa.length;Ua+=1)(0,o.Ui)(oa[Ua]);(0,o.Ui)(jr),it=!0}},o:function(Va){for(var Ka=0;Ka<st.length;Ka+=1)(0,o.etI)(st[Ka]);for(var Kr=0;Kr<na.length;Kr+=1)(0,o.etI)(na[Kr]);for(var Ua=0;Ua<oa.length;Ua+=1)(0,o.etI)(oa[Ua]);(0,o.etI)(jr),it=!1},d:function(Va){Va&&(0,o.ogt)(T);for(var Ka=0;Ka<st.length;Ka+=1)st[Ka].d();Fa&&Fa.d();for(var Kr=0;Kr<na.length;Kr+=1)na[Kr].d();for(var Ua=0;Ua<oa.length;Ua+=1)oa[Ua].d();Ur&&Ur.d(),jr&&jr.d()}}}function Ei(P){var T,E;return T=new ao({props:{origData:P[16](P[19]),dataKey:P[19],keyPath:P[3]+"."+P[19],toggle:P[0]}}),{c:function(){(0,o.YCL)(T.$$.fragment)},m:function(C,R){(0,o.yef)(T,C,R),E=!0},p:function(C,R){var N={};128&R&&(N.origData=C[16](C[19])),128&R&&(N.dataKey=C[19]),136&R&&(N.keyPath=C[3]+"."+C[19]),1&R&&(N.toggle=C[0]),T.$set(N)},i:function(C){E||((0,o.Ui)(T.$$.fragment,C),E=!0)},o:function(C){(0,o.etI)(T.$$.fragment,C),E=!1},d:function(C){(0,o.vpE)(T,C)}}}function Di(P,T){var E,C,R,N=T[21]<T[11]&&Ei(T);return{key:P,first:null,c:function(){E=(0,o.cSb)(),N&&N.c(),C=(0,o.cSb)(),this.first=E},m:function(he,it){(0,o.$Tr)(he,E,it),N&&N.m(he,it),(0,o.$Tr)(he,C,it),R=!0},p:function(he,it){(T=he)[21]<T[11]?N?(N.p(T,it),2176&it&&(0,o.Ui)(N,1)):((N=Ei(T)).c(),(0,o.Ui)(N,1),N.m(C.parentNode,C)):N&&((0,o.dvw)(),(0,o.etI)(N,1,1,function(){N=null}),(0,o.gbL)())},i:function(he){R||((0,o.Ui)(N),R=!0)},o:function(he){(0,o.etI)(N),R=!1},d:function(he){he&&(0,o.ogt)(E),N&&N.d(he),he&&(0,o.ogt)(C)}}}function Yi(P){var T,E,C,R,N=P[14](P[7].length-P[11])+"";return{c:function(){T=(0,o.bGB)("div"),E=(0,o.fLW)(N),(0,o.Ljt)(T,"class","vc-log-tree-loadmore")},m:function(he,it){(0,o.$Tr)(he,T,it),(0,o.R3I)(T,E),C||(R=(0,o.oLt)(T,"click",P[17]),C=!0)},p:function(he,it){2176&it&&N!==(N=he[14](he[7].length-he[11])+"")&&(0,o.rTO)(E,N)},d:function(he){he&&(0,o.ogt)(T),C=!1,R()}}}function lo(P,T){var E,C,R;return C=new ao({props:{origData:T[16](T[19]),dataKey:String(T[19]),keyType:"symbol",keyPath:T[3]+"["+String(T[19])+"]",toggle:T[0]}}),{key:P,first:null,c:function(){E=(0,o.cSb)(),(0,o.YCL)(C.$$.fragment),this.first=E},m:function(N,he){(0,o.$Tr)(N,E,he),(0,o.yef)(C,N,he),R=!0},p:function(N,he){T=N;var it={};512&he&&(it.origData=T[16](T[19])),512&he&&(it.dataKey=String(T[19])),520&he&&(it.keyPath=T[3]+"["+String(T[19])+"]"),1&he&&(it.toggle=T[0]),C.$set(it)},i:function(N){R||((0,o.Ui)(C.$$.fragment,N),R=!0)},o:function(N){(0,o.etI)(C.$$.fragment,N),R=!1},d:function(N){N&&(0,o.ogt)(E),(0,o.vpE)(C,N)}}}function mo(P){var T,E;return T=new ao({props:{origData:P[16](P[19]),dataKey:P[19],keyType:"private",keyPath:P[3]+"."+P[19],toggle:P[0]}}),{c:function(){(0,o.YCL)(T.$$.fragment)},m:function(C,R){(0,o.yef)(T,C,R),E=!0},p:function(C,R){var N={};256&R&&(N.origData=C[16](C[19])),256&R&&(N.dataKey=C[19]),264&R&&(N.keyPath=C[3]+"."+C[19]),1&R&&(N.toggle=C[0]),T.$set(N)},i:function(C){E||((0,o.Ui)(T.$$.fragment,C),E=!0)},o:function(C){(0,o.etI)(T.$$.fragment,C),E=!1},d:function(C){(0,o.vpE)(T,C)}}}function ho(P,T){var E,C,R,N=T[21]<T[12]&&mo(T);return{key:P,first:null,c:function(){E=(0,o.cSb)(),N&&N.c(),C=(0,o.cSb)(),this.first=E},m:function(he,it){(0,o.$Tr)(he,E,it),N&&N.m(he,it),(0,o.$Tr)(he,C,it),R=!0},p:function(he,it){(T=he)[21]<T[12]?N?(N.p(T,it),4352&it&&(0,o.Ui)(N,1)):((N=mo(T)).c(),(0,o.Ui)(N,1),N.m(C.parentNode,C)):N&&((0,o.dvw)(),(0,o.etI)(N,1,1,function(){N=null}),(0,o.gbL)())},i:function(he){R||((0,o.Ui)(N),R=!0)},o:function(he){(0,o.etI)(N),R=!1},d:function(he){he&&(0,o.ogt)(E),N&&N.d(he),he&&(0,o.ogt)(C)}}}function go(P){var T,E,C,R,N=P[14](P[8].length-P[12])+"";return{c:function(){T=(0,o.bGB)("div"),E=(0,o.fLW)(N),(0,o.Ljt)(T,"class","vc-log-tree-loadmore")},m:function(he,it){(0,o.$Tr)(he,T,it),(0,o.R3I)(T,E),C||(R=(0,o.oLt)(T,"click",P[18]),C=!0)},p:function(he,it){4352&it&&N!==(N=he[14](he[8].length-he[12])+"")&&(0,o.rTO)(E,N)},d:function(he){he&&(0,o.ogt)(T),C=!1,R()}}}function Ji(P){var T,E;return T=new ao({props:{origData:P[16]("__proto__"),dataKey:"__proto__",keyType:"private",keyPath:P[3]+".__proto__",toggle:P[0]}}),{c:function(){(0,o.YCL)(T.$$.fragment)},m:function(C,R){(0,o.yef)(T,C,R),E=!0},p:function(C,R){var N={};8&R&&(N.keyPath=C[3]+".__proto__"),1&R&&(N.toggle=C[0]),T.$set(N)},i:function(C){E||((0,o.Ui)(T.$$.fragment,C),E=!0)},o:function(C){(0,o.etI)(T.$$.fragment,C),E=!1},d:function(C){(0,o.vpE)(T,C)}}}function jo(P){var T,E,C,R,N,he,it;C=new Ca({props:{origData:P[1],dataKey:P[2],keyType:P[4]}});var st=P[6]&&P[5]&&Si(P);return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("div"),(0,o.YCL)(C.$$.fragment),R=(0,o.DhX)(),st&&st.c(),(0,o.Ljt)(E,"class","vc-log-tree-node"),(0,o.Ljt)(T,"class","vc-log-tree"),(0,o.Ljt)(T,"data-keypath",P[3]),(0,o.VHj)(T,"vc-toggle",P[5]),(0,o.VHj)(T,"vc-is-tree",P[6])},m:function(ft,na){(0,o.$Tr)(ft,T,na),(0,o.R3I)(T,E),(0,o.yef)(C,E,null),(0,o.R3I)(T,R),st&&st.m(T,null),N=!0,he||(it=(0,o.oLt)(E,"click",(0,o.XET)(P[15])),he=!0)},p:function(ft,na){var ca=na[0],oa={};2&ca&&(oa.origData=ft[1]),4&ca&&(oa.dataKey=ft[2]),16&ca&&(oa.keyType=ft[4]),C.$set(oa),ft[6]&&ft[5]?st?(st.p(ft,ca),96&ca&&(0,o.Ui)(st,1)):((st=Si(ft)).c(),(0,o.Ui)(st,1),st.m(T,null)):st&&((0,o.dvw)(),(0,o.etI)(st,1,1,function(){st=null}),(0,o.gbL)()),(!N||8&ca)&&(0,o.Ljt)(T,"data-keypath",ft[3]),32&ca&&(0,o.VHj)(T,"vc-toggle",ft[5]),64&ca&&(0,o.VHj)(T,"vc-is-tree",ft[6])},i:function(ft){N||((0,o.Ui)(C.$$.fragment,ft),(0,o.Ui)(st),N=!0)},o:function(ft){(0,o.etI)(C.$$.fragment,ft),(0,o.etI)(st),N=!1},d:function(ft){ft&&(0,o.ogt)(T),(0,o.vpE)(C),st&&st.d(),he=!1,it()}}}function $o(P,T,E){var C,R,N,he=T.origData,it=T.dataKey,st=it===void 0?void 0:it,ft=T.keyPath,na=ft===void 0?"":ft,ca=T.keyType,oa=ca===void 0?"":ca,ga=T.toggle,pa=ga===void 0?{}:ga,wa=!1,Ta=!1,Aa=!1,Na=50,Fa=50;(0,B.H3)(function(){ji.use()}),(0,B.ev)(function(){ji.unuse()});var or=function(Ya){Ya==="enum"?E(11,Na+=50):Ya==="nonEnum"&&E(12,Fa+=50)};return P.$$set=function(Ya){"origData"in Ya&&E(1,he=Ya.origData),"dataKey"in Ya&&E(2,st=Ya.dataKey),"keyPath"in Ya&&E(3,na=Ya.keyPath),"keyType"in Ya&&E(4,oa=Ya.keyType),"toggle"in Ya&&E(0,pa=Ya.toggle)},P.$$.update=function(){1003&P.$$.dirty&&(E(5,wa=pa[na]||!1),E(6,Ta=!(he instanceof Ci.Tg)&&(t.kJ(he)||t.Kn(he))),Ta&&wa&&(E(7,C=C||t.qr(t.MH(he))),E(8,R=R||t.qr(t.QK(he))),E(9,N=N||t._D(he)),E(10,Aa=t.Kn(he)&&R.indexOf("__proto__")===-1)))},[pa,he,st,na,oa,wa,Ta,C,R,N,Aa,Na,Fa,or,function(Ya){return"(..."+Ya+" Key"+(Ya>1?"s":"")+" Left)"},function(){E(5,wa=!wa),E(0,pa[na]=wa,pa)},function(Ya){try{return he[Ya]}catch{return new Ci.Tg}},function(){return or("enum")},function(){return or("nonEnum")}]}var ao=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,$o,jo,o.AqN,{origData:1,dataKey:2,keyPath:3,keyType:4,toggle:0}),C}return(0,b.Z)(T,P),(0,n.Z)(T,[{key:"origData",get:function(){return this.$$.ctx[1]},set:function(E){this.$$set({origData:E}),(0,o.yl1)()}},{key:"dataKey",get:function(){return this.$$.ctx[2]},set:function(E){this.$$set({dataKey:E}),(0,o.yl1)()}},{key:"keyPath",get:function(){return this.$$.ctx[3]},set:function(E){this.$$set({keyPath:E}),(0,o.yl1)()}},{key:"keyType",get:function(){return this.$$.ctx[4]},set:function(E){this.$$set({keyType:E}),(0,o.yl1)()}},{key:"toggle",get:function(){return this.$$.ctx[0]},set:function(E){this.$$set({toggle:E}),(0,o.yl1)()}}]),T}(o.f_C),wo=ao,Hi=__webpack_require__(7147),Qi={};Hi.Z&&Hi.Z.locals&&(Qi.locals=Hi.Z.locals);var ro,io=0,Wi={};Wi.styleTagTransform=la(),Wi.setAttributes=ta(),Wi.insert=lt().bind(null,"head"),Wi.domAPI=ct(),Wi.insertStyleElement=aa(),Qi.use=function(P){return Wi.options=P||{},io++||(ro=at()(Hi.Z,Wi)),Qi},Qi.unuse=function(){io>0&&!--io&&(ro(),ro=null)};var oo=Qi;function fs(P,T,E){var C=P.slice();return C[9]=T[E],C[11]=E,C}function ms(P,T,E){var C=P.slice();return C[12]=T[E],C}function hs(P){for(var T,E,C,R,N,he,it,st,ft,na,ca,oa,ga,pa=[],wa=new Map,Ta=P[0].groupLevel&&gs(P),Aa=P[2]>0&&ys(),Na=P[1]&&bs(P),Fa=P[0].repeated&&_s(P),or=P[0].data,Ya=function(Qa){return Qa[11]},Nr=0;Nr<or.length;Nr+=1){var Br=fs(P,or,Nr),zr=Ya(Br);wa.set(zr,pa[Nr]=ws(zr,Br))}return ft=new ui({props:{handler:P[6]}}),{c:function(){T=(0,o.bGB)("div"),Ta&&Ta.c(),E=(0,o.DhX)(),Aa&&Aa.c(),C=(0,o.DhX)(),Na&&Na.c(),R=(0,o.DhX)(),Fa&&Fa.c(),N=(0,o.DhX)(),he=(0,o.bGB)("div");for(var Qa=0;Qa<pa.length;Qa+=1)pa[Qa].c();it=(0,o.DhX)(),st=(0,o.bGB)("div"),(0,o.YCL)(ft.$$.fragment),(0,o.Ljt)(he,"class","vc-log-content"),(0,o.Ljt)(st,"class","vc-logrow-icon"),(0,o.Ljt)(T,"class",na="vc-log-row vc-log-"+P[0].type),(0,o.VHj)(T,"vc-log-input",P[0].cmdType==="input"),(0,o.VHj)(T,"vc-log-output",P[0].cmdType==="output"),(0,o.VHj)(T,"vc-log-group",P[2]>0),(0,o.VHj)(T,"vc-toggle",P[2]===1)},m:function(Qa,nr){(0,o.$Tr)(Qa,T,nr),Ta&&Ta.m(T,null),(0,o.R3I)(T,E),Aa&&Aa.m(T,null),(0,o.R3I)(T,C),Na&&Na.m(T,null),(0,o.R3I)(T,R),Fa&&Fa.m(T,null),(0,o.R3I)(T,N),(0,o.R3I)(T,he);for(var Fr=0;Fr<pa.length;Fr+=1)pa[Fr].m(he,null);(0,o.R3I)(T,it),(0,o.R3I)(T,st),(0,o.yef)(ft,st,null),ca=!0,oa||(ga=(0,o.oLt)(T,"click",P[5]),oa=!0)},p:function(Qa,nr){Qa[0].groupLevel?Ta?Ta.p(Qa,nr):((Ta=gs(Qa)).c(),Ta.m(T,E)):Ta&&(Ta.d(1),Ta=null),Qa[2]>0?Aa||((Aa=ys()).c(),Aa.m(T,C)):Aa&&(Aa.d(1),Aa=null),Qa[1]?Na?Na.p(Qa,nr):((Na=bs(Qa)).c(),Na.m(T,R)):Na&&(Na.d(1),Na=null),Qa[0].repeated?Fa?Fa.p(Qa,nr):((Fa=_s(Qa)).c(),Fa.m(T,N)):Fa&&(Fa.d(1),Fa=null),17&nr&&(or=Qa[0].data,(0,o.dvw)(),pa=(0,o.GQg)(pa,nr,Ya,1,Qa,or,wa,he,o.cly,ws,null,fs),(0,o.gbL)()),(!ca||1&nr&&na!==(na="vc-log-row vc-log-"+Qa[0].type))&&(0,o.Ljt)(T,"class",na),1&nr&&(0,o.VHj)(T,"vc-log-input",Qa[0].cmdType==="input"),1&nr&&(0,o.VHj)(T,"vc-log-output",Qa[0].cmdType==="output"),5&nr&&(0,o.VHj)(T,"vc-log-group",Qa[2]>0),5&nr&&(0,o.VHj)(T,"vc-toggle",Qa[2]===1)},i:function(Qa){if(!ca){for(var nr=0;nr<or.length;nr+=1)(0,o.Ui)(pa[nr]);(0,o.Ui)(ft.$$.fragment,Qa),ca=!0}},o:function(Qa){for(var nr=0;nr<pa.length;nr+=1)(0,o.etI)(pa[nr]);(0,o.etI)(ft.$$.fragment,Qa),ca=!1},d:function(Qa){Qa&&(0,o.ogt)(T),Ta&&Ta.d(),Aa&&Aa.d(),Na&&Na.d(),Fa&&Fa.d();for(var nr=0;nr<pa.length;nr+=1)pa[nr].d();(0,o.vpE)(ft),oa=!1,ga()}}}function gs(P){for(var T,E=new Array(P[0].groupLevel),C=[],R=0;R<E.length;R+=1)C[R]=js(ms(P,E,R));return{c:function(){for(var N=0;N<C.length;N+=1)C[N].c();T=(0,o.cSb)()},m:function(N,he){for(var it=0;it<C.length;it+=1)C[it].m(N,he);(0,o.$Tr)(N,T,he)},p:function(N,he){if(1&he){var it;for(E=new Array(N[0].groupLevel),it=0;it<E.length;it+=1){var st=ms(N,E,it);C[it]?C[it].p(st,he):(C[it]=js(),C[it].c(),C[it].m(T.parentNode,T))}for(;it<C.length;it+=1)C[it].d(1);C.length=E.length}},d:function(N){(0,o.RMB)(C,N),N&&(0,o.ogt)(T)}}}function js(P){var T;return{c:function(){T=(0,o.bGB)("i"),(0,o.Ljt)(T,"class","vc-log-padding")},m:function(E,C){(0,o.$Tr)(E,T,C)},p:o.ZTd,d:function(E){E&&(0,o.ogt)(T)}}}function ys(P){var T;return{c:function(){T=(0,o.bGB)("div"),(0,o.Ljt)(T,"class","vc-log-group-toggle")},m:function(E,C){(0,o.$Tr)(E,T,C)},d:function(E){E&&(0,o.ogt)(T)}}}function bs(P){var T,E;return{c:function(){T=(0,o.bGB)("div"),E=(0,o.fLW)(P[3]),(0,o.Ljt)(T,"class","vc-log-time")},m:function(C,R){(0,o.$Tr)(C,T,R),(0,o.R3I)(T,E)},p:function(C,R){8&R&&(0,o.rTO)(E,C[3])},d:function(C){C&&(0,o.ogt)(T)}}}function _s(P){var T,E,C,R=P[0].repeated+"";return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("i"),C=(0,o.fLW)(R),(0,o.Ljt)(T,"class","vc-log-repeat")},m:function(N,he){(0,o.$Tr)(N,T,he),(0,o.R3I)(T,E),(0,o.R3I)(E,C)},p:function(N,he){1&he&&R!==(R=N[0].repeated+"")&&(0,o.rTO)(C,R)},d:function(N){N&&(0,o.ogt)(T)}}}function Bc(P){var T,E;return T=new Ca({props:{origData:P[9].origData,style:P[9].style}}),{c:function(){(0,o.YCL)(T.$$.fragment)},m:function(C,R){(0,o.yef)(T,C,R),E=!0},p:function(C,R){var N={};1&R&&(N.origData=C[9].origData),1&R&&(N.style=C[9].style),T.$set(N)},i:function(C){E||((0,o.Ui)(T.$$.fragment,C),E=!0)},o:function(C){(0,o.etI)(T.$$.fragment,C),E=!1},d:function(C){(0,o.vpE)(T,C)}}}function Uc(P){var T,E;return T=new wo({props:{origData:P[9].origData,keyPath:String(P[11]),toggle:P[0].toggle}}),{c:function(){(0,o.YCL)(T.$$.fragment)},m:function(C,R){(0,o.yef)(T,C,R),E=!0},p:function(C,R){var N={};1&R&&(N.origData=C[9].origData),1&R&&(N.keyPath=String(C[11])),1&R&&(N.toggle=C[0].toggle),T.$set(N)},i:function(C){E||((0,o.Ui)(T.$$.fragment,C),E=!0)},o:function(C){(0,o.etI)(T.$$.fragment,C),E=!1},d:function(C){(0,o.vpE)(T,C)}}}function ws(P,T){var E,C,R,N,he,it,st=[Uc,Bc],ft=[];function na(ca,oa){return 1&oa&&(C=null),C==null&&(C=!!ca[4](ca[9].origData)),C?0:1}return R=na(T,-1),N=ft[R]=st[R](T),{key:P,first:null,c:function(){E=(0,o.cSb)(),N.c(),he=(0,o.cSb)(),this.first=E},m:function(ca,oa){(0,o.$Tr)(ca,E,oa),ft[R].m(ca,oa),(0,o.$Tr)(ca,he,oa),it=!0},p:function(ca,oa){var ga=R;(R=na(T=ca,oa))===ga?ft[R].p(T,oa):((0,o.dvw)(),(0,o.etI)(ft[ga],1,1,function(){ft[ga]=null}),(0,o.gbL)(),(N=ft[R])?N.p(T,oa):(N=ft[R]=st[R](T)).c(),(0,o.Ui)(N,1),N.m(he.parentNode,he))},i:function(ca){it||((0,o.Ui)(N),it=!0)},o:function(ca){(0,o.etI)(N),it=!1},d:function(ca){ca&&(0,o.ogt)(E),ft[R].d(ca),ca&&(0,o.ogt)(he)}}}function qc(P){var T,E,C=P[0]&&hs(P);return{c:function(){C&&C.c(),T=(0,o.cSb)()},m:function(R,N){C&&C.m(R,N),(0,o.$Tr)(R,T,N),E=!0},p:function(R,N){var he=N[0];R[0]?C?(C.p(R,he),1&he&&(0,o.Ui)(C,1)):((C=hs(R)).c(),(0,o.Ui)(C,1),C.m(T.parentNode,T)):C&&((0,o.dvw)(),(0,o.etI)(C,1,1,function(){C=null}),(0,o.gbL)())},i:function(R){E||((0,o.Ui)(C),E=!0)},o:function(R){(0,o.etI)(C),E=!1},d:function(R){C&&C.d(R),R&&(0,o.ogt)(T)}}}function zc(P,T,E){var C=T.log,R=T.showTimestamps,N=R!==void 0&&R,he=T.groupHeader,it=he===void 0?0:he,st=(0,B.x)(),ft="",na=function(ca,oa){var ga="000"+ca;return ga.substring(ga.length-oa)};return(0,B.H3)(function(){oo.use()}),(0,B.ev)(function(){oo.unuse()}),P.$$set=function(ca){"log"in ca&&E(0,C=ca.log),"showTimestamps"in ca&&E(1,N=ca.showTimestamps),"groupHeader"in ca&&E(2,it=ca.groupHeader)},P.$$.update=function(){if(3&P.$$.dirty&&N){var ca=new Date(C.date);E(3,ft=na(ca.getHours(),2)+":"+na(ca.getMinutes(),2)+":"+na(ca.getSeconds(),2)+":"+na(ca.getMilliseconds(),3))}},[C,N,it,ft,function(ca){return!(ca instanceof Ci.Tg)&&(t.kJ(ca)||t.Kn(ca))},function(){it>0&&st("groupCollapsed",{groupLabel:C.groupLabel,groupHeader:it===1?2:1,isGroupCollapsed:it===1})},function(){var ca=[];try{for(var oa=0;oa<C.data.length;oa++)t.HD(C.data[oa].origData)||t.hj(C.data[oa].origData)?ca.push(C.data[oa].origData):ca.push(t.hZ(C.data[oa].origData,{maxDepth:10,keyMaxLen:1e4,pretty:!1,standardJSON:!0}))}catch{}return ca.join(" ")}]}var Fc=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,zc,qc,o.AqN,{log:0,showTimestamps:1,groupHeader:2}),C}return(0,b.Z)(T,P),(0,n.Z)(T,[{key:"log",get:function(){return this.$$.ctx[0]},set:function(E){this.$$set({log:E}),(0,o.yl1)()}},{key:"showTimestamps",get:function(){return this.$$.ctx[1]},set:function(E){this.$$set({showTimestamps:E}),(0,o.yl1)()}},{key:"groupHeader",get:function(){return this.$$.ctx[2]},set:function(E){this.$$set({groupHeader:E}),(0,o.yl1)()}}]),T}(o.f_C),Gc=Fc,Vc=__webpack_require__(3903),Io=__webpack_require__(3327),xo={};Io.Z&&Io.Z.locals&&(xo.locals=Io.Z.locals);var Xo,Zo=0,uo={};uo.styleTagTransform=la(),uo.setAttributes=ta(),uo.insert=lt().bind(null,"head"),uo.domAPI=ct(),uo.insertStyleElement=aa(),xo.use=function(P){return uo.options=P||{},Zo++||(Xo=at()(Io.Z,uo)),xo},xo.unuse=function(){Zo>0&&!--Zo&&(Xo(),Xo=null)};var xs=xo,Hc=__webpack_require__(4264),Yr=__webpack_require__.n(Hc),Wc=function(){function P(E){console.debug("[vConsole] `ResizeObserver` is not supported in the browser, vConsole cannot render correctly."),E([{contentRect:{height:30}}],this)}var T=P.prototype;return T.disconnect=function(){},T.observe=function(E,C){},T.unobserve=function(E){},P}(),Yo=function(){return typeof window.ResizeObserver=="function"},ks=function(){return window.ResizeObserver||Wc};function Kc(P){var T,E,C=P[6].default,R=(0,o.nuO)(C,P,P[5],null);return{c:function(){T=(0,o.bGB)("div"),R&&R.c(),(0,o.Ljt)(T,"class","vc-scroller-item"),(0,o.czc)(T,"display",P[0]?"block":"none",!1),(0,o.czc)(T,"top",P[3]?P[1]+"px":"auto",!1)},m:function(N,he){(0,o.$Tr)(N,T,he),R&&R.m(T,null),P[7](T),E=!0},p:function(N,he){var it=he[0];R&&R.p&&(!E||32&it)&&(0,o.kmG)(R,C,N,N[5],E?(0,o.u2N)(C,N[5],it,null):(0,o.VOJ)(N[5]),null),1&it&&(0,o.czc)(T,"display",N[0]?"block":"none",!1),2&it&&(0,o.czc)(T,"top",N[3]?N[1]+"px":"auto",!1)},i:function(N){E||((0,o.Ui)(R,N),E=!0)},o:function(N){(0,o.etI)(R,N),E=!1},d:function(N){N&&(0,o.ogt)(T),R&&R.d(N),P[7](null)}}}function Xc(P,T,E){var C,R=T.$$slots,N=R===void 0?{}:R,he=T.$$scope,it=T.show,st=it===void 0?!Yo():it,ft=T.top,na=T.onResize,ca=na===void 0?function(){}:na,oa=null,ga=Yo();return(0,B.H3)(function(){if(st&&ca(C.getBoundingClientRect().height),ga){var pa=ks();(oa=new pa(function(wa){var Ta=wa[0];st&&ca(Ta.contentRect.height)})).observe(C)}}),(0,B.ev)(function(){ga&&oa.disconnect()}),P.$$set=function(pa){"show"in pa&&E(0,st=pa.show),"top"in pa&&E(1,ft=pa.top),"onResize"in pa&&E(4,ca=pa.onResize),"$$scope"in pa&&E(5,he=pa.$$scope)},[st,ft,C,ga,ca,he,N,function(pa){o.VnY[pa?"unshift":"push"](function(){E(2,C=pa)})}]}var Zc=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,Xc,Kc,o.N8,{show:0,top:1,onResize:4}),C}return(0,b.Z)(T,P),(0,n.Z)(T,[{key:"show",get:function(){return this.$$.ctx[0]},set:function(E){this.$$set({show:E}),(0,o.yl1)()}},{key:"top",get:function(){return this.$$.ctx[1]},set:function(E){this.$$set({top:E}),(0,o.yl1)()}},{key:"onResize",get:function(){return this.$$.ctx[4]},set:function(E){this.$$set({onResize:E}),(0,o.yl1)()}}]),T}(o.f_C),Yc=Zc,Jc=function(){function P(){this._x=0,this._endX=0,this._v=0,this._startTime=0,this._endTime=0}var T=P.prototype;return T.set=function(E,C,R,N){this._x=E,this._endX=C,this._v=(C-E)/R,this._startTime=N||Date.now(),this._endTime=this._startTime+R},T.x=function(E){if(this.done(E))return this._endX;var C=E-this._startTime;return this._x+this._v*C},T.dx=function(E){return this.done(E)?0:this._v},T.done=function(E){return E>=this._endTime},P}(),Qc=function(){function P(E){this._drag=void 0,this._dragLog=void 0,this._x=0,this._v=0,this._startTime=0,this._drag=E,this._dragLog=Math.log(E)}var T=P.prototype;return T.set=function(E,C,R){this._x=E,this._v=C,this._startTime=R||Date.now()},T.x=function(E){var C=(E-this._startTime)/1e3;return this._x+this._v*Math.pow(this._drag,C)/this._dragLog-this._v/this._dragLog},T.dx=function(E){var C=(E-this._startTime)/1e3;return this._v*Math.pow(this._drag,C)},T.done=function(E){return Math.abs(this.dx(E))<3},P}(),Es=function(P,T){return P>T-.1&&P<T+.1},Cs=function(P){return Es(P,0)},el=function(){function P(E,C,R){this._solver=void 0,this._solution=void 0,this._endPosition=void 0,this._startTime=void 0,this._solver=function(N,he,it){var st=it,ft=N,na=he,ca=st*st-4*ft*na;if(ca==0){var oa=-st/(2*ft);return function(Aa,Na){var Fa=Aa,or=Na/(oa*Aa);return{x:function(Ya){return(Fa+or*Ya)*Math.pow(Math.E,oa*Ya)},dx:function(Ya){return(oa*(Fa+or*Ya)+or)*Math.pow(Math.E,oa*Ya)}}}}if(ca>0){var ga=(-st-Math.sqrt(ca))/(2*ft),pa=(-st+Math.sqrt(ca))/(2*ft);return function(Aa,Na){var Fa=(Na-ga*Aa)/(pa-ga),or=Aa-Fa;return{x:function(Ya){return or*Math.pow(Math.E,ga*Ya)+Fa*Math.pow(Math.E,pa*Ya)},dx:function(Ya){return or*ga*Math.pow(Math.E,ga*Ya)+Fa*pa*Math.pow(Math.E,pa*Ya)}}}}var wa=Math.sqrt(4*ft*na-st*st)/(2*ft),Ta=-st/2*ft;return function(Aa,Na){var Fa=Aa,or=(Na-Ta*Aa)/wa;return{x:function(Ya){return Math.pow(Math.E,Ta*Ya)*(Fa*Math.cos(wa*Ya)+or*Math.sin(wa*Ya))},dx:function(Ya){var Nr=Math.pow(Math.E,Ta*Ya),Br=Math.cos(wa*Ya),zr=Math.sin(wa*Ya);return Nr*(or*wa*Br-Fa*wa*zr)+Ta*Nr*(or*zr+Fa*Br)}}}}(E,C,R),this._solution=null,this._endPosition=0,this._startTime=0}var T=P.prototype;return T.x=function(E){if(!this._solution)return 0;var C=(E-this._startTime)/1e3;return this._endPosition+this._solution.x(C)},T.dx=function(E){if(!this._solution)return 0;var C=(E-this._startTime)/1e3;return this._solution.dx(C)},T.set=function(E,C,R,N){N||(N=Date.now()),this._endPosition=E,C==E&&Cs(R)||(this._solution=this._solver(C-E,R),this._startTime=N)},T.done=function(E){return E||(E=Date.now()),Es(this.x(E),this._endPosition)&&Cs(this.dx(E))},P}(),nl=function(){function P(E,C){this._enableSpring=C,this._getExtend=void 0,this._friction=new Qc(.05),this._spring=new el(1,90,20),this._toEdge=!1,this._getExtend=E}var T=P.prototype;return T.set=function(E,C,R){if(R===void 0&&(R=Date.now()),this._friction.set(E,C,R),E>0&&C>=0)this._toEdge=!0,this._enableSpring&&this._spring.set(0,E,C,R);else{var N=this._getExtend();E<-N&&C<=0?(this._toEdge=!0,this._enableSpring&&this._spring.set(-N,E,C,R)):this._toEdge=!1}},T.x=function(E){if(this._enableSpring&&this._toEdge)return this._spring.x(E);var C=this._friction.x(E),R=this._friction.dx(E);if(C>0&&R>=0){if(this._toEdge=!0,!this._enableSpring)return 0;this._spring.set(0,C,R,E)}else{var N=this._getExtend();if(C<-N&&R<=0){if(this._toEdge=!0,!this._enableSpring)return-N;this._spring.set(-N,C,R,E)}}return C},T.dx=function(E){return this._toEdge?this._enableSpring?this._spring.dx(E):0:this._friction.dx(E)},T.done=function(E){return this._toEdge?!this._enableSpring||this._spring.done(E):this._friction.done(E)},P}();function Jo(P,T){var E,C;return function R(){if(!C){var N=Date.now();T(N),P.done(N)||(E=requestAnimationFrame(R))}}(),{cancel:function(){cancelAnimationFrame(E),C=!0}}}var tl=function(){function P(E,C){this._updatePosition=C,this._scrollModel=void 0,this._linearModel=void 0,this._startPosition=0,this._position=0,this._animate=null,this._getExtent=void 0,this._getExtent=E,this._scrollModel=new nl(E,!1),this._linearModel=new Jc}var T=P.prototype;return T.onTouchStart=function(){var E=this._position;if(E>0)E*=0;else{var C=this._getExtent();E<-C&&(E=0*(E+C)-C)}this._startPosition=this._position=E,this._animate&&(this._animate.cancel(),this._animate=null),this._updatePosition(-E)},T.onTouchMove=function(E,C){var R=C+this._startPosition;if(R>0)R*=0;else{var N=this._getExtent();R<-N&&(R=0*(R+N)-N)}this._position=R,this._updatePosition(-R)},T.onTouchEnd=function(E,C,R,N){var he=this,it=C+this._startPosition;if(it>0)it*=0;else{var st=this._getExtent();it<-st&&(it=0*(it+st)-st)}if(this._position=it,this._updatePosition(-it),!(Math.abs(C)<=.1&&Math.abs(N)<=.1)){var ft=this._scrollModel;ft.set(it,N),this._animate=Jo(ft,function(na){var ca=he._position=ft.x(na);he._updatePosition(-ca)})}},T.onTouchCancel=function(){var E=this,C=this._position;if(C>0)C*=0;else{var R=this._getExtent();C<-R&&(C=0*(C+R)-R)}this._position=C;var N=this._scrollModel;N.set(C,0),this._animate=Jo(N,function(he){var it=E._position=N.x(he);E._updatePosition(-it)})},T.onWheel=function(E,C){var R=this._position-C;if(this._animate&&(this._animate.cancel(),this._animate=null),R>0)R=0;else{var N=this._getExtent();R<-N&&(R=-N)}this._position=R,this._updatePosition(-R)},T.getPosition=function(){return-this._position},T.updatePosition=function(E){var C=-E-this._position;this._startPosition+=C,this._position+=C;var R=this._position;this._updatePosition(-R);var N=this._scrollModel,he=Date.now();if(!N.done(he)){var it=N.dx(he);N.set(R,it,he)}},T.scrollTo=function(E,C){var R=this;if(this._animate&&(this._animate.cancel(),this._animate=null),C>0){var N=this._linearModel;N.set(this._position,-E,C),this._animate=Jo(this._linearModel,function(he){var it=R._position=N.x(he);R._updatePosition(-it)})}else this._updatePosition(E)},P}();function al(P,T){var E=typeof Symbol<"u"&&P[Symbol.iterator]||P["@@iterator"];if(E)return(E=E.call(P)).next.bind(E);if(Array.isArray(P)||(E=function(R,N){if(R){if(typeof R=="string")return Ts(R,N);var he=Object.prototype.toString.call(R).slice(8,-1);if(he==="Object"&&R.constructor&&(he=R.constructor.name),he==="Map"||he==="Set")return Array.from(R);if(he==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(he))return Ts(R,N)}}(P))||T){E&&(P=E);var C=0;return function(){return C>=P.length?{done:!0}:{done:!1,value:P[C++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ts(P,T){(T==null||T>P.length)&&(T=P.length);for(var E=0,C=new Array(T);E<T;E++)C[E]=P[E];return C}var rl=function(P){var T=null,E=!1,C=function R(){E=!1,P(),T=requestAnimationFrame(function(){T=null,E&&R()})};return{trigger:function(){T===null?C():E=!0},cancel:function(){T&&(cancelAnimationFrame(T),E=!1,T=null)}}},il=function(){function P(T){var E=this;this._handler=T,this._touchId=null,this._startX=0,this._startY=0,this._historyX=[],this._historyY=[],this._historyTime=[],this._wheelDeltaX=0,this._wheelDeltaY=0,this._onTouchMove=function(){var C=E._historyX[E._historyX.length-1],R=E._historyY[E._historyY.length-1];E._handler.onTouchMove(C,R)},this._onWheel=rl(function(){var C=E._wheelDeltaX,R=E._wheelDeltaY;E._wheelDeltaX=0,E._wheelDeltaY=0,E._handler.onWheel(C,R)}),this.handleTouchStart=function(C){var R;if(((R=C.target.dataset)==null?void 0:R.scrollable)!=="1"){C.preventDefault();var N=C.touches[0];E._touchId=N.identifier,E._startX=N.pageX,E._startY=N.pageY,E._historyX=[0],E._historyY=[0],E._historyTime=[Date.now()],E._handler.onTouchStart()}},this.handleTouchMove=function(C){var R;if(((R=C.target.dataset)==null?void 0:R.scrollable)!=="1"){C.preventDefault();var N=E._getTouchDelta(C);N!==null&&(E._historyX.push(N.x),E._historyY.push(N.y),E._historyTime.push(Date.now()),E._onTouchMove())}},this.handleTouchEnd=function(C){var R;if(((R=C.target.dataset)==null?void 0:R.scrollable)!=="1"){C.preventDefault();var N=E._getTouchDelta(C);if(N!==null){for(var he=0,it=0,st=Date.now(),ft=N.y,na=N.x,ca=E._historyTime,oa=ca.length-1;oa>0;oa-=1){var ga=st-ca[oa];if(ga>30){he=1e3*(na-E._historyX[oa])/ga,it=1e3*(ft-E._historyY[oa])/ga;break}}E._touchId=null,E._handler.onTouchEnd(N.x,N.y,he,it)}}},this.handleTouchCancel=function(C){var R;((R=C.target.dataset)==null?void 0:R.scrollable)!=="1"&&(C.preventDefault(),E._getTouchDelta(C)!==null&&(E._touchId=null,E._handler.onTouchCancel()))},this.handleWheel=function(C){var R;((R=C.target.dataset)==null?void 0:R.scrollable)!=="1"&&(C.preventDefault(),E._wheelDeltaX+=C.deltaX,E._wheelDeltaY+=C.deltaY,E._onWheel.trigger())}}return P.prototype._getTouchDelta=function(T){if(this._touchId===null)return null;for(var E,C=al(T.changedTouches);!(E=C()).done;){var R=E.value;if(R.identifier===this._touchId)return{x:R.pageX-this._startX,y:R.pageY-this._startY}}return null},P}(),Ro=__webpack_require__(1142),ko={};Ro.Z&&Ro.Z.locals&&(ko.locals=Ro.Z.locals);var Qo,es=0,vo={};vo.styleTagTransform=la(),vo.setAttributes=ta(),vo.insert=lt().bind(null,"head"),vo.domAPI=ct(),vo.insertStyleElement=aa(),ko.use=function(P){return vo.options=P||{},es++||(Qo=at()(Ro.Z,vo)),ko},ko.unuse=function(){es>0&&!--es&&(Qo(),Qo=null)};var Ss=ko,ol=function(){var P=[],T=[],E=0,C=0,R=0,N=0,he=0;return function(it,st,ft){if(R===it&&N===st&&he===ft)return P;var na=T.length,ca=st<=C?Math.max(0,Math.min(st,Math.max(E,Math.min(C-1,ft-na)))):st,oa=E<=ft?Math.max(ft,Math.min(it,Math.max(E+1,Math.min(C,ca+na)))):ft;if(na===0||oa-ca<na){for(var ga=P.length=T.length=ft-st,pa=0;pa<ga;pa+=1)T[pa]=pa,P[pa]={key:pa,index:pa+st,show:!0};return E=st,C=ft,R=it,N=st,he=ft,P}var wa=0,Ta=0,Aa=0,Na=0;C<ca||oa<E?(Aa=ca,Na=ca+na):E<ca?(Ta=ca-E,Aa=ca,Na=ca+na):oa<C?(Ta=na-(C-oa),Aa=oa-na,Na=oa):ca<=E&&C<=oa&&(Aa=E,Na=C);for(var Fa=ca;Fa<st;Fa+=1,wa+=1){var or=T[(Ta+wa)%na],Ya=P[Fa-ca];Ya.key=or,Ya.index=Fa,Ya.show=!1}for(var Nr=st,Br=0;Nr<ft;Nr+=1){var zr=void 0;Aa<=Nr&&Nr<Na?(zr=T[(Ta+wa)%na],wa+=1):(zr=na+Br,Br+=1);var Qa=Nr-ca;if(Qa<P.length){var nr=P[Qa];nr.key=zr,nr.index=Nr,nr.show=!0}else P.push({key:zr,index:Nr,show:!0})}for(var Fr=ft;Fr<oa;Fr+=1,wa+=1){var ci=T[(Ta+wa)%na],Gr=P[Fr-ca];Gr.key=ci,Gr.index=Fr,Gr.show=!1}for(var Ur=0;Ur<P.length;Ur+=1)T[Ur]=P[Ur].key;return P.sort(function(jr,Va){return jr.key-Va.key}),E=ca,C=oa,R=it,N=st,he=ft,P}},sl=o.lig.Map,cl=function(P){return{}},Os=function(P){return{}},ll=function(P){return{}},$s=function(P){return{}};function Is(P,T,E){var C=P.slice();return C[53]=T[E],C[55]=E,C}var dl=function(P){return{item:1025&P[0]}},Rs=function(P){return{item:P[0][P[53].index]}},ul=function(P){return{}},Ls=function(P){return{}};function Ds(P){var T,E,C=P[24].header,R=(0,o.nuO)(C,P,P[31],Ls);return{c:function(){T=(0,o.bGB)("div"),R&&R.c(),(0,o.Ljt)(T,"class","vc-scroller-header")},m:function(N,he){(0,o.$Tr)(N,T,he),R&&R.m(T,null),P[25](T),E=!0},p:function(N,he){R&&R.p&&(!E||1&he[1])&&(0,o.kmG)(R,C,N,N[31],E?(0,o.u2N)(C,N[31],he,ul):(0,o.VOJ)(N[31]),Ls)},i:function(N){E||((0,o.Ui)(R,N),E=!0)},o:function(N){(0,o.etI)(R,N),E=!1},d:function(N){N&&(0,o.ogt)(T),R&&R.d(N),P[25](null)}}}function vl(P){var T,E=P[24].empty,C=(0,o.nuO)(E,P,P[31],$s);return{c:function(){C&&C.c()},m:function(R,N){C&&C.m(R,N),T=!0},p:function(R,N){C&&C.p&&(!T||1&N[1])&&(0,o.kmG)(C,E,R,R[31],T?(0,o.u2N)(E,R[31],N,ll):(0,o.VOJ)(R[31]),$s)},i:function(R){T||((0,o.Ui)(C,R),T=!0)},o:function(R){(0,o.etI)(C,R),T=!1},d:function(R){C&&C.d(R)}}}function pl(P){for(var T,E,C=[],R=new sl,N=P[10],he=function(na){return na[53].key},it=0;it<N.length;it+=1){var st=Is(P,N,it),ft=he(st);R.set(ft,C[it]=Ps(ft,st))}return{c:function(){for(var na=0;na<C.length;na+=1)C[na].c();T=(0,o.cSb)()},m:function(na,ca){for(var oa=0;oa<C.length;oa+=1)C[oa].m(na,ca);(0,o.$Tr)(na,T,ca),E=!0},p:function(na,ca){17921&ca[0]|1&ca[1]&&(N=na[10],(0,o.dvw)(),C=(0,o.GQg)(C,ca,he,1,na,N,R,T.parentNode,o.cly,Ps,T,Is),(0,o.gbL)())},i:function(na){if(!E){for(var ca=0;ca<N.length;ca+=1)(0,o.Ui)(C[ca]);E=!0}},o:function(na){for(var ca=0;ca<C.length;ca+=1)(0,o.etI)(C[ca]);E=!1},d:function(na){for(var ca=0;ca<C.length;ca+=1)C[ca].d(na);na&&(0,o.ogt)(T)}}}function fl(P){var T,E,C=P[24].item,R=(0,o.nuO)(C,P,P[31],Rs),N=R||function(he){var it;return{c:function(){it=(0,o.fLW)("Missing template")},m:function(st,ft){(0,o.$Tr)(st,it,ft)},d:function(st){st&&(0,o.ogt)(it)}}}();return{c:function(){N&&N.c(),T=(0,o.DhX)()},m:function(he,it){N&&N.m(he,it),(0,o.$Tr)(he,T,it),E=!0},p:function(he,it){R&&R.p&&(!E||1025&it[0]|1&it[1])&&(0,o.kmG)(R,C,he,he[31],E?(0,o.u2N)(C,he[31],it,dl):(0,o.VOJ)(he[31]),Rs)},i:function(he){E||((0,o.Ui)(N,he),E=!0)},o:function(he){(0,o.etI)(N,he),E=!1},d:function(he){N&&N.d(he),he&&(0,o.ogt)(T)}}}function Ps(P,T){var E,C,R;function N(){for(var he,it=arguments.length,st=new Array(it),ft=0;ft<it;ft++)st[ft]=arguments[ft];return(he=T)[26].apply(he,[T[53]].concat(st))}return C=new Yc({props:{show:T[53].show,top:T[9][T[53].index],onResize:N,$$slots:{default:[fl]},$$scope:{ctx:T}}}),{key:P,first:null,c:function(){E=(0,o.cSb)(),(0,o.YCL)(C.$$.fragment),this.first=E},m:function(he,it){(0,o.$Tr)(he,E,it),(0,o.yef)(C,he,it),R=!0},p:function(he,it){T=he;var st={};1024&it[0]&&(st.show=T[53].show),1536&it[0]&&(st.top=T[9][T[53].index]),1024&it[0]&&(st.onResize=N),1025&it[0]|1&it[1]&&(st.$$scope={dirty:it,ctx:T}),C.$set(st)},i:function(he){R||((0,o.Ui)(C.$$.fragment,he),R=!0)},o:function(he){(0,o.etI)(C.$$.fragment,he),R=!1},d:function(he){he&&(0,o.ogt)(E),(0,o.vpE)(C,he)}}}function As(P){var T,E,C=P[24].footer,R=(0,o.nuO)(C,P,P[31],Os);return{c:function(){T=(0,o.bGB)("div"),R&&R.c(),(0,o.Ljt)(T,"class","vc-scroller-footer")},m:function(N,he){(0,o.$Tr)(N,T,he),R&&R.m(T,null),P[28](T),E=!0},p:function(N,he){R&&R.p&&(!E||1&he[1])&&(0,o.kmG)(R,C,N,N[31],E?(0,o.u2N)(C,N[31],he,cl):(0,o.VOJ)(N[31]),Os)},i:function(N){E||((0,o.Ui)(R,N),E=!0)},o:function(N){(0,o.etI)(R,N),E=!1},d:function(N){N&&(0,o.ogt)(T),R&&R.d(N),P[28](null)}}}function Ms(P){var T,E,C=P[7]+"%",R=P[8]+"%";return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("div"),(0,o.Ljt)(E,"class","vc-scroller-scrollbar-thumb"),(0,o.czc)(E,"height",C,!1),(0,o.czc)(E,"top",R,!1),(0,o.Ljt)(T,"class","vc-scroller-scrollbar-track"),(0,o.czc)(T,"display",P[7]<100?"block":"none",!1)},m:function(N,he){(0,o.$Tr)(N,T,he),(0,o.R3I)(T,E)},p:function(N,he){128&he[0]&&C!==(C=N[7]+"%")&&(0,o.czc)(E,"height",C,!1),256&he[0]&&R!==(R=N[8]+"%")&&(0,o.czc)(E,"top",R,!1),128&he[0]&&(0,o.czc)(T,"display",N[7]<100?"block":"none",!1)},d:function(N){N&&(0,o.ogt)(T)}}}function ml(P){var T,E,C,R,N,he,it,st,ft,na,ca,oa=P[15].header&&Ds(P),ga=[pl,vl],pa=[];function wa(Na,Fa){return Na[0].length?0:1}N=wa(P),he=pa[N]=ga[N](P);var Ta=P[15].footer&&As(P),Aa=P[1]&&Ms(P);return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("div"),oa&&oa.c(),C=(0,o.DhX)(),R=(0,o.bGB)("div"),he.c(),it=(0,o.DhX)(),Ta&&Ta.c(),st=(0,o.DhX)(),Aa&&Aa.c(),(0,o.Ljt)(R,"class","vc-scroller-items"),(0,o.Ljt)(E,"class","vc-scroller-contents"),(0,o.Ljt)(T,"class","vc-scroller-viewport"),(0,o.VHj)(T,"static",!P[13])},m:function(Na,Fa){(0,o.$Tr)(Na,T,Fa),(0,o.R3I)(T,E),oa&&oa.m(E,null),(0,o.R3I)(E,C),(0,o.R3I)(E,R),pa[N].m(R,null),P[27](R),(0,o.R3I)(E,it),Ta&&Ta.m(E,null),P[29](E),(0,o.R3I)(T,st),Aa&&Aa.m(T,null),P[30](T),ft=!0,na||(ca=[(0,o.oLt)(T,"touchstart",function(){(0,o.sBU)(P[13]?P[11].handleTouchStart:P[12])&&(P[13]?P[11].handleTouchStart:P[12]).apply(this,arguments)}),(0,o.oLt)(T,"touchmove",function(){(0,o.sBU)(P[13]?P[11].handleTouchMove:P[12])&&(P[13]?P[11].handleTouchMove:P[12]).apply(this,arguments)}),(0,o.oLt)(T,"touchend",function(){(0,o.sBU)(P[13]?P[11].handleTouchEnd:P[12])&&(P[13]?P[11].handleTouchEnd:P[12]).apply(this,arguments)}),(0,o.oLt)(T,"touchcancel",function(){(0,o.sBU)(P[13]?P[11].handleTouchCancel:P[12])&&(P[13]?P[11].handleTouchCancel:P[12]).apply(this,arguments)}),(0,o.oLt)(T,"wheel",function(){(0,o.sBU)(P[13]?P[11].handleWheel:P[12])&&(P[13]?P[11].handleWheel:P[12]).apply(this,arguments)})],na=!0)},p:function(Na,Fa){(P=Na)[15].header?oa?(oa.p(P,Fa),32768&Fa[0]&&(0,o.Ui)(oa,1)):((oa=Ds(P)).c(),(0,o.Ui)(oa,1),oa.m(E,C)):oa&&((0,o.dvw)(),(0,o.etI)(oa,1,1,function(){oa=null}),(0,o.gbL)());var or=N;(N=wa(P))===or?pa[N].p(P,Fa):((0,o.dvw)(),(0,o.etI)(pa[or],1,1,function(){pa[or]=null}),(0,o.gbL)(),(he=pa[N])?he.p(P,Fa):(he=pa[N]=ga[N](P)).c(),(0,o.Ui)(he,1),he.m(R,null)),P[15].footer?Ta?(Ta.p(P,Fa),32768&Fa[0]&&(0,o.Ui)(Ta,1)):((Ta=As(P)).c(),(0,o.Ui)(Ta,1),Ta.m(E,null)):Ta&&((0,o.dvw)(),(0,o.etI)(Ta,1,1,function(){Ta=null}),(0,o.gbL)()),P[1]?Aa?Aa.p(P,Fa):((Aa=Ms(P)).c(),Aa.m(T,null)):Aa&&(Aa.d(1),Aa=null)},i:function(Na){ft||((0,o.Ui)(oa),(0,o.Ui)(he),(0,o.Ui)(Ta),ft=!0)},o:function(Na){(0,o.etI)(oa),(0,o.etI)(he),(0,o.etI)(Ta),ft=!1},d:function(Na){Na&&(0,o.ogt)(T),oa&&oa.d(),pa[N].d(),P[27](null),Ta&&Ta.d(),P[29](null),Aa&&Aa.d(),P[30](null),na=!1,(0,o.j7q)(ca)}}}function hl(P,T,E){var C,R,N,he,it,st,ft,na=T.$$slots,ca=na===void 0?{}:na,oa=T.$$scope,ga=(0,o.XGm)(ca),pa=this&&this.__awaiter||function(Wa,Cr,_r,$r){return new(_r||(_r=Promise))(function(Hr,Jr){function qi(si){try{Ni($r.next(si))}catch($i){Jr($i)}}function Mi(si){try{Ni($r.throw(si))}catch($i){Jr($i)}}function Ni(si){var $i;si.done?Hr(si.value):($i=si.value,$i instanceof _r?$i:new _r(function(to){to($i)})).then(qi,Mi)}Ni(($r=$r.apply(Wa,Cr||[])).next())})},wa=T.items,Ta=T.itemKey,Aa=Ta===void 0?void 0:Ta,Na=T.itemHeight,Fa=Na===void 0?void 0:Na,or=T.buffer,Ya=or===void 0?200:or,Nr=T.stickToBottom,Br=Nr!==void 0&&Nr,zr=T.scrollbar,Qa=zr!==void 0&&zr,nr=T.start,Fr=nr===void 0?0:nr,ci=T.end,Gr=ci===void 0?0:ci,Ur=0,jr=0,Va=0,Ka=0,Kr=100,Ua=0,Ja=[],Ir=[],Za=[],Lr=ol(),ni=function(){return Math.max(0,Ka+Ur+jr-Va)},oi=!0,vi=!1,Zr=[],Pi=!1,pi=!1,Ai=Yo(),ri=function(Wa,Cr){var _r;(0,B.H3)(function(){var $r=Wa();if($r){Cr($r.getBoundingClientRect().height),_r&&_r.disconnect();var Hr=ks();(_r=new Hr(function(Jr){var qi=Jr[0];Cr(qi.contentRect.height)})).observe($r)}else Cr(0),_r&&(_r.disconnect(),_r=null)}),(0,B.ev)(function(){_r&&(_r.disconnect(),_r=null)})},Ui=function(){var Wa=st.getPosition(),Cr=100/(Ka+Ur+jr);E(8,Ua=Wa*Cr),E(7,Kr=Va*Cr)},li=function(Wa){var Cr=ni();(Wa||st.getPosition()>Cr)&&st.updatePosition(Cr)},Ki=function(Wa){(function(Cr,_r,$r){for(var Hr=new Map,Jr=0;Jr<Zr.length;Jr+=1){var qi=Zr[Jr],Mi=Aa===void 0?qi:qi[Aa];Hr.set(Mi,Ja[Jr])}E(9,Ir.length=Ja.length=Cr.length,Ir);for(var Ni=0,si=0;si<Cr.length;si+=1){var $i=Cr[si],to=Aa===void 0?$i:$i[Aa];Hr.has(to)?Ja[si]=Hr.get(to):Ja[si]=$r,E(9,Ir[si]=Ni,Ir),Ni+=Ja[si]}Ka=Math.max(Ni,_r-Ur-jr),Zr=Cr,Ai?(eo(Cr,st.getPosition(),_r),E(6,it.style.height=Ka+"px",it),li(oi&&Br),Ui()):eo(Cr,0,9e6)})(Wa,Va,Fa)};function eo(Wa,Cr,_r){for(var $r=0,Hr=0;$r<Wa.length&&Hr+Ja[$r]<Cr-Ya;)Hr+=Ja[$r],$r+=1;for(E(16,Fr=$r);$r<Wa.length&&_r&&Hr<Cr+_r+Ya;)Hr+=Ja[$r],$r+=1;E(17,Gr=$r),E(10,Za=Lr(Wa.length,Fr,Gr))}var _o=function(Wa,Cr){return pa(void 0,void 0,void 0,Yr().mark(function _r(){var $r,Hr,Jr,qi;return Yr().wrap(function(Mi){for(;;)switch(Mi.prev=Mi.next){case 0:if(Ja[Wa]!==Cr&&Va!==0){Mi.next=2;break}return Mi.abrupt("return");case 2:for($r=Ja[Wa],Ja[Wa]=Cr,Hr=wa.length,Jr=Wa;Jr<Hr-1;Jr+=1)E(9,Ir[Jr+1]=Ir[Jr]+Ja[Jr],Ir);return Ka=Math.max(Ir[Hr-1]+Ja[Hr-1],Va-Ur-jr),qi=st.getPosition(),vi=!0,Ir[Wa]+$r<qi?st.updatePosition(qi+Cr-$r):li(oi&&Br),Mi.next=12,new Promise(function(Ni){return setTimeout(Ni,0)});case 12:eo(wa,st.getPosition(),Va),E(6,it.style.height=Ka+"px",it),Ui();case 15:case"end":return Mi.stop()}},_r)}))};(0,B.H3)(function(){E(23,Pi=!0),Ss.use()}),(0,B.ev)(function(){Ss.unuse()}),Ai&&(Ai&&(st=st||new tl(ni,function(Wa){return pa(void 0,void 0,void 0,Yr().mark(function Cr(){var _r;return Yr().wrap(function($r){for(;;)switch($r.prev=$r.next){case 0:if(_r=ni(),oi=Math.abs(Wa-_r)<=1,E(5,he.style.transform="translateY("+-Wa+"px) translateZ(0)",he),Ui(),!vi){$r.next=8;break}vi=!1,$r.next=11;break;case 8:return $r.next=10,new Promise(function(Hr){return setTimeout(Hr,0)});case 10:eo(wa,Wa,Va);case 11:case"end":return $r.stop()}},Cr)}))}),E(11,ft=ft||new il(st))),!pi&&Ai&&(ri(function(){return N},function(Wa){return pa(void 0,void 0,void 0,Yr().mark(function Cr(){var _r,$r;return Yr().wrap(function(Hr){for(;;)switch(Hr.prev=Hr.next){case 0:if(Va!==Wa){Hr.next=2;break}return Hr.abrupt("return");case 2:for(Va=Wa,_r=0,$r=0;$r<wa.length;$r+=1)_r+=Ja[$r];return Ka=Math.max(_r,Va-jr),E(6,it.style.height=Ka+"px",it),Hr.next=9,new Promise(function(Jr){return setTimeout(Jr,0)});case 9:Ki(wa),eo(wa,st.getPosition(),Va),Va!==0&&li(oi&&Br),Ui();case 13:case"end":return Hr.stop()}},Cr)}))}),ri(function(){return R},function(Wa){if(jr!==Wa){jr=Wa;for(var Cr=0,_r=0;_r<wa.length;_r+=1)Cr+=Ja[_r];Ka=Math.max(Cr,Va-Ur-jr),E(6,it.style.height=Ka+"px",it),Va!==0&&li(oi&&Br),Ui()}}),ri(function(){return C},function(Wa){Ur!==Wa&&(Ur=Wa,Ki(wa),Ui())})));var Oo={scrollTo:function(Wa){if(Ai){var Cr=Ir[Math.max(0,Math.min(wa.length-1,Wa))],_r=Math.min(ni(),Cr),$r=Math.min(Math.floor(500*Math.abs(st.getPosition()-_r)/2e3),500);st.scrollTo(_r,$r)}}};return P.$$set=function(Wa){"items"in Wa&&E(0,wa=Wa.items),"itemKey"in Wa&&E(18,Aa=Wa.itemKey),"itemHeight"in Wa&&E(19,Fa=Wa.itemHeight),"buffer"in Wa&&E(20,Ya=Wa.buffer),"stickToBottom"in Wa&&E(21,Br=Wa.stickToBottom),"scrollbar"in Wa&&E(1,Qa=Wa.scrollbar),"start"in Wa&&E(16,Fr=Wa.start),"end"in Wa&&E(17,Gr=Wa.end),"$$scope"in Wa&&E(31,oa=Wa.$$scope)},P.$$.update=function(){8388609&P.$$.dirty[0]&&Pi&&(Ai||E(4,N.parentElement.style.height="auto",N),Ki(wa),pi=!0)},[wa,Qa,C,R,N,he,it,Kr,Ua,Ir,Za,ft,function(){},Ai,_o,ga,Fr,Gr,Aa,Fa,Ya,Br,Oo,Pi,ca,function(Wa){o.VnY[Wa?"unshift":"push"](function(){E(2,C=Wa)})},function(Wa,Cr){return _o(Wa.index,Cr)},function(Wa){o.VnY[Wa?"unshift":"push"](function(){E(6,it=Wa)})},function(Wa){o.VnY[Wa?"unshift":"push"](function(){E(3,R=Wa)})},function(Wa){o.VnY[Wa?"unshift":"push"](function(){E(5,he=Wa)})},function(Wa){o.VnY[Wa?"unshift":"push"](function(){E(4,N=Wa),E(23,Pi),E(13,Ai),E(0,wa)})},oa]}var gl=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,hl,ml,o.N8,{items:0,itemKey:18,itemHeight:19,buffer:20,stickToBottom:21,scrollbar:1,start:16,end:17,handler:22},null,[-1,-1]),C}return(0,b.Z)(T,P),(0,n.Z)(T,[{key:"items",get:function(){return this.$$.ctx[0]},set:function(E){this.$$set({items:E}),(0,o.yl1)()}},{key:"itemKey",get:function(){return this.$$.ctx[18]},set:function(E){this.$$set({itemKey:E}),(0,o.yl1)()}},{key:"itemHeight",get:function(){return this.$$.ctx[19]},set:function(E){this.$$set({itemHeight:E}),(0,o.yl1)()}},{key:"buffer",get:function(){return this.$$.ctx[20]},set:function(E){this.$$set({buffer:E}),(0,o.yl1)()}},{key:"stickToBottom",get:function(){return this.$$.ctx[21]},set:function(E){this.$$set({stickToBottom:E}),(0,o.yl1)()}},{key:"scrollbar",get:function(){return this.$$.ctx[1]},set:function(E){this.$$set({scrollbar:E}),(0,o.yl1)()}},{key:"start",get:function(){return this.$$.ctx[16]},set:function(E){this.$$set({start:E}),(0,o.yl1)()}},{key:"end",get:function(){return this.$$.ctx[17]},set:function(E){this.$$set({end:E}),(0,o.yl1)()}},{key:"handler",get:function(){return this.$$.ctx[22]}}]),T}(o.f_C),Ns=gl;function jl(P){var T;return{c:function(){(T=(0,o.bGB)("div")).textContent="Empty",(0,o.Ljt)(T,"slot","empty"),(0,o.Ljt)(T,"class","vc-plugin-empty")},m:function(E,C){(0,o.$Tr)(E,T,C)},p:o.ZTd,d:function(E){E&&(0,o.ogt)(T)}}}function yl(P){var T,E;return(T=new Gc({props:{slot:"item",log:P[16],showTimestamps:P[1],groupHeader:P[16].groupHeader}})).$on("groupCollapsed",P[6]),{c:function(){(0,o.YCL)(T.$$.fragment)},m:function(C,R){(0,o.yef)(T,C,R),E=!0},p:function(C,R){var N={};65536&R&&(N.log=C[16]),2&R&&(N.showTimestamps=C[1]),65536&R&&(N.groupHeader=C[16].groupHeader),T.$set(N)},i:function(C){E||((0,o.Ui)(T.$$.fragment,C),E=!0)},o:function(C){(0,o.etI)(T.$$.fragment,C),E=!1},d:function(C){(0,o.vpE)(T,C)}}}function Bs(P){var T,E;return(T=new Vc.Z({})).$on("filterText",P[5]),{c:function(){(0,o.YCL)(T.$$.fragment)},m:function(C,R){(0,o.yef)(T,C,R),E=!0},p:o.ZTd,i:function(C){E||((0,o.Ui)(T.$$.fragment,C),E=!0)},o:function(C){(0,o.etI)(T.$$.fragment,C),E=!1},d:function(C){(0,o.vpE)(T,C)}}}function bl(P){var T,E,C=P[0]&&Bs(P);return{c:function(){C&&C.c(),T=(0,o.cSb)()},m:function(R,N){C&&C.m(R,N),(0,o.$Tr)(R,T,N),E=!0},p:function(R,N){R[0]?C?(C.p(R,N),1&N&&(0,o.Ui)(C,1)):((C=Bs(R)).c(),(0,o.Ui)(C,1),C.m(T.parentNode,T)):C&&((0,o.dvw)(),(0,o.etI)(C,1,1,function(){C=null}),(0,o.gbL)())},i:function(R){E||((0,o.Ui)(C),E=!0)},o:function(R){(0,o.etI)(C),E=!1},d:function(R){C&&C.d(R),R&&(0,o.ogt)(T)}}}function _l(P){var T,E,C,R;function N(it){P[15](it)}var he={items:P[4],itemKey:"_id",itemHeight:30,buffer:100,stickToBottom:!0,scrollbar:!0,$$slots:{footer:[bl],item:[yl,function(it){return{16:it.item}},function(it){return it.item?65536:0}],empty:[jl]},$$scope:{ctx:P}};return P[3]!==void 0&&(he.handler=P[3]),E=new Ns({props:he}),o.VnY.push(function(){return(0,o.akz)(E,"handler",N)}),{c:function(){T=(0,o.bGB)("div"),(0,o.YCL)(E.$$.fragment),(0,o.Ljt)(T,"class","vc-plugin-content"),(0,o.VHj)(T,"vc-logs-has-cmd",P[0])},m:function(it,st){(0,o.$Tr)(it,T,st),(0,o.yef)(E,T,null),R=!0},p:function(it,st){var ft=st[0],na={};16&ft&&(na.items=it[4]),196611&ft&&(na.$$scope={dirty:ft,ctx:it}),!C&&8&ft&&(C=!0,na.handler=it[3],(0,o.hjT)(function(){return C=!1})),E.$set(na),1&ft&&(0,o.VHj)(T,"vc-logs-has-cmd",it[0])},i:function(it){R||((0,o.Ui)(E.$$.fragment,it),R=!0)},o:function(it){(0,o.etI)(E.$$.fragment,it),R=!1},d:function(it){it&&(0,o.ogt)(T),(0,o.vpE)(E)}}}function wl(P,T,E){var C,R=o.ZTd;P.$$.on_destroy.push(function(){return R()});var N,he,it=T.pluginId,st=it===void 0?"default":it,ft=T.showCmd,na=ft!==void 0&&ft,ca=T.filterType,oa=ca===void 0?"all":ca,ga=T.showTimestamps,pa=ga!==void 0&&ga,wa=!1,Ta="",Aa=[];return(0,B.H3)(function(){xs.use()}),(0,B.ev)(function(){xs.unuse()}),P.$$set=function(Na){"pluginId"in Na&&E(7,st=Na.pluginId),"showCmd"in Na&&E(0,na=Na.showCmd),"filterType"in Na&&E(8,oa=Na.filterType),"showTimestamps"in Na&&E(1,pa=Na.showTimestamps)},P.$$.update=function(){29056&P.$$.dirty&&(wa||(E(2,N=Xi.O.get(st)),R(),R=(0,o.LdU)(N,function(Na){return E(14,C=Na)}),E(12,wa=!0)),E(4,Aa=C.logList.filter(function(Na){return(oa==="all"||oa===Na.type)&&(Ta===""||(0,Ci.HX)(Na,Ta))&&!Na.groupCollapsed})))},[na,pa,N,he,Aa,function(Na){E(13,Ta=Na.detail.filterText||"")},function(Na){var Fa=Na.detail.groupLabel,or=Na.detail.groupHeader,Ya=Na.detail.isGroupCollapsed;N.update(function(Nr){return Nr.logList.forEach(function(Br){Br.groupLabel===Fa&&(Br.groupHeader>0?Br.groupHeader=or:Br.groupCollapsed=Ya)}),Nr})},st,oa,function(){he.scrollTo(0)},function(){he.scrollTo(Aa.length-1)},{fixedHeight:!0},wa,Ta,C,function(Na){E(3,he=Na)}]}var xl=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,wl,_l,o.N8,{pluginId:7,showCmd:0,filterType:8,showTimestamps:1,scrollToTop:9,scrollToBottom:10,options:11}),C}return(0,b.Z)(T,P),(0,n.Z)(T,[{key:"pluginId",get:function(){return this.$$.ctx[7]},set:function(E){this.$$set({pluginId:E}),(0,o.yl1)()}},{key:"showCmd",get:function(){return this.$$.ctx[0]},set:function(E){this.$$set({showCmd:E}),(0,o.yl1)()}},{key:"filterType",get:function(){return this.$$.ctx[8]},set:function(E){this.$$set({filterType:E}),(0,o.yl1)()}},{key:"showTimestamps",get:function(){return this.$$.ctx[1]},set:function(E){this.$$set({showTimestamps:E}),(0,o.yl1)()}},{key:"scrollToTop",get:function(){return this.$$.ctx[9]}},{key:"scrollToBottom",get:function(){return this.$$.ctx[10]}},{key:"options",get:function(){return this.$$.ctx[11]}}]),T}(o.f_C),kl=xl,Lo=__webpack_require__(5629),Us=function(){function P(T){this.model=void 0,this.pluginId=void 0,this.pluginId=T}return P.prototype.destroy=function(){this.model=void 0},P}(),El=function(P){function T(){for(var C,R=arguments.length,N=new Array(R),he=0;he<R;he++)N[he]=arguments[he];return(C=P.call.apply(P,[this].concat(N))||this).model=Lo.W.getSingleton(Lo.W,"VConsoleLogModel"),C}(0,b.Z)(T,P);var E=T.prototype;return E.log=function(){for(var C=arguments.length,R=new Array(C),N=0;N<C;N++)R[N]=arguments[N];this.addLog.apply(this,["log"].concat(R))},E.info=function(){for(var C=arguments.length,R=new Array(C),N=0;N<C;N++)R[N]=arguments[N];this.addLog.apply(this,["info"].concat(R))},E.debug=function(){for(var C=arguments.length,R=new Array(C),N=0;N<C;N++)R[N]=arguments[N];this.addLog.apply(this,["debug"].concat(R))},E.warn=function(){for(var C=arguments.length,R=new Array(C),N=0;N<C;N++)R[N]=arguments[N];this.addLog.apply(this,["warn"].concat(R))},E.error=function(){for(var C=arguments.length,R=new Array(C),N=0;N<C;N++)R[N]=arguments[N];this.addLog.apply(this,["error"].concat(R))},E.clear=function(){this.model&&this.model.clearPluginLog(this.pluginId)},E.addLog=function(C){if(this.model){for(var R=arguments.length,N=new Array(R>1?R-1:0),he=1;he<R;he++)N[he-1]=arguments[he];N.unshift("["+this.pluginId+"]"),this.model.addLog({type:C,origData:N},{noOrig:!0})}},T}(Us),ns=function(P){function T(C,R){var N;return(N=P.call(this,C,R,kl,{pluginId:C,filterType:"all"})||this).model=Lo.W.getSingleton(Lo.W,"VConsoleLogModel"),N.isReady=!1,N.isShow=!1,N.isInBottom=!0,N.model.bindPlugin(C),N.exporter=new El(C),N}(0,b.Z)(T,P);var E=T.prototype;return E.onReady=function(){var C,R;P.prototype.onReady.call(this),this.model.maxLogNumber=Number((C=this.vConsole.option.log)==null?void 0:C.maxLogNumber)||1e3,this.compInstance.showTimestamps=!((R=this.vConsole.option.log)==null||!R.showTimestamps)},E.onRemove=function(){P.prototype.onRemove.call(this),this.model.unbindPlugin(this.id)},E.onAddTopBar=function(C){for(var R=this,N=["All","Log","Info","Warn","Error"],he=[],it=0;it<N.length;it++)he.push({name:N[it],data:{type:N[it].toLowerCase()},actived:it===0,className:"",onClick:function(st,ft){if(ft.type===R.compInstance.filterType)return!1;R.compInstance.filterType=ft.type}});he[0].className="vc-actived",C(he)},E.onAddTool=function(C){var R=this;C([{name:"Clear",global:!1,onClick:function(N){R.model.clearPluginLog(R.id),R.vConsole.triggerEvent("clearLog")}},{name:"Top",global:!1,onClick:function(N){R.compInstance.scrollToTop()}},{name:"Bottom",global:!1,onClick:function(N){R.compInstance.scrollToBottom()}}])},E.onUpdateOption=function(){var C,R,N,he;((C=this.vConsole.option.log)==null?void 0:C.maxLogNumber)!==this.model.maxLogNumber&&(this.model.maxLogNumber=Number((N=this.vConsole.option.log)==null?void 0:N.maxLogNumber)||1e3),!((R=this.vConsole.option.log)==null||!R.showTimestamps)!==this.compInstance.showTimestamps&&(this.compInstance.showTimestamps=!((he=this.vConsole.option.log)==null||!he.showTimestamps))},T}(hi),qs=function(P){function T(){for(var C,R=arguments.length,N=new Array(R),he=0;he<R;he++)N[he]=arguments[he];return(C=P.call.apply(P,[this].concat(N))||this).onErrorHandler=void 0,C.resourceErrorHandler=void 0,C.rejectionHandler=void 0,C}(0,b.Z)(T,P);var E=T.prototype;return E.onReady=function(){P.prototype.onReady.call(this),this.bindErrors(),this.compInstance.showCmd=!0},E.onRemove=function(){P.prototype.onRemove.call(this),this.unbindErrors()},E.bindErrors=function(){t.FJ(window)&&t.mf(window.addEventListener)&&(this.catchWindowOnError(),this.catchResourceError(),this.catchUnhandledRejection())},E.unbindErrors=function(){t.FJ(window)&&t.mf(window.addEventListener)&&(window.removeEventListener("error",this.onErrorHandler),window.removeEventListener("error",this.resourceErrorHandler),window.removeEventListener("unhandledrejection",this.rejectionHandler))},E.catchWindowOnError=function(){var C=this;this.onErrorHandler=this.onErrorHandler?this.onErrorHandler:function(R){var N=R.message;R.filename&&(N+="\\n\\t"+R.filename.replace(location.origin,""),(R.lineno||R.colno)&&(N+=":"+R.lineno+":"+R.colno)),N+="\\n"+(!!R.error&&!!R.error.stack&&R.error.stack.toString()||""),C.model.addLog({type:"error",origData:[N]},{noOrig:!0})},window.removeEventListener("error",this.onErrorHandler),window.addEventListener("error",this.onErrorHandler)},E.catchResourceError=function(){var C=this;this.resourceErrorHandler=this.resourceErrorHandler?this.resourceErrorHandler:function(R){var N=R.target;if(["link","video","script","img","audio"].indexOf(N.localName)>-1){var he=N.href||N.src||N.currentSrc;C.model.addLog({type:"error",origData:["GET <"+N.localName+"> error: "+he]},{noOrig:!0})}},window.removeEventListener("error",this.resourceErrorHandler),window.addEventListener("error",this.resourceErrorHandler,!0)},E.catchUnhandledRejection=function(){var C=this;this.rejectionHandler=this.rejectionHandler?this.rejectionHandler:function(R){var N=R&&R.reason,he="Uncaught (in promise) ",it=[he,N];N instanceof Error&&(it=[he,{name:N.name,message:N.message,stack:N.stack}]),C.model.addLog({type:"error",origData:it},{noOrig:!0})},window.removeEventListener("unhandledrejection",this.rejectionHandler),window.addEventListener("unhandledrejection",this.rejectionHandler)},T}(ns),zs=function(P){function T(){return P.apply(this,arguments)||this}(0,b.Z)(T,P);var E=T.prototype;return E.onReady=function(){P.prototype.onReady.call(this),this.printSystemInfo()},E.printSystemInfo=function(){var C=navigator.userAgent,R=[],N=C.match(/MicroMessenger\/([\d\.]+)/i),he=N&&N[1]?N[1]:null;location.host==="servicewechat.com"||console.info("[system]","Location:",location.href);var it=C.match(/(ipod).*\s([\d_]+)/i),st=C.match(/(ipad).*\s([\d_]+)/i),ft=C.match(/(iphone)\sos\s([\d_]+)/i),na=C.match(/(android)\s([\d\.]+)/i),ca=C.match(/(Mac OS X)\s([\d_]+)/i);R=[],na?R.push("Android "+na[2]):ft?R.push("iPhone, iOS "+ft[2].replace(/_/g,".")):st?R.push("iPad, iOS "+st[2].replace(/_/g,".")):it?R.push("iPod, iOS "+it[2].replace(/_/g,".")):ca&&R.push("Mac, MacOS "+ca[2].replace(/_/g,".")),he&&R.push("WeChat "+he),console.info("[system]","Client:",R.length?R.join(", "):"Unknown");var oa=C.toLowerCase().match(/ nettype\/([^ ]+)/g);oa&&oa[0]&&(R=[(oa=oa[0].split("/"))[1]],console.info("[system]","Network:",R.length?R.join(", "):"Unknown")),console.info("[system]","UA:",C),setTimeout(function(){var ga=window.performance||window.msPerformance||window.webkitPerformance;if(ga&&ga.timing){var pa=ga.timing;pa.navigationStart&&console.info("[system]","navigationStart:",pa.navigationStart),pa.navigationStart&&pa.domainLookupStart&&console.info("[system]","navigation:",pa.domainLookupStart-pa.navigationStart+"ms"),pa.domainLookupEnd&&pa.domainLookupStart&&console.info("[system]","dns:",pa.domainLookupEnd-pa.domainLookupStart+"ms"),pa.connectEnd&&pa.connectStart&&(pa.connectEnd&&pa.secureConnectionStart?console.info("[system]","tcp (ssl):",pa.connectEnd-pa.connectStart+"ms ("+(pa.connectEnd-pa.secureConnectionStart)+"ms)"):console.info("[system]","tcp:",pa.connectEnd-pa.connectStart+"ms")),pa.responseStart&&pa.requestStart&&console.info("[system]","request:",pa.responseStart-pa.requestStart+"ms"),pa.responseEnd&&pa.responseStart&&console.info("[system]","response:",pa.responseEnd-pa.responseStart+"ms"),pa.domComplete&&pa.domLoading&&(pa.domContentLoadedEventStart&&pa.domLoading?console.info("[system]","domComplete (domLoaded):",pa.domComplete-pa.domLoading+"ms ("+(pa.domContentLoadedEventStart-pa.domLoading)+"ms)"):console.info("[system]","domComplete:",pa.domComplete-pa.domLoading+"ms")),pa.loadEventEnd&&pa.loadEventStart&&console.info("[system]","loadEvent:",pa.loadEventEnd-pa.loadEventStart+"ms"),pa.navigationStart&&pa.loadEventEnd&&console.info("[system]","total (DOM):",pa.loadEventEnd-pa.navigationStart+"ms ("+(pa.domComplete-pa.navigationStart)+"ms)")}},0)},T}(ns),gi=__webpack_require__(3313),Fs=__webpack_require__(643);function ts(P,T){var E=typeof Symbol<"u"&&P[Symbol.iterator]||P["@@iterator"];if(E)return(E=E.call(P)).next.bind(E);if(Array.isArray(P)||(E=function(R,N){if(R){if(typeof R=="string")return Gs(R,N);var he=Object.prototype.toString.call(R).slice(8,-1);if(he==="Object"&&R.constructor&&(he=R.constructor.name),he==="Map"||he==="Set")return Array.from(R);if(he==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(he))return Gs(R,N)}}(P))||T){E&&(P=E);var C=0;return function(){return C>=P.length?{done:!0}:{done:!1,value:P[C++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gs(P,T){(T==null||T>P.length)&&(T=P.length);for(var E=0,C=new Array(T);E<T;E++)C[E]=P[E];return C}var Vs=function(P,T){T===void 0&&(T={}),t.Kn(T)||(T={});var E=P?P.split("?"):[];if(E.shift(),E.length>0)for(var C,R=ts(E=E.join("?").split("&"));!(C=R()).done;){var N=C.value.split("=");try{T[N[0]]=decodeURIComponent(N[1])}catch{T[N[0]]=N[1]}}return T},yo=function(P,T){var E="";switch(P){case"":case"text":case"json":if(t.HD(T))try{E=JSON.parse(T),E=t.hZ(E,{maxDepth:10,keyMaxLen:1e4,pretty:!0,standardJSON:!0})}catch{E=t.id(String(T),1e4)}else t.Kn(T)||t.kJ(T)?E=t.hZ(T,{maxDepth:10,keyMaxLen:1e4,pretty:!0,standardJSON:!0}):T!==void 0&&(E=Object.prototype.toString.call(T));break;default:T!==void 0&&(E=Object.prototype.toString.call(T))}return E},as=function(P){if(!P)return null;var T=null;if(typeof P=="string")try{T=JSON.parse(P)}catch{var E=P.split("&");if(E.length===1)T=P;else{T={};for(var C,R=ts(E);!(C=R()).done;){var N=C.value.split("=");T[N[0]]=N[1]===void 0?"undefined":N[1]}}}else if(t.TW(P)){T={};for(var he,it=ts(P);!(he=it()).done;){var st=he.value,ft=st[0],na=st[1];T[ft]=typeof na=="string"?na:"[object Object]"}}else t.PO(P)?T=P:T="[object "+t.zl(P)+"]";return T},rs=function(P){return P===void 0&&(P=""),P.startsWith("//")&&(P=""+new URL(window.location.href).protocol+P),P.startsWith("http")?new URL(P):new URL(P,window.location.href)},Eo=function(){this.id="",this.name="",this.method="",this.url="",this.status=0,this.statusText="",this.cancelState=0,this.readyState=0,this.header=null,this.responseType="",this.requestType=void 0,this.requestHeader=null,this.response=void 0,this.responseSize=0,this.responseSizeText="",this.startTime=0,this.startTimeText="",this.endTime=0,this.costTime=0,this.getData=null,this.postData=null,this.actived=!1,this.noVConsole=!1,this.id=(0,t.QI)()},Hs=function(P){function T(E){var C;return(C=P.call(this)||this)._response=void 0,new Proxy(E,T.Handler)||(0,l.Z)(C)}return(0,b.Z)(T,P),T}(Eo);Hs.Handler={get:function(P,T){return T==="response"?P._response:Reflect.get(P,T)},set:function(P,T,E){var C;switch(T){case"response":return P._response=yo(P.responseType,E),!0;case"url":var R=((C=E=String(E))==null?void 0:C.replace(new RegExp("[/]*$"),"").split("/").pop())||"Unknown";Reflect.set(P,"name",R);var N=Vs(E,P.getData);Reflect.set(P,"getData",N);break;case"status":var he=String(E)||"Unknown";Reflect.set(P,"statusText",he);break;case"startTime":if(E&&P.endTime){var it=P.endTime-E;Reflect.set(P,"costTime",it)}break;case"endTime":if(E&&P.startTime){var st=E-P.startTime;Reflect.set(P,"costTime",st)}}return Reflect.set(P,T,E)}};var Cl=function(){function P(E,C){var R=this;this.XMLReq=void 0,this.item=void 0,this.onUpdateCallback=void 0,this.XMLReq=E,this.XMLReq.onreadystatechange=function(){R.onReadyStateChange()},this.XMLReq.onabort=function(){R.onAbort()},this.XMLReq.ontimeout=function(){R.onTimeout()},this.item=new Eo,this.item.requestType="xhr",this.onUpdateCallback=C}var T=P.prototype;return T.get=function(E,C){switch(C){case"_noVConsole":return this.item.noVConsole;case"open":return this.getOpen(E);case"send":return this.getSend(E);case"setRequestHeader":return this.getSetRequestHeader(E);default:var R=Reflect.get(E,C);return typeof R=="function"?R.bind(E):R}},T.set=function(E,C,R){switch(C){case"_noVConsole":return void(this.item.noVConsole=!!R);case"onreadystatechange":return this.setOnReadyStateChange(E,C,R);case"onabort":return this.setOnAbort(E,C,R);case"ontimeout":return this.setOnTimeout(E,C,R)}return Reflect.set(E,C,R)},T.onReadyStateChange=function(){this.item.readyState=this.XMLReq.readyState,this.item.responseType=this.XMLReq.responseType,this.item.endTime=Date.now(),this.item.costTime=this.item.endTime-this.item.startTime,this.updateItemByReadyState(),this.item.response=yo(this.item.responseType,this.item.response),this.triggerUpdate()},T.onAbort=function(){this.item.cancelState=1,this.item.statusText="Abort",this.triggerUpdate()},T.onTimeout=function(){this.item.cancelState=3,this.item.statusText="Timeout",this.triggerUpdate()},T.triggerUpdate=function(){this.item.noVConsole||this.onUpdateCallback(this.item)},T.getOpen=function(E){var C=this,R=Reflect.get(E,"open");return function(){for(var N=arguments.length,he=new Array(N),it=0;it<N;it++)he[it]=arguments[it];var st=he[0],ft=he[1];return C.item.method=st?st.toUpperCase():"GET",C.item.url=ft||"",C.item.name=C.item.url.replace(new RegExp("[/]*$"),"").split("/").pop()||"",C.item.getData=Vs(C.item.url,{}),C.triggerUpdate(),R.apply(E,he)}},T.getSend=function(E){var C=this,R=Reflect.get(E,"send");return function(){for(var N=arguments.length,he=new Array(N),it=0;it<N;it++)he[it]=arguments[it];var st=he[0];return C.item.postData=as(st),C.triggerUpdate(),R.apply(E,he)}},T.getSetRequestHeader=function(E){var C=this,R=Reflect.get(E,"setRequestHeader");return function(){C.item.requestHeader||(C.item.requestHeader={});for(var N=arguments.length,he=new Array(N),it=0;it<N;it++)he[it]=arguments[it];return C.item.requestHeader[he[0]]=he[1],C.triggerUpdate(),R.apply(E,he)}},T.setOnReadyStateChange=function(E,C,R){var N=this;return Reflect.set(E,C,function(){N.onReadyStateChange();for(var he=arguments.length,it=new Array(he),st=0;st<he;st++)it[st]=arguments[st];R.apply(E,it)})},T.setOnAbort=function(E,C,R){var N=this;return Reflect.set(E,C,function(){N.onAbort();for(var he=arguments.length,it=new Array(he),st=0;st<he;st++)it[st]=arguments[st];R.apply(E,it)})},T.setOnTimeout=function(E,C,R){var N=this;return Reflect.set(E,C,function(){N.onTimeout();for(var he=arguments.length,it=new Array(he),st=0;st<he;st++)it[st]=arguments[st];R.apply(E,it)})},T.updateItemByReadyState=function(){switch(this.XMLReq.readyState){case 0:case 1:if(this.item.status=0,this.item.statusText="Pending",!this.item.startTime){this.item.startTime=Date.now();var E=(0,t._3)(this.item.startTime);this.item.startTimeText=E.year+"-"+E.month+"-"+E.day+" "+E.hour+":"+E.minute+":"+E.second+"."+E.millisecond}break;case 2:this.item.status=this.XMLReq.status,this.item.statusText="Loading",this.item.header={};for(var C=(this.XMLReq.getAllResponseHeaders()||"").split(`
`),R=0;R<C.length;R++){var N=C[R];if(N){var he=N.split(": "),it=he[0],st=he.slice(1).join(": ");this.item.header[it]=st}}break;case 3:this.item.status=this.XMLReq.status,this.item.statusText="Loading",this.XMLReq.response&&this.XMLReq.response.length&&(this.item.responseSize=this.XMLReq.response.length,this.item.responseSizeText=(0,t.KL)(this.item.responseSize));break;case 4:this.item.status=this.XMLReq.status||this.item.status||0,this.item.statusText=String(this.item.status),this.item.endTime=Date.now(),this.item.costTime=this.item.endTime-(this.item.startTime||this.item.endTime),this.item.response=this.XMLReq.response,this.XMLReq.response&&this.XMLReq.response.length&&(this.item.responseSize=this.XMLReq.response.length,this.item.responseSizeText=(0,t.KL)(this.item.responseSize));break;default:this.item.status=this.XMLReq.status,this.item.statusText="Unknown"}},P}(),is=function(){function P(){}return P.create=function(T){return new Proxy(XMLHttpRequest,{construct:function(E){var C=new E;return new Proxy(C,new Cl(C,T))}})},P}();function os(P,T){var E=typeof Symbol<"u"&&P[Symbol.iterator]||P["@@iterator"];if(E)return(E=E.call(P)).next.bind(E);if(Array.isArray(P)||(E=function(R,N){if(R){if(typeof R=="string")return Ws(R,N);var he=Object.prototype.toString.call(R).slice(8,-1);if(he==="Object"&&R.constructor&&(he=R.constructor.name),he==="Map"||he==="Set")return Array.from(R);if(he==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(he))return Ws(R,N)}}(P))||T){E&&(P=E);var C=0;return function(){return C>=P.length?{done:!0}:{done:!1,value:P[C++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ws(P,T){(T==null||T>P.length)&&(T=P.length);for(var E=0,C=new Array(T);E<T;E++)C[E]=P[E];return C}is.origXMLHttpRequest=XMLHttpRequest;var Tl=function(){function P(E,C,R){this.resp=void 0,this.item=void 0,this.onUpdateCallback=void 0,this.resp=E,this.item=C,this.onUpdateCallback=R,this.mockReader()}var T=P.prototype;return T.set=function(E,C,R){return Reflect.set(E,C,R)},T.get=function(E,C){var R=this,N=Reflect.get(E,C);switch(C){case"arrayBuffer":case"blob":case"formData":case"json":case"text":return function(){return R.item.responseType=C.toLowerCase(),N.apply(E).then(function(he){return R.item.response=yo(R.item.responseType,he),R.onUpdateCallback(R.item),he})}}return typeof N=="function"?N.bind(E):N},T.mockReader=function(){var E,C=this;if(this.resp.body&&typeof this.resp.body.getReader=="function"){var R=this.resp.body.getReader;this.resp.body.getReader=function(){var N=R.apply(C.resp.body);if(C.item.readyState===4)return N;var he=N.read,it=N.cancel;return C.item.responseType="arraybuffer",N.read=function(){return he.apply(N).then(function(st){if(E){var ft=new Uint8Array(E.length+st.value.length);ft.set(E),ft.set(st.value,E.length),E=ft}else E=new Uint8Array(st.value);return C.item.endTime=Date.now(),C.item.costTime=C.item.endTime-(C.item.startTime||C.item.endTime),C.item.readyState=st.done?4:3,C.item.statusText=st.done?String(C.item.status):"Loading",C.item.responseSize=E.length,C.item.responseSizeText=t.KL(C.item.responseSize),st.done&&(C.item.response=yo(C.item.responseType,E)),C.onUpdateCallback(C.item),st})},N.cancel=function(){C.item.cancelState=2,C.item.statusText="Cancel",C.item.endTime=Date.now(),C.item.costTime=C.item.endTime-(C.item.startTime||C.item.endTime),C.item.response=yo(C.item.responseType,E),C.onUpdateCallback(C.item);for(var st=arguments.length,ft=new Array(st),na=0;na<st;na++)ft[na]=arguments[na];return it.apply(N,ft)},N}}},P}(),Sl=function(){function P(E){this.onUpdateCallback=void 0,this.onUpdateCallback=E}var T=P.prototype;return T.apply=function(E,C,R){var N=this,he=R[0],it=R[1],st=new Eo;return this.beforeFetch(st,he,it),E.apply(window,R).then(this.afterFetch(st)).catch(function(ft){throw st.endTime=Date.now(),st.costTime=st.endTime-(st.startTime||st.endTime),N.onUpdateCallback(st),ft})},T.beforeFetch=function(E,C,R){var N,he="GET",it=null;if(t.HD(C)?(he=(R==null?void 0:R.method)||"GET",N=rs(C),it=(R==null?void 0:R.headers)||null):(he=C.method||"GET",N=rs(C.url),it=C.headers),E.method=he,E.requestType="fetch",E.requestHeader=it,E.url=N.toString(),E.name=(N.pathname.split("/").pop()||"")+N.search,E.status=0,E.statusText="Pending",E.readyState=1,!E.startTime){E.startTime=Date.now();var st=t._3(E.startTime);E.startTimeText=st.year+"-"+st.month+"-"+st.day+" "+st.hour+":"+st.minute+":"+st.second+"."+st.millisecond}if(Object.prototype.toString.call(it)==="[object Headers]"){E.requestHeader={};for(var ft,na=os(it);!(ft=na()).done;){var ca=ft.value,oa=ca[0],ga=ca[1];E.requestHeader[oa]=ga}}else E.requestHeader=it;if(N.search&&N.searchParams){E.getData={};for(var pa,wa=os(N.searchParams);!(pa=wa()).done;){var Ta=pa.value,Aa=Ta[0],Na=Ta[1];E.getData[Aa]=Na}}R!=null&&R.body&&(E.postData=as(R.body)),this.onUpdateCallback(E)},T.afterFetch=function(E){var C=this;return function(R){E.endTime=Date.now(),E.costTime=E.endTime-(E.startTime||E.endTime),E.status=R.status,E.statusText=String(R.status);var N=!1;E.header={};for(var he,it=os(R.headers);!(he=it()).done;){var st=he.value,ft=st[0],na=st[1];E.header[ft]=na,N=na.toLowerCase().indexOf("chunked")>-1||N}return N?E.readyState=3:(E.readyState=4,C.handleResponseBody(R.clone(),E).then(function(ca){E.responseSize=typeof ca=="string"?ca.length:ca.byteLength,E.responseSizeText=t.KL(E.responseSize),E.response=yo(E.responseType,ca),C.onUpdateCallback(E)})),C.onUpdateCallback(E),new Proxy(R,new Tl(R,E,C.onUpdateCallback))}},T.handleResponseBody=function(E,C){var R=E.headers.get("content-type");return R&&R.includes("application/json")?(C.responseType="json",E.text()):R&&(R.includes("text/html")||R.includes("text/plain"))?(C.responseType="text",E.text()):(C.responseType="arraybuffer",E.arrayBuffer())},P}(),ss=function(){function P(){}return P.create=function(T){return new Proxy(fetch,new Sl(T))},P}();function Ol(P,T){var E=typeof Symbol<"u"&&P[Symbol.iterator]||P["@@iterator"];if(E)return(E=E.call(P)).next.bind(E);if(Array.isArray(P)||(E=function(R,N){if(R){if(typeof R=="string")return Ks(R,N);var he=Object.prototype.toString.call(R).slice(8,-1);if(he==="Object"&&R.constructor&&(he=R.constructor.name),he==="Map"||he==="Set")return Array.from(R);if(he==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(he))return Ks(R,N)}}(P))||T){E&&(P=E);var C=0;return function(){return C>=P.length?{done:!0}:{done:!1,value:P[C++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ks(P,T){(T==null||T>P.length)&&(T=P.length);for(var E=0,C=new Array(T);E<T;E++)C[E]=P[E];return C}ss.origFetch=fetch;var $l=function(P){return P instanceof Blob?P.type:P instanceof FormData?"multipart/form-data":P instanceof URLSearchParams?"application/x-www-form-urlencoded;charset=UTF-8":"text/plain;charset=UTF-8"},Il=function(){function P(T){this.onUpdateCallback=void 0,this.onUpdateCallback=T}return P.prototype.apply=function(T,E,C){var R=C[0],N=C[1],he=new Eo,it=rs(R);if(he.method="POST",he.url=R,he.name=(it.pathname.split("/").pop()||"")+it.search,he.requestType="ping",he.requestHeader={"Content-Type":$l(N)},he.status=0,he.statusText="Pending",it.search&&it.searchParams){he.getData={};for(var st,ft=Ol(it.searchParams);!(st=ft()).done;){var na=st.value,ca=na[0],oa=na[1];he.getData[ca]=oa}}he.postData=as(N),he.startTime||(he.startTime=Date.now()),this.onUpdateCallback(he);var ga=T.apply(E,C);return ga?(he.endTime=Date.now(),he.costTime=he.endTime-(he.startTime||he.endTime),he.status=0,he.statusText="Sent",he.readyState=4):(he.status=500,he.statusText="Unknown"),this.onUpdateCallback(he),ga},P}(),cs=function(){function P(){}return P.create=function(T){return new Proxy(navigator.sendBeacon,new Il(T))},P}();cs.origSendBeacon=navigator.sendBeacon;var so=(0,gi.fZ)({}),Do=function(P){function T(){var C;return(C=P.call(this)||this).maxNetworkNumber=1e3,C.ignoreUrlRegExp=void 0,C.itemCounter=0,C.mockXHR(),C.mockFetch(),C.mockSendBeacon(),C}(0,b.Z)(T,P);var E=T.prototype;return E.unMock=function(){window.hasOwnProperty("XMLHttpRequest")&&(window.XMLHttpRequest=is.origXMLHttpRequest),window.hasOwnProperty("fetch")&&(window.fetch=ss.origFetch),window.navigator.sendBeacon&&(window.navigator.sendBeacon=cs.origSendBeacon)},E.clearLog=function(){so.set({})},E.updateRequest=function(C,R){var N,he=R.url;if(!he||(N=this.ignoreUrlRegExp)==null||!N.test(he)){var it=(0,gi.U2)(so),st=!!it[C];if(st){var ft=it[C];for(var na in R)ft[na]=R[na];R=ft}so.update(function(ca){return ca[C]=R,ca}),st||(ja.x.updateTime(),this.limitListLength())}},E.mockXHR=function(){var C=this;window.hasOwnProperty("XMLHttpRequest")&&(window.XMLHttpRequest=is.create(function(R){C.updateRequest(R.id,R)}))},E.mockFetch=function(){var C=this;window.hasOwnProperty("fetch")&&(window.fetch=ss.create(function(R){C.updateRequest(R.id,R)}))},E.mockSendBeacon=function(){var C,R,N=this;(C=window)!=null&&(R=C.navigator)!=null&&R.sendBeacon&&(window.navigator.sendBeacon=cs.create(function(he){N.updateRequest(he.id,he)}))},E.limitListLength=function(){var C=this;if(this.itemCounter++,this.itemCounter%10==0){this.itemCounter=0;var R=(0,gi.U2)(so),N=Object.keys(R);N.length>this.maxNetworkNumber-10&&so.update(function(he){for(var it=N.splice(0,N.length-C.maxNetworkNumber+10),st=0;st<it.length;st++)he[it[st]]=void 0,delete he[it[st]];return he})}},T}(Fs.N),Po=__webpack_require__(8747),Co={};Po.Z&&Po.Z.locals&&(Co.locals=Po.Z.locals);var ls,ds=0,po={};po.styleTagTransform=la(),po.setAttributes=ta(),po.insert=lt().bind(null,"head"),po.domAPI=ct(),po.insertStyleElement=aa(),Co.use=function(P){return po.options=P||{},ds++||(ls=at()(Po.Z,po)),Co},Co.unuse=function(){ds>0&&!--ds&&(ls(),ls=null)};var Xs=Co;function Zs(P,T,E){var C=P.slice();return C[11]=T[E][0],C[12]=T[E][1],C}function Ys(P,T,E){var C=P.slice();return C[11]=T[E][0],C[12]=T[E][1],C}function Js(P,T,E){var C=P.slice();return C[11]=T[E][0],C[12]=T[E][1],C}function Qs(P,T,E){var C=P.slice();return C[11]=T[E][0],C[12]=T[E][1],C}function ec(P){var T,E,C;return{c:function(){T=(0,o.fLW)("("),E=(0,o.fLW)(P[0]),C=(0,o.fLW)(")")},m:function(R,N){(0,o.$Tr)(R,T,N),(0,o.$Tr)(R,E,N),(0,o.$Tr)(R,C,N)},p:function(R,N){1&N&&(0,o.rTO)(E,R[0])},d:function(R){R&&(0,o.ogt)(T),R&&(0,o.ogt)(E),R&&(0,o.ogt)(C)}}}function Rl(P){var T,E,C,R,N,he,it=P[0]>0&&ec(P);return{c:function(){T=(0,o.bGB)("dl"),E=(0,o.bGB)("dd"),C=(0,o.fLW)("Name "),it&&it.c(),(R=(0,o.bGB)("dd")).textContent="Method",(N=(0,o.bGB)("dd")).textContent="Status",(he=(0,o.bGB)("dd")).textContent="Time",(0,o.Ljt)(E,"class","vc-table-col vc-table-col-4"),(0,o.Ljt)(R,"class","vc-table-col"),(0,o.Ljt)(N,"class","vc-table-col"),(0,o.Ljt)(he,"class","vc-table-col"),(0,o.Ljt)(T,"class","vc-table-row")},m:function(st,ft){(0,o.$Tr)(st,T,ft),(0,o.R3I)(T,E),(0,o.R3I)(E,C),it&&it.m(E,null),(0,o.R3I)(T,R),(0,o.R3I)(T,N),(0,o.R3I)(T,he)},p:function(st,ft){st[0]>0?it?it.p(st,ft):((it=ec(st)).c(),it.m(E,null)):it&&(it.d(1),it=null)},d:function(st){st&&(0,o.ogt)(T),it&&it.d()}}}function Ll(P){var T;return{c:function(){(T=(0,o.bGB)("div")).textContent="Empty",(0,o.Ljt)(T,"slot","empty"),(0,o.Ljt)(T,"class","vc-plugin-empty")},m:function(E,C){(0,o.$Tr)(E,T,C)},p:o.ZTd,d:function(E){E&&(0,o.ogt)(T)}}}function nc(P){var T,E,C,R,N,he,it,st;he=new ui({props:{content:P[10].requestHeader}});for(var ft=Object.entries(P[10].requestHeader),na=[],ca=0;ca<ft.length;ca+=1)na[ca]=tc(Qs(P,ft,ca));return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("dl"),C=(0,o.bGB)("dt"),R=(0,o.fLW)(`Request Headers
                `),N=(0,o.bGB)("i"),(0,o.YCL)(he.$$.fragment),it=(0,o.DhX)();for(var oa=0;oa<na.length;oa+=1)na[oa].c();(0,o.Ljt)(N,"class","vc-table-row-icon"),(0,o.Ljt)(C,"class","vc-table-col vc-table-col-title"),(0,o.Ljt)(E,"class","vc-table-row vc-left-border")},m:function(oa,ga){(0,o.$Tr)(oa,T,ga),(0,o.R3I)(T,E),(0,o.R3I)(E,C),(0,o.R3I)(C,R),(0,o.R3I)(C,N),(0,o.yef)(he,N,null),(0,o.R3I)(T,it);for(var pa=0;pa<na.length;pa+=1)na[pa].m(T,null);st=!0},p:function(oa,ga){var pa={};if(1024&ga&&(pa.content=oa[10].requestHeader),he.$set(pa),1040&ga){var wa;for(ft=Object.entries(oa[10].requestHeader),wa=0;wa<ft.length;wa+=1){var Ta=Qs(oa,ft,wa);na[wa]?na[wa].p(Ta,ga):(na[wa]=tc(Ta),na[wa].c(),na[wa].m(T,null))}for(;wa<na.length;wa+=1)na[wa].d(1);na.length=ft.length}},i:function(oa){st||((0,o.Ui)(he.$$.fragment,oa),st=!0)},o:function(oa){(0,o.etI)(he.$$.fragment,oa),st=!1},d:function(oa){oa&&(0,o.ogt)(T),(0,o.vpE)(he),(0,o.RMB)(na,oa)}}}function tc(P){var T,E,C,R,N,he,it,st=P[11]+"",ft=P[4](P[12])+"";return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("div"),C=(0,o.fLW)(st),R=(0,o.DhX)(),N=(0,o.bGB)("div"),he=(0,o.fLW)(ft),it=(0,o.DhX)(),(0,o.Ljt)(E,"class","vc-table-col vc-table-col-2"),(0,o.Ljt)(N,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,o.Ljt)(T,"class","vc-table-row vc-left-border vc-small")},m:function(na,ca){(0,o.$Tr)(na,T,ca),(0,o.R3I)(T,E),(0,o.R3I)(E,C),(0,o.R3I)(T,R),(0,o.R3I)(T,N),(0,o.R3I)(N,he),(0,o.R3I)(T,it)},p:function(na,ca){1024&ca&&st!==(st=na[11]+"")&&(0,o.rTO)(C,st),1024&ca&&ft!==(ft=na[4](na[12])+"")&&(0,o.rTO)(he,ft)},d:function(na){na&&(0,o.ogt)(T)}}}function ac(P){var T,E,C,R,N,he,it,st;he=new ui({props:{content:P[10].getData}});for(var ft=Object.entries(P[10].getData),na=[],ca=0;ca<ft.length;ca+=1)na[ca]=rc(Js(P,ft,ca));return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("dl"),C=(0,o.bGB)("dt"),R=(0,o.fLW)(`Query String Parameters
                `),N=(0,o.bGB)("i"),(0,o.YCL)(he.$$.fragment),it=(0,o.DhX)();for(var oa=0;oa<na.length;oa+=1)na[oa].c();(0,o.Ljt)(N,"class","vc-table-row-icon"),(0,o.Ljt)(C,"class","vc-table-col vc-table-col-title"),(0,o.Ljt)(E,"class","vc-table-row vc-left-border")},m:function(oa,ga){(0,o.$Tr)(oa,T,ga),(0,o.R3I)(T,E),(0,o.R3I)(E,C),(0,o.R3I)(C,R),(0,o.R3I)(C,N),(0,o.yef)(he,N,null),(0,o.R3I)(T,it);for(var pa=0;pa<na.length;pa+=1)na[pa].m(T,null);st=!0},p:function(oa,ga){var pa={};if(1024&ga&&(pa.content=oa[10].getData),he.$set(pa),1040&ga){var wa;for(ft=Object.entries(oa[10].getData),wa=0;wa<ft.length;wa+=1){var Ta=Js(oa,ft,wa);na[wa]?na[wa].p(Ta,ga):(na[wa]=rc(Ta),na[wa].c(),na[wa].m(T,null))}for(;wa<na.length;wa+=1)na[wa].d(1);na.length=ft.length}},i:function(oa){st||((0,o.Ui)(he.$$.fragment,oa),st=!0)},o:function(oa){(0,o.etI)(he.$$.fragment,oa),st=!1},d:function(oa){oa&&(0,o.ogt)(T),(0,o.vpE)(he),(0,o.RMB)(na,oa)}}}function rc(P){var T,E,C,R,N,he,it,st=P[11]+"",ft=P[4](P[12])+"";return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("div"),C=(0,o.fLW)(st),R=(0,o.DhX)(),N=(0,o.bGB)("div"),he=(0,o.fLW)(ft),it=(0,o.DhX)(),(0,o.Ljt)(E,"class","vc-table-col vc-table-col-2"),(0,o.Ljt)(N,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,o.Ljt)(T,"class","vc-table-row vc-left-border vc-small")},m:function(na,ca){(0,o.$Tr)(na,T,ca),(0,o.R3I)(T,E),(0,o.R3I)(E,C),(0,o.R3I)(T,R),(0,o.R3I)(T,N),(0,o.R3I)(N,he),(0,o.R3I)(T,it)},p:function(na,ca){1024&ca&&st!==(st=na[11]+"")&&(0,o.rTO)(C,st),1024&ca&&ft!==(ft=na[4](na[12])+"")&&(0,o.rTO)(he,ft)},d:function(na){na&&(0,o.ogt)(T)}}}function ic(P){var T,E,C,R,N,he,it,st;function ft(oa,ga){return typeof oa[10].postData=="string"?Pl:Dl}he=new ui({props:{content:P[10].postData}});var na=ft(P),ca=na(P);return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("dl"),C=(0,o.bGB)("dt"),R=(0,o.fLW)(`Request Payload
                `),N=(0,o.bGB)("i"),(0,o.YCL)(he.$$.fragment),it=(0,o.DhX)(),ca.c(),(0,o.Ljt)(N,"class","vc-table-row-icon"),(0,o.Ljt)(C,"class","vc-table-col vc-table-col-title"),(0,o.Ljt)(E,"class","vc-table-row vc-left-border")},m:function(oa,ga){(0,o.$Tr)(oa,T,ga),(0,o.R3I)(T,E),(0,o.R3I)(E,C),(0,o.R3I)(C,R),(0,o.R3I)(C,N),(0,o.yef)(he,N,null),(0,o.R3I)(T,it),ca.m(T,null),st=!0},p:function(oa,ga){var pa={};1024&ga&&(pa.content=oa[10].postData),he.$set(pa),na===(na=ft(oa))&&ca?ca.p(oa,ga):(ca.d(1),(ca=na(oa))&&(ca.c(),ca.m(T,null)))},i:function(oa){st||((0,o.Ui)(he.$$.fragment,oa),st=!0)},o:function(oa){(0,o.etI)(he.$$.fragment,oa),st=!1},d:function(oa){oa&&(0,o.ogt)(T),(0,o.vpE)(he),ca.d()}}}function Dl(P){for(var T,E=Object.entries(P[10].postData),C=[],R=0;R<E.length;R+=1)C[R]=oc(Ys(P,E,R));return{c:function(){for(var N=0;N<C.length;N+=1)C[N].c();T=(0,o.cSb)()},m:function(N,he){for(var it=0;it<C.length;it+=1)C[it].m(N,he);(0,o.$Tr)(N,T,he)},p:function(N,he){if(1040&he){var it;for(E=Object.entries(N[10].postData),it=0;it<E.length;it+=1){var st=Ys(N,E,it);C[it]?C[it].p(st,he):(C[it]=oc(st),C[it].c(),C[it].m(T.parentNode,T))}for(;it<C.length;it+=1)C[it].d(1);C.length=E.length}},d:function(N){(0,o.RMB)(C,N),N&&(0,o.ogt)(T)}}}function Pl(P){var T,E,C,R=P[10].postData+"";return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("pre"),C=(0,o.fLW)(R),(0,o.Ljt)(E,"class","vc-table-col vc-table-col-value vc-max-height-line"),(0,o.Ljt)(E,"data-scrollable","1"),(0,o.Ljt)(T,"class","vc-table-row vc-left-border vc-small")},m:function(N,he){(0,o.$Tr)(N,T,he),(0,o.R3I)(T,E),(0,o.R3I)(E,C)},p:function(N,he){1024&he&&R!==(R=N[10].postData+"")&&(0,o.rTO)(C,R)},d:function(N){N&&(0,o.ogt)(T)}}}function oc(P){var T,E,C,R,N,he,it,st=P[11]+"",ft=P[4](P[12])+"";return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("div"),C=(0,o.fLW)(st),R=(0,o.DhX)(),N=(0,o.bGB)("div"),he=(0,o.fLW)(ft),it=(0,o.DhX)(),(0,o.Ljt)(E,"class","vc-table-col vc-table-col-2"),(0,o.Ljt)(N,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,o.Ljt)(N,"data-scrollable","1"),(0,o.Ljt)(T,"class","vc-table-row vc-left-border vc-small")},m:function(na,ca){(0,o.$Tr)(na,T,ca),(0,o.R3I)(T,E),(0,o.R3I)(E,C),(0,o.R3I)(T,R),(0,o.R3I)(T,N),(0,o.R3I)(N,he),(0,o.R3I)(T,it)},p:function(na,ca){1024&ca&&st!==(st=na[11]+"")&&(0,o.rTO)(C,st),1024&ca&&ft!==(ft=na[4](na[12])+"")&&(0,o.rTO)(he,ft)},d:function(na){na&&(0,o.ogt)(T)}}}function sc(P){var T,E,C,R,N,he,it,st;he=new ui({props:{content:P[10].header}});for(var ft=Object.entries(P[10].header),na=[],ca=0;ca<ft.length;ca+=1)na[ca]=cc(Zs(P,ft,ca));return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("dl"),C=(0,o.bGB)("dt"),R=(0,o.fLW)(`Response Headers
                `),N=(0,o.bGB)("i"),(0,o.YCL)(he.$$.fragment),it=(0,o.DhX)();for(var oa=0;oa<na.length;oa+=1)na[oa].c();(0,o.Ljt)(N,"class","vc-table-row-icon"),(0,o.Ljt)(C,"class","vc-table-col vc-table-col-title"),(0,o.Ljt)(E,"class","vc-table-row vc-left-border")},m:function(oa,ga){(0,o.$Tr)(oa,T,ga),(0,o.R3I)(T,E),(0,o.R3I)(E,C),(0,o.R3I)(C,R),(0,o.R3I)(C,N),(0,o.yef)(he,N,null),(0,o.R3I)(T,it);for(var pa=0;pa<na.length;pa+=1)na[pa].m(T,null);st=!0},p:function(oa,ga){var pa={};if(1024&ga&&(pa.content=oa[10].header),he.$set(pa),1040&ga){var wa;for(ft=Object.entries(oa[10].header),wa=0;wa<ft.length;wa+=1){var Ta=Zs(oa,ft,wa);na[wa]?na[wa].p(Ta,ga):(na[wa]=cc(Ta),na[wa].c(),na[wa].m(T,null))}for(;wa<na.length;wa+=1)na[wa].d(1);na.length=ft.length}},i:function(oa){st||((0,o.Ui)(he.$$.fragment,oa),st=!0)},o:function(oa){(0,o.etI)(he.$$.fragment,oa),st=!1},d:function(oa){oa&&(0,o.ogt)(T),(0,o.vpE)(he),(0,o.RMB)(na,oa)}}}function cc(P){var T,E,C,R,N,he,it,st=P[11]+"",ft=P[4](P[12])+"";return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("div"),C=(0,o.fLW)(st),R=(0,o.DhX)(),N=(0,o.bGB)("div"),he=(0,o.fLW)(ft),it=(0,o.DhX)(),(0,o.Ljt)(E,"class","vc-table-col vc-table-col-2"),(0,o.Ljt)(N,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,o.Ljt)(T,"class","vc-table-row vc-left-border vc-small")},m:function(na,ca){(0,o.$Tr)(na,T,ca),(0,o.R3I)(T,E),(0,o.R3I)(E,C),(0,o.R3I)(T,R),(0,o.R3I)(T,N),(0,o.R3I)(N,he),(0,o.R3I)(T,it)},p:function(na,ca){1024&ca&&st!==(st=na[11]+"")&&(0,o.rTO)(C,st),1024&ca&&ft!==(ft=na[4](na[12])+"")&&(0,o.rTO)(he,ft)},d:function(na){na&&(0,o.ogt)(T)}}}function lc(P){var T,E,C,R,N,he=P[10].responseSizeText+"";return{c:function(){T=(0,o.bGB)("div"),(E=(0,o.bGB)("div")).textContent="Size",C=(0,o.DhX)(),R=(0,o.bGB)("div"),N=(0,o.fLW)(he),(0,o.Ljt)(E,"class","vc-table-col vc-table-col-2"),(0,o.Ljt)(R,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,o.Ljt)(T,"class","vc-table-row vc-left-border vc-small")},m:function(it,st){(0,o.$Tr)(it,T,st),(0,o.R3I)(T,E),(0,o.R3I)(T,C),(0,o.R3I)(T,R),(0,o.R3I)(R,N)},p:function(it,st){1024&st&&he!==(he=it[10].responseSizeText+"")&&(0,o.rTO)(N,he)},d:function(it){it&&(0,o.ogt)(T)}}}function Al(P){var T,E,C,R,N,he,it,st,ft,na,ca,oa,ga,pa,wa,Ta,Aa,Na,Fa,or,Ya,Nr,Br,zr,Qa,nr,Fr,ci,Gr,Ur,jr,Va,Ka,Kr,Ua,Ja,Ir,Za,Lr,ni,oi,vi,Zr,Pi,pi,Ai,ri,Ui,li,Ki,eo,_o,Oo,Wa,Cr,_r,$r,Hr,Jr,qi,Mi,Ni,si,$i,to,Ii,ps,Pc,Bo=P[10].name+"",Uo=P[10].method+"",qo=P[10].statusText+"",zo=P[10].costTime+"",Fo=P[10].url+"",Go=P[10].method+"",Vo=P[10].requestType+"",Ho=P[10].status+"",Wo=P[10].startTimeText+"",Ko=(P[10].response||"")+"";function pd(){return P[7](P[10])}Na=new ui({props:{handler:P[3],content:P[10]}});var bi=P[10].requestHeader!==null&&nc(P),_i=P[10].getData!==null&&ac(P),wi=P[10].postData!==null&&ic(P),xi=P[10].header!==null&&sc(P);Jr=new ui({props:{content:P[10].response}});var zi=P[10].responseSize>0&&lc(P);return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("dl"),C=(0,o.bGB)("dd"),R=(0,o.fLW)(Bo),N=(0,o.bGB)("dd"),he=(0,o.fLW)(Uo),it=(0,o.bGB)("dd"),st=(0,o.fLW)(qo),ft=(0,o.bGB)("dd"),na=(0,o.fLW)(zo),ca=(0,o.DhX)(),oa=(0,o.bGB)("div"),ga=(0,o.bGB)("div"),pa=(0,o.bGB)("dl"),wa=(0,o.bGB)("dt"),Ta=(0,o.fLW)(`General
                `),Aa=(0,o.bGB)("i"),(0,o.YCL)(Na.$$.fragment),Fa=(0,o.DhX)(),or=(0,o.bGB)("div"),(Ya=(0,o.bGB)("div")).textContent="URL",Nr=(0,o.DhX)(),Br=(0,o.bGB)("div"),zr=(0,o.fLW)(Fo),Qa=(0,o.DhX)(),nr=(0,o.bGB)("div"),(Fr=(0,o.bGB)("div")).textContent="Method",ci=(0,o.DhX)(),Gr=(0,o.bGB)("div"),Ur=(0,o.fLW)(Go),jr=(0,o.DhX)(),Va=(0,o.bGB)("div"),(Ka=(0,o.bGB)("div")).textContent="Request Type",Kr=(0,o.DhX)(),Ua=(0,o.bGB)("div"),Ja=(0,o.fLW)(Vo),Ir=(0,o.DhX)(),Za=(0,o.bGB)("div"),(Lr=(0,o.bGB)("div")).textContent="HTTP Status",ni=(0,o.DhX)(),oi=(0,o.bGB)("div"),vi=(0,o.fLW)(Ho),Zr=(0,o.DhX)(),Pi=(0,o.bGB)("div"),(pi=(0,o.bGB)("div")).textContent="Start Time",Ai=(0,o.DhX)(),ri=(0,o.bGB)("div"),Ui=(0,o.fLW)(Wo),li=(0,o.DhX)(),bi&&bi.c(),Ki=(0,o.DhX)(),_i&&_i.c(),eo=(0,o.DhX)(),wi&&wi.c(),_o=(0,o.DhX)(),xi&&xi.c(),Oo=(0,o.DhX)(),Wa=(0,o.bGB)("div"),Cr=(0,o.bGB)("dl"),_r=(0,o.bGB)("dt"),$r=(0,o.fLW)(`Response
                `),Hr=(0,o.bGB)("i"),(0,o.YCL)(Jr.$$.fragment),qi=(0,o.DhX)(),zi&&zi.c(),Mi=(0,o.DhX)(),Ni=(0,o.bGB)("div"),si=(0,o.bGB)("pre"),$i=(0,o.fLW)(Ko),(0,o.Ljt)(C,"class","vc-table-col vc-table-col-4"),(0,o.Ljt)(N,"class","vc-table-col"),(0,o.Ljt)(it,"class","vc-table-col"),(0,o.Ljt)(ft,"class","vc-table-col"),(0,o.Ljt)(E,"class","vc-table-row vc-group-preview"),(0,o.VHj)(E,"vc-table-row-error",P[10].status>=400),(0,o.Ljt)(Aa,"class","vc-table-row-icon"),(0,o.Ljt)(wa,"class","vc-table-col vc-table-col-title"),(0,o.Ljt)(pa,"class","vc-table-row vc-left-border"),(0,o.Ljt)(Ya,"class","vc-table-col vc-table-col-2"),(0,o.Ljt)(Br,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,o.Ljt)(or,"class","vc-table-row vc-left-border vc-small"),(0,o.Ljt)(Fr,"class","vc-table-col vc-table-col-2"),(0,o.Ljt)(Gr,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,o.Ljt)(nr,"class","vc-table-row vc-left-border vc-small"),(0,o.Ljt)(Ka,"class","vc-table-col vc-table-col-2"),(0,o.Ljt)(Ua,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,o.Ljt)(Va,"class","vc-table-row vc-left-border vc-small"),(0,o.Ljt)(Lr,"class","vc-table-col vc-table-col-2"),(0,o.Ljt)(oi,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,o.Ljt)(Za,"class","vc-table-row vc-left-border vc-small"),(0,o.Ljt)(pi,"class","vc-table-col vc-table-col-2"),(0,o.Ljt)(ri,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,o.Ljt)(Pi,"class","vc-table-row vc-left-border vc-small"),(0,o.Ljt)(Hr,"class","vc-table-row-icon"),(0,o.Ljt)(_r,"class","vc-table-col vc-table-col-title"),(0,o.Ljt)(Cr,"class","vc-table-row vc-left-border"),(0,o.Ljt)(si,"class","vc-table-col vc-max-height vc-min-height"),(0,o.Ljt)(si,"data-scrollable","1"),(0,o.Ljt)(Ni,"class","vc-table-row vc-left-border vc-small"),(0,o.Ljt)(oa,"class","vc-group-detail"),(0,o.Ljt)(T,"slot","item"),(0,o.Ljt)(T,"class","vc-group"),(0,o.Ljt)(T,"id",to=P[10].id),(0,o.VHj)(T,"vc-actived",P[10].actived)},m:function(Fi,Qr){(0,o.$Tr)(Fi,T,Qr),(0,o.R3I)(T,E),(0,o.R3I)(E,C),(0,o.R3I)(C,R),(0,o.R3I)(E,N),(0,o.R3I)(N,he),(0,o.R3I)(E,it),(0,o.R3I)(it,st),(0,o.R3I)(E,ft),(0,o.R3I)(ft,na),(0,o.R3I)(T,ca),(0,o.R3I)(T,oa),(0,o.R3I)(oa,ga),(0,o.R3I)(ga,pa),(0,o.R3I)(pa,wa),(0,o.R3I)(wa,Ta),(0,o.R3I)(wa,Aa),(0,o.yef)(Na,Aa,null),(0,o.R3I)(ga,Fa),(0,o.R3I)(ga,or),(0,o.R3I)(or,Ya),(0,o.R3I)(or,Nr),(0,o.R3I)(or,Br),(0,o.R3I)(Br,zr),(0,o.R3I)(ga,Qa),(0,o.R3I)(ga,nr),(0,o.R3I)(nr,Fr),(0,o.R3I)(nr,ci),(0,o.R3I)(nr,Gr),(0,o.R3I)(Gr,Ur),(0,o.R3I)(ga,jr),(0,o.R3I)(ga,Va),(0,o.R3I)(Va,Ka),(0,o.R3I)(Va,Kr),(0,o.R3I)(Va,Ua),(0,o.R3I)(Ua,Ja),(0,o.R3I)(ga,Ir),(0,o.R3I)(ga,Za),(0,o.R3I)(Za,Lr),(0,o.R3I)(Za,ni),(0,o.R3I)(Za,oi),(0,o.R3I)(oi,vi),(0,o.R3I)(ga,Zr),(0,o.R3I)(ga,Pi),(0,o.R3I)(Pi,pi),(0,o.R3I)(Pi,Ai),(0,o.R3I)(Pi,ri),(0,o.R3I)(ri,Ui),(0,o.R3I)(oa,li),bi&&bi.m(oa,null),(0,o.R3I)(oa,Ki),_i&&_i.m(oa,null),(0,o.R3I)(oa,eo),wi&&wi.m(oa,null),(0,o.R3I)(oa,_o),xi&&xi.m(oa,null),(0,o.R3I)(oa,Oo),(0,o.R3I)(oa,Wa),(0,o.R3I)(Wa,Cr),(0,o.R3I)(Cr,_r),(0,o.R3I)(_r,$r),(0,o.R3I)(_r,Hr),(0,o.yef)(Jr,Hr,null),(0,o.R3I)(Wa,qi),zi&&zi.m(Wa,null),(0,o.R3I)(Wa,Mi),(0,o.R3I)(Wa,Ni),(0,o.R3I)(Ni,si),(0,o.R3I)(si,$i),Ii=!0,ps||(Pc=(0,o.oLt)(E,"click",pd),ps=!0)},p:function(Fi,Qr){P=Fi,(!Ii||1024&Qr)&&Bo!==(Bo=P[10].name+"")&&(0,o.rTO)(R,Bo),(!Ii||1024&Qr)&&Uo!==(Uo=P[10].method+"")&&(0,o.rTO)(he,Uo),(!Ii||1024&Qr)&&qo!==(qo=P[10].statusText+"")&&(0,o.rTO)(st,qo),(!Ii||1024&Qr)&&zo!==(zo=P[10].costTime+"")&&(0,o.rTO)(na,zo),1024&Qr&&(0,o.VHj)(E,"vc-table-row-error",P[10].status>=400);var Ac={};1024&Qr&&(Ac.content=P[10]),Na.$set(Ac),(!Ii||1024&Qr)&&Fo!==(Fo=P[10].url+"")&&(0,o.rTO)(zr,Fo),(!Ii||1024&Qr)&&Go!==(Go=P[10].method+"")&&(0,o.rTO)(Ur,Go),(!Ii||1024&Qr)&&Vo!==(Vo=P[10].requestType+"")&&(0,o.rTO)(Ja,Vo),(!Ii||1024&Qr)&&Ho!==(Ho=P[10].status+"")&&(0,o.rTO)(vi,Ho),(!Ii||1024&Qr)&&Wo!==(Wo=P[10].startTimeText+"")&&(0,o.rTO)(Ui,Wo),P[10].requestHeader!==null?bi?(bi.p(P,Qr),1024&Qr&&(0,o.Ui)(bi,1)):((bi=nc(P)).c(),(0,o.Ui)(bi,1),bi.m(oa,Ki)):bi&&((0,o.dvw)(),(0,o.etI)(bi,1,1,function(){bi=null}),(0,o.gbL)()),P[10].getData!==null?_i?(_i.p(P,Qr),1024&Qr&&(0,o.Ui)(_i,1)):((_i=ac(P)).c(),(0,o.Ui)(_i,1),_i.m(oa,eo)):_i&&((0,o.dvw)(),(0,o.etI)(_i,1,1,function(){_i=null}),(0,o.gbL)()),P[10].postData!==null?wi?(wi.p(P,Qr),1024&Qr&&(0,o.Ui)(wi,1)):((wi=ic(P)).c(),(0,o.Ui)(wi,1),wi.m(oa,_o)):wi&&((0,o.dvw)(),(0,o.etI)(wi,1,1,function(){wi=null}),(0,o.gbL)()),P[10].header!==null?xi?(xi.p(P,Qr),1024&Qr&&(0,o.Ui)(xi,1)):((xi=sc(P)).c(),(0,o.Ui)(xi,1),xi.m(oa,Oo)):xi&&((0,o.dvw)(),(0,o.etI)(xi,1,1,function(){xi=null}),(0,o.gbL)());var Mc={};1024&Qr&&(Mc.content=P[10].response),Jr.$set(Mc),P[10].responseSize>0?zi?zi.p(P,Qr):((zi=lc(P)).c(),zi.m(Wa,Mi)):zi&&(zi.d(1),zi=null),(!Ii||1024&Qr)&&Ko!==(Ko=(P[10].response||"")+"")&&(0,o.rTO)($i,Ko),(!Ii||1024&Qr&&to!==(to=P[10].id))&&(0,o.Ljt)(T,"id",to),1024&Qr&&(0,o.VHj)(T,"vc-actived",P[10].actived)},i:function(Fi){Ii||((0,o.Ui)(Na.$$.fragment,Fi),(0,o.Ui)(bi),(0,o.Ui)(_i),(0,o.Ui)(wi),(0,o.Ui)(xi),(0,o.Ui)(Jr.$$.fragment,Fi),Ii=!0)},o:function(Fi){(0,o.etI)(Na.$$.fragment,Fi),(0,o.etI)(bi),(0,o.etI)(_i),(0,o.etI)(wi),(0,o.etI)(xi),(0,o.etI)(Jr.$$.fragment,Fi),Ii=!1},d:function(Fi){Fi&&(0,o.ogt)(T),(0,o.vpE)(Na),bi&&bi.d(),_i&&_i.d(),wi&&wi.d(),xi&&xi.d(),(0,o.vpE)(Jr),zi&&zi.d(),ps=!1,Pc()}}}function Ml(P){var T,E,C,R;return C=new Ns({props:{items:P[1],itemKey:"id",itemHeight:30,buffer:100,stickToBottom:!0,scrollbar:!0,$$slots:{item:[Al,function(N){return{10:N.item}},function(N){return N.item?1024:0}],empty:[Ll],header:[Rl]},$$scope:{ctx:P}}}),{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("div"),(0,o.YCL)(C.$$.fragment),(0,o.Ljt)(E,"class","vc-plugin-content"),(0,o.Ljt)(T,"class","vc-table")},m:function(N,he){(0,o.$Tr)(N,T,he),(0,o.R3I)(T,E),(0,o.yef)(C,E,null),R=!0},p:function(N,he){var it=he[0],st={};2&it&&(st.items=N[1]),2098177&it&&(st.$$scope={dirty:it,ctx:N}),C.$set(st)},i:function(N){R||((0,o.Ui)(C.$$.fragment,N),R=!0)},o:function(N){(0,o.etI)(C.$$.fragment,N),R=!1},d:function(N){N&&(0,o.ogt)(T),(0,o.vpE)(C)}}}function Nl(P,T,E){var C;(0,o.FIv)(P,so,function(ft){return E(6,C=ft)});var R=0,N=function(ft){E(0,R=Object.keys(ft).length)},he=so.subscribe(N);N(C);var it=[],st=function(ft){(0,o.fxP)(so,C[ft].actived=!C[ft].actived,C)};return(0,B.H3)(function(){Xs.use()}),(0,B.ev)(function(){he(),Xs.unuse()}),P.$$.update=function(){64&P.$$.dirty&&E(1,it=Object.values(C))},[R,it,st,function(ft){var na="curl -X "+ft.method;return typeof ft.postData=="string"?na+=" -d '"+ft.postData+"'":typeof ft.postData=="object"&&ft.postData!==null&&(na+=" -d '"+t.hZ(ft.postData)+"'"),na+" '"+ft.url+"'"},function(ft){return t.Kn(ft)||t.kJ(ft)?t.hZ(ft,{maxDepth:10,keyMaxLen:1e4,pretty:!0}):ft},{fixedHeight:!0},C,function(ft){return st(ft.id)}]}var Bl=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,Nl,Ml,o.N8,{options:5}),C}return(0,b.Z)(T,P),(0,n.Z)(T,[{key:"options",get:function(){return this.$$.ctx[5]}}]),T}(o.f_C),Ul=Bl,ql=function(P){function T(){for(var C,R=arguments.length,N=new Array(R),he=0;he<R;he++)N[he]=arguments[he];return(C=P.call.apply(P,[this].concat(N))||this).model=Do.getSingleton(Do,"VConsoleNetworkModel"),C}(0,b.Z)(T,P);var E=T.prototype;return E.add=function(C){var R=new Hs(new Eo);for(var N in C)R[N]=C[N];return R.startTime=R.startTime||Date.now(),R.requestType=R.requestType||"custom",this.model.updateRequest(R.id,R),R},E.update=function(C,R){this.model.updateRequest(C,R)},E.clear=function(){this.model.clearLog()},T}(Us),dc=function(P){function T(C,R,N){var he;return N===void 0&&(N={}),(he=P.call(this,C,R,Ul,N)||this).model=Do.getSingleton(Do,"VConsoleNetworkModel"),he.exporter=void 0,he.exporter=new ql(C),he}(0,b.Z)(T,P);var E=T.prototype;return E.onReady=function(){P.prototype.onReady.call(this),this.onUpdateOption()},E.onAddTool=function(C){var R=this;C([{name:"Clear",global:!1,onClick:function(N){R.model.clearLog()}}])},E.onRemove=function(){P.prototype.onRemove.call(this),this.model&&this.model.unMock()},E.onUpdateOption=function(){var C,R,N;((C=this.vConsole.option.network)==null?void 0:C.maxNetworkNumber)!==this.model.maxNetworkNumber&&(this.model.maxNetworkNumber=Number((N=this.vConsole.option.network)==null?void 0:N.maxNetworkNumber)||1e3),(R=this.vConsole.option.network)!=null&&R.ignoreUrlRegExp&&(this.model.ignoreUrlRegExp=this.vConsole.option.network.ignoreUrlRegExp)},T}(hi),zl=__webpack_require__(8679),Fl=__webpack_require__.n(zl),Ao=(0,gi.fZ)(),To=(0,gi.fZ)(),Mo=__webpack_require__(5670),So={};Mo.Z&&Mo.Z.locals&&(So.locals=Mo.Z.locals);var us,vs=0,fo={};fo.styleTagTransform=la(),fo.setAttributes=ta(),fo.insert=lt().bind(null,"head"),fo.domAPI=ct(),fo.insertStyleElement=aa(),So.use=function(P){return fo.options=P||{},vs++||(us=at()(Mo.Z,fo)),So},So.unuse=function(){vs>0&&!--vs&&(us(),us=null)};var uc=So;function vc(P,T,E){var C=P.slice();return C[8]=T[E],C}function pc(P,T,E){var C=P.slice();return C[11]=T[E],C}function fc(P){var T,E,C,R=P[0].nodeType===Node.ELEMENT_NODE&&mc(P),N=P[0].nodeType===Node.TEXT_NODE&&wc(P);return{c:function(){T=(0,o.bGB)("div"),R&&R.c(),E=(0,o.DhX)(),N&&N.c(),(0,o.Ljt)(T,"class","vcelm-l"),(0,o.VHj)(T,"vc-actived",P[0]._isActived),(0,o.VHj)(T,"vc-toggle",P[0]._isExpand),(0,o.VHj)(T,"vcelm-noc",P[0]._isSingleLine)},m:function(he,it){(0,o.$Tr)(he,T,it),R&&R.m(T,null),(0,o.R3I)(T,E),N&&N.m(T,null),C=!0},p:function(he,it){he[0].nodeType===Node.ELEMENT_NODE?R?(R.p(he,it),1&it&&(0,o.Ui)(R,1)):((R=mc(he)).c(),(0,o.Ui)(R,1),R.m(T,E)):R&&((0,o.dvw)(),(0,o.etI)(R,1,1,function(){R=null}),(0,o.gbL)()),he[0].nodeType===Node.TEXT_NODE?N?N.p(he,it):((N=wc(he)).c(),N.m(T,null)):N&&(N.d(1),N=null),1&it&&(0,o.VHj)(T,"vc-actived",he[0]._isActived),1&it&&(0,o.VHj)(T,"vc-toggle",he[0]._isExpand),1&it&&(0,o.VHj)(T,"vcelm-noc",he[0]._isSingleLine)},i:function(he){C||((0,o.Ui)(R),C=!0)},o:function(he){(0,o.etI)(R),C=!1},d:function(he){he&&(0,o.ogt)(T),R&&R.d(),N&&N.d()}}}function mc(P){var T,E,C,R,N,he,it,st,ft,na,ca=P[0].nodeName+"",oa=(P[0].className||P[0].attributes.length)&&hc(P),ga=P[0]._isNullEndTag&&jc(),pa=P[0].childNodes.length>0&&yc(P),wa=!P[0]._isNullEndTag&&_c(P);return{c:function(){T=(0,o.bGB)("span"),E=(0,o.fLW)("<"),C=(0,o.fLW)(ca),oa&&oa.c(),R=(0,o.cSb)(),ga&&ga.c(),N=(0,o.fLW)(">"),pa&&pa.c(),he=(0,o.cSb)(),wa&&wa.c(),it=(0,o.cSb)(),(0,o.Ljt)(T,"class","vcelm-node")},m:function(Ta,Aa){(0,o.$Tr)(Ta,T,Aa),(0,o.R3I)(T,E),(0,o.R3I)(T,C),oa&&oa.m(T,null),(0,o.R3I)(T,R),ga&&ga.m(T,null),(0,o.R3I)(T,N),pa&&pa.m(Ta,Aa),(0,o.$Tr)(Ta,he,Aa),wa&&wa.m(Ta,Aa),(0,o.$Tr)(Ta,it,Aa),st=!0,ft||(na=(0,o.oLt)(T,"click",P[2]),ft=!0)},p:function(Ta,Aa){(!st||1&Aa)&&ca!==(ca=Ta[0].nodeName+"")&&(0,o.rTO)(C,ca),Ta[0].className||Ta[0].attributes.length?oa?oa.p(Ta,Aa):((oa=hc(Ta)).c(),oa.m(T,R)):oa&&(oa.d(1),oa=null),Ta[0]._isNullEndTag?ga||((ga=jc()).c(),ga.m(T,N)):ga&&(ga.d(1),ga=null),Ta[0].childNodes.length>0?pa?(pa.p(Ta,Aa),1&Aa&&(0,o.Ui)(pa,1)):((pa=yc(Ta)).c(),(0,o.Ui)(pa,1),pa.m(he.parentNode,he)):pa&&((0,o.dvw)(),(0,o.etI)(pa,1,1,function(){pa=null}),(0,o.gbL)()),Ta[0]._isNullEndTag?wa&&(wa.d(1),wa=null):wa?wa.p(Ta,Aa):((wa=_c(Ta)).c(),wa.m(it.parentNode,it))},i:function(Ta){st||((0,o.Ui)(pa),st=!0)},o:function(Ta){(0,o.etI)(pa),st=!1},d:function(Ta){Ta&&(0,o.ogt)(T),oa&&oa.d(),ga&&ga.d(),pa&&pa.d(Ta),Ta&&(0,o.ogt)(he),wa&&wa.d(Ta),Ta&&(0,o.ogt)(it),ft=!1,na()}}}function hc(P){for(var T,E=P[0].attributes,C=[],R=0;R<E.length;R+=1)C[R]=gc(pc(P,E,R));return{c:function(){T=(0,o.bGB)("i");for(var N=0;N<C.length;N+=1)C[N].c();(0,o.Ljt)(T,"class","vcelm-k")},m:function(N,he){(0,o.$Tr)(N,T,he);for(var it=0;it<C.length;it+=1)C[it].m(T,null)},p:function(N,he){if(1&he){var it;for(E=N[0].attributes,it=0;it<E.length;it+=1){var st=pc(N,E,it);C[it]?C[it].p(st,he):(C[it]=gc(st),C[it].c(),C[it].m(T,null))}for(;it<C.length;it+=1)C[it].d(1);C.length=E.length}},d:function(N){N&&(0,o.ogt)(T),(0,o.RMB)(C,N)}}}function Gl(P){var T,E=P[11].name+"";return{c:function(){T=(0,o.fLW)(E)},m:function(C,R){(0,o.$Tr)(C,T,R)},p:function(C,R){1&R&&E!==(E=C[11].name+"")&&(0,o.rTO)(T,E)},d:function(C){C&&(0,o.ogt)(T)}}}function Vl(P){var T,E,C,R,N,he=P[11].name+"",it=P[11].value+"";return{c:function(){T=(0,o.fLW)(he),E=(0,o.fLW)('="'),C=(0,o.bGB)("i"),R=(0,o.fLW)(it),N=(0,o.fLW)('"'),(0,o.Ljt)(C,"class","vcelm-v")},m:function(st,ft){(0,o.$Tr)(st,T,ft),(0,o.$Tr)(st,E,ft),(0,o.$Tr)(st,C,ft),(0,o.R3I)(C,R),(0,o.$Tr)(st,N,ft)},p:function(st,ft){1&ft&&he!==(he=st[11].name+"")&&(0,o.rTO)(T,he),1&ft&&it!==(it=st[11].value+"")&&(0,o.rTO)(R,it)},d:function(st){st&&(0,o.ogt)(T),st&&(0,o.ogt)(E),st&&(0,o.ogt)(C),st&&(0,o.ogt)(N)}}}function gc(P){var T,E;function C(he,it){return he[11].value!==""?Vl:Gl}var R=C(P),N=R(P);return{c:function(){T=(0,o.fLW)(` 
            `),N.c(),E=(0,o.cSb)()},m:function(he,it){(0,o.$Tr)(he,T,it),N.m(he,it),(0,o.$Tr)(he,E,it)},p:function(he,it){R===(R=C(he))&&N?N.p(he,it):(N.d(1),(N=R(he))&&(N.c(),N.m(E.parentNode,E)))},d:function(he){he&&(0,o.ogt)(T),N.d(he),he&&(0,o.ogt)(E)}}}function jc(P){var T;return{c:function(){T=(0,o.fLW)("/")},m:function(E,C){(0,o.$Tr)(E,T,C)},d:function(E){E&&(0,o.ogt)(T)}}}function yc(P){var T,E,C,R,N=[Wl,Hl],he=[];function it(st,ft){return st[0]._isExpand?1:0}return T=it(P),E=he[T]=N[T](P),{c:function(){E.c(),C=(0,o.cSb)()},m:function(st,ft){he[T].m(st,ft),(0,o.$Tr)(st,C,ft),R=!0},p:function(st,ft){var na=T;(T=it(st))===na?he[T].p(st,ft):((0,o.dvw)(),(0,o.etI)(he[na],1,1,function(){he[na]=null}),(0,o.gbL)(),(E=he[T])?E.p(st,ft):(E=he[T]=N[T](st)).c(),(0,o.Ui)(E,1),E.m(C.parentNode,C))},i:function(st){R||((0,o.Ui)(E),R=!0)},o:function(st){(0,o.etI)(E),R=!1},d:function(st){he[T].d(st),st&&(0,o.ogt)(C)}}}function Hl(P){for(var T,E,C=P[0].childNodes,R=[],N=0;N<C.length;N+=1)R[N]=bc(vc(P,C,N));var he=function(it){return(0,o.etI)(R[it],1,1,function(){R[it]=null})};return{c:function(){for(var it=0;it<R.length;it+=1)R[it].c();T=(0,o.cSb)()},m:function(it,st){for(var ft=0;ft<R.length;ft+=1)R[ft].m(it,st);(0,o.$Tr)(it,T,st),E=!0},p:function(it,st){if(1&st){var ft;for(C=it[0].childNodes,ft=0;ft<C.length;ft+=1){var na=vc(it,C,ft);R[ft]?(R[ft].p(na,st),(0,o.Ui)(R[ft],1)):(R[ft]=bc(na),R[ft].c(),(0,o.Ui)(R[ft],1),R[ft].m(T.parentNode,T))}for((0,o.dvw)(),ft=C.length;ft<R.length;ft+=1)he(ft);(0,o.gbL)()}},i:function(it){if(!E){for(var st=0;st<C.length;st+=1)(0,o.Ui)(R[st]);E=!0}},o:function(it){R=R.filter(Boolean);for(var st=0;st<R.length;st+=1)(0,o.etI)(R[st]);E=!1},d:function(it){(0,o.RMB)(R,it),it&&(0,o.ogt)(T)}}}function Wl(P){var T;return{c:function(){T=(0,o.fLW)("...")},m:function(E,C){(0,o.$Tr)(E,T,C)},p:o.ZTd,i:o.ZTd,o:o.ZTd,d:function(E){E&&(0,o.ogt)(T)}}}function bc(P){var T,E,C;return(T=new xc({props:{node:P[8]}})).$on("toggleNode",P[4]),{c:function(){(0,o.YCL)(T.$$.fragment),E=(0,o.DhX)()},m:function(R,N){(0,o.yef)(T,R,N),(0,o.$Tr)(R,E,N),C=!0},p:function(R,N){var he={};1&N&&(he.node=R[8]),T.$set(he)},i:function(R){C||((0,o.Ui)(T.$$.fragment,R),C=!0)},o:function(R){(0,o.etI)(T.$$.fragment,R),C=!1},d:function(R){(0,o.vpE)(T,R),R&&(0,o.ogt)(E)}}}function _c(P){var T,E,C,R,N=P[0].nodeName+"";return{c:function(){T=(0,o.bGB)("span"),E=(0,o.fLW)("</"),C=(0,o.fLW)(N),R=(0,o.fLW)(">"),(0,o.Ljt)(T,"class","vcelm-node")},m:function(he,it){(0,o.$Tr)(he,T,it),(0,o.R3I)(T,E),(0,o.R3I)(T,C),(0,o.R3I)(T,R)},p:function(he,it){1&it&&N!==(N=he[0].nodeName+"")&&(0,o.rTO)(C,N)},d:function(he){he&&(0,o.ogt)(T)}}}function wc(P){var T,E,C=P[1](P[0].textContent)+"";return{c:function(){T=(0,o.bGB)("span"),E=(0,o.fLW)(C),(0,o.Ljt)(T,"class","vcelm-t vcelm-noc")},m:function(R,N){(0,o.$Tr)(R,T,N),(0,o.R3I)(T,E)},p:function(R,N){1&N&&C!==(C=R[1](R[0].textContent)+"")&&(0,o.rTO)(E,C)},d:function(R){R&&(0,o.ogt)(T)}}}function Kl(P){var T,E,C=P[0]&&fc(P);return{c:function(){C&&C.c(),T=(0,o.cSb)()},m:function(R,N){C&&C.m(R,N),(0,o.$Tr)(R,T,N),E=!0},p:function(R,N){var he=N[0];R[0]?C?(C.p(R,he),1&he&&(0,o.Ui)(C,1)):((C=fc(R)).c(),(0,o.Ui)(C,1),C.m(T.parentNode,T)):C&&((0,o.dvw)(),(0,o.etI)(C,1,1,function(){C=null}),(0,o.gbL)())},i:function(R){E||((0,o.Ui)(C),E=!0)},o:function(R){(0,o.etI)(C),E=!1},d:function(R){C&&C.d(R),R&&(0,o.ogt)(T)}}}function Xl(P,T,E){var C;(0,o.FIv)(P,To,function(it){return E(3,C=it)});var R=T.node,N=(0,B.x)(),he=["br","hr","img","input","link","meta"];return(0,B.H3)(function(){uc.use()}),(0,B.ev)(function(){uc.unuse()}),P.$$set=function(it){"node"in it&&E(0,R=it.node)},P.$$.update=function(){9&P.$$.dirty&&R&&(E(0,R._isActived=R===C,R),E(0,R._isNullEndTag=function(it){return he.indexOf(it.nodeName)>-1}(R),R),E(0,R._isSingleLine=R.childNodes.length===0||R._isNullEndTag,R))},[R,function(it){return it.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},function(){R._isNullEndTag||(E(0,R._isExpand=!R._isExpand,R),N("toggleNode",{node:R}))},C,function(it){o.cKT.call(this,P,it)}]}var xc=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,Xl,Kl,o.N8,{node:0}),C}return(0,b.Z)(T,P),(0,n.Z)(T,[{key:"node",get:function(){return this.$$.ctx[0]},set:function(E){this.$$set({node:E}),(0,o.yl1)()}}]),T}(o.f_C),Zl=xc;function Yl(P){var T,E,C;return(E=new Zl({props:{node:P[0]}})).$on("toggleNode",P[1]),{c:function(){T=(0,o.bGB)("div"),(0,o.YCL)(E.$$.fragment),(0,o.Ljt)(T,"class","vc-plugin-content")},m:function(R,N){(0,o.$Tr)(R,T,N),(0,o.yef)(E,T,null),C=!0},p:function(R,N){var he={};1&N[0]&&(he.node=R[0]),E.$set(he)},i:function(R){C||((0,o.Ui)(E.$$.fragment,R),C=!0)},o:function(R){(0,o.etI)(E.$$.fragment,R),C=!1},d:function(R){R&&(0,o.ogt)(T),(0,o.vpE)(E)}}}function Jl(P,T,E){var C;return(0,o.FIv)(P,Ao,function(R){return E(0,C=R)}),[C,function(R){o.cKT.call(this,P,R)}]}var Ql=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,Jl,Yl,o.N8,{}),C}return(0,b.Z)(T,P),T}(o.f_C),ed=Ql,kc=function(P){function T(C,R,N){var he;return N===void 0&&(N={}),(he=P.call(this,C,R,ed,N)||this).isInited=!1,he.observer=void 0,he.nodeMap=void 0,he}(0,b.Z)(T,P);var E=T.prototype;return E.onShow=function(){this.isInited||this._init()},E.onRemove=function(){P.prototype.onRemove.call(this),this.isInited&&(this.observer.disconnect(),this.isInited=!1,this.nodeMap=void 0,Ao.set(void 0))},E.onAddTool=function(C){var R=this;C([{name:"Expand",global:!1,onClick:function(N){R._expandActivedNode()}},{name:"Collapse",global:!1,onClick:function(N){R._collapseActivedNode()}}])},E._init=function(){var C=this;this.isInited=!0,this.nodeMap=new WeakMap;var R=this._generateVNode(document.documentElement);R._isExpand=!0,To.set(R),Ao.set(R),this.compInstance.$on("toggleNode",function(N){To.set(N.detail.node)}),this.observer=new(Fl())(function(N){for(var he=0;he<N.length;he++){var it=N[he];C._isInVConsole(it.target)||C._handleMutation(it)}}),this.observer.observe(document.documentElement,{attributes:!0,childList:!0,characterData:!0,subtree:!0})},E._handleMutation=function(C){switch(C.type){case"childList":C.removedNodes.length>0&&this._onChildRemove(C),C.addedNodes.length>0&&this._onChildAdd(C);break;case"attributes":this._onAttributesChange(C);break;case"characterData":this._onCharacterDataChange(C)}},E._onChildRemove=function(C){var R=this.nodeMap.get(C.target);if(R){for(var N=0;N<C.removedNodes.length;N++){var he=this.nodeMap.get(C.removedNodes[N]);if(he){for(var it=0;it<R.childNodes.length;it++)if(R.childNodes[it]===he){R.childNodes.splice(it,1);break}this.nodeMap.delete(C.removedNodes[N])}}this._refreshStore()}},E._onChildAdd=function(C){var R=this.nodeMap.get(C.target);if(R){for(var N=0;N<C.addedNodes.length;N++){var he=C.addedNodes[N],it=this._generateVNode(he);if(it){var st=void 0,ft=he;do{if(ft.nextSibling===null)break;ft.nodeType===Node.ELEMENT_NODE&&(st=this.nodeMap.get(ft.nextSibling)||void 0),ft=ft.nextSibling}while(st===void 0);if(st===void 0)R.childNodes.push(it);else for(var na=0;na<R.childNodes.length;na++)if(R.childNodes[na]===st){R.childNodes.splice(na,0,it);break}}}this._refreshStore()}},E._onAttributesChange=function(C){this._updateVNodeAttributes(C.target),this._refreshStore()},E._onCharacterDataChange=function(C){var R=this.nodeMap.get(C.target);R&&(R.textContent=C.target.textContent,this._refreshStore())},E._generateVNode=function(C){if(!this._isIgnoredNode(C)){var R={nodeType:C.nodeType,nodeName:C.nodeName.toLowerCase(),textContent:"",id:"",className:"",attributes:[],childNodes:[]};if(this.nodeMap.set(C,R),R.nodeType!=C.TEXT_NODE&&R.nodeType!=C.DOCUMENT_TYPE_NODE||(R.textContent=C.textContent),C.childNodes.length>0){R.childNodes=[];for(var N=0;N<C.childNodes.length;N++){var he=this._generateVNode(C.childNodes[N]);he&&R.childNodes.push(he)}}return this._updateVNodeAttributes(C),R}},E._updateVNodeAttributes=function(C){var R=this.nodeMap.get(C);if(R&&C instanceof Element&&(R.id=C.id||"",R.className=C.className||"",C.hasAttributes&&C.hasAttributes())){R.attributes=[];for(var N=0;N<C.attributes.length;N++)R.attributes.push({name:C.attributes[N].name,value:C.attributes[N].value||""})}},E._expandActivedNode=function(){var C=(0,gi.U2)(To);if(C._isExpand)for(var R=0;R<C.childNodes.length;R++)C.childNodes[R]._isExpand=!0;else C._isExpand=!0;this._refreshStore()},E._collapseActivedNode=function(){var C=(0,gi.U2)(To);if(C._isExpand){for(var R=!1,N=0;N<C.childNodes.length;N++)C.childNodes[N]._isExpand&&(R=!0,C.childNodes[N]._isExpand=!1);R||(C._isExpand=!1),this._refreshStore()}},E._isIgnoredNode=function(C){if(C.nodeType===C.TEXT_NODE){if(C.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$|\n+/g,"")==="")return!0}else if(C.nodeType===C.COMMENT_NODE)return!0;return!1},E._isInVConsole=function(C){for(var R=C;R!==void 0;){if(R.id=="__vconsole")return!0;R=R.parentElement||void 0}return!1},E._refreshStore=function(){Ao.update(function(C){return C})},T}(hi);function Ec(P,T,E,C,R,N,he){try{var it=P[N](he),st=it.value}catch(ft){return void E(ft)}it.done?T(st):Promise.resolve(st).then(C,R)}function bo(P){return function(){var T=this,E=arguments;return new Promise(function(C,R){var N=P.apply(T,E);function he(st){Ec(N,C,R,he,it,"next",st)}function it(st){Ec(N,C,R,he,it,"throw",st)}he(void 0)})}}var nd=__webpack_require__(8270);function Cc(P,T){var E=Object.keys(P);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(P);T&&(C=C.filter(function(R){return Object.getOwnPropertyDescriptor(P,R).enumerable})),E.push.apply(E,C)}return E}function Tc(P){for(var T=1;T<arguments.length;T++){var E=arguments[T]!=null?arguments[T]:{};T%2?Cc(Object(E),!0).forEach(function(C){(0,nd.Z)(P,C,E[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(E)):Cc(Object(E)).forEach(function(C){Object.defineProperty(P,C,Object.getOwnPropertyDescriptor(E,C))})}return P}var Sc=function(P){if(!P||P.length===0)return{};for(var T={},E=P.split(";"),C=0;C<E.length;C++){var R=E[C].indexOf("=");if(!(R<0)){var N=E[C].substring(0,R).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),he=E[C].substring(R+1,E[C].length);try{N=decodeURIComponent(N)}catch{}try{he=decodeURIComponent(he)}catch{}T[N]=he}}return T},Oc=function(P,T,E){typeof document<"u"&&document.cookie!==void 0&&(document.cookie=encodeURIComponent(P)+"="+encodeURIComponent(T)+function(C){C===void 0&&(C={});var R=C,N=R.path,he=R.domain,it=R.expires,st=R.secure,ft=R.sameSite,na=["none","lax","strict"].indexOf((ft||"").toLowerCase())>-1?ft:null;return[N==null?"":";path="+N,he==null?"":";domain="+he,it==null?"":";expires="+it.toUTCString(),st===void 0||st===!1?"":";secure",na===null?"":";SameSite="+na].join("")}(E))},$c=function(){return typeof document>"u"||document.cookie===void 0?"":document.cookie},td=function(){function P(){}var T=P.prototype;return T.key=function(E){return E<this.keys.length?this.keys[E]:null},T.setItem=function(E,C,R){Oc(E,C,R)},T.getItem=function(E){var C=Sc($c());return Object.prototype.hasOwnProperty.call(C,E)?C[E]:null},T.removeItem=function(E,C){for(var R,N,he=["","/"],it=((R=location)==null||(N=R.hostname)==null?void 0:N.split("."))||[];it.length>1;)he.push(it.join(".")),it.shift();for(var st=0;st<he.length;st++)for(var ft,na,ca=((ft=location)==null||(na=ft.pathname)==null?void 0:na.split("/"))||[],oa="";ca.length>0;){oa+=(oa==="/"?"":"/")+ca.shift();var ga=Tc(Tc({},C),{},{path:oa,domain:he[st],expires:new Date(0)});Oc(E,"",ga)}},T.clear=function(){for(var E=[].concat(this.keys),C=0;C<E.length;C++)this.removeItem(E[C])},(0,n.Z)(P,[{key:"length",get:function(){return this.keys.length}},{key:"keys",get:function(){var E=Sc($c());return Object.keys(E).sort()}}]),P}(),ad=function(){function P(){this.keys=[],this.currentSize=0,this.limitSize=0}var T=P.prototype;return T.key=function(E){return E<this.keys.length?this.keys[E]:null},T.prepare=function(){var E=bo(Yr().mark(function C(){var R=this;return Yr().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.abrupt("return",new Promise(function(he,it){(0,t.qt)("getStorageInfo",{success:function(st){R.keys=st?st.keys.sort():[],R.currentSize=st?st.currentSize:0,R.limitSize=st?st.limitSize:0,he(!0)},fail:function(){it(!1)}})}));case 1:case"end":return N.stop()}},C)}));return function(){return E.apply(this,arguments)}}(),T.getItem=function(E){return new Promise(function(C,R){(0,t.qt)("getStorage",{key:E,success:function(N){var he=N.data;if(typeof N.data=="object")try{he=JSON.stringify(N.data)}catch{}C(he)},fail:function(N){R(N)}})})},T.setItem=function(E,C){return new Promise(function(R,N){(0,t.qt)("setStorage",{key:E,data:C,success:function(he){R(he)},fail:function(he){N(he)}})})},T.removeItem=function(E){return new Promise(function(C,R){(0,t.qt)("removeStorage",{key:E,success:function(N){C(N)},fail:function(N){R(N)}})})},T.clear=function(){return new Promise(function(E,C){(0,t.qt)("clearStorage",{success:function(R){E(R)},fail:function(R){C(R)}})})},(0,n.Z)(P,[{key:"length",get:function(){return this.keys.length}}]),P}(),yi={updateTime:(0,gi.fZ)(0),activedName:(0,gi.fZ)(null),defaultStorages:(0,gi.fZ)(["cookies","localStorage","sessionStorage"])},No=function(P){function T(){var C;return(C=P.call(this)||this).storage=new Map,yi.activedName.subscribe(function(R){var N=(0,gi.U2)(yi.defaultStorages);N.length>0&&N.indexOf(R)===-1&&yi.activedName.set(N[0])}),yi.defaultStorages.subscribe(function(R){R.indexOf((0,gi.U2)(yi.activedName))===-1&&yi.activedName.set(R[0]),C.updateEnabledStorages()}),C}(0,b.Z)(T,P);var E=T.prototype;return E.getItem=function(){var C=bo(Yr().mark(function R(N){return Yr().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:if(this.activedStorage){he.next=2;break}return he.abrupt("return","");case 2:return he.next=4,this.promisify(this.activedStorage.getItem(N));case 4:return he.abrupt("return",he.sent);case 5:case"end":return he.stop()}},R,this)}));return function(R){return C.apply(this,arguments)}}(),E.setItem=function(){var C=bo(Yr().mark(function R(N,he){var it;return Yr().wrap(function(st){for(;;)switch(st.prev=st.next){case 0:if(this.activedStorage){st.next=2;break}return st.abrupt("return");case 2:return st.next=4,this.promisify(this.activedStorage.setItem(N,he));case 4:return it=st.sent,this.refresh(),st.abrupt("return",it);case 7:case"end":return st.stop()}},R,this)}));return function(R,N){return C.apply(this,arguments)}}(),E.removeItem=function(){var C=bo(Yr().mark(function R(N){var he;return Yr().wrap(function(it){for(;;)switch(it.prev=it.next){case 0:if(this.activedStorage){it.next=2;break}return it.abrupt("return");case 2:return it.next=4,this.promisify(this.activedStorage.removeItem(N));case 4:return he=it.sent,this.refresh(),it.abrupt("return",he);case 7:case"end":return it.stop()}},R,this)}));return function(R){return C.apply(this,arguments)}}(),E.clear=function(){var C=bo(Yr().mark(function R(){var N;return Yr().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:if(this.activedStorage){he.next=2;break}return he.abrupt("return");case 2:return he.next=4,this.promisify(this.activedStorage.clear());case 4:return N=he.sent,this.refresh(),he.abrupt("return",N);case 7:case"end":return he.stop()}},R,this)}));return function(){return C.apply(this,arguments)}}(),E.refresh=function(){yi.updateTime.set(Date.now())},E.getEntries=function(){var C=bo(Yr().mark(function R(){var N,he,it,st,ft;return Yr().wrap(function(na){for(;;)switch(na.prev=na.next){case 0:if(N=this.activedStorage){na.next=3;break}return na.abrupt("return",[]);case 3:if(typeof N.prepare!="function"){na.next=6;break}return na.next=6,N.prepare();case 6:he=[],it=0;case 8:if(!(it<N.length)){na.next=17;break}return st=N.key(it),na.next=12,this.getItem(st);case 12:ft=na.sent,he.push([st,ft]);case 14:it++,na.next=8;break;case 17:return na.abrupt("return",he);case 18:case"end":return na.stop()}},R,this)}));return function(){return C.apply(this,arguments)}}(),E.updateEnabledStorages=function(){var C=(0,gi.U2)(yi.defaultStorages);C.indexOf("cookies")>-1?document.cookie!==void 0&&this.storage.set("cookies",new td):this.deleteStorage("cookies"),C.indexOf("localStorage")>-1?window.localStorage&&this.storage.set("localStorage",window.localStorage):this.deleteStorage("localStorage"),C.indexOf("sessionStorage")>-1?window.sessionStorage&&this.storage.set("sessionStorage",window.sessionStorage):this.deleteStorage("sessionStorage"),C.indexOf("wxStorage")>-1?(0,t.H_)()&&this.storage.set("wxStorage",new ad):this.deleteStorage("wxStorage")},E.promisify=function(C){return typeof C=="string"||C==null?Promise.resolve(C):C},E.deleteStorage=function(C){this.storage.has(C)&&this.storage.delete(C)},(0,n.Z)(T,[{key:"activedStorage",get:function(){return this.storage.get((0,gi.U2)(yi.activedName))}}]),T}(Fs.N);function Ic(P,T,E){var C=P.slice();return C[20]=T[E][0],C[21]=T[E][1],C[23]=E,C}function Rc(P){var T;return{c:function(){(T=(0,o.bGB)("div")).textContent="Empty",(0,o.Ljt)(T,"class","vc-plugin-empty")},m:function(E,C){(0,o.$Tr)(E,T,C)},p:o.ZTd,d:function(E){E&&(0,o.ogt)(T)}}}function rd(P){var T,E,C,R,N,he=P[20]+"",it=P[5](P[21])+"";return{c:function(){T=(0,o.bGB)("div"),E=(0,o.fLW)(he),C=(0,o.DhX)(),R=(0,o.bGB)("div"),N=(0,o.fLW)(it),(0,o.Ljt)(T,"class","vc-table-col"),(0,o.Ljt)(R,"class","vc-table-col vc-table-col-2")},m:function(st,ft){(0,o.$Tr)(st,T,ft),(0,o.R3I)(T,E),(0,o.$Tr)(st,C,ft),(0,o.$Tr)(st,R,ft),(0,o.R3I)(R,N)},p:function(st,ft){1&ft&&he!==(he=st[20]+"")&&(0,o.rTO)(E,he),1&ft&&it!==(it=st[5](st[21])+"")&&(0,o.rTO)(N,it)},d:function(st){st&&(0,o.ogt)(T),st&&(0,o.ogt)(C),st&&(0,o.ogt)(R)}}}function id(P){var T,E,C,R,N,he,it;return{c:function(){T=(0,o.bGB)("div"),E=(0,o.bGB)("textarea"),C=(0,o.DhX)(),R=(0,o.bGB)("div"),N=(0,o.bGB)("textarea"),(0,o.Ljt)(E,"class","vc-table-input"),(0,o.Ljt)(T,"class","vc-table-col"),(0,o.Ljt)(N,"class","vc-table-input"),(0,o.Ljt)(R,"class","vc-table-col vc-table-col-2")},m:function(st,ft){(0,o.$Tr)(st,T,ft),(0,o.R3I)(T,E),(0,o.BmG)(E,P[2]),(0,o.$Tr)(st,C,ft),(0,o.$Tr)(st,R,ft),(0,o.R3I)(R,N),(0,o.BmG)(N,P[3]),he||(it=[(0,o.oLt)(E,"input",P[11]),(0,o.oLt)(N,"input",P[12])],he=!0)},p:function(st,ft){4&ft&&(0,o.BmG)(E,st[2]),8&ft&&(0,o.BmG)(N,st[3])},d:function(st){st&&(0,o.ogt)(T),st&&(0,o.ogt)(C),st&&(0,o.ogt)(R),he=!1,(0,o.j7q)(it)}}}function od(P){var T,E,C,R,N,he;return(T=new di.Z({props:{name:"delete"}})).$on("click",function(){return P[14](P[20])}),C=new ui({props:{content:[P[20],P[21]].join("=")}}),(N=new di.Z({props:{name:"edit"}})).$on("click",function(){return P[15](P[20],P[21],P[23])}),{c:function(){(0,o.YCL)(T.$$.fragment),E=(0,o.DhX)(),(0,o.YCL)(C.$$.fragment),R=(0,o.DhX)(),(0,o.YCL)(N.$$.fragment)},m:function(it,st){(0,o.yef)(T,it,st),(0,o.$Tr)(it,E,st),(0,o.yef)(C,it,st),(0,o.$Tr)(it,R,st),(0,o.yef)(N,it,st),he=!0},p:function(it,st){P=it;var ft={};1&st&&(ft.content=[P[20],P[21]].join("=")),C.$set(ft)},i:function(it){he||((0,o.Ui)(T.$$.fragment,it),(0,o.Ui)(C.$$.fragment,it),(0,o.Ui)(N.$$.fragment,it),he=!0)},o:function(it){(0,o.etI)(T.$$.fragment,it),(0,o.etI)(C.$$.fragment,it),(0,o.etI)(N.$$.fragment,it),he=!1},d:function(it){(0,o.vpE)(T,it),it&&(0,o.ogt)(E),(0,o.vpE)(C,it),it&&(0,o.ogt)(R),(0,o.vpE)(N,it)}}}function sd(P){var T,E,C,R;return(T=new di.Z({props:{name:"cancel"}})).$on("click",P[9]),(C=new di.Z({props:{name:"done"}})).$on("click",function(){return P[13](P[20])}),{c:function(){(0,o.YCL)(T.$$.fragment),E=(0,o.DhX)(),(0,o.YCL)(C.$$.fragment)},m:function(N,he){(0,o.yef)(T,N,he),(0,o.$Tr)(N,E,he),(0,o.yef)(C,N,he),R=!0},p:function(N,he){P=N},i:function(N){R||((0,o.Ui)(T.$$.fragment,N),(0,o.Ui)(C.$$.fragment,N),R=!0)},o:function(N){(0,o.etI)(T.$$.fragment,N),(0,o.etI)(C.$$.fragment,N),R=!1},d:function(N){(0,o.vpE)(T,N),N&&(0,o.ogt)(E),(0,o.vpE)(C,N)}}}function Lc(P){var T,E,C,R,N,he,it;function st(pa,wa){return pa[1]===pa[23]?id:rd}var ft=st(P),na=ft(P),ca=[sd,od],oa=[];function ga(pa,wa){return pa[1]===pa[23]?0:1}return R=ga(P),N=oa[R]=ca[R](P),{c:function(){T=(0,o.bGB)("div"),na.c(),E=(0,o.DhX)(),C=(0,o.bGB)("div"),N.c(),he=(0,o.DhX)(),(0,o.Ljt)(C,"class","vc-table-col vc-table-col-1 vc-table-action"),(0,o.Ljt)(T,"class","vc-table-row")},m:function(pa,wa){(0,o.$Tr)(pa,T,wa),na.m(T,null),(0,o.R3I)(T,E),(0,o.R3I)(T,C),oa[R].m(C,null),(0,o.R3I)(T,he),it=!0},p:function(pa,wa){ft===(ft=st(pa))&&na?na.p(pa,wa):(na.d(1),(na=ft(pa))&&(na.c(),na.m(T,E)));var Ta=R;(R=ga(pa))===Ta?oa[R].p(pa,wa):((0,o.dvw)(),(0,o.etI)(oa[Ta],1,1,function(){oa[Ta]=null}),(0,o.gbL)(),(N=oa[R])?N.p(pa,wa):(N=oa[R]=ca[R](pa)).c(),(0,o.Ui)(N,1),N.m(C,null))},i:function(pa){it||((0,o.Ui)(N),it=!0)},o:function(pa){(0,o.etI)(N),it=!1},d:function(pa){pa&&(0,o.ogt)(T),na.d(),oa[R].d()}}}function cd(P){for(var T,E,C,R,N=P[0],he=[],it=0;it<N.length;it+=1)he[it]=Lc(Ic(P,N,it));var st=function(na){return(0,o.etI)(he[na],1,1,function(){he[na]=null})},ft=null;return N.length||(ft=Rc()),{c:function(){T=(0,o.bGB)("div"),(E=(0,o.bGB)("div")).innerHTML=`<div class="vc-table-col">Key</div> 
    <div class="vc-table-col vc-table-col-2">Value</div> 
    <div class="vc-table-col vc-table-col-1 vc-table-action"></div>`,C=(0,o.DhX)();for(var na=0;na<he.length;na+=1)he[na].c();ft&&ft.c(),(0,o.Ljt)(E,"class","vc-table-row"),(0,o.Ljt)(T,"class","vc-table")},m:function(na,ca){(0,o.$Tr)(na,T,ca),(0,o.R3I)(T,E),(0,o.R3I)(T,C);for(var oa=0;oa<he.length;oa+=1)he[oa].m(T,null);ft&&ft.m(T,null),R=!0},p:function(na,ca){var oa=ca[0];if(1007&oa){var ga;for(N=na[0],ga=0;ga<N.length;ga+=1){var pa=Ic(na,N,ga);he[ga]?(he[ga].p(pa,oa),(0,o.Ui)(he[ga],1)):(he[ga]=Lc(pa),he[ga].c(),(0,o.Ui)(he[ga],1),he[ga].m(T,null))}for((0,o.dvw)(),ga=N.length;ga<he.length;ga+=1)st(ga);(0,o.gbL)(),!N.length&&ft?ft.p(na,oa):N.length?ft&&(ft.d(1),ft=null):((ft=Rc()).c(),ft.m(T,null))}},i:function(na){if(!R){for(var ca=0;ca<N.length;ca+=1)(0,o.Ui)(he[ca]);R=!0}},o:function(na){he=he.filter(Boolean);for(var ca=0;ca<he.length;ca+=1)(0,o.etI)(he[ca]);R=!1},d:function(na){na&&(0,o.ogt)(T),(0,o.RMB)(he,na),ft&&ft.d()}}}function ld(P,T,E){var C,R=this&&this.__awaiter||function(wa,Ta,Aa,Na){return new(Aa||(Aa=Promise))(function(Fa,or){function Ya(zr){try{Br(Na.next(zr))}catch(Qa){or(Qa)}}function Nr(zr){try{Br(Na.throw(zr))}catch(Qa){or(Qa)}}function Br(zr){var Qa;zr.done?Fa(zr.value):(Qa=zr.value,Qa instanceof Aa?Qa:new Aa(function(nr){nr(Qa)})).then(Ya,Nr)}Br((Na=Na.apply(wa,Ta||[])).next())})},N=No.getSingleton(No,"VConsoleStorageModel"),he=yi.updateTime;(0,o.FIv)(P,he,function(wa){return E(10,C=wa)});var it=[],st=-1,ft="",na="",ca=function(){E(1,st=-1),E(2,ft=""),E(3,na="")},oa=function(wa){return R(void 0,void 0,void 0,Yr().mark(function Ta(){return Yr().wrap(function(Aa){for(;;)switch(Aa.prev=Aa.next){case 0:return Aa.next=2,N.removeItem(wa);case 2:case"end":return Aa.stop()}},Ta)}))},ga=function(wa){return R(void 0,void 0,void 0,Yr().mark(function Ta(){return Yr().wrap(function(Aa){for(;;)switch(Aa.prev=Aa.next){case 0:if(ft===wa){Aa.next=3;break}return Aa.next=3,N.removeItem(wa);case 3:N.setItem(ft,na),ca();case 5:case"end":return Aa.stop()}},Ta)}))},pa=function(wa,Ta,Aa){return R(void 0,void 0,void 0,Yr().mark(function Na(){return Yr().wrap(function(Fa){for(;;)switch(Fa.prev=Fa.next){case 0:E(2,ft=wa),E(3,na=Ta),E(1,st=Aa);case 3:case"end":return Fa.stop()}},Na)}))};return P.$$.update=function(){1024&P.$$.dirty&&C&&R(void 0,void 0,void 0,Yr().mark(function wa(){return Yr().wrap(function(Ta){for(;;)switch(Ta.prev=Ta.next){case 0:return ca(),Ta.t0=E,Ta.next=4,N.getEntries();case 4:Ta.t1=it=Ta.sent,(0,Ta.t0)(0,Ta.t1);case 6:case"end":return Ta.stop()}},wa)}))},[it,st,ft,na,he,function(wa){return(0,t.id)(wa,1024)},oa,ga,pa,function(){ca()},C,function(){ft=this.value,E(2,ft)},function(){na=this.value,E(3,na)},function(wa){return ga(wa)},function(wa){return oa(wa)},function(wa,Ta,Aa){return pa(wa,Ta,Aa)}]}var dd=function(P){function T(E){var C;return C=P.call(this)||this,(0,o.S1n)((0,l.Z)(C),E,ld,cd,o.N8,{}),C}return(0,b.Z)(T,P),T}(o.f_C),ud=dd,Dc=function(P){function T(C,R,N){var he;return N===void 0&&(N={}),(he=P.call(this,C,R,ud,N)||this).model=No.getSingleton(No,"VConsoleStorageModel"),he.onAddTopBarCallback=void 0,he}(0,b.Z)(T,P);var E=T.prototype;return E.onReady=function(){P.prototype.onReady.call(this),this.onUpdateOption()},E.onShow=function(){this.model.refresh()},E.onAddTopBar=function(C){this.onAddTopBarCallback=C,this.updateTopBar()},E.onAddTool=function(C){var R=this;C([{name:"Add",global:!1,onClick:function(){R.model.setItem("new_"+Date.now(),"new_value")}},{name:"Refresh",global:!1,onClick:function(){R.model.refresh()}},{name:"Clear",global:!1,onClick:function(){R.model.clear()}}])},E.onUpdateOption=function(){var C,R=(C=this.vConsole.option.storage)==null?void 0:C.defaultStorages;(0,t.kJ)(R)&&(R=R.length>0?R:["cookies"])!==(0,gi.U2)(yi.defaultStorages)&&(yi.defaultStorages.set(R),yi.activedName.set(R[0]),this.updateTopBar())},E.updateTopBar=function(){var C=this;if(typeof this.onAddTopBarCallback=="function"){for(var R=(0,gi.U2)(yi.defaultStorages),N=[],he=0;he<R.length;he++){var it=R[he];N.push({name:it[0].toUpperCase()+it.substring(1),data:{name:it},actived:it===(0,gi.U2)(yi.activedName),onClick:function(st,ft){var na=(0,gi.U2)(yi.activedName);if(ft.name===na)return!1;yi.activedName.set(ft.name),C.model.refresh()}})}this.onAddTopBarCallback(N)}},T}(hi),Oi=function(){function P(E){var C=this;if(this.version="3.15.1",this.isInited=!1,this.option={},this.compInstance=void 0,this.pluginList={},this.log=void 0,this.system=void 0,this.network=void 0,P.instance&&P.instance instanceof P)return console.debug("[vConsole] vConsole is already exists."),P.instance;if(P.instance=this,this.isInited=!1,this.option={defaultPlugins:["system","network","element","storage"],log:{},network:{},storage:{}},t.Kn(E))for(var R in E)this.option[R]=E[R];this.option.maxLogNumber!==void 0&&(this.option.log.maxLogNumber=this.option.maxLogNumber,console.debug("[vConsole] Deprecated option: `maxLogNumber`, use `log.maxLogNumber` instead.")),this.option.onClearLog!==void 0&&console.debug("[vConsole] Deprecated option: `onClearLog`."),this.option.maxNetworkNumber!==void 0&&(this.option.network.maxNetworkNumber=this.option.maxNetworkNumber,console.debug("[vConsole] Deprecated option: `maxNetworkNumber`, use `network.maxNetworkNumber` instead.")),this._addBuiltInPlugins();var N=function(){C.isInited||(C._initComponent(),C._autoRun())};if(document!==void 0)document.readyState==="loading"?s.bind(window,"DOMContentLoaded",N):N();else{var he;he=setTimeout(function it(){document&&document.readyState=="complete"?(he&&clearTimeout(he),N()):he=setTimeout(it,1)},1)}}var T=P.prototype;return T._addBuiltInPlugins=function(){this.addPlugin(new qs("default","Log"));var E=this.option.defaultPlugins,C={system:{proto:zs,name:"System"}};if(C.network={proto:dc,name:"Network"},C.element={proto:kc,name:"Element"},C.storage={proto:Dc,name:"Storage"},E&&t.kJ(E))for(var R=0;R<E.length;R++){var N=C[E[R]];N?this.addPlugin(new N.proto(E[R],N.name)):console.debug("[vConsole] Unrecognized default plugin ID:",E[R])}},T._initComponent=function(){var E=this;if(!s.one("#__vconsole")){var C,R=1*t.cF("switch_x"),N=1*t.cF("switch_y");typeof this.option.target=="string"?C=document.querySelector(this.option.target):this.option.target instanceof HTMLElement&&(C=this.option.target),C instanceof HTMLElement||(C=document.documentElement),this.compInstance=new Gi({target:C,props:{switchButtonPosition:{x:R,y:N}}}),this.compInstance.$on("show",function(he){he.detail.show?E.show():E.hide()}),this.compInstance.$on("changePanel",function(he){var it=he.detail.pluginId;E.showPlugin(it)})}this._updateComponentByOptions()},T._updateComponentByOptions=function(){if(this.compInstance){if(this.compInstance.theme!==this.option.theme){var E=this.option.theme;E=E!=="light"&&E!=="dark"?"":E,this.compInstance.theme=E}this.compInstance.disableScrolling!==this.option.disableLogScrolling&&(this.compInstance.disableScrolling=!!this.option.disableLogScrolling)}},T.setSwitchPosition=function(E,C){this.compInstance.switchButtonPosition={x:E,y:C}},T._autoRun=function(){for(var E in this.isInited=!0,this.pluginList)this._initPlugin(this.pluginList[E]);this._showFirstPluginWhenEmpty(),this.triggerEvent("ready")},T._showFirstPluginWhenEmpty=function(){var E=Object.keys(this.pluginList);this.compInstance.activedPluginId===""&&E.length>0&&this.showPlugin(E[0])},T.triggerEvent=function(E,C){var R=this;E="on"+E.charAt(0).toUpperCase()+E.slice(1),t.mf(this.option[E])&&setTimeout(function(){R.option[E].apply(R,C)},0)},T._initPlugin=function(E){var C=this;E.vConsole=this,this.compInstance.pluginList[E.id]={id:E.id,name:E.name,hasTabPanel:!1,tabOptions:void 0,topbarList:[],toolbarList:[],content:void 0,contentContainer:void 0},this.compInstance.pluginList=this._reorderPluginList(this.compInstance.pluginList),E.trigger("init"),E.trigger("renderTab",function(R,N){N===void 0&&(N={});var he=C.compInstance.pluginList[E.id];he.hasTabPanel=!0,he.tabOptions=N,R&&(C.compInstance.pluginList[E.id].content=R),C.compInstance.pluginList=C.compInstance.pluginList}),E.trigger("addTopBar",function(R){if(R){for(var N=[],he=0;he<R.length;he++){var it=R[he];N.push({name:it.name||"Undefined",className:it.className||"",actived:!!it.actived,data:it.data,onClick:it.onClick})}C.compInstance.pluginList[E.id].topbarList=N,C.compInstance.pluginList=C.compInstance.pluginList}}),E.trigger("addTool",function(R){if(R){for(var N=[],he=0;he<R.length;he++){var it=R[he];N.push({name:it.name||"Undefined",global:!!it.global,data:it.data,onClick:it.onClick})}C.compInstance.pluginList[E.id].toolbarList=N,C.compInstance.pluginList=C.compInstance.pluginList}}),E.isReady=!0,E.trigger("ready")},T._triggerPluginsEvent=function(E){for(var C in this.pluginList)this.pluginList[C].isReady&&this.pluginList[C].trigger(E)},T._triggerPluginEvent=function(E,C){var R=this.pluginList[E];R&&R.isReady&&R.trigger(C)},T._reorderPluginList=function(E){var C=this;if(!t.kJ(this.option.pluginOrder))return E;for(var R=Object.keys(E).sort(function(it,st){var ft=C.option.pluginOrder.indexOf(it),na=C.option.pluginOrder.indexOf(st);return ft===na?0:ft===-1?1:na===-1?-1:ft-na}),N={},he=0;he<R.length;he++)N[R[he]]=E[R[he]];return N},T.addPlugin=function(E){return this.pluginList[E.id]!==void 0?(console.debug("[vConsole] Plugin `"+E.id+"` has already been added."),!1):(this.pluginList[E.id]=E,this.isInited&&(this._initPlugin(E),this._showFirstPluginWhenEmpty()),!0)},T.removePlugin=function(E){E=(E+"").toLowerCase();var C=this.pluginList[E];if(C===void 0)return console.debug("[vConsole] Plugin `"+E+"` does not exist."),!1;C.trigger("remove");try{delete this.pluginList[E],delete this.compInstance.pluginList[E]}catch{this.pluginList[E]=void 0,this.compInstance.pluginList[E]=void 0}return this.compInstance.pluginList=this.compInstance.pluginList,this.compInstance.activedPluginId==E&&(this.compInstance.activedPluginId="",this._showFirstPluginWhenEmpty()),!0},T.show=function(){this.isInited&&(this.compInstance.show=!0,this._triggerPluginsEvent("showConsole"))},T.hide=function(){this.isInited&&(this.compInstance.show=!1,this._triggerPluginsEvent("hideConsole"))},T.showSwitch=function(){this.isInited&&(this.compInstance.showSwitchButton=!0)},T.hideSwitch=function(){this.isInited&&(this.compInstance.showSwitchButton=!1)},T.showPlugin=function(E){this.isInited&&(this.pluginList[E]||console.debug("[vConsole] Plugin `"+E+"` does not exist."),this.compInstance.activedPluginId&&this._triggerPluginEvent(this.compInstance.activedPluginId,"hide"),this.compInstance.activedPluginId=E,this._triggerPluginEvent(this.compInstance.activedPluginId,"show"))},T.setOption=function(E,C){if(typeof E=="string"){for(var R=E.split("."),N=this.option,he=0;he<R.length;he++){if(R[he]==="__proto__"||R[he]==="constructor"||R[he]==="prototype")return void console.debug("[vConsole] Cannot set `"+R[he]+"` in `vConsole.setOption()`.");N[R[he]]===void 0&&(N[R[he]]={}),he===R.length-1&&(N[R[he]]=C),N=N[R[he]]}this._triggerPluginsEvent("updateOption"),this._updateComponentByOptions()}else if(t.Kn(E)){for(var it in E)it!=="__proto__"&&it!=="constructor"&&it!=="prototype"?this.option[it]=E[it]:console.debug("[vConsole] Cannot set `"+it+"` in `vConsole.setOption()`.");this._triggerPluginsEvent("updateOption"),this._updateComponentByOptions()}else console.debug("[vConsole] The first parameter of `vConsole.setOption()` must be a string or an object.")},T.destroy=function(){if(this.isInited){this.isInited=!1,P.instance=void 0;for(var E=Object.keys(this.pluginList),C=E.length-1;C>=0;C--)this.removePlugin(E[C]);this.compInstance.$destroy()}},(0,n.Z)(P,null,[{key:"instance",get:function(){return window.__VCONSOLE_INSTANCE},set:function(E){E===void 0||E instanceof P?window.__VCONSOLE_INSTANCE=E:console.debug("[vConsole] Cannot set `VConsole.instance` because the value is not the instance of VConsole.")}}]),P}();Oi.VConsolePlugin=void 0,Oi.VConsoleLogPlugin=void 0,Oi.VConsoleDefaultPlugin=void 0,Oi.VConsoleSystemPlugin=void 0,Oi.VConsoleNetworkPlugin=void 0,Oi.VConsoleElementPlugin=void 0,Oi.VConsoleStoragePlugin=void 0,Oi.VConsolePlugin=ki,Oi.VConsoleLogPlugin=ns,Oi.VConsoleDefaultPlugin=qs,Oi.VConsoleSystemPlugin=zs,Oi.VConsoleNetworkPlugin=dc,Oi.VConsoleElementPlugin=kc,Oi.VConsoleStoragePlugin=Dc;var vd=Oi}(),__webpack_exports__=__webpack_exports__.default,__webpack_exports__}()})}(vconsole_min$1)),vconsole_min$1.exports}var vconsole_minExports=requireVconsole_min();const VConsole=getDefaultExportFromCjs(vconsole_minExports);Vue$1.component("Icon",Icon);const updateSW=registerSW({onNeedRefresh(){confirm("有新版本可用，是否更新？")&&updateSW()},onOfflineReady(){console.log("应用已准备就绪，可以离线使用")}});let urlObj=new URL(location.href),_debug=urlObj.searchParams.get("_debug")==="true";_debug&&new VConsole;new Vue$1({router,store,render:n=>n(App)}).$mount("#app");
