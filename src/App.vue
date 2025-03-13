<template>
  <MDBNavbar
      id="navbar"
      style="padding: 0 13px 0 13px;"
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
<!--        <img :src="require(`@/assets/home.png`)" style="width: 30px;" alt="home" />-->
        <div class="bg-image hover-zoom">
          <img src="./assets/home.png" style="width: 30px; padding: 3px;" alt="home" />
        </div>

<!--        <div class="homeBtn">-->

<!--          <MDBIcon>-->
<!--            <i class="fas fa-home"></i>-->
<!--          </MDBIcon>-->
<!--        </div>-->

<!--        <h4 style="color: cadetblue">{{ t('navMainPage') }}</h4>-->
      </MDBNavbarBrand>
    </router-link>
    <MDBNavbarNav>
      <MDBNavbarItem  class="mb-2 mb-lg-0 d-flex flex-row">
        <language />
      </MDBNavbarItem>
    </MDBNavbarNav>





    <MDBNavbarNav right class="mb-2 mb-lg-0 d-flex flex-row"  v-if="loggedUser.token !== undefined">

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
        <MDBDropdownMenu  dark style="padding: 12px;" >


          <div>
            <MDBDropdownItem  href="#" v-for="(item, i) in chatParticipants.filter(navchat => navchat.isActive)" :key="i">
              <div >
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
                            class="translate-middle p-2"
                            pill
                            notification
                        >{{t('nav_newMessage')}}</MDBBadge>
                      </b>

                    </h4>
                    <h4
                        v-else
                        class="chat-new-message-client">
                      <b >
                        {{item.name}}
                        <MDBBadge
                            color="danger"
                            class="ms-2"
                            pill
                            notification
                        >{{t('nav_newMessage')}}</MDBBadge>
                      </b>
                    </h4>
                  </div>


                  <h4
                      v-else-if="item.proID === user.id"
                      class="chat-user-is-provider"
                  >
                    {{item.pro}}&nbsp;&nbsp;(&nbsp;{{item.name}}&nbsp;)
<!--                    {{item.same_room_counter === 0 ? "X" : null }}-->
                  </h4>
                  <div v-else style="display: flex; justify-content: space-around" class="chat-user-is-client">
                    <h4 >
                      <MDBRow>
                        <MDBCol >
                          {{item.name}}
                        </MDBCol>

                      </MDBRow>


                    </h4>
                    <span v-if="item.same_room_counter === 0 && route.name !== 'recipient-public' && route.name !== 'live-chat'" @click.prevent >
                      <MDBIcon style="margin-left: 10px; margin-top: 7px; color: palevioletred;"  @click="removeTempChat(item.room, item.name)">
                        <i class="fas fa-trash-alt"></i>
                      </MDBIcon>

                    </span>
                  </div>

                </router-link>

              </div>

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

              {{item.date}} - {{item.header}}

            </router-link>
          </MDBDropdownItem>


        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBNavbarItem v-if="newOffers.length > 0 && route.name !== 'recipient-panel'" class="me-3 me-lg-0" @click="offerSeen">
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
            class="bg-image hover-zoom"
            tag="a"
            style="padding: 3px;"
            @click="dropdownUser = !dropdownUser"
        >
<!--          ${avatar.name}-->

          <img
              style="width: 35px; height: 35px; border: solid grey; border-radius: 50%;"

              :src="showAvatar ? showAvatar : require(`/server/uploads/avatar/${avatar.name}`)"
              alt="user_avatar"
          />



        </MDBDropdownToggle>
        <MDBBadge v-if="notes.filter(note => note.isNewMsg).length > 0"
                  notification color="info"
                  style="margin-top: 10px;"
                  class="translate-middle p-2"
                  pill
        >
          {{notes.filter(note => note.isNewMsg).length}}
        </MDBBadge>


        <MDBDropdownMenu dark  style="padding: 12px; ">
          <MDBDropdownItem href="#" v-if="notes.length > 0">
            <router-link to="/message" class="user" @click="handleNotes" >
              {{t('nav_user_messages')}}
              <MDBBadge v-if="notes.filter(note => note.isNewMsg).length" color="info" class="ms-2" >
                {{notes.filter(note => note.isNewMsg).length}}
              </MDBBadge>
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem  href="#" class="x" style=" border-radius: 0; :hover: background-color: blue;">
            <router-link to="/profile" class="user" @click="onPressedUserIconChildren">
              {{t('nav_user_profile')}}
            </router-link>
          </MDBDropdownItem>

          <MDBDropdownItem  href="#" class="x" style=" border-radius: 0; :hover: background-color: blue;">
            <router-link to="/manual" class="user" @click="onPressedUserIconChildren">
              {{t('nav_user_manual')}}
            </router-link>
          </MDBDropdownItem>

          <MDBDropdownItem v-if="userIsProvider"   href="#">
            <router-link to="/pro-gallery" class="user"  @click="onPressedUserIconChildren">
              {{t('nav_user_gallery')}}
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem href="#" v-if="recipientCompletedBookingsHistory.length > 0 || proCompletedHistory.length > 0" >
            <router-link to="/history" class="user"  @click="onPressedUserIconChildren">
              {{t('nav_user_history')}}
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem
              v-if="recipientBookings.length > 0"
              href="#">
            <router-link to="/received" class="user"  @click="onPressedUserIconChildren">
              {{t('nav_user_orders')}}
            </router-link>

          </MDBDropdownItem>
          <MDBDropdownItem
              v-if="userIsProvider"
              href="#"
          >
            <router-link to="calendar"  class="user" @click="onPressedUserIconChildren">
              Calendar
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem
              v-if="userIsProvider"
              href="#">
            <router-link to="/pay-plan" class="user"  @click="onPressedUserIconChildren">
              {{t('nav_user_billing')}}
            </router-link>

          </MDBDropdownItem>
          <MDBDropdownItem
              href="#">
            <router-link to="/rules"  class="user"  @click="onPressedUserIconChildren">
              {{t('nav_user_rules')}}
            </router-link>

          </MDBDropdownItem>
<!--          <MDBDropdownItem-->
<!--              href="#"-->
<!--          >-->
<!--            <router-link to="/admin" class="user" @click="onPressedUserIconChildren">-->
<!--              Admin-->
<!--            </router-link>-->

<!--          </MDBDropdownItem>-->
          <MDBDropdownItem
              href="#"
              @click="handleLogOut">
            <p class="user">{{t('nav_logout')}}</p>
          </MDBDropdownItem>


        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavbarNav>


    <MDBNavbarNav right class="mb-2 mb-lg-0 d-flex flex-row" v-else>

      <MDBNavbarItem >
        <router-link to="/login" @click="collapse7 = false" style="color: greenyellow;" >{{t('nav_sign_in')}}</router-link>

      </MDBNavbarItem>

    </MDBNavbarNav>









<!--    <MDBNavbarNav center class="mb-2 mb-lg-0" >-->

<!--      <div v-if="proTimeCreditLeft !== null">-->
<!--        <div v-if="currentRouteName === 'dash-board' || currentRouteName === 'provider-panel'">-->

<!--          <div-->
<!--              v-if="proTimeCreditLeft <= 0"-->
<!--          >-->
<!--            <h5 class="limit-warning">{{ t('nav_accessRestricted') }}&nbsp;&nbsp;&nbsp;-->
<!--              <span class="limit-refill" @click="$router.push('/pay-plan')">{{t('nav_loadTime')}}</span>-->
<!--            </h5>-->

<!--          </div>-->

<!--          <div v-else-if="proTimeCreditLeft <= 3 && proTimeCreditLeft > 0">-->
<!--            <h5 class="limit-warning">{{t('nav_accessFewDays_usage')}} {{proTimeCreditLeft }} {{t('nav_accessFewDays_dayCount')}}&nbsp;&nbsp;&nbsp;-->
<!--              <span class="limit-refill" @click="$router.push('/pay-plan')">{{t('nav_loadTime')}}</span>-->
<!--            </h5>-->

<!--          </div>-->
<!--          <div v-else>-->
<!--            &lt;!&ndash;        <div v-if="((userIsProvider.proTime - new Date().getTime()) / 86400000).toFixed() === 'NaN'" class="spinner-border" role="status">&ndash;&gt;-->
<!--            &lt;!&ndash;          <span class="visually-hidden">Loading...</span>&ndash;&gt;-->
<!--            &lt;!&ndash;        </div>&ndash;&gt;-->
<!--            <div >-->
<!--              <h5 class="limit-success">Käyttö: {{proTimeCreditLeft}} päivää</h5>-->
<!--            </div>-->

<!--          </div>-->


<!--        </div>-->

<!--      </div>-->

<!--    </MDBNavbarNav>-->

  </MDBNavbar>







<!--  <Notifications-->
<!--      v-if="isNotification"-->
<!--      @exit:notifications = handleExitNotifications-->
<!--      @update:status = handleStatusUpdate-->
<!--      :bookings = providerBookings-->

<!--  />-->

  <success-message
      style="padding: 20px;"
      :message = ratingResult
  />

  <info-message
      style="padding: 20px;"
      :message = offerLimitLoadedMessage
  />

  <prompt-panel
      :promptPanelContent = promptPanelContent
      @prompt:no = handlePromptNo
      @prompt:yes = handlePromptYes
  />

<!--  <chat-modal v-if="currentChatRoom ">-->

<!--    <template #header>-->
<!--      <div class="pop">Open Popover</div>-->
<!--    </template>-->
<!--    <template #content>-->
<!--      <div class="pop-content">-->
<!--        <live-chat-->
<!--            :chatusers = users-->
<!--            :messages =conversation-->
<!--            @select:user = onSelectUser-->
<!--            @noSelected = noSelectUser-->
<!--            :selecteduser = onSelectUser-->
<!--            @on:message = handleMessage-->
<!--        />-->
<!--      </div>-->
<!--    </template>-->
<!--  </chat-modal>-->


  <!--  bg="dark"-->
  <MDBFooter  bg="dark" :text="['center', 'white']" class="fixed-bottom">

    <MDBContainer v-if="clientMapSearchData.length > 0">

      <div id="container" >

        <div >
          <div class="box">{{ sentence }}</div>
        </div>

      </div>
    </MDBContainer>

    <!-- Copyright -->
<!--    id="footer"-->
    <div :class="{footer: route.name !== 'dash-board'}"  class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2024 Copyright: DUVA OY <router-link to="/admin" >
      -------
    </router-link>
    </div>
    <!-- Copyright -->
  </MDBFooter>

  <router-view
      :filled_days = "filled_days"
      :filled = "filled"
      :notes = notes
      @remove_note = handleRemoveNote
      :test = test
      @login:data = "handleLogin"
      @register:data = "createUser"
      :userIsProvider = userIsProvider
      :proImages = proImages
      @addProImage = handleAddProImage
      @editProRefImage = handleEditProRefImage
      @removeProRefImage = handleRemoveProRefImage

      :proRefSlides = proRefSlides
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

      @get_booking_offers = getBookingOffers
      :offers = offers

      @offer_limit_is_loaded = handleOfferLimitIsLoaded
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
      :bookingsConfirmed = confirmedProBookings
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

      @client:confirmed_provider = handleClientConfirmedUser
      @archiveClientSideBooking = handleArchiveClientSideBooking


      @resetMapSearch = mapSearchReset

      :wentOut = wentOut
  />

<!--  client {{client}}<br><br>-->
<!--  resipient completed bookings {{recipientCompletedBookings}}-->

<!--  PROCESS.ENV {{process.env.VUE_APP_NAME}}-->

<!--  <div v-for="(item, i) in im" :key="i">-->
<!--    <img :src="item.image" alt="xxx"/>-->
<!--  </div>-->


<!--  <div v-if="userIsProvider.reference.length > 0">-->
<!--    <div v-for="(item, i) in userIsProvider.reference" :key="i">-->
<!--      <img src="item.image" alt="xxx" />-->
<!--    </div>-->
<!--  </div>-->

<!--  Route {{route.name}}-->

<!--  chatroom {{currentChatRoom}}-->

<!--  time {{new Date().getTime()}}-->

<!--  <button @click="getDist">Get distance</button>-->
<!--  <button @click="get_dist">res_dist</button>-->

<!--  not seen bookings {{notSeenClientBookings.length}}-->
<!--BOOKINGS {{recipientBookings}}<br>-->

<!--  providerAcceptedBookings APP {{providerAcceptedBookings}}<br>-->
<!--Distance {{di}}-->
<!--    pro filled days in app {{filled_days}}<br>-->
<!--  provider bookings {{providerBookings}}-->

<!--  route {{route.name}}-->

<!--  Client reject messages {{messageAboutRejectBookingByClient}}-->

<!--      new offers {{newOffers}}-->
<!--  <language />-->

<!--  <h1>{{ t('welcome') }}</h1><br>-->


<!--  language is {{currentLanguage}}-->

  <!--  <img :src="imageSrc"/><br>-->


<!--    selected user {{selectedUser}}<br>-->
<!--    currentChatRoom {{currentChatRoom}}<br>-->

<!--  PRO BOOKINGS {{providerBookingsHistory}}-->


  <!--    users {{users}}-->
  <!--  new message test {{newMessageTest}}-->

  <!--access {{isAccessTerminated}}-->

  <!--  Selected user {{selectedUser}}<br>-->
  <!--  New message list {{newMessageList}}-->

  <!--  Newmessagelist {{newMessageList}}<br>-->


  <!--  &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;<br>-->


<!--  Chatparticipants {{chatParticipants}}<br>-->

<!--  pro ref slides APP {{proRefSlides}}-->

<!--    OFFERS {{offers}}-->

<!--    CHATPARTICIPANTS {{chatParticipants.length}}<br>-->

  <!--  selected user {{selectedUser}}-->
<!--    Recipient completed bookings {{recipientCompletedBookings}}-->

</template>

<script>
/* eslint-disable */



import imageService from "@/service/image";

import addDays from "date-fns/addDays";

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
import clientHistoryService from "../server/models/clientHistory"
import proHistoryService from "./service/proHistory"
import offerService from "./service/offers"
import messageService from "./service/messages"
import monthConverter from './components/controllers/month-converter'
import gMapData from '@/components/controllers/distance';
import successMessage from "@/components/notifications/successMessage";
import infoMessage from "@/components/notifications/infoMessage";
import promptPanel from './components/PromptPanel'
import modal from './components/ChatModal'

import distanceBetween from "@/components/controllers/distance";

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
import  { onMounted } from "vue";
import vue from 'vue'
import ChatModal from "@/components/ChatModal";
//import { useI18n } from 'vue-i18n';
import liveChat from './pages/LiveChat'

export default {
  name: 'App',
  props: {
    //info: String
  },
  components: {
    liveChat,
    ChatModal,
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
    promptPanel,
    modal,

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
      client: null,
      givenRatingNav: null,
      isPageVisible: true,
      //amp: null,
      o: [],
      aa: [],
      route,
      promptPanelContent: null,
      promptRoom: "",
      offers: [],
      di: null,
      du: null,
      offerLimitLoadedMessage: null,
      notes: [],
      res: [],
      filled_days: [],
      filled: [],
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

      //messageAboutRejectBooking: null,
      //messageAboutRejectBookingByClient: null,
      //messageAboutOfferConfirmation: null,

      recipientImages: [],

      userIsProvider: null,
      proTimeCreditLeft: null,
      isSelectedByExpiredUser: false,
      proImages: [],
      proRefSlides: [],
      isProOpenGallery: true,
      providerBookings: [],
      confirmedProBookings: [],
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
  beforeMount() {


  },


  setup() {
    onMounted(() => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_MAP_KEY}&libraries=places,geometry`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        console.log("Map is inited in APP!");
      }
    })
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

  mounted() {
    this.handleVisibilityChange();
    document.addEventListener("visibilitychange", this.handleVisibilityChange);

    // let lastScrollTop; // This Varibale will store the top position
    //
    // let navbar = document.getElementById('navbar'); // Get The NavBar
    //
    // localStorage.setItem('x', document.getElementById('navbar').innerHTML);
    //
    //
    //
    //
    // window.addEventListener('scroll',function(){
    //   //on every scroll this funtion will be called
    //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //   //This line will get the location on scroll
    //
    //   if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    //     navbar.style.top='-200px';
    //     //set the value to the negetive of height of navbar
    //   }
    //
    //   else{
    //     navbar.style.top='0';
    //   }
    //
    //
    //   lastScrollTop = scrollTop; //New Position Stored
    // });

    console.log("ENV " + process.env.VUE_APP_NAME)

    const recipientClass = new className("Hallo");

    console.log("xxx " + recipientClass.response("aaa"));

    //this.validateToken();

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

      //this.loggedUser = user


      // this.getRecipientCompletedBookings(user.id);
      // this.getProCompletedHistory(user.id);

      // this.handleRecipientBookings();
      // this.handleProvider();
      // this.handleUser();
      // this.chatParticipants = [];
      // this.initNavChatters();

      this.joinServer(username, userID);
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


  methods: {
    handleVisibilityChange() {
      this.isPageVisible = document.visibilityState === "visible";
      console.log("Page visible:", this.isPageVisible);
      if (this.isPageVisible) {
        this.setStatusIfVisible();
        this.validateToken();
      } else {
        console.log("Page is not visible!")
      }
    },
    setStatusIfVisible () {
      console.log("Yes, page is visible!")
    },

    async leiapildid () {
      const pro = await providerService.getProvider(this.loggedUser.id)

      if (pro) {
        this.userIsProvider = pro;
        //this.proImages = [];
        pro.reference.forEach((item, id) => {
          console.log("IMMM " + item.name)
          this.proImages = [
            ...this.proImages,
            {
              _id: item._id,
              image: item.image,
              name: item.name
            }
          ]

        })
      }
    },
    async handlePromptYes () {
      console.log("Prompt yes App");
      this.promptPanelContent = null;
      const room = this.promptRoom;
      const messages = await conversationService.getRoomMessages(room);

      for (let msg in messages) {
        console.log("Chat_message " + messages[msg].content.body);
        if (messages[msg].is_db_image) {
          await imageService.removeRoomChatImage(messages[msg].imgID)
        }
      }

      const thisRoom = this.chatParticipants.find(chatRoom => chatRoom.room === room);
      const recipient = thisRoom.userID;
      socket.emit("remove temp room", room, recipient);

      await conversationService.deleteRoomMessages(room);
      await chatMemberService.removeChatMembersRoom(room);



      this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);
    },
    handlePromptNo () {
      console.log("Prompt no App");
      this.promptPanelContent = null;
    },
    getDist () {
      const start = [60.276416745100214, 24.8582598642488];
      const end = [60.23308429999999, 24.7531404];
      //console.log("HHHHH " + distanceBetween.findDist(start, end));
      distanceBetween.findDistance(start, end)
      .then(d => {
        this.di = d.distance;
        console.log("DD " + d.distance);
      })
      //distanceBetween.findDist(start, end);
    },

    getBookingOffers (offers) {
      //console.log("Booking with offers " + offers.length);
      this.offers = offers;
    },

    handleAddProImage (image) {
      this.proImages = this.proImages.concat(image);
    },
    handleEditProRefImage (index, imgID, show) {

      console.log("Edit " + index);
      console.log("Edit " + imgID);
      console.log("Edit " + show);

      this.proImages[index] = {_id: imgID, blob: show};

    },
    handleRemoveProRefImage (index) {
      console.log("Removable pro ref image index is " + index);
      this.proImages.splice(index, 1);
    },

    async removeTempChat (room, name) {
      console.log("Chat room -- " + room);
      //this.promptPanelContent = null;
      //this.dropDownChat = false;
      this.promptRoom = room;
      //this.promptPanelContent = "Haluatko poistaa chatin " + name + " kanssa??"


      if (confirm("Oletko varmaa, että haluat poistaa chatin?") === true) {
        const messages = await conversationService.getRoomMessages(room);

        for (let msg in messages) {
          console.log("Chat_message " + messages[msg].content.body);
          if (messages[msg].is_db_image) {
            await imageService.removeRoomChatImage(messages[msg].imgID)
          }
        }

        const thisRoom = this.chatParticipants.find(chatRoom => chatRoom.room === room);
        const recipient = thisRoom.userID;
        console.log("UUUSER " + thisRoom.userID)
        socket.emit("remove temp room", room, recipient);

        await conversationService.deleteRoomMessages(room);
        await chatMemberService.removeChatMembersRoom(room);



        this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);
      } else {
        console.log("You canceled to remove chat!")
      }

    },

    // async eem,alda () {
    //   await messageService.removeSelectedMessage(this.user.id, '671aaa8a737a2aca9833b3ce');
    //   //localStorage.removeItem('rejectedBookingMessage')
    //   const myData = await userService.getUser(this.user.id);
    //   this.notes = myData.messages;
    // },
    async createNoteToDisplay (content, isLink, reason, sender) {
      const message = {
        isNewMsg: true,
        content: content,
        isLink: isLink,
        sender: sender,
        reason: reason,
        time: new Date()
      };

      const created_message = await messageService.createMessage(this.loggedUser.id, message);

      this.notes = this.notes.concat(created_message);
    },
    async handleRemoveNote (note) {
      console.log("Removed note id is: " + note.id);
      this.notes = this.notes.filter(item => item.id !== note.id);
      await messageService.removeSelectedMessage(this.user.id, note.id);


      if (this.notes.length < 1) {
        if (!note.isLink) {
          this.$router.push("/");
        }

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
    handleJoinVisitor (bookingID, visitor) {
      // bookingWithVisitorAdded
      console.log("VISITOR")
      const inx = this.providerBookings.findIndex(item => item.id === bookingID);
      this.providerBookings[inx].visitors = this.providerBookings[inx].visitors.concat(visitor);

      this.notSeenClientBookings = this.providerBookings.filter(nsb => !nsb.visitors.includes(visitor));

      //this.providerBookings = this.providerBookings.map(pb => pb.id === bookingID ? bookingWithVisitorAdded : pb);
    },
    handleEditOfferStatus (offerID) {
      console.log("Offer id in app " + offerID);
      this.newOffers = this.newOffers.filter(offer => offer.id !== offerID);
    },

    async handleOfferConfirmed (booking, proID) {
      console.log("Confirmed booking header is ---- " + booking.header)
      const realtime_booking = await recipientService.getBookingById(booking.id);
      this.newOffers = this.newOffers.filter(offer => offer.bookingID !== booking.id);
      this.recipientBookings = this.recipientBookings.filter(rp => rp.id !== booking.id);

      realtime_booking.ordered = realtime_booking.ordered.filter(pro => pro.id === proID);

      this.providerAcceptedBookings = this.providerAcceptedBookings.concat(realtime_booking);

    },

    async handleOfferLimitIsLoaded (room, booking) {
      this.offerLimitLoadedMessage = "Tarjoukset jo lähetetty, olet valitettavasti myöhässä!"
      setTimeout(() => {
        this.offerLimitLoadedMessage = null;
      }, 3000);
      await providerService.removeProviderBooking(this.userIsProvider.id, booking.id);

      this.providerBookings = this.providerBookings.filter(p_booking => p_booking.id !== booking.id);
      await this.updateChatNavCounter(room);


      if (this.providerBookings.length < 1) {
        this.$router.push('/')
      }
    },

    async handleCreateOffer (offer, booking) {
      console.log("Offer price is in App - " + booking.user.username);

      const item = await recipientService.getBookingById(booking.id);
      booking.status = "offered";
      booking.offers = booking.offers.concat(offer);

      await recipientService.updateRecipient(booking.id, {status: "offered"});

      this.providerBookings = this.providerBookings.map(pbooking => pbooking.id === booking.id ? booking : pbooking);


      if (this.providerBookings.length < 1) {
        this.$router.push('/')
      }

    },
    handleUpdateBookingDate_ms (booking, date, created, date_ms) {
      console.log("Date_ms " + date_ms);
      console.log("Date_ms booking id " + booking.id);
      const bookingEdited = this.recipientBookings.find(bk => bk.id === booking.id);
      bookingEdited.created = created;
      bookingEdited.created_ms = date_ms;
      bookingEdited.date = date;
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
    // removeChatnavUser (item) {
    //   if (confirm("Oletko varmaa, että haluat poistaa chat käyttäjän?") === true) {
    //     console.log("You pressed OK!")
    //
    //     this.chatParticipants = this.chatParticipants.filter(member => member.name !== item.name);
    //
    //   } else {
    //     console.log("You canceled!")
    //   }
    //
    // },
    removeExpiredRecipientBookings () {
      console.log("Aaaaaaaaaaaaaaaaa")
      this.recipientBookings.forEach(rp => {
        // additional time + 300000
        console.log("Recipient bookings time " + (rp.created_ms - new Date().getTime()))
        if ((rp.created_ms ) - new Date().getTime() >= 0) {
          console.log("booking " + rp.header + " is valid!")
          if (rp.image) {
            rp.image.forEach(img => {
              console.log("Images created ## " + img._id);
            })
          }

        } else {
          //this.o = rp.offers;
          console.log("Booking " + rp.header + " is not valid anymore!")

          this.handleRemoveBookingWithOffers(rp, rp.offers);
        }
      })

    },

    removeExpiredConfirmedBookings () {
      console.log("Confirmed aaaaaaaaaaaaaaaaaaaaaaaaaaaa ")
      this.providerAcceptedBookings.forEach(pab => {
        const bRoom = pab.ordered[0].yritys + pab.user.username;
        if ((pab.created_ms) - new Date().getTime() > 0) {

          console.log("Confirmed booking " + pab.header + " is valid! "  + " room " + bRoom);
        } else {
          console.log("Confirmed booking " + pab.header + " is not valid anymore!")
          this.handleArchiveClientSideBooking(pab, bRoom)
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
    handleAddFirstImageRecipientBookings (img, bookingID) {

    },
    handleAddImageRecipientBookings (img, id) {

      // this.recipientImages = [
      //     ...this.recipientImages,
      //     img
      // ]
      console.log("GGGGGGGGGGGGGGGGGGGGGG")
      const booking = this.recipientBookings.find(rb => rb.id = id);
      booking.image = booking.image.concat(img);
      // if (booking.image !== null) {
      //   booking.image = booking.image.concat(img);
      // } else {
      //   booking.image = img;
      // }

      this.recipientBookings.map(item => item.id === id ? booking : item);
    },
    async removeRoom_conversation_images (room) {
      const chat_messages = await conversationService.getRoomMessages(room);
      for (let message in chat_messages) {
        console.log("Chat_message " + chat_messages[message].content.body);
        if (chat_messages[message].is_db_image) {
          await imageService.removeRoomChatImage(chat_messages[message].imgID)
        }
      }
      await conversationService.deleteRoomMessages(room);
      await chatMemberService.removeChatMembersRoom(room);
    },
    // Remove all bookings and included (form done bookings)
    async handleRemoveAllFormBookingsByClient (room) {
      let unit = null;
      console.log("Do we remove chatroom and messages, images?? ROOM " + room );
      console.log("ChatParticipants length " + this.chatParticipants.length);

      for (let cp in this.chatParticipants) {

        if (this.chatParticipants[cp].room === room) {
          console.log("CP handled ---- " + this.chatParticipants[cp].room)
          let _cp = this.chatParticipants[cp];
          if (_cp.same_room_counter > 1) {
            console.log("More than 1 - ")
            await chatuserService.reduceCounter(room);
            this.chatParticipants[cp].same_room_counter -= 1;
          } else {
            console.log("Removing room " + room)
            this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);
            await chatMemberService.removeChatMembersRoom(room);
            await this.removeRoom_conversation_images(room);
          }
          return
        }
      }


      // unit = this.chatParticipants.find(item => item.room = room);
      //
      // if (unit) {
      //   if (unit.same_room_counter > 1) {
      //     console.log("More than 1 - ")
      //     await chatuserService.reduceCounter(room);
      //     unit.same_room_counter -= 1;
      //   } else {
      //     console.log("Removing room " + room)
      //     this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);
      //     await chatMemberService.removeChatMembersRoom(room);
      //     await this.removeRoom_conversation_images(room);
      //   }
      // }


      // for (let item in this.chatParticipants) {
      //   let part = this.chatParticipants[item];
      //   console.log("participant " + part.room)
      //   if (participant.room === room) {
      //     if (participant.same_room_counter > 1) {
      //       await chatuserService.reduceCounter(room);
      //       this.chatParticipants[item].same_room_counter -= 1;
      //
      //     } else {
      //       this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);
      //       await chatMemberService.removeChatMembersRoom(room);
      //
      //       await this.removeRoom_conversation_images(room);
      //
      //     }
      //   }
      // }
    },
    // Removing all bookings under offers ( from form )
    async handleRemoveBookingWithOffers (booking, offers) {

      offers.forEach(o => {
        console.log("---OFFER " + o.provider.user.username);
        this.aa = o.provider
      })
      booking.ordered.map(ord => {
        console.log("Ord " + ord.user.username);
      });

      if (booking.image !== null) {
        booking.image.forEach(img => {
          console.log("Images to delete ## " + img._id);
          imageService.cleanAllRecipientImages(img._id)
        })
      }

      // booking.images.forEach(img => {
      //   console.log("Images ## " + img._id);
      //   imageService.cleanAllRecipientImages(img._id)
      // })

      //const current_booking = await recipientService.getBookingById(booking.id);


      //const username = booking.user.username;


      // IS IT???
      const username = this.user.username;


      let includedRooms = [];
      let includedRoomsWithOffersDone = [];
      //console.log("booking username 2 is " + current_booking.user.username);


      console.log("You pressed OK!")
      let offerArray = [];
      let offerSenders = [];

      let providerIDArray = [];
      let allMatchedProviders = [];

      //const cBooking = await recipientService.getBookingById(booking.id)

      if (booking) {
        allMatchedProviders = booking.ordered

        offerArray = booking.offers;


      }



      console.log("Offer array length " + offerArray.length);

      console.log("All matched providers length " + allMatchedProviders.length);

      for (let pro in allMatchedProviders) {
        console.log("X " + pro)
        console.log("Yritys " + allMatchedProviders[pro].yritys)
        console.log("zzzz " + allMatchedProviders[pro].user.id)
        console.log("Room ------ " + allMatchedProviders[pro].yritys + username);
        includedRooms = [
          ...includedRooms,
          {id: allMatchedProviders[pro].user.id, room: allMatchedProviders[pro].yritys + username}
          //allMatchedProviders[pro].yritys + username
        ]
        await this.handleRemoveAllFormBookingsByClient(allMatchedProviders[pro].yritys + username);
        await providerService.removeProviderBooking(allMatchedProviders[pro].id, booking.id);


      }


      for (let sender in offerArray) {

        includedRoomsWithOffersDone = [
          ...includedRoomsWithOffersDone,
          offerArray[sender].yritys + username
        ]
        console.log("----------- " + offerArray[sender].provider.user.id);
        console.log("-+-+-+-+- " + offerArray[sender].provider);
        offerSenders = offerSenders.concat({id: offerArray[sender].provider.user.id, room: offerArray[sender].room})
        await providerService.removeProviderBooking(offerArray[sender].provider.id, booking.id);
      }

      socket.emit("notice about cansel order", includedRooms, offerSenders, booking);



      // for (let item in includedRooms) {
      //   console.log("INCLUDED ROOMS in APP " + includedRooms[item].room + " and id " + booking.id);
      //   await this.handleRemoveAllFormBookingsByClient(includedRooms[item].room);
      // }

      this.recipientBookings = this.recipientBookings.filter(b => b.id !== booking.id);
      //console.log("Required booking id is " + id)
      this.newOffers = [];
      await offerService.deleteBookingOffers(booking.id);
      await recipientService.removeBooking(booking.id);

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
    // startChat () {
    //   socket.emit("join all rooms");
    // },
    // chat () {
    //   console.log("Clicked to chat")
    // },
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


      const mapRoomContent = {
        useCounter: data.chatData.useCounter,
        isActive: data.chatData.isActive,
        bookingID: data.chatData.bookingID,
        same_room_counter: data.chatData.same_room_counter,
        proID: data.chatData.proID,
        pro: data.chatData.pro,
        // userID: data.chatData.userID,
        // name: data.chatData.username,
        userID: data.chatData.proID,
        name: data.initChatRoom.providerUsername,
        room: data.chatData.room
      }

      //console.log("Init chat room " + data.initChatRoom.pro.user.username)
      console.log("Init chat room " + data.chatData.userID)
      // && cp.userID === data.userID
      if (!this.chatParticipants.some(cp => cp.room === data.chatData.room)) {
        console.log("Ei ole olemas tuba - loome toa " + data.chatData.room);
        if (data.initChatRoom.bookingID !== "0") {
          // const statement = this.chatParticipants.find(participant => participant.room === data.chatData.room);
          // const updatedCounter = statement.same_room_counter;
          // console.log("UPDATED COUNTER " + updatedCounter);
          const roomContent = {
            useCounter: data.chatData.useCounter,
            isActive: data.chatData.isActive,
            bookingID: data.chatData.bookingID,
            same_room_counter: data.chatData.same_room_counter,
            //same_room_counter: updatedCounter,
            proID: data.chatData.proID,
            pro: data.chatData.pro,
            userID: data.chatData.userID,
            name: data.chatData.username,
            room: data.chatData.room
          }

          this.chatParticipants = this.chatParticipants.concat(roomContent);

        } else {

          this.chatParticipants = this.chatParticipants.concat(mapRoomContent);
          //this.chatParticipants = this.chatParticipants.concat(roomContent);
        }

      } else {

        this.chatParticipants.forEach(cp => {
          console.log("On olemas tuba " + data.chatData.room)
          if (cp.room === data.chatData.room) {
            if (data.initChatRoom.bookingID !== "0") {
              console.log("Cp counter " + cp.same_room_counter);
              cp.same_room_counter += 1;
            }
          }
        })


      }

      socket.emit("create room users", data.initChatRoom);

      if (data.initChatRoom.bookingID === "0") {
        this.handleJoinChatPanel(data.chatData.room);
      }
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
      console.log("ROOOOOOOOOOOM " + room)
      if (this.chatParticipants.length > 0) {
        let cpCounter = this.chatParticipants.findIndex(cp => cp.room === room);
        const chatParticipant = this.chatParticipants[cpCounter];
        //this.CP = this.chatParticipants[cpCounter];
        if (chatParticipant.same_room_counter > 1) {
          console.log("found room counter if > 1 " + chatParticipant.same_room_counter);
          await chatuserService.reduceCounter(room);

          this.chatParticipants[cpCounter].same_room_counter -= 1;
        } else {
          console.log("found room counter < 1 " + chatParticipant.same_room_counter);
          this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== room);

          await this.removeRoom_conversation_images(room);


          // await conversationService.deleteRoomMessages(room);

        }
      }
    },

    socket_updateChatNavCounter (room) {
      console.log("#### ROOM " + room)
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

          this.initReactiveProperties(user);
          user.messages = [];


          if (user.room === this.currentChatRoom) {
            this.users.push(user);
          }

        });

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
            user.connected = false;
            break;
          }
        }
      });

      socket.on("new message", async (data) => {
        this.newMessageRoom = data.room

        if (!this.currentChatRoom || this.currentChatRoom !== data.room) {
          this.newMessageTest = true;
          if (!this.newMessageList.some(nml => nml.room === data.room)) {


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

        this.providerBookings = this.providerBookings.concat(booking);
        this.notSeenClientBookings.push(booking);

        this.isRingBell = true;

        setTimeout(() => {
          this.isRingBell = false;
        }, 3000);

      })

      socket.on("map pro search", (data) => {
        this.clientMapSearchData = [
          ...this.clientMapSearchData,
          data
        ]
        if (!this.isMapSearchData) {

        }


      })

      socket.on("set chat_nav" , data => {

        let index = this.chatParticipants.findIndex(i => i.room === data.room);
        console.log("Index ----- " + index);
        this.chatParticipants[index] = data;

        if (!this.chatParticipants.some(participant => participant.room === data.room)) {
          this.chatParticipants = this.chatParticipants.concat(data);
        }

      })


      socket.on("accept recipient booking", async ({booking}) => {
        console.log("BOOOOKING ID " + booking.id)
        let proConfirmedBooking = await recipientService.getBookingById(booking.id);

        const foundObject = this.recipientBookings.find(item => item.id === booking.id);

        console.log("xxx status = " + proConfirmedBooking.status);
        proConfirmedBooking.status = "confirmed";
        //foundObject.status = "confirmed";

        //this.recipientBookings = this.recipientBookings.map(rb => rb.id !== booking.id ? rb : proConfirmedBooking);
        this.recipientBookings = this.recipientBookings.filter(rb => rb.status !== "confirmed" && rb.status !== "completed");
        this.recipientBookings = this.recipientBookings.filter(obj => obj.id !== proConfirmedBooking.id);

        //this.providerAcceptedBookings = this.providerAcceptedBookings.concat(proConfirmedBooking);

        this.providerAcceptedBookings = this.providerAcceptedBookings.concat(proConfirmedBooking);
        this.clientAcceptedBookings = this.clientAcceptedBookings.concat(proConfirmedBooking)
        //this.clientAcceptedBookings = this.clientAcceptedBookings.filter(cab => cab.id !== booking.id);

        const messageContent = `${proConfirmedBooking.ordered[0].yritys} on vahvistanut tilauksen " ${booking.header} " !`;
        const reason = "";
        const sender = "admin";
        await this.createNoteToDisplay(messageContent, false, reason, sender);

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

      socket.on("send offer limit is loaded", (room) => {
        this.socket_updateChatNavCounter(room);
      })

      socket.on("send offer", async (booking, offer) => {
        console.log("Offer is here! " + booking.user.username);
        this.newOffers = this.newOffers.concat(offer);

        //this.recipientBookings = await recipientService.getOwnBookings(this.loggedUser.id);
        booking.offers.push(offer)
        // if (this.proRefSlides.length > 0) {
        //   this.proRefSlides.push({
        //     pro: offer.provider.id,
        //     slides: offer.provider.reference
        //   })
        // }

        this.proRefSlides.push({
          pro: offer.provider.id,
          slides: offer.provider.reference
        })


        // this.proRefSlides = [
        //   ...this.proRefSlides,
        //   {
        //     pro: offer.provider.id,
        //     slides: offer.provider.reference
        //   }
        // ]


        this.offers.push(offer);


        //this.recipientBookings = this.recipientBookings.concat(booking);
        //booking.offers.push(offer);

        //this.clientAcceptedBookings = this.clientAcceptedBookings.concat(booking);

        // const index = this.recipientBookings.findIndex(item => item.id === booking.id);
        // this.recipientBookings[index].offers = this.recipientBookings[index].offers.concat(offer)


        const index = this.recipientBookings.findIndex(item => item.id === booking.id);
        this.recipientBookings[index].offers = this.recipientBookings[index].offers.concat(offer)

      })

      socket.on("confirm sent offer", async (booking, confirmedOffer) => {
        console.log("Sent offer is confirmed!, booking id is: " + booking.id);
        let bookingConfirmData = [];
        this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id);

        let realBooking = await recipientService.getBookingById(booking.id);



        this.confirmedProBookings = this.confirmedProBookings.concat(booking);

        this.checkCalendarFilledDays();
        console.log("xxxxxxx asiakas name " + booking.user.username)
        // TODO Asiakas nimi ei tule läbi!!!
        const messageContent = `Asiakas ${realBooking.user.username} on hyväksynyt sinun tarjoukseen. Merkintä on `;
        const reason = "";
        await this.createNoteToDisplay (messageContent, true, reason, booking.user.username);
        console.log("Route name in app. " + this.route.name);

        if (this.route.name === "client-notifications") {
          if (this.providerBookings.length < 1) {
            this.$router.push('/');
          }
        }
      })

      socket.on("sent deal done notification", (booking, madeOffer) => {
        console.log("Sended notification about deal done!! " + booking.header + " has made this deal. Accepted offer: " + madeOffer.price + " euroa.");
        this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id)

        const messageContent = `Lähettämääsi tarjousta "${booking.header}" ei vahvistettu!`;
        const reason = "";
        const sender = "admin";
        this.createNoteToDisplay(messageContent, false, reason, sender);

        if (this.route.name === "client-notifications") {
          if (this.providerBookings.length < 1) {
            this.$router.push('/');
          }
        }

      })
      socket.on("deal done for rest of" , (id, booking) => {
        // await providerService.removeProviderBooking(id, booking.id);
        // await recipientService.removeProviderData(booking.id, id);
        console.log("ID " + id + "Booking id " + booking.id);
        this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id);
        this.notSeenClientBookings = this.notSeenClientBookings.filter(nscb => nscb.id !== booking.id);
        if (this.providerBookings.length < 1) {
          this.$router.push('/');
        }
      })

      socket.on("sent notice about cansel offer", (room, booking) => {
        console.log("Sended booking ---------- " + booking.header);

        const messageContent = `Tilaus "${booking.header}" on valitettavasti poistettu tilaajan toiven mukaan!`;
        const reason = "";
        const sender = "admin";
        this.createNoteToDisplay(messageContent, false, reason, sender);

        //this.socket_updateChatNavCounter(room);  ???

        this.notSeenClientBookings = this.notSeenClientBookings.filter(item => item.id !== booking.id);
        this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id)
        if (this.providerBookings.length < 1) {
          this.$router.push('/');
        }
      })

      socket.on("handle rest of providers", (room, booking) => {
        this.notSeenClientBookings = this.notSeenClientBookings.filter(item => item.id !== booking.id)
        this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id);

        this.socket_updateChatNavCounter(room);
        if (this.providerBookings.length < 1) {
          this.$router.push('/');
        }
      })

      socket.on("set archived booking", (booking, room) => {
        this.socket_updateChatNavCounter(room);
        //this.providerBookings = this.providerBookings.filter(cp => cp.id !== booking.id);
        this.confirmedProBookings = this.confirmedProBookings.filter(cpp => cpp.id !== booking.id);
        this.checkCalendarFilledDays();
      })

      // socket.on("remove archived chat nav user", ({room, booking}) => {
      //   this.chatParticipants = this.chatParticipants.filter(item => item.room !== room);
      //   this.providerBookingsHistory = this.providerBookings.concat(booking);
      // })

      socket.on("reject map booking by_pro", ({id, room, pro, booking, reason}) => {
        const foundBooking = this.recipientBookings.find(item => item.id === booking.id);

        foundBooking.status = "waiting";

        this.recipientBookings = this.recipientBookings.filter(re => re.id !== booking.id);
        // ???
        this.clientAcceptedBookings = this.clientAcceptedBookings.filter(cab => cab.id !== booking.id);

        this.socket_updateChatNavCounter(room);


        if (this.chatParticipants) {

        }

        const messageContent = `Valitettavasti ${pro} ei varmistanut tilausta '${booking.header}'!`;
        const rejectReason = reason;
        const sender = pro.yritys;
        this.createNoteToDisplay(messageContent, false, rejectReason, sender);

      })

      socket.on("reject form booking by_pro", ({room, booking}) => {
        console.log("# room " + room);
        this.socket_updateChatNavCounter(room);

      })

      socket.on("rejected map booking by_client", ({id, room, booking, reason}) => {
        console.log("Client rejected booking! xxxxxxxx ");
        this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id);
        this.notSeenClientBookings = this.notSeenClientBookings.filter(item => item.id !== booking.id);

        this.socket_updateChatNavCounter(room);

        if (this.providerBookings.length < 1) {
          this.$router.push("/")
        }

        const messageContent = `Asiakas ${booking.user.username} on poistanut lähetetty tilauksen "${booking.header}"!`;
        //const reason = reason;
        const sender = booking.user.username;
        this.createNoteToDisplay(messageContent, false, reason, sender);

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

      socket.on("display booking_image", (image, bookingID) => {
        //console.log("VVV " + image.blob);
        console.log("BID " + bookingID);
        const index = this.providerBookings.findIndex(bb => bb.id === bookingID);
        console.log(" Added image booking INDEX is " + index)
        //this.providerBookings[index].image.push(image);
        const imageStr = image.bytes;
        const showImage = `data:imageStr/jpg;base64,${imageStr}`;
        const addedImageToDisplay = {
          _id: image.id,
          show: showImage
        }
        this.providerBookings[index].image = this.providerBookings[index].image.concat(addedImageToDisplay);
        // if (this.providerBookings[index].image) {
        //
        //   this.providerBookings[index].image.push(image);
        // }

      })

      socket.on("display edited_booking_image", (imageID, image, bookingID) => {
        //console.log("VVV " + image.blob);
        console.log("BID " + bookingID);

        //this.imageSrc = `data:image/jpg;base64,${image}`;
        const imgToDisplay = `data:image/jpg;base64,${image}`;
        const d_img = {
          _id: imageID,
          show: imgToDisplay
        }
        const index = this.providerBookings.findIndex(bb => bb.id === bookingID);
        console.log("INDEX " + index)
        if (this.providerBookings[index].image) {

          const imgIndex = this.providerBookings[index].image.findIndex(im => im._id === imageID);
          console.log("IMAGE INDEX " + imgIndex)

          this.providerBookings[index].image[imgIndex] = d_img;

        }

      })

      socket.on("stop display booking_image", (imageID, booking) => {
        const delIndex = this.providerBookings.findIndex(item => item.id === booking.id);
        if (this.providerBookings[delIndex].image) {
          const imgIndex = this.providerBookings[delIndex].image.findIndex(ii => ii._id === imageID);
          this.providerBookings[delIndex].image.splice(imgIndex, 1);
        }
      })

      socket.on("show pro ref image", (imageID, proID, display, action) => {
        console.log("Show pro ref image id " + imageID);
        console.log("Show pro id " + proID);
        const showImage = `data:display/jpg;base64,${display}`;
        const image = {
          _id: imageID,
          show: showImage
        }

        const proIndex = this.proRefSlides.findIndex(slide => slide.pro === proID);
        console.log("PRO INDEX " + proIndex);
        const sIndex = this.proRefSlides[proIndex].slides.findIndex(s => s._id === imageID);
        if (action === 'edit') {

          console.log("SLIDE INDEX " + sIndex);
          this.proRefSlides[proIndex].slides[sIndex] = image;
        } else if (action === 'add') {
          this.proRefSlides[proIndex].slides = this.proRefSlides[proIndex].slides.concat(image);
        }
      })
      socket.on("remove pro ref image", (imageID, providerID) => {
        const remi = this.proRefSlides.findIndex(slide => slide.pro === providerID);
        const imgIndex = this.proRefSlides[remi].slides.findIndex(s => s._id === imageID);
        this.proRefSlides[remi].slides.splice(imgIndex, 1);
      })

      socket.on("remove temp_room", (room) => {
        this.chatParticipants = this.chatParticipants.filter(member => member.room !== room);
        if (this.route.name === "live-chat") {
          this.$router.go(-1);
        }
        //this.currentChatRoom = null;
      })

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
      this.conversation.push({
        content,
        image: blob,
        username: this.loggedUser.username,
        date,
        user: this.loggedUser.username,
        userID: this.loggedUser.id
      })

      const chatRoomIndex = this.chatParticipants.findIndex(i => i.room === this.currentChatRoom);
      this.chatParticipants[chatRoomIndex].isActive = true;

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
      if (this.givenRatingNav) {
        client.rating = this.givenRatingNav;
      }

      this.client = client
      console.log("Feedback client is " + client.id)
      this.rateCustomer = client;
      window.localStorage.setItem('customerFeedback', JSON.stringify(client));

    },
    async getRecipientCompletedBookings (userID) {
      const completedBookings = await clientHistoryService.getClientHistory();
      // && cph.status === "rated"
      this.recipientCompletedBookingsHistory = completedBookings.filter(cph => cph.user.id === userID);
      this.recipientCompletedBookings = completedBookings.filter(cp => cp.user.id === userID && cp.status === "no rated");
    },
    async getProCompletedHistory (userID) {
      const proHistory = await proHistoryService.getProHistory();
      this.proCompletedHistory = proHistory.filter(ph => ph.user.id === userID);
    },


    onPressedLogoBtn () {
      this.selectedUser = null;
      this.currentChatRoom = null;
      //window.localStorage.removeItem('currentRoom');
      //this.isRingBell = !this.isRingBell;

    },
    onPressedUserIconChildren () {
      window.localStorage.removeItem('selectedChatUser');
    },

    handleSetRoom (room) {
      this.currentChatRoom = room;
      window.localStorage.setItem("currentRoom", JSON.stringify(room));
    },

    updateRoom (item) {
      console.log("Mate id " + item.userID)
      // }
      this.currentChatRoom = item.room;
      window.localStorage.setItem('currentRoom', JSON.stringify(item.room));
      // this.users.forEach(user => {
      // })

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
      console.log("Bell bell bell " + state)
    },
    // handleDeActivateBell () {
    //
    // },
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
      this.proTimeCreditLeft = null;

      this.user = null;

      this.$router.push('/');
      //location.reload()

    },

    async handleRated (id, ratingResult, yritys, rate) {
      this.givenRatingNav = rate;
      await clientHistoryService.updateRating(this.rateCustomer.id, {rating: rate});
      await clientHistoryService.updateStatus(this.rateCustomer.id, {status: "rated"});
      this.recipientCompletedBookings = this.recipientCompletedBookings.filter(rcb => rcb.id !== this.rateCustomer.id)

      window.localStorage.removeItem('customerFeedback')
      if (ratingResult === "negatiivista" || ratingResult === "positiivista") {
        this.ratingResult =  `Olet antanut ${ratingResult} palautetta yritykselle - ${yritys}`;
      } else {
        this.ratingResult = `Et antanut palautetta yritykselle - ${yritys}`;
      }

      setTimeout(() => {
        this.ratingResult = null;
      }, 3000);
    },

    // Setting recipient navbar feedback and chat nav members when completed booking expired
    async handleArchiveClientSideBooking (bookingForFeedback, bookingRoom) {

      socket.emit("archive booking", bookingForFeedback.ordered[0].user.id, bookingForFeedback, bookingRoom);

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

      // Chat members room to remove
      const roomToRemove = this.chatParticipants.find(panel => panel.room === room)


      await this.updateChatNavCounter(room);

      // this.images.forEach(img => {
      //   console.log("Images ## " + img._id);
      //   imageService.cleanAllRecipientImages(img._id)
      // })

      await providerService.removeProviderBooking(bookingForFeedback.ordered[0].id, bookingForFeedback.id);
      await offerService.deleteBookingOffers(bookingForFeedback.id);
      await recipientService.removeBooking(bookingForFeedback.id);
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
        //console.log("Chat room + users id-- " + member.username)
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
      })

    },
    async handleUser () {
      const myData = await userService.getUser(this.loggedUser.id);
      this.notes = myData.messages;
    },

    async handleProvider () {
      console.log("Current route " + this.route.name)
      const pro = await providerService.getProvider(this.loggedUser.id)
      if (pro) {
        this.proTimeCreditLeft = ((pro.proTime - new Date().getTime()) / 86400000).toFixed() < 0 ? 0 : ((pro.proTime - new Date().getTime()) / 86400000).toFixed();
        if (this.proTimeCreditLeft <= 0) {
          this.isAccessTerminated = true;
        }
        this.userIsProvider = pro;
        //this.proImages = [];
        pro.reference.forEach((item, id) => {
          console.log("IMMM " + item.name)
          this.proImages = [
              ...this.proImages,
            {
              _id: item._id,
              image: item.image,
              name: item.name
            }
          ]

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


        this.providerBookings = pro.booking.filter(uipb => uipb.status !== "confirmed"  &&
            uipb.status !== "completed" && uipb.created_ms - new Date().getTime() > 0);


        // const proAcceptedBookings = pro.booking.filter(pab => pab.status === "confirmed");
        // proAcceptedBookings.forEach(pab => {
        //   this.filled_days = this.filled_days.concat(pab.onTime);
        //   console.log("############# " + pab.onTime.map(b => b.day))
        //   pab.onTime.forEach(res => {
        //     const filledDay = addDays(new Date(), res.day - new Date().getDate())
        //     this.filled.push(filledDay);
        //   })
        //
        // })

        // TODO here need atention!
        this.confirmedProBookings = this.userIsProvider.booking.filter(uiph => uiph.status === "confirmed" &&
            uiph.created_ms - new Date().getTime() > 0);
        //this.removeProSideExpiredConfirmedBookings();
        this.checkCalendarFilledDays();

      }

      this.notSeenClientBookings = this.providerBookings.filter(nsb => !nsb.visitors.includes(this.userIsProvider.id));
      this.providerBookings.forEach(pb => {

      })
    },

    checkCalendarFilledDays () {
      this.filled_days = [];
      this.filled = [];


      // if (offer.monthFrom === new Date().getMonth()) {
      //   markedDay = addDays(new Date(), offer.dayFrom - new Date().getDate());
      // } else {
      //   markedDay = addDays(
      //       new Date(offer.yearFrom, offer.monthFrom, 0), offer.dayFrom);
      // }



      let filledDay = null;

      this.confirmedProBookings.forEach(pab => {
        // Check if confirmed booking is valid and add it to pro calendar
        if ((pab.created_ms) - new Date().getTime() > 0) {
          this.filled_days = this.filled_days.concat(pab.onTime);
          pab.onTime.forEach(res => {
            console.log("DAY " + res.month)
            if (res.monthFrom === new Date().getMonth()) {
              filledDay = addDays(new Date(), res.dayFrom - new Date().getDate())
              //this.filled.push(filledDay);
            } else {
              console.log("WHAT");
              filledDay = addDays(new Date(res.year, res.month, 0), res.day);
            }

            // const filledDay = addDays(new Date(), res.day - new Date().getDate())
            this.filled.push(filledDay);
          })
        } else {
          console.log("SORRY, pro booking is expired!!")
        }


      })
    },

    async handleRecipientBookings () {
      let offers = [];
      let recipientbookings = await recipientService.getOwnBookings(this.loggedUser.id);

      if (recipientbookings.length > 0) {
        if (recipientbookings[0].user.avatar) {
          this.avatar = recipientbookings[0].user.avatar

        }
        // Get all booking included pro ref images
        recipientbookings.forEach(booking => {
          let providerID;
          let pro = booking.ordered;
          let proSlides = [];
          booking.ordered.forEach(ob => {
            providerID = ob.id;
            proSlides.push(ob.reference);
            if (!this.proRefSlides.some(ps => ps.pro === ob.id)) {
              this.proRefSlides.push({
                pro: ob.id,
                slides: ob.reference
              })
            }

          })
        })


        recipientbookings.forEach(booking => {
          this.newOffers = this.newOffers.concat(booking.offers.filter(offer => offer.isNewOffer));
        })

        this.providerAcceptedBookings = recipientbookings.filter(booking => booking.status === "confirmed");

        this.clientAcceptedBookings = recipientbookings.filter(cb => cb.status === "notSeen" || cb.status === "seen" || cb.status === "offered")

        let recipientBookingsForNavChat = recipientbookings.filter(rbc => rbc.status !== "completed");

        this.recipientBookings = recipientbookings.filter(b => (b.status !== "confirmed") && b.status !== "completed")

        console.log("Created booking: " )
        this.removeExpiredRecipientBookings();
        this.removeExpiredConfirmedBookings();
        recipientBookingsForNavChat.forEach(rb => {

          if(rb.ordered.length > 0) {
            let pro = rb.ordered[0].user.username;
            console.log("Pro " + pro);

            let index = rb.ordered[0].room.findIndex(item => item.userID === this.loggedUser.id)
          }
        })
      }
    },
    // Add new booking
    async handleCreateBooking (booking, _image, image) {
      console.log("Booking zone - " + booking.zone);
      booking.ordered = [];
      //const createBookingStatus = await recipientService.updateRecipient(booking.id, {status: "notSeen"});
      let origin = [booking.latitude, booking.longitude];
      let destination = [];
      const providersForBooking = await providerService.getProvidersMatchingByProfession(
          {result: booking.professional}
      )
      console.log("Professional. " + booking.professional)
      //let providerArr = [];
      let proIdArr = [];

      let orderedBookings = [];

      for (let i = 0; i < providersForBooking.length; i++) {
        destination = [providersForBooking[i].latitude, providersForBooking[i].longitude];
        console.log("Pro id " + providersForBooking[i].id);
        if (booking.zone === 0) {
          if (providersForBooking[i].user.id !== this.loggedUser.id) {
            console.log("PRP ID, zone is 0: " + providersForBooking[i].user.id)

            orderedBookings = [
                ...orderedBookings,
                providersForBooking[i]
            ]

            proIdArr = [
              ...proIdArr,
              providersForBooking[i].user.id
            ]
            await recipientService.addProviderData(booking.id, providersForBooking[i].id);
            await providerService.addProviderBooking(providersForBooking[i].id, booking.id);
          }
        } else {
          gMapData.findDistance(origin, destination)
              .then(async (data) => {
                console.log("Data distance: " + data.distance)
                console.log("Data distance type - " + typeof data.distance);

                if (parseInt(data.distance) < booking.zone) {
                  booking.ordered = [
                    ...booking.ordered,
                    providersForBooking[i]
                  ]
                  if (providersForBooking[i].user.id !== this.loggedUser.id) {
                    console.log("PRP ID: " + providersForBooking[i].user.id)
                    proIdArr = [
                      ...proIdArr,
                      providersForBooking[i].user.id
                    ]
                    await recipientService.addProviderData(booking.id, providersForBooking[i].id);
                    await providerService.addProviderBooking(providersForBooking[i].id, booking.id);
                  }

                }
              })
        }


      }
      if (_image) {
        booking.image = [];
        booking.image = booking.image.concat(_image);
        console.log("IMAGE DATA " + image.name)
      }



      console.log("proIdArr length is " + proIdArr.length)
      booking.ordered = orderedBookings;
      const proBooking = await recipientService.getBookingById(booking.id);
      socket.emit("send created booking", proIdArr, proBooking);
      this.recipientBookings = this.recipientBookings.concat(booking);

      //this.clientAcceptedBookings = this.clientAcceptedBookings.concat(booking);

      //console.log("recipientBooking orders length " + this.recipientBookings.ordered.length);
    },
    // Add new booking from map
    async handleCreateMapBooking (booking, proID) {
      const bookingStatus = await recipientService.updateRecipient(booking.id, {status: "notSeen"});

      this.recipientBookings = this.recipientBookings.concat(booking);

      this.clientAcceptedBookings = this.clientAcceptedBookings.concat(booking);
    },
    handleNotifications () {
      this.$router.push('/notification');
    },

    handleExitNotifications (state) {
      console.log("State is: " + state)
      this.isNotification = state;
    },
    handleStatusUpdate (id) {
      this.providerBookings = this.providerBookings.filter(nscb => nscb.id !== id)
      this.handleProvider();
    },


    // Confirmed map booking by provider
    handleRemoveAcceptedBooking (booking) {
      console.log("Handling remove booking..." + booking.id)
      this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id);
      this.confirmedProBookings = this.confirmedProBookings.concat(booking);

      this.checkCalendarFilledDays();

      if (this.providerBookings.length < 1) {
        //this.$router.push('/');
        this.$router.go(-1);
      }

    },
    // lsRemove (storage_name, holder, index) {
    //   const rejectedBookings = JSON.parse(localStorage.getItem(storage_name)) || [];
    //   console.log("INDEX " + index);
    //   let message = holder === "client" ? this.messageAboutRejectBookingByClient : this.messageAboutRejectBooking;
    //   if (index > -1) {
    //     console.log("Room " + rejectedBookings[index].room);
    //
    //     this.chatParticipants = this.chatParticipants.filter(cp => cp.room !== rejectedBookings[index].room);
    //     rejectedBookings.splice(index, 1);
    //     localStorage.setItem(storage_name, JSON.stringify(rejectedBookings));
    //     message = rejectedBookings;
    //     console.log("localstorage length: " + rejectedBookings.length);
    //     if (rejectedBookings.length < 1) {
    //       localStorage.removeItem(storage_name);
    //       message = null;
    //     }
    //
    //   }
    // },

    async handleRejectProFormBooking (room, booking, providerID) {
      console.log("Provider id " + providerID)
      console.log("booking id " + booking.id)
      await providerService.removeProviderBooking(providerID, booking.id);
      await recipientService.removeProviderData(booking.id, providerID);
      this.providerBookings = this.providerBookings.filter(pb => pb.id !== booking.id);
      await this.updateChatNavCounter(room);
      if (this.providerBookings.length < 1) {
        //this.$router.push('/');
        this.$router.go(-1);
      }
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
    // closeClientRejectedBookingMsgPanel (index) {
    //
    //   this.lsRemove('clientRejectedBookingMessage', 'client', index);
    //
    //   //console.log("Length " + rejectedBookings.length)
    //
    // },
    // closeProRejectedBookingMsgPanel (index) {
    //   this.lsRemove('rejectedBookingMessage', 'pro', index);
    // },
    // closeBookingConfirmedMessagePanel (index) {
    //   let confirmedMsgArray;
    //   const confirmed = window.localStorage.getItem('bookingConfirmedByClient');
    //   if (confirmed) {
    //     confirmedMsgArray = JSON.parse(confirmed)
    //
    //   }
    //
    //   if (index > -1) {
    //     confirmedMsgArray.splice(index, 1)
    //   }
    //   if (confirmedMsgArray.length > 0) {
    //     window.localStorage.setItem('bookingConfirmedByClient', confirmedMsgArray);
    //   } else{
    //     window.localStorage.removeItem('bookingConfirmedByClient');
    //     this.messageAboutOfferConfirmation = null;
    //   }
    //
    // },

    // test () {
    //   console.log("xxxx " + validation)
    // },
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

          console.log("Loged, logged user " + user.id)
          //const username = this.loggedUser.username;


          await this.getRecipientCompletedBookings(user.id);
          await this.getProCompletedHistory(user.id);

          this.handleRecipientBookings();
          await this.handleProvider();
          await this.handleUser();
          this.chatParticipants = [];
          await this.initNavChatters();

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
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);

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
html, body {
  background: linear-gradient(#4c4747, #121215);
  margin: 0;
  padding: 0;
  height: 100%;
  /*min-height: 100vh;*/
  overflow-x: hidden;

  overscroll-behavior: none;
  touch-action: manipulation;

  /*min-width: 100vw;*/

  /*min-height: 100vh;*/



  /*overscroll-behavior: none;*/
  /*touch-action: pan-x pan-y;*/



  /*overflow-y: hidden;*/

  /*width: 100%;*/
  /*height: 100%;*/
  /*margin: 0;*/
  /*padding: 0;*/



  /*overflow-y: hidden;*/

  /*  overflow-y: auto;*/
  /*  background-color: #141414;*/
    /*background-image: url('./assets/247.png');*/

}
body {
  min-height: 100vh;
  width: 100vw;

  /*min-height: calc(100vh + 50px); !* Adjust footer height accordingly *!*/
  /*display: flex;*/
  /*flex-direction: column;*/



  /*overflow-x: hidden;*/
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#navbar{
  /*position:fixed;*/
  /*top:0;*/
  /*left:0;*/
  /*width:100%;*/
  /*background:blue;*/
  /*border-radius:0 0 30px 30px;*/
  /*color:white;*/
  /*text-align:center;*/

  /*Define a height for NavBar*/
  /*height:80px;*/
  transition: 0.5s;
  /*and a transition time for a smooth appearence*/

}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*background-color: #141414;*/
  /*background-image: url('./assets/247.png');*/




  /*background: linear-gradient(#4c4747, #121215);*/




  /*background-image: url('./assets/prokeikkatori.png');*/
  /*background-size: 100%;*/


  /*background-repeat: no-repeat;*/
  /*background-repeat: no-repeat;*/
  /*background-attachment: fixed;*/






  color: #dddddd;
  /*height: 100vh;*/

  min-width: 100vw;
  min-height: 100vh;



  /*max-height: 300vh;*/
  clear: both;
  padding-top: 100px;
  padding-bottom: 150px;
}

.homeBtn {

}
.homeBtn :hover {
  color: lightskyblue;
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


/*table {*/
/*  color: darkslategrey;*/
/*}*/

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

.pop {
  backGround-color: #4c423a;
  color: #ea6523;
  z-index: 99 !important;
  font-size: 14px;
  padding: 12px 20px;
  /*width:30%;*/
  /*height: 300px;*/
  display:flex;
  align-items:center;
  justify-content:center;
  top: 70vh;
  left: 95vw; transform: translate(-50%, -50%);
  position:fixed;
}
.pop-content {
  backGround-color: #4c423a;
  position: fixed;
  color: #ea6523;
  z-index: 99 !important;
  font-size: 14px;
  padding: 12px 20px;
  margin-top: 100px;
  width:20%;
  height: 300px;
  display:flex;
  align-items:center;
  justify-content:center;
  top: 68vh;
  left: 80vw; transform: translate(-50%, -50%);
}

.pop:hover {
  background: #2b2b2b;
  color: #fff;
}

@media only screen and (max-width: 1000px) {
  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #dddddd;
    min-width: 100vw;
    min-height: 100vh;
    clear: both;
    padding-top: 100px;
  }
  .pop {
    backGround-color: #4c423a;
    color: #ea6523;
    z-index: 99 !important;
    font-size: 14px;
    padding: 12px 20px;
    width:100px;
    /*height: 300px;*/
    display:flex;
    align-items:center;
    justify-content:center;
    top: 40vh;
    left: 85vw; transform: translate(-50%, -50%);
    position:fixed;
  }
  .pop-content {
    backGround-color: #4c423a;
    position: fixed;
    color: #ea6523;
    z-index: 99 !important;
    font-size: 14px;
    padding: 12px 20px;
    margin-top: 100px;
    width:70%;
    height: 300px;
    display:flex;
    align-items:center;
    justify-content:center;
    top: 50vh;
    left: 50vw;
    /*transform: translate(-50%, -50%);*/

  }
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

  .footer {
    display: none !important;
  }

}

/*.navbar.navbar-dark.bg-dark{*/
/*  background-color: #AABB55!important;*/
/*}*/

.chat-new-message-provider {
  /*color: #f75959;*/
  /*width: 200px;*/
  color: white;
  /*background: palevioletred;*/
  border: 1px solid orange;
  margin-top: 10px;
  padding: 6px
}
.chat-new-message-client {
  /*color: #f75959;*/
  width: 200px;
  color: white;
  /*background: palevioletred;*/
  border: 1px solid deepskyblue;
  margin-top: 10px;
  padding: 5px 15px 5px 15px;
}
.chat-user-is-provider {
  width: 200px;
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
  /*width: 200px;*/
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

/*.ask-prompt-action{*/
/*  backGround-color: darkgrey;*/
/*  color: #f4b43e;*/
/*  z-index: 99 !important;*/
/*  font-size: 14px;*/
/*  height:125px;*/
/*  width:270px;*/
/*  !*display:flex;*!*/
/*  align-items:center;*/
/*  justify-content:center;*/
/*  top: 50vh;*/
/*  left: 50vw; transform: translate(-50%, -50%);*/
/*  position:fixed;*/

/*}*/
/*.ask-prompt-action .prompt-header {*/
/*  margin-top: 7px;*/
/*}*/

/*.disabled {*/
/*  opacity: 0.5;*/
/*  pointer-events: none;*/
/*}*/




.popover {
  /*margin: 0;*/
  /*font-size: 14px;*/
  /*text-transform: uppercase;*/
  /*background: #fff;*/
  /*color: #3794ff;*/
  /*padding: 12px 20px;*/
  /*border-radius: 6px;*/
  /*cursor: pointer;*/
  /*font-weight: 600;*/
  /*left: 70vw;*/


  backGround-color: #4c423a;
  color: #ea6523;
  z-index: 99 !important;
  font-size: 14px;

  width:300px;
  height: 300px;
  display:flex;
  align-items:center;
  justify-content:center;
  top: 50vh;
  left: 50vw; transform: translate(-50%, -50%);
  position:fixed;


}



.popover-content {
  position: absolute;
  background: #fff;
  border-radius: 6px;
  margin-top: 50px;
  padding: 16px;
  color: #333;
  min-width: 200px;
  text-align: left;
  left: 70vw;
}


</style>