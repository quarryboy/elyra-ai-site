(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),c=a("NmYn"),l=a.n(c),r=a("Wbzz"),i=a("Xrax"),o=a("k4MR"),d=a("TSYQ"),m=a.n(d),u=a("QH2O"),p=a.n(u),s=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,b=e.tabs,c=void 0===b?[]:b;return Object(s.b)("div",{className:m()(p.a.pageHeader,(t={},t[p.a.withTabs]=c.length,t[p.a.darkMode]="dark"===n,t))},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12"},Object(s.b)("h1",{id:"page-title",className:p.a.text},a)))))},O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,c=b.baseUrl,l=b.subDirectory,i=c+"/edit/"+b.branch+l+"/src/pages"+t;return c?Object(s.b)("div",{className:"bx--row "+O.row},Object(s.b)("div",{className:"bx--col"},Object(s.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},N=a("FCXl"),h=a("dI71"),x=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,b=n.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),c=a===b,i=new RegExp(b+"/?(#.*)?$"),o=n.replace(i,a);return Object(s.b)("li",{key:e,className:m()((t={},t[x.selectedItem]=c,t),x.listItem)},Object(s.b)(r.Link,{className:x.link,to:""+o},e))}));return Object(s.b)("div",{className:x.tabsContainer},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(s.b)("nav",{"aria-label":t},Object(s.b)("ul",{className:x.list},c))))))},t}(b.a.Component),y=a("MjG9"),f=a("CzIb"),v=a("Asxa"),A=a("OIbQ"),k=a.n(A),w=function(e){var t=e.date,a=new Date(t);return t?Object(s.b)(v.c,{className:k.a.row},Object(s.b)(v.a,null,Object(s.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,c=t.frontmatter,d=void 0===c?{}:c,m=t.relativePagePath,u=t.titleType,p=d.tabs,O=d.title,h=d.theme,x=d.description,v=d.keywords,A=d.date,k=Object(f.a)().interiorTheme,I=Object(r.useStaticQuery)("2456312558").site.pathPrefix,P=I?n.pathname.replace(I,""):n.pathname,C=p?P.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",E=h||k;return Object(s.b)(o.a,{tabs:p,homepage:!1,theme:E,pageTitle:O,pageDescription:x,pageKeywords:v,titleType:u},Object(s.b)(j,{title:b?Object(s.b)(b,null):O,label:"label",tabs:p,theme:E}),p&&Object(s.b)(T,{title:O,slug:P,tabs:p,currentTab:C}),Object(s.b)(y.a,{padded:!0},a,Object(s.b)(g,{relativePagePath:m}),Object(s.b)(w,{date:A})),Object(s.b)(N.a,{pageContext:t,location:n,slug:P,tabs:p,currentTab:C}),Object(s.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},E8ty:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return j}));var n=a("wx14"),b=a("zLVn"),c=(a("q1tI"),a("7ljp")),l=a("013z"),r=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},o=i("PageDescription"),d=i("Accordion"),m=i("AccordionItem"),u=i("Title"),p={_frontmatter:r},s=l.a;function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(c.b)(s,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(o,{mdxType:"PageDescription"},Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"<Accordion>")," and ",Object(c.b)("inlineCode",{parentName:"p"},"<AccordionItem>")," components are used together to display\na list of content sections that can be toggled open by clicking the respective\ntitle of each section.")),Object(c.b)("h2",null,"Example"),Object(c.b)(d,{mdxType:"Accordion"},Object(c.b)(m,{title:"Title 1",mdxType:"AccordionItem"},Object(c.b)("p",null,"In ac nisi ut mauris venenatis blandit a et ante. Mauris eu congue velit, eget\ndictum diam. Etiam sed turpis quis ligula interdum lobortis eu et libero.\nPraesent nec eros sit amet elit tempor egestas cursus non nulla. Vestibulum\ndictum luctus lorem in rhoncus."),Object(c.b)("p",null,"Nullam vestibulum blandit libero, ac tempus felis tristique id. Aliquam rhoncus\nvestibulum dui eu dictum. Morbi congue purus eu libero sodales, nec sollicitudin\nligula tempor."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"list item"),Object(c.b)("li",{parentName:"ul"},"list item"),Object(c.b)("li",{parentName:"ul"},"list item"))),Object(c.b)(m,{title:"Title 2",mdxType:"AccordionItem"},"Content Section"),Object(c.b)(m,{title:"Title 3",mdxType:"AccordionItem"},"Content Section")),Object(c.b)("h2",null,"Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-mdx",metastring:"path=components/Accordion/Accordion.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Accordion",path:"components/Accordion/Accordion.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Accordion"}),'<Accordion>\n  <AccordionItem title="Title 1">Content Section</AccordionItem>\n  <AccordionItem title="Title 2">Content Section</AccordionItem>\n  <AccordionItem title="Title 3">Content Section</AccordionItem>\n</Accordion>\n')),Object(c.b)("h3",null,"Props"),Object(c.b)(u,{mdxType:"Title"},"Accordion"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"property"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"propType"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"children"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"node"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pass in the children that will be rendered within the Accordion")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"className"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify an optional className to be applied to the container node")))),Object(c.b)(u,{mdxType:"Title"},"AccordionItem"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"property"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"propType"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"title"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"node"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"‘title’"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The accordion title")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"renderExpando"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"func"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"props => <button {…props} />"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The callback function to render the expando button. Can be a React component class.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iconDescription"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"‘Expand/Collapse’"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The description of the expando icon")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"open"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"true")," to open the expando")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onClick"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"func"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"() => {}"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The handler of the massaged ",Object(c.b)("inlineCode",{parentName:"td"},"click")," event.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onHeadingClick"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"func"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"() => {}"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The handler of the massaged ",Object(c.b)("inlineCode",{parentName:"td"},"click")," event on the heading.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"children"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"node"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Provide the contents of your AccordionItem")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"className"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify an optional className to be applied to the container node")))))}j.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-accordion-mdx-4431cd402b05a02b013b.js.map