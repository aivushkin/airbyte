"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[32175],{39990:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(83117),n=(a(67294),a(3905));const i={},l="August 2022",o={unversionedId:"release_notes/august_2022",id:"release_notes/august_2022",title:"August 2022",description:"Airbyte v0.39.42-alpha to v0.40.3",source:"@site/../docs/release_notes/august_2022.md",sourceDirName:"release_notes",slug:"/release_notes/august_2022",permalink:"/release_notes/august_2022",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/release_notes/august_2022.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"July 2022",permalink:"/release_notes/july_2022"},next:{title:"September 2022",permalink:"/release_notes/september_2022"}},p={},s=[{value:"Airbyte v0.39.42-alpha to v0.40.3",id:"airbyte-v03942-alpha-to-v0403",level:2},{value:"New features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Bugs",id:"bugs",level:3}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"august-2022"},"August 2022"),(0,n.kt)("h2",{id:"airbyte-v03942-alpha-to-v0403"},"Airbyte ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.39.42-alpha"},"v0.39.42-alpha")," to ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.40.3"},"v0.40.3")),(0,n.kt)("p",null,"This page includes new features and improvements to the Airbyte Cloud and Airbyte Open Source platforms."),(0,n.kt)("h3",{id:"new-features"},"New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added reserved keywords for schema names by fixing the quotation logic in normalization. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14683"},"#14683"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud/#view-the-sync-log-summary"},"documentation")," about the data displayed in sync log summaries. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/15181"},"#15181"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added OAuth login to Airbyte Cloud, which allows you to sign in using your Google login credentials. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/15414"},"#15414")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can use your Google login credentials to sign in to your Airbyte account if they share the same email address.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can create a new Airbyte account with OAuth using your Google login credentials. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You cannot use OAuth to log in if you are invited to join a workspace."))))),(0,n.kt)("h3",{id:"improvements"},"Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Improved the Airbyte version naming conventions by removing the ",(0,n.kt)("inlineCode",{parentName:"p"},"-alpha")," tag. The Airbyte platform is used successfully by thousands of users, so the ",(0,n.kt)("inlineCode",{parentName:"p"},"-alpha")," tag is no longer necessary. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/15766"},"#15766"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Improved the ",(0,n.kt)("inlineCode",{parentName:"p"},"loadBalancerIP")," in the web app by making it configurable. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14992"},"#14992"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Datadog:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Improved the Airbyte platform by supporting StatsD, which sends Temporal metrics to Datadog. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14842"},"#14842"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added Datadog tags to help you identify metrics between Airbyte instances. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/15213"},"#15213")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added metric client tracking to record schema validation errors. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/13393"},"#13393")))))),(0,n.kt)("h3",{id:"bugs"},"Bugs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fixed an issue where data types did not display correctly in the UI. The correct data types are now displayed in the streams of your connections. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/15558"},"#15558"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fixed an issue where requests would fail during a release by adding a shutdown hook to the Airbyte server. This ensures the requests will be gracefully terminated before they can fail. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/15934"},"#15934"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Helm charts:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fixed the deployment problems of the Helm chart with FluxCD by removing unconditional resource assignment in the chart for Temporal. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/15374"},"#15374"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fixed the following issues in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/15199"},"#15199"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fixed an issue where ",(0,n.kt)("inlineCode",{parentName:"p"},"toyaml")," was being used instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"toYaml"),", which caused Helm chart installation to fail.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fixed incorrect ",(0,n.kt)("inlineCode",{parentName:"p"},"extraContainers")," indentation, which caused Helm chart installation to fail if the value was supplied.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fixed incorrect Postgres secret reference and made it more user friendly.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Updated the method of looking up secrets and included an override feature to protect users from common mistakes."))))))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),h=n,d=c["".concat(p,".").concat(h)]||c[h]||m[h]||i;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);