<template>
<!--  style="&#45;&#45;mdb-bg-opacity: 0.5;"-->
<!--  bg="secondary"-->
<!--  bg-secondary bg-gradient text-white  bg="dark"-->
  <MDBNavbar
      dark
      size="large"
      position="top"
      bg="dark"

      container
      expand="xl"

      bg-secondary bg-gradient text-white

      class="d-flex justify-content-between"


  >
    <router-link to="/" @click="onPressedLogoBtn">
      <MDBNavbarBrand>
        Etusivu
      </MDBNavbarBrand>
    </router-link>

<!--    <MDBNavbarToggler
        right
        target="#navbarColor01"
        @click="collapse7 = !collapse7"
    ></MDBNavbarToggler>-->
<!--    <MDBCollapse id="navbarColor01" v-model="collapse7">-->
<!--      <MDBNavbarNav center class="mb-2 mb-lg-0">-->




<!--      </MDBNavbarNav>-->
<!--    </MDBCollapse>-->
    <MDBNavbarNav left class="mb-2 mb-lg-0" v-if="loggedUser.token !== undefined && userIsProvider">
<!--      <MDBNavbarItem style="padding: 20px;">-->
<!--        <h3>Kredit {{credit}} €</h3>-->


<!--      </MDBNavbarItem>-->


<!--      <MDBNavbarItem >-->
<!--        <router-link to="/admin" @click="collapse7 = false" >Admin</router-link>-->

<!--      </MDBNavbarItem>-->

      <!--      <MDBNavbarItem >-->
      <!--        <router-link to="/admin" @click="collapse7 = false" >Admin</router-link>-->

      <!--      </MDBNavbarItem>-->
    </MDBNavbarNav>








    <MDBNavbarNav right class="mb-2 mb-lg-0 d-flex flex-row" v-if="loggedUser.token === undefined">




      <MDBNavbarItem >
        <router-link to="/login" @click="collapse7 = false" style="color: greenyellow;" >Kirjaudu</router-link>

      </MDBNavbarItem>

    </MDBNavbarNav>

    <MDBNavbarNav right class="mb-2 mb-lg-0 d-flex flex-row"  v-else>


      <MDBDropdown
          v-if="chatParticipants.length > 0"
          v-model="dropDownChat"
          style="padding: 3px;"
      >

        <MDBDropdownToggle
            tag="a"
            class="nav-link"
            style="padding: 20px;"
            @click="dropDownChat = !dropDownChat"
        >

          <img
              style="width: 45px;"
              :src="require(`@/assets/navbar/chat.png`)"

              alt="Chat"
          />

<!--          <MDBIcon  icon="comments" size="2x"/>-->
                    <MDBBadge
                        v-if="newMessageList.length > 0"
                        class="translate-middle p-1"
                        pill
                        notification
                        color="danger"><span style="font-size: 12px; padding: 5px;">{{ newMessageList.length }}</span></MDBBadge>



        </MDBDropdownToggle>
        <MDBDropdownMenu  dark style="padding: 12px;">

<!--          :class="[newMessageList.some(nml => nml.userID === item.userID) ? 'new-message' : '', 'no-message']"-->
          <div>
            <MDBDropdownItem v-for="(item, i) in chatParticipants" :key="i">

              <router-link
                  to="/chat"
                  @click="updateRoom(item)"




              >
<!--                {{newMessageList.some(nml => nml.userID === item.userID) ?  item.name + '!' : item.name}}-->

                <h3 v-if="newMessageList.some(nml => nml.userID === item.userID)"
                    style="color: #f75959; border: 1px solid palevioletred; margin-top: 10px; padding: 12px"><b>{{item.name}}</b></h3>
                <h3 v-else style="color: green; padding: 12px; border: 1px solid #629562; margin-top: 10px;">{{item.name}}</h3>

              </router-link>
<!--              <MDBBtnClose-->
<!--                  white-->
<!--                  style="margin-left: 20px;"-->
<!--                  @click="removeChatnavUser(item)"-->
<!--              />-->

            </MDBDropdownItem>
          </div>

        </MDBDropdownMenu>
      </MDBDropdown>




      <MDBDropdown
          v-if="recipientCompletedBookings.length > 0"
          v-model="dropDownfeedback"
          style="padding: 5px;"
      >

        <MDBDropdownToggle
            tag="a"
            class="nav-link"
            style="padding: 20px;"
            @click="dropDownfeedback = !dropDownfeedback"
        >

<!--          <MDBBtn color="info">-->
<!--            Odotetaan palautetta-->
<!--          </MDBBtn>-->
          <img
              style="width: 45px;"
              :src="require(`@/assets/palaute.png`)"
              alt="palaute"
          />
          <MDBBadge
              class="translate-middle p-1"
              pill
              notification
              color="danger"><span style="font-size: 12px; padding: 5px;">{{ recipientCompletedBookings.length }}</span></MDBBadge>



        </MDBDropdownToggle>


        <MDBDropdownMenu >
          <MDBDropdownItem   href="#" v-for="(item, i) in recipientCompletedBookings" :key="i">
            <router-link to="/feedback" @click="handleFeedbackClient(item)">
              <month-converter
                  :num="item.onTime[0].month"
              />
              /{{ item.onTime[0].day }}
              -{{item.ordered[0].yritys}}
              : {{item.header}}
            </router-link>
          </MDBDropdownItem>


        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBNavbarItem
          v-if="providerBookings.length > 0"
          to="/notification"

          class="me-3 me-lg-0"
          linkClass="link-secondary"
          style="padding: 10px;"
      >

<!--        <div>-->
<!--          <p> Strong Tilt & Move</p>-->
<!--          <span class="strong-tilt-move-shake">Hover on me!</span>-->
<!--        </div>-->
<!--        class="strong-tilt-move-shake"-->
        <span :class="{'gentle-hover-shake': isRingBell}" >
          <img
              style="width: 30px; margin-top: 15px;"
              :src="require(`@/assets/navbar/bell.png`)"
              @click="handleNotifications"
              alt="Notifications"
          />
        </span>



<!--        <MDBIcon icon="bell" size="2x"-->

<!--                 :disabled='true'-->
<!--                  @click="handleNotifications"/>-->
        <MDBBadge v-if="notSeenClientBookings.length > 0"
                  notification color="danger"
                  style="margin-top: 10px;"
                  class="translate-middle p-1"
                  @click="handleNotifications"
                  pill
        >
          <span class="pill">{{notSeenClientBookings.length}}</span>
        </MDBBadge>

        <MDBBadge v-else notification color="danger" class="translate-middle p-2" pill></MDBBadge>

      </MDBNavbarItem>


      <MDBDropdown v-model="dropdownUser" style="padding: 10px;" @click="onPressedUserIcon">

        <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdownUser = !dropdownUser"
        >
<!--          <MDBIcon-->
<!--              v-if="!avatar && !showAvatar"-->
<!--              icon="user"-->
<!--              size="2x"-->

<!--          />-->
          <img
              style="width: 50px; height: 50px; border: solid grey; border-radius: 50%;"

              :src="showAvatar ? showAvatar : require(`/server/uploads/avatar/${avatar.name}`)"
              alt="user_avatar"
          />

<!--          size="1x"-->
          <!-- v-if="userIsProvider || recipientBookings.length > 0" -->
        </MDBDropdownToggle>
        <MDBDropdownMenu  style="padding: 12px;">
          <MDBDropdownItem  href="#">
            <router-link to="/profile" class="user" >
              Omat tiedot
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem v-if="userIsProvider"  href="#">
            <router-link to="/gallery" class="user">
              Galleria
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem v-if="recipientCompletedBookingsHistory.length > 0" >
            <router-link to="/history" class="user">
              Historia
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem
              v-if="userIsProvider"
              href="#">
            <router-link to="/pay-plan" class="user" >
              Laskutus
            </router-link>

          </MDBDropdownItem>
          <MDBDropdownItem
              href="#">
            <router-link to="/rules" class="user">
              Säännöt
            </router-link>

          </MDBDropdownItem>
          <MDBDropdownItem
              href="#"
              @click="handleLogOut">
            <p class="user">Log out</p>
          </MDBDropdownItem>


        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavbarNav>
  </MDBNavbar>

  <Notifications
    v-if="isNotification"
    @exit:notifications = handleExitNotifications
    @update:status = handleStatusUpdate
    :bookings = providerBookings

  />

  <success-message
      style="padding: 20px;"
      :message = ratingResult
  />

  <div v-if="messageAboutRejectBooking" class="bookingRejectMessagePanel" >
    <p class="bookingRejectMessageClose" @click="closeRejectedBookingMsgPanel">Selvä</p>
    <h3 class="bookingRejectMessage">{{messageAboutRejectBooking}}</h3>
  </div>


<!--  bg="dark"-->
  <MDBFooter bg="dark" :text="['center', 'white']" class="fixed-bottom">


    <MDBContainer v-if="clientMapSearchData.length > 0">

      <div id="container" >
<!--        <div class="box">Tere tere ja tere ja tere ja tere ja see on siis see</div>-->
        <div >
          <div class="box">{{ sentence }}</div>
        </div>
<!--        <div class="box"></div>-->
      </div>
    </MDBContainer>

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2024 Copyright: DUVA OY
<!--      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>-->
    </div>
    <!-- Copyright -->
  </MDBFooter>

<!--  <info-message-->

<!--      style="margin-top: 70px;"-->
<!--      :message = "messageAboutAccess"-->
<!--  />-->



  <router-view
      :test = test
      @login:data = "handleLogin"
      @register:data = "createUser"
      :userIsProvider = userIsProvider
      :proImages = proImages
      :isPro = isProOpenGallery
      @add:slide = handleAddSlide
      @remove:slide = handleRemoveSlide
      @update:gallery = handleUpdateGallery
      @updateGalleryRemove = handleUpdateGalleryRemove
      :loggedInUser = loggedUser
      :recipientBookings = recipientBookings
      @addImageToRecipientBookings = handleAddImageRecipientBookings

      :confirmedBookingsByClient = clientAcceptedBookings
      :confirmedBookingsByProvider = providerAcceptedBookings
      @booking:update = handleRecipientBookingsUpdate

      @exit:notifications = handleExitNotifications
      @update:status = handleStatusUpdate

      @update:booking = handleUpdateClientConfirmedBooking

      @remove:booking = handleRemoveBooking
      @reject:booking = handleRejectBookingByPro
      @removeRecipient = handleRemoveRecipient

      @activate:bell = handleActivateBell
      @deactivate:bell = handleDeActivateBell

      :bookings = providerBookings
      :bookingsConfirmed = providerBookingsHistory
      :recipientConfirmedBookings = recipientCompletedBookingsHistory
      @removeProBookingConfirmed = handleRemoveProBookingConfirmed
      :customer = rateCustomer

      @isRated = handleRated
      @backFromFeedback = handleBackFromFeedbackClient

      @to:app = fromFinal
      @finalinfo = fromFinal
      @chatCredentials = handleChat


      :chatusers = users
      :activeUser = activeUser
      :messages = conversation

      :newMessageRoom = newMessageRoom


      :provider = userIsProvider
      :recipient = recipientBookings
      :creditLeft = proTimeCreditLeft
      @updateProTimeCredit = handleUpdateProTimeCredit


      :isAccessDenied = isAccessTerminated
      @select:user = onSelectUser
      @noSelected = noSelectUser
      :selecteduser = selectedUser



      @on:message = handleMessage

      @otherUser = otherUser

      @bookingWaitingProBack = handleBookingWaitingProBackBtn

      @updateAvatar = handleUpdateAvatar
      @removeAvatar = handleRemoveAvatar

      :recipient-test = recipientTest

      @setNavbarChatUser = handleSetNavbarChatUser
      @setNavbarFeedbackNotification = handleSetNavbarFeedback


      @resetMapSearch = mapSearchReset

      :wentOut = wentOut
  />


<!--  test {{clientMapSearchData}}-->
<!--  <div>-->
<!--    <p> Strong Tilt & Move</p>-->
<!--    <span class="strong-tilt-move-shake">Hover on me!</span>-->
<!--  </div>-->
<!--  <p style="color: greenyellow;">selected user in app {{selectedUser}}</p>-->

</template>

<script>
/* eslint-disable */
//import dateFormat from "dateformat";

// style="position: fixed; z-index:1;" navbar

import imageService from "@/service/image";

const initReactiveProperties = (user) => {
  user.hasNewMessages = false;
  user.messages = [];
};
// v-if="providerBookings.length > 0" bell
// collapse7 = !collapse7
//import HelloWorld from './components/HelloWorld.vue'
//import ContentToHome from './components/ContentToHome'
import Notifications from './pages/Notification.vue'
import userService from "./service/users"
import providerService from './service/providers'
import recipientService from './service/recipients'
import loginService from "./service/login"
import conversationService from "./service/conversation"
import chatMemberService from "./service/chatUsers"
import monthConverter from './components/controllers/month-converter'
import successMessage from "@/components/notifications/successMessage";
import infoMessage from "@/components/notifications/infoMessage";

import { className } from '@/components/controllers/recipient'

//import recipientPanelFinal from "@/pages/RecipientPanelFinal";

import validation from './helpers/loginValidation.js'
import User from './components/chatio/User.vue'
import MessagePanel from "./components/chatio/MessagePanel.vue"
//import utils from '../server/utils/logger'
import {
  MDBTabs,
  MDBTabNav,
  MDBTabItem,
  MDBTabContent,
  MDBTabPane,


  MDBBtn,
  MDBNavbar,
  MDBCollapse,
  MDBNavbarItem,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBBadge,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
    MDBFooter,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBtnClose
} from 'mdb-vue-ui-kit';
import { ref } from "vue";
//import socket from "@/socket";
import socket from "@/socket";
import chatuserService from '@/service/chatUsers'
import mailService from '@/service/mailer'
//import providerService from "@/service/providers";
//import SocketioService from './service/socketio.service.js';
//import ChatApp from './components/ChatApp.vue'
//import LiveChat from './pages/LiveChat'
import vue from 'vue'


export default {
  name: 'App',
  props: {
    //info: String
  },
  components: {
    MDBFooter,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBtnClose,
    // MDBTabs,
    // MDBTabNav,
    // MDBTabItem,
    // MDBTabContent,
    // MDBTabPane,
    //HelloWorld,
    //ContentToHome,
    //LiveChat,
    User,
    MessagePanel,
    Notifications,
    monthConverter,
    successMessage,
    infoMessage,
    MDBNavbar,
    MDBCollapse,
    MDBNavbarItem,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBBadge,
    MDBIcon,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  },
  // created() {
  //   SocketioService.setupSocketConnection();
  // },
  data () {
    return {
      //sentence: "Etsitaan Siivooja 25 km päässä!",
      sentence: null,
      i: 0,
      chatParticipants: [],
      test: false,
      //activeTabId4: "",
      recipientTest: null,
      //note: null,
      credit: 0,
      testDialog: ['eka', 'toka', 'pipi'],
      counter: null,
      user: null,
      isNewMessage: true,
      messageInfo: "",
      newMessageList: [],
      rateCustomer: {},
      ratingResult: null,
      newMessageRoom: "",
      tu: [],
      roomroom: "",
      userSocketID: "",
      info: "",
      users: [],
      currentRoom: "",
      messages: [],
      conversation: [],
      selectedUser: null,
      activeUser: null,
      msg: "",
      isBell: false,
      loggedUser: {},

      isAccessTerminated: false,
      messageAboutAccess: "Access denied!",

      recipientBookings: [],
      clientAcceptedBookings: [],
      providerAcceptedBookings: [],

      messageAboutRejectBooking: null,

      recipientImages: [],

      userIsProvider: null,
      proTimeCreditLeft: null,
      proImages: [],
      isProOpenGallery: true,
      providerBookings: [],
      providerBookingsHistory: [],
      recipientCompletedBookings: [],
      recipientCompletedBookingsHistory: [],

      isNotification: false,
      notSeenClientBookings: [],

      avatar: {name: "avatar.png"},
      showAvatar: null,

      newMessage: "",
      otheruser: {},

      isMapSearchData: false,
      isMapSearchActive: false,
      clientMapSearchData: [],
      isRingBell: false

    }
  },
  created() {
    // this.$router.push({
    //   params:{
    //     feedback: this.feedbackClient
    //   }
    // });

  },

  async mounted() {
    const recipientClass = new className("Hallo");

    console.log("xxx " + recipientClass.response("aaa"));

    this.validateToken();

    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.user = user;
      const username = user.username;
      const userID = user.id
      this.currentRoom = user.username + user.id;
      this.joinServer(username, userID);

      const rejectedMsg = window.localStorage.getItem('rejectedBookingMessage');
      if (rejectedMsg) {
        this.messageAboutRejectBooking = JSON.parse(rejectedMsg);
      }

      //this.validateToken();
    }

    const clientForFeedback = window.localStorage.getItem('customerFeedback')
    if (clientForFeedback) {
      const customer = JSON.parse(clientForFeedback);
      this.rateCustomer = customer;
    }
    //this.runEveryMinite ()


    setInterval(this.runEveryMinite, 10*1000);

  },
  setup() {
    const collapse7 = ref(false);
    const dropDownDialog = ref(false)
    const dropDownChat = ref(false)
    const dropdownUser= ref(false)
    const dropdownBell = ref(false)
    const dropDownfeedback = ref(false)

    return {
      collapse7,
      dropDownDialog,
      dropDownChat,
      dropdownUser,
      dropdownBell,
      dropDownfeedback
    }
  },


  methods: {
    removeChatnavUser (item) {
      if (confirm("Oletko varmaa, että haluat poistaa chat käyttäjän?") === true) {
        console.log("You pressed OK!")

        this.chatParticipants = this.chatParticipants.filter(member => member.name !== item.name);

      } else {
        console.log("You canceled!")
      }

    },
    removeExpiredRecipientBookings () {
      console.log("Aaaaaaaaaaaaaaaaa")
      this.recipientBookings.forEach(rp => {
        console.log("Recipient bookings time " + (rp.created_ms - new Date().getTime()))
        if (rp.created_ms - new Date().getTime() > 0) {
          console.log("It is valid!")
        } else {
          console.log("It is not valid anymore!")
        }
      })
      // this.providerTimes.forEach(timerange => {
      //   let year = timerange.yearFrom;
      //   let month = timerange.monthFrom;
      //   let day = timerange.dayFrom;
      //   let hour = timerange.hoursFrom;
      //   let minute = timerange.minutesFrom;
      //   if (new Date(year, month, day, hour, minute).getTime() < new Date().getTime()) {
      //     this.delTimeRange(timerange.id);
      //   }
      //})

    },
    mapSearchReset () {
      this.mapSearchData = null;
    },
    handleUpdateProTimeCredit (timeLeft) {
      this.proTimeCreditLeft = timeLeft;
    },
    handleAddSlide (image, size) {
      this.proImages = [
          ...this.proImages,
          image
      ]
      //const upload = await imageService.createProRefImg(this.userIsProvider.id, data);
      //this.proImages.push(img);
    },
    handleRemoveSlide (imageID, index) {
      this.proImages = this.proImages.filter((img, inx) => inx !== index)

      //imageService.removeProRefImage(imageID, this.userIsProvider.id);
    },
    handleAddImageRecipientBookings (img, id) {
      // this.recipientImages = [
      //     ...this.recipientImages,
      //     img
      // ]
      // console.log("Booking id app " + id)
      // const booking = this.recipientBookings.find(rb => rb.id = id);
      // if (booking.image !== null) {
      //   booking.image = booking.image.concat(img);
      // } else {
      //   booking.image = img;
      // }
      //
      // this.recipientBookings.map(item => item.id === id ? booking : item);
    },
    async handleRemoveRecipient (id) {
      // const removable = this.recipientBookings.find(res => res.id === id);
      // if (removable.image !== null) {
      //   removable.image.forEach( (rem) => {
      //     console.log("### " + rem._id)
      //     imageService.cleanAllRecipientImages(rem._id)
      //   })
      // }
      this.recipientBookings = this.recipientBookings.filter(booking => booking.id !== id);
      await recipientService.removeBooking(id);

    },
    async load (data) {
      await imageService.createProRefImg(this.userIsProvider.id, data);
    },
    async handleUpdateGallery (data) {
      console.log("Will be updated!!");

      await imageService.createProRefImg(this.userIsProvider.id, data);

      // for (let i = 0; i < this.proImages.length; i++) {
      //   if (!this.proImages[i].id) {
      //     console.log("Data " + this.proImages[i].data)
      //     await imageService.createProRefImg(this.userIsProvider.id, img[index].data);
      //   }
      // }
      // this.proImages.forEach(async (img, index) => {
      //   console.log("Image staff --------- " + img.id)
      //   if (img.id === null) {
      //
      //     console.log("Data " + img.data)
      //     this.load(img.data);
      //     //let loadedImage = this.proImages[index]
      //     //loadedImage.status =
      //   }
      // })
    },
    handleUpdateGalleryRemove (removedSlideIdArray) {
      if (removedSlideIdArray.length > 0) {
        removedSlideIdArray.forEach(async remi => {
          await imageService.removeProRefImage(remi, this.userIsProvider.id);
        })
      }
    },
    wentOut () {
      console.log("Went................")
    },
    isSameId (a, b) {
      return a.value === b.value;
    },
    comp () {
      console.log("Comparing");
      console.log("xxx--xxx " + this.chatParticipants.map(p => p.name))
      console.log("yyyy---yyyy " + this.newMessageList.map(nm => nm.userID))

      const a = [
          { value:"4a55eff3-1e0d-4a81-9105-3ddd7521d642", display:"Jamsheer"},
        { value:"644838b3-604d-4899-8b78-09e4799f586f", display:"Muhammed"},
        { value:"b6ee537a-375c-45bd-b9d4-4dd84a75041d", display:"Ravi"},
        { value:"e97339e1-939d-47ab-974c-1b68c9cfb536", display:"Ajmal"},
        { value:"a63a6f77-c637-454e-abf2-dfb9b543af6c", display:"Ryan"}]
      const b = [
        { value:"4a55eff3-1e0d-4a81-9105-3ddd7521d642", display:"Jamsheer", $$hashKey:"008"},
        { value:"644838b3-604d-4899-8b78-09e4799f586f", display:"Muhammed", $$hashKey:"009"},
        { value:"b6ee537a-375c-45bd-b9d4-4dd84a75041d", display:"Ravi", $$hashKey:"00A"},
        { value:"e97339e1-939d-47ab-974c-1b68c9cfb536", display:"Ajmal", $$hashKey:"00B"}]

      const results = a.filter(({ value: id1 }) => b.some(({ value: id2 }) => id2 === id1))
      console.log("results " + results.length)
      //const a = this.chatParticipants;
      //const b = this.newMessageList;

      //const isSameId = (a, b) => a.userID === b.userID;
      a.forEach((pp, i) => {
        //console.log("Is same value? " + this.isSameId(pp.value, b[i].value));
      })

    },
    startChat () {
      socket.emit("join all rooms");
    },
    chat () {
      console.log("Clicked to chat")
    },
    handleUpdateAvatar (avatar) {
      console.log("Avatar in app is------------- " + avatar)
      this.showAvatar = avatar;
      //socket.emit("avatar", avatar);
    },

    handleRemoveAvatar () {
      //this.avatar = null;
      this.avatar = {
        name: "avatar.png"
      }
      this.showAvatar = null;
    },

    handleChat (data) {
      console.log("Chat data: " + data.room + " " + data.userID + " " + data.username)
      this.roomroom = data.room;
      this.currentRoom = data.room;
      console.log("Tuba " + this.roomroom)
      if (!this.chatParticipants.some(cp => cp.room === data.room)) {
        this.chatParticipants = this.chatParticipants.concat({
          status: "",
          userID: data.userID,
          name: data.username,
          room: data.room
        })
      }

      socket.emit("update room", data.room)

    },

    fromFinal (data) {
      this.info = data
      console.log("Data from final in app: " + data)
    },
    // Create new chat user
    submit(id, username, room) {

      console.log("What===")

      let data = {
        userID: id,
        username: username,
        room: room

      }

      socket.emit("new chat user", data);


    },

    joinServer: function (nickname, id) {
      console.log("Joining server: " + nickname + " ja id: " + id)
      socket.on("get socketID", (id) => {
        console.log("user socket id " + id)
        this.userSocketID = id;

      })
      socket.on("get current credentials", () => {
        socket.emit("current credentials", {
          room: this.currentRoom,
          userID: id,
          username: nickname,
        })

      })
      socket.on("connect user", (id) => {


      })
      socket.on("loggedIn", (data) => {

        this.users = []

        data.users.forEach((user) => {
          for (let i = 0; i < this.users.length; i++) {
            const existingUser =  this.users[i];
            if (existingUser.userID === user.userID) {
              existingUser.connected = user.connected;

              return;
            }
          }


          //user.self = user.userID === this.userSocketID;
          user.self = user.userID === this.loggedUser.id;

          if (!user.self) {
            this.activeUser = user;

          }

          initReactiveProperties(user);
          user.messages = [];
          this.users.push(user);
          //this.users.push({userID: "640d9ec449f4c03dc724b428", username: "nipitiri", messages: []})
        });

        // put the current user first, and sort by username
        this.users.sort((a, b) => {
          if (a.self) return -1;
          if (b.self) return 1;
          if (a.username < b.username) return -1;
          return a.username > b.username ? 1 : 0;
        });


        console.log("Room users: " + data.users.map(us => us.username))

      });
      this.listen();
    },
    listen: function () {
      socket.on("user info", (data) => {


      })

      socket.on("init new messages", (data) => {
        data.forEach(d => {
          if (d.status === "unsent") {
            console.log("You got a new message " + d.content);

            const chatParticipant = {
              status: "",
              userID: d.userID,
              name: d.username,
              room: d.room
            }
            if (!this.chatParticipants.some(cp => cp.userID === d.userID)) {
              this.chatParticipants.push(chatParticipant);
            }

            this.newMessageList.push(d)

          }

        })

      })

      socket.on("userOnline", (data) => {
        this.users = []
        socket.on("get socketID", (id) => {
          console.log("user socket id " + id)
          this.userSocketId = id;
        })

        data.users.forEach((user) => {
          for (let i = 0; i < this.users.length; i++) {
            const existingUser =  this.users[i];
            if (existingUser.userID === user.userID) {
              existingUser.connected = user.connected;
              console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx")

              return;
            }
          }



          //user.self = user.userID === socket.userID;
          user.self = user.userID === this.loggedUser.id;
          //if (user.userID !== this.loggedUser.id)

          // will keep message panel open
          if (!user.self)
            this.selectedUser = user;
            user.connected = true;

          //user.messages = data.messages;
          this.initReactiveProperties(user);
          user.messages = [];
          this.users.push(user);
        });

        // put the current user first, and sort by username
        this.users.sort((a, b) => {
          if (a.self) return -1;
          if (b.self) return 1;
          if (a.username < b.username) return -1;
          return a.username > b.username ? 1 : 0;
        });


      });



      socket.on("userLeft", (id, user, room) => {
        console.log("User left " + id, user, room)

        for (let i = 0; i < this.users.length; i++) {
          const user = this.users[i];
          if (user.userID === id) {
            //user.connected = false;
            //this.user = user
            user.connected = false;

            break;
          }
        }
        //this.users.splice(this.users.indexOf(user), 1);
      });

      socket.on("new message", (data) => {
        this.newMessageRoom = data.room
        console.log("Current room " + this.currentRoom)
        console.log("Data room " + data.room)
        //if (this.selectedUser)
        if (this.selectedUser === null || this.selectedUser.room !== data.room) {
          if (!this.newMessageList.some(nml => nml.username === data.username)) {
            const chatParticipant = {
              status: "",
              userID: data.userID,
              name: data.username,
              room: data.room
            }
            if (!this.chatParticipants.some(cp => cp.userID === data.userID)) {
              this.chatParticipants.push(chatParticipant);
            }

            this.newMessageList.push(data);
          }
        }
          // this.newMessageList.push(data)



      })

      socket.on("accept provider", ({id, booking}) => {

        this.providerBookings.push(booking);
        this.notSeenClientBookings.push(booking);

        this.isRingBell = true;

        setTimeout(() => {
          this.isRingBell = false;
        }, 3000);

        // if (!this.chatParticipants.some(cp => cp.userID === room.userID)) {
        //
        //   this.chatParticipants.push(room);
        // }



      })

      socket.on("map pro search", (data) => {
        this.clientMapSearchData = [
            ...this.clientMapSearchData,
            data
        ]
        if (!this.isMapSearchData) {

          // this.isMapSearchActive = true;
          // //this.mapSearchData = null;
          // console.log("Data... " + data);
          // this.mapSearchData = data
          //
          // this.isMapSearchData = true;
          // setTimeout(() => {
          //   this.isMapSearchData = false
          //   setTimeout(() => {
          //
          //     this.isMapSearchActive = false;
          //     this.mapSearchData = {};
          //   }, 2990)
          // }, 4000);
        }


      })


      socket.on("accept recipient booking", async ({id, booking}) => {

        //let proConfirmedBooking = await recipientService.getBookingById(booking.id);

        const foundObject = this.recipientBookings.find(item => item.id === booking.id);

        console.log("FoundbOject status = " + foundObject.header + " " + foundObject.status)

        foundObject.status = "confirmed";

        this.recipientBookings = this.recipientBookings.map(rb => rb.id !== booking.id ? rb : foundObject);

        console.log("FoundObject status after = " + foundObject.header + " " + foundObject.status)
        // Removing client waiting for provider confirmation
        this.recipientBookings = this.recipientBookings.filter(obj => obj.id !== booking.id)

        //this.providerAcceptedBookings.push(proConfirmedBooking)
        this.providerAcceptedBookings.push(booking)

        this.clientAcceptedBookings = this.clientAcceptedBookings.filter(cab => cab.id !== booking.id);


      })

      socket.on("reject recipient booking", async ({id, pro, booking}) => {
        const foundBooking = this.recipientBookings.find(item => item.id === booking.id);
        //console.log("TMI*** " + booking.ordered[0].yritys);
        console.log("Pro id " + id);

        console.log("TMI*** xx" + pro);
        //console.log("FoundBooking status = " + foundBooking.header + " " + foundBooking.status)

        foundBooking.status = "waiting";

        this.recipientBookings = this.recipientBookings.map(rb => rb.id !== booking.id ? rb : foundBooking);
        this.clientAcceptedBookings = this.clientAcceptedBookings.filter(cab => cab.id !== booking.id);
        const rejectMessage = `Valitettavsti TMI ${pro} ei varmistanut tilausta '${booking.header}' - ${booking.date}!`
        window.localStorage.setItem('rejectedBookingMessage', JSON.stringify(rejectMessage))
        this.messageAboutRejectBooking = rejectMessage;

      })



      socket.emit("online", (this.currentRoom))
      // this.currentRoom
      socket.on("messages", (data) => {
        this.conversation = data.msg;

      })

      socket.on("private message", ({ content, username, date, from, to }) => {
        //console.log("S user " + this.selectedUser)
        this.test = true;
        socket.on("messages", (data) => {
          this.conversation = data.msg;

        })

        for (let i = 0; i < this.users.length; i++) {
          const user = this.users[i];



          const fromSelf = this.userSocketId === from;
          if (user.userID === (fromSelf ? to : from)) {
            //user.messages = [];
            this.conversation.push({
              content,
              username: username,
              date,
              userID: user.userID,
              fromSelf
            })

            user.messages.push({
              content,
              date,
              fromSelf,
            })




            if (user !== this.selectedUser) {

              user.hasNewMessages = true;



              this.messageSeen = true;
              //console.log("Users length " + this.users.length)

            }
            break;
          }
        }
      });
    },

    initReactiveProperties (user) {

      user.hasNewMessages = false;
      user.messages = [];
    },


    onSelectUser(user) {
      if (!user.self)
        this.selectedUser = user;

      console.log("----------Tuleb läbi--------" + user.username)
      //this.selectedUser = user;
      this.isNewMessage = false;
      user.hasNewMessages = false;

      this.messageInfo = "";

    },
    noSelectUser () {
      this.selectedUser = null;
    },

    handleMessage (content, date) {

      this.conversation.push({
        content,
        username: this.loggedUser.username,
        date,
        user: this.loggedUser.username,
        userID: this.loggedUser.id
      })


      socket.emit("private message", {
        content,
        date,
        to: this.selectedUser.userID,
      });
    },



    // handleRecipientAction () {
    //   const move = "Test sended!";
    //   console.log("Move in app " + move)
    //   socket.emit("accept provider", {
    //     move,
    //     to: this.loggedUser.id,
    //   })
    // },

    handleProviderActionConfirm () {

    },





    async updateUserRoom (message) {
      console.log("Message is " + message.id)
      //this.newMessageList = this.newMessageList.filter(msg => msg.id !== message.id);

      for (let i = 0; i < this.users.length; i++) {
        let user = this.users[i];
        if (!user.self) {
          this.selectedUser = user;
        }
      }
      if (message.inline) {
        this.newMessageList = this.newMessageList.filter(msg => msg.id !== message.id);
      } else {
        await conversationService.editStatus(message.id, {status: "sent"});
        this.newMessageList = this.newMessageList.filter(msg => msg.id !== message.id);
      }

      socket.emit("update room", message.room);
    },

    async handleFeedbackClient (client) {
      console.log("Feedback client is " + client.id)
      this.rateCustomer = client;
      window.localStorage.setItem('customerFeedback', JSON.stringify(client));

      //this.recipientCompletedBookings = this.recipientCompletedBookings.filter(rcb => rcb.id !== client.id);

    },
    async handleRated (id, ratingResult, yritys) {
      this.recipientCompletedBookings = this.recipientCompletedBookings.filter(rcb => rcb.id !== id)
      const isFeedback = {
        isFeedbackGiven: true
      };
      // Merge true to recipient booking to give feedback to provider
      const feedback = await recipientService.feedbackClient(this.rateCustomer.id, isFeedback);

      console.log("Feedback customer is selected!")
      window.localStorage.removeItem('customerFeedback')
      this.ratingResult =  `Olet antanut ${ratingResult} palautetta yritykselle - ${yritys}`
      setTimeout(() => {
        this.ratingResult = null;
      }, 3000);
    },

    onPressedLogoBtn () {
      this.selectedUser = null;
      //this.isRingBell = !this.isRingBell;

    },
    onPressedUserIcon () {
      // console.log("Pressed to user icon")
      //this.selectedUser = null;
    },

    updateRoom (item) {

      this.newMessageList.forEach(async nml  => {
        if (nml.inline) {
          this.newMessageList = this.newMessageList.filter(msg => msg.userID !== item.userID);
        } else {
          await conversationService.editStatus(nml.id, {status: "sent"});
          this.newMessageList = this.newMessageList.filter(msg => msg.userID !== item.userID);
        }
      })
      //if (((this.userIsProvider.proTime - new Date().getTime()) / 86400000).toFixed() > 0) {

      socket.emit("update room", item.room)


    },

    handleNewMessageNotification () {
      socket.emit("update room", this.newMessageRoom);
    },

    handleActivateBell (state) {
      //this.isBell = state;
      //this.providerBookings = this.userIsProvider.booking.filter(uipb => uipb.status !== "confirmed");
      console.log("Bell bell bell " + state)
    },
    handleDeActivateBell () {
      // if (this.notSeenClientBookings.length === 0) {
      //   this.isBell = state
      // }

    },
    profile () {
      this.$router.push('/profile');
      console.log("Pressed profile")
    },
    history () {
      this.$router.push('/history');
    },
    renderPage () {
      this.$router
          .push({ path: '/chat' })
          .then(() => { this.$router.go() })
    },
    renderDialogPage () {
      this.$router
          .push({ path: '/dialog' })
          .then(() => { this.$router.go() })
    },
    reload: () => {
      this.isRouterAlive = false
      setTimeout(()=>{
        this.isRouterAlive = true
      },0)
    },
    async getUsers() {
      this.users = await userService.getAll()

    },
    async createUser (credentials) {
      console.log("User name is here: " + credentials.username);


      this.submit(credentials.id, credentials.username, (credentials.username + credentials.id))
      window.localStorage.setItem('loggedAppUser', JSON.stringify(credentials))
      this.loggedUser = credentials;
      window.location.replace("/");

    },
    async handleLogin(userData) {
      let user

      console.log("userdata: " + userData.username);

      window.localStorage.setItem('loggedAppUser', JSON.stringify(userData));
      this.loggedUser = userData;
      //this.validateToken();

      let username = userData.username;
      let id =  userData.id;
      let room = username + id

      this.joinServer(username, id);

      if(this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect)
      }else{
        //location.reload();
        //this.$router.push('/')

        window.location.replace("/");

      }
    },
    handleLogOut () {
      window.localStorage.removeItem('loggedAppUser')
      this.loginUser = ''
      this.loggedUser = "";
      this.selectedUser = null;
      socket.emit("user leave");
      this.messageAboutRejectBooking = null;
      this.$router.push('/');
      //location.reload()

    },

    handleUpdateClientConfirmedBooking (bookingID) {
      console.log("___________________id----------- " + bookingID)
      // const clientConfirmedBooking = this.recipientBookings.find(rb => rb.id === bookingID);
      // clientConfirmedBooking.status = "notSeen";
      // this.recipientBookings = this.recipientBookings.map(crb => crb.id !== bookingID ? crb : clientConfirmedBooking);
    },

    // Removing chat user of this booking (ended by time)
    handleRemoveProBookingConfirmed (booking) {
      //console.log("Pro removed test " + this.chatParticipants.length)
      this.chatParticipants = this.chatParticipants.filter(cpp => cpp.userID !== booking.user.id);
    },

    handleSetNavbarChatUser (booking, navbarChatUser) {
      console.log("Navbar chat user username " + navbarChatUser.name);
      this.clientAcceptedBookings = this.clientAcceptedBookings.concat(booking)
      this.selectedUser = null;
    },
    // Setting recipient navbar feedback and chat nav members
    async handleSetNavbarFeedback (bookingForFeedback) {
      console.log("Feedback booking user id " + bookingForFeedback.ordered[0].user.id);

      this.providerAcceptedBookings = this.providerAcceptedBookings.filter(pab => pab.id !== bookingForFeedback.id)

      this.recipientBookings = this.recipientBookings.filter(b => (b.status !== "confirmed") && b.status !== "completed")

      this.recipientCompletedBookings = this.recipientCompletedBookings.filter(rcb => rcb.id !== bookingForFeedback.id)


      this.recipientCompletedBookings.push(bookingForFeedback);
      console.log("second id ---- " + bookingForFeedback.ordered[0].id + " " + bookingForFeedback.header)
      // chat members room
      const room = bookingForFeedback.ordered[0].yritys + bookingForFeedback.user.username;
      console.log("Room to remove " + room);
      // Chat members room to remove
      const roomToRemove = this.chatParticipants.find(panel => panel.room === room)
      console.log("Removed room id " + roomToRemove.id);
      // Remove here chat users from database.
      await chatMemberService.removeChatMembersRoom(room)
      // Remove all room messages
      await conversationService.deleteRoomMessages(room);

      this.chatParticipants = this.chatParticipants.filter(cp => cp.userID !== bookingForFeedback.ordered[0].user.id);
      await providerService.removeRoom(bookingForFeedback.ordered[0].id, bookingForFeedback.user.id)
    },
    async calculateImageSize (image) {
      let img = new Image();
      img.src = require(`/server/uploads/pro/${image}`)
      await img.decode();
      let width = img.width;
      let height = img.height;
      return {
        width,
        height,
      }
    },
    async initNavChatters () {
      const foundChatMembers = await chatuserService.getChatUser(this.user.id);

      foundChatMembers.forEach(mate => {
        let member = mate.member.find(m => m.userID !== this.user.id);
        //let chat_room = mate.room;

        //console.log("Chat room + users id-- " + mate.id)
        if (!this.chatParticipants.some(cp => cp.userID === member.userID)) {
          this.chatParticipants = [
            ...this.chatParticipants,
            {
              id: mate.id,
              status: "",
              userID: member.userID,
              name: member.username,
              room: mate.room
            }
          ]
        }

        console.log("Member: " + member.username);

      })

    },
    async handleProvider () {
      //this.chatParticipants = [];

      const pro = await providerService.getProvider(this.loggedUser.id)

      //const prviderBookings = this.userIsProvider.booking
      // Bookings what provider getting from recipient
      if (pro) {
        this.proTimeCreditLeft = ((pro.proTime - new Date().getTime()) / 86400000).toFixed() < 0 ? 0 : ((pro.proTime - new Date().getTime()) / 86400000).toFixed();
        if (this.proTimeCreditLeft === 0) {
          this.isAccessTerminated = true;
        }
        this.userIsProvider = pro;
        this.proImages = [];
        this.userIsProvider.reference.forEach((item, id) => {

          this.calculateImageSize(item.name)
          .then(img => {
            console.log("Image size::: " + img.width + " " + img.height);

            this.proImages = [
              ...this.proImages,
              {
                id: item._id,
                size: img.width + "-" +img.height,    //'1400-933', //item.size,
                src: require(`/server/uploads/pro/${item.name}`),
                thumb: require(`/server/uploads/pro/${item.name}`),
                subHtml: `<div class="lightGallery-captions">
                <h2>Terve</h2>

            </div>"`
              }
            ]
          })


        })
        if (this.userIsProvider.user.avatar) {
          console.log("provider user avatar is " + this.userIsProvider.user.avatar.name);
          this.avatar = this.userIsProvider.user.avatar
        } else {
          console.log("No avatar is included")
        }
        console.log("User credit " + this.userIsProvider.credit);
        // Set current credit to user
        this.credit = this.userIsProvider.credit;
        this.providerBookings = this.userIsProvider.booking.filter(uipb => uipb.status !== "confirmed" && uipb.status !== "waiting"&& uipb.status !== "completed");
        this.providerBookingsHistory = this.userIsProvider.booking.filter(uiph => uiph.status === "confirmed");

        // this.userIsProvider.room.forEach(uip => {
        //   if (!this.chatParticipants.some(cp => cp.userID === uip.userID))
        //     this.chatParticipants.push({status: "pro", userID: uip.userID, name: uip.client, room: uip.room});
        // })



      }


      //this.providerBookings.filter(pb => pb.status === "confirmed" ? pb : null)

      this.notSeenClientBookings = this.providerBookings.filter(pb => pb.status === "notSeen")
      this.providerBookings.forEach(pb => {

        if (pb.status === "notSeen") {

          //this.notSeenClientBookings = this.notSeenClientBookings.concat(pb);
          //this.notSeenClientBookings.push(pb)
        }


      })

    },
    async handleRecipientBookings () {
      // Bookings what recipients have made
      //this.chatParticipants = [];
      let recipientbookings = await recipientService.getOwnBookings(this.loggedUser.id);
      //this.recipientBookings = await recipientService.getOwnBookings(this.loggedUser.id);
      if (recipientbookings.length > 0) {
        if (recipientbookings[0].user.avatar) {
          this.avatar = recipientbookings[0].user.avatar

        }


        //this.providerAcceptedBookings = this.recipientBookings.filter(booking => booking.status === "confirmed");
        this.providerAcceptedBookings = recipientbookings.filter(booking => booking.status === "confirmed");

        //this.clientAcceptedBookings = this.recipientBookings.filter(cb => cb.status === "notSeen" || cb.status === "seen")
        this.clientAcceptedBookings = recipientbookings.filter(cb => cb.status === "notSeen" || cb.status === "seen")

        //this.recipientCompletedBookings = this.recipientBookings.filter(rb => rb.status === "completed")
        this.recipientCompletedBookings = recipientbookings.filter(rb => rb.status === "completed" && !rb.isFeedbackGiven )
        this.recipientCompletedBookingsHistory = recipientbookings.filter(rb => rb.status === "completed" && rb.isFeedbackGiven)

        let recipientBookingsForNavChat = recipientbookings.filter(rbc => rbc.status !== "completed");

        this.recipientBookings = recipientbookings.filter(b => (b.status !== "confirmed") && b.status !== "completed")
        this.removeExpiredRecipientBookings();
        recipientBookingsForNavChat.forEach(rb => {

          if(rb.ordered.length > 0) {
            let pro = rb.ordered[0].user.username;
            console.log("Pro " + pro);
            //const index = rb.ordered[0].room.map(item => item.userID).findIndex(this.loggedUser.id);
            let index = rb.ordered[0].room.findIndex(item => item.userID === this.loggedUser.id)
            // {status: client, name: rb.ordered[0].room[0].client, room: rb.ordered[0].room[0].room}
            //this.chatParticipants.push(rb.ordered[0].room[0])



            // if (!this.chatParticipants.some(cp => cp.userID === rb.ordered[0].user.id)) {
            //   this.chatParticipants.push(
            //       {status: "client", userID: rb.ordered[0].user.id, name: rb.ordered[0].yritys, room: rb.ordered[0].room[index].room}
            //   )
            // }

          }
        })
      }
      // For recipient

    },
    handleRecipientBookingsUpdate (booking) {
      this.recipientBookings = this.recipientBookings.concat(booking);
      this.clientAcceptedBookings = this.recipientBookings.filter(cb => cb.status === "notSeen" || cb.status === "seen")
    },
    handleNotifications () {
      //this.isNotification = true;
      this.$router.push('/notification');
    },
    handleBookingWaitingProBackBtn () {
      this.selectedUser = null;

    },
    handleExitNotifications (state) {
      console.log("State is: " + state)
      this.isNotification = state;
    },
    handleStatusUpdate (id) {
      this.notSeenClientBookings = this.notSeenClientBookings.filter(nscb => nscb.id !== id ? nscb : null)
      this.handleProvider();
    },

    handleRemoveBooking (id) {
      console.log("Handling remove booking..." + id)
      this.providerBookings = this.providerBookings.filter(pb => pb.id !== id)
      // if (this.providerBookings.length === 0) {
      //   location.reload();
      // }

    },
    handleRejectBookingByPro (booking, providerID) {

      console.log("Handling rejecting booking by pro..." + booking.user.id)
      console.log("Ordered user id-- " + providerID);
      // Removing provider id from booking
      recipientService.removeProviderData(booking.id, providerID);
      // Removing this rejected booking ifd from provider
      providerService.removeProviderBooking(providerID, booking.id);

      this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id);
    },

    closeRejectedBookingMsgPanel () {
      window.localStorage.removeItem('rejectedBookingMessage');
      this.messageAboutRejectBooking = null;
    },

    test () {
      console.log("xxxx " + validation)
    },
    async validateToken () {

      const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        const tokenValid = await loginService.verifyToken(user.token)
        //console.log("Tokenvalid " + tokenValid.error)
        if (tokenValid.result === "token expired") {
          window.localStorage.removeItem('loggedAppUser')
          this.loggedUser = "";
          this.selectedUser = null;
          socket.emit("user leave");
          //this.$router.push('/login');
        } else {
          //console.log("+-+-+-+-+ " + tokenValid)
          this.loggedUser = user

          //console.log("Username app " + this.loggedUser.username)


          console.log("Loged, logged user " + this.loggedUser.username)
          //const username = this.loggedUser.username;

          this.chatParticipants = [];
          this.initNavChatters();
          this.handleRecipientBookings();
          this.handleProvider();


        }
      }

      // if (Object.keys(this.loggedUser).length > 0) {
      //   const tokenValid = await loginService.verifyToken(this.loggedUser.token)
      //   if (tokenValid === 'token expired') {
      //     window.localStorege.clear()
      //   } else {
      //     const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
      //     const user = JSON.parse(loggedUserJSON)
      //     this.loggedUser = user
      //     console.log("User token: " + this.loggedUser.token)
      //     console.log("User id: " + this.loggedUser.id)
      //     this.handleRecipientBookings();
      //     this.handleProvider();
      //   }







    },

    runEveryMinite () {
      //alert("The minute has passed!!")
      //this.arr.forEach(a => )
      let fromMap;
      if (this.clientMapSearchData.length > 0) {
        if (this.i >= this.clientMapSearchData.length) {
          fromMap = this.clientMapSearchData[this.clientMapSearchData.length - 1]
          this.sentence = "Otsitakse tegijat" + fromMap.pro + " kaugus " + fromMap.dist;
        } else {
          fromMap = this.clientMapSearchData[this.i];
          this.sentence = "Otsitakse tegijat- " + fromMap.pro + " kaugus " + fromMap.dist;


          this.i += 1;
        }

        console.log("Index length " + this.i)

      }

    }
  },
  beforeUnmount() {
    socket.emit("user leave");
    this.selectedUser = null;
  },
  unmounted() {

    //  #ede9e9
    // #fff9f5
    // COLOR #2c3e50;
  },
  computed: {
    isValid() {
      return this.msg.length > 0;
    },

  },
}
</script>

<style>

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*margin-top:50px;*/

  /*background-color: #221a16;*/
  background-color: #141414;
  color: #dddddd;
  /*height: 100vh;*/

  min-height: 100vh;
  max-height: 300vh;



  padding-top: 100px;
  padding-bottom: 150px;
  //color: #ddd;

}
html, body {
  /*overflow-x: hidden;*/
  overflow-y: auto;
}
.new-message {
  color: #f75959;
  font-size: 17px;
  font-weight: bold;
}
.no-message {
  color: white;
  font-size: 14px;
}
.user {
  font-size: 18px;
  padding: 10px;


}


.pill {
  font-size: 16px;
}
img.loading {
  width: 50px;
  height: 50px;

  background: transparent url(https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif) no-repeat scroll center center;
}

.info {
  color: white;
  background: cornflowerblue;
  font-size: 20px;
  border: solid #2d6588;
  border-radius: 5px;
  padding: 10px;
  margin-top: 70px;
  margin-bottom: 10px;
}
.success {
  color: white;
  background: lightgreen;
  font-size: 20px;
  border: solid #0e920e;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
table {
  color: darkslategrey;
}

span {
  /*background: #48abe0;*/
  /*color: white;*/
  /*padding: 1.5rem;*/
  /*font-size: 1rem;*/
  display: inline-block;
}

span.gentle-hover-shake {
  animation: tilt-shaking 0.25s infinite;
}

span.gentle-tilt-move-shake:hover {
  animation: tilt-n-move-shaking 0.25s infinite;
}

span.strong-tilt-move-shake:hover {
  animation: tilt-n-move-shaking 0.15s infinite;
}

@keyframes tilt-shaking {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-20deg); }
  100% { transform: rotate(0deg); }
}

@keyframes tilt-n-move-shaking {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(5px, 5px) rotate(5deg); }
  50% { transform: translate(0, 0) rotate(0deg); }
  75% { transform: translate(-5px, 5px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

/* Fluid */
@keyframes move-1 {
  to {
    left: -50%;
  //left: -70%;
  }
}
@keyframes move-2 {
  to {
    left: -20%;
  }
}
#container {
  width: 100%;
  height: 30px;
  overflow: hidden;
  position: relative;
}


.box {
  position: absolute;
  display: inline-block;
  width: 30%;
  /*width: 60%;*/
  font-size: 18px;
  height: 30px;
  background: red;
  animation-duration: 20s;
  animation-iteration-count: infinite;
}
.box:nth-child(1) {
  animation-name: move-1;
  left: 100%;
}

/*.box:nth-child(2) {*/
/*    animation-name: move-2;*/
/*    left: 130%;*/
/*}*/

.bookingRejectMessagePanel {
  width: 30%;
  border: solid #f7c160;
  padding: 14px;
  margin-top: 30px;
  margin-left: 60%;
}

.bookingRejectMessage {
  color: orangered;
}

.bookingRejectMessageClose {
  cursor: pointer;
  color:greenyellow;
  display: flex;
  justify-content: right;
}

@media only screen and (max-width: 1000px) {
  .bookingRejectMessagePanel {
    width: 95%;
    margin: auto;
  }

  @keyframes move-1 {
    to {
      left: -85%;
    //left: -70%;
    }
  }
  .box {
    position: absolute;
    display: inline-block;
    width: 80%;
    /*width: 60%;*/
    font-size: 18px;
    height: 30px;
    background: #332D2D;
    color: #f04819;
    animation-duration: 10s;
    animation-iteration-count: infinite;

  }

}

/*.navbar.navbar-dark.bg-dark{*/
/*  background-color: #AABB55!important;*/
/*}*/

</style>
