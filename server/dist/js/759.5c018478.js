(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[759],{4729:function(e){e.exports={}},3249:function(e,t,s){"use strict";const a=s(7218),o="/api/offers",i=async()=>{const e=await a.get(o);return e.data},n=async e=>{const t=await a.post(`${o}`,e);return t.data},l=async(e,t)=>{const s=await a.post(`${o}/${e}`,t);return s.data},r=async(e,t)=>{const s=await a.delete(`${o}/${e}/timeoffer/${t}`);return s.data},d=async(e,t)=>{const s=await a.put(`${o}/${e}`,t);return s.data};t["Z"]={getOffers:i,addFirstOffer:n,addAdditionalOffer:l,removeTimeOffer:r,updateOffer:d}},7759:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return H}});s(7658);var a=s(3396),o=s(7139),i=s(9242);const n=(0,a._)("h2",{style:{"margin-top":"50px","margin-bottom":"50px"}},"Hei, olen TMI ja tarjoan palvelua!",-1),l={class:"ui large form"},r={class:"field"},d=(0,a._)("option",{disabled:"",value:""},"Valitse ammatti",-1),u=(0,a._)("option",null,"Putkimies",-1),c=(0,a._)("option",null,"Sähkömies",-1),m=(0,a._)("option",null,"Siivooja",-1),p=[d,u,c,m];function g(e,t,s,d,u,c){const m=(0,a.up)("MDBInput"),g=(0,a.up)("VueDatePicker"),h=(0,a.up)("MDBCheckbox"),f=(0,a.up)("MDBBtn"),y=(0,a.up)("MDBContainer");return(0,a.wg)(),(0,a.iD)("div",null,[n,(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a._)("form",null,[(0,a.Wm)(m,{label:"Anna yrityksen nimi",id:"yritys",size:"lg",wrapperClass:"mb-4"}),(0,a.Wm)(m,{label:"Anna yrityksen y-tunnus",id:"ytunnus",size:"lg",wrapperClass:"mb-4"}),(0,a.Wm)(m,{label:"Anna osoitteesi",id:"osoite",size:"lg",wrapperClass:"mb-4"}),(0,a.Wm)(m,{label:"Anna tuntihinta",modelValue:d.price,"onUpdate:modelValue":t[0]||(t[0]=e=>d.price=e),id:"hinta",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,a.Wm)(g,{size:"lg",placeholder:"Mistä mihin asti palvelet?",style:{"margin-bottom":"20px"},modelValue:d.date,"onUpdate:modelValue":t[1]||(t[1]=e=>d.date=e),id:"datte",range:"","partial-range":!1},null,8,["modelValue"]),(0,a._)("div",null,"Selected: "+(0,o.zw)(u.profession),1),(0,a._)("div",l,[(0,a._)("div",r,[(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>u.profession=e)},p,512),[[i.bM,u.profession]])])]),(0,a.Wm)(h,{label:"Saatavilla 24/7",modelValue:d.isAvailable24_7,"onUpdate:modelValue":t[3]||(t[3]=e=>d.isAvailable24_7=e)},null,8,["modelValue"])]),(0,a._)("h1",null,(0,o.zw)(u.result),1),(0,a.Wm)(f,{outline:"success",size:"lg",block:"",onClick:c.addProvider},{default:(0,a.w5)((()=>[(0,a.Uk)("Add provider profile")])),_:1},8,["onClick"]),(0,a.Wm)(f,{outline:"danger",size:"lg",block:"",onClick:t[4]||(t[4]=e=>this.$router.push("/")),style:{"margin-bottom":"50px"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" Poistu ")])),_:1})])),_:1})])}var h=s(4870),f=s(6691),y=s(4313),_=s(4161);const v=s(7218),b="/api/map",w=async()=>{const e=await v.get(b);return e.data};var k={getLocation:w},M=s(9398),A=s(3249);const V=s(4729),B=s(4729);var C={name:"provider-form",data(){return{result:"",latitude:0,longitude:0,address:"",profession:"",userId:""}},setup(){const e=(0,h.iH)(""),t=(0,h.iH)(""),s=(0,h.iH)(""),a=(0,h.iH)(null),o=(0,h.iH)(!1);return{yritys:e,ytunnus:t,date:s,price:a,isAvailable24_7:o}},components:{MDBContainer:y.L5,MDBBtn:y.$v,MDBInput:y.u2,MDBCheckbox:y.IH,VueDatePicker:f.Z},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.userId=t.id,console.log("User id in Provider: "+t.id)}console.log("Google key is: "+B.google);const t={lat:50.064192,lng:-130.605469},s={north:t.lat+.1,south:t.lat-.1,east:t.lng+.1,west:t.lng-.1},a=document.getElementById("osoite"),o={bounds:s,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},i=new google.maps.places.Autocomplete(a,o);i.addListener("place_changed",(()=>{let e=i.getPlace();this.latitude=e.geometry.location.lat(),this.longitude=e.geometry.location.lng(),console.log(e),console.log("Latitude: "+e.geometry.location.lat()),console.log("Full address: "+e.formatted_address),this.address=e.formatted_address}))},methods:{canselSession(){this.$emit("cansel:provider","Test")},getAddress(){_.Z.get("https://maps.googleapis.com/maps/api/geocode/json?address=01620+Raikukuja,+Vantaa&key="+V.googleMap).then((e=>{e.data.error_message?(this.error=e.data.error_message,console.log(e.data.error_message)):(this.address=e.data.results[0].formatted_address,console.log(e.data.results[0].formatted_address),console.log(e.data.results[0].address_components[0].long_name),this.result=e.data.results[0].formatted_address)})).catch((e=>{this.error=e.message,this.spinner=!1,console.log(e.message)}))},async addProvider(){const e={monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},t=await A.Z.addFirstOffer(e),s={yritys:this.yritys,ytunnus:this.ytunnus,address:this.address,latitude:this.latitude,longitude:this.longitude,profession:this.profession,priceByHour:this.price,isAvailable24_7:this.isAvailable24_7,timeId:t.id},a=await M.Z.addProvider(this.userId,s);console.log("Added provider::: "+a)},testMonth(){},async getTest(){const e=await k.getLocation();console.log("result "+e)}}},D=s(89);const $=(0,D.Z)(C,[["render",g]]);var H=$}}]);
//# sourceMappingURL=759.5c018478.js.map