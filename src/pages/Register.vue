<template>
  <div>
    <h2 style="margin-top: 50px; text-align: center">- Rekisteröintilomake -</h2>
    <MDBContainer style="margin-top: 50px;">


      <form>
        <!-- 2 column grid layout with text inputs for the first and last names -->


        <MDBInput
            type="text"
            label="Yrityksen nimi"
            id="form3Username2"
            v-model="form3Username2"
            wrapperClass="mb-4"
        />
        <!-- Email input -->
        <MDBInput
            type="text"
            label="käyttäjätunnus"
            id="form3Username"
            v-model="form3Username"
            wrapperClass="mb-4"
        />
        <!-- Password input -->
        <MDBInput
            type="password"
            label="Salasana"
            id="form3Password"
            v-model="form3Password"
            wrapperClass="mb-4"
        />

        <!-- Repeat Password input -->
        <MDBInput
            type="password"
            label="Toista salasana"
            id="form3PasswordRepeat"
            v-model="form7RegisterPasswordRepeat"
            wrapperClass="mb-4"
        />

        <!-- Checkbox -->
        <MDBCheckbox
            label="Muista minut"
            id="form3SubscribeCheck"
            v-model="form3SubscribeCheck"
            wrapperClass="d-flex justify-content-center mb-4"
        />

        <!-- Submit button -->
        <MDBBtn outline="primary" size="lg" block class="mb-4" @click="getUserData"> Luo tili </MDBBtn>

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
  name: "re-gister",
  components: {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  },
  data () {
    return {
      userData: {
        name: "",
        username: "",
        password: ""
      }
    }
  },
  setup() {
    const form3FirstName = ref("");
    const form3LastName = ref("");
    const form3Username = ref("");
    const form3Password = ref("");
    const form3PasswordRepeat = ref("")
    const form3SubscribeCheck = ref(true);

    return {
      form3FirstName,
      form3LastName,
      form3Username,
      form3Password,
      form3PasswordRepeat,
      form3SubscribeCheck
    };
  },
  methods: {
    getUserData () {
      this.userData.name = this.form3FirstName + " " + this.form3LastName
      this.userData.username = this.form3Username
      this.userData.password = this.form3Password
      //console.log("User name: " + this.form3FirstName)
      this.$emit('create:user', this.userData)
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
  margin-top: 60px;
}
</style>