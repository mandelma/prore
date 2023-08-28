<template>
  <div>


    <MDBContainer style="margin-top: 200px;">


      <div v-if="bookings.length === 0" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>

<!--      <div v-if="bookings.length === 0">
        <h2>Uued broneeringud hetkel puuduvad!</h2>
      </div>-->








      <div v-else>

        <MDBTabs
            v-model="activeTabId4"
            vertical="lg"
            v-for="(booking, index) in bookings" :key="index"
        >
          <!-- Tabs navs -->
          <MDBTabNav pills tabsClasses="mb-3 text-center" v-if="booking.state !== 'confirmed'">
            <MDBTabItem :wrap="false" tabId ={{booking.id}} href={{booking.id}}>
              <b
                  v-if="booking.status === 'notSeen'"
                  @click="messageSeen(booking)"
              >
                <monthConverter :num = booking.onTime[0].month />
                {{booking.onTime[0].day}}
                {{booking.onTime[0].year}}
                -
                {{booking.header}}

              </b>
              <p v-else @click="messageSeen(booking)">
                <monthConverter :num = booking.onTime[0].month />
                {{booking.onTime[0].day}}
                {{booking.onTime[0].year}}
                -
                {{booking.header}}
              </p>
            </MDBTabItem>

          </MDBTabNav>
          <!-- Tabs navs -->
          <!-- Tabs content -->
          <MDBTabContent>
            <MDBTabPane tabId={{booking.id}} href="{{booking.id}}" class="dataContainer">
              <MDBTable borderless style="font-size: 18px; text-align: left;">
                <tbody>
                <tr>
                  <td>
                    {{booking.address}}
                    <MDBBtnClose
                        class="closeData"
                        @click="exitFromNotificationData"
                    />
                  </td>
                </tr>
                <tr>
                  <td style="border: solid blue">
                    {{booking.description}}
                  </td>
                </tr>
                <tr >

                  <td v-if="booking.image">
                    <MDBBtn
                        v-if="!isImageOpen"
                        outline="success"
                        @click="openImagePanel(booking.image)"
                    >
                      Open image
                    </MDBBtn>

                    <div >

                      <img
                          v-if="isOpenImage" id="img"
                          class="loading"
                          :src= srcImg

                          alt="kuva"
                      >

                      <MDBBtn
                          v-if="isImageOpen"
                          outline="secondary"
                          @click="closeImagePanel"
                      >
                        Close image
                      </MDBBtn>
                    </div>


                  </td>
                </tr>
                <tr>
                  <td>


                    <chat

                        :un = userIsProvider.yritys
                        :ri = ri
                    />

                  </td>
                </tr>
                <tr>
                  <td>
                    <MDBBtn
                        block outline="success"
                        @click="confirmBooking(booking.id)"
                    >
                      Kinnita tellimus
                    </MDBBtn>
                  </td>
                </tr>
                </tbody>
              </MDBTable>
            </MDBTabPane>
          </MDBTabContent>


          <!-- Tabs content -->
        </MDBTabs>
      </div>
      <!--      {{bookings}}-->

    </MDBContainer>

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
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import monthConverter from '../components/controllers/month-converter'
import recipientService from '../service/recipients'
import providerService from '../service/providers'
import chat from '../pages/LiveChat.vue'
import chatContent from '../components/chatio/Chat'
//import selectUser from '../components/chatio/SelectUser.vue'
import socket from "@/socket";
//import socket from '../socket'
export default {
  name: "client-notifications",
  props: {
    //bookings: Array,
    loggedInUser: Object,
    userIsProvider: Object
  },
  components: {

    PulseLoader,
    monthConverter,
    chat,
    chatContent,
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
  data () {

    return {
      userIn: null,
      bookings: [],

      currentRoom: "",

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
      ri: ""


      //user: ''

    }
  },
  onMounted () {


  },
  /*beforeMount () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.userIn = user
      console.log("User in notification: " + user.username)

      this.handleBookings();
    }
  },*/
  mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.userIn = user
      console.log("User in notification: " + user.username)

      this.handleBookings();
    }

  },

  methods: {
    async handleBookings () {
      const user = await providerService.getProvider(this.userIn.id)
      //const prviderBookings = this.userIsProvider.booking
      // Bookings what provider getting from recipient
      if (user) {
        this.bookings = user.booking.filter(ub => ub.status !== "confirmed")

      }
    },
    createBookingDate () {
      this.bookingDate = 22  //monthConverter(4);
    },
    messageSeen (booking) {
      //console.log("Readed b " + booking.user.username)
      this.isSeen = true;
      this.isChatOpen = true;
      this.isRenderData = true;

      this.ri = this.userIsProvider.yritys + booking.user.username;
      console.log("Ri means: " + this.ri)


      // User's data
      const username = this.userIn.username;
      const room = this.ri;

      // connect to socket
      // this.usernameAlreadySelected = true;
      // socket.auth = { username, room };
      // socket.connect();

      // Updating socket room
      socket.emit('updateRoom', this.ri);
      socket.disconnect();
      socket.connect();



      socket.emit("room users account")
      socket.on('get room users account', (data) => {
        console.log("Can we get users data from backend here??? " + data.users.length)

      })


      // socket.emit('updateRoom', this.ri);
      // socket.disconnect();
      // socket.connect();
      //
      // socket.on('get room users', (data) => {
      //   console.log("Room current is: " + data.room)
      //   this.currentRoom = data.room;
      // })




      //providerService.addRoom(this.userIsProvider.id, {room: room})

      this.id = booking.id;
      //console.log("Idxxxxx " + booking.id)
      this.editStatus(booking.id, "seen");
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
    confirmBooking (id) {
      console.log("confirmed booking id" + id)
      this.editStatus (id, "confirmed")

      this.$emit("remove:booking", id);
      this.$emit('deactivate:bell', false)
    },
    closeImagePanel () {
      this.isOpenImage = false;
      this.isImageOpen = false;
    },


    exitFromNotificationData () {
      location.reload();
    }
  }
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
  color: blue;
}

img.loading {
  width: 100%;
  height: 400px;
  background: transparent url(https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif) no-repeat scroll center center;
}

</style>