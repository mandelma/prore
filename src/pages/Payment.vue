<template>
  <MDBContainer>
    <h4 style="float: right;" @click="quitPayment">Valmis</h4>

    <h2>Maksaa {{payment}} euroa</h2>
    <MDBBtn color="dark" style="width: 200px;" size="lg" @click="payCredit">
      <img
          style="width: 50px;"
          :src="require(`@/assets/mastercard.png`)"
          alt="payment"
      />

    </MDBBtn>

  </MDBContainer>
</template>

<script>
import {
  MDBContainer,
    MDBBtn
} from 'mdb-vue-ui-kit'
export default {
  name: "Payment",
  props: {
    payment: Number
  },
  components: {
    MDBContainer,
    MDBBtn
  },
  methods: {
    payCredit () {
      this.$emit("credit", this.payment);
    },
    quitPayment () {
      this.$emit("quit-payment")
    }
  }
}
</script>

<style scoped>

</style>