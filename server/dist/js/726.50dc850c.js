"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[726],{4482:function(e,s,t){var a=t(6768);const o=({message:e})=>null===e?null:(0,a.bF)("div",{className:"error"},[e,(0,a.bF)("img",{className:"errorImg",alt:"error",src:t(1644)},null)]);s.A=o},4248:function(e,s,t){const a=t(6425),o="/api/reset_pw",r=async e=>{const s=await a.post(`${o}/forgot_auth`,e);return s.data},n=async e=>{const s=await a.get(`${o}/reset_auth/${e}`);return s.data},l=async e=>{const s=await a.post(`${o}/reset_auth`,e);return s.data};s.A={forgot:r,reset:n,resetAuth:l}},9726:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var a=t(6768),o=t(5130);function r(e,s,t,r,n,l){const i=(0,a.g2)("email-success"),m=(0,a.g2)("email-error"),u=(0,a.g2)("MDBInput"),c=(0,a.g2)("MDBBtn"),g=(0,a.g2)("MDBContainer");return(0,a.uX)(),(0,a.Wv)(g,null,{default:(0,a.k6)((()=>[(0,a.bF)(i,{message:n.emailSuccessMessage},null,8,["message"]),(0,a.bF)(m,{message:n.emailErrorMessage},null,8,["message"]),(0,a.Lk)("form",{style:{"margin-top":"100px"},onSubmit:s[1]||(s[1]=(0,o.D$)(((...e)=>l.handleSubmitForgot&&l.handleSubmitForgot(...e)),["prevent"]))},[(0,a.bF)(u,{type:"email",id:"giveEmail",white:"",size:"lg",label:"Anna oma sähköpostisi",modelValue:n.emailConfirmation,"onUpdate:modelValue":s[0]||(s[0]=e=>n.emailConfirmation=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,a.bF)(c,{type:"submit",block:"",color:"success"},{default:(0,a.k6)((()=>s[2]||(s[2]=[(0,a.eW)("Lähetä")]))),_:1})],32)])),_:1})}var n=t(4248),l=t(7337),i=t(4482),m=t(5846),u={name:"Forgot",components:{emailSuccess:l.A,emailError:i.A,MDBContainer:m.Dj,MDBInput:m.gk,MDBBtn:m.al},data(){return{emailConfirmation:"",emailSuccessMessage:null,emailErrorMessage:null,giveEmail:""}},methods:{async handleSubmitForgot(){if(/^[^@]+@\w+(\.\w+)+\w$/.test(this.emailConfirmation)){const e={email:this.emailConfirmation};console.log("email for reset "+e.email);const s=await n.A.forgot({email:this.emailConfirmation});this.emailSuccessMessage=s.result,setTimeout((()=>{this.emailSuccessMessage=null}),3e3),console.log("Reset password result: "+s.result)}else this.emailErrorMessage="Anna kelvollinen sähköpostiosoite!",setTimeout((()=>{this.emailErrorMessage=null}),2e3)}}},c=t(1241);const g=(0,c.A)(u,[["render",r],["__scopeId","data-v-49b055d4"]]);var p=g},1644:function(e,s,t){e.exports=t.p+"img/error.9510853e.png"}}]);
//# sourceMappingURL=726.50dc850c.js.map