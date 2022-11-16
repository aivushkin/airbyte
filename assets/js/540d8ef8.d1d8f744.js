"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[75093],{72255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const o={},s="Standard Tests (Legacy)",i={unversionedId:"connector-development/testing-connectors/legacy-standard-source-tests",id:"connector-development/testing-connectors/legacy-standard-source-tests",title:"Standard Tests (Legacy)",description:"Airbyte's Standard Tests (v1)",source:"@site/../docs/connector-development/testing-connectors/legacy-standard-source-tests.md",sourceDirName:"connector-development/testing-connectors",slug:"/connector-development/testing-connectors/legacy-standard-source-tests",permalink:"/connector-development/testing-connectors/legacy-standard-source-tests",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/testing-connectors/legacy-standard-source-tests.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Airbyte&#39;s Standard Tests (v1)",id:"airbytes-standard-tests-v1",level:2},{value:"Architecture of standard tests",id:"architecture-of-standard-tests",level:3},{value:"Setting up standard tests for your connector",id:"setting-up-standard-tests-for-your-connector",level:3},{value:"Dynamically managing inputs &amp; resources used in standard tests",id:"dynamically-managing-inputs--resources-used-in-standard-tests",level:3},{value:"Running Integration tests",id:"running-integration-tests",level:2},{value:"1. Local iteration",id:"1-local-iteration",level:3},{value:"2. Requesting GitHub PR Integration Test Runs",id:"2-requesting-github-pr-integration-test-runs",level:3},{value:"3. Requesting GitHub PR publishing Docker Images",id:"3-requesting-github-pr-publishing-docker-images",level:3},{value:"4. Automatically Run From <code>master</code>",id:"4-automatically-run-from-master",level:3}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"standard-tests-legacy"},"Standard Tests (Legacy)"),(0,r.kt)("h2",{id:"airbytes-standard-tests-v1"},"Airbyte's Standard Tests (v1)"),(0,r.kt)("p",null,"This document describes the old version Standard Tests, please check the latest version ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/testing-connectors/"},"here"),"\nTo ensure a minimum quality bar, Airbyte runs all connectors against the same set of integration tests ","(","sources & destinations have two different test suites",")",". Those tests ensure that each connector adheres to the ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},"Airbyte Specification")," and responds correctly to Airbyte commands when provided valid ","(","or invalid",")"," inputs."),(0,r.kt)("h3",{id:"architecture-of-standard-tests"},"Architecture of standard tests"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Standard test sequence diagram",src:n(98031).Z,width:"2978",height:"2438"})),(0,r.kt)("p",null,"The Standard Test Suite runs its tests against the connector's Docker image. It takes as input the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The Connector's Docker image name"),", so it can run tests against that image"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A config file")," containing necessary credentials/information to connect to the underlying data source/destination"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A configured catalog")," that will be used when running read/write operations against the connector"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(","Optional",")"," A state file")," for use in incremental sync test scenarios")),(0,r.kt)("p",null,"The test suite then runs its test cases, which include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the input config file, running the ",(0,r.kt)("inlineCode",{parentName:"li"},"check")," operation should succeed. "),(0,r.kt)("li",{parentName:"ul"},"Using a made up/fake config file, running the ",(0,r.kt)("inlineCode",{parentName:"li"},"check")," operation should fail. "),(0,r.kt)("li",{parentName:"ul"},"Running a ",(0,r.kt)("inlineCode",{parentName:"li"},"read")," operation should produce at least one record. "),(0,r.kt)("li",{parentName:"ul"},"Running two consecutive full refresh reads should produce identical records. ")),(0,r.kt)("p",null,"See all the test cases and their description in ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/testing-connectors/standard-source-tests"},"Standard Source Tests"),"."),(0,r.kt)("h3",{id:"setting-up-standard-tests-for-your-connector"},"Setting up standard tests for your connector"),(0,r.kt)("p",null,"Standard tests are typically run from a docker container. The default standard test runner is the File-based Standard Test suite, which gets its name because its inputs are passed as files via Docker volume mounts. This is the simplest way to run the standard test suite: the only requirements are that you place its input files inside your connector's directory, and to pass the paths to those input files as arguments to the Gradle plugin required to invoke it. This is setup by default inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file on all connectors generated from templates."),(0,r.kt)("p",null,"For reference, to configure the file-based standard test suite the only requirement is to add the following block in your connectors ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'apply plugin: \'airbyte-standard-source-test-file\'\nairbyteStandardSourceTestFile { \n  // all these paths must be inside your connector\'s directory\n  configPath = "/path/to/config"\n  specPath = "/path/to/spec"\n  configuredCatalogPath = "/path/to/catalog"\n}\n')),(0,r.kt)("p",null,"These inputs are all described in the ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},"Airbyte Specification")," and will be used as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spec file")," will be compared to the spec file output by the connector when the ",(0,r.kt)("inlineCode",{parentName:"li"},"spec")," command is called. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Config file")," is expected to be a valid config file. It's expected that calling ",(0,r.kt)("inlineCode",{parentName:"li"},"check")," with this config will succeed. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Configured Catalog")," read operations will be performed on all the streams found in this catalog. All sync modes supported for each stream will be tested. If any stream requires a user-defined cursor, this should be defined in this catalog file. ","(","If this sounds like gibberish, make sure to read about incremental sync",")",". ")),(0,r.kt)("h3",{id:"dynamically-managing-inputs--resources-used-in-standard-tests"},"Dynamically managing inputs & resources used in standard tests"),(0,r.kt)("p",null,"Since the inputs to standard tests are often static, the file-based runner is sufficient for most connectors. However, in some cases, you may need to run pre or post hooks to dynamically create or destroy resources for use in standard tests. For example, if we need to spin up a Redshift cluster to use in the test then tear it down afterwards, we need the ability to run code before and after the tests, as well as customize the Redshift cluster URL we pass to the standard tests. If you have need for this use case, please reach out to us via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte"},"Github")," or ",(0,r.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),". We currently support it for Java & Python, and other languages can be made available upon request."),(0,r.kt)("h2",{id:"running-integration-tests"},"Running Integration tests"),(0,r.kt)("p",null,"The GitHub ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," and branch builds will build the core Airbyte infrastructure ","(","scheduler, ui, etc",")"," as well as the images for all connectors. Integration tests ","(","tests that run a connector's image against an external resource",")"," can be run one of three ways."),(0,r.kt)("h3",{id:"1-local-iteration"},"1. Local iteration"),(0,r.kt)("p",null,"First, you can run the image locally. Connectors should have instructions in the connector's README on how to create or pull credentials necessary for the test. Also, during local development, there is usually a ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," entrypoint for Java integrations or ",(0,r.kt)("inlineCode",{parentName:"p"},"main_dev.py")," for Python integrations that let you run your connector without containerization, which is fastest for iteration."),(0,r.kt)("h3",{id:"2-requesting-github-pr-integration-test-runs"},"2. Requesting GitHub PR Integration Test Runs"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This option is not available to PRs from forks, so it is effectively limited to Airbyte employees.")),(0,r.kt)("p",null,"If you don't want to handle secrets, you're making a relatively minor change, or you want to ensure the connector's integration test will run remotely, you should request builds on GitHub. You can request an integration test run by creating a comment with a slash command."),(0,r.kt)("p",null,"Here are some example commands:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/test connector=all")," - Runs integration tests for all connectors in a single GitHub workflow. Some of our integration tests interact with rate-limited resources, so please use this judiciously."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/test connector=source-sendgrid")," - Runs integration tests for a single connector on the latest PR commit."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/test connector=connectors/source-sendgrid")," - Runs integration tests for a single connector on the latest PR commit."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/test connector=source-sendgrid ref=master")," - Runs integration tests for a single connector on a different branch. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/test connector=source-sendgrid ref=d5c53102")," - Runs integration tests for a single connector on a specific commit.")),(0,r.kt)("p",null,"A command dispatcher GitHub workflow will launch on comment submission. This dispatcher will add an \ud83d\udc40 reaction to the comment when it starts processing. If there is an error dispatching your request, an error will be appended to your comment. If it launches the test run successfully, a \ud83d\ude80 reaction will appear on your comment."),(0,r.kt)("p",null,"Once the integration test workflow launches, it will append a link to the workflow at the end of the comment. A success or failure response will also be added upon workflow completion."),(0,r.kt)("p",null,'Integration tests can also be manually requested by clicking "',(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/actions?query=workflow%3Aintegration-test"},"Run workflow"),'" and specifying the connector and GitHub ref.'),(0,r.kt)("h3",{id:"3-requesting-github-pr-publishing-docker-images"},"3. Requesting GitHub PR publishing Docker Images"),(0,r.kt)("p",null,"In order for users to reference the new versions of a connector, it needs to be published and available in the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/airbyte/source-sendgrid/tags?page=1&ordering=last_updated"},"dockerhub")," with the latest tag updated."),(0,r.kt)("p",null,"As seen previously, GitHub workflow can be triggered by comment submission. Publishing docker images to the dockerhub repository can also be submitted likewise:"),(0,r.kt)("p",null,"Note that integration tests can be triggered with a slightly different syntax for arguments. This second set is required to distinguish between ",(0,r.kt)("inlineCode",{parentName:"p"},"connectors")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bases")," folders. Thus, it is also easier to switch between the ",(0,r.kt)("inlineCode",{parentName:"p"},"/test")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/publish")," commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/test connector=connectors/source-sendgrid")," - Runs integration tests for a single connector on the latest PR commit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/publish connector=connectors/source-sendgrid")," - Publish the docker image if it doesn't exist for a single connector on the latest PR commit.")),(0,r.kt)("h3",{id:"4-automatically-run-from-master"},"4. Automatically Run From ",(0,r.kt)("inlineCode",{parentName:"h3"},"master")),(0,r.kt)("p",null,"Commits to ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," attempt to launch integration tests. Two workflows launch for each commit: one is a launcher for integration tests, the other is the core build ","(","the same as the default for PR and branch builds",")","."),(0,r.kt)("p",null,"Since some of our connectors use rate-limited external resources, we don't want to overload from multiple commits to master. If a certain threshold of ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," integration tests are running, the integration test launcher passes but does not launch any tests. This can manually be re-run if necessary. The ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," build also runs every few hours automatically, and will launch the integration tests at that time."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98031:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/standard_tests_sequence1-e02ca959fd4701c2c7b69dae6268e098.png"}}]);