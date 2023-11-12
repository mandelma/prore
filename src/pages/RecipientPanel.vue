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

            @finalinfo = finalinfo
            :chatusers = chatusers
            :selecteduser = selecteduser
            :messages = messages
            @select = selectUser
            @message = onMessage
            @chatCredentials = chatCredentials
            @filter_provider = handleFilterProvider

            @otherUser = otherUser
        />
      </div>
      <div v-else>

        <div v-if="!bookings" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else>

          <MDBRow>
            <MDBCol md="6">

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

          <MDBRow v-for="(booking, index) in bookings" :key="booking.id" class="bookings">
            <aside v-if="clientConfirmedBookings.some(ccb => ccb.id === booking.id)" id="info-block-confirmed" >
              <section class="file-marker">
                <div>
                  <div class="box-title-confirmed">
                    Broneering on ootel kui firma kinnitab
                  </div>
                  <div class="box-contents-confirmed">
                    <MDBRow>
                      <MDBCol>
                        {{booking.date}}
                      </MDBCol>
                      <MDBCol>
                        {{booking.header}}
                      </MDBCol>
                      <MDBCol>
                        <MDBBtn v-if="!isChat" outline="secondary" block size="lg" @click="contactToProvider(booking, index)">Ava chat</MDBBtn>
                        <MDBBtn v-if="isChat" outline="danger" block size="lg" @click="bookingWaitingProBackBtn">Poistu</MDBBtn>


                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>

                      </MDBCol>
                      <MDBCol style="text-align: center;">
                        <live-chat
                            v-if="selectedIndex === index && isChat"
                            :chatusers = chatusers
                            :messages =messages
                            :selecteduser = selecteduser
                            @select:user = selectUser
                            @on:message = onMessage
                        />
                      </MDBCol>
                      <MDBCol>

                      </MDBCol>

                    </MDBRow>

                  </div>
                </div>
              </section>
            </aside>


            <aside v-else>
              <MDBRow>
                <MDBCol>
                  {{booking.date}}
                </MDBCol>
                <MDBCol>
                  {{booking.header}}
                </MDBCol>
                <MDBCol>
                  <MDBBtn outline="info" block size="lg" @click="handleRecipientResult(booking.id)">Tiedot</MDBBtn>
                </MDBCol>
              </MDBRow>

            </aside>



          </MDBRow>



          -----------------------------------------------------------------

<!--          <MDBTable borderless style="font-size: 16px; text-align: left;" >-->
<!--            <tbody>-->
<!--            <tr v-for="(booking) in bookings" :key="booking.id">-->

<!--              <td>-->

<!--                {{booking.date}}-->

<!--              </td>-->
<!--              <td>-->
<!--                {{booking.header}}-->
<!--              </td>-->
<!--              <td>-->
<!--                <MDBBtn outline="info" block size="lg" @click="handleRecipientResult(booking.id)">Tiedot</MDBBtn>-->
<!--              </td>-->

<!--            </tr>-->
<!--            </tbody>-->
<!--          </MDBTable>-->
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
/*global google*/

import {
  //MDBTable,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
}from "mdb-vue-ui-kit";
import {ref} from "vue";
import liveChat from './LiveChat'
//import dist from '../components/controllers/distance'
//import validateToken from "@/components/validateToken";
//import Fieldset from 'primevue/fieldset';

//import RecipientSuccess from '../components/RecipientSuccess'
import recipientResult from '../pages/RecipientPanelResult'
import providerService from '../service/providers'
import recipientService from '../service/recipients'
import bookingInfo from '../components/Info'
//import RecipientBookingChatPanel from './RecipientBookingChatPanel'
//import axios from "axios";
//import driving from '../components/controllers/distance'

import monthConverter from '../components/controllers/month-converter'
import socket from "@/socket";
//import axios from "axios";
export default {
  name: "recipient-panel",
  props: {
    chatusers: Array,
    selecteduser: null,
    messages: Array,
    recipientBookings: Array, // bookings from app (not active)

  },
  data () {
    return {
      bookings: [],
      provider: {},
      booking: null,
      isChat: false,
      selectedIndex: null,
      d: null,
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
    //RecipientBookingChatPanel,
    liveChat,
    bookingInfo,
    recipientResult,
    //MDBTable,
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
    selectUser (user) {
      this.$emit('select:user', user);
    },
    onMessage (content, date) {
      this.$emit("on:message", content, date);
    },
    bookingWaitingProBackBtn () {
      this.$emit("bookingWaitingProBack");
      this.isChat = false
    },
    contactToProvider (booking, index) {
      console.log("Contact " + index);

      //this.$router.push('/chat');
      const room = booking.provider + booking.user.username;
      socket.emit("update room", room)
      this.selectedIndex = index;
      this.isChat = true;
    },
    otherUser (data) {
      this.$emit("otherUser", data)
    },
    finalinfo (data) {
      console.log("Data in recipient panel " + data)
      this.$emit("finalinfo", data)
    },
    chatCredentials (data) {
      this.$emit("chatCredentials", data);
    },
    async handleRecipientBookings () {
      let bookings = await recipientService.getOwnBookings(this.userId);
      this.confirmedBookings = bookings.filter(booking => booking.status === "confirmed");
      this.clientConfirmedBookings = bookings.filter(cb => cb.status === "notSeen" || cb.status === "seen");
      this.bookings = bookings.filter(b => b.status !== "confirmed" && b.status !== "completed");
      //this.bookings = bookings.filter(booking => booking.status === "waiting")

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


      this.providerMatchByProfession = await providerService.getProvidersMatchingByProfession(
          {result: temp}
      )

      //const provDist = "";

      //dist.distance();

      const getDistanceMatrix = (service, data) => new Promise((resolve, reject) => {
        service.getDistanceMatrix(data, (response, status) => {
          if(status === 'OK') {
            resolve(response)
          } else {
            reject(response);
          }
        })
      });


      let start = []
      let end = [];


      //console.log("Booking lat on " + this.booking[0].latitude)
      let originLat = this.booking[0].latitude;
      let originLng = this.booking[0].longitude;
      start = [originLat, originLng];
      this.providerMatchByProfession.forEach(pro => {
        let destinationLat = pro.latitude;
        //console.log("Dest latitude " + destinationLat )
        let destinationLng = pro.longitude;
        end = [destinationLat, destinationLng];
        //console.log("Dest longitude " + destinationLng )

        const getDistance = async (start, end) => {
          const origin = new google.maps.LatLng(start[0], start[1]);
          const final = new google.maps.LatLng(end[0], end[1]);
          const service = new google.maps.DistanceMatrixService();
          const result = await getDistanceMatrix(
              service,
              {
                origins: [origin],
                destinations: [final],
                travelMode: 'DRIVING'
              }
          )
          return {
            distance: (result.rows[0].elements[0].distance.value / 1000).toFixed(1),
            duration: result.rows[0].elements[0].duration.text
          };
        };

        getDistance(start, end).then(res => {
          //console.log("DDxxiist " + res.distance)
          pro.distance = res.distance;
          pro.duration = res.duration;
        });
      })

      console.log("xxxxxx " + this.providerMatchByProfession.length)

      this.isBooking = true;
    },
    handleFilterProvider (content) {
      console.log("Filtering is working! " + content)
      if (content === "distance") {
        this.providerMatchByProfession.sort((a, b) => a.distance - b.distance);
      }

      console.log("Filtering: " + this.providerMatchByProfession.map(pm => pm.distance))
    },
    handleOrderToSend (id) {
      console.log("Order is sended " + id)
      this.clientConfirmedBookings = this.clientConfirmedBookings.concat(this.booking);
      //this.bookings = this.bookings.filter(booking => booking.id !== id)
    },
    newBooking () {

      this.$router.push('/rf')


    },
    handleConfirmedProvider (provId) {
      this.providerMatchByProfession = this.providerMatchByProfession.filter(prov => prov.id !== provId);
    },
    openMap () {
      this.$router.push('/recipient-public');
    },
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

.bookings {
  font-size: 16px;
  text-align: left;
  padding: 20px;
}


#info-block section {
  border: 1px solid #a0dde0;
  margin-bottom: 20px;
}

#info-block-confirmed section {
  border: 2px solid #d5b13c;
  margin-bottom: 20px;
}

.file-marker > div {
  padding: 0 3px;
  /*height: 130px;*/
  /*margin-top: -0.8em;*/
  margin-top: -1em;
}

.box-title {
  background: white none repeat scroll 0 0;
  display: inline-block;
  /*padding: 0 2px;*/
  font-size: 16px;
  padding: 0 10px;

  margin-left: 8em;
}
.box-title-confirmed {
  background: white none repeat scroll 0 0;
  display: inline-block;
  color: red;
  /*padding: 0 2px;*/
  font-size: 16px;
  padding: 0 10px;

  margin-left: 8em;
}
.box-contents {
  border: solid red;
  padding: 10px;
  overflow-y: auto;
}
.box-contents-confirmed {

  padding: 10px;
}
</style>