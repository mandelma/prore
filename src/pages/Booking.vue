<template>
  <MDBTable borderless style="font-size: 18px; color: #dddddd; text-align: center;">
    <tbody>
    <tr>
      <td>
        {{booking.address}}
        <MDBBtnClose
            white
            class="closeData"
            @click="closeBooking"
        />
      </td>
    </tr>
    <tr>
      <td style="border: solid darkslategrey">
        {{booking.description}}
      </td>
    </tr>
    <tr>

    </tr>
    <tr >

      <td v-if="booking.image && booking.image.length > 0">
        <MDBBtn
            v-if="!isImageOpen"
            outline="success"
            @click="openImagePanel(booking.image)"
        >
          Open image
        </MDBBtn>

        <div >

<!--          <gallery-->
<!--              v-if="isImageOpen"-->
<!--              :isPro = false-->
<!--              :inspectingBooking = true-->
<!--              :proImages = bookingImages-->
<!--          />-->

<!--          <img-->
<!--              v-if="isOpenImage" id="img"-->
<!--              class="loading"-->
<!--              :src= srcImg-->

<!--              alt="kuva"-->
<!--          >-->

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


      </td>
    </tr>
    <tr>
      <td>

      </td>
    </tr>
    <tr>
      <td>

        <MDBBtn outline="info" @click="pressOpenChat(provider, booking)" size="lg" style="float: right;">
          {{!isOpenChat ? 'Avaa' : 'Sulje'}}&nbsp;&nbsp;
          <MDBIcon>
            <i class="far fa-comments"></i>
          </MDBIcon>
        </MDBBtn>


      </td>


    </tr>
    </tbody>
  </MDBTable>
<!--  createOffer(booking)-->
  <live-chat
      style="margin-bottom: 25px;"
      v-if="isOpenChat"
      :chatusers = chatusers
      :messages =messages
      @select:user = selectUser
      @noSelected = noSelected
      :selecteduser = selecteduser
      @on:message = onMessage
  />
  <div v-if="booking.isIncludeOffers" style="margin-bottom: 20px;">
    <div v-if="!booking.offers.some(offer => offer.provider === provider.id)">
      <MDBBtn
          block
          outline="primary"
          size="lg"
          @click="makeOfferBtn(booking)"
      >
        Tee Hintatarjous
      </MDBBtn>

      <div v-if="isOffer" style="padding: 13px; margin-top: 13px; border: 1px solid blue; margin-bottom: 20px;">
        <div style="display: flex; justify-content: right; margin-bottom: 7px;">
          <MDBBtnClose white @click="isOffer = false"/>
        </div>

        <MDBInput white type="number" label="Tarjoa hintasi" v-model="priceOffer" wrapperClass="mb-4" />

        <MDBRadio
            label="Tarjoan palvelu asiakkaan luona"
            name="area"
            v-model="place"
            value="area_in"
        >

        </MDBRadio>
        <MDBRadio
            label="Tarjoan palvelua paikalla"
            name="area"
            v-model="place"
            value="area_out"
        >

        </MDBRadio>

        <MDBTextarea
            white
            style=""
            label="Anna tarvittaessa lisäselvityksiä..."

            rows="3"
            v-model="aboutOffer"
        >

        </MDBTextarea>
        <MDBBtn
            v-if="priceOffer"
            label="Anna hintatarjous"
            block size="lg"
            outline="success"
            style="margin-top: 12px;"
            @click="createOffer(booking)"
        >
          Lähetä
        </MDBBtn>

      </div>
      <MDBBtn block outline="danger" @click="rejectFormBooking(booking)" size="lg">Poista tilaus</MDBBtn>
    </div>
  </div>

  <div v-else style="margin-bottom: 20px;">
<!--    <MDBBtn outline="success" block size="lg" @click="isQuitClientBooking = true">Varmista tilaus</MDBBtn>-->

    <MDBBtn
        v-if="!isQuitClientBooking"
        block
        outline="success"
        size="lg"
        @click="confirmBooking(booking)"
    >
      Varmista tilaus
    </MDBBtn>

    <div v-if="isQuitClientBooking" style="padding: 13px; margin-top: 13px; border: 1px solid blue;">
      <div style="display: flex; justify-content: right; margin-bottom: 7px;">
        <MDBBtnClose white @click="isQuitClientBooking = false"/>
      </div>

      <MDBTextarea
          white
          style=""
          label="Anna syy..."
          rows="3"
          v-model="reason"
      >

      </MDBTextarea>
      <MDBBtn
          v-if="reason.length > 1"
          block size="lg"
          outline="success"
          style="margin-top: 12px;"
          @click="confirmRejectBookingNoOffers(booking)"
      >
        Varmista
      </MDBBtn>
    </div>

<!--    <MDBBtn-->
<!--        v-if="!isQuitClientBooking"-->
<!--        block-->
<!--        outline="danger"-->
<!--        size="lg"-->
<!--        @click="rejectBooking"-->
<!--    >-->
<!--      Poista tilaus-->
<!--    </MDBBtn>-->

  </div>


  <div>


  </div>



<!--  <MDBBtn-->
<!--      block-->
<!--      outline="success"-->
<!--      size="lg"-->
<!--      @click="confirmBooking(booking)"-->
<!--  >-->
<!--    Varmista tilaus-->
<!--  </MDBBtn>-->










  <!--            <gallery-->
<!--                :isPro = false-->

<!--                :proImages = bookingImages-->
<!--            />-->



</template>

<script>
/* eslint-disable */
// var messageBody = document.querySelector('#bookingPage');

import {
  // MDBContainer,
  // MDBRow,
  // MDBCol,
  MDBBtnClose,
  MDBTable,
  MDBBtn,
  MDBTextarea,
  MDBInput,
  MDBRadio,
  MDBIcon
} from "mdb-vue-ui-kit";
import {ref} from 'vue'
import LiveChat from "@/pages/LiveChat";
import Gallery from '@/pages/Gallery.vue'
import socket from "@/socket";
import  recipientService from '../service/recipients'
//import socket from "@/socket";
export default {
  name: "Booking",
  props: {
    booking: Object,
    provider: Object,
    bookingImages: Array,
    selected_room: String,
    selecteduser: null,
    chatusers: Array,
    messages: Array
  },
  components: {
    LiveChat,
    Gallery,
    MDBTable,
    MDBBtn,
    MDBBtnClose,
    MDBTextarea,
    MDBInput,
    MDBRadio,
    MDBIcon
  },
  data () {
    const place = ref('area_in')
    return {
      isOffer: false,
      priceOffer: null,
      aboutOffer: null,
      isOpenImage: false,
      isImageOpen: false,
      srcImg: "",
      reason: "",
      place,
      isOpenChat: false,
      isQuitClientBooking: false
    }
  },
  mounted () {
    //messageBody.scrollIntoView();
  },
  methods: {
    async initChatPanel (provider, booking) {
      console.log("Booking id - " + booking.id)
      console.log("Booking user name " + booking.user.username);

      const createChatRoom = {
        isActive: true,
        bookingID: this.booking.id,
        same_room_counter: 1,
        isOnline: false,
        room: this.selected_room,
        pro: provider.yritys,
        status: "form",
        bookerUsername: booking.user.username,
        bookerID: booking.user.id,
        providerUsername: provider.user.username,
        providerID: provider.user.id
      }
      const chatCredentials = {
        isActive: true,
        bookingID: this.booking.id,
        same_room_counter: 1,
        room: this.selected_room,
        proID: provider.user.id,
        pro: provider.yritys,
        userID: provider.user.id,
        username: provider.user.username
      }

      this.$emit("initializeChat", createChatRoom, chatCredentials);

    },
    pressOpenChat (provider, booking) {

      console.log("Pro --- " + provider.user.username)
      console.log("Booking " + booking.user.username)
      //this.initChatPanel(provider, booking)
      this.$emit("openChatPanel");

      //this.$emit("set:room", this.selected_room);
      // console.log("Selected room - " + this.selected_room)
      //socket.emit("update room", this.selected_room)
      this.isOpenChat = !this.isOpenChat;

    },
    getBooking (booking) {
      console.log("Booking user " + booking.booking.id)
    },

    selectUser(user) {
      this.$emit("select:user", user)
    },
    noSelected () {
      this.$emit("noSelected");
    },
    onMessage (content, date) {
      this.$emit("on:message", content, date);
    },
    openImagePanel (image) {
      this.isOpenImage = true;
      this.srcImg = require(`/server/uploads/${image.map(im => im.name)}`)
      if (this.srcImg !== '') {
        this.isImageOpen = true;
      }

    },
    closeImagePanel () {
      this.isOpenImage = false;
      this.isImageOpen = false;
    },

    makeOfferBtn (booking) {
      this.isOffer = true
      this.$emit("init_offer", booking);
    },

    async createOffer (booking) {
      const currentBooking = await recipientService.getBookingById(booking.id);
      //console.log("Creating offer id xx " + bookingToDisplay.user.id)
      this.isOffer = false;
      this.$emit("create:offer", this.priceOffer, this.area, this.aboutOffer, currentBooking);


      //await recipientService.createOffer()
    },
    confirmBooking (booking) {
      console.log("Booking header " + booking.header);
      this.$emit('confirm:booking', booking);

    },
    // Close opened booking
    closeBooking () {
      this.$emit("close:booking")
      this.noSelected();
    },
    rejectFormBooking (booking) {
      this.isQuitClientBooking = true;
      console.log("Reject")
      this.$emit("rejectFormBooking", booking);

    },
    confirmRejectBookingNoOffers (booking) {
      this.$emit("reject_booking_no_offers", booking, this.reason);
      this.noSelected();
    }
  }
}
</script>

<style scoped>

img.loading {
  width: 100%;
  height: 400px;
  background: transparent url(https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif) no-repeat scroll center center;
}
.closeData {
  float: right;
}
.closeData:hover {
  color: red;
}
</style>