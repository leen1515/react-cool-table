import e from"react";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(n){var r=n.columnsName;return r?e.createElement("div",{className:"cool-column-container"},r.map((function(n,r){return e.createElement("div",{className:"cool-column",key:r},n.Header||" ")}))):null}function t(r){var t=r.linesValues,o=r.columnsName;return t?e.createElement("div",{className:"cool-body-table"},t.map((function(r,t){return e.createElement("div",{className:"cool-row-container",key:t,role:"row","data-testid":"row-".concat(t)},o.map((function(o,l){return e.createElement("div",{className:"cool-cell",key:"".concat(t,"-").concat(l),"aria-label":"".concat(o.Header,": ").concat(r[o.Header]),role:"cell","data-testid":"cell-".concat(t,"-").concat(l)},null==(c=r[o.Header])?" ":"object"===n(c)?JSON.stringify(c):c.toString());var c})))}))):null}function o(o){var l=o.data;if(!l)return null;var c=function(e){var r=[];return Array.isArray(e)&&0!==e.length&&"object"===n(e[0])&&null!=e[0]?(Object.keys(e[0]).forEach((function(e){r.push({Header:e})})),r):r}(l);return e.createElement("div",{className:"cool-table"},e.createElement(r,{columnsName:c}),e.createElement(t,{linesValues:l,columnsName:c}))}!function(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".cool-table{\r\n    display:flex;\r\n    flex-direction:column;\r\n    justify-content:space-between;\r\n    align-items:center;\r\n    border: 1px solid #000;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 12px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: #000;\r\n    background-color: #fff;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.cool-body-table{\r\n\r\n}\r\n.cool-column-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    width: 100%;\r\n\r\n}\r\n.cool-column{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n}\r\n.cool-row-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.cool-cell{\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}");export{o as CoolTable};
//# sourceMappingURL=index.es.js.map