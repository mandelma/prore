"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[599],{2566:function(o,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(3396),r=n(9242);const e=(0,a._)("h3",null,"Forgot password",-1),i={class:"form-group"},l=(0,a._)("label",null,"Email",-1),m=(0,a._)("button",{class:"btn btn-primary btn-block"},"Submit",-1);function s(o,t,n,s,u,c){return(0,a.wg)(),(0,a.iD)("form",{style:{"margin-top":"100px"},onSubmit:t[1]||(t[1]=(0,r.iM)(((...o)=>c.handleSubmitForgot&&c.handleSubmitForgot(...o)),["prevent"]))},[e,(0,a._)("div",i,[l,(0,a.wy)((0,a._)("input",{type:"email",class:"form-control",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=o=>u.emailConfirmation=o)},null,512),[[r.nr,u.emailConfirmation]]),m])],32)}const u=n(7218),c="/api/reset_pw",f=async o=>{const t=u.post(`${c}/forgot_auth`,o);return t.data};var p={forgot:f},d={name:"Forgot",data(){return{emailConfirmation:""}},methods:{async handleSubmitForgot(){const o={email:this.emailConfirmation};console.log("email for reset "+o.email),await p.forgot({email:this.emailConfirmation})}}},g=n(89);const b=(0,g.Z)(d,[["render",s]]);var h=b}}]);
//# sourceMappingURL=599.9dd6b757.js.map