(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t,a){"use strict";(function(e){var n=a(18),r=a(46),s=a.n(r),i=a(19),c=a(10),o=a(25),l=a(84),u=a(57),d=a(58),m=a(62),p=a(59),f=a(5),h=a(61),g=a(0),b=a.n(g),v=a(161),y=a(89),O=a(28),E=a(21),w=a(162),j=a(163),x=a.n(j),C=a(164),N=a(166),k="::",S="remix-mythx-plugin",A={address:"0x0000000000000000000000000000000000000000",pwd:"trial"},I=function(t){function a(e){var t;Object(u.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).analyze=Object(l.a)(s.a.mark(function e(){var a,n,r,l,u,d,m,p,f,h,g,b,y,O,E;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,n=a.address,r=a.pwd,l=a.compilations,u=a.selected,d=a.analyses,m=a.reports,p=u.split(k),f=Object(o.a)(p,1),h=f[0],g=new v.Client(n,r,"remythx"),e.next=5,t.login(g);case 5:return b=e.sent,t.setState({analyses:Object(c.a)({},d,Object(i.a)({},u,null)),isAnalyzig:!0,jwt:b}),e.next=9,t.props.client.call("editor","discardHighlight");case 9:return e.prev=9,y=t.getRequestData(),e.next=13,g.analyze(y);case 13:return O=e.sent,e.next=16,g.getDetectedIssues(O.uuid);case 16:E=e.sent,t.setState({analyses:Object(c.a)({},d,Object(i.a)({},u,E)),isAnalyzig:!1}),t.handleResult(l[h].source,E),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(9),t.setState({analyses:Object(c.a)({},d,Object(i.a)({},u,null)),reports:Object(c.a)({},m,Object(i.a)({},u,{list:[{messages:[{error:e.t0.message||e.t0}]}]})),isAnalyzig:!1});case 24:case"end":return e.stop()}},e,null,[[9,21]])})),t.highlightIssue=function(){var e=Object(l.a)(s.a.mark(function e(a,n){var r,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={start:{line:n.line,column:n.column},end:{line:n.endLine,column:n.endCol}},i=1===n.severity?"#ffd300":"#ff0000",e.next=4,t.props.client.call("editor","highlight",r,a.filePath,i);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}();var n=localStorage.getItem(S)||"{}",r=JSON.parse(n),d=r.address||A.address;return t.state={address:d,pwd:r.pwd||A.pwd,jwt:null,compilations:{},selected:"",contractList:[],mapping:{},isAnalyzig:!1,analyses:{},reports:{},creadOpen:d===A.address,infoTooltipOpen:!1},t.init=t.init.bind(Object(f.a)(t)),t.processCompilation=t.processCompilation.bind(Object(f.a)(t)),t.login=t.login.bind(Object(f.a)(t)),t.saveCredentials=t.saveCredentials.bind(Object(f.a)(t)),t.analyze=t.analyze.bind(Object(f.a)(t)),t.getRequestData=t.getRequestData.bind(Object(f.a)(t)),t.handleResult=t.handleResult.bind(Object(f.a)(t)),t.highlightIssue=t.highlightIssue.bind(Object(f.a)(t)),t.init(),t}return Object(h.a)(a,t),Object(d.a)(a,[{key:"init",value:function(){var e=this,t=this.props.client;t.call("solidity","getCompilationResult").then(function(t){if(t){var a=t.data,n=t.source;n&&e.processCompilation(n.target,n,a)}}),t.on("solidity","compilationFinished",function(t,a,n,r){e.processCompilation(t,a,r)})}},{key:"processCompilation",value:function(t,a,r){var s=this.state,o=s.compilations,l=s.contractList,u=s.mapping,d=r.contracts,m=(void 0===d?[]:d)[t],p={};Object.keys(m).forEach(function(a){var n=m[a].evm.deployedBytecode.object,r=new x.a(256);r.update(e.from(n,"hex")),p[t]=t,p["0x".concat(r.digest("hex"))]=t});var f=Object.keys(r.contracts[t]),h=new Set([].concat(Object(n.a)(l),Object(n.a)(this.getContracts(r,t))));this.setState({compilations:Object(c.a)({},o,Object(i.a)({},t,{source:a,data:r})),selected:"".concat(t).concat(k).concat(f[0]),contractList:Array.from(h),mapping:Object(c.a)({},u,p)})}},{key:"getContracts",value:function(e,t){var a=e.contracts,n=(void 0===a?[]:a)[t]||{};return Object.keys(n).map(function(e){return"".concat(t).concat(k).concat(e)})}},{key:"saveCredentials",value:function(){var e=this.state,t=e.address,a=e.pwd;localStorage.setItem(S,JSON.stringify({address:t,pwd:a})),this.props.addAlert("success","Saved")}},{key:"login",value:function(e){var t=this.state.jwt;if(t)try{return e.loginWithToken(t),t}catch(a){if("Access token has expired or is invalid! Please login again."!==a.message)throw a}return e.login()}},{key:"getRequestData",value:function(){var e=this.state,t=e.compilations,a=e.selected.split(k),n=Object(o.a)(a,2),r=n[0],s=n[1],i=t[r],c=i.data,l=void 0===c?{}:c,u=i.source,d=void 0===u?{}:u,m=l.contracts,p=void 0===m?[]:m,f=l.sources,h=void 0===f?{}:f,g=p[r],b=g[s].evm.bytecode,v=g[s].evm.deployedBytecode,y={contractName:s,bytecode:b.object,sourceMap:b.sourceMap,deployedBytecode:v.object,deployedSourceMap:v.sourceMap,analysisMode:"quick",mainSource:r,sourceList:Object.keys(d.sources),sources:{}};if(Object.keys(h).reduce(function(e,t){return e&&!!h[t].ast},!0))for(var O in d.sources)d.sources.hasOwnProperty(O)&&(y.sources[O]={ast:h[O].ast});else for(var E in d.sources)d.sources.hasOwnProperty(E)&&(y.sources[E]={source:d.sources[E].content});return y}},{key:"handleResult",value:function(e,t){var a=this.state,n=a.selected,r=a.reports,s=a.mapping,o=Object(C.a)(e,s,t);0===o.length?this.setState({reports:Object(c.a)({},r,Object(i.a)({},n,{message:"\u2714 No errors/warnings found in ".concat(n)}))}):this.setState({reports:Object(c.a)({},r,Object(i.a)({},n,{list:o}))})}},{key:"render",value:function(){var e=this,t=this.state,a=t.contractList,n=t.selected,r=t.isAnalyzig,s=t.analyses,i=t.reports,c=t.creadOpen,l=n.split(k),u=Object(o.a)(l,1)[0];return b.a.createElement("div",{className:"container"},b.a.createElement("div",{className:"row border-bottom pb-3"},b.a.createElement("div",{className:"col-md-6 offset-md-3"},b.a.createElement("div",{className:"btn btn-light btn-block text-left rounded-0 border-0",style:{cursor:"pointer"},onClick:function(){e.setState({creadOpen:!c})}},"Credentials",b.a.createElement(O.a,{className:"ml-2",icon:E.f,id:"cred_info"}),b.a.createElement(O.a,{icon:c?E.a:E.b,style:{position:"absolute",right:24,top:10}}),b.a.createElement(y.a,{placement:"right",isOpen:this.state.infoTooltipOpen,autohide:!1,target:"cred_info",toggle:function(){e.setState({infoTooltipOpen:!e.state.infoTooltipOpen})}},"In order to use MythX APIs you need to have credentials. You can use the trial credential, but analysis's result will be limited. In order to get credential you need to ",b.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer",className:"text-nowrap"},"sign up"))),b.a.createElement("div",{className:c?null:"collapse"},b.a.createElement("form",null,b.a.createElement("div",{className:"form-group"},b.a.createElement("label",{htmlFor:"address"},"Address"),b.a.createElement("input",{type:"text",className:"form-control",id:"address","aria-describedby":"emailHelp",placeholder:"Address",onChange:function(t){return e.setState({address:t.target.value})},defaultValue:this.state.address})),b.a.createElement("div",{className:"form-group"},b.a.createElement("label",{htmlFor:"pwd"},"Password"),b.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Password",onChange:function(t){return e.setState({pwd:t.target.value})},defaultValue:this.state.pwd})),b.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.saveCredentials},"Save"))))),b.a.createElement("div",{className:"row mt-3"},b.a.createElement("div",{className:"col-md-6 offset-md-3"},u?b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:"form-group"},b.a.createElement("select",{className:"form-control",value:n,onChange:function(t){return e.setState({selected:t.target.value})},disabled:r},a.map(function(e,t){return b.a.createElement("option",{key:t,value:e},e)}))),b.a.createElement("div",null,b.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.analyze,disabled:r},r?b.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):b.a.createElement("span",null,"Analyze")),b.a.createElement(O.a,{className:"ml-2",icon:r?E.d:E.f,id:"analysis_info"}),b.a.createElement(y.a,{placement:"right",isOpen:this.state.analysisTooltipOpen,autohide:!0,target:"analysis_info",toggle:function(){e.setState({analysisTooltipOpen:!e.state.analysisTooltipOpen})}},r?"We are analyzing your contract. This should take up to 2 minutes":"Analysis can take couple of minutes"),s[n]&&b.a.createElement(w.CopyToClipboard,{text:JSON.stringify(s[n]),onCopy:function(){return e.props.addAlert("success","Copied")}},b.a.createElement("button",{type:"button",className:"btn float-right",title:"Copy raw report to clipboard"},b.a.createElement(O.a,{className:"ml-2",icon:E.c}),b.a.createElement("span",{className:"pl-1"},"Raw report"))))):b.a.createElement("div",{className:"alert alert-warning w-100",role:"alert"},"You need to compile your contract first!"))),b.a.createElement(N.a,{report:i[n]||{},highlightIssue:this.highlightIssue}))}}]),a}(b.a.Component);t.a=I}).call(this,a(6).Buffer)},164:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(18),r=a(10),s=a(25),i=a(165),c=a.n(i),o=a(37),l={High:2,Medium:1},u=new c.a,d=function(e,t){var a;a=e.swcID?"https://smartcontractsecurity.github.io/SWC-registry/docs/"+e.swcID:"N/A";var n,r,i={fatal:!1,ruleId:e.swcID,ruleLink:a,message:"".concat(e.description.head),description:"".concat(e.description.tail),severity:l[e.severity]||1,mythXseverity:e.severity,line:-1,column:0,endLine:-1,endCol:0},c=u.getLinebreakPositions(t);if(e.locations.length){var o=function(e,t){var a=e.split(":"),n={length:parseInt(a[1],10),start:parseInt(a[0],10)},r=u.convertOffsetToLineColumn(n,t);return[r.start,r.end]}(e.locations[0].sourceMap.split(";")[0],c),d=Object(s.a)(o,2);n=d[0],r=d[1]}return n&&(i.line=n.line,i.column=n.column,i.endLine=r.line,i.endCol=r.column),i},m=function(e,t,a){var s={};a.forEach(function(a){(function(e,t,a){var n=e.issues,s=e.sourceList,i={};for(var c in n.map(function(n){var c=function(e){if(e.locations.length){var t=/(\d+):(\d+):(\d+)/g.exec(e.locations[0].sourceMap);return t?t[3]:0}return 0}(n),o=s[c].replace(/^\//,""),l=t[o]||o;i[l]||(i[l]={errorCount:0,warningCount:0,fixableErrorCount:0,fixableWarningCount:0,filePath:l,messages:[]});var u={error:"File not found"};a.sources[l]&&(u=d(n,a.sources[l].content)),i[l].messages.push(Object(r.a)({},u,{sourceType:e.sourceType}))}),i)i.hasOwnProperty(c)&&(i[c].warningCount=i[c].messages.reduce(function(e,t){var a=t.fatal,n=t.severity;return Object(o.b)(a,n)?e:e+1},0),i[c].errorCount=i[c].messages.reduce(function(e,t){var a=t.fatal,n=t.severity;return Object(o.b)(a,n)?e+1:e},0));return Object.values(i)})(a,t,e).forEach(function(e){var t=s[e.filePath];s[e.filePath]=t?{errorCount:t.errorCount+e.errorCount,warningCount:t.warningCount+e.warningCount,fixableErrorCount:t.fixableErrorCount+e.fixableErrorCount,fixableWarningCount:t.fixableWarningCount+e.fixableWarningCount,filePath:t.filePath,messages:[].concat(Object(n.a)(t.messages),Object(n.a)(e.messages))}:e})});var i=Object.values(s).reduce(function(e,t){return e.concat(t)},[]);return Object(o.a)(i)}},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(28),i=a(21),c=a(38),o=a(37);t.a=function(e){var t=e.report,a=e.highlightIssue;return r.a.createElement(r.a.Fragment,null,t.message&&r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-success w-100",role:"alert"},t.message))),t.list&&r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},t.list.map(function(e,t){var n=e.errorCount+e.warningCount,l=function(e,t){return"".concat(e," ").concat(1===e?t:"".concat(t,"s"))};return r.a.createElement("div",{key:t,className:"border-bottom pt-2 pb-2"},r.a.createElement("div",{className:"text-truncate font-weight-bold"},e.filePath),e.messages.map(function(n,l){return r.a.createElement("div",{key:l,className:"pl-3"},n.error?r.a.createElement("div",{className:"alert alert-danger p-1"},n.error):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn ".concat(Object(o.b)(n.fatal,n.severity)?"btn-danger":"btn-warning"," text-left p-1 mb-1 w-100"),onClick:function(){a(e,n)}},"raw-bytecode"===n.sourceType&&r.a.createElement("span",{title:"raw-bytecode"},r.a.createElement(s.a,{className:"float-right",style:{fontSize:10},icon:i.e})),r.a.createElement("span",{className:"pr-2"},"[".concat(n.line+1,":").concat(n.column,"]")),r.a.createElement("span",{title:"".concat(n.description),style:{cursor:"help"}},"".concat(n.message)),n.ruleId&&r.a.createElement(c.a,{id:"i".concat(t,"_").concat(l),href:n.ruleLink,className:"pl-1",target:"_blank",rel:"noopener noreferrer"},"[",n.ruleId,"]"))))}),!!n&&r.a.createElement("div",null,"\u2716 ".concat(l(n,"issue")," (").concat(l(e.errorCount,"error"),", ").concat(l(e.warningCount,"warning"),")")))}))))}},173:function(e,t,a){e.exports=a.p+"static/media/remix.0cc3e824.svg"},174:function(e,t,a){e.exports=a.p+"static/media/mythx.5fc6cc7c.png"},175:function(e,t,a){e.exports=a.p+"static/media/plus.bd770134.svg"},178:function(e,t,a){e.exports=a(403)},185:function(e,t,a){},212:function(e,t){},214:function(e,t){},251:function(e,t){},252:function(e,t){},37:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return i});var n=a(10),r=a(60),s=function(e,t){return e||2===t},i=function(e){return e.map(function(e){var t=e.messages,a=Object(r.a)(e,["messages"]),i=function(e){return e.map(function(e){return JSON.stringify(e)}).reduce(function(e,t){return-1===e.indexOf(t)&&e.push(t),e},[]).map(function(e){return JSON.parse(e)})}(t),c=function(e){return e.reduce(function(e,t){var a=t.fatal,n=t.severity;return s(a,n)?e:e+1},0)}(i),o=function(e){return e.reduce(function(e,t){var a=t.fatal,n=t.severity;return s(a,n)?e+1:e},0)}(i);return Object(n.a)({},a,{messages:i,errorCount:o,warningCount:c})})}},38:function(e,t,a){"use strict";var n=a(25),r=a(60),s=a(0),i=a.n(s),c=a(89);t.a=function(e){var t=e.children,a=Object(r.a)(e,["children"]),o=Object(s.useState)(!1),l=Object(n.a)(o,2),u=l[0],d=l[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("a",a,t),i.a.createElement(c.a,{placement:"top",isOpen:u,target:a.id,toggle:function(){d(!u)}},"CTRL + Click"))}},403:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),i=a.n(s),c=(a(185),a(18)),o=a(57),l=a(58),u=a(62),d=a(59),m=a(5),p=a(61),f=a(159),h=(a(186),a(160)),g=a(38),b=a(87);var v=function(e){var t=e.isPlugin;return r.a.createElement("div",{className:"position-absolute text-center w-100 pb-1".concat(t?"":" text-white"),style:{fontSize:12,bottom:0}},r.a.createElement(g.a,{id:"version",href:"https://github.com/aquiladev/remix-mythx-plugin/releases/tag/v".concat(b.version),target:"_block",rel:"noopener noreferrer"},"v",b.version)," | ",r.a.createElement(g.a,{id:"repo",href:"https://github.com/aquiladev/remix-mythx-plugin",target:"_blank",rel:"noopener noreferrer"},"GitHub")," | ",r.a.createElement(g.a,{id:"support",href:"https://discord.gg/VhdtjCh",target:"_blank",rel:"noopener noreferrer"},"Get support"))},y=a(176);var O=function(e){var t=e.alerts,a=e.onDismissed;return r.a.createElement(y.a,{position:"bottom-right",alerts:t,timeout:3e3,onDismiss:a,showIcon:!1})},E=a(173),w=a.n(E),j=a(174),x=a.n(j),C=a(175),N=a.n(C);var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"h-100",style:{background:"#012A3E"}},r.a.createElement("div",{className:"d-flex align-items-end flex-column",style:{height:"50%"}},r.a.createElement("div",{className:"mt-auto pb-5 w-100"},r.a.createElement("h1",{className:"display-1 text-white",style:{textAlign:"center"}},"re:MythX"))),r.a.createElement("div",{className:"text-center pt-4"},r.a.createElement("a",{href:"https://remix.ethereum.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:w.a,alt:"remix",style:{height:120,width:120,verticalAlign:"top"}})),r.a.createElement("img",{src:N.a,alt:"plus",className:"pl-5 pr-5",style:{height:100,width:140}}),r.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:x.a,alt:"mythx",style:{height:130,width:180,verticalAlign:"top"}})))),r.a.createElement(v,null))},S={},A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={plugin:!1,alerts:[]},(S=Object(f.createIframeClient)()).onload(function(){a.setState({plugin:!0})}),a.addAlert=a.addAlert.bind(Object(m.a)(a)),a.onAlertDismissed=a.onAlertDismissed.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"addAlert",value:function(e,t){this.setState({alerts:[].concat(Object(c.a)(this.state.alerts),[{id:(new Date).getTime(),type:e,message:t}])})}},{key:"onAlertDismissed",value:function(e){var t=this.state.alerts,a=t.indexOf(e);a>=0&&this.setState({alerts:[].concat(Object(c.a)(t.slice(0,a)),Object(c.a)(t.slice(a+1)))})}},{key:"render",value:function(){var e=this.state,t=e.plugin,a=e.alerts;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{style:{position:"relative",minHeight:"100vh"}},r.a.createElement("main",null,r.a.createElement(h.a,{client:S,addAlert:this.addAlert})),r.a.createElement(v,{isPlugin:!0}),r.a.createElement(O,{alerts:a,onDismissed:this.onAlertDismissed})):r.a.createElement(k,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e){e.exports={name:"remix-mythx-plugin",version:"0.1.3",private:!0,dependencies:{"@fortawesome/fontawesome-svg-core":"1.2.19","@fortawesome/free-solid-svg-icons":"5.9.0","@fortawesome/react-fontawesome":"0.1.4","@remixproject/plugin":"0.1.3-1",bootstrap:"4.3.1",eslint:"5.16.0",keccakjs:"0.2.3",mythxjs:"1.3.0",react:"16.8.6","react-bs-notifier":"5.0.0","react-copy-to-clipboard":"5.0.1","react-dom":"16.8.6","react-scripts":"3.0.1",reactstrap:"8.0.0","remix-lib":"0.4.7"},devDependencies:{"release-it":"12.3.0"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test",eject:"react-scripts eject",release:"release-it --no-npm.publish"},eslintConfig:{extends:"react-app"},browserslist:{production:[">0.2%","not dead","not op_mini all"],development:["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}}},[[178,1,2]]]);
//# sourceMappingURL=main.3a0e60a8.chunk.js.map