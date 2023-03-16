<template>

  <div>
    <h2 style="margin-top: 50px;">hei, haluaisin löytää ammattilaisia!</h2>
    <MDBContainer>
      <form>
        <MDBInput
            label="Anna osoitteesi"
            v-model="address"
            id="osoite"
            size="lg" wrapperClass="mb-4"/>

        <VueDatePicker placeholder="Missä aikavälillä haluat ammattilaista?" style="margin-bottom: 20px;" v-model="date"></VueDatePicker>

        <div>Selected: {{ professional }}</div>

        <div class="ui form">
          <div class="field">
            <select v-model="professional">
              <option disabled value="">Valitse ammattilainen</option>
              <option>Putkimies</option>
              <option>Sähkömies</option>
              <option>Siivooja</option>
            </select>
          </div>
        </div>


      </form>

      <h1>{{result}}</h1>
      <MDBBtn outline="success" size="lg" block @click="this.$router.push('/received')">Kinnita andmed</MDBBtn>
      <MDBBtn outline="success" size="lg" block @click="addRecipient">Add</MDBBtn>
      <MDBBtn outline="danger" size="lg" block @click="this.$router.push('/')" style="margin-bottom: 50px;"> Cansel </MDBBtn>

    </MDBContainer>

  </div>

</template>

<script>
/*global google*/
import VueDatePicker from '@vuepic/vue-datepicker';
import {
  MDBBtn,
  MDBContainer,
  MDBInput
} from "mdb-vue-ui-kit";
import recipientService from '../service/recipients'
export default {
  name: "recipient-form",
  components: {
    MDBBtn,
    MDBContainer,
    MDBInput,
    VueDatePicker
  },
  data () {
    return {
      recipientId: null,
      address: null,
      lat: 0,
      lng: 0,
      professional: "",
      date: null
    }
  },
  mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.recipientId = user.id
      //console.log("User token: " + this.loggedUser.token)
      console.log("User id in recipient: " + user.id)
    }

    const center = { lat: 50.064192, lng: -130.605469 };
    // Create a bounding box with sides ~10km away from the center point
    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1,
    };
    const input = document.getElementById("osoite");
    const options = {
      bounds: defaultBounds,
      componentRestrictions: { country: "fi" },
      fields: ["address_components", "geometry", "icon", "name", "formatted_address"],
      strictBounds: false,
      //types: ["establishment"],
    };
    const autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener("place_changed", () => {
      let place = autocomplete.getPlace()
      this.lat = place.geometry.location.lng()
      this.lng = place.geometry.location.lng()

      this.address = place.formatted_address
      console.log(place)
    })
  },
  methods: {
    backToDashboard () {

    },
    async addRecipient () {
      const recipient = {
        address: this.address,
        latitude: this.lat,
        longitude: this.lng,
        professional: this.professional,
        month: this.date.getMonth(),
        day: this.date.getDate(),
        hours: this.date.getHours(),
        minutes: this.date.getMinutes()
      }

      await recipientService.addRecipient(this.recipientId, recipient)
    }
  }
}
</script>

<style scoped>

</style>