"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[811],{5118:function(e,i,t){var o=t(3396);const s=({message:e})=>null===e?null:(0,o.Wm)("div",{className:"error"},[e,(0,o.Wm)("img",{className:"errorImg",src:t(5551)},null)]);i.Z=s},3998:function(e,i){const t=[{label:"Hitsaaja"},{label:"Putkimies"},{label:"Sähkömies"}],o=[{label:"Siivooja",value:"4"}],s=[{label:"Kirurgi",value:"5"},{label:"Psykiatri",value:"6"}],n=[{label:"Kampaaja",value:"7"},{label:"Parturi",value:"8"}],r=[{group:"Rakennus",options:t},{group:"Kiinteistöala",options:o},{group:"Terveydenala",options:s},{group:"Kauneusala",options:n}];i.Z=r},6876:function(e,i,t){t.d(i,{Z:function(){return k}});var o=t(3396),s=t(7139);const n={key:0},r={class:"waiting-info"},l={key:1},a={class:"info"},d={key:0},u={key:1};function m(e,i,t,m,c,p){const g=(0,o.up)("monthConverter"),h=(0,o.up)("MDBBtn");return"for-recipient"===t.status?((0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",r,[(0,o.Uk)(" ( "),(0,o._)("b",null,(0,s.zw)(t.msg.ordered[0].yritys),1),(0,o.Uk)(" ) - "+(0,s.zw)(t.msg.header)+" - ",1),(0,o.Wm)(g,{num:t.msg.onTime[0].month},null,8,["num"]),(0,o.Uk)(", "+(0,s.zw)(t.msg.onTime[0].day)+", "+(0,s.zw)(t.msg.onTime[0].year)+" kello "+(0,s.zw)(t.msg.onTime[0].hours)+" : "+(0,s.zw)(t.msg.onTime[0].minutes)+" ",1),(0,o.Wm)(h,{block:"",outline:"warning",onClick:i[0]||(i[0]=e=>p.removeComplitedBookingPanel(t.msg))},{default:(0,o.w5)((()=>[(0,o.Uk)(" (Kustub muidu kui aeg läbi saab) - Saab eemaldada kohe (ajutine lahendus) ")])),_:1})])])):((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",a,["for-provider"===t.status?((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("h2",null,[(0,o._)("b",null,(0,s.zw)(t.msg.header),1)]),(0,o.Uk)(" "+(0,s.zw)(t.msg.address)+" ",1),(0,o.Wm)(g,{num:t.msg.onTime[0].month},null,8,["num"]),(0,o.Uk)(", "+(0,s.zw)(t.msg.onTime[0].day)+", "+(0,s.zw)(t.msg.onTime[0].year)+" kello "+(0,s.zw)(t.msg.onTime[0].hours)+" : "+(0,s.zw)(t.msg.onTime[0].minutes),1)])):"recipient"===t.status?((0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("b",null,(0,s.zw)(t.msg.provider),1),(0,o.Uk)(" - "+(0,s.zw)(t.msg.header)+" ",1),(0,o.Wm)(g,{num:t.msg.onTime[0].month},null,8,["num"]),(0,o.Uk)(", "+(0,s.zw)(t.msg.onTime[0].day)+", "+(0,s.zw)(t.msg.onTime[0].year)+" kello "+(0,s.zw)(t.msg.onTime[0].hours)+" : "+(0,s.zw)(t.msg.onTime[0].minutes),1)])):(0,o.kq)("",!0)])]))}var c=t(4313),p=t(5253),g={name:"Info",props:{status:String,msg:Object},components:{MDBBtn:c.$v,monthConverter:p.Z},methods:{removeCompletedBookingPro(e){this.$emit("remove:proConfirmed",e)},removeComplitedBookingPanel(e){this.$emit("remove:complitedBookingPanel",e)}}},h=t(89);const f=(0,h.Z)(g,[["render",m],["__scopeId","data-v-20e875e8"]]);var k=f},3811:function(e,i,t){t.r(i),t.d(i,{default:function(){return Ue}});t(7658);var o=t(3396),s=t(7139);const n={style:{padding:"20px",border:"solid green"}},r={key:0},l=(0,o._)("h3",null,"Käyttö ",-1),a={key:1},d={key:2},u=(0,o._)("h2",null,"Valitettavasti käyttö on päättynyt!",-1),m=(0,o._)("div",{style:{height:"100px"}},null,-1),c={style:{position:"relative"}},p={id:"info-block"},g={class:"file-marker"},h=(0,o._)("div",{class:"box-title"}," Vahvistetut tilaukset! ",-1),f={class:"box-contents"},k={class:"flex flex-wrap align-items-center justify-content-center"},v={class:"scalein animation-duration-3000 animation-iteration flex align-items-center justify-content-center font-bold w-full"},w={key:0},y={style:{"font-size":"16px"}},D=(0,o._)("i",{class:"fas fa-edit",size:"lg",style:{cursor:"pointer"}},null,-1),T=["onClick"],_=(0,o._)("tr",null,[(0,o._)("td")],-1),b={key:0,class:"spinner-border",role:"status"},P=(0,o._)("span",{class:"visually-hidden"},"Loading...",-1),C=[P],M={key:1},x={key:0},E={key:0},z={key:1},B={style:{border:"solid green","margin-bottom":"10px",padding:"12px"}},H=(0,o._)("br",null,null,-1),F=(0,o._)("td",null," Palaute ",-1),W={style:{width:"33px"}},I={style:{width:"33px"}},A={key:1},Z=(0,o._)("td",null," Tarjoan palvelua 24/7 ",-1),U={key:2},$=(0,o._)("td",null," Päätän, koska tarjoan palvelua ",-1),j=(0,o._)("td",null," Katso kartalta ",-1);function R(e,i,t,P,R,V){const K=(0,o.up)("MDBCol"),L=(0,o.up)("MDBRow"),S=(0,o.up)("info"),O=(0,o.up)("MDBContainer"),N=(0,o.up)("errorNotification"),Y=(0,o.up)("successNotification"),q=(0,o.up)("MDBIcon"),G=(0,o.up)("VueDatePicker"),J=(0,o.up)("MDBBtnClose"),Q=(0,o.up)("MDBTable"),X=(0,o.up)("MDBBtn"),ee=(0,o.up)("editPrice"),ie=(0,o.up)("edit-profession"),te=(0,o.up)("feedback-list"),oe=(0,o.up)("MDBInput"),se=(0,o.up)("MDBBadge");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o.Wm)(K),(0,o.Wm)(K,{col:"7",style:{padding:"55px 20px",position:"relative"}},{default:(0,o.w5)((()=>[(0,o._)("div",n,[((P.provider.proTime-(new Date).getTime())/864e5).toFixed()>3?((0,o.wg)(),(0,o.iD)("div",r,[l,(0,o._)("h2",null,(0,s.zw)(((P.provider.proTime-(new Date).getTime())/864e5).toFixed())+" päivää",1)])):((P.provider.proTime-(new Date).getTime())/864e5).toFixed()<=3&&((P.provider.proTime-(new Date).getTime())/864e5).toFixed()>0?((0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("h2",null,(0,s.zw)(((P.provider.proTime-(new Date).getTime())/864e5).toFixed())+" päivää",1),(0,o._)("p",{style:{color:"orangered",float:"right",cursor:"pointer"},onClick:i[0]||(i[0]=i=>e.$router.push("/pay-plan"))},"Lattaa lisää aikaa!")])):((0,o.wg)(),(0,o.iD)("div",d,[u,(0,o._)("p",{style:{color:"orangered",float:"right",cursor:"pointer"},onClick:i[1]||(i[1]=i=>e.$router.push("/pay-plan"))},"Lattaa lisää aikaa!")]))])])),_:1}),m])),_:1}),(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o.Wm)(K,{style:{padding:"50px 20px 50px 20px"},md:"4"},{default:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o._)("h2",null,(0,s.zw)(P.provider.yritys)+":",1),(0,o._)("h2",null,(0,s.zw)(P.provider.address),1)])])),_:1}),R.confirmedBookings.length>0?((0,o.wg)(),(0,o.j4)(K,{key:0,style:{padding:"50px 10px 30px 10px"},md:"8"},{default:(0,o.w5)((()=>[(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o._)("aside",p,[(0,o._)("section",g,[(0,o._)("div",null,[h,(0,o._)("div",f,[(0,o._)("div",k,[(0,o._)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(R.confirmedBookings,(e=>((0,o.wg)(),(0,o.j4)(S,{key:e.id,status:"for-provider",msg:e,"onRemove:proConfirmed":V.handleRemoveProConfirmed},null,8,["msg","onRemove:proConfirmed"])))),128))])])])])])])])),_:1})])),_:1})):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[P.isProviderCalendar?((0,o.wg)(),(0,o.j4)(K,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(N,{message:P.timeEditErrorMessage},null,8,["message"]),(0,o.Wm)(Y,{message:P.timeEditSuccessMessage},null,8,["message"]),P.isTimeToEdit?((0,o.wg)(),(0,o.iD)("div",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(P.editArr,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,style:{border:"solid orange","padding-bottom":"20px","padding-top":"20px","margin-bottom":"10px"}},[(0,o._)("div",y,(0,s.zw)(e.weekDay)+" - "+(0,s.zw)(e.day),1),(0,o.Wm)(Q,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,o.w5)((()=>[(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.time,((e,i)=>((0,o.wg)(),(0,o.iD)("tr",{key:i},[(0,o._)("td",null,(0,s.zw)(P.times[e.index][0].hours>=10?P.times[e.index][0].hours:"0"+P.times[e.index][0].hours)+" : "+(0,s.zw)(P.times[e.index][0].minutes>=10?P.times[e.index][0].minutes:"0"+P.times[e.index][0].minutes)+" - "+(0,s.zw)(P.times[e.index][1].hours>=10?P.times[e.index][1].hours:"0"+P.times[e.index][1].hours)+" : "+(0,s.zw)(P.times[e.index][1].minutes>=10?P.times[e.index][1].minutes:"0"+P.times[e.index][1].minutes),1),(0,o._)("td",null,[(0,o.Wm)(G,{modelValue:P.times[e.index],"onUpdate:modelValue":[i=>P.times[e.index]=i,V.handleTime],"time-picker":"",range:""},{trigger:(0,o.w5)((()=>[(0,o.Wm)(q,{class:"clickable-text"},{default:(0,o.w5)((()=>[D])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"])]),(0,o._)("td",null,[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o._)("i",{class:"far fa-save",size:"lg",onClick:i=>V.confirmEditedTime(e.timeId),style:{cursor:"pointer"}},null,8,T)])),_:2},1024)]),(0,o._)("td",null,[(0,o.Wm)(J,{onClick:i=>V.delTimeRange(e.timeId)},null,8,["onClick"])])])))),128)),_])])),_:2},1024),(0,o.Wm)(X,{outline:"warning",size:"lg",onClick:i[2]||(i[2]=e=>P.isTimeToEdit=!1),style:{cursor:"pointer"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Poistu")])),_:1})])))),128))])):(0,o.kq)("",!0),(0,o._)("div",null,[(0,o.Wm)(G,{dark:"",class:(0,s.C_)({datepicker_opacity:e.isMapSearchActive}),style:{"margin-bottom":"50px","justify-content":"center"},onInternalModelChange:V.handleInternal,range:"","auto-range":"0",modelValue:P.date,"onUpdate:modelValue":[i[3]||(i[3]=e=>P.date=e),V.handleDate],inline:"",locale:"fi",selectText:"Valitse","min-date":new Date,markers:P.markers,"teleport-center":"","month-change-on-scroll":!1},null,8,["class","onInternalModelChange","modelValue","onUpdate:modelValue","min-date","markers"])])])),_:1})])),_:1})):(0,o.kq)("",!0),P.isEditPrice?((0,o.wg)(),(0,o.j4)(K,{key:1},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{"onCancel:editPrice":V.cancelEditPrice,"onSave:editedPrice":V.saveEditedPrice},null,8,["onCancel:editPrice","onSave:editedPrice"])])),_:1})):P.isEditProfession?((0,o.wg)(),(0,o.j4)(K,{key:2},{default:(0,o.w5)((()=>[(0,o.Wm)(ie,{provider:P.provider,onAdditionalProfession:V.handleAddProfession,onEditProfession:V.handleEditProfession,onRemoveProfession:V.handleRemoveProfession,"onCancel:editProfession":V.handleCancelEditProfession},null,8,["provider","onAdditionalProfession","onEditProfession","onRemoveProfession","onCancel:editProfession"])])),_:1})):P.isFeedback?((0,o.wg)(),(0,o.j4)(K,{key:3},{default:(0,o.w5)((()=>[(0,o.Wm)(te,{feedback:P.provider.feedback,onCloseFeedbackList:V.handleCloseFeedbackList},null,8,["feedback","onCloseFeedbackList"])])),_:1})):((0,o.wg)(),(0,o.j4)(K,{key:4},{default:(0,o.w5)((()=>[P.provider.profession?((0,o.wg)(),(0,o.iD)("div",M,[(0,o.Wm)(N,{message:P.errorMessage},null,8,["message"]),(0,o.Wm)(Y,{message:P.successMessage},null,8,["message"]),(0,o.Wm)(Q,{borderless:"",style:{position:"relative",color:"#ddd","font-size":"18px","text-align":"left"}},{default:(0,o.w5)((()=>[(0,o._)("tbody",null,[P.provider.range?((0,o.wg)(),(0,o.iD)("tr",x,[(0,o._)("td",null,(0,s.zw)(0===P.provider.range?"Tarjoan palvelua paikalla":"Palvelun säde: "+P.provider.range+" km"),1),P.isEditRange?((0,o.wg)(),(0,o.iD)("td",z,[(0,o._)("div",B,[(0,o._)("div",null,[(0,o.Wm)(J,{style:{float:"right"},onClick:i[5]||(i[5]=e=>P.isEditRange=!1)})]),(0,o._)("div",null,[(0,o.Wm)(oe,{label:"Säde - km",modelValue:P.range,"onUpdate:modelValue":i[6]||(i[6]=e=>P.range=e),size:"lg",type:"number"},null,8,["modelValue"]),H]),P.range.length>0?((0,o.wg)(),(0,o.j4)(X,{key:0,outline:"info",block:"",size:"lg",onClick:V.saveNewRange},{default:(0,o.w5)((()=>[(0,o.Uk)("Tallenna uusi säde")])),_:1},8,["onClick"])):(0,o.kq)("",!0)])])):((0,o.wg)(),(0,o.iD)("td",E,[(0,o.Wm)(X,{outline:"info",block:"",size:"lg",onClick:i[4]||(i[4]=e=>P.isEditRange=!0)},{default:(0,o.w5)((()=>[(0,o.Uk)("Muokkaa toimintaalueetta")])),_:1})]))])):(0,o.kq)("",!0),(0,o._)("tr",null,[F,(0,o._)("td",null,[(0,o.Wm)(L,{class:"rating"},{default:(0,o.w5)((()=>[(0,o.Wm)(K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q,{style:{padding:"10px",color:"limegreen"},i:"",class:"far fa-thumbs-up",size:"2x"}),(0,o.Wm)(se,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,o.w5)((()=>[(0,o._)("h2",W,(0,s.zw)(P.provider.rating.positive),1)])),_:1})])),_:1}),(0,o.Wm)(K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q,{style:{padding:"10px",color:"palevioletred"},i:"",class:"far fa-thumbs-down",size:"2x"}),(0,o.Wm)(se,{color:"danger",class:"translate-middle p-1",pill:"",notification:""},{default:(0,o.w5)((()=>[(0,o._)("h2",I,(0,s.zw)(P.provider.rating.negative),1)])),_:1})])),_:1}),(0,o.Wm)(K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(X,{block:"",color:"secondary",onClick:V.getFeedbackListData},{default:(0,o.w5)((()=>[(0,o.Uk)("Katso oma arvostelua")])),_:1},8,["onClick"])])),_:1})])),_:1})])]),P.isProviderCalendar?((0,o.wg)(),(0,o.iD)("tr",U,[$,(0,o._)("td",null,[(0,o.Wm)(X,{outline:"info",block:"",size:"lg",onClick:i[8]||(i[8]=e=>P.isProviderCalendar=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("Vaihda 24/7")])),_:1})])])):((0,o.wg)(),(0,o.iD)("tr",A,[Z,(0,o._)("td",null,[(0,o.Wm)(X,{outline:"info",size:"lg",onClick:i[7]||(i[7]=e=>P.isProviderCalendar=!0)},{default:(0,o.w5)((()=>[(0,o.Uk)("Vaihda kalenteriin")])),_:1})])])),(0,o._)("tr",null,[(0,o._)("td",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(P.provider.profession,((e,i)=>((0,o.wg)(),(0,o.iD)("div",{key:i},(0,s.zw)(e),1)))),128))]),(0,o._)("td",null,[(0,o.Wm)(X,{outline:"info",block:"",size:"lg",onClick:V.editProfessionPro},{default:(0,o.w5)((()=>[(0,o.Uk)("Muokkaa osaamista")])),_:1},8,["onClick"])])]),(0,o._)("tr",null,[(0,o._)("td",null,(0,s.zw)(P.provider.priceByHour)+" Euroa ",1),(0,o._)("td",null,[(0,o.Wm)(X,{outline:"info",block:"",size:"lg",onClick:V.editPrice},{default:(0,o.w5)((()=>[(0,o.Uk)("Muokkaa tuntihinta")])),_:1},8,["onClick"])])]),(0,o._)("tr",null,[j,(0,o._)("td",null,[(0,o.Wm)(X,{outline:"info",block:"",size:"lg",onClick:i[9]||(i[9]=e=>this.$router.push("/pro-public-search"))},{default:(0,o.w5)((()=>[(0,o.Uk)("Kartalta")])),_:1})])])])])),_:1})])):((0,o.wg)(),(0,o.iD)("div",b,C))])),_:1}))])),_:1})])),_:1})])}var V=t(4912),K=t(9398);const L=(0,o._)("h1",null,"Editing price",-1);function S(e,i,t,s,n,r){const l=(0,o.up)("MDBInput"),a=(0,o.up)("MDBBtn"),d=(0,o.up)("MDBContainer");return(0,o.wg)(),(0,o.j4)(d,null,{default:(0,o.w5)((()=>[L,(0,o.Wm)(l,{label:"Uusi tuntihinta",modelValue:s.price,"onUpdate:modelValue":i[0]||(i[0]=e=>s.price=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,o.Wm)(a,{outline:"success",block:"",size:"lg",onClick:r.handleEditPrice},{default:(0,o.w5)((()=>[(0,o.Uk)("Kinnita")])),_:1},8,["onClick"]),(0,o.Wm)(a,{outline:"danger",block:"",size:"lg",onClick:r.cancelEdit},{default:(0,o.w5)((()=>[(0,o.Uk)("Poistu")])),_:1},8,["onClick"])])),_:1})}var O=t(4313),N=t(4870),Y={name:"edit-price",setup(){const e=(0,N.iH)(null);return{price:e}},components:{MDBContainer:O.L5,MDBBtn:O.$v,MDBInput:O.u2},data(){return{errorMessage:null}},methods:{handleEditPrice(){this.$emit("save:editedPrice",this.price)},cancelEdit(){this.$emit("cancel:editPrice",!1),this.errorMessage="Here is some error!"}}},q=t(89);const G=(0,q.Z)(Y,[["render",S]]);var J=G,Q=t(9242);const X=(0,o._)("i",{class:"fas fa-undo"},null,-1),ee={key:0},ie=["onClick"],te=(0,o._)("option",{value:""},"Vaihda ammattisi",-1),oe=["label"],se=["value"],ne=["value"],re={key:1},le=(0,o._)("option",{value:""},"Anna uusi ammatti",-1),ae=["label"],de=["value"],ue=["value"];function me(e,i,t,n,r,l){const a=(0,o.up)("MDBIcon"),d=(0,o.up)("MDBTable"),u=(0,o.up)("MDBBtnClose"),m=(0,o.up)("MDBBtn"),c=(0,o.up)("MDBContainer");return(0,o.wg)(),(0,o.j4)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(a,{style:{float:"right",cursor:"pointer"},onClick:l.cancelEditProfession,size:"3x"},{default:(0,o.w5)((()=>[X])),_:1},8,["onClick"]),t.provider&&1===t.provider.profession.length?((0,o.wg)(),(0,o.iD)("div",ee,[(0,o.Wm)(d,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,o.w5)((()=>[(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.provider.profession,((t,r)=>((0,o.wg)(),(0,o.iD)("tr",{key:r},[(0,o._)("td",null,(0,s.zw)(t)+" ",1),(0,o._)("td",null,[(0,o._)("form",{onSubmit:i[1]||(i[1]=(0,Q.iM)(((...i)=>e.submit&&e.submit(...i)),["prevent"]))},[(0,o.wy)((0,o._)("select",{style:{padding:"10px"},id:"edit_profession","onUpdate:modelValue":i[0]||(i[0]=e=>n.selected=e),onClick:e=>l.editProfession(r)},[te,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.proList,(e=>((0,o.wg)(),(0,o.iD)(o.HY,null,[e.group?((0,o.wg)(),(0,o.iD)("optgroup",{label:e.group,key:e.group},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.options,(e=>((0,o.wg)(),(0,o.iD)("option",{value:e.label,key:e.label},(0,s.zw)(e.label),9,se)))),128))],8,oe)):((0,o.wg)(),(0,o.iD)("option",{value:e,key:e.value},(0,s.zw)(e.label),9,ne))],64)))),256))],8,ie),[[Q.bM,n.selected]])],32)])])))),128))])])),_:1})])):((0,o.wg)(),(0,o.iD)("div",re,[(0,o.Wm)(d,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,o.w5)((()=>[(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.provider.profession,((e,i)=>((0,o.wg)(),(0,o.iD)("tr",{key:i},[(0,o._)("td",null,(0,s.zw)(e),1),(0,o._)("td",null,[(0,o.Wm)(u,{onClick:t=>l.removeProfession(i,e)},null,8,["onClick"])])])))),128))])])),_:1})])),(0,o.Wm)(m,{block:"",color:"primary",size:"lg",onClick:l.addProfessionPressed},{default:(0,o.w5)((()=>[(0,o.Uk)("Lisää ammatti")])),_:1},8,["onClick"]),n.isAddProfession?(0,o.wy)(((0,o.wg)(),(0,o.iD)("select",{key:2,style:{width:"100%",padding:"10px","margin-top":"20px"},id:"new_profession","onUpdate:modelValue":i[2]||(i[2]=e=>n.selectedNewProfession=e),onClick:i[3]||(i[3]=(...e)=>l.addNewProfession&&l.addNewProfession(...e))},[le,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.proList,(e=>((0,o.wg)(),(0,o.iD)(o.HY,null,[e.group?((0,o.wg)(),(0,o.iD)("optgroup",{label:e.group,key:e.group},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.options,(e=>((0,o.wg)(),(0,o.iD)("option",{value:e.label,key:e.label},(0,s.zw)(e.label),9,de)))),128))],8,ae)):((0,o.wg)(),(0,o.iD)("option",{value:e,key:e.value},(0,s.zw)(e.label),9,ue))],64)))),256))],512)),[[Q.bM,n.selectedNewProfession]]):(0,o.kq)("",!0),n.additionalProfession.length>2?((0,o.wg)(),(0,o.j4)(m,{key:3,outline:"success",block:"",size:"lg",onClick:e.handleAddAdditionalProfession},{default:(0,o.w5)((()=>[(0,o.Uk)("Kinnita uus amet")])),_:1},8,["onClick"])):(0,o.kq)("",!0),(0,o.Wm)(m,{outline:"danger",block:"",size:"lg",style:{"margin-top":"20px"},onClick:l.cancelEditProfession},{default:(0,o.w5)((()=>[(0,o.Uk)("Poistu")])),_:1},8,["onClick"])])),_:1})}var ce=t(3998),pe={name:"editProfession",props:{provider:Object},components:{MDBContainer:O.L5,MDBBtn:O.$v,MDBTable:O.re,MDBIcon:O.vm,MDBBtnClose:O.Ok},setup(){const e=(0,N.iH)(""),i=(0,N.iH)(""),t=(0,N.iH)(""),o=(0,N.iH)(!1),s=(0,N.iH)(""),n=(0,N.iH)(ce.Z);return{profession:e,selected:i,selectedNewProfession:t,isAddProfession:o,additionalProfession:s,proList:n}},methods:{addProfessionPressed(){this.selectedNewProfession="",this.isAddProfession=!0},addNewProfession(){this.selectedNewProfession="";const e=document.getElementById("new_profession");e.addEventListener("change",(e=>{this.isAddProfession=!1,this.$emit("additionalProfession",e.target.value)})),this.selectedNewProfession=""},editProfession(e){this.isAddProfession=!1;const i=document.getElementById("edit_profession");i.addEventListener("change",(i=>{this.$emit("editProfession",e,i.target.value)})),this.selected=""},removeProfession(e,i){this.isAddProfession=!1,this.$emit("removeProfession",e,i),this.selected=""},cancelEditProfession(){this.$emit("cancel:editProfession")}}};const ge=(0,q.Z)(pe,[["render",me]]);var he=ge,fe=t(5118),ke=t(8033),ve=t(6876),we=t(4058),ye=t(5174);const De=t(7218),Te="/api/offers",_e=async()=>{const e=await De.get(Te);return e.data},be=async e=>{const i=await De.post(`${Te}`,e);return i.data},Pe=async(e,i)=>{const t=await De.post(`${Te}/${e}`,i);return t.data},Ce=async(e,i)=>{const t=await De.delete(`${Te}/${e}/timeoffer/${i}`);return t.data},Me=async(e,i)=>{const t=await De.put(`${Te}/${e}`,i);return t.data};var xe={getOffers:_e,addFirstOffer:be,addAdditionalOffer:Pe,removeTimeOffer:Ce,updateOffer:Me};const Ee={style:{border:"1px solid #999",padding:"10px"}},ze={style:{"margin-bottom":"10px"}};function Be(e,i,t,n,r,l){return(0,o.wg)(),(0,o.iD)("div",Ee,[(0,o._)("h4",{style:{"text-align":"right",cursor:"pointer",color:"green"},onClick:i[0]||(i[0]=i=>e.$emit("closeFeedbackList"))},"Valmis"),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.feedback,(e=>((0,o.wg)(),(0,o.iD)("div",{style:{"text-align":"left"},key:e.id},[(0,o._)("h2",ze,(0,s.zw)(e.pos),1)])))),128)),(0,o._)("h3",null,(0,s.zw)(t.feedback.length>0?t.feedback.pos:"Ei arvostelua vielä!"),1)])}var He={name:"FeedbackList",props:{feedback:Array}};const Fe=(0,q.Z)(He,[["render",Be]]);var We=Fe,Ie=t(9482),Ae={name:"Provider-panel",props:{userIsProvider:Object,bookings:Array,bookingsConfirmed:Array},components:{Gallery:Ie["default"],FeedbackList:We,info:ve.Z,errorNotification:fe.Z,successNotification:ke.Z,editPrice:J,editProfession:he,MDBContainer:O.L5,MDBIcon:O.vm,MDBRow:O.uZ,MDBCol:O.TK,MDBTable:O.re,MDBBtn:O.$v,MDBBtnClose:O.Ok,MDBBadge:O.m_,MDBInput:O.u2,VueDatePicker:V.Z},data(){return{confirmedBookings:[],testi:{},un:"",ri:"",rooms:[],close:!0,isGallery:!1,proImages:[]}},setup(){const e=(0,N.iH)(!1),i=(0,N.iH)(null),t=(0,N.iH)(""),o=(0,N.iH)(null),s=(0,N.iH)(null),n=(0,N.iH)(!1),r=(0,N.iH)(!1),l=(0,N.iH)(!1),a=(0,N.iH)(!1),d=(0,N.iH)(!1),u=(0,N.iH)(!1),m=(0,N.iH)(null),c=(0,N.iH)(null),p=(0,N.iH)(null),g=(0,N.iH)([]),h=(0,N.iH)([]),f=(0,N.iH)(!1),k=(0,N.iH)([]),v=(0,N.iH)({}),w=(0,N.iH)(!1),y=(0,N.iH)([]),D=(0,N.iH)({}),T=(0,N.iH)(""),_=(0,N.iH)({}),b=(0,N.iH)(null),P=(0,N.iH)([]),C=(0,N.iH)(null),M=(0,N.iH)(null),x=(0,N.iH)(null),E=(0,N.iH)(null),z=(0,N.iH)(null),B=(0,N.iH)({}),H=(0,N.iH)(!1),F=(0,N.iH)([]),W=(0,N.iH)(null),I=(0,N.iH)([(0,ye.Z)(new Date,1),(0,ye.Z)(new Date,2),(0,ye.Z)(new Date,7)]);return{isProviderCalendar:e,testii:i,weekDay:t,timerange:o,datee:s,range:n,isRangeSelected:r,isEditRange:l,isEditPrice:a,isFeedback:d,isEditProfession:u,clearTime:m,dateTest:c,date:p,markers:g,contents:h,isContents:f,markedDays:k,time:v,isConfirmTime:w,times:y,datetime:D,userId:T,provider:_,creditLeft:b,providerTimes:P,errorMessage:C,timeEditSuccessMessage:x,timeEditErrorMessage:E,oblicationInfoMessage:z,successMessage:M,editTime:B,isTimeToEdit:H,editArr:F,timeToEdit:W,highlightedDates:I}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const i=JSON.parse(e);this.userId=i.id,console.log("User token in provider: "+i.token),this.providerData()}else this.$router.push("/")},methods:{goToMap(){this.$router.push("/provider-public")},getDate(){const e=(new Date).getTime(),i=(new Date).getTime()+6048e5,t=864e5;console.log("and now "+e),console.log("week_ms added  is: "+i);const o=(i-e)/t;console.log("Days between - "+o)},saveNewRange(){this.isEditRange=!1,this.provider.range=this.range},getIt(){let e="aaa",i="room";we.Z.auth={username:e,room:i},we.Z.connect();let t="Oopersama";we.Z.emit("updateRoom",t)},xxx(e){console.log("Test nimi "+e)},joinAllRooms(){const e=["111","222"];we.Z.emit("joinAllClientRooms",e)},handleRemoveProConfirmed(e){console.log("Info closed here?? "+e.header),this.$emit("removeProBookingConfirmed",e),this.confirmedBookings=this.confirmedBookings.filter((i=>i.id!==e.id)),this.successMessage="Siit saab kustutada selle teavituse soovi korral!",setTimeout((()=>{this.successMessage=null}),3e3)},socketResetTest(){we.Z.disconnect(),we.Z.connect()},openChatPanel(e){e.preventDefault(),console.log("Will chat open...");const i=localStorage.getItem("sessionID");i&&(this.usernameAlreadySelected=!0,we.Z.auth={sessionID:i},we.Z.connect()),we.Z.on("session",(({sessionID:e,userID:i,roomName:t})=>{we.Z.auth={sessionID:e},localStorage.setItem("sessionID",e),we.Z.userID=i,we.Z.roomName=t}))},handleInternal(e){if(this.editArr=[],this.editTime={},this.isTimeToEdit=!1,e){let i=e.toString().substring(8,10),t=parseInt(i);this.weekDay=e.toString().substring(0,3);let o={};this.markers.forEach((e=>{e.date.getDate()===t&&(this.isTimeToEdit=!0,o={day:t,weekDay:this.weekDay,time:e.content})})),this.editArr.push(o)}},editPrice(){this.isEditPrice=!0},async saveEditedPrice(e){const i={priceByHour:e},t=await K.Z.updateProvider(this.provider.id,i);t&&(this.provider.priceByHour=e,console.log("Price: "+this.provider.priceByHour),this.isEditPrice=!1,this.successMessage="Tuntihinta on muokattu!",setTimeout((()=>{this.successMessage=null}),2e3))},cancelEditPrice(e){this.isEditPrice=e},getFeedbackListData(){this.isFeedback=!0},handleCloseFeedbackList(){this.isFeedback=!1},editProfessionPro(){this.isEditProfession=!0},handleEditProfession(e,i){console.log("Profession is "+i+" and index "+e),this.provider.profession[0]=i,K.Z.editProfession(this.provider.id,{index:e,pro:i})},handleAddProfession(e){console.log("Uus amet on "+e),K.Z.additionalProfession(this.provider.id,{profession:e}),this.provider.profession.includes(e)||this.provider.profession.push(e)},handleRemoveProfession(e,i){console.log("Profession index is "+e+" and profession is "+i),K.Z.removeProfession(this.provider.id,{profession:i}),this.provider.profession.splice(e,1)},handleCancelEditProfession(){this.isEditProfession=!1},removeExpiredDateTime(){this.providerTimes.forEach((e=>{let i=e.yearFrom,t=e.monthFrom,o=e.dayFrom,s=e.hoursFrom,n=e.minutesFrom;new Date(i,t,o,s,n).getTime()<(new Date).getTime()&&this.delTimeRange(e.id)}))},async editTimeTest(){const e={hoursFrom:1};await xe.updateOffer("6431407f53469b1f48eeb2f0",e)},updateTimesAndMarkers(){this.providerTimes.forEach((e=>{console.log("Provider times: "+e.hoursFrom),this.setTimeMarkers(e)})),this.providerTimes.forEach((e=>{this.initializeTime(e)}))},async delTimeRange(e){await xe.removeTimeOffer(this.provider.id,e),this.providerTimes=this.providerTimes.filter((i=>i.id!==e)),this.times=[],this.markers=[],this.updateTimesAndMarkers(),this.editArr.length>1?(this.updateTimesAndMarkers(),this.editArr[0].time=this.editArr[0].time.filter((i=>i.timeId!==e))):(this.editArr=[],this.updateTimesAndMarkers())},onTimePickerOpen(){console.log("Timepicker opened")},alertFn(e){console.log("Opened "+e)},onClose(){console.log("On close...")},async handleDate(){console.log("Date handled!");const e={yearFrom:this.date[0].getFullYear(),monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),yearTo:this.date[1].getFullYear(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},i=await xe.addAdditionalOffer(this.provider.id,e);console.log("Provider times "+this.providerTimes),this.providerTimes=this.providerTimes.concat(i),this.times=[],this.markers=[],this.editArr=[],this.providerTimes.forEach((e=>{this.initializeTime(e)})),this.providerTimes.forEach((e=>{this.setTimeMarkers(e)}));let t={};this.markers.forEach((e=>{e.date.getDate()===i.dayFrom&&(this.isTimeToEdit=!0,t={day:i.dayFrom,weekDay:this.weekDay,time:e.content})})),this.editArr.push(t)},async confirmEditedTime(e){let i;console.log("Confirmed??? "+e+" hours edited: "+this.t);const t=this.timeToEdit;if(t){i={hoursFrom:t[0].hours,minutesFrom:t[0].minutes,hoursTo:t[1].hours,minutesTo:t[1].minutes};const o=await xe.updateOffer(e,i);console.log("Offer edited: "+o),this.timeEditSuccessMessage="Aika muokattu onnistuneesti!",this.providerTimes=this.providerTimes.map((i=>i.id!==e?i:o)),this.testii=o,setTimeout((()=>{this.timeEditSuccessMessage=null}),2e3),this.isTimeToEdit=!1}else this.timeEditErrorMessage="Ensin on vaihdettava kellonaika!",setTimeout((()=>{this.timeEditErrorMessage=null}),2e3);this.timeToEdit=null},handleTime(e){this.timeToEdit=e},setMarkedDay(e){const i=e-(new Date).getDate();this.markedDays.push(e),console.log("Day to set_ "+i)},cancelTime(){console.log("Time cancelled!")},async addAvailableDate(){const e={yearFrom:this.date[0].getFullYear(),monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),yearTo:this.date[1].getFullYear(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},i=await xe.addAdditionalOffer(this.provider.id,e);console.log("Saved? "+i)},setTimeMarkers(e){let i=null;this.contents=[],i=e.monthFrom===(new Date).getMonth()?(0,ye.Z)(new Date,e.dayFrom-(new Date).getDate()):(0,ye.Z)(new Date(e.yearFrom,e.monthFrom,0),e.dayFrom),console.log("Test markers: "+new Date(e.yearFrom,e.monthFrom,e.dayFrom)),this.times.forEach(((t,o)=>{if(t[0].day===e.dayFrom){let s=t[0].hours+" : "+t[0].minutes+" - "+t[1].hours+" : "+t[1].minutes;this.contents.push({text:s,index:o,timeId:this.providerTimes[o].id,color:"red"}),this.markers=this.markers.concat({dFrom:e.dayFrom,date:i,type:"line",color:"orange",content:this.contents})}}))},async providerData(){const e=await K.Z.getProvider(this.userId);e&&(this.provider=e,this.creditLeft=((e.proTime-(new Date).getTime())/864e5).toFixed()<0?0:((e.proTime-(new Date).getTime())/864e5).toFixed(),e.reference.forEach(((e,i)=>{this.proImages=[...this.proImages,{id:i,size:"1400-933",src:t(7736)(`./${e.name}`),thumb:t(7736)(`./${e.name}`),subHtml:'<div class="lightGallery-captions">\n\n\n            </div>"'}]})),this.providerTimes=e.timeoffer,e.isAvailable24_7||(this.isProviderCalendar=!0),console.log("Provider rooms are: "+e.room.map((e=>e))),this.rooms=e.room),this.confirmedBookings=e.booking.filter((e=>"confirmed"===e.status)),this.times=[],this.providerTimes&&(this.providerTimes.forEach((e=>{this.initializeTime(e)})),this.removeExpiredDateTime(),this.providerTimes.forEach((e=>{this.setTimeMarkers(e)})))},initializeTime(e){let i=[];i.push({day:e.dayFrom,hours:e.hoursFrom,minutes:e.minutesFrom},{day:e.dayTo,hours:e.hoursTo,minutes:e.minutesTo}),this.times.push(i)},test(e){console.log("What ever: "+e)}}};const Ze=(0,q.Z)(Ae,[["render",R]]);var Ue=Ze},5551:function(e,i,t){e.exports=t.p+"img/error.9510853e.png"}}]);
//# sourceMappingURL=811.da9c4f44.js.map