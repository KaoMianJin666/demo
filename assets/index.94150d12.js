import{_ as e,c as a,T as s,g as l,d as n}from"./index.47385873.js";import{r as o,j as t,c as d,b as i,e as r,w as m,u,a as c,o as p,F as w,x as v,s as g,n as _}from"./lib.2ed4982d.js";const y={class:"main-body"},b={class:"module-list"};var f=e({__name:"index",props:["class"],setup(e){const f=e,h=u(),T=o({}),j=()=>{l("layouts").then((e=>{T.value=e.templates}))};return t((()=>{a().then((()=>{j()})),window.loading||(window.loading=s()),setTimeout((()=>{window.loading.close(),window.loading=null}),300)})),(e,a)=>{const l=c("modelCard"),o=c("el-scrollbar");return p(),d("div",y,[i("div",b,[r(o,null,{default:m((()=>[(p(!0),d(w,null,v(Object.keys(T.value),(e=>(p(),g(l,{class:_(f.class),key:e,data:{name:e,preview:T.value[e].preview},onToUpdate:()=>{(({name:e})=>{window.loading=s(),setTimeout((()=>{h.replace({path:"modelEditor",query:{file_name:e}})}),300)})({name:e,preview:T.value[e].preview})},onDeleteItem:()=>{(({name:e})=>{n("layouts",e).then((e=>{j()}))})({name:e})},"need-go-handle":"",onGoHandle:()=>{var a;a=e,window.loading=s(),setTimeout((()=>{h.replace({path:"generateImage",query:{file_name:a}})}),300)}},null,8,["class","data","onToUpdate","onDeleteItem","onGoHandle"])))),128))])),_:1})])])}}},[["__scopeId","data-v-15c3b148"]]);export{f as default};
