import{g as s,_ as j,a as k,u as C,c as S,d as I}from"./useHttp.2f997d61.js";import{_ as w}from"./CTA.26ddbfeb.js";import{f as A,u as $,g as B,h as F,i as H,j as N,o,c as n,b as i,a as t,F as r,r as l,k as d,t as m,w as W,p as b,e as L}from"./entry.b32f7384.js";import{_ as P}from"./_plugin-vue_export-helper.c27b6911.js";import"./nuxt-link.6bf5c458.js";const R=a=>(b("data-v-ed697508"),a=a(),L(),a),V={class:"projects"},D={class:"line-container"},E=R(()=>t("span",null,null,-1)),K=[E],M={class:"page-content"},O={class:"page-title"},T={class:"projects-list"},q=["src"],z=["textContent"],G={class:"icon"},J=["src"],Q={class:"footer-container"},U=A({__name:"index",async setup(a){let c,p;$({title:"Works"});const{locale:h}=B(),{data:y}=([c,p]=F(()=>C("project-list","/project/list",{body:{id:9}})),c=await c,p(),c);return H(()=>{s.set(".header .logo, .header .controls",{opacity:0}),s.set(".page-title span",{opacity:0,y:6}),s.set(".projects-list > .item",{opacity:0,y:30})}),N(()=>{s.to(".header .logo, .header .controls",{opacity:1,duration:.3,delay:.2}),s.to(".page-title span",{opacity:1,y:0,stagger:.07,delay:.2}),s.to(".projects-list > .item",{y:0,stagger:.08,delay:.8,duration:1.2}),s.to(".projects-list > .item",{opacity:1,stagger:.08,delay:.8,duration:.8})}),(u,X)=>{const g=j,v=I,f=w,x=k;return o(),n("div",V,[i(g,{class:"header"}),t("div",D,[(o(),n(r,null,l(7,e=>t("div",{class:"line",key:`line-${e}`},K)),64))]),t("div",M,[t("div",O,[(o(!0),n(r,null,l("WORKS".split(""),(e,_)=>(o(),n("span",{key:`project-title-char-${_}`},m(e),1))),128))]),t("div",T,[(o(!0),n(r,null,l(d(y),(e,_)=>(o(),n("div",{class:"item",key:`project-item-${_}`},[i(v,{to:`/project/${e.slug}`},{default:W(()=>[t("img",{src:e.cover},null,8,q),t("div",{class:"title",textContent:m(e[d(h)].title)},null,8,z),t("div",G,[t("img",{src:("useAssets"in u?u.useAssets:d(S))("icons/Play.svg")},null,8,J)])]),_:2},1032,["to"])]))),128))]),i(f)]),t("div",Q,[i(x,{class:"footer"})])])}}});const ot=P(U,[["__scopeId","data-v-ed697508"]]);export{ot as default};
