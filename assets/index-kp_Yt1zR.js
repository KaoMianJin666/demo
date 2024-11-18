import{_ as e}from"./_plugin-vue_export-helper-BCo6x5W8.js";import{r as a,x as t,j as l,k as s,m as n,y as o,B as i,n as d,F as r,A as u,C as c,H as v,D as p,w as y,u as m,L as _,v as g,p as b,P as w,o as h,T as k,U as f,Q as x}from"./lib-CKDAqxUM.js";import{a as T,x as C}from"./index-ozdrtwfE.js";import{T as D}from"./TLoading-1V5YRPnT.js";import{g as j,d as E,u as V}from"./dataWarehouse-C-gpKlwU.js";import"./index-CKTHfneF.js";/* empty css                                                                 */const I=["type"],L={class:"select-item"},S=["type"],U=e({__name:"tableTag",props:{type:{type:String,default:"doing"},needSelected:{type:Boolean,default:!1},selectList:{type:Array,default:()=>[]}},emits:["changeVal"],setup(e,{emit:m}){const _=a(null),g=e,b=m,w=a(!0),h=a(!1),k=t(g,"type"),f={done:"完成",doing:"进行中",design:"需求设计",revision:"设计微调"},x=()=>{h.value=!1,b("changeVal")};return(a,t)=>{const m=l("n-popover");return s(),n(r,null,[e.needSelected?v("",!0):(s(),n("div",{key:0,class:"table-tag-body",type:k.value},[o(i(f[k.value])+" ",1),d("div",{class:c(["table-tag-select",{show:w.value}])},[(s(!0),n(r,null,u(e.selectList,((e,a)=>(s(),n("div",L,i(e),1)))),256))],2)],8,I)),e.needSelected?(s(),p(m,{key:1,trigger:"hover","show-arrow":!1,class:"selected",placement:"bottom",style:{"--n-color":"transparent","--n-divider-color":"transparent","--n-box-shadow":"none"}},{trigger:y((()=>[d("div",{class:"table-tag-body",type:k.value},i(_.value||f[k.value]),9,S)])),default:y((()=>[(s(!0),n(r,null,u(e.selectList,(e=>(s(),n("div",{class:"select-item",key:e.value,onClick:x},i(e.label),1)))),128))])),_:1})):v("",!0)],64)}}},[["__scopeId","data-v-c224c5ad"]]),B={class:"table-btns"},F={class:"table-btn"},P={class:"table-btn"},A=e({__name:"tableBtn",emits:["toEdit","toDel"],setup(e,{emit:a}){const t=a;return(e,a)=>(s(),n("div",B,[d("div",F,[d("i",{class:c(["bi",m(T)]),onClick:a[0]||(a[0]=e=>t("toEdit"))},null,2)]),d("div",P,[d("i",{class:c(["bi",m(C)]),onClick:a[1]||(a[1]=e=>t("toDel"))},null,2)])]))}},[["__scopeId","data-v-1c71de1e"]]),H={class:"ware-house-area"},W=["onClick"],q={class:"footer"},z=e({__name:"wareHouseType",setup(e,{expose:t}){const v=_(),m=g(),w=a(!1),h=a(null),k=a(["需求设计","设计微调"]),f=()=>{if(!h.value)return v.error("请选择数据类型后操作"),!1;((e,a=null)=>{window.loading=D(),m.push({path:"/basic/dataWarehouseEditor",query:{id:a,type:e}})})(h.value),w.value=!1};return t({init:()=>{w.value=!0}}),(e,a)=>{const t=l("n-button"),v=l("n-card"),m=l("n-modal");return s(),p(m,{show:w.value,"onUpdate:show":a[1]||(a[1]=e=>w.value=e),"auto-focus":!1},{default:y((()=>[b(v,{title:"请选择数据类型",bordered:!1,size:"huge",style:{width:"15rem"},role:"dialog","aria-modal":"true"},{"header-extra":y((()=>a[2]||(a[2]=[]))),footer:y((()=>[d("div",q,[b(t,{onClick:a[0]||(a[0]=e=>f())},{default:y((()=>a[4]||(a[4]=[o("确认")]))),_:1})])])),default:y((()=>[d("div",H,[(s(!0),n(r,null,u(k.value,((e,t)=>(s(),n("div",{class:"ware-house-item",onClick:a=>h.value=e,key:t},[d("div",{class:c(["selected-mark",{show:e===h.value}])},a[3]||(a[3]=[d("i",{class:"bi bi-check"},null,-1)]),2),o(" "+i(e),1)],8,W)))),128))])])),_:1})])),_:1},8,["show"])}}},[["__scopeId","data-v-cd3dae81"]]),M={class:"data-warehouse-body"},N={class:"data-warehouse-title"},Y={class:"table-area"},Q=e({__name:"index",setup(e){const t=_(),i=w(),r=g(),u=a([]),c=a(null),v=f({props:{value:[String,Number],onUpdateValue:[Function,Array]},setup(e){const t=a(!1),l=a(null),s=a(e.value);function n(){t.value=!0,nextTick((()=>{l.value.focus()}))}function o(){e.onUpdateValue(s.value),t.value=!1}return()=>k("div",{style:"min-height: 22px",onClick:n},t.value?k(x,{ref:l,value:s.value,onUpdateValue:e=>{s.value=e},onBlur:o}):e.value)}}),p=e=>e.id,m=e=>{V(e).then((e=>{200===e.code&&(t.success("更新成功"),I())}))},T=()=>[{type:"selection"},{title:"ID",key:"id"},{title:"名称",key:"名称",render(e){const a=(t=e.key,u.value.findIndex((e=>e.key===t)));var t;return k(v,{value:e["名称"],onUpdateValue(t){u.value[a]["名称"]=t;const l=new FormData;l.append("file","EMPTY"),m({data_name:e["名称"],data_id:e.id,data_status:e["数据状态"],data_type:e["数据类型"],formData:l})}})}},{title:"数据类型",key:"数据类型",align:"center",render:e=>k(U,{type:"需求设计"===e["数据类型"]?"design":"revision"})},{title:"数据状态",key:"数据状态",render:e=>k(U,{type:"完成"===e["数据状态"]?"done":"doing",needSelected:!0,selectList:[{label:"完成"===e["数据状态"]?"进行中":"完成",value:"完成"===e["数据状态"]?"进行中":"完成"}],onChangeVal(){const a=new FormData;a.append("file","EMPTY"),m({data_name:e["名称"],data_status:"完成"===e["数据状态"]?"进行中":"完成",data_type:e["数据类型"],data_id:e.id,formData:a})}})},{title:"数据归属人",key:"数据归属人"},{title:"创建时间",key:"创建时间"},{title:"完成时间",key:"完成时间"},{title:"操作",key:"title",align:"right",render:e=>k(A,{onToEdit(){((e,a=null)=>{window.loading=D(),r.push({path:"/basic/dataWarehouseEditor",query:{id:a,type:e}})})(e["数据类型"],e.id)},onToDel(){var a;a=e.id,i.warning({title:"警告",content:"此操作不可逆，请确认是否继续",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{E({data_id:a}).then((e=>{200===e.code&&(I(),t.success("删除成功"))}))},onNegativeClick:()=>{t.error("取消删除")}})}})}],C=a([]),I=()=>{j({page:1,page_size:100}).then((e=>{200===e.code&&(u.value=e.data)}))};return h((()=>{window.loading||(window.loading=D()),I(),setTimeout((()=>{window.loading&&(window.loading.close(),window.loading=null)}),300),C.value=T()})),(e,a)=>{const t=l("n-button"),i=l("n-data-table");return s(),n("div",M,[d("div",N,[a[2]||(a[2]=o(" 数据仓库 ")),b(t,{class:"add-btn",onClick:a[0]||(a[0]=e=>{c.value.init()})},{default:y((()=>a[1]||(a[1]=[o("新建数据")]))),_:1})]),d("div",Y,[b(i,{class:"table-item",columns:C.value,data:u.value,pagination:!0,bordered:!1,"row-key":p},null,8,["columns","data"])]),b(z,{ref_key:"wareHouseTypeRef",ref:c},null,512)])}}},[["__scopeId","data-v-08373207"]]);export{Q as default};