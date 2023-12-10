<template>
  <div>Admin page</div>
  <MDBContainer>
    <MDBRow>
      <MDBCol>
        <MDBBtn color="orange" >
          Pakkujad
        </MDBBtn>
      </MDBCol>
      <MDBCol>

      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-vue-ui-kit'
export default {
  name: "Admin",
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
  }
}
</script>

<style scoped>

</style>