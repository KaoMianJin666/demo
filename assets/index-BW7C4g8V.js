import{_ as e}from"./_plugin-vue_export-helper-BCo6x5W8.js";import{x as a,k as t,m as l,B as n,n as s,E as i,u as o,r as d,o as u,y as r,p as c,w as p,v,Q as g,j as b,R as y,S as m}from"./lib-B5SO1xxf.js";import{a as w,x as k}from"./index-D4R9gxHy.js";import{T as _}from"./TLoading-DznhV-9E.js";import{g as h}from"./dataWarehouse-b-RO2dQR.js";import"./index-CHyfbQKH.js";const f=["type"],x=e({__name:"tableTag",props:{type:{type:String,default:"doing"}},setup(e){const s=a(e,"type"),i={done:"完成",doing:"进行中"};return(e,a)=>(t(),l("div",{class:"table-tag-body",type:s.value},n(i[s.value]),9,f))}},[["__scopeId","data-v-833c1768"]]),j={class:"table-btns"},T={class:"table-btn"},C={class:"table-btn"},E=e({__name:"tableBtn",emits:["toEdit","toDel"],setup(e,{emit:a}){const n=a;return(e,a)=>(t(),l("div",j,[s("div",T,[s("i",{class:i(["bi",o(w)]),onClick:a[0]||(a[0]=e=>n("toEdit"))},null,2)]),s("div",C,[s("i",{class:i(["bi",o(k)]),onClick:a[1]||(a[1]=e=>n("toDel"))},null,2)])]))}},[["__scopeId","data-v-1c71de1e"]]),I={class:"data-warehouse-body"},D={class:"data-warehouse-sub-title"},U={class:"table-area"},V=e({__name:"index",setup(e){const a=v(),i=d([]),o=(e=null)=>{window.loading=_(),a.push({path:"/basic/dataWarehouseEditor",query:{id:e}})},w=y({props:{value:[String,Number],onUpdateValue:[Function,Array]},setup(e){const a=d(!1),t=d(null),l=d(e.value);function n(){a.value=!0,nextTick((()=>{t.value.focus()}))}function s(){e.onUpdateValue(l.value),a.value=!1}return()=>g("div",{style:"min-height: 22px",onClick:n},a.value?g(m,{ref:t,value:l.value,onUpdateValue:e=>{l.value=e},onChange:s,onBlur:s}):e.value)}}),k=e=>e.id,f=()=>[{type:"selection"},{title:"ID",key:"id"},{title:"名称",key:"名称",render(e){const a=(t=e.key,i.value.findIndex((e=>e.key===t)));var t;return g(w,{value:e["名称"],onUpdateValue(e){i.value[a]["名称"]=e}})}},{title:"采纳次数",key:"采纳次数"},{title:"数据状态",key:"数据状态",render:e=>g(x,{type:"完成"===e["数据状态"]?"done":"doing"})},{title:"数据归属人",key:"数据归属人"},{title:"创建时间",key:"创建时间"},{title:"完成时间",key:"完成时间"},{title:"操作",key:"title",align:"right",render:e=>g(E,{onToEdit(){o(e.id)},onToDel(){e.id,window.loading=_()}})}],j=d([]);return u((()=>{window.loading||(window.loading=_()),h({page:1,page_size:100}).then((e=>{200===e.code&&(i.value=e.data)})),setTimeout((()=>{window.loading&&(window.loading.close(),window.loading=null)}),300),j.value=f()})),(e,a)=>{const d=b("n-button"),u=b("n-data-table");return t(),l("div",I,[a[2]||(a[2]=s("div",{class:"data-warehouse-title"},"数据仓库",-1)),s("div",D,[r(n(i.value.length)+"条总共数据 ",1),c(d,{class:"add-btn",onClick:a[0]||(a[0]=e=>o())},{default:p((()=>a[1]||(a[1]=[r("新建数据")]))),_:1})]),s("div",U,[c(u,{class:"table-item",columns:j.value,data:i.value,pagination:!0,bordered:!1,"row-key":k},null,8,["columns","data"])])])}}},[["__scopeId","data-v-61cf7b27"]]);export{V as default};
