(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){e.exports=a.p+"static/media/remix.0cc3e824.svg"},140:function(e,t,a){e.exports=a.p+"static/media/mythx.5fc6cc7c.png"},141:function(e,t,a){e.exports=a.p+"static/media/plus.bd770134.svg"},143:function(e,t,a){e.exports=a(317)},150:function(e,t,a){},178:function(e,t){},180:function(e,t){},217:function(e,t){},218:function(e,t){},317:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),i=a.n(s),o=(a(150),a(43)),c=a(44),l=a(46),u=a(45),m=a(47),d=a(66),p=(a(151),a(35)),f=a.n(p),g=a(17),h=a(10),v=a(67),b=a(5),y=a(131),E=a(319),w=a(36),O=a(28),x=a(132),j=a(142),N=a(133),C=a.n(N),k=a(134),S=function(e,t){return e||2===t},I=function(e){return e.map(function(e){var t=e.messages,a=Object(k.a)(e,["messages"]),n=function(e){return e.map(function(e){return JSON.stringify(e)}).reduce(function(e,t){return-1===e.indexOf(t)&&e.push(t),e},[]).map(function(e){return JSON.parse(e)})}(t),r=function(e){return e.reduce(function(e,t){var a=t.fatal,n=t.severity;return S(a,n)?e:e+1},0)}(n),s=function(e){return e.reduce(function(e,t){var a=t.fatal,n=t.severity;return S(a,n)?e+1:e},0)}(n);return Object(h.a)({},a,{messages:n,errorCount:s,warningCount:r})})},A={High:2,Medium:1},P=new C.a,L=function(e,t){var a;a=e.swcID?"https://smartcontractsecurity.github.io/SWC-registry/docs/"+e.swcID:"N/A";var n,r,s={fatal:!1,ruleId:e.swcID,ruleLink:a,message:"".concat(e.description.head),description:"".concat(e.description.tail),severity:A[e.severity]||1,mythXseverity:e.severity,line:-1,column:0,endLine:-1,endCol:0},i=P.getLinebreakPositions(t);if(e.locations.length){var o=function(e,t){var a=e.split(":"),n={length:parseInt(a[1],10),start:parseInt(a[0],10)},r=P.convertOffsetToLineColumn(n,t);return[r.start,r.end]}(e.locations[0].sourceMap.split(";")[0],i),c=Object(j.a)(o,2);n=c[0],r=c[1]}return n&&(s.line=n.line,s.column=n.column,s.endLine=r.line,s.endCol=r.column),s},z=function(e,t){var a=t.map(function(t){return function(e,t){var a=e.issues,n=e.sourceList,r={};for(var s in a.map(function(e){var a=function(e){if(e.locations.length){var t=/(\d+):(\d+):(\d+)/g.exec(e.locations[0].sourceMap);return t?t[3]:0}return 0}(e),s=n[a].replace(/^\//,"");r[s]||(r[s]={errorCount:0,warningCount:0,fixableErrorCount:0,fixableWarningCount:0,filePath:s,messages:[]});var i={error:"File not found"};t.sources[s]&&(i=L(e,t.sources[s].content)),r[s].messages.push(i)}),r)r.hasOwnProperty(s)&&(r[s].warningCount=r[s].messages.reduce(function(e,t){var a=t.fatal,n=t.severity;return S(a,n)?e:e+1},0),r[s].errorCount=r[s].messages.reduce(function(e,t){var a=t.fatal,n=t.severity;return S(a,n)?e+1:e},0));return Object.values(r)}(t,e)}).reduce(function(e,t){return e.concat(t)},[]);return I(a)};var M=function(e){var t=e.report,a=e.highlightIssue;return r.a.createElement(r.a.Fragment,null,t.message&&r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-success w-100",role:"alert"},t.message))),t.list&&r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},t.list.map(function(e,t){var n=e.errorCount+e.warningCount,s=function(e,t){return"".concat(e," ").concat(1===e?t:"".concat(t,"s"))};return r.a.createElement("div",{key:t,className:"border-bottom pt-2 pb-2"},r.a.createElement("div",{className:"text-truncate font-weight-bold"},e.filePath),e.messages.map(function(t,n){return r.a.createElement("div",{key:n,className:"pl-3"},t.error?r.a.createElement("div",{className:"alert alert-danger p-1"},t.error):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn ".concat(S(t.fatal,t.severity)?"btn-danger":"btn-warning"," text-left p-1 mb-1 w-100"),onClick:function(){a(e,t)}},r.a.createElement("span",{className:"pr-2"},"[".concat(t.line+1,":").concat(t.column,"]")),r.a.createElement("span",{title:"".concat(t.description),style:{cursor:"help"}},"".concat(t.message)),t.ruleId&&r.a.createElement("a",{href:t.ruleLink,className:"pl-1"},"[",t.ruleId,"]"))))}),!!n&&r.a.createElement("div",null,"\u2716 ".concat(s(n,"issue")," (").concat(s(e.errorCount,"error"),", ").concat(s(e.warningCount,"warning"),")")))}))))},_="remix-mythx-plugin",R={address:"0x0000000000000000000000000000000000000000",pwd:"trial"},T="Access token has expired or is invalid! Please login again.",D=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).analyze=Object(v.a)(f.a.mark(function e(){var t,n,r,s,i,o,c,l,u,m,d,p;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.address,r=t.pwd,s=t.compilation,i=t.analyses,o=t.reports,c=t.selected,l=new y.Client(n,r,"remythx"),e.next=4,a.login(l);case 4:return u=e.sent,a.setState({analyses:Object(h.a)({},i,Object(g.a)({},c,null)),isAnalyzig:!0,jwt:u}),e.next=8,a.props.client.editor.discardHighlight();case 8:return e.prev=8,m=a.getRequestData(),e.next=12,l.analyze(m);case 12:return d=e.sent,e.next=15,l.getDetectedIssues(d.uuid);case 15:p=e.sent,a.setState({analyses:Object(h.a)({},i,Object(g.a)({},c,p)),isAnalyzig:!1}),a.handleResult(s.source,p),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),a.setState({analyses:Object(h.a)({},i,Object(g.a)({},c,null)),reports:Object(h.a)({},o,Object(g.a)({},c,{list:[{messages:[{error:e.t0.message||e.t0}]}]})),isAnalyzig:!1});case 23:case"end":return e.stop()}},e,null,[[8,20]])})),a.login=function(e){var t=a.state.jwt;if(t)try{return e.loginWithToken(t),t}catch(n){if(n.message!==T)throw n}return e.login()};var n=localStorage.getItem(_)||"{}",r=JSON.parse(n),s=r.address||R.address;return a.state={address:s,pwd:r.pwd||R.pwd,jwt:null,compilation:{},selected:"",isAnalyzig:!1,analyses:{},reports:{},creadOpen:s===R.address,infoTooltipOpen:!1},a.init=a.init.bind(Object(b.a)(a)),a.login=a.login.bind(Object(b.a)(a)),a.saveCredentials=a.saveCredentials.bind(Object(b.a)(a)),a.analyze=a.analyze.bind(Object(b.a)(a)),a.getRequestData=a.getRequestData.bind(Object(b.a)(a)),a.handleResult=a.handleResult.bind(Object(b.a)(a)),a.getContractList=a.getContractList.bind(Object(b.a)(a)),a.highlightIssue=a.highlightIssue.bind(Object(b.a)(a)),a.init(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"init",value:function(){var e=this,t=this.props.client;t.solidity.getCompilationResult().then(function(t){if(t){var a=t.data,n=t.source;n&&e.setState({compilation:{target:n.target,source:n,data:a},selected:Object.keys(a.contracts[n.target])[0]})}}),t.on("solidity","compilationFinished",function(t,a,n,r){var s=Object.keys(r.contracts[t]);e.setState({compilation:{target:t,source:a,data:r},selected:s[0]})})}},{key:"saveCredentials",value:function(){var e=this.state,t=e.address,a=e.pwd;localStorage.setItem(_,JSON.stringify({address:t,pwd:a}))}},{key:"getRequestData",value:function(){var e=this.state,t=e.compilation,a=e.selected,n=t.data,r=void 0===n?{}:n,s=t.source,i=void 0===s?{}:s,o=r.contracts,c=void 0===o?[]:o,l=r.sources,u=void 0===l?{}:l,m=c[t.target],d=m[a].evm.bytecode,p=m[a].evm.deployedBytecode,f={contractName:a,bytecode:d.object,sourceMap:d.sourceMap,deployedBytecode:p.object,deployedSourceMap:p.sourceMap,analysisMode:"quick",mainSource:t.target,sourceList:Object.keys(i.sources),sources:{}};if(Object.keys(u).reduce(function(e,t){return e&&!!u[t].ast},!0))for(var g in i.sources)i.sources.hasOwnProperty(g)&&(f.sources[g]={ast:u[g].ast});else for(var h in i.sources)i.sources.hasOwnProperty(h)&&(f.sources[h]={source:i.sources[h].content});return f}},{key:"handleResult",value:function(e,t){var a=this.state,n=a.compilation,r=a.selected,s=a.reports,i=z(e,t);0===i.length?this.setState({reports:Object(h.a)({},s,Object(g.a)({},r,{message:"\u2714 No errors/warnings found in ".concat(n.target,"::").concat(r)}))}):this.setState({reports:Object(h.a)({},s,Object(g.a)({},r,{list:i}))})}},{key:"getContractList",value:function(){var e=this.state.compilation,t=e.data,a=(void 0===t?{}:t).contracts,n=(void 0===a?[]:a)[e.target]||{};return Object.keys(n).map(function(t){return{name:t,path:"".concat(e.target,"::").concat(t)}})}},{key:"highlightIssue",value:function(){var e=Object(v.a)(f.a.mark(function e(t,a){var n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={start:{line:a.line,column:a.column},end:{line:a.endLine,column:a.endCol}},r=1===a.severity?"#ffd300":"#ff0000",e.next=4,this.props.client.editor.highlight(n,t.filePath,r);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.compilation,n=t.selected,s=t.isAnalyzig,i=t.analyses,o=t.reports,c=t.creadOpen;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row border-bottom pb-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"btn btn-light btn-block text-left rounded-0 border-0",style:{cursor:"pointer"},onClick:function(){e.setState({creadOpen:!c})}},"Credentials",r.a.createElement(w.a,{className:"ml-2",icon:O.d,id:"cred_info"}),r.a.createElement(w.a,{icon:c?O.a:O.b,style:{position:"absolute",right:24,top:10}}),r.a.createElement(E.a,{placement:"right",isOpen:this.state.infoTooltipOpen,autohide:!1,target:"cred_info",toggle:function(){e.setState({infoTooltipOpen:!e.state.infoTooltipOpen})}},"In order to use MythX APIs you need to have credentials. You can use the trial credential, but analysis's result will be limited. In order to get credential you need to ",r.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer",className:"text-nowrap"},"sign up"))),r.a.createElement("div",{className:c?null:"collapse"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{type:"text",className:"form-control",id:"address","aria-describedby":"emailHelp",placeholder:"Address",onChange:function(t){return e.setState({address:t.target.value})},defaultValue:this.state.address})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pwd"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Password",onChange:function(t){return e.setState({pwd:t.target.value})},defaultValue:this.state.pwd})),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.saveCredentials},"Save"))))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},a.target?r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",defaultValue:n,onChange:function(t){return e.setState({selected:t.target.value})}},this.getContractList().map(function(e,t){return r.a.createElement("option",{key:t,value:e.name},e.path)}))),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.analyze,disabled:s},s?r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):r.a.createElement("span",null,"Analyze")),r.a.createElement(w.a,{className:"ml-2",icon:O.d,id:"analysis_info"}),r.a.createElement(E.a,{placement:"right",isOpen:this.state.analysisTooltipOpen,autohide:!0,target:"analysis_info",toggle:function(){e.setState({analysisTooltipOpen:!e.state.analysisTooltipOpen})}},"Analysis can take couple of minutes"),i[n]&&r.a.createElement(x.CopyToClipboard,{text:JSON.stringify(i[n])},r.a.createElement("button",{type:"button",className:"btn float-right",title:"Copy raw report to clipboard"},r.a.createElement(w.a,{className:"ml-2",icon:O.c}),r.a.createElement("span",{className:"pl-1"},"Raw report"))))):r.a.createElement("div",{className:"alert alert-warning w-100",role:"alert"},"You need to compile your contract first!"))),r.a.createElement(M,{report:o[n]||{},highlightIssue:this.highlightIssue}))}}]),t}(r.a.Component),F=a(70);var q=function(e){var t=e.isPlugin;return r.a.createElement("div",{className:"position-absolute text-center w-100 pb-1".concat(t?"":" text-white"),style:{fontSize:12,bottom:0}},r.a.createElement("a",{href:"https://github.com/aquiladev/remix-mythx-plugin/releases/tag/v".concat(F.version),target:"_block",rel:"noopener noreferrer"},"v",F.version)," | ",r.a.createElement("a",{href:"https://github.com/aquiladev/remix-mythx-plugin",target:"_blank",rel:"noopener noreferrer"},"GitHub")," | ",r.a.createElement("a",{href:"https://discord.gg/VhdtjCh",target:"_blank",rel:"noopener noreferrer"},"Get support"))},J=a(139),H=a.n(J),W=a(140),B=a.n(W),V=a(141),X=a.n(V);var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"h-100",style:{background:"#012A3E"}},r.a.createElement("div",{className:"d-flex align-items-end flex-column",style:{height:"50%"}},r.a.createElement("div",{className:"mt-auto pb-5 w-100"},r.a.createElement("h1",{className:"display-1 text-white",style:{textAlign:"center"}},"re:MythX"))),r.a.createElement("div",{className:"text-center pt-4"},r.a.createElement("a",{href:"https://remix.ethereum.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:H.a,alt:"remix",style:{height:120,width:120,verticalAlign:"top"}})),r.a.createElement("img",{src:X.a,alt:"plus",className:"pl-5 pr-5",style:{height:100,width:140}}),r.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:B.a,alt:"mythx",style:{height:130,width:180,verticalAlign:"top"}})))),r.a.createElement(q,{isPlugin:!1}))},Y={},$=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={plugin:!1};return(Y=Object(d.createIframeClient)({customApi:d.remixApi,devMode:{port:8080}})).onload(function(){a.setState({plugin:!0})}),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.plugin;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement("div",{style:{position:"relative",minHeight:"100vh"}},r.a.createElement("main",null,r.a.createElement(D,{client:Y})),r.a.createElement(q,{isPlugin:!0})):r.a.createElement(G,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e){e.exports={name:"remix-mythx-plugin",version:"0.1.2",private:!0,dependencies:{"@fortawesome/fontawesome-svg-core":"1.2.19","@fortawesome/free-solid-svg-icons":"5.9.0","@fortawesome/react-fontawesome":"0.1.4",bootstrap:"4.3.1",eslint:"5.16.0",mythxjs:"1.1.0",react:"^16.8.6","react-copy-to-clipboard":"5.0.1","react-dom":"^16.8.6","react-scripts":"3.0.1",reactstrap:"8.0.0","remix-lib":"0.4.6","remix-plugin":"0.0.2-alpha.7"},devDependencies:{"release-it":"12.3.0"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test",eject:"react-scripts eject",release:"release-it --no-npm.publish"},eslintConfig:{extends:"react-app"},browserslist:{production:[">0.2%","not dead","not op_mini all"],development:["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}}},[[143,1,2]]]);
//# sourceMappingURL=main.57770f35.chunk.js.map