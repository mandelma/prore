<template>
  <MDBTable borderless style="font-size: 18px; color: #dddddd; text-align: center;">
    <tbody>
    <tr>
      <td>
        {{booking.address}}
        <MDBBtnClose
            class="closeData"
            @click="closeBooking"
        />
      </td>
    </tr>
    <tr>
      <td style="border: solid blue">
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

        <MDBBtn outline="info" @click="pressOpenChat" size="lg">
          {{!isOpenChat ? 'Avaa chat paneeli' : 'Sulje chat paneeli'}}
        </MDBBtn>
        <live-chat
            v-if="isOpenChat"
            :chatusers = chatusers
            :messages =messages
            @select:user = selectUser
            @noSelected = noSelected
            :selecteduser = selecteduser
            @on:message = onMessage
        />

      </td>


    </tr>
    </tbody>
  </MDBTable>
  <MDBBtn
      block
      outline="success"
      size="lg"
      @click="confirmBooking(booking)"
  >
    Varmista tilaus
  </MDBBtn>
  <MDBBtn
      block
      outline="danger"
      size="lg"
      @click="rejectBooking"
  >
    Poista tilaus
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
        v-if="reason.length > 3"
        block size="lg"
        outline="success"
        style="margin-top: 12px;"
        @click="confirmRejectBooking(booking)"
    >
      Varmista
    </MDBBtn>
  </div>




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
  MDBTextarea
} from "mdb-vue-ui-kit";
import LiveChat from "@/pages/LiveChat";
import Gallery from '@/pages/Gallery.vue'
import socket from "@/socket";
//import socket from "@/socket";
export default {
  name: "Booking",
  props: {
    booking: Object,
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
    MDBTextarea
  },
  data () {
    return {
      isOpenImage: false,
      isImageOpen: false,
      srcImg: "",
      reason: "",
      isOpenChat: false,
      isQuitClientBooking: false
    }
  },
  mounted () {
    //messageBody.scrollIntoView();
  },
  methods: {
    pressOpenChat () {
      this.$emit("set:room", this.selected_room);
      socket.emit("update room", this.selected_room)
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
    confirmBooking (booking) {
      console.log("Booking header " + booking.header);
      this.$emit('confirm:booking', booking);

    },
    // Close opened booking
    closeBooking () {
      this.$emit("close:booking")
      this.noSelected();
    },
    rejectBooking () {
      this.isQuitClientBooking = true;

    },
    confirmRejectBooking (booking) {
      this.$emit("reject:booking", booking, this.reason);
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