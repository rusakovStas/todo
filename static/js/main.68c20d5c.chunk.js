(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(12),o=n.n(r),i=n(9),u=n(7),l=n(24),s=n(25),j=n(26),d=n(28),b=n(27),h=(n(17),n(2));var p=function(e){var t=e.edit,n=Object(c.useState)(!1),a=Object(u.a)(n,2),r=a[0],o=a[1];return Object(h.jsx)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40%",height:"40%",viewBox:"0 0 348.882 348.882",children:Object(h.jsxs)("g",{opacity:r?"1":"0.7",onClick:function(){return t()},onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},children:[Object(h.jsx)("path",{d:"M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"}),Object(h.jsx)("path",{d:"M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"})]})})},x=function(e){var t=e.approve,n=Object(c.useState)(!1),a=Object(u.a)(n,2),r=a[0],o=a[1];return Object(h.jsx)("svg",{id:"Capa_2",height:"40%",viewBox:"0 0 512 512",width:"40%",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("g",{opacity:r?"1":"0.7",onClick:function(){return t()},onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},children:Object(h.jsx)("path",{d:"m450.585 68.552-252.065 252.065-137.105-137.104-61.415 61.415 198.52 198.52 313.48-313.48z"})})})},O=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(u.a)(r,2),O=o[0],f=o[1],m=Object(c.useState)([]),g=Object(u.a)(m,2),v=g[0],C=g[1],k=Object(c.useState)(null),w=Object(u.a)(k,2),y=w[0],S=w[1],L=Object(c.useState)(null),M=Object(u.a)(L,2),T=M[0],z=M[1];return Object(c.useEffect)((function(){console.log(v)}),[v]),Object(h.jsxs)(l.a,{children:[Object(h.jsxs)(s.a,{style:{marginTop:"10px"},children:[Object(h.jsx)(j.a,{invalid:!!T,value:n,onChange:function(e){z(null),e.target.value.length<20&&a(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430"}),Object(h.jsx)(d.a,{addonType:"append",children:Object(h.jsx)(b.a,{onClick:function(){-1===v.findIndex((function(e){return e.name===n}))?C((function(e){return e.concat({name:n,checked:!1})})):z("\u0422\u0430\u043a\u043e\u0435 \u0434\u0435\u043b\u043e \u0443\u0436\u0435 \u0435\u0441\u0442\u044c")},style:{backgroundColor:"#3a62fb"},children:"+"})})]}),T&&Object(h.jsx)("span",{style:{color:"red",fontSize:"12px"},children:T}),Object(h.jsx)("div",{style:{marginTop:"10px"},children:v.sort((function(e,t){return!e.checked&&t.checked?1:e.checked&&!t.checked?-1:e.name.localeCompare(t.name)})).map((function(e,t){return Object(h.jsxs)("div",{style:{display:"grid",justifyItems:"center",alignItems:"center",gridTemplateColumns:"50px auto 50px 50px",width:"100%",minHeight:"80px",borderBottom:"1px solid rgb(0, 0, 0, 0.2)",borderTop:"1px solid rgb(0, 0, 0, 0.2)"},children:[Object(h.jsxs)("div",{className:"round",style:{justifySelf:"flex-start"},children:[Object(h.jsx)("input",{checked:e.checked,onChangeCapture:function(){return C((function(t){return t.map((function(t,n){return t.name===e.name?Object(i.a)(Object(i.a)({},t),{},{checked:!t.checked}):t}))}))},id:"".concat(t),type:"checkbox"}),Object(h.jsx)("label",{htmlFor:"".concat(t)})]}),e.name===y?Object(h.jsx)(j.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",value:O,onChange:function(e){e.target.value.length<20&&f(e.target.value)}}):Object(h.jsx)("div",{children:e.name}),e.name===y?Object(h.jsx)(x,{approve:function(){C((function(t){return t.map((function(t,n){return t.name===e.name?Object(i.a)(Object(i.a)({},t),{},{name:O}):t}))})),S(null)}}):Object(h.jsx)(p,{edit:function(){S(e.name),f(e.name)}}),Object(h.jsx)(b.a,{close:!0,onClick:function(){e.name===y?(S(null),f("")):C((function(t){return t.filter((function(t){return t.name!==e.name}))}))}})]})}))})]})},f=(n(21),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))});o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),f()}},[[22,1,2]]]);
//# sourceMappingURL=main.68c20d5c.chunk.js.map