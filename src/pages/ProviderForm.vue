<template>
  <div>
    <h2  style="margin-top: 50px; margin-bottom: 50px">-TMI panel-</h2>
    <MDBContainer>
      <ErrorNotification
        :message = errorFormMessage
      />
      <!--#1f3d40-->
      <form autocomplete="off" style=" padding: 5px;">
        <MDBInput
            label="Anna yrityksen nimi"
            v-model="yritys"
            white
            id="yritys"
            size="lg"
            wrapperClass="mb-4"/>
        <MDBInput
            label="Anna yrityksen y-tunnus"
            v-model="ytunnus"
            white
            id="ytunnus"
            size="lg"
            wrapperClass="mb-4"/>
        <MDBInput
          label="Anna osoitteesi"
          white
          id="osoite"
          size="lg"
          wrapperClass="mb-4"/>

        <p style="text-align: left; color: deepskyblue; font-size: 18px;">jos sädettä ei ole merkitty, se tarkoittaa, että tarjoat palvelua vain määritetyssä osoitteessa</p>

        <MDBInput wrapperClass="mb-4" label="Anna toiminta-alueen säde - km" white v-model="range" size="lg" type="number" />

        <div style=" margin-bottom: 20px;" >
          <Dropdown   v-model="profession" :options="prodata"   filter optionLabel="label" optionGroupLabel="label" showClear optionGroupChildren="items" placeholder="Valitse ammattilainen" class="w-full md:w-100rem">

            <template value="slotProps" >
              <div v-if="slotProps.value" >
                <!--              <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />-->
                <div>{{ slotProps.value.label }}</div>
              </div>
              <span v-else>
              {{ slotProps.placeholder }}
            </span>
            </template>
            <template  #optiongroup="slotProps" >
              <div style="" class="flex align-items-center">
                <!--              <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />-->
                <div>{{ slotProps.option.label }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div style="text-align: left;">
          <MDBRadio
              white
              label="Tuntihinta"
              name="aboutPrice"
              v-model="about_price"
              value="hour"
              wrapperClass="mb-4"
          />
        </div>


        <MDBInput
            v-if="about_price === 'hour'"
            label="Anna tuntihinta"
            v-model="price"
            white
            id="hinta"
            size="lg"
            wrapperClass="mb-4"
        />
        <div style="text-align: left;">
          <MDBRadio
              white
              label="Urakkahinta"
              name="aboutPrice"
              v-model="about_price"
              value="piece"
              wrapperClass="mb-4"
          />
        </div>



        <MDBInput
            white
            label="Anna yrityksen kotisivun osoite jos on"
            size="lg"
            v-model="pro_link"
            wrapperClass="mb-4"
        />
        <div style="margin: 20px 0 20px 0; text-align: left;">
          <MDBCheckbox  label="Saatavilla 24/7"  v-model="isAvailable24_7" />
        </div>

      </form>

      <MDBBtn outline="success" size="lg" block @click="addProvider">Add provider profile</MDBBtn>
      <MDBBtn outline="danger" size="lg" block @click="this.$router.push('/')" style="margin-bottom: 50px;"> Poistu </MDBBtn>
    </MDBContainer>

  </div>
</template>

<script >
/*global google*/
/* eslint-disable no-new */

import { ref } from 'vue';
const key = require('../../server/config/keys')
const gTest = require('../../server/config/keys')
import proData from '@/components/profession/proList'
import Dropdown from 'primevue/dropdown';
import '@/css/style.css';
import '@/css/pro.css'

import errorNotification from '../components/notifications/errorMessage'


import {
  MDBContainer, MDBBtn, MDBInput, MDBCheckbox, MDBRadio
}from "mdb-vue-ui-kit";
import axios from "axios";

import mapService from '../service/map'
import providerService from '../service/providers'
//import availableService from '../service/calendarOffers'

export default {
  name: "provider-form",
  data () {
    return {
      result: "",
      errorFormMessage: null,
      //date: null,
      latitude: 0,
      longitude: 0,
      address: "",
      profession: null,
      userId: "",
      prodata: proData
    }
  },
  setup () {
    const yritys = ref("")
    const ytunnus = ref("")
    const date = ref("")
    const price = ref(null)
    const range = ref(null)
    const about_price = ref("hour")
    const pro_link = ref(null)

    const isAvailable24_7 = ref(false)
    return {
      yritys,
      ytunnus,
      date,
      price,
      range,
      about_price,
      pro_link,
      isAvailable24_7
    }
  },
  components: {
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBCheckbox,
    MDBRadio,
    //VueDatePicker,
    Dropdown,
    errorNotification
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
    // TODO look here if pressed enter in address bar, not working!!
    autocomplete.addListener("place_changed", () => {
      let place = autocomplete.getPlace()
      this.latitude = place.geometry.location.lat()
      this.longitude = place.geometry.location.lng()

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
        profession: this.profession.label,
        //priceByHour: this.price,
        priceByHour: this.about_price === "hour" ? this.price : null,
        range: this.range === null ? 0 : this.range,
        proLink: this.pro_link,
        isAvailable24_7: this.isAvailable24_7,

      }

      const newProvider = await providerService.addProvider(this.userId, provider)
      console.log("Added provider::: " + newProvider)
      if (newProvider) {
        this.$router.push('/provider-panel');
        this.$emit("show-created-provider", newProvider);
      } else {
        this.errorFormMessage = "Tarkista kentat ja yritä uuddelleen!";
        setTimeout(() => {
          this.errorFormMessage = null
        }, 2000);
      }

    },

    testMonth () {
      //console.log("Month: " + this.date[0].getMonth())
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
.error {
  color: white;
  background: #f5839c;
  font-size: 20px;
  border: solid #f75959;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.input {
  padding: 20px;
}
.pro_form_select {
  margin-bottom: 20px;
}


</style>