"use strict";(self.webpackChunkcake_shop=self.webpackChunkcake_shop||[]).push([[17],{4017:function(e,t,c){c.r(t);var s=c(3433),a=c(4165),r=c(5861),n=c(9439),o=c(2791),d=c(4309),i=c(1243),l=c(7689),u=c(3402),p=c(132),m=c(3728),x=c(6355),h=c(184);t.default=function(){var e,t=(0,l.s0)(),c=(0,o.useState)({}),f=(0,n.Z)(c,2),j=f[0],N=f[1],v=(0,o.useState)([]),g=(0,n.Z)(v,2),b=g[0],w=g[1],y=(0,p.j)(),Z=(0,n.Z)(y,2),k=Z[0],S=Z[1],C=(0,l.UO)(),A=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,c){var s,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/api/admin/product/related-product/".concat(t,"/").concat(c));case 3:s=e.sent,r=s.data,w(null===r||void 0===r?void 0:r.products),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u.Am.error("something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,c,s,r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/api/admin/product/single-product/".concat(C.slug));case 3:r=e.sent,n=r.data,N(null===n||void 0===n?void 0:n.product),A(null===n||void 0===n||null===(t=n.product)||void 0===t?void 0:t._id,null===n||void 0===n||null===(c=n.product)||void 0===c||null===(s=c.category)||void 0===s?void 0:s._id),u.Am.success(n.message),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),u.Am.error("something went wrog");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();null!==C&&void 0!==C&&C.slug&&e()}),[C.slug]),(0,h.jsxs)("div",{children:[(0,h.jsx)(d.Z,{}),(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-md-6 p-5 pt-2",children:[" ",(0,h.jsx)("img",{src:"/api/admin/product/product-photo/".concat(j._id),className:"card-img-top     rounded-5",height:300,alt:j.productName})]}),(0,h.jsxs)("div",{className:"col-md-6 p-2 ",children:[(0,h.jsxs)("h1",{className:"card-title text-capitalize  fw-bold",style:{fontSize:"3rem"},children:[j.productName," "]}),(0,h.jsx)("hr",{}),(0,h.jsxs)("h4",{className:"fw-bold py-2",children:[(0,h.jsx)("span",{className:"text-uppercase",children:"category :"})," ",null===j||void 0===j||null===(e=j.category)||void 0===e?void 0:e.name]}),(0,h.jsxs)("h5",{className:"card-text text-capitalize py-2 ",children:[" ",(0,h.jsx)("span",{className:"text-uppercase fw-bold ",children:"about :"})," ",j.description]}),(0,h.jsxs)("h3",{className:"card-text fw-bold  mt-4",children:[(0,h.jsx)("span",{className:"text-uppercase",children:"price :"})," ",(0,h.jsx)(x.t9y,{className:"h4"}),j.price,".00/-"]}),(0,h.jsxs)("h4",{className:"card-text fw-bold  mt-4 mb-5",children:[" ","Products Left in the store: ",j.quantity]}),(0,h.jsx)("hr",{}),(0,h.jsxs)("div",{className:"d-flex flex-row gap-3 ",children:[(0,h.jsx)("button",{onClick:function(){S([].concat((0,s.Z)(k),[j])),localStorage.setItem("cart",JSON.stringify([].concat((0,s.Z)(k),[j]))),t("/cart")},className:"btn btn-primary text-uppercase px-5  justify-content-center  font-monospace ",children:"BUY NOW"}),(0,h.jsx)("button",{onClick:function(){S([].concat((0,s.Z)(k),[j])),localStorage.setItem("cart",JSON.stringify([].concat((0,s.Z)(k),[j]))),u.Am.success(" ".concat(j.productName,"  added to the cart"))},className:"btn btn-secondary text-uppercase justify-content-center px-5  py-4  font-monospace  ",children:"Add To Cart"})]})]})]}),(0,h.jsxs)("div",{className:"row px-5 ",children:[(0,h.jsxs)("h4",{className:" fw-bold",children:["similar products"," ",(0,h.jsx)("span",{className:"h3",children:(0,h.jsx)(m.Fz7,{})})]}),b.length<1&&(0,h.jsxs)("h2",{className:"text-center",children:[" ",(0,h.jsx)("span",{className:"h1 fw-bold text-uppercase text-muted px-2",children:"opps!"}),"No Similar product found"]}),(0,h.jsx)("div",{className:"d-flex flex-wrap ",children:null===b||void 0===b?void 0:b.map((function(e){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"card m-3 ",style:{height:"17rem",width:"18rem"},children:[(0,h.jsx)("img",{src:"/api/admin/product/product-photo/".concat(e._id),className:"card-img-top cardimg    rounded-2",alt:e.productName}),(0,h.jsxs)("div",{className:"card-body",children:[(0,h.jsx)("h4",{className:"card-title text-capitalize  text-center fw-bold",children:e.productName}),(0,h.jsx)("hr",{}),(0,h.jsxs)("p",{className:"card-text h5",children:[" ",e.description.substring(0,30)]}),(0,h.jsxs)("h5",{className:"card-text fw-bold",children:[" ",(0,h.jsx)(x.t9y,{})," ",e.price,".00/-"]}),(0,h.jsxs)("div",{className:"d-flex p-2 flex-row gap-2  ",children:[(0,h.jsx)("button",{onClick:function(){return t("/productdetail/".concat(e.slug))},className:"btn btn-primary text-uppercase ",children:"More Details"}),(0,h.jsx)("button",{onClick:function(){S([].concat((0,s.Z)(k),[e])),localStorage.setItem("cart",JSON.stringify([].concat((0,s.Z)(k),[e]))),u.Am.success(" ".concat(e.productName,"  added to the cart"))},className:"btn btn-secondary text-uppercase   ",children:"Add To Cart"})]})]})]})})}))})]})]})}}}]);
//# sourceMappingURL=17.84e65bd8.chunk.js.map