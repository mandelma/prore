"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[340,894],{7572:function(e,i,n){n.d(i,{Z:function(){return p}});var o=n(3396),s=n(7139);const t={key:0},l={class:"waiting-info"},r={key:1},a={class:"info"},d={key:0},m={key:1};function c(e,i,n,c,g,u){const k=(0,o.up)("monthConverter"),h=(0,o.up)("MDBBtnClose");return"for-recipient-test"===n.status?((0,o.wg)(),(0,o.iD)("div",t,[(0,o._)("div",l,[(0,o._)("b",null,(0,s.zw)(n.msg.provider),1),(0,o.Uk)(" - "+(0,s.zw)(n.msg.header)+" ",1),(0,o.Wm)(k,{num:n.msg.onTime[0].month},null,8,["num"]),(0,o.Uk)(", "+(0,s.zw)(n.msg.onTime[0].day)+", "+(0,s.zw)(n.msg.onTime[0].year)+" kello "+(0,s.zw)(n.msg.onTime[0].hours)+" : "+(0,s.zw)(n.msg.onTime[0].minutes),1)])])):((0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",a,[(0,o.Wm)(h,{class:"closeConfirmedBooking",onClick:u.handleCloseInfo},null,8,["onClick"]),"for-provider"===n.status?((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("h2",null,[(0,o._)("b",null,(0,s.zw)(n.msg.header),1)]),(0,o.Uk)(" "+(0,s.zw)(n.msg.address)+" ",1),(0,o.Wm)(k,{num:n.msg.onTime[0].month},null,8,["num"]),(0,o.Uk)(", "+(0,s.zw)(n.msg.onTime[0].day)+", "+(0,s.zw)(n.msg.onTime[0].year)+" kello "+(0,s.zw)(n.msg.onTime[0].hours)+" : "+(0,s.zw)(n.msg.onTime[0].minutes),1)])):"recipient"===n.status?((0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("b",null,(0,s.zw)(n.msg.provider),1),(0,o.Uk)(" - "+(0,s.zw)(n.msg.header)+" ",1),(0,o.Wm)(k,{num:n.msg.onTime[0].month},null,8,["num"]),(0,o.Uk)(", "+(0,s.zw)(n.msg.onTime[0].day)+", "+(0,s.zw)(n.msg.onTime[0].year)+" kello "+(0,s.zw)(n.msg.onTime[0].hours)+" : "+(0,s.zw)(n.msg.onTime[0].minutes),1)])):(0,o.kq)("",!0)])]))}var g=n(4313),u=n(5253),k={name:"Info",props:{status:String,msg:String},components:{MDBBtnClose:g.Ok,monthConverter:u.Z},methods:{handleCloseInfo(){this.$emit("close:info")}}},h=n(89);const f=(0,h.Z)(k,[["render",c],["__scopeId","data-v-0a2a8d86"]]);var p=f},8088:function(e,i,n){n.r(i),n.d(i,{default:function(){return Z}});var o=n(3396),s=n(7139);const t=e=>((0,o.dD)("data-v-fa8d549e"),e=e(),(0,o.Cn)(),e),l={key:0},r={key:1},a={key:0,class:"spinner-border",role:"status"},d=t((()=>(0,o._)("span",{class:"visually-hidden"},"Loading...",-1))),m=[d],c={key:1},g={key:0,id:"info-block"},u={class:"file-marker"},k=t((()=>(0,o._)("div",{class:"box-title"}," Kinnitatud broneeringud ",-1))),h={class:"box-contents"},f={key:0,id:"info-block-confirmed"},p={class:"file-marker"},w=t((()=>(0,o._)("div",{class:"box-title-confirmed"}," Broneering on ootel kui firma kinnitab ",-1))),v={class:"box-contents-confirmed"},B={key:1};function C(e,i,n,t,d,C){const b=(0,o.up)("recipientResult"),y=(0,o.up)("MDBCol"),_=(0,o.up)("bookingInfo"),T=(0,o.up)("MDBRow"),D=(0,o.up)("MDBBtn"),M=(0,o.up)("MDBContainer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(M,{style:{"margin-top":"200px"}},{default:(0,o.w5)((()=>[d.isBooking?((0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(b,{booking:d.booking,bookingTime:d.recipientDateTime,providers:d.providerMatchByProfession,confirmedBookings:d.confirmedBookings,line:d.line,"onSet:order:to:send":C.handleOrderToSend,"onRemove:confirmed:provider":C.handleConfirmedProvider,"onCansel:result":C.handleCanselResult,onFinalinfo:C.finalinfo,chatusers:n.chatusers,onSelect:C.selectUser,onMessage:C.onMessage,onChatCredentials:C.chatCredentials,onOtherUser:C.otherUser},null,8,["booking","bookingTime","providers","confirmedBookings","line","onSet:order:to:send","onRemove:confirmed:provider","onCansel:result","onFinalinfo","chatusers","onSelect","onMessage","onChatCredentials","onOtherUser"])])):((0,o.wg)(),(0,o.iD)("div",r,[d.bookings?((0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,{md:"6"}),(0,o.Wm)(y,{md:"6"},{default:(0,o.w5)((()=>[d.confirmedBookings.length>0?((0,o.wg)(),(0,o.iD)("aside",g,[(0,o._)("section",u,[(0,o._)("div",null,[k,(0,o._)("div",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.confirmedBookings,(e=>((0,o.wg)(),(0,o.j4)(_,{key:e.id,status:"recipient",msg:e},null,8,["msg"])))),128))])])])])):(0,o.kq)("",!0)])),_:1})])),_:1}),(0,o._)("h3",null,"Sinulla on hetkellä - "+(0,s.zw)(d.bookings.length)+" - avointa tilausta:",1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.bookings,(e=>((0,o.wg)(),(0,o.j4)(T,{key:e.id,class:"bookings"},{default:(0,o.w5)((()=>[d.clientConfirmedBookings.some((i=>i.id===e.id))?((0,o.wg)(),(0,o.iD)("aside",f,[(0,o._)("section",p,[(0,o._)("div",null,[w,(0,o._)("div",v,[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.date),1)])),_:2},1024),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.header),1)])),_:2},1024),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{outline:"info",block:"",size:"lg",onClick:i=>C.handleRecipientResult(e.id),disabled:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Tiedot")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])])])])):((0,o.wg)(),(0,o.iD)("aside",B,[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.date),1)])),_:2},1024),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.header),1)])),_:2},1024),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{outline:"info",block:"",size:"lg",onClick:i=>C.handleRecipientResult(e.id)},{default:(0,o.w5)((()=>[(0,o.Uk)("Tiedot")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)]))])),_:2},1024)))),128)),(0,o.Uk)(" ----------------------------------------------------------------- "),(0,o.Wm)(D,{outline:"info",block:"",size:"lg",onClick:C.newBooking},{default:(0,o.w5)((()=>[(0,o.Uk)("Teen uuden tilauksen")])),_:1},8,["onClick"]),(0,o.Wm)(D,{outline:"black",block:"",size:"lg",onClick:C.openMap},{default:(0,o.w5)((()=>[(0,o.Uk)("Asiantuntijoita ympärilläsi")])),_:1},8,["onClick"])])):((0,o.wg)(),(0,o.iD)("div",a,m))]))])),_:1})])}n(7658);var b=n(4313),y=n(4870),_=n(4648),T=n(9398),D=n(5800),M=n(7572);const z=()=>{var e=new google.maps.LatLng(60.233093,24.7531362),i=new google.maps.LatLng(60.2767265,24.8575089),n=new google.maps.DistanceMatrixService;n.getDistanceMatrix({origins:[e],destinations:[i],travelMode:"DRIVING",unitSystem:google.maps.UnitSystem.METRIC,durationInTraffic:!0,avoidHighways:!1,avoidTolls:!1},U)},U=(e,i)=>{i!==google.maps.DistanceMatrixStatus.OK||"OK"!==i?(console.log("Error:",i),alert(i)):alert(e.rows[0].elements[0].distance.text)},W=()=>{console.log("Is it working??")};var R={distance:z,test:W},x=n(5253),I={name:"recipient-panel",props:{chatusers:Array,recipientBookings:Array},data(){return{bookings:[],provider:{},booking:null,confirmedBookings:[],clientConfirmedBookings:[],isBooking:!1,providerMatchByProfession:[],providerMatchingRequirements:null,line:"",recipientDateTime:null}},setup(){const e=(0,y.iH)(!1);return{isAvailable:e}},components:{bookingInfo:M.Z,recipientResult:_["default"],MDBBtn:b.$v,MDBContainer:b.L5,MDBRow:b.uZ,MDBCol:b.TK},async mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const i=JSON.parse(e);this.userId=i.id,this.provider=await T.Z.getProvider(i.id),this.handleRecipientBookings()}else this.$router.push("/")},methods:{selectUser(e){this.$emit("select:user",e)},onMessage(e,i){this.$emit("on:message",e,i)},otherUser(e){this.$emit("otherUser",e)},finalinfo(e){console.log("Data in recipient panel "+e),this.$emit("finalinfo",e)},chatCredentials(e){this.$emit("chatCredentials",e)},async handleRecipientBookings(){let e=await D.Z.getOwnBookings(this.userId);this.confirmedBookings=e.filter((e=>"confirmed"===e.status)),this.clientConfirmedBookings=e.filter((e=>"notSeen"===e.status||"seen"===e.status)),this.bookings=e.filter((e=>"confirmed"!==e.status))},async handleRecipientResult(e){console.log("Provider id is: "+e),this.booking=await D.Z.getBookingById(e),console.log("Profession: "+this.booking.map((e=>e.professional)));let i=[];i=this.booking[0].professional,this.booking.map((e=>{this.recipientDateTime=new Date(2023,e.onTime[0].month,e.onTime[0].day,e.onTime[0].hours,e.onTime[0].minutes),console.log("Recipient datetime: "+e.onTime[0].day)})),console.log("xxx "+this.recipientDateTime.getTime()),this.line=i[0],this.providerMatchByProfession=await T.Z.getProvidersMatchingByProfession({result:i}),console.log("xxxxxx "+this.providerMatchByProfession.length),this.isBooking=!0},handleOrderToSend(e){console.log("Order is sended "+e),this.clientConfirmedBookings=this.clientConfirmedBookings.concat(this.booking)},newBooking(){this.$router.push("/rf")},handleConfirmedProvider(e){this.providerMatchByProfession=this.providerMatchByProfession.filter((i=>i.id!==e))},openMap(){this.$router.push("/recipient-public")},getDistance(){R.distance()},compareTime(){console.log("Month is: "+x.Z.month(4))},handleCanselResult(e){console.log("Canseled: "+e),this.isBooking=e}}},S=n(89);const P=(0,S.Z)(I,[["render",C],["__scopeId","data-v-fa8d549e"]]);var Z=P}}]);
//# sourceMappingURL=340.81af7749.js.map