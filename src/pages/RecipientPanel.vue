<template>
  <div>
    <!--
    <div v-if="isAvailable">
      <RecipientSuccess
        :provider = provider
      />
    </div>
    -->

<!--    <h1 style="margin-top: 200px; margin-bottom: 50px">Asiakkaan hallintapaneeli...</h1>-->

    <MDBContainer style="margin-top: 200px">
<!--      {{confirmedBookings}}-->

      <div v-if="isBooking">
        <recipientResult
            :booking = booking
            :bookingTime = recipientDateTime
            :providers = providerMatchByProfession
            :confirmedBookings = confirmedBookings
            :line = line
            @set:order:to:send = handleOrderToSend
            @remove:confirmed:provider = handleConfirmedProvider
            @cansel:result = handleCanselResult
        />
      </div>
      <div v-else>

        <div v-if="!bookings" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else>

          <MDBRow>
            <MDBCol md="6">
              <aside v-if="clientConfirmedBookings.length > 0" id="info-block">
                <section class="file-marker">
                  <div>
                    <div class="box-title">
                      Kinnitust ootaved broneeringud
                    </div>
                    <div class="box-contents">

                      <bookingInfo
                          v-for="item in clientConfirmedBookings" :key="item.id"
                          status = "for-recipient-test"
                          :msg = item
                      />


                    </div>
                  </div>
                </section>
              </aside>
            </MDBCol>
            <MDBCol md="6" >
              <aside v-if="confirmedBookings.length > 0" id="info-block" >
                <section class="file-marker">
                  <div>
                    <div class="box-title">
                      Kinnitatud broneeringud
                    </div>
                    <div class="box-contents">
                      <bookingInfo
                          v-for="item in confirmedBookings" :key="item.id"
                          status = "recipient"
                          :msg = item
                      />
                    </div>
                  </div>
                </section>
              </aside>
            </MDBCol>
          </MDBRow>






          <h3>Sinulla on hetkellä - {{bookings.length}} - avointa tilausta:</h3>

          <MDBTable borderless style="font-size: 16px; text-align: left;" >
            <tbody>
            <tr v-for="(booking) in bookings" :key="booking.id">
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

      </div>


    </MDBContainer>



  </div>
</template>

<script>

import {
  MDBTable,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
}from "mdb-vue-ui-kit";
import {ref} from "vue";
//import validateToken from "@/components/validateToken";
//import Fieldset from 'primevue/fieldset';

//import RecipientSuccess from '../components/RecipientSuccess'
import recipientResult from '../pages/RecipientPanelResult'
import providerService from '../service/providers'
import recipientService from '../service/recipients'
import bookingInfo from '../components/Info'
//import axios from "axios";
import driving from '../components/controllers/distance'

import monthConverter from '../components/controllers/month-converter'
export default {
  name: "recipient-panel",
  props: {
    recipientBookings: Array, // bookings from app (not active)

  },
  data () {
    return {
      bookings: [],
      provider: {},
      booking: null,
      confirmedBookings: [],
      clientConfirmedBookings: [],
      isBooking: false,
      //providerMatchByProfession: null,
      providerMatchByProfession: [],
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
    //Fieldset,
    //validateToken,
    bookingInfo,
    recipientResult,
    MDBTable,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
    //MDBBadge
  },
  async mounted () {

    /*const validated = await validateToken()
    if (!validated) {
      //console.log("user is no validated")
      this.$router.push('/login');
    } else {
      //console.log("User is validated")
      this.userId = validated.id
      this.provider = await providerService.getProvider(validated.id);

      this.handleRecipientBookings();
    }*/

    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (!loggedUserJSON) {
      this.$router.push('/')
    } else {
      const user = JSON.parse(loggedUserJSON)
      this.userId = user.id
      this.provider = await providerService.getProvider(user.id);

      this.handleRecipientBookings();

    }

  },
  methods: {
    async handleRecipientBookings () {
      let bookings = await recipientService.getOwnBookings(this.userId);
      this.confirmedBookings = bookings.filter(booking => booking.status === "confirmed");
      this.clientConfirmedBookings = bookings.filter(cb => cb.status === "notSeen" || cb.status === "seen");
      this.bookings = bookings.filter(booking => booking.status === "waiting")

    },
    async handleRecipientResult (id) {
      //this.isAvailable = true
      console.log("Provider id is: " + id)

      this.booking = await recipientService.getBookingById(id);

      console.log("Profession: " + this.booking.map(b => b.professional))
      let temp = []
      //const profession = this.booking.map(b => b.professional)
      temp = this.booking[0].professional;
      this.booking.map(b => {
        //temp = b.professional
        //temp.push(b.professional);
        this.recipientDateTime = new Date(2023, b.onTime[0].month, b.onTime[0].day, b.onTime[0].hours, b.onTime[0].minutes)
        console.log("Recipient datetime: " + b.onTime[0].day)
      })

      console.log("xxx " + this.recipientDateTime.getTime())
      // TODO siia veel mitmuse form elukutse sobivuse kohalt otsingus
      this.line = temp[0]
      //this.line = profession;
      // maybe lot of recipients by professional tag



      this.providerMatchByProfession = await providerService.getProvidersMatchingByProfession(
          {result: temp}
      )

      console.log("xxxxxx " + this.providerMatchByProfession.length)

      this.isBooking = true;
      //console.log("Booking: " + this.booking.address)
    },
    handleOrderToSend (id) {
      console.log("Order is sended")
      this.clientConfirmedBookings = this.clientConfirmedBookings.concat(this.booking);
      this.bookings = this.bookings.filter(booking => booking.id !== id)
    },
    newBooking () {
      // if(this.$route.query.redirect) {
      //   this.$router.push(this.$route.query.redirect)
      // }else{
      //   this.$router.push('/rf')
      // }
      this.$router.push('/rf')


    },
    handleConfirmedProvider (provId) {
      this.providerMatchByProfession = this.providerMatchByProfession.filter(prov => prov.id !== provId);
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


#info-block section {
  border: 1px solid #a0dde0;
  margin-bottom: 20px;
}

.file-marker > div {
  padding: 0 3px;
  height: 130px;
  /*margin-top: -0.8em;*/
  margin-top: -1em;



}
.box-title {
  background: white none repeat scroll 0 0;
  display: inline-block;
  /*padding: 0 2px;*/
  font-size: 16px;
  padding: 0 10px;
  /*margin-left: 8em;*/
}
.box-contents {
  max-height: 100px;
  padding: 10px;
  overflow-y: auto;
}
</style>