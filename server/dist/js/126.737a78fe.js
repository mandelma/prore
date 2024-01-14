"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[126],{5118:function(e,t,i){var l=i(3396);const a=({message:e})=>null===e?null:(0,l.Wm)("div",{className:"error"},[e]);t.Z=a},8579:function(e,t,i){const l=i(7218),a="/api/upload",s=async()=>{const e=await l.get(a);return e.data},r=async e=>{const t=await l.post(a,e,{});return t.data},o=async(e,t)=>{const i=await l.post(`${a}/${e}/avatar`,t);return i.data},n=async(e,t)=>{const i=await l.post(`${a}/${e}/update_avatar`,t);return i.data},d=async(e,t)=>{const i=await l.put(`${a}/${e}`,t);return i.data},u=async(e,t)=>{await l.delete(`${a}/${e}/${t}`)};t.Z={getAll:s,create:r,createProfileImage:o,newAvatar:n,updateImage:d,remove:u}},126:function(e,t,i){i.r(t),i.d(t,{default:function(){return J}});var l=i(3396),a=i(7139);const s=e=>((0,l.dD)("data-v-a669234c"),e=e(),(0,l.Cn)(),e),r={key:0,class:"spinner-border",role:"status"},o=s((()=>(0,l._)("span",{class:"visually-hidden"},"Loading...",-1))),n=[o],d={key:1},u=s((()=>(0,l._)("div",null,null,-1))),g=s((()=>(0,l._)("i",{class:"fas fa-user"},null,-1))),m={key:2},f={key:3,for:"file-upload",class:"custom-file-upload"},h={key:0},c={key:1},p={key:4},w={style:{border:"solid blue",float:"right",padding:"10px",width:"100%"}},P={key:0,class:"spinner-border",role:"status"},v=s((()=>(0,l._)("span",{class:"visually-hidden"},"Loading...",-1))),_=[v],k={key:1},I={key:0},y={key:1},D=s((()=>(0,l._)("td",null," Etunimi: ",-1))),E=s((()=>(0,l._)("td",null," Sukunimi: ",-1))),B=s((()=>(0,l._)("td",null," Käyttäjätunnus: ",-1))),C=s((()=>(0,l._)("td",null," Osoite: ",-1))),U=s((()=>(0,l._)("tr",null,[(0,l._)("td",null," Sähköposti "),(0,l._)("td",null," test.test@test.ee ")],-1))),b={colspan:"2"};function M(e,t,i,s,o,v){const M=(0,l.up)("file-error"),A=(0,l.up)("MDBIcon"),z=(0,l.up)("MDBCol"),S=(0,l.up)("MDBBtnClose"),W=(0,l.up)("MDBBtn"),$=(0,l.up)("MDBRow"),j=(0,l.up)("MDBTable"),N=(0,l.up)("edit-profile"),T=(0,l.up)("MDBContainer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(T,{style:{"margin-top":"50px"}},{default:(0,l.w5)((()=>[o.pro.yritys&&o.client?((0,l.wg)(),(0,l.iD)("div",d,[(0,l.Wm)($,null,{default:(0,l.w5)((()=>[(0,l.Wm)(M,{message:o.fileSizeError},null,8,["message"]),(0,l.Wm)(M,{message:o.fileTypeError},null,8,["message"]),(0,l.Wm)(z,{lg:"4"},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{lg:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)($,null,{default:(0,l.w5)((()=>[null!==o.avatar||o.showImage?((0,l.wg)(),(0,l.j4)(z,{key:1})):((0,l.wg)(),(0,l.j4)(z,{key:0,style:{border:"solid red"}},{default:(0,l.w5)((()=>[u,(0,l.Wm)(A,{size:"5x",style:{padding:"20px 0",width:"100px"}},{default:(0,l.w5)((()=>[g])),_:1})])),_:1})),(0,l.Wm)(z,{style:{border:"solid green"}},{default:(0,l.w5)((()=>[o.isEditProfileImage||o.isAddProfileImage?((0,l.wg)(),(0,l.j4)(S,{key:0,style:{float:"right"},onClick:t[0]||(t[0]=e=>o.isAddProfileImage=o.isEditProfileImage=!1)})):(0,l.kq)("",!0),!o.isPressedEditProfile||o.isAddProfileImage||o.avatar||o.showImage?o.isPressedEditProfile&&!o.isEditProfileImage&&(o.avatar||o.showImage)?((0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("h4",{class:"profile_image",onClick:t[2]||(t[2]=(...e)=>v.editProfileImage&&v.editProfileImage(...e))}," Muokkaa profiili kuva "),(0,l.Wm)(W,{block:"",color:"danger",onClick:v.removeProfileImage},{default:(0,l.w5)((()=>[(0,l.Uk)(" Poista profiilin kuva ")])),_:1},8,["onClick"])])):(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("h4",{key:1,class:"profile_image",onClick:t[1]||(t[1]=(...e)=>v.addProfileImage&&v.addProfileImage(...e))}," Lisää profiili kuva ")),o.isEditProfileImage||o.isAddProfileImage?((0,l.wg)(),(0,l.iD)("label",f,[o.value?((0,l.wg)(),(0,l.iD)("span",h," Muokkaa kuva: "+(0,a.zw)(o.value.name),1)):((0,l.wg)(),(0,l.iD)("span",c,"Valitse uusi kuva tehtävästä"))])):(0,l.kq)("",!0),(0,l._)("input",{id:"file-upload",type:"file",onChange:t[3]||(t[3]=(...e)=>v.handleFileChange&&v.handleFileChange(...e))},null,32),o.isPressedEditProfile?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("div",w,[o.pro?((0,l.wg)(),(0,l.iD)("div",k,[o.pro?((0,l.wg)(),(0,l.iD)("h3",I,"TMI "+(0,a.zw)(o.pro.yritys),1)):(0,l.kq)("",!0),o.client?((0,l.wg)(),(0,l.iD)("h3",y,"Sinulla on varauksia ("+(0,a.zw)(o.client.length)+")",1)):(0,l.kq)("",!0)])):((0,l.wg)(),(0,l.iD)("div",P,_))])]))])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(z,{lg:"8"},{default:(0,l.w5)((()=>[o.isPressedEditProfile?((0,l.wg)(),(0,l.j4)(N,{key:1,loggedInUser:i.loggedInUser,userData:o.userData,onGoBackFromEditProfile:v.handleCloseEditProfile,"onProfile:data":v.handleSaveProfile,onSaveProfileImg:v.handleSaveProfileImage},null,8,["loggedInUser","userData","onGoBackFromEditProfile","onProfile:data","onSaveProfileImg"])):((0,l.wg)(),(0,l.j4)(j,{key:0,borderless:"",style:{"font-size":"14px","text-align":"left"}},{default:(0,l.w5)((()=>[(0,l._)("tbody",null,[(0,l._)("tr",null,[D,(0,l._)("td",null,(0,a.zw)(o.userData.firstName),1)]),(0,l._)("tr",null,[E,(0,l._)("td",null,(0,a.zw)(i.loggedInUser.lastName),1)]),(0,l._)("tr",null,[B,(0,l._)("td",null,(0,a.zw)(i.loggedInUser.username),1)]),(0,l._)("tr",null,[C,(0,l._)("td",null,(0,a.zw)(o.userData.address),1)]),U,(0,l._)("tr",null,[(0,l._)("td",b,[(0,l.Wm)(W,{block:"",size:"lg",color:"success",onClick:v.pressedEditProfile},{default:(0,l.w5)((()=>[(0,l.Uk)("Muokkaa tiotosi")])),_:1},8,["onClick"])])])])])),_:1}))])),_:1})])),_:1})])):((0,l.wg)(),(0,l.iD)("div",r,n))])),_:1}),(0,l._)("div",null,[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,{outline:"danger",block:"",size:"lg",onClick:t[4]||(t[4]=t=>e.$router.go(-1))},{default:(0,l.w5)((()=>[(0,l.Uk)("Poistu sivulta")])),_:1})])),_:1})])],64)}i(7658),i(2062);var A=i(4313);const z=(0,l._)("td",null," Etunimi: ",-1),S=(0,l._)("td",null," Sukunimi: ",-1),W=(0,l._)("td",null," Käyttäjätunnus: ",-1),$=(0,l._)("td",null," Osoite ",-1),j={style:{color:"blue"}},N=(0,l._)("td",null," Sähköposti ",-1),T={colspan:"2"};function Z(e,t,i,s,r,o){const n=(0,l.up)("MDBBtnClose"),d=(0,l.up)("MDBInput"),u=(0,l.up)("MDBBtn"),g=(0,l.up)("MDBTable"),m=(0,l.up)("MDBContainer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(n,{style:{float:"right",cursor:"pointer"},onClick:o.closeEditProfile},null,8,["onClick"]),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,{borderless:"",style:{"font-size":"14px","text-align":"left"}},{default:(0,l.w5)((()=>[(0,l._)("tbody",null,[(0,l._)("tr",null,[z,(0,l._)("td",null,(0,a.zw)(i.loggedInUser.firstName),1)]),(0,l._)("tr",null,[S,(0,l._)("td",null,(0,a.zw)(i.loggedInUser.lastName),1)]),(0,l._)("tr",null,[W,(0,l._)("td",null,(0,a.zw)(i.loggedInUser.username),1)]),(0,l._)("tr",null,[$,(0,l._)("td",null,[(0,l._)("p",j,(0,a.zw)(i.userData.address),1),(0,l.Wm)(d,{id:"address",label:"Anna uusi osoitteesi",modelValue:r.newAddress,"onUpdate:modelValue":t[0]||(t[0]=e=>r.newAddress=e)},null,8,["modelValue"])])]),(0,l._)("tr",null,[N,(0,l._)("td",null,[(0,l.Wm)(d,{label:"mail",modelValue:r.mail,"onUpdate:modelValue":t[1]||(t[1]=e=>r.mail=e)},null,8,["modelValue"])])]),(0,l._)("tr",null,[(0,l._)("td",T,[(0,l.Wm)(u,{block:"",size:"lg",color:"success",onClick:o.saveProfileData},{default:(0,l.w5)((()=>[(0,l.Uk)("Tallenna tiedot")])),_:1},8,["onClick"])])])])])),_:1})])),_:1})],64)}var O={name:"EditProfile",props:{loggedInUser:Object,userData:Object},components:{MDBContainer:A.L5,MDBInput:A.u2,MDBBtnClose:A.Ok,MDBBtn:A.$v,MDBTable:A.re},data(){return{lat:null,long:null,address:null,mail:"",newAddress:""}},mounted(){const e={lat:50.064192,lng:-130.605469},t={north:e.lat+.1,south:e.lat-.1,east:e.lng+.1,west:e.lng-.1},i=document.getElementById("address"),l={bounds:t,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},a=new google.maps.places.Autocomplete(i,l);a.addListener("place_changed",(()=>{let e=a.getPlace();this.lat=e.geometry.location.lat(),this.long=e.geometry.location.lng(),this.address=e.formatted_address,console.log(e)}))},methods:{closeEditProfile(){this.$emit("goBackFromEditProfile")},saveProfileData(){const e={latitude:this.lat,longitude:this.long,address:this.address};this.$emit("profile:data",e),this.$emit("saveProfileImg")}}},x=i(89);const L=(0,x.Z)(O,[["render",Z]]);var F=L,R=i(9398),V=i(5800),q=i(8579),K=i(1478),G=i(5118),H={name:"user-profile",props:{loggedInUser:Object,provider:Object,recipient:Array},components:{editProfile:F,fileError:G.Z,MDBContainer:A.L5,MDBTable:A.re,MDBBtn:A.$v,MDBRow:A.uZ,MDBCol:A.TK,MDBIcon:A.vm,MDBBtnClose:A.Ok},data(){return{userData:{},isPressedEditProfile:!1,isAddProfileImage:!1,isEditProfileImage:!1,isEditData:!1,pro:{},client:[],mail:"",address:"",osoite:null,lat:null,long:null,showImage:null,value:null,file:null,isProfileImageSelected:!1,isUploaded:!1,user_profile_image:[],avatar:null,image_id:null,fileSizeError:null,fileTypeError:null}},mounted(){const e=window.localStorage.getItem("loggedAppUser");e?(this.user=JSON.parse(e),this.getUserData()):this.$router.push("/")},methods:{async getUserData(){await this.getUserPro(),await this.getUserRecipient();let e="";this.pro?e=this.pro.address:this.client&&(e=this.client[0].address),this.pro.user.avatar?this.avatar=this.pro.user.avatar.name:this.client[0].user.avatar?this.avatar=this.client[0].user.avatar.name:this.avatar=null,this.userData={firstName:this.user.firstName,address:e}},async getUserPro(){const e=await R.Z.getProvider(this.user.id);e&&console.log("User avatar "+e.user.username),this.pro=e,this.userData={firstName:this.loggedInUser.firstName,address:this.pro.address}},async getUserRecipient(){const e=await V.Z.getOwnBookings(this.user.id);e.length>0&&(this.client=e,this.userData={firstName:this.user.firstName,address:e[0].address})},pressedEditProfile(){this.isPressedEditProfile=!0},handleSaveProfileData(){},async validateUploadErrors(e,t){this.file.size>1048576?(this.fileSizeError="Kuvan koko on oltava pienempi kun 10 MB!",setTimeout((()=>{this.fileSizeError=null}),3e3),this.showImage=null,this.isAddProfileImage=!1,this.isEditProfileImage=!1,"image/jpeg"===this.file.type&&"image/png"===this.file.type&&"image/jpg"===this.image.type&&"image/gif"===this.image.type||(this.fileTypeError="Pitäisi käyttää kuvan formaatti (jpeg, jpg, png, gif)!",setTimeout((()=>{this.fileTypeError=null}),3e3),this.showImage=null,this.isAddProfileImage=!1,this.isEditProfileImage=!1)):("add"===t?(this.$emit("updateAvatar",this.showImage),await q.Z.createProfileImage(this.user.id,e)):(this.$emit("updateAvatar",this.showImage),await q.Z.newAvatar(this.user.id,e)),this.isPressedEditProfile=!1)},async handleSaveProfile(e){if(console.log("Is new address?? "+e.latitude),null!==e.latitude&&(this.pro&&(await R.Z.editAddress(this.pro.id,e),this.userData.address=e.address),this.client.length>0))for(let i in this.client){const t=this.client[i].id;await V.Z.editBookingAddress(t,e)}const t=new FormData;null!==this.value&&(this.isAddProfileImage?(console.log("Saving image"),t.append("file",this.file,this.file.name),await this.validateUploadErrors(t,"add")):this.isEditProfileImage&&(console.log("Editing image here"),t.append("file",this.file,this.file.name),await this.validateUploadErrors(t,"edit")))},saveEditedName(){this.userData.firstName=this.name,this.isEditName=!1},handleCloseEditProfile(){this.isPressedEditProfile=!1,this.isAddProfileImage=!1,this.isEditProfileImage=!1},handleFileChange(e){try{const t=e.target.files[0];console.log("event target client ",e.target.files[0]),t&&(this.showImage=URL.createObjectURL(t),this.file=e.target.files[0],console.log("Image type: "+this.file.type),console.log("Image size: "+typeof this.file.size))}catch(t){console.log("Error:",t)}this.value=e.target.files[0],e.target.files[0]?this.isProfileImageSelected=!0:this.isProfileImageSelected=!1},addProfileImage(){this.isAddProfileImage=!0},editProfileImage(){this.isEditProfileImage=!0},async removeProfileImage(){this.avatar=null,this.showImage=null,this.$emit("removeAvatar"),await K.Z.removeAvatar(this.user.id),this.isEditProfileImage=!1,this.isPressedEditProfile=!1},async handleSaveProfileImage(){this.isPressedEditProfile=!1,this.isAddProfileImage=!1,this.isEditProfileImage=!1}}};const Y=(0,x.Z)(H,[["render",M],["__scopeId","data-v-a669234c"]]);var J=Y}}]);
//# sourceMappingURL=126.737a78fe.js.map