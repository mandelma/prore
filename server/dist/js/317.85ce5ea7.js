"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[317],{7317:function(t,e,o){o.r(e),o.d(e,{default:function(){return B}});var i=o(3396),l=o(7139);const n=t=>((0,i.dD)("data-v-6f4b57a0"),t=t(),(0,i.Cn)(),t),r={key:0},d={key:0,style:{margin:"auto",padding:"12px",border:"1px solid deepskyblue"}},a={key:1},s=n((()=>(0,i._)("td",null," Päivämäärä ",-1))),u=n((()=>(0,i._)("td",null," Tehtävä ",-1))),p=n((()=>(0,i._)("td",null," Yritys ",-1))),g=n((()=>(0,i._)("td",null," Y-tunnus ",-1))),y=n((()=>(0,i._)("td",null," Osoite ",-1))),k=n((()=>(0,i._)("td",null," Ammati ",-1))),_=n((()=>(0,i._)("tr",null,null,-1))),c={key:1,style:{"margin-top":"13px",padding:"12px",border:"1px solid deepskyblue"}},D=n((()=>(0,i._)("h3",null,"Tarjottuja palveluita",-1)));function w(t,e,o,n,w,b){const m=(0,i.up)("MDBBtn"),v=(0,i.up)("MDBTable"),h=(0,i.up)("MDBContainer");return(0,i.wg)(),(0,i.j4)(h,{style:{"margin-top":"100px"}},{default:(0,i.w5)((()=>[o.recipientConfirmedBookings.length>0||o.proCompletedHistory.length>0?((0,i.wg)(),(0,i.iD)("div",r,[o.recipientConfirmedBookings.length>0?((0,i.wg)(),(0,i.iD)("div",d,[w.isHistoryData?((0,i.wg)(),(0,i.iD)("h4",{key:0,style:{display:"flex","justify-content":"right",color:"greenyellow",cursor:"pointer"},onClick:e[0]||(e[0]=t=>w.isHistoryData=!1)},"Valmis")):(0,i.kq)("",!0),w.isHistoryData?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("h3",a,"Tilatut palvelut")),w.isHistoryData?((0,i.wg)(),(0,i.j4)(v,{key:3,borderless:"",style:{"font-size":"14px","text-align":"left",color:"#ddd"}},{default:(0,i.w5)((()=>[(0,i._)("tbody",null,[(0,i._)("tr",null,[s,(0,i._)("td",null,(0,l.zw)(w.booking.date),1)]),(0,i._)("tr",null,[u,(0,i._)("td",null,(0,l.zw)(w.booking.header),1)]),(0,i._)("tr",null,[p,(0,i._)("td",null,(0,l.zw)(w.booking.company),1)]),(0,i._)("tr",null,[g,(0,i._)("td",null,(0,l.zw)(w.booking.id_number),1)]),(0,i._)("tr",null,[y,(0,i._)("td",null,(0,l.zw)(w.booking.address),1)]),(0,i._)("tr",null,[k,(0,i._)("td",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(w.booking.professional,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:e},(0,l.zw)(t),1)))),128))])]),_])])),_:1})):((0,i.wg)(),(0,i.j4)(v,{key:2,borderless:"",style:{"font-size":"14px",width:"100%","text-align":"left",color:"#ddd"}},{default:(0,i.w5)((()=>[(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.recipientConfirmedBookings,(t=>((0,i.wg)(),(0,i.iD)("tr",{key:t.id},[(0,i._)("td",null,(0,l.zw)(t.date),1),(0,i._)("td",null,(0,l.zw)(t.company),1),(0,i._)("td",null,[(0,i.Wm)(m,{block:"",outline:"info",onClick:e=>b.handleData(t)},{default:(0,i.w5)((()=>[(0,i.Uk)("Tiedot")])),_:2},1032,["onClick"])])])))),128))])])),_:1}))])):(0,i.kq)("",!0),o.proCompletedHistory.length>0?((0,i.wg)(),(0,i.iD)("div",c,[D,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.proCompletedHistory,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.id},(0,l.zw)(t.header),1)))),128))])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])),_:1})}var b=o(4313),m=o(9398),v={name:"historia",props:{recipientConfirmedBookings:Array,proCompletedHistory:Array,tere:String,bookings:Array},components:{MDBTable:b.re,MDBBtn:b.$v,MDBRow:b.uZ,MDBCol:b.TK,MDBIcon:b.vm,MDBBadge:b.m_,MDBContainer:b.L5},data(){return{isFeedbackOpen:!1,isRated:!1,providerID:"",provider:{},isHistoryData:!1,booking:null}},methods:{handleData(t){this.isHistoryData=!0,this.booking=t},async openFeedbackPanel(t){this.isFeedbackOpen=!0;let e=await m.Z.getProvByProvId(t);console.log("Provider positive rating: "+e.yritys),this.providerID=t},ratePos(){console.log("Rated ++ "+this.providerID),m.Z.setPositiveRating(this.providerID)},rateMinus(){console.log("You rated --")}}},h=o(89);const f=(0,h.Z)(v,[["render",w],["__scopeId","data-v-6f4b57a0"]]);var B=f}}]);
//# sourceMappingURL=317.85ce5ea7.js.map