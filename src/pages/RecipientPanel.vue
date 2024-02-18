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

    <MDBContainer style="margin-top: 50px">
<!--      {{confirmedBookings}}-->

      <div v-if="isBooking">
        <recipientResult
            :test = test
            :booking = booking
            :images = images
            :bookingTime = recipientDateTime

            :providers = providerMatchByProfession
            :confirmedBookings = confirmedBookings
            :line = line
            @updateBookingDate = handleUpdateBookingDate
            @set:order:to:send = handleOrderToSend
            @remove:confirmed:provider = handleConfirmedProvider
            @cansel:result = handleCanselResult

            @editDescription = handleEditDescription

            @addImage = handleAddImage
            @editImage = handleEditImage
            @removeImage = handleRemoveImage

            @finalinfo = finalinfo
            :chatusers = chatusers
            :selecteduser = selecteduser
            :messages = messages
            @select = selectUser
            @noSelect = noSelectUser
            @message = onMessage
            @chatCredentials = chatCredentials
            @filter_provider = handleFilterProvider

            @otherUser = otherUser
        />
      </div>
      <div v-else>

        <div v-if="recipientBookings.length === 0 && confirmedBookingsByProvider.length === 0" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else>

          <MDBRow>

            <MDBCol md="8" >
              <aside v-if="confirmedBookingsByProvider.length > 0" id="info-block" >
                <section class="file-marker">
                  <div>
                    <div class="box-title">
                      Vahvistetut varaukset!
                    </div>
                    <div class="box-contents">
<!--                      <booking-info-->
<!--                          v-if="recipientTest"-->
<!--                          status = "for-recipient"-->
<!--                          :msg = recipientTest-->
<!--                      />-->
                      <bookingInfo
                          v-for="item in confirmedBookingsByProvider" :key="item.id"
                          status = "for-recipient"
                          :msg = item
                      />
                      <MDBBtn color="danger" @click="removeConfirmationNotification">
                        Kustuta teade
                      </MDBBtn>
                    </div>
                  </div>
                </section>
              </aside>
            </MDBCol>
            <MDBCol style="padding: 20px 5px 20px 5px" md="4">
              <h3>Sinulla on hetkellä - {{recipientBookings.length}} - avointa tilausta:</h3>
            </MDBCol>
          </MDBRow>








          <MDBRow v-for="(booking, index) in recipientBookings" :key="booking.id" class="bookings">

            <aside v-if="clientConfirmedBookings.some(ccb => ccb.id === booking.id)" id="info-block-confirmed" >
              <section class="file-marker">
                <div>
                  <div class="box-title-confirmed">
                    Varaus on vireillä, kun yritys vahvistaa sen.
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
                            @noSelected = noSelectUser
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
import providerFit from '../components/controllers/datetime'
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
    test: Boolean,
    chatusers: Array,

    selecteduser: null,
    messages: Array,
    recipientTest: null,
    recipientBookings: Array, // bookings from app (not active)

    confirmedBookingsByClient: Array,
    confirmedBookingsByProvider: Array,

  },
  data () {
    return {
      images: [],
      userId: null,
      //bookings: [],
      bookings: this.recipientBookings,
      provider: {},
      booking: null,
      isChat: false,
      selectedIndex: null,
      d: null,
      //confirmedBookings: [],
      confirmedBookings: this.recipientBookings.filter(booking => booking.status === "confirmed"),
      //clientConfirmedBookings: [],
      clientConfirmedBookings: this.recipientBookings.filter(cb => cb.status === "notSeen" || cb.status === "seen"),
      isBooking: false,
      //providerMatchByProfession: null,
      providerMatchByProfession: [],
      providerMatchingRequirements: null,
      line: "",
      recipientDateTime: null,
      providersAvailable: [],
      providersBusy: []
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
    handleUpdateBookingDate (nd) {
      this.recipientDateTime = new Date(nd.year, nd.month, nd.day, nd.hours, nd.minutes);
      console.log("recipient date time " + this.recipientDateTime);

    },
    selectUser (user) {
      this.$emit('select:user', user);
    },
    noSelectUser () {
      this.$emit("noSelected");
    },
    onMessage (content, date) {
      this.$emit("on:message", content, date);
    },
    bookingWaitingProBackBtn () {
      this.$emit("bookingWaitingProBack");
      this.noSelectUser();
      this.isChat = false
    },
    contactToProvider (booking, index) {
      console.log("Contact " + index);
      console.log("room xxx " + booking.ordered[0].yritys)
      //this.$router.push('/chat');
      const room = booking.ordered[0].yritys + booking.user.username;
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
      //let bookings = await recipientService.getOwnBookings(this.userId);


      //this.confirmedBookings = bookings.filter(booking => booking.status === "confirmed");

      this.confirmedBookings = this.recipientBookings.filter(booking => booking.status === "confirmed");


      //this.clientConfirmedBookings = bookings.filter(cb => cb.status === "notSeen" || cb.status === "seen");


      //this.bookings = bookings.filter(b => b.status !== "confirmed" && b.status !== "completed");

      this.bookings = this.recipientBookings.filter(b => b.status !== "confirmed" && b.status !== "completed");


      //this.bookings = bookings.filter(booking => booking.status === "waiting")

    },

    async handleRecipientResult (id) {
      //this.isAvailable = true
      console.log("Provider id is: " + id)

      this.booking = await recipientService.getBookingById(id);
      this.images = this.booking[0].image;
      /*this.booking[0].image.forEach(img => {
        console.log("x-x-x- " + img.name)
        this.images.push(img)
      })*/

      console.log("Profession: " + this.booking.map(b => b.professional))
      let temp = []
      //const profession = this.booking.map(b => b.professional)
      temp = this.booking[0].professional;
      console.log("Professional length " + this.booking[0].professional.length);
      this.booking.map(b => {

        this.recipientDateTime = new Date(b.onTime[0].year, b.onTime[0].month, b.onTime[0].day, b.onTime[0].hours, b.onTime[0].minutes)
        console.log("Recipient datetime: " + b.onTime[0].day)
      })

      console.log("xxx " + this.recipientDateTime.getTime())
      // TODO siia veel mitmuse vorm elukutse sobivuse kohalt otsingus
      this.line = temp[0]


      this.providerMatchByProfession = await providerService.getProvidersMatchingByProfession(
          {result: temp}
      )

      //this.providerMatchByProfession = this.providerMatchByProfession.filter(pro => pro.user.id !== this.userId);
      //this.providerMatchByProfession.filter(pro => pro.user.id !== this.userId);
      console.log("Pro user id " + this.providerMatchByProfession.map(p => p.user ? p.user.id !== this.userId : "EI ole kasutajat???"))
      // Remove matching providers if booking user is this provider

      //this.providerMatchByProfession = this.providerMatchByProfession.filter(pro => pro.user.id !== this.userId)

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
      } else if (content === "rating") {
        this.providerMatchByProfession.sort((a, b) => a.rating.positive - b.rating.positive);
        //this.providerMatchByProfession = this.providersAvailable + this.providersBusy;
      }
      // -------------- teha vaja siin -------------------
      this.handleFilterAvailability();

      //console.log("Filtering: " + this.providerMatchByProfession.map(pm => pm.distance))
    },
    handleFilterByFeedback () {
      console.log("By feedback")
    },
    handleFilterAvailability () {
      console.log("Heyy here")

      this.providerMatchByProfession.forEach(pro => {
        console.log("Recipient time " + this.recipientDateTime)
        if (pro.timeoffer) {
          pro.timeoffer.forEach(time => {
            if (
                providerFit.providerMatchingForClient(
                    this.recipientDateTime,
                    {y: time.yearFrom, m: time.monthFrom, d: time.dayFrom, hour: time.hoursFrom, min: time.minutesFrom},
                    {y: time.yearTo, m: time.monthTo, d: time.dayTo, hour: time.hoursTo, min: time.minutesTo}
                )
            ) {
              console.log("Is available " + pro.yritys)
              this.providersAvailable.push(pro)
            } else {
              console.log("Is not available provider yritys " + pro.yritys)
              this.providersBusy.push(pro);
            }
          })
        } else {
          console.log("Not timeoffer setted")
        }

      })

      console.log("Available length " + this.providersAvailable.length)
      console.log("Not available length " + this.providersBusy.length)

    },
    handleOrderToSend (id) {
      console.log("Order is sended " + id)
      this.clientConfirmedBookings = this.clientConfirmedBookings.concat(this.booking);
      //this.confirmedBookingsByClient = this.confirmedBookingsByClient.concat(this.booking)
      //this.bookings = this.bookings.filter(booking => booking.id !== id)
    },
    newBooking () {

      this.$router.push('/rf')


    },
    handleConfirmedProvider (provId) {
      this.providerMatchByProfession = this.providerMatchByProfession.filter(prov => prov.id !== provId);
      this.isBooking = false;
    },
    openMap () {
      const test = "Tehnika 1-5, Antsla"
      this.$router.push('/recipient-public', {params: test});

    },
    compareTime () {
      console.log("Month is: " + monthConverter.month(4))

      // console.log("Time comparison: " + (new Date(2023,3, 20, 10, 20).getTime()
      //     < new Date(2023, 3, 20, 11, 11).getTime()))
    },
    removeConfirmationNotification () {

    },
    handleEditDescription (description) {
      this.booking[0].description = description;
    },
    async handleAddImage (image) {
      console.log("Image id in upload " + image._id)
      console.log("Image image in upload " + image.image)
      console.log("Image name in upload " + image.name)

      this.images.push(image);


      //this.images.push(image);
      // this.$router.go()
      // this.isBooking = true;
    },
    handleEditImage (index, id, blob) {

      if (index !== -1) {
        this.images[index] = {_id: id, blob: blob};
      }

    },
    // handleEditImage (previous_image, current_image) {
    //   if (this.booking) {
    //     console.log("Image enne " + previous_image.name)
    //     console.log("Image pärast " + current_image.name)
    //     //this.booking= this.booking[0].image.filter(f => f.name === img.name);
    //
    //     var index = this.images.indexOf(previous_image);
    //     if (index !== -1) {
    //       this.images[index] = current_image;
    //     }
    //   }
    // },
    async handleRemoveImage (imageID) {
      //await recipientService.removeImage(this.booking[0].id, imageID);
      //this.images = this.images.filter(img => img._id !== imageID);
      this.images.splice(imageID, 1);
      console.log("Image removed from array")
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
  /*border: solid red;*/
  padding: 20px;
  overflow-y: auto;
}
.box-contents-confirmed {

  padding: 10px;
}
</style>