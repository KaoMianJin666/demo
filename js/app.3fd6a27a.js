(function(){"use strict";var e={3758:function(e,t,s){var a=s(5130),n=s(6768),l=s(4232);const i={class:"main-body"},u={class:"left-menu"},o=(0,n.Lk)("div",{class:"left-menu-title"}," 数据集 ",-1),m={class:"left-menu-content"},d=["onClick"],c={key:0,class:"menu-name"},r={key:1,class:"menu-name"},g={class:"menu-handle"},p=["onClick"],h=["onClick"],b=["onClick"],f={key:0,class:"left-sub-menu"},y={class:"left-sub-menu-title"},k={class:"success"},L={class:"danger"},v={class:"left-sub-menu-content"},S={class:"upload-area"},x={key:0,class:"page-area"},C=["onClick"],I={class:"delete-btn"},M={key:0,class:"page-area"},$=["onClick"],_={class:"delete-btn"},P={key:1,class:"content"},T={class:"content-image-area"},F={class:"content-image-msg"},V=(0,n.Lk)("div",{class:"content-msg-title"}," 图片信息 ",-1),w={class:"content-dataset"},E=(0,n.Lk)("label",null,"所属数据集",-1),X={class:"content-other"},D={class:"content-prompt"},A=(0,n.Lk)("label",null,"提示词",-1),U={class:"content-other"},O={class:"prompt-handle-area"},z={key:2,class:"prompts-list"},j={class:"dialog-footer"};function W(e,t,s,W,B,K){const q=(0,n.g2)("el-input"),Q=(0,n.g2)("el-tag"),R=(0,n.g2)("Plus"),G=(0,n.g2)("el-icon"),H=(0,n.g2)("el-upload"),J=(0,n.g2)("el-pagination"),N=(0,n.g2)("el-image"),Y=(0,n.g2)("Delete"),Z=(0,n.g2)("el-collapse-item"),ee=(0,n.g2)("el-collapse"),te=(0,n.g2)("el-option"),se=(0,n.g2)("el-select"),ae=(0,n.g2)("el-tab-pane"),ne=(0,n.g2)("el-tabs"),le=(0,n.g2)("el-button"),ie=(0,n.g2)("el-dialog");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("div",u,[o,(0,n.Lk)("div",m,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(B.menuList,((e,s)=>((0,n.uX)(),(0,n.CE)("div",{class:(0,l.C4)(["menu-item",{selected:B.menuSelectedIndex===s}]),key:s,onClick:e=>K.getMenuInfo(s)},[B.editMenuIndex!==s?((0,n.uX)(),(0,n.CE)("div",c,(0,l.v_)(e.name),1)):((0,n.uX)(),(0,n.CE)("div",r,[(0,n.bF)(q,{onClick:t[0]||(t[0]=(0,a.D$)((()=>{}),["stop"])),modelValue:B.menuList[s].nameText,"onUpdate:modelValue":e=>B.menuList[s].nameText=e,onKeydown:e=>{K.saveMenuChange(e,s)}},null,8,["modelValue","onUpdate:modelValue","onKeydown"])])),(0,n.Lk)("div",g,[B.editMenuIndex!==s?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"menu-handle-btn",onClick:(0,a.D$)((e=>B.editMenuIndex=s),["stop"])}," 编辑 ",8,p)):((0,n.uX)(),(0,n.CE)("div",{key:1,class:"menu-handle-btn",onClick:(0,a.D$)((e=>K.saveMenuChange({keyCode:13},s)),["stop"])}," 保存 ",8,h)),(0,n.Lk)("div",{class:"menu-handle-btn danger",onClick:(0,a.D$)((e=>K.deleteMenu(s)),["stop"])}," 删除 ",8,b)])],10,d)))),128)),(0,n.Lk)("div",{class:"menu-item add",onClick:t[1]||(t[1]=(...e)=>K.addMenu&&K.addMenu(...e))}," 添加 ")])]),null!==B.menuSelectedIndex?((0,n.uX)(),(0,n.CE)("div",f,[(0,n.Lk)("div",y,[(0,n.bF)(Q,{type:"success"},{default:(0,n.k6)((()=>[(0,n.eW)(" 已处理"),(0,n.Lk)("span",k,(0,l.v_)(B.menuList[B.menuSelectedIndex].labeled),1),(0,n.eW)("张 ")])),_:1}),(0,n.bF)(Q,{type:"danger"},{default:(0,n.k6)((()=>[(0,n.eW)(" 未处理"),(0,n.Lk)("span",L,(0,l.v_)(B.menuList[B.menuSelectedIndex].unlabeled),1),(0,n.eW)("张 ")])),_:1})]),(0,n.Lk)("div",v,[(0,n.bF)(ee,{modelValue:B.subMenuType,"onUpdate:modelValue":t[3]||(t[3]=e=>B.subMenuType=e),accordion:""},{default:(0,n.k6)((()=>[(0,n.bF)(Z,{title:"未处理图片",name:"1"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",S,[(0,n.bF)(H,{class:"avatar-uploader",multiple:"","before-upload":K.beforeUpload,accept:"image/*",data:{dataset:B.menuList[B.menuSelectedIndex].name},action:`${B.httpRequestUrl}/labels/upload`,"on-success":()=>{K.getMenuList(),K.getSubMenuInfo(B.menuSelectedIndex)},"show-file-list":!1},{default:(0,n.k6)((()=>[(0,n.bF)(G,{class:"avatar-uploader-icon"},{default:(0,n.k6)((()=>[(0,n.bF)(R)])),_:1})])),_:1},8,["before-upload","data","action","on-success"])]),B.menuList[B.menuSelectedIndex].unlabeled>B.type1PageSize?((0,n.uX)(),(0,n.CE)("div",x,[(0,n.bF)(J,{onCurrentChange:K.currentChange,modelValue:B.type1Page,"onUpdate:modelValue":t[2]||(t[2]=e=>B.type1Page=e),"page-size":B.type1PageSize,small:"",layout:"prev, pager, next",total:B.menuList[B.menuSelectedIndex].unlabeled,class:"mt-4"},null,8,["onCurrentChange","modelValue","page-size","total"])])):(0,n.Q3)("",!0),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(B.imageList,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"left-sub-menu-item",key:t},["1"===B.subMenuType?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"left-sub-menu-image",onClick:t=>K.getImageInfo(e)},[(0,n.bF)(N,{style:{width:"100px",height:"100px"},src:`${B.httpRequestUrl}/labels/static/${B.menuList[B.menuSelectedIndex].name}/${e}`,fit:"contain"},null,8,["src"]),(0,n.Lk)("div",I,[(0,n.bF)(G,{class:"delete-info",onClick:(0,a.D$)((t=>K.delImage(e)),["stop"])},{default:(0,n.k6)((()=>[(0,n.bF)(Y)])),_:2},1032,["onClick"])])],8,C)):(0,n.Q3)("",!0)])))),128))])),_:1}),(0,n.bF)(Z,{title:"已处理图片",name:"2"},{default:(0,n.k6)((()=>[B.menuList[B.menuSelectedIndex].labeled>B.type2PageSize?((0,n.uX)(),(0,n.CE)("div",M,[(0,n.bF)(J,{onCurrentChange:K.currentChange,"page-size":B.type2PageSize,small:"",layout:"prev, pager, next",total:B.menuList[B.menuSelectedIndex].labeled,class:"mt-4"},null,8,["onCurrentChange","page-size","total"])])):(0,n.Q3)("",!0),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(B.imageList,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"left-sub-menu-item",key:t},["2"===B.subMenuType?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"left-sub-menu-image",onClick:t=>K.getImageInfo(e)},[(0,n.bF)(N,{style:{width:"100px",height:"100px"},src:`${B.httpRequestUrl}/labels/static/${B.menuList[B.menuSelectedIndex].name}/${e}`,fit:"contain"},null,8,["src"]),(0,n.Lk)("div",_,[(0,n.bF)(G,{class:"delete-info",onClick:(0,a.D$)((t=>K.delImage(e)),["stop"])},{default:(0,n.k6)((()=>[(0,n.bF)(Y)])),_:2},1032,["onClick"])])],8,$)):(0,n.Q3)("",!0)])))),128))])),_:1})])),_:1},8,["modelValue"])])])):(0,n.Q3)("",!0),B.imageSelected?((0,n.uX)(),(0,n.CE)("div",P,[(0,n.Lk)("div",T,[(0,n.bF)(N,{style:{width:"400px",height:"400px",position:"absolute",top:"0",left:"0",bottom:"0",right:"0",margin:"auto"},"preview-src-list":[`${B.httpRequestUrl}/labels/static/${B.menuList[B.menuSelectedIndex].name}/${B.imageSelected}`],src:`${B.httpRequestUrl}/labels/static/${B.menuList[B.menuSelectedIndex].name}/${B.imageSelected}`,fit:"contain"},null,8,["preview-src-list","src"])]),(0,n.Lk)("div",F,[V,(0,n.Lk)("div",w,[E,(0,n.Lk)("div",X,[(0,n.bF)(se,{modelValue:B.imageDataset,"onUpdate:modelValue":t[4]||(t[4]=e=>B.imageDataset=e),onChange:K.changeImageDataset},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(B.menuList,(e=>((0,n.uX)(),(0,n.Wv)(te,{key:e.name,value:e.name,label:e.name},null,8,["value","label"])))),128))])),_:1},8,["modelValue","onChange"])])]),(0,n.Lk)("div",D,[A,(0,n.Lk)("div",U,[(0,n.bF)(q,{modelValue:B.imagePrompt,"onUpdate:modelValue":t[5]||(t[5]=e=>B.imagePrompt=e),style:{width:"400px"},rows:5,type:"textarea",placeholder:"请使用,分割每个prompt"},null,8,["modelValue"])]),(0,n.Lk)("div",O,[(0,n.Lk)("div",{class:"prompt-translate-handle",onClick:t[6]||(t[6]=(...e)=>K.getTranslateMsg&&K.getTranslateMsg(...e))}," 翻译 "),(0,n.Lk)("div",{class:"prompt-save-handle",onClick:t[7]||(t[7]=(...e)=>K.saveLabel&&K.saveLabel(...e))}," 保存 ")])])])])):(0,n.Q3)("",!0),B.imageSelected?((0,n.uX)(),(0,n.CE)("div",z,[(0,n.bF)(ne,{style:{},modelValue:B.promptsListSelected,"onUpdate:modelValue":t[8]||(t[8]=e=>B.promptsListSelected=e),class:"demo-tabs",onTabClick:e.handleClick},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(B.promptsList,(e=>((0,n.uX)(),(0,n.Wv)(ae,{label:e.name,name:e.name,key:e.name},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.list,((e,t)=>((0,n.uX)(),(0,n.Wv)(Q,{style:{"margin-right":"10px","margin-bottom":"10px",cursor:"pointer"},key:t,onClick:t=>B.imagePrompt+=`${B.imagePrompt?",":""}${e}`},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e),1)])),_:2},1032,["onClick"])))),128))])),_:2},1032,["label","name"])))),128))])),_:1},8,["modelValue","onTabClick"])])):(0,n.Q3)("",!0),(0,n.bF)(ie,{"destroy-on-close":"",modelValue:B.translateVisible,"onUpdate:modelValue":t[10]||(t[10]=e=>B.translateVisible=e),title:"翻译结果",width:"440px"},{footer:(0,n.k6)((()=>[(0,n.Lk)("div",j,[(0,n.bF)(le,{onClick:K.closeTranslateDialog},{default:(0,n.k6)((()=>[(0,n.eW)("取消")])),_:1},8,["onClick"]),(0,n.bF)(le,{type:"primary",onClick:K.replacePrompt},{default:(0,n.k6)((()=>[(0,n.eW)(" 替换 ")])),_:1},8,["onClick"])])])),default:(0,n.k6)((()=>[(0,n.bF)(q,{modelValue:B.translateMsg,"onUpdate:modelValue":t[9]||(t[9]=e=>B.translateMsg=e),style:{width:"400px"},rows:5,type:"textarea",placeholder:"翻译结果"},null,8,["modelValue"])])),_:1},8,["modelValue"])])}var B=s(7477),K=s(8355);const q="https://u248120-a5f1-770998cc.westb.seetacloud.com:8443";var Q={data(){return{httpRequestUrl:q,editMenuIndex:null,menuSelectedIndex:null,subMenuType:"1",type1Page:1,type1PageSize:10,type2Page:1,type2PageSize:10,menuList:[],imageList:[],imageSelected:null,imagePrompt:null,imageDataset:null,promptsList:[],promptsListSelected:"",translateMsg:"",translateVisible:!1}},components:{Plus:B.FWt,Delete:B.epd},mounted(){this.getPromptsList(),this.init()},watch:{subMenuType(){this.getSubMenuInfo(this.menuSelectedIndex)}},methods:{init(){this.editMenuIndex=null,this.menuSelectedIndex=null,this.imageSelected=null,this.getMenuList()},getMenuList(){K.A.get(`${q}/labels/get_datasets`).then((e=>{console.log(e);const{data:t}=e;this.menuList=Object.keys(t).map((e=>Object.assign({name:e,nameText:e},t[e])))}))},saveMenuChange(e,t){if(13===e.keyCode){if(this.menuList[t].nameText===this.menuList[t].name)return;if(this.menuList.filter((e=>e.name===this.menuList[t].nameText)).length)return void this.$message.error("数据集名称不可重复");console.log("保存成功"),K.A.post(`${q}/labels/rename_dataset`,{dataset:this.menuList[t].name,name:this.menuList[t].nameText}).then((()=>{this.$message.success("修改成功"),this.editMenuIndex=null,this.init()}))}console.log(e,t)},addMenu(){this.$prompt("请输入数据集名称","提示",{confirmButtonText:"保存",cancelButtonText:"取消",inputErrorMessage:"请输入数据集名称"}).then((({value:e})=>{e?this.menuList.filter((t=>t.name===e)).length?this.$message.error("数据集名称不可重复"):(K.A.post(`${q}/labels/create_dataset`,{dataset:e}).then((()=>{this.$message.success("新建成功"),this.init()})),console.log(e)):this.$message.error("请输入数据集名称")})).catch((()=>{console.log("取消操作")}))},deleteMenu(e){console.log(e),this.$confirm("此操作不可逆，是否继续","警告",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{K.A.post(`${q}/labels/delete_dataset`,{dataset:this.menuList[e].name}).then((()=>{this.$message.success("成功删除数据集"),this.init()}))})).catch((()=>{this.$message("已取消删除数据集")}))},getMenuInfo(e,t=0){(this.menuSelectedIndex!==e||t)&&(this.menuSelectedIndex=e,this.subMenuType="1",this.type1Page=1,this.type2Page=1,this.imageSelected=null,this.getSubMenuInfo(e))},beforeUpload(e){if(e.size>10485760)return this.$message.error("请上传10Mb以内的图片"),!1},currentChange(e){console.log(e),"1"===this.subMenuType?this.type1Page=e:this.type2Page=e,this.getSubMenuInfo(this.menuSelectedIndex)},getSubMenuInfo(e){this.imageList=[];let t="1"===this.subMenuType?this.type1Page:this.type2Page;K.A.post(`${q}/labels/query`,{dataset:this.menuList[e].name,page:t,page_size:"1"===this.subMenuType?this.type1PageSize:this.type2PageSize,label_type:"1"===this.subMenuType?"unlabeled":"labeled"}).then((e=>{console.log(e),this.imageList=e.data,!this.imageList.length&&t>1&&("1"===this.subMenuType?this.type1Page=this.type1Page-1:this.type2Page=this.type2Page-1,this.getSubMenuInfo(this.menuSelectedIndex))}))},delImage(e){this.$confirm("此操作不可逆，是否继续","警告",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{console.log(e),K.A.post(`${q}/labels/delete_image`,{dataset:this.menuList[this.menuSelectedIndex].name,label_type:"1"===this.subMenuType?"unlabeled":"labeled",image_path:e}).then((()=>{this.$message.success("删除图片成功"),this.getMenuList(),this.getSubMenuInfo(this.menuSelectedIndex),this.imageSelected=null})),console.log("删除")})).catch((()=>{this.$message("已取消删除图片")}))},getImageInfo(e){console.log(e),this.imageSelected=e,K.A.post(`${q}/labels/image_details`,{dataset:this.menuList[this.menuSelectedIndex].name,image_path:e}).then((e=>{console.log(e),this.imagePrompt=e.data.prompt||"",this.imageDataset=this.menuList[this.menuSelectedIndex].name,this.promptsList.length?this.promptsListSelected=this.promptsList[0].name:this.promptsListSelected=""}))},changeImageDataset(){this.imageDataset!==this.menuList[this.menuSelectedIndex].name&&this.$confirm(`您正在将此图片移动至《${this.imageDataset}》数据集，是否继续`,"警告",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{K.A.post(`${q}/labels/move`,{dataset:this.menuList[this.menuSelectedIndex].name,image_path:this.imageSelected,target_dataset:this.imageDataset}).then((()=>{this.$message.success("移动成功"),this.getMenuList(),this.getMenuInfo(this.menuSelectedIndex,1),this.imageSelected=null}))})).catch((()=>{this.imageDataset=this.menuList[this.menuSelectedIndex].name,this.$message("已取消移动")}))},getPromptsList(){K.A.get(`${q}/labels/prompt_helper`).then((e=>{this.promptsList=Object.keys(e.data).map((t=>({name:t,list:e.data[t]}))),this.promptsList.length?this.promptsListSelected=this.promptsList[0].name:this.promptsListSelected=""}))},getTranslateMsg(){K.A.post(`${q}/labels/translate`,{prompt:this.imagePrompt}).then((e=>{console.log(e),this.translateMsg=e.data,this.translateVisible=!0}))},replacePrompt(){this.imagePrompt=this.translateMsg,this.translateVisible=!1,this.$message.success("替换成功")},closeTranslateDialog(){this.translateVisible=!1,this.$message("取消操作")},saveLabel(){K.A.post(`${q}/labels/label`,{dataset:this.menuList[this.menuSelectedIndex].name,image_path:this.imageSelected,prompt:this.imagePrompt}).then((()=>{this.$message.success("保存成功"),this.getMenuList(),this.getMenuInfo(this.menuSelectedIndex,1),this.imageSelected=null}))},getAutoLabel(){K.A.post(`${q}/labels/label`,{dataset:this.menuList[this.menuSelectedIndex].name,image_path:this.imageSelected,label_type:"1"===this.subMenuType?"unlabeled":"labeled"}).then((()=>{this.$message.success("提交成功，请稍后点击标注结果获取结果")}))},getAutoLabelCallback(){K.A.post(`${q}/labels/label`,{dataset:this.menuList[this.menuSelectedIndex].name,image_path:this.imageSelected,label_type:"1"===this.subMenuType?"unlabeled":"labeled"}).then((e=>{console.log(e),e.data?(this.$message.success("获取标注信息已替换"),this.imagePrompt=e.data):this.$message.error("暂未获取到标注信息")}))}}},R=s(1241);const G=(0,R.A)(Q,[["render",W]]);var H=G,J=s(1387);const N=[],Y=(0,J.aE)({history:(0,J.Bt)(),routes:N});var Z=Y,ee=s(782),te=(0,ee.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),se=s(371);s(4188);(0,a.Ef)(H).use(te).use(Z).use(se.A).mount("#app")}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,s),l.exports}s.m=e,function(){var e=[];s.O=function(t,a,n,l){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],l=e[d][2];for(var u=!0,o=0;o<a.length;o++)(!1&l||i>=l)&&Object.keys(s.O).every((function(e){return s.O[e](a[o])}))?a.splice(o--,1):(u=!1,l<i&&(i=l));if(u){e.splice(d--,1);var m=n();void 0!==m&&(t=m)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[a,n,l]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,l,i=a[0],u=a[1],o=a[2],m=0;if(i.some((function(t){return 0!==e[t]}))){for(n in u)s.o(u,n)&&(s.m[n]=u[n]);if(o)var d=o(s)}for(t&&t(a);m<i.length;m++)l=i[m],s.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return s.O(d)},a=self["webpackChunkimage_search"]=self["webpackChunkimage_search"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(3758)}));a=s.O(a)})();
//# sourceMappingURL=app.3fd6a27a.js.map