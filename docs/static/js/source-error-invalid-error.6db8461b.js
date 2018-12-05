(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./source/error/InvalidError.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function l(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=p(this,s(n).call(this,e))).layout=null,t}var t,o,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;c(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"p",components:n},"Occurs when an object is passed with an invlid or missing attribute."),r.a.createElement(a.MDXTag,{name:"p",components:n},r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"new InvalidError({ attribute, expected, value, source, message })")),r.a.createElement(a.MDXTag,{name:"ul",components:n},r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"attribute")," \u2014 the attribute path (ex: 'person.name')"),r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"expected")," \u2014 the expected value"),r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"value")," \u2014 the value was passed as property"),r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"source")," \u2014 the source object (optional)"),r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"message")," \u2014 a message to be displayed to the user (optional)")),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metastring:null}},'import { InvalidError } from "@nore/std/error";\n\nfunction bundler(options) {\n    if (!isString(options.target)) {\n        throw new InvalidError({\n            attribute: "options.target",\n            source: options,\n            expected: "string",\n            value: options.target,\n        });\n    }\n\n    // ...\n}\n')))}}])&&l(t.prototype,o),i&&l(t,i),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=source-error-invalid-error.b1b5624f2c2ade6aaaee.js.map