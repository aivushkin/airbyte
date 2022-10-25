"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3498],{50294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(83117),r=(a(67294),a(3905));const i={},l="Incremental Sync - Append",o={unversionedId:"understanding-airbyte/connections/incremental-append",id:"understanding-airbyte/connections/incremental-append",title:"Incremental Sync - Append",description:"Overview",source:"@site/../docs/understanding-airbyte/connections/incremental-append.md",sourceDirName:"understanding-airbyte/connections",slug:"/understanding-airbyte/connections/incremental-append",permalink:"/understanding-airbyte/connections/incremental-append",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/understanding-airbyte/connections/incremental-append.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Full Refresh - Append",permalink:"/understanding-airbyte/connections/full-refresh-append"},next:{title:"Incremental Sync - Deduped History",permalink:"/understanding-airbyte/connections/incremental-deduped-history"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Rules",id:"rules",level:2},{value:"Newly Created Record",id:"newly-created-record",level:3},{value:"Updating a Record",id:"updating-a-record",level:3},{value:"Source-Defined Cursor",id:"source-defined-cursor",level:2},{value:"User-Defined Cursor",id:"user-defined-cursor",level:2},{value:"Getting the Latest Snapshot of data",id:"getting-the-latest-snapshot-of-data",level:2},{value:"Inclusive Cursors",id:"inclusive-cursors",level:2},{value:"Known Limitations",id:"known-limitations",level:2},{value:"Related information",id:"related-information",level:2}],p={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"incremental-sync---append"},"Incremental Sync - Append"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Airbyte supports syncing data in ",(0,r.kt)("strong",{parentName:"p"},"Incremental Append")," mode i.e: syncing only replicate ",(0,r.kt)("em",{parentName:"p"},"new")," or ",(0,r.kt)("em",{parentName:"p"},"modified")," data. This prevents re-fetching data that you have already replicated from a source. If the sync is running for the first time, it is equivalent to a ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/full-refresh-append"},"Full Refresh")," since all data will be considered as ",(0,r.kt)("em",{parentName:"p"},"new"),"."),(0,r.kt)("p",null,"In this flavor of incremental, records in the warehouse destination will never be deleted or mutated. A copy of each new or updated record is ",(0,r.kt)("em",{parentName:"p"},"appended"),' to the data in the warehouse. This means you can find multiple copies of the same record in the destination warehouse. We provide an "at least once" guarantee of replicating each record that is present when the sync runs.'),(0,r.kt)("h2",{id:"definitions"},"Definitions"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor")," is the value used to track whether a record should be replicated in an incremental sync. A common example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor")," would be a timestamp from an ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," column in a database table."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor field")," is the ",(0,r.kt)("em",{parentName:"p"},"field")," or ",(0,r.kt)("em",{parentName:"p"},"column")," in the data where that cursor can be found. Extending the above example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," column in the database would be the ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor field"),", while the ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor")," is the actual timestamp ",(0,r.kt)("em",{parentName:"p"},"value")," used to determine if a record should be replicated."),(0,r.kt)("p",null,"We will refer to the set of records that the source identifies as being new or updated as a ",(0,r.kt)("inlineCode",{parentName:"p"},"delta"),"."),(0,r.kt)("h2",{id:"rules"},"Rules"),(0,r.kt)("p",null,"As mentioned above, the delta from a sync will be ",(0,r.kt)("em",{parentName:"p"},"appended")," to the existing data in the data warehouse. Incremental will never delete or mutate existing records. Let's walk through a few examples."),(0,r.kt)("h3",{id:"newly-created-record"},"Newly Created Record"),(0,r.kt)("p",null,"Assume that ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," is our ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor_field"),". Let's say the following data already exists into our data warehouse."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"deceased"),(0,r.kt)("th",{parentName:"tr",align:"left"},"updated","_","at"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Louis XVI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1754")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Marie Antoinette"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1755")))),(0,r.kt)("p",null,"In the next sync, the delta contains the following record:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"deceased"),(0,r.kt)("th",{parentName:"tr",align:"left"},"updated","_","at"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Louis XVII"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1785")))),(0,r.kt)("p",null,"At the end of this incremental sync, the data warehouse would now contain:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"deceased"),(0,r.kt)("th",{parentName:"tr",align:"left"},"updated","_","at"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Louis XVI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1754")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Marie Antoinette"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1755")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Louis XVII"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1785")))),(0,r.kt)("h3",{id:"updating-a-record"},"Updating a Record"),(0,r.kt)("p",null,"Let's assume that our warehouse contains all the data that it did at the end of the previous section. Now, unfortunately the king and queen lose their heads. Let's see that delta:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"deceased"),(0,r.kt)("th",{parentName:"tr",align:"left"},"updated","_","at"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Louis XVI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1793")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Marie Antoinette"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1793")))),(0,r.kt)("p",null,"The output we expect to see in the warehouse is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"deceased"),(0,r.kt)("th",{parentName:"tr",align:"left"},"updated","_","at"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Louis XVI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1754")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Marie Antoinette"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1755")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Louis XVII"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1785")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Louis XVI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1793")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Marie Antoinette"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1793")))),(0,r.kt)("h2",{id:"source-defined-cursor"},"Source-Defined Cursor"),(0,r.kt)("p",null,"Some sources are able to determine the cursor that they use without any user input. For example, in the ",(0,r.kt)("a",{parentName:"p",href:"/integrations/sources/exchangeratesapi"},"exchange rates source"),", the source knows that the date field should be used to determine the last record that was synced. In these cases, simply select the incremental option in the UI."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6746).Z,width:"813",height:"202"})),(0,r.kt)("p",null,"(","You can find a more technical details about the configuration data model ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol#catalog"},"here"),")","."),(0,r.kt)("h2",{id:"user-defined-cursor"},"User-Defined Cursor"),(0,r.kt)("p",null,"Some sources cannot define the cursor without user input. For example, in the ",(0,r.kt)("a",{parentName:"p",href:"/integrations/sources/postgres"},"postgres source"),", the user needs to choose which column in a database table they want to use as the ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor field"),". In these cases, select the column in the sync settings dropdown that should be used as the ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor field"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(89117).Z,width:"813",height:"286"})),(0,r.kt)("p",null,"(","You can find a more technical details about the configuration data model ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol#catalog"},"here"),")","."),(0,r.kt)("h2",{id:"getting-the-latest-snapshot-of-data"},"Getting the Latest Snapshot of data"),(0,r.kt)("p",null,"As demonstrated in the examples above, with ",(0,r.kt)("strong",{parentName:"p"},"Incremental Append,")," a record which was updated in the source will be appended to the destination rather than updated in-place. This means that if data in the source uses a primary key ","(","e.g: ",(0,r.kt)("inlineCode",{parentName:"p"},"user_id")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," table",")",", then the destination will end up having multiple records with the same primary key value."),(0,r.kt)("p",null,"However, some use cases require only the latest snapshot of the data. This is available by using other flavors of sync modes such as ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/incremental-deduped-history"},"Incremental - Deduped History")," instead."),(0,r.kt)("p",null,"Note that in ",(0,r.kt)("strong",{parentName:"p"},"Incremental Append"),", the size of the data in your warehouse increases monotonically since an updated record in the source is appended to the destination rather than updated in-place."),(0,r.kt)("p",null,"If you only care about having the latest snapshot of your data, you may want to look at other sync modes that will keep smaller copies of the replicated data or you can periodically run cleanup jobs which retain only the latest instance of each record."),(0,r.kt)("h2",{id:"inclusive-cursors"},"Inclusive Cursors"),(0,r.kt)("p",null,"When replicating data incrementally, Airbyte provides an at-least-once delivery guarantee. This means that it is acceptable for sources to re-send some data when ran incrementally. One case where this is particularly relevant is when a source's cursor is not very granular. For example, if a cursor field has the granularity of a day ","(","but not hours, seconds, etc",")",", then if that source is run twice in the same day, there is no way for the source to know which records that are that date were already replicated earlier that day. By convention, sources should prefer resending data if the cursor field is ambiguous."),(0,r.kt)("p",null,"Additionally, you may run into behavior where you see the same row being emitted during each sync. This will occur if your data has not changed and you attempt to run additional syncs, as the cursor field will always be greater than or equal to itself, causing it to pull the latest row multiple times until there is new data at the source."),(0,r.kt)("h2",{id:"known-limitations"},"Known Limitations"),(0,r.kt)("p",null,"Due to the use of a cursor column, if modifications to the underlying records are made without properly updating the cursor field, then the updated records won't be picked up by the ",(0,r.kt)("strong",{parentName:"p"},"Incremental")," sync as expected since the source connectors extract delta rows using a SQL query looking like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE cursor_field >= 'last_sync_max_cursor_field_value'\n")),(0,r.kt)("p",null,"Let's say the following data already exists into our data warehouse."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"deceased"),(0,r.kt)("th",{parentName:"tr",align:"left"},"updated","_","at"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Louis XVI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1754")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Marie Antoinette"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1755")))),(0,r.kt)("p",null,"At the start of the next sync, the source data contains the following new record:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"deceased"),(0,r.kt)("th",{parentName:"tr",align:"left"},"updated","_","at"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Louis XVI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1754")))),(0,r.kt)("p",null,"At the end of the second incremental sync, the data warehouse would still contain data from the first sync because the delta record did not provide a valid value for the cursor field ","(","the cursor field is not greater than last sync's max value, ",(0,r.kt)("inlineCode",{parentName:"p"},"1754 < 1755"),")",", so it is not emitted by the source as a new or modified record."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"deceased"),(0,r.kt)("th",{parentName:"tr",align:"left"},"updated","_","at"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Louis XVI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1754")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Marie Antoinette"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1755")))),(0,r.kt)("p",null,"Similarly, if multiple modifications are made during the same day to the same records. If the frequency of the sync is not granular enough ","(","for example, set for every 24h",")",", then intermediate modifications to the data are not going to be detected and emitted. Only the state of data at the time the sync runs will be reflected in the destination."),(0,r.kt)("p",null,"Those concerns could be solved by using a different incremental approach based on binary logs, Write-Ahead-Logs ","(","WAL",")",", or also called ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/cdc"},"Change Data Capture ","(","CDC",")"),"."),(0,r.kt)("p",null,"The current behavior of ",(0,r.kt)("strong",{parentName:"p"},"Incremental")," is not able to handle source schema changes yet, for example, when a column is added, renamed or deleted from an existing table etc. It is recommended to trigger a ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/full-refresh-overwrite"},"Full refresh - Overwrite")," to correctly replicate the data to the destination with the new schema changes."),(0,r.kt)("p",null,"If you are not satisfied with how transformations are applied on top of the appended data, you can find more relevant SQL transformations you might need to do on your data in the ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/incremental-append"},"Connecting EL with T using SQL ","(","part 1/2",")")),(0,r.kt)("h2",{id:"related-information"},"Related information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://airbyte.com/tutorials/incremental-data-synchronization"},"Explore Airbyte\u2019s incremental data synchronization"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://airbyte.com/blog/understanding-data-replication-modes"},"An overview of Airbyte\u2019s replication modes"),".")))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6746:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/incremental_source_defined-5ee751ce572c7bfc093f46885ee953e0.png"},89117:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/incremental_user_defined-2d96851b970525510c8aa2d086fdb4e5.png"}}]);