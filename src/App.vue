<template>
  <MDBNavbar
      dark
      size="large"
      position="top"
      bg="dark"
      container


      bg-secondary bg-gradient text-white

      class="d-flex justify-content-between"

  >
    <router-link to="/" @click="onPressedLogoBtn">
      <MDBNavbarBrand>
        <img :src="require(`@/assets/home.png`)" style="width: 20px;" alt="home" />
<!--        <h4 style="color: cadetblue">{{ t('navMainPage') }}</h4>-->
      </MDBNavbarBrand>
    </router-link>
    <MDBNavbarNav>
      <MDBNavbarItem  class="mb-2 mb-lg-0 d-flex flex-row">
        <language />
      </MDBNavbarItem>
    </MDBNavbarNav>


    <MDBNavbarNav right class="mb-2 mb-lg-0 d-flex flex-row" v-if="loggedUser.token === undefined">

      <MDBNavbarItem >
        <router-link to="/login" @click="collapse7 = false" style="color: greenyellow;" >Kirjaudu</router-link>

      </MDBNavbarItem>

    </MDBNavbarNav>



    <MDBNavbarNav right class="mb-2 mb-lg-0 d-flex flex-row"  v-else>

      <MDBDropdown
          v-if="chatParticipants.filter(navchat => navchat.isActive).length > 0"
          v-model="dropDownChat"
          style="padding: 3px;"
          variant="none"
      >

        <MDBDropdownToggle
            tag="a"
            class="nav-link"
            style="padding-top: 15px; "
            @click="dropDownChat = !dropDownChat"
        >

          <img
              style="width: 35px;"
              :src="require(`@/assets/navbar/chat.png`)"

              alt="Chat"
          />

          <!--          <MDBIcon  icon="comments" size="2x"/>-->
          <MDBBadge
              v-if="newMessageList.length > 0"
              class="translate-middle p-1"
              pill
              notification
              color="danger"><span style="font-size: 12px; padding: 2px;">{{ newMessageList.length }}</span></MDBBadge>



        </MDBDropdownToggle>
        <MDBDropdownMenu dark  style="padding: 12px;" >

          <!--          :class="[newMessageList.some(nml => nml.userID === item.userID) ? 'new-message' : '', 'no-message']"-->

          <!--                  proTimeCreditLeft-->
          <!--          :class="{'strong-tilt-move-shake': false }"-->
          <!--          :disabled="item.proID === user.id && isAccessTerminated"-->
          <div>
            <!--              <div v-if="item.proID === user.id && isAccessTerminated">-->

            <!--              </div>-->
            <MDBDropdownItem  href="#" v-for="(item, i) in chatParticipants.filter(navchat => navchat.isActive)" :key="i">
              <router-link
                  style="color: green;"

                  :class="{ disabled: item.proID === user.id && isAccessTerminated}"
                  to="/chat"
                  @click="updateRoom(item)"
              >
                <!--                nml.userID === item.userID &&-->
                <div v-if="newMessageList.some(nml => nml.room === item.room)">
                  <h4
                      v-if="item.proID === user.id"
                      class="chat-new-message-provider">
                    <b >
                      {{item.pro}}&nbsp;&nbsp;(&nbsp;{{item.name}}&nbsp;)
                      <MDBBadge
                          color="danger"
                          class="translate-middle p-1"
                          pill
                          notification
                      >Uusi viesti!</MDBBadge>
                    </b>

                  </h4>
                  <h4
                      v-else
                      class="chat-new-message-client">
                    <b >
                      {{item.name}}
                      <MDBBadge
                          color="danger"
                          class="translate-middle p-1"
                          pill
                          notification
                      >Uusi viesti!</MDBBadge>
                    </b>
                  </h4>
                </div>


                <h4
                    v-else-if="item.proID === user.id"
                    class="chat-user-is-provider"
                >
                  {{item.pro}}&nbsp;&nbsp;(&nbsp;{{item.name}}&nbsp;)
                </h4>
                <h4 v-else class="chat-user-is-client">{{item.name}}</h4>

              </router-link>

              <!--                <router-link-->

              <!--                    style="color: green;"-->
              <!--                    to="/chat"-->
              <!--                    @click="updateRoom(item)"-->
              <!--                >-->
              <!--                  &lt;!&ndash;                nml.userID === item.userID &&&ndash;&gt;-->
              <!--                  <div v-if="newMessageList.some(nml => nml.room === item.room)">-->
              <!--                    <h4-->
              <!--                        v-if="item.proID === user.id"-->
              <!--                        class="chat-new-message-provider">-->
              <!--                      <b >-->
              <!--                        {{item.pro}}&nbsp;&nbsp;(&nbsp;{{item.name}}&nbsp;)-->
              <!--                      </b>-->
              <!--                    </h4>-->
              <!--                    <h4-->
              <!--                        v-else-->
              <!--                        class="chat-new-message-client">-->
              <!--                      <b >-->
              <!--                        {{item.name}}-->
              <!--                      </b>-->
              <!--                    </h4>-->
              <!--                  </div>-->


              <!--                  <h4-->
              <!--                    v-else-if="item.proID === user.id"-->
              <!--                    class="chat-user-is-provider"-->
              <!--                >-->
              <!--                  {{item.pro}}&nbsp;&nbsp;(&nbsp;{{item.name}}&nbsp;)-->
              <!--                </h4>-->
              <!--                <h4 v-else class="chat-user-is-client">{{item.name}}</h4>-->

              <!--              </router-link>-->


            </MDBDropdownItem>

          </div>

        </MDBDropdownMenu>
      </MDBDropdown>

      <!--      pro time credit left {{proTimeCreditLeft}}-->


      <MDBDropdown
          v-if="recipientCompletedBookings.length > 0"
          v-model="dropDownfeedback"
          style="padding: 3px; margin-top: 10px;"
      >

        <MDBDropdownToggle
            tag="a"
            class="nav-link"
            style="padding: 5px; padding-top: 17px;"
            @click="dropDownfeedback = !dropDownfeedback"
        >

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


        <MDBDropdownMenu dark style="">
          <MDBDropdownItem   href="#" v-for="(item, i) in recipientCompletedBookings" :key="i">
            <router-link to="/feedback" @click="handleFeedbackClient(item)" style="font-size: 17px; color: #ddd;">
              <!--              <month-converter-->
              <!--                  :num="item.onTime[0].month"-->
              <!--              />-->
              <!--              /{{ item.onTime[0].day }}-->
              <!--              -{{item.ordered[0].yritys}}-->
              <!--              : {{item.header}}-->
              {{item.date}} - {{item.header}}

            </router-link>
          </MDBDropdownItem>


        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBNavbarItem v-if="newOffers.length > 0 " class="me-3 me-lg-0" @click="offerSeen">
        <img
            style="margin-top: 17px; margin-left: 15px;"
            :src="require(`@/assets/bell-32.png`)"
            alt="tarjous"
        />
<!--        <p>Tarjous <MDBBadge color="danger" class="ms-2" >{{newOffers.length}}</MDBBadge></p>-->
        <MDBBadge color="danger" class="translate-middle p-1" >{{newOffers.length}}</MDBBadge>
      </MDBNavbarItem>

      <MDBNavbarItem
          v-if="providerBookings.length > 0"
          to="/notification"

          class="me-3 me-lg-0"
          linkClass="link-secondary"
          style="padding: 10px;"
      >

        <span :class="{'gentle-hover-shake': isRingBell}" >
          <img
              style="width: 30px; margin-top: 5px;"
              :src="require(`@/assets/navbar/bell.png`)"
              @click="handleNotifications"
              alt="Notifications"
          />
        </span>

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



      <MDBDropdown v-model="dropdownUser"  style="padding: 10px; margin-top: 10px;">

        <MDBDropdownToggle
            tag="a"

            @click="dropdownUser = !dropdownUser"
        >

          <img
              style="width: 35px; height: 35px; border: solid grey; border-radius: 50%;"

              :src="showAvatar ? showAvatar : require(`/server/uploads/avatar/${avatar.name}`)"
              alt="user_avatar"
          />
<!--          <MDBBadge v-if="notes.filter(note => note.isNewMsg).length > 0"-->
<!--                    notification color="info"-->
<!--                    style="margin-top: 10px;"-->
<!--                    class="translate-middle p-2"-->
<!--                    pill-->
<!--          >-->
<!--            {{notes.filter(note => note.isNewMsg).length}}-->
<!--          </MDBBadge>-->

        </MDBDropdownToggle>
        <MDBBadge v-if="notes.filter(note => note.isNewMsg).length > 0"
                  notification color="info"
                  style="margin-top: 10px;"
                  class="translate-middle p-2"
                  pill
        >
          {{notes.filter(note => note.isNewMsg).length}}
        </MDBBadge>


        <MDBDropdownMenu dark  style="padding: 12px; margin-top: 10px;">
<!--          <MDBDropdownItem  href="#" class="x" style=" border-radius: 0; :hover: background-color: blue;">-->
<!--            <router-link to="/language" class="user">-->
<!--              Kieliasetukset-->
<!--            </router-link>-->
<!--          </MDBDropdownItem>-->
          <MDBDropdownItem href="#" v-if="notes.length > 0">
            <router-link to="/message" class="user" @click="handleNotes" >
              Messages
              <MDBBadge v-if="notes.filter(note => note.isNewMsg).length" color="info" class="ms-2" >
                {{notes.filter(note => note.isNewMsg).length}}
              </MDBBadge>
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem  href="#" class="x" style=" border-radius: 0; :hover: background-color: blue;">
            <router-link to="/profile" class="user" @click="onPressedUserIconChildren">
              Omat tiedot
            </router-link>
          </MDBDropdownItem>

          <MDBDropdownItem v-if="userIsProvider"   href="#">
            <router-link to="/gallery" class="user"  @click="onPressedUserIconChildren">
              Galleria
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem href="#" v-if="recipientCompletedBookingsHistory.length > 0 || proCompletedHistory.length > 0" >
            <router-link to="/history" class="user"  @click="onPressedUserIconChildren">
              Arkisto
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem
              v-if="recipientBookings.length > 0"
              href="#">
            <router-link to="/received" class="user"  @click="onPressedUserIconChildren">
              Tilaukset
            </router-link>

          </MDBDropdownItem>
          <MDBDropdownItem
              v-if="userIsProvider"
              href="#">
            <router-link to="/pay-plan" class="user"  @click="onPressedUserIconChildren">
              Laskutus
            </router-link>

          </MDBDropdownItem>
          <MDBDropdownItem
              href="#">
            <router-link to="/rules"  class="user"  @click="onPressedUserIconChildren">
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
    <MDBNavbarNav center class="mb-2 mb-lg-0" >

      <div v-if="proTimeCreditLeft !== null">
        <div v-if="currentRouteName === 'dash-board' || currentRouteName === 'provider-panel'">

          <div
              v-if="proTimeCreditLeft <= 0"
          >
            <h5 class="limit-warning">Käyttö päättynyt!&nbsp;&nbsp;&nbsp;
              <span class="limit-refill" @click="$router.push('/pay-plan')">Lataa aikaa!</span>
            </h5>

          </div>

          <div v-else-if="proTimeCreditLeft <= 3 && proTimeCreditLeft > 0">
            <h5 class="limit-warning">Käyttö {{proTimeCreditLeft }} päivää&nbsp;&nbsp;&nbsp;
              <span class="limit-refill" @click="$router.push('/pay-plan')">Lataa aikaa!</span>
            </h5>

          </div>
          <div v-else>
            <!--        <div v-if="((userIsProvider.proTime - new Date().getTime()) / 86400000).toFixed() === 'NaN'" class="spinner-border" role="status">-->
            <!--          <span class="visually-hidden">Loading...</span>-->
            <!--        </div>-->
            <div >
              <h5 class="limit-success">Käyttö: {{proTimeCreditLeft}} päivää</h5>
            </div>

          </div>


        </div>

      </div>

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

  <div v-if="messageAboutRejectBooking" class="bookingRejectMessagePanel">
    <div v-for="(message, index) in messageAboutRejectBooking" :key="index">
      <p class="bookingRejectMessageClose" @click="closeProRejectedBookingMsgPanel(index)">Selvä</p>
<!--      <h3 class="bookingRejectMessage">{{messageAboutRejectBooking}}</h3>-->
      <h3 class="bookingRejectMessage">{{message.msg + ". Syy: " + message.reason}}</h3>
    </div>



  </div>
  <div v-if="messageAboutRejectBookingByClient" class="bookingRejectMessagePanel">
    <div v-for="(message, index) in messageAboutRejectBookingByClient" :key="index">
      <p class="bookingRejectMessageClose" @click="closeClientRejectedBookingMsgPanel(index)" >Selvä</p>
<!--      <h3 class="bookingRejectMessage">{{messageAboutRejectBookingByClient}}</h3>-->
      <h3 class="bookingRejectMessage">{{message.msg + ". Syy: " + message.reason}}</h3>
    </div>

  </div>

  <div v-if="messageAboutOfferConfirmation && user" class="bookingConfirmedMessagePanel">
    <div v-for="(message, index) in messageAboutOfferConfirmation" :key="index">
      <p class="bookingConfirmedMessageClose" @click="closeBookingConfirmedMessagePanel(index)" >Selvä</p>
      <h3 class="bookingConfirmedMessage">{{message.msg}}</h3>
    </div>
<!--    <p class="bookingConfirmedMessageClose" @click="closeBookingConfirmedMessagePanel" >Selvä</p>
    <h3 class="bookingConfirmedMessage">{{messageAboutOfferConfirmation}}</h3>-->
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
    </div>
    <!-- Copyright -->
  </MDBFooter>

  <router-view
      :filled_days = "filled_days"
      :notes = notes
      @remove_note = handleRemoveNote
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
      @booking:update = handleCreateBooking
      @booking_map:update = handleCreateMapBooking

      @offer_confirmed = handleOfferConfirmed

      @exit:notifications = handleExitNotifications
      @update:status = handleStatusUpdate

      @update:proChatNav = handleUpdateProChatNav

      @update:booking = handleUpdateClientConfirmedBooking

      @create:offer = handleCreateOffer
      @editOfferStatus = handleEditOfferStatus

      @remove:acceptedBooking = handleRemoveAcceptedBooking
      @reject_pro_form_booking = handleRejectProFormBooking
      @reject_bookingByPro_no_offers = handleRejectBookingByProNoOffers
      @reject_bookingByClient_no_offers = handleRejectBookingByClientNoOffers
      @removeBookingWithOffers = handleRemoveBookingWithOffers

      @activate:bell = handleActivateBell
      @deactivate:bell = handleDeActivateBell

      :bookings = providerBookings
      :bookingsConfirmed = providerBookingsHistory
      :recipientConfirmedBookings = recipientCompletedBookingsHistory
      :proCompletedHistory = proCompletedHistory
      @removeProBookingConfirmed = handleRemoveProBookingConfirmed
      :customer = rateCustomer

      @isRated = handleRated
      @backFromFeedback = handleBackFromFeedbackClient


      @finalinfo = fromFinal
      @initializeChat = handleInitializeChat
      @joinChatPanel = handleJoinChatPanel


      :chatusers = users
      :activeUser = activeUser
      :messages = conversation

      @set:room = handleSetRoom

      :isSelectedByExpiredUser = isSelectedByExpiredUser

      :newMessageRoom = newMessageRoom


      :provider = userIsProvider
      :recipient = recipientBookings
      @recipient:date_ms = handleUpdateBookingDate_ms
      :creditLeft = proTimeCreditLeft
      @show-created-provider = handleShowCreatedProvider
      @updateProTimeCredit = handleUpdateProTimeCredit


      :isAccessDenied = isAccessTerminated
      @select:user = onSelectUser
      @noSelected = noSelectUser
      :selecteduser = selectedUser

      @join:visitor = handleJoinVisitor

      @on:message = handleMessage

      @otherUser = otherUser

      @bookingWaitingProBack = handleBookingWaitingProBackBtn

      @updateAvatar = handleUpdateAvatar
      @removeAvatar = handleRemoveAvatar

      :recipient-test = recipientTest

      @setNavbarChatUser = handleSetNavbarChatUser
      @setNavbarAboutSetFeedback = handleSetNavbarFeedback


      @resetMapSearch = mapSearchReset

      :wentOut = wentOut
  />

  time {{new Date().getTime()}}

<!--  <button @click="eemalda">Eemalda localst</button>-->


<!--    pro filled days {{filled_days}}-->

<!--  route {{route.name}}-->

<!--  Client reject messages {{messageAboutRejectBookingByClient}}-->

<!--      new offers {{newOffers}}-->
<!--  <language />-->

<!--  <h1>{{ t('welcome') }}</h1><br>-->


<!--  language is {{currentLanguage}}-->

  <!--  <img :src="imageSrc"/><br>-->


<!--    selected user {{selectedUser}}<br>-->
    currentChatRoom {{currentChatRoom}}<br>


  <!--    users {{users}}-->
  <!--  new message test {{newMessageTest}}-->

  <!--access {{isAccessTerminated}}-->

  <!--  Selected user {{selectedUser}}<br>-->
  <!--  New message list {{newMessageList}}-->

  <!--  Newmessagelist {{newMessageList}}<br>-->
  <!--  &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;<br>-->
    Chatparticipants {{chatParticipants}}<br>
  <!--  {{chatParticipants.length}}<br>-->

  <!--  selected user {{selectedUser}}-->
  <!--  Recipient completed bookings {{recipientCompletedBookings}}-->

</template>

<script>
/* eslint-disable */

import imageService from "@/service/image";

const initReactiveProperties = (user) => {
  user.hasNewMessages = false;
  user.messages = [];
};
import Notifications from './pages/Notification.vue'
import userService from "./service/users"
import providerService from './service/providers'
import recipientService from './service/recipients'
import loginService from "./service/login"
import conversationService from "./service/conversation"
import chatMemberService from "./service/chatUsers"
import clientHistoryService from "./service/clientHistory"
import proHistoryService from "./service/proHistory"
import offerService from "./service/offers"
import messageService from "./service/messages"
import monthConverter from './components/controllers/month-converter'
import successMessage from "@/components/notifications/successMessage";
import infoMessage from "@/components/notifications/infoMessage";
import language from "@/components/Language"
import { className } from '@/components/controllers/recipient'
import '@/css/notification.css'

import { useRoute } from 'vue-router';

import { useI18n } from 'vue-i18n';
import { ref, watchEffect } from 'vue';
import Language from './components/Language'

//import recipientPanelFinal from "@/pages/RecipientPanelFinal";

import validation from './helpers/loginValidation.js'
import User from './components/chatio/User.vue'
import MessagePanel from "./components/chatio/MessagePanel.vue"

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
//import {ref, watchEffect} from "vue";
//import socket from "@/socket";
import socket from "@/socket";
import chatuserService from '@/service/chatUsers'
import mailService from '@/service/mailer'

import vue from 'vue'
//import { useI18n } from 'vue-i18n';


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
    MDBDropdownItem,
    Language,
    language
  },

  data () {
    const route = useRoute()
    return {
      route,
      notes: [],
      res: [],
      filled_days: [],
      //currentLanguage: null,
      currentChatRoom: null,
      newMessageTest: false,
      imageSrc: null,
      unread: null,
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
      newOffers: [],

      messageAboutRejectBooking: null,
      messageAboutRejectBookingByClient: null,
      messageAboutOfferConfirmation: null,

      recipientImages: [],

      userIsProvider: null,
      proTimeCreditLeft: null,
      isSelectedByExpiredUser: false,
      proImages: [],
      isProOpenGallery: true,
      providerBookings: [],
      providerBookingsHistory: [],
      recipientCompletedBookings: [],
      recipientCompletedBookingsHistory: [],
      proCompletedHistory: [],

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

  },

  async mounted() {
    const recipientClass = new className("Hallo");

    console.log("xxx " + recipientClass.response("aaa"));

    // const language = localStorage.getItem('lang');
    // if (language) {
    //   this.currentLanguage = language;
    // }


    this.validateToken();

    const currentChatRoom = window.localStorage.getItem("currentRoom")
    if (currentChatRoom) {
      const roomNow = JSON.parse(currentChatRoom);
      this.currentChatRoom = JSON.parse(currentChatRoom);
      this.selectedUser = this.users.find(current => current.room === roomNow && current.userID !== this.loggedUser.id);
      socket.emit("update room", roomNow);
    }



    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.user = user;
      const username = user.username;
      const userID = user.id

      //this.currentRoom = user.username + user.id;
      this.joinServer(username, userID);

      const rejectedByProMsg = window.localStorage.getItem('rejectedBookingMessage');
      if (rejectedByProMsg) {
        //this.messageAboutRejectBooking = JSON.parse(rejectedByProMsg).msg + " Syy: " + JSON.parse(rejectedByProMsg).reason;
        this.messageAboutRejectBooking = JSON.parse(rejectedByProMsg)
      }

      const rejectedByClientMsg = window.localStorage.getItem('clientRejectedBookingMessage');
      if (rejectedByClientMsg) {
        //this.messageAboutRejectBookingByClient = JSON.parse(rejectedByClientMsg).msg + " Syy: " + JSON.parse(rejectedByClientMsg).reason;
        this.messageAboutRejectBookingByClient = JSON.parse(rejectedByClientMsg)
      }

      const bookingConfirmation = window.localStorage.getItem('bookingConfirmedByClient');
      if(bookingConfirmation) {
        //this.messageAboutOfferConfirmation = JSON.parse(bookingConfirmation).msg;
        this.messageAboutOfferConfirmation = JSON.parse(bookingConfirmation);
      }
    }


    const selectedUserJSON = window.localStorage.getItem('selectedChatUser');
    if (selectedUserJSON) {
      const sUser = JSON.parse(selectedUserJSON)
      //this.selectedUser = JSON.parse(selectedUserJSON)

      this.selectedUser = sUser;
      socket.emit("update room", sUser.room);



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
    const dropdownLang = ref(false)
    const dropdown2 = ref(false)
    const dropdownBell = ref(false)
    const dropDownfeedback = ref(false)
    const { t } = useI18n();
    //const { locale } = useI18n();
    // watchEffect(() => {
    //   const storedLang = localStorage.getItem('lang');
    //   if (storedLang) {
    //     //console.log("Heeiiiiii")
    //     console.log("Heeiiiiii " + storedLang)
    //     //this.locale = storedLang;
    //   }
    // });
    return {
      collapse7,
      dropDownDialog,
      dropDownChat,
      dropdownUser,
      dropdownLang,
      dropdown2,
      dropdownBell,
      dropDownfeedback,
      t,
      //locale,
      //watchEffect
    }
  },


  methods: {
    async eemalda () {
      await messageService.removeSelectedMessage(this.user.id, '671aaa8a737a2aca9833b3ce');
      //localStorage.removeItem('rejectedBookingMessage')
      const myData = await userService.getUser(this.user.id);
      this.notes = myData.messages;
    },
    async createNoteToDisplay (content, reason, sender) {
      const message = {
        isNewMsg: true,
        content: content,
        sender: sender,
        reason: reason,
        time: new Date()
      };

      const created_message = await messageService.createMessage(this.loggedUser.id, message);

      this.notes = this.notes.concat(created_message);
    },
    async handleRemoveNote (id) {
      console.log("Removed note id is: " + id);
      this.notes = this.notes.filter(note => note.id !== id);
      await messageService.removeSelectedMessage(this.user.id, id);

      if (this.notes.length < 1) {
        this.$router.push("/");
      }
    },
    async handleNotes (id) {
      console.log("Clicked on notes");

    },
    offerSeen () {
      //offerService.editStatus()
      console.log("Is here some effect???")
      this.$router.push('/received')
      // this.newOffers = this.newOffers.slice(0, -1);
      // console.log(this.newOffers.length)
    },
    handleJoinVisitor (bookingID, bookingWithVisitorAdded) {
      this.providerBookings = this.providerBookings.map(pb => pb.id === bookingID ? bookingWithVisitorAdded : pb);
    },
    handleEditOfferStatus (offerID) {
      console.log("Offer id in app " + offerID);
      this.newOffers = this.newOffers.filter(offer => offer.id !== offerID);
    },

    handleOfferConfirmed (booking) {
      console.log("Confirmed booking header is " + booking.header)
      this.newOffers = this.newOffers.filter(offer => offer.bookingID !== booking.id);
      this.recipientBookings = this.recipientBookings.filter(rp => rp.id !== booking.id);
      this.providerAcceptedBookings = this.providerAcceptedBookings.concat(booking);

    },

    async handleCreateOffer (offer, booking) {
      console.log("Offer price is in App - " + booking.user.username);

      const item = await recipientService.getBookingById(booking.id);
      booking.status = "offered";
      booking.offers = booking.offers.concat(offer);
      this.providerBookings = this.providerBookings.map(pbooking => pbooking.id === booking.id ? booking : pbooking);
      await recipientService.updateRecipient(booking.id, {status: "offered"});

      //await this.updateChatNavCounter(offer.room);

      if (this.providerBookings.length < 1) {
        this.$router.push('/')
      }

    },
    handleUpdateBookingDate_ms (booking, date_ms) {
      console.log("Date_ms " + date_ms);
      console.log("Date_ms booking id " + booking.id);
      const bookingEdited = this.recipientBookings.find(bk => bk.id === booking.id);
      bookingEdited.created_ms = date_ms;
      this.recipientBookings.map(item => item.id === booking.id ? bookingEdited : item);
    },
    handleUpdateProChatNav () {
      console.log("Initializing nav chatters...")
      this.initNavChatters();
    },
    callback (response) {
      // This callback will be triggered when the user selects or login to
      // his Google account from the popup
      console.log("Handle the response", response)
    },
    // kustuta () {
    //   window.localStorage.removeItem('newInlineMessage');
    // },
    handleShowCreatedProvider (provider) {
      this.proTimeCreditLeft = 30;
      this.userIsProvider = provider;
    },
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

    },
    mapSearchReset () {
      this.mapSearchData = null;
    },
    handleUpdateProTimeCredit (timeLeft) {
      this.proTimeCreditLeft = timeLeft;
      this.isAccessTerminated = false;
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
    async handleRemoveBookingWithOffers (id, included_rooms) {
      // const removable = this.recipientBookings.find(res => res.id === id);
      // if (removable.image !== null) {
      //   removable.image.forEach( (rem) => {
      //     console.log("### " + rem._id)
      //     imageService.cleanAllRecipientImages(rem._id)
      //   })
      // }

      for (let item in included_rooms) {
        console.log("INCLUDED ROOMS in APP " + included_rooms[item].room);
        await this.handleRemovedFormBookingByClient(included_rooms[item].room);
      }

      this.recipientBookings = this.recipientBookings.filter(booking => booking.id !== id);
      console.log("Required booking id is " + id)
      await offerService.deleteBookingOffers(id);
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

    handleJoinChatPanel (room) {
      window.localStorage.setItem('currentRoom', JSON.stringify(room));
      this.currentChatRoom = room;
      socket.emit("update room", room);
    },

    handleInitializeChat (data) {
      this.currentRoom = data.room;

      //console.log("Init chat room " + data.initChatRoom.pro.user.username)
      console.log("Init chat room " + data.chatData.userID)
      // && cp.userID === data.userID
      if (!this.chatParticipants.some(cp => cp.room === data.chatData.room)) {
        this.chatParticipants = this.chatParticipants.concat({
          //isActive: true,
          useCounter: data.chatData.useCounter,
          isActive: data.chatData.isActive,
          bookingID: data.chatData.bookingID,
          same_room_counter: data.chatData.same_room_counter,
          proID: data.chatData.proID,
          pro: data.chatData.pro,
          userID: data.chatData.userID,
          name: data.chatData.username,
          room: data.chatData.room
        })
      } else {
        this.chatParticipants.forEach(cp => {
          if (cp.room === data.chatData.room) {
            if (cp.useCounter) {
              console.log("Cp counter " + cp.same_room_counter);
              cp.same_room_counter += 1;
            }

          }
        })
      }



      console.log("Init chat room " + data.initChatRoom.pro)
      console.log("IS chat initialize is coming thru????")

      //socket.emit("")
      socket.emit("create room users", data.initChatRoom);


      // this.currentChatRoom = data.chatData.room;
      // socket.emit("update room", data.chatData.room);



      //this.handleJoinChatPanel(data.chatData.room)

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
    async updateChatNavCounter (room) {
      if (this.chatParticipants.length > 0) {
        let cpCounter = this.chatParticipants.findIndex(cp => cp.room === room);
        const chatParticipant = this.chatParticipants[cpCounter];
        if (chatParticipant.same_room_counter > 1) {
          console.log("found room counter if > 1 " + chatParticipant.same_room_counter);
          await chatuserService.reduceCounter(room);

          this.chatParticipants[cpCounter].same_room_counter -= 1;
        } else {
          console.log("found room counter < 1 " + chatParticipant.same_room_counter);
          this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);
          await chatMemberService.removeChatMembersRoom(room);
          await conversationService.deleteRoomMessages(room);
          console.log("What is the room  " + room)
        }
      }
    },

    socket_updateChatNavCounter (room) {
      if (this.chatParticipants.length > 0) {
        const participantIndex = this.chatParticipants.findIndex(item => item.room === room);
        let counter = this.chatParticipants[participantIndex].same_room_counter;
        console.log("Counter value before: " + counter);
        if (counter > 1) {
          counter -= 1;
          this.chatParticipants[participantIndex].same_room_counter = counter;
        } else {
          this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);
        }
        console.log("Counter value after: " + counter);
      }
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
            //console.log("You got a new message " + d.content);

            // const chatParticipant = {
            //   status: "",
            //   userID: d.userID,
            //   name: d.username,
            //   room: d.room
            // }
            // if (!this.chatParticipants.some(cp => cp.userID === d.userID)) {
            //   this.chatParticipants.push(chatParticipant);
            // }

            this.newMessageList = this.newMessageList.concat(d);

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
              console.log("xxxxxxxxxxxxx--xxxxxxxxxxxxxxx")

              return;
            }
          }



          //user.self = user.userID === socket.userID;
          user.self = user.userID === this.loggedUser.id;
          //if (user.userID !== this.loggedUser.id)

          // will keep message panel open
          // !user.self

          // if (this.currentChatRoom) {
          //   if (user.userID !== this.loggedUser.id) {
          //     this.selectedUser = user;
          //   }
          // } else {
          //   this.selectedUser = user;
          // }

          if (this.currentChatRoom) {
            if (user.userID !== this.loggedUser.id) {
              if (user.room === this.currentChatRoom) {
                this.selectedUser = user;
              }

            }
          } else {
            if (user.userID !== this.loggedUser.id)  {
              this.selectedUser = user;
            }
          }



          //user.connected = true;

          //user.messages = data.messages;
          this.initReactiveProperties(user);
          user.messages = [];


          //this.users.push(user);

          if (user.room === this.currentChatRoom) {
            this.users.push(user);
          }

        });

        // put the current user first, and sort by username
        this.users.sort((a, b) => {
          if (a.self) return -1;
          if (b.self) return 1;
          if (a.username < b.username) return -1;
          return a.username > b.username ? 1 : 0;
        });


      });

      socket.on("user connected", (id, user) => {
        for (let i = 0; i < this.users.length; i++) {
          const user = this.users[i];
          if (user.userID === id) {
            //user.connected = false;
            //this.user = user
            user.connected = true;

            break;
          }
        }
      })

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

      socket.on("new message", async (data) => {
        this.newMessageRoom = data.room

        if (!this.currentChatRoom || this.currentChatRoom !== data.room) {
          this.newMessageTest = true;
          if (!this.newMessageList.some(nml => nml.room === data.room)) {
            // const chatParticipant = {
            //   status: "",
            //   same_room_counter: data.counter,
            //   userID: data.userID,
            //   proID: data.receiverID,
            //   name: data.username,
            //   room: data.room
            // }

            //await chatuserService.setDisplayChatUsers(data.room, true);

            // if (!this.chatParticipants.some(cp => cp.room === data.room)) {
            //   this.chatParticipants = this.chatParticipants.concat(chatParticipant);
            // }

            this.chatParticipants.forEach(cpf => {
              if (cpf.room === data.room) {
                cpf.isActive = true;
              }
            })

            await conversationService.editStatus(data.id, {status: "unsent"});



            this.newMessageList = this.newMessageList.concat(data);
          }
        }




      })

      socket.on("accept provider", async ({id, booking}) => {
        //const proBooking = await recipientService.getBookingById(booking.id);
        //this.providerBookings.push(booking);
        this.providerBookings = this.providerBookings.concat(booking);
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

      // socket.on("set pro chat_nav", chat_nav => {
      //   //this.chatParticipants = this.chatParticipants.concat(chat_nav);
      //
      //   if (!this.chatParticipants.some(cp => cp.room === chat_nav.room)) {
      //     this.chatParticipants = this.chatParticipants.concat(chat_nav)
      //   } else {
      //     this.chatParticipants.forEach(cp => {
      //       if (cp.room === chat_nav.room) {
      //         console.log("Cp pro counter " + cp.same_room_counter);
      //         cp.same_room_counter += 1;
      //       }
      //     })
      //   }
      // })

      // socket.on("set pro chat counter", data => {
      //   let proChatIndex = this.chatParticipants.findIndex(index => index.room === data.room);
      // })

      socket.on("set recipient chat_nav" , data => {
        if (this.chatParticipants.length > 0) {
          let index = this.chatParticipants.findIndex(i => i.room === data.room);
          console.log("Index ----- " + index);
          this.chatParticipants[index] = data;
        } else {
          this.chatParticipants = this.chatParticipants.concat(data);
        }

      })


      socket.on("accept recipient booking", async ({id, booking}) => {

        let proConfirmedBooking = await recipientService.getBookingById(booking.id);

        const foundObject = this.recipientBookings.find(item => item.id === booking.id);

        //console.log("FoundbOject status = " + foundObject.header + " " + foundObject.status)

        foundObject.status = "confirmed";

        this.recipientBookings = this.recipientBookings.map(rb => rb.id !== booking.id ? rb : foundObject);

        //console.log("FoundObject status after = " + foundObject.header + " " + foundObject.status)
        // Removing client waiting for provider confirmation
        this.recipientBookings = this.recipientBookings.filter(obj => obj.id !== booking.id)

        //this.providerAcceptedBookings.push(proConfirmedBooking)
        this.providerAcceptedBookings = this.providerAcceptedBookings.concat(proConfirmedBooking);

        this.clientAcceptedBookings = this.clientAcceptedBookings.filter(cab => cab.id !== booking.id);


      })

      socket.on("send booking for order", (booking, proIdArr) => {
        console.log("Order for BELL!!!");
        this.notSeenClientBookings.push(booking);
        this.providerBookings = this.providerBookings.concat(booking);
        this.isRingBell = true;

        setTimeout(() => {
          this.isRingBell = false;
        }, 3000);


      })

      socket.on("send offer", async (booking, offer) => {
        console.log("Offer is here! " + booking.user.username);
        this.newOffers = this.newOffers.concat(offer);

        this.recipientBookings = await recipientService.getOwnBookings(this.loggedUser.id);

        // booking.offers = booking.offers.concat(offer);
        // this.recipientBookings = this.recipientBookings.map(re => re.id === booking.id ? booking : re);

        this.clientAcceptedBookings = this.clientAcceptedBookings.concat(booking);

      })

      socket.on("confirm sent offer", async (booking, confirmedOffer) => {
        console.log("Sent offer is confirmed!");
        let bookingConfirmData = [];
        this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id);
        //this.recipientBookings = this.recipientBookings.concat
        // Lisatud eile ja ei ole veel kindel kas töötab.
        this.filled_days = this.filled_days.concat(booking.onTime);
        this.providerBookingsHistory = this.providerBookingsHistory.concat(booking);

        const messageContent = `Asiakas ${booking.user.username} on hyväksynyt sinun tarjoukseen. Merkintä on kalenterissa!`;
        const reason = "";
        await this.createNoteToDisplay (messageContent, reason, booking.user.username);

        if (this.providerBookings.length < 1) {
          this.$router.push('/');
        }
      })

      socket.on("sent deal done notification", (booking, madeOffer) => {
        console.log("Sended notification about deal done!! " + booking.header + " has made this deal. Accepted offer: " + madeOffer.price + " euroa.");
        this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id)

        const messageContent = `Lähettämääsi tarjousta "${booking.header}" ei vahvistettu! Hyväksytty lopullinen hinta ${madeOffer.price} euroa.`;
        const reason = "";
        const sender = "admin";
        this.createNoteToDisplay(messageContent, reason, sender);

        if (this.providerBookings.length < 1) {
          this.$router.push('/');
        }
      })

      socket.on("sent notice about cansel offer", (room, booking) => {
        console.log("Sended booking ---------- " + booking.header);

        const messageContent = `Tilaus "${booking.header}" on valitettavasti poistettu tilaajan toiven mukaan!`;
        const reason = "";
        const sender = "admin";
        this.createNoteToDisplay(messageContent, reason, sender);

        this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);

        this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id)
        if (this.providerBookings.length < 1) {
          this.$router.push('/');
        }
      })

      socket.on("handle rest of providers", (room, booking) => {
        this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id);
        this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);
        if (this.providerBookings.length < 1) {
          this.$router.push('/');
        }
      })

      socket.on("remove archived chat nav user", ({room, booking}) => {
        this.chatParticipants = this.chatParticipants.filter(item => item.room !== room);
        this.providerBookingsHistory = this.providerBookings.concat(booking);
      })

      socket.on("reject map booking by_pro", ({id, room, pro, booking, reason}) => {
        const foundBooking = this.recipientBookings.find(item => item.id === booking.id);

        foundBooking.status = "waiting";

        this.recipientBookings = this.recipientBookings.filter(re => re.id !== booking.id);
        // ???
        this.clientAcceptedBookings = this.clientAcceptedBookings.filter(cab => cab.id !== booking.id);

        this.socket_updateChatNavCounter(room);


        if (this.chatParticipants) {

        }

        //this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);


        const messageContent = `Valitettavsti ${pro} ei varmistanut tilausta '${booking.header}', syy: ${reason}!`;
        const rejectReason = reason;
        const sender = pro.yritys;
        this.createNoteToDisplay(messageContent, rejectReason, sender);

      })

      socket.on("reject form booking by_pro", ({room, booking}) => {
        console.log("# room " + room);
        this.socket_updateChatNavCounter(room);

      })

      socket.on("rejected map booking by_client", ({id, room, booking, reason}) => {
        console.log("Client rejected booking! xxxxxxxx ");
        this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id);
        this.notSeenClientBookings = this.notSeenClientBookings.filter(item => item.id !== booking.id);

        //this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);

        this.socket_updateChatNavCounter(room);

        if (this.providerBookings.length < 1) {
          this.$router.push("/")
        }

        const messageContent = `Asiakas ${booking.user.username} on poistanut lähetetty tilauksen "${booking.header}", syy: ${reason}!`;
        const rejectReason = reason;
        const sender = booking.user.username;
        this.createNoteToDisplay(messageContent, rejectReason, sender);

      })



      socket.emit("online", (this.currentRoom))
      // this.currentRoom
      socket.on("messages", (data) => {
        this.conversation = data.msg;

      })

      socket.on('image', image => {
        // create image with
        const img = new Image();
        // change image type to whatever you use, or detect it in the backend
        // and send it if you support multiple extensions
        //img.src = `data:image/jpg;base64,${image}`;
        this.imageSrc = `data:image/jpg;base64,${image}`;
        // Insert it into the DOM
      });

      socket.on("private message", ({ content, chatImg, username, date, from, to }) => {
        console.log("Message in app: " + content.body);
        if (content.msg_status === "file")
          this.imageSrc = `data:chatImg/jpg;base64,${chatImg}`;
        //const cPanelImg = `data:chatImg/jpg;base64,${chatImg}`;
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
            //content.blob = `data:image/jpg;base64,${content.blob}`
            //this.imageSearch = `data:blob/jpg;base64,${blob}`
            //const imageSearch = `data:blob/jpg;base64,${blob}`
            this.conversation.push({
              content,
              image: this.imageSrc,
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
      if (!user.self) {
        this.selectedUser = user
        socket.emit("update room", user.room)
      }


      console.log("----------Tuleb läbi--------" + user.username)
      //this.selectedUser = user;
      this.isNewMessage = false;
      user.hasNewMessages = false;

      this.messageInfo = "";

    },
    noSelectUser () {
      this.selectedUser = null;
      this.currentChatRoom = null;
      window.localStorage.removeItem('currentRoom');
    },

    async handleMessage (content, blob, date) {
      console.log("chat status in the app: " + content.msg_status);
      //if ()
      this.conversation.push({
        content,
        image: blob,
        username: this.loggedUser.username,
        date,
        user: this.loggedUser.username,
        userID: this.loggedUser.id
      })


      // socket.emit("private message", {
      //   content,
      //   date,
      //   to: this.selectedUser.userID,
      // });
    },


    handleProviderActionConfirm () {

    },





    // async updateUserRoom (message) {
    //   //console.log("Message is " + message.id)
    //   //this.newMessageList = this.newMessageList.filter(msg => msg.id !== message.id);
    //
    //   for (let i = 0; i < this.users.length; i++) {
    //     let user = this.users[i];
    //     if (!user.self) {
    //       this.selectedUser = user;
    //     }
    //   }
    //   //window.localStorage.removeItem('newInlineMessage');
    //   //this.unread = null;
    //   if (message.inline) {
    //     // const unreadMsg = window.localStorage.getItem('newInlineMessage');
    //     // if (unreadMsg) {
    //     //   console.log("Yes, here is unread message!")
    //     //   const unreadMsg = JSON.parse(new_message);
    //     //   this.unread = unreadMessage;
    //     //   // JSON.parse(new_message)
    //     //   //this.newMessagelist =  unreadMessage     //this.newMessageList.concat("Hello");
    //     //
    //     //   this.newMessageList.push(unreadMessage)
    //     // }
    //     await conversationService.editStatus(message.id, {status: "sent"});
    //     this.newMessageList = this.newMessageList.filter(msg => msg.id !== message.id);
    //     //this.newMessagelist = this.newMessageList.filter(nml => nml.id !== )
    //
    //     //this.kustuta();
    //
    //   } else {
    //     await conversationService.editStatus(message.id, {status: "sent"});
    //     this.newMessageList = this.newMessageList.filter(msg => msg.id !== message.id);
    //   }
    //
    //   socket.emit("update room", message.room);
    // },

    async handleFeedbackClient (client) {
      console.log("Feedback client is " + client.id)
      this.rateCustomer = client;
      window.localStorage.setItem('customerFeedback', JSON.stringify(client));

      //this.recipientCompletedBookings = this.recipientCompletedBookings.filter(rcb => rcb.id !== client.id);

    },
    async getRecipientCompletedBookings (userID) {
      const completedBookings = await clientHistoryService.getClientHistory();
      // && cph.status === "rated"
      this.recipientCompletedBookingsHistory = completedBookings.filter(cph => cph.user.id === userID);
      this.recipientCompletedBookings = completedBookings.filter(cp => cp.user.id === userID && cp.status === "no rated");
      // completedBookings.forEach(completed => {
      //   if (completed.user.id === userID) {
      //     this.recipientCompletedBookingsHistory = this.recipientCompletedBookingsHistory.concat(completed);
      //     this.recipientCompletedBookings = completedBookings.filter(cp => cp.status === "no rated")
      //   }
      // })


    },
    async getProCompletedHistory (userID) {
      const proHistory = await proHistoryService.getProHistory();
      this.proCompletedHistory = proHistory.filter(ph => ph.user.id === userID);
    },


    onPressedLogoBtn () {
      this.selectedUser = null;
      this.currentChatRoom = null;
      window.localStorage.removeItem('currentRoom');
      //this.isRingBell = !this.isRingBell;

    },
    onPressedUserIconChildren () {
      window.localStorage.removeItem('selectedChatUser');
      // console.log("Pressed to user icon")
      //this.selectedUser = null;
    },

    handleSetRoom (room) {
      this.currentChatRoom = room;
      window.localStorage.setItem("currentRoom", JSON.stringify(room));
    },

    updateRoom (item) {
      // if (item.proID === this.user.id) {
      //   this.isSelectedByExpiredUser = true;
      console.log("Mate id " + item.userID)
      // }
      this.currentChatRoom = item.room;
      window.localStorage.setItem('currentRoom', JSON.stringify(item.room));
      this.users.forEach(user => {


        // if (user.userID === item.userID) {
        //   this.selectedUser = user;
        // }
      })

      this.selectedUser = this.users.find(current => current.room === item.room && current.userID !== this.loggedUser.id);


      this.newMessageList.forEach(async nml  => {
        if (nml.inline) {
          if (nml.room === item.room) {
            await conversationService.editStatus(nml.id, {status: "sent"});
            this.newMessageList = this.newMessageList.filter(msg => msg.room !== item.room);
          }

        } else {

          if (nml.room === item.room) {
            await conversationService.editStatus(nml.id, {status: "sent"});
            this.newMessageList = this.newMessageList.filter(msg => msg.room !== item.room);
          }

        }
      })

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

      window.localStorage.removeItem('loggedAppUser');
      window.localStorage.removeItem('selectedChatUser');
      this.loginUser = ''
      this.loggedUser = "";
      this.selectedUser = null;
      socket.emit("user leave");
      this.messageAboutRejectBooking = null;
      this.messageAboutRejectBookingByClient = null;
      this.proTimeCreditLeft = null;

      this.user = null;

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

      //this.chatParticipants = this.chatParticipants.filter(cpp => cpp.userID !== booking.user.id);

    },

    handleSetNavbarChatUser (booking, navbarChatUser) {
      //console.log("Navbar chat user username " + navbarChatUser.name);
      this.clientAcceptedBookings = this.clientAcceptedBookings.concat(booking)
      console.log("Booking first  " + booking.header)
      this.selectedUser = null;
    },
    async handleRated (id, ratingResult, yritys) {
      //this.recipientCompletedBookings = this.recipientCompletedBookings.filter(rcb => rcb.id !== id)

      // Merge true to recipient booking to give feedback to provider
      //const feedback = await recipientService.feedbackClient(this.rateCustomer.id, isFeedback);
      await clientHistoryService.updateStatus(this.rateCustomer.id, {status: "rated"});
      this.recipientCompletedBookings = this.recipientCompletedBookings.filter(rcb => rcb.id !== this.rateCustomer.id)

      window.localStorage.removeItem('customerFeedback')
      if (ratingResult === "negatiivista" || ratingResult === "positiivista") {
        this.ratingResult =  `Olet antanut ${ratingResult} palautetta yritykselle - ${yritys}`;
      } else {
        this.ratingResult = `Et ole antanut palautetta yritykselle - ${yritys}`;
      }

      setTimeout(() => {
        this.ratingResult = null;
      }, 3000);
    },
    // Setting recipient navbar feedback and chat nav members when completed booking expired
    async handleSetNavbarFeedback (bookingForFeedback) {
      //console.log("Feedback booking user id " + bookingForFeedback.ordered[0].user.id);

      this.providerAcceptedBookings = this.providerAcceptedBookings.filter(pab => pab.id !== bookingForFeedback.id)

      this.recipientBookings = this.recipientBookings.filter(b => (b.status !== "confirmed") && b.status !== "completed")

      this.recipientCompletedBookings = this.recipientCompletedBookings.filter(rcb => rcb.id !== bookingForFeedback.id)

      const proHistoryData = {
        header: bookingForFeedback.header,
        address: bookingForFeedback.ordered[0].address,
        date:  bookingForFeedback.date,
        userID: bookingForFeedback.ordered[0].user.id
      }

      const clientHistoryData = {
        status: "no rated",
        header: bookingForFeedback.header,
        proID: bookingForFeedback.ordered[0].id,
        company:  bookingForFeedback.ordered[0].yritys,
        id_number:  bookingForFeedback.ordered[0].ytunnus,
        rating: bookingForFeedback.ordered[0].rating,
        address:  bookingForFeedback.ordered[0].address,
        date:  bookingForFeedback.date,
        professional:  bookingForFeedback.ordered[0].profession,
        userID: bookingForFeedback.user.id
      }

      const complitedClientBooking = await clientHistoryService.updateClientHistory(clientHistoryData);
      const complitedProBooking = await proHistoryService.updateProHistory(proHistoryData);

      //this.recipientCompletedBookings = this.recipientCompletedBookings.concat(complited);
      this.recipientCompletedBookingsHistory  = this.recipientCompletedBookingsHistory.concat(complitedClientBooking);
      this.proCompletedHistory = this.proCompletedHistory.concat(complitedProBooking);

      //this.recipientCompletedBookings.push(complitedClientBooking);
      this.recipientCompletedBookings = this.recipientCompletedBookings.concat(complitedClientBooking);

      // chat members room
      const room = bookingForFeedback.ordered[0].yritys + bookingForFeedback.user.username;
      //console.log("Room to remove " + room);
      // Chat members room to remove
      const roomToRemove = this.chatParticipants.find(panel => panel.room === room)
      //console.log("Removed room id " + roomToRemove.id);
      // Remove here chat users from database.

      // this.images.forEach(img => {
      //   console.log("Images ## " + img._id);
      //   imageService.cleanAllRecipientImages(img._id)
      // })

      await chatMemberService.removeChatMembersRoom(room)

      // Remove all room messages
      await conversationService.deleteRoomMessages(room);

      this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);
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
        //if (mate.isActive) {
          let member = mate.member.find(m => m.userID !== this.user.id);
          //let chat_room = mate.room;

          console.log("Chat room + users id-- " + member.username)

          this.chatParticipants = [
            ...this.chatParticipants,
            {
              id: mate.id,
              useCounter: mate.useCounter,
              isActive: mate.isActive,
              bookingID: mate.bookingID,
              same_room_counter: mate.same_room_counter,
              isOnline: mate.isOnline,
              status: "",
              proID: mate.proID,
              pro: mate.pro,
              userID: member.userID,
              name: member.username,
              room: mate.room
            }
          ]
        //}


      })

    },
    async handleUser () {
      const myData = await userService.getUser(this.user.id);
      this.notes = myData.messages;
    },
    async handleProvider () {
      //this.chatParticipants = [];

      const pro = await providerService.getProvider(this.loggedUser.id)

      //const prviderBookings = this.userIsProvider.booking
      // Bookings what provider getting from recipient
      if (pro) {
        this.proTimeCreditLeft = ((pro.proTime - new Date().getTime()) / 86400000).toFixed() < 0 ? 0 : ((pro.proTime - new Date().getTime()) / 86400000).toFixed();
        if (this.proTimeCreditLeft <= 0) {
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
        //this.bookings = user.booking.filter(bk => bk.status !== "offered" && bk.status !== "completed" && bk.status !== "confirmed" );
        // && uipb.status !== "waiting"
        // && uipb.status !== "offered"
        this.providerBookings = pro.booking.filter(uipb => uipb.status !== "confirmed"  && uipb.status !== "completed");
        const proAcceptedBookings = pro.booking.filter(pab => pab.status === "confirmed");
        proAcceptedBookings.forEach(pab => {
          this.filled_days = this.filled_days.concat(pab.onTime);
        })
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
      let offers = [];
      let recipientbookings = await recipientService.getOwnBookings(this.loggedUser.id);
      //this.recipientBookings = await recipientService.getOwnBookings(this.loggedUser.id);
      if (recipientbookings.length > 0) {
        if (recipientbookings[0].user.avatar) {
          this.avatar = recipientbookings[0].user.avatar

        }
        recipientbookings.forEach(booking => {
          this.newOffers = this.newOffers.concat(booking.offers.filter(offer => offer.isNewOffer));
        })



            //this.providerAcceptedBookings = this.recipientBookings.filter(booking => booking.status === "confirmed");
        this.providerAcceptedBookings = recipientbookings.filter(booking => booking.status === "confirmed");

        //this.clientAcceptedBookings = this.recipientBookings.filter(cb => cb.status === "notSeen" || cb.status === "seen")
        this.clientAcceptedBookings = recipientbookings.filter(cb => cb.status === "notSeen" || cb.status === "seen" || cb.status === "offered")

        //this.recipientCompletedBookings = this.recipientBookings.filter(rb => rb.status === "completed")


        //this.recipientCompletedBookings = recipientbookings.filter(rb => rb.status === "completed" && !rb.isFeedbackGiven )


        //this.recipientCompletedBookingsHistory = recipientbookings.filter(rb => rb.status === "completed" && rb.isFeedbackGiven)


        let recipientBookingsForNavChat = recipientbookings.filter(rbc => rbc.status !== "completed");

        this.recipientBookings = recipientbookings.filter(b => (b.status !== "confirmed") && b.status !== "completed")

        // const month = [];
        // month[0]="Tammikuu";
        // month[1]="Helmikuu";
        // month[2]="Maaliskuu";
        // month[3]="Huhtikuu";
        // month[4]="Toukokuu";
        // month[5]="Kesäkuu";
        // month[6]="Heinäkuu";
        // month[7]="Elokuu";
        // month[8]="Syyskuu";
        // month[9]="Lokakuu";
        // month[10]="Marraskuu";
        // month[11]="Joulukuu";


        // recipientbookings.forEach(re => {
        //   let myDate = new Date(re.created);
        //   let hours = new Date(re.created).getHours();
        //   let minutes = new Date(re.created).getMinutes();
        //
        //   hours = hours < 10 ? '0' + hours : hours;
        //   minutes = minutes < 10 ? '0'+minutes : minutes;
        //   let time = hours + ':' + minutes;
        //   console.log("RE: " + myDate.getDate() + " " +  month[new Date(myDate).getMonth()] + " " + myDate.getFullYear() + " " + time)
        // })
        console.log("Created booking: " )
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
    // Add new booking
    async handleCreateBooking (booking) {

      //const createBookingStatus = await recipientService.updateRecipient(booking.id, {status: "notSeen"});

      const providersForBooking = await providerService.getProvidersMatchingByProfession(
          {result: booking.professional}
      )
      console.log("Professional. " + booking.professional)
      //let providerArr = [];
      let proIdArr = [];
      // providersForBooking.forEach(res => {
      //   booking.ordered = [
      //       ...booking.ordered,
      //       res
      //   ]
      //   if (res.user.id !== this.loggedUser.id) {
      //     proIdArr = proIdArr.concat(res.user.id);
      //     //providerArr = providerArr.concat(res.id)
      //   }
      //
      // })
      for (let i = 0; i < providersForBooking.length; i++) {
        console.log("Pro id " + providersForBooking[i].id);
        booking.ordered = [
            ...booking.ordered,
            providersForBooking[i]
        ]
        if (providersForBooking[i].user.id !== this.loggedUser.id) {
          proIdArr = [
              ...proIdArr,
              providersForBooking[i].user.id
          ]
          await recipientService.addProviderData(booking.id, providersForBooking[i].id);
          await providerService.addProviderBooking(providersForBooking[i].id, booking.id);
        }

      }
      const proBooking = await recipientService.getBookingById(booking.id);
      socket.emit("send created booking", proIdArr, proBooking);
      this.recipientBookings = this.recipientBookings.concat(booking);
      this.clientAcceptedBookings = this.clientAcceptedBookings.concat(booking);
    },
    // Add new booking from map
    async handleCreateMapBooking (booking, proID) {
      const bookingStatus = await recipientService.updateRecipient(booking.id, {status: "notSeen"});
      // await recipientService.addProviderData(booking.id, proID);
      // await providerService.addProviderBooking(proID, booking.id);

      this.recipientBookings = this.recipientBookings.concat(booking);

      this.clientAcceptedBookings = this.clientAcceptedBookings.concat(booking);
      //this.clientAcceptedBookings = this.recipientBookings.filter(cb => cb.status === "notSeen" || cb.status === "seen")
    },
    handleNotifications () {
      //this.isNotification = true;
      this.$router.push('/notification');
    },
    // handleBookingWaitingProBackBtn () {
    //   this.selectedUser = null;
    //
    // },
    handleExitNotifications (state) {
      console.log("State is: " + state)
      this.isNotification = state;
    },
    handleStatusUpdate (id) {
      //this.notSeenClientBookings = this.notSeenClientBookings.filter(nscb => nscb.id !== id ? nscb : null)
      //this.notSeenClientBookings = this.notSeenClientBookings.filter(nscb => nscb.id !== id)
      this.providerBookings = this.providerBookings.filter(nscb => nscb.id !== id)
      this.handleProvider();
    },

    async handleRemovedFormBookingByClient (room) {

      for (let item in this.chatParticipants) {
        let participant = this.chatParticipants[item];
        if (participant.room === room) {
          if (participant.same_room_counter > 0) {
            await chatuserService.reduceCounter(room);
            this.chatParticipants[item].same_room_counter -= 1;

          } else {
            this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);
            await chatMemberService.removeChatMembersRoom(room);
            const chat_messages = await conversationService.getRoomMessages(room);
            for (let message in chat_messages) {
              console.log("Chat_message " + chat_messages[message].content.body);
              if (chat_messages[message].is_db_image) {
                await imageService.removeRoomChatImage(chat_messages[message].imgID)
              }
            }
            await conversationService.deleteRoomMessages(room);
          }
        }
      }


    },

    handleRemoveAcceptedBooking (id) {
      console.log("Handling remove booking..." + id)
      this.providerBookings = this.providerBookings.filter(pb => pb.id !== id)

      if (this.providerBookings.length < 1) {
        //this.$router.push('/');
        this.$router.go(-1);
      }
      // if (this.providerBookings.length === 0) {
      //   location.reload();
      // }

      // this.images.forEach(img => {
      //   console.log("Images ## " + img._id);
      //   imageService.cleanAllRecipientImages(img._id)
      // })

    },
    lsRemove (storage_name, holder, index) {
      const rejectedBookings = JSON.parse(localStorage.getItem(storage_name)) || [];
      console.log("INDEX " + index);
      let message = holder === "client" ? this.messageAboutRejectBookingByClient : this.messageAboutRejectBooking;
      if (index > -1) {
        console.log("Room " + rejectedBookings[index].room);

        this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== rejectedBookings[index].room);
        rejectedBookings.splice(index, 1);
        localStorage.setItem(storage_name, JSON.stringify(rejectedBookings));
        message = rejectedBookings;
        console.log("localstorage length: " + rejectedBookings.length);
        if (rejectedBookings.length < 1) {
          localStorage.removeItem(storage_name);
          message = null;
        }

      }
    },

    async handleRejectProFormBooking (room, booking, providerID) {
      await providerService.removeProviderBooking(providerID, booking.id);
      this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id);
      await this.updateChatNavCounter(room);
    },
    async handleRejectBookingByProNoOffers (booking, room, providerID) {

      console.log("Handling rejecting booking by pro..." + booking.user.id)
      console.log("Ordered user id-- " + providerID);
      // Removing provider id from booking
      await recipientService.removeProviderData(booking.id, providerID);

      await providerService.removeProviderBooking(providerID, booking.id);

      await this.updateChatNavCounter(room);

      this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id);

      if (this.providerBookings.length < 1) {
        //this.$router.push('/');
        this.$router.go(-1);
      }
    },
    async handleRejectBookingByClientNoOffers (booking, proID, room) {
      console.log("room " + room)
      console.log("user id " + proID)
      console.log("booking header " + booking.header)

      await providerService.removeProviderBooking(proID, booking.id);

      await this.updateChatNavCounter(room);

      this.recipientBookings = this.recipientBookings.filter(re => re.id !== booking.id);

      await recipientService.removeBooking(booking.id);
    },
    // Message
    closeClientRejectedBookingMsgPanel (index) {
      //let clientRejMsgArray;
      //let rejectedBookingRoom;

      this.lsRemove('clientRejectedBookingMessage', 'client', index);

      //console.log("Length " + rejectedBookings.length)

    },
    closeProRejectedBookingMsgPanel (index) {

      this.lsRemove('rejectedBookingMessage', 'pro', index);




      // let proRejMsgArray;
      // let rejectedProBookingRoom;
      // const proRejectedBooking = window.localStorage.getItem('rejectedBookingMessage');
      // if (proRejectedBooking) {
      //   proRejMsgArray = JSON.parse(proRejectedBooking);
      //   if (index > -1) {
      //     rejectedProBookingRoom = proRejMsgArray[index].room;
      //     this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== rejectedProBookingRoom);
      //     proRejMsgArray.splice(index, 1);
      //   }
      //
      // }
      //
      // if (proRejMsgArray.length > 0) {
      //   window.localStorage.setItem('rejectedBookingMessage', proRejMsgArray);
      // } else{
      //   window.localStorage.removeItem('rejectedBookingMessage');
      //   this.messageAboutRejectBooking = null;
      // }


      // window.localStorage.removeItem('rejectedBookingMessage');
      // this.messageAboutRejectBooking = null;
    },
    closeBookingConfirmedMessagePanel (index) {
      let confirmedMsgArray;
      const confirmed = window.localStorage.getItem('bookingConfirmedByClient');
      if (confirmed) {
        confirmedMsgArray = JSON.parse(confirmed)

      }
      //const messageArrJSON = window.localStorage.getItem('bookingConfirmedByClient')


      if (index > -1) {
        confirmedMsgArray.splice(index, 1)
      }
      if (confirmedMsgArray.length > 0) {
        window.localStorage.setItem('bookingConfirmedByClient', confirmedMsgArray);
      } else{
        window.localStorage.removeItem('bookingConfirmedByClient');
        this.messageAboutOfferConfirmation = null;
      }


      // window.localStorage.removeItem('bookingConfirmedByClient');
      // this.messageAboutOfferConfirmation = null;
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
          window.localStorage.removeItem('currentRoom');
          socket.emit("user leave");
          //this.$router.push('/login');
        } else {
          //console.log("+-+-+-+-+ " + tokenValid)
          this.loggedUser = user

          //console.log("Username app " + this.loggedUser.username)



          console.log("Loged, logged user " + this.loggedUser.username)
          //const username = this.loggedUser.username;
          this.getRecipientCompletedBookings(user.id);
          this.getProCompletedHistory(user.id);
          this.chatParticipants = [];
          this.initNavChatters();
          this.handleRecipientBookings();
          this.handleProvider();
          this.handleUser();



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
          this.sentence = "Etsitään " + fromMap.pro + " etäisyys " + fromMap.dist + " km.";
        } else {
          fromMap = this.clientMapSearchData[this.i];
          this.sentence = "Etsitään - " + fromMap.pro + " etäisyys " + fromMap.dist + " km.";


          this.i += 1;
        }

        console.log("Index length " + this.i)

      }

    }
  },
  beforeUnmount() {
    socket.emit("user leave");
    this.selectedUser = null;

    //window.localStorage.removeItem('selectedChatUser');
  },
  computed: {
    isValid() {
      return this.msg.length > 0;
    },

    currentRouteName() {
      return this.$route.name;
    }
  }
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
  /*max-height: 300vh;*/

  clear: both;


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
  color: #dddddd;
  font-size: 18px;
  padding: 10px;
}
.user:hover {
  color: white;
}
/*.dropdown-item:hover {*/
/*  background-color: red;*/
/*}*/

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
/*.success {*/
/*  color: white;*/
/*  background: #3ca73c;*/
/*  font-size: 20px;*/
/*  border: solid #0e920e;*/
/*  border-radius: 5px;*/
/*  padding: 10px;*/
/*  margin-bottom: 10px;*/
/*}*/
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
  width: 40%;
  /*width: 60%;*/
  font-size: 14px;
  height: 30px;
  color: red;
  animation-duration: 15s;
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
  color: #dca478;
}

.bookingRejectMessageClose {
  cursor: pointer;
  color:greenyellow;
  display: flex;
  justify-content: right;
}

.bookingConfirmedMessagePanel {
  width: 30%;
  border: solid #35bbc7;

  padding: 14px;
  margin-top: 30px;
  margin-left: 60%;
}
.bookingConfirmedMessage {
  color: #dca478;
}
.bookingConfirmedMessageClose {
  cursor: pointer;
  color:greenyellow;
  display: flex;
  justify-content: right;
}

@media only screen and (max-width: 1000px) {
  .bookingRejectMessagePanel {
    width: 95%;

    margin: 50px auto;
  }

  .bookingConfirmedMessagePanel {
    width: 95%;
    margin: 50px auto;
  }

  @keyframes move-1 {
    to {
      left: -85%;
      /*left: -70%;*/
    }
  }
  .box {
    position: absolute;
    display: inline-block;
    width: 90%;
    /*width: 60%;*/
    font-size: 14px;
    height: 30px;
    background: #332D2D;
    color: #f04819;
    animation-duration: 10s;
    animation-iteration-count: infinite;

  }
  .box:nth-child(1) {
    animation-name: move-1;
    left: 100%;
  }

}

/*.navbar.navbar-dark.bg-dark{*/
/*  background-color: #AABB55!important;*/
/*}*/

.chat-new-message-provider {
  /*color: #f75959;*/
  color: white;
  background: palevioletred;
  border: 1px solid orange;
  margin-top: 10px;
  padding: 6px
}
.chat-new-message-client {
  /*color: #f75959;*/
  color: white;
  background: palevioletred;
  border: 1px solid deepskyblue;
  margin-top: 10px;
  padding: 5px 15px 5px 15px;
}
.chat-user-is-provider {
  color: orange;
  padding: 5px 15px 5px 15px;
  border: 1px solid orange;
  margin-top: 10px;
  max-width: 230px;
  overflow-x: scroll;
}
/*.chat-user-is-provider:hover {*/
/*  */
/*}*/
.chat-user-is-client {
  color: deepskyblue;
  padding: 5px 15px 5px 15px;
  border: 1px solid deepskyblue;
  margin-top: 10px;
}

/*Hide scrollbar for Chrome, Safari and Opera*/
.chat-user-is-provider::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.chat-user-is-provider {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.dropdown-menu .dropdown-item:not(disabled):not(.disabled):hover {
  font-weight: bold;
  color: yellow;
  background-color: #746f6f;
}

span {

  /*background: #48abe0;*/
  /*color: white;*/
  /*padding: 1.5rem;*/
  /*font-size: 2rem;*/
  display: inline-block;
}


span.strong-tilt-move-shake-x {
  animation: tilt-n-move-shaking 0.15s;
}

@keyframes tilt-n-move-shaking-x {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(5px, 5px) rotate(5deg); }
  50% { transform: translate(0, 0) rotate(0deg); }
  75% { transform: translate(-5px, 5px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}
.limit-success {
  color: deepskyblue;
}

.limit-warning {
  color: #f2b74b;
}
.limit-refill {
  color: #eec4b4;
  cursor: pointer;
  text-decoration: underline;
}

.watermark{
  color:orange;
  z-index: 99 !important;
  font-size: 14px;
  height:100px;
  width:300px;
  display:flex;
  align-items:center;
  justify-content:center;
  top: 15vh;
  left: 80vw; transform: translate(-70%, -50%);
  position:fixed;

}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

</style>