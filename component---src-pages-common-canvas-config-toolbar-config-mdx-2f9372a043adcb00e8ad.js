(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),l=a.n(i),b=a("Wbzz"),c=a("Xrax"),r=a("k4MR"),d=a("TSYQ"),s=a.n(d),p=a("QH2O"),u=a.n(p),h=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(h.b)("div",{className:s()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,l=o.subDirectory,c=i+"/edit/"+o.branch+l+"/src/pages"+t;return i?Object(h.b)("div",{className:"bx--row "+j.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),y=a("dI71"),g=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===o,c=new RegExp(o+"/?(#.*)?$"),r=n.replace(c,a);return Object(h.b)("li",{key:e,className:s()((t={},t[g.selectedItem]=i,t),g.listItem)},Object(h.b)(b.Link,{className:g.link,to:""+r},e))}));return Object(h.b)("div",{className:g.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:g.list},i))))))},t}(o.a.Component),x=a("MjG9"),v=a("CzIb"),T=a("Asxa"),N=a("OIbQ"),C=a.n(N),k=function(e){var t=e.date,a=new Date(t);return t?Object(h.b)(T.c,{className:C.a.row},Object(h.b)(T.a,null,Object(h.b)("div",{className:C.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,d=void 0===i?{}:i,s=t.relativePagePath,p=t.titleType,u=d.tabs,j=d.title,y=d.theme,g=d.description,T=d.keywords,N=d.date,C=Object(v.a)().interiorTheme,A=Object(b.useStaticQuery)("2456312558").site.pathPrefix,I=A?n.pathname.replace(A,""):n.pathname,L=u?I.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",S=y||C;return Object(h.b)(r.a,{tabs:u,homepage:!1,theme:S,pageTitle:j,pageDescription:g,pageKeywords:T,titleType:p},Object(h.b)(m,{title:o?Object(h.b)(o,null):j,label:"label",tabs:u,theme:S}),u&&Object(h.b)(w,{title:j,slug:I,tabs:u,currentTab:L}),Object(h.b)(x.a,{padded:!0},a,Object(h.b)(f,{relativePagePath:s}),Object(h.b)(k,{date:N})),Object(h.b)(O.a,{pageContext:t,location:n,slug:I,tabs:u,currentTab:L}),Object(h.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UJoU:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},r=c("AnchorLinks"),d=c("AnchorLink"),s={_frontmatter:b},p=l.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r,{small:!0,mdxType:"AnchorLinks"},Object(i.b)(d,{mdxType:"AnchorLink"},"action"),Object(i.b)(d,{mdxType:"AnchorLink"},"label"),Object(i.b)(d,{mdxType:"AnchorLink"},"enable"),Object(i.b)(d,{mdxType:"AnchorLink"},"iconEnabled"),Object(i.b)(d,{mdxType:"AnchorLink"},"iconDisabled"),Object(i.b)(d,{mdxType:"AnchorLink"},"incLabelWithIcon"),Object(i.b)(d,{mdxType:"AnchorLink"},"kind"),Object(i.b)(d,{mdxType:"AnchorLink"},"tooltip"),Object(i.b)(d,{mdxType:"AnchorLink"},"divider"),Object(i.b)(d,{mdxType:"AnchorLink"},"Deprecated toolbar config"),Object(i.b)(d,{mdxType:"AnchorLink"},"Advanced: JSX actions"),Object(i.b)(d,{mdxType:"AnchorLink"},"action"),Object(i.b)(d,{mdxType:"AnchorLink"},"jsx"),Object(i.b)(d,{mdxType:"AnchorLink"},"tooltip")),Object(i.b)("h2",null,"Toolbar config object"),Object(i.b)("p",null,"A toolbar will be displayed for common-canvas if the ",Object(i.b)("a",{href:"canvas-config#canvas-config-object"},"canvas configuration"),". field ",Object(i.b)("inlineCode",{parentName:"p"},"enableToolbarLayout")," is set to “Top”. The toolbar config object configures which actions are shown in the canvas toolbar. If you do not specify a toolbar config, common canvas will display a default toolbar. You can optionally specify actions for the left and right side of the toolbar to override the default toolbar. Here is an example, configuration object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'const toolbarConfig = {\n        leftBar: [\n            { action: "undo", label: "Undo", enable: true },\n            { action: "redo", label: "Redo", enable: true },\n            { divider: true },\n            { action: "cut", label: "Cut", enable: false },\n            { action: "copy", label: "Copy", enable: false },\n            { action: "paste", label: "Paste", enable: false },\n            { divider: true },\n            { action: "createAutoComment", label: "Add Comment", enable: true },\n            { action: "deleteSelectedObjects", label: "Delete", enable: true },\n            { action: "arrangeHorizontally", label: "Arrange Horizontally", enable: true }\n        ],\n        rightBar: [\n            { action: "stop", label: "Stop Execution", enable: false },\n            { divider: true },\n            { action: "run", label: "Run Pipeline", enable: false }\n        ]\n    };\n')),Object(i.b)("p",null,"If you provide the ",Object(i.b)("inlineCode",{parentName:"p"},"leftBar")," field but not the ",Object(i.b)("inlineCode",{parentName:"p"},"rightBar")," field, common-canvas will automatically populate the right side of the toolbar with zoom-in, zoom-out, and zoom-to-fit actions. To suppress these right side actions, specify the ",Object(i.b)("inlineCode",{parentName:"p"},"rightBar")," field as an empty array."),Object(i.b)("p",null,"There is no need to specify either a palette action or a notification panel action. These will automatically be added to your toolbar:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A palette action will be added to the left side of the toolbar if the ",Object(i.b)("inlineCode",{parentName:"p"},"enablePaletteLayout")," field is set to either “Flyout” (the default) or “Modal” in the ",Object(i.b)("a",{href:"/canvas-config#canvas-config-object"},"canvas configuration"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A notification panel action will be added to the right side of the toolbar if a notification configuration object is specified to the ",Object(i.b)("a",{href:"/common-canvas/canvas-documentation"}," CommonCanvas react object"),"."))),Object(i.b)("p",null,"The toolbar will display the objects in the same order they are defined in the arrays."),Object(i.b)("p",null,"Here is an example of an action object which must contain an ",Object(i.b)("inlineCode",{parentName:"p"},"action")," field as a minimum."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    action: "run", \n    label: "Run", \n    enable: true,\n    iconEnabled: "/image/myOwnEnabledIcon.svg",\n    iconDisabled: "/image/myOwnDisabledIcon.svg",\n    incLabelWithIcon: "before",\n    kind: "primary",\n    tooltip: "Run the flow"\n}\n')),Object(i.b)("h3",null,"action"),Object(i.b)("p",null,"A unique identifier and the name of the action to be performed. This action name will be passed in the ",Object(i.b)("inlineCode",{parentName:"p"},"data")," parameter of the editActionHandler callback method so you can detect when the user clicks an action in the toolbar. The following actions will have default icons available so you don’t need to specify ",Object(i.b)("inlineCode",{parentName:"p"},"iconEnabled")," or ",Object(i.b)("inlineCode",{parentName:"p"},"iconDisabled")," with them: ",Object(i.b)("inlineCode",{parentName:"p"},"stop"),", ",Object(i.b)("inlineCode",{parentName:"p"},"run"),", ",Object(i.b)("inlineCode",{parentName:"p"},"undo"),", ",Object(i.b)("inlineCode",{parentName:"p"},"redo"),", ",Object(i.b)("inlineCode",{parentName:"p"},"cut"),", ",Object(i.b)("inlineCode",{parentName:"p"},"copy"),", ",Object(i.b)("inlineCode",{parentName:"p"},"paste"),", ",Object(i.b)("inlineCode",{parentName:"p"},"createAutoComment"),", ",Object(i.b)("inlineCode",{parentName:"p"},"deleteSelectedObjects"),", ",Object(i.b)("inlineCode",{parentName:"p"},"arrangeHorizontally"),", ",Object(i.b)("inlineCode",{parentName:"p"},"arrangeVertically"),", ",Object(i.b)("inlineCode",{parentName:"p"},"zoomIn"),", ",Object(i.b)("inlineCode",{parentName:"p"},"zoomOut"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"zoomToFit"),". If you are using the recommended internal object (",Object(i.b)("inlineCode",{parentName:"p"},"enableInternalObjectModel")," canvas config field is set to true—",Object(i.b)("em",{parentName:"p"},"(the default"),") these built in actions will be automatically handled by common-canvas. So for example, if the ",Object(i.b)("inlineCode",{parentName:"p"},"deleteSelectedObjects")," action (shown as a trash can) is clicked any selected objects will be deleted from the internal object model. Disablement of these built in actions is also handled by common-canvas so, for example, when no canvas objects are selected the ",Object(i.b)("inlineCode",{parentName:"p"},"deleteSelectedObjects")," action (trash can icon) will be automatically disabled."),Object(i.b)("h3",null,"label"),Object(i.b)("p",null,"The Tooltip label to display (and optionally the text to display next to the icon if ",Object(i.b)("inlineCode",{parentName:"p"},"incLabelWithIcon")," is specified)."),Object(i.b)("h3",null,"enable"),Object(i.b)("p",null,"Icon will have hover effect and is clickable when set to true. If false, icon will be disabled and unclickable. If not set, it will default to disabled (enable: false)"),Object(i.b)("h3",null,"iconEnabled"),Object(i.b)("p",null,"Specifies the icon to display when ",Object(i.b)("inlineCode",{parentName:"p"},"enable")," is true. It can be either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A string containing the path to a custom SVG file to display"),Object(i.b)("li",{parentName:"ul"},"A JSX expression, for example (",Object(i.b)("inlineCode",{parentName:"li"},"<Edit32 />"),") where Edit32 is an imported icon. It is recommended to only pass very simple JSX expressions.")),Object(i.b)("h3",null,"iconDisabled"),Object(i.b)("p",null,"Specifies the icon to display when ",Object(i.b)("inlineCode",{parentName:"p"},"enable")," is false. If iconDisabled is not specified iconEnabled will be used instead. It can be either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A string containing the path to a custom SVG file to display"),Object(i.b)("li",{parentName:"ul"},"A JSX expression, for example (",Object(i.b)("inlineCode",{parentName:"li"},"<Edit32 />"),") where Edit32 is an imported icon. It is recommended to only pass very simple JSX expressions.")),Object(i.b)("h3",null,"incLabelWithIcon"),Object(i.b)("p",null,"Can be set to “none”, “before” or “after”. The default is “none”. This field specifies whether the label should be displayed in the toolbar with the icon and if so, where it is displayed with respect to the icon."),Object(i.b)("h3",null,"kind"),Object(i.b)("p",null,"Can be set to “default”, “primary”, “danger”, “secondary”, “tertiary” or “ghost”. The default it “default”. These give the action the same styling as the equivalent kind’s of ",Object(i.b)("a",{href:"https://carbondesignsystem.com/components/button/usage#button-types"},"buttons in the carbon library"),"."),Object(i.b)("h3",null,"tooltip"),Object(i.b)("p",null,"A string or JSX object. The tooltip that will be displayed for the action. If this is not provided the label will be displayed as the tooltip instead."),Object(i.b)("p",null,"You can add dividers to separate groups of actions from other actions. This is displayed as a thin gray line. The divider object has one attribute:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"    { \n       divider: true\n    }\n\n")),Object(i.b)("h3",null,"divider"),Object(i.b)("p",null,"To show a divider in the toolbar, add an object with divider attribute set to true."),Object(i.b)("h3",null,"Deprecated toolbar config"),Object(i.b)("p",null,"The old toolbar configuration is still supported for now (but is deprecated). This allows the config to be provided as an array that defines just the left side of the toolbar. The right side will always show the zoom actions (zoomIn, zoomOut, zoomToFit) and a notifications panel icon (if a notification configuration object is provided in the CommonCanvas react object). These right side actions will always show on the right-hand side of the toolbar and are handled internally by the canvas. The entries in the array follow the same definition as described above. Note: there is no need to provide a palette action in the array because a palette icon and following divider will automatically be added to the toolbar when a palette is specified for the canvas."),Object(i.b)("p",null,"An example of the toolbar config array should look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'    const toolbarConfig = [\n       { action: "stop", label: "Stop Execution", enable: false },\n       { action: "run", label: "Run Pipeline", enable: false },\n       { action: "undo", label: "Undo", enable: true },\n       { action: "redo", label: "Redo", enable: true },\n       { action: "cut", label: "Cut", enable: false },\n       { action: "copy", label: "Copy", enable: false },\n       { action: "paste", label: "Paste", enable: false },\n       { action: "createAutoComment", label: "Add Comment", enable: true },\n       { action: "deleteSelectedObjects", label: "Delete", enable: true },\n       { action: "arrangeHorizontally", label: "Arrange Horizontally", enable: true }\n    ];\n\n')),Object(i.b)("h3",null,"Advanced: JSX actions"),Object(i.b)("p",null,"Regular toolbar buttons, explained above, are displayed as set of Carbon ",Object(i.b)("inlineCode",{parentName:"p"},"Button"),"s. If you ",Object(i.b)("strong",{parentName:"p"},"don’t")," want your content wrappered in a button, you can provide your own JSX to display as an action in the toolbar. Be aware however that, because of the way the toolbar is designed, there are restrictions on what the toolbar can do to display your JSX. For example, it cannot display anything with a height greater than the toolbar height."),Object(i.b)("p",null,"If you provide your own JSX object it is displayed in a simple ",Object(i.b)("inlineCode",{parentName:"p"},"div")," in the toolbar. Some attributes are applied to the ",Object(i.b)("inlineCode",{parentName:"p"},"div")," to allow the action to work correctly within the toolbar - these cannot be changed. You are responsible for styling your JSX object to get it to appear the way you want."),Object(i.b)("p",null,"Also be aware that, if the width of the toolbar reduces (maybe by the user sizing the page) your action may get moved into the overflow menu. It is also your responsibility to style the button so it appears as you want in the overflow menu as well as the toolbar."),Object(i.b)("p",null,"The JSX can be provided in the ",Object(i.b)("inlineCode",{parentName:"p"},"jsx")," field. Here is an example. The only other fields that are recognized with the ",Object(i.b)("inlineCode",{parentName:"p"},"jsx")," field are ",Object(i.b)("inlineCode",{parentName:"p"},"action")," and ",Object(i.b)("inlineCode",{parentName:"p"},"tooltip"),", all other fields will be ignored."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'    { \n       action: "custom-loading",\n       jsx: (<div style={{ padding: "0 11px" }}><InlineLoading status="active" description="Loading..." /></div>),\n       tooltip: "Loading the thing you wanted."\n    }\n')),Object(i.b)("h3",null,"action"),Object(i.b)("p",null,"A unique identifier and the name of the action to be performed."),Object(i.b)("h3",null,"jsx"),Object(i.b)("p",null,"A JSX object. This will be displayed as the action in the toolbar."),Object(i.b)("h3",null,"tooltip"),Object(i.b)("p",null,"A string or JSX object. This will be displayed as the tooltip for the action in the toolbar. If tooltip is omitted no tooltip will be added to your action. If tooltip is specified the jsx will be inside a tooltip div which is in the toolbar div mentioned above."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-common-canvas-config-toolbar-config-mdx-2f9372a043adcb00e8ad.js.map