(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[320],{4729:function(o){o.exports={}},6320:function(o,e,t){"use strict";t.r(e),t.d(e,{default:function(){return f}});var s=t(3396),n=t(7139),a=t(9242);const r=(0,s._)("h1",null,"User location page",-1),l={class:"ui two column centered grid",style:{position:"relative","z-index":"1"}},i={class:"column"},c={class:"ui segment large form"},d={class:"ui segment"},g={class:"field"},u=(0,s._)("section",{id:"map"},null,-1);function p(o,e,t,p,m,h){return(0,s.wg)(),(0,s.iD)("div",null,[r,(0,s._)("section",l,[(0,s._)("div",i,[(0,s._)("form",c,[(0,s.wy)((0,s._)("div",{class:"ui message red"},(0,n.zw)(m.error),513),[[a.F8,m.error]]),(0,s._)("div",d,[(0,s._)("div",g,[(0,s._)("div",{class:(0,n.C_)(["ui right icon input large",{loading:m.spinner}])},[(0,s.wy)((0,s._)("input",{type:"text",placeholder:"Enter your address:","onUpdate:modelValue":e[0]||(e[0]=o=>m.address=o),id:"autocomplete"},null,512),[[a.nr,m.address]]),(0,s._)("i",{class:"dot circle link icon",onClick:e[1]||(e[1]=(...o)=>h.locatorButtonPressed&&h.locatorButtonPressed(...o))})],2)]),(0,s._)("button",{class:"ui button",onClick:e[2]||(e[2]=(...o)=>h.testPlace&&h.testPlace(...o))},"Go")])])])]),u])}var m=t(2340);const h=t(4729);var _={name:"user-location",data(){return{address:"",error:"",spinner:!1,lat:"",lng:""}},mounted(){const o={lat:50.064192,lng:-130.605469},e={north:o.lat+.1,south:o.lat-.1,east:o.lng+.1,west:o.lng-.1},t=document.getElementById("autocomplete"),s={bounds:e,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name"],strictBounds:!1},n=new google.maps.places.Autocomplete(t,s);n.addListener("place_changed",(()=>{let o=n.getPlace();this.lat=o.geometry.location.lat(),this.lng=o.geometry.location.lng(),console.log(o),this.showUserLocationOnTheMap(o.geometry.location.lat(),o.geometry.location.lng())}))},methods:{test(){console.log("Key is: "+h.googleMap)},locatorButtonPressed(){this.spinner=!0,console.log("Google maps test"),navigator.geolocation?navigator.geolocation.getCurrentPosition((o=>{this.getAddressFrom(o.coords.latitude,o.coords.longitude),console.log("pos latitude: "+o.coords.latitude),console.log("Pos longitude: "+o.coords.longitude),this.showUserLocationOnTheMap(o.coords.latitude,o.coords.longitude)}),(o=>{this.error="Locator is unable to find your address. Please type your address!",console.log("Error"+o),this.spinner=!1})):console.log("Your Browser does not support geolocation API")},getAddressFrom(o,e){m.Z.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+o+","+e+"&key="+h.googleMap).then((o=>{o.data.error_message?(this.error=o.data.error_message,this.spinner=!1,console.log(o.data.error_message)):(this.address=o.data.results[0].formatted_address,console.log(o.data.results.results[0].formatted_address))})).catch((o=>{this.error=o.message,this.spinner=!1,console.log(o.message)}))},showUserLocationOnTheMap(o,e){let t=new google.maps.Map(document.getElementById("map"),{zoom:15,center:new google.maps.LatLng(o,e),mapTypeId:google.maps.MapTypeId.ROADMAP});new google.maps.Marker({position:new google.maps.LatLng(o,e),map:t})},testPlace(){console.log("Lat: "+this.lat),console.log("Lng: "+this.lng)}}},y=t(89);const w=(0,y.Z)(_,[["render",p]]);var f=w}}]);
//# sourceMappingURL=320.696064ba.js.map