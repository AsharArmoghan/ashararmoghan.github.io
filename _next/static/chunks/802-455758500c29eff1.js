(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{4802:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var r=n(5155),a=n(2115),i=n(3250),o=n(7249),s=n(9234);function c(e){let t=(0,s.M)(()=>(0,i.OQ)(e)),{isStatic:n}=(0,a.useContext)(o.Q);if(n){let[,n]=(0,a.useState)(e);(0,a.useEffect)(()=>t.on("change",n),[])}return t}var l=n(9195),d=n(5403),m=n(4707),p=n(3307);function g(e){return"number"==typeof e?e:parseFloat(e)}function u(e,t={}){let{isStatic:n}=(0,a.useContext)(o.Q),r=(0,a.useRef)(null),i=c((0,m.S)(e)?g(e.get()):e),s=(0,a.useRef)(i.get()),x=(0,a.useRef)(()=>{}),h=()=>{f(),r.current=(0,l.L)({keyframes:[i.get(),s.current],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:x.current})},f=()=>{r.current&&r.current.stop()};return(0,a.useInsertionEffect)(()=>i.attach((e,t)=>n?t(e):(s.current=e,x.current=t,p.Gt.postRender(h),i.get()),f),[JSON.stringify(t)]),(0,d.E)(()=>{if((0,m.S)(e))return e.on("change",e=>i.set(g(e)))},[i]),i}var x=n(1779),h=n(5565);function f(){var e,t;let n=(e=["rotateX(","deg) rotateY(","deg)"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return f=function(){return n},n}let y=e=>{let{ProjectProps:t}=e,n=(0,a.useRef)(null),i=c(0),o=c(0),s=u(i),l=u(o),g=function(e,...t){let n=e.length;return function(e,t){let n=c(t()),r=()=>n.set(t());return r(),(0,d.E)(()=>{let t=()=>p.Gt.preRender(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,p.WG)(r)}}),n}(t.filter(m.S),function(){let r="";for(let a=0;a<n;a++){r+=e[a];let n=t[a];n&&(r+=(0,m.S)(n)?n.get():n)}return r})}(f(),s,l);return(0,r.jsx)(x.P.div,{ref:n,onMouseMove:e=>{if(!n.current)return[0,0];let t=n.current.getBoundingClientRect(),r=t.width,a=t.height,s=(e.clientX-t.left)*32.5,c=(e.clientY-t.top)*32.5;i.set(-((c/a-16.25)*1)),o.set(s/r-16.25)},onMouseLeave:()=>{i.set(0),o.set(0)},style:{transformStyle:"preserve-3d",transform:g},className:"relative flex items-center justify-center rounded-xl bg-gradient-to-b from-sky-50 via-zinc-200 to-slate-100 dark:bg-gradient-to-br dark:from-zinc-800 dark:to-gray-800 sm:mx-[15px] sm:h-[200px] sm:w-[350px] md:mx-[20px] md:h-[350px] md:w-[600px]",children:(0,r.jsx)("div",{style:{transform:"translateZ(75px)",transformStyle:"preserve-3d"},className:"absolute inset-3 grid place-content-center rounded-xl shadow-lg",children:(0,r.jsx)(h.default,{src:t.image.imgSrc,alt:t.title,width:t.image.width,height:t.image.height,priority:!0,style:{transform:"translateZ(75px)",backgroundSize:"cover"},className:"mx-auto text-4xl sm:w-[350px] md:w-[550px] lg:w-[700px]"})})})};n(6564);var b=n(9967),w=n(1536),v=n(6084),j=n(1889);let S=[{id:1,title:"Code Blog ",description:"CodeBlog is a secure Angular blogging platform that empowers developers to create, share, and discover technical articles with role-based authorization, supported by a Node.js/Express backend using JWT authentication and middleware protection, while Angular's modular architecture, lazy loading, and dependency injection ensure high performance and seamless light/dark mode support.",author:"Ashar Armoghan",image:{imgSrc:"/_next/static/media/CodeBlog1.2db47c69.png",width:800,height:600},icons:[{name:"Angular",component:v.R$t,color:"#d01001"},{name:"Node.js",component:w.lbi,color:"#00972b"},{name:"MongoDB",component:v.x9h,color:"#03c047"},{name:"TypeScript",component:v.U1g,color:"#226dc2"},{name:"Html",component:v.ZKG,color:"#d04112"},{name:"MaterialUi",component:b.qbn,color:"#d01001"},{name:"Css",component:v.vSn,color:"#227eb5"}]},{id:2,title:"React Sales Dashboard ",description:"React Sales Dashboard empowers sales teams with real-time analytics, dynamic visualizations, and interactive charts, backed by a secure Node.js/Express API with role-based authorization, JWT authentication, and middleware protection, while React hooks and context ensure efficient state management and enhanced frontend security.",author:"Ashar Armoghan",image:{imgSrc:"/_next/static/media/dashboard1.fe35901c.png",width:800,height:600},icons:[{name:"React",component:v.QKu,color:"#40cdeb"},{name:"Node.js",component:w.lbi,color:"#00972b"},{name:"MongoDB",component:v.x9h,color:"#03c047"},{name:"TypeScript",component:v.U1g,color:"#226dc2"},{name:"Html",component:v.ZKG,color:"#d04112"},{name:"Css",component:v.vSn,color:"#227eb5"}]},{id:3,title:"Portfolio",description:"Next.js Beautiful Portfolio Website is an SEO-friendly web app built with Next.js and Tailwind CSS, featuring SSR, static generation, dynamic routing, and API routes, with a custom webpack config optimizing SVGs and images and Framer Motion delivering fluid animations.",author:"Ashar Armoghan",image:{imgSrc:"/_next/static/media/portfolio.408483ce.png",width:800,height:600},icons:[{name:"NextJs",component:j.YMS,color:"#43434c"},{name:"React",component:v.QKu,color:"#40cdeb"},{name:"TypeScript",component:v.U1g,color:"#226dc2"},{name:"Html",component:v.ZKG,color:"#d04112"},{name:"Css",component:v.vSn,color:"#227eb5"}]}],k=()=>(0,r.jsxs)("div",{className:"min-h-screen bg-primary-white pt-3 dark:bg-primary-black dark:text-zinc-300",children:[(0,r.jsx)("div",{className:"my-20 py-3 text-zinc-800 dark:text-zinc-300",children:(0,r.jsx)("h1",{className:"mb-8 flex items-center justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl",children:"Things I’ve Built"})}),S.map(e=>{var t;return(0,r.jsxs)("div",{className:"grid grid-rows-1 place-content-center lg:mx-[60px] lg:grid-cols-2",children:[(0,r.jsx)(x.P.div,{initial:{scale:.5,y:50,opacity:0},animate:{scale:1,y:0,opacity:1},transition:{type:"spring",mass:3,stiffness:400,damping:50},className:"my-6 flex items-center justify-center",children:(0,r.jsx)(y,{ProjectProps:e})}),(0,r.jsxs)("div",{className:"container mt-2 flex w-[650px] flex-col justify-center text-zinc-800 dark:text-zinc-300",children:[(0,r.jsx)("h2",{className:"mb-4 flex w-[500px] items-center justify-start px-8 text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl",children:e.title}),(0,r.jsx)("div",{className:"my-3 flex flex-wrap gap-5 px-8",children:null===(t=e.icons)||void 0===t?void 0:t.map(e=>{let t=e.component;return(0,r.jsxs)(x.P.div,{whileHover:{scale:1.1},whileTap:{scale:.9},transition:{type:"spring",visualDuration:.3,bounce:.3},title:e.name,className:"h-10 w-10 text-gray-700 dark:text-gray-300",style:{color:e.color},children:[(0,r.jsx)(t,{className:"h-full w-full"})," "]},e.name)})}),(0,r.jsx)("div",{className:"container text-left",children:(0,r.jsx)("p",{className:"mb-8 px-8 text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl",children:e.description})})]}),(0,r.jsx)("hr",{className:"mx-auto my-4 h-1 w-48 rounded-sm border-0 bg-zinc-300 dark:bg-gray-700 md:my-10"})]},e.id)})]})},6564:()=>{}}]);