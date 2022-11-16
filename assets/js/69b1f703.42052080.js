"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[67137],{91040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const i={},o="Pipelinewise vs Airbyte",s={unversionedId:"archive/faq/differences-with/pipelinewise-vs-airbyte",id:"archive/faq/differences-with/pipelinewise-vs-airbyte",title:"Pipelinewise vs Airbyte",description:"PipelineWise:",source:"@site/../docs/archive/faq/differences-with/pipelinewise-vs-airbyte.md",sourceDirName:"archive/faq/differences-with",slug:"/archive/faq/differences-with/pipelinewise-vs-airbyte",permalink:"/archive/faq/differences-with/pipelinewise-vs-airbyte",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/archive/faq/differences-with/pipelinewise-vs-airbyte.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"<strong>PipelineWise:</strong>",id:"pipelinewise",level:2},{value:"<strong>Airbyte:</strong>",id:"airbyte",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pipelinewise-vs-airbyte"},"Pipelinewise vs Airbyte"),(0,a.kt)("h2",{id:"pipelinewise"},(0,a.kt)("strong",{parentName:"h2"},"PipelineWise:")),(0,a.kt)("p",null,"PipelineWise is an open-source project by Transferwise that was built with the primary goal of serving their own needs. There is no business model attached to the project, and no apparent interest in growing the community."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Supports 21 connectors,")," and only adds new ones based on the needs of the mother company, Transferwise. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No business model attached to the project,")," and no apparent interest from the company in growing the community. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"As close to the original format as possible:")," PipelineWise aims to reproduce the data from the source to an Analytics-Data-Store in as close to the original format as possible. Some minor load time transformations are supported, but complex mapping and joins have to be done in the Analytics-Data-Store to extract meaning."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Managed Schema Changes:")," When source data changes, PipelineWise detects the change and alters the schema in your Analytics-Data-Store automatically."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"YAML based configuration:")," Data pipelines are defined as YAML files, ensuring that the entire configuration is kept under version control."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lightweight:")," No daemons or database setup are required.")),(0,a.kt)("h2",{id:"airbyte"},(0,a.kt)("strong",{parentName:"h2"},"Airbyte:")),(0,a.kt)("p",null,"In contrast, Airbyte is a company fully committed to the open-source project and has a ",(0,a.kt)("a",{parentName:"p",href:"https://handbook.airbyte.io/"},"business model in mind")," around this project."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Our ambition is to support ",(0,a.kt)("strong",{parentName:"li"},"300+ connectors by the end of 2021.")," We already supported about 50 connectors at the end of 2020, just 5 months after its inception."),(0,a.kt)("li",{parentName:"ul"},"Airbyte\u2019s connectors are ",(0,a.kt)("strong",{parentName:"li"},"usable out of the box through a UI and API,")," with monitoring, scheduling and orchestration. Airbyte was built on the premise that a user, whatever their background, should be able to move data in 2 minutes. Data engineers might want to use raw data and their own transformation processes, or to use Airbyte\u2019s API to include data integration in their workflows. On the other hand, analysts and data scientists might want to use normalized consolidated data in their database or data warehouses. Airbyte supports all these use cases.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"One platform, one project with standards:")," This will help consolidate the developments behind one single project, some standardization and specific data protocol that can benefit all teams and specific cases. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Connectors can be built in the language of your choice,")," as Airbyte runs them as Docker containers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Airbyte integrates with your data stack and your needs:")," Airflow, Kubernetes, dbt, etc. Its normalization is optional, it gives you a basic version that works out of the box, but also allows you to use dbt to do more complicated things.")),(0,a.kt)("p",null,"The data protocols for both projects are compatible with Singer\u2019s. So it is easy to migrate a Singer tap or target onto Airbyte or PipelineWise."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);