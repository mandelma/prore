"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[7],{1840:function(e,t,o){var s=o(3396);let i="";const a=()=>{var e=new google.maps.LatLng(60.233093,24.7531362),t=new google.maps.LatLng(60.2767265,24.8575089),o=new google.maps.DistanceMatrixService;o.getDistanceMatrix({origins:[e],destinations:[t],travelMode:"DRIVING",unitSystem:google.maps.UnitSystem.METRIC,durationInTraffic:!0,avoidHighways:!1,avoidTolls:!1},l)},l=(e,t)=>{if(t===google.maps.DistanceMatrixStatus.OK&&"OK"===t)return console.log("Distance "+e.rows[0].elements[0].distance.text),i=e.rows[0].elements[0].distance.text,"aaaaaaaaaaaaa";console.log("Error:",t),alert(t)},n=()=>(console.log("Is it working??"+i),(0,s.Wm)("div",null,[(0,s.Uk)("Hiiii")])),r=()=>{var e=new google.maps.LatLng(60.233093,24.7531362),t=new google.maps.LatLng(60.2767265,24.8575089);return(google.maps.geometry.spherical.computeDistanceBetween(e,t)/1e3).toFixed(2)};t.Z={distance:a,test:n,theDist:r}},2283:function(e,t,o){o(4161)},4007:function(e,t,o){o.r(t),o.d(t,{default:function(){return _e}});var s=o(3396),i=o(7139),a=o(9242);const l={style:{display:"flex","justify-content":"right"}},n=(0,s._)("i",{class:"fas fa-compress-arrows-alt"},null,-1),r={id:"panel"},d={style:{"margin-bottom":"20px"}},c={value:"slotProps"},g={key:0},p={key:1},m={style:{},class:"flex align-items-center"},u=(0,s._)("option",{disabled:"",value:"1"},"1 kilometriä ympärilläsi",-1),h=(0,s._)("option",{value:"2"},"2 km ympärilläsi",-1),y=(0,s._)("option",{value:"3"},"3 km ympärilläsi",-1),f=(0,s._)("option",{value:"4"},"4 km ympärilläsi",-1),w=(0,s._)("option",{value:"5"},"5 km ympärilläsi",-1),k=(0,s._)("option",{value:"6"},"6 km ympärilläsi",-1),v=(0,s._)("option",{value:"7"},"7 km ympärilläsi",-1),_=(0,s._)("option",{value:"8"},"8 km ympärilläsi",-1),D=(0,s._)("option",{value:"9"},"9 km ympärilläsi",-1),M=(0,s._)("option",{value:"10"},"10 km ympärilläsi",-1),P=(0,s._)("option",{value:"20"},"20 km ympärilläsi",-1),C=(0,s._)("option",{value:"30"},"30 km ympärilläsi",-1),L=(0,s._)("option",{value:"40"},"40 km ympärilläsi",-1),b=(0,s._)("option",{value:"50"},"50 km ympärilläsi",-1),x=(0,s._)("option",{value:"60"},"60 km ympärilläsi",-1),S=(0,s._)("option",{value:"70"},"70 km ympärilläsi",-1),B=(0,s._)("option",{value:"80"},"80 km ympärilläsi",-1),I=(0,s._)("option",{value:"90"},"90 km ympärilläsi",-1),O=(0,s._)("option",{value:"100"},"100 km ympärilläsi",-1),T=(0,s._)("option",{value:"200"},"200 km ympärilläsi",-1),z=(0,s._)("option",{value:"300"},"300 km ympärilläsi",-1),U=[u,h,y,f,w,k,v,_,D,M,P,C,L,b,x,S,B,I,O,T,z],A={key:0,style:{"background-color":"white",margin:"auto",padding:"10px",width:"350px",border:"solid darkgrey"}},W={key:1,class:"map-info-table",style:{"background-color":"white",padding:"10px",width:"90%",margin:"auto",border:"solid darkgrey"}},V={style:{display:"flex","justify-content":"right"}},F={style:{"font-size":"14px",width:"100%","text-align":"left"}},Z=(0,s._)("td",null," Yritys: ",-1),j=(0,s._)("td",null," Y - tunnus: ",-1),E=(0,s._)("td",null," Työalue: ",-1),R=(0,s._)("td",null," Tuntihinta: ",-1),q=(0,s._)("td",null," palaute: ",-1),H={key:0},N={colspan:"2"},$={key:1},J={colspan:"2"},G={key:2,class:"order"},Y={style:{display:"flex","justify-content":"right",padding:"20px"}},K={style:{color:"#00a6ff","text-align":"left"}},X=(0,s._)("p",{style:{"text-align":"left"}},"Missä ajalla haluaisit ammattilaista?",-1),Q={style:{color:"#fff"}},ee={class:"message-counter"},te={key:3},oe={key:0},se=(0,s._)("i",{class:"fas fa-expand-arrows-alt"},null,-1),ie={key:4,style:{"background-color":"white"}},ae=(0,s._)("p",{style:{color:"red","font-size":"14px","text-align":"left",padding:"15px"}}," Napsauta merkkiä nähdäksesi palveluntarjoajan! ",-1),le=[ae],ne=(0,s._)("div",{id:"map"},null,-1);function re(e,t,o,u,h,y){const f=(0,s.up)("MDBIcon"),w=(0,s.up)("MDBBtnClose"),k=(0,s.up)("MDBBtn"),v=(0,s.up)("MDBInput"),_=(0,s.up)("Dropdown"),D=(0,s.up)("chat-panel"),M=(0,s.up)("MDBBadge"),P=(0,s.up)("VueDatePicker"),C=(0,s.up)("MDBTextarea"),L=(0,s.up)("MDBContainer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(L,{style:{position:"relative","z-index":"1","margin-top":"80px",opacity:"0.8"}},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,i.C_)({hideMainPanel:!h.isMainPanel}),style:{"background-color":"#2b2a2a",padding:"10px"}},[(0,s._)("div",l,[(0,s.Wm)(f,{size:"lg",style:{padding:"10px"},onClick:y.closeMainPanel},{default:(0,s.w5)((()=>[n])),_:1},8,["onClick"]),(0,s._)("div",null,[(0,s.Wm)(w,{white:"",style:{padding:"10px"},size:"lg",onClick:t[0]||(t[0]=t=>e.$router.go(-1))})])]),h.isMainPanel?((0,s.wg)(),(0,s.j4)(k,{key:0,color:"info",size:"lg",block:"",onClick:y.receive,style:{position:"relative","z-index":"1",opacity:"1.2","margin-bottom":"10px"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" Tee uusi tilaus ")])),_:1},8,["onClick"])):(0,s.kq)("",!0),(0,s._)("div",r,[(0,s.Wm)(v,{white:"",label:"Anna toinen osoitteesi kun ei täsmää",modelValue:h.address,"onUpdate:modelValue":t[1]||(t[1]=e=>h.address=e),id:"autocomplite",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"])]),(0,s._)("div",d,[(0,s.Wm)(_,{onChange:y.changedProfession,modelValue:h.prof,"onUpdate:modelValue":t[2]||(t[2]=e=>h.prof=e),options:h.prodata,filter:"",optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",placeholder:"Valitse ammattilainen",class:"w-full md:w-100rem"},{optiongroup:(0,s.w5)((e=>[(0,s._)("div",m,[(0,s._)("div",null,(0,i.zw)(e.option.label),1)])])),default:(0,s.w5)((()=>[(0,s._)("template",c,[e.slotProps.value?((0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("div",null,(0,i.zw)(e.slotProps.value.label),1)])):((0,s.wg)(),(0,s.iD)("span",p,(0,i.zw)(e.slotProps.placeholder),1))])])),_:1},8,["onChange","modelValue","options"])]),(0,s._)("div",{class:(0,i.C_)({hideDistSelectPanel:!h.isDistSelection}),style:{"padding-top":"10px"}},[(0,s.wy)((0,s._)("select",{style:{padding:"12px",width:"100%","background-color":"dimgrey",color:"white"},id:"distance","onUpdate:modelValue":t[3]||(t[3]=e=>h.distBtw=e),onClick:t[4]||(t[4]=(...t)=>e.filterByDistance&&e.filterByDistance(...t))},U,512),[[a.bM,h.distBtw]])],2),h.prof?((0,s.wg)(),(0,s.iD)("h3",{key:1,class:(0,i.C_)({noClients:h.isActiveProffs})}," Ei ammattilaisia vielä! ",2)):(0,s.kq)("",!0)],2),h.isMapChat?((0,s.wg)(),(0,s.iD)("div",A,[(0,s._)("p",{style:{float:"right",color:"limegreen"},onClick:t[5]||(t[5]=(...e)=>y.closeMapChat&&y.closeMapChat(...e))},"Valmis"),(0,s.Wm)(D,{chatusers:o.chatusers,messages:o.messages,selecteduser:o.selecteduser,"onSelect:user":y.selectUser,onNoSelected:y.noSelectUser,"onOn:message":y.onMessage},null,8,["chatusers","messages","selecteduser","onSelect:user","onNoSelected","onOn:message"])])):h.isTargetSelected&&!h.isMapChat?((0,s.wg)(),(0,s.iD)("div",W,[(0,s._)("div",V,[(0,s._)("p",{style:{"font-size":"15px",padding:"10px",color:"orangered"},onClick:t[6]||(t[6]=(...e)=>y.outFromMarkerPanel&&y.outFromMarkerPanel(...e))},"Valmis")]),(0,s._)("table",F,[(0,s._)("tbody",null,[(0,s._)("tr",null,[Z,(0,s._)("td",null,(0,i.zw)(this.target.yritys),1)]),(0,s._)("tr",null,[j,(0,s._)("td",null,(0,i.zw)(this.target.ytunnus),1)]),(0,s._)("tr",null,[E,(0,s._)("td",null,(0,i.zw)(this.target.range?this.target.range:"Palvelun tarjous vain paikalla!"),1)]),(0,s._)("tr",null,[R,(0,s._)("td",null,(0,i.zw)(this.target.priceByHour)+" Euroa ",1)]),(0,s._)("tr",null,[q,(0,s._)("td",null,[(0,s.Wm)(f,{style:{padding:"10px",cursor:"pointer"},class:"far fa-smile",size:"lg",onClick:e.negative},null,8,["onClick"]),(0,s.Wm)(M,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,s.w5)((()=>[(0,s._)("p",null,(0,i.zw)(this.target.rating.positive),1)])),_:1}),(0,s.Wm)(f,{style:{padding:"10px",cursor:"pointer"},class:"far fa-frown",size:"lg",onClick:e.negative},null,8,["onClick"]),(0,s.Wm)(M,{color:"danger",class:"translate-middle p-1",pill:"",notification:""},{default:(0,s.w5)((()=>[(0,s._)("p",null,(0,i.zw)(this.target.rating.negative),1)])),_:1})])]),h.target.user.id!==h.userId?((0,s.wg)(),(0,s.iD)("tr",H,[(0,s._)("td",N,[(0,s.Wm)(k,{block:"",color:"secondary",size:"lg",onClick:y.createChatPanel},{default:(0,s.w5)((()=>[(0,s.Uk)("Chattailemaan")])),_:1},8,["onClick"])])])):(0,s.kq)("",!0),h.target.user.id===h.userId||h.isOrder?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("tr",$,[(0,s._)("td",J,[(0,s.Wm)(k,{block:"",color:"success",size:"lg",onClick:y.createBooking},{default:(0,s.w5)((()=>[(0,s.Uk)("Tee tilaus")])),_:1},8,["onClick"])])]))])])])):(0,s.kq)("",!0),h.isOrder?((0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("div",Y,[(0,s.Wm)(w,{white:"",size:"lg",onClick:t[7]||(t[7]=e=>h.isOrder=!1)})]),(0,s._)("form",{onSubmit:t[11]||(t[11]=(0,a.iM)(((...e)=>y.confirmOrder&&y.confirmOrder(...e)),["prevent"]))},[(0,s._)("p",K,"Address: "+(0,i.zw)(h.address),1),(0,s.Wm)(v,{white:"",label:"Anna otsiko",modelValue:h.orderHeader,"onUpdate:modelValue":t[8]||(t[8]=e=>h.orderHeader=e),wrapperClass:"mb-4"},null,8,["modelValue"]),X,(0,s._)("div",Q,[(0,s.Wm)(P,{style:{"margin-bottom":"20px"},modelValue:h.orderDate,"onUpdate:modelValue":t[9]||(t[9]=e=>h.orderDate=e),dark:"","min-date":new Date,"teleport-center":"",onInternalModelChange:e.handleInternalDate,state:!e.isNoDate&&null},null,8,["modelValue","min-date","onInternalModelChange","state"]),(0,s.Wm)(C,{maxlength:"70",label:"Tehtävän kuvaus...",white:"",rows:"2",modelValue:h.orderDescription,"onUpdate:modelValue":t[10]||(t[10]=e=>h.orderDescription=e),invalidFeedback:"Ole hyvä ja kirjoita tehtävän kuvaus.",validFeedback:"Ok!",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,s._)("span",ee,(0,i.zw)(h.orderDescription.length)+" / 70",1)]),(0,s.Wm)(k,{block:"",type:"submit",color:"success"},{default:(0,s.w5)((()=>[(0,s.Uk)("Tilaa")])),_:1})],32)])):(0,s.kq)("",!0),h.isTargetSelected?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",te,[h.isMainPanel?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",oe,[(0,s.Wm)(f,{size:"2x",style:{float:"right",padding:"10px"},onClick:y.returnToMainPanel},{default:(0,s.w5)((()=>[se])),_:1},8,["onClick"])]))])),!h.isMainPanel&&h.countOfSelectedProfessional>0&&!h.isTargetSelected?((0,s.wg)(),(0,s.iD)("div",ie,le)):(0,s.kq)("",!0)])),_:1}),ne])}o(7658);var de=o(4161),ce=o(5800),ge=o(9398),pe=o(4313),me=(o(1840),o(2283),o(3998)),ue=o(9799),he=o(4912),ye=o(9673),fe=o(4058),we={name:"recipient-public",props:{userIsProvider:Object,selecteduser:null,chatusers:Array,messages:Array,isProviderLoggedIn:Boolean},components:{chatPanel:ue["default"],MDBContainer:pe.L5,MDBInput:pe.u2,MDBBtn:pe.$v,MDBBtnClose:pe.Ok,MDBRow:pe.uZ,MDBCol:pe.TK,MDBIcon:pe.vm,MDBBadge:pe.m_,MDBTextarea:pe.uj,Dropdown:ye.Z,VueDatePicker:he.Z},data(){return{obj:null,isOrder:!1,target:{},isTargetSelected:!1,isMainPanel:!0,isCreatingChatPanel:!1,prof:null,username:null,userId:null,providerId:null,address:null,myLat:null,mylng:null,countOfSelectedProfessional:0,isActiveProffs:!1,isDistSelection:!1,professional:"Automaalari",currentProfession:"",distBtw:1,prodata:me.Z,room:null,isChatPanel:!0,isMapChat:!1,providers:[],selectedProPosition:null,orderDate:null,orderHeader:"",orderDescription:""}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.username=t.username,this.userId=t.id}this.resizeMap();new google.maps.Marker({icon:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"});this.userCurrentLocation();const t=window.localStorage.getItem("mapSearchData");if(t){const e=JSON.parse(t);console.log("Data+++ "+e.profession),this.currentProfession=e.profession,this.distBtw=e.distance,this.showClientLocationOnTheMap(this.currentProfession,this.distBtw)}const o=window.localStorage.getItem("mapSearchProData");if(o){const e=JSON.parse(o);console.log("Pro pos in map ---- "+e),this.isMainPanel=!1,this.openMarker(e)}const s=document.getElementById("distance");s.addEventListener("change",(e=>{this.distBtw=parseFloat(e.target.value);const t={profession:this.currentProfession,distance:parseFloat(e.target.value)};window.localStorage.setItem("mapSearchData",JSON.stringify(t)),this.showClientLocationOnTheMap(this.currentProfession,this.distBtw)}));const i=document.getElementById("autocomplite"),a={lat:50.064192,lng:-130.605469},l={north:a.lat+.1,south:a.lat-.1,east:a.lng+.1,west:a.lng-.1},n={bounds:l,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},r=new google.maps.places.Autocomplete(i,n);r.addListener("place_changed",(()=>{let e=r.getPlace();this.myLat=e.geometry.location.lat(),this.myLng=e.geometry.location.lng(),this.getAddressFrom(e.geometry.location.lat(),e.geometry.location.lng()),this.address=e.formatted_address,console.log("Address xxxx "+e.formatted_address),console.log("place-----------"+this.myLat)}))},methods:{changedProfession(){console.log("Changed "+this.prof.label),this.showClientLocationOnTheMap(this.prof.label,this.distBtw),this.currentProfession=this.prof.label,this.isDistSelection=!0},selectUser(e){this.$emit("select:user",e)},noSelectUser(){this.$emit("noSelected")},onMessage(e,t){this.$emit("on:message",e,t)},resizeMap(){var e=document.getElementById("map");e.style.height="100%",e.style.width="100%"},receive(){this.$router.push("/rf")},userCurrentLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:o}=e.coords;this.myLat=t,this.myLng=o,this.showUserLocationOnTheMap(t,o)}))},pinSymbol(e){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",fillColor:e,fillOpacity:1,strokeColor:"#000",strokeWeight:2,scale:1}},showUserLocationOnTheMap(e,t){new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP,accuracy:50});this.getAddressFrom(e,t)},getAddressFrom(e,t){de.Z.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key=AIzaSyDt2YXE5tk0J72JgqnH3DTD7MeoqbbWBmU").then((o=>{if(o.data.error_message)this.error=o.data.error_message,console.log(o.data.error_message);else{new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP});this.address=o.data.results[1].formatted_address}})).catch((e=>{this.error=e.message,console.log(e.message)}))},distanceBtw(e,t,o,s){var i=new google.maps.LatLng(e,t),a=new google.maps.LatLng(o,s);return(google.maps.geometry.spherical.computeDistanceBetween(i,a)/1e3).toFixed(2)},otherUserLocations(e,t,o){let s=!1,i=new google.maps.Map(document.getElementById("map"),{zoom:9,center:new google.maps.LatLng(this.myLat,this.myLng),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log("Users count: "+e.length),console.log("Current distance "+o);let a=0;if(e.length>0){this.target={};for(let l=0;l<e.length;l++){console.log("------------ "+e[l].yritys);this.myLat,this.myLng;e[l].profession.forEach((n=>{if(n===t){console.log("Pro "+n.yritys);e[l].latitude,e[l].longitude;if(console.log("Distance btw "+this.distanceBtw(this.myLat,this.myLng,e[l].latitude,e[l].longitude)),this.isActiveProffs=!0,this.distanceBtw(this.myLat,this.myLng,e[l].latitude,e[l].longitude)<=o){let t;a++,t=this.isTargetSelected?new google.maps.Marker({position:new google.maps.LatLng(e[l].latitude,e[l].longitude),accuracy:50,map:i,icon:this.pinSymbol("orange"),label:{color:"#f75959",fontWeight:"bold",fontSize:"14px",text:"TMI "+e[l].yritys}}):new google.maps.Marker({position:new google.maps.LatLng(e[l].latitude,e[l].longitude),accuracy:50,map:i}),window.myGlobalFunction=this.openMarker;const o=new google.maps.InfoWindow({});google.maps.event.addListener(t,"click",(function(){console.log("POOOOS "+l);let a=l;s&&s.close(),s=o,o.open(i,t),o.setContent("<div  class='map-info-window'><p style=\"color: green; \">"+e[l].yritys+'</p><p style="color: red; " onclick="myGlobalFunction('+a+' )">Tiedot</p></div>')})),console.log("Prev infowondow "+s)}}}))}a>0?(this.isActiveProffs=!0,this.isMainPanel=!1):this.isActiveProffs=!1,this.countOfSelectedProfessional=a,console.log("countxx "+a),this.identifyProfText()}},handleInitChat(){if(this.target.user.username!==this.username){this.target.yritys,this.username;console.log("Username in map: "+this.target.user.username),console.log("Room in map "+this.room),fe.Z.emit("create room users",{room:this.room,pro:this.target.yritys,status:"map",username:this.username,providerUsername:this.target.user.username,providerID:this.target.user.id});const e={room:this.room,proID:this.target.user.id,pro:this.target.yritys,userID:this.target.user.id,username:this.target.user.username};this.$emit("chatCredentials",e)}},createChatPanel(){this.handleInitChat(),this.isMapChat=!0},async openMarker(e){const t=[this.currentProfession],o=await ge.Z.getProvidersMatchingByProfession({result:t});let s=[];console.log("Matching pro length "+o.length),o.forEach((e=>{console.log("Results: "+e.user.id);let t=parseInt(this.distanceBtw(this.myLat,this.myLng,e.latitude,e.longitude)).toFixed(0);s=s.concat({id:e.user.id,dist:t,pro:this.currentProfession})})),fe.Z.emit("map search report",s);const i=await ge.Z.getProviders();i&&(i[e].user.username!==this.username&&(this.isCreatingChatPanel=!0),console.log("Room in client map: "+this.room),this.target=i[e],window.localStorage.setItem("mapSearchProData",JSON.stringify(e)),this.username?this.room=this.target.yritys+this.username:this.room="nipitiri",this.isTargetSelected=!0)},createBooking(){console.log("Here you can make an order! "+this.address),this.isOrder=!0},async confirmOrder(){let e;if(console.log("Order"),this.orderDate){let t=this.orderDate.getFullYear(),o=this.orderDate.getMonth(),s=this.orderDate.getDate(),i=this.orderDate.getHours(),a=this.orderDate.getMinutes();const l=new Date(t,o,s,i,a).getTime();e={created:this.orderDate,created_ms:l,header:this.orderHeader,address:this.address,latitude:this.myLat,longitude:this.myLng,professional:this.currentProfession,year:this.orderDate.getFullYear(),month:this.orderDate.getMonth(),day:this.orderDate.getDate(),hours:this.orderDate.getHours(),minutes:this.orderDate.getMinutes(),description:this.orderDescription,status:"notSeen",ordered:this.target.id}}console.log("Address: "+this.address);const t=await ce.Z.addRecipient(this.userId,e);await ce.Z.addProviderData(t.id,this.target.id);const o=await ge.Z.addProviderBooking(this.target.id,t.id);if("Recipient is added!"===o){console.log("Iiiiisss "+(this.target.yritys+this.username));const e=this.target.yritys+this.username,o={status:"",userID:this.target.user.id,name:this.target.user.username,room:e};this.handleInitChat(),this.$emit("client:confirmed_provider",this.target.id,t,o)}const s=this.target.user.id;this.$emit("booking:update",t),fe.Z.emit("accept provider",{id:s,booking:t}),this.$router.push("/received")},async outFromMarkerPanel(){this.isTargetSelected=!1,this.noSelectUser(),window.localStorage.removeItem("mapSearchProData");const e=await ge.Z.getProviders();null!==e&&this.otherUserLocations(e,this.currentProfession,this.distBtw)},closeMapChat(){this.isMapChat=!1},async returnToMainPanel(){this.isMainPanel=!0,window.localStorage.removeItem("mapSearchData"),this.noSelectUser()},closeMainPanel(){this.isMainPanel=!1,this.noSelectUser(),console.log("Close main panel")},async showClientLocationOnTheMap(e,t){console.log("Current distance herexx  "+t);const o=await ge.Z.getProviders();null!==o&&this.otherUserLocations(o,e,t)},identifyProfText(){this.countOfSelectedProfessional>1?this.professional="ammattilaista":this.professional="ammattilainen"}}},ke=o(89);const ve=(0,ke.Z)(we,[["render",re]]);var _e=ve}}]);
//# sourceMappingURL=7.b1a4f9f4.js.map