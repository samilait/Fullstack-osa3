(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(15),r=t.n(c),o=t(6),a=t(3),u=t(2),i=t(4),s=t.n(i),l="/api/persons",d=function(){return s.a.get(l).then((function(e){return e.data}))},f=function(e){return s.a.post(l,e).then((function(e){return e.data}))},j=function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},h=(t(38),t(0)),m=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"notification",children:n})},O=function(e){var n=e.errorMessage;return null===n?null:Object(h.jsx)("div",{className:"errornotification",children:n})},v=function(e){var n=e.handleNameSearch;return Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{onChange:n})]})},p=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:e.addPerson,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})})},x=function(e){var n=e.filteredPersons,t=e.removePerson;return Object(h.jsx)("div",{children:n.map((function(e){return Object(h.jsx)(g,{person:e,removePerson:t},e.id)}))})},g=function(e){var n=e.person,t=e.removePerson;return Object(h.jsxs)("p",{children:[n.name," ",n.number," ",Object(h.jsx)("button",{onClick:function(){window.confirm("Delete ".concat(n.name,"?"))&&t(n.id)},children:"delete"})]})},w=function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],r=Object(u.useState)(""),i=Object(a.a)(r,2),s=i[0],l=i[1],g=Object(u.useState)(""),w=Object(a.a)(g,2),N=w[0],C=w[1],P=Object(u.useState)(t),S=Object(a.a)(P,2),k=S[0],T=S[1],y=Object(u.useState)(null),L=Object(a.a)(y,2),A=L[0],D=L[1],E=Object(u.useState)(null),I=Object(a.a)(E,2),J=I[0],M=I[1];Object(u.useEffect)((function(){d().then((function(e){c(e),T(e)}))}),[]);var B=function(){return!!t.map((function(e){return e.name})).includes(s)};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(m,{message:A}),Object(h.jsx)(O,{errorMessage:J}),Object(h.jsx)(v,{handleNameSearch:function(e){console.log(e.target.value);var n=t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}));console.log("filtered",n),T(n)}}),Object(h.jsx)("h3",{children:"Add a new"}),Object(h.jsx)(p,{addPerson:function(e){if(e.preventDefault(),B()){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var n=t.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}))[0],r=Object(o.a)(Object(o.a)({},n),{},{number:N});b(r.id,r).then((function(e){c(t.map((function(n){return n.id!==r.id?n:e}))),T(t.map((function(n){return n.id!==r.id?n:e}))),D("Number replaced for ".concat(s)),setTimeout((function(){D(null)}),3e3)})).catch((function(e){M("Information on ".concat(r.name," has already been removed from server")),setTimeout((function(){M(null)}),3e3),c(t.filter((function(e){return e.id!==r.id}))),T(t.filter((function(e){return e.id!==r.id})))}))}}else{var a={name:s,number:N,id:t.length+1};f(a).then((function(e){c(t.concat(e)),T(t.concat(e)),D("Added ".concat(s)),setTimeout((function(){D(null)}),3e3)})).catch((function(e){console.log(e.response.data),M(e.response.data),setTimeout((function(){M(null)}),3e3)}))}l(""),C("")},newName:s,handleNameChange:function(e){l(e.target.value)},newNumber:N,handleNumberChange:function(e){C(e.target.value)}}),Object(h.jsx)("h3",{children:"Numbers"}),Object(h.jsx)(x,{filteredPersons:k,removePerson:function(e){var n=t.filter((function(n){return n.id===e}))[0];j(e).then((function(){d().then((function(e){c(e),T(e),D("Removed ".concat(n.name)),setTimeout((function(){D(null)}),3e3)}))}))}})]})};r.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2b7c370d.chunk.js.map