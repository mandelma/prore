"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[322],{5118:function(e,i,t){var o=t(3396);const s=({message:e})=>null===e?null:(0,o.Wm)("div",{className:"error"},[e,(0,o.Wm)("img",{className:"errorImg",alt:"error",src:t(5551)},null)]);i.Z=s},6876:function(e,i,t){t.d(i,{Z:function(){return k}});var o=t(3396),s=t(7139);const n={key:0},r={class:"waiting-info"},l={key:1},a={class:"info"},d={key:0},m={key:1};function u(e,i,t,u,c,p){const g=(0,o.up)("monthConverter"),h=(0,o.up)("MDBBtn");return"for-recipient"===t.status?((0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",r,[(0,o.Uk)(" ( "),(0,o._)("b",null,(0,s.zw)(t.msg.ordered[0].yritys),1),(0,o.Uk)(" ) - "+(0,s.zw)(t.msg.header)+" - ",1),(0,o.Wm)(g,{num:t.msg.onTime[0].month},null,8,["num"]),(0,o.Uk)(", "+(0,s.zw)(t.msg.onTime[0].day)+", "+(0,s.zw)(t.msg.onTime[0].year)+" kello "+(0,s.zw)(t.msg.onTime[0].hours)+" : "+(0,s.zw)(t.msg.onTime[0].minutes)+" ",1),(0,o.Wm)(h,{block:"",outline:"warning",onClick:i[0]||(i[0]=e=>p.removeComplitedBookingPanel(t.msg))},{default:(0,o.w5)((()=>[(0,o.Uk)(" (Kustub muidu kui aeg läbi saab) - Saab eemaldada kohe (ajutine lahendus) ")])),_:1})])])):((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",a,["for-provider"===t.status?((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("h2",null,[(0,o._)("b",null,(0,s.zw)(t.msg.header),1)]),(0,o.Uk)(" "+(0,s.zw)(t.msg.address)+" ",1),(0,o.Wm)(g,{num:t.msg.onTime[0].month},null,8,["num"]),(0,o.Uk)(", "+(0,s.zw)(t.msg.onTime[0].day)+", "+(0,s.zw)(t.msg.onTime[0].year)+" kello "+(0,s.zw)(t.msg.onTime[0].hours)+" : "+(0,s.zw)(t.msg.onTime[0].minutes),1)])):"recipient"===t.status?((0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("b",null,(0,s.zw)(t.msg.provider),1),(0,o.Uk)(" - "+(0,s.zw)(t.msg.header)+" ",1),(0,o.Wm)(g,{num:t.msg.onTime[0].month},null,8,["num"]),(0,o.Uk)(", "+(0,s.zw)(t.msg.onTime[0].day)+", "+(0,s.zw)(t.msg.onTime[0].year)+" kello "+(0,s.zw)(t.msg.onTime[0].hours)+" : "+(0,s.zw)(t.msg.onTime[0].minutes),1)])):(0,o.kq)("",!0)])]))}var c=t(4313),p=t(5253),g={name:"Info",props:{status:String,msg:Object},components:{MDBBtn:c.$v,monthConverter:p.Z},methods:{removeCompletedBookingPro(e){this.$emit("remove:proConfirmed",e)},removeComplitedBookingPanel(e){this.$emit("remove:complitedBookingPanel",e)}}},h=t(89);const f=(0,h.Z)(g,[["render",u],["__scopeId","data-v-20e875e8"]]);var k=f},3322:function(e,i,t){t.r(i),t.d(i,{default:function(){return Oe}});t(7658);var o=t(3396),s=t(7139);const n={style:{padding:"20px",color:"springgreen"}},r={key:0},l=(0,o._)("h2",null,"Valitettavasti käyttö on päättynyt!",-1),a={key:1},d={key:2},m={key:0,class:"spinner-border",role:"status"},u=(0,o._)("span",{class:"visually-hidden"},"Loading...",-1),c=[u],p={key:1},g=(0,o._)("h3",null,"Käyttö: ",-1),h={key:0},f={key:0,class:"spinner-border",role:"status"},k=(0,o._)("span",{class:"visually-hidden"},"Loading...",-1),w=[k],v={style:{position:"relative"}},y={id:"info-block"},D={class:"file-marker"},_=(0,o._)("div",{class:"box-title"}," Vahvistetut tilaukset! ",-1),T={class:"box-contents"},P={class:"flex flex-wrap align-items-center justify-content-center"},b={class:"scalein animation-duration-3000 animation-iteration flex align-items-center justify-content-center font-bold w-full"},C={key:0},M={style:{"font-size":"16px"}},x=(0,o._)("i",{class:"fas fa-edit",size:"lg",style:{cursor:"pointer"}},null,-1),E=["onClick"],z=(0,o._)("tr",null,[(0,o._)("td")],-1),B={key:0,class:"spinner-border",role:"status"},F=(0,o._)("span",{class:"visually-hidden"},"Loading...",-1),H=[F],W={key:1},I={key:0},A={key:0},Z={key:1},U={style:{border:"solid green","margin-bottom":"10px",padding:"12px"}},$=(0,o._)("br",null,null,-1),V=(0,o._)("td",null," Palaute ",-1),L={style:{width:"33px"}},N={style:{width:"33px"}},R={key:1},j=(0,o._)("td",null," Tarjoan palvelua 24/7 ",-1),S={key:2},O=(0,o._)("td",null," Päätän, koska tarjoan palvelua ",-1),K=(0,o._)("td",null," Katso kartalta ",-1);function Y(e,i,t,u,k,F){const Y=(0,o.up)("MDBCol"),q=(0,o.up)("MDBRow"),G=(0,o.up)("info"),J=(0,o.up)("MDBContainer"),Q=(0,o.up)("errorNotification"),X=(0,o.up)("successNotification"),ee=(0,o.up)("MDBIcon"),ie=(0,o.up)("VueDatePicker"),te=(0,o.up)("MDBBtnClose"),oe=(0,o.up)("MDBTable"),se=(0,o.up)("MDBBtn"),ne=(0,o.up)("editPrice"),re=(0,o.up)("edit-profession"),le=(0,o.up)("feedback-list"),ae=(0,o.up)("MDBInput"),de=(0,o.up)("MDBBadge");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Y),(0,o.Wm)(Y,{col:"7",style:{position:"relative"}},{default:(0,o.w5)((()=>[(0,o._)("div",n,[0===((u.provider.proTime-(new Date).getTime())/864e5).toFixed()?((0,o.wg)(),(0,o.iD)("div",r,[l,(0,o._)("p",{style:{color:"orangered",float:"right",cursor:"pointer"},onClick:i[0]||(i[0]=i=>e.$router.push("/pay-plan"))},"Lattaa lisää aikaa!")])):((u.provider.proTime-(new Date).getTime())/864e5).toFixed()<=3&&((u.provider.proTime-(new Date).getTime())/864e5).toFixed()>0?((0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("h2",null,(0,s.zw)(((u.provider.proTime-(new Date).getTime())/864e5).toFixed())+" päivää",1),(0,o._)("p",{style:{color:"orangered",float:"right",cursor:"pointer"},onClick:i[1]||(i[1]=i=>e.$router.push("/pay-plan"))},"Lattaa lisää aikaa!")])):((0,o.wg)(),(0,o.iD)("div",d,["NaN"===((u.provider.proTime-(new Date).getTime())/864e5).toFixed()?((0,o.wg)(),(0,o.iD)("div",m,c)):((0,o.wg)(),(0,o.iD)("div",p,[g,(0,o._)("h2",null,(0,s.zw)(((u.provider.proTime-(new Date).getTime())/864e5).toFixed())+" päivää",1)]))]))])])),_:1})])),_:1}),u.provider?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",h,[u.provider.profession?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",f,w))])),(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{class:"proPanelHeader",md:"4"},{default:(0,o.w5)((()=>[(0,o._)("div",v,[(0,o._)("h2",null,(0,s.zw)(u.provider.yritys),1),(0,o._)("h2",null,(0,s.zw)(u.provider.address),1)])])),_:1}),k.confirmedBookings.length>0?((0,o.wg)(),(0,o.j4)(Y,{key:0,style:{padding:"50px 10px 30px 10px"},md:"8"},{default:(0,o.w5)((()=>[(0,o.Wm)(J,null,{default:(0,o.w5)((()=>[(0,o._)("aside",y,[(0,o._)("section",D,[(0,o._)("div",null,[_,(0,o._)("div",T,[(0,o._)("div",P,[(0,o._)("div",b,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(k.confirmedBookings,(e=>((0,o.wg)(),(0,o.j4)(G,{key:e.id,status:"for-provider",msg:e,"onRemove:proConfirmed":F.handleRemoveProConfirmed},null,8,["msg","onRemove:proConfirmed"])))),128))])])])])])])])),_:1})])),_:1})):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(J,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[u.isProviderCalendar?((0,o.wg)(),(0,o.j4)(Y,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(J,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{message:u.timeEditErrorMessage},null,8,["message"]),(0,o.Wm)(X,{message:u.timeEditSuccessMessage},null,8,["message"]),u.isTimeToEdit?((0,o.wg)(),(0,o.iD)("div",C,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.editArr,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,style:{border:"solid orange","padding-bottom":"20px","padding-top":"20px","margin-bottom":"10px"}},[(0,o._)("div",M,(0,s.zw)(e.weekDay)+" - "+(0,s.zw)(e.day),1),(0,o.Wm)(oe,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,o.w5)((()=>[(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.time,((e,i)=>((0,o.wg)(),(0,o.iD)("tr",{key:i},[(0,o._)("td",null,(0,s.zw)(u.times[e.index][0].hours>=10?u.times[e.index][0].hours:"0"+u.times[e.index][0].hours)+" : "+(0,s.zw)(u.times[e.index][0].minutes>=10?u.times[e.index][0].minutes:"0"+u.times[e.index][0].minutes)+" - "+(0,s.zw)(u.times[e.index][1].hours>=10?u.times[e.index][1].hours:"0"+u.times[e.index][1].hours)+" : "+(0,s.zw)(u.times[e.index][1].minutes>=10?u.times[e.index][1].minutes:"0"+u.times[e.index][1].minutes),1),(0,o._)("td",null,[(0,o.Wm)(ie,{modelValue:u.times[e.index],"onUpdate:modelValue":[i=>u.times[e.index]=i,F.handleTime],"time-picker":"",range:""},{trigger:(0,o.w5)((()=>[(0,o.Wm)(ee,{class:"clickable-text"},{default:(0,o.w5)((()=>[x])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"])]),(0,o._)("td",null,[(0,o.Wm)(ee,null,{default:(0,o.w5)((()=>[(0,o._)("i",{class:"far fa-save",size:"lg",onClick:i=>F.confirmEditedTime(e.timeId),style:{cursor:"pointer"}},null,8,E)])),_:2},1024)]),(0,o._)("td",null,[(0,o.Wm)(te,{onClick:i=>F.delTimeRange(e.timeId)},null,8,["onClick"])])])))),128)),z])])),_:2},1024),(0,o.Wm)(se,{outline:"warning",size:"lg",onClick:i[2]||(i[2]=e=>u.isTimeToEdit=!1),style:{cursor:"pointer"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Poistu")])),_:1})])))),128))])):(0,o.kq)("",!0),(0,o._)("div",null,[(0,o.Wm)(ie,{dark:"",class:(0,s.C_)({datepicker_opacity:e.isMapSearchActive}),style:{"margin-bottom":"50px","justify-content":"center"},onInternalModelChange:F.handleInternal,range:"","auto-range":"0",modelValue:u.date,"onUpdate:modelValue":[i[3]||(i[3]=e=>u.date=e),F.handleDate],inline:"",locale:"fi",selectText:"Valitse","min-date":new Date,markers:u.markers,"teleport-center":"","month-change-on-scroll":!1},null,8,["class","onInternalModelChange","modelValue","onUpdate:modelValue","min-date","markers"])])])),_:1})])),_:1})):(0,o.kq)("",!0),u.isEditPrice?((0,o.wg)(),(0,o.j4)(Y,{key:1},{default:(0,o.w5)((()=>[(0,o.Wm)(ne,{"onCancel:editPrice":F.cancelEditPrice,"onSave:editedPrice":F.saveEditedPrice},null,8,["onCancel:editPrice","onSave:editedPrice"])])),_:1})):u.isEditProfession?((0,o.wg)(),(0,o.j4)(Y,{key:2},{default:(0,o.w5)((()=>[(0,o.Wm)(re,{provider:u.provider,onAdditionalProfession:F.handleAddProfession,onEditProfession:F.handleEditProfession,onRemoveProfession:F.handleRemoveProfession,"onCancel:editProfession":F.handleCancelEditProfession},null,8,["provider","onAdditionalProfession","onEditProfession","onRemoveProfession","onCancel:editProfession"])])),_:1})):u.isFeedback?((0,o.wg)(),(0,o.j4)(Y,{key:3},{default:(0,o.w5)((()=>[(0,o.Wm)(le,{feedback:u.provider.feedback,onCloseFeedbackList:F.handleCloseFeedbackList},null,8,["feedback","onCloseFeedbackList"])])),_:1})):((0,o.wg)(),(0,o.j4)(Y,{key:4},{default:(0,o.w5)((()=>[u.provider.profession?((0,o.wg)(),(0,o.iD)("div",W,[(0,o.Wm)(Q,{message:u.errorMessage},null,8,["message"]),(0,o.Wm)(X,{message:u.successMessage},null,8,["message"]),(0,o.Wm)(oe,{borderless:"",style:{position:"relative",color:"#ddd","font-size":"18px","text-align":"left"}},{default:(0,o.w5)((()=>[(0,o._)("tbody",null,[u.provider.range?((0,o.wg)(),(0,o.iD)("tr",I,[(0,o._)("td",null,(0,s.zw)(0===u.provider.range?"Tarjoan palvelua paikalla":"Palvelun säde: "+u.provider.range+" km"),1),u.isEditRange?((0,o.wg)(),(0,o.iD)("td",Z,[(0,o._)("div",U,[(0,o._)("div",null,[(0,o.Wm)(te,{style:{float:"right"},onClick:i[5]||(i[5]=e=>u.isEditRange=!1)})]),(0,o._)("div",null,[(0,o.Wm)(ae,{label:"Säde - km",modelValue:u.range,"onUpdate:modelValue":i[6]||(i[6]=e=>u.range=e),size:"lg",type:"number"},null,8,["modelValue"]),$]),u.range.length>0?((0,o.wg)(),(0,o.j4)(se,{key:0,outline:"info",block:"",size:"lg",onClick:F.saveNewRange},{default:(0,o.w5)((()=>[(0,o.Uk)("Tallenna uusi säde")])),_:1},8,["onClick"])):(0,o.kq)("",!0)])])):((0,o.wg)(),(0,o.iD)("td",A,[(0,o.Wm)(se,{outline:"info",block:"",size:"lg",onClick:i[4]||(i[4]=e=>u.isEditRange=!0)},{default:(0,o.w5)((()=>[(0,o.Uk)("Muokkaa toimintaalueetta")])),_:1})]))])):(0,o.kq)("",!0),(0,o._)("tr",null,[V,(0,o._)("td",null,[(0,o.Wm)(q,{class:"rating"},{default:(0,o.w5)((()=>[(0,o.Wm)(Y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{style:{padding:"10px",color:"limegreen"},i:"",class:"far fa-thumbs-up",size:"2x"}),(0,o.Wm)(de,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,o.w5)((()=>[(0,o._)("h2",L,(0,s.zw)(u.provider.rating.positive),1)])),_:1})])),_:1}),(0,o.Wm)(Y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{style:{padding:"10px",color:"palevioletred"},i:"",class:"far fa-thumbs-down",size:"2x"}),(0,o.Wm)(de,{color:"danger",class:"translate-middle p-1",pill:"",notification:""},{default:(0,o.w5)((()=>[(0,o._)("h2",N,(0,s.zw)(u.provider.rating.negative),1)])),_:1})])),_:1}),(0,o.Wm)(Y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(se,{block:"",color:"secondary",onClick:F.getFeedbackListData},{default:(0,o.w5)((()=>[(0,o.Uk)("Katso oma arvostelua")])),_:1},8,["onClick"])])),_:1})])),_:1})])]),u.isProviderCalendar?((0,o.wg)(),(0,o.iD)("tr",S,[O,(0,o._)("td",null,[(0,o.Wm)(se,{outline:"info",block:"",size:"lg",onClick:i[8]||(i[8]=e=>u.isProviderCalendar=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("Vaihda 24/7")])),_:1})])])):((0,o.wg)(),(0,o.iD)("tr",R,[j,(0,o._)("td",null,[(0,o.Wm)(se,{outline:"info",size:"lg",onClick:i[7]||(i[7]=e=>u.isProviderCalendar=!0)},{default:(0,o.w5)((()=>[(0,o.Uk)("Vaihda kalenteriin")])),_:1})])])),(0,o._)("tr",null,[(0,o._)("td",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.provider.profession,((e,i)=>((0,o.wg)(),(0,o.iD)("div",{key:i},(0,s.zw)(e),1)))),128))]),(0,o._)("td",null,[(0,o.Wm)(se,{outline:"info",block:"",size:"lg",onClick:F.editProfessionPro},{default:(0,o.w5)((()=>[(0,o.Uk)("Muokkaa osaamista")])),_:1},8,["onClick"])])]),(0,o._)("tr",null,[(0,o._)("td",null,(0,s.zw)(u.provider.priceByHour)+" Euroa ",1),(0,o._)("td",null,[(0,o.Wm)(se,{outline:"info",block:"",size:"lg",onClick:F.editPrice},{default:(0,o.w5)((()=>[(0,o.Uk)("Muokkaa tuntihinta")])),_:1},8,["onClick"])])]),(0,o._)("tr",null,[K,(0,o._)("td",null,[(0,o.Wm)(se,{outline:"info",block:"",size:"lg",onClick:i[9]||(i[9]=e=>this.$router.push("/pro-public-search"))},{default:(0,o.w5)((()=>[(0,o.Uk)("Kartalta")])),_:1})])])])])),_:1})])):((0,o.wg)(),(0,o.iD)("div",B,H))])),_:1}))])),_:1})])),_:1})])}var q=t(4912),G=t(9398);function J(e,i,t,s,n,r){const l=(0,o.up)("MDBInput"),a=(0,o.up)("MDBBtn"),d=(0,o.up)("MDBContainer");return(0,o.wg)(),(0,o.j4)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{label:"Uusi tuntihinta",size:"lg",white:"",modelValue:s.price,"onUpdate:modelValue":i[0]||(i[0]=e=>s.price=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,o.Wm)(a,{outline:"success",block:"",size:"lg",onClick:r.handleEditPrice},{default:(0,o.w5)((()=>[(0,o.Uk)("Kinnita")])),_:1},8,["onClick"]),(0,o.Wm)(a,{outline:"danger",block:"",size:"lg",onClick:r.cancelEdit},{default:(0,o.w5)((()=>[(0,o.Uk)("Poistu")])),_:1},8,["onClick"])])),_:1})}var Q=t(4313),X=t(4870),ee={name:"edit-price",setup(){const e=(0,X.iH)(null);return{price:e}},components:{MDBContainer:Q.L5,MDBBtn:Q.$v,MDBInput:Q.u2},data(){return{errorMessage:null}},methods:{handleEditPrice(){this.$emit("save:editedPrice",this.price)},cancelEdit(){this.$emit("cancel:editPrice",!1),this.errorMessage="Here is some error!"}}},ie=t(89);const te=(0,ie.Z)(ee,[["render",J]]);var oe=te,se=t(9242);const ne=(0,o._)("i",{class:"fas fa-undo"},null,-1),re={key:0},le={style:{"margin-bottom":"20px"}},ae={value:"slotProps"},de={key:0},me={key:1},ue={style:{},class:"flex align-items-center"},ce={key:1},pe={key:2,style:{"margin-bottom":"20px"}},ge={value:"slotProps"},he={key:0},fe={key:1},ke={style:{},class:"flex align-items-center"};function we(e,i,t,n,r,l){const a=(0,o.up)("MDBIcon"),d=(0,o.up)("Dropdown"),m=(0,o.up)("MDBTable"),u=(0,o.up)("MDBBtnClose"),c=(0,o.up)("MDBBtn"),p=(0,o.up)("MDBContainer");return(0,o.wg)(),(0,o.j4)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(a,{style:{float:"right",cursor:"pointer"},onClick:l.cancelEditProfession,size:"3x"},{default:(0,o.w5)((()=>[ne])),_:1},8,["onClick"]),t.provider&&1===t.provider.profession.length?((0,o.wg)(),(0,o.iD)("div",re,[(0,o.Wm)(m,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,o.w5)((()=>[(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.provider.profession,((t,r)=>((0,o.wg)(),(0,o.iD)("tr",{key:r},[(0,o._)("td",null,(0,s.zw)(t)+" ",1),(0,o._)("td",null,[(0,o._)("form",{onSubmit:i[1]||(i[1]=(0,se.iM)(((...i)=>e.submit&&e.submit(...i)),["prevent"]))},[(0,o._)("div",le,[(0,o.Wm)(d,{onChange:e=>l.changeCurrentProfession(r),modelValue:n.selected,"onUpdate:modelValue":i[0]||(i[0]=e=>n.selected=e),options:n.proList,filter:"",optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",placeholder:"Valitse ammattilainen",class:"w-full md:w-100rem"},{optiongroup:(0,o.w5)((e=>[(0,o._)("div",ue,[(0,o._)("div",null,(0,s.zw)(e.option.label),1)])])),default:(0,o.w5)((()=>[(0,o._)("template",ae,[e.slotProps.value?((0,o.wg)(),(0,o.iD)("div",de,[(0,o._)("div",null,(0,s.zw)(e.slotProps.value.label),1)])):((0,o.wg)(),(0,o.iD)("span",me,(0,s.zw)(e.slotProps.placeholder),1))])])),_:2},1032,["onChange","modelValue","options"])])],32)])])))),128))])])),_:1})])):((0,o.wg)(),(0,o.iD)("div",ce,[(0,o.Wm)(m,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,o.w5)((()=>[(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.provider.profession,((e,i)=>((0,o.wg)(),(0,o.iD)("tr",{key:i},[(0,o._)("td",null,(0,s.zw)(e),1),(0,o._)("td",null,[(0,o.Wm)(u,{white:"",onClick:t=>l.removeProfession(i,e)},null,8,["onClick"])])])))),128))])])),_:1})])),(0,o.Wm)(c,{block:"",color:"primary",size:"lg",onClick:l.addProfessionPressed},{default:(0,o.w5)((()=>[(0,o.Uk)("Lisää ammatti")])),_:1},8,["onClick"]),n.isAddProfession?((0,o.wg)(),(0,o.iD)("div",pe,[(0,o.Wm)(d,{onChange:l.changeNewProfession,modelValue:n.selectedNewProfession,"onUpdate:modelValue":i[2]||(i[2]=e=>n.selectedNewProfession=e),options:n.proList,filter:"",optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",placeholder:"Valitse ammattilainen",class:"w-full md:w-100rem"},{optiongroup:(0,o.w5)((e=>[(0,o._)("div",ke,[(0,o._)("div",null,(0,s.zw)(e.option.label),1)])])),default:(0,o.w5)((()=>[(0,o._)("template",ge,[e.slotProps.value?((0,o.wg)(),(0,o.iD)("div",he,[(0,o._)("div",null,(0,s.zw)(e.slotProps.value.label),1)])):((0,o.wg)(),(0,o.iD)("span",fe,(0,s.zw)(e.slotProps.placeholder),1))])])),_:1},8,["onChange","modelValue","options"])])):(0,o.kq)("",!0),n.additionalProfession.length>2?((0,o.wg)(),(0,o.j4)(c,{key:3,outline:"success",block:"",size:"lg",onClick:e.handleAddAdditionalProfession},{default:(0,o.w5)((()=>[(0,o.Uk)("Kinnita uus amet")])),_:1},8,["onClick"])):(0,o.kq)("",!0),(0,o.Wm)(c,{outline:"danger",block:"",size:"lg",style:{"margin-top":"20px"},onClick:l.cancelEditProfession},{default:(0,o.w5)((()=>[(0,o.Uk)("Poistu")])),_:1},8,["onClick"])])),_:1})}var ve=t(3998),ye=t(9673),De={name:"editProfession",props:{provider:Object},components:{Dropdown:ye.Z,MDBContainer:Q.L5,MDBBtn:Q.$v,MDBTable:Q.re,MDBIcon:Q.vm,MDBBtnClose:Q.Ok},setup(){const e=(0,X.iH)(""),i=(0,X.iH)(null),t=(0,X.iH)(null),o=(0,X.iH)(!1),s=(0,X.iH)(""),n=(0,X.iH)(ve.Z);return{profession:e,selected:i,selectedNewProfession:t,isAddProfession:o,additionalProfession:s,proList:n}},methods:{changeCurrentProfession(e){console.log("Selected xx "+e+" "+this.selected.label),this.$emit("editProfession",e,this.selected.label),this.selected=null},changeNewProfession(){console.log("New new "+this.selectedNewProfession.label),this.isAddProfession=!1,this.$emit("additionalProfession",this.selectedNewProfession.label),this.selectedNewProfession=null},addProfessionPressed(){this.selectedNewProfession="",this.isAddProfession=!0},addNewProfession(){this.selectedNewProfession="";const e=document.getElementById("new_profession");e.addEventListener("change",(e=>{this.isAddProfession=!1,this.$emit("additionalProfession",e.target.value)})),this.selectedNewProfession=""},editProfession(e){this.isAddProfession=!1;const i=document.getElementById("edit_profession");i.addEventListener("change",(i=>{this.$emit("editProfession",e,i.target.value)})),this.selected=""},removeProfession(e,i){this.isAddProfession=!1,this.$emit("removeProfession",e,i),this.selected=null},cancelEditProfession(){this.$emit("cancel:editProfession")}}};const _e=(0,ie.Z)(De,[["render",we]]);var Te=_e,Pe=t(5118),be=t(8033),Ce=t(6876),Me=t(4058),xe=t(5174);const Ee=t(7218),ze="/api/offers",Be=async()=>{const e=await Ee.get(ze);return e.data},Fe=async e=>{const i=await Ee.post(`${ze}`,e);return i.data},He=async(e,i)=>{const t=await Ee.post(`${ze}/${e}`,i);return t.data},We=async(e,i)=>{const t=await Ee.delete(`${ze}/${e}/timeoffer/${i}`);return t.data},Ie=async(e,i)=>{const t=await Ee.put(`${ze}/${e}`,i);return t.data};var Ae={getOffers:Be,addFirstOffer:Fe,addAdditionalOffer:He,removeTimeOffer:We,updateOffer:Ie};const Ze={style:{border:"1px solid #999",padding:"10px"}},Ue={style:{"margin-bottom":"10px"}};function $e(e,i,t,n,r,l){return(0,o.wg)(),(0,o.iD)("div",Ze,[(0,o._)("h4",{style:{"text-align":"right",cursor:"pointer",color:"green"},onClick:i[0]||(i[0]=i=>e.$emit("closeFeedbackList"))},"Valmis"),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.feedback,(e=>((0,o.wg)(),(0,o.iD)("div",{style:{"text-align":"left"},key:e.id},[(0,o._)("h2",Ue,(0,s.zw)(e.pos),1)])))),128)),(0,o._)("h3",null,(0,s.zw)(t.feedback.length>0?t.feedback.pos:"Ei arvostelua vielä!"),1)])}var Ve={name:"FeedbackList",props:{feedback:Array}};const Le=(0,ie.Z)(Ve,[["render",$e]]);var Ne=Le,Re=t(9482),je={name:"Provider-panel",props:{userIsProvider:Object,bookings:Array,bookingsConfirmed:Array},components:{Gallery:Re["default"],FeedbackList:Ne,info:Ce.Z,errorNotification:Pe.Z,successNotification:be.Z,editPrice:oe,editProfession:Te,MDBContainer:Q.L5,MDBIcon:Q.vm,MDBRow:Q.uZ,MDBCol:Q.TK,MDBTable:Q.re,MDBBtn:Q.$v,MDBBtnClose:Q.Ok,MDBBadge:Q.m_,MDBInput:Q.u2,VueDatePicker:q.Z},data(){return{confirmedBookings:[],testi:{},un:"",ri:"",rooms:[],close:!0,isGallery:!1,proImages:[]}},setup(){const e=(0,X.iH)(!1),i=(0,X.iH)(null),t=(0,X.iH)(""),o=(0,X.iH)(null),s=(0,X.iH)(null),n=(0,X.iH)(!1),r=(0,X.iH)(!1),l=(0,X.iH)(!1),a=(0,X.iH)(!1),d=(0,X.iH)(!1),m=(0,X.iH)(!1),u=(0,X.iH)(null),c=(0,X.iH)(null),p=(0,X.iH)(null),g=(0,X.iH)([]),h=(0,X.iH)([]),f=(0,X.iH)(!1),k=(0,X.iH)([]),w=(0,X.iH)({}),v=(0,X.iH)(!1),y=(0,X.iH)([]),D=(0,X.iH)({}),_=(0,X.iH)(""),T=(0,X.iH)({}),P=(0,X.iH)(null),b=(0,X.iH)([]),C=(0,X.iH)(null),M=(0,X.iH)(null),x=(0,X.iH)(null),E=(0,X.iH)(null),z=(0,X.iH)(null),B=(0,X.iH)({}),F=(0,X.iH)(!1),H=(0,X.iH)([]),W=(0,X.iH)(null),I=(0,X.iH)([(0,xe.Z)(new Date,1),(0,xe.Z)(new Date,2),(0,xe.Z)(new Date,7)]);return{isProviderCalendar:e,testii:i,weekDay:t,timerange:o,datee:s,range:n,isRangeSelected:r,isEditRange:l,isEditPrice:a,isFeedback:d,isEditProfession:m,clearTime:u,dateTest:c,date:p,markers:g,contents:h,isContents:f,markedDays:k,time:w,isConfirmTime:v,times:y,datetime:D,userId:_,provider:T,creditLeft:P,providerTimes:b,errorMessage:C,timeEditSuccessMessage:x,timeEditErrorMessage:E,oblicationInfoMessage:z,successMessage:M,editTime:B,isTimeToEdit:F,editArr:H,timeToEdit:W,highlightedDates:I}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const i=JSON.parse(e);this.userId=i.id,console.log("User token in provider: "+i.token),this.providerData()}else this.$router.push("/")},methods:{goToMap(){this.$router.push("/provider-public")},getDate(){const e=(new Date).getTime(),i=(new Date).getTime()+6048e5,t=864e5;console.log("and now "+e),console.log("week_ms added  is: "+i);const o=(i-e)/t;console.log("Days between - "+o)},saveNewRange(){this.isEditRange=!1,this.provider.range=this.range},getIt(){let e="aaa",i="room";Me.Z.auth={username:e,room:i},Me.Z.connect();let t="Oopersama";Me.Z.emit("updateRoom",t)},xxx(e){console.log("Test nimi "+e)},joinAllRooms(){const e=["111","222"];Me.Z.emit("joinAllClientRooms",e)},handleRemoveProConfirmed(e){console.log("Info closed here?? "+e.header),this.$emit("removeProBookingConfirmed",e),this.confirmedBookings=this.confirmedBookings.filter((i=>i.id!==e.id)),this.successMessage="Siit saab kustutada selle teavituse soovi korral!",setTimeout((()=>{this.successMessage=null}),3e3)},socketResetTest(){Me.Z.disconnect(),Me.Z.connect()},openChatPanel(e){e.preventDefault(),console.log("Will chat open...");const i=localStorage.getItem("sessionID");i&&(this.usernameAlreadySelected=!0,Me.Z.auth={sessionID:i},Me.Z.connect()),Me.Z.on("session",(({sessionID:e,userID:i,roomName:t})=>{Me.Z.auth={sessionID:e},localStorage.setItem("sessionID",e),Me.Z.userID=i,Me.Z.roomName=t}))},handleInternal(e){if(this.editArr=[],this.editTime={},this.isTimeToEdit=!1,e){let i=e.toString().substring(8,10),t=parseInt(i);this.weekDay=e.toString().substring(0,3);let o={};this.markers.forEach((e=>{e.date.getDate()===t&&(this.isTimeToEdit=!0,o={day:t,weekDay:this.weekDay,time:e.content})})),this.editArr.push(o)}},editPrice(){this.isEditPrice=!0},async saveEditedPrice(e){const i={priceByHour:e},t=await G.Z.updateProvider(this.provider.id,i);t&&(this.provider.priceByHour=e,console.log("Price: "+this.provider.priceByHour),this.isEditPrice=!1,this.successMessage="Tuntihinta on muokattu!",setTimeout((()=>{this.successMessage=null}),2e3))},cancelEditPrice(e){this.isEditPrice=e},getFeedbackListData(){this.isFeedback=!0},handleCloseFeedbackList(){this.isFeedback=!1},editProfessionPro(){this.isEditProfession=!0},handleEditProfession(e,i){console.log("Profession is "+i+" and index "+e),this.provider.profession[0]=i,G.Z.editProfession(this.provider.id,{index:e,pro:i})},handleAddProfession(e){console.log("Uus amet on "+e),G.Z.additionalProfession(this.provider.id,{profession:e}),this.provider.profession.includes(e)||this.provider.profession.push(e)},handleRemoveProfession(e,i){console.log("Profession index is "+e+" and profession is "+i),G.Z.removeProfession(this.provider.id,{profession:i}),this.provider.profession.splice(e,1)},handleCancelEditProfession(){this.isEditProfession=!1},removeExpiredDateTime(){this.providerTimes.forEach((e=>{let i=e.yearFrom,t=e.monthFrom,o=e.dayFrom,s=e.hoursFrom,n=e.minutesFrom;new Date(i,t,o,s,n).getTime()<(new Date).getTime()&&this.delTimeRange(e.id)}))},async editTimeTest(){const e={hoursFrom:1};await Ae.updateOffer("6431407f53469b1f48eeb2f0",e)},updateTimesAndMarkers(){this.providerTimes.forEach((e=>{console.log("Provider times: "+e.hoursFrom),this.setTimeMarkers(e)})),this.providerTimes.forEach((e=>{this.initializeTime(e)}))},async delTimeRange(e){await Ae.removeTimeOffer(this.provider.id,e),this.providerTimes=this.providerTimes.filter((i=>i.id!==e)),this.times=[],this.markers=[],this.updateTimesAndMarkers(),this.editArr.length>1?(this.updateTimesAndMarkers(),this.editArr[0].time=this.editArr[0].time.filter((i=>i.timeId!==e))):(this.editArr=[],this.updateTimesAndMarkers())},onTimePickerOpen(){console.log("Timepicker opened")},alertFn(e){console.log("Opened "+e)},onClose(){console.log("On close...")},async handleDate(){console.log("Date handled!");const e={yearFrom:this.date[0].getFullYear(),monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),yearTo:this.date[1].getFullYear(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},i=await Ae.addAdditionalOffer(this.provider.id,e);console.log("Provider times "+this.providerTimes),this.providerTimes=this.providerTimes.concat(i),this.times=[],this.markers=[],this.editArr=[],this.providerTimes.forEach((e=>{this.initializeTime(e)})),this.providerTimes.forEach((e=>{this.setTimeMarkers(e)}));let t={};this.markers.forEach((e=>{e.date.getDate()===i.dayFrom&&(this.isTimeToEdit=!0,t={day:i.dayFrom,weekDay:this.weekDay,time:e.content})})),this.editArr.push(t)},async confirmEditedTime(e){let i;console.log("Confirmed??? "+e+" hours edited: "+this.t);const t=this.timeToEdit;if(t){i={hoursFrom:t[0].hours,minutesFrom:t[0].minutes,hoursTo:t[1].hours,minutesTo:t[1].minutes};const o=await Ae.updateOffer(e,i);console.log("Offer edited: "+o),this.timeEditSuccessMessage="Aika muokattu onnistuneesti!",this.providerTimes=this.providerTimes.map((i=>i.id!==e?i:o)),this.testii=o,setTimeout((()=>{this.timeEditSuccessMessage=null}),2e3),this.isTimeToEdit=!1}else this.timeEditErrorMessage="Ensin on vaihdettava kellonaika!",setTimeout((()=>{this.timeEditErrorMessage=null}),2e3);this.timeToEdit=null},handleTime(e){this.timeToEdit=e},setMarkedDay(e){const i=e-(new Date).getDate();this.markedDays.push(e),console.log("Day to set_ "+i)},cancelTime(){console.log("Time cancelled!")},async addAvailableDate(){const e={yearFrom:this.date[0].getFullYear(),monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),yearTo:this.date[1].getFullYear(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},i=await Ae.addAdditionalOffer(this.provider.id,e);console.log("Saved? "+i)},setTimeMarkers(e){let i=null;this.contents=[],i=e.monthFrom===(new Date).getMonth()?(0,xe.Z)(new Date,e.dayFrom-(new Date).getDate()):(0,xe.Z)(new Date(e.yearFrom,e.monthFrom,0),e.dayFrom),console.log("Test markers: "+new Date(e.yearFrom,e.monthFrom,e.dayFrom)),this.times.forEach(((t,o)=>{if(t[0].day===e.dayFrom){let s=t[0].hours+" : "+t[0].minutes+" - "+t[1].hours+" : "+t[1].minutes;this.contents.push({text:s,index:o,timeId:this.providerTimes[o].id,color:"red"}),this.markers=this.markers.concat({dFrom:e.dayFrom,date:i,type:"line",color:"orange",content:this.contents})}}))},async providerData(){const e=await G.Z.getProvider(this.userId);e&&(this.provider=e,this.creditLeft=((e.proTime-(new Date).getTime())/864e5).toFixed()<0?0:((e.proTime-(new Date).getTime())/864e5).toFixed(),e.reference.forEach(((e,i)=>{this.proImages=[...this.proImages,{id:i,size:"1400-933",src:t(7736)(`./${e.name}`),thumb:t(7736)(`./${e.name}`),subHtml:'<div class="lightGallery-captions">\n\n\n            </div>"'}]})),this.providerTimes=e.timeoffer,e.isAvailable24_7||(this.isProviderCalendar=!0),console.log("Provider rooms are: "+e.room.map((e=>e))),this.rooms=e.room),this.confirmedBookings=e.booking.filter((e=>"confirmed"===e.status)),this.times=[],this.providerTimes&&(this.providerTimes.forEach((e=>{this.initializeTime(e)})),this.removeExpiredDateTime(),this.providerTimes.forEach((e=>{this.setTimeMarkers(e)})))},initializeTime(e){let i=[];i.push({day:e.dayFrom,hours:e.hoursFrom,minutes:e.minutesFrom},{day:e.dayTo,hours:e.hoursTo,minutes:e.minutesTo}),this.times.push(i)},test(e){console.log("What ever: "+e)}}};const Se=(0,ie.Z)(je,[["render",Y]]);var Oe=Se},5551:function(e,i,t){e.exports=t.p+"img/error.9510853e.png"}}]);
//# sourceMappingURL=322.222d8c09.js.map