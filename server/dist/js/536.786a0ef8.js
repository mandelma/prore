"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[536,703],{1353:function(e,i,o){o.d(i,{Z:function(){return z}});var n=o(3396),t=o(7139);const s=e=>((0,n.dD)("data-v-701eb8ae"),e=e(),(0,n.Cn)(),e),l={key:0},a={class:"waiting-info"},r=s((()=>(0,n._)("br",null,null,-1))),d=s((()=>(0,n._)("br",null,null,-1))),m=s((()=>(0,n._)("br",null,null,-1))),g={key:0},c={key:1},u={key:1},h={class:"pro-info"},k=s((()=>(0,n._)("br",null,null,-1))),p=s((()=>(0,n._)("td",null," Sovittu ",-1))),f=s((()=>(0,n._)("td",null," Paikka ",-1))),v={key:0},y={key:1},w={colspan:"2"},B={key:0,style:{color:"deepskyblue"}},b={key:1,style:{color:"deepskyblue"}};function _(e,i,o,s,_,T){const D=(0,n.up)("monthConverter"),C=(0,n.up)("MDBBtn"),I=(0,n.up)("MDBTable");return"for-recipient"===o.status?((0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",a,[(0,n.Uk)(" ( "),(0,n._)("b",null,(0,t.zw)(o.msg.ordered[0].yritys),1),(0,n.Uk)(" ) - "+(0,t.zw)(o.msg.header),1),r,(0,n.Wm)(D,{num:o.msg.onTime[0].month},null,8,["num"]),(0,n.Uk)(" "+(0,t.zw)(o.msg.onTime[0].day)+" / "+(0,t.zw)(o.msg.onTime[0].year),1),d,(0,n.Uk)(" klo "+(0,t.zw)(o.msg.onTime[0].hours)+" : "+(0,t.zw)(o.msg.onTime[0].minutes),1),m,0===o.msg.ordered[0].range?((0,n.wg)(),(0,n.iD)("p",g,(0,t.zw)(o.msg.ordered[0].yritys)+" odottaa sinua osoitteseen: "+(0,t.zw)(o.msg.ordered[0].address),1)):((0,n.wg)(),(0,n.iD)("p",c,(0,t.zw)(o.msg.ordered[0].yritys)+" tulossa sovittuun osoitteeseen!",1)),(0,n.Wm)(C,{block:"",outline:"warning",onClick:i[0]||(i[0]=e=>T.removeComplitedBookingPanel(o.msg))},{default:(0,n.w5)((()=>[(0,n.Uk)(" (Kustub muidu kui aeg läbi saab) - Saab eemaldada kohe (ajutine lahendus) ")])),_:1})])])):((0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",h,[(0,n.Wm)(D,{num:o.msg.onTime[0].month},null,8,["num"]),(0,n.Uk)(" "+(0,t.zw)(o.msg.onTime[0].day)+" / "+(0,t.zw)(o.msg.onTime[0].year),1),k,(0,n.Uk)(" klo "+(0,t.zw)(o.msg.onTime[0].hours)+" : "+(0,t.zw)(o.msg.onTime[0].minutes)+" ",1),"for-provider"===o.status?((0,n.wg)(),(0,n.j4)(I,{key:0,style:{"font-size":"18px",color:"#ddd","text-align":"left",padding:"10px",width:"100%"}},{default:(0,n.w5)((()=>[(0,n._)("tbody",null,[(0,n._)("tr",null,[p,(0,n._)("td",null,(0,t.zw)(o.msg.header),1)]),(0,n._)("tr",null,[f,0===o.msg.ordered[0].range?((0,n.wg)(),(0,n.iD)("td",v,(0,t.zw)(o.msg.ordered[0].address),1)):((0,n.wg)(),(0,n.iD)("td",y,(0,t.zw)(o.msg.address),1))]),(0,n._)("tr",null,[(0,n._)("td",w,[0===o.msg.ordered[0].range?((0,n.wg)(),(0,n.iD)("p",B," Asiakas tulossa! ")):((0,n.wg)(),(0,n.iD)("p",b," Meno asiakkaan luonna! "))])])])])),_:1})):(0,n.kq)("",!0)])]))}var T=o(4313),D=o(5253),C={name:"Info",props:{status:String,msg:Object},components:{MDBBtn:T.$v,MDBTable:T.re,monthConverter:D.Z},methods:{removeCompletedBookingPro(e){this.$emit("remove:proConfirmed",e)},removeComplitedBookingPanel(e){this.$emit("remove:complitedBookingPanel",e)}}},I=o(89);const M=(0,I.Z)(C,[["render",_],["__scopeId","data-v-701eb8ae"]]);var z=M},1603:function(e,i,o){o.r(i),o.d(i,{default:function(){return $}});var n=o(3396),t=o(7139);const s=e=>((0,n.dD)("data-v-f67e8e04"),e=e(),(0,n.Cn)(),e),l={key:0},a={key:1},r={key:0,class:"spinner-border",role:"status"},d=s((()=>(0,n._)("span",{class:"visually-hidden"},"Loading...",-1))),m=[d],g={key:1},c={key:0,id:"info-block"},u={class:"file-marker"},h=s((()=>(0,n._)("div",{class:"box-title"}," Vahvistetut varaukset! ",-1))),k={class:"box-contents"},p={class:"flex flex-wrap align-items-center justify-content-center"},f={class:"scalein animation-duration-3000 animation-iteration flex align-items-center justify-content-center font-bold w-full"},v={key:0,id:"info-block-confirmed"},y={class:"file-marker"},w=s((()=>(0,n._)("div",{class:"box-title-confirmed"}," Varaus on vireillä, kun yritys vahvistaa sen. ",-1))),B={class:"box-contents-confirmed"},b={class:"booking_time"},_={key:1},T={class:"booking_time"};function D(e,i,o,s,d,D){const C=(0,n.up)("recipientResult"),I=(0,n.up)("bookingInfo"),M=(0,n.up)("MDBCol"),z=(0,n.up)("MDBRow"),P=(0,n.up)("MDBBtn"),x=(0,n.up)("MDBTextarea"),R=(0,n.up)("MDBContainer");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(R,{style:{"margin-top":"50px"}},{default:(0,n.w5)((()=>[d.isBooking?((0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(C,{test:o.test,booking:d.booking,images:d.images,bookingTime:d.recipientDateTime,providers:d.providerMatchByProfession,confirmedBookings:d.confirmedBookings,line:d.line,onUpdateBookingDate:D.handleUpdateBookingDate,"onSet:order:to:send":D.handleOrderToSend,"onClient:confirmed_provider":D.handleConfirmedProvider,onRemoveBooking:D.handleRemoveBooking,"onCansel:result":D.handleCanselResult,onEditDescription:D.handleEditDescription,onAddImage:D.handleAddImage,onEditImage:D.handleEditImage,onRemoveImage:D.handleRemoveImage,onFinalinfo:e.finalinfo,chatusers:o.chatusers,selecteduser:o.selecteduser,messages:o.messages,onSelect:D.selectUser,onNoSelect:D.noSelectUser,onMessage:D.onMessage,onInitializeChat:D.handleInitializeChat,onFilter_provider:D.handleFilterProvider,onOtherUser:D.otherUser},null,8,["test","booking","images","bookingTime","providers","confirmedBookings","line","onUpdateBookingDate","onSet:order:to:send","onClient:confirmed_provider","onRemoveBooking","onCansel:result","onEditDescription","onAddImage","onEditImage","onRemoveImage","onFinalinfo","chatusers","selecteduser","messages","onSelect","onNoSelect","onMessage","onInitializeChat","onFilter_provider","onOtherUser"])])):((0,n.wg)(),(0,n.iD)("div",a,[d.isSpinner?((0,n.wg)(),(0,n.iD)("div",r,m)):((0,n.wg)(),(0,n.iD)("div",g,[(0,n.Wm)(z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(M,{md:"8"},{default:(0,n.w5)((()=>[o.confirmedBookingsByProvider.length>0?((0,n.wg)(),(0,n.iD)("aside",c,[(0,n._)("section",u,[(0,n._)("div",null,[h,(0,n._)("div",k,[(0,n._)("div",p,[(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.confirmedBookingsByProvider,(e=>((0,n.wg)(),(0,n.j4)(I,{key:e.id,status:"for-recipient",msg:e,"onRemove:complitedBookingPanel":D.handleRemoveComplitedBookingPanel},null,8,["msg","onRemove:complitedBookingPanel"])))),128))])])])])])])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(M,{style:{padding:"20px 5px 20px 5px"},md:"4"},{default:(0,n.w5)((()=>[(0,n._)("h3",null,"Sinulla on hetkellä - "+(0,t.zw)(o.recipientBookings.length)+" - avointa tilausta:",1)])),_:1})])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.recipientBookings,((e,i)=>((0,n.wg)(),(0,n.j4)(z,{key:i,class:"bookings"},{default:(0,n.w5)((()=>[o.confirmedBookingsByClient.some((i=>i.id===e.id))?((0,n.wg)(),(0,n.iD)("aside",v,[(0,n._)("section",y,[(0,n._)("div",null,[w,(0,n._)("div",B,[(0,n.Wm)(z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(M,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,t.zw)(e.date)+" ",1),(0,n._)("p",b," klo "+(0,t.zw)(e.onTime[0].hours>=10?e.onTime[0].hours:"0"+e.onTime[0].hours)+" : "+(0,t.zw)(e.onTime[0].minutes>=10?e.onTime[0].minutes:"0"+e.onTime[0].minutes),1)])),_:2},1024),(0,n.Wm)(M,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,t.zw)(e.header),1)])),_:2},1024),(0,n.Wm)(M,null,{default:(0,n.w5)((()=>[i===d.selectedIndex?((0,n.wg)(),(0,n.j4)(P,{key:0,outline:"danger",block:"",size:"lg",onClick:D.canselQuitSelectedBooking},{default:(0,n.w5)((()=>[(0,n.Uk)("Poistu")])),_:1},8,["onClick"])):((0,n.wg)(),(0,n.j4)(P,{key:1,color:"danger",onClick:e=>D.handleQuitSelectedBooking(i)},{default:(0,n.w5)((()=>[(0,n.Uk)("Lopettaa tilaus")])),_:2},1032,["onClick"]))])),_:2},1024)])),_:2},1024),d.selectedIndex===i?((0,n.wg)(),(0,n.j4)(z,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(M,{lg:"8",style:{"text-align":"center"}},{default:(0,n.w5)((()=>[d.isQuitBooking?((0,n.wg)(),(0,n.j4)(x,{key:0,white:"",style:{},label:"Anna syy...",rows:"3"})):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(M,{lg:"4"},{default:(0,n.w5)((()=>[d.isQuitBooking?((0,n.wg)(),(0,n.j4)(P,{key:0,block:"",color:"success",size:"lg>",style:{"margin-top":"10px"}},{default:(0,n.w5)((()=>[(0,n.Uk)("Varmista")])),_:1})):(0,n.kq)("",!0)])),_:1})])),_:1})):(0,n.kq)("",!0)])])])])):((0,n.wg)(),(0,n.iD)("aside",_,[(0,n.Wm)(z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(M,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,t.zw)(e.date)+" ",1),(0,n._)("p",T," klo "+(0,t.zw)(e.onTime[0].hours>=10?e.onTime[0].hours:"0"+e.onTime[0].hours)+" : "+(0,t.zw)(e.onTime[0].minutes>=10?e.onTime[0].minutes:"0"+e.onTime[0].minutes),1)])),_:2},1024),(0,n.Wm)(M,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,t.zw)(e.header),1)])),_:2},1024),(0,n.Wm)(M,null,{default:(0,n.w5)((()=>[(0,n.Wm)(P,{outline:"info",block:"",size:"lg",onClick:i=>D.handleRecipientResult(e.id,e)},{default:(0,n.w5)((()=>[(0,n.Uk)("Tilaus")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)]))])),_:2},1024)))),128)),(0,n.Wm)(P,{outline:"info",block:"",size:"lg",onClick:D.newBooking},{default:(0,n.w5)((()=>[(0,n.Uk)("Teen uuden tilauksen")])),_:1},8,["onClick"])]))]))])),_:1})])}o(7658);var C=o(4313),I=o(4870),M=o(6102),z=o(8797),P=o(2566),x=o(9398),R=o(5800),U=o(1353),S=o(5253),A=(o(4058),{name:"recipient-panel",props:{test:Boolean,chatusers:Array,selecteduser:null,messages:Array,recipientTest:null,recipientBookings:Array,confirmedBookingsByClient:Array,confirmedBookingsByProvider:Array},data(){return{id:"",isSpinner:!1,images:[],userId:null,bookings:this.recipientBookings,provider:{},booking:null,isQuitBooking:!1,currentRoom:"",selectedIndex:null,isPressedQuit:!1,d:null,confirmedBookings:[],clientConfirmedBookings:[],isBooking:!1,providerMatchByProfession:[],providerMatchingRequirements:null,line:"",recipientDateTime:null,providersAvailable:[],providersBusy:[]}},setup(){const e=(0,I.iH)(!1);return{isAvailable:e}},components:{liveChat:M["default"],bookingInfo:U.Z,recipientResult:P["default"],MDBBtn:C.$v,MDBContainer:C.L5,MDBRow:C.uZ,MDBCol:C.TK,MDBTextarea:C.uj},async mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const i=JSON.parse(e);this.userId=i.id,this.provider=await x.Z.getProvider(i.id),this.handleRecipientBookings()}else this.$router.push("/")},methods:{handleUpdateBookingDate(e){this.recipientDateTime=new Date(e.year,e.month,e.day,e.hours,e.minutes),console.log("recipient date time "+this.recipientDateTime)},handleQuitSelectedBooking(e){this.selectedIndex=e,console.log("Index "+e),console.log("Selected index "+this.selectedIndex),this.isQuitBooking=!0},canselQuitSelectedBooking(){this.isQuitBooking=!1,this.selectedIndex=null},selectUser(e){this.$emit("select:user",e)},noSelectUser(){this.$emit("noSelected")},onMessage(e,i){this.$emit("on:message",e,i)},otherUser(e){this.$emit("otherUser",e)},handleInitializeChat(e){this.$emit("initializeChat",e)},async handleRecipientBookings(){let e=await R.Z.getOwnBookings(this.userId);this.confirmedBookings=e.filter((e=>"confirmed"===e.status)),this.clientConfirmedBookings=e.filter((e=>"notSeen"===e.status||"seen"===e.status)),this.recipientBookings>0&&(this.recipientBookings[0].onTime.month||(this.isSpinner=!0))},async handleRecipientResult(e,i){this.booking=i,this.booking.image&&(this.images=this.booking.image),console.log("Profession: "+this.booking.professional);let o=[];o=this.booking.professional,console.log("Professional length "+this.booking.professional.length),this.recipientDateTime=new Date(i.onTime[0].year,i.onTime[0].month,i.onTime[0].day,i.onTime[0].hours,i.onTime[0].minutes),console.log("Recipient datetime: "+i.onTime[0].day),console.log("xxx "+this.recipientDateTime.getTime()),this.line=o[0],this.providerMatchByProfession=await x.Z.getProvidersMatchingByProfession({result:o}),this.providerMatchByProfession=this.providerMatchByProfession.filter((e=>e.user.id!==this.userId));const n=(e,i)=>new Promise(((o,n)=>{e.getDistanceMatrix(i,((e,i)=>{"OK"===i?o(e):n(e)}))}));let t=[],s=[],l=i.latitude,a=i.longitude;t=[l,a],this.providerMatchByProfession.forEach((e=>{let i=e.latitude,o=e.longitude;s=[i,o];const l=async(e,i)=>{const o=new google.maps.LatLng(e[0],e[1]),t=new google.maps.LatLng(i[0],i[1]),s=new google.maps.DistanceMatrixService,l=await n(s,{origins:[o],destinations:[t],travelMode:"DRIVING"});return{distance:(l.rows[0].elements[0].distance.value/1e3).toFixed(1),duration:l.rows[0].elements[0].duration.text}};l(t,s).then((i=>{e.distance=i.distance,e.duration=i.duration}))})),this.isBooking=!0},handleFilterProvider(e){console.log("Filtering is working! "+e),"distance"===e?this.providerMatchByProfession.sort(((e,i)=>e.distance-i.distance)):"rating"===e&&this.providerMatchByProfession.sort(((e,i)=>e.rating.positive-i.rating.positive)),this.handleFilterAvailability()},handleFilterByFeedback(){console.log("By feedback")},handleFilterAvailability(){console.log("Heyy here"),this.providerMatchByProfession.forEach((e=>{console.log("Recipient time "+this.recipientDateTime),e.timeoffer?e.timeoffer.forEach((i=>{z.Z.providerMatchingForClient(this.recipientDateTime,{y:i.yearFrom,m:i.monthFrom,d:i.dayFrom,hour:i.hoursFrom,min:i.minutesFrom},{y:i.yearTo,m:i.monthTo,d:i.dayTo,hour:i.hoursTo,min:i.minutesTo})?(console.log("Is available "+e.yritys),this.providersAvailable.push(e)):(console.log("Is not available provider yritys "+e.yritys),this.providersBusy.push(e))})):console.log("Not timeoffer setted")})),console.log("Available length "+this.providersAvailable.length),console.log("Not available length "+this.providersBusy.length)},handleOrderToSend(e,i,o){console.log("Order is sended "+i.id),prov.id,this.booking,chatUserDataNavbar,this.$emit("update:booking",i.id),this.clientConfirmedBookings=this.clientConfirmedBookings.concat(this.booking)},newBooking(){this.$router.push("/rf")},handleConfirmedProvider(e,i,o){this.currentRoom=o.room,this.providerMatchByProfession=this.providerMatchByProfession.filter((i=>i.id!==e)),this.$emit("setNavbarChatUser",i,o),console.log("nb chat user start "+o.name),this.isBooking=!1},openMap(){const e="Tehnika 1-5, Antsla";this.$router.push("/recipient-public",{params:e})},compareTime(){console.log("Month is: "+S.Z.month(4))},removeConfirmationNotification(){},handleEditDescription(e){this.booking.description=e},async handleAddImage(e,i){console.log("Image id in upload "+e._id),console.log("Image image in upload "+e.image),console.log("Image name in upload "+e.name),this.$emit("addImageToRecipientBookings",e,i),this.images=[...this.images,e]},handleEditImage(e,i,o){-1!==e&&(this.images[e]={_id:i,blob:o})},async handleRemoveImage(e){this.images.splice(e,1),console.log("Image removed from array")},handleCanselResult(e){console.log("Canseled: "+e),this.isBooking=e},async handleRemoveComplitedBookingPanel(e){this.$emit("setNavbarFeedbackNotification",e),await R.Z.updateRecipient(e.id,{status:"completed"})},async handleRemoveBooking(e){console.log("Removing booking id "+e),this.isBooking=!1,this.$emit("removeRecipient",e)}}}),W=o(89);const F=(0,W.Z)(A,[["render",D],["__scopeId","data-v-f67e8e04"]]);var $=F}}]);
//# sourceMappingURL=536.786a0ef8.js.map