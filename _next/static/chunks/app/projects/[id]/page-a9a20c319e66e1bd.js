(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[801],{6212:(e,t,l)=>{Promise.resolve().then(l.bind(l,8909)),Promise.resolve().then(l.t.bind(l,8173,23)),Promise.resolve().then(l.bind(l,9586)),Promise.resolve().then(l.bind(l,5369)),Promise.resolve().then(l.bind(l,3639)),Promise.resolve().then(l.bind(l,2844)),Promise.resolve().then(l.bind(l,8434)),Promise.resolve().then(l.bind(l,3874))},470:(e,t,l)=>{"use strict";l.d(t,{n:()=>n});var a=l(5155);l(2115);var i=l(5683),s=l(5427),r=l(5565);let n=e=>{let{Icon:t}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-x-hidden py-3",children:(0,a.jsx)(i.N,{mode:"popLayout",initial:!0,children:(0,a.jsx)(s.P.div,{className:"flex w-max gap-10",animate:{x:["50%","-50%"]},transition:{repeat:1/0,duration:35,ease:"linear",opacity:{duration:1}},exit:{transition:{ease:"easeInOut",opacity:{duration:1}}},children:[...t.icon].map((e,t)=>(0,a.jsxs)(s.P.div,{whileHover:{scale:1.1},whileTap:{scale:.9},transition:{type:"spring",visualDuration:.3,bounce:.3},title:e.name,className:"flex-shrink-0 items-center justify-center text-gray-700",children:[(0,a.jsx)(r.default,{src:e.component,width:50,height:50,alt:e.name}),(0,a.jsx)("p",{style:{color:e.color},children:e.name})]},t))},"icon")})})}},8909:(e,t,l)=>{"use strict";l.d(t,{default:()=>g});var a=l(5155),i=l(2115),s=l(5565),r=l(1589),n=l(5683),d=l(5427),A=l(9085);let c={initial:e=>({x:e>0?200:-200,opacity:0}),animate:{x:0,opacity:1},exit:e=>({x:e>0?-200:200,opacity:0})},x=e=>{let{image:t}=e,[l,x]=(0,i.useState)(0),[o,h]=(0,i.useState)(0);return(0,a.jsx)("div",{className:"conatiner mx-auto mb-10 flex items-center justify-center overflow-x-hidden sm:w-[450px] md:w-[900px] lg:w-[1200px]",children:(0,a.jsx)("div",{className:"slideShow relative h-full w-full object-cover",children:(0,a.jsx)(n.N,{mode:"popLayout",initial:!1,custom:o,children:(0,a.jsxs)(d.P.div,{variants:c,initial:"initial",animate:"animate",exit:"exit",custom:o,transition:{type:A.o,bounce:.4,duration:.3},children:[(0,a.jsx)(s.default,{src:t[l].imgSrc,width:t[l].width,height:t[l].height,className:"rounded-lg shadow-md",alt:"Slide ".concat(l+1)}),(0,a.jsx)("button",{onClick:()=>{h(-1),x(e=>0===e?t.length-1:e-1)},className:"prev absolute left-[16px] top-1/2 translate-y-1/2 cursor-pointer rounded-full border-none bg-zinc-400 text-[40px] dark:bg-zinc-600 sm:text-[30px]",children:(0,a.jsx)(r.AiM,{className:"h-8 w-8"})}),(0,a.jsx)("button",{onClick:()=>{h(1),x(e=>e===t.length-1?0:e+1)},className:"next absolute right-[16px] top-1/2 translate-y-1/2 cursor-pointer rounded-full border-none bg-zinc-400 text-[40px] dark:bg-zinc-600 sm:text-[30px]",children:(0,a.jsx)(r.ZPM,{className:"h-8 w-8"})})]},l)})})})};var o=l(470),h=l(7763);let g=e=>{let{project:t}=e;return(0,a.jsxs)("div",{className:"my-4 flex h-full min-w-[600px] max-w-[calc(100%-30rem)] flex-col items-center justify-center text-wrap",children:[(0,a.jsx)("div",{className:"sm:h-[270px] md:h-[450px] lg:h-[600px]",children:(0,a.jsx)(x,{image:t.image})}),(0,a.jsxs)(d.P.div,{className:"mt-8 flex flex-col items-center justify-evenly",children:[(0,a.jsxs)("div",{className:"container mt-2 items-center justify-center text-zinc-800 dark:text-zinc-300",children:[(0,a.jsx)("h2",{className:"mb-4 items-center justify-start text-left text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl",children:t.title}),(0,a.jsx)(h.A,{delay:.5,className:"mb-8 text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl",children:t.description})]}),(0,a.jsx)("div",{className:"container h-[110px] overflow-hidden pt-3 lg:w-[calc(100%-5rem)]",children:(0,a.jsx)(o.n,{Icon:{icon:t.icons}})}),(0,a.jsxs)("div",{className:"container my-[80px]",children:[(0,a.jsx)("h2",{className:"pb-8 text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl",children:"Project Requirements"}),(0,a.jsx)("ul",{className:"list-inside list-decimal space-y-2",children:t.projectRequirement.map((e,t)=>(0,a.jsx)(h.A,{delay:.3,stagger:.3,className:"",children:(0,a.jsx)("li",{className:"text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl lg:-tracking-tighter",children:e})},t))})]}),(0,a.jsxs)("div",{className:"container mb-[80px]",children:[(0,a.jsx)("h2",{className:"mb-4 flex items-center justify-start text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl",children:"Approaches Used"}),(0,a.jsx)("ul",{className:"list-inside list-disc space-y-2",children:t.approach.map((e,t)=>(0,a.jsx)(h.A,{stagger:.2,className:"",children:(0,a.jsx)("li",{className:"text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl lg:-tracking-tighter",children:e})},t))})]}),(0,a.jsxs)("div",{className:"container mb-[80px]",children:[(0,a.jsx)("h2",{className:"mb-4 text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl",children:"Challenges and Solutions"}),t.challenges.map((e,t)=>(0,a.jsx)("div",{className:"text-wrap text-left font-normal md:text-lg lg:text-xl",children:e.Challenge.map((t,l)=>(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsxs)(h.A,{delay:.2,stagger:.5,children:[" ",(0,a.jsxs)("p",{className:"font-semibold text-neutral-500 dark:text-neutral-400",children:[" \uD83D\uDD39 ",t]})]}),(0,a.jsxs)("p",{className:"pl-4 text-zinc-500",children:[" ",e.Solution[l]]})]},l))},t))]}),(0,a.jsxs)("div",{className:"container mb-[50px]",children:[(0,a.jsx)("h2",{className:"mx-4 text-left text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl",children:"Project Structure"}),(0,a.jsx)("pre",{className:"pb-8 text-left font-normal text-gray-500 dark:text-gray-400 sm:text-sm md:text-lg lg:text-xl",children:t.structure})]}),(0,a.jsxs)("div",{className:"container mb-[50px] flex flex-col items-start justify-center",children:[(0,a.jsx)("h2",{className:"mb-4 mt-4 flex items-center justify-start text-left text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl",children:"How It Works"}),(0,a.jsx)("h2",{className:"mb-4 mt-4 flex items-center justify-start text-left text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl",children:"\uD83D\uDCE6 Setup & Installation"}),(0,a.jsx)("ul",{className:"list-disc",children:t.setupSteps.map((e,t)=>(0,a.jsx)("li",{className:"mb-4 px-2 text-left font-normal -tracking-tighter text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl",dangerouslySetInnerHTML:{__html:e}},t))})]}),(0,a.jsxs)("div",{className:"container mb-[50px] rounded-lg bg-zinc-100 p-4 dark:bg-neutral-600 lg:w-[650px]",children:[(0,a.jsx)("h2",{className:"mb-4 mt-4 flex items-center justify-start text-left text-xl font-bold leading-none -tracking-tight text-slate-900 dark:text-white lg:text-2xl",children:"Installation"}),(0,a.jsx)("h3",{className:"font-semibold",children:"Backend"}),(0,a.jsx)("pre",{className:"rounded bg-slate-300 p-2 dark:bg-slate-700",children:t.installation.backend}),(0,a.jsx)("h3",{className:"mb-4 mt-4 flex items-center justify-start text-left text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl",children:"Frontend"}),(0,a.jsx)("pre",{className:"rounded bg-slate-300 p-2 dark:bg-gray-700",children:t.installation.frontend})]}),(0,a.jsxs)("div",{className:"container mx-3 mt-3 flex flex-row items-center justify-start text-left sm:flex-col",children:[(0,a.jsx)("h2",{className:"text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl",children:"API Endpoints"}),(0,a.jsxs)("table",{className:"mt-4 w-full border border-gray-300",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"",children:[(0,a.jsx)("th",{className:"border p-2",children:"Method"}),(0,a.jsx)("th",{className:"border p-2",children:"Route"}),(0,a.jsx)("th",{className:"border p-2",children:"Description"})]})}),(0,a.jsx)("tbody",{children:t.apiEndpoints.map((e,t)=>(0,a.jsxs)("tr",{className:"border",children:[(0,a.jsx)("td",{className:"border p-2 font-bold text-blue-500",children:e.method}),(0,a.jsx)("td",{className:"border p-2",children:e.route}),(0,a.jsx)("td",{className:"border p-2",children:e.description})]},t))})]})]})]})]})}},7763:(e,t,l)=>{"use strict";l.d(t,{A:()=>d});var a=l(5155),i=l(8586),s=l(5683),r=l(5427),n=l(2115);let d=e=>{let{children:t,className:l="",delay:d=.3,duration:A=.8,stagger:c=.2,once:x=!0}=e,o=(0,n.useRef)(null),h=(0,i.W)(o,{once:x}),g={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:90,damping:15,duration:A}}};return(0,a.jsx)(s.N,{mode:"wait",children:(0,a.jsx)(r.P.div,{ref:o,className:l,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:c,delayChildren:d}}},initial:"hidden",animate:h?"visible":"hidden",children:n.Children.map(n.Children.toArray(t),(e,t)=>(0,a.jsx)(r.P.span,{variants:g,style:{display:"inline-block"},children:(0,n.isValidElement)(e)?e:(0,a.jsx)("span",{children:e})},t))})})}},9586:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>a});let a={src:"/_next/static/media/Codeblog1.2db47c69.png",height:946,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAP1BMVEVNbIWNjrweMUCKhq9jZFeatsOsx9GEjbxFSDozOjFri6SDprwkPlhQVE8dQ2Rfe5Ftb2KKf6ggIxB4b5h1dFXUD1ArAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAKUlEQVR4nAXBhQEAIAwDsA6muP1/KwnuJiOzjICoSi04wMRoCf4Wc/f4EVcBAh7dAhkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},5369:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>a});let a={src:"/_next/static/media/codeblog2.789ba6b2.png",height:942,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAANlBMVEXb3dusk9evl9qorMDHycSgh8ynjtPS1NTo6eDR0sydmKJlZGWGiZRfUlFtb3y6urqZdmNGR0iZmLWKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAKUlEQVR4nAXBhwEAIAjAsKIg4Pb/Z02APK7u7LvemL1CpCYRlNLMmsgHEZcA3BXcEIIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},3639:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>a});let a={src:"/_next/static/media/dashboard1.fe35901c.png",height:941,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAADFBMVEX+/v/w9Pzp8PuwyvSKLWQFAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGklEQVR4nGNggANGRkYGBkYwi4GBiZkJLgMAANwADQEYkKIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},2844:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>a});let a={src:"/_next/static/media/dashboard2.418e1a07.png",height:983,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJ1BMVEX+/f7T09bp+fnx+efw9fjZ9/bS+ve88PHZ2tru7e/j8MvY2tv29/wGPYa+AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAJUlEQVR4nCXBxwEAIAwDsbPTKPvvywMJSXdJ4tuQadsRUNNdJx4FxQBjt9mXRgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},8434:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>a});let a={src:"/_next/static/media/dashboard3.fa84920f.png",height:981,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAHlBMVEX+///cr5b7/P7Is6iikIa4ppzxwaTrup/RpI3SvrEM66lKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAIklEQVR4nGNgZWVmYeFkZmbgYGRnZGRjZGRgYGACAwYYAAAHjgBL/VhkBgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},3874:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>a});let a={src:"/_next/static/media/portfolio.408483ce.png",height:922,width:1827,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEX+//9/gququ93U1OHg4++HNFx4AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAE0lEQVR4nGNgQALMLFAGIxOyMAAA6QALca2eyQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}}},e=>{var t=t=>e(e.s=t);e.O(0,[446,427,565,888,351,441,517,358],()=>t(6212)),_N_E=e.O()}]);