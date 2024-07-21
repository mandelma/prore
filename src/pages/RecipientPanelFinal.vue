<template>
  <div>
    <!--
    <MDBContainer style="margin-top: 30px;">
    -->
<!--    users {{chatusers}}-->
    <div style="display: flex; justify-content: right; padding: 20px;">
      <MDBBtnClose
          white
          style="cursor: pointer;"
          @click="canselRecipientFinal"
      />
    </div>

      <h2>- {{ provider.yritys }} -</h2>

      <MDBTable style="font-size: 18px; color: #dddddd; text-align: left;">
        <tbody>
        <tr>
          <td>
            Palautteet
          </td>
          <td>
            <MDBRow style="position: relative;">
              <MDBCol>

                <MDBIcon style="padding: 10px; cursor: pointer;" i class="far fa-thumbs-up" size="lg"
                @click="getPositiveFeedback"></MDBIcon>


                <MDBBadge color="success" class="translate-middle p-1"
                          pill
                          notification>{{provider.rating.positive}}</MDBBadge>



              </MDBCol>
              <MDBCol>

                <MDBIcon
                    style="padding: 10px; cursor: pointer;" i
                    class="far fa-thumbs-down" size="lg" @click="getNegativeFeedback"></MDBIcon>


                <MDBBadge color="danger" class="translate-middle p-1"
                          pill
                          size="lg"
                          notification>{{provider.rating.negative}}</MDBBadge>



              </MDBCol>
              <div v-if="isPositive">
                <PositiveFeedback

                    :feedback = provider.feedback
                    @close:comments = closeComments
                />
              </div>
              <NegativeFeedback
                  v-if="isNegative"
                  :feedback = provider.feedback
                  @close:comments = closeComments
              />
            </MDBRow>


          </td>
        </tr>
        <tr>
          <td>
            Y-tunnus
          </td>
          <td>
            {{provider.ytunnus}}
          </td>
        </tr>
        <tr>
          <td>
            Osoite:
          </td>
          <td>
            {{provider.address}}
          </td>
        </tr>
        <tr>
          <td>
            Tuntihinta
          </td>
          <td>
            {{provider.priceByHour ? provider.priceByHour + " euroa." : "Hinta sovittaessa!"}}
          </td>
        </tr>
        <tr>
          <td>
            palvelun paikka
          </td>
          <td>
            <p v-if="provider.range === 0">Palvelun osoite: {{provider.address}}</p>
            <p v-else>
              Palvelu tarjotaan ilmoittamassasi osoitteessa.
            </p>
          </td>
        </tr>
        <tr v-if="provider.pro_link">
          <td>
            Kotisivu
          </td>
          <td>
            <a :href="'//' + provider.pro_link" target="_blank">
              Avaa kotisivu
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <MDBBtn
                block outline="primary"
                size="lg"
                @click="isPressedOpenGallery = !isPressedOpenGallery"
            >
              {{!isPressedOpenGallery ? "Avaa galleria" : "Sulje galleria"}}
            </MDBBtn>

          </td>
          <td>
<!--            <gallery-->
<!--                v-if="isPressedOpenGallery"-->
<!--                :isPro = isPro-->
<!--                :inspectingBooking = false-->
<!--                :userIsProvider = provider-->
<!--                :proImages = proSlides-->

<!--            />-->
          </td>
        </tr>
        </tbody>
      </MDBTable>

    <MDBBtn
        v-if="!isChat"
        block color="dark"
        size="lg"
        @click="setChatPanel"
    >
      Kirjoita palveluntarjoajalle
    </MDBBtn>
    <div v-else>

      <h3  style="color: green; float: right; cursor: pointer" @click="isChat = false">Valmis</h3>
    </div><br>


    <live-chat
        v-if="isChat"
        :test = test
        :chatusers = chatusers
        :messages =messages
        :selecteduser = selecteduser
        @select:user = selectUser
        @noSelected = noSelectUser
        @on:message = onMessage

    />

<!--    <MDBBtn block color="primary" size="lg" @click="handleRecipientAction(provider.id)">Testime saadavust...</MDBBtn>-->


    <MDBBtn style="margin-top: 20px;" outline="info" block size="lg" @click="handleOrder(provider)">
      Tilaa yritys
    </MDBBtn>




  </div>
<!--  selecteduser {{selecteduser}}-->
</template>

<script>
/* eslint-disable */
import {
  MDBBtn,
  //MDBContainer,
  MDBTable,
  MDBRow,
  MDBCol,
  MDBIcon, MDBBadge, MDBBtnClose
}from "mdb-vue-ui-kit";
import PositiveFeedback from "@/components/PositiveFeedback";
import NegativeFeedback from "@/components/NegativeFeedback"
import liveChat from '../pages/LiveChat'

import socket from "@/socket";
import User from '../components/chatio/User'
import MessagePanel from '../components/chatio/MessagePanel.vue'
import Gallery from '@/pages/Gallery.vue'

export default {
  name: "recipient-final",
  props: {
    test: Boolean,
    chatusers: Array,
    chatCredentials: Object,

    selecteduser: null,
    messages: Array,
    provider: Object,
    isPro: false,
    proSlides: Array,
    room: String,
    roomUserCount: Number,
    available: String,
    booking: Array
  },
  components: {
    User,
    MessagePanel,
    //UserDialog,
    //DialogPanel,
    PositiveFeedback,
    NegativeFeedback,
    Gallery,
    liveChat,
    MDBBtn,
    //MDBContainer,
    MDBTable,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBadge,
    MDBBtnClose
  },
  data() {
    return {
      selectedUser: null,
      isPositive: false,
      isNegative: false,

      isChat: false,
      isPressedOpenChat: false,
      isPressedOpenGallery: false,
      isPressedContactToUser: false,
      isConnection: false,
      isTwoUsers: false,

      feedback: this.provider.feedback,

      //room: "",

      isPressedFinal: false,

      //isRoom: false,
      count: 0,
      userCount: 0
    }
  },
  mounted () {

  },
  methods: {
    // handleAction () {
    //   const id = this.provider.user.id;
    //   console.log("Sended to user id... " + id)
    //   socket.emit("accept provider", {
    //     id,
    //     //to: this.loggedUser.id,
    //   })
    // },


    // chatCredentials (data) {
    //   this.$emit("chatCredentials", data);
    // },

    createChatPanel () {
      //socket.emit("update room", this.room);

      this.isChat = true;
      this.$emit("initializeChat");
    },

    setChatPanel () {
      // finalinfo
      console.log("Pressed")
      this.$emit("create_chat_panel")
      //this.$emit("initialize_chat");
      this.isChat = true;
    },

    selectUser(user) {
      this.$emit("select", user)
      //if (!user.self)
      //this.selectedUser = user;
    },

    noSelectUser () {
      this.$emit("noSelect");
    },

    onMessage(content, date) {

      this.$emit("message", content, date)

    },




    test (state) {
      console.log("From chat: " + state)
    },

    // openChat () {
    //   this.isChat = true;
    //   this.count++;
    //
    //   //this.isChat = true;
    //
    //   console.log("this room is " + this.room)
    // },

    // Uus teema homseks valmis aretada!!!

    // contactToUser() {
    //
    //   this.isPressedContactToUser = true;
    //   socket.emit('updateRoom', this.room);
    //   socket.on('get updated room users', (data) => {
    //     console.log("New users update " + data.users.length)
    //     if (data.users.length > 1) {
    //       this.isConnection = true;
    //       //this.isTwoUsers = true;
    //     } else {
    //       this.isConnection = false;
    //     }
    //
    //   })
    //   this.isPressedFinal = true;
    //   this.isChat = true;
    // },


    handleOrder (provider) {
      this.$emit('provider:ordered', provider)
    },
    getPositiveFeedback () {
      this.isPositive = true;
      this.isNegative = false;

    },
    getNegativeFeedback () {
      this.isNegative = true;
      this.isPositive = false;
      //console.log("Feedback")
    },
    closeComments (result) {
      this.isPositive = this.isNegative = result;
      console.log("result " + result)
    },
    canselRecipientFinal () {
      this.isChat = false;

      this.$emit('cansel:final', false)
      this.noSelectUser();

    }
  },

}
</script>

<style scoped>

</style>