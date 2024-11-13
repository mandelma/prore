"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[244],{4482:function(e,i,t){var l=t(6768);const s=({message:e})=>null===e?null:(0,l.bF)("div",{className:"error"},[e,(0,l.bF)("img",{className:"errorImg",alt:"error",src:t(1644)},null)]);i.A=s},7244:function(e,i,t){t.r(i),t.d(i,{default:function(){return O}});t(4114);var l=t(6768),s=t(5130),a=t(4232);const r={key:0,class:"spinner-border",role:"status"},o={key:1},n=["src"],d={key:2},u={key:3,for:"file-upload",class:"custom-file-upload"},g={key:0},m={key:1},f={key:4},h={style:{float:"right",padding:"10px",width:"100%"}},k={style:{color:"#bab5b5"}},p={key:0},c={style:{padding:"10px",color:"springgreen"}},v={key:0},P={key:1},y={key:2},E={key:0,class:"spinner-border",role:"status"},I={key:1},L={key:1},b={colspan:"2"};function D(e,i,D,w,C,_){const A=(0,l.g2)("file-error"),B=(0,l.g2)("MDBCol"),F=(0,l.g2)("MDBIcon"),M=(0,l.g2)("MDBBtnClose"),U=(0,l.g2)("MDBBtn"),T=(0,l.g2)("MDBRow"),S=(0,l.g2)("MDBTable"),X=(0,l.g2)("edit-profile"),x=(0,l.g2)("MDBContainer");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(x,{style:{"margin-top":"70px"}},{default:(0,l.k6)((()=>[C.userData?((0,l.uX)(),(0,l.CE)("div",o,[(0,l.bF)(T,null,{default:(0,l.k6)((()=>[(0,l.bF)(A,{message:C.fileSizeError},null,8,["message"]),(0,l.bF)(A,{message:C.fileTypeError},null,8,["message"]),(0,l.bF)(A,{message:C.emailErrorMessage},null,8,["message"]),(0,l.bF)(B,{lg:"4"},{default:(0,l.k6)((()=>[(0,l.bF)(B,{lg:"6"},{default:(0,l.k6)((()=>[(0,l.bF)(T,null,{default:(0,l.k6)((()=>[C.avatar?((0,l.uX)(),(0,l.Wv)(B,{key:0},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:C.showImage?C.showImage:t(4310)(`./${C.avatar}`),alt:"profile_img_blob",style:{width:"100px",height:"100px",border:"1px solid darkgrey","border-radius":"50px","margin-bottom":"20px"}},null,8,n)])),_:1})):((0,l.uX)(),(0,l.Wv)(B,{key:1,style:{border:"solid red"}},{default:(0,l.k6)((()=>[i[11]||(i[11]=(0,l.Lk)("div",null,null,-1)),(0,l.bF)(F,{size:"5x",style:{padding:"20px 0",width:"100px"}},{default:(0,l.k6)((()=>i[10]||(i[10]=[(0,l.Lk)("i",{class:"fas fa-user"},null,-1)]))),_:1})])),_:1})),(0,l.bF)(B,null,{default:(0,l.k6)((()=>[C.isEditProfileImage||C.isAddProfileImage?((0,l.uX)(),(0,l.Wv)(M,{key:0,white:"",style:{float:"right"},onClick:i[0]||(i[0]=e=>C.isAddProfileImage=C.isEditProfileImage=!1)})):(0,l.Q3)("",!0),C.isPressedEditProfile&&!C.isAddProfileImage&&"avatar.png"===C.avatar?((0,l.uX)(),(0,l.CE)("h4",{key:1,class:"profile_image",onClick:i[1]||(i[1]=(...e)=>_.addProfileImage&&_.addProfileImage(...e))}," Lisää profiili kuva ")):C.isPressedEditProfile&&!C.isEditProfileImage&&"avatar.png"!==C.avatar?((0,l.uX)(),(0,l.CE)("div",d,[(0,l.Lk)("h4",{class:"profile_image",onClick:i[2]||(i[2]=(...e)=>_.editProfileImage&&_.editProfileImage(...e))}," Muokkaa profiili kuva "),(0,l.Lk)("form",{onSubmit:i[3]||(i[3]=(0,s.D$)(((...e)=>_.removeProfileImage&&_.removeProfileImage(...e)),["prevent"]))},[(0,l.bF)(U,{block:"",color:"danger",type:"submit"},{default:(0,l.k6)((()=>i[12]||(i[12]=[(0,l.eW)(" Poista profiilin kuva ")]))),_:1})],32)])):(0,l.Q3)("",!0),C.isEditProfileImage||C.isAddProfileImage?((0,l.uX)(),(0,l.CE)("label",u,[C.value?((0,l.uX)(),(0,l.CE)("span",g," Muokkaa kuva: "+(0,a.v_)(C.value.name),1)):((0,l.uX)(),(0,l.CE)("span",m,"Valitse uusi kuva tehtävästä"))])):(0,l.Q3)("",!0),(0,l.Lk)("input",{id:"file-upload",type:"file",onChange:i[4]||(i[4]=(...e)=>_.handleFileChange&&_.handleFileChange(...e))},null,32),C.isPressedEditProfile?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",f,[(0,l.Lk)("div",h,[(0,l.Lk)("div",k,[C.pro?((0,l.uX)(),(0,l.CE)("div",p,[(0,l.Lk)("h4",null,"TMI "+(0,a.v_)(C.pro.yritys),1),(0,l.Lk)("div",c,[((C.pro.proTime-(new Date).getTime())/864e5).toFixed()<=0?((0,l.uX)(),(0,l.CE)("div",v,[i[13]||(i[13]=(0,l.Lk)("h4",null,"Valitettavasti käyttö on päättynyt!",-1)),(0,l.Lk)("p",{style:{color:"orangered",float:"right",cursor:"pointer"},onClick:i[5]||(i[5]=i=>e.$router.push("/pay-plan"))},"Lattaa lisää aikaa!")])):((C.pro.proTime-(new Date).getTime())/864e5).toFixed()<=3&&((C.pro.proTime-(new Date).getTime())/864e5).toFixed()>0?((0,l.uX)(),(0,l.CE)("div",P,[i[14]||(i[14]=(0,l.Lk)("h4",null,"Käyttö",-1)),(0,l.Lk)("h4",null,(0,a.v_)(((C.pro.proTime-(new Date).getTime())/864e5).toFixed())+" päivää",1),(0,l.Lk)("p",{style:{color:"orangered",float:"right",cursor:"pointer"},onClick:i[6]||(i[6]=i=>e.$router.push("/pay-plan"))},"Lattaa lisää aikaa!")])):((0,l.uX)(),(0,l.CE)("div",y,["NaN"===((C.pro.proTime-(new Date).getTime())/864e5).toFixed()?((0,l.uX)(),(0,l.CE)("div",E,i[15]||(i[15]=[(0,l.Lk)("span",{class:"visually-hidden"},"Loading...",-1)]))):((0,l.uX)(),(0,l.CE)("div",I,[i[16]||(i[16]=(0,l.Lk)("h4",null,"Käyttö: ",-1)),(0,l.Lk)("h4",null,(0,a.v_)(((C.pro.proTime-(new Date).getTime())/864e5).toFixed())+" päivää",1)]))]))])])):(0,l.Q3)("",!0),C.client?((0,l.uX)(),(0,l.CE)("h3",L,"Sinulla on varauksia ("+(0,a.v_)(C.client.length)+")",1)):(0,l.Q3)("",!0)])])]))])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.bF)(B,{lg:"8"},{default:(0,l.k6)((()=>[C.isPressedEditProfile?((0,l.uX)(),(0,l.Wv)(M,{key:1,white:"",style:{float:"right"},onClick:i[8]||(i[8]=e=>C.isPressedEditProfile=!1)})):((0,l.uX)(),(0,l.Wv)(M,{key:0,white:"",style:{float:"right"},onClick:i[7]||(i[7]=i=>e.$router.go(-1))})),C.isPressedEditProfile?((0,l.uX)(),(0,l.Wv)(X,{key:3,loggedInUser:D.loggedInUser,userData:C.userData,onGoBackFromEditProfile:_.handleCloseEditProfile,"onProfile:data":_.handleSaveProfile,onSaveProfileImg:_.handleSaveProfileImage},null,8,["loggedInUser","userData","onGoBackFromEditProfile","onProfile:data","onSaveProfileImg"])):((0,l.uX)(),(0,l.Wv)(S,{key:2,borderless:"",style:{"font-size":"14px","text-align":"left"}},{default:(0,l.k6)((()=>[(0,l.Lk)("tbody",null,[(0,l.Lk)("tr",null,[i[17]||(i[17]=(0,l.Lk)("td",null," Etunimi: ",-1)),(0,l.Lk)("td",null,(0,a.v_)(C.userData.firstName),1)]),(0,l.Lk)("tr",null,[i[18]||(i[18]=(0,l.Lk)("td",null," Sukunimi: ",-1)),(0,l.Lk)("td",null,(0,a.v_)(D.loggedInUser.lastName),1)]),(0,l.Lk)("tr",null,[i[19]||(i[19]=(0,l.Lk)("td",null," Käyttäjätunnus: ",-1)),(0,l.Lk)("td",null,(0,a.v_)(D.loggedInUser.username),1)]),(0,l.Lk)("tr",null,[i[20]||(i[20]=(0,l.Lk)("td",null," Osoite: ",-1)),(0,l.Lk)("td",null,(0,a.v_)(C.userData.address),1)]),(0,l.Lk)("tr",null,[i[21]||(i[21]=(0,l.Lk)("td",null," Sähköposti ",-1)),(0,l.Lk)("td",null,(0,a.v_)(C.userData.email),1)]),(0,l.Lk)("tr",null,[(0,l.Lk)("td",b,[(0,l.bF)(U,{block:"",size:"lg",outline:"success",onClick:_.pressedEditProfile},{default:(0,l.k6)((()=>i[22]||(i[22]=[(0,l.eW)("Muokkaa tiotosi")]))),_:1},8,["onClick"])])])])])),_:1}))])),_:1})])),_:1})])):((0,l.uX)(),(0,l.CE)("div",r,i[9]||(i[9]=[(0,l.Lk)("span",{class:"visually-hidden"},"Loading...",-1)])))])),_:1}),(0,l.Lk)("div",null,[(0,l.bF)(x)])],64)}t(4603),t(7566),t(8721);var w=t(5846);const C={style:{color:"cornflowerblue"}},_={style:{color:"cornflowerblue"}},A={colspan:"2"};function B(e,i,t,s,r,o){const n=(0,l.g2)("MDBBtnClose"),d=(0,l.g2)("MDBInput"),u=(0,l.g2)("MDBBtn"),g=(0,l.g2)("MDBTable"),m=(0,l.g2)("MDBContainer");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(n,{style:{float:"right",cursor:"pointer"},onClick:o.closeEditProfile},null,8,["onClick"]),(0,l.bF)(m,null,{default:(0,l.k6)((()=>[(0,l.bF)(g,{borderless:"",style:{"font-size":"14px","text-align":"left"}},{default:(0,l.k6)((()=>[(0,l.Lk)("tbody",null,[(0,l.Lk)("tr",null,[i[2]||(i[2]=(0,l.Lk)("td",null," Etunimi: ",-1)),(0,l.Lk)("td",null,(0,a.v_)(t.loggedInUser.firstName),1)]),(0,l.Lk)("tr",null,[i[3]||(i[3]=(0,l.Lk)("td",null," Sukunimi: ",-1)),(0,l.Lk)("td",null,(0,a.v_)(t.loggedInUser.lastName),1)]),(0,l.Lk)("tr",null,[i[4]||(i[4]=(0,l.Lk)("td",null," Käyttäjätunnus: ",-1)),(0,l.Lk)("td",null,(0,a.v_)(t.loggedInUser.username),1)]),(0,l.Lk)("tr",null,[i[5]||(i[5]=(0,l.Lk)("td",null," Osoite ",-1)),(0,l.Lk)("td",null,[(0,l.Lk)("p",C,(0,a.v_)(t.userData.address),1),(0,l.bF)(d,{white:"",size:"lg",id:"address",label:t.userData.address?"Anna uusi osoitteesi":"Anna Osoitteesi",modelValue:r.newAddress,"onUpdate:modelValue":i[0]||(i[0]=e=>r.newAddress=e)},null,8,["label","modelValue"])])]),(0,l.Lk)("tr",null,[i[6]||(i[6]=(0,l.Lk)("td",null," Sähköposti ",-1)),(0,l.Lk)("td",null,[(0,l.Lk)("p",_,(0,a.v_)(t.userData.email),1),(0,l.bF)(d,{white:"",size:"lg",label:""!==t.userData.email?"Anna uusi sähköpostisi":"Anna Sähköpostisi",modelValue:r.email,"onUpdate:modelValue":i[1]||(i[1]=e=>r.email=e)},null,8,["label","modelValue"])])]),(0,l.Lk)("tr",null,[(0,l.Lk)("td",A,[(0,l.bF)(u,{block:"",size:"lg",color:"success",onClick:o.saveProfileData},{default:(0,l.k6)((()=>i[7]||(i[7]=[(0,l.eW)("Tallenna tiedot")]))),_:1},8,["onClick"])])])])])),_:1})])),_:1})],64)}var F={name:"EditProfile",props:{loggedInUser:Object,userData:Object},components:{MDBContainer:w.Dj,MDBInput:w.gk,MDBBtnClose:w.uR,MDBBtn:w.al,MDBTable:w.EU},data(){return{lat:null,long:null,address:null,email:"",newAddress:""}},mounted(){const e={lat:50.064192,lng:-130.605469},i={north:e.lat+.1,south:e.lat-.1,east:e.lng+.1,west:e.lng-.1},t=document.getElementById("address"),l={bounds:i,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},s=new google.maps.places.Autocomplete(t,l);s.addListener("place_changed",(()=>{let e=s.getPlace();this.lat=e.geometry.location.lat(),this.long=e.geometry.location.lng(),this.address=e.formatted_address,console.log(e)}))},methods:{closeEditProfile(){this.$emit("goBackFromEditProfile")},saveProfileData(){const e={latitude:this.lat,longitude:this.long,address:this.address},i=this.email;this.$emit("profile:data",e,i),this.$emit("saveProfileImg")}}},M=t(1241);const U=(0,M.A)(F,[["render",B]]);var T=U,S=t(1769),X=t(407),x=t(4474),N=t(683),j=t(4482),z=(t(1690),{name:"user-profile",props:{loggedInUser:Object,provider:Object,recipient:Array},components:{editProfile:T,fileError:j.A,MDBContainer:w.Dj,MDBTable:w.EU,MDBBtn:w.al,MDBRow:w.gU,MDBCol:w.m6,MDBIcon:w.$u,MDBBtnClose:w.uR},data(){return{user:null,userData:null,isPressedEditProfile:!1,isAddProfileImage:!1,isEditProfileImage:!1,isEditData:!1,pro:null,client:[],mail:"",address:"",osoite:null,lat:null,long:null,showImage:null,value:null,file:null,isProfileImageSelected:!1,isUploaded:!1,user_profile_image:[],avatar:"avatar.png",image_id:null,fileSizeError:null,fileTypeError:null,emailErrorMessage:null}},mounted(){this.getUserData()},methods:{async getUserData(){const e=window.localStorage.getItem("loggedAppUser");if(e){this.user=JSON.parse(e);const i=await S.A.getProvider(this.user.id),t=await X.A.getOwnBookings(this.user.id);i&&t.length>0||i?(this.avatar=i.user.avatar.name,this.pro=i,this.userData={firstName:this.user.firstName,address:i.address,email:i.user.email}):t.length>0?(t[0].user.avatar&&(this.avatar=t[0].user.avatar.name),this.client=t,this.userData={firstName:this.user.firstName,address:t[0].address,email:t[0].user.email}):this.userData={firstName:this.user.firstName,address:"",email:this.user.email}}else this.$router.push("/")},async getUserPro(){const e=await S.A.getProvider(this.user.id);e&&(console.log("User pro username "+e.user.username),this.pro=e,this.userData={firstName:this.loggedInUser.firstName,address:this.pro.address})},async getUserRecipient(){const e=await X.A.getOwnBookings(this.user.id);e&&e.length>0&&(this.client=e,this.userData={firstName:this.user.firstName,address:e[0].address})},pressedEditProfile(){this.isPressedEditProfile=!0},handleSaveProfileData(){},async validateUploadErrors(e,i){this.file.size>1048576?(this.fileSizeError="Kuvan koko on oltava pienempi kun 10 MB!",setTimeout((()=>{this.fileSizeError=null}),3e3),this.showImage=null,this.isAddProfileImage=!1,this.isEditProfileImage=!1,"image/jpeg"===this.file.type&&"image/png"===this.file.type&&"image/jpg"===this.image.type&&"image/gif"===this.image.type||(this.fileTypeError="Pitäisi käyttää kuvan formaatti (jpeg, jpg, png, gif)!",setTimeout((()=>{this.fileTypeError=null}),3e3),this.showImage=null,this.isAddProfileImage=!1,this.isEditProfileImage=!1)):("add"===i?(this.$emit("updateAvatar",this.showImage),await x.A.createProfileImage(this.user.id,e)):(this.$emit("updateAvatar",this.showImage),await x.A.newAvatar(this.user.id,e)),this.isPressedEditProfile=!1)},async handleSaveProfile(e,i){if(console.log("Is new address?? "+e.latitude),""!==i){const e=await N.A.editEmail(this.user.id,{email:i});"email existing"!==e.error?this.userData.email=i:(this.emailErrorMessage="Antamasi sähköpostiosoite on jo olemassa!",setTimeout((()=>{this.emailErrorMessage=null}),2e3))}if(null!==e.latitude&&(this.pro&&(await S.A.editAddress(this.pro.id,e),this.userData.address=e.address),this.client.length>0))for(let l in this.client){const i=this.client[l].id;await X.A.editBookingAddress(i,e),this.userData.address=e.address}const t=new FormData;null!==this.value&&(this.isAddProfileImage?(console.log("Saving image"),t.append("file",this.file,this.file.name),await this.validateUploadErrors(t,"add")):this.isEditProfileImage&&(console.log("Editing image here"),t.append("file",this.file,this.file.name),await this.validateUploadErrors(t,"edit"),this.$router.go(-1)))},saveEditedName(){this.userData.firstName=this.name,this.isEditName=!1},handleCloseEditProfile(){this.isPressedEditProfile=!1,this.isAddProfileImage=!1,this.isEditProfileImage=!1},handleFileChange(e){try{const i=e.target.files[0];console.log("event target client ",e.target.files[0]),i&&(this.showImage=URL.createObjectURL(i),this.avatar=URL.createObjectURL(i),this.file=e.target.files[0],console.log("Image type: "+this.file.type),console.log("Image size: "+typeof this.file.size))}catch(i){console.log("Error:",i)}this.value=e.target.files[0],e.target.files[0]?this.isProfileImageSelected=!0:this.isProfileImageSelected=!1},addProfileImage(){this.isAddProfileImage=!0},editProfileImage(){this.isEditProfileImage=!0},async removeProfileImage(){this.avatar="avatar.png",this.showImage=null,this.$emit("removeAvatar"),await N.A.removeAvatar(this.user.id),this.isEditProfileImage=!1,this.isPressedEditProfile=!1},async handleSaveProfileImage(){this.isPressedEditProfile=!1,this.isAddProfileImage=!1,this.isEditProfileImage=!1}}});const $=(0,M.A)(z,[["render",D],["__scopeId","data-v-54e106bb"]]);var O=$},1644:function(e,i,t){e.exports=t.p+"img/error.9510853e.png"}}]);
//# sourceMappingURL=244.a9d0f15d.js.map