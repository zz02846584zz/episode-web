import{g as o,_ as S,a as w,u as f}from"./useHttp.62807f6e.js";import{_ as L}from"./CTA.54615d0d.js";import{f as B,u as I,g as j,h as H,i as A,j as $,o as s,c as a,b as m,a as t,F as p,r as u,k as i,p as D,e as E,t as r,_ as F}from"./entry.dc4126ce.js";import"./nuxt-link.304f5191.js";const y=l=>(D("data-v-84818a87"),l=l(),E(),l),N={class:"about"},U={class:"page-content"},R={class:"top"},V={class:"slogan border-r"},O={class:"subtitle"},P=y(()=>t("span",{style:{"padding-right":"8px"}},null,-1)),W=["innerHTML"],q=y(()=>t("div",{class:"tablet-hidden mobile-hidden"},null,-1)),z=y(()=>t("div",{class:"border-r tablet-hidden mobile-hidden"},null,-1)),G=["innerHTML"],J={class:"body"},K={class:"subtitle"},Q={class:"members-list"},X=y(()=>t("div",{class:"left"},[t("div",{class:"avatar"},[t("img",{src:"https://hyogen.design/asset/img/whoweare/thumb_ryo_kawano_01.jpg"})])],-1)),Y={class:"right"},Z=["textContent"],tt=["textContent"],ot=["innerHTML"],et={class:"cta-container"},st={class:"footer-container"},at=B({__name:"about",async setup(l){let n,_;I({title:"About Us"});const{locale:d}=j(),{data:h}=([n,_]=H(()=>f("about-page","/page/info",{body:{id:3}})),n=await n,_(),n),{data:M}=([n,_]=H(()=>f("about-members","/member/info")),n=await n,_(),n);return A(()=>{o.set(".top .content",{opacity:0}),o.set(".top .intro",{opacity:0}),o.set(".body .members-list",{opacity:0}),o.set(".header .logo, .header .controls",{opacity:0}),o.set(".top .subtitle span",{opacity:0,y:6}),o.set(".top .content > *",{opacity:0,y:12}),o.set(".top .intro > *",{opacity:0,y:12}),o.set(".body .subtitle span",{opacity:0,y:12}),o.set(".body .slogan",{opacity:0,y:16}),o.set(".body .members-list > *",{opacity:0,y:12})}),$(()=>{setTimeout(()=>{o.set(".top .content",{opacity:1}),o.set(".top .intro",{opacity:1}),o.set(".body .members-list",{opacity:1})},300),o.to(".header .logo, .header .controls",{opacity:1,duration:.3,delay:.2}),o.to(".top .subtitle span",{opacity:1,y:0,stagger:.07,delay:.2,duration:.8}),o.to(".top .content > *",{opacity:1,y:0,stagger:.2,delay:.5,duration:1.5}),o.to(".top .intro > *",{opacity:1,y:0,stagger:.1,delay:.9,duration:.8}),o.to(".body .subtitle span",{opacity:1,y:0,stagger:.07,delay:.2,duration:.8}),o.to(".body .slogan",{opacity:1,y:0,delay:1.2,duration:1.2}),o.to(".body .members-list > *",{opacity:1,y:0,delay:1.4,stagger:.3,duration:1.3})}),(nt,it)=>{var b,g,v,x;const T=S,k=L,C=w;return s(),a("div",N,[m(T,{class:"header"}),t("main",null,[t("div",U,[t("div",R,[t("div",V,[t("h1",O,[(s(!0),a(p,null,u("ABOUT".split(""),(e,c)=>(s(),a("span",{key:`about-title-char-${c}`},r(e),1))),128)),P,(s(!0),a(p,null,u("US".split(""),(e,c)=>(s(),a("span",{key:`about-title-char-${c+5}`},r(e),1))),128))]),t("div",{class:"content",innerHTML:(g=(b=i(h))==null?void 0:b[i(d)])==null?void 0:g.metaData.slogan},null,8,W)]),q,z,t("div",{class:"intro",innerHTML:(x=(v=i(h))==null?void 0:v[i(d)])==null?void 0:x.metaData.intro},null,8,G)]),t("div",J,[t("h2",K,[(s(!0),a(p,null,u("MEMBERS".split(""),(e,c)=>(s(),a("span",{key:`member-char-index-${c}`},r(e),1))),128))]),t("div",Q,[(s(!0),a(p,null,u(i(M),(e,c)=>(s(),a("div",{class:"item",key:`member-${c}`},[X,t("div",Y,[t("div",{class:"name",textContent:r(e[i(d)].name)},null,8,Z),t("div",{class:"job",textContent:r(e[i(d)].job)},null,8,tt),t("div",{class:"intro",innerHTML:e[i(d)].intro},null,8,ot)])]))),128))])])]),t("div",et,[m(k)]),t("div",st,[m(C,{class:"footer"})])])])}}});const _t=F(at,[["__scopeId","data-v-84818a87"]]);export{_t as default};
