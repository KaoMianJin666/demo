import{g as e,a}from"./promptSetting-DLGAHKTX.js";import{r as t,J as s,o as i,D as l,H as o,E as n,k as r,M as m}from"./lib-CKDAqxUM.js";import{T as p}from"./TLoading-1V5YRPnT.js";import{m as u}from"./index-DSPbwlS6.js";import"./index-CKTHfneF.js";/* empty css                                                                 */import"./_plugin-vue_export-helper-BCo6x5W8.js";import"./index-ozdrtwfE.js";import"./file-BA4XvZMH.js";import"./opInput-219TxWsc.js";import"./logo2-l66aD4rS.js";import"./syncSleep-DvzJnWfR.js";/* empty css                                                                */import"./artwork-B1YzCu-z.js";import"./menu-B85Lp49n.js";const d={__name:"index",setup(d){const v=n(),_=t([]),w=t([]),c=t([]),g=t([]),j=t({template_filter:"nomal",template_level:"nomal",points:1}),y=t(!1),x=t(v.query.template_id?Number(v.query.template_id):null),f=t({canvasData:{name:v.query.file_name||"",width:2048,height:2048}}),h=t({groups:{},layers:{},elements:{}});s((()=>v.query.template_id),((e,a)=>{x.value=e,y.value=!1,m((()=>{y.value=!0}))}));const L=()=>{window.loading||(window.loading=p()),Promise.all([new Promise((a=>{e("colors").then((e=>{c.value=e.data,a()}))})),new Promise((a=>{e("texts").then((e=>{g.value=e.data,a()}))})),new Promise((a=>{e("prompts").then((e=>{_.value=e.data,a()}))})),new Promise((a=>{e("statics").then((e=>{w.value=e.data,a()}))})),new Promise((e=>{f.value.canvasData.name?a(x.value,"layouts",f.value.canvasData.name).then((a=>{f.value=Object.assign(f.value,a.data.viewData),h.value=a.data.layerData,j.value=a.info,e()})):e()}))]).then((()=>{window.loading&&(window.loading.close(),window.loading=null),setTimeout((()=>{y.value=!0}),500)}))};return i((()=>{L()})),(e,a)=>y.value?(r(),l(u,{key:0,colorsList:c.value,textsList:g.value,editorType:"edit",promptsList:_.value,staticsList:w.value,setting:f.value,layerData:h.value,templateId:x.value,info:j.value},null,8,["colorsList","textsList","promptsList","staticsList","setting","layerData","templateId","info"])):o("",!0)}};export{d as default};