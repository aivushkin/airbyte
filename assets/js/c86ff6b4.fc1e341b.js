"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[29051],{62010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const o={},s="Senseforce",i={unversionedId:"integrations/sources/senseforce",id:"integrations/sources/senseforce",title:"Senseforce",description:"This page guides you through the process of setting up the Senseforce source connector.",source:"@site/../docs/integrations/sources/senseforce.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/senseforce",permalink:"/integrations/sources/senseforce",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/senseforce.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Sendinblue API",permalink:"/integrations/sources/sendinblue"},next:{title:"Sentry",permalink:"/integrations/sources/sentry"}},l={},p=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Senseforce Dataset to Export",id:"creating-a-senseforce-dataset-to-export",level:2},{value:"Set up the Senseforce source connector",id:"set-up-the-senseforce-source-connector",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"senseforce"},"Senseforce"),(0,n.kt)("p",null,"This page guides you through the process of setting up the Senseforce source connector."),(0,n.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"https://manual.senseforce.io/manual/sf-platform/dataset-builder"},"Senseforce Dataset")," to export"),(0,n.kt)("li",{parentName:"ul"},"Your ",(0,n.kt)("a",{parentName:"li",href:"https://manual.senseforce.io/manual/sf-platform/public-api/get-your-access-token"},"Senseforce ",(0,n.kt)("inlineCode",{parentName:"a"},"API Access Token"))),(0,n.kt)("li",{parentName:"ul"},"Your ",(0,n.kt)("a",{parentName:"li",href:"https://manual.senseforce.io/manual/sf-platform/public-api/endpoints#prerequisites"},"Senseforce ",(0,n.kt)("inlineCode",{parentName:"a"},"Backend URL"))),(0,n.kt)("li",{parentName:"ul"},"Your ",(0,n.kt)("a",{parentName:"li",href:"https://manual.senseforce.io/manual/sf-platform/public-api/endpoints#prerequisites"},"Senseforce ",(0,n.kt)("inlineCode",{parentName:"a"},"Dataset ID")))),(0,n.kt)("h2",{id:"creating-a-senseforce-dataset-to-export"},"Creating a Senseforce Dataset to Export"),(0,n.kt)("p",null,"The Senseforce Airbyte connector allows to export custom datasets built bei Senseforce users. Follow these steps to configure a dataset which can be exported with the Airbyte connector: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new, empty dataset as documented ",(0,n.kt)("a",{parentName:"li",href:"https://manual.senseforce.io/manual/sf-platform/dataset-builder"},"here")),(0,n.kt)("li",{parentName:"ol"},"Add at least the following columns (these columns are Senseforce system columns and available for all of your custom data models/event schemas): ",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Metadata -> Timestamp"),(0,n.kt)("li",{parentName:"ol"},"Metadata -> Thing"),(0,n.kt)("li",{parentName:"ol"},"Metadata -> Id"))),(0,n.kt)("li",{parentName:"ol"},"Add any other column of your event schemas you want to export"),(0,n.kt)("li",{parentName:"ol"},"Enter a descriptive Name and a Description and save the dataset"),(0,n.kt)("li",{parentName:"ol"},"Note the ID of the dataset (the GUID at the end of the URL path of your dataset in your browser URL bar)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Tip:")," For most exports it is recommended to have the Timestamp column in first place. The Airbyte connector automatically orders in ascending direction. If the Timestamp column is not in the first position, incremental syncs might not work properly.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"IMPORTANT:"),' The Timestamp, Thing and Id column are mandatory for the Connector to work as intended. While it still works without eg. the "Id", functionality might be impaired if one of these 3 columns is missing. Make sure to not rename these columns - keep them at their default names.')),(0,n.kt)("h2",{id:"set-up-the-senseforce-source-connector"},"Set up the Senseforce source connector"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log into your ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.airbyte.io/workspaces"},"Airbyte Cloud")," or Airbyte Open Source account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"p"},"+ New source"),". ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"p"},"Senseforce")," from the Source type dropdown.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a name for your source.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"API Access Token"),", enter your ",(0,n.kt)("a",{parentName:"p",href:"https://manual.senseforce.io/manual/sf-platform/public-api/get-your-access-token"},"Senseforce ",(0,n.kt)("inlineCode",{parentName:"a"},"API Access Token")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"Senseforce backend URL"),", enter your ",(0,n.kt)("a",{parentName:"p",href:"https://manual.senseforce.io/manual/sf-platform/public-api/endpoints#prerequisites"},"Senseforce ",(0,n.kt)("inlineCode",{parentName:"a"},"Backend URL")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"Dataset ID"),", enter your ",(0,n.kt)("a",{parentName:"p",href:"https://manual.senseforce.io/manual/sf-platform/public-api/endpoints#prerequisites"},"Senseforce ",(0,n.kt)("inlineCode",{parentName:"a"},"Dataset ID")),"."),(0,n.kt)("p",{parentName:"li"},"We recommend creating an api access token specifically for Airbyte to control which resources Airbyte can access. For good operations, we recommend to create a separate Airbyte User as well as a separate Senseforce ",(0,n.kt)("a",{parentName:"p",href:"https://manual.senseforce.io/manual/sf-platform/user-and-group-management"},"Airbyte Group"),". Share the dataset with this group and grant Dataset Read, Event Schema Read and Machine Master Data Read permissions.  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"The first day (in UTC) when to read data from"),", enter the day in YYYY-MM-DD format. The data added on and after this day will be replicated.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Set up source"),"."))),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Senseforce source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full Refresh"),(0,n.kt)("li",{parentName:"ul"},"Incremental")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE:")," The Senseforce Airbyte connector uses the Timestamp column to determine, which data were already read. Data inserted AFTER a finished sync, with timestamps less than already synced ones, are not considered for the next sync anymore.\nIf this behavior does not fit your use case, follow the next section"),(0,n.kt)("h3",{parentName:"blockquote",id:"using-inserted-timestamp-instead-of-data-timestamp-for-incremental-modes"},"Using Inserted Timestamp instead of Data Timestamp for incremental modes"),(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},'Rename your "Timestamp" column to "Timestamp_data"'),(0,n.kt)("li",{parentName:"ol"},"Add the Metadata -> Inserted column to your dataset."),(0,n.kt)("li",{parentName:"ol"},'Move the newly added "Inserted" column to position 1.'),(0,n.kt)("li",{parentName:"ol"},'Rename the "Inserted" column to "Timestamp".'))),(0,n.kt)("p",null,"Now the inserted timestamp will be used for creating the Airbyte cursor. Note that this method results in slower syncs, as the Senseforce queries to generate the Datasets are slower than if you use the data timestamp."),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"The Senseforce source connector supports the following streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://manual.senseforce.io/manual/sf-platform/public-api/endpoints"},"Senseforce Datasets"))),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Senseforce utilizes an undocumented rate limit which - under normal use - should not be triggered, even with huge datasets.\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"Create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18775"},"#18775")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Source: Mailjet SMS API ","[low-code CDK]")))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);