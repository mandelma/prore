<template >

  <MDBContainer id="main">
<!--    class="d-flex justify-content-center align-items-center"-->
    <div
        id="content"




    >
      <!-- style="width: 360px; height: 230px"-->
      <div id="inner" class="text-center">
        <img
            class="mb-4"
            src= '../assets/prokeikkatori.png'
            alt="logo"
            style="width: 80%;"
        />
<!--        <h3 class="main">{{ msg }}</h3>-->
<!--        <h4 class="main">Autamme palvelun tilaamisessa tai tarjoamisessa</h4>-->

        <MDBRow>
          <MDBCol lg="2">
<!--            <MDBIcon><i style="color: #fbcfa6;" class="far fa-star"></i></MDBIcon>-->
<!--            <MDBIcon><i style="color: #35bbc7;" class="far fa-star"></i></MDBIcon>-->
<!--            <MDBIcon><i style="color: #fbcfa6;" class="far fa-star"></i></MDBIcon>-->
          </MDBCol>
          <MDBCol lg="8">
            <h1>PROKEIKKATORI</h1>
            <h1 class="solution">{{ t('speedIsImportant') }}</h1>

          </MDBCol>
          <MDBCol lg="2">
<!--            <img-->
<!--                class="mb-4"-->
<!--                src= '../assets/ok.png'-->
<!--                alt="logo"-->
<!--                style="width: 100px; "-->
<!--            />-->
<!--            <MDBIcon><i style="color: #35bbc7;" class="far fa-star"></i></MDBIcon>-->
<!--            <MDBIcon><i style="color: #52c735;" class="far fa-star"></i></MDBIcon>-->
<!--            <MDBIcon><i style="color: #f2e332;" class="far fa-star"></i></MDBIcon>-->
          </MDBCol>
        </MDBRow>




        <div  style="margin-top:30px">
          <MDBBtn class="prore-receive" rounded size="lg" color="info" @click="recipientButton">{{t ('receiver')}}</MDBBtn>
          <MDBBtn class="prore-offer" rounded white size="lg" color="warning" @click="provideButton" >{{t ('provider')}}</MDBBtn>
        </div>
      </div>

    </div>
  </MDBContainer>

</template>

<script >
import { MDBContainer,
  MDBBtn,
  //MDBIcon,
  MDBRow, MDBCol } from "mdb-vue-ui-kit";
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
//import Language from './components/Language'
export default {
  name: 'home-page',
  props: {
    msg: String,
    userIsProvider: Object
  },
  components: {
    MDBContainer,
    MDBBtn,
    //MDBIcon,
    MDBRow,
    MDBCol
  },

  setup () {
    const mainWidth = ref(window.innerWidth)
    const mainHeight = ref(window.innerHeight)

    return {
      mainWidth,
      mainHeight
    }
  },

  data () {
    const { t } = useI18n();
    return {
      // windowWidth: window.innerWidth,
      // windowHeight: window.innerHeight,
      userLogged: null,
      isPressedProviderBtn: false,
      isPressedReceiverBtn: false,
      t
    }
  },
  created () {

  },
  mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.userLogged = user

    }
    this.mainWidth = window.innerWidth;
    this.mainHeight = window.innerHeight;
    // this.resizeMainPage();
    // this.resizeMainContent();
  },
  methods:{
    resizeMainPage() {
      const main = document.getElementById('main');

      if (main) {
        main.style.width =  `${this.mainWidth}px`;  //this.mainWidth;
        main.style.height =  `${this.mainHeight}px`; //this.mainHeight;

        console.log("Height::: " + this.mainHeight)

      }

    },
    resizeMainContent () {
      const content = document.getElementById('content');
      const inner = document.getElementById('inner');
      if (content)
        console.log("Inner height " + inner.clientHeight);
      console.log("Inner divided height " + (this.mainHeight - inner.clientHeight) / 2)
      if (content) {
        //content.style.paddingTop = `${this.mainHeight}`
        content.style.paddingTop = `${(this.mainHeight - inner.clientHeight - 90) / 2}px`;
      }
    },
    recipientButton () {

      this.$router.push('/recipient-form')
    },
    provideButton () {

      this.$router.push({name: 'provider-public'})

    },
    submitProvider () {
      /*if (this.userIsProvider) {
        const username = "kadi"
        const room = "tuba333";
        socket.emit("joinRoom", {username, room})
      }*/

      this.$router.push({name: 'provider-public'})
    },
    backToDashboard () {
      this.isPressedProviderBtn = false
    }
  }
}
</script>
<style scoped>
.main {
  color: #268d96;
}

#inner {
  padding-top: 50px;
}

#main-page {
  width: v-bind(windowWidth);
  height: v-bind(windowHeight);
  padding-top: 30px;
  border: solid orange;
}

.solution {
  color: #adafad;
  /*text-shadow: #e99e79 1px 0 10px;*/
  font-family: "Lucida Console", "Courier New", monospace;
  padding: 20px;
}
.prore-offer {
  width: 300px;
  /*border: 2px solid #f28226;*/
  /*border-radius: 30px;*/
  justify-content: space-between;
  padding: 17px;
  font-size: 20px;

  /*margin-top: 10px;*/
  /*margin-right: 20px;*/
  margin: 0 20px 10px 20px;
}
.prore-receive {
  width: 300px;
  /*border: 2px solid #2a5571;*/
  /*border-radius: 30px;*/
  justify-content: space-between;
  padding: 17px;
  font-size: 20px;

  /*margin-top: 10px;*/
  /*margin-right: 20px;*/
  margin: 0 20px 10px 20px;
}

/*@media only screen and (max-width: 1000px) {*/
/*  #main-page-next {*/
/*    color: red;*/
/*    width: 100%;*/
/*    padding-top: 200px;*/
/*  }*/
/*}*/

</style>
