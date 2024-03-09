<template>
  <div v-if="status === 'for-recipient'">
    <div class = "waiting-info">
      ( <b>{{msg.ordered[0].yritys}}</b> )  -
      {{msg.header}} -
      <monthConverter :num=" msg.onTime[0].month" />, {{msg.onTime[0].day}}, {{msg.onTime[0].year}}
      kello
      {{msg.onTime[0].hours}} : {{msg.onTime[0].minutes}}
      <MDBBtn block outline="dark" @click="removeComplitedBookingPanel(msg)">
        (Kustub muidu kui aeg läbi saab) - Eemalda teade kohe
      </MDBBtn>

    </div>

  </div>

  <div v-else>
    <div  class="info">
      <MDBBtnClose
          class="closeConfirmedBooking"
          @click="removeCompletedBookingPro(msg)"
      />
      <div v-if="status === 'for-provider'">
        <h2><b>{{msg.header}}</b></h2> {{msg.address}}
        <monthConverter :num=" msg.onTime[0].month" />, {{msg.onTime[0].day}}, {{msg.onTime[0].year}}
        kello
        {{msg.onTime[0].hours}} : {{msg.onTime[0].minutes}}
      </div>
      <div v-else-if="status === 'recipient'">
        <b>{{msg.provider}}</b> -
        {{msg.header}}
        <monthConverter :num=" msg.onTime[0].month" />, {{msg.onTime[0].day}}, {{msg.onTime[0].year}}
        kello
        {{msg.onTime[0].hours}} : {{msg.onTime[0].minutes}}
      </div>
  </div>








  </div>
</template>

<script>
import {
  MDBBtnClose,
  MDBBtn
} from 'mdb-vue-ui-kit'
import monthConverter from './controllers/month-converter'
export default {
  name: "Info",
  props: {
    status: String,
    msg: Object,
  },
  components: {
    MDBBtnClose,
    MDBBtn,
    monthConverter
  },
  methods: {
    removeCompletedBookingPro (booking) {
      this.$emit('remove:proConfirmed', booking);
    },
    removeComplitedBookingPanel (booking) {
      this.$emit('remove:complitedBookingPanel', booking)
    }
  }
}
</script>

<style scoped>
.info {
  color: white;
  background: lightblue;
  font-size: 20px;
  border: solid #acbbbc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;

}
.waiting-info {
  width: 100%;
  color: grey;
  background: #f5f532;
  font-size: 20px;
  border: solid #acbbbc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.waiting-info b {
  color: blue;
}
.closeConfirmedBooking {
  float: right;
}
</style>