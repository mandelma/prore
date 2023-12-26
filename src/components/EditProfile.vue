<template>
  <MDBBtnClose
      style="float: right; cursor: pointer;"
      @click="closeEditProfile"
  />
  <MDBContainer>
    <MDBTable  borderless style="font-size: 14px; text-align: left;">
      <tbody>
      <tr>
        <td>
          Etunimi:
        </td>
        <td>
          {{loggedInUser.firstName}}
        </td>
      </tr>
      <tr>
        <td>
          Sukunimi:
        </td>
        <td>
          {{loggedInUser.lastName}}
        </td>
      </tr>
      <tr>
        <td>
          Käyttäjätunnus:
        </td>
        <td>
          {{loggedInUser.username}}
        </td>
      </tr>
      <tr>
        <td>
          Osoite
        </td>
        <td>
          <p style="color:blue;">{{userData.address}}</p>
          <MDBInput id="address" label="Anna uusi osoitteesi" v-model="newAddress" />
        </td>
      </tr>
      <tr>
        <td>
          Sähköposti
        </td>
        <td>
          <MDBInput label="mail" v-model="mail" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <MDBBtn block size="lg" color="success" @click="saveProfileData">Tallenna tiedot</MDBBtn>
        </td>
      </tr>
      </tbody>
    </MDBTable>
  </MDBContainer>
</template>

<script>
/*global google*/
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBBtnClose,
  MDBTable
} from 'mdb-vue-ui-kit'
export default {
  name: "EditProfile",
  props: {
    loggedInUser:Object,
    userData: Object
  },
  components: {
    MDBContainer,
    MDBInput,
    MDBBtnClose,
    MDBBtn,
    MDBTable
  },
  data () {
    return {
      lat: null,
      long: null,
      address: null,
      mail: "",
      newAddress: ""
    }
  },
  mounted() {
    const center = { lat: 50.064192, lng: -130.605469 };
    // Create a bounding box with sides ~10km away from the center point
    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1,
    };
    const input = document.getElementById("address");
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
      this.long = place.geometry.location.lng()

      this.address = place.formatted_address
      console.log(place)
    })
  },
  methods: {
    closeEditProfile () {
      this.$emit("goBackFromEditProfile")
    },
    saveProfileData () {
      const addressData = {
        latitude: this.lat,
        longitude: this.long,
        address: this.address
      }
      this.$emit("profile:data", addressData);
      this.$emit("saveProfileImg");
    },

  }
}
</script>

<style scoped>

</style>