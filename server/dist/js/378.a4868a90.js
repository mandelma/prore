"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[378],{2283:function(e,t,o){o(4161)},3998:function(e,t){const o=[{label:"Hitsaaja"},{label:"Putkimies"},{label:"Sähkömies"}],i=[{label:"Siivooja",value:"4"}],l=[{label:"Kirurgi",value:"5"},{label:"Psykiatri",value:"6"}],a=[{label:"Kampaaja",value:"7"},{label:"Parturi",value:"8"}],s=[{group:"Rakennus",options:o},{group:"Kiinteistöala",options:i},{group:"Terveydenala",options:l},{group:"Kauneusala",options:a}];t.Z=s},3378:function(e,t,o){o.r(t),o.d(t,{default:function(){return F}});var i=o(3396),l=o(7139),a=o(9242);const s={id:"test",style:{"background-color":"white"}},n={class:"ui large segment form"},r={class:"field"},p=(0,i._)("option",{value:""},"Valitse ammattisi",-1),m=["label"],g=["value"],u=["value"],c=(0,i._)("option",{disabled:"",value:"1"},"1 kilometriä ympärilläsi",-1),d=(0,i._)("option",{value:"2"},"2 km ympärilläsi",-1),h=(0,i._)("option",{value:"3"},"3 km ympärilläsi",-1),v=(0,i._)("option",{value:"4"},"4 km ympärilläsi",-1),y=(0,i._)("option",{value:"5"},"5 km ympärilläsi",-1),w=(0,i._)("option",{value:"6"},"6 km ympärilläsi",-1),k=(0,i._)("option",{value:"7"},"7 km ympärilläsi",-1),f=(0,i._)("option",{value:"8"},"8 km ympärilläsi",-1),_=(0,i._)("option",{value:"9"},"9 km ympärilläsi",-1),C=(0,i._)("option",{value:"10"},"10 km ympärilläsi",-1),L=(0,i._)("option",{value:"20"},"20 km ympärilläsi",-1),b=(0,i._)("option",{value:"30"},"30 km ympärilläsi",-1),B=(0,i._)("option",{value:"40"},"40 km ympärilläsi",-1),M=(0,i._)("option",{value:"50"},"50 km ympärilläsi",-1),D=(0,i._)("option",{value:"60"},"60 km ympärilläsi",-1),I=(0,i._)("option",{value:"70"},"70 km ympärilläsi",-1),O=(0,i._)("option",{value:"80"},"80 km ympärilläsi",-1),A=(0,i._)("option",{value:"90"},"90 km ympärilläsi",-1),z=(0,i._)("option",{value:"100"},"100 km ympärilläsi",-1),P=(0,i._)("option",{value:"200"},"200 km ympärilläsi",-1),T=(0,i._)("option",{value:"300"},"300 km ympärilläsi",-1),E=[c,d,h,v,y,w,k,f,_,C,L,b,B,M,D,I,O,A,z,P,T],S=(0,i._)("section",{id:"map"},null,-1);function U(e,t,o,c,d,h){const v=(0,i.up)("MDBInput"),y=(0,i.up)("MDBBtn"),w=(0,i.up)("MDBContainer");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(w,{style:{position:"relative","z-index":"1",opacity:"0.8","margin-top":"60px"}},{default:(0,i.w5)((()=>[(0,i._)("div",s,[(0,i.Wm)(v,{label:"Anna osoitteesi",modelValue:d.address,"onUpdate:modelValue":t[0]||(t[0]=e=>d.address=e),id:"autocomplite",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"])]),(0,i._)("div",n,[(0,i._)("div",r,[(0,i.wy)((0,i._)("select",{id:"listOfProfessions","onUpdate:modelValue":t[1]||(t[1]=e=>d.prof=e)},[p,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.prodata,(e=>((0,i.wg)(),(0,i.iD)(i.HY,null,[e.group?((0,i.wg)(),(0,i.iD)("optgroup",{label:e.group,key:e.group},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.options,(e=>((0,i.wg)(),(0,i.iD)("option",{value:e.label,key:e.label},(0,l.zw)(e.label),9,g)))),128))],8,m)):((0,i.wg)(),(0,i.iD)("option",{value:e,key:e.value},(0,l.zw)(e.label),9,u))],64)))),256))],512),[[a.bM,d.prof]])]),(0,i._)("div",{class:(0,l.C_)({hideDistSelectPanel:!d.isDistSelection})},[(0,i.wy)((0,i._)("select",{id:"distanceOfClient","onUpdate:modelValue":t[2]||(t[2]=e=>d.distBtw=e)},E,512),[[a.bM,d.distBtw]])],2),(0,i._)("h3",{class:(0,l.C_)({activeClients:!d.isActiveClients})},(0,l.zw)(d.countOfSelectedClients+" "+d.client)+" tarvitsee palveluasi ",3),d.prof?((0,i.wg)(),(0,i.iD)("h3",{key:0,class:(0,l.C_)({noClients:d.isActiveClients})}," Ei asiakkaita vielä! ",2)):(0,i.kq)("",!0)]),(0,i.Wm)(y,{color:"dark",size:"lg",block:"",onClick:h.provide,style:{position:"relative","z-index":"1",opacity:"1.2"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" Tarjoa omaa palvelua ")])),_:1},8,["onClick"]),(0,i.Wm)(y,{color:"danger",size:"lg",block:"",onClick:t[3]||(t[3]=t=>e.$router.go(-1)),style:{position:"relative","z-index":"1",opacity:"1.0"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" Poistu ")])),_:1})])),_:1}),S])}o(7658);var x=o(4161),K=o(5800),j=(o(9398),o(4313)),R=o(3998),V=(o(2283),{name:"provider-public",props:{userIsProvider:Object,isProviderLoggedIn:Boolean},components:{MDBContainer:j.L5,MDBInput:j.u2,MDBBtn:j.$v},data(){return{prof:"",userId:null,providerId:null,address:null,myLat:null,mylng:null,countOfSelectedClients:0,isActiveClients:!1,client:"",isDistSelection:!1,distBtw:1,currentProfessional:"",prodata:R.Z}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.userId=t.id}this.resizeMap();new google.maps.Marker({icon:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"});this.userCurrentLocation();const t=document.getElementById("listOfProfessions");t.addEventListener("change",(e=>{this.isDistSelection=!0,this.currentProfessional=e.target.value,this.showClientLocationOnTheMap(e.target.value,this.distBtw)}));const o=document.getElementById("distanceOfClient");o.addEventListener("change",(e=>{this.distBtw=parseFloat(e.target.value),console.log("Current distance in beginning "+this.distBtw),this.showClientLocationOnTheMap(this.currentProfessional,this.distBtw)}));const i=document.getElementById("autocomplite"),l={lat:50.064192,lng:-130.605469},a={north:l.lat+.1,south:l.lat-.1,east:l.lng+.1,west:l.lng-.1},s={bounds:a,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},n=new google.maps.places.Autocomplete(i,s);n.addListener("place_changed",(()=>{let e=n.getPlace();this.myLat=e.geometry.location.lat(),this.myLng=e.geometry.location.lng(),this.getAddressFrom(e.geometry.location.lat(),e.geometry.location.lng()),this.address=e.formatted_address,console.log(e)}))},methods:{resizeMap(){var e=document.getElementById("map");e.style.height="100%",e.style.width="100%"},provide(){this.$router.push("/provider-form")},userCurrentLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:o}=e.coords;this.myLat=t,this.myLng=o,this.showUserLocationOnTheMap(t,o)}))},pinSymbol(e){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",fillColor:e,fillOpacity:1,strokeColor:"#000",strokeWeight:2,scale:1}},showUserLocationOnTheMap(e,t){new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP,accuracy:50})},getAddressFrom(e,t){x.Z.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key=AIzaSyBDA2EBoGezJx51wQtxoW3Ecq5Ql8CCAiE").then((o=>{if(o.data.error_message)this.error=o.data.error_message,console.log(o.data.error_message);else{new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log(o.data.results.results[0].formatted_address)}})).catch((e=>{this.error=e.message,console.log(e.message)}))},distanceBtw(e,t,o,i){var l=new google.maps.LatLng(e,t),a=new google.maps.LatLng(o,i);return(google.maps.geometry.spherical.computeDistanceBetween(l,a)/1e3).toFixed(2)},otherUserLocations(e,t,o){let i=new google.maps.Map(document.getElementById("map"),{zoom:9,center:new google.maps.LatLng(this.myLat,this.myLng),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log("Users count: "+e.length),console.log("Current distance "+o);let l=0;if(e.length>0){for(let a=0;a<e.length;a++)e[a].professional.forEach((s=>{s===t&&(console.log("Distance btw "+this.distanceBtw(this.myLat,this.myLng,e[a].latitude,e[a].longitude)),this.isActiveClients=!0,this.distanceBtw(this.myLat,this.myLng,e[a].latitude,e[a].longitude)<=o&&(l++,new google.maps.Marker({position:new google.maps.LatLng(e[a].latitude,e[a].longitude),map:i})))}));this.isActiveClients=l>0,this.countOfSelectedClients=l,this.identifyClientText()}},renderClients(e){console.log("Event value "+e.target.value),e.target.value&&this.showClientLocationOnTheMap(e.target.value),this.prof=e.target.value,e.target.value=""},async showClientLocationOnTheMap(e,t){const o=await K.Z.getRecipients();null!==o&&this.otherUserLocations(o,e,t)},identifyClientText(){console.log("Klientide arv: "+this.countOfSelectedClients),this.countOfSelectedClients>1?this.client="asiakasta":this.client="asiakas"}}}),W=o(89);const Z=(0,W.Z)(V,[["render",U]]);var F=Z}}]);
//# sourceMappingURL=378.a4868a90.js.map