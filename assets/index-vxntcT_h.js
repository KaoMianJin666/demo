import{T as e}from"./TLoading-iM_Jx5sS.js";import{r as a,x as t,I as l,o as s,j as n,k as o,m as r,n as i,p as u,w as d,F as c,A as p,u as v,B as m,D as y,y as g,H as _,C as f,L as k,P as w,Q as b,v as h,E as j}from"./lib-CGZrokFx.js";import{l as x}from"./logo2-l66aD4rS.js";import{r as D,n as C}from"./index-DBr3Z3sO.js";import{a as S,r as U,j as O}from"./file-C3RgH22k.js";import{_ as I}from"./_plugin-vue_export-helper-BCo6x5W8.js";import{u as J,r as z}from"./index-CycG4A1b.js";import{s as E,u as T,a as N}from"./promptSetting-JG4oS3dx.js";/* empty css                                                                 */const q={class:"resoure-data-body"},F={class:"data-area"},L={class:"name"},P={class:"data-content-area"},R={class:"data-content-box"},A={key:1,class:"data-content-colors"},B={class:"data-content-colors-info"},H={class:"data-image-area"},Q=["src"],G=I({__name:"resourceData",props:["type","data"],emits:["review"],setup(e,{expose:f,emit:k}){const w=e,b=k,h=a({});t(w,"data");const j=w.type,x=()=>{b("review",h.value.cloud_folder)};l(h,(()=>{x()}));const D={prompts:[{name:"资源描述",type:"string",key:"description"},{name:"关键词语",type:"arr",key:"keywords"},{name:"触发词语",type:"string",key:"trigger"},{name:"资源权重",type:"string",key:"server_type"},{name:"资源地址",type:"string",key:"cloud_folder"},{name:"预览图地址",type:"string",key:"preview"},{name:"lora",type:"string",key:"lora"}],statics:[{name:"资源描述",type:"string",key:"description"},{name:"关键词语",type:"arr",key:"keywords"},{name:"资源文件夹",type:"string",key:"cloud_folder"},{name:"预览图地址",type:"string",key:"preview"}],texts:[{name:"资源描述",type:"string",key:"description"},{name:"关键词语",type:"arr",key:"keywords"},{name:"字体地址",type:"string",key:"font"},{name:"资源路径",type:"string",key:"cloud_folder"},{name:"字体大小",type:"string",key:"font_size"},{name:"字体颜色",type:"color",key:"font_color"}],colors:[{name:"资源描述",type:"string",key:"description"},{name:"关键词语",type:"arr",key:"keywords"},{name:"调色板",type:"colors",key:"colors"}]};return s((()=>{D[j].forEach((({key:e,type:a})=>{"arr"===a?h.value[e]=w.data[e]?w.data[e].join(","):"":"string"===a?h.value[e]=w.data[e]:"color"===a?h.value[e]=S(w.data[e]):"colors"===a&&(h.value[e]=w.data[e].map((e=>({color:S(e.color),description:e.description}))))})),h.value.resource_name=w.data.resource_name,h.value.preview=w.data.preview})),f({getSaveData:()=>{let e={};return D[j].forEach((({key:a,type:t})=>{"arr"===t?e[a]=h.value[a].split(","):"string"===t?e[a]=h.value[a]:"color"===t?e[a]=U(h.value[a]):"colors"===t&&(e[a]=h.value[a].map((e=>({color:U(e.color),description:e.description}))))})),e.resource_name=h.value.resource_name,e.preview=h.value.preview,e}}),(e,a)=>{const t=n("n-input"),l=n("n-color-picker"),s=n("n-button"),f=n("n-scrollbar");return o(),r("div",q,[i("div",F,[i("div",L,[u(t,{style:{"--n-padding-left":"0px !important","--n-font-size":"0.833rem !important"},placeholder:"请输入名称",class:"data-content-input editor-setting-input",value:h.value.resource_name,"onUpdate:value":a[0]||(a[0]=e=>h.value.resource_name=e)},null,8,["value"])]),i("div",P,[i("div",R,[u(f,null,{default:d((()=>[(o(!0),r(c,null,p(D[v(j)],(e=>(o(),r("div",{class:"data-content-item",key:e.name},[i("label",null,m(e.name),1),"color"===e.type?(o(),y(l,{key:0,value:h.value[e.key],"onUpdate:value":a=>h.value[e.key]=a},null,8,["value","onUpdate:value"])):"colors"===e.type?(o(),r("div",A,[i("div",B,[(o(!0),r(c,null,p(h.value[e.key],((n,i)=>(o(),r("div",{class:"data-content-colors-item",key:i},[u(l,{modes:["rgb"],"render-label":()=>"",value:h.value[e.key][i].color,"onUpdate:value":a=>h.value[e.key][i].color=a,style:{width:"0.9rem",color:"transparent","margin-right":"0.2rem"}},null,8,["value","onUpdate:value"]),u(t,{class:"data-content-input editor-setting-input",style:{flex:"1"},value:h.value[e.key][i].description,"onUpdate:value":a=>h.value[e.key][i].description=a},null,8,["value","onUpdate:value"]),i===h.value[e.key].length-1?(o(),y(s,{key:0,strong:"",secondary:"",type:"success",style:{width:"1rem","margin-left":"0.5rem"},onClick:a=>h.value[e.key].push({color:"rgba(255,255,255,1)",description:""})},{default:d((()=>a[1]||(a[1]=[g("+")]))),_:2},1032,["onClick"])):_("",!0)])))),128))])])):(o(),y(t,{key:2,class:"data-content-input editor-setting-input",value:h.value[e.key],"onUpdate:value":[a=>h.value[e.key]=a,x]},null,8,["value","onUpdate:value"]))])))),128))])),_:1})])])]),i("div",H,[i("img",{src:h.value.preview},null,8,Q)])])}}},[["__scopeId","data-v-475e413d"]]),K=I({__name:"dataCard",props:{data:{type:Object,default:()=>({preview:null,name:null})}},setup(e){const{publicStore:l}=J(),s=t(l,"isCarryOut"),i=e,u=a([]),d=a(!0),c=a("imageDom"),p=()=>{u.value=[]};return(e,a)=>{const t=n("n-image");return o(),r("div",{class:f(["data-item",{expand:!s.value}])},[d.value?(o(),y(t,{key:0,ref_key:"imageDom",ref:c,width:"100%","object-fit":"cover","preview-disabled":"",onClose:p,"preview-src-list":u.value,src:i.data.preview,class:"model-image",fit:"contain"},null,8,["preview-src-list","src"])):_("",!0)],2)}}},[["__scopeId","data-v-45079080"]]),M={class:"image-card"},V={class:"image-area"},W={class:"prompts cn"},X={class:"copy-btn"},Y={class:"prompts en"},Z={class:"copy-btn"},$=I({__name:"imagePreview",props:["to"],setup(e,{expose:t}){k();const l=a(!1),s=a(null),r=k(),c=a(null),p=a(null),g=e=>{try{navigator.clipboard.writeText(e).then((()=>{r.info("复制成功")})).catch((e=>{}))}catch(t){var a=document.createElement("textarea");a.style.position="fixed",a.style.opacity=0,a.value=e,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),r.info("复制成功")}};return t({init:e=>{s.value=e.file_path,c.value=e.prompt_cn,p.value=e.prompt_en,l.value=!0}}),(e,a)=>{const t=n("n-image"),r=n("n-modal");return o(),y(r,{show:l.value,"onUpdate:show":a[2]||(a[2]=e=>l.value=e),"auto-focus":!1},{default:d((()=>[i("div",M,[i("div",V,[u(t,{src:s.value,width:"100%",class:"image","object-fit":"cover","preview-disabled":""},null,8,["src"])]),i("div",W,[i("div",X,[i("i",{class:f(["bi",v(D)]),onClick:a[0]||(a[0]=e=>g(c.value))},null,2)]),i("div",null,[a[3]||(a[3]=i("label",null,"中文prompt",-1)),i("span",null,m(c.value),1)])]),i("div",Y,[i("div",Z,[i("i",{class:f(["bi",v(D)]),onClick:a[1]||(a[1]=e=>g(p.value))},null,2)]),i("div",null,[a[4]||(a[4]=i("label",null,"英文prompt",-1)),i("span",null,m(p.value),1)])])])])),_:1},8,["show"])}}},[["__scopeId","data-v-5f963575"]]),ee={class:"resoure-data-body"},ae={class:"resoure-data-title"},te={class:"json-input"},le={class:"json-code"},se=I({__name:"resourceJsonData",props:["type","data"],setup(e,{expose:l}){const s=k();w.registerLanguage("json",b);const c=e,p=t(c,"data");c.type,a('{\n  "a":12346,\n  "b":"text"\n}');return l({getSaveData:()=>{let e=null;try{e=JSON.parse(JSON.stringify(p.value)),e.data=JSON.parse(e.data)}catch(a){throw s.error("json格式错误"),new Error("json格式错误")}return e}}),(e,a)=>{const t=n("n-input"),l=n("n-code"),s=n("n-config-provider");return o(),r("div",ee,[i("div",ae,[u(t,{style:{"--n-padding-left":"0px !important","--n-font-size":"0.833rem !important"},placeholder:"请输入名称",class:"data-content-input editor-setting-input",value:p.value.resource_name,"onUpdate:value":a[0]||(a[0]=e=>p.value.resource_name=e)},null,8,["value"])]),i("div",te,[u(t,{rows:10,type:"textarea",value:p.value.data,"onUpdate:value":a[1]||(a[1]=e=>p.value.data=e)},null,8,["value"])]),i("div",le,[u(s,{hljs:v(w)},{default:d((()=>[u(l,{"show-line-numbers":"",code:p.value.data,language:"json"},null,8,["code"])])),_:1},8,["hljs"])])])}}},[["__scopeId","data-v-4f2e65d7"]]);function ne(e){return z.post("/oplus/query_cloud_folder",e)}const oe={class:"resoure-info-body"},re={class:"resoure-info-title"},ie={class:"logo-area"},ue=["src"],de={class:"data-area"},ce={key:2,class:"empty-block"},pe=I({__name:"index",setup(t){const l=k();h();const g=j(),w=g.query.type,b={prompts:"动态资源",statics:"静态资源",texts:"文字资源",colors:"调色板资源",designs:"设计理念"},D=a(null),S=a(null),U=a(null);let I=g.query.id;const J=a({}),z=a({}),q=a({}),F=()=>{let e=null;"designs"!==w?(e=S.value.getSaveData(),e=Object.assign(e,q.value)):e=U.value.getSaveData(),e.resource_type=w;const a=O("designs"!==w?e:e.data,e.resource_name),t=new FormData;t.append("file",a),E(e,t).then((e=>{200===e.code&&l.success("保存成功")}))},L=()=>{let e=null;"designs"!==w?(e=S.value.getSaveData(),e=Object.assign(q.value,e)):(e=U.value.getSaveData(),e=Object.assign(q.value,e)),e.resource_id=I,e.resource_type=w;const a=O("designs"!==w?e:e.data,e.resource_name),t=new FormData;t.append("file",a),T(e,t).then((e=>{200===e.code&&l.success("保存成功")}))},P=e=>{e&&ne({folder_path:e,page:1,page_size:1e5}).then((e=>{J.value=e.data}))};return s((()=>{I&&N(I).then((e=>{if(200===e.code){if("designs"===w)z.value.data=JSON.stringify(e.data,null,2);else{const a=e.data;a.preview=e.info.preview,z.value=a}q.value=e.info,z.value.resource_name=e.info.resource_name,e.data.cloud_folder&&ne({folder_path:e.data.cloud_folder,page:1,page_size:1e5}).then((e=>{J.value=e.data}))}})),window.loading||(window.loading=e()),setTimeout((()=>{window.loading&&(window.loading.close(),window.loading=null)}),300)})),(e,a)=>{const t=n("n-scrollbar");return o(),r("div",oe,[i("div",re,[i("div",ie,[i("img",{src:v(x)},null,8,ue)]),i("div",null,[i("label",{onClick:a[0]||(a[0]=e=>{window.history.back()})},m(b[v(w)]),1),i("i",{class:f(["bi logo-icon",v(C)])},null,2)]),i("div",{class:"save-btn",onClick:a[1]||(a[1]=e=>{I?L():F()})},"保存资料")]),i("div",de,[u(t,null,{default:d((()=>["designs"===v(w)?(o(),y(se,{key:0,ref_key:"resourceJsonDataRef",ref:U,data:z.value},null,8,["data"])):_("",!0),"designs"===v(w)||!Object.keys(z.value).length&&v(I)?_("",!0):(o(),y(G,{key:1,ref_key:"resourceDataRef",ref:S,type:v(w),data:z.value,onReview:P},null,8,["type","data"])),"designs"!==v(w)?(o(),r("div",ce)):_("",!0),"designs"!==v(w)?(o(!0),r(c,{key:3},p(J.value,(e=>(o(),y(K,{key:e.template_id,onClick:a=>{return t=e,void D.value.init(t);var t},data:{name:e.template_name,preview:e.thumbnail}},null,8,["onClick","data"])))),128)):_("",!0)])),_:1})]),u($,{ref_key:"imagePreviewDom",ref:D},null,512)])}}},[["__scopeId","data-v-ac00443b"]]);export{pe as default};
