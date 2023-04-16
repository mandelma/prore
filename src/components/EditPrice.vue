<template>
  <MDBContainer>
    <h1>Editing price</h1>

    <MDBInput label="Tuntihinta" v-model="price" wrapperClass="mb-4"/>

    <MDBBtn outline="success" block size="lg" @click="handleEditPrice">Kinnita</MDBBtn>
    <MDBBtn outline="danger" block size="lg" @click="cancelEdit">Poistu</MDBBtn>
  </MDBContainer>
</template>

<script>

import {
  MDBContainer,
  MDBBtn,
  MDBInput
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
    MDBInput
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