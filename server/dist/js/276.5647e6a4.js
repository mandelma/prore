"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[276],{3998:function(e,t){const a=[{label:"Hitsaaja",value:"1"},{label:"Putkimies",value:"2"},{label:"Sähkömies",value:"3"}],l=[{label:"Siivooja",value:"4"}],i=[{group:"Rakennus",options:a},{group:"Kiinteistöala",options:l}];t.Z=i},8579:function(e,t,a){const l=a(7218),i="/api/upload",o=async()=>{const e=await l.get(i);return e.data},n=async e=>{const t=await l.post(i,e,{});return t.data},s=async(e,t)=>{const a=await l.post(`${i}/${e}/avatar`,t);return a.data},d=async(e,t)=>{const a=await l.post(`${i}/${e}/update_avatar`,t);return a.data},r=async(e,t)=>{const a=await l.put(`${i}/${e}`,t);return a.data},u=async(e,t)=>{await l.delete(`${i}/${e}/${t}`)};t.Z={getAll:o,create:n,createProfileImage:s,newAvatar:d,updateImage:r,remove:u}},8276:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});a(7658);var l=a(3396),i=a(9242),o=a(7139);const n={key:0,style:{"text-align":"left",color:"deepskyblue"}},s={class:"ui form"},d={class:"field"},r=(0,l._)("option",{value:""},"Valitse ammattilainen",-1),u=["label"],c=["value"],g=["value"],p=(0,l._)("option",{value:""},"Valitse ammattilainen",-1),m=["label"],h=["value"],k=["value"],w=["src"],f={key:1,for:"file-upload",class:"custom-file-upload"},v={key:0},y={key:1},b={class:"message-counter"},D=(0,l._)("h3",{style:{"margin-top":"20px","margin-bottom":"20px"}},"--- TAI ---",-1);function I(e,t,a,I,_,x){const C=(0,l.up)("MDBInput"),B=(0,l.up)("VueDatePicker"),M=(0,l.up)("MDBBtn"),F=(0,l.up)("MDBCol"),H=(0,l.up)("MDBTextarea"),S=(0,l.up)("MDBRow"),V=(0,l.up)("MDBContainer");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(V,{style:{"padding-top":"40px"}},{default:(0,l.w5)((()=>[(0,l._)("form",{class:"g-3 needs-validation",novalidate:"",onSubmit:t[9]||(t[9]=(0,i.iM)(((...e)=>x.checkForm&&x.checkForm(...e)),["prevent"]))},[(0,l.Wm)(C,{counter:"",maxlength:30,label:"Anna otsikko",modelValue:_.header,"onUpdate:modelValue":t[0]||(t[0]=e=>_.header=e),id:"header",size:"lg",invalidFeedback:"Ole hyvä ja kirjoita otsikko.",validFeedback:"Ok!",required:"",wrapperClass:"mb-4"},null,8,["modelValue"]),a.recipientBookings.length>0?((0,l.wg)(),(0,l.iD)("p",n,"Osoite: "+(0,o.zw)(a.recipientBookings[0].address),1)):(0,l.kq)("",!0),(0,l.Wm)(C,{label:"Anna toinen osoitteesi",modelValue:_.address,"onUpdate:modelValue":t[1]||(t[1]=e=>_.address=e),id:"osoite",size:"lg",invalidFeedback:"Ole hyvä ja kirjoita osoite.",validFeedback:"Ok!",required:"",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,l._)("div",s,[(0,l._)("div",d,[I.isNotSelected?(0,l.wy)(((0,l.wg)(),(0,l.iD)("select",{key:0,id:"noSelected",style:{"border-color":"red",color:"red","margin-bottom":"20px"},"onUpdate:modelValue":t[2]||(t[2]=e=>_.professional=e),onChange:t[3]||(t[3]=e=>I.isNotSelected=!1)},[r,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.prodata,(e=>((0,l.wg)(),(0,l.iD)(l.HY,null,[e.group?((0,l.wg)(),(0,l.iD)("optgroup",{label:e.group,key:e.group},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.options,(e=>((0,l.wg)(),(0,l.iD)("option",{value:e.label,key:e.label},(0,o.zw)(e.label),9,c)))),128))],8,u)):((0,l.wg)(),(0,l.iD)("option",{value:e,key:e.value},(0,o.zw)(e.label),9,g))],64)))),256))],544)),[[i.bM,_.professional]]):(0,l.wy)(((0,l.wg)(),(0,l.iD)("select",{key:1,"onUpdate:modelValue":t[4]||(t[4]=e=>_.professional=e),style:{"margin-bottom":"20px"}},[p,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.prodata,(e=>((0,l.wg)(),(0,l.iD)(l.HY,null,[e.group?((0,l.wg)(),(0,l.iD)("optgroup",{label:e.group,key:e.group},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.options,(e=>((0,l.wg)(),(0,l.iD)("option",{value:e.label,key:e.label},(0,o.zw)(e.label),9,h)))),128))],8,m)):((0,l.wg)(),(0,l.iD)("option",{value:e,key:e.value},(0,o.zw)(e.label),9,k))],64)))),256))],512)),[[i.bM,_.professional]])])]),(0,l.Wm)(B,{style:{"margin-bottom":"20px"},modelValue:I.date,"onUpdate:modelValue":t[5]||(t[5]=e=>I.date=e),"min-date":new Date,placeholder:"Missä ajalla haluat ammattilaista?",onInternalModelChange:x.handleInternalDate,state:!_.isNoDate&&null},null,8,["modelValue","min-date","onInternalModelChange","state"]),(0,l.Wm)(V,{style:{"margin-bottom":"20px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,{md:"4"},{default:(0,l.w5)((()=>[I.showImage?((0,l.wg)(),(0,l.iD)("img",{key:0,src:I.showImage,style:{width:"200px","margin-bottom":"20px"},alt:"..."},null,8,w)):(0,l.kq)("",!0),I.isUploaded?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("label",f,[_.value?((0,l.wg)(),(0,l.iD)("span",v," Muokkaa kuva: "+(0,o.zw)(_.value.name),1)):((0,l.wg)(),(0,l.iD)("span",y,"Valitse kuva tehtävästä"))])),(0,l._)("input",{id:"file-upload",type:"file",onChange:t[6]||(t[6]=(...e)=>x.handleFileChange&&x.handleFileChange(...e))},null,32),I.isImageSelected?((0,l.wg)(),(0,l.j4)(M,{key:2,outline:"danger",size:"lg",block:"",onClick:x.removeFile},{default:(0,l.w5)((()=>[(0,l.Uk)("Poista valitsettu kuva")])),_:1},8,["onClick"])):(0,l.kq)("",!0),I.isImageSelected?((0,l.wg)(),(0,l.j4)(M,{key:3,outline:"success",size:"lg",block:"",style:{"margin-bottom":"10px"},onClick:x.uploadImage},{default:(0,l.w5)((()=>[(0,l.Uk)("Lataa valitsettu kuva")])),_:1},8,["onClick"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(F,{md:"8"},{default:(0,l.w5)((()=>[(0,l.Wm)(H,{maxlength:"70",label:"Tehtävän kuvaus...",rows:"3",modelValue:I.explanation,"onUpdate:modelValue":t[7]||(t[7]=e=>I.explanation=e),invalidFeedback:"Ole hyvä ja kirjoita tehtävän kuvaus.",validFeedback:"Ok!",required:""},null,8,["modelValue"]),(0,l._)("span",b,(0,o.zw)(I.explanation.length)+" / 70",1)])),_:1})])),_:1})])),_:1}),(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[(0,l.Wm)(M,{outline:"success",size:"lg",block:"",onClick:x.addRecipient,style:{"margin-top":"5px","margin-bottom":"20px"},type:"submit"},{default:(0,l.w5)((()=>[(0,l.Uk)("Tee tilaus")])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[D])),_:1}),(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[(0,l.Wm)(M,{outline:"secondary",block:"",size:"lg",onClick:t[8]||(t[8]=e=>this.$router.push("/recipient-public")),style:{"margin-top":"5px","margin-bottom":"20px"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Etsi kartalta")])),_:1})])),_:1})])),_:1})],32),(0,l.Wm)(M,{outline:"danger",size:"lg",block:"",onClick:x.cancelRecipientForm,style:{"margin-bottom":"50px"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" Poistu ")])),_:1},8,["onClick"])])),_:1})])}a(2062);var _=a(4912),x=a(4313),C=a(5800),B=a(8579),M=a(3998),F=a(7514),H=a(4870),S={name:"recipient-form",props:{recipientBookings:Array},components:{MDBBtn:x.$v,MDBContainer:x.L5,MDBInput:x.u2,MDBRow:x.uZ,MDBCol:x.TK,MDBTextarea:x.uj,VueDatePicker:_.Z},data(){return{recipientId:null,header:"",address:null,lat:null,lng:null,isNoDate:!1,professional:"",addFile:null,dateTest:null,calendarTooltips:[],value:null,aaa:"",file:null,f:null,prodata:M.Z}},setup(){const e=(0,H.iH)(null),t=(0,H.iH)(""),a=(0,H.iH)(!1),l=(0,H.iH)(null),i=(0,H.iH)(null),o=(0,H.iH)(!1),n=(0,H.iH)(!1),s=(0,H.iH)(!1);return{date:e,explanation:t,isImageSelected:a,imgId:l,showImage:i,isShowImage:o,isUploaded:n,isNotSelected:s}},computed:{currentRouteName(){return this.$route.name}},async mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.recipientId=t.id,console.log("User id in recipient: "+t.id)}const t={lat:50.064192,lng:-130.605469},a={north:t.lat+.1,south:t.lat-.1,east:t.lng+.1,west:t.lng-.1},l=document.getElementById("osoite"),i={bounds:a,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},o=new google.maps.places.Autocomplete(l,i);o.addListener("place_changed",(()=>{let e=o.getPlace();this.lat=e.geometry.location.lat(),this.lng=e.geometry.location.lng(),this.address=e.formatted_address,console.log(e)}))},methods:{cancelRecipientForm(){this.$router.go(-1)},async findRecipients(){const e=await C.Z.getOwnBookings(this.recipientId);console.log("Recipients "+e.length)},async remFile(){await B.Z.remove("644cff805261bf7d9943c5da","644cff875261bf7d9943c5dd")},handleFileChange(e){try{const t=e.target.files[0];console.log("event target client ",e.target.files[0]),t&&(this.showImage=URL.createObjectURL(t),this.file=e.target.files[0])}catch(t){console.log("Error:",t)}this.value=e.target.files[0],e.target.files[0]?this.isImageSelected=!0:this.isImageSelected=!1},async uploadImage(){const e=new FormData;e.append("file",this.file,this.file.name);const t=await B.Z.create(e);t&&(this.imgId=t.imgCreated._id,this.file=null,this.isImageSelected=!1,this.isUploaded=!0)},removeFile(){this.value=null,this.isImageSelected=!1,this.showImage=null},formatDate(e=Date){return e?(0,F.Z)(e,"dd.MM.yyyy, HH:mm"):null},backToDashboard(){},getDate(){console.log("selected date: "+this.date.getDate())},handleInternalDate(){console.log("Handled"),this.isNoDate=!1},async addRecipient(){let e;if(null===this.address&&(this.address=this.recipientBookings[0].address,this.lat=this.recipientBookings[0].latitude,this.lng=this.recipientBookings[0].longitude),""===this.professional&&(this.isNotSelected=!0),this.date||(this.isNoDate=!0),this.date&&(e={created:this.date,header:this.header,address:this.address,latitude:this.lat,longitude:this.lng,professional:this.professional,year:this.date.getFullYear(),month:this.date.getMonth(),day:this.date.getDate(),hours:this.date.getHours(),minutes:this.date.getMinutes(),description:this.explanation,imageId:this.imgId}),this.header&&this.address&&this.professional&&this.date&&this.explanation){const t=await C.Z.addRecipient(this.recipientId,e);this.$emit("booking:update",t),console.log("Booking--- "+t),this.$router.push("/received")}else console.log("Something went wrong"),console.log("Aadress "+this.address),console.log("header "+this.header),console.log("Explanation "+this.explanation),console.log("Profession "+this.professional),console.log("Date "+this.date)},checkForm(e=Event){e.target.classList.add("was-validated")}}},V=a(89);const U=(0,V.Z)(S,[["render",I]]);var W=U}}]);
//# sourceMappingURL=276.5647e6a4.js.map