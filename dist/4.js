(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{97:function(t,r,n){var e=n(98);t.exports={__esModule:!0,default:e.svgComponent({tag:"svg",attrsMap:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",xmlns:"http://www.w3.org/2000/svg"},children:[{tag:"path",attrsMap:{d:"M9 19V13C9 12.4696 8.78929 11.9609 8.41421 11.5858C8.03914 11.2107 7.53043 11 7 11H5C4.46957 11 3.96086 11.2107 3.58579 11.5858C3.21071 11.9609 3 12.4696 3 13V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H7C7.53043 21 8.03914 20.7893 8.41421 20.4142C8.78929 20.0391 9 19.5304 9 19ZM9 19V9C9 8.46957 9.21071 7.96086 9.58579 7.58579C9.96086 7.21071 10.4696 7 11 7H13C13.5304 7 14.0391 7.21071 14.4142 7.58579C14.7893 7.96086 15 8.46957 15 9V19M9 19C9 19.5304 9.21071 20.0391 9.58579 20.4142C9.96086 20.7893 10.4696 21 11 21H13C13.5304 21 14.0391 20.7893 14.4142 20.4142C14.7893 20.0391 15 19.5304 15 19M15 19V5C15 4.46957 15.2107 3.96086 15.5858 3.58579C15.9609 3.21071 16.4696 3 17 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H17C16.4696 21 15.9609 20.7893 15.5858 20.4142C15.2107 20.0391 15 19.5304 15 19Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}]})}},98:function(t,r,n){"use strict";n.r(r),n.d(r,"isElementNode",(function(){return i})),n.d(r,"svgComponent",(function(){return a}));var e=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var i in r=arguments[n])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},i=function(t){return t.hasOwnProperty("tag")};var a=function(t){return{props:{scale:{type:[Number,Boolean],default:1,required:!1},fill:{type:String,default:"currentColor",required:!1}},inheritAttrs:!1,computed:{dimension:function(){if(!this.scale||!t.attrsMap||!t.attrsMap.viewBox)return{};var r=t.attrsMap.viewBox.split(" ");return{width:Math.floor(parseInt(r[2])*this.scale),height:Math.floor(parseInt(r[3])*this.scale)}}},render:function(r){var n=this.scale?this.dimension:{},a=e({},t.attrsMap,{"aria-hidden":"true",fill:this.fill},n,this.$attrs);return r(t.tag,{attrs:a,on:this.$listeners},[this.$slots.default].concat((t.children||[]).map((function(t){return function t(r,n){if(i(n)){var e=[];return n.children&&(e=n.children.map((function(n){return t(r,n)}))),r(n.tag,{attrs:n.attrsMap},e)}return n.text}(r,t)}))))}}}}}]);