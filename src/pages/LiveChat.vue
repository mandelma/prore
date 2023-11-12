<template>
  <div style="margin-top: 0;">
<!--    Test between app {{test}}-->
<!--    users{{chatusers}}-->
<!--    <form @submit.prevent="submit">-->
<!--      <button type="submit">Käivita dialog server</button>-->
<!--    </form>-->

<!--    selected user {{selecteduser}}-->

    <div v-for="(user, i) in chatusers" :key="i">
      <User
          :user = user
          :selected="selecteduser === user"
          @select="selectUser(user)"
      />
    </div>



    <MessagePanel
        v-if="selecteduser"
        :user="selectedUser"
        :messages = messages
        @new:message="onMessage"
    />

  </div>
</template>

<script>
/* eslint-disable */

// v-if="!usernameAlreadySelected"

//import { MDBContainer, MDBBtn} from 'mdb-vue-ui-kit';

//import SelectUser from '../components/chatio/SelectUser.vue'
//import chat from '../components/chatio/Chat.vue'

//import providerPanel from'./ProviderPanel.vue'
import User from "../components/chatio/User.vue"
import MessagePanel from "../components/chatio/MessagePanel.vue"
import socket from '../socket'


export default {
  name: "live-chat",
  props: {
    //selectedUser: Object,
    selecteduser: null,
    test: String,
    chatusers: Array,
    messages: Array,
    newMessageRoom: String,
    loggedInUser: Object,
    bookings: Array,
    bookingsHistory: Array,
    un: String,
    ri: String
  },
  components: {
    User,
    MessagePanel
    //providerPanel,
    //MDBContainer,
    //MDBBtn,
    //SelectUser,
    //chat
  },
  data() {
    return {
      user: {},
      selectedUser: null,
      users: [],
      msg: "",
      //messages: [],
      userId: null,
      username: "",
      room: "",
      count: 0
    };
  },



  methods: {
    sendMessage: function () {
      if (this.msg !== "") {
        socket.emit("msg", this.msg);
        this.msg = "";
      }
    },
    startChat () {
      let room = "userdialog";
      let username = "eka"
      socket.emit('credentials', {
        userID: this.loggedUser.id,
        username: username,
        room: room
      })
    },
    submit() {
      let username = "toka"
      let id = "3333333--33333"
      let room = "room-dialog"
      //socket.emit("newUser", username, id, room);
    },


    selectUser(user) {
      this.$emit("select:user", user)
      this.selectedUser = user;
    },


    onMessage(content, date) {
      this.$emit("on:message", content, date);
    },

    renderChat () {
      this.count ++
    },
    newChat () {
      console.log("Aaaaaaaa")
      let username = "alla";
      let room = "tuba";

      this.usernameAlreadySelected = true;
      socket.auth = { username, room };
      socket.connect();
    },

    onUsernameSelection(username, room) {


      console.log("Aaaaaaaa")
      this.username = username;
      this.room = room;

      this.usernameAlreadySelected = true;
      socket.auth = { username, room };
      socket.connect();
    },

    updateRoom() {
      //this.removeChatUser();

      socket.emit('updateRoom', "uus-tuba");
      //socket.emit('joinAllRooms')
      socket.on("get room users", (users) => {
        this.users = users
      })
      this.socketResetTest();
      //location.reload();

    },
    removeChatUser () {
      console.log("Remove chat user")

      socket.emit('unsubscribe')
      window.localStorage.removeItem('sessionID')
      //this.isUserRemoved = true;
      socket.on("get room users", (users) => {
        this.users = users
      })

      location.reload()

    },
  },

  computed: {
    isValid() {
      return this.msg.length > 0;
    },
  },


  mounted() {
    //this.joinServer();
  },

  unmounted() {
    //socket.off('connect_error');
    //socket.off("disconnect");
  }
}
</script>

<style scoped>
/*body {*/
/*  margin: 0;*/
/*}*/


/*@font-face {*/
/*  font-family: Lato;*/
/*  //src: url("/fonts/Lato-Regular.ttf");*/
/*  src: "~/public/fonts/Lato-Regular.ttf";*/
/*}*/


.chatPanel {

  font-family: Lato, Arial, sans-serif;
  font-size: 14px;
  margin-top: 200px;
}
</style>