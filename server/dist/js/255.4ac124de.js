"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[255],{5255:function(e,t,s){s.r(t),s.d(t,{default:function(){return O}});var l=s(3396),i=s(7139);const o=(0,l._)("td",null," Palautteet ",-1),n={key:0},a=(0,l._)("td",null," Y-tunnus ",-1),r=(0,l._)("td",null," Tuntihinta ",-1),c={key:1},u=(0,l._)("br",null,null,-1),d=(0,l._)("br",null,null,-1);function g(e,t,s,g,m,k){const p=(0,l.up)("MDBIcon"),h=(0,l.up)("MDBBadge"),v=(0,l.up)("MDBCol"),b=(0,l.up)("PositiveFeedback"),f=(0,l.up)("NegativeFeedback"),w=(0,l.up)("MDBRow"),y=(0,l.up)("MDBTable"),C=(0,l.up)("MDBBtn"),_=(0,l.up)("live-chat");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("h2",null,"- "+(0,i.zw)(s.provider.yritys)+" -",1),(0,l.Wm)(y,{style:{"font-size":"18px","text-align":"center"}},{default:(0,l.w5)((()=>[(0,l._)("tbody",null,[(0,l._)("tr",null,[o,(0,l._)("td",null,[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{style:{padding:"10px",cursor:"pointer"},i:"",class:"far fa-thumbs-up",size:"2x",onClick:k.getPositiveFeedback},null,8,["onClick"]),(0,l.Wm)(h,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(s.provider.rating.positive),1)])),_:1})])),_:1}),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{style:{padding:"10px",cursor:"pointer"},i:"",class:"far fa-thumbs-down",size:"2x",onClick:k.getNegativeFeedback},null,8,["onClick"]),(0,l.Wm)(h,{color:"danger",class:"translate-middle p-1",pill:"",size:"lg",notification:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(s.provider.rating.negative),1)])),_:1})])),_:1}),m.isPositive?((0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(b,{feedback:s.provider.feedback,"onClose:comments":k.closeComments},null,8,["feedback","onClose:comments"])])):(0,l.kq)("",!0),m.isNegative?((0,l.wg)(),(0,l.j4)(f,{key:1,feedback:s.provider.feedback,"onClose:comments":k.closeComments},null,8,["feedback","onClose:comments"])):(0,l.kq)("",!0)])),_:1})])]),(0,l._)("tr",null,[a,(0,l._)("td",null,(0,i.zw)(s.provider.ytunnus),1)]),(0,l._)("tr",null,[r,(0,l._)("td",null,(0,i.zw)(s.provider.priceByHour)+" euroa ",1)])])])),_:1}),m.isChat?((0,l.wg)(),(0,l.iD)("div",c,[(0,l._)("h3",{style:{color:"green",float:"right",cursor:"pointer"},onClick:t[1]||(t[1]=e=>m.isChat=!1)},"Valmis")])):((0,l.wg)(),(0,l.j4)(C,{key:0,block:"",color:"secondary",size:"lg",onClick:t[0]||(t[0]=e=>m.isChat=!0)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Kirjoita palveluntarjoajalle ")])),_:1})),u,d,m.isChat?((0,l.wg)(),(0,l.j4)(_,{key:2,test:k.test,chatusers:s.chatusers,messages:s.messages,selecteduser:s.selecteduser,"onSelect:user":k.selectUser,onNoSelected:k.noSelectUser,"onOn:message":k.onMessage},null,8,["test","chatusers","messages","selecteduser","onSelect:user","onNoSelected","onOn:message"])):(0,l.kq)("",!0),(0,l.Wm)(C,{outline:"info",block:"",size:"lg",onClick:t[2]||(t[2]=e=>k.handleOrder(s.provider))},{default:(0,l.w5)((()=>[(0,l.Uk)(" Tilaa yritys ")])),_:1}),(0,l.Wm)(C,{outline:"secondary",block:"",size:"lg",onClick:k.canselRecipientFinal},{default:(0,l.w5)((()=>[(0,l.Uk)(" Poistu ")])),_:1},8,["onClick"])])}var m=s(4313);const k={key:0,style:{"background-color":"lightgray",padding:"12px"}},p={key:1,style:{"background-color":"lightgray",padding:"12px"}},h=(0,l._)("br",null,null,-1),v=(0,l._)("br",null,null,-1),b=(0,l._)("h3",null,"Ei vielä arvostelua",-1);function f(e,t,s,o,n,a){const r=(0,l.up)("MDBListGroupItem"),c=(0,l.up)("MDBListGroup"),u=(0,l.up)("MDBBtn");return s.feedback.length>0?((0,l.wg)(),(0,l.iD)("div",k,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.feedback,(e=>((0,l.wg)(),(0,l.j4)(c,{light:"",small:"",style:{"text-align":"left"},key:e.id},{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.pos),1)])),_:2},1024)])),_:2},1024)))),128)),(0,l.Wm)(u,{block:"",outline:"secondary",size:"lg",onClick:a.closeFeedback},{default:(0,l.w5)((()=>[(0,l.Uk)("Poistu kommenteistä")])),_:1},8,["onClick"])])):((0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("h3",{style:{color:"green",float:"right",cursor:"pointer"},onClick:t[0]||(t[0]=(...e)=>a.closeFeedback&&a.closeFeedback(...e))},"Valmis"),h,v,b]))}var w={name:"positive-feedback",props:{feedback:Array},components:{MDBListGroup:m.d8,MDBListGroupItem:m.FQ,MDBBtn:m.$v},data(){return{}},methods:{closeFeedback(){this.$emit("close:comments",!1)}}},y=s(89);const C=(0,y.Z)(w,[["render",f]]);var _=C;const D={key:0,style:{"background-color":"lightgray",padding:"12px"}},B={key:0},M={key:1},F=(0,l._)("h3",null,"Ei vielä arvostelua",-1),U=[F],P={key:1,style:{"background-color":"lightgray",padding:"12px"}},z=(0,l._)("br",null,null,-1),W=(0,l._)("br",null,null,-1),N=(0,l._)("h3",null,"Ei vielä arvostelua",-1);function x(e,t,s,o,n,a){const r=(0,l.up)("MDBListGroupItem"),c=(0,l.up)("MDBListGroup"),u=(0,l.up)("MDBBtn");return s.feedback.length>0?((0,l.wg)(),(0,l.iD)("div",D,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.feedback,(e=>((0,l.wg)(),(0,l.j4)(c,{light:"",small:"",style:{"text-align":"left"},key:e.id},{default:(0,l.w5)((()=>[e.neg?((0,l.wg)(),(0,l.iD)("div",B,[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.neg),1)])),_:2},1024)])):((0,l.wg)(),(0,l.iD)("div",M,U))])),_:2},1024)))),128)),(0,l.Wm)(u,{block:"",outline:"secondary",size:"lg",onClick:a.closeFeedback},{default:(0,l.w5)((()=>[(0,l.Uk)("Poistu kommenteistä")])),_:1},8,["onClick"])])):((0,l.wg)(),(0,l.iD)("div",P,[(0,l._)("h3",{style:{color:"green",float:"right",cursor:"pointer"},onClick:t[0]||(t[0]=(...e)=>a.closeFeedback&&a.closeFeedback(...e))},"Valmis"),z,W,N]))}var T={name:"negative-feedback",props:{feedback:Array},components:{MDBListGroup:m.d8,MDBListGroupItem:m.FQ,MDBBtn:m.$v},data(){return{}},methods:{closeFeedback(){this.$emit("close:comments",!1)}}};const $=(0,y.Z)(T,[["render",x]]);var S=$,j=s(4336),G=s(4058),L=s(3467),Z=s(1426),A={name:"recipient-final",props:{test:Boolean,chatusers:Array,selecteduser:null,messages:Array,provider:Object,room:String,roomUserCount:Number,available:String,booking:Array},components:{User:L.Z,MessagePanel:Z.Z,PositiveFeedback:_,NegativeFeedback:S,liveChat:j["default"],MDBBtn:m.$v,MDBTable:m.re,MDBRow:m.uZ,MDBCol:m.TK,MDBIcon:m.vm,MDBBadge:m.m_},data(){return{selectedUser:null,isPositive:!1,isNegative:!1,isChat:!1,isPressedOpenChat:!1,isPressedContactToUser:!1,isConnection:!1,isTwoUsers:!1,feedback:this.provider.feedback,isPressedFinal:!1,count:0,userCount:0}},mounted(){},methods:{chatCredentials(){},sendToApp(){console.log("Pressed"),this.$emit("finalinfo","Tere siit finaalist")},selectUser(e){this.$emit("select",e)},noSelectUser(){this.$emit("noSelect")},onMessage(e,t){this.$emit("message",e,t)},test(e){console.log("From chat: "+e)},openChat(){this.isChat=!0,this.count++,console.log("this room is "+this.room)},contactToUser(){this.isPressedContactToUser=!0,G.Z.emit("updateRoom",this.room),G.Z.on("get updated room users",(e=>{console.log("New users update "+e.users.length),e.users.length>1?this.isConnection=!0:this.isConnection=!1})),this.isPressedFinal=!0,this.isChat=!0},handleOrder(e){this.$emit("provider:ordered",e)},getPositiveFeedback(){this.isPositive=!0,this.isNegative=!1},getNegativeFeedback(){this.isNegative=!0,this.isPositive=!1},closeComments(e){this.isPositive=this.isNegative=e,console.log("result "+e)},canselRecipientFinal(){this.isChat=!1,this.$emit("cansel:final",!1),this.noSelectUser()}}};const I=(0,y.Z)(A,[["render",g]]);var O=I}}]);
//# sourceMappingURL=255.4ac124de.js.map