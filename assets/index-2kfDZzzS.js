import{T as e}from"./TLoading-DyGXBBbu.js";import{O as a,L as t,r as o,o as l,m as n,n as s,u as r,p as i,w as d,v as p,j as m,k as c,y as u,C as w,F as _,A as v,D as b}from"./lib-CGZrokFx.js";import{a as k,d as g}from"./artwork-CAjKB9Sk.js";import{m as f}from"./modelCard-CWKcvF-V.js";import{o as y}from"./opInput-DcbctHn7.js";import{l as h}from"./logo2-l66aD4rS.js";import{t as T}from"./index-DBr3Z3sO.js";import{_ as j}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./index-u6fwpvqV.js";/* empty css                                                                 */const S={class:"main-body"},x={class:"search-input"},D={class:"search-input-box"},I={class:"logo-area"},C=["src"],z={class:"search-input-area"},E={class:"filter-area"},q={class:"other-filter"},G={class:"module-list"},H=j({__name:"index",props:{class:{},componentType:{type:String,default:"router"}},emits:["setData"],setup(j,{emit:H}){const L=a(),O=t(),U=p(),W=j,A=H,F=o({}),N=[{label:"测试类型",key:"marina bay sands",disabled:!0},{label:"测试类型",key:"brown's hotel, london"},{label:"测试类型",key:"atlantis nahamas, nassau"},{label:"测试类型",key:"the beverly hills hotel, los angeles"}],P=()=>{k().then((e=>{F.value=e.data}))};return l((()=>{P(),window.loading||(window.loading=e()),setTimeout((()=>{window.loading&&(window.loading.close(),window.loading=null)}),300)})),(a,t)=>{const o=m("n-button"),l=m("n-dropdown"),p=m("n-scrollbar");return c(),n("div",S,[s("div",x,[s("div",D,[s("div",I,[s("img",{src:r(h)},null,8,C),t[0]||(t[0]=s("label",null,"Oplus",-1))]),s("div",z,[i(y,{needTools:!1})])])]),s("div",E,[t[4]||(t[4]=s("div",{class:"filter-type"},null,-1)),s("div",q,[i(l,{placement:"bottom-start",trigger:"click",size:"small",options:N,onSelect:a.handleSelect},{default:d((()=>[i(o,{class:"dropdown-btn",tertiary:""},{default:d((()=>[t[1]||(t[1]=u(" 面料筛选 ")),s("i",{class:w(["dropdown-btn-icon bi",r(T)])},null,2)])),_:1})])),_:1},8,["onSelect"]),i(l,{placement:"bottom-start",trigger:"click",size:"small",options:N,onSelect:a.handleSelect},{default:d((()=>[i(o,{class:"dropdown-btn",tertiary:""},{default:d((()=>[t[2]||(t[2]=u(" 风格筛选 ")),s("i",{class:w(["dropdown-btn-icon bi",r(T)])},null,2)])),_:1})])),_:1},8,["onSelect"]),i(l,{placement:"bottom-start",trigger:"click",size:"small",options:N,onSelect:a.handleSelect},{default:d((()=>[i(o,{class:"dropdown-btn",tertiary:""},{default:d((()=>[t[3]||(t[3]=u(" 元素筛选 ")),s("i",{class:w(["dropdown-btn-icon bi",r(T)])},null,2)])),_:1})])),_:1},8,["onSelect"])])]),s("div",G,[i(p,null,{default:d((()=>[(c(!0),n(_,null,v(F.value,(a=>(c(),b(f,{class:w(W.class),key:a.template_id,"preview-disabled":"router"!==j.componentType,data:{name:a.artwork_name,preview:a.preview},onToUpdate:()=>{(({artwork_name:a,artwork_id:t})=>{window.loading=e(),setTimeout((()=>{U.push({path:"artWorkEditor",query:{file_name:a,template_id:t}})}),300)})(a)},onDeleteItem:()=>{(({name:e,template_id:a,artwork_level:t})=>{L.warning({title:"警告",content:"删除操作不可逆，请确认是否继续",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{g({artwork_id:a,artwork_level:t,artwork_name:e}).then((e=>{200===e.code&&(P(),O.success("删除成功"))}))},onNegativeClick:()=>{O.info("取消删除")}})})({name:a.artwork_name,template_id:a.artwork_id,artwork_level:a.artwork_level})},"need-go-handle":"router"===j.componentType,needEdit:"router"===j.componentType,onGoHandle:()=>{(({artwork_name:a,artwork_id:t,preview:o})=>{"router"===W.componentType?(window.loading=e(),setTimeout((()=>{U.push({path:"artWorkInfo",query:{file_name:a,template_id:t}})}),300)):A("setData",{artwork_id:t,artwork_name:a,preview:o})})(a)}},null,8,["class","preview-disabled","data","onToUpdate","onDeleteItem","need-go-handle","needEdit","onGoHandle"])))),128))])),_:1})])])}}},[["__scopeId","data-v-b157cb41"]]);export{H as default};
