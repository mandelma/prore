"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[38],{5118:function(e,i,t){var l=t(3396);const a=({message:e})=>null===e?null:(0,l.Wm)("div",{className:"error"},[e,(0,l.Wm)("img",{className:"errorImg",alt:"error",src:t(5551)},null)]);i.Z=a},5038:function(e,i,t){t.r(i),t.d(i,{default:function(){return ne}});t(7658);var l=t(3396),a=t(9242),s=t(7139);const r=e=>((0,l.dD)("data-v-54e106bb"),e=e(),(0,l.Cn)(),e),o={key:0,class:"spinner-border",role:"status"},n=r((()=>(0,l._)("span",{class:"visually-hidden"},"Loading...",-1))),d=[n],u={key:1},g=["src"],m=r((()=>(0,l._)("div",null,null,-1))),f=r((()=>(0,l._)("i",{class:"fas fa-user"},null,-1))),h={key:2},p={key:3,for:"file-upload",class:"custom-file-upload"},c={key:0},w={key:1},v={key:4},P={style:{float:"right",padding:"10px",width:"100%"}},_={style:{color:"#bab5b5"}},k={key:0},y={style:{padding:"10px",color:"springgreen"}},D={key:0},I=r((()=>(0,l._)("h4",null,"Valitettavasti käyttö on päättynyt!",-1))),E={key:1},b=r((()=>(0,l._)("h4",null,"Käyttö",-1))),B={key:2},M={key:0,class:"spinner-border",role:"status"},C=r((()=>(0,l._)("span",{class:"visually-hidden"},"Loading...",-1))),U=[C],z={key:1},A=r((()=>(0,l._)("h4",null,"Käyttö: ",-1))),T={key:1},S=r((()=>(0,l._)("td",null," Etunimi: ",-1))),x=r((()=>(0,l._)("td",null," Sukunimi: ",-1))),N=r((()=>(0,l._)("td",null," Käyttäjätunnus: ",-1))),W=r((()=>(0,l._)("td",null," Osoite: ",-1))),j=r((()=>(0,l._)("td",null," Sähköposti ",-1))),Z={colspan:"2"};function O(e,i,r,n,C,O){const $=(0,l.up)("file-error"),F=(0,l.up)("MDBCol"),L=(0,l.up)("MDBIcon"),R=(0,l.up)("MDBBtnClose"),V=(0,l.up)("MDBBtn"),q=(0,l.up)("MDBRow"),K=(0,l.up)("MDBTable"),G=(0,l.up)("edit-profile"),H=(0,l.up)("MDBContainer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(H,{style:{"margin-top":"70px"}},{default:(0,l.w5)((()=>[C.userData?((0,l.wg)(),(0,l.iD)("div",u,[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[(0,l.Wm)($,{message:C.fileSizeError},null,8,["message"]),(0,l.Wm)($,{message:C.fileTypeError},null,8,["message"]),(0,l.Wm)($,{message:C.emailErrorMessage},null,8,["message"]),(0,l.Wm)(F,{lg:"4"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{lg:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[C.avatar?((0,l.wg)(),(0,l.j4)(F,{key:0},{default:(0,l.w5)((()=>[(0,l._)("img",{src:C.showImage?C.showImage:t(2519)(`./${C.avatar}`),alt:"profile_img_blob",style:{width:"100px",height:"100px",border:"1px solid darkgrey","border-radius":"50px","margin-bottom":"20px"}},null,8,g)])),_:1})):((0,l.wg)(),(0,l.j4)(F,{key:1,style:{border:"solid red"}},{default:(0,l.w5)((()=>[m,(0,l.Wm)(L,{size:"5x",style:{padding:"20px 0",width:"100px"}},{default:(0,l.w5)((()=>[f])),_:1})])),_:1})),(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[C.isEditProfileImage||C.isAddProfileImage?((0,l.wg)(),(0,l.j4)(R,{key:0,white:"",style:{float:"right"},onClick:i[0]||(i[0]=e=>C.isAddProfileImage=C.isEditProfileImage=!1)})):(0,l.kq)("",!0),C.isPressedEditProfile&&!C.isAddProfileImage&&"avatar.png"===C.avatar?((0,l.wg)(),(0,l.iD)("h4",{key:1,class:"profile_image",onClick:i[1]||(i[1]=(...e)=>O.addProfileImage&&O.addProfileImage(...e))}," Lisää profiili kuva ")):C.isPressedEditProfile&&!C.isEditProfileImage&&"avatar.png"!==C.avatar?((0,l.wg)(),(0,l.iD)("div",h,[(0,l._)("h4",{class:"profile_image",onClick:i[2]||(i[2]=(...e)=>O.editProfileImage&&O.editProfileImage(...e))}," Muokkaa profiili kuva "),(0,l._)("form",{onSubmit:i[3]||(i[3]=(0,a.iM)(((...e)=>O.removeProfileImage&&O.removeProfileImage(...e)),["prevent"]))},[(0,l.Wm)(V,{block:"",color:"danger",type:"submit"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Poista profiilin kuva ")])),_:1})],32)])):(0,l.kq)("",!0),C.isEditProfileImage||C.isAddProfileImage?((0,l.wg)(),(0,l.iD)("label",p,[C.value?((0,l.wg)(),(0,l.iD)("span",c," Muokkaa kuva: "+(0,s.zw)(C.value.name),1)):((0,l.wg)(),(0,l.iD)("span",w,"Valitse uusi kuva tehtävästä"))])):(0,l.kq)("",!0),(0,l._)("input",{id:"file-upload",type:"file",onChange:i[4]||(i[4]=(...e)=>O.handleFileChange&&O.handleFileChange(...e))},null,32),C.isPressedEditProfile?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("div",P,[(0,l._)("div",_,[C.pro?((0,l.wg)(),(0,l.iD)("div",k,[(0,l._)("h4",null,"TMI "+(0,s.zw)(C.pro.yritys),1),(0,l._)("div",y,[((C.pro.proTime-(new Date).getTime())/864e5).toFixed()<=0?((0,l.wg)(),(0,l.iD)("div",D,[I,(0,l._)("p",{style:{color:"orangered",float:"right",cursor:"pointer"},onClick:i[5]||(i[5]=i=>e.$router.push("/pay-plan"))},"Lattaa lisää aikaa!")])):((C.pro.proTime-(new Date).getTime())/864e5).toFixed()<=3&&((C.pro.proTime-(new Date).getTime())/864e5).toFixed()>0?((0,l.wg)(),(0,l.iD)("div",E,[b,(0,l._)("h4",null,(0,s.zw)(((C.pro.proTime-(new Date).getTime())/864e5).toFixed())+" päivää",1),(0,l._)("p",{style:{color:"orangered",float:"right",cursor:"pointer"},onClick:i[6]||(i[6]=i=>e.$router.push("/pay-plan"))},"Lattaa lisää aikaa!")])):((0,l.wg)(),(0,l.iD)("div",B,["NaN"===((C.pro.proTime-(new Date).getTime())/864e5).toFixed()?((0,l.wg)(),(0,l.iD)("div",M,U)):((0,l.wg)(),(0,l.iD)("div",z,[A,(0,l._)("h4",null,(0,s.zw)(((C.pro.proTime-(new Date).getTime())/864e5).toFixed())+" päivää",1)]))]))])])):(0,l.kq)("",!0),C.client?((0,l.wg)(),(0,l.iD)("h3",T,"Sinulla on varauksia ("+(0,s.zw)(C.client.length)+")",1)):(0,l.kq)("",!0)])])]))])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(F,{lg:"8"},{default:(0,l.w5)((()=>[C.isPressedEditProfile?((0,l.wg)(),(0,l.j4)(R,{key:1,white:"",style:{float:"right"},onClick:i[8]||(i[8]=e=>C.isPressedEditProfile=!1)})):((0,l.wg)(),(0,l.j4)(R,{key:0,white:"",style:{float:"right"},onClick:i[7]||(i[7]=i=>e.$router.go(-1))})),C.isPressedEditProfile?((0,l.wg)(),(0,l.j4)(G,{key:3,loggedInUser:r.loggedInUser,userData:C.userData,onGoBackFromEditProfile:O.handleCloseEditProfile,"onProfile:data":O.handleSaveProfile,onSaveProfileImg:O.handleSaveProfileImage},null,8,["loggedInUser","userData","onGoBackFromEditProfile","onProfile:data","onSaveProfileImg"])):((0,l.wg)(),(0,l.j4)(K,{key:2,borderless:"",style:{"font-size":"14px","text-align":"left"}},{default:(0,l.w5)((()=>[(0,l._)("tbody",null,[(0,l._)("tr",null,[S,(0,l._)("td",null,(0,s.zw)(C.userData.firstName),1)]),(0,l._)("tr",null,[x,(0,l._)("td",null,(0,s.zw)(r.loggedInUser.lastName),1)]),(0,l._)("tr",null,[N,(0,l._)("td",null,(0,s.zw)(r.loggedInUser.username),1)]),(0,l._)("tr",null,[W,(0,l._)("td",null,(0,s.zw)(C.userData.address),1)]),(0,l._)("tr",null,[j,(0,l._)("td",null,(0,s.zw)(C.userData.email),1)]),(0,l._)("tr",null,[(0,l._)("td",Z,[(0,l.Wm)(V,{block:"",size:"lg",outline:"success",onClick:O.pressedEditProfile},{default:(0,l.w5)((()=>[(0,l.Uk)("Muokkaa tiotosi")])),_:1},8,["onClick"])])])])])),_:1}))])),_:1})])),_:1})])):((0,l.wg)(),(0,l.iD)("div",o,d))])),_:1}),(0,l._)("div",null,[(0,l.Wm)(H)])],64)}t(2062);var $=t(4313);const F=(0,l._)("td",null," Etunimi: ",-1),L=(0,l._)("td",null," Sukunimi: ",-1),R=(0,l._)("td",null," Käyttäjätunnus: ",-1),V=(0,l._)("td",null," Osoite ",-1),q={style:{color:"cornflowerblue"}},K=(0,l._)("td",null," Sähköposti ",-1),G={style:{color:"cornflowerblue"}},H={colspan:"2"};function Y(e,i,t,a,r,o){const n=(0,l.up)("MDBBtnClose"),d=(0,l.up)("MDBInput"),u=(0,l.up)("MDBBtn"),g=(0,l.up)("MDBTable"),m=(0,l.up)("MDBContainer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(n,{style:{float:"right",cursor:"pointer"},onClick:o.closeEditProfile},null,8,["onClick"]),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,{borderless:"",style:{"font-size":"14px","text-align":"left"}},{default:(0,l.w5)((()=>[(0,l._)("tbody",null,[(0,l._)("tr",null,[F,(0,l._)("td",null,(0,s.zw)(t.loggedInUser.firstName),1)]),(0,l._)("tr",null,[L,(0,l._)("td",null,(0,s.zw)(t.loggedInUser.lastName),1)]),(0,l._)("tr",null,[R,(0,l._)("td",null,(0,s.zw)(t.loggedInUser.username),1)]),(0,l._)("tr",null,[V,(0,l._)("td",null,[(0,l._)("p",q,(0,s.zw)(t.userData.address),1),(0,l.Wm)(d,{white:"",size:"lg",id:"address",label:t.userData.address?"Anna uusi osoitteesi":"Anna Osoitteesi",modelValue:r.newAddress,"onUpdate:modelValue":i[0]||(i[0]=e=>r.newAddress=e)},null,8,["label","modelValue"])])]),(0,l._)("tr",null,[K,(0,l._)("td",null,[(0,l._)("p",G,(0,s.zw)(t.userData.email),1),(0,l.Wm)(d,{white:"",size:"lg",label:""!==t.userData.email?"Anna uusi sähköpostisi":"Anna Sähköpostisi",modelValue:r.email,"onUpdate:modelValue":i[1]||(i[1]=e=>r.email=e)},null,8,["label","modelValue"])])]),(0,l._)("tr",null,[(0,l._)("td",H,[(0,l.Wm)(u,{block:"",size:"lg",color:"success",onClick:o.saveProfileData},{default:(0,l.w5)((()=>[(0,l.Uk)("Tallenna tiedot")])),_:1},8,["onClick"])])])])])),_:1})])),_:1}),(0,l.Uk)(" userdata "+(0,s.zw)(t.userData),1)],64)}var J={name:"EditProfile",props:{loggedInUser:Object,userData:Object},components:{MDBContainer:$.L5,MDBInput:$.u2,MDBBtnClose:$.Ok,MDBBtn:$.$v,MDBTable:$.re},data(){return{lat:null,long:null,address:null,email:"",newAddress:""}},mounted(){const e={lat:50.064192,lng:-130.605469},i={north:e.lat+.1,south:e.lat-.1,east:e.lng+.1,west:e.lng-.1},t=document.getElementById("address"),l={bounds:i,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},a=new google.maps.places.Autocomplete(t,l);a.addListener("place_changed",(()=>{let e=a.getPlace();this.lat=e.geometry.location.lat(),this.long=e.geometry.location.lng(),this.address=e.formatted_address,console.log(e)}))},methods:{closeEditProfile(){this.$emit("goBackFromEditProfile")},saveProfileData(){const e={latitude:this.lat,longitude:this.long,address:this.address},i=this.email;this.$emit("profile:data",e,i),this.$emit("saveProfileImg")}}},Q=t(89);const X=(0,Q.Z)(J,[["render",Y]]);var ee=X,ie=t(9398),te=t(5800),le=t(8579),ae=t(1478),se=t(5118),re=(t(4058),{name:"user-profile",props:{loggedInUser:Object,provider:Object,recipient:Array},components:{editProfile:ee,fileError:se.Z,MDBContainer:$.L5,MDBTable:$.re,MDBBtn:$.$v,MDBRow:$.uZ,MDBCol:$.TK,MDBIcon:$.vm,MDBBtnClose:$.Ok},data(){return{user:null,userData:null,isPressedEditProfile:!1,isAddProfileImage:!1,isEditProfileImage:!1,isEditData:!1,pro:null,client:[],mail:"",address:"",osoite:null,lat:null,long:null,showImage:null,value:null,file:null,isProfileImageSelected:!1,isUploaded:!1,user_profile_image:[],avatar:"avatar.png",image_id:null,fileSizeError:null,fileTypeError:null,emailErrorMessage:null}},mounted(){this.getUserData()},methods:{async getUserData(){const e=window.localStorage.getItem("loggedAppUser");if(e){this.user=JSON.parse(e);const i=await ie.Z.getProvider(this.user.id),t=await te.Z.getOwnBookings(this.user.id);i&&t.length>0||i?(this.avatar=i.user.avatar.name,this.pro=i,this.userData={firstName:this.user.firstName,address:i.address,email:i.user.email}):t.length>0?(t[0].user.avatar&&(this.avatar=t[0].user.avatar.name),this.client=t,this.userData={firstName:this.user.firstName,address:t[0].address,email:t[0].user.email}):this.userData={firstName:this.user.firstName,address:"",email:this.user.email}}else this.$router.push("/")},async getUserPro(){const e=await ie.Z.getProvider(this.user.id);e&&(console.log("User pro username "+e.user.username),this.pro=e,this.userData={firstName:this.loggedInUser.firstName,address:this.pro.address})},async getUserRecipient(){const e=await te.Z.getOwnBookings(this.user.id);e&&e.length>0&&(this.client=e,this.userData={firstName:this.user.firstName,address:e[0].address})},pressedEditProfile(){this.isPressedEditProfile=!0},handleSaveProfileData(){},async validateUploadErrors(e,i){this.file.size>1048576?(this.fileSizeError="Kuvan koko on oltava pienempi kun 10 MB!",setTimeout((()=>{this.fileSizeError=null}),3e3),this.showImage=null,this.isAddProfileImage=!1,this.isEditProfileImage=!1,"image/jpeg"===this.file.type&&"image/png"===this.file.type&&"image/jpg"===this.image.type&&"image/gif"===this.image.type||(this.fileTypeError="Pitäisi käyttää kuvan formaatti (jpeg, jpg, png, gif)!",setTimeout((()=>{this.fileTypeError=null}),3e3),this.showImage=null,this.isAddProfileImage=!1,this.isEditProfileImage=!1)):("add"===i?(this.$emit("updateAvatar",this.showImage),await le.Z.createProfileImage(this.user.id,e)):(this.$emit("updateAvatar",this.showImage),await le.Z.newAvatar(this.user.id,e)),this.isPressedEditProfile=!1)},async handleSaveProfile(e,i){if(console.log("Is new address?? "+e.latitude),""!==i){const e=await ae.Z.editEmail(this.user.id,{email:i});"email existing"!==e.error?this.userData.email=i:(this.emailErrorMessage="Antamasi sähköpostiosoite on jo olemassa!",setTimeout((()=>{this.emailErrorMessage=null}),2e3))}if(null!==e.latitude&&(this.pro&&(await ie.Z.editAddress(this.pro.id,e),this.userData.address=e.address),this.client.length>0))for(let l in this.client){const i=this.client[l].id;await te.Z.editBookingAddress(i,e),this.userData.address=e.address}const t=new FormData;null!==this.value&&(this.isAddProfileImage?(console.log("Saving image"),t.append("file",this.file,this.file.name),await this.validateUploadErrors(t,"add")):this.isEditProfileImage&&(console.log("Editing image here"),t.append("file",this.file,this.file.name),await this.validateUploadErrors(t,"edit"),this.$router.go(-1)))},saveEditedName(){this.userData.firstName=this.name,this.isEditName=!1},handleCloseEditProfile(){this.isPressedEditProfile=!1,this.isAddProfileImage=!1,this.isEditProfileImage=!1},handleFileChange(e){try{const i=e.target.files[0];console.log("event target client ",e.target.files[0]),i&&(this.showImage=URL.createObjectURL(i),this.avatar=URL.createObjectURL(i),this.file=e.target.files[0],console.log("Image type: "+this.file.type),console.log("Image size: "+typeof this.file.size))}catch(i){console.log("Error:",i)}this.value=e.target.files[0],e.target.files[0]?this.isProfileImageSelected=!0:this.isProfileImageSelected=!1},addProfileImage(){this.isAddProfileImage=!0},editProfileImage(){this.isEditProfileImage=!0},async removeProfileImage(){this.avatar="avatar.png",this.showImage=null,this.$emit("removeAvatar"),await ae.Z.removeAvatar(this.user.id),this.isEditProfileImage=!1,this.isPressedEditProfile=!1},async handleSaveProfileImage(){this.isPressedEditProfile=!1,this.isAddProfileImage=!1,this.isEditProfileImage=!1}}});const oe=(0,Q.Z)(re,[["render",O],["__scopeId","data-v-54e106bb"]]);var ne=oe},5551:function(e,i,t){e.exports=t.p+"img/error.9510853e.png"}}]);
//# sourceMappingURL=38.f6f9cfcd.js.map