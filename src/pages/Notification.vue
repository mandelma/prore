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
              <MDBTable borderless style="font-size: 18px; text-align: center;">
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


<!--                    <chat

                        :un = userIsProvider.yritys
                        :ri = ri
                    />-->


                  </td>
                </tr>
                <tr>
                  <td>


<!--                    <form @submit.prevent="kirjuta">-->

<!--                    </form>-->


                  </td>
                </tr>
                <tr>
                  <td>
<!--                    <MDBBtn-->
<!--                        v-if="!isPressedContactToUser"-->
<!--                        type="submit"-->
<!--                        size="lg"-->
<!--                        color="success"-->
<!--                        @click="contactToUser"-->
<!--                    >-->
<!--                      contact to user-->
<!--                    </MDBBtn>-->
                    <form @submit.prevent="contactToUser">

                    </form>
                    <form @submit.prevent="contactToUser">
                      <MDBBtn
                          v-if="isPressedOpenChat && !isPressedFinal"
                          type="submit"
                          size="lg"
                          color="success"

                      >
                        Saada kasutajale sõnum
                      </MDBBtn>
                    </form>

                    <form @submit.prevent="avajauuenda">
                      <MDBBtn

                          type="submit"
                          size="lg"
                          color="success"

                      >
                        Ava chat
                      </MDBBtn>
                    </form>

                  </td>
                </tr>
                <tr>
                  <td>

<!--                    <div v-if="bookings.length === 0" class="spinner-border" role="status">-->
<!--                      <span class="visually-hidden">Loading...</span>-->
<!--                    </div>-->






<!--                    <chat-->
<!--                        v-if="isChat"-->
<!--                        :key="count"-->
<!--                        :room = room-->
<!--                        :chatusers = chatusers-->

<!--                    />-->

<!--                    @select="selectUser(user)"-->

                    <div v-for="user in chatusers" :key="user.userID">
                      <User
                          :user = user
                          :selected="selectedUser === user"
                          @select="selectUser(user)"
                      />
                    </div>



                    <MessagePanel
                        v-if="selectedUser"
                        :user = selectedUser
                        @new:message="onMessage"
                    />




<!--                    <MDBBtn-->
<!--                        v-if="!isChat"-->
<!--                        type="submit"-->
<!--                        size="lg"-->
<!--                        color="success"-->
<!--                        @click="renderComponent"-->
<!--                    >-->
<!--                      Saada kliendile sõnum-->
<!--                    </MDBBtn>-->
                  </td>


                </tr>
                </tbody>
              </MDBTable>
              <MDBBtn
                  block
                  outline="success"

                  @click="confirmBooking(booking.id)"
              >
                Kinnita tellimus
              </MDBBtn>
<!--              <span v-if="!isChat" @click="renderComponent">Click to reload render-component</span>-->

<!--              <MDBBtn @click="this.$router.push('/chat').then(() => { this.$router.go() })">-->
<!--                Send message...-->
<!--              </MDBBtn>-->


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

import User from '../components/chatio/User'
import MessagePanel from '../components/chatio/MessagePanel.vue'
import chatContent from '../components/chatio/Chat'
//import selectUser from '../components/chatio/SelectUser.vue'
import socket from "@/socket";
//import socket from '../socket'
export default {
  name: "client-notifications",
  props: {
    //bookings: Array,
    chatusers: Array,
    loggedInUser: Object,
    userIsProvider: Object,
    room: String
  },
  components: {
    User,
    MessagePanel,
    PulseLoader,
    monthConverter,

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
      selectedUser: null,
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
      ri: "",

      room: "",

      isChat: false,

      isPressedOpenChat: false,
      isPressedContactToUser: false,
      isConnection: false,

      isPressedFinal: false,


      count: 0,

      //isTwoUsersOnline: false,

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
  beforeMount () {
    //socket.disconnect();
    //socket.connect();
  },
  mounted () {
    //socket.disconnect();
    //socket.connect();
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.userIn = user
      //console.log("User in notification: " + user.username)

      this.handleBookings();
    }

  },

  methods: {

    avajauuenda () {
      this.isChat = true;
      this.count++;
    },

    selectUser(user) {
      this.$emit("select:user", user)
      this.selectedUser = user;
    },

    onMessage(content, date) {
      this.$emit("on:message", content,date);
      // console.log("Saadan teate")
      // if (this.selectedUser) {
      //   console.log("Selected user: " + this.selectedUser.username);
      //   socket.emit("private message", {
      //     content,
      //     date,
      //     to: this.selectedUser.userID,
      //   });
      //   this.selectedUser.messages.push({
      //     content,
      //     date,
      //     fromSelf: true,
      //   });
      // }
    },

    kirjuta () {

      let username = "aaa"
      let room = "Oopersama"

      socket.auth = { username, room };
      socket.connect();

      //let newRoom = "Oopersama"

      //socket.emit('updateRoom', newRoom);
      //this.$router.push("/chat")

    },
    // initChat () {
    //
    //   this.isChat = true;
    //   this.isPressedOpenChat = true;
    //
    //   this.count ++;
    //
    // },
    // contactToUser() {
    //
    //   this.isPressedContactToUser = true;
    //   if (this.room) {
    //     socket.emit('updateRoom', this.room);
    //   }
    //
    //   socket.on('get updated room users', (data) => {
    //     console.log("New users update " + data.users.length)
    //     if (data.users.length > 1) {
    //       this.isConnection = true;
    //     } else {
    //       this.isConnection = false;
    //     }
    //
    //   })
    //
    //
    //   socket.disconnect()
    //   socket.connect()
    // },

    initChat () {
      //const sessionID = localStorage.getItem("sessionID");

      // if (sessionID === null) {
      //   //console.log("Aaaaaaaa")
      //   let username = "tehnika-notification";
      //   let room = "viking";
      //
      //   //this.usernameAlreadySelected = true;
      //   socket.auth = { username, room };
      //   socket.connect();
      // }

      this.isChat = true;
      this.isPressedOpenChat = true;







      //socket.emit('updateRoom', this.room);

      // for (let i = 0; i<2; i++) {
      //   socket.emit('updateRoom', this.room);
      //
      //   socket.disconnect();
      //   socket.connect();
      // }
      //
      // this.renderComponent();
    },
    contactToUser() {
      // this.isChat = true;
      // this.isPressedContactToUser = true;
      // if (this.room !== "") {
      //   socket.emit('updateRoom', this.room);
      // }
      //
      // socket.on('get updated room users', (data) => {
      //   console.log("New users update " + data.users.length)
      //   this.isConnection = data.users.length > 1;
      //
      // })
      // this.isPressedFinal = true;
      //
      // socket.disconnect()
      // socket.connect()
    },
    renderComponent () {
      this.isChat = true;

      socket.on('get updated room users', (data) => {
        console.log("xx-notification " + data.users.length)
        if(data.users.length > 1)
          this.isTwoUsersOnline = true;
      })

      //this.count++

      //console.log("Count value: " + this.count)
    },
    // testSubmitButton (event) {
    //   event.preventDefault();
    //   console.log("Test submit here")
    // },

    async handleBookings () {
      const user = await providerService.getProvider(this.userIn.id)
      //const prviderBookings = this.userIsProvider.booking
      // Bookings what provider getting from recipient
      if (user) {
        this.bookings = user.booking.filter(ub => ub.status !== "confirmed" && ub.status !== "waiting")

      }
    },
    createBookingDate () {
      this.bookingDate = 22  //monthConverter(4);
    },
    messageSeen (booking) {
      //console.log("Readed b " + booking.user.username)
      //window.location.replace("/notification");
      this.isSeen = true;
      // this.isChatOpen = true;
      // this.isRenderData = true;

      //this.$emit("create:user");

      this.ri = this.userIsProvider.yritys + booking.user.username;
      console.log("Ri means: " + this.ri)

      this.room = this.userIsProvider.yritys + booking.user.username;
      // User's data
      const username = this.userIn.username;
      const room = this.ri;

      const chatCredentials = {
        room: room,
        userID: this.userIn.id,
        username: username,
      }

      this.$emit("chatCredentials", chatCredentials)

      // socket.emit("get chat users")
      // socket.on("userOnline", (data) => {
      //   console.log("Users in notification: " + data.users.map(u => u.self))
      // })

      // socket.disconnect();
      // socket.connect();

      //this.$emit("activate:bell", "active")

      // connect to socket
      // this.usernameAlreadySelected = true;


      // Updating socket room

      //socket.disconnect();
      //socket.connect();

      //socket.disconnect()
      //socket.connect()



      socket.emit('updateRoom', this.ri);
      // let rooms = ["Oopersama", "tvsama"]
      // socket.emit("join all room", rooms);




      // if (socket.connected) {
      //   console.log("Socket.io is connected")
      //   socket.emit('updateRoom', this.ri);
      // } else {
      //   console.log("Socket.io is not connected")
      //   //this.usernameAlreadySelected = true;
      //   socket.auth = { username, room };
      //   socket.connect();
      // }



      socket.emit("room users count")
      socket.on('get room users count', (data) => {
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
      //console.log("confirmed booking id" + id)
      this.editStatus (id, "confirmed")

      this.bookings = this.bookings.filter(booking => booking.id !== id);
      if (this.bookings.length < 1) {
        this.$router.push('/');
      }

      this.$emit("remove:booking", id);
      //this.$emit('deactivate:bell', false)
    },
    closeImagePanel () {
      this.isOpenImage = false;
      this.isImageOpen = false;
    },


    exitFromNotificationData () {
      location.reload();
    }
  },
  // created() {
  //
  //   console.log("Heiiiii")
  //
  //   const sessionID = localStorage.getItem("sessionID");
  //   console.log("Session id " + sessionID)
  //   if (sessionID) {
  //     this.usernameAlreadySelected = true;
  //     socket.auth = { sessionID };
  //     socket.connect();
  //   }
  //
  //   socket.on("session", ({ sessionID, userID, roomName }) => {
  //     // attach the session ID to the next reconnection attempts
  //     socket.auth = { sessionID };
  //     // store it in the localStorage
  //     localStorage.setItem("sessionID", sessionID);
  //
  //
  //     // save the ID of the user
  //     socket.userID = userID;
  //     socket.roomName = roomName;
  //   });
  //
  //   socket.on("connect_error", (err) => {
  //     if (err.message === "invalid username") {
  //       this.usernameAlreadySelected = false;
  //     }
  //   });
  // },
  // unmounted() {
  //   socket.off('connect_error');
  //   //socket.off("disconnect");
  // }
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