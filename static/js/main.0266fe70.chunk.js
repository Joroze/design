(this.webpackJsonpdesign=this.webpackJsonpdesign||[]).push([[0],{34:function(e,t,c){},39:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(0),s=(c(34),c(1)),r=c.n(s),i=c(19),a=c.n(i),o=c(16),l=c(28),j=c(11),d=c(4),b=c(10),u={products:[],setProducts:function(){}},p=r.a.createContext(u),h=function(e){var t=Object(s.useState)({products:u.products,setProducts:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{products:e}))}}),c=Object(d.a)(t,2),r=c[0],i=c[1];return Object(n.jsx)(p.Provider,{value:r,children:e.children})},O=c(9),m=c.n(O),x=c(13),f=(c(39),c(3)),v=c(14),g=c(29),k=c(15),N=c.p+"static/media/playdoh.62e2629f.jpg",C=c.p+"static/media/earth.76f1dd72.jpg",y=c.p+"static/media/sun.b4d6b4a6.jpg",S=c.p+"static/media/snowman.53fbd791.jpg",w=c.p+"static/media/snowman2.5f6fca64.jpg",P=c.p+"static/media/patrick.bb5f3b8d.jpg",z=c.p+"static/media/burger.9a904591.jpg",A=c.p+"static/media/burger2.d3ceafd4.jpg",E=c(17),I=c(26),L=c(25);c(45),c(46),c(47);var T=function(e){var t=e.content,c=e.onClick,s=e.borderless,r=e.children,i=e.disabled;return Object(n.jsx)("button",{className:"component-button ".concat(s?"borderless":""),onClick:c,disabled:i,children:r||t})};function F(e){var t=e.headerItem,c=(e.multiselect,e.items),s=e.colored,r=e.onClick,i=e.selected;return Object(n.jsx)("div",{className:"component-menu",children:Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[t&&Object(n.jsx)("li",{className:s?"colored":null,children:Object(n.jsx)("h2",{children:t.clickable?Object(n.jsx)(T,{borderless:!0,onClick:function(e){return r(e,t.text)},children:t.text}):t.text})}),c.map((function(e,t){var c=e in i;return Object(n.jsxs)("li",{className:c?"selected":"",children:[s&&Object(n.jsx)("div",{className:"square",style:{backgroundColor:e}}),Object(n.jsx)(T,{borderless:!0,onClick:function(t){return r(t,e)},children:Object(n.jsxs)("span",{children:[e," ",c&&"(x)"]})})]},t)}))]})})})}F.defaultProps={selected:{}};var B=F,M=(c(48),c(49),c(31));function G(e){var t=e.name,c=e.description,s=e.price,r=e.imgSrc,i=e.detailedImageView,a=(e.category,e.onClick);return Object(n.jsxs)("div",{className:"component-product-item ".concat(a?"clickable":""),onClick:a,children:[i?r.map((function(e,c){return Object(n.jsx)(M.a,{src:e,alt:t,fullscreenOnMobile:!0},c)})):Object(n.jsx)("img",{src:r[0],alt:t}),Object(n.jsx)("p",{children:t||"???"}),c&&Object(n.jsx)("p",{className:"description",children:c}),Object(n.jsx)("span",{children:s?"$".concat(s):" N/A"})]})}G.defaultProps={imgSrc:[]};var H=G,V={text:"All categories",clickable:!0},W=["Accessories","Animals","Food","TV","Space"].map((function(e){return e.toLowerCase()})),D={text:"All colors",clickable:!0},J=["Red","Blue","Yellow","Green","Purple","Orange","Brown","Pink","Black","White","Grey"].map((function(e){return e.toLowerCase()})),U={text:"Sort",clickable:!1};var _=function(){var e=Object(s.useContext)(p).products,t=Object(s.useState)(e),c=Object(d.a)(t,2),r=c[0],i=c[1],a=Object(s.useState)({}),o=Object(d.a)(a,2),l=o[0],j=o[1],u=Object(s.useState)({}),h=Object(d.a)(u,2),O=h[0],m=h[1],x=Object(f.g)();return Object(s.useEffect)((function(){var t=e;Object.keys(l).length&&(t=e.filter((function(e){return e.color.some((function(e){return e.toLowerCase()in l}))}))),Object.keys(O).length&&(t=t.filter((function(e){return e.category.some((function(e){return e.toLowerCase()in O}))}))),i(t)}),[l,O,e]),Object(n.jsx)("div",{className:"component-home",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"left-pane desktop-visible",children:[Object(n.jsx)(B,{onClick:function(e,t){if("all categories"===t.toLowerCase())return m({});if(t in O){O[t];var c=Object(I.a)(O,[t].map(L.a));m(c)}else m(Object(E.a)({},t,!0))},headerItem:V,items:W,selected:O}),Object(n.jsx)(B,{onClick:function(e,t){if("all colors"===t.toLowerCase())return j({});if(t in l){l[t];var c=Object(I.a)(l,[t].map(L.a));j(c)}else j(Object(b.a)(Object(b.a)({},l),{},Object(E.a)({},t,!0)))},headerItem:D,items:J,selected:l,multiselect:!0,colored:!0})]}),Object(n.jsxs)("div",{className:"inner-container",children:[Object(n.jsx)("div",{className:"product-list",children:r.length?r.map((function(e){if(e.hidden)return null;return Object(n.jsx)(H,{onClick:function(){x.push("/product/".concat(e.id))},name:e.name,description:e.description,price:e.price,imgSrc:e.imgSrc},e.id)})):"No pieces found."}),Object(n.jsx)("p",{style:{textAlign:"center",fontSize:"9px"},children:"~"}),Object(n.jsx)("p",{style:{textAlign:"center"},children:"Collection"})]}),Object(n.jsx)("div",{className:"right-pane desktop-visible",children:Object(n.jsx)(B,{onClick:function(e,t){},headerItem:U,items:["Latest arrivals","Trending","Price: Low to high","Price: High to low","Sale: Low to high","Sale: High to low"]})})]})})};c(52),c(53);function q(e){var t=e.productId,c=e.price,r=e.onFormInitializationError,i=Object(s.useState)(!1),a=Object(d.a)(i,2),o=a[0],l=a[1],b=Object(s.useState)(null),u=Object(d.a)(b,2),p=u[0],h=u[1],O=Object(s.useState)(!1),f=Object(d.a)(O,2),v=f[0],g=f[1],k=Object(s.useState)(""),N=Object(d.a)(k,2),C=N[0],y=N[1],S=Object(s.useState)(!0),w=Object(d.a)(S,2),P=w[0],z=w[1],A=Object(s.useState)(""),E=Object(d.a)(A,2),I=E[0],L=E[1],T=Object(s.useState)(""),F=Object(d.a)(T,2),B=F[0],M=F[1],G=Object(j.useStripe)(),H=Object(j.useElements)();Object(s.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.joroze.com/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:[t]})}).then((function(e){return e.json()}));case 3:c=e.sent,M(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),g(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){v&&r&&r()}),[v,r]);var V=function(){var e=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z(t.empty),h(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(x.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),y(!0),e.next=4,G.confirmCardPayment(B,{receipt_email:I,payment_method:{card:H.getElement(j.CardElement)}});case 4:(c=e.sent).error?(h("Payment failed ".concat(c.error.message)),y(!1)):(h(null),y(!1),l(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"component-checkout-form",children:v?"Stripe API error: re-open this modal.":Object(n.jsxs)("form",{id:"payment-form",onSubmit:W,children:[Object(n.jsx)("input",{type:"text",value:I,onChange:function(e){return L(e.target.value)},placeholder:"Enter email address"}),Object(n.jsx)(j.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:V}),Object(n.jsx)("button",{disabled:C||P||o,id:"submit",children:Object(n.jsx)("span",{id:"button-text",children:C?Object(n.jsx)("div",{className:"spinner",id:"spinner"}):"Pay $".concat(c)})}),p&&Object(n.jsx)("div",{className:"card-error",role:"alert",children:p}),Object(n.jsx)("p",{className:o?"result-message":"result-message hidden",children:"Payment succeeded, we will reach out to you on your order within 48 hours."})]})})}c(54);var R=function(e){var t=e.title,c=e.onClose,s=e.content,r=e.children,i=e.className;return Object(n.jsx)("div",{className:"component-modal ".concat(i||""),children:Object(n.jsxs)("div",{className:"modal",children:[c&&Object(n.jsx)(T,{onClick:c,borderless:!0,content:"x"}),t&&Object(n.jsx)("div",{className:"modal-header",children:t}),(s||r)&&Object(n.jsx)("div",{className:"modal-content",children:s||r})]})})};var Y=function(e){var t=Object(s.useContext)(p).products,c=Object(f.h)().id,r=Object(f.g)(),i=Object(s.useState)(!1),a=Object(d.a)(i,2),o=a[0],l=a[1],j=function(){return l(!o)},b=Object(s.useMemo)((function(){return t.find((function(e){return e.id===Number(c)}))}),[c,t]);return b?Object(n.jsxs)("div",{className:"component-product-page",children:[Object(n.jsxs)("div",{className:"product-page-container",children:[Object(n.jsx)(T,{onClick:function(){return r.push("/")},borderless:!0,children:"< Previous"}),Object(n.jsx)(H,{name:b.name,description:b.description,price:b.price,imgSrc:b.imgSrc,detailedImageView:!0},b.id),b.available?Object(n.jsx)(T,{onClick:j,borderless:!0,children:"Purchase"}):Object(n.jsx)(T,{disabled:!0,borderless:!0,children:"Unavailable"})]}),Object(n.jsx)("p",{style:{textAlign:"center",fontSize:"9px",marginTop:"15px"},children:"~"}),Object(n.jsxs)("div",{className:"product-disclosure",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"SCULPTURE"})," was founded on the philosophy of my roommate (Christopher Rizzo) matching the cost of a purchase towards myself in need, but has evolved to go deeper into the community. The more items we sell, the more my roommate matches his donation. As we grow, our giving and community efforts will continue to grow right alongside us. One purchased = one donation matched"]}),Object(n.jsx)("div",{children:"Disclosure: Donation per purchase is matched up to $100."})]}),o&&Object(n.jsxs)(R,{className:"product-modal",title:"Confirm purchase",onClose:j,children:[Object(n.jsxs)("div",{children:["You are purchasing the following Scultpure: ",Object(n.jsx)("strong",{children:b.name})]}),Object(n.jsx)("img",{src:b.imgSrc[0],alt:b.name}),Object(n.jsx)(q,{productId:c,price:b.price,onFormInitializationError:j})]})]}):Object(n.jsx)(f.a,{to:"/"})},$={1:[z,A],2:[y],3:[C],4:[S,w],5:[P],6:[],7:[N]};var Q=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],r=t[1],i=Object(s.useState)(!0),a=Object(d.a)(i,2),o=a[0],l=a[1],j=Object(f.g)(),u=Object(s.useContext)(p).setProducts;function h(){r(!c)}return Object(s.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.joroze.com/products").then((function(e){return e.json()}));case 3:t=e.sent,c=t.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{imgSrc:$[e.id]})})),u(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u([]);case 11:l(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(g.useMediaQuery)({query:"(min-width: 1024px)"},void 0,(function(){r(!1)})),Object(n.jsxs)("div",{className:"component-app ".concat(c?"open":""),children:[c&&Object(n.jsxs)("div",{className:"app-nav-dropdown",children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Account"}),Object(n.jsx)("li",{children:"Contact"}),Object(n.jsx)("li",{children:"Wishlist"}),Object(n.jsx)("li",{children:"FAQ"})]}),Object(n.jsx)("div",{onClick:h,className:"close-menu",children:"Close"})]}),Object(n.jsx)("header",{className:"app-nav",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:"desktop-visible",children:Object(n.jsx)(T,{borderless:!0,children:"Products"})}),Object(n.jsx)("li",{className:"desktop-visible",children:Object(n.jsx)(T,{borderless:!0,children:"Sale"})}),Object(n.jsx)("li",{className:"desktop-visible",children:Object(n.jsx)(T,{borderless:!0,children:"Search"})}),Object(n.jsx)("li",{className:"mobile-visible",children:Object(n.jsx)("span",{onClick:h,children:Object(n.jsx)(v.a,{size:"lg",icon:k.a})})}),Object(n.jsx)("li",{className:"mobile-visible",children:Object(n.jsx)("span",{children:Object(n.jsx)(v.a,{size:"lg",icon:k.b})})})]})}),Object(n.jsx)("h2",{className:"title",children:Object(n.jsx)(T,{borderless:!0,onClick:function(){return j.push("/")},children:"Sculpture"})}),Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:"desktop-visible",children:Object(n.jsx)(T,{borderless:!0,children:"Wishlist"})}),Object(n.jsx)("li",{className:"desktop-visible",children:Object(n.jsx)(T,{borderless:!0,children:"Account"})}),Object(n.jsx)("li",{className:"desktop-visible",children:Object(n.jsx)(T,{borderless:!0,children:"Shopping Bag (0)"})}),Object(n.jsx)("li",{className:"mobile-visible",children:Object(n.jsx)("span",{children:Object(n.jsx)(v.a,{size:"lg",icon:k.e})})}),Object(n.jsx)("li",{className:"mobile-visible",children:Object(n.jsxs)("span",{children:[Object(n.jsx)(v.a,{size:"lg",icon:k.c})," (0)"]})})]})})]})}),Object(n.jsx)("div",{className:"page-container",children:o?Object(n.jsx)(v.a,{icon:k.d,pulse:!0}):Object(n.jsxs)(f.d,{children:[Object(n.jsx)(f.b,{exact:!0,path:"/",children:Object(n.jsx)(_,{})}),Object(n.jsx)(f.b,{path:"/product/:id",children:Object(n.jsx)(Y,{})}),Object(n.jsx)(f.b,{children:Object(n.jsx)(f.a,{to:"/"})})]})})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))},X=Object(l.a)("pk_live_51HvPoYAHIVF9WsgGUMHqOLHoyrzbEvuWZjTMVkfzulb1ns9ze0P1KNm0MozGIA2XAGdlzisrx254BiV24GeDJy3d00PT0jmmWO");a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(j.Elements,{stripe:X,children:Object(n.jsx)(o.a,{children:Object(n.jsx)(h,{children:Object(n.jsx)(Q,{})})})})}),document.getElementById("root")),K()}},[[55,1,2]]]);
//# sourceMappingURL=main.0266fe70.chunk.js.map