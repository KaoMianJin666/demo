import{T as a,g as e,a as t}from"./index.fb5d3ec7.js";import{J as s,r as l,P as i,j as n,a as o,o as u,s as r,k as v,B as m}from"./lib.c3c0caa6.js";const d={__name:"index",setup(d){const c=s(),p=l([]),w=l([]),g=l([]),y=l([]),f=l({template_filter:"nomal",template_level:"nomal",points:1}),h=l(!1),L=l(c.query.template_id),D=l({canvasData:{name:c.query.file_name||"",width:2048,height:2048}}),P=l({groups:{},layers:{},elements:{}});i((()=>c.query.template_id),((a,e)=>{L.value=a,h.value=!1,m((()=>{h.value=!0}))}));const _=()=>{window.loading||(window.loading=a()),Promise.all([new Promise((a=>{e("colors").then((e=>{g.value=e.data,a()}))})),new Promise((a=>{e("texts").then((e=>{y.value=e.data,a()}))})),new Promise((a=>{e("prompts").then((e=>{p.value=e.data,a()}))})),new Promise((a=>{e("statics").then((e=>{w.value=e.data,a()}))})),new Promise((a=>{D.value.canvasData.name?t(L.value,"layouts",D.value.canvasData.name).then((e=>{D.value=Object.assign(D.value,e.data.viewData),P.value=e.data.layerData,f.value=e.info,a()})):a()}))]).then((()=>{h.value=!0,window.loading.close(),window.loading=null}))};return n((()=>{_()})),(a,e)=>{const t=o("modelEditor");return h.value?(u(),r(t,{key:0,colorsList:g.value,textsList:y.value,editorType:"edit",promptsList:p.value,staticsList:w.value,setting:D.value,layerData:P.value,templateId:L.value,info:f.value},null,8,["colorsList","textsList","promptsList","staticsList","setting","layerData","templateId","info"])):v("",!0)}}};export{d as default};
