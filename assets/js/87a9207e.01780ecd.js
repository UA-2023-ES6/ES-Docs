"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5,slug:"/questions"},s="Questions",a={unversionedId:"API Endpoints/questions",id:"API Endpoints/questions",title:"Questions",description:"Question Creation",source:"@site/docs-api/API Endpoints/questions.md",sourceDirName:"API Endpoints",slug:"/questions",permalink:"/ES-Docs/questions",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/questions"},sidebar:"tutorialSidebar",previous:{title:"Messages",permalink:"/ES-Docs/messages"},next:{title:"Others",permalink:"/ES-Docs/others"}},u={},l=[{value:"Question Creation",id:"question-creation",level:2},{value:"POST <code>/api/Question/</code>",id:"post-apiquestion",level:3},{value:"Request Body",id:"request-body",level:4},{value:"Request Example",id:"request-example",level:4},{value:"Response",id:"response",level:4},{value:"Retrieve Questions by Group",id:"retrieve-questions-by-group",level:2},{value:"GET <code>/api/Question/group/{groupId}</code>",id:"get-apiquestiongroupgroupid",level:3},{value:"URL Parameters",id:"url-parameters",level:4},{value:"Success Response",id:"success-response",level:4},{value:"Response Example",id:"response-example",level:4}],p={toc:l},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"questions"},"Questions"),(0,o.kt)("h2",{id:"question-creation"},"Question Creation"),(0,o.kt)("h3",{id:"post-apiquestion"},"POST ",(0,o.kt)("inlineCode",{parentName:"h3"},"/api/Question/")),(0,o.kt)("p",null,"Creates a new question in a specified group."),(0,o.kt)("h4",{id:"request-body"},"Request Body"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GroupId")," (integer, required) - The unique identifier of the group to which the question belongs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Content")," (string, required) - The content of the question being asked.")),(0,o.kt)("h4",{id:"request-example"},"Request Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "GroupId": 1,\n    "Content": "What is the airspeed velocity of an unladen swallow?"\n}\n')),(0,o.kt)("h4",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Request": {\n        "GroupId": 1,\n        "Content": "What is the airspeed velocity of an unladen swallow?"\n    },\n    "Response": {\n        "Id": 456,\n        "Content": "What is the airspeed velocity of an unladen swallow?",\n        "senderName": "User 1",\n        "GroupId": 1,\n        "CreatedAt": "2023-10-30T14:30:00"\n    }\n}\n')),(0,o.kt)("h2",{id:"retrieve-questions-by-group"},"Retrieve Questions by Group"),(0,o.kt)("h3",{id:"get-apiquestiongroupgroupid"},"GET ",(0,o.kt)("inlineCode",{parentName:"h3"},"/api/Question/group/{groupId}")),(0,o.kt)("p",null,"Retrieves all questions associated with a specified group."),(0,o.kt)("h4",{id:"url-parameters"},"URL Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"groupId")," (integer, required) - The unique identifier of the group for which questions are being retrieved.")),(0,o.kt)("h4",{id:"success-response"},"Success Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Code:")," 200 OK"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content:")," A collection of questions for the specified group along with the request details and the total count of questions.")),(0,o.kt)("h4",{id:"response-example"},"Response Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Request": {\n        "GroupId": 1\n    },\n    "Response": [\n        {\n            "Id": 456,\n            "Content": "What is the airspeed velocity of an unladen swallow?",\n            "senderName": "User 1",\n            "GroupId": 1,\n            "CreatedAt": "2023-10-30T14:30:00"\n        }\n        // ... more questions\n    ],\n    "Total": 1\n}\n')))}c.isMDXComponent=!0}}]);