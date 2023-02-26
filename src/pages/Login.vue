<template>
  <div>
    <!-- Login -->

    <MDBContainer style="margin-top: 50px;">
      <form>
        <!-- Email input -->
        <MDBInput
            type="text"
            label="Käyttäjätunnus"
            id="form2Username"
            v-model="form2Username"
            wrapperClass="mb-4"
        />
        <!-- Password input -->
        <MDBInput
            type="password"
            label="Salasana"
            id="form2Password"
            v-model="form2Password"
            wrapperClass="mb-4"
        />
        <!-- 2 column grid layout for inline styling -->
        <MDBRow class="mb-4">
          <MDBCol class="d-flex justify-content-center">
            <!-- Checkbox -->
            <MDBCheckbox
                label="Muista minut"
                id="form2LoginCheck"
                v-model="form2LoginCheck"
                wrapperClass="mb-3 mb-md-0"
            />
          </MDBCol>
          <MDBCol>
            <!-- Simple link -->
            <a href="#!">Unohtuiko salasana?</a>
          </MDBCol>
        </MDBRow>
        <!-- Submit button -->
        <MDBBtn outline="primary" size="lg" block @click="login"> Kirjaudu </MDBBtn>

        <!-- Register buttons -->
        <div class="text-center">

          <p style=" margin-top: 50px; ">Ei jäsen? <a href="#">Registeröidy</a></p>
          <p>tai kirjaudu käyttämällä:</p>
          <MDBBtn color="secondary" floating class="mx-1">
            <MDBIcon iconStyle="fab" icon="facebook-f"/>>
          </MDBBtn>

          <MDBBtn color="primary" >
            <MDBIcon iconStyle="fab" icon="google"/>
          </MDBBtn>

          <MDBBtn color="secondary" floating class="mx-1">
            <MDBIcon iconStyle="fab" icon="twitter"/>
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
  MDBRow,
  MDBCol,
  //MDBTextarea,
  MDBBtn,

  MDBIcon
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  name: "log-in",
  components: {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBRow,
    MDBCol,
    //MDBTextarea,
    MDBBtn,

    MDBIcon
  },
  setup() {
    const form7ActiveTab = ref("form7-login");
    const form2Username = ref("");
    const form2Password = ref("");
    const form7LoginCheck = ref(true);
    const form7RegisterName = ref("");
    const form7RegisterUsername = ref("");
    const form7RegisterEmail = ref("");
    const form7RegisterPassword = ref("");
    const form7RegisterPasswordRepeat = ref("");
    const form7RegsiterTermsCheck = ref(true);

    return {
      form7ActiveTab,
      form2Username,
      form2Password,
      form7LoginCheck,
      form7RegisterName,
      form7RegisterUsername,
      form7RegisterEmail,
      form7RegisterPassword,
      form7RegisterPasswordRepeat,
      form7RegsiterTermsCheck
    };
  },
  data () {
    return {

    }
  },
  methods: {
    login () {
      const user = {
        username: this.form2Username,
        name: "Sanna",
        password: this.form2Password
      }
      this.$emit('user:control', user)
      this.form2Username = ""
      this.form2Password = ""
    }
  }
}
</script>

<style scoped>

</style>