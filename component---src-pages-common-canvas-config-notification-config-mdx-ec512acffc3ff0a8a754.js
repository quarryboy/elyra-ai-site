(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=n("NmYn"),l=n.n(o),c=n("Wbzz"),r=n("Xrax"),b=n("k4MR"),s=n("TSYQ"),d=n.n(s),u=n("QH2O"),h=n.n(u),p=n("qKvR"),m=function(e){var t,n=e.title,a=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(p.b)("div",{className:d()(h.a.pageHeader,(t={},t[h.a.withTabs]=o.length,t[h.a.darkMode]="dark"===a,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:h.a.text},n)))))},f=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=n||a,o=i.baseUrl,l=i.subDirectory,r=o+"/edit/"+i.branch+l+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+f.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:f.link,href:r},"Edit this page on GitHub"))):null},j=n("FCXl"),O=n("dI71"),x=n("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=n.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),o=n===i,r=new RegExp(i+"/?(#.*)?$"),b=a.replace(r,n);return Object(p.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=o,t),x.listItem)},Object(p.b)(c.Link,{className:x.link,to:""+b},e))}));return Object(p.b)("div",{className:x.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:x.list},o))))))},t}(i.a.Component),y=n("MjG9"),k=n("CzIb"),T=n("Asxa"),v=n("OIbQ"),A=n.n(v),N=function(e){var t=e.date,n=new Date(t);return t?Object(p.b)(T.c,{className:A.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:A.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,i=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,h=s.tabs,f=s.title,O=s.theme,x=s.description,T=s.keywords,v=s.date,A=Object(k.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,P=I?a.pathname.replace(I,""):a.pathname,L=h?P.split("/").filter(Boolean).slice(-1)[0]||l()(h[0],{lower:!0}):"",C=O||A;return Object(p.b)(b.a,{tabs:h,homepage:!1,theme:C,pageTitle:f,pageDescription:x,pageKeywords:T,titleType:u},Object(p.b)(m,{title:i?Object(p.b)(i,null):f,label:"label",tabs:h,theme:C}),h&&Object(p.b)(w,{title:f,slug:P,tabs:h,currentTab:L}),Object(p.b)(y.a,{padded:!0},n,Object(p.b)(g,{relativePagePath:d}),Object(p.b)(N,{date:v})),Object(p.b)(j.a,{pageContext:t,location:a,slug:P,tabs:h,currentTab:L}),Object(p.b)(r.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ghHc:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return h}));var a=n("wx14"),i=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("013z"),c=(n("qKvR"),{}),r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=r("AnchorLinks"),s=r("AnchorLink"),d={_frontmatter:c},u=l.a;function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(u,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{small:!0,mdxType:"AnchorLinks"},Object(o.b)(s,{mdxType:"AnchorLink"},"action"),Object(o.b)(s,{mdxType:"AnchorLink"},"label"),Object(o.b)(s,{mdxType:"AnchorLink"},"enable"),Object(o.b)(s,{mdxType:"AnchorLink"},"notificationHeader"),Object(o.b)(s,{mdxType:"AnchorLink"},"notificationSubtitle"),Object(o.b)(s,{mdxType:"AnchorLink"},"emptyMessage"),Object(o.b)(s,{mdxType:"AnchorLink"},"clearAllMessage"),Object(o.b)(s,{mdxType:"AnchorLink"},"keepOpen"),Object(o.b)(s,{mdxType:"AnchorLink"},"clearAllCallback")),Object(o.b)("h2",null,"Notification Config object"),Object(o.b)("p",null,"The notification config object configures whether or not the notification icon will be shown in the canvas toolbar. It will appear to the far right of the zoom actions in the toolbar. Similar to a toolbar action object, the notificationConfig object looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'const notificationConfig = { \n    action: "notification",\n    label: "Notifications",\n    enable: true,\n    notificationHeader: "Notification Messages",\n    notificationSubtitle: "subtitle",\n    emptyMessage: "You don\'t have any notifications right now.",\n    clearAllMessage: "Clear all",\n    keepOpen: true,\n    clearAllCallback: () => { console.log("Clear All clicked"); }\n};\n')),Object(o.b)("h3",null,"action"),Object(o.b)("p",null,"‘notification’ enables the notifications icon to appear in the far right of the toolbar."),Object(o.b)("h3",null,"label"),Object(o.b)("p",null,"The Tooltip label to display for the notifications icon in the toolbar."),Object(o.b)("h3",null,"enable"),Object(o.b)("p",null,"Icon will have hover effect and is clickable when set to true. If false, icon will be disabled and unclickable. If not set, it will default to disabled (enable: false)"),Object(o.b)("h3",null,"notificationHeader"),Object(o.b)("p",null,"String to display in the notification panel header. If not set, it will default to “Notifications”."),Object(o.b)("h3",null,"notificationSubtitle"),Object(o.b)("p",null,"String to be displayed as a sub-title in the panel header. If not set panel header will be sized to only contain the ",Object(o.b)("inlineCode",{parentName:"p"},"notificationHeader")," string."),Object(o.b)("h3",null,"emptyMessage"),Object(o.b)("p",null,"String to be displayed when there are no notification messages to display."),Object(o.b)("h3",null,"clearAllMessage"),Object(o.b)("p",null,"String to be displayed on a button displayed at the bottom of the panel. The button can be clicked to clear all the messages from the panel. If omitted the button, and the footer area of the panel it appears in, will not be displayed."),Object(o.b)("h3",null,"keepOpen"),Object(o.b)("p",null,"A boolean which indicates when the panel will close. The default is false. If set to false, the panel will close when the user clicks on the page somewhere outside the panel. If set to true the panel will remain open when the user clicks somewhere on the page outside of the panel. With the option the user must click the ",Object(o.b)("inlineCode",{parentName:"p"},"x")," icon in the top right of the panel, or click the notification toolbar icon, to close the panel."),Object(o.b)("h3",null,"clearAllCallback"),Object(o.b)("p",null,"An optional callback function that will be called every time the “clear all” button is clicked."),Object(o.b)("p",null,"The notification icon state is determined by the type of messages in the notification message array. By default, a notifications icon in ready state will be shown if there are messages in the notification message array. If any message in the array is of type ‘warning’, a notifications icon in warning state will be shown. If any message in the array is of type ‘error’, a notifications icon in error state will be shown. A number will be shown within the notifications icon to indicate the number of messages."),Object(o.b)("p",null,"For information about the structure of notification messages, refer to the ",Object(o.b)("a",{href:"#notification-config-object"},"message specification documentation"),". Notification messages can be added and removed from the notification panel by calling the canvas controller API. Refer to the canvas controller API documentation for information on how to ",Object(o.b)("a",{href:"/common-canvas/canvas-controller/canvas-controller-api#notification-messages-methods"},"add/set messages in the notification message array"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-common-canvas-config-notification-config-mdx-ec512acffc3ff0a8a754.js.map