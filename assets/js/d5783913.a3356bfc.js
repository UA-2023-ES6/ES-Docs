"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=i,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={slug:"/"},o="Architecture",c={unversionedId:"intro",id:"intro",title:"Architecture",description:"The depicted architecture represents the implemented system architecture.",source:"@site/docs-architecture/intro.md",sourceDirName:".",slug:"/",permalink:"/ES-Docs/architecture/",draft:!1,tags:[],version:"current",frontMatter:{slug:"/"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"The depicted architecture represents the implemented system architecture."),(0,i.kt)("p",null,"Our application is divided into two microservices, representing the api and ui, each launched in private subnets in multiple availability zones. These modules reside in an ECS cluster and their respective host service is connected to an internal application load balancer that manages traffic through the system, whilst also bridging the connection to the api gateway.\nEach of the instantiated microservices has a corresponding api gateway to allow direct communication with end users.\nTo store all data, the api objects access a MySQL database in an RDS service\nThe images used to deploy the services are imported from ECR repositories that update through a CD pipeline directly from our git repository.\nCognito is also used to manage and verify user credentials."),(0,i.kt)("p",null,"This architecture can be deployed by running the terraforma file, with the exception of the cognito and ECR services that need to be manualy configured.\n",(0,i.kt)("img",{alt:"&#39;architecture&#39;",src:r(1936).Z,width:"2322",height:"1842"})))}d.isMDXComponent=!0},1936:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/arch.drawio-04c510790040e07b50f9a1968f8ee4c3.png"}}]);