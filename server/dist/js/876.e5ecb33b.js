"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[876],{4482:function(e,t,l){var i=l(6768);const s=({message:e})=>null===e?null:(0,i.bF)("div",{className:"error"},[e,(0,i.bF)("img",{className:"errorImg",alt:"error",src:l(1644)},null)]);t.A=s},4876:function(e,t,l){l.r(t),l.d(t,{default:function(){return z}});l(4114);var i=l(6768),s=l(4232);const a={key:0,class:"spinner-border",role:"status"},r={key:1},o=["src"],n={key:0},d={key:1},u={key:2,class:"edit-panel"},g={style:{display:"flex","justify-content":"right"}},m={for:"avatar-upload",class:"profile-file-upload"},p={key:0},h={key:1},f={key:0},c={style:{float:"right",padding:"10px",width:"100%"}},k={class:"profile-info"},v={key:0},y={style:{color:"cadetblue"}},E={key:0},L={key:1},P={key:2},b={key:0,class:"spinner-border",role:"status"},D={key:1},I={key:1},C={class:"profile-main"},w={colspan:"2"};function _(e,t,_,A,B,F){const S=(0,i.g2)("file-error"),U=(0,i.g2)("MDBCol"),M=(0,i.g2)("MDBBtnClose"),G=(0,i.g2)("MDBBtn"),N=(0,i.g2)("MDBRow"),T=(0,i.g2)("MDBTable"),O=(0,i.g2)("edit-profile"),x=(0,i.g2)("MDBContainer");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(x,{style:{"margin-top":"70px"}},{default:(0,i.k6)((()=>[B.userData?((0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(N,null,{default:(0,i.k6)((()=>[(0,i.bF)(S,{message:B.fileSizeError},null,8,["message"]),(0,i.bF)(S,{message:B.fileTypeError},null,8,["message"]),(0,i.bF)(S,{message:B.emailErrorMessage},null,8,["message"]),(0,i.bF)(U,{lg:"4"},{default:(0,i.k6)((()=>[(0,i.bF)(U,{lg:"6"},{default:(0,i.k6)((()=>[(0,i.bF)(N,null,{default:(0,i.k6)((()=>[(0,i.bF)(U,null,{default:(0,i.k6)((()=>[(0,i.Lk)("img",{src:B.showImage?B.showImage:l(4310)(`./${B.avatar}`),alt:"profile_img_blob",style:{width:"100px",height:"100px",border:"1px solid darkgrey","border-radius":"50px","margin-bottom":"20px"}},null,8,o)])),_:1}),B.showImage&&!B.isOpenSetAvatar?((0,i.uX)(),(0,i.CE)("div",n,[(0,i.Lk)("p",{onClick:t[0]||(t[0]=e=>B.isOpenSetAvatar=!0)},"Muokkaa")])):((0,i.uX)(),(0,i.CE)("div",d,[B.isPressedEditProfile&&!B.isOpenSetAvatar?((0,i.uX)(),(0,i.CE)("p",{key:0,onClick:t[1]||(t[1]=e=>B.isOpenSetAvatar=!0)},"Lisa avatar")):(0,i.Q3)("",!0)])),B.isOpenSetAvatar?((0,i.uX)(),(0,i.CE)("div",u,[(0,i.Lk)("div",g,[(0,i.bF)(M,{white:"",class:"close-btn",style:{float:"right"},onClick:F.closeEditPanel},null,8,["onClick"])]),(0,i.bF)(N,null,{default:(0,i.k6)((()=>[(0,i.bF)(U,null,{default:(0,i.k6)((()=>[(0,i.Lk)("input",{id:"avatar-upload",type:"file",onChange:t[2]||(t[2]=t=>F.handleFileChange(t,e.i))},null,32),(0,i.Lk)("label",m,[B.value?((0,i.uX)(),(0,i.CE)("span",p," Muokka tehtävän kuvausta ")):((0,i.uX)(),(0,i.CE)("span",h,"Valitse avatar"))]),B.showImage?((0,i.uX)(),(0,i.Wv)(G,{key:0,class:"btn",block:"",size:"lg",color:"danger",onClick:F.removeProfileImage},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("Poista kuva")]))),_:1},8,["onClick"])):(0,i.Q3)("",!0)])),_:1})])),_:1})])):(0,i.Q3)("",!0),(0,i.bF)(U,null,{default:(0,i.k6)((()=>[B.isPressedEditProfile?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",f,[(0,i.Lk)("div",c,[(0,i.Lk)("div",k,[B.pro?((0,i.uX)(),(0,i.CE)("div",v,[(0,i.Lk)("h3",null,(0,s.v_)(B.pro.yritys),1),(0,i.Lk)("div",y,[((B.pro.proTime-(new Date).getTime())/864e5).toFixed()<=0?((0,i.uX)(),(0,i.CE)("div",E,[t[8]||(t[8]=(0,i.Lk)("p",null,"Valitettavasti käyttö on päättynyt!",-1)),(0,i.Lk)("p",{style:{color:"orangered",cursor:"pointer"},onClick:t[3]||(t[3]=t=>e.$router.push("/pay-plan"))},"Lattaa lisää aikaa!")])):((B.pro.proTime-(new Date).getTime())/864e5).toFixed()<=3&&((B.pro.proTime-(new Date).getTime())/864e5).toFixed()>0?((0,i.uX)(),(0,i.CE)("div",L,[t[9]||(t[9]=(0,i.Lk)("p",null,"Käyttö",-1)),(0,i.Lk)("p",null,(0,s.v_)(((B.pro.proTime-(new Date).getTime())/864e5).toFixed())+" päivää",1),(0,i.Lk)("p",{style:{color:"orangered",cursor:"pointer"},onClick:t[4]||(t[4]=t=>e.$router.push("/pay-plan"))},"Lattaa lisää aikaa!")])):((0,i.uX)(),(0,i.CE)("div",P,["NaN"===((B.pro.proTime-(new Date).getTime())/864e5).toFixed()?((0,i.uX)(),(0,i.CE)("div",b,t[10]||(t[10]=[(0,i.Lk)("span",{class:"visually-hidden"},"Loading...",-1)]))):((0,i.uX)(),(0,i.CE)("div",D,[t[11]||(t[11]=(0,i.Lk)("p",null,"Käyttö: ",-1)),(0,i.Lk)("p",null,(0,s.v_)(((B.pro.proTime-(new Date).getTime())/864e5).toFixed())+" päivää",1)]))]))])])):(0,i.Q3)("",!0),B.client?((0,i.uX)(),(0,i.CE)("p",I,"Sinulla on varauksia ("+(0,s.v_)(B.client.length)+")",1)):(0,i.Q3)("",!0)])])]))])),_:1})])),_:1})])),_:1})])),_:1}),(0,i.bF)(U,{lg:"8"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",C,[B.isPressedEditProfile?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.Wv)(M,{key:0,white:"",style:{float:"right",padding:"13px"},onClick:t[5]||(t[5]=t=>e.$router.go(-1))})),B.isPressedEditProfile?((0,i.uX)(),(0,i.Wv)(O,{key:2,loggedInUser:_.loggedInUser,userData:B.userData,onGoBackFromEditProfile:F.handleCloseEditProfile,"onProfile:data":F.handleSaveProfile,onSaveProfileImg:F.handleSaveProfileImage},null,8,["loggedInUser","userData","onGoBackFromEditProfile","onProfile:data","onSaveProfileImg"])):((0,i.uX)(),(0,i.Wv)(T,{key:1,borderless:"",style:{"font-size":"14px","text-align":"left"}},{default:(0,i.k6)((()=>[(0,i.Lk)("tbody",null,[(0,i.Lk)("tr",null,[t[12]||(t[12]=(0,i.Lk)("td",null," Etunimi: ",-1)),(0,i.Lk)("td",null,(0,s.v_)(B.userData.firstName),1)]),(0,i.Lk)("tr",null,[t[13]||(t[13]=(0,i.Lk)("td",null," Sukunimi: ",-1)),(0,i.Lk)("td",null,(0,s.v_)(_.loggedInUser.lastName),1)]),(0,i.Lk)("tr",null,[t[14]||(t[14]=(0,i.Lk)("td",null," Käyttäjätunnus: ",-1)),(0,i.Lk)("td",null,(0,s.v_)(_.loggedInUser.username),1)]),(0,i.Lk)("tr",null,[t[15]||(t[15]=(0,i.Lk)("td",null," Osoite: ",-1)),(0,i.Lk)("td",null,(0,s.v_)(B.userData.address),1)]),(0,i.Lk)("tr",null,[t[16]||(t[16]=(0,i.Lk)("td",null," Sähköposti ",-1)),(0,i.Lk)("td",null,(0,s.v_)(B.userData.email),1)]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",w,[(0,i.bF)(G,{block:"",size:"lg",outline:"success",onClick:F.pressedEditProfile},{default:(0,i.k6)((()=>t[17]||(t[17]=[(0,i.eW)("Muokkaa tiotosi")]))),_:1},8,["onClick"])])])])])),_:1}))])])),_:1})])),_:1})])):((0,i.uX)(),(0,i.CE)("div",a,t[6]||(t[6]=[(0,i.Lk)("span",{class:"visually-hidden"},"Loading...",-1)]))),(0,i.eW)(" show image "+(0,s.v_)(B.showImage),1),t[18]||(t[18]=(0,i.Lk)("br",null,null,-1)),(0,i.eW)(" avatar "+(0,s.v_)(B.avatar),1),t[19]||(t[19]=(0,i.Lk)("br",null,null,-1)),(0,i.eW)(" file "+(0,s.v_)(B.file),1)])),_:1}),(0,i.Lk)("div",null,[(0,i.bF)(x)])],64)}l(4603),l(7566),l(8721);var A=l(5846);const B={class:"edit-profile"},F={style:{color:"cornflowerblue"}},S={style:{color:"cornflowerblue"}},U={colspan:"2"};function M(e,t,l,a,r,o){const n=(0,i.g2)("MDBBtnClose"),d=(0,i.g2)("MDBInput"),u=(0,i.g2)("MDBBtn"),g=(0,i.g2)("MDBTable"),m=(0,i.g2)("MDBContainer");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(n,{white:"",style:{float:"right",cursor:"pointer",padding:"13px"},onClick:o.closeEditProfile},null,8,["onClick"]),(0,i.bF)(m,null,{default:(0,i.k6)((()=>[(0,i.Lk)("div",B,[(0,i.bF)(g,{borderless:"",style:{"font-size":"14px","text-align":"left"}},{default:(0,i.k6)((()=>[(0,i.Lk)("tbody",null,[(0,i.Lk)("tr",null,[t[2]||(t[2]=(0,i.Lk)("td",null," Etunimi: ",-1)),(0,i.Lk)("td",null,(0,s.v_)(l.loggedInUser.firstName),1)]),(0,i.Lk)("tr",null,[t[3]||(t[3]=(0,i.Lk)("td",null," Sukunimi: ",-1)),(0,i.Lk)("td",null,(0,s.v_)(l.loggedInUser.lastName),1)]),(0,i.Lk)("tr",null,[t[4]||(t[4]=(0,i.Lk)("td",null," Käyttäjätunnus: ",-1)),(0,i.Lk)("td",null,(0,s.v_)(l.loggedInUser.username),1)]),(0,i.Lk)("tr",null,[t[5]||(t[5]=(0,i.Lk)("td",null," Osoite ",-1)),(0,i.Lk)("td",null,[(0,i.Lk)("p",F,(0,s.v_)(l.userData.address),1),(0,i.bF)(d,{white:"",size:"lg",id:"address",label:l.userData.address?"Anna uusi osoitteesi":"Anna Osoitteesi",modelValue:r.newAddress,"onUpdate:modelValue":t[0]||(t[0]=e=>r.newAddress=e)},null,8,["label","modelValue"])])]),(0,i.Lk)("tr",null,[t[6]||(t[6]=(0,i.Lk)("td",null," Sähköposti ",-1)),(0,i.Lk)("td",null,[(0,i.Lk)("p",S,(0,s.v_)(l.userData.email),1),(0,i.bF)(d,{white:"",size:"lg",label:""!==l.userData.email?"Anna uusi sähköpostisi":"Anna Sähköpostisi",modelValue:r.email,"onUpdate:modelValue":t[1]||(t[1]=e=>r.email=e)},null,8,["label","modelValue"])])]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",U,[(0,i.bF)(u,{block:"",size:"lg",color:"success",onClick:o.saveProfileData},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("Tallenna tiedot")]))),_:1},8,["onClick"])])])])])),_:1})])])),_:1})],64)}var G={name:"EditProfile",props:{loggedInUser:Object,userData:Object},components:{MDBContainer:A.Dj,MDBInput:A.gk,MDBBtnClose:A.uR,MDBBtn:A.al,MDBTable:A.EU},data(){return{lat:null,long:null,address:null,email:"",newAddress:""}},mounted(){const e={lat:50.064192,lng:-130.605469},t={north:e.lat+.1,south:e.lat-.1,east:e.lng+.1,west:e.lng-.1},l=document.getElementById("address"),i={bounds:t,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},s=new google.maps.places.Autocomplete(l,i);s.addListener("place_changed",(()=>{let e=s.getPlace();this.lat=e.geometry.location.lat(),this.long=e.geometry.location.lng(),this.address=e.formatted_address,console.log(e)}))},methods:{closeEditProfile(){this.$emit("goBackFromEditProfile")},saveProfileData(){const e={latitude:this.lat,longitude:this.long,address:this.address},t=this.email;this.$emit("profile:data",e,t),this.$emit("saveProfileImg")}}},N=l(1241);const T=(0,N.A)(G,[["render",M]]);var O=T,x=l(1769),X=l(407),j=(l(4474),l(683)),R=l(4482),W=(l(1690),{name:"user-profile",props:{loggedInUser:Object,provider:Object,recipient:Array},components:{editProfile:O,fileError:R.A,MDBContainer:A.Dj,MDBTable:A.EU,MDBBtn:A.al,MDBRow:A.gU,MDBCol:A.m6,MDBIcon:A.$u,MDBBtnClose:A.uR},data(){return{isOpenSetAvatar:!1,isOpenAdd:!1,isOpenEdit:!1,user:null,userData:null,isPressedEditProfile:!1,isAddProfileImage:!1,isEditProfileImage:!1,isEditData:!1,pro:null,client:[],mail:"",address:"",osoite:null,lat:null,long:null,showImage:null,value:null,file:null,isProfileImageSelected:!1,isUploaded:!1,user_profile_image:[],avatar:"avatar.png",image_id:null,fileSizeError:null,fileTypeError:null,emailErrorMessage:null}},mounted(){this.getUserData()},methods:{async getUserData(){const e=window.localStorage.getItem("loggedAppUser");if(e){this.user=JSON.parse(e);const t=await x.A.getProvider(this.user.id),l=await X.A.getOwnBookings(this.user.id);t&&l.length>0||t?(this.avatar=t.user.avatar.name,this.pro=t,this.userData={firstName:this.user.firstName,address:t.address,email:t.user.email}):l.length>0?(l[0].user.avatar&&(this.avatar=l[0].user.avatar.name),this.client=l,this.userData={firstName:this.user.firstName,address:l[0].address,email:l[0].user.email}):this.userData={firstName:this.user.firstName,address:"",email:this.user.email}}else this.$router.push("/")},async getUserPro(){const e=await x.A.getProvider(this.user.id);e&&(console.log("User pro username "+e.user.username),this.pro=e,this.userData={firstName:this.loggedInUser.firstName,address:this.pro.address})},async getUserRecipient(){const e=await X.A.getOwnBookings(this.user.id);e&&e.length>0&&(this.client=e,this.userData={firstName:this.user.firstName,address:e[0].address})},pressedEditProfile(){this.isPressedEditProfile=!0},handleSaveProfileData(){},async validateUploadErrors(e,t,l){console.log("FILE "+t.type),"image/jpeg"!==t.type||"image/png"!==t.type||"image/jpg"!==t.type||"image/gif"!==t.type||this.eiole?(console.log("EI KUNNOSSA"),this.fileTypeError="Pitäisi käyttää kuvan formaatti (jpeg, jpg, png, gif)!",setTimeout((()=>{this.fileTypeError=null}),3e3),this.showImage=null,this.isAddProfileImage=!1,this.isEditProfileImage=!1,this.value=null):console.log("EI KUNNOSSA"),"image/jpeg"!==this.file.type||"image/png"!==this.file.type||"image/jpg"!==this.image.type||"image/gif"!==this.image.type?(console.log("GGGGGGGGGGGGGGGGGGGGGGGGGG"),this.fileTypeError="Pitäisi käyttää kuvan formaatti (jpeg, jpg, png, gif)!",setTimeout((()=>{this.fileTypeError=null}),3e3)):console.log("jköergfqeigbnaildn ")},async handleSaveProfile(e,t){if(console.log("Is new address?? "+e.latitude),""!==t){const e=await j.A.editEmail(this.user.id,{email:t});"email existing"!==e.error?this.userData.email=t:(this.emailErrorMessage="Antamasi sähköpostiosoite on jo olemassa!",setTimeout((()=>{this.emailErrorMessage=null}),2e3))}if(null!==e.latitude&&(this.pro&&(await x.A.editAddress(this.pro.id,e),this.userData.address=e.address),this.client.length>0))for(let i in this.client){const t=this.client[i].id;await X.A.editBookingAddress(t,e),this.userData.address=e.address}const l=new FormData;null!==this.value&&(this.isAddProfileImage?(console.log("Saving image type "+this.file.type),l.append("file",this.file,this.file.name),await this.validateUploadErrors(l,this.file,"add")):this.isEditProfileImage&&(console.log("Editing image here"),l.append("file",this.file,this.file.name),this.$router.go(-1)))},saveEditedName(){this.userData.firstName=this.name,this.isEditName=!1},handleCloseEditProfile(){this.isPressedEditProfile=!1,this.isAddProfileImage=!1,this.isEditProfileImage=!1},handleFileChange(e){try{const t=e.target.files[0];this.file=t,console.log("event target client ",e.target.files[0]),t&&(this.isAddProfileImage=!0,this.file=e.target.files[0],this.isOpenEdit=!0,this.showImage=URL.createObjectURL(t),this.avatar=URL.createObjectURL(t))}catch(t){console.log("Error:",t)}this.value=e.target.files[0],e.target.files[0]?this.isProfileImageSelected=!0:this.isProfileImageSelected=!1},addProfileImage(){this.isAddProfileImage=!0},editProfileImage(){this.isEditProfileImage=!0},closeEditPanel(){this.isOpenSetAvatar=!1},async removeProfileImage(){this.openSetAvatar=!1,this.showImage?(this.avatar="avatar.png",this.value=null,this.showImage=null,this.isOpenSetAvatar=!1):console.log("Deleting real image...")},async handleSaveProfileImage(){this.isPressedEditProfile=!1,this.isAddProfileImage=!1,this.isEditProfileImage=!1}}});const $=(0,N.A)(W,[["render",_],["__scopeId","data-v-4747ab1c"]]);var z=$},1644:function(e,t,l){e.exports=l.p+"img/error.9510853e.png"}}]);
//# sourceMappingURL=876.e5ecb33b.js.map