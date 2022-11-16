"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[34186],{83932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(83117),n=(r(67294),r(3905));const o={},l="YouTube Analytics",i={unversionedId:"integrations/sources/youtube-analytics",id:"integrations/sources/youtube-analytics",title:"YouTube Analytics",description:"This page contains the setup guide and reference information for the YouTube Analytics source connector.",source:"@site/../docs/integrations/sources/youtube-analytics.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/youtube-analytics",permalink:"/integrations/sources/youtube-analytics",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/youtube-analytics.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Younium",permalink:"/integrations/sources/younium"},next:{title:"Zapier Supported Storage",permalink:"/integrations/sources/zapier-supported-storage"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up YouTube Analytics",id:"step-1-set-up-youtube-analytics",level:3},{value:"Step 2: Set up the YouTube Analytics connector in Airbyte",id:"step-2-set-up-the-youtube-analytics-connector-in-airbyte",level:2},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte OSS:",id:"for-airbyte-oss",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"youtube-analytics"},"YouTube Analytics"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the YouTube Analytics source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"YouTube does not start to generate a report until you create a ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/youtube/reporting/v1/reports#step-3:-create-a-reporting-job"},"reporting job")," for that report.\nAirbyte creates a reporting job for your report or uses current reporting job if it's already exists.\nThe report will be available within 48 hours of creating the reporting job and will be for the day that the job was scheduled.\nFor example, if you schedule a job on September 1, 2015, then the report for September 1, 2015, will be ready on September 3, 2015.\nThe report for September 2, 2015, will be posted on September 4, 2015, and so forth.\nYoutube also generates historical data reports covering the 30-day period prior to when you created the job. Airbyte syncs all available historical data too."),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-youtube-analytics"},"Step 1: Set up YouTube Analytics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/api/youtubereporting.googleapis.com/overview"},"YouTube Reporting API dashboard")," in the project for your service user. Enable the API for your account."),(0,n.kt)("li",{parentName:"ul"},"Use your Google account and authorize over Google's OAuth 2.0 on connection setup. Please make sure to grant the following ",(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports#step-1:-retrieve-authorization-credentials"},"authorization scope"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"https://www.googleapis.com/auth/yt-analytics.readonly"),".")),(0,n.kt)("h2",{id:"step-2-set-up-the-youtube-analytics-connector-in-airbyte"},"Step 2: Set up the YouTube Analytics connector in Airbyte"),(0,n.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the YouTube Analytics connector and select ",(0,n.kt)("strong",{parentName:"li"},"YouTube Analytics")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("inlineCode",{parentName:"li"},"Authenticate your account"),"."),(0,n.kt)("li",{parentName:"ol"},"Log in and Authorize to the Instagram account and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h3",{id:"for-airbyte-oss"},"For Airbyte OSS:"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the YouTube Analytics connector and select ",(0,n.kt)("strong",{parentName:"li"},"YouTube Analytics")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("inlineCode",{parentName:"li"},"client_id")),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("inlineCode",{parentName:"li"},"client_secret")),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("inlineCode",{parentName:"li"},"refresh_token")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The YouTube Analytics source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Channel Reports"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Content Owner Reports"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"YouTube Data API"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coming soon")))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-annotations"},"channel_annotations_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-user-activity"},"channel_basic_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-cards"},"channel_cards_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-combined"},"channel_combined_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-viewer-demographics"},"channel_demographics_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-device-type-and-operating-system"},"channel_device_os_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-end-screens"},"channel_end_screens_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-playback-locations"},"channel_playback_location_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-province"},"channel_province_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-content-sharing"},"channel_sharing_service_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-subtitles"},"channel_subtitles_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-traffic-sources"},"channel_traffic_source_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-user-activity"},"playlist_basic_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-combined"},"playlist_combined_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-device-type-and-operating-system"},"playlist_device_os_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-playback-locations"},"playlist_playback_location_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-province"},"playlist_province_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-traffic-sources"},"playlist_traffic_source_a1"))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Free requests per day: 20,000"),(0,n.kt)("li",{parentName:"ul"},"Free requests per 100 seconds: 100"),(0,n.kt)("li",{parentName:"ul"},"Free requests per minute: 60")),(0,n.kt)("p",null,"Quota usage is not an issue because data is retrieved once and then filtered, sorted, and queried within the application."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17454"},"17454")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added custom backoff logic")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17399"},"17399")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,n.kt)("inlineCode",{parentName:"td"},"403")," error while ",(0,n.kt)("inlineCode",{parentName:"td"},"check connection"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15744"},"15744")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix ",(0,n.kt)("inlineCode",{parentName:"td"},"channel_basic_a2")," schema fields data type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7407"},"7407")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);