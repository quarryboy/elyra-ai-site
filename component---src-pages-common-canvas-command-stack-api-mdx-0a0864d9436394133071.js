(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),c=a("NmYn"),r=a.n(c),d=a("Wbzz"),s=a("Xrax"),i=a("k4MR"),m=a("TSYQ"),l=a.n(m),b=a("QH2O"),u=a.n(b),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,c=void 0===o?[]:o;return Object(p.b)("div",{className:l()(u.a.pageHeader,(t={},t[u.a.withTabs]=c.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},x=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(d.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,c=o.baseUrl,r=o.subDirectory,s=c+"/edit/"+o.branch+r+"/src/pages"+t;return c?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),g=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),c=a===o,s=new RegExp(o+"/?(#.*)?$"),i=n.replace(s,a);return Object(p.b)("li",{key:e,className:l()((t={},t[g.selectedItem]=c,t),g.listItem)},Object(p.b)(d.Link,{className:g.link,to:""+i},e))}));return Object(p.b)("div",{className:g.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:g.list},c))))))},t}(o.a.Component),k=a("MjG9"),w=a("CzIb"),T=a("Asxa"),N=a("OIbQ"),C=a.n(N),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(T.c,{className:C.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:C.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,c=t.frontmatter,m=void 0===c?{}:c,l=t.relativePagePath,b=t.titleType,u=m.tabs,x=m.title,f=m.theme,g=m.description,T=m.keywords,N=m.date,C=Object(w.a)().interiorTheme,y=Object(d.useStaticQuery)("2456312558").site.pathPrefix,I=y?n.pathname.replace(y,""):n.pathname,E=u?I.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",H=f||C;return Object(p.b)(i.a,{tabs:u,homepage:!1,theme:H,pageTitle:x,pageDescription:g,pageKeywords:T,titleType:b},Object(p.b)(h,{title:o?Object(p.b)(o,null):x,label:"label",tabs:u,theme:H}),u&&Object(p.b)(v,{title:x,slug:I,tabs:u,currentTab:E}),Object(p.b)(k.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:l}),Object(p.b)(P,{date:N})),Object(p.b)(O.a,{pageContext:t,location:n,slug:I,tabs:u,currentTab:E}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},Etml:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n,o=a("wx14"),c=a("zLVn"),r=(a("q1tI"),a("7ljp")),d=a("013z"),s=(a("qKvR"),{}),i=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),m={_frontmatter:s},l=d.a;function b(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)(l,Object(o.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i,{mdxType:"PageDescription"},Object(r.b)("p",null,"The CommandStack is a JavaScript class that provides the functionality to support do/undo/redo of commands. It maintains an internal stack of commands with a cursor that moves up and down when commands are undone or redone. Commands are also Javascript classes that implement a simple interface.")),Object(r.b)("p",null,"The CommandStack API allows application code to programmatically add commands to the command stack. You can get the Command Stack by calling the ",Object(r.b)("inlineCode",{parentName:"p"},"CanvasController.getCommandStack()")," method. The CommandStack API provides the following methods:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"   do(command) - push the command onto the command stack and then invoke command.do()\n   undo() - pop a command from the command stack and then invoke command.undo()\n   redo() - push last undo command onto the command stack and then invoke command.redo()\n   canUndo() - returns true if there is a command on the command stack.\n   canRedo() - returns true if there is an undo command that can be redo.\n   clearCommandStack() \n   getUndoCommand() - returns the next command to be undone or null.\n   getRedoCommand() - returns the next command to be redone or null.\n\n")),Object(r.b)("p",null,"Each commands that is added to the command stack is a Javascript class that need to implement these methods:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"   constructor()\n   do()\n   undo()\n   redo()\n\n")),Object(r.b)("h4",null,"constructor()"),Object(r.b)("p",null,"initial setup do() - Performs all actions necessary to execute the command undo() - Performs all actions necessary to reverse the actions performed in do() redo() - Performs all actions necessary to re-execute the command. For some commands this is the same as do() but others it is different."),Object(r.b)("p",null,"Here is some sample code that shows how a create-node command might be written:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"  export default class CreateNodeAction extends Action {\n    constructor(data) {\n       super(data);\n       this.newNode = createNode(data);\n    }\n\n    do() {\n       ObjectModel.addNode(this.newNode);\n    }\n\n    undo() {\n       ObjectModel.removeNode(this.newNode.id);\n    }\n\n    redo() {\n       ObjectModel.addNode(this.newNode);\n    }\n  }\n\n")),Object(r.b)("p",null,"Here is an example of using the CommandStack API to create a command action and push it on the stack:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"   const command = new CreateNodeAction(data);\n   CommandStack.do(command);\n\n")),Object(r.b)("p",null,"When using CommonCanvas, the canvas-controller creates an instance of the command stack. CommonCanvas provides command objects for each of the commands that are performed by the user, such as: create node, delete comment, link nodes together, etc. Common canvas also provides undo/redo options in its default context menu, on the toolbar and via keystrokes ctrl+z (undo) and ctrl+shift+z (redo). You can implement your own undo and redo UI if required using the API."))}b.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-common-canvas-command-stack-api-mdx-0a0864d9436394133071.js.map