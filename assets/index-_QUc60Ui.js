import"./index-Cz32ihde.js";/* empty css                                                                 */import{_ as e}from"./_plugin-vue_export-helper-BCo6x5W8.js";import{k as a,m as s,n as t,u as l,y as i,x as n,r,C as u,B as o,G as c,j as v,D as d,H as m,p,w as g,F as f,A as b,I as y,J as _,o as w,K as h}from"./lib-CgYB7YUQ.js";import{l as k}from"./logo2-l66aD4rS.js";import{i as x,g as P}from"./index-DBr3Z3sO.js";const I={class:"art-body"},C={class:"art-inner-box"},U={class:"art-inner-left"},T=["src"],D={class:"art-inner-right"},S={class:"art-inner-right-top"},$=["src"],A={class:"art-inner-right-bottom"},F=["src"],O=e({__name:"art",setup:e=>(e,n)=>(a(),s("div",I,[n[5]||(n[5]=t("div",{class:"art-title"},[t("div",{class:"main-title"},"专制艺术"),t("div",{class:"sub-title"},"弥散（磨砂玻璃）")],-1)),t("div",C,[t("div",U,[t("img",{src:l("/assets/left-CGCmNP0R.png")},null,8,T),n[0]||(n[0]=t("div",{class:"art-inner-name"},"花卉",-1)),n[1]||(n[1]=t("div",{class:"art-inner-sub-name"},"弥散清透百合花",-1))]),t("div",D,[t("div",S,[t("img",{src:l("/assets/right-top-C8iGTIHD.png")},null,8,$),n[2]||(n[2]=t("div",{class:"art-inner-name"},"背景",-1)),n[3]||(n[3]=t("div",{class:"art-inner-sub-name"},"朦胧磨砂玻璃",-1))]),t("div",A,[t("img",{src:l("/assets/right-bottom-tYJr2_li.png")},null,8,F),n[4]||(n[4]=t("div",{class:"art-inner-name"},[i(" 弥散 "),t("div",{class:"art-inner-button"},"去生成")],-1))])])])]))},[["__scopeId","data-v-895a88d0"]]);function j(e){return new Promise((a=>{setTimeout((()=>{a()}),e)}))}const L={class:"opInputPlus-body"},M={class:"icon-area"},Y=["src"],B={class:"input-area"},R={class:"tools"},V={class:"tools"},q={style:{position:"absolute"},width:"0",height:"0"},G={id:"displacementFilter"},X=["baseFrequency"],Z=e({__name:"mockInput",props:["inputVal"],setup(e,{expose:c}){const v=n(e,"inputVal"),d=r(""),m=r(""),p=r(""),g=r(""),f=r(""),b=r(),y=r(!1),_=r(null),w=r("0.1 0.1"),h=()=>{var e,a,s=0,t=Math.PI/180;requestAnimationFrame((function l(){var i=w.value;e=Number(i.split(" ")[0]),a=Number(i.split(" ")[1]),s+=.1,e+=1e-4*Math.cos(s*t),a+=5e-4*Math.sin(s*t),i=e.toString()+" "+a.toString(),w.value=i,_.value=requestAnimationFrame(l)}))};return c({mockClick:async()=>{d.value="hover",await j(200),d.value="click",await j(200),d.value="hover",m.value="step1",p.value="step1",await j(200),m.value="step2",p.value="step2",await j(200),m.value="step3",p.value="step3",y.value=!0,g.value="step1",await j(200),b.value="step1",m.value="step4",p.value="step4",g.value="step2",h(),await j(200),cancelAnimationFrame(_.value),b.value=!1,await j(3e3),m.value="",p.value="",g.value="step3",f.value="step3",y.value=!1}}),(e,n)=>(a(),s("div",L,[t("div",{class:u(["animation",m.value])},null,2),t("div",{class:u(["animation-1",p.value])},null,2),t("div",{class:u(["color-animation",g.value])},null,2),t("div",{class:u(["color-animation-1",f.value])},null,2),t("div",{class:u(["main-bg",{needFilter:y.value}])},null,2),t("div",M,[t("img",{src:l(k)},null,8,Y)]),t("div",{class:u(["input-area-outer",b.value])},[t("div",B,o(v.value),1),t("div",{class:u(["input-btn-area",`${d.value}`])},[t("div",R,[t("i",{class:u(["bi",l(x)])},null,2)]),t("div",V,[t("i",{class:u(["bi",l(P)])},null,2)]),n[0]||(n[0]=t("div",{class:"btn"},[i("创作"),t("i",{class:"bi bi-rocket-takeoff"})],-1))],2)],2),(a(),s("svg",q,[t("filter",G,[t("feTurbulence",{type:"turbulence",baseFrequency:w.value,numOctaves:"1",result:"turbulence",seed:"51"},null,8,X),n[1]||(n[1]=t("feDisplacementMap",{in2:"turbulence",in:"SourceGraphic",scale:"5",xChannelSelector:"R",yChannelSelector:"B"},null,-1))])]))]))}},[["__scopeId","data-v-afc5e44f"]]),J="/assets/cat-CKbPuYlw.png",N={class:"expression-body"},W=["src"],H=["src"],K=["src"],Q=e({__name:"expression",setup(e,{expose:i}){const n=r(null),o=r(null),y=r(null);r(0);const _=r(""),w=r(""),h=r(""),k=r(""),x=r(""),P=r("");r(0),r(null);const I=r(10),C=r([{uuid:c(),image:J,name:"雨中山屋0"},{uuid:c(),image:J,name:"雨中山屋1"},{uuid:c(),image:J,name:"雨中山屋2"},{uuid:c(),image:J,name:"雨中山屋0"},{uuid:c(),image:J,name:"雨中山屋1"},{uuid:c(),image:J,name:"雨中山屋2"}]),U=()=>new Promise((e=>{e("帮我生成一幅油画水彩风格的白色猫咪，头上有颗草莓")})),T=async()=>{k.value="step-1",await j(600),k.value="step-2",await j(1e3),_.value="step-1",await j(1e3)},D=async()=>{_.value="step-2",h.value="step-1",await j(500),h.value="step-2",_.value="step-3",await j(500),h.value="step-3",x.value="step-1",await j(500),h.value="step-4",await j(0),h.value="step-5",k.value="step-3",x.value="step-2",await j(0),await S(),P.value="step-1"},S=()=>new Promise((e=>{I.value>500?(I.value=2e3,e()):setTimeout((()=>{I.value*=1.2,o.value.next(),y.value.next(),e(S())}),I.value)})),$=(e="",a="",s=0)=>{const t=e.split("");return new Promise((l=>{a+=t[s],w.value=a,++s===t.length?l():setTimeout((()=>{l($(e,a,s))}),50)}))};return i({init:async()=>{_.value="",h.value="",k.value="",x.value="",P.value="",I.value=10,await j(1e3),await T();const e=await U();await $(e),await n.value.mockClick(),await j(300),await D()}}),(e,i)=>{const r=v("n-carousel-item"),c=v("n-carousel");return a(),s("div",N,[t("div",{class:u(["art-title",k.value])},i[1]||(i[1]=[t("div",{class:"main-title"},"表现形式",-1),t("div",{class:"sub-title"},"油画水彩",-1)]),2),"step-3"!==_.value?(a(),s("div",{key:0,class:u(["input-outer",_.value])},["step-3"!==_.value?(a(),d(Z,{key:0,inputVal:w.value,ref_key:"mockInputRef",ref:n},null,8,["inputVal"])):m("",!0)],2)):m("",!0),t("div",{class:u(["main-image-area",h.value])},[t("img",{src:l(J)},null,8,W),i[2]||(i[2]=t("div",{class:"main-image-title"},"猫咪",-1)),p(c,{effect:"card","next-slide-style":"transform: translateX(-130%) ","prev-slide-style":"transform: translateX(30%) ",class:u(["min-round-image",P.value]),"show-dots":!1,loop:"",autoplay:2e3===I.value,"onUpdate:currentIndex":i[0]||(i[0]=e=>{o.value.to(e)}),ref_key:"minCarouselRef",ref:y},{default:g((()=>[(a(!0),s(f,null,b(C.value,((e,s)=>(a(),d(r,{class:"min-image-item",style:{width:"6rem"}},{default:g((()=>[t("img",{src:e.image},null,8,H)])),_:2},1024)))),256))])),_:1},8,["class","autoplay"])],2),t("div",{class:u(["round-image-area",x.value])},[p(c,{effect:"card","next-slide-style":"transform: translateY(-150%) translateZ(-2rem);","prev-slide-style":"transform: translateY(50%) translateZ(-2rem);",style:{height:"100%"},"show-dots":!1,loop:"",autoplay:2e3===I.value,"transition-style":{transitionDuration:`${Math.ceil((I.value,I.value))}ms`},ref_key:"carouselRef",ref:o,direction:"vertical"},{default:g((()=>[(a(!0),s(f,null,b(C.value,((e,s)=>(a(),d(r,{class:"image-item",style:{height:"70%"}},{default:g((()=>[t("img",{src:e.image},null,8,K)])),_:2},1024)))),256))])),_:1},8,["autoplay","transition-style"])],2)])}}},[["__scopeId","data-v-5ed5f57e"]]),z={class:"art-body"},E={class:"art-inner-box"},ee={class:"card-outer"},ae={class:"card-title"},se=e({__name:"displayDesign",setup(e){const l=r([{title:"Promega's top-down adoption of OPLUS",subTitle:"小标题1",imageUrl:"/assets/installationArt_1-C9VIqTow.webp"},{title:"Promega's top-down adoption of OPLUS",subTitle:"小标题2",imageUrl:"/assets/installationArt_2-BiBQhpI5.webp"},{title:"Promega's top-down adoption of OPLUS",subTitle:"小标题3",imageUrl:"/assets/installationArt_3-BeMGgWFM.webp"}]);return(e,i)=>(a(),s("div",z,[i[0]||(i[0]=t("div",{class:"art-title"},[t("div",{class:"main-title"},"陈列设计"),t("div",{class:"sub-title"})],-1)),t("div",E,[t("div",ee,[(a(!0),s(f,null,b(l.value,((e,l)=>(a(),s("div",{class:"card-item",key:l},[t("div",ae,o(e.title),1),t("div",{class:"card-image",style:y({backgroundImage:`url(${e.imageUrl})`})},null,4)])))),128))])])]))}},[["__scopeId","data-v-6cc5ede4"]]),te={class:"art-body"},le={class:"art-inner-box"},ie={class:"card-outer"},ne={class:"card-item"},re={class:"card-title"},ue=e({__name:"installationArt",setup(e){const l=r([{title:"Promega's top-down adoption of OPLUS",subTitle:"小标题1",imageUrl:"/assets/displayDesign_1-CVc6SllJ.webp"},{title:"Promega's top-down adoption of OPLUS",subTitle:"小标题2",imageUrl:"/assets/displayDesign_2-DrOibWkB.webp"},{title:"Promega's top-down adoption of OPLUS",subTitle:"小标题3",imageUrl:"/assets/displayDesign_3-DOcA32DL.webp"}]);return(e,i)=>{const n=v("n-carousel-item"),r=v("n-carousel");return a(),s("div",te,[i[0]||(i[0]=t("div",{class:"art-title"},[t("div",{class:"main-title"},"装置艺术"),t("div",{class:"sub-title"})],-1)),t("div",le,[t("div",ie,[p(r,{effect:"card","next-slide-style":"transform: translateX(-18.5rem) translateZ(-5rem)","prev-slide-style":"transform: translateX(8rem) translateZ(-5rem)",class:"min-round-image","show-dots":!1,loop:"",autoplay:"",ref:"minCarouselRef","transition-style":{transitionDuration:"1000ms"}},{default:g((()=>[(a(!0),s(f,null,b(l.value,((e,s)=>(a(),d(n,{class:"min-image-item",style:{width:"10.5rem"},key:s},{default:g((()=>[t("div",ne,[t("div",re,o(e.title),1),t("div",{class:"card-image",style:y({backgroundImage:`url(${e.imageUrl})`})},null,4)])])),_:2},1024)))),128))])),_:1},512)])])])}}},[["__scopeId","data-v-5d04a079"]]),oe={class:"main-body"},ce={class:"navbar-body"},ve={class:"navbar"},de=["onClick"],me={class:"main-inner"},pe=e({__name:"index",setup(e){const l=[{name:"表现形式",$ref:r(null),components:Q},{name:"专制艺术",$ref:r(null),components:O},{name:"陈列设计",$ref:r(null),components:se},{name:"装置艺术",$ref:r(null),components:ue}],i=r(!1),n=r(null);_(n,(e=>{i.value=!0;try{l[e].$ref.value[0].init().then((()=>{i.value=!1}))}catch(a){i.value=!1}}));const c=e=>{i.value||(e.deltaY<0&&n.value>0?n.value--:e.deltaY>0&&n.value<l.length-1&&n.value++,e.stopPropagation())};return w((()=>{n.value=0})),(e,r)=>(a(),s("div",{class:"main-outer",tabindex:"0",onWheel:c},[t("div",oe,[t("div",ce,[t("div",ve,[(a(),s(f,null,b(l,((e,a)=>t("div",{class:u(["navbar-item",{selected:n.value===a}]),key:a,onClick:e=>(e=>{i.value||(n.value=e)})(a)},o(e.name),11,de))),64))])]),t("div",me,[t("div",{class:"main-inner-content",style:y({transform:`translateY(${-100*n.value}%)`})},[(a(),s(f,null,b(l,((e,a)=>p(h(e.components),{key:a,ref_for:!0,ref:e.$ref},null,512))),64))],4)])])],32))}},[["__scopeId","data-v-cd0a995c"]]);export{pe as default};
