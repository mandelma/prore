<template>
  <div>

    <MDBContainer style="margin-top: 50px">

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
            @client:confirmed_provider = handleConfirmedProvider
            @removeBooking = handleRemoveBooking
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
            @initializeChat = handleInitializeChat
            @filter_provider = handleFilterProvider

            @otherUser = otherUser
        />
      </div>
      <div v-else>

        <div v-if="isSpinner" class="spinner-border" role="status">
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
                      <div class="flex flex-wrap align-items-center justify-content-center">
                        <div  class="scalein animation-duration-3000 animation-iteration flex align-items-center justify-content-center
                          font-bold   w-full ">
                          <bookingInfo
                              v-for="item in confirmedBookingsByProvider" :key="item.id"
                              status = "for-recipient"
                              :msg = item
                              @remove:complitedBookingPanel = handleRemoveComplitedBookingPanel
                          />
                        </div>
                      </div>

<!--                      <bookingInfo-->
<!--                          v-for="item in confirmedBookingsByProvider" :key="item.id"-->
<!--                          status = "for-recipient"-->
<!--                          :msg = item-->
<!--                          @remove:complitedBookingPanel = handleRemoveComplitedBookingPanel-->
<!--                      />-->

                    </div>
                  </div>
                </section>
              </aside>
            </MDBCol>
            <MDBCol style="padding: 20px 5px 20px 5px" md="4">
              <h3>Sinulla on hetkellä - {{recipientBookings.length}} - avointa tilausta:</h3>
            </MDBCol>
          </MDBRow>








          <MDBRow v-for="(booking, index) in recipientBookings" :key="index" class="bookings">

            <aside v-if="confirmedBookingsByClient.some(ccb => ccb.id === booking.id)" id="info-block-confirmed" >
              <section class="file-marker">
                <div>
                  <div class="box-title-confirmed">
                    Varaus on vireillä, kun yritys vahvistaa sen.
                  </div>
                  <div class="box-contents-confirmed">
                    <MDBRow>
                      <MDBCol>
                        {{booking.date}}
                        <p class="booking_time">
                          klo
                          {{booking.onTime[0].hours >= 10 ? booking.onTime[0].hours : "0" + booking.onTime[0].hours }} :
                          {{(booking.onTime[0].minutes) >= 10 ? booking.onTime[0].minutes : "0" + booking.onTime[0].minutes}}
                        </p>
                      </MDBCol>
                      <MDBCol>
                        {{booking.header}}
                      </MDBCol>
<!--                      isQuitBooking-->
                      <MDBCol >
                        <MDBBtn v-if="index === selectedIndex" outline="danger" block size="lg" @click="canselQuitSelectedBooking">Poistu</MDBBtn>
                        <MDBBtn v-else color="danger" @click="handleQuitSelectedBooking(index)" >Lopettaa tilaus</MDBBtn>
<!--                        <MDBBtn v-if="!isChat" outline="info" block size="lg" @click="contactToProvider(booking, index)">Ava chat</MDBBtn>-->



                      </MDBCol>
                    </MDBRow>
                    <MDBRow v-if="selectedIndex === index">

                      <MDBCol lg="8" style="text-align: center;">
                        <MDBTextarea
                            v-if="isQuitBooking"
                            white
                            style=""
                            label="Anna syy..."
                            rows="3"
                        >

                        </MDBTextarea>

                      </MDBCol>
                      <MDBCol lg="4">
                        <MDBBtn v-if="isQuitBooking" block color="success" size="lg>" style="margin-top: 10px;">Varmista</MDBBtn>
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
                  <p class="booking_time">
                    klo
                    {{booking.onTime[0].hours >= 10 ? booking.onTime[0].hours : "0" + booking.onTime[0].hours }} :
                    {{(booking.onTime[0].minutes) >= 10 ? booking.onTime[0].minutes : "0" + booking.onTime[0].minutes}}
                  </p>
                </MDBCol>

                <MDBCol>
                  {{booking.header}}
                </MDBCol>
                <MDBCol>
                  <MDBBtn outline="info" block size="lg" @click="handleRecipientResult(booking.id, booking)">Tilaus</MDBBtn>
                </MDBCol>
              </MDBRow>

            </aside>



          </MDBRow>


          <MDBBtn outline="info" block size="lg" @click="newBooking">Teen uuden tilauksen</MDBBtn>

        </div>

      </div>

<!--      client confirmed bookings {{confirmedBookingsByClient}}-->
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
  MDBCol,
  MDBTextarea
}from "mdb-vue-ui-kit";
import {ref} from "vue";
import liveChat from './LiveChat'
import providerFit from '../components/controllers/datetime'
/* eslint-disable */
//import dist from '../components/controllers/distance'
//import validateToken from "@/components/validateToken";
//import Fieldset from 'primevue/fieldset';

//import RecipientSuccess from '../components/RecipientSuccess'
import recipientResult from '../pages/RecipientPanelResult'
import providerService from '../service/providers'
import recipientService from '../service/recipients'
import bookingInfo from '../components/CompletedBookingPanel'
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
    recipientBookings: Array, // bookings from app (not active)  ?????????

    confirmedBookingsByClient: Array,
    confirmedBookingsByProvider: Array,

  },
  data () {
    return {
      id: "",
      isSpinner: false,
      images: [],
      userId: null,
      //bookings: [],
      //recipientBookings: [],
      bookings: this.recipientBookings,
      provider: {},
      booking: null,
      isQuitBooking: false,
      currentRoom: "",
      selectedIndex: null,
      isPressedQuit: false,
      d: null,
      //confirmedBookings: [],
      confirmedBookings: [] ,
      //confirmedBookings: this.recipientBookings.filter(booking => booking.status === "confirmed"),
      clientConfirmedBookings: [],
      //clientConfirmedBookings: this.recipientBookings.filter(cb => cb.status === "notSeen" || cb.status === "seen"),
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
    MDBCol,
    MDBTextarea
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
    handleQuitSelectedBooking (index) {
      this.selectedIndex = index;
      console.log("Index " + index)
      console.log("Selected index " + this.selectedIndex)
      this.isQuitBooking = true
    },
    canselQuitSelectedBooking () {
      this.isQuitBooking = false;
      this.selectedIndex = null;
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
    // bookingWaitingProBackBtn () {
    //   this.$emit("bookingWaitingProBack");
    //   this.noSelectUser();
    //
    // },
    // async contactToProvider (booking, index) {
    //   let bookings = await recipientService.getOwnBookings(this.userId);
    //   //this.handleRecipientBookings ();
    //   // console.log("Contact " + index);
    //   let room = "";
    //   if (booking.ordered.length > 0) {
    //     room = booking.ordered[0].yritys + booking.user.username;
    //   } else {
    //     room = this.currentRoom;
    //   }
    //   console.log("room xxx " + room);
    //   //this.$router.push('/chat');
    //   //const room = booking.ordered[0].yritys + booking.user.username;
    //   //console.log("Room in recipient panel " + room)
    //   socket.emit("update room", room);
    //   this.selectedIndex = index;
    //   this.isChat = true;
    // },
    otherUser (data) {
      this.$emit("otherUser", data)
    },
    // finalinfo (data) {
    //   console.log("Data in recipient panel " + data)
    //   this.$emit("finalinfo", data)
    // },
    handleInitializeChat (data) {
      this.$emit("initializeChat", data);
    },
    async handleRecipientBookings () {
      let bookings = await recipientService.getOwnBookings(this.userId);



      //this.confirmedBookings = bookings.filter(booking => booking.status === "confirmed");

      this.confirmedBookings = bookings.filter(booking => booking.status === "confirmed");


      this.clientConfirmedBookings = bookings.filter(cb => cb.status === "notSeen" || cb.status === "seen");


      //this.bookings = bookings.filter(b => b.status !== "confirmed" && b.status !== "completed");

      //this.recipientBookings = bookings.filter(b => b.status !== "confirmed" && b.status !== "completed");

      if (this.recipientBookings > 0) {
        if (!this.recipientBookings[0].onTime.month)
          this.isSpinner = true;
      }




      //this.bookings = bookings.filter(booking => booking.status === "waiting")

    },

    async handleRecipientResult (id, booking) {
      //this.isAvailable = true
      //console.log("Provider id is: " + id)

      //this.booking = await recipientService.getBookingById(id);
      this.booking = booking
      //this.images = this.booking[0].image;


      if (this.booking.image)
        this.images = this.booking.image;



      /*this.booking[0].image.forEach(img => {
        console.log("x-x-x- " + img.name)
        this.images.push(img)
      })*/

      //console.log("Profession: " + this.booking.map(b => b.professional))
      console.log("Profession: " + this.booking.professional)
      let temp = []
      //const profession = this.booking.map(b => b.professional)
      //temp = this.booking[0].professional;
      temp = this.booking.professional;
      console.log("Professional length " + this.booking.professional.length);
      // this.booking.map(b => {
      //
      //   this.recipientDateTime = new Date(b.onTime[0].year, b.onTime[0].month, b.onTime[0].day, b.onTime[0].hours, b.onTime[0].minutes)
      //   console.log("Recipient datetime: " + b.onTime[0].day)
      // })

      this.recipientDateTime = new Date(booking.onTime[0].year, booking.onTime[0].month, booking.onTime[0].day, booking.onTime[0].hours, booking.onTime[0].minutes)
      console.log("Recipient datetime: " + booking.onTime[0].day)

      console.log("xxx " + this.recipientDateTime.getTime())
      // TODO siia veel mitmuse vorm elukutse sobivuse kohalt otsingus
      this.line = temp[0]


      this.providerMatchByProfession = await providerService.getProvidersMatchingByProfession(
          {result: temp}
      )

      // User's own company do not included
      this.providerMatchByProfession = this.providerMatchByProfession.filter(pro => pro.user.id !== this.userId);


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
      let originLat = booking.latitude;
      let originLng = booking.longitude;
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

      //console.log("xxxxxx " + this.providerMatchByProfession.length)

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
    handleOrderToSend (provId, booking, navbarChatUser) {
      console.log("Order is sended " + booking.id)
      prov.id, this.booking, chatUserDataNavbar
      this.$emit("update:booking", booking.id);

      this.clientConfirmedBookings = this.clientConfirmedBookings.concat(this.booking);

    },
    newBooking () {

      this.$router.push('/rf')


    },
    handleConfirmedProvider (provId, booking, navbarChatUser) {
      this.currentRoom = navbarChatUser.room;
      this.providerMatchByProfession = this.providerMatchByProfession.filter(prov => prov.id !== provId);
      this.$emit("setNavbarChatUser", booking,  navbarChatUser);
      console.log("nb chat user start " + navbarChatUser.name);
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
      this.booking.description = description;
    },
    async handleAddImage (image, bookingID) {
      console.log("Image id in upload " + image._id)
      console.log("Image image in upload " + image.image)
      console.log("Image name in upload " + image.name)
      this.$emit("addImageToRecipientBookings", image, bookingID)
      this.images = [
          ...this.images,
          image
      ]


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
    },
    async handleRemoveComplitedBookingPanel (booking) {
      //console.log("Removed complited booking " + booking.id)

      //console.log("Provider data +++ id " + booking.ordered[0].id);
      //console.log("Provider data +++ recipient userID " + booking.ordered[0].user.id);
      this.$emit('setNavbarFeedbackNotification', booking)



      await recipientService.updateRecipient(booking.id, {status: "completed"});
    },


    async handleRemoveBooking (id) {
      console.log("Removing booking id " + id);
      this.isBooking = false;

      this.$emit("removeRecipient", id)
      //await recipientService.removeBooking(id);

      //await recipientService.removeBooking(id);

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
.booking_time {
  color: #817d7d;
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
  background: #141414 none repeat scroll 0 0;
  display: inline-block;
  /*padding: 0 2px;*/
  font-size: 16px;
  padding: 0 10px;

  margin-left: 8em;
}
.box-title-confirmed {
  background: #141414 none repeat scroll 0 0;
  display: inline-block;
  color: #f18080;
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