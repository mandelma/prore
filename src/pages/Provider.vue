<template>
  <div>
    <h2 style="margin-top: 50px;">Hei, olen TMI ja tarjoan palvelua!</h2>
    <h1>{{result}}</h1>
    <MDBBtn outline="sucess" size="lg" block @click="getAddress">Show data</MDBBtn>
    <MDBBtn outline="danger" size="lg" block @click="canselSession"> Cansel </MDBBtn>
  </div>
</template>

<script>
//import axios from 'axios'
//import key from '/server/config'
const key = require('../../server/config/keys')
import {
  MDBBtn
}from "mdb-vue-ui-kit";
import axios from "axios";

export default {
  name: "pro-vider",
  data () {
    return {
      result: ""
    }
  },
  components: {
    MDBBtn
  },
  methods: {
    canselSession () {
      //this.$router.push({path: '/'})
      this.$emit('cansel:provider', "Test")
    },


    getAddress () {
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=01620+Raikukuja,+Vantaa&key=' + key.googleMap)
          .then(response => {
            if (response.data.error_message) {
              this.error = response.data.error_message;
              //this.spinner = false;
              console.log(response.data.error_message)
            } else {
              this.address = response.data.results[0].formatted_address
              //console.log(response.data.results[0].formatted_address)
              console.log(response.data.results[0].formatted_address)
              console.log(response.data.results[0].address_components[0].long_name)
              this.result = response.data.results[0].formatted_address
            }

          })
          .catch(error => {
            this.error = error.message
            this.spinner = false;
            console.log(error.message)
          })
    }

  }
}
</script>

<style scoped>

</style>