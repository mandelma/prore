<template>
  <div style="margin-top: 100px;">
    <h2 >Here is user's dialog page</h2>

    <div >
      <form @submit.prevent="joinToChat">
        <input v-model="username" placeholder="Sinu username..." />
        <input v-model="room" placeholder="Toa number..." />
        <MDBBtn size="large" type="submit">Lisa kasutaja</MDBBtn>
      </form>
    </div>

    <user-panel

        :users = users
    />


  </div>
</template>

<script>
import socket from '../socket.js'
import io from 'socket.io-client'
import UserPanel from '../components/UserPanel.vue'
import {
  ref,
  //watch
} from 'vue'
import {
  MDBBtn
} from "mdb-vue-ui-kit";

export default {
  name: "user-dialog",
  components: {
    UserPanel,
    MDBBtn
  },
  setup() {
    const socket = io("http://localhost:3001")
    const users = ref([])
    const username = ref("")
    const userID = ref("")
    const room = ref("")
    let isReady = ref(false)

    socket.on('connect', function () {
      // socket.emit('auth', "Tere!!!");
      // const uname = "nipitiri"
      // socket.auth = { uname }

    });

    socket.on('userConnected', (username) => {

      console.log(`${username} has joined`)

    })


    socket.on('userDisconnected', (username) => {
      console.log(`${username} has left`)
    })

    socket.on('getUsers', (data) => {
      users.value = data
    })



    const joinToChat = () => {
      // if (/^(([a-zA-Z0-9]{3,}))+$/.test(username.value) == false) {
      //   errorLoginMsg.value = 'Użuj minimum 3 liter lub cyfr'
      // } else {
      //   socket.emit('enterUsername', { username: username.value })
      //   username.value = ''
      //   isReady.value = true
      //   userId.value = socket.id
      // }
      socket.emit('enterUsername', { username: username.value, room: room.value})
      const uname = username.value
      socket.auth = { uname };
      username.value = ''
      room.value = ''
      isReady.value = true
      //userID.value = socket.id
    }

    return {
      socket,
      users,
      username,
      userID,
      room,
      isReady,
      joinToChat
    }
  },
  mounted() {

  },
  created() {
    // const sessionID = localStorage.getItem("sessionID");
    //
    // if (sessionID) {
    //   //this.usernameAlreadySelected = true;
    //   socket.auth = { sessionID };
    //   socket.connect();
    // }
    //
    // socket.on("session", ({ sessionID, userID }) => {
    //   // attach the session ID to the next reconnection attempts
    //   socket.auth = { sessionID };
    //   // store it in the localStorage
    //   localStorage.setItem("sessionID", sessionID);
    //   // save the ID of the user
    //   socket.userID = userID;
    // });

  },


  methods: {
    lisa() {
      console.log("Submitted")
      const room = 1000
      const name = "Tiiu"
      socket.emit('join', { name, room }, (error) => {
        if (error) {
          alert(error);
        }
      })
    }
  }


}
</script>

<style scoped>

</style>