import{_ as u,d as i,z as d,G as p,i as _,S as b,o as t,c as s,h as a,q as r,s as o,e as f,t as n,x as h}from"./app.38775100.js";const k={class:"title"},I={key:1,class:"subtitle"},y=i({__name:"PageHeader",props:{pageInfo:{type:Object,default:()=>({})}},setup(l){const c=l,{pageInfo:e}=d(c),g=p(),m=_(()=>e.value.bgImage?{backgroundImage:`url(${b(e.value.bgImage.path)})`}:{});return(v,P)=>(t(),s("div",{class:h(["page-header",{"use-image":a(e).bgImage}]),style:r(a(m))},[a(e).bgImage&&a(e).bgImage.mask?(t(),s("div",{key:0,class:"header-mask",style:r({background:a(e).bgImage.mask})},null,4)):o("",!0),f("h1",k,n(a(e).title||a(g).title),1),a(e).subtitle?(t(),s("h3",I,n(a(e).subtitle),1)):o("",!0)],6))}});var B=u(y,[["__file","PageHeader.vue"]]);export{B as P};
