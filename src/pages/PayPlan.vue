<template>
  <MDBContainer style="padding-top: 70px; padding-bottom: 20px;">
    <h3 style="text-align: right; color: forestgreen; padding-bottom: 50px;" @click="$router.go(-1)">Poistu</h3>
    <payment
      v-if="isPaymentSelected"
      :payment = payment
      @credit = handleCredit
      @quit-payment = handleQuitPayment
    />
    <MDBRow v-else>
      <MDBCol lg="3" md="6" class="plan-panel">
        <MDBCard class="plan">
          <MDBCardHeader>Viikko</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>7 päivää</MDBCardTitle>
            <MDBCardText>

            </MDBCardText>
<!--            <MDBBtn tag="a" href="#!" color="primary">Go somewhere</MDBBtn>-->
            <MDBBtn color="primary" size="lg" @click="selectPayment(14)">14 Euroa</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol lg="3" md="6" class="plan-panel">
        <MDBCard class="plan">
          <MDBCardHeader>Kuukausi</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>1 kuukausi</MDBCardTitle>
            <MDBCardText>

            </MDBCardText>
            <!--            <MDBBtn tag="a" href="#!" color="primary">Go somewhere</MDBBtn>-->
            <MDBBtn color="primary" size="lg"  @click="selectPayment(30)">30 Euroa</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol lg="3" md="6" class="plan-panel">
        <MDBCard class="plan">
          <MDBCardHeader>6 kuukautta</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>6 kk</MDBCardTitle>
            <MDBCardText>

            </MDBCardText>
            <!--            <MDBBtn tag="a" href="#!" color="primary">Go somewhere</MDBBtn>-->
            <MDBBtn color="primary" size="lg" @click="selectPayment(100)">100 Euroa</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol lg="3" md="6">
        <MDBCard class="plan">
          <MDBCardHeader>Vuosi</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>12 kk</MDBCardTitle>
            <MDBCardText>

            </MDBCardText>
            <!--            <MDBBtn tag="a" href="#!" color="primary">Go somewhere</MDBBtn>-->
            <MDBBtn color="primary" size="lg" @click="selectPayment(120)">120 Euroa</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

  </MDBContainer>



</template>

<script>
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
    MDBCardHeader,
    MDBCardBody,
  MDBCardTitle,
    MDBCardText,
    MDBBtn

} from 'mdb-vue-ui-kit'
import Payment from '../pages/Payment'
export default {
  name: "PayPlan",
  components: {
    Payment,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  },
  data () {
    return {
      payment: 0,
      paid: null,
      isPaymentSelected: false
    }
  },
  methods: {
    selectPayment (value) {
      this.payment = value;
      this.isPaymentSelected = true;
    },
    handleCredit (amount) {
      this.paid = "Olet maksanut " + amount + " euroa!"
      setTimeout(() => {
        this.timeEditErrorMessage = null
      }, 2000)
    },
    handleQuitPayment () {
      this.isPaymentSelected = false;
    }
  }
}
</script>

<style scoped>
.plan-panel {
  padding-bottom: 50px;
}
.plan {
  color: red;

}
</style>