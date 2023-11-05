"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[515],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,N=u["".concat(o,".").concat(k)]||u[k]||c[k]||i;return a?n.createElement(N,l(l({ref:t},m),{},{components:a})):n.createElement(N,l({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,slug:"/"},l="Database",s={unversionedId:"intro",id:"intro",title:"Database",description:"Entities:",source:"@site/docs-database/intro.md",sourceDirName:".",slug:"/",permalink:"/ES-Docs/database/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"}},o={},p=[{value:"Entities:",id:"entities",level:2},{value:"Entity-Relationship Diagram (ERD):",id:"entity-relationship-diagram-erd",level:2},{value:"Relational Schema:",id:"relational-schema",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database"},"Database"),(0,r.kt)("h2",{id:"entities"},"Entities:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Class")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": This entity represents a class of students which may contain one or more groups and is associated to an institution"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Attributes"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ClassID: The identifier of a class."),(0,r.kt)("li",{parentName:"ul"},"Name: The name of a class."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Group")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": This entity represents a group of students and is associated to a class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Attributes"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GroupID: The identifier of a group."),(0,r.kt)("li",{parentName:"ul"},"Name: The name of a group."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": This entity represents a user of this application. This user can be either a student or an institution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Attributes"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"UserID: The identifier of an user."),(0,r.kt)("li",{parentName:"ul"},"Name: The name of an user."),(0,r.kt)("li",{parentName:"ul"},"Email: The email of an user."),(0,r.kt)("li",{parentName:"ul"},"Password: The password of an user."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Role")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": This entity represents the role that an user will have and what permission will be granted in the system. The same user can have different roles in different institutions, classes and groups.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Attributes"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"RoleID: The identifier of a role."),(0,r.kt)("li",{parentName:"ul"},"Name: The name of a role."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Institution")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": This entity represents a teaching institution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Attributes"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"InstitutionID: The identifier of an institution."),(0,r.kt)("li",{parentName:"ul"},"Name: The name of an institution."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Event")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": This entity represents an event. Each event is associated to an institution, a class and a group."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Attributes"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"EventID: The identifier of an event."),(0,r.kt)("li",{parentName:"ul"},"Name: The name of an event."),(0,r.kt)("li",{parentName:"ul"},"StartDate: The starting date of an event."),(0,r.kt)("li",{parentName:"ul"},"EndDate: The finishing date of an event."),(0,r.kt)("li",{parentName:"ul"},"Description: A descripton of an event."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Message")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": This entity represents a message. Each message is associated to an user, an institution, a class and a group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Attributes"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MessageID: The identifier of a message."),(0,r.kt)("li",{parentName:"ul"},"Date: The date when a message was sent."),(0,r.kt)("li",{parentName:"ul"},"Content: The content of a message.")))))),(0,r.kt)("h2",{id:"entity-relationship-diagram-erd"},"Entity-Relationship Diagram (ERD):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DER Image",src:a(9414).Z,width:"771",height:"631"})),(0,r.kt)("h2",{id:"relational-schema"},"Relational Schema:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ER Image",src:a(9498).Z,width:"676",height:"1129"})))}c.isMDXComponent=!0},9414:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ES-DER-50bea9d3d4ba603cf1d7de19dffb466b.jpg"},9498:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ES-ER-0a9e47250f0c31426704bc2818156082.jpg"}}]);