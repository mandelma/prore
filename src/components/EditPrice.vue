<template>
  <MDBContainer>
    <div class="edit-price">
      <div style="display: flex; justify-content: right;">
        <MDBIcon
            style="padding: 13px; cursor: pointer;"
            @click="cancelEdit"
            size="2x"
        >
          <i class="fas fa-undo"></i>
        </MDBIcon>
      </div>

      <MDBInput label="Uusi tuntihinta" size="lg" white v-model="price" wrapperClass="mb-4"/>

      <MDBBtn outline="success" block size="lg" @click="handleEditPrice">Kinnita</MDBBtn>
<!--      <MDBBtn outline="danger" block size="lg" @click="cancelEdit">Poistu</MDBBtn>-->
    </div>

  </MDBContainer>
</template>

<script>

import {
  MDBContainer,
  MDBBtn,
  MDBInput,
  MDBIcon
}from "mdb-vue-ui-kit";
import {ref} from "vue";
export default {
  name: "edit-price",
  setup () {
    const price = ref(null)
    return {
      price
    }
  },
  components: {
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBIcon
  },
  data () {
    return {
      errorMessage: null
    }
  },
  methods: {
    handleEditPrice () {
      this.$emit('save:editedPrice', this.price);
    },
    cancelEdit () {
      this.$emit('cancel:editPrice' , false)
      this.errorMessage = "Here is some error!"

    }
  }
}
</script>

<style scoped>

</style>