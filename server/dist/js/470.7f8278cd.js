"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[470,487],{7572:function(e,i,n){n.d(i,{Z:function(){return p}});var o=n(3396),s=n(7139);const t={key:0},l={class:"waiting-info"},r={key:1},a={class:"info"},d={key:0},c={key:1};function u(e,i,n,u,m,g){const h=(0,o.up)("monthConverter"),k=(0,o.up)("MDBBtnClose");return"for-recipient-test"===n.status?((0,o.wg)(),(0,o.iD)("div",t,[(0,o._)("div",l,[(0,o._)("b",null,(0,s.zw)(n.msg.provider),1),(0,o.Uk)(" - "+(0,s.zw)(n.msg.header)+" ",1),(0,o.Wm)(h,{num:n.msg.onTime[0].month},null,8,["num"]),(0,o.Uk)(", "+(0,s.zw)(n.msg.onTime[0].day)+", "+(0,s.zw)(n.msg.onTime[0].year)+" kello "+(0,s.zw)(n.msg.onTime[0].hours)+" : "+(0,s.zw)(n.msg.onTime[0].minutes),1)])])):((0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",a,[(0,o.Wm)(k,{class:"closeConfirmedBooking",onClick:g.handleCloseInfo},null,8,["onClick"]),"for-provider"===n.status?((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("h2",null,[(0,o._)("b",null,(0,s.zw)(n.msg.header),1)]),(0,o.Uk)(" "+(0,s.zw)(n.msg.address)+" ",1),(0,o.Wm)(h,{num:n.msg.onTime[0].month},null,8,["num"]),(0,o.Uk)(", "+(0,s.zw)(n.msg.onTime[0].day)+", "+(0,s.zw)(n.msg.onTime[0].year)+" kello "+(0,s.zw)(n.msg.onTime[0].hours)+" : "+(0,s.zw)(n.msg.onTime[0].minutes),1)])):"recipient"===n.status?((0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("b",null,(0,s.zw)(n.msg.provider),1),(0,o.Uk)(" - "+(0,s.zw)(n.msg.header)+" ",1),(0,o.Wm)(h,{num:n.msg.onTime[0].month},null,8,["num"]),(0,o.Uk)(", "+(0,s.zw)(n.msg.onTime[0].day)+", "+(0,s.zw)(n.msg.onTime[0].year)+" kello "+(0,s.zw)(n.msg.onTime[0].hours)+" : "+(0,s.zw)(n.msg.onTime[0].minutes),1)])):(0,o.kq)("",!0)])]))}var m=n(4313),g=n(5253),h={name:"Info",props:{status:String,msg:String},components:{MDBBtnClose:m.Ok,monthConverter:g.Z},methods:{handleCloseInfo(){this.$emit("close:info")}}},k=n(89);const f=(0,k.Z)(h,[["render",u],["__scopeId","data-v-0a2a8d86"]]);var p=f},6108:function(e,i,n){n.r(i),n.d(i,{default:function(){return I}});var o=n(3396),s=n(7139);const t=e=>((0,o.dD)("data-v-4bed1bd6"),e=e(),(0,o.Cn)(),e),l={key:0},r={key:1},a={key:0,class:"spinner-border",role:"status"},d=t((()=>(0,o._)("span",{class:"visually-hidden"},"Loading...",-1))),c=[d],u={key:1},m={key:0,id:"info-block"},g={class:"file-marker"},h=t((()=>(0,o._)("div",{class:"box-title"}," Kinnitatud broneeringud ",-1))),k={class:"box-contents"},f={key:0,id:"info-block-confirmed"},p={class:"file-marker"},w=t((()=>(0,o._)("div",{class:"box-title-confirmed"}," Broneering on ootel kui firma kinnitab ",-1))),v={class:"box-contents-confirmed"},B={key:1};function C(e,i,n,t,d,C){const b=(0,o.up)("recipientResult"),y=(0,o.up)("MDBCol"),_=(0,o.up)("bookingInfo"),T=(0,o.up)("MDBRow"),D=(0,o.up)("MDBBtn"),M=(0,o.up)("live-chat"),z=(0,o.up)("MDBContainer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(z,{style:{"margin-top":"200px"}},{default:(0,o.w5)((()=>[d.isBooking?((0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(b,{booking:d.booking,bookingTime:d.recipientDateTime,providers:d.providerMatchByProfession,confirmedBookings:d.confirmedBookings,line:d.line,"onSet:order:to:send":C.handleOrderToSend,"onRemove:confirmed:provider":C.handleConfirmedProvider,"onCansel:result":C.handleCanselResult,onFinalinfo:C.finalinfo,chatusers:n.chatusers,selecteduser:n.selecteduser,messages:n.messages,onSelect:C.selectUser,onMessage:C.onMessage,onChatCredentials:C.chatCredentials,onFilter_provider:C.handleFilterProvider,onOtherUser:C.otherUser},null,8,["booking","bookingTime","providers","confirmedBookings","line","onSet:order:to:send","onRemove:confirmed:provider","onCansel:result","onFinalinfo","chatusers","selecteduser","messages","onSelect","onMessage","onChatCredentials","onFilter_provider","onOtherUser"])])):((0,o.wg)(),(0,o.iD)("div",r,[d.bookings?((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,{md:"6"}),(0,o.Wm)(y,{md:"6"},{default:(0,o.w5)((()=>[d.confirmedBookings.length>0?((0,o.wg)(),(0,o.iD)("aside",m,[(0,o._)("section",g,[(0,o._)("div",null,[h,(0,o._)("div",k,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.confirmedBookings,(e=>((0,o.wg)(),(0,o.j4)(_,{key:e.id,status:"recipient",msg:e},null,8,["msg"])))),128))])])])])):(0,o.kq)("",!0)])),_:1})])),_:1}),(0,o._)("h3",null,"Sinulla on hetkellä - "+(0,s.zw)(d.bookings.length)+" - avointa tilausta:",1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.bookings,((e,i)=>((0,o.wg)(),(0,o.j4)(T,{key:e.id,class:"bookings"},{default:(0,o.w5)((()=>[d.clientConfirmedBookings.some((i=>i.id===e.id))?((0,o.wg)(),(0,o.iD)("aside",f,[(0,o._)("section",p,[(0,o._)("div",null,[w,(0,o._)("div",v,[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.date),1)])),_:2},1024),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.header),1)])),_:2},1024),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[d.isChat?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(D,{key:0,outline:"secondary",block:"",size:"lg",onClick:n=>C.contactToProvider(e,i)},{default:(0,o.w5)((()=>[(0,o.Uk)("Ava chat")])),_:2},1032,["onClick"])),d.isChat?((0,o.wg)(),(0,o.j4)(D,{key:1,outline:"danger",block:"",size:"lg",onClick:C.bookingWaitingProBackBtn},{default:(0,o.w5)((()=>[(0,o.Uk)("Poistu")])),_:1},8,["onClick"])):(0,o.kq)("",!0)])),_:2},1024)])),_:2},1024),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y),(0,o.Wm)(y,{style:{"text-align":"center"}},{default:(0,o.w5)((()=>[d.selectedIndex===i&&d.isChat?((0,o.wg)(),(0,o.j4)(M,{key:0,chatusers:n.chatusers,messages:n.messages,selecteduser:n.selecteduser,"onSelect:user":C.selectUser,"onOn:message":C.onMessage},null,8,["chatusers","messages","selecteduser","onSelect:user","onOn:message"])):(0,o.kq)("",!0)])),_:2},1024),(0,o.Wm)(y)])),_:2},1024)])])])])):((0,o.wg)(),(0,o.iD)("aside",B,[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.date),1)])),_:2},1024),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.header),1)])),_:2},1024),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{outline:"info",block:"",size:"lg",onClick:i=>C.handleRecipientResult(e.id)},{default:(0,o.w5)((()=>[(0,o.Uk)("Tiedot")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)]))])),_:2},1024)))),128)),(0,o.Uk)(" ----------------------------------------------------------------- "),(0,o.Wm)(D,{outline:"info",block:"",size:"lg",onClick:C.newBooking},{default:(0,o.w5)((()=>[(0,o.Uk)("Teen uuden tilauksen")])),_:1},8,["onClick"]),(0,o.Wm)(D,{outline:"black",block:"",size:"lg",onClick:C.openMap},{default:(0,o.w5)((()=>[(0,o.Uk)("Asiantuntijoita ympärilläsi")])),_:1},8,["onClick"])])):((0,o.wg)(),(0,o.iD)("div",a,c))]))])),_:1})])}n(7658);var b=n(4313),y=n(4870),_=n(686),T=n(5091),D=n(9398),M=n(5800),z=n(7572),W=n(5253),P=n(4058),U={name:"recipient-panel",props:{chatusers:Array,selecteduser:null,messages:Array,recipientBookings:Array},data(){return{bookings:[],provider:{},booking:null,isChat:!1,selectedIndex:null,d:null,confirmedBookings:[],clientConfirmedBookings:[],isBooking:!1,providerMatchByProfession:[],providerMatchingRequirements:null,line:"",recipientDateTime:null}},setup(){const e=(0,y.iH)(!1);return{isAvailable:e}},components:{liveChat:_["default"],bookingInfo:z.Z,recipientResult:T["default"],MDBBtn:b.$v,MDBContainer:b.L5,MDBRow:b.uZ,MDBCol:b.TK},async mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const i=JSON.parse(e);this.userId=i.id,this.provider=await D.Z.getProvider(i.id),this.handleRecipientBookings()}else this.$router.push("/")},methods:{selectUser(e){this.$emit("select:user",e)},onMessage(e,i){this.$emit("on:message",e,i)},bookingWaitingProBackBtn(){this.$emit("bookingWaitingProBack"),this.isChat=!1},contactToProvider(e,i){console.log("Contact "+i);const n=e.provider+e.user.username;P.Z.emit("update room",n),this.selectedIndex=i,this.isChat=!0},otherUser(e){this.$emit("otherUser",e)},finalinfo(e){console.log("Data in recipient panel "+e),this.$emit("finalinfo",e)},chatCredentials(e){this.$emit("chatCredentials",e)},async handleRecipientBookings(){let e=await M.Z.getOwnBookings(this.userId);this.confirmedBookings=e.filter((e=>"confirmed"===e.status)),this.clientConfirmedBookings=e.filter((e=>"notSeen"===e.status||"seen"===e.status)),this.bookings=e.filter((e=>"confirmed"!==e.status&&"completed"!==e.status))},async handleRecipientResult(e){console.log("Provider id is: "+e),this.booking=await M.Z.getBookingById(e),console.log("Profession: "+this.booking.map((e=>e.professional)));let i=[];i=this.booking[0].professional,this.booking.map((e=>{this.recipientDateTime=new Date(2023,e.onTime[0].month,e.onTime[0].day,e.onTime[0].hours,e.onTime[0].minutes),console.log("Recipient datetime: "+e.onTime[0].day)})),console.log("xxx "+this.recipientDateTime.getTime()),this.line=i[0],this.providerMatchByProfession=await D.Z.getProvidersMatchingByProfession({result:i});const n=(e,i)=>new Promise(((n,o)=>{e.getDistanceMatrix(i,((e,i)=>{"OK"===i?n(e):o(e)}))}));let o=[],s=[],t=this.booking[0].latitude,l=this.booking[0].longitude;o=[t,l],this.providerMatchByProfession.forEach((e=>{let i=e.latitude,t=e.longitude;s=[i,t];const l=async(e,i)=>{const o=new google.maps.LatLng(e[0],e[1]),s=new google.maps.LatLng(i[0],i[1]),t=new google.maps.DistanceMatrixService,l=await n(t,{origins:[o],destinations:[s],travelMode:"DRIVING"});return{distance:(l.rows[0].elements[0].distance.value/1e3).toFixed(1),duration:l.rows[0].elements[0].duration.text}};l(o,s).then((i=>{e.distance=i.distance,e.duration=i.duration}))})),console.log("xxxxxx "+this.providerMatchByProfession.length),this.isBooking=!0},handleFilterProvider(e){console.log("Filtering is working! "+e),"distance"===e&&this.providerMatchByProfession.sort(((e,i)=>e.distance-i.distance)),console.log("Filtering: "+this.providerMatchByProfession.map((e=>e.distance)))},handleOrderToSend(e){console.log("Order is sended "+e),this.clientConfirmedBookings=this.clientConfirmedBookings.concat(this.booking)},newBooking(){this.$router.push("/rf")},handleConfirmedProvider(e){this.providerMatchByProfession=this.providerMatchByProfession.filter((i=>i.id!==e))},openMap(){this.$router.push("/recipient-public")},compareTime(){console.log("Month is: "+W.Z.month(4))},handleCanselResult(e){console.log("Canseled: "+e),this.isBooking=e}}},x=n(89);const R=(0,x.Z)(U,[["render",C],["__scopeId","data-v-4bed1bd6"]]);var I=R}}]);
//# sourceMappingURL=470.7f8278cd.js.map