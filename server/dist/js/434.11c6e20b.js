"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[434],{3998:function(e,a){const t=[{label:"Automekaanikko"},{label:"Automaalari"},{label:"Automyyjä"},{label:"Katsastaja"},{label:"Varaosamyyjä"}],l=[{label:"Elintarvikekemisti"},{label:"Elintarviketyöntekijä"},{label:"Hankintapäällikkö, meijeriteollisuus"},{label:"Kondiittori"},{label:"Leipomotyöntekijä"},{label:"Leipuri"},{label:"Lihanleikkaaja"},{label:"Lihavalmistetyöntekijä"},{label:"Mylläri"},{label:"Elintarvikepakkaaja"},{label:"Juomatyöntekijä"},{label:"Säilyketyöntekijä"},{label:"Teurastaja"},{label:"Elintarviketuotannon työnjohtaja"},{label:"Tuotannonsuunnittelija, elintarviketeollisuus"},{label:"Tuotantopäällikkö, meijeriteollisuus"},{label:"Meijeristi, meijerituotteiden valmistaja"}],i=[{label:"Automaatioasentaja"},{label:"Automaatioinsinööri"},{label:"Biotekniikan insinööri"},{label:"Elektroniikka-asentaja"},{label:"Elektroniikkainsinööri"},{label:"Energianeuvoja"},{label:"Energiatekniikan insinööri"},{label:"Hakkurinkuljettaja"},{label:"Huoltopäällikkö, kylmäala"},{label:"Kaukolämpöasentaja"},{label:"Kaukolämpöinsinööri"},{label:"Insinööri, kemiantekniikka"},{label:"Kemisti"},{label:"Kunnossapitoinsinööri"},{label:"Kylmäsuunnittelija"},{label:"Käyttöinsinööri"},{label:"LVI-asentaja"},{label:"LVI-insinööri"},{label:"Laborantti"},{label:"Lämpöyrittäjä"},{label:"Metsuri"},{label:"Metsäkoneenkuljettaja"},{label:"Metsätalouden harjoittaja"},{label:"Metsätalousinsinööri"},{label:"Sähköasentaja"},{label:"Sähköinsinööri"},{label:"Sähkömestari, meriliikenne"},{label:"Sähköverkostoasentaja"},{label:"Tuulivoimainsinööri"},{label:"Voimalaitoksen käyttäjä"},{label:"Voimalaitospäällikkö"},{label:"Huoltoteknikko"}],o=[{group:"Autoala",options:t},{group:"Elintarviketeollisuus",options:l},{group:"Energia-ala",options:i}];a.Z=o},4434:function(e,a,t){t.r(a),t.d(a,{default:function(){return A}});t(7658);var l=t(3396),i=t(9242),o=t(7139);const n=(0,l._)("h3",{style:{"margin-top":"10px"}},"Täytä alla oleva tilaus",-1),s=(0,l._)("h3",{style:{"margin-top":"20px","margin-bottom":"20px"}},"--- TAI ---",-1),r={class:"ui form"},d={class:"field"},u=(0,l._)("option",{value:""},"Valitse ammattilainen",-1),g=["label"],c=["value"],m=["value"],p=(0,l._)("option",{value:""},"Valitse ammattilainen",-1),h=["label"],k=["value"],b=["value"],w=(0,l._)("p",{style:{"text-align":"left"}},"Missä ajalla haluaisit ammattilaista?",-1),y={style:{color:"#fff"}},f=["src"],v={key:1,for:"file-upload",class:"custom-file-upload"},D={key:0},j={key:1},_={class:"message-counter"};function I(e,a,t,I,M,x){const C=(0,l.up)("MDBBtnClose"),B=(0,l.up)("MDBCol"),V=(0,l.up)("MDBBtn"),H=(0,l.up)("MDBRow"),S=(0,l.up)("MDBInput"),F=(0,l.up)("VueDatePicker"),L=(0,l.up)("MDBTextarea"),U=(0,l.up)("MDBContainer");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(U,{style:{"padding-top":"70px",position:"relative"}},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{white:"",class:"close_btn",onClick:a[0]||(a[0]=a=>e.$router.go(-1))}),(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)(B,null,{default:(0,l.w5)((()=>[n])),_:1}),(0,l.Wm)(B,null,{default:(0,l.w5)((()=>[s])),_:1}),(0,l.Wm)(B,null,{default:(0,l.w5)((()=>[(0,l.Wm)(V,{outline:"success",block:"",size:"lg",onClick:a[1]||(a[1]=e=>this.$router.push("/recipient-public")),style:{"margin-top":"5px","margin-bottom":"20px"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Etsi kartalta")])),_:1})])),_:1})])),_:1}),(0,l._)("form",{class:"g-3 needs-validation",novalidate:"",onSubmit:a[10]||(a[10]=(0,i.iM)(((...e)=>x.checkForm&&x.checkForm(...e)),["prevent"]))},[(0,l.Wm)(S,{counter:"",maxlength:30,label:"Anna otsikko",white:"",modelValue:M.header,"onUpdate:modelValue":a[2]||(a[2]=e=>M.header=e),id:"header",size:"lg",invalidFeedback:"Ole hyvä ja kirjoita otsikko.",validFeedback:"Ok!",required:"",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,l.Wm)(S,{label:M.address?"Anna toinen osoitteesi jos ei täsmä":"Anna osoite",white:"",modelValue:M.address,"onUpdate:modelValue":a[3]||(a[3]=e=>M.address=e),id:"osoite",size:"lg",invalidFeedback:"Ole hyvä ja kirjoita osoite.",validFeedback:"Ok!",required:"",wrapperClass:"mb-4"},null,8,["label","modelValue"]),(0,l._)("div",r,[(0,l._)("div",d,[I.isNotSelected?(0,l.wy)(((0,l.wg)(),(0,l.iD)("select",{key:0,id:"noSelected",style:{"border-color":"red",padding:"10px",color:"red","margin-bottom":"20px","background-color":"#221a16"},"onUpdate:modelValue":a[4]||(a[4]=e=>M.professional=e),onChange:a[5]||(a[5]=e=>I.isNotSelected=!1)},[u,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(M.prodata,(e=>((0,l.wg)(),(0,l.iD)(l.HY,null,[e.group?((0,l.wg)(),(0,l.iD)("optgroup",{label:e.group,key:e.group},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.options,(e=>((0,l.wg)(),(0,l.iD)("option",{value:e.label,key:e.label},(0,o.zw)(e.label),9,c)))),128))],8,g)):((0,l.wg)(),(0,l.iD)("option",{value:e,key:e.value},(0,o.zw)(e.label),9,m))],64)))),256))],544)),[[i.bM,M.professional]]):(0,l.wy)(((0,l.wg)(),(0,l.iD)("select",{key:1,"onUpdate:modelValue":a[6]||(a[6]=e=>M.professional=e),style:{"margin-bottom":"20px","background-color":"#221a16",border:"1px solid #ddd",color:"#ddd"}},[p,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(M.prodata,(e=>((0,l.wg)(),(0,l.iD)(l.HY,null,[e.group?((0,l.wg)(),(0,l.iD)("optgroup",{label:e.group,key:e.group},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.options,(e=>((0,l.wg)(),(0,l.iD)("option",{value:e.label,key:e.label},(0,o.zw)(e.label),9,k)))),128))],8,h)):((0,l.wg)(),(0,l.iD)("option",{value:e,key:e.value},(0,o.zw)(e.label),9,b))],64)))),256))],512)),[[i.bM,M.professional]])])]),w,(0,l._)("div",y,[(0,l.Wm)(F,{style:{"margin-bottom":"20px"},modelValue:I.date,"onUpdate:modelValue":a[7]||(a[7]=e=>I.date=e),dark:"","min-date":new Date,onInternalModelChange:x.handleInternalDate,state:!M.isNoDate&&null},null,8,["modelValue","min-date","onInternalModelChange","state"])]),(0,l.Wm)(U,{style:{"margin-bottom":"20px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)(B,{md:"4"},{default:(0,l.w5)((()=>[I.showImage?((0,l.wg)(),(0,l.iD)("img",{key:0,src:I.showImage,style:{width:"200px","margin-bottom":"20px"},alt:"..."},null,8,f)):(0,l.kq)("",!0),I.isUploaded?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("label",v,[M.value?((0,l.wg)(),(0,l.iD)("span",D," Muokkaa kuva: "+(0,o.zw)(M.value.name),1)):((0,l.wg)(),(0,l.iD)("span",j,"Valitse kuva tehtävästä"))])),(0,l._)("input",{id:"file-upload",type:"file",onChange:a[8]||(a[8]=(...e)=>x.handleFileChange&&x.handleFileChange(...e))},null,32),I.isImageSelected?((0,l.wg)(),(0,l.j4)(V,{key:2,outline:"danger",size:"lg",block:"",onClick:x.removeFile},{default:(0,l.w5)((()=>[(0,l.Uk)("Poista valitsettu kuva")])),_:1},8,["onClick"])):(0,l.kq)("",!0),I.isImageSelected?((0,l.wg)(),(0,l.j4)(V,{key:3,outline:"success",size:"lg",block:"",style:{"margin-bottom":"10px"},onClick:x.uploadImage},{default:(0,l.w5)((()=>[(0,l.Uk)("Lataa valitsettu kuva")])),_:1},8,["onClick"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(B,{md:"8"},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{maxlength:"70",label:"Tehtävän kuvaus...",white:"",rows:"3",modelValue:I.explanation,"onUpdate:modelValue":a[9]||(a[9]=e=>I.explanation=e),invalidFeedback:"Ole hyvä ja kirjoita tehtävän kuvaus.",validFeedback:"Ok!",required:""},null,8,["modelValue"]),(0,l._)("span",_,(0,o.zw)(I.explanation.length)+" / 70",1)])),_:1})])),_:1}),(0,l.Wm)(V,{outline:"success",size:"lg",block:"",onClick:x.addRecipient,style:{"margin-top":"5px","margin-bottom":"20px"},type:"submit"},{default:(0,l.w5)((()=>[(0,l.Uk)("Vahvista tilaus")])),_:1},8,["onClick"])])),_:1})],32)])),_:1})])}t(2062);var M=t(4912),x=t(4313),C=t(5800),B=t(8579),V=t(3998),H=t(7514),S=t(4870),F=t(2340),L={name:"recipient-form",props:{recipientBookings:Array},components:{MDBBtn:x.$v,MDBContainer:x.L5,MDBInput:x.u2,MDBRow:x.uZ,MDBCol:x.TK,MDBTextarea:x.uj,MDBBtnClose:x.Ok,VueDatePicker:M.Z},data(){return{recipientId:null,header:"",address:null,exicting_address:this.recipientBookings.length>0?this.recipientBookings[0].address:"",lat:null,lng:null,isNoDate:!1,professional:"",addFile:null,dateTest:null,calendarTooltips:[],value:null,aaa:"",file:null,f:null,prodata:V.Z}},setup(){const e=(0,S.iH)(null),a=(0,S.iH)(""),t=(0,S.iH)(!1),l=(0,S.iH)(null),i=(0,S.iH)(null),o=(0,S.iH)(!1),n=(0,S.iH)(!1),s=(0,S.iH)(!1);return{date:e,explanation:a,isImageSelected:t,imgId:l,showImage:i,isShowImage:o,isUploaded:n,isNotSelected:s}},computed:{currentRouteName(){return this.$route.name}},async mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const a=JSON.parse(e);this.recipientId=a.id,console.log("User id in recipient: "+a.id)}this.myCurrentLocation();const a={lat:50.064192,lng:-130.605469},t={north:a.lat+.1,south:a.lat-.1,east:a.lng+.1,west:a.lng-.1},l=document.getElementById("osoite"),i={bounds:t,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},o=new google.maps.places.Autocomplete(l,i);o.addListener("place_changed",(()=>{let e=o.getPlace();this.lat=e.geometry.location.lat(),this.lng=e.geometry.location.lng(),this.address=e.formatted_address,console.log(e)}))},methods:{myCurrentLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const{latitude:a,longitude:t}=e.coords;this.lat=a,this.lng=t,this.showMyLocationData(a,t)}))},showMyLocationData(e,a){F.Z.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+a+"&key=AIzaSyDt2YXE5tk0J72JgqnH3DTD7MeoqbbWBmU").then((e=>{e.data.error_message?(this.error=e.data.error_message,console.log(e.data.error_message)):(this.address=e.data.results[1].formatted_address,console.log("Address now "+this.address))})).catch((e=>{this.error=e.message,console.log(e.message)}))},cancelRecipientForm(){this.$router.go(-1)},async findRecipients(){const e=await C.Z.getOwnBookings(this.recipientId);console.log("Recipients "+e.length)},async remFile(){await B.Z.remove("644cff805261bf7d9943c5da","644cff875261bf7d9943c5dd")},handleFileChange(e){try{const a=e.target.files[0];console.log("event target client ",e.target.files[0]),a&&(this.showImage=URL.createObjectURL(a),this.file=e.target.files[0])}catch(a){console.log("Error:",a)}this.value=e.target.files[0],e.target.files[0]?this.isImageSelected=!0:this.isImageSelected=!1},async uploadImage(){const e=new FormData;e.append("file",this.file,this.file.name);const a=await B.Z.create(e);a&&(this.imgId=a.imgCreated._id,this.file=null,this.isImageSelected=!1,this.isUploaded=!0)},removeFile(){this.value=null,this.isImageSelected=!1,this.showImage=null},formatDate(e=Date){return e?(0,H.Z)(e,"dd.MM.yyyy, HH:mm"):null},backToDashboard(){},getDate(){console.log("selected date: "+this.date.getDate())},handleInternalDate(){console.log("Handled"),this.isNoDate=!1},async addRecipient(){let e;if(""===this.professional&&(this.isNotSelected=!0),this.date||(this.isNoDate=!0),this.date){let a=this.date.getFullYear(),t=this.date.getMonth(),l=this.date.getDate(),i=this.date.getHours(),o=this.date.getMinutes();const n=new Date(a,t,l,i,o).getTime();e={created:this.date,created_ms:n,header:this.header,address:this.address,latitude:this.lat,longitude:this.lng,professional:this.professional,year:this.date.getFullYear(),month:this.date.getMonth(),day:this.date.getDate(),hours:this.date.getHours(),minutes:this.date.getMinutes(),description:this.explanation,status:"waiting",imageId:this.imgId}}if(this.header&&this.address&&this.professional&&this.date&&this.explanation){const a=await C.Z.addRecipient(this.recipientId,e);this.$emit("booking:update",a),console.log("Booking--- "+a),this.$router.push("/received")}else console.log("Something went wrong"),console.log("Aadress "+this.address),console.log("header "+this.header),console.log("Explanation "+this.explanation),console.log("Profession "+this.professional),console.log("Date "+this.date)},checkForm(e=Event){e.target.classList.add("was-validated")}}},U=t(89);const W=(0,U.Z)(L,[["render",I]]);var A=W}}]);
//# sourceMappingURL=434.11c6e20b.js.map