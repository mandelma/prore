"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[648,380],{8033:function(e,t,s){var i=s(3396);const o=({message:e})=>null===e?null:(0,i.Wm)("div",{className:"success"},[e]);t.Z=o},5380:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var i=s(3396),o=s(7139);function n(e,t,s,n,l,r){const a=(0,i.up)("MDBIcon"),u=(0,i.up)("MDBBadge"),d=(0,i.up)("PositiveFeedback"),c=(0,i.up)("MDBCol"),m=(0,i.up)("NegativeFeedback"),g=(0,i.up)("MDBRow"),h=(0,i.up)("MDBTable"),k=(0,i.up)("User"),p=(0,i.up)("MessagePanel"),f=(0,i.up)("MDBBtn");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("h2",null,"- "+(0,o.zw)(s.provider.yritys)+" -",1),(0,i.Wm)(h,{style:{"font-size":"18px","text-align":"center"}},{default:(0,i.w5)((()=>[(0,i._)("tbody",null,[(0,i._)("tr",null,[(0,i._)("td",null,[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(a,{style:{padding:"10px",cursor:"pointer"},i:"",class:"far fa-thumbs-up",size:"2x",onClick:r.getPositiveFeedback},null,8,["onClick"]),(0,i.Wm)(u,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,i.w5)((()=>[(0,i.Uk)("100")])),_:1}),l.isPositive?((0,i.wg)(),(0,i.j4)(d,{key:0,"onClose:comments":r.closeComments},null,8,["onClose:comments"])):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(a,{style:{padding:"10px",cursor:"pointer"},i:"",class:"far fa-thumbs-down",size:"2x",onClick:r.getNegativeFeedback},null,8,["onClick"]),(0,i.Wm)(u,{color:"danger",class:"translate-middle p-1",pill:"",size:"lg",notification:""},{default:(0,i.w5)((()=>[(0,i.Uk)("2")])),_:1}),l.isNegative?((0,i.wg)(),(0,i.j4)(m,{key:0,"onClose:comments":r.closeComments},null,8,["onClose:comments"])):(0,i.kq)("",!0)])),_:1})])),_:1})])])])])),_:1}),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.chatusers,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.userID},[(0,i.Wm)(k,{user:e,selected:l.selectedUser===e,onSelect:t=>r.selectUser(e)},null,8,["user","selected","onSelect"])])))),128)),l.selectedUser?((0,i.wg)(),(0,i.j4)(p,{key:0,user:l.selectedUser,"onNew:message":r.onMessage},null,8,["user","onNew:message"])):(0,i.kq)("",!0),(0,i.Wm)(f,{outline:"info",block:"",size:"lg",onClick:t[0]||(t[0]=e=>r.handleOrder(s.provider.id))},{default:(0,i.w5)((()=>[(0,i.Uk)(" Tilaa yritys ")])),_:1}),(0,i.Wm)(f,{outline:"secondary",block:"",size:"lg",onClick:r.canselRecipientFinal},{default:(0,i.w5)((()=>[(0,i.Uk)(" Poistu ")])),_:1},8,["onClick"])])}var l=s(4313);function r(e,t,s,o,n,l){const r=(0,i.up)("MDBListGroupItem"),a=(0,i.up)("MDBListGroup"),u=(0,i.up)("MDBBtn");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(a,{light:"",small:"",style:{"text-align":"left"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Uk)("22.01.2023 Väga hea töö! Kiidan tegijat")])),_:1}),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Uk)("05.03.2023 Super, ainult parimad sõnad tehtud töö kohta. Soovitan soojalt!!")])),_:1})])),_:1}),(0,i.Wm)(u,{block:"",outline:"secondary",size:"lg",onClick:l.closeFeedback},{default:(0,i.w5)((()=>[(0,i.Uk)("Poistu kommenteistä")])),_:1},8,["onClick"])])}var a={name:"positive-feedback",components:{MDBListGroup:l.d8,MDBListGroupItem:l.FQ,MDBBtn:l.$v},data(){return{}},methods:{closeFeedback(){this.$emit("close:comments",!1)}}},u=s(89);const d=(0,u.Z)(a,[["render",r]]);var c=d;function m(e,t,s,o,n,l){const r=(0,i.up)("MDBListGroupItem"),a=(0,i.up)("MDBListGroup"),u=(0,i.up)("MDBBtn");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(a,{light:"",small:"",style:{"text-align":"left"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Uk)("19.04.2023 Huias täiega ja tegi sitta!")])),_:1}),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Uk)("05.05.2023 Võttis ainult raha ja jättis töö tegemata. Ainult jõi ja suitsetas kogu aeg!")])),_:1})])),_:1}),(0,i.Wm)(u,{block:"",outline:"secondary",size:"lg",onClick:l.closeFeedback},{default:(0,i.w5)((()=>[(0,i.Uk)("Poistu kommenteistä")])),_:1},8,["onClick"])])}var g={name:"negative-feedback",components:{MDBListGroup:l.d8,MDBListGroupItem:l.FQ,MDBBtn:l.$v},data(){return{}},methods:{closeFeedback(){this.$emit("close:comments",!1)}}};const h=(0,u.Z)(g,[["render",m]]);var k=h,p=s(4058),f=s(8626),v=s(401),w={name:"recipient-final",props:{chatusers:Array,provider:Object,room:String,roomUserCount:Number,available:String,booking:Array},components:{User:f.Z,MessagePanel:v.Z,PositiveFeedback:c,NegativeFeedback:k,MDBBtn:l.$v,MDBTable:l.re,MDBRow:l.uZ,MDBCol:l.TK,MDBIcon:l.vm,MDBBadge:l.m_},data(){return{selectedUser:null,isPositive:!1,isNegative:!1,isChat:!1,isPressedOpenChat:!1,isPressedContactToUser:!1,isConnection:!1,isTwoUsers:!1,isPressedFinal:!1,count:0,userCount:0}},mounted(){},methods:{chatCredentials(){},sendToApp(){console.log("Pressed"),this.$emit("finalinfo","Tere siit finaalist")},selectUser(e){this.$emit("select",e),this.selectedUser=e},onMessage(e,t){this.$emit("message",e,t)},test(e){console.log("From chat: "+e)},openChat(){this.isChat=!0,this.count++,console.log("this room is "+this.room)},contactToUser(){this.isPressedContactToUser=!0,p.Z.emit("updateRoom",this.room),p.Z.on("get updated room users",(e=>{console.log("New users update "+e.users.length),e.users.length>1?this.isConnection=!0:this.isConnection=!1})),this.isPressedFinal=!0,this.isChat=!0,p.Z.disconnect(),p.Z.connect()},handleOrder(e){this.$emit("provider:ordered",e)},getPositiveFeedback(){this.isPositive=!0,this.isNegative=!1},getNegativeFeedback(){this.isNegative=!0,this.isPositive=!1},closeComments(e){this.isPositive=this.isNegative=e,console.log("result "+e)},canselRecipientFinal(){this.isChat=!1,this.$emit("cansel:final",!1)}}};const y=(0,u.Z)(w,[["render",n]]);var b=y},4648:function(e,t,s){s.r(t),s.d(t,{default:function(){return T}});var i=s(3396),o=s(7139);const n=e=>((0,i.dD)("data-v-c70dc960"),e=e(),(0,i.Cn)(),e),l=["src"],r={key:0},a=n((()=>(0,i._)("h2",null,"Ordered",-1))),u={key:0},d={key:0},c=n((()=>(0,i._)("h4",null,"Saatavilla sen aikaan",-1))),m={key:1},g=n((()=>(0,i._)("h4",null,"Sovittaessa",-1))),h=n((()=>(0,i._)("tr",null,null,-1))),k={key:1},p=n((()=>(0,i._)("h2",null,"Yrityksiä hetkellä ei löytyy",-1))),f=[p];function v(e,t,n,p,v,w){const y=(0,i.up)("recipientFinal"),b=(0,i.up)("MDBContainer"),D=(0,i.up)("successMessage"),C=(0,i.up)("MDBBtn"),_=(0,i.up)("MDBTable"),M=(0,i.up)("MDBCol"),B=(0,i.up)("MDBBadge"),U=(0,i.up)("MDBRow");return v.isProviderSelected?((0,i.wg)(),(0,i.j4)(b,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{"onCansel:final":w.handleCanselFinal,"onProvider:ordered":w.orderSuccess,provider:v.selectedProvider,room:v.room,available:v.availability,booking:n.booking,chatusers:n.chatusers,onMessage:w.onMessage,onSelect:w.selectUser,onFinalinfo:w.finalinfo},null,8,["onCansel:final","onProvider:ordered","provider","room","available","booking","chatusers","onMessage","onSelect","onFinalinfo"])])),_:1})):((0,i.wg)(),(0,i.j4)(b,{key:1},{default:(0,i.w5)((()=>[(0,i._)("h3",null,"Päivämäärä: "+(0,o.zw)(n.booking[0].date),1),(0,i._)("h2",null,"Tarvin tässä osaaja - "+(0,o.zw)(n.line),1),(0,i.Wm)(D,{message:v.orderMessage},null,8,["message"]),(0,i.Wm)(U,null,{default:(0,i.w5)((()=>[(0,i.Wm)(M,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,{border:"primary",style:{"font-size":"18px","text-align":"left"}},{default:(0,i.w5)((()=>[(0,i._)("tbody",null,[(0,i._)("tr",null,[(0,i._)("td",null,(0,o.zw)(n.booking[0].description),1)]),(0,i._)("tr",null,[(0,i._)("td",null,[(0,i.Wm)(C,{outline:"info",block:"",size:"lg"},{default:(0,i.w5)((()=>[(0,i.Uk)("Muokkaa tehtävän kuvausta")])),_:1})])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.booking,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.id},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.image,(t=>((0,i.wg)(),(0,i.iD)("td",{key:t._id},[(0,i._)("img",{src:s(3866)(`./${e.image.map((e=>e.name))}`),style:{width:"100%"},alt:"kuva"},null,8,l)])))),128))])))),128)),(0,i._)("tr",null,[n.booking[0].image?((0,i.wg)(),(0,i.iD)("td",r,[(0,i.Wm)(C,{outline:"info",block:"",size:"lg"},{default:(0,i.w5)((()=>[(0,i.Uk)("Muokkaa kuva tehtävästä")])),_:1})])):(0,i.kq)("",!0)])])])),_:1})])),_:1}),v.isOrdered?((0,i.wg)(),(0,i.j4)(M,{key:0},{default:(0,i.w5)((()=>[a])),_:1})):((0,i.wg)(),(0,i.j4)(M,{key:1},{default:(0,i.w5)((()=>[n.providers.length>0?((0,i.wg)(),(0,i.iD)("div",u,[(0,i.Wm)(_,{border:"primary",style:{"font-size":"18px","text-align":"center"}},{default:(0,i.w5)((()=>[(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.providers,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.id},[e.timeoffer.map((e=>v.datetime.providerMatchingForClient(n.bookingTime,{y:2023,m:e.monthFrom,d:e.dayFrom,hour:e.hoursFrom,min:e.minutesFrom},{y:2023,m:e.monthTo,d:e.dayTo,hour:e.hoursTo,min:e.minutesTo}))).includes(!0)?((0,i.wg)(),(0,i.iD)("td",d,[(0,i.Wm)(C,{style:{width:"200px",padding:"20px","background-color":"grey",border:"solid #4c4949",color:"#f0eeee","font-size":"150%"},outline:"info",size:"lg",onClick:t=>w.getProviderInfo(e,"green")},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e.yritys),1)])),_:2},1032,["onClick"]),(0,i.Wm)(B,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,i.w5)((()=>[c])),_:1})])):((0,i.wg)(),(0,i.iD)("td",m,[(0,i.Wm)(C,{style:{width:"200px",padding:"20px","background-color":"#999797",border:"solid #5f5d5d",color:"#f0eeee","font-size":"150%"},size:"lg",onClick:t=>w.getProviderInfo(e,"orange")},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e.yritys),1)])),_:2},1032,["onClick"]),(0,i.Wm)(B,{color:"info",class:"translate-middle p-1",pill:"",notification:""},{default:(0,i.w5)((()=>[g])),_:1})]))])))),128)),h])])),_:1})])):((0,i.wg)(),(0,i.iD)("div",k,f))])),_:1})),(0,i.Wm)(C,{block:"",outline:"danger",size:"lg",onClick:w.canselResult},{default:(0,i.w5)((()=>[(0,i.Uk)("Takaisin")])),_:1},8,["onClick"])])),_:1})])),_:1}))}var w=s(4313);const y=(e,t)=>{const s=new Date(e.y,e.m,e.d,e.hour,e.min),i=new Date(t.y,t.m,t.d,t.hour,t.min);return i>=s},b=(e,t,s)=>{const i=new Date(t.y,t.m,t.d,t.hour,t.min),o=new Date(s.y,s.m,s.d,s.hour,s.min);return e>=i&&e<o};var D={compare:y,providerMatchingForClient:b},C=s(5380),_=s(8033),M=s(9398),B=s(5800),U=s(4058),P={name:"recipient-panel-result",props:{chatusers:Array,loggedInUser:Object,booking:null,bookingTime:null,providers:[],confirmedBookings:Array,line:String},data(){return{chatUser:{},count:0,datetime:D,selectedProvider:null,isProviderSelected:!1,availability:"",orderMessage:null,isOrdered:!1,room:"",roomUserCount:0}},components:{successMessage:_.Z,recipientFinal:C["default"],MDBBtn:w.$v,MDBContainer:w.L5,MDBTable:w.re,MDBRow:w.uZ,MDBCol:w.TK,MDBBadge:w.m_},methods:{selectUser(e){this.$emit("select",e)},onMessage(e,t){this.$emit("message",e,t)},finalinfo(e){console.log("Final info in result pressed "),this.$emit("finalinfo",e)},getChatCredentials(){},async orderSuccess(e){this.isProviderSelected=!1,console.log("Provider id "+e),console.log("Recpient id: "+this.booking[0].id);const t=await B.Z.updateRecipient(this.booking[0].id,{status:"notSeen"});console.log("Is status updated: "+t.status),this.$emit("remove:confirmed:provider",e),this.$emit("set:order:to:send",this.booking[0].id);const s=this.booking[0].id,i=await M.Z.addProviderBooking(e,s);"Recipient is added!"===i?(this.orderMessage="Tilaus on lähetetty vahvistettavaksi! Kiitos!",console.log("Booking made - id: "+i.id),this.isOrdered=!0,setTimeout((()=>{this.orderMessage=null}),3e3)):(this.orderMessage="Olet jo lähetännyt tilauksen!",setTimeout((()=>{this.orderMessage=null}),3e3))},getProviderInfo(e,t){this.selectedProvider=e,this.availability=t,this.isProviderSelected=!0,console.log("Booking username "+this.booking[0].user.username),console.log("Recipient room: "+(e.yritys+this.booking[0].user.username)),this.room=e.yritys+this.booking[0].user.username,U.Z.emit("room users count"),U.Z.on("get room users count",(e=>{console.log("Can we get users data from backend in recipient final??? "+e.users.length),this.roomUserCount=e.users.length}));const s=this.booking[0].user.username,i=e.yritys+this.booking[0].user.username,o={room:i,userID:this.chatUser.id,username:s},n={userID:e.user.id,username:e.user.username,room:i};this.$emit("otherUser",n),this.$emit("chatCredentials",o),U.Z.emit("update room",i)},handleCanselFinal(e){this.isProviderSelected=e},canselResult(){this.$emit("cansel:result",!1)}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.chatUser=t}}},W=s(89);const F=(0,W.Z)(P,[["render",v],["__scopeId","data-v-c70dc960"]]);var T=F}}]);
//# sourceMappingURL=648.03e91945.js.map