(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),l=a.n(i),o=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),u=a.n(c),d=a("QH2O"),p=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(m.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},y=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,l=r.subDirectory,b=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+y.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:y.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),h=a("dI71"),f=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===r,b=new RegExp(r+"/?(#.*)?$"),s=n.replace(b,a);return Object(m.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(m.b)(o.Link,{className:f.link,to:""+s},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},i))))))},t}(r.a.Component),x=a("MjG9"),v=a("CzIb"),k=a("Asxa"),N=a("OIbQ"),T=a.n(N),E=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(k.c,{className:T.a.row},Object(m.b)(k.a,null,Object(m.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,c=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,p=c.tabs,y=c.title,h=c.theme,f=c.description,k=c.keywords,N=c.date,T=Object(v.a)().interiorTheme,A=Object(o.useStaticQuery)("2456312558").site.pathPrefix,H=A?n.pathname.replace(A,""):n.pathname,J=p?H.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",P=h||T;return Object(m.b)(s.a,{tabs:p,homepage:!1,theme:P,pageTitle:y,pageDescription:f,pageKeywords:k,titleType:d},Object(m.b)(g,{title:r?Object(m.b)(r,null):y,label:"label",tabs:p,theme:P}),p&&Object(m.b)(w,{title:y,slug:H,tabs:p,currentTab:J}),Object(m.b)(x.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:u}),Object(m.b)(E,{date:N})),Object(m.b)(j.a,{pageContext:t,location:n,slug:H,tabs:p,currentTab:J}),Object(m.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},kpFC:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return b})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var n,r=a("wx14"),i=a("zLVn"),l=(a("q1tI"),a("7ljp")),o=a("013z"),b=(a("qKvR"),function(){return Object(l.b)("span",null,"Deploying Elyra & JupyterHub in a Kubernetes environment")}),s={},c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),u={Title:b,_frontmatter:s},d=o.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)(d,Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(c,{mdxType:"PageDescription"},Object(l.b)("p",null,"This document goes over how to integrate Elyra into a self-service Jupyter Notebook platform\nmanaged by JupyterHub in a Kubernetes environment.")),Object(l.b)("p",null,"The links below provide more details on how to install/configure JupyterHub:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://zero-to-jupyterhub.readthedocs.io/en/latest/index.html"}),"Zero to JupyterHub with Kubernetes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/lresende/ansible-kubernetes-cluster"}),"Ansible script to deploy Elyra, JupyterHub, Jupyter Enterprise Gateway"))),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB30lEQVQoz21Ty27bMBDk/18K5NDPyClAewjQHoIURRMYaNPWsWUjsQwlelmyHpZEkZzuLmXHKEJgLYoazu7OrBWm5ZyTp7X2FHw2DAOq5oCmaVHXNfpx9DhjCMN3LKJkj6+zFEPfQTVdh3ECHQmP5LTBaBy6zT3iaIPXOEO5XqOOYxgiY5wjfF3sENO3tm2h/n65QrJ4ICIDPfQeNBHykxOgzrEvd6iqGjZN0RLhyF0YK7hXy3X6pebfbxGFW6x+z1Dk2btV8q4zsn3rhMj49bBc4OHyGsXzVkhVkb0gfQmR5gUM6WI463STpeBXc6iw2pakn5UW3aQdL31zA3fxASZYesJ8/g3pn1uMWp/M0MQSFmQInbFWQ1uh3e/IIC2Vd9piu+PEFoYTvzkLVWcpHmd3WM9/yeWRqmjaDk+rZ9J0ENzTJsQiWCFJEnkvygo/fi6lI7Choz5JoxiQFwUqGgle3LIHdr49OqvIkMcNtay5Hk5q0HcHwacUW87rjCil3JnS5w7z4hnksTHtHk2ZUQdWZs9rSN+p4ujiI6LLK8KNclcdSdyZEX3fS/BeRoeCKxeTxDjjtaPOzOdPMPd3fowo1P//FB7OIAgkwjCk2avkTGt9mksZK+tddlMcf/8BmOpUBnRj2i8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"JupyterHub Deployment",title:"JupyterHub Deployment",src:"/elyra-ai-site/static/cb96880091925480504d85b0d4537224/3cbba/elyra-deployment-diagram.png",srcSet:["/elyra-ai-site/static/cb96880091925480504d85b0d4537224/7fc1e/elyra-deployment-diagram.png 288w","/elyra-ai-site/static/cb96880091925480504d85b0d4537224/a5df1/elyra-deployment-diagram.png 576w","/elyra-ai-site/static/cb96880091925480504d85b0d4537224/3cbba/elyra-deployment-diagram.png 1152w","/elyra-ai-site/static/cb96880091925480504d85b0d4537224/0b124/elyra-deployment-diagram.png 1728w","/elyra-ai-site/static/cb96880091925480504d85b0d4537224/a91d8/elyra-deployment-diagram.png 1820w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("h2",null,"Configuring JupyterHub Deployment"),Object(l.b)("p",null,"In this case, JupyterHub is the recommended entry point for Elyra, as it will manage the user\nauthorization and provisioning of individual Notebook servers for each user."),Object(l.b)("p",null,"JupyterHub is configured via a config.yaml file, and the following settings are required:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Configure JupyterHub to use Elyra docker image when instantiating the notebook environment for each user")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'singleuser:\n  defaultUrl: "/lab"\n  image:\n    name: elyra/elyra\n    # change to a specific release version as appropriate\n    tag: 3.0.1\n    # disable this in a production environment\n    pullPolicy: "Always"\n  storage:\n    dynamic:\n      storageClass: nfs-dynamic\n')),Object(l.b)("h2",null,"Deploying Jupyter Enterprise Gateway"),Object(l.b)("p",null,"Jupyter Enterprise Gateway enables support for remote kernels in a Jupyter Deployment"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Deploying Jupyter Enterprise gateway")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f https://raw.githubusercontent.com/jupyter/enterprise_gateway/v2.1.1/etc/kubernetes/enterprise-gateway.yaml\n")),Object(l.b)("h2",null,"Connecting JupyterHub and Jupyter Enterprise Gateway"),Object(l.b)("p",null,"Now that all components are deployed, we need to make them aware of each other via some\nadditional environment variables."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Flowing current user from JupyterHub to Jupyter Enterprise Gateway")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hub:\n  ...\n  extraConfig: |-\n    from kubespawner import KubeSpawner\n    from tornado import gen\n    import yaml\n\n    class CustomKubeSpawner(KubeSpawner):\n        def get_env(self):\n            env = super().get_env()\n\n            env['KERNEL_USERNAME'] =  self.user.name\n\n            return env\n    c.JupyterHub.spawner_class = CustomKubeSpawner\n    c.Spawner.start_timeout = 500\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Integrating Elyra (Jupyter Notebook) with Jupyter Enterprise Gateway")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'singleuser:\n  defaultUrl: "/lab"\n  image:\n    name: elyra/elyra\n    # change to a specific release version as appropriated\n    tag: 3.0.1\n    # disable this in a production environment\n    pullPolicy: "Always"\n  storage:\n    dynamic:\n      storageClass: nfs-dynamic\n  extraEnv:\n    JUPYTER_GATEWAY_URL: <FQDN of Gateway Service Endpoint>\n    JUPYTER_GATEWAY_REQUEST_TIMEOUT: "120"\n')),Object(l.b)("h2",null,"Customizing the docker image to be used"),Object(l.b)("p",null,"We have created an ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/elyra/elyra"}),"Elyra docker image")," with specific dependencies\nrequired to run elyra, and that could be used to customize your environment with other additional\npackages required by your workloads, or any other customizations needed."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-dockerfile"}),"FROM elyra/elyra:3.0.1\n\n...\n\n\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-recipes-deploying-in-kubeflow-mdx-69e953eb3eb82f43d03a.js.map