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
    <email-success
      :message = emailSuccessMessage
    />
    <email-error
        :message = emailErrorMessage
    />
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
import emailSuccess from '../components/notifications/successMessage'
import emailError from '../components/notifications/errorMessage'
import {
  MDBContainer,
    MDBInput,
    MDBBtn
} from 'mdb-vue-ui-kit'
export default {
  name: "Forgot",
  components: {
    emailSuccess,
    emailError,
    MDBContainer,
    MDBInput,
    MDBBtn
  },
  data () {
    return {
      emailConfirmation: "",
      emailSuccessMessage: null,
      emailErrorMessage: null,
      giveEmail: ""
    }
  },
  methods: {
    async handleSubmitForgot () {
      if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.emailConfirmation)) {
        this.emailErrorMessage = "Anna kelvollinen sähköpostiosoite!"
        setTimeout(() => {
          this.emailErrorMessage = null;
        }, 2000);
      } else {
        const data = {
          email: this.emailConfirmation
        }
        console.log("email for reset " + data.email)
        // -----
        const resetPw = await authService.forgot({email: this.emailConfirmation});
        this.emailSuccessMessage = resetPw.result;
        setTimeout(() => {
          this.emailSuccessMessage = null;
        }, 3000);
        console.log("Reset password result: " + resetPw.result);
      }


      // const response = await axios.post('Forgot', {
      //   email: this.email
      // })
      // console.log("Responce " + response);
    }
  }
}
</script>

<style scoped>
.success {
  color: white;
  background: #7bc47b;
  font-size: 20px;
  border: solid #0e920e;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.error {
  color: white;
  background: #f5839c;
  font-size: 20px;
  border: solid #f75959;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>