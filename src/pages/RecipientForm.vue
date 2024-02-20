<template>

  <div>


    <MDBContainer style="padding-top: 50px;">
      <h2 >- Uusi tilaus -</h2>
      <form class="g-3 needs-validation" novalidate @submit.prevent="checkForm">
        <MDBInput
            counter :maxlength="30"
            label="Anna otsikko"
            v-model="header"
            id="header"
            size="lg"
            invalidFeedback="Ole hyvä ja kirjoita otsikko."
            validFeedback="Ok!"
            required
            wrapperClass="mb-4"/>

        <p v-if="recipientBookings.length > 0" style="text-align: left;">Osoite: {{ recipientBookings[0].address }}</p>

        <MDBInput
            label="Anna toinen osoitteesi"
            v-model="address"
            id="osoite"
            size="lg"
            invalidFeedback="Ole hyvä ja kirjoita osoite."
            validFeedback="Ok!"
            required
            wrapperClass="mb-4"/>

        <div class="ui form">
          <div class="field">
<!--            <select v-if="isNotSelected"-->
<!--                    id="noSelected"-->
<!--                    style="border-color: red; color: red; margin-bottom: 20px;"-->
<!--                    v-model="professional"-->
<!--                    @change="isNotSelected = false">-->
<!--              <option disabled value="" >Valitse ammattilainen</option>-->
<!--              <option>Putkimies</option>-->
<!--              <option>Sähkömies</option>-->
<!--              <option>Siivooja</option>-->
<!--            </select>-->
<!--            <select v-else v-model="professional"-->
<!--                    style="margin-bottom: 20px;">-->
<!--              <option disabled value="">Valitse ammattilainen</option>-->
<!--              <option>Putkimies</option>-->
<!--              <option>Sähkömies</option>-->
<!--              <option>Siivooja</option>-->
<!--            </select>-->

            <select
                v-if="isNotSelected"
                id="noSelected"
                style="border-color: red; color: red; margin-bottom: 20px;"
                v-model="professional"
                @change="isNotSelected = false"
            >
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

            <select
                v-else
                v-model="professional"
                style="margin-bottom: 20px;"
            >
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

          </div>
        </div>


        <VueDatePicker
            style="margin-bottom: 20px;"
            v-model="date"
            :min-date="new Date()"
            placeholder="Missä ajalla haluat ammattilaista?"
            @internal-model-change="handleInternalDate"
            :state="isNoDate ? false : null"
        >

        </VueDatePicker>


        <!--
    Everything is wrapped in a label, which acts as a clickable wrapper around a form element.
    In this case, the file input.
  -->

        <MDBContainer style="margin-bottom: 20px;">
          <MDBRow>
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

            <MDBCol md="8">
              <MDBTextarea
                  maxlength="70"
                  label="Tehtävän kuvaus..."

                  rows="4"

                  v-model="explanation"
                  invalidFeedback="Ole hyvä ja kirjoita tehtävän kuvaus."
                  validFeedback="Ok!"
                  required
              />
              <span class="message-counter">{{ explanation.length }} / 70</span>
            </MDBCol>
          </MDBRow>


        </MDBContainer>


        <MDBRow>
          <MDBCol>
            <MDBBtn outline="success" size="lg" block @click="addRecipient" style="margin-top:20px; margin-bottom: 20px;" type="submit">Tee tilaus</MDBBtn>
          </MDBCol>
          <MDBCol>
            <h3 style="margin-top:20px; margin-bottom: 20px;">--- TAI ---</h3>
          </MDBCol>
          <MDBCol>
            <MDBBtn outline="secondary" block size="lg" @click="this.$router.push('/recipient-public')" style="margin-top:20px; margin-bottom: 20px;">Etsi kartalta</MDBBtn>
          </MDBCol>
        </MDBRow>


<!--        <MDBBtn outline="success" size="lg" block @click="addRecipient" style="margin-top:20px; margin-bottom: 20px;" type="submit">Tee tilaus</MDBBtn> -Or- -->
<!--        <MDBBtn outline="secondary">Vaata kaardilt</MDBBtn>-->
      </form>


      <!--
      <h1>{{result}}</h1>
      <MDBBtn outline="success" size="lg" block @click="this.$router.push('/received')">Asiakkaan paneeli</MDBBtn>

      <MDBBtn outline="success" size="lg" block @click="findRecipients">findRecipients</MDBBtn>



      <MDBBtn outline="danger" size="lg" block @click="remFile">Remove file</MDBBtn>
      -->
      <MDBBtn outline="danger" size="lg" block @click="cancelRecipientForm" style="margin-bottom: 50px;"> Poistu </MDBBtn>


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
  MDBTextarea
} from "mdb-vue-ui-kit";
import recipientService from '../service/recipients'
import uploadService from '../service/image'
import proData from '@/components/profession/proList'

//import ImageSelect from '../components/ImageSelect.vue'
import { format } from 'date-fns'
import {ref} from "vue";



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
    //ImageSelect,
    VueDatePicker
  },
  data () {

    return {
      recipientId: null,
      header: "",
      address: null,
      lat: null,
      lng: null,
      isNoDate: false,
      professional: "",
      addFile: null,
      dateTest: null,
      calendarTooltips: [],
      value: null,
      aaa: "",
      file: null,
      f: null,
      prodata: proData
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
    //const file = ref(null)


    return {
      date,
      explanation,

      isImageSelected,
      imgId,
      showImage,
      isShowImage,
      isUploaded,
      isNotSelected


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
    cancelRecipientForm () {
      if (this.currentRouteName === 'r-form') {
        this.$router.push('/received')
        //console.log("Name is r-form")
      } else {
        this.$router.push('/')
      }

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
      if (this.address === null) {
        this.address = this.recipientBookings[0].address;
        this.lat = this.recipientBookings[0].latitude;
        this.lng = this.recipientBookings[0].longitude;
      }
      if (this.professional === "") {
        this.isNotSelected = true;
      }
      if (!this.date) {
        this.isNoDate = true;
      }
      if (this.date) {
        recipient = {
          created: this.date,
          header: this.header,
          address: this.address,
          latitude: this.lat,
          longitude: this.lng,
          professional: this.professional,
          year: this.date.getFullYear(),
          month: this.date.getMonth(),
          day: this.date.getDate(),
          hours: this.date.getHours(),
          minutes: this.date.getMinutes(),
          description: this.explanation,
          imageId: this.imgId
        }
      }


      if (this.header && this.address && this.professional && this.date && this.explanation) {
        const booking = await recipientService.addRecipient(this.recipientId, recipient)
        this.$emit('booking:update', booking)
        console.log("Booking--- " + booking);
        this.$router.push('/received')
      } else {
        console.log("Something went wrong")
        console.log("Aadress " + this.address)
        console.log("header " + this.header)
        console.log("Explanation " + this.explanation)
        console.log("Profession " + this.professional)
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
  width: 100%;

  color: white;
  background-color: #87958e;
  border: 1px solid #ccc;
  display: inline-block;
  padding: 10px 12px;
  margin-bottom: 10px;
  cursor: pointer;
}



</style>