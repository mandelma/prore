"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[925],{1840:function(e,t,o){var i=o(3396);let l="";const a=()=>{var e=new google.maps.LatLng(60.233093,24.7531362),t=new google.maps.LatLng(60.2767265,24.8575089),o=new google.maps.DistanceMatrixService;o.getDistanceMatrix({origins:[e],destinations:[t],travelMode:"DRIVING",unitSystem:google.maps.UnitSystem.METRIC,durationInTraffic:!0,avoidHighways:!1,avoidTolls:!1},n)},n=(e,t)=>{if(t===google.maps.DistanceMatrixStatus.OK&&"OK"===t)return console.log("Distance "+e.rows[0].elements[0].distance.text),l=e.rows[0].elements[0].distance.text,"aaaaaaaaaaaaa";console.log("Error:",t),alert(t)},s=()=>(console.log("Is it working??"+l),(0,i.Wm)("div",null,[(0,i.Uk)("Hiiii")])),r=()=>{var e=new google.maps.LatLng(60.233093,24.7531362),t=new google.maps.LatLng(60.2767265,24.8575089);return(google.maps.geometry.spherical.computeDistanceBetween(e,t)/1e3).toFixed(2)};t.Z={distance:a,test:s,theDist:r}},2283:function(e,t,o){o(4161)},3998:function(e,t){const o=[{label:"Hitsaaja",value:"1"},{label:"Putkimies",value:"2"},{label:"Sähkömies",value:"3"}],i=[{label:"Siivooja",value:"4"}],l=[{group:"Rakennus",options:o},{group:"Kiinteistöala",options:i}];t.Z=l},3925:function(e,t,o){o.r(t),o.d(t,{default:function(){return ae}});var i=o(3396),l=o(7139),a=o(9242);const n={style:{display:"flex","justify-content":"right"}},s=(0,i._)("i",{class:"fas fa-compress-arrows-alt"},null,-1),r={id:"test"},p=(0,i._)("option",{value:""},"Valitse ammattilainen",-1),g=["label"],d=["value"],c=["value"],u=(0,i._)("option",{disabled:"",value:"1"},"1 kilometriä ympärilläsi",-1),m=(0,i._)("option",{value:"2"},"2 km ympärilläsi",-1),h=(0,i._)("option",{value:"3"},"3 km ympärilläsi",-1),y=(0,i._)("option",{value:"4"},"4 km ympärilläsi",-1),f=(0,i._)("option",{value:"5"},"5 km ympärilläsi",-1),w=(0,i._)("option",{value:"6"},"6 km ympärilläsi",-1),v=(0,i._)("option",{value:"7"},"7 km ympärilläsi",-1),k=(0,i._)("option",{value:"8"},"8 km ympärilläsi",-1),_=(0,i._)("option",{value:"9"},"9 km ympärilläsi",-1),M=(0,i._)("option",{value:"10"},"10 km ympärilläsi",-1),L=(0,i._)("option",{value:"20"},"20 km ympärilläsi",-1),P=(0,i._)("option",{value:"30"},"30 km ympärilläsi",-1),B=(0,i._)("option",{value:"40"},"40 km ympärilläsi",-1),x=(0,i._)("option",{value:"50"},"50 km ympärilläsi",-1),D=(0,i._)("option",{value:"60"},"60 km ympärilläsi",-1),C=(0,i._)("option",{value:"70"},"70 km ympärilläsi",-1),b=(0,i._)("option",{value:"80"},"80 km ympärilläsi",-1),T=(0,i._)("option",{value:"90"},"90 km ympärilläsi",-1),z=(0,i._)("option",{value:"100"},"100 km ympärilläsi",-1),I=(0,i._)("option",{value:"200"},"200 km ympärilläsi",-1),S=(0,i._)("option",{value:"300"},"300 km ympärilläsi",-1),O=[u,m,h,y,f,w,v,k,_,M,L,P,B,x,D,C,b,T,z,I,S],A={key:0,class:"map-info-table",style:{"background-color":"white",float:"right",padding:"10px",width:"80%",border:"solid darkgrey"}},E={style:{display:"flex","justify-content":"right"}},U={style:{"font-size":"14px",width:"100%","text-align":"left"}},W=(0,i._)("td",null," Yritys: ",-1),j=(0,i._)("td",null," Y - tunnus: ",-1),F=(0,i._)("td",null," Työalue: ",-1),Z=(0,i._)("td",null," Tuntihinta: ",-1),R=(0,i._)("td",null," palaute: ",-1),V=(0,i._)("tr",null,[(0,i._)("td",{colspan:"2"},[(0,i._)("h3",{style:{"text-align":"center"}},"Chat panel ??"),(0,i._)("p",{style:{color:"red","text-align":"center"}},"Edasi arendamine siit hetkel ebaselge...")])],-1),H={key:1},q={key:0},K=(0,i._)("i",{class:"fas fa-expand-arrows-alt"},null,-1),Y={key:2,style:{"background-color":"white"}},N=(0,i._)("p",{style:{color:"red","font-size":"14px","text-align":"left",padding:"15px"}}," Napsauta merkkiä nähdäksesi palveluntarjoajan! ",-1),G={style:{color:"blue"}},$=(0,i._)("div",{id:"map"},null,-1);function J(e,t,o,u,m,h){const y=(0,i.up)("MDBIcon"),f=(0,i.up)("MDBBtnClose"),w=(0,i.up)("MDBBtn"),v=(0,i.up)("MDBInput"),k=(0,i.up)("MDBBadge"),_=(0,i.up)("MDBContainer");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(_,{style:{position:"relative","z-index":"1",width:"70%","padding-top":"80px",opacity:"0.8"}},{default:(0,i.w5)((()=>[(0,i._)("div",{class:(0,l.C_)({hideMainPanel:!m.isMainPanel}),style:{"background-color":"white",padding:"10px"}},[(0,i._)("div",n,[(0,i.Wm)(y,{size:"lg",style:{padding:"10px"},onClick:h.closeMainPanel},{default:(0,i.w5)((()=>[s])),_:1},8,["onClick"]),(0,i._)("div",null,[(0,i.Wm)(f,{style:{padding:"10px"},size:"lg",onClick:t[0]||(t[0]=t=>e.$router.go(-1))})])]),m.isMainPanel?((0,i.wg)(),(0,i.j4)(w,{key:0,color:"secondary",size:"lg",block:"",onClick:h.receive,style:{position:"relative","z-index":"1",opacity:"1.2","margin-bottom":"10px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" Tee uusi tilaus ")])),_:1},8,["onClick"])):(0,i.kq)("",!0),(0,i._)("div",r,[(0,i.Wm)(v,{label:"Anna osoitteesi kun ei täsmää",modelValue:m.address,"onUpdate:modelValue":t[1]||(t[1]=e=>m.address=e),id:"autocomplite",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"])]),(0,i.wy)((0,i._)("select",{style:{padding:"12px",width:"100%"},id:"listOfProfessionals","onUpdate:modelValue":t[2]||(t[2]=e=>m.prof=e)},[p,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.prodata,(e=>((0,i.wg)(),(0,i.iD)(i.HY,null,[e.group?((0,i.wg)(),(0,i.iD)("optgroup",{label:e.group,key:e.group},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.options,(e=>((0,i.wg)(),(0,i.iD)("option",{value:e.label,key:e.label},(0,l.zw)(e.label),9,d)))),128))],8,g)):((0,i.wg)(),(0,i.iD)("option",{value:e,key:e.value},(0,l.zw)(e.label),9,c))],64)))),256))],512),[[a.bM,m.prof]]),(0,i._)("div",{class:(0,l.C_)({hideDistSelectPanel:!m.isDistSelection}),style:{"padding-top":"10px"}},[(0,i.wy)((0,i._)("select",{style:{padding:"12px",width:"100%"},id:"distance","onUpdate:modelValue":t[3]||(t[3]=e=>m.distBtw=e),onClick:t[4]||(t[4]=(...t)=>e.filterByDistance&&e.filterByDistance(...t))},O,512),[[a.bM,m.distBtw]])],2),m.prof?((0,i.wg)(),(0,i.iD)("h3",{key:1,class:(0,l.C_)({noClients:m.isActiveProffs})}," Ei ammattilaisia vielä! ",2)):(0,i.kq)("",!0)],2),m.isTargetSelected?((0,i.wg)(),(0,i.iD)("div",A,[(0,i._)("div",E,[(0,i._)("p",{style:{"margin-right":"10px","margin-left":"auto","font-size":"15px",padding:"10px",color:"orangered"},onClick:t[5]||(t[5]=(...e)=>h.outFromMarkerPanel&&h.outFromMarkerPanel(...e))},"Valmis")]),(0,i._)("table",U,[(0,i._)("tbody",null,[(0,i._)("tr",null,[W,(0,i._)("td",null,(0,l.zw)(this.target.yritys),1)]),(0,i._)("tr",null,[j,(0,i._)("td",null,(0,l.zw)(this.target.ytunnus),1)]),(0,i._)("tr",null,[F,(0,i._)("td",null,(0,l.zw)(this.target.range?this.target.range:"Palvelun tarjous vain paikalla!"),1)]),(0,i._)("tr",null,[Z,(0,i._)("td",null,(0,l.zw)(this.target.priceByHour)+" Euroa ",1)]),(0,i._)("tr",null,[R,(0,i._)("td",null,[(0,i.Wm)(y,{style:{padding:"10px",cursor:"pointer"},class:"far fa-smile",size:"lg",onClick:e.negative},null,8,["onClick"]),(0,i.Wm)(k,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,l.zw)(this.target.rating.positive),1)])),_:1}),(0,i.Wm)(y,{style:{padding:"10px",cursor:"pointer"},class:"far fa-frown",size:"lg",onClick:e.negative},null,8,["onClick"]),(0,i.Wm)(k,{color:"danger",class:"translate-middle p-1",pill:"",notification:""},{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,l.zw)(this.target.rating.negative),1)])),_:1})])]),V])])])):(0,i.kq)("",!0),m.isTargetSelected?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",H,[m.isMainPanel?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",q,[(0,i.Wm)(y,{size:"2x",style:{float:"right",padding:"10px"},onClick:h.returnToMainPanel},{default:(0,i.w5)((()=>[K])),_:1},8,["onClick"])]))])),!m.isMainPanel&&m.countOfSelectedProfessional>0&&!m.isTargetSelected?((0,i.wg)(),(0,i.iD)("div",Y,[N,(0,i._)("p",G,(0,l.zw)(m.countOfSelectedProfessional+" "+m.professional)+" tarjoaa palvelua ",1)])):(0,i.kq)("",!0)])),_:1}),$])}o(7658);var Q=o(4161),X=(o(5800),o(9398)),ee=o(4313),te=(o(1840),o(2283),o(3998)),oe={name:"recipient-public",props:{userIsProvider:Object,isProviderLoggedIn:Boolean},components:{MDBContainer:ee.L5,MDBInput:ee.u2,MDBBtn:ee.$v,MDBBtnClose:ee.Ok,MDBRow:ee.uZ,MDBCol:ee.TK,MDBIcon:ee.vm,MDBBadge:ee.m_},data(){return{target:{},isTargetSelected:!1,isMainPanel:!0,prof:"",userId:null,providerId:null,address:null,myLat:null,mylng:null,countOfSelectedProfessional:0,isActiveProffs:!1,isDistSelection:!1,professional:"",currentProfession:"",distBtw:1,prodata:te.Z}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.userId=t.id}this.resizeMap();new google.maps.Marker({icon:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"});this.userCurrentLocation();const t=document.getElementById("listOfProfessionals");t.addEventListener("change",(e=>{this.isDistSelection=!0,this.currentProfession=e.target.value,this.showClientLocationOnTheMap(e.target.value,this.distBtw)}));const o=document.getElementById("distance");o.addEventListener("change",(e=>{this.distBtw=parseFloat(e.target.value),console.log("+++++++++++ "+this.countOfSelectedProfessional>0),this.showClientLocationOnTheMap(this.currentProfession,this.distBtw)}));const i=document.getElementById("autocomplite"),l={lat:50.064192,lng:-130.605469},a={north:l.lat+.1,south:l.lat-.1,east:l.lng+.1,west:l.lng-.1},n={bounds:a,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},s=new google.maps.places.Autocomplete(i,n);s.addListener("place_changed",(()=>{let e=s.getPlace();this.myLat=e.geometry.location.lat(),this.myLng=e.geometry.location.lng(),this.getAddressFrom(e.geometry.location.lat(),e.geometry.location.lng()),this.address=e.formatted_address,console.log(e)}))},methods:{resizeMap(){var e=document.getElementById("map");e.style.height="100%",e.style.width="100%"},receive(){this.$router.push("/rf")},userCurrentLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:o}=e.coords;this.myLat=t,this.myLng=o,this.showUserLocationOnTheMap(t,o)}))},pinSymbol(e){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",fillColor:e,fillOpacity:1,strokeColor:"#000",strokeWeight:2,scale:1}},showUserLocationOnTheMap(e,t){new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP,accuracy:50})},getAddressFrom(e,t){Q.Z.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key=AIzaSyAQPLmTMlmSTp4spxPwvaJLnzYnkLmZ9zc").then((o=>{if(o.data.error_message)this.error=o.data.error_message,console.log(o.data.error_message);else{new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log(o.data.results.results[0].formatted_address)}})).catch((e=>{this.error=e.message,console.log(e.message)}))},distanceBtw(e,t,o,i){var l=new google.maps.LatLng(e,t),a=new google.maps.LatLng(o,i);return(google.maps.geometry.spherical.computeDistanceBetween(l,a)/1e3).toFixed(2)},otherUserLocations(e,t,o){let i=new google.maps.Map(document.getElementById("map"),{zoom:9,center:new google.maps.LatLng(this.myLat,this.myLng),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log("Users count: "+e.length),console.log("Current distance "+o);let l=0;if(e.length>0){for(let a=0;a<e.length;a++){this.myLat,this.myLng;e[a].profession.forEach((n=>{if(n===t){console.log("Pro "+n.yritys);e[a].latitude,e[a].longitude;if(console.log("Distance btw "+this.distanceBtw(this.myLat,this.myLng,e[a].latitude,e[a].longitude)),this.isActiveProffs=!0,this.distanceBtw(this.myLat,this.myLng,e[a].latitude,e[a].longitude)<=o){let t;l++,t=this.isTargetSelected?new google.maps.Marker({position:new google.maps.LatLng(e[a].latitude,e[a].longitude),accuracy:50,map:i,icon:this.pinSymbol("orange"),label:{color:"#f75959",fontWeight:"bold",fontSize:"14px",text:"TMI "+e[a].yritys}}):new google.maps.Marker({position:new google.maps.LatLng(e[a].latitude,e[a].longitude),accuracy:50,map:i}),this.target=e[a],window.myGlobalFunction=this.openMarker;const o=new google.maps.InfoWindow({});google.maps.event.addListener(t,"click",(function(){o.open(i,t),o.setContent("<div class='map-info-window'><p>"+e[a].yritys+'</p><p style="color: red; " onclick="myGlobalFunction()">Tiedot</p></div>')}))}}}))}l>0?(this.isActiveProffs=!0,this.isMainPanel=!1):this.isActiveProffs=!1,this.countOfSelectedProfessional=l,console.log("countxx "+l),this.identifyProfText()}},async openMarker(){console.log(this.target.user.firstName+" Marker is opened!!"),this.isTargetSelected=!0;const e=await X.Z.getProviders();null!==e&&this.otherUserLocations(e,this.currentProfession,this.distBtw)},async outFromMarkerPanel(){this.isTargetSelected=!1;const e=await X.Z.getProviders();null!==e&&this.otherUserLocations(e,this.currentProfession,this.distBtw)},async returnToMainPanel(){this.isMainPanel=!0},closeMainPanel(){this.isMainPanel=!1,console.log("Close main panel")},renderClients(e){console.log("Event value "+e.target.value),e.target.value&&this.showClientLocationOnTheMap(e.target.value),this.prof=e.target.value,e.target.value=""},async showClientLocationOnTheMap(e,t){console.log("Current distance herexx  "+t);const o=await X.Z.getProviders();null!==o&&this.otherUserLocations(o,e,t)},identifyProfText(){this.countOfSelectedProfessional>1?this.professional="ammattilaista":this.professional="ammattilainen"}}},ie=o(89);const le=(0,ie.Z)(oe,[["render",J]]);var ae=le}}]);
//# sourceMappingURL=925.a7948125.js.map