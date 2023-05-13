<template>
  <div>
    <!--
    <div v-if="isAvailable">
      <RecipientSuccess
        :provider = provider
      />
    </div>
    -->

    <h1 style="margin-top: 50px; margin-bottom: 50px">Asiakkaan hallintapaneeli...</h1>
    <MDBContainer>
      <div v-if="isBooking">
        <recipientResult
            :booking = booking
            :bookingTime = recipientDateTime
            :providers = providerMatchByProfession
            :line = line
            @cansel:result = handleCanselResult
        />
      </div>
      <div v-else>
        <h3>Sinulla on hetkellä {{recipientBookings.length}} tilausta:</h3>

        <MDBTable borderless style="font-size: 16px; text-align: left;" >
          <tbody>
          <tr v-for="(booking) in recipientBookings" :key="booking.id">
            <td>

              {{booking.date}}

            </td>
            <td>
              {{booking.header}}
            </td>
            <td>
              <MDBBtn outline="info" block size="lg" @click="handleRecipientResult(booking.id)">Tiedot</MDBBtn>
            </td>
          </tr>
          </tbody>
        </MDBTable>
        <MDBBtn outline="info" block size="lg" @click="newBooking">Teen uuden tilauksen</MDBBtn>
        <MDBBtn outline="black" block size="lg" @click="openMap">Asiantuntijoita ympärilläsi</MDBBtn>
        <!--
        <MDBBtn outline="info" block size="lg" @click="getDistance">Distance</MDBBtn>
        <MDBBtn outline="info" block size="lg" @click="compareTime">Compare time</MDBBtn>
        -->
      </div>




    </MDBContainer>




<!--      <MDBTable borderless style="font-size: 16px; text-align: left;">
      <tbody>
      <tr >

        <td>{{provider.yritys}} <MDBBadge badge="success"
                                          class="translate-middle p-2 border border-light rounded-circle"
                                          dot></MDBBadge></td>
        <td scope="col">
          <MDBBtn outline="success" block size="lg" @click="handleProviderGet(provider.id)">Tiedot</MDBBtn>
        </td>


      </tr>
      <tr>
        <td>
          TMI Putkipojat <MDBBadge badge="warning"
                                   class="translate-middle p-2 border border-light rounded-circle"
                                   dot></MDBBadge>
        </td>
        <td>
          <MDBBtn outline="success" block size="lg">Tiedot</MDBBtn>
        </td>
      </tr>
      <tr>
        <td>
          TMI laattuPutket <MDBBadge badge="warning"
                                     class="translate-middle p-2 border border-light rounded-circle"
                                     dot></MDBBadge>
        </td>
        <td>
          <MDBBtn outline="success" block size="lg">Tiedot</MDBBtn>
        </td>

      </tr>
      <tr>
        <td>
          TMI Matti putki <MDBBadge badge="warning"
                                    class="translate-middle p-2 border border-light rounded-circle"
                                    dot></MDBBadge>
        </td>
        <td>
          <MDBBtn outline="success" block size="lg">Tiedot</MDBBtn>
        </td>
      </tr>

      </tbody>
    </MDBTable>-->



  </div>
</template>

<script>

import {
  MDBTable, MDBBtn, MDBContainer//MDBBadge
}from "mdb-vue-ui-kit";
import {ref} from "vue";

//import RecipientSuccess from '../components/RecipientSuccess'
import recipientResult from '../pages/RecipientPanelResult'
import providerService from '../service/providers'
import recipientService from '../service/recipients'
//import axios from "axios";
import driving from '../components/controllers/distance'

import monthConverter from '../components/controllers/month-converter'
export default {
  name: "recipient-panel",
  props: {
    recipientBookings: Array
  },
  data () {
    return {
      bookings: null,
      provider: {},
      booking: null,
      isBooking: false,
      providerMatchByProfession: null,
      providerMatchingRequirements: null,
      line: "",
      recipientDateTime: null,

    }
  },
  setup () {
    const isAvailable = ref(false)
    return {
      isAvailable
    }
  },
  components: {
    //RecipientSuccess,
    recipientResult,
    MDBTable,
    MDBBtn,
    MDBContainer
    //MDBBadge
  },
  async mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.userId = user.id
      this.provider = await providerService.getProvider(user.id);

      this.handleRecipientBookings();

      //console.log("User token: " + this.loggedUser.token)
      //console.log("User id in provider panel: " + user.id)
    }

  },
  methods: {
    async handleRecipientBookings () {
      this.bookings = await recipientService.getOwnBookings(this.userId);
    },
    async handleRecipientResult (id) {
      //this.isAvailable = true
      console.log("Provider id is: " + id)

      this.booking = await recipientService.getBookingById(id);

      console.log("Profession: " + this.booking.map(b => b.professional))
      let temp = []
      //const profession = this.booking.map(b => b.professional)
      this.booking.map(b => {
        temp = b.professional
        this.recipientDateTime = new Date(2023, b.onTime[0].month, b.onTime[0].day, b.onTime[0].hours, b.onTime[0].minutes)
        console.log("Recipient datetime: " + b.onTime[0].day)
      })

      console.log("xxx " + this.recipientDateTime.getTime())
      // TODO siia veel mitmuse form
      this.line = temp[0]
      //this.line = profession;
      // maybe lot of recipients by professional tag



      this.providerMatchByProfession = await providerService.getProvidersMatchingByProfession(
          temp[0]
      )
      this.isBooking = true;
      //console.log("Booking: " + this.booking.address)
    },
    newBooking () {
      // if(this.$route.query.redirect) {
      //   this.$router.push(this.$route.query.redirect)
      // }else{
      //   this.$router.push('/rf')
      // }
      this.$router.push('/rf')


    },
    openMap () {
      this.$router.push('/recipient-public');
    },
    getDistance () {
      driving.distance();
      // var origin = new google.maps.LatLng(60.233093,24.7531362);
      // var destination = new google.maps.LatLng(60.2767265,24.8575089);
      // var service = new google.maps.DistanceMatrixService();
      // service.getDistanceMatrix(
      //     {
      //       origins: [origin],
      //       destinations: [destination],
      //       travelMode: 'DRIVING',
      //       unitSystem: google.maps.UnitSystem.METRIC,
      //       durationInTraffic: true,
      //       avoidHighways: false,
      //       avoidTolls: false
      //     }, this.response_data);

    },

    // response_data(responseDis, status) {
    //   if (status !== google.maps.DistanceMatrixStatus.OK || status !== "OK"){
    //     console.log('Error:', status);
    //     // OR
    //     alert(status);
    //   }else{
    //   alert(responseDis.rows[0].elements[0].distance.value);
    //   }
    // },
    compareTime () {
      console.log("Month is: " + monthConverter.month(4))
      // const rec = {
      //   y:  2023,
      //   m: 3,
      //   d: 20,
      //   hour: 10,
      //   min: 20
      // }
      // const prov = {
      //   y:  2023,
      //   m: 3,
      //   d: 20,
      //   hour: 10,
      //   min: 19
      // }
      //console.log("Datetime comparison: " + datetime.compare(rec, prov))

      // console.log("Time comparison: " + (new Date(2023,3, 20, 10, 20).getTime()
      //     < new Date(2023, 3, 20, 11, 11).getTime()))
    },

    handleCanselResult (back) {
      console.log("Canseled: " + back)
      this.isBooking = back;
    }
  }
}
</script>

<style scoped>

</style>