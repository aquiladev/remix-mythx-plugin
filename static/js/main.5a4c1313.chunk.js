(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){"use strict";(function(e){var n=a(31),r=a(39),s=a.n(r),o=a(16),c=a(9),i=a(32),l=a(70),u=a(46),m=a(47),d=a(50),p=a(48),f=a(5),g=a(49),h=a(0),b=a.n(h),v=a(135),y=a(149),E=a(24),w=a(21),O=a(136),j=a(137),x=a.n(j),C=a(138),N=a(141),k="::",S="remix-mythx-plugin",I={address:"0x0000000000000000000000000000000000000000",pwd:"trial"},A="Access token has expired or is invalid! Please login again.",P=function(t){function a(e){var t;Object(u.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).analyze=Object(l.a)(s.a.mark(function e(){var a,n,r,l,u,m,d,p,f,g,h,b,y,E,w;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,n=a.address,r=a.pwd,l=a.compilations,u=a.selected,m=a.analyses,d=a.reports,p=u.split(k),f=Object(i.a)(p,1),g=f[0],h=new v.Client(n,r,"remythx"),e.next=5,t.login(h);case 5:return b=e.sent,t.setState({analyses:Object(c.a)({},m,Object(o.a)({},u,null)),isAnalyzig:!0,jwt:b}),e.next=9,t.props.client.editor.discardHighlight();case 9:return e.prev=9,y=t.getRequestData(),e.next=13,h.analyze(y);case 13:return E=e.sent,e.next=16,h.getDetectedIssues(E.uuid);case 16:w=e.sent,t.setState({analyses:Object(c.a)({},m,Object(o.a)({},u,w)),isAnalyzig:!1}),t.handleResult(l[g].source,w),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(9),t.setState({analyses:Object(c.a)({},m,Object(o.a)({},u,null)),reports:Object(c.a)({},d,Object(o.a)({},u,{list:[{messages:[{error:e.t0.message||e.t0}]}]})),isAnalyzig:!1});case 24:case"end":return e.stop()}},e,null,[[9,21]])})),t.login=function(e){var a=t.state.jwt;if(a)try{return e.loginWithToken(a),a}catch(n){if(n.message!==A)throw n}return e.login()};var n=localStorage.getItem(S)||"{}",r=JSON.parse(n),m=r.address||I.address;return t.state={address:m,pwd:r.pwd||I.pwd,jwt:null,compilations:{},selected:"",contractList:[],mapping:{},isAnalyzig:!1,analyses:{},reports:{},creadOpen:m===I.address,infoTooltipOpen:!1},t.init=t.init.bind(Object(f.a)(t)),t.processCompilation=t.processCompilation.bind(Object(f.a)(t)),t.login=t.login.bind(Object(f.a)(t)),t.saveCredentials=t.saveCredentials.bind(Object(f.a)(t)),t.analyze=t.analyze.bind(Object(f.a)(t)),t.getRequestData=t.getRequestData.bind(Object(f.a)(t)),t.handleResult=t.handleResult.bind(Object(f.a)(t)),t.highlightIssue=t.highlightIssue.bind(Object(f.a)(t)),t.init(),t}return Object(g.a)(a,t),Object(m.a)(a,[{key:"init",value:function(){var e=this,t=this.props.client;t.solidity.getCompilationResult().then(function(t){if(t){var a=t.data,n=t.source;n&&e.processCompilation(n.target,n,a)}}),t.on("solidity","compilationFinished",function(t,a,n,r){e.processCompilation(t,a,r)})}},{key:"processCompilation",value:function(t,a,r){var s=this.state,i=s.compilations,l=s.contractList,u=s.mapping,m=r.contracts,d=(void 0===m?[]:m)[t],p={};Object.keys(d).forEach(function(a){var n=d[a].evm.deployedBytecode.object,r=new x.a(256);r.update(e.from(n,"hex")),p[t]=t,p["0x".concat(r.digest("hex"))]=t});var f=Object.keys(r.contracts[t]),g=new Set([].concat(Object(n.a)(l),Object(n.a)(this.getContracts(r,t))));this.setState({compilations:Object(c.a)({},i,Object(o.a)({},t,{source:a,data:r})),selected:"".concat(t).concat(k).concat(f[0]),contractList:Array.from(g),mapping:Object(c.a)({},u,p)})}},{key:"getContracts",value:function(e,t){var a=e.contracts,n=(void 0===a?[]:a)[t]||{};return Object.keys(n).map(function(e){return"".concat(t).concat(k).concat(e)})}},{key:"saveCredentials",value:function(){var e=this.state,t=e.address,a=e.pwd;localStorage.setItem(S,JSON.stringify({address:t,pwd:a}))}},{key:"getRequestData",value:function(){var e=this.state,t=e.compilations,a=e.selected.split(k),n=Object(i.a)(a,2),r=n[0],s=n[1],o=t[r],c=o.data,l=void 0===c?{}:c,u=o.source,m=void 0===u?{}:u,d=l.contracts,p=void 0===d?[]:d,f=l.sources,g=void 0===f?{}:f,h=p[r],b=h[s].evm.bytecode,v=h[s].evm.deployedBytecode,y={contractName:s,bytecode:b.object,sourceMap:b.sourceMap,deployedBytecode:v.object,deployedSourceMap:v.sourceMap,analysisMode:"quick",mainSource:r,sourceList:Object.keys(m.sources),sources:{}};if(Object.keys(g).reduce(function(e,t){return e&&!!g[t].ast},!0))for(var E in m.sources)m.sources.hasOwnProperty(E)&&(y.sources[E]={ast:g[E].ast});else for(var w in m.sources)m.sources.hasOwnProperty(w)&&(y.sources[w]={source:m.sources[w].content});return y}},{key:"handleResult",value:function(e,t){var a=this.state,n=a.selected,r=a.reports,s=a.mapping,i=Object(C.a)(e,s,t);0===i.length?this.setState({reports:Object(c.a)({},r,Object(o.a)({},n,{message:"\u2714 No errors/warnings found in ".concat(n)}))}):this.setState({reports:Object(c.a)({},r,Object(o.a)({},n,{list:i}))})}},{key:"highlightIssue",value:function(){var e=Object(l.a)(s.a.mark(function e(t,a){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={start:{line:a.line,column:a.column},end:{line:a.endLine,column:a.endCol}},r=1===a.severity?"#ffd300":"#ff0000",e.next=4,this.props.client.editor.highlight(n,t.filePath,r);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.contractList,n=t.selected,r=t.isAnalyzig,s=t.analyses,o=t.reports,c=t.creadOpen,l=n.split(k),u=Object(i.a)(l,1)[0];return b.a.createElement("div",{className:"container"},b.a.createElement("div",{className:"row border-bottom pb-3"},b.a.createElement("div",{className:"col-md-6 offset-md-3"},b.a.createElement("div",{className:"btn btn-light btn-block text-left rounded-0 border-0",style:{cursor:"pointer"},onClick:function(){e.setState({creadOpen:!c})}},"Credentials",b.a.createElement(E.a,{className:"ml-2",icon:w.e,id:"cred_info"}),b.a.createElement(E.a,{icon:c?w.a:w.b,style:{position:"absolute",right:24,top:10}}),b.a.createElement(y.a,{placement:"right",isOpen:this.state.infoTooltipOpen,autohide:!1,target:"cred_info",toggle:function(){e.setState({infoTooltipOpen:!e.state.infoTooltipOpen})}},"In order to use MythX APIs you need to have credentials. You can use the trial credential, but analysis's result will be limited. In order to get credential you need to ",b.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer",className:"text-nowrap"},"sign up"))),b.a.createElement("div",{className:c?null:"collapse"},b.a.createElement("form",null,b.a.createElement("div",{className:"form-group"},b.a.createElement("label",{htmlFor:"address"},"Address"),b.a.createElement("input",{type:"text",className:"form-control",id:"address","aria-describedby":"emailHelp",placeholder:"Address",onChange:function(t){return e.setState({address:t.target.value})},defaultValue:this.state.address})),b.a.createElement("div",{className:"form-group"},b.a.createElement("label",{htmlFor:"pwd"},"Password"),b.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Password",onChange:function(t){return e.setState({pwd:t.target.value})},defaultValue:this.state.pwd})),b.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.saveCredentials},"Save"))))),b.a.createElement("div",{className:"row mt-3"},b.a.createElement("div",{className:"col-md-6 offset-md-3"},u?b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:"form-group"},b.a.createElement("select",{className:"form-control",value:n,onChange:function(t){return e.setState({selected:t.target.value})},disabled:r},a.map(function(e,t){return b.a.createElement("option",{key:t,value:e},e)}))),b.a.createElement("div",null,b.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.analyze,disabled:r},r?b.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):b.a.createElement("span",null,"Analyze")),b.a.createElement(E.a,{className:"ml-2",icon:w.e,id:"analysis_info"}),b.a.createElement(y.a,{placement:"right",isOpen:this.state.analysisTooltipOpen,autohide:!0,target:"analysis_info",toggle:function(){e.setState({analysisTooltipOpen:!e.state.analysisTooltipOpen})}},"Analysis can take couple of minutes"),s[n]&&b.a.createElement(O.CopyToClipboard,{text:JSON.stringify(s[n])},b.a.createElement("button",{type:"button",className:"btn float-right",title:"Copy raw report to clipboard"},b.a.createElement(E.a,{className:"ml-2",icon:w.c}),b.a.createElement("span",{className:"pl-1"},"Raw report"))))):b.a.createElement("div",{className:"alert alert-warning w-100",role:"alert"},"You need to compile your contract first!"))),b.a.createElement(N.a,{report:o[n]||{},highlightIssue:this.highlightIssue}))}}]),a}(b.a.Component);t.a=P}).call(this,a(6).Buffer)},138:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(31),r=a(9),s=a(32),o=a(139),c=a.n(o),i=a(30),l={High:2,Medium:1},u=new c.a,m=function(e,t){var a;a=e.swcID?"https://smartcontractsecurity.github.io/SWC-registry/docs/"+e.swcID:"N/A";var n,r,o={fatal:!1,ruleId:e.swcID,ruleLink:a,message:"".concat(e.description.head),description:"".concat(e.description.tail),severity:l[e.severity]||1,mythXseverity:e.severity,line:-1,column:0,endLine:-1,endCol:0},c=u.getLinebreakPositions(t);if(e.locations.length){var i=function(e,t){var a=e.split(":"),n={length:parseInt(a[1],10),start:parseInt(a[0],10)},r=u.convertOffsetToLineColumn(n,t);return[r.start,r.end]}(e.locations[0].sourceMap.split(";")[0],c),m=Object(s.a)(i,2);n=m[0],r=m[1]}return n&&(o.line=n.line,o.column=n.column,o.endLine=r.line,o.endCol=r.column),o},d=function(e,t,a){var s={};a.forEach(function(a){(function(e,t,a){var n=e.issues,s=e.sourceList,o={};for(var c in n.map(function(n){var c=function(e){if(e.locations.length){var t=/(\d+):(\d+):(\d+)/g.exec(e.locations[0].sourceMap);return t?t[3]:0}return 0}(n),i=s[c].replace(/^\//,""),l=t[i]||i;o[l]||(o[l]={errorCount:0,warningCount:0,fixableErrorCount:0,fixableWarningCount:0,filePath:l,messages:[]});var u={error:"File not found"};a.sources[l]&&(u=m(n,a.sources[l].content)),o[l].messages.push(Object(r.a)({},u,{sourceType:e.sourceType}))}),o)o.hasOwnProperty(c)&&(o[c].warningCount=o[c].messages.reduce(function(e,t){var a=t.fatal,n=t.severity;return Object(i.b)(a,n)?e:e+1},0),o[c].errorCount=o[c].messages.reduce(function(e,t){var a=t.fatal,n=t.severity;return Object(i.b)(a,n)?e+1:e},0));return Object.values(o)})(a,t,e).forEach(function(e){var t=s[e.filePath];s[e.filePath]=t?{errorCount:t.errorCount+e.errorCount,warningCount:t.warningCount+e.warningCount,fixableErrorCount:t.fixableErrorCount+e.fixableErrorCount,fixableWarningCount:t.fixableWarningCount+e.fixableWarningCount,filePath:t.filePath,messages:[].concat(Object(n.a)(t.messages),Object(n.a)(e.messages))}:e})});var o=Object.values(s).reduce(function(e,t){return e.concat(t)},[]);return Object(i.a)(o)}},141:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(24),o=a(21),c=a(30);t.a=function(e){var t=e.report,a=e.highlightIssue;return r.a.createElement(r.a.Fragment,null,t.message&&r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-success w-100",role:"alert"},t.message))),t.list&&r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},t.list.map(function(e,t){var n=e.errorCount+e.warningCount,i=function(e,t){return"".concat(e," ").concat(1===e?t:"".concat(t,"s"))};return r.a.createElement("div",{key:t,className:"border-bottom pt-2 pb-2"},r.a.createElement("div",{className:"text-truncate font-weight-bold"},e.filePath),e.messages.map(function(t,n){return r.a.createElement("div",{key:n,className:"pl-3"},t.error?r.a.createElement("div",{className:"alert alert-danger p-1"},t.error):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn ".concat(Object(c.b)(t.fatal,t.severity)?"btn-danger":"btn-warning"," text-left p-1 mb-1 w-100"),onClick:function(){a(e,t)}},"raw-bytecode"===t.sourceType&&r.a.createElement("span",{title:"raw-bytecode"},r.a.createElement(s.a,{className:"float-right",style:{fontSize:10},icon:o.d})),r.a.createElement("span",{className:"pr-2"},"[".concat(t.line+1,":").concat(t.column,"]")),r.a.createElement("span",{title:"".concat(t.description),style:{cursor:"help"}},"".concat(t.message)),t.ruleId&&r.a.createElement("a",{href:t.ruleLink,className:"pl-1"},"[",t.ruleId,"]"))))}),!!n&&r.a.createElement("div",null,"\u2716 ".concat(i(n,"issue")," (").concat(i(e.errorCount,"error"),", ").concat(i(e.warningCount,"warning"),")")))}))))}},146:function(e,t,a){e.exports=a.p+"static/media/remix.0cc3e824.svg"},147:function(e,t,a){e.exports=a.p+"static/media/mythx.5fc6cc7c.png"},148:function(e,t,a){e.exports=a.p+"static/media/plus.bd770134.svg"},150:function(e,t,a){e.exports=a(326)},157:function(e,t,a){},185:function(e,t){},187:function(e,t){},224:function(e,t){},225:function(e,t){},30:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return o});var n=a(9),r=a(140),s=function(e,t){return e||2===t},o=function(e){return e.map(function(e){var t=e.messages,a=Object(r.a)(e,["messages"]),o=function(e){return e.map(function(e){return JSON.stringify(e)}).reduce(function(e,t){return-1===e.indexOf(t)&&e.push(t),e},[]).map(function(e){return JSON.parse(e)})}(t),c=function(e){return e.reduce(function(e,t){var a=t.fatal,n=t.severity;return s(a,n)?e:e+1},0)}(o),i=function(e){return e.reduce(function(e,t){var a=t.fatal,n=t.severity;return s(a,n)?e+1:e},0)}(o);return Object(n.a)({},a,{messages:o,errorCount:i,warningCount:c})})}},326:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(27),o=a.n(s),c=(a(157),a(46)),i=a(47),l=a(50),u=a(48),m=a(49),d=a(69),p=(a(158),a(134)),f=a(73);var g=function(e){var t=e.isPlugin;return r.a.createElement("div",{className:"position-absolute text-center w-100 pb-1".concat(t?"":" text-white"),style:{fontSize:12,bottom:0}},r.a.createElement("a",{href:"https://github.com/aquiladev/remix-mythx-plugin/releases/tag/v".concat(f.version),target:"_block",rel:"noopener noreferrer"},"v",f.version)," | ",r.a.createElement("a",{href:"https://github.com/aquiladev/remix-mythx-plugin",target:"_blank",rel:"noopener noreferrer"},"GitHub")," | ",r.a.createElement("a",{href:"https://discord.gg/VhdtjCh",target:"_blank",rel:"noopener noreferrer"},"Get support"))},h=a(146),b=a.n(h),v=a(147),y=a.n(v),E=a(148),w=a.n(E);var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"h-100",style:{background:"#012A3E"}},r.a.createElement("div",{className:"d-flex align-items-end flex-column",style:{height:"50%"}},r.a.createElement("div",{className:"mt-auto pb-5 w-100"},r.a.createElement("h1",{className:"display-1 text-white",style:{textAlign:"center"}},"re:MythX"))),r.a.createElement("div",{className:"text-center pt-4"},r.a.createElement("a",{href:"https://remix.ethereum.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:b.a,alt:"remix",style:{height:120,width:120,verticalAlign:"top"}})),r.a.createElement("img",{src:w.a,alt:"plus",className:"pl-5 pr-5",style:{height:100,width:140}}),r.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:y.a,alt:"mythx",style:{height:130,width:180,verticalAlign:"top"}})))),r.a.createElement(g,{isPlugin:!1}))},j={},x=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={plugin:!1};return(j=Object(d.createIframeClient)({customApi:d.remixApi,devMode:{port:8080}})).onload(function(){a.setState({plugin:!0})}),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.plugin;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement("div",{style:{position:"relative",minHeight:"100vh"}},r.a.createElement("main",null,r.a.createElement(p.a,{client:j})),r.a.createElement(g,{isPlugin:!0})):r.a.createElement(O,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e){e.exports={name:"remix-mythx-plugin",version:"0.1.2",private:!0,dependencies:{"@fortawesome/fontawesome-svg-core":"1.2.19","@fortawesome/free-solid-svg-icons":"5.9.0","@fortawesome/react-fontawesome":"0.1.4",bootstrap:"4.3.1",eslint:"5.16.0",keccakjs:"0.2.3",mythxjs:"1.1.0",react:"^16.8.6","react-copy-to-clipboard":"5.0.1","react-dom":"^16.8.6","react-scripts":"3.0.1",reactstrap:"8.0.0","remix-lib":"0.4.6","remix-plugin":"0.0.2-alpha.7"},devDependencies:{"release-it":"12.3.0"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test",eject:"react-scripts eject",release:"release-it --no-npm.publish"},eslintConfig:{extends:"react-app"},browserslist:{production:[">0.2%","not dead","not op_mini all"],development:["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}}},[[150,1,2]]]);
//# sourceMappingURL=main.5a4c1313.chunk.js.map