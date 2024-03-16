<template>
  <div>
<!--    <h1 style="margin-top: 100px; margin-bottom: 50px">TMI:n hallintapaneeli...</h1>-->
    <MDBRow>
      <MDBCol>

      </MDBCol>
      <MDBCol col="7" style="padding: 20px;">
        <div style="padding: 20px; border: solid green;">
          <h3>Käyttö </h3>
          <h2>{{((provider.proTime - new Date().getTime()) / 86400000).toFixed()}} päivää</h2>
          <div v-if="((provider.proTime - new Date().getTime()) / 86400000).toFixed() < 7">
            <p style="color: orangered; float: right; cursor: pointer;" @click="$router.push('/pay-plan')">Lattaa lisää rahaa!</p>
          </div>
        </div>

      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol style="padding: 50px 20px 50px 20px" md="4">
        <h2>{{provider.yritys}}:</h2>
        <h2>{{provider.address}}</h2>

      </MDBCol>
      <MDBCol v-if="confirmedBookings.length > 0" style="padding: 50px 10px 30px 10px" md="8">
        <MDBContainer>
          <aside id="info-block" >
            <section class="file-marker">
              <div>
                <div class="box-title">
                  Vahvistetut tilaukset!
                </div>
                <div class="box-contents">
                  <!--                      <booking-info-->
                  <!--                          v-if="recipientTest"-->
                  <!--                          status = "for-recipient"-->
                  <!--                          :msg = recipientTest-->
                  <!--                      />-->
                  <info
                      v-for="bc in confirmedBookings" :key="bc.id"
                      status = "for-provider"
                      :msg = bc
                      @remove:proConfirmed = handleRemoveProConfirmed
                  />
                  <MDBBtn color="danger" @click="removeConfirmationNotification">
                    Kustuta teade
                  </MDBBtn>
                </div>
              </div>
            </section>
          </aside>
        </MDBContainer>


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
            <div v-if="isTimeToEdit">
              <div  v-for="(item, i) in editArr" :key="i" style="border: solid orange; padding-bottom: 20px; padding-top: 20px;margin-bottom: 10px;">
                <div style="font-size: 16px;">{{item.weekDay}} - {{item.day}}</div>

                <MDBTable borderless style="font-size: 18px; text-align: left;" >
                  <tbody >
                  <tr v-for="(time, index) in item.time" :key="index">

                    <td>
                      {{times[time.index][0].hours >= 10 ? times[time.index][0].hours : "0" + times[time.index][0].hours}} :
                      {{times[time.index][0].minutes >= 10 ? times[time.index][0].minutes : "0" + times[time.index][0].minutes}} -
                      {{times[time.index][1].hours >= 10 ? times[time.index][1].hours : "0" + times[time.index][1].hours}} :
                      {{times[time.index][1].minutes >= 10 ? times[time.index][1].minutes : "0" + times[time.index][1].minutes}}
                    </td>
                    <td>
                      <VueDatePicker v-model="times[time.index]"  time-picker range @update:model-value="handleTime">
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
                      <MDBBtnClose @click="delTimeRange(time.timeId)"/>
<!--                      <MDBIcon @click="delTimeRange(time.timeId)" style="cursor: pointer">-->
<!--                        <i class="far fa-calendar-times" size="6x"></i>-->
<!--                      </MDBIcon>-->
                    </td>
                  </tr>
                  <tr>
                    <td>

                    </td>
                  </tr>
                  </tbody>
                </MDBTable>
                <MDBBtn outline="warning" size="lg" @click="isTimeToEdit = false" style="cursor: pointer">Poistu</MDBBtn>
              </div>
            </div>


            <VueDatePicker
                style="margin-bottom: 50px; justify-content: center;"
                @internal-model-change="handleInternal"
                range auto-range="0"
                v-model="date"
                @update:model-value="handleDate"
                inline
                locale="fi" selectText="Valitse"
                :min-date="new Date()"
                :markers="markers"

                teleport-center
                :month-change-on-scroll="false"
            >

            </VueDatePicker>

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

            <MDBTable borderless style="font-size: 18px; text-align: left;">
              <tbody>
<!--              <tr>-->
<!--                <td>-->
<!--                  <h2>{{provider.yritys}}:</h2>-->
<!--                </td>-->
<!--                <td>-->
<!--                  {{provider.address}}-->
<!--                </td>-->
<!--              </tr>-->
              <tr v-if="provider.range">
                <td>
                  {{provider.range === 0 ? "Tarjoan palvelua paikalla" : "Palvelun säde: " + provider.range + " km"}}
                </td>
                <td v-if="!isEditRange">
                  <MDBBtn outline="info" block size="lg" @click="isEditRange = true">Muokkaa toimintaalueetta</MDBBtn>
                </td>
                <td v-else>
                  <div style="border: solid green; margin-bottom: 10px; padding: 12px; ">
                    <div>
                      <MDBBtnClose
                          style="float: right;"
                          @click="isEditRange = false"
                      />
                    </div>
                    <div>
                      <MDBInput label="Säde - km" v-model="range" size="lg" type="number" /><br>
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
                      <MDBIcon  style="padding: 10px; cursor: pointer;" i class="far fa-thumbs-up" size="2x"
                                @click="negative"></MDBIcon>



                      <MDBBadge color="success" class="translate-middle p-1"
                                pill
                                notification>
                        <h2>{{provider.rating.positive}}</h2>
                      </MDBBadge>
                    </MDBCol>
                    <MDBCol>
                      <MDBIcon  style="padding: 10px; cursor: pointer;" i class="far fa-thumbs-down" size="2x"
                                @click="getPositiveFeedback"></MDBIcon>


                      <MDBBadge color="danger" class="translate-middle p-1"
                                pill
                                notification>
                        <h2>{{provider.rating.negative}}</h2>
                      </MDBBadge>
                    </MDBCol>
                    <MDBCol>
                      <MDBBtn block color="secondary" @click="getFeedbackListData">Katso oma arvostelua</MDBBtn>
                    </MDBCol>

                  </MDBRow>

                </td>
              </tr>
              <tr v-if="!isProviderCalendar">
                <td>
                  Tarjoan palvelua 24/7
                </td>
                <td>
                  <MDBBtn outline="info" block size="lg" @click="isProviderCalendar = true">Vaihda kalenteriin</MDBBtn>
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



      <button style="float: right;" @click="isGallery = !isGallery">G</button>
      <gallery v-if="isGallery"/>


    </MDBContainer>
  </div>
</template>

<script>


// :min-date="new Date()"
import VueDatePicker from '@vuepic/vue-datepicker';
import providerService from '../service/providers'
import editPrice from '../components/EditPrice'

import editProfession from '../components/EditProfession'
//import liveChat from '../pages/LiveChat'
import errorNotification from '../components/notifications/errorMessage'
import successNotification from '../components/notifications/successMessage'
//import infoNotification from '../components/notifications/infoMessage'
//import monthConverter from '../components/controllers/month-converter'
import info from '../components/Info'
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
  MDBInput
}from "mdb-vue-ui-kit";
import {ref} from "vue";

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
    return {
      confirmedBookings: [],
      testi: {},
      un: "",
      ri: "",
      rooms: [],
      close: true,
      isGallery: false,
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
    const contents = ref([])
    const isContents = ref(false)
    const markedDays = ref([])
    const time = ref({})
    const isConfirmTime = ref(false)
    const times = ref([])
    const datetime = ref({})
    const userId = ref("")
    const provider = ref({})
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
    const highlightedDates = ref([
      addDays(new Date(), 1),
      addDays(new Date(), 2),
      addDays(new Date(), 7),
    ])
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
      contents,
      isContents,
      markedDays,
      time,
      isConfirmTime,
      times,
      datetime,
      userId,
      provider,
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
      highlightedDates
    }
  },

  mounted () {



    /*const validated = validateToken()
    if (!validated) {
      console.log("user is no validated")
      this.$router.push('/login');
    } else {
      console.log("User is validated")
      this.userId = validated.id
      this.providerData();
    }*/

    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (!loggedUserJSON) {
      this.$router.push('/');
    } else {
      const user = JSON.parse(loggedUserJSON)
      this.userId = user.id
      console.log("User token in provider: " + user.token)

      this.providerData();

    }


    //this.providerData();

  },
  methods: {




    goToMap () {
      this.$router.push('/provider-public')
    },

    getDate () {
      const today = new Date().getTime();
      //const tomorrow = new Date(86400000);
      const addWeek = new Date().getTime() + (7 * 86400000)
      //console.log("Today is: " + today)



      //var ms = new Date().getTime() + 86400000;
      //  var tomorrowNew = new Date(ms);
      const day_ms = 86400000;
      console.log("and now " + today)
      console.log("week_ms added  is: " + addWeek);

      const days = (addWeek - today) / day_ms;

      console.log("Days between - " + days)
    },

    saveNewRange () {
      this.isEditRange = false;
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

    xxx(test) {
      console.log("Test nimi " + test)


    },

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
      this.editTime = {}
      //let editTimeArr = []
      this.isTimeToEdit = false;
      if (date) {

        let dateStr = date.toString().substring(8, 10)
        let dateInt = parseInt(dateStr);

        this.weekDay = date.toString().substring(0, 3)


        let time = {}
        //let times = [];
        this.markers.forEach(m => {
          if (m.date.getDate() === dateInt) {
            this.isTimeToEdit = true
            time = {
              day: dateInt,
              weekDay: this.weekDay,
              time: m.content
            }

          }

        })

        // times for selected day orange box
        this.editArr.push(time)

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
      await availableService.removeTimeOffer(this.provider.id, timerangeId);

      //console.log("Aga id argumendina? " + timerangeId)
      this.providerTimes = this.providerTimes.filter(time => time.id !== timerangeId);
      //this.editArr.time = this.editArr.filter(eat => eat.time.timeId !== timerangeId)
      this.times = [];
      this.markers = [];

      this.updateTimesAndMarkers();

      if (this.editArr.length > 1) {

        this.updateTimesAndMarkers();

        this.editArr[0].time = this.editArr[0].time.filter(eat => eat.timeId !== timerangeId)

      } else {
        this.editArr = [];
        this.updateTimesAndMarkers();

      }

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
      this.editArr = [];


      //this.updateTimesAndMarkers();

      this.providerTimes.forEach(offer => {
        this.initializeTime(offer);
      })

      this.providerTimes.forEach(times => {
        this.setTimeMarkers(times)
      })

      // ------------------------------------


      //-------------------------------------




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


      //let timeIds = [];
      //let time = this.times;
      //let timeContent = time[0].hours + " : " + time[0].minutes + " - " + time[1].hours + " : " + time[1].minutes;
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
      //const provider = this.userIsProvider;
      //if (provider) {

      console.log("Test provider status here: " + provider.status)

        this.provider = provider;


        // if (provider.timeoffer) {
        //
        // }

        if (provider) {
          // if (provider.timeoffer) {
          //
          // }
          this.providerTimes = provider.timeoffer;

          if (!provider.isAvailable24_7) {
            this.isProviderCalendar = true;
          }
          console.log("Provider rooms are: " + provider.room.map(pr => pr));
          this.rooms = provider.room;

          // this.un = provider.user.username;
          // this.ri = provider.yritys;
        }

        this.confirmedBookings = provider.booking.filter(pro => pro.status === "confirmed")


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
</script>

<style lang="scss" scoped>
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css");


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
  background: white none repeat scroll 0 0;
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



</style>