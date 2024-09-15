<template>
  <div>

    <MDBContainer style="margin-top: 100px; position: relative;">
      <div v-if="bookings.length === 0" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else>
        <MDBBtnClose
            white
            class="close_btn"
            @click="backFromProNotifications"
        />
        <MDBRow v-for="(booking, index) in bookings.length > 0 ? bookings : allBookings" :key="index" style="margin-bottom: 10px; padding: 20px;">
          <MDBCol style="border: 1px solid #ddd; padding: 30px; font-size: 18px" sm="4"

                  :class="[{ activeHeader: index === bookingIndex && isBooking }]">


            <span v-if="booking.status === 'notSeen'" :class="{'strong-tilt-move-shake': isNoLimit && index === bookingIndex}">
              <span class="new_notification" @click="messageSeen(booking, index)">
                ( <b>{{booking.user.username}}</b> )
                <monthConverter :num = booking.onTime[0].month />
                {{booking.onTime[0].day}}
                {{booking.onTime[0].year}}
                -
                {{booking.header}}

                <span style="display: flex; justify-content: right; color: deepskyblue;">
                  {{booking.isIncludeOffers ? (booking.status === "offered" ? "Tarjous lähetetty" : "Lähetä tarjous")  : "Varmista tilaus"}}
                </span>


<!--                </b>-->
              </span>

            </span>
            <span v-else :class="{'strong-tilt-move-shake': isNoLimit && index === bookingIndex}">
              <span class="seen_notification" @click="messageSeen(booking, index)">


                ( <b>{{booking.user.username}}</b> )
                <monthConverter :num = booking.onTime[0].month />
                {{booking.onTime[0].day}}
                {{booking.onTime[0].year}}
                -
                {{booking.header}}

                <span style="display: flex; justify-content: right; color: deepskyblue;">
<!--                  {{booking.isIncludeOffers ? "Lähetä tarjous" : "Varmista tilaus"}}-->
                  {{booking.isIncludeOffers ? ( booking.status === "offered" ? "Tarjous lähetetty" : "Lähetä tarjous")  : "Varmista tilaus"}}
                </span>

              </span>

            </span>


          </MDBCol>
          <MDBCol sm="8" >
            <h4
                v-if="isNoLimitText && index === bookingIndex"
                style="color: palevioletred; text-underline: cornflowerblue; cursor: pointer; margin-top: 10px;"
                @click="$router.push('/pay-plan')"
            >
              Lataa lisää aikaa täältä
            </h4>

            <Booking

                v-if="isBooking && index === bookingIndex"
                :booking = booking
                :bookingImages = bookingImages
                @set:room = handleSetRoom
                @create:offer = handleCreateOffer
                :selected_room = room
                :chatusers = chatusers
                :messages = messages
                @select:user = selectUser
                @noSelected = noSelected
                :selecteduser = selecteduser
                @on:message = onMessage
                @close:booking = handleCloseBooking
                @confirm:booking = handleConfirmBooking
                @reject:booking = handleRejectBooking
            />
            <div v-else-if="creditLeft < 0 && index === bookingIndex">
              <h2 >Rajoitettu pääsy!</h2>
              <p
                  style="color: orangered; cursor: pointer;"
                  @click="$router.push('/pay-plan')"
              >
                Lataa lisää aikaa
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
<!--    bookings {{bookings}}-->
<!--    <p style="color:red;">booking {{booking}}</p>-->
<!--    bookings -&#45;&#45; {{bookings.map(b => b.user.id)}}-->
  </div>
</template>

<script>
/* eslint-disable */

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBTabs,
  MDBTabNav,
  MDBTabItem,
  MDBTabContent,
  MDBTabPane,
  MDBTable,
  MDBBtnClose,
  MDBBtn
} from "mdb-vue-ui-kit";
import { ref } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import monthConverter from '../components/controllers/month-converter'
import recipientService from '../service/recipients'
import providerService from '../service/providers'

import User from '../components/chatio/User'
import MessagePanel from '../components/chatio/MessagePanel.vue'
import chatContent from '../components/chatio/Chat'
import liveChat from '../pages/LiveChat'
import Booking from '../pages/Booking.vue'
//import selectUser from '../components/chatio/SelectUser.vue'
import socket from "@/socket";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import offerService from "@/service/offers";
//import socket from '../socket'
export default {
  name: "client-notifications",
  props: {
    bookings: Array,
    chatusers: Array,
    activeUser: null,
    selecteduser: null,
    creditLeft: null,
    messages: Array,
    loggedInUser: Object,
    userIsProvider: Object,
    room: String
  },
  components: {
    User,
    MessagePanel,
    PulseLoader,
    monthConverter,

    TabView,
    TabPanel,

    chatContent,
    liveChat,
    Booking,
    //recipientService,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBTabs,
    MDBTabNav,
    MDBTabItem,
    MDBTabContent,
    MDBTabPane,
    MDBTable,
    MDBBtnClose,
    MDBBtn
  },
  setup () {
    const activeTabId4 = ref('null');
    //const scrollableTabs = ref(Array.from({ length: 2 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` })));
    //const scrollableTabs = ref(Array.from({ length: 2 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` })));

    return {
      activeTabId4,
      //scrollableTabs
    }
  },
  data () {

    return {
      selectedUser: null,
      userIn: null,
      allBookings: [],
      proBookings: this.bookings,
      // Current provider id (this booking)
      providerID: null,
      selectedPro: "",
      isBooking: false,
      isOfferCreated: false,
      bookingID: null,
      pressed: false,
      bookingIndex: null,
      booking: {},
      bookingImages: [],

      currentRoom: "",
      isAccessTerminated: false,
      bookingDate: null,
      isSeen: false,
      isOpenImage: false,
      isImageOpen: false,
      srcImg: "",
      isChatOpen: false,
      isRenderData: false,

      loading: false,
      id: null,
      un: "sanna",
      ri: "",

      room: "",

      isChat: false,

      isPressedOpenChat: false,
      isPressedContactToUser: false,
      isConnection: false,

      isPressedFinal: false,

      count: 0,
      isNoLimit: false,

      isNoLimitText: false

    }
  },

  mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (!loggedUserJSON) {
      this.$router.push('/')
    } else {
      const user = JSON.parse(loggedUserJSON)
      this.userIn = user

      this.handleBookings();

    }

  },

  methods: {
    backFromProNotifications () {
      //window.localStorage.removeItem('selectedChatUser');
      this.$router.go(-1)
    },
    avajauuenda () {
      this.isChat = true;
      this.count++;
    },

    selectUser(user) {
      this.$emit("select:user", user)
      //if (!user.self)
        //this.selectedUser = user;
    },

    noSelected () {
      this.$emit("noSelected");
    },

    onMessage(content, date) {
      this.$emit("on:message", content,date);

    },

    renderComponent () {
      this.isChat = true;

      socket.on('get updated room users', (data) => {
        console.log("xx-notification " + data.users.length)
        if(data.users.length > 1)
          this.isTwoUsersOnline = true;
      })

    },

    async handleBookings () {
      const user = await providerService.getProvider(this.userIn.id)
      this.providerID = user.id;
      this.selectedPro = user.yritys;
      //const prviderBookings = this.userIsProvider.confirm:booking
      // Bookings what provider getting from recipient
      if (user) {

        //this.bookings = user.booking.filter(ub => ub.status !== "confirmed" && ub.status !== "waiting" && ub.status !== "completed")
        this.allBookings = user.booking.filter(bk => bk.status !== "offered" && bk.status !== "completed" && bk.status !== "confirmed" );
        //this.proBookings = this.allBookings;
      }
    },
    createBookingDate () {
      this.bookingDate = 22  //monthConverter(4);
    },
    async getImageSize (image) {
      let img = new Image();
      img.src = require(`/server/uploads/${image}`)
      await img.decode();
      let width = img.width;
      let height = img.height;
      return {
        width,
        height,
      }
    },
    handleOpenBooking (bookingData, index) {
      //if (((this.userIsProvider.proTime - new Date().getTime()) / 86400000).toFixed() > 0) {
        // const header = document.getElementById("header")
        //
        // console.log("Booking user id: " + bookingData.user.id)
        //
        //
        // this.bookingIndex = index  //bookingData.id;
        // this.isBooking = true;

        //this.pressed =  index === 1;
        // if (bookingData.id)
        //   header.style.backgroundColor = "red";
        //this.booking = bookingData;
        // if (bookingData.image) {
        //
        //   bookingData.image.forEach(img => {
        //     this.getImageSize (img.name)
        //         .then(item => {
        //           this.bookingImages = [
        //             ...this.bookingImages,
        //             {
        //               id: img._id,
        //               size: item.width + "-" +item.height,    //'1400-933', //item.size,
        //               src: require(`/server/uploads/${img.name}`),
        //               thumb: require(`/server/uploads/${img.name}`),
        //               subHtml: `<div class="lightGallery-captions">
        //         <h2>Terve</h2>
        //
        //     </div>"`
        //             }
        //           ]
        //         })
        //
        //   })
        // } else {
        //
        // }
      //}

    },
    handleCloseBooking () {
      this.isBooking = false;
    },

    handleSetRoom (room) {
      this.$emit("set:room", room);
    },
    messageSeen (booking, index) {
      this.bookingIndex = index
      // Siin vaja parandada
      //if (((this.userIsProvider.proTime - new Date().getTime()) / 86400000).toFixed() > 0) {
      if (this.creditLeft > 0) {
        this.bookingImages = [];
          //bookingData.id;
        this.isBooking = true;
        if (booking.image) {

          booking.image.forEach(img => {
            this.getImageSize (img.name)
                .then(item => {
                  this.bookingImages = [
                    ...this.bookingImages,
                    {
                      id: img._id,
                      size: item.width + "-" +item.height,    //'1400-933', //item.size,
                      src: require(`/server/uploads/${img.name}`),
                      thumb: require(`/server/uploads/${img.name}`),
                      subHtml: `<div class="lightGallery-captions">
                <h2>Terve</h2>

            </div>"`
                    }
                  ]
                })

          })
        } else {
          this.isAccessTerminated = true;
        }


        this.isSeen = true;

        this.booking = booking;

        this.ri = this.userIsProvider.yritys + booking.user.username;
        console.log("Ri means: " + this.ri)

        const room = this.userIsProvider.yritys + booking.user.username;

        const username = this.userIn.username;
        //const room = this.ri;

        this.room = room;

        //this.$emit("set:room", room);

        //socket.emit("update room", room)
        //this.$emit("update:proChatNav")

        this.id = booking.id;
        // booking.offers.length < 1
        if (booking.status !== "offered") {
          this.editStatus(booking.id, "seen");
        }

      } else {
        this.isNoLimitText = true;
        this.isNoLimit = true;
        setTimeout(() => {
          this.isNoLimit = false;
        }, 500);

      }

    },
    async handleCreateOffer (price, text, booking) {
      const pro = this.userIsProvider;
      const offer = {
        name: pro.yritys,
        distance: 33,
        duration: 50,
        price: price,
        description: text,
        provider: pro.id
      };
      const created_offer = await offerService.addOffer(offer);
      if (created_offer) {
        this.isOfferCreated = true;
      }
      console.log("Created offer id is " + created_offer.id);
      //const bookings = this.bookings.length > 0 ? this.bookings : this.allBookings;
      this.allBookings = this.allBookings.filter(b => b.id !== booking.id);
      this.isBooking = false;
      const created_booking = await recipientService.createOffer(booking.id, created_offer.id);
      this.$emit("create:offer", offer, booking)
      const newBooking = booking;
      console.log("BBBBBBBB booking " + booking.user.id)
      newBooking.offers.concat(created_offer);
      socket.emit("send offer", booking);
    },
    async editStatus (id, status) {
      const update = {
        status: status
      }
      const updatedStatus = await recipientService.updateRecipient(id, update);
      console.log("Is status updated: " + updatedStatus.status);
      this.$emit('update:status', id)
    },
    openImagePanel (image) {
      this.isOpenImage = true;
      this.srcImg = require(`@/assets/client/${image.map(im => im.name)}`)
      if (this.srcImg !== '') {
        this.isImageOpen = true;
      }


    },
    async handleConfirmBooking (booking) {
      console.log("Booking header " + booking.header)
      console.log("confirmed booking id " + booking.id)
      console.log("Confirmed booking user id " + booking.user.id)

      //console.log("bbbbbooookingggg " +)

      this.editStatus (booking.id, "confirmed")
      // Kas lihtsalt booking argumentidest ei sobi??


      // const receiver = await recipientService.getBookingById(booking.id)
      // const receiver_id = receiver.user.id;
      // console.log("Confirmed booking user id 2 " + receiver.user.id)

      this.$emit("remove:booking", booking.id);
      this.isBooking = false;
      // Need recipient id
      // socket.emit("accept recipient booking", {
      //   id: receiver_id, //booking.user.id,
      //   booking: booking
      //
      // })

      socket.emit("accept recipient booking", {
        id: booking.user.id, //booking.user.id,
        booking: booking

      })

      this.bookings = this.bookings.filter(b => b.id !== booking.id);
      if (this.bookings.length < 1) {
        //this.$router.push('/');
        this.$router.go(-1);
      }


      //this.$emit('deactivate:bell', false)
    },
    closeImagePanel () {
      this.isOpenImage = false;
      this.isImageOpen = false;
    },
    async handleRejectBooking (booking, reason) {
      const rejBooking = await recipientService.getBookingById(booking.id)
      const userIdToSend = rejBooking.user.id;
      this.editStatus (booking.id, "waiting")
      this.$emit("reject:bookingByPro", rejBooking, this.room, this.providerID);
      socket.emit("reject booking by pro", {
        id: userIdToSend,
        room: this.room,
        pro: this.selectedPro,
        booking: booking,
        reason: reason
      })
      console.log("Test pro id " + userIdToSend)
      this.bookings = this.bookings.filter(b => b.id !== booking.id);
      if (this.bookings.length < 1) {
        //this.$router.push('/');
        this.$router.go(-1);
      }
    },


    exitFromNotificationData () {
      location.reload();
    }
  },
}
</script>

<style scoped>
.dataContainer {
  border: solid 1px #66aab1;
  padding: 20px;
}
.closeData {
  float: right;
}
.closeData:hover {
  color: red;
}
b, p {
  cursor:pointer;
  font-size: 16px;
}

b {
  font-weight: bold;
  font-size: 2rem;
  color: #ed8b49;
}

/*img.loading {
  width: 100%;
  height: 400px;
  background: transparent url(https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif) no-repeat scroll center center;
}*/
#header {
  padding: 20px;
  background-color: #878383;
  font-size: 18px;
}

.activeHeader {
  padding: 20px;
  background-color: #2d2e2d;
  font-size: 18px;
}

.new_notification {
  font-size: 1.5rem;
  color: cornflowerblue;
}
.seen_notification {
  font-size: 1.5rem;
}

span {

  /*background: #48abe0;*/
  /*color: white;*/
  /*padding: 1.5rem;*/
  /*font-size: 2rem;*/
  display: inline-block;
}

span.strong-tilt-move-shake {
  animation: tilt-n-move-shaking 0.15s;
}

@keyframes tilt-n-move-shaking {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(5px, 5px) rotate(5deg); }
  50% { transform: translate(0, 0) rotate(0deg); }
  75% { transform: translate(-5px, 5px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}
.close_btn {
  position: absolute;
  right: 20px;
  top: -30px;
  cursor: pointer;
  font-weight: bold;
}

</style>