"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[385],{3249:function(e,i,t){const s=t(7218),r="/api/offers",o=async()=>{const e=await s.get(r);return e.data},n=async e=>{const i=await s.post(`${r}`,e);return i.data},a=async(e,i)=>{const t=await s.post(`${r}/${e}`,i);return t.data},l=async(e,i)=>{const t=await s.delete(`${r}/${e}/timeoffer/${i}`);return t.data},d=async(e,i)=>{const t=await s.put(`${r}/${e}`,i);return t.data};i["Z"]={getOffers:o,addFirstOffer:n,addAdditionalOffer:a,removeTimeOffer:l,updateOffer:d}},9385:function(e,i,t){t.r(i),t.d(i,{default:function(){return A}});var s=t(3396),r=t(7139);const o=(0,s._)("h1",{style:{"margin-top":"50px","margin-bottom":"50px"}},"TMI:n hallintapaneeli...",-1),n={key:0},a={style:{"font-size":"16px"}},l=(0,s._)("i",{class:"fas fa-edit",size:"lg",style:{cursor:"pointer"}},null,-1),d=["onClick"],u=(0,s._)("i",{class:"far fa-calendar-times",size:"6x"},null,-1),m=(0,s._)("tr",null,[(0,s._)("td")],-1),c={key:0},h=(0,s._)("td",null," Tarjoan palvelua 24 / 7 ",-1),g={key:1},p=(0,s._)("td",null," Päätän, koska tarjoan palvelua ",-1);function f(e,i,t,f,k,T){const w=(0,s.up)("errorNotification"),v=(0,s.up)("successNotification"),y=(0,s.up)("MDBIcon"),D=(0,s.up)("VueDatePicker"),M=(0,s.up)("MDBTable"),E=(0,s.up)("MDBBtn"),_=(0,s.up)("MDBContainer"),H=(0,s.up)("MDBCol"),C=(0,s.up)("editPrice"),P=(0,s.up)("MDBRow");return(0,s.wg)(),(0,s.iD)("div",null,[o,(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s.Wm)(P,null,{default:(0,s.w5)((()=>[f.isProviderCalendar?((0,s.wg)(),(0,s.j4)(H,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s.Wm)(w,{message:f.timeEditErrorMessage},null,8,["message"]),(0,s.Wm)(v,{message:f.timeEditSuccessMessage},null,8,["message"]),f.isTimeToEdit?((0,s.wg)(),(0,s.iD)("div",n,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.editArr,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,style:{border:"solid orange","padding-bottom":"20px","padding-top":"20px","margin-bottom":"10px"}},[(0,s._)("div",a,(0,r.zw)(e.weekDay)+" - "+(0,r.zw)(e.day),1),(0,s.Wm)(M,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.time,((e,i)=>((0,s.wg)(),(0,s.iD)("tr",{key:i},[(0,s._)("td",null,(0,r.zw)(f.times[e.index][0].hours>=10?f.times[e.index][0].hours:"0"+f.times[e.index][0].hours)+" : "+(0,r.zw)(f.times[e.index][0].minutes>=10?f.times[e.index][0].minutes:"0"+f.times[e.index][0].minutes)+" - "+(0,r.zw)(f.times[e.index][1].hours>=10?f.times[e.index][1].hours:"0"+f.times[e.index][1].hours)+" : "+(0,r.zw)(f.times[e.index][1].minutes>=10?f.times[e.index][1].minutes:"0"+f.times[e.index][1].minutes),1),(0,s._)("td",null,[(0,s.Wm)(D,{modelValue:f.times[e.index],"onUpdate:modelValue":[i=>f.times[e.index]=i,T.handleTime],"time-picker":"",range:""},{trigger:(0,s.w5)((()=>[(0,s.Wm)(y,{class:"clickable-text"},{default:(0,s.w5)((()=>[l])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"])]),(0,s._)("td",null,[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[(0,s._)("i",{class:"far fa-save",size:"lg",onClick:i=>T.confirmEditedTime(e.timeId),style:{cursor:"pointer"}},null,8,d)])),_:2},1024)]),(0,s._)("td",null,[(0,s.Wm)(y,{onClick:i=>T.delTimeRange(e.timeId),style:{cursor:"pointer"}},{default:(0,s.w5)((()=>[u])),_:2},1032,["onClick"])])])))),128)),m])])),_:2},1024),(0,s.Wm)(E,{outline:"warning",size:"lg",onClick:i[0]||(i[0]=e=>f.isTimeToEdit=!1),style:{cursor:"pointer"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Poistu")])),_:1})])))),128))])):(0,s.kq)("",!0),(0,s.Wm)(D,{style:{"margin-bottom":"50px","justify-content":"center"},onInternalModelChange:T.handleInternal,range:"","auto-range":"0",modelValue:f.date,"onUpdate:modelValue":[i[1]||(i[1]=e=>f.date=e),T.handleDate],inline:"",locale:"fi",selectText:"Valitse","min-date":new Date,markers:f.markers,"teleport-center":"","month-change-on-scroll":!1},null,8,["onInternalModelChange","modelValue","onUpdate:modelValue","min-date","markers"])])),_:1})])),_:1})):(0,s.kq)("",!0),f.isEditPrice?((0,s.wg)(),(0,s.j4)(H,{key:1},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{"onCancel:editPrice":T.cancelEditPrice,"onSave:editedPrice":T.saveEditedPrice},null,8,["onCancel:editPrice","onSave:editedPrice"])])),_:1})):((0,s.wg)(),(0,s.j4)(H,{key:2},{default:(0,s.w5)((()=>[(0,s._)("h2",null,(0,r.zw)(f.provider.yritys)+":",1),(0,s.Wm)(w,{message:f.errorMessage},null,8,["message"]),(0,s.Wm)(v,{message:f.successMessage},null,8,["message"]),(0,s.Wm)(M,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[f.isProviderCalendar?((0,s.wg)(),(0,s.iD)("tr",g,[p,(0,s._)("td",null,[(0,s.Wm)(E,{outline:"info",block:"",size:"lg",onClick:i[3]||(i[3]=e=>f.isProviderCalendar=!1)},{default:(0,s.w5)((()=>[(0,s.Uk)("Vaihda 24 / 7")])),_:1})])])):((0,s.wg)(),(0,s.iD)("tr",c,[h,(0,s._)("td",null,[(0,s.Wm)(E,{outline:"info",block:"",size:"lg",onClick:i[2]||(i[2]=e=>f.isProviderCalendar=!0)},{default:(0,s.w5)((()=>[(0,s.Uk)("Vaihda kalenteriin")])),_:1})])])),(0,s._)("tr",null,[(0,s._)("td",null,(0,r.zw)(f.provider.address),1),(0,s._)("td",null,[(0,s.Wm)(E,{outline:"info",block:"",size:"lg",onClick:e.editAddress},{default:(0,s.w5)((()=>[(0,s.Uk)("Muokkaa osoitetta")])),_:1},8,["onClick"])])]),(0,s._)("tr",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.provider.profession,((e,i)=>((0,s.wg)(),(0,s.iD)("td",{key:i},(0,r.zw)(e),1)))),128)),(0,s._)("td",null,[(0,s.Wm)(E,{outline:"info",block:"",size:"lg",onClick:e.editProfession},{default:(0,s.w5)((()=>[(0,s.Uk)("Muokkaa ammattia")])),_:1},8,["onClick"])])]),(0,s._)("tr",null,[(0,s._)("td",null,(0,r.zw)(f.provider.priceByHour)+" Euroa ",1),(0,s._)("td",null,[(0,s.Wm)(E,{outline:"info",block:"",size:"lg",onClick:T.editPrice},{default:(0,s.w5)((()=>[(0,s.Uk)("Muokkaa tuntihinta")])),_:1},8,["onClick"])])])])])),_:1})])),_:1}))])),_:1})])),_:1})])}t(7658);var k=t(6691),T=t(9398);const w=(0,s._)("h1",null,"Editing price",-1);function v(e,i,t,r,o,n){const a=(0,s.up)("MDBInput"),l=(0,s.up)("MDBBtn"),d=(0,s.up)("MDBContainer");return(0,s.wg)(),(0,s.j4)(d,null,{default:(0,s.w5)((()=>[w,(0,s.Wm)(a,{label:"Tuntihinta",modelValue:r.price,"onUpdate:modelValue":i[0]||(i[0]=e=>r.price=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,s.Wm)(l,{outline:"success",block:"",size:"lg",onClick:n.handleEditPrice},{default:(0,s.w5)((()=>[(0,s.Uk)("Kinnita")])),_:1},8,["onClick"]),(0,s.Wm)(l,{outline:"danger",block:"",size:"lg",onClick:n.cancelEdit},{default:(0,s.w5)((()=>[(0,s.Uk)("Poistu")])),_:1},8,["onClick"])])),_:1})}var y=t(4313),D=t(4870),M={name:"edit-price",setup(){const e=(0,D.iH)(null);return{price:e}},components:{MDBContainer:y.L5,MDBBtn:y.$v,MDBInput:y.u2},data(){return{errorMessage:null}},methods:{handleEditPrice(){this.$emit("save:editedPrice",this.price)},cancelEdit(){this.$emit("cancel:editPrice",!1),this.errorMessage="Here is some error!"}}},E=t(89);const _=(0,E.Z)(M,[["render",v]]);var H=_;const C=({message:e})=>null===e?null:(0,s.Wm)("div",{className:"error"},[e]);var P=C;const x=({message:e})=>null===e?null:(0,s.Wm)("div",{className:"success"},[e]);var b=x,z=t(5174),W=t(3249),B={name:"Provider-panel",props:{userIsProvider:Object},components:{errorNotification:P,successNotification:b,editPrice:H,MDBContainer:y.L5,MDBIcon:y.vm,MDBRow:y.uZ,MDBCol:y.TK,MDBTable:y.re,MDBBtn:y.$v,VueDatePicker:k.Z},data(){return{testi:{}}},setup(){const e=(0,D.iH)(!0),i=(0,D.iH)(null),t=(0,D.iH)(""),s=(0,D.iH)(null),r=(0,D.iH)(null),o=(0,D.iH)(!1),n=(0,D.iH)(null),a=(0,D.iH)(null),l=(0,D.iH)(null),d=(0,D.iH)([]),u=(0,D.iH)([]),m=(0,D.iH)(!1),c=(0,D.iH)([]),h=(0,D.iH)({}),g=(0,D.iH)(!1),p=(0,D.iH)([]),f=(0,D.iH)({}),k=(0,D.iH)(""),T=(0,D.iH)({}),w=(0,D.iH)([]),v=(0,D.iH)(null),y=(0,D.iH)(null),M=(0,D.iH)(null),E=(0,D.iH)(null),_=(0,D.iH)({}),H=(0,D.iH)(!1),C=(0,D.iH)([]),P=(0,D.iH)(null);return{isProviderCalendar:e,testii:i,weekDay:t,timerange:s,datee:r,isEditPrice:o,clearTime:n,dateTest:a,date:l,markers:d,contents:u,isContents:m,markedDays:c,time:h,isConfirmTime:g,times:p,datetime:f,userId:k,provider:T,providerTimes:w,errorMessage:v,timeEditSuccessMessage:M,timeEditErrorMessage:E,successMessage:y,editTime:_,isTimeToEdit:H,editArr:C,timeToEdit:P}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const i=JSON.parse(e);this.userId=i.id}this.providerData()},methods:{handleInternal(e){if(this.editArr=[],this.editTime={},this.isTimeToEdit=!1,e){let i=e.toString().substring(8,10),t=parseInt(i);this.weekDay=e.toString().substring(0,3);let s={};this.markers.forEach((e=>{e.date.getDate()===t&&(this.isTimeToEdit=!0,s={day:t,weekDay:this.weekDay,time:e.content})})),this.editArr.push(s)}},editPrice(){this.isEditPrice=!0},async saveEditedPrice(e){console.log("New price is: "+e);const i={priceByHour:e},t=await T.Z.updateProvider(this.provider.id,i);t&&(this.provider.priceByHour=e,this.isEditPrice=!1,this.successMessage="Tuntihinta on muokattu!",setTimeout((()=>{this.successMessage=null}),2e3))},cancelEditPrice(e){this.isEditPrice=e},removeExpiredDateTime(){this.providerTimes.forEach((e=>{e.monthFrom===(new Date).getMonth()&&e.dayFrom<(new Date).getDate()&&(console.log("Times what to remove: "+e.id),this.delTimeRange(e.id))}))},async editTimeTest(){const e={hoursFrom:1};await W.Z.updateOffer("6431407f53469b1f48eeb2f0",e)},updateTimesAndMarkers(){this.providerTimes.forEach((e=>{console.log("Provider times: "+e.hoursFrom),this.setTimeMarkers(e)})),this.providerTimes.forEach((e=>{this.initializeTime(e)}))},async delTimeRange(e){await W.Z.removeTimeOffer(this.provider.id,e),console.log("Aga id argumendina? "+e),this.providerTimes=this.providerTimes.filter((i=>i.id!==e)),this.times=[],this.markers=[],this.updateTimesAndMarkers(),this.editArr[0].time.length>1?(this.updateTimesAndMarkers(),this.editArr[0].time=this.editArr[0].time.filter((i=>i.timeId!==e))):(this.editArr=[],this.updateTimesAndMarkers())},onTimePickerOpen(){console.log("Timepicker opened")},alertFn(e){console.log("Opened "+e)},onClose(){console.log("On close...")},async handleDate(){console.log("Date handled!");const e={monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},i=await W.Z.addAdditionalOffer(this.provider.id,e);this.providerTimes=this.providerTimes.concat(i),this.times=[],this.markers=[],this.editArr=[],this.providerTimes.forEach((e=>{this.initializeTime(e)})),this.providerTimes.forEach((e=>{this.setTimeMarkers(e)}));let t={};this.markers.forEach((e=>{e.date.getDate()===i.dayFrom&&(this.isTimeToEdit=!0,t={day:i.dayFrom,weekDay:this.weekDay,time:e.content})})),this.editArr.push(t)},async confirmEditedTime(e){let i;console.log("Confirmed??? "+e+" hours edited: "+this.t);const t=this.timeToEdit;if(t){i={hoursFrom:t[0].hours,minutesFrom:t[0].minutes,hoursTo:t[1].hours,minutesTo:t[1].minutes};const s=await W.Z.updateOffer(e,i);console.log("Offer edited: "+s),this.timeEditSuccessMessage="Aika muokattu onnistuneesti!",this.providerTimes=this.providerTimes.map((i=>i.id!==e?i:s)),this.testii=s,setTimeout((()=>{this.timeEditSuccessMessage=null}),2e3),this.isTimeToEdit=!1}else this.timeEditErrorMessage="Ensin on vaihdettava kellonaika!",setTimeout((()=>{this.timeEditErrorMessage=null}),2e3);this.timeToEdit=null},handleTime(e){this.timeToEdit=e},setMarkedDay(e){const i=e-(new Date).getDate();this.markedDays.push(e),console.log("Day to set_ "+i)},cancelTime(){console.log("Time cancelled!")},async addAvailableDate(){const e={monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},i=await W.Z.addAdditionalOffer(this.provider.id,e);console.log("Saved? "+i)},initializeMarkers(e){this.contents.length>0&&this.markers.push({date:(0,z.Z)(new Date,e),type:"line",color:"orange",tooltip:this.contents})},setTimeMarkers(e){let i=null;this.contents=[],i=e.dayFrom-(new Date).getDate(),this.times.forEach(((t,s)=>{if(t[0].day===e.dayFrom){let r=t[0].hours+" : "+t[0].minutes+" - "+t[1].hours+" : "+t[1].minutes;this.contents.push({text:r,index:s,timeId:this.providerTimes[s].id,color:"orange"}),this.markers=this.markers.concat({dFrom:e.dayFrom,date:(0,z.Z)(new Date,i),type:"line",color:"orange",content:this.contents})}}))},async providerData(){console.log("User id in provider panel: "+this.userId);const e=await T.Z.getProvider(this.userId);e&&(this.provider=e,this.providerTimes=e.timeoffer,this.times=[],this.providerTimes.forEach((e=>{this.initializeTime(e)})),this.providerTimes.forEach((e=>{this.setTimeMarkers(e)})))},initializeTime(e){let i=[];i.push({day:e.dayFrom,hours:e.hoursFrom,minutes:e.minutesFrom},{day:e.dayTo,hours:e.hoursTo,minutes:e.minutesTo}),this.times.push(i)},test(e){console.log("What ever: "+e)}}};const F=(0,E.Z)(B,[["render",f]]);var A=F}}]);
//# sourceMappingURL=385.8a8e7cd5.js.map