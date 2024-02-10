<template>
  <MDBContainer>
    <h4 style="float: right;" @click="quitPayment">Valmis</h4>
    <h2>{{payment}} euroa</h2>

  </MDBContainer>
</template>

<script>
import {
  MDBContainer
} from 'mdb-vue-ui-kit'
export default {
  name: "Payment",
  props: {
    payment: Number
  },
  components: {
    MDBContainer
  },
  methods: {
    quitPayment () {
      this.$emit("quit-payment")
    }
  }
}
</script>

<style scoped>

</style>