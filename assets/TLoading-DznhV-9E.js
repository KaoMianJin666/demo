import{x as a,D as e,r as l,o,k as s,C as n,n as i,E as t,H as u,u as d,T as r,p as v,a1 as c}from"./lib-B5SO1xxf.js";import{u as m}from"./index-CHyfbQKH.js";import{_ as p}from"./_plugin-vue_export-helper-BCo6x5W8.js";const g={class:"loading-animation-area"},y={class:"loading-bg"},b=["src"],x=p({__name:"tToading",setup(v,{expose:c}){const{publicStore:p}=m(),x=a(p,"isCarryOut"),_=a(p,"routePath");e();const h=l(Boolean(_.value.includes("/basic"))),T=l(!1),f=l(!1);Array(6).fill("✨");const w=l(null);o((()=>{w.value.playbackRate=.9,setTimeout((()=>{T.value=!0,setTimeout((()=>{f.value||(f.value=!0,w.value.play())}),300)}))}));const C=()=>{w.value.currentTime=0,w.value.play()};return c({close:()=>(f.value=!1,new Promise((a=>{setTimeout((()=>{T.value=!1,setTimeout((()=>{a()}),300)}),300)})))}),(a,e)=>(s(),n(r,{to:"body"},[i("div",{class:t(["loading-body",h.value?x.value?"un_expand":"expand":""])},[i("div",g,[i("div",y,[i("video",{class:t(["loading-video",{animate:T.value}]),style:u({opacity:Number(T.value)}),src:d("/assets/loading-BmhdinER.mp4"),ref_key:"videoDom",ref:w,type:"video/mp4",onEnded:C,muted:"",playsinline:""},null,46,b)]),i("div",{class:t(["loading-left",{animate:T.value}])},null,2),i("div",{class:t(["loading-top",{animate:T.value}])},null,2),i("div",{class:t(["loading-right",{animate:T.value}])},null,2),i("div",{class:t(["loading-bottom",{animate:T.value}])},null,2)]),i("div",{class:"loading-inner",style:u({opacity:Number(f.value)})},e[0]||(e[0]=[i("div",{class:"rainbow-text"},null,-1)]),4)],2)]))}},[["__scopeId","data-v-a55d2d24"]]),_=a=>{let e=Boolean(window.loading),l=null;const{publicStore:o}=m(),s=o.rootDom;let n=document.createElement("div");return s.appendChild(n),e?window.loading:(l=v(x,a),c(l,n),e=!0,{close:()=>{e&&l&&l.component.exposed.close().then((()=>{c(null,n),s.removeChild(n),l=null,e=!1}))}})};export{_ as T};