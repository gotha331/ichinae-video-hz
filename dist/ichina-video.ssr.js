'use strict';Object.defineProperty(exports,'__esModule',{value:true});var axios=require('axios'),ElementUI=require('element-ui'),Vue=require('vue');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var axios__default=/*#__PURE__*/_interopDefaultLegacy(axios);var ElementUI__default=/*#__PURE__*/_interopDefaultLegacy(ElementUI);var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}var flv_min = createCommonjsModule(function (module, exports) {
!function(e){module.exports=e();}(function(){return function e(t,n,i){function r(a,o){if(!n[a]){if(!t[a]){var u="function"==typeof commonjsRequire&&commonjsRequire;if(!o&&u)return u(a,!0);if(s)return s(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[a]={exports:{}};t[a][0].call(d.exports,function(e){var n=t[a][1][e];return r(n||e)},d,d.exports,e,t,n,i);}return n[a].exports}for(var s="function"==typeof commonjsRequire&&commonjsRequire,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(t,n,i){(function(r,s){!function(t,r){"object"==typeof i&&void 0!==n?n.exports=r():t.ES6Promise=r();}(this,function(){function e(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}function n(e){return "function"==typeof e}function i(e){V=e;}function a(e){z=e;}function o(){return void 0!==G?function(){G(l);}:u()}function u(){var e=setTimeout;return function(){return e(l,1)}}function l(){for(var e=0;e<F;e+=2){(0, Y[e])(Y[e+1]),Y[e]=void 0,Y[e+1]=void 0;}F=0;}function d(e,t){var n=this,i=new this.constructor(f);void 0===i[Q]&&C(i);var r=n._state;if(r){var s=arguments[r-1];z(function(){return w(r,i,s,n._result)});}else L(n,i,e,t);return i}function h(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(f);return E(n,e),n}function f(){}function c(){return new TypeError("You cannot resolve a promise with itself")}function _(){return new TypeError("A promises callback cannot return that same promise.")}function m(e){try{return e.then}catch(e){return te.error=e,te}}function p(e,t,n,i){try{e.call(t,n,i);}catch(e){return e}}function v(e,t,n){z(function(e){var i=!1,r=p(n,t,function(n){i||(i=!0,t!==n?E(e,n):S(e,n));},function(t){i||(i=!0,k(e,t));},"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,k(e,r));},e);}function g(e,t){t._state===$?S(e,t._result):t._state===ee?k(e,t._result):L(t,void 0,function(t){return E(e,t)},function(t){return k(e,t)});}function y(e,t,i){t.constructor===e.constructor&&i===d&&t.constructor.resolve===h?g(e,t):i===te?(k(e,te.error),te.error=null):void 0===i?S(e,t):n(i)?v(e,t,i):S(e,t);}function E(t,n){t===n?k(t,c()):e(n)?y(t,n,m(n)):S(t,n);}function b(e){e._onerror&&e._onerror(e._result),R(e);}function S(e,t){e._state===J&&(e._result=t,e._state=$,0!==e._subscribers.length&&z(R,e));}function k(e,t){e._state===J&&(e._state=ee,e._result=t,z(b,e));}function L(e,t,n,i){var r=e._subscribers,s=r.length;e._onerror=null,r[s]=t,r[s+$]=n,r[s+ee]=i,0===s&&e._state&&z(R,e);}function R(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,s=e._result,a=0;a<t.length;a+=3)i=t[a],r=t[a+n],i?w(n,i,r,s):r(s);e._subscribers.length=0;}}function A(e,t){try{return e(t)}catch(e){return te.error=e,te}}function w(e,t,i,r){var s=n(i),a=void 0,o=void 0,u=void 0,l=void 0;if(s){if(a=A(i,r),a===te?(l=!0,o=a.error,a.error=null):u=!0,t===a)return void k(t,_())}else a=r,u=!0;t._state!==J||(s&&u?E(t,a):l?k(t,o):e===$?S(t,a):e===ee&&k(t,a));}function T(e,t){try{t(function(t){E(e,t);},function(t){k(e,t);});}catch(t){k(e,t);}}function O(){return ne++}function C(e){e[Q]=ne++,e._state=void 0,e._result=void 0,e._subscribers=[];}function I(){return new Error("Array Methods must be provided an Array")}function D(e){return new ie(this,e).promise}function x(e){var t=this;return new t(N(e)?function(n,i){for(var r=e.length,s=0;s<r;s++)t.resolve(e[s]).then(n,i);}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function M(e){var t=this,n=new t(f);return k(n,e),n}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function j(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function P(){var e=void 0;if(void 0!==s)e=s;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")();}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve());}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=re;}var U=void 0;U=Array.isArray?Array.isArray:function(e){return "[object Array]"===Object.prototype.toString.call(e)};var N=U,F=0,G=void 0,V=void 0,z=function(e,t){Y[F]=e,Y[F+1]=t,2===(F+=2)&&(V?V(l):Z());},H="undefined"!=typeof window?window:void 0,K=H||{},q=K.MutationObserver||K.WebKitMutationObserver,W="undefined"==typeof self&&void 0!==r&&"[object process]"==={}.toString.call(r),X="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Y=new Array(1e3),Z=void 0;Z=W?function(){return function(){return r.nextTick(l)}}():q?function(){var e=0,t=new q(l),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2;}}():X?function(){var e=new MessageChannel;return e.port1.onmessage=l,function(){return e.port2.postMessage(0)}}():void 0===H&&"function"==typeof t?function(){try{var e=Function("return this")().require("vertx");return G=e.runOnLoop||e.runOnContext,o()}catch(e){return u()}}():u();var Q=Math.random().toString(36).substring(2),J=void 0,$=1,ee=2,te={error:null},ne=0,ie=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(f),this.promise[Q]||C(this.promise),N(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&S(this.promise,this._result))):k(this.promise,I());}return e.prototype._enumerate=function(e){for(var t=0;this._state===J&&t<e.length;t++)this._eachEntry(e[t],t);},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===h){var r=m(e);if(r===d&&e._state!==J)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===re){var s=new n(f);y(s,e,r),this._willSettleAt(s,t);}else this._willSettleAt(new n(function(t){return t(e)}),t);}else this._willSettleAt(i(e),t);},e.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===J&&(this._remaining--,e===ee?k(i,n):this._result[t]=n),0===this._remaining&&S(i,this._result);},e.prototype._willSettleAt=function(e,t){var n=this;L(e,void 0,function(e){return n._settledAt($,t,e)},function(e){return n._settledAt(ee,t,e)});},e}(),re=function(){function e(t){this[Q]=O(),this._result=this._state=void 0,this._subscribers=[],f!==t&&("function"!=typeof t&&B(),this instanceof e?T(this,t):j());}return e.prototype.catch=function(e){return this.then(null,e)},e.prototype.finally=function(e){var t=this,i=t.constructor;return n(e)?t.then(function(t){return i.resolve(e()).then(function(){return t})},function(t){return i.resolve(e()).then(function(){throw t})}):t.then(e,e)},e}();return re.prototype.then=d,re.all=D,re.race=x,re.resolve=h,re.reject=M,re._setScheduler=i,re._setAsap=a,re._asap=z,re.polyfill=P,re.Promise=re,re});}).call(this,t("_process"),"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{_process:3}],2:[function(e,t,n){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0;}function r(e){return "function"==typeof e}function s(e){return "number"==typeof e}function a(e){return "object"==typeof e&&null!==e}function o(e){return void 0===e}t.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!s(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,n,i,s,u,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var d=new Error('Uncaught, unspecified "error" event. ('+t+")");throw d.context=t,d}if(n=this._events[e],o(n))return !1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),n.apply(this,s);}else if(a(n))for(s=Array.prototype.slice.call(arguments,1),l=n.slice(),i=l.length,u=0;u<i;u++)l[u].apply(this,s);return !0},i.prototype.addListener=function(e,t){var n;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(n=o(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){function n(){this.removeListener(e,n),i||(i=!0,t.apply(this,arguments));}if(!r(t))throw TypeError("listener must be a function");var i=!1;return n.listener=t,this.on(e,n),this},i.prototype.removeListener=function(e,t){var n,i,s,o;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,i=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(n)){for(o=s;o-- >0;)if(n[o]===t||n[o].listener&&n[o].listener===t){i=o;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t);}return this},i.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){return this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},i.listenerCount=function(e,t){return e.listenerCount(t)};},{}],3:[function(e,t,n){function i(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function s(e){if(h===setTimeout)return setTimeout(e,0);if((h===i||!h)&&setTimeout)return h=setTimeout,setTimeout(e,0);try{return h(e,0)}catch(t){try{return h.call(null,e,0)}catch(t){return h.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function o(){p&&_&&(p=!1,_.length?m=_.concat(m):v=-1,m.length&&u());}function u(){if(!p){var e=s(o);p=!0;for(var t=m.length;t;){for(_=m,m=[];++v<t;)_&&_[v].run();v=-1,t=m.length;}_=null,p=!1,a(e);}}function l(e,t){this.fun=e,this.array=t;}function d(){}var h,f,c=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:i;}catch(e){h=i;}try{f="function"==typeof clearTimeout?clearTimeout:r;}catch(e){f=r;}}();var _,m=[],p=!1,v=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new l(e,t)),1!==m.length||p||s(u);},l.prototype.run=function(){this.fun.apply(null,this.array);},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=d,c.addListener=d,c.once=d,c.off=d,c.removeListener=d,c.removeAllListeners=d,c.emit=d,c.prependListener=d,c.prependOnceListener=d,c.listeners=function(e){return []},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return "/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0};},{}],4:[function(e,t,n){var i=arguments[3],r=arguments[4],s=arguments[5],a=JSON.stringify;t.exports=function(e,t){function n(e){p[e]=!0;for(var t in r[e][1]){var i=r[e][1][t];p[i]||n(i);}}for(var o,u=Object.keys(s),l=0,d=u.length;l<d;l++){var h=u[l],f=s[h].exports;if(f===e||f&&f.default===e){o=h;break}}if(!o){o=Math.floor(Math.pow(16,8)*Math.random()).toString(16);for(var c={},l=0,d=u.length;l<d;l++){var h=u[l];c[h]=h;}r[o]=["function(require,module,exports){"+e+"(self); }",c];}var _=Math.floor(Math.pow(16,8)*Math.random()).toString(16),m={};m[o]=o,r[_]=["function(require,module,exports){var f = require("+a(o)+");(f.default ? f.default : f)(self);}",m];var p={};n(_);var v="("+i+")({"+Object.keys(p).map(function(e){return a(e)+":["+r[e][0]+","+a(r[e][1])+"]"}).join(",")+"},{},["+a(_)+"])",g=window.URL||window.webkitURL||window.mozURL||window.msURL,y=new Blob([v],{type:"text/javascript"});if(t&&t.bare)return y;var E=g.createObjectURL(y),b=new Worker(E);return b.objectURL=E,b};},{}],5:[function(e,t,n){function i(){return Object.assign({},r)}Object.defineProperty(n,"__esModule",{value:!0}),n.createDefaultConfig=i;var r=n.defaultConfig={enableWorker:!1,enableStashBuffer:!0,stashInitialSize:void 0,isLive:!1,lazyLoad:!0,lazyLoadMaxDuration:180,lazyLoadRecoverDuration:30,deferLoadAfterSourceOpen:!0,autoCleanupMaxBackwardDuration:180,autoCleanupMinBackwardDuration:120,statisticsInfoReportInterval:600,fixAudioTimestampGap:!0,accurateSeek:!1,seekType:"range",seekParamStart:"bstart",seekParamEnd:"bend",rangeLoadZeroStart:!1,customSeekHandler:void 0,reuseRedirectedURL:!1,headers:void 0,customLoader:void 0};},{}],6:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=e("../io/io-controller.js"),a=function(e){return e&&e.__esModule?e:{default:e}}(s),o=e("../config.js"),u=function(){function e(){i(this,e);}return r(e,null,[{key:"supportMSEH264Playback",value:function(){return window.MediaSource&&window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')}},{key:"supportNetworkStreamIO",value:function(){var e=new a.default({},(0, o.createDefaultConfig)()),t=e.loaderType;return e.destroy(),"fetch-stream-loader"==t||"xhr-moz-chunked-loader"==t}},{key:"getNetworkLoaderTypeName",value:function(){var e=new a.default({},(0, o.createDefaultConfig)()),t=e.loaderType;return e.destroy(),t}},{key:"supportNativeMediaPlayback",value:function(t){void 0==e.videoElement&&(e.videoElement=window.document.createElement("video"));var n=e.videoElement.canPlayType(t);return "probably"===n||"maybe"==n}},{key:"getFeatureList",value:function(){var t={mseFlvPlayback:!1,mseLiveFlvPlayback:!1,networkStreamIO:!1,networkLoaderName:"",nativeMP4H264Playback:!1,nativeWebmVP8Playback:!1,nativeWebmVP9Playback:!1};return t.mseFlvPlayback=e.supportMSEH264Playback(),t.networkStreamIO=e.supportNetworkStreamIO(),t.networkLoaderName=e.getNetworkLoaderTypeName(),t.mseLiveFlvPlayback=t.mseFlvPlayback&&t.networkStreamIO,t.nativeMP4H264Playback=e.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'),t.nativeWebmVP8Playback=e.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'),t.nativeWebmVP9Playback=e.supportNativeMediaPlayback('video/webm; codecs="vp9"'),t}}]),e}();n.default=u;},{"../config.js":5,"../io/io-controller.js":23}],7:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(){i(this,e),this.mimeType=null,this.duration=null,this.hasAudio=null,this.hasVideo=null,this.audioCodec=null,this.videoCodec=null,this.audioDataRate=null,this.videoDataRate=null,this.audioSampleRate=null,this.audioChannelCount=null,this.width=null,this.height=null,this.fps=null,this.profile=null,this.level=null,this.refFrames=null,this.chromaFormat=null,this.sarNum=null,this.sarDen=null,this.metadata=null,this.segments=null,this.segmentCount=null,this.hasKeyframesIndex=null,this.keyframesIndex=null;}return r(e,[{key:"isComplete",value:function(){var e=!1===this.hasAudio||!0===this.hasAudio&&null!=this.audioCodec&&null!=this.audioSampleRate&&null!=this.audioChannelCount,t=!1===this.hasVideo||!0===this.hasVideo&&null!=this.videoCodec&&null!=this.width&&null!=this.height&&null!=this.fps&&null!=this.profile&&null!=this.level&&null!=this.refFrames&&null!=this.chromaFormat&&null!=this.sarNum&&null!=this.sarDen;return null!=this.mimeType&&null!=this.duration&&null!=this.metadata&&null!=this.hasKeyframesIndex&&e&&t}},{key:"isSeekable",value:function(){return !0===this.hasKeyframesIndex}},{key:"getNearestKeyframe",value:function(e){if(null==this.keyframesIndex)return null;var t=this.keyframesIndex,n=this._search(t.times,e);return {index:n,milliseconds:t.times[n],fileposition:t.filepositions[n]}}},{key:"_search",value:function(e,t){var n=0,i=e.length-1,r=0,s=0,a=i;for(t<e[0]&&(n=0,s=a+1);s<=a;){if((r=s+Math.floor((a-s)/2))===i||t>=e[r]&&t<e[r+1]){n=r;break}e[r]<t?s=r+1:a=r-1;}return n}}]),e}();n.default=s;},{}],8:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();n.SampleInfo=function e(t,n,r,s,a){i(this,e),this.dts=t,this.pts=n,this.duration=r,this.originalDts=s,this.isSyncPoint=a,this.fileposition=null;},n.MediaSegmentInfo=function(){function e(){i(this,e),this.beginDts=0,this.endDts=0,this.beginPts=0,this.endPts=0,this.originalBeginDts=0,this.originalEndDts=0,this.syncPoints=[],this.firstSample=null,this.lastSample=null;}return r(e,[{key:"appendSyncPoint",value:function(e){e.isSyncPoint=!0,this.syncPoints.push(e);}}]),e}(),n.IDRSampleList=function(){function e(){i(this,e),this._list=[];}return r(e,[{key:"clear",value:function(){this._list=[];}},{key:"appendArray",value:function(e){var t=this._list;0!==e.length&&(t.length>0&&e[0].originalDts<t[t.length-1].originalDts&&this.clear(),Array.prototype.push.apply(t,e));}},{key:"getLastSyncPointBeforeDts",value:function(e){if(0==this._list.length)return null;var t=this._list,n=0,i=t.length-1,r=0,s=0,a=i;for(e<t[0].dts&&(n=0,s=a+1);s<=a;){if((r=s+Math.floor((a-s)/2))===i||e>=t[r].dts&&e<t[r+1].dts){n=r;break}t[r].dts<e?s=r+1:a=r-1;}return this._list[n]}}]),e}(),n.MediaSegmentInfoList=function(){function e(t){i(this,e),this._type=t,this._list=[],this._lastAppendLocation=-1;}return r(e,[{key:"isEmpty",value:function(){return 0===this._list.length}},{key:"clear",value:function(){this._list=[],this._lastAppendLocation=-1;}},{key:"_searchNearestSegmentBefore",value:function(e){var t=this._list;if(0===t.length)return -2;var n=t.length-1,i=0,r=0,s=n,a=0;if(e<t[0].originalBeginDts)return a=-1;for(;r<=s;){if((i=r+Math.floor((s-r)/2))===n||e>t[i].lastSample.originalDts&&e<t[i+1].originalBeginDts){a=i;break}t[i].originalBeginDts<e?r=i+1:s=i-1;}return a}},{key:"_searchNearestSegmentAfter",value:function(e){return this._searchNearestSegmentBefore(e)+1}},{key:"append",value:function(e){var t=this._list,n=e,i=this._lastAppendLocation,r=0;-1!==i&&i<t.length&&n.originalBeginDts>=t[i].lastSample.originalDts&&(i===t.length-1||i<t.length-1&&n.originalBeginDts<t[i+1].originalBeginDts)?r=i+1:t.length>0&&(r=this._searchNearestSegmentBefore(n.originalBeginDts)+1),this._lastAppendLocation=r,this._list.splice(r,0,n);}},{key:"getLastSegmentBefore",value:function(e){var t=this._searchNearestSegmentBefore(e);return t>=0?this._list[t]:null}},{key:"getLastSampleBefore",value:function(e){var t=this.getLastSegmentBefore(e);return null!=t?t.lastSample:null}},{key:"getLastSyncPointBefore",value:function(e){for(var t=this._searchNearestSegmentBefore(e),n=this._list[t].syncPoints;0===n.length&&t>0;)t--,n=this._list[t].syncPoints;return n.length>0?n[n.length-1]:null}},{key:"type",get:function(){return this._type}},{key:"length",get:function(){return this._list.length}}]),e}();},{}],9:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=e("events"),o=i(a),u=e("../utils/logger.js"),l=i(u),d=e("../utils/browser.js"),h=i(d),f=e("./mse-events.js"),c=i(f),_=e("./media-segment-info.js"),m=e("../utils/exception.js"),p=function(){function e(t){r(this,e),this.TAG="MSEController",this._config=t,this._emitter=new o.default,this._config.isLive&&void 0==this._config.autoCleanupSourceBuffer&&(this._config.autoCleanupSourceBuffer=!0),this.e={onSourceOpen:this._onSourceOpen.bind(this),onSourceEnded:this._onSourceEnded.bind(this),onSourceClose:this._onSourceClose.bind(this),onSourceBufferError:this._onSourceBufferError.bind(this),onSourceBufferUpdateEnd:this._onSourceBufferUpdateEnd.bind(this)},this._mediaSource=null,this._mediaSourceObjectURL=null,this._mediaElement=null,this._isBufferFull=!1,this._hasPendingEos=!1,this._requireSetMediaDuration=!1,this._pendingMediaDuration=0,this._pendingSourceBufferInit=[],this._mimeTypes={video:null,audio:null},this._sourceBuffers={video:null,audio:null},this._lastInitSegments={video:null,audio:null},this._pendingSegments={video:[],audio:[]},this._pendingRemoveRanges={video:[],audio:[]},this._idrList=new _.IDRSampleList;}return s(e,[{key:"destroy",value:function(){(this._mediaElement||this._mediaSource)&&this.detachMediaElement(),this.e=null,this._emitter.removeAllListeners(),this._emitter=null;}},{key:"on",value:function(e,t){this._emitter.addListener(e,t);}},{key:"off",value:function(e,t){this._emitter.removeListener(e,t);}},{key:"attachMediaElement",value:function(e){if(this._mediaSource)throw new m.IllegalStateException("MediaSource has been attached to an HTMLMediaElement!");var t=this._mediaSource=new window.MediaSource;t.addEventListener("sourceopen",this.e.onSourceOpen),t.addEventListener("sourceended",this.e.onSourceEnded),t.addEventListener("sourceclose",this.e.onSourceClose),this._mediaElement=e,this._mediaSourceObjectURL=window.URL.createObjectURL(this._mediaSource),e.src=this._mediaSourceObjectURL;}},{key:"detachMediaElement",value:function(){if(this._mediaSource){var e=this._mediaSource;for(var t in this._sourceBuffers){var n=this._pendingSegments[t];n.splice(0,n.length),this._pendingSegments[t]=null,this._pendingRemoveRanges[t]=null,this._lastInitSegments[t]=null;var i=this._sourceBuffers[t];if(i){if("closed"!==e.readyState){try{e.removeSourceBuffer(i);}catch(e){l.default.e(this.TAG,e.message);}i.removeEventListener("error",this.e.onSourceBufferError),i.removeEventListener("updateend",this.e.onSourceBufferUpdateEnd);}this._mimeTypes[t]=null,this._sourceBuffers[t]=null;}}if("open"===e.readyState)try{e.endOfStream();}catch(e){l.default.e(this.TAG,e.message);}e.removeEventListener("sourceopen",this.e.onSourceOpen),e.removeEventListener("sourceended",this.e.onSourceEnded),e.removeEventListener("sourceclose",this.e.onSourceClose),this._pendingSourceBufferInit=[],this._isBufferFull=!1,this._idrList.clear(),this._mediaSource=null;}this._mediaElement&&(this._mediaElement.src="",this._mediaElement.removeAttribute("src"),this._mediaElement=null),this._mediaSourceObjectURL&&(window.URL.revokeObjectURL(this._mediaSourceObjectURL),this._mediaSourceObjectURL=null);}},{key:"appendInitSegment",value:function(e,t){if(!this._mediaSource||"open"!==this._mediaSource.readyState)return this._pendingSourceBufferInit.push(e),void this._pendingSegments[e.type].push(e);var n=e,i=""+n.container;n.codec&&n.codec.length>0&&(i+=";codecs="+n.codec);var r=!1;if(l.default.v(this.TAG,"Received Initialization Segment, mimeType: "+i),this._lastInitSegments[n.type]=n,i!==this._mimeTypes[n.type]){if(this._mimeTypes[n.type])l.default.v(this.TAG,"Notice: "+n.type+" mimeType changed, origin: "+this._mimeTypes[n.type]+", target: "+i);else {r=!0;try{var s=this._sourceBuffers[n.type]=this._mediaSource.addSourceBuffer(i);s.addEventListener("error",this.e.onSourceBufferError),s.addEventListener("updateend",this.e.onSourceBufferUpdateEnd);}catch(e){return l.default.e(this.TAG,e.message),void this._emitter.emit(c.default.ERROR,{code:e.code,msg:e.message})}}this._mimeTypes[n.type]=i;}t||this._pendingSegments[n.type].push(n),r||this._sourceBuffers[n.type]&&!this._sourceBuffers[n.type].updating&&this._doAppendSegments(),h.default.safari&&"audio/mpeg"===n.container&&n.mediaDuration>0&&(this._requireSetMediaDuration=!0,this._pendingMediaDuration=n.mediaDuration/1e3,this._updateMediaSourceDuration());}},{key:"appendMediaSegment",value:function(e){var t=e;this._pendingSegments[t.type].push(t),this._config.autoCleanupSourceBuffer&&this._needCleanupSourceBuffer()&&this._doCleanupSourceBuffer();var n=this._sourceBuffers[t.type];!n||n.updating||this._hasPendingRemoveRanges()||this._doAppendSegments();}},{key:"seek",value:function(e){for(var t in this._sourceBuffers)if(this._sourceBuffers[t]){var n=this._sourceBuffers[t];if("open"===this._mediaSource.readyState)try{n.abort();}catch(e){l.default.e(this.TAG,e.message);}this._idrList.clear();var i=this._pendingSegments[t];if(i.splice(0,i.length),"closed"!==this._mediaSource.readyState){for(var r=0;r<n.buffered.length;r++){var s=n.buffered.start(r),a=n.buffered.end(r);this._pendingRemoveRanges[t].push({start:s,end:a});}if(n.updating||this._doRemoveRanges(),h.default.safari){var o=this._lastInitSegments[t];o&&(this._pendingSegments[t].push(o),n.updating||this._doAppendSegments());}}}}},{key:"endOfStream",value:function(){var e=this._mediaSource,t=this._sourceBuffers;if(!e||"open"!==e.readyState)return void(e&&"closed"===e.readyState&&this._hasPendingSegments()&&(this._hasPendingEos=!0));t.video&&t.video.updating||t.audio&&t.audio.updating?this._hasPendingEos=!0:(this._hasPendingEos=!1,e.endOfStream());}},{key:"getNearestKeyframe",value:function(e){return this._idrList.getLastSyncPointBeforeDts(e)}},{key:"_needCleanupSourceBuffer",value:function(){if(!this._config.autoCleanupSourceBuffer)return !1;var e=this._mediaElement.currentTime;for(var t in this._sourceBuffers){var n=this._sourceBuffers[t];if(n){var i=n.buffered;if(i.length>=1&&e-i.start(0)>=this._config.autoCleanupMaxBackwardDuration)return !0}}return !1}},{key:"_doCleanupSourceBuffer",value:function(){var e=this._mediaElement.currentTime;for(var t in this._sourceBuffers){var n=this._sourceBuffers[t];if(n){for(var i=n.buffered,r=!1,s=0;s<i.length;s++){var a=i.start(s),o=i.end(s);if(a<=e&&e<o+3){if(e-a>=this._config.autoCleanupMaxBackwardDuration){r=!0;var u=e-this._config.autoCleanupMinBackwardDuration;this._pendingRemoveRanges[t].push({start:a,end:u});}}else o<e&&(r=!0,this._pendingRemoveRanges[t].push({start:a,end:o}));}r&&!n.updating&&this._doRemoveRanges();}}}},{key:"_updateMediaSourceDuration",value:function(){var e=this._sourceBuffers;if(0!==this._mediaElement.readyState&&"open"===this._mediaSource.readyState&&!(e.video&&e.video.updating||e.audio&&e.audio.updating)){var t=this._mediaSource.duration,n=this._pendingMediaDuration;n>0&&(isNaN(t)||n>t)&&(l.default.v(this.TAG,"Update MediaSource duration from "+t+" to "+n),this._mediaSource.duration=n),this._requireSetMediaDuration=!1,this._pendingMediaDuration=0;}}},{key:"_doRemoveRanges",value:function(){for(var e in this._pendingRemoveRanges)if(this._sourceBuffers[e]&&!this._sourceBuffers[e].updating)for(var t=this._sourceBuffers[e],n=this._pendingRemoveRanges[e];n.length&&!t.updating;){var i=n.shift();t.remove(i.start,i.end);}}},{key:"_doAppendSegments",value:function(){var e=this._pendingSegments;for(var t in e)if(this._sourceBuffers[t]&&!this._sourceBuffers[t].updating&&e[t].length>0){var n=e[t].shift();if(n.timestampOffset){var i=this._sourceBuffers[t].timestampOffset,r=n.timestampOffset/1e3,s=Math.abs(i-r);s>.1&&(l.default.v(this.TAG,"Update MPEG audio timestampOffset from "+i+" to "+r),this._sourceBuffers[t].timestampOffset=r),delete n.timestampOffset;}if(!n.data||0===n.data.byteLength)continue;try{this._sourceBuffers[t].appendBuffer(n.data),this._isBufferFull=!1,"video"===t&&n.hasOwnProperty("info")&&this._idrList.appendArray(n.info.syncPoints);}catch(e){this._pendingSegments[t].unshift(n),22===e.code?(this._isBufferFull||this._emitter.emit(c.default.BUFFER_FULL),this._isBufferFull=!0):(l.default.e(this.TAG,e.message),this._emitter.emit(c.default.ERROR,{code:e.code,msg:e.message}));}}}},{key:"_onSourceOpen",value:function(){if(l.default.v(this.TAG,"MediaSource onSourceOpen"),this._mediaSource.removeEventListener("sourceopen",this.e.onSourceOpen),this._pendingSourceBufferInit.length>0)for(var e=this._pendingSourceBufferInit;e.length;){var t=e.shift();this.appendInitSegment(t,!0);}this._hasPendingSegments()&&this._doAppendSegments(),this._emitter.emit(c.default.SOURCE_OPEN);}},{key:"_onSourceEnded",value:function(){l.default.v(this.TAG,"MediaSource onSourceEnded");}},{key:"_onSourceClose",value:function(){l.default.v(this.TAG,"MediaSource onSourceClose"),this._mediaSource&&null!=this.e&&(this._mediaSource.removeEventListener("sourceopen",this.e.onSourceOpen),this._mediaSource.removeEventListener("sourceended",this.e.onSourceEnded),this._mediaSource.removeEventListener("sourceclose",this.e.onSourceClose));}},{key:"_hasPendingSegments",value:function(){var e=this._pendingSegments;return e.video.length>0||e.audio.length>0}},{key:"_hasPendingRemoveRanges",value:function(){var e=this._pendingRemoveRanges;return e.video.length>0||e.audio.length>0}},{key:"_onSourceBufferUpdateEnd",value:function(){this._requireSetMediaDuration?this._updateMediaSourceDuration():this._hasPendingRemoveRanges()?this._doRemoveRanges():this._hasPendingSegments()?this._doAppendSegments():this._hasPendingEos&&this.endOfStream(),this._emitter.emit(c.default.UPDATE_END);}},{key:"_onSourceBufferError",value:function(e){l.default.e(this.TAG,"SourceBuffer Error: "+e);}}]),e}();n.default=p;},{"../utils/browser.js":39,"../utils/exception.js":40,"../utils/logger.js":41,"./media-segment-info.js":8,"./mse-events.js":10,events:2}],10:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var i={ERROR:"error",SOURCE_OPEN:"source_open",UPDATE_END:"update_end",BUFFER_FULL:"buffer_full"};n.default=i;},{}],11:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){
function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=e("events"),o=i(a),u=e("../utils/logger.js"),l=i(u),d=e("../utils/logging-control.js"),h=i(d),f=e("./transmuxing-controller.js"),c=i(f),_=e("./transmuxing-events.js"),m=i(_),p=e("./transmuxing-worker.js"),v=i(p),g=e("./media-info.js"),y=i(g),E=function(){function t(n,i){if(r(this,t),this.TAG="Transmuxer",this._emitter=new o.default,i.enableWorker&&"undefined"!=typeof Worker)try{var s=e("webworkify");this._worker=s(v.default),this._workerDestroying=!1,this._worker.addEventListener("message",this._onWorkerMessage.bind(this)),this._worker.postMessage({cmd:"init",param:[n,i]}),this.e={onLoggingConfigChanged:this._onLoggingConfigChanged.bind(this)},h.default.registerListener(this.e.onLoggingConfigChanged),this._worker.postMessage({cmd:"logging_config",param:h.default.getConfig()});}catch(e){l.default.e(this.TAG,"Error while initialize transmuxing worker, fallback to inline transmuxing"),this._worker=null,this._controller=new c.default(n,i);}else this._controller=new c.default(n,i);if(this._controller){var a=this._controller;a.on(m.default.IO_ERROR,this._onIOError.bind(this)),a.on(m.default.DEMUX_ERROR,this._onDemuxError.bind(this)),a.on(m.default.INIT_SEGMENT,this._onInitSegment.bind(this)),a.on(m.default.MEDIA_SEGMENT,this._onMediaSegment.bind(this)),a.on(m.default.LOADING_COMPLETE,this._onLoadingComplete.bind(this)),a.on(m.default.RECOVERED_EARLY_EOF,this._onRecoveredEarlyEof.bind(this)),a.on(m.default.MEDIA_INFO,this._onMediaInfo.bind(this)),a.on(m.default.METADATA_ARRIVED,this._onMetaDataArrived.bind(this)),a.on(m.default.SCRIPTDATA_ARRIVED,this._onScriptDataArrived.bind(this)),a.on(m.default.STATISTICS_INFO,this._onStatisticsInfo.bind(this)),a.on(m.default.RECOMMEND_SEEKPOINT,this._onRecommendSeekpoint.bind(this));}}return s(t,[{key:"destroy",value:function(){this._worker?this._workerDestroying||(this._workerDestroying=!0,this._worker.postMessage({cmd:"destroy"}),h.default.removeListener(this.e.onLoggingConfigChanged),this.e=null):(this._controller.destroy(),this._controller=null),this._emitter.removeAllListeners(),this._emitter=null;}},{key:"on",value:function(e,t){this._emitter.addListener(e,t);}},{key:"off",value:function(e,t){this._emitter.removeListener(e,t);}},{key:"hasWorker",value:function(){return null!=this._worker}},{key:"open",value:function(){this._worker?this._worker.postMessage({cmd:"start"}):this._controller.start();}},{key:"close",value:function(){this._worker?this._worker.postMessage({cmd:"stop"}):this._controller.stop();}},{key:"seek",value:function(e){this._worker?this._worker.postMessage({cmd:"seek",param:e}):this._controller.seek(e);}},{key:"pause",value:function(){this._worker?this._worker.postMessage({cmd:"pause"}):this._controller.pause();}},{key:"resume",value:function(){this._worker?this._worker.postMessage({cmd:"resume"}):this._controller.resume();}},{key:"_onInitSegment",value:function(e,t){var n=this;Promise.resolve().then(function(){n._emitter.emit(m.default.INIT_SEGMENT,e,t);});}},{key:"_onMediaSegment",value:function(e,t){var n=this;Promise.resolve().then(function(){n._emitter.emit(m.default.MEDIA_SEGMENT,e,t);});}},{key:"_onLoadingComplete",value:function(){var e=this;Promise.resolve().then(function(){e._emitter.emit(m.default.LOADING_COMPLETE);});}},{key:"_onRecoveredEarlyEof",value:function(){var e=this;Promise.resolve().then(function(){e._emitter.emit(m.default.RECOVERED_EARLY_EOF);});}},{key:"_onMediaInfo",value:function(e){var t=this;Promise.resolve().then(function(){t._emitter.emit(m.default.MEDIA_INFO,e);});}},{key:"_onMetaDataArrived",value:function(e){var t=this;Promise.resolve().then(function(){t._emitter.emit(m.default.METADATA_ARRIVED,e);});}},{key:"_onScriptDataArrived",value:function(e){var t=this;Promise.resolve().then(function(){t._emitter.emit(m.default.SCRIPTDATA_ARRIVED,e);});}},{key:"_onStatisticsInfo",value:function(e){var t=this;Promise.resolve().then(function(){t._emitter.emit(m.default.STATISTICS_INFO,e);});}},{key:"_onIOError",value:function(e,t){var n=this;Promise.resolve().then(function(){n._emitter.emit(m.default.IO_ERROR,e,t);});}},{key:"_onDemuxError",value:function(e,t){var n=this;Promise.resolve().then(function(){n._emitter.emit(m.default.DEMUX_ERROR,e,t);});}},{key:"_onRecommendSeekpoint",value:function(e){var t=this;Promise.resolve().then(function(){t._emitter.emit(m.default.RECOMMEND_SEEKPOINT,e);});}},{key:"_onLoggingConfigChanged",value:function(e){this._worker&&this._worker.postMessage({cmd:"logging_config",param:e});}},{key:"_onWorkerMessage",value:function(e){var t=e.data,n=t.data;if("destroyed"===t.msg||this._workerDestroying)return this._workerDestroying=!1,this._worker.terminate(),void(this._worker=null);switch(t.msg){case m.default.INIT_SEGMENT:case m.default.MEDIA_SEGMENT:this._emitter.emit(t.msg,n.type,n.data);break;case m.default.LOADING_COMPLETE:case m.default.RECOVERED_EARLY_EOF:this._emitter.emit(t.msg);break;case m.default.MEDIA_INFO:Object.setPrototypeOf(n,y.default.prototype),this._emitter.emit(t.msg,n);break;case m.default.METADATA_ARRIVED:case m.default.SCRIPTDATA_ARRIVED:case m.default.STATISTICS_INFO:this._emitter.emit(t.msg,n);break;case m.default.IO_ERROR:case m.default.DEMUX_ERROR:this._emitter.emit(t.msg,n.type,n.info);break;case m.default.RECOMMEND_SEEKPOINT:this._emitter.emit(t.msg,n);break;case"logcat_callback":l.default.emitter.emit("log",n.type,n.logcat);}}}]),t}();n.default=E;},{"../utils/logger.js":41,"../utils/logging-control.js":42,"./media-info.js":7,"./transmuxing-controller.js":12,"./transmuxing-events.js":13,"./transmuxing-worker.js":14,events:2,webworkify:4}],12:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=e("events"),o=i(a),u=e("../utils/logger.js"),l=i(u),d=e("../utils/browser.js"),h=i(d),f=e("./media-info.js"),c=i(f),_=e("../demux/flv-demuxer.js"),m=i(_),p=e("../remux/mp4-remuxer.js"),v=i(p),g=e("../demux/demux-errors.js"),y=i(g),E=e("../io/io-controller.js"),b=i(E),S=e("./transmuxing-events.js"),k=i(S),L=(e("../io/loader.js"),function(){function e(t,n){r(this,e),this.TAG="TransmuxingController",this._emitter=new o.default,this._config=n,t.segments||(t.segments=[{duration:t.duration,filesize:t.filesize,url:t.url}]),"boolean"!=typeof t.cors&&(t.cors=!0),"boolean"!=typeof t.withCredentials&&(t.withCredentials=!1),this._mediaDataSource=t,this._currentSegmentIndex=0;var i=0;this._mediaDataSource.segments.forEach(function(e){e.timestampBase=i,i+=e.duration,e.cors=t.cors,e.withCredentials=t.withCredentials,n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy);}),isNaN(i)||this._mediaDataSource.duration===i||(this._mediaDataSource.duration=i),this._mediaInfo=null,this._demuxer=null,this._remuxer=null,this._ioctl=null,this._pendingSeekTime=null,this._pendingResolveSeekPoint=null,this._statisticsReporter=null;}return s(e,[{key:"destroy",value:function(){this._mediaInfo=null,this._mediaDataSource=null,this._statisticsReporter&&this._disableStatisticsReporter(),this._ioctl&&(this._ioctl.destroy(),this._ioctl=null),this._demuxer&&(this._demuxer.destroy(),this._demuxer=null),this._remuxer&&(this._remuxer.destroy(),this._remuxer=null),this._emitter.removeAllListeners(),this._emitter=null;}},{key:"on",value:function(e,t){this._emitter.addListener(e,t);}},{key:"off",value:function(e,t){this._emitter.removeListener(e,t);}},{key:"start",value:function(){this._loadSegment(0),this._enableStatisticsReporter();}},{key:"_loadSegment",value:function(e,t){this._currentSegmentIndex=e;var n=this._mediaDataSource.segments[e],i=this._ioctl=new b.default(n,this._config,e);i.onError=this._onIOException.bind(this),i.onSeeked=this._onIOSeeked.bind(this),i.onComplete=this._onIOComplete.bind(this),i.onRedirect=this._onIORedirect.bind(this),i.onRecoveredEarlyEof=this._onIORecoveredEarlyEof.bind(this),t?this._demuxer.bindDataSource(this._ioctl):i.onDataArrival=this._onInitChunkArrival.bind(this),i.open(t);}},{key:"stop",value:function(){this._internalAbort(),this._disableStatisticsReporter();}},{key:"_internalAbort",value:function(){this._ioctl&&(this._ioctl.destroy(),this._ioctl=null);}},{key:"pause",value:function(){this._ioctl&&this._ioctl.isWorking()&&(this._ioctl.pause(),this._disableStatisticsReporter());}},{key:"resume",value:function(){this._ioctl&&this._ioctl.isPaused()&&(this._ioctl.resume(),this._enableStatisticsReporter());}},{key:"seek",value:function(e){if(null!=this._mediaInfo&&this._mediaInfo.isSeekable()){var t=this._searchSegmentIndexContains(e);if(t===this._currentSegmentIndex){var n=this._mediaInfo.segments[t];if(void 0==n)this._pendingSeekTime=e;else {var i=n.getNearestKeyframe(e);this._remuxer.seek(i.milliseconds),this._ioctl.seek(i.fileposition),this._pendingResolveSeekPoint=i.milliseconds;}}else {var r=this._mediaInfo.segments[t];if(void 0==r)this._pendingSeekTime=e,this._internalAbort(),this._remuxer.seek(),this._remuxer.insertDiscontinuity(),this._loadSegment(t);else {var s=r.getNearestKeyframe(e);this._internalAbort(),this._remuxer.seek(e),this._remuxer.insertDiscontinuity(),this._demuxer.resetMediaInfo(),this._demuxer.timestampBase=this._mediaDataSource.segments[t].timestampBase,this._loadSegment(t,s.fileposition),this._pendingResolveSeekPoint=s.milliseconds,this._reportSegmentMediaInfo(t);}}this._enableStatisticsReporter();}}},{key:"_searchSegmentIndexContains",value:function(e){for(var t=this._mediaDataSource.segments,n=t.length-1,i=0;i<t.length;i++)if(e<t[i].timestampBase){n=i-1;break}return n}},{key:"_onInitChunkArrival",value:function(e,t){var n=this,i=null,r=0;if(t>0)this._demuxer.bindDataSource(this._ioctl),this._demuxer.timestampBase=this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase,r=this._demuxer.parseChunks(e,t);else if((i=m.default.probe(e)).match){this._demuxer=new m.default(i,this._config),this._remuxer||(this._remuxer=new v.default(this._config));var s=this._mediaDataSource;void 0==s.duration||isNaN(s.duration)||(this._demuxer.overridedDuration=s.duration),"boolean"==typeof s.hasAudio&&(this._demuxer.overridedHasAudio=s.hasAudio),"boolean"==typeof s.hasVideo&&(this._demuxer.overridedHasVideo=s.hasVideo),this._demuxer.timestampBase=s.segments[this._currentSegmentIndex].timestampBase,this._demuxer.onError=this._onDemuxException.bind(this),this._demuxer.onMediaInfo=this._onMediaInfo.bind(this),this._demuxer.onMetaDataArrived=this._onMetaDataArrived.bind(this),this._demuxer.onScriptDataArrived=this._onScriptDataArrived.bind(this),this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)),this._remuxer.onInitSegment=this._onRemuxerInitSegmentArrival.bind(this),this._remuxer.onMediaSegment=this._onRemuxerMediaSegmentArrival.bind(this),r=this._demuxer.parseChunks(e,t);}else i=null,l.default.e(this.TAG,"Non-FLV, Unsupported media type!"),Promise.resolve().then(function(){n._internalAbort();}),this._emitter.emit(k.default.DEMUX_ERROR,y.default.FORMAT_UNSUPPORTED,"Non-FLV, Unsupported media type"),r=0;return r}},{key:"_onMediaInfo",value:function(e){var t=this;null==this._mediaInfo&&(this._mediaInfo=Object.assign({},e),this._mediaInfo.keyframesIndex=null,this._mediaInfo.segments=[],this._mediaInfo.segmentCount=this._mediaDataSource.segments.length,Object.setPrototypeOf(this._mediaInfo,c.default.prototype));var n=Object.assign({},e);Object.setPrototypeOf(n,c.default.prototype),this._mediaInfo.segments[this._currentSegmentIndex]=n,this._reportSegmentMediaInfo(this._currentSegmentIndex),null!=this._pendingSeekTime&&Promise.resolve().then(function(){var e=t._pendingSeekTime;t._pendingSeekTime=null,t.seek(e);});}},{key:"_onMetaDataArrived",value:function(e){this._emitter.emit(k.default.METADATA_ARRIVED,e);}},{key:"_onScriptDataArrived",value:function(e){this._emitter.emit(k.default.SCRIPTDATA_ARRIVED,e);}},{key:"_onIOSeeked",value:function(){this._remuxer.insertDiscontinuity();}},{key:"_onIOComplete",value:function(e){var t=e,n=t+1;n<this._mediaDataSource.segments.length?(this._internalAbort(),this._remuxer.flushStashedSamples(),this._loadSegment(n)):(this._remuxer.flushStashedSamples(),this._emitter.emit(k.default.LOADING_COMPLETE),this._disableStatisticsReporter());}},{key:"_onIORedirect",value:function(e){var t=this._ioctl.extraData;this._mediaDataSource.segments[t].redirectedURL=e;}},{key:"_onIORecoveredEarlyEof",value:function(){this._emitter.emit(k.default.RECOVERED_EARLY_EOF);}},{key:"_onIOException",value:function(e,t){l.default.e(this.TAG,"IOException: type = "+e+", code = "+t.code+", msg = "+t.msg),this._emitter.emit(k.default.IO_ERROR,e,t),this._disableStatisticsReporter();}},{key:"_onDemuxException",value:function(e,t){l.default.e(this.TAG,"DemuxException: type = "+e+", info = "+t),this._emitter.emit(k.default.DEMUX_ERROR,e,t);}},{key:"_onRemuxerInitSegmentArrival",value:function(e,t){this._emitter.emit(k.default.INIT_SEGMENT,e,t);}},{key:"_onRemuxerMediaSegmentArrival",value:function(e,t){if(null==this._pendingSeekTime&&(this._emitter.emit(k.default.MEDIA_SEGMENT,e,t),null!=this._pendingResolveSeekPoint&&"video"===e)){var n=t.info.syncPoints,i=this._pendingResolveSeekPoint;this._pendingResolveSeekPoint=null,h.default.safari&&n.length>0&&n[0].originalDts===i&&(i=n[0].pts),this._emitter.emit(k.default.RECOMMEND_SEEKPOINT,i);}}},{key:"_enableStatisticsReporter",value:function(){null==this._statisticsReporter&&(this._statisticsReporter=self.setInterval(this._reportStatisticsInfo.bind(this),this._config.statisticsInfoReportInterval));}},{key:"_disableStatisticsReporter",value:function(){this._statisticsReporter&&(self.clearInterval(this._statisticsReporter),this._statisticsReporter=null);}},{key:"_reportSegmentMediaInfo",value:function(e){var t=this._mediaInfo.segments[e],n=Object.assign({},t);n.duration=this._mediaInfo.duration,n.segmentCount=this._mediaInfo.segmentCount,delete n.segments,delete n.keyframesIndex,this._emitter.emit(k.default.MEDIA_INFO,n);}},{key:"_reportStatisticsInfo",value:function(){var e={};e.url=this._ioctl.currentURL,e.hasRedirect=this._ioctl.hasRedirect,e.hasRedirect&&(e.redirectedURL=this._ioctl.currentRedirectedURL),e.speed=this._ioctl.currentSpeed,e.loaderType=this._ioctl.loaderType,e.currentSegmentIndex=this._currentSegmentIndex,e.totalSegmentCount=this._mediaDataSource.segments.length,this._emitter.emit(k.default.STATISTICS_INFO,e);}}]),e}());n.default=L;},{"../demux/demux-errors.js":16,"../demux/flv-demuxer.js":18,"../io/io-controller.js":23,"../io/loader.js":24,"../remux/mp4-remuxer.js":38,"../utils/browser.js":39,"../utils/logger.js":41,"./media-info.js":7,"./transmuxing-events.js":13,events:2}],13:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var i={IO_ERROR:"io_error",DEMUX_ERROR:"demux_error",INIT_SEGMENT:"init_segment",MEDIA_SEGMENT:"media_segment",LOADING_COMPLETE:"loading_complete",RECOVERED_EARLY_EOF:"recovered_early_eof",MEDIA_INFO:"media_info",METADATA_ARRIVED:"metadata_arrived",SCRIPTDATA_ARRIVED:"scriptdata_arrived",STATISTICS_INFO:"statistics_info",RECOMMEND_SEEKPOINT:"recommend_seekpoint"};n.default=i;},{}],14:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=e("../utils/logger.js"),s=(i(r),e("../utils/logging-control.js")),a=i(s),o=e("../utils/polyfill.js"),u=i(o),l=e("./transmuxing-controller.js"),d=i(l),h=e("./transmuxing-events.js"),f=i(h),c=function(e){function t(t,n){var i={msg:f.default.INIT_SEGMENT,data:{type:t,data:n}};e.postMessage(i,[n.data]);}function n(t,n){var i={msg:f.default.MEDIA_SEGMENT,data:{type:t,data:n}};e.postMessage(i,[n.data]);}function i(){var t={msg:f.default.LOADING_COMPLETE};e.postMessage(t);}function r(){var t={msg:f.default.RECOVERED_EARLY_EOF};e.postMessage(t);}function s(t){var n={msg:f.default.MEDIA_INFO,data:t};e.postMessage(n);}function o(t){var n={msg:f.default.METADATA_ARRIVED,data:t};e.postMessage(n);}function l(t){var n={msg:f.default.SCRIPTDATA_ARRIVED,data:t};e.postMessage(n);}function h(t){var n={msg:f.default.STATISTICS_INFO,data:t};e.postMessage(n);}function c(t,n){e.postMessage({msg:f.default.IO_ERROR,data:{type:t,info:n}});}function _(t,n){e.postMessage({msg:f.default.DEMUX_ERROR,data:{type:t,info:n}});}function m(t){e.postMessage({msg:f.default.RECOMMEND_SEEKPOINT,data:t});}function p(t,n){e.postMessage({msg:"logcat_callback",data:{type:t,logcat:n}});}var v=null,g=p.bind(this);u.default.install(),e.addEventListener("message",function(u){switch(u.data.cmd){case"init":v=new d.default(u.data.param[0],u.data.param[1]),v.on(f.default.IO_ERROR,c.bind(this)),v.on(f.default.DEMUX_ERROR,_.bind(this)),v.on(f.default.INIT_SEGMENT,t.bind(this)),v.on(f.default.MEDIA_SEGMENT,n.bind(this)),v.on(f.default.LOADING_COMPLETE,i.bind(this)),v.on(f.default.RECOVERED_EARLY_EOF,r.bind(this)),v.on(f.default.MEDIA_INFO,s.bind(this)),v.on(f.default.METADATA_ARRIVED,o.bind(this)),v.on(f.default.SCRIPTDATA_ARRIVED,l.bind(this)),v.on(f.default.STATISTICS_INFO,h.bind(this)),v.on(f.default.RECOMMEND_SEEKPOINT,m.bind(this));break;case"destroy":v&&(v.destroy(),v=null),e.postMessage({msg:"destroyed"});break;case"start":v.start();break;case"stop":v.stop();break;case"seek":v.seek(u.data.param);break;case"pause":v.pause();break;case"resume":v.resume();break;case"logging_config":var p=u.data.param;a.default.applyConfig(p),!0===p.enableCallback?a.default.addLogListener(g):a.default.removeLogListener(g);}});};n.default=c;},{"../utils/logger.js":41,"../utils/logging-control.js":42,"../utils/polyfill.js":43,"./transmuxing-controller.js":12,"./transmuxing-events.js":13}],15:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=e("../utils/logger.js"),o=i(a),u=e("../utils/utf8-conv.js"),l=i(u),d=e("../utils/exception.js"),h=function(){var e=new ArrayBuffer(2);return new DataView(e).setInt16(0,256,!0),256===new Int16Array(e)[0]}(),f=function(){function e(){r(this,e);}return s(e,null,[{key:"parseScriptData",value:function(t,n,i){var r={};try{var s=e.parseValue(t,n,i),a=e.parseValue(t,n+s.size,i-s.size);r[s.data]=a.data;}catch(e){o.default.e("AMF",e.toString());}return r}},{key:"parseObject",value:function(t,n,i){if(i<3)throw new d.IllegalStateException("Data not enough when parse ScriptDataObject");var r=e.parseString(t,n,i),s=e.parseValue(t,n+r.size,i-r.size),a=s.objectEnd;return {data:{name:r.data,value:s.data},size:r.size+s.size,objectEnd:a}}},{key:"parseVariable",value:function(t,n,i){return e.parseObject(t,n,i)}},{key:"parseString",value:function(e,t,n){if(n<2)throw new d.IllegalStateException("Data not enough when parse String");var i=new DataView(e,t,n),r=i.getUint16(0,!h),s=void 0;return s=r>0?(0, l.default)(new Uint8Array(e,t+2,r)):"",{data:s,size:2+r}}},{key:"parseLongString",value:function(e,t,n){if(n<4)throw new d.IllegalStateException("Data not enough when parse LongString");var i=new DataView(e,t,n),r=i.getUint32(0,!h),s=void 0;return s=r>0?(0, l.default)(new Uint8Array(e,t+4,r)):"",{data:s,size:4+r}}},{key:"parseDate",value:function(e,t,n){if(n<10)throw new d.IllegalStateException("Data size invalid when parse Date");var i=new DataView(e,t,n),r=i.getFloat64(0,!h);return r+=60*i.getInt16(8,!h)*1e3,{data:new Date(r),size:10}}},{key:"parseValue",value:function(t,n,i){if(i<1)throw new d.IllegalStateException("Data not enough when parse Value");var r=new DataView(t,n,i),s=1,a=r.getUint8(0),u=void 0,l=!1;try{switch(a){case 0:u=r.getFloat64(1,!h),s+=8;break;case 1:u=!!r.getUint8(1),s+=1;break;case 2:var f=e.parseString(t,n+1,i-1);u=f.data,s+=f.size;break;case 3:u={};var c=0;for(9==(16777215&r.getUint32(i-4,!h))&&(c=3);s<i-4;){var _=e.parseObject(t,n+s,i-s-c);if(_.objectEnd)break;u[_.data.name]=_.data.value,s+=_.size;}if(s<=i-3){9===(16777215&r.getUint32(s-1,!h))&&(s+=3);}break;case 8:u={},s+=4;var m=0;for(9==(16777215&r.getUint32(i-4,!h))&&(m=3);s<i-8;){var p=e.parseVariable(t,n+s,i-s-m);if(p.objectEnd)break;u[p.data.name]=p.data.value,s+=p.size;}if(s<=i-3){9===(16777215&r.getUint32(s-1,!h))&&(s+=3);}break;case 9:u=void 0,s=1,l=!0;break;case 10:u=[];var v=r.getUint32(1,!h);s+=4;for(var g=0;g<v;g++){var y=e.parseValue(t,n+s,i-s);u.push(y.data),s+=y.size;}break;case 11:var E=e.parseDate(t,n+1,i-1);u=E.data,s+=E.size;break;case 12:var b=e.parseString(t,n+1,i-1);u=b.data,s+=b.size;break;default:s=i,o.default.w("AMF","Unsupported AMF value type "+a);}}catch(e){o.default.e("AMF",e.toString());}return {data:u,size:s,objectEnd:l}}}]),e}();n.default=f;},{"../utils/exception.js":40,"../utils/logger.js":41,"../utils/utf8-conv.js":44}],16:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var i={OK:"OK",FORMAT_ERROR:"FormatError",FORMAT_UNSUPPORTED:"FormatUnsupported",CODEC_UNSUPPORTED:"CodecUnsupported"};n.default=i;},{}],17:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=e("../utils/exception.js"),a=function(){function e(t){i(this,e),this.TAG="ExpGolomb",this._buffer=t,this._buffer_index=0,this._total_bytes=t.byteLength,this._total_bits=8*t.byteLength,this._current_word=0,this._current_word_bits_left=0;}return r(e,[{key:"destroy",value:function(){this._buffer=null;}},{key:"_fillCurrentWord",value:function(){var e=this._total_bytes-this._buffer_index;if(e<=0)throw new s.IllegalStateException("ExpGolomb: _fillCurrentWord() but no bytes available");var t=Math.min(4,e),n=new Uint8Array(4);n.set(this._buffer.subarray(this._buffer_index,this._buffer_index+t)),this._current_word=new DataView(n.buffer).getUint32(0,!1),this._buffer_index+=t,this._current_word_bits_left=8*t;}},{key:"readBits",value:function(e){if(e>32)throw new s.InvalidArgumentException("ExpGolomb: readBits() bits exceeded max 32bits!");if(e<=this._current_word_bits_left){var t=this._current_word>>>32-e;return this._current_word<<=e,this._current_word_bits_left-=e,t}var n=this._current_word_bits_left?this._current_word:0;n>>>=32-this._current_word_bits_left;var i=e-this._current_word_bits_left;this._fillCurrentWord();var r=Math.min(i,this._current_word_bits_left),a=this._current_word>>>32-r;return this._current_word<<=r,this._current_word_bits_left-=r,n=n<<r|a}},{key:"readBool",value:function(){return 1===this.readBits(1)}},{key:"readByte",value:function(){return this.readBits(8)}},{key:"_skipLeadingZero",value:function(){var e=void 0;for(e=0;e<this._current_word_bits_left;e++)if(0!=(this._current_word&2147483648>>>e))return this._current_word<<=e,this._current_word_bits_left-=e,e;return this._fillCurrentWord(),e+this._skipLeadingZero()}},{key:"readUEG",value:function(){var e=this._skipLeadingZero();return this.readBits(e+1)-1}},{key:"readSEG",value:function(){var e=this.readUEG();return 1&e?e+1>>>1:-1*(e>>>1)}}]),e}();n.default=a;},{"../utils/exception.js":40}],18:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}Object.defineProperty(n,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=e("../utils/logger.js"),l=i(u),d=e("./amf-parser.js"),h=i(d),f=e("./sps-parser.js"),c=i(f),_=e("./demux-errors.js"),m=i(_),p=e("../core/media-info.js"),v=i(p),g=e("../utils/exception.js"),y=function(){function e(t,n){r(this,e),this.TAG="FLVDemuxer",this._config=n,this._onError=null,this._onMediaInfo=null,this._onMetaDataArrived=null,this._onScriptDataArrived=null,this._onTrackMetadata=null,this._onDataAvailable=null,this._dataOffset=t.dataOffset,this._firstParse=!0,this._dispatch=!1,this._hasAudio=t.hasAudioTrack,this._hasVideo=t.hasVideoTrack,this._hasAudioFlagOverrided=!1,this._hasVideoFlagOverrided=!1,this._audioInitialMetadataDispatched=!1,this._videoInitialMetadataDispatched=!1,this._mediaInfo=new v.default,this._mediaInfo.hasAudio=this._hasAudio,this._mediaInfo.hasVideo=this._hasVideo,this._metadata=null,this._audioMetadata=null,this._videoMetadata=null,this._naluLengthSize=4,this._timestampBase=0,this._timescale=1e3,this._duration=0,this._durationOverrided=!1,this._referenceFrameRate={fixed:!0,fps:23.976,fps_num:23976,fps_den:1e3},this._flvSoundRateTable=[5500,11025,22050,44100,48e3],this._mpegSamplingRates=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],this._mpegAudioV10SampleRateTable=[44100,48e3,32e3,0],this._mpegAudioV20SampleRateTable=[22050,24e3,16e3,0],this._mpegAudioV25SampleRateTable=[11025,12e3,8e3,0],this._mpegAudioL1BitRateTable=[0,32,64,96,128,160,192,224,256,288,320,352,384,416,448,-1],this._mpegAudioL2BitRateTable=[0,32,48,56,64,80,96,112,128,160,192,224,256,320,384,-1],this._mpegAudioL3BitRateTable=[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320,-1],this._videoTrack={type:"video",id:1,sequenceNumber:0,samples:[],length:0},this._audioTrack={type:"audio",id:2,sequenceNumber:0,samples:[],length:0},this._littleEndian=function(){var e=new ArrayBuffer(2);return new DataView(e).setInt16(0,256,!0),256===new Int16Array(e)[0]}();}return o(e,[{key:"destroy",value:function(){this._mediaInfo=null,this._metadata=null,this._audioMetadata=null,this._videoMetadata=null,this._videoTrack=null,this._audioTrack=null,this._onError=null,this._onMediaInfo=null,this._onMetaDataArrived=null,this._onScriptDataArrived=null,this._onTrackMetadata=null,this._onDataAvailable=null;}},{key:"bindDataSource",value:function(e){return e.onDataArrival=this.parseChunks.bind(this),this}},{key:"resetMediaInfo",value:function(){this._mediaInfo=new v.default;}},{key:"_isInitialMetadataDispatched",value:function(){return this._hasAudio&&this._hasVideo?this._audioInitialMetadataDispatched&&this._videoInitialMetadataDispatched:this._hasAudio&&!this._hasVideo?this._audioInitialMetadataDispatched:!(this._hasAudio||!this._hasVideo)&&this._videoInitialMetadataDispatched}},{key:"parseChunks",value:function(t,n){if(!(this._onError&&this._onMediaInfo&&this._onTrackMetadata&&this._onDataAvailable))throw new g.IllegalStateException("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");var i=0,r=this._littleEndian;if(0===n){if(!(t.byteLength>13))return 0;i=e.probe(t).dataOffset;}if(this._firstParse){this._firstParse=!1,n+i!==this._dataOffset&&l.default.w(this.TAG,"First time parsing but chunk byteStart invalid!");0!==new DataView(t,i).getUint32(0,!r)&&l.default.w(this.TAG,"PrevTagSize0 !== 0 !!!"),i+=4;}for(;i<t.byteLength;){this._dispatch=!0;var s=new DataView(t,i);if(i+11+4>t.byteLength)break;var a=s.getUint8(0),o=16777215&s.getUint32(0,!r);if(i+11+o+4>t.byteLength)break;if(8===a||9===a||18===a){var u=s.getUint8(4),d=s.getUint8(5),h=s.getUint8(6),f=s.getUint8(7),c=h|d<<8|u<<16|f<<24;0!==(16777215&s.getUint32(7,!r))&&l.default.w(this.TAG,"Meet tag which has StreamID != 0!");var _=i+11;switch(a){case 8:this._parseAudioData(t,_,o,c);break;case 9:this._parseVideoData(t,_,o,c,n+i);break;case 18:this._parseScriptData(t,_,o);}var m=s.getUint32(11+o,!r);m!==11+o&&l.default.w(this.TAG,"Invalid PrevTagSize "+m),i+=11+o+4;}else l.default.w(this.TAG,"Unsupported tag type "+a+", skipped"),i+=11+o+4;}return this._isInitialMetadataDispatched()&&this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack),i}},{key:"_parseScriptData",value:function(e,t,n){var i=h.default.parseScriptData(e,t,n);if(i.hasOwnProperty("onMetaData")){if(null==i.onMetaData||"object"!==a(i.onMetaData))return void l.default.w(this.TAG,"Invalid onMetaData structure!");this._metadata&&l.default.w(this.TAG,"Found another onMetaData tag!"),this._metadata=i;var r=this._metadata.onMetaData;if(this._onMetaDataArrived&&this._onMetaDataArrived(Object.assign({},r)),"boolean"==typeof r.hasAudio&&!1===this._hasAudioFlagOverrided&&(this._hasAudio=r.hasAudio,this._mediaInfo.hasAudio=this._hasAudio),"boolean"==typeof r.hasVideo&&!1===this._hasVideoFlagOverrided&&(this._hasVideo=r.hasVideo,this._mediaInfo.hasVideo=this._hasVideo),"number"==typeof r.audiodatarate&&(this._mediaInfo.audioDataRate=r.audiodatarate),"number"==typeof r.videodatarate&&(this._mediaInfo.videoDataRate=r.videodatarate),"number"==typeof r.width&&(this._mediaInfo.width=r.width),"number"==typeof r.height&&(this._mediaInfo.height=r.height),"number"==typeof r.duration){if(!this._durationOverrided){var s=Math.floor(r.duration*this._timescale);this._duration=s,this._mediaInfo.duration=s;}}else this._mediaInfo.duration=0;if("number"==typeof r.framerate){var o=Math.floor(1e3*r.framerate);if(o>0){var u=o/1e3;this._referenceFrameRate.fixed=!0,this._referenceFrameRate.fps=u,this._referenceFrameRate.fps_num=o,this._referenceFrameRate.fps_den=1e3,this._mediaInfo.fps=u;}}if("object"===a(r.keyframes)){this._mediaInfo.hasKeyframesIndex=!0;var d=r.keyframes;this._mediaInfo.keyframesIndex=this._parseKeyframesIndex(d),r.keyframes=null;}else this._mediaInfo.hasKeyframesIndex=!1;this._dispatch=!1,this._mediaInfo.metadata=r,l.default.v(this.TAG,"Parsed onMetaData"),this._mediaInfo.isComplete()&&this._onMediaInfo(this._mediaInfo);}Object.keys(i).length>0&&this._onScriptDataArrived&&this._onScriptDataArrived(Object.assign({},i));}},{key:"_parseKeyframesIndex",value:function(e){for(var t=[],n=[],i=1;i<e.times.length;i++){var r=this._timestampBase+Math.floor(1e3*e.times[i]);t.push(r),n.push(e.filepositions[i]);}return {times:t,filepositions:n}}},{key:"_parseAudioData",value:function(e,t,n,i){if(n<=1)return void l.default.w(this.TAG,"Flv: Invalid audio packet, missing SoundData payload!");if(!0!==this._hasAudioFlagOverrided||!1!==this._hasAudio){var r=(this._littleEndian,new DataView(e,t,n)),s=r.getUint8(0),a=s>>>4;if(2!==a&&10!==a)return void this._onError(m.default.CODEC_UNSUPPORTED,"Flv: Unsupported audio codec idx: "+a);var o=0,u=(12&s)>>>2;if(!(u>=0&&u<=4))return void this._onError(m.default.FORMAT_ERROR,"Flv: Invalid audio sample rate idx: "+u);o=this._flvSoundRateTable[u];var d=1&s,h=this._audioMetadata,f=this._audioTrack;if(h||(!1===this._hasAudio&&!1===this._hasAudioFlagOverrided&&(this._hasAudio=!0,this._mediaInfo.hasAudio=!0),h=this._audioMetadata={},h.type="audio",h.id=f.id,h.timescale=this._timescale,h.duration=this._duration,h.audioSampleRate=o,h.channelCount=0===d?1:2),10===a){var c=this._parseAACAudioData(e,t+1,n-1);if(void 0==c)return;if(0===c.packetType){h.config&&l.default.w(this.TAG,"Found another AudioSpecificConfig!");var _=c.data;h.audioSampleRate=_.samplingRate,h.channelCount=_.channelCount,h.codec=_.codec,h.originalCodec=_.originalCodec,h.config=_.config,
h.refSampleDuration=1024/h.audioSampleRate*h.timescale,l.default.v(this.TAG,"Parsed AudioSpecificConfig"),this._isInitialMetadataDispatched()?this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack):this._audioInitialMetadataDispatched=!0,this._dispatch=!1,this._onTrackMetadata("audio",h);var p=this._mediaInfo;p.audioCodec=h.originalCodec,p.audioSampleRate=h.audioSampleRate,p.audioChannelCount=h.channelCount,p.hasVideo?null!=p.videoCodec&&(p.mimeType='video/x-flv; codecs="'+p.videoCodec+","+p.audioCodec+'"'):p.mimeType='video/x-flv; codecs="'+p.audioCodec+'"',p.isComplete()&&this._onMediaInfo(p);}else if(1===c.packetType){var v=this._timestampBase+i,g={unit:c.data,length:c.data.byteLength,dts:v,pts:v};f.samples.push(g),f.length+=c.data.length;}else l.default.e(this.TAG,"Flv: Unsupported AAC data type "+c.packetType);}else if(2===a){if(!h.codec){var y=this._parseMP3AudioData(e,t+1,n-1,!0);if(void 0==y)return;h.audioSampleRate=y.samplingRate,h.channelCount=y.channelCount,h.codec=y.codec,h.originalCodec=y.originalCodec,h.refSampleDuration=1152/h.audioSampleRate*h.timescale,l.default.v(this.TAG,"Parsed MPEG Audio Frame Header"),this._audioInitialMetadataDispatched=!0,this._onTrackMetadata("audio",h);var E=this._mediaInfo;E.audioCodec=h.codec,E.audioSampleRate=h.audioSampleRate,E.audioChannelCount=h.channelCount,E.audioDataRate=y.bitRate,E.hasVideo?null!=E.videoCodec&&(E.mimeType='video/x-flv; codecs="'+E.videoCodec+","+E.audioCodec+'"'):E.mimeType='video/x-flv; codecs="'+E.audioCodec+'"',E.isComplete()&&this._onMediaInfo(E);}var b=this._parseMP3AudioData(e,t+1,n-1,!1);if(void 0==b)return;var S=this._timestampBase+i,k={unit:b,length:b.byteLength,dts:S,pts:S};f.samples.push(k),f.length+=b.length;}}}},{key:"_parseAACAudioData",value:function(e,t,n){if(n<=1)return void l.default.w(this.TAG,"Flv: Invalid AAC packet, missing AACPacketType or/and Data!");var i={},r=new Uint8Array(e,t,n);return i.packetType=r[0],0===r[0]?i.data=this._parseAACAudioSpecificConfig(e,t+1,n-1):i.data=r.subarray(1),i}},{key:"_parseAACAudioSpecificConfig",value:function(e,t,n){var i=new Uint8Array(e,t,n),r=null,s=0,a=0,o=0,u=null;if(s=a=i[0]>>>3,(o=(7&i[0])<<1|i[1]>>>7)<0||o>=this._mpegSamplingRates.length)return void this._onError(m.default.FORMAT_ERROR,"Flv: AAC invalid sampling frequency index!");var l=this._mpegSamplingRates[o],d=(120&i[1])>>>3;if(d<0||d>=8)return void this._onError(m.default.FORMAT_ERROR,"Flv: AAC invalid channel configuration");5===s&&(u=(7&i[1])<<1|i[2]>>>7,i[2]);var h=self.navigator.userAgent.toLowerCase();return -1!==h.indexOf("firefox")?o>=6?(s=5,r=new Array(4),u=o-3):(s=2,r=new Array(2),u=o):-1!==h.indexOf("android")?(s=2,r=new Array(2),u=o):(s=5,u=o,r=new Array(4),o>=6?u=o-3:1===d&&(s=2,r=new Array(2),u=o)),r[0]=s<<3,r[0]|=(15&o)>>>1,r[1]=(15&o)<<7,r[1]|=(15&d)<<3,5===s&&(r[1]|=(15&u)>>>1,r[2]=(1&u)<<7,r[2]|=8,r[3]=0),{config:r,samplingRate:l,channelCount:d,codec:"mp4a.40."+s,originalCodec:"mp4a.40."+a}}},{key:"_parseMP3AudioData",value:function(e,t,n,i){if(n<4)return void l.default.w(this.TAG,"Flv: Invalid MP3 packet, header missing!");var r=(this._littleEndian,new Uint8Array(e,t,n)),s=null;if(i){if(255!==r[0])return;var a=r[1]>>>3&3,o=(6&r[1])>>1,u=(240&r[2])>>>4,d=(12&r[2])>>>2,h=r[3]>>>6&3,f=3!==h?2:1,c=0,_=0;switch(a){case 0:c=this._mpegAudioV25SampleRateTable[d];break;case 2:c=this._mpegAudioV20SampleRateTable[d];break;case 3:c=this._mpegAudioV10SampleRateTable[d];}switch(o){case 1:u<this._mpegAudioL3BitRateTable.length&&(_=this._mpegAudioL3BitRateTable[u]);break;case 2:u<this._mpegAudioL2BitRateTable.length&&(_=this._mpegAudioL2BitRateTable[u]);break;case 3:u<this._mpegAudioL1BitRateTable.length&&(_=this._mpegAudioL1BitRateTable[u]);}s={bitRate:_,samplingRate:c,channelCount:f,codec:"mp3",originalCodec:"mp3"};}else s=r;return s}},{key:"_parseVideoData",value:function(e,t,n,i,r){if(n<=1)return void l.default.w(this.TAG,"Flv: Invalid video packet, missing VideoData payload!");if(!0!==this._hasVideoFlagOverrided||!1!==this._hasVideo){var s=new Uint8Array(e,t,n)[0],a=(240&s)>>>4,o=15&s;if(7!==o)return void this._onError(m.default.CODEC_UNSUPPORTED,"Flv: Unsupported codec in video frame: "+o);this._parseAVCVideoPacket(e,t+1,n-1,i,r,a);}}},{key:"_parseAVCVideoPacket",value:function(e,t,n,i,r,s){if(n<4)return void l.default.w(this.TAG,"Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");var a=this._littleEndian,o=new DataView(e,t,n),u=o.getUint8(0),d=16777215&o.getUint32(0,!a),h=d<<8>>8;if(0===u)this._parseAVCDecoderConfigurationRecord(e,t+4,n-4);else if(1===u)this._parseAVCVideoData(e,t+4,n-4,i,r,s,h);else if(2!==u)return void this._onError(m.default.FORMAT_ERROR,"Flv: Invalid video packet type "+u)}},{key:"_parseAVCDecoderConfigurationRecord",value:function(e,t,n){if(n<7)return void l.default.w(this.TAG,"Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");var i=this._videoMetadata,r=this._videoTrack,s=this._littleEndian,a=new DataView(e,t,n);i?void 0!==i.avcc&&l.default.w(this.TAG,"Found another AVCDecoderConfigurationRecord!"):(!1===this._hasVideo&&!1===this._hasVideoFlagOverrided&&(this._hasVideo=!0,this._mediaInfo.hasVideo=!0),i=this._videoMetadata={},i.type="video",i.id=r.id,i.timescale=this._timescale,i.duration=this._duration);var o=a.getUint8(0),u=a.getUint8(1);a.getUint8(2),a.getUint8(3);if(1!==o||0===u)return void this._onError(m.default.FORMAT_ERROR,"Flv: Invalid AVCDecoderConfigurationRecord");if(this._naluLengthSize=1+(3&a.getUint8(4)),3!==this._naluLengthSize&&4!==this._naluLengthSize)return void this._onError(m.default.FORMAT_ERROR,"Flv: Strange NaluLengthSizeMinusOne: "+(this._naluLengthSize-1));var d=31&a.getUint8(5);if(0===d)return void this._onError(m.default.FORMAT_ERROR,"Flv: Invalid AVCDecoderConfigurationRecord: No SPS");d>1&&l.default.w(this.TAG,"Flv: Strange AVCDecoderConfigurationRecord: SPS Count = "+d);for(var h=6,f=0;f<d;f++){var _=a.getUint16(h,!s);if(h+=2,0!==_){var p=new Uint8Array(e,t+h,_);h+=_;var v=c.default.parseSPS(p);if(0===f){i.codecWidth=v.codec_size.width,i.codecHeight=v.codec_size.height,i.presentWidth=v.present_size.width,i.presentHeight=v.present_size.height,i.profile=v.profile_string,i.level=v.level_string,i.bitDepth=v.bit_depth,i.chromaFormat=v.chroma_format,i.sarRatio=v.sar_ratio,i.frameRate=v.frame_rate,!1!==v.frame_rate.fixed&&0!==v.frame_rate.fps_num&&0!==v.frame_rate.fps_den||(i.frameRate=this._referenceFrameRate);var g=i.frameRate.fps_den,y=i.frameRate.fps_num;i.refSampleDuration=i.timescale*(g/y);for(var E=p.subarray(1,4),b="avc1.",S=0;S<3;S++){var k=E[S].toString(16);k.length<2&&(k="0"+k),b+=k;}i.codec=b;var L=this._mediaInfo;L.width=i.codecWidth,L.height=i.codecHeight,L.fps=i.frameRate.fps,L.profile=i.profile,L.level=i.level,L.refFrames=v.ref_frames,L.chromaFormat=v.chroma_format_string,L.sarNum=i.sarRatio.width,L.sarDen=i.sarRatio.height,L.videoCodec=b,L.hasAudio?null!=L.audioCodec&&(L.mimeType='video/x-flv; codecs="'+L.videoCodec+","+L.audioCodec+'"'):L.mimeType='video/x-flv; codecs="'+L.videoCodec+'"',L.isComplete()&&this._onMediaInfo(L);}}}var R=a.getUint8(h);if(0===R)return void this._onError(m.default.FORMAT_ERROR,"Flv: Invalid AVCDecoderConfigurationRecord: No PPS");R>1&&l.default.w(this.TAG,"Flv: Strange AVCDecoderConfigurationRecord: PPS Count = "+R),h++;for(var A=0;A<R;A++){var w=a.getUint16(h,!s);h+=2,0!==w&&(h+=w);}i.avcc=new Uint8Array(n),i.avcc.set(new Uint8Array(e,t,n),0),l.default.v(this.TAG,"Parsed AVCDecoderConfigurationRecord"),this._isInitialMetadataDispatched()?this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack):this._videoInitialMetadataDispatched=!0,this._dispatch=!1,this._onTrackMetadata("video",i);}},{key:"_parseAVCVideoData",value:function(e,t,n,i,r,s,a){for(var o=this._littleEndian,u=new DataView(e,t,n),d=[],h=0,f=0,c=this._naluLengthSize,_=this._timestampBase+i,m=1===s;f<n;){if(f+4>=n){l.default.w(this.TAG,"Malformed Nalu near timestamp "+_+", offset = "+f+", dataSize = "+n);break}var p=u.getUint32(f,!o);if(3===c&&(p>>>=8),p>n-c)return void l.default.w(this.TAG,"Malformed Nalus near timestamp "+_+", NaluSize > DataSize!");var v=31&u.getUint8(f+c);5===v&&(m=!0);var g=new Uint8Array(e,t+f,c+p),y={type:v,data:g};d.push(y),h+=g.byteLength,f+=c+p;}if(d.length){var E=this._videoTrack,b={units:d,length:h,isKeyframe:m,dts:_,cts:a,pts:_+a};m&&(b.fileposition=r),E.samples.push(b),E.length+=h;}}},{key:"onTrackMetadata",get:function(){return this._onTrackMetadata},set:function(e){this._onTrackMetadata=e;}},{key:"onMediaInfo",get:function(){return this._onMediaInfo},set:function(e){this._onMediaInfo=e;}},{key:"onMetaDataArrived",get:function(){return this._onMetaDataArrived},set:function(e){this._onMetaDataArrived=e;}},{key:"onScriptDataArrived",get:function(){return this._onScriptDataArrived},set:function(e){this._onScriptDataArrived=e;}},{key:"onError",get:function(){return this._onError},set:function(e){this._onError=e;}},{key:"onDataAvailable",get:function(){return this._onDataAvailable},set:function(e){this._onDataAvailable=e;}},{key:"timestampBase",get:function(){return this._timestampBase},set:function(e){this._timestampBase=e;}},{key:"overridedDuration",get:function(){return this._duration},set:function(e){this._durationOverrided=!0,this._duration=e,this._mediaInfo.duration=e;}},{key:"overridedHasAudio",set:function(e){this._hasAudioFlagOverrided=!0,this._hasAudio=e,this._mediaInfo.hasAudio=e;}},{key:"overridedHasVideo",set:function(e){this._hasVideoFlagOverrided=!0,this._hasVideo=e,this._mediaInfo.hasVideo=e;}}],[{key:"probe",value:function(e){var t=new Uint8Array(e),n={match:!1};if(70!==t[0]||76!==t[1]||86!==t[2]||1!==t[3])return n;var i=(4&t[4])>>>2!=0,r=0!=(1&t[4]),a=s(t,5);return a<9?n:{match:!0,consumed:a,dataOffset:a,hasAudioTrack:i,hasVideoTrack:r}}}]),e}();n.default=y;},{"../core/media-info.js":7,"../utils/exception.js":40,"../utils/logger.js":41,"./amf-parser.js":15,"./demux-errors.js":16,"./sps-parser.js":19}],19:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=e("./exp-golomb.js"),a=function(e){return e&&e.__esModule?e:{default:e}}(s),o=function(){function e(){i(this,e);}return r(e,null,[{key:"_ebsp2rbsp",value:function(e){for(var t=e,n=t.byteLength,i=new Uint8Array(n),r=0,s=0;s<n;s++)s>=2&&3===t[s]&&0===t[s-1]&&0===t[s-2]||(i[r]=t[s],r++);return new Uint8Array(i.buffer,0,r)}},{key:"parseSPS",value:function(t){var n=e._ebsp2rbsp(t),i=new a.default(n);i.readByte();var r=i.readByte();i.readByte();var s=i.readByte();i.readUEG();var o=e.getProfileString(r),u=e.getLevelString(s),l=1,d=420,h=[0,420,422,444],f=8;if((100===r||110===r||122===r||244===r||44===r||83===r||86===r||118===r||128===r||138===r||144===r)&&(l=i.readUEG(),3===l&&i.readBits(1),l<=3&&(d=h[l]),f=i.readUEG()+8,i.readUEG(),i.readBits(1),i.readBool()))for(var c=3!==l?8:12,_=0;_<c;_++)i.readBool()&&(_<6?e._skipScalingList(i,16):e._skipScalingList(i,64));i.readUEG();var m=i.readUEG();if(0===m)i.readUEG();else if(1===m){i.readBits(1),i.readSEG(),i.readSEG();for(var p=i.readUEG(),v=0;v<p;v++)i.readSEG();}var g=i.readUEG();i.readBits(1);var y=i.readUEG(),E=i.readUEG(),b=i.readBits(1);0===b&&i.readBits(1),i.readBits(1);var S=0,k=0,L=0,R=0;i.readBool()&&(S=i.readUEG(),k=i.readUEG(),L=i.readUEG(),R=i.readUEG());var A=1,w=1,T=0,O=!0,C=0,I=0;if(i.readBool()){if(i.readBool()){var D=i.readByte(),x=[1,12,10,16,40,24,20,32,80,18,15,64,160,4,3,2],M=[1,11,11,11,33,11,11,11,33,11,11,33,99,3,2,1];D>0&&D<16?(A=x[D-1],w=M[D-1]):255===D&&(A=i.readByte()<<8|i.readByte(),w=i.readByte()<<8|i.readByte());}if(i.readBool()&&i.readBool(),i.readBool()&&(i.readBits(4),i.readBool()&&i.readBits(24)),i.readBool()&&(i.readUEG(),i.readUEG()),i.readBool()){var B=i.readBits(32),j=i.readBits(32);O=i.readBool(),C=j,I=2*B,T=C/I;}}var P=1;1===A&&1===w||(P=A/w);var U=0,N=0;if(0===l)U=1,N=2-b;else {var F=3===l?1:2,G=1===l?2:1;U=F,N=G*(2-b);}var V=16*(y+1),z=16*(E+1)*(2-b);V-=(S+k)*U,z-=(L+R)*N;var H=Math.ceil(V*P);return i.destroy(),i=null,{profile_string:o,level_string:u,bit_depth:f,ref_frames:g,chroma_format:d,chroma_format_string:e.getChromaFormatString(d),frame_rate:{fixed:O,fps:T,fps_den:I,fps_num:C},sar_ratio:{width:A,height:w},codec_size:{width:V,height:z},present_size:{width:H,height:z}}}},{key:"_skipScalingList",value:function(e,t){for(var n=8,i=8,r=0,s=0;s<t;s++)0!==i&&(r=e.readSEG(),i=(n+r+256)%256),n=0===i?n:i;}},{key:"getProfileString",value:function(e){switch(e){case 66:return "Baseline";case 77:return "Main";case 88:return "Extended";case 100:return "High";case 110:return "High10";case 122:return "High422";case 244:return "High444";default:return "Unknown"}}},{key:"getLevelString",value:function(e){return (e/10).toFixed(1)}},{key:"getChromaFormatString",value:function(e){switch(e){case 420:return "4:2:0";case 422:return "4:2:2";case 444:return "4:4:4";default:return "Unknown"}}}]),e}();n.default=o;},{"./exp-golomb.js":17}],20:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=e;if(null==n||"object"!==(void 0===n?"undefined":o(n)))throw new S.InvalidArgumentException("MediaDataSource must be an javascript object!");if(!n.hasOwnProperty("type"))throw new S.InvalidArgumentException("MediaDataSource must has type field to indicate video file type!");switch(n.type){case"flv":return new _.default(n,t);default:return new p.default(n,t)}}function s(){return h.default.supportMSEH264Playback()}function a(){return h.default.getFeatureList()}Object.defineProperty(n,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=e("./utils/polyfill.js"),l=i(u),d=e("./core/features.js"),h=i(d),f=e("./io/loader.js"),c=e("./player/flv-player.js"),_=i(c),m=e("./player/native-player.js"),p=i(m),v=e("./player/player-events.js"),g=i(v),y=e("./player/player-errors.js"),E=e("./utils/logging-control.js"),b=i(E),S=e("./utils/exception.js");l.default.install();var k={};k.createPlayer=r,k.isSupported=s,k.getFeatureList=a,k.BaseLoader=f.BaseLoader,k.LoaderStatus=f.LoaderStatus,k.LoaderErrors=f.LoaderErrors,k.Events=g.default,k.ErrorTypes=y.ErrorTypes,k.ErrorDetails=y.ErrorDetails,k.FlvPlayer=_.default,k.NativePlayer=p.default,k.LoggingControl=b.default,Object.defineProperty(k,"version",{enumerable:!0,get:function(){return "1.5.0"}}),n.default=k;},{"./core/features.js":6,"./io/loader.js":24,"./player/flv-player.js":32,"./player/native-player.js":33,"./player/player-errors.js":34,"./player/player-events.js":35,"./utils/exception.js":40,"./utils/logging-control.js":42,"./utils/polyfill.js":43}],21:[function(e,t,n){t.exports=e("./flv.js").default;},{"./flv.js":20}],22:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(n,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,i)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(i)},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),d=e("../utils/logger.js"),h=(i(d),e("../utils/browser.js")),f=i(h),c=e("./loader.js"),_=e("../utils/exception.js"),m=function(e){function t(e,n){r(this,t);var i=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"fetch-stream-loader"));return i.TAG="FetchStreamLoader",i._seekHandler=e,i._config=n,i._needStash=!0,i._requestAbort=!1,i._contentLength=null,i._receivedLength=0,i}return a(t,e),l(t,null,[{key:"isSupported",value:function(){try{var e=f.default.msedge&&f.default.version.minor>=15048,t=!f.default.msedge||e;return self.fetch&&self.ReadableStream&&t}catch(e){return !1}}}]),l(t,[{key:"destroy",value:function(){this.isWorking()&&this.abort(),u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this);}},{key:"open",value:function(e,t){var n=this;this._dataSource=e,this._range=t;var i=e.url;this._config.reuseRedirectedURL&&void 0!=e.redirectedURL&&(i=e.redirectedURL);var r=this._seekHandler.getConfig(i,t),s=new self.Headers;if("object"===o(r.headers)){var a=r.headers;for(var u in a)a.hasOwnProperty(u)&&s.append(u,a[u]);}var l={method:"GET",headers:s,mode:"cors",cache:"default",referrerPolicy:"no-referrer-when-downgrade"};if("object"===o(this._config.headers))for(var d in this._config.headers)s.append(d,this._config.headers[d]);!1===e.cors&&(l.mode="same-origin"),e.withCredentials&&(l.credentials="include"),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),this._status=c.LoaderStatus.kConnecting,self.fetch(r.url,l).then(function(e){if(n._requestAbort)return n._requestAbort=!1,void(n._status=c.LoaderStatus.kIdle);if(e.ok&&e.status>=200&&e.status<=299){if(e.url!==r.url&&n._onURLRedirect){var t=n._seekHandler.removeURLParameters(e.url);n._onURLRedirect(t);}var i=e.headers.get("Content-Length");return null!=i&&(n._contentLength=parseInt(i),0!==n._contentLength&&n._onContentLengthKnown&&n._onContentLengthKnown(n._contentLength)),n._pump.call(n,e.body.getReader())}if(n._status=c.LoaderStatus.kError,!n._onError)throw new _.RuntimeException("FetchStreamLoader: Http code invalid, "+e.status+" "+e.statusText);n._onError(c.LoaderErrors.HTTP_STATUS_CODE_INVALID,{code:e.status,msg:e.statusText});}).catch(function(e){if(n._status=c.LoaderStatus.kError,!n._onError)throw e;n._onError(c.LoaderErrors.EXCEPTION,{code:-1,msg:e.message});});}},{key:"abort",value:function(){this._requestAbort=!0;}},{key:"_pump",value:function(e){var t=this;return e.read().then(function(n){if(n.done)if(null!==t._contentLength&&t._receivedLength<t._contentLength){t._status=c.LoaderStatus.kError;var i=c.LoaderErrors.EARLY_EOF,r={code:-1,msg:"Fetch stream meet Early-EOF"};if(!t._onError)throw new _.RuntimeException(r.msg);t._onError(i,r);}else t._status=c.LoaderStatus.kComplete,t._onComplete&&t._onComplete(t._range.from,t._range.from+t._receivedLength-1);else {if(!0===t._requestAbort)return t._requestAbort=!1,t._status=c.LoaderStatus.kComplete,e.cancel();t._status=c.LoaderStatus.kBuffering;var s=n.value.buffer,a=t._range.from+t._receivedLength;t._receivedLength+=s.byteLength,t._onDataArrival&&t._onDataArrival(s,a,t._receivedLength),t._pump(e);}}).catch(function(e){if(11!==e.code||!f.default.msedge){t._status=c.LoaderStatus.kError;var n=0,i=null;if(19!==e.code&&"network error"!==e.message||!(null===t._contentLength||null!==t._contentLength&&t._receivedLength<t._contentLength)?(n=c.LoaderErrors.EXCEPTION,i={code:e.code,msg:e.message}):(n=c.LoaderErrors.EARLY_EOF,i={code:e.code,msg:"Fetch stream meet Early-EOF"}),!t._onError)throw new _.RuntimeException(i.msg);t._onError(n,i);}})}}]),t}(c.BaseLoader);n.default=m;},{"../utils/browser.js":39,"../utils/exception.js":40,"../utils/logger.js":41,"./loader.js":24}],23:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=e("../utils/logger.js"),o=i(a),u=e("./speed-sampler.js"),l=i(u),d=e("./loader.js"),h=e("./fetch-stream-loader.js"),f=i(h),c=e("./xhr-moz-chunked-loader.js"),_=i(c),m=e("./xhr-msstream-loader.js"),p=(i(m),e("./xhr-range-loader.js")),v=i(p),g=e("./websocket-loader.js"),y=i(g),E=e("./range-seek-handler.js"),b=i(E),S=e("./param-seek-handler.js"),k=i(S),L=e("../utils/exception.js"),R=function(){function e(t,n,i){r(this,e),this.TAG="IOController",this._config=n,this._extraData=i,this._stashInitialSize=393216,void 0!=n.stashInitialSize&&n.stashInitialSize>0&&(this._stashInitialSize=n.stashInitialSize),this._stashUsed=0,this._stashSize=this._stashInitialSize,this._bufferSize=3145728,this._stashBuffer=new ArrayBuffer(this._bufferSize),this._stashByteStart=0,this._enableStash=!0,!1===n.enableStashBuffer&&(this._enableStash=!1),this._loader=null,this._loaderClass=null,this._seekHandler=null,this._dataSource=t,this._isWebSocketURL=/wss?:\/\/(.+?)/.test(t.url),this._refTotalLength=t.filesize?t.filesize:null,this._totalLength=this._refTotalLength,this._fullRequestFlag=!1,this._currentRange=null,this._redirectedURL=null,this._speedNormalized=0,this._speedSampler=new l.default,this._speedNormalizeList=[64,128,256,384,512,768,1024,1536,2048,3072,4096],this._isEarlyEofReconnecting=!1,this._paused=!1,this._resumeFrom=0,this._onDataArrival=null,this._onSeeked=null,this._onError=null,this._onComplete=null,this._onRedirect=null,this._onRecoveredEarlyEof=null,this._selectSeekHandler(),this._selectLoader(),this._createLoader();}return s(e,[{key:"destroy",value:function(){this._loader.isWorking()&&this._loader.abort(),this._loader.destroy(),this._loader=null,this._loaderClass=null,this._dataSource=null,this._stashBuffer=null,this._stashUsed=this._stashSize=this._bufferSize=this._stashByteStart=0,this._currentRange=null,this._speedSampler=null,this._isEarlyEofReconnecting=!1,this._onDataArrival=null,this._onSeeked=null,this._onError=null,this._onComplete=null,this._onRedirect=null,this._onRecoveredEarlyEof=null,this._extraData=null;}},{key:"isWorking",value:function(){return this._loader&&this._loader.isWorking()&&!this._paused}},{key:"isPaused",value:function(){return this._paused}},{key:"_selectSeekHandler",value:function(){var e=this._config;if("range"===e.seekType)this._seekHandler=new b.default(this._config.rangeLoadZeroStart);else if("param"===e.seekType){var t=e.seekParamStart||"bstart",n=e.seekParamEnd||"bend";this._seekHandler=new k.default(t,n);}else {if("custom"!==e.seekType)throw new L.InvalidArgumentException("Invalid seekType in config: "+e.seekType);if("function"!=typeof e.customSeekHandler)throw new L.InvalidArgumentException("Custom seekType specified in config but invalid customSeekHandler!");this._seekHandler=new e.customSeekHandler;}}},{key:"_selectLoader",value:function(){if(null!=this._config.customLoader)this._loaderClass=this._config.customLoader;else if(this._isWebSocketURL)this._loaderClass=y.default;else if(f.default.isSupported())this._loaderClass=f.default;else if(_.default.isSupported())this._loaderClass=_.default;else {if(!v.default.isSupported())throw new L.RuntimeException("Your browser doesn't support xhr with arraybuffer responseType!");this._loaderClass=v.default;}}},{key:"_createLoader",value:function(){this._loader=new this._loaderClass(this._seekHandler,this._config),!1===this._loader.needStashBuffer&&(this._enableStash=!1),this._loader.onContentLengthKnown=this._onContentLengthKnown.bind(this),this._loader.onURLRedirect=this._onURLRedirect.bind(this),this._loader.onDataArrival=this._onLoaderChunkArrival.bind(this),this._loader.onComplete=this._onLoaderComplete.bind(this),this._loader.onError=this._onLoaderError.bind(this);}},{key:"open",value:function(e){this._currentRange={from:0,to:-1},e&&(this._currentRange.from=e),this._speedSampler.reset(),e||(this._fullRequestFlag=!0),this._loader.open(this._dataSource,Object.assign({},this._currentRange));}},{key:"abort",value:function(){this._loader.abort(),this._paused&&(this._paused=!1,this._resumeFrom=0);}},{key:"pause",value:function(){this.isWorking()&&(this._loader.abort(),0!==this._stashUsed?(this._resumeFrom=this._stashByteStart,this._currentRange.to=this._stashByteStart-1):this._resumeFrom=this._currentRange.to+1,this._stashUsed=0,this._stashByteStart=0,this._paused=!0);}},{key:"resume",value:function(){if(this._paused){this._paused=!1;var e=this._resumeFrom;this._resumeFrom=0,this._internalSeek(e,!0);}}},{key:"seek",value:function(e){this._paused=!1,this._stashUsed=0,this._stashByteStart=0,this._internalSeek(e,!0);}},{key:"_internalSeek",value:function(e,t){this._loader.isWorking()&&this._loader.abort(),this._flushStashBuffer(t),this._loader.destroy(),this._loader=null;var n={from:e,to:-1};this._currentRange={from:n.from,to:-1},this._speedSampler.reset(),this._stashSize=this._stashInitialSize,this._createLoader(),this._loader.open(this._dataSource,n),this._onSeeked&&this._onSeeked();}},{key:"updateUrl",value:function(e){if(!e||"string"!=typeof e||0===e.length)throw new L.InvalidArgumentException("Url must be a non-empty string!");this._dataSource.url=e;}},{key:"_expandBuffer",value:function(e){for(var t=this._stashSize;t+1048576<e;)t*=2;if((t+=1048576)!==this._bufferSize){var n=new ArrayBuffer(t);if(this._stashUsed>0){var i=new Uint8Array(this._stashBuffer,0,this._stashUsed);new Uint8Array(n,0,t).set(i,0);}this._stashBuffer=n,this._bufferSize=t;}}},{key:"_normalizeSpeed",value:function(e){var t=this._speedNormalizeList,n=t.length-1,i=0,r=0,s=n;if(e<t[0])return t[0];for(;r<=s;){if((i=r+Math.floor((s-r)/2))===n||e>=t[i]&&e<t[i+1])return t[i];t[i]<e?r=i+1:s=i-1;}}},{key:"_adjustStashSize",value:function(e){var t=0;(t=this._config.isLive?e:e<512?e:e>=512&&e<=1024?Math.floor(1.5*e):2*e)>8192&&(t=8192);var n=1024*t+1048576;this._bufferSize<n&&this._expandBuffer(n),this._stashSize=1024*t;}},{key:"_dispatchChunks",value:function(e,t){return this._currentRange.to=t+e.byteLength-1,this._onDataArrival(e,t)}},{key:"_onURLRedirect",value:function(e){this._redirectedURL=e,this._onRedirect&&this._onRedirect(e);}},{key:"_onContentLengthKnown",value:function(e){e&&this._fullRequestFlag&&(this._totalLength=e,this._fullRequestFlag=!1);}},{key:"_onLoaderChunkArrival",value:function(e,t,n){if(!this._onDataArrival)throw new L.IllegalStateException("IOController: No existing consumer (onDataArrival) callback!");if(!this._paused){this._isEarlyEofReconnecting&&(this._isEarlyEofReconnecting=!1,this._onRecoveredEarlyEof&&this._onRecoveredEarlyEof()),this._speedSampler.addBytes(e.byteLength);var i=this._speedSampler.lastSecondKBps;if(0!==i){var r=this._normalizeSpeed(i);this._speedNormalized!==r&&(this._speedNormalized=r,this._adjustStashSize(r));}if(this._enableStash)if(0===this._stashUsed&&0===this._stashByteStart&&(this._stashByteStart=t),this._stashUsed+e.byteLength<=this._stashSize){var s=new Uint8Array(this._stashBuffer,0,this._stashSize);s.set(new Uint8Array(e),this._stashUsed),this._stashUsed+=e.byteLength;}else {var a=new Uint8Array(this._stashBuffer,0,this._bufferSize);if(this._stashUsed>0){var o=this._stashBuffer.slice(0,this._stashUsed),u=this._dispatchChunks(o,this._stashByteStart);if(u<o.byteLength){if(u>0){var l=new Uint8Array(o,u);a.set(l,0),this._stashUsed=l.byteLength,this._stashByteStart+=u;}}else this._stashUsed=0,this._stashByteStart+=u;this._stashUsed+e.byteLength>this._bufferSize&&(this._expandBuffer(this._stashUsed+e.byteLength),a=new Uint8Array(this._stashBuffer,0,this._bufferSize)),a.set(new Uint8Array(e),this._stashUsed),this._stashUsed+=e.byteLength;}else {var d=this._dispatchChunks(e,t);if(d<e.byteLength){var h=e.byteLength-d;h>this._bufferSize&&(this._expandBuffer(h),a=new Uint8Array(this._stashBuffer,0,this._bufferSize)),a.set(new Uint8Array(e,d),0),this._stashUsed+=h,this._stashByteStart=t+d;}}}else if(0===this._stashUsed){var f=this._dispatchChunks(e,t);if(f<e.byteLength){var c=e.byteLength-f;c>this._bufferSize&&this._expandBuffer(c);var _=new Uint8Array(this._stashBuffer,0,this._bufferSize);_.set(new Uint8Array(e,f),0),this._stashUsed+=c,this._stashByteStart=t+f;}}else {this._stashUsed+e.byteLength>this._bufferSize&&this._expandBuffer(this._stashUsed+e.byteLength);var m=new Uint8Array(this._stashBuffer,0,this._bufferSize);m.set(new Uint8Array(e),this._stashUsed),this._stashUsed+=e.byteLength;var p=this._dispatchChunks(this._stashBuffer.slice(0,this._stashUsed),this._stashByteStart);if(p<this._stashUsed&&p>0){var v=new Uint8Array(this._stashBuffer,p);m.set(v,0);}this._stashUsed-=p,this._stashByteStart+=p;}}}},{key:"_flushStashBuffer",value:function(e){if(this._stashUsed>0){var t=this._stashBuffer.slice(0,this._stashUsed),n=this._dispatchChunks(t,this._stashByteStart),i=t.byteLength-n;if(n<t.byteLength){if(!e){if(n>0){var r=new Uint8Array(this._stashBuffer,0,this._bufferSize),s=new Uint8Array(t,n);r.set(s,0),this._stashUsed=s.byteLength,this._stashByteStart+=n;}return 0}o.default.w(this.TAG,i+" bytes unconsumed data remain when flush buffer, dropped");}return this._stashUsed=0,this._stashByteStart=0,i}return 0}},{key:"_onLoaderComplete",value:function(e,t){this._flushStashBuffer(!0),this._onComplete&&this._onComplete(this._extraData);}},{key:"_onLoaderError",value:function(e,t){switch(o.default.e(this.TAG,"Loader error, code = "+t.code+", msg = "+t.msg),this._flushStashBuffer(!1),this._isEarlyEofReconnecting&&(this._isEarlyEofReconnecting=!1,e=d.LoaderErrors.UNRECOVERABLE_EARLY_EOF),e){case d.LoaderErrors.EARLY_EOF:if(!this._config.isLive&&this._totalLength){var n=this._currentRange.to+1;return void(n<this._totalLength&&(o.default.w(this.TAG,"Connection lost, trying reconnect..."),this._isEarlyEofReconnecting=!0,this._internalSeek(n,!1)))}e=d.LoaderErrors.UNRECOVERABLE_EARLY_EOF;break;case d.LoaderErrors.UNRECOVERABLE_EARLY_EOF:case d.LoaderErrors.CONNECTING_TIMEOUT:case d.LoaderErrors.HTTP_STATUS_CODE_INVALID:case d.LoaderErrors.EXCEPTION:}if(!this._onError)throw new L.RuntimeException("IOException: "+t.msg);this._onError(e,t);}},{key:"status",get:function(){return this._loader.status}},{key:"extraData",get:function(){return this._extraData},set:function(e){this._extraData=e;}},{key:"onDataArrival",get:function(){return this._onDataArrival},set:function(e){this._onDataArrival=e;}},{key:"onSeeked",get:function(){return this._onSeeked},set:function(e){this._onSeeked=e;}},{key:"onError",get:function(){return this._onError},set:function(e){this._onError=e;}},{key:"onComplete",get:function(){return this._onComplete},set:function(e){this._onComplete=e;}},{key:"onRedirect",get:function(){return this._onRedirect},set:function(e){this._onRedirect=e;}},{key:"onRecoveredEarlyEof",get:function(){return this._onRecoveredEarlyEof},set:function(e){this._onRecoveredEarlyEof=e;}},{key:"currentURL",get:function(){return this._dataSource.url}},{key:"hasRedirect",get:function(){return null!=this._redirectedURL||void 0!=this._dataSource.redirectedURL}},{key:"currentRedirectedURL",get:function(){return this._redirectedURL||this._dataSource.redirectedURL}},{key:"currentSpeed",get:function(){return this._loaderClass===v.default?this._loader.currentSpeed:this._speedSampler.lastSecondKBps}},{key:"loaderType",get:function(){return this._loader.type}}]),e}();n.default=R;},{"../utils/exception.js":40,"../utils/logger.js":41,"./fetch-stream-loader.js":22,"./loader.js":24,
"./param-seek-handler.js":25,"./range-seek-handler.js":26,"./speed-sampler.js":27,"./websocket-loader.js":28,"./xhr-moz-chunked-loader.js":29,"./xhr-msstream-loader.js":30,"./xhr-range-loader.js":31}],24:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.BaseLoader=n.LoaderErrors=n.LoaderStatus=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=e("../utils/exception.js"),a=n.LoaderStatus={kIdle:0,kConnecting:1,kBuffering:2,kError:3,kComplete:4};n.LoaderErrors={OK:"OK",EXCEPTION:"Exception",HTTP_STATUS_CODE_INVALID:"HttpStatusCodeInvalid",CONNECTING_TIMEOUT:"ConnectingTimeout",EARLY_EOF:"EarlyEof",UNRECOVERABLE_EARLY_EOF:"UnrecoverableEarlyEof"},n.BaseLoader=function(){function e(t){i(this,e),this._type=t||"undefined",this._status=a.kIdle,this._needStash=!1,this._onContentLengthKnown=null,this._onURLRedirect=null,this._onDataArrival=null,this._onError=null,this._onComplete=null;}return r(e,[{key:"destroy",value:function(){this._status=a.kIdle,this._onContentLengthKnown=null,this._onURLRedirect=null,this._onDataArrival=null,this._onError=null,this._onComplete=null;}},{key:"isWorking",value:function(){return this._status===a.kConnecting||this._status===a.kBuffering}},{key:"open",value:function(e,t){throw new s.NotImplementedException("Unimplemented abstract function!")}},{key:"abort",value:function(){throw new s.NotImplementedException("Unimplemented abstract function!")}},{key:"type",get:function(){return this._type}},{key:"status",get:function(){return this._status}},{key:"needStashBuffer",get:function(){return this._needStash}},{key:"onContentLengthKnown",get:function(){return this._onContentLengthKnown},set:function(e){this._onContentLengthKnown=e;}},{key:"onURLRedirect",get:function(){return this._onURLRedirect},set:function(e){this._onURLRedirect=e;}},{key:"onDataArrival",get:function(){return this._onDataArrival},set:function(e){this._onDataArrival=e;}},{key:"onError",get:function(){return this._onError},set:function(e){this._onError=e;}},{key:"onComplete",get:function(){return this._onComplete},set:function(e){this._onComplete=e;}}]),e}();},{"../utils/exception.js":40}],25:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(t,n){i(this,e),this._startName=t,this._endName=n;}return r(e,[{key:"getConfig",value:function(e,t){var n=e;if(0!==t.from||-1!==t.to){var i=!0;-1===n.indexOf("?")&&(n+="?",i=!1),i&&(n+="&"),n+=this._startName+"="+t.from.toString(),-1!==t.to&&(n+="&"+this._endName+"="+t.to.toString());}return {url:n,headers:{}}}},{key:"removeURLParameters",value:function(e){var t=e.split("?")[0],n=void 0,i=e.indexOf("?");-1!==i&&(n=e.substring(i+1));var r="";if(void 0!=n&&n.length>0)for(var s=n.split("&"),a=0;a<s.length;a++){var o=s[a].split("="),u=a>0;o[0]!==this._startName&&o[0]!==this._endName&&(u&&(r+="&"),r+=s[a]);}return 0===r.length?t:t+"?"+r}}]),e}();n.default=s;},{}],26:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(t){i(this,e),this._zeroStart=t||!1;}return r(e,[{key:"getConfig",value:function(e,t){var n={};if(0!==t.from||-1!==t.to){var i=void 0;i=-1!==t.to?"bytes="+t.from.toString()+"-"+t.to.toString():"bytes="+t.from.toString()+"-",n.Range=i;}else this._zeroStart&&(n.Range="bytes=0-");return {url:e,headers:n}}},{key:"removeURLParameters",value:function(e){return e}}]),e}();n.default=s;},{}],27:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(){i(this,e),this._firstCheckpoint=0,this._lastCheckpoint=0,this._intervalBytes=0,this._totalBytes=0,this._lastSecondBytes=0,self.performance&&self.performance.now?this._now=self.performance.now.bind(self.performance):this._now=Date.now;}return r(e,[{key:"reset",value:function(){this._firstCheckpoint=this._lastCheckpoint=0,this._totalBytes=this._intervalBytes=0,this._lastSecondBytes=0;}},{key:"addBytes",value:function(e){0===this._firstCheckpoint?(this._firstCheckpoint=this._now(),this._lastCheckpoint=this._firstCheckpoint,this._intervalBytes+=e,this._totalBytes+=e):this._now()-this._lastCheckpoint<1e3?(this._intervalBytes+=e,this._totalBytes+=e):(this._lastSecondBytes=this._intervalBytes,this._intervalBytes=e,this._totalBytes+=e,this._lastCheckpoint=this._now());}},{key:"currentKBps",get:function(){this.addBytes(0);var e=(this._now()-this._lastCheckpoint)/1e3;return 0==e&&(e=1),this._intervalBytes/e/1024}},{key:"lastSecondKBps",get:function(){return this.addBytes(0),0!==this._lastSecondBytes?this._lastSecondBytes/1024:this._now()-this._lastCheckpoint>=500?this.currentKBps:0}},{key:"averageKBps",get:function(){var e=(this._now()-this._firstCheckpoint)/1e3;return this._totalBytes/e/1024}}]),e}();n.default=s;},{}],28:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(n,"__esModule",{value:!0});var a=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,i)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(i)},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=e("../utils/logger.js"),l=(function(e){e&&e.__esModule;}(u),e("./loader.js")),d=e("../utils/exception.js"),h=function(e){function t(){i(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"websocket-loader"));return e.TAG="WebSocketLoader",e._needStash=!0,e._ws=null,e._requestAbort=!1,e._receivedLength=0,e}return s(t,e),o(t,null,[{key:"isSupported",value:function(){try{return void 0!==self.WebSocket}catch(e){return !1}}}]),o(t,[{key:"destroy",value:function(){this._ws&&this.abort(),a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this);}},{key:"open",value:function(e){try{var t=this._ws=new self.WebSocket(e.url);t.binaryType="arraybuffer",t.onopen=this._onWebSocketOpen.bind(this),t.onclose=this._onWebSocketClose.bind(this),t.onmessage=this._onWebSocketMessage.bind(this),t.onerror=this._onWebSocketError.bind(this),this._status=l.LoaderStatus.kConnecting;}catch(e){this._status=l.LoaderStatus.kError;var n={code:e.code,msg:e.message};if(!this._onError)throw new d.RuntimeException(n.msg);this._onError(l.LoaderErrors.EXCEPTION,n);}}},{key:"abort",value:function(){var e=this._ws;!e||0!==e.readyState&&1!==e.readyState||(this._requestAbort=!0,e.close()),this._ws=null,this._status=l.LoaderStatus.kComplete;}},{key:"_onWebSocketOpen",value:function(e){this._status=l.LoaderStatus.kBuffering;}},{key:"_onWebSocketClose",value:function(e){if(!0===this._requestAbort)return void(this._requestAbort=!1);this._status=l.LoaderStatus.kComplete,this._onComplete&&this._onComplete(0,this._receivedLength-1);}},{key:"_onWebSocketMessage",value:function(e){var t=this;if(e.data instanceof ArrayBuffer)this._dispatchArrayBuffer(e.data);else if(e.data instanceof Blob){var n=new FileReader;n.onload=function(){t._dispatchArrayBuffer(n.result);},n.readAsArrayBuffer(e.data);}else {this._status=l.LoaderStatus.kError;var i={code:-1,msg:"Unsupported WebSocket message type: "+e.data.constructor.name};if(!this._onError)throw new d.RuntimeException(i.msg);this._onError(l.LoaderErrors.EXCEPTION,i);}}},{key:"_dispatchArrayBuffer",value:function(e){var t=e,n=this._receivedLength;this._receivedLength+=t.byteLength,this._onDataArrival&&this._onDataArrival(t,n,this._receivedLength);}},{key:"_onWebSocketError",value:function(e){this._status=l.LoaderStatus.kError;var t={code:e.code,msg:e.message};if(!this._onError)throw new d.RuntimeException(t.msg);this._onError(l.LoaderErrors.EXCEPTION,t);}}]),t}(l.BaseLoader);n.default=h;},{"../utils/exception.js":40,"../utils/logger.js":41,"./loader.js":24}],29:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(n,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,i)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(i)},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=e("../utils/logger.js"),d=function(e){return e&&e.__esModule?e:{default:e}}(l),h=e("./loader.js"),f=e("../utils/exception.js"),c=function(e){function t(e,n){i(this,t);var s=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"xhr-moz-chunked-loader"));return s.TAG="MozChunkedLoader",s._seekHandler=e,s._config=n,s._needStash=!0,s._xhr=null,s._requestAbort=!1,s._contentLength=null,s._receivedLength=0,s}return s(t,e),u(t,null,[{key:"isSupported",value:function(){try{var e=new XMLHttpRequest;return e.open("GET","https://example.com",!0),e.responseType="moz-chunked-arraybuffer","moz-chunked-arraybuffer"===e.responseType}catch(e){return d.default.w("MozChunkedLoader",e.message),!1}}}]),u(t,[{key:"destroy",value:function(){this.isWorking()&&this.abort(),this._xhr&&(this._xhr.onreadystatechange=null,this._xhr.onprogress=null,this._xhr.onloadend=null,this._xhr.onerror=null,this._xhr=null),o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this);}},{key:"open",value:function(e,t){this._dataSource=e,this._range=t;var n=e.url;this._config.reuseRedirectedURL&&void 0!=e.redirectedURL&&(n=e.redirectedURL);var i=this._seekHandler.getConfig(n,t);this._requestURL=i.url;var r=this._xhr=new XMLHttpRequest;if(r.open("GET",i.url,!0),r.responseType="moz-chunked-arraybuffer",r.onreadystatechange=this._onReadyStateChange.bind(this),r.onprogress=this._onProgress.bind(this),r.onloadend=this._onLoadEnd.bind(this),r.onerror=this._onXhrError.bind(this),e.withCredentials&&(r.withCredentials=!0),"object"===a(i.headers)){var s=i.headers;for(var o in s)s.hasOwnProperty(o)&&r.setRequestHeader(o,s[o]);}if("object"===a(this._config.headers)){var u=this._config.headers;for(var l in u)u.hasOwnProperty(l)&&r.setRequestHeader(l,u[l]);}this._status=h.LoaderStatus.kConnecting,r.send();}},{key:"abort",value:function(){this._requestAbort=!0,this._xhr&&this._xhr.abort(),this._status=h.LoaderStatus.kComplete;}},{key:"_onReadyStateChange",value:function(e){var t=e.target;if(2===t.readyState){if(void 0!=t.responseURL&&t.responseURL!==this._requestURL&&this._onURLRedirect){var n=this._seekHandler.removeURLParameters(t.responseURL);this._onURLRedirect(n);}if(0!==t.status&&(t.status<200||t.status>299)){if(this._status=h.LoaderStatus.kError,!this._onError)throw new f.RuntimeException("MozChunkedLoader: Http code invalid, "+t.status+" "+t.statusText);this._onError(h.LoaderErrors.HTTP_STATUS_CODE_INVALID,{code:t.status,msg:t.statusText});}else this._status=h.LoaderStatus.kBuffering;}}},{key:"_onProgress",value:function(e){if(this._status!==h.LoaderStatus.kError){null===this._contentLength&&null!==e.total&&0!==e.total&&(this._contentLength=e.total,this._onContentLengthKnown&&this._onContentLengthKnown(this._contentLength));var t=e.target.response,n=this._range.from+this._receivedLength;this._receivedLength+=t.byteLength,this._onDataArrival&&this._onDataArrival(t,n,this._receivedLength);}}},{key:"_onLoadEnd",value:function(e){if(!0===this._requestAbort)return void(this._requestAbort=!1);this._status!==h.LoaderStatus.kError&&(this._status=h.LoaderStatus.kComplete,this._onComplete&&this._onComplete(this._range.from,this._range.from+this._receivedLength-1));}},{key:"_onXhrError",value:function(e){this._status=h.LoaderStatus.kError;var t=0,n=null;if(this._contentLength&&e.loaded<this._contentLength?(t=h.LoaderErrors.EARLY_EOF,n={code:-1,msg:"Moz-Chunked stream meet Early-Eof"}):(t=h.LoaderErrors.EXCEPTION,n={code:-1,msg:e.constructor.name+" "+e.type}),!this._onError)throw new f.RuntimeException(n.msg);this._onError(t,n);}}]),t}(h.BaseLoader);n.default=c;},{"../utils/exception.js":40,"../utils/logger.js":41,"./loader.js":24}],30:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(n,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,i)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(i)},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=e("../utils/logger.js"),d=function(e){return e&&e.__esModule?e:{default:e}}(l),h=e("./loader.js"),f=e("../utils/exception.js"),c=function(e){function t(e,n){i(this,t);var s=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"xhr-msstream-loader"));return s.TAG="MSStreamLoader",s._seekHandler=e,s._config=n,s._needStash=!0,s._xhr=null,s._reader=null,s._totalRange=null,s._currentRange=null,s._currentRequestURL=null,s._currentRedirectedURL=null,s._contentLength=null,s._receivedLength=0,s._bufferLimit=16777216,s._lastTimeBufferSize=0,s._isReconnecting=!1,s}return s(t,e),u(t,null,[{key:"isSupported",value:function(){try{if(void 0===self.MSStream||void 0===self.MSStreamReader)return !1;var e=new XMLHttpRequest;return e.open("GET","https://example.com",!0),e.responseType="ms-stream","ms-stream"===e.responseType}catch(e){return d.default.w("MSStreamLoader",e.message),!1}}}]),u(t,[{key:"destroy",value:function(){this.isWorking()&&this.abort(),this._reader&&(this._reader.onprogress=null,this._reader.onload=null,this._reader.onerror=null,this._reader=null),this._xhr&&(this._xhr.onreadystatechange=null,this._xhr=null),o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this);}},{key:"open",value:function(e,t){this._internalOpen(e,t,!1);}},{key:"_internalOpen",value:function(e,t,n){this._dataSource=e,n?this._currentRange=t:this._totalRange=t;var i=e.url;this._config.reuseRedirectedURL&&(void 0!=this._currentRedirectedURL?i=this._currentRedirectedURL:void 0!=e.redirectedURL&&(i=e.redirectedURL));var r=this._seekHandler.getConfig(i,t);this._currentRequestURL=r.url;var s=this._reader=new self.MSStreamReader;s.onprogress=this._msrOnProgress.bind(this),s.onload=this._msrOnLoad.bind(this),s.onerror=this._msrOnError.bind(this);var o=this._xhr=new XMLHttpRequest;if(o.open("GET",r.url,!0),o.responseType="ms-stream",o.onreadystatechange=this._xhrOnReadyStateChange.bind(this),o.onerror=this._xhrOnError.bind(this),e.withCredentials&&(o.withCredentials=!0),"object"===a(r.headers)){var u=r.headers;for(var l in u)u.hasOwnProperty(l)&&o.setRequestHeader(l,u[l]);}if("object"===a(this._config.headers)){var d=this._config.headers;for(var f in d)d.hasOwnProperty(f)&&o.setRequestHeader(f,d[f]);}this._isReconnecting?this._isReconnecting=!1:this._status=h.LoaderStatus.kConnecting,o.send();}},{key:"abort",value:function(){this._internalAbort(),this._status=h.LoaderStatus.kComplete;}},{key:"_internalAbort",value:function(){this._reader&&(1===this._reader.readyState&&this._reader.abort(),this._reader.onprogress=null,this._reader.onload=null,this._reader.onerror=null,this._reader=null),this._xhr&&(this._xhr.abort(),this._xhr.onreadystatechange=null,this._xhr=null);}},{key:"_xhrOnReadyStateChange",value:function(e){var t=e.target;if(2===t.readyState)if(t.status>=200&&t.status<=299){if(this._status=h.LoaderStatus.kBuffering,void 0!=t.responseURL){var n=this._seekHandler.removeURLParameters(t.responseURL);t.responseURL!==this._currentRequestURL&&n!==this._currentRedirectedURL&&(this._currentRedirectedURL=n,this._onURLRedirect&&this._onURLRedirect(n));}var i=t.getResponseHeader("Content-Length");if(null!=i&&null==this._contentLength){var r=parseInt(i);r>0&&(this._contentLength=r,this._onContentLengthKnown&&this._onContentLengthKnown(this._contentLength));}}else {if(this._status=h.LoaderStatus.kError,!this._onError)throw new f.RuntimeException("MSStreamLoader: Http code invalid, "+t.status+" "+t.statusText);this._onError(h.LoaderErrors.HTTP_STATUS_CODE_INVALID,{code:t.status,msg:t.statusText});}else if(3===t.readyState&&t.status>=200&&t.status<=299){this._status=h.LoaderStatus.kBuffering;var s=t.response;this._reader.readAsArrayBuffer(s);}}},{key:"_xhrOnError",value:function(e){this._status=h.LoaderStatus.kError;var t=h.LoaderErrors.EXCEPTION,n={code:-1,msg:e.constructor.name+" "+e.type};if(!this._onError)throw new f.RuntimeException(n.msg);this._onError(t,n);}},{key:"_msrOnProgress",value:function(e){var t=e.target,n=t.result;if(null==n)return void this._doReconnectIfNeeded();var i=n.slice(this._lastTimeBufferSize);this._lastTimeBufferSize=n.byteLength;var r=this._totalRange.from+this._receivedLength;this._receivedLength+=i.byteLength,this._onDataArrival&&this._onDataArrival(i,r,this._receivedLength),n.byteLength>=this._bufferLimit&&(d.default.v(this.TAG,"MSStream buffer exceeded max size near "+(r+i.byteLength)+", reconnecting..."),this._doReconnectIfNeeded());}},{key:"_doReconnectIfNeeded",value:function(){if(null==this._contentLength||this._receivedLength<this._contentLength){this._isReconnecting=!0,this._lastTimeBufferSize=0,this._internalAbort();var e={from:this._totalRange.from+this._receivedLength,to:-1};this._internalOpen(this._dataSource,e,!0);}}},{key:"_msrOnLoad",value:function(e){this._status=h.LoaderStatus.kComplete,this._onComplete&&this._onComplete(this._totalRange.from,this._totalRange.from+this._receivedLength-1);}},{key:"_msrOnError",value:function(e){this._status=h.LoaderStatus.kError;var t=0,n=null;if(this._contentLength&&this._receivedLength<this._contentLength?(t=h.LoaderErrors.EARLY_EOF,n={code:-1,msg:"MSStream meet Early-Eof"}):(t=h.LoaderErrors.EARLY_EOF,n={code:-1,msg:e.constructor.name+" "+e.type}),!this._onError)throw new f.RuntimeException(n.msg);this._onError(t,n);}}]),t}(h.BaseLoader);n.default=c;},{"../utils/exception.js":40,"../utils/logger.js":41,"./loader.js":24}],31:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(n,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,i)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(i)},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),d=e("../utils/logger.js"),h=i(d),f=e("./speed-sampler.js"),c=i(f),_=e("./loader.js"),m=e("../utils/exception.js"),p=function(e){function t(e,n){r(this,t);var i=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"xhr-range-loader"));return i.TAG="RangeLoader",i._seekHandler=e,i._config=n,i._needStash=!1,i._chunkSizeKBList=[128,256,384,512,768,1024,1536,2048,3072,4096,5120,6144,7168,8192],i._currentChunkSizeKB=384,i._currentSpeedNormalized=0,i._zeroSpeedChunkCount=0,i._xhr=null,i._speedSampler=new c.default,i._requestAbort=!1,i._waitForTotalLength=!1,i._totalLengthReceived=!1,i._currentRequestURL=null,i._currentRedirectedURL=null,i._currentRequestRange=null,i._totalLength=null,i._contentLength=null,i._receivedLength=0,i._lastTimeLoaded=0,i}return a(t,e),l(t,null,[{key:"isSupported",value:function(){try{var e=new XMLHttpRequest;return e.open("GET","https://example.com",!0),e.responseType="arraybuffer","arraybuffer"===e.responseType}catch(e){return h.default.w("RangeLoader",e.message),!1}}}]),l(t,[{key:"destroy",value:function(){this.isWorking()&&this.abort(),this._xhr&&(this._xhr.onreadystatechange=null,this._xhr.onprogress=null,this._xhr.onload=null,this._xhr.onerror=null,this._xhr=null),u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this);}},{key:"open",value:function(e,t){this._dataSource=e,this._range=t,this._status=_.LoaderStatus.kConnecting;var n=!1;void 0!=this._dataSource.filesize&&0!==this._dataSource.filesize&&(n=!0,this._totalLength=this._dataSource.filesize),this._totalLengthReceived||n?this._openSubRange():(this._waitForTotalLength=!0,this._internalOpen(this._dataSource,{from:0,to:-1}));}},{key:"_openSubRange",value:function(){var e=1024*this._currentChunkSizeKB,t=this._range.from+this._receivedLength,n=t+e;null!=this._contentLength&&n-this._range.from>=this._contentLength&&(n=this._range.from+this._contentLength-1),this._currentRequestRange={from:t,to:n},this._internalOpen(this._dataSource,this._currentRequestRange);}},{key:"_internalOpen",value:function(e,t){this._lastTimeLoaded=0;var n=e.url;this._config.reuseRedirectedURL&&(void 0!=this._currentRedirectedURL?n=this._currentRedirectedURL:void 0!=e.redirectedURL&&(n=e.redirectedURL));var i=this._seekHandler.getConfig(n,t);this._currentRequestURL=i.url;var r=this._xhr=new XMLHttpRequest;if(r.open("GET",i.url,!0),r.responseType="arraybuffer",r.onreadystatechange=this._onReadyStateChange.bind(this),r.onprogress=this._onProgress.bind(this),r.onload=this._onLoad.bind(this),r.onerror=this._onXhrError.bind(this),e.withCredentials&&(r.withCredentials=!0),"object"===o(i.headers)){var s=i.headers;for(var a in s)s.hasOwnProperty(a)&&r.setRequestHeader(a,s[a]);}if("object"===o(this._config.headers)){var u=this._config.headers;for(var l in u)u.hasOwnProperty(l)&&r.setRequestHeader(l,u[l]);}r.send();}},{key:"abort",value:function(){this._requestAbort=!0,this._internalAbort(),this._status=_.LoaderStatus.kComplete;}},{key:"_internalAbort",value:function(){this._xhr&&(this._xhr.onreadystatechange=null,this._xhr.onprogress=null,this._xhr.onload=null,this._xhr.onerror=null,this._xhr.abort(),this._xhr=null);}},{key:"_onReadyStateChange",value:function(e){var t=e.target;if(2===t.readyState){if(void 0!=t.responseURL){var n=this._seekHandler.removeURLParameters(t.responseURL);t.responseURL!==this._currentRequestURL&&n!==this._currentRedirectedURL&&(this._currentRedirectedURL=n,this._onURLRedirect&&this._onURLRedirect(n));}if(t.status>=200&&t.status<=299){if(this._waitForTotalLength)return;this._status=_.LoaderStatus.kBuffering;}else {if(this._status=_.LoaderStatus.kError,!this._onError)throw new m.RuntimeException("RangeLoader: Http code invalid, "+t.status+" "+t.statusText);this._onError(_.LoaderErrors.HTTP_STATUS_CODE_INVALID,{code:t.status,msg:t.statusText});}}}},{key:"_onProgress",value:function(e){if(this._status!==_.LoaderStatus.kError){if(null===this._contentLength){var t=!1;if(this._waitForTotalLength){this._waitForTotalLength=!1,this._totalLengthReceived=!0,t=!0;var n=e.total;this._internalAbort(),null!=n&0!==n&&(this._totalLength=n);}if(-1===this._range.to?this._contentLength=this._totalLength-this._range.from:this._contentLength=this._range.to-this._range.from+1,t)return void this._openSubRange();this._onContentLengthKnown&&this._onContentLengthKnown(this._contentLength);}var i=e.loaded-this._lastTimeLoaded;this._lastTimeLoaded=e.loaded,this._speedSampler.addBytes(i);}}},{key:"_normalizeSpeed",value:function(e){var t=this._chunkSizeKBList,n=t.length-1,i=0,r=0,s=n;if(e<t[0])return t[0];for(;r<=s;){if((i=r+Math.floor((s-r)/2))===n||e>=t[i]&&e<t[i+1])return t[i];t[i]<e?r=i+1:s=i-1;}}},{key:"_onLoad",value:function(e){if(this._status!==_.LoaderStatus.kError){if(this._waitForTotalLength)return void(this._waitForTotalLength=!1);this._lastTimeLoaded=0;var t=this._speedSampler.lastSecondKBps;if(0===t&&++this._zeroSpeedChunkCount>=3&&(t=this._speedSampler.currentKBps),0!==t){var n=this._normalizeSpeed(t);this._currentSpeedNormalized!==n&&(this._currentSpeedNormalized=n,this._currentChunkSizeKB=n);}var i=e.target.response,r=this._range.from+this._receivedLength;this._receivedLength+=i.byteLength;var s=!1;null!=this._contentLength&&this._receivedLength<this._contentLength?this._openSubRange():s=!0,this._onDataArrival&&this._onDataArrival(i,r,this._receivedLength),s&&(this._status=_.LoaderStatus.kComplete,this._onComplete&&this._onComplete(this._range.from,this._range.from+this._receivedLength-1));}}},{key:"_onXhrError",value:function(e){this._status=_.LoaderStatus.kError;var t=0,n=null;if(this._contentLength&&this._receivedLength>0&&this._receivedLength<this._contentLength?(t=_.LoaderErrors.EARLY_EOF,n={code:-1,msg:"RangeLoader meet Early-Eof"}):(t=_.LoaderErrors.EXCEPTION,n={code:-1,msg:e.constructor.name+" "+e.type}),!this._onError)throw new m.RuntimeException(n.msg);this._onError(t,n);}},{key:"currentSpeed",get:function(){return this._speedSampler.lastSecondKBps}}]),t}(_.BaseLoader);n.default=p;},{"../utils/exception.js":40,"../utils/logger.js":41,"./loader.js":24,"./speed-sampler.js":27}],32:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=e("events"),u=i(o),l=e("../utils/logger.js"),d=i(l),h=e("../utils/browser.js"),f=i(h),c=e("./player-events.js"),_=i(c),m=e("../core/transmuxer.js"),p=i(m),v=e("../core/transmuxing-events.js"),g=i(v),y=e("../core/mse-controller.js"),E=i(y),b=e("../core/mse-events.js"),S=i(b),k=e("./player-errors.js"),L=e("../config.js"),R=e("../utils/exception.js"),A=function(){function e(t,n){if(r(this,e),this.TAG="FlvPlayer",this._type="FlvPlayer",this._emitter=new u.default,this._config=(0, L.createDefaultConfig)(),"object"===(void 0===n?"undefined":s(n))&&Object.assign(this._config,n),"flv"!==t.type.toLowerCase())throw new R.InvalidArgumentException("FlvPlayer requires an flv MediaDataSource input!");!0===t.isLive&&(this._config.isLive=!0),this.e={onvLoadedMetadata:this._onvLoadedMetadata.bind(this),onvSeeking:this._onvSeeking.bind(this),onvCanPlay:this._onvCanPlay.bind(this),onvStalled:this._onvStalled.bind(this),onvProgress:this._onvProgress.bind(this)},self.performance&&self.performance.now?this._now=self.performance.now.bind(self.performance):this._now=Date.now,this._pendingSeekTime=null,this._requestSetTime=!1,this._seekpointRecord=null,this._progressChecker=null,this._mediaDataSource=t,this._mediaElement=null,this._msectl=null,this._transmuxer=null,this._mseSourceOpened=!1,this._hasPendingLoad=!1,this._receivedCanPlay=!1,this._mediaInfo=null,this._statisticsInfo=null;var i=f.default.chrome&&(f.default.version.major<50||50===f.default.version.major&&f.default.version.build<2661);this._alwaysSeekKeyframe=!!(i||f.default.msedge||f.default.msie),this._alwaysSeekKeyframe&&(this._config.accurateSeek=!1);}return a(e,[{key:"destroy",value:function(){null!=this._progressChecker&&(window.clearInterval(this._progressChecker),this._progressChecker=null),this._transmuxer&&this.unload(),this._mediaElement&&this.detachMediaElement(),this.e=null,this._mediaDataSource=null,this._emitter.removeAllListeners(),this._emitter=null;}},{key:"on",value:function(e,t){var n=this;e===_.default.MEDIA_INFO?null!=this._mediaInfo&&Promise.resolve().then(function(){n._emitter.emit(_.default.MEDIA_INFO,n.mediaInfo);}):e===_.default.STATISTICS_INFO&&null!=this._statisticsInfo&&Promise.resolve().then(function(){n._emitter.emit(_.default.STATISTICS_INFO,n.statisticsInfo);}),this._emitter.addListener(e,t);}},{key:"off",value:function(e,t){this._emitter.removeListener(e,t);}},{
key:"attachMediaElement",value:function(e){var t=this;if(this._mediaElement=e,e.addEventListener("loadedmetadata",this.e.onvLoadedMetadata),e.addEventListener("seeking",this.e.onvSeeking),e.addEventListener("canplay",this.e.onvCanPlay),e.addEventListener("stalled",this.e.onvStalled),e.addEventListener("progress",this.e.onvProgress),this._msectl=new E.default(this._config),this._msectl.on(S.default.UPDATE_END,this._onmseUpdateEnd.bind(this)),this._msectl.on(S.default.BUFFER_FULL,this._onmseBufferFull.bind(this)),this._msectl.on(S.default.SOURCE_OPEN,function(){t._mseSourceOpened=!0,t._hasPendingLoad&&(t._hasPendingLoad=!1,t.load());}),this._msectl.on(S.default.ERROR,function(e){t._emitter.emit(_.default.ERROR,k.ErrorTypes.MEDIA_ERROR,k.ErrorDetails.MEDIA_MSE_ERROR,e);}),this._msectl.attachMediaElement(e),null!=this._pendingSeekTime)try{e.currentTime=this._pendingSeekTime,this._pendingSeekTime=null;}catch(e){}}},{key:"detachMediaElement",value:function(){this._mediaElement&&(this._msectl.detachMediaElement(),this._mediaElement.removeEventListener("loadedmetadata",this.e.onvLoadedMetadata),this._mediaElement.removeEventListener("seeking",this.e.onvSeeking),this._mediaElement.removeEventListener("canplay",this.e.onvCanPlay),this._mediaElement.removeEventListener("stalled",this.e.onvStalled),this._mediaElement.removeEventListener("progress",this.e.onvProgress),this._mediaElement=null),this._msectl&&(this._msectl.destroy(),this._msectl=null);}},{key:"load",value:function(){var e=this;if(!this._mediaElement)throw new R.IllegalStateException("HTMLMediaElement must be attached before load()!");if(this._transmuxer)throw new R.IllegalStateException("FlvPlayer.load() has been called, please call unload() first!");if(!this._hasPendingLoad){if(this._config.deferLoadAfterSourceOpen&&!1===this._mseSourceOpened)return void(this._hasPendingLoad=!0);this._mediaElement.readyState>0&&(this._requestSetTime=!0,this._mediaElement.currentTime=0),this._transmuxer=new p.default(this._mediaDataSource,this._config),this._transmuxer.on(g.default.INIT_SEGMENT,function(t,n){e._msectl.appendInitSegment(n);}),this._transmuxer.on(g.default.MEDIA_SEGMENT,function(t,n){if(e._msectl.appendMediaSegment(n),e._config.lazyLoad&&!e._config.isLive){var i=e._mediaElement.currentTime;n.info.endDts>=1e3*(i+e._config.lazyLoadMaxDuration)&&null==e._progressChecker&&(d.default.v(e.TAG,"Maximum buffering duration exceeded, suspend transmuxing task"),e._suspendTransmuxer());}}),this._transmuxer.on(g.default.LOADING_COMPLETE,function(){e._msectl.endOfStream(),e._emitter.emit(_.default.LOADING_COMPLETE);}),this._transmuxer.on(g.default.RECOVERED_EARLY_EOF,function(){e._emitter.emit(_.default.RECOVERED_EARLY_EOF);}),this._transmuxer.on(g.default.IO_ERROR,function(t,n){e._emitter.emit(_.default.ERROR,k.ErrorTypes.NETWORK_ERROR,t,n);}),this._transmuxer.on(g.default.DEMUX_ERROR,function(t,n){e._emitter.emit(_.default.ERROR,k.ErrorTypes.MEDIA_ERROR,t,{code:-1,msg:n});}),this._transmuxer.on(g.default.MEDIA_INFO,function(t){e._mediaInfo=t,e._emitter.emit(_.default.MEDIA_INFO,Object.assign({},t));}),this._transmuxer.on(g.default.METADATA_ARRIVED,function(t){e._emitter.emit(_.default.METADATA_ARRIVED,t);}),this._transmuxer.on(g.default.SCRIPTDATA_ARRIVED,function(t){e._emitter.emit(_.default.SCRIPTDATA_ARRIVED,t);}),this._transmuxer.on(g.default.STATISTICS_INFO,function(t){e._statisticsInfo=e._fillStatisticsInfo(t),e._emitter.emit(_.default.STATISTICS_INFO,Object.assign({},e._statisticsInfo));}),this._transmuxer.on(g.default.RECOMMEND_SEEKPOINT,function(t){e._mediaElement&&!e._config.accurateSeek&&(e._requestSetTime=!0,e._mediaElement.currentTime=t/1e3);}),this._transmuxer.open();}}},{key:"unload",value:function(){this._mediaElement&&this._mediaElement.pause(),this._msectl&&this._msectl.seek(0),this._transmuxer&&(this._transmuxer.close(),this._transmuxer.destroy(),this._transmuxer=null);}},{key:"play",value:function(){return this._mediaElement.play()}},{key:"pause",value:function(){this._mediaElement.pause();}},{key:"_fillStatisticsInfo",value:function(e){if(e.playerType=this._type,!(this._mediaElement instanceof HTMLVideoElement))return e;var t=!0,n=0,i=0;if(this._mediaElement.getVideoPlaybackQuality){var r=this._mediaElement.getVideoPlaybackQuality();n=r.totalVideoFrames,i=r.droppedVideoFrames;}else void 0!=this._mediaElement.webkitDecodedFrameCount?(n=this._mediaElement.webkitDecodedFrameCount,i=this._mediaElement.webkitDroppedFrameCount):t=!1;return t&&(e.decodedFrames=n,e.droppedFrames=i),e}},{key:"_onmseUpdateEnd",value:function(){if(this._config.lazyLoad&&!this._config.isLive){for(var e=this._mediaElement.buffered,t=this._mediaElement.currentTime,n=0,i=0;i<e.length;i++){var r=e.start(i),s=e.end(i);if(r<=t&&t<s){n=s;break}}n>=t+this._config.lazyLoadMaxDuration&&null==this._progressChecker&&(d.default.v(this.TAG,"Maximum buffering duration exceeded, suspend transmuxing task"),this._suspendTransmuxer());}}},{key:"_onmseBufferFull",value:function(){d.default.v(this.TAG,"MSE SourceBuffer is full, suspend transmuxing task"),null==this._progressChecker&&this._suspendTransmuxer();}},{key:"_suspendTransmuxer",value:function(){this._transmuxer&&(this._transmuxer.pause(),null==this._progressChecker&&(this._progressChecker=window.setInterval(this._checkProgressAndResume.bind(this),1e3)));}},{key:"_checkProgressAndResume",value:function(){for(var e=this._mediaElement.currentTime,t=this._mediaElement.buffered,n=!1,i=0;i<t.length;i++){var r=t.start(i),s=t.end(i);if(e>=r&&e<s){e>=s-this._config.lazyLoadRecoverDuration&&(n=!0);break}}n&&(window.clearInterval(this._progressChecker),this._progressChecker=null,n&&(d.default.v(this.TAG,"Continue loading from paused position"),this._transmuxer.resume()));}},{key:"_isTimepointBuffered",value:function(e){for(var t=this._mediaElement.buffered,n=0;n<t.length;n++){var i=t.start(n),r=t.end(n);if(e>=i&&e<r)return !0}return !1}},{key:"_internalSeek",value:function(e){var t=this._isTimepointBuffered(e),n=!1,i=0;if(e<1&&this._mediaElement.buffered.length>0){var r=this._mediaElement.buffered.start(0);(r<1&&e<r||f.default.safari)&&(n=!0,i=f.default.safari?.1:r);}if(n)this._requestSetTime=!0,this._mediaElement.currentTime=i;else if(t){if(this._alwaysSeekKeyframe){var s=this._msectl.getNearestKeyframe(Math.floor(1e3*e));this._requestSetTime=!0,this._mediaElement.currentTime=null!=s?s.dts/1e3:e;}else this._requestSetTime=!0,this._mediaElement.currentTime=e;null!=this._progressChecker&&this._checkProgressAndResume();}else null!=this._progressChecker&&(window.clearInterval(this._progressChecker),this._progressChecker=null),this._msectl.seek(e),this._transmuxer.seek(Math.floor(1e3*e)),this._config.accurateSeek&&(this._requestSetTime=!0,this._mediaElement.currentTime=e);}},{key:"_checkAndApplyUnbufferedSeekpoint",value:function(){if(this._seekpointRecord)if(this._seekpointRecord.recordTime<=this._now()-100){var e=this._mediaElement.currentTime;this._seekpointRecord=null,this._isTimepointBuffered(e)||(null!=this._progressChecker&&(window.clearTimeout(this._progressChecker),this._progressChecker=null),this._msectl.seek(e),this._transmuxer.seek(Math.floor(1e3*e)),this._config.accurateSeek&&(this._requestSetTime=!0,this._mediaElement.currentTime=e));}else window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this),50);}},{key:"_checkAndResumeStuckPlayback",value:function(e){var t=this._mediaElement;if(e||!this._receivedCanPlay||t.readyState<2){var n=t.buffered;n.length>0&&t.currentTime<n.start(0)&&(d.default.w(this.TAG,"Playback seems stuck at "+t.currentTime+", seek to "+n.start(0)),this._requestSetTime=!0,this._mediaElement.currentTime=n.start(0),this._mediaElement.removeEventListener("progress",this.e.onvProgress));}else this._mediaElement.removeEventListener("progress",this.e.onvProgress);}},{key:"_onvLoadedMetadata",value:function(e){null!=this._pendingSeekTime&&(this._mediaElement.currentTime=this._pendingSeekTime,this._pendingSeekTime=null);}},{key:"_onvSeeking",value:function(e){var t=this._mediaElement.currentTime,n=this._mediaElement.buffered;if(this._requestSetTime)return void(this._requestSetTime=!1);if(t<1&&n.length>0){var i=n.start(0);if(i<1&&t<i||f.default.safari)return this._requestSetTime=!0,void(this._mediaElement.currentTime=f.default.safari?.1:i)}if(this._isTimepointBuffered(t)){if(this._alwaysSeekKeyframe){var r=this._msectl.getNearestKeyframe(Math.floor(1e3*t));null!=r&&(this._requestSetTime=!0,this._mediaElement.currentTime=r.dts/1e3);}return void(null!=this._progressChecker&&this._checkProgressAndResume())}this._seekpointRecord={seekPoint:t,recordTime:this._now()},window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this),50);}},{key:"_onvCanPlay",value:function(e){this._receivedCanPlay=!0,this._mediaElement.removeEventListener("canplay",this.e.onvCanPlay);}},{key:"_onvStalled",value:function(e){this._checkAndResumeStuckPlayback(!0);}},{key:"_onvProgress",value:function(e){this._checkAndResumeStuckPlayback();}},{key:"type",get:function(){return this._type}},{key:"buffered",get:function(){return this._mediaElement.buffered}},{key:"duration",get:function(){return this._mediaElement.duration}},{key:"volume",get:function(){return this._mediaElement.volume},set:function(e){this._mediaElement.volume=e;}},{key:"muted",get:function(){return this._mediaElement.muted},set:function(e){this._mediaElement.muted=e;}},{key:"currentTime",get:function(){return this._mediaElement?this._mediaElement.currentTime:0},set:function(e){this._mediaElement?this._internalSeek(e):this._pendingSeekTime=e;}},{key:"mediaInfo",get:function(){return Object.assign({},this._mediaInfo)}},{key:"statisticsInfo",get:function(){return null==this._statisticsInfo&&(this._statisticsInfo={}),this._statisticsInfo=this._fillStatisticsInfo(this._statisticsInfo),Object.assign({},this._statisticsInfo)}}]),e}();n.default=A;},{"../config.js":5,"../core/mse-controller.js":9,"../core/mse-events.js":10,"../core/transmuxer.js":11,"../core/transmuxing-events.js":13,"../utils/browser.js":39,"../utils/exception.js":40,"../utils/logger.js":41,"./player-errors.js":34,"./player-events.js":35,events:2}],33:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=e("events"),u=i(o),l=e("./player-events.js"),d=i(l),h=e("../config.js"),f=e("../utils/exception.js"),c=function(){function e(t,n){if(r(this,e),this.TAG="NativePlayer",this._type="NativePlayer",this._emitter=new u.default,this._config=(0, h.createDefaultConfig)(),"object"===(void 0===n?"undefined":s(n))&&Object.assign(this._config,n),"flv"===t.type.toLowerCase())throw new f.InvalidArgumentException("NativePlayer does't support flv MediaDataSource input!");if(t.hasOwnProperty("segments"))throw new f.InvalidArgumentException("NativePlayer("+t.type+") doesn't support multipart playback!");this.e={onvLoadedMetadata:this._onvLoadedMetadata.bind(this)},this._pendingSeekTime=null,this._statisticsReporter=null,this._mediaDataSource=t,this._mediaElement=null;}return a(e,[{key:"destroy",value:function(){this._mediaElement&&(this.unload(),this.detachMediaElement()),this.e=null,this._mediaDataSource=null,this._emitter.removeAllListeners(),this._emitter=null;}},{key:"on",value:function(e,t){var n=this;e===d.default.MEDIA_INFO?null!=this._mediaElement&&0!==this._mediaElement.readyState&&Promise.resolve().then(function(){n._emitter.emit(d.default.MEDIA_INFO,n.mediaInfo);}):e===d.default.STATISTICS_INFO&&null!=this._mediaElement&&0!==this._mediaElement.readyState&&Promise.resolve().then(function(){n._emitter.emit(d.default.STATISTICS_INFO,n.statisticsInfo);}),this._emitter.addListener(e,t);}},{key:"off",value:function(e,t){this._emitter.removeListener(e,t);}},{key:"attachMediaElement",value:function(e){if(this._mediaElement=e,e.addEventListener("loadedmetadata",this.e.onvLoadedMetadata),null!=this._pendingSeekTime)try{e.currentTime=this._pendingSeekTime,this._pendingSeekTime=null;}catch(e){}}},{key:"detachMediaElement",value:function(){this._mediaElement&&(this._mediaElement.src="",this._mediaElement.removeAttribute("src"),this._mediaElement.removeEventListener("loadedmetadata",this.e.onvLoadedMetadata),this._mediaElement=null),null!=this._statisticsReporter&&(window.clearInterval(this._statisticsReporter),this._statisticsReporter=null);}},{key:"load",value:function(){if(!this._mediaElement)throw new f.IllegalStateException("HTMLMediaElement must be attached before load()!");this._mediaElement.src=this._mediaDataSource.url,this._mediaElement.readyState>0&&(this._mediaElement.currentTime=0),this._mediaElement.preload="auto",this._mediaElement.load(),this._statisticsReporter=window.setInterval(this._reportStatisticsInfo.bind(this),this._config.statisticsInfoReportInterval);}},{key:"unload",value:function(){this._mediaElement&&(this._mediaElement.src="",this._mediaElement.removeAttribute("src")),null!=this._statisticsReporter&&(window.clearInterval(this._statisticsReporter),this._statisticsReporter=null);}},{key:"play",value:function(){return this._mediaElement.play()}},{key:"pause",value:function(){this._mediaElement.pause();}},{key:"_onvLoadedMetadata",value:function(e){null!=this._pendingSeekTime&&(this._mediaElement.currentTime=this._pendingSeekTime,this._pendingSeekTime=null),this._emitter.emit(d.default.MEDIA_INFO,this.mediaInfo);}},{key:"_reportStatisticsInfo",value:function(){this._emitter.emit(d.default.STATISTICS_INFO,this.statisticsInfo);}},{key:"type",get:function(){return this._type}},{key:"buffered",get:function(){return this._mediaElement.buffered}},{key:"duration",get:function(){return this._mediaElement.duration}},{key:"volume",get:function(){return this._mediaElement.volume},set:function(e){this._mediaElement.volume=e;}},{key:"muted",get:function(){return this._mediaElement.muted},set:function(e){this._mediaElement.muted=e;}},{key:"currentTime",get:function(){return this._mediaElement?this._mediaElement.currentTime:0},set:function(e){this._mediaElement?this._mediaElement.currentTime=e:this._pendingSeekTime=e;}},{key:"mediaInfo",get:function(){var e=this._mediaElement instanceof HTMLAudioElement?"audio/":"video/",t={mimeType:e+this._mediaDataSource.type};return this._mediaElement&&(t.duration=Math.floor(1e3*this._mediaElement.duration),this._mediaElement instanceof HTMLVideoElement&&(t.width=this._mediaElement.videoWidth,t.height=this._mediaElement.videoHeight)),t}},{key:"statisticsInfo",get:function(){var e={playerType:this._type,url:this._mediaDataSource.url};if(!(this._mediaElement instanceof HTMLVideoElement))return e;var t=!0,n=0,i=0;if(this._mediaElement.getVideoPlaybackQuality){var r=this._mediaElement.getVideoPlaybackQuality();n=r.totalVideoFrames,i=r.droppedVideoFrames;}else void 0!=this._mediaElement.webkitDecodedFrameCount?(n=this._mediaElement.webkitDecodedFrameCount,i=this._mediaElement.webkitDroppedFrameCount):t=!1;return t&&(e.decodedFrames=n,e.droppedFrames=i),e}}]),e}();n.default=c;},{"../config.js":5,"../utils/exception.js":40,"./player-events.js":35,events:2}],34:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorDetails=n.ErrorTypes=void 0;var i=e("../io/loader.js"),r=e("../demux/demux-errors.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(r);n.ErrorTypes={NETWORK_ERROR:"NetworkError",MEDIA_ERROR:"MediaError",OTHER_ERROR:"OtherError"},n.ErrorDetails={NETWORK_EXCEPTION:i.LoaderErrors.EXCEPTION,NETWORK_STATUS_CODE_INVALID:i.LoaderErrors.HTTP_STATUS_CODE_INVALID,NETWORK_TIMEOUT:i.LoaderErrors.CONNECTING_TIMEOUT,NETWORK_UNRECOVERABLE_EARLY_EOF:i.LoaderErrors.UNRECOVERABLE_EARLY_EOF,MEDIA_MSE_ERROR:"MediaMSEError",MEDIA_FORMAT_ERROR:s.default.FORMAT_ERROR,MEDIA_FORMAT_UNSUPPORTED:s.default.FORMAT_UNSUPPORTED,MEDIA_CODEC_UNSUPPORTED:s.default.CODEC_UNSUPPORTED};},{"../demux/demux-errors.js":16,"../io/loader.js":24}],35:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var i={ERROR:"error",LOADING_COMPLETE:"loading_complete",RECOVERED_EARLY_EOF:"recovered_early_eof",MEDIA_INFO:"media_info",METADATA_ARRIVED:"metadata_arrived",SCRIPTDATA_ARRIVED:"scriptdata_arrived",STATISTICS_INFO:"statistics_info"};n.default=i;},{}],36:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(){i(this,e);}return r(e,null,[{key:"getSilentFrame",value:function(e,t){if("mp4a.40.2"===e){if(1===t)return new Uint8Array([0,200,0,128,35,128]);if(2===t)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224])}else {if(1===t)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null}}]),e}();n.default=s;},{}],37:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(){i(this,e);}return r(e,null,[{key:"init",value:function(){e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[],".mp3":[]};for(var t in e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var n=e.constants={};n.FTYP=new Uint8Array([105,115,111,109,0,0,0,1,105,115,111,109,97,118,99,49]),n.STSD_PREFIX=new Uint8Array([0,0,0,0,0,0,0,1]),n.STTS=new Uint8Array([0,0,0,0,0,0,0,0]),n.STSC=n.STCO=n.STTS,n.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),n.HDLR_VIDEO=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),n.HDLR_AUDIO=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),n.DREF=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),n.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]);}},{key:"box",value:function(e){for(var t=8,n=null,i=Array.prototype.slice.call(arguments,1),r=i.length,s=0;s<r;s++)t+=i[s].byteLength;n=new Uint8Array(t),n[0]=t>>>24&255,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n.set(e,4);for(var a=8,o=0;o<r;o++)n.set(i[o],a),a+=i[o].byteLength;return n}},{key:"generateInitSegment",value:function(t){var n=e.box(e.types.ftyp,e.constants.FTYP),i=e.moov(t),r=new Uint8Array(n.byteLength+i.byteLength);return r.set(n,0),r.set(i,n.byteLength),r}},{key:"moov",value:function(t){var n=e.mvhd(t.timescale,t.duration),i=e.trak(t),r=e.mvex(t);return e.box(e.types.moov,n,i,r)}},{key:"mvhd",value:function(t,n){return e.box(e.types.mvhd,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,t>>>24&255,t>>>16&255,t>>>8&255,255&t,n>>>24&255,n>>>16&255,n>>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]))}},{key:"trak",value:function(t){return e.box(e.types.trak,e.tkhd(t),e.mdia(t))}},{key:"tkhd",value:function(t){var n=t.id,i=t.duration,r=t.presentWidth,s=t.presentHeight;return e.box(e.types.tkhd,new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,n>>>24&255,n>>>16&255,n>>>8&255,255&n,0,0,0,0,i>>>24&255,i>>>16&255,i>>>8&255,255&i,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,r>>>8&255,255&r,0,0,s>>>8&255,255&s,0,0]))}},{key:"mdia",value:function(t){return e.box(e.types.mdia,e.mdhd(t),e.hdlr(t),e.minf(t))}},{key:"mdhd",value:function(t){var n=t.timescale,i=t.duration;return e.box(e.types.mdhd,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,n>>>24&255,n>>>16&255,n>>>8&255,255&n,i>>>24&255,i>>>16&255,i>>>8&255,255&i,85,196,0,0]))}},{key:"hdlr",value:function(t){var n=null;return n="audio"===t.type?e.constants.HDLR_AUDIO:e.constants.HDLR_VIDEO,e.box(e.types.hdlr,n)}},{key:"minf",value:function(t){var n=null;return n="audio"===t.type?e.box(e.types.smhd,e.constants.SMHD):e.box(e.types.vmhd,e.constants.VMHD),e.box(e.types.minf,n,e.dinf(),e.stbl(t))}},{key:"dinf",value:function(){return e.box(e.types.dinf,e.box(e.types.dref,e.constants.DREF))}},{key:"stbl",value:function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.constants.STTS),e.box(e.types.stsc,e.constants.STSC),e.box(e.types.stsz,e.constants.STSZ),e.box(e.types.stco,e.constants.STCO))}},{key:"stsd",value:function(t){return "audio"===t.type?"mp3"===t.codec?e.box(e.types.stsd,e.constants.STSD_PREFIX,e.mp3(t)):e.box(e.types.stsd,e.constants.STSD_PREFIX,e.mp4a(t)):e.box(e.types.stsd,e.constants.STSD_PREFIX,e.avc1(t))}},{key:"mp3",value:function(t){var n=t.channelCount,i=t.audioSampleRate,r=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,n,0,16,0,0,0,0,i>>>8&255,255&i,0,0]);return e.box(e.types[".mp3"],r)}},{key:"mp4a",value:function(t){var n=t.channelCount,i=t.audioSampleRate,r=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,n,0,16,0,0,0,0,i>>>8&255,255&i,0,0]);return e.box(e.types.mp4a,r,e.esds(t))}},{key:"esds",value:function(t){var n=t.config||[],i=n.length,r=new Uint8Array([0,0,0,0,3,23+i,0,1,0,4,15+i,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([i]).concat(n).concat([6,1,2]));return e.box(e.types.esds,r)}},{key:"avc1",value:function(t){var n=t.avcc,i=t.codecWidth,r=t.codecHeight,s=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,i>>>8&255,255&i,r>>>8&255,255&r,0,72,0,0,0,72,0,0,0,0,0,0,0,1,10,120,113,113,47,102,108,118,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,255,255]);return e.box(e.types.avc1,s,e.box(e.types.avcC,n))}},{key:"mvex",value:function(t){return e.box(e.types.mvex,e.trex(t))}},{key:"trex",value:function(t){var n=t.id,i=new Uint8Array([0,0,0,0,n>>>24&255,n>>>16&255,n>>>8&255,255&n,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return e.box(e.types.trex,i)}},{key:"moof",value:function(t,n){return e.box(e.types.moof,e.mfhd(t.sequenceNumber),e.traf(t,n))}},{key:"mfhd",value:function(t){var n=new Uint8Array([0,0,0,0,t>>>24&255,t>>>16&255,t>>>8&255,255&t]);return e.box(e.types.mfhd,n)}},{key:"traf",value:function(t,n){var i=t.id,r=e.box(e.types.tfhd,new Uint8Array([0,0,0,0,i>>>24&255,i>>>16&255,i>>>8&255,255&i])),s=e.box(e.types.tfdt,new Uint8Array([0,0,0,0,n>>>24&255,n>>>16&255,n>>>8&255,255&n])),a=e.sdtp(t),o=e.trun(t,a.byteLength+16+16+8+16+8+8);return e.box(e.types.traf,r,s,o,a)}},{key:"sdtp",value:function(t){for(var n=t.samples||[],i=n.length,r=new Uint8Array(4+i),s=0;s<i;s++){var a=n[s].flags;r[s+4]=a.isLeading<<6|a.dependsOn<<4|a.isDependedOn<<2|a.hasRedundancy;}return e.box(e.types.sdtp,r)}},{key:"trun",value:function(t,n){var i=t.samples||[],r=i.length,s=12+16*r,a=new Uint8Array(s);n+=8+s,a.set([0,0,15,1,r>>>24&255,r>>>16&255,r>>>8&255,255&r,n>>>24&255,n>>>16&255,n>>>8&255,255&n],0);for(var o=0;o<r;o++){var u=i[o].duration,l=i[o].size,d=i[o].flags,h=i[o].cts;a.set([u>>>24&255,u>>>16&255,u>>>8&255,255&u,l>>>24&255,l>>>16&255,l>>>8&255,255&l,d.isLeading<<2|d.dependsOn,d.isDependedOn<<6|d.hasRedundancy<<4|d.isNonSync,0,0,h>>>24&255,h>>>16&255,h>>>8&255,255&h],12+16*o);}return e.box(e.types.trun,a)}},{key:"mdat",value:function(t){return e.box(e.types.mdat,t)}}]),e}();s.init(),n.default=s;},{}],38:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=e("../utils/logger.js"),o=i(a),u=e("./mp4-generator.js"),l=i(u),d=e("./aac-silent.js"),h=i(d),f=e("../utils/browser.js"),c=i(f),_=e("../core/media-segment-info.js"),m=e("../utils/exception.js"),p=function(){function e(t){r(this,e),this.TAG="MP4Remuxer",this._config=t,this._isLive=!0===t.isLive,this._dtsBase=-1,this._dtsBaseInited=!1,this._audioDtsBase=1/0,this._videoDtsBase=1/0,this._audioNextDts=void 0,this._videoNextDts=void 0,this._audioStashedLastSample=null,this._videoStashedLastSample=null,this._audioMeta=null,this._videoMeta=null,this._audioSegmentInfoList=new _.MediaSegmentInfoList("audio"),this._videoSegmentInfoList=new _.MediaSegmentInfoList("video"),this._onInitSegment=null,this._onMediaSegment=null,this._forceFirstIDR=!(!c.default.chrome||!(c.default.version.major<50||50===c.default.version.major&&c.default.version.build<2661)),this._fillSilentAfterSeek=c.default.msedge||c.default.msie,this._mp3UseMpegAudio=!c.default.firefox,this._fillAudioTimestampGap=this._config.fixAudioTimestampGap;}return s(e,[{key:"destroy",value:function(){this._dtsBase=-1,this._dtsBaseInited=!1,this._audioMeta=null,this._videoMeta=null,this._audioSegmentInfoList.clear(),this._audioSegmentInfoList=null,this._videoSegmentInfoList.clear(),this._videoSegmentInfoList=null,this._onInitSegment=null,this._onMediaSegment=null;}},{key:"bindDataSource",value:function(e){return e.onDataAvailable=this.remux.bind(this),e.onTrackMetadata=this._onTrackMetadataReceived.bind(this),this}},{key:"insertDiscontinuity",value:function(){this._audioNextDts=this._videoNextDts=void 0;}},{key:"seek",value:function(e){this._audioStashedLastSample=null,this._videoStashedLastSample=null,this._videoSegmentInfoList.clear(),this._audioSegmentInfoList.clear();}},{key:"remux",value:function(e,t){if(!this._onMediaSegment)throw new m.IllegalStateException("MP4Remuxer: onMediaSegment callback must be specificed!");this._dtsBaseInited||this._calculateDtsBase(e,t),this._remuxVideo(t),this._remuxAudio(e);}},{key:"_onTrackMetadataReceived",value:function(e,t){var n=null,i="mp4",r=t.codec;if("audio"===e)this._audioMeta=t,"mp3"===t.codec&&this._mp3UseMpegAudio?(i="mpeg",r="",n=new Uint8Array):n=l.default.generateInitSegment(t);else {if("video"!==e)return;this._videoMeta=t,n=l.default.generateInitSegment(t);}if(!this._onInitSegment)throw new m.IllegalStateException("MP4Remuxer: onInitSegment callback must be specified!");this._onInitSegment(e,{type:e,data:n.buffer,codec:r,container:e+"/"+i,mediaDuration:t.duration});}},{key:"_calculateDtsBase",value:function(e,t){this._dtsBaseInited||(e.samples&&e.samples.length&&(this._audioDtsBase=e.samples[0].dts),t.samples&&t.samples.length&&(this._videoDtsBase=t.samples[0].dts),this._dtsBase=Math.min(this._audioDtsBase,this._videoDtsBase),this._dtsBaseInited=!0);}},{key:"flushStashedSamples",value:function(){var e=this._videoStashedLastSample,t=this._audioStashedLastSample,n={type:"video",id:1,sequenceNumber:0,samples:[],length:0};null!=e&&(n.samples.push(e),n.length=e.length);var i={type:"audio",id:2,sequenceNumber:0,samples:[],length:0};null!=t&&(i.samples.push(t),i.length=t.length),this._videoStashedLastSample=null,this._audioStashedLastSample=null,this._remuxVideo(n,!0),this._remuxAudio(i,!0);}},{key:"_remuxAudio",value:function(e,t){if(null!=this._audioMeta){var n=e,i=n.samples,r=void 0,s=-1,a=-1,u=this._audioMeta.refSampleDuration,d="mp3"===this._audioMeta.codec&&this._mp3UseMpegAudio,f=this._dtsBaseInited&&void 0===this._audioNextDts,m=!1;if(i&&0!==i.length&&(1!==i.length||t)){var p=0,v=null,g=0;d?(p=0,g=n.length):(p=8,g=8+n.length);var y=null;if(i.length>1&&(y=i.pop(),g-=y.length),null!=this._audioStashedLastSample){var E=this._audioStashedLastSample;this._audioStashedLastSample=null,i.unshift(E),g+=E.length;}null!=y&&(this._audioStashedLastSample=y);var b=i[0].dts-this._dtsBase;if(this._audioNextDts)r=b-this._audioNextDts;else if(this._audioSegmentInfoList.isEmpty())r=0,this._fillSilentAfterSeek&&!this._videoSegmentInfoList.isEmpty()&&"mp3"!==this._audioMeta.originalCodec&&(m=!0);else {var S=this._audioSegmentInfoList.getLastSampleBefore(b);if(null!=S){var k=b-(S.originalDts+S.duration);k<=3&&(k=0);var L=S.dts+S.duration+k;r=b-L;}else r=0;}if(m){var R=b-r,A=this._videoSegmentInfoList.getLastSegmentBefore(b);if(null!=A&&A.beginDts<R){var w=h.default.getSilentFrame(this._audioMeta.originalCodec,this._audioMeta.channelCount);if(w){var T=A.beginDts,O=R-A.beginDts;o.default.v(this.TAG,"InsertPrefixSilentAudio: dts: "+T+", duration: "+O),i.unshift({unit:w,dts:T,pts:T}),g+=w.byteLength;}}else m=!1;}for(var C=[],I=0;I<i.length;I++){var D=i[I],x=D.unit,M=D.dts-this._dtsBase,B=M-r;-1===s&&(s=B);var j=0;if(I!==i.length-1){j=i[I+1].dts-this._dtsBase-r-B;}else if(null!=y){var P=y.dts-this._dtsBase-r;j=P-B;}else j=C.length>=1?C[C.length-1].duration:Math.floor(u);var U=!1,N=null;if(j>1.5*u&&"mp3"!==this._audioMeta.codec&&this._fillAudioTimestampGap&&!c.default.safari){U=!0;var F=Math.abs(j-u),G=Math.ceil(F/u),V=B+u;o.default.w(this.TAG,"Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\ndts: "+(B+j)+" ms, expected: "+(B+Math.round(u))+" ms, delta: "+Math.round(F)+" ms, generate: "+G+" frames");var z=h.default.getSilentFrame(this._audioMeta.originalCodec,this._audioMeta.channelCount);null==z&&(o.default.w(this.TAG,"Unable to generate silent frame for "+this._audioMeta.originalCodec+" with "+this._audioMeta.channelCount+" channels, repeat last frame"),z=x),N=[];for(var H=0;H<G;H++){var K=Math.round(V);if(N.length>0){var q=N[N.length-1];q.duration=K-q.dts;}var W={dts:K,pts:K,cts:0,unit:z,size:z.byteLength,duration:0,originalDts:M,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0}};N.push(W),g+=W.size,V+=u;}var X=N[N.length-1];X.duration=B+j-X.dts,j=Math.round(u);}C.push({dts:B,pts:B,cts:0,unit:D.unit,size:D.unit.byteLength,duration:j,originalDts:M,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0}}),U&&C.push.apply(C,N);}d?v=new Uint8Array(g):(v=new Uint8Array(g),v[0]=g>>>24&255,v[1]=g>>>16&255,v[2]=g>>>8&255,v[3]=255&g,v.set(l.default.types.mdat,4));for(var Y=0;Y<C.length;Y++){var Z=C[Y].unit;v.set(Z,p),p+=Z.byteLength;}var Q=C[C.length-1];a=Q.dts+Q.duration,this._audioNextDts=a;var J=new _.MediaSegmentInfo;J.beginDts=s,J.endDts=a,J.beginPts=s,J.endPts=a,J.originalBeginDts=C[0].originalDts,J.originalEndDts=Q.originalDts+Q.duration,
J.firstSample=new _.SampleInfo(C[0].dts,C[0].pts,C[0].duration,C[0].originalDts,!1),J.lastSample=new _.SampleInfo(Q.dts,Q.pts,Q.duration,Q.originalDts,!1),this._isLive||this._audioSegmentInfoList.append(J),n.samples=C,n.sequenceNumber++;var $=null;$=d?new Uint8Array:l.default.moof(n,s),n.samples=[],n.length=0;var ee={type:"audio",data:this._mergeBoxes($,v).buffer,sampleCount:C.length,info:J};d&&f&&(ee.timestampOffset=s),this._onMediaSegment("audio",ee);}}}},{key:"_remuxVideo",value:function(e,t){if(null!=this._videoMeta){var n=e,i=n.samples,r=void 0,s=-1,a=-1,o=-1,u=-1;if(i&&0!==i.length&&(1!==i.length||t)){var d=8,h=null,f=8+e.length,c=null;if(i.length>1&&(c=i.pop(),f-=c.length),null!=this._videoStashedLastSample){var m=this._videoStashedLastSample;this._videoStashedLastSample=null,i.unshift(m),f+=m.length;}null!=c&&(this._videoStashedLastSample=c);var p=i[0].dts-this._dtsBase;if(this._videoNextDts)r=p-this._videoNextDts;else if(this._videoSegmentInfoList.isEmpty())r=0;else {var v=this._videoSegmentInfoList.getLastSampleBefore(p);if(null!=v){var g=p-(v.originalDts+v.duration);g<=3&&(g=0);var y=v.dts+v.duration+g;r=p-y;}else r=0;}for(var E=new _.MediaSegmentInfo,b=[],S=0;S<i.length;S++){var k=i[S],L=k.dts-this._dtsBase,R=k.isKeyframe,A=L-r,w=k.cts,T=A+w;-1===s&&(s=A,o=T);var O=0;if(S!==i.length-1){O=i[S+1].dts-this._dtsBase-r-A;}else if(null!=c){var C=c.dts-this._dtsBase-r;O=C-A;}else O=b.length>=1?b[b.length-1].duration:Math.floor(this._videoMeta.refSampleDuration);if(R){var I=new _.SampleInfo(A,T,O,k.dts,!0);I.fileposition=k.fileposition,E.appendSyncPoint(I);}b.push({dts:A,pts:T,cts:w,units:k.units,size:k.length,isKeyframe:R,duration:O,originalDts:L,flags:{isLeading:0,dependsOn:R?2:1,isDependedOn:R?1:0,hasRedundancy:0,isNonSync:R?0:1}});}h=new Uint8Array(f),h[0]=f>>>24&255,h[1]=f>>>16&255,h[2]=f>>>8&255,h[3]=255&f,h.set(l.default.types.mdat,4);for(var D=0;D<b.length;D++)for(var x=b[D].units;x.length;){var M=x.shift(),B=M.data;h.set(B,d),d+=B.byteLength;}var j=b[b.length-1];if(a=j.dts+j.duration,u=j.pts+j.duration,this._videoNextDts=a,E.beginDts=s,E.endDts=a,E.beginPts=o,E.endPts=u,E.originalBeginDts=b[0].originalDts,E.originalEndDts=j.originalDts+j.duration,E.firstSample=new _.SampleInfo(b[0].dts,b[0].pts,b[0].duration,b[0].originalDts,b[0].isKeyframe),E.lastSample=new _.SampleInfo(j.dts,j.pts,j.duration,j.originalDts,j.isKeyframe),this._isLive||this._videoSegmentInfoList.append(E),n.samples=b,n.sequenceNumber++,this._forceFirstIDR){var P=b[0].flags;P.dependsOn=2,P.isNonSync=0;}var U=l.default.moof(n,s);n.samples=[],n.length=0,this._onMediaSegment("video",{type:"video",data:this._mergeBoxes(U,h).buffer,sampleCount:b.length,info:E});}}}},{key:"_mergeBoxes",value:function(e,t){var n=new Uint8Array(e.byteLength+t.byteLength);return n.set(e,0),n.set(t,e.byteLength),n}},{key:"onInitSegment",get:function(){return this._onInitSegment},set:function(e){this._onInitSegment=e;}},{key:"onMediaSegment",get:function(){return this._onMediaSegment},set:function(e){this._onMediaSegment=e;}}]),e}();n.default=p;},{"../core/media-segment-info.js":8,"../utils/browser.js":39,"../utils/exception.js":40,"../utils/logger.js":41,"./aac-silent.js":36,"./mp4-generator.js":37}],39:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var i={};!function(){var e=self.navigator.userAgent.toLowerCase(),t=/(edge)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(chrome)[ \/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(firefox)[ \/]([\w.]+)/.exec(e)||[],n=/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(android)/.exec(e)||/(windows)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||[],r={browser:t[5]||t[3]||t[1]||"",version:t[2]||t[4]||"0",majorVersion:t[4]||t[2]||"0",platform:n[0]||""},s={};if(r.browser){s[r.browser]=!0;var a=r.majorVersion.split(".");s.version={major:parseInt(r.majorVersion,10),string:r.version},a.length>1&&(s.version.minor=parseInt(a[1],10)),a.length>2&&(s.version.build=parseInt(a[2],10));}r.platform&&(s[r.platform]=!0),(s.chrome||s.opr||s.safari)&&(s.webkit=!0),(s.rv||s.iemobile)&&(s.rv&&delete s.rv,r.browser="msie",s.msie=!0),s.edge&&(delete s.edge,r.browser="msedge",s.msedge=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&s.android&&(r.browser="android",s.android=!0),s.name=r.browser,s.platform=r.platform;for(var o in i)i.hasOwnProperty(o)&&delete i[o];Object.assign(i,s);}(),n.default=i;},{}],40:[function(e,t,n){function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n.RuntimeException=function(){function e(t){s(this,e),this._message=t;}return a(e,[{key:"toString",value:function(){return this.name+": "+this.message}},{key:"name",get:function(){return "RuntimeException"}},{key:"message",get:function(){return this._message}}]),e}();n.IllegalStateException=function(e){function t(e){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),a(t,[{key:"name",get:function(){return "IllegalStateException"}}]),t}(o),n.InvalidArgumentException=function(e){function t(e){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),a(t,[{key:"name",get:function(){return "InvalidArgumentException"}}]),t}(o),n.NotImplementedException=function(e){function t(e){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),a(t,[{key:"name",get:function(){return "NotImplementedException"}}]),t}(o);},{}],41:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=e("events"),a=function(e){return e&&e.__esModule?e:{default:e}}(s),o=function(){function e(){i(this,e);}return r(e,null,[{key:"e",value:function(t,n){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var i="["+t+"] > "+n;e.ENABLE_CALLBACK&&e.emitter.emit("log","error",i),e.ENABLE_ERROR&&(console.error?console.error(i):console.warn?console.warn(i):console.log(i));}},{key:"i",value:function(t,n){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var i="["+t+"] > "+n;e.ENABLE_CALLBACK&&e.emitter.emit("log","info",i),e.ENABLE_INFO&&(console.info?console.info(i):console.log(i));}},{key:"w",value:function(t,n){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var i="["+t+"] > "+n;e.ENABLE_CALLBACK&&e.emitter.emit("log","warn",i),e.ENABLE_WARN&&(console.warn?console.warn(i):console.log(i));}},{key:"d",value:function(t,n){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var i="["+t+"] > "+n;e.ENABLE_CALLBACK&&e.emitter.emit("log","debug",i),e.ENABLE_DEBUG&&(console.debug?console.debug(i):console.log(i));}},{key:"v",value:function(t,n){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var i="["+t+"] > "+n;e.ENABLE_CALLBACK&&e.emitter.emit("log","verbose",i),e.ENABLE_VERBOSE&&console.log(i);}}]),e}();o.GLOBAL_TAG="flv.js",o.FORCE_GLOBAL_TAG=!1,o.ENABLE_ERROR=!0,o.ENABLE_INFO=!0,o.ENABLE_WARN=!0,o.ENABLE_DEBUG=!0,o.ENABLE_VERBOSE=!0,o.ENABLE_CALLBACK=!1,o.emitter=new a.default,n.default=o;},{events:2}],42:[function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=e("events"),o=i(a),u=e("./logger.js"),l=i(u),d=function(){function e(){r(this,e);}return s(e,null,[{key:"getConfig",value:function(){return {globalTag:l.default.GLOBAL_TAG,forceGlobalTag:l.default.FORCE_GLOBAL_TAG,enableVerbose:l.default.ENABLE_VERBOSE,enableDebug:l.default.ENABLE_DEBUG,enableInfo:l.default.ENABLE_INFO,enableWarn:l.default.ENABLE_WARN,enableError:l.default.ENABLE_ERROR,enableCallback:l.default.ENABLE_CALLBACK}}},{key:"applyConfig",value:function(e){l.default.GLOBAL_TAG=e.globalTag,l.default.FORCE_GLOBAL_TAG=e.forceGlobalTag,l.default.ENABLE_VERBOSE=e.enableVerbose,l.default.ENABLE_DEBUG=e.enableDebug,l.default.ENABLE_INFO=e.enableInfo,l.default.ENABLE_WARN=e.enableWarn,l.default.ENABLE_ERROR=e.enableError,l.default.ENABLE_CALLBACK=e.enableCallback;}},{key:"_notifyChange",value:function(){var t=e.emitter;if(t.listenerCount("change")>0){var n=e.getConfig();t.emit("change",n);}}},{key:"registerListener",value:function(t){e.emitter.addListener("change",t);}},{key:"removeListener",value:function(t){e.emitter.removeListener("change",t);}},{key:"addLogListener",value:function(t){l.default.emitter.addListener("log",t),l.default.emitter.listenerCount("log")>0&&(l.default.ENABLE_CALLBACK=!0,e._notifyChange());}},{key:"removeLogListener",value:function(t){l.default.emitter.removeListener("log",t),0===l.default.emitter.listenerCount("log")&&(l.default.ENABLE_CALLBACK=!1,e._notifyChange());}},{key:"forceGlobalTag",get:function(){return l.default.FORCE_GLOBAL_TAG},set:function(t){l.default.FORCE_GLOBAL_TAG=t,e._notifyChange();}},{key:"globalTag",get:function(){return l.default.GLOBAL_TAG},set:function(t){l.default.GLOBAL_TAG=t,e._notifyChange();}},{key:"enableAll",get:function(){return l.default.ENABLE_VERBOSE&&l.default.ENABLE_DEBUG&&l.default.ENABLE_INFO&&l.default.ENABLE_WARN&&l.default.ENABLE_ERROR},set:function(t){l.default.ENABLE_VERBOSE=t,l.default.ENABLE_DEBUG=t,l.default.ENABLE_INFO=t,l.default.ENABLE_WARN=t,l.default.ENABLE_ERROR=t,e._notifyChange();}},{key:"enableDebug",get:function(){return l.default.ENABLE_DEBUG},set:function(t){l.default.ENABLE_DEBUG=t,e._notifyChange();}},{key:"enableVerbose",get:function(){return l.default.ENABLE_VERBOSE},set:function(t){l.default.ENABLE_VERBOSE=t,e._notifyChange();}},{key:"enableInfo",get:function(){return l.default.ENABLE_INFO},set:function(t){l.default.ENABLE_INFO=t,e._notifyChange();}},{key:"enableWarn",get:function(){return l.default.ENABLE_WARN},set:function(t){l.default.ENABLE_WARN=t,e._notifyChange();}},{key:"enableError",get:function(){return l.default.ENABLE_ERROR},set:function(t){l.default.ENABLE_ERROR=t,e._notifyChange();}}]),e}();d.emitter=new o.default,n.default=d;},{"./logger.js":41,events:2}],43:[function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function t(){i(this,t);}return r(t,null,[{key:"install",value:function(){Object.setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Object.assign=Object.assign||function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var i=arguments[n];if(void 0!==i&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(t[r]=i[r]);}return t},"function"!=typeof self.Promise&&e("es6-promise").polyfill();}}]),t}();s.install(),n.default=s;},{"es6-promise":1}],44:[function(e,t,n){function i(e,t,n){var i=e;if(t+n<i.length){for(;n--;)if(128!=(192&i[++t]))return !1;return !0}return !1}function r(e){for(var t=[],n=e,r=0,s=e.length;r<s;)if(n[r]<128)t.push(String.fromCharCode(n[r])),++r;else {if(n[r]<192);else if(n[r]<224){if(i(n,r,1)){var a=(31&n[r])<<6|63&n[r+1];if(a>=128){t.push(String.fromCharCode(65535&a)),r+=2;continue}}}else if(n[r]<240){if(i(n,r,2)){var o=(15&n[r])<<12|(63&n[r+1])<<6|63&n[r+2];if(o>=2048&&55296!=(63488&o)){t.push(String.fromCharCode(65535&o)),r+=3;continue}}}else if(n[r]<248&&i(n,r,3)){var u=(7&n[r])<<18|(63&n[r+1])<<12|(63&n[r+2])<<6|63&n[r+3];if(u>65536&&u<1114112){u-=65536,t.push(String.fromCharCode(u>>>10|55296)),t.push(String.fromCharCode(1023&u|56320)),r+=4;continue}}t.push(String.fromCharCode(65533)),++r;}return t.join("")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r;},{}]},{},[21])(21)});

});

var flvjs = unwrapExports(flv_min);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  props: {
    canvasid: {
      type: String,
      required: true
    },
    startTime: {
      type: Date,
      required: true
    },
    timecell: {
      type: Array,
      required: true
    },
    timers: {
      type: Number,
      required: true
    },
    playCellIndex: {
      type: Number,
      required: true
    },
    startPlayTime: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      setTimeMove: null,

      /* timecell: [
        {
          beginTime: new Date('2020/7/26 02:05:14').getTime(),
          endTime: new Date('2020/7/27').getTime(),
          style: {
            background: 'rgba(132, 244, 180, 0.498039)'
          }
        }
      ],*/
      canvas: null,
      ctx: null,
      canvansW: null,
      canVansH: null,
      minutes_per_step: [1, 2, 5, 10, 15, 20, 30, 60, 120, 180, 240, 360, 720, 1440],
      // min/格
      graduation_step: 20,
      // 刻度间最小宽度，单位px,
      hours_per_ruler: 24,
      // 时间轴显示24小时,
      start_timestamp: null,
      // 开始时间
      distance_between_gtitle: 80,
      zoom: 24,
      g_isMousedown: false,
      // 拖动mousedown标记,
      g_isMousemove: false,
      // 拖动mousemove标记,
      g_mousedownCursor: null,
      // 拖动mousedown的位置,
      returnTime: null // mouseup返回时间,

    };
  },
  watch: {
    startTime: {
      handler: function handler(newName, oldName) {
        if (this.ctx) {
          this.pickerchange(newName);
        }
      },
      immediate: true,
      deep: true
    },
    timecell: {
      handler: function handler(newName, oldName) {
        if (this.ctx) {
          this.add_cells(newName);
        }
      },
      immediate: true,
      deep: true
    },
    timers: {
      handler: function handler(newName, oldName) {
        if (this.ctx) {
          this.replay(newName);
        }
      },
      immediate: true,
      deep: true
    },
    startPlayTime: {
      handler: function handler(newName, oldName) {
        if (!newName) {
          clearInterval(this.setTimeMove);
        } else {
          this.replay(this.timers);
        }
      },
      immediate: true,
      deep: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function (e) {
      _this.canvas = document.getElementById(_this.canvasid);
      _this.canvas.width = document.getElementById('wrap' + _this.canvasid).offsetWidth;
      _this.ctx = _this.canvas.getContext('2d');
      _this.canvansW = _this.canvas.width;
      _this.canVansH = _this.canvas.height;
      _this.start_timestamp = new Date(_this.startTime).getTime() - 12 * 60 * 60 * 1000; // this.timecell[0].beginTime - 12 * 60 * 60 * 1000

      _this.init(_this.start_timestamp, _this.timecell, false); // this.replay(this.timers)

    });
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.setTimeMove);
  },
  methods: {
    /**
     * 初始化
     * @param {*} start_timestamp 最左侧时间
     * @param {*} timecell 录像段数组
     */
    init: function init(start_timestamp, timecell, redrawFlag) {
      this.drawCellBg();
      this.add_graduations(start_timestamp);
      this.add_cells(timecell);
      this.drawLine(0, this.canVansH, this.canvansW, this.canVansH, 'rgb(151, 158, 167)', 1); // 底线

      this.drawLine(this.canvansW / 2, 0, this.canvansW / 2, 33, 'rgb(244, 67, 54)', 2); // 中间播放点时间线

      if (!redrawFlag) {
        // 只有第一次进入才需要添加事件
        this.add_events();
      }

      var time = start_timestamp + this.hours_per_ruler * 3600 * 1000 / 2;
      this.ctx.fillStyle = 'rgb(244, 67, 54)'; // 中间时间文字

      this.ctx.fillText(this.changeTime(time), this.canvansW / 2 - 60, 50);
    },

    /**
     * 绘制添加刻度
     */
    add_graduations: function add_graduations(start_timestamp) {
      var px_per_min = this.canvansW / (this.hours_per_ruler * 60); // px/min

      var px_per_ms = this.canvansW / (this.hours_per_ruler * 60 * 60 * 1000); // px/ms

      var px_per_step = this.graduation_step; // px/格 默认最小值20px

      var min_per_step = px_per_step / px_per_min; // min/格

      for (var i = 0; i < this.minutes_per_step.length; i++) {
        if (min_per_step <= this.minutes_per_step[i]) {
          // 让每格时间在minutes_per_step规定的范围内
          min_per_step = this.minutes_per_step[i];
          px_per_step = px_per_min * min_per_step;
          break;
        }
      }

      var medium_step = 30; // eslint-disable-next-line no-redeclare

      for (var _i = 0; _i < this.minutes_per_step.length; _i++) {
        if (this.distance_between_gtitle / px_per_min <= this.minutes_per_step[_i]) {
          medium_step = this.minutes_per_step[_i];
          break;
        }
      }

      var num_steps = this.canvansW / px_per_step; // 总格数

      var graduation_left;
      var graduation_time; // eslint-disable-next-line no-unused-vars
      var lineH;
      var ms_offset = this.ms_to_next_step(start_timestamp, min_per_step * 60 * 1000); // 开始的偏移时间 ms

      var px_offset = ms_offset * px_per_ms; // 开始的偏移距离 px

      var ms_per_step = px_per_step / px_per_ms; // ms/step

      for (var _i2 = 0; _i2 < num_steps; _i2++) {
        graduation_left = px_offset + _i2 * px_per_step; // 距离=开始的偏移距离+格数*px/格

        graduation_time = start_timestamp + ms_offset + _i2 * ms_per_step; // 时间=左侧开始时间+偏移时间+格数*ms/格

        var date = new Date(graduation_time);

        if (date.getUTCHours() === 0 && date.getUTCMinutes() === 0) {
          lineH = 25;
          var big_date = this.graduation_title(date);
          this.ctx.fillText(big_date, graduation_left - 20, 30);
          this.ctx.fillStyle = 'rgba(151,158,167,1)';
        } else if (graduation_time / (60 * 1000) % medium_step === 0) {
          lineH = 15;
          var middle_date = this.graduation_title(date);
          this.ctx.fillText(middle_date, graduation_left - 20, 30);
          this.ctx.fillStyle = 'rgba(151,158,167,1)';
        } else {
          lineH = 10;
        } // drawLine(graduation_left,0,graduation_left,lineH,"rgba(151,158,167,0.4)",1);


        this.drawLine(graduation_left, 0, graduation_left, lineH, 'rgba(151,158,167,1)', 1);
      }
    },

    /**
     * 绘制线
     * @param {*} beginX
     * @param {*} beginY
     * @param {*} endX
     * @param {*} endY
     * @param {*} color
     * @param {*} width
     */
    drawLine: function drawLine(beginX, beginY, endX, endY, color, width) {
      this.ctx.beginPath();
      this.ctx.moveTo(beginX, beginY);
      this.ctx.lineTo(endX, endY);
      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = width;
      this.ctx.stroke();
    },

    /**
     * 添加录像段
     * @param {*} cells 录像数组
     */
    add_cells: function add_cells(cells) {
      var _this2 = this;

      cells.forEach(function (cell) {
        _this2.draw_cell(cell);
      });
    },

    /**
     * 绘制录像块
     * @param {*} cell cell包括beginTime ms;endTime ms;style
     */
    draw_cell: function draw_cell(cell) {
      var px_per_ms = this.canvansW / (this.hours_per_ruler * 60 * 60 * 1000); // px/ms

      var beginX = (cell.beginTime - this.start_timestamp) * px_per_ms;
      var cell_width = (cell.endTime - cell.beginTime) * px_per_ms;
      this.ctx.fillStyle = cell.style.background; // console.log(cell.beginTime + '-' + this.start_timestamp)

      this.ctx.fillRect(beginX, 0, cell_width, 15);
    },

    /**
     * 绘制录像块背景
     */
    drawCellBg: function drawCellBg() {
      this.ctx.fillStyle = 'rgba(69, 72, 76, 0.5)';
      this.ctx.fillRect(0, 0, this.canvansW, 15);
    },

    /**
     * 时间轴事件
     */
    add_events: function add_events() {
      this.canvas.addEventListener('mousewheel', this.mousewheelFunc);
      this.canvas.addEventListener('mousedown', this.mousedownFunc);
      this.canvas.addEventListener('mousemove', this.mousemoveFunc);
      this.canvas.addEventListener('mouseup', this.mouseupFunc);
      this.canvas.addEventListener('mouseout', this.mouseoutFunc);
    },

    /**
     * 拖动/点击 mousedown事件
     */
    mousedownFunc: function mousedownFunc(e) {
      this.g_isMousedown = true;
      this.g_mousedownCursor = this.get_cursor_x_position(e); // 记住mousedown的位置
    },

    /**
     * 拖动/鼠标hover显示 mousemove事件
     */
    mousemoveFunc: function mousemoveFunc(e) {
      var pos_x = this.get_cursor_x_position(e);
      var px_per_ms = this.canvansW / (this.hours_per_ruler * 60 * 60 * 1000); // px/ms

      this.clearCanvas();

      if (this.g_isMousedown) {
        var diff_x = pos_x - this.g_mousedownCursor;
        this.start_timestamp = this.start_timestamp - Math.round(diff_x / px_per_ms);
        this.init(this.start_timestamp, this.timecell, true);
        this.g_isMousemove = true;
        this.g_mousedownCursor = pos_x;
      } else {
        var time = this.start_timestamp + pos_x / px_per_ms;
        this.init(this.start_timestamp, this.timecell, true);
        this.drawLine(pos_x, 0, pos_x, 50, 'rgb(194, 202, 215)', 1);
        this.ctx.fillStyle = 'rgb(194, 202, 215)';
        this.ctx.fillText(this.changeTime(time), pos_x - 50, 60);
      }
    },

    /**
     * 拖动/点击 mouseup事件
     */
    mouseupFunc: function mouseupFunc(e) {
      if (this.g_isMousemove) {
        // 拖动 事件
        this.g_isMousemove = false;
        this.g_isMousedown = false;
        this.returnTime = this.start_timestamp + this.hours_per_ruler * 3600 * 1000 / 2;
      } else {
        // click 事件
        this.g_isMousedown = false;
        var posx = this.get_cursor_x_position(e); // 鼠标距离 px

        var ms_per_px = this.zoom * 3600 * 1000 / this.canvansW; // ms/px

        this.returnTime = this.start_timestamp + posx * ms_per_px;
        this.set_time_to_middle(this.returnTime);

        if (new Date(this.returnMouseupTime()).getTime() > new Date().getTime()) {
          console.log('超过当日时间');
          this.set_time_to_middle(new Date().getTime());
          this.start_timestamp = new Date().getTime() - 12 * 60 * 60 * 1000;
        } else {
          console.log('正常时间');
        }
      }

      this.$emit('changeLine', new Date(this.returnMouseupTime()));
      this.replay(this.timers);
    },

    /**
     * 鼠标移出隐藏时间 mouseout事件
     * @param {*} e
     */
    mouseoutFunc: function mouseoutFunc(e) {
      this.clearCanvas();
      this.init(this.start_timestamp, this.timecell, true);
    },

    /**
     * 滚轮放大缩小，以时间轴中心为准 mousewheel事件
     */
    mousewheelFunc: function mousewheelFunc() {
      if (event && event.preventDefault) {
        event.preventDefault();
      } else {
        window.event.returnValue = false;
        return false;
      }

      var e = window.event || event;
      var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      var middle_time = this.start_timestamp + this.hours_per_ruler * 3600 * 1000 / 2; // ms 记住当前中间的时间

      if (delta < 0) {
        this.zoom = this.zoom + 4;

        if (this.zoom >= 24) {
          this.zoom = 24; // 放大最大24小时
        }

        this.hours_per_ruler = this.zoom;
      } else if (delta > 0) {
        // 放大
        this.zoom = this.zoom - 4;

        if (this.zoom <= 1) {
          this.zoom = 1; // 缩小最小1小时
        }

        this.hours_per_ruler = this.zoom;
      }

      this.clearCanvas();
      this.start_timestamp = middle_time - this.hours_per_ruler * 3600 * 1000 / 2; // start_timestamp = 当前中间的时间 - zoom/2

      this.init(this.start_timestamp, this.timecell, true);
    },

    /**
     * 获取鼠标posx
     * @param {*} e
     */
    get_cursor_x_position: function get_cursor_x_position(e) {
      var posx = 0;

      if (!e) {
        e = window.event;
      }

      if (e.offsetX || e.pageY) {
        posx = e.offsetX;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      }

      return posx;
    },

    /**
     * 返回时间轴上刻度的时间
     * @param {*} datetime new Date 格式
     */
    graduation_title: function graduation_title(datetime) {
      if (datetime.getHours() === 0 && datetime.getMinutes() === 0 && datetime.getMilliseconds() === 0) {
        return ('0' + datetime.getDate().toString()).substr(-2) + '.' + ('0' + (datetime.getMonth() + 1).toString()).substr(-2) + '.' + datetime.getFullYear();
      }

      return datetime.getHours() + ':' + ('0' + datetime.getMinutes().toString()).substr(-2);
    },

    /**
     * 返回 2018-01-01 10:00:00 格式时间
     * @param {*} time
     */
    changeTime: function changeTime(time) {
      var newTime = new Date(time);
      var year = newTime.getFullYear();
      var month = newTime.getMonth() + 1;

      if (month < 10) {
        // eslint-disable-next-line no-redeclare
        var month = '0' + month;
      }

      var date = newTime.getDate();

      if (date < 10) {
        // eslint-disable-next-line no-redeclare
        var date = '0' + date;
      }

      var hour = newTime.getHours();

      if (hour < 10) {
        // eslint-disable-next-line no-redeclare
        var hour = '0' + hour;
      }

      var minute = newTime.getMinutes();

      if (minute < 10) {
        // eslint-disable-next-line no-redeclare
        var minute = '0' + minute;
      }

      var second = newTime.getSeconds();

      if (second < 10) {
        // eslint-disable-next-line no-redeclare
        var second = '0' + second;
      }

      return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
    },

    /**
     * 左侧开始时间的偏移，返回单位ms
     * @param {*} timestamp
     * @param {*} step
     */
    ms_to_next_step: function ms_to_next_step(timestamp, step) {
      var remainder = timestamp % step;
      return remainder ? step - remainder : 0;
    },

    /**
     * 设置时间，让这个时间点跳到中间红线处
     *  @param {*} time 单位ms
     */
    set_time_to_middle: function set_time_to_middle(time) {
      this.clearCanvas();
      this.start_timestamp = time - this.hours_per_ruler * 60 * 60 * 1000 / 2;
      this.init(this.start_timestamp, this.timecell);
    },
    // eslint-disable-next-line no-unused-vars
    returnMouseupTime: function returnMouseupTime() {
      if (this.returnTime != null) {
        return this.returnTime;
      }
    },

    /**
     * 清除canvas 每次重新绘制需要先清除
     */
    clearCanvas: function clearCanvas() {
      if (this.ctx && this.ctx.clearRect) {
        this.ctx.clearRect(0, 0, 1500, 150);
      }
    },
    replay: function replay(s) {
      var _this3 = this;

      clearInterval(this.setTimeMove);

      if (!this.startPlayTime) {
        return;
      }

      var time;

      if (this.returnMouseupTime()) {
        time = new Date(this.returnMouseupTime()).getTime();
      } else {
        time = new Date(this.start_timestamp).getTime() + 12 * 60 * 60 * 1000;
      }

      this.setTimeMove = setInterval(function () {
        time += 1000;
        _this3.start_timestamp = time;

        _this3.set_time_to_middle(time);

        if (time >= _this3.timecell[_this3.playCellIndex].endTime) {
          clearInterval(_this3.setTimeMove);

          _this3.$emit('playReplayStop', _this3.playCellIndex);

          setTimeout(function () {
            _this3.$message.success('当前时间段录像播放完毕');
          }, 2000);
        }
      }, 1000 / s); // 1-1000 2-500 4-250 8/125
    },
    pickerchange: function pickerchange(e) {
      var _this4 = this;

      this.$nextTick(function (el) {
        _this4.start_timestamp = new Date(_this4.startTime).getTime(); // - 12 * 60 * 60 * 1000 // this.timecell[0].beginTime - 12 * 60 * 60 * 1000

        _this4.set_time_to_middle(new Date(_this4.start_timestamp).getTime());

        _this4.replay(_this4.timers);
      });
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "canvas",
    attrs: {
      "id": 'wrap' + _vm.canvasid
    }
  }, [_vm._ssrNode("<canvas" + _vm._ssrAttr("id", _vm.canvasid) + " width=\"100%\" height=\"100\" ondragstart=\"return false;\" style=\"cursor: pointer;border:1px solid #2b2f33;background-color: #2b2f33;\" data-v-e48ccfb2></canvas>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-e48ccfb2_0", {
    source: ".canvas[data-v-e48ccfb2]{width:100%}.btn .play-speed[data-v-e48ccfb2]{width:167px;height:25px;border-radius:5px;background:rgba(0,0,0,.5);float:right;display:flex;color:#fff;justify-content:space-around;align-content:center;line-height:25px}.btn .play-speed>div[data-v-e48ccfb2]{width:50px;height:100%;text-align:center;cursor:pointer}.btn .play-speed>div.active[data-v-e48ccfb2]{color:#3075ff}.btn[data-v-e48ccfb2]  .el-date-editor{float:right;height:25px!important;width:150px}.btn[data-v-e48ccfb2]  .el-date-editor .el-input__inner{height:25px!important}.btn[data-v-e48ccfb2]  .el-date-editor .el-input__icon{line-height:25px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-e48ccfb2";
/* module identifier */

var __vue_module_identifier__ = "data-v-e48ccfb2";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);/**
 * 获取视频元数据
 * @param {string} src - 视频连接
 * @param {function} cb(err, data) - 回调
 * **/
function getMetadata(src, cb) {
  var v = document.createElement('video');
  v.src = src;
  v.style.display = 'none';
  v.addEventListener('loadedmetadata', function () {
    cb && cb(null, {
      duration: v.duration,
      w: v.videoWidth,
      h: v.videoHeight,
      video: v
    });
  });
  v.addEventListener('error', function () {
    cb && cb(v.error);
  });
  document.body.appendChild(v);
}
/**
 * DataUrl 转 Blob
 * @param {string} dataurl - DataUrl
 * @return {Blob} 返回blob
 * **/


function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(',');
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], {
    type: mime
  });
}
/**
 * 视频截图，由于浏览器限制，不支持跨域视频截图
 * @param {HTMLVideoElement} video - 视频标签
 * @param {number|[]} time - 指定截图视频播放位置，秒；0 表示截取当前
 * @param {number[]} size - 指定输出尺寸，默认输出原尺寸；可选
 * @param {function} cb - 回调函数，返回 [{orgSize, size, at, blob}]
 * **/


function videoScreenshot(video, time, size, cb) {
  time = time || 0;
  cb = typeof size === 'function' ? size : cb;

  if (!(video instanceof HTMLVideoElement)) {
    if (typeof cb === 'function') cb(new Error('`video` 参数必须是 HTMLVideoElement 对象'), null);
    return;
  }

  var canvas = document.createElement('canvas');
  var vw = video.videoWidth;
  var vh = video.videoHeight;
  canvas.width = vw;
  canvas.height = vh;
  var ctx = canvas.getContext('2d');
  var orgSize = vw + 'x' + vh;
  var result = [];
  var index = 0;
  var isMultiple = Object.prototype.toString.call(time) === '[object Array]';
  var length = isMultiple ? time.length : 1;
  var hasSize = Object.prototype.toString.call(size) === '[object Array]' && size.length >= 2;
  var targetSize = hasSize ? size[0] + 'x' + size[1] : orgSize;
  if (isMultiple) video.pause();

  function exec() {
    ctx.drawImage(video, 0, 0, vw, vh, 0, 0, vw, vh);
    var currentTime = video.currentTime;
    var cvas = null; // 输出指定尺寸

    if (hasSize) {
      cvas = toSize(canvas, [vw, vh], size);
    } else {
      cvas = canvas;
    }

    try {
      if (cvas.toBlob) {
        cvas.toBlob(function (blob) {
          result.push({
            orgSize: orgSize,
            size: targetSize,
            at: currentTime,
            blob: blob
          });
          run(++index);
        });
      } else {
        result.push({
          orgSize: orgSize,
          size: targetSize,
          at: currentTime,
          blob: dataURLtoBlob(cvas.toDataURL())
        });
        run(++index);
      }
    } catch (err) {
      if (typeof cb === 'function') cb(err, null);
    }

    video.removeEventListener('canplay', exec, false);
  }

  function run(i) {
    index = i;

    if (i >= length) {
      if (typeof cb === 'function') cb(null, result);
    } else {
      if (isMultiple) {
        try {
          video.addEventListener('canplay', exec, false); // 未加载完成设置时间会存在报错

          video.currentTime = time[i];
        } catch (err) {
          video.removeEventListener('canplay', exec, false);
          if (typeof cb === 'function') cb(err, null);
        }
      } else {
        exec();
      }
    }
  }

  run(0);
  return canvas;
}

function toSize(img, orgSize, size) {
  var canvas = document.createElement('canvas');
  canvas.width = size[0];
  canvas.height = size[1];
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, orgSize[0], orgSize[1], 0, 0, size[0], size[1]);
  return canvas;
}

var $poster = {
  getMetadata: getMetadata,
  videoScreenshot: videoScreenshot
};/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-07-27 09:41:20
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-07-27 10:55:35
 */
function getToken() {
  return localStorage.getItem('vmsToken');
}
function setToken(token) {
  localStorage.setItem('vmsToken', token);
}
function clearToken() {
  localStorage.removeItem('vmsToken');
}var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789[]-';
var base64 = {
  base64Encode: function base64Encode(input, flag) {
    var output = '';
    var chr1;
    var chr2;
    var chr3 = '';
    var enc1;
    var enc2;
    var enc3;
    var enc4 = '';
    var i = 0;

    do {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
      chr1 = chr2 = chr3 = '';
      enc1 = enc2 = enc3 = enc4 = '';
    } while (i < input.length);

    return output;
  },
  base64Decode: function base64Decode(input) {
    var output = '';
    var chr1;
    var chr2;
    var chr3 = '';
    var enc1;
    var enc2;
    var enc3;
    var enc4 = '';
    var i = 0;

    if (input.length % 4 !== 0) {
      return '';
    }

    var base64test = /[^A-Za-z0-9\[\/\]\-]/g;

    if (base64test.exec(input)) {
      return '';
    }

    do {
      enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);

      if (enc3 !== 64) {
        output += String.fromCharCode(chr2);
      }

      if (enc4 !== 64) {
        output += String.fromCharCode(chr3);
      }

      chr1 = chr2 = chr3 = '';
      enc1 = enc2 = enc3 = enc4 = '';
    } while (i < input.length);

    return output;
  },
  utf16to8: function utf16to8(input) {
    var out, i, len, c;
    out = '';
    len = input.length;

    for (i = 0; i < len; i++) {
      c = input.charCodeAt(i);

      if (c >= 0x0001 && c <= 0x007F) {
        out += input.charAt(i);
      } else if (c > 0x07FF) {
        out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
        out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
        out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
      } else {
        out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
        out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
      }
    }

    return out;
  },
  utf8to16: function utf8to16(input) {
    var out, i, len, c;
    var char2, char3;
    out = '';
    len = input.length;
    i = 0;

    while (i < len) {
      c = input.charCodeAt(i++);

      switch (c >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          // 0xxxxxxx
          out += input.charAt(i - 1);
          break;

        case 12:
        case 13:
          // 110x xxxx 10xx xxxx
          char2 = input.charCodeAt(i++);
          out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
          break;

        case 14:
          // 1110 xxxx 10xx xxxx 10xx xxxx
          char2 = input.charCodeAt(i++);
          char3 = input.charCodeAt(i++);
          out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
          break;
      }
    }

    return out;
  },

  /**
     * 如果输入为空，则返回defaultValue，否则返回字符串解析后的值（先base64解码，再utf8to16）
     * @param input
     * @param defaultValue
     * @returns {string}
     */
  utf8to16_base64Decode: function utf8to16_base64Decode(input) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return input ? this.utf8to16(this.base64Decode(input)) : defaultValue;
  },
  base64Encode_utf16to8: function base64Encode_utf16to8(input) {
    return this.base64Encode(this.utf16to8(input));
  }
};/*
 * @Date: 2020-07-02 15:03:04
 * @LastEditors: jiang.liu
 * @LastEditTime: 2020-09-22 16:57:44
 * @edit By wangwei 2020-09-09 
 * @reasion line-31 for cross
 */
var vmsService = {
  login: function login(ipcLinkInfo, data) {
    return axios__default['default']({
      url: "http://".concat(ipcLinkInfo.serverIP, "/VMS2Service.cgi?Cmd=UserLogin"),
      method: 'get',
      params: {},
      headers: {
        Authorization: 'Basic ' + base64.base64Encode(data.username + ':' + data.password)
      }
    });
  },
  getIpInfo: function getIpInfo(ipcLinkInfo, data) {
    return axios__default['default']({
      url: "http://".concat(ipcLinkInfo.serverIP, "/VMS2Service.cgi?Cmd=DeviceGetIPCLinkInfo"),
      method: 'post',
      data: JSON.stringify(data),
      headers: {
        'auth-token': getToken(),
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  },
  getRecordList: function getRecordList(ip, ipcLinkInfo, data) {
    return axios__default['default']({
      url: "http://".concat(ip, ":").concat(ipcLinkInfo.serverPort, "/command?cmd=getrecordlist"),
      method: 'get',
      params: data,
      headers: {
        /*  'auth-token': getToken(), */
      }
    });
  },
  setvideorate: function setvideorate(ip, ipcLinkInfo, data) {
    return axios__default['default']({
      url: "http://".concat(ip, ":").concat(ipcLinkInfo.serverPort, "/command?cmd=setvideorate"),
      method: 'get',
      params: data,
      headers: {
        /*  'auth-token': getToken(), */
      }
    });
  }
};Vue__default['default'].use(ElementUI__default['default']);
var script$1 = {
  name: "ichinaeVideo",
  components: {
    timeline: __vue_component__
  },
  props: {
    videoOption: {
      type: Object,
      required: true
    },
    vmsOption: {
      type: Object,
      required: true
    },
    monitorList: {
      type: Object,
      required: false
    }
  },
  data: function data() {
    return {
      timeKey: new Date().getTime(),
      activeIndex: null,
      videoList: [],
      // 视频dom
      imgsrc: "",
      // 截图
      startTime: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
      pickerOptions: {
        disabledDate: function disabledDate(time) {
          return time.getTime() > Date.now() - 24 * 60 * 60 * 1000;
        }
      },
      ipcLinkInfo: {},
      serverMappingTable: [{
        serverIP: "20.255.7.230",
        mappingIP: "172.25.104.4"
      }, {
        serverIP: "20.255.7.231",
        mappingIP: "172.25.104.5"
      }, {
        serverIP: "20.255.7.232",
        mappingIP: "172.25.104.6"
      }, {
        serverIP: "20.255.7.233",
        mappingIP: "172.25.104.7"
      }, {
        serverIP: "20.255.7.234",
        mappingIP: "172.25.104.8"
      }, {
        serverIP: "20.255.7.235",
        mappingIP: "172.25.104.9"
      }, {
        serverIP: "20.255.7.236",
        mappingIP: "172.25.104.10"
      }, {
        serverIP: "20.255.7.237",
        mappingIP: "172.25.104.11"
      }, {
        serverIP: "20.255.7.238",
        mappingIP: "172.25.104.12"
      }, {
        serverIP: "20.255.7.239",
        mappingIP: "172.25.104.13"
      }, {
        serverIP: "20.255.7.240",
        mappingIP: "172.25.104.2"
      }, {
        serverIP: "20.255.7.241",
        mappingIP: "172.25.104.15"
      }, {
        serverIP: "20.255.7.242",
        mappingIP: "172.25.104.3"
      }, {
        serverIP: "20.255.7.243",
        mappingIP: "172.25.104.17"
      }, {
        serverIP: "20.255.7.244",
        mappingIP: "172.25.104.18"
      }, {
        serverIP: "20.255.7.245",
        mappingIP: "172.25.104.19"
      }, {
        serverIP: "20.255.7.246",
        mappingIP: "172.25.104.20"
      }, {
        serverIP: "20.255.7.247",
        mappingIP: "172.25.104.21"
      }, {
        serverIP: "20.255.7.248",
        mappingIP: "172.25.104.22"
      }, {
        serverIP: "20.255.7.249",
        mappingIP: "172.25.104.14"
      }, {
        serverIP: "20.255.7.250",
        mappingIP: "172.25.104.16"
      }]
    };
  },
  computed: {},
  watch: {
    videoOption: {
      handler: function handler() {
        if (this.videoOption.size === 1 && this.videoOption.isReplay) {
          this.dbclick(0);
        }
      },
      immediate: true,
      deep: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.destroyAll();
    flvjs.LoggingControl.enableWarn = false; // 去掉警告日志的打印

    flvjs.LoggingControl.enableVerbose = false;
    flvjs.LoggingControl.forceGlobalTag = true;
    this.addVideo(this.videoOption.size);

    if (this.videoOption.size === 1) {
      this.dbclick(0);
    }

    document.addEventListener("keydown", function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 27) {
        _this.fullScreen(_this.activeIndex, "esc");
      } // 空格播放暂停

      /* if (keyCode === 32) {
          this.toggle(this.activeIndex)
        } */

    }, false);

    window.onbeforeunload = function () {
      clearToken();
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.destroyAll();
  },
  methods: {
    pickerchange: function pickerchange(e, item, index) {
      e = new Date(e).getTime() + 12 * 3600 * 1000;
      this.changeLine(e, item, index, "picker");
    },
    destroyAll: function destroyAll() {
      var _this2 = this;

      this.videoList.forEach(function (e, index) {
        _this2.destroy(index);
      });
    },
    // 下载截图
    download: function download(bolb, item) {
      var a = document.createElement("a");
      var imgblob = new Blob([bolb], {
        type: "application/octet-stream"
      });
      a.href = URL.createObjectURL(imgblob);
      var filename = "".concat(item.name).concat(new Date().toLocaleString(), ".jpg");
      a.download = filename;
      a.click();
    },
    // 截图
    capture: function capture(index, item) {
      var _this3 = this;

      if (!item["canPlay"]) {
        this.$message.info("暂无视频播放");
        return;
      } // eslint-disable-next-line no-undef


      $poster.videoScreenshot(document.getElementById("videoElement" + index), 0, /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, res) {
          var img, canvas, blob, newImage;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this3.blobToImg(res[0].blob);

                case 2:
                  img = _context.sent;
                  canvas = _this3.imgToCanvas(img);
                  _context.next = 6;
                  return _this3.watermark(canvas, _this3.videoOption.text);

                case 6:
                  blob = _context.sent;
                  _context.next = 9;
                  return _this3.blobToImg(blob);

                case 9:
                  newImage = _context.sent;
                  _this3.imgsrc = newImage.src;

                  _this3.download(blob, item);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    blobToImg: function blobToImg(blob) {
      return new Promise(function (resolve) {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
          var img = new Image();
          img.src = reader.result;
          img.addEventListener("load", function () {
            return resolve(img);
          });
        });
        reader.readAsDataURL(blob);
      });
    },
    imgToCanvas: function imgToCanvas(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      return canvas;
    },
    // 水印
    watermark: function watermark(canvas, text) {
      return new Promise(function (resolve) {
        var ctx = canvas.getContext("2d"); //  ctx.fillStyle = 'rgb(255, 235, 59, .5)'
        // ctx.fillRect(50, 20, 40, 30)

        ctx.fillStyle = "rgb(255, 255, 255, .6)";
        ctx.font = "bold 45px 微软雅黑";
        ctx.textAlign = "left";
        ctx.fillText(text, canvas.width * 0.15, canvas.height * 0.1);
        ctx.fillText(text, canvas.width * 0.45, canvas.height * 0.4);
        ctx.fillText(text, canvas.width * 0.75, canvas.height * 0.7);
        canvas.toBlob(function (blob) {
          return resolve(blob);
        });
      });
    },
    reloadVideo: function reloadVideo() {
      var _this4 = this;

      this.$nextTick(function () {
        if (flvjs.isSupported()) {
          _this4.videoList.forEach(function (item, index) {
            setTimeout(function () {
              _this4.loadvideo(index, item);
            }, 100);
          });
        }
      });
    },
    loadvideo: function loadvideo(index, item, type) {
      var _this5 = this;

      this.$set(this.videoList[index], "loading", true);
      this.$set(this.videoList[index], "error", false);
      var videoElement = document.getElementById(item.id);
      this.videoList[index].flvPlayer = flvjs.createPlayer({
        type: "flv",
        isLive: true,
        url: type ? item.replaySrc : item.src
      }, {
        enableWorker: true,
        enableStashBuffer: false,
        stashInitialSize: 128
      });
      this.videoList[index].flvPlayer.attachMediaElement(videoElement);
      this.videoList[index].flvPlayer.load();
      this.videoList[index].flvPlayer.on(flvjs.Events.ERROR, function (errorType, errorDetail, errorInfo) {
        console.error("errorType:", errorType);
        console.error("errorDetail:", errorDetail);
        console.error("errorInfo:", errorInfo); // 如果视频播放出错就销毁player，用当前的url重新创建一个

        if (_this5.videoList[index].flvPlayer) {
          _this5.videoList[index].flvPlayer.destroy();

          if (errorInfo.code === 11) {
            _this5.loadvideo(index, item, type);
          }

          if (errorInfo.code < 2) {
            _this5.$set(_this5.videoList[index], "canPlay", false);

            _this5.$set(_this5.videoList[index], "loading", false);

            _this5.$set(_this5.videoList[index], "error", true);

            _this5.$set(_this5.videoList[index], "startPlayTime", false);

            if (!_this5.videoList[index].live) {
              _this5.$message.error("视频加载失败");
            } else {
              _this5.$message.error("回放录像加载失败");

              _this5.$set(_this5.videoList[index], "error", false);

              _this5.$set(_this5.videoList[index], "replaySrc", "");
            }
          }
        }
      });
      this.eventTester(index, videoElement, "progress");
      this.eventTester(index, videoElement, "loadeddata");
      this.eventTester(index, videoElement, "waiting"); // this.eventTester(index, videoElement, 'error')
      // this.eventTester(index, videoElement, 'stalled')
    },
    // play pause
    toggle: function toggle(index) {
      if (!this.videoList[index]["canPlay"]) {
        this.$message.info("暂无视频播放");
        return;
      }

      this.$set(this.videoList[index], "playState", !this.videoList[index].playState);
      this.$set(this.videoList[index], "startPlayTime", this.videoList[index].playState);

      if (this.videoList[index].playState) {
        this.videoList[index].flvPlayer.play();
      } else {
        this.videoList[index].flvPlayer.pause();
      }
    },
    // 1 4 分屏
    addVideo: function addVideo(num) {
      this.videoList.forEach(function (e) {
        if (e.flvPlayer && e.flvPlayer._receivedCanPlay) {
          e.flvPlayer.destroy();
        }
      });
      this.videoList = [];

      for (var index = 0; index < num; index++) {
        this.videoList.push({
          id: "videoElement" + index,
          show: true,
          // 是否展示 4<=>1
          isChecked: false,
          // 是否在视频窗格中
          autoplay: true,
          // 自动播放
          playState: true,
          // 播放状态
          mediaRecord: false,
          // 录像状态
          loading: false,
          fullScreen: false,
          span: this.formatSpam(num),
          // 分屏
          timecell: [],
          // 录像段
          speed: 1,
          // 回放速度 1 2 4
          playCellIndex: 0,
          // 当前播放录像段
          startPlayTime: false,
          // 时间轴是否走动
          startTime: new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
        });
      }
    },
    pushvideo: function pushvideo(name, id, isReolay, replayTime) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var vmsInfo, index, _vmsInfo, itemLength, _vmsInfo2;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this6.videoOption.size === 1)) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 3;
                return _this6.getVMSTOKEN(id);

              case 3:
                vmsInfo = _context2.sent;

                if (vmsInfo) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return");

              case 6:
                _this6.$set(_this6.videoList[_this6.activeIndex], "loading", true);

                _this6.commontPushVideo(_this6.activeIndex, vmsInfo.url, name, id, vmsInfo.ipcLinkInfo);

                if (isReolay) {
                  _this6.toggleReplay(_this6.activeIndex);

                  _this6.changeLine(replayTime, _this6.videoList[_this6.activeIndex], _this6.activeIndex, "picker");
                }

                _context2.next = 31;
                break;

              case 11:
                // 4屏播放替换push url，末尾替换url
                index = _this6.videoList.findIndex(function (e) {
                  return JSON.stringify(e.flvPlayer) === "{}" || e.flvPlayer === undefined;
                });

                if (!(index > -1)) {
                  _context2.next = 21;
                  break;
                }

                _context2.next = 15;
                return _this6.getVMSTOKEN(id);

              case 15:
                _vmsInfo = _context2.sent;

                if (_vmsInfo) {
                  _context2.next = 18;
                  break;
                }

                return _context2.abrupt("return");

              case 18:
                _this6.$set(_this6.videoList[index], "loading", true);

                _this6.commontPushVideo(index, _vmsInfo.url, name, id, _vmsInfo.ipcLinkInfo);

                if (isReolay) {
                  _this6.toggleReplay(index);

                  _this6.changeLine(replayTime, _this6.videoList[index], index, "picker");
                }

              case 21:
                if (!(index === -1)) {
                  _context2.next = 31;
                  break;
                }

                itemLength = _this6.videoList.length - 1;
                _context2.next = 25;
                return _this6.getVMSTOKEN(id);

              case 25:
                _vmsInfo2 = _context2.sent;

                if (_vmsInfo2) {
                  _context2.next = 28;
                  break;
                }

                return _context2.abrupt("return");

              case 28:
                _this6.$set(_this6.videoList[itemLength], "loading", true);

                _this6.commontPushVideo(itemLength, _vmsInfo2.url, name, id, _vmsInfo2.ipcLinkInfo);

                if (isReolay) {
                  _this6.toggleReplay(itemLength);

                  _this6.changeLine(replayTime, _this6.videoList[itemLength], itemLength, "picker");
                }

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // 初始化时，批量加载视频的方法。不分屏，分屏数默认为1
    initvideo: function initvideo(name, id, index, isReolay, replayTime) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var vmsInfo;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this7.videoList.forEach(function (e) {
                  if (e.flvPlayer && e.flvPlayer._receivedCanPlay) {
                    e.flvPlayer.destroy();
                  }
                });

                _this7.videoList = [];

                _this7.videoList.push({
                  id: "videoElement" + index,
                  show: true,
                  // 是否展示 4<=>1
                  isChecked: false,
                  // 是否在视频窗格中
                  autoplay: true,
                  // 自动播放
                  playState: true,
                  // 播放状态
                  mediaRecord: false,
                  // 录像状态
                  loading: false,
                  fullScreen: false,
                  span: _this7.formatSpam(1),
                  // 分屏
                  timecell: [],
                  // 录像段
                  speed: 1,
                  // 回放速度 1 2 4
                  playCellIndex: 0,
                  // 当前播放录像段
                  startPlayTime: false,
                  // 时间轴是否走动
                  startTime: new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
                }); // 一屏播放替换url


                if (!(_this7.videoOption.size === 1)) {
                  _context3.next = 12;
                  break;
                }

                _context3.next = 6;
                return _this7.getVMSTOKEN(id);

              case 6:
                vmsInfo = _context3.sent;

                if (vmsInfo) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return");

              case 9:
                _this7.$set(_this7.videoList[_this7.activeIndex], "loading", true);

                _this7.commontPushVideo(_this7.activeIndex, vmsInfo.url, name, id, vmsInfo.ipcLinkInfo);

                if (isReolay) {
                  _this7.toggleReplay(_this7.activeIndex);

                  _this7.changeLine(replayTime, _this7.videoList[_this7.activeIndex], _this7.activeIndex, "picker");
                }

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getVMSTOKEN: function getVMSTOKEN(id) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _yield$vmsService$get, ipcLinkInfo, url, isplay;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this8.vmsLogin(_this8.vmsOption.vmslogin, _this8.vmsOption.ipcLinkInfo);

              case 2:
                _context4.next = 4;
                return vmsService.getIpInfo(_this8.vmsOption.ipcLinkInfo, {
                  ipcID: id
                }).then(function (res) {
                  var serverInfo = {
                    ipcLinkInfo: {
                      serverIP: ""
                    }
                  };

                  if (res.data.ipcLinkInfo) {
                    var tempInfo = _this8.serverMappingTable.find(function (item) {
                      return item.serverIP == res.data.ipcLinkInfo.serverIP;
                    });

                    serverInfo = {
                      ipcLinkInfo: {
                        serverIP: tempInfo.mappingIP
                      }
                    };
                    return serverInfo;
                  } else {
                    return 0;
                  }
                });

              case 4:
                _yield$vmsService$get = _context4.sent;
                ipcLinkInfo = _yield$vmsService$get.ipcLinkInfo;
                console.log(ipcLinkInfo);
                _this8.ipcLinkInfo = ipcLinkInfo;

                if (ipcLinkInfo) {
                  _context4.next = 11;
                  break;
                }

                _this8.$message.error("获取视频地址失败");

                return _context4.abrupt("return");

              case 11:
                // eslint-disable-next-line require-atomic-updates
                url = "http://".concat(ipcLinkInfo.serverIP, ":").concat(_this8.vmsOption.ipcLinkInfo.serverPort, "/live?devid=").concat(id, "&channel=0"); // 重复点击视频视觉提示

                isplay = _this8.videoList.findIndex(function (e) {
                  return e.src === url;
                });

                if (!(isplay > -1)) {
                  _context4.next = 17;
                  break;
                }

                _this8.$set(_this8.videoList[isplay], "isChecked", true);

                setTimeout(function () {
                  _this8.$set(_this8.videoList[isplay], "isChecked", false);
                }, 500);
                return _context4.abrupt("return");

              case 17:
                return _context4.abrupt("return", Promise.resolve({
                  url: url,
                  ipcLinkInfo: ipcLinkInfo
                }));

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    commontPushVideo: function commontPushVideo(index, url, name, id, ipcLinkInfo) {
      this.destroy(index);
      this.$set(this.videoList[index], "src", url);
      this.$set(this.videoList[index], "name", name);
      this.$set(this.videoList[index], "videoId", id);
      this.$set(this.videoList[index], "serverIP", ipcLinkInfo.serverIP);
      this.loadvideo(index, this.videoList[index]);
    },
    // 销毁
    destroy: function destroy(index) {
      if (this.videoList[index].flvPlayer && this.videoList[index].canPlay && this.videoList[index].flvPlayer._receivedCanPlay) {
        this.videoList[index].flvPlayer.destroy();
      }

      this.fullScreen(index, "esc");
      this.$delete(this.videoList[index], "flvPlayer");
      this.$set(this.videoList[index], "loading", false);
      this.$set(this.videoList[index], "error", false);
      this.$set(this.videoList[index], "live", false);
      this.$set(this.videoList[index], "src", "");
      this.$set(this.videoList[index], "replaySrc", "");
      this.$set(this.videoList[index], "name", "");
    },
    formatSpam: function formatSpam(num) {
      switch (num) {
        case 1:
          return 24; // eslint-disable-next-line no-unreachable

        case 4:
          return 12; // eslint-disable-next-line no-unreachable

        case 6:
          return 8; // eslint-disable-next-line no-unreachable

        case 8:
          return 6; // eslint-disable-next-line no-unreachable

        case 9:
          return 8; // eslint-disable-next-line no-unreachable

        default:
          return 24; // eslint-disable-next-line no-unreachable
      }
    },
    // 全屏
    fullScreen: function fullScreen(index, key) {
      if (index === null) {
        return;
      }

      if (!this.videoList[index].flvPlayer) {
        return;
      }

      this.timeKey = new Date().getTime();

      if (key) {
        this.$set(this.videoList[index], "fullScreen", false);
      } else {
        this.activeIndex = index;
        this.$set(this.videoList[index], "fullScreen", !this.videoList[index].fullScreen);
      }
    },
    // 4 <=> 1 屏切换
    dbclick: function dbclick(index) {
      var _this9 = this;

      if (this.videoList[index].fullScreen) {
        return;
      }

      this.timeKey = new Date().getTime();
      this.activeIndex = index;

      if (this.videoList[index].span !== 24) {
        this.$set(this.videoList[index], "span", 24);
        this.$set(this.videoList[index], "show", true);

        for (var i = this.videoList.length - 1; i >= 0; i--) {
          var e = this.videoList[i];

          if (e.flvPlayer && e.flvPlayer._receivedCanPlay && i !== index) {
            e.flvPlayer.destroy();
            this.$delete(this.videoList[i], "flvPlayer");
          }

          if (i !== index) {
            this.destroy(i);
            this.$set(this.videoList[i], "show", false);
            this.$set(this.videoList[i], "src", "");
          }
        }
      } else if (this.videoList[index].span === 24) {
        if (this.videoOption.disabledDb) {
          return;
        }

        this.$set(this.videoList[index], "span", this.formatSpam(this.videoOption.size));
        this.videoList.forEach(function (e, index) {
          _this9.$set(_this9.videoList[index], "show", true);
        });
      }
    },
    eventTester: function eventTester(index, Media, e) {
      var _this10 = this;

      Media.addEventListener(e, function () {
        if (e === "loadeddata") {
          // console.log(e + ':' + Media.readyState)
          _this10.$set(_this10.videoList[index], "loading", false);

          _this10.changeSpeed(_this10.videoList[index], index, _this10.videoList[index].speed);

          _this10.$set(_this10.videoList[index], "startPlayTime", true);

          _this10.$set(_this10.videoList[index], "canPlay", true);

          _this10.$set(_this10.videoList[index], "playState", true);
        }

        if (e === "progress") {
          // 获取当前播放时间
          var curr = Media.currentTime; // 直播流缓存的最新帧

          var buffer = Media.buffered.end(0) - 0.5; // 计算延迟

          var delayTime = buffer - curr; // console.info(e + ':' + Media.readyState + '-----' + '延迟:' + delayTime)

          Media.currentTime = delayTime >= 3 ? Media.buffered.end(0) : Media.currentTime;
        }
      }, false);
    },
    // 开始录屏
    mediaRecording: function mediaRecording(index, item) {
      var canvas = document.getElementById(item.id);
      this.$set(this.videoList[index], "mediaRecord", true);
      item.allChunks = [];
      var stream2 = canvas.captureStream(60); // 60 FPS recording

      item.recorder = new MediaRecorder(stream2, {
        mimeType: "video/webm;codecs=vp9"
      });

      item.recorder.ondataavailable = function (e) {
        item.allChunks.push(e.data);
      };

      item.recorder.start(10);
    },
    // 结束录屏
    stopAndblobDownload: function stopAndblobDownload(index, item) {
      this.$set(this.videoList[index], "mediaRecord", false);
      item.recorder.stop();
      var link = document.createElement("a");
      link.style.display = "none";
      var fullBlob = new Blob(item.allChunks);
      var downloadUrl = window.URL.createObjectURL(fullBlob);
      link.href = downloadUrl;
      link.download = "".concat(item.name).concat(new Date().toLocaleString(), ".webm");
      document.body.appendChild(link);
      link.click();
      link.remove();
    },
    // 回放 实时
    toggleReplay: function toggleReplay(index) {
      var item = this.videoList[index];
      this.$set(this.videoList[index], "loading", false);

      if (!item.live) {
        item.flvPlayer.destroy();
        this.$set(this.videoList[index], "canPlay", false);
        this.$set(this.videoList[index], "startPlayTime", false); // this.changeLine(new Date(new Date().getTime() - 24 * 60 * 60 * 1000), item, index, 'first')
      } else {
        if (item.replaySrc) {
          item.flvPlayer.destroy();
        }

        this.videoList[index].replaySrc = "";
        this.loadvideo(index, item);
      } // vmsService.getRecordList


      this.$set(this.videoList[index], "live", !item.live);
    },
    // 回放时间线控制
    changeLine: function changeLine(e, item, index, type) {
      var _this11 = this;

      if (this.videoList[index].flvPlayer && this.videoList[index].replaySrc && this.videoList[index].flvPlayer._receivedCanPlay) {
        this.videoList[index].flvPlayer.destroy();
      }

      if (!e) {
        e = new Date().getTime();
      }

      var hs = new Date(new Date(e).toISOString().slice(0, 10) + " 00:00:00").getTime();
      var playtime = this.getPlayTime(e); // 选择日期触发

      if (type) {
        this.timeKey = new Date().getTime();
        vmsService.getRecordList(this.ipcLinkInfo.serverIP, this.vmsOption.ipcLinkInfo, {
          devid: item.videoId,
          playtime: playtime
        }).then(function (res) {
          res = res.data;

          if (res.returnState) {
            _this11.videoList[index].replaySrc = "";

            _this11.$message.error("".concat(new Date(e).toJSON().slice(0, 10), "\u6CA1\u6709\u5F55\u50CF"));

            _this11.$set(_this11.videoList[index], "startPlayTime", false);

            return;
          }

          _this11.videoList[index].timecell = [];
          _this11.startTime = new Date(hs + res.recordList[0].startTime * 1000);
          res.recordList.forEach(function (el) {
            var beginTime = new Date(hs + el.startTime * 1000).getTime();
            var endTime = new Date(hs + el.endTime * 1000).getTime();

            _this11.videoList[index].timecell.push({
              beginTime: beginTime,
              endTime: endTime,
              style: {
                background: "rgba(132, 244, 180, 0.498039)"
              }
            });
          });

          var playStart = playtime + "" + _this11.secondToDate(res.recordList[0].startTime);

          _this11.$set(_this11.videoList[index], "playCellIndex", 0);

          _this11.videoList[index].sid = new Date().getTime();
          _this11.videoList[index].replaySrc = "http://".concat(_this11.videoList[index].serverIP, ":8000/playback?devid=").concat(_this11.videoList[index].videoId, "&playtime=").concat(playStart, "&sid=") + _this11.videoList[index].sid;

          _this11.loadvideo(index, _this11.videoList[index], "replay");
        });
      } else {
        // 拖动时间轴触发
        var clickTime = new Date(e).getTime();
        var isClickStart = false; // eslint-disable-next-line no-unused-vars

        this.$set(this.videoList[index], "playCellIndex", 0);
        this.videoList[index].timecell.forEach(function (el, dx) {
          if (!type) {
            if (clickTime > el.beginTime && clickTime < el.endTime) {
              isClickStart = true;

              _this11.$set(_this11.videoList[index], "playCellIndex", dx);
            }
          }
        });

        if (!isClickStart) {
          this.videoList[index].replaySrc = "";
          this.$message.error("当前时间段无录像");
          this.$set(this.videoList[index], "startPlayTime", false);
          return;
        }

        var mimute = clickTime - hs;
        var playStart = playtime + "" + this.secondToDate(mimute / 1000);
        this.videoList[index].replaySrc = "http://".concat(this.videoList[index].serverIP, ":8000/playback?devid=").concat(this.videoList[index].videoId, "&playtime=").concat(playStart, "&sid=") + this.videoList[index].sid;
        this.loadvideo(index, this.videoList[index], "replay");
      }
    },
    getPlayTime: function getPlayTime(e) {
      var y = new Date(e).getFullYear();
      var m = new Date(e).getMonth() + 1 > 9 ? new Date(e).getMonth() + 1 : "0" + (new Date(e).getMonth() + 1);
      var d = new Date(e).getDate() > 9 ? new Date(e).getDate() : "0" + new Date(e).getDate();
      return y.toString() + m.toString() + d.toString();
    },
    secondToDate: function secondToDate(result) {
      var h = Math.floor(result / 3600);
      var m = Math.floor(result / 60 % 60);
      var s = Math.floor(result % 60);
      h = h >= 24 ? h - 24 : h;
      h = h >= 10 ? h : "0" + h;
      m = m >= 10 ? m : "0" + m;
      s = s >= 10 ? s : "0" + s; // eslint-disable-next-line no-return-assign

      return result = h.toString() + m.toString() + s.toString();
    },
    vmsLogin: function vmsLogin(userInfo, url) {
      var username = userInfo.username,
          password = userInfo.password;
      return new Promise(function (resolve, reject) {
        vmsService.login(url, {
          username: username,
          password: password
        }).then(function (response) {
          var headers = response.headers;
          setToken(headers["auth-token"]);
          resolve(response);
        }).catch(function (error) {
          reject(error);
        });
      });
    },
    changeSpeed: function changeSpeed(item, index, speed) {
      var _this12 = this;

      var video = document.getElementById(item.id);
      vmsService.setvideorate(this.ipcLinkInfo.serverIP, this.vmsOption.ipcLinkInfo, {
        devid: item.videoId,
        scale: speed,
        sid: item.sid
      }).then(function (res) {
        res = res.data;

        if (res.returnState.stateCode === 0) {
          _this12.$set(_this12.videoList[index], "speed", speed);
        } else {
          _this12.$set(_this12.videoList[index], "speed", 1);
        }

        video.playbackRate = _this12.videoList[index].speed;
      });
    },
    playReplayStop: function playReplayStop(playIndex, item, index) {
      this.videoList[index].replaySrc = "";
    }
  }
};var __$_require_assets_video_close_png__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAy9JREFUWAnNmbFu01AUhpMg2qEgUGkjZfNYwUwlqgzdyZYX6MICggfgMZBgZmGGIWWuRNRKsFdVp2SKlBYEajMQiYT/MzmR48TxvYlx+kt/fHN9z7lfru1jJykWFtemQnfkinw3YjULVxF31D6Tf8jeKnpG3NH4XRmwsmdsV+MB/Spfu8a6Aq4r4RN5T15zTZ4wrq/+Y/lE/p0wZtztAvhQo5/KG+OobBo9pTmUT+eluzVnJ/D7MnDLrppSTImcj0a97am9o44kwNvaX5cfJwVm2B8oF+fzuTyQJzQLkJUDjkObl7Y10ZY8dbhnAe5rYB4rp2kmBCRqha+jlzigXRDRMXm2A03WlS9s0pI1tKWUcEGsWjDAEioKSJ3bGPWvcgMDLKEMkDsERThVpVKpgH3lGQcLTAWbaVft1FrHJO12+1mn03lRrVbvk8BFjCWGWMcPBwtMY0DurU5ak8rl8laj0ThwgWQMY4kh1mmSf4NCJlaQpxIKZaoGg0GhXq9/+CXdk9IgDY6xxBBLDkfBtAmg8+qRuNls/qzVau/TIONwxBBLDg/tAFjxCAiHpkFmBMdcFW5rB3Ige2sWCEk49HZYF1w5Y2kB+FJ+YD2+2zgk8RnBkeo7gK9ln6uLwAlFIdnB+bnkyln+vtVB67hxWwD5grOwoqvHyiEOcVoJcpzwainAOByHFWcIuTjgLDjKT1oJclw5GxYCduyd6zYJzuIzhOxwiPmu6qw0OEuUEeQZZQY9l1PvxzyJ8FTCjZ/zzKWURD9Qt9u9rFQqbx3vxzxZv7My47yKfYmJXOD45LaSxBBLn6NCJltBHg5fyakF257nHFdhzOIZxwd5I1/blyY6aAfyXA2HwwL2lWfcF+U/Zw47xLRP5B6NFQsGWEJFAfkh53DUv8oNDLCEskNs7y9GjcA6ct4eab5v0TnjgOxry5Scbd7kqFPN9Tk+3yxAxnCC8ltJXpDAfZT/yBNKAuSbDUEoCF//38uRUrNyU3BMmQTIPtSSqeiBnFojNcZHPQ3+JE+cc/EExXhHwvt19fNzxJ68LCg191imlIyvVrVnyhXQgm/sj+gGGN3m8jfEX481khgFbv/1AAAAAElFTkSuQmCC";
var __$_require_assets_video_capture_png__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABfFJREFUWAnNWWlMVFcYnUGWIlJBRhYhOg1la0mQslVoGmxx2KMpJRGhQYMlUikJNdIfhL/wBxIoaFIbgiYaJSgSCi1haSlpa6QhLLEuBCObMCxCjWKEqvScl3lkYOaNbwChJznv3Xfvd797uPd+331vUCpWjx3o6gu6gfZ6RFHxRI/jKN8FZ0CzoTSzxzbYh4IU5mxm30nYU2gn+FRuX7kCbeBwHxgOWst1LmG3gPo/wRvgvITNUrUcge/BOh60W+q1PoU5uGkEb5tyt8VEI8VHghS31lmDCwPQ5/u62iGDVl2FlEArtCeBIVId17FeDV/cz/3gK3AZjAnkzFEcl3ajsBMDqUCD5TYmMBKGGzFzGGYZKJIYFK66y0qBYkDo22xkWY3BJsEpcVALsYA7UwkDYrNBDdQiQF8g85ydrn4zb9RALQJEgTwhmIRl4fTp015RUVFOsoxhFBMTo8rNzfWUaw87aqEmhZioP0H5Y1bIwdDQUIaDg8P2yMjIH7q7u3nuSiIsLGx7W1vbl2NjY1Pe3t4XJA0NGzpQ9Ys4gzxbZeP48eN11tbWVvX19SlOTk6WUh3d3Nys6+rqjlhYWCjRp17KTqJe0ESBfCsx6+BvaWl5lJeXV7Nr1y4XlD+DAIMxLC0tFWhLcnZ2dsrJyanu6OiYNTAyXUFNO5hmAkFz9ofgtrOzc9bV1fVZYmJieEBAwJbq6uoHQoPu0tjYqAkPD99bWlr6Y1FR0T39NjPKjykwFHQxo9OSKUSMRUREbI2Pjw+3tbWdaW1tZQ5TlJWVfZCamvop2v9IT0/nm8tq8YxBchRUg6sC9qKyp6cnFQGwJyMj4wKEWp45cybt1q1bA0FBQVdevHixKr+6ToMU+DUoO2UYG83Dw8Omq6srw97e3k6pVFrMzs4+DgwMrJyYmPjXmL0ZdY+4u/m6bhYYuQcOHHBCquEWUYyOjs6fOHHi2luAjY2N1bFjx2pEcbSNjo5WOTo6Ska7icHtDcPPhDWbzp07F4rBv21ubs6GsNxTp069C11KBILmFbC4uKgoKSnRMIrz8/N9R0ZGvmlqajo5OTmZV15eHvQa9wbNnIG94FaDFiMVHCArKyv+zp079y9evPi7p6enKiEhITA2NtYFkewLkdex1AMHDx6MwEnjmJKS8hGETVdWVv6qUqls4uLiPrSzs5tF+pkw4t5Y1T+ygwTC1BUVFV9g8/dj81dz8yNCPc6fP59Bz7W1tb8lJSW1s9zQ0BCFyI5gOTk5+furV69qGUw4dY74+Pi8g6R9Af1G2P4aDHKJTR5VdODu7m5dXFycrNVqJzEztWJkQqiQ4DFrf0NIO22JQ4cOtfb19Qm5LzQ0VLBZWFhY1Gg0NdPT0zNIQ5/L3JNPKHBc8GrigoPebytQUFDw89TUlBCZfAHIzMzUYI+NIWDqsP2WPPAPgJhr4+Pj2uzs7Jj9+/fztFI8fPhwobCwsOltAEHludRBujBOgfxWNQkrKyvuVcXz589f8u7l5WV76dKlI/MA9uBlpBWDZMcoxkxefgnglEnZvXu38I6HLoIP+pGBu9yDxFegsBTC04oLAmDbzZs3T0LgPJazPyQkxJcZ5fDhw1XYe9oV5sse09LS3Kuqqo7Ozc09Q997wcHBvoj0V35+fmcxw/xGlgJPpbPCzKDAXLhHyhKzsYCUMoxjbY+/v78XlvkRgqaGm1+qj1iPvfhkYGDgPs5lD4hSDw8Pa3Hi1Pb29r7u14Uu+HggziBfDnPAN/H9K2o1586Z/Q58KiZq/jVrOdTNGVyOLbUIMywKZKcb4BwLmwxqoBYB+gLnUdOoq9/MGzVQiwAxSMTnKV1BLVZs8L0d4/2lP+ZKgWwbAplydvJhA3EbY/20cjxjAmnTD/K3ko0SSXHXQYMkLiWQ5xY7EWrh+uYu7XDNmTMQxyGlBLKNGASZ0dXgeufIOfisA5ftOTwvg5iol1UaeeA5ug/kF/9ahTIJM88xlSxFK8pGIVeg2Pl/+yO6KFD/zlcofv27gTzLRaK4fv+G+A+FhOmwOty5agAAAABJRU5ErkJggg==";var __$_require_assets_video_pause_png__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAyBJREFUWAntWc9rGkEYVUMbi1kPoREWlG4RSWjxWKEthfRc8NJL8dCDV6GH0j9Cr735T9he4lVPCVhqxUMQDzalUiFCwGalNGDb9xZn2VU37HZ/6CEP3s6338z3zWPGnZ0dw6H/xy5CD0AZlAyEGbo0cAS7B16AjhF2GLGD9jmQwhIOY8/RnkJboGo31q7AbSR8DD4Bb9tNbtHuCv5j8AT8bdFGd9sR+ACtX4AxPcobY4o0R+Dpdem2rqmk+EOQ4tyOGlIsgTkfzr3flmrnDiuBt1D/EnxkFeihX0Eu/p774B/QhFUCOXIUx6kNCnvo6C64NN2rBB6iYRAjh25MoEjiTLvOL4sCxQNhbBOkraCzc3AsOo0IAyWXEj4Q6wY1UIsGo0Cuc7G5f50FNVCLBiGQbwguwpsCaqGmkBCYg+1oratWq7nJZPK23++/TqfTd5jMiGg0Gu52u69UVX1Xq9WeG+ts2NRCTbpAvlsdoVAoPIvH41Imk7lfKpX2F4OLxaKSzWb3Y0A+n38qy7KjAUA+TRNHkLsSLpSOsAOIgEQiodvCl0wmdd8WkEqloqLOZklNuxToePRsduBFswMKlL3I5FMOmQK52dxUSDcCXU6NNoIuc/gbzinmB86m4vJGoMup0UZw5DKJn+EjTjG/VT3HX8CDpD0K5Bc/d7GOMBwOf4iAVqul28LXaDT0mcGORm232z9Fnc2Smi7Elp9vk3s2A7Vm2GZ9lyTpql6vfymXy73ZbGYKHwwGvyKRyHg6nU4qlUqz0+k4FfgZCb/yC47gzuMN6HRLxFg/wNOH96DKKSZ4VnKsWZtxoRbt/EYIpKwTcEpjzaAGatFgFMiDnKO5f50FNVCLBvGQiPvx3FCEI+Cyif4+GftcFMg6HuRwu73HmwBxir7qi/2tEsg2PMjhWUlQIinuA2heq+CwEshTJgYRinb179JEao7ckjh2aSWQdcQZyBVdAb1eI6fI+RE0/eZwb4JYqE3OFTfb8PE4gl/8boVyEeY6x6VEf1phr4RdgSKYb5wcyE/VhHDaLDkTvh2ir9LAD34KlUHf/ob4B5Jeo5h9Z8JXAAAAAElFTkSuQmCC";var __$_require_assets_video_play_png__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA4RJREFUWAnNmU1IG0EYhmP/bLSBxqpRSmi8hUopoVSwDSSnQtIelBZKBXsoBHrqpXj0Yo659ZZLD7mUitgeaiwlEBFJoOLBgyEUSi1SIgpa/CkY+/e+Sybs5kd2NpuNL3w7387O983D7O5kdtJmM64uhHph/TCHyuDa9lVWgJ+H7cCk1SYZcQnth2AE65WM3UJ7gn6GHeiN1QvYjoTDsDuwC3qT12lXRH0GloUd1WlTrtYDeB2t78M6y1HmOIdIMwfLnZTu7AkXCR+EEa7RUUOKKjHnYKn2e9XVUkU9wPO4/hB2u16gifUe5OLz/AX2F6ZRLUCOHOF4a61SDzrqhlXd7lqAQTS0YuTQjUaEpNaVY+lQCSheCHUbK30POtuCbYtOzwgHJacSvhCtFhnIokgNyHmus1TfyoIMZFEkAPkLwUn4tIgsZLIJwCH40nNdIpG4u7e393J1dfWxz+fj77FZIguZbOIlCcGXvr3T09NP7Xb7RZfL1T0+Pn6zWCxuZzIZQ4sCwlTIjvNljiBXJZwopXUOEkEdUCwWe5JMJu/BFXdGXDZSkqmLibgyMUttoVBoOJ/PP/P7/ZdNSOolYL8JiTQp3G731VQq9XxqampQc0H+pJ+AZj7cZYR2aHJy8lE6nX7gdDrLj0K5gT7H0TRA0X8wGLyVy+UiBm958wEJ2tfX1xuPx8MCWqJUACXaG2/qcDg6jETzFvMDp6na3NzcikQi7w10ss+Hl4BXDATrCllcXFwZGRn5uLu7+1tXgLbRftNG8AiKRqMzgUDgg0E4oiojWIBzQwve2NnGxsaPsbGxmaWlpZ+NZbIVOIL8VjVL/+bn57Ner/e1CXBkyhOQP+5cxUrrGBJBv6CJiYk34XD4E9yqjx/RTqIk045YzfDX5JpEsNJ0YGDgGNa9trb2dXR09O3s7CwfF7O0gkTfxIc7F4cvYNJrQrNoKvJw9+EV7IC3mOJeSUbxTseBLMr+jQAkVhZ2SKfFIgNZFKkBuZEzV6pvZUEGsigSL4k43y45HlFhcbmA/pbVfVYC8ho3crjc7uGJhcqhr2Rlf7UA2YYbOdwrsQqScO9gf2Aa1QPkRMsgyqMcm3dYQGqOXBUcu6wHyGvUOowzugdm9hx5iJxcgmmeOZxrJCZqTWWNk3bUcTuCX/yNgnIS5jzHqaT8tsKvKb2AIvjUbqILQHVpyd8Q/wGdJMxkTAyibgAAAABJRU5ErkJggg==";var __$_require_assets_video_live_png__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABsRJREFUWAnNWVtMVFcUnRleCgxgWwoDValCACeQIAKBBIJUWxDEJk1QqIloiBJCEPtn/PDHD/0wVpIWjDWKMUYwSvkoigYEGkArET4sCALhqeGNDFgFql1ryp3cmTsz91Ip7Ur23HP22eecNeex974zatU/x0foGgLRQbQiQVFlEMlLlJ9BJiHLhnqZPdxhHw0hsU+X2XcU9iT6G2RWaV+lBF0wYCwkDuKsdHAbdvPQN0GaIW9t2JjUSghugXUqxM3Ua2UKcxjmF0i7veEc7DSSfCKE5D501TCEBBxTv6Ttl7QuKWwRdEL7N5AoWx1XUB+AsXieuyDvIGawRpArR3Lc2tWCNyb6BCLZbmsEE2G4GiuHacxAkkSf8XPpw5KgcCHENqtZDsBko5AxYVJHoYAnXQkvhGLodDrnEydOhMXGxm4C/NYCDg4OmqmpqVfDw8Nj9+/ff1ZUVNQ5NDQk605Ek5JDD8TYR+xmEqGkyMLV1VVz5cqV+PT09FgXgB1eAzMzMwa1Wq3x8vLSQr2G+jdAWVnZr/n5+Q9nZ2cll4A2VlAHHUUlEGSEKIDIupPo6GiPioqKTD8/P9854Pbt282XLl1qr6+vn4qIiNByEZuamqb37Nnjc/DgQX1KSkq0s7OzS19f32BqampZe3v7HCeWAZ15EWRWIJiESoJMJ1VMTIznnTt3stetW+f14MGDlszMzHsjIyMLQr/+/v4cDw8PN7SfF3ShoaGuN27cSA8PDw/G1k/hOPzU2dn5Wmi382xAW61AMA8V+iKb4LZ2dXXl+Pv76y5fvlx96NChh5bGOTk5G7RardO5c+d4hkzQaDSqu3fvpuzcuTO6t7d3ICwsrBQnQm67eVl+JEFmJdxeu8A5SsjIyNheU1PzeMeOHVV2ja00Ojo6qtra2rL0en3QhQsXqnJzcx9bMbNUFZEgE4AvLVvEdR8fHyecoe8WAGxzSUhIiBbncERsI1fet2+f34sXL/7AF8x7C2zcuPH7iYmJRZl+9zQw0MkYqehK1gA3b95s8vb2drl+/foBrECA0A+H3xs319KnCs2q48ePB+MiZU1OTs7j7D5xA/Ly8oJMBrYLOhJksmkXONif06C4uLi9oaFhKi4urriqquql0Km8vPwAzli6ULd84qYPRkVFFT99+nQOtr+zPTk5OdjSzkpdq4ggnfAroKWlZYaDtLa2GgYGBkzOt7Ky8hG2Ply8quLJeGsF94LVH0Lb+/Xr1wuhTWxqWVZGkBFienqaabxVHD58uHF0dHT81KlTaRcvXozZtm2bh1VDKHl74T5f40jYtBH1NRIU1a0XGb4QIQSXJDFihOju7h76GICrScYxyKXTlhguKTjUn4CtdrGeW2xzZQRDxlZPT0+bE9IOEUaPCNKGyPEDVzw7O9vqJXB3d9fAp7riSylx1gZFBAcHB8dA0AOXxZNkTp8+HbZ7924zxz4+Pj4FH7fpzJkzX9Cmo6Njkk8iKyvL/+TJk6Es79+/fwMe6ufPnw+zLgNlBKurq/k2pjpy5IieMRbbmIjEwBTiltpu4ZzOwL/pcBFqSkpK+qgnDAbDQmFh4VcMlXD2eupqa2vNog11VmBQ7KgRogoxwPvAwMAixN/5d+/kIpX5dAx3cDWejY2N+djeOV9f3/NIdN6bW0lqRkdtXB1Jk0jBhODatWv1ODpuCHnJyyXHoRDq1KWlpem4cI5Xr15tUECO3Z7xDPKsMDDbxdGjRx/39PT0xcfHRyA7kc18xIMh3VIjeU0LDg7ehLPZXVBQ8ETcbqNMTpMkSMiuIr8xbmg54ufE3r17tzc3N38NB25MSv8ewvpnZGSkFknCtwkJCVuRWb9MS0u7Zd1SojVyEnyb4oR18+bNa5ETZgQFBQWA9BuEvEfYsg5EE1PywMwFueJnuLH6pKSkSNSdEEm6EbNvIel4I6EiVUgSVpokLgnLdsEtO3v27Fb4ukT4NX451eLi4gJTflwGDXJCLc6aMXnAzX6F14P6Y8eOtdod1LyxDlWKKeVnme8WBRA3VpSAThfvGoG7du0KZmxFJu2BAGEMZUhuh5Fa9eKLdM3Pz8vdVvF0fCVgui95aaLRFkgGC/8hyjF3uzC/ZQ43ttQQIBis8rMO85ll2pYEyacfwjCmJB2i/UqBq1ZlOZg1grThDzn8rWS1SJJcBUSS4dgiyDjGTkSA8fPf+6jD0Fw5CTlOaYsg24g+CD16AET2pR42ywFv688QszNnOYDgqC31lnW6oFgI3wA/lCidcBOkGWJ6bUDZKpQSFDr/b39EFwiKn3zh56/9OgizbUFQXLm/If4Cu15nf+2Jc9oAAAAASUVORK5CYII=";var __$_require_assets_video_replay_png__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABlBJREFUWAnNWW1Mk1cUFoTqlIKUITZAwDgRGEYXrcpHsM4pARKWiCxZMCayBALilKh//KnxLy5o9I+yYSTORQMLkSlxUioCwojrsjBwQdDI+HDOAsqn4J6n6wtv2/eLqWwnefre3nvuuU/vPfec84LXgn8vBkyNBoyAXgQ0FwyL0It2O/AXMGfxmuMMP+hvAkhs+RznDkCfRJuBF1rnaiW4CAbjgQRAp9W4jN4E+huARmBcRmemWwvBWGinA0tnZr2dxkuYuQ60KZlbqDBI8maA5N5012DCQ2jzQ2fvI49RZ4ccQV+MZwImuYlvsT8StujPD4BpwEWkCHLnSI5HO18SjIXeBzyOW4qgGYrzsXNYxkVIktLt+HR+uBMULoRYZz7bkVhsAHgqLOojNPBkKOGF0CzBwcG+hw8fjjabzR+sXLnS6Ofnt2Qh5Pnz54M9PT1/3rx5s72kpKSjv79/UrPRfzh0Qt8RgsRhxoxOQlUWL17sde7cuS1ZWVmJSyGcMD4+Pvbs2TO7t7e3l7+/v34JhP0TExPjly9frisoKLg3MjLicQmoIyEW9BELBILMEF8CquEkLi5uaWVlZdaqVasisODLGzdutJ45c8ZWW1vrksq2bdtmyM/PX5uWlmbij+jt7e1LTU0tt9lsWrIIg3kJ8EIg+DG+JAOKsmbNmiV37979IigoyNDU1PRLdnb2Dw8fPhxTmhQSEuJ77dq1tMTExPU4ent6evo3jY2Ng0pznGNWPG97O78wtyoKjxU+9TnJVVRUWOPj4yvUyNEg/S8pKen78vLyHwMDA5dduXIlC6cvrKu0poMTFVmVqCZ+OLspIiIirKWl5dddu3bVKlmWGtuzZ0+9xWJpDQ8PDy0rK1M9LScnA4+YBcBOKaNCH2/r48ePi15DoqKiSp48eeKS5IuLi9fDzXTHjx//GbeX/iMpoaGhura2tkKchg7u8lV3d7eie8BIDXfQKGlN1FlYWLgaRt/DhfjJndyRI0dWFxUVfZqbm5va3t5+4NSpUx/5+Iij16whkq+qqmrW6XSLjh49Gjc7ItsykiCLTUXB7YuhAvwu+tKlS4kJCQnLhAnYFUYAhyAO+h06dCijq6srd9++feFCv/iJH2Dj961bt0aJ+2Xaek0EcRMDaWDFihXLcXM/qaur2x8TE+OIc1KGw8LCjKWlpTnNzc2ZGzdu9BfrtLa2DlOgo+r3mKeNIALvzC5NQ6xW6/3Ozs5R8cJSbZPJFIewtD8lJYWFwIwwoDOYz3TINxwE5YedI8wOJHbnzp37OJrT27dvr0aGeK06EQrwNx1cwmW3YI8np0nozXzBCVLSRnD9GoSmcWRDSnpSYwjotpMnT/4mHgsICNAPDQ1pySjD/CUkqCj19fX2uZLDbe/NyckpxcWqFO/2hg0b9CDojxvNqkVNhoUdVFOUHZ+amnIpAF5Azp8/fxth5P6rV6885h08eHAtO/Gjf/cY9OwY1hSoPefN9qxbt84PubWAvoY42ZSXl2eVC9ZIdT4IQQeg6hMbG3taS6DmDvJdVTGTzNLxbLE6QSws1uv1C5FtXDKMu/bVq1d38njPnj17XQM5Tm9nRc1wEQs46jo85yxjY2PTg4ODU0oTL1y4sAU5PBllVz8CfxVcQ0mdY/RRq3DduYuaxGg06vr6+vJv3bqVxrbaJJZbNTU1qbgwKfgRg7t37/5WfGkU5js4CQSboSib5MVGRkdHp+D8U4iFJuTeQqa+zZs3B4h12KZvXrx4MaGjo2P/jh07NqHsGsjIyChraGiwu+tKfCcXcpqpqNk2O8G2orCew5ElZmZmJvn6+jp2EXFt2G63DzGgGwyGZUKmmJycnKiurr63d+/eOuionqtzYQuehAtBvjSx7NfsizziY8eOrU1OTl6NOi+EARj8XuNVYASX4A8E6a4TJ07Y3CsgLqwgLzHGct/jpYlzeFk+Y+M/lO+wdpuwvvt78VPnQKSgMM9PC9ZrEa/pTpBjjwAmd+FNn33zIdy1aveFpAhS5wHAEmm+SJJcBeBxieQIMr9yEiXS8fnuPiwwzZ3zIMcl5QhyjNINDACRgGpQhs5chLe1EnDxOXcDLBa0CENQPJAAvClRBuEGoBFQzN0Yd4mD/K4mLP03Af+7P6JLEecLP4kagXf2b4i/ARdYNJixNrfPAAAAAElFTkSuQmCC";
var __$_require_assets_video_full_png__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABLlJREFUWAnNWUtPW0cYNQ0x0ISSxHUaXsGAEIEsWhZNMAvCBoRUqarUbXgpSKy6Yof4A5Fgj2DDY8WqUSWjKt0gJGibRpbYhCggYbsIi1iNMH6EV0jPuXiuxtf3ZTsxHOncO89vDt/MfDPXFDlyxy10vQdWguUSkXTEJIaRfg2+A7NGUZY9rqP9A5DCbmfZ9y3aU+gLMG63r12BJTDoBTtAp13jBu2OUb4G/gkeGbRRi+0IbEXrH8Braq9Pk0jAjA98ZWbuikklxXeBFJev12AiA7R5P1UazKhNFRgJvIr6n8HvjTp+wnIPbHE9vwHPwDToCaTnKI5TWyi4MdDXYMZ06wnsQsNCeA7DpIEiiYDyTD20AsWGkNsUMu3BYG/BiBj0C5HAm6GEG+KiQQ3UoqBYJPBmnLsm5dOS4+Pjzf39/Q/X19eVHXdwcHA0MjLy1+npaVo7bWZsbKy5ra3tDsvr6upc+/v7yZ6ent+17aQ8NVDLMsuEQJ4QDMKGoLimpqb66urqb96f48jtdvvD4TADryF6e3ubW1tb7xYDFRUVX52cnLC9mUDaopaXYFxM8QNkTGMdPZdMJhNfAktLS/7a2toZK3Gw6ejs7PxtdHT0WVlZWSm8F93d3Y2w3ALUQk0OIZBnqyXguMO5ubnnfX193fPz86YeF8YGBgZqpqenH29tbYX8fv/mR0DUWbwVTZxi3koYKE3BNQeBR4ODgzxDHRi4h29M/RrfepDFeb3eRfxxj2hDr61OGTXdYlCmJ5TBdBqpRVhCDqw5p5jW2dlZL0UuLCz8oSdSKw5/4IfS0tKi8vLy4kgkcqIaNk88pwcrzduc13K3CnEs0XiyCCJXhR09caw7PDz8CNoVxy6V9OAg6AFzQsqT3QghT0OhkDJ9gUDgSTwef9/R0bFIz+Vk+LxTgAJ/AV15GHHU1NSU7OzsqGsLoUhZCmdnGWd/tsP8R4FjILf1ZcSxCDOXUZyiiQL5gZMzhoaGaoPB4BNOqzCyurr608zMzEORz+Mdy0sgxU1NTT2ORqNJeYdvbGyEh4eHe7mB8hDHrjGGmZw8KMRtbm4GuFvlDQFxfzudziuMkxxFhCSms4TiwbCdTryVrKys/Mi2srj29vZFhJSM7crgzSBOkcKTExMT3/p8vm4746XahOlBfqtaniS8MvFWYkecECBOGOFJhKMbjY2Ntg6GlI3XFMgvft5iLc9jXpm45jitRp5LGVZfssjt7e2QWmGdoKZ3IszQi6bgZZP3uUQikdzb24ti+rp4tpp2QuXk5OR3VVVVFRD3b319/V2Xy3XTqk+qXtFEDxIvwHZQDRUslMGb8DGAoyve0NBwh7cSHvxWZ2tLS8ttMa2xWCyOfknZrkH6GOXU5JA90IU8eRmwDBGkemFlmve8BBMXDGpQ7pzUIdYg0zzsfUxcMKhBvXhov4vF94LngkQuY9x/5LG1AlkXBBly3MwUEK8w1pJ2PD2BbPMG5G8lhRJJcb+CGZdbI4E8utiJ8CjPz/dYhml6LkMchzQSyDoiADKie0DDGIm6XJBAp2dg2prTGpLjoLZOzpcgw6sTvwDzFcogvAYylKi7FWld2BUoOl/aH9GFQPldkH9D/A8zpMxHaP3gTwAAAABJRU5ErkJggg==";var __$_require_assets_video_small_png__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABNVJREFUWAnNWd9LW1ccj0lcrNY+qKlmDA3Nw+rGyIsrViaIMmXOh8FeZKCMvUzGqjDQodBHxb9g+iYoiHtQJ+qQDVEQG0idSh6M1G611h9rNHOxSzQ2Mf180pz0muSm98Y27gufe8495/s93w/fc873nJtkaFKXPJjeBExArgSoap5JsIf6OvAPoFoyVFpchf4tgMSuq7R1QZ9E7cB/Sm2VEjRgwNtABfCO0sFl9E7Rfg+wAX4ZnWizEoIfQPtzICdq9WYqXgwzDawlG06XpJPkqwCSu2jUMESccMwPI62P43ojDXIEM9H/JfCxnOEbbDdjLK7nB8AZcE4SEWTkSI5Tmy4xwlEBEDfdiQhWQTEdkYObc0KSlM3wM/KIJSg2hFQnnXUznLmAfeFUKyoomUq4IS5byIFcwiIlyDyXE2mPK8rKyq51dXW9H9ehoqG+vt7Y0tJifo0JOZBLWARBnhBMwrJSW1tr6u7ubhwcHEyqJzdAY2Pju2NjY980NTVZ5XQk7fRBThqxBj9B/QYb5GRhYcFtsView8GnLMfHx5/I6ca2k9zAwEDT1tbWXnV19djJyUlcOomxIa8A8EgQ/AwvstMrjEkqlqRer9f09vZa5+bmnp6dvfTb2tp6IxQKBXd2dvxScuXl5cOHh4d0rESuQOk+CfJWUq3EgjqxJI+Ojnz9/f3Ndrt9bWNjw0edycnJrwoLCzMyMzMDInIqyXEYBsyhx4M3E1XS3NzMw17D6c7Pzw9HXqfTRc91rVabUVRUdO0C5ASfmyRoEm9KS07ryMjIhtFovIqdGbdp0K+vrKy0bm9vP+3s7PwtKytLbEalLoSeiQR52VQlPT091vb29i8kRiFEMpq7ciGIorakpOS90dHRbx0Ox7rVav1Zoq+0mstpuQPkK7WgHiNYU1NTIKaV5IaGhrbFGIhqAaMWCLzcD8vLyx5E87V3P2EvKd0k2AW8jeuUxE/K1dNU10bKHtUakiA/cFRJW1ub5eDg4I7b7W71eDw/BIPBu3V1ddFl4vP52o+Pj3+EzvfExMREjSoHr5SfpURwcXFxf2ZmZmV1dfVhdnb2FW4Ig8Egkr4GrzqswSyXy/Xv7OysA7p/vvKpqpYawaWlpaOpqam/KioqPtrd3f2bLrEhQsK11+v1OZ3Oh6WlpRa/3x/o6+vbFH0qyzDBPZVGGunx1dHR8Wsie0R3Czv7dybzVC8YGHePeZDfqrWJnCRqk5Lj8YUp1q6srDgBj9C32WxOXC6eiMiRJPvECST0FJTr4nj6Dsr8cEkqseSUHvyMIEkyoipI8mb9k1jYPE1KkrHjZXN4ePhrXpnUHvzSC4bJZPJh/e4m8xXp+wPlI04xxQ6UA7IJu7i4OAcnwnpDQ8O00shxYCGMHNLP87y8vGzRlqQ8RR85acQUs14VAeuXLfMgQGikJ4kN7142XrKQA7mERUqQh/l0pP0yC3KIXizEJhGE9iMVs2hIczkPf/elPmMJsu8xwJRj5EsaZQ2+4pJ+IoLk9ADgbyXpIkly40AQOCdyBPl5RiOKOfx8e495DM3IxZGjSzmC7KNsAszoZkA2R6IvFfHC6Bfg3JqLHUiaB2P7pO8GvNwG+IF0UaJMwvcAppLobkU9oSglKIz/tz+iC4LSMi1/Q7wAlgK2yWu2V4kAAAAASUVORK5CYII=";/* script */
var __vue_script__$1 = script$1;

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "videotemplate"
  }, [_c('el-row', {
    attrs: {
      "gutter": 10
    }
  }, _vm._l(_vm.videoList, function (item, index) {
    return _c('el-col', {
      key: index,
      staticClass: "animate__animated",
      class: [{
        show: item.show
      }, {
        hide: !item.show
      }, {
        animate__shakeX: item.isChecked
      }],
      staticStyle: {
        "overflow": "hidden"
      },
      attrs: {
        "span": item.span
      }
    }, [_c('div', {
      staticClass: "video-box",
      class: _vm.videoOption.bigness === 'small' ? 'small-video-wrap' : ''
    }, [_c('div', {
      directives: [{
        name: "loading",
        rawName: "v-loading",
        value: item.loading,
        expression: "item.loading"
      }],
      class: item.fullScreen ? 'fullScreen' : 'videowrap',
      attrs: {
        "element-loading-text": "加载中",
        "element-loading-spinner": "el-icon-loading",
        "element-loading-background": "rgba(0, 0, 0, 0.8)"
      },
      on: {
        "dblclick": function dblclick($event) {
          return _vm.dbclick(index);
        }
      }
    }, [_c('div', {
      staticClass: "videoTitle"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('video', {
      style: item.live ? 'height: calc(100% - 100px);' : 'height: 100%;',
      attrs: {
        "id": item.id,
        "width": "100%",
        "autoplay": item.autoplay
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "water"
    }, [_vm._v(_vm._s(_vm.videoOption.text))]), _vm._v(" "), _c('span', {
      staticClass: "water water2"
    }, [_vm._v(_vm._s(_vm.videoOption.text))]), _vm._v(" "), _c('span', {
      staticClass: "water water3"
    }, [_vm._v(_vm._s(_vm.videoOption.text))]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.error,
        expression: "item.error"
      }],
      staticClass: "error"
    }, [_c('span', [_vm._v("视频加载失败")]), _vm._v(" "), _c('el-button', {
      attrs: {
        "type": "info",
        "round": ""
      },
      on: {
        "click": function click($event) {
          return _vm.loadvideo(index, item);
        }
      }
    }, [_vm._v("重新加载")])], 1), _vm._v(" "), item.flvPlayer ? _c('div', {
      staticClass: "closrControl"
    }, [_c('el-button', {
      on: {
        "click": function click($event) {
          return _vm.destroy(index);
        }
      }
    }, [_c('el-tooltip', {
      staticClass: "item",
      attrs: {
        "effect": "dark",
        "content": "关闭视频",
        "placement": "left"
      }
    }, [_c('img', {
      attrs: {
        "src": __$_require_assets_video_close_png__,
        "alt": ""
      }
    })])], 1)], 1) : _vm._e(), _vm._v(" "), item.mediaRecord ? _c('div', {
      staticClass: "tcl"
    }, [_vm._v("TCL")]) : _vm._e(), _vm._v(" "), item.flvPlayer && !item.error ? _c('div', {
      staticClass: "control"
    }, [_c('el-button', {
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.capture(index, item);
        }
      }
    }, [_c('el-tooltip', {
      staticClass: "item",
      attrs: {
        "effect": "dark",
        "content": "截图",
        "placement": "top"
      }
    }, [_c('img', {
      attrs: {
        "src": __$_require_assets_video_capture_png__,
        "alt": ""
      }
    })])], 1), _vm._v(" "), _c('el-button', {
      on: {
        "click": function click($event) {
          return _vm.toggle(index);
        }
      }
    }, [_c('el-tooltip', {
      staticClass: "item",
      attrs: {
        "effect": "dark",
        "content": "暂停",
        "placement": "top"
      }
    }, [_c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.playState,
        expression: "item.playState"
      }],
      attrs: {
        "src": __$_require_assets_video_pause_png__,
        "alt": ""
      }
    })]), _vm._v(" "), _c('el-tooltip', {
      staticClass: "item",
      attrs: {
        "effect": "dark",
        "content": "播放",
        "placement": "top"
      }
    }, [_c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !item.playState,
        expression: "!item.playState"
      }],
      attrs: {
        "title": "播放",
        "src": __$_require_assets_video_play_png__,
        "alt": ""
      }
    })])], 1), _vm._v(" "), _c('el-button', {
      on: {
        "click": function click($event) {
          return _vm.toggleReplay(index);
        }
      }
    }, [_c('el-tooltip', {
      staticClass: "item",
      attrs: {
        "effect": "dark",
        "content": "实时",
        "placement": "top"
      }
    }, [_c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.live,
        expression: "item.live"
      }],
      attrs: {
        "src": __$_require_assets_video_live_png__,
        "alt": ""
      }
    })]), _vm._v(" "), _c('el-tooltip', {
      staticClass: "item",
      attrs: {
        "effect": "dark",
        "content": "回放",
        "placement": "top"
      }
    }, [_c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !item.live,
        expression: "!item.live"
      }],
      attrs: {
        "src": __$_require_assets_video_replay_png__,
        "alt": ""
      }
    })])], 1), _vm._v(" "), _c('el-button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.span === 24,
        expression: "item.span === 24"
      }],
      on: {
        "click": function click($event) {
          return _vm.fullScreen(index);
        }
      }
    }, [_c('el-tooltip', {
      staticClass: "item",
      attrs: {
        "effect": "dark",
        "content": "全屏",
        "placement": "top"
      }
    }, [_c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !item.fullScreen,
        expression: "!item.fullScreen"
      }],
      attrs: {
        "src": __$_require_assets_video_full_png__,
        "alt": ""
      }
    })]), _vm._v(" "), _c('el-tooltip', {
      staticClass: "item",
      attrs: {
        "effect": "dark",
        "content": "退出全屏",
        "placement": "top"
      }
    }, [_c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.fullScreen,
        expression: "item.fullScreen"
      }],
      attrs: {
        "src": __$_require_assets_video_small_png__,
        "alt": ""
      }
    })])], 1), _vm._v(" "), _c('el-button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.live,
        expression: "item.live"
      }],
      staticClass: "play-speed"
    }, [_c('span', {
      staticClass: "speed",
      class: item.speed === 1 ? 'active' : '',
      on: {
        "click": function click($event) {
          return _vm.changeSpeed(item, index, 1);
        }
      }
    }, [_vm._v("\n                1.0X\n              ")]), _vm._v(" "), _c('span', {
      staticClass: "speed",
      class: item.speed === 2 ? 'active' : '',
      on: {
        "click": function click($event) {
          return _vm.changeSpeed(item, index, 2);
        }
      }
    }, [_vm._v("\n                2.0X\n              ")]), _vm._v(" "), _c('span', {
      staticClass: "speed",
      class: item.speed === 4 ? 'active' : '',
      on: {
        "click": function click($event) {
          return _vm.changeSpeed(item, index, 4);
        }
      }
    }, [_vm._v("\n                4.0X\n              ")])]), _vm._v(" "), _c('el-date-picker', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.live,
        expression: "item.live"
      }],
      attrs: {
        "type": "date",
        "placeholder": "选择日期",
        "picker-options": _vm.pickerOptions,
        "clearable": false
      },
      on: {
        "change": function change($event) {
          return _vm.pickerchange($event, item, index);
        }
      },
      model: {
        value: item.startTime,
        callback: function callback($$v) {
          _vm.$set(item, "startTime", $$v);
        },
        expression: "item.startTime"
      }
    })], 1) : _vm._e(), _vm._v(" "), item.live && item.flvPlayer ? _c('timeline', {
      key: _vm.timeKey,
      ref: item.id,
      refInFor: true,
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "timecell": item.timecell,
        "timers": item.speed,
        "play-cell-index": item.playCellIndex,
        "start-time": _vm.startTime,
        "start-play-time": item.startPlayTime,
        "canvasid": 'canvas' + item.id
      },
      on: {
        "playReplayStop": function playReplayStop($event) {
          return _vm.playReplayStop($event, item, index);
        },
        "changeLine": function changeLine($event) {
          return _vm.changeLine($event, item, index);
        }
      }
    }) : _vm._e()], 1)])]);
  }), 1)], 1);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-feb2671e_0", {
    source: ".videotemplate{user-select:none;height:100%;width:100%}.videotemplate .el-row{width:100%;height:100%;padding:0 5px!important;margin:0!important}.videotemplate .el-col{padding:0!important;height:100%}.videotemplate .fullScreen{position:fixed;top:0;left:0;z-index:9999;transition:all .5s}.videotemplate .videowrap{position:relative;transition:all .5s}.videotemplate .el-col-12,.videotemplate .el-col-6{height:50%}.videotemplate .el-col-8{height:33.3333%}.videotemplate .fullScreen,.videotemplate .videowrap{border:2px solid #000;height:100%;width:100%;background:#1e2427}.videotemplate .fullScreen .videoTitle,.videotemplate .videowrap .videoTitle{position:absolute;z-index:5;color:#fff;top:0;left:0}.videotemplate .fullScreen .water,.videotemplate .videowrap .water{user-select:none;position:absolute;color:#fff;opacity:.6;z-index:99;top:15%;left:10%;text-align:center;line-height:30px;font-size:30px;font-weight:600}.videotemplate .fullScreen .water3,.videotemplate .videowrap .water3{top:75%;left:70%}.videotemplate .fullScreen .water2,.videotemplate .videowrap .water2{top:45%;left:40%}.videotemplate .fullScreen video,.videotemplate .videowrap video{object-fit:fill}.videotemplate .fullScreen .control,.videotemplate .videowrap .control{display:flex;box-sizing:border-box;opacity:0;transition:opacity .5s;width:100%;height:40px;position:absolute;bottom:2px;left:2px}.videotemplate .fullScreen .control button,.videotemplate .videowrap .control button{background:0 0;border:none;padding:0}.videotemplate .fullScreen .control .play-speed,.videotemplate .videowrap .control .play-speed{width:130px;height:40px;border-radius:10px;background:rgba(0,0,0,.5);color:#fff;bottom:0}.videotemplate .fullScreen .control .play-speed:hover,.videotemplate .videowrap .control .play-speed:hover{color:#fff}.videotemplate .fullScreen .control .play-speed .speed,.videotemplate .videowrap .control .play-speed .speed{width:50px;height:100%;text-align:center;cursor:pointer;padding:0 5px}.videotemplate .fullScreen .control .play-speed .speed:hover,.videotemplate .videowrap .control .play-speed .speed:hover{color:#3075ff}.videotemplate .fullScreen .control .play-speed .speed.active,.videotemplate .videowrap .control .play-speed .speed.active{color:#3075ff}.videotemplate .fullScreen .control .el-date-editor,.videotemplate .videowrap .control .el-date-editor{height:40px!important;position:absolute;background:rgba(0,0,0,.5);border-radius:10px;right:5px;bottom:0;width:150px}.videotemplate .fullScreen .control .el-date-editor .el-input__inner,.videotemplate .videowrap .control .el-date-editor .el-input__inner{height:40px!important;background:rgba(0,0,0,.5);border:none}.videotemplate .fullScreen .control .el-date-editor .el-input__icon,.videotemplate .videowrap .control .el-date-editor .el-input__icon{line-height:40px}.videotemplate .fullScreen:hover .closrControl,.videotemplate .fullScreen:hover .control,.videotemplate .videowrap:hover .closrControl,.videotemplate .videowrap:hover .control{cursor:pointer;opacity:1;transition:opacity .5s}.videotemplate .tcl{position:absolute;opacity:0;color:red;top:10px;font-weight:600;left:10px;font-size:20px;animation:flash 1s infinite}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.videotemplate .closrControl{position:absolute;opacity:0;top:10px;right:10px;z-index:999999999}.videotemplate .closrControl button{background:0 0;border:none;padding:0}.videotemplate .error{position:absolute;width:100%;height:100%;background:rgba(0,0,0,.8);top:0;left:0;display:flex;align-items:center;justify-content:center;flex-direction:column}.videotemplate .error>span{padding:20px 0;font-size:20px;color:red}.videotemplate .timeline canvas{width:100%}.videotemplate .show{display:block}.videotemplate .hide{display:none}.videotemplate .animate__animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.videotemplate .animate__shakeX{-webkit-animation-name:shakeX;animation-name:shakeX}@-webkit-keyframes shakeX{from,to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes shakeX{from,to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}.videotemplate .video-box{width:100%;height:100%}.videotemplate .small-video-wrap{width:100%;height:100%}.videotemplate .small-video-wrap .videoTitle{font-size:12px}.videotemplate .small-video-wrap .water{font-size:14px}.videotemplate .small-video-wrap .water2{top:40%;left:35%}.videotemplate .small-video-wrap .water3{top:65%;left:60%}.videotemplate .small-video-wrap .closrControl{top:4px;right:4px}.videotemplate .small-video-wrap .closrControl .el-button,.videotemplate .small-video-wrap .closrControl img,.videotemplate .small-video-wrap .control .el-button,.videotemplate .small-video-wrap .control img{width:24px;height:24px}.videotemplate .small-video-wrap .control{height:24px;left:4px}.videotemplate .small-video-wrap .error>span{font-size:14px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-feb2671e";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-08-13 13:10:16
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-08-13 13:18:51
 */

var install = function installIchinaVideo(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('IchinaVideo', __vue_component__$1);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()


__vue_component__$1.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=__vue_component__$1;