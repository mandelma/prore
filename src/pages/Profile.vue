<template>

  <MDBContainer style="margin-top: 50px;">
    <div v-if="!pro.yritys || !client" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else>
      <MDBRow>
        <MDBCol >

          <MDBCol lg="6">

            <MDBRow>
              <MDBCol>
                <MDBIcon size="5x" style="padding: 20px 0;">
                  <i class="fas fa-user"></i>
                </MDBIcon>


              </MDBCol>
              <MDBCol>
                <div style="border: solid blue;float: right; padding: 10px; width: 100%;">


                  <div v-if="!pro" class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>

                  <div v-else>
                    <h3 v-if="pro">TMI {{ pro.yritys }}</h3>
                    <h3 v-if="client">Sinulla on varauksia ({{client.length}})</h3>
                  </div>

                </div>
              </MDBCol>
            </MDBRow>





          </MDBCol>

        </MDBCol>
        <MDBCol lg="8">
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
                test.test@test.ee
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <MDBBtn block size="lg" color="success" @click="pressedEditProfile">Muokkaa tiotosi</MDBBtn>
              </td>
            </tr>
            </tbody>
          </MDBTable>

          <edit-profile
              v-else
              :loggedInUser = loggedInUser
              :userData=" userData"
              @goBackFromEditProfile = handleCloseEditProfile
              @saveAddress = handleSaveAddress
          />

          <!--        <MDBTable  borderless style="font-size: 14px; text-align: left; ">
                    <tbody>
                    <tr>
                      <td>
                        Etunimi:
                      </td>
                      <td>
                        {{loggedInUser.firstName}}
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
                        Sähköposti
                      </td>
                      <td>
                        <MDBInput label="mailmail" v-model="mail" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Osoite
                      </td>
                      <td>
                        <MDBInput id="address" label="Anna xxx osoite" v-model="osoite" />
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <MDBBtn block size="lg" color="success" @click="saveProfileData">Tallenna tiedot</MDBBtn>
                      </td>
                    </tr>
                    </tbody>
                  </MDBTable>-->

        </MDBCol>
      </MDBRow>
    </div>

  </MDBContainer>
 <div>
   <MDBContainer>

     <MDBBtn outline="danger" block size="lg" @click="$router.push('/')">Poistu sivulta</MDBBtn>
   </MDBContainer>
 </div>
</template>

<script>
import {
  MDBContainer,
  MDBTable,
  MDBBtn,
    MDBRow,
    MDBCol,
    MDBIcon,
    //MDBInput
}from "mdb-vue-ui-kit";
import editProfile from "../components/EditProfile";
import providerService from "@/service/providers";
import recipientService from "@/service/recipients";
export default {
  name: "user-profile",
  props: {
    loggedInUser: Object,
    provider: Object,
    recipient: Array
  },
  components: {
    editProfile,
    MDBContainer,
    MDBTable,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBIcon,
    //MDBInput
  },
  data () {
    return {
      userData: {},
      isPressedEditProfile: false,
      isEditData: false,
      pro: {},
      client: [],
      mail: "",
      address:"",
      osoite:null,
      lat: null,
      long: null
    }
  },
  mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')

    if (!loggedUserJSON) {
      this.$router.push('/');
    } else {
      this.getUserPro();
      this.getUserRecipient();
      let address = ""
      if (this.pro) {
        //this.getPro(this.provider);
        address = this.pro.address;
      } else if (this.client) {
        //address = this.client[0].address;
      }
      this.userData = {
        firstName: this.loggedInUser.firstName,
        address: address
      }

    }

  },
  methods: {
    async getUserPro () {
      const pro = await providerService.getProvider(this.loggedInUser.id)
      if (pro)
        this.pro = pro
        this.userData = {
          firstName: this.loggedInUser.firstName,
          address: pro.address
        }
      /*if (provider) {
        setTimeout(() => {
          if (provider.yritys) {
            this.pro = provider;
          } else {
            this.pro = null;
          }
        }, 2000)
      }*/
    },
    async getUserRecipient () {
      const client = await recipientService.getOwnBookings(this.loggedInUser.id);
      if (client.length > 0) {
        this.client = client
        this.userData = {
          firstName: this.loggedInUser.firstName,
          address: client[0].address
        }
      }
      /*if (client) {
        setTimeout(() => {
          if (client) {
            this.client = client.length;
          } else {
            this.client = null;
          }
        }, 2000)
      }*/
    },
    pressedEditProfile () {
      this.isPressedEditProfile = true;
    },
    handleSaveProfileData () {

    },
    getPro (pro) {
      setTimeout(() => {
        if (pro.yritys) {
          this.pro = pro;
        } else {
          this.pro = null;
        }
      }, 2000)
    },
    async handleSaveAddress (newAddress) {
      if (this.pro) {
        await providerService.editAddress(this.pro.id, newAddress);
        this.userData.address = newAddress.address;
        this.isPressedEditProfile = false;
      }
      if (this.client.length > 0) {



        for (let booking in this.client) {
          const bookingID = this.client[booking].id;
          await recipientService.editBookingAddress(bookingID, newAddress);
        }
      }



    },
    saveEditedName () {
      this.userData.firstName = this.name;
      this.isEditName = false;
    },
    handleCloseEditProfile () {
      this.isPressedEditProfile = false;
    }
  }
}
</script>

<style scoped>
.profil_image {
  color: blue;
  cursor:pointer;
}
</style>