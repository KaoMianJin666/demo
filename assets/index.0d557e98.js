import{_ as e,p as a,s as l,u as t,g as n,a as s,d as i,b as d,r as u,T as o}from"./index.d46f0a74.js";import{r as v,a as m,o as c,c as r,b as p,n as _,e as g,w as f,s as h,O as b,y as w,Z as y,_ as k,k as x,h as V,g as U,i as D,$ as I,a0 as C,a1 as O,a2 as S,F as T,x as L,f as M,v as j,B as A,E as N,p as E,l as $,j as H,t as B}from"./lib.c3c0caa6.js";const F={class:"setting-list-item"},J=["contenteditable",".innerHTML"];var R=e({__name:"settingItem",props:{name:{type:String,default:""},itemList:{type:Boolean,default:!1},needRemove:{type:Boolean,default:!1},col:{type:Number,default:0},needEdit:{type:Boolean,default:!1}},emits:["deleteItem"],setup(e,{emit:a}){const l=v(!1),t=a,n=e,s=e=>{e===Number(n.needEdit)&&(l.value=!l.value)},i=e=>{e.preventDefault();var a=(e.clipboardData||window.clipboardData).getData("text");t("setName",a)},d=({target:e})=>{t("setName",e.innerHTML)};return(a,u)=>{const o=m("el-icon");return c(),r("div",F,[p("div",{class:"setting-item-title",onClick:u[2]||(u[2]=V((e=>s(0)),["stop"]))},[p("div",{class:_(["setting-handle-icon",{selected:l.value}]),onClick:u[0]||(u[0]=e=>s(1))},[g(o,null,{default:f((()=>[(c(),h(b(w(y))))])),_:1})],2),p("div",{class:"setting-name",contenteditable:n.needEdit,".innerHTML":e.name,onPaste:i,onBlur:d},null,40,J),n.needRemove?(c(),r("div",{key:0,class:"settgin-remove-handle",onClick:u[1]||(u[1]=e=>t("deleteItem"))},[g(o,null,{default:f((()=>[g(w(k))])),_:1})])):x("",!0)]),p("div",{class:"setting-item-data-list",style:D({height:l.value?1.2*n.col+"rem":"0rem"})},[U(a.$slots,"default",{},void 0,!0)],4)])}}},[["__scopeId","data-v-63894b6e"]]);const z=e=>(E("data-v-c0414cd0"),e=e(),$(),e),P={class:"add-or-update"},Z={class:"add-or-update-box"},q={class:"title"},G=z((()=>p("div",{class:"title-label"},"参数选择:",-1))),K=["contenteditable",".innerHTML"],Q={class:"folder"},W={class:"setting-list folder-list"},X={class:"setting-item-data"},Y=z((()=>p("div",{class:"setting-item-data-name"},"文件夹",-1))),ee={class:"setting-item-data-value"},ae={class:"setting-item-data"},le=z((()=>p("div",{class:"setting-item-data-name"},"透明度",-1))),te={class:"setting-item-data-value"},ne={class:"setting-handle"},se={class:"setting-item-data-value"},ie={class:"setting-list params-list"},de={class:"setting-item-data"},ue=z((()=>p("div",{class:"setting-item-data-name"},"value",-1))),oe={class:"setting-item-data-value"},ve={class:"setting-item-data"},me=z((()=>p("div",{class:"setting-item-data-name"},"预览图地址",-1))),ce={class:"setting-item-data-value"},re={class:"setting-item-data"},pe=z((()=>p("div",{class:"setting-item-data-name"},"value",-1))),_e={class:"setting-item-data-value"};var ge=e({__name:"staticsSettingAddOrUpdate",emits:["review"],setup(e,{expose:n,emit:s}){const i=v("maskDom"),d=v(!1),u=v("add"),o=s,y=v(!1),k=v(null),V=v(!1),U=v(!1),E=v(!1);v(new Set([])),v(new Set([]));const $=v(null),H=v(""),B=v(""),F=v(null),J=v(!0),z=[{name:"横向二方连续",key:"tile_x"},{name:"纵向二方连续",key:"tile_y"},{name:"四方连续",key:"tile_xy"}],ge=v([]),fe=({target:e})=>{k.value=e.innerHTML},he=()=>{y.value=!y.value,y.value?H.value=H.value:H.value=k.value},be=()=>{i.value.hide(),setTimeout((()=>{d.value=!1}),200)};return n({init:(e="add",a={},l)=>{if(d.value)return;d.value=!0,V.value=!1,U.value=!1,E.value=!1,H.value=a.name||"",B.value=a.preview||"",F.value="add"===e?null:l,a.extra_params?(J.value=a.extra_params.remove_bg.value,$.value=a.extra_params.tile.value):(J.value=!0,$.value=null);const t=a.folders||[],n=[];t.forEach((e=>{const a={uuid:j(),folder:e.folder,fusion_params:e.fusion_params};n.push(a)})),ge.value=n,u.value=e,A((()=>{i.value.show()}))}}),(e,n)=>{const s=m("el-icon"),v=m("el-input"),k=m("el-scrollbar"),V=m("el-option"),U=m("el-select"),A=m("t-mask");return c(),r("div",P,[d.value?(c(),h(A,{key:0,ref_key:"maskDom",ref:i},{default:f((()=>[p("div",Z,[p("div",q,[G,p("div",{class:"title-name",contenteditable:y.value,".innerHTML":H.value,onBlur:fe},null,40,K),p("div",{class:"title-handle-area",style:D({width:("add"===u.value?1.7:.8)+"rem"})},["add"===u.value?(c(),r("div",{key:0,class:"title-handle-btn",onClick:he},[g(s,null,{default:f((()=>[(c(),h(b(y.value?w(C):w(I))))])),_:1})])):x("",!0),p("div",{class:"title-handle-btn",onClick:n[0]||(n[0]=e=>(()=>{if(!H.value)return void N.error("请在输入或保存名称后操作");const e={folders:[],extra_params:{preview:B.value,remove_bg:{value:J.value},tile:{value:$.value}}};ge.value.forEach((a=>{const l={folder:a.folder,fusion_params:a.fusion_params};e.folders.push(l)}));const a=JSON.stringify(e),n=new Blob([a],{type:"application/json"}),s=$.value?`${H.value.replaceAll("_tile_xy","").replaceAll("_tile_x","").replaceAll("_tile_y","")}_${$.value}.json`:`${H.value.replaceAll("_tile_xy","").replaceAll("_tile_x","").replaceAll("_tile_y","")}.json`,i=new File([n],s,{type:"application/json",lastModified:Date.now()}),d=new FormData;d.append("file",i),F.value?t(F.value,d,"statics",H.value,B.value).then((e=>{be(),o("review")})):l(d,"statics",H.value,B.value).then((e=>{be(),o("review")}))})())},[g(s,null,{default:f((()=>[g(w(O))])),_:1})])],4),p("div",{class:"close-btn",onClick:be},[g(s,null,{default:f((()=>[g(w(S))])),_:1})])]),p("div",Q,[p("div",W,[g(k,null,{default:f((()=>[(c(!0),r(T,null,L(ge.value,(e=>(c(),h(R,{key:e.uuid,name:"文件夹",col:2,"need-remove":"",onSetName:a=>{e.folder=a},onDeleteItem:()=>{(e=>{const a=ge.value.findIndex((a=>a.uuid===e));ge.value.splice(a,1)})(e.uuid)}},{default:f((()=>[p("div",X,[Y,p("div",ee,[g(v,{modelValue:e.folder,"onUpdate:modelValue":a=>e.folder=a},null,8,["modelValue","onUpdate:modelValue"])])]),p("div",ae,[le,p("div",te,[g(v,{modelValue:e.fusion_params.transparency,"onUpdate:modelValue":a=>e.fusion_params.transparency=a},null,8,["modelValue","onUpdate:modelValue"])])])])),_:2},1032,["onSetName","onDeleteItem"])))),128)),p("div",ne,[p("div",se,[p("div",{class:"folder-input",onClick:n[1]||(n[1]=e=>(()=>{const e=j();ge.value.push({uuid:e,folder:"",fusion_params:{transparency:.2}})})())},[p("i",{class:_(["bi",w(a)])},null,2),M(" 添加 ")])])])])),_:1})]),p("div",ie,[g(k,null,{default:f((()=>[g(R,{name:"连续方式",col:1},{default:f((()=>[p("div",de,[ue,p("div",oe,[g(U,{modelValue:$.value,"onUpdate:modelValue":n[2]||(n[2]=e=>$.value=e),clearable:""},{default:f((()=>[(c(),r(T,null,L(z,(e=>g(V,{label:e.name,value:e.key,key:e.key},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])])])),_:1}),g(R,{name:"预览图",col:1},{default:f((()=>[p("div",ve,[me,p("div",ce,[g(v,{modelValue:B.value,"onUpdate:modelValue":n[3]||(n[3]=e=>B.value=e)},null,8,["modelValue"])])])])),_:1}),g(R,{name:"是否需要背景",col:1},{default:f((()=>[p("div",re,[pe,p("div",_e,[g(U,{modelValue:J.value,"onUpdate:modelValue":n[4]||(n[4]=e=>J.value=e)},{default:f((()=>[g(V,{value:!0,label:"是"}),g(V,{value:!1,label:"否"})])),_:1},8,["modelValue"])])])])),_:1})])),_:1})])])])])),_:1},512)):x("",!0)])}}},[["__scopeId","data-v-c0414cd0"]]);const fe={class:"statics-setting"},he={class:"statics-setting-info"};var be=e({__name:"staticsSetting",props:["class"],setup(e,{expose:a}){const l=v({}),t=v("addOrUpdateDom"),d=e,u=()=>{n("statics").then((e=>{l.value=e.data}))},o=(...e)=>{t.value.init(...e)};return H((()=>{u()})),a({addOrUpdate:o}),(e,a)=>{const n=m("modelCard"),v=m("el-scrollbar");return c(),r("div",fe,[g(v,null,{default:f((()=>[p("div",he,[(c(!0),r(T,null,L(l.value,(e=>(c(),h(n,{class:_(d.class),key:e.template_id,data:{name:e.template_name,preview:e.preview},onToUpdate:()=>{(({template_id:e,name:a,preview:l})=>{s(e).then((t=>{o("update",Object.assign({name:a,preview:l},t.data),e)}))})({template_id:e.template_id,name:e.template_name,preview:e.preview})},onDeleteItem:()=>{(({name:e,template_id:a})=>{i(a,"statics",e).then((e=>{u()}))})({template_id:e.template_id,name:e.template_name})}},null,8,["class","data","onToUpdate","onDeleteItem"])))),128))])])),_:1}),g(ge,{ref_key:"addOrUpdateDom",ref:t,onReview:u},null,512)])}}},[["__scopeId","data-v-d52006ba"]]);const we=e=>(E("data-v-255ee3d0"),e=e(),$(),e),ye={class:"add-or-update"},ke={class:"add-or-update-box"},xe={class:"title"},Ve=we((()=>p("div",{class:"title-label"},"参数选择:",-1))),Ue=["contenteditable",".innerHTML"],De={class:"content"},Ie={class:"setting-list prompts-list"},Ce={class:"setting-item-data-name"},Oe={class:"setting-item-data-value"},Se={class:"setting-item-data"},Te=["onClick"],Le=we((()=>p("div",{class:"setting-item-data-value"},null,-1))),Me={class:"setting-handle"},je={class:"setting-item-data-value"},Ae={class:"setting-list params-list"},Ne={class:"setting-item-data"},Ee=we((()=>p("div",{class:"setting-item-data-name"},"value",-1))),$e={class:"setting-item-data-value"},He={class:"setting-item-data"},Be=we((()=>p("div",{class:"setting-item-data-name"},"权重",-1))),Fe={class:"setting-item-data-value"},Je={class:"setting-item-data"},Re=we((()=>p("div",{class:"setting-item-data-name"},"预览图地址",-1))),ze={class:"setting-item-data-value"},Pe={class:"setting-item-data"},Ze=we((()=>p("div",{class:"setting-item-data-name"},"value",-1))),qe={class:"setting-item-data-value"},Ge={class:"setting-item-data"},Ke=we((()=>p("div",{class:"setting-item-data-name"},"风格参考",-1))),Qe={class:"setting-item-data-value"},We={class:"setting-item-data"},Xe=we((()=>p("div",{class:"setting-item-data-name"},"结构参考",-1))),Ye={class:"setting-item-data-value"},ea={class:"setting-item-data"},aa=we((()=>p("div",{class:"setting-item-data-name"},"value",-1))),la={class:"setting-item-data-value"},ta={class:"setting-item-data"},na=we((()=>p("div",{class:"setting-item-data-name"},"等级",-1))),sa={class:"setting-item-data-value"},ia={class:"setting-item-data"},da=we((()=>p("div",{class:"setting-item-data-name"},"宽度",-1))),ua={class:"setting-item-data-value"},oa={class:"setting-item-data"},va=we((()=>p("div",{class:"setting-item-data-name"},"高度",-1))),ma={class:"setting-item-data-value"};var ca=e({__name:"promptSettingAddOrUpdate",emits:["review"],setup(e,{expose:n,emit:s}){const i=v("maskDom"),d=v(!1),u=v("add"),o=s,y=v(!1),k=v(null),V=v(!1),U=v(!1),N=v(!1);v(new Set([])),v(new Set([]));const E=v(""),$=v({lora:"",weight:100}),H=v(!0),F=v(""),J=v(null),z=v({ref_style:!0,ref_struct:!0,value:""}),P=v("normal");v({probability:20,value:""}),v({probability:20,value:""});const Z=v(1024),q=v(1024),G=v([]),K=({target:e})=>{k.value=e.innerHTML},Q=()=>{y.value=!y.value,y.value?E.value=E.value:E.value=k.value},W=()=>{i.value.hide(),setTimeout((()=>{d.value=!1}),200)};return n({init:(e="add",a={},l)=>{if(d.value)return;d.value=!0,V.value=!1,U.value=!1,N.value=!1,E.value=a.name||"",F.value=a.preview||"",J.value="add"===e?null:l,a.extra_params?(a.extra_params.lora.weight*=100,$.value.lora=a.extra_params.lora.value,$.value.weight=a.extra_params.lora.weight,P.value=a.extra_params.server_type.value,z.value=a.extra_params.reference,H.value=a.extra_params.remove_bg.value,Z.value=a.extra_params.width.value,q.value=a.extra_params.height.value):($.value={lora:"",weight:100},z.value={ref_style:!0,ref_struct:!0,value:""},P.value="normal",H.value=!0,Z.value=1024,q.value=1024);const t=a.contents||[],n=[];t.forEach((e=>{const a={uuid:j(),content:e.content,maxLength:0,elements:[]},l=[0,0];Object.keys(e).forEach((t=>{t.includes("elements")&&(l.push(Number(t.replaceAll("elements_",""))),a.elements.push({name:t,values:e[t]}))})),a.maxLength=Math.max(...l),n.push(a)})),G.value=n,u.value=e,A((()=>{i.value.show()}))}}),(e,n)=>{const s=m("el-icon"),v=m("el-select"),k=m("el-scrollbar"),V=m("el-input"),U=m("el-input-number"),A=m("el-option"),N=m("t-mask");return c(),r("div",ye,[d.value?(c(),h(N,{key:0,ref_key:"maskDom",ref:i},{default:f((()=>[p("div",ke,[p("div",xe,[Ve,p("div",{class:"title-name",contenteditable:y.value,".innerHTML":E.value,onBlur:K},null,40,Ue),p("div",{class:"title-handle-area",style:D({width:("add"===u.value?1.7:.8)+"rem"})},["add"===u.value?(c(),r("div",{key:0,class:"title-handle-btn",onClick:Q},[g(s,null,{default:f((()=>[(c(),h(b(y.value?w(C):w(I))))])),_:1})])):x("",!0),p("div",{class:"title-handle-btn",onClick:n[0]||(n[0]=e=>(()=>{if(!E.value)return void ElMessage.error("请在输入或保存名称后操作");const e=JSON.parse(JSON.stringify($.value));e.weight/=100;const a={contents:[],extra_params:{lora:{value:e.lora||null,weight:e.weight},server_type:{value:P.value},reference:z.value,remove_bg:{value:H.value},width:{value:Z.value},height:{value:q.value}}};G.value.forEach((e=>{const l={content:e.content};e.elements.forEach((e=>{l[e.name]=e.values})),a.contents.push(l)}));const n=JSON.stringify(a),s=new Blob([n],{type:"application/json"}),i=new File([s],`${E.value}.json`,{type:"application/json",lastModified:Date.now()}),d=new FormData;d.append("file",i),J.value?t(J.value,d,"prompts",E.value,F.value).then((e=>{W(),o("review")})):l(d,"prompts",E.value,F.value).then((e=>{W(),o("review")}))})())},[g(s,null,{default:f((()=>[g(w(O))])),_:1})])],4),p("div",{class:"close-btn",onClick:W},[g(s,null,{default:f((()=>[g(w(S))])),_:1})])]),p("div",De,[p("div",Ie,[g(k,null,{default:f((()=>[(c(!0),r(T,null,L(G.value,(e=>(c(),h(R,{key:e.uuid,name:e.content,col:e.elements.length+1,"need-remove":"","need-edit":"",onSetName:a=>{e.content=a},onDeleteItem:()=>{(e=>{const a=G.value.findIndex((a=>a.uuid===e));G.value.splice(a,1)})(e.uuid)}},{default:f((()=>[(c(!0),r(T,null,L(e.elements,(a=>(c(),r("div",{class:"setting-item-data",key:a.name},[p("div",Ce,[M(B(a.name.replace("elements_","参数"))+" ",1),g(s,{onClick:l=>((e,a)=>{const l=G.value.findIndex((a=>a.uuid===e)),t=G.value[l].elements.findIndex((e=>e.name===a));G.value[l].content=G.value[l].content.replaceAll(`{${a}}`,""),G.value[l].elements.splice(t,1)})(e.uuid,a.name),class:"handle-btn"},{default:f((()=>[g(w(S))])),_:2},1032,["onClick"])]),p("div",Oe,[g(v,{"reserve-keyword":!1,"default-first-option":"","allow-create":"",modelValue:a.values,"onUpdate:modelValue":e=>a.values=e,multiple:"",filterable:""},null,8,["modelValue","onUpdate:modelValue"])])])))),128)),p("div",Se,[p("div",{class:"setting-item-data-name pointer",onClick:a=>((e,a)=>{const l=G.value.findIndex((a=>a.uuid===e));G.value[l].maxLength+=1,G.value[l].content+=`{elements_${G.value[l].maxLength}}`,G.value[l].elements.push({name:`elements_${G.value[l].maxLength}`,values:[]})})(e.uuid)},"添加",8,Te),Le])])),_:2},1032,["name","col","onSetName","onDeleteItem"])))),128)),p("div",Me,[p("div",je,[p("div",{class:"content-input",onClick:n[1]||(n[1]=e=>(()=>{const e=j();G.value.push({uuid:e,content:"",maxLength:0,elements:[]})})())},[p("i",{class:_(["bi",w(a)])},null,2),M(" 添加 ")])])])])),_:1})]),p("div",Ae,[g(k,null,{default:f((()=>[g(R,{name:"lora",col:2},{default:f((()=>[p("div",Ne,[Ee,p("div",$e,[g(V,{modelValue:$.value.lora,"onUpdate:modelValue":n[2]||(n[2]=e=>$.value.lora=e)},null,8,["modelValue"])])]),p("div",He,[Be,p("div",Fe,[g(U,{controls:!1,min:0,max:100,modelValue:$.value.weight,"onUpdate:modelValue":n[3]||(n[3]=e=>$.value.weight=e)},null,8,["modelValue"]),M(" % ")])])])),_:1}),g(R,{name:"预览图",col:1},{default:f((()=>[p("div",Je,[Re,p("div",ze,[g(V,{modelValue:F.value,"onUpdate:modelValue":n[4]||(n[4]=e=>F.value=e)},null,8,["modelValue"])])])])),_:1}),g(R,{name:"是否去除背景",col:1},{default:f((()=>[p("div",Pe,[Ze,p("div",qe,[g(v,{modelValue:H.value,"onUpdate:modelValue":n[5]||(n[5]=e=>H.value=e)},{default:f((()=>[g(A,{value:!0,label:"是"}),g(A,{value:!1,label:"否"})])),_:1},8,["modelValue"])])])])),_:1}),g(R,{name:"参考图",col:3},{default:f((()=>[p("div",Ge,[Ke,p("div",Qe,[g(v,{modelValue:z.value.ref_style,"onUpdate:modelValue":n[6]||(n[6]=e=>z.value.ref_style=e)},{default:f((()=>[g(A,{value:!0,label:"是"}),g(A,{value:!1,label:"否"})])),_:1},8,["modelValue"])])]),p("div",We,[Xe,p("div",Ye,[g(v,{modelValue:z.value.ref_struct,"onUpdate:modelValue":n[7]||(n[7]=e=>z.value.ref_struct=e)},{default:f((()=>[g(A,{value:!0,label:"是"}),g(A,{value:!1,label:"否"})])),_:1},8,["modelValue"])])]),p("div",ea,[aa,p("div",la,[g(V,{modelValue:z.value.value,"onUpdate:modelValue":n[8]||(n[8]=e=>z.value.value=e)},null,8,["modelValue"])])])])),_:1}),g(R,{name:"模型等级",col:1},{default:f((()=>[p("div",ta,[na,p("div",sa,[g(v,{modelValue:P.value,"onUpdate:modelValue":n[9]||(n[9]=e=>P.value=e)},{default:f((()=>[g(A,{value:"normal",label:"普通"}),g(A,{value:"high",label:"高级"}),g(A,{value:"top",label:"顶级"})])),_:1},8,["modelValue"])])])])),_:1}),g(R,{name:"尺寸",col:2},{default:f((()=>[p("div",ia,[da,p("div",ua,[g(U,{controls:!1,modelValue:Z.value,"onUpdate:modelValue":n[10]||(n[10]=e=>Z.value=e),min:64,max:2048},null,8,["modelValue"])])]),p("div",oa,[va,p("div",ma,[g(U,{controls:!1,modelValue:q.value,"onUpdate:modelValue":n[11]||(n[11]=e=>q.value=e),min:64,max:2048},null,8,["modelValue"])])])])),_:1})])),_:1})])])])])),_:1},512)):x("",!0)])}}},[["__scopeId","data-v-255ee3d0"]]);const ra={class:"prompt-setting"},pa={class:"prompt-setting-info"};var _a=e({__name:"promptSetting",props:["class"],setup(e,{expose:a}){const l=v({}),t=v("addOrUpdateDom"),d=e,u=()=>{n("prompts").then((e=>{l.value=e.data}))},o=(...e)=>{t.value.init(...e)};return H((()=>{u()})),a({addOrUpdate:o}),(e,a)=>{const n=m("modelCard"),v=m("el-scrollbar");return c(),r("div",ra,[g(v,null,{default:f((()=>[p("div",pa,[(c(!0),r(T,null,L(l.value,(e=>(c(),h(n,{class:_(d.class),key:e.template_id,data:{name:e.template_name,preview:e.preview},onToUpdate:()=>{(({template_id:e,name:a,preview:l})=>{s(e).then((t=>{o("update",Object.assign({name:a,preview:l},t.data),e)}))})({template_id:e.template_id,name:e.template_name,preview:e.preview})},onDeleteItem:()=>{(({name:e,template_id:a})=>{i(a,"prompts",e).then((e=>{u()}))})({template_id:e.template_id,name:e.template_name})}},null,8,["class","data","onToUpdate","onDeleteItem"])))),128))])])),_:1}),g(ca,{ref_key:"addOrUpdateDom",ref:t,onReview:u},null,512)])}}},[["__scopeId","data-v-2dc0c0ca"]]);const ga=e=>(E("data-v-bd8a4c14"),e=e(),$(),e),fa={class:"add-or-update"},ha={class:"add-or-update-box"},ba={class:"title"},wa=ga((()=>p("div",{class:"title-label"},"参数选择:",-1))),ya=["contenteditable",".innerHTML"],ka={class:"folder"},xa={class:"setting-list folder-list"},Va={class:"setting-item-data-name"},Ua={class:"setting-item-data-value"},Da={class:"setting-item-data"},Ia=ga((()=>p("div",{class:"setting-item-data-value"},null,-1))),Ca={class:"setting-list params-list"},Oa={class:"setting-item-data"},Sa=ga((()=>p("div",{class:"setting-item-data-name"},"value",-1))),Ta={class:"setting-item-data-value"},La={class:"setting-item-data"},Ma=ga((()=>p("div",{class:"setting-item-data-name"},"value",-1))),ja={class:"setting-item-data-value"};var Aa=e({__name:"backgroundSettingAddOrUpdate",emits:["review"],setup(e,{expose:n,emit:s}){const i=v("maskDom"),o=v(!1),y=v("add"),k=s,V=v(!1),U=v(null),N=v(!1),E=v(!1),$=v(!1);v(new Set([])),v(new Set([]));const H=v(""),B=v([]),F=v(0),J=v(null),z=({target:e})=>{U.value=e.innerHTML},P=v(null),Z=[{name:"横向二方连续",key:"tile_x"},{name:"纵向二方连续",key:"tile_y"},{name:"四方连续",key:"tile_xy"}],q=()=>{V.value=!V.value,V.value?H.value=H.value:H.value=U.value},G=()=>{i.value.hide(),setTimeout((()=>{o.value=!1}),200)};return n({init:(e="add",a={},l)=>{o.value||(o.value=!0,N.value=!1,E.value=!1,$.value=!1,H.value=a.name||"",J.value="add"===e?null:l,a.colors?B.value=a.colors.map((e=>({uuid:j(),value:d(e)}))):B.value=[],a.extra_params?(F.value=a.extra_params.variation,P.value=a.extra_params.tile):(F.value=0,P.value=null),y.value=e,A((()=>{i.value.show()})))}}),(e,n)=>{const s=m("el-icon"),d=m("el-color-picker"),v=m("el-scrollbar"),U=m("el-option"),A=m("el-select"),N=m("el-input-number"),E=m("t-mask");return c(),r("div",fa,[o.value?(c(),h(E,{key:0,ref_key:"maskDom",ref:i},{default:f((()=>[p("div",ha,[p("div",ba,[wa,p("div",{class:"title-name",contenteditable:V.value,".innerHTML":H.value,onBlur:z},null,40,ya),p("div",{class:"title-handle-area",style:D({width:("add"===y.value?1.7:.8)+"rem"})},["add"===y.value?(c(),r("div",{key:0,class:"title-handle-btn",onClick:q},[g(s,null,{default:f((()=>[(c(),h(b(V.value?w(C):w(I))))])),_:1})])):x("",!0),p("div",{class:"title-handle-btn",onClick:n[0]||(n[0]=e=>(()=>{if(!H.value)return void ElMessage.error("请在输入或保存名称后操作");const e={colors:B.value.map((e=>u(e.value))),extra_params:{variation:F.value,tile:P.value}},a=JSON.stringify(e),n=new Blob([a],{type:"application/json"}),s=P.value?`${H.value.replaceAll("_tile_xy","").replaceAll("_tile_x","").replaceAll("_tile_y","")}_${P.value}.json`:`${H.value.replaceAll("_tile_xy","").replaceAll("_tile_x","").replaceAll("_tile_y","")}.json`,i=new File([n],s,{type:"application/json",lastModified:Date.now()}),d=new FormData;d.append("file",i),J.value?t(J.value,d,"colors",H.value,"").then((e=>{G(),k("review")})):l(d,"colors",H.value,"").then((e=>{G(),k("review")}))})())},[g(s,null,{default:f((()=>[g(w(O))])),_:1})])],4),p("div",{class:"close-btn",onClick:G},[g(s,null,{default:f((()=>[g(w(S))])),_:1})])]),p("div",ka,[p("div",xa,[g(v,null,{default:f((()=>[g(R,{name:"颜色",col:B.value.length+1,onSetName:n[2]||(n[2]=a=>{e.n.folder=a}),onDeleteItem:n[3]||(n[3]=()=>{e.deleteFolder(e.n.uuid)})},{default:f((()=>[(c(!0),r(T,null,L(B.value,(e=>(c(),r("div",{class:"setting-item-data",key:e.uuid},[p("div",Va,[M(" 颜色 "),g(s,{onClick:a=>(e=>{const a=B.value.findIndex((a=>a.uuid===e));B.value.splice(a,1)})(e.uuid),class:"handle-btn"},{default:f((()=>[g(w(S))])),_:2},1032,["onClick"])]),p("div",Ua,[g(d,{"color-format":"rgba","show-alpha":"",style:{width:"100%"},modelValue:e.value,"onUpdate:modelValue":a=>e.value=a},null,8,["modelValue","onUpdate:modelValue"])])])))),128)),p("div",Da,[p("div",{class:"setting-item-data-name pointer",onClick:n[1]||(n[1]=e=>(()=>{const e=j();B.value.push({uuid:e,value:"rgba(0,0,0,1)"})})())},[p("i",{class:_(["bi",w(a)])},null,2),M(" 添加 ")]),Ia])])),_:1},8,["col"])])),_:1})]),p("div",Ca,[g(v,null,{default:f((()=>[g(R,{name:"连续方式",col:1},{default:f((()=>[p("div",Oa,[Sa,p("div",Ta,[g(A,{modelValue:P.value,"onUpdate:modelValue":n[4]||(n[4]=e=>P.value=e),clearable:""},{default:f((()=>[(c(),r(T,null,L(Z,(e=>g(U,{label:e.name,value:e.key,key:e.key},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])])])),_:1}),g(R,{name:"变化",col:1},{default:f((()=>[p("div",La,[Ma,p("div",ja,[g(N,{modelValue:F.value,"onUpdate:modelValue":n[5]||(n[5]=e=>F.value=e),controls:!1},null,8,["modelValue"])])])])),_:1})])),_:1})])])])])),_:1},512)):x("",!0)])}}},[["__scopeId","data-v-bd8a4c14"]]);const Na={class:"statics-setting"},Ea={class:"statics-setting-info"};var $a=e({__name:"backgroundSetting",props:["class"],setup(e,{expose:a}){const l=v({}),t=v("addOrUpdateDom"),d=e,u=()=>{n("colors").then((e=>{l.value=e.data}))},o=(...e)=>{t.value.init(...e)};return H((()=>{u()})),a({addOrUpdate:o}),(e,a)=>{const n=m("modelCard"),v=m("el-scrollbar");return c(),r("div",Na,[g(v,null,{default:f((()=>[p("div",Ea,[(c(!0),r(T,null,L(l.value,(e=>(c(),h(n,{class:_(d.class),key:e.template_id,data:{name:e.template_name,preview:e.preview},onToUpdate:()=>{(({template_id:e,name:a,preview:l})=>{s(e).then((t=>{o("update",Object.assign({name:a,preview:l},t.data),e)}))})({template_id:e.template_id,name:e.template_name,preview:e.preview})},onDeleteItem:()=>{(({name:e,template_id:a})=>{i(a,"colors",e).then((e=>{u()}))})({template_id:e.template_id,name:e.template_name})}},null,8,["class","data","onToUpdate","onDeleteItem"])))),128))])])),_:1}),g(Aa,{ref_key:"addOrUpdateDom",ref:t,onReview:u},null,512)])}}},[["__scopeId","data-v-dad63e58"]]);const Ha=e=>(E("data-v-37862e2c"),e=e(),$(),e),Ba={class:"add-or-update"},Fa={class:"add-or-update-box"},Ja={class:"title"},Ra=Ha((()=>p("div",{class:"title-label"},"参数选择:",-1))),za=["contenteditable",".innerHTML"],Pa={class:"content"},Za={class:"setting-list prompts-list"},qa={class:"setting-item-data-name"},Ga={class:"setting-item-data-value"},Ka={class:"setting-item-data"},Qa=["onClick"],Wa=Ha((()=>p("div",{class:"setting-item-data-value"},null,-1))),Xa={class:"setting-handle"},Ya={class:"setting-item-data-value"},el={class:"setting-list params-list"},al={class:"setting-item-data"},ll=Ha((()=>p("div",{class:"setting-item-data-name"},"value",-1))),tl={class:"setting-item-data-value"},nl={class:"setting-item-data"},sl=Ha((()=>p("div",{class:"setting-item-data-name"},"value",-1))),il={class:"setting-item-data-value"},dl={class:"setting-item-data"},ul=Ha((()=>p("div",{class:"setting-item-data-name"},"value",-1))),ol={class:"setting-item-data-value"};var vl=e({__name:"textSettingAddOrUpdate",emits:["review"],setup(e,{expose:n,emit:s}){const i=v("maskDom"),o=v(!1),y=v("add"),k=s,V=v(!1),U=v(null),N=v(!1),E=v(!1),$=v(!1);v(new Set([])),v(new Set([]));const H=v(""),F=v(""),J=v(""),z=v("rgba(0,0,0,1)"),P=v([]),Z=v(null),q=({target:e})=>{U.value=e.innerHTML},G=()=>{V.value=!V.value,V.value?H.value=H.value:H.value=U.value},K=()=>{i.value.hide(),setTimeout((()=>{o.value=!1}),200)};return n({init:(e="add",a={},l)=>{if(o.value)return;o.value=!0,N.value=!1,E.value=!1,$.value=!1,H.value=a.name||"",Z.value="add"===e?null:l,a.extra_params?(F.value=a.extra_params.font,J.value=a.extra_params.font_size,z.value=d(a.extra_params.font_color)):(F.value="",J.value="",z.value="rgba(0,0,0,1)");const t=a.contents||[],n=[];t.forEach((e=>{const a={uuid:j(),content:e.content,maxLength:0,elements:[]},l=[0,0];Object.keys(e).forEach((t=>{t.includes("elements")&&(l.push(Number(t.replaceAll("elements_",""))),a.elements.push({name:t,values:e[t]}))})),a.maxLength=Math.max(...l),n.push(a)})),P.value=n,y.value=e,A((()=>{i.value.show()}))}}),(e,n)=>{const s=m("el-icon"),d=m("el-select"),v=m("el-scrollbar"),U=m("el-input"),A=m("el-input-number"),N=m("el-color-picker"),E=m("t-mask");return c(),r("div",Ba,[o.value?(c(),h(E,{key:0,ref_key:"maskDom",ref:i},{default:f((()=>[p("div",Fa,[p("div",Ja,[Ra,p("div",{class:"title-name",contenteditable:V.value,".innerHTML":H.value,onBlur:q},null,40,za),p("div",{class:"title-handle-area",style:D({width:("add"===y.value?1.7:.8)+"rem"})},["add"===y.value?(c(),r("div",{key:0,class:"title-handle-btn",onClick:G},[g(s,null,{default:f((()=>[(c(),h(b(V.value?w(C):w(I))))])),_:1})])):x("",!0),p("div",{class:"title-handle-btn",onClick:n[0]||(n[0]=e=>(()=>{if(!H.value)return void ElMessage.error("请在输入或保存名称后操作");const e={contents:[],extra_params:{font:F.value,font_size:J.value,font_color:u(z.value)}};P.value.forEach((a=>{const l={content:a.content};a.elements.forEach((e=>{l[e.name]=e.values})),e.contents.push(l)}));const a=JSON.stringify(e),n=new Blob([a],{type:"application/json"}),s=new File([n],`${H.value}.json`,{type:"application/json",lastModified:Date.now()}),i=new FormData;i.append("file",s),Z.value?t(Z.value,i,"texts",H.value,"").then((e=>{K(),k("review")})):l(i,"texts",H.value,"").then((e=>{K(),k("review")}))})())},[g(s,null,{default:f((()=>[g(w(O))])),_:1})])],4),p("div",{class:"close-btn",onClick:K},[g(s,null,{default:f((()=>[g(w(S))])),_:1})])]),p("div",Pa,[p("div",Za,[g(v,null,{default:f((()=>[(c(!0),r(T,null,L(P.value,(e=>(c(),h(R,{key:e.uuid,name:e.content,col:e.elements.length+1,"need-remove":"","need-edit":"",onSetName:a=>{e.content=a},onDeleteItem:()=>{(e=>{const a=P.value.findIndex((a=>a.uuid===e));P.value.splice(a,1)})(e.uuid)}},{default:f((()=>[(c(!0),r(T,null,L(e.elements,(a=>(c(),r("div",{class:"setting-item-data",key:a.name},[p("div",qa,[M(B(a.name.replace("elements_","参数"))+" ",1),g(s,{onClick:l=>((e,a)=>{const l=P.value.findIndex((a=>a.uuid===e)),t=P.value[l].elements.findIndex((e=>e.name===a));P.value[l].content=P.value[l].content.replaceAll(`{${a}}`,""),P.value[l].elements.splice(t,1)})(e.uuid,a.name),class:"handle-btn"},{default:f((()=>[g(w(S))])),_:2},1032,["onClick"])]),p("div",Ga,[g(d,{"reserve-keyword":!1,"default-first-option":"","allow-create":"",modelValue:a.values,"onUpdate:modelValue":e=>a.values=e,multiple:"",filterable:""},null,8,["modelValue","onUpdate:modelValue"])])])))),128)),p("div",Ka,[p("div",{class:"setting-item-data-name pointer",onClick:a=>((e,a)=>{const l=P.value.findIndex((a=>a.uuid===e));P.value[l].maxLength+=1,P.value[l].content+=`{elements_${P.value[l].maxLength}}`,P.value[l].elements.push({name:`elements_${P.value[l].maxLength}`,values:[]})})(e.uuid)},[p("i",{class:_(["bi",w(a)])},null,2),M(" 添加 ")],8,Qa),Wa])])),_:2},1032,["name","col","onSetName","onDeleteItem"])))),128)),p("div",Xa,[p("div",Ya,[p("div",{class:"content-input",onClick:n[1]||(n[1]=e=>(()=>{const e=j();P.value.push({uuid:e,content:"",maxLength:0,elements:[]})})())},[p("i",{class:_(["bi",w(a)])},null,2),M(" 添加文本 ")])])])])),_:1})]),p("div",el,[g(v,null,{default:f((()=>[g(R,{name:"字体",col:1},{default:f((()=>[p("div",al,[ll,p("div",tl,[g(U,{modelValue:F.value,"onUpdate:modelValue":n[2]||(n[2]=e=>F.value=e)},null,8,["modelValue"])])])])),_:1}),g(R,{name:"字号",col:1},{default:f((()=>[p("div",nl,[sl,p("div",il,[g(A,{modelValue:J.value,"onUpdate:modelValue":n[3]||(n[3]=e=>J.value=e),controls:!1},null,8,["modelValue"])])])])),_:1}),g(R,{name:"颜色",col:1},{default:f((()=>[p("div",dl,[ul,p("div",ol,[g(N,{"color-format":"rgba","show-alpha":"",style:{width:"100%"},modelValue:z.value,"onUpdate:modelValue":n[4]||(n[4]=e=>z.value=e)},null,8,["modelValue"])])])])),_:1})])),_:1})])])])])),_:1},512)):x("",!0)])}}},[["__scopeId","data-v-37862e2c"]]);const ml={class:"statics-setting"},cl={class:"statics-setting-info"};var rl=e({__name:"textSetting",props:["class"],setup(e,{expose:a}){const l=v({}),t=v("addOrUpdateDom"),d=e,u=()=>{n("texts").then((e=>{l.value=e.data}))},o=(...e)=>{t.value.init(...e)};return H((()=>{u()})),a({addOrUpdate:o}),(e,a)=>{const n=m("modelCard"),v=m("el-scrollbar");return c(),r("div",ml,[g(v,null,{default:f((()=>[p("div",cl,[(c(!0),r(T,null,L(l.value,(e=>(c(),h(n,{class:_(d.class),key:e.template_id,data:{name:e.template_name,preview:e.preview},onToUpdate:()=>{(({template_id:e,name:a,preview:l})=>{s(e).then((t=>{o("update",Object.assign({name:a,preview:l},t.data),e)}))})({template_id:e.template_id,name:e.template_name,preview:e.preview})},onDeleteItem:()=>{(({name:e,template_id:a})=>{i(a,"texts",e).then((e=>{u()}))})({template_id:e.template_id,name:e.template_name})}},null,8,["class","data","onToUpdate","onDeleteItem"])))),128))])])),_:1}),g(vl,{ref_key:"addOrUpdateDom",ref:t,onReview:u},null,512)])}}},[["__scopeId","data-v-ef4b08ba"]]);const pl={class:"prompt-setting-outer"},_l={class:"prompt-setting-handle-area"},gl={class:"change-setting-type-area"},fl=["onClick"],hl={class:"prompt-setting-component-area"};var bl=e({__name:"index",props:["class"],setup(e){const a=e,l=[{name:"静态层配置",component:be},{name:"动态层配置",component:_a},{name:"纯色层配置",component:$a},{name:"文本层配置",component:rl}],t=v(0),n=v("componentDom");return H((()=>{window.loading||(window.loading=o()),setTimeout((()=>{window.loading.close(),window.loading=null}),300)})),(e,s)=>{const i=m("t-button");return c(),r("div",pl,[p("div",_l,[p("div",gl,[p("div",{class:"component-selected",style:D({left:3.2*t.value+.05+"rem"})},null,4),(c(),r(T,null,L(l,((e,a)=>p("div",{class:"component-item",onClick:e=>t.value=a,key:e.name},B(e.name),9,fl))),64))]),g(i,{style:{margin:"0",width:"2.5rem","text-align":"center"},type:"warn",onClick:s[0]||(s[0]=e=>{n.value.addOrUpdate()})},{default:f((()=>[M("新增")])),_:1})]),p("div",hl,[(c(),h(b(l[t.value].component),{class:_(a.class),ref_key:"componentDom",ref:n},null,8,["class"]))])])}}},[["__scopeId","data-v-2ea6960d"]]);export{bl as default};
