"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[312],{5118:function(e,n,o){var t=o(3396);const a=({message:e})=>null===e?null:(0,t.Wm)("div",{className:"error"},[e]);n.Z=a},5081:function(e,n,o){const t=o(7218),a="/api/reset_pw",s=async e=>{const n=await t.post(`${a}/forgot_auth`,e);return n.data},r=async e=>{const n=await t.get(`${a}/reset_auth/${e}`);return n.data};n.Z={forgot:s,reset:r}},4312:function(e,n,o){o.r(n),o.d(n,{default:function(){return v}});var t=o(3396),a=o(9242),s=o(7139);const r=e=>((0,t.dD)("data-v-6f016783"),e=e(),(0,t.Cn)(),e),l=r((()=>(0,t._)("h3",null," Reset password",-1))),i={class:"form-group"},u=r((()=>(0,t._)("label",null,"Uusi salasana",-1))),c={class:"form-group"},p=r((()=>(0,t._)("label",null,"Toista salasana",-1))),d=r((()=>(0,t._)("button",{class:"btn btn-primary btn-block"},"Submit",-1))),m={style:{color:"white"}};function w(e,n,o,r,w,f){const h=(0,t.up)("MDBBtn"),k=(0,t.up)("error-message"),g=(0,t.up)("MDBContainer");return(0,t.wg)(),(0,t.j4)(g,null,{default:(0,t.w5)((()=>[w.isToken?((0,t.wg)(),(0,t.iD)("form",{key:1,style:{"margin-top":"100px"},onSubmit:n[2]||(n[2]=(0,a.iM)(((...n)=>e.handleSubmitReset&&e.handleSubmitReset(...n)),["prevent"]))},[l,(0,t._)("div",i,[u,(0,t.wy)((0,t._)("input",{type:"password",class:"form-control",placeholder:"Uusi salasana","onUpdate:modelValue":n[0]||(n[0]=e=>w.newPw=e)},null,512),[[a.nr,w.newPw]])]),(0,t._)("div",c,[p,(0,t.wy)((0,t._)("input",{type:"password",class:"form-control",placeholder:"Toista salasana","onUpdate:modelValue":n[1]||(n[1]=e=>w.confirmNewPw=e)},null,512),[[a.nr,w.confirmNewPw]]),d])],32)):((0,t.wg)(),(0,t.j4)(h,{key:0,block:"",outline:"warning",onClick:f.handleOpenForm},{default:(0,t.w5)((()=>[(0,t.Uk)("Vaihtaa salasana")])),_:1},8,["onClick"])),(0,t.Wm)(k,{message:w.errorInfo},null,8,["message"]),(0,t._)("p",m,"Token "+(0,s.zw)(w.token),1)])),_:1})}o(7658);var f=o(5081),h=o(5118),k=o(4313),g={name:"Reset",components:{errorMessage:h.Z,MDBContainer:k.L5,MDBBtn:k.$v},data(){return{newPw:"",confirmNewPw:"",isToken:!1,token:this.$route.params.token,errorInfo:null}},methods:{async handleOpenForm(){const e=await f.Z.reset(this.token);"valid"===e?(console.log("Token expired "+e),this.isToken=!0):(console.log("Token is not expired "+e),this.errorInfo=e,setTimeout((()=>{this.errorInfo=null,this.$router.push("/forgot_auth")}),3e3))},habdleSubmitReset(){}}},_=o(89);const b=(0,_.Z)(g,[["render",w],["__scopeId","data-v-6f016783"]]);var v=b}}]);
//# sourceMappingURL=312.7e469f4c.js.map