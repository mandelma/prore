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

      <MDBNavbarItem
          v-if="providerBookings.length > 0"
          to=""

          class="me-3 me-lg-0"
          linkClass="link-secondary"
          style="padding: 10px;"
      >


        <MDBIcon icon="bell"
                 v-if="isBell"
                 :disabled='true'
                  @click="handleNotifications"/>
        <MDBBadge v-if="notSeenClientBookings.length > 0"
                  notification color="danger"
                  class="translate-middle p-2"
                  @click="handleNotifications"
                  pill
        >
          <span class="pill">{{notSeenClientBookings.length}}</span>
        </MDBBadge>

        <MDBBadge v-else notification color="danger" class="translate-middle p-3" pill></MDBBadge>

      </MDBNavbarItem>


      <MDBDropdown v-model="dropdownUser" style="padding: 10px;">

        <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdownUser = !dropdownUser"
        >
          <MDBIcon icon="user"/>

<!--          size="1x"-->
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem  @click="profile" href="#">
            Omat tiedot
          </MDBDropdownItem>
          <MDBDropdownItem v-if="recipientBookings.length > 0" href="#" @click="history">

            Historia
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
      tere = "Tere"
  />


<!--  recipient bookings length{{recipientBookings.length}}
  recipient confirmed: {{recipientConfirmedBookings}}-->

<!--  {{loggedUser}}-->

<!--  <iframe src="https://deadsimplechat.com/LMOqgCkx4" width="100%" height="600px"></iframe>-->



</template>

<script>
// collapse7 = !collapse7
//import HelloWorld from './components/HelloWorld.vue'
//import ContentToHome from './components/ContentToHome'
import Notifications from './pages/Notification.vue'
import userService from "./service/users"
import providerService from './service/providers'
import recipientService from './service/recipients'
import loginService from "./service/login"

import validation from './helpers/loginValidation.js'
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
//import providerService from "@/service/providers";
//import SocketioService from './service/socketio.service.js';
//import ChatApp from './components/ChatApp.vue'
//import LiveChat from './pages/LiveChat'


export default {
  name: 'App',
  components: {
    //HelloWorld,
    //ContentToHome,
    //LiveChat,
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
      users: [],
      isBell: false,
      loggedUser: {},
      recipientBookings: [],
      userIsProvider: {},
      providerBookings: [],
      providerBookingsHistory: [],
      recipientConfirmedBookings: [],
      isNotification: false,
      notSeenClientBookings: [],
      //isProviderLoggedIn: false
    }
  },
  created() {
    this.validateToken();

    //socket.emit('unsubscribe')
    //window.localStorage.removeItem('sessionID')


  },

  /*beforeMount() {
    this.validateToken();
  },*/



  async mounted() {


    // const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    // if (loggedUserJSON) {
    //   const user = JSON.parse(loggedUserJSON)
    //   this.loggedUser = user
    //   this.isToken = true;
    //   this.handleRecipientBookings();
    //   this.handleProvider();
    // }
    // const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    //
    // if (loggedUserJSON) {
    //   const user = JSON.parse(loggedUserJSON)
    //   const tokenValid = await loginService.verifyToken(user.token)
    //   if (!tokenValid) {
    //     window.localStorage.removeItem('loggedAppUser')
    //     this.loggedUser = "";
    //
    //   } else {
    //     this.loggedUser = user
    //     console.log("User token: " + this.loggedUser.token)
    //     console.log("User id: " + this.loggedUser.id)
    //     this.handleRecipientBookings();
    //     this.handleProvider();
    //   }
    //
    //
    // }

    //this.validateToken();




    //this.compareUserProviderId();

    // if (this.isProviderLoggedIn) {
    //   this.$router.push('/provider-panel')
    // } else {
    //   this.$router.push/('/')
    // }

    //this.getUsers()

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
    handleActivateBell (state) {
      console.log("Bell bell bell" + state)
      this.isBell = state;
    },
    handleDeActivateBell () {
      // if (this.notSeenClientBookings.length === 0) {
      //   this.isBell = state
      // }

    },
    profile () {
      this.$router.push('/profile');
    },
    history () {
      this.$router.push('/history');
    },
    renderPage () {
      this.$router
          .push({ path: '/chat' })
          //.then(() => { this.$router.go() })
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
      this.loggedUser = loggedInUser;
      this.$router.push('/');
    },
    async handleLogin(userData) {
      let user

      console.log("userdata: " + userData.username)

      if (userData.username !== "" && userData.password !== "") {
        user = await loginService.login(userData)
        window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
        this.loggedUser = user
        //utils.info("Sisselogimine õnnestus!!!")
      }

      //this.$router.push({ name: 'login-register', query: { redirect: '/recipient-form' } });

      //this.$router.push('/')

      //this.$router.replace('/recipient-form')
      //this.$router.replace(this.$route.query.from);



      if(this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect)
      }else{
        this.$router.push('/')
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
        this.providerBookings = this.userIsProvider.booking.filter(uipb => uipb.status !== "confirmed");
        this.providerBookingsHistory = this.userIsProvider.booking.filter(uiph => uiph.status === "confirmed");
      }


      //this.providerBookings.filter(pb => pb.status === "confirmed" ? pb : null)
      this.providerBookings.forEach(pb => {

        if (pb.status === "notSeen") {

          this.notSeenClientBookings = this.notSeenClientBookings.concat(pb);
        }


      })
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
      //this.providerBookings = this.providerBookings.filter(pb => pb.id !== id)
      location.reload();

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
  }
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
