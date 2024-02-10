"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[434,798],{5118:function(e,s,r){var t=r(3396);const a=({message:e})=>null===e?null:(0,t.Wm)("div",{className:"error"},[e]);s.Z=a},4798:function(e,s,r){r.r(s),r.d(s,{default:function(){return w}});var t=r(3396),a=r(9242);const i=e=>((0,t.dD)("data-v-f0c9b7ac"),e=e(),(0,t.Cn)(),e),o=i((()=>(0,t._)("h2",{style:{"margin-top":"50px","text-align":"center"}},"- Rekisteröintilomake -",-1))),l={class:"text-center"},n=i((()=>(0,t._)("p",null,"Tai registeröidy käyttämällä:",-1)));function m(e,s,r,i,m,u){const g=(0,t.up)("registerError"),d=(0,t.up)("MDBInput"),c=(0,t.up)("MDBCheckbox"),p=(0,t.up)("MDBBtn"),f=(0,t.up)("MDBIcon"),h=(0,t.up)("MDBContainer");return(0,t.wg)(),(0,t.iD)("div",null,[o,(0,t.Wm)(h,{style:{"margin-top":"50px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{message:m.registerErrorMessage},null,8,["message"]),(0,t.Wm)(g,{message:m.usernameExisting},null,8,["message"]),(0,t._)("form",{onSubmit:s[6]||(s[6]=(0,a.iM)(((...e)=>u.userData&&u.userData(...e)),["prevent"]))},[(0,t.Wm)(d,{type:"text",size:"lg",label:"Etunimi",id:"registerFirstName",modelValue:i.registerFirstName,"onUpdate:modelValue":s[0]||(s[0]=e=>i.registerFirstName=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(d,{type:"text",size:"lg",label:"Sukunimi",id:"registerLastName",modelValue:i.registerLastName,"onUpdate:modelValue":s[1]||(s[1]=e=>i.registerLastName=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(d,{type:"text",size:"lg",label:"käyttäjätunnus",id:"registerUsername",modelValue:i.registerUsername,"onUpdate:modelValue":s[2]||(s[2]=e=>i.registerUsername=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(d,{type:"password",size:"lg",label:"Salasana",id:"registerPassword",modelValue:i.registerPassword,"onUpdate:modelValue":s[3]||(s[3]=e=>i.registerPassword=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(d,{type:"password",size:"lg",label:"Toista salasana",id:"registerPasswordRepeat",modelValue:i.registerPasswordRepeat,"onUpdate:modelValue":s[4]||(s[4]=e=>i.registerPasswordRepeat=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(c,{label:"Muista minut",size:"lg",id:"registerSubscribeCheck",modelValue:i.registerSubscribeCheck,"onUpdate:modelValue":s[5]||(s[5]=e=>i.registerSubscribeCheck=e),wrapperClass:"d-flex justify-content-center mb-4"},null,8,["modelValue"]),(0,t.Wm)(p,{outline:"primary",size:"lg",type:"submit",block:"",class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Luo tili ")])),_:1}),(0,t._)("div",l,[n,(0,t.Wm)(p,{color:"secondary",floating:"",class:"mx-1"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{iconStyle:"fab",icon:"facebook-f"}),(0,t.Uk)("> ")])),_:1}),(0,t.Wm)(p,{color:"secondary",floating:"",class:"mx-1"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{iconStyle:"fab",icon:"google"})])),_:1}),(0,t.Wm)(p,{color:"secondary",floating:"",class:"mx-1"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{iconStyle:"fab",icon:"twitter"})])),_:1})])],32)])),_:1})])}var u=r(4313),g=r(4870),d=r(1478),c=r(6823),p=r(5118),f={name:"app-register",components:{registerError:p.Z,MDBContainer:u.L5,MDBInput:u.u2,MDBCheckbox:u.IH,MDBBtn:u.$v,MDBIcon:u.vm},data(){return{registerErrorMessage:null,usernameExisting:null}},setup(){const e=(0,g.iH)(""),s=(0,g.iH)(""),r=(0,g.iH)(""),t=(0,g.iH)(""),a=(0,g.iH)(""),i=(0,g.iH)(!0);return{registerLastName:s,registerFirstName:e,registerUsername:r,registerPassword:t,registerPasswordRepeat:a,registerSubscribeCheck:i}},methods:{async userData(){const e={firstName:this.registerFirstName,lastName:this.registerLastName,username:this.registerUsername,password:this.registerPassword};if(""!==this.registerFirstName&&""!==this.registerLastName&&""!==this.registerUsername&&""!==this.registerPassword)if(this.registerUsername.length<4)this.registerErrorMessage="Username must be longer than 4 characters!",setTimeout((()=>{this.registerErrorMessage=null}),2e3);else{console.log("Uus kasutaja");const s=await d.Z.addUser(e);if("username existing"===s.error)this.usernameExisting="Käyttäjätunnus on jo olemassa! Vaihda käyttäjätunnus",setTimeout((()=>{this.usernameExisting=null}),2e3);else{const e=await c.Z.login({username:this.registerUsername,password:this.registerPassword});"login error"!==e.error&&this.$emit("register:data",e)}}else this.registerErrorMessage="All fields must be filled!",setTimeout((()=>{this.registerErrorMessage=null}),2e3)}}},h=r(89);const b=(0,h.Z)(f,[["render",m],["__scopeId","data-v-f0c9b7ac"]]);var w=b},7434:function(e,s,r){r.r(s),r.d(s,{default:function(){return _}});var t=r(3396);const a={key:0},i={key:1};function o(e,s,r,o,l,n){const m=(0,t.up)("MDBTabItem"),u=(0,t.up)("MDBTabNav"),g=(0,t.up)("MDBTabs"),d=(0,t.up)("Register"),c=(0,t.up)("Login"),p=(0,t.up)("MDBContainer");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(p,{style:{"margin-top":"50px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{modelValue:o.form7ActiveTab,"onUpdate:modelValue":s[0]||(s[0]=e=>o.form7ActiveTab=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{pills:"",justify:"",tabsClasses:"mb-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{onClick:n.pressLoginTab,tabId:"ex3-1",href:"ex3-1"},{default:(0,t.w5)((()=>[(0,t.Uk)("Kirjaudu")])),_:1},8,["onClick"]),(0,t.Wm)(m,{onClick:n.pressRegisterTab,tabId:"ex3-2",href:"ex3-2"},{default:(0,t.w5)((()=>[(0,t.Uk)("Registeröidy")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["modelValue"]),l.isRegister?((0,t.wg)(),(0,t.iD)("div",a,[(0,t.Wm)(d,{"onRegister:data":n.handleRegister},null,8,["onRegister:data"])])):((0,t.wg)(),(0,t.iD)("div",i,[(0,t.Wm)(c,{"onLogin:data":n.userControl},null,8,["onLogin:data"])]))])),_:1})])}r(7658);var l=r(9242);const n=e=>((0,t.dD)("data-v-60ce21f0"),e=e(),(0,t.Cn)(),e),m={class:"text-center mb-3"},u=n((()=>(0,t._)("p",null,"Kirjaudu käyttämällä:",-1))),g=n((()=>(0,t._)("p",{class:"text-center"},"tai:",-1))),d=n((()=>(0,t._)("a",{href:"#!"},"Unohtuiko salasana?",-1))),c={class:"text-center"};function p(e,s,r,a,i,o){const n=(0,t.up)("loginError"),p=(0,t.up)("MDBIcon"),f=(0,t.up)("MDBBtn"),h=(0,t.up)("MDBInput"),b=(0,t.up)("MDBCheckbox"),w=(0,t.up)("MDBCol"),k=(0,t.up)("MDBRow");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(n,{message:a.loginErrorMessage},null,8,["message"]),(0,t._)("form",{onSubmit:s[4]||(s[4]=(0,l.iM)(((...e)=>o.userLoginData&&o.userLoginData(...e)),["prevent"]))},[(0,t._)("div",m,[u,(0,t.Wm)(f,{color:"secondary",floating:"",class:"mx-1"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{iconStyle:"fab",icon:"facebook-f"}),(0,t.Uk)("> ")])),_:1}),(0,t.Wm)(f,{color:"secondary",floating:"",class:"mx-1"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{iconStyle:"fab",icon:"google"})])),_:1}),(0,t.Wm)(f,{color:"secondary",floating:"",class:"mx-1"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{iconStyle:"fab",icon:"twitter"})])),_:1}),(0,t.Wm)(f,{color:"secondary",floating:"",class:"mx-1"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{iconStyle:"fab",icon:"github"})])),_:1})]),g,(0,t.Wm)(h,{type:"text",size:"lg",label:"Käyttäjätunnus",id:"loginUsername",modelValue:a.loginUsername,"onUpdate:modelValue":s[0]||(s[0]=e=>a.loginUsername=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(h,{type:"password",size:"lg",label:"Salasana",id:"loginPassword",modelValue:a.loginPassword,"onUpdate:modelValue":s[1]||(s[1]=e=>a.loginPassword=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(k,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{class:"d-flex justify-content-center"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{label:"Muista minut",id:"loginCheck",modelValue:a.loginCheck,"onUpdate:modelValue":s[2]||(s[2]=e=>a.loginCheck=e),wrapperClass:"mb-3 mb-md-0"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[d])),_:1})])),_:1}),(0,t.Wm)(f,{color:"primary",size:"lg",type:"submit",block:"",class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Kirjaudu ")])),_:1}),(0,t._)("div",c,[(0,t._)("p",null,[(0,t.Uk)("Ei jäsen? "),(0,t._)("span",{id:"reg",onClick:s[3]||(s[3]=e=>this.$router.push("/register")),style:{cursor:"pointer"}},"rekisteröidy")])])],32)])}var f=r(4313),h=r(4870),b=r(6823),w=r(5118),k={name:"login-form",components:{loginError:w.Z,MDBInput:f.u2,MDBCheckbox:f.IH,MDBBtn:f.$v,MDBRow:f.uZ,MDBCol:f.TK,MDBIcon:f.vm},setup(){const e=(0,h.iH)(""),s=(0,h.iH)(""),r=(0,h.iH)(!0),t=(0,h.iH)(null);return{loginUsername:e,loginPassword:s,loginCheck:r,loginErrorMessage:t}},methods:{async userLoginData(){let e;const s={username:this.loginUsername,password:this.loginPassword};""!==this.loginUsername&&""!==this.loginPassword?(e=await b.Z.login(s),"login error"!==e.error?(console.log("User logged in"),this.$emit("login:data",e)):(console.log("No user logged in"),this.loginError="Väärä Käyttäjätunnus tai salasana!",this.loginErrorMessage="Väärä Käyttäjätunnus tai salasana!",setTimeout((()=>{this.loginErrorMessage=null}),2e3))):(console.log("Mingi väli on tühi!!"),this.loginErrorMessage="kaikki kentät on täytettävä!",setTimeout((()=>{this.loginErrorMessage=null}),2e3)),this.emptyLoginFields()},emptyLoginFields(){this.loginUsername="",this.loginPassword="",this.loginCheck=!1}}},y=r(89);const M=(0,y.Z)(k,[["render",p],["__scopeId","data-v-60ce21f0"]]);var D=M,C=r(4798),W={name:"login-register",components:{Login:D,Register:C["default"],MDBContainer:f.L5,MDBTabs:f.zk,MDBTabNav:f.JH,MDBTabItem:f.kX},setup(){const e=(0,h.iH)("ex3-1"),s=(0,h.iH)(""),r=(0,h.iH)(""),t=(0,h.iH)(!0),a=(0,h.iH)(""),i=(0,h.iH)(""),o=(0,h.iH)(""),l=(0,h.iH)(""),n=(0,h.iH)(""),m=(0,h.iH)(!0);return{form7ActiveTab:e,form2Username:s,form2Password:r,form7LoginCheck:t,form7RegisterName:a,form7RegisterUsername:i,form7RegisterEmail:o,form7RegisterPassword:l,form7RegisterPasswordRepeat:n,form7RegisterTermsCheck:m}},data(){return{isLogin:!0,isRegister:!1}},mounted(){this.isLogin=!0},methods:{pressLoginTab(){this.isRegister=!1,this.islogin=!0},pressRegisterTab(){this.isLogin=!1,this.isRegister=!0},handleRegister(e){this.$emit("register:data",e)},userControl(e){this.$emit("login:data",e)}}};const U=(0,y.Z)(W,[["render",o]]);var _=U}}]);
//# sourceMappingURL=434.edf65724.js.map