(this.webpackJsonppwgen=this.webpackJsonppwgen||[]).push([[0],[,,,,,,,,,function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n,r=t(1),l=t.n(r),a=t(3),s=t.n(a),u=t(4);!function(e){e.normals="abcdefghijklmnopqrstuvwxyz",e.numbers="0123456789",e.simbols="!@#$%^&*",e.specials="()_+~`|}{[]:;?><,./-="}(n||(n={}));t(9);var i,o,b=t(0),d=Object(r.forwardRef)((function(e,c){var t=e.label,n=e.id,r=e.value;return Object(b.jsxs)("label",{htmlFor:n,children:[Object(b.jsx)("input",{ref:c,type:"checkbox",id:n,value:r}),t]})})),j=(t(11),Object(r.forwardRef)((function(e,c){var t=e.id,n=e.value,r=e.title;return Object(b.jsx)("input",{className:"input__text",ref:c,id:t,type:"text",disabled:!0,value:n,title:r})})));t(12);function f(){var e=Object(r.useState)(""),c=Object(u.a)(e,2),t=c[0],l=c[1],a=Object(r.useRef)(null),s=Object(r.useRef)(null),f=Object(r.useRef)(null),h=Object(r.useRef)(null),O=Object(r.useRef)(null),v=Object(r.useRef)(null);Object(r.useEffect)((function(){a.current.checked=!0,s.current.checked=!0,f.current.checked=!0,h.current.checked=!0}),[]);return Object(b.jsxs)("form",{className:"form",children:[Object(b.jsx)(d,{id:"cb1",label:i.INCLUDE_UPPERCASE,value:"cb1",ref:a}),Object(b.jsx)(d,{id:"cb2",label:i.INCLUDE_LOWERCASE,value:"cb2",ref:s}),Object(b.jsx)(d,{id:"cb3",label:i.INCLUDE_NUMBERS,value:"cb3",ref:f}),Object(b.jsx)(d,{id:"cb4",label:i.INCLUDE_SIMBOLS,value:"cb4",ref:h}),Object(b.jsx)(d,{id:"cb5",label:i.INCLUDE_SPECIAL_CHARS,value:"cb5",ref:O}),Object(b.jsxs)("div",{className:"form__cta",children:[Object(b.jsx)("button",{className:"form__button",onClick:function(e){var c,t,r,u,i;e.preventDefault();var o=function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return Array(c<=100?c:100).fill(null).reduce((function(c){return c.concat(e.charAt(Math.floor(Math.random()*e.length)))}),"")}(function(e){var c=e.upperCase,t=e.lowerCase,r=e.numbers,l=e.simbols,a=e.specialChars,s="";return c&&(s+=n.normals.toUpperCase()),t&&(s+=n.normals.toLowerCase()),r&&(s+=n.numbers),l&&(s+=n.simbols),a&&(s+=n.specials),s.trim()}({upperCase:(null===(c=a.current)||void 0===c?void 0:c.checked)||!1,lowerCase:(null===(t=s.current)||void 0===t?void 0:t.checked)||!1,numbers:(null===(r=f.current)||void 0===r?void 0:r.checked)||!1,simbols:(null===(u=h.current)||void 0===u?void 0:u.checked)||!1,specialChars:(null===(i=O.current)||void 0===i?void 0:i.checked)||!1}),24);l(o),navigator.clipboard.writeText(o)},children:"Generate"}),Object(b.jsx)(j,{id:"result",value:t,ref:v,title:o.titleClipboard})]})]})}function h(){return Object(b.jsx)("main",{className:"container",children:Object(b.jsx)(f,{})})}!function(e){e.INCLUDE_NUMBERS="Include Numbers",e.INCLUDE_UPPERCASE="Include Uppercase",e.INCLUDE_LOWERCASE="Include Lowercase",e.INCLUDE_SIMBOLS="Include Simbols",e.INCLUDE_SPECIAL_CHARS="Include Special Characters"}(i||(i={})),function(e){e.titleClipboard="Copy to clipboard."}(o||(o={}));t(13);function O(){return Object(b.jsx)("footer",{className:"container footer",children:"With <3 by fran"})}t(14);function v(){return Object(b.jsx)("header",{className:"header container",children:Object(b.jsx)("h1",{className:"header__h1",children:"Password Generator"})})}t(15);function p(){return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(v,{}),Object(b.jsx)(h,{}),Object(b.jsx)(O,{})]})}t(16);s.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.66662d01.chunk.js.map