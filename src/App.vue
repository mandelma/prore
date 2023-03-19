<template>
  <MDBNavbar
      style="position: relative; z-index:1;"
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
            <router-link to="/" @click="collapse7 = !collapse7">Etusivu</router-link>
          </router-link>
        </MDBNavbarItem>
        <MDBNavbarItem href="#" linkClass="link-secondary">
          <router-link to="/" @click="collapse7 = !collapse7">
            <router-link to="/map" @click="collapse7 = false">Map</router-link>
          </router-link>
        </MDBNavbarItem>
        <MDBNavbarItem href="#" linkClass="link-secondary"
        > Location
          <!--<router-link to="/location" @click="collapse7 = false">Location</router-link>-->
        </MDBNavbarItem
        >

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
        <MDBIcon icon="bell" />
        <MDBBadge notification color="danger" pill>1</MDBBadge>
      </MDBNavbarItem>

      <MDBDropdown v-model="dropdown3">
        <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown3 = !dropdown3"
        >
          <MDBIcon icon="user" />
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem href="#" @click="handleLogOut">Log out</MDBDropdownItem>
          <MDBDropdownItem href="#">Another Action</MDBDropdownItem>
          <MDBDropdownItem href="#"
          >Something else here</MDBDropdownItem
          >
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavbarNav>
  </MDBNavbar>



  <router-view
      @user:control = "handleLogin"
      @register:data = "createUser"
  />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import ContentToHome from './components/ContentToHome'
import userService from "./service/users"
import loginService from "./service/login"
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
      loggedUser: ''
    }
  },
  mounted() {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.loggedUser = user
      console.log("User token: " + this.loggedUser.token)
      console.log("User id: " + this.loggedUser.id)
    }

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
      console.log("User name is here: " + credentials.firstName)
      const newUser = await userService.addUser(credentials)
      window.localStorage.setItem('loggedAppUser', JSON.stringify(newUser))
      this.$router.push('/')
    },
    async handleLogin(userData) {
      const user = await loginService.login(userData)

      window.localStorage.setItem('loggedAppUser', JSON.stringify(user))

      //this.$router.push('/')


      this.loggedUser = user
      console.log("User token: " + this.loggedUser.token)

      //console.log("User : " + userData.name)
      //this.loggedUser = JSON.parse('loggedAppUser')

    },
    handleLogOut () {
      window.localStorage.removeItem('loggedAppUser')
      this.loginUser = ''
      location.reload()
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
