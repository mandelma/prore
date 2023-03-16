<template>
  <div>

    <section
        style="position: relative; z-index:1;
        background-color: white;
        opacity: 0.8;
        margin-top: 60px;"
    >
      <div>10 people around you need: {{ prof }}</div>

      <div class="ui form">
        <div class="field">
          <select v-model="prof">
            <option disabled value="">Valitse ammattisi</option>
            <option>Putkimies</option>
            <option>Sähkömies</option>
            <option>Siivooja</option>
          </select>
        </div>
      </div>

      <div class="ui form">
        <div class="field">
          <select v-model="dist">
            <option disabled value="">Valitse etäisyys</option>
            <option>20 km</option>
            <option>30 km</option>
            <option>40 km</option>
          </select>
        </div>
      </div>





    </section>

    <MDBBtn color="info" size="lg" block style="position: relative; z-index:1; opacity: 0.8;">Tarjoa omaa palvelua</MDBBtn>
    <MDBBtn color="danger" size="lg" block style="position: relative; z-index:1; opacity: 0.8;">Poistu</MDBBtn>



    <section id="map"></section>
  </div>
</template>

<script>
/* eslint-disable */
/*global google*/
import axios from 'axios'
import {
  MDBContainer,
  MDBInput,
    MDBBtn
} from "mdb-vue-ui-kit";
//import key from '@/config/keys'
const key = require('../../server/config/keys')
export default {
  name: "provider-public",
  components: {
    MDBContainer,
    MDBInput,
    MDBBtn
  },
  data () {
    return {
      prof: "",
      dist: "",
      address: "",
      error: "",
      spinner: false,
      lat: "",
      lng: ""
    }
  },
  mounted () {
    // &callback=Function.prototype
    //document.getElementById("autocomplete")

    this.currentLocation ();

    const center = { lat: 50.064192, lng: -130.605469 };
// Create a bounding box with sides ~10km away from the center point
    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1,
    };
    //const input = document.getElementById("autocomplete");
    const options = {
      bounds: defaultBounds,
      componentRestrictions: { country: "fi" },
      fields: ["address_components", "geometry", "icon", "name"],
      strictBounds: false,
      //types: ["establishment"],
    };
    // const autocomplete = new google.maps.places.Autocomplete(input, options);
    //
    // autocomplete.addListener("place_changed", () => {
    //   let place = autocomplete.getPlace()
    //   this.lat = place.geometry.location.lat()
    //   this.lng = place.geometry.location.lng()
    //
    //   console.log(place)
      //this.showUserLocationOnTheMap(place.geometry.location.lat(), place.geometry.location.lng())
    //})


    // let autocomplete =  new google.maps.places.Autocomplete (
    //   document.getElementById("autocomplete"),
    //   {
    //     bounds: new google.maps.LatLngBounds(
    //         new google.maps.LatLng(61.92411, 25.748151)
    //     )})
    // autocomplete.addListener("place_changed", () => {
    //   let place = autocomplete.getPlace();
    //   console.log(place)
    //   this.showUserLocationOnTheMap(place.geometry.location.lat(), place.geometry.location.lng())
    // })
  },
  methods: {
    test () {
      console.log("Key is: " + key.googleMap)
    },
    currentLocation () {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
              this.getAddressFrom(position.coords.latitude, position.coords.longitude)
              console.log("pos latitude: " + position.coords.latitude)
              console.log("Pos longitude: " + position.coords.longitude)
              this.showUserLocationOnTheMap (
                  position.coords.latitude,
                  position.coords.longitude
              );
            },


            error => {
              this.error = "Locator is unable to find your address. Please type your address!"
              console.log("Error" + error)
              //console.log("Error: " + error.message)
            }
        )
      } else {
        //this.error = error.message
        console.log("Your Browser does not support geolocation API")
      }
    },

    getAddressFrom (lat, long) {
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat +
          "," + long
          + "&key=" + key.googleMap)
          .then(response => {
            if (response.data.error_message) {
              this.error = response.data.error_message;
              this.spinner = false;
              console.log(response.data.error_message)
            } else {
              this.address = response.data.results.formatted_address
              console.log(response.data.results.results.formatted_address)
            }

          })
          .catch(error => {
            this.error = error.message
            this.spinner = false;
            console.log(error.message)
          })
    },
    showUserLocationOnTheMap (latitude, longitude) {
      let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: new google.maps.LatLng(latitude, longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map
      })
    },
    testPlace () {
      console.log("Lat: " + this.lat)
      console.log("Lng: " + this.lng)
    }
  }
}
</script>

<style>
.ui.button,
.dot.circle {
  background-color: #ff5a5f;
  color: white;
}

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
}#map {
   position: absolute;
   top: 50px;
   right: 0;
   bottom: 0;
   left: 0;
   background: red;
 }

</style>