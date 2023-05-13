<template>
  <MDBContainer v-if="isProviderSelected">
    <recipientFinal
      @cansel:final = handleCanselFinal
      @provider:ordered = orderSuccess
      :provider = selectedProvider
      :available = availability
    />
  </MDBContainer>
  <MDBContainer v-else>
    <h3>Päivämäärä: {{booking[0].date}}</h3>

    <h2>Tarvin tässä osaaja - {{line}}</h2>

    <successMessage
      :message = orderMessage
    />

    <MDBRow>
      <MDBCol>
        <MDBTable border="primary" style="font-size: 18px; text-align: left;">
          <tbody>
          <tr>
            <td>
              {{booking[0].description}}

            </td>
          </tr>
          <tr>
            <td>
              <MDBBtn outline="info" block size="lg">Muokkaa tehtävän kuvausta</MDBBtn>
            </td>
          </tr>
          <tr v-for="booking in booking" :key="booking.id">
            <td v-for="image in booking.image" :key="image._id">
              <img
                  :src="require(`@/assets/client/${booking.image.map(im => im.name)}`)"
                  style="width: 100%;"
                  alt="kuva"
              />
            </td>
          </tr>
          <tr>
            <td v-if="booking[0].image">
              <MDBBtn outline="info" block size="lg">Muokkaa kuva tehtävästä</MDBBtn>
            </td>
          </tr>
          </tbody>
        </MDBTable>


      </MDBCol>
      <MDBCol>
        <div v-if="providers.length > 0">
          <MDBTable border="primary" style="font-size: 18px; text-align: center;">
            <tbody>
            <tr v-for="provider in providers" :key="provider.id">
              <td v-if="provider.timeoffer.map(to =>
                datetime.providerMatchingForClient(
                    bookingTime,
                    {y: to.yearFrom, m: to.monthFrom, d: to.dayFrom, hour: to.hoursFrom, min: to.minutesFrom},
                    {y: to.yearTo, m: to.monthTo, d: to.dayTo, hour: to.hoursTo, min: to.minutesTo}
                )
              ).includes(true)">
                <MDBBtn style="width: 200px; background-color: grey; border: solid #4c4949;color: #f0eeee;" outline="info" size="lg" @click="getProviderInfo(provider,'green')">{{provider.yritys}}</MDBBtn>
                <MDBBadge
                    badge="success"
                          class="translate-middle p-3 border border-light rounded-circle"
                          dot></MDBBadge>
              </td>
              <td v-else>

                <MDBBtn style="width: 200px; padding: 20px; background-color: #999797; border: solid #5f5d5d;color: #f0eeee; font-size: 150%;" size="lg" @click="getProviderInfo(provider, 'orange')">{{provider.yritys}}</MDBBtn>
                <MDBBadge
                    style="position: absolute; "
                    badge="warning"
                    class="translate-middle p-3 border border-light rounded-circle"
                    dot></MDBBadge>
              </td>

            </tr>
            <tr>
            </tr>
            </tbody>
          </MDBTable>

        </div>
        <div v-else>
          <h2>Yrityksiä hetkellä ei löytyy</h2>
        </div>



      </MDBCol>
      <MDBBtn block outline="danger" size="lg" @click="canselResult">Takaisin</MDBBtn>
    </MDBRow>

  </MDBContainer>


</template>

<script>
import {
  MDBBtn, MDBContainer, MDBTable, MDBRow,
  MDBCol,
  //MDBIcon,
  MDBBadge
}from "mdb-vue-ui-kit";
import dt from '../components/controllers/datetime'
import recipientFinal from '../pages/RecipientPanelFinal'
import successMessage from '../components/notifications/successMessage'
import providerServise from '../service/providers'

export default {
  name: "recipient-panel-result",
  props: {
    booking: null,
    bookingTime: null,
    providers: null,
    line: String
  },
  data () {
    return {
      datetime: dt,
      selectedProvider: null,
      isProviderSelected: false,
      availability: "",
      orderMessage: null
    }
  },
  components: {
    successMessage,
    recipientFinal,
    MDBBtn,
    MDBContainer,
    MDBTable,
    MDBRow,
    MDBCol,
    //MDBIcon,
    MDBBadge
  },
  methods: {
    async orderSuccess (provId) {
      //console.log("Ordered!!!")

      this.isProviderSelected = false;

      this.orderMessage = "Tilaus on lähetetty vahvistettavaksi! Kiitos!";
      console.log("Provider if " + provId)
      console.log("Recpient id: " + this.booking[0].id);
      const booking = await providerServise.updateProvider(provId, {booking: [this.booking.id]})
      console.log("Booking made - id: " + booking.id);

      setTimeout(() => {
        this.orderMessage = null;
      }, 3000)
    },
    getProviderInfo (provider, marker) {
      this.selectedProvider = provider;
      this.availability = marker;
      this.isProviderSelected = true;


      // this.$router.push({
      //   name: 'recipient-final',
      //   params: {
      //     data: provider.yritys,
      //   }
      // })
      //this.$router.push("received-final");
      //console.log("Provider id " + provider.id)
    },
    handleCanselFinal (result) {
      this.isProviderSelected = result;
    },
    canselResult () {
      this.$emit('cansel:result', false)
    }
  }
}
</script>


<style scoped>
.success {
  color: white;
  background: #7bc47b;
  font-size: 20px;
  border: solid #0e920e;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

</style>