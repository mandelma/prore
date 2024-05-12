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

      <MDBTable  borderless style="font-size: 18px;  text-align: left;">
        <tbody>
        <tr v-for="(pro, index) in provider.profession" :key="index">
          <td>
            {{pro}}

<!--              <MDBBtn @click="reset">Reset select</MDBBtn>-->
<!--            <MDBBtnClose white v-if="provider && provider.profession.length > 1" @click="removeProfession(index)"/>-->

          </td>
          <td>
            <form @submit.prevent="submit">

              <div style=" margin-bottom: 20px;" >
                <Dropdown @change="changeCurrentProfession(index)" v-model="selected" :options="proList"   filter optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Valitse ammattilainen" class="w-full md:w-100rem">

                  <template value="slotProps" >
                    <div v-if="slotProps.value" >
                      <!--              <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />-->
                      <div >{{ slotProps.value.label }}</div>
                    </div>
                    <span v-else>
              {{ slotProps.placeholder }}
            </span>
                  </template>
                  <template  #optiongroup="slotProps"  >
                    <div style="" class="flex align-items-center">
                      <!--              <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />-->
                      <div >{{ slotProps.option.label }}</div>
                    </div>
                  </template>
                </Dropdown>
              </div>


<!--              <select style="padding: 10px; background-color: darkgrey;" id="edit_profession" v-model="selected" @click="editProfession(index)">-->
<!--                <option value="">Vaihda ammattisi</option>-->
<!--                <template v-for="option in proList">-->

<!--                  &lt;!&ndash; if the `group` property is truthy &ndash;&gt;-->
<!--                  <optgroup v-if="option.group" :label="option.group" :key="option.group">-->
<!--                    <option v-for="opt in option.options" :value="opt.label" :key="opt.label">-->
<!--                      {{ opt.label }}-->
<!--                    </option>-->
<!--                  </optgroup>-->
<!--                  &lt;!&ndash; otherwise &ndash;&gt;-->
<!--                  <option v-else :value="option" :key="option.value">-->
<!--                    {{ option.label }}-->
<!--                  </option>-->
<!--                </template>-->
<!--              </select>-->

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
            <MDBBtnClose white @click="removeProfession(index, pro)"/>
          </td>
        </tr>
        </tbody>
      </MDBTable>
    </div>

    <MDBBtn block color="primary" size="lg" @click="addProfessionPressed">Lisää ammatti</MDBBtn>

    <div v-if="isAddProfession" style=" margin-bottom: 20px;" >
      <Dropdown @change="changeNewProfession" v-model="selectedNewProfession" :options="proList"   filter optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Valitse ammattilainen" class="w-full md:w-100rem">

        <template value="slotProps" >
          <div v-if="slotProps.value" >
            <!--              <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />-->
            <div >{{ slotProps.value.label }}</div>
          </div>
          <span v-else>
              {{ slotProps.placeholder }}
            </span>
        </template>
        <template  #optiongroup="slotProps"  >
          <div style="" class="flex align-items-center">
            <!--              <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />-->
            <div >{{ slotProps.option.label }}</div>
          </div>
        </template>
      </Dropdown>
    </div>

<!--    <select-->
<!--        v-if="isAddProfession"-->
<!--        style="background-color: lightgrey; width: 100%; padding: 10px; margin-top: 20px;"-->
<!--        id="new_profession"-->
<!--        v-model="selectedNewProfession"-->
<!--        @click="addNewProfession"-->
<!--    >-->
<!--      <option value="">Anna uusi ammatti</option>-->
<!--      <template v-for="option in proList">-->

<!--        &lt;!&ndash; if the `group` property is truthy &ndash;&gt;-->
<!--        <optgroup v-if="option.group" :label="option.group" :key="option.group">-->
<!--          <option v-for="opt in option.options" :value="opt.label" :key="opt.label">-->
<!--            {{ opt.label }}-->
<!--          </option>-->
<!--        </optgroup>-->
<!--        &lt;!&ndash; otherwise &ndash;&gt;-->
<!--        <option v-else :value="option" :key="option.value">-->
<!--          {{ option.label }}-->
<!--        </option>-->
<!--      </template>-->
<!--    </select>-->



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
import Dropdown from 'primevue/dropdown';
import '@/css/pro.css'
export default {
  name: "editProfession",
  props: {
    provider: Object
  },
  components: {
    Dropdown,
    MDBContainer,
    MDBBtn,
    //MDBInput,
    MDBTable,
    MDBIcon,
    MDBBtnClose
  },
  setup () {
    const profession = ref("")
    const selected = ref(null)
    const selectedNewProfession = ref(null)
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
    changeCurrentProfession (index) {
      console.log("Selected xx " + index + " " + this.selected.label);
      this.$emit("editProfession", index, this.selected.label);
      this.selected = null;
    },
    changeNewProfession () {
      console.log("New new " + this.selectedNewProfession.label);
      this.isAddProfession = false;
      this.$emit("additionalProfession", this.selectedNewProfession.label);
      this.selectedNewProfession = null;
    },
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
      //this.selected = ""
      this.selected = null;
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