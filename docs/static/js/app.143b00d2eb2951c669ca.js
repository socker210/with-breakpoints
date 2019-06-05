!function(e){function n(n){for(var r,o,a=n[0],i=n[1],d=n[2],c=n[3]||[],s=0,u=[];s<a.length;s++)o=a[s],z[o]&&u.push(z[o][0]),z[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(B&&B(n),S.push.apply(S,c);u.length;)u.shift()();return H.push.apply(H,d||[]),t()}function t(){for(var e,n=0;n<H.length;n++){for(var t=H[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==z[a]&&(r=!1)}r&&(H.splice(n--,1),e=I(I.s=t[0]))}return 0===H.length&&(S.forEach(function(e){if(void 0===z[e]){z[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",I.nc&&n.setAttribute("nonce",I.nc),n.rel="prefetch",n.as="script",n.href=q(e),document.head.appendChild(n)}}),S.length=0),e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!k[e]||!x[e])return;for(var t in x[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0===--y&&0===b&&_()}(e,n),r&&r(e,n)};var o,a=!0,i="143b00d2eb2951c669ca",d=1e4,c={},s=[],u=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:O,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:c[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,v,g,y=0,b=0,w={},x={},k={};function j(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(n=d,n=n||1e4,new Promise(function(e,t){if("undefined"===typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=I.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(a){return t(a)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(a){return void t(a)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;x={},w={},k=e.c,g=e.h,h("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var t in v={},z)E(t);return"prepare"===f&&0===b&&0===y&&_(),n});var n}function E(e){k[e]?(x[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=I.p+""+e+"."+i+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):w[e]=!0}function _(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return P(a)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(j(t));e.resolve(n)}}function P(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,o,a,d;function u(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,d=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var c=0;c<a.parents.length;c++){var s=a.parents[c],u=D[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(u.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),l(t[s],[i])):(delete t[s],n.push(s),r.push({chain:d.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var p={},m=[],y={},b=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var x;d=j(w);var O=!1,E=!1,_=!1,P="";switch((x=v[w]?u(d):{type:"disposed",moduleId:w}).chain&&(P="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(O=new Error("Aborted because of self decline: "+x.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(x),n.ignoreUnaccepted||(O=new Error("Aborted because "+d+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(x),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(x),_=!0;break;default:throw new Error("Unexception type "+x.type)}if(O)return h("abort"),Promise.reject(O);if(E)for(d in y[d]=v[d],l(m,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,d)&&(p[d]||(p[d]=[]),l(p[d],x.outdatedDependencies[d]));_&&(l(m,[x.moduleId]),y[d]=b)}var H,S=[];for(r=0;r<m.length;r++)d=m[r],D[d]&&D[d].hot._selfAccepted&&S.push({module:d,errorHandler:D[d].hot._selfAccepted});h("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&function(e){delete z[e]}(e)});for(var q,M,A=m.slice();A.length>0;)if(d=A.pop(),a=D[d]){var U={},B=a.hot._disposeHandlers;for(o=0;o<B.length;o++)(t=B[o])(U);for(c[d]=U,a.hot.active=!1,delete D[d],delete p[d],o=0;o<a.children.length;o++){var C=D[a.children[o]];C&&((H=C.parents.indexOf(d))>=0&&C.parents.splice(H,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(a=D[d]))for(M=p[d],o=0;o<M.length;o++)q=M[o],(H=a.children.indexOf(q))>=0&&a.children.splice(H,1);for(d in h("apply"),i=g,y)Object.prototype.hasOwnProperty.call(y,d)&&(e[d]=y[d]);var G=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(a=D[d])){M=p[d];var T=[];for(r=0;r<M.length;r++)if(q=M[r],t=a.hot._acceptedDependencies[q]){if(-1!==T.indexOf(t))continue;T.push(t)}for(r=0;r<T.length;r++){t=T[r];try{t(M)}catch(L){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:M[r],error:L}),n.ignoreErrored||G||(G=L)}}}for(r=0;r<S.length;r++){var R=S[r];d=R.module,s=[d];try{I(d)}catch(L){if("function"===typeof R.errorHandler)try{R.errorHandler(L)}catch(N){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:N,originalError:L}),n.ignoreErrored||G||(G=N),G||(G=L)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:L}),n.ignoreErrored||G||(G=L)}}return G?(h("fail"),Promise.reject(G)):(h("idle"),new Promise(function(e){e(m)}))}var D={},z={1:0},H=[],S=[];function q(e){return I.p+"static/js/"+({2:"docz-examples",3:"docz-getting-started"}[e]||e)+"."+{2:"f5101701",3:"fffe205d"}[e]+".js"}function I(n){if(D[n])return D[n].exports;var t=D[n]={i:n,l:!1,exports:{},hot:l(n),parents:(u=s,s=[],u),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=D[e];if(!n)return I;var t=function(t){return n.hot.active?(D[t]?-1===D[t].parents.indexOf(e)&&D[t].parents.push(e):(s=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),I(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(n){I[e]=n}}};for(var a in I)Object.prototype.hasOwnProperty.call(I,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(t,a,r(a));return t.e=function(e){return"ready"===f&&h("prepare"),b++,I.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===f&&(w[e]||E(e),0===b&&0===y&&_())}},t.t=function(e,n){return 1&n&&(e=t(e)),I.t(e,-2&n)},t}(n)),t.l=!0,t.exports}I.e=function(e){var n=[],t=z[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=z[e]=[n,r]});n.push(t[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,I.nc&&a.setAttribute("nonce",I.nc),a.src=q(e),0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous");var i=new Error;o=function(n){a.onerror=a.onload=null,clearTimeout(d);var t=z[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.type=r,i.request=o,t[1](i)}z[e]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(n)},I.m=e,I.c=D,I.d=function(e,n,t){I.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},I.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,n){if(1&n&&(e=I(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(I.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)I.d(t,r,function(n){return e[n]}.bind(null,r));return t},I.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(n,"a",n),n},I.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},I.p="/",I.oe=function(e){throw console.error(e),e},I.h=function(){return i};var M=window.webpackJsonp=window.webpackJsonp||[],A=M.push.bind(M);M.push=n,M=M.slice();for(var U=0;U<M.length;U++)n(M[U]);var B=A,C=(H.push([0,0]),t());n([[],{},0,[0,2,3]])}({"./.docz/app/db.json":function(e){e.exports={config:{title:"with-breakponts",description:"CSS media queries in react, for build a responsive design as you want",menu:["Getting started","Examples"],version:"1.0.0",repository:"https://github.com/socker210/with-breakpoints",native:!1,codeSandbox:!0,themeConfig:{},separator:"-",indexHtml:"/Users/junyongpark/Documents/Programming/Workspace/with-breakpoints/docz/index.html",dest:"docs",host:"0.0.0.0",port:3003},props:[{key:"src/Breakpoint.jsx",value:[{description:"",displayName:"Breakpoint",methods:[{name:"updateMatches",docblock:null,modifiers:[],params:[{name:"{ matches }",type:null}],returns:null}],actualName:"Breakpoint",props:{mq:{type:{name:"union",value:[{name:"string"},{name:"object"},{name:"array"}]},required:!1,description:"",defaultValue:{value:"'all'",computed:!1}},onChange:{type:{name:"func"},required:!1,description:""},defaultMatches:{type:{name:"bool"},required:!1,description:"",defaultValue:{value:"true",computed:!1}}}}]}],entries:[{key:"docz/Examples.mdx",value:{name:"Examples",route:"/examples",id:"0921d783d4f5e9fcbe3e80cfe6bd76ca",filepath:"docz/Examples.mdx",link:"https://github.com/socker210/with-breakpoints/edit/master/docz/Examples.mdx",slug:"docz-examples",menu:"",headings:[{slug:"examples",depth:1,value:"Examples"},{slug:"breakpoint",depth:2,value:"Breakpoint"},{slug:"basic-usage",depth:3,value:"Basic usage"},{slug:"render-child-with-function",depth:3,value:"Render child with function"},{slug:"pass-mq-as-an-object",depth:3,value:"Pass mq as an object"},{slug:"onchange-event",depth:3,value:"onChange event"},{slug:"withbreakpoints",depth:2,value:"withBreakpoints"},{slug:"basic-usage-1",depth:3,value:"Basic usage"},{slug:"pass-mq-as-an-object-1",depth:3,value:"Pass mq as an object"}]}},{key:"docz/GettingStarted.mdx",value:{name:"Getting started",route:"/",id:"c3fbfe7813c7d5d7552f58d926e1382a",filepath:"docz/GettingStarted.mdx",link:"https://github.com/socker210/with-breakpoints/edit/master/docz/GettingStarted.mdx",slug:"docz-getting-started",menu:"",headings:[{slug:"with-breakpoints",depth:1,value:"with-breakpoints"},{slug:"installation",depth:2,value:"Installation"},{slug:"usage",depth:2,value:"Usage"},{slug:"using-a-react-component",depth:3,value:"Using a react component"},{slug:"using-a-hoc",depth:3,value:"Using a HOC"},{slug:"props",depth:2,value:"Props"},{slug:"breakpoint",depth:3,value:"Breakpoint"},{slug:"withbreakpoints",depth:3,value:"withBreakpoints"},{slug:"license",depth:2,value:"License"}]}}]}},"./.docz/app/index.jsx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),a=t("./node_modules/react-dom/index.js"),i=t.n(a),d=t("./node_modules/docz/dist/index.esm.js"),c=t("./node_modules/docz-theme-default/dist/index.esm.js"),s={"docz/Examples.mdx":function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"./docz/Examples.mdx"))},"docz/GettingStarted.mdx":function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"./docz/GettingStarted.mdx"))}},u=t("./.docz/app/db.json"),l=function(){return o.a.createElement(c.a,{linkComponent:d.b,db:u},o.a.createElement(d.d,{imports:s}))},p=[],f=[],h=function(){return f.forEach(function(e){return e&&e()})},m=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;p.forEach(function(e){return e&&e()}),i.a.render(o.a.createElement(e,null),m,h)}(l)},0:function(e,n,t){e.exports=t("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.143b00d2eb2951c669ca.js.map