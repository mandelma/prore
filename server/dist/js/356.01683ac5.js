"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[356],{2283:function(e,t,o){o(4161)},1356:function(e,t,o){o.r(t),o.d(t,{default:function(){return L}});o(7658);var s=o(3396),a=o(9242),n=o(7139);const i={id:"test",style:{"background-color":"white"}},l={class:"ui large segment form"},r={class:"field"},c=(0,s._)("option",{disabled:"",value:""},"Valitse ammattisi",-1),d=(0,s._)("option",{value:"Putkimies"},"Putkimies",-1),g=(0,s._)("option",{value:"Sähkömies"},"Sähkömies",-1),p=(0,s._)("option",{value:"Siivooja"},"Siivooja",-1),m=[c,d,g,p],u=(0,s._)("section",{id:"map"},null,-1);function h(e,t,o,c,d,g){const p=(0,s.up)("MDBInput"),h=(0,s.up)("MDBBtn"),v=(0,s.up)("MDBContainer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(v,{style:{position:"relative","z-index":"1",opacity:"0.8","margin-top":"60px"}},{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s.Wm)(p,{label:"Anna osoitteesi",modelValue:d.address,"onUpdate:modelValue":t[0]||(t[0]=e=>d.address=e),id:"autocomplite",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"])]),(0,s._)("div",l,[(0,s._)("div",r,[(0,s.wy)((0,s._)("select",{id:"listOfProfessions","onUpdate:modelValue":t[1]||(t[1]=e=>d.prof=e)},m,512),[[a.bM,d.prof]])]),(0,s._)("h3",{class:(0,n.C_)({activeClients:!d.isActiveClients})},(0,n.zw)(d.countOfSelectedClients+" "+d.client)+" tarvitsee palveluasi ",3),d.prof?((0,s.wg)(),(0,s.iD)("h3",{key:0,class:(0,n.C_)({noClients:d.isActiveClients})}," Ei asiakkaita vielä! ",2)):(0,s.kq)("",!0)]),(0,s.Wm)(h,{color:"dark",size:"lg",block:"",onClick:g.provide,style:{position:"relative","z-index":"1",opacity:"1.2"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" Tarjoa omaa palvelua ")])),_:1},8,["onClick"]),(0,s.Wm)(h,{color:"danger",size:"lg",block:"",onClick:t[2]||(t[2]=t=>e.$router.push("/")),style:{position:"relative","z-index":"1",opacity:"1.0"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" Poistu ")])),_:1})])),_:1}),u])}var v=o(4161),f=o(5800),y=(o(9398),o(4313)),C=(o(2283),{name:"provider-public",props:{userIsProvider:Object,isProviderLoggedIn:Boolean},components:{MDBContainer:y.L5,MDBInput:y.u2,MDBBtn:y.$v},data(){return{prof:"",userId:null,providerId:null,address:null,myLat:null,mylng:null,countOfSelectedClients:0,isActiveClients:!1,client:""}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.userId=t.id}new google.maps.Marker({icon:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"});this.userCurrentLocation();const t=document.getElementById("listOfProfessions");t.addEventListener("change",(e=>{this.showClientLocationOnTheMap(e.target.value)}));const o=document.getElementById("autocomplite"),s={lat:50.064192,lng:-130.605469},a={north:s.lat+.1,south:s.lat-.1,east:s.lng+.1,west:s.lng-.1},n={bounds:a,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},i=new google.maps.places.Autocomplete(o,n);i.addListener("place_changed",(()=>{let e=i.getPlace();this.myLat=e.geometry.location.lat(),this.myLng=e.geometry.location.lng(),this.getAddressFrom(e.geometry.location.lat(),e.geometry.location.lng()),this.address=e.formatted_address,console.log(e)}))},methods:{provide(){this.$router.push("/provider-form")},userCurrentLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:o}=e.coords;this.myLat=t,this.myLng=o,this.showUserLocationOnTheMap(t,o)}))},pinSymbol(e){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",fillColor:e,fillOpacity:1,strokeColor:"#000",strokeWeight:2,scale:1}},showUserLocationOnTheMap(e,t){new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP,accuracy:50})},getAddressFrom(e,t){v.Z.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key=AIzaSyBDA2EBoGezJx51wQtxoW3Ecq5Ql8CCAiE").then((o=>{if(o.data.error_message)this.error=o.data.error_message,console.log(o.data.error_message);else{new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log(o.data.results.results[0].formatted_address)}})).catch((e=>{this.error=e.message,console.log(e.message)}))},otherUserLocations(e,t){let o=new google.maps.Map(document.getElementById("map"),{zoom:9,center:new google.maps.LatLng(this.myLat,this.myLng),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log("Users count: "+e.length);let s=0;if(e.length>0){for(let a=0;a<e.length;a++)e[a].professional.forEach((n=>{n===t&&(this.isActiveClients=!0,s++,new google.maps.Marker({position:new google.maps.LatLng(e[a].latitude,e[a].longitude),map:o}))}));this.isActiveClients=s>0,this.countOfSelectedClients=s,this.identifyClientText()}},renderClients(e){console.log("Event value "+e.target.value),e.target.value&&this.showClientLocationOnTheMap(e.target.value),this.prof=e.target.value,e.target.value=""},async showClientLocationOnTheMap(e){const t=await f.Z.getRecipients();null!==t&&this.otherUserLocations(t,e)},identifyClientText(){console.log("Klientide arv: "+this.countOfSelectedClients),this.countOfSelectedClients>1?this.client="asiakasta":this.client="asiakas"}}}),w=o(89);const k=(0,w.Z)(C,[["render",h]]);var L=k}}]);
//# sourceMappingURL=356.01683ac5.js.map