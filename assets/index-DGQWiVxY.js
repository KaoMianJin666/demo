import{g as e}from"./promptSetting-COgC1sCZ.js";import{g as t}from"./artwork-3Fb5jXny.js";import{r as a,J as s,o,D as i,H as l,E as n,k as r,M as m}from"./lib-COXcuUSy.js";import{T as p}from"./TLoading-DG2_IqLk.js";import{m as u}from"./index-CuQw3aTJ.js";import"./index-mpOv828J.js";/* empty css                                                                 */import"./_plugin-vue_export-helper-BCo6x5W8.js";import"./index-D2jkVZeO.js";import"./file-BA4XvZMH.js";import"./opInput-DoSnS3dP.js";import"./logo2-l66aD4rS.js";import"./syncSleep-DvzJnWfR.js";/* empty css                                                                */import"./menu-B85Lp49n.js";const d={__name:"index",setup(d){const v=n(),_=a([]),g=a([]),w=a([]),c=a([]),j=a({template_filter:"nomal",template_level:"nomal",points:1}),y=a(!1),f=a(v.query.template_id?Number(v.query.template_id):null),x=a({canvasData:{name:v.query.file_name||"",width:2048,height:2048}}),h=a({groups:{},layers:{},elements:{}});s((()=>v.query.template_id),((e,t)=>{f.value=e,y.value=!1,m((()=>{y.value=!0}))}));const L=()=>{window.loading||(window.loading=p()),Promise.all([new Promise((t=>{e("colors").then((e=>{w.value=e.data,t()}))})),new Promise((t=>{e("texts").then((e=>{c.value=e.data,t()}))})),new Promise((t=>{e("prompts").then((e=>{_.value=e.data,t()}))})),new Promise((t=>{e("statics").then((e=>{g.value=e.data,t()}))})),new Promise((e=>{x.value.canvasData.name?t(f.value,"layouts",x.value.canvasData.name).then((t=>{x.value=Object.assign(x.value,t.data.viewData),h.value=t.data.layerData,j.value=t.info,e()})):e()}))]).then((()=>{window.loading&&(window.loading.close(),window.loading=null),setTimeout((()=>{y.value=!0}),500)}))};return o((()=>{L()})),(e,t)=>y.value?(r(),i(u,{key:0,colorsList:w.value,textsList:c.value,editorType:"edit",promptsList:_.value,staticsList:g.value,setting:x.value,layerData:h.value,templateId:f.value,info:j.value},null,8,["colorsList","textsList","promptsList","staticsList","setting","layerData","templateId","info"])):l("",!0)}};export{d as default};
