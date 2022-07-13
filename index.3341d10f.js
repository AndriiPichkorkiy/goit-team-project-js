function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire9691;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire9691=o),o.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("bRlFp",(function(e,t){var n=o("2bBga"),r=o("djt5d"),i=o("6zSb1"),s=o("d0EKm");var a=function e(t){var o=new i(t),a=r(i.prototype.request,o);return n.extend(a,i.prototype,o),n.extend(a,o),a.create=function(n){return e(s(t,n))},a}(o("hqlPG"));a.Axios=i,a.CanceledError=o("83xK9"),a.CancelToken=o("2sjhC"),a.isCancel=o("ksuZT"),a.VERSION=o("50GW0").version,a.toFormData=o("aewVa"),a.AxiosError=o("121rJ"),a.Cancel=a.CanceledError,a.all=function(e){return Promise.all(e)},a.spread=o("av9gA"),a.isAxiosError=o("gNhGc"),e.exports=a,e.exports.default=a})),o.register("2bBga",(function(e,t){var n,r=o("djt5d"),i=Object.prototype.toString,s=(n=Object.create(null),function(e){var t=i.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return s(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=a("ArrayBuffer");function f(e){return null!==e&&"object"==typeof e}function h(e){if("object"!==s(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var d=a("Date"),p=a("File"),g=a("Blob"),v=a("FileList");function m(e){return"[object Function]"===i.call(e)}var y=a("URLSearchParams");function _(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var b,w=(b="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return b&&e instanceof b});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||m(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:f,isPlainObject:h,isUndefined:c,isDate:d,isFile:p,isBlob:g,isFunction:m,isStream:function(e){return f(e)&&m(e.pipe)},isURLSearchParams:y,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:_,merge:function e(){var t={};function n(n,r){h(t[r])&&h(n)?t[r]=e(t[r],n):h(n)?t[r]=e({},n):u(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)_(arguments[r],n);return t},extend:function(e,t,n){return _(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,i,o,s={};t=t||{};do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)s[o=r[i]]||(t[o]=e[o],s[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:w,isFileList:v}})),o.register("djt5d",(function(e,t){e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}})),o.register("6zSb1",(function(e,t){var n=o("2bBga"),r=o("2RNjJ"),i=o("5Dm7L"),s=o("eQ5d8"),a=o("d0EKm"),u=o("1ZTQa"),c=o("6zj0X"),l=c.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var f=[s,void 0];for(Array.prototype.unshift.apply(f,r),f=f.concat(u),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var h=t;r.length;){var d=r.shift(),p=r.shift();try{h=d(h)}catch(e){p(e);break}}try{o=s(h)}catch(e){return Promise.reject(e)}for(;u.length;)o=o.then(u.shift(),u.shift());return o},f.prototype.getUri=function(e){e=a(this.defaults,e);var t=u(e.baseURL,e.url);return r(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(a(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)})),e.exports=f})),o.register("2RNjJ",(function(e,t){var n=o("2bBga");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var o;if(i)o=i(t);else if(n.isURLSearchParams(t))o=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))})))})),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("5Dm7L",(function(e,t){var n=o("2bBga");function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r})),o.register("eQ5d8",(function(e,t){var n=o("2bBga"),r=o("bhEpd"),i=o("ksuZT"),s=o("hqlPG"),a=o("83xK9");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return u(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("bhEpd",(function(e,t){var n=o("2bBga"),r=o("hqlPG");e.exports=function(e,t,i){var o=this||r;return n.forEach(i,(function(n){e=n.call(o,e,t)})),e}})),o.register("hqlPG",(function(e,t){var n=o("4TNnu"),r=o("2bBga"),i=o("i16eu"),s=o("121rJ"),a=o("2wfLM"),u=o("aewVa"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var f,h={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(f=o("9VVcb")),f),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=r.isObject(e),s=t&&t["Content-Type"];if((n=r.isFileList(e))||o&&"multipart/form-data"===s){var a=this.env&&this.env.FormData;return u(n?{"files[]":e}:e,a&&new a)}return o||"application/json"===s?(l(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||h.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw s.from(e,s.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("1gvAv")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){h.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){h.headers[e]=r.merge(c)})),e.exports=h})),o.register("4TNnu",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=a(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("i16eu",(function(e,t){var n=o("2bBga");e.exports=function(e,t){n.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}})),o.register("121rJ",(function(e,t){var n=o("2bBga");function r(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}n.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=r.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(r,s),Object.defineProperty(i,"isAxiosError",{value:!0}),r.from=function(e,t,o,s,a,u){var c=Object.create(i);return n.toFlatObject(e,c,(function(e){return e!==Error.prototype})),r.call(c,e.message,t,o,s,a),c.name=e.name,u&&Object.assign(c,u),c},e.exports=r})),o.register("2wfLM",(function(e,t){e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("aewVa",(function(e,t){var n=o("ihoyg").Buffer,r=o("2bBga");e.exports=function(e,t){t=t||new FormData;var i=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,s){if(r.isPlainObject(n)||r.isArray(n)){if(-1!==i.indexOf(n))throw Error("Circular reference detected in "+s);i.push(n),r.forEach(n,(function(n,i){if(!r.isUndefined(n)){var a,u=s?s+"."+i:i;if(n&&!s&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(a=r.toArray(n)))return void a.forEach((function(e){!r.isUndefined(e)&&t.append(u,o(e))}));e(n,u)}})),i.pop()}else t.append(s,o(n))}(e),t}})),o.register("ihoyg",(function(t,n){var r,i;e(t.exports,"Buffer",(function(){return r}),(function(e){return r=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return i}),(function(e){return i=e}));var s=o("hqZtu"),a=o("5WQj6");const u="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r=f,i=50;const c=2147483647;function l(e){if(e>c)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,f.prototype),t}function f(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return h(e,t,n)}function h(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!f.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|y(e,t);let r=l(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(X(e,Uint8Array)){const t=new Uint8Array(e);return v(t.buffer,t.byteOffset,t.byteLength)}return g(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(X(e,ArrayBuffer)||e&&X(e.buffer,ArrayBuffer))return v(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(X(e,SharedArrayBuffer)||e&&X(e.buffer,SharedArrayBuffer)))return v(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return f.from(r,t,n);const i=function(e){if(f.isBuffer(e)){const t=0|m(e.length),n=l(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?l(0):g(e);if("Buffer"===e.type&&Array.isArray(e.data))return g(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return f.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function d(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return d(e),l(e<0?0:0|m(e))}function g(e){const t=e.length<0?0:0|m(e.length),n=l(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function v(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,f.prototype),r}function m(e){if(e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|e}function y(e,t){if(f.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||X(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return K(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Q(e).length;default:if(i)return r?-1:K(e).length;t=(""+t).toLowerCase(),i=!0}}function _(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return P(this,t,n);case"utf8":case"utf-8":return R(this,t,n);case"ascii":return C(this,t,n);case"latin1":case"binary":return N(this,t,n);case"base64":return A(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function b(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function w(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=f.from(t,r)),f.isBuffer(t))return 0===t.length?-1:E(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):E(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function E(e,t,n,r,i){let o,s=1,a=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;s=2,a/=2,u/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){let r=-1;for(o=n;o<a;o++)if(c(e,o)===c(t,-1===r?0:o-r)){if(-1===r&&(r=o),o-r+1===u)return r*s}else-1!==r&&(o-=o-r),r=-1}else for(n+u>a&&(n=a-u),o=n;o>=0;o--){let n=!0;for(let r=0;r<u;r++)if(c(e,o+r)!==c(t,r)){n=!1;break}if(n)return o}return-1}function I(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const o=t.length;let s;for(r>o/2&&(r=o/2),s=0;s<r;++s){const r=parseInt(t.substr(2*s,2),16);if(Z(r))return s;e[n+s]=r}return s}function S(e,t,n,r){return Y(K(t,e.length-n),e,n,r)}function T(e,t,n,r){return Y(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function k(e,t,n,r){return Y(Q(t),e,n,r)}function O(e,t,n,r){return Y(function(e,t){let n,r,i;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function A(e,t,n){return 0===t&&n===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(t,n))}function R(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(i+s<=n){let n,r,a,u;switch(s){case 1:t<128&&(o=t);break;case 2:n=e[i+1],128==(192&n)&&(u=(31&t)<<6|63&n,u>127&&(o=u));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(u=(15&t)<<12|(63&n)<<6|63&r,u>2047&&(u<55296||u>57343)&&(o=u));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(u=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,u>65535&&u<1114112&&(o=u))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o),i+=s}return function(e){const t=e.length;if(t<=L)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=L));return n}(r)}f.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192,f.from=function(e,t,n){return h(e,t,n)},Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),f.alloc=function(e,t,n){return function(e,t,n){return d(e),e<=0?l(e):void 0!==t?"string"==typeof n?l(e).fill(t,n):l(e).fill(t):l(e)}(e,t,n)},f.allocUnsafe=function(e){return p(e)},f.allocUnsafeSlow=function(e){return p(e)},f.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==f.prototype},f.compare=function(e,t){if(X(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),X(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(e)||!f.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},f.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return f.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=f.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(X(t,Uint8Array))i+t.length>r.length?(f.isBuffer(t)||(t=f.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!f.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},f.byteLength=y,f.prototype._isBuffer=!0,f.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},f.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},f.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},f.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?R(this,0,e):_.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(e){if(!f.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===f.compare(this,e)},f.prototype.inspect=function(){let e="";const t=i;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},u&&(f.prototype[u]=f.prototype.inspect),f.prototype.compare=function(e,t,n,r,i){if(X(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(o,s),u=this.slice(r,i),c=e.slice(t,n);for(let e=0;e<a;++e)if(u[e]!==c[e]){o=u[e],s=c[e];break}return o<s?-1:s<o?1:0},f.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},f.prototype.indexOf=function(e,t,n){return w(this,e,t,n,!0)},f.prototype.lastIndexOf=function(e,t,n){return w(this,e,t,n,!1)},f.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let o=!1;for(;;)switch(r){case"hex":return I(this,e,t,n);case"utf8":case"utf-8":return S(this,e,t,n);case"ascii":case"latin1":case"binary":return T(this,e,t,n);case"base64":return k(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const L=4096;function C(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function N(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function P(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=ee[e[r]];return i}function x(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function U(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function D(e,t,n,r,i,o){if(!f.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function M(e,t,n,r,i){W(t,r,i,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function B(e,t,n,r,i){W(t,r,i,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function j(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function F(e,t,n,r,i){return t=+t,n>>>=0,i||j(e,0,n,4),a.write(e,t,n,r,23,4),n+4}function q(e,t,n,r,i){return t=+t,n>>>=0,i||j(e,0,n,8),a.write(e,t,n,r,52,8),n+8}f.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,f.prototype),r},f.prototype.readUintLE=f.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||U(e,t,this.length);let r=this[e],i=1,o=0;for(;++o<t&&(i*=256);)r+=this[e+o]*i;return r},f.prototype.readUintBE=f.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||U(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},f.prototype.readUint8=f.prototype.readUInt8=function(e,t){return e>>>=0,t||U(e,1,this.length),this[e]},f.prototype.readUint16LE=f.prototype.readUInt16LE=function(e,t){return e>>>=0,t||U(e,2,this.length),this[e]|this[e+1]<<8},f.prototype.readUint16BE=f.prototype.readUInt16BE=function(e,t){return e>>>=0,t||U(e,2,this.length),this[e]<<8|this[e+1]},f.prototype.readUint32LE=f.prototype.readUInt32LE=function(e,t){return e>>>=0,t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},f.prototype.readUint32BE=f.prototype.readUInt32BE=function(e,t){return e>>>=0,t||U(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},f.prototype.readBigUInt64LE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),f.prototype.readBigUInt64BE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),f.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||U(e,t,this.length);let r=this[e],i=1,o=0;for(;++o<t&&(i*=256);)r+=this[e+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},f.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||U(e,t,this.length);let r=t,i=1,o=this[e+--r];for(;r>0&&(i*=256);)o+=this[e+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},f.prototype.readInt8=function(e,t){return e>>>=0,t||U(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},f.prototype.readInt16LE=function(e,t){e>>>=0,t||U(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},f.prototype.readInt16BE=function(e,t){e>>>=0,t||U(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},f.prototype.readInt32LE=function(e,t){return e>>>=0,t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},f.prototype.readInt32BE=function(e,t){return e>>>=0,t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},f.prototype.readBigInt64LE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),f.prototype.readBigInt64BE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),f.prototype.readFloatLE=function(e,t){return e>>>=0,t||U(e,4,this.length),a.read(this,e,!0,23,4)},f.prototype.readFloatBE=function(e,t){return e>>>=0,t||U(e,4,this.length),a.read(this,e,!1,23,4)},f.prototype.readDoubleLE=function(e,t){return e>>>=0,t||U(e,8,this.length),a.read(this,e,!0,52,8)},f.prototype.readDoubleBE=function(e,t){return e>>>=0,t||U(e,8,this.length),a.read(this,e,!1,52,8)},f.prototype.writeUintLE=f.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){D(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},f.prototype.writeUintBE=f.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){D(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},f.prototype.writeUint8=f.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,1,255,0),this[t]=255&e,t+1},f.prototype.writeUint16LE=f.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},f.prototype.writeUint16BE=f.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},f.prototype.writeUint32LE=f.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},f.prototype.writeUint32BE=f.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},f.prototype.writeBigUInt64LE=te((function(e,t=0){return M(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),f.prototype.writeBigUInt64BE=te((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),f.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);D(this,e,t,n,r-1,-r)}let i=0,o=1,s=0;for(this[t]=255&e;++i<n&&(o*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+n},f.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);D(this,e,t,n,r-1,-r)}let i=n-1,o=1,s=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+n},f.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},f.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},f.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},f.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},f.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},f.prototype.writeBigInt64LE=te((function(e,t=0){return M(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),f.prototype.writeBigInt64BE=te((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),f.prototype.writeFloatLE=function(e,t,n){return F(this,e,t,!0,n)},f.prototype.writeFloatBE=function(e,t,n){return F(this,e,t,!1,n)},f.prototype.writeDoubleLE=function(e,t,n){return q(this,e,t,!0,n)},f.prototype.writeDoubleBE=function(e,t,n){return q(this,e,t,!1,n)},f.prototype.copy=function(e,t,n,r){if(!f.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},f.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!f.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const o=f.isBuffer(e)?e:f.from(e,r),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=o[i%s]}return this};const $={};function z(e,t,n){$[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function H(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function W(e,t,n,r,i,o){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=o>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(o+1)}${r}`:`>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new $.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){V(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||G(t,e.length-(n+1))}(r,i,o)}function V(e,t){if("number"!=typeof e)throw new $.ERR_INVALID_ARG_TYPE(t,"number",e)}function G(e,t,n){if(Math.floor(e)!==e)throw V(e,n),new $.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new $.ERR_BUFFER_OUT_OF_BOUNDS;throw new $.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}z("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),z("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),z("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=H(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=H(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const J=/[^+/0-9A-Za-z-_]/g;function K(e,t){let n;t=t||1/0;const r=e.length;let i=null;const o=[];for(let s=0;s<r;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Q(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(J,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Y(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function X(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),o.register("hqZtu",(function(t,n){var r,i;e(t.exports,"toByteArray",(function(){return r}),(function(e){return r=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),r=function(e){var t,n,r=f(e),i=r[0],o=r[1],u=new a(function(e,t,n){return 3*(t+n)/4-n}(0,i,o)),c=0,l=o>0?i-4:i;for(n=0;n<l;n+=4)t=s[e.charCodeAt(n)]<<18|s[e.charCodeAt(n+1)]<<12|s[e.charCodeAt(n+2)]<<6|s[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=s[e.charCodeAt(n)]<<2|s[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===o&&(t=s[e.charCodeAt(n)]<<10|s[e.charCodeAt(n+1)]<<4|s[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,a=0,u=n-r;a<u;a+=s)i.push(h(e,a,a+s>u?u:a+s));1===r?(t=e[n-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)o[c]=u[c],s[u.charCodeAt(c)]=c;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function h(e,t,n){for(var r,i,s=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(o[(i=r)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return s.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63})),o.register("5WQj6",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;e(t.exports,"read",(function(){return r}),(function(e){return r=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),r=function(e,t,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,l=-7,f=n?i-1:0,h=n?-1:1,d=e[t+f];for(f+=h,o=d&(1<<-l)-1,d>>=-l,l+=a;l>0;o=256*o+e[t+f],f+=h,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=256*s+e[t+f],f+=h,l-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:1/0*(d?-1:1);s+=Math.pow(2,r),o-=c}return(d?-1:1)*s*Math.pow(2,o-r)},i=function(e,t,n,r,i,o){var s,a,u,c=8*o-i-1,l=(1<<c)-1,f=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),(t+=s+f>=1?h/u:h*Math.pow(2,1-f))*u>=2&&(s++,u/=2),s+f>=l?(a=0,s=l):s+f>=1?(a=(t*u-1)*Math.pow(2,i),s+=f):(a=t*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;e[n+d]=255&a,d+=p,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+d]=255&s,d+=p,s/=256,c-=8);e[n+d-p]|=128*g}})),o.register("9VVcb",(function(e,t){var n=o("2bBga"),r=o("1TQad"),i=o("kTwUV"),s=o("2RNjJ"),a=o("1ZTQa"),u=o("9cPEm"),c=o("g3yOT"),l=o("2wfLM"),f=o("121rJ"),h=o("83xK9"),d=o("8wMQb");e.exports=function(e){return new Promise((function(t,o){var p,g=e.data,v=e.headers,m=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(g)&&n.isStandardBrowserEnv()&&delete v["Content-Type"];var _=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";v.Authorization="Basic "+btoa(b+":"+w)}var E=a(e.baseURL,e.url);function I(){if(_){var n="getAllResponseHeaders"in _?u(_.getAllResponseHeaders()):null,i={data:m&&"text"!==m&&"json"!==m?_.response:_.responseText,status:_.status,statusText:_.statusText,headers:n,config:e,request:_};r((function(e){t(e),y()}),(function(e){o(e),y()}),i),_=null}}if(_.open(e.method.toUpperCase(),s(E,e.params,e.paramsSerializer),!0),_.timeout=e.timeout,"onloadend"in _?_.onloadend=I:_.onreadystatechange=function(){_&&4===_.readyState&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))&&setTimeout(I)},_.onabort=function(){_&&(o(new f("Request aborted",f.ECONNABORTED,e,_)),_=null)},_.onerror=function(){o(new f("Network Error",f.ERR_NETWORK,e,_,_)),_=null},_.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new f(t,n.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,e,_)),_=null},n.isStandardBrowserEnv()){var S=(e.withCredentials||c(E))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;S&&(v[e.xsrfHeaderName]=S)}"setRequestHeader"in _&&n.forEach(v,(function(e,t){void 0===g&&"content-type"===t.toLowerCase()?delete v[t]:_.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(_.withCredentials=!!e.withCredentials),m&&"json"!==m&&(_.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&_.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){_&&(o(!e||e&&e.type?new h:e),_.abort(),_=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),g||(g=null);var T=d(E);T&&-1===["http","https","file"].indexOf(T)?o(new f("Unsupported protocol "+T+":",f.ERR_BAD_REQUEST,e)):_.send(g)}))}})),o.register("1TQad",(function(e,t){var n=o("121rJ");e.exports=function(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}})),o.register("kTwUV",(function(e,t){var n=o("2bBga");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(i)&&a.push("path="+i),n.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("1ZTQa",(function(e,t){var n=o("iUwU6"),r=o("91vFE");e.exports=function(e,t){return e&&!n(t)?r(e,t):t}})),o.register("iUwU6",(function(e,t){e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("91vFE",(function(e,t){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("9cPEm",(function(e,t){var n=o("2bBga"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,o,s={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),i=n.trim(e.substr(o+1)),t){if(s[t]&&r.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([i]):s[t]?s[t]+", "+i:i}})),s):s}})),o.register("g3yOT",(function(e,t){var n=o("2bBga");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}})),o.register("83xK9",(function(e,t){var n=o("121rJ");function r(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}o("2bBga").inherits(r,n,{__CANCEL__:!0}),e.exports=r})),o.register("8wMQb",(function(e,t){e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("1gvAv",(function(e,t){e.exports=null})),o.register("ksuZT",(function(e,t){e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("d0EKm",(function(e,t){var n=o("2bBga");e.exports=function(e,t){t=t||{};var r={};function i(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(e[r],t[r])}function s(e){if(!n.isUndefined(t[e]))return i(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(void 0,t[r])}function u(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,i=t(e);n.isUndefined(i)&&t!==u||(r[e]=i)})),r}})),o.register("6zj0X",(function(e,t){var n=o("50GW0").version,r=o("121rJ"),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};i.transitional=function(e,t,i){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(i?". "+i:"")}return function(n,i,a){if(!1===e)throw new r(o(i," has been removed"+(t?" in "+t:"")),r.ERR_DEPRECATED);return t&&!s[i]&&(s[i]=!0,console.warn(o(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new r("options must be an object",r.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),o=i.length;o-- >0;){var s=i[o],a=t[s];if(a){var u=e[s],c=void 0===u||a(u,s,e);if(!0!==c)throw new r("option "+s+" must be "+c,r.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new r("Unknown option "+s,r.ERR_BAD_OPTION)}},validators:i}})),o.register("50GW0",(function(e,t){e.exports={version:"0.27.2"}})),o.register("2sjhC",(function(e,t){var n=o("83xK9");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r})),o.register("av9gA",(function(e,t){e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("gNhGc",(function(e,t){var n=o("2bBga");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}})),o.register("kEUo3",(function(e,n){(function(){var r,i="Expected a function",o="__lodash_hash_undefined__",s="__lodash_placeholder__",a=16,u=32,c=64,l=128,f=256,h=1/0,d=9007199254740991,p=NaN,g=4294967295,v=[["ary",l],["bind",1],["bindKey",2],["curry",8],["curryRight",a],["flip",512],["partial",u],["partialRight",c],["rearg",f]],m="[object Arguments]",y="[object Array]",_="[object Boolean]",b="[object Date]",w="[object Error]",E="[object Function]",I="[object GeneratorFunction]",S="[object Map]",T="[object Number]",k="[object Object]",O="[object Promise]",A="[object RegExp]",R="[object Set]",L="[object String]",C="[object Symbol]",N="[object WeakMap]",P="[object ArrayBuffer]",x="[object DataView]",U="[object Float32Array]",D="[object Float64Array]",M="[object Int8Array]",B="[object Int16Array]",j="[object Int32Array]",F="[object Uint8Array]",q="[object Uint8ClampedArray]",$="[object Uint16Array]",z="[object Uint32Array]",H=/\b__p \+= '';/g,W=/\b(__p \+=) '' \+/g,V=/(__e\(.*?\)|\b__t\)) \+\n'';/g,G=/&(?:amp|lt|gt|quot|#39);/g,J=/[&<>"']/g,K=RegExp(G.source),Q=RegExp(J.source),Y=/<%-([\s\S]+?)%>/g,X=/<%([\s\S]+?)%>/g,Z=/<%=([\s\S]+?)%>/g,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/,ne=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/[\\^$.*+?()[\]{}|]/g,ie=RegExp(re.source),oe=/^\s+/,se=/\s/,ae=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ue=/\{\n\/\* \[wrapped with (.+)\] \*/,ce=/,? & /,le=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,fe=/[()=,{}\[\]\/\s]/,he=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pe=/\w*$/,ge=/^[-+]0x[0-9a-f]+$/i,ve=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,ye=/^0o[0-7]+$/i,_e=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,we=/($^)/,Ee=/['\n\r\u2028\u2029\\]/g,Ie="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Se="\\u2700-\\u27bf",Te="a-z\\xdf-\\xf6\\xf8-\\xff",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",Ae="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Re="['’]",Le="[\ud800-\udfff]",Ce="["+Ae+"]",Ne="["+Ie+"]",Pe="\\d+",xe="[\\u2700-\\u27bf]",Ue="["+Te+"]",De="[^\ud800-\udfff"+Ae+Pe+Se+Te+ke+"]",Me="[^\ud800-\udfff]",Be="(?:\ud83c[\udde6-\uddff]){2}",je="[\ud800-\udbff][\udc00-\udfff]",Fe="["+ke+"]",qe="(?:"+Ue+"|"+De+")",$e="(?:"+Fe+"|"+De+")",ze="(?:['’](?:d|ll|m|re|s|t|ve))?",He="(?:['’](?:D|LL|M|RE|S|T|VE))?",We="(?:"+Ne+"|"+"\ud83c[\udffb-\udfff])"+"?",Ve="[\\ufe0e\\ufe0f]?",Ge=Ve+We+("(?:\\u200d(?:"+[Me,Be,je].join("|")+")"+Ve+We+")*"),Je="(?:"+[xe,Be,je].join("|")+")"+Ge,Ke="(?:"+[Me+Ne+"?",Ne,Be,je,Le].join("|")+")",Qe=RegExp(Re,"g"),Ye=RegExp(Ne,"g"),Xe=RegExp("\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|"+Ke+Ge,"g"),Ze=RegExp([Fe+"?"+Ue+"+"+ze+"(?="+[Ce,Fe,"$"].join("|")+")",$e+"+"+He+"(?="+[Ce,Fe+qe,"$"].join("|")+")",Fe+"?"+qe+"+"+ze,Fe+"+"+He,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Pe,Je].join("|"),"g"),et=RegExp("[\\u200d\ud800-\udfff"+Ie+Oe+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rt=-1,it={};it[U]=it[D]=it[M]=it[B]=it[j]=it[F]=it[q]=it[$]=it[z]=!0,it[m]=it[y]=it[P]=it[_]=it[x]=it[b]=it[w]=it[E]=it[S]=it[T]=it[k]=it[A]=it[R]=it[L]=it[N]=!1;var ot={};ot[m]=ot[y]=ot[P]=ot[x]=ot[_]=ot[b]=ot[U]=ot[D]=ot[M]=ot[B]=ot[j]=ot[S]=ot[T]=ot[k]=ot[A]=ot[R]=ot[L]=ot[C]=ot[F]=ot[q]=ot[$]=ot[z]=!0,ot[w]=ot[E]=ot[N]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},at=parseFloat,ut=parseInt,ct="object"==typeof t&&t&&t.Object===Object&&t,lt="object"==typeof self&&self&&self.Object===Object&&self,ft=ct||lt||Function("return this")(),ht=n&&!n.nodeType&&n,dt=ht&&e&&!e.nodeType&&e,pt=dt&&dt.exports===ht,gt=pt&&ct.process,vt=function(){try{var e=dt&&dt.require&&dt.require("util").types;return e||gt&&gt.binding&&gt.binding("util")}catch(e){}}(),mt=vt&&vt.isArrayBuffer,yt=vt&&vt.isDate,_t=vt&&vt.isMap,bt=vt&&vt.isRegExp,wt=vt&&vt.isSet,Et=vt&&vt.isTypedArray;function It(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function St(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var s=e[i];t(r,s,n(s),e)}return r}function Tt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function kt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Ot(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function At(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}function Rt(e,t){return!!(null==e?0:e.length)&&jt(e,t,0)>-1}function Lt(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Ct(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Nt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Pt(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function xt(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Ut(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Dt=zt("length");function Mt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Bt(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function jt(e,t,n){return t==t?function(e,t,n){var r=n-1,i=e.length;for(;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Bt(e,qt,n)}function Ft(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}function qt(e){return e!=e}function $t(e,t){var n=null==e?0:e.length;return n?Vt(e,t)/n:p}function zt(e){return function(t){return null==t?r:t[e]}}function Ht(e){return function(t){return null==e?r:e[t]}}function Wt(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function Vt(e,t){for(var n,i=-1,o=e.length;++i<o;){var s=t(e[i]);s!==r&&(n=n===r?s:n+s)}return n}function Gt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Jt(e){return e?e.slice(0,dn(e)+1).replace(oe,""):e}function Kt(e){return function(t){return e(t)}}function Qt(e,t){return Ct(t,(function(t){return e[t]}))}function Yt(e,t){return e.has(t)}function Xt(e,t){for(var n=-1,r=e.length;++n<r&&jt(t,e[n],0)>-1;);return n}function Zt(e,t){for(var n=e.length;n--&&jt(t,e[n],0)>-1;);return n}function en(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}var tn=Ht({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),nn=Ht({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function rn(e){return"\\"+st[e]}function on(e){return et.test(e)}function sn(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function an(e,t){return function(n){return e(t(n))}}function un(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n];a!==t&&a!==s||(e[n]=s,o[i++]=n)}return o}function cn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function ln(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function fn(e){return on(e)?function(e){var t=Xe.lastIndex=0;for(;Xe.test(e);)++t;return t}(e):Dt(e)}function hn(e){return on(e)?function(e){return e.match(Xe)||[]}(e):function(e){return e.split("")}(e)}function dn(e){for(var t=e.length;t--&&se.test(e.charAt(t)););return t}var pn=Ht({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var gn=function e(t){var n,se=(t=null==t?ft:gn.defaults(ft.Object(),t,gn.pick(ft,nt))).Array,Ie=t.Date,Se=t.Error,Te=t.Function,ke=t.Math,Oe=t.Object,Ae=t.RegExp,Re=t.String,Le=t.TypeError,Ce=se.prototype,Ne=Te.prototype,Pe=Oe.prototype,xe=t["__core-js_shared__"],Ue=Ne.toString,De=Pe.hasOwnProperty,Me=0,Be=(n=/[^.]+$/.exec(xe&&xe.keys&&xe.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",je=Pe.toString,Fe=Ue.call(Oe),qe=ft._,$e=Ae("^"+Ue.call(De).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ze=pt?t.Buffer:r,He=t.Symbol,We=t.Uint8Array,Ve=ze?ze.allocUnsafe:r,Ge=an(Oe.getPrototypeOf,Oe),Je=Oe.create,Ke=Pe.propertyIsEnumerable,Xe=Ce.splice,et=He?He.isConcatSpreadable:r,st=He?He.iterator:r,ct=He?He.toStringTag:r,lt=function(){try{var e=po(Oe,"defineProperty");return e({},"",{}),e}catch(e){}}(),ht=t.clearTimeout!==ft.clearTimeout&&t.clearTimeout,dt=Ie&&Ie.now!==ft.Date.now&&Ie.now,gt=t.setTimeout!==ft.setTimeout&&t.setTimeout,vt=ke.ceil,Dt=ke.floor,Ht=Oe.getOwnPropertySymbols,vn=ze?ze.isBuffer:r,mn=t.isFinite,yn=Ce.join,_n=an(Oe.keys,Oe),bn=ke.max,wn=ke.min,En=Ie.now,In=t.parseInt,Sn=ke.random,Tn=Ce.reverse,kn=po(t,"DataView"),On=po(t,"Map"),An=po(t,"Promise"),Rn=po(t,"Set"),Ln=po(t,"WeakMap"),Cn=po(Oe,"create"),Nn=Ln&&new Ln,Pn={},xn=Ho(kn),Un=Ho(On),Dn=Ho(An),Mn=Ho(Rn),Bn=Ho(Ln),jn=He?He.prototype:r,Fn=jn?jn.valueOf:r,qn=jn?jn.toString:r;function $n(e){if(aa(e)&&!Qs(e)&&!(e instanceof Vn)){if(e instanceof Wn)return e;if(De.call(e,"__wrapped__"))return Wo(e)}return new Wn(e)}var zn=function(){function e(){}return function(t){if(!sa(t))return{};if(Je)return Je(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function Hn(){}function Wn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function Vn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=g,this.__views__=[]}function Gn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Jn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Qn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Kn;++t<n;)this.add(e[t])}function Yn(e){var t=this.__data__=new Jn(e);this.size=t.size}function Xn(e,t){var n=Qs(e),r=!n&&Ks(e),i=!n&&!r&&ea(e),o=!n&&!r&&!i&&ga(e),s=n||r||i||o,a=s?Gt(e.length,Re):[],u=a.length;for(var c in e)!t&&!De.call(e,c)||s&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||wo(c,u))||a.push(c);return a}function Zn(e){var t=e.length;return t?e[Qr(0,t-1)]:r}function er(e,t){return Bo(Ci(e),cr(t,0,e.length))}function tr(e){return Bo(Ci(e))}function nr(e,t,n){(n!==r&&!Vs(e[t],n)||n===r&&!(t in e))&&ar(e,t,n)}function rr(e,t,n){var i=e[t];De.call(e,t)&&Vs(i,n)&&(n!==r||t in e)||ar(e,t,n)}function ir(e,t){for(var n=e.length;n--;)if(Vs(e[n][0],t))return n;return-1}function or(e,t,n,r){return pr(e,(function(e,i,o){t(r,e,n(e),o)})),r}function sr(e,t){return e&&Ni(t,Ma(t),e)}function ar(e,t,n){"__proto__"==t&&lt?lt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ur(e,t){for(var n=-1,i=t.length,o=se(i),s=null==e;++n<i;)o[n]=s?r:Na(e,t[n]);return o}function cr(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function lr(e,t,n,i,o,s){var a,u=1&t,c=2&t,l=4&t;if(n&&(a=o?n(e,i,o,s):n(e)),a!==r)return a;if(!sa(e))return e;var f=Qs(e);if(f){if(a=function(e){var t=e.length,n=new e.constructor(t);t&&"string"==typeof e[0]&&De.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!u)return Ci(e,a)}else{var h=mo(e),d=h==E||h==I;if(ea(e))return Ti(e,u);if(h==k||h==m||d&&!o){if(a=c||d?{}:_o(e),!u)return c?function(e,t){return Ni(e,vo(e),t)}(e,function(e,t){return e&&Ni(t,Ba(t),e)}(a,e)):function(e,t){return Ni(e,go(e),t)}(e,sr(a,e))}else{if(!ot[h])return o?e:{};a=function(e,t,n){var r=e.constructor;switch(t){case P:return ki(e);case _:case b:return new r(+e);case x:return function(e,t){var n=t?ki(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case U:case D:case M:case B:case j:case F:case q:case $:case z:return Oi(e,n);case S:return new r;case T:case L:return new r(e);case A:return function(e){var t=new e.constructor(e.source,pe.exec(e));return t.lastIndex=e.lastIndex,t}(e);case R:return new r;case C:return i=e,Fn?Oe(Fn.call(i)):{}}var i}(e,h,u)}}s||(s=new Yn);var p=s.get(e);if(p)return p;s.set(e,a),ha(e)?e.forEach((function(r){a.add(lr(r,t,n,r,e,s))})):ua(e)&&e.forEach((function(r,i){a.set(i,lr(r,t,n,i,e,s))}));var g=f?r:(l?c?so:oo:c?Ba:Ma)(e);return Tt(g||e,(function(r,i){g&&(r=e[i=r]),rr(a,i,lr(r,t,n,i,e,s))})),a}function fr(e,t,n){var i=n.length;if(null==e)return!i;for(e=Oe(e);i--;){var o=n[i],s=t[o],a=e[o];if(a===r&&!(o in e)||!s(a))return!1}return!0}function hr(e,t,n){if("function"!=typeof e)throw new Le(i);return xo((function(){e.apply(r,n)}),t)}function dr(e,t,n,r){var i=-1,o=Rt,s=!0,a=e.length,u=[],c=t.length;if(!a)return u;n&&(t=Ct(t,Kt(n))),r?(o=Lt,s=!1):t.length>=200&&(o=Yt,s=!1,t=new Qn(t));e:for(;++i<a;){var l=e[i],f=null==n?l:n(l);if(l=r||0!==l?l:0,s&&f==f){for(var h=c;h--;)if(t[h]===f)continue e;u.push(l)}else o(t,f,r)||u.push(l)}return u}$n.templateSettings={escape:Y,evaluate:X,interpolate:Z,variable:"",imports:{_:$n}},$n.prototype=Hn.prototype,$n.prototype.constructor=$n,Wn.prototype=zn(Hn.prototype),Wn.prototype.constructor=Wn,Vn.prototype=zn(Hn.prototype),Vn.prototype.constructor=Vn,Gn.prototype.clear=function(){this.__data__=Cn?Cn(null):{},this.size=0},Gn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Gn.prototype.get=function(e){var t=this.__data__;if(Cn){var n=t[e];return n===o?r:n}return De.call(t,e)?t[e]:r},Gn.prototype.has=function(e){var t=this.__data__;return Cn?t[e]!==r:De.call(t,e)},Gn.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Cn&&t===r?o:t,this},Jn.prototype.clear=function(){this.__data__=[],this.size=0},Jn.prototype.delete=function(e){var t=this.__data__,n=ir(t,e);return!(n<0)&&(n==t.length-1?t.pop():Xe.call(t,n,1),--this.size,!0)},Jn.prototype.get=function(e){var t=this.__data__,n=ir(t,e);return n<0?r:t[n][1]},Jn.prototype.has=function(e){return ir(this.__data__,e)>-1},Jn.prototype.set=function(e,t){var n=this.__data__,r=ir(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Kn.prototype.clear=function(){this.size=0,this.__data__={hash:new Gn,map:new(On||Jn),string:new Gn}},Kn.prototype.delete=function(e){var t=fo(this,e).delete(e);return this.size-=t?1:0,t},Kn.prototype.get=function(e){return fo(this,e).get(e)},Kn.prototype.has=function(e){return fo(this,e).has(e)},Kn.prototype.set=function(e,t){var n=fo(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Qn.prototype.add=Qn.prototype.push=function(e){return this.__data__.set(e,o),this},Qn.prototype.has=function(e){return this.__data__.has(e)},Yn.prototype.clear=function(){this.__data__=new Jn,this.size=0},Yn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Yn.prototype.get=function(e){return this.__data__.get(e)},Yn.prototype.has=function(e){return this.__data__.has(e)},Yn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Jn){var r=n.__data__;if(!On||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Kn(r)}return n.set(e,t),this.size=n.size,this};var pr=Ui(Er),gr=Ui(Ir,!0);function vr(e,t){var n=!0;return pr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function mr(e,t,n){for(var i=-1,o=e.length;++i<o;){var s=e[i],a=t(s);if(null!=a&&(u===r?a==a&&!pa(a):n(a,u)))var u=a,c=s}return c}function yr(e,t){var n=[];return pr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function _r(e,t,n,r,i){var o=-1,s=e.length;for(n||(n=bo),i||(i=[]);++o<s;){var a=e[o];t>0&&n(a)?t>1?_r(a,t-1,n,r,i):Nt(i,a):r||(i[i.length]=a)}return i}var br=Di(),wr=Di(!0);function Er(e,t){return e&&br(e,t,Ma)}function Ir(e,t){return e&&wr(e,t,Ma)}function Sr(e,t){return At(t,(function(t){return ra(e[t])}))}function Tr(e,t){for(var n=0,i=(t=wi(t,e)).length;null!=e&&n<i;)e=e[zo(t[n++])];return n&&n==i?e:r}function kr(e,t,n){var r=t(e);return Qs(e)?r:Nt(r,n(e))}function Or(e){return null==e?e===r?"[object Undefined]":"[object Null]":ct&&ct in Oe(e)?function(e){var t=De.call(e,ct),n=e[ct];try{e[ct]=r;var i=!0}catch(e){}var o=je.call(e);i&&(t?e[ct]=n:delete e[ct]);return o}(e):function(e){return je.call(e)}(e)}function Ar(e,t){return e>t}function Rr(e,t){return null!=e&&De.call(e,t)}function Lr(e,t){return null!=e&&t in Oe(e)}function Cr(e,t,n){for(var i=n?Lt:Rt,o=e[0].length,s=e.length,a=s,u=se(s),c=1/0,l=[];a--;){var f=e[a];a&&t&&(f=Ct(f,Kt(t))),c=wn(f.length,c),u[a]=!n&&(t||o>=120&&f.length>=120)?new Qn(a&&f):r}f=e[0];var h=-1,d=u[0];e:for(;++h<o&&l.length<c;){var p=f[h],g=t?t(p):p;if(p=n||0!==p?p:0,!(d?Yt(d,g):i(l,g,n))){for(a=s;--a;){var v=u[a];if(!(v?Yt(v,g):i(e[a],g,n)))continue e}d&&d.push(g),l.push(p)}}return l}function Nr(e,t,n){var i=null==(e=Lo(e,t=wi(t,e)))?e:e[zo(ns(t))];return null==i?r:It(i,e,n)}function Pr(e){return aa(e)&&Or(e)==m}function xr(e,t,n,i,o){return e===t||(null==e||null==t||!aa(e)&&!aa(t)?e!=e&&t!=t:function(e,t,n,i,o,s){var a=Qs(e),u=Qs(t),c=a?y:mo(e),l=u?y:mo(t),f=(c=c==m?k:c)==k,h=(l=l==m?k:l)==k,d=c==l;if(d&&ea(e)){if(!ea(t))return!1;a=!0,f=!1}if(d&&!f)return s||(s=new Yn),a||ga(e)?ro(e,t,n,i,o,s):function(e,t,n,r,i,o,s){switch(n){case x:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case P:return!(e.byteLength!=t.byteLength||!o(new We(e),new We(t)));case _:case b:case T:return Vs(+e,+t);case w:return e.name==t.name&&e.message==t.message;case A:case L:return e==t+"";case S:var a=sn;case R:var u=1&r;if(a||(a=cn),e.size!=t.size&&!u)return!1;var c=s.get(e);if(c)return c==t;r|=2,s.set(e,t);var l=ro(a(e),a(t),r,i,o,s);return s.delete(e),l;case C:if(Fn)return Fn.call(e)==Fn.call(t)}return!1}(e,t,c,n,i,o,s);if(!(1&n)){var p=f&&De.call(e,"__wrapped__"),g=h&&De.call(t,"__wrapped__");if(p||g){var v=p?e.value():e,E=g?t.value():t;return s||(s=new Yn),o(v,E,n,i,s)}}return!!d&&(s||(s=new Yn),function(e,t,n,i,o,s){var a=1&n,u=oo(e),c=u.length,l=oo(t).length;if(c!=l&&!a)return!1;var f=c;for(;f--;){var h=u[f];if(!(a?h in t:De.call(t,h)))return!1}var d=s.get(e),p=s.get(t);if(d&&p)return d==t&&p==e;var g=!0;s.set(e,t),s.set(t,e);var v=a;for(;++f<c;){var m=e[h=u[f]],y=t[h];if(i)var _=a?i(y,m,h,t,e,s):i(m,y,h,e,t,s);if(!(_===r?m===y||o(m,y,n,i,s):_)){g=!1;break}v||(v="constructor"==h)}if(g&&!v){var b=e.constructor,w=t.constructor;b==w||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w||(g=!1)}return s.delete(e),s.delete(t),g}(e,t,n,i,o,s))}(e,t,n,i,xr,o))}function Ur(e,t,n,i){var o=n.length,s=o,a=!i;if(null==e)return!s;for(e=Oe(e);o--;){var u=n[o];if(a&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<s;){var c=(u=n[o])[0],l=e[c],f=u[1];if(a&&u[2]){if(l===r&&!(c in e))return!1}else{var h=new Yn;if(i)var d=i(l,f,c,e,t,h);if(!(d===r?xr(f,l,3,i,h):d))return!1}}return!0}function Dr(e){return!(!sa(e)||(t=e,Be&&Be in t))&&(ra(e)?$e:me).test(Ho(e));var t}function Mr(e){return"function"==typeof e?e:null==e?cu:"object"==typeof e?Qs(e)?zr(e[0],e[1]):$r(e):yu(e)}function Br(e){if(!ko(e))return _n(e);var t=[];for(var n in Oe(e))De.call(e,n)&&"constructor"!=n&&t.push(n);return t}function jr(e){if(!sa(e))return function(e){var t=[];if(null!=e)for(var n in Oe(e))t.push(n);return t}(e);var t=ko(e),n=[];for(var r in e)("constructor"!=r||!t&&De.call(e,r))&&n.push(r);return n}function Fr(e,t){return e<t}function qr(e,t){var n=-1,r=Xs(e)?se(e.length):[];return pr(e,(function(e,i,o){r[++n]=t(e,i,o)})),r}function $r(e){var t=ho(e);return 1==t.length&&t[0][2]?Ao(t[0][0],t[0][1]):function(n){return n===e||Ur(n,e,t)}}function zr(e,t){return Io(e)&&Oo(t)?Ao(zo(e),t):function(n){var i=Na(n,e);return i===r&&i===t?Pa(n,e):xr(t,i,3)}}function Hr(e,t,n,i,o){e!==t&&br(t,(function(s,a){if(o||(o=new Yn),sa(s))!function(e,t,n,i,o,s,a){var u=No(e,n),c=No(t,n),l=a.get(c);if(l)return void nr(e,n,l);var f=s?s(u,c,n+"",e,t,a):r,h=f===r;if(h){var d=Qs(c),p=!d&&ea(c),g=!d&&!p&&ga(c);f=c,d||p||g?Qs(u)?f=u:Zs(u)?f=Ci(u):p?(h=!1,f=Ti(c,!0)):g?(h=!1,f=Oi(c,!0)):f=[]:la(c)||Ks(c)?(f=u,Ks(u)?f=Ia(u):sa(u)&&!ra(u)||(f=_o(c))):h=!1}h&&(a.set(c,f),o(f,c,i,s,a),a.delete(c));nr(e,n,f)}(e,t,a,n,Hr,i,o);else{var u=i?i(No(e,a),s,a+"",e,t,o):r;u===r&&(u=s),nr(e,a,u)}}),Ba)}function Wr(e,t){var n=e.length;if(n)return wo(t+=t<0?n:0,n)?e[t]:r}function Vr(e,t,n){t=t.length?Ct(t,(function(e){return Qs(e)?function(t){return Tr(t,1===e.length?e[0]:e)}:e})):[cu];var r=-1;return t=Ct(t,Kt(lo())),function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(qr(e,(function(e,n,i){return{criteria:Ct(t,(function(t){return t(e)})),index:++r,value:e}})),(function(e,t){return function(e,t,n){var r=-1,i=e.criteria,o=t.criteria,s=i.length,a=n.length;for(;++r<s;){var u=Ai(i[r],o[r]);if(u)return r>=a?u:u*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Gr(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var s=t[r],a=Tr(e,s);n(a,s)&&ti(o,wi(s,e),a)}return o}function Jr(e,t,n,r){var i=r?Ft:jt,o=-1,s=t.length,a=e;for(e===t&&(t=Ci(t)),n&&(a=Ct(e,Kt(n)));++o<s;)for(var u=0,c=t[o],l=n?n(c):c;(u=i(a,l,u,r))>-1;)a!==e&&Xe.call(a,u,1),Xe.call(e,u,1);return e}function Kr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;wo(i)?Xe.call(e,i,1):di(e,i)}}return e}function Qr(e,t){return e+Dt(Sn()*(t-e+1))}function Yr(e,t){var n="";if(!e||t<1||t>d)return n;do{t%2&&(n+=e),(t=Dt(t/2))&&(e+=e)}while(t);return n}function Xr(e,t){return Uo(Ro(e,t,cu),e+"")}function Zr(e){return Zn(Va(e))}function ei(e,t){var n=Va(e);return Bo(n,cr(t,0,n.length))}function ti(e,t,n,i){if(!sa(e))return e;for(var o=-1,s=(t=wi(t,e)).length,a=s-1,u=e;null!=u&&++o<s;){var c=zo(t[o]),l=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=a){var f=u[c];(l=i?i(f,c,u):r)===r&&(l=sa(f)?f:wo(t[o+1])?[]:{})}rr(u,c,l),u=u[c]}return e}var ni=Nn?function(e,t){return Nn.set(e,t),e}:cu,ri=lt?function(e,t){return lt(e,"toString",{configurable:!0,enumerable:!1,value:su(t),writable:!0})}:cu;function ii(e){return Bo(Va(e))}function oi(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=se(i);++r<i;)o[r]=e[r+t];return o}function si(e,t){var n;return pr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function ai(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,s=e[o];null!==s&&!pa(s)&&(n?s<=t:s<t)?r=o+1:i=o}return i}return ui(e,t,cu,n)}function ui(e,t,n,i){var o=0,s=null==e?0:e.length;if(0===s)return 0;for(var a=(t=n(t))!=t,u=null===t,c=pa(t),l=t===r;o<s;){var f=Dt((o+s)/2),h=n(e[f]),d=h!==r,p=null===h,g=h==h,v=pa(h);if(a)var m=i||g;else m=l?g&&(i||d):u?g&&d&&(i||!p):c?g&&d&&!p&&(i||!v):!p&&!v&&(i?h<=t:h<t);m?o=f+1:s=f}return wn(s,4294967294)}function ci(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n],a=t?t(s):s;if(!n||!Vs(a,u)){var u=a;o[i++]=0===s?0:s}}return o}function li(e){return"number"==typeof e?e:pa(e)?p:+e}function fi(e){if("string"==typeof e)return e;if(Qs(e))return Ct(e,fi)+"";if(pa(e))return qn?qn.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function hi(e,t,n){var r=-1,i=Rt,o=e.length,s=!0,a=[],u=a;if(n)s=!1,i=Lt;else if(o>=200){var c=t?null:Yi(e);if(c)return cn(c);s=!1,i=Yt,u=new Qn}else u=t?[]:a;e:for(;++r<o;){var l=e[r],f=t?t(l):l;if(l=n||0!==l?l:0,s&&f==f){for(var h=u.length;h--;)if(u[h]===f)continue e;t&&u.push(f),a.push(l)}else i(u,f,n)||(u!==a&&u.push(f),a.push(l))}return a}function di(e,t){return null==(e=Lo(e,t=wi(t,e)))||delete e[zo(ns(t))]}function pi(e,t,n,r){return ti(e,t,n(Tr(e,t)),r)}function gi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?oi(e,r?0:o,r?o+1:i):oi(e,r?o+1:0,r?i:o)}function vi(e,t){var n=e;return n instanceof Vn&&(n=n.value()),Pt(t,(function(e,t){return t.func.apply(t.thisArg,Nt([e],t.args))}),n)}function mi(e,t,n){var r=e.length;if(r<2)return r?hi(e[0]):[];for(var i=-1,o=se(r);++i<r;)for(var s=e[i],a=-1;++a<r;)a!=i&&(o[i]=dr(o[i]||s,e[a],t,n));return hi(_r(o,1),t,n)}function yi(e,t,n){for(var i=-1,o=e.length,s=t.length,a={};++i<o;){var u=i<s?t[i]:r;n(a,e[i],u)}return a}function _i(e){return Zs(e)?e:[]}function bi(e){return"function"==typeof e?e:cu}function wi(e,t){return Qs(e)?e:Io(e,t)?[e]:$o(Sa(e))}var Ei=Xr;function Ii(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:oi(e,t,n)}var Si=ht||function(e){return ft.clearTimeout(e)};function Ti(e,t){if(t)return e.slice();var n=e.length,r=Ve?Ve(n):new e.constructor(n);return e.copy(r),r}function ki(e){var t=new e.constructor(e.byteLength);return new We(t).set(new We(e)),t}function Oi(e,t){var n=t?ki(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ai(e,t){if(e!==t){var n=e!==r,i=null===e,o=e==e,s=pa(e),a=t!==r,u=null===t,c=t==t,l=pa(t);if(!u&&!l&&!s&&e>t||s&&a&&c&&!u&&!l||i&&a&&c||!n&&c||!o)return 1;if(!i&&!s&&!l&&e<t||l&&n&&o&&!i&&!s||u&&n&&o||!a&&o||!c)return-1}return 0}function Ri(e,t,n,r){for(var i=-1,o=e.length,s=n.length,a=-1,u=t.length,c=bn(o-s,0),l=se(u+c),f=!r;++a<u;)l[a]=t[a];for(;++i<s;)(f||i<o)&&(l[n[i]]=e[i]);for(;c--;)l[a++]=e[i++];return l}function Li(e,t,n,r){for(var i=-1,o=e.length,s=-1,a=n.length,u=-1,c=t.length,l=bn(o-a,0),f=se(l+c),h=!r;++i<l;)f[i]=e[i];for(var d=i;++u<c;)f[d+u]=t[u];for(;++s<a;)(h||i<o)&&(f[d+n[s]]=e[i++]);return f}function Ci(e,t){var n=-1,r=e.length;for(t||(t=se(r));++n<r;)t[n]=e[n];return t}function Ni(e,t,n,i){var o=!n;n||(n={});for(var s=-1,a=t.length;++s<a;){var u=t[s],c=i?i(n[u],e[u],u,n,e):r;c===r&&(c=e[u]),o?ar(n,u,c):rr(n,u,c)}return n}function Pi(e,t){return function(n,r){var i=Qs(n)?St:or,o=t?t():{};return i(n,e,lo(r,2),o)}}function xi(e){return Xr((function(t,n){var i=-1,o=n.length,s=o>1?n[o-1]:r,a=o>2?n[2]:r;for(s=e.length>3&&"function"==typeof s?(o--,s):r,a&&Eo(n[0],n[1],a)&&(s=o<3?r:s,o=1),t=Oe(t);++i<o;){var u=n[i];u&&e(t,u,i,s)}return t}))}function Ui(e,t){return function(n,r){if(null==n)return n;if(!Xs(n))return e(n,r);for(var i=n.length,o=t?i:-1,s=Oe(n);(t?o--:++o<i)&&!1!==r(s[o],o,s););return n}}function Di(e){return function(t,n,r){for(var i=-1,o=Oe(t),s=r(t),a=s.length;a--;){var u=s[e?a:++i];if(!1===n(o[u],u,o))break}return t}}function Mi(e){return function(t){var n=on(t=Sa(t))?hn(t):r,i=n?n[0]:t.charAt(0),o=n?Ii(n,1).join(""):t.slice(1);return i[e]()+o}}function Bi(e){return function(t){return Pt(ru(Ka(t).replace(Qe,"")),e,"")}}function ji(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=zn(e.prototype),r=e.apply(n,t);return sa(r)?r:n}}function Fi(e){return function(t,n,i){var o=Oe(t);if(!Xs(t)){var s=lo(n,3);t=Ma(t),n=function(e){return s(o[e],e,o)}}var a=e(t,n,i);return a>-1?o[s?t[a]:a]:r}}function qi(e){return io((function(t){var n=t.length,o=n,s=Wn.prototype.thru;for(e&&t.reverse();o--;){var a=t[o];if("function"!=typeof a)throw new Le(i);if(s&&!u&&"wrapper"==uo(a))var u=new Wn([],!0)}for(o=u?o:n;++o<n;){var c=uo(a=t[o]),l="wrapper"==c?ao(a):r;u=l&&So(l[0])&&424==l[1]&&!l[4].length&&1==l[9]?u[uo(l[0])].apply(u,l[3]):1==a.length&&So(a)?u[c]():u.thru(a)}return function(){var e=arguments,r=e[0];if(u&&1==e.length&&Qs(r))return u.plant(r).value();for(var i=0,o=n?t[i].apply(this,e):r;++i<n;)o=t[i].call(this,o);return o}}))}function $i(e,t,n,i,o,s,a,u,c,f){var h=t&l,d=1&t,p=2&t,g=24&t,v=512&t,m=p?r:ji(e);return function r(){for(var l=arguments.length,y=se(l),_=l;_--;)y[_]=arguments[_];if(g)var b=co(r),w=en(y,b);if(i&&(y=Ri(y,i,o,g)),s&&(y=Li(y,s,a,g)),l-=w,g&&l<f){var E=un(y,b);return Ki(e,t,$i,r.placeholder,n,y,E,u,c,f-l)}var I=d?n:this,S=p?I[e]:e;return l=y.length,u?y=Co(y,u):v&&l>1&&y.reverse(),h&&c<l&&(y.length=c),this&&this!==ft&&this instanceof r&&(S=m||ji(S)),S.apply(I,y)}}function zi(e,t){return function(n,r){return function(e,t,n,r){return Er(e,(function(e,i,o){t(r,n(e),i,o)})),r}(n,e,t(r),{})}}function Hi(e,t){return function(n,i){var o;if(n===r&&i===r)return t;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=fi(n),i=fi(i)):(n=li(n),i=li(i)),o=e(n,i)}return o}}function Wi(e){return io((function(t){return t=Ct(t,Kt(lo())),Xr((function(n){var r=this;return e(t,(function(e){return It(e,r,n)}))}))}))}function Vi(e,t){var n=(t=t===r?" ":fi(t)).length;if(n<2)return n?Yr(t,e):t;var i=Yr(t,vt(e/fn(t)));return on(t)?Ii(hn(i),0,e).join(""):i.slice(0,e)}function Gi(e){return function(t,n,i){return i&&"number"!=typeof i&&Eo(t,n,i)&&(n=i=r),t=_a(t),n===r?(n=t,t=0):n=_a(n),function(e,t,n,r){for(var i=-1,o=bn(vt((t-e)/(n||1)),0),s=se(o);o--;)s[r?o:++i]=e,e+=n;return s}(t,n,i=i===r?t<n?1:-1:_a(i),e)}}function Ji(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=Ea(t),n=Ea(n)),e(t,n)}}function Ki(e,t,n,i,o,s,a,l,f,h){var d=8&t;t|=d?u:c,4&(t&=~(d?c:u))||(t&=-4);var p=[e,t,o,d?s:r,d?a:r,d?r:s,d?r:a,l,f,h],g=n.apply(r,p);return So(e)&&Po(g,p),g.placeholder=i,Do(g,e,t)}function Qi(e){var t=ke[e];return function(e,n){if(e=Ea(e),(n=null==n?0:wn(ba(n),292))&&mn(e)){var r=(Sa(e)+"e").split("e");return+((r=(Sa(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Yi=Rn&&1/cn(new Rn([,-0]))[1]==h?function(e){return new Rn(e)}:pu;function Xi(e){return function(t){var n=mo(t);return n==S?sn(t):n==R?ln(t):function(e,t){return Ct(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,n,o,h,d,p,g){var v=2&t;if(!v&&"function"!=typeof e)throw new Le(i);var m=o?o.length:0;if(m||(t&=-97,o=h=r),p=p===r?p:bn(ba(p),0),g=g===r?g:ba(g),m-=h?h.length:0,t&c){var y=o,_=h;o=h=r}var b=v?r:ao(e),w=[e,t,n,o,h,y,_,d,p,g];if(b&&function(e,t){var n=e[1],r=t[1],i=n|r,o=i<131,a=r==l&&8==n||r==l&&n==f&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;if(!o&&!a)return e;1&r&&(e[2]=t[2],i|=1&n?0:4);var u=t[3];if(u){var c=e[3];e[3]=c?Ri(c,u,t[4]):u,e[4]=c?un(e[3],s):t[4]}(u=t[5])&&(c=e[5],e[5]=c?Li(c,u,t[6]):u,e[6]=c?un(e[5],s):t[6]);(u=t[7])&&(e[7]=u);r&l&&(e[8]=null==e[8]?t[8]:wn(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(w,b),e=w[0],t=w[1],n=w[2],o=w[3],h=w[4],!(g=w[9]=w[9]===r?v?0:e.length:bn(w[9]-m,0))&&24&t&&(t&=-25),t&&1!=t)E=8==t||t==a?function(e,t,n){var i=ji(e);return function o(){for(var s=arguments.length,a=se(s),u=s,c=co(o);u--;)a[u]=arguments[u];var l=s<3&&a[0]!==c&&a[s-1]!==c?[]:un(a,c);return(s-=l.length)<n?Ki(e,t,$i,o.placeholder,r,a,l,r,r,n-s):It(this&&this!==ft&&this instanceof o?i:e,this,a)}}(e,t,g):t!=u&&33!=t||h.length?$i.apply(r,w):function(e,t,n,r){var i=1&t,o=ji(e);return function t(){for(var s=-1,a=arguments.length,u=-1,c=r.length,l=se(c+a),f=this&&this!==ft&&this instanceof t?o:e;++u<c;)l[u]=r[u];for(;a--;)l[u++]=arguments[++s];return It(f,i?n:this,l)}}(e,t,n,o);else var E=function(e,t,n){var r=1&t,i=ji(e);return function t(){return(this&&this!==ft&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,n);return Do((b?ni:Po)(E,w),e,t)}function eo(e,t,n,i){return e===r||Vs(e,Pe[n])&&!De.call(i,n)?t:e}function to(e,t,n,i,o,s){return sa(e)&&sa(t)&&(s.set(t,e),Hr(e,t,r,to,s),s.delete(t)),e}function no(e){return la(e)?r:e}function ro(e,t,n,i,o,s){var a=1&n,u=e.length,c=t.length;if(u!=c&&!(a&&c>u))return!1;var l=s.get(e),f=s.get(t);if(l&&f)return l==t&&f==e;var h=-1,d=!0,p=2&n?new Qn:r;for(s.set(e,t),s.set(t,e);++h<u;){var g=e[h],v=t[h];if(i)var m=a?i(v,g,h,t,e,s):i(g,v,h,e,t,s);if(m!==r){if(m)continue;d=!1;break}if(p){if(!Ut(t,(function(e,t){if(!Yt(p,t)&&(g===e||o(g,e,n,i,s)))return p.push(t)}))){d=!1;break}}else if(g!==v&&!o(g,v,n,i,s)){d=!1;break}}return s.delete(e),s.delete(t),d}function io(e){return Uo(Ro(e,r,Yo),e+"")}function oo(e){return kr(e,Ma,go)}function so(e){return kr(e,Ba,vo)}var ao=Nn?function(e){return Nn.get(e)}:pu;function uo(e){for(var t=e.name+"",n=Pn[t],r=De.call(Pn,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function co(e){return(De.call($n,"placeholder")?$n:e).placeholder}function lo(){var e=$n.iteratee||lu;return e=e===lu?Mr:e,arguments.length?e(arguments[0],arguments[1]):e}function fo(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function ho(e){for(var t=Ma(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Oo(i)]}return t}function po(e,t){var n=function(e,t){return null==e?r:e[t]}(e,t);return Dr(n)?n:r}var go=Ht?function(e){return null==e?[]:(e=Oe(e),At(Ht(e),(function(t){return Ke.call(e,t)})))}:wu,vo=Ht?function(e){for(var t=[];e;)Nt(t,go(e)),e=Ge(e);return t}:wu,mo=Or;function yo(e,t,n){for(var r=-1,i=(t=wi(t,e)).length,o=!1;++r<i;){var s=zo(t[r]);if(!(o=null!=e&&n(e,s)))break;e=e[s]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&oa(i)&&wo(s,i)&&(Qs(e)||Ks(e))}function _o(e){return"function"!=typeof e.constructor||ko(e)?{}:zn(Ge(e))}function bo(e){return Qs(e)||Ks(e)||!!(et&&e&&e[et])}function wo(e,t){var n=typeof e;return!!(t=null==t?d:t)&&("number"==n||"symbol"!=n&&_e.test(e))&&e>-1&&e%1==0&&e<t}function Eo(e,t,n){if(!sa(n))return!1;var r=typeof t;return!!("number"==r?Xs(n)&&wo(t,n.length):"string"==r&&t in n)&&Vs(n[t],e)}function Io(e,t){if(Qs(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!pa(e))||(te.test(e)||!ee.test(e)||null!=t&&e in Oe(t))}function So(e){var t=uo(e),n=$n[t];if("function"!=typeof n||!(t in Vn.prototype))return!1;if(e===n)return!0;var r=ao(n);return!!r&&e===r[0]}(kn&&mo(new kn(new ArrayBuffer(1)))!=x||On&&mo(new On)!=S||An&&mo(An.resolve())!=O||Rn&&mo(new Rn)!=R||Ln&&mo(new Ln)!=N)&&(mo=function(e){var t=Or(e),n=t==k?e.constructor:r,i=n?Ho(n):"";if(i)switch(i){case xn:return x;case Un:return S;case Dn:return O;case Mn:return R;case Bn:return N}return t});var To=xe?ra:Eu;function ko(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Pe)}function Oo(e){return e==e&&!sa(e)}function Ao(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==r||e in Oe(n)))}}function Ro(e,t,n){return t=bn(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=bn(r.length-t,0),s=se(o);++i<o;)s[i]=r[t+i];i=-1;for(var a=se(t+1);++i<t;)a[i]=r[i];return a[t]=n(s),It(e,this,a)}}function Lo(e,t){return t.length<2?e:Tr(e,oi(t,0,-1))}function Co(e,t){for(var n=e.length,i=wn(t.length,n),o=Ci(e);i--;){var s=t[i];e[i]=wo(s,n)?o[s]:r}return e}function No(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Po=Mo(ni),xo=gt||function(e,t){return ft.setTimeout(e,t)},Uo=Mo(ri);function Do(e,t,n){var r=t+"";return Uo(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(ae,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Tt(v,(function(n){var r="_."+n[0];t&n[1]&&!Rt(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(ue);return t?t[1].split(ce):[]}(r),n)))}function Mo(e){var t=0,n=0;return function(){var i=En(),o=16-(i-n);if(n=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Bo(e,t){var n=-1,i=e.length,o=i-1;for(t=t===r?i:t;++n<t;){var s=Qr(n,o),a=e[s];e[s]=e[n],e[n]=a}return e.length=t,e}var jo,Fo,qo,$o=(jo=function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ne,(function(e,n,r,i){t.push(r?i.replace(he,"$1"):n||e)})),t},Fo=Fs(jo,(function(e){return 500===qo.size&&qo.clear(),e})),qo=Fo.cache,Fo);function zo(e){if("string"==typeof e||pa(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ho(e){if(null!=e){try{return Ue.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Wo(e){if(e instanceof Vn)return e.clone();var t=new Wn(e.__wrapped__,e.__chain__);return t.__actions__=Ci(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Vo=Xr((function(e,t){return Zs(e)?dr(e,_r(t,1,Zs,!0)):[]})),Go=Xr((function(e,t){var n=ns(t);return Zs(n)&&(n=r),Zs(e)?dr(e,_r(t,1,Zs,!0),lo(n,2)):[]})),Jo=Xr((function(e,t){var n=ns(t);return Zs(n)&&(n=r),Zs(e)?dr(e,_r(t,1,Zs,!0),r,n):[]}));function Ko(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ba(n);return i<0&&(i=bn(r+i,0)),Bt(e,lo(t,3),i)}function Qo(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return n!==r&&(o=ba(n),o=n<0?bn(i+o,0):wn(o,i-1)),Bt(e,lo(t,3),o,!0)}function Yo(e){return(null==e?0:e.length)?_r(e,1):[]}function Xo(e){return e&&e.length?e[0]:r}var Zo=Xr((function(e){var t=Ct(e,_i);return t.length&&t[0]===e[0]?Cr(t):[]})),es=Xr((function(e){var t=ns(e),n=Ct(e,_i);return t===ns(n)?t=r:n.pop(),n.length&&n[0]===e[0]?Cr(n,lo(t,2)):[]})),ts=Xr((function(e){var t=ns(e),n=Ct(e,_i);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?Cr(n,r,t):[]}));function ns(e){var t=null==e?0:e.length;return t?e[t-1]:r}var rs=Xr(is);function is(e,t){return e&&e.length&&t&&t.length?Jr(e,t):e}var os=io((function(e,t){var n=null==e?0:e.length,r=ur(e,t);return Kr(e,Ct(t,(function(e){return wo(e,n)?+e:e})).sort(Ai)),r}));function ss(e){return null==e?e:Tn.call(e)}var as=Xr((function(e){return hi(_r(e,1,Zs,!0))})),us=Xr((function(e){var t=ns(e);return Zs(t)&&(t=r),hi(_r(e,1,Zs,!0),lo(t,2))})),cs=Xr((function(e){var t=ns(e);return t="function"==typeof t?t:r,hi(_r(e,1,Zs,!0),r,t)}));function ls(e){if(!e||!e.length)return[];var t=0;return e=At(e,(function(e){if(Zs(e))return t=bn(e.length,t),!0})),Gt(t,(function(t){return Ct(e,zt(t))}))}function fs(e,t){if(!e||!e.length)return[];var n=ls(e);return null==t?n:Ct(n,(function(e){return It(t,r,e)}))}var hs=Xr((function(e,t){return Zs(e)?dr(e,t):[]})),ds=Xr((function(e){return mi(At(e,Zs))})),ps=Xr((function(e){var t=ns(e);return Zs(t)&&(t=r),mi(At(e,Zs),lo(t,2))})),gs=Xr((function(e){var t=ns(e);return t="function"==typeof t?t:r,mi(At(e,Zs),r,t)})),vs=Xr(ls);var ms=Xr((function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,fs(e,n)}));function ys(e){var t=$n(e);return t.__chain__=!0,t}function _s(e,t){return t(e)}var bs=io((function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,o=function(t){return ur(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Vn&&wo(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:_s,args:[o],thisArg:r}),new Wn(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(r),e}))):this.thru(o)}));var ws=Pi((function(e,t,n){De.call(e,n)?++e[n]:ar(e,n,1)}));var Es=Fi(Ko),Is=Fi(Qo);function Ss(e,t){return(Qs(e)?Tt:pr)(e,lo(t,3))}function Ts(e,t){return(Qs(e)?kt:gr)(e,lo(t,3))}var ks=Pi((function(e,t,n){De.call(e,n)?e[n].push(t):ar(e,n,[t])}));var Os=Xr((function(e,t,n){var r=-1,i="function"==typeof t,o=Xs(e)?se(e.length):[];return pr(e,(function(e){o[++r]=i?It(t,e,n):Nr(e,t,n)})),o})),As=Pi((function(e,t,n){ar(e,n,t)}));function Rs(e,t){return(Qs(e)?Ct:qr)(e,lo(t,3))}var Ls=Pi((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var Cs=Xr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&Eo(e,t[0],t[1])?t=[]:n>2&&Eo(t[0],t[1],t[2])&&(t=[t[0]]),Vr(e,_r(t,1),[])})),Ns=dt||function(){return ft.Date.now()};function Ps(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,Zi(e,l,r,r,r,r,t)}function xs(e,t){var n;if("function"!=typeof t)throw new Le(i);return e=ba(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=r),n}}var Us=Xr((function(e,t,n){var r=1;if(n.length){var i=un(n,co(Us));r|=u}return Zi(e,r,t,n,i)})),Ds=Xr((function(e,t,n){var r=3;if(n.length){var i=un(n,co(Ds));r|=u}return Zi(t,r,e,n,i)}));function Ms(e,t,n){var o,s,a,u,c,l,f=0,h=!1,d=!1,p=!0;if("function"!=typeof e)throw new Le(i);function g(t){var n=o,i=s;return o=s=r,f=t,u=e.apply(i,n)}function v(e){return f=e,c=xo(y,t),h?g(e):u}function m(e){var n=e-l;return l===r||n>=t||n<0||d&&e-f>=a}function y(){var e=Ns();if(m(e))return _(e);c=xo(y,function(e){var n=t-(e-l);return d?wn(n,a-(e-f)):n}(e))}function _(e){return c=r,p&&o?g(e):(o=s=r,u)}function b(){var e=Ns(),n=m(e);if(o=arguments,s=this,l=e,n){if(c===r)return v(l);if(d)return Si(c),c=xo(y,t),g(l)}return c===r&&(c=xo(y,t)),u}return t=Ea(t)||0,sa(n)&&(h=!!n.leading,a=(d="maxWait"in n)?bn(Ea(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),b.cancel=function(){c!==r&&Si(c),f=0,o=l=s=c=r},b.flush=function(){return c===r?u:_(Ns())},b}var Bs=Xr((function(e,t){return hr(e,1,t)})),js=Xr((function(e,t,n){return hr(e,Ea(t)||0,n)}));function Fs(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Le(i);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(Fs.Cache||Kn),n}function qs(e){if("function"!=typeof e)throw new Le(i);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Fs.Cache=Kn;var $s=Ei((function(e,t){var n=(t=1==t.length&&Qs(t[0])?Ct(t[0],Kt(lo())):Ct(_r(t,1),Kt(lo()))).length;return Xr((function(r){for(var i=-1,o=wn(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return It(e,this,r)}))})),zs=Xr((function(e,t){var n=un(t,co(zs));return Zi(e,u,r,t,n)})),Hs=Xr((function(e,t){var n=un(t,co(Hs));return Zi(e,c,r,t,n)})),Ws=io((function(e,t){return Zi(e,f,r,r,r,t)}));function Vs(e,t){return e===t||e!=e&&t!=t}var Gs=Ji(Ar),Js=Ji((function(e,t){return e>=t})),Ks=Pr(function(){return arguments}())?Pr:function(e){return aa(e)&&De.call(e,"callee")&&!Ke.call(e,"callee")},Qs=se.isArray,Ys=mt?Kt(mt):function(e){return aa(e)&&Or(e)==P};function Xs(e){return null!=e&&oa(e.length)&&!ra(e)}function Zs(e){return aa(e)&&Xs(e)}var ea=vn||Eu,ta=yt?Kt(yt):function(e){return aa(e)&&Or(e)==b};function na(e){if(!aa(e))return!1;var t=Or(e);return t==w||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!la(e)}function ra(e){if(!sa(e))return!1;var t=Or(e);return t==E||t==I||"[object AsyncFunction]"==t||"[object Proxy]"==t}function ia(e){return"number"==typeof e&&e==ba(e)}function oa(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function sa(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function aa(e){return null!=e&&"object"==typeof e}var ua=_t?Kt(_t):function(e){return aa(e)&&mo(e)==S};function ca(e){return"number"==typeof e||aa(e)&&Or(e)==T}function la(e){if(!aa(e)||Or(e)!=k)return!1;var t=Ge(e);if(null===t)return!0;var n=De.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Ue.call(n)==Fe}var fa=bt?Kt(bt):function(e){return aa(e)&&Or(e)==A};var ha=wt?Kt(wt):function(e){return aa(e)&&mo(e)==R};function da(e){return"string"==typeof e||!Qs(e)&&aa(e)&&Or(e)==L}function pa(e){return"symbol"==typeof e||aa(e)&&Or(e)==C}var ga=Et?Kt(Et):function(e){return aa(e)&&oa(e.length)&&!!it[Or(e)]};var va=Ji(Fr),ma=Ji((function(e,t){return e<=t}));function ya(e){if(!e)return[];if(Xs(e))return da(e)?hn(e):Ci(e);if(st&&e[st])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[st]());var t=mo(e);return(t==S?sn:t==R?cn:Va)(e)}function _a(e){return e?(e=Ea(e))===h||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ba(e){var t=_a(e),n=t%1;return t==t?n?t-n:t:0}function wa(e){return e?cr(ba(e),0,g):0}function Ea(e){if("number"==typeof e)return e;if(pa(e))return p;if(sa(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=sa(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Jt(e);var n=ve.test(e);return n||ye.test(e)?ut(e.slice(2),n?2:8):ge.test(e)?p:+e}function Ia(e){return Ni(e,Ba(e))}function Sa(e){return null==e?"":fi(e)}var Ta=xi((function(e,t){if(ko(t)||Xs(t))Ni(t,Ma(t),e);else for(var n in t)De.call(t,n)&&rr(e,n,t[n])})),ka=xi((function(e,t){Ni(t,Ba(t),e)})),Oa=xi((function(e,t,n,r){Ni(t,Ba(t),e,r)})),Aa=xi((function(e,t,n,r){Ni(t,Ma(t),e,r)})),Ra=io(ur);var La=Xr((function(e,t){e=Oe(e);var n=-1,i=t.length,o=i>2?t[2]:r;for(o&&Eo(t[0],t[1],o)&&(i=1);++n<i;)for(var s=t[n],a=Ba(s),u=-1,c=a.length;++u<c;){var l=a[u],f=e[l];(f===r||Vs(f,Pe[l])&&!De.call(e,l))&&(e[l]=s[l])}return e})),Ca=Xr((function(e){return e.push(r,to),It(Fa,r,e)}));function Na(e,t,n){var i=null==e?r:Tr(e,t);return i===r?n:i}function Pa(e,t){return null!=e&&yo(e,t,Lr)}var xa=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=je.call(t)),e[t]=n}),su(cu)),Ua=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=je.call(t)),De.call(e,t)?e[t].push(n):e[t]=[n]}),lo),Da=Xr(Nr);function Ma(e){return Xs(e)?Xn(e):Br(e)}function Ba(e){return Xs(e)?Xn(e,!0):jr(e)}var ja=xi((function(e,t,n){Hr(e,t,n)})),Fa=xi((function(e,t,n,r){Hr(e,t,n,r)})),qa=io((function(e,t){var n={};if(null==e)return n;var r=!1;t=Ct(t,(function(t){return t=wi(t,e),r||(r=t.length>1),t})),Ni(e,so(e),n),r&&(n=lr(n,7,no));for(var i=t.length;i--;)di(n,t[i]);return n}));var $a=io((function(e,t){return null==e?{}:function(e,t){return Gr(e,t,(function(t,n){return Pa(e,n)}))}(e,t)}));function za(e,t){if(null==e)return{};var n=Ct(so(e),(function(e){return[e]}));return t=lo(t),Gr(e,n,(function(e,n){return t(e,n[0])}))}var Ha=Xi(Ma),Wa=Xi(Ba);function Va(e){return null==e?[]:Qt(e,Ma(e))}var Ga=Bi((function(e,t,n){return t=t.toLowerCase(),e+(n?Ja(t):t)}));function Ja(e){return nu(Sa(e).toLowerCase())}function Ka(e){return(e=Sa(e))&&e.replace(be,tn).replace(Ye,"")}var Qa=Bi((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ya=Bi((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Xa=Mi("toLowerCase");var Za=Bi((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var eu=Bi((function(e,t,n){return e+(n?" ":"")+nu(t)}));var tu=Bi((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),nu=Mi("toUpperCase");function ru(e,t,n){return e=Sa(e),(t=n?r:t)===r?function(e){return tt.test(e)}(e)?function(e){return e.match(Ze)||[]}(e):function(e){return e.match(le)||[]}(e):e.match(t)||[]}var iu=Xr((function(e,t){try{return It(e,r,t)}catch(e){return na(e)?e:new Se(e)}})),ou=io((function(e,t){return Tt(t,(function(t){t=zo(t),ar(e,t,Us(e[t],e))})),e}));function su(e){return function(){return e}}var au=qi(),uu=qi(!0);function cu(e){return e}function lu(e){return Mr("function"==typeof e?e:lr(e,1))}var fu=Xr((function(e,t){return function(n){return Nr(n,e,t)}})),hu=Xr((function(e,t){return function(n){return Nr(e,n,t)}}));function du(e,t,n){var r=Ma(t),i=Sr(t,r);null!=n||sa(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=Sr(t,Ma(t)));var o=!(sa(n)&&"chain"in n&&!n.chain),s=ra(e);return Tt(i,(function(n){var r=t[n];e[n]=r,s&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__),i=n.__actions__=Ci(this.__actions__);return i.push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Nt([this.value()],arguments))})})),e}function pu(){}var gu=Wi(Ct),vu=Wi(Ot),mu=Wi(Ut);function yu(e){return Io(e)?zt(zo(e)):function(e){return function(t){return Tr(t,e)}}(e)}var _u=Gi(),bu=Gi(!0);function wu(){return[]}function Eu(){return!1}var Iu=Hi((function(e,t){return e+t}),0),Su=Qi("ceil"),Tu=Hi((function(e,t){return e/t}),1),ku=Qi("floor");var Ou,Au=Hi((function(e,t){return e*t}),1),Ru=Qi("round"),Lu=Hi((function(e,t){return e-t}),0);return $n.after=function(e,t){if("function"!=typeof t)throw new Le(i);return e=ba(e),function(){if(--e<1)return t.apply(this,arguments)}},$n.ary=Ps,$n.assign=Ta,$n.assignIn=ka,$n.assignInWith=Oa,$n.assignWith=Aa,$n.at=Ra,$n.before=xs,$n.bind=Us,$n.bindAll=ou,$n.bindKey=Ds,$n.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Qs(e)?e:[e]},$n.chain=ys,$n.chunk=function(e,t,n){t=(n?Eo(e,t,n):t===r)?1:bn(ba(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,s=0,a=se(vt(i/t));o<i;)a[s++]=oi(e,o,o+=t);return a},$n.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},$n.concat=function(){var e=arguments.length;if(!e)return[];for(var t=se(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Nt(Qs(n)?Ci(n):[n],_r(t,1))},$n.cond=function(e){var t=null==e?0:e.length,n=lo();return e=t?Ct(e,(function(e){if("function"!=typeof e[1])throw new Le(i);return[n(e[0]),e[1]]})):[],Xr((function(n){for(var r=-1;++r<t;){var i=e[r];if(It(i[0],this,n))return It(i[1],this,n)}}))},$n.conforms=function(e){return function(e){var t=Ma(e);return function(n){return fr(n,e,t)}}(lr(e,1))},$n.constant=su,$n.countBy=ws,$n.create=function(e,t){var n=zn(e);return null==t?n:sr(n,t)},$n.curry=function e(t,n,i){var o=Zi(t,8,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},$n.curryRight=function e(t,n,i){var o=Zi(t,a,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},$n.debounce=Ms,$n.defaults=La,$n.defaultsDeep=Ca,$n.defer=Bs,$n.delay=js,$n.difference=Vo,$n.differenceBy=Go,$n.differenceWith=Jo,$n.drop=function(e,t,n){var i=null==e?0:e.length;return i?oi(e,(t=n||t===r?1:ba(t))<0?0:t,i):[]},$n.dropRight=function(e,t,n){var i=null==e?0:e.length;return i?oi(e,0,(t=i-(t=n||t===r?1:ba(t)))<0?0:t):[]},$n.dropRightWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!0,!0):[]},$n.dropWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!0):[]},$n.fill=function(e,t,n,i){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&Eo(e,t,n)&&(n=0,i=o),function(e,t,n,i){var o=e.length;for((n=ba(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:ba(i))<0&&(i+=o),i=n>i?0:wa(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},$n.filter=function(e,t){return(Qs(e)?At:yr)(e,lo(t,3))},$n.flatMap=function(e,t){return _r(Rs(e,t),1)},$n.flatMapDeep=function(e,t){return _r(Rs(e,t),h)},$n.flatMapDepth=function(e,t,n){return n=n===r?1:ba(n),_r(Rs(e,t),n)},$n.flatten=Yo,$n.flattenDeep=function(e){return(null==e?0:e.length)?_r(e,h):[]},$n.flattenDepth=function(e,t){return(null==e?0:e.length)?_r(e,t=t===r?1:ba(t)):[]},$n.flip=function(e){return Zi(e,512)},$n.flow=au,$n.flowRight=uu,$n.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},$n.functions=function(e){return null==e?[]:Sr(e,Ma(e))},$n.functionsIn=function(e){return null==e?[]:Sr(e,Ba(e))},$n.groupBy=ks,$n.initial=function(e){return(null==e?0:e.length)?oi(e,0,-1):[]},$n.intersection=Zo,$n.intersectionBy=es,$n.intersectionWith=ts,$n.invert=xa,$n.invertBy=Ua,$n.invokeMap=Os,$n.iteratee=lu,$n.keyBy=As,$n.keys=Ma,$n.keysIn=Ba,$n.map=Rs,$n.mapKeys=function(e,t){var n={};return t=lo(t,3),Er(e,(function(e,r,i){ar(n,t(e,r,i),e)})),n},$n.mapValues=function(e,t){var n={};return t=lo(t,3),Er(e,(function(e,r,i){ar(n,r,t(e,r,i))})),n},$n.matches=function(e){return $r(lr(e,1))},$n.matchesProperty=function(e,t){return zr(e,lr(t,1))},$n.memoize=Fs,$n.merge=ja,$n.mergeWith=Fa,$n.method=fu,$n.methodOf=hu,$n.mixin=du,$n.negate=qs,$n.nthArg=function(e){return e=ba(e),Xr((function(t){return Wr(t,e)}))},$n.omit=qa,$n.omitBy=function(e,t){return za(e,qs(lo(t)))},$n.once=function(e){return xs(2,e)},$n.orderBy=function(e,t,n,i){return null==e?[]:(Qs(t)||(t=null==t?[]:[t]),Qs(n=i?r:n)||(n=null==n?[]:[n]),Vr(e,t,n))},$n.over=gu,$n.overArgs=$s,$n.overEvery=vu,$n.overSome=mu,$n.partial=zs,$n.partialRight=Hs,$n.partition=Ls,$n.pick=$a,$n.pickBy=za,$n.property=yu,$n.propertyOf=function(e){return function(t){return null==e?r:Tr(e,t)}},$n.pull=rs,$n.pullAll=is,$n.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Jr(e,t,lo(n,2)):e},$n.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Jr(e,t,r,n):e},$n.pullAt=os,$n.range=_u,$n.rangeRight=bu,$n.rearg=Ws,$n.reject=function(e,t){return(Qs(e)?At:yr)(e,qs(lo(t,3)))},$n.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=lo(t,3);++r<o;){var s=e[r];t(s,r,e)&&(n.push(s),i.push(r))}return Kr(e,i),n},$n.rest=function(e,t){if("function"!=typeof e)throw new Le(i);return Xr(e,t=t===r?t:ba(t))},$n.reverse=ss,$n.sampleSize=function(e,t,n){return t=(n?Eo(e,t,n):t===r)?1:ba(t),(Qs(e)?er:ei)(e,t)},$n.set=function(e,t,n){return null==e?e:ti(e,t,n)},$n.setWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:ti(e,t,n,i)},$n.shuffle=function(e){return(Qs(e)?tr:ii)(e)},$n.slice=function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&Eo(e,t,n)?(t=0,n=i):(t=null==t?0:ba(t),n=n===r?i:ba(n)),oi(e,t,n)):[]},$n.sortBy=Cs,$n.sortedUniq=function(e){return e&&e.length?ci(e):[]},$n.sortedUniqBy=function(e,t){return e&&e.length?ci(e,lo(t,2)):[]},$n.split=function(e,t,n){return n&&"number"!=typeof n&&Eo(e,t,n)&&(t=n=r),(n=n===r?g:n>>>0)?(e=Sa(e))&&("string"==typeof t||null!=t&&!fa(t))&&!(t=fi(t))&&on(e)?Ii(hn(e),0,n):e.split(t,n):[]},$n.spread=function(e,t){if("function"!=typeof e)throw new Le(i);return t=null==t?0:bn(ba(t),0),Xr((function(n){var r=n[t],i=Ii(n,0,t);return r&&Nt(i,r),It(e,this,i)}))},$n.tail=function(e){var t=null==e?0:e.length;return t?oi(e,1,t):[]},$n.take=function(e,t,n){return e&&e.length?oi(e,0,(t=n||t===r?1:ba(t))<0?0:t):[]},$n.takeRight=function(e,t,n){var i=null==e?0:e.length;return i?oi(e,(t=i-(t=n||t===r?1:ba(t)))<0?0:t,i):[]},$n.takeRightWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!1,!0):[]},$n.takeWhile=function(e,t){return e&&e.length?gi(e,lo(t,3)):[]},$n.tap=function(e,t){return t(e),e},$n.throttle=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new Le(i);return sa(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Ms(e,t,{leading:r,maxWait:t,trailing:o})},$n.thru=_s,$n.toArray=ya,$n.toPairs=Ha,$n.toPairsIn=Wa,$n.toPath=function(e){return Qs(e)?Ct(e,zo):pa(e)?[e]:Ci($o(Sa(e)))},$n.toPlainObject=Ia,$n.transform=function(e,t,n){var r=Qs(e),i=r||ea(e)||ga(e);if(t=lo(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:sa(e)&&ra(o)?zn(Ge(e)):{}}return(i?Tt:Er)(e,(function(e,r,i){return t(n,e,r,i)})),n},$n.unary=function(e){return Ps(e,1)},$n.union=as,$n.unionBy=us,$n.unionWith=cs,$n.uniq=function(e){return e&&e.length?hi(e):[]},$n.uniqBy=function(e,t){return e&&e.length?hi(e,lo(t,2)):[]},$n.uniqWith=function(e,t){return t="function"==typeof t?t:r,e&&e.length?hi(e,r,t):[]},$n.unset=function(e,t){return null==e||di(e,t)},$n.unzip=ls,$n.unzipWith=fs,$n.update=function(e,t,n){return null==e?e:pi(e,t,bi(n))},$n.updateWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:pi(e,t,bi(n),i)},$n.values=Va,$n.valuesIn=function(e){return null==e?[]:Qt(e,Ba(e))},$n.without=hs,$n.words=ru,$n.wrap=function(e,t){return zs(bi(t),e)},$n.xor=ds,$n.xorBy=ps,$n.xorWith=gs,$n.zip=vs,$n.zipObject=function(e,t){return yi(e||[],t||[],rr)},$n.zipObjectDeep=function(e,t){return yi(e||[],t||[],ti)},$n.zipWith=ms,$n.entries=Ha,$n.entriesIn=Wa,$n.extend=ka,$n.extendWith=Oa,du($n,$n),$n.add=Iu,$n.attempt=iu,$n.camelCase=Ga,$n.capitalize=Ja,$n.ceil=Su,$n.clamp=function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=Ea(n))==n?n:0),t!==r&&(t=(t=Ea(t))==t?t:0),cr(Ea(e),t,n)},$n.clone=function(e){return lr(e,4)},$n.cloneDeep=function(e){return lr(e,5)},$n.cloneDeepWith=function(e,t){return lr(e,5,t="function"==typeof t?t:r)},$n.cloneWith=function(e,t){return lr(e,4,t="function"==typeof t?t:r)},$n.conformsTo=function(e,t){return null==t||fr(e,t,Ma(t))},$n.deburr=Ka,$n.defaultTo=function(e,t){return null==e||e!=e?t:e},$n.divide=Tu,$n.endsWith=function(e,t,n){e=Sa(e),t=fi(t);var i=e.length,o=n=n===r?i:cr(ba(n),0,i);return(n-=t.length)>=0&&e.slice(n,o)==t},$n.eq=Vs,$n.escape=function(e){return(e=Sa(e))&&Q.test(e)?e.replace(J,nn):e},$n.escapeRegExp=function(e){return(e=Sa(e))&&ie.test(e)?e.replace(re,"\\$&"):e},$n.every=function(e,t,n){var i=Qs(e)?Ot:vr;return n&&Eo(e,t,n)&&(t=r),i(e,lo(t,3))},$n.find=Es,$n.findIndex=Ko,$n.findKey=function(e,t){return Mt(e,lo(t,3),Er)},$n.findLast=Is,$n.findLastIndex=Qo,$n.findLastKey=function(e,t){return Mt(e,lo(t,3),Ir)},$n.floor=ku,$n.forEach=Ss,$n.forEachRight=Ts,$n.forIn=function(e,t){return null==e?e:br(e,lo(t,3),Ba)},$n.forInRight=function(e,t){return null==e?e:wr(e,lo(t,3),Ba)},$n.forOwn=function(e,t){return e&&Er(e,lo(t,3))},$n.forOwnRight=function(e,t){return e&&Ir(e,lo(t,3))},$n.get=Na,$n.gt=Gs,$n.gte=Js,$n.has=function(e,t){return null!=e&&yo(e,t,Rr)},$n.hasIn=Pa,$n.head=Xo,$n.identity=cu,$n.includes=function(e,t,n,r){e=Xs(e)?e:Va(e),n=n&&!r?ba(n):0;var i=e.length;return n<0&&(n=bn(i+n,0)),da(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&jt(e,t,n)>-1},$n.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ba(n);return i<0&&(i=bn(r+i,0)),jt(e,t,i)},$n.inRange=function(e,t,n){return t=_a(t),n===r?(n=t,t=0):n=_a(n),function(e,t,n){return e>=wn(t,n)&&e<bn(t,n)}(e=Ea(e),t,n)},$n.invoke=Da,$n.isArguments=Ks,$n.isArray=Qs,$n.isArrayBuffer=Ys,$n.isArrayLike=Xs,$n.isArrayLikeObject=Zs,$n.isBoolean=function(e){return!0===e||!1===e||aa(e)&&Or(e)==_},$n.isBuffer=ea,$n.isDate=ta,$n.isElement=function(e){return aa(e)&&1===e.nodeType&&!la(e)},$n.isEmpty=function(e){if(null==e)return!0;if(Xs(e)&&(Qs(e)||"string"==typeof e||"function"==typeof e.splice||ea(e)||ga(e)||Ks(e)))return!e.length;var t=mo(e);if(t==S||t==R)return!e.size;if(ko(e))return!Br(e).length;for(var n in e)if(De.call(e,n))return!1;return!0},$n.isEqual=function(e,t){return xr(e,t)},$n.isEqualWith=function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?xr(e,t,r,n):!!i},$n.isError=na,$n.isFinite=function(e){return"number"==typeof e&&mn(e)},$n.isFunction=ra,$n.isInteger=ia,$n.isLength=oa,$n.isMap=ua,$n.isMatch=function(e,t){return e===t||Ur(e,t,ho(t))},$n.isMatchWith=function(e,t,n){return n="function"==typeof n?n:r,Ur(e,t,ho(t),n)},$n.isNaN=function(e){return ca(e)&&e!=+e},$n.isNative=function(e){if(To(e))throw new Se("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Dr(e)},$n.isNil=function(e){return null==e},$n.isNull=function(e){return null===e},$n.isNumber=ca,$n.isObject=sa,$n.isObjectLike=aa,$n.isPlainObject=la,$n.isRegExp=fa,$n.isSafeInteger=function(e){return ia(e)&&e>=-9007199254740991&&e<=d},$n.isSet=ha,$n.isString=da,$n.isSymbol=pa,$n.isTypedArray=ga,$n.isUndefined=function(e){return e===r},$n.isWeakMap=function(e){return aa(e)&&mo(e)==N},$n.isWeakSet=function(e){return aa(e)&&"[object WeakSet]"==Or(e)},$n.join=function(e,t){return null==e?"":yn.call(e,t)},$n.kebabCase=Qa,$n.last=ns,$n.lastIndexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i;return n!==r&&(o=(o=ba(n))<0?bn(i+o,0):wn(o,i-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,o):Bt(e,qt,o,!0)},$n.lowerCase=Ya,$n.lowerFirst=Xa,$n.lt=va,$n.lte=ma,$n.max=function(e){return e&&e.length?mr(e,cu,Ar):r},$n.maxBy=function(e,t){return e&&e.length?mr(e,lo(t,2),Ar):r},$n.mean=function(e){return $t(e,cu)},$n.meanBy=function(e,t){return $t(e,lo(t,2))},$n.min=function(e){return e&&e.length?mr(e,cu,Fr):r},$n.minBy=function(e,t){return e&&e.length?mr(e,lo(t,2),Fr):r},$n.stubArray=wu,$n.stubFalse=Eu,$n.stubObject=function(){return{}},$n.stubString=function(){return""},$n.stubTrue=function(){return!0},$n.multiply=Au,$n.nth=function(e,t){return e&&e.length?Wr(e,ba(t)):r},$n.noConflict=function(){return ft._===this&&(ft._=qe),this},$n.noop=pu,$n.now=Ns,$n.pad=function(e,t,n){e=Sa(e);var r=(t=ba(t))?fn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Vi(Dt(i),n)+e+Vi(vt(i),n)},$n.padEnd=function(e,t,n){e=Sa(e);var r=(t=ba(t))?fn(e):0;return t&&r<t?e+Vi(t-r,n):e},$n.padStart=function(e,t,n){e=Sa(e);var r=(t=ba(t))?fn(e):0;return t&&r<t?Vi(t-r,n)+e:e},$n.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),In(Sa(e).replace(oe,""),t||0)},$n.random=function(e,t,n){if(n&&"boolean"!=typeof n&&Eo(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=_a(e),t===r?(t=e,e=0):t=_a(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var o=Sn();return wn(e+o*(t-e+at("1e-"+((o+"").length-1))),t)}return Qr(e,t)},$n.reduce=function(e,t,n){var r=Qs(e)?Pt:Wt,i=arguments.length<3;return r(e,lo(t,4),n,i,pr)},$n.reduceRight=function(e,t,n){var r=Qs(e)?xt:Wt,i=arguments.length<3;return r(e,lo(t,4),n,i,gr)},$n.repeat=function(e,t,n){return t=(n?Eo(e,t,n):t===r)?1:ba(t),Yr(Sa(e),t)},$n.replace=function(){var e=arguments,t=Sa(e[0]);return e.length<3?t:t.replace(e[1],e[2])},$n.result=function(e,t,n){var i=-1,o=(t=wi(t,e)).length;for(o||(o=1,e=r);++i<o;){var s=null==e?r:e[zo(t[i])];s===r&&(i=o,s=n),e=ra(s)?s.call(e):s}return e},$n.round=Ru,$n.runInContext=e,$n.sample=function(e){return(Qs(e)?Zn:Zr)(e)},$n.size=function(e){if(null==e)return 0;if(Xs(e))return da(e)?fn(e):e.length;var t=mo(e);return t==S||t==R?e.size:Br(e).length},$n.snakeCase=Za,$n.some=function(e,t,n){var i=Qs(e)?Ut:si;return n&&Eo(e,t,n)&&(t=r),i(e,lo(t,3))},$n.sortedIndex=function(e,t){return ai(e,t)},$n.sortedIndexBy=function(e,t,n){return ui(e,t,lo(n,2))},$n.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=ai(e,t);if(r<n&&Vs(e[r],t))return r}return-1},$n.sortedLastIndex=function(e,t){return ai(e,t,!0)},$n.sortedLastIndexBy=function(e,t,n){return ui(e,t,lo(n,2),!0)},$n.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=ai(e,t,!0)-1;if(Vs(e[n],t))return n}return-1},$n.startCase=eu,$n.startsWith=function(e,t,n){return e=Sa(e),n=null==n?0:cr(ba(n),0,e.length),t=fi(t),e.slice(n,n+t.length)==t},$n.subtract=Lu,$n.sum=function(e){return e&&e.length?Vt(e,cu):0},$n.sumBy=function(e,t){return e&&e.length?Vt(e,lo(t,2)):0},$n.template=function(e,t,n){var i=$n.templateSettings;n&&Eo(e,t,n)&&(t=r),e=Sa(e),t=Oa({},t,i,eo);var o,s,a=Oa({},t.imports,i.imports,eo),u=Ma(a),c=Qt(a,u),l=0,f=t.interpolate||we,h="__p += '",d=Ae((t.escape||we).source+"|"+f.source+"|"+(f===Z?de:we).source+"|"+(t.evaluate||we).source+"|$","g"),p="//# sourceURL="+(De.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rt+"]")+"\n";e.replace(d,(function(t,n,r,i,a,u){return r||(r=i),h+=e.slice(l,u).replace(Ee,rn),n&&(o=!0,h+="' +\n__e("+n+") +\n'"),a&&(s=!0,h+="';\n"+a+";\n__p += '"),r&&(h+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),l=u+t.length,t})),h+="';\n";var g=De.call(t,"variable")&&t.variable;if(g){if(fe.test(g))throw new Se("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(s?h.replace(H,""):h).replace(W,"$1").replace(V,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var v=iu((function(){return Te(u,p+"return "+h).apply(r,c)}));if(v.source=h,na(v))throw v;return v},$n.times=function(e,t){if((e=ba(e))<1||e>d)return[];var n=g,r=wn(e,g);t=lo(t),e-=g;for(var i=Gt(r,t);++n<e;)t(n);return i},$n.toFinite=_a,$n.toInteger=ba,$n.toLength=wa,$n.toLower=function(e){return Sa(e).toLowerCase()},$n.toNumber=Ea,$n.toSafeInteger=function(e){return e?cr(ba(e),-9007199254740991,d):0===e?e:0},$n.toString=Sa,$n.toUpper=function(e){return Sa(e).toUpperCase()},$n.trim=function(e,t,n){if((e=Sa(e))&&(n||t===r))return Jt(e);if(!e||!(t=fi(t)))return e;var i=hn(e),o=hn(t);return Ii(i,Xt(i,o),Zt(i,o)+1).join("")},$n.trimEnd=function(e,t,n){if((e=Sa(e))&&(n||t===r))return e.slice(0,dn(e)+1);if(!e||!(t=fi(t)))return e;var i=hn(e);return Ii(i,0,Zt(i,hn(t))+1).join("")},$n.trimStart=function(e,t,n){if((e=Sa(e))&&(n||t===r))return e.replace(oe,"");if(!e||!(t=fi(t)))return e;var i=hn(e);return Ii(i,Xt(i,hn(t))).join("")},$n.truncate=function(e,t){var n=30,i="...";if(sa(t)){var o="separator"in t?t.separator:o;n="length"in t?ba(t.length):n,i="omission"in t?fi(t.omission):i}var s=(e=Sa(e)).length;if(on(e)){var a=hn(e);s=a.length}if(n>=s)return e;var u=n-fn(i);if(u<1)return i;var c=a?Ii(a,0,u).join(""):e.slice(0,u);if(o===r)return c+i;if(a&&(u+=c.length-u),fa(o)){if(e.slice(u).search(o)){var l,f=c;for(o.global||(o=Ae(o.source,Sa(pe.exec(o))+"g")),o.lastIndex=0;l=o.exec(f);)var h=l.index;c=c.slice(0,h===r?u:h)}}else if(e.indexOf(fi(o),u)!=u){var d=c.lastIndexOf(o);d>-1&&(c=c.slice(0,d))}return c+i},$n.unescape=function(e){return(e=Sa(e))&&K.test(e)?e.replace(G,pn):e},$n.uniqueId=function(e){var t=++Me;return Sa(e)+t},$n.upperCase=tu,$n.upperFirst=nu,$n.each=Ss,$n.eachRight=Ts,$n.first=Xo,du($n,(Ou={},Er($n,(function(e,t){De.call($n.prototype,t)||(Ou[t]=e)})),Ou),{chain:!1}),$n.VERSION="4.17.21",Tt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){$n[e].placeholder=$n})),Tt(["drop","take"],(function(e,t){Vn.prototype[e]=function(n){n=n===r?1:bn(ba(n),0);var i=this.__filtered__&&!t?new Vn(this):this.clone();return i.__filtered__?i.__takeCount__=wn(n,i.__takeCount__):i.__views__.push({size:wn(n,g),type:e+(i.__dir__<0?"Right":"")}),i},Vn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Tt(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Vn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Tt(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Vn.prototype[e]=function(){return this[n](1).value()[0]}})),Tt(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Vn.prototype[e]=function(){return this.__filtered__?new Vn(this):this[n](1)}})),Vn.prototype.compact=function(){return this.filter(cu)},Vn.prototype.find=function(e){return this.filter(e).head()},Vn.prototype.findLast=function(e){return this.reverse().find(e)},Vn.prototype.invokeMap=Xr((function(e,t){return"function"==typeof e?new Vn(this):this.map((function(n){return Nr(n,e,t)}))})),Vn.prototype.reject=function(e){return this.filter(qs(lo(e)))},Vn.prototype.slice=function(e,t){e=ba(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Vn(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=ba(t))<0?n.dropRight(-t):n.take(t-e)),n)},Vn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Vn.prototype.toArray=function(){return this.take(g)},Er(Vn.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=$n[i?"take"+("last"==t?"Right":""):t],s=i||/^find/.test(t);o&&($n.prototype[t]=function(){var t=this.__wrapped__,a=i?[1]:arguments,u=t instanceof Vn,c=a[0],l=u||Qs(t),f=function(e){var t=o.apply($n,Nt([e],a));return i&&h?t[0]:t};l&&n&&"function"==typeof c&&1!=c.length&&(u=l=!1);var h=this.__chain__,d=!!this.__actions__.length,p=s&&!h,g=u&&!d;if(!s&&l){t=g?t:new Vn(this);var v=e.apply(t,a);return v.__actions__.push({func:_s,args:[f],thisArg:r}),new Wn(v,h)}return p&&g?e.apply(this,a):(v=this.thru(f),p?i?v.value()[0]:v.value():v)})})),Tt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Ce[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);$n.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Qs(i)?i:[],e)}return this[n]((function(n){return t.apply(Qs(n)?n:[],e)}))}})),Er(Vn.prototype,(function(e,t){var n=$n[t];if(n){var r=n.name+"";De.call(Pn,r)||(Pn[r]=[]),Pn[r].push({name:t,func:n})}})),Pn[$i(r,2).name]=[{name:"wrapper",func:r}],Vn.prototype.clone=function(){var e=new Vn(this.__wrapped__);return e.__actions__=Ci(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ci(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ci(this.__views__),e},Vn.prototype.reverse=function(){if(this.__filtered__){var e=new Vn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Vn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Qs(e),r=t<0,i=n?e.length:0,o=function(e,t,n){var r=-1,i=n.length;for(;++r<i;){var o=n[r],s=o.size;switch(o.type){case"drop":e+=s;break;case"dropRight":t-=s;break;case"take":t=wn(t,e+s);break;case"takeRight":e=bn(e,t-s)}}return{start:e,end:t}}(0,i,this.__views__),s=o.start,a=o.end,u=a-s,c=r?a:s-1,l=this.__iteratees__,f=l.length,h=0,d=wn(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return vi(e,this.__actions__);var p=[];e:for(;u--&&h<d;){for(var g=-1,v=e[c+=t];++g<f;){var m=l[g],y=m.iteratee,_=m.type,b=y(v);if(2==_)v=b;else if(!b){if(1==_)continue e;break e}}p[h++]=v}return p},$n.prototype.at=bs,$n.prototype.chain=function(){return ys(this)},$n.prototype.commit=function(){return new Wn(this.value(),this.__chain__)},$n.prototype.next=function(){this.__values__===r&&(this.__values__=ya(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?r:this.__values__[this.__index__++]}},$n.prototype.plant=function(e){for(var t,n=this;n instanceof Hn;){var i=Wo(n);i.__index__=0,i.__values__=r,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t},$n.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Vn){var t=e;return this.__actions__.length&&(t=new Vn(this)),(t=t.reverse()).__actions__.push({func:_s,args:[ss],thisArg:r}),new Wn(t,this.__chain__)}return this.thru(ss)},$n.prototype.toJSON=$n.prototype.valueOf=$n.prototype.value=function(){return vi(this.__wrapped__,this.__actions__)},$n.prototype.first=$n.prototype.head,st&&($n.prototype[st]=function(){return this}),$n}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(ft._=gn,define((function(){return gn}))):dt?((dt.exports=gn)._=gn,ht._=gn):ft._=gn}).call(this)})),o("kyEFX").register(JSON.parse('{"5ZPII":"index.3341d10f.js","8OQ7p":"icons.e1dca464.svg","43rp0":"lenta-night.8df2844e.png","kO8nb":"lenta2-night.5295ac9b.png","5UbS1":"index.21bfe85c.css"}'));o("bRlFp");var s={},a={};a=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var u,c={},l={};u="object"==typeof t&&t&&t.Object===Object&&t;var f="object"==typeof self&&self&&self.Object===Object&&self,h=u||f||Function("return this")();c=function(){return l.Date.now()};var d={},p={},g={},v=/\s/;g=function(e){for(var t=e.length;t--&&v.test(e.charAt(t)););return t};var m=/^\s+/;p=function(e){return e?e.slice(0,g(e)+1).replace(m,""):e};var y,_={},b={};y=(l=h).Symbol;var w={},E=Object.prototype,I=E.hasOwnProperty,S=E.toString,T=y?y.toStringTag:void 0;w=function(e){var t=I.call(e,T),n=e[T];try{e[T]=void 0;var r=!0}catch(e){}var i=S.call(e);return r&&(t?e[T]=n:delete e[T]),i};var k={},O=Object.prototype.toString;k=function(e){return O.call(e)};var A=y?y.toStringTag:void 0;b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":A&&A in Object(e)?w(e):k(e)};var R={};R=function(e){return null!=e&&"object"==typeof e};_=function(e){return"symbol"==typeof e||R(e)&&"[object Symbol]"==b(e)};var L=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,N=/^0o[0-7]+$/i,P=parseInt;d=function(e){if("number"==typeof e)return e;if(_(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=p(e);var n=C.test(e);return n||N.test(e)?P(e.slice(2),n?2:8):L.test(e)?NaN:+e};var x=Math.max,U=Math.min;s=function(e,t,n){var r,i,o,s,u,l,f=0,h=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,o=i;return r=i=void 0,f=t,s=e.apply(o,n)}function m(e){return f=e,u=setTimeout(_,t),h?v(e):s}function y(e){var n=e-l;return void 0===l||n>=t||n<0||p&&e-f>=o}function _(){var e=c();if(y(e))return b(e);u=setTimeout(_,function(e){var n=t-(e-l);return p?U(n,o-(e-f)):n}(e))}function b(e){return u=void 0,g&&r?v(e):(r=i=void 0,s)}function w(){var e=c(),n=y(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return m(l);if(p)return clearTimeout(u),u=setTimeout(_,t),v(l)}return void 0===u&&(u=setTimeout(_,t)),s}return t=d(t)||0,a(n)&&(h=!!n.leading,o=(p="maxWait"in n)?x(d(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=l=i=u=void 0},w.flush=function(){return void 0===u?s:b(c())},w};var D={};Object.defineProperty(D,"__esModule",{value:!0}),D.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};const M={};var B=M;document.querySelectorAll("[data-id]").forEach((e=>{M[e.dataset.id]=e}));var j;function F(){const e=`<div class="rectangle">\n        <div class="notification-text">\n        <svg class="notification-icon">\n        <use href="${n(j)}#icon-info"></use>\n        </svg>\n        <span> Please enter more than 2 characters </span>\n        </div>\n        </div>`;B.notifix.innerHTML=e}function q(){const e=`<div class="rectangle">\n        <div class="notification-text">\n        <svg class="notification-icon">\n        <use href="${n(j)}#icon-rupor"></use>\n        </svg>\n        <span> Please enter a correction request </span>\n        </div>\n        </div>`;B.notifix.innerHTML=e}function $(e,t){const r=`<div class="rectangle-sign">\n        <div class="notification-text-sign">\n        <svg class="notification-icon-sign">\n        <use href="${n(j)}#icon-${t}"></use>\n        </svg>\n        <span> ${e} </span>\n        </div>\n        </div>`;B.notifixSign.innerHTML=r}
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
 */j=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const z=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},H={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,u=a?e[t+2]:0,c=i>>2,l=(3&i)<<4|s>>4;let f=(15&s)<<2|u>>6,h=63&u;a||(h=64,o||(f=64)),r.push(n[c],n[l],n[f],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(z(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==s||null==a)throw Error();const u=i<<2|o>>4;if(r.push(u),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},W=function(e){return function(e){const t=z(e);return H.encodeByteArray(t,!0)}(e).replace(/\./g,"")},V=function(e){try{return H.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
class G{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
function J(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function K(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Q(){const e=J();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class Y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,X.prototype.create)}}class X{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(Z,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new Y(r,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Z=/\{\$([^}]+)}/g;
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
 */function ee(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function te(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(ne(n)&&ne(o)){if(!te(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function ne(e){return null!==e&&"object"==typeof e}
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
function re(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ie(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function oe(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function se(e,t){const n=new ae(e,t);return n.subscribe.bind(n)}class ae{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ue),void 0===r.error&&(r.error=ue),void 0===r.complete&&(r.complete=ue);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ue(){}
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
function ce(e){return e&&e._delegate?e._delegate:e}class le{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class fe{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new G;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class he{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const de=[];var pe,ge;(ge=pe||(pe={}))[ge.DEBUG=0]="DEBUG",ge[ge.VERBOSE=1]="VERBOSE",ge[ge.INFO=2]="INFO",ge[ge.WARN=3]="WARN",ge[ge.ERROR=4]="ERROR",ge[ge.SILENT=5]="SILENT";const ve={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},me=pe.INFO,ye={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},_e=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=ye[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class be{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ve[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}constructor(e){this.name=e,this._logLevel=me,this._logHandler=_e,this._userLogHandler=null,de.push(this)}}let we,Ee;const Ie=new WeakMap,Se=new WeakMap,Te=new WeakMap,ke=new WeakMap,Oe=new WeakMap;let Ae={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Se.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Te.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ce(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Re(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ee||(Ee=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ne(this),t),Ce(Ie.get(this))}:function(...t){return Ce(e.apply(Ne(this),t))}:function(t,...n){const r=e.call(Ne(this),t,...n);return Te.set(r,t.sort?t.sort():[t]),Ce(r)}}function Le(e){return"function"==typeof e?Re(e):(e instanceof IDBTransaction&&function(e){if(Se.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));Se.set(e,t)}(e),t=e,(we||(we=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Ae):e);var t}function Ce(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(Ce(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Ie.set(t,e)})).catch((()=>{})),Oe.set(t,e),t}(e);if(ke.has(e))return ke.get(e);const t=Le(e);return t!==e&&(ke.set(e,t),Oe.set(t,e)),t}const Ne=e=>Oe.get(e);function Pe(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Ce(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(Ce(s.result),e.oldVersion,e.newVersion,Ce(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const xe=["get","getKey","getAll","getAllKeys","count"],Ue=["put","add","delete","clear"],De=new Map;function Me(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(De.get(t))return De.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ue.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!xe.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return De.set(t,o),o}Ae=(e=>({...e,get:(t,n,r)=>Me(t,n)||e.get(t,n,r),has:(t,n)=>!!Me(t,n)||e.has(t,n)}))(Ae);
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
class Be{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const je=new be("@firebase/app"),Fe={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},qe=new Map,$e=new Map;function ze(e,t){try{e.container.addComponent(t)}catch(n){je.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function He(e){const t=e.name;if($e.has(t))return je.debug(`There were multiple attempts to register component ${t}.`),!1;$e.set(t,e);for(const t of qe.values())ze(t,e);return!0}function We(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const Ve=new X("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class Ge{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new le("app",(()=>this),"PUBLIC"))}}
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
 */function Je(e="[DEFAULT]"){const t=qe.get(e);if(!t)throw Ve.create("no-app",{appName:e});return t}function Ke(e,t,n){var r;let i=null!==(r=Fe[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void je.warn(e.join(" "))}He(new le(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Qe=null;function Ye(){return Qe||(Qe=Pe("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Ve.create("storage-open",{originalErrorMessage:e.message})}))),Qe}async function Xe(e,t){var n;try{const n=(await Ye()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,Ze(e)),n.done}catch(e){throw Ve.create("storage-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}}function Ze(e){return`${e.name}!${e.options.appId}`}
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
 */class et{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=tt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=tt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),rt(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=W(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function tt(){return(new Date).toISOString().substring(0,10)}class nt{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await Ye()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ze(e))}catch(e){throw Ve.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function rt(e){return W(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var it;it="",He(new le("platform-logger",(e=>new Be(e)),"PRIVATE")),He(new le("heartbeat",(e=>new et(e)),"PRIVATE")),Ke("@firebase/app","0.7.28",it),Ke("@firebase/app","0.7.28","esm2017"),Ke("fire-js","");
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
Ke("firebase","9.9.0","app");function ot(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function st(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const at=st,ut=new X("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ct=new be("@firebase/auth");function lt(e,...t){ct.logLevel<=pe.ERROR&&ct.error(`Auth (9.9.0): ${e}`,...t)}
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
 */function ft(e,...t){throw pt(e,...t)}function ht(e,...t){return pt(e,...t)}function dt(e,t,n){const r=Object.assign(Object.assign({},at()),{[t]:n});return new X("auth","Firebase",r).create(t,{appName:e.name})}function pt(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ut.create(e,...t)}function gt(e,t,...n){if(!e)throw pt(t,...n)}function vt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw lt(t),new Error(t)}function mt(e,t){e||vt(t)}
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
 */const yt=new Map;function _t(e){mt(e instanceof Function,"Expected a class definition");let t=yt.get(e);return t?(mt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,yt.set(e,t),t)}
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
function bt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function wt(){return"http:"===Et()||"https:"===Et()}function Et(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function It(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(wt()||K()||"connection"in navigator))||navigator.onLine}
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
class St{get(){return It()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,mt(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
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
 */function Tt(e,t){mt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class kt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Ot={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},At=new St(3e4,6e4);
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
 */function Rt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Lt(e,t,n,r,i={}){return Ct(e,i,(async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const s=re(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),kt.fetch()(Pt(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ct(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ot),t);try{const t=new xt(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ut(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ut(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw Ut(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw Ut(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw dt(e,a,s);ft(e,a)}}catch(t){if(t instanceof Y)throw t;ft(e,"network-request-failed")}}async function Nt(e,t,n,r,i={}){const o=await Lt(e,t,n,r,i);return"mfaPendingCredential"in o&&ft(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Pt(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Tt(e.config,i):`${e.config.apiScheme}://${i}`}class xt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ht(this.auth,"network-request-failed"))),At.get())}))}}function Ut(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ht(e,t,r);return i.customData._tokenResponse=n,i}
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
function Dt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Mt(e){return 1e3*Number(e)}function Bt(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return lt("JWT malformed, contained fewer than 3 sections"),null;try{const e=V(r);return e?JSON.parse(e):(lt("Failed to decode base64 JWT payload"),null)}catch(e){return lt("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
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
async function jt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Y&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Ft{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class qt{_initializeTime(){this.lastSignInTime=Dt(this.lastLoginAt),this.creationTime=Dt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function $t(e){var t;const n=e.auth,r=await e.getIdToken(),i=await jt(e,async function(e,t){return Lt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));gt(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=ot(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(u=e.providerData,c=s,[...u.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var u,c;const l=e.isAnonymous,f=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),h=!!l&&f,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new qt(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,d)}
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
class zt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){gt(e.idToken,"internal-error"),gt(void 0!==e.idToken,"internal-error"),gt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Bt(e);return gt(t,"internal-error"),gt(void 0!==t.exp,"internal-error"),gt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return gt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Ct(e,{},(async()=>{const n=re({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=Pt(e,r,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",kt.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new zt;return n&&(gt("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(gt("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(gt("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zt,this.toJSON())}_performRefresh(){return vt("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function Ht(e,t){gt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Wt{async getIdToken(e){const t=await jt(this,this.stsTokenManager.getToken(this.auth,e));return gt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ce(e),r=await n.getIdToken(t),i=Bt(r);gt(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Dt(Mt(i.auth_time)),issuedAtTime:Dt(Mt(i.iat)),expirationTime:Dt(Mt(i.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ce(e);await $t(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(gt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){gt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await $t(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jt(this,async function(e,t){return Lt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,u,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,f=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(u=t.createdAt)&&void 0!==u?u:void 0,m=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:E}=t;gt(y&&E,e,"internal-error");const I=zt.fromJSON(this.name,E);gt("string"==typeof y,e,"internal-error"),Ht(l,e.name),Ht(f,e.name),gt("boolean"==typeof _,e,"internal-error"),gt("boolean"==typeof b,e,"internal-error"),Ht(h,e.name),Ht(d,e.name),Ht(p,e.name),Ht(g,e.name),Ht(v,e.name),Ht(m,e.name);const S=new Wt({uid:y,auth:e,email:f,emailVerified:_,displayName:l,isAnonymous:b,photoURL:d,phoneNumber:h,tenantId:p,stsTokenManager:I,createdAt:v,lastLoginAt:m});return w&&Array.isArray(w)&&(S.providerData=w.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new zt;r.updateFromServerResponse(t);const i=new Wt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await $t(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=ot(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ft(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qt(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */class Vt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Vt.type="NONE";const Gt=Vt;
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
 */function Jt(e,t,n){return`firebase:${e}:${t}:${n}`}class Kt{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Kt(_t(Gt),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||_t(Gt);const o=Jt(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const r=Wt._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new Kt(i,e,n)):new Kt(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Jt(this.userKey,r.apiKey,i),this.fullPersistenceKey=Jt("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Qt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(en(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Yt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(nn(t))return"Blackberry";if(rn(t))return"Webos";if(Xt(t))return"Safari";if((t.includes("chrome/")||Zt(t))&&!t.includes("edge/"))return"Chrome";if(tn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Yt(e=J()){return/firefox\//i.test(e)}function Xt(e=J()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Zt(e=J()){return/crios\//i.test(e)}function en(e=J()){return/iemobile/i.test(e)}function tn(e=J()){return/android/i.test(e)}function nn(e=J()){return/blackberry/i.test(e)}function rn(e=J()){return/webos/i.test(e)}function on(e=J()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function sn(){return Q()&&10===document.documentMode}function an(e=J()){return on(e)||tn(e)||rn(e)||nn(e)||/windows phone/i.test(e)||en(e)}
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
function un(e,t=[]){let n;switch(e){case"Browser":n=Qt(J());break;case"Worker":n=`${Qt(J())}-${e}`;break;default:n=e}return`${n}/JsCore/9.9.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class cn{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class ln{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return gt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await $t(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ce(e):null;return t&&gt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&gt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_t(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new X("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;gt(t,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return gt(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return gt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=un(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hn(this),this.idTokenSubscription=new hn(this),this.beforeStateQueue=new cn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ut,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function fn(e){return ce(e)}class hn{get next(){return gt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=se((e=>this.observer=e))}}
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
class dn{toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,t){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function pn(e,t){return Lt(e,"POST","/v1/accounts:update",t)}
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
class gn extends dn{static _fromEmailAndPassword(e,t){return new gn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new gn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithPassword",Rt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithEmailLink",Rt(e,t))}(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return pn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithEmailLink",Rt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
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
 */async function vn(e,t){return Nt(e,"POST","/v1/accounts:signInWithIdp",Rt(e,t))}
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
 */class mn extends dn{static _fromParams(e){const t=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=ot(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new mn(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return vn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,vn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=re(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const yn={USER_NOT_FOUND:"user-not-found"};
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
class _n extends dn{static _fromVerification(e,t){return new _n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new _n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithPhoneNumber",Rt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Nt(e,"POST","/v1/accounts:signInWithPhoneNumber",Rt(e,t));if(n.temporaryProof)throw Ut(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Nt(e,"POST","/v1/accounts:signInWithPhoneNumber",Rt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),yn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new _n({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class bn{static parseLink(e){const t=function(e){const t=ie(oe(e)).link,n=t?ie(oe(t)).deep_link_id:null,r=ie(oe(e)).deep_link_id;return(r?ie(oe(r)).link:null)||r||n||t||e}(e);try{return new bn(t)}catch(e){return null}}constructor(e){var t,n,r,i,o,s;const a=ie(oe(e)),u=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);gt(u&&c&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
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
class wn{static credential(e,t){return gn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=bn.parseLink(t);return gt(n,"argument-error"),gn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=wn.PROVIDER_ID}}wn.PROVIDER_ID="password",wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class En{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class In extends En{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class Sn extends In{static credential(e){return mn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Sn.PROVIDER_ID="facebook.com";
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
class Tn extends In{static credential(e,t){return mn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Tn.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Tn.GOOGLE_SIGN_IN_METHOD="google.com",Tn.PROVIDER_ID="google.com";
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
class kn extends In{static credential(e){return mn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}kn.GITHUB_SIGN_IN_METHOD="github.com",kn.PROVIDER_ID="github.com";
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
class On extends In{static credential(e,t){return mn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return On.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function An(e,t){return Nt(e,"POST","/v1/accounts:signUp",Rt(e,t))}
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
 */On.TWITTER_SIGN_IN_METHOD="twitter.com",On.PROVIDER_ID="twitter.com";class Rn{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Wt._fromIdTokenResponse(e,n,r),o=Ln(n);return new Rn({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ln(n);return new Rn({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Ln(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Cn extends Y{static _fromErrorAndOperation(e,t,n,r){return new Cn(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Cn.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Nn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Cn._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function Pn(e,t,n=!1){const r=await jt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Rn._forOperation(e,"link",r)}
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
async function xn(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const r=await jt(e,Nn(i,o,t,e),n);gt(r.idToken,i,"internal-error");const s=Bt(r.idToken);gt(s,i,"internal-error");const{sub:a}=s;return gt(e.uid===a,i,"user-mismatch"),Rn._forOperation(e,o,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&ft(i,"user-mismatch"),e}}
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
 */async function Un(e,t,n=!1){const r="signIn",i=await Nn(e,r,t),o=await Rn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Dn(e,t){return Un(fn(e),t)}async function Mn(e,t,n){const r=fn(e),i=await An(r,{returnSecureToken:!0,email:t,password:n}),o=await Rn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function Bn(e,t,n){return Dn(ce(e),wn.credential(t,n))}
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
 */function jn(e){return ce(e).signOut()}new WeakMap;
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
class Fn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class qn extends Fn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);sn()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=J();return Xt(e)||on(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=an(),this._shouldAllowMigration=!0}}qn.type="LOCAL";const $n=qn;
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
 */class zn extends Fn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}zn.type="SESSION";const Hn=zn;
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
class Wn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Wn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Vn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Wn.receivers=[];class Gn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const u=Vn("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function Jn(){return window}
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
function Kn(){return void 0!==Jn().WorkerGlobalScope&&"function"==typeof Jn().importScripts}class Qn{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Yn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Xn(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Qn(e).toPromise()}(),t(await Xn()))}))}))}async function Zn(e,t,n){const r=Yn(e,!0).put({fbase_key:t,value:n});return new Qn(r).toPromise()}function er(e,t){const n=Yn(e,!0).delete(t);return new Qn(n).toPromise()}class tr{async _openDb(){return this.db||(this.db=await Xn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wn._getInstance(Kn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Gn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xn();return await Zn(e,"__sak","1"),await er(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Zn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Yn(e,!1).get(t),r=await new Qn(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>er(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Yn(e,!1).getAll();return new Qn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}tr.type="LOCAL";const nr=tr;
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
 */function rr(e){return new Promise(((t,n)=>{const r=document.createElement("script");
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
var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ht("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)}))}function ir(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
ir("rcb"),new St(3e4,6e4);async function or(e,t,n){var r;const i=await n.verify();try{let o;if(gt("string"==typeof i,e,"argument-error"),gt("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){gt("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return Lt(e,"POST","/v2/accounts/mfaEnrollment:start",Rt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{gt("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;gt(n,e,"missing-multi-factor-info");const s=await function(e,t){return Lt(e,"POST","/v2/accounts/mfaSignIn:start",Rt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Lt(e,"POST","/v1/accounts:sendVerificationCode",Rt(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class sr{verifyPhoneNumber(e,t){return or(this.auth,e,ce(t))}static credential(e,t){return _n._fromVerification(e,t)}static credentialFromResult(e){const t=e;return sr.credentialFromTaggedObject(t)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?_n._fromTokenResponse(t,n):null}constructor(e){this.providerId=sr.PROVIDER_ID,this.auth=fn(e)}}
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
function ar(e,t){return t?_t(t):(gt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */sr.PROVIDER_ID="phone",sr.PHONE_SIGN_IN_METHOD="phone";class ur extends dn{_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function cr(e){return Un(e.auth,new ur(e),e.bypassAuthState)}function lr(e){const{auth:t,user:n}=e;return gt(n,t,"internal-error"),xn(n,new ur(e),e.bypassAuthState)}async function fr(e){const{auth:t,user:n}=e;return gt(n,t,"internal-error"),Pn(n,new ur(e),e.bypassAuthState)}
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
 */class hr{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cr;case"linkViaPopup":case"linkViaRedirect":return fr;case"reauthViaPopup":case"reauthViaRedirect":return lr;default:ft(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const dr=new St(2e3,1e4);class pr extends hr{async executeNotNull(){const e=await this.execute();return gt(e,this.auth,"internal-error"),e}async onExecution(){mt(1===this.filter.length,"Popup operations only handle one event");const e=Vn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ht(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,dr.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}}pr.currentPopupAction=null;
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
const gr=new Map;class vr extends hr{async execute(){let e=gr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=_r(t),r=yr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}gr.set(this.auth._key(),e)}return this.bypassAuthState||gr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function mr(e,t){gr.set(e._key(),t)}function yr(e){return _t(e._redirectPersistence)}function _r(e){return Jt("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function br(e,t,n=!1){const r=fn(e),i=ar(r,t),o=new vr(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}class wr{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ir(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ir(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ht(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Er(e))}saveEventToCache(e){this.cachedEventUids.add(Er(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Er(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ir({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Sr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tr=/^https?/;async function kr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Lt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Or(e))return}catch(e){}ft(e,"unauthorized-domain")}function Or(e){const t=bt(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Tr.test(n))return!1;if(Sr.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Ar=new St(3e4,6e4);function Rr(){const e=Jn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Lr=null;function Cr(e){return Lr=Lr||function(e){return new Promise(((t,n)=>{var r,i,o;function s(){Rr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Rr(),n(ht(e,"network-request-failed"))},timeout:Ar.get()})}if(null===(i=null===(r=Jn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Jn().gapi)||void 0===o?void 0:o.load)){const t=ir("iframefcb");return Jn()[t]=()=>{gapi.load?s():n(ht(e,"network-request-failed"))},rr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Lr=null,e}))}(e),Lr}
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
 */const Nr=new St(5e3,15e3),Pr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ur(e){const t=e.config;gt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Tt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.9.0"},i=xr.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${re(r).slice(1)}`}
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
const Dr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Mr{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Br(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},Dr),{width:r.toString(),height:i.toString(),top:o,left:s}),c=J().toLowerCase();n&&(a=Zt(c)?"_blank":n),Yt(c)&&(t=t||"http://localhost",u.scrollbars="yes");const l=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=J()){var t;return on(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new Mr(null);const f=window.open(t||"",a,l);gt(f,e,"popup-blocked");try{f.focus()}catch(e){}return new Mr(f)}function jr(e,t,n,r,i,o){gt(e.config.authDomain,e,"auth-domain-config-required"),gt(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.9.0",eventId:i};if(t instanceof En){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",ee(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof In){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Tt(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${re(a).slice(1)}`}const Fr=class{async _openPopup(e,t,n,r){var i;mt(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Br(e,jr(e,t,n,bt(),r),Vn())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=jr(e,t,n,bt(),r),Jn().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(mt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Cr(e),n=Jn().gapi;return gt(n,e,"internal-error"),t.open({where:document.body,url:Ur(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=ht(e,"network-request-failed"),o=Jn().setTimeout((()=>{r(i)}),Nr.get());function s(){Jn().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}(e),n=new wr(e);return t.register("authEvent",(t=>{gt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),ft(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return an()||Xt()||on()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hn,this._completeRedirectFn=br,this._overrideRedirectResult=mr}};var qr;
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
class $r{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){gt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
function zr(e=Je()){const t=We(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=We(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(te(n.getOptions(),null!=t?t:{}))return e;ft(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Fr,persistence:[nr,$n,Hn]})}qr="Browser",He(new le("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=n.options;return((e,n)=>{gt(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),gt(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:qr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:un(qr)},s=new ln(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_t);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),He(new le("auth-internal",(e=>{const t=fn(e.getProvider("auth").getImmediate());return new $r(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ke("@firebase/auth","0.20.5",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(qr)),Ke("@firebase/auth","0.20.5","esm2017");(Io=o("kEUo3")).pad;const Hr={formSignIn:document.querySelector("#form-sign-in"),formSignUp:document.querySelector("#form-sign-up")};let Wr={};function Vr(e){Wr[e.target.name]=e.target.value,localStorage.setItem("register-form-state",JSON.stringify(Wr))}Hr.formSignIn.addEventListener("submit",(async function(e){e.preventDefault();const{email:{value:t},password:{value:n}}=e.target;if(!t||!n)return Jr("noValidForm");Bn(Gr,t,n).then((e=>{const t=e.user;ni.currentUser=t,ni.authSuccess(t),Qr(),Jr("signInSuccess",t)})).catch((e=>{Jr("signInFaild",e.message.split(": ")[1])}))})),Hr.formSignUp.addEventListener("submit",(async function(e){e.preventDefault();const{email:{value:t},password:{value:n},agreement:{checked:r}}=e.target;if(!t||!n||!r)return Jr("noValidForm");Mn(Gr,t,n).then((e=>{const t=e.user;ni.currentUser=t,Jr("registerSuccess",t),function(e){for(const t in e)delete e[t];localStorage.removeItem("register-form-state")}(Wr),ni.authSuccess(t),Zr(),Xr()})).catch((e=>{e.code;const t=e.message.split(": ")[1];console.error(t),Jr("registerFaild",t)})),e.currentTarget.reset()})),Hr.formSignIn.addEventListener("input",Vr),Hr.formSignUp.addEventListener("input",Vr),window.addEventListener("load",(function(){Wr=JSON.parse(localStorage.getItem("register-form-state")),Wr?function(e){for(const t in e)Hr.formSignIn[t].value=e[t]}(Wr):Wr={}})),window.addEventListener("load",(function(){Wr=JSON.parse(localStorage.getItem("register-form-state")),Wr?function(e){for(const t in e)Hr.formSignUp[t].value=e[t]}(Wr):Wr={}}));!function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Ve.create("bad-app-name",{appName:String(r)});const i=qe.get(r);if(i){if(te(e,i.options)&&te(n,i.config))return i;throw Ve.create("duplicate-app",{appName:r})}const o=new he(r);for(const e of $e.values())o.addComponent(e);const s=new Ge(e,n,o);qe.set(r,s)}({apiKey:"AIzaSyCFrUsAa2GnJsQSsnbY7n2RsUa4nEwcnLw",authDomain:"test-accaunts.firebaseapp.com",databaseURL:"https://test-accaunts-default-rtdb.firebaseio.com",projectId:"test-accaunts",storageBucket:"test-accaunts.appspot.com",messagingSenderId:"438814438695",appId:"1:438814438695:web:19b67e8971090cb7cda502"});const Gr=zr();function Jr(e,t){switch("Error (auth/user-not-found)."===t?t="Enter the correct login":"Error (auth/wrong-password)."===t?t="Enter the correct password":"Password should be at least 6 characters (auth/weak-password)."===t?t="Password should be at least 6 characters":"Error (auth/email-already-in-use)."===t&&(t="User already registered"),e){case"registerSuccess":$(`${t.email} register was success and you have been sign in`,"info");break;case"registerFaild":case"signInFaild":$(`${t}`,"rupor");break;case"signInSuccess":$(`${t.email} you have been sign in`,"info");break;case"noValidForm":$("Please, fill all form fields","info");break;case"logOut":$(`${t} was loged out`,"rupor")}}const Kr={formSignIn:document.querySelector("#form-sign-in"),formSignUp:document.querySelector("#form-sign-up"),modalWrapperSignIn:document.querySelector("[data-modal-sign-in]"),modalWrapperSignUp:document.querySelector("[data-modal-sign-up]"),modalGreetings:document.querySelector("[data-modal-greetings]"),buttonAuth:document.querySelector("#btn-auth"),buttonClose:null,inputCheck:document.querySelector("#agreement"),buttonChangeModal:null,buttonCloseGreetings:null};function Qr(){document.querySelector('[data-id = "auth"]');Kr.modalWrapperSignIn.classList.toggle("is-hidden")}function Yr(){jn(zr()).then((()=>{document.querySelector(".enter-btn").innerHTML="<p>Check in</p>",Jr("logOut",B.placeForName.innerText),B.placeForName.innerHTML="",Kr.buttonCloseSignIn.addEventListener("click",Qr),Kr.buttonCloseSignIn.removeEventListener("click",Yr),ni.currentUser=null})).catch((e=>{console.log(e)}))}function Xr(){const e=Kr.modalWrapperSignUp;e.classList.contains("is-hidden")?(e.classList.remove("is-hidden"),window.addEventListener("keydown",ti)):(e.classList.add("is-hidden"),window.removeEventListener("keydown",ti))}function Zr(){Kr.modalGreetings.classList.toggle("is-hidden")}function ei(){Xr(),Qr()}function ti(e){if("Escape"!==e.code)return;let t=Kr.modalWrapperSignUp;t.classList.contains("is-hidden")||(console.log("SignUp"),Xr()),t=Kr.modalWrapperSignIn,t.classList.contains("is-hidden")||(console.log("SignIn"),Qr())}Kr.buttonCloseSignIn=document.querySelector("[data-modal-close-sign-in]"),Kr.buttonCloseSignIn.addEventListener("click",Qr),Kr.buttonCloseSignUp=document.querySelector("[data-modal-close-sign-up]"),Kr.buttonCloseSignUp.addEventListener("click",Xr),Kr.buttonChangeToSignIn=document.getElementById("btn-open-sign-in"),Kr.buttonChangeToSignIn.addEventListener("click",ei),Kr.buttonChangeToSignUp=document.getElementById("btn-open-register"),Kr.buttonChangeToSignUp.addEventListener("click",ei),Kr.buttonCloseGreetings=document.querySelector("[data-modal-close-greetings]"),Kr.buttonCloseGreetings.addEventListener("click",Zr);class ni{static init(){this.button=document.querySelector('[data-id = "auth"]'),this.libraryContent=document.querySelector(".movies-card"),this.menuAuth=document.querySelector(".enter-btn"),this.button.addEventListener("click",Qr)}static authSuccess({email:e}){B.placeForName.innerHTML=`<p>${e.split("@")[0]}</p>`,this.menuAuth.innerHTML="<p>LOG OUT</p>",this.button.removeEventListener("click",Qr),this.button.addEventListener("click",Yr)}constructor(){n(D)(this,"button",null),n(D)(this,"menuAuth",null),n(D)(this,"libraryContent",null),n(D)(this,"currentUser",null)}}ni.init();const ri=new class{async getOneMovie(e){if(this.message="OK!",!e)return void(this.message="There is no search query");const t="movie/"+ +e,n=new URLSearchParams({append_to_response:"videos"});return this.getMovies(t,n)}async getSearchQuery(e,t){return e?await this.getMoviesByTitle(e,t):await this.getPopularMovies(t)}async getMoviesByTitle(e,t){if(this.message="OK!",!e)return void(this.message="Empty request");if(t<1)return void(this.message="Small value page");if(this.query&&t>this.totalPage)return void(this.message="Great value page");const n=new URLSearchParams({page:t||1,query:e}),r=await this.getMovies("search/movie",n);return r?(this.query=e,r):void 0}async getPopularMovies(e){return await this.SearchMoviesByCategory("trending/movie/week",e)}async getTopRated(e){return await this.SearchMoviesByCategory("movie/top_rated",e)}async getUpcoming(e){return await this.SearchMoviesByCategory("movie/upcoming",e)}async SearchMoviesByCategory(e,t){if(this.message="OK!",t<1)return void(this.message="Small value page");if(1!==this.totalPage&&t>this.totalPage)return void(this.message='Great value "page"');const n=new URLSearchParams({page:t||1});return await this.getMovies(e,n)}createUrl(e,t){const n=t||"";return"https://api.themoviedb.org/3/"+e+"?"+new URLSearchParams({api_key:"833791a5e754a1f0443be5fc62646bdb",include_adult:!1,language:this.langauge})+"&"+n}async fetchMovies(e){try{return await fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}catch(e){return void(this.message=e.message)}}async getMovies(e,t){const n=this.createUrl(e,t),r=await this.fetchMovies(n);return"movie/"===e.slice(0,6)?r||void(this.message="No information found"):r&&0!==r.results.length?(this.data=r,this.page=r.page,this.totalPage=r.total_pages,r):void(this.message="No information found")}async getGenres(){const e=this.createUrl("genre/movie/list"),{genres:t}=await this.fetchMovies(e);return t}async galleryData(){this.genres=await this.getGenres()}constructor(){this.page=1,this.totalPage=1,this.data={},this.query="",this.message="",this.genres=this.galleryData(),this.langauge="en-US"}};function ii(e){if(!e||0===e.length)return"No genre";const t="Other";let n=0,r="";for(;n<e.length;){const{name:i}=ri.genres.find((t=>{if(t.id===+e[n])return t}));if(n+=1,r){if(r.length+i.length>=24-(t.length+2)){r+=", Other";break}r+=", "+i}else r+=i}return r}function oi(e){const{id:t,title:n,poster_path:r,release_date:i,vote_average:o,genre_ids:s}=e,a=Number(o).toFixed(1),u=(null==i?void 0:i.slice(0,4))||"";return`<li class="movies-card__item" data-card-id="${t}">\n            <div class="movies-card__thumb">\n              <img\n              \n                src="https://image.tmdb.org/t/p/w500/${r}"\n                onError="this.onerror=null;this.src='https://subscribenow.com.au/time/asia/Solo/Content/Images/noCover.gif';"\n                alt="${n}"\n                loading="lazy"\n              />\n            </div>\n            <div class="movies-card__content">\n              <h2 class="movies-card__heading">${n}</h2>\n              <p class="movies-card__text">\n                ${ii(s)} | ${u}\n                <span class="movies-card__rating">${a}</span>\n              </p>\n            </div>\n          </li>`}const si=document.querySelector(".icon-list"),ai=(document.querySelector(".search-form"),[...si.children]),ui={on:function(){ai.forEach((e=>{e.classList.remove("is-hidden"),e.classList.add("animate__zoomIn");let t=e.children[0];t.classList.add("animate__flash"),t.classList.add("animate__delay-5s")}));for(let e=0;e<ai.length;e++)ai[e].classList.add(`animate__delay-${e}s`)},off:function(){si.classList.contains("blockSreen")&&si.classList.remove("blockSreen"),ai.forEach((e=>{e.classList.add("is-hidden"),e.classList.remove("animate__zoomIn");let t=e.children[0];t.classList.remove("animate__flash"),t.classList.remove("animate__delay-5s")}));for(let e=0;e<ai.length;e++)ai[e].classList.remove(`animate__delay-${e}s`)}};function ci(e){const t=e.map(oi).join("");B.moviesCard.innerHTML=t}const li=document.querySelector(".movies-filter__list");li.addEventListener("click",(async function(e){let t;if(ri.page=1,"popular"===e.target.dataset.id&&"BUTTON"===e.target.nodeName){if(t=await ri.getPopularMovies(ri.page),ri.totalPage=t.total_pages,fi.classList.add("movies-filter__button--current"),di.classList.remove("movies-filter__button--current"),hi.classList.remove("movies-filter__button--current"),1===t.total_pages)return void(Ji.innerHTML="");ci(t.results)}if("future"===e.target.dataset.id&&"BUTTON"===e.target.nodeName){if(t=await ri.getUpcoming(ri.page),ri.totalPage=t.total_pages,di.classList.add("movies-filter__button--current"),fi.classList.remove("movies-filter__button--current"),hi.classList.remove("movies-filter__button--current"),1===t.total_pages)return void(Ji.innerHTML="");ci(t.results)}if("rating"===e.target.dataset.id&&"BUTTON"===e.target.nodeName){if(t=await ri.getTopRated(ri.page),ri.totalPage=t.total_pages,hi.classList.add("movies-filter__button--current"),fi.classList.remove("movies-filter__button--current"),di.classList.remove("movies-filter__button--current"),1===t.total_pages)return void(Ji.innerHTML="");ci(t.results)}Qi(ri.totalPage,ri.page)}));const fi=document.querySelector('[data-id="popular"]'),hi=document.querySelector('[data-id="rating"]'),di=document.querySelector('[data-id="future"]');function pi(){li.classList.remove("visually-hidden")}function gi(e){e.preventDefault(),fi.classList.remove("movies-filter__button--current"),hi.classList.remove("movies-filter__button--current"),di.classList.remove("movies-filter__button--current");const t=e.currentTarget.elements.query.value.trim();t.length<=2||0===t.length?F():(ui.on(),si.classList.add("blockSreen"),Xi(),async function(e){const t=ri.totalPage,n=await ri.getSearchQuery(e,1);if(!n)return Xi(),ui.off(),B.searchForm.reset(),void q();const r=n.results.map((e=>oi(e))).join("");B.moviesCard.innerHTML=r,ui.off(),t>=2&&Qi(ri.totalPage,ri.page)}(t),B.moviesCard.innerHTML="")}B.searchForm=document.querySelector(".search-form");const vi=document.querySelector(".js-active-header"),mi=document.querySelector(".logo__name"),yi=document.querySelector(".background__main");let _i,bi,wi="homePage";function Ei(){Zi()}function Ii(){wi="homePage",B.home.classList.add("side-nav__link--current"),B.library.classList.remove("side-nav__link--current"),B.header.classList.remove("header-bg-lib"),B.logoLink.setAttribute("style","cursor:default"),mi.classList.add("reveal-text"),mi.classList.remove("rise-text"),yi.classList.remove("background__main--lib")}function Si(){vi.innerHTML=`<form class="search-form" data-id="searchForm">\n            <input\n              type="text"\n              name="query"\n              autocomplete="off"\n              data-id="searchQuery"\n              placeholder="Movie search"\n              class="search-field"\n            />\n            <button type="submit" class="search-btn" data-id="searchBtn">\n              <svg class="search-icon" width="12" height="12">\n                <use href="${j}#icon-search"></use>\n              </svg>\n            </button>\n          </form>`}Si(),B.home.classList.add("side-nav__link--current"),B.logoLink.setAttribute("style","cursor:default"),mi.classList.add("reveal-text"),yi.classList.remove("background__main--lib"),B.searchForm=document.querySelector(".search-form"),B.searchForm.addEventListener("submit",gi),B.home.addEventListener("click",(e=>{e.preventDefault(),Xi(),pi(),"homePage"!==wi&&(Ii(),Si(),B.searchForm=document.querySelector(".search-form"),B.searchForm.addEventListener("submit",gi),Ei())})),B.library.addEventListener("click",(e=>{e.preventDefault(),Xi(),li.classList.add("visually-hidden"),"libraryPage"!==wi&&(wi="libraryPage",B.library.classList.add("side-nav__link--current"),B.home.classList.remove("side-nav__link--current"),B.header.classList.add("header-bg-lib"),B.logoLink.setAttribute("style","cursor:pointer;"),mi.classList.remove("reveal-text"),mi.classList.add("rise-text"),yi.classList.add("background__main--lib"),vi.innerHTML='<div class="buttons-wrapper"><button\n            type="button"\n            class="library__buttons"\n            data-id="watchedBtn"\n          >\n            Watched\n          </button>\n          <button type="button" class="library__buttons" data-id="queueBtn">\n            Queue\n          </button></div>',_i=document.querySelector('[data-id="watchedBtn"]'),bi=document.querySelector('[data-id="queueBtn"]'),_i.addEventListener("click",Oi),bi.addEventListener("click",Ai),ki())})),B.logoLink.addEventListener("click",(e=>{e.preventDefault(),pi(),"libraryPage"===wi&&(Ii(),Si(),Ei())}));let Ti="Watched";function ki(){"Watched"===Ti&&_i.dispatchEvent(new Event("click")),"Queue"===Ti&&bi.dispatchEvent(new Event("click"))}function Oi(){_i.classList.add("library__button--active"),bi.classList.remove("library__button--active"),Ti="Watched",Ui(Mi.watchedFilm)}function Ai(){bi.classList.add("library__button--active"),_i.classList.remove("library__button--active"),Ti="Queue",Ui(Mi.filmInQueue)}function Ri(){const e=document.querySelector(".side-nav__link--current").dataset.id;if("home"!==e&&"library"===e){document.querySelector(".library__button--active").dataset.id;const e=B.paginationList.querySelector(".pagination__button--current");if(!e)return ki();Yi({target:e})}}let Li,Ci,Ni,Pi;function xi(e){return 0===e.length&&(Xi(),document.querySelector(".movies-card").innerHTML=`<div class="content__wrapper">\n        <h2 class="content__title">There's nothing here! <br/>\n          Please add some movies to\n          <span class="content__text">${Ti}</span>!\n        </h2>\n      </div>`,!0)}function Ui(e){const t=JSON.parse(localStorage.getItem(e))||[];if(xi(t))return void Xi();Li=Math.ceil(t.length/20);const n=function(e,t){let n=[];for(let r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n}(t,20);Qi(Li,1),ci(n[0])}function Di(){Ci=document.querySelector(".add-to-watched"),Ni=document.querySelector(".add-to-queue"),Pi=document.querySelector(".film-card"),Ci.addEventListener("click",Bi,{once:!0}),Ni.addEventListener("click",Fi),function(e){const t=JSON.parse(localStorage.getItem(e));if(null===t)return;for(let e of t)if(Pi.dataset.id===e.id)return void qi()}(Mi.watchedFilm),function(e){const t=JSON.parse(localStorage.getItem(e));if(null===t)return;for(let e of t)if(Pi.dataset.id===e.id)return void $i()}(Mi.filmInQueue)}const Mi={watchedFilm:"watchedFilm",filmInQueue:"filmInQueue"};function Bi(){Hi(Mi.watchedFilm),qi()}function ji(){"remove from watched"===Ci.textContent&&(Wi(Mi.watchedFilm),Ci.style.backgroundColor="#FFF",Ci.style.border="1px solid #FF6B08",Ci.textContent="add to watched",Ni.disabled=!1,Ni.style.opacity=1),Ci.removeEventListener("click",ji),Ci.addEventListener("click",Bi)}function Fi(){Hi(Mi.filmInQueue),$i()}function qi(){Ci.textContent="remove from watched",Ci.style.backgroundColor="#FF6B01",Ci.style.border="none",Ni.disabled=!0,Ni.style.opacity=.25,Ci.addEventListener("click",ji)}function $i(){Ni.textContent="remove from queue",Ni.style.backgroundColor="#FF6B01",Ni.style.border="none",Ci.style.opacity=.25,Ci.disabled=!0,Ni.addEventListener("click",zi)}function zi(){"remove from queue"===Ni.textContent&&(Wi(Mi.filmInQueue),Ni.style.backgroundColor="#FFF",Ni.style.border="1px solid #FF6B08",Ni.style.color="black",Ni.textContent="add to queue",Ni.disabled=!1,Ci.disabled=!1,Ci.style.opacity=1),Ni.removeEventListener("click",zi)}function Hi(e){const t=JSON.parse(localStorage.getItem(e))||[],n={...Pi.dataset};n.genre_ids=Pi.dataset.genre.split(","),t.push(n),localStorage.setItem(e,JSON.stringify(t)),Ri()}function Wi(e){const t=function(e){return e.filter((e=>e.id!==Pi.dataset.id))}(JSON.parse(localStorage.getItem(e)));localStorage.setItem(e,JSON.stringify(t)),Ri()}Gi();function Vi(e){const t=location.href,n=new URL(t);n.searchParams.set("page",e),history.pushState({},"",n.toString())}function Gi(){const e=location.href,t=new URL(e).searchParams.get("page");return null!=t?t:1}addEventListener("popstate",(function(e){e.preventDefault(),setTimeout((async function(){const e=await ri.getSearchQuery(ri.query,Gi());Qi(ri.totalPage,e.page),ci(e.results)}),0)}),!1);const Ji=B.paginationList,Ki=B.paginationWrapper;function Qi(e,t){let n,r="",i=t-2,o=t+2;e<=1?Xi():(Ki.classList.remove("visually-hidden"),Ji.classList.remove("visually-hidden")),t>1&&(r+=`<li>\n    <button class="pagination__button" data-page="${t-1}"><</button>\n  </li>`),t>3&&(r+='<li>\n    <button class="pagination__button pagination__button--js" data-page="1">1</button>\n  </li>'),t>4&&(r+='<li class="pagination__dots">...</li>');for(let s=i;s<=o;s++)if(!(s<=0)){if(s>e)break;n=s===t?"pagination__button--current":"",r+=`<li>\n    <button class="pagination__button ${n} pagination__button--js" data-page="${s}">${s}</button>\n  </li>`}t<e-3&&(r+='<li class="pagination__dots">...</li>'),t<e-2&&(r+=`<li>\n    <button class="pagination__button pagination__button--js" data-page="${e}">${e}</button>\n  </li>`),t<e&&(r+=`<li>\n    <button class="pagination__button" data-page="${t+1}">></i></button>\n  </li>`),Ji.innerHTML=r,Ji.addEventListener("click",Yi)}async function Yi(e){const t=document.querySelector(".side-nav__link--current").dataset.id;var n;const r=null!==(n=document.querySelector(".movies-filter__button--current"))&&void 0!==n?n:"default";if(!e.target.dataset.page)return;const i=+e.target.dataset.page;if(B.moviesCard.innerHTML="",history.pushState({page:1},"title 1",`?page=${i}`),Vi(i),"home"===t&&"default"===r){const e=await ri.getSearchQuery(ri.query,i);Qi(ri.totalPage,i),ci(e.results)}else if("home"===t&&"popular"===r.dataset.id){const e=await ri.getSearchQuery(ri.query,i);Qi(ri.totalPage,i),ci(e.results)}else if("home"===t&&"rating"===r.dataset.id){const e=await ri.getTopRated(i);Qi(ri.totalPage,i),ci(e.results)}else if("home"===t&&"future"===r.dataset.id){const e=await ri.getUpcoming(i);Qi(ri.totalPage,i),ci(e.results)}else if("library"===t){const e="watchedBtn"===document.querySelector(".library__button--active").dataset.id?Mi.watchedFilm:Mi.filmInQueue;if(!localStorage.getItem(e))return console.error(e);const t=JSON.parse(localStorage.getItem(e));if(xi(t))return void Xi();Qi(Math.ceil(t.length/20),i);let n=t.slice(20*(i-1),20*i);0===n.length&&(n=t.slice(20*(i-2),20*(i-1))),ci(n)}}function Xi(){Ji.innerHTML="",Ki.classList.add("visually-hidden"),Ji.classList.add("visually-hidden")}async function Zi(){B.moviesCard.innerHTML="";let e=await ri.getSearchQuery(ri.query,ri.page);1!==e.total_pages?(ci(e.results),Qi(ri.totalPage,ri.page)):Ji.innerHTML=""}!async function(){await ri.galleryData(),Zi()}(),o("kEUo3");var eo={};let to,no,ro;function io(e){const t=e.results;to=document.querySelector(".btn-trailer"),to.classList.add("is-hidden"),t.find((e=>{"YouTube"===e.site&&to.classList.remove("is-hidden")})),to.addEventListener("click",(()=>{!function(e){const t=e.find((e=>"YouTube"===e.site)).key,n=eo.create(`\n    <iframe src="https://www.youtube.com/embed/${t}" width="" height="" frameborder="0" class = "trailer-size"></iframe>\n`);no=n.show,ro=n.close,window.addEventListener("keydown",oo),no()}(t)}))}function oo(e){"Escape"===e.code&&(window.removeEventListener("keydown",oo),ro())}eo=function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var u=void 0;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};t[s][0].call(l.exports,(function(e){return i(t[s][1][e]||e)}),l,l.exports,e,t,n,r)}return n[s].exports}for(var o=void 0,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},o=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=o,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return o.appendChild(e)}));var s=i(o,"IMG"),a=i(o,"VIDEO"),u=i(o,"IFRAME");return!0===s&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===u&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),s=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===o(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&s()}));var a={element:function(){return n},visible:function(){return o(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:s};return a}},{}]},{},[1])(1);const so={filmModal:document.querySelector(".modal-film"),closeModalFilm:document.querySelector(".modal-film-close__btn"),backdropFilmModal:document.querySelector(".js-backdrop-film-modal"),filmCardTemplate:document.querySelector(".movies-card")};function ao(){window.removeEventListener("keydown",uo),document.body.classList.remove("show-film-modal"),so.filmModal.innerHTML=""}function uo(e){document.querySelector(".trailer-size")||"Escape"===e.code&&ao()}so.backdropFilmModal.addEventListener("click",(function(e){e.currentTarget===e.target&&ao()})),so.filmCardTemplate.addEventListener("click",(function(){window.addEventListener("keydown",uo),event.preventDefault();const e=event.target.parentNode.parentNode.dataset.cardId;if(!e)return;document.body.classList.add("show-film-modal"),async function(e){await ri.getOneMovie(e).then((e=>{const{original_title:t,id:r,title:i,poster_path:o,release_date:s,vote_average:a,vote_count:u,popularity:c,overview:l,genres:f,tags:h,videos:d}=e,p=Object.values(f);let g=[],v=[];for(const e of p)g.push(e.name),v.push(e.id);const m=`<div class="film-card"\n            data-id = '${r}'\n            data-title = '${i}'\n            data-poster_path = '${o}'\n            data-release_date="${s}"\n            data-vote_average = '${a}'\n            data-genre = '${v}'\n            >\n               <button type="button" class="modal-film-close__btn" data-action="close-modal" data-id="modalFilmCloseBtn">\n            <svg class="modal-film__vector" width="18" height="18">\n                <use href="${n(j)}#icon-close"></use>\n            </svg>\n        </button>\n            <div class="film-info-container">\n                <div class="btn-wrapper-trailer">\n  <button type="button" class="btn-trailer" data-id="trailerBtn">\n    <div class="btn-trailer-overlay-text">\n      <h3 class="btn-trailer-text">Watch Trailer</h3>\n    </div>\n  </button>\n  <img loading="lazy"\n    class="film-poster-img"\n    src="https://image.tmdb.org/t/p/w500/${o}"\n    onError="this.onerror=null;this.src='https://subscribenow.com.au/time/asia/Solo/Content/Images/noCover.gif';"\n    alt="${h}"\n    loading="lazy"/>\n    </div>\n            <div class="value-films">\n            <h2 class="name-film">${t}</h2>\n            <table>\n            <tbody><tr><td class="info-film"">Vote / Votes</td><td class="info-value"><span class="vote">${a.toFixed(1)}\n            </span> / <span class="vote-count">${u}</span> </td></tr>\n            <tbody><tr><td class="info-film"">Popularity</td><td class="info-value">${c}</td></tr>\n            <tbody><tr><td class="info-film"">Original Title</td><td class="info-value original-title">${t}</td></tr>\n            <tbody><tr><td class="info-film"">Genre</td><td class="info-value genres-film">${g.join(", ")}</td></tr>\n                </table>\n            <h3 class="about-film-title">about</h3>\n            <p><span class="about-film-text">${l}</span></p>\n            <div class="modal-btn-wrapper">\n            <button type="button" class="film-modal-btn add-to-watched">add to watched</button>\n            <button type="button" class="film-modal-btn add-to-queue">add to queue</button>\n            </div>\n            </div>\n            </div>\n            </div>`;so.filmModal.innerHTML=m,so.closeModalFilm=document.querySelector(".modal-film-close__btn"),so.closeModalFilm.addEventListener("click",ao),Di(),io(d)}))}(+e)}));const co={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:null,modal:document.querySelector("[data-modal]"),modalContent:document.querySelector(".team-modal-wrapper"),list:document.querySelector(".team-modal__list"),front:document.querySelector(".wrap-front"),back:document.querySelector(".wrap-back")};co.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&ho()})),co.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",po),co.closeModalBtn.removeAttribute("disabled"),document.body.classList.add("show-modal"),co.modalContent.style.opacity=1;let e=250;fo(),lo.forEach((t=>{e+=250,setTimeout((()=>{t.firstElementChild.style.transform="rotateY(360deg)",t.lastElementChild.style.transform="rotateY(180deg)"}),e)}))})),co.closeModalBtn=document.querySelector("[data-modal-close]"),co.closeModalBtn.addEventListener("click",ho);const lo=[...co.list.children];function fo(){co.modal.classList.toggle("visually-hidden")}function ho(){window.removeEventListener("keydown",po),co.closeModalBtn.setAttribute("disabled","disabled"),document.body.classList.remove("show-modal"),co.modalContent.style.opacity=1;let e=150;setTimeout(fo,2e3),lo.forEach((t=>{e+=150,setTimeout((()=>{co.modalContent.style.opacity-=.05,t.firstElementChild.style.transform="rotateY(180deg)",t.lastElementChild.style.transform="rotateY(360deg)"}),e)}))}function po(e){"Escape"===e.code&&ho()}var go;go=new URL(o("kyEFX").resolve("43rp0"),import.meta.url).toString();var vo;vo=new URL(o("kyEFX").resolve("kO8nb"),import.meta.url).toString();const mo=document.querySelector("body"),yo=document.querySelector("footer"),_o=document.querySelector('[data-id ="global-page-style"]'),bo={dark:0,light:1,changeToDark(){this.dark=1,this.light=0},changeToLight(){this.light=1,this.dark=0}};document.querySelector(".darktheme-btn").addEventListener("click",(function(){0===bo.dark&&(wo(),setTimeout((()=>{bo.changeToDark()}),100));0===bo.light&&(Eo(),setTimeout((()=>{bo.changeToLight()}),100))}));const wo=function(){const e=document.querySelector(".darktheme-icon__moon");document.querySelector(".darktheme-icon__sun").style.opacity=1,e.style.opacity=0,mo.style.backgroundColor="rgb(17, 17, 17)",yo.style.backgroundColor="black",""!==localStorage.getItem("THEME")&&"LIGHT"!==localStorage.getItem("THEME")||localStorage.setItem("THEME","DARK"),_o.innerHTML=`.movies-card__heading { transition: color; transition-duration: 500ms; color: white;}.content { transition: color; transition-duration: 500ms; color: #ff6b08;}.team-modal { transition: color; transition-duration: 500ms; color: #ff6b08;}.pagination { transition: background-color; transition-duration: 500ms; background-color: rgb(17, 17, 17);}.modal-film { background-color: black;}.name-film { color: white;}.info-value { color: #ff6b08;}.about-film-title { color: #ff6b08;}.about-film-text { color: #ff6b08;}.film-modal-btn {background-color: #ff6b08; }.content__title {color: black; }.modal-film-close__btn {fill: white;}.pagination__button {color:white;}.pagination__dots {color:white;}.background__main {background-image: url("${go}"); background-position: center;\n        background-repeat: repeat-y;\n        background-size: contain;\n        background-attachment: scroll, scroll;\n        background-origin: padding-box, padding-box;\n        background-clip: border-box, border-box;}.background__main--lib {background-image: url("${vo}"); background-position: center;\n        background-repeat: no-repeat;\n        background-attachment: scroll, scroll;\n        background-origin: padding-box, padding-box;\n        background-clip: border-box, border-box; }.movies-filter__button {color:white; background-color:black;}.modal-film-close__btn {fill: white;}`},Eo=function(){const e=document.querySelector(".darktheme-icon__moon"),t=document.querySelector(".darktheme-icon__sun");mo.style.backgroundColor="white",yo.style.backgroundColor="#f7f7f7",t.style.opacity=0,e.style.opacity=1,localStorage.setItem("THEME","LIGHT"),_o.innerHTML=""};"DARK"===localStorage.getItem("THEME")&&(wo(),bo.changeToDark());var Io=o("kEUo3");const So=document.querySelector(".scrolltop__btn");window.addEventListener("scroll",(0,Io.throttle)((function(){window.scrollY>200&&(So.classList.add("transitionBtn"),So.classList.remove("is-hidden-button"),So.classList.add("animate__animated"),So.classList.add("animate__bounce"));window.scrollY<200&&(So.classList.add("is-hidden-button"),So.classList.remove("animate__animated"),So.classList.remove("animate__bounce"))}),200)),So.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo(0,0)}));
//# sourceMappingURL=index.3341d10f.js.map
