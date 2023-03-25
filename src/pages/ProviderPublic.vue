<template>
  <div>
    <MDBContainer
        style="position: relative; z-index:1;
        opacity: 0.8;
        margin-top: 60px;"
    >
      <div class="ui large segment form">
        <div class="field">
          <select v-model="prof" @click="renderClients($event)">
            <option disabled value="">Valitse ammattisi</option>
            <option value="Putkimies">Putkimies</option>
            <option>Sähkömies</option>
            <option value="Siivooja">Siivooja</option>
          </select>
        </div>
      </div>

      <h3>{{prof}} Count: {{countOfActiveClients}} </h3>

      <MDBBtn color="info"
              size="lg"
              block
              style="position: relative; z-index:1; opacity: 0.8;"
      >
        Tarjoa omaa palvelua
      </MDBBtn>
      <MDBBtn color="success"
              size="lg"
              block
              @click="showClientLocationOnTheMap"
              style="position: relative; z-index:1; opacity: 0.8;"
      >
        Recipients test
      </MDBBtn>
      <MDBBtn color="danger"
              size="lg"
              block
              @click="$router.push('/')"
              style="position: relative; z-index:1; opacity: 0.8;"
      >
        Poistu
      </MDBBtn>

    </MDBContainer>

    <!--
    <section
        style="position: relative; z-index:1;
        background-color: white;
        opacity: 0.8;
        margin-top: 60px;"
    >
      <div>10 people around you need: {{ prof }}</div>

      <div class="ui large segment form">
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
    -->

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
//import key from '@/config/keys'

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
      countOfActiveClients: null,
      //spinner: false,
      myLat: null,
      mylng: null,
      la: null,
      ln: null
    }
  },
  mounted () {
    //document.getElementById("autocomplete")

    //this.getCurrentPosition ()

    //gMap.userCurrentLocation ("map");


    //gMap.userCurrentLocation ("map")

    this.getCurrentPosition()


    //gMap.userCurrentCoords ()
    //this.showClientLocationOnTheMap(this.prof)


  },
  methods: {
    renderClients (event) {
      console.log("Event value " + event.target.value)

      if (event.target.value) {
        this.showClientLocationOnTheMap(event.target.value)

      }

      this.countOfActiveClients = gMap.clientCount

      console.log("Clients here: " + this.countOfActiveClients)

      event.target.value = ""
    },
    geolocationSuccess (pos) {
      console.log("Geo latitude- " + pos.coords.latitude)
      console.log("Geo longitude- " + pos.coords.longitude)
      this.la = pos.coords.latitude
      this.lg = pos.coords.longitude

      let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP

      });
      new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: map
      })


    },
    geolocationError (err) {
      console.log("Error here: " + err)
    },
    getCurrentPosition () {


      navigator.geolocation.getCurrentPosition(
          this.geolocationSuccess,
          this.geolocationError, {
            timeout: 0,
            enableHighAccuracy: true,
            maximumAge: Infinity,
            accuracy: 10
          }

      );


    },
    async showClientLocationOnTheMap (profession) {

      const recipients = await recipientService.getRecipients()
      if (recipients) {
        gMap.otherUserLocations(recipients, profession,"map");
      }


    },

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

</style>