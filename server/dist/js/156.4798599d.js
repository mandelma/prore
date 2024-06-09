"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[156,191],{5118:function(e,s,r){var t=r(3396);const i=({message:e})=>null===e?null:(0,t.Wm)("div",{className:"error"},[e,(0,t.Wm)("img",{className:"errorImg",alt:"error",src:r(5551)},null)]);s.Z=i},2191:function(e,s,r){r.r(s),r.d(s,{default:function(){return C}});var t=r(3396),i=r(9242);const a=e=>((0,t.dD)("data-v-8544b914"),e=e(),(0,t.Cn)(),e),l=a((()=>(0,t._)("h2",{style:{"margin-top":"50px","text-align":"center"}},"- Rekisteröintilomake -",-1))),o={class:"text-center"},n=a((()=>(0,t._)("p",null,"Tai registeröidy käyttämällä:",-1)));function g(e,s,r,a,g,m){const u=(0,t.up)("registerError"),d=(0,t.up)("register-error"),c=(0,t.up)("MDBInput"),p=(0,t.up)("MDBCheckbox"),h=(0,t.up)("MDBBtn"),w=(0,t.up)("MDBIcon"),b=(0,t.up)("MDBContainer");return(0,t.wg)(),(0,t.iD)("div",null,[l,(0,t.Wm)(b,{style:{"margin-top":"50px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{message:g.registerErrorMessage},null,8,["message"]),(0,t.Wm)(u,{message:g.usernameExisting},null,8,["message"]),(0,t.Wm)(u,{message:g.registerEmailErrorMessage},null,8,["message"]),(0,t.Wm)(d,{message:g.registerPwRepeatErrorMessage},null,8,["message"]),(0,t._)("form",{onSubmit:s[7]||(s[7]=(0,i.iM)(((...e)=>m.userData&&m.userData(...e)),["prevent"]))},[(0,t.Wm)(c,{type:"text",size:"lg",label:"Etunimi",white:"",id:"registerFirstName",modelValue:a.registerFirstName,"onUpdate:modelValue":s[0]||(s[0]=e=>a.registerFirstName=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(c,{type:"text",size:"lg",label:"Sukunimi",white:"",id:"registerLastName",modelValue:a.registerLastName,"onUpdate:modelValue":s[1]||(s[1]=e=>a.registerLastName=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(c,{type:"text",size:"lg",label:"käyttäjätunnus",white:"",id:"registerUsername",modelValue:a.registerUsername,"onUpdate:modelValue":s[2]||(s[2]=e=>a.registerUsername=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(c,{type:"text",size:"lg",label:"Email",white:"",id:"registerEmail",modelValue:a.registerEmail,"onUpdate:modelValue":s[3]||(s[3]=e=>a.registerEmail=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(c,{type:"password",size:"lg",label:"Salasana",white:"",id:"registerPassword",modelValue:a.registerPassword,"onUpdate:modelValue":s[4]||(s[4]=e=>a.registerPassword=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(c,{type:"password",size:"lg",label:"Toista salasana",white:"",id:"registerPasswordRepeat",modelValue:a.registerPasswordRepeat,"onUpdate:modelValue":s[5]||(s[5]=e=>a.registerPasswordRepeat=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(p,{label:"Muista minut",white:"",size:"lg",id:"registerSubscribeCheck",modelValue:a.registerSubscribeCheck,"onUpdate:modelValue":s[6]||(s[6]=e=>a.registerSubscribeCheck=e),wrapperClass:"d-flex justify-content-center mb-4"},null,8,["modelValue"]),(0,t.Wm)(h,{outline:"primary",size:"lg",type:"submit",block:"",class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Luo tili ")])),_:1}),(0,t._)("div",o,[n,(0,t.Wm)(h,{color:"secondary",floating:"",class:"mx-1"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{iconStyle:"fab",icon:"facebook-f"}),(0,t.Uk)("> ")])),_:1}),(0,t.Wm)(h,{color:"secondary",floating:"",class:"mx-1",onClick:m.handleGoogleAuth},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{iconStyle:"fab",icon:"google"})])),_:1},8,["onClick"]),(0,t.Wm)(h,{color:"secondary",floating:"",class:"mx-1"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{iconStyle:"fab",icon:"twitter"})])),_:1})])],32)])),_:1})])}var m=r(4313),u=r(4870),d=r(1478);const c=r(7218),p="/auth/google",h=async()=>{const e=await c.get(p);return e.data};var w={getAll:h},b=r(6823),f=r(5118),k=r(6070),M={name:"app-register",components:{registerError:f.Z,MDBContainer:m.L5,MDBInput:m.u2,MDBCheckbox:m.IH,MDBBtn:m.$v,MDBIcon:m.vm},data(){return{registerErrorMessage:null,registerEmailErrorMessage:null,registerPwRepeatErrorMessage:null,usernameExisting:null}},setup(){const e=(0,u.iH)(""),s=(0,u.iH)(""),r=(0,u.iH)(""),t=(0,u.iH)(""),i=(0,u.iH)(""),a=(0,u.iH)(""),l=(0,u.iH)(!0),o=()=>{(0,k.N3)().then((e=>{console.log("Handle the response",e)}))},n=e=>{console.log("Handle the response",e)};return{registerLastName:s,registerFirstName:e,registerUsername:r,registerEmail:t,registerPassword:i,registerPasswordRepeat:a,registerSubscribeCheck:l,login:o,callback:n}},computed:{isValidEmail(){return/^[^@]+@\w+(\.\w+)+\w$/.test(this.registerEmail)}},methods:{callback(e){console.log("Handle the response",e)},async handleGoogleAuth(){console.log("Google"),await w.getAll()},emailValidation(){},validateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)?this.msg["email"]="Please enter a valid email address":this.msg["email"]=""},async userData(){const e={firstName:this.registerFirstName,lastName:this.registerLastName,username:this.registerUsername,email:this.registerEmail,password:this.registerPassword};if(""!==this.registerFirstName&&""!==this.registerLastName&&""!==this.registerUsername&&""!==this.registerPassword&&""!==this.registerEmail)if(this.registerUsername.length<4)this.registerErrorMessage="Username must be longer than 4 characters!",setTimeout((()=>{this.registerErrorMessage=null}),2e3);else if(/^[^@]+@\w+(\.\w+)+\w$/.test(this.registerEmail))if(this.registerPassword!==this.registerPasswordRepeat)this.registerPwRepeatErrorMessage="Salasana on oltava sama!",setTimeout((()=>{this.registerPwRepeatErrorMessage=null}),2e3);else{console.log("Uus kasutaja");const s=await d.Z.addUser(e);if("Käyttäjätunnus on jo olemassa!"===s.error)this.usernameExisting="Käyttäjätunnus on jo olemassa! Vaihda käyttäjätunnus",setTimeout((()=>{this.usernameExisting=null}),2e3);else if("Sähköposti on jo olemassa!"===s.error)this.registerEmailErrorMessage="Antamasi sähköpostiosoite on jo olemassa!",setTimeout((()=>{this.registerEmailErrorMessage=null}),2e3);else{const e=await b.Z.login({username:this.registerUsername,password:this.registerPassword});"login error"!==e.error&&this.$emit("register:data",e)}}else this.registerEmailErrorMessage="Anna kelvollinen sähköpostiosoite!",setTimeout((()=>{this.registerEmailErrorMessage=null}),2e3);else this.registerErrorMessage="Kaikki kentät on täytettävä!!",setTimeout((()=>{this.registerErrorMessage=null}),2e3)}}},E=r(89);const y=(0,E.Z)(M,[["render",g],["__scopeId","data-v-8544b914"]]);var C=y},156:function(e,s,r){r.r(s),r.d(s,{default:function(){return E}});var t=r(3396);const i={key:0},a={key:1};function l(e,s,r,l,o,n){const g=(0,t.up)("MDBTabItem"),m=(0,t.up)("MDBTabNav"),u=(0,t.up)("MDBTabs"),d=(0,t.up)("Register"),c=(0,t.up)("Login"),p=(0,t.up)("MDBContainer");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(p,{style:{"margin-top":"50px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{modelValue:l.form7ActiveTab,"onUpdate:modelValue":s[0]||(s[0]=e=>l.form7ActiveTab=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{pills:"",justify:"",tabsClasses:"mb-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{style:{"background-color":"#37546a",color:"#ddd"},onClick:n.pressLoginTab,tabId:"ex3-1",href:"ex3-1"},{default:(0,t.w5)((()=>[(0,t.Uk)("Kirjaudu")])),_:1},8,["onClick"]),(0,t.Wm)(g,{style:{"background-color":"#223340",color:"#ddd"},onClick:n.pressRegisterTab,tabId:"ex3-2",href:"ex3-2"},{default:(0,t.w5)((()=>[(0,t.Uk)("Registeröidy")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["modelValue"]),o.isRegister?((0,t.wg)(),(0,t.iD)("div",i,[(0,t.Wm)(d,{"onRegister:data":n.handleRegister},null,8,["onRegister:data"])])):((0,t.wg)(),(0,t.iD)("div",a,[(0,t.Wm)(c,{"onLogin:data":n.userControl},null,8,["onLogin:data"])]))])),_:1})])}r(7658);var o=r(9242);const n={class:"text-center"};function g(e,s,r,i,a,l){const g=(0,t.up)("loginError"),m=(0,t.up)("MDBInput"),u=(0,t.up)("MDBCheckbox"),d=(0,t.up)("MDBCol"),c=(0,t.up)("router-link"),p=(0,t.up)("MDBRow"),h=(0,t.up)("MDBBtn");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(g,{message:i.loginErrorMessage},null,8,["message"]),(0,t._)("form",{onSubmit:s[4]||(s[4]=(0,o.iM)(((...e)=>l.userLoginData&&l.userLoginData(...e)),["prevent"]))},[(0,t.Wm)(m,{type:"text",size:"lg",label:"Käyttäjätunnus",white:"",id:"loginUsername",modelValue:i.loginUsername,"onUpdate:modelValue":s[0]||(s[0]=e=>i.loginUsername=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(m,{type:"password",size:"lg",label:"Salasana",white:"",id:"loginPassword",modelValue:i.loginPassword,"onUpdate:modelValue":s[1]||(s[1]=e=>i.loginPassword=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.Wm)(p,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{class:"d-flex justify-content-center"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{label:"Muista minut",white:"",id:"loginCheck",modelValue:i.loginCheck,"onUpdate:modelValue":s[2]||(s[2]=e=>i.loginCheck=e),wrapperClass:"mb-3 mb-md-0"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{to:"/forgot_auth"},{default:(0,t.w5)((()=>[(0,t.Uk)("Forgot password")])),_:1})])),_:1})])),_:1}),(0,t.Wm)(h,{white:"",color:"primary",size:"lg",type:"submit",block:"",class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Kirjaudu ")])),_:1}),(0,t._)("div",n,[(0,t._)("p",null,[(0,t.Uk)("Ei jäsen? "),(0,t._)("span",{id:"reg",onClick:s[3]||(s[3]=e=>this.$router.push("/register")),style:{cursor:"pointer"}},"rekisteröidy")])])],32)])}var m=r(4313),u=r(4870),d=r(6823),c=r(5118),p={name:"login-form",components:{loginError:c.Z,MDBInput:m.u2,MDBCheckbox:m.IH,MDBBtn:m.$v,MDBRow:m.uZ,MDBCol:m.TK,MDBIcon:m.vm},setup(){const e=(0,u.iH)(""),s=(0,u.iH)(""),r=(0,u.iH)(!0),t=(0,u.iH)(null);return{loginUsername:e,loginPassword:s,loginCheck:r,loginErrorMessage:t}},methods:{async userLoginData(){let e;const s={username:this.loginUsername,password:this.loginPassword};""!==this.loginUsername&&""!==this.loginPassword?(e=await d.Z.login(s),"login error"!==e.error?(console.log("User logged in"),this.$emit("login:data",e)):(console.log("No user logged in"),this.loginError="Väärä Käyttäjätunnus tai salasana!",this.loginErrorMessage="Väärä Käyttäjätunnus tai salasana!",setTimeout((()=>{this.loginErrorMessage=null}),2e3))):(console.log("Mingi väli on tühi!!"),this.loginErrorMessage="kaikki kentät on täytettävä!",setTimeout((()=>{this.loginErrorMessage=null}),2e3)),this.emptyLoginFields()},emptyLoginFields(){this.loginUsername="",this.loginPassword="",this.loginCheck=!1}}},h=r(89);const w=(0,h.Z)(p,[["render",g]]);var b=w,f=r(2191),k={name:"login-register",components:{Login:b,Register:f["default"],MDBContainer:m.L5,MDBTabs:m.zk,MDBTabNav:m.JH,MDBTabItem:m.kX},setup(){const e=(0,u.iH)("ex3-1"),s=(0,u.iH)(""),r=(0,u.iH)(""),t=(0,u.iH)(!0),i=(0,u.iH)(""),a=(0,u.iH)(""),l=(0,u.iH)(""),o=(0,u.iH)(""),n=(0,u.iH)(""),g=(0,u.iH)(!0);return{form7ActiveTab:e,form2Username:s,form2Password:r,form7LoginCheck:t,form7RegisterName:i,form7RegisterUsername:a,form7RegisterEmail:l,form7RegisterPassword:o,form7RegisterPasswordRepeat:n,form7RegisterTermsCheck:g}},data(){return{isLogin:!0,isRegister:!1}},mounted(){this.isLogin=!0},methods:{pressLoginTab(){this.isRegister=!1,this.islogin=!0},pressRegisterTab(){this.isLogin=!1,this.isRegister=!0},handleRegister(e){this.$emit("register:data",e)},userControl(e){this.$emit("login:data",e)}}};const M=(0,h.Z)(k,[["render",l]]);var E=M},5551:function(e,s,r){e.exports=r.p+"img/error.9510853e.png"}}]);
//# sourceMappingURL=156.4798599d.js.map