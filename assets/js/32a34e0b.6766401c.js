"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[30394],{12594:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(83117),n=(a(67294),a(3905));const l={},i="AzureBlobStorage",o={unversionedId:"integrations/destinations/azureblobstorage",id:"integrations/destinations/azureblobstorage",title:"AzureBlobStorage",description:"Overview",source:"@site/../docs/integrations/destinations/azureblobstorage.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/azureblobstorage",permalink:"/integrations/destinations/azureblobstorage",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/azureblobstorage.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"AWS Datalake",permalink:"/integrations/destinations/aws-datalake"},next:{title:"BigQuery",permalink:"/integrations/destinations/bigquery"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sync Mode",id:"sync-mode",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output Schema",id:"output-schema",level:2},{value:"CSV",id:"csv",level:3},{value:"JSON Lines (JSONL)",id:"json-lines-jsonl",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"CHANGELOG",id:"changelog",level:2}],m={toc:d};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"azureblobstorage"},"AzureBlobStorage"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This destination writes data to Azure Blob Storage."),(0,n.kt)("p",null,"The Airbyte Azure Blob Storage destination allows you to sync data to Azure Blob Storage. Each stream is written to its own blob under the container."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For Airbyte Open Source users using the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/integrations/sources/postgres"},"Postgres")," source connector, ",(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/operator-guides/upgrading-airbyte/"},"upgrade")," your Airbyte platform to version ",(0,n.kt)("inlineCode",{parentName:"li"},"v0.40.0-alpha")," or newer and upgrade your AzureBlobStorage connector to version ",(0,n.kt)("inlineCode",{parentName:"li"},"0.1.6")," or newer")),(0,n.kt)("h2",{id:"sync-mode"},"Sync Mode"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Support"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Warning: this mode deletes all previously synced data in the configured blob.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"left"},'The append mode would only work for "Append blobs" blobs as per Azure limitations, more details ',(0,n.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction#blobs"},"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction","#","blobs"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Endpoint Domain Name"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"This is Azure Blob Storage endpoint domain name. Leave default value ","(","or leave it empty if run container from command line",")"," to use Microsoft native one.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Azure blob storage container ","(","Bucket",")"," Name"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A name of the Azure blob storage container. If not exists - will be created automatically. If leave empty, then will be created automatically airbytecontainer+timestamp.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Azure Blob Storage account name"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The account's name of the Azure Blob Storage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"The Azure blob storage account key"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Azure blob storage account key. Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"abcdefghijklmnopqrstuvwxyz/0123456789+ABCDEFGHIJKLMNOPQRSTUVWXYZ/0123456789%++sampleKey=="),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Azure Blob Storage output buffer size"),(0,n.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Azure Blob Storage output buffer size, in megabytes. Example: 5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Format"),(0,n.kt)("td",{parentName:"tr",align:"center"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Format specific configuration. See below for details.")))),(0,n.kt)("p",null,'\u26a0\ufe0f Please note that under "Full Refresh Sync" mode, data in the configured blob will be wiped out before each sync. We recommend you to provision a dedicated Azure Blob Storage Container resource for this sync to prevent unexpected data deletion from misconfiguration. \u26a0\ufe0f'),(0,n.kt)("h2",{id:"output-schema"},"Output Schema"),(0,n.kt)("p",null,"Each stream will be outputted to its dedicated Blob according to the configuration. The complete datastore of each stream includes all the output files under that Blob. You can think of the Blob as equivalent of a Table in the database world."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Under Full Refresh Sync mode, old output files will be purged before new files are created."),(0,n.kt)("li",{parentName:"ul"},"Under Incremental - Append Sync mode, new output files will be added that only contain the new data.")),(0,n.kt)("h3",{id:"csv"},"CSV"),(0,n.kt)("p",null,"Like most of the other Airbyte destination connectors, usually the output has three columns: a UUID, an emission timestamp, and the data blob. With the CSV output, it is possible to normalize ","(","flatten",")"," the data blob to multiple columns."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Column"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Condition"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_airbyte_ab_id")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Always exists"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A uuid assigned by Airbyte to each processed record.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_airbyte_emitted_at")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Always exists."),(0,n.kt)("td",{parentName:"tr",align:"left"},"A timestamp representing when the event was pulled from the data source.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_airbyte_data")),(0,n.kt)("td",{parentName:"tr",align:"left"},"When no normalization ","(","flattening",")"," is needed, all data reside under this column as a json blob."),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"root level fields"),(0,n.kt)("td",{parentName:"tr",align:"left"},"When root level normalization ","(","flattening",")"," is selected, the root level fields are expanded."),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("p",null,"For example, given the following json object from a source:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "user_id": 123,\n  "name": {\n    "first": "John",\n    "last": "Doe"\n  }\n}\n')),(0,n.kt)("p",null,"With no normalization, the output CSV is:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"th"},"_airbyte_ab_id")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"th"},"_airbyte_emitted_at")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"th"},"_airbyte_data")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"26d73cde-7eb1-4e1e-b7db-a4c03b4cf206")),(0,n.kt)("td",{parentName:"tr",align:"left"},"1622135805000"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},'{ "user_id": 123, name: { "first": "John", "last": "Doe" } }'))))),(0,n.kt)("p",null,"With root level normalization, the output CSV is:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"th"},"_airbyte_ab_id")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"th"},"_airbyte_emitted_at")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"th"},"user_id")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"th"},"name")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"26d73cde-7eb1-4e1e-b7db-a4c03b4cf206")),(0,n.kt)("td",{parentName:"tr",align:"left"},"1622135805000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"123"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},'{ "first": "John", "last": "Doe" }'))))),(0,n.kt)("h3",{id:"json-lines-jsonl"},"JSON Lines ","(","JSONL",")"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://jsonlines.org/"},"Json Lines")," is a text format with one JSON per line. Each line has a structure as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "_airbyte_ab_id": "<uuid>",\n  "_airbyte_emitted_at": "<timestamp-in-millis>",\n  "_airbyte_data": "<json-data-from-source>"\n}\n')),(0,n.kt)("p",null,"For example, given the following two json objects from a source:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n  {\n    "user_id": 123,\n    "name": {\n      "first": "John",\n      "last": "Doe"\n    }\n  },\n  {\n    "user_id": 456,\n    "name": {\n      "first": "Jane",\n      "last": "Roe"\n    }\n  }\n]\n')),(0,n.kt)("p",null,"They will be like this in the output file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'{ "_airbyte_ab_id": "26d73cde-7eb1-4e1e-b7db-a4c03b4cf206", "_airbyte_emitted_at": "1622135805000", "_airbyte_data": { "user_id": 123, "name": { "first": "John", "last": "Doe" } } }\n{ "_airbyte_ab_id": "0a61de1b-9cdd-4455-a739-93572c9a5f20", "_airbyte_emitted_at": "1631948170000", "_airbyte_data": { "user_id": 456, "name": { "first": "Jane", "last": "Roe" } } }\n')),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create an AzureBlobStorage account."),(0,n.kt)("li",{parentName:"ol"},"Check if it works under ",(0,n.kt)("a",{parentName:"li",href:"https://portal.azure.com/"},"https://portal.azure.com/")," -",">",' "Storage explorer ',"(","preview",")",'".')),(0,n.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fill up AzureBlobStorage info",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Endpoint Domain Name"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Leave default value ","(","or leave it empty if run container from command line",")"," to use Microsoft native one or use your own."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Azure blob storage container"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If not exists - will be created automatically. If leave empty, then will be created automatically airbytecontainer+timestamp.."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Azure Blob Storage account name"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal"},"this")," on how to create an account."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"The Azure blob storage account key"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Corresponding key to the above user."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Format"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Data format that will be use for a migrated data representation in blob."))))),(0,n.kt)("li",{parentName:"ul"},"Make sure your user has access to Azure from the machine running Airbyte.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This depends on your networking setup."),(0,n.kt)("li",{parentName:"ul"},"The easiest way to verify if Airbyte is able to connect to your Azure blob storage container is via the check connection tool in the UI.")))),(0,n.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15318"},"#","15318")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Support per-stream state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13852"},"#","13852")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated stacktrace format for any trace message errors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12820"},"12820")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improved 'check' operation performance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9682"},"#","9682")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Each data synchronization for each stream is written to a new blob to the folder with stream name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9190"},"#","9190")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added BufferedOutputStream wrapper to blob output stream to improve performance and fix issues with 50,000 block limit. Also disabled autoflush on PrintWriter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5332"},"#","5332")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial release with JSONL and CSV output.")))))}s.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(a),c=n,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return a?r.createElement(k,i(i({ref:e},m),{},{components:a})):r.createElement(k,i({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);