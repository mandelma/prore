<template>
  <MDBTable borderless style="font-size: 18px; text-align: center;">
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

      <td v-if="booking.image.length > 0">
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

        <MDBBtn outline="info" @click="isOpenChat = !isOpenChat" size="lg">
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
      @click="rejectBooking(booking)"
  >
    Poista tilaus
  </MDBBtn>

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
  MDBBtn
} from "mdb-vue-ui-kit";
import LiveChat from "@/pages/LiveChat";
import Gallery from '@/pages/Gallery.vue'
//import socket from "@/socket";
export default {
  name: "Booking",
  props: {
    booking: Object,
    bookingImages: Array,
    selecteduser: null,
    chatusers: Array,
    messages: Array
  },
  components: {
    LiveChat,
    Gallery,
    MDBTable,
    MDBBtn,
    MDBBtnClose
  },
  data () {
    return {
      isOpenImage: false,
      isImageOpen: false,
      srcImg: "",
      isOpenChat: false
    }
  },
  mounted () {
    //messageBody.scrollIntoView();
  },
  methods: {
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
    rejectBooking (booking) {
      this.$emit("reject:booking", booking);
      this.noSelected();
    },
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