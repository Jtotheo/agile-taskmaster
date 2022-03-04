(this["webpackJsonpegen-trello"]=this["webpackJsonpegen-trello"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),r=n.n(s),l=(n(12),n(13),n(0));function o(){return Object(l.jsx)("h2",{className:"mainHeader",children:"Agile Taskmaster"})}var i=n(3),u=n(2);function d(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),o=Object(u.a)(r,2),d=o[0],j=o[1],b=Object(c.useState)(""),h=Object(u.a)(b,2),p=h[0],m=h[1],O=Object(c.useState)([]),x=Object(u.a)(O,2),f=x[0],g=x[1],v=Object(c.useState)(["red"]),N=Object(u.a)(v,2),k=N[0],y=N[1];function C(e){e.dataTransfer.setData("text",e.target.id)}function w(e,t,n){var c=Object(i.a)(e);return c[t]=n,c}var D=f.map((function(e,t){return Object(l.jsxs)("div",{id:t,className:"card ".concat(k[t]),draggable:"true",onDragStart:C,children:[Object(l.jsx)("button",{className:"deleteButtonCard",onClick:function(){return function(e){var t=prompt("If you wish to delete the task, type 'delete'");t&&"delete"===t.toLocaleLowerCase()&&e.remove()}(document.getElementById("".concat(t)))},children:"Delete"}),Object(l.jsx)("button",{className:"changeColorButton",onClick:function(){return function(e){return console.log(k,k[e]),"red"===k[e]?y(w(k,e,"yellow")):"yellow"===k[e]?y(w(k,e,"green")):y(w(k,e,"red"))}(t)},children:"Change color"}),Object(l.jsxs)("div",{className:"taskInfo",children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsx)("p",{children:e.subject}),Object(l.jsx)("p",{children:e.auth})]})]},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"taskInput",children:[0===f.length?Object(l.jsx)("p",{className:"instructions",children:"Now create a taskcard, and drag it to the appropriate container!"}):1===f.length?Object(l.jsx)("p",{className:"instructions",children:"Drag and drop your card in the appropriate container, after which, you may create a new task card."}):2===f.length?Object(l.jsx)("p",{className:"instructions",children:"You can delete either the column, or the task card, by clicking the delete button in the upper left corners!"}):"",Object(l.jsxs)("div",{className:"inputfieldTask",children:[Object(l.jsx)("input",{className:"inputField",type:"text",placeholder:"Task",value:a,onChange:function(e){s(e.target.value)}}),Object(l.jsx)("input",{className:"inputField",type:"text",placeholder:"Subject",value:d,onChange:function(e){j(e.target.value)}}),Object(l.jsx)("input",{className:"inputField",type:"text",placeholder:"Responsible",value:p,onChange:function(e){m(e.target.value)}}),Object(l.jsx)("button",{className:"inputFieldButton",onClick:function(){a&&(g([].concat(Object(i.a)(f),[{title:a||"",subject:d||"",auth:p||""}])),s(""),j(""),m(""),y([].concat(Object(i.a)(k),["red"])))},children:"Create task"})]})]}),Object(l.jsx)("div",{children:D})]})}function j(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),o=Object(u.a)(r,2),j=o[0],b=o[1],h=Object(c.useState)(!1),p=Object(u.a)(h,2),m=p[0],O=p[1];function x(e){e.preventDefault()}function f(e){e.preventDefault();var t=e.dataTransfer.getData("text");e.target.appendChild(document.getElementById(t))}var g=j.map((function(e,t){return Object(l.jsxs)("div",{className:"column",onDragOver:x,onDrop:f,children:[Object(l.jsx)("h3",{className:"columnHeader",children:e}),Object(l.jsx)("button",{className:"columnDeleteButt",onClick:function(){!function(e){var t=prompt("If you wish to delete the column as well as contained tasks, type 'delete'. If you only wish to delete the column please move the tasks to another column first.");if(t&&"delete"===t.toLocaleLowerCase()){var n=j.filter((function(t,n){return n!==e?t:""}));b(n)}}(t)},children:"Delete"})]},e+t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"inputFieldsContainer",children:[Object(l.jsxs)("div",{className:"containerInput",children:[0===j.length?Object(l.jsx)("p",{className:"instructions",children:"Welcome to the agile taskmaster! Please begin by adding one or more columns where you will place your task cards ."}):"",j.length<=4?Object(l.jsxs)("div",{className:"inputfieldColumn",children:[Object(l.jsx)("input",{className:"inputField",value:a,onChange:function(e){s(e.target.value),console.log(a)},placeholder:"Heading"}),Object(l.jsx)("button",{className:"createContainerButton",onClick:function(){a&&(O(!0),b([].concat(Object(i.a)(j),[a])),s(""))},children:"Create task column"})]}):Object(l.jsx)("div",{children:"Max number of columns used"})]}),m?Object(l.jsx)(d,{}):""]}),Object(l.jsx)("div",{className:"columnContainer",children:g})]})}var b=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(j,{})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.caeae2c4.chunk.js.map