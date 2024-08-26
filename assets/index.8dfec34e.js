import{_ as e,p as a,s as l,g as t,a as n,d as s,b as i,r as u,T as d}from"./index.8e9db14e.js";import{r as o,B as v,e as c,c as m,g as r,h as p,j as _,w as f,f as g,O as h,u as b,Y as y,Z as w,b as k,i as x,a as V,n as U,_ as D,$ as I,a0 as C,a1 as O,F as S,A as T,q as L,M as j,a2 as M,s as A,t as N,o as $,z as H}from"./lib.79771c61.js";const B={class:"setting-list-item"},E=["contenteditable",".innerHTML"];var F=e({__name:"settingItem",props:{name:{type:String,default:""},itemList:{type:Boolean,default:!1},needRemove:{type:Boolean,default:!1},col:{type:Number,default:0},needEdit:{type:Boolean,default:!1}},emits:["deleteItem"],setup(e,{emit:a}){const l=o(!1),t=a,n=e,s=e=>{e===Number(n.needEdit)&&(l.value=!l.value)},i=({target:e})=>{t("setName",e.innerHTML)};return(a,u)=>{const d=v("el-icon");return c(),m("div",B,[r("div",{class:"setting-item-title",onClick:u[2]||(u[2]=x((e=>s(0)),["stop"]))},[r("div",{class:p(["setting-handle-icon",{selected:l.value}]),onClick:u[0]||(u[0]=e=>s(1))},[_(d,null,{default:f((()=>[(c(),g(h(b(y))))])),_:1})],2),r("div",{class:"setting-name",contenteditable:n.needEdit,".innerHTML":e.name,onBlur:i},null,40,E),n.needRemove?(c(),m("div",{key:0,class:"settgin-remove-handle",onClick:u[1]||(u[1]=e=>t("deleteItem"))},[_(d,null,{default:f((()=>[_(b(w))])),_:1})])):k("",!0)]),r("div",{class:"setting-item-data-list",style:U({height:l.value?1.2*n.col+"rem":"0rem"})},[V(a.$slots,"default",{},void 0,!0)],4)])}}},[["__scopeId","data-v-71cf0196"]]);const J=e=>(A("data-v-28f92343"),e=e(),N(),e),R={class:"add-or-update"},z={class:"add-or-update-box"},q={class:"title"},Y=J((()=>r("div",{class:"title-label"},"参数选择:",-1))),Z=["contenteditable",".innerHTML"],G={class:"folder"},K={class:"setting-list folder-list"},P={class:"setting-item-data"},Q=J((()=>r("div",{class:"setting-item-data-name"},"文件夹",-1))),W={class:"setting-item-data-value"},X={class:"setting-item-data"},ee=J((()=>r("div",{class:"setting-item-data-name"},"透明度",-1))),ae={class:"setting-item-data-value"},le={class:"setting-handle"},te={class:"setting-item-data-value"},ne={class:"setting-list params-list"},se={class:"setting-item-data"},ie=J((()=>r("div",{class:"setting-item-data-name"},"value",-1))),ue={class:"setting-item-data-value"},de={class:"setting-item-data"},oe=J((()=>r("div",{class:"setting-item-data-name"},"预览图地址",-1))),ve={class:"setting-item-data-value"},ce={class:"setting-item-data"},me=J((()=>r("div",{class:"setting-item-data-name"},"value",-1))),re={class:"setting-item-data-value"};var pe=e({__name:"staticsSettingAddOrUpdate",emits:["review"],setup(e,{expose:t,emit:n}){const s=o("maskDom"),i=o(!1),u=o("add"),d=n,y=o(!1),w=o(null),x=o(!1),V=o(!1),A=o(!1);o(new Set([])),o(new Set([]));const N=o(null),$=o(""),H=o(""),B=o(!0),E=[{name:"横向二方连续",key:"tile_x"},{name:"纵向二方连续",key:"tile_y"},{name:"四方连续",key:"tile_xy"}],J=o([]),pe=({target:e})=>{w.value=e.innerHTML},_e=()=>{y.value=!y.value,y.value?$.value=$.value:$.value=w.value},fe=()=>{s.value.hide(),setTimeout((()=>{i.value=!1}),200)};return t({init:(e="add",a={})=>{if(i.value)return;i.value=!0,x.value=!1,V.value=!1,A.value=!1,$.value=a.name||"",H.value=a.preview||"",a.extra_params?(B.value=a.extra_params.remove_bg.value,N.value=a.extra_params.tile.value):(B.value=!0,N.value=null);const l=a.folders||[],t=[];l.forEach((e=>{const a={uuid:j(),folder:e.folder,fusion_params:e.fusion_params};t.push(a)})),J.value=t,u.value=e,M((()=>{s.value.show()}))}}),(e,t)=>{const n=v("el-icon"),o=v("el-input"),w=v("el-scrollbar"),x=v("el-option"),V=v("el-select"),M=v("t-mask");return c(),m("div",R,[i.value?(c(),g(M,{key:0,ref_key:"maskDom",ref:s},{default:f((()=>[r("div",z,[r("div",q,[Y,r("div",{class:"title-name",contenteditable:y.value,".innerHTML":$.value,onBlur:pe},null,40,Z),r("div",{class:"title-handle-area",style:U({width:("add"===u.value?1.7:.8)+"rem"})},["add"===u.value?(c(),m("div",{key:0,class:"title-handle-btn",onClick:_e},[_(n,null,{default:f((()=>[(c(),g(h(y.value?b(I):b(D))))])),_:1})])):k("",!0),r("div",{class:"title-handle-btn",onClick:t[0]||(t[0]=e=>(()=>{const e={folders:[],extra_params:{preview:H.value,remove_bg:{value:B.value},tile:{value:N.value}}};J.value.forEach((a=>{const l={folder:a.folder,fusion_params:a.fusion_params};e.folders.push(l)}));const a=JSON.stringify(e),t=new Blob([a],{type:"application/json"}),n=N.value?`${$.value.replaceAll("_tile_xy","").replaceAll("_tile_x","").replaceAll("_tile_y","")}_${N.value}.json`:`${$.value.replaceAll("_tile_xy","").replaceAll("_tile_x","").replaceAll("_tile_y","")}.json`,s=new File([t],n,{type:"application/json",lastModified:Date.now()}),i=new FormData;i.append("file",s),l(i,"statics",$.value,H.value).then((e=>{fe(),d("review")}))})())},[_(n,null,{default:f((()=>[_(b(C))])),_:1})])],4),r("div",{class:"close-btn",onClick:fe},[_(n,null,{default:f((()=>[_(b(O))])),_:1})])]),r("div",G,[r("div",K,[_(w,null,{default:f((()=>[(c(!0),m(S,null,T(J.value,(e=>(c(),g(F,{key:e.uuid,name:"文件夹",col:2,"need-remove":"",onSetName:a=>{e.folder=a},onDeleteItem:()=>{(e=>{const a=J.value.findIndex((a=>a.uuid===e));J.value.splice(a,1)})(e.uuid)}},{default:f((()=>[r("div",P,[Q,r("div",W,[_(o,{modelValue:e.folder,"onUpdate:modelValue":a=>e.folder=a},null,8,["modelValue","onUpdate:modelValue"])])]),r("div",X,[ee,r("div",ae,[_(o,{modelValue:e.fusion_params.transparency,"onUpdate:modelValue":a=>e.fusion_params.transparency=a},null,8,["modelValue","onUpdate:modelValue"])])])])),_:2},1032,["onSetName","onDeleteItem"])))),128)),r("div",le,[r("div",te,[r("div",{class:"folder-input",onClick:t[1]||(t[1]=e=>(()=>{const e=j();J.value.push({uuid:e,folder:"",fusion_params:{transparency:.2}})})())},[r("i",{class:p(["bi",b(a)])},null,2),L(" 添加 ")])])])])),_:1})]),r("div",ne,[_(w,null,{default:f((()=>[_(F,{name:"连续方式",col:1},{default:f((()=>[r("div",se,[ie,r("div",ue,[_(V,{modelValue:N.value,"onUpdate:modelValue":t[2]||(t[2]=e=>N.value=e),clearable:""},{default:f((()=>[(c(),m(S,null,T(E,(e=>_(x,{label:e.name,value:e.key,key:e.key},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])])])),_:1}),_(F,{name:"预览图",col:1},{default:f((()=>[r("div",de,[oe,r("div",ve,[_(o,{modelValue:H.value,"onUpdate:modelValue":t[3]||(t[3]=e=>H.value=e)},null,8,["modelValue"])])])])),_:1}),_(F,{name:"是否需要背景",col:1},{default:f((()=>[r("div",ce,[me,r("div",re,[_(V,{modelValue:B.value,"onUpdate:modelValue":t[4]||(t[4]=e=>B.value=e)},{default:f((()=>[_(x,{value:!0,label:"是"}),_(x,{value:!1,label:"否"})])),_:1},8,["modelValue"])])])])),_:1})])),_:1})])])])])),_:1},512)):k("",!0)])}}},[["__scopeId","data-v-28f92343"]]);const _e={class:"statics-setting"},fe={class:"statics-setting-info"};var ge=e({__name:"staticsSetting",props:["class"],setup(e,{expose:a}){const l=o({}),i=o("addOrUpdateDom"),u=e,d=()=>{t("statics").then((e=>{l.value=e.templates}))},h=(...e)=>{i.value.init(...e)};return $((()=>{d()})),a({addOrUpdate:h}),(e,a)=>{const t=v("modelCard"),o=v("el-scrollbar");return c(),m("div",_e,[_(o,null,{default:f((()=>[r("div",fe,[(c(!0),m(S,null,T(Object.keys(l.value),(e=>(c(),g(t,{class:p(u.class),key:e,data:{name:e,preview:l.value[e].preview},onToUpdate:()=>{(({name:e,preview:a})=>{n("statics",e).then((l=>{h("update",Object.assign({name:e,preview:a},l))}))})({name:e,preview:l.value[e].preview})},onDeleteItem:()=>{(({name:e})=>{s("statics",e).then((e=>{d()}))})({name:e})}},null,8,["class","data","onToUpdate","onDeleteItem"])))),128))])])),_:1}),_(pe,{ref_key:"addOrUpdateDom",ref:i,onReview:d},null,512)])}}},[["__scopeId","data-v-75df05b8"]]);const he=e=>(A("data-v-609eeca8"),e=e(),N(),e),be={class:"add-or-update"},ye={class:"add-or-update-box"},we={class:"title"},ke=he((()=>r("div",{class:"title-label"},"参数选择:",-1))),xe=["contenteditable",".innerHTML"],Ve={class:"content"},Ue={class:"setting-list prompts-list"},De={class:"setting-item-data-name"},Ie={class:"setting-item-data-value"},Ce={class:"setting-item-data"},Oe=["onClick"],Se=he((()=>r("div",{class:"setting-item-data-value"},null,-1))),Te={class:"setting-handle"},Le={class:"setting-item-data-value"},je={class:"setting-list params-list"},Me={class:"setting-item-data"},Ae=he((()=>r("div",{class:"setting-item-data-name"},"value",-1))),Ne={class:"setting-item-data-value"},$e={class:"setting-item-data"},He=he((()=>r("div",{class:"setting-item-data-name"},"权重",-1))),Be={class:"setting-item-data-value"},Ee={class:"setting-item-data"},Fe=he((()=>r("div",{class:"setting-item-data-name"},"预览图地址",-1))),Je={class:"setting-item-data-value"},Re={class:"setting-item-data"},ze=he((()=>r("div",{class:"setting-item-data-name"},"value",-1))),qe={class:"setting-item-data-value"},Ye={class:"setting-item-data"},Ze=he((()=>r("div",{class:"setting-item-data-name"},"风格参考",-1))),Ge={class:"setting-item-data-value"},Ke={class:"setting-item-data"},Pe=he((()=>r("div",{class:"setting-item-data-name"},"结构参考",-1))),Qe={class:"setting-item-data-value"},We={class:"setting-item-data"},Xe=he((()=>r("div",{class:"setting-item-data-name"},"value",-1))),ea={class:"setting-item-data-value"};var aa=e({__name:"promptSettingAddOrUpdate",emits:["review"],setup(e,{expose:t,emit:n}){const s=o("maskDom"),i=o(!1),u=o("add"),d=n,y=o(!1),w=o(null),x=o(!1),V=o(!1),A=o(!1);o(new Set([])),o(new Set([]));const N=o(""),$=o({lora:"",weight:100}),B=o(!0),E=o(""),J=o({ref_style:!0,ref_struct:!0,value:""});o({probability:20,value:""}),o({probability:20,value:""});const R=o([]),z=({target:e})=>{w.value=e.innerHTML},q=()=>{y.value=!y.value,y.value?N.value=N.value:N.value=w.value},Y=()=>{s.value.hide(),setTimeout((()=>{i.value=!1}),200)};return t({init:(e="add",a={})=>{if(i.value)return;i.value=!0,x.value=!1,V.value=!1,A.value=!1,N.value=a.name||"",E.value=a.preview||"",a.extra_params?(a.extra_params.lora.weight*=100,$.value=a.extra_params.lora,J.value=a.extra_params.reference,B.value=a.extra_params.remove_bg.value):($.value={lora:"",weight:100},J.value={ref_style:!0,ref_struct:!0,value:""},B.value=!0);const l=a.contents||[],t=[];l.forEach((e=>{const a={uuid:j(),content:e.content,maxLength:0,elements:[]},l=[0,0];Object.keys(e).forEach((t=>{t.includes("elements")&&(l.push(Number(t.replaceAll("elements_",""))),a.elements.push({name:t,values:e[t]}))})),a.maxLength=Math.max(...l),t.push(a)})),R.value=t,u.value=e,M((()=>{s.value.show()}))}}),(e,t)=>{const n=v("el-icon"),o=v("el-select"),w=v("el-scrollbar"),x=v("el-input"),V=v("el-input-number"),M=v("el-option"),A=v("t-mask");return c(),m("div",be,[i.value?(c(),g(A,{key:0,ref_key:"maskDom",ref:s},{default:f((()=>[r("div",ye,[r("div",we,[ke,r("div",{class:"title-name",contenteditable:y.value,".innerHTML":N.value,onBlur:z},null,40,xe),r("div",{class:"title-handle-area",style:U({width:("add"===u.value?1.7:.8)+"rem"})},["add"===u.value?(c(),m("div",{key:0,class:"title-handle-btn",onClick:q},[_(n,null,{default:f((()=>[(c(),g(h(y.value?b(I):b(D))))])),_:1})])):k("",!0),r("div",{class:"title-handle-btn",onClick:t[0]||(t[0]=e=>(()=>{const e=JSON.parse(JSON.stringify($.value));e.weitgh/=100;const a={contents:[],extra_params:{lora:{value:e.lora||null,weitgh:e.weitgh},reference:J.value,remove_bg:{value:B.value}}};R.value.forEach((e=>{const l={content:e.content};e.elements.forEach((e=>{l[e.name]=e.values})),a.contents.push(l)}));const t=JSON.stringify(a),n=new Blob([t],{type:"application/json"}),s=new File([n],`${N.value}.json`,{type:"application/json",lastModified:Date.now()}),i=new FormData;i.append("file",s),l(i,"prompts",N.value,E.value).then((e=>{Y(),d("review")}))})())},[_(n,null,{default:f((()=>[_(b(C))])),_:1})])],4),r("div",{class:"close-btn",onClick:Y},[_(n,null,{default:f((()=>[_(b(O))])),_:1})])]),r("div",Ve,[r("div",Ue,[_(w,null,{default:f((()=>[(c(!0),m(S,null,T(R.value,(e=>(c(),g(F,{key:e.uuid,name:e.content,col:e.elements.length+1,"need-remove":"","need-edit":"",onSetName:a=>{e.content=a},onDeleteItem:()=>{(e=>{const a=R.value.findIndex((a=>a.uuid===e));R.value.splice(a,1)})(e.uuid)}},{default:f((()=>[(c(!0),m(S,null,T(e.elements,(a=>(c(),m("div",{class:"setting-item-data",key:a.name},[r("div",De,[L(H(a.name.replace("elements_","参数"))+" ",1),_(n,{onClick:l=>((e,a)=>{const l=R.value.findIndex((a=>a.uuid===e)),t=R.value[l].elements.findIndex((e=>e.name===a));R.value[l].content=R.value[l].content.replaceAll(`{${a}}`,""),R.value[l].elements.splice(t,1)})(e.uuid,a.name),class:"handle-btn"},{default:f((()=>[_(b(O))])),_:2},1032,["onClick"])]),r("div",Ie,[_(o,{"reserve-keyword":!1,"default-first-option":"","allow-create":"",modelValue:a.values,"onUpdate:modelValue":e=>a.values=e,multiple:"",filterable:""},null,8,["modelValue","onUpdate:modelValue"])])])))),128)),r("div",Ce,[r("div",{class:"setting-item-data-name pointer",onClick:a=>((e,a)=>{const l=R.value.findIndex((a=>a.uuid===e));R.value[l].maxLength+=1,R.value[l].content+=`{elements_${R.value[l].maxLength}}`,R.value[l].elements.push({name:`elements_${R.value[l].maxLength}`,values:[]})})(e.uuid)},"添加",8,Oe),Se])])),_:2},1032,["name","col","onSetName","onDeleteItem"])))),128)),r("div",Te,[r("div",Le,[r("div",{class:"content-input",onClick:t[1]||(t[1]=e=>(()=>{const e=j();R.value.push({uuid:e,content:"",maxLength:0,elements:[]})})())},[r("i",{class:p(["bi",b(a)])},null,2),L(" 添加 ")])])])])),_:1})]),r("div",je,[_(w,null,{default:f((()=>[_(F,{name:"lora",col:2},{default:f((()=>[r("div",Me,[Ae,r("div",Ne,[_(x,{modelValue:$.value.lora,"onUpdate:modelValue":t[2]||(t[2]=e=>$.value.lora=e)},null,8,["modelValue"])])]),r("div",$e,[He,r("div",Be,[_(V,{controls:!1,min:0,max:100,modelValue:$.value.weight,"onUpdate:modelValue":t[3]||(t[3]=e=>$.value.weight=e)},null,8,["modelValue"]),L(" % ")])])])),_:1}),_(F,{name:"预览图",col:1},{default:f((()=>[r("div",Ee,[Fe,r("div",Je,[_(x,{modelValue:E.value,"onUpdate:modelValue":t[4]||(t[4]=e=>E.value=e)},null,8,["modelValue"])])])])),_:1}),_(F,{name:"是否需要背景",col:1},{default:f((()=>[r("div",Re,[ze,r("div",qe,[_(o,{modelValue:B.value,"onUpdate:modelValue":t[5]||(t[5]=e=>B.value=e)},{default:f((()=>[_(M,{value:!0,label:"是"}),_(M,{value:!1,label:"否"})])),_:1},8,["modelValue"])])])])),_:1}),_(F,{name:"参考图",col:3},{default:f((()=>[r("div",Ye,[Ze,r("div",Ge,[_(o,{modelValue:J.value.ref_style,"onUpdate:modelValue":t[6]||(t[6]=e=>J.value.ref_style=e)},{default:f((()=>[_(M,{value:!0,label:"是"}),_(M,{value:!1,label:"否"})])),_:1},8,["modelValue"])])]),r("div",Ke,[Pe,r("div",Qe,[_(o,{modelValue:J.value.ref_struct,"onUpdate:modelValue":t[7]||(t[7]=e=>J.value.ref_struct=e)},{default:f((()=>[_(M,{value:!0,label:"是"}),_(M,{value:!1,label:"否"})])),_:1},8,["modelValue"])])]),r("div",We,[Xe,r("div",ea,[_(x,{modelValue:J.value.value,"onUpdate:modelValue":t[8]||(t[8]=e=>J.value.value=e)},null,8,["modelValue"])])])])),_:1})])),_:1})])])])])),_:1},512)):k("",!0)])}}},[["__scopeId","data-v-609eeca8"]]);const la={class:"prompt-setting"},ta={class:"prompt-setting-info"};var na=e({__name:"promptSetting",props:["class"],setup(e,{expose:a}){const l=o({}),i=o("addOrUpdateDom"),u=e,d=()=>{t("prompts").then((e=>{l.value=e.templates}))},h=(...e)=>{i.value.init(...e)};return $((()=>{d()})),a({addOrUpdate:h}),(e,a)=>{const t=v("modelCard"),o=v("el-scrollbar");return c(),m("div",la,[_(o,null,{default:f((()=>[r("div",ta,[(c(!0),m(S,null,T(Object.keys(l.value),(e=>(c(),g(t,{class:p(u.class),key:e,data:{name:e,preview:l.value[e].preview},onToUpdate:()=>{(({name:e,preview:a})=>{n("prompts",e).then((l=>{h("update",Object.assign({name:e,preview:a},l))}))})({name:e,preview:l.value[e].preview})},onDeleteItem:()=>{(({name:e})=>{s("prompts",e).then((e=>{d()}))})({name:e})}},null,8,["class","data","onToUpdate","onDeleteItem"])))),128))])])),_:1}),_(aa,{ref_key:"addOrUpdateDom",ref:i,onReview:d},null,512)])}}},[["__scopeId","data-v-66182dc4"]]);const sa=e=>(A("data-v-34ee64e7"),e=e(),N(),e),ia={class:"add-or-update"},ua={class:"add-or-update-box"},da={class:"title"},oa=sa((()=>r("div",{class:"title-label"},"参数选择:",-1))),va=["contenteditable",".innerHTML"],ca={class:"folder"},ma={class:"setting-list folder-list"},ra={class:"setting-item-data-name"},pa={class:"setting-item-data-value"},_a={class:"setting-item-data"},fa=sa((()=>r("div",{class:"setting-item-data-value"},null,-1))),ga={class:"setting-list params-list"},ha={class:"setting-item-data"},ba=sa((()=>r("div",{class:"setting-item-data-name"},"value",-1))),ya={class:"setting-item-data-value"},wa={class:"setting-item-data"},ka=sa((()=>r("div",{class:"setting-item-data-name"},"value",-1))),xa={class:"setting-item-data-value"};var Va=e({__name:"backgroundSettingAddOrUpdate",emits:["review"],setup(e,{expose:t,emit:n}){const s=o("maskDom"),d=o(!1),y=o("add"),w=n,x=o(!1),V=o(null),A=o(!1),N=o(!1),$=o(!1);o(new Set([])),o(new Set([]));const H=o(""),B=o([]),E=o(0),J=({target:e})=>{V.value=e.innerHTML},R=o(null),z=[{name:"横向二方连续",key:"tile_x"},{name:"纵向二方连续",key:"tile_y"},{name:"四方连续",key:"tile_xy"}],q=()=>{x.value=!x.value,x.value?H.value=H.value:H.value=V.value},Y=()=>{s.value.hide(),setTimeout((()=>{d.value=!1}),200)};return t({init:(e="add",a={})=>{d.value||(d.value=!0,A.value=!1,N.value=!1,$.value=!1,H.value=a.name||"",a.colors?B.value=a.colors.map((e=>({uuid:j(),value:i(e)}))):B.value=[],a.extra_params?(E.value=a.extra_params.variation,R.value=a.extra_params.tile):(E.value=0,R.value=null),y.value=e,M((()=>{s.value.show()})))}}),(e,t)=>{const n=v("el-icon"),i=v("el-color-picker"),o=v("el-scrollbar"),V=v("el-option"),M=v("el-select"),A=v("el-input-number"),N=v("t-mask");return c(),m("div",ia,[d.value?(c(),g(N,{key:0,ref_key:"maskDom",ref:s},{default:f((()=>[r("div",ua,[r("div",da,[oa,r("div",{class:"title-name",contenteditable:x.value,".innerHTML":H.value,onBlur:J},null,40,va),r("div",{class:"title-handle-area",style:U({width:("add"===y.value?1.7:.8)+"rem"})},["add"===y.value?(c(),m("div",{key:0,class:"title-handle-btn",onClick:q},[_(n,null,{default:f((()=>[(c(),g(h(x.value?b(I):b(D))))])),_:1})])):k("",!0),r("div",{class:"title-handle-btn",onClick:t[0]||(t[0]=e=>(()=>{const e={colors:B.value.map((e=>u(e.value))),extra_params:{variation:E.value,tile:R.value}},a=JSON.stringify(e),t=new Blob([a],{type:"application/json"}),n=R.value?`${H.value.replaceAll("_tile_xy","").replaceAll("_tile_x","").replaceAll("_tile_y","")}_${R.value}.json`:`${H.value.replaceAll("_tile_xy","").replaceAll("_tile_x","").replaceAll("_tile_y","")}.json`,s=new File([t],n,{type:"application/json",lastModified:Date.now()}),i=new FormData;i.append("file",s),l(i,"colors",H.value,"").then((e=>{Y(),w("review")}))})())},[_(n,null,{default:f((()=>[_(b(C))])),_:1})])],4),r("div",{class:"close-btn",onClick:Y},[_(n,null,{default:f((()=>[_(b(O))])),_:1})])]),r("div",ca,[r("div",ma,[_(o,null,{default:f((()=>[_(F,{name:"颜色",col:B.value.length+1,onSetName:t[2]||(t[2]=a=>{e.n.folder=a}),onDeleteItem:t[3]||(t[3]=()=>{e.deleteFolder(e.n.uuid)})},{default:f((()=>[(c(!0),m(S,null,T(B.value,(e=>(c(),m("div",{class:"setting-item-data",key:e.uuid},[r("div",ra,[L(" 颜色 "),_(n,{onClick:a=>(e=>{const a=B.value.findIndex((a=>a.uuid===e));B.value.splice(a,1)})(e.uuid),class:"handle-btn"},{default:f((()=>[_(b(O))])),_:2},1032,["onClick"])]),r("div",pa,[_(i,{"color-format":"rgba","show-alpha":"",style:{width:"100%"},modelValue:e.value,"onUpdate:modelValue":a=>e.value=a},null,8,["modelValue","onUpdate:modelValue"])])])))),128)),r("div",_a,[r("div",{class:"setting-item-data-name pointer",onClick:t[1]||(t[1]=e=>(()=>{const e=j();B.value.push({uuid:e,value:"rgba(0,0,0,1)"})})())},[r("i",{class:p(["bi",b(a)])},null,2),L(" 添加 ")]),fa])])),_:1},8,["col"])])),_:1})]),r("div",ga,[_(o,null,{default:f((()=>[_(F,{name:"连续方式",col:1},{default:f((()=>[r("div",ha,[ba,r("div",ya,[_(M,{modelValue:R.value,"onUpdate:modelValue":t[4]||(t[4]=e=>R.value=e),clearable:""},{default:f((()=>[(c(),m(S,null,T(z,(e=>_(V,{label:e.name,value:e.key,key:e.key},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])])])),_:1}),_(F,{name:"变化",col:1},{default:f((()=>[r("div",wa,[ka,r("div",xa,[_(A,{modelValue:E.value,"onUpdate:modelValue":t[5]||(t[5]=e=>E.value=e),controls:!1},null,8,["modelValue"])])])])),_:1})])),_:1})])])])])),_:1},512)):k("",!0)])}}},[["__scopeId","data-v-34ee64e7"]]);const Ua={class:"statics-setting"},Da={class:"statics-setting-info"};var Ia=e({__name:"backgroundSetting",props:["class"],setup(e,{expose:a}){const l=o({}),i=o("addOrUpdateDom"),u=e,d=()=>{t("colors").then((e=>{l.value=e.templates}))},h=(...e)=>{i.value.init(...e)};return $((()=>{d()})),a({addOrUpdate:h}),(e,a)=>{const t=v("modelCard"),o=v("el-scrollbar");return c(),m("div",Ua,[_(o,null,{default:f((()=>[r("div",Da,[(c(!0),m(S,null,T(Object.keys(l.value),(e=>(c(),g(t,{class:p(u.class),key:e,data:{name:e,preview:l.value[e].preview},onToUpdate:()=>{(({name:e,preview:a})=>{n("colors",e).then((l=>{h("update",Object.assign({name:e,preview:a},l))}))})({name:e,preview:l.value[e].preview})},onDeleteItem:()=>{(({name:e})=>{s("colors",e).then((e=>{d()}))})({name:e})}},null,8,["class","data","onToUpdate","onDeleteItem"])))),128))])])),_:1}),_(Va,{ref_key:"addOrUpdateDom",ref:i,onReview:d},null,512)])}}},[["__scopeId","data-v-26564696"]]);const Ca=e=>(A("data-v-48090d36"),e=e(),N(),e),Oa={class:"add-or-update"},Sa={class:"add-or-update-box"},Ta={class:"title"},La=Ca((()=>r("div",{class:"title-label"},"参数选择:",-1))),ja=["contenteditable",".innerHTML"],Ma={class:"content"},Aa={class:"setting-list prompts-list"},Na={class:"setting-item-data-name"},$a={class:"setting-item-data-value"},Ha={class:"setting-item-data"},Ba=["onClick"],Ea=Ca((()=>r("div",{class:"setting-item-data-value"},null,-1))),Fa={class:"setting-handle"},Ja={class:"setting-item-data-value"},Ra={class:"setting-list params-list"},za={class:"setting-item-data"},qa=Ca((()=>r("div",{class:"setting-item-data-name"},"value",-1))),Ya={class:"setting-item-data-value"},Za={class:"setting-item-data"},Ga=Ca((()=>r("div",{class:"setting-item-data-name"},"value",-1))),Ka={class:"setting-item-data-value"},Pa={class:"setting-item-data"},Qa=Ca((()=>r("div",{class:"setting-item-data-name"},"value",-1))),Wa={class:"setting-item-data-value"};var Xa=e({__name:"textSettingAddOrUpdate",emits:["review"],setup(e,{expose:t,emit:n}){const s=o("maskDom"),d=o(!1),y=o("add"),w=n,x=o(!1),V=o(null),A=o(!1),N=o(!1),$=o(!1);o(new Set([])),o(new Set([]));const B=o(""),E=o(""),J=o(""),R=o("rgba(0,0,0,1)"),z=o([]),q=({target:e})=>{V.value=e.innerHTML},Y=()=>{x.value=!x.value,x.value?B.value=B.value:B.value=V.value},Z=()=>{s.value.hide(),setTimeout((()=>{d.value=!1}),200)};return t({init:(e="add",a={})=>{if(d.value)return;d.value=!0,A.value=!1,N.value=!1,$.value=!1,B.value=a.name||"",a.extra_params?(E.value=a.extra_params.font,J.value=a.extra_params.font_size,R.value=i(a.extra_params.font_color)):(E.value="",J.value="",R.value="rgba(0,0,0,1)");const l=a.contents||[],t=[];l.forEach((e=>{const a={uuid:j(),content:e.content,maxLength:0,elements:[]},l=[0,0];Object.keys(e).forEach((t=>{t.includes("elements")&&(l.push(Number(t.replaceAll("elements_",""))),a.elements.push({name:t,values:e[t]}))})),a.maxLength=Math.max(...l),t.push(a)})),z.value=t,y.value=e,M((()=>{s.value.show()}))}}),(e,t)=>{const n=v("el-icon"),i=v("el-select"),o=v("el-scrollbar"),V=v("el-input"),M=v("el-input-number"),A=v("el-color-picker"),N=v("t-mask");return c(),m("div",Oa,[d.value?(c(),g(N,{key:0,ref_key:"maskDom",ref:s},{default:f((()=>[r("div",Sa,[r("div",Ta,[La,r("div",{class:"title-name",contenteditable:x.value,".innerHTML":B.value,onBlur:q},null,40,ja),r("div",{class:"title-handle-area",style:U({width:("add"===y.value?1.7:.8)+"rem"})},["add"===y.value?(c(),m("div",{key:0,class:"title-handle-btn",onClick:Y},[_(n,null,{default:f((()=>[(c(),g(h(x.value?b(I):b(D))))])),_:1})])):k("",!0),r("div",{class:"title-handle-btn",onClick:t[0]||(t[0]=e=>(()=>{const e={contents:[],extra_params:{font:E.value,font_size:J.value,font_color:u(R.value)}};z.value.forEach((a=>{const l={content:a.content};a.elements.forEach((e=>{l[e.name]=e.values})),e.contents.push(l)}));const a=JSON.stringify(e),t=new Blob([a],{type:"application/json"}),n=new File([t],`${B.value}.json`,{type:"application/json",lastModified:Date.now()}),s=new FormData;s.append("file",n),l(s,"texts",B.value,"").then((e=>{Z(),w("review")}))})())},[_(n,null,{default:f((()=>[_(b(C))])),_:1})])],4),r("div",{class:"close-btn",onClick:Z},[_(n,null,{default:f((()=>[_(b(O))])),_:1})])]),r("div",Ma,[r("div",Aa,[_(o,null,{default:f((()=>[(c(!0),m(S,null,T(z.value,(e=>(c(),g(F,{key:e.uuid,name:e.content,col:e.elements.length+1,"need-remove":"","need-edit":"",onSetName:a=>{e.content=a},onDeleteItem:()=>{(e=>{const a=z.value.findIndex((a=>a.uuid===e));z.value.splice(a,1)})(e.uuid)}},{default:f((()=>[(c(!0),m(S,null,T(e.elements,(a=>(c(),m("div",{class:"setting-item-data",key:a.name},[r("div",Na,[L(H(a.name.replace("elements_","参数"))+" ",1),_(n,{onClick:l=>((e,a)=>{const l=z.value.findIndex((a=>a.uuid===e)),t=z.value[l].elements.findIndex((e=>e.name===a));z.value[l].content=z.value[l].content.replaceAll(`{${a}}`,""),z.value[l].elements.splice(t,1)})(e.uuid,a.name),class:"handle-btn"},{default:f((()=>[_(b(O))])),_:2},1032,["onClick"])]),r("div",$a,[_(i,{"reserve-keyword":!1,"default-first-option":"","allow-create":"",modelValue:a.values,"onUpdate:modelValue":e=>a.values=e,multiple:"",filterable:""},null,8,["modelValue","onUpdate:modelValue"])])])))),128)),r("div",Ha,[r("div",{class:"setting-item-data-name pointer",onClick:a=>((e,a)=>{const l=z.value.findIndex((a=>a.uuid===e));z.value[l].maxLength+=1,z.value[l].content+=`{elements_${z.value[l].maxLength}}`,z.value[l].elements.push({name:`elements_${z.value[l].maxLength}`,values:[]})})(e.uuid)},[r("i",{class:p(["bi",b(a)])},null,2),L(" 添加 ")],8,Ba),Ea])])),_:2},1032,["name","col","onSetName","onDeleteItem"])))),128)),r("div",Fa,[r("div",Ja,[r("div",{class:"content-input",onClick:t[1]||(t[1]=e=>(()=>{const e=j();z.value.push({uuid:e,content:"",maxLength:0,elements:[]})})())},[r("i",{class:p(["bi",b(a)])},null,2),L(" 添加文本 ")])])])])),_:1})]),r("div",Ra,[_(o,null,{default:f((()=>[_(F,{name:"字体",col:1},{default:f((()=>[r("div",za,[qa,r("div",Ya,[_(V,{modelValue:E.value,"onUpdate:modelValue":t[2]||(t[2]=e=>E.value=e)},null,8,["modelValue"])])])])),_:1}),_(F,{name:"字号",col:1},{default:f((()=>[r("div",Za,[Ga,r("div",Ka,[_(M,{modelValue:J.value,"onUpdate:modelValue":t[3]||(t[3]=e=>J.value=e),controls:!1},null,8,["modelValue"])])])])),_:1}),_(F,{name:"颜色",col:1},{default:f((()=>[r("div",Pa,[Qa,r("div",Wa,[_(A,{"color-format":"rgba","show-alpha":"",style:{width:"100%"},modelValue:R.value,"onUpdate:modelValue":t[4]||(t[4]=e=>R.value=e)},null,8,["modelValue"])])])])),_:1})])),_:1})])])])])),_:1},512)):k("",!0)])}}},[["__scopeId","data-v-48090d36"]]);const el={class:"statics-setting"},al={class:"statics-setting-info"};var ll=e({__name:"textSetting",props:["class"],setup(e,{expose:a}){const l=o({}),i=o("addOrUpdateDom"),u=e,d=()=>{t("texts").then((e=>{l.value=e.templates}))},h=(...e)=>{i.value.init(...e)};return $((()=>{d()})),a({addOrUpdate:h}),(e,a)=>{const t=v("modelCard"),o=v("el-scrollbar");return c(),m("div",el,[_(o,null,{default:f((()=>[r("div",al,[(c(!0),m(S,null,T(Object.keys(l.value),(e=>(c(),g(t,{class:p(u.class),key:e,data:{name:e,preview:l.value[e].preview},onToUpdate:()=>{(({name:e,preview:a})=>{n("texts",e).then((l=>{h("update",Object.assign({name:e,preview:a},l))}))})({name:e,preview:l.value[e].preview})},onDeleteItem:()=>{(({name:e})=>{s("texts",e).then((e=>{d()}))})({name:e})}},null,8,["class","data","onToUpdate","onDeleteItem"])))),128))])])),_:1}),_(Xa,{ref_key:"addOrUpdateDom",ref:i,onReview:d},null,512)])}}},[["__scopeId","data-v-50e494de"]]);const tl={class:"prompt-setting-outer"},nl={class:"prompt-setting-handle-area"},sl={class:"change-setting-type-area"},il=["onClick"],ul={class:"prompt-setting-component-area"};var dl=e({__name:"index",props:["class"],setup(e){const a=e,l=[{name:"静态层配置",component:ge},{name:"动态层配置",component:na},{name:"纯色层配置",component:Ia},{name:"文本层配置",component:ll}],t=o(0),n=o("componentDom");return $((()=>{window.loading||(window.loading=d()),setTimeout((()=>{window.loading.close(),window.loading=null}),300)})),(e,s)=>{const i=v("t-button");return c(),m("div",tl,[r("div",nl,[r("div",sl,[r("div",{class:"component-selected",style:U({left:3.2*t.value+.05+"rem"})},null,4),(c(),m(S,null,T(l,((e,a)=>r("div",{class:"component-item",onClick:e=>t.value=a,key:e.name},H(e.name),9,il))),64))]),_(i,{style:{margin:"0",width:"2.5rem","text-align":"center"},type:"warn",onClick:s[0]||(s[0]=e=>{n.value.addOrUpdate()})},{default:f((()=>[L("新增")])),_:1})]),r("div",ul,[(c(),g(h(l[t.value].component),{class:p(a.class),ref_key:"componentDom",ref:n},null,8,["class"]))])])}}},[["__scopeId","data-v-2ea6960d"]]);export{dl as default};
