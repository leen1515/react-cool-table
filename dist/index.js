"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(require("react"));function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function t(e){var r=e.columnsName;return r?n.default.createElement("div",{className:"cool-column-container"},r.map((function(e,r){return n.default.createElement("div",{className:"cool-column",key:r},e.Header||" ")}))):null}function o(e){var t=e.linesValues,o=e.columnsName;return t?n.default.createElement("div",{className:"cool-body-table"},t.map((function(e,t){return n.default.createElement("div",{className:"cool-row-container",key:t,role:"row","data-testid":"row-".concat(t)},o.map((function(o,l){return n.default.createElement("div",{className:"cool-cell",key:"".concat(t,"-").concat(l),"aria-label":"".concat(o.Header,": ").concat(e[o.Header]),role:"cell","data-testid":"cell-".concat(t,"-").concat(l)},null==(a=e[o.Header])?" ":"object"===r(a)?JSON.stringify(a):a.toString());var a})))}))):null}!function(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".cool-table{\r\n    display:flex;\r\n    flex-direction:column;\r\n    justify-content:space-between;\r\n    align-items:center;\r\n    border: 1px solid #000;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 12px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: #000;\r\n    background-color: #fff;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.cool-body-table{\r\n\r\n}\r\n.cool-column-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    width: 100%;\r\n\r\n}\r\n.cool-column{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n}\r\n.cool-row-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.cool-cell{\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}"),exports.CoolTable=function(e){var l=e.data;if(!l)return null;var a=function(e){var n=[];return Array.isArray(e)&&0!==e.length&&"object"===r(e[0])&&null!=e[0]?(Object.keys(e[0]).forEach((function(e){n.push({Header:e})})),n):n}(l);return n.default.createElement("div",{className:"cool-table"},n.default.createElement(t,{columnsName:a}),n.default.createElement(o,{linesValues:l,columnsName:a}))};
//# sourceMappingURL=index.js.map
