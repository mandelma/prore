"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[752],{8405:function(e,t){const o=(e,t)=>{const o=new Date(e.y,e.m,e.d,e.hour,e.min),i=new Date(t.y,t.m,t.d,t.hour,t.min);return i>=o},i=(e,t,o)=>{const i=new Date(t.y,t.m,t.d,t.hour,t.min),a=new Date(o.y,o.m,o.d,o.hour,o.min);return e>=i&&e<a};t.A={compare:o,providerMatchingForClient:i}},3837:function(e,t,o){o(4373)},4752:function(e,t,o){o.r(t),o.d(t,{default:function(){return N}});var i=o(6768),a=o(4232),s=o(5130);const n={style:{display:"flex","justify-content":"right"}},l={id:"panel"},r={style:{"margin-bottom":"20px"}},d={value:"slotProps"},g={key:0},u={key:1},c={style:{},class:"flex align-items-center"},m={key:0,style:{"background-color":"white",margin:"auto",padding:"10px",width:"350px",border:"solid darkgrey"}},p={key:1,class:"map-info-table",style:{"background-color":"white",padding:"10px",width:"90%",margin:"auto",border:"solid darkgrey"}},h={style:{display:"flex","justify-content":"right"}},k={style:{"font-size":"14px",width:"100%","text-align":"left"}},y={key:0},f=["href"],v={key:1},L={colspan:"2"},D={key:2},b={colspan:"2"},w={key:2,class:"order"},C={style:{display:"flex","justify-content":"right",padding:"20px"}},M={style:{color:"#00a6ff","text-align":"left"}},P={style:{color:"#fff"}},x={class:"message-counter"},F={key:3},B={key:0},A=["src"],I={key:4,style:{"background-color":"white",width:"300px",margin:"auto"}},T={key:0},S={style:{color:"blue","font-size":"14px","text-align":"left",padding:"15px"}};function _(e,t,_,O,U,V){const z=(0,i.g2)("MDBIcon"),E=(0,i.g2)("MDBBtnClose"),j=(0,i.g2)("MDBInput"),X=(0,i.g2)("Dropdown"),H=(0,i.g2)("VueDatePicker"),Q=(0,i.g2)("chat-panel"),R=(0,i.g2)("MDBBadge"),$=(0,i.g2)("MDBBtn"),W=(0,i.g2)("MDBTextarea"),Y=(0,i.g2)("MDBContainer");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.bF)(Y,{style:{position:"relative","z-index":"1","margin-top":"80px",opacity:"0.8"}},{default:(0,i.k6)((()=>[(0,i.Lk)("div",{class:(0,a.C4)({hideMainPanel:!U.isMainPanel}),style:{"background-color":"#2b2a2a",padding:"10px"}},[(0,i.Lk)("div",n,[(0,i.bF)(z,{size:"lg",style:{padding:"10px"},onClick:V.closeMainPanel},{default:(0,i.k6)((()=>t[14]||(t[14]=[(0,i.Lk)("i",{class:"fas fa-expand-arrows-alt"},null,-1)]))),_:1},8,["onClick"]),(0,i.Lk)("div",null,[(0,i.bF)(E,{white:"",style:{padding:"10px"},size:"lg",onClick:t[0]||(t[0]=t=>e.$router.go(-1))})])]),(0,i.Lk)("div",l,[(0,i.bF)(j,{white:"",label:"Anna toinen osoitteesi kun ei täsmää",modelValue:U.address,"onUpdate:modelValue":t[1]||(t[1]=e=>U.address=e),id:"autocomplite",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"])]),(0,i.Lk)("div",r,[(0,i.bF)(X,{onChange:V.changedProfession,modelValue:U.prof,"onUpdate:modelValue":t[2]||(t[2]=e=>U.prof=e),options:U.prodata,filter:"",optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",placeholder:"Valitse ammattilainen",class:"w-full md:w-100rem"},{optiongroup:(0,i.k6)((e=>[(0,i.Lk)("div",c,[(0,i.Lk)("div",null,(0,a.v_)(e.option.label),1)])])),default:(0,i.k6)((()=>[(0,i.Lk)("template",d,[e.slotProps.value?((0,i.uX)(),(0,i.CE)("div",g,[(0,i.Lk)("div",null,(0,a.v_)(e.slotProps.value.label),1)])):((0,i.uX)(),(0,i.CE)("span",u,(0,a.v_)(e.slotProps.placeholder),1))])])),_:1},8,["onChange","modelValue","options"])]),(0,i.Lk)("div",{class:(0,a.C4)({hideDistSelectPanel:!U.isDistSelection})},[t[15]||(t[15]=(0,i.Lk)("p",{style:{"text-align":"left"}},"Mikä aika kiinnoistaisi?",-1)),(0,i.bF)(H,{style:{"margin-bottom":"20px"},modelValue:U.bookingDate,"onUpdate:modelValue":[t[3]||(t[3]=e=>U.bookingDate=e),V.handleDate],dark:"","min-date":new Date,"teleport-center":"",onInternalModelChange:e.handleInternalDate,state:!e.isNoDate&&null},null,8,["modelValue","min-date","onInternalModelChange","onUpdate:modelValue","state"])],2),(0,i.Lk)("div",{class:(0,a.C4)({hideDistSelectPanel:!U.isDistSelection}),style:{"padding-top":"10px"}},[(0,i.bo)((0,i.Lk)("select",{style:{padding:"12px",width:"100%","background-color":"dimgrey",color:"white"},id:"distance","onUpdate:modelValue":t[4]||(t[4]=e=>U.distBtw=e),onClick:t[5]||(t[5]=(...t)=>e.filterByDistance&&e.filterByDistance(...t))},t[16]||(t[16]=[(0,i.Lk)("option",{disabled:"",value:"0"},"0 km ympärilläsi",-1),(0,i.Lk)("option",{value:"1"},"1 km ympärilläsi",-1),(0,i.Lk)("option",{value:"2"},"2 km ympärilläsi",-1),(0,i.Lk)("option",{value:"3"},"3 km ympärilläsi",-1),(0,i.Lk)("option",{value:"4"},"4 km ympärilläsi",-1),(0,i.Lk)("option",{value:"5"},"5 km ympärilläsi",-1),(0,i.Lk)("option",{value:"6"},"6 km ympärilläsi",-1),(0,i.Lk)("option",{value:"7"},"7 km ympärilläsi",-1),(0,i.Lk)("option",{value:"8"},"8 km ympärilläsi",-1),(0,i.Lk)("option",{value:"9"},"9 km ympärilläsi",-1),(0,i.Lk)("option",{value:"10"},"10 km ympärilläsi",-1),(0,i.Lk)("option",{value:"20"},"20 km ympärilläsi",-1),(0,i.Lk)("option",{value:"30"},"30 km ympärilläsi",-1),(0,i.Lk)("option",{value:"40"},"40 km ympärilläsi",-1),(0,i.Lk)("option",{value:"50"},"50 km ympärilläsi",-1),(0,i.Lk)("option",{value:"60"},"60 km ympärilläsi",-1),(0,i.Lk)("option",{value:"70"},"70 km ympärilläsi",-1),(0,i.Lk)("option",{value:"80"},"80 km ympärilläsi",-1),(0,i.Lk)("option",{value:"90"},"90 km ympärilläsi",-1),(0,i.Lk)("option",{value:"100"},"100 km ympärilläsi",-1),(0,i.Lk)("option",{value:"200"},"200 km ympärilläsi",-1),(0,i.Lk)("option",{value:"300"},"300 km ympärilläsi",-1)]),512),[[s.u1,U.distBtw]])],2),U.prof?((0,i.uX)(),(0,i.CE)("h3",{key:0,class:(0,a.C4)({noClients:U.isActiveProffs})}," Ei ammattilaisia vielä! ",2)):(0,i.Q3)("",!0)],2),U.isMapChat?((0,i.uX)(),(0,i.CE)("div",m,[(0,i.Lk)("p",{style:{float:"right",color:"limegreen"},onClick:t[6]||(t[6]=(...e)=>V.closeMapChat&&V.closeMapChat(...e))},"Valmis"),(0,i.bF)(Q,{chatusers:_.chatusers,messages:_.messages,selecteduser:_.selecteduser,"onSelect:user":V.selectUser,onNoSelected:V.noSelectUser,"onOn:message":V.onMessage},null,8,["chatusers","messages","selecteduser","onSelect:user","onNoSelected","onOn:message"])])):U.isTargetSelected&&!U.isMapChat?((0,i.uX)(),(0,i.CE)("div",p,[(0,i.Lk)("div",h,[(0,i.Lk)("p",{style:{"font-size":"15px",padding:"10px",color:"green"},onClick:t[7]||(t[7]=(...e)=>V.outFromMarkerPanel&&V.outFromMarkerPanel(...e))},"Valmis")]),(0,i.Lk)("table",k,[(0,i.Lk)("tbody",null,[(0,i.Lk)("tr",null,[t[17]||(t[17]=(0,i.Lk)("td",null," Yritys: ",-1)),(0,i.Lk)("td",null,(0,a.v_)(this.target.yritys),1)]),(0,i.Lk)("tr",null,[t[18]||(t[18]=(0,i.Lk)("td",null," Y - tunnus: ",-1)),(0,i.Lk)("td",null,(0,a.v_)(this.target.ytunnus),1)]),(0,i.Lk)("tr",null,[t[19]||(t[19]=(0,i.Lk)("td",null," Työalue: ",-1)),(0,i.Lk)("td",null,(0,a.v_)(this.target.range?this.target.range+" km":"Palvelun tarjous vain paikalla!"),1)]),(0,i.Lk)("tr",null,[t[20]||(t[20]=(0,i.Lk)("td",null," Palvelun hinta: ",-1)),(0,i.Lk)("td",null,(0,a.v_)(this.target.priceByHour?this.target.priceByHour+" Euroa / tunti":"Urakkahinta sovittaessa!"),1)]),(0,i.Lk)("tr",null,[t[21]||(t[21]=(0,i.Lk)("td",null," Saatu palaute: ",-1)),(0,i.Lk)("td",null,[(0,i.bF)(z,{style:{padding:"10px",cursor:"pointer"},class:"far fa-smile",size:"lg",onClick:e.negative},null,8,["onClick"]),(0,i.bF)(R,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,i.k6)((()=>[(0,i.Lk)("p",null,(0,a.v_)(this.target.rating.positive),1)])),_:1}),(0,i.bF)(z,{style:{padding:"10px",cursor:"pointer"},class:"far fa-frown",size:"lg",onClick:e.negative},null,8,["onClick"]),(0,i.bF)(R,{color:"danger",class:"translate-middle p-1",pill:"",notification:""},{default:(0,i.k6)((()=>[(0,i.Lk)("p",null,(0,a.v_)(this.target.rating.negative),1)])),_:1})])]),this.target.pro_link?((0,i.uX)(),(0,i.CE)("tr",y,[t[22]||(t[22]=(0,i.Lk)("td",null," Kotisivu ",-1)),(0,i.Lk)("td",null,[(0,i.Lk)("a",{href:"//"+this.target.pro_link,target:"_blank"}," Palveluntarjoajan kotisivu ",8,f)])])):(0,i.Q3)("",!0),U.target.user.id!==U.userId?((0,i.uX)(),(0,i.CE)("tr",v,[(0,i.Lk)("td",L,[(0,i.bF)($,{block:"",color:"secondary",size:"lg",onClick:V.createChatPanel},{default:(0,i.k6)((()=>t[23]||(t[23]=[(0,i.eW)("Chattailemaan")]))),_:1},8,["onClick"])])])):(0,i.Q3)("",!0),U.target.user.id===U.userId||U.isOrder?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("tr",D,[(0,i.Lk)("td",b,[(0,i.bF)($,{block:"",color:"success",size:"lg",onClick:V.createBooking},{default:(0,i.k6)((()=>t[24]||(t[24]=[(0,i.eW)("Tee tilaus")]))),_:1},8,["onClick"])])]))])])])):(0,i.Q3)("",!0),U.isOrder?((0,i.uX)(),(0,i.CE)("div",w,[(0,i.Lk)("div",C,[(0,i.bF)(E,{white:"",size:"lg",onClick:t[8]||(t[8]=e=>U.isOrder=!1)})]),(0,i.Lk)("form",{onSubmit:t[12]||(t[12]=(0,s.D$)(((...e)=>V.confirmOrder&&V.confirmOrder(...e)),["prevent"]))},[(0,i.Lk)("p",M,"Address: "+(0,a.v_)(U.address),1),(0,i.bF)(j,{white:"",label:"Anna otsiko",modelValue:U.orderHeader,"onUpdate:modelValue":t[9]||(t[9]=e=>U.orderHeader=e),wrapperClass:"mb-4"},null,8,["modelValue"]),t[26]||(t[26]=(0,i.Lk)("p",{style:{"text-align":"left"}},"Missä ajalla haluaisit ammattilaista?",-1)),(0,i.Lk)("div",P,[(0,i.bF)(H,{style:{"margin-bottom":"20px"},modelValue:U.orderDate,"onUpdate:modelValue":t[10]||(t[10]=e=>U.orderDate=e),dark:"","min-date":new Date,"teleport-center":"",onInternalModelChange:e.handleInternalDate,state:!e.isNoDate&&null},null,8,["modelValue","min-date","onInternalModelChange","state"]),(0,i.bF)(W,{maxlength:"70",label:"Tehtävän kuvaus...",white:"",rows:"2",modelValue:U.orderDescription,"onUpdate:modelValue":t[11]||(t[11]=e=>U.orderDescription=e),invalidFeedback:"Ole hyvä ja kirjoita tehtävän kuvaus.",validFeedback:"Ok!",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,i.Lk)("span",x,(0,a.v_)(U.orderDescription.length)+" / 70",1)]),(0,i.bF)($,{block:"",type:"submit",color:"success"},{default:(0,i.k6)((()=>t[25]||(t[25]=[(0,i.eW)("Tilaa")]))),_:1})],32)])):(0,i.Q3)("",!0),U.isTargetSelected?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",F,[U.isMainPanel?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",B,[(0,i.Lk)("img",{src:o(417),alt:"back",style:{float:"right",padding:"10px"},onClick:t[13]||(t[13]=(...e)=>V.returnToMainPanel&&V.returnToMainPanel(...e))},null,8,A)]))])),!U.isMainPanel&&U.countOfSelectedProfessional>0&&!U.isTargetSelected?((0,i.uX)(),(0,i.CE)("div",I,[U.bookingDate?((0,i.uX)(),(0,i.CE)("div",T,[(0,i.Lk)("p",S," Valittu aika: "+(0,a.v_)(U.bookingDate.getDate()+" / "+(U.bookingDate.getMonth()+1)+" klo "+U.bookingDate.getHours()+":"+(U.bookingDate.getMinutes().length<2?"0"+U.bookingDate.getMinutes():U.bookingDate.getMinutes())),1),t[27]||(t[27]=(0,i.Lk)("p",{style:{color:"darkgreen","font-size":"17px","font-weight":"bold","text-align":"left","padding-left":"15px"}},"Vihreä merkki - saatavilla ",-1)),t[28]||(t[28]=(0,i.Lk)("p",{style:{color:"darkorange","font-size":"17px","font-weight":"bold","text-align":"left","padding-left":"15px"}},"Oranssi merkki - sovitaessa ",-1))])):(0,i.Q3)("",!0),t[29]||(t[29]=(0,i.Lk)("p",{style:{color:"#9fa6b2","font-size":"14px","text-align":"left",padding:"15px"}}," Napsauta merkkiä nähdäksesi palveluntarjoajan! ",-1))])):(0,i.Q3)("",!0)])),_:1}),t[30]||(t[30]=(0,i.Lk)("div",{id:"map"},null,-1))])}o(4114);var O=o(4373),U=o(407),V=o(1769),z=o(8405),E=o(5846),j=(o(5607),o(3837),o(3076)),X=o(6510),H=o(8068),Q=o(2436),R=o(1690),$={name:"recipient-public",props:{userIsProvider:Object,selecteduser:null,chatusers:Array,messages:Array,isProviderLoggedIn:Boolean},components:{chatPanel:X["default"],MDBContainer:E.Dj,MDBInput:E.gk,MDBBtn:E.al,MDBBtnClose:E.uR,MDBRow:E.gU,MDBCol:E.m6,MDBIcon:E.$u,MDBBadge:E.nf,MDBTextarea:E.QP,Dropdown:Q.A,VueDatePicker:H.A},data(){return{obj:null,stateActive:!1,datetime:z.A,isOrder:!1,target:{},isTargetSelected:!1,isMainPanel:!0,isCreatingChatPanel:!1,prof:null,username:null,userId:null,providerId:null,address:null,myLat:null,mylng:null,countOfSelectedProfessional:0,isActiveProffs:!1,isDistSelection:!1,professional:"Automaalari",currentProfession:"",distBtw:1,prodata:j.A,room:null,isChatPanel:!0,isMapChat:!1,providers:[],selectedProPosition:null,bookingDate:null,orderDate:null,orderHeader:"",orderDescription:""}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.username=t.username,this.userId=t.id}this.resizeMap();new google.maps.Marker({icon:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"});this.userCurrentLocation();const t=document.getElementById("distance");t.addEventListener("change",(e=>{this.distBtw=parseFloat(e.target.value),this.stateActive=!0;this.currentProfession,parseFloat(e.target.value);this.showClientLocationOnTheMap(this.currentProfession,this.distBtw)}));const o=document.getElementById("autocomplite"),i={lat:50.064192,lng:-130.605469},a={north:i.lat+.1,south:i.lat-.1,east:i.lng+.1,west:i.lng-.1},s={bounds:a,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},n=new google.maps.places.Autocomplete(o,s);n.addListener("place_changed",(()=>{let e=n.getPlace();this.myLat=e.geometry.location.lat(),this.myLng=e.geometry.location.lng(),this.getAddressFrom(e.geometry.location.lat(),e.geometry.location.lng()),this.address=e.formatted_address,console.log("Address xxxx "+e.formatted_address),console.log("place-----------"+this.myLat)}))},methods:{puhasta(){console.log("Puhastatud")},async handleDate(){if(console.log("Date handled!"),this.stateActive){const e=await V.A.getProviders();null!==e&&this.otherUserLocations(e,this.currentProfession,this.distBtw)}},changedProfession(){console.log("Changed "+this.prof.label),this.showClientLocationOnTheMap(this.prof.label,this.distBtw),this.currentProfession=this.prof.label,this.isDistSelection=!0},selectUser(e){this.$emit("select:user",e)},noSelectUser(){this.$emit("noSelected")},onMessage(e,t,o){this.$emit("on:message",e,t,o)},resizeMap(){var e=document.getElementById("map");e.style.height="100%",e.style.width="100%"},receive(){this.$router.push("/rf")},userCurrentLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:o}=e.coords;this.myLat=t,this.myLng=o,this.showUserLocationOnTheMap(t,o)}))},pinSymbol(e){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",fillColor:e,fillOpacity:1,strokeColor:"#000",strokeWeight:2,scale:1,labelOrigin:{x:60,y:-25}}},showUserLocationOnTheMap(e,t){new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP,accuracy:50});this.getAddressFrom(e,t)},getAddressFrom(e,t){O.A.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key=AIzaSyDt2YXE5tk0J72JgqnH3DTD7MeoqbbWBmU").then((o=>{if(o.data.error_message)this.error=o.data.error_message,console.log(o.data.error_message);else{new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP});this.address=o.data.results[1].formatted_address}})).catch((e=>{this.error=e.message,console.log(e.message)}))},distanceBtw(e,t,o,i){var a=new google.maps.LatLng(e,t),s=new google.maps.LatLng(o,i);return(google.maps.geometry.spherical.computeDistanceBetween(a,s)/1e3).toFixed(2)},datetimeFitting(e){let t;if(this.bookingDate){let e=this.bookingDate.getFullYear(),o=this.bookingDate.getMonth(),i=this.bookingDate.getDate(),a=this.bookingDate.getHours(),s=this.bookingDate.getMinutes();console.log("Booking date 2 "+new Date(e,o,i,a,s)),t=new Date(e,o,i,a,s)}return this.datetime.providerMatchingForClient(t,{y:e.yearFrom,m:e.monthFrom,d:e.dayFrom,hour:e.hoursFrom,min:e.minutesFrom},{y:e.yearTo,m:e.monthTo,d:e.dayTo,hour:e.hoursTo,min:e.minutesTo})},otherUserLocations(e,t,o){let i,a=!1,s=new google.maps.Map(document.getElementById("map"),{zoom:9,center:new google.maps.LatLng(this.myLat,this.myLng),mapTypeId:google.maps.MapTypeId.ROADMAP});if(console.log("Users count: "+e.length),console.log("Current distance "+o),this.bookingDate){let e=this.bookingDate.getFullYear(),t=this.bookingDate.getMonth(),o=this.bookingDate.getDate(),a=this.bookingDate.getHours(),s=this.bookingDate.getMinutes();console.log("Booking date 2 "+new Date(e,t,o,a,s)),i=new Date(e,t,o,a,s)}let n=0;if(e.length>0){this.target={};for(let l=0;l<e.length;l++){console.log("------------ "+e[l].yritys);this.myLat,this.myLng;e[l].profession.forEach((r=>{if(r===t){console.log("Pro "+r.yritys);e[l].latitude,e[l].longitude;if(console.log("Distance btw "+this.distanceBtw(this.myLat,this.myLng,e[l].latitude,e[l].longitude)),this.isActiveProffs=!0,this.distanceBtw(this.myLat,this.myLng,e[l].latitude,e[l].longitude)<=o){let t;n++,e[l].timeoffer.length>0?e[l].timeoffer.map((o=>{console.log("Year: "+o.yearFrom),console.log("Fitting datetime: "+this.datetime.providerMatchingForClient(i,{y:o.yearFrom,m:o.monthFrom,d:o.dayFrom,hour:o.hoursFrom,min:o.minutesFrom},{y:o.yearTo,m:o.monthTo,d:o.dayTo,hour:o.hoursTo,min:o.minutesTo})),t=this.datetime.providerMatchingForClient(i,{y:o.yearFrom,m:o.monthFrom,d:o.dayFrom,hour:o.hoursFrom,min:o.minutesFrom},{y:o.yearTo,m:o.monthTo,d:o.dayTo,hour:o.hoursTo,min:o.minutesTo})?new google.maps.Marker({position:new google.maps.LatLng(e[l].latitude,e[l].longitude),accuracy:50,map:s,icon:this.pinSymbol("green"),label:{color:"#79f759",fontWeight:"bold",fontSize:"14px",text:"Saatavilla!"}}):new google.maps.Marker({position:new google.maps.LatLng(e[l].latitude,e[l].longitude),accuracy:50,map:s,icon:this.pinSymbol("orange"),label:{color:"#f79859",fontWeight:"bold",fontSize:"14px",text:"Sovitaessa!"}})})):t=new google.maps.Marker({position:new google.maps.LatLng(e[l].latitude,e[l].longitude),accuracy:50,map:s,icon:this.pinSymbol("orange"),label:{color:"#f79859",fontWeight:"bold",fontSize:"14px",text:"Sovitaessa!"}}),window.myGlobalFunction=this.openMarker;const o=new google.maps.InfoWindow({});google.maps.event.addListener(t,"click",(function(){console.log("POOOOS "+l);let i=l;a&&a.close(),a=o,o.open(s,t),o.setContent("<div  class='map-info-window'><p style=\"color: green; \">"+e[l].yritys+'</p><p style="color: red; " onclick="myGlobalFunction('+i+' )">Tiedot</p></div>')})),console.log("Prev infowondow "+a)}}}))}n>0?(this.isActiveProffs=!0,this.isMainPanel=!1):this.isActiveProffs=!1,this.countOfSelectedProfessional=n,console.log("countxx "+n),this.identifyProfText()}},handleInitChat(e,t,o,i){if(this.target.user.username!==this.username){this.target.yritys,this.username;const a={status:"map",useCounter:i,isActive:e,bookingID:t,same_room_counter:o,isOnline:!0,room:this.room,pro:this.target.yritys,username:this.username,bookerUsername:this.username,bookerID:this.userId,providerUsername:this.target.user.username,providerID:this.target.user.id},s={useCounter:i,isActive:e,bookingID:t,same_room_counter:o,room:this.room,proID:this.target.user.id,pro:this.target.yritys,userID:this.userId,username:this.username};this.$emit("initializeChat",{initChatRoom:a,chatData:s})}},createChatPanel(){this.handleInitChat(!1,"0",0,!0),this.isMapChat=!0},async openMarker(e){console.log("Booking date "+new Date(this.bookingDate));this.bookingDate;console.log("Pro profession ");const t=[this.currentProfession],o=await V.A.getProvidersMatchingByProfession({result:t});let i=[];o.forEach((e=>{console.log("Results: "+e.user.id);let t=parseInt(this.distanceBtw(this.myLat,this.myLng,e.latitude,e.longitude)).toFixed(0);console.log("Distance to display "+t),i=i.concat({id:e.user.id,dist:t,pro:this.currentProfession})})),R.A.emit("map search report",i);const a=await V.A.getProviders();a&&(a[e].user.username!==this.username&&(this.isCreatingChatPanel=!0),console.log("Room in client map: "+this.room),this.target=a[e],this.username?this.room=this.target.yritys+this.username:this.room="nipitiri",this.isTargetSelected=!0)},createBooking(){console.log("Here you can make an order! "+this.address),this.isOrder=!0},async confirmOrder(){let e;if(this.orderDate){let t=this.orderDate.getFullYear(),o=this.orderDate.getMonth(),i=this.orderDate.getDate(),a=this.orderDate.getHours(),s=this.orderDate.getMinutes();const n=new Date(t,o,i,a,s).getTime();e={created:this.orderDate,created_ms:n,header:this.orderHeader,address:this.address,latitude:this.myLat,longitude:this.myLng,professional:this.currentProfession,isIncludeOffers:!1,year:this.orderDate.getFullYear(),month:this.orderDate.getMonth(),day:this.orderDate.getDate(),hours:this.orderDate.getHours(),minutes:this.orderDate.getMinutes(),description:this.orderDescription,status:"notSeen",ordered:this.target.id}}console.log("Address: "+this.address);const t=await U.A.addRecipient(this.userId,e),o=await U.A.getBookingById(t.id);await U.A.addProviderData(t.id,this.target.id);const i=await V.A.addProviderBooking(this.target.id,t.id);if("Recipient is added!"===i){console.log("Iiiiisss "+(this.target.yritys+this.username));const e=this.target.yritys+this.username;this.target.user.id,this.target.user.username}const a=this.target.user.id;this.$emit("booking_map:update",t),R.A.emit("accept provider",{id:a,booking:o}),this.$router.push("/received")},async outFromMarkerPanel(){this.isTargetSelected=!1,this.noSelectUser();const e=await V.A.getProviders();null!==e&&this.otherUserLocations(e,this.currentProfession,this.distBtw)},closeMapChat(){this.isMapChat=!1},async returnToMainPanel(){this.isMainPanel=!0,this.noSelectUser()},closeMainPanel(){this.isMainPanel=!1,this.noSelectUser(),console.log("Close main panel")},async showClientLocationOnTheMap(e,t){console.log("Current distance herexx  "+t);const o=await V.A.getProviders();null!==o&&this.otherUserLocations(o,e,t)},identifyProfText(){this.countOfSelectedProfessional>1?this.professional="ammattilaista":this.professional="ammattilainen"}}},W=o(1241);const Y=(0,W.A)($,[["render",_]]);var N=Y}}]);
//# sourceMappingURL=752.62bc50b9.js.map