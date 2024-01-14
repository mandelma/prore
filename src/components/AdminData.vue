<template>
  <MDBContainer>
    <ol v-for="provider in dataList" :key="provider.id">
      <li>
        provider {{provider.user.username}}
      </li>
    </ol>
    <h3>Else more {{more}}</h3>
  </MDBContainer>
</template>

<script>
import {
  MDBContainer,
  //MDBRow,
  //MDBCol,
  //MDBBtn
} from 'mdb-vue-ui-kit'
export default {
  name: "AdminData",
  props: {
    dataList: Array,
    more: String
  },
  components: {
    MDBContainer,
    //MDBRow,
    //MDBCol,
    //MDBBtn
  },
}
</script>

<style scoped>

</style>