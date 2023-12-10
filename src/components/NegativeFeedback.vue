<template>
  <div>
    <MDBListGroup light small style="text-align: left;" v-for="data in feedback" :key="data.id">
      <MDBListGroupItem>{{ data.neg }}</MDBListGroupItem>


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
  props: {
    feedback: Array
  },
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