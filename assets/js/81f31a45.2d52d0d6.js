"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[72963],{28e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(83117),n=(r(67294),r(3905));const i={},l="Sendgrid",o={unversionedId:"integrations/sources/sendgrid",id:"integrations/sources/sendgrid",title:"Sendgrid",description:"This page contains the setup guide and reference information for the Sendgrid source connector.",source:"@site/../docs/integrations/sources/sendgrid.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/sendgrid",permalink:"/integrations/sources/sendgrid",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/sendgrid.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Secoda API",permalink:"/integrations/sources/secoda"},next:{title:"Sendinblue API",permalink:"/integrations/sources/sendinblue"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up Sendgrid",id:"step-1-set-up-sendgrid",level:3},{value:"Step 2: Set up the Sendgrid connector in Airbyte",id:"step-2-set-up-the-sendgrid-connector-in-airbyte",level:2},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte OSS:",id:"for-airbyte-oss",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sendgrid"},"Sendgrid"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Sendgrid source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:"),' Sendgrid provides two different kinds of marketing campaigns, "legacy marketing campaigns" and "new marketing campaigns". ',(0,n.kt)("strong",{parentName:"p"},"Legacy marketing campaigns are not supported by this source connector"),".\nIf you are seeing a ",(0,n.kt)("inlineCode",{parentName:"p"},"403 FORBIDDEN error message for https://api.sendgrid.com/v3/marketing/campaigns"),", it might be because your SendGrid account uses legacy marketing campaigns."),(0,n.kt)("p",null,"Generate an API key using the ",(0,n.kt)("a",{parentName:"p",href:"https://sendgrid.com/docs/ui/account-and-settings/api-keys/#creating-an-api-key"},"Sendgrid documentation"),"."),(0,n.kt)("p",null,"We recommend creating a key specifically for Airbyte access. This will allow you to control which resources Airbyte should be able to access. The API key should be read-only on all resources except Marketing, where it needs Full Access."),(0,n.kt)("p",null,"To consume Messages resources requires to purchase an extra on Sendgrid. You can read more about this ",(0,n.kt)("a",{parentName:"p",href:"https://docs.sendgrid.com/api-reference/e-mail-activity"},"here")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-sendgrid"},"Step 1: Set up Sendgrid"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sendgrid Account"),(0,n.kt)("li",{parentName:"ul"},"Sendgrid API Key with the following permissions:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Read-only access to all resources"),(0,n.kt)("li",{parentName:"ul"},"Full access to marketing resources")))),(0,n.kt)("h2",{id:"step-2-set-up-the-sendgrid-connector-in-airbyte"},"Step 2: Set up the Sendgrid connector in Airbyte"),(0,n.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Sendgrid connector and select ",(0,n.kt)("strong",{parentName:"li"},"Sendgrid")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"apikey"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"start_time"),". "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h3",{id:"for-airbyte-oss"},"For Airbyte OSS:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard."),(0,n.kt)("li",{parentName:"ol"},"Set the name for your source. "),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"apikey"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"start_time"),". "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Sendgrid source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Campaigns "),(0,n.kt)("li",{parentName:"ul"},"Lists "),(0,n.kt)("li",{parentName:"ul"},"Contacts "),(0,n.kt)("li",{parentName:"ul"},"Stats automations "),(0,n.kt)("li",{parentName:"ul"},"Segments "),(0,n.kt)("li",{parentName:"ul"},"Single_sends "),(0,n.kt)("li",{parentName:"ul"},"Templates "),(0,n.kt)("li",{parentName:"ul"},"Global suppression "),(0,n.kt)("li",{parentName:"ul"},"Suppression groups "),(0,n.kt)("li",{parentName:"ul"},"Suppression group members "),(0,n.kt)("li",{parentName:"ul"},"Blocks "),(0,n.kt)("li",{parentName:"ul"},"Bounces "),(0,n.kt)("li",{parentName:"ul"},"Invalid emails "),(0,n.kt)("li",{parentName:"ul"},"Spam reports "),(0,n.kt)("li",{parentName:"ul"},"Messages")),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The connector is restricted by normal Sendgrid ",(0,n.kt)("a",{parentName:"p",href:"https://sendgrid.com/docs/API_Reference/Web_API_v3/How_To_Use_The_Web_API_v3/rate_limits.html"},"requests limitation"),"."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18847"},"18847")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Skip the stream on ",(0,n.kt)("inlineCode",{parentName:"td"},"400, 401 - authorization required")," with log message")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18182"},"18182")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mark the sendgrid api key secret in the spec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16400"},"16400")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change Start Time config parameter to datetime string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16112"},"16112")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Revert back to Python CDK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15911"},"15911")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bugfix to allowing reading schemas at runtime")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15800"},"15800")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bugfix to allow reading sentry.yaml at runtime")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15734"},"15734")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix yaml based on the new schema validator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15257"},"15257")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to config-based framework")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13571"},"13571")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add Message stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5910"},"5910")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add Single Sends Stats stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4839"},"4839")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gracefully handle malformed responses from the API")))))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(r),u=n,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return r?a.createElement(g,l(l({ref:t},d),{},{components:r})):a.createElement(g,l({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);