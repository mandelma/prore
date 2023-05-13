<template>
 <div>
   <MDBContainer>
     <h2 style="margin-top: 20px;">Profiili sivu</h2>
     <MDBTable style="font-size: 24px; text-align: left;">
       <tbody>
       <tr>
         <td>
           Etunimi:
         </td>
         <td>
           xxx
         </td>
       </tr>
       <tr>
         <td>
           Sukunimi:
         </td>
         <td>
           xxx
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
       </tbody>
     </MDBTable>
     <MDBBtn outline="danger" block size="lg" @click="$router.push('/')">Poistu sivulta</MDBBtn>
   </MDBContainer>
 </div>
</template>

<script>
import {
  MDBContainer,
  MDBTable,
  MDBBtn,
}from "mdb-vue-ui-kit";
export default {
  name: "user-profile",
  props: {
    loggedInUser: Object
  },
  components: {
    MDBContainer,
    MDBTable,
    MDBBtn
  }
}
</script>

<style scoped>

</style>