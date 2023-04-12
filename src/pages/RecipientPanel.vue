<template>
  <div>
    <div v-if="isAvailable">
      <RecipientSuccess
        :providers = providers
      />
    </div>
    <div v-else>
      <h1 style="margin-top: 50px; margin-bottom: 50px">Asiakkaan hallintapaneeli...</h1>
      <MDBTable borderless style="font-size: 16px; text-align: left;">
        <tbody>
        <tr v-for="(provider) in providers" :key="provider.id">

          <td>{{provider.yritys}} <MDBBadge badge="success"
                                            class="translate-middle p-2 border border-light rounded-circle"
                                            dot></MDBBadge></td>
          <td scope="col">
            <MDBBtn outline="success" block size="lg" @click="handleProviderGet(provider.id)">Tiedot</MDBBtn>
          </td>


        </tr>
        <tr>
          <td>
            TMI Putkipojat <MDBBadge badge="warning"
                                     class="translate-middle p-2 border border-light rounded-circle"
                                     dot></MDBBadge>
          </td>
          <td>
            <MDBBtn outline="success" block size="lg">Tiedot</MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            TMI laattuPutket <MDBBadge badge="warning"
                                       class="translate-middle p-2 border border-light rounded-circle"
                                       dot></MDBBadge>
          </td>
          <td>
            <MDBBtn outline="success" block size="lg">Tiedot</MDBBtn>
          </td>

        </tr>
        <tr>
          <td>
            TMI Matti putki <MDBBadge badge="warning"
                                      class="translate-middle p-2 border border-light rounded-circle"
                                      dot></MDBBadge>
          </td>
          <td>
            <MDBBtn outline="success" block size="lg">Tiedot</MDBBtn>
          </td>
        </tr>

        </tbody>
      </MDBTable>
    </div>


  </div>
</template>

<script>
import {
  MDBTable, MDBBtn, MDBBadge
}from "mdb-vue-ui-kit";
import {ref} from "vue";
import RecipientSuccess from '../components/RecipientSuccess'
import providerService from '../service/providers'
export default {
  name: "recipient-panel",
  data () {
    return {
      providers: []
    }
  },
  setup () {
    const isAvailable = ref(false)
    return {
      isAvailable
    }
  },
  components: {
    RecipientSuccess,
    MDBTable,
    MDBBtn,
    MDBBadge
  },
  async mounted () {
    const providers = await providerService.getProviders()
    console.log("Providers: " + providers.map(p => p.user.username))

    this.providers = providers
  },
  methods: {
    handleProviderGet (id) {
      this.isAvailable = true
      console.log("Provider id is: " + id)
    }
  }
}
</script>

<style scoped>

</style>