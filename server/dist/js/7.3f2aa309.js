"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[7],{9398:function(e,t,s){const o=s(7218),a="/api/providers",n=async()=>{const e=await o.get(a);return e.data},l=async(e,t)=>{const s=await o.post(`${a}/${e}`,t);return s.data};t["Z"]={getProviders:n,addProvider:l}},1007:function(e,t,s){s.r(t),s.d(t,{default:function(){return z}});s(7658);var o=s(3396),a=s(7139),n=s(9242);const l=(0,o._)("h2",{style:{"margin-top":"50px","margin-bottom":"50px"}},"Hei, olen TMI ja tarjoan palvelua!",-1),i={class:"ui large form"},r={class:"field"},d=(0,o._)("option",{disabled:"",value:""},"Valitse ammatti",-1),u=(0,o._)("option",null,"Putkimies",-1),c=(0,o._)("option",null,"Sähkömies",-1),m=(0,o._)("option",null,"Siivooja",-1),g=[d,u,c,m];function p(e,t,s,d,u,c){const m=(0,o.up)("MDBInput"),p=(0,o.up)("VueDatePicker"),h=(0,o.up)("MDBCheckbox"),y=(0,o.up)("MDBBtn"),_=(0,o.up)("MDBContainer");return(0,o.wg)(),(0,o.iD)("div",null,[l,(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o._)("form",null,[(0,o.Wm)(m,{label:"Anna yrityksen nimi",id:"yritys",size:"lg",wrapperClass:"mb-4"}),(0,o.Wm)(m,{label:"Anna yrityksen y-tunnus",id:"ytunnus",size:"lg",wrapperClass:"mb-4"}),(0,o.Wm)(m,{label:"Anna osoitteesi",id:"osoite",size:"lg",wrapperClass:"mb-4"}),(0,o.Wm)(m,{label:"Anna tuntihinta",modelValue:d.price,"onUpdate:modelValue":t[0]||(t[0]=e=>d.price=e),id:"hinta",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,o.Wm)(p,{size:"lg",placeholder:"Mistä mihin asti palvelet?",style:{"margin-bottom":"20px"},modelValue:d.date,"onUpdate:modelValue":t[1]||(t[1]=e=>d.date=e),id:"datte",range:""},null,8,["modelValue"]),(0,o._)("div",null,"Selected: "+(0,a.zw)(u.profession),1),(0,o._)("div",i,[(0,o._)("div",r,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>u.profession=e)},g,512),[[n.bM,u.profession]])])]),(0,o.Wm)(h,{label:"Saatavilla 24/7",modelValue:d.isAvailable24_7,"onUpdate:modelValue":t[3]||(t[3]=e=>d.isAvailable24_7=e)},null,8,["modelValue"])]),(0,o._)("h1",null,(0,a.zw)(u.result),1),(0,o.Wm)(y,{outline:"success",size:"lg",block:"",onClick:c.addProvider},{default:(0,o.w5)((()=>[(0,o.Uk)("Testaus")])),_:1},8,["onClick"]),(0,o.Wm)(y,{outline:"success",size:"lg",block:"",onClick:t[4]||(t[4]=e=>this.$router.push("/provided"))},{default:(0,o.w5)((()=>[(0,o.Uk)("Kinnita andmed")])),_:1}),(0,o.Wm)(y,{outline:"success",size:"lg",block:"",onClick:c.testMonth},{default:(0,o.w5)((()=>[(0,o.Uk)("Date month")])),_:1},8,["onClick"]),(0,o.Wm)(y,{outline:"danger",size:"lg",block:"",onClick:t[5]||(t[5]=e=>this.$router.push("/")),style:{"margin-bottom":"50px"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cansel ")])),_:1})])),_:1})])}var h=s(4870),y=s(6725),_=s(4313),f=s(4161);const v=s(7218),k="/api/map",b=async()=>{const e=await v.get(k);return e.data};var w={getLocation:b},M=s(9398);const C=s(4729),D=s(4729);var V={name:"provider-form",data(){return{result:"",latitude:0,longitude:0,address:"",profession:"",userId:""}},setup(){const e=(0,h.iH)(""),t=(0,h.iH)(""),s=(0,h.iH)(""),o=(0,h.iH)(null),a=(0,h.iH)(!1);return{yritys:e,ytunnus:t,date:s,price:o,isAvailable24_7:a}},components:{MDBContainer:_.L5,MDBBtn:_.$v,MDBInput:_.u2,MDBCheckbox:_.IH,VueDatePicker:y.Z},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.userId=t.id,console.log("User id in Provider: "+t.id)}console.log("Google key is: "+D.google);const t={lat:50.064192,lng:-130.605469},s={north:t.lat+.1,south:t.lat-.1,east:t.lng+.1,west:t.lng-.1},o=document.getElementById("osoite"),a={bounds:s,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},n=new google.maps.places.Autocomplete(o,a);n.addListener("place_changed",(()=>{let e=n.getPlace();this.latitude=e.geometry.location.lng(),this.longitude=e.geometry.location.lng(),console.log(e),console.log("Latitude: "+e.geometry.location.lng()),console.log("Full address: "+e.formatted_address),this.address=e.formatted_address}))},methods:{canselSession(){this.$emit("cansel:provider","Test")},getAddress(){f.Z.get("https://maps.googleapis.com/maps/api/geocode/json?address=01620+Raikukuja,+Vantaa&key="+C.googleMap).then((e=>{e.data.error_message?(this.error=e.data.error_message,console.log(e.data.error_message)):(this.address=e.data.results[0].formatted_address,console.log(e.data.results[0].formatted_address),console.log(e.data.results[0].address_components[0].long_name),this.result=e.data.results[0].formatted_address)})).catch((e=>{this.error=e.message,this.spinner=!1,console.log(e.message)}))},async addProvider(){const e={yritys:this.yritys,ytunnus:this.ytunnus,address:this.address,latitude:this.latitude,longitude:this.longitude,profession:this.profession,priceByHour:this.price,isAvailable24_7:this.isAvailable24_7,monthFrom:this.date[0].getMonth(),dayFrom:this.date[0].getDate(),hoursFrom:this.date[0].getHours(),minutesFrom:this.date[0].getMinutes(),monthTo:this.date[1].getMonth(),dayTo:this.date[1].getDate(),hoursTo:this.date[1].getHours(),minutesTo:this.date[1].getMinutes()},t=await M.Z.addProvider(this.userId,e);console.log("Added provider::: "+t)},testMonth(){console.log("Month: "+this.date[0].getMonth())},async getTest(){const e=await w.getLocation();console.log("result "+e)}}},A=s(89);const B=(0,A.Z)(V,[["render",p]]);var z=B}}]);
//# sourceMappingURL=7.3f2aa309.js.map