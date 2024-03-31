"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[273],{3998:function(e,t){const a=[{label:"Hitsaaja",value:"1"},{label:"Putkimies",value:"2"},{label:"Sähkömies",value:"3"}],l=[{label:"Siivooja",value:"4"}],i=[{group:"Rakennus",options:a},{group:"Kiinteistöala",options:l}];t.Z=i},8579:function(e,t,a){const l=a(7218),i="/api/upload",o=async()=>{const e=await l.get(i);return e.data},n=async e=>{const t=await l.post(i,e,{});return t.data},s=async(e,t)=>{const a=await l.post(`${i}/${e}/avatar`,t);return a.data},d=async(e,t)=>{const a=await l.post(`${i}/${e}/update_avatar`,t);return a.data},r=async(e,t)=>{const a=await l.put(`${i}/${e}`,t);return a.data},u=async(e,t)=>{await l.delete(`${i}/${e}/${t}`)};t.Z={getAll:o,create:n,createProfileImage:s,newAvatar:d,updateImage:r,remove:u}},2273:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});a(7658);var l=a(3396),i=a(9242),o=a(7139);const n=(0,l._)("h2",null,"- Uusi tilaus -",-1),s={key:0,style:{"text-align":"left"}},d={class:"ui form"},r={class:"field"},u=(0,l._)("option",{value:""},"Valitse ammattilainen",-1),c=["label"],g=["value"],p=["value"],m=(0,l._)("option",{value:""},"Valitse ammattilainen",-1),h=["label"],k=["value"],w=["value"],f=["src"],v={key:1,for:"file-upload",class:"custom-file-upload"},y={key:0},b={key:1},D={class:"message-counter"},I=(0,l._)("h3",{style:{"margin-top":"20px","margin-bottom":"20px"}},"--- TAI ---",-1);function _(e,t,a,_,x,C){const B=(0,l.up)("MDBInput"),M=(0,l.up)("VueDatePicker"),F=(0,l.up)("MDBBtn"),H=(0,l.up)("MDBCol"),S=(0,l.up)("MDBTextarea"),U=(0,l.up)("MDBRow"),V=(0,l.up)("MDBContainer");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(V,{style:{"padding-top":"50px"}},{default:(0,l.w5)((()=>[n,(0,l._)("form",{class:"g-3 needs-validation",novalidate:"",onSubmit:t[9]||(t[9]=(0,i.iM)(((...e)=>C.checkForm&&C.checkForm(...e)),["prevent"]))},[(0,l.Wm)(B,{counter:"",maxlength:30,label:"Anna otsikko",modelValue:x.header,"onUpdate:modelValue":t[0]||(t[0]=e=>x.header=e),id:"header",size:"lg",invalidFeedback:"Ole hyvä ja kirjoita otsikko.",validFeedback:"Ok!",required:"",wrapperClass:"mb-4"},null,8,["modelValue"]),a.recipientBookings.length>0?((0,l.wg)(),(0,l.iD)("p",s,"Osoite: "+(0,o.zw)(a.recipientBookings[0].address),1)):(0,l.kq)("",!0),(0,l.Wm)(B,{label:"Anna toinen osoitteesi",modelValue:x.address,"onUpdate:modelValue":t[1]||(t[1]=e=>x.address=e),id:"osoite",size:"lg",invalidFeedback:"Ole hyvä ja kirjoita osoite.",validFeedback:"Ok!",required:"",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,l._)("div",d,[(0,l._)("div",r,[_.isNotSelected?(0,l.wy)(((0,l.wg)(),(0,l.iD)("select",{key:0,id:"noSelected",style:{"border-color":"red",color:"red","margin-bottom":"20px"},"onUpdate:modelValue":t[2]||(t[2]=e=>x.professional=e),onChange:t[3]||(t[3]=e=>_.isNotSelected=!1)},[u,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(x.prodata,(e=>((0,l.wg)(),(0,l.iD)(l.HY,null,[e.group?((0,l.wg)(),(0,l.iD)("optgroup",{label:e.group,key:e.group},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.options,(e=>((0,l.wg)(),(0,l.iD)("option",{value:e.label,key:e.label},(0,o.zw)(e.label),9,g)))),128))],8,c)):((0,l.wg)(),(0,l.iD)("option",{value:e,key:e.value},(0,o.zw)(e.label),9,p))],64)))),256))],544)),[[i.bM,x.professional]]):(0,l.wy)(((0,l.wg)(),(0,l.iD)("select",{key:1,"onUpdate:modelValue":t[4]||(t[4]=e=>x.professional=e),style:{"margin-bottom":"20px"}},[m,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(x.prodata,(e=>((0,l.wg)(),(0,l.iD)(l.HY,null,[e.group?((0,l.wg)(),(0,l.iD)("optgroup",{label:e.group,key:e.group},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.options,(e=>((0,l.wg)(),(0,l.iD)("option",{value:e.label,key:e.label},(0,o.zw)(e.label),9,k)))),128))],8,h)):((0,l.wg)(),(0,l.iD)("option",{value:e,key:e.value},(0,o.zw)(e.label),9,w))],64)))),256))],512)),[[i.bM,x.professional]])])]),(0,l.Wm)(M,{style:{"margin-bottom":"20px"},modelValue:_.date,"onUpdate:modelValue":t[5]||(t[5]=e=>_.date=e),"min-date":new Date,placeholder:"Missä ajalla haluat ammattilaista?",onInternalModelChange:C.handleInternalDate,state:!x.isNoDate&&null},null,8,["modelValue","min-date","onInternalModelChange","state"]),(0,l.Wm)(V,{style:{"margin-bottom":"20px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(H,{md:"4"},{default:(0,l.w5)((()=>[_.showImage?((0,l.wg)(),(0,l.iD)("img",{key:0,src:_.showImage,style:{width:"200px","margin-bottom":"20px"},alt:"..."},null,8,f)):(0,l.kq)("",!0),_.isUploaded?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("label",v,[x.value?((0,l.wg)(),(0,l.iD)("span",y," Muokkaa kuva: "+(0,o.zw)(x.value.name),1)):((0,l.wg)(),(0,l.iD)("span",b,"Valitse kuva tehtävästä"))])),(0,l._)("input",{id:"file-upload",type:"file",onChange:t[6]||(t[6]=(...e)=>C.handleFileChange&&C.handleFileChange(...e))},null,32),_.isImageSelected?((0,l.wg)(),(0,l.j4)(F,{key:2,outline:"danger",size:"lg",block:"",onClick:C.removeFile},{default:(0,l.w5)((()=>[(0,l.Uk)("Poista valitsettu kuva")])),_:1},8,["onClick"])):(0,l.kq)("",!0),_.isImageSelected?((0,l.wg)(),(0,l.j4)(F,{key:3,outline:"success",size:"lg",block:"",style:{"margin-bottom":"10px"},onClick:C.uploadImage},{default:(0,l.w5)((()=>[(0,l.Uk)("Lataa valitsettu kuva")])),_:1},8,["onClick"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(H,{md:"8"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{maxlength:"70",label:"Tehtävän kuvaus...",rows:"4",modelValue:_.explanation,"onUpdate:modelValue":t[7]||(t[7]=e=>_.explanation=e),invalidFeedback:"Ole hyvä ja kirjoita tehtävän kuvaus.",validFeedback:"Ok!",required:""},null,8,["modelValue"]),(0,l._)("span",D,(0,o.zw)(_.explanation.length)+" / 70",1)])),_:1})])),_:1})])),_:1}),(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,{outline:"success",size:"lg",block:"",onClick:C.addRecipient,style:{"margin-top":"20px","margin-bottom":"20px"},type:"submit"},{default:(0,l.w5)((()=>[(0,l.Uk)("Tee tilaus")])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[I])),_:1}),(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,{outline:"secondary",block:"",size:"lg",onClick:t[8]||(t[8]=e=>this.$router.push("/recipient-public")),style:{"margin-top":"20px","margin-bottom":"20px"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Etsi kartalta")])),_:1})])),_:1})])),_:1})],32),(0,l.Wm)(F,{outline:"danger",size:"lg",block:"",onClick:C.cancelRecipientForm,style:{"margin-bottom":"50px"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" Poistu ")])),_:1},8,["onClick"])])),_:1})])}a(2062);var x=a(4912),C=a(4313),B=a(5800),M=a(8579),F=a(3998),H=a(7514),S=a(4870),U={name:"recipient-form",props:{recipientBookings:Array},components:{MDBBtn:C.$v,MDBContainer:C.L5,MDBInput:C.u2,MDBRow:C.uZ,MDBCol:C.TK,MDBTextarea:C.uj,VueDatePicker:x.Z},data(){return{recipientId:null,header:"",address:null,lat:null,lng:null,isNoDate:!1,professional:"",addFile:null,dateTest:null,calendarTooltips:[],value:null,aaa:"",file:null,f:null,prodata:F.Z}},setup(){const e=(0,S.iH)(null),t=(0,S.iH)(""),a=(0,S.iH)(!1),l=(0,S.iH)(null),i=(0,S.iH)(null),o=(0,S.iH)(!1),n=(0,S.iH)(!1),s=(0,S.iH)(!1);return{date:e,explanation:t,isImageSelected:a,imgId:l,showImage:i,isShowImage:o,isUploaded:n,isNotSelected:s}},computed:{currentRouteName(){return this.$route.name}},async mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.recipientId=t.id,console.log("User id in recipient: "+t.id)}const t={lat:50.064192,lng:-130.605469},a={north:t.lat+.1,south:t.lat-.1,east:t.lng+.1,west:t.lng-.1},l=document.getElementById("osoite"),i={bounds:a,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},o=new google.maps.places.Autocomplete(l,i);o.addListener("place_changed",(()=>{let e=o.getPlace();this.lat=e.geometry.location.lat(),this.lng=e.geometry.location.lng(),this.address=e.formatted_address,console.log(e)}))},methods:{cancelRecipientForm(){"r-form"===this.currentRouteName?this.$router.push("/received"):this.$router.push("/")},async findRecipients(){const e=await B.Z.getOwnBookings(this.recipientId);console.log("Recipients "+e.length)},async remFile(){await M.Z.remove("644cff805261bf7d9943c5da","644cff875261bf7d9943c5dd")},handleFileChange(e){try{const t=e.target.files[0];console.log("event target client ",e.target.files[0]),t&&(this.showImage=URL.createObjectURL(t),this.file=e.target.files[0])}catch(t){console.log("Error:",t)}this.value=e.target.files[0],e.target.files[0]?this.isImageSelected=!0:this.isImageSelected=!1},async uploadImage(){const e=new FormData;e.append("file",this.file,this.file.name);const t=await M.Z.create(e);t&&(this.imgId=t.imgCreated._id,this.file=null,this.isImageSelected=!1,this.isUploaded=!0)},removeFile(){this.value=null,this.isImageSelected=!1,this.showImage=null},formatDate(e=Date){return e?(0,H.Z)(e,"dd.MM.yyyy, HH:mm"):null},backToDashboard(){},getDate(){console.log("selected date: "+this.date.getDate())},handleInternalDate(){console.log("Handled"),this.isNoDate=!1},async addRecipient(){let e;if(null===this.address&&(this.address=this.recipientBookings[0].address,this.lat=this.recipientBookings[0].latitude,this.lng=this.recipientBookings[0].longitude),""===this.professional&&(this.isNotSelected=!0),this.date||(this.isNoDate=!0),this.date&&(e={created:this.date,header:this.header,address:this.address,latitude:this.lat,longitude:this.lng,professional:this.professional,year:this.date.getFullYear(),month:this.date.getMonth(),day:this.date.getDate(),hours:this.date.getHours(),minutes:this.date.getMinutes(),description:this.explanation,imageId:this.imgId}),this.header&&this.address&&this.professional&&this.date&&this.explanation){const t=await B.Z.addRecipient(this.recipientId,e);this.$emit("booking:update",t),console.log("Booking--- "+t),this.$router.push("/received")}else console.log("Something went wrong"),console.log("Aadress "+this.address),console.log("header "+this.header),console.log("Explanation "+this.explanation),console.log("Profession "+this.professional),console.log("Date "+this.date)},checkForm(e=Event){e.target.classList.add("was-validated")}}},V=a(89);const W=(0,V.Z)(U,[["render",_]]);var $=W}}]);
//# sourceMappingURL=273.017b909c.js.map