(this["webpackJsonpremix-mythx-plugin"]=this["webpackJsonpremix-mythx-plugin"]||[]).push([[0],{107:function(e){e.exports=JSON.parse('{"name":"remix-mythx-plugin","version":"0.3.4-alpha.0","private":true,"homepage":".","dependencies":{"@fortawesome/fontawesome-svg-core":"1.2.19","@fortawesome/free-solid-svg-icons":"5.9.0","@fortawesome/react-fontawesome":"0.1.4","@remixproject/plugin":"0.1.18","bootstrap":"4.3.1","keccakjs":"0.2.3","lodash":"4.17.19","moment":"2.24.0","mythxjs":"1.3.12","react":"16.8.6","react-bs-notifier":"5.0.0","react-copy-to-clipboard":"5.0.1","react-dom":"16.8.6","react-scripts":"3.4.1","reactstrap":"8.0.0","remix-lib":"0.4.30"},"devDependencies":{"eslint":"6.6.0","eslint-config-standard":"14.1.0","eslint-plugin-import":"2.19.1","eslint-plugin-node":"10.0.0","eslint-plugin-promise":"4.2.1","eslint-plugin-standard":"4.0.1","husky":"3.1.0","release-it":"12.3.6"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","lint":"eslint --max-warnings 0 **/*.js","release":"release-it --no-npm.publish --github.release"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"husky":{"hooks":{"pre-commit":"npm run lint"}}}')},109:function(e,t){var a=new RegExp(/__\$\w+\$__/,"g");e.exports={removeRelativePathFromUrl:function(e){return e.replace(/^.+\.\//,"").replace("./","")},replaceLinkedLibs:function(e){return e.replace(a,"0000000000000000000000000000000000000000")}}},183:function(e,t,a){"use strict";(function(e){var n=a(31),r=a(39),s=a.n(r),c=a(27),l=a(9),i=a(19),o=a(78),u=a(184),m=a(185),d=a(16),p=a(207),g=a(206),f=a(0),b=a.n(f),v=a(186),h=a(59),E=a(187),y=a.n(E),O=a(208),j=(a(345),a(205)),w=a(194),k=a(76),x=a(195),N=a(198),C=a(202),S=a(109),A=a.n(S),T="remix-mythx-plugin",I="0x0000000000000000000000000000000000000000",z="trial",L={},F=function(t){Object(p.a)(r,t);var a=Object(g.a)(r);function r(e){var t;Object(u.a)(this,r),(t=a.call(this,e)).analyze=Object(o.a)(s.a.mark((function e(){var a,n,r,o,u,m,d,p,g,f,b,v,h,E,y=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=y.length>0&&void 0!==y[0]?y[0]:"quick",n=t.state,r=n.compilations,o=n.selected,u=n.analyses,m=n.reports,d=o.split(" - "),p=Object(i.a)(d,2),g=p[1],L.emit("statusChanged",{key:"loading",type:"info",title:"Analyzing..."}),e.prev=4,f=t.createClient(),e.next=8,t.login(f);case 8:return b=e.sent,t.setState({analyses:Object(l.a)(Object(l.a)({},u),{},Object(c.a)({},o,null)),reports:Object(l.a)(Object(l.a)({},m),{},Object(c.a)({},o,{list:[{messages:[]}]})),isAnalyzing:!0,jwt:b}),e.next=12,L.call("editor","discardHighlight");case 12:return v=t.getRequestData(a),e.next=15,f.analyze(v);case 15:if(h=e.sent,t.logAnalysis(h.uuid,a),"quick"!==a){e.next=25;break}return e.next=20,f.getDetectedIssues(h.uuid);case 20:E=e.sent,t.setState({analyses:Object(l.a)(Object(l.a)({},u),{},Object(c.a)({},o,E)),isAnalyzing:!1,pluginActiveTab:"report"}),t.handleResult(r[g].source,E),e.next=26;break;case 25:t.setState({isAnalyzing:!1,pluginActiveTab:"log"});case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(4),L.emit("statusChanged",{key:"failed",type:"error",title:"Failed"}),t.setState({analyses:Object(l.a)(Object(l.a)({},u),{},Object(c.a)({},o,null)),reports:Object(l.a)(Object(l.a)({},m),{},Object(c.a)({},o,{list:[{messages:[{error:e.t0.message||e.t0}]}]})),isAnalyzing:!1,pluginActiveTab:"report"});case 32:case"end":return e.stop()}}),e,null,[[4,28]])}))),t.highlightIssue=function(){var e=Object(o.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.line<0)){e.next=2;break}return e.abrupt("return");case 2:return n={start:{line:a.line,column:a.column},end:{line:a.endLine,column:a.endCol}},r=1===a.severity?"#ffd300":"#ff0000",e.next=6,L.call("editor","highlight",n,t.filePath,r);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var n=localStorage.getItem(T)||"{}",m=JSON.parse(n);return t.state={pluginOpen:!1,settingsOpen:!1,address:m.address||I,pwd:m.pwd||z,token:m.token,env:m.env||"https://api.mythx.io/v1/",jwt:null,compilations:{},selected:"",contractList:[],mapping:{},isAnalyzing:!1,analyses:{},reports:{},alerts:[],log:m.log||[],pluginActiveTab:"log",visibleTrialWarning:!0},(L=Object(v.createIframeClient)()).onload((function(){t.setState({pluginOpen:!0}),L.call("solidity","getCompilationResult").then((function(e){if(e){var a=e.data,n=e.source;n&&t.processCompilation(n.target,n,a)}})),L.on("solidity","compilationFinished",(function(e,a,n,r){t.processCompilation(e,a,r)}))})),t.processCompilation=t.processCompilation.bind(Object(d.a)(t)),t.login=t.login.bind(Object(d.a)(t)),t.saveSettings=t.saveSettings.bind(Object(d.a)(t)),t.logAnalysis=t.logAnalysis.bind(Object(d.a)(t)),t.analyze=t.analyze.bind(Object(d.a)(t)),t.getRequestData=t.getRequestData.bind(Object(d.a)(t)),t.handleResult=t.handleResult.bind(Object(d.a)(t)),t.highlightIssue=t.highlightIssue.bind(Object(d.a)(t)),t.clear=t.clear.bind(Object(d.a)(t)),t.selectContract=t.selectContract.bind(Object(d.a)(t)),t.addAlert=t.addAlert.bind(Object(d.a)(t)),t.dismissAlert=t.dismissAlert.bind(Object(d.a)(t)),t.openSettings=t.openSettings.bind(Object(d.a)(t)),t.closeSettings=t.closeSettings.bind(Object(d.a)(t)),t}return Object(m.a)(r,[{key:"processCompilation",value:function(t,a,r){var s=this.state,i=s.compilations,o=s.contractList,u=s.mapping,m=r.contracts,d=(void 0===m?[]:m)[t],p={};Object.keys(d).forEach((function(a){var n=d[a].evm.deployedBytecode.object,r=new y.a(256);r.update(e.from(n,"hex")),p[t]=t,p["0x".concat(r.digest("hex"))]=t}));var g=Object.keys(r.contracts[t]),f=new Set([].concat(Object(n.a)(o),Object(n.a)(this.getContracts(r,t))));this.setState({compilations:Object(l.a)(Object(l.a)({},i),{},Object(c.a)({},t,{source:a,data:r})),selected:"".concat(g[0]).concat(" - ").concat(t),contractList:Array.from(f),mapping:Object(l.a)(Object(l.a)({},u),p)}),L.emit("statusChanged",{key:"none"})}},{key:"getContracts",value:function(e,t){var a=e.contracts,n=(void 0===a?[]:a)[t]||{};return Object.keys(n).map((function(e){return"".concat(e).concat(" - ").concat(t)}))}},{key:"saveSettings",value:function(e,t,a,n){e=e||I,t=t||z,n=n||"https://api.mythx.io/v1/",this.setState({address:e,pwd:t,token:a,env:n,jwt:null});var r=localStorage.getItem(T)||"{}",s=JSON.parse(r),c=Object(l.a)(Object(l.a)({},s),{address:e,pwd:t,token:a,env:n});localStorage.setItem(T,JSON.stringify(c)),this.addAlert("success","Saved")}},{key:"logAnalysis",value:function(e,t){var a=localStorage.getItem(T)||"{}",r=JSON.parse(a),s=Object(l.a)(Object(l.a)({},r),{log:[{timestamp:(new Date).getTime(),uuid:e,mode:t}].concat(Object(n.a)(r.log||[]))});localStorage.setItem(T,JSON.stringify(s)),this.setState({log:s.log})}},{key:"createClient",value:function(){var e=this.state,t=e.address,a=e.pwd,n=e.token,r=e.jwt,s=e.env;try{return new h.Client(t,a,"remythx",s,n||r)}catch(c){return console.error(c),new h.Client(t,a,"remythx",s)}}},{key:"login",value:function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.Client.jwtTokens.access){e.next=3;break}return e.next=3,t.login();case 3:return e.abrupt("return",h.Client.jwtTokens.access);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRequestData",value:function(e){var t=this.state,a=t.compilations,n=t.selected.split(" - "),r=Object(i.a)(n,2),s=r[0],c=r[1],l=a[c],o=l.data,u=void 0===o?{}:o,m=l.source,d=void 0===m?{}:m,p=u.contracts,g=void 0===p?[]:p,f=u.sources,b=void 0===f?{}:f,v=g[c],h=v[s].evm.bytecode,E=v[s].evm.deployedBytecode,y={contractName:s,bytecode:A.a.replaceLinkedLibs(h.object),sourceMap:h.sourceMap,deployedBytecode:A.a.replaceLinkedLibs(E.object),deployedSourceMap:E.sourceMap,analysisMode:e,mainSource:c,sourceList:Object.keys(d.sources),sources:{}};for(var O in d.sources)if(Object.prototype.hasOwnProperty.call(d.sources,O)){var j=b[O].ast,w=d.sources[O].content;y.sources[O]={ast:j,source:w}}return y}},{key:"handleResult",value:function(e,t){var a=this.state,n=a.selected,r=a.reports,s=a.mapping,i=Object(C.a)(e,s,t);0===i.length?(L.emit("statusChanged",{key:"succeed",type:"success",title:"No errors/warnings found"}),this.setState({reports:Object(l.a)(Object(l.a)({},r),{},Object(c.a)({},n,{message:"\u2714 No errors/warnings found in ".concat(n)}))})):(L.emit("statusChanged",{key:"failed",type:"warning",title:"Errors/warnings found"}),this.setState({reports:Object(l.a)(Object(l.a)({},r),{},Object(c.a)({},n,{list:i}))}))}},{key:"clear",value:function(){L.emit("statusChanged",{key:"none"}),this.setState({compilations:{},selected:"",contractList:[],mapping:{},analyses:{},reports:{}})}},{key:"selectContract",value:function(e){this.state.selected!==e&&(L.emit("statusChanged",{key:"none"}),this.setState({selected:e}))}},{key:"addAlert",value:function(e,t){this.setState({alerts:[].concat(Object(n.a)(this.state.alerts),[{id:(new Date).getTime(),type:e,message:t}])})}},{key:"dismissAlert",value:function(e){var t=this.state.alerts,a=t.indexOf(e);a>=0&&this.setState({alerts:[].concat(Object(n.a)(t.slice(0,a)),Object(n.a)(t.slice(a+1)))})}},{key:"openSettings",value:function(){this.setState({settingsOpen:!0})}},{key:"closeSettings",value:function(){this.setState({settingsOpen:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.pluginOpen,n=t.settingsOpen,r=t.address,s=t.token,c=t.visibleTrialWarning,l=t.alerts,i=a?b.a.createElement("div",{style:{position:"relative",minHeight:"100vh"}},b.a.createElement("main",null,n?b.a.createElement(w.a,Object.assign({},this.state,{save:this.saveSettings,close:this.closeSettings})):b.a.createElement(b.a.Fragment,null,r===I&&!s&&b.a.createElement("div",{className:"container"},b.a.createElement(O.a,{color:"warning",isOpen:c,toggle:function(){e.setState({visibleTrialWarning:!1})},style:{padding:".5rem 2.9rem .5rem .5rem"}},"You are now using trial credentials. Update in ",b.a.createElement("button",{className:"btn btn-link p-0",style:{display:"contents"},onClick:this.openSettings},"Settings"))),b.a.createElement(j.a,Object.assign({},this.state,{selectContract:this.selectContract,analyze:this.analyze,addAlert:this.addAlert,highlightIssue:this.highlightIssue,clear:this.clear,changeTab:function(t){e.setState({pluginActiveTab:t})}})))),b.a.createElement(k.a,{isPlugin:!0,openSettings:this.openSettings}),b.a.createElement(x.a,{alerts:l,onDismiss:this.dismissAlert})):b.a.createElement(N.a,null);return b.a.createElement(b.a.Fragment,null,i)}}]),r}(b.a.Component);t.a=F}).call(this,a(11).Buffer)},194:function(e,t,a){"use strict";var n=a(9),r=a(19),s=a(0),c=a.n(s),l=a(208),i=a(444),o=a(209),u=a(210),m=a(445),d=a(211),p=a(7),g=a.n(p),f=a(22),b=a(18);t.a=function(e){var t=e.address,a=e.pwd,p=e.env,v=e.token,h=e.save,E=e.close,y=Object(s.useState)({activeTab:"2",address:t,pwd:a,token:v,env:p}),O=Object(r.a)(y,2),j=O[0],w=O[1],k=function(e){j.activeTab!==e&&w(Object(n.a)(Object(n.a)({},j),{},{activeTab:e}))};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-right"},c.a.createElement(f.a,{icon:b.h,size:"lg",className:"float-right ml-2",style:{cursor:"pointer"},onClick:E}))),c.a.createElement("div",{className:"row pb-3"},c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement("div",{className:"text-left"},c.a.createElement("h5",null,"Access"),"0x0000000000000000000000000000000000000000"===j.address&&!j.token&&c.a.createElement(l.a,{color:"warning",style:{fontSize:13,padding:".5rem"}},"You need to sign in to use MythX APIs. Trial user will be soon deprecated. Please register an account on ",c.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer",className:"text-nowrap"},"www.mythx.io"))),c.a.createElement(i.a,{tabs:!0,style:{marginTop:".5rem"}},c.a.createElement(o.a,null,c.a.createElement(u.a,{className:g()({active:"2"===j.activeTab}),style:{padding:".5rem 1rem",cursor:"pointer"},onClick:function(){k("2")}},"Access Token")),c.a.createElement(o.a,null,c.a.createElement(u.a,{className:g()({active:"1"===j.activeTab}),style:{padding:".5rem 1rem",cursor:"pointer"},onClick:function(){k("1")}},"Credentials"))),c.a.createElement(m.a,{activeTab:j.activeTab,style:{padding:".5rem .5rem 0 .5rem",border:"1px solid #ecf0f1",borderTop:"none"}},c.a.createElement(d.a,{tabId:"2"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"token"},"JWT"),c.a.createElement("input",{type:"text",className:"form-control",id:"token",placeholder:"Token",onChange:function(e){return w(Object(n.a)(Object(n.a)({},j),{},{token:e.target.value}))},defaultValue:j.token}))),c.a.createElement(d.a,{tabId:"1"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"address"},"Address/Email"),c.a.createElement("input",{type:"text",className:"form-control",id:"address",placeholder:"Address",onChange:function(e){return w(Object(n.a)(Object(n.a)({},j),{},{address:e.target.value}))},defaultValue:j.address})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"pwd"},"Password"),c.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Password",onChange:function(e){return w(Object(n.a)(Object(n.a)({},j),{},{pwd:e.target.value}))},defaultValue:j.pwd})))))),c.a.createElement("div",{className:"row pb-3"},c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement("div",{className:"text-left"},c.a.createElement("h5",null,"Environment")),c.a.createElement("div",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"address"},"Endpoint"),c.a.createElement("input",{type:"text",className:"form-control",id:"endpoint",placeholder:"Endpoint",onChange:function(e){return w(Object(n.a)(Object(n.a)({},j),{},{env:e.target.value}))},defaultValue:j.env})),c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){var e=j.address,t=j.pwd,a=j.token,n=j.env;h(e,t,a,n)}},"Save")))))}},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(204);t.a=function(e){var t=e.alerts,a=e.onDismiss;return r.a.createElement(s.a,{position:"bottom-right",alerts:t,timeout:3e3,onDismiss:a,showIcon:!1})}},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(76),c=a(199),l=a.n(c),i=a(200),o=a.n(i),u=a(201),m=a.n(u);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"h-100",style:{background:"#012A3E"}},r.a.createElement("div",{className:"d-flex align-items-end flex-column",style:{height:"50%"}},r.a.createElement("div",{className:"mt-auto pb-5 w-100"},r.a.createElement("h1",{className:"display-1 text-white",style:{textAlign:"center"}},"re:MythX"))),r.a.createElement("div",{className:"d-flex justify-content-center pt-4"},r.a.createElement("a",{href:"https://remix.ethereum.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:l.a,alt:"remix",style:{height:120,width:120,verticalAlign:"top"}})),r.a.createElement("img",{src:m.a,alt:"plus",className:"pl-5 pr-5",style:{height:100,width:140}}),r.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:o.a,alt:"mythx",style:{height:130,width:180,verticalAlign:"top"}})))),r.a.createElement(s.a,null))}},199:function(e,t,a){e.exports=a.p+"static/media/remix.0cc3e824.svg"},200:function(e,t,a){e.exports=a.p+"static/media/mythx.5fc6cc7c.png"},201:function(e,t,a){e.exports=a.p+"static/media/plus.bd770134.svg"},202:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(31),r=a(19),s=a(203),c=a.n(s),l=a(47),i={High:2,Medium:1},o=new c.a,u=function(e,t,a){var n;n=e.swcID?"https://swcregistry.io/docs/"+e.swcID:"N/A";var s={fatal:!1,ruleId:e.swcID,ruleLink:n,message:"".concat(e.description.head),description:"".concat(e.description.tail),severity:i[e.severity]||1,line:-1,column:0,endLine:-1,endCol:0,sourceType:"",origin:e};if(t){var c,l,u=o.getLinebreakPositions(t);if(a.length){var m=function(e,t){var a=e.split(":"),n={length:parseInt(a[1],10),start:parseInt(a[0],10)},r=o.convertOffsetToLineColumn(n,t);return[r.start,r.end]}(a[0].sourceMap.split(";")[0],u),d=Object(r.a)(m,2);c=d[0],l=d[1],s.sourceType=a[0].sourceType}c&&(s.line=c.line,s.column=c.column,s.endLine=l.line,s.endCol=l.column)}return s},m=function(e,t,a){var r={};a.forEach((function(a){(function(e,t,a){var n=e.issues,r=a.sources,s=a.functionHashes,c={},i=function(e){return"solidity-file"===e.sourceType&&"text"===e.sourceFormat};for(var o in n.map((function(a){var n=a.locations.filter(i),l=n.length?n[0]:void 0,o="",m="<unknown>";if(l){var d=(l.sourceList||e.sourceList||[])[function(e){if(e.length){var t=/(\d+):(\d+):(\d+)/g.exec(e[0].sourceMap);return t?t[3]:0}return 0}(l)];d&&(m=t[d]||d,r[m]&&(o=r[m].content))}c[m]||(c[m]={errorCount:0,warningCount:0,fixableErrorCount:0,fixableWarningCount:0,filePath:m,functionHashes:s,sourceCode:o,messages:[]});var p=u(a,(r[m]||{}).content,n);c[m].messages.push(p)})),c)Object.prototype.hasOwnProperty.call(c,o)&&(c[o].warningCount=c[o].messages.reduce((function(e,t){var a=t.fatal,n=t.severity;return Object(l.b)(a,n)?e:e+1}),0),c[o].errorCount=c[o].messages.reduce((function(e,t){var a=t.fatal,n=t.severity;return Object(l.b)(a,n)?e+1:e}),0));return Object.values(c)})(a,t,e).forEach((function(e){var t=r[e.filePath];r[e.filePath]=t?{errorCount:t.errorCount+e.errorCount,warningCount:t.warningCount+e.warningCount,fixableErrorCount:t.fixableErrorCount+e.fixableErrorCount,fixableWarningCount:t.fixableWarningCount+e.fixableWarningCount,filePath:t.filePath,messages:[].concat(Object(n.a)(t.messages),Object(n.a)(e.messages))}:e}))}));var s=Object.values(r).reduce((function(e,t){return e.concat(t)}),[]);return Object(l.a)(s)}},205:function(e,t,a){"use strict";var n=a(19),r=a(0),s=a.n(r),c=a(22),l=a(18),i=a(208),o=a(447),u=a(452),m=a(451),d=a(448),p=a(449),g=a(444),f=a(209),b=a(210),v=a(445),h=a(211),E=a(188),y=a(446),O={"0xaffeaffeaffeaffeaffeaffeaffeaffeaffeaffe":"Creator","0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef":"Attacker"};var j=function(e){var t=e.issue.extra,a=(void 0===t?{}:t).testCases,n=void 0===a?[]:a;return n.length?s.a.createElement("div",{className:"pt-1",style:{fontSize:14}},s.a.createElement("h6",{className:"bg-light p-1"},"Steps to reproduce"),n.map((function(e,t){return s.a.createElement("div",{key:t,className:""},e.steps.map((function(e,t){var a=O[e.origin];return s.a.createElement("div",{key:t,className:"pt-2"},s.a.createElement("h6",{className:"font-weight-bold"},"Transaction ".concat(t+1," ").concat(0===t?"(contract creation)":"")),s.a.createElement("div",{className:"pl-3 text-truncate"},s.a.createElement("div",null,s.a.createElement("b",null,"Sender:")," ",e.origin," ",a?"(".concat(a,")"):""),s.a.createElement("div",null,s.a.createElement("b",null,"Value:")," ",e.value),s.a.createElement("div",null,s.a.createElement("b",null,"Function name:")," ",e.name||"N/A"),s.a.createElement("div",null,s.a.createElement("b",null,"Calldata:")," ",e.input),s.a.createElement("div",null,s.a.createElement("b",null,"Decoded calldata:")," ",e.decodedInput||"N/A")))})),s.a.createElement("hr",null))}))):null},w=a(47);var k=function(e){var t=e.issue,a=e.highlightIssue,i=Object(r.useState)(!1),o=Object(n.a)(i,2),u=o[0],m=o[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,t.error?s.a.createElement("div",{className:"alert alert-danger p-1",style:{padding:".5rem"}},t.error):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"d-flex flex-row"},s.a.createElement("button",{onClick:function(){return m(!u)},className:"btn btn-link align-self-center pl-0 pr-2"},s.a.createElement(c.a,{icon:u?l.a:l.b})),s.a.createElement("button",{type:"button",className:"btn ".concat(Object(w.b)(t.fatal,t.severity)?"btn-danger":"btn-warning"," text-left p-1 mb-1 w-100"),onClick:function(){a(t)}},"raw-bytecode"===t.sourceType&&s.a.createElement("span",{title:"raw-bytecode"},s.a.createElement(c.a,{className:"float-right",style:{fontSize:10},icon:l.e})),s.a.createElement("span",{className:"pr-2"},"[".concat(t.line+1,":").concat(t.column,"]")),t.message)),s.a.createElement(y.a,{isOpen:u},s.a.createElement("div",{className:"pl-3 pb-3"},s.a.createElement("div",{style:{fontSize:13}},t.description,t.ruleId&&s.a.createElement("a",{href:t.ruleLink,className:"pl-1",target:"_blank",rel:"noopener noreferrer"},"[",t.ruleId,"]")),s.a.createElement(j,{issue:t.origin}))))))};var x=function(e){var t=e.report,a=e.highlightIssue;return s.a.createElement(s.a.Fragment,null,t.message&&s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 offset-md-3"},s.a.createElement("div",{className:"alert alert-success w-100",role:"alert"},t.message))),t.list&&s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 offset-md-3"},t.list.map((function(e,t){var n=e.errorCount+e.warningCount,r=function(e,t){return"".concat(e," ").concat(1===e?t:"".concat(t,"s"))};return s.a.createElement("div",{key:t,className:"border-bottom pt-2 pb-2"},s.a.createElement("div",{className:"text-truncate font-weight-bold"},e.filePath),e.messages.map((function(t,n){return s.a.createElement(k,{key:n,issue:t,highlightIssue:function(t){return a(e,t)}})})),!!n&&s.a.createElement("div",null,"\u2716 ".concat(r(n,"issue")," (").concat(r(e.errorCount,"error"),", ").concat(r(e.warningCount,"warning"),")")))})))))},N=a(190),C=a.n(N);var S=function(e){var t=e.list,a=void 0===t?[]:t;return s.a.createElement("div",{className:"row"},a.slice(0,5).map((function(e,t){var a="https://dashboard.mythx.io/#/console/analyses/".concat(e.uuid);return s.a.createElement("div",{key:t,className:"col-md-6 offset-md-3 pt-1 pb-1"},s.a.createElement("span",{className:"pr-1 text-secondary"},"[",C()(e.timestamp).format("L LTS"),"]"),"full"===e.mode?s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{icon:l.d,className:"mr-1 text-warning"}),"Request for ",s.a.createElement("b",null,e.mode)," analysis has been submitted. See your results shortly at"):s.a.createElement(s.a.Fragment,null,"Your ",s.a.createElement("b",null,e.mode)," analysis is completed. See your results at"),s.a.createElement("a",{href:a,className:"pl-1",target:"_blank",rel:"noopener noreferrer"},e.uuid))})))},A=a(77),T=a(450);var I=function(e){var t=e.children,a=e.placement,i=Object(A.a)(e,["children","placement"]),o=Object(r.useState)(!1),u=Object(n.a)(o,2),m=u[0],d=u[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,Object.assign({className:"ml-2",icon:l.g},i)),s.a.createElement(T.a,{placement:a,isOpen:m,autohide:!1,target:i.id,toggle:function(){d(!m)}},t))};t.a=function(e){var t=e.compilations,a=e.contractList,y=e.selected,O=e.isAnalyzing,j=e.analyses,w=e.reports,k=e.selectContract,N=e.pluginActiveTab,C=e.analyze,A=e.addAlert,T=e.highlightIssue,z=e.clear,L=e.changeTab,F=e.log,D=Object(r.useState)(!1),P=Object(n.a)(D,2),R=P[0],_=P[1],J=y.split(" - "),W=Object(n.a)(J,2)[1],M=function(){var e=y.split(" - "),a=Object(n.a)(e,1)[0];if(!t[W])return!1;var r=t[W].data,s=(void 0===r?{}:r).contracts,c=(void 0===s?[]:s)[W][a].evm.bytecode;return c&&c.object&&c.object.length}(),q=O||!M;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 offset-md-3"},W?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"d-flex pb-3"},s.a.createElement("div",{className:"w-100"},s.a.createElement("select",{className:"form-control",value:y,onChange:function(e){return k(e.target.value)},disabled:O},a.map((function(e,t){return s.a.createElement("option",{key:t,value:e},e)})))),s.a.createElement("div",{className:"flex-shrink-1"},s.a.createElement("button",{type:"button",className:"form-control btn ml-2",title:"Clear",onClick:z,disabled:O},s.a.createElement(c.a,{icon:l.i})))),!M&&s.a.createElement(i.a,{color:"warning",style:{padding:".5rem 2.9rem .5rem .5rem"}},"This contract is abstract, it is not possible to analyze."),s.a.createElement("div",null,s.a.createElement(o.a,null,s.a.createElement(u.a,{isOpen:R,toggle:function(){return _(!R)}},s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return C()},disabled:q},O?s.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):s.a.createElement("div",null,"Analyze")),s.a.createElement(m.a,{caret:!0,disabled:q,className:"btn-primary"}),s.a.createElement(d.a,null,s.a.createElement(p.a,{onClick:function(){return C()},disabled:q},"Analyze"),s.a.createElement(p.a,{onClick:function(){return C("standard")},disabled:q},"Analyze (Standard)"),s.a.createElement(p.a,{onClick:function(){return C("deep")},disabled:q},"Analyze (Deep)")))),s.a.createElement(I,{id:"analysis_info",placement:"bottom"},s.a.createElement("div",null,"Analysis can take couple"),s.a.createElement("div",null,"of minutes. ",s.a.createElement("b",null,"Standard")," mode"),s.a.createElement("div",null,"takes approx 25 minutes."),s.a.createElement("div",null,s.a.createElement("b",null,"Deep")," takes approx 70 minutes.")),O&&s.a.createElement("div",{style:{fontSize:14,fontWeight:"bold"}},"We are analyzing your contract. This should take up to 2 minutes"))):s.a.createElement("div",{className:"alert alert-warning w-100",role:"alert",style:{padding:".5rem"}},"You need to compile your contract first!"))),s.a.createElement(g.a,{tabs:!0,className:"pt-1"},s.a.createElement(f.a,null,s.a.createElement(b.a,{href:"#",className:"log"===N?"active":null,onClick:function(){return L("log")}},"Log")),s.a.createElement(f.a,null,s.a.createElement(b.a,{href:"#",className:"report"===N?"active":null,onClick:function(){return L("report")}},"Report"))),s.a.createElement(v.a,{activeTab:N},s.a.createElement(h.a,{tabId:"log"},s.a.createElement(S,{list:F})),s.a.createElement(h.a,{tabId:"report"},j[y]&&s.a.createElement("div",{className:"text-right"},s.a.createElement(E.CopyToClipboard,{text:JSON.stringify(j[y]),onCopy:function(){return A("success","Copied")}},s.a.createElement("button",{type:"button",className:"btn",title:"Copy raw report to clipboard"},s.a.createElement(c.a,{className:"ml-2",icon:l.c}),s.a.createElement("span",{className:"pl-1"},"Raw report")))),s.a.createElement(x,{report:w[y]||{},highlightIssue:T}))))}},212:function(e,t,a){e.exports=a(443)},219:function(e,t,a){},245:function(e,t){},247:function(e,t){},281:function(e,t){},282:function(e,t){},443:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(44),c=a.n(s),l=(a(219),a(183));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},47:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c}));var n=a(9),r=a(77),s=function(e,t){return e||2===t},c=function(e){return e.map((function(e){var t=e.messages,a=Object(r.a)(e,["messages"]),c=function(e){return e.map((function(e){return JSON.stringify(e)})).reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]).map((function(e){return JSON.parse(e)}))}(t),l=function(e){return e.reduce((function(e,t){var a=t.fatal,n=t.severity;return s(a,n)?e:e+1}),0)}(c),i=function(e){return e.reduce((function(e,t){var a=t.fatal,n=t.severity;return s(a,n)?e+1:e}),0)}(c);return Object(n.a)(Object(n.a)({},a),{},{messages:c,errorCount:i,warningCount:l})}))}},76:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(22),c=a(18),l=a(107);t.a=function(e){var t=e.isPlugin,a=e.openSettings,n=r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://github.com/aquiladev/remix-mythx-plugin/releases/tag/".concat(l.version),target:"_block",rel:"noopener noreferrer"},l.version)," | ",r.a.createElement("a",{href:"https://discord.gg/VhdtjCh",target:"_blank",rel:"noopener noreferrer"},"Get support"));return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"position-absolute w-100 pb-1 d-flex",style:{fontSize:12,bottom:0}},r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-light ml-1 p-1",style:{fontSize:12},onClick:a},r.a.createElement(s.a,{icon:c.f,size:"lg",className:"mr-1"}),"MythX Settings")),r.a.createElement("div",{className:"ml-auto mr-1"},r.a.createElement("div",{className:"position-absolute",style:{right:4,bottom:4}},n))):r.a.createElement("div",{className:"position-absolute text-center w-100 pb-1 text-white",style:{fontSize:12,bottom:0}},n))}}},[[212,1,2]]]);
//# sourceMappingURL=main.bb43fb4b.chunk.js.map