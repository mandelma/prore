<template>
  <MDBContainer >


  </MDBContainer>

  <MDBContainer >

    <div

        class="d-flex justify-content-center align-items-center"
        style="height: 100vh"
    >

      <div class="text-center">
        <img
            class="mb-4"
            src= '../assets/pro-line.png'
            style="width: 250px; height: 90px"
        />
        <h5 class="mb-3">{{ msg }}</h5>
        <p class="mb-3">Let us to help you</p>

        <div class="d-grid gap-2 d-md-block" style="margin-top:100px">
          <MDBBtn size="lg" color="info" @click="this.$router.push('/recipient-form')">Etsin palvelua</MDBBtn>
          <MDBBtn size="lg" color="info" @click="provideButton">Tarjoan palvelua</MDBBtn>
        </div>
      </div>

    </div>
  </MDBContainer>
  homepage {{userIsProvider}}

</template>

<script >
// v-if="userLogged"
import { MDBContainer, MDBBtn } from "mdb-vue-ui-kit";
//import Provider from '../pages/ProviderForm.vue'
//import ProviderPublic from '../pages/ProviderPublic'

//import router from '../router/index.js'
//import { MDBBtn } from "mdb-vue-ui-kit"
//defineProps<{ msg: string }>();
export default {
  name: 'home-page',
  props: {
    msg: String,
    userIsProvider: Object
  },
  components: {

    //Provider,
    //ProviderPublic,
    MDBContainer,
    MDBBtn
  },

  data () {
    return {
      userLogged: null,
      isPressedProviderBtn: false,
      isPressedReceiverBtn: false
    }
  },
  mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.userLogged = user
      //console.log("User token: " + this.loggedUser.token)
      //console.log("User id in Provider: " + user.id)
    }
  },
  methods:{
    provideButton () {
      this.$router.push({name: 'provider-public'})
      // if (this.userIsProvider) {
      //   this.$router.push({name: 'provider-panel'})
      // } else {
      //   this.$router.push({name: 'provider-public'})
      // }

    },
    backToDashboard (test) {
      //this.$router.push({path: '/login'})
      console.log("Yes!!!" + test)
      this.isPressedProviderBtn = false
    },
    RecipietBackToDashboard () {

    }
  }
}
</script>
