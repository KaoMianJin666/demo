import{u as e,r as a,o as s,h as t,i,k as l,w as r,j as n,m as o,t as c,z as p,F as d,l as m,c as g,K as v,p as u,n as f}from"./lib.2626f9a7.js";import{_,r as h}from"./index.71ee6279.js";const w={class:"viewer-body"},b={class:"back-btn-area"},y={class:"title inline"},$={class:"viewer-input-area"},k={class:"viewer-image-area"},j=(e=>(u("data-v-03730862"),e=e(),f(),e))((()=>i("div",{class:"title"},"图片列表",-1))),x={class:"viewer-images"},L={class:"image-list"},O={class:"image-item"};var z=_({__name:"imageViewer",props:{imageList:{type:Array,default:()=>[]},title:{type:String,default:"默认标题"}},setup(u){const f=e(),_=u,h=()=>{f.go(-1)};return(e,u)=>{const f=a("el-icon"),z=a("el-image"),A=a("el-col"),C=a("el-row"),D=a("el-scrollbar");return s(),t("div",w,[i("div",b,[i("div",{class:"back-btn inline",onClick:h},[l(f,{style:{"vertical-align":"text-bottom"}},{default:r((()=>[l(n(v))])),_:1}),o(" 返回 ")]),i("div",y,c(_.title),1)]),i("div",$,[p(e.$slots,"input",{},void 0,!0)]),i("div",k,[j,i("div",x,[l(D,null,{default:r((()=>[i("div",L,[l(C,{gutter:20},{default:r((()=>[(s(!0),t(d,null,m(_.imageList,(e=>(s(),g(A,{span:3,key:e},{default:r((()=>[i("div",O,[l(z,{style:{width:"100%",height:"100%"},src:e,"hide-on-click-modal":"","preview-src-list":[e]},null,8,["src","preview-src-list"])])])),_:2},1024)))),128))])),_:1})])])),_:1})])])])}}},[["__scopeId","data-v-03730862"]]);const A=()=>h.get("/1n/get_prompt"),C=e=>h.post(`/1n/gen?prompt=${e}`),D=({formData:e,prompt:a,width:s,height:t,ref_type:i,ref_sim:l})=>h.post(`/1n/gen?prompt=${a}&width=${s}&height=${t}&ref_type=${i}&ref_sim=${l}`,e),E=({params:e,data:a})=>{let s="?";return Object.keys(e).forEach(((a,t)=>{s+=`${a}=${e[a]}`,t!==Object.keys(e).length-1&&(s+="&")})),h.post(`/1n/gen${s}`,a)};export{C as a,D as b,E as c,A as g,z as i};
