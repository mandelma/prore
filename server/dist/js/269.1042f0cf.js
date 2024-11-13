"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[269,147],{4482:function(e,s,r){var t=r(6768);const a=({message:e})=>null===e?null:(0,t.bF)("div",{className:"error"},[e,(0,t.bF)("img",{className:"errorImg",alt:"error",src:r(1644)},null)]);s.A=a},9147:function(e,s,r){r.r(s),r.d(s,{default:function(){return p}});var t=r(6768),a=r(5130);const i={class:"text-center"};function l(e,s,r,l,o,n){const g=(0,t.g2)("registerError"),u=(0,t.g2)("register-error"),m=(0,t.g2)("MDBInput"),d=(0,t.g2)("MDBCheckbox"),c=(0,t.g2)("MDBBtn"),b=(0,t.g2)("MDBIcon"),p=(0,t.g2)("MDBContainer");return(0,t.uX)(),(0,t.CE)("div",null,[s[12]||(s[12]=(0,t.Lk)("h2",{style:{"margin-top":"50px","text-align":"center"}},"- Rekisteröintilomake -",-1)),(0,t.bF)(p,{style:{"margin-top":"50px"}},{default:(0,t.k6)((()=>[(0,t.bF)(g,{message:o.registerErrorMessage},null,8,["message"]),(0,t.bF)(g,{message:o.usernameExisting},null,8,["message"]),(0,t.bF)(g,{message:o.registerEmailErrorMessage},null,8,["message"]),(0,t.bF)(u,{message:o.registerPwRepeatErrorMessage},null,8,["message"]),(0,t.Lk)("form",{onSubmit:s[7]||(s[7]=(0,a.D$)(((...e)=>n.userData&&n.userData(...e)),["prevent"])),autocomplete:"off"},[(0,t.bF)(m,{type:"text",size:"lg",label:"Etunimi",white:"",id:"registerFirstName",modelValue:l.registerFirstName,"onUpdate:modelValue":s[0]||(s[0]=e=>l.registerFirstName=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.bF)(m,{type:"text",size:"lg",label:"Sukunimi",white:"",id:"registerLastName",modelValue:l.registerLastName,"onUpdate:modelValue":s[1]||(s[1]=e=>l.registerLastName=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.bF)(m,{type:"text",size:"lg",label:"käyttäjätunnus",white:"",id:"registerUsername",modelValue:l.registerUsername,"onUpdate:modelValue":s[2]||(s[2]=e=>l.registerUsername=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.bF)(m,{type:"text",size:"lg",label:"Email",white:"",id:"registerEmail",modelValue:l.registerEmail,"onUpdate:modelValue":s[3]||(s[3]=e=>l.registerEmail=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.bF)(m,{type:"password",size:"lg",label:"Salasana",white:"",id:"registerPassword",modelValue:l.registerPassword,"onUpdate:modelValue":s[4]||(s[4]=e=>l.registerPassword=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.bF)(m,{type:"password",size:"lg",label:"Toista salasana",white:"",id:"registerPasswordRepeat",modelValue:l.registerPasswordRepeat,"onUpdate:modelValue":s[5]||(s[5]=e=>l.registerPasswordRepeat=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.bF)(d,{label:"Muista minut",white:"",size:"lg",id:"registerSubscribeCheck",modelValue:l.registerSubscribeCheck,"onUpdate:modelValue":s[6]||(s[6]=e=>l.registerSubscribeCheck=e),wrapperClass:"d-flex justify-content-center mb-4"},null,8,["modelValue"]),(0,t.bF)(c,{outline:"primary",size:"lg",type:"submit",block:"",class:"mb-4"},{default:(0,t.k6)((()=>s[8]||(s[8]=[(0,t.eW)(" Luo tili ")]))),_:1}),(0,t.Lk)("div",i,[s[11]||(s[11]=(0,t.Lk)("p",null,"Tai registeröidy käyttämällä:",-1)),(0,t.bF)(c,{color:"secondary",floating:"",class:"mx-1"},{default:(0,t.k6)((()=>[(0,t.bF)(b,{iconStyle:"fab",icon:"facebook-f"}),s[9]||(s[9]=(0,t.eW)("> "))])),_:1}),(0,t.bF)(c,{color:"secondary",floating:"",class:"mx-1",onClick:e.handleGoogleAuth},{default:(0,t.k6)((()=>[(0,t.bF)(b,{iconStyle:"fab",icon:"google"})])),_:1},8,["onClick"]),(0,t.bF)(c,{color:"secondary",floating:"",class:"mx-1"},{default:(0,t.k6)((()=>[(0,t.bF)(b,{iconStyle:"fab",icon:"twitter"})])),_:1}),(0,t.bF)(c,{color:"primary",onClick:e.getUser},{default:(0,t.k6)((()=>s[10]||(s[10]=[(0,t.eW)("Get user")]))),_:1},8,["onClick"])])],32)])),_:1})])}var o=r(5846),n=r(144),g=r(683);r(6425);var u=r(3674),m=r(4482),d={name:"app-register",components:{registerError:m.A,MDBContainer:o.Dj,MDBInput:o.gk,MDBCheckbox:o.lR,MDBBtn:o.al,MDBIcon:o.$u},data(){return{registerErrorMessage:null,registerEmailErrorMessage:null,registerPwRepeatErrorMessage:null,usernameExisting:null}},setup(){const e=(0,n.KR)(""),s=(0,n.KR)(""),r=(0,n.KR)(""),t=(0,n.KR)(""),a=(0,n.KR)(""),i=(0,n.KR)(""),l=(0,n.KR)(!0);return{registerLastName:s,registerFirstName:e,registerUsername:r,registerEmail:t,registerPassword:a,registerPasswordRepeat:i,registerSubscribeCheck:l}},computed:{isValidEmail(){return/^[^@]+@\w+(\.\w+)+\w$/.test(this.registerEmail)}},methods:{emailValidation(){},validateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)?this.msg["email"]="Please enter a valid email address":this.msg["email"]=""},async userData(){const e={firstName:this.registerFirstName,lastName:this.registerLastName,username:this.registerUsername,email:this.registerEmail,password:this.registerPassword};if(""!==this.registerFirstName&&""!==this.registerLastName&&""!==this.registerUsername&&""!==this.registerPassword&&""!==this.registerEmail)if(this.registerUsername.length<4)this.registerErrorMessage="Username must be longer than 4 characters!",setTimeout((()=>{this.registerErrorMessage=null}),2e3);else if(/^[^@]+@\w+(\.\w+)+\w$/.test(this.registerEmail))if(this.registerPassword!==this.registerPasswordRepeat)this.registerPwRepeatErrorMessage="Salasana on oltava sama!",setTimeout((()=>{this.registerPwRepeatErrorMessage=null}),2e3);else{console.log("Uus kasutaja");const s=await g.A.addUser(e);if("username existing"===s.error)this.usernameExisting="Käyttäjätunnus on jo olemassa! Vaihda käyttäjätunnus",setTimeout((()=>{this.usernameExisting=null}),2e3);else if("email existing"===s.error)this.registerEmailErrorMessage="Antamasi sähköpostiosoite on jo olemassa!",setTimeout((()=>{this.registerEmailErrorMessage=null}),2e3);else{console.log("Aga siin!!!");const e=await u.A.login({username:this.registerUsername,password:this.registerPassword});"login error"!==e.error?(console.log("Aga siin veel!!!"),this.$emit("register:data",e)):console.log("Error with login! "+e.error)}}else this.registerEmailErrorMessage="Anna kelvollinen sähköpostiosoite!",setTimeout((()=>{this.registerEmailErrorMessage=null}),2e3);else this.registerErrorMessage="Kaikki kentät on täytettävä!!",setTimeout((()=>{this.registerErrorMessage=null}),2e3)}}},c=r(1241);const b=(0,c.A)(d,[["render",l]]);var p=b},5269:function(e,s,r){r.r(s),r.d(s,{default:function(){return R}});var t=r(6768);const a={key:0},i={key:1};function l(e,s,r,l,o,n){const g=(0,t.g2)("MDBTabItem"),u=(0,t.g2)("MDBTabNav"),m=(0,t.g2)("MDBTabs"),d=(0,t.g2)("Register"),c=(0,t.g2)("Login"),b=(0,t.g2)("MDBContainer");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.bF)(b,{style:{"margin-top":"50px"}},{default:(0,t.k6)((()=>[(0,t.bF)(m,{modelValue:l.form7ActiveTab,"onUpdate:modelValue":s[0]||(s[0]=e=>l.form7ActiveTab=e)},{default:(0,t.k6)((()=>[(0,t.bF)(u,{pills:"",justify:"",tabsClasses:"mb-3"},{default:(0,t.k6)((()=>[(0,t.bF)(g,{style:{"background-color":"#37546a",color:"#ddd"},onClick:n.pressLoginTab,tabId:"ex3-1",href:"ex3-1"},{default:(0,t.k6)((()=>s[1]||(s[1]=[(0,t.eW)("Kirjaudu")]))),_:1},8,["onClick"]),(0,t.bF)(g,{style:{"background-color":"#223340",color:"#ddd"},onClick:n.pressRegisterTab,tabId:"ex3-2",href:"ex3-2"},{default:(0,t.k6)((()=>s[2]||(s[2]=[(0,t.eW)("Registeröidy")]))),_:1},8,["onClick"])])),_:1})])),_:1},8,["modelValue"]),o.isRegister?((0,t.uX)(),(0,t.CE)("div",a,[(0,t.bF)(d,{"onRegister:data":n.handleRegister},null,8,["onRegister:data"])])):((0,t.uX)(),(0,t.CE)("div",i,[(0,t.bF)(c,{"onLogin:data":n.userControl},null,8,["onLogin:data"])]))])),_:1})])}r(4114);var o=r(5130);const n={class:"text-center"};function g(e,s,r,a,i,l){const g=(0,t.g2)("loginError"),u=(0,t.g2)("MDBInput"),m=(0,t.g2)("MDBCheckbox"),d=(0,t.g2)("MDBCol"),c=(0,t.g2)("router-link"),b=(0,t.g2)("MDBRow"),p=(0,t.g2)("MDBBtn");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.bF)(g,{message:a.loginErrorMessage},null,8,["message"]),(0,t.Lk)("form",{onSubmit:s[4]||(s[4]=(0,o.D$)(((...e)=>l.userLoginData&&l.userLoginData(...e)),["prevent"])),autocomplete:"off"},[(0,t.bF)(u,{type:"text",size:"lg",label:"Käyttäjätunnus",white:"",id:"loginUsername",modelValue:a.loginUsername,"onUpdate:modelValue":s[0]||(s[0]=e=>a.loginUsername=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.bF)(u,{type:"password",size:"lg",label:"Salasana",white:"",id:"loginPassword",modelValue:a.loginPassword,"onUpdate:modelValue":s[1]||(s[1]=e=>a.loginPassword=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,t.bF)(b,{class:"mb-4"},{default:(0,t.k6)((()=>[(0,t.bF)(d,{class:"d-flex justify-content-center"},{default:(0,t.k6)((()=>[(0,t.bF)(m,{label:"Muista minut",white:"",id:"loginCheck",modelValue:a.loginCheck,"onUpdate:modelValue":s[2]||(s[2]=e=>a.loginCheck=e),wrapperClass:"mb-3 mb-md-0"},null,8,["modelValue"])])),_:1}),(0,t.bF)(d,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{to:"/forgot_auth"},{default:(0,t.k6)((()=>s[5]||(s[5]=[(0,t.eW)("Forgot password")]))),_:1})])),_:1})])),_:1}),(0,t.bF)(p,{white:"",color:"primary",size:"lg",type:"submit",block:"",class:"mb-4"},{default:(0,t.k6)((()=>s[6]||(s[6]=[(0,t.eW)(" Kirjaudu ")]))),_:1}),(0,t.Lk)("div",n,[(0,t.Lk)("p",null,[s[7]||(s[7]=(0,t.eW)("Ei jäsen? ")),(0,t.Lk)("span",{id:"reg",onClick:s[3]||(s[3]=e=>this.$router.push("/register")),style:{cursor:"pointer"}},"rekisteröidy")])])],32)])}var u=r(5846),m=r(144),d=r(3674),c=r(4482),b={name:"login-form",components:{loginError:c.A,MDBInput:u.gk,MDBCheckbox:u.lR,MDBBtn:u.al,MDBRow:u.gU,MDBCol:u.m6,MDBIcon:u.$u},setup(){const e=(0,m.KR)(""),s=(0,m.KR)(""),r=(0,m.KR)(!0),t=(0,m.KR)(null);return{loginUsername:e,loginPassword:s,loginCheck:r,loginErrorMessage:t}},methods:{async userLoginData(){let e;const s={username:this.loginUsername,password:this.loginPassword};""!==this.loginUsername&&""!==this.loginPassword?(e=await d.A.login(s),"login error"!==e.error?(console.log("User logged in"),this.$emit("login:data",e)):(console.log("No user logged in"),this.loginError="Väärä Käyttäjätunnus tai salasana!",this.loginErrorMessage="Väärä Käyttäjätunnus tai salasana!",setTimeout((()=>{this.loginErrorMessage=null}),2e3))):(this.loginErrorMessage="kaikki kentät on täytettävä!",setTimeout((()=>{this.loginErrorMessage=null}),2e3)),this.emptyLoginFields()},emptyLoginFields(){this.loginUsername="",this.loginPassword="",this.loginCheck=!1}}},p=r(1241);const h=(0,p.A)(b,[["render",g]]);var k=h,w=r(9147),f={name:"login-register",components:{Login:k,Register:w["default"],MDBContainer:u.Dj,MDBTabs:u.w6,MDBTabNav:u.E2,MDBTabItem:u.Yc},setup(){const e=(0,m.KR)("ex3-1"),s=(0,m.KR)(""),r=(0,m.KR)(""),t=(0,m.KR)(!0),a=(0,m.KR)(""),i=(0,m.KR)(""),l=(0,m.KR)(""),o=(0,m.KR)(""),n=(0,m.KR)(""),g=(0,m.KR)(!0);return{form7ActiveTab:e,form2Username:s,form2Password:r,form7LoginCheck:t,form7RegisterName:a,form7RegisterUsername:i,form7RegisterEmail:l,form7RegisterPassword:o,form7RegisterPasswordRepeat:n,form7RegisterTermsCheck:g}},data(){return{isLogin:!0,isRegister:!1}},mounted(){this.isLogin=!0},methods:{pressLoginTab(){this.isRegister=!1,this.islogin=!0},pressRegisterTab(){this.isLogin=!1,this.isRegister=!0},handleRegister(e){console.log("xxxxx-xxxxx"),this.$emit("register:data",e)},userControl(e){this.$emit("login:data",e)}}};const E=(0,p.A)(f,[["render",l]]);var R=E},1644:function(e,s,r){e.exports=r.p+"img/error.9510853e.png"}}]);
//# sourceMappingURL=269.1042f0cf.js.map