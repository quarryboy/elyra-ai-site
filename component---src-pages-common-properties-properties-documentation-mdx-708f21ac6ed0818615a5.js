(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),p=a("TSYQ"),b=a.n(p),m=a("QH2O"),d=a.n(m),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(u.b)("div",{className:b()(d.a.pageHeader,(t={},t[d.a.withTabs]=i.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,s=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),y=a("dI71"),g=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===o,s=new RegExp(o+"/?(#.*)?$"),c=n.replace(s,a);return Object(u.b)("li",{key:e,className:b()((t={},t[g.selectedItem]=i,t),g.listItem)},Object(u.b)(l.Link,{className:g.link,to:""+c},e))}));return Object(u.b)("div",{className:g.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:g.list},i))))))},t}(o.a.Component),C=a("MjG9"),v=a("CzIb"),w=a("Asxa"),x=a("OIbQ"),P=a.n(x),k=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(w.c,{className:P.a.row},Object(u.b)(w.a,null,Object(u.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,p=void 0===i?{}:i,b=t.relativePagePath,m=t.titleType,d=p.tabs,j=p.title,y=p.theme,g=p.description,w=p.keywords,x=p.date,P=Object(v.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=T?n.pathname.replace(T,""):n.pathname,D=d?I.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"",H=y||P;return Object(u.b)(c.a,{tabs:d,homepage:!1,theme:H,pageTitle:j,pageDescription:g,pageKeywords:w,titleType:m},Object(u.b)(h,{title:o?Object(u.b)(o,null):j,label:"label",tabs:d,theme:H}),d&&Object(u.b)(N,{title:j,slug:I,tabs:d,currentTab:D}),Object(u.b)(C.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:b}),Object(u.b)(k,{date:x})),Object(u.b)(f.a,{pageContext:t,location:n,slug:I,tabs:d,currentTab:D}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},wsRZ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return h}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},c=s("PageDescription"),p=s("InlineNotification"),b=s("AnchorLinks"),m=s("AnchorLink"),d={_frontmatter:l},u=r.a;function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(u,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c,{mdxType:"PageDescription"},Object(i.b)("p",null,"The Elyra test harness (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://ibm.biz/elyra-canvas"}),"http://ibm.biz/elyra-canvas"),") allows consumers to explore a number of configurations of both the canvas as well as properties. All current documentation of Common properties components may be found ",Object(i.b)("a",{href:"https://wdp-common-canvas-dev.stage1.mybluemix.net/#/properties",target:"_blank"},"here"),". ")),Object(i.b)(p,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," You must be on an IBM network to access either of these links.")),Object(i.b)("p",null,"The examples below show off consumers who have adopted the Elyra canvas technology."),Object(i.b)(b,{mdxType:"AnchorLinks"},Object(i.b)(m,{mdxType:"AnchorLink"},"Introductions"),Object(i.b)(m,{mdxType:"AnchorLink"},"Callbacks")),Object(i.b)("h2",null,"Introduction"),Object(i.b)("p",null,"Common properties displays controls to view and set property values."),Object(i.b)("p",null,"You can look at the harness/src/client/App.js file of this repo to see examples of code that uses the common properties component.\nGetting started with Common Properties programming"),Object(i.b)(p,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," There are two ways one can use the Common Properties tooling: Either by allowing the form to be built dynamically from a parameterDef JSON (which is comprised of the base property set, ui-hints, conditions, and resources), or by explicitly providing the dialog form for rendering (deprecated). The first approach is recommended as an easier and clearer interface")),Object(i.b)("p",null,"This takes 3 easy steps:"),Object(i.b)("h3",null,"Step 1 : Import"),Object(i.b)("p",null,"To use Common Properties in your React application you need to do the following. First import the CommonProperties React component from the common-canvas library. It’s recommended to use All Components if common-canvas is also being imported, otherwise use Properties only option."),Object(i.b)("h4",null,"All Components"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'import { CommonProperties } from "@elyra/canvas";')),Object(i.b)("h4",null,"Properties Only"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'import { CommonProperties } from "@elyra/canvas/dist/lib/properties";')),Object(i.b)("h3",null,"Step 2 : Set the data"),Object(i.b)("p",null,"Next you’ll need to populate propertiesInfo with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'propertiesInfo: {\n  parameterDef: this.parameterDef,          // Parameter definitions/hints/conditions\n  appData: "{user-defined}",                // User data returned in applyPropertyChanges [optional]\n  additionalComponents: "{components}",     // Additional component(s) to display [optional]\n  messages: "[node_messages]",              // Node messages array [optional]\n  expressionInfo: this.expressionInfo,      // Information for expression builder [optional],\n  initialEditorSize: "{size}"               // This value will override the value of editor_size in uiHints. This can have a value of "small", "medium", "large", or null [optional]\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"parameterDef schema and examples: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/elyra-ai/pipeline-schemas/tree/master/common-canvas/parameter-defs"}),"https://github.com/elyra-ai/pipeline-schemas/tree/master/common-canvas/parameter-defs"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Common Properties Parameter Definition: ",Object(i.b)("br",null)," found ",Object(i.b)("a",{href:"parameter-definition"},"here"),". ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"expressionInfo")," schema and examples: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/elyra-ai/pipeline-schemas/tree/master"}),"https://github.com/elyra-ai/pipeline-schemas/tree/master")))),Object(i.b)("p",null,"or…"),Object(i.b)("p",null,"(Deprecated)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'propertiesInfo: {\n  formData: this.formData,\n  appData: "{user data returned back in applyPropertyChanges}", //optional\n  additionalComponents: "{additional control(s) to display}",   //optional\n  messages: "[node_messages]",                                  // Node messages array [optional]\n  expressionInfo: this.expressionInfo,                          // Information for expression builder [optional]\n  initialEditorSize: "{size}"                                   // This value will override the value of editor_size in uiHints. This can have a value of "small", "medium", "large", or null [optional]\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"formData")," schema: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/elyra-ai/pipeline-schemas/tree/master/common-canvas/form"}),"https://github.com/elyra-ai/pipeline-schemas/tree/master/common-canvas/form"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"form information wiki: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/elyra-ai/wml-canvas-service/wiki/2.-Runtimes-And-Operators"}),"https://github.com/elyra-ai/wml-canvas-service/wiki/2.-Runtimes-And-Operators"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The optional messages attribute can be used to set validation messages associated with a node. The format of the message objects is defined in Pipelin Flow UI schema: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/elyra-ai/pipeline-schemas/blob/master/common-pipeline/pipeline-flow/pipeline-flow-ui-v1-schema.json"}),"https://github.com/elyra-ai/pipeline-schemas/blob/master/common-pipeline/pipeline-flow/pipeline-flow-ui-v1-schema.json")))),Object(i.b)("h3",null,"Step 3 : Display the properties editor"),Object(i.b)("p",null,"Finally you’ll need to display the editor. Inside your render code, add the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'import { IntlProvider } from "react-intl";\nvar i18nData = require("../intl/en.js");\n\nvar locale = "en";\nvar messages = i18nData.messages;\n  <IntlProvider key="IntlProvider2" locale={ locale } messages={ messages }>\n    <CommonProperties\n      ref={(instance) => {\n        this.CommonProperties = instance;\n      }}\n      propertiesInfo={this.propertiesInfo} // required\n      propertiesConfig={this.propertiesConfig} // optional\n      callbacks={this.callbacks} // required\n      customPanels={[CustomSliderPanel, CustomTogglePanel]} //optional\n      customControls={[CustomSliderControl]} // optional\n      light // optional\n    />\n  </IntlProvider>\n')),Object(i.b)("h3",null,"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"propertiesInfo ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": See above"),Object(i.b)("li",{parentName:"ul"},"propertiesConfig ",Object(i.b)("inlineCode",{parentName:"li"},"object"),":"),Object(i.b)("li",{parentName:"ul"},"containerType ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": type of container to display the properties, can be “Modal” or “Custom”. default: ”",Object(i.b)("inlineCode",{parentName:"li"},"Custom"),"”"),Object(i.b)("li",{parentName:"ul"},"rightFlyout ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": if custom container is a right-flyout, set to true. default: ",Object(i.b)("inlineCode",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"applyOnBlur ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": calls applyPropertyChanges when focus leave common-properties. default: ",Object(i.b)("inlineCode",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"enableResize ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": adds a button that allows the right-side fly-out editor to expand/collapse between small and medium sizes. default: ",Object(i.b)("inlineCode",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"conditionReturnValueHandling ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": used to determine how hidden or disabled control values are returned in applyPropertyChanges callback. Current options are “value” or “null”. default: ”",Object(i.b)("inlineCode",{parentName:"li"},"value"),"”",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"buttonLabels ",Object(i.b)("inlineCode",{parentName:"li"},"object"),":"),Object(i.b)("li",{parentName:"ul"},"primary ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": Label to use for the primary button of the properties dialog"),Object(i.b)("li",{parentName:"ul"},"secondary ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": Label to use for the secondary button of the properties dialog"))),Object(i.b)("li",{parentName:"ul"},"heading ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": show heading and heading icon in right-side fly-out panels. default: ",Object(i.b)("inlineCode",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"schemaValidation ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": If set to true, schema validation will be enabled when a parameter definition has been set in CommonProperties. Any errors found will be reported on the browser dev console. It is recommended you run with schema validation switched on while in development mode."),Object(i.b)("li",{parentName:"ul"},"applyPropertiesWithoutEdit ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": When true, will always call applyPropertyChanges even if no changes were made. default: ",Object(i.b)("inlineCode",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"maxLengthForMultiLineControls ",Object(i.b)("inlineCode",{parentName:"li"},"number")," - maximum characters allowed for multi-line string controls like textarea. default: 1024"),Object(i.b)("li",{parentName:"ul"},"maxLengthForSingleLineControls ",Object(i.b)("inlineCode",{parentName:"li"},"number")," - maximum characters allowed for single-line string controls like textfield. default: 128"),Object(i.b)("li",{parentName:"ul"},"callbacks ",Object(i.b)("inlineCode",{parentName:"li"},"object")," - See below for more details on each callback method",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"applyPropertyChanges // required"),Object(i.b)("li",{parentName:"ul"},"closePropertiesDialog // required"),Object(i.b)("li",{parentName:"ul"},"helpClickHandler // optional"),Object(i.b)("li",{parentName:"ul"},"controllerHandler // optional"),Object(i.b)("li",{parentName:"ul"},"propertyListener // optional"),Object(i.b)("li",{parentName:"ul"},"actionHandler // optional"),Object(i.b)("li",{parentName:"ul"},"buttonHandler // optional"))),Object(i.b)("li",{parentName:"ul"},"View ",Object(i.b)("a",{href:"custom-components#custom-panels"},"Common Properties Custom Components")," for the following:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"customPanels ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": array of custom panels."),Object(i.b)("li",{parentName:"ul"},"customControls ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": array of custom controls."),Object(i.b)("li",{parentName:"ul"},"customConditionOps ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": array of custom condition operators. "))),Object(i.b)("li",{parentName:"ul"},"light ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": Carbon controls in common-properties will use light mode. When the ",Object(i.b)("inlineCode",{parentName:"li"},"light")," option is disabled, the background color will be the same as the Carbon theme background. When the ",Object(i.b)("inlineCode",{parentName:"li"},"light")," option is enabled, the background color is set to $ui-01. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"))),Object(i.b)("h4",null,"Internationalization and override of labels in CommonProperties"),Object(i.b)("p",null,"The CommonProperties dialogs have a set of labels that can have customized and internationalized values. CommonProperties uses the react-intl package to provide internationalization of these labels. This requires the IntlProvider element to wrap the CommonProperties element. You can look at the harness/src/intl/en.js file of this repo to see the list of labels and the default values."),Object(i.b)("br",null),Object(i.b)("h4",null,"Reference methods"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"/*\n* @closeEditor (boolean) - determines if closePropertiesDialog is called or not \n*/\napplyPropertiesEditing(closeEditor)\n")),Object(i.b)("h3",null,"Using CommonProperties in CommonCanvas right-flyout panel"),Object(i.b)("a",{href:"/common-canvas/canvas-documentation#step-3-:-set-the-model-and-palette-data"},"Common Canvas")," has a right-flyout panel that can render a React object. It can be used to render Common Properties in a flyout panel.",Object(i.b)("p",null,"Create a CommonProperties object with containerType set to “Custom” and rightFlyout set to true."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'    const rightFlyoutContent =(<CommonProperties\n        propertiesInfo={this.propertiesInfo}\n        propertiesConfig={{ containerType: "Custom", rightFlyout: true }}\n        callbacks={this.callbacks}  \n    />);\n\n')),Object(i.b)("p",null,"Pass the CommonProperties object into CommonCanvas’s rightFlyoutContent props. Also set the showRightFlyout boolean to tell CommonCanvas when to show the rightFlyout."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"    <CommonCanvas\n  config={commonCanvasConfig}\n  contextMenuHandler={this.contextMenuHandler}\n  contextMenuActionHandler= {this.contextMenuActionHandler}\n  editActionHandler= {this.editActionHandler}\n  clickActionHandler= {this.clickActionHandler}\n  decorationActionHandler= {this.decorationActionHandler}\n  toolbarConfig={toolbarConfig}\n  toolbarMenuActionHandler={this.toolbarMenuActionHandler}\n  rightFlyoutContent={rightFlyoutContent}\n  showRightFlyout={showRightFlyout}\n    />\n\n")),Object(i.b)("h2",null,"Callbacks"),Object(i.b)(b,{small:!0,mdxType:"AnchorLinks"},Object(i.b)(m,{mdxType:"AnchorLink"},"applyPropertyChanges(propertySet, appData, additionalInfo, undoInfo, uiProperties)"),Object(i.b)(m,{mdxType:"AnchorLink"},"closePropertiesDialog(closeSource)"),Object(i.b)(m,{mdxType:"AnchorLink"},"propertyListener()"),Object(i.b)(m,{mdxType:"AnchorLink"},"controllerHandler()"),Object(i.b)(m,{mdxType:"AnchorLink"},"actionHandler()"),Object(i.b)(m,{mdxType:"AnchorLink"},"buttonHandler()"),Object(i.b)(m,{mdxType:"AnchorLink"},"helpClickHandler()")),Object(i.b)("h3",null,"applyPropertyChanges(propertySet, appData, additionalInfo, undoInfo, uiProperties)"),Object(i.b)("p",null,"Executes when the user clicks ",Object(i.b)("inlineCode",{parentName:"p"},"OK")," in the property dialog. This callback allows users to save the current property values."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"propertySet: The set of current property values"),Object(i.b)("li",{parentName:"ul"},"appData: (optional) application data that was passed in to ",Object(i.b)("inlineCode",{parentName:"li"},"propertiesInfo")),Object(i.b)("li",{parentName:"ul"},"additionalInfo: Object with additional information returned:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"messages: (optional) An array of messages associated with the nodes current property values."),Object(i.b)("li",{parentName:"ul"},"title: The title of the properties editor"))),Object(i.b)("li",{parentName:"ul"},"undoInfo: Object with information needed to undo this apply:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"properties: Set of property values;"),Object(i.b)("li",{parentName:"ul"},"messages: (optional) An array of messages associated with the nodes property values."),Object(i.b)("li",{parentName:"ul"},"uiProperties: (optional) Set of UI only properties values"))),Object(i.b)("li",{parentName:"ul"},"uiProperties: The set of UI only property values (optional)")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"applyPropertyChanges(propertySet, appData, additionalInfo, undoInfo, uiProperties) {\n  var data = {\n    propertySet: propertySet,\n    appData: appData,\n    additionalInfo: {\n        messages: messages,\n        title: title\n    }\n  };\n}\n\n")),Object(i.b)("h3",null,"closePropertiesDialog(closeSource)"),Object(i.b)("p",null,"Executes when user clicks ",Object(i.b)("inlineCode",{parentName:"p"},"Save")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Cancel")," in the property editor dialog. This callback is used to control the visibility of the property editor dialog. ",Object(i.b)("inlineCode",{parentName:"p"},"closeSource")," identifies where this call was initiated from. It will equal “apply” if the user clicked on “Save” when no changes were made, or “cancel” if the user clicked on “Cancel”"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"closePropertiesDialog() {\n  this.setState({ showPropertiesDialog: false, propertiesInfo: {} });\n}\n")),Object(i.b)("h3",null,"propertyListener()"),Object(i.b)("p",null,"Executes when a user property values are updated."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"propertyListener(data) {\n\n}\n\n")),Object(i.b)("h3",null,"controllerHandler()"),Object(i.b)("p",null,"Executes when the property controller is created. Returns the property controller. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/elyra-ai/canvas/wiki/3.6-Common-Properties-Controller"}),"https://github.com/elyra-ai/canvas/wiki/3.6-Common-Properties-Controller")," for APIs"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"controllerHandler(propertyController) {\n\n}\n\n")),Object(i.b)("h3",null,"actionHandler()"),Object(i.b)("p",null,"Called whenever an action is ran. ",Object(i.b)("inlineCode",{parentName:"p"},"id")," and ",Object(i.b)("inlineCode",{parentName:"p"},"data")," come from uihints and appData is passed in with propertiesInfo."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"actionHandler(id, appData, data) {\n\n}\n\n")),Object(i.b)("h3",null,"buttonHandler()"),Object(i.b)("p",null,"Called when the edit button is clicked on in a readonlyTable control. The callback provides the following data:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"data: an object that consists of",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"type: of button the click was invoked from. Currently, only type: edit is returned today from the edit button click of a readonlyTable control."),Object(i.b)("li",{parentName:"ul"},"propertyId: of the control that was clicked.")))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"buttonHandler(data) {\n\n}\n\n")),Object(i.b)("h3",null,"helpClickHandler()"),Object(i.b)("p",null,"Executes when user clicks the help icon in the property editor dialog. The callback provides the following data:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"nodeTypeId: in case of parameterDef, id property of uihints; in case formData, the componentId."),Object(i.b)("li",{parentName:"ul"},"helpData: Optional helpData specified in paramDef/formData (see below)."),Object(i.b)("li",{parentName:"ul"},"appData: Optional application data that was passed in to propertiesInfo")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"helpClickHandler(nodeTypeId, helpData, appData) {\n\n}\n\n")),Object(i.b)("p",null,"To control whether a node shows the help icon in the right fly-out, a help object with optional helpData needs to be provided in the paramDef or formData:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"paramDef: Provide help object in operator’s uihints. If help object exists, the icon will be shown. Optionally, provide a helpData object within the help object, which will be passed in the helpClickHandler callback.     ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/elyra-ai/pipeline-schemas/blob/master/common-pipeline/operators/uihints-v2-schema.json#L64"}),"https://github.com/elyra-ai/pipeline-schemas/blob/master/common-pipeline/operators/uihints-v2-schema.json#L64")),Object(i.b)("li",{parentName:"ul"},"formData: add help object to form definition. The ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/elyra-ai/pipeline-schemas/blob/master/common-canvas/form/form-v2-schema.json#L51"}),"https://github.com/elyra-ai/pipeline-schemas/blob/master/common-canvas/form/form-v2-schema.json#L51"))),Object(i.b)("p",null,"If no help object is found, no help link will be shown."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-common-properties-properties-documentation-mdx-708f21ac6ed0818615a5.js.map