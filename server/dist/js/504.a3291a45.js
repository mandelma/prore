"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[504],{5081:function(n,e,t){const a=t(7218),o="/api/reset_pw",s=async n=>{const e=a.post(`${o}/forgot_auth`,n);return e.data},r=async n=>{const e=a.get(`${o}/reset_auth/${n}`);return e.data};e.Z={forgot:s,reset:r}},8504:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var a=t(3396),o=t(9242),s=t(7139);const r=(0,a._)("h3",null," Reset password",-1),l={class:"form-group"},u=(0,a._)("label",null,"Uusi salasana",-1),i={class:"form-group"},c=(0,a._)("label",null,"Toista salasana",-1),p=(0,a._)("button",{class:"btn btn-primary btn-block"},"Submit",-1),w={style:{color:"white"}};function d(n,e,t,d,m,k){const f=(0,a.up)("MDBBtn"),h=(0,a.up)("MDBContainer");return(0,a.wg)(),(0,a.j4)(h,null,{default:(0,a.w5)((()=>[m.isToken?((0,a.wg)(),(0,a.iD)("form",{key:1,style:{"margin-top":"100px"},onSubmit:e[2]||(e[2]=(0,o.iM)(((...e)=>n.handleSubmitReset&&n.handleSubmitReset(...e)),["prevent"]))},[r,(0,a._)("div",l,[u,(0,a.wy)((0,a._)("input",{type:"password",class:"form-control",placeholder:"Uusi salasana","onUpdate:modelValue":e[0]||(e[0]=n=>m.newPw=n)},null,512),[[o.nr,m.newPw]])]),(0,a._)("div",i,[c,(0,a.wy)((0,a._)("input",{type:"password",class:"form-control",placeholder:"Toista salasana","onUpdate:modelValue":e[1]||(e[1]=n=>m.confirmNewPw=n)},null,512),[[o.nr,m.confirmNewPw]]),p])],32)):((0,a.wg)(),(0,a.j4)(f,{key:0,block:"",outline:"warning",onClick:k.handleOpenForm},{default:(0,a.w5)((()=>[(0,a.Uk)("Vaihtaa salasana")])),_:1},8,["onClick"])),(0,a._)("p",w,"Token "+(0,s.zw)(m.token),1)])),_:1})}var m=t(5081),k=t(4313),f={name:"Reset",components:{MDBContainer:k.L5,MDBBtn:k.$v},data(){return{newPw:"",confirmNewPw:"",isToken:!1,token:this.$route.params.token}},methods:{async handleOpenForm(){const n=await m.Z.reset(this.token);console.log("Token check result: "+n.status)},habdleSubmitReset(){}}},h=t(89);const b=(0,h.Z)(f,[["render",d]]);var _=b}}]);
//# sourceMappingURL=504.a3291a45.js.map