(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/info.ab654d44.svg"},186:function(e,t,a){e.exports=a.p+"static/media/remix.0cc3e824.svg"},187:function(e,t,a){e.exports=a.p+"static/media/mythx.5fc6cc7c.png"},188:function(e,t,a){e.exports=a.p+"static/media/plus.bd770134.svg"},190:function(e,t,a){e.exports=a(459)},197:function(e,t,a){},216:function(e,t){},218:function(e,t){},250:function(e,t){},251:function(e,t){},321:function(e,t){},459:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(42),o=a.n(s),i=(a(197),a(71)),c=a(72),l=a(74),u=a(73),m=a(75),d=a(103),p=(a(198),a(33)),h=a.n(p),f=a(104),g=a(7),v=a(179),y=a.n(v),b=a(461),E=a(189),w=a(180),N=a.n(w),O=a(28),x=a(181),C=function(e,t){return e||2===t},k=function(e){return e.map(function(e){var t=e.messages,a=Object(x.a)(e,["messages"]),n=function(e){return e.map(function(e){return JSON.stringify(e)}).reduce(function(e,t){return-1===e.indexOf(t)&&e.push(t),e},[]).map(function(e){return JSON.parse(e)})}(t),r=function(e){return e.reduce(function(e,t){var a=t.fatal,n=t.severity;return C(a,n)?e:e+1},0)}(n),s=function(e){return e.reduce(function(e,t){var a=t.fatal,n=t.severity;return C(a,n)?e+1:e},0)}(n);return Object(O.a)({},a,{messages:n,errorCount:s,warningCount:r})})},j={High:2,Medium:1},S=new N.a,I=function(e,t){var a;a=e.swcID?"https://smartcontractsecurity.github.io/SWC-registry/docs/"+e.swcID:"N/A";var n,r,s={fatal:!1,ruleId:e.swcID,ruleLink:a,message:"".concat(e.description.head),description:"".concat(e.description.tail),severity:j[e.severity]||1,mythXseverity:e.severity,line:-1,column:0,endLine:-1,endCol:0},o=S.getLinebreakPositions(t);if(e.locations.length){var i=function(e,t){var a=e.split(":"),n={length:parseInt(a[1],10),start:parseInt(a[0],10)},r=S.convertOffsetToLineColumn(n,t);return[r.start,r.end]}(e.locations[0].sourceMap.split(";")[0],o),c=Object(E.a)(i,2);n=c[0],r=c[1]}return n&&(s.line=n.line,s.column=n.column,s.endLine=r.line,s.endCol=r.column),s},A=function(e,t){var a=t.map(function(t){return function(e,t){var a=e.issues,n=e.sourceList,r={};for(var s in a.map(function(e){var a=function(e){if(e.locations.length){var t=/(\d+):(\d+):(\d+)/g.exec(e.locations[0].sourceMap);return t?t[3]:0}return 0}(e),s=n[a].replace(/^\//,"");r[s]||(r[s]={errorCount:0,warningCount:0,fixableErrorCount:0,fixableWarningCount:0,filePath:s,messages:[]});var o={error:"Error: File not found"};t.sources[s]&&(o=I(e,t.sources[s].content)),r[s].messages.push(o)}),r)r.hasOwnProperty(s)&&(r[s].warningCount=r[s].messages.reduce(function(e,t){var a=t.fatal,n=t.severity;return C(a,n)?e:e+1},0),r[s].errorCount=r[s].messages.reduce(function(e,t){var a=t.fatal,n=t.severity;return C(a,n)?e+1:e},0));return Object.values(r)}(t,e)}).reduce(function(e,t){return e.concat(t)},[]);return k(a)};var L=function(e){var t=e.report,a=e.highlightIssue;return r.a.createElement(r.a.Fragment,null,t.message?r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-success w-100",role:"alert"},t.message))):null,t.list?r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},t.list.map(function(e,t){var n=e.errorCount+e.warningCount,s=function(e,t){return"".concat(e," ").concat(1===e?t:"".concat(t,"s"))};return r.a.createElement("div",{key:t,className:"border-bottom pt-2 pb-2"},r.a.createElement("div",{className:"text-truncate"},e.filePath),e.messages.map(function(t,n){return r.a.createElement("div",{key:n,className:"pl-3"},t.error?r.a.createElement(r.a.Fragment,null,t.error):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-link p-0 pr-1",onClick:function(){a(e,t)}},"[".concat(t.line+1,":").concat(t.column,"]")),r.a.createElement("span",{title:"".concat(t.description),style:{cursor:"help"}},"".concat(t.message)),t.ruleId?r.a.createElement("a",{href:t.ruleLink,className:"pl-1"},"[",t.ruleId,"]"):null))}),r.a.createElement("div",null,"\u2716 ".concat(s(n,"problem")," (").concat(s(e.errorCount,"error"),", ").concat(s(e.warningCount,"warning"),")")))}))):null)},z=a(105),M=a.n(z),P="remix-mythx-plugin",T={address:"0x0000000000000000000000000000000000000000",pwd:"trial"},_=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).analyze=Object(f.a)(h.a.mark(function e(){var t,n,r,s,o;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.address,r=t.pwd,s=t.compilation,o=new y.a.Client({ethAddress:n,password:r}),a.setState({analysis:{},error:"",isAnalyzig:!0}),e.next=5,a.props.client.editor.discardHighlight();case 5:o.analyzeWithStatus({data:a.getRequestData(),clientToolName:"remythx"},24e4,9e4).then(function(e){a.setState({analysis:e,error:"",isAnalyzig:!1});var t=e.issues;a.handleResult(s.source,t)}).catch(function(e){a.setState({error:e.message||e,analysis:{},isAnalyzig:!1})});case 6:case"end":return e.stop()}},e)}));var n=localStorage.getItem(P)||"{}",r=JSON.parse(n);return a.state={address:r.address||T.address,pwd:r.pwd||T.pwd,compilation:{},selected:"",isAnalyzig:!1,analysis:{},report:{},error:"",infoTooltipOpen:!1},a.saveCredentials=a.saveCredentials.bind(Object(g.a)(a)),a.analyze=a.analyze.bind(Object(g.a)(a)),a.getRequestData=a.getRequestData.bind(Object(g.a)(a)),a.handleResult=a.handleResult.bind(Object(g.a)(a)),a.getContractList=a.getContractList.bind(Object(g.a)(a)),a.highlightIssue=a.highlightIssue.bind(Object(g.a)(a)),a.props.client.on("solidity","compilationFinished",function(e,t,n,r){var s=Object.keys(r.contracts[e]);a.setState({compilation:{target:e,source:t,version:n,data:r},selected:s[0]})}),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"saveCredentials",value:function(){var e=this.state,t=e.address,a=e.pwd;localStorage.setItem(P,JSON.stringify({address:t,pwd:a}))}},{key:"getRequestData",value:function(){var e=this.state,t=e.compilation,a=e.selected,n=t.data,r=void 0===n?{}:n,s=t.source,o=void 0===s?{}:s,i=r.contracts,c=void 0===i?[]:i,l=c[t.target][a].evm.bytecode,u=c[t.target][a].evm.deployedBytecode,m={contractName:a,bytecode:l.object,sourceMap:l.sourceMap,deployedBytecode:u.object,deployedSourceMap:u.sourceMap,analysisMode:"quick",mainSource:t.target,sourceList:Object.keys(o.sources),sources:{}};for(var d in o.sources)o.sources.hasOwnProperty(d)&&(m.sources[d]={source:o.sources[d].content});return m}},{key:"handleResult",value:function(e,t){var a=this.state.compilation,n=A(e,t);0===n.length?this.setState({report:{message:"\u2714 No errors/warnings found in ".concat(a.target)}}):this.setState({report:{list:n}})}},{key:"getContractList",value:function(){var e=this.state.compilation,t=e.data,a=(void 0===t?{}:t).contracts,n=(void 0===a?[]:a)[e.target]||{};return Object.keys(n).map(function(t){return{name:t,path:"".concat(e.target,"::").concat(t)}})}},{key:"highlightIssue",value:function(){var e=Object(f.a)(h.a.mark(function e(t,a){var n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={start:{line:a.line,column:a.column},end:{line:a.endLine,column:a.endCol}},r=1===a.severity?"#ffd300":"#ff0000",e.next=4,this.props.client.editor.highlight(n,t.filePath,r);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.compilation,n=t.selected,s=t.isAnalyzig,o=t.error,i=t.report;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row border-bottom pb-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",null,"Credentials",r.a.createElement("img",{src:M.a,alt:"info",className:"pl-2",style:{height:18,width:26},id:"cred_info"}),r.a.createElement(b.a,{placement:"right",isOpen:this.state.infoTooltipOpen,autohide:!1,target:"cred_info",toggle:function(){e.setState({infoTooltipOpen:!e.state.infoTooltipOpen})}},"In order to use MythX APIs you need to have credentials. You can use the trial credential, but analysis's result will be limited. In order to get credential you need to ",r.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer",className:"text-nowrap"},"sign up"))),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{type:"text",className:"form-control",id:"address","aria-describedby":"emailHelp",placeholder:"Address",onChange:function(t){return e.setState({address:t.target.value})},defaultValue:this.state.address})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pwd"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Password",onChange:function(t){return e.setState({pwd:t.target.value})},defaultValue:this.state.pwd})),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.saveCredentials},"Save")))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},a.target?r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",defaultValue:n,onChange:function(t){return e.setState({selected:t.target.value})}},this.getContractList().map(function(e,t){return r.a.createElement("option",{key:t,value:e.name},e.path)}))),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.analyze,disabled:s},s?r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):r.a.createElement("span",null,"Analyze")),r.a.createElement("img",{src:M.a,alt:"info",className:"pl-2",style:{height:18,width:26},id:"analysis_info"}),r.a.createElement(b.a,{placement:"right",isOpen:this.state.analysisTooltipOpen,autohide:!0,target:"analysis_info",toggle:function(){e.setState({analysisTooltipOpen:!e.state.analysisTooltipOpen})}},"Analysis can take couple of minutes")):r.a.createElement("div",{className:"alert alert-warning w-100",role:"alert"},"You need to compile your contract first!"))),o?r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-danger w-100",role:"alert"},o))):null,r.a.createElement(L,{report:i,highlightIssue:this.highlightIssue}))}}]),t}(r.a.Component),F=a(186),R=a.n(F),D=a(187),q=a.n(D),J=a(188),B=a.n(J),W={},H=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={plugin:!1};return(W=Object(d.createIframeClient)({customApi:d.remixApi,devMode:{port:8080}})).onload(function(){a.setState({plugin:!0})}),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.plugin;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(_,{client:W}):r.a.createElement("div",{className:"h-100",style:{background:"#012A3E"}},r.a.createElement("div",{className:"d-flex align-items-end flex-column",style:{height:"50%"}},r.a.createElement("div",{className:"mt-auto pb-5 w-100"},r.a.createElement("h1",{className:"display-1 text-white",style:{textAlign:"center"}},"re:MythX"))),r.a.createElement("div",{className:"text-center pt-4"},r.a.createElement("a",{href:"https://remix.ethereum.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:R.a,alt:"remix",style:{height:120,width:120,verticalAlign:"top"}})),r.a.createElement("img",{src:B.a,alt:"plus",className:"pl-5 pr-5",style:{height:100,width:140}}),r.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:q.a,alt:"mythx",style:{height:130,width:180,verticalAlign:"top"}})))),r.a.createElement("div",{className:"fixed-bottom text-center pb-1".concat(e?null:" text-white"),style:{fontSize:12}},"\xa9 Sergii Bomko, 2019 | ",r.a.createElement("a",{href:"https://github.com/aquiladev/remix-mythx-plugin",target:"_blank",rel:"noopener noreferrer"},"GitHub")," | ",r.a.createElement("a",{href:"https://discord.gg/VhdtjCh",target:"_blank",rel:"noopener noreferrer"},"Get support")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[190,1,2]]]);
//# sourceMappingURL=main.84e8caff.chunk.js.map