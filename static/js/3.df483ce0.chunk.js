/*! For license information please see 3.df483ce0.chunk.js.LICENSE.txt */
(this["webpackJsonp5page-pwa"]=this["webpackJsonp5page-pwa"]||[]).push([[3],{33:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},34:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},35:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n=function(e){return window.localStorage.getItem(e)},r=function(e,t){return window.localStorage.setItem(e,t)}},40:function(e,t,a){e.exports={back:"style_back__2vExv","intro-scroll":"style_intro-scroll__s1hn6",introScroll:"style_introScroll__s6cx_",active:"style_active__1muV4","play-head":"style_play-head__LiQHT","play-main-container":"style_play-main-container__27FHB",intro:"style_intro__IHKNl",text:"style_text__33jMW",submit:"style_submit__k1s31","intro-modal":"style_intro-modal__uiW1P"}},41:function(e,t,a){e.exports={"grid-container":"style_grid-container__3VgXr","items-container":"style_items-container__3GbiG",item:"style_item__1N6zb",active:"style_active__2iBTE",selected:"style_selected__37mMx",standard:"style_standard__1QpZg"}},42:function(e,t,a){e.exports=a.p+"static/media/help.ca92b90a.mp4"},43:function(e,t,a){e.exports={"status-modal":"style_status-modal__2SliF",check:"style_check__2Owsq",checkedModalAnimation:"style_checkedModalAnimation__1SR4T",wrong:"style_wrong__XS9NH",wrongdModalAnimation:"style_wrongdModalAnimation__283Ez",wrongdModalAnimationStroke:"style_wrongdModalAnimationStroke__1JeM3"}},44:function(e,t,a){"use strict";a.r(t);var n=a(33);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var l=a(35),o=a(0),i=a.n(o),s=a(5),u=a(40),m=a.n(u),f=a(41),p=a.n(f),d=a(34),v=a.n(d),g=function(e){return JSON.parse(JSON.stringify(e))},b=a(13),h=function(e){var t=Object(o.useState)([]),a=Object(l.a)(t,2),r=a[0],c=a[1];return i.a.createElement("div",{className:v()(p.a["grid-container"],Object(n.a)({},p.a.standard,e.standard))},i.a.createElement("div",{className:p.a["items-container"]},e.data?e.data.grid.map((function(t,a){var l,o=g(t.css),s=g(e.data.defaultItem);return i.a.createElement("div",{key:a,onClick:function(){return a=t,void(e.standard||(r.includes(a.uuid)?c(r.filter((function(e){return e!==a.uuid}))):c([a.uuid]),e.onSelected(a.uuid)));var a},className:v()(p.a.item,(l={},Object(n.a)(l,p.a.active,t.active),Object(n.a)(l,p.a.selected,r.includes(t.uuid)),l))},i.a.createElement("span",{style:Object.assign(s,o)}))})):i.a.createElement(b.a,null)))},y=a(36),O=function(){var e=Object(o.useState)({}),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)(""),c=Object(l.a)(r,2),i=c[0],u=c[1],m=Object(s.f)().search;return Object(o.useEffect)((function(){var e={},t="";m.replace("?","").split("&").forEach((function(a){var n=a.split("="),r=Object(l.a)(n,2),c=r[0],o=void 0===c?"":c,i=r[1],s=void 0===i?"":i;e[o]=s,t+="/".concat(o,"/").concat(decodeURIComponent(s))})),n(e),u(t)}),[m]),{queryParams:a,queryParamsAsArgs:i}},E=a(42),_=a.n(E),j=a(43),w=a.n(j);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=i.a.createElement("g",null,i.a.createElement("path",{d:"m354.53 546.88h-0.15234c-52.883-0.011719-103.86-15.664-147.41-45.27-20.988-14.273-39.789-31.488-55.879-51.156-16.211-19.82-29.391-41.805-39.18-65.352-2.3203-5.5664 0.32812-11.988 5.8945-14.297 1.3438-0.55859 2.7578-0.84375 4.1992-0.84375 4.4297 0 8.3984 2.6484 10.094 6.7383 37.484 90.094 124.72 148.3 222.25 148.3h0.17578c2.7773 0 5.4141 1.0391 7.4492 2.9219l0.085938 0.085937c0.011718 0 0.011718 0.011719 0.011718 0.011719l0.023438 0.023438c0.023437 0.011719 0.03125 0.03125 0.054687 0.042969 0.011719 0.011718 0.023438 0.023437 0.023438 0.023437l0.20703 0.20703c0.011719 0.023438 0.042969 0.042969 0.066406 0.074219l0.011719 0.011719c0.27344 0.28516 0.52344 0.57812 0.75391 0.88672 0.14453 0.17578 0.26172 0.35156 0.39453 0.52344 0 0.011719 0 0.023438 0.011719 0.023438l0.023438 0.03125c0.011719 0.023437 0.023437 0.042968 0.03125 0.066406l-0.03125 0.042968 0.054687-0.03125 0.085938 0.14063c0.011718 0.023437 0.023437 0.042968 0.03125 0.066406 0.023437 0.023437 0.03125 0.042968 0.042968 0.066406 0.011719 0.011719 0.023438 0.03125 0.03125 0.042969l0.042969 0.085937c0.011719 0.011719 0.011719 0.023438 0.023438 0.023438 0.98438 1.6641 1.5078 3.5781 1.5195 5.5234v0.03125 0.042969c-0.011719 2.8555-1.1172 5.5547-3.1172 7.6016 0 0.011719-0.011718 0.023438-0.023437 0.023438-0.023437 0.023438-0.042969 0.042969-0.054687 0.066406l-0.066407 0.066406c-0.011719 0.011719-0.03125 0.023438-0.042969 0.03125-2.0352 2-4.7344 3.1055-7.5898 3.1172l-0.046875 0.003906zm49.043-4.8125c-5.1953 0-9.7031-3.707-10.707-8.8047-0.57031-2.8672 0.011719-5.7852 1.6289-8.2148 1.6289-2.4297 4.1016-4.0781 6.9688-4.6484 0.69922-0.14062 1.4219-0.20703 2.1445-0.20703 5.1953 0 9.7031 3.707 10.707 8.8047 1.1719 5.918-2.6797 11.691-8.5977 12.863-0.71094 0.14062-1.4219 0.20703-2.1445 0.20703zm47.195-14.316c-4.4414 0-8.3984-2.6484-10.105-6.7383-1.1172-2.7031-1.125-5.6758 0-8.3789 1.1055-2.7031 3.2148-4.8008 5.9062-5.9297 90.18-37.449 148.45-124.72 148.43-222.32v-0.28516-0.28516c-0.011719-6.0273 4.8789-10.949 10.906-10.961l0.03125 0.003906c6.0156 0 10.914 4.8906 10.938 10.906v0.62109c-0.011719 52.906-15.672 103.91-45.316 147.47-14.285 21.012-31.512 39.812-51.199 55.902-19.84 16.211-41.836 29.391-65.406 39.168-1.332 0.54688-2.7422 0.83203-4.1875 0.83203zm-343.12-183.07c-5.1953 0-9.7031-3.707-10.719-8.8047-0.57031-2.8672 0.011718-5.7852 1.6289-8.2148 1.6172-2.4297 4.0898-4.0781 6.957-4.6484 0.71094-0.14062 1.4336-0.20703 2.1562-0.20703 5.1953 0 9.7031 3.6953 10.707 8.8047 0.57031 2.8672-0.011718 5.7734-1.6289 8.2031-1.6172 2.4297-4.0898 4.0781-6.957 4.6602-0.71484 0.13281-1.4336 0.20703-2.1445 0.20703zm-4.8242-49.062h-0.011719c-6.0273 0-10.926-4.8984-10.938-10.926v-0.30859c0.011719-52.859 15.641-103.81 45.227-147.35 14.262-20.988 31.457-39.789 51.109-55.879 19.797-16.211 41.77-29.391 65.297-39.188 1.3438-0.55859 2.7578-0.84375 4.1992-0.84375 4.4297 0 8.3984 2.6484 10.094 6.7383 2.3203 5.5664-0.31641 11.977-5.8828 14.297-90.023 37.516-148.18 124.74-148.17 222.23v0.28516c0 2.9219-1.125 5.6641-3.1953 7.7344-2.0664 2.0742-4.8125 3.2148-7.7305 3.2148zm498.2-49.941c-5.1836 0-9.6914-3.6953-10.707-8.793-0.011718 0-0.011718-0.011719-0.011718-0.011719-0.57031-2.8672 0.011718-5.7734 1.6289-8.2031 1.6172-2.4297 4.0898-4.0781 6.957-4.6602 0.71094-0.14062 1.4336-0.20703 2.1562-0.20703 5.1836 0 9.6914 3.6953 10.719 8.793 1.1797 5.9062-2.668 11.68-8.5859 12.863-0.70312 0.14062-1.4336 0.21875-2.1562 0.21875zm-14.383-47.152c-4.4297 0-8.3984-2.6367-10.094-6.7266-37.539-89.93-124.73-148.04-222.14-148.04h-0.48047c-6.0156 0-10.926-4.8984-10.938-10.914 0-2.9219 1.125-5.6758 3.1953-7.7422 2.0547-2.0664 4.8008-3.2031 7.7109-3.2148h0.011719 0.14062 0.32812c52.828 0.011719 103.75 15.629 147.29 45.184 20.988 14.25 39.781 31.422 55.867 51.066 16.207 19.773 29.398 41.727 39.199 65.242 2.3281 5.5664-0.31641 11.977-5.875 14.305-1.3438 0.55469-2.7656 0.83984-4.207 0.83984zm-281.77-149.9h-0.011719c-5.1953 0-9.7031-3.6953-10.719-8.793-0.57031-2.8672 0.011719-5.7852 1.6289-8.2148 1.6172-2.4297 4.0898-4.0781 6.957-4.6602 0.71094-0.14062 1.4336-0.20703 2.1562-0.20703 5.1953 0 9.7031 3.6953 10.719 8.8047 1.1797 5.9062-2.6797 11.68-8.5859 12.863-0.71094 0.14062-1.4336 0.20703-2.1445 0.20703z"}),i.a.createElement("path",{d:"m354.48 481.25c-6.0391 0-10.938-4.9102-10.938-10.938 0-2.9219 1.125-5.668 3.1953-7.7344 2.0664-2.0664 4.8125-3.2031 7.7344-3.2031 96.445-0.042969 174.91-78.555 174.9-175v-0.38281c-0.011718-2.9297 1.125-5.6758 3.1836-7.7422 2.0664-2.0781 4.8125-3.2148 7.7305-3.2266l0.019531-0.003907c6.0156 0 10.926 4.8984 10.938 10.914v0.4375c0 26.566-5.207 52.348-15.465 76.605-4.9336 11.672-11.035 22.914-18.133 33.434-7.043 10.422-15.125 20.223-24.031 29.129-8.9023 8.9141-18.703 16.996-29.117 24.039-10.523 7.1094-21.766 13.223-33.426 18.156-24.258 10.277-50.027 15.492-76.594 15.516zm-48.113-6.2578c-0.95312 0-1.9023-0.12109-2.8203-0.37109-5.8281-1.5547-9.3086-7.5586-7.7539-13.387 1.2812-4.7812 5.6211-8.1289 10.566-8.1289 0.94141 0 1.8906 0.13281 2.8203 0.37109 5.8281 1.5547 9.2969 7.5703 7.7539 13.387-1.2812 4.793-5.625 8.1289-10.566 8.1289zm-44.867-18.559c-1.9141 0-3.7969-0.50391-5.4688-1.4648-29.398-16.977-54.074-41.43-71.344-70.711-8.7383-14.809-15.5-30.711-20.07-47.25-4.7266-17.062-7.1211-34.773-7.1211-52.633 0-17.523 2.3086-34.914 6.8594-51.691 4.418-16.273 10.938-31.938 19.371-46.562 1.9453-3.3672 5.5898-5.4688 9.4844-5.4688 1.9141 0 3.7969 0.50391 5.457 1.4648 2.5391 1.4531 4.3438 3.8164 5.0977 6.6406 0.76562 2.8203 0.37109 5.7656-1.082 8.3008-15.25 26.438-23.312 56.625-23.312 87.316 0 62.301 33.555 120.41 87.586 151.65h0.023437c3.3789 1.957 5.4688 5.6016 5.4688 9.5039-0.011719 1.9023-0.51562 3.7852-1.4648 5.4375-1.957 3.3789-5.5898 5.4688-9.4844 5.4688zm272.41-209.64c-4.9219 0-9.2656-3.3125-10.555-8.0703v-0.011718c-1.5742-5.8281 1.8906-11.844 7.7109-13.41 0.94141-0.25 1.8906-0.38281 2.8555-0.38281 4.9336 0 9.2734 3.3242 10.555 8.0938 1.5664 5.8203-1.8906 11.836-7.7109 13.41-0.94141 0.25-1.9023 0.37109-2.8555 0.37109zm-18.66-44.789c-3.8945 0-7.5156-2.0781-9.4727-5.4375-31.281-53.777-89.293-87.191-151.39-87.191-30.867 0-61.195 8.1367-87.73 23.539-1.6641 0.96094-3.5664 1.4766-5.4805 1.4766-3.8945 0-7.5156-2.0898-9.4727-5.4453-0.95312-1.6523-1.4648-3.5312-1.4766-5.4375-0.011718-3.9062 2.0664-7.5586 5.4453-9.5156 14.668-8.5195 30.406-15.094 46.746-19.555 16.855-4.6055 34.332-6.9336 51.941-6.9336l0.015625-0.003906c17.816 0 35.48 2.3828 52.5 7.0781 16.492 4.5625 32.363 11.277 47.152 19.973 29.227 17.184 53.66 41.75 70.668 71.027 3.0312 5.2188 1.2578 11.922-3.9609 14.953-1.6641 0.96875-3.5664 1.4727-5.4805 1.4727zm-292.52-37.996c-2.9219 0-5.6641-1.1367-7.7344-3.1953-4.2656-4.2656-4.2773-11.199-0.011719-15.465 2.0664-2.0781 4.8125-3.2148 7.7422-3.2148 2.9102 0 5.6562 1.125 7.7227 3.1953 2.0664 2.0547 3.2031 4.8008 3.2148 7.7227 0 2.9297-1.1367 5.6758-3.1953 7.7422-2.0625 2.0664-4.8164 3.2148-7.7383 3.2148z"}),i.a.createElement("path",{className:"checked",d:"m310.62 382.81c-0.15625 0-0.3125-0.003906-0.46484-0.011719-3.9727-0.16797-7.5391-2.4805-9.3203-6.0391l-43.75-87.5c-2.7031-5.4023-0.51172-11.973 4.8906-14.672 5.4023-2.6992 11.973-0.51172 14.676 4.8906l34.926 69.852 110.02-180.04c3.1523-5.1523 9.8828-6.7812 15.035-3.6289 5.1523 3.1484 6.7773 9.8828 3.6289 15.035l-120.31 196.88c-1.9883 3.2617-5.5273 5.2344-9.3281 5.2344z"})),N=function(e){var t=e.svgRef,a=e.title,n=P(e,["svgRef","title"]);return i.a.createElement("svg",S({width:"700pt",height:"700pt",viewBox:"0 0 700 700",ref:t},n),a?i.a.createElement("title",null,a):null,k)},x=i.a.forwardRef((function(e,t){return i.a.createElement(N,S({svgRef:t},e))}));a.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var R=i.a.createElement("g",null,i.a.createElement("path",{d:"m450.24 280 145.04-145.04c27.441-27.441 27.441-72.238 0-100.24-27.441-27.441-72.238-27.441-100.24 0l-145.04 145.04-145.04-145.04c-27.441-27.441-72.238-27.441-100.24 0-27.441 27.441-27.441 72.238 0 100.24l145.04 145.04-145.04 145.04c-27.441 27.441-27.441 72.238 0 100.24 14 14 31.922 20.719 49.84 20.719 17.922 0 36.398-6.7188 49.84-20.719l145.6-145.04 145.04 145.04c14 14 31.922 20.719 49.84 20.719 17.922 0 36.398-6.7188 49.84-20.719 27.441-27.441 27.441-72.238 0-100.24z"})),I=function(e){var t=e.svgRef,a=e.title,n=A(e,["svgRef","title"]);return i.a.createElement("svg",z({width:"700pt",height:"700pt",viewBox:"0 0 700 700",ref:t},n),a?i.a.createElement("title",null,a):null,R)},M=i.a.forwardRef((function(e,t){return i.a.createElement(I,z({svgRef:t},e))})),T=(a.p,function(e){var t=e.state,a=void 0===t?"wrong":t;return i.a.createElement(i.a.Fragment,null,"wrong"===a&&i.a.createElement("div",{className:v()(w.a["status-modal"],w.a.wrong)},i.a.createElement(M,null),i.a.createElement("span",null,i.a.createElement(M,null))),"win"===a&&i.a.createElement("div",{className:v()(w.a["status-modal"],w.a.check)},i.a.createElement(x,null)))});t.default=Object(s.g)((function(e){var t=Object(o.useRef)(null),a=Object(o.useState)({}),r=Object(l.a)(a,2),s=r[0],u=r[1],f=Object(o.useState)(Object(y.a)("intro")?"":"intro"),p=Object(l.a)(f,2),d=p[0],g=p[1],b=Object(o.useState)(!1),E=Object(l.a)(b,2),j=E[0],w=E[1],S=Object(o.useState)({}),P=Object(l.a)(S,2),k=P[0],N=P[1],x=O().queryParams;Object(o.useEffect)((function(){t.current&&""===d&&(w(!0),setTimeout((function(){w(!1)}),1500))}),[d]),Object(o.useEffect)((function(){t.current&&(t.current.scrollLeft=0)}),[e.location]),Object(o.useEffect)((function(){x.level&&fetch("/5page/level/".concat(x.level,".json")).then((function(e){return e.json()})).then((function(e){N(e)}))}),[x.level]);var z=function(e,t){s[t]&&s[t].includes(e)?u(c({},s,Object(n.a)({},t,s[t].filter((function(t){return t!==e}))))):u(c({},s,Object(n.a)({},t,[e])))};if(x.level){var A=k;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:v()(m.a["intro-scroll"],Object(n.a)({},m.a.active,j))},"scroll horizontally"),i.a.createElement("div",{className:m.a["play-head"]},i.a.createElement("button",{className:m.a.back,onClick:function(){e.history.push("/",{from:"play"})}}),i.a.createElement("h4",null,"Level ",x.level)),i.a.createElement("div",{ref:t,className:v()(m.a["play-main-container"],Object(n.a)({},m.a.intro,"intro"===d))},i.a.createElement("div",{className:m.a["page-container"]},i.a.createElement("span",{className:m.a.text},"Standard"),i.a.createElement(h,{standard:!0,data:A.standard})),i.a.createElement("div",{className:m.a["page-container"]},i.a.createElement("span",{className:m.a.text},"Page 1"),i.a.createElement(h,{onSelected:function(e){return z(e,1)},data:A.page1})),i.a.createElement("div",{className:m.a["page-container"]},i.a.createElement("span",{className:m.a.text},"Page 2"),i.a.createElement(h,{onSelected:function(e){return z(e,2)},data:A.page2})),i.a.createElement("div",{className:m.a["page-container"]},i.a.createElement("span",{className:m.a.text},"Page 3"),i.a.createElement(h,{onSelected:function(e){return z(e,3)},data:A.page3})),i.a.createElement("div",{className:m.a["page-container"]},i.a.createElement("span",{className:m.a.text},"Page 4"),i.a.createElement(h,{onSelected:function(e){return z(e,4)},data:A.page4})),i.a.createElement("div",{className:m.a["page-container"]},i.a.createElement("span",{className:m.a.text},"Page 5"),i.a.createElement(h,{onSelected:function(e){return z(e,5)},data:A.page5}))),!!(s.hasOwnProperty(1)&&s.hasOwnProperty(2)&&s.hasOwnProperty(3)&&s.hasOwnProperty(4)&&s.hasOwnProperty(5)&&s[1].length>0&&s[2].length>0&&s[3].length>0&&s[4].length>0&&s[5].length>0)&&i.a.createElement("button",{onClick:function(){var t=k;1===s[1].length&&1===s[2].length&&1===s[3].length&&1===s[4].length&&1===s[5].length&&t.ok[0]===s[1][0]&&t.ok[1]===s[2][0]&&t.ok[2]===s[3][0]&&t.ok[3]===s[4][0]&&t.ok[4]===s[5][0]?(g("win"),"11"!==x.level&&(e.history.push("/play?level=".concat(1*x.level+1)),u({}),setTimeout((function(){g("")}),2e3))):(g("wrong"),setTimeout((function(){g("")}),4e3))},className:m.a.submit},"Submit"),"win"===d&&i.a.createElement(T,{state:"win"}),"wrong"===d&&i.a.createElement(T,{state:"wrong"}),"intro"===d&&i.a.createElement("div",{className:m.a["intro-modal"]},i.a.createElement("h5",null,"About the game"),i.a.createElement("video",{style:{display:"none"}},i.a.createElement("source",{src:_.a,type:"video/mp4"})),"On the standard page, one item is selected from among the available boxes due to a special feature compared to the others. Find this special feature and select the item that you think has this feature on the next 5 pages.",i.a.createElement("a",{href:"https://pourghannad.github.io/5page/static/media/help.ca92b90a.mp4",rel:"noopener noreferrer",target:"_blank"},"Video"),i.a.createElement("button",{onClick:function(){g(""),Object(y.b)("intro",!0)}},"OK")))}return i.a.createElement(i.a.Fragment,null)}))}}]);
//# sourceMappingURL=3.df483ce0.chunk.js.map