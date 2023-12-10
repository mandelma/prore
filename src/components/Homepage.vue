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
            alt="logo"
            style="width: 250px; height: 90px"
        />
        <h3 class="main">{{ msg }}</h3>
        <h4 class="main">Autamme palvelun tilaamisessa tai tarjoamisessa</h4>
        <h4 class="solution">
          <MDBIcon><i class="far fa-star"></i></MDBIcon>
          löytää nopeat ratkaisut kauttamme
          <MDBIcon><i class="far fa-star"></i></MDBIcon>
        </h4>

        <div class="d-grid gap-2 d-md-block" style="margin-top:100px">
          <MDBBtn class="prore" size="lg" color="info" @click="recipientButton">Etsin palvelua</MDBBtn>
          <MDBBtn class="prore" size="lg" color="info" @click="provideButton" >Tarjoan palvelua</MDBBtn>


        </div>
      </div>

    </div>
  </MDBContainer>

</template>

<script >
import { MDBContainer, MDBBtn, MDBIcon } from "mdb-vue-ui-kit";
export default {
  name: 'home-page',
  props: {
    msg: String,
    userIsProvider: Object
  },
  components: {
    MDBContainer,
    MDBBtn,
    MDBIcon
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
    }
  },
  methods:{
    recipientButton () {

      this.$router.push('/recipient-form')
    },
    provideButton () {

      this.$router.push({name: 'provider-public'})

    },
    submitProvider () {
      /*if (this.userIsProvider) {
        const username = "kadi"
        const room = "tuba333";
        socket.emit("joinRoom", {username, room})
      }*/

      this.$router.push({name: 'provider-public'})
    },
    backToDashboard () {
      this.isPressedProviderBtn = false
    }
  }
}
</script>
<style scoped>
.main {
  color: #268d96;
}
.solution {
  color: #268d96;
  text-shadow: #f5f532 1px 0 10px;
}
.prore {
  border: 1px solid #f2f261;
  padding: 10px;
  font-size: 18px;
  margin-top: 10px;
}
</style>
