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


      </td>
    </tr>
    <tr>
      <td>

      </td>
    </tr>
    <tr>
      <td>


        <live-chat
            :chatusers = chatusers
            :messages =messages
            @select:user = selectUser
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

      @click="confirmBooking(booking.id)"
  >
    Kinnita tellimus
  </MDBBtn>
</template>

<script>
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
export default {
  name: "Booking",
  props: {
    booking: Object,
    selecteduser: null,
    chatusers: Array,
    messages: Array
  },
  components: {
    LiveChat,
    MDBTable,
    MDBBtn,
    MDBBtnClose
  },
  data () {
    return {
      isOpenImage: false,
      isImageOpen: false,
      srcImg: "",
    }
  },
  mounted () {
    //messageBody.scrollIntoView();
  },
  methods: {
    selectUser(user) {
      this.$emit("select:user", user)
    },
    onMessage (content, date) {
      this.$emit("on:message", content, date);
    },
    openImagePanel (image) {
      this.isOpenImage = true;
      this.srcImg = require(`@/assets/client/${image.map(im => im.name)}`)
      if (this.srcImg !== '') {
        this.isImageOpen = true;
      }

    },
    closeImagePanel () {
      this.isOpenImage = false;
      this.isImageOpen = false;
    },
    confirmBooking (id) {
      this.$emit('confirm:booking', id)
    },
    // Close opened booking
    closeBooking () {
      this.$emit("close:booking")
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