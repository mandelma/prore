<template>
  <div>
    <MDBContainer
        style="position: relative; z-index:1;
        opacity: 0.8;
        margin-top: 60px;"
    >
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
import {
  MDBContainer,
  MDBInput,
  MDBBtn
} from "mdb-vue-ui-kit";

export default {
  name: "recipient-public",
  components: {
    MDBContainer,
    MDBInput,
    MDBBtn
},
}
</script>

<style scoped>

</style>