import{T as e}from"./TLoading-Bo8MZJbY.js";import{L as a,O as t,r as l,o as s,m as o,n,I as i,F as d,A as r,p as c,w as m,u as p,v as u,j as _,k as b,C as g,B as v,P as w,y as f,D as y}from"./lib-DgJLZFQ9.js";import{g as h,d as k}from"./promptSetting-4OozVV9L.js";import{m as j}from"./modelCard-D4EKRiWy.js";import{t as x}from"./index-D2jkVZeO.js";/* empty css                                                                */import{_ as S}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./index-5_a7-nCK.js";/* empty css                                                                 */const T={class:"main-body"},C={class:"filter-area"},I={class:"filter-type"},z=["onClick"],D={class:"other-filter"},q={class:"module-list"},G="layouts",H=S({__name:"index",props:["class"],setup(S){const H=a(),L=t(),P=S,U=u(),A=l({}),B=[{name:"公共模板",code:0},{name:"私有模板",code:1}],F=l(0),M=[{label:"测试类型",key:"marina bay sands",disabled:!0},{label:"测试类型",key:"brown's hotel, london"},{label:"测试类型",key:"atlantis nahamas, nassau"},{label:"测试类型",key:"the beverly hills hotel, los angeles"}],N=()=>{h(G).then((e=>{A.value=e.data}))};return s((()=>{N(),window.loading||(window.loading=e()),setTimeout((()=>{window.loading&&(window.loading.close(),window.loading=null)}),300)})),(a,t)=>{const l=_("n-button"),s=_("n-dropdown"),u=_("n-scrollbar");return b(),o("div",T,[n("div",C,[n("div",I,[n("div",{class:"filter-type-bg",style:i({left:2.6*F.value+"rem"})},null,4),(b(),o(d,null,r(B,(e=>n("div",{class:g(["filter-type-item",{selected:F.value===e.code}]),key:e.code,onClick:a=>F.value=e.code},v(e.name),11,z))),64))]),n("div",D,[c(p(w),{class:"search-input"},{prefix:m((()=>t[0]||(t[0]=[n("i",{class:"search-icon bi bi-search"},null,-1)]))),_:1}),c(s,{placement:"bottom-start",trigger:"click",size:"small",options:M,onSelect:a.handleSelect},{default:m((()=>[c(l,{class:"dropdown-btn",tertiary:""},{default:m((()=>[t[1]||(t[1]=f(" 面料筛选 ")),n("i",{class:g(["dropdown-btn-icon bi",p(x)])},null,2)])),_:1})])),_:1},8,["onSelect"]),c(s,{placement:"bottom-start",trigger:"click",size:"small",options:M,onSelect:a.handleSelect},{default:m((()=>[c(l,{class:"dropdown-btn",tertiary:""},{default:m((()=>[t[2]||(t[2]=f(" 风格筛选 ")),n("i",{class:g(["dropdown-btn-icon bi",p(x)])},null,2)])),_:1})])),_:1},8,["onSelect"]),c(s,{placement:"bottom-start",trigger:"click",size:"small",options:M,onSelect:a.handleSelect},{default:m((()=>[c(l,{class:"dropdown-btn",tertiary:""},{default:m((()=>[t[3]||(t[3]=f(" 元素筛选 ")),n("i",{class:g(["dropdown-btn-icon bi",p(x)])},null,2)])),_:1})])),_:1},8,["onSelect"])])]),n("div",q,[c(u,null,{default:m((()=>[(b(!0),o(d,null,r(A.value,(a=>(b(),y(j,{class:g(P.class),key:a.template_id,data:{name:a.resource_name,preview:a.preview},onToUpdate:()=>{(({resource_name:a,resource_id:t})=>{window.loading=e(),setTimeout((()=>{U.push({path:"updateModel",query:{file_name:a,template_id:t}})}),300)})(a)},onDeleteItem:()=>{(({template_id:a,name:t})=>{L.warning({title:"警告",content:"此操作不可逆，请确认是否继续",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{const l=e();k({resource_id:a,resource_name:t,resource_type:G}).then((e=>{200===e.code&&(N(),l.close(),H.success("删除成功"))}))},onNegativeClick:()=>{H.error("取消删除")}})})({name:a.resource_name,template_id:a.resource_id})},"need-go-handle":"",onGoHandle:()=>{(({resource_name:a,resource_id:t})=>{window.loading=e(),setTimeout((()=>{U.push({path:"generateImage",query:{file_name:a,template_id:t}})}),300)})(a)}},null,8,["class","data","onToUpdate","onDeleteItem","onGoHandle"])))),128))])),_:1})])])}}},[["__scopeId","data-v-7af9131f"]]);export{H as default};
