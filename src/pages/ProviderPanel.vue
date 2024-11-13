<template>

  <div>

    <MDBRow>

      <MDBCol>

<!--        <h2>Map search active: {{ mapSearchActive.result }}</h2>-->
      </MDBCol>
      <MDBCol col="7" style=" position: relative;">

      </MDBCol>


      <!--provider-->
    </MDBRow>
<!--    <div v-if="!userIsProvider">-->
<!--      <div v-if="!userIsProvider" class="spinner-border" role="status">-->
<!--        <span class="visually-hidden">Loading...</span>-->
<!--      </div>-->
<!--    </div>-->
    <MDBRow>
      <MDBCol class="proPanelHeader" md="4">

        <div style="position: relative; text-align: center;">
          <h2>{{provider.yritys}}</h2>
          <h2>{{provider.address}}</h2>
        </div>


<!--        confirmedBookings.length-->
      </MDBCol>
      <MDBCol v-if="bookingsConfirmed.length > 0" md="8">
<!--        <MDBContainer >-->
<!--          <aside style="margin-top: 50px;" id="info-block" >-->
<!--            <section class="file-marker">-->
<!--              <div >-->
<!--                <div  class="box-title">-->
<!--                  Vahvistetut tilaukset!-->
<!--                </div>-->
<!--                <div   class="box-contents">-->
<!--                  &lt;!&ndash;                      <booking-info&ndash;&gt;-->
<!--                  &lt;!&ndash;                          v-if="recipientTest"&ndash;&gt;-->
<!--                  &lt;!&ndash;                          status = "for-recipient"&ndash;&gt;-->
<!--                  &lt;!&ndash;                          :msg = recipientTest&ndash;&gt;-->
<!--                  &lt;!&ndash;                      />&ndash;&gt;-->
<!--                  <div  class="flex flex-wrap align-items-center justify-content-center">-->
<!--                    <div v-for="bc in bookingsConfirmed" :key="bc.id" class="scalein animation-duration-3000 animation-iteration flex align-items-center justify-content-center-->
<!--                          font-bold   w-full">-->
<!--                      <info-->

<!--                          style="width: 100%;"-->
<!--                          status = "for-provider"-->
<!--                          :msg = bc-->
<!--                          :provider = provider-->
<!--                          @remove:proConfirmed = handleRemoveProConfirmed-->
<!--                      />-->
<!--                    </div>-->
<!--                  </div>-->

<!--                </div>-->
<!--              </div>-->
<!--            </section>-->
<!--          </aside>-->
<!--        </MDBContainer>-->


<!--        <info-->
<!--            v-for="bc in confirmedBookings" :key="bc.id"-->
<!--            status = "for-provider"-->
<!--            :msg = bc-->
<!--            @close:info = closeInfo-->
<!--        />-->
      </MDBCol>
    </MDBRow>


    <MDBContainer>

      <MDBRow >
        <MDBCol v-if="isProviderCalendar">
          <MDBContainer>
            <!--          {{times}}-->
            <errorNotification
                :message = timeEditErrorMessage
            />
            <successNotification
                :message = timeEditSuccessMessage
            />
            <div v-if="isTimeToEdit" style="border: solid orange; padding-bottom: 20px; padding-top: 20px;margin-bottom: 10px;">
<!--              <div style="font-size: 14px;">{{editArr[0].weekDay}} - {{editArr[0].day}}</div>-->
              <div  v-for="(item, i) in editArr" :key="i" >

                <MDBTable  borderless style="margin-right: 2px; font-size: 14px; color: #ddd; text-align: left;" >

                  <tbody >
                  <tr  v-for="(time, index) in item.time" :key="index">

                    <td>
                      testin {{time.text}}
<!--                      {{times[time.index][0].hours >= 10 ? times[time.index][0].hours : "0" + times[time.index][0].hours}} :-->
<!--                      {{times[time.index][0].minutes >= 10 ? times[time.index][0].minutes : "0" + times[time.index][0].minutes}} - -->
<!--                      {{times[time.index][1].hours >= 10 ? times[time.index][1].hours : "0" + times[time.index][1].hours}} :-->
<!--                      {{times[time.index][1].minutes >= 10 ? times[time.index][1].minutes : "0" + times[time.index][1].minutes}}-->
                    </td>
                    <td>
                      <VueDatePicker dark="true" v-model="times[time.index]"  time-picker range @update:model-value="handleTime">
                        <template #trigger>
                          <MDBIcon class="clickable-text">
                            <i class="fas fa-edit" size="lg" style="cursor: pointer"></i>
                          </MDBIcon>
                        </template>
                      </VueDatePicker>

                    </td>
                    <td>
                      <MDBIcon>
                        <i class="far fa-save"  size="lg" @click="confirmEditedTime(time.timeId)" style="cursor: pointer"></i>
                      </MDBIcon>
                    </td>
                    <td>
                      <MDBBtnClose white @click="delTimeRange(time.timeId)"/>
<!--                      <MDBIcon @click="delTimeRange(time.timeId)" style="cursor: pointer">-->
<!--                        <i class="far fa-calendar-times" size="6x"></i>-->
<!--                      </MDBIcon>-->
                    </td>

                  </tr>
                  <tr v-if="item.type === 'highlight'" class="table-dark">

                    <td>
                      {{item.hours >= 10 ? item.hours : "0" + item.hours}} :
                      {{item.minutes >= 10 ? item.minutes : "0" + item.minutes}}
                    </td>
                    <td>
                      <MDBBtn block color="dark" @click="isDisplayConfirmed = !isDisplayConfirmed">
                        {{!isDisplayConfirmed ? "Katso tiedot!" : "Sulje"}}
                      </MDBBtn>

                    </td>
                  </tr>
                  <tr v-if="isDisplayConfirmed && item.type === 'highlight'" class="table-dark">
                    <td colspan="4">
                      <div  class="flex flex-wrap align-items-center justify-content-center">
                        <div v-for="bc in bookingsConfirmed" :key="bc.id" class="scalein animation-duration-3000 animation-iteration flex align-items-center justify-content-center
                          font-bold   w-full">
                          <info
                              v-if="bc.onTime[0].day === item.day"
                              style="width: 100%;"
                              status = "for-provider"
                              :msg = bc
                              :provider = provider
                              @remove:proConfirmed = handleRemoveProConfirmed
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </MDBTable>
<!--                <MDBBtn outline="warning" size="lg" @click="isTimeToEdit = false" style="cursor: pointer">Poistu</MDBBtn>-->





<!--                <MDBTable v-if="item.type === 'highlight'" style="font-size: 14px; color: #ddd; text-align: left;">-->
<!--                  <tbody>-->
<!--                  <tr >-->
<!--                    <td>-->
<!--                      {{item.hours >= 10 ? item.hours : "0" + item.hours}} :-->
<!--                      {{item.minutes >= 10 ? item.minutes : "0" + item.minutes}}-->
<!--                    </td>-->
<!--                    <td>-->
<!--                      {{item.talk.eka}}-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                  </tbody>-->
<!--                </MDBTable>-->




              </div>
              <div style="display: flex; justify-content: right; padding: 20px;">
                <span style="color: greenyellow; cursor: pointer;" @click="isTimeToEdit = false">Valmis</span>
              </div>

            </div>

            <div>

            </div>


            <div>
              <VueDatePicker
                  dark="true"
                  :class="{datepicker_opacity: isMapSearchActive}"
                  style="margin-bottom: 50px; justify-content: center;"
                  @internal-model-change="handleInternal"
                  range auto-range="0"
                  v-model="date"
                  @update:model-value="handleDate"
                  inline
                  locale="fi" selectText="Valitse"
                  :min-date="new Date()"
                  :markers="markers"
                  :highlight="filled"
                  teleport-center
                  :month-change-on-scroll="false"
              >

              </VueDatePicker>
            </div>



          </MDBContainer>

        </MDBCol>
        <MDBCol v-if="isEditPrice">
          <editPrice
            @cancel:editPrice = cancelEditPrice
            @save:editedPrice = saveEditedPrice
          />

        </MDBCol>
        <MDBCol v-else-if="isEditProfession">
          <edit-profession
              :provider = provider
              @additionalProfession = handleAddProfession
              @editProfession = handleEditProfession
              @removeProfession = handleRemoveProfession
              @cancel:editProfession = handleCancelEditProfession
          />
        </MDBCol>
        <MDBCol v-else-if="isFeedback">
          <feedback-list
              :feedback = provider.feedback
              @closeFeedbackList = handleCloseFeedbackList
          />
        </MDBCol>
        <MDBCol v-else>
          <div v-if="!provider.profession" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div v-else>

            <errorNotification
                :message = errorMessage
            />
            <successNotification
                :message = successMessage
            />



            <MDBTable borderless style="position: relative; color: #ddd; font-size: 18px; text-align: left;">
              <tbody>
<!--              <tr>-->
<!--                <td>-->
<!--                  <h2>{{provider.yritys}}:</h2>-->
<!--                </td>-->
<!--                <td>-->
<!--                  {{provider.address}}-->
<!--                </td>-->
<!--              </tr>-->
              <tr >
                <td>
                  {{provider.range === 0 ? "Tarjoan palvelua paikalla" : "Palvelun säde: " + provider.range + " km"}}
                </td>
                <td v-if="!isEditRange">
                  <MDBBtn outline="info" block size="lg" @click="isEditRange = true">Muokkaa toimintaalueetta</MDBBtn>
                </td>
                <td v-else>
                  <div style="border: solid green; margin-bottom: 10px; padding: 7px; ">
                    <div style="display: flex; justify-content: right; padding: 10px;">
                      <MDBBtnClose
                          white

                          @click="isEditRange = false"
                      />
                    </div>
                    <div>
                      <MDBInput white label="Säde - km" v-model="range" size="lg" type="number" /><br>
                    </div>

                    <MDBBtn v-if="range.length > 0" outline="info" block size="lg" @click="saveNewRange">Tallenna uusi säde</MDBBtn>
                  </div>

                </td>
              </tr>
              <tr>
                <td>
                  Palaute
                </td>
                <td>
                  <MDBRow class="rating">
                    <MDBCol>
                      <MDBIcon  style="padding: 10px; color: limegreen;" i class="far fa-thumbs-up" size="2x"
                                ></MDBIcon>



                      <MDBBadge color="success" class="translate-middle p-1"
                                pill
                                notification>
                        <h2 style="width: 33px;">{{provider.rating.positive}}</h2>
                      </MDBBadge>
                    </MDBCol>
                    <MDBCol>
                      <MDBIcon  style="padding: 10px; color: palevioletred" i class="far fa-thumbs-down" size="2x"
                                ></MDBIcon>


                      <MDBBadge color="danger" class="translate-middle p-1"
                                pill
                                notification>
                        <h2 style="width: 33px;">{{provider.rating.negative}}</h2>
                      </MDBBadge>
                    </MDBCol>
                    <MDBCol>
                      <MDBBtn block color="primary" @click="getFeedbackListData">Katso oma arvostelua</MDBBtn>
                    </MDBCol>

                  </MDBRow>

                </td>
              </tr>
              <tr v-if="!isProviderCalendar">
                <td>
                  Tarjoan palvelua 24/7
                </td>
                <td>
                  <MDBBtn outline="info"  size="lg" @click="isProviderCalendar = true">Vaihda kalenteriin</MDBBtn>
                </td>
              </tr>
              <tr v-else>
                <td>
                  Päätän, koska tarjoan palvelua
                </td>
                <td>
                  <MDBBtn outline="info" block size="lg" @click="isProviderCalendar = false">Vaihda 24/7</MDBBtn>
                </td>
              </tr>

              <tr>

                <td>
                  <div v-for="(pro, i) in provider.profession" :key="i">
                    {{pro}}
                  </div>

                </td>
                <td>
                  <MDBBtn outline="info" block size="lg" @click="editProfessionPro">Muokkaa osaamista</MDBBtn>
                </td>
              </tr>

              <tr>
                <td>
                  {{provider.priceByHour}}&nbsp;Euroa
                </td>
                <td>
                  <MDBBtn outline="info" block size="lg" @click="editPrice">Muokkaa tuntihinta</MDBBtn>
                </td>
              </tr>
              <tr>
                <td>
                  Katso kartalta
                </td>
                <td>
                  <MDBBtn outline="info" block size="lg" @click="this.$router.push('/pro-public-search')">Kartalta</MDBBtn>
                </td>
              </tr>

              </tbody>
            </MDBTable>

          </div>

        </MDBCol>
      </MDBRow>

<!--      <MDBBtn size="lg" @click="getDate">Get date</MDBBtn>-->

<!--      <lightgallery :settings="{ speed: 300, controls: true, plugins: plugins }">-->
<!--        <a-->
<!--            data-lg-size="1406-1390"-->
<!--            class="gallery-item"-->
<!--            data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"-->
<!--            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"-->
<!--        >-->
<!--          <img-->
<!--              class="img-responsive"-->
<!--              src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"-->
<!--          />-->
<!--        </a>-->
<!--        <a-->
<!--            data-lg-size="1400-1400"-->
<!--            class="gallery-item"-->
<!--            data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"-->
<!--            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"-->
<!--        >-->
<!--          <img-->
<!--              class="img-responsive"-->
<!--              src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"-->
<!--          />-->
<!--        </a>-->
<!--        <a-->
<!--            data-lg-size="1400-1400"-->
<!--            class="gallery-item"-->
<!--            data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"-->
<!--            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"-->
<!--        >-->
<!--          <img-->
<!--              style="width: 200px"-->
<!--              class="img-responsive"-->
<!--              src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"-->
<!--          />-->
<!--        </a>-->
<!--      </lightgallery>-->

<!--      <div v-for="(im, i) in provider.reference" :key="i">-->
<!--        <img-->
<!--            class="loading"-->
<!--            style="width: 100px;"-->
<!--            :src="im.blob ? im.blob : require(`/server/uploads/pro/${im.name}`)"-->
<!--            :alt="im.name"-->
<!--        />-->
<!--      </div>-->

<!--      <button style="float: right;" @click="isGallery = !isGallery">-->
<!--        {{!isGallery ? "Kuvia tehtyistä työistä" : "Sulje galleria"}}-->
<!--      </button>-->
<!--      <gallery-->

<!--          :userIsProvider = userIsProvider-->
<!--          :proImages = proImages-->
<!--          @update:gallery = handleUpdateGallery-->
<!--      />-->

<!--      pro images {{proImages}}-->

<!--      <div id="wrapper">-->
<!--        <p id="marque">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>-->
<!--      </div>-->

<!--      <h2>Fluid Container</h2>-->
<!--      <div id="container">-->
<!--        <div class="box">Tere</div>-->
<!--        <div class="box"></div>-->
<!--      </div>-->

<!--      bookings {{bookingsConfirmed}}-->
      ----------------------------
<!--      userIsProvider {{userIsProvider}}-->
<!--      pro f d {{filled_days}}-->
<!--      confirmed bookings {{confirmedBookings}}-->
      editArr {{editArr}}
      -------------------
      times {{times }}
<!--      -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--      filled_days {{filled_days}}-->

    </MDBContainer>
  </div>

<!--  confirmed {{confirmedBookings}}-->

</template>

<script>

/* eslint-disable */


import VueDatePicker from '@vuepic/vue-datepicker';
import providerService from '../service/providers'
import editPrice from '../components/EditPrice'

import editProfession from '../components/EditProfession'
//import liveChat from '../pages/LiveChat'
import errorNotification from '../components/notifications/errorMessage'
import successNotification from '../components/notifications/successMessage'
//import infoNotification from '../components/notifications/infoMessage'
//import monthConverter from '../components/controllers/month-converter'
import info from '../components/CompletedBookingPanel'

//import validateToken from "@/components/validateToken";
import socket from "@/socket";
// inline auto-apply
import {
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBBtn,
  MDBBtnClose,
  MDBBadge,
  MDBInput,
}from "mdb-vue-ui-kit";
import {ref, watchEffect} from "vue";

import addDays from "date-fns/addDays";
import availableService from '../service/calendarOffers';
import FeedbackList from "@/components/FeedbackList";


import Gallery from '@/pages/Gallery.vue'



//import socket from "@/socket";
export default {
  name: "Provider-panel",
  props: {
    userIsProvider: Object,
    bookings: Array,
    filled_days: Array,
    bookingsConfirmed: Array

  },
  components: {
    Gallery,
    FeedbackList,


    info,
    //liveChat,
    errorNotification,
    successNotification,
    //infoNotification,
    //monthConverter,
    editPrice,
    editProfession,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBTable,
    MDBBtn,
    MDBBtnClose,
    MDBBadge,
    MDBInput,
    VueDatePicker
  },
  data () {
    const watchEffect = (() => {
      // if (this.filled_days.length > 0) {
      //
      // }
      //this.setHighlights()
      addDays(new Date(), 1)

    })
    return {
      selfProvider: this.userIsProvider,
      confirmedBookings: [],
      testi: {},
      un: "",
      ri: "",
      rooms: [],
      close: true,
      isGallery: false,
      proImages: [],
      //filled: [addDays(new Date(), 4)],
      filled: [], //[addDays(new Date(), this.filled_days.map(fd => fd.day - new Date().getDate()))],
      filledTimes: [],
      watchEffect
      //plugins: [lgThumbnail, lgZoom],

    }
  },
  setup () {
    const isProviderCalendar = ref(false)
    const testii = ref(null)
    const weekDay = ref("")
    const timerange = ref(null)
    const datee = ref(null)
    const range =ref(false)
    const isRangeSelected = ref(false)
    const isEditRange = ref(false)
    const isEditPrice = ref(false)
    const isFeedback = ref(false)
    const isEditProfession = ref(false)
    const clearTime = ref(null)
    const dateTest = ref(null)
    const date = ref(null)
    const markers = ref([])
    //const filled = ref([])
    const contents = ref([])
    const isContents = ref(false)
    const markedDays = ref([])
    const time = ref({})
    const isConfirmTime = ref(false)
    const times = ref([])
    const datetime = ref({})
    const userId = ref("")
    const provider = ref({})
    const creditLeft = ref(null)
    const providerTimes = ref([])
    const errorMessage = ref(null)
    const successMessage = ref(null)
    const timeEditSuccessMessage = ref(null)
    const timeEditErrorMessage = ref(null)
    const oblicationInfoMessage= ref(null)
    const editTime = ref({})
    const isTimeToEdit = ref(false)
    const editArr = ref([])
    const timeToEdit = ref(null)
    const isDisplayConfirmed = ref(false)

    const highlightedDates = ref([
      addDays(new Date(), 1),
      addDays(new Date(), 2),
      addDays(new Date(), 7),
    ])
    // const fi = () => {
    //
    //   this.filled_days.forEach(fd => {
    //     let filledDay = null;
    //     if (fd.month === new Date().getMonth()) {
    //       //filledDay = addDays(new Date(), fd[0].day   - new Date().getDate());
    //       filledDay = addDays(new Date(), 3)
    //
    //     }
    //     this.filled = this.filled.concat(filledDay);
    //   })
    // }
    return {
      isProviderCalendar,
      testii,
      weekDay,
      timerange,
      datee,
      range,
      isRangeSelected,
      isEditRange,
      isEditPrice,
      isFeedback,
      isEditProfession,
      clearTime,
      dateTest,
      date,
      markers,
      //filled,
      contents,
      isContents,
      markedDays,
      time,
      isConfirmTime,
      times,
      datetime,
      userId,
      provider,
      creditLeft,
      providerTimes,
      errorMessage,
      timeEditSuccessMessage,
      timeEditErrorMessage,
      oblicationInfoMessage,
      successMessage,
      editTime,
      isTimeToEdit,
      editArr,
      timeToEdit,
      watchEffect,
      highlightedDates,
      isDisplayConfirmed
      //fi
    }
  },

  beforeMount () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (!loggedUserJSON) {
      this.$router.push('/');
    } else {
      const user = JSON.parse(loggedUserJSON)
      this.userId = user.id
      console.log("User token in provider: " + user.token)

      this.providerData();


    }

  },
  methods: {

    // handleUpdateGallery (img) {
    //   // this.proImages = [
    //   //     ...this.proImages,
    //   //     img
    //   // ]
    //   this.proImages.push(img);
    // },


    goToMap () {
      this.$router.push('/provider-public')
    },

    getDate () {
      const today = new Date().getTime();
      //const tomorrow = new Date(86400000);
      const addWeek = new Date().getTime() + (7 * 86400000)
      //console.log("Today is: " + today)

      const day_ms = 86400000;
      console.log("and now " + today)
      console.log("week_ms added  is: " + addWeek);

      const days = (addWeek - today) / day_ms;

      console.log("Days between - " + days)
    },

    saveNewRange () {
      this.isEditRange = false;
      providerService.editRange(this.provider.id, {range: this.range});
      this.provider.range = this.range;
    },

    getIt () {
      let username = "aaa"
      let room = "room"

      socket.auth = { username, room };
      socket.connect();

      let room1 = "Oopersama"
      socket.emit('updateRoom', room1);
    },

    // xxx(test) {
    //   console.log("Test nimi " + test)
    //
    //
    // },

    joinAllRooms () {
      const rooms = ["111", "222"];
      socket.emit('joinAllClientRooms', rooms);
    },

    handleRemoveProConfirmed (booking) {
      console.log("Info closed here?? " + booking.header)
      this.$emit("removeProBookingConfirmed", booking);
      this.confirmedBookings = this.confirmedBookings.filter(cp => cp.id !== booking.id);
      this.successMessage = "Siit saab kustutada selle teavituse soovi korral!"
      setTimeout(() => {
        this.successMessage = null
      }, 3000)

    },

    socketResetTest() {
      //console.log("Socket reset test")
      socket.disconnect()
      socket.connect()
    },
    openChatPanel (evt) {
      evt.preventDefault()
      console.log("Will chat open...")
      const sessionID = localStorage.getItem("sessionID");

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
      /*this.$router
          .push({ path: '/chat' })
          .then(() => { this.$router.go() })
      */
    },
    handleInternal (date) {
      this.editArr = [];
      let editarr = []
      this.editTime = {}
      //let editTimeArr = []
      this.isTimeToEdit = false;
      if (date) {
        console.log("get date " + new Date().getDate())
        let dateStr = date.toString().substring(8, 10)
        let dateInt = parseInt(dateStr);

        this.weekDay = date.toString().substring(0, 3)

        let time = {}
        let content = {}

        // Creating highlighted days
        this.confirmedBookings.forEach(confirmed => {

        })

        console.log("length " + this.bookingsConfirmed.length)

        this.filled_days.forEach(f => {
          if (dateInt === f.day) {
            console.log("On")
            this.isTimeToEdit = true;
            editarr.push({
              type: "highlight",
              day: dateInt,
              weekDay: this.weekDay,
              hours: f.hours,
              minutes: f.minutes,
            });

          } else {
            console.log("Ei ole")
          }

        })





        //let times = [];
        this.markers.forEach(m => {
          if (m.date.getDate() === dateInt) {
            this.isTimeToEdit = true
            time = {
              type: "marker",
              day: dateInt,
              weekDay: this.weekDay,
              time: m.content
            }


          }

        })

        // times for selected day orange box
        //this.editArr = editarr;
        //this.editArr.push(time);
        editarr.push(time);
        this.editArr = this.editArr.concat(editarr);

      }


    },
    editPrice () {
      this.isEditPrice = true;
    },

    async saveEditedPrice (newPrice) {
      //console.log("New price is: " + newPrice);
      const providerSalary = {
        priceByHour: newPrice
      }
      const updated = await providerService.updateProvider(this.provider.id, providerSalary)
      if (updated) {



        this.provider.priceByHour = newPrice;
        console.log("Price: " + this.provider.priceByHour)
        this.isEditPrice = false;
        this.successMessage = "Tuntihinta on muokattu!"
        setTimeout(() => {
          this.successMessage = null
        }, 2000)
      }


    },
    cancelEditPrice (isEdit) {
      this.isEditPrice = isEdit;
    },
    getFeedbackListData () {
      this.isFeedback = true;
    },
    handleCloseFeedbackList () {
      this.isFeedback = false;
    },
    editProfessionPro () {
      this.isEditProfession = true;
    },
    handleEditProfession (index, profession) {

      console.log("Profession is " + profession + " and index " + index);
      this.provider.profession[0] = profession;
      providerService.editProfession(this.provider.id, {index: index, pro: profession});
    },
    handleAddProfession (pro) {
      console.log("Uus amet on " + pro);
      providerService.additionalProfession(this.provider.id, {profession: pro});
      if (!this.provider.profession.includes(pro)) {
        this.provider.profession.push(pro);
      }

    },
    handleRemoveProfession (index, profession) {
      console.log("Profession index is " + index + " and profession is " + profession);
      providerService.removeProfession(this.provider.id, {profession: profession})
      this.provider.profession.splice(index, 1);
    },

    handleCancelEditProfession () {
      this.isEditProfession = false;
    },
    removeExpiredDateTime () {
      this.providerTimes.forEach(timerange => {
        let year = timerange.yearFrom;
        let month = timerange.monthFrom;
        let day = timerange.dayFrom;
        let hour = timerange.hoursFrom;
        let minute = timerange.minutesFrom;
        if (new Date(year, month, day, hour, minute).getTime() < new Date().getTime()) {
          this.delTimeRange(timerange.id);
        }
      })

    },
    async editTimeTest () {
      const newTimeoffer = {hoursFrom: 1};
      await availableService.updateOffer('6431407f53469b1f48eeb2f0', newTimeoffer)
    },
    updateTimesAndMarkers () {

      this.providerTimes.forEach(times => {
        console.log("Provider times: " + times.hoursFrom);
        this.setTimeMarkers(times)
      })

      this.providerTimes.forEach(offer => {
        this.initializeTime(offer);
      })
    },
    async delTimeRange (timerangeId) {
      //await availableService.removeTimeOffer(this.provider.id, timerangeId);



      console.log("Id argumendina? " + timerangeId)


      // this.providerTimes = this.providerTimes.filter(time => time.id !== timerangeId);
      //
      //



      // this.editArr.filter(ea => ea.type === "marker" && ea.time.includes(timerangeId));
      // this.editArr.forEach(ea => {
      //   if (ea.type === "marker")
      //     console.log("xxx " + ea.time.map(a => a.timeId))
      // })



      //this.editArr = this.editArr.time.filter(eat => eat.time.timeId !== timerangeId);
      //this.editArr.time = this.editArr.filter(eat => eat.type === "marker" && eat.time.timeId !== timerangeId)
      // this.times = [];
      // this.markers = [];
      //
      // this.updateTimesAndMarkers();
      //
      // if (this.editArr.length > 1) {
      //
      //   this.updateTimesAndMarkers();
      //
      //   this.editArr[0].time = this.editArr[0].time.filter(eat => eat.timeId !== timerangeId)
      //
      // } else {
      //   this.editArr = [];
      //   this.updateTimesAndMarkers();
      //
      // }


    },

    onTimePickerOpen () {
      console.log("Timepicker opened")
    },
    alertFn (x) {
      console.log("Opened " + x)
    },

    onClose () {

      console.log("On close...")
    },
    async handleDate () {
      console.log("Date handled!")
      const timeDate = {
        yearFrom: this.date[0].getFullYear(),
        monthFrom: this.date[0].getMonth(),
        dayFrom: this.date[0].getDate(),
        hoursFrom: this.date[0].getHours(),
        minutesFrom: this.date[0].getMinutes(),
        yearTo: this.date[1].getFullYear(),
        monthTo: this.date[1].getMonth(),
        dayTo: this.date[1].getDate(),
        hoursTo: this.date[1].getHours(),
        minutesTo: this.date[1].getMinutes()
      }


      const savedTimeRange = await availableService.addAdditionalOffer(this.provider.id, timeDate);

      console.log("Provider times " + this.providerTimes)

      this.providerTimes = this.providerTimes.concat(savedTimeRange);


      this.times = [];
      this.markers = [];
      //this.editArr = [];
      this.editArr = this.editArr.filter(ea => ea.type === "highlight");


      //this.updateTimesAndMarkers();

      this.providerTimes.forEach(offer => {
        this.initializeTime(offer);
      })

      this.providerTimes.forEach(times => {
        this.setTimeMarkers(times)
      })

      // this.filled_days.forEach(f => {
      //   //if (dateInt === f.day) {
      //     console.log("On")
      //     this.isTimeToEdit = true;
      //     this.editArr.push({
      //       type: "highlight",
      //       day: dateInt,
      //       weekDay: this.weekDay,
      //       hours: f.hours,
      //       minutes: f.minutes,
      //     });
      //
      //   // } else {
      //   //   console.log("Ei ole")
      //   // }
      //
      // })

      let time = {}

      this.markers.forEach(m => {
        if (m.date.getDate() === savedTimeRange.dayFrom) {
          this.isTimeToEdit = true;
          time = {
            day: savedTimeRange.dayFrom,
            weekDay: this.weekDay,
            time: m.content
          }

        }

      })
      this.editArr.push(time);

      //this.editArr[0].day = savedTimeRange.dayFrom




      //this.providerData ();
    },
    async confirmEditedTime (id) {
      console.log("Confirmed??? " + id + " hours edited: " + this.t)
      let offerForEdit;
      const time = this.timeToEdit
      if (time) {
        //this.markers = [];

        offerForEdit = {
          hoursFrom: time[0].hours,
          minutesFrom: time[0].minutes,
          hoursTo: time[1].hours,
          minutesTo: time[1].minutes
        }

        const edited = await availableService.updateOffer(id, offerForEdit)
        console.log("Offer edited: " + edited)
        this.timeEditSuccessMessage = "Aika muokattu onnistuneesti!"
        //this.providerTimes = this.providerTimes.filter(time => time.id !== id ? time : edited);


        this.providerTimes = this.providerTimes.map(time => time.id !== id ? time : edited);

        //this.providerTimes = this.providerTimes.concat(edited)

        this.testii = edited;



        //console.log("Times after edit:: ")
        setTimeout(() => {
          this.timeEditSuccessMessage = null
        }, 2000)
        this.isTimeToEdit = false;
      } else {
        this.timeEditErrorMessage = "Ensin on vaihdettava kellonaika!"
        setTimeout(() => {
          this.timeEditErrorMessage = null
        }, 2000)
      }
      //this.updateTimesAndMarkers();

      //console.log("Time need to confirmation: " + time[0].hours + " : " + time[0].minutes)
      this.timeToEdit = null;

    },
    handleTime (date) {

      //this.isConfimTime = true;
      this.timeToEdit = date;

      //console.log("Time is handled " + date[0].hours )
    },

    setMarkedDay (markedDay) {
      const day = markedDay - new Date().getDate()
      //this.markedDays = this.markedDays.concat(markedDay)
      this.markedDays.push(markedDay)
      console.log("Day to set_ " + day);
    },
    cancelTime () {
      console.log("Time cancelled!")

    },
    async addAvailableDate () {
      const availableDate = {
        yearFrom: this.date[0].getFullYear(),
        monthFrom: this.date[0].getMonth(),
        dayFrom: this.date[0].getDate(),
        hoursFrom: this.date[0].getHours(),
        minutesFrom: this.date[0].getMinutes(),
        yearTo: this.date[1].getFullYear(),
        monthTo: this.date[1].getMonth(),
        dayTo: this.date[1].getDate(),
        hoursTo: this.date[1].getHours(),
        minutesTo: this.date[1].getMinutes()
      }
      const saved = await availableService.addAdditionalOffer(this.provider.id, availableDate);
      console.log("Saved? " + saved);
    },

    // setHighlights () {
    //   addDays(new Date(), 1),
    //   this.filled_days.forEach(fd => {
    //     let filledDay = null;
    //     if (fd.month === new Date().getMonth()) {
    //       filledDay =  addDays(new Date(), 3)         //addDays(new Date(), (fd[0].day   - new Date().getDate()));
    //       this.filled = this.filled.concat(filledDay);
    //     }
    //   })
    // },

    setTimeMarkers (offer) {
      let markedDay = null;
      this.contents = [];
      // markedDay = offer.dayFrom - new Date().getDate()
      // DODO need to add year funcionality
      if (offer.monthFrom === new Date().getMonth()) {
        markedDay = addDays(new Date(), offer.dayFrom - new Date().getDate());
      } else {
        markedDay = addDays(
            new Date(offer.yearFrom, offer.monthFrom, 0), offer.dayFrom);
      }

      console.log("Test markers: " + new Date(offer.yearFrom, offer.monthFrom, offer.dayFrom))

      this.times.forEach((time, index) => {

        if (time[0].day === offer.dayFrom) {

          //timeIds = timeIds.concat(offer.id)
          //this.contents.push({text: "Muokka", index: index, hours: time.hours, minutes: time, color: 'orange'})
          let timeContent = time[0].hours + " : " + time[0].minutes + " - " + time[1].hours + " : " + time[1].minutes;
          this.contents.push({text: timeContent, index: index, timeId: this.providerTimes[index].id, color: 'red'})

          this.markers = this.markers.concat({
            dFrom: offer.dayFrom,
            date: markedDay,
            type: 'line',
            color: 'orange',
            content: this.contents
          })

        }

      })
    },
    async providerData () {
      //console.log("User id in provider panel: " + this.userId)
      const provider = await providerService.getProvider(this.userId);

      this.filled_days.forEach(fd => {
        this.filled = [
          ...this.filled,
          addDays(new Date(), fd.day - new Date().getDate())
        ]
      })

      if (provider) {
        this.provider = provider;

        this.creditLeft = ((provider.proTime - new Date().getTime()) / 86400000).toFixed() < 0 ? 0 : ((provider.proTime - new Date().getTime()) / 86400000).toFixed();
        provider.reference.forEach((item, id) => {
          this.proImages = [
              ...this.proImages,
            {
              id: id,
              size: '1400-933',
              src: require(`/server/uploads/pro/${item.name}`),
              thumb: require(`/server/uploads/pro/${item.name}`),
              subHtml: `<div class="lightGallery-captions">


          </div>"`
            }
          ]
        })

        //this.providerTimes = provider.timeoffer;

        if (!provider.isAvailable24_7) {
          this.isProviderCalendar = true;
        }
        console.log("Provider rooms are: " + provider.room.map(pr => pr));
        this.rooms = provider.room;

        // this.un = provider.user.username;
        // this.ri = provider.yritys;
      }

      //this.confirmedBookings = provider.booking.filter(booking => booking.status === "confirmed")


      this.times = []
      if (this.providerTimes) {
        this.providerTimes.forEach(offer => {
          this.initializeTime(offer);
        })

        this.removeExpiredDateTime();

        this.providerTimes.forEach(offer => {
          this.setTimeMarkers(offer);
        })
      }

      //}


    },
    createFilledTimes () {
      let time_data = {};
      this.filled_days.forEach(fd => {
        time_data = {
          day: fd.day,
          time: fd,

        }
      })
    },

    initializeTime (offer) {
      let time = []
      time.push(
          {
            day: offer.dayFrom,
            hours: offer.hoursFrom,
            minutes: offer.minutesFrom
          },
          {
            day: offer.dayTo,
            hours: offer.hoursTo,
            minutes: offer.minutesTo
          }

      )
      this.times.push(time)

    },

    test (index) {
      console.log("What ever: " + index)
    },
  },

}
// lang="scss"
</script>

<style  lang="scss">
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css");

.proPanelHeader {
  padding: 50px 30px 50px 30px;
  text-align: left;
}






:root {
  --text-color: #9cebeb;
  --dp-cell-size: 60px;
  --dp-cell-padding: 10px;
  --dp-month-year-row-button-size: 45px;
  --dp-button-icon-height: 30px;
  --dp-font-size: 1.5rem;



  .dp__theme_dark {
    --dp-background-color: #212121;
    --dp-text-color: #fff;
    --dp-hover-color: #484848;
    --dp-hover-text-color: #fff;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #b24d00;
    --dp-primary-disabled-color: #61a8ea;
    --dp-primary-text-color: #fff;
    --dp-secondary-color: #a9a9a9;
    --dp-border-color: #2d2d2d;
    --dp-menu-border-color: #2d2d2d;
    --dp-border-color-hover: #aaaeb7;
    --dp-border-color-focus: #aaaeb7;
    --dp-disabled-color: #737373;
    --dp-disabled-color-text: #d0d0d0;
    --dp-scroll-bar-background: #212121;
    --dp-scroll-bar-color: #484848;
    --dp-success-color: #00701a;
    --dp-success-color-disabled: #428f59;
    --dp-icon-color: #959595;
    --dp-danger-color: #e53935;
    --dp-marker-color: #e53935;
    --dp-tooltip-color: #3e3e3e;
    --dp-highlight-color: rgb(64, 64, 39);
    --dp-range-between-dates-background-color: var(--dp-hover-color, #484848);
    --dp-range-between-dates-text-color: var(--dp-hover-text-color, #fff);
    --dp-range-between-border-color: var(--dp-hover-color, #fff);
  }

}
@media only screen and (max-width: 1000px) {
  .proPanelHeader {
    padding: 50px 30px 50px 30px;
    text-align: center;
  }
  :root {
    --text-color: #9cebeb;
    --dp-cell-size: 35px;
    --dp-cell-padding: 5px;
    --dp-month-year-row-button-size: 35px;
    --dp-font-size: 1rem;
    --dp-highlight-color: rgb(245, 131, 156);
  }
}

.center {
  margin: auto;
  width: 25%;

  padding: 7px;
}
.error {
  color: white;
  background: #f5839c;
  font-size: 20px;
  border: solid #f75959;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.success {
  color: white;
  background: lightgreen;
  font-size: 20px;
  border: solid #0e920e;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
/*.info {*/


/*  color: white;*/
/*  background: lightblue;*/
/*  font-size: 20px;*/
/*  border: solid #35bbc7;*/
/*  border-radius: 5px;*/
/*  margin-left: 20px;*/

/*  margin-bottom: 10px;*/
/*}*/

.action-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.file-marker > div {
  padding: 0 3px;
  /*height: 130px;*/
  /*margin-top: -0.8em;*/
  margin-top: -1em;
}
.box-title {
  background: #141414 none repeat scroll 0 0;
  color: palevioletred;
  display: inline-block;
  /*padding: 0 2px;*/
  font-size: 16px;
  padding: 0 10px;

  margin-left: 8em;
}
.box-contents {
  /*border: solid red;*/
  padding: 20px;
  overflow-y: auto;
}
#info-block section {
  border: 1px solid #a0dde0;
  margin-bottom: 20px;
}
.datepicker_opacity {
  opacity: 0.5;
}

//.watermark{
//  color:yellow;
//
//  //background-color:rgba(255, 0, 0, 0.5);
//  //background-color:#221a16;
//  background-color: blue;
//  //opacity: 0.2  ;
//  height:300px;
//  width:1300px;
//
//  display:flex;
//  align-items:center;
//  justify-content:center;
//  //top: 50vh; left: 50vw; transform: translate(-50%, -50%);
//  top: 50vh; left: 50vw; transform: translate(-50%, -50%);
//  position:fixed;
//  //bottom:5px;
//  //right:5px;
//}




//#wrapper{position:relative; height:40px; width:100%;}
//#wrapper p{position:absolute;  top:0;left:0; display:block; white-space:nowrap}
</style>