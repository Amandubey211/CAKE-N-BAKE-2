"use strict";(self.webpackChunkcake_shop=self.webpackChunkcake_shop||[]).push([[521],{582:function(e,s,r){r.r(s);var n=r(4165),c=r(5861),d=r(9439),l=r(2791),t=r(4309),a=r(2090),o=r(1243),i=r(2426),x=r.n(i),h=r(1087),u=r(6355),p=r(2927),m=r(3402),j=r(9126),v=r(184);s.default=function(){var e=(0,l.useState)([]),s=(0,d.Z)(e,2),r=s[0],i=s[1],f=(0,p.a)(),b=(0,d.Z)(f,1)[0],N=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(){var s,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/api/auth/orders");case 3:s=e.sent,r=s.data,i(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){null!==b&&void 0!==b&&b.token&&N()}),[null===b||void 0===b?void 0:b.token]);var g=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{m.Am.success("will be added soon")}catch(s){m.Am.error("something went wrong")}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{children:[(0,v.jsx)(t.Z,{}),(0,v.jsxs)("div",{className:"order_main",children:[(0,v.jsx)("hr",{}),(0,v.jsxs)("div",{className:"d-flex row container-fluid p-3 ",children:[(0,v.jsx)("div",{className:"col-sm-12 col-lg-2",children:(0,v.jsx)(a.Z,{})}),(0,v.jsx)("div",{className:"col-lg-10 col-sm-12 ps-5   ",children:(0,v.jsxs)("div",{className:" p-3  ps-5 ",children:[(0,v.jsx)("h1",{className:"text-center fw-bold text-uppercase font-monospace",children:"my orders"}),r.length?(0,v.jsxs)(v.Fragment,{children:[" ",null===r||void 0===r?void 0:r.map((function(e,s){var r,n,c;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"mb-4 rounded-3 p-3",style:{boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"},children:[(0,v.jsxs)("table",{className:"table",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{scope:"col",children:"PR NO"}),(0,v.jsx)("th",{scope:"col",children:"status"}),(0,v.jsx)("th",{scope:"col",children:"buyer id"}),(0,v.jsx)("th",{scope:"col",children:"orders"}),(0,v.jsx)("th",{scope:"col",children:"quantity"}),(0,v.jsx)("th",{scope:"col",children:"payment"}),(0,v.jsx)("th",{scope:"col",children:"amount"})]})}),(0,v.jsx)("tbody",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:s+1}),(0,v.jsx)("td",{children:null===e||void 0===e?void 0:e.status}),(0,v.jsx)("td",{children:null===e||void 0===e||null===(r=e.buyer)||void 0===r?void 0:r._id}),(0,v.jsx)("td",{children:x()(null===e||void 0===e?void 0:e.createdAt).fromNow()}),(0,v.jsx)("td",{children:null===e||void 0===e||null===(n=e.products)||void 0===n?void 0:n.length}),(0,v.jsx)("td",{children:null!==e&&void 0!==e&&e.payment.success?(0,v.jsx)("span",{className:"bg-success rounded-3 px-2 fw-bold py-1",children:"success"}):(0,v.jsx)("span",{className:"bg-danger rounded-3 px-2 fw-bold py-1 ",children:"failed"})}),(0,v.jsx)("td",{children:null===e||void 0===e?void 0:e.amount})]})})]}),(0,v.jsxs)("div",{className:"row",children:[null===e||void 0===e||null===(c=e.products)||void 0===c?void 0:c.map((function(e,s){return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"row flex-row  ms-3  mb-3 rounded-4",children:[(0,v.jsx)("div",{className:"col-md-3 p-2",children:(0,v.jsx)("img",{src:"/api/admin/product/product-photo/".concat(e._id),className:"  rounded-2",alt:e.productName,height:70,width:70})}),(0,v.jsxs)("div",{className:"col-md-8 p-1",children:[(0,v.jsx)("h3",{className:"text-capitalize fw-bold font-monospace",children:e.productName}),(0,v.jsx)("div",{className:"d-flex flex-column flex-wrap ",children:(0,v.jsxs)("h4",{className:"fw-bold",children:[" ",(0,v.jsx)(u.t9y,{className:"h5 mt-1"}),e.price,"/-"]})})]}),(0,v.jsx)("hr",{})]})})})),(0,v.jsxs)("button",{className:"btn btn-danger",onClick:g,children:[" ","cancel order"]})]})]})})})).reverse()]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"text-center bg-light px-2 py-3 rounded-5",style:{boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"},children:[(0,v.jsx)("h1",{className:" text-center mt-5 mb-2 bg-warning rounded-4",children:"Nothing Order Yet, Sir!"}),(0,v.jsx)(h.OL,{to:"/allproducts",className:"mb-2",children:(0,v.jsxs)("button",{className:"button-34 h2 text-uppercase mt-3 ",children:["Add products ",(0,v.jsx)(j.FDj,{})]})})]})})]})})]})]})]})}}}]);
//# sourceMappingURL=521.b525f977.chunk.js.map