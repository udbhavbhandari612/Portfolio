(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/hand-wave.17fe0ab8.png"},function(e,t,a){e.exports=a.p+"static/media/bg2.6477a785.jpg"},,,,,function(e,t,a){e.exports=a(50)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./Projects/1.PNG":38,"./Projects/3.PNG":39,"./banner.jpg":40,"./bg.jpg":41,"./bg2.jpg":18,"./hand-wave.png":17,"./personal1.jpg":42};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=37},function(e,t,a){e.exports=a.p+"static/media/1.47b4d298.PNG"},function(e,t,a){e.exports=a.p+"static/media/3.cb9f0b73.PNG"},function(e,t,a){e.exports=a.p+"static/media/banner.d3dd0dd2.jpg"},function(e,t,a){e.exports=a.p+"static/media/bg.e3222112.jpg"},function(e,t,a){e.exports=a.p+"static/media/personal1.53a04a11.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);a(24),a(25);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=(a(31),a(3)),i=(a(32),a(2)),s=a(1),m=a(21);a(33),a(34);function u(e){var t=e.handleLinks,a=new s.e,c=new s.e;Object(n.useEffect)((function(){o(),l()}));var o=function(){a.to(".brand-logo",{rotate:"-10deg",duration:1.5,opacity:1,ease:"elastic.out(0.8,0.2)",delay:.5,lazy:!0}).to(".brand-underline",{width:"100%",duration:1,delay:-.5,ease:s.c.easeOut,lazy:!0})},l=function(){c.to(".link",{opacity:1,duration:1,delay:1,ease:s.c.easeOut,lazy:!0})};return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"brand-logo",onMouseLeave:function(){return a.play()},onMouseOver:function(){return a.reverse()}},"Portfolio",r.a.createElement("br",null),r.a.createElement("div",{className:"brand-underline"})),r.a.createElement("div",{className:"links"},r.a.createElement("div",{onClick:function(){return t("1")},className:"link"},"About Me"),r.a.createElement("div",{onClick:function(){return t("2")},className:"link"},"Projects"),r.a.createElement("div",{onClick:function(){return t("3")},className:"link"},"Contact Me")))}a(35);var d=a(51);function f(){Object(n.useEffect)((function(){e(),t()}));var e=function(){i.a.timeline().from(".heading",{opacity:0,y:-10,duration:1,ease:s.a.easeOut,delay:1})},t=function(){i.a.timeline({scrollTrigger:{trigger:".container",start:"+=100 bottom"}}).from(".container",{opacity:0,y:-50,duration:.6,ease:s.c.easeOut,delay:1}).to(".aboutme-text",{opacity:1,duration:1,height:"auto",scaleY:1,ease:s.c.easeOut}),i.a.timeline({scrollTrigger:{trigger:".heading",start:"center top+=40%",toggleActions:"play pause resume reverse"}}).to(".hand-wave",{top:"-5em",opacity:1,ease:s.a.easeOut})};return r.a.createElement("div",{className:"aboutme"},r.a.createElement("span",{className:"heading-container"},r.a.createElement("h3",{className:"heading"},"About Me")),r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:a(17),className:"hand-wave",alt:" "}),r.a.createElement("p",{className:"aboutme-text"},'"A passionate developer, always keen to learn what is new in the developers community, with a slight inclination towards front-end (because afterall reality is what you see ',r.a.createElement("span",{"aria-label":"jsx-a11y/accessible-emoji",role:"img"},"\ud83d\ude09"),')"')))}i.a.registerPlugin(d.a);a(36);i.a.registerPlugin(d.a);var p=[{title:"Chatter-Box",description:"This is a mobile application interface designed to chat with other users over internet",link:"",github:"https://github.com/udbhavbhandari612/Chatter-box",imgPaths:["Projects/1.PNG"],technologies:["Firebase","React Native"],languages:["JavaScript","CSS"]},{title:"Heart In Hills",description:"This is a web app developed for Heart in Hills organization",link:"https://heartinhills.com/",github:"",imgPaths:["Projects/1.PNG"],technologies:["Firebase","Angular 8"],languages:["TypeScript","HTML","CSS"]},{title:"Portfolio",description:"The source code of this Website/Portfolio",link:"",github:"https://github.com/udbhavbhandari612/Portfolio",imgPaths:["Projects/3.PNG"],technologies:["Firebase","ReactJS","GSAP"],languages:["JavaScript","HTML","CSS"]}];function g(){Object(n.useEffect)((function(){t(),e()}),[]);var e=function(){var e={skew:0},t=i.a.quickSetter(".card","skewY","deg"),a=i.a.utils.clamp(-20,20);d.a.create({onUpdate:function(n){var r=a(n.getVelocity()/-300);Math.abs(r)>Math.abs(e.skew)&&(e.skew=r,i.a.to(e,{skew:0,duration:.8,ease:"power3",overwrite:!0,onUpdate:function(){return t(e.skew)}}))}}),i.a.set(".card",{transformOrigin:"center center",force3D:!0})},t=function(){i.a.timeline({scrollTrigger:{trigger:".projects-container",start:"top+=100 bottom",toggleActions:"restart none none reset"}}).fromTo(".projects-heading",1,{y:-50},{opacity:1,y:0,ease:s.c.easeOut}).to(".projects-underline",.8,{width:"80%",ease:s.c.easeOut})},c=function(e){var t="";return e.forEach((function(a,n){n!==e.length-1?t+=a+", ":t+=a})),t},o=function(e){return window.location.href=e,null};return r.a.createElement("div",{className:"projects-container"},r.a.createElement("h4",{className:"projects-heading"},"PROJECTS",r.a.createElement("div",{className:"projects-underline"})),r.a.createElement("div",{className:"cards-group"},p.map((function(e,t){return r.a.createElement("div",{className:"card",key:t},r.a.createElement("div",{className:"img-top-container"},r.a.createElement("div",{className:"overlay"},e.description),r.a.createElement("div",{className:"overlay overlay2"},"Hover or Click for short description"),r.a.createElement("img",{src:a(37)("./"+e.imgPaths[0]),className:"card-img-top",alt:" "})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title",title:e.title},e.title),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary btn-block",disabled:!e.github,onClick:function(){return o(e.github)}},r.a.createElement("i",{className:"fab fa-github"})," ",e.github?"Source Code on GitHub":"Confidential source code "),r.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-block",disabled:!e.link,onClick:function(){return o(e.link)}},r.a.createElement("i",{className:"fas fa-external-link-alt"})," ",e.link?"Visit Site":"No Site to visit"))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("small",{className:"text-muted"},r.a.createElement("b",null,"Technologies:")," ",r.a.createElement("span",{style:{color:"#1976D2"}},c(e.technologies))),r.a.createElement("br",null),r.a.createElement("small",{className:"text-muted"},r.a.createElement("b",null,"Languages:")," ",r.a.createElement("span",{style:{color:"#1976D2"}},c(e.languages)))))}))))}a(43);function E(){var e=["Web Development","Front-End Technologies","Back-End Technologies"],t=e[Math.floor(100*Math.random())%3],a=Object(n.useRef)(null);return Object(n.useEffect)((function(){s.f.to(".first-look",1,{opacity:1,scale:1,ease:s.a.easeOut,delay:.5,lazy:!0}),setTimeout((function(){!function(){var n=0,r=function(){t.length===n?(clearInterval(c),setTimeout((function(){i()}),1500)):(a.current.innerHTML+=t[n],n++)},c=setInterval(r,150),o=null,l=function(){-1===n?(n=0,clearInterval(o),t=e[Math.floor(100*Math.random())%3],setTimeout((function(){c=setInterval(r,150)}),1e3)):(a.current.innerHTML=a.current.innerHTML.slice(0,n),n--)},i=function(){o=setInterval(l,100)}}()}),2e3)})),r.a.createElement("div",{className:"first-look"},r.a.createElement("div",{className:"first-look-container"},r.a.createElement("span",{style:{fontFamily:"Dancing Script"}},"Hi,"),r.a.createElement("br",null),"I am Udbhav",r.a.createElement("br",null),r.a.createElement("span",null,"Just another ",r.a.createElement("span",{className:"code"},"<CODER/>")),r.a.createElement("br",null),r.a.createElement("span",null,"doing"),r.a.createElement("br",null),r.a.createElement("div",{style:{whiteSpace:"nowrap",lineHeight:"1.3em",fontWeight:700}},"{ ",r.a.createElement("div",{className:"code"},r.a.createElement("div",{ref:a,className:"techText"}),r.a.createElement("span",{className:"cursor"},"|")),"}")))}i.a.registerPlugin(d.a);a(44);function b(){return Object(n.useEffect)((function(){i.a.timeline({scrollTrigger:{trigger:".footer-container",start:"top+=100 bottom-=50",toggleActions:"restart none none reset"}}).from(".footer-heading",{opacity:0,y:-10,duration:1,ease:s.a.easeOut})})),r.a.createElement("div",{className:"footer-container"},r.a.createElement("span",{className:"heading-container"},r.a.createElement("h3",{className:"footer-heading"},"Contact Me")),r.a.createElement("div",{className:"footer-form"},r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("span",{className:"red-star"}," *"),r.a.createElement("input",{type:"email",className:"form-control",id:"name",placeholder:"Your Name"})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-star"}," *"),r.a.createElement("input",{type:"text",className:"form-control",id:"email",placeholder:"Your Email"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"comment"},"Suggestion / message"),r.a.createElement("span",{className:"red-star"}," *"),r.a.createElement("textarea",{type:"text",className:"form-control",id:"comment",placeholder:"Your comment"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))),r.a.createElement("div",{className:"social-connect"},r.a.createElement("ul",{className:"social-network social-circle"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/udbhav.bhandari/",target:"_blank",className:"icoFacebook",title:"Facebook"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/udbhavbhandari612",target:"_blank",className:"icoGit",title:"GitHub"},r.a.createElement("i",{className:"fa fa-github"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/udbhavbhandari/",target:"_blank",className:"icoInsta",title:"Instagram"},r.a.createElement("i",{className:"fa fa-instagram"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/udbhav-bhandari-4608b416a/",target:"_blank",className:"icoLinkedIn",title:"LinkedIn"},r.a.createElement("i",{className:"fa fa-linkedin"}))))),r.a.createElement("div",{className:"text-center"},"\xa9 2020 Copyright:\xa0\xa0",r.a.createElement("a",{href:"#",style:{textDecoration:"none"}},"Udbhav Bhandari")))}function h(){var e=Object(n.useRef)(null);Object(n.useEffect)((function(){o(),i.a.registerPlugin(m.a),c(),t()}));var t=function(){window.scrollY>50?e.current.style.opacity="1":e.current.style.opacity="0",window.addEventListener("scroll",(function(){window.scrollY>50?e.current.style.opacity="1":e.current.style.opacity="0"}))},c=function(){i.a.timeline({scrollTrigger:{trigger:"#top",start:"top +=50",end:"top -=50",scrub:!0}})},o=function(){i.a.from(".banner",{opacity:0,y:"-2em",duration:.5,ease:s.c.easeInOut})},l=function(e){var t=0;"1"===e?(t=document.getElementById("aboutMe").offsetTop,i.a.to(window,.8,{scrollTo:t-100,ease:s.c.easeOut})):"2"===e?(t=document.getElementById("projects").offsetTop,i.a.to(window,.8,{scrollTo:t-80,ease:s.c.easeOut})):"3"===e?(t=document.getElementById("contact_me").offsetTop,i.a.to(window,.8,{scrollTo:t-80,ease:s.c.easeOut})):"top"===e&&i.a.to(window,.8,{scrollTo:0,ease:s.c.easeOut})};return r.a.createElement("div",{style:{overflowX:"hidden"}},r.a.createElement("img",{src:a(18),className:"banner",alt:""}),r.a.createElement(u,{handleLinks:function(e){return l(e)}}),r.a.createElement("div",{id:"top"}),r.a.createElement("div",{className:"trigger-banner"},r.a.createElement(E,null)),r.a.createElement("div",{id:"aboutMe"}),r.a.createElement(f,null),r.a.createElement("div",{id:"projects"}),r.a.createElement(g,null),r.a.createElement("div",{id:"contact_me"}),r.a.createElement(b,null),r.a.createElement("div",{className:"stot",ref:e},r.a.createElement("button",{type:"button",className:"btn btn-outline-primary rounded-circle",title:"Go to top",onClick:function(){return l("top")},style:{padding:"5px 7px"}},r.a.createElement("i",{className:"fas fa-chevron-circle-up fa-2x"}))))}i.a.registerPlugin(d.a);a(45);var v=a(9);function N(){return r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"mainbox"},r.a.createElement("div",{className:"err"},"4"),r.a.createElement("i",{className:"far fa-question-circle fa-spin"}),r.a.createElement("div",{className:"err2"},"4"),r.a.createElement("div",{className:"msg"},"Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",r.a.createElement("p",null,"Let's go \xa0",r.a.createElement(v.b,{className:"btn btn-success",to:"/"},"Home"),"\xa0 and try from there."))))}var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:h}),r.a.createElement(l.a,{component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,null,r.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.c0d47a23.chunk.js.map