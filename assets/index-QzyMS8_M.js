import{T as e}from"./TLoading-DznhV-9E.js";import{r as a,o as l,m as t,n as s,u as o,p as n,w as i,v as d,j as r,k as m,y as p,E as c,F as u,A as _,C as b}from"./lib-B5SO1xxf.js";import{g,d as w}from"./promptSetting-DbeuZ1nY.js";import{m as f}from"./modelCard-CWkzlVaj.js";import{o as h}from"./opInput-D-_AIMoI.js";import{l as v}from"./logo2-l66aD4rS.js";import{t as y}from"./index-D4R9gxHy.js";import{_ as j}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./index-CHyfbQKH.js";const S={class:"main-body"},k={class:"search-input"},T={class:"search-input-box"},x={class:"logo-area"},I=["src"],z={class:"search-input-area"},q={class:"filter-area"},C={class:"other-filter"},D={class:"module-list"},E=j({__name:"index",props:["class"],setup(j){const E=j,G=d(),H=a({}),U=[{label:"测试类型",key:"marina bay sands",disabled:!0},{label:"测试类型",key:"brown's hotel, london"},{label:"测试类型",key:"atlantis nahamas, nassau"},{label:"测试类型",key:"the beverly hills hotel, los angeles"}],A=()=>{g("layouts").then((e=>{H.value=e.data}))};return l((()=>{A(),window.loading||(window.loading=e()),setTimeout((()=>{window.loading&&(window.loading.close(),window.loading=null)}),300)})),(a,l)=>{const d=r("n-button"),g=r("n-dropdown"),j=r("n-scrollbar");return m(),t("div",S,[s("div",k,[s("div",T,[s("div",x,[s("img",{src:o(v)},null,8,I),l[0]||(l[0]=s("label",null,"Oplus",-1))]),s("div",z,[n(h,{needTools:!1})])])]),s("div",q,[l[4]||(l[4]=s("div",{class:"filter-type"},null,-1)),s("div",C,[n(g,{placement:"bottom-start",trigger:"click",size:"small",options:U,onSelect:a.handleSelect},{default:i((()=>[n(d,{class:"dropdown-btn",tertiary:""},{default:i((()=>[l[1]||(l[1]=p(" 面料筛选 ")),s("i",{class:c(["dropdown-btn-icon bi",o(y)])},null,2)])),_:1})])),_:1},8,["onSelect"]),n(g,{placement:"bottom-start",trigger:"click",size:"small",options:U,onSelect:a.handleSelect},{default:i((()=>[n(d,{class:"dropdown-btn",tertiary:""},{default:i((()=>[l[2]||(l[2]=p(" 风格筛选 ")),s("i",{class:c(["dropdown-btn-icon bi",o(y)])},null,2)])),_:1})])),_:1},8,["onSelect"]),n(g,{placement:"bottom-start",trigger:"click",size:"small",options:U,onSelect:a.handleSelect},{default:i((()=>[n(d,{class:"dropdown-btn",tertiary:""},{default:i((()=>[l[3]||(l[3]=p(" 元素筛选 ")),s("i",{class:c(["dropdown-btn-icon bi",o(y)])},null,2)])),_:1})])),_:1},8,["onSelect"])])]),s("div",D,[n(j,null,{default:i((()=>[(m(!0),t(u,null,_(H.value,(a=>(m(),b(f,{class:c(E.class),key:a.template_id,data:{name:a.template_name,preview:a.preview},onToUpdate:()=>{(({template_name:a,template_id:l})=>{window.loading=e(),setTimeout((()=>{G.push({path:"modelEditor",query:{file_name:a,template_id:l}})}),300)})(a)},onDeleteItem:()=>{(({name:e,template_id:a})=>{w(a).then((e=>{A()}))})({name:a.template_name,template_id:a.template_id})},"need-go-handle":"",onGoHandle:()=>{(({template_name:a,template_id:l})=>{window.loading=e(),setTimeout((()=>{G.push({path:"generateImage",query:{file_name:a,template_id:l}})}),300)})(a)}},null,8,["class","data","onToUpdate","onDeleteItem","onGoHandle"])))),128))])),_:1})])])}}},[["__scopeId","data-v-34540ef4"]]);export{E as default};
