import{g as e}from"./promptSetting-EKnR7amV.js";import{g as a}from"./artwork-BUlK7Arq.js";import{r as t,I as s,o as l,D as i,H as o,E as n,k as r,M as m}from"./lib-CGZrokFx.js";import{T as u}from"./TLoading-Ug_yrpoX.js";import{m as p}from"./index-Dj6kMEF4.js";import"./index-CDiIgHew.js";/* empty css                                                                 */import"./_plugin-vue_export-helper-BCo6x5W8.js";import"./index-B5xss9ro.js";import"./file-C3RgH22k.js";import"./opInput-DhObQQPA.js";import"./menu-B85Lp49n.js";const d={__name:"index",setup(d){const v=n(),g=t([]),w=t([]),_=t([]),c=t([]),j=t({template_filter:"nomal",template_level:"nomal",points:1}),y=t(!1),f=t(v.query.template_id?Number(v.query.template_id):null),h=t({canvasData:{name:v.query.file_name||"",width:2048,height:2048}}),x=t({groups:{},layers:{},elements:{}});s((()=>v.query.template_id),((e,a)=>{f.value=e,y.value=!1,m((()=>{y.value=!0}))}));const L=()=>{window.loading||(window.loading=u()),Promise.all([new Promise((a=>{e("colors").then((e=>{_.value=e.data,a()}))})),new Promise((a=>{e("texts").then((e=>{c.value=e.data,a()}))})),new Promise((a=>{e("prompts").then((e=>{g.value=e.data,a()}))})),new Promise((a=>{e("statics").then((e=>{w.value=e.data,a()}))})),new Promise((e=>{h.value.canvasData.name?a(f.value,"layouts",h.value.canvasData.name).then((a=>{h.value=Object.assign(h.value,a.data.viewData),x.value=a.data.layerData,j.value=a.info,e()})):e()}))]).then((()=>{window.loading&&(window.loading.close(),window.loading=null),setTimeout((()=>{y.value=!0}),500)}))};return l((()=>{L()})),(e,a)=>y.value?(r(),i(p,{key:0,colorsList:_.value,textsList:c.value,editorType:"generate",promptsList:g.value,staticsList:w.value,setting:h.value,layerData:x.value,templateId:f.value,info:j.value},null,8,["colorsList","textsList","promptsList","staticsList","setting","layerData","templateId","info"])):o("",!0)}};export{d as default};
