<template>
  <div style="margin-top:200px">

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
            Palaute
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
            {{ booking.provider }}
          </td>
          <td>
            <MDBBtn
                v-if="!isFeedbackOpen"
                color="success"
                @click="openFeedbackPanel"
            >
              Anna palauteetta
            </MDBBtn>
            <MDBBtn
                v-else
                color="danger"
                @click="isFeedbackOpen = false"
            >
              Poistu
            </MDBBtn>
          </td>
        </tr>
        <tr v-if="isFeedbackOpen">
          <td colspan="2">
            <h2>Feedback here</h2>
            <MDBRow >
              <MDBCol>

                <MDBIcon style="padding: 10px; cursor: pointer;" i class="far fa-thumbs-up" size="2x"
                         @click="ratePos"></MDBIcon>


                <MDBBadge color="success" class="translate-middle p-1"
                          pill
                          notification>100</MDBBadge>


              </MDBCol>
              <MDBCol>

                <MDBIcon
                    style="padding: 10px; cursor: pointer;" i
                    class="far fa-thumbs-down" size="2x" @click="rateMinus"></MDBIcon>


                <MDBBadge color="danger" class="translate-middle p-1"
                          pill
                          size="lg"
                          notification>2</MDBBadge>



              </MDBCol>
            </MDBRow>

          </td>
          <td colspan="2">
            Hiii
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
import {
  MDBTable,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBadge
} from 'mdb-vue-ui-kit'
import monthConverter from '.././components/controllers/month-converter.js'
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
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBadge
  },
  data () {
    return {
      isFeedbackOpen: false,
      isRated: false
    }
  },
  methods: {
    openFeedbackPanel () {
      this.isFeedbackOpen = true;
    },
    ratePos () {
      console.log("Rated ++");
    },
    rateMinus () {
      console.log("You rated --");
    }
  }
}
</script>

<style scoped>

</style>