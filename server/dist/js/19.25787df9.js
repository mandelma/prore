"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[19],{6019:function(e,t,o){o.r(t),o.d(t,{default:function(){return q}});o(7658);var s=o(3396),i=o(9242),l=o(7139);const a=(0,s._)("h3",{style:{"margin-top":"10px"}},"Täytä alla oleva tilaus",-1),n=(0,s._)("h3",{style:{"margin-top":"20px","margin-bottom":"20px"}},"--- TAI ---",-1),r={style:{"margin-bottom":"20px","background-color":"#1F3D40FF"}},d={value:"slotProps"},u={key:0},p={key:1},c={class:"flex align-items-center"},h={style:{width:"70%"}},m=(0,s._)("p",{style:{"text-align":"left"}},"Missä ajalla haluaisit ammattilaista?",-1),g={style:{color:"#fff"}},f=["src"],b={key:1,for:"file-upload",class:"custom-file-upload"},w={key:0},v={key:1},y={class:"message-counter"};function k(e,t,o,k,x,I){const D=(0,s.up)("MDBBtnClose"),_=(0,s.up)("MDBCol"),V=(0,s.up)("MDBBtn"),M=(0,s.up)("MDBRow"),O=(0,s.up)("Dropdown"),C=(0,s.up)("MDBInput"),T=(0,s.up)("VueDatePicker"),S=(0,s.up)("MDBTextarea"),B=(0,s.up)("MDBContainer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(B,{style:{"padding-top":"100px",position:"relative"}},{default:(0,s.w5)((()=>[(0,s.Wm)(D,{style:{"margin-top":"70px"},white:"",class:"close_btn",onClick:t[0]||(t[0]=t=>e.$router.go(-1))}),(0,s.Wm)(M,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[a])),_:1}),(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[n])),_:1}),(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s.Wm)(V,{outline:"success",block:"",size:"lg",onClick:t[1]||(t[1]=e=>this.$router.push("/recipient-public")),style:{"margin-top":"5px","margin-bottom":"20px"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Etsi kartalta")])),_:1})])),_:1})])),_:1}),(0,s._)("form",{class:"g-3 needs-validation",novalidate:"",onSubmit:t[8]||(t[8]=(0,i.iM)(((...e)=>I.checkForm&&I.checkForm(...e)),["prevent"])),autocomplete:"off",style:{"background-color":"#29292e",padding:"5px"}},[(0,s._)("div",null,[(0,s._)("div",r,[(0,s.Wm)(O,{modelValue:x.professional,"onUpdate:modelValue":t[2]||(t[2]=e=>x.professional=e),options:x.prodata,filter:"",optionLabel:"label",optionGroupLabel:"label",showClear:"",optionGroupChildren:"items",placeholder:"Valitse ammattilainen",class:"w-full md:w-100rem"},{optiongroup:(0,s.w5)((e=>[(0,s._)("div",c,[(0,s._)("div",null,(0,l.zw)(e.option.label),1)])])),default:(0,s.w5)((()=>[(0,s._)("template",d,[e.slotProps.value?((0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",null,(0,l.zw)(e.slotProps.value.label),1)])):((0,s.wg)(),(0,s.iD)("span",p,(0,l.zw)(e.slotProps.placeholder),1))])])),_:1},8,["modelValue","options"])])]),(0,s.Wm)(C,{counter:"",maxlength:30,label:"Anna otsikko",modelValue:x.header,"onUpdate:modelValue":t[3]||(t[3]=e=>x.header=e),size:"lg",white:"",invalidFeedback:"Ole hyvä ja kirjoita otsikko.",validFeedback:"Ok!",required:"",wrapperClass:"mb-4"},null,8,["modelValue"]),(0,s._)("div",h,[(0,s.Wm)(C,{inputGroup:"",label:x.address?"Anna toinen osoitteesi jos ei täsmä":"Anna osoite",white:"",modelValue:x.address,"onUpdate:modelValue":t[4]||(t[4]=e=>x.address=e),id:"osoite",size:"lg",invalidFeedback:"Ole hyvä ja kirjoita osoite.",validFeedback:"Ok!",required:"",wrapperClass:"mb-4"},{default:(0,s.w5)((()=>[x.address?((0,s.wg)(),(0,s.j4)(D,{key:0,white:"",style:{"margin-right":"7px","margin-top":"5px"},onClick:I.clearAddress},null,8,["onClick"])):(0,s.kq)("",!0)])),_:1},8,["label","modelValue"])]),m,(0,s._)("div",g,[(0,s.Wm)(T,{style:{"margin-bottom":"20px"},modelValue:k.date,"onUpdate:modelValue":t[5]||(t[5]=e=>k.date=e),dark:"","min-date":new Date,onInternalModelChange:I.handleInternalDate,state:!x.isNoDate&&null},null,8,["modelValue","min-date","onInternalModelChange","state"])]),(0,s.Wm)(B,{style:{"margin-bottom":"20px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(M,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{md:"4"},{default:(0,s.w5)((()=>[k.showImage?((0,s.wg)(),(0,s.iD)("img",{key:0,src:k.showImage,style:{width:"200px","margin-bottom":"20px"},alt:"..."},null,8,f)):(0,s.kq)("",!0),k.isUploaded?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("label",b,[x.value?((0,s.wg)(),(0,s.iD)("span",w," Muokkaa kuva: "+(0,l.zw)(x.value.name),1)):((0,s.wg)(),(0,s.iD)("span",v,"Valitse kuva tehtävästä"))])),(0,s._)("input",{id:"file-upload",type:"file",onChange:t[6]||(t[6]=(...e)=>I.handleFileChange&&I.handleFileChange(...e))},null,32),k.isImageSelected?((0,s.wg)(),(0,s.j4)(V,{key:2,outline:"danger",size:"lg",block:"",onClick:I.removeFile},{default:(0,s.w5)((()=>[(0,s.Uk)("Poista valitsettu kuva")])),_:1},8,["onClick"])):(0,s.kq)("",!0),k.isImageSelected?((0,s.wg)(),(0,s.j4)(V,{key:3,outline:"success",size:"lg",block:"",style:{"margin-bottom":"10px"},onClick:I.uploadImage},{default:(0,s.w5)((()=>[(0,s.Uk)("Lataa valitsettu kuva")])),_:1},8,["onClick"])):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(_,{md:"8"},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{maxlength:"70",label:"Tehtävän kuvaus...",white:"",rows:"3",modelValue:k.explanation,"onUpdate:modelValue":t[7]||(t[7]=e=>k.explanation=e),invalidFeedback:"Ole hyvä ja kirjoita tehtävän kuvaus.",validFeedback:"Ok!",required:""},null,8,["modelValue"]),(0,s._)("span",y,(0,l.zw)(k.explanation.length)+" / 70",1)])),_:1})])),_:1}),(0,s.Wm)(V,{outline:"success",size:"lg",block:"",onClick:I.addRecipient,style:{"margin-top":"5px","margin-bottom":"20px"},type:"submit"},{default:(0,s.w5)((()=>[(0,s.Uk)("Vahvista tilaus")])),_:1},8,["onClick"])])),_:1})],32)])),_:1})])}o(2062);var x=o(4912),I=o(4313),D=o(5800),_=o(8579),V=o(3998);const M={openOptions(e){e.$refs.input.focus(),e.showMenu=!0,e.mousedownState=!1},blurInput(e){e.mousedownState||(e.searchText="",e.closeOptions()),e.$emit("blur")},closeOptions(e){e.$refs.input.blur(),e.showMenu=!1},prevItem(e){const t=e.pointer-1,o=e.$el.offsetHeight*t;t>=0&&(e.pointer=t),e.$refs.menu.scrollTop=o},nextItem(e){const t=e.pointer+1,o=e.$el.offsetHeight*t;t<=e.filteredOptions.length-1&&(e.pointer=t);const s=e.$refs.menu.offsetHeight,i=Math.ceil((e.$refs.menu.scrollTop+e.$el.offsetHeight)/s),l=Math.ceil(o/s);i!==l&&(e.$refs.menu.scrollTop=(l-1)*e.$refs.menu.offsetHeight)},enterItem(e){const t=e.filteredOptions[e.pointer],o=t.disabled;t&&!o&&e.selectItem(t)},pointerSet(e,t){e.pointer=t},pointerAdjust(e){e.pointer>=e.filteredOptions.length-1&&(e.pointer=e.filteredOptions.length?e.filteredOptions.length-1:0)},mousedownItem(e){e.mousedownState=!0}};function O(e){return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i")}const C={props:{id:{default:null},name:{type:String,default:""},isError:{type:Boolean,default:!1},customAttr:{type:Function,default:()=>""},isDisabled:{type:Boolean,default:!1},placeholder:{type:String,default:""},filterPredicate:{type:Function,default:(e,t)=>e.match(O(t))}}},T=(e,t)=>{const o=e.__vccOpts||e;for(const[s,i]of t)o[s]=i;return o},S={name:"ModelSelect",mixins:[C],emits:["blur","searchchange","update:modelValue"],props:{modelValue:{type:[String,Number,Object,Boolean]},customAttr:{type:Function,default:()=>""},options:{type:Array}},data(){return{showMenu:!1,searchText:"",mousedownState:!1,pointer:-1}},watch:{value(e){this.pointer=this.filteredOptions.findIndex((t=>t.value===this.optionValue(e)))},filteredOptions(){this.pointerAdjust()},searchText(){this.$emit("searchchange",this.searchText)}},computed:{searchTextCustomAttr(){return this.selectedOption&&this.selectedOption.value?this.customAttr(this.selectedOption):""},inputText(){if(this.searchText)return"";{let e=this.placeholder;return this.selectedOption&&(e=this.selectedOption.text),e}},customAttrs(){try{if(Array.isArray(this.options))return this.options.map((e=>this.customAttr(e)))}catch{}return[]},textClass(){return!this.selectedOption&&this.placeholder?"default":""},menuClass(){return{visible:this.showMenu,hidden:!this.showMenu}},menuStyle(){return{display:this.showMenu?"block":"none"}},filteredOptions(){return this.searchText?this.options.filter((e=>{try{return this.filterPredicate(e.text,this.searchText)}catch{return!0}})):this.options},selectedOption(){return this.options.find((e=>e.value===this.optionValue(this.modelValue)))}},methods:{deleteTextOrItem(){!this.searchText&&this.modelValue&&(this.selectItem({}),this.openOptions())},openOptions(){M.openOptions(this)},blurInput(){M.blurInput(this)},closeOptions(){M.closeOptions(this)},prevItem(){M.prevItem(this)},nextItem(){M.nextItem(this)},enterItem(){M.enterItem(this)},pointerSet(e){M.pointerSet(this,e)},pointerAdjust(){M.pointerAdjust(this)},mousedownItem(){M.mousedownItem(this)},selectItem(e){this.searchText="",this.closeOptions(),"object"==typeof this.modelValue&&this.modelValue?this.$emit("update:modelValue",e):(this.$emit("update:modelValue",e.value),void 0!==e.value&&e.value===e.text&&(this.searchText=e.value))},optionValue(e){return"object"==typeof e&&null!==e?e.value:e}}},B=(0,s._)("i",{class:"dropdown icon"},null,-1),A=["disabled","tabindex","id","name","value"],F=["data-vss-custom-attr"],$=["data-vss-custom-attr","onClick","onMouseenter"];function j(e,t,o,a,n,r){return(0,s.wg)(),(0,s.iD)("div",{class:(0,l.C_)(["ui fluid search selection dropdown",{"active visible":n.showMenu,error:e.isError,disabled:e.isDisabled}]),onClick:t[11]||(t[11]=(...e)=>r.openOptions&&r.openOptions(...e)),onFocus:t[12]||(t[12]=(...e)=>r.openOptions&&r.openOptions(...e))},[B,(0,s._)("input",{class:"search",autocomplete:"off",disabled:e.isDisabled,tabindex:e.isDisabled?-1:0,id:e.id,name:e.name,value:n.searchText,onInput:t[0]||(t[0]=e=>n.searchText=e.target.value),ref:"input",onFocus:t[1]||(t[1]=(0,i.iM)(((...e)=>r.openOptions&&r.openOptions(...e)),["prevent"])),onKeyup:[t[2]||(t[2]=(0,i.D2)(((...e)=>r.closeOptions&&r.closeOptions(...e)),["esc"])),t[7]||(t[7]=(0,i.D2)((0,i.iM)(((...e)=>r.enterItem&&r.enterItem(...e)),["prevent"]),["enter"]))],onBlur:t[3]||(t[3]=(...e)=>r.blurInput&&r.blurInput(...e)),onKeydown:[t[4]||(t[4]=(0,i.D2)(((...e)=>r.prevItem&&r.prevItem(...e)),["up"])),t[5]||(t[5]=(0,i.D2)(((...e)=>r.nextItem&&r.nextItem(...e)),["down"])),t[6]||(t[6]=(0,i.D2)((0,i.iM)((()=>{}),["prevent"]),["enter"])),t[8]||(t[8]=(0,i.D2)(((...e)=>r.deleteTextOrItem&&r.deleteTextOrItem(...e)),["delete"]))]},null,40,A),(0,s._)("div",{class:(0,l.C_)(["text",r.textClass]),"data-vss-custom-attr":r.searchTextCustomAttr},(0,l.zw)(r.inputText),11,F),(0,s._)("div",{class:(0,l.C_)(["menu",r.menuClass]),ref:"menu",onMousedown:t[10]||(t[10]=(0,i.iM)((()=>{}),["prevent"])),style:(0,l.j5)(r.menuStyle),tabindex:"-1"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.filteredOptions,((o,a)=>((0,s.wg)(),(0,s.iD)("div",{key:a,class:(0,l.C_)(["item",{selected:o.selected||n.pointer===a,disabled:o.disabled}]),"data-vss-custom-attr":r.customAttrs[a]?r.customAttrs[a]:"",onClick:(0,i.iM)((e=>r.selectItem(o)),["stop"]),onMousedown:t[9]||(t[9]=(...e)=>r.mousedownItem&&r.mousedownItem(...e)),onMouseenter:e=>r.pointerSet(a)},[(0,s.WI)(e.$slots,"default",{option:o,idx:a},(()=>[(0,s.Uk)((0,l.zw)(o.text),1)]))],42,$)))),128))],38)],34)}const H=T(S,[["render",j]]),U={name:"ModelListSelect",mixins:[C],emits:["blur","searchchange","update:modelValue"],render:function(){return(0,s.h)(H,{id:this.id,name:this.name,options:this.options,modelValue:this.innerValue,isError:this.isError,isDisabled:this.isDisabled,placeholder:this.placeholder,filterPredicate:this.filterPredicate,onBlur:()=>this.$emit("blur"),"onUpdate:modelValue":this.onInput,onSearchchange:e=>this.$emit("searchchange",e)})},props:{modelValue:{type:[String,Number,Object,Boolean]},list:{type:Array},optionValue:{type:String},optionText:{type:String},customText:{type:Function},optionDisabled:{type:String}},computed:{options(){return this.list.map((e=>({value:e[this.optionValue],text:this.buildText(e),disabled:!!e[this.optionDisabled]})))},innerValue(){return this.modelValue&&"object"==typeof this.modelValue?this.modelValue?{value:this.modelValue[this.optionValue],text:this.buildText(this.modelValue),disabled:!!this.modelValue[this.optionDisabled]}:{value:"",text:"",disabled:!1}:this.modelValue}},methods:{buildText(e){return void 0!==e[this.optionValue]?this.customText?this.customText(e):e[this.optionText]:""},onInput(e){if(void 0===e)return this.$emit("update:modelValue","");if(0===Object.keys(e).length&&e.constructor===Object)this.$emit("update:modelValue",e);else if("object"==typeof e){const t=this.list.find((t=>t[this.optionValue]===e.value));this.$emit("update:modelValue",t)}else this.$emit("update:modelValue",e)}},components:{ModelSelect:H}};Boolean,Boolean;var W=o(9673),z=o(7514),L=o(4870),P=o(4161),R={name:"recipient-form",props:{recipientBookings:Array},components:{MDBBtn:I.$v,MDBContainer:I.L5,MDBInput:I.u2,MDBRow:I.uZ,MDBCol:I.TK,MDBTextarea:I.uj,MDBBtnClose:I.Ok,MDBIcon:I.vm,VueDatePicker:x.Z,Dropdown:W.Z,ModelListSelect:U},data(){return{recipientId:null,header:"",address:null,exicting_address:this.recipientBookings.length>0?this.recipientBookings[0].address:"",lat:null,lng:null,isNoDate:!1,professional:null,addFile:null,dateTest:null,calendarTooltips:[],value:null,aaa:"",file:null,f:null,prodata:V.Z,item:"",hospitals:[{id:"1",hospital_name:"aaaaaaaaaaa"},{id:"2",hospital_name:"bbbbbbbbbbbb"},{id:"3",hospital_name:'<div style="padding: 4px; background: green; border-radius: 0.25rem; color: white;">Foo</div>'}],selectedCountry:"",countries:this.proData}},setup(){const e=(0,L.iH)(null),t=(0,L.iH)(""),o=(0,L.iH)(!1),s=(0,L.iH)(null),i=(0,L.iH)(null),l=(0,L.iH)(!1),a=(0,L.iH)(!1),n=(0,L.iH)(!1),r=(0,L.iH)("");return{date:e,explanation:t,isImageSelected:o,imgId:s,showImage:i,isShowImage:l,isUploaded:a,isNotSelected:n,search5:r}},computed:{currentRouteName(){return this.$route.name}},async mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.recipientId=t.id,console.log("User id in recipient: "+t.id)}this.myCurrentLocation();const t={lat:50.064192,lng:-130.605469},o={north:t.lat+.1,south:t.lat-.1,east:t.lng+.1,west:t.lng-.1},s=document.getElementById("osoite"),i={bounds:o,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},l=new google.maps.places.Autocomplete(s,i);l.addListener("place_changed",(()=>{let e=l.getPlace();this.lat=e.geometry.location.lat(),this.lng=e.geometry.location.lng(),this.address=e.formatted_address,console.log(e)}))},methods:{clearAddress(){console.log("hhhhhh"),this.address=""},showAlert(){alert(this.search5)},myCurrentLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:o}=e.coords;this.lat=t,this.lng=o,this.showMyLocationData(t,o)}))},showMyLocationData(e,t){P.Z.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key=AIzaSyDt2YXE5tk0J72JgqnH3DTD7MeoqbbWBmU").then((e=>{e.data.error_message?(this.error=e.data.error_message,console.log(e.data.error_message)):(this.address=e.data.results[1].formatted_address,console.log("Address now "+this.address))})).catch((e=>{this.error=e.message,console.log(e.message)}))},cancelRecipientForm(){this.$router.go(-1)},async findRecipients(){const e=await D.Z.getOwnBookings(this.recipientId);console.log("Recipients "+e.length)},async remFile(){await _.Z.remove("644cff805261bf7d9943c5da","644cff875261bf7d9943c5dd")},handleFileChange(e){try{const t=e.target.files[0];console.log("event target client ",e.target.files[0]),t&&(this.showImage=URL.createObjectURL(t),this.file=e.target.files[0])}catch(t){console.log("Error:",t)}this.value=e.target.files[0],e.target.files[0]?this.isImageSelected=!0:this.isImageSelected=!1},async uploadImage(){const e=new FormData;e.append("file",this.file,this.file.name);const t=await _.Z.create(e);t&&(this.imgId=t.imgCreated._id,this.file=null,this.isImageSelected=!1,this.isUploaded=!0)},removeFile(){this.value=null,this.isImageSelected=!1,this.showImage=null},formatDate(e=Date){return e?(0,z.Z)(e,"dd.MM.yyyy, HH:mm"):null},backToDashboard(){},getDate(){console.log("selected date: "+this.date.getDate())},handleInternalDate(){console.log("Handled"),this.isNoDate=!1},async addRecipient(){let e;if(this.professional&&(this.isNotSelected=!0),this.date||(this.isNoDate=!0),this.date&&this.professional){let t=this.date.getFullYear(),o=this.date.getMonth(),s=this.date.getDate(),i=this.date.getHours(),l=this.date.getMinutes();const a=new Date(t,o,s,i,l).getTime();e={created:this.date,created_ms:a,header:this.header,address:this.address,latitude:this.lat,longitude:this.lng,professional:this.professional.label,year:this.date.getFullYear(),month:this.date.getMonth(),day:this.date.getDate(),hours:this.date.getHours(),minutes:this.date.getMinutes(),description:this.explanation,status:"waiting",imageId:this.imgId}}if(this.header&&this.address&&this.professional&&this.date&&this.explanation){const t=await D.Z.addRecipient(this.recipientId,e);this.$emit("booking:update",t),console.log("Booking--- "+t),this.$router.push("/received")}else console.log("Something went wrong"),console.log("Aadress "+this.address),console.log("header "+this.header),console.log("Explanation "+this.explanation),console.log("Date "+this.date)},checkForm(e=Event){e.target.classList.add("was-validated")}}},E=o(89);const Z=(0,E.Z)(R,[["render",k]]);var q=Z}}]);
//# sourceMappingURL=19.25787df9.js.map