"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[295],{2194:function(e,t,n){const o=n(7218),a="/api/map",s=async()=>{const e=await o.get(a);return e.data};t["Z"]={getLocation:s}},5800:function(e,t,n){const o=n(7218),a="/api/recipients",s=async()=>{const e=await o.get(a);return e.data},l=async(e,t)=>{const n=await o.post(`${a}/${e}`,t);return n.data};t["Z"]={getRecipients:s,addRecipient:l}},2295:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});n(7658);var o=n(3396),a=n(7139),s=n(9242);const l=(0,o._)("h2",{style:{"margin-top":"50px"}},"Client",-1),i={class:"ui form"},d={class:"field"},r=(0,o._)("option",{disabled:"",value:""},"Valitse ammattilainen",-1),u=(0,o._)("option",null,"Putkimies",-1),c=(0,o._)("option",null,"Sähkömies",-1),p=(0,o._)("option",null,"Siivooja",-1),m=[r,u,c,p];function g(e,t,n,r,u,c){const p=(0,o.up)("MDBInput"),g=(0,o.up)("VueDatePicker"),h=(0,o.up)("MDBBtn"),f=(0,o.up)("MDBContainer");return(0,o.wg)(),(0,o.iD)("div",null,[l,(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o._)("form",null,[(0,o.Wm)(p,{label:"Anna osoitteesi",modelValue:u.address,"onUpdate:modelValue":t[0]||(t[0]=e=>u.address=e),id:"osoite",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,o.Wm)(g,{placeholder:"Missä aikavälillä haluat ammattilaista?",style:{"margin-bottom":"20px"},modelValue:u.date,"onUpdate:modelValue":t[1]||(t[1]=e=>u.date=e)},null,8,["modelValue"]),(0,o._)("div",null,"Selected: "+(0,a.zw)(u.professional),1),(0,o._)("div",i,[(0,o._)("div",d,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>u.professional=e)},m,512),[[s.bM,u.professional]])])])]),(0,o._)("h1",null,(0,a.zw)(e.result),1),(0,o.Wm)(h,{outline:"success",size:"lg",block:"",onClick:t[3]||(t[3]=e=>this.$router.push("/received"))},{default:(0,o.w5)((()=>[(0,o.Uk)("Kinnita andmed")])),_:1}),(0,o.Wm)(h,{outline:"success",size:"lg",block:"",onClick:c.addRecipient},{default:(0,o.w5)((()=>[(0,o.Uk)("Add")])),_:1},8,["onClick"]),(0,o.Wm)(h,{outline:"danger",size:"lg",block:"",onClick:t[4]||(t[4]=e=>this.$router.push("/")),style:{"margin-bottom":"50px"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cansel ")])),_:1})])),_:1})])}var h=n(6725),f=n(4313),k=n(5800),_=n(2194),w={name:"recipient-form",components:{MDBBtn:f.$v,MDBContainer:f.L5,MDBInput:f.u2,VueDatePicker:h.Z},data(){return{recipientId:null,address:null,lat:null,lng:null,professional:"",date:null}},async mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.recipientId=t.id,console.log("User id in recipient: "+t.id)}console.log("Google key test: "+await _.Z.getLocation());const t={lat:50.064192,lng:-130.605469},n={north:t.lat+.1,south:t.lat-.1,east:t.lng+.1,west:t.lng-.1},o=document.getElementById("osoite"),a={bounds:n,componentRestrictions:{country:"est"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},s=new google.maps.places.Autocomplete(o,a);s.addListener("place_changed",(()=>{let e=s.getPlace();this.lat=e.geometry.location.lat(),this.lng=e.geometry.location.lng(),this.address=e.formatted_address,console.log(e)}))},methods:{backToDashboard(){},async addRecipient(){const e={address:this.address,latitude:this.lat,longitude:this.lng,professional:this.professional,month:this.date.getMonth(),day:this.date.getDate(),hours:this.date.getHours(),minutes:this.date.getMinutes()};await k.Z.addRecipient(this.recipientId,e)}}},y=n(89);const b=(0,y.Z)(w,[["render",g]]);var v=b}}]);
//# sourceMappingURL=295.3d5eaeb3.js.map