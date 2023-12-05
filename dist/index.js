"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(require("react"));function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var t=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o={};return Object.keys(n).forEach((function(l){var a=t?"".concat(t,".").concat(l):l;"object"!==r(n[l])||null===n[l]||Array.isArray(n[l])?o[a]=n[l]:Object.assign(o,e(n[l],a))})),o};function o(e){var r=e.columnsName;return r?n.default.createElement("div",{className:"cool-column-container"},r.map((function(e,r){return n.default.createElement("div",{className:"cool-column",key:r},e.Header||" ")}))):null}function l(e){var o=e.linesValues,l=e.columnsName;return o?n.default.createElement("div",{className:"cool-body-table"},o.map((function(e,o){var a=t(e);return n.default.createElement("div",{className:"cool-row-container",key:o,role:"row","data-testid":"row-".concat(o)},l.map((function(e,t){return n.default.createElement("div",{className:"cool-cell",key:"".concat(o,"-").concat(t),"aria-label":"".concat(e.Header,": ").concat(a[e.Header]),role:"cell","data-testid":"cell-".concat(o,"-").concat(t)},null==(l=a[e.Header])?" ":"object"===r(l)?JSON.stringify(l):l.toString());var l})))}))):null}!function(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".cool-table{\r\n    display:flex;\r\n    flex-direction:column;\r\n    justify-content:space-between;\r\n    align-items:center;\r\n    border: 1px solid #000;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 12px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: #000;\r\n    background-color: #fff;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.cool-body-table{\r\n    width:100%;\r\n    height:100%;\r\n\r\n}\r\n.cool-column-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    width: 100%;\r\n\r\n}\r\n.cool-column{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n\r\n}\r\n.cool-row-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    text-align: left;\r\n    border: 1px solid #000;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.cool-cell{\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}"),exports.CoolTable=function(e){var a=e.data;if(!a)return null;var c=function(e){if(!Array.isArray(e)||0===e.length||"object"!==r(e[0])||null==e[0])return[];var n=t(e[0]);return Object.keys(n).map((function(e){return{Header:e}}))}(a);return n.default.createElement("div",{className:"cool-table"},n.default.createElement(o,{columnsName:c}),n.default.createElement(l,{linesValues:a,columnsName:c}))};
//# sourceMappingURL=index.js.map
