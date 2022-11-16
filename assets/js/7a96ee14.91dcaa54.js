"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[85624],{76978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(83117),a=(n(67294),n(3905));const o={},r="Building a Java Destination",s={unversionedId:"connector-development/tutorials/building-a-java-destination",id:"connector-development/tutorials/building-a-java-destination",title:"Building a Java Destination",description:"Summary",source:"@site/../docs/connector-development/tutorials/building-a-java-destination.md",sourceDirName:"connector-development/tutorials",slug:"/connector-development/tutorials/building-a-java-destination",permalink:"/connector-development/tutorials/building-a-java-destination",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/tutorials/building-a-java-destination.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Building a Python Destination",permalink:"/connector-development/tutorials/building-a-python-destination"},next:{title:"Profile Java Connector Memory Usage",permalink:"/connector-development/tutorials/profile-java-connector-memory"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Checklist",id:"checklist",level:2},{value:"Creating a destination",id:"creating-a-destination",level:3},{value:"Explaining Each Step",id:"explaining-each-step",level:2},{value:"Step 1: Create the destination using the template",id:"step-1-create-the-destination-using-the-template",level:3},{value:"Step 2: Build the newly generated destination",id:"step-2-build-the-newly-generated-destination",level:3},{value:"Iterating on your implementation",id:"iterating-on-your-implementation",level:4},{value:"Test-driven development in Java",id:"test-driven-development-in-java",level:4},{value:"TDD using acceptance tests &amp; integration tests",id:"tdd-using-acceptance-tests--integration-tests",level:4},{value:"Directly running the destination using Docker",id:"directly-running-the-destination-using-docker",level:4},{value:"Handling Exceptions",id:"handling-exceptions",level:4},{value:"Step 3: Implement <code>spec</code>",id:"step-3-implement-spec",level:3},{value:"Step 4: Implement <code>check</code>",id:"step-4-implement-check",level:3},{value:"Step 5: Implement <code>write</code>",id:"step-5-implement-write",level:3},{value:"Step 6: Set up Acceptance Tests",id:"step-6-set-up-acceptance-tests",level:3},{value:"Step 7: Write unit tests and/or integration tests",id:"step-7-write-unit-tests-andor-integration-tests",level:3},{value:"Step 8: Update the docs",id:"step-8-update-the-docs",level:4},{value:"Wrapping up",id:"wrapping-up",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-a-java-destination"},"Building a Java Destination"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This article provides a checklist for how to create a Java destination. Each step in the checklist has a link to a more detailed explanation below."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Docker and Java with the versions listed in the ",(0,a.kt)("a",{parentName:"p",href:"/understanding-airbyte/tech-stack"},"tech stack section"),"."),(0,a.kt)("h2",{id:"checklist"},"Checklist"),(0,a.kt)("h3",{id:"creating-a-destination"},"Creating a destination"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1: Create the destination using the template generator"),(0,a.kt)("li",{parentName:"ul"},"Step 2: Build the newly generated destination "),(0,a.kt)("li",{parentName:"ul"},"Step 3: Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"spec")," to define the configuration required to run the connector"),(0,a.kt)("li",{parentName:"ul"},"Step 4: Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"check")," to provide a way to validate configurations provided to the connector"),(0,a.kt)("li",{parentName:"ul"},"Step 5: Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"write")," to write data to the destination"),(0,a.kt)("li",{parentName:"ul"},"Step 6: Set up Acceptance Tests"),(0,a.kt)("li",{parentName:"ul"},"Step 7: Write unit tests or integration tests"),(0,a.kt)("li",{parentName:"ul"},"Step 8: Update the docs ","(","in ",(0,a.kt)("inlineCode",{parentName:"li"},"docs/integrations/destinations/<destination-name>.md"),")")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All ",(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew")," commands must be run from the root of the airbyte project.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you need help with any step of the process, feel free to submit a PR with your progress and any questions you have, or ask us on ",(0,a.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"slack"),".")),(0,a.kt)("h2",{id:"explaining-each-step"},"Explaining Each Step"),(0,a.kt)("h3",{id:"step-1-create-the-destination-using-the-template"},"Step 1: Create the destination using the template"),(0,a.kt)("p",null,"Airbyte provides a code generator which bootstraps the scaffolding for our connector."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd airbyte-integrations/connector-templates/generator # assumes you are starting from the root of the Airbyte project.\n$ ./generate.sh\n")),(0,a.kt)("p",null,"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Java Destination")," template and then input the name of your connector. We'll refer to the destination as ",(0,a.kt)("inlineCode",{parentName:"p"},"<name>-destination")," in this tutorial, but you should replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<name>")," with the actual name you used for your connector e.g: ",(0,a.kt)("inlineCode",{parentName:"p"},"BigQueryDestination")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"bigquery-destination"),"."),(0,a.kt)("h3",{id:"step-2-build-the-newly-generated-destination"},"Step 2: Build the newly generated destination"),(0,a.kt)("p",null,"You can build the destination by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Must be run from the Airbyte project root\n./gradlew :airbyte-integrations:connectors:destination-<name>:build\n")),(0,a.kt)("p",null,"This compiles the Java code for your destination and builds a Docker image with the connector. At this point, we haven't implemented anything of value yet, but once we do, you'll use this command to compile your code and Docker image."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Airbyte uses Gradle to manage Java dependencies. To add dependencies for your connector, manage them in the ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")," file inside your connector's directory.")),(0,a.kt)("h4",{id:"iterating-on-your-implementation"},"Iterating on your implementation"),(0,a.kt)("p",null,"We recommend the following ways of iterating on your connector as you're making changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test-driven development ","(","TDD",")"," in Java "),(0,a.kt)("li",{parentName:"ul"},"Test-driven development ","(","TDD",")"," using Airbyte's Acceptance Tests"),(0,a.kt)("li",{parentName:"ul"},"Directly running the docker image ")),(0,a.kt)("h4",{id:"test-driven-development-in-java"},"Test-driven development in Java"),(0,a.kt)("p",null,"This should feel like a standard flow for a Java developer: you make some code changes then run java tests against them. You can do this directly in your IDE, but you can also run all unit tests via Gradle by running the command to build the connector:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"./gradlew :airbyte-integrations:connectors:destination-<name>:build\n")),(0,a.kt)("p",null,"This will build the code and run any unit tests. This approach is great when you are testing local behaviors and writing unit tests."),(0,a.kt)("h4",{id:"tdd-using-acceptance-tests--integration-tests"},"TDD using acceptance tests & integration tests"),(0,a.kt)("p",null,"Airbyte provides a standard test suite ","(",'dubbed "Acceptance Tests"',")",' that runs against every destination connector. They are "free" baseline tests to ensure the basic functionality of the destination. When developing a connector, you can simply run the tests between each change and use the feedback to guide your development.'),(0,a.kt)("p",null,"If you want to try out this approach, check out Step 6 which describes what you need to do to set up the acceptance Tests for your destination."),(0,a.kt)("p",null,"The nice thing about this approach is that you are running your destination exactly as Airbyte will run it in the CI. The downside is that the tests do not run very quickly. As such, we recommend this iteration approach only once you've implemented most of your connector and are in the finishing stages of implementation. Note that Acceptance Tests are required for every connector supported by Airbyte, so you should make sure to run them a couple of times while iterating to make sure your connector is compatible with Airbyte."),(0,a.kt)("h4",{id:"directly-running-the-destination-using-docker"},"Directly running the destination using Docker"),(0,a.kt)("p",null,"If you want to run your destination exactly as it will be run by Airbyte ","(","i.e. within a docker container",")",", you can use the following commands from the connector module directory ","(",(0,a.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/destination-<name>"),")",":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'# First build the container\n./gradlew :airbyte-integrations:connectors:destination-<name>:build\n\n# Then use the following commands to run it\n# Runs the "spec" command, used to find out what configurations are needed to run a connector \ndocker run --rm airbyte/destination-<name>:dev spec\n\n# Runs the "check" command, used to validate if the input configurations are valid\ndocker run --rm -v $(pwd)/secrets:/secrets airbyte/destination-<name>:dev check --config /secrets/config.json\n\n# Runs the "write" command which reads records from stdin and writes them to the underlying destination\ndocker run --rm -v $(pwd)/secrets:/secrets -v $(pwd)/sample_files:/sample_files airbyte/destination-<name>:dev write --config /secrets/config.json --catalog /sample_files/configured_catalog.json\n')),(0,a.kt)("p",null,"Note: Each time you make a change to your implementation you need to re-build the connector image via ",(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew :airbyte-integrations:connectors:destination-<name>:build"),"."),(0,a.kt)("p",null,"The nice thing about this approach is that you are running your destination exactly as it will be run by Airbyte. The tradeoff is that iteration is slightly slower, because you need to re-build the connector between each change."),(0,a.kt)("h4",{id:"handling-exceptions"},"Handling Exceptions"),(0,a.kt)("p",null,"In order to best propagate user-friendly error messages and log error information to the platform, the ","[Airbyte Protocol]","(/understanding-airbyte/airbyte-protocol#The Airbyte Protocol) implements AirbyteTraceMessage."),(0,a.kt)("p",null,"We recommend using AirbyteTraceMessages for known errors, as in these cases you can likely offer the user a helpful message as to what went wrong and suggest how they can resolve it."),(0,a.kt)("p",null,"Airbyte provides a static utility class, ",(0,a.kt)("inlineCode",{parentName:"p"},"io.airbyte.integrations.base.AirbyteTraceMessageUtility"),", to give you a clear and straight-forward way to emit these AirbyteTraceMessages. Example usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'try {\n  // some connector code responsible for doing X\n} \ncatch (ExceptionIndicatingIncorrectCredentials credErr) {\n  AirbyteTraceMessageUtility.emitConfigErrorTrace(\n    credErr, "Connector failed due to incorrect credentials while doing X. Please check your connection is using valid credentials.")\n  throw credErr\n} \ncatch (ExceptionIndicatingKnownErrorY knownErr) {\n  AirbyteTraceMessageUtility.emitSystemErrorTrace(\n    knownErr, "Connector failed because of reason Y while doing X. Please check/do/make ... to resolve this.")\n  throw knownErr\n} \ncatch (Exception e) {\n  AirbyteTraceMessageUtility.emitSystemErrorTrace(\n    e, "Connector failed while doing X. Possible reasons for this could be ...")\n  throw e \n}\n')),(0,a.kt)("p",null,"Note the two different error trace methods."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Where possible ",(0,a.kt)("inlineCode",{parentName:"li"},"emitConfigErrorTrace")," should be used when we are certain the issue arises from a problem with the user's input configuration, e.g. invalid credentials."),(0,a.kt)("li",{parentName:"ul"},"For everything else or if unsure, use ",(0,a.kt)("inlineCode",{parentName:"li"},"emitSystemErrorTrace"),".")),(0,a.kt)("h3",{id:"step-3-implement-spec"},"Step 3: Implement ",(0,a.kt)("inlineCode",{parentName:"h3"},"spec")),(0,a.kt)("p",null,"Each destination contains a specification written in JsonSchema that describes its inputs. Defining the specification is a good place to start when developing your destination. Check out the documentation ",(0,a.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"here")," to learn the syntax. Here's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-postgres/src/main/resources/spec.json"},"an example")," of what the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.json")," looks like for the postgres destination."),(0,a.kt)("p",null,"Your generated template should have the spec file in ",(0,a.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/destination-<name>/src/main/resources/spec.json"),". The generated connector will take care of reading this file and converting it to the correct output. Edit it and you should be done with this step."),(0,a.kt)("p",null,"For more details on what the spec is, you can read about the Airbyte Protocol ",(0,a.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},"here"),"."),(0,a.kt)("p",null,"See the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," operation in action:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# First build the connector \n./gradlew :airbyte-integrations:connectors:destination-<name>:build\n\n# Run the spec operation\ndocker run --rm airbyte/destination-<name>:dev spec\n")),(0,a.kt)("h3",{id:"step-4-implement-check"},"Step 4: Implement ",(0,a.kt)("inlineCode",{parentName:"h3"},"check")),(0,a.kt)("p",null,"The check operation accepts a JSON object conforming to the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.json"),". In other words if the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.json")," said that the destination requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," the config object might be ",(0,a.kt)("inlineCode",{parentName:"p"},'{ "username": "airbyte", "password": "password123" }'),". It returns a json object that reports, given the credentials in the config, whether we were able to connect to the destination."),(0,a.kt)("p",null,"While developing, we recommend storing any credentials in ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets/config.json"),". Any ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets")," directory in the Airbyte repo is gitignored by default."),(0,a.kt)("p",null,"Implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"check")," method in the generated file ",(0,a.kt)("inlineCode",{parentName:"p"},"<Name>Destination.java"),". Here's an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-bigquery/src/main/java/io/airbyte/integrations/destination/bigquery/BigQueryDestination.java#L94"},"example implementation")," from the BigQuery destination."),(0,a.kt)("p",null,"Verify that the method is working by placing your config in ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets/config.json")," then running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# First build the connector\n./gradlew :airbyte-integrations:connectors:destination-<name>:build\n\n# Run the check method\ndocker run -v $(pwd)/secrets:/secrets --rm airbyte/destination-<name>:dev check --config /secrets/config.json\n")),(0,a.kt)("h3",{id:"step-5-implement-write"},"Step 5: Implement ",(0,a.kt)("inlineCode",{parentName:"h3"},"write")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"write"),' operation is the main workhorse of a destination connector: it reads input data from the source and writes it to the underlying destination. It takes as input the config file used to run the connector as well as the configured catalog: the file used to describe the schema of the incoming data and how it should be written to the destination. Its "output" is two things:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Data written to the underlying destination"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"AirbyteMessage"),"s of type ",(0,a.kt)("inlineCode",{parentName:"li"},"AirbyteStateMessage"),", written to stdout to indicate which records have been written so far during a sync. It's important to output these messages when possible in order to avoid re-extracting messages from the source. See the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.airbyte.io/understanding-airbyte/airbyte-protocol#write"},"write operation protocol reference")," for more information.")),(0,a.kt)("p",null,"To implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"write")," Airbyte operation, implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"getConsumer")," method in your generated ",(0,a.kt)("inlineCode",{parentName:"p"},"<Name>Destination.java")," file. Here are some example implementations from different destination conectors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-bigquery/src/main/java/io/airbyte/integrations/destination/bigquery/BigQueryDestination.java#L188"},"BigQuery")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-pubsub/src/main/java/io/airbyte/integrations/destination/pubsub/PubsubDestination.java#L98"},"Google Pubsub")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-csv/src/main/java/io/airbyte/integrations/destination/csv/CsvDestination.java#L90"},"Local CSV")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-postgres/src/main/java/io/airbyte/integrations/destination/postgres/PostgresDestination.java"},"Postgres"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Postgres destination leverages the ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractJdbcDestination")," superclass which makes it extremely easy to create a destination for a database or data warehouse if it has a compatible JDBC driver. If the destination you are implementing has a JDBC driver, be sure to check out ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractJdbcDestination"),".")),(0,a.kt)("p",null,"For a brief overview on the Airbyte catalog check out ",(0,a.kt)("a",{parentName:"p",href:"/understanding-airbyte/beginners-guide-to-catalog"},"the Beginner's Guide to the Airbyte Catalog"),"."),(0,a.kt)("h3",{id:"step-6-set-up-acceptance-tests"},"Step 6: Set up Acceptance Tests"),(0,a.kt)("p",null,"The Acceptance Tests are a set of tests that run against all destinations. These tests are run in the Airbyte CI to prevent regressions and verify a baseline of functionality. The test cases are contained and documented in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/bases/standard-destination-test/src/main/java/io/airbyte/integrations/standardtest/destination/DestinationAcceptanceTest.java"},"following file"),"."),(0,a.kt)("p",null,"To setup acceptance Tests for your connector, follow the ",(0,a.kt)("inlineCode",{parentName:"p"},"TODO"),"s in the generated file ",(0,a.kt)("inlineCode",{parentName:"p"},"<name>DestinationAcceptanceTest.java"),". Once setup, you can run the tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew :airbyte-integrations:connectors:destination-<name>:integrationTest"),". Make sure to run this command from the Airbyte repository root."),(0,a.kt)("h3",{id:"step-7-write-unit-tests-andor-integration-tests"},"Step 7: Write unit tests and/or integration tests"),(0,a.kt)("p",null,"The Acceptance Tests are meant to cover the basic functionality of a destination. Think of it as the bare minimum required for us to add a destination to Airbyte. You should probably add some unit testing or custom integration testing in case you need to test additional functionality of your destination."),(0,a.kt)("h4",{id:"step-8-update-the-docs"},"Step 8: Update the docs"),(0,a.kt)("p",null,"Each connector has its own documentation page. By convention, that page should have the following path: in ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/integrations/destinations/<destination-name>.md"),". For the documentation to get packaged with the docs, make sure to add a link to it in ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/SUMMARY.md"),". You can pattern match doing that from existing connectors."),(0,a.kt)("h2",{id:"wrapping-up"},"Wrapping up"),(0,a.kt)("p",null,"Well done on making it this far! If you'd like your connector to ship with Airbyte by default, create a PR against the Airbyte repo and we'll work with you to get it across the finish line."))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);