<template>
  <div>
    <form>
      <div class="text-center mb-3">
        <p>Kirjaudu käyttämällä:</p>
        <MDBBtn color="secondary" floating class="mx-1">
          <MDBIcon iconStyle="fab" icon="facebook-f" />>
        </MDBBtn>

        <MDBBtn color="secondary" floating class="mx-1">
          <MDBIcon iconStyle="fab" icon="google" />
        </MDBBtn>

        <MDBBtn color="secondary" floating class="mx-1">
          <MDBIcon iconStyle="fab" icon="twitter" />
        </MDBBtn>

        <MDBBtn color="secondary" floating class="mx-1">
          <MDBIcon iconStyle="fab" icon="github" />
        </MDBBtn>
      </div>

      <p class="text-center">tai:</p>

      <!-- Email input -->
      <MDBInput
          type="text"
          size="lg"
          label="Käyttäjätunnus"
          id="loginUsername"
          v-model="loginUsername"
          wrapperClass="mb-4"
      />

      <!-- Password input -->
      <MDBInput

          type="password"
          size="lg"
          label="Salasana"
          id="loginPassword"
          v-model="loginPassword"
          wrapperClass="mb-4"
      />

      <!-- 2 column grid layout for inline styling -->
      <MDBRow class="mb-4">
        <MDBCol class="d-flex justify-content-center">
          <!-- Checkbox -->
          <MDBCheckbox
              label="Muista minut"
              id="loginCheck"
              v-model="loginCheck"
              wrapperClass="mb-3 mb-md-0"
          />
        </MDBCol>

        <MDBCol>
          <!-- Simple link -->
          <a href="#!">Unohtuiko salasana?</a>
        </MDBCol>
      </MDBRow>

      <!-- Submit button -->
      <MDBBtn color="primary" size="lg" block class="mb-4" @click="userLoginData"> Kirjaudu </MDBBtn>

      <!-- Register buttons -->
      <div class="text-center">
        <p>Ei jäsen? <span id="reg" @click="this.$router.push('/register')" style="cursor: pointer;">rekisteröidy</span></p>
      </div>
    </form>
  </div>
</template>

<script>
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  name: "login-form",
  components: {
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBIcon
  },
  setup() {

    const loginUsername = ref("");
    const loginPassword = ref("");
    const loginCheck = ref(true);

    return {

      loginUsername,
      loginPassword,
      loginCheck,
    };
  },
  methods: {
    // Data from login fields forward
    userLoginData () {
      const userLogin = {
        username: this.loginUsername,
        password: this.loginPassword
      }
      this.$emit('login:data', userLogin)
      this.emptyLoginFields()
    },
    // empty login form fields after login
    emptyLoginFields () {
      this.loginUsername = ""
      this.loginPassword = ""
      this.loginCheck = false
    }
  }
}
</script>

<style scoped>
#reg {
  padding: 10px;
  color: blue;
}
</style>