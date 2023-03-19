<template>
  <div>
    <h2 style="margin-top: 50px; text-align: center">- Rekisteröintilomake -</h2>
    <MDBContainer style="margin-top: 50px;">


      <form>
        <!-- 2 column grid layout with text inputs for the first and last names -->
        <!-- First name input -->
        <MDBInput
            type="text"
            size="lg"
            label="Etunimi"
            id="registerFirstName"
            v-model="registerFirstName"
            wrapperClass="mb-4"
        />

        <!-- Last name input -->
        <MDBInput
            type="text"
            size="lg"
            label="Sukunimi"
            id="registerLastName"
            v-model="registerLastName"
            wrapperClass="mb-4"
        />

        <!-- Username input -->
        <MDBInput
            type="text"
            size="lg"
            label="käyttäjätunnus"
            id="registerUsername"
            v-model="registerUsername"
            wrapperClass="mb-4"
        />
        <!-- Password input -->
        <MDBInput
            type="password"
            size="lg"
            label="Salasana"
            id="registerPassword"
            v-model="registerPassword"
            wrapperClass="mb-4"
        />

        <!-- Repeat Password input -->
        <MDBInput
            type="password"
            size="lg"
            label="Toista salasana"
            id="registerPasswordRepeat"
            v-model="registerPasswordRepeat"
            wrapperClass="mb-4"
        />

        <!-- Checkbox -->
        <MDBCheckbox
            label="Muista minut"
            size="lg"
            id="registerSubscribeCheck"
            v-model="registerSubscribeCheck"
            wrapperClass="d-flex justify-content-center mb-4"
        />

        <!-- Submit button -->
        <MDBBtn outline="primary" size="lg" block class="mb-4" @click="userData"> Luo tili </MDBBtn>

        <!-- Register buttons -->
        <div class="text-center">
          <p>Tai registeröidy käyttämällä:</p>
          <MDBBtn color="secondary" floating class="mx-1">
            <MDBIcon iconStyle="fab" icon="facebook-f" />>
          </MDBBtn>

          <MDBBtn color="secondary" floating class="mx-1">
            <MDBIcon iconStyle="fab" icon="google" />
          </MDBBtn>

          <MDBBtn color="secondary" floating class="mx-1">
            <MDBIcon iconStyle="fab" icon="twitter" />
          </MDBBtn>
        </div>
      </form>
    </MDBContainer>

  </div>

</template>

<script>
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  name: "app-register",
  components: {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  },
  data () {
    return {

    }
  },
  setup() {
    const registerFirstName = ref("");
    const registerLastName = ref("");
    const registerUsername = ref("");
    const registerPassword = ref("");
    const registerPasswordRepeat = ref("");
    const registerSubscribeCheck = ref(true);
    return {
      registerLastName,
      registerFirstName,
      registerUsername,
      registerPassword,
      registerPasswordRepeat,
      registerSubscribeCheck
    };
  },
  methods: {
    // New user data to send forward
    userData () {
      const newUser = {
        firstName: this.registerFirstName,
        lastName: this.registerLastName,
        username: this.registerUsername,
        password: this.registerPassword
      }

      this.$emit('register:data', newUser)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>