<template>
  <div>



    <MDBContainer

        style="position: relative; z-index: 1;
        /*width: 80%;*/
        padding-top: 80px;
        opacity: 0.8;
        "
    >





      <div :class="{hideMainPanel: !isMainPanel}" style="background-color: white; padding: 10px;">
        <div style="display: flex; justify-content: right;">
          <MDBIcon size="lg" style="padding: 10px;" @click="closeMainPanel">
            <i class="fas fa-compress-arrows-alt"></i>
          </MDBIcon>
          <div>
            <MDBBtnClose
                style=" padding: 10px;"
                size="lg"
                @click="$router.go(-1)"
            />
          </div>



        </div>

        <MDBBtn color="secondary"
                v-if="isMainPanel"
                size="lg"
                block
                @click="receive"
                style="position: relative; z-index:1; opacity: 1.2; margin-bottom: 10px;"
        >
          Tee uusi tilaus
        </MDBBtn>

        <div id="test">
          <MDBInput
              label="Anna osoitteesi kun ei täsmää"
              v-model="address"
              id="autocomplite"
              size="lg"
              wrapperClass="mb-4"
          />
        </div>


        <select style="padding: 12px; width: 100%;"  id="listOfProfessionals" v-model="prof">
          <option value="">Valitse ammattilainen</option>
          <template v-for="option in prodata">

            <!-- if the `group` property is truthy -->
            <optgroup v-if="option.group" :label="option.group" :key="option.group">
              <option v-for="opt in option.options" :value="opt.label" :key="opt.label">
                {{ opt.label }}
              </option>
            </optgroup>
            <!-- otherwise -->
            <option v-else :value="option" :key="option.value">
              {{ option.label }}
            </option>
          </template>

        </select>

        <div  :class="{hideDistSelectPanel: !isDistSelection}" style="padding-top: 10px;">
          <select style="padding: 12px; width: 100%;" id="distance" v-model="distBtw" @click="filterByDistance">
            <option disabled value="1">1 kilometriä ympärilläsi</option>
            <option value="2">2 km ympärilläsi</option>
            <option value="3">3 km ympärilläsi</option>
            <option value="4">4 km ympärilläsi</option>
            <option value="5">5 km ympärilläsi</option>
            <option value="6">6 km ympärilläsi</option>
            <option value="7">7 km ympärilläsi</option>
            <option value="8">8 km ympärilläsi</option>
            <option value="9">9 km ympärilläsi</option>
            <option value="10">10 km ympärilläsi</option>
            <option value="20">20 km ympärilläsi</option>
            <option value="30">30 km ympärilläsi</option>
            <option value="40">40 km ympärilläsi</option>
            <option value="50">50 km ympärilläsi</option>
            <option value="60">60 km ympärilläsi</option>
            <option value="70">70 km ympärilläsi</option>
            <option value="80">80 km ympärilläsi</option>
            <option value="90">90 km ympärilläsi</option>
            <option value="100">100 km ympärilläsi</option>
            <option value="200">200 km ympärilläsi</option>
            <option value="300">300 km ympärilläsi</option>
          </select>

        </div>


<!--        <h3-->
<!--            :class="{activeClients: !isActiveProffs}"-->
<!--        >-->
<!--          {{ countOfSelectedProfessional + " " + professional }} tarjoaa palvelua-->
<!--        </h3>-->
        <h3
            v-if="prof"
            :class="{noClients: isActiveProffs}"
        >
          Ei ammattilaisia vielä!
        </h3>


      </div>






      <div v-if="isMapChat" style="background-color: white; margin: 0; padding: 10px; width: 350px;  border: solid darkgrey">
        <p style="float: right; color: limegreen;" @click="closeMapChat">Valmis</p>
        <chat-panel

            :chatusers = chatusers
            :messages =messages
            :selecteduser = selecteduser
            @select:user = selectUser
            @noSelected = noSelectUser
            @on:message = onMessage
        />
      </div>



      <div class="map-info-table" v-else-if="isTargetSelected && !isMapChat" style="background-color: white; padding: 10px; width: 95%;  border: solid darkgrey">
        <div style="display: flex; justify-content: right;">
          <p style=" font-size: 15px; padding: 10px; color: orangered;" @click="outFromMarkerPanel">Valmis</p>
        </div>

        <table style="font-size: 14px; width: 100%; text-align: left;">
          <tbody>
          <tr>
            <td>
              Yritys:
            </td>
            <td>
              {{ this.target.yritys }}
            </td>
          </tr>
          <tr>
            <td>
              Y - tunnus:
            </td>
            <td>
              {{this.target.ytunnus}}
            </td>
          </tr>
          <tr>
            <td>
              Työalue:
            </td>
            <td>
              {{this.target.range ? this.target.range : "Palvelun tarjous vain paikalla!"}}
            </td>
          </tr>
          <tr>
            <td>
              Tuntihinta:
            </td>
            <td>
              {{ this.target.priceByHour }} Euroa
            </td>
          </tr>
          <tr>
            <td>
              palaute:
            </td>
            <td>
              <MDBIcon  style="padding: 10px; cursor: pointer;" class="far fa-smile" size="lg"
                        @click="negative"></MDBIcon>


              <MDBBadge color="success" class="translate-middle p-1"
                        pill
                        notification>
                <p>{{this.target.rating.positive}}</p>
              </MDBBadge>


              <MDBIcon  style="padding: 10px; cursor: pointer;" class="far fa-frown" size="lg"
                        @click="negative"></MDBIcon>



              <MDBBadge color="danger" class="translate-middle p-1"
                        pill
                        notification>
                <p>{{this.target.rating.negative}}</p>
              </MDBBadge>
            </td>
          </tr>
          <tr>
            <td v-if="isCreatingChatPanel" colspan="2">
              <MDBBtn block color="secondary" size="lg" @click="createChatPanel">Chattailemaan</MDBBtn>
            </td>
          </tr>
          </tbody>
        </table>



      </div>

      <p style="color: red;">selecteduser {{selecteduser}}</p>

      <div v-if="!isTargetSelected">
        <div v-if=!isMainPanel >
          <MDBIcon size="2x" style="float: right; padding: 10px;" @click="returnToMainPanel">
            <i class="fas fa-expand-arrows-alt"></i>
          </MDBIcon>
        </div>
      </div>



<!--      style="background-color:white; width: 40%; float: right;"-->
      <div v-if="!isMainPanel && countOfSelectedProfessional > 0 && !isTargetSelected" style="background-color:white;">


        <p style="color: red; font-size: 14px; text-align: left; padding: 15px; ">
          Napsauta merkkiä nähdäksesi palveluntarjoajan!
        </p>

        <p style="color: blue;">
          {{ countOfSelectedProfessional + " " + professional }} tarjoaa palvelua
        </p>

      </div>



<!--      <MDBBtn color="dark"-->
<!--              v-if="isMainPanel"-->
<!--              size="lg"-->
<!--              block-->
<!--              @click="receive"-->
<!--              style="position: relative; z-index:1; opacity: 1.2;"-->
<!--      >-->
<!--        Tee uusi tilaus-->
<!--      </MDBBtn>-->


<!--      <MDBBtn color="danger"-->
<!--              v-if="isMainPanel"-->
<!--              size="lg"-->
<!--              block-->
<!--              @click="$router.go(-1)"-->
<!--              style="position: relative; z-index:1; opacity: 1.0;"-->
<!--      >-->
<!--        Poistu-->
<!--      </MDBBtn>-->

    </MDBContainer>
<!--    <h3 style="margin-top: 50px;">Kartta ladataan...</h3>-->
<!--    <div class="spinner-border" role="status">-->
<!--      <span class="visually-hidden">Loading...</span>-->
<!--    </div>-->
<!--    <section id="map"></section>-->

    <div id="map"></div>


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
  MDBBtn,
  MDBBtnClose,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBadge
} from "mdb-vue-ui-kit";
import distance from '../components/controllers/distance'
import gMap from '../components/location'
import proData from '@/components/profession/proList'
import chatPanel from '@/pages/LiveChat'
import socket from "@/socket";
export default {
  name: "recipient-public",
  props: {
    userIsProvider: Object,
    selecteduser: null,
    chatusers: Array,
    messages: Array,
    isProviderLoggedIn: Boolean
  },
  components: {
    chatPanel,
    MDBContainer,
    MDBInput,
    MDBBtn,
    MDBBtnClose,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBadge
  },
  data () {
    return {
      target: {}, // Selected provider from map
      isTargetSelected: false,
      isMainPanel: true,
      isCreatingChatPanel: false,
      prof: "",
      username: null,
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
      distBtw: 1,
      prodata: proData,
      room: null,
      isChatPanel: true,
      isMapChat: false,
      providers: [],

      selectedProPosition: null
    }
  },
  mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.username = user.username;
      this.userId = user.id
      //console.log("User token: " + this.loggedUser.token)
    }

    this.resizeMap();

    //console.log("Is provider in " + this.isProviderLoggedIn)

    //console.log("User id in providers " + this.userId)



    //this.setProviderId()

    const myMarker = new google.maps.Marker({
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    })

    this.userCurrentLocation();

    const selectProfession = document.getElementById("listOfProfessionals")

    selectProfession.addEventListener("change", (event) => {
      this.isDistSelection = true;

      this.currentProfession = event.target.value;
      this.showClientLocationOnTheMap(event.target.value, this.distBtw);
    })

    const selectDistance = document.getElementById
    ("distance");

    selectDistance.addEventListener("change", (event) => {
      this.distBtw = parseFloat(event.target.value);

      console.log("+++++++++++ " + this.countOfSelectedProfessional > 0)
      this.showClientLocationOnTheMap(this.currentProfession, this.distBtw);

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
    selectUser(user) {
      this.$emit('select:user', user);
      //if (!user.self)
      //this.selectedUser = user;
    },

    noSelectUser () {
      this.$emit("noSelected");
    },
    onMessage(content, date) {

      this.$emit("on:message", content, date);

    },
    resizeMap() {
      var myMap = document.getElementById('map');
      myMap.style.height = "100%";
      myMap.style.width = "100%";
    },
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


    otherUserLocations (providers, profession, dist) {
      let prev_infowindow = false;
      let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: new google.maps.LatLng(this.myLat, this.myLng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      console.log("Users count: " + providers.length)
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

      if (providers.length > 0) {
        this.target = {};

        for (let pos = 0; pos < providers.length; pos++) {
          console.log("------------ " + providers[pos].yritys);
          //console.log("Client latitude: " + recipient[pos].latitude)
          //console.log("Client longitude: " + recipient[pos].longitude)
          let myLatLong = [this.myLat, this.myLng];
          providers[pos].profession.forEach(prof => {
            if (prof === profession) {
              //his.providers.push(providers[pos])
              console.log("Pro " + prof.yritys)
              let providerLatLng = [providers[pos].latitude, providers[pos].longitude];
              console.log("Distance btw " + this.distanceBtw(this.myLat, this.myLng, providers[pos].latitude, providers[pos].longitude));

              //distance.theDist()

              //this.countOfSelectedClient++;
              this.isActiveProffs = true;

              if (this.distanceBtw(this.myLat, this.myLng, providers[pos].latitude, providers[pos].longitude) <= dist) {
                count ++;

                //this.isMainPanel = false;

                // let marker = new google.maps.Marker({
                //   position: new google.maps.LatLng(providers[pos].latitude, providers[pos].longitude),
                //   accuracy: 50,
                //   map: map
                // })
                let marker;
                if (this.isTargetSelected) {



                  // marker = new google.maps.Marker({
                  //   position: new google.maps.LatLng(providers[pos].latitude, providers[pos].longitude),
                  //   map: map
                  // })
                  //marker.setMap(null);

                  marker = new google.maps.Marker({
                    position: new google.maps.LatLng(providers[pos].latitude, providers[pos].longitude),
                    accuracy: 50,
                    map: map,
                    icon: this.pinSymbol('orange'),
                    label: { color: '#f75959',  fontWeight: 'bold', fontSize: '14px', text: 'TMI ' + providers[pos].yritys }
                  })
                } else {

                  marker = new google.maps.Marker({
                    position: new google.maps.LatLng(providers[pos].latitude, providers[pos].longitude),
                    accuracy: 50,
                    map: map
                  })

                }



                // this.target = providers[pos];
                // this.room = providers[pos].yritys + this.username;

                window.myGlobalFunction = this.openMarker;


                const content = "class='map-info-window'"



                const infowindow = new google.maps.InfoWindow({
                  //content: "Hei hei!"
                  //content:'<p id="map-info-window">Hello World!</p>'
                  //content: "TMI: " + providers[pos].yritys
                });

                google.maps.event.addListener(marker, 'click', function() {
                  //infowindow.setContent(content);


                  console.log("POOOOS " + pos)
                  let p = pos

                  if( prev_infowindow ) {
                    prev_infowindow.close();
                  }

                  prev_infowindow = infowindow;


                  infowindow.open(map,marker);

                  infowindow.setContent("<div  class='map-info-window'>" + '<p style="color: green; ">'+providers[pos].yritys+'</p>' + '<p style="color: red; " onclick="myGlobalFunction('+ p +' )">Tiedot</p>' + "</div>")

                });

                console.log("Prev infowondow " + prev_infowindow)

              }

            }
          })

        }


        if (count > 0) {
          this.isActiveProffs = true;
          this.isMainPanel = false;

        } else {
          this.isActiveProffs = false;
        }
        this.countOfSelectedProfessional = count;
        console.log("countxx " + count)
        this.identifyProfText();
        //console.log("Count " + this.countOfSelectedClients)

      }

    },

    createChatPanel () {
      if (this.target.user.username !== this.username) {
        const room = this.target.user.username + this.username;
        console.log("Username in map: " + this.target.user.username);
        console.log("Room in map " + room);
        // Room users in server will be created
        socket.emit("create room users", {
          room: room,
          username: this.username,
          providerUsername: this.target.user.username,
          providerID: this.target.user.id
        })
        const chatCredentials = {
          room: room,
          userID: this.target.user.id,
          username: this.target.user.username
        }
        this.$emit("chatCredentials", chatCredentials);
      }

      this.isMapChat = true
    },

    async openMarker (p) {
      //this.noSelectUser();
      console.log("Profession " + this.currentProfession);
      const pro = [this.currentProfession]

      const providersMatchingProSearch = await providerService.getProvidersMatchingByProfession({result: pro});
      let dataForward = [];
      console.log("Matching pro length " + providersMatchingProSearch.length)

      providersMatchingProSearch.forEach(pms => {
        console.log("Results: " + pms.user.id);
        let distance = parseInt(this.distanceBtw(this.myLat, this.myLng, pms.latitude, pms.longitude)).toFixed(0)

        dataForward = dataForward.concat({
          id: pms.user.id,
          dist: distance,
          pro: this.currentProfession
        })
      })



      socket.emit("map search report", dataForward);

      const providers = await providerService.getProviders()
      if (providers) {
        console.log("watcher position " + this.myLat + " / " + this.myLng);
        if (providers[p].user.username !== this.username) {
          this.isCreatingChatPanel = true
        }

        this.target = providers[p];
        this.isTargetSelected = true;
        //console.log("Pooooos ---- " + p);
        //this.otherUserLocations(providers, this.currentProfession, this.distBtw)
      }

      // if (providers[p].user.username !== this.username) {
      //   const room = providers[p].user.username + this.username;
      //   console.log("Username in map: " + providers[p].user.username);
      //   console.log("Room in map " + room);
      //   // Room users in server will be created
      //   socket.emit("create room users", {
      //     room: room,
      //     username: this.username,
      //     providerUsername: providers[p].user.username,
      //     providerID: providers[p].user.id
      //   })
      //   const chatCredentials = {
      //     room: room,
      //     userID: providers[p].user.id,
      //     username: providers[p].user.username
      //   }
      //   this.$emit("chatCredentials", chatCredentials);
      // }


      // const providers = await providerService.getProviders()
      // if (providers !== null) {
      //   this.otherUserLocations(providers, this.currentProfession, this.distBtw);
      // }

    },

    async outFromMarkerPanel () {
      this.isTargetSelected = false
      //this.isMainPanel = true;
      this.noSelectUser();
      const providers = await providerService.getProviders()
      if (providers !== null) {
        this.otherUserLocations(providers, this.currentProfession, this.distBtw);
      }
    },

    closeMapChat () {
      this.isMapChat = false
    },

    async returnToMainPanel () {
      this.isMainPanel = true;

      this.noSelectUser();

      // const providers = await providerService.getProviders()
      // if (providers !== null) {
      //   this.otherUserLocations(providers, "", "");
      // }
      //this.currentProfession = ""
      // this.prof = "";
      // this.distBtw = 0
    },

    closeMainPanel () {
      this.isMainPanel = false;
      this.noSelectUser();
      console.log("Close main panel")
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

}


#map {
  background:  url(/src/assets/map.gif)  no-repeat center center;

}

#map {
   position: absolute;

  /*height: 500px; !* The height is 400 pixels *!*/
  /*width: 100%; !* The width is the width of the web page *!*/

   top: 120px;
   right: 0;
   bottom: 0;
   left: 0;
 }

.map-info-window {
  /*width: 200px;*/

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
.hideMainPanel {
  display: none !important;
}
h3 {
  padding: 10px;
  color: #0095ff;
}
.minmax-icon {
  padding: 12px;
}

.map-info-table  td {
  border: 1px solid blue;
  padding: 5px;
}

</style>