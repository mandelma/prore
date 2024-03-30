<template>
<!--  style="&#45;&#45;mdb-bg-opacity: 0.5;"-->
  <MDBNavbar
      dark
      size="large"
      position="top"

      container
      expand="xl"
      bg="secondary"
      bg-secondary bg-gradient text-white
      class="d-flex justify-content-between"


  >
    <router-link to="/" @click="onPressedLogoBtn">
      <MDBNavbarBrand>
        PROKEIKKATORI
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
        <MDBDropdownMenu  >
          <div>
            <MDBDropdownItem href="#" v-for="(item, i) in chatParticipants" :key="i">

              <router-link

                  to="/chat"
                  @click="updateRoom(item)"
                  style="font-size: 17px;"
                  :class="{'new-message': newMessageList.some(nml => nml.userID === item.userID)}"

              >
                {{newMessageList.some(nml => nml.userID === item.userID) ?  item.name + "  !" : item.name}}

              </router-link>




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








<!--      <MDBDropdown-->
<!--          v-if="newMessageList.length > 0"-->
<!--          v-model="dropDownDialog"-->
<!--          style="padding: 10px;"-->
<!--      >-->

<!--        <MDBDropdownToggle-->
<!--            tag="a"-->
<!--            class="nav-link"-->
<!--            style="padding: 20px;"-->
<!--            @click="dropDownDialog = !dropDownDialog"-->
<!--        >-->

<!--            <MDBIcon icon="comments" size="2x"/>-->
<!--            <MDBBadge-->
<!--                class="translate-middle p-1"-->
<!--                pill-->
<!--                notification-->
<!--                color="danger"><span style="font-size: 12px; padding: 5px;">{{ newMessageList.length }}</span></MDBBadge>-->



<!--        </MDBDropdownToggle>-->
<!--        <MDBDropdownMenu >-->
<!--          <MDBDropdownItem   href="#" v-for="(item, i) in newMessageList" :key="i">-->
<!--            <router-link to="/chat" @click="updateUserRoom(item)" >-->
<!--              {{item.username}}-->
<!--            </router-link>-->
<!--          </MDBDropdownItem>-->


<!--        </MDBDropdownMenu>-->
<!--      </MDBDropdown>-->

      <MDBNavbarItem
          v-if="providerBookings.length > 0"
          to="/notification"

          class="me-3 me-lg-0"
          linkClass="link-secondary"
          style="padding: 10px;"
      >

        <img
            style="width: 30px; margin-top: 15px;"
            :src="require(`@/assets/navbar/bell.png`)"
            @click="handleNotifications"
            alt="Notifications"
        />


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
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem v-if="userIsProvider || recipientBookings.length > 0"  href="#">
            <router-link to="/profile" class="user">
              Omat tiedot
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem v-if="userIsProvider"  href="#">
            <router-link to="/gallery" class="user">
              Galleria
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem v-if="recipientCompletedBookingsHistory.length > 0" href="#">
            <router-link to="/history" class="user">
              Historia
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem
              v-if="userIsProvider"
              href="#">
            <router-link to="/pay-plan" class="user">
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

      :confirmedBookingsByClient = clientAcceptedBookings
      :confirmedBookingsByProvider = providerAcceptedBookings
      @booking:update = handleRecipientBookingsUpdate

      @exit:notifications = handleExitNotifications
      @update:status = handleStatusUpdate

      @update:booking = handleUpdateClientConfirmedBooking

      @remove:booking = handleRemoveBooking

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

      :wentOut = wentOut
  />


<!--  selected user {{selectedUser}}-->
<!--provider accepted bookings {{providerAcceptedBookings}}-->
<!--  feedback {{recipientCompletedBookings}}<br>-->
<!--  customer {{rateCustomer}}-->
<!--  chat participants {{chatParticipants}}<br>-->

<!--  :src= "`http://localhost:3001/avatar/${avatar.name}`"-->
<!--  :src= "`https://line-app-pro.onrender.com/avatar/${avatar.name}`" Serveris - lepakas.png-->

  <!--  app selected user {{selectedUser}}-->

<!--  new message list xxxxxx {{newMessageList}}-->


<!--  userIsProvider {{userIsProvider                         }}-->
<!--  xxxprovider bookings {{providerBookings}}xxx-->
<!--  new message {{newMessage}}-->

<!--  recipient bookings length{{recipientBookings.length}}
  recipient confirmed: {{recipientConfirmedBookings}}-->

<!--  {{loggedUser}}-->

<!--  <iframe src="https://deadsimplechat.com/LMOqgCkx4" width="100%" height="600px"></iframe>-->

<!--<ul v-for="(msg, i) in conversation" :key="i">-->
<!--  <li style="color: red;">{{msg}}</li>-->
<!--</ul>-->

<!--  <div >-->
<!--    users{{users}}-->
<!--    <h2 style="color: red;">{{messageInfo}}</h2>-->
<!--    <div v-for="user in users" :key="user.userID">-->
<!--      <User-->
<!--        :user = user-->
<!--        :selected="selectedUser === user"-->
<!--        @select="onSelectUser(user)"-->
<!--      />-->
<!--    </div>-->

<!--    <form @submit.prevent="submit">-->
<!--      <button type="submit">Käivita server</button>-->
<!--    </form>-->

<!--    <div>-->
<!--      <ul v-for="(user, i) in users" :key="i">-->
<!--        <li>-->
<!--          {{ user.username }}-->

<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--    messages {{messages}}-->

<!--    <MessagePanel-->
<!--        v-if="selectedUser"-->
<!--        :user = selectedUser-->
<!--        @new:message="handleMessage"-->
<!--    />-->


<!--  other user {{otheruser}}-->


<!--    <div class="panel">-->
<!--      <div class="messages" ref="messagesRef">-->
<!--        <div class="inner">-->
<!--          <div v-for="(message, index) in messages"-->
<!--               :key="index"-->
<!--               class="message"-->
<!--          >-->


<!--            <div>-->
<!--              {{message.user}}-->
<!--            </div>-->


<!--            <div class="text">{{message.content}}</div><br/>-->


<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
<!--      <form @submit.prevent="sendMessage">-->

<!--        <input-->
<!--            v-model="msg"-->
<!--            placeholder="Kirjoita viesti..."-->

<!--        />-->
<!--        <button :disabled="!isValid">+</button>-->
<!--      </form>-->
<!--    </div>-->

<!--  </div>-->
<!--  <form @submit.prevent="startChat">-->
<!--    <button type="submit">Liitu kõigi tubadega</button>-->
<!--  </form>-->
<!--  <form @submit.prevent="updateRoomUsers">-->
<!--    <button type="submit">Uuenda toa osalejaid</button>-->
<!--  </form>-->

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
import monthConverter from './components/controllers/month-converter'
import successMessage from "@/components/notifications/successMessage";
import infoMessage from "@/components/notifications/infoMessage";

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
  MDBDropdownItem
} from 'mdb-vue-ui-kit';
import { ref } from "vue";
//import socket from "@/socket";
import socket from "@/socket";
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

      isAccessTerminated: true,
      messageAboutAccess: "Access denied!",

      recipientBookings: [],
      clientAcceptedBookings: [],
      providerAcceptedBookings: [],

      userIsProvider: null,
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
      otheruser: {}

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

    this.validateToken();

    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.user = user;
      const username = user.username;
      const userID = user.id
      this.currentRoom = user.username + user.id;
      this.joinServer(username, userID);

      //this.validateToken();
    }

    const clientForFeedback = window.localStorage.getItem('customerFeedback')
    if (clientForFeedback) {
      const customer = JSON.parse(clientForFeedback);
      this.rateCustomer = customer;
    }
    //this.runEveryMinite ()
    //setInterval(this.runEveryMinite, 60*1000);

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


      // socket.on("update chat avatar" ,(avatar) => {
      //   this.xavatar = avatar
      //   for (let i = 0; i < this.users.length; i++) {
      //     const ex =  this.users[i];
      //     console.log("Avatar is avatar--- " + avatar)
      //     ex.avatar = avatar;
      //
      //   }
      //   console.log("Chat avatar is " + avatar)
      // })


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
            //this.messageInfo = "Said uue sõnumi";
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
              existingUser.connected = user.connected;console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx")

              return;
            }
          }



          //user.self = user.userID === socket.userID;
          user.self = user.userID === this.loggedUser.id;
          //if (user.userID !== this.loggedUser.id)

          // will keep message panel open
          if (!user.self)
            this.selectedUser = user;


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
            console.log("Neeeeew messageeeee ")
          }
        }
          // this.newMessageList.push(data)



      })

      socket.on("accept provider", ({id, booking}) => {

        this.providerBookings.push(booking);
        this.notSeenClientBookings.push(booking);

        // if (!this.chatParticipants.some(cp => cp.userID === room.userID)) {
        //
        //   this.chatParticipants.push(room);
        // }



      })

      socket.on("accept recipient", async ({id, booking}) => {
        console.log("aaaaaaaauuuuuuuuuuuuuuuuuuu" + id);
        // console.log("Recipient name " + booking.user.firstName);
        //this.recipientTest = booking;
        let proConfirmedBooking = await recipientService.getBookingById(booking.id);

        const foundObject = this.recipientBookings.find(item => item.id === booking.id);

        console.log("FoundbOject status = " + foundObject.header + " " + foundObject.status)

        foundObject.status = "confirmed";

        this.recipientBookings = this.recipientBookings.map(rb => rb.id !== booking.id ? rb : foundObject);

        console.log("FoundObject status after = " + foundObject.header + " " + foundObject.status)
        // Removing client waiting for provider confirmation
        this.recipientBookings = this.recipientBookings.filter(obj => obj.id !== booking.id)
        // Adding client booking confirmed by provider
        //this.providerAcceptedBookings.push(proConfirmedBooking);
        //this.providerAcceptedBookings = this.providerAcceptedBookings.concat(proConfirmedBooking)
        this.providerAcceptedBookings.push(proConfirmedBooking)

        this.clientAcceptedBookings = this.clientAcceptedBookings.filter(cab => cab.id !== booking.id);


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


    },
    onPressedUserIcon () {
      // console.log("Pressed to user icon")
      this.selectedUser = null;
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
      //this.recipientBookings = this.recipientBookings.map(rb => rb.id )
      if (!this.chatParticipants.some(cp => cp.userID === navbarChatUser.userID)) {
        this.chatParticipants.push(navbarChatUser);
      }

    },
    // Setting recipient navbar feedback and chat
    async handleSetNavbarFeedback (bookingForFeedback) {
      console.log("Feedback booking user id " + bookingForFeedback.ordered[0].user.id);

      //this.providerAcceptedBookings.filter(pab => pab.id !== bookingForFeedback.id);
      this.providerAcceptedBookings = this.providerAcceptedBookings.filter(pab => pab.id !== bookingForFeedback.id)

      this.recipientBookings = this.recipientBookings.filter(b => (b.status !== "confirmed") && b.status !== "completed")
      // const currentRecipientBooking = this.recipientBookings.find(crb => crb.id === bookingForFeedback.id);
      // currentRecipientBooking.status = "confirmed";
      this.recipientCompletedBookings = this.recipientCompletedBookings.filter(rcb => rcb.id !== bookingForFeedback.id)


      this.recipientCompletedBookings.push(bookingForFeedback);
      console.log("second id ---- " + bookingForFeedback.ordered[0].id + " " + bookingForFeedback.header)

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
    async handleProvider () {
      //this.chatParticipants = [];
      this.userIsProvider = await providerService.getProvider(this.loggedUser.id)

      //const prviderBookings = this.userIsProvider.booking
      // Bookings what provider getting from recipient
      if (this.userIsProvider) {
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

        this.userIsProvider.room.forEach(uip => {
          if (!this.chatParticipants.some(cp => cp.userID === uip.userID))
            this.chatParticipants.push({status: "pro", userID: uip.userID, name: uip.client, room: uip.room});
        })






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

        recipientBookingsForNavChat.forEach(rb => {

          if(rb.ordered.length > 0) {
            let pro = rb.ordered[0].user.username;
            console.log("Pro " + pro);
            //const index = rb.ordered[0].room.map(item => item.userID).findIndex(this.loggedUser.id);
            let index = rb.ordered[0].room.findIndex(item => item.userID === this.loggedUser.id)
            // {status: client, name: rb.ordered[0].room[0].client, room: rb.ordered[0].room[0].room}
            //this.chatParticipants.push(rb.ordered[0].room[0])
            if (!this.chatParticipants.some(cp => cp.userID === rb.ordered[0].user.id)) {
              this.chatParticipants.push(
                  {status: "client", userID: rb.ordered[0].user.id, name: rb.ordered[0].yritys, room: rb.ordered[0].room[index].room}
              )
            }

          }
        })
      }
      // For recipient

    },
    handleRecipientBookingsUpdate (booking) {
      this.recipientBookings = this.recipientBookings.concat(booking);
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
      alert("The minute has passed!!")
    }
  },
  beforeUnmount() {
    socket.emit("user leave");
    this.selectedUser = null;
  },
  unmounted() {
    //  #ede9e9
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

  background-color: #e6e7e2;
  /*height: 100vh;*/
  min-height: 100vh;



  padding-top: 100px;
  color: black;

}
.new-message {
  color: #f75959;
  font-size: 17px;
  font-weight: bold;
}
.user {
  font-size: 18px;
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
</style>
