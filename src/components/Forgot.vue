<template>
<!--  <form style="margin-top: 100px;" @submit.prevent="handleSubmitForgot">-->
<!--    <h3>Forgot password</h3>-->
<!--    <div class="form-group">-->
<!--      <label>Email</label>-->
<!--      <input type="email" class="form-control" placeholder="Email" v-model="emailConfirmation"/>-->

<!--      <button class="btn btn-primary btn-block">Submit</button>-->
<!--    </div>-->
<!--  </form >-->
  <MDBContainer>
    <form style="margin-top: 100px;" @submit.prevent="handleSubmitForgot">

      <MDBInput
          type="email"
          id="giveEmail"
          white
          size="lg"
          label="Anna oma sähköpostisi"
          v-model="emailConfirmation"
          wrapperClass="mb-4"
      />
      <MDBBtn type="submit" block color="success">Lähetä</MDBBtn>
    </form>
  </MDBContainer>
</template>

<script>
import authService from '../service/pwAuth'
import {
  MDBContainer,
    MDBInput,
    MDBBtn
} from 'mdb-vue-ui-kit'
export default {
  name: "Forgot",
  components: {
    MDBContainer,
    MDBInput,
    MDBBtn
  },
  data () {
    return {
      emailConfirmation: "",
      giveEmail: ""
    }
  },
  methods: {
    async handleSubmitForgot () {
      const data = {
        email: this.emailConfirmation
      }
      console.log("email for reset " + data.email)
      // -----
      await authService.forgot({email: this.emailConfirmation});

      // const response = await axios.post('Forgot', {
      //   email: this.email
      // })
      // console.log("Responce " + response);
    }
  }
}
</script>

<style scoped>

</style>