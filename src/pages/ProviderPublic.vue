<template>
  <div>
    <MDBContainer
        style="position: relative; z-index: 1;
        opacity: 0.8;
        margin-top: 60px;"
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
          <select v-model="prof" @click="renderClients($event)">
            <option disabled value="">Valitse ammattisi</option>
            <option value="Putkimies">Putkimies</option>
            <option value="Sähkömies">Sähkömies</option>
            <option value="Siivooja">Siivooja</option>
          </select>
        </div>
        <h3
            :class="{activeClients: !isActiveClients}"
        >
          {{countOfSelectedClients + " " + client}}  tarvitsee palveluasi
        </h3>
        <h3
            v-if="prof"
            :class="{noClients: isActiveClients}"
        >
          Ei asiakkaita vielä!
        </h3>

      </div>



      <MDBBtn color="dark"
              size="lg"
              block
              @click="$router.push('/provider-form')"
              style="position: relative; z-index:1; opacity: 1.2;"
      >
        Tarjoa omaa palvelua
      </MDBBtn>


      <MDBBtn color="danger"
              size="lg"
              block
              @click="$router.push('/')"
              style="position: relative; z-index:1; opacity: 1.0;"
      >
        Poistu
      </MDBBtn>

    </MDBContainer>

    <section id="map"></section>
  </div>
</template>

<script>
/* eslint-disable */
/*global google*/
import axios from 'axios'
import recipientService from '../service/recipients'
import {
  MDBContainer,
  MDBInput,
  MDBBtn
} from "mdb-vue-ui-kit";
import gMap from '../components/location'
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
      address: null,
      myLat: null,
      mylng: null,
      countOfSelectedClients: 0,
      isActiveClients: false,
      client: ""

    }
  },
  mounted () {

    const myMarker = new google.maps.Marker({
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    })

    this.userCurrentLocation();



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


    // let map = new google.maps.Map(document.getElementById("map"), {
    //   zoom: 13,
    //   center: new google.maps.LatLng(this.myLat, this.myLng),
    //   mapTypeId: google.maps.MapTypeId.ROADMAP,
    //   accuracy: 50,
    //
    // });

  },
  methods: {
    userCurrentLocation () {
      // const watchId = navigator.geolocation.watchPosition(position => {
      //   const { latitude, longitude } = position.coords;
      //   // Show a map centered at latitude / longitude.
      //   console.log("Position lat: " + position.coords.latitude)
      //   console.log("Position lng: " + position.coords.longitude)
      //   this.showUserLocationOnTheMap(position.coords.latitude, position.coords.longitude)
      // });
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
      // new google.maps.Marker({
      //   icon: 'http://maps.google.com/mapfiles/ms/icons/white-dot.png',
      //   position: new google.maps.LatLng(latitude, longitude),
      //   accuracy: 50,
      //   map: map
      // })

      new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        accuracy: 50,
        map: map,
        icon: this.pinSymbol('yellow'),
        label: { color: '#00aaff', fontWeight: 'bold', fontSize: '14px', text: 'Olen tällä' }
      })


    },

    getAddressFrom (lat, long) {
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat +
          "," + long
          + "&key=" + 'AIzaSyBDA2EBoGezJx51wQtxoW3Ecq5Ql8CCAiE')
          .then(response => {
            if (response.data.error_message) {
              this.error = response.data.error_message;

              console.log(response.data.error_message)
            } else {
              new google.maps.Map(document.getElementById("map"), {
                zoom: 13,
                center: new google.maps.LatLng(lat, long),
                mapTypeId: google.maps.MapTypeId.ROADMAP

              });
              // new google.maps.Marker({
              //     position: new google.maps.LatLng(lat, long),
              //     map: map
              // })
              //this.address = response.data.results[0].formatted_address
              console.log(response.data.results.results[0].formatted_address)
            }

          })
          .catch(error => {
            this.error = error.message
            console.log(error.message)
          })
    },


    otherUserLocations (recipients, profession) {
      let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: new google.maps.LatLng(this.myLat, this.myLng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      console.log("Users count: " + recipients.length)

      new google.maps.Marker({
        position: new google.maps.LatLng(this.myLat, this.myLng),
        accuracy: 50,
        map: map,
        icon: this.pinSymbol('yellow'),
        label: { color: '#00aaff', fontWeight: 'bold', fontSize: '14px', text: 'Olen tällä' }
      })

      let count = 0;
      if (recipients.length > 0) {
        for (let pos = 0; pos < recipients.length; pos++) {

          //console.log("Client latitude: " + recipient[pos].latitude)
          //console.log("Client longitude: " + recipient[pos].longitude)

          recipients[pos].professional.forEach(prof => {
            if (prof === profession) {
              //this.countOfSelectedClient++;
              this.isActiveClients = true;
              count ++;
              new google.maps.Marker({
                position: new google.maps.LatLng(recipients[pos].latitude, recipients[pos].longitude),
                map: map
              })
            }
          })

        }
        if (count > 0) {
          this.isActiveClients = true;
        } else {
          this.isActiveClients = false;
        }
        this.countOfSelectedClients = count;
        this.identifyClientText();
        //console.log("Count " + this.countOfSelectedClients)

      }

    },





    renderClients (event) {
      console.log("Event value " + event.target.value)
      //this.countOfSelectedClients = 0;

      if (event.target.value) {
        this.showClientLocationOnTheMap(event.target.value)

      }
      this.prof = event.target.value

      event.target.value = ""
    },


    async showClientLocationOnTheMap (profession) {

      const recipients = await recipientService.getRecipients()
      if (recipients) {
        this.otherUserLocations(recipients, profession);
      }
      // visibility: hidden;

    },
    identifyClientText () {
      console.log("Klientide arv: " + this.countOfSelectedClients)
      if (this.countOfSelectedClients > 1) {
        this.client = "asiakasta"
      } else {
        this.client = "asiakas"
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
}#map {
   position: absolute;
   top: 50px;
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


</style>