!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("axios")):"function"==typeof define&&define.amd?define(["react","axios"],t):"object"==typeof exports?exports["react-component-translate"]=t(require("react"),require("axios")):e["react-component-translate"]=t(e.react,e.axios)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e,t){u.default.get(e).then(function(e){i=e.data,i=i.replace(/`/gm,'"'),i=i.replace(/,([^,]*)$/,"$1"),i=JSON.parse(i),void 0!==t&&t()})}function o(e){return void 0===i||i.length<=0||void 0===i[e]?e:i[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.loadTranslationData=r,t.getTranslation=o;var a=n(4),u=function(e){return e&&e.__esModule?e:{default:e}}(a),i=void 0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTranslation=t.loadTranslationData=void 0;var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(0);t.default=o.default,t.loadTranslationData=a.loadTranslationData,t.getTranslation=a.getTranslation},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(3),f=function(e){return e&&e.__esModule?e:{default:e}}(l),s=n(0),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.tag,n=e.children,o=r(e,["tag","children"]),a=(0,s.getTranslation)(n);if(void 0!==t){var u=t;return f.default.createElement(u,i({dangerouslySetInnerHTML:{__html:a}},o))}return f.default.createElement("span",i({dangerouslySetInnerHTML:{__html:a}},o))}}]),t}(l.Component);t.default=p},function(t,n){t.exports=e},function(e,n){e.exports=t}])});