import{T as e}from"./TLoading-D7lSMfZy.js";import{P as t,L as s,r as a,o,m as l,n,F as i,A as r,p as d,w as c,v as p,E as u,j as m,k as _,C as y,B as b,y as v,u as g,D as w}from"./lib-CKDAqxUM.js";import{g as f,d as h}from"./promptSetting-CV1Y-PMO.js";import{m as k}from"./modelCard-Bs-azm76.js";import{t as S}from"./index-ozdrtwfE.js";import"./index-Dsftc_SU.js";/* empty css                                                                */import{_ as x}from"./_plugin-vue_export-helper-BCo6x5W8.js";/* empty css                                                                 */const j={class:"main-body"},T={class:"filter-area"},C={class:"filter-type"},D=["onClick"],I={class:"other-filter"},z={class:"module-list"},q=x({__name:"index",props:{class:{},componentType:{type:String,default:"router"},type:{type:String,default:null}},emits:["setData"],setup(x,{emit:q}){const E=t(),G=s(),H=x,L=q,P=p(),A=a({}),B=u(),F=H.type||B.query.type,N=[{name:{prompts:"动态资源",statics:"静态资源",texts:"文字资源",colors:"调色板资源",designs:"设计理念"}[F],code:0}],J=a(0),K=[{label:"测试类型",key:"marina bay sands",disabled:!0},{label:"测试类型",key:"brown's hotel, london"},{label:"测试类型",key:"atlantis nahamas, nassau"},{label:"测试类型",key:"the beverly hills hotel, los angeles"}],M=()=>{f(F).then((e=>{A.value=e.data}))},O=({resource_id:t,resource_name:s,preview:a})=>{"router"===H.componentType?(window.loading=e(),P.push({path:"/basic/resourceInfo",query:{type:F,id:t}})):L("setData",{resource_id:t,resource_name:s,preview:a})};return o((()=>{window.loading||"router"!==H.componentType||(window.loading=e()),M(),setTimeout((()=>{window.loading&&(window.loading.close(),window.loading=null)}),300)})),(e,t)=>{const s=m("n-input"),a=m("n-button"),o=m("n-dropdown"),p=m("n-scrollbar");return _(),l("div",j,[n("div",T,[n("div",C,[(_(),l(i,null,r(N,(e=>n("div",{class:y(["filter-type-item",{selected:J.value===e.code}]),key:e.code,onClick:t=>J.value=e.code},b(e.name),11,D))),64)),n("div",{class:"filter-type-item",onClick:t[0]||(t[0]=e=>O({}))}," 添加资料 ")]),n("div",I,[d(s,{class:"search-input"},{prefix:c((()=>t[1]||(t[1]=[n("i",{class:"search-icon bi bi-search"},null,-1)]))),_:1}),d(o,{placement:"bottom-start",trigger:"click",size:"small",options:K,onSelect:e.handleSelect},{default:c((()=>[d(a,{class:"dropdown-btn",tertiary:""},{default:c((()=>[t[2]||(t[2]=v(" 面料筛选 ")),n("i",{class:y(["dropdown-btn-icon bi",g(S)])},null,2)])),_:1})])),_:1},8,["onSelect"]),d(o,{placement:"bottom-start",trigger:"click",size:"small",options:K,onSelect:e.handleSelect},{default:c((()=>[d(a,{class:"dropdown-btn",tertiary:""},{default:c((()=>[t[3]||(t[3]=v(" 风格筛选 ")),n("i",{class:y(["dropdown-btn-icon bi",g(S)])},null,2)])),_:1})])),_:1},8,["onSelect"]),d(o,{placement:"bottom-start",trigger:"click",size:"small",options:K,onSelect:e.handleSelect},{default:c((()=>[d(a,{class:"dropdown-btn",tertiary:""},{default:c((()=>[t[4]||(t[4]=v(" 元素筛选 ")),n("i",{class:y(["dropdown-btn-icon bi",g(S)])},null,2)])),_:1})])),_:1},8,["onSelect"])])]),n("div",z,[d(p,null,{default:c((()=>[(_(!0),l(i,null,r(A.value,(e=>(_(),w(k,{class:y(H.class),key:e.resource_id,"preview-disabled":"",data:{name:e.resource_name,preview:e.preview},onDeleteItem:()=>{(({name:e,resource_id:t})=>{E.warning({title:"警告",content:"删除操作不可逆，请确认是否继续",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{h({resource_id:t,resource_type:F,resource_name:e}).then((e=>{200===e.code&&(M(),G.success("删除成功"))}))},onNegativeClick:()=>{G.info("取消删除")}})})({name:e.resource_name,resource_id:e.resource_id})},"need-go-handle":"",needEdit:!1,onGoHandle:()=>{O(e)}},null,8,["class","data","onDeleteItem","onGoHandle"])))),128))])),_:1})])])}}},[["__scopeId","data-v-a82be9ce"]]);export{q as default};
