<template>
  <MDBNavbar
      style="position: relative; z-index:1;"
      position="top"
      container
      expand="xl"
      bg="light"
      class="d-flex justify-content-between"
  >
    <MDBNavbarBrand>
      Pro Connections
    </MDBNavbarBrand>
    <MDBNavbarToggler
        right
        target="#navbarColor01"
        @click="collapse7 = !collapse7"
    ></MDBNavbarToggler>
    <MDBCollapse id="navbarColor01" v-model="collapse7">
      <MDBNavbarNav center class="mb-2 mb-lg-0">
        <MDBNavbarItem href="#" linkClass="link-secondary">
          <router-link to="/" @click="collapse7 = !collapse7">
            Etusivu
          </router-link>
        </MDBNavbarItem>
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
          to="#"
          class="me-3 me-lg-0"
          linkClass="link-secondary"
      >
        <MDBIcon icon="bell" size="lg"/>
        <MDBBadge notification color="danger" pill></MDBBadge>
      </MDBNavbarItem>

      <MDBDropdown v-model="dropdown3">
        <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown3 = !dropdown3"
        >
          <MDBIcon icon="user" size="lg"/>
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem href="#">
            <router-link to="/profile" @click="collapse7 = false" >Omat tiedot</router-link>
          </MDBDropdownItem>
          <MDBDropdownItem href="#"
          >Historia</MDBDropdownItem
          >
          <MDBDropdownItem href="#" @click="handleLogOut">Log out</MDBDropdownItem>


        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavbarNav>
  </MDBNavbar>

  <router-view
      @login:data = "handleLogin"
      @register:data = "createUser"
      :userIsProvider = userIsProvider
      :loggedInUser = loggedUser
      :recipientBookings = recipientBookings
      @booking:update = handleRecipientBookingsUpdate
  />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import ContentToHome from './components/ContentToHome'
import userService from "./service/users"
import providerService from './service/providers'
import recipientService from './service/recipients'
import loginService from "./service/login"
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
//import providerService from "@/service/providers";


export default {
  name: 'App',
  components: {
    //HelloWorld,
    //ContentToHome,
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
  data () {
    return {
      users: [],
      loggedUser: {},
      recipientBookings: [],
      userIsProvider: {},
      //isProviderLoggedIn: false
    }
  },
  mounted() {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.loggedUser = user
      console.log("User token: " + this.loggedUser.token)
      console.log("User id: " + this.loggedUser.id)
      this.handleRecipientBookings();
      this.handleProvider();
    }


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
    const dropdown3= ref(false)

    return {
      collapse7,
      dropdown3
    }
  },
  methods: {
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


      // this.loggedUser = user
      // console.log("User token: " + this.loggedUser.token)




      //console.log("User : " + userData.name)
      //this.loggedUser = JSON.parse('loggedAppUser')

    },
    handleLogOut () {
      window.localStorage.removeItem('loggedAppUser')
      this.loginUser = ''
      this.loggedUser = "";
      this.$router.push('/');
      //location.reload()

    },
    // Need to redo
    // async compareUserProviderId () {
    //   const providers = await providerService.getProviders()
    //   //console.log("Providers id in app " + providers.map(ese => ese.user.id))
    //   providers.map(provider => {
    //     if (provider.user.id === this.loggedUser.id) {
    //       console.log("true")
    //       this.isProviderLoggedIn = true;
    //       this.userIsProvider = provider;
    //       //this.$router.push('/provider-panel')
    //     } else {
    //       //console.log("false")
    //       this.isProviderLoggedIn = false;
    //       //this.$router.push('/')
    //     }
    //   })
    // },
    async handleProvider () {
      this.userIsProvider = await providerService.getProvider(this.loggedUser.id)
    },
    async handleRecipientBookings () {
      this.recipientBookings = await recipientService.getOwnBookings(this.loggedUser.id);
    },
    handleRecipientBookingsUpdate (booking) {
      this.recipientBookings = this.recipientBookings.concat(booking);
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
  color: #2c3e50;

}
</style>
