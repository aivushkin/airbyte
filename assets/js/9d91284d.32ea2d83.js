"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[93599],{46077:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const o={},i="Auth0",s={unversionedId:"integrations/sources/auth0",id:"integrations/sources/auth0",title:"Auth0",description:"Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications.",source:"@site/../docs/integrations/sources/auth0.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/auth0",permalink:"/integrations/sources/auth0",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/auth0.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Ashby",permalink:"/integrations/sources/ashby"},next:{title:"AWS CloudTrail",permalink:"/integrations/sources/aws-cloudtrail"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up an Auth0 account",id:"step-1-set-up-an-auth0-account",level:3},{value:"Step 2.1: Get an Access Tokens for Testing",id:"step-21-get-an-access-tokens-for-testing",level:3},{value:"Step 2.2: Create a new app for OAuth2",id:"step-22-create-a-new-app-for-oauth2",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"auth0"},"Auth0"),(0,r.kt)("p",null,"Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications."),(0,r.kt)("p",null,"The source connector fetches data from ",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/docs/api/authentication#introduction"},"Auth0 Management API")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You own an Auth0 account, free or paid."),(0,r.kt)("li",{parentName:"ul"},"Follow the ",(0,r.kt)("a",{parentName:"li",href:"#setup-guide"},"Setup guide")," to authorize Airbyte to read data from your account.")),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h3",{id:"step-1-set-up-an-auth0-account"},"Step 1: Set up an Auth0 account"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It's free to ",(0,r.kt)("a",{parentName:"li",href:"https://auth0.com/signup"},"sign up an account")," in Auth0."),(0,r.kt)("li",{parentName:"ol"},"Confirm your Email.")),(0,r.kt)("h3",{id:"step-21-get-an-access-tokens-for-testing"},"Step 2.1: Get an Access Tokens for Testing"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Auth0, go to ",(0,r.kt)("a",{parentName:"li",href:"https://manage.auth0.com/#/apis/management/explorer"},"the Api Explorer tab of your Auth0 Management API"),". A token is automatically generated and displayed there."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Copy Token"),"."),(0,r.kt)("li",{parentName:"ol"},"In Airbyte, choose ",(0,r.kt)("strong",{parentName:"li"},"OAuth2 Access Token")," under the ",(0,r.kt)("strong",{parentName:"li"},"Authentication Method")," menu, Paste the token to the text box of ",(0,r.kt)("strong",{parentName:"li"},"OAuth2 Access Token")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save")," to test the connectivity."),(0,r.kt)("li",{parentName:"ol"},"More details can be found from ",(0,r.kt)("a",{parentName:"li",href:"https://auth0.com/docs/secure/tokens/access-tokens/get-management-api-access-tokens-for-testing"},"this documentation"),".")),(0,r.kt)("h3",{id:"step-22-create-a-new-app-for-oauth2"},"Step 2.2: Create a new app for OAuth2"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To make scheduled frequent calls for a production environment, you have setup an OAuth2 integration so that Airbyte can generate the access token automatically."),(0,r.kt)("li",{parentName:"ol"},"In Auth0, go to ",(0,r.kt)("a",{parentName:"li",href:"https://manage.auth0.com/?#/applications"},"Dashboard > Applications > Applications"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a new application, name it ",(0,r.kt)("strong",{parentName:"li"},"Airbyte"),". Choose the application type ",(0,r.kt)("strong",{parentName:"li"},"Machine to Machine Applications")),(0,r.kt)("li",{parentName:"ol"},"Select the Management API V2, this is the api you want call from Airbyte."),(0,r.kt)("li",{parentName:"ol"},"Each M2M app that accesses an API must be granted a set of permissions (or scopes). Here, we only need permissions starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"read")," (e.g. ",(0,r.kt)("em",{parentName:"li"},"read:users"),"). Under the ",(0,r.kt)("a",{parentName:"li",href:"https://auth0.com/docs/api/management/v2#!/Users/get_users"},"API doc"),", each api will list the required scopes."),(0,r.kt)("li",{parentName:"ol"},"More details can be found from ",(0,r.kt)("a",{parentName:"li",href:"https://auth0.com/docs/secure/tokens/access-tokens/get-management-api-access-tokens-for-production"},"this documentation"),".")),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("p",null,"The Auth0 source connector supports the following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Full Refresh"),(0,r.kt)("li",{parentName:"ul"},"Incremental")),(0,r.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://auth0.com/docs/api/management/v2#!/Users/get_users"},"Users"))),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"The connector is restricted by Auth0 ",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/docs/troubleshoot/customer-support/operational-policies/rate-limit-policy/management-api-endpoint-rate-limits"},"rate limits"),"."),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TBD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add Auth0 and Users stream")))))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);