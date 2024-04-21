<template>
  <div v-if="status === 'for-recipient'">
    <div class = "waiting-info">
      ( <b>{{msg.ordered[0].yritys}}</b> )  -
      {{msg.header}} -
      <monthConverter :num=" msg.onTime[0].month" />, {{msg.onTime[0].day}}, {{msg.onTime[0].year}}
      kello
      {{msg.onTime[0].hours}} : {{msg.onTime[0].minutes}}
      <MDBBtn block outline="warning" @click="removeComplitedBookingPanel(msg)">
        (Kustub muidu kui aeg läbi saab) - Saab eemaldada kohe (ajutine lahendus)
      </MDBBtn>

    </div>

  </div>

  <div v-else>
    <div  class="info">
<!--      <MDBBtnClose-->
<!--          white-->
<!--          class="closeConfirmedBooking"-->
<!--          @click="removeCompletedBookingPro(msg)"-->
<!--      />-->
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
  //MDBBtnClose,
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
    //MDBBtnClose,
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
  width: 100%;
  color: #f5f532;
  background: #141414;
  font-size: 20px;
  border: 1px solid #acbbbc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;

}
.waiting-info {
  width: 100%;
  color: #f5f532;
  /*background: #f5f532;*/
  font-size: 20px;
  border: 1px solid #acbbbc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.waiting-info b {
  color: #7070e0;
}
.closeConfirmedBooking {
  float: right;
}
</style>