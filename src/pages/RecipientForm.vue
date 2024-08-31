<template>

  <div>

    <MDBContainer style="padding-top: 50px; position: relative;">
      <div style="text-align: left; margin-bottom: 50px;">
        <img :src="require(`@/assets/left_back.png`)" alt="back" @click="$router.go(-1)"/>
      </div>

      <errorNotification :message="rangeError" />

<!--      <MDBBtnClose-->
<!--          style="margin-top: 70px;"-->
<!--          white-->
<!--          class="close_btn"-->
<!--          @click="$router.go(-1)"-->
<!--      />-->

<!--     #1f3d40 -->
      <p style="margin-top: 10px;">Täytä tilaus tai löytää nopea ratkaisu kartalta!</p>
      <form class="g-3 needs-validation" novalidate @submit.prevent="checkForm" autocomplete="off" style=" padding: 5px;">
        <MDBRow>

          <MDBCol>
<!--            <p style="margin-top: 10px;">Täytä tilaus</p>-->
            <div style=" margin-bottom: 20px; background-color: #1F3D40FF;" >
              <Dropdown   v-model="professional"  :options="prodata"   filter optionLabel="label" optionGroupLabel="label" showClear optionGroupChildren="items" placeholder="Valitse ammattilainen" class="w-full md:w-100rem">

                <template value="slotProps">
                  <div v-if="slotProps.value" >
                    <!--              <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />-->
                    <div>{{ slotProps.value.label }}</div>
                  </div>
                  <span v-else>
              {{ slotProps.placeholder }}
            </span>
                </template>
                <template #optiongroup="slotProps" >
                  <div  class="flex align-items-center">
                    <!--              <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />-->
                    <div>{{ slotProps.option.label }}</div>
                  </div>
                </template>
              </Dropdown>
            </div>
          </MDBCol>
          <!--        <MDBCol>-->
          <!--          <h3 style="margin-top:20px; margin-bottom: 20px;">-&#45;&#45; TAI -&#45;&#45;</h3>-->
          <!--        </MDBCol>-->
          <MDBCol >
            <div >
              <MDBBtn  outline="success" block size="sm" @click="this.$router.push('/recipient-public')" style="margin-top:5px; ">Etsi kartalta</MDBBtn>
            </div>

          </MDBCol>
        </MDBRow>
        <div style="width: 70%;">


        </div>

        <MDBInput
            counter :maxlength="30"
            label="Anna otsikko"
            v-model="header"

            size="lg"
            white
            invalidFeedback="Ole hyvä ja kirjoita otsikko."
            validFeedback="Ok!"
            required
            wrapperClass="mb-4"
        >
        </MDBInput>

<!--        <span class="message-counter">{{ header.length }} / 20</span>-->
        <MDBRow>
          <MDBCol>
            <MDBInput
                inputGroup
                :label="address ? 'Anna toinen osoitteesi' : 'Anna osoite'"
                white
                v-model="address"
                id="osoite"
                size="lg"
                invalidFeedback="Ole hyvä ja kirjoita osoite."
                validFeedback="Ok!"
                required
                wrapperClass="mb-4"
            >
              <!--          <span v-if="address" style="margin-right: 20px; margin-top: 5px;">X</span>-->
              <MDBBtnClose v-if="address" white style="margin-right: 7px; margin-top: 5px;" @click="clearAddress"/>
              <!--          <MDBBtn white outline="dang" style="cursor: pointer;" @click="clearAddress">X</MDBBtn>-->
            </MDBInput>
          </MDBCol>
          <MDBCol>
            <div >

              <select v-model="range" style="background-color: grey; color: #ddd; height: 30px;" name="distance" id="km">
                <option value="">Valitse etäisyys</option>
                <option value="1">1 km</option>
                <option value="2">2 km</option>
                <option value="3">3 km</option>
                <option value="4">4 km</option>
              </select>
            </div>
          </MDBCol>
          Selected  {{range}}
        </MDBRow>
        <div >
          <div style="width: 50%;">

          </div>

        </div>




        <p style="text-align: left;">Missä ajalla haluaisit ammattilaista?</p>

        <div style="color: #fff;">
          <VueDatePicker
              style="margin-bottom: 20px;"
              v-model="date"
              dark
              :min-date="new Date()"

              @internal-model-change="handleInternalDate"
              :state="isNoDate ? false : null"
          >

          </VueDatePicker>
        </div>



        <!--
    Everything is wrapped in a label, which acts as a clickable wrapper around a form element.
    In this case, the file input.
  -->

<!--        <MDBContainer style="margin-bottom: 20px;">-->
          <MDBRow>
            <MDBCol md="8">
              <MDBTextarea
                  maxlength="70"
                  label="Tehtävän kuvaus..."
                  white
                  rows="3"

                  v-model="explanation"
                  invalidFeedback="Ole hyvä ja kirjoita tehtävän kuvaus."
                  validFeedback="Ok!"
                  required
              />
              <span class="message-counter">{{ explanation.length }} / 70</span>
            </MDBCol>
            <MDBCol md="4">
              <img v-if="showImage" :src="showImage" style="width: 200px; margin-bottom: 20px;" alt="..."/>
              <label v-if="!isUploaded" for="file-upload" class="custom-file-upload">

                <span v-if="value">
                    Muokkaa kuva: {{value.name}}

                </span>
                <span v-else>Valitse kuva tehtävästä</span>

              </label>

              <input id="file-upload" type="file" @change="handleFileChange"/>

              <MDBBtn v-if="isImageSelected" outline="danger" size="lg" block @click="removeFile">Poista valitsettu kuva</MDBBtn>
              <MDBBtn v-if="isImageSelected"
                      outline="success"
                      size="lg"
                      block
                      style="margin-bottom: 10px;"
                      @click="uploadImage">Lataa valitsettu kuva</MDBBtn>

            </MDBCol>


          </MDBRow>

          <MDBBtn outline="success" size="lg"  @click="addRecipient" style="margin-top:5px; margin-bottom: 20px;" type="submit">Vahvista</MDBBtn>

<!--        </MDBContainer>-->





<!--        <MDBBtn outline="success" size="lg" block @click="addRecipient" style="margin-top:20px; margin-bottom: 20px;" type="submit">Tee tilaus</MDBBtn> -Or- -->
<!--        <MDBBtn outline="secondary">Vaata kaardilt</MDBBtn>-->
      </form>

<!--      professional {{professional}}-->
      <!--
      <h1>{{result}}</h1>
      <MDBBtn outline="success" size="lg" block @click="this.$router.push('/received')">Asiakkaan paneeli</MDBBtn>

      <MDBBtn outline="success" size="lg" block @click="findRecipients">findRecipients</MDBBtn>



      <MDBBtn outline="danger" size="lg" block @click="remFile">Remove file</MDBBtn>
      -->
<!--      <MDBBtn outline="danger" size="lg" block @click="cancelRecipientForm" style="margin-bottom: 50px;"> Poistu </MDBBtn>-->


    </MDBContainer>

  </div>

</template>

<script>
/* eslint-disable */
/*global google*/
//const fs = require('fs');

import VueDatePicker from '@vuepic/vue-datepicker';
import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBTextarea,
    MDBBtnClose,
  MDBIcon
} from "mdb-vue-ui-kit";
import recipientService from '../service/recipients'
import uploadService from '../service/image'
import proData from '@/components/profession/proList'
import {ModelListSelect} from 'vue-search-select'
import errorNotification from '../components/notifications/errorMessage'

import Dropdown from 'primevue/dropdown';
//import '@/css/style.css';
import '@/css/pro.css';

//import ImageSelect from '../components/ImageSelect.vue'
import { format } from 'date-fns'
import {ref} from "vue";
import axios from "axios";
import providerService from "@/service/providers";



//import mapService from '../service/map'



export default {
  name: "recipient-form",
  props: {
    recipientBookings: Array
  },
  components: {
    MDBBtn,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBCol,
    MDBTextarea,
    MDBBtnClose,
    MDBIcon,
    //ImageSelect,
    errorNotification,
    VueDatePicker,
    Dropdown,
    ModelListSelect
  },
  data () {

    return {
      recipientId: null,
      header: "",
      address: null,
      range: "",
      rangeError: null,
      exicting_address: this.recipientBookings.length > 0 ? this.recipientBookings[0].address : "",
      lat: null,
      lng: null,
      isNoDate: false,
      professional: null,
      addFile: null,
      dateTest: null,
      calendarTooltips: [],
      value: null,
      aaa: "",
      file: null,
      f: null,
      prodata: proData,

      item: "",
      hospitals: [


        {id: "1", hospital_name: "aaaaaaaaaaa"},
        {id: "2", hospital_name: "bbbbbbbbbbbb"},
        {id: "3", hospital_name: `<div style="padding: 4px; background: green; border-radius: 0.25rem; color: white;">Foo</div>` }
      ],

      selectedCountry: "",
      countries: this.proData,
      // countries: [
      //   { name: 'Australia', code: 'AU' },
      //   { name: 'Brazil', code: 'BR' },
      //   { name: 'China', code: 'CN' },
      //   { name: 'Egypt', code: 'EG' },
      //   { name: 'France', code: 'FR' },
      //   { name: 'Germany', code: 'DE' },
      //   { name: 'India', code: 'IN' },
      //   { name: 'Japan', code: 'JP' },
      //   { name: 'Spain', code: 'ES' },
      //   { name: 'United States', code: 'US' }
      // ]

    }
  },

  setup () {
    const date = ref(null)
    const explanation = ref("")
    const isImageSelected = ref(false)
    const imgId = ref(null)
    const showImage = ref(null)
    const isShowImage = ref(false)
    const isUploaded = ref(false)
    const isNotSelected = ref(false)
    const search5 = ref('');

    // const selectedCity = ref();
    // const cities = ref([
    //   { name: 'New York', code: 'NY' },
    //   { name: 'Rome', code: 'RM' },
    //   { name: 'London', code: 'LDN' },
    //   { name: 'Istanbul', code: 'IST' },
    //   { name: 'Paris', code: 'PRS' }
    // ]);

    // const selectedCountry = ref();
    // const countries = ref([
    //   { name: 'Australia', code: 'AU' },
    //   { name: 'Brazil', code: 'BR' },
    //   { name: 'China', code: 'CN' },
    //   { name: 'Egypt', code: 'EG' },
    //   { name: 'France', code: 'FR' },
    //   { name: 'Germany', code: 'DE' },
    //   { name: 'India', code: 'IN' },
    //   { name: 'Japan', code: 'JP' },
    //   { name: 'Spain', code: 'ES' },
    //   { name: 'United States', code: 'US' }
    // ]);

    //const file = ref(null)

    return {
      date,
      explanation,

      isImageSelected,
      imgId,
      showImage,
      isShowImage,
      isUploaded,
      isNotSelected,
      search5
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },

  async mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.recipientId = user.id
      //console.log("User token: " + this.loggedUser.token)
      console.log("User id in recipient: " + user.id)
    }



    this.myCurrentLocation();

    // fetch('https://api.geoapify.com/v1/ipinfo?apiKey=AIzaSyDt2YXE5tk0J72JgqnH3DTD7MeoqbbWBmU')
    //     .then(response => response.json())
    //     .then(data => {
    //       // You can now access the location data in the "data" object
    //       console.log(data);
    //     })

    //console.log("Google key test: " + await mapService.getLocation())

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
      this.lat = place.geometry.location.lat()
      this.lng = place.geometry.location.lng()

      this.address = place.formatted_address
      console.log(place)
    })
  },

  methods: {
    clearAddress () {
      console.log("hhhhhh")
      this.address = "";
    },
    showAlert () {
      alert(this.search5);
    },
    myCurrentLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          // Show a map centered at latitude / longitude.
          this.lat = latitude
          this.lng = longitude
          this.showMyLocationData (latitude, longitude)
        });
      }

    },
    showMyLocationData (lat, long) {

      axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat +
          "," + long
          + "&key=" + 'AIzaSyDt2YXE5tk0J72JgqnH3DTD7MeoqbbWBmU')
          .then(response => {
            if (response.data.error_message) {
              this.error = response.data.error_message;

              console.log(response.data.error_message)
            } else {
              // const map = new google.maps.Map(document.getElementById("map"), {
              //   zoom: 13,
              //   center: new google.maps.LatLng(lat, long),
              //   mapTypeId: google.maps.MapTypeId.ROADMAP
              // });

              // AIzaSyBDA2EBoGezJx51wQtxoW3Ecq5Ql8CCAiE

              // new google.maps.Marker({
              //   position: new google.maps.LatLng(lat, long),
              //   accuracy: 50,
              //   map: map,
              //   icon: this.pinSymbol('yellow'),
              //   label: { color: '#00aaff', fontWeight: 'bold', fontSize: '14px', text: 'Olen tällä' }
              // })

              this.address = response.data.results[1].formatted_address;
              console.log("Address now " + this.address);
            }

          })
          .catch(error => {
            this.error = error.message
            console.log(error.message)
          })
    },
    cancelRecipientForm () {
      this.$router.go(-1);

      // this.$router.push('/')
    },
    async findRecipients () {
      const recipients = await recipientService.getOwnBookings(this.recipientId)
      console.log("Recipients " + recipients.length)

    },
    async remFile () {

      await uploadService.remove('644cff805261bf7d9943c5da',  '644cff875261bf7d9943c5dd');
    },
    handleFileChange(e) {
      //this.$emit('input', e.target.client[0])

      try {

        const files = e.target.files[0]
        console.log('event target client ', e.target.files[0])
        if (files) {
          this.showImage = URL.createObjectURL(files)
          this.file = e.target.files[0];
        }

      } catch (err) {
        console.log('Error:', err)
      }

      this.value = e.target.files[0]
      if (e.target.files[0]) {
        this.isImageSelected = true;
      } else {
        this.isImageSelected = false;
      }
    },
    async uploadImage () {
      const data = new FormData();
      data.append('file', this.file, this.file.name)
      const img = await uploadService.create(data);

      if (img) {
        this.imgId = img.imgCreated._id;
        this.file = null;
        //this.showImage = null;
        //this.value = null;
        this.isImageSelected = false;
        this.isUploaded = true;
      }




    },
    removeFile () {
      this.value = null;
      this.isImageSelected = false;
      this.showImage = null;
    },
    formatDate (date = Date) {
      //let date = datee;
      if (!date) {
        return null
      }
      return format(date, 'dd.MM.yyyy, HH:mm');
    },

    backToDashboard () {

    },
    getDate () {
      // date Thu Apr 20 2023 10:27:00 GMT+0300
      console.log("selected date: " + this.date.getDate())
    },
    handleInternalDate () {
      console.log("Handled")
      this.isNoDate = false;
    },

    // New client to the database
    async addRecipient () {
      let recipient;
      // if (this.address === null) {
      //   this.address = this.recipientBookings[0].address;
      //   this.lat = this.recipientBookings[0].latitude;
      //   this.lng = this.recipientBookings[0].longitude;
      // }
      if (this.professional) {
        this.isNotSelected = true;
      }
      if (!this.date) {
        this.isNoDate = true;
      }
      if (this.date && this.professional) {
        let year = this.date.getFullYear();
        let month = this.date.getMonth();
        let day = this.date.getDate();
        let hour = this.date.getHours();
        let minute = this.date.getMinutes();
        const dateForMs = new Date(year, month, day, hour, minute).getTime()
        let recipientLat =
        recipient = {
          created: this.date,
          created_ms: dateForMs,
          header: this.header,
          address: this.address,
          latitude: this.lat,
          longitude: this.lng,
          professional: this.professional.label,
          isIncludeOffers: true,
          year: this.date.getFullYear(),
          month: this.date.getMonth(),
          day: this.date.getDate(),
          hours: this.date.getHours(),
          minutes: this.date.getMinutes(),
          description: this.explanation,
          status: "waiting",
          imageId: this.imgId
        }
      }


      if (this.header && (this.address) && this.professional && this.date && this.explanation) {
        if (this.range !== "") {
          // Add new booking to user
          const booking = await recipientService.addRecipient(this.recipientId, recipient)

          // if (booking === "Recipient is added!") {
          //   const chatUserDataNavbar = {
          //     status: "",
          //     userID: prov.user.id,
          //     name: prov.user.username,
          //     room: this.room
          //   };
          //   this.$emit('client:confirmed_provider', prov.id, this.booking, chatUserDataNavbar);
          //
          // }

          this.$emit('booking:update', booking)
          console.log("Booking--- " + booking);
          this.$router.push('/received')
        } else {
          this.rangeError = "Anna max etäisyys missä alueella haluat löytää ammattilaista!";
          setTimeout(() => {
            this.rangeError = null
          }, 2000);

        }

      } else {
        console.log("Something went wrong")
        console.log("Aadress " + this.address)
        console.log("header " + this.header)
        console.log("Explanation " + this.explanation)
        //console.log("Profession " + this.professional.label)
        console.log("Date " + this.date)
      }

      //const recipientAdded = await recipientService.addRecipient(this.recipientId, recipient)

    },
    checkForm (event=Event) {
      event.target.classList.add("was-validated");
    }
  }
}
</script>

<style >

.action-row {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  width: 100%;
}



input[type="file"] {
  display: none;
}

.custom-file-upload {
  /*width: 100%;*/
  width: 70%;

  color: white;
  background-color: #87958e;
  border: 1px solid #ccc;
  display: inline-block;
  padding: 10px 12px;
  margin-bottom: 10px;
  border-radius: 2%;
  cursor: pointer;
}
.dp__theme_dark {
  --dp-icon-color: #fff;
  --dp-border-color: #ddd;

}
.input {
  color: red;
}
.close_btn {
  position: absolute;
  right: 20px;
  top: -30px;
  cursor: pointer;
  font-weight: bold;
}

input[type=search]::-webkit-search-cancel-button {
  -webkit-appearance: searchfield-cancel-button;
}

/*.p-dropdown {*/
/*  border: 1px solid lightgrey;*/
/*  color: #dddddd;*/
/*  text-align: left;*/
/*  padding: 7px;*/
/*  cursor: pointer;*/

/*}*/


/*!*.p-dropdown-label {*!*/
/*!*  *!*/
/*!*}*!*/

/*.p-dropdown .p-dropdown-clear-icon{*/
/*  position: absolute;*/
/*  margin-top: 5px;*/
/*  left: 83%;*/
/*}*/


/*.p-overlay-open {*/


/*}*/
/*.p-focus {*/

/*}*/
/*.p-highlight {*/

/*}*/
/*.p-dropdown-items-wrapper {*/
/*  overflow: scroll;*/
/*  border: 1px solid #dddddd;*/
/*  padding-top: 15px;*/
/*  padding-right: 23px;*/
/*  background-color: #2b2626;*/
/*}*/

/*.p-dropdown-items-wrapper ul{*/
/*  list-style-type: none;*/

/*}*/
/*.p-dropdown-items-wrapper::-webkit-scrollbar-thumb {*/
/*  background: #9c9a9a;*/
/*}*/
/*.p-dropdown-items-wrapper li{*/
/*  border: 1px solid #656865;*/
/*  margin-bottom: 10px;*/
/*  padding: 12px 0 12px 12px;*/

/*}*/


/*.p-dropdown-trigger {*/
/*  float: right;*/

/*}*/
/*.p-dropdown-panel {*/
/*  color: darkorange;*/

/*}*/
/*.p-dropdown-filter-container {*/
/*  background-color: #141414;*/
/*  padding: 12px;*/
/*}*/
/*.p-dropdown-filter {*/
/*  background-color: #353432;*/
/*  border-bottom: 1px solid darkorange;*/
/*  color: #dddddd;*/
/*  width: 100%;*/
/*  margin-right: -25px;*/
/*}*/

/*.p-dropdown-items {*/
/*  color: deepskyblue;*/
/*}*/

/*.p-dropdown-item {*/
/*  color: #dddddd;*/
/*  cursor: pointer;*/
/*}*/


</style>