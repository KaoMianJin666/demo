import{a as o}from"./axios-f5a5de21.js";import{n as u}from"./index-33347779.js";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"main-body"},[t("div",{staticClass:"left-menu"},[t("div",{staticClass:"left-menu-content"},[e._l(e.menuList,function(s,i){return t("div",{key:i,staticClass:"menu-item",class:{selected:e.menuSelectedIndex===i},on:{click:function(n){return e.getMenuInfo(i)}}},[e.editMenuIndex!==i?t("div",{staticClass:"menu-name"},[e._v(e._s(s.name))]):t("div",{staticClass:"menu-name"},[t("el-input",{on:{click:function(n){n.stopPropagation()},keydown:function(n){e.saveMenuChange(n,i)}},model:{value:e.menuList[i].nameText,callback:function(n){e.$set(e.menuList[i],"nameText",n)},expression:"menuList[index].nameText"}})],1),t("div",{staticClass:"menu-handle"},[e.editMenuIndex!==i?t("div",{staticClass:"menu-handle-btn",on:{click:function(n){n.stopPropagation(),e.editMenuIndex=i}}},[e._v(" 编辑 ")]):t("div",{staticClass:"menu-handle-btn",on:{click:function(n){return n.stopPropagation(),e.saveMenuChange({keyCode:13},i)}}},[e._v(" 保存 ")]),t("div",{staticClass:"menu-handle-btn danger",on:{click:function(n){return n.stopPropagation(),e.deleteMenu(i)}}},[e._v("删除")])])])}),t("div",{staticClass:"menu-item add",on:{click:e.addMenu}},[e._v("添加")])],2)]),e.menuSelectedIndex!==null?t("div",{staticClass:"left-sub-menu"},[t("div",{staticClass:"left-sub-menu-title"},[t("el-tag",{attrs:{type:"success"}},[e._v(" 已处理"),t("span",{staticClass:"success"},[e._v(e._s(e.menuList[e.menuSelectedIndex].labeled))]),e._v("张 ")]),t("el-tag",{attrs:{type:"danger"}},[e._v(" 未处理"),t("span",{staticClass:"danger"},[e._v(e._s(e.menuList[e.menuSelectedIndex].unlabeled))]),e._v("张 ")])],1),t("div",{staticClass:"left-sub-menu-content"},[t("el-scrollbar",{staticStyle:{width:"100%",height:"100%"}},[t("el-collapse",{staticStyle:{"--el-collapse-content-bg-color":"#000","--el-collapse-header-bg-color":"#000","--el-collapse-header-text-color":"#fff"},attrs:{accordion:""},model:{value:e.subMenuType,callback:function(s){e.subMenuType=s},expression:"subMenuType"}},[t("el-collapse-item",{attrs:{title:"未处理图片",name:"1"}},[t("div",{staticClass:"upload-area"},[t("el-upload",{staticClass:"avatar-uploader",attrs:{multiple:"","before-upload":e.beforeUpload,accept:"image/*",data:{dataset:e.menuList[e.menuSelectedIndex].name},action:`${e.httpRequestUrl}/labels/upload`,"on-success":function(){e.getMenuList(),e.getSubMenuInfo(e.menuSelectedIndex)},"show-file-list":!1}},[t("div",{staticClass:"avatar-uploader-icon"},[t("i",{staticClass:"el-icon el-icon-plus",staticStyle:{"font-size":"28px",color:"#8c939d"}})])])],1),e.menuList[e.menuSelectedIndex].unlabeled>e.type1PageSize?t("div",{staticClass:"page-area"},[t("el-pagination",{staticClass:"mt-4",staticStyle:{"--el-pagination-button-disabled-bg-color":"#222","--el-pagination-bg-color":"#222","--el-pagination-button-color":"#fff"},attrs:{"page-size":e.type1PageSize,small:"",layout:"prev, pager, next",total:e.menuList[e.menuSelectedIndex].unlabeled},on:{"current-change":e.currentChange},model:{value:e.type1Page,callback:function(s){e.type1Page=s},expression:"type1Page"}})],1):e._e(),e._l(e.imageList,function(s,i){return t("div",{key:i,staticClass:"left-sub-menu-item"},[e.subMenuType==="1"?t("div",{staticClass:"left-sub-menu-image",on:{click:function(n){return e.getImageInfo(s)}}},[t("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:`${e.httpRequestUrl}/labels/static/${e.menuList[e.menuSelectedIndex].name}/${s}`,fit:"contain"}}),t("div",{staticClass:"delete-btn"},[t("i",{staticClass:"el-icon-delete",staticStyle:{color:"red"},on:{click:function(n){return n.stopPropagation(),e.delImage(s)}}})])],1):e._e()])})],2),t("el-collapse-item",{attrs:{title:"已处理图片",name:"2"}},[e.menuList[e.menuSelectedIndex].labeled>e.type2PageSize?t("div",{staticClass:"page-area"},[t("el-pagination",{staticClass:"mt-4",staticStyle:{"--el-pagination-button-disabled-bg-color":"#222","--el-pagination-bg-color":"#222","--el-pagination-button-color":"#fff"},attrs:{"page-size":e.type2PageSize,small:"",layout:"prev, pager, next",total:e.menuList[e.menuSelectedIndex].labeled},on:{"current-change":e.currentChange}})],1):e._e(),e._l(e.imageList,function(s,i){return t("div",{key:i,staticClass:"left-sub-menu-item"},[e.subMenuType==="2"?t("div",{staticClass:"left-sub-menu-image",on:{click:function(n){return e.getImageInfo(s)}}},[t("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:`${e.httpRequestUrl}/labels/static/${e.menuList[e.menuSelectedIndex].name}/${s}`,fit:"contain"}}),t("div",{staticClass:"delete-btn"},[t("i",{staticClass:"el-icon-delete",staticStyle:{color:"red"},on:{click:function(n){return n.stopPropagation(),e.delImage(s)}}})])],1):e._e()])})],2)],1)],1)],1)]):e._e(),e.imageSelected?t("div",{staticClass:"content"},[t("div",{staticClass:"content-image-area"},[t("el-image",{staticStyle:{width:"400px",height:"400px",position:"absolute",top:"0",left:"0",bottom:"0",right:"0",margin:"auto"},attrs:{"preview-src-list":[`${e.httpRequestUrl}/labels/static/${e.menuList[e.menuSelectedIndex].name}/${e.imageSelected}`],src:`${e.httpRequestUrl}/labels/static/${e.menuList[e.menuSelectedIndex].name}/${e.imageSelected}`,fit:"contain"}})],1),t("div",{staticClass:"content-image-msg"},[t("div",{staticClass:"content-msg-title"},[e._v("图片信息")]),t("div",{staticClass:"content-dataset"},[t("label",[e._v("所属数据集")]),t("div",{staticClass:"content-other"},[t("el-select",{on:{change:e.changeImageDataset},model:{value:e.imageDataset,callback:function(s){e.imageDataset=s},expression:"imageDataset"}},e._l(e.menuList,function(s){return t("el-option",{key:s.name,attrs:{value:s.name,label:s.name}})}),1)],1)]),t("div",{staticClass:"content-prompt"},[t("label",[e._v("提示词")]),t("div",{staticClass:"content-other"},[t("el-input",{staticStyle:{width:"100%"},attrs:{rows:5,type:"textarea",placeholder:"请使用,分割每个prompt"},model:{value:e.imagePrompt,callback:function(s){e.imagePrompt=s},expression:"imagePrompt"}})],1)]),t("div",{staticClass:"prompt-translate-handle"},[t("el-dropdown",{staticStyle:{"vertical-align":"middle"},on:{command:e.getAutoLabel},scopedSlots:e._u([{key:"dropdown",fn:function(){return[t("el-dropdown-menu",[t("el-dropdown-item",{attrs:{command:"chatgpt4"}},[e._v("chatgpt 4")]),t("el-dropdown-item",{attrs:{command:"chatgpt4"}},[e._v("midjourney")])],1)]},proxy:!0}],null,!1,3779142512)},[t("el-button",{attrs:{type:"primary",size:"small"}},[e._v(" 自动标注"),t("i",{staticClass:"el-icon el-icon-arrow-down"})])],1)],1),t("div",{staticClass:"prompt-save-handle"},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.getAutoLabelCallback}},[e._v("标注结果")])],1),t("div",{staticClass:"prompt-translate-handle"},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.getTranslateMsg}},[e._v("翻译")])],1),t("div",{staticClass:"prompt-save-handle"},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.saveLabel}},[e._v("保存")])],1)])]):e._e(),e.imageSelected?t("div",{staticClass:"prompts-list"},[t("el-tabs",{staticClass:"demo-tabs",staticStyle:{height:"100%"},model:{value:e.promptsListSelected,callback:function(s){e.promptsListSelected=s},expression:"promptsListSelected"}},e._l(e.promptsList,function(s){return t("el-tab-pane",{key:s.name,attrs:{label:s.name,name:s.name}},[t("el-scrollbar",{staticStyle:{width:"100%",height:"100%"}},e._l(s.list,function(i,n){return t("el-tag",{key:n,staticStyle:{"margin-right":"10px","margin-bottom":"10px",cursor:"pointer"},on:{click:function(h){e.imagePrompt+=`${e.imagePrompt?",":""}${i}`}}},[e._v(" "+e._s(i)+" ")])}),1)],1)}),1)],1):e._e(),t("el-dialog",{attrs:{"destroy-on-close":"",title:"替换提示词",width:"440px"},scopedSlots:e._u([{key:"footer",fn:function(){return[t("div",{staticClass:"dialog-footer"},[t("el-button",{on:{click:e.closeTranslateDialog}},[e._v("取消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.replacePrompt}},[e._v(" 替换 ")])],1)]},proxy:!0}]),model:{value:e.translateVisible,callback:function(s){e.translateVisible=s},expression:"translateVisible"}},[t("el-input",{staticStyle:{width:"400px"},attrs:{rows:10,type:"textarea",placeholder:"翻译结果"},model:{value:e.translateMsg,callback:function(s){e.translateMsg=s},expression:"translateMsg"}})],1)],1)},m=[];const l="https://u248120-87de-6175a03c.westc.gpuhub.com:8443",d={data(){return{httpRequestUrl:l,editMenuIndex:null,menuSelectedIndex:null,subMenuType:"1",type1Page:1,type1PageSize:10,type2Page:1,type2PageSize:10,menuList:[],imageList:[],imageSelected:null,imagePrompt:null,imageDataset:null,promptsList:[],promptsListSelected:"",translateMsg:"",translateVisible:!1}},mounted(){this.getPromptsList(),this.init()},watch:{subMenuType(){this.getSubMenuInfo(this.menuSelectedIndex)}},methods:{init(){this.editMenuIndex=null,this.menuSelectedIndex=null,this.imageSelected=null,this.getMenuList()},getMenuList(){o.get(`${l}/labels/get_datasets`).then(e=>{const{data:a}=e;this.menuList=Object.keys(a).map(t=>Object.assign({name:t,nameText:t},a[t]))})},saveMenuChange(e,a){if(e.keyCode===13){if(this.menuList[a].nameText===this.menuList[a].name)return;if(this.menuList.filter(t=>t.name===this.menuList[a].nameText).length){this.$message.error("数据集名称不可重复");return}o.post(`${l}/labels/rename_dataset`,{dataset:this.menuList[a].name,name:this.menuList[a].nameText}).then(()=>{this.$message.success("修改成功"),this.editMenuIndex=null,this.init()})}},addMenu(){this.$prompt("请输入数据集名称","提示",{confirmButtonText:"保存",cancelButtonText:"取消",inputErrorMessage:"请输入数据集名称"}).then(({value:e})=>{if(!e){this.$message.error("请输入数据集名称");return}if(this.menuList.filter(a=>a.name===e).length){this.$message.error("数据集名称不可重复");return}o.post(`${l}/labels/create_dataset`,{dataset:e}).then(()=>{this.$message.success("新建成功"),this.init()})}).catch(()=>{})},deleteMenu(e){this.$confirm("此操作不可逆，是否继续","警告",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{o.post(`${l}/labels/delete_dataset`,{dataset:this.menuList[e].name}).then(()=>{this.$message.success("成功删除数据集"),this.init()})}).catch(()=>{this.$message("已取消删除数据集")})},getMenuInfo(e,a=0){this.menuSelectedIndex===e&&!a||(this.menuSelectedIndex=e,this.subMenuType="1",this.type1Page=1,this.type2Page=1,this.imageSelected=null,this.getSubMenuInfo(e))},beforeUpload(e){if(e.size>1024*1024*10)return this.$message.error("请上传10Mb以内的图片"),!1},currentChange(e){this.subMenuType==="1"?this.type1Page=e:this.type2Page=e,this.getSubMenuInfo(this.menuSelectedIndex)},getSubMenuInfo(e){this.imageList=[];let a=this.subMenuType==="1"?this.type1Page:this.type2Page;o.post(`${l}/labels/query`,{dataset:this.menuList[e].name,page:a,page_size:this.subMenuType==="1"?this.type1PageSize:this.type2PageSize,label_type:this.subMenuType==="1"?"unlabeled":"labeled"}).then(t=>{this.imageList=t.data,!this.imageList.length&&a>1&&(this.subMenuType==="1"?this.type1Page=this.type1Page-1:this.type2Page=this.type2Page-1,this.getSubMenuInfo(this.menuSelectedIndex))})},delImage(e){this.$confirm("此操作不可逆，是否继续","警告",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{o.post(`${l}/labels/delete_image`,{dataset:this.menuList[this.menuSelectedIndex].name,label_type:this.subMenuType==="1"?"unlabeled":"labeled",image_path:e}).then(()=>{this.$message.success("删除图片成功"),this.getMenuList(),this.getSubMenuInfo(this.menuSelectedIndex),this.imageSelected=null})}).catch(()=>{this.$message("已取消删除图片")})},getImageInfo(e){this.imageSelected=e,o.post(`${l}/labels/image_details`,{dataset:this.menuList[this.menuSelectedIndex].name,image_path:e}).then(a=>{this.imagePrompt=a.data.prompt||"",this.imageDataset=this.menuList[this.menuSelectedIndex].name,this.promptsList.length?this.promptsListSelected=this.promptsList[0].name:this.promptsListSelected=""})},changeImageDataset(){this.imageDataset!==this.menuList[this.menuSelectedIndex].name&&this.$confirm(`您正在将此图片移动至《${this.imageDataset}》数据集，是否继续`,"警告",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{o.post(`${l}/labels/move`,{dataset:this.menuList[this.menuSelectedIndex].name,image_path:this.imageSelected,target_dataset:this.imageDataset}).then(()=>{this.$message.success("移动成功"),this.getMenuList(),this.getMenuInfo(this.menuSelectedIndex,1),this.imageSelected=null})}).catch(()=>{this.imageDataset=this.menuList[this.menuSelectedIndex].name,this.$message("已取消移动")})},getPromptsList(){o.get(`${l}/labels/prompt_helper`).then(e=>{this.promptsList=Object.keys(e.data).map(a=>({name:a,list:e.data[a]})),this.promptsList.length?this.promptsListSelected=this.promptsList[0].name:this.promptsListSelected=""})},getTranslateMsg(){o.post(`${l}/labels/translate`,{prompt:this.imagePrompt}).then(e=>{this.translateMsg=e.data,this.translateVisible=!0})},replacePrompt(){this.imagePrompt=this.translateMsg,this.translateVisible=!1,this.$message.success("替换成功")},closeTranslateDialog(){this.translateVisible=!1,this.$message("取消操作")},saveLabel(){o.post(`${l}/labels/label`,{dataset:this.menuList[this.menuSelectedIndex].name,image_path:this.imageSelected,prompt:this.imagePrompt}).then(()=>{this.$message.success("保存成功"),this.getMenuList(),this.getMenuInfo(this.menuSelectedIndex,1),this.imageSelected=null})},getAutoLabel(e){o.post(`${l}/labels/auto_label`,{dataset:this.menuList[this.menuSelectedIndex].name,image_path:this.imageSelected,backend:e}).then(a=>{this.$message.success("提交成功，请稍后点击标注结果获取结果")})},getAutoLabelCallback(){o.post(`${l}/labels/get_auto_label`,{image_path:this.imageSelected}).then(e=>{e.data==="还没处理完，等待结果"?this.$message.error("还没处理完，等待结果"):e.data==="请先点击自动标注之后再来查询结果"?this.$message.error("请先点击自动标注之后再来查询结果"):(this.translateMsg=e.data,this.translateVisible=!0)})}}},c={};var p=u(d,r,m,!1,g,"71fba9b6",null,null);function g(e){for(let a in c)this[a]=c[a]}const v=function(){return p.exports}();export{v as default};
