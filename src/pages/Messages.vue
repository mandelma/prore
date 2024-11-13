<template>
  <MDBContainer style="padding-top: 50px;">
    <div v-for="note in notes" :key="note.id">
      <MDBCard text="white" bg="dark" class="mb-3">
        <MDBCardBody>
          <MDBCardTitle style="display: flex; justify-content: right; color: limegreen;"
          >
            <p style="cursor:pointer;" @click="removeNote(note.id)">Selvä</p>
          </MDBCardTitle>
          <MDBCardText>
            {{note.content}}
          </MDBCardText>
          <MDBCardFooter class="text-muted">{{dateStr(note.time)}}</MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </div>
  </MDBContainer>

</template>

<script>
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  //MDBBtn

} from 'mdb-vue-ui-kit'
import df from '../components/controllers/formatDate'
//import messageService from "@/service/messages";
export default {
  name: "Messages",
  props: {
    notes: Array
  },
  components: {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,

    //MDBBtn
  },
  data () {
    return {
      user: null,
      messages: this.notes,
      dateStr: df
    }
  },
  mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      this.user = JSON.parse(loggedUserJSON)
    }

  },
  methods: {
    async removeNote (id) {
      //console.log("Note id is: " + id);
      //await messageService.removeSelectedMessage(this.user.id, id);
      this.$emit("remove_note", id);
    },
  }
}
</script>

<style scoped>

</style>