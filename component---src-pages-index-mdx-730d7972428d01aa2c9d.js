(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"013z":function(e,t,a){"use strict";var o=a("q1tI"),r=a.n(o),i=a("NmYn"),l=a.n(i),c=a("Wbzz"),n=a("Xrax"),b=a("k4MR"),d=a("TSYQ"),s=a.n(d),u=a("QH2O"),m=a.n(u),g=a("qKvR"),p=function(e){var t,a=e.title,o=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(g.b)("div",{className:s()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===o,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,o=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||o,i=r.baseUrl,l=r.subDirectory,n=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(g.b)("div",{className:"bx--row "+x.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:x.link,href:n},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),j=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,r=o.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===r,n=new RegExp(r+"/?(#.*)?$"),b=o.replace(n,a);return Object(g.b)("li",{key:e,className:s()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(g.b)(c.Link,{className:j.link,to:""+b},e))}));return Object(g.b)("div",{className:j.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:j.list},i))))))},t}(r.a.Component),v=a("MjG9"),y=a("CzIb"),C=a("Asxa"),w=a("OIbQ"),I=a.n(w),k=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(C.c,{className:I.a.row},Object(g.b)(C.a,null,Object(g.b)("div",{className:I.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=e.Title,i=t.frontmatter,d=void 0===i?{}:i,s=t.relativePagePath,u=t.titleType,m=d.tabs,x=d.title,O=d.theme,j=d.description,C=d.keywords,w=d.date,I=Object(y.a)().interiorTheme,P=Object(c.useStaticQuery)("2456312558").site.pathPrefix,N=P?o.pathname.replace(P,""):o.pathname,R=m?N.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",E=O||I;return Object(g.b)(b.a,{tabs:m,homepage:!1,theme:E,pageTitle:x,pageDescription:j,pageKeywords:C,titleType:u},Object(g.b)(p,{title:r?Object(g.b)(r,null):x,label:"label",tabs:m,theme:E}),m&&Object(g.b)(T,{title:x,slug:N,tabs:m,currentTab:R}),Object(g.b)(v.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:s}),Object(g.b)(k,{date:w})),Object(g.b)(f.a,{pageContext:t,location:o,slug:N,tabs:m,currentTab:R}),Object(g.b)(n.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},pfKO:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return x}));var o=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=(a("013z"),a("QH4P")),c=(a("qKvR"),{}),n=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=n("Row"),d=n("Column"),s=n("ImageCard"),u=n("FeatureCard"),m=n("ResourceCard"),g={_frontmatter:c},p=l.a;function x(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(p,Object(o.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("br",null),Object(i.b)(b,{className:"image-card-group",mdxType:"Row"},Object(i.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(i.b)(s,{title:"AI",aspectRatio:"1:1",subTitle:"Elyra",href:"/getting-started-ai/elyra-overview",titleColor:"light",subTitleColor:"light",hoverColor:"light",actionIcon:"arrowRight",mdxType:"ImageCard"},Object(i.b)("img",{src:"/95ba55ea9fab8cffce46c060a16d688f/machine--learning--05.svg",alt:"AI"}))),Object(i.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(i.b)(s,{title:"Canvas",aspectRatio:"1:1",subTitle:"Elyra",href:"/getting-started/elyra-canvas-overview",titleColor:"light",subTitleColor:"light",hoverColor:"light",actionIcon:"arrowRight",mdxType:"ImageCard"},Object(i.b)("img",{src:"/2603d7fad45d0e3561dcaf0a844dd2a8/canvas.svg",alt:"canvas"}))),Object(i.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(i.b)(s,{title:"Contribute",aspectRatio:"1:1",subTitle:"Join our community?",href:"how-do-i-contribute",titleColor:"light",subTitleColor:"light",hoverColor:"light",actionIcon:"arrowRight",mdxType:"ImageCard"},Object(i.b)("img",{src:"/469e05cb2d0cc38da0def62c161f69d8/community.svg",alt:"community"})))),Object(i.b)(u,{subTitle:"Elyra AI",title:"Installation",actionIcon:"arrowRight",href:"/getting-started-ai/installation",color:"dark",mdxType:"FeatureCard"},Object(i.b)("img",{src:"/beae46eb2f161675a80a66fbc64411d9/large-image01.svg",alt:"demo image"})),Object(i.b)(u,{subTitle:"Elyra Canvas",title:"Installation",actionIcon:"arrowRight",href:"/getting-started/installation",color:"dark",mdxType:"FeatureCard"},Object(i.b)("img",{src:"/939e95d3efe88611fc83e6b43f83812e/large-image02a.svg",alt:"demo image"})),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b,{mdxType:"Row"},Object(i.b)(d,{colMd:6,colLg:6,noGutterSm:!0,mdxType:"Column"},Object(i.b)(m,{subTitle:"Github",title:"Elyra AI repo",aspectRatio:"2:1",actionIcon:"launch",color:"dark",titleColor:"dark",subTitleColor:"dark",href:"https://github.com/elyra-ai",mdxType:"ResourceCard"},Object(i.b)("img",{src:"/5afedc4b2e56f162b8f6768ffdb8c308/logo--github.svg",alt:"Github icon"}))),Object(i.b)(d,{colMd:6,colLg:6,noGutterSm:!0,mdxType:"Column"},Object(i.b)(m,{subTitle:"Github",title:"Elyra Canvas repo",aspectRatio:"2:1",actionIcon:"launch",color:"dark",titleColor:"dark",subTitleColor:"dark",href:"https://github.com/elyra-ai/canvas",mdxType:"ResourceCard"},Object(i.b)("img",{src:"/5afedc4b2e56f162b8f6768ffdb8c308/logo--github.svg",alt:"Github icon"})))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-730d7972428d01aa2c9d.js.map