import{T as e,g as a,a as t}from"./index.c33e3f2d.js";import{r as s,o as n,f as l,b as i,y as o,D as r,e as u}from"./lib.ecb25fce.js";const m={__name:"index",setup(m){const c=o(),v=s([]),d=s([]),p=s(!1),w=s({canvasData:{name:c.query.file_name||"",width:2048,height:2048}}),g=s({groups:{},layers:{},elements:{}}),y=()=>{window.loading||(window.loading=e()),Promise.all([new Promise((e=>{a("prompts").then((a=>{const t=a?a.templates:{};v.value=Object.keys(t),e()}))})),new Promise((e=>{a("statics").then((a=>{const t=a?a.templates:{};d.value=Object.keys(t),e()}))})),new Promise((e=>{w.value.canvasData.name?t("layouts",w.value.canvasData.name).then((a=>{w.value=Object.assign(w.value,a.viewData),g.value=a.layerData,e()})):e()}))]).then((()=>{p.value=!0,window.loading.close(),window.loading=null}))};return n((()=>{y()})),(e,a)=>{const t=r("modelEditor");return p.value?(u(),l(t,{key:0,editorType:"generate",layerData:g.value,promptsList:v.value,staticsList:d.value,setting:w.value},null,8,["layerData","promptsList","staticsList","setting"])):i("",!0)}}};export{m as default};
