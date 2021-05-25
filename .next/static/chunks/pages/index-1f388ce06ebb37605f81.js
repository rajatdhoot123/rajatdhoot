(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9387:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return q}});var r=t(7294),i=t.n(r),o={FACEBOOK:"https://www.facebook.com/rajatdhoot123",TWITTER:"https://twitter.com/Rajat_Dhoot",LINKEDIN:"https://www.linkedin.com/in/rajatdhoot/"},a=i().createElement,l=i().forwardRef((function(n,e){var t=function(n){window.open(o[n],"_blank")};return a("div",{ref:e,id:"hero",style:{height:"100vh"}},a("div",{style:{textTransform:"uppercase",position:"absolute",top:"50%",transform:"translateY(-50%)",width:"100%"}},a("div",{style:{marginLeft:"20%",position:"relative"}},a("h3",{style:{letterSpacing:"0.2rem"}},a("span",{style:{color:"#ee596a"}},"Hello,")," I am Rajat Dhoot"),a("h1",{style:{marginTop:"0.5rem",marginBottom:"0.5rem"}},"Software Developer"),a("h4",{style:{marginTop:"0.5rem",marginBottom:"0.5rem"}},"Design Website moslty powered by javascript")),a("div",{style:{right:"0",position:"absolute",display:"flex"}},a("div",{onClick:t.bind(null,"LINKEDIN"),style:{cursor:"pointer",marginLeft:"10px",backgroundColor:"white",borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%",height:"50px",width:"50px",display:"flex",justifyContent:"center",alignItems:"center",padding:"10px",paddingRight:"0px"}},a("img",{src:"/rajatdhoot/linkedin.svg"})),a("div",{style:{backgroundColor:"white",height:"50px",width:"auto",display:"flex",alignItems:"center",padding:"10px",paddingLeft:"0px"}},a("div",{onClick:t.bind(null,"TWITTER"),style:{cursor:"pointer",height:"50px",width:"50px",display:"flex",justifyContent:"center",alignItems:"center"}},a("img",{src:"/rajatdhoot/twitter.svg"})),a("div",{onClick:t.bind(null,"FACEBOOK"),style:{cursor:"pointer",height:"50px",width:"50px",display:"flex",justifyContent:"center",alignItems:"center"}},a("img",{src:"/rajatdhoot/facebook.svg"}))))))})),s=t(7261),c=t(4910),u=[{heading:"Responsive Design",text:"My layouts will work on any device, big or small.",image:"/rajatdhoot/Responsive.png"},{heading:"Performance",text:"Fast load times and lag free interaction, my highest priority",image:"/rajatdhoot/WebPerformance.png"},{heading:"Intuitive",text:"Strong preference for easy to use, intuitive UX/UI. ",image:"/rajatdhoot/UI_UX.png"},{heading:"Dynamic",text:"Websites don't have to be static, I love making pages come to life.",image:"/rajatdhoot/webapp.jpg"}],d=i().createElement;function p(){var n=(0,s.Z)(["\n  width: 50%;\n  .image-with-text {\n    display: flex;\n    padding: 1rem;\n  }\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    .image-with-text {\n      display: block;\n      text-align: center;\n    }\n  }\n"]);return p=function(){return n},n}function m(){var n=(0,s.Z)(["\n  width: 100%;\n"]);return m=function(){return n},n}function f(){var n=(0,s.Z)(["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  margin: auto;\n  max-height: 80%;\n  overflow: scroll;\n  width: 60%;\n  background-color: white;\n  border-radius: 5px;\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n  }\n"]);return f=function(){return n},n}var g=function(n){var e=n.image,t=n.heading,r=n.text;return d(x,null,d("div",{className:"image-with-text"},d("div",{style:{padding:"1rem",display:"flex",justifyContent:"center",alignItems:"center"}},d("img",{src:e,style:{maxHeight:"75px",maxWidth:"75px",borderRadius:"50%"},alt:"Suouce"})),d("div",{className:"text-center",style:{padding:"1rem",paddingLeft:"0px"}},d("h4",{style:{marginTop:"0.5rem",marginBottom:"0.5rem"}},t),d("span",{style:{color:"#abb0c8"}},r))))},h=i().forwardRef((function(n,e){return d("div",{ref:e,id:"info",style:{display:"flex",height:"100vh"}},d(b,null,d(v,null,d("div",{style:{display:"flex",justifyContent:"center",marginTop:"4rem"}},d("div",{style:{textTransform:"uppercase",textAlign:"center"}},d("h4",{style:{letterSpacing:"0.2rem"}},"What I do"),d("h2",{style:{fontWeight:"800"}},"Specializing In"))),d("div",{style:{display:"flex",flexWrap:"wrap"}},u.map((function(n){var e=n.text,t=n.heading,r=n.image;return d(g,{key:t,image:r,heading:t,text:e})}))))))})),b=c.ZP.div(f()),v=c.ZP.div(m()),x=c.ZP.div(p()),y=h;function w(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function j(){var n=(0,s.Z)(["\n  background-image: linear-gradient(\n    109.6deg,\n    rgba(204, 228, 247, 1) 11.2%,\n    rgba(237, 246, 250, 1) 100.2%\n  );\n\n  @media only screen and (max-width: 600px) {\n    .app-top {\n      justify-content: center;\n      display: flex;\n    }\n  }\n"]);return j=function(){return n},n}function k(){var n=(0,s.Z)(["\n  top: 50%;\n  z-index: 1;\n  position: fixed;\n  transform: translateY(-50%);\n  margin-left: 20px;\n  .circle.small {\n    cursor: pointer;\n    margin: 20px;\n    border: 2px solid black;\n    border-radius: 50%;\n    width: 12px;\n    height: 12px;\n  }\n  @media only screen and (max-width: 600px) {\n    bottom: 0;\n    top: initial;\n    transform: translateY(-50%);\n    margin-left: 0px;\n    display: flex;\n  }\n"]);return k=function(){return n},n}var O=c.ZP.div((function(n){var e=n.unit,t=void 0===e?"initial":e;return"\npadding-top: ".concat(t,"\npadding-bottom:").concat(t,"\n")})),P=(c.ZP.div((function(n){var e=n.unit,t=void 0===e?"initial":e;return"\nmargin-top: ".concat(t,"\nmargin-bottom:").concat(t,"\n")})),c.ZP.div(k())),C=c.ZP.div(j()),I=t(809),E=t.n(I);function T(n,e,t,r,i,o,a){try{var l=n[o](a),s=l.value}catch(c){return void t(c)}l.done?e(s):Promise.resolve(s).then(r,i)}function Z(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){T(o,r,i,a,l,"next",n)}function l(n){T(o,r,i,a,l,"throw",n)}a(void 0)}))}}function N(){return(N=Z(E().mark((function n(){var e,t,r,i=arguments;return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},n.next=4,fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return r=n.sent,n.next=7,r.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var R=i().createElement;function S(){var n=(0,s.Z)(["\n  cursor: pointer;\n  display: inline-flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  min-width: 15rem;\n  min-height: 44px;\n  line-height: 44px;\n  margin-top: 0px;\n  margin-left: 0px;\n  white-space: nowrap;\n  font-size: 1.6rem;\n  font-weight: 300;\n  color: rgb(255, 255, 255);\n  opacity: 1;\n  background: border-box rgb(237, 90, 107);\n  border-color: rgb(237, 90, 107);\n  border-width: 0px;\n  border-style: solid;\n  border-radius: 0.2rem;\n  padding: 0px 1.6rem;\n  transition: transform 0.25s ease 0s, opacity 0.25s ease 0s,\n    box-shadow 0.25s ease 0s;\n  outline: none !important;\n"]);return S=function(){return n},n}function _(){var n=(0,s.Z)(["\n  font-size: 18px;\n  width: 100%;\n  box-sizing: border-box;\n  color: rgb(28, 28, 28);\n  padding: 1.25rem 1.15rem;\n  background: rgb(255, 255, 255);\n  border-width: 0.15rem;\n  border-style: solid;\n  border-image: initial;\n  outline: none;\n  border-radius: 0.2rem;\n"]);return _=function(){return n},n}function D(){var n=(0,s.Z)(["\n  height: 2.4rem;\n  font-size: 18px;\n  width: 100%;\n  box-sizing: border-box;\n  color: rgb(28, 28, 28);\n  padding: 1.25rem 1.15rem;\n  background: rgb(255, 255, 255);\n  border-width: 0.15rem;\n  border-style: solid;\n  border-image: initial;\n  outline: none;\n  border-radius: 0.2rem;\n"]);return D=function(){return n},n}function z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function W(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?z(Object(t),!0).forEach((function(e){w(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var L={name:"",email:"",message:""},B=i().forwardRef((function(n,e){var t=(0,r.useState)(L),i=t[0],o=t[1],a=(0,r.useState)({error:null}),l=(a[0],a[1]),s=function(n){var e=n.target.name,t=n.target.value;o((function(n){return W(W({},n),{},w({},e,t))}))};return R("div",{ref:e,id:"contact",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},R("div",null,R("h2",{style:{textAlign:"center"}},"Contact"),R("h4",{style:{textAlign:"center"}},"Have a question or want to work together?"),R("div",null,R("form",{method:"POST",action:"https://formspree.io/mwkvyqzd",onSubmit:function(n){n.preventDefault(),function(){return N.apply(this,arguments)}("https://formspree.io/mwkvyqzd",i).then((function(n){n.ok,n.next;o(L),l({error:null,success:!0}),alert("Your message was sent successfully. Thanks!")})).catch((function(n){l({error:n,success:!1}),alert("Unable to send message")}))}},R(O,{unit:"0.5rem"},R("label",null,"Name:",R(A,{name:"name",type:"text",value:i.name,onChange:s}))),R(O,{unit:"0.5rem"},R("label",null,"Email:",R(A,{name:"email",type:"email",value:i.email,onChange:s}))),R(O,{unit:"0.5rem"},R("label",null,"Your Message:",R(U,{name:"message",rows:"4",type:"text",value:i.message,onChange:s}))),R(Y,{type:"submit"},"Submit")))))})),A=c.ZP.input(D()),U=c.ZP.textarea(_()),Y=c.ZP.button(S()),K=B,X=i().createElement;var q=function(){var n=(0,r.useRef)(null),e=(0,r.useRef)(null),t=(0,r.useRef)(null);return(0,r.useEffect)((function(){var r=new IntersectionObserver((function(n){n.forEach((function(n){if(n.isIntersecting){var e=n.target;n.intersectionRatio>=.5&&(window.location.hash=e.id)}}))}),{root:null,rootMargin:"0px",threshold:.5});n.current&&r.observe(n.current),e.current&&r.observe(e.current),t.current&&r.observe(t.current)}),[]),X(C,null,X("div",{className:"app-top"},X(P,null,X("div",{onClick:function(){return window.location.href="#hero"},className:"circle small"}),X("div",{onClick:function(){return window.location.href="#info"},className:"circle small"}),X("div",{onClick:function(){return window.location.href="#contact"},className:"circle small"}))),X(l,{ref:n}),X(y,{ref:e}),X(K,{ref:t}))}},8581:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9387)}])}},function(n){n.O(0,[774,888,179],(function(){return e=8581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);