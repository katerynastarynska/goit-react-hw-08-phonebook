"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[706],{5706:function(e,n,t){t.r(n),t.d(n,{default:function(){return ae}});var r=t(9434),a=t(2791),o=t(7689),i=t(4554),s=t(890),c=t(9164),d=t(9439),u=t(6382),m=t(5218),l=t(5980),f=t(4281),p=t(3634),x=t(6916),v=function(e){return e.contacts.items},h=function(e){return e.contacts.isLoading},Z=(0,x.P1)([v,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),g=t(3329),b=function(){var e=(0,r.I0)(),n=(0,r.v9)(v),t=(0,a.useState)(""),o=(0,d.Z)(t,2),c=o[0],x=o[1],h=(0,a.useState)(""),Z=(0,d.Z)(h,2),b=Z[0],C=Z[1],j=(0,u.nanoid)(),w=(0,u.nanoid)(),S=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":x(r);break;case"number":C(r)}},M=function(){x(""),C("")},k=function(e){return!!/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([ '-][a-zA-Z\u0430-\u044f\u0410-\u042f]+)*$/.test(e)||(m.Am.error("Please enter a valid name"),!1)},y=function(e){return!!/^[+]?[0-9]{1,4}[-.\s]?[(]?[0-9]{1,3}[)]?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/.test(e)||(m.Am.error("Please enter a valid phone number"),!1)};return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(i.Z,{sx:{my:4,mx:4,mb:4,mt:0,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)(s.Z,{component:"h1",variant:"h5",children:"Add contact"}),(0,g.jsxs)(i.Z,{component:"form",onSubmit:function(t){t.preventDefault();var r=t.currentTarget,a=r.elements.name.value,o=r.elements.number.value;if(k(a)&&y(o)){if(n.some((function(e){return e.name.toLowerCase()===a.toLowerCase()})))m.Am.error("".concat(a," is already in contacts"));else{var i={id:(0,u.nanoid)(),name:a,number:o};e((0,p.ky)(i)),m.Am.success("".concat(i.name," successfully added to your phonebook!"))}M()}},sx:{mt:1},color:"#1a6bc7",children:[(0,g.jsx)(l.Z,{margin:"normal",required:!0,fullWidth:!0,value:c,id:j,label:"Name",name:"name",autoComplete:"name",autoFocus:!0,onChange:S}),(0,g.jsx)(l.Z,{margin:"normal",required:!0,fullWidth:!0,name:"number",label:"Phone number",value:b,id:w,autoComplete:"number",onChange:S}),(0,g.jsx)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})]})})},C=t(7107),j=t(4507),w=t(1889),S=t(4708),M=t(7462),k=t(3366),y=t(8182),W=t(4419),R=t(6934),N=t(1402),P=t(5527),G=t(5878),A=t(1217);function I(e){return(0,A.Z)("MuiCard",e)}(0,G.Z)("MuiCard",["root"]);var F=["className","raised"],L=(0,R.ZP)(P.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),z=a.forwardRef((function(e,n){var t=(0,N.Z)({props:e,name:"MuiCard"}),r=t.className,a=t.raised,o=void 0!==a&&a,i=(0,k.Z)(t,F),s=(0,M.Z)({},t,{raised:o}),c=function(e){var n=e.classes;return(0,W.Z)({root:["root"]},I,n)}(s);return(0,g.jsx)(L,(0,M.Z)({className:(0,y.Z)(c.root,r),elevation:o?8:void 0,ref:n,ownerState:s},i))}));function D(e){return(0,A.Z)("MuiCardActions",e)}(0,G.Z)("MuiCardActions",["root","spacing"]);var T=["disableSpacing","className"],B=(0,R.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,M.Z)({display:"flex",alignItems:"center",padding:8},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),_=a.forwardRef((function(e,n){var t=(0,N.Z)({props:e,name:"MuiCardActions"}),r=t.disableSpacing,a=void 0!==r&&r,o=t.className,i=(0,k.Z)(t,T),s=(0,M.Z)({},t,{disableSpacing:a}),c=function(e){var n=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,W.Z)(t,D,n)}(s);return(0,g.jsx)(B,(0,M.Z)({className:(0,y.Z)(c.root,o),ownerState:s,ref:n},i))}));function q(e){return(0,A.Z)("MuiCardContent",e)}(0,G.Z)("MuiCardContent",["root"]);var O=["className","component"],$=(0,R.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),E=a.forwardRef((function(e,n){var t=(0,N.Z)({props:e,name:"MuiCardContent"}),r=t.className,a=t.component,o=void 0===a?"div":a,i=(0,k.Z)(t,O),s=(0,M.Z)({},t,{component:o}),c=function(e){var n=e.classes;return(0,W.Z)({root:["root"]},q,n)}(s);return(0,g.jsx)($,(0,M.Z)({as:o,className:(0,y.Z)(c.root,r),ownerState:s,ref:n},i))}));function K(e){return(0,A.Z)("MuiCardMedia",e)}(0,G.Z)("MuiCardMedia",["root","media","img"]);var Q=["children","className","component","image","src","style"],H=(0,R.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState,r=t.isMediaComponent,a=t.isImageComponent;return[n.root,r&&n.media,a&&n.img]}})((function(e){var n=e.ownerState;return(0,M.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},n.isMediaComponent&&{width:"100%"},n.isImageComponent&&{objectFit:"cover"})})),J=["video","audio","picture","iframe","img"],U=["picture","img"],V=a.forwardRef((function(e,n){var t=(0,N.Z)({props:e,name:"MuiCardMedia"}),r=t.children,a=t.className,o=t.component,i=void 0===o?"div":o,s=t.image,c=t.src,d=t.style,u=(0,k.Z)(t,Q),m=-1!==J.indexOf(i),l=!m&&s?(0,M.Z)({backgroundImage:'url("'.concat(s,'")')},d):d,f=(0,M.Z)({},t,{component:i,isMediaComponent:m,isImageComponent:-1!==U.indexOf(i)}),p=function(e){var n=e.classes,t={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,W.Z)(t,K,n)}(f);return(0,g.jsx)(H,(0,M.Z)({className:(0,y.Z)(p.root,a),as:i,role:!m&&s?"img":void 0,ref:n,style:l,ownerState:f,src:m?s||c:void 0},u,{children:r}))}));function X(e){var n=e.name,t=e.number,a=e.id,o=(0,r.I0)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(i.Z,{m:2,children:(0,g.jsxs)(z,{sx:{height:"100%",width:"100%",display:"flex",flexDirection:"column"},children:[(0,g.jsx)(V,{component:"div",sx:{16:9,pt:"65%"},image:"https://source.unsplash.com/random?wallpapers"}),(0,g.jsxs)(E,{sx:{flexGrow:1},children:[(0,g.jsx)(s.Z,{gutterBottom:!0,variant:"body1",sx:{fontSize:"15px",color:"#1a6bc7"},children:(0,g.jsxs)(i.Z,{component:"span",children:[n,":"]})}),(0,g.jsx)(s.Z,{gutterBottom:!0,variant:"body1",sx:{fontSize:"15px",color:"#1a6bc7"},children:(0,g.jsx)(i.Z,{component:"span",children:t})})]}),(0,g.jsx)(_,{children:(0,g.jsx)(f.Z,{variant:"outlined",size:"small",onClick:function(){o((0,p.GK)(a))},children:"Delete"})})]})})})}var Y=function(){var e=(0,r.v9)(Z),n=(0,C.Z)({palette:{primary:{main:"#074a97"},text:{primary:"#074a97"}}});return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(j.Z,{theme:n,children:[(0,g.jsx)(S.ZP,{}),(0,g.jsx)("main",{children:(0,g.jsx)(c.Z,{sx:{py:8},maxWidth:"md",children:(0,g.jsx)(w.ZP,{container:!0,spacing:2,justifyContent:"center",children:e.map((function(n){var t=n.name,r=n.number,a=n.id;return(0,g.jsx)(w.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,g.jsx)(X,{name:t,number:r,onDeleteContact:e,id:a})},a)}))})})})]})})},ee=t(4289),ne=t(3767);function te(){var e=(0,r.I0)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(i.Z,{sx:{my:4,mx:4,mb:4,mt:0,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)(s.Z,{component:"h1",variant:"h5",children:"Find contacts by name"}),(0,g.jsx)(i.Z,{component:"form",sx:{mt:1},children:(0,g.jsx)(l.Z,{margin:"normal",required:!0,fullWidth:!0,name:"name",autoFocus:!0,onChange:function(n){e((0,ne.G)(n.currentTarget.value))},sx:{width:"300px"}})})]})})}var re=t(1400),ae=function(){var e=(0,r.v9)(h),n=(0,r.v9)(ee.Qb),t=(0,r.I0)(),d=(0,o.s0)();return(0,a.useEffect)((function(){n?t((0,p.yF)()):d("/login")}),[t,d,n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Z,{sx:{bgcolor:"background.paper",pt:4,pb:0},children:(0,g.jsx)(c.Z,{maxWidth:"sm",children:(0,g.jsx)(s.Z,{component:"h1",variant:"h2",align:"center",color:"#1a6bc7",gutterBottom:!0,children:"Phonebook"})})}),(0,g.jsx)(b,{}),(0,g.jsx)(te,{}),e&&(0,g.jsx)(re.Z,{}),n&&(0,g.jsx)(Y,{})]})}},9164:function(e,n,t){t.d(n,{Z:function(){return S}});var r=t(4942),a=t(3366),o=t(7462),i=t(2791),s=t(8182),c=t(1122),d=t(1217),u=t(4419),m=t(7078),l=t(3457),f=t(5080),p=t(3329),x=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,f.Z)(),h=(0,l.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,c.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),Z=function(e){return(0,m.Z)({props:e,name:"MuiContainer",defaultTheme:v})},g=function(e,n){var t=e.classes,r=e.fixed,a=e.disableGutters,o=e.maxWidth,i={root:["root",o&&"maxWidth".concat((0,c.Z)(String(o))),r&&"fixed",a&&"disableGutters"]};return(0,u.Z)(i,(function(e){return(0,d.Z)(n,e)}),t)};var b=t(4036),C=t(6934),j=t(1402),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?h:n,c=e.useThemeProps,d=void 0===c?Z:c,u=e.componentName,m=void 0===u?"MuiContainer":u,l=t((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,r.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(e){var n=e.theme;return e.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(e,t){var r=t,a=n.breakpoints.values[r];return 0!==a&&(e[n.breakpoints.up(r)]={maxWidth:"".concat(a).concat(n.breakpoints.unit)}),e}),{})}),(function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({},"xs"===t.maxWidth&&(0,r.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,r.Z)({},n.breakpoints.up(t.maxWidth),{maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)}))})),f=i.forwardRef((function(e,n){var t=d(e),r=t.className,i=t.component,c=void 0===i?"div":i,u=t.disableGutters,f=void 0!==u&&u,v=t.fixed,h=void 0!==v&&v,Z=t.maxWidth,b=void 0===Z?"lg":Z,C=(0,a.Z)(t,x),j=(0,o.Z)({},t,{component:c,disableGutters:f,fixed:h,maxWidth:b}),w=g(j,m);return(0,p.jsx)(l,(0,o.Z)({as:c,ownerState:j,className:(0,s.Z)(w.root,r),ref:n},C))}));return f}({createStyledComponent:(0,C.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,b.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),useThemeProps:function(e){return(0,j.Z)({props:e,name:"MuiContainer"})}}),S=w}}]);
//# sourceMappingURL=706.92b0217f.chunk.js.map