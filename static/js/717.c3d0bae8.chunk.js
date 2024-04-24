"use strict";(self.webpackChunkmovies_graphql=self.webpackChunkmovies_graphql||[]).push([[717],{9717:(e,n,t)=>{t.r(n),t.d(n,{Component:()=>D});var i=t(5043),o=t(8903),s=t(9252),r=t(5865),l=t(611),a=t(8581);var d=t(950),c=t(3336),u=t(3193),x=t(2313),h=t(9041),m=t(7121),p=t(1292),v=t(9413),g=t(4605),A=t(3217),j=t(1906),f=t(7733),y=t(4858),b=t(1954),k=t(579);function w(e){let{onApply:n}=e;const{control:t,handleSubmit:o,formState:s}=(0,y.mN)({defaultValues:{keywords:[],genres:[]}}),[r,l]=(0,i.useState)(""),{data:a=[],isLoading:w}=(0,b.q6)(r,{skip:!r}),{data:C,isLoading:I}=(0,b.eE)(),N=(0,i.useMemo)((()=>(0,d.A)((e=>{l(e)}),1e3)),[]);return(0,k.jsx)(c.A,{sx:{m:2,p:.5,maxWidth:350},children:(0,k.jsxs)("form",{onSubmit:o(n),children:[(0,k.jsx)(u.A,{sx:{m:2,display:"block"},component:"fieldset",variant:"standard",children:(0,k.jsx)(y.xI,{name:"keywords",control:t,render:e=>{let{field:{onChange:n,value:t}}=e;return(0,k.jsx)(x.A,{multiple:!0,loading:w,disablePortal:!0,options:a,filterOptions:e=>e,getOptionLabel:e=>e.name,onChange:(e,t)=>n(t),value:t,isOptionEqualToValue:(e,n)=>e.id===n.id,onInputChange:(e,n)=>N(n),renderInput:e=>(0,k.jsx)(h.A,{...e,label:"Keywords"})})}})}),(0,k.jsx)(u.A,{sx:{m:2,display:"block"},component:"fieldset",variant:"standard",children:I?(0,k.jsx)(m.A,{width:300,height:480}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p.A,{component:"legend",children:"Genres"}),(0,k.jsx)(v.A,{sx:{maxHeight:500},children:(0,k.jsx)(y.xI,{name:"genres",control:t,render:e=>{let{field:n}=e;return(0,k.jsx)(k.Fragment,{children:null===C||void 0===C?void 0:C.map((e=>(0,k.jsx)(g.A,{control:(0,k.jsx)(A.A,{value:e.id,checked:n.value.includes(e.id),onChange:(e,t)=>{const i=Number(e.target.value);t?n.onChange([...n.value,i]):n.onChange(n.value.filter((e=>e!==i)))}}),label:e.name},e.id)))})}})})]})}),(0,k.jsx)(j.A,{type:"submit",sx:{m:2},variant:"contained",startIcon:(0,k.jsx)(f.A,{}),disabled:!s.isDirty,children:"Apply filter"})]})})}var C=t(2110),I=t(6591),N=t(6494),S=t(7600),q=t(7739),F=t(7392),L=t(6520),M=t(5475);function _(e){let{id:n,title:t,overview:i,popularity:o,onAddFavorite:s,image:l="/movie-thumb.png",enableUserActions:a=!1}=e;return(0,k.jsxs)(C.A,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,k.jsx)(I.A,{component:"div",sx:{pt:"56.25%"},image:l}),(0,k.jsxs)(N.A,{sx:{flexGrow:1},children:[(0,k.jsx)(r.A,{gutterBottom:!0,variant:"h5",component:"h2",children:t}),(0,k.jsx)(r.A,{variant:"body2",color:"text.secondary",children:i}),(0,k.jsx)(r.A,{variant:"button",display:"block",mt:2,children:o})]}),(0,k.jsxs)(S.A,{children:[(0,k.jsx)(j.A,{component:M.N_,to:"/movies/".concat(n),color:"secondary",children:"Details"}),a&&(0,k.jsx)(q.A,{title:"Add to favorites",children:(0,k.jsx)(F.A,{onClick:()=>null===s||void 0===s?void 0:s(n),children:(0,k.jsx)(L.A,{})})})]})]})}const E=(0,i.memo)(_),O={page:1,filters:{}};function D(){const[e,n]=(0,i.useState)(O),{data:t}=(0,b.EA)(),{data:d,isFetching:c}=(0,b.Lg)(e),u=null===d||void 0===d?void 0:d.results,x=null===d||void 0===d?void 0:d.hasMorePages;const h=(0,i.useContext)(a.c),m=h.user!==a.L,p=(0,i.useCallback)((()=>{x&&n((e=>({...e,page:e.page+1})))}),[x]),[v]=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{threshold:n=1,root:t=null,rootMargin:o="0px",onIntersect:s}=e,r=(0,i.useRef)(null),[l,a]=(0,i.useState)();return(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{const[n]=e;a(n),n.isIntersecting&&(null===s||void 0===s||s())}),{threshold:n,root:t,rootMargin:o}),i=r.current;return i&&e.observe(i),function(){i&&e.disconnect()}}),[s,t,o,n]),[r,l]}({onIntersect:p}),g=(0,i.useCallback)((e=>alert("Not implemented! Action: ".concat(h.user.name," is adding movie ").concat(e," to favorites."))),[h.user.name]);return(0,k.jsxs)(o.Ay,{container:!0,spacing:2,sx:{flexWrap:"nowrap"},children:[(0,k.jsx)(o.Ay,{item:!0,xs:"auto",children:(0,k.jsx)(w,{onApply:e=>{const t={keywords:null===e||void 0===e?void 0:e.keywords.map((e=>e.id)),genres:null===e||void 0===e?void 0:e.genres};n({page:1,filters:t})}})}),(0,k.jsx)(o.Ay,{item:!0,xs:12,children:(0,k.jsxs)(s.A,{sx:{py:8},maxWidth:"lg",children:[!c&&!(null!==u&&void 0!==u&&u.length)&&(0,k.jsx)(r.A,{variant:"h6",children:"No movies were found that match your query."}),(0,k.jsx)(o.Ay,{container:!0,spacing:4,children:null===u||void 0===u?void 0:u.map(((e,n)=>{return(0,k.jsx)(o.Ay,{item:!0,xs:12,sm:6,md:4,children:(0,k.jsx)(E,{id:e.id,title:e.title,overview:e.overview,popularity:e.popularity,image:(i=e.backdrop_path,i&&t?"".concat(t.images.base_url,"w780").concat(i):void 0),enableUserActions:m,onAddFavorite:g},e.id)},e.id);var i}))}),(0,k.jsx)("div",{ref:v,children:c&&(0,k.jsx)(l.A,{color:"secondary",sx:{mt:3}})})]})})]})}D.displayName="Movies"}}]);
//# sourceMappingURL=717.c3d0bae8.chunk.js.map