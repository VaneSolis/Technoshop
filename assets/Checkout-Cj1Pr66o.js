var t=Object.defineProperty,e=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(e,n,i)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,a=(t,e)=>{for(var n in e||(e={}))r.call(e,n)&&o(t,n,e[n]);if(i)for(var n of i(e))s.call(e,n)&&o(t,n,e[n]);return t},l=(t,e,n)=>new Promise(((i,r)=>{var s=t=>{try{a(n.next(t))}catch(e){r(e)}},o=t=>{try{a(n.throw(t))}catch(e){r(e)}},a=t=>t.done?i(t.value):Promise.resolve(t.value).then(s,o);a((n=n.apply(t,e)).next())}));import{C as h,j as u}from"./index-CVTadyRG.js";import{r as c}from"./vendor-C9Evistz.js";import{u as d}from"./index.esm-Di5Nvi7D.js";var f={};
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
 */const p=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},g={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,l=a?t[r+2]:0,h=e>>2,u=(3&e)<<4|o>>4;let c=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(c=64)),i.push(n[h],n[u],n[c],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(p(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length?n[t.charAt(r)]:0;++r;const o=r<t.length?n[t.charAt(r)]:64;++r;const a=r<t.length?n[t.charAt(r)]:64;if(++r,null==e||null==s||null==o||null==a)throw new m;const l=e<<2|s>>4;if(i.push(l),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class m extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const y=function(t){return function(t){const e=p(t);return g.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
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
const v=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,w=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&function(t){try{return g.decodeString(t,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(t[1]);return e&&JSON.parse(e)},b=()=>{try{return v()||(()=>{if("undefined"==typeof process)return;const t=f.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||w()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},E=t=>{const e=(t=>{var e,n;return null===(n=null===(e=b())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},_=()=>{var t;return null===(t=b())||void 0===t?void 0:t.config};
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
class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function I(){return!function(){var t;const e=null===(t=b())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class S extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(C,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new S(i,o,n)}}const C=/\{\$([^}]+)}/g;function D(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(N(n)&&N(s)){if(!D(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function N(t){return null!==t&&"object"==typeof t}
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
 */function k(t){return t&&t._delegate?t._delegate:t}class x{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const O="[DEFAULT]";
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
 */class R{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new T;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:O})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=O){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}delete(){return l(this,null,(function*(){const t=Array.from(this.instances.values());yield Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}))}isComponentSet(){return null!=this.component}isInitialized(t=O){return this.instances.has(t)}getOptions(t=O){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(r)&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===O?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}var i;return n||null}normalizeInstanceIdentifier(t=O){return this.component?this.component.multipleInstances?t:O:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class L{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new R(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
 */var P,M;(M=P||(P={}))[M.DEBUG=0]="DEBUG",M[M.VERBOSE=1]="VERBOSE",M[M.INFO=2]="INFO",M[M.WARN=3]="WARN",M[M.ERROR=4]="ERROR",M[M.SILENT=5]="SILENT";const F={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},V=P.INFO,U={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},j=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=U[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class B{constructor(t){this.name=t,this._logLevel=V,this._logHandler=j,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in P))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?F[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...t),this._logHandler(this,P.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...t),this._logHandler(this,P.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,P.INFO,...t),this._logHandler(this,P.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,P.WARN,...t),this._logHandler(this,P.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...t),this._logHandler(this,P.ERROR,...t)}}let $,q;const z=new WeakMap,H=new WeakMap,K=new WeakMap,G=new WeakMap,Q=new WeakMap;let X={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return H.get(t);if("objectStoreNames"===e)return t.objectStoreNames||K.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return J(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function W(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(q||(q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Z(this),e),J(z.get(this))}:function(...e){return J(t.apply(Z(this),e))}:function(e,...n){const i=t.call(Z(this),e,...n);return K.set(i,e.sort?e.sort():[e]),J(i)}}function Y(t){return"function"==typeof t?W(t):(t instanceof IDBTransaction&&function(t){if(H.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));H.set(t,e)}(t),e=t,($||($=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,X):t);var e}function J(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(J(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&z.set(e,t)})).catch((()=>{})),Q.set(e,t),e}(t);if(G.has(t))return G.get(t);const e=Y(t);return e!==t&&(G.set(t,e),Q.set(e,t)),e}const Z=t=>Q.get(t);const tt=["get","getKey","getAll","getAllKeys","count"],et=["put","add","delete","clear"],nt=new Map;function it(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(nt.get(e))return nt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=et.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!tt.includes(n))return;const s=function(t,...e){return l(this,null,(function*(){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(yield Promise.all([o[n](...e),r&&s.done]))[0]}))};return nt.set(e,s),s}X=(t=>{return i=a({},t),e(i,n({get:(e,n,i)=>it(e,n)||t.get(e,n,i),has:(e,n)=>!!it(e,n)||t.has(e,n)}));var i})(X);
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
class rt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const st="@firebase/app",ot="0.10.13",at=new B("@firebase/app"),lt="@firebase/app-compat",ht="@firebase/analytics-compat",ut="@firebase/analytics",ct="@firebase/app-check-compat",dt="@firebase/app-check",ft="@firebase/auth",pt="@firebase/auth-compat",gt="@firebase/database",mt="@firebase/data-connect",yt="@firebase/database-compat",vt="@firebase/functions",wt="@firebase/functions-compat",bt="@firebase/installations",Et="@firebase/installations-compat",_t="@firebase/messaging",Tt="@firebase/messaging-compat",It="@firebase/performance",St="@firebase/performance-compat",At="@firebase/remote-config",Ct="@firebase/remote-config-compat",Dt="@firebase/storage",Nt="@firebase/storage-compat",kt="@firebase/firestore",xt="@firebase/vertexai-preview",Ot="@firebase/firestore-compat",Rt="firebase",Lt="[DEFAULT]",Pt={[st]:"fire-core",[lt]:"fire-core-compat",[ut]:"fire-analytics",[ht]:"fire-analytics-compat",[dt]:"fire-app-check",[ct]:"fire-app-check-compat",[ft]:"fire-auth",[pt]:"fire-auth-compat",[gt]:"fire-rtdb",[mt]:"fire-data-connect",[yt]:"fire-rtdb-compat",[vt]:"fire-fn",[wt]:"fire-fn-compat",[bt]:"fire-iid",[Et]:"fire-iid-compat",[_t]:"fire-fcm",[Tt]:"fire-fcm-compat",[It]:"fire-perf",[St]:"fire-perf-compat",[At]:"fire-rc",[Ct]:"fire-rc-compat",[Dt]:"fire-gcs",[Nt]:"fire-gcs-compat",[kt]:"fire-fst",[Ot]:"fire-fst-compat",[xt]:"fire-vertex","fire-js":"fire-js",[Rt]:"fire-js-all"},Mt=new Map,Ft=new Map,Vt=new Map;function Ut(t,e){try{t.container.addComponent(e)}catch(n){at.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jt(t){const e=t.name;if(Vt.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;Vt.set(e,t);for(const n of Mt.values())Ut(n,t);for(const n of Ft.values())Ut(n,t);return!0}
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
const Bt=new A("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class $t{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new x("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}
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
 */function qt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:Lt,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Bt.create("bad-app-name",{appName:String(r)});if(n||(n=_()),!n)throw Bt.create("no-options");const s=Mt.get(r);if(s){if(D(n,s.options)&&D(i,s.config))return s;throw Bt.create("duplicate-app",{appName:r})}const o=new L(r);for(const l of Vt.values())o.addComponent(l);const a=new $t(n,i,o);return Mt.set(r,a),a}function zt(t,e,n){var i;let r=null!==(i=Pt[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void at.warn(t.join(" "))}jt(new x(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
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
 */const Ht="firebase-heartbeat-store";let Kt=null;function Gt(){return Kt||(Kt=function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=J(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(J(o.result),t.oldVersion,t.newVersion,J(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(Ht)}catch(n){console.warn(n)}}}).catch((t=>{throw Bt.create("idb-open",{originalErrorMessage:t.message})}))),Kt}function Qt(t,e){return l(this,null,(function*(){try{const n=(yield Gt()).transaction(Ht,"readwrite"),i=n.objectStore(Ht);yield i.put(e,Xt(t)),yield n.done}catch(n){if(n instanceof S)at.warn(n.message);else{const t=Bt.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});at.warn(t.message)}}}))}function Xt(t){return`${t.name}!${t.options.appId}`}
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
 */class Wt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Jt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}triggerHeartbeat(){return l(this,null,(function*(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}catch(n){at.warn(n)}}))}getHeartbeatsHeader(){return l(this,null,(function*(){var t;try{if(null===this._heartbeatsCache&&(yield this._heartbeatsCachePromise),null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Yt(),{heartbeatsToSend:n,unsentEntries:i}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Zt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Zt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=y(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return at.warn(e),""}}))}}function Yt(){return(new Date).toISOString().substring(0,10)}class Jt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return l(this,null,(function*(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})).then((()=>!0)).catch((()=>!1))}))}read(){return l(this,null,(function*(){if(yield this._canUseIndexedDBPromise){const t=yield function(t){return l(this,null,(function*(){try{const e=(yield Gt()).transaction(Ht),n=yield e.objectStore(Ht).get(Xt(t));return yield e.done,n}catch(e){if(e instanceof S)at.warn(e.message);else{const t=Bt.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});at.warn(t.message)}}}))}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}))}overwrite(t){return l(this,null,(function*(){var e;if(yield this._canUseIndexedDBPromise){const n=yield this.read();return Qt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}))}add(t){return l(this,null,(function*(){var e;if(yield this._canUseIndexedDBPromise){const n=yield this.read();return Qt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}))}}function Zt(t){return y(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var te;te="",jt(new x("platform-logger",(t=>new rt(t)),"PRIVATE")),jt(new x("heartbeat",(t=>new Wt(t)),"PRIVATE")),zt(st,ot,te),zt(st,ot,"esm2017"),zt("fire-js","");var ee,ne="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(e^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function i(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}(e,(function(){this.blockSize=-1})),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var i=e-this.blockSize,r=this.B,s=this.h,o=0;o<e;){if(0==s)for(;o<=i;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(r[s++]=t.charCodeAt(o++),s==this.blockSize){n(this,r),s=0;break}}else for(;o<e;)if(r[s++]=t[o++],s==this.blockSize){n(this,r),s=0;break}}this.h=s,this.o+=e},e.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var r={};function s(t){return-128<=t&&128>t?function(t,e){var n=r;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new i([0|t],0>t?-1:0)})):new i([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(0>t)return d(o(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new i(e,0)}var a=s(0),l=s(1),h=s(16777216);function u(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function c(t){return-1==t.h}function d(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new i(n,~t.h).add(l)}function f(t,e){return t.add(d(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(u(e))throw Error("division by zero");if(u(t))return new g(a,a);if(c(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(c(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(30<t.g.length){if(c(t)||c(e))throw Error("slowDivide_ only works with positive integers.");for(var n=l,i=e;0>=i.l(t);)n=y(n),i=y(i);var r=v(n,1),s=v(i,1);for(i=v(i,2),n=v(n,2);!u(i);){var h=s.add(i);0>=h.l(t)&&(r=r.add(n),s=h),i=v(i,1),n=v(n,1)}return e=f(t,r.j(e)),new g(r,e)}for(r=a;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),h=(s=o(n)).j(e);c(h)||0<h.l(t);)h=(s=o(n-=i)).j(e);u(s)&&(s=l),r=r.add(s),t=f(t,h)}return new g(r,t)}function y(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new i(n,t.h)}function v(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],o=0;o<r;o++)s[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new i(s,t.h)}(t=i.prototype).m=function(){if(c(this))return-d(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.i(n);t+=(0<=i?i:4294967296+i)*e,e*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(u(this))return"0";if(c(this))return"-"+d(this).toString(t);for(var e=o(Math.pow(t,6)),n=this,i="";;){var r=m(n,e).g,s=((0<(n=f(n,r.j(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(u(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return c(t=f(this,t))?-1:u(t)?0:1},t.abs=function(){return c(this)?d(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var o=r+(65535&this.i(s))+(65535&t.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);r=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new i(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(u(this)||u(t))return a;if(c(this))return c(t)?d(this).j(d(t)):d(d(this).j(t));if(c(t))return d(this.j(d(t)));if(0>this.l(h)&&0>t.l(h))return o(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var l=this.i(r)>>>16,f=65535&this.i(r),g=t.i(s)>>>16,m=65535&t.i(s);n[2*r+2*s]+=f*m,p(n,2*r+2*s),n[2*r+2*s+1]+=l*m,p(n,2*r+2*s+1),n[2*r+2*s+1]+=f*g,p(n,2*r+2*s+1),n[2*r+2*s+2]+=l*g,p(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new i(n,0)},t.A=function(t){return m(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new i(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new i(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new i(n,this.h^t.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.A,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=o,i.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=o(Math.pow(n,8)),r=a,s=0;s<e.length;s+=8){var l=Math.min(8,e.length-s),h=parseInt(e.substring(s,s+l),n);8>l?(l=o(Math.pow(n,l)),r=r.j(l).add(o(h))):r=(r=r.j(i)).add(o(h))}return r},ee=i}).apply(void 0!==ne?ne:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var ie,re,se,oe,ae,le,he,ue,ce="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof ce&&ce];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(t,i){if(i)t:{var r=n;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in r))break t;r=r[o]}(i=i(s=r[t=t[t.length-1]]))!=s&&null!=i&&e(r,t,{configurable:!0,writable:!0,value:i})}}("Array.prototype.values",(function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,i=!1,r={next:function(){if(!i&&n<t.length){var r=n++;return{value:e(r,t[r]),done:!1}}return i=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r}(this,(function(t,e){return e}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var i=i||{},r=this||self;function s(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function l(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function h(t,e,n){return(h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:l).apply(null,arguments)}function u(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function c(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function d(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function f(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(s(e)){const n=t.length||0,i=e.length||0;t.length=n+i;for(let r=0;r<i;r++)t[n+r]=e[r]}else t.push(e)}}function p(t){return/^[\s\xa0]*$/.test(t)}function g(){var t=r.navigator;return t&&(t=t.userAgent)?t:""}function m(t){return m[" "](t),t}m[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function v(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function w(t){const e={};for(const n in t)e[n]=t[n];return e}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<b.length;e++)n=b[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function _(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function T(t){r.setTimeout((()=>{throw t}),0)}function I(){var t=N;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var S=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new A),(t=>t.reset()));class A{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let C,D=!1,N=new class{constructor(){this.h=this.g=null}add(t,e){const n=S.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},k=()=>{const t=r.Promise.resolve(void 0);C=()=>{t.then(x)}};var x=()=>{for(var t;t=I();){try{t.h.call(t.g)}catch(n){T(n)}var e=S;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}D=!1};function O(){this.s=this.s,this.C=this.C}function R(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}O.prototype.s=!1,O.prototype.ma=function(){this.s||(this.s=!0,this.N())},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},R.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!r.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};r.addEventListener("test",t,e),r.removeEventListener("test",t,e)}catch(n){}return t}();function P(t,e){if(R.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y){t:{try{m(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:M[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&P.aa.h.call(this)}}c(P,R);var M={2:"touch",3:"pen",4:"mouse"};P.prototype.h=function(){P.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),V=0;function U(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++V,this.da=this.fa=!1}function j(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function B(t){this.src=t,this.g={},this.h=0}function $(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=Array.prototype.indexOf.call(r,e,void 0);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(j(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function q(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}B.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=q(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new U(e,this.src,s,!!i,r)).fa=n,t.push(e)),e};var z="closure_lm_"+(1e6*Math.random()|0),H={};function K(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)K(t,e[s],n,i,r);return null}return n=Z(n),t&&t[F]?t.K(e,n,!!o(i)&&!!i.capture,r):function(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var a=o(r)?!!r.capture:!!r,l=Y(t);if(l||(t[z]=l=new B(t)),n=l.add(e,n,i,a,s),n.proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=W;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)L||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(X(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}(t,e,n,!1,i,r)}function G(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)G(t,e[s],n,i,r);else i=o(i)?!!i.capture:!!i,n=Z(n),t&&t[F]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=q(s=t.g[e],n,i,r))&&(j(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Y(t))&&(e=t.g[e.toString()],t=-1,e&&(t=q(e,n,i,r)),(n=-1<t?e[t]:null)&&Q(n))}function Q(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[F])$(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(X(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Y(e))?($(n,t),0==n.h&&(n.src=null,e[z]=null)):j(t)}}}function X(t){return t in H?H[t]:H[t]="on"+t}function W(t,e){if(t.da)t=!0;else{e=new P(e,this);var n=t.listener,i=t.ha||t.src;t.fa&&Q(t),t=n.call(i,e)}return t}function Y(t){return(t=t[z])instanceof B?t:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(t){return"function"==typeof t?t:(t[J]||(t[J]=function(e){return t.handleEvent(e)}),t[J])}function tt(){O.call(this),this.i=new B(this),this.M=this,this.F=null}function et(t,e){var n,i=t.F;if(i)for(n=[];i;i=i.F)n.push(i);if(t=t.M,i=e.type||e,"string"==typeof e)e=new R(e,t);else if(e instanceof R)e.target=e.target||t;else{var r=e;E(e=new R(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=nt(o,i,!0,e)&&r}if(r=nt(o=e.g=t,i,!0,e)&&r,r=nt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=nt(o=e.g=n[s],i,!1,e)&&r}function nt(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&$(t.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}function it(t,e,n){if("function"==typeof t)n&&(t=h(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=h(t.handleEvent,t)}return 2147483647<Number(e)?-1:r.setTimeout(t,e||0)}function rt(t){t.g=it((()=>{t.g=null,t.i&&(t.i=!1,rt(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}c(tt,O),tt.prototype[F]=!0,tt.prototype.removeEventListener=function(t,e,n,i){G(this,t,e,n,i)},tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)j(n[i]);delete e.g[t],e.h--}}this.F=null},tt.prototype.K=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},tt.prototype.L=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};class st extends O{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(t){O.call(this),this.h=t,this.g={}}c(ot,O);var at=[];function lt(t){v(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Q(t)}),t),t.g={}}ot.prototype.N=function(){ot.aa.N.call(this),lt(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ht=r.JSON.stringify,ut=r.JSON.parse,ct=class{stringify(t){return r.JSON.stringify(t,void 0)}parse(t){return r.JSON.parse(t,void 0)}};function dt(){}function ft(t){return t.h||(t.h=t.i())}function pt(){}dt.prototype.h=null;var gt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mt(){R.call(this,"d")}function yt(){R.call(this,"c")}c(mt,R),c(yt,R);var vt={},wt=null;function bt(){return wt=wt||new tt}function Et(t){R.call(this,vt.La,t)}function _t(t){const e=bt();et(e,new Et(e))}function Tt(t,e){R.call(this,vt.STAT_EVENT,t),this.stat=e}function It(t){const e=bt();et(e,new Tt(e,t))}function St(t,e){R.call(this,vt.Ma,t),this.size=e}function At(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return r.setTimeout((function(){t()}),e)}function Ct(){this.g=!0}function Dt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return ht(n)}catch(a){return e}}(t,n)+(i?" "+i:"")}))}vt.La="serverreachability",c(Et,R),vt.STAT_EVENT="statevent",c(Tt,R),vt.Ma="timingevent",c(St,R),Ct.prototype.xa=function(){this.g=!1},Ct.prototype.info=function(){};var Nt,kt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Ot(){}function Rt(t,e,n,i){this.j=t,this.i=e,this.l=n,this.R=i||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lt}function Lt(){this.i=null,this.g="",this.h=!1}c(Ot,dt),Ot.prototype.g=function(){return new XMLHttpRequest},Ot.prototype.i=function(){return{}},Nt=new Ot;var Pt={},Mt={};function Ft(t,e,n){t.L=1,t.v=ve(fe(e)),t.m=n,t.P=!0,Vt(t,null)}function Vt(t,e){t.F=Date.now(),Bt(t),t.A=fe(t.v);var n=t.A,i=t.R;Array.isArray(i)||(i=[String(i)]),xe(n.i,"t",i),t.C=0,n=t.j.J,t.h=new Lt,t.g=wn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new st(h(t.Y,t,t.g),t.O)),e=t.U,n=t.g,i=t.ca;var r="readystatechange";Array.isArray(r)||(r&&(at[0]=r.toString()),r=at);for(var s=0;s<r.length;s++){var o=K(n,r[s],i||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?w(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),_t(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.i,t.u,t.A,t.l,t.R,t.m)}function Ut(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function jt(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Mt:(n=Number(e.substring(n,i)),isNaN(n)?Pt:(i+=1)+n>e.length?Mt:(e=e.slice(i,i+n),t.C=i+n,e))}function Bt(t){t.S=Date.now()+t.I,$t(t,t.I)}function $t(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=At(h(t.ba,t),e)}function qt(t){t.B&&(r.clearTimeout(t.B),t.B=null)}function zt(t){0==t.j.G||t.J||pn(t.j,t)}function Ht(t){qt(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,lt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function Kt(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Yt(n.h,t)))if(!t.K&&Yt(n.h,t)&&3==n.G){try{var i=n.Da.g.parse(e)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fn(n),nn(n)}un(n),It(18)}}else n.za=r[1],0<n.za-n.T&&37500>r[2]&&n.F&&0==n.v&&!n.C&&(n.C=At(h(n.Za,n),6e3));if(1>=Wt(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else mn(n,11)}else if((t.K||n.g==t)&&fn(n),!p(e))for(r=n.Da.g.parse(e),e=0;e<r.length;e++){let h=r[e];if(n.T=h[0],h=h[1],2==n.G)if("c"==h[0]){n.K=h[1],n.ia=h[2];const e=h[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const r=h[4];null!=r&&(n.Aa=r,n.j.info("SVER="+n.Aa));const u=h[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.L=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const c=t.g;if(c){const t=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Jt(s,s.h),s.h=null))}if(i.D){const t=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.ya=t,ye(i.I,i.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=t;if((i=n).qa=vn(i,i.J?i.ia:null,i.W),o.K){Zt(i.h,o);var a=o,l=i.L;l&&(a.I=l),a.B&&(qt(a),Bt(a)),i.g=o}else hn(i);0<n.i.length&&sn(n)}else"stop"!=h[0]&&"close"!=h[0]||mn(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?mn(n,7):en(n):"noop"!=h[0]&&n.l&&n.l.ta(h),n.v=0)}_t()}catch(u){}}Rt.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==Ye(t)?e.j():this.Y(t)},Rt.prototype.Y=function(t){try{if(t==this.g)t:{const d=Ye(this.g);var e=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||Je(this.g)))){this.J||4!=d||7==e||_t(),qt(this);var n=this.g.Z();this.X=n;e:if(Ut(this)){var i=Je(this.g);t="";var s=i.length,o=4==Ye(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ht(this),zt(this);var a="";break e}this.h.i=new r.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:!(o&&e==s-1)});i.length=0,this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var u=l;break e}}u=null}if(!(n=u)){this.o=!1,this.s=3,It(12),Ht(this),zt(this);break t}Dt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kt(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<a.length;){if(t=jt(this,a),t==Mt){4==d&&(this.s=4,It(14),n=!1),Dt(this.i,this.l,null,"[Incomplete Response]");break}if(t==Pt){this.s=4,It(15),Dt(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Dt(this.i,this.l,t,null),Kt(this,t)}if(Ut(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,It(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),cn(c),c.M=!0,It(11))}}else Dt(this.i,this.l,a,"[Invalid Chunked Response]"),Ht(this),zt(this)}else Dt(this.i,this.l,a,null),Kt(this,a);4==d&&Ht(this),this.o&&!this.J&&(4==d?pn(this.j,this):(this.o=!1,Bt(this)))}else(function(t){const e={};t=(t.g&&2<=Ye(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(p(t[i]))continue;var n=_(t[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),Ht(this),zt(this)}}}catch(d){}},Rt.prototype.cancel=function(){this.J=!0,Ht(this)},Rt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.i,this.A),2!=this.L&&(_t(),It(17)),Ht(this),this.s=2,zt(this)):$t(this,this.S-t)};var Gt=class{constructor(t,e){this.g=t,this.map=e}};function Qt(t){this.l=t||10,r.PerformanceNavigationTiming?t=0<(t=r.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(r.chrome&&r.chrome.loadTimes&&r.chrome.loadTimes()&&r.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xt(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Wt(t){return t.h?1:t.g?t.g.size:0}function Yt(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Jt(t,e){t.g?t.g.add(e):t.h=e}function Zt(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function te(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return d(t.i)}function ee(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(s(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(s(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(s(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,o=0;o<r;o++)e.call(void 0,i[o],n&&n[o],t)}Qt.prototype.cancel=function(){if(this.i=te(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ne=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function de(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof de){this.h=t.h,pe(this,t.j),this.o=t.o,this.g=t.g,ge(this,t.s),this.l=t.l;var e=t.i,n=new Ce;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),me(this,n),this.m=t.m}else t&&(e=String(t).match(ne))?(this.h=!1,pe(this,e[1]||"",!0),this.o=we(e[2]||""),this.g=we(e[3]||"",!0),ge(this,e[4]),this.l=we(e[5]||"",!0),me(this,e[6]||"",!0),this.m=we(e[7]||"")):(this.h=!1,this.i=new Ce(null,this.h))}function fe(t){return new de(t)}function pe(t,e,n){t.j=n?we(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ge(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function me(t,e,n){e instanceof Ce?(t.i=e,function(t,e){e&&!t.j&&(De(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ne(this,e),xe(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=be(e,Se)),t.i=new Ce(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function ve(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function we(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function be(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ee),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ee(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}de.prototype.toString=function(){var t=[],e=this.j;e&&t.push(be(e,_e,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(be(e,_e,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(be(n,"/"==n.charAt(0)?Ie:Te,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",be(n,Ae)),t.join("")};var _e=/[#\/\?@]/g,Te=/[#\?:]/g,Ie=/[#\?]/g,Se=/[#\?@]/g,Ae=/#/g;function Ce(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function De(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ne(t,e){De(t),e=Oe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ke(t,e){return De(t),e=Oe(t,e),t.g.has(e)}function xe(t,e,n){Ne(t,e),0<n.length&&(t.i=null,t.g.set(Oe(t,e),d(n)),t.h+=n.length)}function Oe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Re(t,e,n,i,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),i(n)}catch(s){}}function Le(){this.g=new ct}function Pe(t,e,n){const i=n||"";try{ee(t,(function(t,n){let r=t;o(t)&&(r=ht(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Me(t){this.l=t.Ub||null,this.j=t.eb||!1}function Fe(t,e){tt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Ve(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function Ue(t){t.readyState=4,t.l=null,t.j=null,t.v=null,je(t)}function je(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Be(t){let e="";return v(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function $e(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Be(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ye(t,e,n))}function qe(t){tt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=Ce.prototype).add=function(t,e){De(this),this.i=null,t=Oe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){De(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},t.na=function(){De(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},t.V=function(t){De(this);let e=[];if("string"==typeof t)ke(this,t)&&(e=e.concat(this.g.get(Oe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return De(this),this.i=null,ke(this,t=Oe(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.V(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")},c(Me,dt),Me.prototype.g=function(){return new Fe(this.l,this.j)},Me.prototype.i=function(t){return function(){return t}}({}),c(Fe,tt),(t=Fe.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,je(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||r).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ue(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==r.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ve(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ue(this):je(this),3==this.readyState&&Ve(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,Ue(this))},t.Qa=function(t){this.g&&(this.response=t,Ue(this))},t.ga=function(){this.g&&Ue(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Fe.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),c(qe,tt);var ze=/^https?$/i,He=["POST","PUT"];function Ke(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,Ge(t),Xe(t)}function Ge(t){t.A||(t.A=!0,et(t,"complete"),et(t,"error"))}function Qe(t){if(t.h&&void 0!==i&&(!t.v[1]||4!=Ye(t)||2!=t.Z()))if(t.u&&4==Ye(t))it(t.Ea,0,t);else if(et(t,"readystatechange"),4==Ye(t)){t.h=!1;try{const i=t.Z();t:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===i){var o=String(t.D).match(ne)[1]||null;!o&&r.self&&r.self.location&&(o=r.self.location.protocol.slice(0,-1)),s=!ze.test(o?o.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var a=2<Ye(t)?t.g.statusText:""}catch(l){a=""}t.l=a+" ["+t.Z()+"]",Ge(t)}}finally{Xe(t)}}}function Xe(t,e){if(t.g){We(t);const i=t.g,r=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||et(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function We(t){t.I&&(r.clearTimeout(t.I),t.I=null)}function Ye(t){return t.g?t.g.readyState:0}function Je(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ze(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tn(t){this.Aa=0,this.i=[],this.j=new Ct,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ze("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ze("baseRetryDelayMs",5e3,t),this.cb=Ze("retryDelaySeedMs",1e4,t),this.Wa=Ze("forwardChannelMaxRetries",2,t),this.wa=Ze("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Qt(t&&t.concurrentRequestLimit),this.Da=new Le,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function en(t){if(rn(t),3==t.G){var e=t.U++,n=fe(t.I);if(ye(n,"SID",t.K),ye(n,"RID",e),ye(n,"TYPE","terminate"),an(t,n),(e=new Rt(t,t.j,e)).L=2,e.v=ve(fe(n)),n=!1,r.navigator&&r.navigator.sendBeacon)try{n=r.navigator.sendBeacon(e.v.toString(),"")}catch(i){}!n&&r.Image&&((new Image).src=e.v,n=!0),n||(e.g=wn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),Bt(e)}yn(t)}function nn(t){t.g&&(cn(t),t.g.cancel(),t.g=null)}function rn(t){nn(t),t.u&&(r.clearTimeout(t.u),t.u=null),fn(t),t.h.cancel(),t.s&&("number"==typeof t.s&&r.clearTimeout(t.s),t.s=null)}function sn(t){if(!Xt(t.h)&&!t.s){t.s=!0;var e=t.Ga;C||k(),D||(C(),D=!0),N.add(e,t),t.B=0}}function on(t,e){var n;n=e?e.l:t.U++;const i=fe(t.I);ye(i,"SID",t.K),ye(i,"RID",n),ye(i,"AID",t.T),an(t,i),t.m&&t.o&&$e(i,t.m,t.o),n=new Rt(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=ln(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Jt(t.h,n),Ft(n,i,e)}function an(t,e){t.H&&v(t.H,(function(t,n){ye(e,n,t)})),t.l&&ee({},(function(t,n){ye(e,n,t)}))}function ln(t,e,n){n=Math.min(t.i.length,n);var i=t.l?h(t.l.Na,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].g;const l=r[a].map;if(n-=e,0>n)e=Math.max(0,r[a].g-100),o=!1;else try{Pe(l,t,"req"+n+"_")}catch(s){i&&i(l)}}if(o){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function hn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;C||k(),D||(C(),D=!0),N.add(e,t),t.v=0}}function un(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=At(h(t.Fa,t),gn(t,t.v)),t.v++,!0)}function cn(t){null!=t.A&&(r.clearTimeout(t.A),t.A=null)}function dn(t){t.g=new Rt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=fe(t.qa);ye(e,"RID","rpc"),ye(e,"SID",t.K),ye(e,"AID",t.T),ye(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&ye(e,"TO",t.ja),ye(e,"TYPE","xmlhttp"),an(t,e),t.m&&t.o&&$e(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=ve(fe(e)),n.m=null,n.P=!0,Vt(n,t)}function fn(t){null!=t.C&&(r.clearTimeout(t.C),t.C=null)}function pn(t,e){var n=null;if(t.g==e){fn(t),cn(t),t.g=null;var i=2}else{if(!Yt(t.h,e))return;n=e.D,Zt(t.h,e),i=1}if(0!=t.G)if(e.o)if(1==i){n=e.m?e.m.length:0,e=Date.now()-e.F;var r=t.B;et(i=bt(),new St(i,n)),sn(t)}else hn(t);else if(3==(r=e.s)||0==r&&0<e.X||!(1==i&&function(t,e){return!(Wt(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=At(h(t.Ga,t,e),gn(t,t.B)),t.B++,0)))}(t,e)||2==i&&un(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:mn(t,5);break;case 4:mn(t,10);break;case 3:mn(t,6);break;default:mn(t,2)}}function gn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function mn(t,e){if(t.j.info("Error code "+e),2==e){var n=h(t.fb,t),i=t.Xa;const e=!i;i=new de(i||"//www.google.com/images/cleardot.gif"),r.location&&"http"==r.location.protocol||pe(i,"https"),ve(i),e?function(t,e){const n=new Ct;if(r.Image){const i=new Image;i.onload=u(Re,n,"TestLoadImage: loaded",!0,e,i),i.onerror=u(Re,n,"TestLoadImage: error",!1,e,i),i.onabort=u(Re,n,"TestLoadImage: abort",!1,e,i),i.ontimeout=u(Re,n,"TestLoadImage: timeout",!1,e,i),r.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(i.toString(),n):function(t,e){new Ct;const n=new AbortController,i=setTimeout((()=>{n.abort(),Re(0,0,!1,e)}),1e4);fetch(t,{signal:n.signal}).then((t=>{clearTimeout(i),t.ok?Re(0,0,!0,e):Re(0,0,!1,e)})).catch((()=>{clearTimeout(i),Re(0,0,!1,e)}))}(i.toString(),n)}else It(2);t.G=0,t.l&&t.l.sa(e),yn(t),rn(t)}function yn(t){if(t.G=0,t.ka=[],t.l){const e=te(t.h);0==e.length&&0==t.i.length||(f(t.ka,e),f(t.ka,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.ra()}}function vn(t,e,n){var i=n instanceof de?fe(n):new de(n);if(""!=i.g)e&&(i.g=e+"."+i.g),ge(i,i.s);else{var s=r.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var o=new de(null);i&&pe(o,i),e&&(o.g=e),s&&ge(o,s),n&&(o.l=n),i=o}return n=t.D,e=t.ya,n&&e&&ye(i,n,e),ye(i,"VER",t.la),an(t,i),i}function wn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ca&&!t.pa?new qe(new Me({eb:n})):new qe(t.pa)).Ha(t.J),e}function bn(){}function En(){}function _n(t,e){tt.call(this),this.g=new tn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!p(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!p(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Sn(this)}function Tn(t){mt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function In(){yt.call(this),this.status=1}function Sn(t){this.g=t}(t=qe.prototype).Ha=function(t){this.J=t},t.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nt.g(),this.v=this.o?ft(this.o):ft(Nt),this.g.onreadystatechange=h(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void Ke(this,o)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=r.FormData&&t instanceof r.FormData,!(0<=Array.prototype.indexOf.call(He,e,void 0))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,a]of n)this.g.setRequestHeader(r,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{We(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){Ke(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Xe(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xe(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qe(this):this.bb())},t.bb=function(){Qe(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<Ye(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ut(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=tn.prototype).la=8,t.G=1,t.connect=function(t,e,n,i){It(0),this.W=t,this.H=e||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.I=vn(this,null,this.W),sn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Rt(this,this.j,t);let s=this.o;if(this.S&&(s?(s=w(s),E(s,this.S)):s=this.S),null!==this.m||this.O||(r.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ln(this,r,e),ye(n=fe(this.I),"RID",t),ye(n,"CVER",22),this.D&&ye(n,"X-HTTP-Session-Id",this.D),an(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Be(s)))+"&"+e:this.m&&$e(n,this.m,s)),Jt(this.h,r),this.Ua&&ye(n,"TYPE","init"),this.P?(ye(n,"$req",e),ye(n,"SID","null"),r.T=!0,Ft(r,n,null)):Ft(r,n,e),this.G=2}}else 3==this.G&&(t?on(this,t):0==this.i.length||Xt(this.h)||on(this))},t.Fa=function(){if(this.u=null,dn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=At(h(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),nn(this),dn(this))},t.Za=function(){null!=this.C&&(this.C=null,nn(this),un(this),It(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=bn.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},En.prototype.g=function(t,e){return new _n(t,e)},c(_n,tt),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){en(this.g)},_n.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.u&&((n={}).__data__=ht(t),t=n);e.i.push(new Gt(e.Ya++,t)),3==e.G&&sn(e)},_n.prototype.N=function(){this.g.l=null,delete this.j,en(this.g),delete this.g,_n.aa.N.call(this)},c(Tn,mt),c(In,yt),c(Sn,bn),Sn.prototype.ua=function(){et(this.g,"a")},Sn.prototype.ta=function(t){et(this.g,new Tn(t))},Sn.prototype.sa=function(t){et(this.g,new In)},Sn.prototype.ra=function(){et(this.g,"b")},En.prototype.createWebChannel=En.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,ue=function(){return new En},he=function(){return bt()},le=vt,ae={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kt.NO_ERROR=0,kt.TIMEOUT=8,kt.HTTP_ERROR=6,oe=kt,xt.COMPLETE="complete",se=xt,pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",tt.prototype.listen=tt.prototype.K,re=pt,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,ie=qe}).apply(void 0!==ce?ce:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const de="@firebase/firestore";
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
 */class fe{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");
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
let pe="10.14.0";
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
 */const ge=new B("@firebase/firestore");function me(){return ge.logLevel}function ye(t,...e){if(ge.logLevel<=P.DEBUG){const n=e.map(be);ge.debug(`Firestore (${pe}): ${t}`,...n)}}function ve(t,...e){if(ge.logLevel<=P.ERROR){const n=e.map(be);ge.error(`Firestore (${pe}): ${t}`,...n)}}function we(t,...e){if(ge.logLevel<=P.WARN){const n=e.map(be);ge.warn(`Firestore (${pe}): ${t}`,...n)}}function be(t){if("string"==typeof t)return t;try{
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
return e=t,JSON.stringify(e)}catch(n){return t}var e}
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
 */function Ee(t="Unexpected state"){const e=`FIRESTORE (${pe}) INTERNAL ASSERTION FAILED: `+t;throw ve(e),new Error(e)}function _e(t,e){t||Ee()}function Te(t,e){return t}
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
 */const Ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Se extends S{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Ae{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class Ce{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class De{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(fe.UNAUTHENTICATED)))}shutdown(){}}class Ne{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ke{constructor(t){this.t=t,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){_e(void 0===this.o);let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ae,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((()=>l(this,null,(function*(){yield e.promise,yield i(this.currentUser)}))))},o=t=>{ye("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ye("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ae)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ye("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(_e("string"==typeof e.accessToken),new Ce(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return _e(null===t||"string"==typeof t),new fe(t)}}class xe{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Oe{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new xe(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(fe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Re{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Le{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){_e(void 0===this.o);const n=t=>{null!=t.error&&ye("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,ye("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{ye("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):ye("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(_e("string"==typeof t.token),this.R=t.token,new Re(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
 */function Pe(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
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
 */class Me{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=Pe(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%62))}return n}}function Fe(t,e){return t<e?-1:t>e?1:0}function Ve(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
 */class Ue{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Se(Ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Se(Ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Se(Ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Se(Ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ue.fromMillis(Date.now())}static fromDate(t){return Ue.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ue(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Fe(this.nanoseconds,t.nanoseconds):Fe(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class je{constructor(t){this.timestamp=t}static fromTimestamp(t){return new je(t)}static min(){return new je(new Ue(0,0))}static max(){return new je(new Ue(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Be{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ee(),void 0===n?n=t.length-e:n>t.length-e&&Ee(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Be.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Be?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class $e extends Be{construct(t,e,n){return new $e(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Se(Ie.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new $e(e)}static emptyPath(){return new $e([])}}const qe=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Be{construct(t,e,n){return new ze(t,e,n)}static isValidIdentifier(t){return qe.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ze(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Se(Ie.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Se(Ie.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Se(Ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Se(Ie.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ze(e)}static emptyPath(){return new ze([])}}
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
 */class He{constructor(t){this.path=t}static fromPath(t){return new He($e.fromString(t))}static fromName(t){return new He($e.fromString(t).popFirst(5))}static empty(){return new He($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===$e.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return $e.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new He(new $e(t.slice()))}}function Ke(t){return new Ge(t.readTime,t.key,-1)}class Ge{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ge(je.min(),He.empty(),-1)}static max(){return new Ge(je.max(),He.empty(),-1)}}function Qe(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=He.comparator(t.documentKey,e.documentKey),0!==n?n:Fe(t.largestBatchId,e.largestBatchId)
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
 */)}class Xe{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */function We(t){return l(this,null,(function*(){if(t.code!==Ie.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;ye("LocalStore","Unexpectedly lost primary lease")}))}
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
 */class Ye{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ye(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ye?e:Ye.resolve(e)}catch(e){return Ye.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ye.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ye.reject(e)}static resolve(t){return new Ye(((e,n)=>{e(t)}))}static reject(t){return new Ye(((e,n)=>{n(t)}))}static waitFor(t){return new Ye(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=Ye.resolve(!1);for(const n of t)e=e.next((t=>t?Ye.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new Ye(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;e(t[l]).next((t=>{s[l]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new Ye(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}function Je(t){return"IndexedDbTransactionError"===t.name}
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
 */class Ze{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function tn(t){return null==t}function en(t){return 0===t&&1/t==-1/0}
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
function nn(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sn(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */Ze.oe=-1;class on{constructor(t,e){this.comparator=t,this.root=e||ln.EMPTY}insert(t,e){return new on(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ln.BLACK,null,null))}remove(t){return new on(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ln.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new an(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new an(this.root,t,this.comparator,!1)}getReverseIterator(){return new an(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new an(this.root,t,this.comparator,!0)}}class an{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ln{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:ln.RED,this.left=null!=i?i:ln.EMPTY,this.right=null!=r?r:ln.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new ln(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ln.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return ln.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee();if(this.right.isRed())throw Ee();const t=this.left.check();if(t!==this.right.check())throw Ee();return t+(this.isRed()?0:1)}}ln.EMPTY=null,ln.RED=!0,ln.BLACK=!1,ln.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(t,e,n,i,r){return this}insert(t,e,n){return new ln(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class hn{constructor(t){this.comparator=t,this.data=new on(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new un(this.data.getIterator())}getIteratorFrom(t){return new un(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof hn))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new hn(this.comparator);return e.data=t,e}}class un{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */class cn{constructor(t){this.fields=t,t.sort(ze.comparator)}static empty(){return new cn([])}unionWith(t){let e=new hn(ze.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new cn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ve(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class dn extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class fn{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new dn("Invalid base64 string: "+e):e}}(t);return new fn(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new fn(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Fe(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}fn.EMPTY_BYTE_STRING=new fn("");const pn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(t){if(_e(!!t),"string"==typeof t){let e=0;const n=pn.exec(t);if(_e(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:mn(t.seconds),nanos:mn(t.nanos)}}function mn(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function yn(t){return"string"==typeof t?fn.fromBase64String(t):fn.fromUint8Array(t)}
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
 */function vn(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function wn(t){const e=t.mapValue.fields.__previous_value__;return vn(e)?wn(e):e}function bn(t){const e=gn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}
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
 */class En{constructor(t,e,n,i,r,s,o,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class _n{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new _n("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof _n&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Tn={};function In(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vn(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
 */(t)?9007199254740991:function(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(t)?10:11:Ee()}function Sn(t,e){if(t===e)return!0;const n=In(t);if(n!==In(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bn(t).isEqual(bn(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=gn(t.timestampValue),i=gn(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,yn(t.bytesValue).isEqual(yn(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return mn(t.geoPointValue.latitude)===mn(e.geoPointValue.latitude)&&mn(t.geoPointValue.longitude)===mn(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return mn(t.integerValue)===mn(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=mn(t.doubleValue),i=mn(e.doubleValue);return n===i?en(n)===en(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Ve(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(nn(n)!==nn(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Sn(n[r],i[r])))return!1;return!0}(t,e);default:return Ee()}var i}function An(t,e){return void 0!==(t.values||[]).find((t=>Sn(t,e)))}function Cn(t,e){if(t===e)return 0;const n=In(t),i=In(e);if(n!==i)return Fe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fe(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=mn(t.integerValue||t.doubleValue),i=mn(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Dn(t.timestampValue,e.timestampValue);case 4:return Dn(bn(t),bn(e));case 5:return Fe(t.stringValue,e.stringValue);case 6:return function(t,e){const n=yn(t),i=yn(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=Fe(n[r],i[r]);if(0!==t)return t}return Fe(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Fe(mn(t.latitude),mn(e.latitude));return 0!==n?n:Fe(mn(t.longitude),mn(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Nn(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,i,r,s;const o=t.fields||{},a=e.fields||{},l=null===(n=o.value)||void 0===n?void 0:n.arrayValue,h=null===(i=a.value)||void 0===i?void 0:i.arrayValue,u=Fe((null===(r=null==l?void 0:l.values)||void 0===r?void 0:r.length)||0,(null===(s=null==h?void 0:h.values)||void 0===s?void 0:s.length)||0);return 0!==u?u:Nn(l,h)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Tn&&e===Tn)return 0;if(t===Tn)return 1;if(e===Tn)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=Fe(i[o],s[o]);if(0!==t)return t;const e=Cn(n[i[o]],r[s[o]]);if(0!==e)return e}return Fe(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Ee()}}function Dn(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Fe(t,e);const n=gn(t),i=gn(e),r=Fe(n.seconds,i.seconds);return 0!==r?r:Fe(n.nanos,i.nanos)}function Nn(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=Cn(n[r],i[r]);if(t)return t}return Fe(n.length,i.length)}function kn(t){return xn(t)}function xn(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=gn(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yn(t.bytesValue).toBase64():"referenceValue"in t?function(t){return He.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=xn(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${xn(t.fields[r])}`;return n+"}"}(t.mapValue):Ee()}function On(t){return!!t&&"integerValue"in t}function Rn(t){return!!t&&"arrayValue"in t}function Ln(t){return!!t&&"mapValue"in t}function Pn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rn(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Pn(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pn(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Mn{constructor(t){this.value=t}static empty(){return new Mn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ln(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pn(e)}setAll(t){let e=ze.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=Pn(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Ln(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Sn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Ln(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){rn(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new Mn(Pn(this.value))}}function Fn(t){const e=[];return rn(t.fields,((t,n)=>{const i=new ze([t]);if(Ln(n)){const t=Fn(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new cn(e)
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
 */}class Vn{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Vn(t,0,je.min(),je.min(),je.min(),Mn.empty(),0)}static newFoundDocument(t,e,n,i){return new Vn(t,1,e,je.min(),n,i,0)}static newNoDocument(t,e){return new Vn(t,2,e,je.min(),je.min(),Mn.empty(),0)}static newUnknownDocument(t,e){return new Vn(t,3,e,je.min(),je.min(),Mn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(je.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=je.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Vn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Vn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Un{constructor(t,e){this.position=t,this.inclusive=e}}function jn(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?He.comparator(He.fromName(o.referenceValue),n.key):Cn(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Bn(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}
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
 */class $n{constructor(t,e="asc"){this.field=t,this.dir=e}}function qn(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class zn{}class Hn extends zn{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Jn(t,e,n):"array-contains"===e?new ni(t,n):"in"===e?new ii(t,n):"not-in"===e?new ri(t,n):"array-contains-any"===e?new si(t,n):new Hn(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Zn(t,n):new ti(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Cn(e,this.value)):null!==e&&In(this.value)===In(e)&&this.matchesComparison(Cn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends zn{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Kn(t,e)}matches(t){return Gn(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gn(t){return"and"===t.op}function Qn(t){return function(t){for(const e of t.filters)if(e instanceof Kn)return!1;return!0}(t)&&Gn(t)}function Xn(t){if(t instanceof Hn)return t.field.canonicalString()+t.op.toString()+kn(t.value);if(Qn(t))return t.filters.map((t=>Xn(t))).join(",");{const e=t.filters.map((t=>Xn(t))).join(",");return`${t.op}(${e})`}}function Wn(t,e){return t instanceof Hn?(n=t,(i=e)instanceof Hn&&n.op===i.op&&n.field.isEqual(i.field)&&Sn(n.value,i.value)):t instanceof Kn?function(t,e){return e instanceof Kn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&Wn(n,e.filters[i])),!0)}(t,e):void Ee();var n,i}function Yn(t){return t instanceof Hn?`${(e=t).field.canonicalString()} ${e.op} ${kn(e.value)}`:t instanceof Kn?function(t){return t.op.toString()+" {"+t.getFilters().map(Yn).join(" ,")+"}"}(t):"Filter";var e}class Jn extends Hn{constructor(t,e,n){super(t,e,n),this.key=He.fromName(n.referenceValue)}matches(t){const e=He.comparator(t.key,this.key);return this.matchesComparison(e)}}class Zn extends Hn{constructor(t,e){super(t,"in",e),this.keys=ei("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ti extends Hn{constructor(t,e){super(t,"not-in",e),this.keys=ei("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ei(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>He.fromName(t.referenceValue)))}class ni extends Hn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Rn(e)&&An(e.arrayValue,this.value)}}class ii extends Hn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&An(this.value.arrayValue,e)}}class ri extends Hn{constructor(t,e){super(t,"not-in",e)}matches(t){if(An(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!An(this.value.arrayValue,e)}}class si extends Hn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Rn(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>An(this.value.arrayValue,t)))}}
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
 */class oi{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ue=null}}function ai(t,e=null,n=[],i=[],r=null,s=null,o=null){return new oi(t,e,n,i,r,s,o)}function li(t){const e=Te(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Xn(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),tn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>kn(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>kn(t))).join(",")),e.ue=t}return e.ue}function hi(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qn(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wn(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bn(t.startAt,e.startAt)&&Bn(t.endAt,e.endAt)}
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
 */class ui{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ci(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function di(t){const e=Te(t);if(null===e.ce){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new hn(ze.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new $n(i,n))})),t.has(ze.keyField().canonicalString())||e.ce.push(new $n(ze.keyField(),n))}return e.ce}function fi(t){const e=Te(t);return e.le||(e.le=function(t,e){if("F"===t.limitType)return ai(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new $n(t.field,e)}));const n=t.endAt?new Un(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Un(t.startAt.position,t.startAt.inclusive):null;return ai(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}(e,di(t))),e.le}function pi(t,e,n){return new ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gi(t,e){return hi(fi(t),fi(e))&&t.limitType===e.limitType}function mi(t){return`${li(fi(t))}|lt:${t.limitType}`}function yi(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Yn(t))).join(", ")}]`),tn(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>kn(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>kn(t))).join(",")),`Target(${e})`}(fi(t))}; limitType=${t.limitType})`}function vi(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):He.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of di(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=jn(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,di(n),i)||n.endAt&&!function(t,e,n){const i=jn(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,di(n),i)));var n,i}function wi(t,e,n){const i=t.field.isKeyField()?He.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Cn(i,r):Ee()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Ee()}}
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
 */class bi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){rn(this.inner,((e,n)=>{for(const[i,r]of n)t(i,r)}))}isEmpty(){return sn(this.inner)}size(){return this.innerSize}}
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
 */const Ei=new on(He.comparator);function _i(){return Ei}const Ti=new on(He.comparator);function Ii(...t){let e=Ti;for(const n of t)e=e.insert(n.key,n);return e}function Si(t){let e=Ti;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ai(){return Di()}function Ci(){return Di()}function Di(){return new bi((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ni=new on(He.comparator),ki=new hn(He.comparator);function xi(...t){let e=ki;for(const n of t)e=e.add(n);return e}const Oi=new hn(Fe);
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
function Ri(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:en(e)?"-0":e}}function Li(t){return{integerValue:""+t}}function Pi(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!en(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Li(e):Ri(t,e)}
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
 */class Mi{constructor(){this._=void 0}}function Fi(t,e,n){return t instanceof ji?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&vn(e)&&(e=wn(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Bi?$i(t,e):t instanceof qi?zi(t,e):function(t,e){const n=Ui(t,e),i=Ki(n)+Ki(t.Pe);return On(n)&&On(t.Pe)?Li(i):Ri(t.serializer,i)}(t,e)}function Vi(t,e,n){return t instanceof Bi?$i(t,e):t instanceof qi?zi(t,e):n}function Ui(t,e){return t instanceof Hi?On(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null;var n,i}class ji extends Mi{}class Bi extends Mi{constructor(t){super(),this.elements=t}}function $i(t,e){const n=Gi(e);for(const i of t.elements)n.some((t=>Sn(t,i)))||n.push(i);return{arrayValue:{values:n}}}class qi extends Mi{constructor(t){super(),this.elements=t}}function zi(t,e){let n=Gi(e);for(const i of t.elements)n=n.filter((t=>!Sn(t,i)));return{arrayValue:{values:n}}}class Hi extends Mi{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ki(t){return mn(t.integerValue||t.doubleValue)}function Gi(t){return Rn(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Qi{constructor(t,e){this.version=t,this.transformResults=e}}class Xi{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xi}static exists(t){return new Xi(void 0,t)}static updateTime(t){return new Xi(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Wi(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Yi{}function Ji(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new lr(t.key,Xi.none()):new ir(t.key,t.data,Xi.none());{const n=t.data,i=Mn.empty();let r=new hn(ze.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new rr(t.key,i,new cn(r.toArray()),Xi.none())}}function Zi(t,e,n){var i;t instanceof ir?function(t,e,n){const i=t.value.clone(),r=or(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof rr?function(t,e,n){if(!Wi(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=or(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(sr(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):(i=n,e.convertToNoDocument(i.version).setHasCommittedMutations())}function tr(t,e,n,i){return t instanceof ir?function(t,e,n,i){if(!Wi(t.precondition,e))return n;const r=t.value.clone(),s=ar(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof rr?function(t,e,n,i){if(!Wi(t.precondition,e))return n;const r=ar(t.fieldTransforms,i,e),s=e.data;return s.setAll(sr(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):(r=e,s=n,Wi(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):s);var r,s}function er(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=Ui(i.transform,t||null);null!=r&&(null===n&&(n=Mn.empty()),n.set(i.field,r))}return n||null}function nr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Ve(n,i,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof Bi&&i instanceof Bi||n instanceof qi&&i instanceof qi?Ve(n.elements,i.elements,Sn):n instanceof Hi&&i instanceof Hi?Sn(n.Pe,i.Pe):n instanceof ji&&i instanceof ji);var n,i}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,i}class ir extends Yi{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rr extends Yi{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function sr(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function or(t,e,n){const i=new Map;_e(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Vi(o,a,n[r]))}return i}function ar(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,Fi(t,s,e))}return i}class lr extends Yi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hr extends Yi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class ur{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&Zi(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=tr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=tr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ci();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=Ji(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(je.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),xi())}isEqual(t){return this.batchId===t.batchId&&Ve(this.mutations,t.mutations,((t,e)=>nr(t,e)))&&Ve(this.baseMutations,t.baseMutations,((t,e)=>nr(t,e)))}}class cr{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){_e(t.mutations.length===n.length);let i=function(){return Ni}();const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new cr(t,e,n,i)}}
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
 */class dr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */var fr,pr;(pr=fr||(fr={}))[pr.OK=0]="OK",pr[pr.CANCELLED=1]="CANCELLED",pr[pr.UNKNOWN=2]="UNKNOWN",pr[pr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pr[pr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pr[pr.NOT_FOUND=5]="NOT_FOUND",pr[pr.ALREADY_EXISTS=6]="ALREADY_EXISTS",pr[pr.PERMISSION_DENIED=7]="PERMISSION_DENIED",pr[pr.UNAUTHENTICATED=16]="UNAUTHENTICATED",pr[pr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pr[pr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pr[pr.ABORTED=10]="ABORTED",pr[pr.OUT_OF_RANGE=11]="OUT_OF_RANGE",pr[pr.UNIMPLEMENTED=12]="UNIMPLEMENTED",pr[pr.INTERNAL=13]="INTERNAL",pr[pr.UNAVAILABLE=14]="UNAVAILABLE",pr[pr.DATA_LOSS=15]="DATA_LOSS",
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
new ee([4294967295,4294967295],0);class gr{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function mr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yr(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vr(t,e){return mr(t,e.toTimestamp())}function wr(t){return _e(!!t),je.fromTimestamp(function(t){const e=gn(t);return new Ue(e.seconds,e.nanos)}(t))}function br(t,e){return Er(t,e).canonicalString()}function Er(t,e){const n=(i=t,new $e(["projects",i.projectId,"databases",i.database])).child("documents");var i;return void 0===e?n:n.child(e)}function _r(t,e){return br(t.databaseId,e.path)}function Tr(t){const e=function(t){const e=$e.fromString(t);return _e(function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */(e)),e}(t);return 4===e.length?$e.emptyPath():function(t){return _e(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}(e)}function Ir(t,e,n){return{name:_r(t,e),fields:n.value.mapValue.fields}}function Sr(t){let e=Tr(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){_e(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Ar(t);return e instanceof Kn&&Qn(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new $n(Cr((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,tn(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Un(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new Un(n,e)}(n.endAt)),function(t,e,n,i,r,s,o,a){return new ui(t,e,n,i,r,s,o,a)}(e,r,o,s,a,"F",l,h)}function Ar(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Cr(t.unaryFilter.field);return Hn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Cr(t.unaryFilter.field);return Hn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cr(t.unaryFilter.field);return Hn.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Cr(t.unaryFilter.field);return Hn.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(t):void 0!==t.fieldFilter?(e=t,Hn.create(Cr(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(e.fieldFilter.op),e.fieldFilter.value)):void 0!==t.compositeFilter?function(t){return Kn.create(t.compositeFilter.filters.map((t=>Ar(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Ee()}}(t.compositeFilter.op))}(t):Ee();var e}function Cr(t){return ze.fromServerFormat(t.fieldPath)}function Dr(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}class Nr{constructor(t){this.ct=t}}function kr(t){const e=Sr({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?pi(e,e.limit,"L"):e}
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
 */class xr{constructor(){this.un=new Or}addToCollectionParentIndex(t,e){return this.un.add(e),Ye.resolve()}getCollectionParents(t,e){return Ye.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return Ye.resolve()}deleteFieldIndex(t,e){return Ye.resolve()}deleteAllFieldIndexes(t){return Ye.resolve()}createTargetIndexes(t,e){return Ye.resolve()}getDocumentsMatchingTarget(t,e){return Ye.resolve(null)}getIndexType(t,e){return Ye.resolve(0)}getFieldIndexes(t,e){return Ye.resolve([])}getNextCollectionGroupToUpdate(t){return Ye.resolve(null)}getMinOffset(t,e){return Ye.resolve(Ge.min())}getMinOffsetFromCollectionGroup(t,e){return Ye.resolve(Ge.min())}updateCollectionGroup(t,e,n){return Ye.resolve()}updateIndexEntries(t,e){return Ye.resolve()}}class Or{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new hn($e.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new hn($e.comparator)).toArray()}}
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
 */class Rr{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Rr(0)}static kn(){return new Rr(-1)}}
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
 */class Lr{constructor(){this.changes=new bi((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Vn.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ye.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
 */class Pr{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Mr{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&tr(n.mutation,t,cn.empty(),Ue.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,xi()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=xi()){const i=Ai();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Ii();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ai();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,xi())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=_i();const s=Di(),o=Di();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof rr)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),tr(o.mutation,e,o.mutation.getFieldMask(),Ue.now())):s.set(e.key,cn.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Pr(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Di();let i=new on(((t,e)=>t-e)),r=xi();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||cn.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||xi()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,h=Ci();l.forEach((t=>{if(!r.has(t)){const i=Ji(e.get(t),n.get(t));null!==i&&h.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,h))}return Ye.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return r=e,He.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i);var r}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):Ye.resolve(Ai());let o=-1,a=r;return s.next((e=>Ye.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Ye.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,xi()))).next((t=>({batchId:o,changes:Si(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new He(e)).next((t=>{let e=Ii();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=Ii();return this.indexManager.getCollectionParents(t,r).next((o=>Ye.forEach(o,(o=>{const a=(l=e,h=o.child(r),new ui(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,h;return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i)))).next((t=>{r.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,Vn.newInvalidDocument(i)))}));let n=Ii();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&tr(s.mutation,i,cn.empty(),Ue.now()),vi(e,i)&&(n=n.insert(t,i))})),n}))}}
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
 */class Fr{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return Ye.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,{id:(n=e).id,version:n.version,createTime:wr(n.createTime)}),Ye.resolve();var n}getNamedQuery(t,e){return Ye.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,{name:(n=e).name,query:kr(n.bundledQuery),readTime:wr(n.readTime)}),Ye.resolve();var n}}
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
 */class Vr{constructor(){this.overlays=new on(He.comparator),this.Ir=new Map}getOverlay(t,e){return Ye.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ai();return Ye.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ht(t,e,i)})),Ye.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Ir.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ir.delete(n)),Ye.resolve()}getOverlaysForCollection(t,e,n){const i=Ai(),r=e.length+1,s=new He(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return Ye.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new on(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Ai(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ai(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return Ye.resolve(o)}ht(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new dr(e,n));let r=this.Ir.get(e);void 0===r&&(r=xi(),this.Ir.set(e,r)),this.Ir.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ur{constructor(){this.sessionToken=fn.EMPTY_BYTE_STRING}getSessionToken(t){return Ye.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Ye.resolve()}}
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
 */class jr{constructor(){this.Tr=new hn(Br.Er),this.dr=new hn(Br.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new Br(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Vr(new Br(t,e))}mr(t,e){t.forEach((t=>this.removeReference(t,e)))}gr(t){const e=new He(new $e([])),n=new Br(e,t),i=new Br(e,t+1),r=[];return this.dr.forEachInRange([n,i],(t=>{this.Vr(t),r.push(t.key)})),r}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new He(new $e([])),n=new Br(e,t),i=new Br(e,t+1);let r=xi();return this.dr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Br(t,0),n=this.Tr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Br{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return He.comparator(t.key,e.key)||Fe(t.wr,e.wr)}static Ar(t,e){return Fe(t.wr,e.wr)||He.comparator(t.key,e.key)}}
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
 */class $r{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new hn(Br.Er)}checkEmpty(t){return Ye.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ur(r,e,n,i);this.mutationQueue.push(s);for(const o of i)this.br=this.br.add(new Br(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ye.resolve(s)}lookupMutationBatch(t,e){return Ye.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.vr(n),r=i<0?0:i;return Ye.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Ye.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(t){return Ye.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Br(e,0),i=new Br(e,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([n,i],(t=>{const e=this.Dr(t.wr);r.push(e)})),Ye.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new hn(Fe);return e.forEach((t=>{const e=new Br(t,0),i=new Br(t,Number.POSITIVE_INFINITY);this.br.forEachInRange([e,i],(t=>{n=n.add(t.wr)}))})),Ye.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;He.isDocumentKey(r)||(r=r.child(""));const s=new Br(new He(r),0);let o=new hn(Fe);return this.br.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.wr)),!0)}),s),Ye.resolve(this.Cr(o))}Cr(t){const e=[];return t.forEach((t=>{const n=this.Dr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){_e(0===this.Fr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Ye.forEach(e.mutations,(i=>{const r=new Br(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.br=n}))}On(t){}containsKey(t,e){const n=new Br(e,0),i=this.br.firstAfterOrEqual(n);return Ye.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ye.resolve()}Fr(t,e){return this.vr(t)}vr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class qr{constructor(t){this.Mr=t,this.docs=new on(He.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ye.resolve(n?n.document.mutableCopy():Vn.newInvalidDocument(e))}getEntries(t,e){let n=_i();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Vn.newInvalidDocument(t))})),Ye.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=_i();const s=e.path,o=new He(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Qe(Ke(o),n)<=0||(i.has(o.key)||vi(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Ye.resolve(r)}getAllFromCollectionGroup(t,e,n,i){Ee()}Or(t,e){return Ye.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new zr(this)}getSize(t){return Ye.resolve(this.size)}}class zr extends Lr{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(n)})),Ye.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}
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
 */class Hr{constructor(t){this.persistence=t,this.Nr=new bi((t=>li(t)),hi),this.lastRemoteSnapshotVersion=je.min(),this.highestTargetId=0,this.Lr=0,this.Br=new jr,this.targetCount=0,this.kr=Rr.Bn()}forEachTarget(t,e){return this.Nr.forEach(((t,n)=>e(n))),Ye.resolve()}getLastRemoteSnapshotVersion(t){return Ye.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ye.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),Ye.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),Ye.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Rr(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,Ye.resolve()}updateTargetData(t,e){return this.Kn(e),Ye.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,Ye.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Nr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Nr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),Ye.waitFor(r).next((()=>i))}getTargetCount(t){return Ye.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return Ye.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),Ye.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),Ye.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),Ye.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return Ye.resolve(n)}containsKey(t,e){return Ye.resolve(this.Br.containsKey(e))}}
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
 */class Kr{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ze(0),this.Kr=!1,this.Kr=!0,this.$r=new Ur,this.referenceDelegate=t(this),this.Ur=new Hr(this),this.indexManager=new xr,this.remoteDocumentCache=new qr((t=>this.referenceDelegate.Wr(t))),this.serializer=new Nr(e),this.Gr=new Fr(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Vr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new $r(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){ye("MemoryPersistence","Starting transaction:",t);const i=new Gr(this.Qr.next());return this.referenceDelegate.zr(),n(i).next((t=>this.referenceDelegate.jr(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Hr(t,e){return Ye.or(Object.values(this.qr).map((n=>()=>n.containsKey(t,e))))}}class Gr extends Xe{constructor(t){super(),this.currentSequenceNumber=t}}class Qr{constructor(t){this.persistence=t,this.Jr=new jr,this.Yr=null}static Zr(t){return new Qr(t)}get Xr(){if(this.Yr)return this.Yr;throw Ee()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),Ye.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),Ye.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),Ye.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((t=>this.Xr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ye.forEach(this.Xr,(n=>{const i=He.fromPath(n);return this.ei(t,i).next((t=>{t||e.removeEntry(i,je.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((t=>{t?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return Ye.or([()=>Ye.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}
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
 */class Xr{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=i}static Wi(t,e){let n=xi(),i=xi();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Xr(t,e.fromCache,n,i)}}
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
 */class Yr{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=I()?8:function(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.Yi(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.Zi(t,e,i,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new Wr;return this.Xi(t,e,n).next((i=>{if(r.result=i,this.zi)return this.es(t,e,n,i.size)}))})).next((()=>r.result))}es(t,e,n,i){return n.documentReadCount<this.ji?(me()<=P.DEBUG&&ye("QueryEngine","SDK will not create cache indexes for query:",yi(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Ye.resolve()):(me()<=P.DEBUG&&ye("QueryEngine","Query:",yi(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(me()<=P.DEBUG&&ye("QueryEngine","The SDK decides to create cache indexes for query:",yi(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,fi(e))):Ye.resolve())}Yi(t,e){if(ci(e))return Ye.resolve(null);let n=fi(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=pi(e,null,"F"),n=fi(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=xi(...i);return this.Ji.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.ts(e,i);return this.ns(e,s,r,n.readTime)?this.Yi(t,pi(e,null,"F")):this.rs(t,s,e,n)}))))})))))}Zi(t,e,n,i){return ci(e)||i.isEqual(je.min())?Ye.resolve(null):this.Ji.getDocuments(t,n).next((r=>{const s=this.ts(e,r);return this.ns(e,s,n,i)?Ye.resolve(null):(me()<=P.DEBUG&&ye("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yi(e)),this.rs(t,s,e,function(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=je.fromTimestamp(1e9===i?new Ue(n+1,0):new Ue(n,i));return new Ge(r,He.empty(),e)}(i,-1)).next((t=>t)))}))}ts(t,e){let n=new hn(function(t){return(e,n)=>{let i=!1;for(const r of di(t)){const t=wi(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}(t));return e.forEach(((e,i)=>{vi(t,i)&&(n=n.add(i))})),n}ns(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(t,e,n){return me()<=P.DEBUG&&ye("QueryEngine","Using full collection scan to execute query:",yi(e)),this.Ji.getDocumentsMatchingQuery(t,e,Ge.min(),n)}rs(t,e,n,i){return this.Ji.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class Jr{constructor(t,e,n,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new on(Fe),this._s=new bi((t=>li(t)),hi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Mr(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}function Zr(t,e){return l(this,null,(function*(){const n=Te(t);return yield n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.ls(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=xi();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({hs:t,removedBatchIds:r,addedBatchIds:s})))}))}))}))}function ts(t,e){const n=Te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class es{constructor(){this.activeTargetIds=Oi}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ns{constructor(){this.so=new es,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new es,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class is{_o(t){}shutdown(){}}
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
 */class rs{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ye("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){ye("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let ss=null;function os(){return null===ss?ss=268435456+Math.round(2147483648*Math.random()):ss++,"0x"+ss.toString(16)
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
 */}const as={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class ls{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}
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
 */const hs="WebChannelConnection";class us extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=e+"://"+t.host,this.vo=`projects/${n}/databases/${i}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Fo(){return!1}Mo(t,e,n,i,r){const s=os(),o=this.xo(t,e.toUriEncodedString());ye("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,i,r),this.No(t,o,a,n).then((e=>(ye("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw we("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Lo(t,e,n,i,r,s){return this.Mo(t,e,n,i,r)}Oo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+pe,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}xo(t,e){const n=as[t];return`${this.Do}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,i){const r=os();return new Promise(((s,o)=>{const a=new ie;a.setWithCredentials(!0),a.listenOnce(se.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case oe.NO_ERROR:const e=a.getResponseJson();ye(hs,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case oe.TIMEOUT:ye(hs,`RPC '${t}' ${r} timed out`),o(new Se(Ie.DEADLINE_EXCEEDED,"Request time out"));break;case oe.HTTP_ERROR:const n=a.getStatus();if(ye(hs,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ie).indexOf(e)>=0?e:Ie.UNKNOWN}(e.status);o(new Se(t,e.message))}else o(new Se(Ie.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Se(Ie.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{ye(hs,`RPC '${t}' ${r} completed.`)}}));const l=JSON.stringify(i);ye(hs,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",l,n,15)}))}Bo(t,e,n){const i=os(),r=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=ue(),o=he(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const h=r.join("");ye(hs,`Creating RPC '${t}' stream ${i}: ${h}`,a);const u=s.createWebChannel(h,a);let c=!1,d=!1;const f=new ls({Io:e=>{d?ye(hs,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(c||(ye(hs,`Opening RPC '${t}' stream ${i} transport.`),u.open(),c=!0),ye(hs,`RPC '${t}' stream ${i} sending:`,e),u.send(e))},To:()=>u.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,re.EventType.OPEN,(()=>{d||(ye(hs,`RPC '${t}' stream ${i} transport opened.`),f.yo())})),p(u,re.EventType.CLOSE,(()=>{d||(d=!0,ye(hs,`RPC '${t}' stream ${i} transport closed`),f.So())})),p(u,re.EventType.ERROR,(e=>{d||(d=!0,we(hs,`RPC '${t}' stream ${i} transport errored:`,e),f.So(new Se(Ie.UNAVAILABLE,"The operation could not be completed")))})),p(u,re.EventType.MESSAGE,(e=>{var n;if(!d){const r=e.data[0];_e(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ye(hs,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=fr[t];if(void 0!==e)return function(t){if(void 0===t)return ve("GRPC error has no .code"),Ie.UNKNOWN;switch(t){case fr.OK:return Ie.OK;case fr.CANCELLED:return Ie.CANCELLED;case fr.UNKNOWN:return Ie.UNKNOWN;case fr.DEADLINE_EXCEEDED:return Ie.DEADLINE_EXCEEDED;case fr.RESOURCE_EXHAUSTED:return Ie.RESOURCE_EXHAUSTED;case fr.INTERNAL:return Ie.INTERNAL;case fr.UNAVAILABLE:return Ie.UNAVAILABLE;case fr.UNAUTHENTICATED:return Ie.UNAUTHENTICATED;case fr.INVALID_ARGUMENT:return Ie.INVALID_ARGUMENT;case fr.NOT_FOUND:return Ie.NOT_FOUND;case fr.ALREADY_EXISTS:return Ie.ALREADY_EXISTS;case fr.PERMISSION_DENIED:return Ie.PERMISSION_DENIED;case fr.FAILED_PRECONDITION:return Ie.FAILED_PRECONDITION;case fr.ABORTED:return Ie.ABORTED;case fr.OUT_OF_RANGE:return Ie.OUT_OF_RANGE;case fr.UNIMPLEMENTED:return Ie.UNIMPLEMENTED;case fr.DATA_LOSS:return Ie.DATA_LOSS;default:return Ee()}}(e)}(e),r=o.message;void 0===n&&(n=Ie.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),d=!0,f.So(new Se(n,r)),u.close()}else ye(hs,`RPC '${t}' stream ${i} received:`,r),f.bo(r)}})),p(o,le.STAT_EVENT,(e=>{e.stat===ae.PROXY?ye(hs,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===ae.NOPROXY&&ye(hs,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.wo()}),0),f}}function cs(){return"undefined"!=typeof document?document:null}
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
 */function ds(t){return new gr(t,!0)}
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
 */class fs{constructor(t,e,n=1e3,i=1.5,r=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-n);i>0&&ye("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
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
 */class ps{constructor(t,e,n,i,r,s,o,a){this.ui=t,this.Ho=n,this.Jo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new fs(t,e)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}stop(){return l(this,null,(function*(){this.n_()&&(yield this.close(0))}))}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}__(){return l(this,null,(function*(){if(this.r_())return this.close(0)}))}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}close(t,e){return l(this,null,(function*(){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==t?this.t_.reset():e&&e.code===Ie.RESOURCE_EXHAUSTED?(ve(e.toString()),ve("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===Ie.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,yield this.listener.mo(e)}))}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Yo===e&&this.P_(t,n)}),(e=>{t((()=>{const t=new Se(Ie.UNKNOWN,"Fetching auth token failed: "+e.message);return this.I_(t)}))}))}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((t=>{n((()=>this.I_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.e_?this.E_(t):this.onNext(t)))}))}i_(){this.state=5,this.t_.Go((()=>l(this,null,(function*(){this.state=0,this.start()}))))}I_(t){return ye("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(ye("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gs extends ps{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return _e(!!t.streamToken),this.lastStreamToken=t.streamToken,_e(!t.writeResults||0===t.writeResults.length),this.listener.f_()}onNext(t){_e(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=function(t,e){return t&&t.length>0?(_e(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?wr(t.updateTime):wr(e);return n.isEqual(je.min())&&(n=wr(e)),new Qi(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=wr(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=function(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof ir)n={update:Ir(t,e.key,e.value)};else if(e instanceof lr)n={delete:_r(t,e.key)};else if(e instanceof rr)n={update:Ir(t,e.key,e.data),updateMask:Dr(e.fieldMask)};else{if(!(e instanceof hr))return Ee();n={verify:_r(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof ji)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Bi)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof qi)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Hi)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw Ee()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(r=e.precondition).updateTime?{updateTime:vr(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:Ee())),n;var i,r}(this.serializer,t)))};this.a_(e)}}
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
 */class ms extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Se(Ie.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.Mo(t,Er(e,n),i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Se(Ie.UNKNOWN,t.toString())}))}Lo(t,e,n,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Lo(t,Er(e,n),i,s,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Se(Ie.UNKNOWN,t.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class ys{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,"Online"===t&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ve(e),this.D_=!1):ye("OnlineStateTracker",e)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
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
 */class vs{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o((t=>{n.enqueueAndForget((()=>l(this,null,(function*(){Es(this)&&(ye("RemoteStore","Restarting streams for network reachability change."),yield function(t){return l(this,null,(function*(){const e=Te(t);e.L_.add(4),yield bs(e),e.q_.set("Unknown"),e.L_.delete(4),yield ws(e)}))}(this))}))))})),this.q_=new ys(n,i)}}function ws(t){return l(this,null,(function*(){if(Es(t))for(const e of t.B_)yield e(!0)}))}function bs(t){return l(this,null,(function*(){for(const e of t.B_)yield e(!1)}))}function Es(t){return 0===Te(t).L_.size}function _s(t,e,n){return l(this,null,(function*(){if(!Je(e))throw e;t.L_.add(1),yield bs(t),t.q_.set("Offline"),n||(n=()=>function(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}(t.localStore)),t.asyncQueue.enqueueRetryable((()=>l(this,null,(function*(){ye("RemoteStore","Retrying IndexedDB access"),yield n(),t.L_.delete(1),yield ws(t)}))))}))}function Ts(t,e){return e().catch((n=>_s(t,n,e)))}function Is(t){return l(this,null,(function*(){const e=Te(t),n=Ls(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Ss(e);)try{const t=yield ts(e.localStore,i);if(null===t){0===e.O_.length&&n.o_();break}i=t.batchId,As(e,t)}catch(r){yield _s(e,r)}Cs(e)&&Ds(e)}))}function Ss(t){return Es(t)&&t.O_.length<10}function As(t,e){t.O_.push(e);const n=Ls(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Cs(t){return Es(t)&&!Ls(t).n_()&&t.O_.length>0}function Ds(t){Ls(t).start()}function Ns(t){return l(this,null,(function*(){Ls(t).p_()}))}function ks(t){return l(this,null,(function*(){const e=Ls(t);for(const n of t.O_)e.m_(n.mutations)}))}function xs(t,e,n){return l(this,null,(function*(){const i=t.O_.shift(),r=cr.from(i,e,n);yield Ts(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),yield Is(t)}))}function Os(t,e){return l(this,null,(function*(){e&&Ls(t).V_&&(yield function(t,e){return l(this,null,(function*(){if(function(t){switch(t){default:return Ee();case Ie.CANCELLED:case Ie.UNKNOWN:case Ie.DEADLINE_EXCEEDED:case Ie.RESOURCE_EXHAUSTED:case Ie.INTERNAL:case Ie.UNAVAILABLE:case Ie.UNAUTHENTICATED:return!1;case Ie.INVALID_ARGUMENT:case Ie.NOT_FOUND:case Ie.ALREADY_EXISTS:case Ie.PERMISSION_DENIED:case Ie.FAILED_PRECONDITION:case Ie.ABORTED:case Ie.OUT_OF_RANGE:case Ie.UNIMPLEMENTED:case Ie.DATA_LOSS:return!0}}(n=e.code)&&n!==Ie.ABORTED){const n=t.O_.shift();Ls(t).s_(),yield Ts(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),yield Is(t)}var n}))}(t,e)),Cs(t)&&Ds(t)}))}function Rs(t,e){return l(this,null,(function*(){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),ye("RemoteStore","RemoteStore received new credentials");const i=Es(n);n.L_.add(3),yield bs(n),i&&n.q_.set("Unknown"),yield n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),yield ws(n)}))}function Ls(t){return t.U_||(t.U_=function(t,e,n){const i=Te(t);return i.w_(),new gs(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ns.bind(null,t),mo:Os.bind(null,t),f_:ks.bind(null,t),g_:xs.bind(null,t)}),t.B_.push((e=>l(this,null,(function*(){e?(t.U_.s_(),yield Is(t)):(yield t.U_.stop(),t.O_.length>0&&(ye("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))}))))),t.U_
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
 */}class Ps{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Ps(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Se(Ie.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ms(t,e){if(ve("AsyncQueue",`${e}: ${t}`),Je(t))return new Se(Ie.UNAVAILABLE,`${e}: ${t}`);throw t}class Fs{constructor(){this.queries=Vs(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(t,e){const n=Te(t),i=n.queries;n.queries=Vs(),i.forEach(((t,n)=>{for(const i of n.j_)i.onError(e)}))}(this,new Se(Ie.ABORTED,"Firestore shutting down"))}}function Vs(){return new bi((t=>mi(t)),gi)}var Us,js;(js=Us||(Us={})).ea="default",js.Cache="cache";class Bs{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new bi((t=>mi(t)),gi),this.Ma=new Map,this.xa=new Set,this.Oa=new on(He.comparator),this.Na=new Map,this.La=new jr,this.Ba={},this.ka=new Map,this.qa=Rr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}function $s(t,e,n){return l(this,null,(function*(){const i=function(t){const e=Te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zs.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hs.bind(null,e),e}(t);try{const t=yield function(t,e){const n=Te(t),i=Ue.now(),r=e.reduce(((t,e)=>t.add(e.key)),xi());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=_i(),l=xi();return n.cs.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=er(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new rr(t.key,e,Fn(e.value.mapValue),Xi.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Si(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Ba[t.currentUser.toKey()];i||(i=new on(Fe)),i=i.insert(e,n),t.Ba[t.currentUser.toKey()]=i}(i,t.batchId,n),yield Qs(i,t.changes),yield Is(i.remoteStore)}catch(r){const t=Ms(r,"Failed to persist write");n.reject(t)}}))}function qs(t,e,n){const i=Te(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Fa.forEach(((n,i)=>{const r=i.view.Z_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Te(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const r of n.j_)r.Z_(e)&&(i=!0)})),i&&function(t){t.Y_.forEach((t=>{t.next()}))}(n)}(i.eventManager,e),t.length&&i.Ca.d_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}function zs(t,e){return l(this,null,(function*(){const n=Te(t),i=e.batch.batchId;try{const t=yield function(t,e){const n=Te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.cs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=Ye.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);_e(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=xi();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);Gs(n,i,null),Ks(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),yield Qs(n,t)}catch(r){yield We(r)}}))}function Hs(t,e,n){return l(this,null,(function*(){const i=Te(t);try{const t=yield function(t,e){const n=Te(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(_e(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Gs(i,e,n),Ks(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),yield Qs(i,t)}catch(r){yield We(r)}}))}function Ks(t,e){(t.ka.get(e)||[]).forEach((t=>{t.resolve()})),t.ka.delete(e)}function Gs(t,e,n){const i=Te(t);let r=i.Ba[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.Ba[i.currentUser.toKey()]=r}}function Qs(t,e,n){return l(this,null,(function*(){const i=Te(t),r=[],s=[],o=[];i.Fa.isEmpty()||(i.Fa.forEach(((t,a)=>{o.push(i.Ka(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient){const e=t?!t.fromCache:void 0;i.sharedClientState.updateQueryState(a.targetId,e?"current":"not-current")}if(t){r.push(t);const e=Xr.Wi(a.targetId,t);s.push(e)}})))})),yield Promise.all(o),i.Ca.d_(r),yield function(t,e){return l(this,null,(function*(){const n=Te(t);try{yield n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ye.forEach(e,(e=>Ye.forEach(e.$i,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Ye.forEach(e.Ui,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(i){if(!Je(i))throw i;ye("LocalStore","Failed to update sequence numbers: "+i)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.os.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.os=n.os.insert(e,r)}}}))}(i.localStore,s))}))}function Xs(t,e){return l(this,null,(function*(){const n=Te(t);if(!n.currentUser.isEqual(e)){ye("SyncEngine","User change. New user:",e.toKey());const t=yield Zr(n.localStore,e);n.currentUser=e,r="'waitForPendingWrites' promise is rejected due to a user change.",(i=n).ka.forEach((t=>{t.forEach((t=>{t.reject(new Se(Ie.CANCELLED,r))}))})),i.ka.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),yield Qs(n,t.hs)}var i,r}))}class Ws{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(t){return l(this,null,(function*(){this.serializer=ds(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),yield this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}))}ja(t,e){return null}Ha(t,e){return null}za(t){return function(t,e,n,i){return new Jr(t,e,n,i)}(this.persistence,new Yr,t.initialUser,this.serializer)}Ga(t){return new Kr(Qr.Zr,this.serializer)}Wa(t){return new ns}terminate(){return l(this,null,(function*(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()}))}}Ws.provider={build:()=>new Ws};class Ys{initialize(t,e){return l(this,null,(function*(){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>qs(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xs.bind(null,this.syncEngine),yield function(t,e){return l(this,null,(function*(){const n=Te(t);e?(n.L_.delete(2),yield ws(n)):e||(n.L_.add(2),yield bs(n),n.q_.set("Unknown"))}))}(this.remoteStore,this.syncEngine.isPrimaryClient))}))}createEventManager(t){return new Fs}createDatastore(t){const e=ds(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new us(i));var i;return function(t,e,n,i){return new ms(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>qs(this.syncEngine,t,0),s=rs.D()?new rs:new is,new vs(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Bs(t,e,n,i,r,s);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return l(this,null,(function*(){var t,e;yield function(t){return l(this,null,(function*(){const e=Te(t);ye("RemoteStore","RemoteStore shutting down."),e.L_.add(5),yield bs(e),e.k_.shutdown(),e.q_.set("Unknown")}))}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}))}}Ys.provider={build:()=>new Ys};
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
class Js{constructor(t,e,n,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=fe.UNAUTHENTICATED,this.clientId=Me.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(n,(t=>l(this,null,(function*(){ye("FirestoreClient","Received user=",t.uid),yield this.authCredentialListener(t),this.user=t})))),this.appCheckCredentials.start(n,(t=>(ye("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((()=>l(this,null,(function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ms(e,"Failed to shutdown persistence");t.reject(n)}})))),t.promise}}function Zs(t,e){return l(this,null,(function*(){t.asyncQueue.verifyOperationInProgress(),ye("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;yield e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((t=>l(this,null,(function*(){i.isEqual(t)||(yield Zr(e.localStore,t),i=t)})))),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}))}function to(t,e){return l(this,null,(function*(){t.asyncQueue.verifyOperationInProgress();const n=yield function(t){return l(this,null,(function*(){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ye("FirestoreClient","Using user provided OfflineComponentProvider");try{yield Zs(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!("FirebaseError"===(n=r).name?n.code===Ie.FAILED_PRECONDITION||n.code===Ie.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw r;we("Error using user provided cache. Falling back to memory cache: "+r),yield Zs(t,new Ws)}}else ye("FirestoreClient","Using default OfflineComponentProvider"),yield Zs(t,new Ws);var n;return t._offlineComponents}))}(t);ye("FirestoreClient","Initializing OnlineComponentProvider"),yield e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>Rs(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Rs(e.remoteStore,n))),t._onlineComponents=e}))}function eo(t){return function(t){return l(this,null,(function*(){return t._onlineComponents||(t._uninitializedComponentsProvider?(ye("FirestoreClient","Using user provided OnlineComponentProvider"),yield to(t,t._uninitializedComponentsProvider._online)):(ye("FirestoreClient","Using default OnlineComponentProvider"),yield to(t,new Ys))),t._onlineComponents}))}(t).then((t=>t.syncEngine))}
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
 */function no(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const io=new Map;
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
 */function ro(t,e,n){if(!n)throw new Se(Ie.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function so(t){if(!He.isDocumentKey(t))throw new Se(Ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function oo(t){if(He.isDocumentKey(t))throw new Se(Ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ao(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Ee()}function lo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Se(Ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ao(t);throw new Se(Ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
 */class ho{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Se(Ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Se(Ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new Se(Ie.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=no(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Se(Ie.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Se(Ie.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Se(Ie.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class uo{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ho({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Se(Ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Se(Ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ho(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new De;switch(t.type){case"firstParty":return new Oe(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Se(Ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return l(this,null,(function*(){"notTerminated"===this._terminateTask?yield this._terminate():this._terminateTask="notTerminated"}))}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=io.get(t);e&&(ye("ComponentProvider","Removing Datastore"),io.delete(t),e.terminate())}(this),Promise.resolve()}}function co(t,e,n,i={}){var r;const s=(t=lo(t,uo))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&we("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=fe.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[y(JSON.stringify({alg:"none",type:"JWT"})),y(JSON.stringify(s)),""].join(".")}
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
 */(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Se(Ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new fe(s)}t._authCredentials=new Ne(new Ce(e,n))}}
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
 */class fo{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new fo(this.firestore,t,this._query)}}class po{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new go(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new po(this.firestore,t,this._key)}}class go extends fo{constructor(t,e,n){super(t,e,function(t){return new ui(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new po(this.firestore,null,new He(t))}withConverter(t){return new go(this.firestore,t,this._path)}}
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
class mo{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new fs(this,"async_queue_retry"),this.Vu=()=>{const t=cs();t&&ye("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()},this.mu=t;const e=cs();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=cs();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise((()=>{}));const e=new Ae;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Pu.push(t),this.pu())))}pu(){return l(this,null,(function*(){if(0!==this.Pu.length){try{yield this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Je(t))throw t;ye("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}))}gu(t){const e=this.mu.then((()=>(this.du=!0,t().catch((t=>{this.Eu=t,this.du=!1;throw ve("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.du=!1,t))))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Ps.createAndSchedule(this,t,e,n,(t=>this.yu(t)));return this.Tu.push(i),i}fu(){this.Eu&&Ee()}verifyOperationInProgress(){}wu(){return l(this,null,(function*(){let t;do{t=this.mu,yield t}while(t!==this.mu)}))}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then((()=>{this.Tu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Tu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.wu()}))}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class yo extends uo{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new mo,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return l(this,null,(function*(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new mo(t),this._firestoreClient=void 0,yield t}}))}}function vo(t){if(t._terminated)throw new Se(Ie.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||function(t){var e,n,i;const r=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",l=t._persistenceKey,h=r,new En(o,a,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,no(h.experimentalLongPollingOptions),h.useFetchStreams));var o,a,l,h;t._componentsProvider||(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new Js(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
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
 */(t),t._firestoreClient}class wo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wo(fn.fromBase64String(t))}catch(e){throw new Se(Ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new wo(fn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class bo{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Se(Ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
 */class Eo{constructor(t){this._methodName=t}}
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
 */class _o{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Se(Ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Se(Ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Fe(this._lat,t._lat)||Fe(this._long,t._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class To{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
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
 */const Io=/^__.*__$/;class So{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new rr(t,this.data,this.fieldMask,e,this.fieldTransforms):new ir(t,this.data,e,this.fieldTransforms)}}function Ao(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class Co{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Co(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.Ou(t),i}Nu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Fo(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(0===t.length)throw this.Bu("Document fields must not be empty");if(Ao(this.Cu)&&Io.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Do{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ds(t)}Qu(t,e,n,i=!1){return new Co({Cu:t,methodName:e,qu:n,path:ze.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function No(t){const e=t._freezeSettings(),n=ds(t._databaseId);return new Do(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ko(t,e,n,i,r,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,r);Lo("Data must be an object, but it was:",o,i);const a=Oo(i,o);let l,h;if(s.merge)l=new cn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Po(e,i,n);if(!o.contains(r))throw new Se(Ie.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Vo(t,r)||t.push(r)}l=new cn(t),h=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,h=o.fieldTransforms;return new So(new Mn(a),l,h)}function xo(t,e){if(Ro(t=k(t)))return Lo("Unsupported field value:",e,t),Oo(t,e);if(t instanceof Eo)return function(t,e){if(!Ao(e.Cu))throw e.Bu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Bu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&4!==e.Cu)throw e.Bu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=xo(r,e.Lu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=k(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Pi(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ue.fromDate(t);return{timestampValue:mr(e.serializer,n)}}if(t instanceof Ue){const n=new Ue(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:mr(e.serializer,n)}}if(t instanceof _o)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof wo)return{bytesValue:yr(e.serializer,t._byteString)};if(t instanceof po){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Bu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:br(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof To)return n=e,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw n.Bu("VectorValues must only contain numeric values.");return Ri(n.serializer,t)}))}}}}};var n;throw e.Bu(`Unsupported field value: ${ao(t)}`)}(t,e)}function Oo(t,e){const n={};return sn(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rn(t,((t,i)=>{const r=xo(i,e.Mu(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Ro(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof _o||t instanceof wo||t instanceof po||t instanceof Eo||t instanceof To)}function Lo(t,e,n){if(!Ro(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=ao(n);throw"an object"===i?e.Bu(t+" a custom object"):e.Bu(t+" "+i)}var i}function Po(t,e,n){if((e=k(e))instanceof bo)return e._internalPath;if("string"==typeof e)return function(t,e,n){if(e.search(Mo)>=0)throw Fo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bo(...e.split("."))._internalPath}catch(i){throw Fo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e);throw Fo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Mo=new RegExp("[~\\*/\\[\\]]");function Fo(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new Se(Ie.INVALID_ARGUMENT,a+t+l)}function Vo(t,e){return t.some((t=>t.isEqual(e)))}
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
 */function Uo(t,e){const n=lo(t.firestore,yo),i=function(t,e,...n){if(t=k(t),1===arguments.length&&(e=Me.newId()),ro("doc","path",e),t instanceof uo){const i=$e.fromString(e,...n);return so(i),new po(t,null,new He(i))}{if(!(t instanceof po||t instanceof go))throw new Se(Ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child($e.fromString(e,...n));return so(i),new po(t.firestore,t instanceof go?t.converter:null,new He(i))}}(t),r=function(t,e){let n;return n=t?t.toFirestore(e):e,n}(t.converter,e);return function(t,e){return function(t,e){const n=new Ae;return t.asyncQueue.enqueueAndForget((()=>l(this,null,(function*(){return $s(yield eo(t),e,n)})))),n.promise}(vo(t),e)}(n,[ko(No(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,Xi.exists(!1))]).then((()=>i))}!function(t,e=!0){pe="10.14.1",jt(new x("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new yo(new ke(t.getProvider("auth-internal")),new Le(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Se(Ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _n(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),zt(de,"4.7.3",t),zt(de,"4.7.3","esm2017")}();
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
zt("firebase","10.14.1","app");const jo=function(t){const e="string"==typeof t?t:"(default)",n=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}("object"==typeof t?t:function(t=Lt){const e=Mt.get(t);if(!e&&t===Lt&&_())return qt();if(!e)throw Bt.create("no-app",{appName:t});return e}(),"firestore").getImmediate({identifier:e});if(!n._initialized){const t=E("firestore");t&&co(n,...t)}return n}(qt({apiKey:"AIzaSyAdTBOPaW-qAM_JmL59sdsW3K55alD_oQ4",authDomain:"technoshop-30562.firebaseapp.com",projectId:"technoshop-30562",storageBucket:"technoshop-30562.appspot.com",messagingSenderId:"1068260008340",appId:"1:1068260008340:web:54127b00a70b4a2cb46f81"})),Bo=()=>{const[t,e]=c.useState(""),[n,i]=c.useState(!1),{carrito:r,precioTotal:s,vaciarCarrito:o}=c.useContext(h),{register:f,handleSubmit:p,formState:{errors:g}}=d();return t?u.jsxs("div",{className:"checkout-success",children:[u.jsx("h1",{children:"¡Gracias por tu compra!"}),u.jsxs("div",{className:"success-content",children:[u.jsx("div",{className:"success-icon",children:"✓"}),u.jsx("p",{children:"Tu pedido ha sido procesado correctamente"}),u.jsxs("p",{className:"order-number",children:["Número de pedido: ",u.jsx("span",{children:t})]}),u.jsx("p",{className:"order-info",children:"Te enviaremos un correo electrónico con los detalles de tu pedido"})]})]}):u.jsxs("div",{className:"checkout-container",children:[u.jsx("h1",{className:"checkout-title",children:"Finalizar Compra"}),u.jsxs("div",{className:"checkout-content",children:[u.jsxs("div",{className:"checkout-form-container",children:[u.jsx("h2",{children:"Información de Contacto"}),u.jsxs("form",{className:"checkout-form",onSubmit:p((t=>l(void 0,null,(function*(){i(!0);try{const n={cliente:t,productos:r,total:s(),fecha:(new Date).toISOString()},i=function(t,e,...n){if(t=k(t),ro("collection","path",e),t instanceof uo){const i=$e.fromString(e,...n);return oo(i),new go(t,null,i)}{if(!(t instanceof po||t instanceof go))throw new Se(Ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child($e.fromString(e,...n));return oo(i),new go(t.firestore,null,i)}}(jo,"pedidos"),a=yield Uo(i,n);e(a.id),o()}catch(n){console.error("Error al procesar el pedido:",n)}finally{i(!1)}})))),children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"nombre",children:"Nombre completo"}),u.jsx("input",a({id:"nombre",type:"text",placeholder:"Ingresa tu nombre completo"},f("nombre",{required:"El nombre es requerido",minLength:{value:2,message:"El nombre debe tener al menos 2 caracteres"}}))),g.nombre&&u.jsx("span",{className:"error-message",children:g.nombre.message})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"email",children:"Correo electrónico"}),u.jsx("input",a({id:"email",type:"email",placeholder:"Ingresa tu correo electrónico"},f("email",{required:"El correo electrónico es requerido",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Correo electrónico inválido"}}))),g.email&&u.jsx("span",{className:"error-message",children:g.email.message})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"telefono",children:"Teléfono"}),u.jsx("input",a({id:"telefono",type:"tel",placeholder:"Ingresa tu número de teléfono"},f("telefono",{required:"El teléfono es requerido",pattern:{value:/^[0-9\s\-\+]{10,}$/,message:"Número de teléfono inválido"}}))),g.telefono&&u.jsx("span",{className:"error-message",children:g.telefono.message})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"direccion",children:"Dirección de envío"}),u.jsx("input",a({id:"direccion",type:"text",placeholder:"Ingresa tu dirección completa"},f("direccion",{required:"La dirección es requerida",minLength:{value:10,message:"La dirección debe tener al menos 10 caracteres"}}))),g.direccion&&u.jsx("span",{className:"error-message",children:g.direccion.message})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"ciudad",children:"Ciudad"}),u.jsx("input",a({id:"ciudad",type:"text",placeholder:"Ingresa tu ciudad"},f("ciudad",{required:"La ciudad es requerida"}))),g.ciudad&&u.jsx("span",{className:"error-message",children:g.ciudad.message})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"codigoPostal",children:"Código Postal"}),u.jsx("input",a({id:"codigoPostal",type:"text",placeholder:"Ingresa tu código postal"},f("codigoPostal",{required:"El código postal es requerido",pattern:{value:/^[0-9]{5,}$/,message:"Código postal inválido"}}))),g.codigoPostal&&u.jsx("span",{className:"error-message",children:g.codigoPostal.message})]}),u.jsx("button",{className:"checkout-button",type:"submit",disabled:n,children:n?"Procesando...":"Finalizar Compra"})]})]}),u.jsxs("div",{className:"checkout-summary",children:[u.jsx("h2",{children:"Resumen del Pedido"}),r.map((t=>u.jsxs("div",{className:"checkout-item",children:[u.jsxs("div",{className:"checkout-item-info",children:[u.jsx("span",{className:"checkout-item-name",children:t.title}),u.jsxs("span",{className:"checkout-item-quantity",children:["x",t.cantidad]})]}),u.jsxs("span",{className:"checkout-item-price",children:["$",(t.price*t.cantidad).toLocaleString()]})]},t.id))),u.jsxs("div",{className:"checkout-total",children:[u.jsx("span",{className:"checkout-total-label",children:"Total"}),u.jsxs("span",{className:"checkout-total-amount",children:["$",s().toLocaleString()]})]})]})]})]})};export{Bo as default};
//# sourceMappingURL=Checkout-Cj1Pr66o.js.map
