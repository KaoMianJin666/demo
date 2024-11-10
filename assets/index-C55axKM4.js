import{_ as e}from"./_plugin-vue_export-helper-BCo6x5W8.js";import{r as a,x as t,j as l,k as s,m as n,y as o,B as i,n as d,F as u,A as r,C as c,H as v,D as p,w as y,u as g,L as m,v as _,p as b,O as h,o as w,R as f,S as k,U as x}from"./lib-CGZrokFx.js";import{a as T,x as C}from"./index-DBr3Z3sO.js";import{T as D}from"./TLoading-CzYcMMi0.js";import{g as j,d as E,u as S}from"./dataWarehouse-BrCDMWao.js";import"./index-D2CTju66.js";/* empty css                                                                 */const V=["type"],I={class:"select-item"},L=["type"],U=e({__name:"tableTag",props:{type:{type:String,default:"doing"},needSelected:{type:Boolean,default:!1},selectList:{type:Array,default:()=>[]}},emits:["changeVal"],setup(e,{emit:g}){const m=a(null),_=e,b=g,h=a(!0),w=a(!1),f=t(_,"type"),k={done:"完成",doing:"进行中",design:"需求设计",revision:"设计微调"},x=()=>{w.value=!1,b("changeVal")};return(a,t)=>{const g=l("n-popover");return s(),n(u,null,[e.needSelected?v("",!0):(s(),n("div",{key:0,class:"table-tag-body",type:f.value},[o(i(k[f.value])+" ",1),d("div",{class:c(["table-tag-select",{show:h.value}])},[(s(!0),n(u,null,r(e.selectList,((e,a)=>(s(),n("div",I,i(e),1)))),256))],2)],8,V)),e.needSelected?(s(),p(g,{key:1,trigger:"hover","show-arrow":!1,class:"selected",placement:"bottom",style:{"--n-color":"transparent","--n-divider-color":"transparent","--n-box-shadow":"none"}},{trigger:y((()=>[d("div",{class:"table-tag-body",type:f.value},i(m.value||k[f.value]),9,L)])),default:y((()=>[(s(!0),n(u,null,r(e.selectList,(e=>(s(),n("div",{class:"select-item",key:e.value,onClick:x},i(e.label),1)))),128))])),_:1})):v("",!0)],64)}}},[["__scopeId","data-v-c224c5ad"]]),B={class:"table-btns"},F={class:"table-btn"},A={class:"table-btn"},H=e({__name:"tableBtn",emits:["toEdit","toDel"],setup(e,{emit:a}){const t=a;return(e,a)=>(s(),n("div",B,[d("div",F,[d("i",{class:c(["bi",g(T)]),onClick:a[0]||(a[0]=e=>t("toEdit"))},null,2)]),d("div",A,[d("i",{class:c(["bi",g(C)]),onClick:a[1]||(a[1]=e=>t("toDel"))},null,2)])]))}},[["__scopeId","data-v-1c71de1e"]]),P={class:"ware-house-area"},W=["onClick"],q={class:"footer"},z=e({__name:"wareHouseType",setup(e,{expose:t}){const v=m(),g=_(),h=a(!1),w=a(null),f=a(["需求设计","设计微调"]),k=()=>{if(!w.value)return v.error("请选择数据类型后操作"),!1;((e,a=null)=>{window.loading=D(),g.push({path:"/basic/dataWarehouseEditor",query:{id:a,type:e}})})(w.value),h.value=!1};return t({init:()=>{h.value=!0}}),(e,a)=>{const t=l("n-button"),v=l("n-card"),g=l("n-modal");return s(),p(g,{show:h.value,"onUpdate:show":a[1]||(a[1]=e=>h.value=e),"auto-focus":!1},{default:y((()=>[b(v,{title:"请选择数据类型",bordered:!1,size:"huge",style:{width:"15rem"},role:"dialog","aria-modal":"true"},{"header-extra":y((()=>a[2]||(a[2]=[]))),footer:y((()=>[d("div",q,[b(t,{onClick:a[0]||(a[0]=e=>k())},{default:y((()=>a[4]||(a[4]=[o("确认")]))),_:1})])])),default:y((()=>[d("div",P,[(s(!0),n(u,null,r(f.value,((e,t)=>(s(),n("div",{class:"ware-house-item",onClick:a=>w.value=e,key:t},[d("div",{class:c(["selected-mark",{show:e===w.value}])},a[3]||(a[3]=[d("i",{class:"bi bi-check"},null,-1)]),2),o(" "+i(e),1)],8,W)))),128))])])),_:1})])),_:1},8,["show"])}}},[["__scopeId","data-v-cd3dae81"]]),M={class:"data-warehouse-body"},N={class:"data-warehouse-sub-title"},R={class:"table-area"},Y=e({__name:"index",setup(e){const t=m(),u=h(),r=_(),c=a([]),v=a(null),p=k({props:{value:[String,Number],onUpdateValue:[Function,Array]},setup(e){const t=a(!1),l=a(null),s=a(e.value);function n(){t.value=!0,nextTick((()=>{l.value.focus()}))}function o(){e.onUpdateValue(s.value),t.value=!1}return()=>f("div",{style:"min-height: 22px",onClick:n},t.value?f(x,{ref:l,value:s.value,onUpdateValue:e=>{s.value=e},onBlur:o}):e.value)}}),g=e=>e.id,T=e=>{S(e).then((e=>{200===e.code&&(t.success("更新成功"),I())}))},C=()=>[{type:"selection"},{title:"ID",key:"id"},{title:"名称",key:"名称",render(e){const a=(t=e.key,c.value.findIndex((e=>e.key===t)));var t;return f(p,{value:e["名称"],onUpdateValue(t){c.value[a]["名称"]=t;const l=new FormData;l.append("file","EMPTY"),T({data_name:e["名称"],data_id:e.id,data_status:e["数据状态"],data_type:e["数据类型"],formData:l})}})}},{title:"数据类型",key:"数据类型",align:"center",render:e=>f(U,{type:"需求设计"===e["数据类型"]?"design":"revision"})},{title:"数据状态",key:"数据状态",render:e=>f(U,{type:"完成"===e["数据状态"]?"done":"doing",needSelected:!0,selectList:[{label:"完成"===e["数据状态"]?"进行中":"完成",value:"完成"===e["数据状态"]?"进行中":"完成"}],onChangeVal(){const a=new FormData;a.append("file","EMPTY"),T({data_name:e["名称"],data_status:"完成"===e["数据状态"]?"进行中":"完成",data_type:e["数据类型"],data_id:e.id,formData:a})}})},{title:"数据归属人",key:"数据归属人"},{title:"创建时间",key:"创建时间"},{title:"完成时间",key:"完成时间"},{title:"操作",key:"title",align:"right",render:e=>f(H,{onToEdit(){((e,a=null)=>{window.loading=D(),r.push({path:"/basic/dataWarehouseEditor",query:{id:a,type:e}})})(e["数据类型"],e.id)},onToDel(){var a;a=e.id,u.warning({title:"警告",content:"此操作不可逆，请确认是否继续",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{const e=D();E({data_id:a}).then((a=>{200===a.code&&(I(),e.close(),t.success("删除成功"))}))},onNegativeClick:()=>{t.error("取消删除")}})}})}],V=a([]),I=()=>{j({page:1,page_size:100}).then((e=>{200===e.code&&(c.value=e.data)}))};return w((()=>{window.loading||(window.loading=D()),I(),setTimeout((()=>{window.loading&&(window.loading.close(),window.loading=null)}),300),V.value=C()})),(e,a)=>{const t=l("n-button"),u=l("n-data-table");return s(),n("div",M,[a[2]||(a[2]=d("div",{class:"data-warehouse-title"},"数据仓库",-1)),d("div",N,[o(i(c.value.length)+"条总共数据 ",1),b(t,{class:"add-btn",onClick:a[0]||(a[0]=e=>{v.value.init()})},{default:y((()=>a[1]||(a[1]=[o("新建数据")]))),_:1})]),d("div",R,[b(u,{class:"table-item",columns:V.value,data:c.value,pagination:!0,bordered:!1,"row-key":g},null,8,["columns","data"])]),b(z,{ref_key:"wareHouseTypeRef",ref:v},null,512)])}}},[["__scopeId","data-v-c27c8bef"]]);export{Y as default};
