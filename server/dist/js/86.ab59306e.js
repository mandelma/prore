"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[86],{2283:function(e,o,t){t(4161)},6086:function(e,o,t){t.r(o),t.d(o,{default:function(){return M}});t(7658);var s=t(3396),a=t(9242),n=t(7139);const i={id:"test",style:{"background-color":"white"}},l={class:"ui large segment form"},r={class:"field"},c=(0,s._)("option",{disabled:"",value:""},"Valitse ammattilainen",-1),g=(0,s._)("option",{value:"Putkimies"},"Putkimies",-1),p=(0,s._)("option",{value:"Sähkömies"},"Sähkömies",-1),d=(0,s._)("option",{value:"Siivooja"},"Siivooja",-1),m=[c,g,p,d],u=(0,s._)("section",{id:"map"},null,-1);function f(e,o,t,c,g,p){const d=(0,s.up)("MDBInput"),f=(0,s.up)("MDBBtn"),h=(0,s.up)("MDBContainer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(h,{style:{position:"relative","z-index":"1",opacity:"0.8","margin-top":"60px"}},{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s.Wm)(d,{label:"Anna osoitteesi",modelValue:g.address,"onUpdate:modelValue":o[0]||(o[0]=e=>g.address=e),id:"autocomplite",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"])]),(0,s._)("div",l,[(0,s._)("div",r,[(0,s.wy)((0,s._)("select",{id:"listOfProfessions","onUpdate:modelValue":o[1]||(o[1]=e=>g.prof=e)},m,512),[[a.bM,g.prof]])]),(0,s._)("h3",{class:(0,n.C_)({activeClients:!g.isActiveProffs})},(0,n.zw)(g.countOfSelectedProfessional+" "+g.professional)+" tarjoaa palvelua ",3),g.prof?((0,s.wg)(),(0,s.iD)("h3",{key:0,class:(0,n.C_)({noClients:g.isActiveProffs})}," Ei ammattilaisia vielä! ",2)):(0,s.kq)("",!0)]),(0,s.Wm)(f,{color:"dark",size:"lg",block:"",onClick:p.receive,style:{position:"relative","z-index":"1",opacity:"1.2"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" Tee uusi tilaus ")])),_:1},8,["onClick"]),(0,s.Wm)(f,{color:"danger",size:"lg",block:"",onClick:o[2]||(o[2]=o=>e.$router.push("/received")),style:{position:"relative","z-index":"1",opacity:"1.0"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" Poistu ")])),_:1})])),_:1}),u])}var h=t(4161),v=t(5800),y=(t(9398),t(4313)),w=(t(2283),{name:"recipient-public",props:{userIsProvider:Object,isProviderLoggedIn:Boolean},components:{MDBContainer:y.L5,MDBInput:y.u2,MDBBtn:y.$v},data(){return{prof:"",userId:null,providerId:null,address:null,myLat:null,mylng:null,countOfSelectedProfessional:0,isActiveProffs:!1,professional:""}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const o=JSON.parse(e);this.userId=o.id}new google.maps.Marker({icon:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"});this.userCurrentLocation();const o=document.getElementById("listOfProfessions");o.addEventListener("change",(e=>{this.showClientLocationOnTheMap(e.target.value)}));const t=document.getElementById("autocomplite"),s={lat:50.064192,lng:-130.605469},a={north:s.lat+.1,south:s.lat-.1,east:s.lng+.1,west:s.lng-.1},n={bounds:a,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},i=new google.maps.places.Autocomplete(t,n);i.addListener("place_changed",(()=>{let e=i.getPlace();this.myLat=e.geometry.location.lat(),this.myLng=e.geometry.location.lng(),this.getAddressFrom(e.geometry.location.lat(),e.geometry.location.lng()),this.address=e.formatted_address,console.log(e)}))},methods:{receive(){this.$router.push("/rf")},userCurrentLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const{latitude:o,longitude:t}=e.coords;this.myLat=o,this.myLng=t,this.showUserLocationOnTheMap(o,t)}))},pinSymbol(e){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",fillColor:e,fillOpacity:1,strokeColor:"#000",strokeWeight:2,scale:1}},showUserLocationOnTheMap(e,o){new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,o),mapTypeId:google.maps.MapTypeId.ROADMAP,accuracy:50})},getAddressFrom(e,o){h.Z.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+o+"&key=AIzaSyAQPLmTMlmSTp4spxPwvaJLnzYnkLmZ9zc").then((t=>{if(t.data.error_message)this.error=t.data.error_message,console.log(t.data.error_message);else{new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,o),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log(t.data.results.results[0].formatted_address)}})).catch((e=>{this.error=e.message,console.log(e.message)}))},otherUserLocations(e,o){let t=new google.maps.Map(document.getElementById("map"),{zoom:9,center:new google.maps.LatLng(this.myLat,this.myLng),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log("Users count: "+e.length);let s=0;if(e.length>0){for(let a=0;a<e.length;a++)e[a].professional.forEach((n=>{n===o&&(this.isActiveProffs=!0,s++,new google.maps.Marker({position:new google.maps.LatLng(e[a].latitude,e[a].longitude),map:t}))}));this.isActiveProffs=s>0,this.countOfSelectedProfessional=s,this.identifyProfText()}},renderClients(e){console.log("Event value "+e.target.value),e.target.value&&this.showClientLocationOnTheMap(e.target.value),this.prof=e.target.value,e.target.value=""},async showClientLocationOnTheMap(e){const o=await v.Z.getRecipients();null!==o&&this.otherUserLocations(o,e)},identifyProfText(){this.countOfSelectedProffessional>1?this.professional="ammattilaista":this.professional="ammattilainen"}}}),L=t(89);const k=(0,L.Z)(w,[["render",f]]);var M=k}}]);
//# sourceMappingURL=86.ab59306e.js.map