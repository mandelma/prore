(function(){"use strict";var e={1331:function(e,n,t){var o=t(9242),r=t(3396);function a(e,n,t,o,a,i){const l=(0,r.up)("MDBNavbarBrand"),u=(0,r.up)("MDBNavbarToggler"),s=(0,r.up)("router-link"),d=(0,r.up)("MDBNavbarItem"),c=(0,r.up)("MDBNavbarNav"),p=(0,r.up)("MDBCollapse"),f=(0,r.up)("MDBIcon"),m=(0,r.up)("MDBBadge"),g=(0,r.up)("MDBDropdownToggle"),h=(0,r.up)("MDBDropdownItem"),v=(0,r.up)("MDBDropdownMenu"),w=(0,r.up)("MDBDropdown"),b=(0,r.up)("MDBNavbar"),y=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(b,{style:{position:"relative","z-index":"1"},container:"",expand:"xl",bg:"light",class:"d-flex justify-content-between"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Uk)(" Pro Connections ")])),_:1}),(0,r.Wm)(u,{right:"",target:"#navbarColor01",onClick:n[0]||(n[0]=e=>o.collapse7=!o.collapse7)}),(0,r.Wm)(p,{id:"navbarColor01",modelValue:o.collapse7,"onUpdate:modelValue":n[5]||(n[5]=e=>o.collapse7=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{center:"",class:"mb-2 mb-lg-0"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{href:"#",linkClass:"link-secondary"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{to:"/",onClick:n[1]||(n[1]=e=>o.collapse7=!o.collapse7)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Etusivu ")])),_:1})])),_:1}),(0,r.Wm)(d,{href:"#",linkClass:"link-secondary"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{to:"/",onClick:n[3]||(n[3]=e=>o.collapse7=!o.collapse7)},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{to:"/map",onClick:n[2]||(n[2]=e=>o.collapse7=!1)},{default:(0,r.w5)((()=>[(0,r.Uk)("Map")])),_:1})])),_:1})])),_:1}),(0,r.Wm)(d,{href:"#",linkClass:"link-secondary"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{to:"/location",onClick:n[4]||(n[4]=e=>o.collapse7=!1)},{default:(0,r.w5)((()=>[(0,r.Uk)("Location")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),void 0===a.loggedUser.token?((0,r.wg)(),(0,r.j4)(c,{key:0,right:"",class:"mb-2 mb-lg-0 d-flex flex-row"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{to:"/login",onClick:n[6]||(n[6]=e=>o.collapse7=!1)},{default:(0,r.w5)((()=>[(0,r.Uk)("Kirjaudu")])),_:1})])),_:1})])),_:1})):((0,r.wg)(),(0,r.j4)(c,{key:1,right:"",class:"mb-2 mb-lg-0 d-flex flex-row"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{to:"#",class:"me-3 me-lg-0",linkClass:"link-secondary"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{icon:"bell"}),(0,r.Wm)(m,{notification:"",color:"danger",pill:""},{default:(0,r.w5)((()=>[(0,r.Uk)("1")])),_:1})])),_:1}),(0,r.Wm)(w,{modelValue:o.dropdown3,"onUpdate:modelValue":n[8]||(n[8]=e=>o.dropdown3=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{tag:"a",class:"nav-link",onClick:n[7]||(n[7]=e=>o.dropdown3=!o.dropdown3)},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{icon:"user"})])),_:1}),(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,{href:"#",onClick:i.handleLogOut},{default:(0,r.w5)((()=>[(0,r.Uk)("Log out")])),_:1},8,["onClick"]),(0,r.Wm)(h,{href:"#"},{default:(0,r.w5)((()=>[(0,r.Uk)("Another Action")])),_:1}),(0,r.Wm)(h,{href:"#"},{default:(0,r.w5)((()=>[(0,r.Uk)("Something else here")])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}))])),_:1}),(0,r.Wm)(y,{"onLogin:data":i.handleLogin,"onRegister:data":i.createUser},null,8,["onLogin:data","onRegister:data"])],64)}t(7658);const i=t(7218),l="/api/users",u=async()=>{const e=await i.get(l);return e.data},s=async e=>{const n=await i.post(`${l}`,e);return n.data};var d={getAll:u,addUser:s};const c=t(7218),p="/api/login",f=async e=>{const n=await c.post(p,e);return n.data};var m={login:f},g=t(4313),h=t(4870),v={name:"App",components:{MDBNavbar:g.A0,MDBCollapse:g.Eq,MDBNavbarItem:g.V$,MDBNavbarBrand:g.JI,MDBNavbarNav:g.T2,MDBNavbarToggler:g.$Y,MDBBadge:g.m_,MDBIcon:g.vm,MDBDropdown:g.H6,MDBDropdownToggle:g.CU,MDBDropdownMenu:g.Ed,MDBDropdownItem:g.i2},data(){return{users:[],loggedUser:""}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const n=JSON.parse(e);this.loggedUser=n,console.log("User token: "+this.loggedUser.token),console.log("User id: "+this.loggedUser.id)}},setup(){const e=(0,h.iH)(!1),n=(0,h.iH)(!1);return{collapse7:e,dropdown3:n}},methods:{async getUsers(){this.users=await d.getAll()},async createUser(e){console.log("User name is here: "+e.firstName),await d.addUser(e);const n=await m.login({username:e.username,password:e.password});window.localStorage.setItem("loggedAppUser",JSON.stringify(n)),this.loggedUser=n,this.$router.push("/")},async handleLogin(e){let n;console.log("userdata: "+e.username),""!==e.username&&""!==e.password&&(n=await m.login(e),window.localStorage.setItem("loggedAppUser",JSON.stringify(n)),this.loggedUser=n)},handleLogOut(){window.localStorage.removeItem("loggedAppUser"),this.loginUser="",location.reload()},runEveryMinite(){alert("The minute has passed!!")}}},w=t(89);const b=(0,w.Z)(v,[["render",a]]);var y=b,k=t(2483);const D=[{path:"/",name:"dash-board",component:()=>t.e(737).then(t.bind(t,737))},{path:"/register",name:"app-register",component:()=>t.e(219).then(t.bind(t,4219))},{path:"/login",name:"login-register",component:()=>t.e(626).then(t.bind(t,9626))},{path:"/recipient-form",name:"recipient-form",component:()=>t.e(295).then(t.bind(t,2295)),beforeEnter:async(e,n,t)=>{const o=window.localStorage.getItem("loggedAppUser");if(!o)return t("/login");t()}},{path:"/provider-public",name:"provider-public",component:()=>t.e(14).then(t.bind(t,4014))},{path:"/provider-form",name:"provider-form",component:()=>Promise.all([t.e(502),t.e(809)]).then(t.bind(t,7809))},{path:"/provided",name:"provider-panel",component:()=>t.e(572).then(t.bind(t,8572))},{path:"/received",name:"recipient-panel",component:()=>t.e(93).then(t.bind(t,1093))},{path:"/location",name:"user-location",component:()=>Promise.all([t.e(502),t.e(83)]).then(t.bind(t,6083))}],U=(0,k.p7)({history:(0,k.r5)(),routes:D});var _=U,B=t(6725);(0,o.ri)(y).component("VueDatePicker",B.Z),(0,o.ri)(y).use(_).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var l=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{14:"f5991d39",83:"efa675ae",93:"9a550a9d",219:"b369a084",295:"3d5eaeb3",502:"b11378ab",572:"2f234e22",626:"fedbef49",737:"761cc2e8",809:"a9305738"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{14:"d7faaec0",83:"d7faaec0",219:"e8db4f9f",626:"3489c66b",809:"23da6e3e"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="prore-mongo:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var l,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==n+a){l=c;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+a),l.src=o),e[o]=[r];var p=function(n,t){l.onerror=l.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var i=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,a.parentNode&&a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),l=t.p+i;if(n(i,l))return r();e(o,l,null,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={14:1,83:1,219:1,626:1,809:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),l=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],l=o[1],u=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(u)var d=u(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},o=self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1331)}));o=t.O(o)})();
//# sourceMappingURL=app.3ab6bd6f.js.map