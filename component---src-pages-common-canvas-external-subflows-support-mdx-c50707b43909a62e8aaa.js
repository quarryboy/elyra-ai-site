(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("NmYn"),l=n.n(i),r=n("Wbzz"),c=n("Xrax"),p=n("k4MR"),s=n("TSYQ"),b=n.n(s),d=n("QH2O"),u=n.n(d),h=n("qKvR"),m=function(e){var t,n=e.title,a=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(h.b)("div",{className:b()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===a,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:u.a.text},n)))))},f=n("BAC9"),x=function(e){var t=e.relativePagePath,n=e.repository,a=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,i=o.baseUrl,l=o.subDirectory,c=i+"/edit/"+o.branch+l+"/src/pages"+t;return i?Object(h.b)("div",{className:"bx--row "+f.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},w=n("FCXl"),j=n("dI71"),O=n("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],i=n.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),i=n===o,c=new RegExp(o+"/?(#.*)?$"),p=a.replace(c,n);return Object(h.b)("li",{key:e,className:b()((t={},t[O.selectedItem]=i,t),O.listItem)},Object(h.b)(r.Link,{className:O.link,to:""+p},e))}));return Object(h.b)("div",{className:O.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:O.list},i))))))},t}(o.a.Component),g=n("MjG9"),v=n("CzIb"),N=n("Asxa"),C=n("OIbQ"),T=n.n(C),k=function(e){var t=e.date,n=new Date(t);return t?Object(h.b)(N.c,{className:T.a.row},Object(h.b)(N.a,null,Object(h.b)("div",{className:T.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,i=t.frontmatter,s=void 0===i?{}:i,b=t.relativePagePath,d=t.titleType,u=s.tabs,f=s.title,j=s.theme,O=s.description,N=s.keywords,C=s.date,T=Object(v.a)().interiorTheme,L=Object(r.useStaticQuery)("2456312558").site.pathPrefix,P=L?a.pathname.replace(L,""):a.pathname,E=u?P.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",I=j||T;return Object(h.b)(p.a,{tabs:u,homepage:!1,theme:I,pageTitle:f,pageDescription:O,pageKeywords:N,titleType:d},Object(h.b)(m,{title:o?Object(h.b)(o,null):f,label:"label",tabs:u,theme:I}),u&&Object(h.b)(y,{title:f,slug:P,tabs:u,currentTab:E}),Object(h.b)(g.a,{padded:!0},n,Object(h.b)(x,{relativePagePath:b}),Object(h.b)(k,{date:C})),Object(h.b)(w.a,{pageContext:t,location:a,slug:P,tabs:u,currentTab:E}),Object(h.b)(c.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},DUzX:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n("wx14"),o=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("013z"),r=n("Wbzz"),c=(n("qKvR"),{}),p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},s=p("PageDescription"),b=p("AnchorLinks"),d=p("AnchorLink"),u={_frontmatter:c},h=l.a;function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(h,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"PageDescription"},Object(i.b)("p",null,"The pipeline flow that common-canvas displays can optionally refer to pipelines that are external to the pipeline flow being displayed. This allows flows to be referenced from multiple pipeline flows allowing flow reuse. If your app needs to support this you will need to write some code to ",Object(i.b)("inlineCode",{parentName:"p"},"save")," and ",Object(i.b)("inlineCode",{parentName:"p"},"return")," the external pipeline flows when requested. ")),Object(i.b)(b,{mdxType:"AnchorLinks"},Object(i.b)(d,{mdxType:"AnchorLink"},"Introduction"),Object(i.b)(d,{mdxType:"AnchorLink"},"Creating an external sub-flow"),Object(i.b)(d,{mdxType:"AnchorLink"},"Loading an external sub-flow"),Object(i.b)(d,{mdxType:"AnchorLink"},"Converting a local supernode to an external supernode"),Object(i.b)(d,{mdxType:"AnchorLink"},"Converting an external supernode to a local supernode"),Object(i.b)(d,{mdxType:"AnchorLink"},"Deleting an external supernode/sub-flow"),Object(i.b)(d,{mdxType:"AnchorLink"},"Clipboard support"),Object(i.b)(d,{mdxType:"AnchorLink"},"Manipulating objects in external pipelines using the Canvas Controller API"),Object(i.b)(d,{mdxType:"AnchorLink"},"External pipelines in the Elyra Canvas Test Harness")),Object(i.b)("h2",null,"Introduction"),Object(i.b)("p",null,"The pipeline flow schema describes two ways of storing a sub-flow pipelines for a supernode: local or external. Local sub-flows are stored within the pipeline flow document whereas external pipelines are stored in a separate pipeline flow document (usually as the primary pipeline in that pipeline flow). The supernode that references an external pipeline contains a ",Object(i.b)("inlineCode",{parentName:"p"},"url")," property (in ",Object(i.b)("inlineCode",{parentName:"p"},"<node>.subflow_ref.url"),") and a ",Object(i.b)("inlineCode",{parentName:"p"},"pipeline ID")," property (in <",Object(i.b)("inlineCode",{parentName:"p"},"node>.subflow_ref.pipeline_id_ref"),") to identify the external pipeline flow and the pipeline within it."),Object(i.b)("p",null,"Common-canvas supports external pipelines but the host application UI code needs to manage the storage and retrieval of any external pipeline flows. To do this the app UI code needs to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Manage the storage of newly created external pipeline flows."),Object(i.b)("li",{parentName:"ul"},"Respond to calls from common-canvas to provide the external pipeline flow(s) when requested."),Object(i.b)("li",{parentName:"ul"},"Respond to call from common-canvas when a local pipeline is changed to external or an external is changed to local.")),Object(i.b)("p",null,"Common-canvas supports lazy loading of external pipeline flows so they will only be requested from your code when the user performs some gesture that requires the pipeline (from within the external pipeline flow) to be displayed."),Object(i.b)("h2",null,"Creating an external sub-flow"),Object(i.b)("p",null,"When the common-canvas config property ",Object(i.b)(r.Link,{to:"/common-canvas/config/canvas-config#enableexternalpipelineflows",mdxType:"Link"},"enableExternalPipelineFlows")," is set to true the default common-canvas context menu will include a ",Object(i.b)("inlineCode",{parentName:"p"},"Create External Supernode")," option when a set of objects are selected from which a super node can be created."),Object(i.b)("p",null,"When the ",Object(i.b)("inlineCode",{parentName:"p"},"Create External Supernode")," option is clicked the ",Object(i.b)("inlineCode",{parentName:"p"},"createSuperNodeExternal")," action is executed."),Object(i.b)("p",null,"If your application doesn’t use the default context menu you can define your own context menu (returned from ",Object(i.b)("inlineCode",{parentName:"p"},"contextMenuHandler"),") to contain an option which maps to the ",Object(i.b)("inlineCode",{parentName:"p"},"createSuperNodeExternal")," action. See the section on the ",Object(i.b)(r.Link,{to:"/common-canvas/callbacks#contextmenuhandler",mdxType:"Link"},"contextMenuHandler")," for details on how to do this."),Object(i.b)("p",null,"When the ",Object(i.b)("inlineCode",{parentName:"p"},"createSuperNodeExternal")," action is executed, the ",Object(i.b)("inlineCode",{parentName:"p"},"beforeEditActionHandler")," callback is called before the external sub-flow is created. The ",Object(i.b)("inlineCode",{parentName:"p"},"beforeEditActionHandler")," is called where the first parameter ",Object(i.b)("inlineCode",{parentName:"p"},"data")," has two properties ",Object(i.b)("inlineCode",{parentName:"p"},"externalUrl")," and ",Object(i.b)("inlineCode",{parentName:"p"},"externalPipelineFlowId")," which will both be set to empty string. Your code must set these to whatever values you want for the url and pipeline flow ID. The url will be assigned to the ",Object(i.b)("inlineCode",{parentName:"p"},"subflow_ref.url")," property of the supernode that is being created. The pipeline flow ID will be assigned to the newly created pipeline flow."),Object(i.b)("p",null,"Your code must return the ",Object(i.b)("inlineCode",{parentName:"p"},"data")," parameter from the ",Object(i.b)("inlineCode",{parentName:"p"},"beforeEditActionHandler")," callback if you want the action to proceed and create the sub-flow. If you need to do any asynchronous activity at this point see the documentation on the ",Object(i.b)(r.Link,{to:"/common-canvas/callbacks#beforeeditactionhandler",mdxType:"Link"},"beforeEditActionHandler")," for details on how to do that."),Object(i.b)("p",null,"When the sub-flow has been created common-canvas will call the ",Object(i.b)("inlineCode",{parentName:"p"},"editActionHandler")," callback. In this callback you can, if you wish, retrieve the pipeline flow document that has been created internally in common-canvas using ",Object(i.b)("inlineCode",{parentName:"p"},"CanvasController.getExternalPipelineFlow(url)"),". Your code can then save it to your repository. Alternatively, you can wait until some later time, like perhaps during an auto-save, to retrieve and store the pipeline flow externally in your repository."),Object(i.b)("h2",null,"Loading an external sub-flow"),Object(i.b)("p",null,"When the main pipeline flow, displayed by common-canvas, contains a super node that references an external sub-flow it may need to be loaded whenever the user performs a gesture that causes it to be displayed - like opening it ‘in-place’. An external sub-flow may also need to be loaded if the top-level pipeline being displayed has a supernode, that refers to an external pipeline, that is already expanded in-place in the saved pipeline flow JSON document being displayed. so, actions that can cause the external pipeline to be loaded are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"loadPipelineFlow"),Object(i.b)("li",{parentName:"ul"},"expandSuperNodeInPlace"),Object(i.b)("li",{parentName:"ul"},"displaySubPipeline"),Object(i.b)("li",{parentName:"ul"},"convertSuperNodeExternalToLocal")),Object(i.b)("p",null,"When any of these actions are performed common-canvas will call the ",Object(i.b)("inlineCode",{parentName:"p"},"beforeEditActionHandler")," callback with the data parameter as the first parameter. The data object will have the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"externalPipelineFlowLoad - This is a boolean which indicates whether the pipeline flow needs to be provided by your code."),Object(i.b)("li",{parentName:"ul"},"externalUrl - This is the string which identifies the external pipeline flow document."),Object(i.b)("li",{parentName:"ul"},"externalPipelineId - This is the ID of the pipeline being loaded"),Object(i.b)("li",{parentName:"ul"},"externalPipelineFlow - If ",Object(i.b)("inlineCode",{parentName:"li"},"externalPipelineFlowLoad")," if true this will be undefined. Otherwise it will be contain the previously loaded external pipeline flow.")),Object(i.b)("p",null,"You need to implement the ",Object(i.b)("inlineCode",{parentName:"p"},"beforeEditActionHandler")," so that,"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"when the actions above are being performed and externalPipelineFlowLoad is true, you retrieve the external pipeline flow from your repository"),Object(i.b)("li",{parentName:"ul"},"you then assign it to the ",Object(i.b)("inlineCode",{parentName:"li"},"externalPipelineFlow")," property of the data object"),Object(i.b)("li",{parentName:"ul"},"you then return the data object from the callback.")),Object(i.b)("p",null,"Your code must return the ",Object(i.b)("inlineCode",{parentName:"p"},"data")," parameter from the ",Object(i.b)("inlineCode",{parentName:"p"},"beforeEditActionHandler")," callback if you want the action to proceed and load the external pipeline flow. If you need to do any asynchronous activity at this point see the documentation on the ",Object(i.b)(r.Link,{to:"/common-canvas/callbacks#beforeeditactionhandler",mdxType:"Link"},"beforeEditActionHandler")," for details on how to do that."),Object(i.b)("h2",null,"Converting a local supernode to an external supernode"),Object(i.b)("p",null,"When the common-canvas config property ",Object(i.b)(r.Link,{to:"/common-canvas/config/canvas-config#enableexternalpipelineflows",mdxType:"Link"},"enableExternalPipelineFlows")," is set to true, and a local supernode is right clicked, the default common-canvas context menu will include a ",Object(i.b)("inlineCode",{parentName:"p"},"Convert local to external")," option. This will execute the ",Object(i.b)("inlineCode",{parentName:"p"},"convertSuperNodeLocalToExternal")," action."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"convertSuperNodeLocalToExternal")," action is similar to the ",Object(i.b)("inlineCode",{parentName:"p"},"createSuperNodeExternal")," action in that a new external pipeline flow is being created. Consequently, you can follow the instructions in the ",Object(i.b)(r.Link,{to:"#creating-an-external-sub-flow",mdxType:"Link"},"Creating an external sub-flow")," section for providing the appropriate properties of the ",Object(i.b)("inlineCode",{parentName:"p"},"data")," object in the ",Object(i.b)("inlineCode",{parentName:"p"},"beforeEditActionHandler")," and ",Object(i.b)("inlineCode",{parentName:"p"},"editActionHandler")," callbacks."),Object(i.b)("h2",null,"Converting an external supernode to a local supernode"),Object(i.b)("p",null,"When the common-canvas config property ",Object(i.b)(r.Link,{to:"/common-canvas/config/canvas-config#enableexternalpipelineflows",mdxType:"Link"},"enableExternalPipelineFlows")," is set to true, and an external supernode is right clicked, the default common-canvas context menu will include a ",Object(i.b)("inlineCode",{parentName:"p"},"Convert external to local")," option. This will execute the ",Object(i.b)("inlineCode",{parentName:"p"},"convertSuperNodeExternalToLocal")," action."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"convertSuperNodeExternalToLocal")," action is similar to the ",Object(i.b)("inlineCode",{parentName:"p"},"expandSuperNodeInPlace")," action in that an external pipeline flow may need to be retrieved from your repository. Consequently, you can follow the instructions in the ",Object(i.b)(r.Link,{to:"#creating-an-external-sub-flow",mdxType:"Link"},"Loading an external sub-flow")," section for providing the appropriate properties of the ",Object(i.b)("inlineCode",{parentName:"p"},"data")," object in the ",Object(i.b)("inlineCode",{parentName:"p"},"beforeEditActionHandler")," callback."),Object(i.b)("h2",null,"Deleting an external supernode/sub-flow"),Object(i.b)("p",null,"When the user deletes an external supernode/sub-flow the supernode will be removed from the canvas. You code does not need to do anything unless you want to also remove the external pipeline flow from your repository."),Object(i.b)("h2",null,"Clipboard support"),Object(i.b)("p",null,"When a supernode, that refers to an external pipeline, is cut/copied and pasted, the pasted supernode refers to the same external pipeline as the supernode that was cut or copied. This means that if an external supernode is copied to the clipboard and then pasted into the same canvas the result will be two supernodes that refer to the same external pipeline.  "),Object(i.b)("p",null,"The same situation can occur if a supernode, that refers to an external pipeline, is in the palette and that node is dragged multiple times from the palette onto the canvas."),Object(i.b)("h2",null,"Manipulating objects in external pipelines using the Canvas Controller API"),Object(i.b)("p",null,"Objects (nodes, links comments, etc.) in an external pipeline can be updated by the host application calling the ",Object(i.b)("inlineCode",{parentName:"p"},"CanvasController")," API. However, such changes are only effective within common-canvas. It is the host application’s responsibility to make sure these changes are persisted in the external pipeline flow document (if that is the behavior that is required). This can be done by the host application calling ",Object(i.b)("inlineCode",{parentName:"p"},"CanvasController.getExternalPipelineFlow(url)")," and then saving the returned document to the appropriate repository."),Object(i.b)("h2",null,"External pipelines in the Elyra Canvas Test Harness"),Object(i.b)("p",null,"The Test Harness supports external pipeline flows but will only persist any saved flows for the current session. (It just stores them in memory). You can examine the ",Object(i.b)("inlineCode",{parentName:"p"},"beforeEditActionHandler")," and ",Object(i.b)("inlineCode",{parentName:"p"},"editActionHandler")," in App.js in the test harness to see how it handles the different actions for managing external pipeline flows."))}m.isMDXComponent=!0},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-common-canvas-external-subflows-support-mdx-c50707b43909a62e8aaa.js.map