import{T as e}from"./TLoading-DwqXYK7E.js";import{O as t,L as s,r as a,o as l,m as o,n,I as i,F as r,A as d,p as c,w as p,v as u,E as m,j as _,k as y,C as b,B as v,y as g,u as w,D as f}from"./lib-COXcuUSy.js";import{g as h,d as k}from"./promptSetting-BXFCiAce.js";import{m as S}from"./modelCard-CSvj7zen.js";import{t as x}from"./index-D2jkVZeO.js";import"./index-CQfQ98fb.js";/* empty css                                                                */import{_ as j}from"./_plugin-vue_export-helper-BCo6x5W8.js";/* empty css                                                                 */const T={class:"main-body"},C={class:"filter-area"},I={class:"filter-type"},D=["onClick"],z={class:"other-filter"},q={class:"module-list"},E=j({__name:"index",props:{class:{},componentType:{type:String,default:"router"},type:{type:String,default:null}},emits:["setData"],setup(j,{emit:E}){const G=t(),H=s(),L=j,A=E,B=u(),F=a({}),N=m(),O=L.type||N.query.type,P=[{name:{prompts:"动态资源",statics:"静态资源",texts:"文字资源",colors:"调色板资源",designs:"设计理念"}[O],code:0}],J=a(0),K=[{label:"测试类型",key:"marina bay sands",disabled:!0},{label:"测试类型",key:"brown's hotel, london"},{label:"测试类型",key:"atlantis nahamas, nassau"},{label:"测试类型",key:"the beverly hills hotel, los angeles"}],M=()=>{h(O).then((e=>{F.value=e.data}))},Q=({resource_id:t,resource_name:s,preview:a})=>{"router"===L.componentType?(window.loading=e(),B.push({path:"/basic/resourceInfo",query:{type:O,id:t}})):A("setData",{resource_id:t,resource_name:s,preview:a})};return l((()=>{window.loading||"router"!==L.componentType||(window.loading=e()),M(),setTimeout((()=>{window.loading&&(window.loading.close(),window.loading=null)}),300)})),(e,t)=>{const s=_("n-input"),a=_("n-button"),l=_("n-dropdown"),u=_("n-scrollbar");return y(),o("div",T,[n("div",C,[n("div",I,[n("div",{class:"filter-type-bg",style:i({left:2.6*J.value+"rem"})},null,4),(y(),o(r,null,d(P,(e=>n("div",{class:b(["filter-type-item",{selected:J.value===e.code}]),key:e.code,onClick:t=>J.value=e.code},v(e.name),11,D))),64)),n("div",{class:"filter-type-item",onClick:t[0]||(t[0]=e=>Q({}))}," 添加资料 ")]),n("div",z,[c(s,{class:"search-input"},{prefix:p((()=>t[1]||(t[1]=[n("i",{class:"search-icon bi bi-search"},null,-1)]))),_:1}),c(l,{placement:"bottom-start",trigger:"click",size:"small",options:K,onSelect:e.handleSelect},{default:p((()=>[c(a,{class:"dropdown-btn",tertiary:""},{default:p((()=>[t[2]||(t[2]=g(" 面料筛选 ")),n("i",{class:b(["dropdown-btn-icon bi",w(x)])},null,2)])),_:1})])),_:1},8,["onSelect"]),c(l,{placement:"bottom-start",trigger:"click",size:"small",options:K,onSelect:e.handleSelect},{default:p((()=>[c(a,{class:"dropdown-btn",tertiary:""},{default:p((()=>[t[3]||(t[3]=g(" 风格筛选 ")),n("i",{class:b(["dropdown-btn-icon bi",w(x)])},null,2)])),_:1})])),_:1},8,["onSelect"]),c(l,{placement:"bottom-start",trigger:"click",size:"small",options:K,onSelect:e.handleSelect},{default:p((()=>[c(a,{class:"dropdown-btn",tertiary:""},{default:p((()=>[t[4]||(t[4]=g(" 元素筛选 ")),n("i",{class:b(["dropdown-btn-icon bi",w(x)])},null,2)])),_:1})])),_:1},8,["onSelect"])])]),n("div",q,[c(u,null,{default:p((()=>[(y(!0),o(r,null,d(F.value,(e=>(y(),f(S,{class:b(L.class),key:e.resource_id,"preview-disabled":"",data:{name:e.resource_name,preview:e.preview},onDeleteItem:()=>{(({name:e,resource_id:t})=>{G.warning({title:"警告",content:"删除操作不可逆，请确认是否继续",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{k({resource_id:t,resource_type:O,resource_name:e}).then((e=>{200===e.code&&(M(),H.success("删除成功"))}))},onNegativeClick:()=>{H.info("取消删除")}})})({name:e.resource_name,resource_id:e.resource_id})},"need-go-handle":"",needEdit:!1,onGoHandle:()=>{Q(e)}},null,8,["class","data","onDeleteItem","onGoHandle"])))),128))])),_:1})])])}}},[["__scopeId","data-v-ecddc573"]]);export{E as default};
