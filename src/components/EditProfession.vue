<template>
  <MDBContainer>

    <div v-if="provider.profession.length === 1">

      <MDBTable  borderless style="font-size: 18px; text-align: left;">
        <tbody>
        <tr v-for="(pro, index) in provider.profession" :key="index">
          <td>
            <MDBInput
                style="margin-bottom: 20px;"
                size="lg"
                v-model="profession"
                label="Muokkaa ammattia"
            >
            </MDBInput>
          </td>
          <td>
            <MDBIcon size="2x">
              <i class="far fa-save"></i>
            </MDBIcon>
          </td>
        </tr>
        </tbody>
      </MDBTable>


<!--      <MDBBtn block color="success" size="lg">Kinnita uus amet</MDBBtn>-->
    </div>
    <div v-else>
      <MDBTable  borderless style="font-size: 18px; text-align: left;">
        <tbody>
        <tr v-for="(pro, index) in provider.profession" :key="index">
          <td>
            {{pro}}
          </td>
          <td>



          </td>
        </tr>
        </tbody>
      </MDBTable>
    </div>

    <MDBBtn block color="primary" size="lg" @click="addProfessionPressed">Lisää ammatti</MDBBtn>

    <MDBInput
        v-if="isAddProfession"
        style="margin-bottom: 20px;"
        size="lg"
        v-model="additionalProfession"
        label="Uusi ammattia"
    >
    </MDBInput>

<!--    provider {{provider}}-->
    <MDBBtn v-if="additionalProfession.length > 2" outline="success" block size="lg" @click="handleAddAdditionalProfession">Kinnita uus amet</MDBBtn>
    <MDBBtn outline="danger" block size="lg" @click="cancelEditProfession">Poistu</MDBBtn>
  </MDBContainer>
</template>

<script>
import {
  MDBContainer,
  MDBBtn,
  MDBInput,
  MDBTable,
  MDBIcon
}from "mdb-vue-ui-kit";
import {ref} from "vue";
export default {
  name: "editProfession",
  props: {
    provider: Object
  },
  components: {
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBTable,
    MDBIcon
  },
  setup () {
    const profession = ref(null)
    const isAddProfession = ref(false)
    const additionalProfession = ref("")
    return {
      profession,
      isAddProfession,
      additionalProfession
    }
  },
  methods: {
    addProfessionPressed () {
      this.isAddProfession = true;
      //this.$emit("add:profession", this.profession);
    },
    // additionalProfession () {
    //
    // },
    handleAddAdditionalProfession () {
      this.isAddProfession = false;
      this.$emit("add:profession", this.additionalProfession);
      this.additionalProfession = "";
    },
    cancelEditProfession () {
      this.$emit("cancel:editProfession")
    },
    cancelEdit () {
      console.log("Heiii")
      this.$emit('cancel:editPrice' , false)
      this.errorMessage = "Here is some error!"

    }
  }

}
</script>

<style scoped>

</style>