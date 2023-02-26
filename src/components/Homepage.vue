<template>
  <MDBContainer v-if="isPressedProviderBtn">
    <Provider
        @cansel:provider ="backToDashboard"
    />
  </MDBContainer>

  <MDBContainer v-else>
    <div
        class="d-flex justify-content-center align-items-center"
        style="height: 70vh"
    >
      <div class="text-center">
        <img
            class="mb-4"
            src= '../assets/pro-line.png'
            style="width: 250px; height: 90px"
        />
        <h5 class="mb-3">{{ msg }}</h5>
        <p class="mb-3">Let us to help you</p>



        <MDBBtn @click="backToDashboard">Etsin palvelua</MDBBtn>
        <MDBBtn @click="isPressedProviderBtn = true">Tarjoan palvelua</MDBBtn>
      </div>

    </div>
  </MDBContainer>
</template>

<script >
import { MDBContainer, MDBBtn } from "mdb-vue-ui-kit";
import Provider from '../pages/Provider.vue'
//import router from '../router/index.js'
//import { MDBBtn } from "mdb-vue-ui-kit"
//defineProps<{ msg: string }>();
export default {
  name: 'home-page',
  props: {
    msg: String
  },
  components: {

    Provider,
    MDBContainer,
    MDBBtn
  },

  data () {
    return {
      isPressedProviderBtn: false,
      isPressedReceiverBtn: false
    }
  },
  methods:{
    backToDashboard (test) {
      //this.$router.push({path: '/login'})
      console.log("Yes!!!" + test)
      this.isPressedProviderBtn = false

    }
  }
}
</script>
