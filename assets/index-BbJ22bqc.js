import{x as e,m as a,n as t,F as l,A as s,H as n,k as o,I as d,r,D as u,C as i,V as c,J as p,j as v,B as y,p as m,w as f,y as g,u as _,W as k,G as b,O as w,o as h,E as D,M as x,L as j}from"./lib-CKDAqxUM.js";import{_ as A}from"./_plugin-vue_export-helper-BCo6x5W8.js";import{T as S}from"./TLoading-1V5YRPnT.js";import{u as R,o as W}from"./opInput-219TxWsc.js";import{u as T,_ as I}from"./index-CKTHfneF.js";import C from"./index-B-gM6ebN.js";import{a as O,g as V}from"./promptSetting-DLGAHKTX.js";import{g as P}from"./artwork-B1YzCu-z.js";import E from"./index-DWShskv8.js";import{m as L,c as U,h as M}from"./index-DSPbwlS6.js";/* empty css                                                                 */import{h as N,m as q,e as Y,j as $,k as z,o as B,q as J,r as F,u as G}from"./index-ozdrtwfE.js";import{a as H,b as K}from"./dataWarehouse-C-gpKlwU.js";import"./logo2-l66aD4rS.js";import"./syncSleep-DvzJnWfR.js";/* empty css                                                                */import"./modelCard-C9dXILXj.js";import"./file-BA4XvZMH.js";import"./menu-B85Lp49n.js";const Q={class:"page-count-body"},X={class:"page-count-inner"},Z=["num"],ee=A({__name:"pageCount",props:{pageData:{type:Array(),default:()=>[]},now:{type:Number,default:0}},emits:["addPage"],setup(r,{emit:u}){const i=u,c=r,p=e(c,"pageData"),v=e(c,"now");return(e,r)=>(o(),a("div",Q,[t("div",X,[p.value.length>1?(o(!0),a(l,{key:0},s(p.value,((e,l)=>{return o(),a("div",{class:"page-count",style:d((s=l,s===v.value?{transform:"translateY(0rem)"}:s>v.value?{transform:"translateY(100%)"}:s<v.value?{transform:"translateY(-100%)"}:void 0)),key:l},r[1]||(r[1]=[t("div",{class:"page-count-line"},null,-1),t("label",null,null,-1)]),4);var s})),128)):n("",!0),v.value===p.value.length-1?(o(),a("div",{key:1,class:"add-btn",num:p.value.length,onClick:r[0]||(r[0]=e=>{i("addPage")})},r[2]||(r[2]=[t("div",{class:"page-count-line"},null,-1),t("label",null,"+",-1)]),8,Z)):n("",!0)])]))}},[["__scopeId","data-v-80378dae"]]),ae=A({__name:"modelSelectedDialog",props:["type"],emits:["setData"],setup(t,{expose:l,emit:s}){const{publicStore:d}=T(),p=s,v=e(d,"isCarryOut"),y=r(!1),m=e=>{p("setData",e),y.value=!1};return l({init:()=>{y.value=!0}}),(e,l)=>(o(),u(c,{to:"body"},[y.value?(o(),a("div",{key:0,class:i(["model-selected-dialog-body",{expand:!v.value}])},[y.value?(o(),u(C,{key:0,componentType:"component",type:t.type,onSetData:m},null,8,["type"])):n("",!0)],2)):n("",!0)]))}},[["__scopeId","data-v-15493417"]]),te={class:"json-editor-body"},le={class:"input-area"},se={key:1},ne={key:3,class:"image-area"},oe=["src"],de={class:"add-image-area"},re=A({__name:"jsonEditor",props:{modelValue:{default:()=>[{key:"",code:null,value:null}]},list:{default:!1}},emits:["update:modelValue"],setup(e,{expose:d,emit:c}){const w=k((()=>I((()=>Promise.resolve().then((()=>ue))),void 0))),h=[{name:"文本",code:"text"},{name:"数字",code:"number"},{name:"图片",code:"image"},{name:"字典",code:"map"},{name:"列表",code:"list"}],D=r(e.modelValue),x=c;p(D.value,(e=>{x("update:modelValue",e)}));const j=()=>{D.value.push({key:"",code:null,value:null})},A=(e=D.value,a="map")=>{const t="map"===a?{}:[];return e.forEach((({key:e,code:l,value:s},n)=>{if(l)switch(l){case"text":case"number":case"image":"map"===a?t[e]=s:t[n]=s;break;case"list":"map"===a?t[e]=A(s,"list"):t[n]=A(s,"list");break;case"map":"map"===a?t[e]=A(s):t[n]=A(s)}})),t},S=(e={},a="map")=>{let t=[];return Object.keys(e).forEach((a=>{const l={key:a,code:null,value:null};Array.isArray(e[a])?e[a].length&&e[a].every((e=>e.includes("http")))?(l.code="image",l.value=e[a]):(l.code="list",l.value=S(e[a]).map((e=>(e.key=null,e)))):"string"==typeof e[a]?(l.code="text",l.value=e[a]):"number"==typeof e[a]?(l.code="number",l.value=e[a]):(l.code="map",l.value=S(e[a])),t.push(l)})),t};return d({getData:()=>D.value,getSaveData:A,init:(e,a="map")=>{if("map"===a){const a=e[0],t=S(a);D.value=t}else{const a=S(e,"list");D.value=a}}}),(d,r)=>{const c=v("n-input"),p=v("n-button"),k=v("n-input-number"),x=v("n-upload");return o(),a("div",te,[t("div",le,[(o(!0),a(l,null,s(D.value,((d,v)=>(o(),a("div",{class:"input-group",key:v},[t("div",{class:i(["input-key",{list:e.list,unlist:!e.list}])},[e.list?(o(),a("label",se,y(v+1),1)):(o(),u(c,{key:0,value:d.key,"onUpdate:value":e=>d.key=e,placeholder:"键名称"},null,8,["value","onUpdate:value"]))],2),t("div",{class:i(["input-value",{list:e.list,unlist:!e.list}])},[d.code?n("",!0):(o(),a(l,{key:0},s(h,(e=>m(p,{class:"type-btn",key:e.code,onClick:a=>((e,a)=>{switch(e.code=a,a){case"text":e.value=null;break;case"image":case"map":case"list":e.value=[]}})(d,e.code)},{default:f((()=>[g(y(e.name),1)])),_:2},1032,["onClick"]))),64)),"text"===d.code?(o(),u(c,{key:1,value:d.value,"onUpdate:value":e=>d.value=e,placeholder:"请输入文本",type:"textarea"},null,8,["value","onUpdate:value"])):n("",!0),"number"===d.code?(o(),u(k,{key:2,value:d.value,"onUpdate:value":e=>d.value=e,placeholder:"请输入文本",type:"textarea"},null,8,["value","onUpdate:value"])):n("",!0),"image"===d.code?(o(),a("div",ne,[(o(!0),a(l,null,s(d.value,((e,l)=>(o(),a("div",{class:"image-item",key:`image-${l}`},[t("img",{src:e},null,8,oe)])))),128)),t("div",de,[m(x,{"show-file-list":!1,accept:"image/*",action:"",onBeforeUpload:(...e)=>((e,{file:a})=>{const t=b(),l=new FormData;return l.append("file",a.file),R(t,l).then((a=>{200===a.code&&D.value[e].value.push(a.data)})),!1})(v,...e)},{default:f((()=>r[0]||(r[0]=[t("i",{class:"bi bi-plus"},null,-1)]))),_:2},1032,["onBeforeUpload"])])])):n("",!0),"map"===d.code?(o(),u(_(w),{key:4,class:"inline",modelValue:d.value,"onUpdate:modelValue":e=>d.value=e},null,8,["modelValue","onUpdate:modelValue"])):n("",!0),"list"===d.code?(o(),u(_(w),{key:5,list:!0,class:"inline",modelValue:d.value,"onUpdate:modelValue":e=>d.value=e},null,8,["modelValue","onUpdate:modelValue"])):n("",!0)],2)])))),128)),t("div",{class:i(["add-area",{list:e.list,unlist:!e.list}])},[t("label",{onClick:j},"+")],2)])])}}},[["__scopeId","data-v-b47eeaf6"]]),ue=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),ie={class:"model-selected-title"},ce={class:"model-selected-title-text"},pe={key:0,class:"other-data-area"},ve={key:1,class:"selected-data-area"},ye={class:"card"},me=["onClick"],fe={class:"card-tags"},ge={class:"card-description"},_e=A({__name:"modelSelected",props:{type:{},data:{default:()=>[]}},setup(d,{expose:c}){const{publicStore:p}=T(),_=e(p,"isCarryOut"),k=d,b=r(null),h=r(null),D=r(0),x={prompts:"动态",statics:"静态",texts:"文字",colors:"调色板",designs:"设计理念"},j={prompts:["resource_id","preview","resource_name","description","keywords","trigger","server_type"],statics:["resource_id","preview","resource_name","description","keywords","cloud_folder"],texts:["resource_id","preview","resource_name","description","keywords","cloud_folder"],colors:["resource_id","preview","resource_name","description","keywords","colors"]},A=r(k.data[0]?k.data[0].value:[]),S=()=>{b.value.init()},R=e=>{O(e.resource_id).then((e=>{if(200===e.code)if("designs"===k.type){const a=Object.assign({data:e.data},e.info);A.value.push(a)}else{const a=Object.assign(e.data,e.info);A.value.push(a)}}))},W=e=>{const a={};return j[k.type]?(j[k.type].forEach((t=>{a[t]=e[t]})),a):e.data?Object.assign(e.data,{resource_id:e.resource_id,preview:e.preview}):{resource_id:e.resource_id,preview:e.preview}};return c({getSaveData:()=>({role:"database",type:`${x[k.type]}资源参考`,content:[{type:"json",value:A.value.map((e=>W(e)))}]})}),(e,r)=>{const c=v("n-scrollbar"),p=v("n-image"),k=v("n-tag"),j=v("n-space");return o(),a("div",{class:i(["model-selected-body",{expand:!_.value}])},[t("div",ie,[t("div",ce," 选择"+y(x[d.type])+"资源 ",1)]),1===D.value?(o(),a("div",pe,[m(c,{onWheel:r[0]||(r[0]=w((()=>{}),["stop"]))},{default:f((()=>[m(re,{ref_key:"jsonEditorRef",ref:h},null,512)])),_:1})])):n("",!0),0===D.value?(o(),a("div",ve,[(o(!0),a(l,null,s(A.value,((e,n)=>(o(),a("div",{class:"card-outer",key:e.resource_id},[t("div",ye,[t("div",{class:"remove-btn",onClick:e=>(e=>{A.value.splice(e,1)})(n)},r[1]||(r[1]=[t("i",{class:"bi bi-x-circle"},null,-1)]),8,me),m(p,{width:"100%",style:{width:"100%"},src:e.preview,class:"image",fit:"contain"},null,8,["src"]),t("div",fe,[m(j,null,{default:f((()=>["design"!==d.type?(o(!0),a(l,{key:0},s(e.keywords,((e,a)=>(o(),u(k,{bordered:!1,key:a},{default:f((()=>[g(y(e),1)])),_:2},1024)))),128)):(o(!0),a(l,{key:1},s(e.data.keywords,((e,a)=>(o(),u(k,{bordered:!1,key:a},{default:f((()=>[g(y(e),1)])),_:2},1024)))),128))])),_:2},1024)])]),t("div",ge,y("design"!==d.type?e.description:e.data.description),1)])))),128)),A.value.length<3?(o(),a("div",{key:0,class:"card",onClick:S},r[2]||(r[2]=[t("i",{class:"bi bi-plus"},null,-1)]))):n("",!0)])):n("",!0),m(ae,{type:d.type,ref_key:"modelSelectedDialogRef",ref:b,onSetData:R},null,8,["type"])],2)}}},[["__scopeId","data-v-05b8fe1b"]]),ke={class:"other-data-area"},be=A({__name:"generateDemandAnalysis",props:{type:{},data:{default:()=>[]}},setup(l,{expose:s}){const{publicStore:n}=T(),d=e(n,"isCarryOut"),u=l,c=r([]);r(null);const p=r(null);r(0),r([]);return h((()=>{u.data&&u.data[0]&&(c.value=p.value.init(u.data[0].value))})),s({getSaveData:()=>({role:"system",type:"需求分析",content:[{type:"json",value:[p.value.getSaveData()]}]})}),(e,l)=>{const s=v("n-scrollbar");return o(),a("div",{class:i(["model-selected-body",{expand:!d.value}])},[l[1]||(l[1]=t("div",{class:"model-selected-title"},[t("div",{class:"model-selected-title-text"}," 生成需求分析 ")],-1)),t("div",ke,[m(s,{onWheel:l[0]||(l[0]=w((()=>{}),["stop"]))},{default:f((()=>[m(re,{ref_key:"jsonEditorRef",ref:p},null,512)])),_:1})])],2)}}},[["__scopeId","data-v-662a6d25"]]),we={class:"other-data-area"},he=A({__name:"generateText",setup(l){const{publicStore:s}=T(),n=e(s,"isCarryOut");return(e,l)=>{const s=v("n-input");return o(),a("div",{class:i(["model-selected-body",{expand:!n.value}])},[l[0]||(l[0]=t("div",{class:"model-selected-title"},[t("div",{class:"model-selected-title-text"}," 生成文本段落 ")],-1)),t("div",we,[m(s,{type:"textarea",placeholder:"请输入文本段落",style:{height:"100%"},resize:"none"})])],2)}}},[["__scopeId","data-v-5c1fa973"]]),De=A({__name:"artworkSelectedDialog",props:["type"],emits:["setData"],setup(t,{expose:l,emit:s}){const{publicStore:d}=T(),p=s,v=e(d,"isCarryOut"),y=r(!1),m=e=>{p("setData",e),y.value=!1};return l({init:()=>{y.value=!0}}),(e,l)=>(o(),u(c,{to:"body"},[y.value?(o(),a("div",{key:0,class:i(["model-selected-dialog-body",{expand:!v.value}])},[y.value?(o(),u(E,{key:0,componentType:"component",type:t.type,onSetData:m},null,8,["type"])):n("",!0)],2)):n("",!0)]))}},[["__scopeId","data-v-acf3cb9e"]]),xe={class:"model-selected-title"},je={class:"model-selected-title-text"},Ae={key:0,class:"selected-data-area"},Se=["onClick"],Re={class:"card-tags"},We={key:1,class:"selected-data-area"},Te=A({__name:"artWorkSelected",props:{type:{},data:{default:()=>[]}},emits:["initData"],setup(d,{expose:c,emit:p}){b();const{publicStore:_}=T(),k=e(_,"isCarryOut"),w=p,h=d,x=r(null);r(null);const j=r(h.data[0]&&"generateArtWork"===h.type?1:0),A=r(h.data[0]?h.data[0].value:[]),S=r(h.data[0]?h.data[0].value:[]),R=D(),W=r([]),I=r([]),C=r([]),O=r([]),E=r({template_filter:"nomal",template_level:"nomal",points:1}),N=r(!1),q=r(null),Y=r({canvasData:{name:R.query.file_name||"",width:2048,height:2048}}),$=r({groups:{},layers:{},elements:{}}),z=r(!1),B=e=>new Promise((a=>{P(e).then((e=>{Y.value=Object.assign(Y.value,e.data.viewData),Y.value.canvasData.name=e.info.artwork_name,$.value=e.data.layerData,E.value=e.info,z.value=!0,a()}))})),J=e=>{Promise.all([new Promise((e=>{V("colors").then((a=>{C.value=a.data,e()}))})),new Promise((e=>{V("texts").then((a=>{O.value=a.data,e()}))})),new Promise((e=>{V("prompts").then((a=>{W.value=a.data,e()}))})),new Promise((e=>{V("statics").then((a=>{I.value=a.data,e()}))})),B(e)]).then((()=>{N.value=!0}))},F=()=>{x.value.init()},G=e=>{"generateArtWork"===h.type?w("initData",e):A.value.push(e)};return c({hideView:()=>{if("generateArtWork"===h.type){if(!z.value)return;z.value=!1,S.value.length<M.length&&(S.value=JSON.parse(JSON.stringify(M))),S.value.length&&U()}else"selectedArtWork"===h.type&&(z.value=!1)},initView:async(e=q.value,a)=>{z.value||(j.value||"generateArtWork"===h.type)&&(U(),S.value.length?(J(e),S.value=a,q.value=e):e?J(e):z.value=!0)},getSaveData:()=>"generateArtWork"===h.type?{role:"system",type:"生成操作链",artwork_id:q.value,content:[{type:"json",value:S.value}]}:"selectedArtWork"===h.type?{role:"system",type:"作品资源参考",content:[{type:"json",value:A.value}]}:void 0}),(e,d)=>{const r=v("n-image"),c=v("n-tag"),p=v("n-space");return o(),a("div",{class:i(["model-selected-body",{expand:!k.value}])},[t("div",xe,[t("div",je,y("generateArtWork"===h.type?"生成":"选择")+"作品资源",1)]),0===j.value?(o(),a("div",Ae,[(o(!0),a(l,null,s(A.value,((e,l)=>(o(),a("div",{class:"card",key:e.artwork_id},[t("div",{class:"remove-btn",onClick:e=>(e=>{A.value.splice(e,1)})(l)},d[0]||(d[0]=[t("i",{class:"bi bi-x-circle"},null,-1)]),8,Se),m(r,{width:"100%",src:e.preview,class:"image",fit:"contain"},null,8,["src"]),t("div",Re,[m(p,null,{default:f((()=>[m(c,{bordered:!1},{default:f((()=>d[1]||(d[1]=[g(" 家纺平面设计 ")]))),_:1}),m(c,{bordered:!1},{default:f((()=>d[2]||(d[2]=[g(" 卡通风格和可爱ins风 ")]))),_:1}),m(c,{bordered:!1},{default:f((()=>d[3]||(d[3]=[g(" 奶牛 ")]))),_:1}),m(c,{bordered:!1},{default:f((()=>d[4]||(d[4]=[g(" 胡萝卜 ")]))),_:1}),m(c,{bordered:!1},{default:f((()=>d[5]||(d[5]=[g(" 樱桃 ")]))),_:1}),m(c,{bordered:!1},{default:f((()=>d[6]||(d[6]=[g(" 莫兰蒂色 ")]))),_:1})])),_:1})])])))),128)),A.value.length<3?(o(),a("div",{key:0,class:"card",onClick:F},d[7]||(d[7]=[t("i",{class:"bi bi-plus"},null,-1)]))):n("",!0)])):n("",!0),1===j.value?(o(),a("div",We,[z.value?(o(),u(L,{key:0,colorsList:C.value,textsList:O.value,editorType:"generate",promptsList:W.value,staticsList:I.value,setting:Y.value,layerData:$.value,templateId:q.value,info:E.value,needOpInput:!1,needTaskList:!1,needDelete:!1},null,8,["colorsList","textsList","promptsList","staticsList","setting","layerData","templateId","info"])):n("",!0)])):n("",!0),m(De,{ref_key:"artworkSelectedDialogRef",ref:x,onSetData:G},null,512)],2)}}},[["__scopeId","data-v-7fbcd79b"]]),Ie={class:"other-data-area"},Ce=A({__name:"selectedDisplay",props:{type:{},data:{default:()=>[]}},setup(l,{expose:s}){const{publicStore:n}=T(),d=e(n,"isCarryOut"),u=l,c=r([]);r(null);const p=r(null);r(0),r([]);return h((()=>{u.data&&u.data[0]&&(c.value=p.value.init([u.data[0].value],"map"))})),s({getSaveData:()=>({role:"system",type:"参考资源分析",content:[{type:"json",value:[p.value.getSaveData()]}]})}),(e,l)=>{const s=v("n-scrollbar");return o(),a("div",{class:i(["model-selected-body",{expand:!d.value}])},[l[1]||(l[1]=t("div",{class:"model-selected-title"},[t("div",{class:"model-selected-title-text"}," 选择布局资源 ")],-1)),t("div",Ie,[m(s,{onWheel:l[0]||(l[0]=w((()=>{}),["stop"]))},{default:f((()=>[m(re,{ref_key:"jsonEditorRef",ref:p},null,512)])),_:1})])],2)}}},[["__scopeId","data-v-06452e6f"]]),Oe={class:"other-data-area"},Ve=A({__name:"referenceResource",props:{type:{},data:{default:()=>[]}},setup(l,{expose:s}){const{publicStore:n}=T(),d=e(n,"isCarryOut"),u=l,c=r([]);r(null);const p=r(null);r(0),r([]);return h((()=>{u.data&&u.data[0]&&(c.value=p.value.init(u.data[0].value,"list"))})),s({getSaveData:()=>({role:"system",type:"参考资源分析",content:[{type:"json",value:[p.value.getSaveData()]}]})}),(e,l)=>{const s=v("n-scrollbar");return o(),a("div",{class:i(["model-selected-body",{expand:!d.value}])},[l[1]||(l[1]=t("div",{class:"model-selected-title"},[t("div",{class:"model-selected-title-text"}," 参考资源分析 ")],-1)),t("div",Oe,[m(s,{onWheel:l[0]||(l[0]=w((()=>{}),["stop"]))},{default:f((()=>[m(re,{ref_key:"jsonEditorRef",ref:p,list:!0},null,512)])),_:1})])],2)}}},[["__scopeId","data-v-0f1064fb"]]),Pe={key:0,class:"set-data-area"},Ee={key:1,class:"init-area"},Le=["onClick"],Ue={class:"init-card-info"},Me={class:"icon"},Ne={class:"name"},qe={class:"content"},Ye={class:"type"},$e=A({__name:"pageItem",props:{count:{type:Number,default:0},now:{type:Number,default:0},data:{}},emits:["resetAllData"],setup(c,{expose:p,emit:v}){const m={input:"搜索资源",output:"生成结果"},f=c,g=v,_=r(null),k=r(null),b={selectedModelRef:r(null),generateDemandAnalysisRef:r(null),referenceResourceRef:r(null),generateTextRef:r(null),generateArtWorkRef:r(null),selectedArtWorkRef:r(null),selectedDisplayRef:r(null)},w=e(f,"count"),D=e(f,"now"),j=e(f,"data"),A=["动态资源参考","静态资源参考","文字资源参考","调色板资源参考","设计理念资源参考","作品资源参考","布局资源参考","参考资源分析","需求分析","生成操作链"],S=[{name:"选择动态资源",content:"选择可参考的动态资源",icon:N,cardType:"input",code:"selectedModel",type:"prompts"},{name:"选择静态资源",content:"选择可参考的静态资源",icon:q,cardType:"input",code:"selectedModel",type:"statics"},{name:"选择文字资源",content:"选择可参考的文字资源",icon:Y,cardType:"input",code:"selectedModel",type:"texts"},{name:"选择调色板",content:"合理且舒适的颜色搭配",icon:$,cardType:"input",code:"selectedModel",type:"colors"},{name:"选择设计理念",content:"无数种设计思想的集合",icon:z,cardType:"input",code:"selectedModel",type:"designs"},{name:"选择作品资源",content:"选择用户需要的作品资源",icon:B,cardType:"input",code:"selectedArtWork",type:"prompts"},{name:"选择布局资源",content:"选择需要生成设计的布局",icon:J,cardType:"input",code:"selectedDisplay",type:"prompts"},{name:"参考资源分析",content:"生成用户需求的参考分析",icon:F,cardType:"output",code:"referenceResource",type:""},{name:"生成需求分析",content:"生成用户需求的模板分析",icon:G,cardType:"output",code:"generateDemandAnalysis",type:""},{name:"生成作品资源",content:"生成用户需要的模板资源",icon:B,cardType:"output",code:"generateArtWork",type:"designs"}],R=(e=w.value)=>{if(e===D.value+1){if("generateArtWork"===_.value)if(b.generateArtWorkRef.value)try{b.generateArtWorkRef.value.initView(f.data.artwork_id,f.data.content[0]?f.data.content[0].value:[])}catch(a){}else x((()=>{try{b.generateArtWorkRef.value.initView(f.data.artwork_id,f.data.content[0]?f.data.content[0].value:[])}catch(a){}}));return{top:"0rem",zIndex:1}}return"generateArtWork"===_.value&&(b.generateArtWorkRef.value?b.generateArtWorkRef.value.hideView():x((()=>{b.generateArtWorkRef.value.hideView()}))),{display:"none"}},W=({artwork_id:e,artwork_name:a,artwork_level:t})=>{H({artwork_id:e,artwork_name:a,artwork_level:t}).then((e=>{200===e.code&&g("resetAllData",e.data)}))};return h((()=>{if(j.value.type){const e=A.findIndex((e=>e===j.value.type));_.value=S[e].code,k.value=S[e].type}})),p({getSaveData:()=>_.value?b[`${_.value}Ref`].value.getSaveData():null}),(e,r)=>(o(),a("div",{class:"page-item-body",style:d(R())},[null!==_.value?(o(),a("div",Pe,["selectedModel"===_.value?(o(),u(_e,{key:0,type:k.value,data:j.value.content,ref:b.selectedModelRef},null,8,["type","data"])):n("",!0),"generateDemandAnalysis"===_.value?(o(),u(be,{key:1,data:j.value.content,ref:b.generateDemandAnalysisRef},null,8,["data"])):n("",!0),"referenceResource"===_.value?(o(),u(Ve,{key:2,data:j.value.content,ref:b.referenceResourceRef},null,8,["data"])):n("",!0),"selectedDisplay"===_.value?(o(),u(Ce,{key:3,data:j.value.content,ref:b.selectedDisplayRef},null,8,["data"])):n("",!0),"generateText"===_.value?(o(),u(he,{key:4,data:j.value.content,ref:b.generateTextRef},null,8,["data"])):n("",!0),"selectedArtWork"===_.value||"generateArtWork"===_.value?(o(),u(Te,{key:5,data:j.value.content,type:_.value,onInitData:W,ref:b[`${_.value}Ref`]},null,8,["data","type"])):n("",!0)])):n("",!0),null===_.value?(o(),a("div",Ee,[(o(),a(l,null,s(S,((e,a)=>t("div",{class:"init-card",key:a,onClick:a=>(({code:e,type:a})=>{_.value=e,k.value=a})(e)},[t("div",Ue,[t("div",Me,[t("i",{class:i(["bi",e.icon])},null,2)]),t("div",Ne,y(e.name),1),t("div",qe,y(e.content),1),t("div",Ye,y(m[e.cardType]),1)])],8,Le))),64))])):n("",!0)],4))}},[["__scopeId","data-v-c8fcdb95"]]),ze={class:"page-ouoter-body"},Be=A({__name:"pageOuter",props:{count:{type:Number,default:0},now:{type:Number,default:0},pageData:{type:Array,default:()=>[]}},emits:["resetAllData"],setup(t,{expose:n,emit:d}){const i=t,c=d,p=r(null),v=(...e)=>{c("resetAllData",...e)};n({getSaveData:()=>{const e=[];return p.value.forEach((a=>{const t=a.getSaveData();t&&e.push(t)})),e}});const y=e(i,"pageData");e(i,"count");const m=e(i,"now");return(e,t)=>(o(),a("div",ze,[(o(!0),a(l,null,s(y.value,((e,a)=>(o(),u($e,{onResetAllData:v,ref_for:!0,ref_key:"page",ref:p,data:e,key:e.uuid,count:a+1,now:m.value},null,8,["data","count","now"])))),128))]))}},[["__scopeId","data-v-c6411208"]]),Je={class:"page-count"},Fe={class:"data-warehouse-editor"},Ge={class:"data-warehouse-editor-input-box"},He={class:"data-warehouse-editor-input-area"},Ke={class:"data-warehouse-editor-view"},Qe=A({__name:"index",setup(l){j();const s=D(),d=e(s.query,"id");r(s.query.type);const i=r(0),c=r(null),p=r(null),v=r(!0),y=r([]),f=r(!1),g=r(!1),_=e=>{if(e.preventDefault(),!f.value){if(f.value=!0,setTimeout((()=>{f.value=!1}),500),e.deltaY<0){if(i.value-1<0)return;i.value--}else if(e.deltaY>0){if(i.value+1>y.value.length-1)return;i.value++}e.stopPropagation()}},k=()=>{y.value.push({}),i.value=y.value.length-1},A=e=>{y.value=[],U(),v.value=!1,g.value=e.splice(0,1)[0].content,y.value=e,x((()=>{v.value=!0}))};return h((()=>{window.loading||(window.loading=S()),d.value?K({data_id:d.value}).then((e=>{200===e.code&&(y.value=e.data.map((e=>(e.uuid=b(),e))))})):y.value=[{}],setTimeout((()=>{window.loading&&(window.loading.close(),window.loading=null)}),300)})),(e,l)=>(o(),a("div",{class:"data-warehouse-editor-body",onWheel:w(_,["stop"]),tabindex:"0"},[t("div",Je,[m(ee,{pageData:y.value,now:i.value,onAddPage:k},null,8,["pageData","now"])]),t("div",Fe,[t("div",Ge,[t("div",He,[m(W,{style:{"box-shadow":"var(--op-thr-shadow)"},ref_key:"opInputRef",ref:c,inputVal:g.value},null,8,["inputVal"])])]),t("div",Ke,[v.value?(o(),u(Be,{key:0,now:i.value,pageData:y.value,ref_key:"pageOuterRef",ref:p,onResetAllData:A},null,8,["now","pageData"])):n("",!0)])])],32))}},[["__scopeId","data-v-ed3a0bff"]]);export{Qe as default};
