"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[629,346],{8033:function(e,i,t){var o=t(3396);const l=({message:e})=>null===e?null:(0,o.Wm)("div",{className:"success"},[e]);i.Z=l},7346:function(e,i,t){t.r(i),t.d(i,{default:function(){return h}});var o=t(3396),l=t(7139);function n(e,i,t,n,a,s){const r=(0,o.up)("MDBIcon"),d=(0,o.up)("MDBBadge"),u=(0,o.up)("PositiveFeedback"),c=(0,o.up)("MDBCol"),m=(0,o.up)("NegativeFeedback"),g=(0,o.up)("MDBRow"),k=(0,o.up)("MDBTable"),p=(0,o.up)("MDBBtn"),v=(0,o.up)("liveChat");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("h2",null,"- "+(0,l.zw)(t.provider.yritys)+" -",1),(0,o.Wm)(k,{style:{"font-size":"18px","text-align":"center"}},{default:(0,o.w5)((()=>[(0,o._)("tbody",null,[(0,o._)("tr",null,[(0,o._)("td",null,[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{style:{padding:"10px",cursor:"pointer"},i:"",class:"far fa-thumbs-up",size:"2x",onClick:s.getPositiveFeedback},null,8,["onClick"]),(0,o.Wm)(d,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,o.w5)((()=>[(0,o.Uk)("100")])),_:1}),a.isPositive?((0,o.wg)(),(0,o.j4)(u,{key:0,"onClose:comments":s.closeComments},null,8,["onClose:comments"])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{style:{padding:"10px",cursor:"pointer"},i:"",class:"far fa-thumbs-down",size:"2x",onClick:s.getNegativeFeedback},null,8,["onClick"]),(0,o.Wm)(d,{color:"danger",class:"translate-middle p-1",pill:"",size:"lg",notification:""},{default:(0,o.w5)((()=>[(0,o.Uk)("2")])),_:1}),a.isNegative?((0,o.wg)(),(0,o.j4)(m,{key:0,"onClose:comments":s.closeComments},null,8,["onClose:comments"])):(0,o.kq)("",!0)])),_:1})])),_:1})])])])])),_:1}),"orange"===t.available?((0,o.wg)(),(0,o.j4)(p,{key:0,outline:"info",block:"",size:"lg",onClick:i[0]||(i[0]=e=>s.handleOrder(t.provider.id))},{default:(0,o.w5)((()=>[(0,o.Uk)(" Tilaa yritys ")])),_:1})):((0,o.wg)(),(0,o.j4)(p,{key:1,outline:"info",block:"",size:"lg"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Ota yhteyttä ")])),_:1})),(0,o.Wm)(v,{un:t.booking[0].user.username,ri:t.room},null,8,["un","ri"]),(0,o.Wm)(p,{outline:"secondary",block:"",size:"lg",onClick:s.canselRecipientFinal},{default:(0,o.w5)((()=>[(0,o.Uk)(" Poistu ")])),_:1},8,["onClick"]),(0,o.Uk)(" BookingBB "+(0,l.zw)(t.booking),1)])}var a=t(4313);function s(e,i,t,l,n,a){const s=(0,o.up)("MDBListGroupItem"),r=(0,o.up)("MDBListGroup"),d=(0,o.up)("MDBBtn");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r,{light:"",small:"",style:{"text-align":"left"}},{default:(0,o.w5)((()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Uk)("22.01.2023 Väga hea töö! Kiidan tegijat")])),_:1}),(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Uk)("05.03.2023 Super, ainult parimad sõnad tehtud töö kohta. Soovitan soojalt!!")])),_:1})])),_:1}),(0,o.Wm)(d,{block:"",outline:"secondary",size:"lg",onClick:a.closeFeedback},{default:(0,o.w5)((()=>[(0,o.Uk)("Poistu kommenteistä")])),_:1},8,["onClick"])])}var r={name:"positive-feedback",components:{MDBListGroup:a.d8,MDBListGroupItem:a.FQ,MDBBtn:a.$v},data(){return{}},methods:{closeFeedback(){this.$emit("close:comments",!1)}}},d=t(89);const u=(0,d.Z)(r,[["render",s]]);var c=u;function m(e,i,t,l,n,a){const s=(0,o.up)("MDBListGroupItem"),r=(0,o.up)("MDBListGroup"),d=(0,o.up)("MDBBtn");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r,{light:"",small:"",style:{"text-align":"left"}},{default:(0,o.w5)((()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Uk)("19.04.2023 Huias täiega ja tegi sitta!")])),_:1}),(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Uk)("05.05.2023 Võttis ainult raha ja jättis töö tegemata. Ainult jõi ja suitsetas kogu aeg!")])),_:1})])),_:1}),(0,o.Wm)(d,{block:"",outline:"secondary",size:"lg",onClick:a.closeFeedback},{default:(0,o.w5)((()=>[(0,o.Uk)("Poistu kommenteistä")])),_:1},8,["onClick"])])}var g={name:"negative-feedback",components:{MDBListGroup:a.d8,MDBListGroupItem:a.FQ,MDBBtn:a.$v},data(){return{}},methods:{closeFeedback(){this.$emit("close:comments",!1)}}};const k=(0,d.Z)(g,[["render",m]]);var p=k,v=t(1845),f={name:"recipient-final",props:{provider:Object,room:String,available:String,booking:Array},components:{PositiveFeedback:c,NegativeFeedback:p,liveChat:v["default"],MDBBtn:a.$v,MDBTable:a.re,MDBRow:a.uZ,MDBCol:a.TK,MDBIcon:a.vm,MDBBadge:a.m_},data(){return{isPositive:!1,isNegative:!1}},mounted(){},methods:{handleOrder(e){this.$emit("provider:ordered",e)},getPositiveFeedback(){this.isPositive=!0,this.isNegative=!1},getNegativeFeedback(){this.isNegative=!0,this.isPositive=!1},closeComments(e){this.isPositive=this.isNegative=e,console.log("result "+e)},canselRecipientFinal(){this.$emit("cansel:final",!1)}}};const w=(0,d.Z)(f,[["render",n]]);var h=w},7629:function(e,i,t){t.r(i),t.d(i,{default:function(){return z}});var o=t(3396),l=t(7139);const n=e=>((0,o.dD)("data-v-31c572ae"),e=e(),(0,o.Cn)(),e),a=["src"],s={key:0},r=n((()=>(0,o._)("h2",null,"Ordered",-1))),d={key:0},u={key:0},c=n((()=>(0,o._)("h4",null,"Saatavilla sen aikaan",-1))),m={key:1},g=n((()=>(0,o._)("h4",null,"Sovittaessa",-1))),k=n((()=>(0,o._)("tr",null,null,-1))),p={key:1},v=n((()=>(0,o._)("h2",null,"Yrityksiä hetkellä ei löytyy",-1))),f=[v];function w(e,i,n,v,w,h){const y=(0,o.up)("recipientFinal"),b=(0,o.up)("MDBContainer"),_=(0,o.up)("successMessage"),D=(0,o.up)("MDBBtn"),B=(0,o.up)("MDBTable"),M=(0,o.up)("MDBCol"),C=(0,o.up)("MDBBadge"),W=(0,o.up)("MDBRow");return w.isProviderSelected?((0,o.wg)(),(0,o.j4)(b,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{"onCansel:final":h.handleCanselFinal,"onProvider:ordered":h.orderSuccess,provider:w.selectedProvider,room:w.room,available:w.availability,booking:n.booking},null,8,["onCansel:final","onProvider:ordered","provider","room","available","booking"])])),_:1})):((0,o.wg)(),(0,o.j4)(b,{key:1},{default:(0,o.w5)((()=>[(0,o._)("h3",null,"Päivämäärä: "+(0,l.zw)(n.booking[0].date),1),(0,o._)("h2",null,"Tarvin tässä osaaja - "+(0,l.zw)(n.line),1),(0,o.Wm)(_,{message:w.orderMessage},null,8,["message"]),(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(M,null,{default:(0,o.w5)((()=>[(0,o.Wm)(B,{border:"primary",style:{"font-size":"18px","text-align":"left"}},{default:(0,o.w5)((()=>[(0,o._)("tbody",null,[(0,o._)("tr",null,[(0,o._)("td",null,(0,l.zw)(n.booking[0].description),1)]),(0,o._)("tr",null,[(0,o._)("td",null,[(0,o.Wm)(D,{outline:"info",block:"",size:"lg"},{default:(0,o.w5)((()=>[(0,o.Uk)("Muokkaa tehtävän kuvausta")])),_:1})])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.booking,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.image,(i=>((0,o.wg)(),(0,o.iD)("td",{key:i._id},[(0,o._)("img",{src:t(3866)(`./${e.image.map((e=>e.name))}`),style:{width:"100%"},alt:"kuva"},null,8,a)])))),128))])))),128)),(0,o._)("tr",null,[n.booking[0].image?((0,o.wg)(),(0,o.iD)("td",s,[(0,o.Wm)(D,{outline:"info",block:"",size:"lg"},{default:(0,o.w5)((()=>[(0,o.Uk)("Muokkaa kuva tehtävästä")])),_:1})])):(0,o.kq)("",!0)])])])),_:1})])),_:1}),w.isOrdered?((0,o.wg)(),(0,o.j4)(M,{key:0},{default:(0,o.w5)((()=>[r])),_:1})):((0,o.wg)(),(0,o.j4)(M,{key:1},{default:(0,o.w5)((()=>[n.providers.length>0?((0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(B,{border:"primary",style:{"font-size":"18px","text-align":"center"}},{default:(0,o.w5)((()=>[(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.providers,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[e.timeoffer.map((e=>w.datetime.providerMatchingForClient(n.bookingTime,{y:e.yearFrom,m:e.monthFrom,d:e.dayFrom,hour:e.hoursFrom,min:e.minutesFrom},{y:e.yearTo,m:e.monthTo,d:e.dayTo,hour:e.hoursTo,min:e.minutesTo}))).includes(!0)?((0,o.wg)(),(0,o.iD)("td",u,[(0,o.Wm)(D,{style:{width:"200px","background-color":"grey",border:"solid #4c4949",color:"#f0eeee"},outline:"info",size:"lg",onClick:i=>h.getProviderInfo(e,"green")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.yritys),1)])),_:2},1032,["onClick"]),(0,o.Wm)(C,{color:"danger",class:"translate-middle p-1",pill:"",notification:""},{default:(0,o.w5)((()=>[c])),_:1})])):((0,o.wg)(),(0,o.iD)("td",m,[(0,o.Wm)(D,{style:{width:"200px",padding:"20px","background-color":"#999797",border:"solid #5f5d5d",color:"#f0eeee","font-size":"150%"},size:"lg",onClick:i=>h.getProviderInfo(e,"orange")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.yritys),1)])),_:2},1032,["onClick"]),(0,o.Wm)(C,{color:"info",class:"translate-middle p-1",pill:"",notification:""},{default:(0,o.w5)((()=>[g])),_:1})]))])))),128)),k])])),_:1})])):((0,o.wg)(),(0,o.iD)("div",p,f))])),_:1})),(0,o.Wm)(D,{block:"",outline:"danger",size:"lg",onClick:h.canselResult},{default:(0,o.w5)((()=>[(0,o.Uk)("Takaisin")])),_:1},8,["onClick"])])),_:1})])),_:1}))}var h=t(4313);const y=(e,i)=>{const t=new Date(e.y,e.m,e.d,e.hour,e.min),o=new Date(i.y,i.m,i.d,i.hour,i.min);return o>=t},b=(e,i,t)=>{const o=new Date(i.y,i.m,i.d,i.hour,i.min),l=new Date(t.y,t.m,t.d,t.hour,t.min);return e>=o&&e<l};var _={compare:y,providerMatchingForClient:b},D=t(7346),B=t(8033),M=t(4058),C=t(5800),W={name:"recipient-panel-result",props:{loggedInUser:Object,booking:null,bookingTime:null,providers:[],confirmedBookings:Array,line:String},data(){return{datetime:_,selectedProvider:null,isProviderSelected:!1,availability:"",orderMessage:null,isOrdered:!1,room:""}},components:{successMessage:B.Z,recipientFinal:D["default"],MDBBtn:h.$v,MDBContainer:h.L5,MDBTable:h.re,MDBRow:h.uZ,MDBCol:h.TK,MDBBadge:h.m_},methods:{async orderSuccess(e){this.isProviderSelected=!1,console.log("Provider id "+e),console.log("Recpient id: "+this.booking[0].id);const i=await C.Z.updateRecipient(this.booking[0].id,{status:"notSeen"});console.log("Is status updated: "+i.status),this.$emit("remove:confirmed:provider",e),this.$emit("set:order:to:send",this.booking[0].id)},getProviderInfo(e,i){this.selectedProvider=e,this.availability=i,this.isProviderSelected=!0,console.log("Booking username "+this.booking[0].user.username),console.log("Recipient room: "+(e.yritys+this.booking[0].user.username)),this.room=e.yritys+this.booking[0].user.username,M.Z.emit("updateRoom",this.room),M.Z.disconnect(),M.Z.connect()},handleCanselFinal(e){this.isProviderSelected=e},canselResult(){this.$emit("cansel:result",!1)}}},F=t(89);const P=(0,F.Z)(W,[["render",w],["__scopeId","data-v-31c572ae"]]);var z=P}}]);
//# sourceMappingURL=629.9c0d9b4d.js.map