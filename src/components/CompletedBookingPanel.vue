<template>
  <div v-if="status === 'for-recipient'">
    <div class = "waiting-info">
      ( <b>{{msg.ordered[0].yritys}}</b> )  -
      {{msg.header}}<br>
      <monthConverter :num=" msg.onTime[0].month" /> {{msg.onTime[0].day}} / {{msg.onTime[0].year}}<br>
      klo {{msg.onTime[0].hours}} : {{msg.onTime[0].minutes}}<br>
      <p v-if="msg.ordered[0].range === 0">{{msg.ordered[0].yritys}} odottaa sinua osoitteseen: {{msg.ordered[0].address}}</p>
      <p v-else>{{msg.ordered[0].yritys}} tulossa sovittuun osoitteeseen!</p>
      <MDBBtn block outline="warning" @click="removeComplitedBookingPanel(msg)">
        (Kustub muidu kui aeg läbi saab) - Saab eemaldada kohe (ajutine lahendus)
      </MDBBtn>

    </div>

  </div>

  <div v-else>
    <div class="pro-info">
<!--      <MDBBtnClose-->
<!--          white-->
<!--          class="closeConfirmedBooking"-->
<!--          @click="removeCompletedBookingPro(msg)"-->
<!--      />-->
<!--      <div  >-->

      <div style="float: right;">
        <monthConverter :num=" msg.onTime[0].month" /> {{msg.onTime[0].day}} / {{msg.onTime[0].year}}<br>
        klo
        {{msg.onTime[0].hours >= 10 ? msg.onTime[0].hours : "0" + msg.onTime[0].hours }} :
        {{(msg.onTime[0].minutes) >= 10 ? msg.onTime[0].minutes : "0" + msg.onTime[0].minutes}}
      </div>

        <MDBTable v-if="status === 'for-provider'" borderless style="font-size: 18px; color: #ddd; text-align: left; padding: 10px; width: 100%;">
          <tbody>
          <tr>
            <td>
              Sovittu:
            </td>
            <td>
              {{msg.header}}
            </td>
          </tr>
          <tr>
            <td>
              Paikka:
            </td>
            <td v-if="provider.range === 0">
              {{provider.address}}
            </td>
            <td v-else>
              {{msg.address}}
            </td>
          </tr>
          <tr>
            <td colspan="2" v-if="provider.range === 0">

              <p  style="color: deepskyblue;">
                Asiakas tulossa!
              </p>

            </td>
            <td colspan="2" v-else>

              <p  style="color: deepskyblue;">
                Meno asiakkaan luonna!
              </p>
            </td>
          </tr>
          </tbody>
        </MDBTable>


      <!--      </div>-->
<!--      <div v-else-if="status === 'recipient'">-->
<!--        <b>{{msg.provider}}</b> - -->
<!--        {{msg.header}}-->
<!--        <monthConverter :num=" msg.onTime[0].month" />, {{msg.onTime[0].day}}, {{msg.onTime[0].year}}-->
<!--        kello-->
<!--        {{msg.onTime[0].hours}} : {{msg.onTime[0].minutes}}-->
<!--      </div>-->
  </div>








  </div>
</template>

<script>
import {
  //MDBBtnClose,
  MDBBtn,
  MDBTable
} from 'mdb-vue-ui-kit'
import monthConverter from './controllers/month-converter'
export default {
  name: "Info",
  props: {
    status: String,
    msg: Object,
    provider: Object
  },
  components: {
    //MDBBtnClose,
    MDBBtn,
    MDBTable,
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
.pro-info {
  width: 100%;
  color: #f5f532;
  background: #141414;
  font-size: 20px;
  border: 1px solid #f0f022;
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
  color: #db8932;
}
.waiting-info p {
  color: deepskyblue;
}
.closeConfirmedBooking {
  float: right;
}
</style>