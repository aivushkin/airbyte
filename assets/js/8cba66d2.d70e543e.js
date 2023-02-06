"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[83339],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},i="January 2023",l={unversionedId:"release_notes/january_2023",id:"release_notes/january_2023",title:"January 2023",description:"Airbyte v0.40.27 to v0.40.32",source:"@site/../docs/release_notes/january_2023.md",sourceDirName:"release_notes",slug:"/release_notes/january_2023",permalink:"/release_notes/january_2023",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/release_notes/january_2023.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Release Notes",permalink:"/category/release-notes"},next:{title:"December 2022",permalink:"/release_notes/december_2022"}},s={},u=[{value:"Airbyte v0.40.27 to v0.40.32",id:"airbyte-v04027-to-v04032",level:2},{value:"New features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"january-2023"},"January 2023"),(0,a.kt)("h2",{id:"airbyte-v04027-to-v04032"},"Airbyte ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.40.27"},"v0.40.27")," to ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.40.32"},"v0.40.32")),(0,a.kt)("p",null,"This page includes new features and improvements to the Airbyte Cloud and Airbyte Open Source platforms. "),(0,a.kt)("h3",{id:"new-features"},"New features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud#enroll-in-the-free-connector-program"},"Free Connector Program")," to Airbyte Cloud, allowing you to sync connections with alpha or beta connectors for free.")),(0,a.kt)("h3",{id:"improvements"},"Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improved Airbyte Open Source by integrating ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/compose-v2/"},"Docker Compose V2"),". You must have Docker Compose V2 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"installed")," before upgrading to Airbyte version 0.42.0 or later. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/19321"},"#19321")),(0,a.kt)("li",{parentName:"ul"},"Improved the Airbyte Cloud UI by displaying the ",(0,a.kt)("strong",{parentName:"li"},"Credits")," label in the sidebar and low-credit alerts on the Credits page. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20595"},"#20595")),(0,a.kt)("li",{parentName:"ul"},"Improved the Airbyte CI workflow by adding support to pull requests and limiting the CI runs to only occur on pushes to the master branch. This enhances collaboration with external contributors and reduces unnecessary runs. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/21266"},"#21266")),(0,a.kt)("li",{parentName:"ul"},"Improved the connector form by using proper validation in the array section. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20725"},"#20725")),(0,a.kt)("li",{parentName:"ul"},"Ongoing improvements to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/connector-development/config-based/connector-builder-ui/?_ga=2.261393869.1948366377.1675105348-1616004530.1663010260"},"Connector Builder UI")," in alpha:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added support for substream slicers and cartesian slicers, allowing the Connector Builder to create substreams and new streams from multiple existing streams. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20861"},"#20861")),(0,a.kt)("li",{parentName:"ul"},"Added support for in-schema specification and validation, including a manual schema option. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20862"},"#20862")),(0,a.kt)("li",{parentName:"ul"},"Added user inputs, request options, authentication, pagination, and slicing to the Connector Builder UI. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20809"},"#20809")),(0,a.kt)("li",{parentName:"ul"},"Added ability to convert from YAML manifest to UI form values. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/21142"},"#21142")),(0,a.kt)("li",{parentName:"ul"},"Improved the Connector Builder\u2019s conversion of YAML manifest to UI form values by resolving references and options in the manifest. The Connector Builder Server API has been updated with a new endpoint for resolving the manifest, which is now utilized by the conversion function. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/21898"},"#21898"))))),(0,a.kt)("h1",{id:"bugs"},"Bugs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where the checkboxes in the stream table would collapse and updated icons to match the new design. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/21108"},"#21108")),(0,a.kt)("li",{parentName:"ul"},"Fixed issues with non-breaking schema changes by adding an i18n string, ensuring supported options are rendered, and fixing a custom styling issue when resizing. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/20625"},"#20625"))))}c.isMDXComponent=!0}}]);