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
            <MDBBtn color="success">
              Anna palauteetta
            </MDBBtn>
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
import {MDBTable, MDBBtn} from 'mdb-vue-ui-kit'
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
    MDBBtn
  }
}
</script>

<style scoped>

</style>