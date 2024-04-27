<template>

  <MDBContainer style="margin-top: 70px;">
    <div v-if="!pro && client.length === 0" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else>
      <MDBRow>
        <file-error
            :message = fileSizeError
        />
        <file-error
            :message = fileTypeError
        />
        <file-error
          :message = emailErrorMessage
        />
        <MDBCol lg="4">

          <MDBCol lg="6">

            <MDBRow>

              <MDBCol v-if="avatar">

                <img

                    :src="showImage ? showImage : require(`/server/uploads/avatar/${avatar}`)"
                    alt="profile_img_blob"
                    style="width: 100px; height: 100px; border: 1px solid darkgrey; border-radius: 50px; margin-bottom: 20px;"
                />
              </MDBCol>

              <MDBCol v-else  style="border: solid red;">
                <div>

                </div>


                <MDBIcon  size="5x" style="padding: 20px 0; width: 100px;" >
                  <i class="fas fa-user"></i>
                </MDBIcon>

              </MDBCol>


              <MDBCol   >
                <MDBBtnClose
                    white
                    v-if="isEditProfileImage || isAddProfileImage"
                    style="float: right;"
                    @click="isAddProfileImage = isEditProfileImage = false"
                />
                <h4
                    class="profile_image"
                    v-if="isPressedEditProfile && !isAddProfileImage && (avatar === 'avatar.png')"
                    @click="addProfileImage"
                >
                  Lisää profiili kuva
                </h4>
                <div v-else-if="isPressedEditProfile && !isEditProfileImage && avatar !== 'avatar.png'">
                  <h4
                      class="profile_image"

                      @click="editProfileImage"
                  >
                    Muokkaa profiili kuva
                  </h4>
                  <form @submit.prevent="removeProfileImage">
                    <MDBBtn

                        block
                        color = "danger"
                        type="submit"
                    >
                      Poista profiilin kuva
                    </MDBBtn>
                  </form>

                </div>


                <label v-if="isEditProfileImage || isAddProfileImage" for="file-upload" class="custom-file-upload">
                    <span v-if="value">
                    Muokkaa kuva: {{value.name}}

                     </span>
                  <span v-else>Valitse uusi kuva tehtävästä</span>
                </label>

                <input  id="file-upload" type="file" @change="handleFileChange"/>


                <div v-if="!isPressedEditProfile">
                  <div style="float: right; padding: 10px; width: 100%;">


                    <div v-if="!pro && client.length === 0" class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>

                    <div v-else style="color: #4d4d4d;">
                      <h3 v-if="pro">TMI {{ pro.yritys }}</h3>
                      <h3 v-if="client">Sinulla on varauksia ({{client.length}})</h3>
                    </div>

                  </div>
                </div>

              </MDBCol>
            </MDBRow>

          </MDBCol>

        </MDBCol>
        <MDBCol lg="8">
          <MDBBtnClose
              white
              style="float: right;"
              @click="$router.go(-1)"
          />
          <MDBTable v-if="!isPressedEditProfile" borderless style="font-size: 14px; text-align: left;">
            <tbody>
            <tr>
              <td>
                Etunimi:
              </td>
              <td>
                {{userData.firstName}}
              </td>
            </tr>
            <tr>
              <td>
                Sukunimi:
              </td>
              <td>
                {{loggedInUser.lastName}}
              </td>
            </tr>
            <tr>
              <td>
                Käyttäjätunnus:
              </td>
              <td>
                {{loggedInUser.username}}
              </td>
            </tr>
            <tr>
              <td>
                Osoite:
              </td>
              <td>
                {{userData.address}}
              </td>
            </tr>
            <tr>
              <td>
                Sähköposti
              </td>
              <td>
                <!--              <div style="word-wrap: break-word;">this_is_a_long_email@some_domain.net</div>-->
                {{userData.email}}
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <MDBBtn block size="lg" outline="success" @click="pressedEditProfile">Muokkaa tiotosi</MDBBtn>
              </td>
            </tr>
            </tbody>
          </MDBTable>

          <edit-profile
              v-else
              :loggedInUser = loggedInUser
              :userData=" userData"
              @goBackFromEditProfile = handleCloseEditProfile
              @profile:data = handleSaveProfile
              @saveProfileImg = handleSaveProfileImage
          />


        </MDBCol>
      </MDBRow>
    </div>

  </MDBContainer>
  <div>
    <MDBContainer>

<!--      <MDBBtn outline="danger" block size="lg" @click="$router.go(-1)">Poistu sivulta</MDBBtn>-->
    </MDBContainer>
  </div>

</template>

<script>
/* eslint-disable */
import {
  MDBContainer,
  MDBTable,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtnClose
  //MDBInput
}from "mdb-vue-ui-kit";
import editProfile from "../components/EditProfile";
import providerService from "@/service/providers";
import recipientService from "@/service/recipients";
import imageService from "@/service/image"
import userService from "@/service/users"
import fileError from "@/components/notifications/errorMessage"
import socket from "@/socket"
export default {
  name: "user-profile",
  props: {
    loggedInUser: Object,
    provider: Object,
    recipient: Array
  },
  components: {
    editProfile,
    fileError,
    MDBContainer,
    MDBTable,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtnClose
    //MDBInput
  },
  data () {
    return {
      user: null,
      userData: {},
      isPressedEditProfile: false,
      isAddProfileImage: false,
      isEditProfileImage: false,
      isEditData: false,
      pro: null,
      client: [],
      mail: "",
      address:"",
      osoite:null,
      lat: null,
      long: null,
      showImage: null,
      value: null,
      file: null,
      isProfileImageSelected: false,
      isUploaded: false,
      user_profile_image: [],
      avatar: "avatar.png",
      image_id: null,
      fileSizeError: null,
      fileTypeError: null,
      emailErrorMessage: null
    }
  },
  mounted () {
    this.getUserData();

  },
  methods: {
    // Get user
    async getUserData () {
      const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
      if (!loggedUserJSON) {
        this.$router.push('/');
      } else {
        this.user = JSON.parse(loggedUserJSON)

        const pro = await providerService.getProvider(this.user.id)
        const client = await recipientService.getOwnBookings(this.user.id);

        if (pro && client.length > 0) {
          this.avatar = pro.user.avatar.name
          this.pro = pro
          this.userData = {
            firstName: this.user.firstName,
            address: pro.address,
            email: pro.user.email
          }
        } else if (pro) {
          this.avatar = pro.user.avatar.name
          this.pro = pro
          this.userData = {
            firstName: this.user.firstName,
            address: pro.address,
            email: pro.user.email
          }
        } else if(client.length > 0) {
          if (client[0].user.avatar)
            this.avatar = client[0].user.avatar.name;
          this.client = client
          //console.log("Client avatar: " + client[0].user.avatar.name)

          this.userData = {
            firstName: this.user.firstName,
            address: client[0].address,
            email: client[0].user.email
          }
        } else {

        }

        // if (pro) {
        //   this.avatar = pro.user.avatar.name
        //   this.pro = pro
        //   this.userData = {
        //     firstName: this.user.firstName,
        //     address: pro.address,
        //     email: pro.user.email
        //   }
        // }
        // if (client.length > 0) {
        //   if (client[0].user.avatar)
        //     this.avatar = client[0].user.avatar.name;
        //   this.client = client
        //   //console.log("Client avatar: " + client[0].user.avatar.name)
        //
        //   this.userData = {
        //     firstName: this.user.firstName,
        //     address: client[0].address,
        //     email: client[0].user.email
        //   }
        // }


      }




      // let address = ""
      // if (this.pro) {
      //   //this.getPro(this.provider);
      //   address = this.pro.address;
      //
      // } else if (this.client) {
      //   address = this.client[0].address;
      // }


      // if (this.pro) {
      //   this.avatar = this.pro.user.avatar.name;
      // }
      // if (this.client.length > 0 && this.client[0].user.avatar) {
      //   this.avatar = this.client[0].user.avatar.name
      // }

    },
    async getUserPro () {
      const provider = await providerService.getProvider(this.user.id)
      //const client = await recipientService.getOwnBookings(this.user.id);

      if (provider) {
        console.log("User pro username " + provider.user.username)
        this.pro = provider
        this.userData = {
          firstName: this.loggedInUser.firstName,
          address: this.pro.address
        }
      }


    },
    async getUserRecipient () {
      const client = await recipientService.getOwnBookings(this.user.id);
      if (client && client.length > 0) {
        this.client = client
        this.userData = {
          firstName: this.user.firstName,
          address: client[0].address
        }
      }
    },
    pressedEditProfile () {
      this.isPressedEditProfile = true;
    },
    handleSaveProfileData () {

    },
    // getPro (pro) {
    //   if (pro.yritys) {
    //     this.pro = pro;
    //   } else {
    //     this.pro = null;
    //   }
    //   // setTimeout(() => {
    //   //   if (pro.yritys) {
    //   //     this.pro = pro;
    //   //   } else {
    //   //     this.pro = null;
    //   //   }
    //   // }, 2000)
    // },

    async validateUploadErrors (data, status) {
      if (this.file.size > 1048576) { // 10 MB
        this.fileSizeError = "Kuvan koko on oltava pienempi kun 10 MB!"
        setTimeout(() => {
          this.fileSizeError = null;
        }, 3000)
        this.showImage = null;
        this.isAddProfileImage = false;
        this.isEditProfileImage = false;

        if (this.file.type !== "image/jpeg" || this.file.type !== "image/png" || this.image.type !== "image/jpg" || this.image.type !== "image/gif") {
          this.fileTypeError = "Pitäisi käyttää kuvan formaatti (jpeg, jpg, png, gif)!"
          setTimeout(() => {
            this.fileTypeError = null;
          }, 3000)
          this.showImage = null;
          this.isAddProfileImage = false;
          this.isEditProfileImage = false;


        }
      } else {
        if (status === "add") {
          this.$emit("updateAvatar", this.showImage); // to app, for navbar avatar adding
          await imageService.createProfileImage(this.user.id, data);


        } else {
          this.$emit("updateAvatar", this.showImage); // to app, for navbar avatar update
          await imageService.newAvatar(this.user.id, data);


        }
        this.isPressedEditProfile = false;

      }

    },
    async handleSaveProfile (newAddress, newEmailAddress) {
      console.log("Is new address?? " + newAddress.latitude)
      // Edit address if address is choosen, otherwice do nothing
      if (newEmailAddress !== "") {
        const emailAlreadyExists = await userService.editEmail(this.user.id, {email: newEmailAddress});
        if (emailAlreadyExists.error !== "email existing") {
          this.userData.email = newEmailAddress;
        } else {
          this.emailErrorMessage = "Antamasi sähköpostiosoite on jo olemassa!"
          setTimeout(() => {
            this.emailErrorMessage = null;
          }, 2000);
        }
      }
      if (newAddress.latitude !== null) {
        if (this.pro) { // If client is provider
          await providerService.editAddress(this.pro.id, newAddress);
          this.userData.address = newAddress.address;
        }
        if (this.client.length > 0) { // If client is recipient
          for (let booking in this.client) {
            const bookingID = this.client[booking].id;
            await recipientService.editBookingAddress(bookingID, newAddress);
            this.userData.address = newAddress.address;
          }
        }

      }
      const data = new FormData();
      if (this.value !== null) {
        if (this.isAddProfileImage) {
          console.log("Saving image");


          data.append('file', this.file, this.file.name)

          await this.validateUploadErrors(data, "add");
          //this.$router.go(-1);
          //await imageService.createProfileImage(this.loggedInUser.id, data);


          // this.isEditProfileImage = false;
          // this.isAddProfileImage = false;

        } else if (this.isEditProfileImage) {
          console.log("Editing image here")
          data.append('file', this.file, this.file.name);
          await this.validateUploadErrors(data, "edit");
          this.$router.go(-1);

          // this.isPressedEditProfile = false;
          // this.isAddProfileImage = false;
          // this.isEditProfileImage = false;
        }

      }
      //this.isPressedEditProfile = false;


    },
    saveEditedName () {
      this.userData.firstName = this.name;
      this.isEditName = false;
    },
    handleCloseEditProfile () {
      this.isPressedEditProfile = false;
      this.isAddProfileImage = false;
      this.isEditProfileImage = false;
    },
    handleFileChange(e) {
      //this.$emit('input', e.target.client[0])

      try {

        const files = e.target.files[0]
        console.log('event target client ', e.target.files[0])
        if (files) {
          //const tempImage = URL.createObjectURL(files)
          //this.tempImages.push(tempImage);
          this.showImage = URL.createObjectURL(files)
          this.avatar = URL.createObjectURL(files)
          this.file = e.target.files[0];

          console.log("Image type: " +  this.file.type)
          console.log("Image size: " + typeof this.file.size)
        }

      } catch (err) {
        console.log('Error:', err)
      }

      this.value = e.target.files[0]
      if (e.target.files[0]) {
        this.isProfileImageSelected = true;
      } else {
        this.isProfileImageSelected = false;
      }
    },
    addProfileImage () {
      this.isAddProfileImage = true;
    },
    editProfileImage () {
      this.isEditProfileImage = true;
    },
    async removeProfileImage () {
      //this.avatar = null;
      this.avatar = "avatar.png"
      this.showImage = null;
      this.$emit("removeAvatar")
      await userService.removeAvatar(this.user.id);
      this.isEditProfileImage = false;
      this.isPressedEditProfile = false;
      // if (this.avatar) {
      //   // Removing avatar will take place in User router
      //   await userService.removeAvatar(this.loggedInUser.id);
      // }

    },
    async handleSaveProfileImage () {
      //this.isUploaded = true;
      this.isPressedEditProfile = false;
      this.isAddProfileImage = false;
      this.isEditProfileImage = false;
    }


  }
}
</script>

<style scoped>
.profile_image {
  width: 160px;
  text-align: center;
  color: blue;
  margin-top: 50px;
  cursor:pointer;
}
img.loading {
  width: 100px;
  height: 100px;
  background: transparent url(https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif) no-repeat scroll center center;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  width: 200px;

  color: white;
  background-color: #87958e;
  border: 1px solid #ccc;
  display: inline-block;
  padding: 10px 12px;
  margin-bottom: 10px;
  cursor: pointer;
}
.error {
  color: white;
  background: #f5839c;
  font-size: 20px;
  border: solid #f75959;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

table {
  color: #aeabab;
}
</style>