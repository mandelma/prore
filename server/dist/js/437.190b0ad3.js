(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[437],{4729:function(e){e.exports={}},5118:function(e,t,s){"use strict";var a=s(3396);const o=({message:e})=>null===e?null:(0,a.Wm)("div",{className:"error"},[e]);t.Z=o},3249:function(e,t,s){"use strict";const a=s(7218),o="/api/offers",r=async()=>{const e=await a.get(o);return e.data},n=async e=>{const t=await a.post(`${o}`,e);return t.data},i=async(e,t)=>{const s=await a.post(`${o}/${e}`,t);return s.data},l=async(e,t)=>{const s=await a.delete(`${o}/${e}/timeoffer/${t}`);return s.data},d=async(e,t)=>{const s=await a.put(`${o}/${e}`,t);return s.data};t.Z={getOffers:r,addFirstOffer:n,addAdditionalOffer:i,removeTimeOffer:l,updateOffer:d}},8437:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return T}});s(7658);var a=s(3396),o=s(7139),r=s(9242);const n=(0,a._)("h2",{style:{"margin-top":"200px","margin-bottom":"50px"}},"-TMI panel-",-1),i={class:"ui large form"},l={class:"field"},d=(0,a._)("option",{disabled:"",value:""},"Valitse ammatti",-1),u=(0,a._)("option",null,"Putkimies",-1),m=(0,a._)("option",null,"Sähkömies",-1),c=(0,a._)("option",null,"Siivooja",-1),g=[d,u,m,c];function p(e,t,s,d,u,m){const c=(0,a.up)("ErrorNotification"),p=(0,a.up)("MDBInput"),h=(0,a.up)("VueDatePicker"),f=(0,a.up)("MDBCheckbox"),y=(0,a.up)("MDBBtn"),_=(0,a.up)("MDBContainer");return(0,a.wg)(),(0,a.iD)("div",null,[n,(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{message:u.errorFormMessage},null,8,["message"]),(0,a._)("form",null,[(0,a.Wm)(p,{label:"Anna yrityksen nimi",modelValue:d.yritys,"onUpdate:modelValue":t[0]||(t[0]=e=>d.yritys=e),id:"yritys",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,a.Wm)(p,{label:"Anna yrityksen y-tunnus",modelValue:d.ytunnus,"onUpdate:modelValue":t[1]||(t[1]=e=>d.ytunnus=e),id:"ytunnus",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,a.Wm)(p,{label:"Anna osoitteesi",id:"osoite",size:"lg",wrapperClass:"mb-4"}),(0,a.Wm)(p,{label:"Anna tuntihinta",modelValue:d.price,"onUpdate:modelValue":t[2]||(t[2]=e=>d.price=e),id:"hinta",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,a.Wm)(h,{size:"lg",placeholder:"Mistä mihin asti palvelet?",style:{"margin-bottom":"20px"},modelValue:d.date,"onUpdate:modelValue":t[3]||(t[3]=e=>d.date=e),id:"datte","min-date":new Date,"partial-range":!1,range:"","max-range":"0.5"},null,8,["modelValue","min-date"]),(0,a._)("div",null,"Selected: "+(0,o.zw)(u.profession),1),(0,a._)("div",i,[(0,a._)("div",l,[(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>u.profession=e)},g,512),[[r.bM,u.profession]])])]),(0,a.Wm)(f,{label:"Saatavilla 24/7",modelValue:d.isAvailable24_7,"onUpdate:modelValue":t[5]||(t[5]=e=>d.isAvailable24_7=e)},null,8,["modelValue"])]),(0,a._)("h1",null,(0,o.zw)(u.result),1),(0,a.Wm)(y,{outline:"success",size:"lg",block:"",onClick:m.addProvider},{default:(0,a.w5)((()=>[(0,a.Uk)("Add provider profile")])),_:1},8,["onClick"]),(0,a.Wm)(y,{outline:"danger",size:"lg",block:"",onClick:t[6]||(t[6]=e=>this.$router.push("/")),style:{"margin-bottom":"50px"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" Poistu ")])),_:1})])),_:1})])}var h=s(4870),f=s(4912),y=s(5118),_=s(4313),v=s(4161);const w=s(7218),b="/api/map",k=async()=>{const e=await w.get(b);return e.data};var M={getLocation:k},V=s(9398),A=s(3249);const D=s(4729),F=s(4729);var B={name:"provider-form",data(){return{result:"",errorFormMessage:null,latitude:0,longitude:0,address:"",profession:"",userId:""}},setup(){const e=(0,h.iH)(""),t=(0,h.iH)(""),s=(0,h.iH)(""),a=(0,h.iH)(null),o=(0,h.iH)(!1);return{yritys:e,ytunnus:t,date:s,price:a,isAvailable24_7:o}},components:{MDBContainer:_.L5,MDBBtn:_.$v,MDBInput:_.u2,MDBCheckbox:_.IH,VueDatePicker:f.Z,errorNotification:y.Z},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.userId=t.id,console.log("User id in Provider: "+t.id)}console.log("Google key is: "+F.google);const t={lat:50.064192,lng:-130.605469},s={north:t.lat+.1,south:t.lat-.1,east:t.lng+.1,west:t.lng-.1},a=document.getElementById("osoite"),o={bounds:s,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},r=new google.maps.places.Autocomplete(a,o);r.addListener("place_changed",(()=>{let e=r.getPlace();this.latitude=e.geometry.location.lat(),this.longitude=e.geometry.location.lng(),console.log(e),console.log("Latitude: "+e.geometry.location.lat()),console.log("Full address: "+e.formatted_address),this.address=e.formatted_address}))},methods:{canselSession(){this.$emit("cansel:provider","Test")},getAddress(){v.Z.get("https://maps.googleapis.com/maps/api/geocode/json?address=01620+Raikukuja,+Vantaa&key="+D.googleMap).then((e=>{e.data.error_message?(this.error=e.data.error_message,console.log(e.data.error_message)):(this.address=e.data.results[0].formatted_address,console.log(e.data.results[0].formatted_address),console.log(e.data.results[0].address_components[0].long_name),this.result=e.data.results[0].formatted_address)})).catch((e=>{this.error=e.message,this.spinner=!1,console.log(e.message)}))},async addProvider(){const e={yearFrom:this.date[0].getFullYear(),monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),yearTo:this.date[0].getFullYear(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},t=await A.Z.addFirstOffer(e),s={yritys:this.yritys,ytunnus:this.ytunnus,address:this.address,latitude:this.latitude,longitude:this.longitude,profession:this.profession,priceByHour:this.price,isAvailable24_7:this.isAvailable24_7,timeId:t.id},a=await V.Z.addProvider(this.userId,s);console.log("Added provider::: "+a),a?this.$router.push("/provider-panel"):(this.errorFormMessage="Tarkista kentat ja yritä uuddelleen!",setTimeout((()=>{this.errorFormMessage=null}),2e3))},testMonth(){},async getTest(){const e=await M.getLocation();console.log("result "+e)}}},C=s(89);const $=(0,C.Z)(B,[["render",p]]);var T=$}}]);
//# sourceMappingURL=437.190b0ad3.js.map