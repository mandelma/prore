"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[91,125],{8033:function(e,t,s){var i=s(3396);const o=({message:e})=>null===e?null:(0,i.Wm)("div",{className:"success"},[e]);t.Z=o},8125:function(e,t,s){s.r(t),s.d(t,{default:function(){return D}});var i=s(3396),o=s(7139);function n(e,t,s,n,l,a){const r=(0,i.up)("MDBIcon"),d=(0,i.up)("MDBBadge"),u=(0,i.up)("PositiveFeedback"),c=(0,i.up)("MDBCol"),m=(0,i.up)("NegativeFeedback"),g=(0,i.up)("MDBRow"),h=(0,i.up)("MDBTable"),p=(0,i.up)("live-chat"),k=(0,i.up)("MDBBtn");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("h2",null,"- "+(0,o.zw)(s.provider.yritys)+" -",1),(0,i.Wm)(h,{style:{"font-size":"18px","text-align":"center"}},{default:(0,i.w5)((()=>[(0,i._)("tbody",null,[(0,i._)("tr",null,[(0,i._)("td",null,[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,{style:{padding:"10px",cursor:"pointer"},i:"",class:"far fa-thumbs-up",size:"2x",onClick:a.getPositiveFeedback},null,8,["onClick"]),(0,i.Wm)(d,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,i.w5)((()=>[(0,i.Uk)("100")])),_:1}),l.isPositive?((0,i.wg)(),(0,i.j4)(u,{key:0,"onClose:comments":a.closeComments},null,8,["onClose:comments"])):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,{style:{padding:"10px",cursor:"pointer"},i:"",class:"far fa-thumbs-down",size:"2x",onClick:a.getNegativeFeedback},null,8,["onClick"]),(0,i.Wm)(d,{color:"danger",class:"translate-middle p-1",pill:"",size:"lg",notification:""},{default:(0,i.w5)((()=>[(0,i.Uk)("2")])),_:1}),l.isNegative?((0,i.wg)(),(0,i.j4)(m,{key:0,"onClose:comments":a.closeComments},null,8,["onClose:comments"])):(0,i.kq)("",!0)])),_:1})])),_:1})])])])])),_:1}),(0,i.Wm)(p,{chatusers:s.chatusers,messages:s.messages,selecteduser:s.selecteduser,"onSelect:user":a.selectUser,"onOn:message":a.onMessage},null,8,["chatusers","messages","selecteduser","onSelect:user","onOn:message"]),(0,i.Wm)(k,{outline:"info",block:"",size:"lg",onClick:t[0]||(t[0]=e=>a.handleOrder(s.provider.id))},{default:(0,i.w5)((()=>[(0,i.Uk)(" Tilaa yritys ")])),_:1}),(0,i.Wm)(k,{outline:"secondary",block:"",size:"lg",onClick:a.canselRecipientFinal},{default:(0,i.w5)((()=>[(0,i.Uk)(" Poistu ")])),_:1},8,["onClick"])])}var l=s(4313);function a(e,t,s,o,n,l){const a=(0,i.up)("MDBListGroupItem"),r=(0,i.up)("MDBListGroup"),d=(0,i.up)("MDBBtn");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r,{light:"",small:"",style:{"text-align":"left"}},{default:(0,i.w5)((()=>[(0,i.Wm)(a,null,{default:(0,i.w5)((()=>[(0,i.Uk)("22.01.2023 Väga hea töö! Kiidan tegijat")])),_:1}),(0,i.Wm)(a,null,{default:(0,i.w5)((()=>[(0,i.Uk)("05.03.2023 Super, ainult parimad sõnad tehtud töö kohta. Soovitan soojalt!!")])),_:1})])),_:1}),(0,i.Wm)(d,{block:"",outline:"secondary",size:"lg",onClick:l.closeFeedback},{default:(0,i.w5)((()=>[(0,i.Uk)("Poistu kommenteistä")])),_:1},8,["onClick"])])}var r={name:"positive-feedback",components:{MDBListGroup:l.d8,MDBListGroupItem:l.FQ,MDBBtn:l.$v},data(){return{}},methods:{closeFeedback(){this.$emit("close:comments",!1)}}},d=s(89);const u=(0,d.Z)(r,[["render",a]]);var c=u;function m(e,t,s,o,n,l){const a=(0,i.up)("MDBListGroupItem"),r=(0,i.up)("MDBListGroup"),d=(0,i.up)("MDBBtn");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r,{light:"",small:"",style:{"text-align":"left"}},{default:(0,i.w5)((()=>[(0,i.Wm)(a,null,{default:(0,i.w5)((()=>[(0,i.Uk)("19.04.2023 Huias täiega ja tegi sitta!")])),_:1}),(0,i.Wm)(a,null,{default:(0,i.w5)((()=>[(0,i.Uk)("05.05.2023 Võttis ainult raha ja jättis töö tegemata. Ainult jõi ja suitsetas kogu aeg!")])),_:1})])),_:1}),(0,i.Wm)(d,{block:"",outline:"secondary",size:"lg",onClick:l.closeFeedback},{default:(0,i.w5)((()=>[(0,i.Uk)("Poistu kommenteistä")])),_:1},8,["onClick"])])}var g={name:"negative-feedback",components:{MDBListGroup:l.d8,MDBListGroupItem:l.FQ,MDBBtn:l.$v},data(){return{}},methods:{closeFeedback(){this.$emit("close:comments",!1)}}};const h=(0,d.Z)(g,[["render",m]]);var p=h,k=s(686),v=s(4058),f=s(7957),w=s(2343),y={name:"recipient-final",props:{chatusers:Array,selecteduser:null,messages:Array,provider:Object,room:String,roomUserCount:Number,available:String,booking:Array},components:{User:f.Z,MessagePanel:w.Z,PositiveFeedback:c,NegativeFeedback:p,liveChat:k["default"],MDBBtn:l.$v,MDBTable:l.re,MDBRow:l.uZ,MDBCol:l.TK,MDBIcon:l.vm,MDBBadge:l.m_},data(){return{selectedUser:null,isPositive:!1,isNegative:!1,isChat:!1,isPressedOpenChat:!1,isPressedContactToUser:!1,isConnection:!1,isTwoUsers:!1,isPressedFinal:!1,count:0,userCount:0}},mounted(){},methods:{chatCredentials(){},sendToApp(){console.log("Pressed"),this.$emit("finalinfo","Tere siit finaalist")},selectUser(e){this.$emit("select",e)},onMessage(e,t){this.$emit("message",e,t)},test(e){console.log("From chat: "+e)},openChat(){this.isChat=!0,this.count++,console.log("this room is "+this.room)},contactToUser(){this.isPressedContactToUser=!0,v.Z.emit("updateRoom",this.room),v.Z.on("get updated room users",(e=>{console.log("New users update "+e.users.length),e.users.length>1?this.isConnection=!0:this.isConnection=!1})),this.isPressedFinal=!0,this.isChat=!0},handleOrder(e){this.$emit("provider:ordered",e)},getPositiveFeedback(){this.isPositive=!0,this.isNegative=!1},getNegativeFeedback(){this.isNegative=!0,this.isPositive=!1},closeComments(e){this.isPositive=this.isNegative=e,console.log("result "+e)},canselRecipientFinal(){this.isChat=!1,this.$emit("cansel:final",!1)}}};const b=(0,d.Z)(y,[["render",n]]);var D=b},5091:function(e,t,s){s.r(t),s.d(t,{default:function(){return E}});var i=s(3396),o=s(7139),n=s(9242);const l=e=>((0,i.dD)("data-v-9ab3f0da"),e=e(),(0,i.Cn)(),e),a=["src"],r={key:0},d=l((()=>(0,i._)("h2",null,"Ordered",-1))),u={key:0},c={class:"ui large form"},m={class:"field"},g=l((()=>(0,i._)("option",{disabled:"",value:""},"Filtreeri pakkujad...",-1))),h=l((()=>(0,i._)("option",{value:"distance"},"Etäisyys",-1))),p=[g,h],k=l((()=>(0,i._)("br",null,null,-1))),v={key:0},f=l((()=>(0,i._)("h4",null,"Saatavilla sen aikaan",-1))),w={key:1},y=l((()=>(0,i._)("br",null,null,-1))),b={style:{"font-size":"14px"}},D=l((()=>(0,i._)("h4",null,"Sovittaessa",-1))),_=l((()=>(0,i._)("tr",null,null,-1))),C={key:1},M=l((()=>(0,i._)("h2",null,"Yrityksiä hetkellä ei löytyy",-1))),B=[M];function P(e,t,l,g,h,M){const P=(0,i.up)("recipientFinal"),F=(0,i.up)("MDBContainer"),U=(0,i.up)("successMessage"),W=(0,i.up)("MDBBtn"),T=(0,i.up)("MDBTable"),z=(0,i.up)("MDBCol"),S=(0,i.up)("MDBBadge"),x=(0,i.up)("MDBRow");return h.isProviderSelected?((0,i.wg)(),(0,i.j4)(F,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(P,{"onCansel:final":M.handleCanselFinal,"onProvider:ordered":M.orderSuccess,provider:h.selectedProvider,room:h.room,available:h.availability,booking:l.booking,chatusers:l.chatusers,selecteduser:l.selecteduser,messages:l.messages,onMessage:M.onMessage,onSelect:M.selectUser,onFinalinfo:M.finalinfo},null,8,["onCansel:final","onProvider:ordered","provider","room","available","booking","chatusers","selecteduser","messages","onMessage","onSelect","onFinalinfo"])])),_:1})):((0,i.wg)(),(0,i.j4)(F,{key:1},{default:(0,i.w5)((()=>[(0,i._)("h3",null,"Päivämäärä: "+(0,o.zw)(l.booking[0].date),1),(0,i._)("h2",null,"Tarvin tässä osaaja - "+(0,o.zw)(l.line),1),(0,i.Wm)(U,{message:h.orderMessage},null,8,["message"]),(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Wm)(z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(T,{border:"primary",style:{"font-size":"18px","text-align":"left"}},{default:(0,i.w5)((()=>[(0,i._)("tbody",null,[(0,i._)("tr",null,[(0,i._)("td",null,(0,o.zw)(l.booking[0].description),1)]),(0,i._)("tr",null,[(0,i._)("td",null,[(0,i.Wm)(W,{outline:"info",block:"",size:"lg"},{default:(0,i.w5)((()=>[(0,i.Uk)("Muokkaa tehtävän kuvausta")])),_:1})])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.booking,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.id},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.image,(t=>((0,i.wg)(),(0,i.iD)("td",{key:t._id},[(0,i._)("img",{src:s(3866)(`./${e.image.map((e=>e.name))}`),style:{width:"100%"},alt:"kuva"},null,8,a)])))),128))])))),128)),(0,i._)("tr",null,[l.booking[0].image?((0,i.wg)(),(0,i.iD)("td",r,[(0,i.Wm)(W,{outline:"info",block:"",size:"lg"},{default:(0,i.w5)((()=>[(0,i.Uk)("Muokkaa kuva tehtävästä")])),_:1})])):(0,i.kq)("",!0)])])])),_:1})])),_:1}),h.isOrdered?((0,i.wg)(),(0,i.j4)(z,{key:0},{default:(0,i.w5)((()=>[d])),_:1})):((0,i.wg)(),(0,i.j4)(z,{key:1},{default:(0,i.w5)((()=>[l.providers.length>0?((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",c,[(0,i._)("div",m,[(0,i.wy)((0,i._)("select",{id:"listOfProviders","onUpdate:modelValue":t[0]||(t[0]=e=>h.filterResult=e),onClick:t[1]||(t[1]=(...e)=>M.addFilter&&M.addFilter(...e))},p,512),[[n.bM,h.filterResult]])])]),k,(0,i.Wm)(T,{style:{"font-size":"18px","text-align":"center"}},{default:(0,i.w5)((()=>[(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.providers,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.id},[e.timeoffer.map((e=>h.datetime.providerMatchingForClient(l.bookingTime,{y:2023,m:e.monthFrom,d:e.dayFrom,hour:e.hoursFrom,min:e.minutesFrom},{y:2023,m:e.monthTo,d:e.dayTo,hour:e.hoursTo,min:e.minutesTo}))).includes(!0)?((0,i.wg)(),(0,i.iD)("td",v,[(0,i.Wm)(W,{style:{width:"200px",padding:"20px","background-color":"grey",border:"solid #4c4949",color:"#f0eeee","font-size":"150%"},outline:"info",size:"lg",onClick:t=>M.getProviderInfo(e,"green")},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e.yritys),1)])),_:2},1032,["onClick"]),(0,i.Wm)(S,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,i.w5)((()=>[f])),_:1})])):((0,i.wg)(),(0,i.iD)("td",w,[(0,i.Wm)(W,{style:{width:"200px",padding:"20px","background-color":"#827f7f",border:"solid #5f5d5d",color:"#f0eeee","font-size":"150%"},size:"lg",onClick:t=>M.getProviderInfo(e,"orange")},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e.yritys)+" ",1),y,(0,i._)("span",b,"Etäisyys: "+(0,o.zw)(e.distance)+" km",1)])),_:2},1032,["onClick"]),(0,i.Wm)(S,{color:"info",class:"translate-middle p-1",pill:"",notification:""},{default:(0,i.w5)((()=>[D])),_:1})]))])))),128)),_])])),_:1})])):((0,i.wg)(),(0,i.iD)("div",C,B))])),_:1})),(0,i.Wm)(W,{block:"",outline:"danger",size:"lg",onClick:M.canselResult},{default:(0,i.w5)((()=>[(0,i.Uk)("Takaisin")])),_:1},8,["onClick"])])),_:1})])),_:1}))}var F=s(4313);const U=(e,t)=>{const s=new Date(e.y,e.m,e.d,e.hour,e.min),i=new Date(t.y,t.m,t.d,t.hour,t.min);return i>=s},W=(e,t,s)=>{const i=new Date(t.y,t.m,t.d,t.hour,t.min),o=new Date(s.y,s.m,s.d,s.hour,s.min);return e>=i&&e<o};var T={compare:U,providerMatchingForClient:W},z=s(8125),S=s(8033);let x="";const I=()=>{var e=new google.maps.LatLng(60.233093,24.7531362),t=new google.maps.LatLng(60.2767265,24.8575089),s=new google.maps.DistanceMatrixService;s.getDistanceMatrix({origins:[e],destinations:[t],travelMode:"DRIVING",unitSystem:google.maps.UnitSystem.METRIC,durationInTraffic:!0,avoidHighways:!1,avoidTolls:!1},$)},$=(e,t)=>{if(t===google.maps.DistanceMatrixStatus.OK&&"OK"===t)return console.log("Distance "+e.rows[0].elements[0].distance.text),x=e.rows[0].elements[0].distance.text,"aaaaaaaaaaaaa";console.log("Error:",t),alert(t)},Z=()=>(console.log("Is it working??"+x),(0,i.Wm)("div",null,[(0,i.Uk)("Hiiii")])),L=()=>{var e=new google.maps.LatLng(60.233093,24.7531362),t=new google.maps.LatLng(60.2767265,24.8575089);return(google.maps.geometry.spherical.computeDistanceBetween(e,t)/1e3).toFixed(2)};var j={distance:I,test:Z,theDist:L},O=s(9398),R=s(5800),N=s(4058),A={name:"recipient-panel-result",props:{chatusers:Array,selecteduser:null,messages:Array,loggedInUser:Object,booking:null,bookingTime:null,providers:[],confirmedBookings:Array,line:String},data(){return{chatUser:{},count:0,datetime:T,distance:j,selectedProvider:null,isProviderSelected:!1,availability:"",orderMessage:null,isOrdered:!1,room:"",roomUserCount:0,filterResult:""}},components:{successMessage:S.Z,dist:j,recipientFinal:z["default"],MDBBtn:F.$v,MDBContainer:F.L5,MDBTable:F.re,MDBRow:F.uZ,MDBCol:F.TK,MDBBadge:F.m_},methods:{getDistance(){console.log("sss "+j.test())},selectUser(e){this.$emit("select",e)},onMessage(e,t){this.$emit("message",e,t)},finalinfo(e){console.log("Final info in result pressed "),this.$emit("finalinfo",e)},getChatCredentials(){},async orderSuccess(e){this.isProviderSelected=!1,console.log("Provider id "+e),console.log("Recpient id: "+this.booking[0].id);const t={provider:this.selectedProvider.yritys};await R.Z.addProviderName(this.booking[0].id,t);const s=await R.Z.updateRecipient(this.booking[0].id,{status:"notSeen"});console.log("Is status updated: "+s.status),this.$emit("remove:confirmed:provider",e),this.$emit("set:order:to:send",this.booking[0].id);const i=this.booking[0].id,o=await O.Z.addProviderBooking(e,i);"Recipient is added!"===o?(this.orderMessage="Tilaus on lähetetty vahvistettavaksi! Kiitos!",console.log("Booking made - id: "+o.id),this.isOrdered=!0,setTimeout((()=>{this.orderMessage=null}),3e3)):(this.orderMessage="Olet lähetänyt tilauksen!",setTimeout((()=>{this.orderMessage=null}),3e3))},getProviderInfo(e,t){this.selectedProvider=e,this.availability=t,this.isProviderSelected=!0,this.room=e.yritys+this.booking[0].user.username,N.Z.emit("room users count"),N.Z.on("get room users count",(e=>{console.log("Can we get users data from backend in recipient final??? "+e.users.length),this.roomUserCount=e.users.length}));const s=this.booking[0].user.username,i=e.yritys+this.booking[0].user.username,o={room:i,userID:this.chatUser.id,username:s},n={userID:e.user.id,username:e.user.username,room:i};this.$emit("provider",n);e.user.id,e.user.username;this.$emit("chatCredentials",o),N.Z.emit("online",i),N.Z.emit("create room users",{room:i,username:s,providerUsername:e.user.username,providerID:e.user.id})},addFilter(){const e=document.getElementById("listOfProviders");e.addEventListener("change",(e=>{console.log("Filtered provider: "+e.target.value),this.$emit("filter_provider",e.target.value)}))},handleCanselFinal(e){this.isProviderSelected=e},canselResult(){this.$emit("cansel:result",!1)}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.chatUser=t}}},G=s(89);const K=(0,G.Z)(A,[["render",P],["__scopeId","data-v-9ab3f0da"]]);var E=K}}]);
//# sourceMappingURL=91.38f25eeb.js.map