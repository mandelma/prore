"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[388],{5118:function(e,t,i){var a=i(3396);const l=({message:e})=>null===e?null:(0,a.Wm)("div",{className:"error"},[e]);t.Z=l},8579:function(e,t,i){const a=i(7218),l="/api/upload",s=async()=>{const e=await a.get(l);return e.data},r=async e=>{const t=await a.post(l,e,{});return t.data},o=async(e,t)=>{const i=await a.post(`${l}/${e}/avatar`,t);return i.data},n=async(e,t)=>{const i=await a.post(`${l}/${e}/update_avatar`,t);return i.data},d=async(e,t)=>{const i=await a.put(`${l}/${e}`,t);return i.data},u=async(e,t)=>{await a.delete(`${l}/${e}/${t}`)};t.Z={getAll:s,create:r,createProfileImage:o,newAvatar:n,updateImage:d,remove:u}},6388:function(e,t,i){i.r(t),i.d(t,{default:function(){return X}});var a=i(3396),l=i(9242),s=i(7139);const r=e=>((0,a.dD)("data-v-a05595e8"),e=e(),(0,a.Cn)(),e),o={key:0,class:"spinner-border",role:"status"},n=r((()=>(0,a._)("span",{class:"visually-hidden"},"Loading...",-1))),d=[n],u={key:1},g=["src"],m=r((()=>(0,a._)("div",null,null,-1))),f=r((()=>(0,a._)("i",{class:"fas fa-user"},null,-1))),h={key:2},c={key:3,for:"file-upload",class:"custom-file-upload"},p={key:0},w={key:1},v={key:4},P={style:{float:"right",padding:"10px",width:"100%"}},_={key:0,class:"spinner-border",role:"status"},k=r((()=>(0,a._)("span",{class:"visually-hidden"},"Loading...",-1))),I=[k],y={key:1},D={key:0},E={key:1},B=r((()=>(0,a._)("td",null," Etunimi: ",-1))),b=r((()=>(0,a._)("td",null," Sukunimi: ",-1))),C=r((()=>(0,a._)("td",null," Käyttäjätunnus: ",-1))),U=r((()=>(0,a._)("td",null," Osoite: ",-1))),M=r((()=>(0,a._)("tr",null,[(0,a._)("td",null," Sähköposti "),(0,a._)("td",null," test.test@test.ee ")],-1))),A={colspan:"2"};function z(e,t,r,n,k,z){const S=(0,a.up)("file-error"),W=(0,a.up)("MDBCol"),$=(0,a.up)("MDBIcon"),j=(0,a.up)("MDBBtnClose"),N=(0,a.up)("MDBBtn"),Z=(0,a.up)("MDBRow"),x=(0,a.up)("MDBTable"),O=(0,a.up)("edit-profile"),T=(0,a.up)("MDBContainer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(T,{style:{"margin-top":"50px"}},{default:(0,a.w5)((()=>[k.pro||0!==k.client.length?((0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,{message:k.fileSizeError},null,8,["message"]),(0,a.Wm)(S,{message:k.fileTypeError},null,8,["message"]),(0,a.Wm)(W,{lg:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{lg:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[k.avatar?((0,a.wg)(),(0,a.j4)(W,{key:0},{default:(0,a.w5)((()=>[(0,a._)("img",{src:k.showImage?k.showImage:i(2519)(`./${k.avatar}`),alt:"profile_img_blob",style:{width:"100px",height:"100px",border:"1px solid darkgrey","border-radius":"50px","margin-bottom":"20px"}},null,8,g)])),_:1})):((0,a.wg)(),(0,a.j4)(W,{key:1,style:{border:"solid red"}},{default:(0,a.w5)((()=>[m,(0,a.Wm)($,{size:"5x",style:{padding:"20px 0",width:"100px"}},{default:(0,a.w5)((()=>[f])),_:1})])),_:1})),(0,a.Wm)(W,null,{default:(0,a.w5)((()=>[k.isEditProfileImage||k.isAddProfileImage?((0,a.wg)(),(0,a.j4)(j,{key:0,style:{float:"right"},onClick:t[0]||(t[0]=e=>k.isAddProfileImage=k.isEditProfileImage=!1)})):(0,a.kq)("",!0),k.isPressedEditProfile&&!k.isAddProfileImage&&"avatar.png"===k.avatar?((0,a.wg)(),(0,a.iD)("h4",{key:1,class:"profile_image",onClick:t[1]||(t[1]=(...e)=>z.addProfileImage&&z.addProfileImage(...e))}," Lisää profiili kuva ")):k.isPressedEditProfile&&!k.isEditProfileImage&&"avatar.png"!==k.avatar?((0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("h4",{class:"profile_image",onClick:t[2]||(t[2]=(...e)=>z.editProfileImage&&z.editProfileImage(...e))}," Muokkaa profiili kuva "),(0,a._)("form",{onSubmit:t[3]||(t[3]=(0,l.iM)(((...e)=>z.removeProfileImage&&z.removeProfileImage(...e)),["prevent"]))},[(0,a.Wm)(N,{block:"",color:"danger",type:"submit"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Poista profiilin kuva ")])),_:1})],32)])):(0,a.kq)("",!0),k.isEditProfileImage||k.isAddProfileImage?((0,a.wg)(),(0,a.iD)("label",c,[k.value?((0,a.wg)(),(0,a.iD)("span",p," Muokkaa kuva: "+(0,s.zw)(k.value.name),1)):((0,a.wg)(),(0,a.iD)("span",w,"Valitse uusi kuva tehtävästä"))])):(0,a.kq)("",!0),(0,a._)("input",{id:"file-upload",type:"file",onChange:t[4]||(t[4]=(...e)=>z.handleFileChange&&z.handleFileChange(...e))},null,32),k.isPressedEditProfile?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("div",P,[k.pro||0!==k.client.length?((0,a.wg)(),(0,a.iD)("div",y,[k.pro?((0,a.wg)(),(0,a.iD)("h3",D,"TMI "+(0,s.zw)(k.pro.yritys),1)):(0,a.kq)("",!0),k.client?((0,a.wg)(),(0,a.iD)("h3",E,"Sinulla on varauksia ("+(0,s.zw)(k.client.length)+")",1)):(0,a.kq)("",!0)])):((0,a.wg)(),(0,a.iD)("div",_,I))])]))])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(W,{lg:"8"},{default:(0,a.w5)((()=>[k.isPressedEditProfile?((0,a.wg)(),(0,a.j4)(O,{key:1,loggedInUser:r.loggedInUser,userData:k.userData,onGoBackFromEditProfile:z.handleCloseEditProfile,"onProfile:data":z.handleSaveProfile,onSaveProfileImg:z.handleSaveProfileImage},null,8,["loggedInUser","userData","onGoBackFromEditProfile","onProfile:data","onSaveProfileImg"])):((0,a.wg)(),(0,a.j4)(x,{key:0,borderless:"",style:{"font-size":"14px","text-align":"left"}},{default:(0,a.w5)((()=>[(0,a._)("tbody",null,[(0,a._)("tr",null,[B,(0,a._)("td",null,(0,s.zw)(k.userData.firstName),1)]),(0,a._)("tr",null,[b,(0,a._)("td",null,(0,s.zw)(r.loggedInUser.lastName),1)]),(0,a._)("tr",null,[C,(0,a._)("td",null,(0,s.zw)(r.loggedInUser.username),1)]),(0,a._)("tr",null,[U,(0,a._)("td",null,(0,s.zw)(k.userData.address),1)]),M,(0,a._)("tr",null,[(0,a._)("td",A,[(0,a.Wm)(N,{block:"",size:"lg",color:"success",onClick:z.pressedEditProfile},{default:(0,a.w5)((()=>[(0,a.Uk)("Muokkaa tiotosi")])),_:1},8,["onClick"])])])])])),_:1}))])),_:1})])),_:1})])):((0,a.wg)(),(0,a.iD)("div",o,d))])),_:1}),(0,a._)("div",null,[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)(N,{outline:"danger",block:"",size:"lg",onClick:t[5]||(t[5]=t=>e.$router.go(-1))},{default:(0,a.w5)((()=>[(0,a.Uk)("Poistu sivulta")])),_:1})])),_:1})])],64)}i(7658),i(2062);var S=i(4313);const W=(0,a._)("td",null," Etunimi: ",-1),$=(0,a._)("td",null," Sukunimi: ",-1),j=(0,a._)("td",null," Käyttäjätunnus: ",-1),N=(0,a._)("td",null," Osoite ",-1),Z={style:{color:"blue"}},x=(0,a._)("td",null," Sähköposti ",-1),O={colspan:"2"};function T(e,t,i,l,r,o){const n=(0,a.up)("MDBBtnClose"),d=(0,a.up)("MDBInput"),u=(0,a.up)("MDBBtn"),g=(0,a.up)("MDBTable"),m=(0,a.up)("MDBContainer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(n,{style:{float:"right",cursor:"pointer"},onClick:o.closeEditProfile},null,8,["onClick"]),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g,{borderless:"",style:{"font-size":"14px","text-align":"left"}},{default:(0,a.w5)((()=>[(0,a._)("tbody",null,[(0,a._)("tr",null,[W,(0,a._)("td",null,(0,s.zw)(i.loggedInUser.firstName),1)]),(0,a._)("tr",null,[$,(0,a._)("td",null,(0,s.zw)(i.loggedInUser.lastName),1)]),(0,a._)("tr",null,[j,(0,a._)("td",null,(0,s.zw)(i.loggedInUser.username),1)]),(0,a._)("tr",null,[N,(0,a._)("td",null,[(0,a._)("p",Z,(0,s.zw)(i.userData.address),1),(0,a.Wm)(d,{id:"address",label:"Anna uusi osoitteesi",modelValue:r.newAddress,"onUpdate:modelValue":t[0]||(t[0]=e=>r.newAddress=e)},null,8,["modelValue"])])]),(0,a._)("tr",null,[x,(0,a._)("td",null,[(0,a.Wm)(d,{label:"mail",modelValue:r.mail,"onUpdate:modelValue":t[1]||(t[1]=e=>r.mail=e)},null,8,["modelValue"])])]),(0,a._)("tr",null,[(0,a._)("td",O,[(0,a.Wm)(u,{block:"",size:"lg",color:"success",onClick:o.saveProfileData},{default:(0,a.w5)((()=>[(0,a.Uk)("Tallenna tiedot")])),_:1},8,["onClick"])])])])])),_:1})])),_:1})],64)}var L={name:"EditProfile",props:{loggedInUser:Object,userData:Object},components:{MDBContainer:S.L5,MDBInput:S.u2,MDBBtnClose:S.Ok,MDBBtn:S.$v,MDBTable:S.re},data(){return{lat:null,long:null,address:null,mail:"",newAddress:""}},mounted(){const e={lat:50.064192,lng:-130.605469},t={north:e.lat+.1,south:e.lat-.1,east:e.lng+.1,west:e.lng-.1},i=document.getElementById("address"),a={bounds:t,componentRestrictions:{country:"fi"},fields:["address_components","geometry","icon","name","formatted_address"],strictBounds:!1},l=new google.maps.places.Autocomplete(i,a);l.addListener("place_changed",(()=>{let e=l.getPlace();this.lat=e.geometry.location.lat(),this.long=e.geometry.location.lng(),this.address=e.formatted_address,console.log(e)}))},methods:{closeEditProfile(){this.$emit("goBackFromEditProfile")},saveProfileData(){const e={latitude:this.lat,longitude:this.long,address:this.address};this.$emit("profile:data",e),this.$emit("saveProfileImg")}}},R=i(89);const F=(0,R.Z)(L,[["render",T]]);var V=F,q=i(9398),K=i(5800),G=i(8579),H=i(1478),Y=i(5118),J=(i(4058),{name:"user-profile",props:{loggedInUser:Object,provider:Object,recipient:Array},components:{editProfile:V,fileError:Y.Z,MDBContainer:S.L5,MDBTable:S.re,MDBBtn:S.$v,MDBRow:S.uZ,MDBCol:S.TK,MDBIcon:S.vm,MDBBtnClose:S.Ok},data(){return{userData:{},isPressedEditProfile:!1,isAddProfileImage:!1,isEditProfileImage:!1,isEditData:!1,pro:null,client:[],mail:"",address:"",osoite:null,lat:null,long:null,showImage:null,value:null,file:null,isProfileImageSelected:!1,isUploaded:!1,user_profile_image:[],avatar:null,image_id:null,fileSizeError:null,fileTypeError:null}},mounted(){this.getUserData()},methods:{async getUserData(){const e=window.localStorage.getItem("loggedAppUser");if(e){this.user=JSON.parse(e);const t=await q.Z.getProvider(this.user.id),i=await K.Z.getOwnBookings(this.user.id);t?(this.avatar=t.user.avatar.name,this.pro=t,this.userData={firstName:this.user.firstName,address:t.address}):i.length>0&&(this.avatar=i[0].user.avatar.name,this.client=i,console.log("Client avatar: "+i[0].user.avatar.name),console.log("Cliiiiient"),this.userData={firstName:this.user.firstName,address:i[0].address})}else this.$router.push("/")},async getUserPro(){const e=await q.Z.getProvider(this.user.id);e&&(console.log("User pro username "+e.user.username),this.pro=e,this.userData={firstName:this.loggedInUser.firstName,address:this.pro.address})},async getUserRecipient(){const e=await K.Z.getOwnBookings(this.user.id);e&&e.length>0&&(this.client=e,this.userData={firstName:this.user.firstName,address:e[0].address})},pressedEditProfile(){this.isPressedEditProfile=!0},handleSaveProfileData(){},async validateUploadErrors(e,t){this.file.size>1048576?(this.fileSizeError="Kuvan koko on oltava pienempi kun 10 MB!",setTimeout((()=>{this.fileSizeError=null}),3e3),this.showImage=null,this.isAddProfileImage=!1,this.isEditProfileImage=!1,"image/jpeg"===this.file.type&&"image/png"===this.file.type&&"image/jpg"===this.image.type&&"image/gif"===this.image.type||(this.fileTypeError="Pitäisi käyttää kuvan formaatti (jpeg, jpg, png, gif)!",setTimeout((()=>{this.fileTypeError=null}),3e3),this.showImage=null,this.isAddProfileImage=!1,this.isEditProfileImage=!1)):("add"===t?(this.$emit("updateAvatar",this.showImage),await G.Z.createProfileImage(this.user.id,e)):(this.$emit("updateAvatar",this.showImage),await G.Z.newAvatar(this.user.id,e)),this.isPressedEditProfile=!1)},async handleSaveProfile(e){if(console.log("Is new address?? "+e.latitude),null!==e.latitude&&(this.pro&&(await q.Z.editAddress(this.pro.id,e),this.userData.address=e.address),this.client.length>0))for(let i in this.client){const t=this.client[i].id;await K.Z.editBookingAddress(t,e),this.userData.address=e.address}const t=new FormData;null!==this.value&&(this.isAddProfileImage?(console.log("Saving image"),t.append("file",this.file,this.file.name),await this.validateUploadErrors(t,"add")):this.isEditProfileImage&&(console.log("Editing image here"),t.append("file",this.file,this.file.name),await this.validateUploadErrors(t,"edit"),this.$router.go(-1)))},saveEditedName(){this.userData.firstName=this.name,this.isEditName=!1},handleCloseEditProfile(){this.isPressedEditProfile=!1,this.isAddProfileImage=!1,this.isEditProfileImage=!1},handleFileChange(e){try{const t=e.target.files[0];console.log("event target client ",e.target.files[0]),t&&(this.showImage=URL.createObjectURL(t),this.avatar=URL.createObjectURL(t),this.file=e.target.files[0],console.log("Image type: "+this.file.type),console.log("Image size: "+typeof this.file.size))}catch(t){console.log("Error:",t)}this.value=e.target.files[0],e.target.files[0]?this.isProfileImageSelected=!0:this.isProfileImageSelected=!1},addProfileImage(){this.isAddProfileImage=!0},editProfileImage(){this.isEditProfileImage=!0},async removeProfileImage(){this.avatar="avatar.png",this.showImage=null,this.$emit("removeAvatar"),await H.Z.removeAvatar(this.user.id),this.isEditProfileImage=!1,this.isPressedEditProfile=!1},async handleSaveProfileImage(){this.isPressedEditProfile=!1,this.isAddProfileImage=!1,this.isEditProfileImage=!1}}});const Q=(0,R.Z)(J,[["render",z],["__scopeId","data-v-a05595e8"]]);var X=Q}}]);
//# sourceMappingURL=388.250990bc.js.map