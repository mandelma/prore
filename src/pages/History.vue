<template>
  <div style="margin-top:100px">

    <div v-if="recipientConfirmedBookings.length > 0">
      <MDBTable>
        <thead>
        <tr>
          <th>
            Kuupäev
          </th>
          <th>
            Töö
          </th>
          <th>
            Firma
          </th>
          <th>
            Y-tunnus
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="booking in recipientConfirmedBookings" :key="booking.id">
          <td>
            <monthConverter :num=" booking.onTime[0].month" />, {{booking.onTime[0].day}}, {{booking.onTime[0].year}}
          </td>
          <td>
            {{booking.header}}
          </td>
          <td>
            {{ booking.ordered[0].yritys }}
          </td>
          <td>
            {{booking.ordered[0].ytunnus}}
          </td>
        </tr>

        <tr v-if="isFeedbackOpen" >
          <td colspan="2">
            <h2>Feedback here</h2>
            <MDBRow >
              <MDBCol>

                <MDBIcon style="padding: 10px; cursor: pointer;" i class="far fa-thumbs-up" size="3x"
                         @click="ratePos"></MDBIcon>


                <MDBBadge color="success" class="translate-middle p-1"
                          pill
                          notification>100</MDBBadge>


              </MDBCol>
              <MDBCol>

                <MDBIcon
                    style="padding: 10px; cursor: pointer;" i
                    class="far fa-thumbs-down" size="3x" @click="rateMinus"></MDBIcon>


                <MDBBadge color="danger" class="translate-middle p-1"
                          pill
                          size="lg"
                          notification>2</MDBBadge>



              </MDBCol>
            </MDBRow>

          </td>
          <td colspan="2">
          </td>
        </tr>
        </tbody>
      </MDBTable>
    </div>
    <div v-else>
      <h2>Ei toimintoja vielä!</h2>
    </div>

  </div>
</template>

<script>
//NB ordered to make !!
import {
  MDBTable,
  //MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBadge
} from 'mdb-vue-ui-kit'
import monthConverter from '.././components/controllers/month-converter.js'
import providerService from '../service/providers'
export default {
  name: "historia",
  props: {
    recipientConfirmedBookings: Array,
    tere: String,
    bookings: Array
  },
  components: {
    monthConverter,
    MDBTable,
    //MDBBtn,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBadge
  },
  data () {
    return {
      isFeedbackOpen: false,
      isRated: false,
      providerID: "",
      provider: {}
    }
  },
  methods: {
    async openFeedbackPanel (id) {
      this.isFeedbackOpen = true;

      let provider = await providerService.getProvByProvId(id)
      console.log("Provider positive rating: " + provider.yritys)
      this.providerID = id;
    },
    ratePos () {
      console.log("Rated ++ " + this.providerID);
      providerService.setPositiveRating(this.providerID);
    },
    rateMinus () {
      console.log("You rated --");
    }
  }
}
</script>

<style scoped>

</style>