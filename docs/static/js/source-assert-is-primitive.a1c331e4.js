(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./source/assert/isPrimitive.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,s(t).call(this,e))).layout=null,n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components;c(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"p",components:t},"Returns ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true")," if the variable is ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://goo.gl/vVKjcW"}},"truthy")," in any way."),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js",metastring:null}},'import { isPrimitive } from "@nore/std/assert";\n\nisPrimitive(Symbol("foo"));\n// => true\n')))}}])&&u(n.prototype,r),i&&u(n,i),t}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=source-assert-is-primitive.b1b5624f2c2ade6aaaee.js.map