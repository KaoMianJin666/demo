import{r as e,o as a,c as t,u as l,a as s,b as i,d as n,e as o,f as r,g as d,h as c,w as u,F as h,i as m,j as v,t as g,p,k as f,l as w,m as A,E as I,n as b,q as y,s as D,v as k,C as V,x,y as L,z as R,A as C,B as S,D as j,G as N}from"./lib.026ec9d9.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();var W=(e,a)=>{const t=e.__vccOpts||e;for(const[l,s]of a)t[l]=s;return t};var E=W({},[["render",function(l,s){const i=e("RouterView");return a(),t(i,{id:"main-view"})}]]);const Y=e=>(p("data-v-aaa9af94"),e=e(),f(),e),T={class:"nav-bar-body"},O={class:"logo-area"},U=["src"],Z={class:"router-link-area"},M={width:"14",style:{"margin-right":"10px"},height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},P=[Y((()=>r("path",{d:"M1 6.36368L7 1.45459L13 6.36368V14H1V6.36368Z",stroke:"white","stroke-width":"1.2"},null,-1))),Y((()=>r("path",{d:"M4.82031 10.7272C4.82031 9.52224 5.79715 8.54541 7.00213 8.54541V8.54541C8.20712 8.54541 9.18395 9.52224 9.18395 10.7272V14H4.82031V10.7272Z",stroke:"white","stroke-width":"1.2"},null,-1)))],F=Y((()=>r("div",{class:"user-phone-no"}," 188 8888 8888 ",-1))),Q=Y((()=>r("div",{class:"line"},null,-1))),X=Y((()=>r("div",{class:"logout-btn"},[r("span",null,"退出")],-1)));var G=W({__name:"navBar",setup(t){const p=l(),f=s(),w=[{name:"图生图",path:"ImageGenerationImage"},{name:"Ai换脸",path:"swapFace"}];let A=i("1");const I=e=>{p.push(w[Number(e)].path)};return n((()=>{A.value=String(w.findIndex((e=>e.path===f.name)))})),(t,l)=>{const s=e("el-menu-item"),i=e("el-menu");return a(),o("div",T,[r("div",O,[r("img",{src:d("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABSCAYAAAALvCwcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MThBRjRERjM3Q0I5MTFFRTlDQ0FEMTY4RDhCNTg0RkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MThBRjRERjQ3Q0I5MTFFRTlDQ0FEMTY4RDhCNTg0RkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOEFGNERGMTdDQjkxMUVFOUNDQUQxNjhEOEI1ODRGRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOEFGNERGMjdDQjkxMUVFOUNDQUQxNjhEOEI1ODRGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgnCosYAAA7KSURBVHja7F3t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")},null,8,U)]),r("div",Z,[c(i,{"background-color":"#22335D","text-color":"#ffffff","default-active":d(A),class:"el-menu-demo",mode:"horizontal",onSelect:I},{default:u((()=>[(a(),o(h,null,m(w,((e,t)=>c(s,{key:t,index:String(t)},{default:u((()=>[(a(),o("svg",M,P)),v(" "+g(e.name),1)])),_:2},1032,["index"]))),64))])),_:1},8,["default-active"])]),r("div",{class:"handle-area"},[F,Q,r("div",{class:"user-profile-image"},[r("img",{src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})]),X])])}}},[["__scopeId","data-v-aaa9af94"]]);const H={class:"home-body"},q={class:"home-child-view"};var B=W({__name:"index",setup:t=>(t,l)=>{const s=e("router-view");return a(),o("div",H,[c(G),r("div",q,[c(s)])])}},[["__scopeId","data-v-f24c8a92"]]);const _=e=>(p("data-v-4dd467d8"),e=e(),f(),e),z={class:"main-body"},J={class:"image-area"},K=_((()=>r("div",{class:"main-title"},"参考图",-1))),$={class:"image-all"},ee={class:"image-item upload-image-area"},ae={class:"upload-text-tips"},te=_((()=>r("div",{class:"upload-text"},"点击上传",-1))),le={class:"other-images"},se={class:"other-images-view-box"},ie={class:"del-btn"},ne={class:"image-handl-area"},oe=_((()=>r("label",null,"权重",-1))),re=_((()=>r("div",{class:"main-title"},null,-1))),de={class:"bottom-area"},ce={class:"handle-area"},ue=_((()=>r("div",{class:"main-title"},"正向提示词",-1))),he={class:"handle-item"},me=_((()=>r("div",{class:"main-title"},"负向提示词",-1))),ve={class:"handle-item"},ge={class:"handle-item"},pe={class:"handle-min"},fe=_((()=>r("div",{class:"main-title"},"风格",-1))),we={class:"handle-min"},Ae=_((()=>r("div",{class:"main-title"},"相似度",-1))),Ie={class:"handle-min-slider"},be={class:"handle-min"},ye=_((()=>r("div",{class:"main-title"},"宽度",-1))),De={class:"handle-min"},ke=_((()=>r("div",{class:"main-title"},"高度",-1))),Ve=_((()=>r("div",{class:"main-title"},"线稿参考图",-1))),xe={class:"handle-item bg"},Le={class:"line-draft-image-area"},Re={class:"upload-image-area-other"},Ce=["src"],Se={key:1,class:"upload-text-tips"},je=_((()=>r("div",{class:"upload-text"},"点击上传",-1))),Ne={class:"image-handl-area"},We=_((()=>r("label",null,"权重",-1))),Ee={class:"generate-btn"},Ye={class:"review-area"},Te="https://u248120-87de-6175a03c.westc.gpuhub.com:8443";var Oe=W({__name:"index",setup(l){const s=i([]),g=i(null),p=i(null),f=i([]),V=i(null),x=i(70),L=i(""),R=i(""),C=i(1024),S=i(1024),j=i(70),N=i(""),W=e=>{const a=new FileReader;return a.onload=({target:a})=>{s.value.length>=5||s.value.push({file:e,url:a.result,weight:100})},a.readAsDataURL(e),!1},E=e=>{g.value=e;const a=new FileReader;return a.onload=({target:e})=>{p.value=e.result},a.readAsDataURL(e),!1},Y=()=>{g.value=null,p.value=null},T=()=>{if(!s.value.length)return I.error("请至少上传一张参考图"),!1;if(!V.value)return I.error("请选择风格后操作"),!1;const e=(()=>{const e=new FormData;return e.append("base_model",V.value),g.value&&(e.append("lineart",g.value||""),e.append("lineart_weight",x.value/100)),e.append("positive_prompt",L.value),e.append("negative_prompt",R.value),e.append("ref_num",j.value/100),e.append("width",C.value),e.append("reheight",S.value),s.value.forEach((({weight:a,file:t})=>{e.append("weights",a/100),e.append("files",t)})),e})();A.post(`${Te}/img2img/gen`,e).then((e=>{N.value=`${Te}/img2img/${e.data}`}))};return n((()=>{A.get(`${Te}/img2img/base_models`).then((e=>{Object.keys(e.data).forEach((a=>{f.value.push({name:a,value:e.data[a]})}))}))})),(l,i)=>{const n=e("el-icon"),g=e("el-upload"),A=e("el-image"),I=e("el-slider"),O=e("el-scrollbar"),U=e("el-input"),Z=e("el-option"),M=e("el-select"),P=e("el-input-number"),F=e("el-button");return a(),o("div",z,[r("div",J,[K,r("div",$,[r("div",ee,[c(g,{class:"avatar-uploader",drag:"",multiple:"",limit:5,disabled:s.value.length>=5,action:"","show-file-list":!1,"before-upload":W},{default:u((()=>[r("div",ae,[c(n,{class:"avatar-uploader-icon"},{default:u((()=>[c(d(y))])),_:1}),te])])),_:1},8,["disabled"])]),r("div",le,[c(O,null,{default:u((()=>[r("div",se,[(a(!0),o(h,null,m(s.value,((e,t)=>(a(),o("div",{class:"image-item",key:t},[c(A,{style:{width:"150px",height:"150px"},src:e.url},null,8,["src"]),r("div",ie,[c(n,{style:{color:"red"},onClick:e=>(e=>{s.value.splice(e,1)})(t)},{default:u((()=>[c(d(D))])),_:2},1032,["onClick"])]),r("div",ne,[oe,c(I,{modelValue:e.weight,"onUpdate:modelValue":a=>e.weight=a,style:{width:"calc(100% - 50px)"},min:0,max:100,size:"small"},null,8,["modelValue","onUpdate:modelValue"])])])))),128))])])),_:1})])])]),re,r("div",de,[r("div",ce,[c(O,null,{default:u((()=>[ue,r("div",he,[c(U,{type:"textarea",modelValue:L.value,"onUpdate:modelValue":i[0]||(i[0]=e=>L.value=e),maxlength:"255"},null,8,["modelValue"])]),me,r("div",ve,[c(U,{type:"textarea",modelValue:R.value,"onUpdate:modelValue":i[1]||(i[1]=e=>R.value=e),maxlength:"255"},null,8,["modelValue"])]),r("div",ge,[r("div",pe,[fe,c(M,{modelValue:V.value,"onUpdate:modelValue":i[2]||(i[2]=e=>V.value=e)},{default:u((()=>[(a(!0),o(h,null,m(f.value,(e=>(a(),t(Z,{key:e.name,value:e.value,label:e.name},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])]),r("div",we,[Ae,r("div",Ie,[c(I,{modelValue:j.value,"onUpdate:modelValue":i[3]||(i[3]=e=>j.value=e)},null,8,["modelValue"])])]),r("div",be,[ye,c(P,{style:{width:"100%"},modelValue:C.value,"onUpdate:modelValue":i[4]||(i[4]=e=>C.value=e),controls:!1,min:1,max:2048},null,8,["modelValue"])]),r("div",De,[ke,c(P,{style:{width:"100%"},modelValue:S.value,"onUpdate:modelValue":i[5]||(i[5]=e=>S.value=e),controls:!1,min:1,max:2048},null,8,["modelValue"])])]),Ve,r("div",xe,[r("div",Le,[r("div",Re,[c(g,{class:"avatar-uploader",drag:"",action:"","show-file-list":!1,"before-upload":E},{default:u((()=>[p.value?(a(),o("div",{key:0,class:"upload-image-del-area",onClick:i[7]||(i[7]=b((()=>{}),["stop"]))},[r("img",{src:p.value,class:"avatar"},null,8,Ce),r("div",{class:"upload-image-del-btn-area",onClick:i[6]||(i[6]=b((()=>{}),["stop"]))},[r("div",{class:"upload-image-del-btn",onClick:b(Y,["stop"])},[c(n,null,{default:u((()=>[c(d(k))])),_:1})])])])):(a(),o("div",Se,[c(n,{class:"avatar-uploader-icon"},{default:u((()=>[c(d(y))])),_:1}),je]))])),_:1})]),r("div",Ne,[We,c(I,{style:{width:"calc(100% - 50px)"},disabled:!p.value,modelValue:x.value,"onUpdate:modelValue":i[8]||(i[8]=e=>x.value=e),min:0,max:100,size:"small"},null,8,["disabled","modelValue"])])])])])),_:1}),r("div",Ee,[c(F,{style:{width:"100%"},type:"primary",onClick:i[9]||(i[9]=e=>T())},{default:u((()=>[v("生成")])),_:1})])]),r("div",Ye,[N.value?(a(),t(A,{key:0,fit:"scale-down",src:N.value,"preview-src-list":[N.value],style:{width:"100%",height:"100%"}},null,8,["src","preview-src-list"])):w("",!0)])])])}}},[["__scopeId","data-v-4dd467d8"]]);class Ue{constructor(e){this.canvasDom=e,this.ctx=e.getContext("2d"),this.canvasDom.width=this.canvasDom.offsetWidth,this.canvasDom.height=this.canvasDom.offsetHeight,this.handleList=[],this.imageData={image:null,x:0,y:0,height:0,width:0},this.listeners={},window.addEventListener("resize",(()=>{this.canvasDom.width=this.canvasDom.offsetWidth,this.canvasDom.height=this.canvasDom.offsetHeight,this.clearSelectionArea(),this.initImage(this.imageData.image.src)}))}handleChange(e){const{canvasDom:a}=this;if("selectionArea"===e)a.style.cursor="crosshair",this.addListener(a,"mousedown",(e=>{this.selectionAreaStart(e)})),this.addListener(a,"mouseup",(e=>{this.selectionAreaFinish(e)})),this.addListener(a,"mousemove",(e=>{this.selectionAreaMoving(e)}));else this.clearHandle()}selectionAreaStart(e){const{offsetX:a,offsetY:t}=e;this.handleList=[],this.handleList.push({handleX:a,handleY:t,status:0,imageData:null})}selectionAreaMoving(e){const{offsetX:a,offsetY:t}=e;this.handleList.length&&0===this.handleList[this.handleList.length-1].status&&(this.handleList[this.handleList.length-1].offsetX=a,this.handleList[this.handleList.length-1].offsetY=t,this.reDraw())}selectionAreaFinish(){this.handleList[this.handleList.length-1].status=1,this.reDraw()}clearHandle(){this.canvasDom.style.cursor="auto",this.removeAllListeners()}initImage(e){const{ctx:a,canvasDom:t}=this,{width:l,height:s}=t;this.handleList=[],a.beginPath(),a.clearRect(0,0,l,s),a.closePath();const i=new Image;i.src=e,i.onload=()=>{this.initImageData(i),this.drawImage()}}initImageData(e){const{canvasDom:a}=this,{width:t,height:l}=a,s=e.width,i=e.height,n={image:e,x:0,y:0,height:0,width:0};if(i>l||s>t)if(i/l>s/t){const e=l/i;n.height=l,n.width=e*s,n.y=0,n.x=t/2-n.width/2}else{const e=t/s;n.width=t,n.height=e*i,n.x=0,n.y=l/2-n.height/2}else if(i>s){const e=l/t;n.height=l,n.width=l/e,n.y=0,n.x=t/2-n.width/2}else{const e=t/l;n.width=t,n.height=t/e,n.y=l/2-n.width/2,n.x=0}this.imageData=n}drawImage(){const{image:e,x:a,y:t,width:l,height:s}=this.imageData,{ctx:i}=this;e&&(i.beginPath(),i.drawImage(e,a,t,l,s),i.closePath())}reDraw(){const{ctx:e,canvasDom:a}=this,{width:t,height:l}=a;e.beginPath(),e.clearRect(0,0,t,l),e.closePath(),this.drawImage(),this.getSelecttionAreaImages(),this.handleList.forEach((({handleX:a,handleY:t,offsetX:l,offsetY:s,status:i})=>{e.beginPath(),e.strokeStyle="rgba(255, 0, 0, 1)",e.lineWidth=2;const n=a>l?l:a,o=t>s?s:t,r=a>l?a-l:l-a,d=t>s?t-s:s-t;(r&&d||!i)&&(e.rect(n,o,r,d),e.stroke(),e.closePath())}))}getSelecttionAreaImages(){this.handleList.forEach(((e,a)=>{const{image:t}=this.imageData,{handleX:l,handleY:s,offsetX:i,offsetY:n,status:o,imageData:r}=e,d=this.canvasDom.width,c=this.canvasDom.height,u=this.imageData.width;this.imageData.height;const h=d===u?c/t.height:d/t.width;if(o&&!r){const o=document.createElement("canvas");o.width=d/h,o.height=c/h;const r=o.getContext("2d"),u=l>i?i:l,m=s>n?n:s,v=l>i?l-i:i-l,g=s>n?s-n:n-s;if(r.beginPath(),r.drawImage(t,this.imageData.x/h,this.imageData.y/h,this.imageData.width/h,this.imageData.height/h),r.clearRect(Math.round(u/h),Math.round(m/h),Math.round(v/h),Math.round(g/h)),r.closePath(),!v||!g)return;const p=r.getImageData(this.imageData.x/h,this.imageData.y/h,this.imageData.width/h,this.imageData.height/h),f=document.createElement("canvas");f.width=Math.round(this.imageData.width/h),f.height=Math.round(this.imageData.height/h);f.getContext("2d").putImageData(p,0,0);const w=function(e){const a=e.split(","),t=a[0].match(/:(.*?);/)[1],l=atob(a[1]);let s=l.length;const i=new Uint8Array(s);for(;s--;)i[s]=l.charCodeAt(s);return new Blob([i],{type:t})}(f.toDataURL("image/png"));e.imageData=new File([w],`${(new Date).getTime()}_${a}.png`,{type:"image/png"})}}))}addListener(e,a,t){e.addEventListener(a,t);var l=a+"_"+t.toString();this.listeners[l]={element:e,eventType:a,listener:t}}removeAllListeners(){for(var e in this.listeners){var a=this.listeners[e];a.element.removeEventListener(a.eventType,a.listener)}this.listeners={}}clearSelectionArea(){this.handleList=[],this.reDraw()}clearAll(){const{ctx:e,canvasDom:a}=this,{width:t,height:l}=a;e.beginPath(),e.clearRect(0,0,t,l),e.closePath()}}const Ze=e=>(p("data-v-90ff1f1c"),e=e(),f(),e),Me={class:"main-body"},Pe={class:"image-area"},Fe=Ze((()=>r("div",{class:"main-title"},"模特照片",-1))),Qe={class:"image-all"},Xe={class:"image-item upload-image-area"},Ge={class:"upload-text-tips"},He=Ze((()=>r("div",{class:"upload-text"},"点击上传",-1))),qe={class:"other-images"},Be={class:"other-images-view-box"},_e={class:"del-btn"},ze=Ze((()=>r("div",{class:"main-title"},null,-1))),Je={class:"bottom-area"},Ke={class:"handle-area"},$e=Ze((()=>r("div",{class:"main-title"},"正向提示词",-1))),ea={class:"handle-item"},aa=Ze((()=>r("div",{class:"main-title"},"负向提示词",-1))),ta={class:"handle-item"},la=Ze((()=>r("div",{class:"main-title"},"待换脸人像",-1))),sa={class:"handle-item bg"},ia={class:"line-draft-image-area"},na=Ze((()=>r("div",{class:"main-title"},null,-1))),oa={class:"upload-image-area-other"},ra=["src"],da={key:1,class:"upload-text-tips"},ca=Ze((()=>r("div",{class:"upload-text"},"点击上传",-1))),ua={class:"image-handl-area"},ha=Ze((()=>r("div",{class:"main-title"},"相似度",-1))),ma={class:"handle-item"},va={class:"handle-min-slider"},ga={class:"generate-btn"},pa={class:"review-area"},fa="https://u248120-87de-6175a03c.westc.gpuhub.com:8443";var wa=W({__name:"index",setup(l){const s=i([]),g=i(null),p=i(null);i([]),i(null),i(70);const f=i(""),V=i("");i(1024),i(1024);const x=i(70),L=i(""),R=i(0),C=i(null),S=e=>{const a=new FileReader;return a.onload=({target:a})=>{s.value.length>=15||s.value.push({file:e,url:a.result,weight:100})},a.readAsDataURL(e),!1},j=e=>{g.value=e;const a=new FileReader;return a.onload=({target:e})=>{p.value=e.result,C.value.initImage(p.value)},a.readAsDataURL(e),!1},N=()=>{g.value=null,p.value=null},W=()=>{if(!s.value.length)return I.error("请至少上传一张模特照片"),!1;if(!g.value)return I.error("请上传待换脸人像后操作"),!1;if(!C.value.handleList.length)return I.error("款选人脸区域后操作"),!1;const e=(()=>{const e=new FormData;return e.append("positive_prompt",f.value),e.append("negative_prompt",V.value),e.append("mask_strength",x.value/100),s.value.forEach((({weight:a,file:t})=>{e.append("ref_faces",t)})),e.append("face",g.value),C.value.handleList.forEach((({imageData:a})=>{e.append("face_mask",a)})),e})();A.post(`${fa}/img2img/swap_face`,e).then((e=>{if("未检测到人脸，请扩大人脸选区区域！"===e.data)return I.error(e.data),!1;L.value=`${fa}/img2img/${e.data}`}))},E=()=>{C.value.clearSelectionArea()};return n((()=>{C.value=new Ue(R.value),C.value.handleChange("selectionArea")})),(l,i)=>{const n=e("el-icon"),g=e("el-upload"),A=e("el-image"),I=e("el-scrollbar"),C=e("el-input"),Y=e("el-slider"),T=e("el-button");return a(),o("div",Me,[r("div",Pe,[Fe,r("div",Qe,[r("div",Xe,[c(g,{class:"avatar-uploader",drag:"",multiple:"",limit:15,disabled:s.value.length>=15,action:"","show-file-list":!1,"before-upload":S},{default:u((()=>[r("div",Ge,[c(n,{class:"avatar-uploader-icon"},{default:u((()=>[c(d(y))])),_:1}),He])])),_:1},8,["disabled"])]),r("div",qe,[c(I,null,{default:u((()=>[r("div",Be,[(a(!0),o(h,null,m(s.value,((e,t)=>(a(),o("div",{class:"image-item",key:t},[c(A,{style:{width:"150px",height:"150px"},src:e.url},null,8,["src"]),r("div",_e,[c(n,{style:{color:"red"},onClick:e=>(e=>{s.value.splice(e,1)})(t)},{default:u((()=>[c(d(D))])),_:2},1032,["onClick"])])])))),128))])])),_:1})])])]),ze,r("div",Je,[r("div",Ke,[c(I,null,{default:u((()=>[$e,r("div",ea,[c(C,{type:"textarea",modelValue:f.value,"onUpdate:modelValue":i[0]||(i[0]=e=>f.value=e),maxlength:"255"},null,8,["modelValue"])]),aa,r("div",ta,[c(C,{type:"textarea",modelValue:V.value,"onUpdate:modelValue":i[1]||(i[1]=e=>V.value=e),maxlength:"255"},null,8,["modelValue"])]),la,r("div",sa,[r("div",ia,[na,r("div",oa,[c(g,{class:"avatar-uploader",drag:"",action:"","show-file-list":!1,"before-upload":j},{default:u((()=>[p.value?(a(),o("div",{key:0,class:"upload-image-del-area",onClick:i[3]||(i[3]=b((()=>{}),["stop"]))},[r("img",{src:p.value,class:"avatar"},null,8,ra),r("div",{class:"upload-image-del-btn-area",onClick:i[2]||(i[2]=b((()=>{}),["stop"]))},[r("div",{class:"upload-image-del-btn",onClick:b(N,["stop"])},[c(n,null,{default:u((()=>[c(d(k))])),_:1})])])])):(a(),o("div",da,[c(n,{class:"avatar-uploader-icon"},{default:u((()=>[c(d(y))])),_:1}),ca]))])),_:1})]),r("div",ua,[r("div",{class:"main-title"},[v(" 框选人脸区域 "),r("div",{class:"title-handle-area",onClick:E}," 清空框选 ")]),r("canvas",{ref_key:"canvasDom",ref:R},null,512)])])]),ha,r("div",ma,[r("div",va,[c(Y,{modelValue:x.value,"onUpdate:modelValue":i[4]||(i[4]=e=>x.value=e)},null,8,["modelValue"])])])])),_:1}),r("div",ga,[c(T,{style:{width:"100%"},type:"primary",onClick:i[5]||(i[5]=e=>W())},{default:u((()=>[v("生成")])),_:1})])]),r("div",pa,[L.value?(a(),t(A,{key:0,fit:"scale-down",src:L.value,"preview-src-list":[L.value],style:{width:"100%",height:"100%"}},null,8,["src","preview-src-list"])):w("",!0)])])])}}},[["__scopeId","data-v-90ff1f1c"]]);const Aa="_AICLOTH_CONSOLE_",Ia="_AICLOTH_CONSOLE__token";function ba(e){localStorage.setItem(Aa+"USER",JSON.stringify(e))}function ya(){const e=V.get(Ia);return""!==e||void 0!==e||null!==e?e:null}function Da(e,a){localStorage.setItem(Aa+e,JSON.stringify(a))}const ka=A.create({baseURL:"http://www.weishih-ai.com:10010/dev-api",timeout:6e4,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});function Va(e){if(!e.response)return I.error({message:"请求超时",description:`${e.toString()}`}),Promise.reject(e);ya();const a=e.response.status,t=e.response.data,{userStore:l}=Ca;return 401===a?(I.error({message:"登录失效, 请重新登陆"}),l.handleLogout().then((()=>{setTimeout((()=>{Sa.replace("/login")}),1500)}))):400!==a&&500!==a||I.error({message:t.message}),Promise.reject(e)}ka.interceptors.request.use((e=>{const a=ya()||"22";return a&&e.headers&&(e.headers["X-Auth-Token"]=a),e}),Va),ka.interceptors.response.use((e=>200===e.status?e.data||{}:Promise.reject("")),Va);const xa=x({id:"users",state:()=>({user:null,permissions:null,token:"",workingTenant:null}),getters:{getUser(){return this.user},getPermissions(){return this.permissions}},actions:{handleLogin(e){return new Promise(((a,t)=>{var l;(l=e,ka.post("/sso/api/v1/session/login",l)).then((e=>{const t=e.token;var l;this.token=t.token,this.user=t.user,this.workingTenant=t.working_tenant,Da("workingTenant",t.working_tenant),ba(t.user),l=t.token,V.set(Ia,l,{expires:1}),a({...t.user,needPasswd:e.need_passwd}),ka.get("/sso/api/v1/roles").then((e=>{Da("roles",e.roles||[])}))})).catch((e=>{t(e)}))}))},handleLogout(e=""){return new Promise(((e,a)=>{V.remove(Ia),localStorage.removeItem(Aa+"USER"),this.user=null,this.permissions=null,this.token="",ba(null),e(null)}))},getUserInfo(){return new Promise(((e,a)=>{ka.get("/sso/api/v1/accounts/get").then((a=>{const t=function(){const e=localStorage.getItem(Aa+"USER");return e&&"undefined"!==e?JSON.parse(e):null}()||{};Object.assign(t,a),this.user=t,ba(t);const l=[].concat([t.sys_role]);window.localStorage.setItem("ROLE_PERMISSIONS_LIST",JSON.stringify(l)),this.permissions=l,e(t)})).catch((e=>{a(e)}))}))}}});const La={"./modules/user.js":Object.freeze(Object.defineProperty({__proto__:null,useUserStore:xa,setupStore:function(e){return xa(e)}},Symbol.toStringTag,{value:"Module"}))},Ra=L(),Ca={};Object.keys(La).forEach((e=>{const a=e.match(/([a-zA-Z]*)\.js$/)[0].split(".")[0];Ca[`${a}Store`]=La[e].setupStore(Ra)}));var Sa=R({history:C("/"),routes:[{path:"/",name:"home",component:B,redirect:"/ImageGenerationImage",children:[{path:"ImageGenerationImage",name:"ImageGenerationImage",component:Oe},{path:"swapFace",name:"swapFace",component:wa}]}]});if("undefined"!=typeof window){let e=function(){var e=document.body,a=document.getElementById("__svg__icons__dom__");a||((a=document.createElementNS("http://www.w3.org/2000/svg","svg")).style.position="absolute",a.style.width="0",a.style.height="0",a.id="__svg__icons__dom__",a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),a.innerHTML="",e.insertBefore(a,e.lastChild)};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}const ja=S(E);ja.use(L()),ja.use(Sa),ja.use(j,{locale:N}),ja.mount("#app");
