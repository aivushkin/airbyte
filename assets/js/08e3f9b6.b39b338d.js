"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[64147],{60345:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(83117),n=(a(67294),a(3905));const i={},p="Stripe",l={unversionedId:"integrations/sources/stripe",id:"integrations/sources/stripe",title:"Stripe",description:"This page guides you through the process of setting up the Stripe source connector.",source:"@site/../docs/integrations/sources/stripe.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/stripe",permalink:"/integrations/sources/stripe",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/stripe.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Strava",permalink:"/integrations/sources/strava"},next:{title:"Sugar CRM",permalink:"/integrations/sources/sugar-crm"}},o={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up the Stripe source connector",id:"set-up-the-stripe-source-connector",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Changelog",id:"changelog",level:2}],m={toc:s};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stripe"},"Stripe"),(0,n.kt)("p",null,"This page guides you through the process of setting up the Stripe source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your ",(0,n.kt)("a",{parentName:"li",href:"https://dashboard.stripe.com/settings/account"},"Stripe ",(0,n.kt)("inlineCode",{parentName:"a"},"Account ID"))),(0,n.kt)("li",{parentName:"ul"},"Your ",(0,n.kt)("a",{parentName:"li",href:"https://dashboard.stripe.com/apikeys"},"Stripe ",(0,n.kt)("inlineCode",{parentName:"a"},"Secret Key")))),(0,n.kt)("h2",{id:"set-up-the-stripe-source-connector"},"Set up the Stripe source connector"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log into your ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.airbyte.io/workspaces"},"Airbyte Cloud")," or Airbyte Open Source account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"p"},"+ New source"),". ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"p"},"Stripe")," from the Source type dropdown.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a name for your source.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"Account ID"),", enter your ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.stripe.com/settings/account"},"Stripe ",(0,n.kt)("inlineCode",{parentName:"a"},"Account ID")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"Secret Key"),", enter your ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.stripe.com/apikeys"},"Stripe ",(0,n.kt)("inlineCode",{parentName:"a"},"Secret Key"))),(0,n.kt)("p",{parentName:"li"},"We recommend creating a secret key specifically for Airbyte to control which resources Airbyte can access. For ease of use, we recommend granting read permission to all resources and configuring which resource to replicate in the Airbyte UI. You can also use the API keys for the ",(0,n.kt)("a",{parentName:"p",href:"https://stripe.com/docs/keys#obtain-api-keys"},"test mode")," to try out the Stripe integration with Airbyte.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"Replication start date"),", enter the date in YYYY-MM-DDTHH:mm:ssZ format. The data added on and after this date will be replicated. If this field is blank, Airbyte will replicate all data.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"Lookback Window in days (Optional)"),", select the number of days the value in days prior to the start date that you to sync your data with. If your data is updated after setting up this connector, you can use the this option to reload data from the past N days. Example: If the Replication start date is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"2021-01-01T00:00:00Z"),", then:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you leave the Lookback Window in days parameter to its the default value of 0, Airbyte will sync data from the Replication start date ",(0,n.kt)("inlineCode",{parentName:"li"},"2021-01-01T00:00:00Z")),(0,n.kt)("li",{parentName:"ul"},"If the Lookback Window in days value is set to 1, Airbyte will consider the Replication start date to be ",(0,n.kt)("inlineCode",{parentName:"li"},"2020-12-31T00:00:00Z")),(0,n.kt)("li",{parentName:"ul"},"If the Lookback Window in days value is set to 7, Airbyte will sync data from ",(0,n.kt)("inlineCode",{parentName:"li"},"2020-12-31T00:00:00Z")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Set up source"),"."))),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Stripe source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full Refresh"),(0,n.kt)("li",{parentName:"ul"},"Incremental")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Since the Stripe API does not allow querying objects which were updated since the last sync, the Stripe connector uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"created")," field to query for new data in your Stripe account.")),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"The Stripe source connector supports the following streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/balance_transactions/list"},"Balance Transactions")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/customer_bank_accounts/list"},"Bank accounts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/charges/list"},"Charges")," ","(","Incremental",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"amount")," column defaults to the smallest currency unit. (See ",(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/charges/object"},"charge object")," for more details)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/checkout/sessions/list"},"Checkout Sessions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/checkout/sessions/line_items"},"Checkout Sessions Line Items")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/coupons/list"},"Coupons")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/customer_balance_transactions/list"},"Customer Balance Transactions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/customers/list"},"Customers")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/disputes/list"},"Disputes")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/events/list"},"Events")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/invoiceitems/list"},"Invoice Items")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/invoices/invoice_lines"},"Invoice Line Items")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/invoices/list"},"Invoices")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/payment_intents/list"},"PaymentIntents")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/payouts/list"},"Payouts")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/promotion_codes/list"},"Promotion Code")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/plans/list"},"Plans")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/products/list"},"Products")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/refunds/list"},"Refunds")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/subscription_items/list"},"Subscription Items")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/subscriptions/list"},"Subscriptions")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/transfers/list"},"Transfers")," ","(","Incremental",")")),(0,n.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://stripe.com/docs/api"},"Stripe API")," uses the same ",(0,n.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/reference/index.html"},"JSONSchema")," types that Airbyte uses internally ","(",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"date-time"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"integer"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"number"),")",", so no type conversions are performed for the Stripe connector."),(0,n.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The Stripe connector should not run into Stripe API limitations under normal usage. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"Create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.40"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18228"},"18228")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update the ",(0,n.kt)("inlineCode",{parentName:"td"},"Payment Intents")," stream schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.39"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17304"},"17304")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream states.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.38"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16537"},"16537")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix ",(0,n.kt)("inlineCode",{parentName:"td"},"redeem_by")," field type for ",(0,n.kt)("inlineCode",{parentName:"td"},"customers")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.37"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15686"},"15686")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix the bug when the stream couldn't be fetched due to limited permission set, if so - it should be skipped")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.36"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15292"},"15292")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Implement slicing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.35"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14924"},"14924")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove ",(0,n.kt)("inlineCode",{parentName:"td"},"additionalProperties")," field from spec and schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.34"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14357"},"14357")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add external account streams -")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.33"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13449"},"13449")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add semi-incremental support for CheckoutSessions and CheckoutSessionsLineItems streams, fixed big in StripeSubStream, added unittests, updated docs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12500"},"12500")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve input configuration copy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.31"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12230"},"12230")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector to use a ",(0,n.kt)("inlineCode",{parentName:"td"},"spec.yaml"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.30"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11286"},"11286")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Minor corrections to documentation and connector specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.29"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10359"},"10359")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improved performance for streams with substreams: invoice_line_items, subscription_items, bank_accounts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.28"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10165"},"10165")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve 404 handling for ",(0,n.kt)("inlineCode",{parentName:"td"},"CheckoutSessionsLineItems")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.27"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9148"},"9148")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix ",(0,n.kt)("inlineCode",{parentName:"td"},"date"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"arrival\\_date")," fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.26"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8992"},"8992")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix type ",(0,n.kt)("inlineCode",{parentName:"td"},"events.request")," in schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.25"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8250"},"8250")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rearrange setup fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7729"},"7729")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Include tax data in ",(0,n.kt)("inlineCode",{parentName:"td"},"checkout_sessions_line_items")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7729"},"7729")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Correct ",(0,n.kt)("inlineCode",{parentName:"td"},"payment_intents")," schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7345"},"7345")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add 3 new streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6841"},"6841")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix missing ",(0,n.kt)("inlineCode",{parentName:"td"},"start_date")," argument + update json files for SAT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6017"},"6017")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add lookback_window_days parameter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6466"},"6466")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use ",(0,n.kt)("inlineCode",{parentName:"td"},"start_date")," parameter in incremental streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6004"},"6004")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix coupons and subscriptions stream schemas by removing incorrect timestamp formatting")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6004"},"6004")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"PaymentIntents")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4980"},"4980")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove Updated field from schemas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4878"},"4878")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix incorrect percent_off and discounts data filed types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4669"},"4669")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscriptions Stream now returns all kinds of subscriptions ","(","including expired and canceled",")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4528"},"4528")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove regex for acc validation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"3973")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"AIRBYTE_ENTRYPOINT")," for Kubernetes support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-05-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3744"},"3744")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix types in schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-05-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3728"},"3728")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update data types to be number instead of int")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-05-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3367"},"3367")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add acceptance tests for connected accounts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-05-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3368"},"3566")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bump CDK connectors")))))}d.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),s=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=s(a),k=n,u=c["".concat(o,".").concat(k)]||c[k]||d[k]||i;return a?r.createElement(u,p(p({ref:e},m),{},{components:a})):r.createElement(u,p({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,p=new Array(i);p[0]=c;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,p[1]=l;for(var s=2;s<i;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);