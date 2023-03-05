<template>
  <div>
    <h2  style="margin-top: 50px; margin-bottom: 50px">Hei, olen TMI ja tarjoan palvelua!</h2>
    <MDBContainer>
      <form>
        <MDBInput
          label="Anna osoitteesi"
          id="osoite"
          size="lg" wrapperClass="mb-4"/>

        <MDBInput
            label="Anna tuntihinta"
            id="hinta"
            size="lg" wrapperClass="mb-4"/>


        <VueDatePicker placeholder="Mistä mihin asti palvelet?" style="margin-bottom: 20px;" v-model="date" range></VueDatePicker>

        <div class="ui form" style="margin-bottom: 20px;">
          <div class="field">
            <select>
              <option value="">Ammatti</option>
              <option value="0">Putkimies</option>
              <option value="1">Sähkömies</option>
              <option value="2">Siivooja</option>

            </select>
          </div>
        </div>


        <MDBCheckbox label="Saatavilla 24/7" v-model="checkbox2" />


      </form>

      <h1>{{result}}</h1>
      <MDBBtn outline="success" size="lg" block @click="this.$router.push('/provided')">Kinnita andmed</MDBBtn>
      <MDBBtn outline="danger" size="lg" block @click="canselSession"> Cansel </MDBBtn>
    </MDBContainer>

  </div>
</template>

<script>
/*global google*/
/* eslint-disable no-new */
//import axios from 'axios'
//import key from '/server/config'
const key = require('../../server/config/keys')
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


import {
  MDBContainer, MDBBtn, MDBInput, MDBCheckbox
}from "mdb-vue-ui-kit";
import axios from "axios";

export default {
  name: "pro-vider",
  data () {
    return {
      result: "",
      date: null
    }
  },
  components: {
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBCheckbox,
    VueDatePicker
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
    canselSession () {
      //this.$router.push({path: '/'})
      this.$emit('cansel:provider', "Test")
    },


    getAddress () {
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=01620+Raikukuja,+Vantaa&key=' + key.googleMap)
          .then(response => {
            if (response.data.error_message) {
              this.error = response.data.error_message;
              console.log(response.data.error_message)
            } else {
              this.address = response.data.results[0].formatted_address
              //console.log(response.data.results[0].formatted_address)
              console.log(response.data.results[0].formatted_address)
              console.log(response.data.results[0].address_components[0].long_name)
              this.result = response.data.results[0].formatted_address
            }

          })
          .catch(error => {
            this.error = error.message
            this.spinner = false;
            console.log(error.message)
          })
    }

  }
}
</script>

<style>
.pac-icon {
  display: none;
}
.pac-item {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
.pac-item:hover {
  background-color: #ececec;
}
.pac-item-query {
  font-size: 16px;
}



</style>