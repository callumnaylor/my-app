(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],{395:function(e,t,s){},414:function(e,t,s){},415:function(e,t,s){},416:function(e,t,s){},417:function(e,t,s){},418:function(e,t,s){"use strict";s.r(t);s(193),s(203);var n=s(2),c=s.n(n),i=s(189),a=s.n(i),r=(s(395),s(51)),o=s(0),l=document.body,j="scroll-up",d="scroll-down",b="scroll-top",m=0;l.classList.add(b),window.addEventListener("scroll",(function(){var e=window.pageYOffset;if(e<=0)return l.classList.remove(j),void l.classList.add(b);e>m&&!l.classList.contains(d)?(l.classList.remove(j),l.classList.remove(b),l.classList.add(d)):e<m&&l.classList.contains(d)&&(l.classList.remove(d),l.classList.remove(b),l.classList.add(j)),m=e}));var x=function(){window.scrollTo(0,0)};var u=function(){return Object(o.jsx)("header",{className:"container",children:Object(o.jsx)("div",{className:"nav scroll-up scroll-down",children:Object(o.jsxs)("div",{className:"nav-container",children:[Object(o.jsx)("div",{className:"nav-list",children:Object(o.jsx)(r.b,{exact:!0,to:"/",onClick:x,children:"Home"})}),Object(o.jsx)("div",{className:"nav-list",children:Object(o.jsx)(r.b,{to:"/about",onClick:x,children:"About"})})]})})})},O=s.p+"static/media/nightImage.a474513d.jpg",h=s.p+"static/media/lightimage.af0e7d61.jpg",p=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{className:"main-body",alt:"img",src:h}),Object(o.jsx)("img",{className:"main-body top",alt:"img",src:O})]})},g=s.p+"static/media/bytron.73b85aef.png",f=s.p+"static/media/opsboard.1735007e.jpg",v=s.p+"static/media/etops.39107d86.jpg",N=s.p+"static/media/react.382a8e79.png",w=s.p+"static/media/plane.ef5930a3.png",y=s(123),C=Object(o.jsx)(y.SocialIcon,{className:"button-fit",url:"https://www.linkedin.com/in/callum-naylor-bb6b901b1/",label:"LinkedIn"}),k=Object(o.jsx)(y.SocialIcon,{className:"button-fit",network:"email",label:"Gmail",bgColor:"#e0611c"}),I=function(){return Object(o.jsxs)("div",{className:"button-area",children:[Object(o.jsx)("a",{className:"btn-linkedin","data-scroll":"true","data-scroll-speed":"5",href:"https://www.linkedin.com/in/callum-naylor-bb6b901b1/",children:Object(o.jsx)("div",{className:"pulsing floating",children:C})}),Object(o.jsx)("a",{className:"btn-mail","data-scroll":"true","data-scroll-speed":"5",href:"mailto:callumnaylor7@gmail.com",children:Object(o.jsx)("div",{className:"pulsing-mail floating",children:k})})]})},L=s(192);var S=function(e){var t=c.a.useState(!1),s=Object(L.a)(t,2),n=s[0],i=s[1],a=c.a.useRef();return c.a.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return i(e.isIntersecting)}))})).observe(a.current)}),[]),Object(o.jsx)("div",{className:"fade-in-section ".concat(n?"is-visible":""),ref:a,children:e.children})},E=function(){return Object(o.jsxs)("div",{className:"title-box",children:[Object(o.jsxs)("h1",{className:"text-title",children:["Hi! I'm Callum, ",Object(o.jsx)("br",{})," a Software Developer."]}),Object(o.jsx)("p",{className:"text-sub",children:"Keen to develop on front-end to create engaging UI "})]})},R=function(){return Object(o.jsx)(S,{children:Object(o.jsxs)("div",{className:"info-box flex",children:[Object(o.jsxs)("h1",{className:"text-info",children:["I'm a Junior Software Developer ",Object(o.jsx)("br",{}),"working remotely for",Object(o.jsx)("a",{className:"bytron-link",href:"https://www.bytron.aero/",children:" Bytron Aviation Systems"}),Object(o.jsxs)("p",{className:"text-sub padding",children:[Object(o.jsxs)("p",{children:["I've spent over a year developing and training in languages such as PHP, Javascript and React whilst working on the skybook software. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("p",{children:["This has progressed me onto learning both back-end processes such as PHP and building applications in front-end using React JS to produce features for our customers at Bytron. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("p",{children:["Out of the office, you'll find me playing games, at the gym, kicking a football around with friends and hitting a small ball into a tiny hole with a flag. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})]})]}),Object(o.jsx)("img",{className:"bytron-img",alt:"bytron",src:g})]})})},T=function(){return Object(o.jsx)(S,{children:Object(o.jsxs)("div",{className:"info-box",children:[Object(o.jsx)("img",{className:"plane",alt:"bytron","data-scroll":"true","data-scroll-speed":"-10","data-scroll-direction":"horizontal",src:w}),Object(o.jsx)("p",{className:"text-sub padding black",children:"Examples of the projects I have been closely working on the front-end, developed in React"}),Object(o.jsx)("p",{style:{fontSize:8}}),Object(o.jsx)("img",{className:"img-examples",alt:"bytron",src:v}),Object(o.jsx)("img",{className:"img-examples",alt:"bytron",src:f})]})})},D=function(){return Object(o.jsx)(S,{children:Object(o.jsxs)("div",{className:"info-box padding-bottom",children:[Object(o.jsx)("p",{className:"text-sub padding black",children:"This is my little playground and I'm passionate to develop more!"}),Object(o.jsx)("a",{className:"buttonCircle",href:"/#/about",onClick:function(){window.scrollTo(0,0)},children:"About Me"}),Object(o.jsx)("img",{className:"react-img",alt:"img",src:N})]})})},H=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"right",children:["Portfolio 2021",Object(o.jsx)("p",{className:"rightExt",children:"Designed and created by me"})]})})},J=function(){return Object(o.jsxs)("div",{id:"main-body",className:"main-body",children:[Object(o.jsx)(p,{}),Object(o.jsx)(E,{}),Object(o.jsx)(I,{}),Object(o.jsx)("div",{class:"loader",children:Object(o.jsx)("div",{class:"bouncingBall"})})]})};var P=function(){return Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(J,{}),Object(o.jsx)("div",{id:"main-content",className:"main-content",children:Object(o.jsx)(R,{})}),Object(o.jsxs)("div",{className:"main-content2",children:[Object(o.jsx)(T,{}),Object(o.jsx)(D,{}),Object(o.jsx)(H,{})]})]})},A=s(57);function B(){var e=c.a.createRef(),t=new A.a;return Object(n.useEffect)((function(){return t=new A.a({el:e.current,smooth:!0,smartphone:{smooth:!0},tablet:{smooth:!0}}),function(){return t.destroy()}})),setTimeout((function(){t.update()}),2e3),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"scroll",ref:e,children:[Object(o.jsx)(u,{}),Object(o.jsx)(P,{})]})})}var z=s(45);function M(){var e=function(){return z.isMobile||z.isTablet?Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{}),Object(o.jsx)(P,{})]}):z.isDesktop?Object(o.jsx)(B,{}):void 0};return Object(o.jsx)("div",{children:Object(o.jsx)(e,{})})}var U=s.p+"static/media/forest.539ff861.png",V=s.p+"static/media/grad.7721eb3e.jpeg",G=s.p+"static/media/et.a32f5ff0.png",K=s.p+"static/media/uni.b0fdc50f.jpg",Y=function(){return Object(o.jsxs)("div",{id:"main-body",className:"main-body-about",children:[Object(o.jsxs)("div",{className:"about-box",children:[Object(o.jsx)("div",{className:"slide-down",children:Object(o.jsx)("img",{className:"grad-img",alt:"img",src:V})}),Object(o.jsx)("div",{class:"slide-right",children:Object(o.jsxs)("h2",{children:["Helloooo! you've clicked on the about me page so let me fill you in! ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"I'm Callum and I've recently just graduated at the University Of Hull, studying Computer Science!"]})})]}),Object(o.jsxs)("div",{className:"about-box",children:[Object(o.jsx)("div",{class:"slide-left",children:Object(o.jsxs)("h2",{children:["During this time I studied many modules, but what stood out to me the most was Software and VR development. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"So much in fact, I developed a VR game for my dissertation project which I would love to explain more about, if you'd like to scroll down..."]})}),Object(o.jsx)("div",{className:"slide-down-uni",children:Object(o.jsx)("img",{className:"grad-img",alt:"img",src:K})})]})]})},q=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"forest-img",alt:"img",src:U})})},F=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"image-et",alt:"img","data-scroll":"true","data-scroll-speed":"-20","data-scroll-direction":"horizontal",src:G})})},Q=function(){return Object(o.jsx)(S,{children:Object(o.jsx)("div",{className:"info-box flex",children:Object(o.jsxs)("h1",{className:"text-info",children:["Content in progress",Object(o.jsx)("br",{}),"Content in progress",Object(o.jsx)("a",{className:"bytron-link",href:"https://www.bytron.aero/",children:" Content in progress"}),Object(o.jsxs)("p",{className:"text-sub padding",children:[Object(o.jsxs)("p",{children:["Content in progress Content in progress Content in progress Content in progressContent in progress Content in progressContent in progress Content in progress",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("p",{children:["Content in progress Content in progress Content in progressContent in progress Content in progressContent in progress Content in progress ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("p",{children:["Content in progress Content in progress Content in progressContent in progress Content in progressContent in progress Content in progress ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})]})]})})})};var W=function(){return Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(Y,{}),Object(o.jsx)(F,{}),Object(o.jsx)("div",{className:"fixed-image-spacing"}),Object(o.jsxs)("div",{children:[Object(o.jsx)(q,{}),Object(o.jsx)("div",{className:"main-content",children:Object(o.jsx)(Q,{})})]})]})},X=s.p+"static/media/moon.15f2dfc5.jpg",Z=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"image-fixed",alt:"img",src:X})})};function $(){var e=c.a.createRef(),t=new A.a;return Object(n.useEffect)((function(){return t=new A.a({el:e.current,smooth:!0,smartphone:{smooth:!0},tablet:{smooth:!0}}),function(){return t.destroy()}})),setTimeout((function(){t.update()}),2e3),Object(o.jsxs)("div",{children:[Object(o.jsx)(Z,{}),Object(o.jsxs)("div",{className:"scroll",ref:e,children:[Object(o.jsx)(u,{}),Object(o.jsx)(W,{})]})]})}function _(){var e=function(){return z.isMobile||z.isTablet?Object(o.jsxs)("div",{children:[Object(o.jsx)(Z,{}),Object(o.jsx)(u,{}),Object(o.jsx)(W,{})]}):z.isDesktop?Object(o.jsx)($,{}):void 0};return Object(o.jsx)(e,{})}s(414),s(415),s(416),s(417);var ee=s(14);a.a.render(Object(o.jsx)(r.a,{basename:"",children:Object(o.jsx)(ee.a,{component:function(){return Object(o.jsx)(r.a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(ee.c,{children:[Object(o.jsx)(ee.a,{exact:!0,path:"/",children:Object(o.jsx)(M,{})}),Object(o.jsx)(ee.a,{path:"/about",children:Object(o.jsx)(_,{})})]})})})}})}),document.getElementById("root"))}},[[418,1,2]]]);
//# sourceMappingURL=main.014d69ca.chunk.js.map