"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[858],{1840:function(e,t,o){var s=o(3396);let l="";const i=()=>{var e=new google.maps.LatLng(60.233093,24.7531362),t=new google.maps.LatLng(60.2767265,24.8575089),o=new google.maps.DistanceMatrixService;o.getDistanceMatrix({origins:[e],destinations:[t],travelMode:"DRIVING",unitSystem:google.maps.UnitSystem.METRIC,durationInTraffic:!0,avoidHighways:!1,avoidTolls:!1},a)},a=(e,t)=>{if(t===google.maps.DistanceMatrixStatus.OK&&"OK"===t)return console.log("Distance "+e.rows[0].elements[0].distance.text),l=e.rows[0].elements[0].distance.text,"aaaaaaaaaaaaa";console.log("Error:",t),alert(t)},n=()=>(console.log("Is it working??"+l),(0,s.Wm)("div",null,[(0,s.Uk)("Hiiii")])),r=()=>{var e=new google.maps.LatLng(60.233093,24.7531362),t=new google.maps.LatLng(60.2767265,24.8575089);return(google.maps.geometry.spherical.computeDistanceBetween(e,t)/1e3).toFixed(2)};t.Z={distance:i,test:n,theDist:r}},2283:function(e,t,o){o(4161)},3998:function(e,t){const o=[{label:"Hitsaaja",value:"1"},{label:"Putkimies",value:"2"},{label:"Sähkömies",value:"3"}],s=[{label:"Siivooja",value:"4"}],l=[{group:"Rakennus",options:o},{group:"Kiinteistöala",options:s}];t.Z=l},2858:function(e,t,o){o.r(t),o.d(t,{default:function(){return de}});var s=o(3396),l=o(7139),i=o(9242);const a={style:{display:"flex","justify-content":"right"}},n=(0,s._)("i",{class:"fas fa-compress-arrows-alt"},null,-1),r={id:"test"},c=(0,s._)("option",{value:""},"Valitse ammattilainen",-1),d=["label"],g=["value"],p=["value"],u=(0,s._)("option",{disabled:"",value:"1"},"1 kilometriä ympärilläsi",-1),m=(0,s._)("option",{value:"2"},"2 km ympärilläsi",-1),h=(0,s._)("option",{value:"3"},"3 km ympärilläsi",-1),y=(0,s._)("option",{value:"4"},"4 km ympärilläsi",-1),f=(0,s._)("option",{value:"5"},"5 km ympärilläsi",-1),w=(0,s._)("option",{value:"6"},"6 km ympärilläsi",-1),v=(0,s._)("option",{value:"7"},"7 km ympärilläsi",-1),k=(0,s._)("option",{value:"8"},"8 km ympärilläsi",-1),_=(0,s._)("option",{value:"9"},"9 km ympärilläsi",-1),M=(0,s._)("option",{value:"10"},"10 km ympärilläsi",-1),P=(0,s._)("option",{value:"20"},"20 km ympärilläsi",-1),L=(0,s._)("option",{value:"30"},"30 km ympärilläsi",-1),C=(0,s._)("option",{value:"40"},"40 km ympärilläsi",-1),D=(0,s._)("option",{value:"50"},"50 km ympärilläsi",-1),B=(0,s._)("option",{value:"60"},"60 km ympärilläsi",-1),x=(0,s._)("option",{value:"70"},"70 km ympärilläsi",-1),S=(0,s._)("option",{value:"80"},"80 km ympärilläsi",-1),b=(0,s._)("option",{value:"90"},"90 km ympärilläsi",-1),I=(0,s._)("option",{value:"100"},"100 km ympärilläsi",-1),T=(0,s._)("option",{value:"200"},"200 km ympärilläsi",-1),z=(0,s._)("option",{value:"300"},"300 km ympärilläsi",-1),O=[u,m,h,y,f,w,v,k,_,M,P,L,C,D,B,x,S,b,I,T,z],U={key:0,style:{"background-color":"white",padding:"10px",width:"370px",border:"solid darkgrey"}},A={key:1,class:"map-info-table",style:{"background-color":"white",padding:"10px",width:"95%",border:"solid darkgrey"}},E={style:{display:"flex","justify-content":"right"}},W={style:{"font-size":"14px",width:"100%","text-align":"left"}},Z=(0,s._)("td",null," Yritys: ",-1),j=(0,s._)("td",null," Y - tunnus: ",-1),F=(0,s._)("td",null," Työalue: ",-1),R=(0,s._)("td",null," Tuntihinta: ",-1),V=(0,s._)("td",null," palaute: ",-1),q={key:0,colspan:"2"},H=(0,s._)("p",{style:{color:"red","text-align":"center"}},"Arendamine pooleli...",-1),$={style:{color:"red"}},K={key:2},Y={key:0},N=(0,s._)("i",{class:"fas fa-expand-arrows-alt"},null,-1),G={key:3,style:{"background-color":"white"}},J=(0,s._)("p",{style:{color:"red","font-size":"14px","text-align":"left",padding:"15px"}}," Napsauta merkkiä nähdäksesi palveluntarjoajan! ",-1),Q={style:{color:"blue"}},X=(0,s._)("div",{id:"map"},null,-1);function ee(e,t,o,u,m,h){const y=(0,s.up)("MDBIcon"),f=(0,s.up)("MDBBtnClose"),w=(0,s.up)("MDBBtn"),v=(0,s.up)("MDBInput"),k=(0,s.up)("chat-panel"),_=(0,s.up)("MDBBadge"),M=(0,s.up)("MDBContainer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(M,{style:{position:"relative","z-index":"1",width:"80%","padding-top":"80px",opacity:"0.8"}},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,l.C_)({hideMainPanel:!m.isMainPanel}),style:{"background-color":"white",padding:"10px"}},[(0,s._)("div",a,[(0,s.Wm)(y,{size:"lg",style:{padding:"10px"},onClick:h.closeMainPanel},{default:(0,s.w5)((()=>[n])),_:1},8,["onClick"]),(0,s._)("div",null,[(0,s.Wm)(f,{style:{padding:"10px"},size:"lg",onClick:t[0]||(t[0]=t=>e.$router.go(-1))})])]),m.isMainPanel?((0,s.wg)(),(0,s.j4)(w,{key:0,color:"secondary",size:"lg",block:"",onClick:h.receive,style:{position:"relative","z-index":"1",opacity:"1.2","margin-bottom":"10px"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" Tee uusi tilaus ")])),_:1},8,["onClick"])):(0,s.kq)("",!0),(0,s._)("div",r,[(0,s.Wm)(v,{label:"Anna osoitteesi kun ei täsmää",modelValue:m.address,"onUpdate:modelValue":t[1]||(t[1]=e=>m.address=e),id:"autocomplite",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"])]),(0,s.wy)((0,s._)("select",{style:{padding:"12px",width:"100%"},id:"listOfProfessionals","onUpdate:modelValue":t[2]||(t[2]=e=>m.prof=e)},[c,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(m.prodata,(e=>((0,s.wg)(),(0,s.iD)(s.HY,null,[e.group?((0,s.wg)(),(0,s.iD)("optgroup",{label:e.group,key:e.group},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.options,(e=>((0,s.wg)(),(0,s.iD)("option",{value:e.label,key:e.label},(0,l.zw)(e.label),9,g)))),128))],8,d)):((0,s.wg)(),(0,s.iD)("option",{value:e,key:e.value},(0,l.zw)(e.label),9,p))],64)))),256))],512),[[i.bM,m.prof]]),(0,s._)("div",{class:(0,l.C_)({hideDistSelectPanel:!m.isDistSelection}),style:{"padding-top":"10px"}},[(0,s.wy)((0,s._)("select",{style:{padding:"12px",width:"100%"},id:"distance","onUpdate:modelValue":t[3]||(t[3]=e=>m.distBtw=e),onClick:t[4]||(t[4]=(...t)=>e.filterByDistance&&e.filterByDistance(...t))},O,512),[[i.bM,m.distBtw]])],2),m.prof?((0,s.wg)(),(0,s.iD)("h3",{key:1,class:(0,l.C_)({noClients:m.isActiveProffs})}," Ei ammattilaisia vielä! ",2)):(0,s.kq)("",!0)],2),m.isMapChat?((0,s.wg)(),(0,s.iD)("div",U,[(0,s._)("p",{style:{float:"right",color:"limegreen"},onClick:t[5]||(t[5]=(...e)=>h.closeMapChat&&h.closeMapChat(...e))},"Valmis"),(0,s.Wm)(k,{chatusers:o.chatusers,messages:o.messages,selecteduser:o.selecteduser,"onSelect:user":h.selectUser,onNoSelected:h.noSelectUser,"onOn:message":h.onMessage},null,8,["chatusers","messages","selecteduser","onSelect:user","onNoSelected","onOn:message"])])):m.isTargetSelected&&!m.isMapChat?((0,s.wg)(),(0,s.iD)("div",A,[(0,s._)("div",E,[(0,s._)("p",{style:{"font-size":"15px",padding:"10px",color:"orangered"},onClick:t[6]||(t[6]=(...e)=>h.outFromMarkerPanel&&h.outFromMarkerPanel(...e))},"Valmis")]),(0,s._)("table",W,[(0,s._)("tbody",null,[(0,s._)("tr",null,[Z,(0,s._)("td",null,(0,l.zw)(this.target.yritys),1)]),(0,s._)("tr",null,[j,(0,s._)("td",null,(0,l.zw)(this.target.ytunnus),1)]),(0,s._)("tr",null,[F,(0,s._)("td",null,(0,l.zw)(this.target.range?this.target.range:"Palvelun tarjous vain paikalla!"),1)]),(0,s._)("tr",null,[R,(0,s._)("td",null,(0,l.zw)(this.target.priceByHour)+" Euroa ",1)]),(0,s._)("tr",null,[V,(0,s._)("td",null,[(0,s.Wm)(y,{style:{padding:"10px",cursor:"pointer"},class:"far fa-smile",size:"lg",onClick:e.negative},null,8,["onClick"]),(0,s.Wm)(_,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,s.w5)((()=>[(0,s._)("p",null,(0,l.zw)(this.target.rating.positive),1)])),_:1}),(0,s.Wm)(y,{style:{padding:"10px",cursor:"pointer"},class:"far fa-frown",size:"lg",onClick:e.negative},null,8,["onClick"]),(0,s.Wm)(_,{color:"danger",class:"translate-middle p-1",pill:"",notification:""},{default:(0,s.w5)((()=>[(0,s._)("p",null,(0,l.zw)(this.target.rating.negative),1)])),_:1})])]),(0,s._)("tr",null,[o.selecteduser?((0,s.wg)(),(0,s.iD)("td",q,[(0,s.Wm)(w,{block:"",color:"secondary",size:"lg",onClick:t[7]||(t[7]=e=>m.isMapChat=!0)},{default:(0,s.w5)((()=>[(0,s.Uk)("Chattailemaan")])),_:1}),H])):(0,s.kq)("",!0)])])])])):(0,s.kq)("",!0),(0,s._)("p",$,"selecteduser "+(0,l.zw)(o.selecteduser),1),m.isTargetSelected?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",K,[m.isMainPanel?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",Y,[(0,s.Wm)(y,{size:"2x",style:{float:"right",padding:"10px"},onClick:h.returnToMainPanel},{default:(0,s.w5)((()=>[N])),_:1},8,["onClick"])]))])),!m.isMainPanel&&m.countOfSelectedProfessional>0&&!m.isTargetSelected?((0,s.wg)(),(0,s.iD)("div",G,[J,(0,s._)("p",Q,(0,l.zw)(m.countOfSelectedProfessional+" "+m.professional)+" tarjoaa palvelua ",1)])):(0,s.kq)("",!0)])),_:1}),X])}o(7658);var te=o(4161),oe=(o(5800),o(9398)),se=o(4313),le=(o(1840),o(2283),o(3998)),ie=o(9879),ae=o(4058),ne={name:"recipient-public",props:{userIsProvider:Object,selecteduser:null,chatusers:Array,messages:Array,isProviderLoggedIn:Boolean},components:{chatPanel:ie["default"],MDBContainer:se.L5,MDBInput:se.u2,MDBBtn:se.$v,MDBBtnClose:se.Ok,MDBRow:se.uZ,MDBCol:se.TK,MDBIcon:se.vm,MDBBadge:se.m_},data(){return{target:{},isTargetSelected:!1,isMainPanel:!0,prof:"",username:null,userId:null,providerId:null,address:null,myLat:null,mylng:null,countOfSelectedProfessional:0,isActiveProffs:!1,isDistSelection:!1,professional:"",currentProfession:"",distBtw:1,prodata:le.Z,room:null,isChatPanel:!0,isMapChat:!1,providers:[],selectedProPosition:null}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.username=t.username,this.userId=t.id}this.resizeMap();new google.maps.Marker({icon:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"});this.userCurrentLocation();const t=document.getElementById("listOfProfessionals");t.addEventListener("change",(e=>{this.isDistSelection=!0,this.currentProfession=e.target.value,this.showClientLocationOnTheMap(e.target.value,this.distBtw)}));const o=document.getElementById("distance");o.addEventListener("change",(e=>{this.distBtw=parseFloat(e.target.value),console.log("+++++++++++ "+this.countOfSelectedProfessional>0),this.showClientLocationOnTheMap(this.currentProfession,this.distBtw)}));const s=document.getElementById("autocomplite"),l={lat:50.064192,lng:-130.605469},i={north:l.lat+.1,south:l.lat-.1,east:l.lng+.1,west:l.lng-.1},a={bounds:i,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},n=new google.maps.places.Autocomplete(s,a);n.addListener("place_changed",(()=>{let e=n.getPlace();this.myLat=e.geometry.location.lat(),this.myLng=e.geometry.location.lng(),this.getAddressFrom(e.geometry.location.lat(),e.geometry.location.lng()),this.address=e.formatted_address,console.log(e)}))},methods:{selectUser(e){this.$emit("select:user",e)},noSelectUser(){this.$emit("noSelected")},onMessage(e,t){this.$emit("on:message",e,t)},resizeMap(){var e=document.getElementById("map");e.style.height="100%",e.style.width="100%"},receive(){this.$router.push("/rf")},userCurrentLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:o}=e.coords;this.myLat=t,this.myLng=o,this.showUserLocationOnTheMap(t,o)}))},pinSymbol(e){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",fillColor:e,fillOpacity:1,strokeColor:"#000",strokeWeight:2,scale:1}},showUserLocationOnTheMap(e,t){new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP,accuracy:50})},getAddressFrom(e,t){te.Z.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key=AIzaSyAQPLmTMlmSTp4spxPwvaJLnzYnkLmZ9zc").then((o=>{if(o.data.error_message)this.error=o.data.error_message,console.log(o.data.error_message);else{new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log(o.data.results.results[0].formatted_address)}})).catch((e=>{this.error=e.message,console.log(e.message)}))},distanceBtw(e,t,o,s){var l=new google.maps.LatLng(e,t),i=new google.maps.LatLng(o,s);return(google.maps.geometry.spherical.computeDistanceBetween(l,i)/1e3).toFixed(2)},otherUserLocations(e,t,o){let s=!1,l=new google.maps.Map(document.getElementById("map"),{zoom:9,center:new google.maps.LatLng(this.myLat,this.myLng),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log("Users count: "+e.length),console.log("Current distance "+o);let i=0;if(e.length>0){this.target={};for(let a=0;a<e.length;a++){console.log("------------ "+e[a].yritys);this.myLat,this.myLng;e[a].profession.forEach((n=>{if(n===t){console.log("Pro "+n.yritys);e[a].latitude,e[a].longitude;if(console.log("Distance btw "+this.distanceBtw(this.myLat,this.myLng,e[a].latitude,e[a].longitude)),this.isActiveProffs=!0,this.distanceBtw(this.myLat,this.myLng,e[a].latitude,e[a].longitude)<=o){let t;i++,t=this.isTargetSelected?new google.maps.Marker({position:new google.maps.LatLng(e[a].latitude,e[a].longitude),accuracy:50,map:l,icon:this.pinSymbol("orange"),label:{color:"#f75959",fontWeight:"bold",fontSize:"14px",text:"TMI "+e[a].yritys}}):new google.maps.Marker({position:new google.maps.LatLng(e[a].latitude,e[a].longitude),accuracy:50,map:l}),window.myGlobalFunction=this.openMarker;const o=new google.maps.InfoWindow({});google.maps.event.addListener(t,"click",(function(){console.log("POOOOS "+a);let i=a;s&&s.close(),s=o,o.open(l,t),o.setContent("<div  class='map-info-window'><p style=\"color: green; \">"+e[a].yritys+'</p><p style="color: red; " onclick="myGlobalFunction('+i+' )">Tiedot</p></div>')})),console.log("Prev infowondow "+s)}}}))}i>0?(this.isActiveProffs=!0,this.isMainPanel=!1):this.isActiveProffs=!1,this.countOfSelectedProfessional=i,console.log("countxx "+i),this.identifyProfText()}},async openMarker(e){console.log("Profession "+this.currentProfession);const t=[this.currentProfession],o=await oe.Z.getProvidersMatchingByProfession({result:t});let s=[];console.log("Matching pro length "+o.length),o.forEach((e=>{console.log("Results: "+e.user.id);let t=parseInt(this.distanceBtw(this.myLat,this.myLng,e.latitude,e.longitude)).toFixed(0);s=s.concat({id:e.user.id,dist:t,pro:this.currentProfession})})),ae.Z.emit("map search report",s);const l=await oe.Z.getProviders();if(l&&(console.log("watcher position "+this.myLat+" / "+this.myLng),this.target=l[e],this.isTargetSelected=!0),l[e].user.username!==this.username){const t=l[e].yritys+this.username;console.log("Username in map: "+l[e].user.username),console.log("Room in map "+t),ae.Z.emit("create room users",{room:t,username:this.username,providerUsername:l[e].user.username,providerID:l[e].user.id});const o={room:t,userID:l[e].user.id,username:l[e].yritys};this.$emit("chatCredentials",o)}},async outFromMarkerPanel(){this.isTargetSelected=!1,this.noSelectUser();const e=await oe.Z.getProviders();null!==e&&this.otherUserLocations(e,this.currentProfession,this.distBtw)},closeMapChat(){this.isMapChat=!1},async returnToMainPanel(){this.isMainPanel=!0,this.noSelectUser()},closeMainPanel(){this.isMainPanel=!1,this.noSelectUser(),console.log("Close main panel")},renderClients(e){console.log("Event value "+e.target.value),e.target.value&&this.showClientLocationOnTheMap(e.target.value),this.prof=e.target.value,e.target.value=""},async showClientLocationOnTheMap(e,t){console.log("Current distance herexx  "+t);const o=await oe.Z.getProviders();null!==o&&this.otherUserLocations(o,e,t)},identifyProfText(){this.countOfSelectedProfessional>1?this.professional="ammattilaista":this.professional="ammattilainen"}}},re=o(89);const ce=(0,re.Z)(ne,[["render",ee]]);var de=ce}}]);
//# sourceMappingURL=858.2e6039f2.js.map