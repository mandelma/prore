"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[831],{5118:function(e,i,t){var s=t(3396);const o=({message:e})=>null===e?null:(0,s.Wm)("div",{className:"error"},[e]);i.Z=o},3249:function(e,i,t){const s=t(7218),o="/api/offers",n=async()=>{const e=await s.get(o);return e.data},r=async e=>{const i=await s.post(`${o}`,e);return i.data},a=async(e,i)=>{const t=await s.post(`${o}/${e}`,i);return t.data},l=async(e,i)=>{const t=await s.delete(`${o}/${e}/timeoffer/${i}`);return t.data},d=async(e,i)=>{const t=await s.put(`${o}/${e}`,i);return t.data};i.Z={getOffers:n,addFirstOffer:r,addAdditionalOffer:a,removeTimeOffer:l,updateOffer:d}},6633:function(e,i,t){t.d(i,{Z:function(){return k}});var s=t(3396),o=t(7139);const n={key:0},r={class:"waiting-info"},a={key:1},l={class:"info"},d={key:0},m={key:1};function u(e,i,t,u,c,h){const g=(0,s.up)("monthConverter"),p=(0,s.up)("MDBBtnClose");return"for-recipient"===t.status?((0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",r,[(0,s._)("b",null,(0,o.zw)(t.msg.provider),1),(0,s.Uk)(" - "+(0,o.zw)(t.msg.header)+" ",1),(0,s.Wm)(g,{num:t.msg.onTime[0].month},null,8,["num"]),(0,s.Uk)(", "+(0,o.zw)(t.msg.onTime[0].day)+", "+(0,o.zw)(t.msg.onTime[0].year)+" kello "+(0,o.zw)(t.msg.onTime[0].hours)+" : "+(0,o.zw)(t.msg.onTime[0].minutes),1)])])):((0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",l,[(0,s.Wm)(p,{class:"closeConfirmedBooking",onClick:h.handleCloseInfo},null,8,["onClick"]),"for-provider"===t.status?((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("h2",null,[(0,s._)("b",null,(0,o.zw)(t.msg.header),1)]),(0,s.Uk)(" "+(0,o.zw)(t.msg.address)+" ",1),(0,s.Wm)(g,{num:t.msg.onTime[0].month},null,8,["num"]),(0,s.Uk)(", "+(0,o.zw)(t.msg.onTime[0].day)+", "+(0,o.zw)(t.msg.onTime[0].year)+" kello "+(0,o.zw)(t.msg.onTime[0].hours)+" : "+(0,o.zw)(t.msg.onTime[0].minutes),1)])):"recipient"===t.status?((0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("b",null,(0,o.zw)(t.msg.provider),1),(0,s.Uk)(" - "+(0,o.zw)(t.msg.header)+" ",1),(0,s.Wm)(g,{num:t.msg.onTime[0].month},null,8,["num"]),(0,s.Uk)(", "+(0,o.zw)(t.msg.onTime[0].day)+", "+(0,o.zw)(t.msg.onTime[0].year)+" kello "+(0,o.zw)(t.msg.onTime[0].hours)+" : "+(0,o.zw)(t.msg.onTime[0].minutes),1)])):(0,s.kq)("",!0)])]))}var c=t(4313),h=t(5253),g={name:"Info",props:{status:String,msg:String},components:{MDBBtnClose:c.Ok,monthConverter:h.Z},methods:{handleCloseInfo(){this.$emit("close:info")}}},p=t(89);const f=(0,p.Z)(g,[["render",u],["__scopeId","data-v-49920980"]]);var k=f},3831:function(e,i,t){t.r(i),t.d(i,{default:function(){return R}});var s=t(3396),o=t(7139);const n=(0,s._)("h1",{style:{"margin-top":"100px","margin-bottom":"50px"}},"TMI:n hallintapaneeli...",-1),r={key:0},a={style:{"font-size":"16px"}},l=(0,s._)("i",{class:"fas fa-edit",size:"lg",style:{cursor:"pointer"}},null,-1),d=["onClick"],m=(0,s._)("tr",null,[(0,s._)("td")],-1),u={key:0,class:"spinner-border",role:"status"},c=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),h=[c],g={key:1},p={key:0},f=(0,s._)("td",null," Tarjoan palvelua 24/7 ",-1),k={key:1},w=(0,s._)("td",null," Päätän, koska tarjoan palvelua ",-1);function T(e,i,t,c,T,v){const y=(0,s.up)("info"),D=(0,s.up)("errorNotification"),M=(0,s.up)("successNotification"),P=(0,s.up)("MDBIcon"),_=(0,s.up)("VueDatePicker"),C=(0,s.up)("MDBBtnClose"),E=(0,s.up)("MDBTable"),z=(0,s.up)("MDBBtn"),b=(0,s.up)("MDBContainer"),H=(0,s.up)("MDBCol"),B=(0,s.up)("editPrice"),x=(0,s.up)("edit-profession"),F=(0,s.up)("MDBRow");return(0,s.wg)(),(0,s.iD)("div",null,[n,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(T.confirmedBookings,(e=>((0,s.wg)(),(0,s.j4)(y,{key:e.id,status:"for-provider",msg:e,"onClose:info":v.closeInfo},null,8,["msg","onClose:info"])))),128)),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[c.isProviderCalendar?((0,s.wg)(),(0,s.j4)(H,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(D,{message:c.timeEditErrorMessage},null,8,["message"]),(0,s.Wm)(M,{message:c.timeEditSuccessMessage},null,8,["message"]),c.isTimeToEdit?((0,s.wg)(),(0,s.iD)("div",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.editArr,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,style:{border:"solid orange","padding-bottom":"20px","padding-top":"20px","margin-bottom":"10px"}},[(0,s._)("div",a,(0,o.zw)(e.weekDay)+" - "+(0,o.zw)(e.day),1),(0,s.Wm)(E,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.time,((e,i)=>((0,s.wg)(),(0,s.iD)("tr",{key:i},[(0,s._)("td",null,(0,o.zw)(c.times[e.index][0].hours>=10?c.times[e.index][0].hours:"0"+c.times[e.index][0].hours)+" : "+(0,o.zw)(c.times[e.index][0].minutes>=10?c.times[e.index][0].minutes:"0"+c.times[e.index][0].minutes)+" - "+(0,o.zw)(c.times[e.index][1].hours>=10?c.times[e.index][1].hours:"0"+c.times[e.index][1].hours)+" : "+(0,o.zw)(c.times[e.index][1].minutes>=10?c.times[e.index][1].minutes:"0"+c.times[e.index][1].minutes),1),(0,s._)("td",null,[(0,s.Wm)(_,{modelValue:c.times[e.index],"onUpdate:modelValue":[i=>c.times[e.index]=i,v.handleTime],"time-picker":"",range:""},{trigger:(0,s.w5)((()=>[(0,s.Wm)(P,{class:"clickable-text"},{default:(0,s.w5)((()=>[l])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"])]),(0,s._)("td",null,[(0,s.Wm)(P,null,{default:(0,s.w5)((()=>[(0,s._)("i",{class:"far fa-save",size:"lg",onClick:i=>v.confirmEditedTime(e.timeId),style:{cursor:"pointer"}},null,8,d)])),_:2},1024)]),(0,s._)("td",null,[(0,s.Wm)(C,{onClick:i=>v.delTimeRange(e.timeId)},null,8,["onClick"])])])))),128)),m])])),_:2},1024),(0,s.Wm)(z,{outline:"warning",size:"lg",onClick:i[0]||(i[0]=e=>c.isTimeToEdit=!1),style:{cursor:"pointer"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Poistu")])),_:1})])))),128))])):(0,s.kq)("",!0),(0,s.Wm)(_,{style:{"margin-bottom":"50px","justify-content":"center"},onInternalModelChange:v.handleInternal,range:"","auto-range":"0",modelValue:c.date,"onUpdate:modelValue":[i[1]||(i[1]=e=>c.date=e),v.handleDate],inline:"",locale:"fi",selectText:"Valitse","min-date":new Date,markers:c.markers,highlight:c.highlightedDates,"teleport-center":"","month-change-on-scroll":!1},null,8,["onInternalModelChange","modelValue","onUpdate:modelValue","min-date","markers","highlight"])])),_:1})])),_:1})):(0,s.kq)("",!0),c.isEditPrice?((0,s.wg)(),(0,s.j4)(H,{key:1},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{"onCancel:editPrice":v.cancelEditPrice,"onSave:editedPrice":v.saveEditedPrice},null,8,["onCancel:editPrice","onSave:editedPrice"])])),_:1})):c.isEditProfession?((0,s.wg)(),(0,s.j4)(H,{key:2},{default:(0,s.w5)((()=>[(0,s.Wm)(x,{provider:c.provider,"onAdd:profession":v.handleAddProfession,"onCancel:editProfession":v.handleCancelEditProfession},null,8,["provider","onAdd:profession","onCancel:editProfession"])])),_:1})):((0,s.wg)(),(0,s.j4)(H,{key:3},{default:(0,s.w5)((()=>[c.provider.profession?((0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("h2",null,(0,o.zw)(c.provider.yritys)+":",1),(0,s.Wm)(D,{message:c.errorMessage},null,8,["message"]),(0,s.Wm)(M,{message:c.successMessage},null,8,["message"]),(0,s.Wm)(E,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[c.isProviderCalendar?((0,s.wg)(),(0,s.iD)("tr",k,[w,(0,s._)("td",null,[(0,s.Wm)(z,{outline:"info",block:"",size:"lg",onClick:i[3]||(i[3]=e=>c.isProviderCalendar=!1)},{default:(0,s.w5)((()=>[(0,s.Uk)("Vaihda 24/7")])),_:1})])])):((0,s.wg)(),(0,s.iD)("tr",p,[f,(0,s._)("td",null,[(0,s.Wm)(z,{outline:"info",block:"",size:"lg",onClick:i[2]||(i[2]=e=>c.isProviderCalendar=!0)},{default:(0,s.w5)((()=>[(0,s.Uk)("Vaihda kalenteriin")])),_:1})])])),(0,s._)("tr",null,[(0,s._)("td",null,(0,o.zw)(c.provider.address),1),(0,s._)("td",null,[(0,s.Wm)(z,{outline:"info",block:"",size:"lg",onClick:e.editAddress},{default:(0,s.w5)((()=>[(0,s.Uk)("Muokkaa osoitetta")])),_:1},8,["onClick"])])]),(0,s._)("tr",null,[(0,s._)("td",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.provider.profession,((e,i)=>((0,s.wg)(),(0,s.iD)("div",{key:i},(0,o.zw)(e),1)))),128))]),(0,s._)("td",null,[(0,s.Wm)(z,{outline:"info",block:"",size:"lg",onClick:v.editProfessionPro},{default:(0,s.w5)((()=>[(0,s.Uk)("Muokkaa osaamista")])),_:1},8,["onClick"])])]),(0,s._)("tr",null,[(0,s._)("td",null,(0,o.zw)(c.provider.priceByHour)+" Euroa ",1),(0,s._)("td",null,[(0,s.Wm)(z,{outline:"info",block:"",size:"lg",onClick:v.editPrice},{default:(0,s.w5)((()=>[(0,s.Uk)("Muokkaa tuntihinta")])),_:1},8,["onClick"])])])])])),_:1})])):((0,s.wg)(),(0,s.iD)("div",u,h))])),_:1}))])),_:1}),(0,s.Uk)(" provider "+(0,o.zw)(c.provider)+" ",1)])),_:1})])}t(7658);var v=t(4912),y=t(9398);const D=(0,s._)("h1",null,"Editing price",-1);function M(e,i,t,o,n,r){const a=(0,s.up)("MDBInput"),l=(0,s.up)("MDBBtn"),d=(0,s.up)("MDBContainer");return(0,s.wg)(),(0,s.j4)(d,null,{default:(0,s.w5)((()=>[D,(0,s.Wm)(a,{label:"Tuntihinta",modelValue:o.price,"onUpdate:modelValue":i[0]||(i[0]=e=>o.price=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,s.Wm)(l,{outline:"success",block:"",size:"lg",onClick:r.handleEditPrice},{default:(0,s.w5)((()=>[(0,s.Uk)("Kinnita")])),_:1},8,["onClick"]),(0,s.Wm)(l,{outline:"danger",block:"",size:"lg",onClick:r.cancelEdit},{default:(0,s.w5)((()=>[(0,s.Uk)("Poistu")])),_:1},8,["onClick"])])),_:1})}var P=t(4313),_=t(4870),C={name:"edit-price",setup(){const e=(0,_.iH)(null);return{price:e}},components:{MDBContainer:P.L5,MDBBtn:P.$v,MDBInput:P.u2},data(){return{errorMessage:null}},methods:{handleEditPrice(){this.$emit("save:editedPrice",this.price)},cancelEdit(){this.$emit("cancel:editPrice",!1),this.errorMessage="Here is some error!"}}},E=t(89);const z=(0,E.Z)(C,[["render",M]]);var b=z;const H={key:0},B=(0,s._)("i",{class:"far fa-save"},null,-1),x={key:1},F=(0,s._)("td",null,null,-1);function I(e,i,t,n,r,a){const l=(0,s.up)("MDBInput"),d=(0,s.up)("MDBIcon"),m=(0,s.up)("MDBTable"),u=(0,s.up)("MDBBtn"),c=(0,s.up)("MDBContainer");return(0,s.wg)(),(0,s.j4)(c,null,{default:(0,s.w5)((()=>[1===t.provider.profession.length?((0,s.wg)(),(0,s.iD)("div",H,[(0,s.Wm)(m,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.provider.profession,((e,t)=>((0,s.wg)(),(0,s.iD)("tr",{key:t},[(0,s._)("td",null,[(0,s.Wm)(l,{style:{"margin-bottom":"20px"},size:"lg",modelValue:n.profession,"onUpdate:modelValue":i[0]||(i[0]=e=>n.profession=e),label:"Muokkaa ammattia"},null,8,["modelValue"])]),(0,s._)("td",null,[(0,s.Wm)(d,{size:"2x"},{default:(0,s.w5)((()=>[B])),_:1})])])))),128))])])),_:1})])):((0,s.wg)(),(0,s.iD)("div",x,[(0,s.Wm)(m,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.provider.profession,((e,i)=>((0,s.wg)(),(0,s.iD)("tr",{key:i},[(0,s._)("td",null,(0,o.zw)(e),1),F])))),128))])])),_:1})])),(0,s.Wm)(u,{block:"",color:"primary",size:"lg",onClick:a.addProfessionPressed},{default:(0,s.w5)((()=>[(0,s.Uk)("Lisää ammatti")])),_:1},8,["onClick"]),n.isAddProfession?((0,s.wg)(),(0,s.j4)(l,{key:2,style:{"margin-bottom":"20px"},size:"lg",modelValue:n.additionalProfession,"onUpdate:modelValue":i[1]||(i[1]=e=>n.additionalProfession=e),label:"Uusi ammattia"},null,8,["modelValue"])):(0,s.kq)("",!0),n.additionalProfession.length>2?((0,s.wg)(),(0,s.j4)(u,{key:3,outline:"success",block:"",size:"lg",onClick:a.handleAddAdditionalProfession},{default:(0,s.w5)((()=>[(0,s.Uk)("Kinnita uus amet")])),_:1},8,["onClick"])):(0,s.kq)("",!0),(0,s.Wm)(u,{outline:"danger",block:"",size:"lg",onClick:a.cancelEditProfession},{default:(0,s.w5)((()=>[(0,s.Uk)("Poistu")])),_:1},8,["onClick"])])),_:1})}var A={name:"editProfession",props:{provider:Object},components:{MDBContainer:P.L5,MDBBtn:P.$v,MDBInput:P.u2,MDBTable:P.re,MDBIcon:P.vm},setup(){const e=(0,_.iH)(null),i=(0,_.iH)(!1),t=(0,_.iH)("");return{profession:e,isAddProfession:i,additionalProfession:t}},methods:{addProfessionPressed(){this.isAddProfession=!0},handleAddAdditionalProfession(){this.isAddProfession=!1,this.$emit("add:profession",this.additionalProfession),this.additionalProfession=""},cancelEditProfession(){this.$emit("cancel:editProfession")},cancelEdit(){console.log("Heiii"),this.$emit("cancel:editPrice",!1),this.errorMessage="Here is some error!"}}};const W=(0,E.Z)(A,[["render",I]]);var Z=W,U=t(5118),V=t(8033),O=t(6633),$=t(4058),S=t(5174),j=t(3249),Y={name:"Provider-panel",props:{userIsProvider:Object,bookings:Array,bookingsConfirmed:Array},components:{info:O.Z,errorNotification:U.Z,successNotification:V.Z,editPrice:b,editProfession:Z,MDBContainer:P.L5,MDBIcon:P.vm,MDBRow:P.uZ,MDBCol:P.TK,MDBTable:P.re,MDBBtn:P.$v,MDBBtnClose:P.Ok,VueDatePicker:v.Z},data(){return{confirmedBookings:[],testi:{},un:"",ri:"",rooms:[],close:!0}},setup(){const e=(0,_.iH)(!0),i=(0,_.iH)(null),t=(0,_.iH)(""),s=(0,_.iH)(null),o=(0,_.iH)(null),n=(0,_.iH)(!1),r=(0,_.iH)(!1),a=(0,_.iH)(null),l=(0,_.iH)(null),d=(0,_.iH)(null),m=(0,_.iH)([]),u=(0,_.iH)([]),c=(0,_.iH)(!1),h=(0,_.iH)([]),g=(0,_.iH)({}),p=(0,_.iH)(!1),f=(0,_.iH)([]),k=(0,_.iH)({}),w=(0,_.iH)(""),T=(0,_.iH)({}),v=(0,_.iH)([]),y=(0,_.iH)(null),D=(0,_.iH)(null),M=(0,_.iH)(null),P=(0,_.iH)(null),C=(0,_.iH)(null),E=(0,_.iH)({}),z=(0,_.iH)(!1),b=(0,_.iH)([]),H=(0,_.iH)(null),B=(0,_.iH)([(0,S.Z)(new Date,1),(0,S.Z)(new Date,2),(0,S.Z)(new Date,7)]);return{isProviderCalendar:e,testii:i,weekDay:t,timerange:s,datee:o,isEditPrice:n,isEditProfession:r,clearTime:a,dateTest:l,date:d,markers:m,contents:u,isContents:c,markedDays:h,time:g,isConfirmTime:p,times:f,datetime:k,userId:w,provider:T,providerTimes:v,errorMessage:y,timeEditSuccessMessage:M,timeEditErrorMessage:P,oblicationInfoMessage:C,successMessage:D,editTime:E,isTimeToEdit:z,editArr:b,timeToEdit:H,highlightedDates:B}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const i=JSON.parse(e);this.userId=i.id,console.log("User token in provider: "+i.token),this.providerData()}else this.$router.push("/")},methods:{getIt(){let e="aaa",i="room";$.Z.auth={username:e,room:i},$.Z.connect();let t="Oopersama";$.Z.emit("updateRoom",t)},xxx(e){console.log("Test nimi "+e)},joinAllRooms(){const e=["111","222"];$.Z.emit("joinAllClientRooms",e)},closeInfo(){console.log("Info closed here?? "),this.successMessage="Siit saab kustutada selle teavituse soovi korral!",setTimeout((()=>{this.successMessage=null}),3e3)},socketResetTest(){$.Z.disconnect(),$.Z.connect()},openChatPanel(e){e.preventDefault(),console.log("Will chat open...");const i=localStorage.getItem("sessionID");i&&(this.usernameAlreadySelected=!0,$.Z.auth={sessionID:i},$.Z.connect()),$.Z.on("session",(({sessionID:e,userID:i,roomName:t})=>{$.Z.auth={sessionID:e},localStorage.setItem("sessionID",e),$.Z.userID=i,$.Z.roomName=t}))},handleInternal(e){if(this.editArr=[],this.editTime={},this.isTimeToEdit=!1,e){let i=e.toString().substring(8,10),t=parseInt(i);this.weekDay=e.toString().substring(0,3);let s={};this.markers.forEach((e=>{e.date.getDate()===t&&(this.isTimeToEdit=!0,s={day:t,weekDay:this.weekDay,time:e.content})})),this.editArr.push(s)}},editPrice(){this.isEditPrice=!0},editProfessionPro(){this.isEditProfession=!0},handleAddProfession(e){console.log("Uus amet on "+e),this.provider.profession.push(e)},async saveEditedPrice(e){const i={priceByHour:e},t=await y.Z.updateProvider(this.provider.id,i);t&&(this.provider.priceByHour=e,console.log("Price: "+this.provider.priceByHour),this.isEditPrice=!1,this.successMessage="Tuntihinta on muokattu!",setTimeout((()=>{this.successMessage=null}),2e3))},cancelEditPrice(e){this.isEditPrice=e},handleCancelEditProfession(){this.isEditProfession=!1},removeExpiredDateTime(){this.providerTimes.forEach((e=>{let i=e.yearFrom,t=e.monthFrom,s=e.dayFrom,o=e.hoursFrom,n=e.minutesFrom;new Date(i,t,s,o,n).getTime()<(new Date).getTime()&&this.delTimeRange(e.id)}))},async editTimeTest(){const e={hoursFrom:1};await j.Z.updateOffer("6431407f53469b1f48eeb2f0",e)},updateTimesAndMarkers(){this.providerTimes.forEach((e=>{console.log("Provider times: "+e.hoursFrom),this.setTimeMarkers(e)})),this.providerTimes.forEach((e=>{this.initializeTime(e)}))},async delTimeRange(e){await j.Z.removeTimeOffer(this.provider.id,e),this.providerTimes=this.providerTimes.filter((i=>i.id!==e)),this.times=[],this.markers=[],this.updateTimesAndMarkers(),this.editArr.length>1?(this.updateTimesAndMarkers(),this.editArr[0].time=this.editArr[0].time.filter((i=>i.timeId!==e))):(this.editArr=[],this.updateTimesAndMarkers())},onTimePickerOpen(){console.log("Timepicker opened")},alertFn(e){console.log("Opened "+e)},onClose(){console.log("On close...")},async handleDate(){console.log("Date handled!");const e={yearFrom:this.date[0].getFullYear(),monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),yearTo:this.date[1].getFullYear(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},i=await j.Z.addAdditionalOffer(this.provider.id,e);this.providerTimes=this.providerTimes.concat(i),this.times=[],this.markers=[],this.editArr=[],this.providerTimes.forEach((e=>{this.initializeTime(e)})),this.providerTimes.forEach((e=>{this.setTimeMarkers(e)}));let t={};this.markers.forEach((e=>{e.date.getDate()===i.dayFrom&&(this.isTimeToEdit=!0,t={day:i.dayFrom,weekDay:this.weekDay,time:e.content})})),this.editArr.push(t)},async confirmEditedTime(e){let i;console.log("Confirmed??? "+e+" hours edited: "+this.t);const t=this.timeToEdit;if(t){i={hoursFrom:t[0].hours,minutesFrom:t[0].minutes,hoursTo:t[1].hours,minutesTo:t[1].minutes};const s=await j.Z.updateOffer(e,i);console.log("Offer edited: "+s),this.timeEditSuccessMessage="Aika muokattu onnistuneesti!",this.providerTimes=this.providerTimes.map((i=>i.id!==e?i:s)),this.testii=s,setTimeout((()=>{this.timeEditSuccessMessage=null}),2e3),this.isTimeToEdit=!1}else this.timeEditErrorMessage="Ensin on vaihdettava kellonaika!",setTimeout((()=>{this.timeEditErrorMessage=null}),2e3);this.timeToEdit=null},handleTime(e){this.timeToEdit=e},setMarkedDay(e){const i=e-(new Date).getDate();this.markedDays.push(e),console.log("Day to set_ "+i)},cancelTime(){console.log("Time cancelled!")},async addAvailableDate(){const e={yearFrom:this.date[0].getFullYear(),monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),yearTo:this.date[1].getFullYear(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},i=await j.Z.addAdditionalOffer(this.provider.id,e);console.log("Saved? "+i)},setTimeMarkers(e){let i=null;this.contents=[],i=e.monthFrom===(new Date).getMonth()?(0,S.Z)(new Date,e.dayFrom-(new Date).getDate()):(0,S.Z)(new Date(e.yearFrom,e.monthFrom,0),e.dayFrom),console.log("Test markers: "+new Date(e.yearFrom,e.monthFrom,e.dayFrom)),this.times.forEach(((t,s)=>{if(t[0].day===e.dayFrom){let o=t[0].hours+" : "+t[0].minutes+" - "+t[1].hours+" : "+t[1].minutes;this.contents.push({text:o,index:s,timeId:this.providerTimes[s].id,color:"red"}),this.markers=this.markers.concat({dFrom:e.dayFrom,date:i,type:"line",color:"orange",content:this.contents})}}))},async providerData(){const e=await y.Z.getProvider(this.userId);console.log("Test provider status here: "+e.status),this.provider=e,this.providerTimes=e.timeoffer,e&&(console.log("Provider rooms are: "+e.room.map((e=>e))),this.rooms=e.room,this.un=e.user.username,this.ri=e.yritys),this.confirmedBookings=e.booking.filter((e=>"confirmed"===e.status)),this.times=[],this.providerTimes.forEach((e=>{this.initializeTime(e)})),this.removeExpiredDateTime(),this.providerTimes.forEach((e=>{this.setTimeMarkers(e)}))},initializeTime(e){let i=[];i.push({day:e.dayFrom,hours:e.hoursFrom,minutes:e.minutesFrom},{day:e.dayTo,hours:e.hoursTo,minutes:e.minutesTo}),this.times.push(i)},test(e){console.log("What ever: "+e)}}};const K=(0,E.Z)(Y,[["render",T]]);var R=K}}]);
//# sourceMappingURL=831.7c360c29.js.map