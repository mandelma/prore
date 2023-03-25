<template>
  <div>
    <h2  style="margin-top: 50px; margin-bottom: 50px">Hei, olen TMI ja tarjoan palvelua!</h2>
    <MDBContainer>
      <form>
        <MDBInput
            label="Anna yrityksen nimi"
            id="yritys"
            size="lg"
            wrapperClass="mb-4"/>
        <MDBInput
            label="Anna yrityksen y-tunnus"
            id="ytunnus"
            size="lg"
            wrapperClass="mb-4"/>
        <MDBInput
          label="Anna osoitteesi"
          id="osoite"
          size="lg"
          wrapperClass="mb-4"/>

        <MDBInput
            label="Anna tuntihinta"
            v-model="price"
            id="hinta"
            size="lg"
            wrapperClass="mb-4"/>


        <VueDatePicker
            size="lg"
            placeholder="Mistä mihin asti palvelet?"
            style="margin-bottom: 20px;"
            v-model="date"
            id="datte"
            range>

        </VueDatePicker>

        <div>Selected: {{ profession }}</div>

        <div class="ui large form">
          <div class="field">
            <select v-model="profession">
              <option disabled value="">Valitse ammatti</option>
              <option>Putkimies</option>
              <option>Sähkömies</option>
              <option>Siivooja</option>
            </select>
          </div>

        </div>




        <MDBCheckbox label="Saatavilla 24/7" v-model="isAvailable24_7" />


      </form>

      <h1>{{result}}</h1>
      <MDBBtn outline="success" size="lg" block @click="addProvider">Testaus</MDBBtn>
      <MDBBtn outline="success" size="lg" block @click="this.$router.push('/provided')">Kinnita andmed</MDBBtn>
      <MDBBtn outline="success" size="lg" block @click="testMonth">Date month</MDBBtn>
      <MDBBtn outline="danger" size="lg" block @click="this.$router.push('/')" style="margin-bottom: 50px;"> Cansel </MDBBtn>
    </MDBContainer>

  </div>
</template>

<script >
/*global google*/
/* eslint-disable no-new */
//import axios from 'axios'
//import key from '/server/config'
import { ref } from 'vue';
const key = require('../../server/config/keys')
const gTest = require('../../server/config/keys')
//const gKey = require('../../server/utils/config')
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


import {
  MDBContainer, MDBBtn, MDBInput, MDBCheckbox
}from "mdb-vue-ui-kit";
import axios from "axios";

import mapService from '../service/map'
import providerService from '../service/providers'

export default {
  name: "provider-form",
  data () {
    return {
      result: "",
      //date: null,
      latitude: 0,
      longitude: 0,
      address: "",
      profession: "",
      userId: ""
    }
  },
  setup () {
    const yritys = ref("")
    const ytunnus = ref("")
    const date = ref("")
    const price = ref(null)
    const isAvailable24_7 = ref(false)
    return {
      yritys,
      ytunnus,
      date,
      price,
      isAvailable24_7
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
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.userId = user.id
      //console.log("User token: " + this.loggedUser.token)
      console.log("User id in Provider: " + user.id)
    }


    console.log("Google key is: " + gTest.google)
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
      this.latitude = place.geometry.location.latitude()
      this.longitude = place.geometry.location.longitude()

      console.log(place)
      console.log("Latitude: " + place.geometry.location.lat())
      console.log("Full address: "+ place.formatted_address)
      this.address = place.formatted_address
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
    },
    async addProvider () {
      const provider = {
        yritys: this.yritys,
        ytunnus: this.ytunnus,
        address: this.address,
        latitude: this.latitude,
        longitude: this.longitude,
        profession: this.profession,
        priceByHour: this.price,
        isAvailable24_7: this.isAvailable24_7,

        monthFrom: this.date[0].getMonth(),
        dayFrom: this.date[0].getDate(),
        hoursFrom: this.date[0].getHours(),
        minutesFrom: this.date[0].getMinutes(),
        monthTo: this.date[1].getMonth(),
        dayTo: this.date[1].getDate(),
        hoursTo: this.date[1].getHours(),
        minutesTo: this.date[1].getMinutes()
      }

      const newProvider = await providerService.addProvider(this.userId, provider)
      console.log("Added provider::: " + newProvider)

    },
    testMonth () {
      console.log("Month: " + this.date[0].getMonth())
    },

    async getTest () {

      const result = await mapService.getLocation()
      console.log("result " + result)
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