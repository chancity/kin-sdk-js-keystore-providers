!function(e){var r={};function t(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(i,n,function(r){return e[r]}.bind(null,n));return i},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});class i{constructor(e,r){this.kinSdk=e,this._seed=r,this._sdk=e,this._keypairs=new Array,this._keypairs[0]=void 0!==r?this._sdk.KeyPair.fromSeed(r):this._sdk.KeyPair.generate()}addKeyPair(){this._keypairs[this._keypairs.length]=this._sdk.KeyPair.generate()}get accounts(){return Promise.resolve(this._keypairs.map(e=>e.publicAddress))}sign(e,r){const t=this.getKeyPairFor(e);if(null!=t){const e=new this._sdk.XdrTransaction(r),i=new Array;return i.push(this._sdk.BaseKeyPair.fromSecret(t.seed)),e.sign(...i),Promise.resolve(e.toEnvelope().toXDR("base64").toString())}return Promise.reject("keypair null")}getKeyPairFor(e){return this._keypairs.find(r=>r.publicAddress===e)||null}}r.SimpleKeystoreProvider=i,window.SimpleKeystoreProvider=i},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const i=t(0);r.SimpleKeystoreProvider=i.SimpleKeystoreProvider}]);