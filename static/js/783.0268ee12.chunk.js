"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[783],{8783:function(e,n,o){o.r(n),o.d(n,{default:function(){return _}});var r=o(3715),t=o(4708),a=o(5980),i=o(3433),s=o(9439),c=o(4942),l=o(3366),u=o(7462),d=o(2791),m=o(8182),p=o(4419),h=o(4036),f=o(6934),v=o(1402),x=o(3031),Z=o(2071),b=o(890),y=o(5878),g=o(1217);function w(e){return(0,g.Z)("MuiLink",e)}var k=(0,y.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),j=o(8529),C=o(2065),S={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},D=function(e){var n=e.theme,o=e.ownerState,r=function(e){return S[e]||e}(o.color),t=(0,j.DW)(n,"palette.".concat(r),!1)||o.color,a=(0,j.DW)(n,"palette.".concat(r,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,C.Fq)(t,.4)},P=o(3329),A=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],F=(0,f.ZP)(b.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n["underline".concat((0,h.Z)(o.underline))],"button"===o.component&&n.button]}})((function(e){var n=e.theme,o=e.ownerState;return(0,u.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,u.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:D({theme:n,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&(0,c.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(k.focusVisible),{outline:"auto"}))})),V=d.forwardRef((function(e,n){var o=(0,v.Z)({props:e,name:"MuiLink"}),r=o.className,t=o.color,a=void 0===t?"primary":t,c=o.component,f=void 0===c?"a":c,b=o.onBlur,y=o.onFocus,g=o.TypographyClasses,k=o.underline,j=void 0===k?"always":k,C=o.variant,D=void 0===C?"inherit":C,V=o.sx,W=(0,l.Z)(o,A),L=(0,x.Z)(),R=L.isFocusVisibleRef,I=L.onBlur,M=L.onFocus,q=L.ref,z=d.useState(!1),B=(0,s.Z)(z,2),N=B[0],T=B[1],_=(0,Z.Z)(n,q),E=(0,u.Z)({},o,{color:a,component:f,focusVisible:N,underline:j,variant:D}),H=function(e){var n=e.classes,o=e.component,r=e.focusVisible,t=e.underline,a={root:["root","underline".concat((0,h.Z)(t)),"button"===o&&"button",r&&"focusVisible"]};return(0,p.Z)(a,w,n)}(E);return(0,P.jsx)(F,(0,u.Z)({color:a,className:(0,m.Z)(H.root,r),classes:g,component:f,onBlur:function(e){I(e),!1===R.current&&T(!1),b&&b(e)},onFocus:function(e){M(e),!0===R.current&&T(!0),y&&y(e)},ref:_,ownerState:E,variant:D,sx:[].concat((0,i.Z)(Object.keys(S).includes(a)?[]:[{color:a}]),(0,i.Z)(Array.isArray(V)?V:[V]))},W))})),W=o(5527),L=o(4554),R=o(1889),I=o(7107),M=o(4507),q=o(9434),z=o(5822),B=o(7689),N=o(4289),T=(0,I.Z)(),_=function(){var e=(0,q.I0)(),n=(0,B.s0)(),o=(0,q.v9)(N.Q);return(0,d.useEffect)((function(){o&&n("/contacts")}),[n,o]),(0,P.jsx)(M.Z,{theme:T,children:(0,P.jsxs)(R.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,P.jsx)(t.ZP,{}),(0,P.jsx)(R.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random?wallpapers)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),(0,P.jsx)(R.ZP,{item:!0,xs:12,sm:8,md:5,component:W.Z,elevation:6,square:!0,children:(0,P.jsxs)(L.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,P.jsx)(b.Z,{component:"h1",variant:"h5",children:"Log In"}),(0,P.jsxs)(L.Z,{component:"form",noValidate:!0,onSubmit:function(n){n.preventDefault();var o=n.currentTarget;e((0,z.vz)({email:o.elements.email.value,password:o.elements.password.value})),o.reset()},sx:{mt:1},children:[(0,P.jsx)(a.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,P.jsx)(a.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,P.jsx)(r.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Log In"}),(0,P.jsx)(R.ZP,{item:!0,children:(0,P.jsx)(V,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})})]})})}}}]);
//# sourceMappingURL=783.0268ee12.chunk.js.map