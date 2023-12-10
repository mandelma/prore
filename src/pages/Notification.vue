<template>
  <div>

    <MDBContainer style="margin-top: 0; ">
      <div v-if="bookings.length === 0" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else>
        <MDBRow v-for="(booking, index) in bookings" :key="index" style="margin-bottom: 10px;">
          <MDBCol style="border: 1px solid black; padding: 20px; font-size: 18px" sm="4"  @click="handleOpenBooking(booking, index)"

                  :class="[{ activeHeader: index === bookingIndex && isBooking }]">
            <b
                v-if="booking.status === 'notSeen'"
                @click="messageSeen(booking)"
            >
              (<b>{{booking.user.username}}</b>)
              <monthConverter :num = booking.onTime[0].month />
              {{booking.onTime[0].day}}
              {{booking.onTime[0].year}}
              -
              {{booking.header}}

            </b>
            <p v-else @click="messageSeen(booking)">
              (<b>{{booking.user.username}}</b>)
              <monthConverter :num = booking.onTime[0].month />
              {{booking.onTime[0].day}}
              {{booking.onTime[0].year}}
              -
              {{booking.header}}
            </p>

          </MDBCol>
          <MDBCol sm="8" >
            <Booking

                v-if="isBooking && index === bookingIndex"
                :booking = booking
                :chatusers = chatusers
                :messages = messages
                @select:user = selectUser
                :selecteduser = selecteduser
                @on:message = onMessage
                @close:booking = handleCloseBooking
                @confirm:booking = handleConfirmBooking
            />
          </MDBCol>
        </MDBRow>
      </div>






<!--      <div >-->

<!--        <MDBTabs-->
<!--            v-model="activeTab"-->
<!--            vertical="lg"-->
<!--            v-for="(booking, index) in bookings" :key="index"-->
<!--        >-->
<!--          &lt;!&ndash; Tabs navs &ndash;&gt;-->
<!--          <MDBTabNav pills tabsClasses="mb-3 text-center" v-if="booking.state !== 'confirmed'">-->
<!--            <MDBTabItem :wrap="false" tabId ={{booking.id}} href={{booking.id}}>-->
<!--              <b-->
<!--                  v-if="booking.status === 'notSeen'"-->
<!--                  @click="messageSeen(booking)"-->
<!--              >-->
<!--                <monthConverter :num = booking.onTime[0].month />-->
<!--                {{booking.onTime[0].day}}-->
<!--                {{booking.onTime[0].year}}-->
<!--                - -->
<!--                {{booking.header}}-->

<!--              </b>-->
<!--              <p v-else @click="messageSeen(booking)">-->
<!--                <monthConverter :num = booking.onTime[0].month />-->
<!--                {{booking.onTime[0].day}}-->
<!--                {{booking.onTime[0].year}}-->
<!--                - -->
<!--                {{booking.header}}-->
<!--              </p>-->
<!--            </MDBTabItem>-->

<!--          </MDBTabNav>-->
<!--          &lt;!&ndash; Tabs navs &ndash;&gt;-->
<!--          &lt;!&ndash; Tabs content &ndash;&gt;-->
<!--          <MDBTabContent>-->
<!--            <MDBTabPane tabId={{booking.id}} class="dataContainer">-->
<!--              <MDBTable borderless style="font-size: 18px; text-align: center;">-->
<!--                <tbody>-->
<!--                <tr>-->
<!--                  <td>-->
<!--                    {{booking.address}}-->
<!--                    <MDBBtnClose-->
<!--                        class="closeData"-->
<!--                        @click="exitFromNotificationData"-->
<!--                    />-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td style="border: solid blue">-->
<!--                    {{booking.description}}-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr >-->

<!--                  <td v-if="booking.image">-->
<!--                    <MDBBtn-->
<!--                        v-if="!isImageOpen"-->
<!--                        outline="success"-->
<!--                        @click="openImagePanel(booking.image)"-->
<!--                    >-->
<!--                      Open image-->
<!--                    </MDBBtn>-->

<!--                    <div >-->

<!--                      <img-->
<!--                          v-if="isOpenImage" id="img"-->
<!--                          class="loading"-->
<!--                          :src= srcImg-->

<!--                          alt="kuva"-->
<!--                      >-->

<!--                      <MDBBtn-->
<!--                          v-if="isImageOpen"-->
<!--                          outline="secondary"-->
<!--                          @click="closeImagePanel"-->
<!--                      >-->
<!--                        Close image-->
<!--                      </MDBBtn>-->
<!--                    </div>-->


<!--                  </td>-->
<!--                </tr>-->

<!--                <tr>-->
<!--                  <td>-->


<!--&lt;!&ndash;                    <form @submit.prevent="kirjuta">&ndash;&gt;-->

<!--&lt;!&ndash;                    </form>&ndash;&gt;-->


<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>-->
<!--&lt;!&ndash;                    <MDBBtn&ndash;&gt;-->
<!--&lt;!&ndash;                        v-if="!isPressedContactToUser"&ndash;&gt;-->
<!--&lt;!&ndash;                        type="submit"&ndash;&gt;-->
<!--&lt;!&ndash;                        size="lg"&ndash;&gt;-->
<!--&lt;!&ndash;                        color="success"&ndash;&gt;-->
<!--&lt;!&ndash;                        @click="contactToUser"&ndash;&gt;-->
<!--&lt;!&ndash;                    >&ndash;&gt;-->
<!--&lt;!&ndash;                      contact to user&ndash;&gt;-->
<!--&lt;!&ndash;                    </MDBBtn>&ndash;&gt;-->
<!--                    <form @submit.prevent="contactToUser">-->

<!--                    </form>-->
<!--                    <form @submit.prevent="contactToUser">-->
<!--                      <MDBBtn-->
<!--                          v-if="isPressedOpenChat && !isPressedFinal"-->
<!--                          type="submit"-->
<!--                          size="lg"-->
<!--                          color="success"-->

<!--                      >-->
<!--                        Saada kasutajale sõnum-->
<!--                      </MDBBtn>-->
<!--                    </form>-->

<!--&lt;!&ndash;                    <form @submit.prevent="avajauuenda">&ndash;&gt;-->
<!--&lt;!&ndash;                      <MDBBtn&ndash;&gt;-->

<!--&lt;!&ndash;                          type="submit"&ndash;&gt;-->
<!--&lt;!&ndash;                          size="lg"&ndash;&gt;-->
<!--&lt;!&ndash;                          color="success"&ndash;&gt;-->

<!--&lt;!&ndash;                      >&ndash;&gt;-->
<!--&lt;!&ndash;                        Ava chat&ndash;&gt;-->
<!--&lt;!&ndash;                      </MDBBtn>&ndash;&gt;-->
<!--&lt;!&ndash;                    </form>&ndash;&gt;-->

<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>-->

<!--&lt;!&ndash;                    <div v-if="bookings.length === 0" class="spinner-border" role="status">&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="visually-hidden">Loading...</span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->






<!--&lt;!&ndash;                    <chat&ndash;&gt;-->
<!--&lt;!&ndash;                        v-if="isChat"&ndash;&gt;-->
<!--&lt;!&ndash;                        :key="count"&ndash;&gt;-->
<!--&lt;!&ndash;                        :room = room&ndash;&gt;-->
<!--&lt;!&ndash;                        :chatusers = chatusers&ndash;&gt;-->

<!--&lt;!&ndash;                    />&ndash;&gt;-->

<!--&lt;!&ndash;                    @select="selectUser(user)"&ndash;&gt;-->

<!--                    <live-chat-->
<!--                        :chatusers = chatusers-->
<!--                        :messages =messages-->
<!--                        @select:user = selectUser-->
<!--                        @on:message = onMessage-->
<!--                    />-->

<!--&lt;!&ndash;                    <div v-for="user in chatusers" :key="user.userID">&ndash;&gt;-->
<!--&lt;!&ndash;                      <User&ndash;&gt;-->
<!--&lt;!&ndash;                          :user = user&ndash;&gt;-->
<!--&lt;!&ndash;                          :selected="selectedUser === user"&ndash;&gt;-->
<!--&lt;!&ndash;                          @select="selectUser(user)"&ndash;&gt;-->
<!--&lt;!&ndash;                      />&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->



<!--&lt;!&ndash;                    <MessagePanel&ndash;&gt;-->
<!--&lt;!&ndash;                        v-if="selectedUser"&ndash;&gt;-->
<!--&lt;!&ndash;                        :user = selectedUser&ndash;&gt;-->
<!--&lt;!&ndash;                        :messages = messages&ndash;&gt;-->
<!--&lt;!&ndash;                        @new:message="onMessage"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->




<!--&lt;!&ndash;                    <MDBBtn&ndash;&gt;-->
<!--&lt;!&ndash;                        v-if="!isChat"&ndash;&gt;-->
<!--&lt;!&ndash;                        type="submit"&ndash;&gt;-->
<!--&lt;!&ndash;                        size="lg"&ndash;&gt;-->
<!--&lt;!&ndash;                        color="success"&ndash;&gt;-->
<!--&lt;!&ndash;                        @click="renderComponent"&ndash;&gt;-->
<!--&lt;!&ndash;                    >&ndash;&gt;-->
<!--&lt;!&ndash;                      Saada kliendile sõnum&ndash;&gt;-->
<!--&lt;!&ndash;                    </MDBBtn>&ndash;&gt;-->
<!--                  </td>-->


<!--                </tr>-->
<!--                </tbody>-->
<!--              </MDBTable>-->
<!--              <MDBBtn-->
<!--                  block-->
<!--                  outline="success"-->

<!--                  @click="confirmBooking(booking.id)"-->
<!--              >-->
<!--                Kinnita tellimus-->
<!--              </MDBBtn>-->
<!--&lt;!&ndash;              <span v-if="!isChat" @click="renderComponent">Click to reload render-component</span>&ndash;&gt;-->

<!--&lt;!&ndash;              <MDBBtn @click="this.$router.push('/chat').then(() => { this.$router.go() })">&ndash;&gt;-->
<!--&lt;!&ndash;                Send message...&ndash;&gt;-->
<!--&lt;!&ndash;              </MDBBtn>&ndash;&gt;-->


<!--            </MDBTabPane>-->
<!--          </MDBTabContent>-->


<!--          &lt;!&ndash; Tabs content &ndash;&gt;-->
<!--        </MDBTabs>-->
<!--      </div>-->
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
//import socket from '../socket'
export default {
  name: "client-notifications",
  props: {
    bookings: Array,
    chatusers: Array,
    activeUser: null,
    selecteduser: null,

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
      bookings: [],
      isBooking: false,
      bookingID: null,
      pressed: false,
      bookingIndex: null,
      booking: {},

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

    avajauuenda () {
      this.isChat = true;
      this.count++;
    },

    selectUser(user) {
      this.$emit("select:user", user)
      //if (!user.self)
        //this.selectedUser = user;
    },

    onMessage(content, date) {
      this.$emit("on:message", content,date);

    },

    changeHeaderColor () {

    },

    // kirjuta () {
    //
    //   let username = "aaa"
    //   let room = "Oopersama"
    //
    //   socket.auth = { username, room };
    //   socket.connect();
    //
    //   //let newRoom = "Oopersama"
    //
    //   //socket.emit('updateRoom', newRoom);
    //   //this.$router.push("/chat")
    //
    // },

    // initChat () {
    //   //const sessionID = localStorage.getItem("sessionID");
    //
    //   // if (sessionID === null) {
    //   //   //console.log("Aaaaaaaa")
    //   //   let username = "tehnika-notification";
    //   //   let room = "viking";
    //   //
    //   //   //this.usernameAlreadySelected = true;
    //   //   socket.auth = { username, room };
    //   //   socket.connect();
    //   // }
    //
    //   this.isChat = true;
    //   this.isPressedOpenChat = true;
    //
    //
    //
    //
    //
    //
    //
    //   //socket.emit('updateRoom', this.room);
    //
    //   // for (let i = 0; i<2; i++) {
    //   //   socket.emit('updateRoom', this.room);
    //   //
    //   //   socket.disconnect();
    //   //   socket.connect();
    //   // }
    //   //
    //   // this.renderComponent();
    // },

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
      //const prviderBookings = this.userIsProvider.booking
      // Bookings what provider getting from recipient
      if (user) {
        this.bookings = user.booking.filter(ub => ub.status !== "confirmed" && ub.status !== "waiting" && ub.status !== "completed")

      }
    },
    createBookingDate () {
      this.bookingDate = 22  //monthConverter(4);
    },
    handleOpenBooking (bookingData, index) {
      const header = document.getElementById("header")


      console.log("Booking!! " + bookingData.header);
      this.bookingIndex = index  //bookingData.id;
      this.isBooking = true;

      //this.pressed =  index === 1;
      // if (bookingData.id)
      //   header.style.backgroundColor = "red";
      this.booking = bookingData;
    },
    handleCloseBooking () {
      this.isBooking = false;
    },
    messageSeen (booking) {
      this.isSeen = true;



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

      socket.emit("online", (room));

      // socket.emit("create new room user", {
      //   room: room,
      //   username: username
      // })

      //socket.emit('updateRoom', this.ri);


      socket.emit("room users count")
      socket.on('get room users count', (data) => {
        console.log("Can we get users data from backend here??? " + data.users.length)

      })

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
    handleConfirmBooking (id) {
      console.log("confirmed booking id " + id)
      this.editStatus (id, "confirmed")

      this.$emit("remove:booking", id);
      this.isBooking = false;

      this.bookings = this.bookings.filter(booking => booking.id !== id);
      if (this.bookings.length < 1) {
        this.$router.push('/');
      }


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

/*img.loading {
  width: 100%;
  height: 400px;
  background: transparent url(https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif) no-repeat scroll center center;
}*/
#header {
  padding: 20px;
  background-color: #c1bfbf;
  font-size: 18px;
}

.activeHeader {
  padding: 20px;
  background-color: #e8eae8;
  font-size: 18px;
}

</style>