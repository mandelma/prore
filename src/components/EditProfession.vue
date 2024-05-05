<template>
  <MDBContainer>
    <MDBIcon
        style="float:right; cursor: pointer;"
        @click="cancelEditProfession"
        size="3x"
    >
      <i class="fas fa-undo"></i>
    </MDBIcon>
    <div v-if="provider && provider.profession.length === 1">

      <MDBTable  borderless style="font-size: 18px; text-align: left;">
        <tbody>
        <tr v-for="(pro, index) in provider.profession" :key="index">
          <td>
            {{pro}}

<!--              <MDBBtn @click="reset">Reset select</MDBBtn>-->
<!--            <MDBBtnClose v-if="provider && provider.profession.length > 1" @click="removeProfession(index)"/>-->

          </td>
          <td>
            <form @submit.prevent="submit">
              <select style="padding: 10px; background-color: darkgrey;" id="edit_profession" v-model="selected" @click="editProfession(index)">
                <option value="">Vaihda ammattisi</option>
                <template v-for="option in proList">

                  <!-- if the `group` property is truthy -->
                  <optgroup v-if="option.group" :label="option.group" :key="option.group">
                    <option v-for="opt in option.options" :value="opt.label" :key="opt.label">
                      {{ opt.label }}
                    </option>
                  </optgroup>
                  <!-- otherwise -->
                  <option v-else :value="option" :key="option.value">
                    {{ option.label }}
                  </option>
                </template>
              </select>

<!--              <input id="reset" type="reset" value="reset" />-->

            </form>
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
            <MDBBtnClose @click="removeProfession(index, pro)"/>
          </td>
        </tr>
        </tbody>
      </MDBTable>
    </div>

    <MDBBtn block color="primary" size="lg" @click="addProfessionPressed">Lisää ammatti</MDBBtn>

    <select
        v-if="isAddProfession"
        style="background-color: lightgrey; width: 100%; padding: 10px; margin-top: 20px;"
        id="new_profession"
        v-model="selectedNewProfession"
        @click="addNewProfession"
    >
      <option value="">Anna uusi ammatti</option>
      <template v-for="option in proList">

        <!-- if the `group` property is truthy -->
        <optgroup v-if="option.group" :label="option.group" :key="option.group">
          <option v-for="opt in option.options" :value="opt.label" :key="opt.label">
            {{ opt.label }}
          </option>
        </optgroup>
        <!-- otherwise -->
        <option v-else :value="option" :key="option.value">
          {{ option.label }}
        </option>
      </template>
    </select>



    <MDBBtn v-if="additionalProfession.length > 2" outline="success" block size="lg" @click="handleAddAdditionalProfession">Kinnita uus amet</MDBBtn>
    <MDBBtn outline="danger" block size="lg" style="margin-top: 20px;" @click="cancelEditProfession">Poistu</MDBBtn>
  </MDBContainer>
</template>

<script>


import {
  MDBContainer,
  MDBBtn,
  //MDBInput,
  MDBTable,
  MDBIcon,
  MDBBtnClose
}from "mdb-vue-ui-kit";
import {ref} from "vue";
import list from '@/components/profession/proList'
export default {
  name: "editProfession",
  props: {
    provider: Object
  },
  components: {

    MDBContainer,
    MDBBtn,
    //MDBInput,
    MDBTable,
    MDBIcon,
    MDBBtnClose
  },
  setup () {
    const profession = ref("")
    const selected = ref("")
    const selectedNewProfession = ref("")
    const isAddProfession = ref(false)
    const additionalProfession = ref("")
    const proList = ref(list)
    return {
      profession,
      selected,
      selectedNewProfession,
      isAddProfession,
      additionalProfession,
      proList
    }
  },
  methods: {
    addProfessionPressed () {
      this.selectedNewProfession = "";
      this.isAddProfession = true;

      //this.$emit("add:profession", this.profession);
    },
    addNewProfession () {
      this.selectedNewProfession = "";
      const newProfession = document.getElementById("new_profession");

      newProfession.addEventListener("change", (event) => {

        this.isAddProfession = false;
        this.$emit("additionalProfession", event.target.value);

      })
      this.selectedNewProfession = "";

    },
    // If only one profession
    editProfession (index) {
      this.isAddProfession = false;
      const profession = document.getElementById("edit_profession");

      profession.addEventListener("change", (event) => {

        this.$emit("editProfession", index, event.target.value);
      })
      this.selected = "";
    },

    removeProfession (index, profession) {
      this.isAddProfession = false;
      this.$emit("removeProfession", index, profession);
      this.selected = ""
    },
    cancelEditProfession () {
      this.$emit("cancel:editProfession")
    },

    // cancelEdit () {
    //   console.log("Heiii")
    //   this.$emit('cancel:editPrice' , false)
    //   this.errorMessage = "Here is some error!"
    //
    // }
  }

}
</script>

<style scoped>

</style>