"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[41662],{40451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(83117),r=(a(67294),a(3905));const i={},o="Mariadb Columnstore",l={unversionedId:"integrations/destinations/mariadb-columnstore",id:"integrations/destinations/mariadb-columnstore",title:"Mariadb Columnstore",description:"Sync overview",source:"@site/../docs/integrations/destinations/mariadb-columnstore.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/mariadb-columnstore",permalink:"/integrations/destinations/mariadb-columnstore",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/mariadb-columnstore.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Local JSON",permalink:"/integrations/destinations/local-json"},next:{title:"MeiliSearch",permalink:"/integrations/destinations/meilisearch"}},s={},d=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Network Access",id:"network-access",level:4},{value:"<strong>Permissions</strong>",id:"permissions",level:4},{value:"Target Database",id:"target-database",level:4},{value:"Setup the MariaDB ColumnStore destination in Airbyte",id:"setup-the-mariadb-columnstore-destination-in-airbyte",level:3},{value:"Connection via SSH Tunnel",id:"connection-via-ssh-tunnel",level:2},{value:"CHANGELOG",id:"changelog",level:2}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mariadb-columnstore"},"Mariadb Columnstore"),(0,r.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,r.kt)("h3",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"Each stream will be output into its own table in MariaDB ColumnStore. Each table will contain 3 columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed. The column type in MariaDB ColumnStore is VARCHAR(256)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source. The column type in MariaDB ColumnStore is TIMESTAMP."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data. The column type in MariaDB ColumnStore is LONGTEXT.")),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?(Yes/No)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSH Tunnel Support"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"Could this connector hurt the user's database/API/etc... or put too much strain on it in certain circumstances? For example, if there are a lot of tables or rows in a table? What is the breaking point (e.g: 100mm",">"," records)? What can the user do to prevent this? (e.g: use a read-only replica, or schedule frequent syncs, etc..)"),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"To use the MariaDB ColumnStore destination, you'll need to sync data to MariaDB ColumnStore 5.5.3 or above."),(0,r.kt)("h4",{id:"network-access"},"Network Access"),(0,r.kt)("p",null,"Make sure your MariaDB ColumnStore database can be accessed by Airbyte. If your database is within a VPC, you may need to allow access from the IP you're using to expose Airbyte."),(0,r.kt)("h4",{id:"permissions"},(0,r.kt)("strong",{parentName:"h4"},"Permissions")),(0,r.kt)("p",null,"You need a MariaDB user with ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE, INSERT, SELECT, DROP")," permissions. We highly recommend creating an Airbyte-specific user for this purpose."),(0,r.kt)("h4",{id:"target-database"},"Target Database"),(0,r.kt)("p",null,"MariaDB ColumnStore doesn't differentiate between a database and schema. A database is essentially a schema where all the tables live in. You will need to choose an existing database or create a new database. This will act as a default database/schema where the tables will be created if the source doesn't provide a namespace."),(0,r.kt)("h3",{id:"setup-the-mariadb-columnstore-destination-in-airbyte"},"Setup the MariaDB ColumnStore destination in Airbyte"),(0,r.kt)("p",null,"Before setting up MariaDB ColumnStore destination in Airbyte, you need to set the ",(0,r.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/server-system-variables/#local_infile"},"local","_","infile")," system variable to true. You can do this by running the query ",(0,r.kt)("inlineCode",{parentName:"p"},"SET GLOBAL local_infile = true")," . This is required cause Airbyte uses ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD DATA LOCAL INFILE")," to load data into table."),(0,r.kt)("p",null,"You should now have all the requirements needed to configure MariaDB ColumnStore as a destination in the UI. You'll need the following information to configure the MariaDB ColumnStore destination:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Database"))),(0,r.kt)("h2",{id:"connection-via-ssh-tunnel"},"Connection via SSH Tunnel"),(0,r.kt)("p",null,"Airbyte has the ability to connect to a MariaDB instance via an SSH Tunnel. The reason you might want to do this because it is not possible ","(","or against security policy",")"," to connect to the database directly ","(","e.g. it does not have a public IP address",")","."),(0,r.kt)("p",null,"When using an SSH tunnel, you are configuring Airbyte to connect to an intermediate server ","(","a.k.a. a bastion sever",")"," that ",(0,r.kt)("em",{parentName:"p"},"does")," have direct access to the database. Airbyte connects to the bastion and then asks the bastion to connect directly to the server."),(0,r.kt)("p",null,"Using this feature requires additional configuration, when creating the destination. We will talk through what each piece of configuration means."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure all fields for the destination as you normally would, except ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Method"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Method")," defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"No Tunnel")," ","(","meaning a direct connection",")",". If you want to use an SSH Tunnel choose ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Password Authentication"),".",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Key Authentication")," if you will be using an RSA private key as your secret for establishing the SSH Tunnel ","(","see below for more information on generating this key",")","."),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Password Authentication")," if you will be using a password as your secret for establishing the SSH Tunnel."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Jump Server Host")," refers to the intermediate ","(","bastion",")"," server that Airbyte will connect to. This should be a hostname or an IP Address."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Connection Port")," is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is ",(0,r.kt)("inlineCode",{parentName:"li"},"22"),", so unless you have explicitly changed something, go with the default."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Login Username")," is the username that Airbyte should use when connection to the bastion server. This is NOT the MySQl username."),(0,r.kt)("li",{parentName:"ol"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"Password Authentication"),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Login Username")," should be set to the password of the User from the previous step. If you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication")," leave this blank. Again, this is not the MariaDB password, but the password for the OS-user that Airbyte is using to perform commands on the bastion."),(0,r.kt)("li",{parentName:"ol"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication"),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Private Key")," should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"-----BEGIN RSA PRIVATE KEY-----")," and ending with ",(0,r.kt)("inlineCode",{parentName:"li"},"-----END RSA PRIVATE KEY-----"),".")),(0,r.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-07"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16391"},"16391")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add custom JDBC parameters field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-17"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13864"},"13864")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Updated stacktrace format for any trace message errors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-05-17"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12820"},"12820")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Improved 'check' operation performance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-25"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10421"},"10421")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Refactor JDBC parameters handling")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,r.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8809"},"#","8809")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8371"},"#","8371")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Fixed incorrect handling "\\n" in ssh key.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-15"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7961"},"#","7961")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added MariaDB ColumnStore destination.")))))}p.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);