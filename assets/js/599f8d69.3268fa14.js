"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2830],{64914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const o={},s="Stream Slices",i={unversionedId:"connector-development/cdk-python/stream-slices",id:"connector-development/cdk-python/stream-slices",title:"Stream Slices",description:"Stream Slicing",source:"@site/../docs/connector-development/cdk-python/stream-slices.md",sourceDirName:"connector-development/cdk-python",slug:"/connector-development/cdk-python/stream-slices",permalink:"/connector-development/cdk-python/stream-slices",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/cdk-python/stream-slices.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Python Concepts",permalink:"/connector-development/cdk-python/python-concepts"},next:{title:"Connector Development Kit (Javascript)",permalink:"/connector-development/cdk-faros-js"}},c={},l=[{value:"Stream Slicing",id:"stream-slicing",level:2},{value:"Use cases",id:"use-cases",level:3},{value:"The Slack connector: time-based slicing for large datasets",id:"the-slack-connector-time-based-slicing-for-large-datasets",level:4}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stream-slices"},"Stream Slices"),(0,a.kt)("h2",{id:"stream-slicing"},"Stream Slicing"),(0,a.kt)("p",null,"A Stream Slice is a subset of the records in a stream."),(0,a.kt)("p",null,"When a stream is being read incrementally, Slices can be used to control when state is saved."),(0,a.kt)("p",null,"When slicing is enabled, a state message will be output by the connector after reading every slice. Slicing is completely optional and is provided as a way for connectors to checkpoint state in a more granular way than basic interval-based state checkpointing. Slicing is typically used when reading a large amount of data or when the underlying data source imposes strict rate limits that make it difficult to re-read the same data over and over again. This being said, interval-based checkpointing is compatible with slicing with one difference: intervals are counted within a slice rather than across all records. In other words, the counter used to determine if the interval has been reached ","(","e.g: every 10k records",")"," resets at the beginning of every slice."),(0,a.kt)("p",null,"The relationship between records in a slice is up to the developer, but the list of slices must be yielded in ascending order, using the cursor field as context for the ordering. This is to ensure that the state can't be updated to a timestamp that is ahead of other slices yet to be processed. Slices are typically used to implement date-based checkpointing, for example to group records generated within a particular hour, day, or month etc."),(0,a.kt)("p",null,"Slices can be hard-coded or generated dynamically ","(","e.g: by making a query",")","."),(0,a.kt)("p",null,"An important restriction imposed on slices is that they must be described with a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"dict"),"s returned from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream.stream_slices()")," method, where each ",(0,a.kt)("inlineCode",{parentName:"p"},"dict")," describes a slice. The ",(0,a.kt)("inlineCode",{parentName:"p"},"dict"),"s may have any schema, and are passed as input to each stream's ",(0,a.kt)("inlineCode",{parentName:"p"},"read_stream")," method. This way, the connector can read the current slice description ","(","the input ",(0,a.kt)("inlineCode",{parentName:"p"},"dict"),")"," and use that to make queries as needed. As described above, this list of dicts must be in appropriate ascending order based on the cursor field."),(0,a.kt)("h3",{id:"use-cases"},"Use cases"),(0,a.kt)("p",null,"If your use case requires saving state based on an interval e.g: only 10,000 records but nothing more sophisticated, then slicing is not necessary and you can instead set the ",(0,a.kt)("inlineCode",{parentName:"p"},"state_checkpoint_interval")," property on a stream."),(0,a.kt)("h4",{id:"the-slack-connector-time-based-slicing-for-large-datasets"},"The Slack connector: time-based slicing for large datasets"),(0,a.kt)("p",null,'Slack is a chat platform for businesses. Collectively, a company can easily post tens or hundreds of thousands of messages in a single Slack instance per day. So when writing a connector to pull chats from Slack, it\'s easy to run into rate limits or for the sync to take a very long time to complete because of the large amount of data. So we want a way to frequently "save" which data we already read from the connector so that if there is a halfway failure, we pick up reading where we left off. In addition, the Slack API does not return messages sorted by timestamp, so we cannot use ',(0,a.kt)("inlineCode",{parentName:"p"},"state_checkpoint_interval"),"s."),(0,a.kt)("p",null,"This is a great usecase for stream slicing. The ",(0,a.kt)("inlineCode",{parentName:"p"},"messages")," stream, which outputs one record per chat message, can slice records by time e.g: hourly. It implements this by specifying the beginning and end timestamp of each hour that it wants to pull data from. Then after all the records in a given hour ","(","i.e: slice",")"," have been read, the connector outputs a STATE message to indicate that state should be saved. This way, if the connector ever fails during a sync ","(","for example if the API goes down",")"," then at most, it will reread only one hour's worth of messages."),(0,a.kt)("p",null,"See the implementation of the Slack connector ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-slack/source_slack/source.py"},"here"),"."))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,u=h["".concat(c,".").concat(m)]||h[m]||p[m]||o;return n?r.createElement(u,s(s({ref:t},d),{},{components:n})):r.createElement(u,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);