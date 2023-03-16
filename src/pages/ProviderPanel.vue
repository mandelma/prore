<template>
  <div>
    <h1 style="margin-top: 50px; margin-bottom: 50px">TMI:n hallintapaneeli...</h1>
    <MDBContainer>
      <MDBTable borderless style="font-size: 16px; text-align: left;">
        <tbody>
          <tr>
            <th scope="col"></th>
            <td>Päivämäärä</td>
            <td scope="col">
              <MDBBtn outline="success" size="lg">Muokka</MDBBtn>
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Kellonaika</td>
            <td>
              <MDBBtn outline="success" size="lg">Muokka</MDBBtn>
            </td>

          </tr>
          <tr>
            <th scope="row"></th>
            <td>
              Ammati
            </td>
            <td>
              <MDBBtn outline="success" size="lg">Muokka</MDBBtn>
            </td>
          </tr>

        </tbody>
      </MDBTable>
    </MDBContainer>
  </div>
</template>

<script>
import {
  MDBContainer, MDBTable, MDBBtn
}from "mdb-vue-ui-kit";
export default {
  name: "Provider-panel",
  components: {
    MDBContainer,
    MDBTable,
    MDBBtn
  }
}
</script>

<style scoped>

</style>