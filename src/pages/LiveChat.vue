<template>
  <div id="app">
<!--    <providerPanel
        :bookings = bookings
        :bookingsHistory = bookingsHistory
    />-->
    <MDBContainer class="chatPanel">
      <select-user

          @inpuut="onUsernameSelection"
          :un = un
          :ri = ri
      />



      <chat

          :me = loggedInUser
          :uname = un
          :rm = ri
          :isUserRemoved = isUserRemoved
      />
      <p>See nupp on hetkel ajutiselt, mis aitab eemaldada chati kasutaja.</p>
      <MDBBtn outline="danger" block size="lg" @click="removeChatUser">Remove chat user</MDBBtn>

<!--
      <MDBBtn outline="info" block size="lg" @click="newChat">Alusta chat</MDBBtn>

      <MDBBtn outline="info" block size="lg" @click="updateRoom">Update room</MDBBtn>

      <MDBBtn outline="danger" block size="lg" @click="removeChatUser">Remove chat user</MDBBtn>
-->


<!--      <MDBBtn outline="success" block size="lg" @click="reloader">Start chat</MDBBtn>
      <MDBBtn outline="danger" block size="lg" @click="removeChatUser">Remove chat user</MDBBtn>
      <MDBBtn outline="info" block size="lg" @click="updateRoom">Update room</MDBBtn>
      <MDBBtn outline="info" block size="lg" @click="joinAllRooms">All client rooms</MDBBtn>

      <MDBBtn outline="info" block size="lg" @click="openxxx">Openxxxx</MDBBtn>-->
    </MDBContainer>


  </div>
</template>

<script>
// v-if="!usernameAlreadySelected"
import { MDBContainer, MDBBtn
} from 'mdb-vue-ui-kit';
import SelectUser from '../components/chatio/SelectUser.vue'
import chat from '../components/chatio/Chat.vue'
//import providerPanel from'./ProviderPanel.vue'

import socket from '../socket'


export default {
  name: "LiveChat",
  props: {
    loggedInUser: Object,
    bookings: Array,
    bookingsHistory: Array,
    un: String,
    ri: String
  },
  components: {
    //providerPanel,
    MDBContainer,
    MDBBtn,
    SelectUser,
    chat
  },
  data() {
    return {
      usernameAlreadySelected: false,
      test: '',
      username: "",
      room: "",
      isUserRemoved: false
    };
  },

  onMounted() {

    //console.log("Heiiiii")
  },
  beforeMount() {


  },

  mounted() {
    //console.log("Logged user: " + this.loggedInUser.username)
  },

  methods: {
    newChat () {
      console.log("Aaaaaaaa")
      let username = "alla";
      let room = "tuba";

      this.usernameAlreadySelected = true;
      socket.auth = { username, room };
      socket.connect();
    },
    openxxx() {

      //console.log("xxx" + test)
      //this.onUsernameSelection("Tata", "kamber")
    },
    reloader () {
      window.location.reload()
    },
    socketResetTest() {
      //console.log("Socket reset test")
      socket.disconnect()
      socket.connect()
    },
    onUsernameSelection(username, room) {


      console.log("Aaaaaaaa")
      this.username = username;
      this.room = room;

      this.usernameAlreadySelected = true;
      socket.auth = { username, room };
      socket.connect();
    },
    joinAllRooms () {
      const rooms = ["111", "222"];
      socket.emit('joinAllClientRooms', rooms);
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


  created() {

    console.log("Heiiiii")
    this.socketResetTest()
    const sessionID = localStorage.getItem("sessionID");
    console.log("Session id " + sessionID)
    if (sessionID) {
      this.usernameAlreadySelected = true;
      socket.auth = { sessionID };
      socket.connect();
    }

    socket.on("session", ({ sessionID, userID, roomName }) => {
      // attach the session ID to the next reconnection attempts
      socket.auth = { sessionID };
      // store it in the localStorage
      localStorage.setItem("sessionID", sessionID);


      // save the ID of the user
      socket.userID = userID;
      socket.roomName = roomName;
    });

    socket.on("connect_error", (err) => {
      if (err.message === "invalid username") {
        this.usernameAlreadySelected = false;
      }
    });
  },
  unmounted() {
    socket.off('connect_error');
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