import{O as a}from"./OnEvent-bb53bee4.js";import{n as o}from"./index-d7af2dd1.js";var h=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticStyle:{overflow:"hidden"}},[t("canvas",{ref:"canvas"})])},c=[];const u={extends:a,props:{propValue:{type:Object,required:!0,default:()=>{}},element:{type:Object,default:()=>{}}},data(){return{width:0,height:0,img:null,canvas:null,ctx:null,isFirst:!0}},watch:{"element.style.width":function(){this.drawImage()},"element.style.height":function(){this.drawImage()},"element.style.url":function(){this.drawImage(this.element.style.url)},"propValue.url":function(){this.drawImage(this.propValue.url)},"propValue.flip.vertical":function(){this.mirrorFlip()},"propValue.flip.horizontal":function(){this.mirrorFlip()}},mounted(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.drawImage()},methods:{drawImage(i=""){const{width:e,height:t}=this.element.style;this.canvas.width=e,this.canvas.height=t,this.img=document.createElement("img"),(i||this.propValue.url||this.element.style.url)&&(this.img.src=i||this.propValue.url||this.element.style.url,this.img.onload=()=>{this.ctx.drawImage(this.img,0,0,e,t),this.mirrorFlip()})},mirrorFlip(){const{vertical:i,horizontal:e}=this.propValue.flip,{width:t,height:s}=this.element.style,n=e?-1:1,r=i?-1:1;this.ctx.clearRect(0,0,t,s),this.ctx.translate(t/2-t*n/2,s/2-s*r/2),this.ctx.scale(n,r),this.ctx.drawImage(this.img,0,0,t,s),this.ctx.setTransform(1,0,0,1,0,0)}}},l={};var m=o(u,h,c,!1,p,null,null,null);function p(i){for(let e in l)this[e]=l[e]}const v=function(){return m.exports}();export{v as default};
