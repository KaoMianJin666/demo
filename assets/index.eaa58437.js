import{_ as e,c as a,T as s,g as l,d as n}from"./index.05f5f293.js";import{r as o,o as t,c as d,g as i,j as r,w as m,x as u,B as c,e as p,F as w,A as v,f,h as g}from"./lib.ceb054f3.js";const _={class:"main-body"},h={class:"module-list"};var y=e({__name:"index",props:["class"],setup(e){const y=e,T=u(),b=o({}),j=()=>{l("layouts").then((e=>{b.value=e.templates}))};return t((()=>{a().then((()=>{j()})),window.loading||(window.loading=s()),setTimeout((()=>{window.loading.close(),window.loading=null}),300)})),(e,a)=>{const l=c("modelCard"),o=c("el-scrollbar");return p(),d("div",_,[i("div",h,[r(o,null,{default:m((()=>[(p(!0),d(w,null,v(Object.keys(b.value),(e=>(p(),f(l,{class:g(y.class),key:e,data:{name:e,preview:b.value[e].preview},onToUpdate:()=>{(({name:e})=>{window.loading=s(),setTimeout((()=>{T.replace({path:"modelEditor",query:{file_name:e}})}),300)})({name:e,preview:b.value[e].preview})},onDeleteItem:()=>{(({name:e})=>{n("layouts",e).then((e=>{j()}))})({name:e})},"need-go-handle":"",onGoHandle:()=>{var a;a=e,window.loading=s(),setTimeout((()=>{T.replace({path:"generateImage",query:{file_name:a}})}),300)}},null,8,["class","data","onToUpdate","onDeleteItem","onGoHandle"])))),128))])),_:1})])])}}},[["__scopeId","data-v-d33f3932"]]);export{y as default};
