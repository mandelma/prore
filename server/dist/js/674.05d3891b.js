"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[674,697],{4697:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var a=s(3396),r=s(9242);const i=e=>((0,a.dD)("data-v-63b4509f"),e=e(),(0,a.Cn)(),e),l=i((()=>(0,a._)("h2",{style:{"margin-top":"50px","text-align":"center"}},"- Rekisteröintilomake -",-1))),o={class:"text-center"},n=i((()=>(0,a._)("p",null,"Tai registeröidy käyttämällä:",-1)));function m(e,t,s,i,m,u){const d=(0,a.up)("MDBInput"),g=(0,a.up)("MDBCheckbox"),c=(0,a.up)("MDBBtn"),p=(0,a.up)("MDBIcon"),b=(0,a.up)("MDBContainer");return(0,a.wg)(),(0,a.iD)("div",null,[l,(0,a.Wm)(b,{style:{"margin-top":"50px"}},{default:(0,a.w5)((()=>[(0,a._)("form",{onSubmit:t[6]||(t[6]=(0,r.iM)(((...e)=>u.userData&&u.userData(...e)),["prevent"]))},[(0,a.Wm)(d,{type:"text",size:"lg",label:"Etunimi",id:"registerFirstName",modelValue:i.registerFirstName,"onUpdate:modelValue":t[0]||(t[0]=e=>i.registerFirstName=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,a.Wm)(d,{type:"text",size:"lg",label:"Sukunimi",id:"registerLastName",modelValue:i.registerLastName,"onUpdate:modelValue":t[1]||(t[1]=e=>i.registerLastName=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,a.Wm)(d,{type:"text",size:"lg",label:"käyttäjätunnus",id:"registerUsername",modelValue:i.registerUsername,"onUpdate:modelValue":t[2]||(t[2]=e=>i.registerUsername=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,a.Wm)(d,{type:"password",size:"lg",label:"Salasana",id:"registerPassword",modelValue:i.registerPassword,"onUpdate:modelValue":t[3]||(t[3]=e=>i.registerPassword=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,a.Wm)(d,{type:"password",size:"lg",label:"Toista salasana",id:"registerPasswordRepeat",modelValue:i.registerPasswordRepeat,"onUpdate:modelValue":t[4]||(t[4]=e=>i.registerPasswordRepeat=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,a.Wm)(g,{label:"Muista minut",size:"lg",id:"registerSubscribeCheck",modelValue:i.registerSubscribeCheck,"onUpdate:modelValue":t[5]||(t[5]=e=>i.registerSubscribeCheck=e),wrapperClass:"d-flex justify-content-center mb-4"},null,8,["modelValue"]),(0,a.Wm)(c,{outline:"primary",size:"lg",type:"submit",block:"",class:"mb-4"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Luo tili ")])),_:1}),(0,a._)("div",o,[n,(0,a.Wm)(c,{color:"secondary",floating:"",class:"mx-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{iconStyle:"fab",icon:"facebook-f"}),(0,a.Uk)("> ")])),_:1}),(0,a.Wm)(c,{color:"secondary",floating:"",class:"mx-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{iconStyle:"fab",icon:"google"})])),_:1}),(0,a.Wm)(c,{color:"secondary",floating:"",class:"mx-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{iconStyle:"fab",icon:"twitter"})])),_:1})])],32)])),_:1})])}var u=s(4313),d=s(4870),g={name:"app-register",components:{MDBContainer:u.L5,MDBInput:u.u2,MDBCheckbox:u.IH,MDBBtn:u.$v,MDBIcon:u.vm},data(){return{}},setup(){const e=(0,d.iH)(""),t=(0,d.iH)(""),s=(0,d.iH)(""),a=(0,d.iH)(""),r=(0,d.iH)(""),i=(0,d.iH)(!0);return{registerLastName:t,registerFirstName:e,registerUsername:s,registerPassword:a,registerPasswordRepeat:r,registerSubscribeCheck:i}},methods:{userData(){const e={firstName:this.registerFirstName,lastName:this.registerLastName,username:this.registerUsername,password:this.registerPassword};this.$emit("register:data",e)}}},c=s(89);const p=(0,c.Z)(g,[["render",m],["__scopeId","data-v-63b4509f"]]);var b=p},4674:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var a=s(3396);const r={key:0},i={key:1};function l(e,t,s,l,o,n){const m=(0,a.up)("MDBTabItem"),u=(0,a.up)("MDBTabNav"),d=(0,a.up)("MDBTabs"),g=(0,a.up)("Register"),c=(0,a.up)("Login"),p=(0,a.up)("MDBContainer");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(p,{style:{"margin-top":"50px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:l.form7ActiveTab,"onUpdate:modelValue":t[0]||(t[0]=e=>l.form7ActiveTab=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{pills:"",justify:"",tabsClasses:"mb-3"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{onClick:n.pressLoginTab,tabId:"ex3-1",href:"ex3-1"},{default:(0,a.w5)((()=>[(0,a.Uk)("Kirjaudu")])),_:1},8,["onClick"]),(0,a.Wm)(m,{onClick:n.pressRegisterTab,tabId:"ex3-2",href:"ex3-2"},{default:(0,a.w5)((()=>[(0,a.Uk)("Registeröidy")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["modelValue"]),o.isRegister?((0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(g,{"onRegister:data":n.handleRegister},null,8,["onRegister:data"])])):((0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(c,{"onLogin:data":n.userControl},null,8,["onLogin:data"])]))])),_:1})])}s(7658);var o=s(9242);const n=e=>((0,a.dD)("data-v-5b2eb5a9"),e=e(),(0,a.Cn)(),e),m={class:"text-center mb-3"},u=n((()=>(0,a._)("p",null,"Kirjaudu käyttämällä:",-1))),d=n((()=>(0,a._)("p",{class:"text-center"},"tai:",-1))),g=n((()=>(0,a._)("a",{href:"#!"},"Unohtuiko salasana?",-1))),c={class:"text-center"};function p(e,t,s,r,i,l){const n=(0,a.up)("MDBIcon"),p=(0,a.up)("MDBBtn"),b=(0,a.up)("MDBInput"),f=(0,a.up)("MDBCheckbox"),w=(0,a.up)("MDBCol"),h=(0,a.up)("MDBRow");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("form",{onSubmit:t[4]||(t[4]=(0,o.iM)(((...e)=>l.userLoginData&&l.userLoginData(...e)),["prevent"]))},[(0,a._)("div",m,[u,(0,a.Wm)(p,{color:"secondary",floating:"",class:"mx-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{iconStyle:"fab",icon:"facebook-f"}),(0,a.Uk)("> ")])),_:1}),(0,a.Wm)(p,{color:"secondary",floating:"",class:"mx-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{iconStyle:"fab",icon:"google"})])),_:1}),(0,a.Wm)(p,{color:"secondary",floating:"",class:"mx-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{iconStyle:"fab",icon:"twitter"})])),_:1}),(0,a.Wm)(p,{color:"secondary",floating:"",class:"mx-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{iconStyle:"fab",icon:"github"})])),_:1})]),d,(0,a.Wm)(b,{type:"text",size:"lg",label:"Käyttäjätunnus",id:"loginUsername",modelValue:r.loginUsername,"onUpdate:modelValue":t[0]||(t[0]=e=>r.loginUsername=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,a.Wm)(b,{type:"password",size:"lg",label:"Salasana",id:"loginPassword",modelValue:r.loginPassword,"onUpdate:modelValue":t[1]||(t[1]=e=>r.loginPassword=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,a.Wm)(h,{class:"mb-4"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"d-flex justify-content-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{label:"Muista minut",id:"loginCheck",modelValue:r.loginCheck,"onUpdate:modelValue":t[2]||(t[2]=e=>r.loginCheck=e),wrapperClass:"mb-3 mb-md-0"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[g])),_:1})])),_:1}),(0,a.Wm)(p,{color:"primary",size:"lg",type:"submit",block:"",class:"mb-4"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Kirjaudu ")])),_:1}),(0,a._)("div",c,[(0,a._)("p",null,[(0,a.Uk)("Ei jäsen? "),(0,a._)("span",{id:"reg",onClick:t[3]||(t[3]=e=>this.$router.push("/register")),style:{cursor:"pointer"}},"rekisteröidy")])])],32)])}var b=s(4313),f=s(4870),w={name:"login-form",components:{MDBInput:b.u2,MDBCheckbox:b.IH,MDBBtn:b.$v,MDBRow:b.uZ,MDBCol:b.TK,MDBIcon:b.vm},setup(){const e=(0,f.iH)(""),t=(0,f.iH)(""),s=(0,f.iH)(!0);return{loginUsername:e,loginPassword:t,loginCheck:s}},methods:{userLoginData(){const e={username:this.loginUsername,password:this.loginPassword};this.$emit("login:data",e),this.emptyLoginFields()},emptyLoginFields(){this.loginUsername="",this.loginPassword="",this.loginCheck=!1}}},h=s(89);const k=(0,h.Z)(w,[["render",p],["__scopeId","data-v-5b2eb5a9"]]);var y=k,D=s(4697),C={name:"login-register",components:{Login:y,Register:D["default"],MDBContainer:b.L5,MDBTabs:b.zk,MDBTabNav:b.JH,MDBTabItem:b.kX},setup(){const e=(0,f.iH)("ex3-1"),t=(0,f.iH)(""),s=(0,f.iH)(""),a=(0,f.iH)(!0),r=(0,f.iH)(""),i=(0,f.iH)(""),l=(0,f.iH)(""),o=(0,f.iH)(""),n=(0,f.iH)(""),m=(0,f.iH)(!0);return{form7ActiveTab:e,form2Username:t,form2Password:s,form7LoginCheck:a,form7RegisterName:r,form7RegisterUsername:i,form7RegisterEmail:l,form7RegisterPassword:o,form7RegisterPasswordRepeat:n,form7RegisterTermsCheck:m}},data(){return{isLogin:!0,isRegister:!1}},mounted(){this.isLogin=!0},methods:{pressLoginTab(){this.isRegister=!1,this.islogin=!0},pressRegisterTab(){this.isLogin=!1,this.isRegister=!0},handleRegister(e){this.$emit("register:data",e)},userControl(e){this.$emit("login:data",e)}}};const W=(0,h.Z)(C,[["render",l]]);var _=W}}]);
//# sourceMappingURL=674.05d3891b.js.map