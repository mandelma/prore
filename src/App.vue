<template>

  <MDBNavbar
      size="large"
      style="position: fixed; z-index:1;"
      position="top"
      container
      expand="xl"
      bg="light"
      class="d-flex justify-content-between"
  >
    <router-link to="/">
      <MDBNavbarBrand>
        Pro Connections
      </MDBNavbarBrand>
    </router-link>

    <MDBNavbarToggler
        right
        target="#navbarColor01"
        @click="collapse7 = !collapse7"
    ></MDBNavbarToggler>
    <MDBCollapse id="navbarColor01" v-model="collapse7">
      <MDBNavbarNav center class="mb-2 mb-lg-0">

<!--        <MDBNavbarItem linkClass="link-secondary" @click="chat">-->

<!--          dialog-->
<!--          <router-link to="/chat" >-->
<!--            dialog-->
<!--          </router-link>-->

<!--        </MDBNavbarItem>-->



<!--        <MDBNavbarItem linkClass="link-secondary">
          <router-link to="/chat" @click="renderPage">
            chat
          </router-link>

        </MDBNavbarItem>
        <MDBNavbarItem linkClass="link-secondary">
          <router-link to="/dialog" @click="renderDialogPage">
            dialog
          </router-link>

        </MDBNavbarItem>-->
        <!--
        <MDBNavbarItem href="#" linkClass="link-secondary">
          <router-link to="/" @click="collapse7 = !collapse7">
            <router-link to="/provider-form" @click="collapse7 = false">Provider</router-link>
          </router-link>
        </MDBNavbarItem>
        <MDBNavbarItem href="#" linkClass="link-secondary">
          <router-link to="/" @click="collapse7 = !collapse7">
            <router-link to="/provider-panel" @click="collapse7 = false">Provider panel</router-link>
          </router-link>
        </MDBNavbarItem>
        -->



      </MDBNavbarNav>
    </MDBCollapse>

    <MDBNavbarNav right class="mb-2 mb-lg-0 d-flex flex-row" v-if="loggedUser.token === undefined">

      <MDBNavbarItem >
        <router-link to="/login" @click="collapse7 = false" >Kirjaudu</router-link>

      </MDBNavbarItem>

    </MDBNavbarNav>

    <MDBNavbarNav right class="mb-2 mb-lg-0 d-flex flex-row" v-else>

      <MDBNavbarItem to="/chat" v-if="messageInfo.length > 0"  style="padding: 10px;">
        <MDBIcon icon="comments" size="2x"></MDBIcon>
        <MDBBadge  pill notification badge="danger">1</MDBBadge>
      </MDBNavbarItem>

      <MDBNavbarItem
          v-if="providerBookings.length > 0"
          to="/notification"

          class="me-3 me-lg-0"
          linkClass="link-secondary"
          style="padding: 10px;"
      >


        <MDBIcon icon="bell" size="2x"

                 :disabled='true'
                  @click="handleNotifications"/>
        <MDBBadge v-if="notSeenClientBookings.length > 0"
                  notification color="danger"
                  class="translate-middle p-1"
                  @click="handleNotifications"
                  pill
        >
          <span class="pill">{{notSeenClientBookings.length}}</span>
        </MDBBadge>

        <MDBBadge v-else notification color="danger" class="translate-middle p-2" pill></MDBBadge>

      </MDBNavbarItem>


      <MDBDropdown v-model="dropdownUser" style="padding: 10px;">

        <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdownUser = !dropdownUser"
        >
          <MDBIcon icon="user" size="2x"/>

<!--          size="1x"-->
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem   href="#">
            <router-link to="/profile" >
              Omat tiedot
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem v-if="recipientBookings.length > 0" href="#">
            <router-link to="/history">
              Historia
            </router-link>
          </MDBDropdownItem>
          <MDBDropdownItem
              href="#"
              @click="handleLogOut">
            Log out
          </MDBDropdownItem>


        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavbarNav>
  </MDBNavbar>

  <Notifications
    v-if="isNotification"
    @exit:notifications = handleExitNotifications
    @update:status = handleStatusUpdate
    :bookings = providerBookings

  />

  <router-view

      @login:data = "handleLogin"
      @register:data = "createUser"
      :userIsProvider = userIsProvider
      :loggedInUser = loggedUser
      :recipientBookings = recipientBookings
      @booking:update = handleRecipientBookingsUpdate

      @exit:notifications = handleExitNotifications
      @update:status = handleStatusUpdate

      @remove:booking = handleRemoveBooking

      @activate:bell = handleActivateBell
      @deactivate:bell = handleDeActivateBell

      :bookings = providerBookings
      :bookingsConfirmed = providerBookingsHistory
      :recipientConfirmedBookings = recipientConfirmedBookings
      test = "Tere"
      @to:app = fromFinal
      @finalinfo = fromFinal
      @chatCredentials = handleChat


      :chatusers = users



      @select:user = onSelectUser

      @on:message = handleMessage

      @otherUser = otherUser


  />
<!--  userIsProvider {{userIsProvider                         }}-->
<!--  xxxprovider bookings {{providerBookings}}xxx-->
<!--  new message {{newMessage}}-->

<!--  recipient bookings length{{recipientBookings.length}}
  recipient confirmed: {{recipientConfirmedBookings}}-->

<!--  {{loggedUser}}-->

<!--  <iframe src="https://deadsimplechat.com/LMOqgCkx4" width="100%" height="600px"></iframe>-->



<!--  <div >-->
    users{{users}}
    <h2 style="color: red;">{{messageInfo}}</h2>
    <div v-for="user in users" :key="user.userID">
      <User
        :user = user
        :selected="selectedUser === user"
        @select="onSelectUser(user)"
      />
    </div>

    <form @submit.prevent="submit">
      <button type="submit">Käivita server</button>
    </form>

<!--    <div>-->
<!--      <ul v-for="(user, i) in users" :key="i">-->
<!--        <li>-->
<!--          {{ user.username }}-->

<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--    messages {{messages}}-->

    <MessagePanel
        v-if="selectedUser"
        :user = selectedUser
        @new:message="handleMessage"
    />


  other user {{otheruser}}


<!--    <div class="panel">-->
<!--      <div class="messages" ref="messagesRef">-->
<!--        <div class="inner">-->
<!--          <div v-for="(message, index) in messages"-->
<!--               :key="index"-->
<!--               class="message"-->
<!--          >-->


<!--            <div>-->
<!--              {{message.user}}-->
<!--            </div>-->


<!--            <div class="text">{{message.content}}</div><br/>-->


<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
<!--      <form @submit.prevent="sendMessage">-->

<!--        <input-->
<!--            v-model="msg"-->
<!--            placeholder="Kirjoita viesti..."-->

<!--        />-->
<!--        <button :disabled="!isValid">+</button>-->
<!--      </form>-->
<!--    </div>-->

<!--  </div>-->
<!--  <form @submit.prevent="startChat">-->
<!--    <button type="submit">Liitu kõigi tubadega</button>-->
<!--  </form>-->
<!--  <form @submit.prevent="updateRoomUsers">-->
<!--    <button type="submit">Uuenda toa osalejaid</button>-->
<!--  </form>-->


</template>

<script>
/* eslint-disable */
//import dateFormat from "dateformat";

const initReactiveProperties = (user) => {
  user.hasNewMessages = false;
  user.messages = [];
};
// v-if="providerBookings.length > 0" bell
// collapse7 = !collapse7
//import HelloWorld from './components/HelloWorld.vue'
//import ContentToHome from './components/ContentToHome'
import Notifications from './pages/Notification.vue'
import userService from "./service/users"
import providerService from './service/providers'
import recipientService from './service/recipients'
import loginService from "./service/login"

//import recipientPanelFinal from "@/pages/RecipientPanelFinal";

import validation from './helpers/loginValidation.js'
import User from './components/chatio/User.vue'
import MessagePanel from "./components/chatio/MessagePanel.vue"
//import utils from '../server/utils/logger'
import {
  MDBNavbar,
  MDBCollapse,
  MDBNavbarItem,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBBadge,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-vue-ui-kit';
import { ref } from "vue";
//import socket from "@/socket";
import socket from "@/socket";
//import providerService from "@/service/providers";
//import SocketioService from './service/socketio.service.js';
//import ChatApp from './components/ChatApp.vue'
//import LiveChat from './pages/LiveChat'



export default {
  name: 'App',
  props: {
    //info: String
  },
  components: {
    //HelloWorld,
    //ContentToHome,
    //LiveChat,
    User,
    MessagePanel,
    Notifications,
    MDBNavbar,
    MDBCollapse,
    MDBNavbarItem,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBBadge,
    MDBIcon,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  },
  // created() {
  //   SocketioService.setupSocketConnection();
  // },
  data () {
    return {
      user: null,
      isNewMessage: true,
      messageInfo: "",
      tu: [],
      roomroom: "",
      userSocketID: "",
      info: "",
      users: [],
      currentRoom: "",
      messages: [],
      selectedUser: null,
      msg: "",
      isBell: false,
      loggedUser: {},
      recipientBookings: [],
      userIsProvider: {},
      providerBookings: [],
      providerBookingsHistory: [],
      recipientConfirmedBookings: [],
      isNotification: false,
      notSeenClientBookings: [],

      newMessage: "",
      otheruser: {}
      //isProviderLoggedIn: false
    }
  },
  created() {



    // socket.on("new message status", () => {
    //   console.log("New message in app")
    //   this.newMessage = "Uusi tiedote!"
    // })

    //socket.emit('unsubscribe')
    //window.localStorage.removeItem('sessionID')


  },

  /*beforeMount() {
    this.validateToken();
  },*/

  // beforeMount () {
  //   this.validateToken();
  // },

  async mounted() {

    this.validateToken();



    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.user = user;
      const username = user.username;
      const userID = user.id
      this.currentRoom = user.username + user.id;
      this.joinServer(username, userID);

    }




    //this.runEveryMinite ()
    //setInterval(this.runEveryMinite, 60*1000);

  },
  setup() {
    const collapse7 = ref(false);
    const dropdownUser= ref(false)
    const dropdownBell = ref(false)

    return {
      collapse7,
      dropdownUser,
      dropdownBell
    }
  },


  methods: {
    startChat () {
      socket.emit("join all rooms");
    },
    chat () {
      console.log("Clicked to chat")
    },


    handleChat (data) {
      console.log("Chat data: " + data.room + " " + data.userID + " " + data.username)
      this.roomroom = data.room;
      this.currentRoom = data.room;
      console.log("Tuba " + this.roomroom)
      socket.emit("update room", data.room)

    },

    fromFinal (data) {
      this.info = data
      console.log("Data from final in app: " + data)
    },


    // joinServer: function () {
    //   socket.on("loggedIn", (data) => {
    //     this.messages = data.messages;
    //     this.users = data.users;
    //   });
    //   this.listen();
    // },
    // listen: function () {
    //   socket.on("userOnline", (user) => {
    //     this.users.push(user);
    //   });
    //   socket.on("userLeft", (user) => {
    //     this.users.splice(this.users.indexOf(user), 1);
    //   });
    //   socket.on("msg", (message) => {
    //     this.messages.push(message);
    //
    //   });
    // },
    // sendMessage: function (message) {
    //   if (message !== "") {
    //     socket.emit("msg", message);
    //     this.msg = "";
    //   }
    // },

    submit(id, username, room) {

      console.log("What===")

      let data = {
        userID: id,
        username: username,
        room: room

      }

      socket.emit("new chat user", data);


    },







    joinServer: function (nickname, id) {
      console.log("Joining server: " + nickname + " ja id: " + id)
      socket.on("get socketID", (id) => {
        console.log("user socket id " + id)
        this.userSocketID = id;
      })
      socket.on("get current credentials", () => {
        socket.emit("current credentials", {
          room: this.currentRoom,
          userID: id,
          username: nickname
        })


      })
      socket.on("loggedIn", (data) => {
        this.users = []
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx")
        data.users.forEach((user) => {
          for (let i = 0; i < this.users.length; i++) {
            const existingUser =  this.users[i];
            if (existingUser.userID === user.userID) {
              existingUser.connected = user.connected;

              return;
            }
          }



          //user.self = user.userID === this.userSocketID;
          user.self = user.userID === this.loggedUser.id;
          user.messages = data.messages;
          // if (!user.self)
          //   this.selectedUser = user;


          initReactiveProperties(user);
          this.users.push(user);
          //this.users.push({userID: "640d9ec449f4c03dc724b428", username: "nipitiri", messages: []})
        });

        if (this.users.length < 2) {
          //this.users.push({userID: "640d9ec449f4c03dc724b428", username: "nipitiri", messages: []})
          //this.users.push({userID: "640d9ec449f4c03dc724b428", username: this.otheruser.username, messages: []})
        }

        this.messages = data.messages;
        //this.users = data.users;



        console.log("Room users: " + data.users.map(us => us.username))

      });
      this.listen();
    },
    listen: function () {
      socket.on("user info", (data) => {


      })
      socket.on("userOnline", (data) => {
        this.users = []

        socket.on("get socketID", (id) => {
          console.log("user socket id " + id)
          this.userSocketId = id;
        })

        data.users.forEach((user) => {
          for (let i = 0; i < this.users.length; i++) {
            const existingUser =  this.users[i];
            if (existingUser.userID === user.userID) {
              existingUser.connected = user.connected;


              return;
            }
          }



          //user.self = user.userID === socket.userID;
          user.self = user.userID === this.loggedUser.id;

          // if (!user.self)
          //   this.selectedUser = user;

          this.initReactiveProperties(user);
          this.users.push(user);
        });


          if (this.users.length < 2) {
            //console.log("Data data " + data.username)
            // this.users.push({
            //   userID: data.userID,
            //   username: data.username
            // });
          }



        // if (this.users.length < 2) {
        //   //this.users.push({userID: "640d9ec449f4c03dc724b428", username: "nipitiri", messages: []})
        //   socket.on("user user", (data) => {
        //     console.log("Data data " + data.username)
        //     this.users.push(data);
        //   })
        // }


        // data.users.forEach(user => {
        //   this.users.push(user);
        // })
        //this.users.push(user);
      });

      // socket.on("get updated users", (data) => {
      //   this.users = [];
      //   data.users.forEach(user => {
      //     this.users.push(user);
      //     this.tu.push(user)
      //   })
      // })

      // socket.on("update room users", () => {
      //
      // })

      // socket.on("get final users", data => {
      //   console.log("Final users xxx " + data.users.map(d => d.username))
      // })




      socket.on("userLeft", (id, user, room) => {
        console.log("User left " + id, user, room)

        //this.users = this.users.filter(user => user.userID !== id)

        for (let i = 0; i < this.users.length; i++) {
          const user = this.users[i];
          if (user.userID === id) {
            //user.connected = false;
            //this.user = user
            user.connected = false;
            break;
          }
        }
        //this.users.splice(this.users.indexOf(user), 1);
      });

      socket.on("xxxx", data => {
        this.users = []
        this.users = data.users
      })

      socket.on("connect", () => {
        this.users.forEach((user) => {
          if (!user.self) {
            user.connected = true;
          }


        });
      });





      socket.on("disconnect", () => {
        this.users.forEach((user) => {
          if (user.self) {
            user.connected = false;
          }
        });
      });




      socket.on("msg", (message) => {
        console.log("Selected user here " + this.selectedUser)
        message.messages.forEach(message => {
          this.messages.push(message);
        })
        //this.messages.push(message);

      });
      socket.on("new message", () => {
        console.log("Uus sõnum!!!")
        if (this.isNewMessage) {
          this.messageInfo = "Said uue sõnumi";
        } else {
          this.messageInfo = "";
        }


      })



      socket.on("private message", ({ content, date, from, to }) => {
        //console.log("S user " + this.selectedUser)

        for (let i = 0; i < this.users.length; i++) {
          const user = this.users[i];

          const fromSelf = this.userSocketId === from;
          if (user.userID === (fromSelf ? to : from)) {
            user.messages.push({
              content,
              date,
              fromSelf,
            })

            if (socket.connected) {
              socket.emit( "socket connected" );
              console.log("socket is connected")
            } else {
              console.log("socket is not connected")
              socket.emit( "socket is not connected" )
            }

            if (user !== this.selectedUser) {



              user.hasNewMessages = true;
              this.messageSeen = true;
              console.log("Users length " + this.users.length)
              //if (this.users.length > 1)
              //socket.emit("new message")
            }
            break;
          }
        }
      });
    },

    initReactiveProperties (user) {

      user.hasNewMessages = false;
      user.messages = [];
    },


    onSelectUser(user) {
      // if (!user.self) {
      //   this.selectedUser = user;
      // }
      console.log("----------Tuleb läbi--------")
      this.selectedUser = user;
      this.isNewMessage = false;
      user.hasNewMessages = false;

      this.isNewMessage = false;
      this.messageInfo = "";

    },




    sendMessage: function () {
      // if (this.msg !== "") {
      //   socket.emit("msg", this.msg);
      //   this.msg = "";
      // }


      let content = this.msg;
      //let date = dateFormat(now, 'dd-mm-yyyy,  HH:MM')

      socket.emit("private message", {
        content,
        //date,
        to: this.selectedUser.userID,
      });

      this.selectedUser.messages.push({
        content,
        date,
        fromSelf: true,
      });
    },


    otherUser (data) {
      this.otheruser = data;
      console.log("otherusernn " + data.username)
    },


    handleMessage (content, date) {
      socket.emit("private message", {
        content,
        date,
        to: this.selectedUser.userID,
      });

      this.selectedUser.messages.push({
        content,
        date,
        fromSelf: true,
      });
    },

    // submit() {
    //   let uname = "pipi";       //this.loggedUser.username;
    //   let uId = "1234567"     //this.loggedUser.id;
    //   let rm =  "vantaa"            //this.loggedUser.username;
    //   socket.emit("newUser", uname, uId, rm);
    //
    // },

    // submit() {
    //   let data = {
    //     userID: "12345",
    //     username: "mama",
    //     room: "vantaa"
    //   }
    //   console.log("submit")
    //
    //   socket.emit("new user", {data});
    //
    // },



    updateRoom () {
      //let room = this.roomroom
      //for (let i = 0; i < 2; i++)


      //socket.emit("update room", this.roomroom)


      // socket.disconnect();
      // socket.connect();
    },



    handleActivateBell (state) {
      //this.isBell = state;
      //this.providerBookings = this.userIsProvider.booking.filter(uipb => uipb.status !== "confirmed");
      console.log("Bell bell bell " + state)
    },
    handleDeActivateBell () {
      // if (this.notSeenClientBookings.length === 0) {
      //   this.isBell = state
      // }

    },
    profile () {
      this.$router.push('/profile');
      console.log("Pressed profile")
    },
    history () {
      this.$router.push('/history');
    },
    renderPage () {
      this.$router
          .push({ path: '/chat' })
          .then(() => { this.$router.go() })
    },
    renderDialogPage () {
      this.$router
          .push({ path: '/dialog' })
          .then(() => { this.$router.go() })
    },
    reload: () => {
      this.isRouterAlive = false
      setTimeout(()=>{
        this.isRouterAlive = true
      },0)
    },
    async getUsers() {
      this.users = await userService.getAll()
      //console.log("Users: " + this.users.map(u => u.username))
      //console.log("User logged in: " + this.loggedUser)
    },
    async createUser (credentials) {
      console.log("User name is here: " + credentials.firstName);
      await userService.addUser(credentials);
      //const loginUser = window.localStorage.setItem('loggedAppUser', JSON.stringify(newUser))


      const loggedInUser = await loginService.login({username: credentials.username, password: credentials.password});
      //console.log("User in appa after add " + newUser.username + " " + newUser.token)
      window.localStorage.setItem('loggedAppUser', JSON.stringify(loggedInUser));
      if (loggedInUser) {
        console.log("User name is her2e: " + loggedInUser.username);
        this.submit(loggedInUser.id, loggedInUser.username, (loggedInUser.username + loggedInUser.id))
        this.loggedUser = loggedInUser;
        this.$router.push('/');
      } else {
        console.log("Some error here with register!")
      }


    },
    async handleLogin(userData) {
      let user

      console.log("userdata: " + userData.username)

      if (userData.username !== "" && userData.password !== "") {
        user = await loginService.login(userData)
        window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
        this.loggedUser = user
        //utils.info("Sisselogimine õnnestus!!!")
        let nickName = user.username;
        let userID = user.id;
        this.validateToken();

        let username = user.username;
        let id =  user.id;
        let room = username + id

        //console.log("xx user id " + id)

        // const chatUserData = {
        //   userID: id,
        //   username: username,
        //   room: room
        // };

        //socket.emit("new chat user", chatUserData);

        this.submit(id, username, room)



        //this.joinServer (nickName, userID);
        //this.joinServer(user.username)
      }

      //socket.disconnect();
      //window.localStorage.removeItem('sessionID')


      //this.$router.push({ name: 'login-register', query: { redirect: '/recipient-form' } });

      //this.$router.push('/')

      //this.$router.replace('/recipient-form')
      //this.$router.replace(this.$route.query.from);



      if(this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect)
      }else{
        //location.reload();
        //this.$router.push('/')
        window.location.replace("/");

      }
    },
    handleLogOut () {
      window.localStorage.removeItem('loggedAppUser')
      this.loginUser = ''
      this.loggedUser = "";
      this.$router.push('/');
      //location.reload()

    },
    async handleProvider () {
      this.userIsProvider = await providerService.getProvider(this.loggedUser.id)
      //const prviderBookings = this.userIsProvider.booking
      // Bookings what provider getting from recipient
      if (this.userIsProvider) {
        this.providerBookings = this.userIsProvider.booking.filter(uipb => uipb.status !== "confirmed" && uipb.status !== "waiting");
        this.providerBookingsHistory = this.userIsProvider.booking.filter(uiph => uiph.status === "confirmed");
      }


      //this.providerBookings.filter(pb => pb.status === "confirmed" ? pb : null)

      this.notSeenClientBookings = this.providerBookings.filter(pb => pb.status === "notSeen")
      this.providerBookings.forEach(pb => {

        if (pb.status === "notSeen") {

          //this.notSeenClientBookings = this.notSeenClientBookings.concat(pb);
          //this.notSeenClientBookings.push(pb)
        }


      })
      console.log("xxxxxxxxxxx len " + this.notSeenClientBookings.length)
    },
    async handleRecipientBookings () {
      // Bookings what recipients have made
      this.recipientBookings = await recipientService.getOwnBookings(this.loggedUser.id);
      // For recipient
      this.recipientConfirmedBookings = this.recipientBookings.filter(rb => rb.status === "confirmed")
    },
    handleRecipientBookingsUpdate (booking) {
      this.recipientBookings = this.recipientBookings.concat(booking);
    },
    handleNotifications () {
      //this.isNotification = true;
      this.$router.push('/notification');
    },
    handleExitNotifications (state) {
      console.log("State is: " + state)
      this.isNotification = state;
    },
    handleStatusUpdate (id) {
      this.notSeenClientBookings = this.notSeenClientBookings.filter(nscb => nscb.id !== id ? nscb : null)
      this.handleProvider();
    },

    handleRemoveBooking (id) {
      console.log("Handling remove booking..." + id)
      this.providerBookings = this.providerBookings.filter(pb => pb.id !== id)
      // if (this.providerBookings.length === 0) {
      //   location.reload();
      // }

    },

    test () {
      console.log("xxxx " + validation)
    },
    async validateToken () {

      const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        const tokenValid = await loginService.verifyToken(user.token)
        //console.log("Tokenvalid " + tokenValid.error)
        if (tokenValid.result === "token expired") {
          window.localStorage.removeItem('loggedAppUser')
          this.loggedUser = "";
          //this.$router.push('/login');
        } else {
          //console.log("+-+-+-+-+ " + tokenValid)
          this.loggedUser = user

          //console.log("Username app " + this.loggedUser.username)


          console.log("Loged, logged user " + this.loggedUser.username)
          //const username = this.loggedUser.username;


          this.handleRecipientBookings();
          this.handleProvider();
        }
      }


      // if (Object.keys(this.loggedUser).length > 0) {
      //   console.log("aaaaaaaaaaaaaaa")
      //   const tokenValid = await loginService.verifyToken(this.loggedUser.token)
      //   console.log("xxxxxx " + tokenValid)
      //
      // }


      // if (Object.keys(this.loggedUser).length > 0) {
      //   const tokenValid = await loginService.verifyToken(this.loggedUser.token)
      //   if (tokenValid === 'token expired') {
      //     window.localStorege.clear()
      //   } else {
      //     const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
      //     const user = JSON.parse(loggedUserJSON)
      //     this.loggedUser = user
      //     console.log("User token: " + this.loggedUser.token)
      //     console.log("User id: " + this.loggedUser.id)
      //     this.handleRecipientBookings();
      //     this.handleProvider();
      //   }

      //}

      // const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
      //
      // if (loggedUserJSON) {
      //   const user = JSON.parse(loggedUserJSON)
      //   const tokenValid = await loginService.verifyToken(user.token)
      //   if (!tokenValid) {
      //     // window.localStorage.removeItem('loggedAppUser')
      //     // this.loggedUser = "";
      //     this.handleLogout();
      //
      //   } else {
      //     this.loggedUser = user
      //     console.log("User token: " + this.loggedUser.token)
      //     console.log("User id: " + this.loggedUser.id)
      //     this.handleRecipientBookings();
      //     this.handleProvider();
      //   }


      //}
    },

    runEveryMinite () {
      alert("The minute has passed!!")
    }
  },
  unmounted() {
    // socket.off("connect");
    // socket.off("disconnect");
    // socket.off("users");
    // socket.off("user connected");
    // socket.off("user disconnected");
    // socket.off("private message");
  },
  computed: {
    isValid() {
      return this.msg.length > 0;
    },

  },
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top:50px;
  color: #2c3e50;

}
.header {
  position:fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left:0;           /* top left corner should start at leftmost spot */
  top:0;            /* top left corner should start at topmost spot */
  width:100vw;      /* take up the full browser width */
  z-index:200;  /* high z index so other content scrolls underneath */
  height:100px;     /* define height for content */
}
.pill {
  font-size: 16px;
}
</style>
