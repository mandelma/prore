"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[929],{5118:function(e,i,t){var s=t(3396);const l=({message:e})=>null===e?null:(0,s.Wm)("div",{className:"error"},[e,(0,s.Wm)("img",{className:"errorImg",src:t(5551)},null)]);i.Z=l},7929:function(e,i,t){t.r(i),t.d(i,{default:function(){return J}});var s=t(3396),l=t(9242),a=t(7139);const r=e=>((0,s.dD)("data-v-76a47d64"),e=e(),(0,s.Cn)(),e),o={key:0,class:"spinner-border",role:"status"},n=r((()=>(0,s._)("span",{class:"visually-hidden"},"Loading...",-1))),d=[n],u={key:1},g=["src"],m=r((()=>(0,s._)("div",null,null,-1))),f=r((()=>(0,s._)("i",{class:"fas fa-user"},null,-1))),h={key:2},p={key:3,for:"file-upload",class:"custom-file-upload"},c={key:0},w={key:1},P={key:4},v={style:{float:"right",padding:"10px",width:"100%"}},_={style:{color:"#4d4d4d"}},k={key:0},I={key:1},y=r((()=>(0,s._)("td",null," Etunimi: ",-1))),D=r((()=>(0,s._)("td",null," Sukunimi: ",-1))),E=r((()=>(0,s._)("td",null," Käyttäjätunnus: ",-1))),B=r((()=>(0,s._)("td",null," Osoite: ",-1))),b=r((()=>(0,s._)("td",null," Sähköposti ",-1))),M={colspan:"2"};function U(e,i,r,n,U,C){const A=(0,s.up)("file-error"),z=(0,s.up)("MDBCol"),S=(0,s.up)("MDBIcon"),W=(0,s.up)("MDBBtnClose"),j=(0,s.up)("MDBBtn"),N=(0,s.up)("MDBRow"),x=(0,s.up)("MDBTable"),Z=(0,s.up)("edit-profile"),O=(0,s.up)("MDBContainer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(O,{style:{"margin-top":"70px"}},{default:(0,s.w5)((()=>[U.userData?((0,s.wg)(),(0,s.iD)("div",u,[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Wm)(A,{message:U.fileSizeError},null,8,["message"]),(0,s.Wm)(A,{message:U.fileTypeError},null,8,["message"]),(0,s.Wm)(A,{message:U.emailErrorMessage},null,8,["message"]),(0,s.Wm)(z,{lg:"4"},{default:(0,s.w5)((()=>[(0,s.Wm)(z,{lg:"6"},{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[U.avatar?((0,s.wg)(),(0,s.j4)(z,{key:0},{default:(0,s.w5)((()=>[(0,s._)("img",{src:U.showImage?U.showImage:t(2519)(`./${U.avatar}`),alt:"profile_img_blob",style:{width:"100px",height:"100px",border:"1px solid darkgrey","border-radius":"50px","margin-bottom":"20px"}},null,8,g)])),_:1})):((0,s.wg)(),(0,s.j4)(z,{key:1,style:{border:"solid red"}},{default:(0,s.w5)((()=>[m,(0,s.Wm)(S,{size:"5x",style:{padding:"20px 0",width:"100px"}},{default:(0,s.w5)((()=>[f])),_:1})])),_:1})),(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[U.isEditProfileImage||U.isAddProfileImage?((0,s.wg)(),(0,s.j4)(W,{key:0,white:"",style:{float:"right"},onClick:i[0]||(i[0]=e=>U.isAddProfileImage=U.isEditProfileImage=!1)})):(0,s.kq)("",!0),U.isPressedEditProfile&&!U.isAddProfileImage&&"avatar.png"===U.avatar?((0,s.wg)(),(0,s.iD)("h4",{key:1,class:"profile_image",onClick:i[1]||(i[1]=(...e)=>C.addProfileImage&&C.addProfileImage(...e))}," Lisää profiili kuva ")):U.isPressedEditProfile&&!U.isEditProfileImage&&"avatar.png"!==U.avatar?((0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("h4",{class:"profile_image",onClick:i[2]||(i[2]=(...e)=>C.editProfileImage&&C.editProfileImage(...e))}," Muokkaa profiili kuva "),(0,s._)("form",{onSubmit:i[3]||(i[3]=(0,l.iM)(((...e)=>C.removeProfileImage&&C.removeProfileImage(...e)),["prevent"]))},[(0,s.Wm)(j,{block:"",color:"danger",type:"submit"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Poista profiilin kuva ")])),_:1})],32)])):(0,s.kq)("",!0),U.isEditProfileImage||U.isAddProfileImage?((0,s.wg)(),(0,s.iD)("label",p,[U.value?((0,s.wg)(),(0,s.iD)("span",c," Muokkaa kuva: "+(0,a.zw)(U.value.name),1)):((0,s.wg)(),(0,s.iD)("span",w,"Valitse uusi kuva tehtävästä"))])):(0,s.kq)("",!0),(0,s._)("input",{id:"file-upload",type:"file",onChange:i[4]||(i[4]=(...e)=>C.handleFileChange&&C.handleFileChange(...e))},null,32),U.isPressedEditProfile?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",P,[(0,s._)("div",v,[(0,s._)("div",_,[U.pro?((0,s.wg)(),(0,s.iD)("h3",k,"TMI "+(0,a.zw)(U.pro.yritys),1)):(0,s.kq)("",!0),U.client?((0,s.wg)(),(0,s.iD)("h3",I,"Sinulla on varauksia ("+(0,a.zw)(U.client.length)+")",1)):(0,s.kq)("",!0)])])]))])),_:1})])),_:1})])),_:1})])),_:1}),(0,s.Wm)(z,{lg:"8"},{default:(0,s.w5)((()=>[U.isPressedEditProfile?((0,s.wg)(),(0,s.j4)(W,{key:1,white:"",style:{float:"right"},onClick:i[6]||(i[6]=e=>U.isPressedEditProfile=!1)})):((0,s.wg)(),(0,s.j4)(W,{key:0,white:"",style:{float:"right"},onClick:i[5]||(i[5]=i=>e.$router.go(-1))})),U.isPressedEditProfile?((0,s.wg)(),(0,s.j4)(Z,{key:3,loggedInUser:r.loggedInUser,userData:U.userData,onGoBackFromEditProfile:C.handleCloseEditProfile,"onProfile:data":C.handleSaveProfile,onSaveProfileImg:C.handleSaveProfileImage},null,8,["loggedInUser","userData","onGoBackFromEditProfile","onProfile:data","onSaveProfileImg"])):((0,s.wg)(),(0,s.j4)(x,{key:2,borderless:"",style:{"font-size":"14px","text-align":"left"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[(0,s._)("tr",null,[y,(0,s._)("td",null,(0,a.zw)(U.userData.firstName),1)]),(0,s._)("tr",null,[D,(0,s._)("td",null,(0,a.zw)(r.loggedInUser.lastName),1)]),(0,s._)("tr",null,[E,(0,s._)("td",null,(0,a.zw)(r.loggedInUser.username),1)]),(0,s._)("tr",null,[B,(0,s._)("td",null,(0,a.zw)(U.userData.address),1)]),(0,s._)("tr",null,[b,(0,s._)("td",null,(0,a.zw)(U.userData.email),1)]),(0,s._)("tr",null,[(0,s._)("td",M,[(0,s.Wm)(j,{block:"",size:"lg",outline:"success",onClick:C.pressedEditProfile},{default:(0,s.w5)((()=>[(0,s.Uk)("Muokkaa tiotosi")])),_:1},8,["onClick"])])])])])),_:1}))])),_:1})])),_:1})])):((0,s.wg)(),(0,s.iD)("div",o,d))])),_:1}),(0,s._)("div",null,[(0,s.Wm)(O)])],64)}t(7658),t(2062);var C=t(4313);const A=(0,s._)("td",null," Etunimi: ",-1),z=(0,s._)("td",null," Sukunimi: ",-1),S=(0,s._)("td",null," Käyttäjätunnus: ",-1),W=(0,s._)("td",null," Osoite ",-1),j={style:{color:"cornflowerblue"}},N=(0,s._)("td",null," Sähköposti ",-1),x={style:{color:"cornflowerblue"}},Z={colspan:"2"};function O(e,i,t,l,r,o){const n=(0,s.up)("MDBBtnClose"),d=(0,s.up)("MDBInput"),u=(0,s.up)("MDBBtn"),g=(0,s.up)("MDBTable"),m=(0,s.up)("MDBContainer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(n,{style:{float:"right",cursor:"pointer"},onClick:o.closeEditProfile},null,8,["onClick"]),(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(g,{borderless:"",style:{"font-size":"14px","text-align":"left"}},{default:(0,s.w5)((()=>[(0,s._)("tbody",null,[(0,s._)("tr",null,[A,(0,s._)("td",null,(0,a.zw)(t.loggedInUser.firstName),1)]),(0,s._)("tr",null,[z,(0,s._)("td",null,(0,a.zw)(t.loggedInUser.lastName),1)]),(0,s._)("tr",null,[S,(0,s._)("td",null,(0,a.zw)(t.loggedInUser.username),1)]),(0,s._)("tr",null,[W,(0,s._)("td",null,[(0,s._)("p",j,(0,a.zw)(t.userData.address),1),(0,s.Wm)(d,{white:"",size:"lg",id:"address",label:t.userData.address?"Anna uusi osoitteesi":"Anna Osoitteesi",modelValue:r.newAddress,"onUpdate:modelValue":i[0]||(i[0]=e=>r.newAddress=e)},null,8,["label","modelValue"])])]),(0,s._)("tr",null,[N,(0,s._)("td",null,[(0,s._)("p",x,(0,a.zw)(t.userData.email),1),(0,s.Wm)(d,{white:"",size:"lg",label:""!==t.userData.email?"Anna uusi sähköpostisi":"Anna Sähköpostisi",modelValue:r.email,"onUpdate:modelValue":i[1]||(i[1]=e=>r.email=e)},null,8,["label","modelValue"])])]),(0,s._)("tr",null,[(0,s._)("td",Z,[(0,s.Wm)(u,{block:"",size:"lg",color:"success",onClick:o.saveProfileData},{default:(0,s.w5)((()=>[(0,s.Uk)("Tallenna tiedot")])),_:1},8,["onClick"])])])])])),_:1})])),_:1}),(0,s.Uk)(" userdata "+(0,a.zw)(t.userData),1)],64)}var T={name:"EditProfile",props:{loggedInUser:Object,userData:Object},components:{MDBContainer:C.L5,MDBInput:C.u2,MDBBtnClose:C.Ok,MDBBtn:C.$v,MDBTable:C.re},data(){return{lat:null,long:null,address:null,email:"",newAddress:""}},mounted(){const e={lat:50.064192,lng:-130.605469},i={north:e.lat+.1,south:e.lat-.1,east:e.lng+.1,west:e.lng-.1},t=document.getElementById("address"),s={bounds:i,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},l=new google.maps.places.Autocomplete(t,s);l.addListener("place_changed",(()=>{let e=l.getPlace();this.lat=e.geometry.location.lat(),this.long=e.geometry.location.lng(),this.address=e.formatted_address,console.log(e)}))},methods:{closeEditProfile(){this.$emit("goBackFromEditProfile")},saveProfileData(){const e={latitude:this.lat,longitude:this.long,address:this.address},i=this.email;this.$emit("profile:data",e,i),this.$emit("saveProfileImg")}}},$=t(89);const L=(0,$.Z)(T,[["render",O]]);var R=L,F=t(9398),V=t(5800),q=t(8579),K=t(1478),G=t(5118),H=(t(4058),{name:"user-profile",props:{loggedInUser:Object,provider:Object,recipient:Array},components:{editProfile:R,fileError:G.Z,MDBContainer:C.L5,MDBTable:C.re,MDBBtn:C.$v,MDBRow:C.uZ,MDBCol:C.TK,MDBIcon:C.vm,MDBBtnClose:C.Ok},data(){return{user:null,userData:null,isPressedEditProfile:!1,isAddProfileImage:!1,isEditProfileImage:!1,isEditData:!1,pro:null,client:[],mail:"",address:"",osoite:null,lat:null,long:null,showImage:null,value:null,file:null,isProfileImageSelected:!1,isUploaded:!1,user_profile_image:[],avatar:"avatar.png",image_id:null,fileSizeError:null,fileTypeError:null,emailErrorMessage:null}},mounted(){this.getUserData()},methods:{async getUserData(){const e=window.localStorage.getItem("loggedAppUser");if(e){this.user=JSON.parse(e);const i=await F.Z.getProvider(this.user.id),t=await V.Z.getOwnBookings(this.user.id);i&&t.length>0||i?(this.avatar=i.user.avatar.name,this.pro=i,this.userData={firstName:this.user.firstName,address:i.address,email:i.user.email}):t.length>0?(t[0].user.avatar&&(this.avatar=t[0].user.avatar.name),this.client=t,this.userData={firstName:this.user.firstName,address:t[0].address,email:t[0].user.email}):this.userData={firstName:this.user.firstName,address:"",email:this.user.email}}else this.$router.push("/")},async getUserPro(){const e=await F.Z.getProvider(this.user.id);e&&(console.log("User pro username "+e.user.username),this.pro=e,this.userData={firstName:this.loggedInUser.firstName,address:this.pro.address})},async getUserRecipient(){const e=await V.Z.getOwnBookings(this.user.id);e&&e.length>0&&(this.client=e,this.userData={firstName:this.user.firstName,address:e[0].address})},pressedEditProfile(){this.isPressedEditProfile=!0},handleSaveProfileData(){},async validateUploadErrors(e,i){this.file.size>1048576?(this.fileSizeError="Kuvan koko on oltava pienempi kun 10 MB!",setTimeout((()=>{this.fileSizeError=null}),3e3),this.showImage=null,this.isAddProfileImage=!1,this.isEditProfileImage=!1,"image/jpeg"===this.file.type&&"image/png"===this.file.type&&"image/jpg"===this.image.type&&"image/gif"===this.image.type||(this.fileTypeError="Pitäisi käyttää kuvan formaatti (jpeg, jpg, png, gif)!",setTimeout((()=>{this.fileTypeError=null}),3e3),this.showImage=null,this.isAddProfileImage=!1,this.isEditProfileImage=!1)):("add"===i?(this.$emit("updateAvatar",this.showImage),await q.Z.createProfileImage(this.user.id,e)):(this.$emit("updateAvatar",this.showImage),await q.Z.newAvatar(this.user.id,e)),this.isPressedEditProfile=!1)},async handleSaveProfile(e,i){if(console.log("Is new address?? "+e.latitude),""!==i){const e=await K.Z.editEmail(this.user.id,{email:i});"email existing"!==e.error?this.userData.email=i:(this.emailErrorMessage="Antamasi sähköpostiosoite on jo olemassa!",setTimeout((()=>{this.emailErrorMessage=null}),2e3))}if(null!==e.latitude&&(this.pro&&(await F.Z.editAddress(this.pro.id,e),this.userData.address=e.address),this.client.length>0))for(let s in this.client){const i=this.client[s].id;await V.Z.editBookingAddress(i,e),this.userData.address=e.address}const t=new FormData;null!==this.value&&(this.isAddProfileImage?(console.log("Saving image"),t.append("file",this.file,this.file.name),await this.validateUploadErrors(t,"add")):this.isEditProfileImage&&(console.log("Editing image here"),t.append("file",this.file,this.file.name),await this.validateUploadErrors(t,"edit"),this.$router.go(-1)))},saveEditedName(){this.userData.firstName=this.name,this.isEditName=!1},handleCloseEditProfile(){this.isPressedEditProfile=!1,this.isAddProfileImage=!1,this.isEditProfileImage=!1},handleFileChange(e){try{const i=e.target.files[0];console.log("event target client ",e.target.files[0]),i&&(this.showImage=URL.createObjectURL(i),this.avatar=URL.createObjectURL(i),this.file=e.target.files[0],console.log("Image type: "+this.file.type),console.log("Image size: "+typeof this.file.size))}catch(i){console.log("Error:",i)}this.value=e.target.files[0],e.target.files[0]?this.isProfileImageSelected=!0:this.isProfileImageSelected=!1},addProfileImage(){this.isAddProfileImage=!0},editProfileImage(){this.isEditProfileImage=!0},async removeProfileImage(){this.avatar="avatar.png",this.showImage=null,this.$emit("removeAvatar"),await K.Z.removeAvatar(this.user.id),this.isEditProfileImage=!1,this.isPressedEditProfile=!1},async handleSaveProfileImage(){this.isPressedEditProfile=!1,this.isAddProfileImage=!1,this.isEditProfileImage=!1}}});const Y=(0,$.Z)(H,[["render",U],["__scopeId","data-v-76a47d64"]]);var J=Y},5551:function(e,i,t){e.exports=t.p+"img/error.9510853e.png"}}]);
//# sourceMappingURL=929.27e2ad4c.js.map