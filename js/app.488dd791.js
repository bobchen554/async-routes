(function(t){function e(e){for(var n,i,p=e[0],s=e[1],u=e[2],l=0,f=[];l<p.length;l++)i=p[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,p=1;p<r.length;p++){var s=r[p];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],s=p.push.bind(p);p.push=e,p=p.slice();for(var u=0;u<p.length;u++)e(p[u]);var c=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("1080"),a=r.n(n);a.a},1080:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("8bbf"),a=r.n(n),o=r("823a"),i=r.n(o),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},t._l(t.routes,(function(e){return r("router-link",{key:e.name,staticClass:"link",class:{active:e.isActive},attrs:{to:e.name}},[t._v(t._s(e.title))])})),1),r("router-view"),r("vue-progress-bar")],1)},s=[],u={name:"entry-application",data(){return{routes:[{name:"/app-typescript",title:"app-typescript"},{name:"/app-javascript",title:"app-javascript"}]}},watch:{$route({path:t}){if("undefined"===typeof t)return;const e=this.routes.find(t=>t.isActive);e&&(e.isActive=!1);const r=this.routes.find(({name:e})=>t.startsWith(e));r&&(r.isActive=!0)}}},c=u,l=(r("034f"),r("2be6")),f=Object(l["a"])(c,p,s,!1,null,null,null),d=f.exports,h=r("5f2b");const v={"app-typescript":"./app-typescript/main.js","app-javascript":"./app-javascript/main.js"};a.a.use(h["a"]);const y=new h["a"]({routes:[{path:"/",redirect:"/app-typescript"},{path:"/404",component:{name:"not-found",template:"<h1>Not Found</h1>"}}]}),b=new Set,m=t=>new Promise(e=>void setTimeout(e,t));y.beforeEach(async(t,e,r)=>{console.log("entry:",t.path,e.path);const[,n]=t.path.split("/");if(Reflect.has(v,n))if(b.has(n))r();else{a.a.prototype.$Progress.start();const{default:e}=await window.System.import(v[n]);console.log("load application:",e),e&&e.routes&&y.addRoutes(e.routes),e&&e.beforeEach&&y.beforeEach((t,r,a)=>{n===t.path.split("/")[1]?e.beforeEach(t,r,a):a()}),e&&e.init&&await e.init({}),await m(300),b.add(n),a.a.prototype.$Progress.finish(),r(t.path)}else t.matched.length?r():r("/404")});var w=y,g=r("9ce4");a.a.use(g["a"]);var j=new g["a"].Store({state:{name:"entry-application"},mutations:{},actions:{}});a.a.config.productionTip=!1,a.a.use(i.a),Reflect.defineProperty(a.a,"__share_pool__",{value:{store:j,router:w}}),new a.a({router:w,store:j,render:function(t){return t(d)}}).$mount("#app")},"8bbf":function(t,e){t.exports=Vue}});