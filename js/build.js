!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return I})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return v})),n.d(e,"g",(function(){return P})),n.d(e,"h",(function(){return A})),n.d(e,"i",(function(){return D})),n.d(e,"j",(function(){return f})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return p})),n.d(e,"n",(function(){return $})),n.d(e,"o",(function(){return g})),n.d(e,"p",(function(){return _})),n.d(e,"q",(function(){return O})),n.d(e,"r",(function(){return b})),n.d(e,"s",(function(){return C})),n.d(e,"t",(function(){return y})),n.d(e,"u",(function(){return w})),n.d(e,"v",(function(){return T})),n.d(e,"w",(function(){return N})),n.d(e,"x",(function(){return R})),n.d(e,"y",(function(){return E}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],o=e+1<t.length,s=o?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(1023&o))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],o=e<t.length?n[t.charAt(e)]:0;++e;const a=e<t.length?n[t.charAt(e)]:64;++e;const c=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==o||null==a||null==c)throw new s;const u=i<<2|o>>4;if(r.push(u),64!==a){const t=o<<4&240|a>>2;if(r.push(t),64!==c){const t=a<<6&192|c;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){return function(t){const e=i(t);return o.encodeByteArray(e,!0)}(t).replace(/\./g,"")},c=function(t){try{return o.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,l=()=>{try{return u()||(()=>{if(void 0===r||void 0===r.env)return;const t=r.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&c(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+t)}},h=t=>{var e,n;return null===(n=null===(e=l())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},d=t=>{const e=h(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},f=()=>{var t;return null===(t=l())||void 0===t?void 0:t.config},p=t=>{var e;return null===(e=l())||void 0===e?void 0:e["_"+t]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[a(JSON.stringify({alg:"none",type:"JWT"})),a(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function _(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function w(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function b(){const t=g();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function T(){return!function(){var e;const n=null===(e=l())||void 0===e?void 0:e.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function C(){try{return"object"==typeof indexedDB}catch(t){return!1}}function E(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})}class I extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?function(t,e){return t.replace(k,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new I(r,s,n)}}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function A(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(x(n)&&x(o)){if(!A(n,o))return!1}else if(n!==o)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function x(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function R(t){const e={};return t.replace(/^\?/,"").split("&").forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function D(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){const n=new L(t,e);return n.subscribe.bind(n)}class L{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=M),void 0===r.error&&(r.error=M),void 0===r.complete&&(r.complete=M);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(t){return t&&t._delegate?t._delegate:t}}).call(this,n(5),n(6))},function(t,e,n){"use strict";n.d(e,"a",(function(){return L})),n.d(e,"b",(function(){return x})),n.d(e,"c",(function(){return A})),n.d(e,"d",(function(){return N})),n.d(e,"e",(function(){return $})),n.d(e,"f",(function(){return j})),n.d(e,"g",(function(){return M})),n.d(e,"h",(function(){return F}));var r=n(4),i=n(3),o=n(0);let s,a;const c=new WeakMap,u=new WeakMap,l=new WeakMap,h=new WeakMap,d=new WeakMap;let f={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return u.get(t);if("objectStoreNames"===e)return t.objectStoreNames||l.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return v(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function p(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(g(this),e),v(c.get(this))}:function(...e){return v(t.apply(g(this),e))}:function(e,...n){const r=t.call(g(this),e,...n);return l.set(r,e.sort?e.sort():[e]),v(r)}}function m(t){return"function"==typeof t?p(t):(t instanceof IDBTransaction&&function(t){if(u.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});u.set(t,e)}(t),e=t,(s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,f):t);var e}function v(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(v(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(e=>{e instanceof IDBCursor&&c.set(e,t)}).catch(()=>{}),d.set(e,t),e}(t);if(h.has(t))return h.get(t);const e=m(t);return e!==t&&(h.set(t,e),d.set(e,t)),e}const g=t=>d.get(t);const y=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],w=new Map;function b(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(w.get(e))return w.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!y.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return w.set(e,o),o}f=(t=>({...t,get:(e,n,r)=>b(e,n)||t.get(e,n,r),has:(e,n)=>!!b(e,n)||t.has(e,n)}))(f);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const C="@firebase/app",E=new i.b("@firebase/app"),I={[C]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},S=new Map,k=new Map;function O(t,e){try{t.container.addComponent(e)}catch(n){E.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function A(t){const e=t.name;if(k.has(e))return E.debug(`There were multiple attempts to register component ${e}.`),!1;k.set(e,t);for(const e of S.values())O(e,t);return!0}function x(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function N(t,e,n="[DEFAULT]"){x(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},D=new o.b("app","Firebase",R);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L="10.4.0";function M(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!=typeof s||!s)throw D.create("bad-app-name",{appName:String(s)});if(n||(n=Object(o.j)()),!n)throw D.create("no-options");const a=S.get(s);if(a){if(Object(o.h)(n,a.options)&&Object(o.h)(i,a.config))return a;throw D.create("duplicate-app",{appName:s})}const c=new r.b(s);for(const t of k.values())c.addComponent(t);const u=new P(n,i,c);return S.set(s,u),u}function $(t="[DEFAULT]"){const e=S.get(t);if(!e&&"[DEFAULT]"===t&&Object(o.j)())return M();if(!e)throw D.create("no-app",{appName:t});return e}function j(){return Array.from(S.values())}function F(t,e,n){var i;let o=null!==(i=I[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void E.warn(t.join(" "))}A(new r.a(o+"-version",()=>({library:o,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U="firebase-heartbeat-store";let V=null;function B(){return V||(V=function(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=v(s);return r&&s.addEventListener("upgradeneeded",t=>{r(v(s.result),t.oldVersion,t.newVersion,v(s.transaction),t)}),n&&s.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{o&&t.addEventListener("close",()=>o()),i&&t.addEventListener("versionchange",t=>i(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(U)}}}).catch(t=>{throw D.create("idb-open",{originalErrorMessage:t.message})})),V}async function q(t,e){try{const n=(await B()).transaction(U,"readwrite"),r=n.objectStore(U);await r.put(e,H(t)),await n.done}catch(t){if(t instanceof o.c)E.warn(t.message);else{const e=D.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});E.warn(e.message)}}}function H(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new G(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=K();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some(t=>t.date===e))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=K(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),W(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),W(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(o.e)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function K(){return(new Date).toISOString().substring(0,10)}class G{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o.s)()&&Object(o.y)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{const e=await B();return await e.transaction(U).objectStore(U).get(H(t))}catch(t){if(t instanceof o.c)E.warn(t.message);else{const e=D.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});E.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return q(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return q(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function W(t){return Object(o.e)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;Q="",A(new r.a("platform-logger",t=>new T(t),"PRIVATE")),A(new r.a("heartbeat",t=>new z(t),"PRIVATE")),F(C,"0.9.19",Q),F(C,"0.9.19","esm2017"),F("fire-js","")},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return lr})),n.d(e,"b",(function(){return dr})),n.d(e,"c",(function(){return hr})),n.d(e,"d",(function(){return gr})),n.d(e,"e",(function(){return vr})),n.d(e,"f",(function(){return fr})),n.d(e,"g",(function(){return pr})),n.d(e,"h",(function(){return mr})),n.d(e,"i",(function(){return cr})),n.d(e,"j",(function(){return ur}));var r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},o={},s=s||{},a=i||self;function c(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var l="closure_uid_"+(1e9*Math.random()>>>0),h=0;function d(t,e,n){return t.call.apply(t.bind,arguments)}function f(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function p(t,e,n){return(p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?d:f).apply(null,arguments)}function m(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function g(){this.s=this.s,this.o=this.o}g.prototype.s=!1,g.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,l)&&t[l]||(t[l]=++h))},g.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const y=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function w(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(c(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function b(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",()=>{},e),a.removeEventListener("test",()=>{},e)}catch(t){}return t}();function C(t){return/^[\s\xa0]*$/.test(t)}function E(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function I(t){return-1!=E().indexOf(t)}function S(t){return S[" "](t),t}S[" "]=function(){};var k,O,A,x=I("Opera"),N=I("Trident")||I("MSIE"),R=I("Edge"),D=R||N,P=I("Gecko")&&!(-1!=E().toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),L=-1!=E().toLowerCase().indexOf("webkit")&&!I("Edge");function M(){var t=a.document;return t?t.documentMode:void 0}t:{var $="",j=(O=E(),P?/rv:([^\);]+)(\)|;)/.exec(O):R?/Edge\/([\d\.]+)/.exec(O):N?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(O):L?/WebKit\/(\S+)/.exec(O):x?/(?:Version)[ \/]?(\S+)/.exec(O):void 0);if(j&&($=j?j[1]:""),N){var F=M();if(null!=F&&F>parseFloat($)){k=String(F);break t}}k=$}if(a.document&&N){var U=M();A=U||(parseInt(k,10)||void 0)}else A=void 0;var V=A;function B(t,e){if(b.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(P){t:{try{S(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&B.$.h.call(this)}}v(B,b);var q={2:"touch",3:"pen",4:"mouse"};B.prototype.h=function(){B.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var H="closure_listenable_"+(1e6*Math.random()|0),z=0;function K(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++z,this.fa=this.ia=!1}function G(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function W(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Q(t){const e={};for(const n in t)e[n]=t[n];return e}const J="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<J.length;e++)n=J[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function X(t){this.src=t,this.g={},this.h=0}function Z(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=y(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(G(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function tt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==r)return i}return-1}X.prototype.add=function(t,e,n,r,i){var o=t.toString();(t=this.g[o])||(t=this.g[o]=[],this.h++);var s=tt(t,e,r,i);return-1<s?(e=t[s],n||(e.ia=!1)):((e=new K(e,this.src,o,!!r,i)).ia=n,t.push(e)),e};var et="closure_lm_"+(1e6*Math.random()|0),nt={};function rt(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,o){if(Array.isArray(n)){for(var s=0;s<n.length;s++)t(e,n[s],r,i,o);return null}return r=lt(r),e&&e[H]?e.P(n,r,u(i)?!!i.capture:!!i,o):it(e,n,r,!0,i,o)}(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)rt(t,e[o],n,r,i);return null}return n=lt(n),t&&t[H]?t.O(e,n,u(r)?!!r.capture:!!r,i):it(t,e,n,!1,r,i)}function it(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=u(i)?!!i.capture:!!i,a=ct(t);if(a||(t[et]=a=new X(t)),(n=a.add(e,n,r,s,o)).proxy)return n;if(r=function(){const t=at;return function e(n){return t.call(e.src,e.listener,n)}}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)T||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(st(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ot(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[H])Z(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(st(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ct(e))?(Z(n,t),0==n.h&&(n.src=null,e[et]=null)):G(t)}}}function st(t){return t in nt?nt[t]:nt[t]="on"+t}function at(t,e){if(t.fa)t=!0;else{e=new B(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ot(t),t=n.call(r,e)}return t}function ct(t){return(t=t[et])instanceof X?t:null}var ut="__closure_events_fn_"+(1e9*Math.random()>>>0);function lt(t){return"function"==typeof t?t:(t[ut]||(t[ut]=function(e){return t.handleEvent(e)}),t[ut])}function ht(){g.call(this),this.i=new X(this),this.S=this,this.J=null}function dt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"==typeof e)e=new b(e,t);else if(e instanceof b)e.target=e.target||t;else{var i=e;Y(e=new b(r,t),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=ft(s,r,!0,e)&&i}if(i=ft(s=e.g=t,r,!0,e)&&i,i=ft(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)i=ft(s=e.g=n[o],r,!1,e)&&i}function ft(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,c=s.la||s.src;s.ia&&Z(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(ht,g),ht.prototype[H]=!0,ht.prototype.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,o){if(Array.isArray(n))for(var s=0;s<n.length;s++)t(e,n[s],r,i,o);else i=u(i)?!!i.capture:!!i,r=lt(r),e&&e[H]?(e=e.i,(n=String(n).toString())in e.g&&(-1<(r=tt(s=e.g[n],r,i,o))&&(G(s[r]),Array.prototype.splice.call(s,r,1),0==s.length&&(delete e.g[n],e.h--)))):e&&(e=ct(e))&&(n=e.g[n.toString()],e=-1,n&&(e=tt(n,r,i,o)),(r=-1<e?n[e]:null)&&ot(r))}(this,t,e,n,r)},ht.prototype.N=function(){if(ht.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)G(n[r]);delete e.g[t],e.h--}}this.J=null},ht.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},ht.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var pt=a.JSON.stringify;function mt(){var t=Tt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var vt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new gt,t=>t.reset());class gt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function yt(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _t(t){a.setTimeout(()=>{throw t},0)}let wt,bt=!1,Tt=new class{constructor(){this.h=this.g=null}add(t,e){const n=vt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Ct=()=>{const t=a.Promise.resolve(void 0);wt=()=>{t.then(Et)}};var Et=()=>{for(var t;t=mt();){try{t.h.call(t.g)}catch(t){_t(t)}var e=vt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}bt=!1};function It(t,e){ht.call(this),this.h=t||1,this.g=e||a,this.j=p(this.qb,this),this.l=Date.now()}function St(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function kt(t,e,n){if("function"==typeof t)n&&(t=p(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=p(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}v(It,ht),(r=It.prototype).ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),dt(this,"tick"),this.ga&&(St(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){It.$.N.call(this),St(this),delete this.g};class Ot extends g{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=kt(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);const n=e.h;e.h=null,e.m.apply(null,n)}(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(t){g.call(this),this.h=t,this.g={}}v(At,g);var xt=[];function Nt(t,e,n,r){Array.isArray(n)||(n&&(xt[0]=n.toString()),n=xt);for(var i=0;i<n.length;i++){var o=rt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Rt(t){W(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ot(t)}),t),t.g={}}function Dt(){this.g=!0}function Pt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return pt(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}At.prototype.N=function(){At.$.N.call(this),Rt(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Dt.prototype.Ea=function(){this.g=!1},Dt.prototype.info=function(){};var Lt={},Mt=null;function $t(){return Mt=Mt||new ht}function jt(t){b.call(this,Lt.Ta,t)}function Ft(t){const e=$t();dt(e,new jt(e))}function Ut(t,e){b.call(this,Lt.STAT_EVENT,t),this.stat=e}function Vt(t){const e=$t();dt(e,new Ut(e,t))}function Bt(t,e){b.call(this,Lt.Ua,t),this.size=e}function qt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}Lt.Ta="serverreachability",v(jt,b),Lt.STAT_EVENT="statevent",v(Ut,b),Lt.Ua="timingevent",v(Bt,b);var Ht={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zt={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Kt(){}function Gt(t){return t.h||(t.h=t.i())}function Wt(){}Kt.prototype.h=null;var Qt,Jt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yt(){b.call(this,"d")}function Xt(){b.call(this,"c")}function Zt(){}function te(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new At(this),this.P=ne,t=D?125:void 0,this.V=new It(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ee}function ee(){this.i=null,this.g="",this.h=!1}v(Yt,b),v(Xt,b),v(Zt,Kt),Zt.prototype.g=function(){return new XMLHttpRequest},Zt.prototype.i=function(){return{}},Qt=new Zt;var ne=45e3,re={},ie={};function oe(t,e,n){t.L=1,t.v=Ee(_e(e)),t.s=n,t.S=!0,se(t,null)}function se(t,e){t.G=Date.now(),le(t),t.A=_e(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),$e(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ee,t.g=Mn(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Ot(p(t.Pa,t,t.g),t.O)),Nt(t.U,t.g,"readystatechange",t.nb),e=t.I?Q(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ft(),function(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function ae(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function ce(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=ue(t,n),r==ie){4==e&&(t.o=4,Vt(14),i=!1),Pt(t.j,t.m,null,"[Incomplete Response]");break}if(r==re){t.o=4,Vt(15),Pt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Pt(t.j,t.m,r,null),me(t,r)}ae(t)&&r!=ie&&r!=re&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Vt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),On(e),e.M=!0,Vt(11))):(Pt(t.j,t.m,n,"[Invalid Chunked Response]"),pe(t),fe(t))}function ue(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ie:(n=Number(e.substring(n,r)),isNaN(n)?re:(r+=1)+n>e.length?ie:(e=e.slice(r,r+n),t.C=r+n,e))}function le(t){t.Y=Date.now()+t.P,he(t,t.P)}function he(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=qt(p(t.lb,t),e)}function de(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function fe(t){0==t.l.H||t.J||Nn(t.l,t)}function pe(t){de(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,St(t.V),Rt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function me(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||qe(n.i,t)))if(!t.K&&qe(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;xn(n),wn(n)}kn(n),Vt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=qt(p(n.ib,n),6e3));if(1>=Be(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Dn(n,11)}else if((t.K||n.g==t)&&xn(n),!C(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.i;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(He(o,o.h),o.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,Ce(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var s=t;if((r=n).wa=Ln(r,r.J?r.pa:null,r.Y),s.K){ze(r.i,s);var a=s,c=r.L;c&&a.setTimeout(c),a.B&&(de(a),le(a)),r.g=s}else Sn(r);0<n.j.length&&Tn(n)}else"stop"!=u[0]&&"close"!=u[0]||Dn(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Dn(n,7):_n(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}Ft()}catch(t){}}function ve(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(c(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}(r=te.prototype).setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==fn(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const h=fn(this.g);var e=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||D||this.g&&(this.h.h||this.g.ja()||pn(this.g)))){this.J||4!=h||7==e||Ft(),de(this);var n=this.g.da();this.ca=n;e:if(ae(this)){var r=pn(this.g);t="";var i=r.length,o=4==fn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){pe(this),fe(this);var s="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==n,function(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Vt(12),pe(this),fe(this);break t}Pt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,me(this,n)}this.S?(ce(this,h,s),D&&this.i&&3==h&&(Nt(this.U,this.V,"tick",this.mb),this.V.start())):(Pt(this.j,this.m,s,null),me(this,s)),4==h&&pe(this),this.i&&!this.J&&(4==h?Nn(this.l,this):(this.i=!1,le(this)))}else(function(t){const e={};t=(t.g&&2<=fn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(C(t[r]))continue;var n=yt(t[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.o=3,Vt(12)):(this.o=0,Vt(13)),pe(this),fe(this)}}}catch(t){}},r.mb=function(){if(this.g){var t=fn(this.g),e=this.g.ja();this.C<e.length&&(de(this),ce(this,t,e),this.i&&4!=t&&le(this))}},r.cancel=function(){this.J=!0,pe(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Ft(),Vt(17)),pe(this),this.o=2,fe(this)):he(this,this.Y-t)};var ge=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ye(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ye){this.h=t.h,we(this,t.j),this.s=t.s,this.g=t.g,be(this,t.m),this.l=t.l;var e=t.i,n=new De;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Te(this,n),this.o=t.o}else t&&(e=String(t).match(ge))?(this.h=!1,we(this,e[1]||"",!0),this.s=Ie(e[2]||""),this.g=Ie(e[3]||"",!0),be(this,e[4]),this.l=Ie(e[5]||"",!0),Te(this,e[6]||"",!0),this.o=Ie(e[7]||"")):(this.h=!1,this.i=new De(null,this.h))}function _e(t){return new ye(t)}function we(t,e,n){t.j=n?Ie(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Te(t,e,n){e instanceof De?(t.i=e,function(t,e){e&&!t.j&&(Pe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Le(this,e),$e(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Se(e,Ne)),t.i=new De(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Ee(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ie(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Se(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ke),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ke(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ye.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Se(e,Oe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Se(e,Oe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Se(n,"/"==n.charAt(0)?xe:Ae,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Se(n,Re)),t.join("")};var Oe=/[#\/\?@]/g,Ae=/[#\?:]/g,xe=/[#\?]/g,Ne=/[#\?@]/g,Re=/#/g;function De(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Pe(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Le(t,e){Pe(t),e=je(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Me(t,e){return Pe(t),e=je(t,e),t.g.has(e)}function $e(t,e,n){Le(t,e),0<n.length&&(t.i=null,t.g.set(je(t,e),_(n)),t.h+=n.length)}function je(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(r=De.prototype).add=function(t,e){Pe(this),this.i=null,t=je(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){Pe(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.ta=function(){Pe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){Pe(this);let e=[];if("string"==typeof t)Me(this,t)&&(e=e.concat(this.g.get(je(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return Pe(this),this.i=null,Me(this,t=je(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function Fe(t){this.l=t||Ue,a.PerformanceNavigationTiming?t=0<(t=a.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(a.g&&a.g.Ka&&a.g.Ka()&&a.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ue=10;function Ve(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Be(t){return t.h?1:t.g?t.g.size:0}function qe(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function He(t,e){t.g?t.g.add(e):t.h=e}function ze(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ke(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return _(t.i)}Fe.prototype.cancel=function(){if(this.i=Ke(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ge(){this.g=new class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}}}function We(t,e,n){const r=n||"";try{ve(t,(function(t,n){let i=t;u(t)&&(i=pt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Qe(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function Je(t){this.l=t.ec||null,this.j=t.ob||!1}function Ye(t,e){ht.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Xe,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}v(Je,Kt),Je.prototype.g=function(){return new Ye(this.l,this.j)},Je.prototype.i=function(t){return function(){return t}}({}),v(Ye,ht);var Xe=0;function Ze(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function tn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,en(t)}function en(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(r=Ye.prototype).open=function(t,e){if(this.readyState!=Xe)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,en(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||a).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tn(this)),this.readyState=Xe},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ze(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tn(this):en(this),3==this.readyState&&Ze(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,tn(this))},r.Ya=function(t){this.g&&(this.response=t,tn(this))},r.ka=function(){this.g&&tn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ye.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var nn=a.JSON.parse;function rn(t){ht.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=on,this.L=this.M=!1}v(rn,ht);var on="",sn=/^https?$/i,an=["POST","PUT"];function cn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,un(t),hn(t)}function un(t){t.F||(t.F=!0,dt(t,"complete"),dt(t,"error"))}function ln(t){if(t.h&&void 0!==s&&(!t.C[1]||4!=fn(t)||2!=t.da()))if(t.v&&4==fn(t))kt(t.La,0,t);else if(dt(t,"readystatechange"),4==fn(t)){t.h=!1;try{const s=t.da();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){var i=String(t.I).match(ge)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!sn.test(i?i.toLowerCase():"")}n=r}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var o=2<fn(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.da()+"]",un(t)}}finally{hn(t)}}}function hn(t,e){if(t.g){dn(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||dt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function dn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function fn(t){return t.g?t.g.readyState:0}function pn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case on:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function mn(t){let e="";return W(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function vn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=mn(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ce(t,e,n))}function gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yn(t){this.Ga=0,this.j=[],this.l=new Dt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=gn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=gn("baseRetryDelayMs",5e3,t),this.hb=gn("retryDelaySeedMs",1e4,t),this.eb=gn("forwardChannelMaxRetries",2,t),this.xa=gn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Fe(t&&t.concurrentRequestLimit),this.Ja=new Ge,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function _n(t){if(bn(t),3==t.H){var e=t.W++,n=_e(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),En(t,n),(e=new te(t,t.l,e)).L=2,e.v=Ee(_e(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Mn(e.l,null),e.g.ha(e.v)),e.G=Date.now(),le(e)}Pn(t)}function wn(t){t.g&&(On(t),t.g.cancel(),t.g=null)}function bn(t){wn(t),t.u&&(a.clearTimeout(t.u),t.u=null),xn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&a.clearTimeout(t.m),t.m=null)}function Tn(t){if(!Ve(t.i)&&!t.m){t.m=!0;var e=t.Na;wt||Ct(),bt||(wt(),bt=!0),Tt.add(e,t),t.C=0}}function Cn(t,e){var n;n=e?e.m:t.W++;const r=_e(t.I);Ce(r,"SID",t.K),Ce(r,"RID",n),Ce(r,"AID",t.V),En(t,r),t.o&&t.s&&vn(r,t.o,t.s),n=new te(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=In(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),He(t.i,n),oe(n,r,e)}function En(t,e){t.na&&W(t.na,(function(t,n){Ce(e,n,t)})),t.h&&ve({},(function(t,n){Ce(e,n,t)}))}function In(t,e,n){n=Math.min(t.j.length,n);var r=t.h?p(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=i[s].g;const a=i[s].map;if(n-=e,0>n)e=Math.max(0,i[s].g-100),o=!1;else try{We(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Sn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;wt||Ct(),bt||(wt(),bt=!0),Tt.add(e,t),t.A=0}}function kn(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=qt(p(t.Ma,t),Rn(t,t.A)),t.A++,!0)}function On(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function An(t){t.g=new te(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=_e(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.V),Ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ce(e,"TO",t.qa),Ce(e,"TYPE","xmlhttp"),En(t,e),t.o&&t.s&&vn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ee(_e(e)),n.s=null,n.S=!0,se(n,t)}function xn(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function Nn(t,e){var n=null;if(t.g==e){xn(t),On(t),t.g=null;var r=2}else{if(!qe(t.i,e))return;n=e.F,ze(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;dt(r=$t(),new Bt(r,n)),Tn(t)}else Sn(t);else if(3==(i=e.o)||0==i&&0<e.ca||!(1==r&&function(t,e){return!(Be(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=qt(p(t.Na,t,e),Rn(t,t.C)),t.C++,!0))}(t,e)||2==r&&kn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Dn(t,5);break;case 4:Dn(t,10);break;case 3:Dn(t,6);break;default:Dn(t,2)}}function Rn(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Dn(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=p(t.pb,t);n||(n=new ye("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||we(n,"https"),Ee(n)),function(t,e){const n=new Dt;if(a.Image){const r=new Image;r.onload=m(Qe,n,r,"TestLoadImage: loaded",!0,e),r.onerror=m(Qe,n,r,"TestLoadImage: error",!1,e),r.onabort=m(Qe,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=m(Qe,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Vt(2);t.H=0,t.h&&t.h.za(e),Pn(t),bn(t)}function Pn(t){if(t.H=0,t.ma=[],t.h){const e=Ke(t.i);0==e.length&&0==t.j.length||(w(t.ma,e),w(t.ma,t.j),t.i.i.length=0,_(t.j),t.j.length=0),t.h.ya()}}function Ln(t,e,n){var r=n instanceof ye?_e(n):new ye(n);if(""!=r.g)e&&(r.g=e+"."+r.g),be(r,r.m);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new ye(null);r&&we(o,r),e&&(o.g=e),i&&be(o,i),n&&(o.l=n),r=o}return n=t.F,e=t.Da,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ra),En(t,r),r}function Mn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new rn(new Je({ob:!0})):new rn(t.va)).Oa(t.J),e}function $n(){}function jn(){if(N&&!(10<=Number(V)))throw Error("Environmental error: no available transport.")}function Fn(t,e){ht.call(this),this.g=new yn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Bn(this)}function Un(t){Yt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Vn(){Xt.call(this),this.status=1}function Bn(t){this.g=t}function qn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Hn(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;s=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=(n=(i=(o=(e=n+(s<<7&4294967295|s>>>25))+((s=o+(i^e&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|s>>>20))+((s=i+(n^o&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|s>>>15))+((s=n+(e^i&(o^e))+r[3]+3250441966&4294967295)<<22&4294967295|s>>>10))+((s=e+(o^n&(i^o))+r[4]+4118548399&4294967295)<<7&4294967295|s>>>25))+((s=o+(i^e&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|s>>>20))+((s=i+(n^o&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|s>>>15))+((s=n+(e^i&(o^e))+r[7]+4249261313&4294967295)<<22&4294967295|s>>>10))+((s=e+(o^n&(i^o))+r[8]+1770035416&4294967295)<<7&4294967295|s>>>25))+((s=o+(i^e&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|s>>>20))+((s=i+(n^o&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|s>>>15))+((s=n+(e^i&(o^e))+r[11]+2304563134&4294967295)<<22&4294967295|s>>>10))+((s=e+(o^n&(i^o))+r[12]+1804603682&4294967295)<<7&4294967295|s>>>25))+((s=o+(i^e&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|s>>>20))+((s=i+(n^o&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|s>>>15))+((s=n+(e^i&(o^e))+r[15]+1236535329&4294967295)<<22&4294967295|s>>>10))+((s=e+(i^o&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^i&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|s>>>23))+((s=i+(e^n&(o^e))+r[11]+643717713&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^e&(i^o))+r[0]+3921069994&4294967295)<<20&4294967295|s>>>12))+((s=e+(i^o&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^i&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|s>>>23))+((s=i+(e^n&(o^e))+r[15]+3634488961&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^e&(i^o))+r[4]+3889429448&4294967295)<<20&4294967295|s>>>12))+((s=e+(i^o&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^i&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|s>>>23))+((s=i+(e^n&(o^e))+r[3]+4107603335&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^e&(i^o))+r[8]+1163531501&4294967295)<<20&4294967295|s>>>12))+((s=e+(i^o&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^i&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|s>>>23))+((s=i+(e^n&(o^e))+r[7]+1735328473&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^e&(i^o))+r[12]+2368359562&4294967295)<<20&4294967295|s>>>12))+((s=e+(n^i^o)+r[5]+4294588738&4294967295)<<4&4294967295|s>>>28))+((s=o+(e^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|s>>>21))+((s=i+(o^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|s>>>16))+((s=n+(i^o^e)+r[14]+4259657740&4294967295)<<23&4294967295|s>>>9))+((s=e+(n^i^o)+r[1]+2763975236&4294967295)<<4&4294967295|s>>>28))+((s=o+(e^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|s>>>21))+((s=i+(o^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|s>>>16))+((s=n+(i^o^e)+r[10]+3200236656&4294967295)<<23&4294967295|s>>>9))+((s=e+(n^i^o)+r[13]+681279174&4294967295)<<4&4294967295|s>>>28))+((s=o+(e^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|s>>>21))+((s=i+(o^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|s>>>16))+((s=n+(i^o^e)+r[6]+76029189&4294967295)<<23&4294967295|s>>>9))+((s=e+(n^i^o)+r[9]+3654602809&4294967295)<<4&4294967295|s>>>28))+((s=o+(e^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|s>>>21))+((s=i+(o^e^n)+r[15]+530742520&4294967295)<<16&4294967295|s>>>16))+((s=n+(i^o^e)+r[2]+3299628645&4294967295)<<23&4294967295|s>>>9))+((s=e+(i^(n|~o))+r[0]+4096336452&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(e|~i))+r[7]+1126891415&4294967295)<<10&4294967295|s>>>22))+((s=i+(e^(o|~n))+r[14]+2878612391&4294967295)<<15&4294967295|s>>>17))+((s=n+(o^(i|~e))+r[5]+4237533241&4294967295)<<21&4294967295|s>>>11))+((s=e+(i^(n|~o))+r[12]+1700485571&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(e|~i))+r[3]+2399980690&4294967295)<<10&4294967295|s>>>22))+((s=i+(e^(o|~n))+r[10]+4293915773&4294967295)<<15&4294967295|s>>>17))+((s=n+(o^(i|~e))+r[1]+2240044497&4294967295)<<21&4294967295|s>>>11))+((s=e+(i^(n|~o))+r[8]+1873313359&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(e|~i))+r[15]+4264355552&4294967295)<<10&4294967295|s>>>22))+((s=i+(e^(o|~n))+r[6]+2734768916&4294967295)<<15&4294967295|s>>>17))+((s=n+(o^(i|~e))+r[13]+1309151649&4294967295)<<21&4294967295|s>>>11))+((o=(e=n+((s=e+(i^(n|~o))+r[4]+4149444226&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(e|~i))+r[11]+3174756917&4294967295)<<10&4294967295|s>>>22))^((i=o+((s=i+(e^(o|~n))+r[2]+718787259&4294967295)<<15&4294967295|s>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function zn(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=0|t[i];r&&o==e||(n[i]=o,r=!1)}this.g=n}(r=rn.prototype).Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qt.g(),this.C=this.u?Gt(this.u):Gt(Qt),this.g.onreadystatechange=p(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void cn(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),i=a.FormData&&t instanceof a.FormData,!(0<=y(an,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{dn(this),0<this.B&&((this.L=function(t){return N&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=p(this.ua,this)):this.A=kt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){cn(this,t)}},r.ua=function(){void 0!==s&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),hn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hn(this,!0)),rn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?ln(this):this.kb())},r.kb=function(){ln(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<fn(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),nn(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=yn.prototype).ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new te(this,this.l,t);let o=this.s;if(this.U&&(o?(o=Q(o),Y(o,this.U)):o=this.U),null!==this.o||this.O||(i.I=o,o=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=In(this,i,e),Ce(n=_e(this.I),"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),En(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(mn(o)))+"&"+e:this.o&&vn(n,this.o,o)),He(this.i,i),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),i.aa=!0,oe(i,n,null)):oe(i,n,e),this.H=2}}else 3==this.H&&(t?Cn(this,t):0==this.j.length||Ve(this.i)||Cn(this))},r.Ma=function(){if(this.u=null,An(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=qt(p(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Vt(10),wn(this),An(this))},r.ib=function(){null!=this.v&&(this.v=null,wn(this),kn(this),Vt(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Vt(2)):(this.l.info("Failed to ping google.com"),Vt(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},(r=$n.prototype).Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},jn.prototype.g=function(t,e){return new Fn(t,e)},v(Fn,ht),Fn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Vt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Ln(t,null,t.Y),Tn(t)},Fn.prototype.close=function(){_n(this.g)},Fn.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=pt(t),t=n);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&Tn(e)},Fn.prototype.N=function(){this.g.h=null,delete this.j,_n(this.g),delete this.g,Fn.$.N.call(this)},v(Un,Yt),v(Vn,Xt),v(Bn,$n),Bn.prototype.Ba=function(){dt(this.g,"a")},Bn.prototype.Aa=function(t){dt(this.g,new Un(t))},Bn.prototype.za=function(t){dt(this.g,new Vn)},Bn.prototype.ya=function(){dt(this.g,"b")},v(qn,(function(){this.blockSize=-1})),qn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},qn.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,o=0;o<e;){if(0==i)for(;o<=n;)Hn(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){Hn(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){Hn(this,r),i=0;break}}this.h=i,this.i+=e},qn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var Kn={};function Gn(t){return-128<=t&&128>t?function(t,e){var n=Kn;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new zn([0|t],0>t?-1:0)})):new zn([0|t],0>t?-1:0)}function Wn(t){if(isNaN(t)||!isFinite(t))return Jn;if(0>t)return er(Wn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Qn;return new zn(e,0)}var Qn=4294967296,Jn=Gn(0),Yn=Gn(1),Xn=Gn(16777216);function Zn(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function tr(t){return-1==t.h}function er(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new zn(n,~t.h).add(Yn)}function nr(t,e){return t.add(er(e))}function rr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ir(t,e){this.g=t,this.h=e}function or(t,e){if(Zn(e))throw Error("division by zero");if(Zn(t))return new ir(Jn,Jn);if(tr(t))return e=or(er(t),e),new ir(er(e.g),er(e.h));if(tr(e))return e=or(t,er(e)),new ir(er(e.g),e.h);if(30<t.g.length){if(tr(t)||tr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Yn,r=e;0>=r.X(t);)n=sr(n),r=sr(r);var i=ar(n,1),o=ar(r,1);for(r=ar(r,2),n=ar(n,2);!Zn(r);){var s=o.add(r);0>=s.X(t)&&(i=i.add(n),o=s),r=ar(r,1),n=ar(n,1)}return e=nr(t,i.R(e)),new ir(i,e)}for(i=Jn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),s=(o=Wn(n)).R(e);tr(s)||0<s.X(t);)s=(o=Wn(n-=r)).R(e);Zn(o)&&(o=Yn),i=i.add(o),t=nr(t,s)}return new ir(i,t)}function sr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new zn(n,t.h)}function ar(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new zn(i,t.h)}(r=zn.prototype).ea=function(){if(tr(this))return-er(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Qn+r)*e,e*=Qn}return t},r.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Zn(this))return"0";if(tr(this))return"-"+er(this).toString(t);for(var e=Wn(Math.pow(t,6)),n=this,r="";;){var i=or(n,e).g,o=((0<(n=nr(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(Zn(n=i))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return tr(t=nr(this,t))?-1:Zn(t)?0:1},r.abs=function(){return tr(this)?er(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(65535&this.D(i))+(65535&t.D(i)),s=(o>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new zn(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(Zn(this)||Zn(t))return Jn;if(tr(this))return tr(t)?er(this).R(er(t)):er(er(this).R(t));if(tr(t))return er(this.R(er(t)));if(0>this.X(Xn)&&0>t.X(Xn))return Wn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.D(r)>>>16,s=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=s*c,rr(n,2*r+2*i),n[2*r+2*i+1]+=o*c,rr(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,rr(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,rr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new zn(n,0)},r.gb=function(t){return or(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new zn(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new zn(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new zn(n,this.h^t.h)},jn.prototype.createWebChannel=jn.prototype.g,Fn.prototype.send=Fn.prototype.u,Fn.prototype.open=Fn.prototype.m,Fn.prototype.close=Fn.prototype.close,Ht.NO_ERROR=0,Ht.TIMEOUT=8,Ht.HTTP_ERROR=6,zt.COMPLETE="complete",Wt.EventType=Jt,Jt.OPEN="a",Jt.CLOSE="b",Jt.ERROR="c",Jt.MESSAGE="d",ht.prototype.listen=ht.prototype.O,rn.prototype.listenOnce=rn.prototype.P,rn.prototype.getLastError=rn.prototype.Sa,rn.prototype.getLastErrorCode=rn.prototype.Ia,rn.prototype.getStatus=rn.prototype.da,rn.prototype.getResponseJson=rn.prototype.Wa,rn.prototype.getResponseText=rn.prototype.ja,rn.prototype.send=rn.prototype.ha,rn.prototype.setWithCredentials=rn.prototype.Oa,qn.prototype.digest=qn.prototype.l,qn.prototype.reset=qn.prototype.reset,qn.prototype.update=qn.prototype.j,zn.prototype.add=zn.prototype.add,zn.prototype.multiply=zn.prototype.R,zn.prototype.modulo=zn.prototype.gb,zn.prototype.compare=zn.prototype.X,zn.prototype.toNumber=zn.prototype.ea,zn.prototype.toString=zn.prototype.toString,zn.prototype.getBits=zn.prototype.D,zn.fromNumber=Wn,zn.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return er(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=Wn(Math.pow(n,8)),i=Jn,o=0;o<e.length;o+=8){var s=Math.min(8,e.length-o),a=parseInt(e.substring(o,o+s),n);8>s?(s=Wn(Math.pow(n,s)),i=i.R(s).add(Wn(a))):i=(i=i.R(r)).add(Wn(a))}return i};var cr=o.createWebChannelTransport=function(){return new jn},ur=o.getStatEventTarget=function(){return $t()},lr=o.ErrorCode=Ht,hr=o.EventType=zt,dr=o.Event=Lt,fr=o.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},pr=(o.FetchXmlHttpFactory=Je,o.WebChannel=Wt),mr=o.XhrIo=rn,vr=o.Md5=qn,gr=o.Integer=zn}).call(this,n(5))},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...o)=>{const s=o.map(t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}}).filter(t=>t).join(" ");n>=(null!=r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:s,args:o,type:e.name})}}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s}));var r=n(0);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.a;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,"[DEFAULT]"===r?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class s{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var t=a(d);l=!0;for(var e=u.length;e;){for(c=u,u=[];++h<e;)c&&c[h].run();h=-1,e=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){(function(e,n){
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var r;r=function(){"use strict";var t=Object.freeze({}),r=Array.isArray;function i(t){return null==t}function o(t){return null!=t}function s(t){return!0===t}function a(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function c(t){return"function"==typeof t}function u(t){return null!==t&&"object"==typeof t}var l=Object.prototype.toString;function h(t){return l.call(t).slice(8,-1)}function d(t){return"[object Object]"===l.call(t)}function f(t){return"[object RegExp]"===l.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function m(t){return o(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||d(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}var _=y("slot,component",!0),w=y("key,ref,slot,slot-scope,is");function b(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var T=Object.prototype.hasOwnProperty;function C(t,e){return T.call(t,e)}function E(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var I=/-(\w)/g,S=E((function(t){return t.replace(I,(function(t,e){return e?e.toUpperCase():""}))})),k=E((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),O=/\B([A-Z])/g,A=E((function(t){return t.replace(O,"-$1").toLowerCase()})),x=Function.prototype.bind?function(t,e){return t.bind(e)}:function(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n};function N(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function R(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&R(e,t[n]);return e}function P(t,e,n){}var L=function(t,e,n){return!1},M=function(t){return t};function $(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return $(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return $(t[n],e[n])}))}catch(t){return!1}}function j(t,e){for(var n=0;n<t.length;n++)if($(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function U(t,e){return t===e?0===t&&1/t!=1/e:t==t||e==e}var V=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!0,devtools:!0,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:P,parsePlatformTagName:M,mustUseProp:L,async:!0,_lifecycleHooks:B},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function K(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^".concat(H.source,".$_\\d]")),W="__proto__"in{},Q="undefined"!=typeof window,J=Q&&window.navigator.userAgent.toLowerCase(),Y=J&&/msie|trident/.test(J),X=J&&J.indexOf("msie 9.0")>0,Z=J&&J.indexOf("edge/")>0;J&&J.indexOf("android");var tt=J&&/iphone|ipad|ipod|ios/.test(J);J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J);var et,nt=J&&J.match(/firefox\/(\d+)/),rt={}.watch,it=!1;if(Q)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){it=!0}}),window.addEventListener("test-passive",null,ot)}catch(t){}var st=function(){return void 0===et&&(et=!Q&&void 0!==e&&e.process&&"server"===e.process.env.VUE_ENV),et},at=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ct(t){return"function"==typeof t&&/native code/.test(t.toString())}var ut,lt="undefined"!=typeof Symbol&&ct(Symbol)&&"undefined"!=typeof Reflect&&ct(Reflect.ownKeys);ut="undefined"!=typeof Set&&ct(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ht=null;function dt(t){void 0===t&&(t=null),t||ht&&ht._scope.off(),ht=t,t&&t._scope.on()}var ft,pt=function(){function t(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),mt=function(t){void 0===t&&(t="");var e=new pt;return e.text=t,e.isComment=!0,e};function vt(t){return new pt(void 0,void 0,void 0,String(t))}function gt(t){var e=new pt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var yt=y("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require"),_t=function(t,e){Cr('Property or method "'.concat(e,'" is not defined on the instance but ')+"referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.",t)},wt=function(t,e){Cr('Property "'.concat(e,'" must be accessed with "$data.').concat(e,'" because ')+'properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://v2.vuejs.org/v2/api/#data',t)},bt="undefined"!=typeof Proxy&&ct(Proxy);if(bt){var Tt=y("stop,prevent,self,ctrl,shift,alt,meta,exact");q.keyCodes=new Proxy(q.keyCodes,{set:function(t,e,n){return Tt(e)?(Cr("Avoid overwriting built-in modifier in config.keyCodes: .".concat(e)),!1):(t[e]=n,!0)}})}var Ct={has:function(t,e){var n=e in t,r=yt(e)||"string"==typeof e&&"_"===e.charAt(0)&&!(e in t.$data);return n||r||(e in t.$data?wt(t,e):_t(t,e)),n||!r}},Et={get:function(t,e){return"string"!=typeof e||e in t||(e in t.$data?wt(t,e):_t(t,e)),t[e]}};ft=function(t){if(bt){var e=t.$options,n=e.render&&e.render._withStripped?Et:Ct;t._renderProxy=new Proxy(t,n)}else t._renderProxy=t};var It=function(){return(It=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},St=0,kt=[],Ot=function(){function t(){this._pending=!1,this.id=St++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,kt.push(this))},t.prototype.depend=function(e){t.target&&(t.target.addDep(this),e&&t.target.onTrack&&t.target.onTrack(It({effect:t.target},e)))},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));q.async||e.sort((function(t,e){return t.id-e.id}));for(var n=0,r=e.length;n<r;n++){var i=e[n];t&&i.onTrigger&&i.onTrigger(It({effect:e[n]},t)),i.update()}},t}();Ot.target=null;var At=[];function xt(t){At.push(t),Ot.target=t}function Nt(){At.pop(),Ot.target=At[At.length-1]}var Rt=Array.prototype,Dt=Object.create(Rt);["push","pop","shift","unshift","splice","sort","reverse"].forEach((function(t){var e=Rt[t];K(Dt,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&s.observeArray(i),s.dep.notify({type:"array mutation",target:this,key:t}),o}))}));var Pt=Object.getOwnPropertyNames(Dt),Lt={},Mt=!0;function $t(t){Mt=t}var jt,Ft,Ut={notify:P,depend:P,addSub:P,removeSub:P},Vt=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Ut:new Ot,this.vmCount=0,K(t,"__ob__",this),r(t)){if(!n)if(W)t.__proto__=Dt;else for(var i=0,o=Pt.length;i<o;i++)K(t,a=Pt[i],Dt[a]);e||this.observeArray(t)}else{var s=Object.keys(t);for(i=0;i<s.length;i++){var a;qt(t,a=s[i],Lt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Bt(t[e],!1,this.mock)},t}();function Bt(t,e,n){return t&&C(t,"__ob__")&&t.__ob__ instanceof Vt?t.__ob__:!Mt||!n&&st()||!r(t)&&!d(t)||!Object.isExtensible(t)||t.__v_skip||Zt(t)||t instanceof pt?void 0:new Vt(t,e,n)}function qt(t,e,n,i,o,s){var a=new Ot,c=Object.getOwnPropertyDescriptor(t,e);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==Lt&&2!==arguments.length||(n=t[e]);var h=!o&&Bt(n,!1,s);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var i=u?u.call(t):n;return Ot.target&&(a.depend({target:t,type:"get",key:e}),h&&(h.dep.depend(),r(i)&&Kt(i))),Zt(i)&&!o?i.value:i},set:function(r){var c=u?u.call(t):n;if(U(c,r)){if(i&&i(),l)l.call(t,r);else{if(u)return;if(!o&&Zt(c)&&!Zt(r))return void(c.value=r);n=r}h=!o&&Bt(r,!1,s),a.notify({type:"set",target:t,key:e,newValue:r,oldValue:c})}}}),a}}function Ht(t,e,n){if((i(t)||a(t))&&Cr("Cannot set reactive property on undefined, null, or primitive value: ".concat(t)),!Yt(t)){var o=t.__ob__;return r(t)&&p(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),o&&!o.shallow&&o.mock&&Bt(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||o&&o.vmCount?(Cr("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."),n):o?(qt(o.value,e,n,void 0,o.shallow,o.mock),o.dep.notify({type:"add",target:t,key:e,newValue:n,oldValue:void 0}),n):(t[e]=n,n)}Cr('Set operation on key "'.concat(e,'" failed: target is readonly.'))}function zt(t,e){if((i(t)||a(t))&&Cr("Cannot delete reactive property on undefined, null, or primitive value: ".concat(t)),r(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount?Cr("Avoid deleting properties on a Vue instance or its root $data - just set it to null."):Yt(t)?Cr('Delete operation on key "'.concat(e,'" failed: target is readonly.')):C(t,e)&&(delete t[e],n&&n.dep.notify({type:"delete",target:t,key:e}))}}function Kt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)(e=t[n])&&e.__ob__&&e.__ob__.dep.depend(),r(e)&&Kt(e)}function Gt(t){return Wt(t,!0),K(t,"__v_isShallow",!0),t}function Wt(t,e){if(!Yt(t)){r(t)&&Cr("Avoid using Array as root value for ".concat(e?"shallowReactive()":"reactive()"," as it cannot be tracked in watch() or watchEffect(). Use ").concat(e?"shallowRef()":"ref()"," instead. This is a Vue-2-only limitation."));var n=t&&t.__ob__;n&&n.shallow!==e&&Cr("Target is already a ".concat(n.shallow?"":"non-","shallow reactive object, and cannot be converted to ").concat(e?"":"non-","shallow.")),Bt(t,e,st())||((null==t||a(t))&&Cr("value cannot be made reactive: ".concat(String(t))),Xt(t)&&Cr("Vue 2 does not support reactive collection types such as Map or Set."))}}function Qt(t){return Yt(t)?Qt(t.__v_raw):!(!t||!t.__ob__)}function Jt(t){return!(!t||!t.__v_isShallow)}function Yt(t){return!(!t||!t.__v_isReadonly)}function Xt(t){var e=h(t);return"Map"===e||"WeakMap"===e||"Set"===e||"WeakSet"===e}function Zt(t){return!(!t||!0!==t.__v_isRef)}function te(t,e){if(Zt(t))return t;var n={};return K(n,"__v_isRef",!0),K(n,"__v_isShallow",e),K(n,"dep",qt(n,"value",t,null,e,st())),n}function ee(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Zt(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Zt(r)&&!Zt(t)?r.value=t:e[n]=t}})}function ne(t,e,n){var r=t[e];if(Zt(r))return r;var i={get value(){var r=t[e];return void 0===r?n:r},set value(n){t[e]=n}};return K(i,"__v_isRef",!0),i}function re(t){return ie(t,!1)}function ie(t,e){if(!d(t))return r(t)?Cr("Vue 2 does not support readonly arrays."):Xt(t)?Cr("Vue 2 does not support readonly collection types such as Map or Set."):Cr("value cannot be made readonly: ".concat(typeof t)),t;if(Object.isExtensible(t)||Cr("Vue 2 does not support creating readonly proxy for non-extensible object."),Yt(t))return t;var n=e?"__v_rawToShallowReadonly":"__v_rawToReadonly",i=t[n];if(i)return i;var o=Object.create(Object.getPrototypeOf(t));K(t,n,o),K(o,"__v_isReadonly",!0),K(o,"__v_raw",t),Zt(t)&&K(o,"__v_isRef",!0),(e||Jt(t))&&K(o,"__v_isShallow",!0);for(var s=Object.keys(t),a=0;a<s.length;a++)oe(o,t,s[a],e);return o}function oe(t,e,n,r){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];return r||!d(t)?t:re(t)},set:function(){Cr('Set operation on key "'.concat(n,'" failed: target is readonly.'))}})}var se=Q&&window.performance;se&&se.mark&&se.measure&&se.clearMarks&&se.clearMeasures&&(jt=function(t){return se.mark(t)},Ft=function(t,e,n){se.measure(t,e,n),se.clearMarks(e),se.clearMarks(n)});var ae=E((function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}}));function ce(t,e){function n(){var t=n.fns;if(!r(t))return In(t,null,arguments,e,"v-on handler");for(var i=t.slice(),o=0;o<i.length;o++)In(i[o],null,arguments,e,"v-on handler")}return n.fns=t,n}function ue(t,e,n,r,o,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=ae(c),i(u)?Cr('Invalid handler for event "'.concat(h.name,'": got ')+String(u),a):i(l)?(i(u.fns)&&(u=t[c]=ce(u,a)),s(h.once)&&(u=t[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l);for(c in e)i(t[c])&&r((h=ae(c)).name,e[c],h.capture)}function le(t,e,n){var r;t instanceof pt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),b(r.fns,c)}i(a)?r=ce([c]):o(a.fns)&&s(a.merged)?(r=a).fns.push(c):r=ce([a,c]),r.merged=!0,t[e]=r}function he(t,e,n,r,i){if(o(e)){if(C(e,n))return t[n]=e[n],i||delete e[n],!0;if(C(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function de(t){return a(t)?[vt(t)]:r(t)?function t(e,n){var c,u,l,h,d=[];for(c=0;c<e.length;c++)i(u=e[c])||"boolean"==typeof u||(l=d.length-1,h=d[l],r(u)?u.length>0&&(fe((u=t(u,"".concat(n||"","_").concat(c)))[0])&&fe(h)&&(d[l]=vt(h.text+u[0].text),u.shift()),d.push.apply(d,u)):a(u)?fe(h)?d[l]=vt(h.text+u):""!==u&&d.push(vt(u)):fe(u)&&fe(h)?d[l]=vt(h.text+u.text):(s(e._isVList)&&o(u.tag)&&i(u.key)&&o(n)&&(u.key="__vlist".concat(n,"_").concat(c,"__")),d.push(u)));return d}(t):void 0}function fe(t){return o(t)&&o(t.text)&&!1===t.isComment}function pe(t,e,n,l,h,d){return(r(n)||a(n))&&(h=l,l=n,n=void 0),s(d)&&(h=2),function(t,e,n,l,h){if(o(n)&&o(n.__ob__))return Cr("Avoid using observed data object as vnode data: ".concat(JSON.stringify(n),"\n")+"Always create fresh vnode data objects in each render!",t),mt();if(o(n)&&o(n.is)&&(e=n.is),!e)return mt();var d,f;if(o(n)&&o(n.key)&&!a(n.key)&&Cr("Avoid using non-primitive value as key, use string/number value instead.",t),r(l)&&c(l[0])&&((n=n||{}).scopedSlots={default:l[0]},l.length=0),2===h?l=de(l):1===h&&(l=function(t){for(var e=0;e<t.length;e++)if(r(t[e]))return Array.prototype.concat.apply([],t);return t}(l)),"string"==typeof e){var p=void 0;f=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),q.isReservedTag(e)?(o(n)&&o(n.nativeOn)&&"component"!==n.tag&&Cr("The .native modifier for v-on is only valid on components but it was used on <".concat(e,">."),t),d=new pt(q.parsePlatformTagName(e),n,l,void 0,void 0,t)):d=n&&n.pre||!o(p=Mr(t.$options,"components",e))?new pt(e,n,l,void 0,void 0,t):_r(p,n,t,l,e)}else d=_r(e,n,t,l);return r(d)?d:o(d)?(o(f)&&function t(e,n,r){if(e.ns=n,"foreignObject"===e.tag&&(n=void 0,r=!0),o(e.children))for(var a=0,c=e.children.length;a<c;a++){var u=e.children[a];o(u.tag)&&(i(u.ns)||s(r)&&"svg"!==u.tag)&&t(u,n,r)}}(d,f),o(n)&&function(t){u(t.style)&&Zn(t.style),u(t.class)&&Zn(t.class)}(n),d):mt()}(t,e,n,l,h)}function me(t,e){var n,i,s,a,c=null;if(r(t)||"string"==typeof t)for(c=new Array(t.length),n=0,i=t.length;n<i;n++)c[n]=e(t[n],n);else if("number"==typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(u(t))if(lt&&t[Symbol.iterator]){c=[];for(var l=t[Symbol.iterator](),h=l.next();!h.done;)c.push(e(h.value,c.length)),h=l.next()}else for(s=Object.keys(t),c=new Array(s.length),n=0,i=s.length;n<i;n++)a=s[n],c[n]=e(t[a],a,n);return o(c)||(c=[]),c._isVList=!0,c}function ve(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(u(r)||Cr("slot v-bind without argument expects an Object",this),n=R(R({},r),n)),i=o(n)||(c(e)?e():e)):i=this.$slots[t]||(c(e)?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function ge(t){return Mr(this.$options,"filters",t,!0)||M}function ye(t,e){return r(t)?-1===t.indexOf(e):t!==e}function _e(t,e,n,r,i){var o=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?ye(i,r):o?ye(o,t):r?A(r)!==e:void 0===t}function we(t,e,n,i,o){if(n)if(u(n)){r(n)&&(n=D(n));var s=void 0,a=function(r){if("class"===r||"style"===r||w(r))s=t;else{var a=t.attrs&&t.attrs.type;s=i||q.mustUseProp(e,a,r)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=S(r),u=A(r);c in s||u in s||(s[r]=n[r],o&&((t.on||(t.on={}))["update:".concat(r)]=function(t){n[r]=t}))};for(var c in n)a(c)}else Cr("v-bind without argument expects an Object or Array value",this);return t}function be(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||Ce(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),"__static__".concat(t),!1),r}function Te(t,e,n){return Ce(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function Ce(t,e,n){if(r(t))for(var i=0;i<t.length;i++)t[i]&&"string"!=typeof t[i]&&Ee(t[i],"".concat(e,"_").concat(i),n);else Ee(t,e,n)}function Ee(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ie(t,e){if(e)if(d(e)){var n=t.on=t.on?R({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else Cr("v-on without argument expects an Object value",this);return t}function Se(t,e,n,i){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var s=t[o];r(s)?Se(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return i&&(e.$key=i),e}function ke(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"==typeof r&&r?t[e[n]]=e[n+1]:""!==r&&null!==r&&Cr("Invalid value for dynamic directive argument (expected string or null): ".concat(r),this)}return t}function Oe(t,e){return"string"==typeof t?e+t:t}function Ae(t){t._o=Te,t._n=g,t._s=v,t._l=me,t._t=ve,t._q=$,t._i=j,t._m=be,t._f=ge,t._k=_e,t._b=we,t._v=vt,t._e=mt,t._u=Se,t._g=Ie,t._d=ke,t._p=Oe}function xe(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Ne)&&delete n[u];return n}function Ne(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Re(t){return t.isComment&&t.asyncFactory}function De(e,n,r,i){var o,s=Object.keys(r).length>0,a=n?!!n.$stable:!s,c=n&&n.$key;if(n){if(n._normalized)return n._normalized;if(a&&i&&i!==t&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var u in o={},n)n[u]&&"$"!==u[0]&&(o[u]=Pe(e,r,u,n[u]))}else o={};for(var l in r)l in o||(o[l]=Le(r,l));return n&&Object.isExtensible(n)&&(n._normalized=o),K(o,"$stable",a),K(o,"$key",c),K(o,"$hasNormal",s),o}function Pe(t,e,n,i){var o=function(){var e=ht;dt(t);var n=arguments.length?i.apply(null,arguments):i({}),o=(n=n&&"object"==typeof n&&!r(n)?[n]:de(n))&&n[0];return dt(e),n&&(!o||1===n.length&&o.isComment&&!Re(o))?void 0:n};return i.proxy&&Object.defineProperty(e,n,{get:o,enumerable:!0,configurable:!0}),o}function Le(t,e){return function(){return t[e]}}function Me(e){var n=!1;return{get attrs(){if(!e._attrsProxy){var n=e._attrsProxy={};K(n,"_v_attr_proxy",!0),$e(n,e.$attrs,t,e,"$attrs")}return e._attrsProxy},get listeners(){return e._listenersProxy||$e(e._listenersProxy={},e.$listeners,t,e,"$listeners"),e._listenersProxy},get slots(){return function(t){return t._slotsProxy||Fe(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}(e)},emit:x(e.$emit,e),expose:function(t){n&&Cr("expose() should be called only once per setup().",e),n=!0,t&&Object.keys(t).forEach((function(n){return ee(e,t,n)}))}}}function $e(t,e,n,r,i){var o=!1;for(var s in e)s in t?e[s]!==n[s]&&(o=!0):(o=!0,je(t,s,r,i));for(var s in t)s in e||(o=!0,delete t[s]);return o}function je(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Fe(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Ue(){ht||Cr("useContext() called without active instance.");var t=ht;return t._setupContext||(t._setupContext=Me(t))}var Ve,Be=null;function qe(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function He(t){if(r(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||Re(n)))return n}}function ze(t,e){Ve.$on(t,e)}function Ke(t,e){Ve.$off(t,e)}function Ge(t,e){var n=Ve;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function We(t,e,n){Ve=t,ue(e,n||{},ze,Ke,Ge,t),Ve=void 0}var Qe=null,Je=!1;function Ye(t){var e=Qe;return Qe=t,function(){Qe=e}}function Xe(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function Ze(t,e){if(e){if(t._directInactive=!1,Xe(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Ze(t.$children[n]);tn(t,"activated")}}function tn(t,e,n,r){void 0===r&&(r=!0),xt();var i=ht;r&&dt(t);var o=t.$options[e],s="".concat(e," hook");if(o)for(var a=0,c=o.length;a<c;a++)In(o[a],t,n||null,t,s);t._hasHookEvent&&t.$emit("hook:"+e),r&&dt(i),Nt()}var en=[],nn=[],rn={},on={},sn=!1,an=!1,cn=0,un=0,ln=Date.now;if(Q&&!Y){var hn=window.performance;hn&&"function"==typeof hn.now&&ln()>document.createEvent("Event").timeStamp&&(ln=function(){return hn.now()})}var dn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function fn(){var t,e;for(un=ln(),an=!0,en.sort(dn),cn=0;cn<en.length;cn++)if((t=en[cn]).before&&t.before(),e=t.id,rn[e]=null,t.run(),null!=rn[e]&&(on[e]=(on[e]||0)+1,on[e]>100)){Cr("You may have an infinite update loop "+(t.user?'in watcher with expression "'.concat(t.expression,'"'):"in a component render function."),t.vm);break}var n=nn.slice(),r=en.slice();cn=en.length=nn.length=0,rn={},on={},sn=an=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Ze(t[e],!0)}(n),function(t){for(var e=t.length;e--;){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&tn(r,"updated")}}(r),function(){for(var t=0;t<kt.length;t++){var e=kt[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}kt.length=0}(),at&&q.devtools&&at.emit("flush")}function pn(t){var e=t.id;if(null==rn[e]&&(t!==Ot.target||!t.noRecurse)){if(rn[e]=!0,an){for(var n=en.length-1;n>cn&&en[n].id>t.id;)n--;en.splice(n+1,0,t)}else en.push(t);if(!sn){if(sn=!0,!q.async)return void fn();$n(fn)}}}var mn="".concat("watcher"," callback"),vn="".concat("watcher"," getter"),gn="".concat("watcher"," cleanup");function yn(t,e){return bn(t,null,It(It({},e),{flush:"post"}))}var _n,wn={};function bn(e,n,i){var o=void 0===i?t:i,s=o.immediate,a=o.deep,u=o.flush,l=void 0===u?"pre":u,h=o.onTrack,d=o.onTrigger;n||(void 0!==s&&Cr('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),void 0!==a&&Cr('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));var f,p,m=function(t){Cr("Invalid watch source: ".concat(t,". A watch source can only be a getter/effect ")+"function, a ref, a reactive object, or an array of these types.")},v=ht,g=function(t,e,n){return void 0===n&&(n=null),In(t,null,n,v,e)},y=!1,_=!1;if(Zt(e)?(f=function(){return e.value},y=Jt(e)):Qt(e)?(f=function(){return e.__ob__.dep.depend(),e},a=!0):r(e)?(_=!0,y=e.some((function(t){return Qt(t)||Jt(t)})),f=function(){return e.map((function(t){return Zt(t)?t.value:Qt(t)?Zn(t):c(t)?g(t,vn):void m(t)}))}):c(e)?f=n?function(){return g(e,vn)}:function(){if(!v||!v._isDestroyed)return p&&p(),g(e,"watcher",[b])}:(f=P,m(e)),n&&a){var w=f;f=function(){return Zn(w())}}var b=function(t){p=T.onStop=function(){g(t,gn)}};if(st())return b=P,n?s&&g(n,mn,[f(),_?[]:void 0,b]):f(),P;var T=new er(ht,f,P,{lazy:!0});T.noRecurse=!n;var C=_?[]:wn;return T.run=function(){if(T.active)if(n){var t=T.get();(a||y||(_?t.some((function(t,e){return U(t,C[e])})):U(t,C)))&&(p&&p(),g(n,mn,[t,C===wn?void 0:C,b]),C=t)}else T.get()},"sync"===l?T.update=T.run:"post"===l?(T.post=!0,T.update=function(){return pn(T)}):T.update=function(){if(v&&v===ht&&!v._isMounted){var t=v._preWatchers||(v._preWatchers=[]);t.indexOf(T)<0&&t.push(T)}else pn(T)},T.onTrack=h,T.onTrigger=d,n?s?T.run():C=T.get():"post"===l&&v?v.$once("hook:mounted",(function(){return T.get()})):T.get(),function(){T.teardown()}}var Tn=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=_n,!t&&_n&&(this.index=(_n.scopes||(_n.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=_n;try{return _n=this,t()}finally{_n=e}}else Cr("cannot run an inactive effect scope.")},t.prototype.on=function(){_n=this},t.prototype.off=function(){_n=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Cn(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}function En(t,e,n){xt();try{if(e)for(var r=e;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,t,e,n))return}catch(t){Sn(t,r,"errorCaptured hook")}}Sn(t,e,n)}finally{Nt()}}function In(t,e,n,r,i){var o;try{(o=n?t.apply(e,n):t.call(e))&&!o._isVue&&m(o)&&!o._handled&&(o.catch((function(t){return En(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(t){En(t,r,i)}return o}function Sn(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(e){e!==t&&kn(e,null,"config.errorHandler")}kn(t,e,n)}function kn(t,e,n){if(Cr("Error in ".concat(n,': "').concat(t.toString(),'"'),e),!Q||"undefined"==typeof console)throw t;console.error(t)}var On,An=!1,xn=[],Nn=!1;function Rn(){Nn=!1;var t=xn.slice(0);xn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!=typeof Promise&&ct(Promise)){var Dn=Promise.resolve();On=function(){Dn.then(Rn),tt&&setTimeout(P)},An=!0}else if(Y||"undefined"==typeof MutationObserver||!ct(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())On=void 0!==n&&ct(n)?function(){n(Rn)}:function(){setTimeout(Rn,0)};else{var Pn=1,Ln=new MutationObserver(Rn),Mn=document.createTextNode(String(Pn));Ln.observe(Mn,{characterData:!0}),On=function(){Pn=(Pn+1)%2,Mn.data=String(Pn)},An=!0}function $n(t,e){var n;if(xn.push((function(){if(t)try{t.call(e)}catch(t){En(t,e,"nextTick")}else n&&n(e)})),Nn||(Nn=!0,On()),!t&&"undefined"!=typeof Promise)return new Promise((function(t){n=t}))}function jn(t){return function(e,n){if(void 0===n&&(n=ht),n)return function(t,e,n){var r=t.$options;r[e]=xr(r[e],n)}(n,t,e);Cr("".concat(function(t){return"beforeDestroy"===t?t="beforeUnmount":"destroyed"===t&&(t="unmounted"),"on".concat(t[0].toUpperCase()+t.slice(1))}(t)," is called when there is no active component instance to be ")+"associated with. Lifecycle injection APIs can only be used during execution of setup().")}}var Fn=jn("beforeMount"),Un=jn("mounted"),Vn=jn("beforeUpdate"),Bn=jn("updated"),qn=jn("beforeDestroy"),Hn=jn("destroyed"),zn=jn("activated"),Kn=jn("deactivated"),Gn=jn("serverPrefetch"),Wn=jn("renderTracked"),Qn=jn("renderTriggered"),Jn=jn("errorCaptured"),Yn=Object.freeze({__proto__:null,version:"2.7.14",defineComponent:function(t){return t},ref:function(t){return te(t,!1)},shallowRef:function(t){return te(t,!0)},isRef:Zt,toRef:ne,toRefs:function(t){Qt(t)||Cr("toRefs() expects a reactive object but received a plain one.");var e=r(t)?new Array(t.length):{};for(var n in t)e[n]=ne(t,n);return e},unref:function(t){return Zt(t)?t.value:t},proxyRefs:function(t){if(Qt(t))return t;for(var e={},n=Object.keys(t),r=0;r<n.length;r++)ee(e,t,n[r]);return e},customRef:function(t){var e=new Ot,n=t((function(){e.depend({target:o,type:"get",key:"value"})}),(function(){e.notify({target:o,type:"set",key:"value"})})),r=n.get,i=n.set,o={get value(){return r()},set value(t){i(t)}};return K(o,"__v_isRef",!0),o},triggerRef:function(t){t.dep||Cr("received object is not a triggerable ref."),t.dep&&t.dep.notify({type:"set",target:t,key:"value"})},reactive:function(t){return Wt(t,!1),t},isReactive:Qt,isReadonly:Yt,isShallow:Jt,isProxy:function(t){return Qt(t)||Yt(t)},shallowReactive:Gt,markRaw:function(t){return Object.isExtensible(t)&&K(t,"__v_skip",!0),t},toRaw:function t(e){var n=e&&e.__v_raw;return n?t(n):e},readonly:re,shallowReadonly:function(t){return ie(t,!0)},computed:function(t,e){var n,r,i=c(t);i?(n=t,r=function(){Cr("Write operation failed: computed value is readonly")}):(n=t.get,r=t.set);var o=st()?null:new er(ht,n,P,{lazy:!0});o&&e&&(o.onTrack=e.onTrack,o.onTrigger=e.onTrigger);var s={effect:o,get value(){return o?(o.dirty&&o.evaluate(),Ot.target&&(Ot.target.onTrack&&Ot.target.onTrack({effect:Ot.target,target:s,type:"get",key:"value"}),o.depend()),o.value):n()},set value(t){r(t)}};return K(s,"__v_isRef",!0),K(s,"__v_isReadonly",i),s},watch:function(t,e,n){return"function"!=typeof e&&Cr("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),bn(t,e,n)},watchEffect:function(t,e){return bn(t,null,e)},watchPostEffect:yn,watchSyncEffect:function(t,e){return bn(t,null,It(It({},e),{flush:"sync"}))},EffectScope:Tn,effectScope:function(t){return new Tn(t)},onScopeDispose:function(t){_n?_n.cleanups.push(t):Cr("onScopeDispose() is called when there is no active effect scope to be associated with.")},getCurrentScope:function(){return _n},provide:function(t,e){ht?Cn(ht)[t]=e:Cr("provide() can only be used inside setup().")},inject:function(t,e,n){void 0===n&&(n=!1);var r=ht;if(r){var i=r.$parent&&r.$parent._provided;if(i&&t in i)return i[t];if(arguments.length>1)return n&&c(e)?e.call(r):e;Cr('injection "'.concat(String(t),'" not found.'))}else Cr("inject() can only be used inside setup() or functional components.")},h:function(t,e,n){return ht||Cr("globally imported h() can only be invoked when there is an active component instance, e.g. synchronously in a component's render or setup function."),pe(ht,t,e,n,2,!0)},getCurrentInstance:function(){return ht&&{proxy:ht}},useSlots:function(){return Ue().slots},useAttrs:function(){return Ue().attrs},useListeners:function(){return Ue().listeners},mergeDefaults:function(t,e){var n=r(t)?t.reduce((function(t,e){return t[e]={},t}),{}):t;for(var i in e){var o=n[i];o?r(o)||c(o)?n[i]={type:o,default:e[i]}:o.default=e[i]:null===o?n[i]={default:e[i]}:Cr('props default key "'.concat(i,'" has no corresponding declaration.'))}return n},nextTick:$n,set:Ht,del:zt,useCssModule:function(e){return Cr("useCssModule() is not supported in the global build."),t},useCssVars:function(t){if(Q){var e=ht;e?yn((function(){var n=e.$el,r=t(e,e._setupProxy);if(n&&1===n.nodeType){var i=n.style;for(var o in r)i.setProperty("--".concat(o),r[o])}})):Cr("useCssVars is called without current active component instance.")}},defineAsyncComponent:function(t){c(t)&&(t={loader:t});var e=t.loader,n=t.loadingComponent,r=t.errorComponent,i=t.delay,o=void 0===i?200:i,s=t.timeout,a=t.suspensible,l=void 0!==a&&a,h=t.onError;l&&Cr("The suspensiblbe option for async components is not supported in Vue2. It is ignored.");var d=null,f=0,p=function(){var t;return d||(t=d=e().catch((function(t){if(t=t instanceof Error?t:new Error(String(t)),h)return new Promise((function(e,n){h(t,(function(){return e((f++,d=null,p()))}),(function(){return n(t)}),f+1)}));throw t})).then((function(e){if(t!==d&&d)return d;if(e||Cr("Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."),e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),e&&!u(e)&&!c(e))throw new Error("Invalid async component load result: ".concat(e));return e})))};return function(){return{component:p(),delay:o,timeout:s,error:r,loading:n}}},onBeforeMount:Fn,onMounted:Un,onBeforeUpdate:Vn,onUpdated:Bn,onBeforeUnmount:qn,onUnmounted:Hn,onActivated:zn,onDeactivated:Kn,onServerPrefetch:Gn,onRenderTracked:Wn,onRenderTriggered:Qn,onErrorCaptured:function(t,e){void 0===e&&(e=ht),Jn(t,e)}}),Xn=new ut;function Zn(t){return function t(e,n){var i,o,s=r(e);if(!(!s&&!u(e)||e.__v_skip||Object.isFrozen(e)||e instanceof pt)){if(e.__ob__){var a=e.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(s)for(i=e.length;i--;)t(e[i],n);else if(Zt(e))t(e.value,n);else for(o=Object.keys(e),i=o.length;i--;)t(e[o[i]],n)}}(t,Xn),Xn.clear(),t}var tr=0,er=function(){function t(t,e,n,r,i){!function(t,e){void 0===e&&(e=_n),e&&e.active&&e.effects.push(t)}(this,_n&&!_n._vm?_n:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before,this.onTrack=r.onTrack,this.onTrigger=r.onTrigger):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++tr,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ut,this.newDepIds=new ut,this.expression=e.toString(),c(e)?this.getter=e:(this.getter=function(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=P,Cr('Failed watching path: "'.concat(e,'" ')+"Watcher only accepts simple dot-delimited paths. For full control, use a function instead.",t))),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;xt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;En(t,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&Zn(t),Nt(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():pn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');In(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&b(this.vm._scope.effects,this),this.active){for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}(),nr={enumerable:!0,configurable:!0,get:P,set:P};function rr(t,e,n){nr.get=function(){return this[e][n]},nr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,nr)}function ir(t){var e=t.$options;if(e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props=Gt({}),i=t.$options._propKeys=[],o=!t.$parent;o||$t(!1);var s=function(s){i.push(s);var a=$r(s,e,n,t),c=A(s);(w(c)||q.isReservedAttr(c))&&Cr('"'.concat(c,'" is a reserved attribute and cannot be used as component prop.'),t),qt(r,s,a,(function(){o||Je||Cr("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's "+'value. Prop being mutated: "'.concat(s,'"'),t)})),s in t||rr(t,"_props",s)};for(var a in e)s(a);$t(!0)}(t,e.props),function(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=Me(t);dt(t),xt();var i=In(n,null,[t._props||Gt({}),r],t,"setup");if(Nt(),dt(),c(i))e.render=i;else if(u(i))if(i instanceof pt&&Cr("setup() should not return VNodes directly - return a render function instead."),t._setupState=i,i.__sfc){var o=t._setupProxy={};for(var s in i)"__sfc"!==s&&ee(o,i,s)}else for(var s in i)z(s)?Cr("Avoid using variables that start with _ or $ in setup()."):ee(t,i,s);else void 0!==i&&Cr("setup() should return an object. Received: ".concat(null===i?"null":typeof i))}}(t),e.methods&&function(t,e){var n=t.$options.props;for(var r in e)"function"!=typeof e[r]&&Cr('Method "'.concat(r,'" has type "').concat(typeof e[r],'" in the component definition. ')+"Did you reference the function correctly?",t),n&&C(n,r)&&Cr('Method "'.concat(r,'" has already been defined as a prop.'),t),r in t&&z(r)&&Cr('Method "'.concat(r,'" conflicts with an existing Vue instance method. ')+"Avoid defining component methods that start with _ or $."),t[r]="function"!=typeof e[r]?P:x(e[r],t)}(t,e.methods),e.data)!function(t){var e=t.$options.data;d(e=t._data=c(e)?function(t,e){xt();try{return t.call(e,e)}catch(t){return En(t,e,"data()"),{}}finally{Nt()}}(e,t):e||{})||(e={},Cr("data functions should return an object:\nhttps://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",t));for(var n=Object.keys(e),r=t.$options.props,i=t.$options.methods,o=n.length;o--;){var s=n[o];i&&C(i,s)&&Cr('Method "'.concat(s,'" has already been defined as a data property.'),t),r&&C(r,s)?Cr('The data property "'.concat(s,'" is already declared as a prop. ')+"Use prop default value instead.",t):z(s)||rr(t,"_data",s)}var a=Bt(e);a&&a.vmCount++}(t);else{var n=Bt(t._data={});n&&n.vmCount++}e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),r=st();for(var i in e){var o=e[i],s=c(o)?o:o.get;null==s&&Cr('Getter is missing for computed property "'.concat(i,'".'),t),r||(n[i]=new er(t,s||P,P,or)),i in t?i in t.$data?Cr('The computed property "'.concat(i,'" is already defined in data.'),t):t.$options.props&&i in t.$options.props?Cr('The computed property "'.concat(i,'" is already defined as a prop.'),t):t.$options.methods&&i in t.$options.methods&&Cr('The computed property "'.concat(i,'" is already defined as a method.'),t):sr(t,i,o)}}(t,e.computed),e.watch&&e.watch!==rt&&function(t,e){for(var n in e){var i=e[n];if(r(i))for(var o=0;o<i.length;o++)ur(t,n,i[o]);else ur(t,n,i)}}(t,e.watch)}var or={lazy:!0};function sr(t,e,n){var r=!st();c(n)?(nr.get=r?ar(e):cr(n),nr.set=P):(nr.get=n.get?r&&!1!==n.cache?ar(e):cr(n.get):P,nr.set=n.set||P),nr.set===P&&(nr.set=function(){Cr('Computed property "'.concat(e,'" was assigned to but it has no setter.'),this)}),Object.defineProperty(t,e,nr)}function ar(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Ot.target&&(Ot.target.onTrack&&Ot.target.onTrack({effect:Ot.target,target:this,type:"get",key:t}),e.depend()),e.value}}function cr(t){return function(){return t.call(this,this)}}function ur(t,e,n,r){return d(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function lr(t,e){if(t){for(var n=Object.create(null),r=lt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from;if(s in e._provided)n[o]=e._provided[s];else if("default"in t[o]){var a=t[o].default;n[o]=c(a)?a.call(e):a}else Cr('Injection "'.concat(o,'" not found'),e)}}return n}}var hr=0;function dr(t){var e=t.options;if(t.super){var n=dr(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}(t);r&&R(t.extendOptions,r),(e=t.options=Lr(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function fr(e,n,i,o,a){var c,u=this,l=a.options;C(o,"_uid")?(c=Object.create(o))._original=o:(c=o,o=o._original);var h=s(l._compiled),d=!h;this.data=e,this.props=n,this.children=i,this.parent=o,this.listeners=e.on||t,this.injections=lr(l.inject,o),this.slots=function(){return u.$slots||De(o,e.scopedSlots,u.$slots=xe(i,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return De(o,e.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=De(o,e.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,i){var s=pe(c,t,e,n,i,d);return s&&!r(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(t,e,n,r){return pe(c,t,e,n,r,d)}}function pr(t,e,n,r,i){var o=gt(t);return o.fnContext=n,o.fnOptions=r,(o.devtoolsMeta=o.devtoolsMeta||{}).renderContext=i,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function mr(t,e){for(var n in e)t[S(n)]=e[n]}function vr(t){return t.name||t.__name||t._componentTag}Ae(fr.prototype);var gr={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;gr.prepatch(n,n)}else(t.componentInstance=function(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}(t,Qe)).$mount(e?t.elm:void 0,e)},prepatch:function(e,n){var r=n.componentOptions;!function(e,n,r,i,o){Je=!0;var s=i.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==t&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key||!s&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o;var h=i.data.attrs||t;e._attrsProxy&&$e(e._attrsProxy,h,l.data&&l.data.attrs||t,e,"$attrs")&&(u=!0),e.$attrs=h,r=r||t;var d=e.$options._parentListeners;if(e._listenersProxy&&$e(e._listenersProxy,r,d||t,e,"$listeners"),e.$listeners=e.$options._parentListeners=r,We(e,r,d),n&&e.$options.props){$t(!1);for(var f=e._props,p=e.$options._propKeys||[],m=0;m<p.length;m++){var v=p[m],g=e.$options.props;f[v]=$r(v,g,n,e)}$t(!0),e.$options.propsData=n}u&&(e.$slots=xe(o,i.context),e.$forceUpdate()),Je=!1}(n.componentInstance=e.componentInstance,r.propsData,r.listeners,n,r.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,tn(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,nn.push(e)):Ze(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(!(n&&(e._directInactive=!0,Xe(e))||e._inactive)){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);tn(e,"deactivated")}}(e,!0):e.$destroy())}},yr=Object.keys(gr);function _r(e,n,a,c,l){if(!i(e)){var h=a.$options._base;if(u(e)&&(e=h.extend(e)),"function"==typeof e){var d;if(i(e.cid)&&void 0===(e=function(t,e){if(s(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=Be;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),s(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var r=t.owners=[n],a=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return b(r,n)}));var h=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},d=F((function(n){t.resolved=qe(n,e),a?r.length=0:h(!0)})),f=F((function(e){Cr("Failed to resolve async component: ".concat(String(t))+(e?"\nReason: ".concat(e):"")),o(t.errorComp)&&(t.error=!0,h(!0))})),p=t(d,f);return u(p)&&(m(p)?i(t.resolved)&&p.then(d,f):m(p.component)&&(p.component.then(d,f),o(p.error)&&(t.errorComp=qe(p.error,e)),o(p.loading)&&(t.loadingComp=qe(p.loading,e),0===p.delay?t.loading=!0:c=setTimeout((function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))}),p.delay||200)),o(p.timeout)&&(l=setTimeout((function(){l=null,i(t.resolved)&&f("timeout (".concat(p.timeout,"ms)"))}),p.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}(d=e,h)))return function(t,e,n,r,i){var o=mt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}(d,n,a,c,l);n=n||{},dr(e),o(n.model)&&function(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),a=s[i],c=e.model.callback;o(a)?(r(a)?-1===a.indexOf(c):a!==c)&&(s[i]=[c].concat(a)):s[i]=c}(e.options,n);var f=function(t,e,n){var r=e.options.props;if(!i(r)){var s={},a=t.attrs,c=t.props;if(o(a)||o(c))for(var u in r){var l=A(u),h=u.toLowerCase();u!==h&&a&&C(a,h)&&Er('Prop "'.concat(h,'" is passed to component ')+"".concat(Tr(n||e),", but the declared prop name is")+' "'.concat(u,'". ')+"Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM "+'templates. You should probably use "'.concat(l,'" instead of "').concat(u,'".')),he(s,c,u,l,!0)||he(s,a,u,l,!1)}return s}}(n,e,l);if(s(e.options.functional))return function(e,n,i,s,a){var c=e.options,u={},l=c.props;if(o(l))for(var h in l)u[h]=$r(h,l,n||t);else o(i.attrs)&&mr(u,i.attrs),o(i.props)&&mr(u,i.props);var d=new fr(i,u,a,s,e),f=c.render.call(null,d._c,d);if(f instanceof pt)return pr(f,i,d.parent,c,d);if(r(f)){for(var p=de(f)||[],m=new Array(p.length),v=0;v<p.length;v++)m[v]=pr(p[v],i,d.parent,c,d);return m}}(e,f,n,a,c);var p=n.on;if(n.on=n.nativeOn,s(e.options.abstract)){var v=n.slot;n={},v&&(n.slot=v)}!function(t){for(var e=t.hook||(t.hook={}),n=0;n<yr.length;n++){var r=yr[n],i=e[r],o=gr[r];i===o||i&&i._merged||(e[r]=i?wr(o,i):o)}}(n);var g=vr(e.options)||l;return new pt("vue-component-".concat(e.cid).concat(g?"-".concat(g):""),n,void 0,void 0,void 0,a,{Ctor:e,propsData:f,listeners:p,tag:l,children:c},d)}Cr("Invalid Component definition: ".concat(String(e)),a)}}function wr(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}var br,Tr,Cr=P,Er=P,Ir="undefined"!=typeof console,Sr=/(?:^|[-_])(\w)/g;Cr=function(t,e){void 0===e&&(e=ht);var n=e?br(e):"";q.warnHandler?q.warnHandler.call(null,t,e,n):Ir&&!q.silent&&console.error("[Vue warn]: ".concat(t).concat(n))},Er=function(t,e){Ir&&!q.silent&&console.warn("[Vue tip]: ".concat(t)+(e?br(e):""))},Tr=function(t,e){if(t.$root===t)return"<Root>";var n=c(t)&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t,r=vr(n),i=n.__file;if(!r&&i){var o=i.match(/([^/\\]+)\.vue$/);r=o&&o[1]}return(r?"<".concat(function(t){return t.replace(Sr,(function(t){return t.toUpperCase()})).replace(/[-_]/g,"")}(r),">"):"<Anonymous>")+(i&&!1!==e?" at ".concat(i):"")},br=function(t){if(t._isVue&&t.$parent){for(var e=[],n=0;t;){if(e.length>0){var i=e[e.length-1];if(i.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[i,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map((function(t,e){return"".concat(0===e?"---\x3e ":function(t,e){for(var n="";e;)e%2==1&&(n+=t),e>1&&(t+=t),e>>=1;return n}(" ",5+2*e)).concat(r(t)?"".concat(Tr(t[0]),"... (").concat(t[1]," recursive calls)"):Tr(t))})).join("\n")}return"\n\n(found in ".concat(Tr(t),")")};var kr=q.optionMergeStrategies;function Or(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,i,o,s=lt?Reflect.ownKeys(e):Object.keys(e),a=0;a<s.length;a++)"__ob__"!==(r=s[a])&&(i=t[r],o=e[r],n&&C(t,r)?i!==o&&d(i)&&d(o)&&Or(i,o):Ht(t,r,o));return t}function Ar(t,e,n){return n?function(){var r=c(e)?e.call(n,n):e,i=c(t)?t.call(n,n):t;return r?Or(r,i):i}:e?t?function(){return Or(c(e)?e.call(this,this):e,c(t)?t.call(this,this):t)}:e:t}function xr(t,e){var n=e?t?t.concat(e):r(e)?e:[e]:t;return n?function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(n):n}function Nr(t,e,n,r){var i=Object.create(t||null);return e?(Pr(r,e,n),R(i,e)):i}kr.el=kr.propsData=function(t,e,n,r){return n||Cr('option "'.concat(r,'" can only be used during instance ')+"creation with the `new` keyword."),Rr(t,e)},kr.data=function(t,e,n){return n?Ar(t,e,n):e&&"function"!=typeof e?(Cr('The "data" option should be a function that returns a per-instance value in component definitions.',n),t):Ar(t,e)},B.forEach((function(t){kr[t]=xr})),V.forEach((function(t){kr[t+"s"]=Nr})),kr.watch=function(t,e,n,i){if(t===rt&&(t=void 0),e===rt&&(e=void 0),!e)return Object.create(t||null);if(Pr(i,e,n),!t)return e;var o={};for(var s in R(o,t),e){var a=o[s],c=e[s];a&&!r(a)&&(a=[a]),o[s]=a?a.concat(c):r(c)?c:[c]}return o},kr.props=kr.methods=kr.inject=kr.computed=function(t,e,n,r){if(e&&Pr(r,e,n),!t)return e;var i=Object.create(null);return R(i,t),e&&R(i,e),i},kr.provide=function(t,e){return t?function(){var n=Object.create(null);return Or(n,c(t)?t.call(this):t),e&&Or(n,c(e)?e.call(this):e,!1),n}:e};var Rr=function(t,e){return void 0===e?t:e};function Dr(t){new RegExp("^[a-zA-Z][\\-\\.0-9_".concat(H.source,"]*$")).test(t)||Cr('Invalid component name: "'+t+'". Component names should conform to valid custom element name in html5 specification.'),(_(t)||q.isReservedTag(t))&&Cr("Do not use built-in or reserved HTML elements as component id: "+t)}function Pr(t,e,n){d(e)||Cr('Invalid value for option "'.concat(t,'": expected an Object, ')+"but got ".concat(h(e),"."),n)}function Lr(t,e,n){if(function(t){for(var e in t.components)Dr(e)}(e),c(e)&&(e=e.options),function(t,e){var n=t.props;if(n){var i,o,s={};if(r(n))for(i=n.length;i--;)"string"==typeof(o=n[i])?s[S(o)]={type:null}:Cr("props must be strings when using array syntax.");else if(d(n))for(var a in n)o=n[a],s[S(a)]=d(o)?o:{type:o};else Cr('Invalid value for option "props": expected an Array or an Object, '+"but got ".concat(h(n),"."),e);t.props=s}}(e,n),function(t,e){var n=t.inject;if(n){var i=t.inject={};if(r(n))for(var o=0;o<n.length;o++)i[n[o]]={from:n[o]};else if(d(n))for(var s in n){var a=n[s];i[s]=d(a)?R({from:s},a):{from:a}}else Cr('Invalid value for option "inject": expected an Array or an Object, '+"but got ".concat(h(n),"."),e)}}(e,n),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];c(r)&&(e[n]={bind:r,update:r})}}(e),!e._base&&(e.extends&&(t=Lr(t,e.extends,n)),e.mixins))for(var i=0,o=e.mixins.length;i<o;i++)t=Lr(t,e.mixins[i],n);var s,a={};for(s in t)u(s);for(s in e)C(t,s)||u(s);function u(r){var i=kr[r]||Rr;a[r]=i(t[r],e[r],n,r)}return a}function Mr(t,e,n,r){if("string"==typeof n){var i=t[e];if(C(i,n))return i[n];var o=S(n);if(C(i,o))return i[o];var s=k(o);if(C(i,s))return i[s];var a=i[n]||i[o]||i[s];return r&&!a&&Cr("Failed to resolve "+e.slice(0,-1)+": "+n),a}}function $r(t,e,n,i){var o=e[t],s=!C(n,t),a=n[t],l=qr(Boolean,o.type);if(l>-1)if(s&&!C(o,"default"))a=!1;else if(""===a||a===A(t)){var d=qr(String,o.type);(d<0||l<d)&&(a=!0)}if(void 0===a){a=function(t,e,n){if(C(e,"default")){var r=e.default;return u(r)&&Cr('Invalid default value for prop "'+n+'": Props with type Object/Array must use a factory function to return the default value.',t),t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:c(r)&&"Function"!==Vr(e.type)?r.call(t):r}}(i,o,t);var f=Mt;$t(!0),Bt(a),$t(f)}return function(t,e,n,i,o){if(t.required&&o)Cr('Missing required prop: "'+e+'"',i);else if(null!=n||t.required){var s=t.type,a=!s||!0===s,c=[];if(s){r(s)||(s=[s]);for(var u=0;u<s.length&&!a;u++){var l=Fr(n,s[u],i);c.push(l.expectedType||""),a=l.valid}}var d=c.some((function(t){return t}));if(a||!d){var f=t.validator;f&&(f(n)||Cr('Invalid prop: custom validator check failed for prop "'+e+'".',i))}else Cr(function(t,e,n){var r='Invalid prop: type check failed for prop "'.concat(t,'".')+" Expected ".concat(n.map(k).join(", ")),i=n[0],o=h(e);return 1===n.length&&Kr(i)&&Kr(typeof e)&&!function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.some((function(t){return"boolean"===t.toLowerCase()}))}(i,o)&&(r+=" with value ".concat(Hr(e,i))),r+=", got ".concat(o," "),Kr(o)&&(r+="with value ".concat(Hr(e,o),".")),r}(e,n,c),i)}}(o,t,a,i,s),a}var jr=/^(String|Number|Boolean|Function|Symbol|BigInt)$/;function Fr(t,e,n){var i,o=Vr(e);if(jr.test(o)){var s=typeof t;(i=s===o.toLowerCase())||"object"!==s||(i=t instanceof e)}else if("Object"===o)i=d(t);else if("Array"===o)i=r(t);else try{i=t instanceof e}catch(t){Cr('Invalid prop type: "'+String(e)+'" is not a constructor',n),i=!1}return{valid:i,expectedType:o}}var Ur=/^\s*function (\w+)/;function Vr(t){var e=t&&t.toString().match(Ur);return e?e[1]:""}function Br(t,e){return Vr(t)===Vr(e)}function qr(t,e){if(!r(e))return Br(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Br(e[n],t))return n;return-1}function Hr(t,e){return"String"===e?'"'.concat(t,'"'):"".concat("Number"===e?Number(t):t)}var zr=["string","number","boolean"];function Kr(t){return zr.some((function(e){return t.toLowerCase()===e}))}function Gr(t){this instanceof Gr||Cr("Vue is a constructor and should be called with the `new` keyword"),this._init(t)}function Wr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=vr(t)||vr(n.options);o&&Dr(o);var s=function(t){this._init(t)};return(s.prototype=Object.create(n.prototype)).constructor=s,s.cid=e++,s.options=Lr(n.options,t),s.super=n,s.options.props&&function(t){var e=t.options.props;for(var n in e)rr(t.prototype,"_props",n)}(s),s.options.computed&&function(t){var e=t.options.computed;for(var n in e)sr(t.prototype,n,e[n])}(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,V.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=R({},s.options),i[r]=s,s}}function Qr(t){return t&&(vr(t.Ctor.options)||t.tag)}function Jr(t,e){return r(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function Yr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&Xr(n,o,r,i)}}}function Xr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,b(n,e)}!function(e){e.prototype._init=function(e){var n,r,i=this;i._uid=hr++,q.performance&&jt&&(n="vue-perf-start:".concat(i._uid),r="vue-perf-end:".concat(i._uid),jt(n)),i._isVue=!0,i.__v_skip=!0,i._scope=new Tn(!0),i._scope._vm=!0,e&&e._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(i,e):i.$options=Lr(dr(i.constructor),e||{},i),ft(i),i._self=i,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(i),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&We(t,e)}(i),function(e){e._vnode=null,e._staticTrees=null;var n=e.$options,r=e.$vnode=n._parentVnode,i=r&&r.context;e.$slots=xe(n._renderChildren,i),e.$scopedSlots=r?De(e.$parent,r.data.scopedSlots,e.$slots):t,e._c=function(t,n,r,i){return pe(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return pe(e,t,n,r,i,!0)};var o=r&&r.data;qt(e,"$attrs",o&&o.attrs||t,(function(){!Je&&Cr("$attrs is readonly.",e)}),!0),qt(e,"$listeners",n._parentListeners||t,(function(){!Je&&Cr("$listeners is readonly.",e)}),!0)}(i),tn(i,"beforeCreate",void 0,!1),function(t){var e=lr(t.$options.inject,t);e&&($t(!1),Object.keys(e).forEach((function(n){qt(t,n,e[n],(function(){Cr("Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. "+'injection being mutated: "'.concat(n,'"'),t)}))})),$t(!0))}(i),ir(i),function(t){var e=t.$options.provide;if(e){var n=c(e)?e.call(t):e;if(!u(n))return;for(var r=Cn(t),i=lt?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}(i),tn(i,"created"),q.performance&&jt&&(i._name=Tr(i,!1),jt(r),Ft("vue ".concat(i._name," init"),n,r)),i.$options.el&&i.$mount(i.$options.el)}}(Gr),function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};e.set=function(){Cr("Avoid replacing instance root $data. Use nested data properties instead.",this)},n.set=function(){Cr("$props is readonly.",this)},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ht,t.prototype.$delete=zt,t.prototype.$watch=function(t,e,n){if(d(e))return ur(this,t,e,n);(n=n||{}).user=!0;var r=new er(this,t,e,n);if(n.immediate){var i='callback for immediate watcher "'.concat(r.expression,'"');xt(),In(e,this,[r.value],this,i),Nt()}return function(){r.teardown()}}}(Gr),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(r(t))for(var o=0,s=t.length;o<s;o++)i.$on(t[o],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(r(t)){for(var i=0,o=t.length;i<o;i++)n.$off(t[i],e);return n}var s,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;for(var c=a.length;c--;)if((s=a[c])===e||s.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=t.toLowerCase();n!==t&&e._events[n]&&Er('Event "'.concat(n,'" is emitted in component ')+"".concat(Tr(e),' but the handler is registered for "').concat(t,'". ')+"Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. "+'You should probably use "'.concat(A(t),'" instead of "').concat(t,'".'));var r=e._events[t];if(r){r=r.length>1?N(r):r;for(var i=N(arguments,1),o='event handler for "'.concat(t,'"'),s=0,a=r.length;s<a;s++)In(r[s],e,i,e,o)}return e}}(Gr),function(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=Ye(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);for(var s=n;s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode;)s.$parent.$el=s.$el,s=s.$parent},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){tn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||b(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),tn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}(Gr),function(t){Ae(t.prototype),t.prototype.$nextTick=function(t){return $n(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,o=n._parentVnode;o&&e._isMounted&&(e.$scopedSlots=De(e.$parent,o.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&Fe(e._slotsProxy,e.$scopedSlots)),e.$vnode=o;try{dt(e),Be=e,t=i.call(e._renderProxy,e.$createElement)}catch(n){if(En(n,e,"render"),e.$options.renderError)try{t=e.$options.renderError.call(e._renderProxy,e.$createElement,n)}catch(n){En(n,e,"renderError"),t=e._vnode}else t=e._vnode}finally{Be=null,dt()}return r(t)&&1===t.length&&(t=t[0]),t instanceof pt||(r(t)&&Cr("Multiple root nodes returned from render function. Render function should return a single root node.",e),t=mt()),t.parent=o,t}}(Gr);var Zr=[String,RegExp,Array],ti={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Zr,exclude:Zr,max:[String,Number]},methods:{cacheVNode:function(){var t=this.cache,e=this.keys,n=this.vnodeToCache,r=this.keyToCache;if(n){var i=n.tag,o=n.componentInstance,s=n.componentOptions;t[r]={name:Qr(s),tag:i,componentInstance:o},e.push(r),this.max&&e.length>parseInt(this.max)&&Xr(t,e[0],e,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Xr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Yr(t,(function(t){return Jr(e,t)}))})),this.$watch("exclude",(function(e){Yr(t,(function(t){return!Jr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=He(t),n=e&&e.componentOptions;if(n){var r=Qr(n),i=this.include,o=this.exclude;if(i&&(!r||!Jr(i,r))||o&&r&&Jr(o,r))return e;var s=this.cache,a=this.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;s[c]?(e.componentInstance=s[c].componentInstance,b(a,c),a.push(c)):(this.vnodeToCache=e,this.keyToCache=c),e.data.keepAlive=!0}return e||t&&t[0]}}};!function(t){var e={get:function(){return q},set:function(){Cr("Do not replace the Vue.config object, set individual fields instead.")}};Object.defineProperty(t,"config",e),t.util={warn:Cr,extend:R,mergeOptions:Lr,defineReactive:qt},t.set=Ht,t.delete=zt,t.nextTick=$n,t.observable=function(t){return Bt(t),t},t.options=Object.create(null),V.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,R(t.options.components,ti),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=N(arguments,1);return n.unshift(this),c(t.install)?t.install.apply(t,n):c(t)&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=Lr(this.options,t),this}}(t),Wr(t),function(t){V.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&Dr(t),"component"===e&&d(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&c(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}(t)}(Gr),Object.defineProperty(Gr.prototype,"$isServer",{get:st}),Object.defineProperty(Gr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Gr,"FunctionalRenderContext",{value:fr}),Gr.version="2.7.14";var ei=y("style,class"),ni=y("input,textarea,option,select,progress"),ri=function(t,e,n){return"value"===n&&ni(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},ii=y("contenteditable,draggable,spellcheck"),oi=y("events,caret,typing,plaintext-only"),si=y("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),ai="http://www.w3.org/1999/xlink",ci=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},ui=function(t){return ci(t)?t.slice(6,t.length):""},li=function(t){return null==t||!1===t};function hi(t){for(var e=t.data,n=t,r=t;o(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(e=di(r.data,e));for(;o(n=n.parent);)n&&n.data&&(e=di(e,n.data));return i=e.staticClass,s=e.class,o(i)||o(s)?fi(i,pi(s)):"";var i,s}function di(t,e){return{staticClass:fi(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function fi(t,e){return t?e?t+" "+e:t:e||""}function pi(t){return Array.isArray(t)?function(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=pi(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}(t):u(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}var mi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},vi=y("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),gi=y("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),yi=function(t){return vi(t)||gi(t)};function _i(t){return gi(t)?"svg":"math"===t?"math":void 0}var wi=Object.create(null),bi=y("text,number,password,search,email,tel,url");function Ti(t){if("string"==typeof t){var e=document.querySelector(t);return e||(Cr("Cannot find element: "+t),document.createElement("div"))}return t}var Ci=Object.freeze({__proto__:null,createElement:function(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(t,e){return document.createElementNS(mi[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setStyleScope:function(t,e){t.setAttribute(e,"")}}),Ei={create:function(t,e){Ii(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ii(t,!0),Ii(e))},destroy:function(t){Ii(t,!0)}};function Ii(t,e){var n=t.data.ref;if(o(n)){var i=t.context,s=t.componentInstance||t.elm,a=e?null:s,u=e?void 0:s;if(c(n))In(n,i,[a],i,"template ref function");else{var l=t.data.refInFor,h="string"==typeof n||"number"==typeof n,d=Zt(n),f=i.$refs;if(h||d)if(l){var p=h?f[n]:n.value;e?r(p)&&b(p,s):r(p)?p.includes(s)||p.push(s):h?(f[n]=[s],Si(i,n,f[n])):n.value=[s]}else if(h){if(e&&f[n]!==s)return;f[n]=u,Si(i,n,a)}else if(d){if(e&&n.value!==s)return;n.value=a}else Cr("Invalid template ref type: ".concat(typeof n))}}}function Si(t,e,n){var r=t._setupState;r&&C(r,e)&&(Zt(r[e])?r[e].value=n:r[e]=n)}var ki=new pt("",{},[]),Oi=["create","activate","update","remove","destroy"];function Ai(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,r=o(n=t.data)&&o(n=n.attrs)&&n.type,i=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===i||bi(r)&&bi(i)}(t,e)||s(t.isAsyncPlaceholder)&&i(e.asyncFactory.error))}function xi(t,e,n){var r,i,s={};for(r=e;r<=n;++r)o(i=t[r].key)&&(s[i]=r);return s}var Ni={create:Ri,update:Ri,destroy:function(t){Ri(t,ki)}};function Ri(t,e){(t.data.directives||e.data.directives)&&function(t,e){var n,r,i,o=t===ki,s=e===ki,a=Pi(t.data.directives,t.context),c=Pi(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Mi(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Mi(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Mi(u[n],"inserted",e,t)};o?le(e,"insert",h):h()}if(l.length&&le(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Mi(l[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||Mi(a[n],"unbind",t,t,s)}(t,e)}var Di=Object.create(null);function Pi(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if((r=t[n]).modifiers||(r.modifiers=Di),i[Li(r)]=r,e._setupState&&e._setupState.__sfc){var o=r.def||Mr(e,"_setupState","v-"+r.name);r.def="function"==typeof o?{bind:o,update:o}:o}r.def=r.def||Mr(e.$options,"directives",r.name,!0)}return i}function Li(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function Mi(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(r){En(r,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var $i=[Ei,Ni];function ji(t,e){var n=e.componentOptions;if(!(o(n)&&!1===n.Ctor.options.inheritAttrs||i(t.data.attrs)&&i(e.data.attrs))){var r,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(r in(o(l.__ob__)||s(l._v_attr_proxy))&&(l=e.data.attrs=R({},l)),l)a=l[r],u[r]!==a&&Fi(c,r,a,e.data.pre);for(r in(Y||Z)&&l.value!==u.value&&Fi(c,"value",l.value),u)i(l[r])&&(ci(r)?c.removeAttributeNS(ai,ui(r)):ii(r)||c.removeAttribute(r))}}function Fi(t,e,n,r){r||t.tagName.indexOf("-")>-1?Ui(t,e,n):si(e)?li(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):ii(e)?t.setAttribute(e,function(t,e){return li(e)||"false"===e?"false":"contenteditable"===t&&oi(e)?e:"true"}(e,n)):ci(e)?li(n)?t.removeAttributeNS(ai,ui(e)):t.setAttributeNS(ai,e,n):Ui(t,e,n)}function Ui(t,e,n){if(li(n))t.removeAttribute(e);else{if(Y&&!X&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Vi={create:ji,update:ji};function Bi(t,e){var n=e.elm,r=e.data,s=t.data;if(!(i(r.staticClass)&&i(r.class)&&(i(s)||i(s.staticClass)&&i(s.class)))){var a=hi(e),c=n._transitionClasses;o(c)&&(a=fi(a,pi(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var qi,Hi,zi,Ki,Gi,Wi,Qi,Ji,Yi={create:Bi,update:Bi},Xi=/[\w).+\-_$\]]/;function Zi(t){var e,n,r,i,o,s=!1,a=!1,c=!1,u=!1,l=0,h=0,d=0,f=0;for(r=0;r<t.length;r++)if(n=e,e=t.charCodeAt(r),s)39===e&&92!==n&&(s=!1);else if(a)34===e&&92!==n&&(a=!1);else if(c)96===e&&92!==n&&(c=!1);else if(u)47===e&&92!==n&&(u=!1);else if(124!==e||124===t.charCodeAt(r+1)||124===t.charCodeAt(r-1)||l||h||d){switch(e){case 34:a=!0;break;case 39:s=!0;break;case 96:c=!0;break;case 40:d++;break;case 41:d--;break;case 91:h++;break;case 93:h--;break;case 123:l++;break;case 125:l--}if(47===e){for(var p=r-1,m=void 0;p>=0&&" "===(m=t.charAt(p));p--);m&&Xi.test(m)||(u=!0)}}else void 0===i?(f=r+1,i=t.slice(0,r).trim()):v();function v(){(o||(o=[])).push(t.slice(f,r).trim()),f=r+1}if(void 0===i?i=t.slice(0,r).trim():0!==f&&v(),o)for(r=0;r<o.length;r++)i=to(i,o[r]);return i}function to(t,e){var n=e.indexOf("(");if(n<0)return'_f("'.concat(e,'")(').concat(t,")");var r=e.slice(0,n),i=e.slice(n+1);return'_f("'.concat(r,'")(').concat(t).concat(")"!==i?","+i:i)}function eo(t,e){console.error("[Vue compiler]: ".concat(t))}function no(t,e){return t?t.map((function(t){return t[e]})).filter((function(t){return t})):[]}function ro(t,e,n,r,i){(t.props||(t.props=[])).push(po({name:e,value:n,dynamic:i},r)),t.plain=!1}function io(t,e,n,r,i){(i?t.dynamicAttrs||(t.dynamicAttrs=[]):t.attrs||(t.attrs=[])).push(po({name:e,value:n,dynamic:i},r)),t.plain=!1}function oo(t,e,n,r){t.attrsMap[e]=n,t.attrsList.push(po({name:e,value:n},r))}function so(t,e,n,r,i,o,s,a){(t.directives||(t.directives=[])).push(po({name:e,rawName:n,value:r,arg:i,isDynamicArg:o,modifiers:s},a)),t.plain=!1}function ao(t,e,n){return n?"_p(".concat(e,',"').concat(t,'")'):t+e}function co(e,n,r,i,o,s,a,c){var u;i=i||t,s&&i.prevent&&i.passive&&s("passive and prevent can't be used together. Passive handler can't prevent default event.",a),i.right?c?n="(".concat(n,")==='click'?'contextmenu':(").concat(n,")"):"click"===n&&(n="contextmenu",delete i.right):i.middle&&(c?n="(".concat(n,")==='click'?'mouseup':(").concat(n,")"):"click"===n&&(n="mouseup")),i.capture&&(delete i.capture,n=ao("!",n,c)),i.once&&(delete i.once,n=ao("~",n,c)),i.passive&&(delete i.passive,n=ao("&",n,c)),i.native?(delete i.native,u=e.nativeEvents||(e.nativeEvents={})):u=e.events||(e.events={});var l=po({value:r.trim(),dynamic:c},a);i!==t&&(l.modifiers=i);var h=u[n];Array.isArray(h)?o?h.unshift(l):h.push(l):u[n]=h?o?[l,h]:[h,l]:l,e.plain=!1}function uo(t,e){return t.rawAttrsMap[":"+e]||t.rawAttrsMap["v-bind:"+e]||t.rawAttrsMap[e]}function lo(t,e,n){var r=ho(t,":"+e)||ho(t,"v-bind:"+e);if(null!=r)return Zi(r);if(!1!==n){var i=ho(t,e);if(null!=i)return JSON.stringify(i)}}function ho(t,e,n){var r;if(null!=(r=t.attrsMap[e]))for(var i=t.attrsList,o=0,s=i.length;o<s;o++)if(i[o].name===e){i.splice(o,1);break}return n&&delete t.attrsMap[e],r}function fo(t,e){for(var n=t.attrsList,r=0,i=n.length;r<i;r++){var o=n[r];if(e.test(o.name))return n.splice(r,1),o}}function po(t,e){return e&&(null!=e.start&&(t.start=e.start),null!=e.end&&(t.end=e.end)),t}function mo(t,e,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof ".concat("$$v"," === 'string'")+"? ".concat("$$v",".trim()")+": ".concat("$$v",")")),i&&(o="_n(".concat(o,")"));var s=vo(e,o);t.model={value:"(".concat(e,")"),expression:JSON.stringify(e),callback:"function (".concat("$$v",") {").concat(s,"}")}}function vo(t,e){var n=function(t){if(t=t.trim(),qi=t.length,t.indexOf("[")<0||t.lastIndexOf("]")<qi-1)return(Ki=t.lastIndexOf("."))>-1?{exp:t.slice(0,Ki),key:'"'+t.slice(Ki+1)+'"'}:{exp:t,key:null};for(Hi=t,Ki=Gi=Wi=0;!yo();)_o(zi=go())?bo(zi):91===zi&&wo(zi);return{exp:t.slice(0,Gi),key:t.slice(Gi+1,Wi)}}(t);return null===n.key?"".concat(t,"=").concat(e):"$set(".concat(n.exp,", ").concat(n.key,", ").concat(e,")")}function go(){return Hi.charCodeAt(++Ki)}function yo(){return Ki>=qi}function _o(t){return 34===t||39===t}function wo(t){var e=1;for(Gi=Ki;!yo();)if(_o(t=go()))bo(t);else if(91===t&&e++,93===t&&e--,0===e){Wi=Ki;break}}function bo(t){for(var e=t;!yo()&&(t=go())!==e;);}function To(t,e,n){var r=Ji;return function i(){var o=e.apply(null,arguments);null!==o&&Io(t,i,n,r)}}var Co=An&&!(nt&&Number(nt[1])<=53);function Eo(t,e,n,r){if(Co){var i=un,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Ji.addEventListener(t,e,it?{capture:n,passive:r}:n)}function Io(t,e,n,r){(r||Ji).removeEventListener(t,e._wrapper||e,n)}function So(t,e){if(!i(t.data.on)||!i(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Ji=e.elm||t.elm,function(t){if(o(t.__r)){var e=Y?"change":"input";t[e]=[].concat(t.__r,t[e]||[]),delete t.__r}o(t.__c)&&(t.change=[].concat(t.__c,t.change||[]),delete t.__c)}(n),ue(n,r,Eo,Io,To,e.context),Ji=void 0}}var ko,Oo={create:So,update:So,destroy:function(t){return So(t,ki)}};function Ao(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var n,r,a=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(n in(o(u.__ob__)||s(u._v_attr_proxy))&&(u=e.data.domProps=R({},u)),c)n in u||(a[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===c[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n&&"PROGRESS"!==a.tagName){a._value=r;var l=i(r)?"":String(r);xo(a,l)&&(a.value=l)}else if("innerHTML"===n&&gi(a.tagName)&&i(a.innerHTML)){(ko=ko||document.createElement("div")).innerHTML="<svg>".concat(r,"</svg>");for(var h=ko.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;h.firstChild;)a.appendChild(h.firstChild)}else if(r!==c[n])try{a[n]=r}catch(t){}}}}function xo(t,e){return!t.composing&&("OPTION"===t.tagName||function(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}(t,e)||function(t,e){var n=t.value,r=t._vModifiers;if(o(r)){if(r.number)return g(n)!==g(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}(t,e))}var No={create:Ao,update:Ao},Ro=E((function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach((function(t){if(t){var r=t.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim())}})),e}));function Do(t){var e=Po(t.style);return t.staticStyle?R(t.staticStyle,e):e}function Po(t){return Array.isArray(t)?D(t):"string"==typeof t?Ro(t):t}var Lo,Mo=/^--/,$o=/\s*!important$/,jo=function(t,e,n){if(Mo.test(e))t.style.setProperty(e,n);else if($o.test(n))t.style.setProperty(A(e),n.replace($o,""),"important");else{var r=Uo(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},Fo=["Webkit","Moz","ms"],Uo=E((function(t){if(Lo=Lo||document.createElement("div").style,"filter"!==(t=S(t))&&t in Lo)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Fo.length;n++){var r=Fo[n]+e;if(r in Lo)return r}}));function Vo(t,e){var n=e.data,r=t.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var s,a,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=Po(e.data.style)||{};e.data.normalizedStyle=o(d.__ob__)?R({},d):d;var f=function(t,e){var n,r={};if(e)for(var i=t;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=Do(i.data))&&R(r,n);(n=Do(t.data))&&R(r,n);for(var o=t;o=o.parent;)o.data&&(n=Do(o.data))&&R(r,n);return r}(e,!0);for(a in h)i(f[a])&&jo(c,a,"");for(a in f)(s=f[a])!==h[a]&&jo(c,a,null==s?"":s)}}var Bo={create:Vo,update:Vo},qo=/\s+/;function Ho(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(qo).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function zo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(qo).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function Ko(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&R(e,Go(t.name||"v")),R(e,t),e}return"string"==typeof t?Go(t):void 0}}var Go=E((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),Wo=Q&&!X,Qo="transition",Jo="transitionend",Yo="animation",Xo="animationend";Wo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Qo="WebkitTransition",Jo="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Yo="WebkitAnimation",Xo="webkitAnimationEnd"));var Zo=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function ts(t){Zo((function(){Zo(t)}))}function es(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Ho(t,e))}function ns(t,e){t._transitionClasses&&b(t._transitionClasses,e),zo(t,e)}function rs(t,e,n){var r=os(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a="transition"===i?Jo:Xo,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),t.addEventListener(a,l)}var is=/\b(transform|all)(,|$)/;function os(t,e){var n,r=window.getComputedStyle(t),i=(r[Qo+"Delay"]||"").split(", "),o=(r[Qo+"Duration"]||"").split(", "),s=ss(i,o),a=(r[Yo+"Delay"]||"").split(", "),c=(r[Yo+"Duration"]||"").split(", "),u=ss(a,c),l=0,h=0;return"transition"===e?s>0&&(n="transition",l=s,h=o.length):"animation"===e?u>0&&(n="animation",l=u,h=c.length):h=(n=(l=Math.max(s,u))>0?s>u?"transition":"animation":null)?"transition"===n?o.length:c.length:0,{type:n,timeout:l,propCount:h,hasTransform:"transition"===n&&is.test(r[Qo+"Property"])}}function ss(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return as(e)+as(t[n])})))}function as(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function cs(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Ko(t.data.transition);if(!i(r)&&!o(n._enterCb)&&1===n.nodeType){for(var s=r.css,a=r.type,l=r.enterClass,h=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,m=r.appearActiveClass,v=r.beforeEnter,y=r.enter,_=r.afterEnter,w=r.enterCancelled,b=r.beforeAppear,T=r.appear,C=r.afterAppear,E=r.appearCancelled,I=r.duration,S=Qe,k=Qe.$vnode;k&&k.parent;)S=k.context,k=k.parent;var O=!S._isMounted||!t.isRootInsert;if(!O||T||""===T){var A=O&&f?f:l,x=O&&m?m:d,N=O&&p?p:h,R=O&&b||v,D=O&&c(T)?T:y,P=O&&C||_,L=O&&E||w,M=g(u(I)?I.enter:I);null!=M&&ls(M,"enter",t);var $=!1!==s&&!X,j=ds(D),U=n._enterCb=F((function(){$&&(ns(n,N),ns(n,x)),U.cancelled?($&&ns(n,A),L&&L(n)):P&&P(n),n._enterCb=null}));t.data.show||le(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),D&&D(n,U)})),R&&R(n),$&&(es(n,A),es(n,x),ts((function(){ns(n,A),U.cancelled||(es(n,N),j||(hs(M)?setTimeout(U,M):rs(n,a,U)))}))),t.data.show&&(e&&e(),D&&D(n,U)),$||j||U()}}}function us(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Ko(t.data.transition);if(i(r)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var s=r.css,a=r.type,c=r.leaveClass,l=r.leaveToClass,h=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,m=r.leaveCancelled,v=r.delayLeave,y=r.duration,_=!1!==s&&!X,w=ds(f),b=g(u(y)?y.leave:y);o(b)&&ls(b,"leave",t);var T=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),_&&(ns(n,l),ns(n,h)),T.cancelled?(_&&ns(n,c),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(C):C()}function C(){T.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),_&&(es(n,c),es(n,h),ts((function(){ns(n,c),T.cancelled||(es(n,l),w||(hs(b)?setTimeout(T,b):rs(n,a,T)))}))),f&&f(n,T),_||w||T())}}function ls(t,e,n){"number"!=typeof t?Cr("<transition> explicit ".concat(e," duration is not a valid number - ")+"got ".concat(JSON.stringify(t),"."),n.context):isNaN(t)&&Cr("<transition> explicit ".concat(e," duration is NaN - ")+"the duration expression might be incorrect.",n.context)}function hs(t){return"number"==typeof t&&!isNaN(t)}function ds(t){if(i(t))return!1;var e=t.fns;return o(e)?ds(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function fs(t,e){!0!==e.data.show&&cs(e)}var ps=function(t){var e,n,c={},u=t.modules,l=t.nodeOps;for(e=0;e<Oi.length;++e)for(c[Oi[e]]=[],n=0;n<u.length;++n)o(u[n][Oi[e]])&&c[Oi[e]].push(u[n][Oi[e]]);function h(t){var e=l.parentNode(t);o(e)&&l.removeChild(e,t)}function d(t,e){return!e&&!t.ns&&!(q.ignoredElements.length&&q.ignoredElements.some((function(e){return f(e)?e.test(t.tag):e===t.tag})))&&q.isUnknownElement(t.tag)}var p=0;function m(t,e,n,r,i,a,u){if(o(t.elm)&&o(a)&&(t=a[u]=gt(t)),t.isRootInsert=!i,!function(t,e,n,r){var i=t.data;if(o(i)){var a=o(t.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(t,!1),o(t.componentInstance))return v(t,e),g(n,t.elm,r),s(a)&&function(t,e,n,r){for(var i,s=t;s.componentInstance;)if(s=s.componentInstance._vnode,o(i=s.data)&&o(i=i.transition)){for(i=0;i<c.activate.length;++i)c.activate[i](ki,s);e.push(s);break}g(n,t.elm,r)}(t,e,n,r),!0}}(t,e,n,r)){var h=t.data,f=t.children,m=t.tag;o(m)?(h&&h.pre&&p++,d(t,p)&&Cr("Unknown custom element: <"+m+'> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',t.context),t.elm=t.ns?l.createElementNS(t.ns,m):l.createElement(m,t),T(t),_(t,f,e),o(h)&&b(t,e),g(n,t.elm,r),h&&h.pre&&p--):s(t.isComment)?(t.elm=l.createComment(t.text),g(n,t.elm,r)):(t.elm=l.createTextNode(t.text),g(n,t.elm,r))}}function v(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(b(t,e),T(t)):(Ii(t),e.push(t))}function g(t,e,n){o(t)&&(o(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function _(t,e,n){if(r(e)){k(e);for(var i=0;i<e.length;++i)m(e[i],n,t.elm,null,!0,e,i)}else a(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function w(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return o(t.tag)}function b(t,n){for(var r=0;r<c.create.length;++r)c.create[r](ki,t);o(e=t.data.hook)&&(o(e.create)&&e.create(ki,t),o(e.insert)&&n.push(t))}function T(t){var e;if(o(e=t.fnScopeId))l.setStyleScope(t.elm,e);else for(var n=t;n;)o(e=n.context)&&o(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent;o(e=Qe)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function C(t,e,n,r,i,o){for(;r<=i;++r)m(n[r],o,t,e,!1,n,r)}function E(t){var e,n,r=t.data;if(o(r))for(o(e=r.hook)&&o(e=e.destroy)&&e(t),e=0;e<c.destroy.length;++e)c.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)E(t.children[n])}function I(t,e,n){for(;e<=n;++e){var r=t[e];o(r)&&(o(r.tag)?(S(r),E(r)):h(r.elm))}}function S(t,e){if(o(e)||o(t.data)){var n,r=c.remove.length+1;for(o(e)?e.listeners+=r:e=function(t,e){function n(){0==--n.listeners&&h(t)}return n.listeners=e,n}(t.elm,r),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&S(n,e),n=0;n<c.remove.length;++n)c.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else h(t.elm)}function k(t){for(var e={},n=0;n<t.length;n++){var r=t[n],i=r.key;o(i)&&(e[i]?Cr("Duplicate keys detected: '".concat(i,"'. This may cause an update error."),r.context):e[i]=!0)}}function O(t,e,n,r){for(var i=n;i<r;i++){var s=e[i];if(o(s)&&Ai(t,s))return i}}function A(t,e,n,r,a,u){if(t!==e){o(e.elm)&&o(r)&&(e=r[a]=gt(e));var h=e.elm=t.elm;if(s(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?D(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;o(f)&&o(d=f.hook)&&o(d=d.prepatch)&&d(t,e);var p=t.children,v=e.children;if(o(f)&&w(e)){for(d=0;d<c.update.length;++d)c.update[d](t,e);o(d=f.hook)&&o(d=d.update)&&d(t,e)}i(e.text)?o(p)&&o(v)?p!==v&&function(t,e,n,r,s){var a,c,u,h=0,d=0,f=e.length-1,p=e[0],v=e[f],g=n.length-1,y=n[0],_=n[g],w=!s;for(k(n);h<=f&&d<=g;)i(p)?p=e[++h]:i(v)?v=e[--f]:Ai(p,y)?(A(p,y,r,n,d),p=e[++h],y=n[++d]):Ai(v,_)?(A(v,_,r,n,g),v=e[--f],_=n[--g]):Ai(p,_)?(A(p,_,r,n,g),w&&l.insertBefore(t,p.elm,l.nextSibling(v.elm)),p=e[++h],_=n[--g]):Ai(v,y)?(A(v,y,r,n,d),w&&l.insertBefore(t,v.elm,p.elm),v=e[--f],y=n[++d]):(i(a)&&(a=xi(e,h,f)),i(c=o(y.key)?a[y.key]:O(y,e,h,f))?m(y,r,t,p.elm,!1,n,d):Ai(u=e[c],y)?(A(u,y,r,n,d),e[c]=void 0,w&&l.insertBefore(t,u.elm,p.elm)):m(y,r,t,p.elm,!1,n,d),y=n[++d]);h>f?C(t,i(n[g+1])?null:n[g+1].elm,n,d,g,r):d>g&&I(e,h,f)}(h,p,v,n,u):o(v)?(k(v),o(t.text)&&l.setTextContent(h,""),C(h,null,v,0,v.length-1,n)):o(p)?I(p,0,p.length-1):o(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),o(f)&&o(d=f.hook)&&o(d=d.postpatch)&&d(t,e)}}}function x(t,e,n){if(s(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=!1,R=y("attrs,class,staticClass,staticStyle,key");function D(t,e,n,r){var i,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,s(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(!function(t,e,n){return o(e.tag)?0===e.tag.indexOf("vue-component")||!d(e,n)&&e.tag.toLowerCase()===(t.tagName&&t.tagName.toLowerCase()):t.nodeType===(e.isComment?8:3)}(t,e,r))return!1;if(o(c)&&(o(i=c.hook)&&o(i=i.init)&&i(e,!0),o(i=e.componentInstance)))return v(e,n),!0;if(o(a)){if(o(u))if(t.hasChildNodes())if(o(i=c)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==t.innerHTML)return"undefined"==typeof console||N||(N=!0,console.warn("Parent: ",t),console.warn("server innerHTML: ",i),console.warn("client innerHTML: ",t.innerHTML)),!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!D(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return"undefined"==typeof console||N||(N=!0,console.warn("Parent: ",t),console.warn("Mismatching childNodes vs. VNodes: ",t.childNodes,u)),!1}else _(e,u,n);if(o(c)){var p=!1;for(var m in c)if(!R(m)){p=!0,b(e,n);break}!p&&c.class&&Zn(c.class)}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,r){if(!i(e)){var a,u=!1,h=[];if(i(t))u=!0,m(e,h);else{var d=o(t.nodeType);if(!d&&Ai(t,e))A(t,e,h,null,null,r);else{if(d){if(1===t.nodeType&&t.hasAttribute("data-server-rendered")&&(t.removeAttribute("data-server-rendered"),n=!0),s(n)){if(D(t,e,h))return x(e,h,!0),t;Cr("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")}a=t,t=new pt(l.tagName(a).toLowerCase(),{},[],void 0,a)}var f=t.elm,p=l.parentNode(f);if(m(e,h,f._leaveCb?null:p,l.nextSibling(f)),o(e.parent))for(var v=e.parent,g=w(e);v;){for(var y=0;y<c.destroy.length;++y)c.destroy[y](v);if(v.elm=e.elm,g){for(var _=0;_<c.create.length;++_)c.create[_](ki,v);var b=v.data.hook.insert;if(b.merged)for(var T=1;T<b.fns.length;T++)b.fns[T]()}else Ii(v);v=v.parent}o(p)?I([t],0,0):o(t.tag)&&E(t)}}return x(e,h,u),e.elm}o(t)&&E(t)}}({nodeOps:Ci,modules:[Vi,Yi,Oo,No,Bo,Q?{create:fs,activate:fs,remove:function(t,e){!0!==t.data.show?us(t,e):e()}}:{}].concat($i)});X&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Ts(t,"input")}));var ms={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?le(n,"postpatch",(function(){ms.componentUpdated(t,e,n)})):vs(t,e,n.context),t._vOptions=[].map.call(t.options,_s)):("textarea"===n.tag||bi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",ws),t.addEventListener("compositionend",bs),t.addEventListener("change",bs),X&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){vs(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,_s);i.some((function(t,e){return!$(t,r[e])}))&&(t.multiple?e.value.some((function(t){return ys(t,i)})):e.value!==e.oldValue&&ys(e.value,i))&&Ts(t,"change")}}};function vs(t,e,n){gs(t,e,n),(Y||Z)&&setTimeout((function(){gs(t,e,n)}),0)}function gs(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=j(r,_s(s))>-1,s.selected!==o&&(s.selected=o);else if($(_s(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}else Cr('<select multiple v-model="'.concat(e.expression,'"> ')+"expects an Array value for its binding, but got ".concat(Object.prototype.toString.call(r).slice(8,-1)),n)}function ys(t,e){return e.every((function(e){return!$(e,t)}))}function _s(t){return"_value"in t?t._value:t.value}function ws(t){t.target.composing=!0}function bs(t){t.target.composing&&(t.target.composing=!1,Ts(t.target,"input"))}function Ts(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Cs(t){return!t.componentInstance||t.data&&t.data.transition?t:Cs(t.componentInstance._vnode)}var Es={model:ms,show:{bind:function(t,e,n){var r=e.value,i=(n=Cs(n)).data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,cs(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value;!r!=!e.oldValue&&((n=Cs(n)).data&&n.data.transition?(n.data.show=!0,r?cs(n,(function(){t.style.display=t.__vOriginalDisplay})):us(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}}},Is={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Ss(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Ss(He(e.children)):t}function ks(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[S(r)]=i[r];return e}function Os(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}var As=function(t){return t.tag||Re(t)},xs=function(t){return"show"===t.name},Ns={name:"transition",props:Is,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(As)).length){n.length>1&&Cr("<transition> can only be used on a single element. Use <transition-group> for lists.",this.$parent);var r=this.mode;r&&"in-out"!==r&&"out-in"!==r&&Cr("invalid <transition> mode: "+r,this.$parent);var i=n[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return i;var o=Ss(i);if(!o)return i;if(this._leaving)return Os(t,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:a(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var c=(o.data||(o.data={})).transition=ks(this),u=this._vnode,l=Ss(u);if(o.data.directives&&o.data.directives.some(xs)&&(o.data.show=!0),l&&l.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(o,l)&&!Re(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=R({},c);if("out-in"===r)return this._leaving=!0,le(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Os(t,i);if("in-out"===r){if(Re(o))return u;var d,f=function(){d()};le(c,"afterEnter",f),le(c,"enterCancelled",f),le(h,"delayLeave",(function(t){d=t}))}}return i}}},Rs=R({tag:String,moveClass:String},Is);function Ds(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Ps(t){t.data.newPos=t.elm.getBoundingClientRect()}function Ls(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}delete Rs.mode;var Ms={Transition:Ns,TransitionGroup:{props:Rs,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Ye(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=ks(this),a=0;a<i.length;a++)if((d=i[a]).tag)if(null!=d.key&&0!==String(d.key).indexOf("__vlist"))o.push(d),n[d.key]=d,(d.data||(d.data={})).transition=s;else{var c=d.componentOptions,u=c?vr(c.Ctor.options)||c.tag||"":d.tag;Cr("<transition-group> children must be keyed: <".concat(u,">"))}if(r){var l=[],h=[];for(a=0;a<r.length;a++){var d;(d=r[a]).data.transition=s,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):h.push(d)}this.kept=t(e,null,l),this.removed=h}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Ds),t.forEach(Ps),t.forEach(Ls),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;es(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Jo,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Jo,t),n._moveCb=null,ns(n,e))})}})))},methods:{hasMove:function(t,e){if(!Wo)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){zo(n,t)})),Ho(n,e),n.style.display="none",this.$el.appendChild(n);var r=os(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Gr.config.mustUseProp=ri,Gr.config.isReservedTag=yi,Gr.config.isReservedAttr=ei,Gr.config.getTagNamespace=_i,Gr.config.isUnknownElement=function(t){if(!Q)return!0;if(yi(t))return!1;if(t=t.toLowerCase(),null!=wi[t])return wi[t];var e=document.createElement(t);return t.indexOf("-")>-1?wi[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:wi[t]=/HTMLUnknownElement/.test(e.toString())},R(Gr.options.directives,Es),R(Gr.options.components,Ms),Gr.prototype.__patch__=Q?ps:P,Gr.prototype.$mount=function(t,e){return function(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=mt,t.$options.template&&"#"!==t.$options.template.charAt(0)||t.$options.el||e?Cr("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",t):Cr("Failed to mount component: template or render function not defined.",t)),tn(t,"beforeMount"),r=q.performance&&jt?function(){var e=t._name,r=t._uid,i="vue-perf-start:".concat(r),o="vue-perf-end:".concat(r);jt(i);var s=t._render();jt(o),Ft("vue ".concat(e," render"),i,o),jt(i),t._update(s,n),jt(o),Ft("vue ".concat(e," patch"),i,o)}:function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&tn(t,"beforeUpdate")},onTrack:function(e){return tn(t,"renderTracked",[e])},onTrigger:function(e){return tn(t,"renderTriggered",[e])}};new er(t,r,P,i,!0),n=!1;var o=t._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==t.$vnode&&(t._isMounted=!0,tn(t,"mounted")),t}(this,t=t&&Q?Ti(t):void 0,e)},Q&&setTimeout((function(){q.devtools&&(at?at.emit("init",Gr):console[console.info?"info":"log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools")),!1!==q.productionTip&&"undefined"!=typeof console&&console[console.info?"info":"log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html")}),0);var $s=/\{\{((?:.|\r?\n)+?)\}\}/g,js=/[-.*+?^${}()|[\]\/\\]/g,Fs=E((function(t){var e=t[0].replace(js,"\\$&"),n=t[1].replace(js,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")}));function Us(t,e){var n=e?Fs(e):$s;if(n.test(t)){for(var r,i,o,s=[],a=[],c=n.lastIndex=0;r=n.exec(t);){(i=r.index)>c&&(a.push(o=t.slice(c,i)),s.push(JSON.stringify(o)));var u=Zi(r[1].trim());s.push("_s(".concat(u,")")),a.push({"@binding":u}),c=i+r[0].length}return c<t.length&&(a.push(o=t.slice(c)),s.push(JSON.stringify(o))),{expression:s.join("+"),tokens:a}}}var Vs,Bs={staticKeys:["staticClass"],transformNode:function(t,e){var n=e.warn||eo,r=ho(t,"class");r&&Us(r,e.delimiters)&&n('class="'.concat(r,'": ')+'Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.',t.rawAttrsMap.class),r&&(t.staticClass=JSON.stringify(r.replace(/\s+/g," ").trim()));var i=lo(t,"class",!1);i&&(t.classBinding=i)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:".concat(t.staticClass,",")),t.classBinding&&(e+="class:".concat(t.classBinding,",")),e}},qs={staticKeys:["staticStyle"],transformNode:function(t,e){var n=e.warn||eo,r=ho(t,"style");r&&(Us(r,e.delimiters)&&n('style="'.concat(r,'": ')+'Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.',t.rawAttrsMap.style),t.staticStyle=JSON.stringify(Ro(r)));var i=lo(t,"style",!1);i&&(t.styleBinding=i)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:".concat(t.staticStyle,",")),t.styleBinding&&(e+="style:(".concat(t.styleBinding,"),")),e}},Hs=function(t){return(Vs=Vs||document.createElement("div")).innerHTML=t,Vs.textContent},zs=y("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Ks=y("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Gs=y("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Ws=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Qs=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Js="[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(H.source,"]*"),Ys="((?:".concat(Js,"\\:)?").concat(Js,")"),Xs=new RegExp("^<".concat(Ys)),Zs=/^\s*(\/?)>/,ta=new RegExp("^<\\/".concat(Ys,"[^>]*>")),ea=/^<!DOCTYPE [^>]+>/i,na=/^<!\--/,ra=/^<!\[/,ia=y("script,style,textarea",!0),oa={},sa={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},aa=/&(?:lt|gt|quot|amp|#39);/g,ca=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,ua=y("pre,textarea",!0),la=function(t,e){return t&&ua(t)&&"\n"===e[0]};function ha(t,e){var n=e?ca:aa;return t.replace(n,(function(t){return sa[t]}))}function da(t,e){for(var n,r,i=[],o=e.expectHTML,s=e.isUnaryTag||L,a=e.canBeLeftOpenTag||L,c=0,u=function(){if(n=t,r&&ia(r)){var u=0,d=r.toLowerCase(),f=oa[d]||(oa[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i"));T=t.replace(f,(function(t,n,r){return u=r.length,ia(d)||"noscript"===d||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),la(d,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""})),c+=t.length-T.length,t=T,h(d,c-u,c)}else{var p=t.indexOf("<");if(0===p){if(na.test(t)){var m=t.indexOf("--\x3e");if(m>=0)return e.shouldKeepComment&&e.comment&&e.comment(t.substring(4,m),c,c+m+3),l(m+3),"continue"}if(ra.test(t)){var v=t.indexOf("]>");if(v>=0)return l(v+2),"continue"}var g=t.match(ea);if(g)return l(g[0].length),"continue";var y=t.match(ta);if(y){var _=c;return l(y[0].length),h(y[1],_,c),"continue"}var w=function(){var e=t.match(Xs);if(e){var n={tagName:e[1],attrs:[],start:c};l(e[0].length);for(var r=void 0,i=void 0;!(r=t.match(Zs))&&(i=t.match(Qs)||t.match(Ws));)i.start=c,l(i[0].length),i.end=c,n.attrs.push(i);if(r)return n.unarySlash=r[1],l(r[0].length),n.end=c,n}}();if(w)return function(t){var n=t.tagName,c=t.unarySlash;o&&("p"===r&&Gs(n)&&h(r),a(n)&&r===n&&h(n));for(var u=s(n)||!!c,l=t.attrs.length,d=new Array(l),f=0;f<l;f++){var p=t.attrs[f],m=p[3]||p[4]||p[5]||"",v="a"===n&&"href"===p[1]?e.shouldDecodeNewlinesForHref:e.shouldDecodeNewlines;d[f]={name:p[1],value:ha(m,v)},e.outputSourceRange&&(d[f].start=p.start+p[0].match(/^\s*/).length,d[f].end=p.end)}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:d,start:t.start,end:t.end}),r=n),e.start&&e.start(n,d,u,t.start,t.end)}(w),la(w.tagName,t)&&l(1),"continue"}var b=void 0,T=void 0,C=void 0;if(p>=0){for(T=t.slice(p);!(ta.test(T)||Xs.test(T)||na.test(T)||ra.test(T)||(C=T.indexOf("<",1))<0);)p+=C,T=t.slice(p);b=t.substring(0,p)}p<0&&(b=t),b&&l(b.length),e.chars&&b&&e.chars(b,c-b.length,c)}if(t===n)return e.chars&&e.chars(t),!i.length&&e.warn&&e.warn('Mal-formatted tag at end of template: "'.concat(t,'"'),{start:c+t.length}),"break"};t&&"break"!==u(););function l(e){c+=e,t=t.substring(e)}function h(t,n,o){var s,a;if(null==n&&(n=c),null==o&&(o=c),t)for(a=t.toLowerCase(),s=i.length-1;s>=0&&i[s].lowerCasedTag!==a;s--);else s=0;if(s>=0){for(var u=i.length-1;u>=s;u--)(u>s||!t)&&e.warn&&e.warn("tag <".concat(i[u].tag,"> has no matching end tag."),{start:i[u].start,end:i[u].end}),e.end&&e.end(i[u].tag,n,o);i.length=s,r=s&&i[s-1].tag}else"br"===a?e.start&&e.start(t,[],!0,n,o):"p"===a&&(e.start&&e.start(t,[],!1,n,o),e.end&&e.end(t,n,o))}h()}var fa,pa,ma,va,ga,ya,_a,wa,ba,Ta=/^@|^v-on:/,Ca=/^v-|^@|^:|^#/,Ea=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Ia=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Sa=/^\(|\)$/g,ka=/^\[.*\]$/,Oa=/:(.*)$/,Aa=/^:|^\.|^v-bind:/,xa=/\.[^.\]]+(?=[^\]]*$)/g,Na=/^v-slot(:|$)|^#/,Ra=/[\r\n]/,Da=/[ \f\t\r\n]+/g,Pa=/[\s"'<>\/=]/,La=E(Hs);function Ma(t,e,n){return{type:1,tag:t,attrsList:e,attrsMap:qa(e),rawAttrsMap:{},parent:n,children:[]}}function $a(t,e){fa=e.warn||eo,ya=e.isPreTag||L,_a=e.mustUseProp||L,wa=e.getTagNamespace||L;var n=e.isReservedTag||L;ba=function(t){return!(!(t.component||t.attrsMap[":is"]||t.attrsMap["v-bind:is"])&&(t.attrsMap.is?n(t.attrsMap.is):n(t.tag)))},ma=no(e.modules,"transformNode"),va=no(e.modules,"preTransformNode"),ga=no(e.modules,"postTransformNode"),pa=e.delimiters;var r,i,o=[],s=!1!==e.preserveWhitespace,a=e.whitespace,c=!1,u=!1,l=!1;function h(t,e){l||(l=!0,fa(t,e))}function d(t){if(f(t),c||t.processed||(t=ja(t,e)),o.length||t===r||(r.if&&(t.elseif||t.else)?(p(t),Ua(r,{exp:t.elseif,block:t})):h("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.",{start:t.start})),i&&!t.forbidden)if(t.elseif||t.else)s=t,(a=function(t){for(var e=t.length;e--;){if(1===t[e].type)return t[e];" "!==t[e].text&&fa('text "'.concat(t[e].text.trim(),'" between v-if and v-else(-if) ')+"will be ignored.",t[e]),t.pop()}}(i.children))&&a.if?Ua(a,{exp:s.elseif,block:s}):fa("v-".concat(s.elseif?'else-if="'+s.elseif+'"':"else"," ")+"used on element <".concat(s.tag,"> without corresponding v-if."),s.rawAttrsMap[s.elseif?"v-else-if":"v-else"]);else{if(t.slotScope){var n=t.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[n]=t}i.children.push(t),t.parent=i}var s,a;t.children=t.children.filter((function(t){return!t.slotScope})),f(t),t.pre&&(c=!1),ya(t.tag)&&(u=!1);for(var l=0;l<ga.length;l++)ga[l](t,e)}function f(t){if(!u)for(var e=void 0;(e=t.children[t.children.length-1])&&3===e.type&&" "===e.text;)t.children.pop()}function p(t){"slot"!==t.tag&&"template"!==t.tag||h("Cannot use <".concat(t.tag,"> as component root element because it may ")+"contain multiple nodes.",{start:t.start}),t.attrsMap.hasOwnProperty("v-for")&&h("Cannot use v-for on stateful component root element because it renders multiple elements.",t.rawAttrsMap["v-for"])}return da(t,{warn:fa,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldDecodeNewlinesForHref:e.shouldDecodeNewlinesForHref,shouldKeepComment:e.comments,outputSourceRange:e.outputSourceRange,start:function(t,n,s,a,l){var h=i&&i.ns||wa(t);Y&&"svg"===h&&(n=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];Ha.test(r.name)||(r.name=r.name.replace(za,""),e.push(r))}return e}(n));var f,m=Ma(t,n,i);h&&(m.ns=h),e.outputSourceRange&&(m.start=a,m.end=l,m.rawAttrsMap=m.attrsList.reduce((function(t,e){return t[e.name]=e,t}),{})),n.forEach((function(t){Pa.test(t.name)&&fa("Invalid dynamic argument expression: attribute names cannot contain spaces, quotes, <, >, / or =.",e.outputSourceRange?{start:t.start+t.name.indexOf("["),end:t.start+t.name.length}:void 0)})),"style"!==(f=m).tag&&("script"!==f.tag||f.attrsMap.type&&"text/javascript"!==f.attrsMap.type)||st()||(m.forbidden=!0,fa("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as "+"<".concat(t,">")+", as they will not be parsed.",{start:m.start}));for(var v=0;v<va.length;v++)m=va[v](m,e)||m;c||(function(t){null!=ho(t,"v-pre")&&(t.pre=!0)}(m),m.pre&&(c=!0)),ya(m.tag)&&(u=!0),c?function(t){var e=t.attrsList,n=e.length;if(n)for(var r=t.attrs=new Array(n),i=0;i<n;i++)r[i]={name:e[i].name,value:JSON.stringify(e[i].value)},null!=e[i].start&&(r[i].start=e[i].start,r[i].end=e[i].end);else t.pre||(t.plain=!0)}(m):m.processed||(Fa(m),function(t){var e=ho(t,"v-if");if(e)t.if=e,Ua(t,{exp:e,block:t});else{null!=ho(t,"v-else")&&(t.else=!0);var n=ho(t,"v-else-if");n&&(t.elseif=n)}}(m),function(t){null!=ho(t,"v-once")&&(t.once=!0)}(m)),r||p(r=m),s?d(m):(i=m,o.push(m))},end:function(t,n,r){var s=o[o.length-1];o.length-=1,i=o[o.length-1],e.outputSourceRange&&(s.end=r),d(s)},chars:function(n,r,o){if(i){if(!Y||"textarea"!==i.tag||i.attrsMap.placeholder!==n){var l,d=i.children;if(n=u||n.trim()?"script"===(l=i).tag||"style"===l.tag?n:La(n):d.length?a?"condense"===a&&Ra.test(n)?"":" ":s?" ":"":""){u||"condense"!==a||(n=n.replace(Da," "));var f=void 0,p=void 0;!c&&" "!==n&&(f=Us(n,pa))?p={type:2,expression:f.expression,tokens:f.tokens,text:n}:" "===n&&d.length&&" "===d[d.length-1].text||(p={type:3,text:n}),p&&(e.outputSourceRange&&(p.start=r,p.end=o),d.push(p))}}}else n===t?h("Component template requires a root element, rather than just text.",{start:r}):(n=n.trim())&&h('text "'.concat(n,'" outside root element will be ignored.'),{start:r})},comment:function(t,n,r){if(i){var o={type:3,text:t,isComment:!0};e.outputSourceRange&&(o.start=n,o.end=r),i.children.push(o)}}}),r}function ja(t,e){var n;!function(t){var e=lo(t,"key");if(e){if("template"===t.tag&&fa("<template> cannot be keyed. Place the key on real elements instead.",uo(t,"key")),t.for){var n=t.iterator2||t.iterator1,r=t.parent;n&&n===e&&r&&"transition-group"===r.tag&&fa("Do not use v-for index as key on <transition-group> children, this is the same as not using keys.",uo(t,"key"),!0)}t.key=e}}(t),t.plain=!t.key&&!t.scopedSlots&&!t.attrsList.length,function(t){var e=lo(t,"ref");e&&(t.ref=e,t.refInFor=function(t){for(var e=t;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}(t))}(t),function(t){var e;"template"===t.tag?((e=ho(t,"scope"))&&fa('the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5. The new "slot-scope" attribute can also be used on plain elements in addition to <template> to denote scoped slots.',t.rawAttrsMap.scope,!0),t.slotScope=e||ho(t,"slot-scope")):(e=ho(t,"slot-scope"))&&(t.attrsMap["v-for"]&&fa("Ambiguous combined usage of slot-scope and v-for on <".concat(t.tag,"> ")+"(v-for takes higher priority). Use a wrapper <template> for the scoped slot to make it clearer.",t.rawAttrsMap["slot-scope"],!0),t.slotScope=e);var n,r=lo(t,"slot");if(r&&(t.slotTarget='""'===r?'"default"':r,t.slotTargetDynamic=!(!t.attrsMap[":slot"]&&!t.attrsMap["v-bind:slot"]),"template"===t.tag||t.slotScope||io(t,"slot",r,uo(t,"slot"))),"template"===t.tag){if(n=fo(t,Na)){(t.slotTarget||t.slotScope)&&fa("Unexpected mixed usage of different slot syntaxes.",t),t.parent&&!ba(t.parent)&&fa("<template v-slot> can only appear at the root level inside the receiving component",t);var i=Va(n),o=i.name,s=i.dynamic;t.slotTarget=o,t.slotTargetDynamic=s,t.slotScope=n.value||"_empty_"}}else if(n=fo(t,Na)){ba(t)||fa("v-slot can only be used on components or <template>.",n),(t.slotScope||t.slotTarget)&&fa("Unexpected mixed usage of different slot syntaxes.",t),t.scopedSlots&&fa("To avoid scope ambiguity, the default slot should also use <template> syntax when there are other named slots.",n);var a=t.scopedSlots||(t.scopedSlots={}),c=Va(n),u=c.name,l=(s=c.dynamic,a[u]=Ma("template",[],t));l.slotTarget=u,l.slotTargetDynamic=s,l.children=t.children.filter((function(t){if(!t.slotScope)return t.parent=l,!0})),l.slotScope=n.value||"_empty_",t.children=[],t.plain=!1}}(t),"slot"===(n=t).tag&&(n.slotName=lo(n,"name"),n.key&&fa("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.",uo(n,"key"))),function(t){var e;(e=lo(t,"is"))&&(t.component=e),null!=ho(t,"inline-template")&&(t.inlineTemplate=!0)}(t);for(var r=0;r<ma.length;r++)t=ma[r](t,e)||t;return function(t){var e,n,r,i,o,s,a,c,u=t.attrsList;for(e=0,n=u.length;e<n;e++)if(r=i=u[e].name,o=u[e].value,Ca.test(r))if(t.hasBindings=!0,(s=Ba(r.replace(Ca,"")))&&(r=r.replace(xa,"")),Aa.test(r))r=r.replace(Aa,""),o=Zi(o),(c=ka.test(r))&&(r=r.slice(1,-1)),0===o.trim().length&&fa('The value for a v-bind expression cannot be empty. Found in "v-bind:'.concat(r,'"')),s&&(s.prop&&!c&&"innerHtml"===(r=S(r))&&(r="innerHTML"),s.camel&&!c&&(r=S(r)),s.sync&&(a=vo(o,"$event"),c?co(t,'"update:"+('.concat(r,")"),a,null,!1,fa,u[e],!0):(co(t,"update:".concat(S(r)),a,null,!1,fa,u[e]),A(r)!==S(r)&&co(t,"update:".concat(A(r)),a,null,!1,fa,u[e])))),s&&s.prop||!t.component&&_a(t.tag,t.attrsMap.type,r)?ro(t,r,o,u[e],c):io(t,r,o,u[e],c);else if(Ta.test(r))r=r.replace(Ta,""),(c=ka.test(r))&&(r=r.slice(1,-1)),co(t,r,o,s,!1,fa,u[e],c);else{var l=(r=r.replace(Ca,"")).match(Oa),h=l&&l[1];c=!1,h&&(r=r.slice(0,-(h.length+1)),ka.test(h)&&(h=h.slice(1,-1),c=!0)),so(t,r,i,o,h,c,s,u[e]),"model"===r&&Ka(t,o)}else Us(o,pa)&&fa("".concat(r,'="').concat(o,'": ')+'Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.',u[e]),io(t,r,JSON.stringify(o),u[e]),!t.component&&"muted"===r&&_a(t.tag,t.attrsMap.type,r)&&ro(t,r,"true",u[e])}(t),t}function Fa(t){var e;if(e=ho(t,"v-for")){var n=function(t){var e=t.match(Ea);if(e){var n={};n.for=e[2].trim();var r=e[1].trim().replace(Sa,""),i=r.match(Ia);return i?(n.alias=r.replace(Ia,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r,n}}(e);n?R(t,n):fa("Invalid v-for expression: ".concat(e),t.rawAttrsMap["v-for"])}}function Ua(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function Va(t){var e=t.name.replace(Na,"");return e||("#"!==t.name[0]?e="default":fa("v-slot shorthand syntax requires a slot name.",t)),ka.test(e)?{name:e.slice(1,-1),dynamic:!0}:{name:'"'.concat(e,'"'),dynamic:!1}}function Ba(t){var e=t.match(xa);if(e){var n={};return e.forEach((function(t){n[t.slice(1)]=!0})),n}}function qa(t){for(var e={},n=0,r=t.length;n<r;n++)!e[t[n].name]||Y||Z||fa("duplicate attribute: "+t[n].name,t[n]),e[t[n].name]=t[n].value;return e}var Ha=/^xmlns:NS\d+/,za=/^NS\d+:/;function Ka(t,e){for(var n=t;n;)n.for&&n.alias===e&&fa("<".concat(t.tag,' v-model="').concat(e,'">: ')+"You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.",t.rawAttrsMap["v-model"]),n=n.parent}function Ga(t){return Ma(t.tag,t.attrsList.slice(),t.parent)}var Wa,Qa,Ja=[Bs,qs,{preTransformNode:function(t,e){if("input"===t.tag){var n=t.attrsMap;if(!n["v-model"])return;var r=void 0;if((n[":type"]||n["v-bind:type"])&&(r=lo(t,"type")),n.type||r||!n["v-bind"]||(r="(".concat(n["v-bind"],").type")),r){var i=ho(t,"v-if",!0),o=i?"&&(".concat(i,")"):"",s=null!=ho(t,"v-else",!0),a=ho(t,"v-else-if",!0),c=Ga(t);Fa(c),oo(c,"type","checkbox"),ja(c,e),c.processed=!0,c.if="(".concat(r,")==='checkbox'")+o,Ua(c,{exp:c.if,block:c});var u=Ga(t);ho(u,"v-for",!0),oo(u,"type","radio"),ja(u,e),Ua(c,{exp:"(".concat(r,")==='radio'")+o,block:u});var l=Ga(t);return ho(l,"v-for",!0),oo(l,":type",r),ja(l,e),Ua(c,{exp:i,block:l}),s?c.else=!0:a&&(c.elseif=a),c}}}}],Ya={expectHTML:!0,modules:Ja,directives:{model:function(t,e,n){Qi=n;var r=e.value,i=e.modifiers,o=t.tag,s=t.attrsMap.type;if("input"===o&&"file"===s&&Qi("<".concat(t.tag,' v-model="').concat(r,'" type="file">:\n')+"File inputs are read only. Use a v-on:change listener instead.",t.rawAttrsMap["v-model"]),t.component)return mo(t,r,i),!1;if("select"===o)!function(t,e,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;'+"return ".concat(r?"_n(val)":"val","})"),o="var $$selectedVal = ".concat(i,";");o="".concat(o," ").concat(vo(e,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]")),co(t,"change",o,null,!0)}(t,r,i);else if("input"===o&&"checkbox"===s)!function(t,e,n){var r=n&&n.number,i=lo(t,"value")||"null",o=lo(t,"true-value")||"true",s=lo(t,"false-value")||"false";ro(t,"checked","Array.isArray(".concat(e,")")+"?_i(".concat(e,",").concat(i,")>-1")+("true"===o?":(".concat(e,")"):":_q(".concat(e,",").concat(o,")"))),co(t,"change","var $$a=".concat(e,",")+"$$el=$event.target,"+"$$c=$$el.checked?(".concat(o,"):(").concat(s,");")+"if(Array.isArray($$a)){"+"var $$v=".concat(r?"_n("+i+")":i,",")+"$$i=_i($$a,$$v);"+"if($$el.checked){$$i<0&&(".concat(vo(e,"$$a.concat([$$v])"),")}")+"else{$$i>-1&&(".concat(vo(e,"$$a.slice(0,$$i).concat($$a.slice($$i+1))"),")}")+"}else{".concat(vo(e,"$$c"),"}"),null,!0)}(t,r,i);else if("input"===o&&"radio"===s)!function(t,e,n){var r=n&&n.number,i=lo(t,"value")||"null";i=r?"_n(".concat(i,")"):i,ro(t,"checked","_q(".concat(e,",").concat(i,")")),co(t,"change",vo(e,i),null,!0)}(t,r,i);else if("input"===o||"textarea"===o)!function(t,e,n){var r=t.attrsMap.type,i=t.attrsMap["v-bind:value"]||t.attrsMap[":value"],o=t.attrsMap["v-bind:type"]||t.attrsMap[":type"];if(i&&!o){var s=t.attrsMap["v-bind:value"]?"v-bind:value":":value";Qi("".concat(s,'="').concat(i,'" conflicts with v-model on the same element ')+"because the latter already expands to a value binding internally",t.rawAttrsMap[s])}var a=n||{},c=a.lazy,u=a.number,l=a.trim,h=!c&&"range"!==r,d=c?"change":"range"===r?"__r":"input",f="$event.target.value";l&&(f="$event.target.value.trim()"),u&&(f="_n(".concat(f,")"));var p=vo(e,f);h&&(p="if($event.target.composing)return;".concat(p)),ro(t,"value","(".concat(e,")")),co(t,d,p,null,!0),(l||u)&&co(t,"blur","$forceUpdate()")}(t,r,i);else{if(!q.isReservedTag(o))return mo(t,r,i),!1;Qi("<".concat(t.tag,' v-model="').concat(r,'">: ')+"v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.",t.rawAttrsMap["v-model"])}return!0},text:function(t,e){e.value&&ro(t,"textContent","_s(".concat(e.value,")"),e)},html:function(t,e){e.value&&ro(t,"innerHTML","_s(".concat(e.value,")"),e)}},isPreTag:function(t){return"pre"===t},isUnaryTag:zs,mustUseProp:ri,canBeLeftOpenTag:Ks,isReservedTag:yi,getTagNamespace:_i,staticKeys:function(t){return t.reduce((function(t,e){return t.concat(e.staticKeys||[])}),[]).join(",")}(Ja)},Xa=E((function(t){return y("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(t?","+t:""))}));function Za(t,e){t&&(Wa=Xa(e.staticKeys||""),Qa=e.isReservedTag||L,function t(e){if(e.static=function(t){return 2!==t.type&&(3===t.type||!(!t.pre&&(t.hasBindings||t.if||t.for||_(t.tag)||!Qa(t.tag)||function(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}(t)||!Object.keys(t).every(Wa))))}(e),1===e.type){if(!Qa(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];t(i),i.static||(e.static=!1)}if(e.ifConditions)for(n=1,r=e.ifConditions.length;n<r;n++){var o=e.ifConditions[n].block;t(o),o.static||(e.static=!1)}}}(t),function t(e,n){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=n),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var r=0,i=e.children.length;r<i;r++)t(e.children[r],n||!!e.for);if(e.ifConditions)for(r=1,i=e.ifConditions.length;r<i;r++)t(e.ifConditions[r].block,n)}}(t,!1))}var tc=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,ec=/\([^)]*?\);*$/,nc=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,rc={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},ic={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},oc=function(t){return"if(".concat(t,")return null;")},sc={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:oc("$event.target !== $event.currentTarget"),ctrl:oc("!$event.ctrlKey"),shift:oc("!$event.shiftKey"),alt:oc("!$event.altKey"),meta:oc("!$event.metaKey"),left:oc("'button' in $event && $event.button !== 0"),middle:oc("'button' in $event && $event.button !== 1"),right:oc("'button' in $event && $event.button !== 2")};function ac(t,e){var n=e?"nativeOn:":"on:",r="",i="";for(var o in t){var s=cc(t[o]);t[o]&&t[o].dynamic?i+="".concat(o,",").concat(s,","):r+='"'.concat(o,'":').concat(s,",")}return r="{".concat(r.slice(0,-1),"}"),i?n+"_d(".concat(r,",[").concat(i.slice(0,-1),"])"):n+r}function cc(t){if(!t)return"function(){}";if(Array.isArray(t))return"[".concat(t.map((function(t){return cc(t)})).join(","),"]");var e=nc.test(t.value),n=tc.test(t.value),r=nc.test(t.value.replace(ec,""));if(t.modifiers){var i="",o="",s=[],a=function(e){if(sc[e])o+=sc[e],rc[e]&&s.push(e);else if("exact"===e){var n=t.modifiers;o+=oc(["ctrl","shift","alt","meta"].filter((function(t){return!n[t]})).map((function(t){return"$event.".concat(t,"Key")})).join("||"))}else s.push(e)};for(var c in t.modifiers)a(c);s.length&&(i+=function(t){return"if(!$event.type.indexOf('key')&&"+"".concat(t.map(uc).join("&&"),")return null;")}(s)),o&&(i+=o);var u=e?"return ".concat(t.value,".apply(null, arguments)"):n?"return (".concat(t.value,").apply(null, arguments)"):r?"return ".concat(t.value):t.value;return"function($event){".concat(i).concat(u,"}")}return e||n?t.value:"function($event){".concat(r?"return ".concat(t.value):t.value,"}")}function uc(t){var e=parseInt(t,10);if(e)return"$event.keyCode!==".concat(e);var n=rc[t],r=ic[t];return"_k($event.keyCode,"+"".concat(JSON.stringify(t),",")+"".concat(JSON.stringify(n),",")+"$event.key,"+"".concat(JSON.stringify(r))+")"}var lc={on:function(t,e){e.modifiers&&Cr("v-on without argument does not support modifiers."),t.wrapListeners=function(t){return"_g(".concat(t,",").concat(e.value,")")}},bind:function(t,e){t.wrapData=function(n){return"_b(".concat(n,",'").concat(t.tag,"',").concat(e.value,",").concat(e.modifiers&&e.modifiers.prop?"true":"false").concat(e.modifiers&&e.modifiers.sync?",true":"",")")}},cloak:P},hc=function(t){this.options=t,this.warn=t.warn||eo,this.transforms=no(t.modules,"transformCode"),this.dataGenFns=no(t.modules,"genData"),this.directives=R(R({},lc),t.directives);var e=t.isReservedTag||L;this.maybeComponent=function(t){return!!t.component||!e(t.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function dc(t,e){var n=new hc(e),r=t?"script"===t.tag?"null":fc(t,n):'_c("div")';return{render:"with(this){return ".concat(r,"}"),staticRenderFns:n.staticRenderFns}}function fc(t,e){if(t.parent&&(t.pre=t.pre||t.parent.pre),t.staticRoot&&!t.staticProcessed)return pc(t,e);if(t.once&&!t.onceProcessed)return mc(t,e);if(t.for&&!t.forProcessed)return gc(t,e);if(t.if&&!t.ifProcessed)return vc(t,e);if("template"!==t.tag||t.slotTarget||e.pre){if("slot"===t.tag)return function(t,e){var n=t.slotName||'"default"',r=bc(t,e),i="_t(".concat(n).concat(r?",function(){return ".concat(r,"}"):""),o=t.attrs||t.dynamicAttrs?Ec((t.attrs||[]).concat(t.dynamicAttrs||[]).map((function(t){return{name:S(t.name),value:t.value,dynamic:t.dynamic}}))):null,s=t.attrsMap["v-bind"];return!o&&!s||r||(i+=",null"),o&&(i+=",".concat(o)),s&&(i+="".concat(o?"":",null",",").concat(s)),i+")"}(t,e);var n=void 0;if(t.component)n=function(t,e,n){var r=e.inlineTemplate?null:bc(e,n,!0);return"_c(".concat(t,",").concat(yc(e,n)).concat(r?",".concat(r):"",")")}(t.component,t,e);else{var r=void 0,i=e.maybeComponent(t);(!t.plain||t.pre&&i)&&(r=yc(t,e));var o=void 0,s=e.options.bindings;i&&s&&!1!==s.__isScriptSetup&&(o=function(t,e){var n=S(e),r=k(n),i=function(i){return t[e]===i?e:t[n]===i?n:t[r]===i?r:void 0},o=i("setup-const")||i("setup-reactive-const");if(o)return o;var s=i("setup-let")||i("setup-ref")||i("setup-maybe-ref");return s||void 0}(s,t.tag)),o||(o="'".concat(t.tag,"'"));var a=t.inlineTemplate?null:bc(t,e,!0);n="_c(".concat(o).concat(r?",".concat(r):"").concat(a?",".concat(a):"",")")}for(var c=0;c<e.transforms.length;c++)n=e.transforms[c](t,n);return n}return bc(t,e)||"void 0"}function pc(t,e){t.staticProcessed=!0;var n=e.pre;return t.pre&&(e.pre=t.pre),e.staticRenderFns.push("with(this){return ".concat(fc(t,e),"}")),e.pre=n,"_m(".concat(e.staticRenderFns.length-1).concat(t.staticInFor?",true":"",")")}function mc(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return vc(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o(".concat(fc(t,e),",").concat(e.onceId++,",").concat(n,")"):(e.warn("v-once can only be used inside v-for that is keyed. ",t.rawAttrsMap["v-once"]),fc(t,e))}return pc(t,e)}function vc(t,e,n,r){return t.ifProcessed=!0,function t(e,n,r,i){if(!e.length)return i||"_e()";var o=e.shift();return o.exp?"(".concat(o.exp,")?").concat(s(o.block),":").concat(t(e,n,r,i)):"".concat(s(o.block));function s(t){return r?r(t,n):t.once?mc(t,n):fc(t,n)}}(t.ifConditions.slice(),e,n,r)}function gc(t,e,n,r){var i=t.for,o=t.alias,s=t.iterator1?",".concat(t.iterator1):"",a=t.iterator2?",".concat(t.iterator2):"";return e.maybeComponent(t)&&"slot"!==t.tag&&"template"!==t.tag&&!t.key&&e.warn("<".concat(t.tag,' v-for="').concat(o," in ").concat(i,'">: component lists rendered with ')+"v-for should have explicit keys. See https://v2.vuejs.org/v2/guide/list.html#key for more info.",t.rawAttrsMap["v-for"],!0),t.forProcessed=!0,"".concat(r||"_l","((").concat(i,"),")+"function(".concat(o).concat(s).concat(a,"){")+"return ".concat((n||fc)(t,e))+"})"}function yc(t,e){var n="{",r=function(t,e){var n=t.directives;if(n){var r,i,o,s,a="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],s=!0;var u=e.directives[o.name];u&&(s=!!u(t,o,e.warn)),s&&(c=!0,a+='{name:"'.concat(o.name,'",rawName:"').concat(o.rawName,'"').concat(o.value?",value:(".concat(o.value,"),expression:").concat(JSON.stringify(o.value)):"").concat(o.arg?",arg:".concat(o.isDynamicArg?o.arg:'"'.concat(o.arg,'"')):"").concat(o.modifiers?",modifiers:".concat(JSON.stringify(o.modifiers)):"","},"))}return c?a.slice(0,-1)+"]":void 0}}(t,e);r&&(n+=r+","),t.key&&(n+="key:".concat(t.key,",")),t.ref&&(n+="ref:".concat(t.ref,",")),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+='tag:"'.concat(t.tag,'",'));for(var i=0;i<e.dataGenFns.length;i++)n+=e.dataGenFns[i](t);if(t.attrs&&(n+="attrs:".concat(Ec(t.attrs),",")),t.props&&(n+="domProps:".concat(Ec(t.props),",")),t.events&&(n+="".concat(ac(t.events,!1),",")),t.nativeEvents&&(n+="".concat(ac(t.nativeEvents,!0),",")),t.slotTarget&&!t.slotScope&&(n+="slot:".concat(t.slotTarget,",")),t.scopedSlots&&(n+="".concat(function(t,e,n){var r=t.for||Object.keys(e).some((function(t){var n=e[t];return n.slotTargetDynamic||n.if||n.for||_c(n)})),i=!!t.if;if(!r)for(var o=t.parent;o;){if(o.slotScope&&"_empty_"!==o.slotScope||o.for){r=!0;break}o.if&&(i=!0),o=o.parent}var s=Object.keys(e).map((function(t){return wc(e[t],n)})).join(",");return"scopedSlots:_u([".concat(s,"]").concat(r?",null,true":"").concat(!r&&i?",null,false,".concat(function(t){for(var e=5381,n=t.length;n;)e=33*e^t.charCodeAt(--n);return e>>>0}(s)):"",")")}(t,t.scopedSlots,e),",")),t.model&&(n+="model:{value:".concat(t.model.value,",callback:").concat(t.model.callback,",expression:").concat(t.model.expression,"},")),t.inlineTemplate){var o=function(t,e){var n=t.children[0];if(1===t.children.length&&1===n.type||e.warn("Inline-template components must have exactly one child element.",{start:t.start}),n&&1===n.type){var r=dc(n,e.options);return"inlineTemplate:{render:function(){".concat(r.render,"},staticRenderFns:[").concat(r.staticRenderFns.map((function(t){return"function(){".concat(t,"}")})).join(","),"]}")}}(t,e);o&&(n+="".concat(o,","))}return n=n.replace(/,$/,"")+"}",t.dynamicAttrs&&(n="_b(".concat(n,',"').concat(t.tag,'",').concat(Ec(t.dynamicAttrs),")")),t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function _c(t){return 1===t.type&&("slot"===t.tag||t.children.some(_c))}function wc(t,e){var n=t.attrsMap["slot-scope"];if(t.if&&!t.ifProcessed&&!n)return vc(t,e,wc,"null");if(t.for&&!t.forProcessed)return gc(t,e,wc);var r="_empty_"===t.slotScope?"":String(t.slotScope),i="function(".concat(r,"){")+"return ".concat("template"===t.tag?t.if&&n?"(".concat(t.if,")?").concat(bc(t,e)||"undefined",":undefined"):bc(t,e)||"undefined":fc(t,e),"}"),o=r?"":",proxy:true";return"{key:".concat(t.slotTarget||'"default"',",fn:").concat(i).concat(o,"}")}function bc(t,e,n,r,i){var o=t.children;if(o.length){var s=o[0];if(1===o.length&&s.for&&"template"!==s.tag&&"slot"!==s.tag){var a=n?e.maybeComponent(s)?",1":",0":"";return"".concat((r||fc)(s,e)).concat(a)}var c=n?function(t,e){for(var n=0,r=0;r<t.length;r++){var i=t[r];if(1===i.type){if(Tc(i)||i.ifConditions&&i.ifConditions.some((function(t){return Tc(t.block)}))){n=2;break}(e(i)||i.ifConditions&&i.ifConditions.some((function(t){return e(t.block)})))&&(n=1)}}return n}(o,e.maybeComponent):0,u=i||Cc;return"[".concat(o.map((function(t){return u(t,e)})).join(","),"]").concat(c?",".concat(c):"")}}function Tc(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function Cc(t,e){return 1===t.type?fc(t,e):3===t.type&&t.isComment?function(t){return"_e(".concat(JSON.stringify(t.text),")")}(t):function(t){return"_v(".concat(2===t.type?t.expression:Ic(JSON.stringify(t.text)),")")}(t)}function Ec(t){for(var e="",n="",r=0;r<t.length;r++){var i=t[r],o=Ic(i.value);i.dynamic?n+="".concat(i.name,",").concat(o,","):e+='"'.concat(i.name,'":').concat(o,",")}return e="{".concat(e.slice(0,-1),"}"),n?"_d(".concat(e,",[").concat(n.slice(0,-1),"])"):e}function Ic(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}var Sc=new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),kc=new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),Oc=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;function Ac(t,e){t&&function t(e,n){if(1===e.type){for(var r in e.attrsMap)if(Ca.test(r)){var i=e.attrsMap[r];if(i){var o=e.rawAttrsMap[r];"v-for"===r?Nc(e,'v-for="'.concat(i,'"'),n,o):"v-slot"===r||"#"===r[0]?Pc(i,"".concat(r,'="').concat(i,'"'),n,o):Ta.test(r)?xc(i,"".concat(r,'="').concat(i,'"'),n,o):Dc(i,"".concat(r,'="').concat(i,'"'),n,o)}}if(e.children)for(var s=0;s<e.children.length;s++)t(e.children[s],n)}else 2===e.type&&Dc(e.expression,e.text,n,e)}(t,e)}function xc(t,e,n,r){var i=t.replace(Oc,""),o=i.match(kc);o&&"$"!==i.charAt(o.index-1)&&n("avoid using JavaScript unary operator as property name: "+'"'.concat(o[0],'" in expression ').concat(e.trim()),r),Dc(t,e,n,r)}function Nc(t,e,n,r){Dc(t.for||"",e,n,r),Rc(t.alias,"v-for alias",e,n,r),Rc(t.iterator1,"v-for iterator",e,n,r),Rc(t.iterator2,"v-for iterator",e,n,r)}function Rc(t,e,n,r,i){if("string"==typeof t)try{new Function("var ".concat(t,"=_"))}catch(o){r("invalid ".concat(e,' "').concat(t,'" in expression: ').concat(n.trim()),i)}}function Dc(t,e,n,r){try{new Function("return ".concat(t))}catch(o){var i=t.replace(Oc,"").match(Sc);n(i?"avoid using JavaScript keyword as property name: "+'"'.concat(i[0],'"\n  Raw expression: ').concat(e.trim()):"invalid expression: ".concat(o.message," in\n\n")+"    ".concat(t,"\n\n")+"  Raw expression: ".concat(e.trim(),"\n"),r)}}function Pc(t,e,n,r){try{new Function(t,"")}catch(i){n("invalid function parameter expression: ".concat(i.message," in\n\n")+"    ".concat(t,"\n\n")+"  Raw expression: ".concat(e.trim(),"\n"),r)}}function Lc(t,e){var n="";if(e>0)for(;1&e&&(n+=t),!((e>>>=1)<=0);)t+=t;return n}function Mc(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),P}}function $c(t){var e=Object.create(null);return function(n,r,i){var o=(r=R({},r)).warn||Cr;delete r.warn;try{new Function("return 1")}catch(t){t.toString().match(/unsafe-eval|CSP/)&&o("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.")}var s=r.delimiters?String(r.delimiters)+n:n;if(e[s])return e[s];var a=t(n,r);a.errors&&a.errors.length&&(r.outputSourceRange?a.errors.forEach((function(t){o("Error compiling template:\n\n".concat(t.msg,"\n\n")+function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=t.length);for(var r=t.split(/\r?\n/),i=0,o=[],s=0;s<r.length;s++)if((i+=r[s].length+1)>=e){for(var a=s-2;a<=s+2||n>i;a++)if(!(a<0||a>=r.length)){o.push("".concat(a+1).concat(Lc(" ",3-String(a+1).length),"|  ").concat(r[a]));var c=r[a].length;if(a===s){var u=e-(i-c)+1,l=n>i?c-u:n-e;o.push("   |  "+Lc(" ",u)+Lc("^",l))}else if(a>s){if(n>i){var h=Math.min(n-i,c);o.push("   |  "+Lc("^",h))}i+=c+1}}break}return o.join("\n")}(n,t.start,t.end),i)})):o("Error compiling template:\n\n".concat(n,"\n\n")+a.errors.map((function(t){return"- ".concat(t)})).join("\n")+"\n",i)),a.tips&&a.tips.length&&(r.outputSourceRange?a.tips.forEach((function(t){return Er(t.msg,i)})):a.tips.forEach((function(t){return Er(t,i)})));var c={},u=[];return c.render=Mc(a.render,u),c.staticRenderFns=a.staticRenderFns.map((function(t){return Mc(t,u)})),a.errors&&a.errors.length||!u.length||o("Failed to generate render function:\n\n"+u.map((function(t){var e=t.err,n=t.code;return"".concat(e.toString()," in\n\n").concat(n,"\n")})).join("\n"),i),e[s]=c}}var jc,Fc,Uc=(jc=function(t,e){var n=$a(t.trim(),e);!1!==e.optimize&&Za(n,e);var r=dc(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(t){function e(e,n){var r=Object.create(t),i=[],o=[],s=function(t,e,n){(n?o:i).push(t)};if(n){if(n.outputSourceRange){var a=e.match(/^\s*/)[0].length;s=function(t,e,n){var r="string"==typeof t?{msg:t}:t;e&&(null!=e.start&&(r.start=e.start+a),null!=e.end&&(r.end=e.end+a)),(n?o:i).push(r)}}for(var c in n.modules&&(r.modules=(t.modules||[]).concat(n.modules)),n.directives&&(r.directives=R(Object.create(t.directives||null),n.directives)),n)"modules"!==c&&"directives"!==c&&(r[c]=n[c])}r.warn=s;var u=jc(e.trim(),r);return Ac(u.ast,s),u.errors=i,u.tips=o,u}return{compile:e,compileToFunctions:$c(e)}})(Ya).compileToFunctions;function Vc(t){return(Fc=Fc||document.createElement("div")).innerHTML=t?'<a href="\n"/>':'<div a="\n"/>',Fc.innerHTML.indexOf("&#10;")>0}var Bc=!!Q&&Vc(!1),qc=!!Q&&Vc(!0),Hc=E((function(t){var e=Ti(t);return e&&e.innerHTML})),zc=Gr.prototype.$mount;return Gr.prototype.$mount=function(t,e){if((t=t&&Ti(t))===document.body||t===document.documentElement)return Cr("Do not mount Vue to <html> or <body> - mount to normal elements instead."),this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&((r=Hc(r))||Cr("Template element not found or is empty: ".concat(n.template),this));else{if(!r.nodeType)return Cr("invalid template option:"+r,this),this;r=r.innerHTML}else t&&(r=function(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}(t));if(r){q.performance&&jt&&jt("compile");var i=Uc(r,{outputSourceRange:!0,shouldDecodeNewlines:Bc,shouldDecodeNewlinesForHref:qc,delimiters:n.delimiters,comments:n.comments},this),o=i.render,s=i.staticRenderFns;n.render=o,n.staticRenderFns=s,q.performance&&jt&&(jt("compile end"),Ft("vue ".concat(this._name," compile"),"compile","compile end"))}}return zc.call(this,t,e)},Gr.compile=Uc,R(Gr,Yn),Gr.effect=function(t,e){var n=new er(ht,t,P,{sync:!0});e&&(n.update=function(){e((function(){return n.run()}))})},Gr},t.exports=r()}).call(this,n(5),n(9).setImmediate)},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return aa})),n.d(e,"b",(function(){return us})),n.d(e,"c",(function(){return sa})),n.d(e,"d",(function(){return ls})),n.d(e,"e",(function(){return oa})),n.d(e,"f",(function(){return fs})),n.d(e,"g",(function(){return qs})),n.d(e,"h",(function(){return zs}));var r=n(1),i=n(4),o=n(3),s=n(0),a=n(2);const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="10.4.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new o.b("@firebase/firestore");function d(){return h.logLevel}function f(t,...e){if(h.logLevel<=o.a.DEBUG){const n=e.map(v);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=o.a.ERROR){const n=e.map(v);h.error(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(h.logLevel<=o.a.WARN){const n=e.map(v);h.warn(`Firestore (${l}): ${t}`,...n)}}function v(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function y(t,e){t||g()}function _(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends s.c{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class I{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class S{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},s=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(t=>s(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(y("string"==typeof e.accessToken),new C(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return y(null===t||"string"==typeof t),new u(t)}}class k{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=u.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class O{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new k(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.R;return this.R=t.token,f("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(y("string"==typeof t.token),this.R=t.token,new A(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=N(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function D(t,e){return t<e?-1:t>e?1:0}function P(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return L.fromMillis(Date.now())}static fromDate(t){return L.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new L(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new L(0,0))}static max(){return new M(new L(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,e,n){void 0===e?e=0:e>t.length&&g(),void 0===n?n=t.length-e:n>t.length-e&&g(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===$.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof $?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class j extends ${construct(t,e,n){return new j(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new b(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new j(e)}static emptyPath(){return new j([])}}const F=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class U extends ${construct(t,e,n){return new U(t,e,n)}static isValidIdentifier(t){return F.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),U.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new U(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new b(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new b(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new b(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new b(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new U(e)}static emptyPath(){return new U([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.path=t}static fromPath(t){return new V(j.fromString(t))}static fromName(t){return new V(j.fromString(t).popFirst(5))}static empty(){return new V(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===j.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return j.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new V(new j(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}B.UNKNOWN_ID=-1;function q(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=M.fromTimestamp(1e9===r?new L(n+1,0):new L(n,r));return new z(i,V.empty(),e)}function H(t){return new z(t.readTime,t.key,-1)}class z{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new z(M.min(),V.empty(),-1)}static max(){return new z(M.max(),V.empty(),-1)}}function K(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=V.comparator(t.documentKey,e.documentKey),0!==n?n:D(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==G)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&g(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new J((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof J?e:J.resolve(e)}catch(t){return J.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):J.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):J.reject(e)}static resolve(t){return new J((e,n)=>{e(t)})}static reject(t){return new J((e,n)=>{n(t)})}static waitFor(t){return new J((e,n)=>{let r=0,i=0,o=!1;t.forEach(t=>{++r,t.next(()=>{++i,o&&i===r&&e()},t=>n(t))}),o=!0,i===r&&e()})}static or(t){let e=J.resolve(!1);for(const n of t)e=e.next(t=>t?J.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new J((n,r)=>{const i=t.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next(t=>{o[c]=t,++s,s===i&&n(o)},t=>r(t))}})}static doWhile(t,e){return new J((n,r)=>{const i=()=>{!0===t()?e().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function Z(t){return null==t}function tt(t){return 0===t&&1/t==-1/0}function et(t){return"number"==typeof t&&Number.isInteger(t)&&!tt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */X.ae=-1;const nt=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],rt=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],it=rt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ot(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function st(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function at(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new ct(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ut(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ut(this.root,t,this.comparator,!1)}getReverseIterator(){return new ut(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ut(this.root,t,this.comparator,!0)}}class ut{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:lt.RED,this.left=null!=r?r:lt.EMPTY,this.right=null!=i?i:lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new lt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return lt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw g();if(this.right.isRed())throw g();const t=this.left.check();if(t!==this.right.check())throw g();return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1,lt.EMPTY=new class{constructor(){this.size=0}get key(){throw g()}get value(){throw g()}get color(){throw g()}get left(){throw g()}get right(){throw g()}copy(t,e,n,r,i){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(t){this.comparator=t,this.data=new ct(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new dt(this.data.getIterator())}getIteratorFrom(t){return new dt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof ht))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class dt{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(t){this.fields=t,t.sort(U.comparator)}static empty(){return new ft([])}unionWith(t){let e=new ht(U.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new ft(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return P(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new pt("Invalid base64 string: "+t):t}}(t);return new mt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new mt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const vt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gt(t){if(y(!!t),"string"==typeof t){let e=0;const n=vt.exec(t);if(y(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function _t(t){return"string"==typeof t?mt.fromBase64String(t):mt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function bt(t){const e=t.mapValue.fields.__previous_value__;return wt(e)?bt(e):e}function Tt(t){const e=gt(t.mapValue.fields.__local_write_time__.timestampValue);return new L(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e,n,r,i,o,s,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=c}}class Et{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Et("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Et&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function St(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wt(t)?4:Ft(t)?9007199254740991:10:g()}function kt(t,e){if(t===e)return!0;const n=St(t);if(n!==St(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Tt(t).isEqual(Tt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=gt(t.timestampValue),r=gt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return _t(t.bytesValue).isEqual(_t(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return yt(t.geoPointValue.latitude)===yt(e.geoPointValue.latitude)&&yt(t.geoPointValue.longitude)===yt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return yt(t.integerValue)===yt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=yt(t.doubleValue),r=yt(e.doubleValue);return n===r?tt(n)===tt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return P(t.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ot(n)!==ot(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!kt(n[t],r[t])))return!1;return!0}(t,e);default:return g()}}function Ot(t,e){return void 0!==(t.values||[]).find(t=>kt(t,e))}function At(t,e){if(t===e)return 0;const n=St(t),r=St(e);if(n!==r)return D(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=yt(t.integerValue||t.doubleValue),r=yt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return xt(t.timestampValue,e.timestampValue);case 4:return xt(Tt(t),Tt(e));case 5:return D(t.stringValue,e.stringValue);case 6:return function(t,e){const n=_t(t),r=_t(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=D(n[t],r[t]);if(0!==e)return e}return D(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=D(yt(t.latitude),yt(e.latitude));return 0!==n?n:D(yt(t.longitude),yt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=At(n[t],r[t]);if(e)return e}return D(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===It.mapValue&&e===It.mapValue)return 0;if(t===It.mapValue)return 1;if(e===It.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let t=0;t<r.length&&t<o.length;++t){const e=D(r[t],o[t]);if(0!==e)return e;const s=At(n[r[t]],i[o[t]]);if(0!==s)return s}return D(r.length,o.length)}(t.mapValue,e.mapValue);default:throw g()}}function xt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return D(t,e);const n=gt(t),r=gt(e),i=D(n.seconds,r.seconds);return 0!==i?i:D(n.nanos,r.nanos)}function Nt(t){return function t(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(t){const e=gt(t);return`time(${e.seconds},${e.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(t){return _t(t).toBase64()}(e.bytesValue):"referenceValue"in e?function(t){return V.fromName(t).toString()}(e.referenceValue):"geoPointValue"in e?function(t){return`geo(${t.latitude},${t.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let n="[",r=!0;for(const i of e.values||[])r?r=!1:n+=",",n+=t(i);return n+"]"}(e.arrayValue):"mapValue"in e?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const o of n)i?i=!1:r+=",",r+=`${o}:${t(e.fields[o])}`;return r+"}"}(e.mapValue):g()}(t)}function Rt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dt(t){return!!t&&"integerValue"in t}function Pt(t){return!!t&&"arrayValue"in t}function Lt(t){return!!t&&"nullValue"in t}function Mt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $t(t){return!!t&&"mapValue"in t}function jt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return st(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=jt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ft(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(t){this.value=t}static empty(){return new Ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!$t(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=jt(e)}setAll(t){let e=U.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=jt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());$t(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];$t(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){st(e,(e,n)=>t[e]=n);for(const e of n)delete t[e]}clone(){return new Ut(jt(this.value))}}function Vt(t){const e=[];return st(t.fields,(t,n)=>{const r=new U([t]);if($t(n)){const t=Vt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new ft(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Bt{constructor(t,e,n,r,i,o,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(t){return new Bt(t,0,M.min(),M.min(),M.min(),Ut.empty(),0)}static newFoundDocument(t,e,n,r){return new Bt(t,1,e,M.min(),n,r,0)}static newNoDocument(t,e){return new Bt(t,2,e,M.min(),M.min(),Ut.empty(),0)}static newUnknownDocument(t,e){return new Bt(t,3,e,M.min(),M.min(),Ut.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Bt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e){this.position=t,this.inclusive=e}}function Ht(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?V.comparator(V.fromName(s.referenceValue),n.key):At(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function zt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Gt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{}class Qt extends Wt{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new ne(t,e,n):"array-contains"===e?new se(t,n):"in"===e?new ae(t,n):"not-in"===e?new ce(t,n):"array-contains-any"===e?new ue(t,n):new Qt(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new re(t,n):new ie(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(At(e,this.value)):null!==e&&St(this.value)===St(e)&&this.matchesComparison(At(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return g()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Jt extends Wt{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Jt(t,e)}matches(t){return Yt(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(t=>t.isInequality());return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Yt(t){return"and"===t.op}function Xt(t){return Zt(t)&&Yt(t)}function Zt(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function te(t,e){return t instanceof Qt?function(t,e){return e instanceof Qt&&t.op===e.op&&t.field.isEqual(e.field)&&kt(t.value,e.value)}(t,e):t instanceof Jt?function(t,e){return e instanceof Jt&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&te(n,e.filters[r]),!0)}(t,e):void g()}function ee(t){return t instanceof Qt?function(t){return`${t.field.canonicalString()} ${t.op} ${Nt(t.value)}`}(t):t instanceof Jt?function(t){return t.op.toString()+" {"+t.getFilters().map(ee).join(" ,")+"}"}(t):"Filter"}class ne extends Qt{constructor(t,e,n){super(t,e,n),this.key=V.fromName(n.referenceValue)}matches(t){const e=V.comparator(t.key,this.key);return this.matchesComparison(e)}}class re extends Qt{constructor(t,e){super(t,"in",e),this.keys=oe("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ie extends Qt{constructor(t,e){super(t,"not-in",e),this.keys=oe("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function oe(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>V.fromName(t.referenceValue))}class se extends Qt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Pt(e)&&Ot(e.arrayValue,this.value)}}class ae extends Qt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ot(this.value.arrayValue,e)}}class ce extends Qt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ot(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ot(this.value.arrayValue,e)}}class ue extends Qt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Pt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>Ot(this.value.arrayValue,t))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.he=null}}function he(t,e=null,n=[],r=[],i=null,o=null,s=null){return new le(t,e,n,r,i,o,s)}function de(t){const e=_(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>function t(e){if(e instanceof Qt)return e.field.canonicalString()+e.op.toString()+Nt(e.value);if(Xt(e))return e.filters.map(e=>t(e)).join(",");{const n=e.filters.map(e=>t(e)).join(",");return`${e.op}(${n})`}}(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Z(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>Nt(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>Nt(t)).join(",")),e.he=t}return e.he}function fe(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Gt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!te(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zt(t.startAt,e.startAt)&&zt(t.endAt,e.endAt)}function pe(t){return V.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ve(t,e,n,r,i,o,s,a){return new me(t,e,n,r,i,o,s,a)}function ge(t){return new me(t)}function ye(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function _e(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function we(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function be(t){return null!==t.collectionGroup}function Te(t){const e=_(t);if(null===e.Pe){e.Pe=[];const t=we(e),n=_e(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new Kt(t)),e.Pe.push(new Kt(U.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Kt(U.keyField(),t))}}}return e.Pe}function Ce(t){const e=_(t);return e.Ie||(e.Ie=Ee(e,Te(t))),e.Ie}function Ee(t,e){if("F"===t.limitType)return he(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{const e="desc"===t.dir?"asc":"desc";return new Kt(t.field,e)});const n=t.endAt?new qt(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qt(t.startAt.position,t.startAt.inclusive):null;return he(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ie(t,e){e.getFirstInequalityField(),we(t);const n=t.filters.concat([e]);return new me(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Se(t,e,n){return new me(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ke(t,e){return fe(Ce(t),Ce(e))&&t.limitType===e.limitType}function Oe(t){return`${de(Ce(t))}|lt:${t.limitType}`}function Ae(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>ee(t)).join(", ")}]`),Z(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>Nt(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>Nt(t)).join(",")),`Target(${e})`}(Ce(t))}; limitType=${t.limitType})`}function xe(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):V.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Te(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ht(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Te(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ht(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Te(t),e))}(t,e)}function Ne(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Re(t){return(e,n)=>{let r=!1;for(const i of Te(t)){const t=De(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function De(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?At(r,i):g()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return g()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){st(this.inner,(e,n)=>{for(const[e,r]of n)t(e,r)})}isEmpty(){return at(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new ct(V.comparator);function Me(){return Le}const $e=new ct(V.comparator);function je(...t){let e=$e;for(const n of t)e=e.insert(n.key,n);return e}function Fe(t){let e=$e;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Ue(){return Be()}function Ve(){return Be()}function Be(){return new Pe(t=>t.toString(),(t,e)=>t.isEqual(e))}const qe=new ct(V.comparator),He=new ht(V.comparator);function ze(...t){let e=He;for(const n of t)e=e.add(n);return e}const Ke=new ht(D);function Ge(){return Ke}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tt(e)?"-0":e}}function Qe(t){return{integerValue:""+t}}function Je(t,e){return et(e)?Qe(e):We(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(){this._=void 0}}function Xe(t,e,n){return t instanceof en?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&wt(e)&&(e=bt(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof nn?rn(t,e):t instanceof on?sn(t,e):function(t,e){const n=tn(t,e),r=cn(n)+cn(t.Te);return Dt(n)&&Dt(t.Te)?Qe(r):We(t.serializer,r)}(t,e)}function Ze(t,e,n){return t instanceof nn?rn(t,e):t instanceof on?sn(t,e):n}function tn(t,e){return t instanceof an?function(t){return Dt(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class en extends Ye{}class nn extends Ye{constructor(t){super(),this.elements=t}}function rn(t,e){const n=un(e);for(const e of t.elements)n.some(t=>kt(t,e))||n.push(e);return{arrayValue:{values:n}}}class on extends Ye{constructor(t){super(),this.elements=t}}function sn(t,e){let n=un(e);for(const e of t.elements)n=n.filter(t=>!kt(t,e));return{arrayValue:{values:n}}}class an extends Ye{constructor(t,e){super(),this.serializer=t,this.Te=e}}function cn(t){return yt(t.integerValue||t.doubleValue)}function un(t){return Pt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e){this.version=t,this.transformResults=e}}class hn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new hn}static exists(t){return new hn(void 0,t)}static updateTime(t){return new hn(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function dn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class fn{}function pn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new En(t.key,hn.none()):new _n(t.key,t.data,hn.none());{const n=t.data,r=Ut.empty();let i=new ht(U.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new wn(t.key,r,new ft(i.toArray()),hn.none())}}function mn(t,e,n){t instanceof _n?function(t,e,n){const r=t.value.clone(),i=Tn(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof wn?function(t,e,n){if(!dn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Tn(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(bn(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function vn(t,e,n,r){return t instanceof _n?function(t,e,n,r){if(!dn(t.precondition,e))return n;const i=t.value.clone(),o=Cn(t.fieldTransforms,r,e);return i.setAll(o),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof wn?function(t,e,n,r){if(!dn(t.precondition,e))return n;const i=Cn(t.fieldTransforms,r,e),o=e.data;return o.setAll(bn(t)),o.setAll(i),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return dn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function gn(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=tn(r.transform,t||null);null!=i&&(null===n&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function yn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&P(t,e,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof nn&&e instanceof nn||t instanceof on&&e instanceof on?P(t.elements,e.elements,kt):t instanceof an&&e instanceof an?kt(t.Te,e.Te):t instanceof en&&e instanceof en}(t.transform,e.transform)}(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _n extends fn{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class wn extends fn{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function bn(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tn(t,e,n){const r=new Map;y(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Ze(s,a,n[i]))}return r}function Cn(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,Xe(t,o,e))}return r}class En extends fn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class In extends fn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&mn(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=vn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=vn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ve();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=e.has(r.key)?null:s;const a=pn(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(M.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ze())}isEqual(t){return this.batchId===t.batchId&&P(this.mutations,t.mutations,(t,e)=>yn(t,e))&&P(this.baseMutations,t.baseMutations,(t,e)=>yn(t,e))}}class kn{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){y(t.mutations.length===n.length);let r=qe;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new kn(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xn,Nn;function Rn(t){switch(t){default:return g();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Dn(t){if(void 0===t)return p("GRPC error has no .code"),w.UNKNOWN;switch(t){case xn.OK:return w.OK;case xn.CANCELLED:return w.CANCELLED;case xn.UNKNOWN:return w.UNKNOWN;case xn.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case xn.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case xn.INTERNAL:return w.INTERNAL;case xn.UNAVAILABLE:return w.UNAVAILABLE;case xn.UNAUTHENTICATED:return w.UNAUTHENTICATED;case xn.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case xn.NOT_FOUND:return w.NOT_FOUND;case xn.ALREADY_EXISTS:return w.ALREADY_EXISTS;case xn.PERMISSION_DENIED:return w.PERMISSION_DENIED;case xn.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case xn.ABORTED:return w.ABORTED;case xn.OUT_OF_RANGE:return w.OUT_OF_RANGE;case xn.UNIMPLEMENTED:return w.UNIMPLEMENTED;case xn.DATA_LOSS:return w.DATA_LOSS;default:return g()}}(Nn=xn||(xn={}))[Nn.OK=0]="OK",Nn[Nn.CANCELLED=1]="CANCELLED",Nn[Nn.UNKNOWN=2]="UNKNOWN",Nn[Nn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Nn[Nn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Nn[Nn.NOT_FOUND=5]="NOT_FOUND",Nn[Nn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Nn[Nn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Nn[Nn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Nn[Nn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Nn[Nn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Nn[Nn.ABORTED=10]="ABORTED",Nn[Nn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Nn[Nn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Nn[Nn.INTERNAL=13]="INTERNAL",Nn[Nn.UNAVAILABLE=14]="UNAVAILABLE",Nn[Nn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Pn=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new a.d([4294967295,4294967295],0);function $n(t){const e=Ln().encode(t),n=new a.e;return n.update(e),new Uint8Array(n.digest())}function jn(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new a.d([n,r],0),new a.d([i,o],0)]}class Fn{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Un("Invalid padding: "+e);if(n<0)throw new Un("Invalid hash count: "+n);if(t.length>0&&0===this.hashCount)throw new Un("Invalid hash count: "+n);if(0===t.length&&0!==e)throw new Un("Invalid padding when bitmap length is 0: "+e);this.Ae=8*t.length-e,this.Re=a.d.fromNumber(this.Ae)}Ve(t,e,n){let r=t.add(e.multiply(a.d.fromNumber(n)));return 1===r.compare(Mn)&&(r=new a.d([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}me(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ae)return!1;const e=$n(t),[n,r]=jn(e);for(let t=0;t<this.hashCount;t++){const e=this.Ve(n,r,t);if(!this.me(e))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Fn(i,r,e);return n.forEach(t=>o.insert(t)),o}insert(t){if(0===this.Ae)return;const e=$n(t),[n,r]=jn(e);for(let t=0;t<this.hashCount;t++){const e=this.Ve(n,r,t);this.fe(e)}}fe(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Bn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Vn(M.min(),r,new ct(D),Me(),ze())}}class Bn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Bn(n,e,ze(),ze(),ze())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e,n,r){this.ge=t,this.removedTargetIds=e,this.key=n,this.pe=r}}class Hn{constructor(t,e){this.targetId=t,this.ye=e}}class zn{constructor(t,e,n=mt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Kn{constructor(){this.we=0,this.Se=Qn(),this.be=mt.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return 0!==this.we}get Fe(){return this.Ce}Me(t){t.approximateByteSize()>0&&(this.Ce=!0,this.be=t)}xe(){let t=ze(),e=ze(),n=ze();return this.Se.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:g()}}),new Bn(this.be,this.De,t,e,n)}Oe(){this.Ce=!1,this.Se=Qn()}Ne(t,e){this.Ce=!0,this.Se=this.Se.insert(t,e)}Be(t){this.Ce=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class Gn{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=Me(),this.Ue=Wn(),this.We=new ct(D)}Ge(t){for(const e of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(e,t.pe):this.je(e,t.key,t.pe);for(const e of t.removedTargetIds)this.je(e,t.key,t.pe)}He(t){this.forEachTarget(t,e=>{const n=this.Je(e);switch(t.state){case 0:this.Ye(e)&&n.Me(t.resumeToken);break;case 1:n.ke(),n.ve||n.Oe(),n.Me(t.resumeToken);break;case 2:n.ke(),n.ve||this.removeTarget(e);break;case 3:this.Ye(e)&&(n.qe(),n.Me(t.resumeToken));break;case 4:this.Ye(e)&&(this.Ze(e),n.Me(t.resumeToken));break;default:g()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ke.forEach((t,n)=>{this.Ye(n)&&e(n)})}Xe(t){const e=t.targetId,n=t.ye.count,r=this.et(e);if(r){const i=r.target;if(pe(i))if(0===n){const t=new V(i.path);this.je(e,t,Bt.newNoDocument(t,M.min()))}else y(1===n);else{const r=this.tt(e);if(r!==n){const n=this.nt(t),i=n?this.rt(n,t,r):1;if(0!==i){this.Ze(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(e,t)}null==Pn||Pn.it(function(t,e,n,r,i){var o,s,a,c,u,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(o=null==d?void 0:d.hashCount)&&void 0!==o?o:0,bitmapLength:null!==(c=null===(a=null===(s=null==d?void 0:d.bits)||void 0===s?void 0:s.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.ye,this.Qe.st(),n,i))}}}}nt(t){const e=t.ye.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let o,s;try{o=_t(n).toUint8Array()}catch(t){if(t instanceof pt)return m("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{s=new Fn(o,r,i)}catch(t){return m(t instanceof Un?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===s.Ae?null:s}rt(t,e,n){return e.ye.count===n-this.ot(t,e.targetId)?0:2}ot(t,e){const n=this.Qe.getRemoteKeysForTarget(e);let r=0;return n.forEach(n=>{const i=this.Qe.st(),o=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(o)||(this.je(e,n,null),r++)}),r}_t(t){const e=new Map;this.Ke.forEach((n,r)=>{const i=this.et(r);if(i){if(n.current&&pe(i.target)){const e=new V(i.target.path);null!==this.$e.get(e)||this.ut(r,e)||this.je(r,e,Bt.newNoDocument(e,t))}n.Fe&&(e.set(r,n.xe()),n.Oe())}});let n=ze();this.Ue.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.et(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.$e.forEach((e,n)=>n.setReadTime(t));const r=new Vn(t,e,this.We,this.$e,n);return this.$e=Me(),this.Ue=Wn(),this.We=new ct(D),r}ze(t,e){if(!this.Ye(t))return;const n=this.ut(t,e.key)?2:0;this.Je(t).Ne(e.key,n),this.$e=this.$e.insert(e.key,e),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}je(t,e,n){if(!this.Ye(t))return;const r=this.Je(t);this.ut(t,e)?r.Ne(e,1):r.Be(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),n&&(this.$e=this.$e.insert(e,n))}removeTarget(t){this.Ke.delete(t)}tt(t){const e=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let e=this.Ke.get(t);return e||(e=new Kn,this.Ke.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new ht(D),this.Ue=this.Ue.insert(t,e)),e}Ye(t){const e=null!==this.et(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}et(t){const e=this.Ke.get(t);return e&&e.ve?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new Kn),this.Qe.getRemoteKeysForTarget(t).forEach(e=>{this.je(t,e,null)})}ut(t,e){return this.Qe.getRemoteKeysForTarget(t).has(e)}}function Wn(){return new ct(V.comparator)}function Qn(){return new ct(V.comparator)}const Jn={asc:"ASCENDING",desc:"DESCENDING"},Yn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xn={and:"AND",or:"OR"};class Zn{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function tr(t,e){return t.useProto3Json||Z(e)?e:{value:e}}function er(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nr(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rr(t,e){return er(t,e.toTimestamp())}function ir(t){return y(!!t),M.fromTimestamp(function(t){const e=gt(t);return new L(e.seconds,e.nanos)}(t))}function or(t,e){return function(t){return new j(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function sr(t){const e=j.fromString(t);return y(Er(e)),e}function ar(t,e){return or(t.databaseId,e.path)}function cr(t,e){const n=sr(e);if(n.get(1)!==t.databaseId.projectId)throw new b(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(dr(n))}function ur(t,e){return or(t.databaseId,e)}function lr(t){const e=sr(t);return 4===e.length?j.emptyPath():dr(e)}function hr(t){return new j(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dr(t){return y(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function fr(t,e,n){return{name:ar(t,e),fields:n.value.mapValue.fields}}function pr(t,e){let n;if(e instanceof _n)n={update:fr(t,e.key,e.value)};else if(e instanceof En)n={delete:ar(t,e.key)};else if(e instanceof wn)n={update:fr(t,e.key,e.data),updateMask:Cr(e.fieldMask)};else{if(!(e instanceof In))return g();n={verify:ar(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof en)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof nn)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof on)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof an)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw g()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:rr(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:g()}(t,e.precondition)),n}function mr(t,e){return{documents:[ur(t,e.path)]}}function vr(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=ur(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ur(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return function t(e){return e instanceof Qt?function(t){if("=="===t.op){if(Mt(t.value))return{unaryFilter:{field:br(t.field),op:"IS_NAN"}};if(Lt(t.value))return{unaryFilter:{field:br(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Mt(t.value))return{unaryFilter:{field:br(t.field),op:"IS_NOT_NAN"}};if(Lt(t.value))return{unaryFilter:{field:br(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:br(t.field),op:_r(t.op),value:t.value}}}(e):e instanceof Jt?function(e){const n=e.getFilters().map(e=>t(e));return 1===n.length?n[0]:{compositeFilter:{op:wr(e.op),filters:n}}}(e):g()}(Jt.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:br(t.field),direction:yr(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=tr(t,e.limit);return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function gr(t){let e=lr(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=function(t){const e=function t(e){return void 0!==e.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Tr(t.unaryFilter.field);return Qt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Tr(t.unaryFilter.field);return Qt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Tr(t.unaryFilter.field);return Qt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Tr(t.unaryFilter.field);return Qt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return g()}}(e):void 0!==e.fieldFilter?function(t){return Qt.create(Tr(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return g()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Jt.create(e.compositeFilter.filters.map(e=>t(e)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return g()}}(e.compositeFilter.op))}(e):g()}(t);return e instanceof Jt&&Xt(e)?e.getFilters():[e]}(n.where));let s=[];n.orderBy&&(s=function(t){return t.map(t=>function(t){return new Kt(Tr(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Z(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new qt(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new qt(n,e)}(n.endAt)),ve(e,i,s,o,a,"F",c,u)}function yr(t){return Jn[t]}function _r(t){return Yn[t]}function wr(t){return Xn[t]}function br(t){return{fieldPath:t.canonicalString()}}function Tr(t){return U.fromServerFormat(t.fieldPath)}function Cr(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Er(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,n,r,i=M.min(),o=M.min(),s=mt.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s,this.expectedCount=a}withSequenceNumber(t){return new Ir(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this.ht=t}}function kr(t){const e=gr({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Se(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Or{constructor(){}dt(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.At(e,5);else if("booleanValue"in t)this.At(e,10),e.Rt(t.booleanValue?1:0);else if("integerValue"in t)this.At(e,15),e.Rt(yt(t.integerValue));else if("doubleValue"in t){const n=yt(t.doubleValue);isNaN(n)?this.At(e,13):(this.At(e,15),tt(n)?e.Rt(0):e.Rt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.At(e,20),"string"==typeof n?e.Vt(n):(e.Vt(""+(n.seconds||"")),e.Rt(n.nanos||0))}else if("stringValue"in t)this.ft(t.stringValue,e),this.gt(e);else if("bytesValue"in t)this.At(e,30),e.yt(_t(t.bytesValue)),this.gt(e);else if("referenceValue"in t)this.wt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.At(e,45),e.Rt(n.latitude||0),e.Rt(n.longitude||0)}else"mapValue"in t?Ft(t)?this.At(e,Number.MAX_SAFE_INTEGER):(this.St(t.mapValue,e),this.gt(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.gt(e)):g()}ft(t,e){this.At(e,25),this.Dt(t,e)}Dt(t,e){e.Vt(t)}St(t,e){const n=t.fields||{};this.At(e,55);for(const t of Object.keys(n))this.ft(t,e),this.Tt(n[t],e)}bt(t,e){const n=t.values||[];this.At(e,50);for(const t of n)this.Tt(t,e)}wt(t,e){this.At(e,37),V.fromName(t).path.forEach(t=>{this.At(e,60),this.Dt(t,e)})}At(t,e){t.Rt(e)}gt(t){t.Rt(2)}}Or.Ct=new Or;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{constructor(){this.an=new xr}addToCollectionParentIndex(t,e){return this.an.add(e),J.resolve()}getCollectionParents(t,e){return J.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return J.resolve()}deleteFieldIndex(t,e){return J.resolve()}deleteAllFieldIndexes(t){return J.resolve()}createTargetIndexes(t,e){return J.resolve()}getDocumentsMatchingTarget(t,e){return J.resolve(null)}getIndexType(t,e){return J.resolve(0)}getFieldIndexes(t,e){return J.resolve([])}getNextCollectionGroupToUpdate(t){return J.resolve(null)}getMinOffset(t,e){return J.resolve(z.min())}getMinOffsetFromCollectionGroup(t,e){return J.resolve(z.min())}updateCollectionGroup(t,e,n){return J.resolve()}updateIndexEntries(t,e){return J.resolve()}}class xr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ht(j.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ht(j.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Nr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Nr(t,Nr.DEFAULT_COLLECTION_PERCENTILE,Nr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nr.DEFAULT_COLLECTION_PERCENTILE=10,Nr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nr.DEFAULT=new Nr(41943040,Nr.DEFAULT_COLLECTION_PERCENTILE,Nr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nr.DISABLED=new Nr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Bn(){return new Rr(0)}static Ln(){return new Rr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dr{constructor(){this.changes=new Pe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Bt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?J.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&vn(n.mutation,t,ft.empty(),L.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,ze()).next(()=>e))}getLocalViewOfDocuments(t,e,n=ze()){const r=Ue();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=je();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=Ue();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,ze()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let i=Me();const o=Be(),s=Be();return e.forEach((t,e)=>{const s=n.get(e.key);r.has(e.key)&&(void 0===s||s.mutation instanceof wn)?i=i.insert(e.key,e):void 0!==s?(o.set(e.key,s.mutation.getFieldMask()),vn(s.mutation,e,s.mutation.getFieldMask(),L.now())):o.set(e.key,ft.empty())}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>o.set(t,e)),e.forEach((t,e)=>{var n;return s.set(t,new Pr(e,null!==(n=o.get(t))&&void 0!==n?n:null))}),s))}recalculateAndSaveOverlays(t,e){const n=Be();let r=new ct((t,e)=>t-e),i=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const i of t)i.keys().forEach(t=>{const o=e.get(t);if(null===o)return;let s=n.get(t)||ft.empty();s=i.applyToLocalView(o,s),n.set(t,s);const a=(r.get(i.batchId)||ze()).add(t);r=r.insert(i.batchId,a)})}).next(()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,c=r.value,u=Ve();c.forEach(t=>{if(!i.has(t)){const r=pn(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}}),o.push(this.documentOverlayCache.saveOverlays(t,a,u))}return J.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return V.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):be(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):J.resolve(Ue());let s=-1,a=i;return o.next(e=>J.forEach(e,(e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(e)?J.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,a,e,ze())).next(t=>({batchId:s,changes:Fe(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new V(e)).next(t=>{let e=je();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let o=je();return this.indexManager.getCollectionParents(t,i).next(s=>J.forEach(s,s=>{const a=function(t,e){return new me(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next(t=>{t.forEach((t,e)=>{o=o.insert(t,e)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r))).next(t=>{i.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Bt.newInvalidDocument(r)))});let n=je();return t.forEach((t,r)=>{const o=i.get(t);void 0!==o&&vn(o.mutation,r,ft.empty(),L.now()),xe(e,r)&&(n=n.insert(t,r))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return J.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:ir(t.createTime)}}(e)),J.resolve()}getNamedQuery(t,e){return J.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(t){return{name:t.name,query:kr(t.bundledQuery),readTime:ir(t.readTime)}}(e)),J.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.overlays=new ct(V.comparator),this.Pr=new Map}getOverlay(t,e){return J.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ue();return J.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.It(t,e,r)}),J.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Pr.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.Pr.delete(n)),J.resolve()}getOverlaysForCollection(t,e,n){const r=Ue(),i=e.length+1,o=new V(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return J.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new ct((t,e)=>t-e);const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Ue(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=Ue(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>s.set(t,e)),!(s.size()>=r)););return J.resolve(s)}It(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new On(e,n));let i=this.Pr.get(e);void 0===i&&(i=ze(),this.Pr.set(e,i)),this.Pr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.Ir=new ht(Fr.dr),this.Tr=new ht(Fr.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const n=new Fr(t,e);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}Ar(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Rr(new Fr(t,e))}Vr(t,e){t.forEach(t=>this.removeReference(t,e))}mr(t){const e=new V(new j([])),n=new Fr(e,t),r=new Fr(e,t+1),i=[];return this.Tr.forEachInRange([n,r],t=>{this.Rr(t),i.push(t.key)}),i}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Tr=this.Tr.delete(t)}pr(t){const e=new V(new j([])),n=new Fr(e,t),r=new Fr(e,t+1);let i=ze();return this.Tr.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Fr(t,0),n=this.Ir.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Fr{constructor(t,e){this.key=t,this.yr=e}static dr(t,e){return V.comparator(t.key,e.key)||D(t.yr,e.yr)}static Er(t,e){return D(t.yr,e.yr)||V.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new ht(Fr.dr)}checkEmpty(t){return J.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sn(i,e,n,r);this.mutationQueue.push(o);for(const e of r)this.Sr=this.Sr.add(new Fr(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return J.resolve(o)}lookupMutationBatch(t,e){return J.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Dr(n),i=r<0?0:r;return J.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(t){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Fr(e,0),r=new Fr(e,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([n,r],t=>{const e=this.br(t.yr);i.push(e)}),J.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ht(D);return e.forEach(t=>{const e=new Fr(t,0),r=new Fr(t,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([e,r],t=>{n=n.add(t.yr)})}),J.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;V.isDocumentKey(i)||(i=i.child(""));const o=new Fr(new V(i),0);let s=new ht(D);return this.Sr.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.yr)),!0)},o),J.resolve(this.Cr(s))}Cr(t){const e=[];return t.forEach(t=>{const n=this.br(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){y(0===this.vr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Sr;return J.forEach(e.mutations,r=>{const i=new Fr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Sr=n})}xn(t){}containsKey(t,e){const n=new Fr(e,0),r=this.Sr.firstAfterOrEqual(n);return J.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,J.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t){this.Fr=t,this.docs=new ct(V.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.Fr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return J.resolve(n?n.document.mutableCopy():Bt.newInvalidDocument(e))}getEntries(t,e){let n=Me();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Bt.newInvalidDocument(t))}),J.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Me();const o=e.path,s=new V(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:t,value:{document:s}}=a.getNext();if(!o.isPrefixOf(t.path))break;t.path.length>o.length+1||K(H(s),n)<=0||(r.has(s.key)||xe(e,s))&&(i=i.insert(s.key,s.mutableCopy()))}return J.resolve(i)}getAllFromCollectionGroup(t,e,n,r){g()}Mr(t,e){return J.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Br(this)}getSize(t){return J.resolve(this.size)}}class Br extends Dr{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.ur.addEntry(t,r)):this.ur.removeEntry(n)}),J.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.persistence=t,this.Or=new Pe(t=>de(t),fe),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Nr=0,this.Br=new jr,this.targetCount=0,this.Lr=Rr.Bn()}forEachTarget(t,e){return this.Or.forEach((t,n)=>e(n)),J.resolve()}getLastRemoteSnapshotVersion(t){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return J.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Nr&&(this.Nr=e),J.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Rr(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,J.resolve()}updateTargetData(t,e){return this.Qn(e),J.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Br.mr(e.targetId),this.targetCount-=1,J.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Or.forEach((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)}),J.waitFor(i).next(()=>r)}getTargetCount(t){return J.resolve(this.targetCount)}getTargetData(t,e){const n=this.Or.get(e)||null;return J.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Ar(e,n),J.resolve()}removeMatchingKeys(t,e,n){this.Br.Vr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),J.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.mr(e),J.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.pr(e);return J.resolve(n)}containsKey(t,e){return J.resolve(this.Br.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,e){this.kr={},this.overlays={},this.qr=new X(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=t(this),this.Kr=new qr(this),this.indexManager=new Ar,this.remoteDocumentCache=function(t){return new Vr(t)}(t=>this.referenceDelegate.$r(t)),this.serializer=new Sr(e),this.Ur=new Mr(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new $r,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.kr[t.toKey()];return n||(n=new Ur(e,this.referenceDelegate),this.kr[t.toKey()]=n),n}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new zr(this.qr.next());return this.referenceDelegate.Wr(),n(r).next(t=>this.referenceDelegate.Gr(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}zr(t,e){return J.or(Object.values(this.kr).map(n=>()=>n.containsKey(t,e)))}}class zr extends W{constructor(t){super(),this.currentSequenceNumber=t}}class Kr{constructor(t){this.persistence=t,this.jr=new jr,this.Hr=null}static Jr(t){return new Kr(t)}get Yr(){if(this.Hr)return this.Hr;throw g()}addReference(t,e,n){return this.jr.addReference(n,e),this.Yr.delete(n.toString()),J.resolve()}removeReference(t,e,n){return this.jr.removeReference(n,e),this.Yr.add(n.toString()),J.resolve()}markPotentiallyOrphaned(t,e){return this.Yr.add(e.toString()),J.resolve()}removeTarget(t,e){this.jr.mr(e.targetId).forEach(t=>this.Yr.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Yr.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Wr(){this.Hr=new Set}Gr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.Yr,n=>{const r=V.fromPath(n);return this.Zr(t,r).next(t=>{t||e.removeEntry(r,M.min())})}).next(()=>(this.Hr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Zr(t,e).next(t=>{t?this.Yr.delete(e.toString()):this.Yr.add(e.toString())})}$r(t){return 0}Zr(t,e){return J.or([()=>J.resolve(this.jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.zr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Qi=n,this.Ki=r}static $i(t,e){let n=ze(),r=ze();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Gr(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(t,e){this.ji=t,this.indexManager=e,this.Ui=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.Hi(t,e).next(t=>{i.result=t}).next(()=>{if(!i.result)return this.Ji(t,e,r,n).next(t=>{i.result=t})}).next(()=>{if(i.result)return;const n=new Wr;return this.Yi(t,e,n).next(r=>{if(i.result=r,this.Wi)return this.Zi(t,e,n,r.size)})}).next(()=>i.result)}Zi(t,e,n,r){return n.documentReadCount<this.Gi?(d()<=o.a.DEBUG&&f("QueryEngine","SDK will not create cache indexes for query:",Ae(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),J.resolve()):(d()<=o.a.DEBUG&&f("QueryEngine","Query:",Ae(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.zi*r?(d()<=o.a.DEBUG&&f("QueryEngine","The SDK decides to create cache indexes for query:",Ae(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ce(e))):J.resolve())}Hi(t,e){if(ye(e))return J.resolve(null);let n=Ce(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=Se(e,null,"F"),n=Ce(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const i=ze(...r);return this.ji.getDocuments(t,i).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const o=this.Xi(e,r);return this.es(e,o,i,n.readTime)?this.Hi(t,Se(e,null,"F")):this.ts(t,o,e,n)}))})))}Ji(t,e,n,r){return ye(e)||r.isEqual(M.min())?J.resolve(null):this.ji.getDocuments(t,n).next(i=>{const s=this.Xi(e,i);return this.es(e,s,n,r)?J.resolve(null):(d()<=o.a.DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ae(e)),this.ts(t,s,e,q(r,-1)).next(t=>t))})}Xi(t,e){let n=new ht(Re(t));return e.forEach((e,r)=>{xe(t,r)&&(n=n.add(r))}),n}es(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Yi(t,e,n){return d()<=o.a.DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Ae(e)),this.ji.getDocumentsMatchingQuery(t,e,z.min(),n)}ts(t,e,n,r){return this.ji.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,e,n,r){this.persistence=t,this.ns=e,this.serializer=r,this.rs=new ct(D),this.ss=new Pe(t=>de(t),fe),this.os=new Map,this._s=t.getRemoteDocumentCache(),this.Kr=t.getTargetCache(),this.Ur=t.getBundleCache(),this.us(n)}us(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Lr(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.rs))}}function Yr(t,e,n,r){return new Jr(t,e,n,r)}async function Xr(t,e){const n=_(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(i=>(r=i,n.us(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const i=[],o=[];let s=ze();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next(t=>({cs:t,removedBatchIds:i,addedBatchIds:o}))})})}function Zr(t){const e=_(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}function ti(t,e,n){let r=ze(),i=ze();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=Me();return n.forEach((n,o)=>{const s=t.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(M.min())?(e.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(o),r=r.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)}),{ls:r,hs:i}})}function ei(t,e){const n=_(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function ni(t,e){const n=_(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Kr.getTargetData(t,e).next(i=>i?(r=i,J.resolve(r)):n.Kr.allocateTargetId(t).next(i=>(r=new Ir(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Kr.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.rs.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.rs=n.rs.insert(t.targetId,t),n.ss.set(e,t.targetId)),t})}async function ri(t,e,n){const r=_(t),i=r.rs.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Y(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function ii(t,e,n){const r=_(t);let i=M.min(),o=ze();return r.persistence.runTransaction("Execute query","readwrite",t=>function(t,e,n){const r=_(t),i=r.ss.get(n);return void 0!==i?J.resolve(r.rs.get(i)):r.Kr.getTargetData(e,n)}(r,t,Ce(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(t,e.targetId).next(t=>{o=t})}).next(()=>r.ns.getDocumentsMatchingQuery(t,e,n?i:M.min(),n?o:ze())).next(t=>(oi(r,Ne(e),t),{documents:t,Ps:o})))}function oi(t,e,n){let r=t.os.get(e)||M.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.os.set(e,r)}class si{constructor(){this.activeTargetIds=Ge()}Rs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}As(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ai{constructor(){this.ro=new si,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.ro.Rs(t),this.io[t]||"not-current"}updateQueryState(t,e,n){this.io[t]=e}removeLocalQueryTarget(t){this.ro.Vs(t)}isLocalQueryTarget(t){return this.ro.activeTargetIds.has(t)}clearQueryState(t){delete this.io[t]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(t){return this.ro.activeTargetIds.has(t)}start(){return this.ro=new si,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{so(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(t){this.co.push(t)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.co)t(0)}uo(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.co)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li=null;function hi(){return null===li?li=268435456+Math.round(2147483648*Math.random()):li++,"0x"+li.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const di={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t){this.ho=t.ho,this.Po=t.Po}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.Po()}send(t){this.ho(t)}Vo(){this.To()}mo(t){this.Ao(t)}fo(t){this.Ro(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="WebChannelConnection";class mi extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${r}`,this.wo="(default)"===this.databaseId.database?"project_id="+n:`project_id=${n}&database_id=${r}`}get So(){return!1}bo(t,e,n,r,i){const o=hi(),s=this.Do(t,e);f("RestConnection",`Sending RPC '${t}' ${o}:`,s,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(a,r,i),this.vo(t,s,a,n).then(e=>(f("RestConnection",`Received RPC '${t}' ${o}: `,e),e),e=>{throw m("RestConnection",`RPC '${t}' ${o} failed with error: `,e,"url: ",s,"request:",n),e})}Fo(t,e,n,r,i,o){return this.bo(t,e,n,r,i)}Co(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Do(t,e){const n=di[t];return`${this.po}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,r){const i=hi();return new Promise((o,s)=>{const c=new a.h;c.setWithCredentials(!0),c.listenOnce(a.c.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case a.a.NO_ERROR:const e=c.getResponseJson();f(pi,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),o(e);break;case a.a.TIMEOUT:f(pi,`RPC '${t}' ${i} timed out`),s(new b(w.DEADLINE_EXCEEDED,"Request time out"));break;case a.a.HTTP_ERROR:const n=c.getStatus();if(f(pi,`RPC '${t}' ${i} failed with status:`,n,"response text:",c.getResponseText()),n>0){let t=c.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(e.status);s(new b(t,e.message))}else s(new b(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else s(new b(w.UNAVAILABLE,"Connection failed."));break;default:g()}}finally{f(pi,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(r);f(pi,`RPC '${t}' ${i} sending request:`,r),c.send(e,"POST",u,n,15)})}Mo(t,e,n){const r=hi(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Object(a.i)(),s=Object(a.j)(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const l=i.join("");f(pi,`Creating RPC '${t}' stream ${r}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,p=!1;const v=new fi({ho:e=>{p?f(pi,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(d||(f(pi,`Opening RPC '${t}' stream ${r} transport.`),h.open(),d=!0),f(pi,`RPC '${t}' stream ${r} sending:`,e),h.send(e))},Po:()=>h.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(h,a.g.EventType.OPEN,()=>{p||f(pi,`RPC '${t}' stream ${r} transport opened.`)}),g(h,a.g.EventType.CLOSE,()=>{p||(p=!0,f(pi,`RPC '${t}' stream ${r} transport closed`),v.mo())}),g(h,a.g.EventType.ERROR,e=>{p||(p=!0,m(pi,`RPC '${t}' stream ${r} transport errored:`,e),v.mo(new b(w.UNAVAILABLE,"The operation could not be completed")))}),g(h,a.g.EventType.MESSAGE,e=>{var n;if(!p){const i=e.data[0];y(!!i);const o=i,s=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){f(pi,`RPC '${t}' stream ${r} received error:`,s);const e=s.status;let n=function(t){const e=xn[t];if(void 0!==e)return Dn(e)}(e),i=s.message;void 0===n&&(n=w.INTERNAL,i="Unknown error status: "+e+" with message "+s.message),p=!0,v.mo(new b(n,i)),h.close()}else f(pi,`RPC '${t}' stream ${r} received:`,i),v.fo(i)}}),g(s,a.b.STAT_EVENT,e=>{e.stat===a.f.PROXY?f(pi,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===a.f.NOPROXY&&f(pi,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{v.Vo()},0),v}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){return new Zn(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,n=1e3,r=1.5,i=6e4){this._i=t,this.timerId=e,this.xo=n,this.Oo=r,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const e=Math.floor(this.Bo+this.Ko()),n=Math.max(0,Date.now()-this.ko),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,r,()=>(this.ko=Date.now(),t())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e,n,r,i,o,s,a){this._i=t,this.Uo=n,this.Wo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new yi(t,e)}Jo(){return 1===this.state||5===this.state||this.Yo()}Yo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(t){this.r_(),this.stream.send(t)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(t,e){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,4!==t?this.Ho.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(e)}s_(){}auth(){this.state=1;const t=this.o_(this.Go),e=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Go===e&&this.__(t,n)},e=>{t(()=>{const t=new b(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.a_(t)})})}__(t,e){const n=this.o_(this.Go);this.stream=this.u_(t,e),this.stream.Io(()=>{n(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(t=>{n(()=>this.a_(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}o_(t){return e=>{this._i.enqueueAndForget(()=>this.Go===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wi extends _i{constructor(t,e,n,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.serializer=i}u_(t,e){return this.connection.Mo("Listen",t,e)}onMessage(t){this.Ho.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:g()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(y(void 0===e||"string"==typeof e),mt.fromBase64String(e||"")):(y(void 0===e||e instanceof Uint8Array),mt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?w.UNKNOWN:Dn(t.code);return new b(e,t.message||"")}(s);n=new zn(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cr(t,r.document.name),o=ir(r.document.updateTime),s=r.document.createTime?ir(r.document.createTime):M.min(),a=new Ut({mapValue:{fields:r.document.fields}}),c=Bt.newFoundDocument(i,o,s,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new qn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cr(t,r.document),o=r.readTime?ir(r.readTime):M.min(),s=Bt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new qn([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cr(t,r.document),o=r.removedTargetIds||[];n=new qn([],o,i,null)}else{if(!("filter"in e))return g();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,o=new An(r,i),s=t.targetId;n=new Hn(s,o)}}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return M.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?M.min():e.readTime?ir(e.readTime):M.min()}(t);return this.listener.c_(e,n)}l_(t){const e={};e.database=hr(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=pe(r)?{documents:mr(t,r)}:{query:vr(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=nr(t,e.resumeToken);const r=tr(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(M.min())>0){n.readTime=er(t,e.snapshotVersion.toTimestamp());const r=tr(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return g()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.n_(e)}h_(t){const e={};e.database=hr(this.serializer),e.removeTarget=t,this.n_(e)}}class bi extends _i{constructor(t,e,n,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(t,e){return this.connection.Mo("Write",t,e)}onMessage(t){if(y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.P_){this.Ho.reset();const e=function(t,e){return t&&t.length>0?(y(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?ir(t.updateTime):ir(e);return n.isEqual(M.min())&&(n=ir(e)),new ln(n,t.transformResults||[])}(t,e))):[]}(t.writeResults,t.commitTime),n=ir(t.commitTime);return this.listener.T_(n,e)}return y(!t.writeResults||0===t.writeResults.length),this.P_=!0,this.listener.E_()}A_(){const t={};t.database=hr(this.serializer),this.n_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>pr(this.serializer,t))};this.n_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.R_=!1}V_(){if(this.R_)throw new b(w.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,e,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.bo(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new b(w.UNKNOWN,t.toString())})}Fo(t,e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(t,e,n,i,o,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new b(w.UNKNOWN,t.toString())})}terminate(){this.R_=!0}}class Ci{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(t){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_("Connection failed 1 times. Most recent error: "+t.toString()),this.w_("Offline")))}set(t){this.D_(),this.f_=0,"Online"===t&&(this.p_=!1),this.w_(t)}w_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}S_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(p(e),this.p_=!1):f("OnlineStateTracker",e)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(t=>{n.enqueueAndForget(async()=>{Di(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=_(t);e.F_.add(4),await Si(e),e.O_.set("Unknown"),e.F_.delete(4),await Ii(e)}(this))})}),this.O_=new Ci(n,r)}}async function Ii(t){if(Di(t))for(const e of t.M_)await e(!0)}async function Si(t){for(const e of t.M_)await e(!1)}function ki(t,e){const n=_(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Ri(n)?Ni(n):Yi(n).Yo()&&Ai(n,e))}function Oi(t,e){const n=_(t),r=Yi(n);n.v_.delete(e),r.Yo()&&xi(n,e),0===n.v_.size&&(r.Yo()?r.e_():Di(n)&&n.O_.set("Unknown"))}function Ai(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(M.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Yi(t).l_(e)}function xi(t,e){t.N_.Le(e),Yi(t).h_(e)}function Ni(t){t.N_=new Gn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Yi(t).start(),t.O_.y_()}function Ri(t){return Di(t)&&!Yi(t).Jo()&&t.v_.size>0}function Di(t){return 0===_(t).F_.size}function Pi(t){t.N_=void 0}async function Li(t){t.v_.forEach((e,n)=>{Ai(t,e)})}async function Mi(t,e){Pi(t),Ri(t)?(t.O_.b_(e),Ni(t)):t.O_.set("Unknown")}async function $i(t,e,n){if(t.O_.set("Online"),e instanceof zn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.v_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.v_.delete(r),t.N_.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ji(t,n)}else if(e instanceof qn?t.N_.Ge(e):e instanceof Hn?t.N_.Xe(e):t.N_.He(e),!n.isEqual(M.min()))try{const e=await Zr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.N_._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.v_.get(r);i&&t.v_.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const r=t.v_.get(e);if(!r)return;t.v_.set(e,r.withResumeToken(mt.EMPTY_BYTE_STRING,r.snapshotVersion)),xi(t,e);const i=new Ir(r.target,e,n,r.sequenceNumber);Ai(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await ji(t,e)}}async function ji(t,e,n){if(!Y(e))throw e;t.F_.add(1),await Si(t),t.O_.set("Offline"),n||(n=()=>Zr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Ii(t)})}function Fi(t,e){return e().catch(n=>ji(t,n,e))}async function Ui(t){const e=_(t),n=Xi(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;Vi(e);)try{const t=await ei(e.localStore,r);if(null===t){0===e.C_.length&&n.e_();break}r=t.batchId,Bi(e,t)}catch(t){await ji(e,t)}qi(e)&&Hi(e)}function Vi(t){return Di(t)&&t.C_.length<10}function Bi(t,e){t.C_.push(e);const n=Xi(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function qi(t){return Di(t)&&!Xi(t).Jo()&&t.C_.length>0}function Hi(t){Xi(t).start()}async function zi(t){Xi(t).A_()}async function Ki(t){const e=Xi(t);for(const n of t.C_)e.d_(n.mutations)}async function Gi(t,e,n){const r=t.C_.shift(),i=kn.from(r,e,n);await Fi(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ui(t)}async function Wi(t,e){e&&Xi(t).I_&&await async function(t,e){if(function(t){return Rn(t)&&t!==w.ABORTED}(e.code)){const n=t.C_.shift();Xi(t).Xo(),await Fi(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Ui(t)}}(t,e),qi(t)&&Hi(t)}async function Qi(t,e){const n=_(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=Di(n);n.F_.add(3),await Si(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Ii(n)}async function Ji(t,e){const n=_(t);e?(n.F_.delete(2),await Ii(n)):e||(n.F_.add(2),await Si(n),n.O_.set("Unknown"))}function Yi(t){return t.B_||(t.B_=function(t,e,n){const r=_(t);return r.V_(),new wi(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Io:Li.bind(null,t),Eo:Mi.bind(null,t),c_:$i.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Ri(t)?Ni(t):t.O_.set("Unknown")):(await t.B_.stop(),Pi(t))})),t.B_}function Xi(t){return t.L_||(t.L_=function(t,e,n){const r=_(t);return r.V_(),new bi(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Io:zi.bind(null,t),Eo:Wi.bind(null,t),E_:Ki.bind(null,t),T_:Gi.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Ui(t)):(await t.L_.stop(),t.C_.length>0&&(f("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Zi{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Zi(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new b(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function to(t,e){if(p("AsyncQueue",`${e}: ${t}`),Y(t))return new b(w.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t){this.comparator=t?(e,n)=>t(e,n)||V.comparator(e.key,n.key):(t,e)=>V.comparator(t.key,e.key),this.keyedMap=je(),this.sortedSet=new ct(this.comparator)}static emptySet(t){return new eo(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof eo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new eo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.k_=new ct(V.comparator)}track(t){const e=t.doc.key,n=this.k_.get(e);n?0!==t.type&&3===n.type?this.k_=this.k_.insert(e,t):3===t.type&&1!==n.type?this.k_=this.k_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.k_=this.k_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.k_=this.k_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.k_=this.k_.remove(e):1===t.type&&2===n.type?this.k_=this.k_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.k_=this.k_.insert(e,{type:2,doc:t.doc}):g():this.k_=this.k_.insert(e,t)}q_(){const t=[];return this.k_.inorderTraversal((e,n)=>{t.push(n)}),t}}class ro{constructor(t,e,n,r,i,o,s,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const o=[];return e.forEach(t=>{o.push({type:0,doc:t})}),new ro(t,e,eo.emptySet(e),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ke(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.Q_=void 0,this.listeners=[]}}class oo{constructor(){this.queries=new Pe(t=>Oe(t),ke),this.onlineState="Unknown",this.K_=new Set}}async function so(t,e){const n=_(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new io),i)try{o.Q_=await n.onListen(r)}catch(t){const n=to(t,`Initialization of query '${Ae(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.U_(n.onlineState),o.Q_&&e.W_(o.Q_)&&lo(n)}async function ao(t,e){const n=_(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function co(t,e){const n=_(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.W_(t)&&(r=!0);i.Q_=t}}r&&lo(n)}function uo(t,e,n){const r=_(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function lo(t){t.K_.forEach(t=>{t.next()})}class ho{constructor(t,e,n){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ro(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Z_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Y_(t){t=ro.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fo{constructor(t){this.key=t}}class po{constructor(t){this.key=t}}class mo{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ze(),this.mutatedKeys=ze(),this.ua=Re(t),this.ca=new eo(this.ua)}get la(){return this.oa}ha(t,e){const n=e?e.Pa:new no,r=e?e.ca:this.ca;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=xe(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ia(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.ua(l,a)>0||c&&this.ua(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(s=!0)),f&&(l?(o=o.add(l),i=d?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;o.size>this.query.limit;){const t="F"===this.query.limitType?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ca:o,Pa:n,es:s,mutatedKeys:i}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const i=t.Pa.q_();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return g()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.ua(t.doc,e.doc)),this.da(n);const o=e?this.Ta():[],s=0===this.aa.size&&this.current?1:0,a=s!==this._a;return this._a=s,0!==i.length||a?{snapshot:new ro(this.query,t.ca,r,i,t.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new no,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}da(t){t&&(t.addedDocuments.forEach(t=>this.oa=this.oa.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.oa=this.oa.delete(t)),this.current=t.current)}Ta(){if(!this.current)return[];const t=this.aa;this.aa=ze(),this.ca.forEach(t=>{this.Aa(t.key)&&(this.aa=this.aa.add(t.key))});const e=[];return t.forEach(t=>{this.aa.has(t)||e.push(new po(t))}),this.aa.forEach(n=>{t.has(n)||e.push(new fo(n))}),e}Ra(t){this.oa=t.Ps,this.aa=ze();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return ro.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class vo{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class go{constructor(t){this.key=t,this.ma=!1}}class yo{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Pe(t=>Oe(t),ke),this.pa=new Map,this.ya=new Set,this.wa=new ct(V.comparator),this.Sa=new Map,this.ba=new jr,this.Da={},this.Ca=new Map,this.va=Rr.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function _o(t,e){const n=$o(t);let r,i;const o=n.ga.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Va();else{const t=await ni(n.localStore,Ce(e)),o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await wo(n,e,r,"current"===o,t.resumeToken),n.isPrimaryClient&&ki(n.remoteStore,t)}return i}async function wo(t,e,n,r,i){t.Ma=(e,n,r)=>async function(t,e,n,r){let i=e.view.ha(n);i.es&&(i=await ii(t.localStore,e.query,!1).then(({documents:t})=>e.view.ha(t,i)));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return No(t,e.targetId,s.Ea),s.snapshot}(t,e,n,r);const o=await ii(t.localStore,e,!0),s=new mo(e,o.Ps),a=s.ha(o.documents),c=Bn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=s.applyChanges(a,t.isPrimaryClient,c);No(t,n,u.Ea);const l=new vo(e,n,s);return t.ga.set(e,l),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function bo(t,e){const n=_(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(t=>!ke(t,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ri(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Oi(n.remoteStore,r.targetId),Ao(n,r.targetId)}).catch(Q)):(Ao(n,r.targetId),await ri(n.localStore,r.targetId,!0))}async function To(t,e){const n=_(t);try{const t=await function(t,e){const n=_(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const s=[];e.targetChanges.forEach((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.Kr.removeMatchingKeys(t,o.removedDocuments,a).next(()=>n.Kr.addMatchingKeys(t,o.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(mt.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.Kr.updateTargetData(t,u))});let a=Me(),c=ze();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),s.push(ti(t,o,e.documentUpdates).next(t=>{a=t.ls,c=t.hs})),!r.isEqual(M.min())){const e=n.Kr.getLastRemoteSnapshotVersion(t).next(e=>n.Kr.setTargetsMetadata(t,t.currentSequenceNumber,r));s.push(e)}return J.waitFor(s).next(()=>o.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.rs=i,t))}(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Sa.get(e);r&&(y(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.ma=!0:t.modifiedDocuments.size>0?y(r.ma):t.removedDocuments.size>0&&(y(r.ma),r.ma=!1))}),await Po(n,t,e)}catch(t){await Q(t)}}function Co(t,e,n){const r=_(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ga.forEach((n,r)=>{const i=r.view.U_(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=_(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const t of n.listeners)t.U_(e)&&(r=!0)}),r&&lo(n)}(r.eventManager,e),t.length&&r.fa.c_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Eo(t,e,n){const r=_(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),o=i&&i.key;if(o){let t=new ct(V.comparator);t=t.insert(o,Bt.newNoDocument(o,M.min()));const n=ze().add(o),i=new Vn(M.min(),new Map,new ct(D),t,n);await To(r,i),r.wa=r.wa.remove(o),r.Sa.delete(e),Do(r)}else await ri(r.localStore,e,!1).then(()=>Ao(r,e,n)).catch(Q)}async function Io(t,e){const n=_(t),r=e.batch.batchId;try{const t=await function(t,e){const n=_(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=J.resolve();return o.forEach(t=>{s=s.next(()=>r.getEntry(e,t)).next(e=>{const o=n.docVersions.get(t);y(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),s.next(()=>t.mutationQueue.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=ze();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}(n.localStore,e);Oo(n,r,null),ko(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Po(n,t)}catch(t){await Q(t)}}async function So(t,e,n){const r=_(t);try{const t=await function(t,e){const n=_(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(y(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);Oo(r,e,n),ko(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Po(r,t)}catch(n){await Q(n)}}function ko(t,e){(t.Ca.get(e)||[]).forEach(t=>{t.resolve()}),t.Ca.delete(e)}function Oo(t,e,n){const r=_(t);let i=r.Da[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Ao(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(e=>{t.ba.containsKey(e)||xo(t,e)})}function xo(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);null!==n&&(Oi(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Do(t))}function No(t,e,n){for(const r of n)r instanceof fo?(t.ba.addReference(r.key,e),Ro(t,r)):r instanceof po?(f("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||xo(t,r.key)):g()}function Ro(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(f("SyncEngine","New document in limbo: "+n),t.ya.add(r),Do(t))}function Do(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new V(j.fromString(e)),r=t.va.next();t.Sa.set(r,new go(n)),t.wa=t.wa.insert(n,r),ki(t.remoteStore,new Ir(Ce(ge(n.path)),r,"TargetPurposeLimboResolution",X.ae))}}async function Po(t,e,n){const r=_(t),i=[],o=[],s=[];r.ga.isEmpty()||(r.ga.forEach((t,a)=>{s.push(r.Ma(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Gr.$i(a.targetId,t);o.push(e)}}))}),await Promise.all(s),r.fa.c_(i),await async function(t,e){const n=_(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>J.forEach(e,e=>J.forEach(e.Qi,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>J.forEach(e.Ki,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Y(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.rs.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.rs=n.rs.insert(e,i)}}}(r.localStore,o))}async function Lo(t,e){const n=_(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await Xr(n.localStore,e);n.currentUser=e,function(t,e){t.Ca.forEach(t=>{t.forEach(t=>{t.reject(new b(w.CANCELLED,e))})}),t.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Po(n,t.cs)}}function Mo(t,e){const n=_(t),r=n.Sa.get(e);if(r&&r.ma)return ze().add(r.key);{let t=ze();const r=n.pa.get(e);if(!r)return t;for(const e of r){const r=n.ga.get(e);t=t.unionWith(r.view.la)}return t}}function $o(t){const e=_(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=To.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mo.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Eo.bind(null,e),e.fa.c_=co.bind(null,e.eventManager),e.fa.xa=uo.bind(null,e.eventManager),e}function jo(t){const e=_(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Io.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=So.bind(null,e),e}class Fo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=gi(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Yr(this.persistence,new Qr,t.initialUser,this.serializer)}createPersistence(t){return new Hr(Kr.Jr,this.serializer)}createSharedClientState(t){return new ai}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Uo{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Co(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lo.bind(null,this.syncEngine),await Ji(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new oo}createDatastore(t){const e=gi(t.databaseInfo.databaseId),n=function(t){return new mi(t)}(t.databaseInfo);return function(t,e,n,r){return new Ti(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new Ei(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,t=>Co(this.syncEngine,t,0),ui.C()?new ui:new ci)}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new yo(t,e,n,r,i,o);return s&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=_(t);f("RemoteStore","RemoteStore shutting down."),e.F_.add(5),await Si(e),e.x_.shutdown(),e.O_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):p("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=R.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(f("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=to(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function qo(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Xr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ho(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ko(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>Qi(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Qi(e.remoteStore,n)),t._onlineComponents=e}function zo(t){return"FirebaseError"===t.name?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Ko(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){f("FirestoreClient","Using user provided OfflineComponentProvider");try{await qo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!zo(n))throw n;m("Error using user provided cache. Falling back to memory cache: "+n),await qo(t,new Fo)}}else f("FirestoreClient","Using default OfflineComponentProvider"),await qo(t,new Fo);return t._offlineComponents}async function Go(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(f("FirestoreClient","Using user provided OnlineComponentProvider"),await Ho(t,t._uninitializedComponentsProvider._online)):(f("FirestoreClient","Using default OnlineComponentProvider"),await Ho(t,new Uo))),t._onlineComponents}function Wo(t){return Go(t).then(t=>t.syncEngine)}async function Qo(t){const e=await Go(t),n=e.eventManager;return n.onListen=_o.bind(null,e.syncEngine),n.onUnlisten=bo.bind(null,e.syncEngine),n}function Jo(t,e,n={}){const r=new T;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new Vo({next:n=>{e.enqueueAndForget(()=>ao(t,s)),n.fromCache&&"server"===r.source?i.reject(new b(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new ho(n,o,{includeMetadataChanges:!0,Z_:!0});return so(t,s)}(await Qo(t),t.asyncQueue,e,n,r)),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yo(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Xo=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t,e,n){if(!n)throw new b(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ts(t){if(!V.isDocumentKey(t))throw new b(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function es(t){if(V.isDocumentKey(t))throw new b(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ns(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":g()}function rs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ns(t);throw new b(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new b(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new b(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new b(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yo(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new b(w.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new b(w.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new b(w.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class os{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new is({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new b(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new is(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new E;switch(t.type){case"firstParty":return new O(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new b(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Xo.get(t);e&&(f("ComponentProvider","Removing Datastore"),Xo.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ss{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ss(this.firestore,t,this._query)}}class as{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new as(this.firestore,t,this._key)}}class cs extends ss{constructor(t,e,n){super(t,e,ge(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new as(this.firestore,null,new V(t))}withConverter(t){return new cs(this.firestore,t,this._path)}}function us(t,e,...n){if(t=Object(s.n)(t),Zo("collection","path",e),t instanceof os){const r=j.fromString(e,...n);return es(r),new cs(t,null,r)}{if(!(t instanceof as||t instanceof cs))throw new b(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(j.fromString(e,...n));return es(r),new cs(t.firestore,null,r)}}function ls(t,e,...n){if(t=Object(s.n)(t),1===arguments.length&&(e=R.V()),Zo("doc","path",e),t instanceof os){const r=j.fromString(e,...n);return ts(r),new as(t,null,new V(r))}{if(!(t instanceof as||t instanceof cs))throw new b(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(j.fromString(e,...n));return ts(r),new as(t.firestore,t instanceof cs?t.converter:null,new V(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new yi(this,"async_queue_retry"),this.ou=()=>{const t=vi();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ho.$o()};const t=vi();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const e=vi();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise(()=>{});const e=new T;return this.au(()=>this.eu&&this.iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xa.push(t),this.uu()))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!Y(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(t){const e=this.Za.then(()=>(this.ru=!0,t().catch(t=>{this.nu=t,this.ru=!1;throw p("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.ru=!1,t))));return this.Za=e,e}enqueueAfterDelay(t,e,n){this._u(),this.su.indexOf(t)>-1&&(e=0);const r=Zi.createAndSchedule(this,t,e,n,t=>this.cu(t));return this.tu.push(r),r}_u(){this.nu&&g()}verifyOperationInProgress(){}async lu(){let t;do{t=this.Za,await t}while(t!==this.Za)}hu(t){for(const e of this.tu)if(e.timerId===t)return!0;return!1}Pu(t){return this.lu().then(()=>{this.tu.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.tu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.lu()})}Iu(t){this.su.push(t)}cu(t){const e=this.tu.indexOf(t);this.tu.splice(e,1)}}class ds extends os{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new hs,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ms(this),this._firestoreClient.terminate()}}function fs(t,e){const n="object"==typeof t?t:Object(r.e)(),i="string"==typeof t?t:e||"(default)",o=Object(r.b)(n,"firestore").getImmediate({identifier:i});if(!o._initialized){const t=Object(s.l)("firestore");t&&function(t,e,n,r={}){var i;const o=(t=rs(t,os))._getSettings(),a=`${e}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&m("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=u.MOCK_USER;else{e=Object(s.f)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new b(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(o)}t._authCredentials=new I(new C(e,n))}}(o,...t)}return o}function ps(t){return t._firestoreClient||ms(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ms(t){var e,n,r;const i=t._freezeSettings(),o=function(t,e,n,r){return new Ct(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Yo(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Bo(t._authCredentials,t._appCheckCredentials,t._queue,o),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new vs(mt.fromBase64String(t))}catch(t){throw new b(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new vs(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new b(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new U(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=/^__.*__$/;class bs{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new wn(t,this.data,this.fieldMask,e,this.fieldTransforms):new _n(t,this.data,e,this.fieldTransforms)}}function Ts(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw g()}}class Cs{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new Cs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Eu({path:n,Ru:!1});return r.Vu(t),r}mu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Eu({path:n,Ru:!1});return r.du(),r}fu(t){return this.Eu({path:void 0,Ru:!0})}gu(t){return Ls(t,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}du(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vu(this.path.get(t))}Vu(t){if(0===t.length)throw this.gu("Document fields must not be empty");if(Ts(this.Tu)&&ws.test(t))throw this.gu('Document fields cannot begin and end with "__"')}}class Es{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||gi(t)}wu(t,e,n,r=!1){return new Cs({Tu:t,methodName:e,yu:n,path:U.emptyPath(),Ru:!1,pu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Is(t){const e=t._freezeSettings(),n=gi(t._databaseId);return new Es(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ss(t,e,n,r,i,o={}){const s=t.wu(o.merge||o.mergeFields?2:0,e,n,i);Ns("Data must be an object, but it was:",s,r);const a=As(r,s);let c,u;if(o.merge)c=new ft(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=Rs(e,r,n);if(!s.contains(i))throw new b(w.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ms(t,i)||t.push(i)}c=new ft(t),u=s.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=s.fieldTransforms;return new bs(new Ut(a),c,u)}function ks(t,e,n,r=!1){return Os(n,t.wu(r?4:3,e))}function Os(t,e){if(xs(t=Object(s.n)(t)))return Ns("Unsupported field value:",e,t),As(t,e);if(t instanceof ys)return function(t,e){if(!Ts(e.Tu))throw e.gu(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.gu(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&4!==e.Tu)throw e.gu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Os(i,e.fu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(s.n)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Je(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=L.fromDate(t);return{timestampValue:er(e.serializer,n)}}if(t instanceof L){const n=new L(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:er(e.serializer,n)}}if(t instanceof _s)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof vs)return{bytesValue:nr(e.serializer,t._byteString)};if(t instanceof as){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.gu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:or(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.gu("Unsupported field value: "+ns(t))}(t,e)}function As(t,e){const n={};return at(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):st(t,(t,r)=>{const i=Os(r,e.Au(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function xs(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof L||t instanceof _s||t instanceof vs||t instanceof as||t instanceof ys)}function Ns(t,e,n){if(!xs(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=ns(n);throw"an object"===r?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Rs(t,e,n){if((e=Object(s.n)(e))instanceof gs)return e._internalPath;if("string"==typeof e)return Ps(t,e);throw Ls("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ds=new RegExp("[~\\*/\\[\\]]");function Ps(t,e,n){if(e.search(Ds)>=0)throw Ls(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gs(...e.split("."))._internalPath}catch(r){throw Ls(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ls(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new b(w.INVALID_ARGUMENT,a+t+c)}function Ms(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new as(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new js(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Fs("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class js extends $s{data(){return super.data()}}function Fs(t,e){return"string"==typeof e?Ps(t,e):e instanceof gs?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new b(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vs{}class Bs extends Vs{}function qs(t,e,...n){let r=[];e instanceof Vs&&r.push(e),r=r.concat(n),function(t){const e=t.filter(t=>t instanceof Ks).length,n=t.filter(t=>t instanceof Hs).length;if(e>1||e>0&&n>0)throw new b(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const e of r)t=e._apply(t);return t}class Hs extends Bs{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Hs(t,e,n)}_apply(t){const e=this._parse(t);return Qs(t._query,e),new ss(t.firestore,t.converter,Ie(t._query,e))}_parse(t){const e=Is(t.firestore);return function(t,e,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new b(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){Ws(s,o);const e=[];for(const n of s)e.push(Gs(r,t,n));a={arrayValue:{values:e}}}else a=Gs(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Ws(s,o),a=ks(n,e,s,"in"===o||"not-in"===o);return Qt.create(i,o,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function zs(t,e,n){const r=e,i=Fs("where",t);return Hs._create(i,r,n)}class Ks extends Vs{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ks(t,e)}_parse(t){const e=this._queryConstraints.map(e=>e._parse(t)).filter(t=>t.getFilters().length>0);return 1===e.length?e[0]:Jt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const t of r)Qs(n,t),n=Ie(n,t)}(t._query,e),new ss(t.firestore,t.converter,Ie(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Gs(t,e,n){if("string"==typeof(n=Object(s.n)(n))){if(""===n)throw new b(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!be(e)&&-1!==n.indexOf("/"))throw new b(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(j.fromString(n));if(!V.isDocumentKey(r))throw new b(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rt(t,new V(r))}if(n instanceof as)return Rt(t,n._key);throw new b(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ns(n)}.`)}function Ws(t,e){if(!Array.isArray(t)||0===t.length)throw new b(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qs(t,e){if(e.isInequality()){const n=we(t),r=e.field;if(null!==n&&!n.isEqual(r))throw new b(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=_e(t);null!==i&&Js(t,r,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new b(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new b(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Js(t,e,n){if(!n.isEqual(e))throw new b(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Ys{convertValue(t,e="none"){switch(St(t)){case 0:return null;case 1:return t.booleanValue;case 2:return yt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_t(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw g()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return st(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new _s(yt(t.latitude),yt(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=bt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Tt(t));default:return null}}convertTimestamp(t){const e=gt(t);return new L(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=j.fromString(t);y(Er(n));const r=new Et(n.get(1),n.get(3)),i=new V(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ta extends $s{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Fs("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ea extends ta{data(t={}){return super.data(t)}}class na{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Zs(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ea(this._firestore,this._userDataWriter,n.key,n,new Zs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new ea(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Zs(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new ea(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Zs(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:ra(e.type),doc:r,oldIndex:i,newIndex:o}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ra(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return g()}}class ia extends Ys{constructor(t){super(),this.firestore=t}convertBytes(t){return new vs(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new as(this.firestore,null,e)}}function oa(t){t=rs(t,ss);const e=rs(t.firestore,ds),n=ps(e),r=new ia(e);return Us(t._query),Jo(n,t._query).then(n=>new na(e,r,t,n))}function sa(t){return ca(rs(t.firestore,ds),[new En(t._key,hn.none())])}function aa(t,e){const n=rs(t.firestore,ds),r=ls(t),i=Xs(t.converter,e);return ca(n,[Ss(Is(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,hn.exists(!1))]).then(()=>r)}function ca(t,e){return function(t,e){const n=new T;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){const r=jo(t);try{const t=await function(t,e){const n=_(t),r=L.now(),i=e.reduce((t,e)=>t.add(e.key),ze());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=Me(),c=ze();return n._s.getEntries(t,i).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(i=>{o=i;const s=[];for(const t of e){const e=gn(t,o.get(t.key).overlayedDocument);null!=e&&s.push(new wn(t.key,e,Vt(e.value.mapValue),hn.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,s,e)}).next(e=>{s=e;const r=e.applyToLocalDocumentSet(o,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:s.batchId,changes:Fe(o)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Da[t.currentUser.toKey()];r||(r=new ct(D)),r=r.insert(e,n),t.Da[t.currentUser.toKey()]=r}(r,t.batchId,n),await Po(r,t.changes),await Ui(r.remoteStore)}catch(t){const e=to(t,"Failed to persist write");n.reject(e)}}(await Wo(t),e,n)),n.promise}(ps(t),e)}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){l=t}(r.a),Object(r.c)(new i.a("firestore",(t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new ds(new S(t.getProvider("auth-internal")),new x(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new b(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Et(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Object(r.h)(c,"4.2.0",t),Object(r.h)(c,"4.2.0","esm2017")}()}).call(this,n(6))},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(10),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(5))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,i,o,s,a,c=1,u={},l=!1,h=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick((function(){p(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){p(t.data)},r=function(t){o.port2.postMessage(t)}):h&&"onreadystatechange"in h.createElement("script")?(i=h.documentElement,r=function(t){var e=h.createElement("script");e.onreadystatechange=function(){p(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):r=function(t){setTimeout(p,0,t)}:(s="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(s)&&p(+e.data.slice(s.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),r=function(e){t.postMessage(s+e,"*")}),d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var i={callback:t,args:e};return u[c]=i,r(c),c++},d.clearImmediate=f}function f(t){delete u[t]}function p(t){if(l)setTimeout(p,0,t);else{var e=u[t];if(e){l=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{f(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(5),n(6))},function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return Gn}));
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var i=Object.freeze({}),o=Array.isArray;function s(t){return null==t}function a(t){return null!=t}function c(t){return!0===t}function u(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function l(t){return"function"==typeof t}function h(t){return null!==t&&"object"==typeof t}var d=Object.prototype.toString;function f(t){return"[object Object]"===d.call(t)}function p(t){return"[object RegExp]"===d.call(t)}function m(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function v(t){return a(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function g(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===d?JSON.stringify(t,null,2):String(t)}function y(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var w=_("key,ref,slot,slot-scope,is");function b(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var T=Object.prototype.hasOwnProperty;function C(t,e){return T.call(t,e)}function E(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var I=/-(\w)/g,S=E((function(t){return t.replace(I,(function(t,e){return e?e.toUpperCase():""}))})),k=E((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),O=/\B([A-Z])/g,A=E((function(t){return t.replace(O,"-$1").toLowerCase()}));var x=Function.prototype.bind?function(t,e){return t.bind(e)}:function(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n};function N(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function R(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&R(e,t[n]);return e}function P(t,e,n){}var L=function(t,e,n){return!1},M=function(t){return t};function $(t,e){if(t===e)return!0;var n=h(t),r=h(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return $(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return $(t[n],e[n])}))}catch(t){return!1}}function j(t,e){for(var n=0;n<t.length;n++)if($(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function U(t,e){return t===e?0===t&&1/t!=1/e:t==t||e==e}var V=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:P,parsePlatformTagName:M,mustUseProp:L,async:!0,_lifecycleHooks:B},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function K(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^".concat(H.source,".$_\\d]"));var W="__proto__"in{},Q="undefined"!=typeof window,J=Q&&window.navigator.userAgent.toLowerCase(),Y=J&&/msie|trident/.test(J),X=J&&J.indexOf("msie 9.0")>0,Z=J&&J.indexOf("edge/")>0;J&&J.indexOf("android");var tt=J&&/iphone|ipad|ipod|ios/.test(J);J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J);var et,nt=J&&J.match(/firefox\/(\d+)/),rt={}.watch,it=!1;if(Q)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){it=!0}}),window.addEventListener("test-passive",null,ot)}catch(t){}var st=function(){return void 0===et&&(et=!Q&&void 0!==t&&(t.process&&"server"===t.process.env.VUE_ENV)),et},at=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ct(t){return"function"==typeof t&&/native code/.test(t.toString())}var ut,lt="undefined"!=typeof Symbol&&ct(Symbol)&&"undefined"!=typeof Reflect&&ct(Reflect.ownKeys);ut="undefined"!=typeof Set&&ct(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ht=null;function dt(t){void 0===t&&(t=null),t||ht&&ht._scope.off(),ht=t,t&&t._scope.on()}var ft=function(){function t(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),pt=function(t){void 0===t&&(t="");var e=new ft;return e.text=t,e.isComment=!0,e};function mt(t){return new ft(void 0,void 0,void 0,String(t))}function vt(t){var e=new ft(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var gt=0,yt=[],_t=function(){function t(){this._pending=!1,this.id=gt++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,yt.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,r=e.length;n<r;n++){0,e[n].update()}},t}();_t.target=null;var wt=[];function bt(t){wt.push(t),_t.target=t}function Tt(){wt.pop(),_t.target=wt[wt.length-1]}var Ct=Array.prototype,Et=Object.create(Ct);["push","pop","shift","unshift","splice","sort","reverse"].forEach((function(t){var e=Ct[t];K(Et,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&s.observeArray(i),s.dep.notify(),o}))}));var It=Object.getOwnPropertyNames(Et),St={},kt=!0;function Ot(t){kt=t}var At={notify:P,depend:P,addSub:P,removeSub:P},xt=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?At:new _t,this.vmCount=0,K(t,"__ob__",this),o(t)){if(!n)if(W)t.__proto__=Et;else for(var r=0,i=It.length;r<i;r++){K(t,a=It[r],Et[a])}e||this.observeArray(t)}else{var s=Object.keys(t);for(r=0;r<s.length;r++){var a;Rt(t,a=s[r],St,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Nt(t[e],!1,this.mock)},t}();function Nt(t,e,n){return t&&C(t,"__ob__")&&t.__ob__ instanceof xt?t.__ob__:!kt||!n&&st()||!o(t)&&!f(t)||!Object.isExtensible(t)||t.__v_skip||Ft(t)||t instanceof ft?void 0:new xt(t,e,n)}function Rt(t,e,n,r,i,s){var a=new _t,c=Object.getOwnPropertyDescriptor(t,e);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==St&&2!==arguments.length||(n=t[e]);var h=!i&&Nt(n,!1,s);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=u?u.call(t):n;return _t.target&&(a.depend(),h&&(h.dep.depend(),o(e)&&Lt(e))),Ft(e)&&!i?e.value:e},set:function(e){var r=u?u.call(t):n;if(U(r,e)){if(l)l.call(t,e);else{if(u)return;if(!i&&Ft(r)&&!Ft(e))return void(r.value=e);n=e}h=!i&&Nt(e,!1,s),a.notify()}}}),a}}function Dt(t,e,n){if(!jt(t)){var r=t.__ob__;return o(t)&&m(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),r&&!r.shallow&&r.mock&&Nt(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||r&&r.vmCount?n:r?(Rt(r.value,e,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(t[e]=n,n)}}function Pt(t,e){if(o(t)&&m(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||jt(t)||C(t,e)&&(delete t[e],n&&n.dep.notify())}}function Lt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)(e=t[n])&&e.__ob__&&e.__ob__.dep.depend(),o(e)&&Lt(e)}function Mt(t){return $t(t,!0),K(t,"__v_isShallow",!0),t}function $t(t,e){if(!jt(t)){Nt(t,e,st());0}}function jt(t){return!(!t||!t.__v_isReadonly)}function Ft(t){return!(!t||!0!==t.__v_isRef)}function Ut(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Ft(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Ft(r)&&!Ft(t)?r.value=t:e[n]=t}})}"".concat("watcher"," callback"),"".concat("watcher"," getter"),"".concat("watcher"," cleanup");var Vt;var Bt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Vt,!t&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Vt;try{return Vt=this,t()}finally{Vt=e}}else 0},t.prototype.on=function(){Vt=this},t.prototype.off=function(){Vt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function qt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var Ht=E((function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}}));function zt(t,e){function n(){var t=n.fns;if(!o(t))return ke(t,null,arguments,e,"v-on handler");for(var r=t.slice(),i=0;i<r.length;i++)ke(r[i],null,arguments,e,"v-on handler")}return n.fns=t,n}function Kt(t,e,n,r,i,o){var a,u,l,h;for(a in t)u=t[a],l=e[a],h=Ht(a),s(u)||(s(l)?(s(u.fns)&&(u=t[a]=zt(u,o)),c(h.once)&&(u=t[a]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[a]=l));for(a in e)s(t[a])&&r((h=Ht(a)).name,e[a],h.capture)}function Gt(t,e,n){var r;t instanceof ft&&(t=t.data.hook||(t.data.hook={}));var i=t[e];function o(){n.apply(this,arguments),b(r.fns,o)}s(i)?r=zt([o]):a(i.fns)&&c(i.merged)?(r=i).fns.push(o):r=zt([i,o]),r.merged=!0,t[e]=r}function Wt(t,e,n,r,i){if(a(e)){if(C(e,n))return t[n]=e[n],i||delete e[n],!0;if(C(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function Qt(t){return u(t)?[mt(t)]:o(t)?function t(e,n){var r,i,l,h,d=[];for(r=0;r<e.length;r++)s(i=e[r])||"boolean"==typeof i||(l=d.length-1,h=d[l],o(i)?i.length>0&&(Jt((i=t(i,"".concat(n||"","_").concat(r)))[0])&&Jt(h)&&(d[l]=mt(h.text+i[0].text),i.shift()),d.push.apply(d,i)):u(i)?Jt(h)?d[l]=mt(h.text+i):""!==i&&d.push(mt(i)):Jt(i)&&Jt(h)?d[l]=mt(h.text+i.text):(c(e._isVList)&&a(i.tag)&&s(i.key)&&a(n)&&(i.key="__vlist".concat(n,"_").concat(r,"__")),d.push(i)));return d}(t):void 0}function Jt(t){return a(t)&&a(t.text)&&!1===t.isComment}function Yt(t,e){var n,r,i,s,c=null;if(o(t)||"string"==typeof t)for(c=new Array(t.length),n=0,r=t.length;n<r;n++)c[n]=e(t[n],n);else if("number"==typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(h(t))if(lt&&t[Symbol.iterator]){c=[];for(var u=t[Symbol.iterator](),l=u.next();!l.done;)c.push(e(l.value,c.length)),l=u.next()}else for(i=Object.keys(t),c=new Array(i.length),n=0,r=i.length;n<r;n++)s=i[n],c[n]=e(t[s],s,n);return a(c)||(c=[]),c._isVList=!0,c}function Xt(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=R(R({},r),n)),i=o(n)||(l(e)?e():e)):i=this.$slots[t]||(l(e)?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Zt(t){return Nn(this.$options,"filters",t,!0)||M}function te(t,e){return o(t)?-1===t.indexOf(e):t!==e}function ee(t,e,n,r,i){var o=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?te(i,r):o?te(o,t):r?A(r)!==e:void 0===t}function ne(t,e,n,r,i){if(n)if(h(n)){o(n)&&(n=D(n));var s=void 0,a=function(o){if("class"===o||"style"===o||w(o))s=t;else{var a=t.attrs&&t.attrs.type;s=r||q.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=S(o),u=A(o);c in s||u in s||(s[o]=n[o],i&&((t.on||(t.on={}))["update:".concat(o)]=function(t){n[o]=t}))};for(var c in n)a(c)}else;return t}function re(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||oe(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),"__static__".concat(t),!1),r}function ie(t,e,n){return oe(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function oe(t,e,n){if(o(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&se(t[r],"".concat(e,"_").concat(r),n);else se(t,e,n)}function se(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ae(t,e){if(e)if(f(e)){var n=t.on=t.on?R({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function ce(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var s=t[i];o(s)?ce(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function ue(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"==typeof r&&r&&(t[e[n]]=e[n+1])}return t}function le(t,e){return"string"==typeof t?e+t:t}function he(t){t._o=ie,t._n=y,t._s=g,t._l=Yt,t._t=Xt,t._q=$,t._i=j,t._m=re,t._f=Zt,t._k=ee,t._b=ne,t._v=mt,t._e=pt,t._u=ce,t._g=ae,t._d=ue,t._p=le}function de(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(fe)&&delete n[u];return n}function fe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function pe(t){return t.isComment&&t.asyncFactory}function me(t,e,n,r){var o,s=Object.keys(n).length>0,a=e?!!e.$stable:!s,c=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&r&&r!==i&&c===r.$key&&!s&&!r.$hasNormal)return r;for(var u in o={},e)e[u]&&"$"!==u[0]&&(o[u]=ve(t,n,u,e[u]))}else o={};for(var l in n)l in o||(o[l]=ge(n,l));return e&&Object.isExtensible(e)&&(e._normalized=o),K(o,"$stable",a),K(o,"$key",c),K(o,"$hasNormal",s),o}function ve(t,e,n,r){var i=function(){var e=ht;dt(t);var n=arguments.length?r.apply(null,arguments):r({}),i=(n=n&&"object"==typeof n&&!o(n)?[n]:Qt(n))&&n[0];return dt(e),n&&(!i||1===n.length&&i.isComment&&!pe(i))?void 0:n};return r.proxy&&Object.defineProperty(e,n,{get:i,enumerable:!0,configurable:!0}),i}function ge(t,e){return function(){return t[e]}}function ye(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};K(e,"_v_attr_proxy",!0),_e(e,t.$attrs,i,t,"$attrs")}return t._attrsProxy},get listeners(){t._listenersProxy||_e(t._listenersProxy={},t.$listeners,i,t,"$listeners");return t._listenersProxy},get slots(){return function(t){t._slotsProxy||be(t._slotsProxy={},t.$scopedSlots);return t._slotsProxy}(t)},emit:x(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Ut(t,e,n)}))}}}function _e(t,e,n,r,i){var o=!1;for(var s in e)s in t?e[s]!==n[s]&&(o=!0):(o=!0,we(t,s,r,i));for(var s in t)s in e||(o=!0,delete t[s]);return o}function we(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function be(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}var Te=null;function Ce(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function Ee(t){if(o(t))for(var e=0;e<t.length;e++){var n=t[e];if(a(n)&&(a(n.componentOptions)||pe(n)))return n}}function Ie(t,e,n,r,i,d){return(o(n)||u(n))&&(i=r,r=n,n=void 0),c(d)&&(i=2),function(t,e,n,r,i){if(a(n)&&a(n.__ob__))return pt();a(n)&&a(n.is)&&(e=n.is);if(!e)return pt();0;o(r)&&l(r[0])&&((n=n||{}).scopedSlots={default:r[0]},r.length=0);2===i?r=Qt(r):1===i&&(r=function(t){for(var e=0;e<t.length;e++)if(o(t[e]))return Array.prototype.concat.apply([],t);return t}(r));var u,d;if("string"==typeof e){var f=void 0;d=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),u=q.isReservedTag(e)?new ft(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!a(f=Nn(t.$options,"components",e))?new ft(e,n,r,void 0,void 0,t):bn(f,n,t,r,e)}else u=bn(e,n,t,r);return o(u)?u:a(u)?(a(d)&&function t(e,n,r){e.ns=n,"foreignObject"===e.tag&&(n=void 0,r=!0);if(a(e.children))for(var i=0,o=e.children.length;i<o;i++){var u=e.children[i];a(u.tag)&&(s(u.ns)||c(r)&&"svg"!==u.tag)&&t(u,n,r)}}(u,d),a(n)&&function(t){h(t.style)&&Be(t.style);h(t.class)&&Be(t.class)}(n),u):pt()}(t,e,n,r,i)}function Se(t,e,n){bt();try{if(e)for(var r=e;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,t,e,n))return}catch(t){Oe(t,r,"errorCaptured hook")}}Oe(t,e,n)}finally{Tt()}}function ke(t,e,n,r,i){var o;try{(o=n?t.apply(e,n):t.call(e))&&!o._isVue&&v(o)&&!o._handled&&(o.catch((function(t){return Se(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(t){Se(t,r,i)}return o}function Oe(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(e){e!==t&&Ae(e,null,"config.errorHandler")}Ae(t,e,n)}function Ae(t,e,n){if(!Q||"undefined"==typeof console)throw t;console.error(t)}var xe,Ne=!1,Re=[],De=!1;function Pe(){De=!1;var t=Re.slice(0);Re.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!=typeof Promise&&ct(Promise)){var Le=Promise.resolve();xe=function(){Le.then(Pe),tt&&setTimeout(P)},Ne=!0}else if(Y||"undefined"==typeof MutationObserver||!ct(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())xe=void 0!==r&&ct(r)?function(){r(Pe)}:function(){setTimeout(Pe,0)};else{var Me=1,$e=new MutationObserver(Pe),je=document.createTextNode(String(Me));$e.observe(je,{characterData:!0}),xe=function(){Me=(Me+1)%2,je.data=String(Me)},Ne=!0}function Fe(t,e){var n;if(Re.push((function(){if(t)try{t.call(e)}catch(t){Se(t,e,"nextTick")}else n&&n(e)})),De||(De=!0,xe()),!t&&"undefined"!=typeof Promise)return new Promise((function(t){n=t}))}function Ue(t){return function(e,n){if(void 0===n&&(n=ht),n)return function(t,e,n){var r=t.$options;r[e]=kn(r[e],n)}(n,t,e)}}Ue("beforeMount"),Ue("mounted"),Ue("beforeUpdate"),Ue("updated"),Ue("beforeDestroy"),Ue("destroyed"),Ue("activated"),Ue("deactivated"),Ue("serverPrefetch"),Ue("renderTracked"),Ue("renderTriggered"),Ue("errorCaptured");var Ve=new ut;function Be(t){return function t(e,n){var r,i,s=o(e);if(!s&&!h(e)||e.__v_skip||Object.isFrozen(e)||e instanceof ft)return;if(e.__ob__){var a=e.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(s)for(r=e.length;r--;)t(e[r],n);else if(Ft(e))t(e.value,n);else for(i=Object.keys(e),r=i.length;r--;)t(e[i[r]],n)}(t,Ve),Ve.clear(),t}var qe,He=0,ze=function(){function t(t,e,n,r,i){var o,s;o=this,void 0===(s=Vt&&!Vt._vm?Vt:t?t._scope:void 0)&&(s=Vt),s&&s.active&&s.effects.push(o),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++He,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ut,this.newDepIds=new ut,this.expression="",l(e)?this.getter=e:(this.getter=function(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;bt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;Se(t,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&Be(t),Tt(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():fn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');ke(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&b(this.vm._scope.effects,this),this.active){for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function Ke(t,e){qe.$on(t,e)}function Ge(t,e){qe.$off(t,e)}function We(t,e){var n=qe;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Qe(t,e,n){qe=t,Kt(e,n||{},Ke,Ge,We,t),qe=void 0}var Je=null;function Ye(t){var e=Je;return Je=t,function(){Je=e}}function Xe(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function Ze(t,e){if(e){if(t._directInactive=!1,Xe(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Ze(t.$children[n]);tn(t,"activated")}}function tn(t,e,n,r){void 0===r&&(r=!0),bt();var i=ht;r&&dt(t);var o=t.$options[e],s="".concat(e," hook");if(o)for(var a=0,c=o.length;a<c;a++)ke(o[a],t,n||null,t,s);t._hasHookEvent&&t.$emit("hook:"+e),r&&dt(i),Tt()}var en=[],nn=[],rn={},on=!1,sn=!1,an=0;var cn=0,un=Date.now;if(Q&&!Y){var ln=window.performance;ln&&"function"==typeof ln.now&&un()>document.createEvent("Event").timeStamp&&(un=function(){return ln.now()})}var hn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function dn(){var t,e;for(cn=un(),sn=!0,en.sort(hn),an=0;an<en.length;an++)(t=en[an]).before&&t.before(),e=t.id,rn[e]=null,t.run();var n=nn.slice(),r=en.slice();an=en.length=nn.length=0,rn={},on=sn=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Ze(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&tn(r,"updated")}}(r),function(){for(var t=0;t<yt.length;t++){var e=yt[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}yt.length=0}(),at&&q.devtools&&at.emit("flush")}function fn(t){var e=t.id;if(null==rn[e]&&(t!==_t.target||!t.noRecurse)){if(rn[e]=!0,sn){for(var n=en.length-1;n>an&&en[n].id>t.id;)n--;en.splice(n+1,0,t)}else en.push(t);on||(on=!0,Fe(dn))}}function pn(t,e){if(t){for(var n=Object.create(null),r=lt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from;if(s in e._provided)n[o]=e._provided[s];else if("default"in t[o]){var a=t[o].default;n[o]=l(a)?a.call(e):a}else 0}}return n}}function mn(t,e,n,r,s){var a,u=this,l=s.options;C(r,"_uid")?(a=Object.create(r))._original=r:(a=r,r=r._original);var h=c(l._compiled),d=!h;this.data=t,this.props=e,this.children=n,this.parent=r,this.listeners=t.on||i,this.injections=pn(l.inject,r),this.slots=function(){return u.$slots||me(r,t.scopedSlots,u.$slots=de(n,r)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return me(r,t.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=me(r,t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,i){var s=Ie(a,t,e,n,i,d);return s&&!o(s)&&(s.fnScopeId=l._scopeId,s.fnContext=r),s}:this._c=function(t,e,n,r){return Ie(a,t,e,n,r,d)}}function vn(t,e,n,r,i){var o=vt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function gn(t,e){for(var n in e)t[S(n)]=e[n]}function yn(t){return t.name||t.__name||t._componentTag}he(mn.prototype);var _n={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;_n.prepatch(n,n)}else{(t.componentInstance=function(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;a(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns);return new t.componentOptions.Ctor(n)}(t,Je)).$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions;!function(t,e,n,r,o){var s=r.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==i&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c),l=t.$vnode;t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o;var h=r.data.attrs||i;t._attrsProxy&&_e(t._attrsProxy,h,l.data&&l.data.attrs||i,t,"$attrs")&&(u=!0),t.$attrs=h,n=n||i;var d=t.$options._parentListeners;if(t._listenersProxy&&_e(t._listenersProxy,n,d||i,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,Qe(t,n,d),e&&t.$options.props){Ot(!1);for(var f=t._props,p=t.$options._propKeys||[],m=0;m<p.length;m++){var v=p[m],g=t.$options.props;f[v]=Rn(v,g,e,t)}Ot(!0),t.$options.propsData=e}u&&(t.$slots=de(o,r.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,tn(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,nn.push(e)):Ze(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(!(n&&(e._directInactive=!0,Xe(e))||e._inactive)){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);tn(e,"deactivated")}}(e,!0):e.$destroy())}},wn=Object.keys(_n);function bn(t,e,n,r,u){if(!s(t)){var l=n.$options._base;if(h(t)&&(t=l.extend(t)),"function"==typeof t){var d;if(s(t.cid)&&void 0===(t=function(t,e){if(c(t.error)&&a(t.errorComp))return t.errorComp;if(a(t.resolved))return t.resolved;var n=Te;if(n&&a(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),c(t.loading)&&a(t.loadingComp))return t.loadingComp;if(n&&!a(t.owners)){var r=t.owners=[n],i=!0,o=null,u=null;n.$on("hook:destroyed",(function(){return b(r,n)}));var l=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==o&&(clearTimeout(o),o=null),null!==u&&(clearTimeout(u),u=null))},d=F((function(n){t.resolved=Ce(n,e),i?r.length=0:l(!0)})),f=F((function(e){a(t.errorComp)&&(t.error=!0,l(!0))})),p=t(d,f);return h(p)&&(v(p)?s(t.resolved)&&p.then(d,f):v(p.component)&&(p.component.then(d,f),a(p.error)&&(t.errorComp=Ce(p.error,e)),a(p.loading)&&(t.loadingComp=Ce(p.loading,e),0===p.delay?t.loading=!0:o=setTimeout((function(){o=null,s(t.resolved)&&s(t.error)&&(t.loading=!0,l(!1))}),p.delay||200)),a(p.timeout)&&(u=setTimeout((function(){u=null,s(t.resolved)&&f(null)}),p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}(d=t,l)))return function(t,e,n,r,i){var o=pt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}(d,e,n,r,u);e=e||{},Kn(t),a(e.model)&&function(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),s=i[r],c=e.model.callback;a(s)?(o(s)?-1===s.indexOf(c):s!==c)&&(i[r]=[c].concat(s)):i[r]=c}(t.options,e);var f=function(t,e,n){var r=e.options.props;if(!s(r)){var i={},o=t.attrs,c=t.props;if(a(o)||a(c))for(var u in r){var l=A(u);Wt(i,c,u,l,!0)||Wt(i,o,u,l,!1)}return i}}(e,t);if(c(t.options.functional))return function(t,e,n,r,s){var c=t.options,u={},l=c.props;if(a(l))for(var h in l)u[h]=Rn(h,l,e||i);else a(n.attrs)&&gn(u,n.attrs),a(n.props)&&gn(u,n.props);var d=new mn(n,u,s,r,t),f=c.render.call(null,d._c,d);if(f instanceof ft)return vn(f,n,d.parent,c,d);if(o(f)){for(var p=Qt(f)||[],m=new Array(p.length),v=0;v<p.length;v++)m[v]=vn(p[v],n,d.parent,c,d);return m}}(t,f,e,n,r);var p=e.on;if(e.on=e.nativeOn,c(t.options.abstract)){var m=e.slot;e={},m&&(e.slot=m)}!function(t){for(var e=t.hook||(t.hook={}),n=0;n<wn.length;n++){var r=wn[n],i=e[r],o=_n[r];i===o||i&&i._merged||(e[r]=i?Tn(o,i):o)}}(e);var g=yn(t.options)||u;return new ft("vue-component-".concat(t.cid).concat(g?"-".concat(g):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:p,tag:u,children:r},d)}}}function Tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}var Cn=P,En=q.optionMergeStrategies;function In(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,i,o,s=lt?Reflect.ownKeys(e):Object.keys(e),a=0;a<s.length;a++)"__ob__"!==(r=s[a])&&(i=t[r],o=e[r],n&&C(t,r)?i!==o&&f(i)&&f(o)&&In(i,o):Dt(t,r,o));return t}function Sn(t,e,n){return n?function(){var r=l(e)?e.call(n,n):e,i=l(t)?t.call(n,n):t;return r?In(r,i):i}:e?t?function(){return In(l(e)?e.call(this,this):e,l(t)?t.call(this,this):t)}:e:t}function kn(t,e){var n=e?t?t.concat(e):o(e)?e:[e]:t;return n?function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(n):n}function On(t,e,n,r){var i=Object.create(t||null);return e?R(i,e):i}En.data=function(t,e,n){return n?Sn(t,e,n):e&&"function"!=typeof e?t:Sn(t,e)},B.forEach((function(t){En[t]=kn})),V.forEach((function(t){En[t+"s"]=On})),En.watch=function(t,e,n,r){if(t===rt&&(t=void 0),e===rt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var s in R(i,t),e){var a=i[s],c=e[s];a&&!o(a)&&(a=[a]),i[s]=a?a.concat(c):o(c)?c:[c]}return i},En.props=En.methods=En.inject=En.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return R(i,t),e&&R(i,e),i},En.provide=function(t,e){return t?function(){var n=Object.create(null);return In(n,l(t)?t.call(this):t),e&&In(n,l(e)?e.call(this):e,!1),n}:e};var An=function(t,e){return void 0===e?t:e};function xn(t,e,n){if(l(e)&&(e=e.options),function(t,e){var n=t.props;if(n){var r,i,s={};if(o(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(s[S(i)]={type:null});else if(f(n))for(var a in n)i=n[a],s[S(a)]=f(i)?i:{type:i};else 0;t.props=s}}(e),function(t,e){var n=t.inject;if(n){var r=t.inject={};if(o(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(f(n))for(var s in n){var a=n[s];r[s]=f(a)?R({from:s},a):{from:a}}else 0}}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];l(r)&&(e[n]={bind:r,update:r})}}(e),!e._base&&(e.extends&&(t=xn(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=xn(t,e.mixins[r],n);var s,a={};for(s in t)c(s);for(s in e)C(t,s)||c(s);function c(r){var i=En[r]||An;a[r]=i(t[r],e[r],n,r)}return a}function Nn(t,e,n,r){if("string"==typeof n){var i=t[e];if(C(i,n))return i[n];var o=S(n);if(C(i,o))return i[o];var s=k(o);return C(i,s)?i[s]:i[n]||i[o]||i[s]}}function Rn(t,e,n,r){var i=e[t],o=!C(n,t),s=n[t],a=Mn(Boolean,i.type);if(a>-1)if(o&&!C(i,"default"))s=!1;else if(""===s||s===A(t)){var c=Mn(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=function(t,e,n){if(!C(e,"default"))return;var r=e.default;0;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return l(r)&&"Function"!==Pn(e.type)?r.call(t):r}(r,i,t);var u=kt;Ot(!0),Nt(s),Ot(u)}return s}var Dn=/^\s*function (\w+)/;function Pn(t){var e=t&&t.toString().match(Dn);return e?e[1]:""}function Ln(t,e){return Pn(t)===Pn(e)}function Mn(t,e){if(!o(e))return Ln(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Ln(e[n],t))return n;return-1}var $n={enumerable:!0,configurable:!0,get:P,set:P};function jn(t,e,n){$n.get=function(){return this[e][n]},$n.set=function(t){this[e][n]=t},Object.defineProperty(t,n,$n)}function Fn(t){var e=t.$options;if(e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props=Mt({}),i=t.$options._propKeys=[];t.$parent&&Ot(!1);var o=function(o){i.push(o);var s=Rn(o,e,n,t);Rt(r,o,s),o in t||jn(t,"_props",o)};for(var s in e)o(s);Ot(!0)}(t,e.props),function(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=ye(t);dt(t),bt();var i=ke(n,null,[t._props||Mt({}),r],t,"setup");if(Tt(),dt(),l(i))e.render=i;else if(h(i))if(t._setupState=i,i.__sfc){var o=t._setupProxy={};for(var s in i)"__sfc"!==s&&Ut(o,i,s)}else for(var s in i)z(s)||Ut(t,i,s);else 0}}(t),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]="function"!=typeof e[n]?P:x(e[n],t)}(t,e.methods),e.data)!function(t){var e=t.$options.data;f(e=t._data=l(e)?function(t,e){bt();try{return t.call(e,e)}catch(t){return Se(t,e,"data()"),{}}finally{Tt()}}(e,t):e||{})||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);for(;i--;){var o=n[i];0,r&&C(r,o)||z(o)||jn(t,"_data",o)}var s=Nt(e);s&&s.vmCount++}(t);else{var n=Nt(t._data={});n&&n.vmCount++}e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),r=st();for(var i in e){var o=e[i],s=l(o)?o:o.get;0,r||(n[i]=new ze(t,s||P,P,Un)),i in t||Vn(t,i,o)}}(t,e.computed),e.watch&&e.watch!==rt&&function(t,e){for(var n in e){var r=e[n];if(o(r))for(var i=0;i<r.length;i++)Hn(t,n,r[i]);else Hn(t,n,r)}}(t,e.watch)}var Un={lazy:!0};function Vn(t,e,n){var r=!st();l(n)?($n.get=r?Bn(e):qn(n),$n.set=P):($n.get=n.get?r&&!1!==n.cache?Bn(e):qn(n.get):P,$n.set=n.set||P),Object.defineProperty(t,e,$n)}function Bn(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),_t.target&&e.depend(),e.value}}function qn(t){return function(){return t.call(this,this)}}function Hn(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}var zn=0;function Kn(t){var e=t.options;if(t.super){var n=Kn(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}(t);r&&R(t.extendOptions,r),(e=t.options=xn(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function Gn(t){this._init(t)}function Wn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=yn(t)||yn(n.options);var s=function(t){this._init(t)};return(s.prototype=Object.create(n.prototype)).constructor=s,s.cid=e++,s.options=xn(n.options,t),s.super=n,s.options.props&&function(t){var e=t.options.props;for(var n in e)jn(t.prototype,"_props",n)}(s),s.options.computed&&function(t){var e=t.options.computed;for(var n in e)Vn(t.prototype,n,e[n])}(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,V.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=R({},s.options),i[r]=s,s}}function Qn(t){return t&&(yn(t.Ctor.options)||t.tag)}function Jn(t,e){return o(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function Yn(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&Xn(n,o,r,i)}}}function Xn(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,b(n,e)}!function(t){t.prototype._init=function(t){var e=this;e._uid=zn++,e._isVue=!0,e.__v_skip=!0,e._scope=new Bt(!0),e._scope._vm=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(e,t):e.$options=xn(Kn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(e),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Qe(t,e)}(e),function(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=de(e._renderChildren,r),t.$scopedSlots=n?me(t.$parent,n.data.scopedSlots,t.$slots):i,t._c=function(e,n,r,i){return Ie(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Ie(t,e,n,r,i,!0)};var o=n&&n.data;Rt(t,"$attrs",o&&o.attrs||i,null,!0),Rt(t,"$listeners",e._parentListeners||i,null,!0)}(e),tn(e,"beforeCreate",void 0,!1),function(t){var e=pn(t.$options.inject,t);e&&(Ot(!1),Object.keys(e).forEach((function(n){Rt(t,n,e[n])})),Ot(!0))}(e),Fn(e),function(t){var e=t.$options.provide;if(e){var n=l(e)?e.call(t):e;if(!h(n))return;for(var r=qt(t),i=lt?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}(e),tn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}(Gn),function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){if(f(e))return Hn(this,t,e,n);(n=n||{}).user=!0;var r=new ze(this,t,e,n);if(n.immediate){var i='callback for immediate watcher "'.concat(r.expression,'"');bt(),ke(e,this,[r.value],this,i),Tt()}return function(){r.teardown()}}}(Gn),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(o(t))for(var i=0,s=t.length;i<s;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(o(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var s,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;for(var c=a.length;c--;)if((s=a[c])===e||s.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?N(n):n;for(var r=N(arguments,1),i='event handler for "'.concat(t,'"'),o=0,s=n.length;o<s;o++)ke(n[o],e,r,e,i)}return e}}(Gn),function(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=Ye(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);for(var s=n;s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode;)s.$parent.$el=s.$el,s=s.$parent},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){tn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||b(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),tn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}(Gn),function(t){he(t.prototype),t.prototype.$nextTick=function(t){return Fe(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&e._isMounted&&(e.$scopedSlots=me(e.$parent,i.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&be(e._slotsProxy,e.$scopedSlots)),e.$vnode=i;try{dt(e),Te=e,t=r.call(e._renderProxy,e.$createElement)}catch(n){Se(n,e,"render"),t=e._vnode}finally{Te=null,dt()}return o(t)&&1===t.length&&(t=t[0]),t instanceof ft||(t=pt()),t.parent=i,t}}(Gn);var Zn=[String,RegExp,Array],tr={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Zn,exclude:Zn,max:[String,Number]},methods:{cacheVNode:function(){var t=this.cache,e=this.keys,n=this.vnodeToCache,r=this.keyToCache;if(n){var i=n.tag,o=n.componentInstance,s=n.componentOptions;t[r]={name:Qn(s),tag:i,componentInstance:o},e.push(r),this.max&&e.length>parseInt(this.max)&&Xn(t,e[0],e,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Xn(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Yn(t,(function(t){return Jn(e,t)}))})),this.$watch("exclude",(function(e){Yn(t,(function(t){return!Jn(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Ee(t),n=e&&e.componentOptions;if(n){var r=Qn(n),i=this.include,o=this.exclude;if(i&&(!r||!Jn(i,r))||o&&r&&Jn(o,r))return e;var s=this.cache,a=this.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;s[c]?(e.componentInstance=s[c].componentInstance,b(a,c),a.push(c)):(this.vnodeToCache=e,this.keyToCache=c),e.data.keepAlive=!0}return e||t&&t[0]}}};!function(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:Cn,extend:R,mergeOptions:xn,defineReactive:Rt},t.set=Dt,t.delete=Pt,t.nextTick=Fe,t.observable=function(t){return Nt(t),t},t.options=Object.create(null),V.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,R(t.options.components,tr),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=N(arguments,1);return n.unshift(this),l(t.install)?t.install.apply(t,n):l(t)&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=xn(this.options,t),this}}(t),Wn(t),function(t){V.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&l(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}(t)}(Gn),Object.defineProperty(Gn.prototype,"$isServer",{get:st}),Object.defineProperty(Gn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Gn,"FunctionalRenderContext",{value:mn}),Gn.version="2.7.14";var er=_("style,class"),nr=_("input,textarea,option,select,progress"),rr=_("contenteditable,draggable,spellcheck"),ir=_("events,caret,typing,plaintext-only"),or=_("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),sr="http://www.w3.org/1999/xlink",ar=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},cr=function(t){return ar(t)?t.slice(6,t.length):""},ur=function(t){return null==t||!1===t};function lr(t){for(var e=t.data,n=t,r=t;a(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(e=hr(r.data,e));for(;a(n=n.parent);)n&&n.data&&(e=hr(e,n.data));return function(t,e){if(a(t)||a(e))return dr(t,fr(e));return""}(e.staticClass,e.class)}function hr(t,e){return{staticClass:dr(t.staticClass,e.staticClass),class:a(t.class)?[t.class,e.class]:e.class}}function dr(t,e){return t?e?t+" "+e:t:e||""}function fr(t){return Array.isArray(t)?function(t){for(var e,n="",r=0,i=t.length;r<i;r++)a(e=fr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}(t):h(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}var pr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},mr=_("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),vr=_("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),gr=function(t){return mr(t)||vr(t)};var yr=Object.create(null);var _r=_("text,number,password,search,email,tel,url");var wr=Object.freeze({__proto__:null,createElement:function(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(t,e){return document.createElementNS(pr[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setStyleScope:function(t,e){t.setAttribute(e,"")}}),br={create:function(t,e){Tr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Tr(t,!0),Tr(e))},destroy:function(t){Tr(t,!0)}};function Tr(t,e){var n=t.data.ref;if(a(n)){var r=t.context,i=t.componentInstance||t.elm,s=e?null:i,c=e?void 0:i;if(l(n))ke(n,r,[s],r,"template ref function");else{var u=t.data.refInFor,h="string"==typeof n||"number"==typeof n,d=Ft(n),f=r.$refs;if(h||d)if(u){var p=h?f[n]:n.value;e?o(p)&&b(p,i):o(p)?p.includes(i)||p.push(i):h?(f[n]=[i],Cr(r,n,f[n])):n.value=[i]}else if(h){if(e&&f[n]!==i)return;f[n]=c,Cr(r,n,s)}else if(d){if(e&&n.value!==i)return;n.value=s}else 0}}}function Cr(t,e,n){var r=t._setupState;r&&C(r,e)&&(Ft(r[e])?r[e].value=n:r[e]=n)}var Er=new ft("",{},[]),Ir=["create","activate","update","remove","destroy"];function Sr(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&a(t.data)===a(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,r=a(n=t.data)&&a(n=n.attrs)&&n.type,i=a(n=e.data)&&a(n=n.attrs)&&n.type;return r===i||_r(r)&&_r(i)}(t,e)||c(t.isAsyncPlaceholder)&&s(e.asyncFactory.error))}function kr(t,e,n){var r,i,o={};for(r=e;r<=n;++r)a(i=t[r].key)&&(o[i]=r);return o}var Or={create:Ar,update:Ar,destroy:function(t){Ar(t,Er)}};function Ar(t,e){(t.data.directives||e.data.directives)&&function(t,e){var n,r,i,o=t===Er,s=e===Er,a=Nr(t.data.directives,t.context),c=Nr(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Dr(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Dr(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Dr(u[n],"inserted",e,t)};o?Gt(e,"insert",h):h()}l.length&&Gt(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Dr(l[n],"componentUpdated",e,t)}));if(!o)for(n in a)c[n]||Dr(a[n],"unbind",t,t,s)}(t,e)}var xr=Object.create(null);function Nr(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if((r=t[n]).modifiers||(r.modifiers=xr),i[Rr(r)]=r,e._setupState&&e._setupState.__sfc){var o=r.def||Nn(e,"_setupState","v-"+r.name);r.def="function"==typeof o?{bind:o,update:o}:o}r.def=r.def||Nn(e.$options,"directives",r.name)}return i}function Rr(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function Dr(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(r){Se(r,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var Pr=[br,Or];function Lr(t,e){var n=e.componentOptions;if(!(a(n)&&!1===n.Ctor.options.inheritAttrs||s(t.data.attrs)&&s(e.data.attrs))){var r,i,o=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(r in(a(l.__ob__)||c(l._v_attr_proxy))&&(l=e.data.attrs=R({},l)),l)i=l[r],u[r]!==i&&Mr(o,r,i,e.data.pre);for(r in(Y||Z)&&l.value!==u.value&&Mr(o,"value",l.value),u)s(l[r])&&(ar(r)?o.removeAttributeNS(sr,cr(r)):rr(r)||o.removeAttribute(r))}}function Mr(t,e,n,r){r||t.tagName.indexOf("-")>-1?$r(t,e,n):or(e)?ur(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):rr(e)?t.setAttribute(e,function(t,e){return ur(e)||"false"===e?"false":"contenteditable"===t&&ir(e)?e:"true"}(e,n)):ar(e)?ur(n)?t.removeAttributeNS(sr,cr(e)):t.setAttributeNS(sr,e,n):$r(t,e,n)}function $r(t,e,n){if(ur(n))t.removeAttribute(e);else{if(Y&&!X&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var jr={create:Lr,update:Lr};function Fr(t,e){var n=e.elm,r=e.data,i=t.data;if(!(s(r.staticClass)&&s(r.class)&&(s(i)||s(i.staticClass)&&s(i.class)))){var o=lr(e),c=n._transitionClasses;a(c)&&(o=dr(o,fr(c))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}var Ur,Vr={create:Fr,update:Fr};function Br(t,e,n){var r=Ur;return function i(){var o=e.apply(null,arguments);null!==o&&zr(t,i,n,r)}}var qr=Ne&&!(nt&&Number(nt[1])<=53);function Hr(t,e,n,r){if(qr){var i=cn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Ur.addEventListener(t,e,it?{capture:n,passive:r}:n)}function zr(t,e,n,r){(r||Ur).removeEventListener(t,e._wrapper||e,n)}function Kr(t,e){if(!s(t.data.on)||!s(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Ur=e.elm||t.elm,function(t){if(a(t.__r)){var e=Y?"change":"input";t[e]=[].concat(t.__r,t[e]||[]),delete t.__r}a(t.__c)&&(t.change=[].concat(t.__c,t.change||[]),delete t.__c)}(n),Kt(n,r,Hr,zr,Br,e.context),Ur=void 0}}var Gr,Wr={create:Kr,update:Kr,destroy:function(t){return Kr(t,Er)}};function Qr(t,e){if(!s(t.data.domProps)||!s(e.data.domProps)){var n,r,i=e.elm,o=t.data.domProps||{},u=e.data.domProps||{};for(n in(a(u.__ob__)||c(u._v_attr_proxy))&&(u=e.data.domProps=R({},u)),o)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===o[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=s(r)?"":String(r);Jr(i,l)&&(i.value=l)}else if("innerHTML"===n&&vr(i.tagName)&&s(i.innerHTML)){(Gr=Gr||document.createElement("div")).innerHTML="<svg>".concat(r,"</svg>");for(var h=Gr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;h.firstChild;)i.appendChild(h.firstChild)}else if(r!==o[n])try{i[n]=r}catch(t){}}}}function Jr(t,e){return!t.composing&&("OPTION"===t.tagName||function(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}(t,e)||function(t,e){var n=t.value,r=t._vModifiers;if(a(r)){if(r.number)return y(n)!==y(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}(t,e))}var Yr={create:Qr,update:Qr},Xr=E((function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach((function(t){if(t){var r=t.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim())}})),e}));function Zr(t){var e=ti(t.style);return t.staticStyle?R(t.staticStyle,e):e}function ti(t){return Array.isArray(t)?D(t):"string"==typeof t?Xr(t):t}var ei,ni=/^--/,ri=/\s*!important$/,ii=function(t,e,n){if(ni.test(e))t.style.setProperty(e,n);else if(ri.test(n))t.style.setProperty(A(e),n.replace(ri,""),"important");else{var r=si(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},oi=["Webkit","Moz","ms"],si=E((function(t){if(ei=ei||document.createElement("div").style,"filter"!==(t=S(t))&&t in ei)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<oi.length;n++){var r=oi[n]+e;if(r in ei)return r}}));function ai(t,e){var n=e.data,r=t.data;if(!(s(n.staticStyle)&&s(n.style)&&s(r.staticStyle)&&s(r.style))){var i,o,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=ti(e.data.style)||{};e.data.normalizedStyle=a(d.__ob__)?R({},d):d;var f=function(t,e){var n,r={};if(e)for(var i=t;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=Zr(i.data))&&R(r,n);(n=Zr(t.data))&&R(r,n);for(var o=t;o=o.parent;)o.data&&(n=Zr(o.data))&&R(r,n);return r}(e,!0);for(o in h)s(f[o])&&ii(c,o,"");for(o in f)(i=f[o])!==h[o]&&ii(c,o,null==i?"":i)}}var ci={create:ai,update:ai},ui=/\s+/;function li(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(ui).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function hi(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(ui).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function di(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&R(e,fi(t.name||"v")),R(e,t),e}return"string"==typeof t?fi(t):void 0}}var fi=E((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),pi=Q&&!X,mi="transition",vi="transitionend",gi="animation",yi="animationend";pi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(mi="WebkitTransition",vi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(gi="WebkitAnimation",yi="webkitAnimationEnd"));var _i=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function wi(t){_i((function(){_i(t)}))}function bi(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),li(t,e))}function Ti(t,e){t._transitionClasses&&b(t._transitionClasses,e),hi(t,e)}function Ci(t,e,n){var r=Ii(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a="transition"===i?vi:yi,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),t.addEventListener(a,l)}var Ei=/\b(transform|all)(,|$)/;function Ii(t,e){var n,r=window.getComputedStyle(t),i=(r[mi+"Delay"]||"").split(", "),o=(r[mi+"Duration"]||"").split(", "),s=Si(i,o),a=(r[gi+"Delay"]||"").split(", "),c=(r[gi+"Duration"]||"").split(", "),u=Si(a,c),l=0,h=0;return"transition"===e?s>0&&(n="transition",l=s,h=o.length):"animation"===e?u>0&&(n="animation",l=u,h=c.length):h=(n=(l=Math.max(s,u))>0?s>u?"transition":"animation":null)?"transition"===n?o.length:c.length:0,{type:n,timeout:l,propCount:h,hasTransform:"transition"===n&&Ei.test(r[mi+"Property"])}}function Si(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return ki(e)+ki(t[n])})))}function ki(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Oi(t,e){var n=t.elm;a(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=di(t.data.transition);if(!s(r)&&!a(n._enterCb)&&1===n.nodeType){for(var i=r.css,o=r.type,c=r.enterClass,u=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,m=r.appearActiveClass,v=r.beforeEnter,g=r.enter,_=r.afterEnter,w=r.enterCancelled,b=r.beforeAppear,T=r.appear,C=r.afterAppear,E=r.appearCancelled,I=r.duration,S=Je,k=Je.$vnode;k&&k.parent;)S=k.context,k=k.parent;var O=!S._isMounted||!t.isRootInsert;if(!O||T||""===T){var A=O&&f?f:c,x=O&&m?m:d,N=O&&p?p:u,R=O&&b||v,D=O&&l(T)?T:g,P=O&&C||_,L=O&&E||w,M=y(h(I)?I.enter:I);0;var $=!1!==i&&!X,j=Ni(D),U=n._enterCb=F((function(){$&&(Ti(n,N),Ti(n,x)),U.cancelled?($&&Ti(n,A),L&&L(n)):P&&P(n),n._enterCb=null}));t.data.show||Gt(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),D&&D(n,U)})),R&&R(n),$&&(bi(n,A),bi(n,x),wi((function(){Ti(n,A),U.cancelled||(bi(n,N),j||(xi(M)?setTimeout(U,M):Ci(n,o,U)))}))),t.data.show&&(e&&e(),D&&D(n,U)),$||j||U()}}}function Ai(t,e){var n=t.elm;a(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=di(t.data.transition);if(s(r)||1!==n.nodeType)return e();if(!a(n._leaveCb)){var i=r.css,o=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,m=r.leaveCancelled,v=r.delayLeave,g=r.duration,_=!1!==i&&!X,w=Ni(f),b=y(h(g)?g.leave:g);0;var T=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),_&&(Ti(n,u),Ti(n,l)),T.cancelled?(_&&Ti(n,c),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(C):C()}function C(){T.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),_&&(bi(n,c),bi(n,l),wi((function(){Ti(n,c),T.cancelled||(bi(n,u),w||(xi(b)?setTimeout(T,b):Ci(n,o,T)))}))),f&&f(n,T),_||w||T())}}function xi(t){return"number"==typeof t&&!isNaN(t)}function Ni(t){if(s(t))return!1;var e=t.fns;return a(e)?Ni(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Ri(t,e){!0!==e.data.show&&Oi(e)}var Di=function(t){var e,n,r={},i=t.modules,l=t.nodeOps;for(e=0;e<Ir.length;++e)for(r[Ir[e]]=[],n=0;n<i.length;++n)a(i[n][Ir[e]])&&r[Ir[e]].push(i[n][Ir[e]]);function h(t){var e=l.parentNode(t);a(e)&&l.removeChild(e,t)}function d(t,e,n,i,o,s,u){if(a(t.elm)&&a(s)&&(t=s[u]=vt(t)),t.isRootInsert=!o,!function(t,e,n,i){var o=t.data;if(a(o)){var s=a(t.componentInstance)&&o.keepAlive;if(a(o=o.hook)&&a(o=o.init)&&o(t,!1),a(t.componentInstance))return f(t,e),p(n,t.elm,i),c(s)&&function(t,e,n,i){var o,s=t;for(;s.componentInstance;)if(s=s.componentInstance._vnode,a(o=s.data)&&a(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](Er,s);e.push(s);break}p(n,t.elm,i)}(t,e,n,i),!0}}(t,e,n,i)){var h=t.data,d=t.children,v=t.tag;a(v)?(t.elm=t.ns?l.createElementNS(t.ns,v):l.createElement(v,t),y(t),m(t,d,e),a(h)&&g(t,e),p(n,t.elm,i)):c(t.isComment)?(t.elm=l.createComment(t.text),p(n,t.elm,i)):(t.elm=l.createTextNode(t.text),p(n,t.elm,i))}}function f(t,e){a(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,v(t)?(g(t,e),y(t)):(Tr(t),e.push(t))}function p(t,e,n){a(t)&&(a(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function m(t,e,n){if(o(e)){0;for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0,e,r)}else u(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function v(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return a(t.tag)}function g(t,n){for(var i=0;i<r.create.length;++i)r.create[i](Er,t);a(e=t.data.hook)&&(a(e.create)&&e.create(Er,t),a(e.insert)&&n.push(t))}function y(t){var e;if(a(e=t.fnScopeId))l.setStyleScope(t.elm,e);else for(var n=t;n;)a(e=n.context)&&a(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent;a(e=Je)&&e!==t.context&&e!==t.fnContext&&a(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function w(t,e,n,r,i,o){for(;r<=i;++r)d(n[r],o,t,e,!1,n,r)}function b(t){var e,n,i=t.data;if(a(i))for(a(e=i.hook)&&a(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(a(e=t.children))for(n=0;n<t.children.length;++n)b(t.children[n])}function T(t,e,n){for(;e<=n;++e){var r=t[e];a(r)&&(a(r.tag)?(C(r),b(r)):h(r.elm))}}function C(t,e){if(a(e)||a(t.data)){var n,i=r.remove.length+1;for(a(e)?e.listeners+=i:e=function(t,e){function n(){0==--n.listeners&&h(t)}return n.listeners=e,n}(t.elm,i),a(n=t.componentInstance)&&a(n=n._vnode)&&a(n.data)&&C(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);a(n=t.data.hook)&&a(n=n.remove)?n(t,e):e()}else h(t.elm)}function E(t,e,n,r){for(var i=n;i<r;i++){var o=e[i];if(a(o)&&Sr(t,o))return i}}function I(t,e,n,i,o,u){if(t!==e){a(e.elm)&&a(i)&&(e=i[o]=vt(e));var h=e.elm=t.elm;if(c(t.isAsyncPlaceholder))a(e.asyncFactory.resolved)?O(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(c(e.isStatic)&&c(t.isStatic)&&e.key===t.key&&(c(e.isCloned)||c(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,p=e.data;a(p)&&a(f=p.hook)&&a(f=f.prepatch)&&f(t,e);var m=t.children,g=e.children;if(a(p)&&v(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);a(f=p.hook)&&a(f=f.update)&&f(t,e)}s(e.text)?a(m)&&a(g)?m!==g&&function(t,e,n,r,i){var o,c,u,h=0,f=0,p=e.length-1,m=e[0],v=e[p],g=n.length-1,y=n[0],_=n[g],b=!i;for(0;h<=p&&f<=g;)s(m)?m=e[++h]:s(v)?v=e[--p]:Sr(m,y)?(I(m,y,r,n,f),m=e[++h],y=n[++f]):Sr(v,_)?(I(v,_,r,n,g),v=e[--p],_=n[--g]):Sr(m,_)?(I(m,_,r,n,g),b&&l.insertBefore(t,m.elm,l.nextSibling(v.elm)),m=e[++h],_=n[--g]):Sr(v,y)?(I(v,y,r,n,f),b&&l.insertBefore(t,v.elm,m.elm),v=e[--p],y=n[++f]):(s(o)&&(o=kr(e,h,p)),s(c=a(y.key)?o[y.key]:E(y,e,h,p))?d(y,r,t,m.elm,!1,n,f):Sr(u=e[c],y)?(I(u,y,r,n,f),e[c]=void 0,b&&l.insertBefore(t,u.elm,m.elm)):d(y,r,t,m.elm,!1,n,f),y=n[++f]);h>p?w(t,s(n[g+1])?null:n[g+1].elm,n,f,g,r):f>g&&T(e,h,p)}(h,m,g,n,u):a(g)?(a(t.text)&&l.setTextContent(h,""),w(h,null,g,0,g.length-1,n)):a(m)?T(m,0,m.length-1):a(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),a(p)&&a(f=p.hook)&&a(f=f.postpatch)&&f(t,e)}}}function S(t,e,n){if(c(n)&&a(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var k=_("attrs,class,staticClass,staticStyle,key");function O(t,e,n,r){var i,o=e.tag,s=e.data,u=e.children;if(r=r||s&&s.pre,e.elm=t,c(e.isComment)&&a(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(a(s)&&(a(i=s.hook)&&a(i=i.init)&&i(e,!0),a(i=e.componentInstance)))return f(e,n),!0;if(a(o)){if(a(u))if(t.hasChildNodes())if(a(i=s)&&a(i=i.domProps)&&a(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!O(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else m(e,u,n);if(a(s)){var p=!1;for(var v in s)if(!k(v)){p=!0,g(e,n);break}!p&&s.class&&Be(s.class)}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,i){if(!s(e)){var o,u=!1,h=[];if(s(t))u=!0,d(e,h);else{var f=a(t.nodeType);if(!f&&Sr(t,e))I(t,e,h,null,null,i);else{if(f){if(1===t.nodeType&&t.hasAttribute("data-server-rendered")&&(t.removeAttribute("data-server-rendered"),n=!0),c(n)&&O(t,e,h))return S(e,h,!0),t;o=t,t=new ft(l.tagName(o).toLowerCase(),{},[],void 0,o)}var p=t.elm,m=l.parentNode(p);if(d(e,h,p._leaveCb?null:m,l.nextSibling(p)),a(e.parent))for(var g=e.parent,y=v(e);g;){for(var _=0;_<r.destroy.length;++_)r.destroy[_](g);if(g.elm=e.elm,y){for(var w=0;w<r.create.length;++w)r.create[w](Er,g);var C=g.data.hook.insert;if(C.merged)for(var E=1;E<C.fns.length;E++)C.fns[E]()}else Tr(g);g=g.parent}a(m)?T([t],0,0):a(t.tag)&&b(t)}}return S(e,h,u),e.elm}a(t)&&b(t)}}({nodeOps:wr,modules:[jr,Vr,Wr,Yr,ci,Q?{create:Ri,activate:Ri,remove:function(t,e){!0!==t.data.show?Ai(t,e):e()}}:{}].concat(Pr)});X&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Vi(t,"input")}));var Pi={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Gt(n,"postpatch",(function(){Pi.componentUpdated(t,e,n)})):Li(t,e,n.context),t._vOptions=[].map.call(t.options,ji)):("textarea"===n.tag||_r(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",Fi),t.addEventListener("compositionend",Ui),t.addEventListener("change",Ui),X&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Li(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,ji);if(i.some((function(t,e){return!$(t,r[e])})))(t.multiple?e.value.some((function(t){return $i(t,i)})):e.value!==e.oldValue&&$i(e.value,i))&&Vi(t,"change")}}};function Li(t,e,n){Mi(t,e,n),(Y||Z)&&setTimeout((function(){Mi(t,e,n)}),0)}function Mi(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=j(r,ji(s))>-1,s.selected!==o&&(s.selected=o);else if($(ji(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function $i(t,e){return e.every((function(e){return!$(e,t)}))}function ji(t){return"_value"in t?t._value:t.value}function Fi(t){t.target.composing=!0}function Ui(t){t.target.composing&&(t.target.composing=!1,Vi(t.target,"input"))}function Vi(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Bi(t){return!t.componentInstance||t.data&&t.data.transition?t:Bi(t.componentInstance._vnode)}var qi={model:Pi,show:{bind:function(t,e,n){var r=e.value,i=(n=Bi(n)).data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Oi(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value;!r!=!e.oldValue&&((n=Bi(n)).data&&n.data.transition?(n.data.show=!0,r?Oi(n,(function(){t.style.display=t.__vOriginalDisplay})):Ai(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}}},Hi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function zi(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?zi(Ee(e.children)):t}function Ki(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[S(r)]=i[r];return e}function Gi(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}var Wi=function(t){return t.tag||pe(t)},Qi=function(t){return"show"===t.name},Ji={name:"transition",props:Hi,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(Wi)).length){0;var r=this.mode;0;var i=n[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return i;var o=zi(i);if(!o)return i;if(this._leaving)return Gi(t,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:u(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=Ki(this),c=this._vnode,l=zi(c);if(o.data.directives&&o.data.directives.some(Qi)&&(o.data.show=!0),l&&l.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(o,l)&&!pe(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=R({},a);if("out-in"===r)return this._leaving=!0,Gt(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Gi(t,i);if("in-out"===r){if(pe(o))return c;var d,f=function(){d()};Gt(a,"afterEnter",f),Gt(a,"enterCancelled",f),Gt(h,"delayLeave",(function(t){d=t}))}}return i}}},Yi=R({tag:String,moveClass:String},Hi);function Xi(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Zi(t){t.data.newPos=t.elm.getBoundingClientRect()}function to(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}delete Yi.mode;var eo={Transition:Ji,TransitionGroup:{props:Yi,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Ye(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=Ki(this),a=0;a<i.length;a++){if((l=i[a]).tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))o.push(l),n[l.key]=l,(l.data||(l.data={})).transition=s;else;}if(r){var c=[],u=[];for(a=0;a<r.length;a++){var l;(l=r[a]).data.transition=s,l.data.pos=l.elm.getBoundingClientRect(),n[l.key]?c.push(l):u.push(l)}this.kept=t(e,null,c),this.removed=u}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Xi),t.forEach(Zi),t.forEach(to),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;bi(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(vi,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(vi,t),n._moveCb=null,Ti(n,e))})}})))},methods:{hasMove:function(t,e){if(!pi)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){hi(n,t)})),li(n,e),n.style.display="none",this.$el.appendChild(n);var r=Ii(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Gn.config.mustUseProp=function(t,e,n){return"value"===n&&nr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Gn.config.isReservedTag=gr,Gn.config.isReservedAttr=er,Gn.config.getTagNamespace=function(t){return vr(t)?"svg":"math"===t?"math":void 0},Gn.config.isUnknownElement=function(t){if(!Q)return!0;if(gr(t))return!1;if(t=t.toLowerCase(),null!=yr[t])return yr[t];var e=document.createElement(t);return t.indexOf("-")>-1?yr[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:yr[t]=/HTMLUnknownElement/.test(e.toString())},R(Gn.options.directives,qi),R(Gn.options.components,eo),Gn.prototype.__patch__=Q?Di:P,Gn.prototype.$mount=function(t,e){return function(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=pt),tn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new ze(t,r,P,{before:function(){t._isMounted&&!t._isDestroyed&&tn(t,"beforeUpdate")}},!0),n=!1;var i=t._preWatchers;if(i)for(var o=0;o<i.length;o++)i[o].run();return null==t.$vnode&&(t._isMounted=!0,tn(t,"mounted")),t}(this,t=t&&Q?function(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}(t):void 0,e)},Q&&setTimeout((function(){q.devtools&&at&&at.emit("init",Gn)}),0)}).call(this,n(5),n(9).setImmediate)},function(t,e,n){var r;r=()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>l});class n{constructor(t,e){this.startedAt=Date.now(),this.callback=t,this.delay=e,this.timer=setTimeout(t,e)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const r=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"}),i=(a=a||new Map,function(t,e){var n=a.get(t);n?n.push(e):a.set(t,[e])}),o=function(t,e){var n=a.get(t);n&&(e?n.splice(n.indexOf(e)>>>0,1):a.set(t,[]))},s=function(t,e){var n=a.get(t);n&&n.slice().map((function(t){t(e)})),(n=a.get("*"))&&n.slice().map((function(n){n(t,e)}))};var a;const c=function(t,e,n,r,i,o,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=[],u._compiled=!0),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}({name:"toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:r.BOTTOM_RIGHT,validator:t=>Object.values(r).includes(t)},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data:()=>({isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}),beforeMount(){this.setupContainer()},mounted(){this.showNotice(),i("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const t=document.body;t.appendChild(this.parentTop),t.appendChild(this.parentBottom)},shouldQueue(){return!!this.queue&&(this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0)},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{var t;this.onDismiss.apply(null,arguments),this.$destroy(),void 0!==(t=this.$el).remove?t.remove():t.parentNode.removeChild(t)},150)},showNotice(){this.shouldQueue()?this.queueTimer=setTimeout(this.showNotice,250):(this.correctParent.insertAdjacentElement("afterbegin",this.$el),this.isActive=!0,this.duration&&(this.timer=new n(this.dismiss,this.duration)))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(t){this.pauseOnHover&&this.timer&&(t?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case r.TOP:case r.TOP_RIGHT:case r.TOP_LEFT:return this.parentTop;case r.BOTTOM:case r.BOTTOM_RIGHT:case r.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case r.TOP:case r.TOP_RIGHT:case r.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case r.BOTTOM:case r.BOTTOM_RIGHT:case r.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeDestroy(){o("toast-clear",this.dismiss)}},(function(){var t=this,e=t._self._c;return e("transition",{attrs:{"enter-active-class":t.transition.enter,"leave-active-class":t.transition.leave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"v-toast__item",class:["v-toast__item--".concat(t.type),"v-toast__item--".concat(t.position)],attrs:{role:"alert"},on:{mouseover:function(e){return t.toggleTimer(!0)},mouseleave:function(e){return t.toggleTimer(!1)},click:t.whenClicked}},[e("div",{staticClass:"v-toast__icon"}),t._v(" "),e("p",{staticClass:"v-toast__text",domProps:{innerHTML:t._s(t.message)}})])])})).exports,u=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{open(n){let r;"string"==typeof n&&(r=n);const i={message:r},o=Object.assign({},i,e,n);return new(t.extend(c))({el:document.createElement("div"),propsData:o})},clear(){s("toast-clear")},success(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"success"},e))},error(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"error"},e))},info(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"info"},e))},warning(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"warning"},e))},default(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"default"},e))}}};c.install=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=u(t,e);t.$toast=n,t.prototype.$toast=n};const l=c;return e.default})(),t.exports=r()},function(t,e,n){"use strict";n.r(e);var r=n(7),i=n.n(r);function o(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}var s={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,i=e.parent,o=e.data;o.routerView=!0;for(var s=i.$createElement,a=n.name,c=i.$route,u=i._routerViewCache||(i._routerViewCache={}),l=0,h=!1;i&&i._routerRoot!==i;)i.$vnode&&i.$vnode.data.routerView&&l++,i._inactive&&(h=!0),i=i.$parent;if(o.routerViewDepth=l,h)return s(u[a],o,r);var d=c.matched[l];if(!d)return u[a]=null,s();var f=u[a]=d.components[a];o.registerRouteInstance=function(t,e){var n=d.instances[a];(e&&n!==t||!e&&n===t)&&(d.instances[a]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){d.instances[a]=e.componentInstance};var p=o.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(c,d.props&&d.props[a]);if(p){p=o.props=function(t,e){for(var n in e)t[n]=e[n];return t}({},p);var m=o.attrs=o.attrs||{};for(var v in p)f.props&&v in f.props||(m[v]=p[v],delete p[v])}return s(f,o,r)}};var a=/[!'()*]/g,c=function(t){return"%"+t.charCodeAt(0).toString(16)},u=/%2C/g,l=function(t){return encodeURIComponent(t).replace(a,c).replace(u,",")},h=decodeURIComponent;function d(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=h(n.shift()),i=n.length>0?h(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return l(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(l(e)):r.push(l(e)+"="+l(t)))})),r.join("&")}return l(e)+"="+l(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var p=/\/?$/;function m(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=v(o)}catch(t){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:_(e,i),matched:t?y(t):[]};return n&&(s.redirectedFrom=_(n,i)),Object.freeze(s)}function v(t){if(Array.isArray(t))return t.map(v);if(t&&"object"==typeof t){var e={};for(var n in t)e[n]=v(t[n]);return e}return t}var g=m(null,{path:"/"});function y(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function _(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;return void 0===i&&(i=""),(n||"/")+(e||f)(r)+i}function w(t,e){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(p,"")===e.path.replace(p,"")&&t.hash===e.hash&&b(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params)))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every((function(n){var r=t[n],i=e[n];return"object"==typeof r&&"object"==typeof i?b(r,i):String(r)===String(i)}))}var T,C={name:"router-link",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:[String,Array],default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,i=n.resolve(this.to,r,this.append),o=i.location,s=i.route,a=i.href,c={},u=n.options.linkActiveClass,l=n.options.linkExactActiveClass,h=null==u?"router-link-active":u,d=null==l?"router-link-exact-active":l,f=null==this.activeClass?h:this.activeClass,v=null==this.exactActiveClass?d:this.exactActiveClass,g=o.path?m(null,o,null,n):s;c[v]=w(r,g),c[f]=this.exact?c[v]:function(t,e){return 0===t.path.replace(p,"/").indexOf(e.path.replace(p,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var n in e)if(!(n in t))return!1;return!0}(t.query,e.query)}(r,g);var y=function(t){E(t)&&(e.replace?n.replace(o):n.push(o))},_={click:E};Array.isArray(this.event)?this.event.forEach((function(t){_[t]=y})):_[this.event]=y;var b={class:c};if("a"===this.tag)b.on=_,b.attrs={href:a};else{var C=function t(e){var n;if(e)for(var r=0;r<e.length;r++){if("a"===(n=e[r]).tag)return n;if(n.children&&(n=t(n.children)))return n}}(this.$slots.default);if(C){C.isStatic=!1;var I=T.util.extend;(C.data=I({},C.data)).on=_,(C.data.attrs=I({},C.data.attrs)).href=a}else b.on=_}return t(this.tag,b,this.$slots.default)}};function E(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var I="undefined"!=typeof window;function S(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function k(t){return t.replace(/\/\//g,"/")}var O=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},A=q,x=L,N=function(t,e){return $(L(t,e))},R=$,D=B,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t,e){for(var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";null!=(n=P.exec(t));){var c=n[0],u=n[1],l=n.index;if(s+=t.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=t[o],d=n[2],f=n[3],p=n[4],m=n[5],v=n[6],g=n[7];s&&(r.push(s),s="");var y=null!=d&&null!=h&&h!==d,_="+"===v||"*"===v,w="?"===v||"*"===v,b=n[2]||a,T=p||m;r.push({name:f||i++,prefix:d||"",delimiter:b,optional:w,repeat:_,partial:y,asterisk:!!g,pattern:T?F(T):g?".*":"[^"+j(b)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function M(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function $(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var i="",o=n||{},s=(r||{}).pretty?M:encodeURIComponent,a=0;a<t.length;a++){var c=t[a];if("string"!=typeof c){var u,l=o[c.name];if(null==l){if(c.optional){c.partial&&(i+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(O(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(u=s(l[h]),!e[a].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");i+=(0===h?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?encodeURI(l).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):s(l),!e[a].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');i+=c.prefix+u}}else i+=c}return i}}function j(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function F(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){return t.keys=e,t}function V(t){return t.sensitive?"":"i"}function B(t,e,n){O(e)||(n=e||n,e=[]);for(var r=(n=n||{}).strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"==typeof a)o+=j(a);else{var c=j(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),o+=u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")"}}var l=j(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",U(new RegExp("^"+o,V(n)),e)}function q(t,e,n){return O(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return U(t,e)}(t,e):O(t)?function(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(q(t[i],e,n).source);return U(new RegExp("(?:"+r.join("|")+")",V(n)),e)}(t,e,n):function(t,e,n){return B(L(t,n),e,n)}(t,e,n)}A.parse=x,A.compile=N,A.tokensToFunction=R,A.tokensToRegExp=D;var H=Object.create(null);function z(t,e,n){try{return(H[t]||(H[t]=A.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function K(t,e,n,r){var i=e||[],o=n||Object.create(null),s=r||Object.create(null);t.forEach((function(t){!function t(e,n,r,i,o,s){var a=i.path,c=i.name;0;var u=i.pathToRegexpOptions||{},l=function(t,e,n){n||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return k(e.path+"/"+t)}(a,o,u.strict);"boolean"==typeof i.caseSensitive&&(u.sensitive=i.caseSensitive);var h={path:l,regex:G(l,u),components:i.components||{default:i.component},instances:{},name:c,parent:o,matchAs:s,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};i.children&&i.children.forEach((function(i){var o=s?k(s+"/"+i.path):void 0;t(e,n,r,i,h,o)}));if(void 0!==i.alias){(Array.isArray(i.alias)?i.alias:[i.alias]).forEach((function(s){var a={path:s,children:i.children};t(e,n,r,a,o,h.path||"/")}))}n[h.path]||(e.push(h.path),n[h.path]=h);c&&(r[c]||(r[c]=h))}(i,o,s,t)}));for(var a=0,c=i.length;a<c;a++)"*"===i[a]&&(i.push(i.splice(a,1)[0]),c--,a--);return{pathList:i,pathMap:o,nameMap:s}}function G(t,e){return A(t,[],e)}function W(t,e,n,r){var i="string"==typeof t?{path:t}:t;if(i.name||i._normalized)return i;if(!i.path&&i.params&&e){(i=Q({},i))._normalized=!0;var o=Q(Q({},e.params),i.params);if(e.name)i.name=e.name,i.params=o;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;i.path=z(s,o,e.path)}else 0;return i}var a=function(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}(i.path||""),c=e&&e.path||"/",u=a.path?S(a.path,c,n||i.append):c,l=function(t,e,n){void 0===e&&(e={});var r,i=n||d;try{r=i(t||"")}catch(t){r={}}for(var o in e)r[o]=e[o];return r}(a.query,i.query,r&&r.options.parseQuery),h=i.hash||a.hash;return h&&"#"!==h.charAt(0)&&(h="#"+h),{_normalized:!0,path:u,query:l,hash:h}}function Q(t,e){for(var n in e)t[n]=e[n];return t}function J(t,e){var n=K(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t,n,s){var a=W(t,n,!1,e),u=a.name;if(u){var l=o[u];if(!l)return c(null,a);var h=l.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof a.params&&(a.params={}),n&&"object"==typeof n.params)for(var d in n.params)!(d in a.params)&&h.indexOf(d)>-1&&(a.params[d]=n.params[d]);if(l)return a.path=z(l.path,a.params),c(l,a,s)}else if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(Y(m.regex,a.path,a.params))return c(m,a,s)}}return c(null,a)}function a(t,n){var r=t.redirect,i="function"==typeof r?r(m(t,n,null,e)):r;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return c(null,n);var a=i,u=a.name,l=a.path,h=n.query,d=n.hash,f=n.params;if(h=a.hasOwnProperty("query")?a.query:h,d=a.hasOwnProperty("hash")?a.hash:d,f=a.hasOwnProperty("params")?a.params:f,u){o[u];return s({_normalized:!0,name:u,query:h,hash:d,params:f},void 0,n)}if(l){var p=function(t,e){return S(t,e.parent?e.parent.path:"/",!0)}(l,t);return s({_normalized:!0,path:z(p,f),query:h,hash:d},void 0,n)}return c(null,n)}function c(t,n,r){return t&&t.redirect?a(t,r||n):t&&t.matchAs?function(t,e,n){var r=s({_normalized:!0,path:z(n,e.params)});if(r){var i=r.matched,o=i[i.length-1];return e.params=r.params,c(o,e)}return c(null,e)}(0,n,t.matchAs):m(t,n,r,e)}return{match:s,addRoutes:function(t){K(t,r,i,o)}}}function Y(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1],a="string"==typeof r[i]?decodeURIComponent(r[i]):r[i];s&&(n[s.name]=a)}return!0}var X=Object.create(null);function Z(){window.history.replaceState({key:ht()},""),window.addEventListener("popstate",(function(t){var e;et(),t.state&&t.state.key&&(e=t.state.key,ut=e)}))}function tt(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var t=function(){var t=ht();if(t)return X[t]}(),o=i(e,n,r?t:null);o&&("function"==typeof o.then?o.then((function(e){ot(e,t)})).catch((function(t){0})):ot(o,t))}))}}function et(){var t=ht();t&&(X[t]={x:window.pageXOffset,y:window.pageYOffset})}function nt(t){return it(t.x)||it(t.y)}function rt(t){return{x:it(t.x)?t.x:window.pageXOffset,y:it(t.y)?t.y:window.pageYOffset}}function it(t){return"number"==typeof t}function ot(t,e){var n,r="object"==typeof t;if(r&&"string"==typeof t.selector){var i=document.querySelector(t.selector);if(i){var o=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-n.left-e.x,y:r.top-n.top-e.y}}(i,o={x:it((n=o).x)?n.x:0,y:it(n.y)?n.y:0})}else nt(t)&&(e=rt(t))}else r&&nt(t)&&(e=rt(t));e&&window.scrollTo(e.x,e.y)}var st,at=I&&((-1===(st=window.navigator.userAgent).indexOf("Android 2.")&&-1===st.indexOf("Android 4.0")||-1===st.indexOf("Mobile Safari")||-1!==st.indexOf("Chrome")||-1!==st.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history),ct=I&&window.performance&&window.performance.now?window.performance:Date,ut=lt();function lt(){return ct.now().toFixed(3)}function ht(){return ut}function dt(t,e){et();var n=window.history;try{e?n.replaceState({key:ut},"",t):(ut=lt(),n.pushState({key:ut},"",t))}catch(n){window.location[e?"replace":"assign"](t)}}function ft(t){dt(t,!0)}function pt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}function mt(t){return function(e,n,r){var i=!1,s=0,a=null;vt(t,(function(t,e,n,c){if("function"==typeof t&&void 0===t.cid){i=!0,s++;var u,l=_t((function(e){var i;((i=e).__esModule||yt&&"Module"===i[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:T.extend(e),n.components[c]=e,--s<=0&&r()})),h=_t((function(t){var e="Failed to resolve async component "+c+": "+t;a||(a=o(t)?t:new Error(e),r(a))}));try{u=t(l,h)}catch(t){h(t)}if(u)if("function"==typeof u.then)u.then(l,h);else{var d=u.component;d&&"function"==typeof d.then&&d.then(l,h)}}})),i||r()}}function vt(t,e){return gt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function gt(t){return Array.prototype.concat.apply([],t)}var yt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function _t(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var wt=function(t,e){this.router=t,this.base=function(t){if(!t)if(I){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};function bt(t,e,n,r){var i=vt(t,(function(t,r,i,o){var s=function(t,e){"function"!=typeof t&&(t=T.extend(t));return t.options[e]}(t,e);if(s)return Array.isArray(s)?s.map((function(t){return n(t,r,i,o)})):n(s,r,i,o)}));return gt(r?i.reverse():i)}function Tt(t,e){if(e)return function(){return t.apply(e,arguments)}}wt.prototype.listen=function(t){this.cb=t},wt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},wt.prototype.onError=function(t){this.errorCbs.push(t)},wt.prototype.transitionTo=function(t,e,n){var r=this,i=this.router.match(t,this.current);this.confirmTransition(i,(function(){r.updateRoute(i),e&&e(i),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach((function(t){t(i)})))}),(function(t){n&&n(t),t&&!r.ready&&(r.ready=!0,r.readyErrorCbs.forEach((function(e){e(t)})))}))},wt.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current,s=function(t){o(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)};if(w(t,i)&&t.matched.length===i.matched.length)return this.ensureURL(),s();var a=function(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}(this.current.matched,t.matched),c=a.updated,u=a.deactivated,l=a.activated,h=[].concat(function(t){return bt(t,"beforeRouteLeave",Tt,!0)}(u),this.router.beforeHooks,function(t){return bt(t,"beforeRouteUpdate",Tt)}(c),l.map((function(t){return t.beforeEnter})),mt(l));this.pending=t;var d=function(e,n){if(r.pending!==t)return s();try{e(t,i,(function(t){!1===t||o(t)?(r.ensureURL(!0),s(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(s(),"object"==typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(t){s(t)}};pt(h,d,(function(){var n=[];pt(function(t,e,n){return bt(t,"beforeRouteEnter",(function(t,r,i,o){return function(t,e,n,r,i){return function(o,s,a){return t(o,s,(function(t){a(t),"function"==typeof t&&r.push((function(){!function t(e,n,r,i){n[r]?e(n[r]):i()&&setTimeout((function(){t(e,n,r,i)}),16)}(t,e.instances,n,i)}))}))}}(t,i,o,e,n)}))}(l,n,(function(){return r.current===t})).concat(r.router.resolveHooks),d,(function(){if(r.pending!==t)return s();r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){n.forEach((function(t){t()}))}))}))}))},wt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach((function(n){n&&n(t,e)}))};var Ct=function(t){function e(e,n){var r=this;t.call(this,e,n);var i=e.options.scrollBehavior;i&&Z();var o=Et(this.base);window.addEventListener("popstate",(function(t){var n=r.current,s=Et(r.base);r.current===g&&s===o||r.transitionTo(s,(function(t){i&&tt(e,t,n,!0)}))}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this.current;this.transitionTo(t,(function(t){dt(k(r.base+t.fullPath)),tt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this.current;this.transitionTo(t,(function(t){ft(k(r.base+t.fullPath)),tt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(Et(this.base)!==this.current.fullPath){var e=k(this.base+this.current.fullPath);t?dt(e):ft(e)}},e.prototype.getCurrentLocation=function(){return Et(this.base)},e}(wt);function Et(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var It=function(t){function e(e,n,r){t.call(this,e,n),r&&function(t){var e=Et(t);if(!/^\/#/.test(e))return window.location.replace(k(t+"/#"+e)),!0}(this.base)||St()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router.options.scrollBehavior,n=at&&e;n&&Z(),window.addEventListener(at?"popstate":"hashchange",(function(){var e=t.current;St()&&t.transitionTo(kt(),(function(r){n&&tt(t.router,r,e,!0),at||xt(r.fullPath)}))}))},e.prototype.push=function(t,e,n){var r=this,i=this.current;this.transitionTo(t,(function(t){At(t.fullPath),tt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this.current;this.transitionTo(t,(function(t){xt(t.fullPath),tt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;kt()!==e&&(t?At(e):xt(e))},e.prototype.getCurrentLocation=function(){return kt()},e}(wt);function St(){var t=kt();return"/"===t.charAt(0)||(xt("/"+t),!1)}function kt(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function Ot(t){var e=window.location.href,n=e.indexOf("#");return(n>=0?e.slice(0,n):e)+"#"+t}function At(t){at?dt(Ot(t)):window.location.hash=t}function xt(t){at?ft(Ot(t)):window.location.replace(Ot(t))}var Nt=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){e.index=n,e.updateRoute(r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(wt),Rt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=J(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!at&&!1!==t.fallback,this.fallback&&(e="hash"),I||(e="abstract"),this.mode=e,e){case"history":this.history=new Ct(this,t.base);break;case"hash":this.history=new It(this,t.base,this.fallback);break;case"abstract":this.history=new Nt(this,t.base);break;default:0}},Dt={currentRoute:{configurable:!0}};function Pt(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}Rt.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},Dt.currentRoute.get=function(){return this.history&&this.history.current},Rt.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var n=this.history;if(n instanceof Ct)n.transitionTo(n.getCurrentLocation());else if(n instanceof It){var r=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Rt.prototype.beforeEach=function(t){return Pt(this.beforeHooks,t)},Rt.prototype.beforeResolve=function(t){return Pt(this.resolveHooks,t)},Rt.prototype.afterEach=function(t){return Pt(this.afterHooks,t)},Rt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Rt.prototype.onError=function(t){this.history.onError(t)},Rt.prototype.push=function(t,e,n){this.history.push(t,e,n)},Rt.prototype.replace=function(t,e,n){this.history.replace(t,e,n)},Rt.prototype.go=function(t){this.history.go(t)},Rt.prototype.back=function(){this.go(-1)},Rt.prototype.forward=function(){this.go(1)},Rt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Rt.prototype.resolve=function(t,e,n){var r=W(t,e||this.history.current,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath;return{location:r,route:i,href:function(t,e,n){var r="hash"===n?"#"+e:e;return t?k(t+"/"+r):r}(this.history.base,o,this.mode),normalizedTo:r,resolved:i}},Rt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Rt.prototype,Dt),Rt.install=function t(e){if(!t.installed||T!==e){t.installed=!0,T=e;var n=function(t){return void 0!==t},r=function(t,e){var r=t.$options._parentVnode;n(r)&&n(r=r.data)&&n(r=r.registerRouteInstance)&&r(t,e)};e.mixin({beforeCreate:function(){n(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("router-view",s),e.component("router-link",C);var i=e.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}},Rt.version="2.8.1",I&&window.Vue&&window.Vue.use(Rt);var Lt=Rt,Mt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("Login")]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("E-Mail Address")]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.datalogin.email,expression:"datalogin.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autocomplete:"email",autofocus:""},domProps:{value:t.datalogin.email},on:{input:function(e){e.target.composing||t.$set(t.datalogin,"email",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.datalogin.password,expression:"datalogin.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:"",autocomplete:"current-password",value:""},domProps:{value:t.datalogin.password},on:{input:function(e){e.target.composing||t.$set(t.datalogin,"password",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row mb-0"},[e("div",{staticClass:"col-md-8 offset-md-4"},[e("button",{staticClass:"btn btn-primary size",attrs:{type:"submit"},on:{click:function(e){return t.createLogin()}}},[t._v("\n                                Login\n                            ")]),t._v(" "),e("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"RegisterComponent",params:{}}}},[t._v("Register")])],1)])])])])])])};Mt._withStripped=!0;var $t=n(1);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object($t.h)("firebase","10.4.0","app");const jt={apiKey:"AIzaSyCTJMO2hfqLbzD4idyb3SIst-VCU8nWH8s",authDomain:"one-e52f5.firebaseapp.com",projectId:"one-e52f5",storageBucket:"one-e52f5.appspot.com",messagingSenderId:"1080070134336",appId:"1:1080070134336:web:6daadb903b048f9fd29da5",measurementId:"G-86R2Q1QL76"};let Ft=null;function Ut(){Ft=Object($t.f)().length?Object($t.e)():Object($t.g)(jt)}var Vt=n(0),Bt=n(3);function qt(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;var Ht=n(4);function zt(t){return void 0!==t&&void 0!==t.enterprise}class Kt{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wt=Gt,Qt=new Vt.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Jt=new Bt.b("@firebase/auth");function Yt(t,...e){Jt.logLevel<=Bt.a.ERROR&&Jt.error(`Auth (${$t.a}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw ee(t,...e)}function Zt(t,...e){return ee(t,...e)}function te(t,e,n){const r=Object.assign(Object.assign({},Wt()),{[e]:n});return new Vt.b("auth","Firebase",r).create(e,{appName:t.name})}function ee(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qt.create(t,...e)}function ne(t,e,...n){if(!t)throw ee(e,...n)}function re(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yt(e),new Error(e)}function ie(t,e){t||re(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function se(){return"http:"===ae()||"https:"===ae()}function ae(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{constructor(t,e){this.shortDelay=t,this.longDelay=e,ie(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(Vt.t)()||Object(Vt.u)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(se()||Object(Vt.p)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t,e){ie(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void re("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void re("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void re("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},de=new ce(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pe(t,e,n,r,i={}){return me(t,i,async()=>{let i={},o={};r&&("GET"===e?o=r:i={body:JSON.stringify(r)});const s=Object(Vt.w)(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),le.fetch()(ge(t,t.config.apiHost,n,s),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function me(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},he),e);try{const e=new ye(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _e(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const e=i.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw _e(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw _e(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw _e(t,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw te(t,a,s);Xt(t,a)}}catch(e){if(e instanceof Vt.c)throw e;Xt(t,"network-request-failed",{message:String(e)})}}async function ve(t,e,n,r,i={}){const o=await pe(t,e,n,r,i);return"mfaPendingCredential"in o&&Xt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function ge(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ue(t.config,i):`${t.config.apiScheme}://${i}`}class ye{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(Zt(this.auth,"network-request-failed")),de.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _e(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Zt(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(t,e){return pe(t,"GET","/v2/recaptchaConfig",fe(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return 1e3*Number(t)}function Ce(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return Yt("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(Vt.d)(n);return t?JSON.parse(t):(Yt("Failed to decode base64 JWT payload"),null)}catch(t){return Yt("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ee(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof Vt.c&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Ie{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=be(this.lastLoginAt),this.creationTime=be(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ee(t,async function(t,e){return pe(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));ne(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?o.providerUserInfo.map(t=>{var{providerId:e}=t,n=qt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[];const a=(c=t.providerData,u=s,[...c.filter(t=>!u.some(e=>e.providerId===t.providerId)),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Se(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ne(t.idToken,"internal-error"),ne(void 0!==t.idToken,"internal-error"),ne(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ce(t);return ne(e,"internal-error"),ne(void 0!==e.exp,"internal-error"),ne(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return ne(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await me(t,{},async()=>{const n=Object(Vt.w)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=ge(t,r,"/v1/token","key="+i),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",le.fetch()(o,{method:"POST",headers:s,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new Oe;return n&&(ne("string"==typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(ne("string"==typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(ne("number"==typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Oe,this.toJSON())}_performRefresh(){return re("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,e){ne("string"==typeof t||void 0===t,"internal-error",{appName:e})}class xe{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=qt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ie(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Se(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Ee(this,this.stsTokenManager.getToken(this.auth,t));return ne(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Object(Vt.n)(t),r=await n.getIdToken(e),i=Ce(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:be(Te(i.auth_time)),issuedAtTime:be(Te(i.iat)),expirationTime:be(Te(i.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Object(Vt.n)(t);await ke(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(ne(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new xe(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await ke(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ee(this,async function(t,e){return pe(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=e.createdAt)&&void 0!==c?c:void 0,g=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:T}=e;ne(y&&T,t,"internal-error");const C=Oe.fromJSON(this.name,T);ne("string"==typeof y,t,"internal-error"),Ae(l,t.name),Ae(h,t.name),ne("boolean"==typeof _,t,"internal-error"),ne("boolean"==typeof w,t,"internal-error"),Ae(d,t.name),Ae(f,t.name),Ae(p,t.name),Ae(m,t.name),Ae(v,t.name),Ae(g,t.name);const E=new xe({uid:y,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:v,lastLoginAt:g});return b&&Array.isArray(b)&&(E.providerData=b.map(t=>Object.assign({},t))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(t,e,n=!1){const r=new Oe;r.updateFromServerResponse(e);const i=new xe({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await ke(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new Map;function Re(t){ie(t instanceof Function,"Expected a class definition");let e=Ne.get(t);return e?(ie(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ne.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}De.type="NONE";const Pe=De;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e,n){return`firebase:${t}:${e}:${n}`}class Me{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Le(this.userKey,r.apiKey,i),this.fullPersistenceKey=Le("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?xe._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Me(Re(Pe),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||Re(Pe);const o=Le(n,t.config.apiKey,t.name);let s=null;for(const n of e)try{const e=await n._get(o);if(e){const r=xe._fromJSON(t,e);n!==i&&(s=r),i=n;break}}catch(t){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(o)}catch(t){}})),new Me(i,t,n)):new Me(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ve(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(je(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qe(e))return"Blackberry";if(He(e))return"Webos";if(Fe(e))return"Safari";if((e.includes("chrome/")||Ue(e))&&!e.includes("edge/"))return"Chrome";if(Be(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function je(t=Object(Vt.o)()){return/firefox\//i.test(t)}function Fe(t=Object(Vt.o)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ue(t=Object(Vt.o)()){return/crios\//i.test(t)}function Ve(t=Object(Vt.o)()){return/iemobile/i.test(t)}function Be(t=Object(Vt.o)()){return/android/i.test(t)}function qe(t=Object(Vt.o)()){return/blackberry/i.test(t)}function He(t=Object(Vt.o)()){return/webos/i.test(t)}function ze(t=Object(Vt.o)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ke(t=Object(Vt.o)()){return ze(t)||Be(t)||He(t)||qe(t)||/windows phone/i.test(t)||Ve(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(t,e=[]){let n;switch(t){case"Browser":n=$e(Object(Vt.o)());break;case"Worker":n=`${$e(Object(Vt.o)())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$t.a}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise((n,r)=>{try{n(t(e))}catch(t){r(t)}});n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){var e,n,r,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=o.minPasswordLength)&&void 0!==e?e:6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=t.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,r,i,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xe(this),this.idTokenSubscription=new Xe(this),this.beforeStateQueue=new We(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Re(e)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Me.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==o||!(null==s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(t))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ke(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(Vt.n)(t):null;return e&&ne(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&ne(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Re(t))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await async function(t,e={}){return pe(t,"GET","/v2/passwordPolicy",fe(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),e=new Qe(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Vt.b("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged(()=>{n(),t()},e)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Re(t)||this._popupRedirectResolver;ne(e,this,"argument-error"),this.redirectPersistenceManager=await Me.create(this,[Re(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(s,this,"internal-error"),s.then(()=>{o||i(this.currentUser)}),"function"==typeof e){const i=t.addObserver(e,n,r);return()=>{o=!0,i()}}{const n=t.addObserver(e);return()=>{o=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ge(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){Jt.logLevel<=Bt.a.WARN&&Jt.warn(`Auth (${$t.a}): ${t}`,...e)}("Error while retrieving App Check token: "+e.error),null==e?void 0:e.token}}function Ye(t){return Object(Vt.n)(t)}class Xe{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(Vt.g)(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return new Promise((e,n)=>{const r=document.createElement("script");var i,o;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=Zt("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)})}function tn(t){return`__${t}${Math.floor(1e6*Math.random())}`}class en{constructor(t){this.type="recaptcha-enterprise",this.auth=Ye(t)}async verify(t="verify",e=!1){function n(e,n,r){const i=window.grecaptcha;zt(i)?i.enterprise.ready(()=>{i.enterprise.execute(e,{action:t}).then(t=>{n(t)}).catch(()=>{n("NO_RECAPTCHA")})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((t,r)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise(async(e,n)=>{we(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Kt(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(t=>{n(t)})})})(this.auth).then(i=>{if(!e&&zt(window.grecaptcha))n(i,t,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Ze("https://www.google.com/recaptcha/enterprise.js?render="+i).then(()=>{n(i,t,r)}).catch(t=>{r(t)})}}).catch(t=>{r(t)})})}}async function nn(t,e,n,r=!1){const i=new en(t);let o;try{o=await i.verify(n)}catch(t){o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}function rn(t,e,n){const r=Ye(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=on(e),{host:s,port:a}=function(t){const e=on(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:sn(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:sn(e)}}}(e),c=null===a?"":":"+a;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function on(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class an{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return re("not implemented")}_getIdTokenResponse(t){return re("not implemented")}_linkToIdToken(t,e){return re("not implemented")}_getReauthenticationResolver(t){return re("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t,e){return pe(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function un(t,e){return ve(t,"POST","/v1/accounts:signInWithPassword",fe(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln extends an{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new ln(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ln(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await nn(t,n,"signInWithPassword");return un(t,e)}return un(t,n).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await nn(t,n,"signInWithPassword");return un(t,e)}return Promise.reject(e)});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return ve(t,"POST","/v1/accounts:signInWithEmailLink",fe(t,e))}(t,{email:this._email,oobCode:this._password});default:Xt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return cn(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return ve(t,"POST","/v1/accounts:signInWithEmailLink",fe(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Xt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(t,e){return ve(t,"POST","/v1/accounts:signInWithIdp",fe(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends an{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new dn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Xt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=qt(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new dn(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){return hn(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,hn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,hn(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Object(Vt.w)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pn extends an{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new pn({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new pn({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return ve(t,"POST","/v1/accounts:signInWithPhoneNumber",fe(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await ve(t,"POST","/v1/accounts:signInWithPhoneNumber",fe(t,e));if(n.temporaryProof)throw _e(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return ve(t,"POST","/v1/accounts:signInWithPhoneNumber",fe(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),fn)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new pn({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t){var e,n,r,i,o,s;const a=Object(Vt.x)(Object(Vt.i)(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);ne(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(t){const e=function(t){const e=Object(Vt.x)(Object(Vt.i)(t)).link,n=e?Object(Vt.x)(Object(Vt.i)(e)).deep_link_id:null,r=Object(Vt.x)(Object(Vt.i)(t)).deep_link_id;return(r?Object(Vt.x)(Object(Vt.i)(r)).link:null)||r||n||e||t}(t);try{return new mn(e)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(t,e){return ln._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=mn.parseLink(e);return ne(n,"argument-error"),ln._fromEmailAndCode(t,n.code,n.tenantId)}}vn.PROVIDER_ID="password",vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends gn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n extends yn{constructor(){super("facebook.com")}static credential(t){return dn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return _n.credential(t.oauthAccessToken)}catch(t){return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com",_n.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends yn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return dn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return wn.credential(e,n)}catch(t){return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com",wn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn extends yn{constructor(){super("github.com")}static credential(t){return dn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return bn.credential(t.oauthAccessToken)}catch(t){return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com",bn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tn extends yn{constructor(){super("twitter.com")}static credential(t,e){return dn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Tn.credential(e,n)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Cn(t,e){return ve(t,"POST","/v1/accounts:signUp",fe(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn.TWITTER_SIGN_IN_METHOD="twitter.com",Tn.PROVIDER_ID="twitter.com";class En{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await xe._fromIdTokenResponse(t,n,r),o=In(n);return new En({user:i,providerId:o,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=In(n);return new En({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function In(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn extends Vt.c{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Sn.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Sn(t,e,n,r)}}function kn(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Sn._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(t,e,n=!1){const r=await Ee(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return En._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function An(t,e,n=!1){const{auth:r}=t;try{const i=await Ee(t,kn(r,"reauthenticate",e,t),n);ne(i.idToken,r,"internal-error");const o=Ce(i.idToken);ne(o,r,"internal-error");const{sub:s}=o;return ne(t.uid===s,r,"user-mismatch"),En._forOperation(t,"reauthenticate",i)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Xt(r,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(t,e,n=!1){const r=await kn(t,"signIn",e),i=await En._fromIdTokenResponse(t,"signIn",r);return n||await t._updateCurrentUser(i.user),i}async function Nn(t,e){return xn(Ye(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rn(t){const e=Ye(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Dn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Object(Vt.o)();return Fe(t)||ze(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Ke(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Object(Vt.r)()&&10===document.documentMode&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Pn.type="LOCAL";const Ln=Pn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Dn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Mn.type="SESSION";const $n=Mn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new jn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async t=>t(e.origin,i)),a=await function(t){return Promise.all(t.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}}))}(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn.receivers=[];class Un{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=Fn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bn(){return void 0!==Vn().WorkerGlobalScope&&"function"==typeof Vn().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qn="firebaseLocalStorageDb";class Hn{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function zn(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Kn(){const t=indexedDB.open(qn,1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(qn);return new Hn(t).toPromise()}(),e(await Kn()))})})}async function Gn(t,e,n){const r=zn(t,!0).put({fbase_key:e,value:n});return new Hn(r).toPromise()}function Wn(t,e){const n=zn(t,!0).delete(e);return new Hn(n).toPromise()}class Qn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Kn()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jn._getInstance(Bn()?self:null),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Un(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Kn();return await Gn(t,"__sak","1"),await Wn(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gn(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>async function(t,e){const n=zn(t,!1).get(e),r=await new Hn(n).toPromise();return void 0===r?null:r.value}(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Wn(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=zn(t,!1).getAll();return new Hn(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Qn.type="LOCAL";const Jn=Qn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
tn("rcb"),new ce(3e4,6e4);async function Yn(t,e,n){var r;const i=await n.verify();try{let o;if(ne("string"==typeof i,t,"argument-error"),ne("recaptcha"===n.type,t,"argument-error"),o="string"==typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){ne("enroll"===e.type,t,"internal-error");return(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return pe(t,"POST","/v2/accounts/mfaEnrollment:start",fe(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{ne("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;ne(n,t,"missing-multi-factor-info");return(await function(t,e){return pe(t,"POST","/v2/accounts/mfaSignIn:start",fe(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return pe(t,"POST","/v1/accounts:sendVerificationCode",fe(t,e))}(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn{constructor(t){this.providerId=Xn.PROVIDER_ID,this.auth=Ye(t)}verifyPhoneNumber(t,e){return Yn(this.auth,t,Object(Vt.n)(e))}static credential(t,e){return pn._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Xn.credentialFromTaggedObject(e)}static credentialFromError(t){return Xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?pn._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zn(t,e){return e?Re(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn.PROVIDER_ID="phone",Xn.PHONE_SIGN_IN_METHOD="phone";class tr extends an{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return hn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return hn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return hn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function er(t){return xn(t.auth,new tr(t),t.bypassAuthState)}function nr(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),An(n,new tr(t),t.bypassAuthState)}async function rr(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),On(n,new tr(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return er;case"linkViaPopup":case"linkViaRedirect":return rr;case"reauthViaPopup":case"reauthViaRedirect":return nr;default:Xt(this.auth,"internal-error")}}resolve(t){ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new ce(2e3,1e4);class sr extends ir{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ne(t,this.auth,"internal-error"),t}async onExecution(){ie(1===this.filter.length,"Popup operations only handle one event");const t=Fn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(t,or.get())};t()}}sr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ar=new Map;class cr extends ir{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=ar.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=hr(e),r=lr(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}ar.set(this.auth._key(),t)}return this.bypassAuthState||ar.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ur(t,e){ar.set(t._key(),e)}function lr(t){return Re(t._redirectPersistence)}function hr(t){return Le("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(t,e,n=!1){const r=Ye(t),i=Zn(r,e),o=new cr(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}class fr{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mr(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!mr(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Zt(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(pr(t))}saveEventToCache(t){this.cachedEventUids.add(pr(t)),this.lastProcessedEventTime=Date.now()}}function pr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function mr({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gr=/^https?/;async function yr(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return pe(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(_r(t))return}catch(t){}Xt(t,"unauthorized-domain")}function _r(t){const e=oe(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!gr.test(n))return!1;if(vr.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new ce(3e4,6e4);function br(){const t=Vn().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Tr=null;function Cr(t){return Tr=Tr||function(t){return new Promise((e,n)=>{var r,i,o;function s(){br(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{br(),n(Zt(t,"network-request-failed"))},timeout:wr.get()})}if(null===(i=null===(r=Vn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Vn().gapi)||void 0===o?void 0:o.load)){const e=tn("iframefcb");return Vn()[e]=()=>{gapi.load?s():n(Zt(t,"network-request-failed"))},Ze("https://apis.google.com/js/api.js?onload="+e).catch(t=>n(t))}s()}}).catch(t=>{throw Tr=null,t})}(t),Tr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new ce(5e3,15e3),Ir={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kr(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ue(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:$t.a},i=Sr.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Object(Vt.w)(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ar{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function xr(t,e,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Or),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Object(Vt.o)().toLowerCase();n&&(a=Ue(u)?"_blank":n),je(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(function(t=Object(Vt.o)()){var e;return ze(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Ar(null);const h=window.open(e||"",a,l);ne(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Ar(h)}const Nr=encodeURIComponent("fac");async function Rr(t,e,n,r,i,o){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$t.a,eventId:i};if(e instanceof gn){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Object(Vt.q)(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(o||{}))s[t]=e}if(e instanceof yn){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(s.scopes=t.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];const c=await t._getAppCheckToken(),u=c?`#${Nr}=${encodeURIComponent(c)}`:"";return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/__/auth/handler`;return ue(t,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${Object(Vt.w)(a).slice(1)}${u}`}const Dr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$n,this._completeRedirectFn=dr,this._overrideRedirectResult=ur}async _openPopup(t,e,n,r){var i;ie(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return xr(t,await Rr(t,e,n,oe(),r),Fn())}async _openRedirect(t,e,n,r){await this._originValidation(t);return function(t){Vn().location.href=t}(await Rr(t,e,n,oe(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(ie(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await async function(t){const e=await Cr(t),n=Vn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:kr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ir,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=Zt(t,"network-request-failed"),o=Vn().setTimeout(()=>{r(i)},Er.get());function s(){Vn().clearTimeout(o),n(e)}e.ping(s).then(s,()=>{r(i)})}))}(t),n=new fr(t);return e.register("authEvent",e=>{ne(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),Xt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=yr(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ke()||Fe()||ze()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lr=Object(Vt.m)("authIdTokenMaxAge")||300;let Mr=null;function $r(t=Object($t.e)()){const e=Object($t.b)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){const n=Object($t.b)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if(Object(Vt.h)(r,null!=e?e:{}))return t;Xt(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Dr,persistence:[Jn,Ln,$n]}),r=Object(Vt.m)("authTokenSyncURL");if(r){const t=(i=r,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Lr)return;const r=null==e?void 0:e.token;Mr!==r&&(Mr=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:"Bearer "+r}:{}}))});!function(t,e,n){Object(Vt.n)(t).beforeAuthStateChanged(e,n)}(n,t,()=>t(n.currentUser)),function(t,e,n,r){Object(Vt.n)(t).onIdTokenChanged(e,n,r)}(n,e=>t(e))}var i;const o=Object(Vt.k)("auth");return o&&rn(n,"http://"+o),n}var jr;jr="Browser",Object($t.c)(new Ht.a("auth",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=n.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:o,authDomain:s,clientPlatform:jr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ge(jr)},c=new Je(n,r,i,a);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Re);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(c,e),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider("auth-internal").initialize()})),Object($t.c)(new Ht.a("auth-internal",t=>(t=>new Pr(t))(Ye(t.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object($t.h)("@firebase/auth","1.3.0",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(jr)),Object($t.h)("@firebase/auth","1.3.0","esm2017");var Fr=n(11),Ur=n(12),Vr=n.n(Ur);function Br(t,e,n,r,i,o,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}var qr=Br({data:function(){return{AUTH:null,datalogin:{email:null,password:null}}},mounted(){Ut(),//!!!
this.AUTH=$r(Ft)},methods:{createLogin(){var t,e,n,r=this;if(r.datalogin.email&&r.datalogin.password)(t=r.AUTH,e=r.datalogin.email,n=r.datalogin.password,Nn(Object(Vt.n)(t),vn.credential(e,n)).catch(async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&Rn(t),e})).then(t=>{console.log(t.user),r.$router.push({name:"NotesComponent",params:{uid:t.user.uid}})}//!!!
).catch(t=>{console.error(t),Fr.a.use(Vr.a);Fr.a.$toast.error("Incorrect login or password!",{position:"top-right",duration:5e3})});else{Fr.a.use(Vr.a);let t={position:"top-right",duration:5e3};Fr.a.$toast.error("All fields must be filled in!",t)}}}},Mt,[],!1,null,null,null).exports,Hr=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2 text-right"},[e("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"LoginComponent",params:{}}}},[t._v("Logout")])],1),t._v(" "),e("div",{staticClass:"col-md-8 col-sm-8 col-xs-12"},[e("div",{staticClass:"header",attrs:{id:"myDIV"}},[e("h2",{staticStyle:{margin:"5px"}},[t._v("My Notes List")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.createnote.categoryId,expression:"createnote.categoryId"}],staticClass:"mySelect",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.createnote,"categoryId",e.target.multiple?n:n[0])}}},t._l(t.categories,(function(n,r){return e("option",{domProps:{value:n.id}},[t._v(t._s(n.name))])})),0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.createnote.name,expression:"createnote.name"}],attrs:{type:"text",id:"myInput",placeholder:"Title..."},domProps:{value:t.createnote.name},on:{input:function(e){e.target.composing||t.$set(t.createnote,"name",e.target.value)}}}),t._v(" "),e("span",{staticClass:"addBtn",on:{click:function(e){return t.createNote()}}},[t._v("Add")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.categories,(function(n,r){return e("div",{staticClass:"col myRadio"},[e("input",{attrs:{type:"radio",name:"rd"},on:{click:function(e){return t.listNotesCategory(n.id)}}}),t._v(" "+t._s(n.name)+"\n          ")])})),0)]),t._v(" "),e("div",t._l(t.notes,(function(n,r){return e("ul",{attrs:{id:"myUL"}},[e("li",[e("b",[t._v(t._s(n.categoryName))]),t._v(" "+t._s(n.name)),e("span",{staticClass:"close",on:{click:function(e){return e.stopPropagation(),t.destroyNote(n.id)}}},[t._v("×")])])])})),0)]),t._v(" "),e("div",{staticClass:"col-md-2"})])};Hr._withStripped=!0;var zr=n(8),Kr=Br({data:function(){return{DB:null,notes:[],categories:[],createnote:{name:name,categoryId:"1",userId:null}}},mounted(){Ut(),//!!!
this.DB=Object(zr.f)(Ft),this.createnote.userId=this.$route.params.uid,//!!!
this.listCategories()},methods:{listCategories(){var t=this;Object(zr.e)(Object(zr.b)(t.DB,"Categories")).then(e=>{e.forEach(e=>{console.log(e.data());let n=e.data();n.id=e.id,//!!!additional - not in document.data()
t.categories.push(n)}),t.listNotes()}//!!!here - after categories
)},listNotes(){let t=Object(zr.g)(Object(zr.b)(this.DB,"Notes"),Object(zr.h)("userId","==",this.$route.params.uid)),e=Object(zr.e)(t);//!!!
//!!! 
this.pushNotes(e)},getCategoryName(t){for(let e=0;e<this.categories.length;++e)if(this.categories[e].id==t)return this.categories[e].name},listNotesCategory(t){this.notes=[];//!!!here - if there weren't any
let e=Object(zr.g)(Object(zr.b)(this.DB,"Notes"),Object(zr.h)("categoryId","==",t),Object(zr.h)("userId","==",this.$route.params.uid)),n=Object(zr.e)(e);this.pushNotes(n)},pushNotes(t){var e=this;t.then(t=>{t.forEach(t=>{console.log(t.data());let n=t.data();n.id=t.id,
//!!!additional - note need name category 
n.categoryName=e.getCategoryName(n.categoryId),e.notes.push(n)})})},createNote(){Object(zr.a)(Object(zr.b)(this.DB,"Notes"),this.createnote),this.createnote.name="",//!!!reset input
this.createnote.categoryId="1",this.notes=[],//!!!reset notes
this.listNotes()},destroyNote(t){Object(zr.c)(Object(zr.d)(this.DB,"Notes",t)),this.notes=[],this.listNotes()}}},Hr,[],!1,null,null,null).exports,Gr=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("Register")]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("E-Mail Address")]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.dataregister.email,expression:"dataregister.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autocomplete:"email"},domProps:{value:t.dataregister.email},on:{input:function(e){e.target.composing||t.$set(t.dataregister,"email",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.dataregister.password,expression:"dataregister.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:"",autocomplete:"new-password"},domProps:{value:t.dataregister.password},on:{input:function(e){e.target.composing||t.$set(t.dataregister,"password",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password-confirm"}},[t._v("Confirm Password")]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.dataregister.passwordConfirmation,expression:"dataregister.passwordConfirmation"}],staticClass:"form-control",attrs:{id:"password-confirm",type:"password",name:"password_confirmation",required:"",autocomplete:"new-password"},domProps:{value:t.dataregister.passwordConfirmation},on:{input:function(e){e.target.composing||t.$set(t.dataregister,"passwordConfirmation",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row mb-0"},[e("div",{staticClass:"col-md-6 offset-md-4"},[e("button",{staticClass:"btn btn-primary size",attrs:{type:"button"},on:{click:function(e){return t.createRegister()}}},[t._v("\n                                    Register\n                                ")])])])])])])])])};Gr._withStripped=!0;var Wr=Br({data:function(){return{AUTH:null,dataregister:{email:null,password:null,passwordConfirmation:null}}},mounted(){Ut(),//!!!
this.AUTH=$r(Ft)},methods:{createRegister(t,e){var n=this;if(n.dataregister.email&&n.dataregister.password&&n.dataregister.passwordConfirmation&&n.dataregister.password==n.dataregister.passwordConfirmation)(async function(t,e,n){var r;const i=Ye(t),o={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const t=await nn(i,o,"signUpPassword");s=Cn(i,t)}else s=Cn(i,o).catch(async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await nn(i,o,"signUpPassword");return Cn(i,t)}throw t});const a=await s.catch(e=>{throw"auth/password-does-not-meet-requirements"===e.code&&Rn(t),e}),c=await En._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c})(n.AUTH,n.dataregister.email,n.dataregister.password).then(t=>{console.log(t.user),n.$router.push({name:"NotesComponent",params:{uid:t.user.uid}})}//!!!
).catch(t=>{console.error(t)});else{Fr.a.use(Vr.a);let t={position:"top-right",duration:5e3};Fr.a.$toast.error("All fields must be filled in! or Password != Confirm Password!",t)}}}},Gr,[],!1,null,null,null).exports;i.a.use(Lt);const Qr=new Lt({routes:[{path:"/",name:"LoginComponent",component:qr},{path:"/register",name:"RegisterComponent",component:Wr},{path:"/user/:uid",name:"NotesComponent",component:Kr}]});new i.a({router:Qr}).$mount("#app")}]);