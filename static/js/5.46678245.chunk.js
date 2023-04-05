/*! For license information please see 5.46678245.chunk.js.LICENSE.txt */
(this["webpackJsonp5page-pwa"]=this["webpackJsonp5page-pwa"]||[]).push([[5],{31:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},32:function(t,e,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var c=typeof n;if("string"===c||"number"===c)t.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&t.push(a)}}else if("object"===c){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&t.push(u)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},33:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(34);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,c=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(i){o=!0,c=i}finally{try{n||null==u.return||u.return()}finally{if(o)throw c}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},34:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(35);function o(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},35:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},36:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=function(t){return window.localStorage.getItem(t)},o=function(t,e){return window.localStorage.setItem(t,e)}},37:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=function(t){return JSON.parse(JSON.stringify(t))};function o(t,e,r){return t.filter((function(t){return!e.find((function(e){return t[r]===e[r]}))})).concat(e)}},40:function(t,e,r){t.exports={"level-modal":"style_level-modal__3iW5a","star-wrapper":"style_star-wrapper__3SyAJ","three-star":"style_three-star__3sx8u","two-star":"style_two-star__2m5rC","one-star":"style_one-star__2BuPs",active:"style_active__4dhKs",soon:"style_soon__pj0_4"}},50:function(t,e,r){"use strict";r.r(e);var n,o=r(31),c=r(33),a=r(0),u=r.n(a),i=r(32),l=r.n(i),s=r(40),f=r.n(s),b=r(1),v=r(36),m=r(37),p=["svgRef","title"];function g(){return(g=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function d(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var y=function(t){var e=t.svgRef,r=t.title,o=d(t,p);return u.a.createElement("svg",g({width:"700pt",height:"700pt",viewBox:"0 0 700 700",ref:e},o),r?u.a.createElement("title",null,r):null,n||(n=u.a.createElement("path",{d:"m350 17.5 61.949 200.55h200.55l-162.23 123.9 61.953 200.55-162.23-123.9-162.23 123.9 61.953-200.55-162.23-123.9h200.55z"})))},w=u.a.forwardRef((function(t,e){return u.a.createElement(y,g({svgRef:e},t))}));r.p,e.default=Object(b.g)((function(t){var e=Object(a.useState)(Object(v.a)("intro")),r=Object(c.a)(e,2),n=r[0],i=r[1],s=Object(a.useState)([{number:1,count:{correct:0,wrong:0}},{number:2,count:{correct:0,wrong:0}},{number:3,count:{correct:0,wrong:0}},{number:4,count:{correct:0,wrong:0}},{number:5,count:{correct:0,wrong:0}},{number:6,count:{correct:0,wrong:0}},{number:7,count:{correct:0,wrong:0}},{number:8,count:{correct:0,wrong:0}},{number:9,count:{correct:0,wrong:0}},{number:10,count:{correct:0,wrong:0}},{number:11,count:{correct:0,wrong:0}},{number:12,count:{correct:0,wrong:0}}]),b=Object(c.a)(s,2),p=b[0],g=b[1];return Object(a.useEffect)((function(){var t=[];try{t=JSON.parse(Object(v.a)("level"))||[]}catch(r){t=[]}if(Object.keys(t).length>0){var e=Object(m.b)(p,t,"number").sort((function(t,e){return t.number<e.number?-1:1}))||p;JSON.stringify(p)!==JSON.stringify(e)&&g(e)}}),[p]),Object(a.useEffect)((function(){setTimeout((function(){i(!0)}),100)}),[]),u.a.createElement("div",{className:l()(f.a["level-modal"],Object(o.a)({},f.a.active,n))},u.a.createElement("header",null,u.a.createElement("h6",null,"LEVEL SELECT"),u.a.createElement("button",{className:f.a.back,onClick:function(){t.history.push("/",{from:"level"})}})),u.a.createElement("div",null,p.map((function(e){var r,n,c,a,i,s;return u.a.createElement("span",{key:"level-".concat(e.number),onClick:function(){return(null===e||void 0===e?void 0:e.soon)?null:t.history.push("/play?level=".concat(e.number))},className:l()(Object(o.a)({},f.a.soon,null===e||void 0===e?void 0:e.soon))},e.count.wrong||e.count.correct?u.a.createElement("div",{className:l()(f.a["star-wrapper"],(s={},Object(o.a)(s,f.a["three-star"],!(null===(r=e.count)||void 0===r?void 0:r.wrong)&&e.count.correct),Object(o.a)(s,f.a["two-star"],(null===(n=e.count)||void 0===n?void 0:n.wrong)&&(null===(c=e.count)||void 0===c?void 0:c.wrong)<2&&e.count.correct),Object(o.a)(s,f.a["one-star"],(null===(a=e.count)||void 0===a?void 0:a.wrong)&&(null===(i=e.count)||void 0===i?void 0:i.wrong)>=2&&e.count.correct),s))},u.a.createElement(w,null),u.a.createElement(w,null),u.a.createElement(w,null)):u.a.createElement(u.a.Fragment,null),e.number)}))))}))}}]);
//# sourceMappingURL=5.46678245.chunk.js.map