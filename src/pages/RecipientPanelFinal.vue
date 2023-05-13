<template>
  <div>
    <!--
    <MDBContainer style="margin-top: 30px;">
    -->
      <h2>- {{ provider.yritys }} -</h2>

      <MDBTable style="font-size: 18px; text-align: center;">
        <tbody>
        <tr>

          <td>
            <MDBRow >
              <MDBCol>

                <MDBIcon style="padding: 10px; cursor: pointer;" i class="far fa-thumbs-up" size="2x"
                @click="getPositiveFeedback"></MDBIcon>


                <MDBBadge color="success" class="translate-middle p-1"
                          pill
                          notification>100</MDBBadge>

                <PositiveFeedback
                    v-if="isPositive"
                    @close:comments = closeComments
                />

              </MDBCol>
              <MDBCol>

                <MDBIcon
                    style="padding: 10px; cursor: pointer;" i
                    class="far fa-thumbs-down" size="2x" @click="getNegativeFeedback"></MDBIcon>


                <MDBBadge color="danger" class="translate-middle p-1"
                          pill
                          size="lg"
                          notification>2</MDBBadge>

                <NegativeFeedback
                    v-if="isNegative"
                    @close:comments = closeComments
                />

              </MDBCol>
            </MDBRow>

          </td>
        </tr>
        </tbody>
      </MDBTable>
      <MDBBtn v-if="available === 'orange'" outline="info" block size="lg" @click="handleOrder(provider.id)">
        Tilaa yritys
      </MDBBtn>
    <MDBBtn v-else outline="info" block size="lg">
      Ota yhteyttä
    </MDBBtn>
      <MDBBtn outline="secondary" block size="lg" @click="canselRecipientFinal">
        Poistu
      </MDBBtn>
    <!--
    </MDBContainer>
    -->
  </div>
</template>

<script>
import {
  MDBBtn,
  //MDBContainer,
  MDBTable,
  MDBRow,
  MDBCol,
  MDBIcon, MDBBadge
}from "mdb-vue-ui-kit";
import PositiveFeedback from "@/components/PositiveFeedback";
import NegativeFeedback from "@/components/NegativeFeedback"
/*{{provider.timeoffer.map(to =>

datetime.providerMatchingForClient(
    bookingTime,
    {y: to.yearFrom, m: to.monthFrom, d: to.dayFrom, hour: to.hoursFrom, min: to.minutesFrom},
    {y: to.yearTo, m: to.monthTo, d: to.dayTo, hour: to.hoursTo, min: to.minutesTo}
)
)
}}*/
export default {
  name: "recipient-final",
  props: {
    provider: Object,
    available: String
  },
  components: {
    PositiveFeedback,
    NegativeFeedback,
    MDBBtn,
    //MDBContainer,
    MDBTable,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBadge
  },
  data() {
    return {
      isPositive: false,
      isNegative: false
    }
  },
  mounted () {

  },
  methods: {
    handleOrder (id) {
      this.$emit('provider:ordered', id)
    },
    getPositiveFeedback () {
      this.isPositive = true;
      this.isNegative = false;

    },
    getNegativeFeedback () {
      this.isNegative = true;
      this.isPositive = false;
      //console.log("Feedback")
    },
    closeComments (result) {
      this.isPositive = this.isNegative = result;
      console.log("result " + result)
    },
    canselRecipientFinal () {
      //this.$router.push("/recipient-result");
      this.$emit('cansel:final', false)
    }
  }
}
</script>

<style scoped>

</style>