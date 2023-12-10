"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[164],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:6,slug:"/others"},a="Others",s={unversionedId:"API Endpoints/others",id:"API Endpoints/others",title:"Others",description:"this is the docs for the API",source:"@site/docs-api/API Endpoints/others.md",sourceDirName:"API Endpoints",slug:"/others",permalink:"/ES-Docs/others",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/others"},sidebar:"tutorialSidebar",previous:{title:"Questions",permalink:"/ES-Docs/questions"}},p={},c=[{value:"Time API",id:"time-api",level:2},{value:"Endpoint: <code>/api/Time/</code>",id:"endpoint-apitime",level:3}],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"others"},"Others"),(0,o.kt)("p",null,"this is the docs for the API"),(0,o.kt)("h2",{id:"time-api"},"Time API"),(0,o.kt)("h3",{id:"endpoint-apitime"},"Endpoint: ",(0,o.kt)("inlineCode",{parentName:"h3"},"/api/Time/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method:")," GET"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description:")," Get the current time"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ServerTime": "10/30/2023 2:28:56 PM"\n}\n')))}d.isMDXComponent=!0}}]);