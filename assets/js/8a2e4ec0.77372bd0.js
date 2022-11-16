"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[98213],{44951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const o={},i="Step 6: Testing",c={unversionedId:"connector-development/config-based/tutorial/testing",id:"connector-development/config-based/tutorial/testing",title:"Step 6: Testing",description:"We should make sure the connector respects the Airbyte specifications before we start using it in production.",source:"@site/../docs/connector-development/config-based/tutorial/6-testing.md",sourceDirName:"connector-development/config-based/tutorial",slug:"/connector-development/config-based/tutorial/testing",permalink:"/connector-development/config-based/tutorial/testing",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/tutorial/6-testing.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"mySidebar",previous:{title:"Step 5: Incremental Reads",permalink:"/connector-development/config-based/tutorial/incremental-reads"},next:{title:"Understanding the YAML file",permalink:"/connector-development/config-based/understanding-the-yaml-file/yaml-overview"}},s={},l=[{value:"Next steps:",id:"next-steps",level:2},{value:"Read more:",id:"read-more",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"step-6-testing"},"Step 6: Testing"),(0,a.kt)("p",null,"We should make sure the connector respects the Airbyte specifications before we start using it in production.\nThis can be done by executing the Source Acceptance Tests (SAT)."),(0,a.kt)("p",null,"These tests will assert the most basic functionalities work as expected and are configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"acceptance-test-config.yml"),"."),(0,a.kt)("p",null,"Before running the tests, we'll create an invalid config to make sure the ",(0,a.kt)("inlineCode",{parentName:"p"},"check")," operation fails if the credentials are wrong, and an abnormal state to verify the connector's behavior when running with an abnormal state."),(0,a.kt)("p",null,"Update ",(0,a.kt)("inlineCode",{parentName:"p"},"integration_tests/invalid_config.json")," with this content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_key": "<invalid_key>",\n  "start_date": "2022-07-21",\n  "base": "USD"\n}\n')),(0,a.kt)("p",null,"and ",(0,a.kt)("inlineCode",{parentName:"p"},"integration_tests/abnormal_state.json")," with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rates": {\n    "date": "2999-12-31"\n  }\n}\n\n')),(0,a.kt)("p",null,"You can run the acceptance tests with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build . -t airbyte/source-exchange-rates-tutorial:dev\npython -m pytest integration_tests -p integration_tests.acceptance\n")),(0,a.kt)("h2",{id:"next-steps"},"Next steps:"),(0,a.kt)("p",null,"Next, we'll add the connector to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/connector-development/tutorials/cdk-tutorial-python-http/use-connector-in-airbyte"},"Airbyte platform"),"."),(0,a.kt)("h2",{id:"read-more"},"Read more:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/connector-development/config-based/understanding-the-yaml-file/error-handling"},"Error handling")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/connector-development/config-based/understanding-the-yaml-file/pagination"},"Pagination")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/connector-development/testing-connectors/"},"Testing connectors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/contributing-to-airbyte/"},"Contribution guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors/source-greenhouse"},"Greenhouse source")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors/source-sendgrid"},"Sendgrid source")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors/source-sentry"},"Sentry source"))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);