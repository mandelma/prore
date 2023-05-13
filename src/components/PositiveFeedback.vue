<template>
  <div>
    <MDBListGroup light small style="text-align: left;">
      <MDBListGroupItem>22.01.2023 Väga hea töö! Kiidan tegijat</MDBListGroupItem>
      <MDBListGroupItem>05.03.2023 Super, ainult parimad sõnad tehtud töö kohta. Soovitan soojalt!!</MDBListGroupItem>

    </MDBListGroup>
    <MDBBtn block outline="secondary" size="lg" @click="closeFeedback">Poistu kommenteistä</MDBBtn>
  </div>
</template>

<script>
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn
}from "mdb-vue-ui-kit";

export default {
  name: "positive-feedback",
  components: {
    MDBListGroup,
    MDBListGroupItem,
    MDBBtn
  },
  data() {
    return{

    }
  },
  methods: {
    closeFeedback () {
      this.$emit('close:comments', false);
    }
  }
}
</script>

<style scoped>

</style>