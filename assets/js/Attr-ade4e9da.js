import{a as r}from"./mode-json5-7b96b29c.js";import{C as s}from"./CommonAttr-b0e96820.js";import{n as l}from"./index-2cd0ec9a.js";import"./request-a0767aa7.js";var m={exports:{}};(function(e,t){ace.define("ace/theme/chrome-css",["require","exports","module"],function(n,o,a){a.exports=`.ace-chrome .ace_gutter {
  background: #ebebeb;
  color: #333;
  overflow : hidden;
}

.ace-chrome .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-chrome {
  background-color: #FFFFFF;
  color: black;
}

.ace-chrome .ace_cursor {
  color: black;
}

.ace-chrome .ace_invisible {
  color: rgb(191, 191, 191);
}

.ace-chrome .ace_constant.ace_buildin {
  color: rgb(88, 72, 246);
}

.ace-chrome .ace_constant.ace_language {
  color: rgb(88, 92, 246);
}

.ace-chrome .ace_constant.ace_library {
  color: rgb(6, 150, 14);
}

.ace-chrome .ace_invalid {
  background-color: rgb(153, 0, 0);
  color: white;
}

.ace-chrome .ace_fold {
}

.ace-chrome .ace_support.ace_function {
  color: rgb(60, 76, 114);
}

.ace-chrome .ace_support.ace_constant {
  color: rgb(6, 150, 14);
}

.ace-chrome .ace_support.ace_type,
.ace-chrome .ace_support.ace_class
.ace-chrome .ace_support.ace_other {
  color: rgb(109, 121, 222);
}

.ace-chrome .ace_variable.ace_parameter {
  font-style:italic;
  color:#FD971F;
}
.ace-chrome .ace_keyword.ace_operator {
  color: rgb(104, 118, 135);
}

.ace-chrome .ace_comment {
  color: #236e24;
}

.ace-chrome .ace_comment.ace_doc {
  color: #236e24;
}

.ace-chrome .ace_comment.ace_doc.ace_tag {
  color: #236e24;
}

.ace-chrome .ace_constant.ace_numeric {
  color: rgb(0, 0, 205);
}

.ace-chrome .ace_variable {
  color: rgb(49, 132, 149);
}

.ace-chrome .ace_xml-pe {
  color: rgb(104, 104, 91);
}

.ace-chrome .ace_entity.ace_name.ace_function {
  color: #0000A2;
}


.ace-chrome .ace_heading {
  color: rgb(12, 7, 255);
}

.ace-chrome .ace_list {
  color:rgb(185, 6, 144);
}

.ace-chrome .ace_marker-layer .ace_selection {
  background: rgb(181, 213, 255);
}

.ace-chrome .ace_marker-layer .ace_step {
  background: rgb(252, 255, 0);
}

.ace-chrome .ace_marker-layer .ace_stack {
  background: rgb(164, 229, 101);
}

.ace-chrome .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-chrome .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.07);
}

.ace-chrome .ace_gutter-active-line {
    background-color : #dcdcdc;
}

.ace-chrome .ace_marker-layer .ace_selected-word {
  background: rgb(250, 250, 255);
  border: 1px solid rgb(200, 200, 250);
}

.ace-chrome .ace_storage,
.ace-chrome .ace_keyword,
.ace-chrome .ace_meta.ace_tag {
  color: rgb(147, 15, 128);
}

.ace-chrome .ace_string.ace_regex {
  color: rgb(255, 0, 0)
}

.ace-chrome .ace_string {
  color: #1A1AA6;
}

.ace-chrome .ace_entity.ace_other.ace_attribute-name {
  color: #994409;
}

.ace-chrome .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}
  
.ace-chrome .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
}
`}),ace.define("ace/theme/chrome",["require","exports","module","ace/theme/chrome-css","ace/lib/dom"],function(n,o,a){o.isDark=!1,o.cssClass="ace-chrome",o.cssText=n("./chrome-css");var c=n("../lib/dom");c.importCssString(o.cssText,o.cssClass,!1)}),function(){ace.require(["ace/theme/chrome"],function(n){e&&(e.exports=n)})}()})(m);var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"attr"},[n("CommonAttr"),n("el-form",[n("el-form-item",{attrs:{label:"标题"}},[n("el-switch",{attrs:{"active-text":"显示标题"},model:{value:e.option.title.show,callback:function(o){e.$set(e.option.title,"show",o)},expression:"option.title.show"}}),n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.option.title.text,callback:function(o){e.$set(e.option.title,"text",o)},expression:"option.title.text"}})],1),n("el-form-item",{attrs:{label:"工具提示"}},[n("el-switch",{attrs:{"active-text":"显示提示"},model:{value:e.option.tooltip.show,callback:function(o){e.$set(e.option.tooltip,"show",o)},expression:"option.tooltip.show"}})],1),n("el-form-item",{attrs:{label:"图例"}},[n("el-switch",{attrs:{"active-text":"显示图例"},model:{value:e.option.legend.show,callback:function(o){e.$set(e.option.legend,"show",o)},expression:"option.legend.show"}})],1),n("el-form-item",{attrs:{label:"横坐标"}},[n("el-switch",{attrs:{"active-text":"显示横坐标"},model:{value:e.option.xAxis.show,callback:function(o){e.$set(e.option.xAxis,"show",o)},expression:"option.xAxis.show"}})],1),n("el-form-item",[n("el-dropdown",[n("span",{staticClass:"el-dropdown-link"},[e._v(" 更换图表类型"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.charts,function(o,a){return n("span",{key:a,on:{click:function(c){return e.selectchart(o.title)}}},[n("el-dropdown-item",[e._v(e._s(o.name))])],1)}),0)],1)],1),n("el-form-item",{attrs:{label:"静态数据源"}},[n("el-button",{on:{click:e.openStaticWinbox}},[e._v("修改数据")])],1)],1),n("el-dialog",{attrs:{title:"数据修改",visible:e.dialogVisible,width:"75%"},on:{"update:visible":function(o){e.dialogVisible=o}}},[n("div",{ref:"ace",staticClass:"ace"}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.updatedata}},[e._v("更新数据")])],1)])],1)},h=[];const d={components:{CommonAttr:s},data(){return{dialogVisible:!1,charts:[{title:"bar",name:"柱状图"},{title:"scatter",name:"散点图"},{title:"line",name:"折线图"}]}},computed:{curComponent(){return this.$store.state.curComponent},option(){return this.$store.state.curComponent.propValue.option}},methods:{openStaticWinbox(){this.dialogVisible=!this.dialogVisible,this.$nextTick(()=>{r.config.set("basePath","https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.14/"),this.editor=r.edit(this.$refs.ace,{maxLines:28,minLines:28,fontSize:14,theme:"ace/theme/chrome",mode:"ace/mode/json5",tabSize:4,readOnly:!1,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0});let e=JSON.stringify(this.curComponent.propValue.option.series.data),t=JSON.stringify(this.curComponent.propValue.option.xAxis.data);this.editor.setValue(e+`
`+t)})},findstring(e,t,n){return e.substr(e.indexOf(t),e.indexOf(n)+1)},updatedata(){let e=this.editor.getValue(),t=this.findstring(e,"[","]"),n=this.findstring(e.substr(e.indexOf("]")+1),"[","]");this.curComponent.propValue.option.series.data=JSON.parse(t),this.curComponent.propValue.option.xAxis.data=JSON.parse(n),this.$message.success("更新成功"),this.dialogVisible=!this.dialogVisible},selectchart(e){this.curComponent.propValue.option.series.type=e}}},i={};var A=l(d,p,h,!1,u,null,null,null);function u(e){for(let t in i)this[t]=i[t]}const x=function(){return A.exports}();export{x as default};
