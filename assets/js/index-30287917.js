import{a as d}from"./axios-f5a5de21.js";import{n as E}from"./index-9151b0ff.js";/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const V=[],H=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),y=Object.assign,p=Array.isArray,v=t=>typeof t=="function",u=t=>typeof t=="string",O=t=>typeof t=="symbol",g=t=>t!==null&&typeof t=="object";let w;const A=()=>w||(w=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function k(t){if(p(t)){const a={};for(let i=0;i<t.length;i++){const e=t[i],s=u(e)?q(e):k(e);if(s)for(const n in s)a[n]=s[n]}return a}else if(u(t)||g(t))return t}const U=/;(?![^(]*\))/g,j=/:([^]+)/,W=/\/\*[^]*?\*\//g;function q(t){const a={};return t.replace(W,"").split(U).forEach(i=>{if(i){const e=i.split(j);e.length>1&&(a[e[0].trim()]=e[1].trim())}}),a}function D(t){let a="";if(u(t))a=t;else if(p(t))for(let i=0;i<t.length;i++){const e=D(t[i]);e&&(a+=e+" ")}else if(g(t))for(const i in t)t[i]&&(a+=i+" ");return a.trim()}/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(O));function $(t){return T(t)?$(t.__v_raw):!!(t&&t.__v_isReactive)}function T(t){return!!(t&&t.__v_isReadonly)}function I(t){return $(t)||T(t)}function B(t){return!!(t&&t.__v_isRef===!0)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _=null,G=null;const J=Symbol.for("v-ndc"),K=t=>t.__isSuspense;/*! #__NO_SIDE_EFFECTS__ */function L(t,a){return v(t)?(()=>y({name:t.name},a,{setup:t}))():t}const Y=t=>t.__isTeleport,M=Symbol.for("v-fgt"),Q=Symbol.for("v-txt"),X=Symbol.for("v-cmt"),h=[];let o=null;function R(t=!1){h.push(o=t?null:[])}function Z(){h.pop(),o=h[h.length-1]||null}function tt(t){return t.dynamicChildren=o||V,Z(),o&&o.push(t),t}function P(t,a,i,e,s,n){return tt(C(t,a,i,e,s,n,!0))}function it(t){return t?t.__v_isVNode===!0:!1}const F="__vInternal",N=({key:t})=>t!=null?t:null,f=({ref:t,ref_key:a,ref_for:i})=>(typeof t=="number"&&(t=""+t),t!=null?u(t)||B(t)||v(t)?{i:_,r:t,k:a,f:!!i}:t:null);function C(t,a=null,i=null,e=0,s=null,n=t===M?0:1,c=!1,l=!1){const r={__v_isVNode:!0,__v_skip:!0,type:t,props:a,key:a&&N(a),ref:a&&f(a),scopeId:G,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:e,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_};return l?(S(r,i),n&128&&t.normalize(r)):i&&(r.shapeFlag|=u(i)?8:16),!c&&o&&(r.patchFlag>0||n&6)&&r.patchFlag!==32&&o.push(r),r}const at=et;function et(t,a=null,i=null,e=0,s=null,n=!1){if((!t||t===J)&&(t=X),it(t)){const l=b(t,a,!0);return i&&S(l,i),!n&&o&&(l.shapeFlag&6?o[o.indexOf(t)]=l:o.push(l)),l.patchFlag|=-2,l}if(rt(t)&&(t=t.__vccOpts),a){a=st(a);let{class:l,style:r}=a;l&&!u(l)&&(a.class=D(l)),g(r)&&(I(r)&&!p(r)&&(r=y({},r)),a.style=k(r))}const c=u(t)?1:K(t)?128:Y(t)?64:g(t)?4:v(t)?2:0;return C(t,a,i,e,s,c,n,!0)}function st(t){return t?I(t)||F in t?y({},t):t:null}function b(t,a,i=!1){const{props:e,ref:s,patchFlag:n,children:c}=t,l=a?lt(e||{},a):e;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&N(l),ref:a&&a.ref?i&&s?p(s)?s.concat(f(a)):[s,f(a)]:f(a):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:a&&t.type!==M?n===-1?16:n|16:n,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&b(t.ssContent),ssFallback:t.ssFallback&&b(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function nt(t=" ",a=0){return at(Q,null,t,a)}function S(t,a){let i=0;const{shapeFlag:e}=t;if(a==null)a=null;else if(p(a))i=16;else if(typeof a=="object")if(e&65){const s=a.default;s&&(s._c&&(s._d=!1),S(t,s()),s._c&&(s._d=!0));return}else{i=32;const s=a._;!s&&!(F in a)?a._ctx=_:s===3&&_&&(_.slots._===1?a._=1:(a._=2,t.patchFlag|=1024))}else v(a)?(a={default:a,_ctx:_},i=32):(a=String(a),e&64?(i=16,a=[nt(a)]):i=8);t.children=a,t.shapeFlag|=i}function lt(...t){const a={};for(let i=0;i<t.length;i++){const e=t[i];for(const s in e)if(s==="class")a.class!==e.class&&(a.class=D([a.class,e.class]));else if(s==="style")a.style=k([a.style,e.style]);else if(H(s)){const n=a[s],c=e[s];c&&n!==c&&!(p(n)&&n.includes(c))&&(a[s]=n?[].concat(n,c):c)}else s!==""&&(a[s]=e[s])}return a}{const t=A(),a=(i,e)=>{let s;return(s=t[i])||(s=t[i]=[]),s.push(e),n=>{s.length>1?s.forEach(c=>c(n)):s[0](n)}};a("__VUE_INSTANCE_SETTERS__",i=>i),a("__VUE_SSR_SETTERS__",i=>i)}function rt(t){return v(t)&&"__vccOpts"in t}/*! Element Plus Icons Vue v2.3.1 */var ct=L({name:"Delete",__name:"delete",setup(t){return(a,i)=>(R(),P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[C("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"})]))}}),ot=ct,dt=L({name:"Plus",__name:"plus",setup(t){return(a,i)=>(R(),P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[C("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"})]))}}),ut=dt,_t=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"main-body"},[i("div",{staticClass:"left-menu"},[i("div",{staticClass:"left-menu-content"},t._l(t.menuList,function(e,s){return i("div",{key:s,staticClass:"menu-item",class:{selected:t.menuSelectedIndex===s},on:{click:function(n){return t.getMenuInfo(s)}}},[t.editMenuIndex!==s?i("div",{staticClass:"menu-name"},[t._v(t._s(e.name))]):i("div",{staticClass:"menu-name"},[i("el-input",{on:{click:function(n){n.stopPropagation()},keydown:function(n){t.saveMenuChange(n,s)}},model:{value:t.menuList[s].nameText,callback:function(n){t.$set(t.menuList[s],"nameText",n)},expression:"menuList[index].nameText"}})],1),i("div",{staticClass:"menu-handle"})])}),0)]),t.menuSelectedIndex!==null?i("div",{staticClass:"left-sub-menu"},[i("div",{staticClass:"left-sub-menu-content"},[i("el-scrollbar",{staticStyle:{width:"100%",height:"100%"}},[t.menuList[t.menuSelectedIndex].labeled>t.type2PageSize?i("div",{staticClass:"page-area"},[i("el-pagination",{staticClass:"mt-4",staticStyle:{"--el-pagination-button-disabled-bg-color":"#222","--el-pagination-bg-color":"#222","--el-pagination-button-color":"#fff"},attrs:{"current-page":t.type2Page,"page-size":t.type2PageSize,small:"",layout:"prev, pager, next",total:t.menuList[t.menuSelectedIndex].labeled},on:{"current-change":t.currentChange}})],1):t._e(),t._l(t.imageList,function(e,s){return i("div",{key:s,staticClass:"left-sub-menu-item"},[t.subMenuType==="2"?i("div",{staticClass:"left-sub-menu-image",on:{click:function(n){return t.getImageInfo(e)}}},[i("el-image",{staticStyle:{width:"100px",height:"100px",background:"#222"},attrs:{src:`${t.httpRequestUrl}/labels/static/${decodeURIComponent(t.menuList[t.menuSelectedIndex].name)}/${e}`,"preview-src-list":[`${t.httpRequestUrl}/labels/static/${decodeURIComponent(t.menuList[t.menuSelectedIndex].name)}/${e}`],fit:"contain"}})],1):t._e()])})],2)],1)]):t._e(),t.menuSelectedIndex!==null?i("div",{staticClass:"content"},[i("div",{staticClass:"content-image-msg"},[i("el-scrollbar",{staticStyle:{width:"100%",height:"100%"}},[i("div",{staticClass:"content-msg-title"},[t._v(" 数据设置 ")]),i("div",{staticClass:"content-dataset"},[i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 图片分辨率 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 训练图片的分辨率，宽*高，支持非正方形，但必须是64倍数 ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.resolutionW,callback:function(e){t.resolutionW=e},expression:"resolutionW"}}),t._v("  *  "),i("el-input",{attrs:{size:"mini"},model:{value:t.resolutionH,callback:function(e){t.resolutionH=e},expression:"resolutionH"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 是否允许动态分辨率 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 自适应图片分辨率，无需指定分辨率，适合图片尺寸不一致的情况 ")]),i("div",{staticClass:"train-handle"},[i("el-switch",{staticStyle:{"--el-switch-on-color":"#13ce66"},attrs:{size:"mini"},model:{value:t.trainData.enable_bucket,callback:function(e){t.$set(t.trainData,"enable_bucket",e)},expression:"trainData.enable_bucket"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 动态分辨率范围 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 动态分辨率的最小值和最大值，只训练在该区间范围内的图片 ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.min_bucket_reso,callback:function(e){t.$set(t.trainData,"min_bucket_reso",e)},expression:"trainData.min_bucket_reso"}}),t._v("  -  "),i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.max_bucket_reso,callback:function(e){t.$set(t.trainData,"max_bucket_reso",e)},expression:"trainData.max_bucket_reso"}})],1)]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 噪声偏移 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 训练更加亮或者更加暗的图像时使用（如果使用，建议取0.1） ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.noise_offset,callback:function(e){t.$set(t.trainData,"noise_offset",e)},expression:"trainData.noise_offset"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 保存数据加载进程 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 快速加载图片（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-switch",{staticStyle:{"--el-switch-on-color":"#13ce66"},attrs:{size:"mini"},model:{value:t.trainData.persistent_data_loader_workers,callback:function(e){t.$set(t.trainData,"persistent_data_loader_workers",e)},expression:"trainData.persistent_data_loader_workers"}})],1)])])])]),i("div",{staticClass:"content-msg-title"},[t._v(" 训练相关参数 ")]),i("div",{staticClass:"content-dataset"},[i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 测试图片尺寸 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 用于设置每轮测试模型效果图的宽高 ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.sample_width,callback:function(e){t.$set(t.trainData,"sample_width",e)},expression:"trainData.sample_width"}}),t._v("  *  "),i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.sample_height,callback:function(e){t.$set(t.trainData,"sample_height",e)},expression:"trainData.sample_height"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 测试prompt ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 用于测试过程中检验模型效果的prompt ")])]),i("el-input",{staticStyle:{"margin-top":"5px"},attrs:{type:"textarea",placeholder:"",rows:3},model:{value:t.trainData.sample_prompts,callback:function(e){t.$set(t.trainData,"sample_prompts",e)},expression:"trainData.sample_prompts"}})],1),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 总训练轮数 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 对该数据集的训练次数，图片数据量越多建议数量越大 ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.max_train_epochs,callback:function(e){t.$set(t.trainData,"max_train_epochs",e)},expression:"trainData.max_train_epochs"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 批量大小 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 每次迭代过程中训练图片的数量，建议在1-4范围内 ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.train_batch_size,callback:function(e){t.$set(t.trainData,"train_batch_size",e)},expression:"trainData.train_batch_size"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 梯度检查点 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 是否启用梯度检查点节省显存（建议采用默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-switch",{staticStyle:{"--el-switch-on-color":"#13ce66"},attrs:{size:"mini"},model:{value:t.trainData.gradient_checkpointing,callback:function(e){t.$set(t.trainData,"gradient_checkpointing",e)},expression:"trainData.gradient_checkpointing"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 梯度累加步数 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 累加n次梯度后再进行反向传播节省显存（建议采用默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.gradient_accumulation_steps,callback:function(e){t.$set(t.trainData,"gradient_accumulation_steps",e)},expression:"trainData.gradient_accumulation_steps"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 只训练模型 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 是否训练模型（建议采用默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-switch",{staticStyle:{"--el-switch-on-color":"#13ce66"},attrs:{size:"mini"},model:{value:t.trainData.network_train_unet_only,callback:function(e){t.$set(t.trainData,"network_train_unet_only",e)},expression:"trainData.network_train_unet_only"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 只训练文本编码器 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 是否只训练文本编码器（建议采用默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-switch",{staticStyle:{"--el-switch-on-color":"#13ce66"},attrs:{size:"mini"},model:{value:t.trainData.network_train_text_encoder_only,callback:function(e){t.$set(t.trainData,"network_train_text_encoder_only",e)},expression:"trainData.network_train_text_encoder_only"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 模型维度 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 训练模型的大小，图片数据越多该数值应该越大，（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.network_dim,callback:function(e){t.$set(t.trainData,"network_dim",e)},expression:"trainData.network_dim"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 模型alpha ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 训练模型的大小，图片数据越多该数值应该越大，（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.network_alpha,callback:function(e){t.$set(t.trainData,"network_alpha",e)},expression:"trainData.network_alpha"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 每N轮保存 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 训练到N轮时自动保存模型和测试效果 ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.save_every_n_epochs,callback:function(e){t.$set(t.trainData,"save_every_n_epochs",e)},expression:"trainData.save_every_n_epochs"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 学习率 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 整体模型的学习率，当批次样本数越高该数值越高（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.learning_rate,callback:function(e){t.$set(t.trainData,"learning_rate",e)},expression:"trainData.learning_rate"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 模型学习率 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 模型的学习率，当批次样本数越高该数值越高（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.unet_lr,callback:function(e){t.$set(t.trainData,"unet_lr",e)},expression:"trainData.unet_lr"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 文本编码器学习率 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 文本编码器的学习率，当批次样本数越高该数值越高（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.text_encoder_lr,callback:function(e){t.$set(t.trainData,"text_encoder_lr",e)},expression:"trainData.text_encoder_lr"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 学习率策略 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 动态调整学习率的策略（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.lr_scheduler,callback:function(e){t.$set(t.trainData,"lr_scheduler",e)},expression:"trainData.lr_scheduler"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 预热步数 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 模型预热学习（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.lr_warmup_steps,callback:function(e){t.$set(t.trainData,"lr_warmup_steps",e)},expression:"trainData.lr_warmup_steps"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 学习率策略循环次数 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 动态调整学习率的策略次数（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.lr_warmup_steps,callback:function(e){t.$set(t.trainData,"lr_warmup_steps",e)},expression:"trainData.lr_warmup_steps"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 优化器 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 优化模型的方法（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.optimizer_type,callback:function(e){t.$set(t.trainData,"optimizer_type",e)},expression:"trainData.optimizer_type"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 优化器参数 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 优化模型的方法（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-switch",{staticStyle:{"--el-switch-on-color":"#13ce66"},attrs:{size:"mini"},model:{value:t.trainData.use_8bit_adam,callback:function(e){t.$set(t.trainData,"use_8bit_adam",e)},expression:"trainData.use_8bit_adam"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 玄学 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 玄学（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-input",{attrs:{size:"mini"},model:{value:t.trainData.clip_skip,callback:function(e){t.$set(t.trainData,"clip_skip",e)},expression:"trainData.clip_skip"}})],1)])]),i("div",{staticClass:"train-box"},[i("div",{staticClass:"train-title"},[t._v(" 低内存模式 ")]),i("div",{staticClass:"train-description"},[i("div",{staticClass:"train-description-text"},[t._v(" 减少内存占用（建议取默认值） ")]),i("div",{staticClass:"train-handle"},[i("el-switch",{staticStyle:{"--el-switch-on-color":"#13ce66"},attrs:{size:"mini"},model:{value:t.trainData.lowram,callback:function(e){t.$set(t.trainData,"lowram",e)},expression:"trainData.lowram"}})],1)])])])]),i("div",{staticClass:"train-btn-area"},[i("div",{staticClass:"train-btn"},[t.isTraining?t._e():i("el-button",{attrs:{type:"primary"},on:{click:t.toTrain}},[t._v("开始训练")]),t.isTraining?i("el-button",{attrs:{type:"danger"},on:{click:t.trainStop}},[t._v("终止训练")]):t._e()],1),t.isTraining?i("div",{staticClass:"train-loading"},[i("div",{staticClass:"train-loading-active",style:{right:`${(1-(t.trainList.length?t.trainList.length/t.trainData.max_train_epochs:0))*100}%`}})]):t._e()])],1)]):t._e(),t.menuSelectedIndex!==null?i("div",{staticClass:"prompts-list"},[i("div",{staticClass:"train-list-title"},[t._v(" 训练结果预览 ")]),i("div",{staticClass:"train-list"},[i("el-scrollbar",{staticStyle:{width:"100%",height:"100%"}},[t.isTraining?i("div",{staticClass:"training-steps"},[i("div",{domProps:{innerHTML:t._s(t.trainStepsText||"loading...")}})]):t._e(),t._l(t.trainList,function(e,s){return i("div",{key:s,staticClass:"train-item"},[i("div",{staticClass:"trained-data-msg"},[i("div",{staticClass:"trained-data-name"},[t._v(" 训练轮次: "+t._s(s+1)+" ")]),i("div",{staticClass:"trained-data-name"},[t._v(" 模型名称: "),i("br"),i("el-input",{attrs:{size:"mini"},model:{value:e.epoch,callback:function(n){t.$set(e,"epoch",n)},expression:"n.epoch"}})],1),i("div",{staticClass:"trained-data-handle"},[i("el-button",{staticStyle:{padding:"0","margin-top":"5px","font-size":"12px"},attrs:{type:"text",size:"mini"},on:{click:function(n){return t.addModel(e)}}},[t._v("添加至模型库")])],1)]),i("div",{staticClass:"train-data-image"},[i("el-image",{staticStyle:{width:"90px",height:"90px",background:"#000"},attrs:{"preview-src-list":[`${t.httpRequestUrl}/train/${e.preview}`],src:`${t.httpRequestUrl}/train/${e.preview}`,fit:"cover"}})],1)])})],2)],1)]):t._e()])},pt=[];const x="https://u248120-87de-6175a03c.westc.gpuhub.com:8443",m="https://u248120-87de-6175a03c.westc.gpuhub.com:8443",mt={train_data_dir:"style_cartoon",network_dim:32,network_alpha:16,resolution:"1024,1024",train_batch_size:1,max_train_epochs:10,save_every_n_epochs:1,network_train_unet_only:!0,network_train_text_encoder_only:!1,noise_offset:"0.1",learning_rate:"1e-4",unet_lr:"1e-4",text_encoder_lr:"1e-5",lr_scheduler:"cosine_with_restarts",lr_warmup_steps:0,lr_scheduler_num_cycles:1,optimizer_type:"AdamW8bit",use_8bit_adam:!1,gradient_checkpointing:!0,gradient_accumulation_steps:4,output_name:"style_cartoon",enable_bucket:!0,min_bucket_reso:256,max_bucket_reso:1280,persistent_data_loader_workers:!0,clip_skip:2,lowram:!1,sample_width:1024,sample_height:1024,sample_prompts:"Cartoon, flowers, repeating elements, wallpaper, white background"},vt={data(){return{httpRequestUrl:x,editMenuIndex:null,menuSelectedIndex:null,subMenuType:"2",type1Page:1,type1PageSize:10,type2Page:1,type2PageSize:10,menuList:[],imageList:[],trainList:[],trainData:{},resolutionW:1024,resolutionH:1024,isTraining:!1,trainStepsText:null,trainStatus:null}},components:{Plus:ut,Delete:ot},mounted(){this.init()},watch:{resolutionW(){this.trainData.resolution=`${this.resolutionW},${this.resolutionH}`},resolutionH(){this.trainData.resolution=`${this.resolutionW},${this.resolutionH}`}},methods:{init(){this.editMenuIndex=null,this.menuSelectedIndex=null,this.trainData=JSON.parse(JSON.stringify(mt)),this.getMenuList()},getMenuList(){d.get(`${x}/labels/get_datasets`).then(t=>{const{data:a}=t;this.menuList=Object.keys(a).map(i=>Object.assign({name:i,nameText:i},a[i])),this.getTrainInfo()})},getMenuInfo(t,a=0){this.menuSelectedIndex===t&&!a||(this.menuSelectedIndex=t,this.subMenuType="2",this.type1Page=1,this.type2Page=1,this.imageSelected=null,this.getSubMenuInfo(t),this.trainData.train_data_dir=this.menuList[this.menuSelectedIndex].name,this.trainData.output_name=this.menuList[this.menuSelectedIndex].name)},currentChange(t){this.subMenuType==="1"?this.type1Page=t:this.type2Page=t,this.getSubMenuInfo(this.menuSelectedIndex)},getSubMenuInfo(t){this.imageList=[];let a=this.subMenuType==="1"?this.type1Page:this.type2Page;d.post(`${x}/labels/query`,{dataset:this.menuList[t].name,page:a,page_size:this.subMenuType==="1"?this.type1PageSize:this.type2PageSize,label_type:this.subMenuType==="1"?"unlabeled":"labeled"}).then(i=>{this.imageList=i.data,this.getTrainedInfo(),!this.imageList.length&&a>1&&(this.subMenuType==="1"?this.type1Page=this.type1Page-1:this.type2Page=this.type2Page-1,this.getSubMenuInfo(this.menuSelectedIndex))})},getTrainInfo(){d.get(`${m}/train/get_training_info`).then(t=>{const{data:a}=t;if(a.cur_dataset&&(this.menuSelectedIndex===null||a.cur_dataset!==this.menuList[this.menuSelectedIndex].name)){const i=this.menuList.findIndex(e=>a.cur_dataset===e.name);this.trainStatus=a.cur_dataset,this.getMenuInfo(i),this.isTraining=!0,this.trainStepsText=a.cur_info,this.checkTrainFinish()}else this.trainStepsText=a.cur_info,this.trainList.length<a.epoches.length&&a.epoches.forEach((i,e)=>{this.trainList[e]||this.trainList.push(i)}),this.menuSelectedIndex!==null&&!a.cur_dataset&&this.trainStatus&&(this.isTraining=!1,this.trainStatus=null,this.getTrainedInfo())})},getTrainedInfo(){d.post(`${m}/train/get_trained_info`,{dataset:this.menuList[this.menuSelectedIndex].name}).then(t=>{const{data:a}=t;this.trainList=a.epoches})},trainStop(){d.post(`${m}/train/stop`).then(t=>{}).catch(()=>{this.isTraining=!1,this.trainStatus=null})},toTrain(){if(!this.trainData.sample_prompts){this.$message.error("请输入prompt后操作");return}this.isTraining=!0,d.post(`${m}/train/train`,this.trainData).then(t=>{const{data:a}=t;a==="开始训练成功，等待训练结束！"?(this.$message.success(a),this.trainStepsText=null,this.trainList=[],this.checkTrainFinish()):this.$message.warning(a)})},checkTrainFinish(){this.isTraining&&(this.getTrainInfo(),setTimeout(()=>{this.isTraining&&this.checkTrainFinish()},5e3))},addModel({epoch:t,safetensors:a}){d.post(`${m}/train/add_model`,{modelname:t,safetensors:a}).then(i=>{this.$message.success("添加成功")})}}},z={};var ht=E(vt,_t,pt,!1,ft,"ea0f2854",null,null);function ft(t){for(let a in z)this[a]=z[a]}const xt=function(){return ht.exports}();export{xt as default};