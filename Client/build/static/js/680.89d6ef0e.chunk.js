"use strict";(self.webpackChunkcake_shop=self.webpackChunkcake_shop||[]).push([[680],{5680:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(3433),a=n(4165),c=n(5861),s=n(9439),o=n(2791),i=n(2835),l=n(1243),d=n(3402),u=n(592),p=n(4424),m=n(33),x=n(7689),f=n(132),h=n(6355),v=n(184),g=function(){var e=(0,o.useState)([]),t=(0,s.Z)(e,2),n=t[0],g=t[1],b=(0,o.useState)([]),j=(0,s.Z)(b,2),w=j[0],Z=j[1],N=(0,o.useState)([]),y=(0,s.Z)(N,2),k=y[0],_=y[1],S=(0,o.useState)([]),C=(0,s.Z)(S,2),A=C[0],E=C[1],F=(0,o.useState)(0),T=(0,s.Z)(F,2),z=T[0],D=T[1],I=(0,o.useState)(1),L=(0,s.Z)(I,2),P=L[0],R=L[1],G=(0,o.useState)(!1),J=(0,s.Z)(G,2),M=J[0],O=J[1],q=(0,x.s0)(),B=(0,f.j)(),H=(0,s.Z)(B,2),K=H[0],Q=H[1],U=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("/api/admin/product/product-count");case 3:t=e.sent,n=t.data,D(null===n||void 0===n?void 0:n.totalcount),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("/api/admin/product/product-list/".concat(P));case 3:t=e.sent,c=t.data,O(!1),g([].concat((0,r.Z)(n),(0,r.Z)(null===c||void 0===c?void 0:c.products))),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),O(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();1!==P&&e()}),[P]);var V=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t,n){var c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=(0,r.Z)(k),t?c.push(n):c=c.filter((function(e){return e!==n})),_(c);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.post("/api/admin/product/filter-product",{checked:k,radio:A});case 3:t=e.sent,n=t.data,g(null===n||void 0===n?void 0:n.products),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d.Am.error("something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(k.length||A.length)&&e()}),[k,A]);var W=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("/api/admin/category/get-category");case 3:t=e.sent,null!==(n=t.data)&&void 0!==n&&n.success&&Z(null===n||void 0===n?void 0:n.categories),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),d.Am.error("cannot get categories");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){W(),U()}),[]),(0,o.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,l.Z.get("/api/admin/product/product-list/".concat(P));case 4:t=e.sent,n=t.data,O(!1),null!==n&&void 0!==n&&n.success?(g(null===n||void 0===n?void 0:n.products),d.Am.success(n.message)):d.Am.error(n.message),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),O(!1),console.log(e.t0),d.Am.error("something went wrong");case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.Z,{}),(0,v.jsx)("div",{className:"products_main  ",children:(0,v.jsxs)("div",{className:"d-flex  container-fluid",children:[(0,v.jsxs)("div",{className:"col-md-3 col-sm-4 mt-3 ",children:[" ",(0,v.jsxs)("div",{className:"categoryFilter_section",children:[(0,v.jsxs)("h6",{className:"text-center text-uppercase  font-monospace  fw-bold ",children:["filter by",(0,v.jsxs)("span",{className:"text-muted  fw-bold bg-warning ms-2 p-1 rounded-3",children:[" ","Category"]})," "]})," ",(0,v.jsx)("div",{className:"p-1 py-3  mt-2 rounded-3",style:{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"},children:w.map((function(e){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"d-flex  flex-wrap ms-4   ",children:(0,v.jsx)(u.Z,{onChange:function(t){V(t.target.checked,e._id)},className:"fw-bold",children:e.name})},e._id)})}))})]}),(0,v.jsxs)("div",{className:"priceFilter_section mt-4 m-2",children:[(0,v.jsxs)("h6",{className:"text-center text-uppercase  font-monospace  fw-bold mb-2",children:["filter by"," ",(0,v.jsxs)("span",{className:"text-muted  fw-bold  bg-warning ms-1  p-1 rounded-3",children:[" ","price-range"]})," "]})," ",(0,v.jsxs)("div",{className:"py-3 rounded-3",style:{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"},children:[(0,v.jsx)(p.ZP.Group,{onChange:function(e){return E(e.target.value)},children:null===m.T||void 0===m.T?void 0:m.T.map((function(e){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"d-flex row flex-wrap ms-4  ",children:(0,v.jsx)(p.ZP,{className:"fw-bold",value:e.array,children:e.name})},e._id)})}))})," "]})]}),(0,v.jsx)("div",{className:" d-flex flex-column mt-3",children:(0,v.jsx)("button",{className:"btn btn-success py-3 fw-bold mx-3  ",onClick:function(){window.location.reload()},children:"RESET FILTERS"})})]}),(0,v.jsxs)("div",{className:"col-md-9  col-sm-8  ps-4 ",children:[" ",(0,v.jsx)("h2",{className:"text-center text-uppercase fw-bold mb-4 ",style:{letterSpacing:"1rem"},children:"all products"})," ",(0,v.jsx)("div",{className:"d-flex flex-wrap ",children:null===n||void 0===n?void 0:n.map((function(e){return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"card m-3 ",style:{height:"20rem",width:"15rem"},children:[(0,v.jsx)("img",{src:"/api/admin/product/product-photo/".concat(e._id),className:"card-img-top cardimg",alt:e.productName}),(0,v.jsxs)("div",{className:"card-body",children:[(0,v.jsx)("h5",{className:"card-title text-capitalize  text-center fw-bold",children:e.productName}),(0,v.jsx)("hr",{}),(0,v.jsxs)("p",{className:"card-text text-capitalize",children:[" ",e.description.substring(0,30)]}),(0,v.jsxs)("h5",{className:"card-text fw-bold",children:[(0,v.jsx)(h.t9y,{className:"h6 mt-1"})," ",e.price,".00/-"]}),(0,v.jsxs)("div",{className:"d-flex  flex-row gap-2 ",children:[(0,v.jsx)("button",{onClick:function(){return q("/productdetail/".concat(e.slug))},className:"btn btn-danger text-uppercase ",style:{fontSize:"10px"},children:"Details"}),(0,v.jsx)("button",{onClick:function(){Q([].concat((0,r.Z)(K),[e])),localStorage.setItem("cart",JSON.stringify([].concat((0,r.Z)(K),[e]))),d.Am.success(" ".concat(e.productName,"  added to the cart"))},className:"btn btn-secondary text-uppercase   ",children:"Add To Cart"})]})]})]})})}))}),(0,v.jsxs)("div",{className:" py-2 px-5 d-flex flex-column justify-content-center",children:[(0,v.jsxs)("p",{className:"text-center text-muted fw-bold text-uppercase",children:[" ","total products : ",(0,v.jsx)("span",{className:"h4",children:z})]}),n&&n.length<z&&(0,v.jsx)("button",{className:"btn btn-success py-3 fw-bold   h1",onClick:function(e){e.preventDefault(),R(P+1)},children:M?"loading":"Load More"})]})]})]})})," "]})}},33:function(e,t,n){n.d(t,{T:function(){return r}});var r=[{_id:6,name:"All",array:[0,1e4]},{_id:0,name:"1- 50 ",array:[1,50]},{_id:1,name:"50 - 100 ",array:[50,100]},{_id:2,name:"100 - 250 ",array:[100,250]},{_id:3,name:"250 - 400 ",array:[250,400]},{_id:4,name:"400 - 500 ",array:[400,500]},{_id:5,name:"500 - 1000 ",array:[500,1e3]},{_id:6,name:"1000+ ",array:[1e3,1e4]}]}}]);
//# sourceMappingURL=680.89d6ef0e.chunk.js.map