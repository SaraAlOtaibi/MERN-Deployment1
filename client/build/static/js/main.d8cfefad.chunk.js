(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),i=n(17),o=n.n(i),s=(n(24),n(25),n(3)),l=(n(32),n(4)),j=n(5),b=n.n(j),u=function(t){var e=t.initialName,n=t.onSubmitProp,r=t.getErrors,i=t.type,o=Object(a.useState)(e),j=Object(l.a)(o,2),b=j[0],u=j[1],d=Object(a.useState)({}),h=Object(l.a)(d,2),O=(h[0],h[1]);return Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)(s.a,{to:"/",children:" Home "}),"new"===i?Object(c.jsx)("p",{children:" Add a new author: "}):Object(c.jsx)("p",{children:" Edit this author "}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=n({name:b});c&&O(c),u(e)},className:"form-group",children:[Object(c.jsx)("label",{children:" Name "}),Object(c.jsx)("input",{type:"text",className:"form-control",name:"name",value:b,onChange:function(t){return u(t.target.value)}}),Object(c.jsxs)("p",{className:"text-danger",children:[" ",r()&&r().name?r().name.message:""," "]}),Object(c.jsx)("button",{onClick:function(){return Object(s.c)("/")},className:"btn btn-primary mt-3 mr-3",children:"Cancel"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Submit"})]})]})})},d=function(t){var e=Object(a.useState)(),n=Object(l.a)(e,2),r=n[0],i=n[1];return Object(c.jsx)("div",{children:Object(c.jsx)(u,{initialName:"",onSubmitProp:function(t){b.a.post("http://localhost:8000/api/new",t).then((function(t){return console.log(t),t.data.error&&i(t.data.error.errors),r})).catch((function(t){console.error(t)}))},getErrors:function(){return r},type:"new"})})},h=function(t){var e=t._id,n=t.successCallback;return Object(c.jsx)("button",{className:"btn btn-danger mb-3 ml-3",onClick:function(t){b.a.delete("http://localhost:8000/api/delete/".concat(e)).then((function(t){console.log(t),n()}))},children:"Delete"})},O=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],i=Object(a.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];function d(){b.a.get("http://localhost:8000/api/authors").then((function(t){console.log(t.data),console.log("hi"),t.data.sort((function(t,e){return t.name>e.name||t.name===e.name&&t.size>e.size?1:-1})),r(t.data),u(!0)})).catch((function(t){return console.error(t)}))}return Object(a.useEffect)((function(){d()}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)(s.a,{to:"api/new",children:" Add an author "}),Object(c.jsx)("p",{children:" We have quotes by:"}),Object(c.jsxs)("table",{className:"table table-striped table-inverse table-responsive",children:[Object(c.jsx)("thead",{className:"thead-inverse",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Authors"}),Object(c.jsx)("th",{children:"Actions Available"})]})}),Object(c.jsx)("tbody",{children:j&&n.map((function(t,e){return Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[" ",t.name," "]}),Object(c.jsxs)("td",{children:[Object(c.jsx)("button",{className:"btn btn-primary mb-3",onClick:function(){return Object(s.c)("/api/edit/".concat(t._id,"/"))},children:" Edit "}),Object(c.jsx)(h,{_id:t._id,successCallback:function(){return d()}})]})]},e)}))})]})]})})})},m=function(t){t.id;var e=Object(a.useState)(),n=Object(l.a)(e,2),r=n[0],i=n[1],o=Object(a.useState)(!1),j=Object(l.a)(o,2),d=j[0],h=j[1],O=Object(a.useState)(!1),m=Object(l.a)(O,2),p=m[0],x=m[1],f=Object(a.useState)(),g=Object(l.a)(f,2),v=g[0],N=g[1];Object(a.useEffect)((function(){b.a.get("http://localhost:8000/api/".concat(t._id)).then((function(t){i(t.data),console.log(t.data),h(!0),t.data.name||(x(!0),console.log("hiiiiiiiiiii"))})).catch((function(t){x(!0)}))}),[]);return Object(c.jsx)("div",{children:p?Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?"}),Object(c.jsx)(s.a,{to:"/api/new",children:" Add "})]}):d&&Object(c.jsx)(u,{initialName:r.name,onSubmitProp:function(e){b.a.put("http://localhost:8000/api/edit/".concat(t._id),e).then((function(t){console.log(t),t.data.errors?N(t.data.errors):Object(s.c)("/")})).catch((function(t){console.error(t)}))},getErrors:function(){return v},type:"new"})})};var p=function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"text-center",children:"Favorite Authors"}),Object(c.jsx)(s.a,{to:"api/new",children:" Add an author "}),Object(c.jsxs)(s.b,{children:[Object(c.jsx)(O,{path:"/"}),Object(c.jsx)(d,{path:"/api/new"}),Object(c.jsx)(m,{path:"/api/edit/:_id"})]})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),x()}},[[50,1,2]]]);
//# sourceMappingURL=main.d8cfefad.chunk.js.map