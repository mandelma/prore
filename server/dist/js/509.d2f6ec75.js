(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[509],{4729:function(e){e.exports={}},5118:function(e,t,o){"use strict";var l=o(3396);const a=({message:e})=>null===e?null:(0,l.Wm)("div",{className:"error"},[e,(0,l.Wm)("img",{className:"errorImg",alt:"error",src:o(5551)},null)]);t.Z=a},2509:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return P}});o(7658);var l=o(3396),a=o(7139);const s=(0,l._)("h2",{style:{"margin-top":"50px","margin-bottom":"50px"}},"-TMI panel-",-1),r={autocomplete:"off",style:{padding:"5px"}},i=(0,l._)("p",{style:{"text-align":"left",color:"deepskyblue","font-size":"18px"}},"jos sädettä ei ole merkitty, se tarkoittaa, että tarjoat palvelua vain määritetyssä osoitteessa",-1),n={style:{"margin-bottom":"20px"}},d={value:"slotProps"},u={key:0},p={key:1},m={style:{},class:"flex align-items-center"},c={style:{"text-align":"left"}},g={style:{"text-align":"left"}},h={style:{margin:"20px 0 20px 0","text-align":"left"}};function y(e,t,o,y,b,_){const w=(0,l.up)("ErrorNotification"),f=(0,l.up)("MDBInput"),v=(0,l.up)("Dropdown"),k=(0,l.up)("MDBRadio"),V=(0,l.up)("MDBCheckbox"),C=(0,l.up)("MDBBtn"),x=(0,l.up)("MDBContainer");return(0,l.wg)(),(0,l.iD)("div",null,[s,(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,{message:b.errorFormMessage},null,8,["message"]),(0,l._)("form",r,[(0,l.Wm)(f,{label:"Anna yrityksen nimi",modelValue:y.yritys,"onUpdate:modelValue":t[0]||(t[0]=e=>y.yritys=e),white:"",id:"yritys",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,l.Wm)(f,{label:"Anna yrityksen y-tunnus",modelValue:y.ytunnus,"onUpdate:modelValue":t[1]||(t[1]=e=>y.ytunnus=e),white:"",id:"ytunnus",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,l.Wm)(f,{label:"Anna osoitteesi",white:"",id:"osoite",size:"lg",wrapperClass:"mb-4"}),i,(0,l.Wm)(f,{wrapperClass:"mb-4",label:"Anna toiminta-alueen säde - km",white:"",modelValue:y.range,"onUpdate:modelValue":t[2]||(t[2]=e=>y.range=e),size:"lg",type:"number"},null,8,["modelValue"]),(0,l._)("div",n,[(0,l.Wm)(v,{modelValue:b.profession,"onUpdate:modelValue":t[3]||(t[3]=e=>b.profession=e),options:b.prodata,filter:"",optionLabel:"label",optionGroupLabel:"label",showClear:"",optionGroupChildren:"items",placeholder:"Valitse ammattilainen",class:"w-full md:w-100rem"},{optiongroup:(0,l.w5)((e=>[(0,l._)("div",m,[(0,l._)("div",null,(0,a.zw)(e.option.label),1)])])),default:(0,l.w5)((()=>[(0,l._)("template",d,[e.slotProps.value?((0,l.wg)(),(0,l.iD)("div",u,[(0,l._)("div",null,(0,a.zw)(e.slotProps.value.label),1)])):((0,l.wg)(),(0,l.iD)("span",p,(0,a.zw)(e.slotProps.placeholder),1))])])),_:1},8,["modelValue","options"])]),(0,l._)("div",c,[(0,l.Wm)(k,{white:"",label:"Tuntihinta",name:"aboutPrice",modelValue:y.about_price,"onUpdate:modelValue":t[4]||(t[4]=e=>y.about_price=e),value:"hour",wrapperClass:"mb-4"},null,8,["modelValue"])]),"hour"===y.about_price?((0,l.wg)(),(0,l.j4)(f,{key:0,label:"Anna tuntihinta",modelValue:y.price,"onUpdate:modelValue":t[5]||(t[5]=e=>y.price=e),white:"",id:"hinta",size:"lg",wrapperClass:"mb-4"},null,8,["modelValue"])):(0,l.kq)("",!0),(0,l._)("div",g,[(0,l.Wm)(k,{white:"",label:"Urakkahinta",name:"aboutPrice",modelValue:y.about_price,"onUpdate:modelValue":t[6]||(t[6]=e=>y.about_price=e),value:"piece",wrapperClass:"mb-4"},null,8,["modelValue"])]),(0,l.Wm)(f,{white:"",label:"Anna yrityksen kotisivun osoite jos on",size:"lg",modelValue:y.pro_link,"onUpdate:modelValue":t[7]||(t[7]=e=>y.pro_link=e),wrapperClass:"mb-4"},null,8,["modelValue"]),(0,l._)("div",h,[(0,l.Wm)(V,{label:"Saatavilla 24/7",modelValue:y.isAvailable24_7,"onUpdate:modelValue":t[8]||(t[8]=e=>y.isAvailable24_7=e)},null,8,["modelValue"])])]),(0,l.Wm)(C,{outline:"success",size:"lg",block:"",onClick:_.addProvider},{default:(0,l.w5)((()=>[(0,l.Uk)("Add provider profile")])),_:1},8,["onClick"]),(0,l.Wm)(C,{outline:"danger",size:"lg",block:"",onClick:t[9]||(t[9]=e=>this.$router.push("/")),style:{"margin-bottom":"50px"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" Poistu ")])),_:1})])),_:1})])}var b=o(4870),_=o(3998),w=o(9673),f=o(5118),v=o(4313),k=o(4161);const V=o(7218),C="/api/map",x=async()=>{const e=await V.get(C);return e.data};var M={getLocation:x},A=o(9398);const B=o(4729),D=o(4729);var W={name:"provider-form",data(){return{result:"",errorFormMessage:null,latitude:0,longitude:0,address:"",profession:null,userId:"",prodata:_.Z}},setup(){const e=(0,b.iH)(""),t=(0,b.iH)(""),o=(0,b.iH)(""),l=(0,b.iH)(null),a=(0,b.iH)(null),s=(0,b.iH)("hour"),r=(0,b.iH)(null),i=(0,b.iH)(!1);return{yritys:e,ytunnus:t,date:o,price:l,range:a,about_price:s,pro_link:r,isAvailable24_7:i}},components:{MDBContainer:v.L5,MDBBtn:v.$v,MDBInput:v.u2,MDBCheckbox:v.IH,MDBRadio:v.Xc,Dropdown:w.Z,errorNotification:f.Z},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.userId=t.id,console.log("User id in Provider: "+t.id)}console.log("Google key is: "+D.google);const t={lat:50.064192,lng:-130.605469},o={north:t.lat+.1,south:t.lat-.1,east:t.lng+.1,west:t.lng-.1},l=document.getElementById("osoite"),a={bounds:o,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},s=new google.maps.places.Autocomplete(l,a);s.addListener("place_changed",(()=>{let e=s.getPlace();this.latitude=e.geometry.location.lat(),this.longitude=e.geometry.location.lng(),console.log(e),console.log("Latitude: "+e.geometry.location.lat()),console.log("Full address: "+e.formatted_address),this.address=e.formatted_address}))},methods:{canselSession(){this.$emit("cansel:provider","Test")},getAddress(){k.Z.get("https://maps.googleapis.com/maps/api/geocode/json?address=01620+Raikukuja,+Vantaa&key="+B.googleMap).then((e=>{e.data.error_message?(this.error=e.data.error_message,console.log(e.data.error_message)):(this.address=e.data.results[0].formatted_address,console.log(e.data.results[0].formatted_address),console.log(e.data.results[0].address_components[0].long_name),this.result=e.data.results[0].formatted_address)})).catch((e=>{this.error=e.message,this.spinner=!1,console.log(e.message)}))},async addProvider(){const e={yritys:this.yritys,ytunnus:this.ytunnus,address:this.address,latitude:this.latitude,longitude:this.longitude,profession:this.profession.label,priceByHour:"hour"===this.about_price?this.price:null,range:null===this.range?0:this.range,proLink:this.pro_link,isAvailable24_7:this.isAvailable24_7},t=await A.Z.addProvider(this.userId,e);console.log("Added provider::: "+t),t?(this.$router.push("/provider-panel"),this.$emit("show-created-provider",t)):(this.errorFormMessage="Tarkista kentat ja yritä uuddelleen!",setTimeout((()=>{this.errorFormMessage=null}),2e3))},testMonth(){},async getTest(){const e=await M.getLocation();console.log("result "+e)}}},U=o(89);const z=(0,U.Z)(W,[["render",y]]);var P=z},5551:function(e,t,o){"use strict";e.exports=o.p+"img/error.9510853e.png"}}]);
//# sourceMappingURL=509.d2f6ec75.js.map