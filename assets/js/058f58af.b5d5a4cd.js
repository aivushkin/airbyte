"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[82778],{30907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(83117),n=(r(67294),r(3905));const o={},i="Breezometer",l={unversionedId:"integrations/sources/breezometer",id:"integrations/sources/breezometer",title:"Breezometer",description:"Breezometer connector lets you request environment information like air quality, pollen forecast, current and forecasted weather and wildfires for a specific location.",source:"@site/../docs/integrations/sources/breezometer.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/breezometer",permalink:"/integrations/sources/breezometer",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/breezometer.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Braintree",permalink:"/integrations/sources/braintree"},next:{title:"CallRail",permalink:"/integrations/sources/callrail"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Airbyte Open Source",id:"airbyte-open-source",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"breezometer"},"Breezometer"),(0,n.kt)("p",null,"Breezometer connector lets you request environment information like air quality, pollen forecast, current and forecasted weather and wildfires for a specific location."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Breezometer"),(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("inlineCode",{parentName:"li"},"api_key"),", that can be found on your Breezometer account home page.")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Breezometer connector supports full sync refresh."),(0,n.kt)("h2",{id:"airbyte-open-source"},"Airbyte Open Source"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"API Key"),(0,n.kt)("li",{parentName:"ul"},"Latitude"),(0,n.kt)("li",{parentName:"ul"},"Longitude"),(0,n.kt)("li",{parentName:"ul"},"Days to Forecast"),(0,n.kt)("li",{parentName:"ul"},"Hours to Forecast"),(0,n.kt)("li",{parentName:"ul"},"Historic Hours"),(0,n.kt)("li",{parentName:"ul"},"Radius")),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.breezometer.com/api-documentation/air-quality-api/v2/#current-conditions"},"Air Quality - Current")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.breezometer.com/api-documentation/air-quality-api/v2/#hourly-forecast"},"Air Quality - Forecast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.breezometer.com/api-documentation/air-quality-api/v2/#hourly-history"},"Air Quality - Historical")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.breezometer.com/api-documentation/pollen-api/v2/#daily-forecast"},"Pollen - Forecast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.breezometer.com/api-documentation/weather-api/v1/#current-conditions"},"Weather - Current")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.breezometer.com/api-documentation/weather-api/v1/#hourly-forecast"},"Weather - Forecast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.breezometer.com/api-documentation/wildfire-tracker-api/v1/#burnt-area-api"},"Wildfire - Burnt Area")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.breezometer.com/api-documentation/wildfire-tracker-api/v1/#current-conditions"},"Wildfire - Locate"))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18650"},"18650")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial version/release of the connector.")))))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);