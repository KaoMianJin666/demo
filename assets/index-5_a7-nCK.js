const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BjyP01xC.js","assets/lib-DgJLZFQ9.js","assets/lib-DfSMHEQP.css","assets/TLoading-Bo8MZJbY.js","assets/_plugin-vue_export-helper-BCo6x5W8.js","assets/tToading-Cv-6Q2DK.css","assets/index-CSALuatt.css","assets/index-CS0PEhfN.js","assets/logo2-l66aD4rS.js","assets/index-D2jkVZeO.js","assets/syncSleep-DvzJnWfR.js","assets/index-DJ8gafu_.css","assets/svgAnimation-byvgOrjn.js","assets/svgAnimation-DREQL-OW.css","assets/index-BP1SdtrR.js","assets/menu-B85Lp49n.js","assets/index-TfL9rwgS.css","assets/index-Dyu3vDUA.js","assets/opInput-BPvvhxmp.js","assets/opInput-BilC5rUZ.css","assets/index-Cg0oIcmH.css","assets/index-U-oKvqk4.js","assets/promptSetting-4OozVV9L.js","assets/modelCard-D4EKRiWy.js","assets/modelCard-Cr3TbbAB.css","assets/index-DwioVMHT.css","assets/index-K_m2YLZz.js","assets/artwork-CrRZt066.js","assets/index-P0ZzhNka.css","assets/index-41YAqA0s.js","assets/index-DJBipzBe.css","assets/index-CaXxBPlX.js","assets/index-CJXesdnJ.css","assets/index-CkGptLZP.js","assets/file-C3RgH22k.js","assets/index-IAv3qFOg.css","assets/index-cpp1Qns_.js","assets/index-wjLxjmu0.js","assets/index-DvYFx-yw.css","assets/index-DPEMwyIc.js","assets/index-z5_v_142.js","assets/index-C8JxS3iH.js","assets/index-BmZqZB-b.js","assets/index-zh1Qvzao.js","assets/dataWarehouse-BsRuYnZy.js","assets/index-BgTXdi5e.css","assets/index-DwE083Bt.js","assets/index-BISr31vr.css"])))=>i.map(i=>d[i]);
import{d as e,a as t,r as o,c as n,b as r,l as s,e as a,f as i,g as c,h as u,i as l,o as m,j as d,k as p,m as h,n as _,p as f,w as g,u as E,z as v,q as P,s as S,t as L}from"./lib-DgJLZFQ9.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const y=e({id:"public",state:()=>({rootDom:null,colorScheme:null,leftBarShowType:0,routePath:null,isCarryOut:!1,chargeShow:!1}),getters:{getRootDom(){return this.rootDom},getColorScheme(){return this.colorScheme},getLeftBarShowType(){return this.leftBarShowType},getRoutePath(){return this.routePath},getChargeShow(){return this.chargeShow}},actions:{setRootDom(e){this.rootDom=e},setIsCarryOut(e){this.isCarryOut=e},setRoutePath(e){this.routePath=e},setChargeShow(e){this.chargeShow=e},setLeftBarShowType(e){this.leftBarShowType=e},setColorScheme:e=>new Promise((t=>{e=(e=e||localStorage.getItem("colorScheme"))||"dark"})),removeTheme(e){const t=document.getElementById(`theme-${e}`);t&&t.parentNode.removeChild(t)}}});const I="_AICLOTH_CONSOLE_",w="_AICLOTH_CONSOLE__token";function O(){const e=localStorage.getItem(I+"USER");return e&&"undefined"!==e?JSON.parse(e):null}function A(e){localStorage.setItem(I+"USER",JSON.stringify(e))}function D(){const e=t.get(w);return""!==e||void 0!==e||null!==e?e:null}const T=o("light"),R=n((()=>({theme:"light"===T.value?s:a}))),{message:j,notification:b,dialog:k,loadingBar:C,modal:x}=r(["message","dialog","notification","loadingBar","modal"],{configProviderProps:R}),V={},W=function(e,t,o){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),o=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));n=Promise.allSettled(t.map((e=>{if((e=function(e){return"/"+e}(e))in V)return;V[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script"),r.crossOrigin="",r.href=e,o&&r.setAttribute("nonce",o),document.head.appendChild(r),t?new Promise(((t,o)=>{r.addEventListener("load",t),r.addEventListener("error",(()=>o(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function r(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return n.then((t=>{for(const e of t||[])"rejected"===e.status&&r(e.reason);return e().catch(r)}))},B=[{path:"/",name:"home",component:()=>W((()=>import("./index-BjyP01xC.js")),__vite__mapDeps([0,1,2,3,4,5,6])),redirect:"/main",children:[{path:"main",name:"main",component:()=>W((()=>import("./index-CS0PEhfN.js")),__vite__mapDeps([7,4,1,2,8,9,10,11,5]))}]},{path:"/svgAnimation",name:"svgAnimation",component:()=>W((()=>import("./svgAnimation-byvgOrjn.js")),__vite__mapDeps([12,4,1,2,13]))},{path:"/basic",name:"basic",component:()=>W((()=>import("./index-BP1SdtrR.js")),__vite__mapDeps([14,8,4,1,2,3,5,9,15,16])),redirect:"/basic/ai",children:[{path:"ai",name:"ai",component:()=>W((()=>import("./index-Dyu3vDUA.js")),__vite__mapDeps([17,1,2,8,18,9,10,4,19,20]))},{path:"templateDepot",name:"templateDepot",component:()=>W((()=>import("./index-U-oKvqk4.js")),__vite__mapDeps([21,3,1,2,4,5,22,23,9,24,25,19]))},{path:"artWorks",name:"artWorks",component:()=>W((()=>import("./index-K_m2YLZz.js")),__vite__mapDeps([26,3,1,2,4,5,27,23,9,24,28,19]))},{path:"resourceCenter",name:"resourceCenter",component:()=>W((()=>import("./index-41YAqA0s.js")),__vite__mapDeps([29,3,1,2,4,5,9,30]))},{path:"resourceCenterInfo",name:"resourceCenterInfo",component:()=>W((()=>import("./index-CaXxBPlX.js")),__vite__mapDeps([31,3,1,2,4,5,22,23,9,24,32,19]))},{path:"resourceInfo",name:"resourceInfo",component:()=>W((()=>import("./index-CkGptLZP.js")),__vite__mapDeps([33,3,1,2,4,5,8,9,34,22,35]))},{path:"modelEditor",name:"modelEditor",component:()=>W((()=>import("./index-cpp1Qns_.js")),__vite__mapDeps([36,22,1,2,3,4,5,37,9,34,27,15,18,8,10,19,38]))},{path:"updateModel",name:"updateModel",component:()=>W((()=>import("./index-DPEMwyIc.js")),__vite__mapDeps([39,22,1,2,3,4,5,37,9,34,27,15,18,8,10,19,38]))},{path:"generateImage",name:"generateImage",component:()=>W((()=>import("./index-z5_v_142.js")),__vite__mapDeps([40,22,1,2,3,4,5,37,9,34,27,15,18,8,10,19,38]))},{path:"artWorkInfo",name:"artWorkInfo",component:()=>W((()=>import("./index-C8JxS3iH.js")),__vite__mapDeps([41,22,27,1,2,3,4,5,37,9,34,15,18,8,10,19,38]))},{path:"artWorkEditor",name:"artWorkEditor",component:()=>W((()=>import("./index-BmZqZB-b.js")),__vite__mapDeps([42,22,27,1,2,3,4,5,37,9,34,15,18,8,10,19,38]))},{path:"dataWarehouse",name:"dataWarehouse",component:()=>W((()=>import("./index-zh1Qvzao.js")),__vite__mapDeps([43,4,1,2,9,3,5,44,45]))},{path:"dataWarehouseEditor",name:"dataWarehouseEditor",component:()=>W((()=>import("./index-DwE083Bt.js")),__vite__mapDeps([46,1,2,4,3,5,18,8,9,10,19,31,22,23,24,32,37,34,27,15,38,26,28,44,47]))}]}],N=i({history:c("/"),routes:B});N.beforeEach((e=>{const{publicStore:t}=G();t.setRoutePath(e.path)}));const U=j,$=u.create({baseURL:"https://u248120-a5f1-770998cc.westb.seetacloud.com:8443",timeout:6e4,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});function q(e){if(!e.response)return U.error({message:"请求超时"}),Promise.reject(e);D();const t=e.response.status,o=e.response.data,{userStore:n}=G();return 401===t?n.handleLogout():400!==t&&500!==t||U.error({message:o.message}),Promise.reject(e)}function z(e){return $.post("/oplus/get_login_code",e)}function K(){return $.get("/oplus/user_info")}$.interceptors.request.use((e=>{const t=D();if(t&&e.headers){const o=O();e.headers.Authorization=`Bearer ${t}`,e.headers.user_id=o}return e}),q),$.interceptors.response.use((e=>200===e.status&&200===e.data.code?e.data:(U.error(e.data.message),Promise.reject(e.data))),q);const M=e({id:"users",state:()=>({user:O()||"***********",phone:"***",points:"∞",permissions:null,token:D()||"",workingTenant:null}),getters:{getUser(){return this.user},getPermissions(){return this.permissions}},actions:{handleLogin(e){return new Promise(((o,n)=>{var r;(r=e,$.post("/oplus/login",r)).then((n=>{var r;this.token=n.token,this.user=e.username,A(this.user),r=this.token,t.set(w,r,{expires:1}),o()})).catch((e=>{n(e)}))}))},handleLogout(e=""){return new Promise(((e,o)=>{t.remove(w),localStorage.removeItem(I+"USER"),this.user=null,this.permissions=null,this.token="",A(null),e(null)}))}}});const H=l(),J={publicStore:(F=H,y(F)),userStore:function(e){return M(e)}(H)};var F;function G(){return J}const Q={id:"main-inner"},X=S({__name:"App",setup(e){const{publicStore:t}=G(),n=o(1920),r=o(null),s=()=>{const e=document.body.clientWidth;n.value=e;const t=n.value/50;document.documentElement.style.fontSize=`${t}px`,window.rootFont=t;const o=document.getElementById("theme-main");o&&o.parentNode.removeChild(o)};return m((()=>{document.addEventListener("contextmenu",(function(e){e.preventDefault()})),document.documentElement.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()}),{passive:!1}),document.addEventListener("wheel",(function(e){(e.altKey||e.ctrlKey)&&(e.preventDefault(),e.stopPropagation())}),{passive:!1}),s(),window.onresize=()=>{s()},t.setRootDom(r.value)})),(e,t)=>{const o=d("router-view"),n=d("n-config-provider");return p(),h("div",{id:"app",ref_key:"rootDom",ref:r},[_("div",Q,[f(n,{style:{width:"100%",height:"100%"},locale:E(v),"date-locale":E(P)},{default:g((()=>[f(o)])),_:1},8,["locale","date-locale"])])],512)}}});X.use(l()),X.use(N),X.use(L),X.mount("#app"),window.myLover=()=>{};export{W as _,K as a,N as b,k as d,z as g,j as m,$ as r,G as u};
