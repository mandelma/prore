"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[834],{2834:function(e,t,s){s.r(t),s.d(t,{default:function(){return L}});var l=s(3396),o=s(7139);const i=(0,l._)("td",null," Palautteet ",-1),n={key:0},a=(0,l._)("td",null," Y-tunnus ",-1),r=(0,l._)("td",null," Tuntihinta ",-1),c={key:1},u=(0,l._)("br",null,null,-1),d=(0,l._)("br",null,null,-1);function g(e,t,s,g,m,p){const k=(0,l.up)("MDBIcon"),h=(0,l.up)("MDBBadge"),v=(0,l.up)("MDBCol"),b=(0,l.up)("PositiveFeedback"),f=(0,l.up)("NegativeFeedback"),C=(0,l.up)("MDBRow"),w=(0,l.up)("MDBTable"),y=(0,l.up)("MDBBtn"),_=(0,l.up)("live-chat");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("h2",null,"- "+(0,o.zw)(s.provider.yritys)+" -",1),(0,l.Wm)(w,{style:{"font-size":"18px","text-align":"center"}},{default:(0,l.w5)((()=>[(0,l._)("tbody",null,[(0,l._)("tr",null,[i,(0,l._)("td",null,[(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{style:{padding:"10px",cursor:"pointer"},i:"",class:"far fa-thumbs-up",size:"2x",onClick:p.getPositiveFeedback},null,8,["onClick"]),(0,l.Wm)(h,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.provider.rating.positive),1)])),_:1})])),_:1}),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{style:{padding:"10px",cursor:"pointer"},i:"",class:"far fa-thumbs-down",size:"2x",onClick:p.getNegativeFeedback},null,8,["onClick"]),(0,l.Wm)(h,{color:"danger",class:"translate-middle p-1",pill:"",size:"lg",notification:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.provider.rating.negative),1)])),_:1})])),_:1}),m.isPositive?((0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(b,{feedback:s.provider.feedback,"onClose:comments":p.closeComments},null,8,["feedback","onClose:comments"])])):(0,l.kq)("",!0),m.isNegative?((0,l.wg)(),(0,l.j4)(f,{key:1,feedback:s.provider.feedback,"onClose:comments":p.closeComments},null,8,["feedback","onClose:comments"])):(0,l.kq)("",!0)])),_:1})])]),(0,l._)("tr",null,[a,(0,l._)("td",null,(0,o.zw)(s.provider.ytunnus),1)]),(0,l._)("tr",null,[r,(0,l._)("td",null,(0,o.zw)(s.provider.priceByHour)+" euroa ",1)])])])),_:1}),m.isChat?((0,l.wg)(),(0,l.iD)("div",c,[(0,l._)("h3",{style:{color:"green",float:"right",cursor:"pointer"},onClick:t[1]||(t[1]=e=>m.isChat=!1)},"Valmis")])):((0,l.wg)(),(0,l.j4)(y,{key:0,block:"",color:"secondary",size:"lg",onClick:t[0]||(t[0]=e=>m.isChat=!0)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Kirjoita palveluntarjoajalle ")])),_:1})),u,d,m.isChat?((0,l.wg)(),(0,l.j4)(_,{key:2,chatusers:s.chatusers,messages:s.messages,selecteduser:s.selecteduser,"onSelect:user":p.selectUser,onNoSelected:p.noSelectUser,"onOn:message":p.onMessage},null,8,["chatusers","messages","selecteduser","onSelect:user","onNoSelected","onOn:message"])):(0,l.kq)("",!0),(0,l.Wm)(y,{outline:"info",block:"",size:"lg",onClick:t[2]||(t[2]=e=>p.handleOrder(s.provider))},{default:(0,l.w5)((()=>[(0,l.Uk)(" Tilaa yritys ")])),_:1}),(0,l.Wm)(y,{outline:"secondary",block:"",size:"lg",onClick:p.canselRecipientFinal},{default:(0,l.w5)((()=>[(0,l.Uk)(" Poistu ")])),_:1},8,["onClick"])])}var m=s(4313);const p={key:0,style:{"background-color":"lightgray",padding:"12px"}},k={key:1,style:{"background-color":"lightgray",padding:"12px"}},h=(0,l._)("br",null,null,-1),v=(0,l._)("br",null,null,-1),b=(0,l._)("h3",null,"Ei vielä arvostelua",-1);function f(e,t,s,i,n,a){const r=(0,l.up)("MDBListGroupItem"),c=(0,l.up)("MDBListGroup"),u=(0,l.up)("MDBBtn");return s.feedback.pos?((0,l.wg)(),(0,l.iD)("div",p,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.feedback,(e=>((0,l.wg)(),(0,l.j4)(c,{light:"",small:"",style:{"text-align":"left"},key:e.id},{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.pos),1)])),_:2},1024)])),_:2},1024)))),128)),(0,l.Wm)(u,{block:"",outline:"secondary",size:"lg",onClick:a.closeFeedback},{default:(0,l.w5)((()=>[(0,l.Uk)("Poistu kommenteistä")])),_:1},8,["onClick"])])):((0,l.wg)(),(0,l.iD)("div",k,[(0,l._)("h3",{style:{color:"green",float:"right",cursor:"pointer"},onClick:t[0]||(t[0]=(...e)=>a.closeFeedback&&a.closeFeedback(...e))},"Valmis"),h,v,b]))}var C={name:"positive-feedback",props:{feedback:Array},components:{MDBListGroup:m.d8,MDBListGroupItem:m.FQ,MDBBtn:m.$v},data(){return{}},methods:{closeFeedback(){this.$emit("close:comments",!1)}}},w=s(89);const y=(0,w.Z)(C,[["render",f]]);var _=y;const B={key:0,style:{"background-color":"lightgray",padding:"12px"}},D={key:1,style:{"background-color":"lightgray",padding:"12px"}},M=(0,l._)("br",null,null,-1),F=(0,l._)("br",null,null,-1),U=(0,l._)("h3",null,"Ei vielä arvostelua",-1);function P(e,t,s,i,n,a){const r=(0,l.up)("MDBListGroupItem"),c=(0,l.up)("MDBListGroup"),u=(0,l.up)("MDBBtn");return s.feedback.neg?((0,l.wg)(),(0,l.iD)("div",B,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.feedback,(e=>((0,l.wg)(),(0,l.j4)(c,{light:"",small:"",style:{"text-align":"left"},key:e.id},{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.neg),1)])),_:2},1024)])),_:2},1024)))),128)),(0,l.Wm)(u,{block:"",outline:"secondary",size:"lg",onClick:a.closeFeedback},{default:(0,l.w5)((()=>[(0,l.Uk)("Poistu kommenteistä")])),_:1},8,["onClick"])])):((0,l.wg)(),(0,l.iD)("div",D,[(0,l._)("h3",{style:{color:"green",float:"right",cursor:"pointer"},onClick:t[0]||(t[0]=(...e)=>a.closeFeedback&&a.closeFeedback(...e))},"Valmis"),M,F,U]))}var z={name:"negative-feedback",props:{feedback:Array},components:{MDBListGroup:m.d8,MDBListGroupItem:m.FQ,MDBBtn:m.$v},data(){return{}},methods:{closeFeedback(){this.$emit("close:comments",!1)}}};const W=(0,w.Z)(z,[["render",P]]);var N=W,x=s(2753),T=s(4058),$=s(7944),S=s(6283),j={name:"recipient-final",props:{chatusers:Array,selecteduser:null,messages:Array,provider:Object,room:String,roomUserCount:Number,available:String,booking:Array},components:{User:$.Z,MessagePanel:S.Z,PositiveFeedback:_,NegativeFeedback:N,liveChat:x["default"],MDBBtn:m.$v,MDBTable:m.re,MDBRow:m.uZ,MDBCol:m.TK,MDBIcon:m.vm,MDBBadge:m.m_},data(){return{selectedUser:null,isPositive:!1,isNegative:!1,isChat:!1,isPressedOpenChat:!1,isPressedContactToUser:!1,isConnection:!1,isTwoUsers:!1,feedback:this.provider.feedback,isPressedFinal:!1,count:0,userCount:0}},mounted(){},methods:{chatCredentials(){},sendToApp(){console.log("Pressed"),this.$emit("finalinfo","Tere siit finaalist")},selectUser(e){this.$emit("select",e)},noSelectUser(){this.$emit("noSelect")},onMessage(e,t){this.$emit("message",e,t)},test(e){console.log("From chat: "+e)},openChat(){this.isChat=!0,this.count++,console.log("this room is "+this.room)},contactToUser(){this.isPressedContactToUser=!0,T.Z.emit("updateRoom",this.room),T.Z.on("get updated room users",(e=>{console.log("New users update "+e.users.length),e.users.length>1?this.isConnection=!0:this.isConnection=!1})),this.isPressedFinal=!0,this.isChat=!0},handleOrder(e){this.$emit("provider:ordered",e)},getPositiveFeedback(){this.isPositive=!0,this.isNegative=!1},getNegativeFeedback(){this.isNegative=!0,this.isPositive=!1},closeComments(e){this.isPositive=this.isNegative=e,console.log("result "+e)},canselRecipientFinal(){this.isChat=!1,this.$emit("cansel:final",!1),this.noSelectUser()}}};const G=(0,w.Z)(j,[["render",g]]);var L=G}}]);
//# sourceMappingURL=834.d6646c0b.js.map