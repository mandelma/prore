"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[762],{1840:function(e,t,a){var i=a(3396);let s="";const l=()=>{var e=new google.maps.LatLng(60.233093,24.7531362),t=new google.maps.LatLng(60.2767265,24.8575089),a=new google.maps.DistanceMatrixService;a.getDistanceMatrix({origins:[e],destinations:[t],travelMode:"DRIVING",unitSystem:google.maps.UnitSystem.METRIC,durationInTraffic:!0,avoidHighways:!1,avoidTolls:!1},o)},o=(e,t)=>{if(t===google.maps.DistanceMatrixStatus.OK&&"OK"===t)return console.log("Distance "+e.rows[0].elements[0].distance.text),s=e.rows[0].elements[0].distance.text,"aaaaaaaaaaaaa";console.log("Error:",t),alert(t)},n=()=>(console.log("Is it working??"+s),(0,i.Wm)("div",null,[(0,i.Uk)("Hiiii")])),r=()=>{var e=new google.maps.LatLng(60.233093,24.7531362),t=new google.maps.LatLng(60.2767265,24.8575089);return(google.maps.geometry.spherical.computeDistanceBetween(e,t)/1e3).toFixed(2)};t.Z={distance:l,test:n,theDist:r}},2283:function(e,t,a){a(2340)},3998:function(e,t){const a=[{label:"Automekaanikko"},{label:"Automaalari"},{label:"Automyyjä"},{label:"Katsastaja"},{label:"Varaosamyyjä"}],i=[{label:"Elintarvikekemisti"},{label:"Elintarviketyöntekijä"},{label:"Hankintapäällikkö, meijeriteollisuus"},{label:"Kondiittori"},{label:"Leipomotyöntekijä"},{label:"Leipuri"},{label:"Lihanleikkaaja"},{label:"Lihavalmistetyöntekijä"},{label:"Mylläri"},{label:"Elintarvikepakkaaja"},{label:"Juomatyöntekijä"},{label:"Säilyketyöntekijä"},{label:"Teurastaja"},{label:"Elintarviketuotannon työnjohtaja"},{label:"Tuotannonsuunnittelija, elintarviketeollisuus"},{label:"Tuotantopäällikkö, meijeriteollisuus"},{label:"Meijeristi, meijerituotteiden valmistaja"}],s=[{label:"Automaatioasentaja"},{label:"Automaatioinsinööri"},{label:"Biotekniikan insinööri"},{label:"Elektroniikka-asentaja"},{label:"Elektroniikkainsinööri"},{label:"Energianeuvoja"},{label:"Energiatekniikan insinööri"},{label:"Hakkurinkuljettaja"},{label:"Huoltopäällikkö, kylmäala"},{label:"Kaukolämpöasentaja"},{label:"Kaukolämpöinsinööri"},{label:"Insinööri, kemiantekniikka"},{label:"Kemisti"},{label:"Kunnossapitoinsinööri"},{label:"Kylmäsuunnittelija"},{label:"Käyttöinsinööri"},{label:"LVI-asentaja"},{label:"LVI-insinööri"},{label:"Laborantti"},{label:"Lämpöyrittäjä"},{label:"Metsuri"},{label:"Metsäkoneenkuljettaja"},{label:"Metsätalouden harjoittaja"},{label:"Metsätalousinsinööri"},{label:"Sähköasentaja"},{label:"Sähköinsinööri"},{label:"Sähkömestari, meriliikenne"},{label:"Sähköverkostoasentaja"},{label:"Tuulivoimainsinööri"},{label:"Voimalaitoksen käyttäjä"},{label:"Voimalaitospäällikkö"},{label:"Huoltoteknikko"}],l=[{group:"Autoala",options:a},{group:"Elintarviketeollisuus",options:i},{group:"Energia-ala",options:s}];t.Z=l},5762:function(e,t,a){a.r(t),a.d(t,{default:function(){return ve}});var i=a(3396),s=a(7139),l=a(9242);const o={style:{display:"flex","justify-content":"right"}},n=(0,i._)("i",{class:"fas fa-compress-arrows-alt"},null,-1),r={id:"panel"},d=(0,i._)("option",{value:""},"Valitse ammattilainen",-1),u=["label"],c=["value"],g=["value"],m=(0,i._)("option",{disabled:"",value:"1"},"1 kilometriä ympärilläsi",-1),p=(0,i._)("option",{value:"2"},"2 km ympärilläsi",-1),h=(0,i._)("option",{value:"3"},"3 km ympärilläsi",-1),y=(0,i._)("option",{value:"4"},"4 km ympärilläsi",-1),k=(0,i._)("option",{value:"5"},"5 km ympärilläsi",-1),f=(0,i._)("option",{value:"6"},"6 km ympärilläsi",-1),v=(0,i._)("option",{value:"7"},"7 km ympärilläsi",-1),w=(0,i._)("option",{value:"8"},"8 km ympärilläsi",-1),b=(0,i._)("option",{value:"9"},"9 km ympärilläsi",-1),M=(0,i._)("option",{value:"10"},"10 km ympärilläsi",-1),_=(0,i._)("option",{value:"20"},"20 km ympärilläsi",-1),D=(0,i._)("option",{value:"30"},"30 km ympärilläsi",-1),C=(0,i._)("option",{value:"40"},"40 km ympärilläsi",-1),P=(0,i._)("option",{value:"50"},"50 km ympärilläsi",-1),L=(0,i._)("option",{value:"60"},"60 km ympärilläsi",-1),x=(0,i._)("option",{value:"70"},"70 km ympärilläsi",-1),B=(0,i._)("option",{value:"80"},"80 km ympärilläsi",-1),j=(0,i._)("option",{value:"90"},"90 km ympärilläsi",-1),I=(0,i._)("option",{value:"100"},"100 km ympärilläsi",-1),S=(0,i._)("option",{value:"200"},"200 km ympärilläsi",-1),T=(0,i._)("option",{value:"300"},"300 km ympärilläsi",-1),O=[m,p,h,y,k,f,v,w,b,M,_,D,C,P,L,x,B,j,I,S,T],z={key:0,style:{"background-color":"white",margin:"auto",padding:"10px",width:"350px",border:"solid darkgrey"}},A={key:1,class:"map-info-table",style:{"background-color":"white",padding:"10px",width:"90%",margin:"auto",border:"solid darkgrey"}},U={style:{display:"flex","justify-content":"right"}},E={style:{"font-size":"14px",width:"100%","text-align":"left"}},V=(0,i._)("td",null," Yritys: ",-1),W=(0,i._)("td",null," Y - tunnus: ",-1),H=(0,i._)("td",null," Työalue: ",-1),Z=(0,i._)("td",null," Tuntihinta: ",-1),F=(0,i._)("td",null," palaute: ",-1),K={key:0},q={colspan:"2"},R={key:1},$={colspan:"2"},Y={key:2,class:"order"},N={style:{display:"flex","justify-content":"right",padding:"20px"}},J={style:{color:"#00a6ff","text-align":"left"}},G=(0,i._)("p",{style:{"text-align":"left"}},"Missä ajalla haluaisit ammattilaista?",-1),X={style:{color:"#fff"}},Q={class:"message-counter"},ee={key:3},te={key:0},ae=(0,i._)("i",{class:"fas fa-expand-arrows-alt"},null,-1),ie={key:4,style:{"background-color":"white"}},se=(0,i._)("p",{style:{color:"red","font-size":"14px","text-align":"left",padding:"15px"}}," Napsauta merkkiä nähdäksesi palveluntarjoajan! ",-1),le=[se],oe=(0,i._)("div",{id:"map"},null,-1);function ne(e,t,a,m,p,h){const y=(0,i.up)("MDBIcon"),k=(0,i.up)("MDBBtnClose"),f=(0,i.up)("MDBBtn"),v=(0,i.up)("MDBInput"),w=(0,i.up)("chat-panel"),b=(0,i.up)("MDBBadge"),M=(0,i.up)("VueDatePicker"),_=(0,i.up)("MDBTextarea"),D=(0,i.up)("MDBContainer");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(D,{style:{position:"relative","z-index":"1","padding-top":"80px",opacity:"0.8"}},{default:(0,i.w5)((()=>[(0,i._)("div",{class:(0,s.C_)({hideMainPanel:!p.isMainPanel}),style:{"background-color":"white",padding:"10px"}},[(0,i._)("div",o,[(0,i.Wm)(y,{size:"lg",style:{padding:"10px"},onClick:h.closeMainPanel},{default:(0,i.w5)((()=>[n])),_:1},8,["onClick"]),(0,i._)("div",null,[(0,i.Wm)(k,{style:{padding:"10px"},size:"lg",onClick:t[0]||(t[0]=t=>e.$router.go(-1))})])]),p.isMainPanel?((0,i.wg)(),(0,i.j4)(f,{key:0,color:"secondary",size:"lg",block:"",onClick:h.receive,style:{position:"relative","z-index":"1",opacity:"1.2","margin-bottom":"10px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" Tee uusi tilaus ")])),_:1},8,["onClick"])):(0,i.kq)("",!0),(0,i._)("div",r,[(0,i.Wm)(v,{label:"Anna toinen osoitteesi kun ei täsmää",modelValue:p.address,"onUpdate:modelValue":t[1]||(t[1]=e=>p.address=e),id:"autocomplite",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"])]),(0,i.wy)((0,i._)("select",{style:{padding:"12px",width:"100%"},id:"listOfProfessionals","onUpdate:modelValue":t[2]||(t[2]=e=>p.prof=e)},[d,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(p.prodata,(e=>((0,i.wg)(),(0,i.iD)(i.HY,null,[e.group?((0,i.wg)(),(0,i.iD)("optgroup",{label:e.group,key:e.group},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.options,(e=>((0,i.wg)(),(0,i.iD)("option",{value:e.label,key:e.label},(0,s.zw)(e.label),9,c)))),128))],8,u)):((0,i.wg)(),(0,i.iD)("option",{value:e,key:e.value},(0,s.zw)(e.label),9,g))],64)))),256))],512),[[l.bM,p.prof]]),(0,i._)("div",{class:(0,s.C_)({hideDistSelectPanel:!p.isDistSelection}),style:{"padding-top":"10px"}},[(0,i.wy)((0,i._)("select",{style:{padding:"12px",width:"100%"},id:"distance","onUpdate:modelValue":t[3]||(t[3]=e=>p.distBtw=e),onClick:t[4]||(t[4]=(...t)=>e.filterByDistance&&e.filterByDistance(...t))},O,512),[[l.bM,p.distBtw]])],2),p.prof?((0,i.wg)(),(0,i.iD)("h3",{key:1,class:(0,s.C_)({noClients:p.isActiveProffs})}," Ei ammattilaisia vielä! ",2)):(0,i.kq)("",!0)],2),p.isMapChat?((0,i.wg)(),(0,i.iD)("div",z,[(0,i._)("p",{style:{float:"right",color:"limegreen"},onClick:t[5]||(t[5]=(...e)=>h.closeMapChat&&h.closeMapChat(...e))},"Valmis"),(0,i.Wm)(w,{chatusers:a.chatusers,messages:a.messages,selecteduser:a.selecteduser,"onSelect:user":h.selectUser,onNoSelected:h.noSelectUser,"onOn:message":h.onMessage},null,8,["chatusers","messages","selecteduser","onSelect:user","onNoSelected","onOn:message"])])):p.isTargetSelected&&!p.isMapChat?((0,i.wg)(),(0,i.iD)("div",A,[(0,i._)("div",U,[(0,i._)("p",{style:{"font-size":"15px",padding:"10px",color:"orangered"},onClick:t[6]||(t[6]=(...e)=>h.outFromMarkerPanel&&h.outFromMarkerPanel(...e))},"Valmis")]),(0,i._)("table",E,[(0,i._)("tbody",null,[(0,i._)("tr",null,[V,(0,i._)("td",null,(0,s.zw)(this.target.yritys),1)]),(0,i._)("tr",null,[W,(0,i._)("td",null,(0,s.zw)(this.target.ytunnus),1)]),(0,i._)("tr",null,[H,(0,i._)("td",null,(0,s.zw)(this.target.range?this.target.range:"Palvelun tarjous vain paikalla!"),1)]),(0,i._)("tr",null,[Z,(0,i._)("td",null,(0,s.zw)(this.target.priceByHour)+" Euroa ",1)]),(0,i._)("tr",null,[F,(0,i._)("td",null,[(0,i.Wm)(y,{style:{padding:"10px",cursor:"pointer"},class:"far fa-smile",size:"lg",onClick:e.negative},null,8,["onClick"]),(0,i.Wm)(b,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,s.zw)(this.target.rating.positive),1)])),_:1}),(0,i.Wm)(y,{style:{padding:"10px",cursor:"pointer"},class:"far fa-frown",size:"lg",onClick:e.negative},null,8,["onClick"]),(0,i.Wm)(b,{color:"danger",class:"translate-middle p-1",pill:"",notification:""},{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,s.zw)(this.target.rating.negative),1)])),_:1})])]),p.target.user.id!==p.userId?((0,i.wg)(),(0,i.iD)("tr",K,[(0,i._)("td",q,[(0,i.Wm)(f,{block:"",color:"secondary",size:"lg",onClick:h.createChatPanel},{default:(0,i.w5)((()=>[(0,i.Uk)("Chattailemaan")])),_:1},8,["onClick"])])])):(0,i.kq)("",!0),p.target.user.id===p.userId||p.isOrder?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("tr",R,[(0,i._)("td",$,[(0,i.Wm)(f,{block:"",color:"success",size:"lg",onClick:h.createBooking},{default:(0,i.w5)((()=>[(0,i.Uk)("Tee tilaus")])),_:1},8,["onClick"])])]))])])])):(0,i.kq)("",!0),p.isOrder?((0,i.wg)(),(0,i.iD)("div",Y,[(0,i._)("div",N,[(0,i.Wm)(k,{white:"",size:"lg",onClick:t[7]||(t[7]=e=>p.isOrder=!1)})]),(0,i._)("form",{onSubmit:t[11]||(t[11]=(0,l.iM)(((...e)=>h.confirmOrder&&h.confirmOrder(...e)),["prevent"]))},[(0,i._)("p",J,"Address: "+(0,s.zw)(p.address),1),(0,i.Wm)(v,{white:"",label:"Anna otsiko",modelValue:p.orderHeader,"onUpdate:modelValue":t[8]||(t[8]=e=>p.orderHeader=e),wrapperClass:"mb-4"},null,8,["modelValue"]),G,(0,i._)("div",X,[(0,i.Wm)(M,{style:{"margin-bottom":"20px"},modelValue:p.orderDate,"onUpdate:modelValue":t[9]||(t[9]=e=>p.orderDate=e),dark:"","min-date":new Date,"teleport-center":"",onInternalModelChange:e.handleInternalDate,state:!e.isNoDate&&null},null,8,["modelValue","min-date","onInternalModelChange","state"]),(0,i.Wm)(_,{maxlength:"70",label:"Tehtävän kuvaus...",white:"",rows:"2",modelValue:p.orderDescription,"onUpdate:modelValue":t[10]||(t[10]=e=>p.orderDescription=e),invalidFeedback:"Ole hyvä ja kirjoita tehtävän kuvaus.",validFeedback:"Ok!",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,i._)("span",Q,(0,s.zw)(p.orderDescription.length)+" / 70",1)]),(0,i.Wm)(f,{block:"",type:"submit",color:"success"},{default:(0,i.w5)((()=>[(0,i.Uk)("Tilaa")])),_:1})],32)])):(0,i.kq)("",!0),p.isTargetSelected?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",ee,[p.isMainPanel?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",te,[(0,i.Wm)(y,{size:"2x",style:{float:"right",padding:"10px"},onClick:h.returnToMainPanel},{default:(0,i.w5)((()=>[ae])),_:1},8,["onClick"])]))])),!p.isMainPanel&&p.countOfSelectedProfessional>0&&!p.isTargetSelected?((0,i.wg)(),(0,i.iD)("div",ie,le)):(0,i.kq)("",!0)])),_:1}),oe])}a(7658);var re=a(2340),de=a(5800),ue=a(9398),ce=a(4313),ge=(a(1840),a(2283),a(3998)),me=a(1176),pe=a(4912),he=a(4058),ye={name:"recipient-public",props:{userIsProvider:Object,selecteduser:null,chatusers:Array,messages:Array,isProviderLoggedIn:Boolean},components:{chatPanel:me["default"],MDBContainer:ce.L5,MDBInput:ce.u2,MDBBtn:ce.$v,MDBBtnClose:ce.Ok,MDBRow:ce.uZ,MDBCol:ce.TK,MDBIcon:ce.vm,MDBBadge:ce.m_,MDBTextarea:ce.uj,VueDatePicker:pe.Z},data(){return{isOrder:!1,target:{},isTargetSelected:!1,isMainPanel:!0,isCreatingChatPanel:!1,prof:"",username:null,userId:null,providerId:null,address:null,myLat:null,mylng:null,countOfSelectedProfessional:0,isActiveProffs:!1,isDistSelection:!1,professional:"",currentProfession:"",distBtw:1,prodata:ge.Z,room:null,isChatPanel:!0,isMapChat:!1,providers:[],selectedProPosition:null,orderDate:null,orderHeader:"",orderDescription:""}},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.username=t.username,this.userId=t.id}this.resizeMap();new google.maps.Marker({icon:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"});this.userCurrentLocation();const t=document.getElementById("listOfProfessionals");t.addEventListener("change",(e=>{this.isDistSelection=!0,this.currentProfession=e.target.value,this.showClientLocationOnTheMap(e.target.value,this.distBtw)}));const a=document.getElementById("distance");a.addEventListener("change",(e=>{this.distBtw=parseFloat(e.target.value),console.log("+++++++++++ "+this.countOfSelectedProfessional>0),this.showClientLocationOnTheMap(this.currentProfession,this.distBtw)}));const i=document.getElementById("autocomplite"),s={lat:50.064192,lng:-130.605469},l={north:s.lat+.1,south:s.lat-.1,east:s.lng+.1,west:s.lng-.1},o={bounds:l,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},n=new google.maps.places.Autocomplete(i,o);n.addListener("place_changed",(()=>{let e=n.getPlace();this.myLat=e.geometry.location.lat(),this.myLng=e.geometry.location.lng(),this.getAddressFrom(e.geometry.location.lat(),e.geometry.location.lng()),this.address=e.formatted_address,console.log("Address xxxx "+e.formatted_address),console.log("place-----------"+this.myLat)}))},methods:{selectUser(e){this.$emit("select:user",e)},noSelectUser(){this.$emit("noSelected")},onMessage(e,t){this.$emit("on:message",e,t)},resizeMap(){var e=document.getElementById("map");e.style.height="100%",e.style.width="100%"},receive(){this.$router.push("/rf")},userCurrentLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:a}=e.coords;this.myLat=t,this.myLng=a,this.showUserLocationOnTheMap(t,a)}))},pinSymbol(e){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",fillColor:e,fillOpacity:1,strokeColor:"#000",strokeWeight:2,scale:1}},showUserLocationOnTheMap(e,t){new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP,accuracy:50});this.getAddressFrom(e,t)},getAddressFrom(e,t){re.Z.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key=AIzaSyDt2YXE5tk0J72JgqnH3DTD7MeoqbbWBmU").then((a=>{if(a.data.error_message)this.error=a.data.error_message,console.log(a.data.error_message);else{new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP});this.address=a.data.results[1].formatted_address}})).catch((e=>{this.error=e.message,console.log(e.message)}))},distanceBtw(e,t,a,i){var s=new google.maps.LatLng(e,t),l=new google.maps.LatLng(a,i);return(google.maps.geometry.spherical.computeDistanceBetween(s,l)/1e3).toFixed(2)},otherUserLocations(e,t,a){let i=!1,s=new google.maps.Map(document.getElementById("map"),{zoom:9,center:new google.maps.LatLng(this.myLat,this.myLng),mapTypeId:google.maps.MapTypeId.ROADMAP});console.log("Users count: "+e.length),console.log("Current distance "+a);let l=0;if(e.length>0){this.target={};for(let o=0;o<e.length;o++){console.log("------------ "+e[o].yritys);this.myLat,this.myLng;e[o].profession.forEach((n=>{if(n===t){console.log("Pro "+n.yritys);e[o].latitude,e[o].longitude;if(console.log("Distance btw "+this.distanceBtw(this.myLat,this.myLng,e[o].latitude,e[o].longitude)),this.isActiveProffs=!0,this.distanceBtw(this.myLat,this.myLng,e[o].latitude,e[o].longitude)<=a){let t;l++,t=this.isTargetSelected?new google.maps.Marker({position:new google.maps.LatLng(e[o].latitude,e[o].longitude),accuracy:50,map:s,icon:this.pinSymbol("orange"),label:{color:"#f75959",fontWeight:"bold",fontSize:"14px",text:"TMI "+e[o].yritys}}):new google.maps.Marker({position:new google.maps.LatLng(e[o].latitude,e[o].longitude),accuracy:50,map:s}),window.myGlobalFunction=this.openMarker;const a=new google.maps.InfoWindow({});google.maps.event.addListener(t,"click",(function(){console.log("POOOOS "+o);let l=o;i&&i.close(),i=a,a.open(s,t),a.setContent("<div  class='map-info-window'><p style=\"color: green; \">"+e[o].yritys+'</p><p style="color: red; " onclick="myGlobalFunction('+l+' )">Tiedot</p></div>')})),console.log("Prev infowondow "+i)}}}))}l>0?(this.isActiveProffs=!0,this.isMainPanel=!1):this.isActiveProffs=!1,this.countOfSelectedProfessional=l,console.log("countxx "+l),this.identifyProfText()}},createChatPanel(){if(this.target.user.username!==this.username){const e=this.target.yritys+this.username;console.log("Username in map: "+this.target.user.username),console.log("Room in map "+e),he.Z.emit("create room users",{room:e,username:this.username,providerUsername:this.target.user.username,providerID:this.target.user.id});const t={room:e,userID:this.target.user.id,username:this.target.user.username};this.$emit("chatCredentials",t)}this.isMapChat=!0},async openMarker(e){console.log("Profession "+this.currentProfession);const t=[this.currentProfession],a=await ue.Z.getProvidersMatchingByProfession({result:t});let i=[];console.log("Matching pro length "+a.length),a.forEach((e=>{console.log("Results: "+e.user.id);let t=parseInt(this.distanceBtw(this.myLat,this.myLng,e.latitude,e.longitude)).toFixed(0);i=i.concat({id:e.user.id,dist:t,pro:this.currentProfession})})),he.Z.emit("map search report",i);const s=await ue.Z.getProviders();s&&(console.log("watcher position "+this.myLat+" / "+this.myLng),s[e].user.username!==this.username&&(this.isCreatingChatPanel=!0),this.target=s[e],this.isTargetSelected=!0)},createBooking(){console.log("Here you can make an order! "+this.address),this.isOrder=!0},async confirmOrder(){let e;if(console.log("Order"),this.orderDate){let t=this.orderDate.getFullYear(),a=this.orderDate.getMonth(),i=this.orderDate.getDate(),s=this.orderDate.getHours(),l=this.orderDate.getMinutes();const o=new Date(t,a,i,s,l).getTime();e={created:this.orderDate,created_ms:o,header:this.orderHeader,address:this.address,latitude:this.myLat,longitude:this.myLng,professional:this.currentProfession,year:this.orderDate.getFullYear(),month:this.orderDate.getMonth(),day:this.orderDate.getDate(),hours:this.orderDate.getHours(),minutes:this.orderDate.getMinutes(),description:this.orderDescription,status:"notSeen",ordered:this.target.id}}console.log("Address: "+this.address);const t=await de.Z.addRecipient(this.userId,e);await de.Z.addProviderData(t.id,this.target.id);const a=await ue.Z.addProviderBooking(this.target.id,t.id);if("Recipient is added!"===a){console.log("Iiiiisss "+(this.target.yritys+this.username));const e=this.target.yritys+this.username,a={status:"",userID:this.target.user.id,name:this.target.user.username,room:e},i={room:e,userID:this.target.user.id,username:this.target.user.username};this.$emit("chatCredentials",i),this.$emit("client:confirmed_provider",this.target.id,t,a)}const i=this.target.user.id;this.$emit("booking:update",t),he.Z.emit("accept provider",{id:i,booking:t}),this.$router.push("/received")},async outFromMarkerPanel(){this.isTargetSelected=!1,this.noSelectUser();const e=await ue.Z.getProviders();null!==e&&this.otherUserLocations(e,this.currentProfession,this.distBtw)},closeMapChat(){this.isMapChat=!1},async returnToMainPanel(){this.isMainPanel=!0,this.noSelectUser()},closeMainPanel(){this.isMainPanel=!1,this.noSelectUser(),console.log("Close main panel")},renderClients(e){console.log("Event value "+e.target.value),e.target.value&&this.showClientLocationOnTheMap(e.target.value),this.prof=e.target.value,e.target.value=""},async showClientLocationOnTheMap(e,t){console.log("Current distance herexx  "+t);const a=await ue.Z.getProviders();null!==a&&this.otherUserLocations(a,e,t)},identifyProfText(){this.countOfSelectedProfessional>1?this.professional="ammattilaista":this.professional="ammattilainen"}}},ke=a(89);const fe=(0,ke.Z)(ye,[["render",ne]]);var ve=fe}}]);
//# sourceMappingURL=762.60fb3872.js.map