<template>
  <MDBContainer >


  </MDBContainer>

  <MDBContainer >

    <div

        class="d-flex justify-content-center align-items-center"
        style="padding: 50px;"
    >

      <div class="text-center">
        <img
            class="mb-4"
            src= '../assets/pro-line.png'
            alt="logo"
            style="width: 250px; height: 150px"
        />
<!--        <h3 class="main">{{ msg }}</h3>-->
<!--        <h4 class="main">Autamme palvelun tilaamisessa tai tarjoamisessa</h4>-->
        <MDBRow>
          <MDBCol lg="2">
            <MDBIcon><i style="color: #fbcfa6;" class="far fa-star"></i></MDBIcon>
            <MDBIcon><i style="color: #35bbc7;" class="far fa-star"></i></MDBIcon>
            <MDBIcon><i style="color: #fbcfa6;" class="far fa-star"></i></MDBIcon>
          </MDBCol>
          <MDBCol lg="8">
            <h1 class=" solution">Nopeat ratkaisut kauttamme</h1>
          </MDBCol>
          <MDBCol lg="2">
            <MDBIcon><i style="color: #35bbc7;" class="far fa-star"></i></MDBIcon>
            <MDBIcon><i style="color: #52c735;" class="far fa-star"></i></MDBIcon>
            <MDBIcon><i style="color: #f2e332;" class="far fa-star"></i></MDBIcon>
          </MDBCol>
        </MDBRow>




        <div  style="margin-top:30px">
          <MDBBtn class="prore" size="lg" color="info" @click="recipientButton">Etsin palvelua</MDBBtn>
          <MDBBtn class="prore" size="lg" color="info" @click="provideButton" >Tarjoan palvelua</MDBBtn>


        </div>
      </div>

    </div>
  </MDBContainer>

</template>

<script >
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdb-vue-ui-kit";
export default {
  name: 'home-page',
  props: {
    msg: String,
    userIsProvider: Object
  },
  components: {
    MDBContainer,
    MDBBtn,
    MDBIcon,
    MDBRow,
    MDBCol
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
  text-shadow: #f9f99b 1px 0 10px;
  font-family: "Lucida Console", "Courier New", monospace;
  padding: 20px;
}
.prore {
  width: 300px;
  border: 2px solid #f4ae6d;
  border-radius: 30px;
  justify-content: space-between;
  padding: 50px;
  font-size: 20px;

  /*margin-top: 10px;*/
  /*margin-right: 20px;*/
  margin: 0 20px 10px 20px;
}

</style>
