"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[789],{3837:function(e,t,o){o(8992),o(3949),o(4373)},6789:function(e,t,o){o.r(t),o.d(t,{default:function(){return w}});var l=o(6768),i=o(4232),s=o(5130);const n={id:"address_input",style:{"background-color":"white"}},a={style:{"background-color":"#575656"},class:"ui large segment form"},r={style:{"margin-bottom":"20px"}},p={value:"slotProps"},d={key:0},m={key:1},c={style:{},class:"flex align-items-center"};function g(e,t,o,g,u,h){const k=(0,l.g2)("MDBInput"),y=(0,l.g2)("Dropdown"),L=(0,l.g2)("MDBBtn"),v=(0,l.g2)("MDBContainer");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(v,{style:{position:"relative","z-index":"1",opacity:"0.8","margin-top":"60px"}},{default:(0,l.k6)((()=>[(0,l.Lk)("div",n,[(0,l.bF)(k,{dark:"",label:"Anna osoitteesi",modelValue:u.address,"onUpdate:modelValue":t[0]||(t[0]=e=>u.address=e),id:"autocomplite",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"])]),(0,l.Lk)("div",a,[(0,l.Lk)("div",r,[(0,l.bF)(y,{onChange:h.changedProfessional,modelValue:u.prof,"onUpdate:modelValue":t[1]||(t[1]=e=>u.prof=e),options:u.prodata,filter:"",optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",placeholder:"Valitse ammattilainen",class:"w-full md:w-100rem"},{optiongroup:(0,l.k6)((e=>[(0,l.Lk)("div",c,[(0,l.Lk)("div",null,(0,i.v_)(e.option.label),1)])])),default:(0,l.k6)((()=>[(0,l.Lk)("template",p,[e.slotProps.value?((0,l.uX)(),(0,l.CE)("div",d,[(0,l.Lk)("div",null,(0,i.v_)(e.slotProps.value.label),1)])):((0,l.uX)(),(0,l.CE)("span",m,(0,i.v_)(e.slotProps.placeholder),1))])])),_:1},8,["onChange","modelValue","options"])]),(0,l.Lk)("div",{class:(0,i.C4)({hideDistSelectPanel:!u.isDistSelection})},[(0,l.bo)((0,l.Lk)("select",{id:"distanceOfClient","onUpdate:modelValue":t[2]||(t[2]=e=>u.distBtw=e)},t[4]||(t[4]=[(0,l.Lk)("option",{disabled:"",value:"1"},"1 kilometriä ympärilläsi",-1),(0,l.Lk)("option",{value:"2"},"2 km ympärilläsi",-1),(0,l.Lk)("option",{value:"3"},"3 km ympärilläsi",-1),(0,l.Lk)("option",{value:"4"},"4 km ympärilläsi",-1),(0,l.Lk)("option",{value:"5"},"5 km ympärilläsi",-1),(0,l.Lk)("option",{value:"6"},"6 km ympärilläsi",-1),(0,l.Lk)("option",{value:"7"},"7 km ympärilläsi",-1),(0,l.Lk)("option",{value:"8"},"8 km ympärilläsi",-1),(0,l.Lk)("option",{value:"9"},"9 km ympärilläsi",-1),(0,l.Lk)("option",{value:"10"},"10 km ympärilläsi",-1),(0,l.Lk)("option",{value:"20"},"20 km ympärilläsi",-1),(0,l.Lk)("option",{value:"30"},"30 km ympärilläsi",-1),(0,l.Lk)("option",{value:"40"},"40 km ympärilläsi",-1),(0,l.Lk)("option",{value:"50"},"50 km ympärilläsi",-1),(0,l.Lk)("option",{value:"60"},"60 km ympärilläsi",-1),(0,l.Lk)("option",{value:"70"},"70 km ympärilläsi",-1),(0,l.Lk)("option",{value:"80"},"80 km ympärilläsi",-1),(0,l.Lk)("option",{value:"90"},"90 km ympärilläsi",-1),(0,l.Lk)("option",{value:"100"},"100 km ympärilläsi",-1),(0,l.Lk)("option",{value:"200"},"200 km ympärilläsi",-1),(0,l.Lk)("option",{value:"300"},"300 km ympärilläsi",-1)]),512),[[s.u1,u.distBtw]])],2),(0,l.Lk)("h3",{class:(0,i.C4)({activeClients:!u.isActiveClients})},(0,i.v_)(u.countOfSelectedClients+" "+u.client)+" tarvitsee palveluasi ",3),u.prof?((0,l.uX)(),(0,l.CE)("h3",{key:0,class:(0,i.C4)({noClients:u.isActiveClients})}," Ei asiakkaita vielä! ",2)):(0,l.Q3)("",!0)]),(0,l.bF)(L,{color:"dark",size:"lg",block:"",onClick:h.provide,style:{position:"relative","z-index":"1",opacity:"1.2"}},{default:(0,l.k6)((()=>t[5]||(t[5]=[(0,l.eW)(" Tarjoa omaa palvelua ")]))),_:1},8,["onClick"]),(0,l.bF)(L,{color:"danger",size:"lg",block:"",onClick:t[3]||(t[3]=t=>e.$router.go(-1)),style:{position:"relative","z-index":"1",opacity:"1.0"}},{default:(0,l.k6)((()=>t[6]||(t[6]=[(0,l.eW)(" Poistu ")]))),_:1})])),_:1}),t[7]||(t[7]=(0,l.Lk)("section",{id:"map"},null,-1))])}o(4114),o(8992),o(3949);var u=o(4373),h=o(407),k=(o(1769),o(5846)),y=o(3076),L=o(2436),v=(o(3837),{name:"provider-public",props:{userIsProvider:Object,isProviderLoggedIn:Boolean},components:{Dropdown:L.A,MDBContainer:k.Dj,MDBInput:k.gk,MDBBtn:k.al},data(){return{prof:null,userId:null,providerId:null,address:null,myLat:null,mylng:null,countOfSelectedClients:0,isActiveClients:!1,client:"",isDistSelection:!1,distBtw:1,currentProfessional:"",prodata:y.A}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.userId=t.id}this.resizeMap();new google.maps.Marker({icon:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"});this.userCurrentLocation();const t=document.getElementById("distanceOfClient");t.addEventListener("change",(e=>{this.distBtw=parseFloat(e.target.value),console.log("Current distance in beginning "+this.distBtw),this.showClientLocationOnTheMap(this.currentProfessional,this.distBtw)}));const o=document.getElementById("autocomplite"),l={lat:50.064192,lng:-130.605469},i={north:l.lat+.1,south:l.lat-.1,east:l.lng+.1,west:l.lng-.1},s={bounds:i,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},n=new google.maps.places.Autocomplete(o,s);n.addListener("place_changed",(()=>{let e=n.getPlace();this.myLat=e.geometry.location.lat(),this.myLng=e.geometry.location.lng(),this.getAddressFrom(e.geometry.location.lat(),e.geometry.location.lng()),this.address=e.formatted_address,console.log(e)}))},methods:{changedProfessional(){console.log("Changed "+this.prof.label),this.showClientLocationOnTheMap(this.prof.label,this.distBtw),this.currentProfessional=this.prof.label,this.isDistSelection=!0},resizeMap(){var e=document.getElementById("map");e.style.height="100%",e.style.width="100%"},provide(){this.$router.push("/provider-form")},userCurrentLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:o}=e.coords;this.myLat=t,this.myLng=o,this.showUserLocationOnTheMap(t,o)}))},pinSymbol(e){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",fillColor:e,fillOpacity:1,strokeColor:"#000",strokeWeight:2,scale:1}},showUserLocationOnTheMap(e,t){new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP,accuracy:50})},getAddressFrom(e,t){u.A.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key=AIzaSyBDA2EBoGezJx51wQtxoW3Ecq5Ql8CCAiE").then((o=>{if(o.data.error_message)this.error=o.data.error_message,console.log(o.data.error_message);else{new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log(o.data.results.results[0].formatted_address)}})).catch((e=>{this.error=e.message,console.log(e.message)}))},distanceBtw(e,t,o,l){var i=new google.maps.LatLng(e,t),s=new google.maps.LatLng(o,l);return(google.maps.geometry.spherical.computeDistanceBetween(i,s)/1e3).toFixed(2)},otherUserLocations(e,t,o){let l=new google.maps.Map(document.getElementById("map"),{zoom:9,center:new google.maps.LatLng(this.myLat,this.myLng),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log("Users count: "+e.length),console.log("Current distance "+o);let i=0;if(e.length>0){let s=[];for(let n=0;n<e.length;n++)e[n].professional.forEach((a=>{a===t&&(console.log("Distance btw "+this.distanceBtw(this.myLat,this.myLng,e[n].latitude,e[n].longitude)),this.isActiveClients=!0,s.includes(e[n].user)||s.push(e[n].user),i=s.length,this.distanceBtw(this.myLat,this.myLng,e[n].latitude,e[n].longitude)<=o&&new google.maps.Marker({position:new google.maps.LatLng(e[n].latitude,e[n].longitude),map:l}))}));this.isActiveClients=i>0,this.countOfSelectedClients=i,this.identifyClientText()}},async showClientLocationOnTheMap(e,t){const o=await h.A.getRecipients();null!==o&&this.otherUserLocations(o,e,t)},identifyClientText(){console.log("Klientide arv: "+this.countOfSelectedClients),this.countOfSelectedClients>1?this.client="asiakasta":this.client="asiakas"}}}),f=o(1241);const C=(0,f.A)(v,[["render",g]]);var w=C}}]);
//# sourceMappingURL=789.3fc6b210.js.map