(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{29:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(12),s=n.n(r),i=(n(40),n(2)),o=(n(41),n(4)),l=n(7),j=n(3),u=n.n(j),d=n(8),b=(n(43),n(0)),h=function(e){return Object(b.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:Object(b.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})})},O=(n(45),function(e){return Object(b.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})});n(46);var p=function(e){return Object(b.jsx)("li",{className:"user-item",children:Object(b.jsx)(O,{className:"user-item__content",children:Object(b.jsxs)(l.b,{to:"/".concat(e.id,"/places"),children:[Object(b.jsx)("div",{className:"user-item__image",children:Object(b.jsx)(h,{image:e.image,alt:e.name})}),Object(b.jsx)("div",{className:"user-item__info",children:Object(b.jsx)("h2",{children:e.name})})]})})})};n(51);var m=function(e){return Object(b.jsx)("ul",{className:"users-list",children:e.items.map((function(e){return Object(b.jsx)(p,{id:e.id,image:e.image,name:e.name,placeCount:e.places},e.id)}))})},x=n(18),f=n(71),v=(n(52),function(e){return s.a.createPortal(Object(b.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),g=(n(53),function(e){var t=Object(b.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[Object(b.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:Object(b.jsx)("h2",{children:e.header})}),Object(b.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[Object(b.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),Object(b.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return s.a.createPortal(t,document.getElementById("modal-hook"))}),w=function(e){return Object(b.jsxs)(a.a.Fragment,{children:[e.show&&Object(b.jsx)(v,{onClick:e.onCancel}),Object(b.jsx)(f.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:Object(b.jsx)(g,Object(x.a)({},e))})]})},k=(n(56),function(e){return e.href?Object(b.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?Object(b.jsx)(l.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):Object(b.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}),y=function(e){return Object(b.jsx)(w,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:Object(b.jsx)(k,{onClick:e.onClear,children:"Okay"}),children:Object(b.jsx)("p",{children:e.error})})},C=(n(57),function(e){return Object(b.jsx)("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay"),children:Object(b.jsx)("div",{className:"lds-dual-ring"})})}),S=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(),o=Object(i.a)(s,2),l=o[0],j=o[1],h=Object(c.useState)(),O=Object(i.a)(h,2),p=O[0],x=O[1];Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("https://places-appstream.herokuapp.com/api/users");case 4:return t=e.sent,e.next=7,t.json();case 7:if(n=e.sent,t.ok){e.next=10;break}throw new Error(n.message);case 10:x(n.users),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),j(e.t0.message);case 16:r(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(y,{error:l,onClear:function(){j(null)}}),n&&Object(b.jsx)("div",{className:"center",children:Object(b.jsx)(C,{})}),!n&&p&&Object(b.jsx)(m,{items:p})]})},N=n(16),_=(n(29),n(60),Object(c.createContext)({isLoggedIn:!1,userId:null,login:function(){},logout:function(){}})),I=(n(61),function(e){var t=Object(c.useState)(),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(),o=Object(i.a)(s,2),l=o[0],j=o[1],u=Object(c.useState)(!1),d=Object(i.a)(u,2),h=d[0],O=d[1],p=Object(c.useRef)();Object(c.useEffect)((function(){if(a){var e=new FileReader;e.onload=function(){j(e.result)},e.readAsDataURL(a)}}),[a]);return Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("input",{id:e.id,ref:p,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var n,c=h;t.target.files&&1===t.target.files.length?(n=t.target.files[0],r(n),O(!0),c=!0):(O(!1),c=!1),e.onInput(e.id,n,c)}}),Object(b.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[Object(b.jsxs)("div",{className:"image-upload__preview",children:[l&&Object(b.jsx)("img",{src:l,alt:"Preview"}),!l&&Object(b.jsx)("p",{children:"Please pick an image."})]}),Object(b.jsx)(k,{type:"button",onClick:function(){p.current.click()},children:"PICK IMAGE"})]}),!h&&Object(b.jsx)("p",{children:e.errorText})]})}),E=function(){var e=Object(c.useContext)(_),t=Object(c.useState)(!0),n=Object(i.a)(t,2),r=(n[0],n[1],Object(c.useState)(!1)),s=Object(i.a)(r,2),l=s[0],j=s[1],h=Object(c.useState)(),O=Object(i.a)(h,2),p=O[0],m=O[1],x=Object(c.useState)(null),f=Object(i.a)(x,2),v=f[0],g=f[1],w=function(e,t,n){g(t)},k=function(){m(null)},S=Object(o.g)();return Object(b.jsx)("div",{className:"form-control",children:Object(b.jsx)(N.a,{initialValues:{title:"",description:"",address:"",image:{value:v}},validate:function(e){var t={};return e.title||(t.title="Required"),t},onSubmit:function(){var t=Object(d.a)(u.a.mark((function t(n,c){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,c.setSubmitting)(!1),j(!0),t.prev=3,t.next=6,fetch("https://places-appstream.herokuapp.com/api/places",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n.title,description:n.description,address:n.address,creator:e.userId,image:n.image.value})});case 6:return a=t.sent,t.next=9,a.json();case 9:if(r=t.sent,a.ok){t.next=12;break}throw new Error(r.message);case 12:j(!1),S.push("/"),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(3),j(!1),m(t.t0.message||"Something went wrong, please try again.");case 20:case"end":return t.stop()}}),t,null,[[3,16]])})));return function(e,n){return t.apply(this,arguments)}}(),children:function(e){var t=e.values,n=e.errors,c=e.touched,r=e.handleChange,s=e.handleBlur,i=e.handleSubmit,o=e.isSubmitting;return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(y,{error:p,onClear:k}),Object(b.jsxs)("form",{onSubmit:i,className:"place-form",children:[l&&Object(b.jsx)(C,{asOverlay:!0}),Object(b.jsx)("label",{children:"Title"}),Object(b.jsx)("input",{type:"text",name:"title",onChange:r,onBlur:s,value:t.title}),Object(b.jsx)("p",{style:{color:"red"},children:n.title&&c.title&&n.title}),Object(b.jsx)("label",{children:"Description"}),Object(b.jsx)("textarea",{type:"text",name:"description",onChange:r,onBlur:s,rows:3,value:t.description}),Object(b.jsx)("label",{children:"Address"}),Object(b.jsx)("input",{type:"text",name:"address",onChange:r,onBlur:s,value:t.address}),Object(b.jsx)(I,{id:"image",onInput:w}),Object(b.jsx)("button",{type:"submit",disabled:o,children:"Add Place"})]})]})}})})},P=(n(62),function(e){return Object(b.jsx)("header",{className:"main-header",children:e.children})});n(63);var L=function(e){var t=Object(c.useContext)(_);return Object(b.jsxs)("ul",{className:"nav-links",children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",exact:!0,children:"Home"})}),t.isLoggedIn&&Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/".concat(t.userId,"/places"),children:"My Places"})}),t.isLoggedIn&&Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/places/new",children:"Add Place"})}),!t.isLoggedIn&&Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/auth",children:"Log In"})}),t.isLoggedIn&&Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:t.logout,children:"LogOut"})})]})},B=(n(64),function(e){var t=Object(b.jsx)(f.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0,children:Object(b.jsx)("aside",{className:"side-drawer",onClick:e.onClick,children:e.children})});return s.a.createPortal(t,document.getElementById("drawer-hook"))}),T=(n(65),function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],s=n[1],o=function(){s(!1)};return Object(b.jsxs)(a.a.Fragment,{children:[r&&Object(b.jsx)(v,{onClick:o}),Object(b.jsx)(B,{show:r,onClick:o,children:Object(b.jsx)("nav",{className:"main-navigation__drawer-nav",children:Object(b.jsx)(L,{})})}),Object(b.jsxs)(P,{children:[Object(b.jsxs)("button",{className:"main-navigation__menu-btn",onClick:function(){s(!0)},children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{})]}),Object(b.jsx)("h1",{className:"main-navigation__title",children:Object(b.jsx)(l.b,{to:"/",children:"YourPlaces"})}),Object(b.jsx)("nav",{className:"main-navigation__header-nav",children:Object(b.jsx)(L,{})})]})]})}),D=(n(66),n(67),function(e){var t=Object(c.useRef)(),n=e.center;return Object(c.useEffect)((function(){new window.ol.Map({target:t.current.id,layers:[new window.ol.layer.Tile({source:new window.ol.source.OSM})],view:new window.ol.View({center:window.ol.proj.fromLonLat([n.lng,n.lat]),zoom:18})})}),[n]),Object(b.jsx)("div",{ref:t,className:"map ".concat(e.className),style:e.style,id:"map"})}),A=(n(68),function(e){var t=Object(c.useContext)(_),n=Object(c.useState)(!1),r=Object(i.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)(!1),j=Object(i.a)(l,2),h=j[0],p=j[1],m=Object(c.useState)(!1),x=Object(i.a)(m,2),f=x[0],v=(x[1],Object(c.useState)()),g=Object(i.a)(v,2),S=g[0],N=g[1],I=function(){return o(!1)},E=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var t=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!1),t.prev=1,t.next=4,fetch("http://localhost:5000/api/places/".concat(e.id),{method:"DELETE"});case 4:t.sent,e.onDelete(e.id),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(y,{error:S,onClear:function(){N(null)}}),Object(b.jsx)(w,{show:s,onCancel:I,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:Object(b.jsx)(k,{onClick:I,children:"CLOSE"}),children:Object(b.jsx)("div",{className:"map-container",children:Object(b.jsx)(D,{center:e.coordinates})})}),Object(b.jsx)(w,{show:h,onCancel:P,header:"Delete",footerClass:"place-item__modal-actions",footer:Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(k,{inverse:!0,onClick:P,children:"Cancel"}),Object(b.jsx)(k,{danger:!0,onClick:L,children:"Delete"})]}),children:Object(b.jsx)("p",{children:"Are you sure you want to delete?"})}),Object(b.jsx)("li",{className:"place-item",children:Object(b.jsxs)(O,{className:"place-item__content",children:[f&&Object(b.jsx)(C,{asOverlay:!0}),Object(b.jsx)("div",{className:"place-item__image",children:Object(b.jsx)("img",{src:"http://localhost:5000/".concat(e.image),alt:e.title})}),Object(b.jsxs)("div",{className:"place-item__info",children:[Object(b.jsx)("h2",{children:e.title}),Object(b.jsx)("h3",{children:e.address}),Object(b.jsx)("p",{children:e.description})]}),Object(b.jsxs)("div",{className:"place-item__actions",children:[Object(b.jsx)(k,{inverse:!0,onClick:function(){return o(!0)},children:"VIEW ON MAP"}),t.userId===e.creatorId&&Object(b.jsx)(k,{to:"/places/".concat(e.id),children:"EDIT"}),t.userId===e.creatorId&&Object(b.jsx)(k,{danger:!0,onClick:E,children:"DELETE"})]})]})})]})});var F=function(e){return 0===e.items.length?Object(b.jsx)("div",{className:"place-list center",children:Object(b.jsx)(O,{children:Object(b.jsx)("h2",{children:"No Places Found!"})})}):Object(b.jsx)("ul",{className:"place-list",children:e.items.map((function(e){return Object(b.jsx)(A,{id:e.id,image:e.image,title:e.title,description:e.description,address:e.address,creatorId:e.creator,coordinates:e.location,onDelete:e.onDeletePlace},e.id)}))})};var R=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(),l=Object(i.a)(s,2),j=l[0],h=l[1],O=Object(c.useState)(),p=Object(i.a)(O,2),m=p[0],x=p[1],f=Object(o.h)().userId;return Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("https://places-appstream.herokuapp.com/api/places/user/".concat(f));case 4:return t=e.sent,e.next=7,t.json();case 7:if(n=e.sent,t.ok){e.next=10;break}throw new Error(n.message);case 10:x(n.place),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),h(e.t0.message);case 16:r(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(y,{error:j,onClear:function(){h(null)}}),n&&Object(b.jsx)("div",{className:"center",children:Object(b.jsx)(C,{asOverlay:!0})}),!n&&m&&Object(b.jsx)(F,{items:m,onDeletePlace:function(e){x((function(t){return t.filter((function(t){return t.id!=e}))}))}})]})},J=function(){var e=Object(o.h)().placeId,t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=(n[0],n[1]),s=Object(c.useState)(),l=Object(i.a)(s,2),j=l[0],h=l[1],O=Object(c.useState)(),p=Object(i.a)(O,2),m=p[0],x=p[1],f=Object(o.g)();Object(c.useEffect)((function(){var t=function(){var t=Object(d.a)(u.a.mark((function t(){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.prev=1,t.next=4,fetch("https://places-appstream.herokuapp.com/api/places/".concat(e));case 4:return n=t.sent,t.next=7,n.json();case 7:if(c=t.sent,n.ok){t.next=10;break}throw new Error(c.message);case 10:x(c.place),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),h(t.t0.message);case 16:r(!1);case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var v=function(){h(null)};return m?Object(b.jsx)("div",{className:"form-control",children:Object(b.jsx)(N.a,{initialValues:{title:m.title,description:m.description},validate:function(e){var t={};return e.title||(t.title="Required"),t},onSubmit:function(){var t=Object(d.a)(u.a.mark((function t(n,c){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,c.setSubmitting)(!1),r(!0),t.prev=3,t.next=6,fetch("https://places-appstream.herokuapp.com/api/places/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n.title,description:n.description})});case 6:return a=t.sent,t.next=9,a.json();case 9:if(s=t.sent,a.ok){t.next=12;break}throw new Error(s.message);case 12:r(!1),f.push("/"),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(3),r(!1),h(t.t0.message||"Something went wrong, please try again.");case 20:case"end":return t.stop()}}),t,null,[[3,16]])})));return function(e,n){return t.apply(this,arguments)}}(),children:function(e){var t=e.values,n=(e.errors,e.touched,e.handleChange),c=e.handleBlur,r=e.handleSubmit,s=e.isSubmitting;return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(y,{error:j,onClear:v}),Object(b.jsxs)("form",{onSubmit:r,className:"place-form",children:[Object(b.jsx)("label",{children:"Title"}),Object(b.jsx)("input",{type:"text",name:"title",onChange:n,onBlur:c,value:t.title}),Object(b.jsx)("label",{children:"Description"}),Object(b.jsx)("textarea",{type:"text",name:"description",onChange:n,onBlur:c,rows:3,value:t.description}),Object(b.jsx)("button",{type:"submit",disabled:s,children:"Update Place"})]})]})}})}):Object(b.jsx)("div",{className:"center",children:Object(b.jsx)("h2",{children:"Could not find place!"})})},M=(n(69),function(){var e=Object(c.useContext)(_),t=Object(c.useState)(!0),n=Object(i.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(!1),l=Object(i.a)(o,2),j=l[0],h=l[1],p=Object(c.useState)(),m=Object(i.a)(p,2),x=m[0],f=m[1],v=function(){s((function(e){return!e}))},g=function(){f(null)};return Object(b.jsx)("div",{className:"form-control",children:Object(b.jsx)(N.a,{initialValues:{name:"",email:"",password:""},validate:function(e){var t={};return e.name||(t.name="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password||(t.password="Required"),t},onSubmit:function(){var t=Object(d.a)(u.a.mark((function t(n,c){var a,s,i,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,c.setSubmitting)(!1),h(!0),!r){t.next=23;break}return t.prev=4,t.next=7,fetch("https://places-appstream.herokuapp.com/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.email,password:n.password})});case 7:return a=t.sent,t.next=10,a.json();case 10:if(s=t.sent,a.ok){t.next=13;break}throw new Error(s.message);case 13:h(!1),e.login(s.user.id),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(4),h(!1),f(t.t0.message||"Something went wrong, please try again.");case 21:t.next=40;break;case 23:return t.prev=23,t.next=26,fetch("https://places-appstream.herokuapp.com/api/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.name,email:n.email,password:n.password})});case 26:return i=t.sent,t.next=29,i.json();case 29:if(o=t.sent,i.ok){t.next=32;break}throw new Error(o.message);case 32:h(!1),e.login(o.user.id),t.next=40;break;case 36:t.prev=36,t.t1=t.catch(23),h(!1),f(t.t1.message||"Something went wrong, please try again.");case 40:case"end":return t.stop()}}),t,null,[[4,17],[23,36]])})));return function(e,n){return t.apply(this,arguments)}}(),children:function(e){var t=e.values,n=e.errors,c=e.touched,s=e.handleChange,i=e.handleBlur,o=e.handleSubmit,l=e.isSubmitting;return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(y,{error:x,onClear:g}),Object(b.jsxs)(O,{className:"authentication",children:[j&&Object(b.jsx)(C,{asOverlay:!0}),Object(b.jsxs)("form",{onSubmit:o,className:"place-form",children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",onChange:s,onBlur:i,value:t.name}),Object(b.jsx)("p",{style:{color:"red"},children:n.name&&c.name&&n.name}),Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"email",name:"email",onChange:s,onBlur:i,value:t.email}),Object(b.jsx)("p",{style:{color:"red"},children:n.email&&c.email&&n.email}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",onChange:s,onBlur:i,value:t.password}),Object(b.jsx)("p",{style:{color:"red"},children:n.password&&c.password&&n.password}),Object(b.jsx)("button",{type:"submit",disabled:l,children:r?"LogIn":"SignUp"}),Object(b.jsxs)("button",{type:"reset",style:{backgroundColor:"red",border:"none"},onClick:v,children:["Switch to ",r?"SignUp":"Login"]})]})]})]})}})})});var q=function(){var e,t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),j=Object(i.a)(s,2),u=j[0],d=j[1],h=Object(c.useCallback)((function(e){r(!0),d(e)}),[]),O=Object(c.useCallback)((function(){r(!1),d(null)}),[]);return e=a?Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",exact:!0,children:Object(b.jsx)(S,{})}),Object(b.jsx)(o.b,{path:"/:userId/places",exact:!0,children:Object(b.jsx)(R,{})}),Object(b.jsx)(o.b,{path:"/places/new",exact:!0,children:Object(b.jsx)(E,{})}),Object(b.jsx)(o.b,{path:"/places/:placeId",children:Object(b.jsx)(J,{})}),Object(b.jsx)(o.a,{to:"/"})]}):Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",exact:!0,children:Object(b.jsx)(S,{})}),Object(b.jsx)(o.b,{path:"/:userId/places",exact:!0,children:Object(b.jsx)(R,{})}),Object(b.jsx)(o.b,{path:"/auth",children:Object(b.jsx)(M,{})}),Object(b.jsx)(o.a,{to:"/auth"})]}),Object(b.jsx)(_.Provider,{value:{isLoggedIn:a,userId:u,login:h,logout:O},children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(T,{}),Object(b.jsx)("main",{children:e})]})})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.beba3f0a.chunk.js.map