import{T as e}from"./TLoading-Ddb41XUP.js";import{r as a,x as t,J as l,o as s,j as n,k as o,m as r,n as i,p as u,w as d,F as c,A as p,u as v,B as y,D as m,y as g,H as k,I as _,C as f,L as w,P as b,Q as h,v as j,E as x}from"./lib-CgYB7YUQ.js";import{l as C}from"./logo2-l66aD4rS.js";import{r as D,n as S}from"./index-DBr3Z3sO.js";import{a as U,r as O,j as J}from"./file-C3RgH22k.js";import{_ as E}from"./_plugin-vue_export-helper-BCo6x5W8.js";import{u as I,r as z}from"./index-sxE58Fwm.js";import{s as T,u as N,a as q}from"./promptSetting-C_QXIw1m.js";/* empty css                                                                 */const F={class:"resoure-data-body"},L={class:"data-area"},P={class:"name"},R={class:"data-content-area"},A={class:"data-content-box"},B={key:1,class:"data-content-colors"},H={class:"data-content-colors-info"},Q={class:"data-image-area"},G=["src"],K=E({__name:"resourceData",props:["type","data"],emits:["review"],setup(e,{expose:f,emit:w}){const b=e,h=w,j=a({});t(b,"data");const x=b.type,C=()=>{h("review",j.value.cloud_folder,j.value.colors)};l(j,(()=>{C()}),{deep:!0}),l(j.value.colors,(()=>{C()}));const D={prompts:[{name:"资源描述",type:"string",key:"description"},{name:"关键词语",type:"arr",key:"keywords"},{name:"触发词语",type:"string",key:"trigger"},{name:"资源权重",type:"string",key:"server_type"},{name:"资源地址",type:"string",key:"cloud_folder"},{name:"预览图地址",type:"string",key:"preview"},{name:"lora",type:"string",key:"lora"}],statics:[{name:"资源描述",type:"string",key:"description"},{name:"关键词语",type:"arr",key:"keywords"},{name:"资源文件夹",type:"string",key:"cloud_folder"},{name:"预览图地址",type:"string",key:"preview"}],texts:[{name:"资源描述",type:"string",key:"description"},{name:"关键词语",type:"arr",key:"keywords"},{name:"字体地址",type:"string",key:"font"},{name:"资源路径",type:"string",key:"cloud_folder"},{name:"字体大小",type:"string",key:"font_size"},{name:"字体颜色",type:"color",key:"font_color"}],colors:[{name:"资源描述",type:"string",key:"description"},{name:"关键词语",type:"arr",key:"keywords"},{name:"调色板",type:"colors",key:"colors"}]};return s((()=>{D[x].forEach((({key:e,type:a})=>{"arr"===a?j.value[e]=b.data[e]?b.data[e].join(","):"":"string"===a?j.value[e]=b.data[e]:"color"===a?j.value[e]=U(b.data[e]):"colors"===a&&(b.data[e]&&(j.value[e]=b.data[e].map((e=>({color:U(e.color),description:e.description})))),j.value[e]&&j.value[e].length||(j.value[e]=[{color:"rgba(0,0,0,0)",description:""}]))})),j.value.resource_name=b.data.resource_name,j.value.preview=b.data.preview})),f({getSaveData:()=>{let e={};return D[x].forEach((({key:a,type:t})=>{"arr"===t?e[a]=j.value[a].split(","):"string"===t?e[a]=j.value[a]:"color"===t?e[a]=O(j.value[a]):"colors"===t&&(e[a]=j.value[a].map((e=>({color:O(e.color),description:e.description}))))})),e.resource_name=j.value.resource_name,e.preview=j.value.preview,e}}),(e,a)=>{const t=n("n-input"),l=n("n-color-picker"),s=n("n-button"),f=n("n-scrollbar");return o(),r("div",F,[i("div",L,[i("div",P,[u(t,{style:{"--n-padding-left":"0px !important","--n-font-size":"0.833rem !important"},placeholder:"请输入名称",class:"data-content-input editor-setting-input",value:j.value.resource_name,"onUpdate:value":a[0]||(a[0]=e=>j.value.resource_name=e)},null,8,["value"])]),i("div",R,[i("div",A,[u(f,null,{default:d((()=>[(o(!0),r(c,null,p(D[v(x)],(e=>(o(),r("div",{class:"data-content-item",key:e.name},[i("label",null,y(e.name),1),"color"===e.type?(o(),m(l,{key:0,value:j.value[e.key],"onUpdate:value":a=>j.value[e.key]=a},null,8,["value","onUpdate:value"])):"colors"===e.type?(o(),r("div",B,[i("div",H,[(o(!0),r(c,null,p(j.value[e.key],((n,i)=>(o(),r("div",{class:"data-content-colors-item",key:i},[u(l,{modes:["rgb"],"render-label":()=>"",value:j.value[e.key][i].color,"onUpdate:value":a=>j.value[e.key][i].color=a,style:{width:"0.9rem",color:"transparent","margin-right":"0.2rem"}},null,8,["value","onUpdate:value"]),u(t,{class:"data-content-input editor-setting-input",style:{flex:"1"},value:j.value[e.key][i].description,"onUpdate:value":a=>j.value[e.key][i].description=a},null,8,["value","onUpdate:value"]),i===j.value[e.key].length-1?(o(),m(s,{key:0,strong:"",secondary:"",type:"success",style:{width:"1rem","margin-left":"0.5rem"},onClick:a=>j.value[e.key].push({color:"rgba(255,255,255,1)",description:""})},{default:d((()=>a[1]||(a[1]=[g("+")]))),_:2},1032,["onClick"])):k("",!0)])))),128))])])):(o(),m(t,{key:2,class:"data-content-input editor-setting-input",value:j.value[e.key],"onUpdate:value":[a=>j.value[e.key]=a,C]},null,8,["value","onUpdate:value"]))])))),128))])),_:1})])])]),i("div",Q,["colors"!==v(x)?(o(),r("img",{key:0,src:j.value.preview},null,8,G)):(o(),r("div",{key:1,class:"color-view",style:_({backgroundColor:j.value.colors&&j.value.colors[0]?j.value.colors[0].color:"rgba(0,0,0,0)"})},null,4))])])}}},[["__scopeId","data-v-cae7e734"]]),M=E({__name:"dataCard",props:{data:{type:Object,default:()=>({preview:null,name:null})},type:{default:"image"}},setup(e){const{publicStore:l}=I(),s=t(l,"isCarryOut"),i=e,u=a([]),d=a(!0),c=a("imageDom"),p=()=>{u.value=[]};return(a,t)=>{const l=n("n-image");return o(),r("div",{class:f(["data-item",{expand:!s.value}])},[d.value&&"image"===e.type?(o(),m(l,{key:0,ref_key:"imageDom",ref:c,width:"100%","object-fit":"cover","preview-disabled":"",onClose:p,"preview-src-list":u.value,src:i.data.preview,class:"model-image",fit:"contain"},null,8,["preview-src-list","src"])):k("",!0),"color"===e.type?(o(),r("div",{key:1,class:"color-view",style:_({backgroundColor:e.data.preview})},null,4)):k("",!0)],2)}}},[["__scopeId","data-v-930bc3ba"]]),V={class:"image-card"},W={class:"image-area"},X={class:"prompts cn"},Y={class:"prompts en"},Z=E({__name:"imagePreview",props:["to"],setup(e,{expose:t}){w();const l=a(!1),s=a(null),r=w(),c=a(null),p=a(null),g=async e=>{try{await navigator.clipboard.writeText(e),r.success("复制成功")}catch(a){const t=document.createElement("textarea");t.style.userSelect="text",t.value=e,document.body.appendChild(t),t.select(),document.getSelection().toString()?(document.execCommand("copy"),document.body.removeChild(t),r.success("复制成功")):r.error("复制失败,找不到选中文本")}};return t({init:e=>{s.value=e.file_path,c.value=e.prompt_cn,p.value=e.prompt_en,l.value=!0}}),(e,a)=>{const t=n("n-image"),r=n("n-button"),k=n("n-modal");return o(),m(k,{show:l.value,"onUpdate:show":a[2]||(a[2]=e=>l.value=e),"auto-focus":!1},{default:d((()=>[i("div",V,[i("div",W,[u(t,{src:s.value,width:"100%",class:"image","object-fit":"cover","preview-disabled":""},null,8,["src"])]),i("div",X,[u(r,{text:"",class:"copy-btn",onClick:a[0]||(a[0]=e=>g(c.value))},{default:d((()=>[i("i",{class:f(["bi",v(D)])},null,2)])),_:1}),i("div",null,[a[3]||(a[3]=i("label",null,"中文prompt",-1)),i("span",null,y(c.value),1)])]),i("div",Y,[u(r,{text:"",class:"copy-btn",onClick:a[1]||(a[1]=e=>g(p.value))},{default:d((()=>[i("i",{class:f(["bi",v(D)])},null,2)])),_:1}),i("div",null,[a[4]||(a[4]=i("label",null,"英文prompt",-1)),i("span",null,y(p.value),1)])])])])),_:1},8,["show"])}}},[["__scopeId","data-v-fdd52ed6"]]),$={class:"resoure-data-body"},ee={class:"resoure-data-title"},ae={class:"data-area"},te={class:"name"},le={class:"data-content-area"},se={class:"data-content-box"},ne={class:"data-image-area"},oe=["src"],re={class:"json-input"},ie={class:"json-code"},ue=E({__name:"resourceJsonData",props:["type","data"],setup(e,{expose:l}){const m=w();b.registerLanguage("json",h);const g=e,k=t(g,"data"),_=g.type;a('{\n  "a":12346,\n  "b":"text"\n}');const f={designs:[{name:"预览图地址",type:"string",key:"preview"}]};return s((()=>{f[_].forEach((({key:e,type:a})=>{"string"===a&&(k.value[e]=g.data[e])})),k.value.preview=g.data.preview})),l({getSaveData:()=>{let e=null;try{e=JSON.parse(JSON.stringify(k.value)),e.data=JSON.parse(e.data)}catch(a){throw m.error("json格式错误"),new Error("json格式错误")}return e}}),(e,a)=>{const t=n("n-input"),l=n("n-scrollbar"),s=n("n-code"),m=n("n-config-provider");return o(),r("div",$,[i("div",ee,[i("div",ae,[i("div",te,[u(t,{style:{"--n-padding-left":"0px !important","--n-font-size":"0.833rem !important"},placeholder:"请输入名称",class:"data-content-input editor-setting-input",value:k.value.resource_name,"onUpdate:value":a[0]||(a[0]=e=>k.value.resource_name=e)},null,8,["value"])]),i("div",le,[i("div",se,[u(l,null,{default:d((()=>[(o(!0),r(c,null,p(f[v(_)],(a=>(o(),r("div",{class:"data-content-item",key:a.name},[i("label",null,y(a.name),1),u(t,{class:"data-content-input editor-setting-input",value:k.value[a.key],"onUpdate:value":[e=>k.value[a.key]=e,e.review]},null,8,["value","onUpdate:value"])])))),128))])),_:1})])])]),i("div",ne,[i("img",{src:k.value.preview},null,8,oe)])]),i("div",re,[u(t,{rows:10,type:"textarea",value:k.value.data,"onUpdate:value":a[1]||(a[1]=e=>k.value.data=e)},null,8,["value"])]),i("div",ie,[u(m,{hljs:v(b)},{default:d((()=>[u(s,{"show-line-numbers":"",code:k.value.data,language:"json"},null,8,["code"])])),_:1},8,["hljs"])])])}}},[["__scopeId","data-v-dc6ea4c0"]]);function de(e){return z.post("/oplus/query_cloud_folder",e)}const ce={class:"resoure-info-body"},pe={class:"resoure-info-title"},ve={class:"logo-area"},ye=["src"],me={class:"data-area"},ge={key:2,class:"empty-block"},ke=E({__name:"index",setup(t){const l=w();j();const g=x(),_=g.query.type,b={prompts:"动态资源",statics:"静态资源",texts:"文字资源",colors:"调色板资源",designs:"设计理念"},h=a(null),D=a(null),U=a(null);let O=g.query.id;const E=a({}),I=a({}),z=a({}),F=()=>{let e=null;"designs"!==_?(e=D.value.getSaveData(),e=Object.assign(e,z.value)):e=U.value.getSaveData(),e.resource_type=_;const a=J("designs"!==_?e:e.data,e.resource_name),t=new FormData;t.append("file",a),T(e,t).then((e=>{200===e.code&&l.success("保存成功")}))},L=()=>{let e=null;"designs"!==_?(e=D.value.getSaveData(),e=Object.assign(z.value,e)):(e=U.value.getSaveData(),e=Object.assign(z.value,e)),e.resource_id=O,e.resource_type=_;const a=J("designs"!==_?e:e.data,e.resource_name),t=new FormData;t.append("file",a),N(e,t).then((e=>{200===e.code&&l.success("保存成功")}))},P=(e,a)=>{e&&de({folder_path:e,page:1,page_size:1e5}).then((e=>{E.value=e.data})),a&&(E.value=a)};return s((()=>{O&&q(O).then((e=>{if(200===e.code){if("designs"===_)I.value={preview:e.info.preview,data:JSON.stringify(e.data,null,2)};else{const a=e.data;a.preview=e.info.preview,I.value=a}z.value=e.info,I.value.resource_name=e.info.resource_name,e.data.cloud_folder&&de({folder_path:e.data.cloud_folder,page:1,page_size:1e5}).then((e=>{E.value=e.data}))}})),window.loading||(window.loading=e()),setTimeout((()=>{window.loading&&(window.loading.close(),window.loading=null)}),300)})),(e,a)=>{const t=n("n-scrollbar");return o(),r("div",ce,[i("div",pe,[i("div",ve,[i("img",{src:v(C)},null,8,ye)]),i("div",null,[i("label",{onClick:a[0]||(a[0]=e=>{window.history.back()})},y(b[v(_)]),1),i("i",{class:f(["bi logo-icon",v(S)])},null,2)]),i("div",{class:"save-btn",onClick:a[1]||(a[1]=e=>{O?L():F()})},"保存资料")]),i("div",me,[u(t,null,{default:d((()=>["designs"===v(_)?(o(),m(ue,{key:0,ref_key:"resourceJsonDataRef",ref:U,type:v(_),data:I.value},null,8,["type","data"])):k("",!0),"designs"===v(_)||!Object.keys(I.value).length&&v(O)?k("",!0):(o(),m(K,{key:1,ref_key:"resourceDataRef",ref:D,type:v(_),data:I.value,onReview:P},null,8,["type","data"])),"designs"!==v(_)?(o(),r("div",ge)):k("",!0),"designs"!==v(_)&&"colors"!==v(_)?(o(!0),r(c,{key:3},p(E.value,(e=>(o(),m(M,{key:e.template_id,onClick:a=>{return t=e,void h.value.init(t);var t},data:{name:e.template_name,preview:e.thumbnail}},null,8,["onClick","data"])))),128)):k("",!0),"colors"===v(_)?(o(!0),r(c,{key:4},p(E.value,((e,a)=>(o(),m(M,{key:a,type:"color",data:{name:e.description,preview:e.color}},null,8,["data"])))),128)):k("",!0)])),_:1})]),u(Z,{ref_key:"imagePreviewDom",ref:h},null,512)])}}},[["__scopeId","data-v-5aa70f5d"]]);export{ke as default};
