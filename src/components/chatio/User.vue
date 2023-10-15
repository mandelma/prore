<template>
<!--  <div v-if="user.self">-->
<!--    <div class="description">-->
<!--      <div class="name">-->

<!--        {{ user.username }} {{ user.self ? " (yourself)" : "" }}-->


<!--      </div>-->
<!--      <div v-if="user.hasNewMessages"  class="new-messages">!</div>-->
<!--      <div class="status" >-->
<!--        <status-icon-->
<!--            :connected="user.connected"-->
<!--        />-->
<!--        {{ status }}-->

<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="user" @click="onClick" :class="{ selected: selected }">
    <div class="description">
      <div class="name" >

        {{ user.username }} {{ user.self ? " (Mina ise)" : "" }}
<!--        {{ user.self ? "Chat on aktiivinen" : "saada kasutajale " + user.username + " teade"}}-->


      </div>
      <div v-if="user.hasNewMessages"  class="new-messages">!</div>
      <div class="status" >
        <status-icon

            :connected="user.connected"
        />
        {{ status }}

      </div>

    </div>
<!--    <div >
      <div v-if="user.hasNewMessages"  class="new-messages">!</div>
    </div>-->

  </div>
</template>

<script>
// v-if="user.self || user.name === 'toka' || user.usernmae === 'eka'"
// v-if="user.self && (user.username === 'toka') && (user.username === 'eka')"
//import {MDBBadge, MDBBtn} from 'mdb-vue-ui-kit'
import StatusIcon from "./StatusIcon";
export default {
  name: "chat-user",
  components: {
    //MDBBadge, MDBBtn,
    StatusIcon
  },
  props: {
    user: Object,
    firstUser: String,
    selected: Boolean,
  },
  methods: {
    onClick() {
      console.log("Clicked in user")
      this.$emit("select");
    },
  },
  computed: {
    status() {
      return this.user.connected ? "online" : "offline";
    },
  },
};
</script>

<style scoped>
.selected {
  margin: auto;
  width: 300px;
  background-color: #e3e4e6;
}

.user {
  padding: 10px;
}

.description {
  display: inline-block;
}

.status {
  color: #92959e;
}

.new-messages {
  color: white;
  background-color: red;
  width: 20px;
  border-radius: 5px;
  text-align: center;
  float: right;
  margin-left: 10px;
}
</style>
