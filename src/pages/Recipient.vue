<template>
  <div>
    <h2 style="margin-top: 50px;">hei, haluaisin löytää ammattilaisia!</h2>
  </div>
  <MDBBtn outline="danger" size="lg" block @click="backToDashboard"> Cansel </MDBBtn>
</template>

<script>
import {
  MDBBtn
} from "mdb-vue-ui-kit";
export default {
  name: "re-cipient",
  components: {
    MDBBtn
  },
  methods: {
    backToDashboard () {

    }
  }
}
</script>

<style scoped>

</style>