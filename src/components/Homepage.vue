<template>
  <div class="main">
    <MDBContainer   >
      <!--    class="d-flex justify-content-center align-items-center"-->
      <div





      >
        <!-- style="width: 360px; height: 230px"-->
        <div id="inner" class="text-center">
          <img
              class="mb-4"
              src= '../assets/prokeikkatori.png'
              alt="logo"
              style="width: 75%;"
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
              <h1 style="color: white;text-shadow: 2px 2px 5px #dd7052; font-family: fantasy, Papyrus;">PROKEIKKATORI</h1>
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


<!--          &#45;&#45;&#45;&#45; {{windowWidth}}<br>-->
<!--          height {{windowHeight}}-->

          <div  style="margin-top:30px">
            <MDBBtn class="prore-receive" rounded size="lg" color="info" @click="recipientButton">{{t ('receiver')}}</MDBBtn>
            <MDBBtn class="prore-offer" rounded white size="lg" color="warning" @click="provideButton" >{{t ('provider')}}</MDBBtn>
          </div>
        </div>

      </div>
    </MDBContainer>
  </div>


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
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
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
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    }
    //this.resizeMainPage();
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.userLogged = user

    }
    this.mainWidth = window.innerWidth;
    this.mainHeight = window.innerHeight;

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

      this.$router.push({name: 'provider-public'})
    },
    backToDashboard () {
      this.isPressedProviderBtn = false
    }
  }
}
</script>
<style scoped>
html, body {
  /*min-width:100vw;*/
  width: v-bind(windowWidth)px;
  height: v-bind(windowHeight)px;

  /*min-height: 100vw;*/
  /*margin: 0;*/
  /*padding: 0;*/
}
.main {


  /*position:fixed;*/
  /*top:0;*/
  /*bottom:0;*/
  /*left:0;*/
  /*right:0;*/
  /*overflow: scroll;*/

  /*background: linear-gradient(#4c4747, #121215);*/
}
.text-center {
  margin-top: 33px;
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
  color: #ddd;
  text-shadow: 2px 2px 5px #35bbc7;
  /*text-shadow: #e99e79 1px 0 10px;*/
  font-family: "Lucida Console", "Courier New", monospace;
  padding: 20px;
}
.prore-offer {
  width: 300px;
  /*border: 2px solid #f28226;*/
  /*border-radius: 30px;*/
  justify-content: space-between;
  padding: 13px;
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
  padding: 13px;
  font-size: 20px;

  /*margin-top: 10px;*/
  /*margin-right: 20px;*/
  margin: 0 20px 10px 20px;
}

@media only screen and (max-width: 1000px) {
  .text-center {
    margin-top: 25px;
  }



  /*#main-page-next {*/
  /*  color: red;*/
  /*  width: 100%;*/
  /*  padding-top: 200px;*/
  /*}*/
}

</style>
