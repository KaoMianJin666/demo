import{O as l}from"./OnEvent-e6464d2f.js";import{n as i}from"./index-2cd0ec9a.js";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"svg-star-container"},[n("svg",{attrs:{version:"1.1",baseProfile:"full",xmlns:"http://www.w3.org/2000/svg"}},[n("polygon",{ref:"star",attrs:{points:t.points,stroke:t.element.style.borderColor,fill:t.element.style.backgroundColor,"stroke-width":"1"}})]),n("v-text",{attrs:{"prop-value":t.element.propValue,element:t.element}})],1)},c=[];const p={extends:l,props:{propValue:{type:String,required:!0,default:""},element:{type:Object,default:()=>{}}},data(){return{points:""}},watch:{"element.style.width":function(){this.draw()},"element.style.height":function(){this.draw()}},mounted(){this.draw()},methods:{draw(){const{width:t,height:e}=this.element.style;this.drawPolygon(t,e)},drawPolygon(t,e){const r=[[.5,0],[.625,.375],[1,.375],[.75,.625],[.875,1],[.5,.75],[.125,1],[.25,.625],[0,.375],[.375,.375]].map(o=>t*o[0]+" "+e*o[1]);this.points=r.toString()}}},s={};var u=i(p,a,c,!1,d,"b769c592",null,null);function d(t){for(let e in s)this[e]=s[e]}const h=function(){return u.exports}();export{h as default};
