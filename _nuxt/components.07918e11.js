import{u as l}from"./composables.13e9800d.js";import{j as i}from"./entry.4231c9d7.js";const g=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),o=(t,e)=>(n,r)=>(l(()=>t({...g(n),...r.attrs},r)),()=>e?r.slots.default?.():null),s={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String};i({name:"NoScript",inheritAttrs:!1,props:{...s,title:String,body:Boolean,renderPriority:[String,Number]},setup:o((t,{slots:e})=>{const n={...t},r=(e.default?.()||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return r&&(n.children=r),{noscript:[n]}})});const d=i({name:"Link",inheritAttrs:!1,props:{...s,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:o(t=>({link:[t]}))});i({name:"Base",inheritAttrs:!1,props:{...s,href:String,target:String},setup:o(t=>({base:t}))});const u=i({name:"Title",inheritAttrs:!1,setup:o((t,{slots:e})=>({title:e.default?.()?.[0]?.children||null}))}),m=i({name:"Meta",inheritAttrs:!1,props:{...s,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:o(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})});i({name:"Style",inheritAttrs:!1,props:{...s,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:o((t,{slots:e})=>{const n={...t},r=e.default?.()?.[0]?.children;return r&&(n.children=r),{style:[n]}})});const c=i({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>e.slots.default?.()});i({name:"Html",inheritAttrs:!1,props:{...s,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:o(t=>({htmlAttrs:t}),!0)});i({name:"Body",inheritAttrs:!1,props:{...s,renderPriority:[String,Number]},setup:o(t=>({bodyAttrs:t}),!0)});export{c as H,d as L,m as M,u as T};
