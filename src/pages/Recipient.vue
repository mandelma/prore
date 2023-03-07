<template>

  <div>
    <h2 style="margin-top: 50px;">hei, haluaisin löytää ammattilaisia!</h2>
    <MDBContainer>
      <form>
        <MDBInput
            label="Anna osoitteesi"
            id="osoite"
            size="lg" wrapperClass="mb-4"/>

        <VueDatePicker placeholder="Missä aikavälillä haluat ammattilaista?" style="margin-bottom: 20px;" v-model="date" range></VueDatePicker>

        <div class="ui form" style="margin-bottom: 20px;">
          <div class="field">
            <select>
              <option value="">Etsin ammattilaista</option>
              <option value="0">Putkimies</option>
              <option value="1">Sähkömies</option>
              <option value="2">Siivooja</option>

            </select>
          </div>
        </div>


      </form>

      <h1>{{result}}</h1>
      <MDBBtn outline="success" size="lg" block @click="this.$router.push('/received')">Kinnita andmed</MDBBtn>
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
export default {
  name: "re-cipient",
  components: {
    MDBBtn,
    MDBContainer,
    MDBInput,
    VueDatePicker
  },
  data () {
    return {
      date: null
    }
  },
  mounted () {
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
      fields: ["address_components", "geometry", "icon", "name"],
      strictBounds: false,
      //types: ["establishment"],
    };
    const autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener("place_changed", () => {
      let place = autocomplete.getPlace()
      this.lat = place.geometry.location.lng()
      this.lng = place.geometry.location.lng()

      console.log(place)
      console.log("Latitude: " + place.geometry.location.lng())
    })
  },
  methods: {
    backToDashboard () {

    }
  }
}
</script>

<style scoped>

</style>