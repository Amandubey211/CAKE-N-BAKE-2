"use strict";(self.webpackChunkcake_shop=self.webpackChunkcake_shop||[]).push([[299],{9299:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var r=s(4165),n=s(5861),a=s(9439),c=s(2791),i=s(3778),l=s(4309),o=s(3402),u=s(1243),d=s(184),p=function(e){var t=e.HandleSubmit,s=e.value,r=e.Setvalue;return localStorage.setItem("previousCategory",s),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{onSubmit:t,children:[(0,d.jsx)("div",{class:"mb-3",children:(0,d.jsx)("input",{type:"text",autoComplete:"off",className:"form-control py-3 fw-bolder",id:"exampleFormControlInput1",placeholder:"Enter new category",value:s,onChange:function(e){return r(e.target.value)}})}),(0,d.jsx)("div",{class:"mb-3",children:(0,d.jsx)("button",{type:"submit",className:"btn btn-primary ms-2 px-5  py-2",children:"submit"})})]})})},m=s(4829),h=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),s=t[0],h=t[1],x=(0,c.useState)(""),f=(0,a.Z)(x,2),v=f[0],g=f[1],j=(0,c.useState)(!1),b=(0,a.Z)(j,2),Z=b[0],w=b[1],N=(0,c.useState)(null),y=(0,a.Z)(N,2),S=y[0],k=y[1],C=(0,c.useState)(""),E=(0,a.Z)(C,2),P=E[0],L=E[1],O=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/api/admin/category/get-category");case 3:t=e.sent,null!==(s=t.data)&&void 0!==s&&s.success&&(h(null===s||void 0===s?void 0:s.categories),o.ZP.success("categories accquired successfully")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o.ZP.error("cannot get categories");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t){var s,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.Z.post("/api/admin/category/create-category",{name:v});case 4:s=e.sent,null!==(n=s.data)&&void 0!==n&&n.success?(o.ZP.success("".concat(v," is created")),O(),g(" ")):o.ZP.error(n.message),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),o.ZP.error("something went wrong");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t){var s,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.Z.put("/api/admin/category/update-category/".concat(S._id),{name:P});case 4:s=e.sent,null!==(n=s.data)&&void 0!==n&&n.success?(o.ZP.success("nice! choise,  ".concat(P,"  is updated ")),k(null),L(""),w(!1),O()):o.ZP.error(n.message),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),o.ZP.error("something went wrong");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t){var s,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"YES"!==window.prompt('are you sure to delete  this  category ,TYPE "YES" ')){e.next=8;break}return e.next=5,u.Z.delete("/api/admin/category/delete-category/".concat(t));case 5:s=e.sent,null!==(n=s.data)&&void 0!==n&&n.success?(o.ZP.success(" SELECTED CATEGORY IS DELETED SUCCESSFULLY "),O()):o.ZP.error(n.message);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),o.ZP.error("something went wrong");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){O()}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.Z,{}),(0,d.jsxs)("div",{className:"admin_main",children:[(0,d.jsx)("hr",{}),(0,d.jsxs)("div",{className:"d-flex row container-fluid p-3 ",children:[(0,d.jsx)("div",{className:"col-lg-2 col-sm-12",children:(0,d.jsx)(i.Z,{})}),(0,d.jsx)("div",{className:"col-lg-10 col-sm-12 ps-3   ",children:(0,d.jsxs)("div",{className:" p-1 w-95 ",children:[(0,d.jsx)("h1",{className:"mb-3 text-uppercase  fw-bold   font-monospace",children:"manage categories"}),(0,d.jsx)("hr",{}),(0,d.jsx)("div",{className:" w-80",children:(0,d.jsx)(p,{HandleSubmit:D,value:v,Setvalue:g})}),(0,d.jsx)("hr",{}),(0,d.jsx)("div",{className:"w-75",children:(0,d.jsxs)("table",{class:"table",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{scope:"col",className:"ps-4 ",children:"ID"}),(0,d.jsx)("th",{scope:"col",className:"ps-4 ",children:"Name"}),(0,d.jsxs)("th",{scope:"col",className:"ps-4 ",children:["Action"," "]})]})}),(0,d.jsx)("tbody",{children:s.map((function(e){return(0,d.jsxs)("tr",{className:"p-3 m-4",children:[(0,d.jsx)("td",{className:"p-3",children:e._id}),(0,d.jsx)("td",{className:"p-3 m-4 text-uppercase",children:e.name},e._id),(0,d.jsxs)("td",{className:"p-3",children:[(0,d.jsx)("button",{type:"button",className:"btn btn-primary m-1 ms-3",onClick:function(){w(!0),L(e.name),k(e)},children:"Edit"}),(0,d.jsx)("button",{type:"button",className:"btn btn-danger m-1 ms-3",onClick:function(){Y(e._id)},children:"Delete"})]})]})}))})]})}),(0,d.jsx)(m.Z,{onCancel:function(){return w(!1)},footer:null,visible:Z,children:(0,d.jsx)(p,{value:P,Setvalue:L,HandleSubmit:_})})]})})]})]})]})}},3778:function(e,t,s){s(2791);var r=s(1087),n=s(184);t.Z=function(){return(0,n.jsx)("div",{className:"text-center  ",children:(0,n.jsxs)("div",{className:"list-group text-capitalize  ",children:[(0,n.jsx)(r.OL,{to:"/profile/admin",className:"text-reset text-decoration-none",children:(0,n.jsx)("h4",{className:"py-2 bg-warning ",children:"Admin Panel"})}),(0,n.jsx)(r.OL,{to:"/profile/admin/create-category",className:"list-group-item list-group-item-action  p-2 fw-bolder ",children:"Create category"}),(0,n.jsx)(r.OL,{to:"/profile/admin/create-product",className:"list-group-item list-group-item-action p-2 fw-bolder ",children:"Create product"}),(0,n.jsx)(r.OL,{to:"/profile/admin/products",className:"list-group-item list-group-item-action p-2 fw-bolder ",children:"products"}),(0,n.jsx)(r.OL,{to:"/profile/admin/allusers",className:"list-group-item list-group-item-action p-2 fw-bolder ",children:"users"}),(0,n.jsx)(r.OL,{to:"/profile/admin/allorders",className:"list-group-item list-group-item-action p-2 fw-bolder ",children:"orders"}),(0,n.jsx)(r.OL,{to:"/profile/admin/feedback",className:"list-group-item list-group-item-action p-2 fw-bolder ",children:"Feedbacks"})]})})}}}]);
//# sourceMappingURL=299.f95c3692.chunk.js.map