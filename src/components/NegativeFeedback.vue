<template>
  <div>
    <MDBListGroup light small style="text-align: left;">
      <MDBListGroupItem>19.04.2023 Huias täiega ja tegi sitta!</MDBListGroupItem>
      <MDBListGroupItem>05.05.2023 Võttis ainult raha ja jättis töö tegemata. Ainult jõi ja suitsetas kogu aeg!</MDBListGroupItem>

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
  name: "negative-feedback",
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
      this.$emit('close:comments', false)
    }
  }
}
</script>

<style scoped>

</style>