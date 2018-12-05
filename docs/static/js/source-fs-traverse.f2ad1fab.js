(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"./source/fs/traverse.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function p(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,s(n).call(this,e))).layout=null,t}var t,o,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;c(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"p",components:n},"Traverses a given path returning an ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"array")," of files found while traversing."),r.a.createElement(a.MDXTag,{name:"p",components:n},r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"await traverse(path, options)")),r.a.createElement(a.MDXTag,{name:"ul",components:n},r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"path")," \u2014 a string containing an absolute file path"),r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"options")," \u2013 (optional object), see below")),r.a.createElement(a.MDXTag,{name:"p",components:n},"Options:"),r.a.createElement(a.MDXTag,{name:"ul",components:n},r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"depth")," \u2014 the depth of directory traversal, starting from 0")),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metastring:null}},"import { traverse } from \"@nore/std/fs\";\n\nconst files = await traverse(\"/path/to/folder\", { depth: 2 });\n\n// files => ['/path/to/file1', '/path/to/file2']\n")))}}])&&p(t.prototype,o),i&&p(t,i),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=source-fs-traverse.b1b5624f2c2ade6aaaee.js.map