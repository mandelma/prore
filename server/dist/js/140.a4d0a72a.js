"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[140],{5081:function(t,o,a){const n=a(7218),e="/api/reset_pw",r=async t=>{const o=await n.post(`${e}/forgot_auth`,t);return o.data},i=async t=>{const o=await n.get(`${e}/reset_auth/${t}`);return o.data},l=async t=>{const o=await n.post(`${e}/reset_auth`,t);return o.data};o.Z={forgot:r,reset:i,resetAuth:l}},9140:function(t,o,a){a.r(o),a.d(o,{default:function(){return d}});var n=a(3396),e=a(9242);const r=(0,n._)("h3",null,"Forgot password",-1),i={class:"form-group"},l=(0,n._)("label",null,"Email",-1),s=(0,n._)("button",{class:"btn btn-primary btn-block"},"Submit",-1);function m(t,o,a,m,u,c){return(0,n.wg)(),(0,n.iD)("form",{style:{"margin-top":"100px"},onSubmit:o[1]||(o[1]=(0,e.iM)(((...t)=>c.handleSubmitForgot&&c.handleSubmitForgot(...t)),["prevent"]))},[r,(0,n._)("div",i,[l,(0,n.wy)((0,n._)("input",{type:"email",class:"form-control",placeholder:"Email","onUpdate:modelValue":o[0]||(o[0]=t=>u.emailConfirmation=t)},null,512),[[e.nr,u.emailConfirmation]]),s])],32)}var u=a(5081),c={name:"Forgot",data(){return{emailConfirmation:""}},methods:{async handleSubmitForgot(){const t={email:this.emailConfirmation};console.log("email for reset "+t.email),await u.Z.forgot({email:this.emailConfirmation})}}},f=a(89);const p=(0,f.Z)(c,[["render",m]]);var d=p}}]);
//# sourceMappingURL=140.a4d0a72a.js.map