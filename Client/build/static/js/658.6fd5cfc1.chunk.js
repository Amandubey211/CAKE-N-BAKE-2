"use strict";(self.webpackChunkcake_shop=self.webpackChunkcake_shop||[]).push([[658],{5658:function(e,s,t){t.r(s);var a=t(4165),n=t(1413),l=t(5861),r=t(9439),i=t(2791),u=t(2927),d=t(3402),o=t(1243),c=t(4309),x=t(2090),p=t(184);s.default=function(){var e,s=(0,i.useState)(""),t=(0,r.Z)(s,2),f=t[0],m=t[1],h=(0,i.useState)(""),j=(0,r.Z)(h,2),v=j[0],b=j[1],g=(0,i.useState)(""),N=(0,r.Z)(g,2),w=N[0],C=N[1],y=(0,i.useState)(""),Z=(0,r.Z)(y,2),k=Z[0],S=Z[1],_=(0,i.useState)(""),A=(0,r.Z)(_,2),P=A[0],E=A[1],U=(0,u.a)(),D=(0,r.Z)(U,2),I=D[0],J=D[1],O=(0,i.useState)(!0),T=(0,r.Z)(O,2),q=T[0],z=T[1];(0,i.useEffect)((function(){var e=I.user,s=e.email,t=e.userName,a=e.phone,n=e.address;m(t),b(s),S(a),E(n)}),[I.user]);var B=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(s){var t,l,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s.preventDefault(),"UPDATE"!==window.prompt("are you sure you want to update the user if yes type 'UPDATE'")){e.next=11;break}return e.next=6,o.Z.put("/api/auth/update-profile",{userName:f,phone:k,address:P,email:v,password:w});case 6:t=e.sent,null!==(l=t.data)&&void 0!==l&&l.success?(d.Am.success(l.message),J((0,n.Z)((0,n.Z)({},I),{},{user:null===l||void 0===l?void 0:l.updatedUser})),r=localStorage.getItem("auth"),(r=JSON.parse(r)).user=l.updatedUser,localStorage.setItem("auth",JSON.stringify(r))):d.Am.error(l.error),e.next=12;break;case 11:return e.abrupt("return");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),d.Am.error("something went wrong!");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(s){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{children:[(0,p.jsx)(c.Z,{}),(0,p.jsxs)("div",{className:"profile_main ",children:[(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{className:"d-flex row container-fluid p-3 ",children:[(0,p.jsx)("div",{className:"col-lg-2 col-md-12",children:(0,p.jsx)(x.Z,{})}),(0,p.jsx)("div",{className:"col-lg-10  col-sm-12ps-5 mb-4",children:(0,p.jsx)("div",{className:" p-3 w-90 ps-5 pt-1 ",children:(0,p.jsxs)("div",{className:"p-4 rounded-4",style:{boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"},children:[(0,p.jsx)("div",{className:"d-flex  flex-row mb-3 ",children:(0,p.jsxs)("div",{className:" col-md-12  d-flex flex-column",children:[(0,p.jsxs)("h2",{className:"text-center text-uppercase fw-bold d-flex justify-content-center bg-light py-4 ",children:[" ",null===I||void 0===I||null===(e=I.user)||void 0===e?void 0:e.userName,"'S Profile Data"]}),(0,p.jsxs)("div",{className:"  d-flex flex-row gap-3",children:[(0,p.jsx)("button",{className:"btn btn-success  fw-bold py-2   ms-3 px-5  col-md-4  ",onClick:function(){return z(!q)},children:q?"Edit":"Preview"}),(0,p.jsx)("button",{className:"btn btn-danger  py-2 col-md-3  fw-bold  align-self-stretch    ",onClick:function(){return d.Am.success("some Action need to be added here in futher")},children:"Action"}),(0,p.jsx)("button",{className:"btn btn-danger  py-2 col-md-4  fw-bold  px-5    ",onClick:function(){return d.Am.success("this function will be added here in futher")},children:"Share Profile"})]})]})}),(0,p.jsx)("hr",{}),(0,p.jsxs)("form",{className:"ps-3 ",children:[q&&(0,p.jsxs)("fieldset",{disabled:!0,children:[" ",(0,p.jsxs)("div",{className:"txt_field",children:[(0,p.jsx)("input",{type:"text",name:"userName",autoComplete:"off",value:f,onChange:function(e){return m(e.target.value)}}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:q?"":"Username"})]}),(0,p.jsxs)("div",{className:"txt_field",children:[(0,p.jsx)("input",{type:"Number",name:"phone",autoComplete:"off",value:k,onChange:function(e){return S(e.target.value)}}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:q?"":"Phone"})]}),(0,p.jsxs)("div",{className:"txt_field",children:[(0,p.jsx)("input",{type:"text",name:"address",autoComplete:"off",value:P,onChange:function(e){return E(e.target.value)}}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:q?"":"Address"})]}),(0,p.jsxs)("div",{className:"txt_field",children:[(0,p.jsx)("input",{type:"text",name:"email",autoComplete:"off",value:v,onChange:function(e){return b(e.target.value)}}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:q?"":"Email"})]}),(0,p.jsxs)("div",{className:"txt_field",children:[(0,p.jsx)("input",{type:"text",name:"password",autoComplete:"off",value:w,onChange:function(e){return C(e.target.value)}}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:q?"":"Password"})]}),(0,p.jsx)("input",{type:"submit",value:"update"})]}),!q&&(0,p.jsxs)("fieldset",{children:[" ",(0,p.jsxs)("div",{className:"txt_field",children:[(0,p.jsx)("input",{type:"text",name:"userName",autoComplete:"off",value:f,onChange:function(e){return m(e.target.value)}}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:"UserName"})]}),(0,p.jsxs)("div",{className:"txt_field",children:[(0,p.jsx)("input",{type:"Number",name:"phone",autoComplete:"off",value:k,onChange:function(e){return S(e.target.value)}}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:"Phone"})]}),(0,p.jsxs)("div",{className:"txt_field",children:[(0,p.jsx)("input",{type:"text",name:"address",autoComplete:"off",value:P,onChange:function(e){return E(e.target.value)}}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:"Address"})]}),(0,p.jsxs)("div",{className:"txt_field",children:[(0,p.jsx)("input",{type:"text",name:"email",className:"fw-bold",autoComplete:"off",value:v,disabled:!0,onChange:function(e){return b(e.target.value)}}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:q?"Email":""})]}),(0,p.jsxs)("div",{className:"txt_field",children:[(0,p.jsx)("input",{type:"text",name:"password",autoComplete:"off",value:w,onChange:function(e){return C(e.target.value)}}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:"password"})]}),(0,p.jsx)("input",{type:"submit",value:"update",onClick:B})]})]})]})})})]})]})]})}}}]);
//# sourceMappingURL=658.6fd5cfc1.chunk.js.map