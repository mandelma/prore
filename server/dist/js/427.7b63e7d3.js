"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[427],{5118:function(e,i,t){var s=t(3396);const o=({message:e})=>null===e?null:(0,s.Wm)("div",{className:"error"},[e,(0,s.Wm)("img",{className:"errorImg",alt:"error",src:t(5551)},null)]);i.Z=o},1353:function(e,i,t){t.d(i,{Z:function(){return x}});var s=t(3396),o=t(7139);const n=e=>((0,s.dD)("data-v-701eb8ae"),e=e(),(0,s.Cn)(),e),l={key:0},r={class:"waiting-info"},a=n((()=>(0,s._)("br",null,null,-1))),d=n((()=>(0,s._)("br",null,null,-1))),u=n((()=>(0,s._)("br",null,null,-1))),m={key:0},c={key:1},p={key:1},g={class:"pro-info"},h=n((()=>(0,s._)("br",null,null,-1))),f=n((()=>(0,s._)("td",null," Sovittu ",-1))),k=n((()=>(0,s._)("td",null," Paikka ",-1))),w={key:0},v={key:1},y={colspan:"2"},_={key:0,style:{color:"deepskyblue"}},D={key:1,style:{color:"deepskyblue"}};function P(e,i,t,n,P,b){const T=(0,s.up)("monthConverter"),C=(0,s.up)("MDBBtn"),M=(0,s.up)("MDBTable");return"for-recipient"===t.status?((0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",r,[(0,s.Uk)(" ( "),(0,s._)("b",null,(0,o.zw)(t.msg.ordered[0].yritys),1),(0,s.Uk)(" ) - "+(0,o.zw)(t.msg.header),1),a,(0,s.Wm)(T,{num:t.msg.onTime[0].month},null,8,["num"]),(0,s.Uk)(" "+(0,o.zw)(t.msg.onTime[0].day)+" / "+(0,o.zw)(t.msg.onTime[0].year),1),d,(0,s.Uk)(" klo "+(0,o.zw)(t.msg.onTime[0].hours)+" : "+(0,o.zw)(t.msg.onTime[0].minutes),1),u,0===t.msg.ordered[0].range?((0,s.wg)(),(0,s.iD)("p",m,(0,o.zw)(t.msg.ordered[0].yritys)+" odottaa sinua osoitteseen: "+(0,o.zw)(t.msg.ordered[0].address),1)):((0,s.wg)(),(0,s.iD)("p",c,(0,o.zw)(t.msg.ordered[0].yritys)+" tulossa sovittuun osoitteeseen!",1)),(0,s.Wm)(C,{block:"",outline:"warning",onClick:i[0]||(i[0]=e=>b.removeComplitedBookingPanel(t.msg))},{default:(0,s.w5)((()=>[(0,s.Uk)(" (Kustub muidu kui aeg läbi saab) - Saab eemaldada kohe (ajutine lahendus) ")])),_:1})])])):((0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("div",g,[(0,s.Wm)(T,{num:t.msg.onTime[0].month},null,8,["num"]),(0,s.Uk)(" "+(0,o.zw)(t.msg.onTime[0].day)+" / "+(0,o.zw)(t.msg.onTime[0].year),1),h,(0,s.Uk)(" klo "+(0,o.zw)(t.msg.onTime[0].hours)+" : "+(0,o.zw)(t.msg.onTime[0].minutes)+" ",1),"for-provider"===t.status?((0,s.wg)(),(0,s.j4)(M,{key:0,style:{"font-size":"18px",color:"#ddd","text-align":"left",padding:"10px",width:"100%"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[(0,s._)("tr",null,[f,(0,s._)("td",null,(0,o.zw)(t.msg.header),1)]),(0,s._)("tr",null,[k,0===t.msg.ordered[0].range?((0,s.wg)(),(0,s.iD)("td",w,(0,o.zw)(t.msg.ordered[0].address),1)):((0,s.wg)(),(0,s.iD)("td",v,(0,o.zw)(t.msg.address),1))]),(0,s._)("tr",null,[(0,s._)("td",y,[0===t.msg.ordered[0].range?((0,s.wg)(),(0,s.iD)("p",_," Asiakas tulossa! ")):((0,s.wg)(),(0,s.iD)("p",D," Meno asiakkaan luonna! "))])])])])),_:1})):(0,s.kq)("",!0)])]))}var b=t(4313),T=t(5253),C={name:"Info",props:{status:String,msg:Object},components:{MDBBtn:b.$v,MDBTable:b.re,monthConverter:T.Z},methods:{removeCompletedBookingPro(e){this.$emit("remove:proConfirmed",e)},removeComplitedBookingPanel(e){this.$emit("remove:complitedBookingPanel",e)}}},M=t(89);const E=(0,M.Z)(C,[["render",P],["__scopeId","data-v-701eb8ae"]]);var x=E},6427:function(e,i,t){t.r(i),t.d(i,{default:function(){return Ie}});t(7658);var s=t(3396),o=t(7139);const n={key:0},l={key:0,class:"spinner-border",role:"status"},r=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),a=[r],d={style:{position:"relative","text-align":"center"}},u={id:"info-block"},m={class:"file-marker"},c=(0,s._)("div",{class:"box-title"}," Vahvistetut tilaukset! ",-1),p={class:"box-contents"},g={class:"flex flex-wrap align-items-center justify-content-center"},h={class:"scalein animation-duration-3000 animation-iteration flex align-items-center justify-content-center font-bold w-full"},f={key:0},k={style:{"font-size":"16px"}},w=(0,s._)("i",{class:"fas fa-edit",size:"lg",style:{cursor:"pointer"}},null,-1),v=["onClick"],y=(0,s._)("tr",null,[(0,s._)("td")],-1),_={key:0,class:"spinner-border",role:"status"},D=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),P=[D],b={key:1},T={key:0},C={key:1},M={style:{border:"solid green","margin-bottom":"10px",padding:"7px"}},E={style:{display:"flex","justify-content":"right",padding:"10px"}},x=(0,s._)("br",null,null,-1),z=(0,s._)("td",null," Palaute ",-1),B={style:{width:"33px"}},H={style:{width:"33px"}},W={key:0},F=(0,s._)("td",null," Tarjoan palvelua 24/7 ",-1),A={key:1},I=(0,s._)("td",null," Päätän, koska tarjoan palvelua ",-1),Z=(0,s._)("td",null," Katso kartalta ",-1);function U(e,i,t,r,D,U){const V=(0,s.up)("MDBCol"),$=(0,s.up)("MDBRow"),L=(0,s.up)("info"),R=(0,s.up)("MDBContainer"),j=(0,s.up)("errorNotification"),N=(0,s.up)("successNotification"),S=(0,s.up)("MDBIcon"),O=(0,s.up)("VueDatePicker"),K=(0,s.up)("MDBBtnClose"),Y=(0,s.up)("MDBTable"),q=(0,s.up)("MDBBtn"),G=(0,s.up)("editPrice"),J=(0,s.up)("edit-profession"),Q=(0,s.up)("feedback-list"),X=(0,s.up)("MDBInput"),ee=(0,s.up)("MDBBadge");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(V),(0,s.Wm)(V,{col:"7",style:{position:"relative"}})])),_:1}),r.provider?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",n,[r.provider.profession?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",l,a))])),(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(V,{class:"proPanelHeader",md:"4"},{default:(0,s.w5)((()=>[(0,s._)("div",d,[(0,s._)("h2",null,(0,o.zw)(r.provider.yritys),1),(0,s._)("h2",null,(0,o.zw)(r.provider.address),1)])])),_:1}),D.confirmedBookings.length>0?((0,s.wg)(),(0,s.j4)(V,{key:0,md:"8"},{default:(0,s.w5)((()=>[(0,s.Wm)(R,null,{default:(0,s.w5)((()=>[(0,s._)("aside",u,[(0,s._)("section",m,[(0,s._)("div",null,[c,(0,s._)("div",p,[(0,s._)("div",g,[(0,s._)("div",h,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(D.confirmedBookings,(e=>((0,s.wg)(),(0,s.j4)(L,{key:e.id,style:{width:"100%"},status:"for-provider",msg:e,"onRemove:proConfirmed":U.handleRemoveProConfirmed},null,8,["msg","onRemove:proConfirmed"])))),128))])])])])])])])),_:1})])),_:1})):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(R,null,{default:(0,s.w5)((()=>[(0,s.Wm)($,null,{default:(0,s.w5)((()=>[r.isProviderCalendar?((0,s.wg)(),(0,s.j4)(V,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(R,null,{default:(0,s.w5)((()=>[(0,s.Wm)(j,{message:r.timeEditErrorMessage},null,8,["message"]),(0,s.Wm)(N,{message:r.timeEditSuccessMessage},null,8,["message"]),r.isTimeToEdit?((0,s.wg)(),(0,s.iD)("div",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.editArr,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,style:{border:"solid orange","padding-bottom":"20px","padding-top":"20px","margin-bottom":"10px"}},[(0,s._)("div",k,(0,o.zw)(e.weekDay)+" - "+(0,o.zw)(e.day),1),(0,s.Wm)(Y,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.time,((e,i)=>((0,s.wg)(),(0,s.iD)("tr",{key:i},[(0,s._)("td",null,(0,o.zw)(r.times[e.index][0].hours>=10?r.times[e.index][0].hours:"0"+r.times[e.index][0].hours)+" : "+(0,o.zw)(r.times[e.index][0].minutes>=10?r.times[e.index][0].minutes:"0"+r.times[e.index][0].minutes)+" - "+(0,o.zw)(r.times[e.index][1].hours>=10?r.times[e.index][1].hours:"0"+r.times[e.index][1].hours)+" : "+(0,o.zw)(r.times[e.index][1].minutes>=10?r.times[e.index][1].minutes:"0"+r.times[e.index][1].minutes),1),(0,s._)("td",null,[(0,s.Wm)(O,{modelValue:r.times[e.index],"onUpdate:modelValue":[i=>r.times[e.index]=i,U.handleTime],"time-picker":"",range:""},{trigger:(0,s.w5)((()=>[(0,s.Wm)(S,{class:"clickable-text"},{default:(0,s.w5)((()=>[w])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"])]),(0,s._)("td",null,[(0,s.Wm)(S,null,{default:(0,s.w5)((()=>[(0,s._)("i",{class:"far fa-save",size:"lg",onClick:i=>U.confirmEditedTime(e.timeId),style:{cursor:"pointer"}},null,8,v)])),_:2},1024)]),(0,s._)("td",null,[(0,s.Wm)(K,{onClick:i=>U.delTimeRange(e.timeId)},null,8,["onClick"])])])))),128)),y])])),_:2},1024),(0,s.Wm)(q,{outline:"warning",size:"lg",onClick:i[0]||(i[0]=e=>r.isTimeToEdit=!1),style:{cursor:"pointer"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Poistu")])),_:1})])))),128))])):(0,s.kq)("",!0),(0,s._)("div",null,[(0,s.Wm)(O,{dark:"",class:(0,o.C_)({datepicker_opacity:e.isMapSearchActive}),style:{"margin-bottom":"50px","justify-content":"center"},onInternalModelChange:U.handleInternal,range:"","auto-range":"0",modelValue:r.date,"onUpdate:modelValue":[i[1]||(i[1]=e=>r.date=e),U.handleDate],inline:"",locale:"fi",selectText:"Valitse","min-date":new Date,markers:r.markers,"teleport-center":"","month-change-on-scroll":!1},null,8,["class","onInternalModelChange","modelValue","onUpdate:modelValue","min-date","markers"])])])),_:1})])),_:1})):(0,s.kq)("",!0),r.isEditPrice?((0,s.wg)(),(0,s.j4)(V,{key:1},{default:(0,s.w5)((()=>[(0,s.Wm)(G,{"onCancel:editPrice":U.cancelEditPrice,"onSave:editedPrice":U.saveEditedPrice},null,8,["onCancel:editPrice","onSave:editedPrice"])])),_:1})):r.isEditProfession?((0,s.wg)(),(0,s.j4)(V,{key:2},{default:(0,s.w5)((()=>[(0,s.Wm)(J,{provider:r.provider,onAdditionalProfession:U.handleAddProfession,onEditProfession:U.handleEditProfession,onRemoveProfession:U.handleRemoveProfession,"onCancel:editProfession":U.handleCancelEditProfession},null,8,["provider","onAdditionalProfession","onEditProfession","onRemoveProfession","onCancel:editProfession"])])),_:1})):r.isFeedback?((0,s.wg)(),(0,s.j4)(V,{key:3},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{feedback:r.provider.feedback,onCloseFeedbackList:U.handleCloseFeedbackList},null,8,["feedback","onCloseFeedbackList"])])),_:1})):((0,s.wg)(),(0,s.j4)(V,{key:4},{default:(0,s.w5)((()=>[r.provider.profession?((0,s.wg)(),(0,s.iD)("div",b,[(0,s.Wm)(j,{message:r.errorMessage},null,8,["message"]),(0,s.Wm)(N,{message:r.successMessage},null,8,["message"]),(0,s.Wm)(Y,{borderless:"",style:{position:"relative",color:"#ddd","font-size":"18px","text-align":"left"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[(0,s._)("tr",null,[(0,s._)("td",null,(0,o.zw)(0===r.provider.range?"Tarjoan palvelua paikalla":"Palvelun säde: "+r.provider.range+" km"),1),r.isEditRange?((0,s.wg)(),(0,s.iD)("td",C,[(0,s._)("div",M,[(0,s._)("div",E,[(0,s.Wm)(K,{white:"",onClick:i[3]||(i[3]=e=>r.isEditRange=!1)})]),(0,s._)("div",null,[(0,s.Wm)(X,{white:"",label:"Säde - km",modelValue:r.range,"onUpdate:modelValue":i[4]||(i[4]=e=>r.range=e),size:"lg",type:"number"},null,8,["modelValue"]),x]),r.range.length>0?((0,s.wg)(),(0,s.j4)(q,{key:0,outline:"info",block:"",size:"lg",onClick:U.saveNewRange},{default:(0,s.w5)((()=>[(0,s.Uk)("Tallenna uusi säde")])),_:1},8,["onClick"])):(0,s.kq)("",!0)])])):((0,s.wg)(),(0,s.iD)("td",T,[(0,s.Wm)(q,{outline:"info",block:"",size:"lg",onClick:i[2]||(i[2]=e=>r.isEditRange=!0)},{default:(0,s.w5)((()=>[(0,s.Uk)("Muokkaa toimintaalueetta")])),_:1})]))]),(0,s._)("tr",null,[z,(0,s._)("td",null,[(0,s.Wm)($,{class:"rating"},{default:(0,s.w5)((()=>[(0,s.Wm)(V,null,{default:(0,s.w5)((()=>[(0,s.Wm)(S,{style:{padding:"10px",color:"limegreen"},i:"",class:"far fa-thumbs-up",size:"2x"}),(0,s.Wm)(ee,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,s.w5)((()=>[(0,s._)("h2",B,(0,o.zw)(r.provider.rating.positive),1)])),_:1})])),_:1}),(0,s.Wm)(V,null,{default:(0,s.w5)((()=>[(0,s.Wm)(S,{style:{padding:"10px",color:"palevioletred"},i:"",class:"far fa-thumbs-down",size:"2x"}),(0,s.Wm)(ee,{color:"danger",class:"translate-middle p-1",pill:"",notification:""},{default:(0,s.w5)((()=>[(0,s._)("h2",H,(0,o.zw)(r.provider.rating.negative),1)])),_:1})])),_:1}),(0,s.Wm)(V,null,{default:(0,s.w5)((()=>[(0,s.Wm)(q,{block:"",color:"secondary",onClick:U.getFeedbackListData},{default:(0,s.w5)((()=>[(0,s.Uk)("Katso oma arvostelua")])),_:1},8,["onClick"])])),_:1})])),_:1})])]),r.isProviderCalendar?((0,s.wg)(),(0,s.iD)("tr",A,[I,(0,s._)("td",null,[(0,s.Wm)(q,{outline:"info",block:"",size:"lg",onClick:i[6]||(i[6]=e=>r.isProviderCalendar=!1)},{default:(0,s.w5)((()=>[(0,s.Uk)("Vaihda 24/7")])),_:1})])])):((0,s.wg)(),(0,s.iD)("tr",W,[F,(0,s._)("td",null,[(0,s.Wm)(q,{outline:"info",size:"lg",onClick:i[5]||(i[5]=e=>r.isProviderCalendar=!0)},{default:(0,s.w5)((()=>[(0,s.Uk)("Vaihda kalenteriin")])),_:1})])])),(0,s._)("tr",null,[(0,s._)("td",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.provider.profession,((e,i)=>((0,s.wg)(),(0,s.iD)("div",{key:i},(0,o.zw)(e),1)))),128))]),(0,s._)("td",null,[(0,s.Wm)(q,{outline:"info",block:"",size:"lg",onClick:U.editProfessionPro},{default:(0,s.w5)((()=>[(0,s.Uk)("Muokkaa osaamista")])),_:1},8,["onClick"])])]),(0,s._)("tr",null,[(0,s._)("td",null,(0,o.zw)(r.provider.priceByHour)+" Euroa ",1),(0,s._)("td",null,[(0,s.Wm)(q,{outline:"info",block:"",size:"lg",onClick:U.editPrice},{default:(0,s.w5)((()=>[(0,s.Uk)("Muokkaa tuntihinta")])),_:1},8,["onClick"])])]),(0,s._)("tr",null,[Z,(0,s._)("td",null,[(0,s.Wm)(q,{outline:"info",block:"",size:"lg",onClick:i[7]||(i[7]=e=>this.$router.push("/pro-public-search"))},{default:(0,s.w5)((()=>[(0,s.Uk)("Kartalta")])),_:1})])])])])),_:1})])):((0,s.wg)(),(0,s.iD)("div",_,P))])),_:1}))])),_:1})])),_:1})])}var V=t(4912),$=t(9398);function L(e,i,t,o,n,l){const r=(0,s.up)("MDBInput"),a=(0,s.up)("MDBBtn"),d=(0,s.up)("MDBContainer");return(0,s.wg)(),(0,s.j4)(d,null,{default:(0,s.w5)((()=>[(0,s.Wm)(r,{label:"Uusi tuntihinta",size:"lg",white:"",modelValue:o.price,"onUpdate:modelValue":i[0]||(i[0]=e=>o.price=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,s.Wm)(a,{outline:"success",block:"",size:"lg",onClick:l.handleEditPrice},{default:(0,s.w5)((()=>[(0,s.Uk)("Kinnita")])),_:1},8,["onClick"]),(0,s.Wm)(a,{outline:"danger",block:"",size:"lg",onClick:l.cancelEdit},{default:(0,s.w5)((()=>[(0,s.Uk)("Poistu")])),_:1},8,["onClick"])])),_:1})}var R=t(4313),j=t(4870),N={name:"edit-price",setup(){const e=(0,j.iH)(null);return{price:e}},components:{MDBContainer:R.L5,MDBBtn:R.$v,MDBInput:R.u2},data(){return{errorMessage:null}},methods:{handleEditPrice(){this.$emit("save:editedPrice",this.price)},cancelEdit(){this.$emit("cancel:editPrice",!1),this.errorMessage="Here is some error!"}}},S=t(89);const O=(0,S.Z)(N,[["render",L]]);var K=O,Y=t(9242);const q=(0,s._)("i",{class:"fas fa-undo"},null,-1),G={key:0},J={style:{"margin-bottom":"20px"}},Q={value:"slotProps"},X={key:0},ee={key:1},ie={style:{},class:"flex align-items-center"},te={key:1},se={key:2,style:{"margin-bottom":"20px"}},oe={value:"slotProps"},ne={key:0},le={key:1},re={style:{},class:"flex align-items-center"};function ae(e,i,t,n,l,r){const a=(0,s.up)("MDBIcon"),d=(0,s.up)("Dropdown"),u=(0,s.up)("MDBTable"),m=(0,s.up)("MDBBtnClose"),c=(0,s.up)("MDBBtn"),p=(0,s.up)("MDBContainer");return(0,s.wg)(),(0,s.j4)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(a,{style:{float:"right",cursor:"pointer"},onClick:r.cancelEditProfession,size:"3x"},{default:(0,s.w5)((()=>[q])),_:1},8,["onClick"]),t.provider&&1===t.provider.profession.length?((0,s.wg)(),(0,s.iD)("div",G,[(0,s.Wm)(u,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.provider.profession,((t,l)=>((0,s.wg)(),(0,s.iD)("tr",{key:l},[(0,s._)("td",null,(0,o.zw)(t)+" ",1),(0,s._)("td",null,[(0,s._)("form",{onSubmit:i[1]||(i[1]=(0,Y.iM)(((...i)=>e.submit&&e.submit(...i)),["prevent"]))},[(0,s._)("div",J,[(0,s.Wm)(d,{onChange:e=>r.changeCurrentProfession(l),modelValue:n.selected,"onUpdate:modelValue":i[0]||(i[0]=e=>n.selected=e),options:n.proList,filter:"",optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",placeholder:"Valitse ammattilainen",class:"w-full md:w-100rem"},{optiongroup:(0,s.w5)((e=>[(0,s._)("div",ie,[(0,s._)("div",null,(0,o.zw)(e.option.label),1)])])),default:(0,s.w5)((()=>[(0,s._)("template",Q,[e.slotProps.value?((0,s.wg)(),(0,s.iD)("div",X,[(0,s._)("div",null,(0,o.zw)(e.slotProps.value.label),1)])):((0,s.wg)(),(0,s.iD)("span",ee,(0,o.zw)(e.slotProps.placeholder),1))])])),_:2},1032,["onChange","modelValue","options"])])],32)])])))),128))])])),_:1})])):((0,s.wg)(),(0,s.iD)("div",te,[(0,s.Wm)(u,{borderless:"",style:{"font-size":"18px","text-align":"left"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.provider.profession,((e,i)=>((0,s.wg)(),(0,s.iD)("tr",{key:i},[(0,s._)("td",null,(0,o.zw)(e),1),(0,s._)("td",null,[(0,s.Wm)(m,{white:"",onClick:t=>r.removeProfession(i,e)},null,8,["onClick"])])])))),128))])])),_:1})])),(0,s.Wm)(c,{block:"",color:"primary",size:"lg",onClick:r.addProfessionPressed},{default:(0,s.w5)((()=>[(0,s.Uk)("Lisää ammatti")])),_:1},8,["onClick"]),n.isAddProfession?((0,s.wg)(),(0,s.iD)("div",se,[(0,s.Wm)(d,{onChange:r.changeNewProfession,modelValue:n.selectedNewProfession,"onUpdate:modelValue":i[2]||(i[2]=e=>n.selectedNewProfession=e),options:n.proList,filter:"",optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",placeholder:"Valitse ammattilainen",class:"w-full md:w-100rem"},{optiongroup:(0,s.w5)((e=>[(0,s._)("div",re,[(0,s._)("div",null,(0,o.zw)(e.option.label),1)])])),default:(0,s.w5)((()=>[(0,s._)("template",oe,[e.slotProps.value?((0,s.wg)(),(0,s.iD)("div",ne,[(0,s._)("div",null,(0,o.zw)(e.slotProps.value.label),1)])):((0,s.wg)(),(0,s.iD)("span",le,(0,o.zw)(e.slotProps.placeholder),1))])])),_:1},8,["onChange","modelValue","options"])])):(0,s.kq)("",!0),n.additionalProfession.length>2?((0,s.wg)(),(0,s.j4)(c,{key:3,outline:"success",block:"",size:"lg",onClick:e.handleAddAdditionalProfession},{default:(0,s.w5)((()=>[(0,s.Uk)("Kinnita uus amet")])),_:1},8,["onClick"])):(0,s.kq)("",!0),(0,s.Wm)(c,{outline:"danger",block:"",size:"lg",style:{"margin-top":"20px"},onClick:r.cancelEditProfession},{default:(0,s.w5)((()=>[(0,s.Uk)("Poistu")])),_:1},8,["onClick"])])),_:1})}var de=t(3998),ue=t(9673),me={name:"editProfession",props:{provider:Object},components:{Dropdown:ue.Z,MDBContainer:R.L5,MDBBtn:R.$v,MDBTable:R.re,MDBIcon:R.vm,MDBBtnClose:R.Ok},setup(){const e=(0,j.iH)(""),i=(0,j.iH)(null),t=(0,j.iH)(null),s=(0,j.iH)(!1),o=(0,j.iH)(""),n=(0,j.iH)(de.Z);return{profession:e,selected:i,selectedNewProfession:t,isAddProfession:s,additionalProfession:o,proList:n}},methods:{changeCurrentProfession(e){console.log("Selected xx "+e+" "+this.selected.label),this.$emit("editProfession",e,this.selected.label),this.selected=null},changeNewProfession(){console.log("New new "+this.selectedNewProfession.label),this.isAddProfession=!1,this.$emit("additionalProfession",this.selectedNewProfession.label),this.selectedNewProfession=null},addProfessionPressed(){this.selectedNewProfession="",this.isAddProfession=!0},addNewProfession(){this.selectedNewProfession="";const e=document.getElementById("new_profession");e.addEventListener("change",(e=>{this.isAddProfession=!1,this.$emit("additionalProfession",e.target.value)})),this.selectedNewProfession=""},editProfession(e){this.isAddProfession=!1;const i=document.getElementById("edit_profession");i.addEventListener("change",(i=>{this.$emit("editProfession",e,i.target.value)})),this.selected=""},removeProfession(e,i){this.isAddProfession=!1,this.$emit("removeProfession",e,i),this.selected=null},cancelEditProfession(){this.$emit("cancel:editProfession")}}};const ce=(0,S.Z)(me,[["render",ae]]);var pe=ce,ge=t(5118),he=t(8033),fe=t(1353),ke=t(4058),we=t(5174);const ve=t(7218),ye="/api/offers",_e=async()=>{const e=await ve.get(ye);return e.data},De=async e=>{const i=await ve.post(`${ye}`,e);return i.data},Pe=async(e,i)=>{const t=await ve.post(`${ye}/${e}`,i);return t.data},be=async(e,i)=>{const t=await ve.delete(`${ye}/${e}/timeoffer/${i}`);return t.data},Te=async(e,i)=>{const t=await ve.put(`${ye}/${e}`,i);return t.data};var Ce={getOffers:_e,addFirstOffer:De,addAdditionalOffer:Pe,removeTimeOffer:be,updateOffer:Te};const Me={style:{border:"1px solid #999",padding:"10px"}},Ee={style:{"margin-bottom":"10px"}};function xe(e,i,t,n,l,r){return(0,s.wg)(),(0,s.iD)("div",Me,[(0,s._)("h4",{style:{"text-align":"right",cursor:"pointer",color:"green"},onClick:i[0]||(i[0]=i=>e.$emit("closeFeedbackList"))},"Valmis"),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.feedback,(e=>((0,s.wg)(),(0,s.iD)("div",{style:{"text-align":"left"},key:e.id},[(0,s._)("h2",Ee,(0,o.zw)(e.pos),1)])))),128)),(0,s._)("h3",null,(0,o.zw)(t.feedback.length>0?t.feedback.pos:"Ei arvostelua vielä!"),1)])}var ze={name:"FeedbackList",props:{feedback:Array}};const Be=(0,S.Z)(ze,[["render",xe]]);var He=Be,We=t(9482),Fe={name:"Provider-panel",props:{userIsProvider:Object,bookings:Array,bookingsConfirmed:Array},components:{Gallery:We["default"],FeedbackList:He,info:fe.Z,errorNotification:ge.Z,successNotification:he.Z,editPrice:K,editProfession:pe,MDBContainer:R.L5,MDBIcon:R.vm,MDBRow:R.uZ,MDBCol:R.TK,MDBTable:R.re,MDBBtn:R.$v,MDBBtnClose:R.Ok,MDBBadge:R.m_,MDBInput:R.u2,VueDatePicker:V.Z},data(){return{confirmedBookings:[],testi:{},un:"",ri:"",rooms:[],close:!0,isGallery:!1,proImages:[]}},setup(){const e=(0,j.iH)(!1),i=(0,j.iH)(null),t=(0,j.iH)(""),s=(0,j.iH)(null),o=(0,j.iH)(null),n=(0,j.iH)(!1),l=(0,j.iH)(!1),r=(0,j.iH)(!1),a=(0,j.iH)(!1),d=(0,j.iH)(!1),u=(0,j.iH)(!1),m=(0,j.iH)(null),c=(0,j.iH)(null),p=(0,j.iH)(null),g=(0,j.iH)([]),h=(0,j.iH)([]),f=(0,j.iH)(!1),k=(0,j.iH)([]),w=(0,j.iH)({}),v=(0,j.iH)(!1),y=(0,j.iH)([]),_=(0,j.iH)({}),D=(0,j.iH)(""),P=(0,j.iH)({}),b=(0,j.iH)(null),T=(0,j.iH)([]),C=(0,j.iH)(null),M=(0,j.iH)(null),E=(0,j.iH)(null),x=(0,j.iH)(null),z=(0,j.iH)(null),B=(0,j.iH)({}),H=(0,j.iH)(!1),W=(0,j.iH)([]),F=(0,j.iH)(null),A=(0,j.iH)([(0,we.Z)(new Date,1),(0,we.Z)(new Date,2),(0,we.Z)(new Date,7)]);return{isProviderCalendar:e,testii:i,weekDay:t,timerange:s,datee:o,range:n,isRangeSelected:l,isEditRange:r,isEditPrice:a,isFeedback:d,isEditProfession:u,clearTime:m,dateTest:c,date:p,markers:g,contents:h,isContents:f,markedDays:k,time:w,isConfirmTime:v,times:y,datetime:_,userId:D,provider:P,creditLeft:b,providerTimes:T,errorMessage:C,timeEditSuccessMessage:E,timeEditErrorMessage:x,oblicationInfoMessage:z,successMessage:M,editTime:B,isTimeToEdit:H,editArr:W,timeToEdit:F,highlightedDates:A}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const i=JSON.parse(e);this.userId=i.id,console.log("User token in provider: "+i.token),this.providerData()}else this.$router.push("/")},methods:{goToMap(){this.$router.push("/provider-public")},getDate(){const e=(new Date).getTime(),i=(new Date).getTime()+6048e5,t=864e5;console.log("and now "+e),console.log("week_ms added  is: "+i);const s=(i-e)/t;console.log("Days between - "+s)},saveNewRange(){this.isEditRange=!1,$.Z.editRange(this.provider.id,{range:this.range}),this.provider.range=this.range},getIt(){let e="aaa",i="room";ke.Z.auth={username:e,room:i},ke.Z.connect();let t="Oopersama";ke.Z.emit("updateRoom",t)},xxx(e){console.log("Test nimi "+e)},joinAllRooms(){const e=["111","222"];ke.Z.emit("joinAllClientRooms",e)},handleRemoveProConfirmed(e){console.log("Info closed here?? "+e.header),this.$emit("removeProBookingConfirmed",e),this.confirmedBookings=this.confirmedBookings.filter((i=>i.id!==e.id)),this.successMessage="Siit saab kustutada selle teavituse soovi korral!",setTimeout((()=>{this.successMessage=null}),3e3)},socketResetTest(){ke.Z.disconnect(),ke.Z.connect()},openChatPanel(e){e.preventDefault(),console.log("Will chat open...");const i=localStorage.getItem("sessionID");i&&(this.usernameAlreadySelected=!0,ke.Z.auth={sessionID:i},ke.Z.connect()),ke.Z.on("session",(({sessionID:e,userID:i,roomName:t})=>{ke.Z.auth={sessionID:e},localStorage.setItem("sessionID",e),ke.Z.userID=i,ke.Z.roomName=t}))},handleInternal(e){if(this.editArr=[],this.editTime={},this.isTimeToEdit=!1,e){let i=e.toString().substring(8,10),t=parseInt(i);this.weekDay=e.toString().substring(0,3);let s={};this.markers.forEach((e=>{e.date.getDate()===t&&(this.isTimeToEdit=!0,s={day:t,weekDay:this.weekDay,time:e.content})})),this.editArr.push(s)}},editPrice(){this.isEditPrice=!0},async saveEditedPrice(e){const i={priceByHour:e},t=await $.Z.updateProvider(this.provider.id,i);t&&(this.provider.priceByHour=e,console.log("Price: "+this.provider.priceByHour),this.isEditPrice=!1,this.successMessage="Tuntihinta on muokattu!",setTimeout((()=>{this.successMessage=null}),2e3))},cancelEditPrice(e){this.isEditPrice=e},getFeedbackListData(){this.isFeedback=!0},handleCloseFeedbackList(){this.isFeedback=!1},editProfessionPro(){this.isEditProfession=!0},handleEditProfession(e,i){console.log("Profession is "+i+" and index "+e),this.provider.profession[0]=i,$.Z.editProfession(this.provider.id,{index:e,pro:i})},handleAddProfession(e){console.log("Uus amet on "+e),$.Z.additionalProfession(this.provider.id,{profession:e}),this.provider.profession.includes(e)||this.provider.profession.push(e)},handleRemoveProfession(e,i){console.log("Profession index is "+e+" and profession is "+i),$.Z.removeProfession(this.provider.id,{profession:i}),this.provider.profession.splice(e,1)},handleCancelEditProfession(){this.isEditProfession=!1},removeExpiredDateTime(){this.providerTimes.forEach((e=>{let i=e.yearFrom,t=e.monthFrom,s=e.dayFrom,o=e.hoursFrom,n=e.minutesFrom;new Date(i,t,s,o,n).getTime()<(new Date).getTime()&&this.delTimeRange(e.id)}))},async editTimeTest(){const e={hoursFrom:1};await Ce.updateOffer("6431407f53469b1f48eeb2f0",e)},updateTimesAndMarkers(){this.providerTimes.forEach((e=>{console.log("Provider times: "+e.hoursFrom),this.setTimeMarkers(e)})),this.providerTimes.forEach((e=>{this.initializeTime(e)}))},async delTimeRange(e){await Ce.removeTimeOffer(this.provider.id,e),this.providerTimes=this.providerTimes.filter((i=>i.id!==e)),this.times=[],this.markers=[],this.updateTimesAndMarkers(),this.editArr.length>1?(this.updateTimesAndMarkers(),this.editArr[0].time=this.editArr[0].time.filter((i=>i.timeId!==e))):(this.editArr=[],this.updateTimesAndMarkers())},onTimePickerOpen(){console.log("Timepicker opened")},alertFn(e){console.log("Opened "+e)},onClose(){console.log("On close...")},async handleDate(){console.log("Date handled!");const e={yearFrom:this.date[0].getFullYear(),monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),yearTo:this.date[1].getFullYear(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},i=await Ce.addAdditionalOffer(this.provider.id,e);console.log("Provider times "+this.providerTimes),this.providerTimes=this.providerTimes.concat(i),this.times=[],this.markers=[],this.editArr=[],this.providerTimes.forEach((e=>{this.initializeTime(e)})),this.providerTimes.forEach((e=>{this.setTimeMarkers(e)}));let t={};this.markers.forEach((e=>{e.date.getDate()===i.dayFrom&&(this.isTimeToEdit=!0,t={day:i.dayFrom,weekDay:this.weekDay,time:e.content})})),this.editArr.push(t)},async confirmEditedTime(e){let i;console.log("Confirmed??? "+e+" hours edited: "+this.t);const t=this.timeToEdit;if(t){i={hoursFrom:t[0].hours,minutesFrom:t[0].minutes,hoursTo:t[1].hours,minutesTo:t[1].minutes};const s=await Ce.updateOffer(e,i);console.log("Offer edited: "+s),this.timeEditSuccessMessage="Aika muokattu onnistuneesti!",this.providerTimes=this.providerTimes.map((i=>i.id!==e?i:s)),this.testii=s,setTimeout((()=>{this.timeEditSuccessMessage=null}),2e3),this.isTimeToEdit=!1}else this.timeEditErrorMessage="Ensin on vaihdettava kellonaika!",setTimeout((()=>{this.timeEditErrorMessage=null}),2e3);this.timeToEdit=null},handleTime(e){this.timeToEdit=e},setMarkedDay(e){const i=e-(new Date).getDate();this.markedDays.push(e),console.log("Day to set_ "+i)},cancelTime(){console.log("Time cancelled!")},async addAvailableDate(){const e={yearFrom:this.date[0].getFullYear(),monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),yearTo:this.date[1].getFullYear(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},i=await Ce.addAdditionalOffer(this.provider.id,e);console.log("Saved? "+i)},setTimeMarkers(e){let i=null;this.contents=[],i=e.monthFrom===(new Date).getMonth()?(0,we.Z)(new Date,e.dayFrom-(new Date).getDate()):(0,we.Z)(new Date(e.yearFrom,e.monthFrom,0),e.dayFrom),console.log("Test markers: "+new Date(e.yearFrom,e.monthFrom,e.dayFrom)),this.times.forEach(((t,s)=>{if(t[0].day===e.dayFrom){let o=t[0].hours+" : "+t[0].minutes+" - "+t[1].hours+" : "+t[1].minutes;this.contents.push({text:o,index:s,timeId:this.providerTimes[s].id,color:"red"}),this.markers=this.markers.concat({dFrom:e.dayFrom,date:i,type:"line",color:"orange",content:this.contents})}}))},async providerData(){const e=await $.Z.getProvider(this.userId);e&&(this.provider=e,this.creditLeft=((e.proTime-(new Date).getTime())/864e5).toFixed()<0?0:((e.proTime-(new Date).getTime())/864e5).toFixed(),e.reference.forEach(((e,i)=>{this.proImages=[...this.proImages,{id:i,size:"1400-933",src:t(7736)(`./${e.name}`),thumb:t(7736)(`./${e.name}`),subHtml:'<div class="lightGallery-captions">\n\n\n            </div>"'}]})),this.providerTimes=e.timeoffer,e.isAvailable24_7||(this.isProviderCalendar=!0),console.log("Provider rooms are: "+e.room.map((e=>e))),this.rooms=e.room),this.confirmedBookings=e.booking.filter((e=>"confirmed"===e.status)),this.times=[],this.providerTimes&&(this.providerTimes.forEach((e=>{this.initializeTime(e)})),this.removeExpiredDateTime(),this.providerTimes.forEach((e=>{this.setTimeMarkers(e)})))},initializeTime(e){let i=[];i.push({day:e.dayFrom,hours:e.hoursFrom,minutes:e.minutesFrom},{day:e.dayTo,hours:e.hoursTo,minutes:e.minutesTo}),this.times.push(i)},test(e){console.log("What ever: "+e)}}};const Ae=(0,S.Z)(Fe,[["render",U]]);var Ie=Ae},5551:function(e,i,t){e.exports=t.p+"img/error.9510853e.png"}}]);
//# sourceMappingURL=427.7b63e7d3.js.map