(this.webpackJsonpdesign=this.webpackJsonpdesign||[]).push([[0],{34:function(e,t,c){},39:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(0),r=(c(34),c(1)),s=c.n(r),i=c(19),a=c.n(i),o=c(16),l=c(28),j=c(11),d=c(4),u=c(10),b={products:[],setProducts:function(){}},h=s.a.createContext(b),O=function(e){var t=Object(r.useState)({products:b.products,setProducts:function(e){return i(Object(u.a)(Object(u.a)({},s),{},{products:e}))}}),c=Object(d.a)(t,2),s=c[0],i=c[1];return Object(n.jsx)(h.Provider,{value:s,children:e.children})},p=c(9),m=c.n(p),x=c(13),f=(c(39),c(3)),g=c(14),v=c(29),C=c(15),y=c.p+"static/media/playdoh.62e2629f.jpg",S=c.p+"static/media/earth.76f1dd72.jpg",k=c.p+"static/media/sun.b4d6b4a6.jpg",w=c.p+"static/media/snowman.53fbd791.jpg",N=c.p+"static/media/snowman2.5f6fca64.jpg",P=c.p+"static/media/patrick.bb5f3b8d.jpg",z=c.p+"static/media/burger.9a904591.jpg",A=c.p+"static/media/burger2.d3ceafd4.jpg",E=c(17),I=c(26),F=c(25);c(45),c(46),c(47);var L=function(e){var t=e.content,c=e.onClick,r=e.borderless,s=e.children,i=e.disabled;return Object(n.jsx)("button",{className:"component-button ".concat(r?"borderless":""),onClick:c,disabled:i,children:s||t})};function T(e){var t=e.headerItem,c=(e.multiselect,e.items),r=e.colored,s=e.onClick,i=e.selected;return Object(n.jsx)("div",{className:"component-menu",children:Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[t&&Object(n.jsx)("li",{className:r?"colored":null,children:Object(n.jsx)("h2",{children:t.clickable?Object(n.jsx)(L,{borderless:!0,onClick:function(e){return s(e,t.text)},children:t.text}):t.text})}),c.map((function(e,t){var c=e in i;return Object(n.jsxs)("li",{className:c?"selected":"",children:[r&&Object(n.jsx)("div",{className:"square",style:{backgroundColor:e}}),Object(n.jsx)(L,{borderless:!0,onClick:function(t){return s(t,e)},children:Object(n.jsxs)("span",{children:[e," ",c&&"(x)"]})})]},t)}))]})})})}T.defaultProps={selected:{}};var B=T,M=(c(48),c(49),c(31));function G(e){var t=e.name,c=e.description,r=e.price,s=e.imgSrc,i=e.detailedImageView,a=(e.category,e.onClick);return Object(n.jsxs)("div",{className:"component-product-item ".concat(a?"clickable":""),onClick:a,children:[i?s.map((function(e,c){return Object(n.jsx)(M.a,{src:e,alt:t,fullscreenOnMobile:!0},c)})):Object(n.jsx)("img",{src:s[0],alt:t}),Object(n.jsx)("p",{children:t||"???"}),c&&Object(n.jsx)("p",{className:"description",children:c}),Object(n.jsx)("span",{children:r?"$".concat(r):" N/A"})]})}G.defaultProps={imgSrc:[]};var H=G,V={text:"All categories",clickable:!0},W=["Accessories","Animals","Food","TV","Space"].map((function(e){return e.toLowerCase()})),D={text:"All colors",clickable:!0},J=["Red","Blue","Yellow","Green","Purple","Orange","Brown","Pink","Black","White","Grey"].map((function(e){return e.toLowerCase()})),U={text:"Sort",clickable:!1};var _=function(){var e=Object(r.useContext)(h).products,t=Object(r.useState)(e),c=Object(d.a)(t,2),s=c[0],i=c[1],a=Object(r.useState)({}),o=Object(d.a)(a,2),l=o[0],j=o[1],b=Object(r.useState)({}),O=Object(d.a)(b,2),p=O[0],m=O[1],x=Object(f.g)();return Object(r.useEffect)((function(){var t=e;Object.keys(l).length&&(t=e.filter((function(e){return e.color.some((function(e){return e.toLowerCase()in l}))}))),Object.keys(p).length&&(t=t.filter((function(e){return e.category.some((function(e){return e.toLowerCase()in p}))}))),i(t)}),[l,p,e]),Object(n.jsx)("div",{className:"component-home",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"left-pane desktop-visible",children:[Object(n.jsx)(B,{onClick:function(e,t){if("all categories"===t.toLowerCase())return m({});if(t in p){p[t];var c=Object(I.a)(p,[t].map(F.a));m(c)}else m(Object(E.a)({},t,!0))},headerItem:V,items:W,selected:p}),Object(n.jsx)(B,{onClick:function(e,t){if("all colors"===t.toLowerCase())return j({});if(t in l){l[t];var c=Object(I.a)(l,[t].map(F.a));j(c)}else j(Object(u.a)(Object(u.a)({},l),{},Object(E.a)({},t,!0)))},headerItem:D,items:J,selected:l,multiselect:!0,colored:!0})]}),Object(n.jsxs)("div",{className:"inner-container",children:[s.length?Object(n.jsx)("div",{className:"product-list",children:s.map((function(e){if(e.hidden)return null;return Object(n.jsx)(H,{onClick:function(){x.push("/product/".concat(e.id))},name:e.name,description:e.description,price:e.price,imgSrc:e.imgSrc},e.id)}))}):"No pieces found.",Object(n.jsx)("p",{style:{textAlign:"center",fontSize:"9px"},children:"~"}),Object(n.jsx)("p",{style:{textAlign:"center"},children:"Collection"})]}),Object(n.jsx)("div",{className:"right-pane desktop-visible",children:Object(n.jsx)(B,{onClick:function(e,t){},headerItem:U,items:["Latest arrivals","Trending","Price: Low to high","Price: High to low","Sale: Low to high","Sale: High to low"]})})]})})};c(52),c(53);function q(e){var t=e.productId,c=e.price,s=e.onFormInitializationError,i=Object(r.useState)(!1),a=Object(d.a)(i,2),o=a[0],l=a[1],u=Object(r.useState)(null),b=Object(d.a)(u,2),h=b[0],O=b[1],p=Object(r.useState)(!1),f=Object(d.a)(p,2),g=f[0],v=f[1],C=Object(r.useState)(""),y=Object(d.a)(C,2),S=y[0],k=y[1],w=Object(r.useState)(!0),N=Object(d.a)(w,2),P=N[0],z=N[1],A=Object(r.useState)(""),E=Object(d.a)(A,2),I=E[0],F=E[1],L=Object(r.useState)(""),T=Object(d.a)(L,2),B=T[0],M=T[1],G=Object(j.useStripe)(),H=Object(j.useElements)();Object(r.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.joroze.com/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:[t]})}).then((function(e){return e.json()}));case 3:c=e.sent,M(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){g&&s&&s()}),[g,s]);var V=function(){var e=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z(t.empty),O(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(x.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),k(!0),e.next=4,G.confirmCardPayment(B,{receipt_email:I,payment_method:{card:H.getElement(j.CardElement)}});case 4:(c=e.sent).error?(O("Payment failed ".concat(c.error.message)),k(!1)):(O(null),k(!1),l(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"component-checkout-form",children:g?"Stripe API error: re-open this modal.":Object(n.jsxs)("form",{id:"payment-form",onSubmit:W,children:[Object(n.jsx)("input",{type:"text",value:I,onChange:function(e){return F(e.target.value)},placeholder:"Enter email address"}),Object(n.jsx)(j.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:V}),Object(n.jsx)("button",{disabled:S||P||o,id:"submit",children:Object(n.jsx)("span",{id:"button-text",children:S?Object(n.jsx)("div",{className:"spinner",id:"spinner"}):"Pay $".concat(c)})}),h&&Object(n.jsx)("div",{className:"card-error",role:"alert",children:h}),Object(n.jsx)("p",{className:o?"result-message":"result-message hidden",children:"Payment succeeded, we will reach out to you on your order within 48 hours."})]})})}c(54);var R=function(e){var t=e.title,c=e.onClose,r=e.content,s=e.children,i=e.className;return Object(n.jsx)("div",{className:"component-modal ".concat(i||""),children:Object(n.jsxs)("div",{className:"modal",children:[c&&Object(n.jsx)(L,{onClick:c,borderless:!0,content:"x"}),t&&Object(n.jsx)("div",{className:"modal-header",children:t}),(r||s)&&Object(n.jsx)("div",{className:"modal-content",children:r||s})]})})};var Y=function(e){var t=Object(r.useContext)(h).products,c=Object(f.h)().id,s=Object(f.g)(),i=Object(r.useState)(!1),a=Object(d.a)(i,2),o=a[0],l=a[1],j=function(){return l(!o)},u=Object(r.useMemo)((function(){return t.find((function(e){return e.id===Number(c)}))}),[c,t]);return u?Object(n.jsxs)("div",{className:"component-product-page",children:[Object(n.jsxs)("div",{className:"product-page-container",children:[Object(n.jsx)(L,{onClick:function(){return s.push("/")},borderless:!0,children:"< Previous"}),Object(n.jsx)(H,{name:u.name,description:u.description,price:u.price,imgSrc:u.imgSrc,detailedImageView:!0},u.id),u.available?Object(n.jsx)(L,{onClick:j,borderless:!0,children:"Purchase"}):Object(n.jsx)(L,{disabled:!0,borderless:!0,children:"Unavailable"})]}),Object(n.jsx)("p",{style:{textAlign:"center",fontSize:"9px",marginTop:"15px"},children:"~"}),Object(n.jsxs)("div",{className:"product-disclosure",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"SCULPTURE"})," was founded on the philosophy of my roommate (Christopher Rizzo) matching the cost of a purchase towards myself in need, but has evolved to go deeper into the community. The more items we sell, the more my roommate matches his donation. As we grow, our giving and community efforts will continue to grow right alongside us. One purchased = one donation matched"]}),Object(n.jsx)("div",{children:"Disclosure: Donation per purchase is matched up to $100."})]}),o&&Object(n.jsxs)(R,{className:"product-modal",title:"Confirm purchase",onClose:j,children:[Object(n.jsxs)("div",{children:["You are purchasing the following Scultpure: ",Object(n.jsx)("strong",{children:u.name})]}),Object(n.jsx)("img",{src:u.imgSrc[0],alt:u.name}),Object(n.jsx)(q,{productId:c,price:u.price,onFormInitializationError:j})]})]}):Object(n.jsx)(f.a,{to:"/"})},$={1:[z,A],2:[k],3:[S],4:[w,N],5:[P],6:[],7:[y]};var Q=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(!0),a=Object(d.a)(i,2),o=a[0],l=a[1],j=Object(f.g)(),b=Object(r.useContext)(h).setProducts;Object(r.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.joroze.com/products").then((function(e){return e.json()}));case 3:t=e.sent,c=t.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{imgSrc:$[e.id]})})),b(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b([]);case 11:l(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var O=Object(v.useMediaQuery)({query:"(min-width: 1024px)"},void 0,(function(){s(!1)}));function p(){s(!c)}return Object(n.jsxs)("div",{className:"component-app ".concat(c?"open":""),children:[c&&Object(n.jsxs)("div",{className:"app-nav-dropdown",children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Account"}),Object(n.jsx)("li",{children:"Contact"}),Object(n.jsx)("li",{children:"Wishlist"}),Object(n.jsx)("li",{children:"FAQ"})]}),Object(n.jsx)("div",{onClick:p,className:"close-menu",children:"Close"})]}),Object(n.jsx)("header",{className:"app-nav",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("nav",{children:Object(n.jsx)("ul",{children:O?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)(L,{borderless:!0,children:"Products"})}),Object(n.jsx)("li",{children:Object(n.jsx)(L,{borderless:!0,children:"Sale"})}),Object(n.jsx)("li",{children:Object(n.jsx)(L,{borderless:!0,children:"Search"})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)("span",{onClick:p,children:Object(n.jsx)(g.a,{size:"lg",icon:C.a})})}),Object(n.jsx)("li",{children:Object(n.jsx)("span",{children:Object(n.jsx)(g.a,{size:"lg",icon:C.b})})})]})})}),Object(n.jsx)("h2",{className:"title",children:Object(n.jsx)(L,{borderless:!0,onClick:function(){return j.push("/")},children:"Sculpture"})}),Object(n.jsx)("nav",{children:Object(n.jsx)("ul",{children:O?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)(L,{borderless:!0,children:"Wishlist"})}),Object(n.jsx)("li",{children:Object(n.jsx)(L,{borderless:!0,children:"Account"})}),Object(n.jsx)("li",{children:Object(n.jsx)(L,{borderless:!0,children:"Shopping Bag (0)"})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)("span",{children:Object(n.jsx)(g.a,{size:"lg",icon:C.e})})}),Object(n.jsx)("li",{children:Object(n.jsxs)("span",{children:[Object(n.jsx)(g.a,{size:"lg",icon:C.c})," (0)"]})})]})})})]})}),Object(n.jsx)("div",{className:"page-container",children:o?Object(n.jsx)(g.a,{icon:C.d,pulse:!0}):Object(n.jsxs)(f.d,{children:[Object(n.jsx)(f.b,{exact:!0,path:"/",children:Object(n.jsx)(_,{})}),Object(n.jsx)(f.b,{path:"/product/:id",children:Object(n.jsx)(Y,{})}),Object(n.jsx)(f.b,{children:Object(n.jsx)(f.a,{to:"/"})})]})})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))},X=Object(l.a)("pk_live_51HvPoYAHIVF9WsgGUMHqOLHoyrzbEvuWZjTMVkfzulb1ns9ze0P1KNm0MozGIA2XAGdlzisrx254BiV24GeDJy3d00PT0jmmWO");a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(j.Elements,{stripe:X,children:Object(n.jsx)(o.a,{children:Object(n.jsx)(O,{children:Object(n.jsx)(Q,{})})})})}),document.getElementById("root")),K()}},[[55,1,2]]]);
//# sourceMappingURL=main.b4b29230.chunk.js.map