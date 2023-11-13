"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},s="API Documentation",i={unversionedId:"message",id:"message",title:"API Documentation",description:"This is the documentation for the messaging API.",source:"@site/docs-api/message.md",sourceDirName:".",slug:"/message",permalink:"/ES-Docs/message",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/ES-Docs/"}},p={},l=[{value:"Message Creation",id:"message-creation",level:2},{value:"Endpoint: <code>/api/Message/</code>",id:"endpoint-apimessage",level:3},{value:"Retrieve Messages by Group",id:"retrieve-messages-by-group",level:2},{value:"Endpoint: <code>/api/Message/group/{groupId}</code>",id:"endpoint-apimessagegroupgroupid",level:3}],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-documentation"},"API Documentation"),(0,a.kt)("p",null,"This is the documentation for the messaging API."),(0,a.kt)("h2",{id:"message-creation"},"Message Creation"),(0,a.kt)("h3",{id:"endpoint-apimessage"},"Endpoint: ",(0,a.kt)("inlineCode",{parentName:"h3"},"/api/Message/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method:")," POST"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Creates a new message in a specified group."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "GroupId": "1",\n    "Content": "Hello World!",\n    "UserId": "123"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "Id": "456",\n        "Content": "Hello World!",\n        "UserId": "123",\n        "GroupId": "1",\n        "CreatedAt": "10/30/2023 2:30:00 PM"\n    }\n\n')),(0,a.kt)("h2",{id:"retrieve-messages-by-group"},"Retrieve Messages by Group"),(0,a.kt)("h3",{id:"endpoint-apimessagegroupgroupid"},"Endpoint: ",(0,a.kt)("inlineCode",{parentName:"h3"},"/api/Message/group/{groupId}")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method:")," GET"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Retrieves all messages for a specified group."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"groupId")," ",(0,a.kt)("em",{parentName:"li"},"(required)"),": The unique identifier of the group for which messages are being retrieved.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Responses:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n          {\n              "Id": 456,\n              "Content": "Hello World!",\n              "UserId": 123,\n              "GroupId": 1,\n              "CreatedAt": "10/30/2023 2:30:00 PM"\n          },\n          // ... more messages\n      ]\n')))}d.isMDXComponent=!0}}]);