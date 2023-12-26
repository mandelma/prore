<template>
  <div>



    <MDBContainer

        style="position: relative; z-index: 1;

        opacity: 0.8;
        padding-top: 150px;"
    >

      <div id="test" style="background-color:white;">
        <MDBInput
            label="Anna osoitteesi"
            v-model="address"
            id="autocomplite"
            size="lg"
            wrapperClass="mb-4"/>
      </div>


      <div class="ui large segment form">

        <div class="field">
          <select id="listOfProfessions" v-model="prof" >
            <option disabled value="">Valitse ammattilainen</option>
            <option value="Putkimies">Putkimies</option>
            <option value="Sähkömies">Sähkömies</option>
            <option value="Siivooja">Siivooja</option>
          </select>
        </div>

        <div :class="{hideDistSelectPanel: !isDistSelection}">
          <select id="distance" v-model="distBtw" @click="filterByDistance">
            <option disabled value="1">1 kilometriä ympärilläsi</option>
            <option value="10">10 kilometriä ympärilläsi</option>
            <option value="20">20 kilometriä ympärilläsi</option>
            <option value="30">30 kilometriä ympärilläsi</option>
            <option value="40">40 kilometriä ympärilläsi</option>
            <option value="50">50 kilometriä ympärilläsi</option>
            <option value="60">60 kilometriä ympärilläsi</option>
            <option value="70">70 kilometriä ympärilläsi</option>
            <option value="80">80 kilometriä ympärilläsi</option>
            <option value="90">90 kilometriä ympärilläsi</option>
            <option value="100">100 kilometriä ympärilläsi</option>
          </select>
        </div>

        {{ isSelection }}


        <h3
            :class="{activeClients: !isActiveProffs}"
        >
          {{ countOfSelectedProfessional + " " + professional }} tarjoaa palvelua
        </h3>
        <h3
            v-if="prof"
            :class="{noClients: isActiveProffs}"
        >
          Ei ammattilaisia vielä!
        </h3>

      </div>



      <MDBBtn color="dark"
              size="lg"
              block
              @click="receive"
              style="position: relative; z-index:1; opacity: 1.2;"
      >
        Tee uusi tilaus
      </MDBBtn>


      <MDBBtn color="danger"
              size="lg"
              block
              @click="$router.push('/received')"
              style="position: relative; z-index:1; opacity: 1.0;"
      >
        Poistu
      </MDBBtn>


    </MDBContainer>
    <h3 style="margin-top: 50px;">Kartta ladataan...</h3>
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <section id="map"></section>
  </div>

</template>

<script>
/* eslint-disable */
/*global google*/
import axios from 'axios'
import recipientService from '../service/recipients'
import providerService from '../service/providers'
import {
  MDBContainer,
  MDBInput,
  MDBBtn
} from "mdb-vue-ui-kit";
import distance from '../components/controllers/distance'
import gMap from '../components/location'
export default {
  name: "recipient-public",
  props: {
    userIsProvider: Object,
    isProviderLoggedIn: Boolean
  },
  components: {
    MDBContainer,
    MDBInput,
    MDBBtn
  },
  data () {
    return {
      prof: "",
      userId: null,
      providerId: null,
      address: null,
      myLat: null,
      mylng: null,
      countOfSelectedProfessional: 0,
      isActiveProffs: false,
      isDistSelection: false,
      professional: "",
      currentProfession: "",
      distBtw: 1

    }
  },
  mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.userId = user.id
      //console.log("User token: " + this.loggedUser.token)
    }

    //console.log("Is provider in " + this.isProviderLoggedIn)

    //console.log("User id in providers " + this.userId)



    //this.setProviderId()

    const myMarker = new google.maps.Marker({
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    })

    this.userCurrentLocation();

    const selectProfession = document.getElementById("listOfProfessions")

    selectProfession.addEventListener("change", (event) => {
      //alert("Profession selected: " + event.target.value)
      this.isDistSelection = true;
      this.currentProfession = event.target.value;
      this.showClientLocationOnTheMap(event.target.value, this.distBtw);
    })

    const selectDistance = document.getElementById("distance");

    selectDistance.addEventListener("change", (event) => {
      this.distBtw = parseFloat(event.target.value);
      //alert("Profession selected: " + event.target.value)

      this.showClientLocationOnTheMap(this.currentProfession, this.distBtw);
      //this.showClient
    })



    const input = document.getElementById("autocomplite");

    const center = { lat: 50.064192, lng: -130.605469 };
    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1,
    };
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
      this.myLat = place.geometry.location.lat();
      this.myLng = place.geometry.location.lng();

      this.getAddressFrom(place.geometry.location.lat(), place.geometry.location.lng())
      this.address = place.formatted_address
      console.log(place)
    });

  },
  methods: {
    receive (){
      this.$router.push('/rf')

    },
    userCurrentLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          // Show a map centered at latitude / longitude.
          this.myLat = latitude
          this.myLng = longitude

          this.showUserLocationOnTheMap (latitude, longitude)
        });
      }

    },

    pinSymbol(color) {
      return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 2,
        scale: 1
      };
    },

    showUserLocationOnTheMap (latitude, longitude) {
      let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: new google.maps.LatLng(latitude, longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        accuracy: 50,

      });

    },

    getAddressFrom (lat, long) {
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat +
          "," + long
          + "&key=" + 'AIzaSyAQPLmTMlmSTp4spxPwvaJLnzYnkLmZ9zc')
          .then(response => {
            if (response.data.error_message) {
              this.error = response.data.error_message;

              console.log(response.data.error_message)
            } else {
              const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 13,
                center: new google.maps.LatLng(lat, long),
                mapTypeId: google.maps.MapTypeId.ROADMAP
              });

              // AIzaSyBDA2EBoGezJx51wQtxoW3Ecq5Ql8CCAiE

               /*new google.maps.Marker({
                 position: new google.maps.LatLng(lat, long),
                 accuracy: 50,
                 map: map,
                 icon: this.pinSymbol('yellow'),
                 label: { color: '#00aaff', fontWeight: 'bold', fontSize: '14px', text: 'Olen tällä' }
               })*/

              //this.address = response.data.results[0].formatted_address
              console.log(response.data.results.results[0].formatted_address)
            }

          })
          .catch(error => {
            this.error = error.message
            console.log(error.message)
          })
    },

    distanceBtw (originLat, originLng, destLat, destLng) {
      var origin = new google.maps.LatLng(originLat, originLng);
      var destination = new google.maps.LatLng(destLat, destLng);
      return (google.maps.geometry.spherical.computeDistanceBetween(origin, destination) / 1000).toFixed(2);
    },


    otherUserLocations (recipients, profession, dist) {
      let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: new google.maps.LatLng(this.myLat, this.myLng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      console.log("Users count: " + recipients.length)
      console.log("Current distance " + dist)

       /*new google.maps.Marker({
         position: new google.maps.LatLng(this.myLat, this.myLng),
         accuracy: 50,
         map: map,
         icon: this.pinSymbol('yellow'),
         label: { color: '#00aaff', fontWeight: 'bold', fontSize: '14px', text: 'Olen tällä' }
       })
*/
      let count = 0;
      if (recipients.length > 0) {
        for (let pos = 0; pos < recipients.length; pos++) {

          //console.log("Client latitude: " + recipient[pos].latitude)
          //console.log("Client longitude: " + recipient[pos].longitude)
          let myLatLong = [this.myLat, this.myLng];
          recipients[pos].profession.forEach(prof => {
            if (prof === profession) {
              console.log("Pro " + prof.yritys)
              let providerLatLng = [recipients[pos].latitude, recipients[pos].longitude];
              console.log("Distance btw " + this.distanceBtw(this.myLat, this.myLng, recipients[pos].latitude, recipients[pos].longitude));

              //distance.theDist()

              //this.countOfSelectedClient++;
              this.isActiveProffs = true;

              if (this.distanceBtw(this.myLat, this.myLng, recipients[pos].latitude, recipients[pos].longitude) <= dist) {
                count ++;
                new google.maps.Marker({
                  position: new google.maps.LatLng(recipients[pos].latitude, recipients[pos].longitude),
                  map: map
                })
              }

            }
          })

        }
        if (count > 0) {
          this.isActiveProffs = true;
        } else {
          this.isActiveProffs = false;
        }
        this.countOfSelectedProfessional = count;
        console.log("countxx " + count)
        this.identifyProfText();
        //console.log("Count " + this.countOfSelectedClients)

      }

    },

    renderClients (event) {
      console.log("Event value " + event.target.value)
      //this.countOfSelectedClients = 0;

      if (event.target.value) {
        // @click="renderClients($event)"
        this.showClientLocationOnTheMap(event.target.value)

      }
      this.prof = event.target.value

      event.target.value = ""

    },


    async showClientLocationOnTheMap (profession, dist) {

      console.log("Current distance herexx  " + dist)
      const providers = await providerService.getProviders()
      if (providers !== null) {
        this.otherUserLocations(providers, profession, dist);
      }
      // visibility: hidden;

    },
    identifyProfText () {
      if (this.countOfSelectedProfessional > 1) {
        this.professional = "ammattilaista"
      } else {
        this.professional = "ammattilainen"
      }
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
}
.spinner-border {
  margin-top: 100px;
}

#map {
   position: absolute;
   top: 120px;
   right: 0;
   bottom: 0;
   left: 0;
 }

@media only screen and (max-width: 1000px) {
  #test {
    display: none !important;

  }
}

.activeClients {
  display: none !important;
}
.noClients {
  display: none !important;
}
.hideDistSelectPanel {
  display: none !important;
}

</style>