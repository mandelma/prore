<template>
  <div class="bg">
<!--    <MDBRow>-->
<!--      <MDBCol>-->

<!--      </MDBCol>-->

<!--    </MDBRow>-->

    <MDBRow style="margin-top: 17px;">
      <MDBCol class="proPanelHeader" md="4">

        <div class="pro-panel-header">
          <div class="header-content">
            <h2>{{provider.yritys}}</h2>
            <h2>{{provider.address}}</h2>
          </div>

        </div>

      </MDBCol>
      <MDBCol v-if="bookingsConfirmed.length > 0" md="8">

      </MDBCol>
    </MDBRow>


    <MDBContainer>

      <MDBRow >
        <MDBCol v-if="isProviderCalendar">
          <MDBContainer>
            <errorNotification
                :message = timeEditErrorMessage
            />
            <successNotification
                :message = timeEditSuccessMessage
            />

            <div v-if="isTimeToEdit" style="border: solid orange;  padding-bottom: 20px; padding-top: 20px;margin-bottom: 10px;">
              <div v-for="(item, i) in dayMarkerData" :key=" i">

                <MDBTable  borderless style="margin-right: 2px; font-size: 14px; color: #ddd; text-align: left;" >

                  <tbody >
                  <tr  v-for="(time, index) in item.time" :key="index">

                    <td>
                      {{ time.index }} {{time.text}}

                    </td>
                    <td>
                      <div style="">
                        <VueDatePicker dark  v-model="times[time.index]"  time-picker range @update:model-value="handleTime">
                          <template #trigger>
                            <MDBIcon class="clickable-text" @click="onEdit(time.timeId, time.index)">
                              <i class="fas fa-edit" size="lg" style="cursor: pointer"></i>
                            </MDBIcon>
                          </template>
                        </VueDatePicker>
                      </div>


                    </td>

                    <td>
                      <MDBBtnClose white @click="delTimeRange(time.timeId, time.index)"/>

                    </td>

                  </tr>
                  <tr v-if="item.type === 'highlight'" class="table-dark">

                    <td>
                      {{item.hours >= 10 ? item.hours : "0" + item.hours}} :
                      {{item.minutes >= 10 ? item.minutes : "0" + item.minutes}}
                    </td>
                    <td >
                      <MDBBtn v-if=" dayPanelIndex === null || dayPanelIndex !== i" block color="dark" @click="openTask(i)">
                        Ava
                      </MDBBtn>

                      <MDBBtn v-if="dayPanelIndex === i " block color="dark" @click="closeTask(i)">
                        Sulje
                      </MDBBtn>
                    </td>

                  </tr>

                  <tr v-if="item.type === 'highlight' && dayPanelIndex === i" class="table-dark">

                    <td colspan="4">
                      <div  class="flex flex-wrap align-items-center justify-content-center">
                        <div v-for="(booking, num) in item.booking" :key="num" class="scalein animation-duration-3000 animation-iteration flex align-items-center justify-content-center
                          font-bold   w-full">
                          <div >
                            <info
                                v-if="booking.onTime[0].day === item.day && num === i"
                                style="width: 100%;"
                                :index = i
                                status = "for-provider"
                                :msg = booking[i]
                                :content = booking
                                :provider = provider
                                @remove:proConfirmed = handleRemoveProConfirmed
                            />
                          </div>

                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </MDBTable>

              </div>
              <div style="display: flex; justify-content: right; padding: 20px;">
                <span style="color: greenyellow; cursor: pointer;" @click="closeDayPanel">Valmis</span>
              </div>

            </div>

            <div v-if="!isEditTime">
              <VueDatePicker
                  dark
                  :class="{datepicker_opacity: isMapSearchActive}"
                  style="margin-bottom: 50px; justify-content: center;"
                  @internal-model-change="handleInternal"
                  @time-picker-open="onTimePickerOpen"
                  @time-picker-close="onTimePickerClose"
                  @overlay-toggle="onOverlayToggle"

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
                  :start-time="startTime"

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
          <div v-else class="pro-panel">

            <errorNotification
                :message = errorMessage
            />
            <successNotification
                :message = successMessage
            />

            <MDBTable borderless style="position: relative; color: #ddd; font-size: 18px; text-align: left;">
              <tbody>
              <tr >
                <td>
                  {{provider.range === 0 ? "Tarjoan palvelua paikalla" : "Palvelun säde: " + provider.range + " km"}}
                </td>
                <td v-if="!isEditRange">
                  <MDBBtn outline="info" block size="lg" @click="isEditRange = true">Muokkaa toimintaalueetta</MDBBtn>
                </td>
                <td v-else>
                  <div style="border: solid #ddd; margin-bottom: 10px; padding: 7px; ">
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










<!--      times {{times }}-->
<!--      -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--      filled_days {{filled_days}}<br>-->
<!--      filled {{filled}}-->

    </MDBContainer>
  </div>


</template>

<script>

/* eslint-disable */


import VueDatePicker from '@vuepic/vue-datepicker';
import providerService from '../service/providers'
import editPrice from '../components/EditPrice'

import editProfession from '../components/EditProfession'

import errorNotification from '../components/notifications/errorMessage'
import successNotification from '../components/notifications/successMessage'
//import infoNotification from '../components/notifications/infoMessage'
//import monthConverter from '../components/controllers/month-converter'
import info from '../components/CompletedBookingPanel'
import '@/css/style.css';
import '@/css/notification.css'

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
import  { DatePickerInstance } from "@vuepic/vue-datepicker"

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
    filled: Array,
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
      // this.setHighlights()
      addDays(new Date(), 1)

    })
    const date = ref()
    //const startTime = ref([{ hours: 10, minutes: 5 }, { hours: 12, minutes: 10 }]);
    const startTime = ref([{ hours: new Date().getHours(), minutes: new Date().getMinutes() }, { hours: new Date().getHours(), minutes: new Date().getMinutes() }]);
    //const startTime = ref()

    return {
      dateForTimeEdit: null,
      date,
      //startTime: date,
      //startTime: [{ hours: 10, minutes: 5 }, { hours: 12, minutes: 10 }],
      startTime,
      editMarkedTimeID: null,
      editMarketIndex: null,
      activeDate: null,

      setMarkers: null,
      dayMarkerData: [],
      isEditTime: false,
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
      //filled: [addDays(new Date(), 2)],
      //filled: [addDays(new Date(), 25 - new Date().getDate())],
      //filled: [],
      filledTimes: [],
      dayPanelIndex: null,
      isHandleTask: false,
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
    //const date = ref()   //ref([new Date(), new Date()])

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

    //const startTime = ref(this.activeDate === new Date.getDate() ? [{ hours: 10, minutes: 5 }, { hours: 12, minutes: 10 }] : [{ hours: 0, minutes: 0 }, { hours: 0, minutes: 0 }]);
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
      //date,
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
      isDisplayConfirmed,

    }
  },
  mounted () {
    // console.log("Filled days length " + this.filled_days.length)
    // this.filled_days.forEach(fd => {
    //   console.log("hddddddddddddddddddddd")
    //   this.filled = [
    //     ...this.filled,
    //     addDays(new Date(), fd.day - new Date().getDate())
    //   ]
    // })
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
      //this.createFilledTimes();

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
    openTask (index) {
      this.dayPanelIndex = index;
      this.isHandleTask = true;
      //this.isDisplayConfirmed = !this.isDisplayConfirmed;
      this.isDisplayConfirmed = true;
      console.log("Index in open - " + index);
    },
    closeTask (index) {
      this.dayPanelIndex = null;
      this.isHandletask = false;
      this.isDisplayConfirmed = false;
      console.log("Index in close - " + index);
    },

    closeDayPanel () {
      this.isTimeToEdit = false;
      this.isEditTime = false;
      this.isDisplayConfirmed = false;
      this.dayPanelIndex = null;
    },

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
    createOrdered (date) {

    },
    handleInternal (date) {
      this.editArr = [];


      let editarr = []
      this.dayMarkerData = [];
      this.editTime = {}
      //let editTimeArr = []
      this.isTimeToEdit = false;
      if (date) {
        console.log("DATE" + date[0].getDate())

        this.activeDate = date[0].getDate();
        this.dateForTimeEdit = date;


        console.log("get date " + this.activeDate)
        let dateStr = date.toString().substring(8, 10)
        let dateInt = parseInt(dateStr);

        this.weekDay = date.toString().substring(0, 3)

        let time = {}
        let content = {}

        // Creating highlighted days
        this.confirmedBookings.forEach(confirmed => {

        })

        console.log("length xxxxxxxx " + this.markers.length)

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
              booking: this.bookingsConfirmed.filter(bc => bc.onTime[0].day === dateInt)
            });

          } else {
            console.log("Ei ole")
          }

        })


        // this.bookingsConfirmed.forEach(b => {
        //   if (dateInt === b.onTime[0].day) {
        //     console.log("On")
        //     this.isTimeToEdit = true;
        //     editarr.push({
        //       type: "highlight",
        //       day: dateInt,
        //       weekDay: this.weekDay,
        //       hours: b.onTime[0].hours,
        //       minutes: b.onTime[0].minutes,
        //       booking: b
        //     });
        //
        //   } else {
        //     console.log("Ei ole")
        //   }
        //
        // })


        let isCompared = false;
        const markerType = ""

        //let times = [];
        const markerContents = [];
        this.markers.forEach(m => {
          if (m.date.getDate() === dateInt) {
            isCompared = true;
            this.isTimeToEdit = true
            time = {
              type: "marker",
              day: dateInt,
              weekDay: this.weekDay,
              time: m.content
            }
            markerContents.push(m.content);
            this.editArr.push(time)
          }

        })

        // this.setMarkers = {
        //   dFrom: offer.dayFrom,
        //   date: markedDay,
        //   type: 'line',
        //   color: 'orange',
        //   content: this.contents
        // }



        if (isCompared) {
          this.dayMarkerData = this.dayMarkerData.concat({
            type: "marker",
            day: dateInt,
            weekday: this.weekDay,
            time: markerContents

          })

        }

        this.times = []
        if (this.providerTimes) {
          this.providerTimes.forEach(offer => {
            this.initializeTime(offer);
          })
        }
        // times for selected day orange box
        //this.editArr = editarr;
        //this.editArr.push(time);
        //editarr.push(time);
        this.editArr = this.editArr.concat(editarr);
        this.dayMarkerData = this.dayMarkerData.concat(editarr);

      }


    },
    onTimePickerOpen (date) {

      console.log("Timepicker open! ")
    },
    onTimePickerClose () {
      console.log("Timepicker is closed!")
    },

    onOverlayToggle (overlay) {
      console.log(`Overlay ${overlay.overlay} is ${overlay.open ? 'opened' : 'closed'}`);
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
    // removeExpiredDateTime () {
    //   this.providerTimes.forEach(timerange => {
    //     let year = timerange.yearFrom;
    //     let month = timerange.monthFrom;
    //     let day = timerange.dayFrom;
    //     let hour = timerange.hoursFrom;
    //     let minute = timerange.minutesFrom;
    //     if (new Date(year, month, day, hour, minute).getTime() < new Date().getTime()) {
    //       //this.delTimeRange(timerange.id);
    //       this.removeExpiredTimeMarker(timerange);
    //     }
    //   })
    //
    // },
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
    // async removeExpiredTimeMarker (marker) {
    //   console.log("Expired--- " + marker.id)
    //
    //   await availableService.removeTimeOffer(this.provider.id, marker.id);
    //   this.markers = this.markers.filter(marker => marker.content.timeId !== marker.id);
    //   this.providerTimes = this.providerTimes.filter(time => time.id !== marker.id);
    //   console.log("M pikkus " + this.markers.length)
    // },
    async delTimeRange (timerangeId, index) {
      await availableService.removeTimeOffer(this.provider.id, timerangeId);

      console.log("Id argumendina? " + timerangeId)

      this.times.splice(index, 1);

      this.providerTimes = this.providerTimes.filter(time => time.id !== timerangeId);

      //const markers = editArr.filter(ea => ea.type === "marker");

      //this.editArr = this.editArr.map(ea => ea.type === "marker" ? ea.time.filter(t => t.timeId !== timerangeId) : ea);
      //this.editArr = this.editArr.filter(eaf => eaf.time.some(eas => eas.timeId !== timerangeId));

      //this.editArr[0].time = this.editArr[0].time.filter(eat => eat.timeId !== timerangeId)
      //this.dayPanelData[0] = this.dayPanelData[0].time.filter(item => item.timeId !== timerangeId);



      this.markers = this.markers.filter(marker => marker.content.timeId !== timerangeId);
      //this.markers = this.markers.map(marker => marker.content.filter(mc => mc.timeId !== timerangeId));
      //this.markers = this.markers[0].content.filter(c => c.timeId !== timerangeId);


      console.log("MARKERS LEN " + this.markers.length)

      // if (this.editArr[0].time.length === 0) {
      //   this.editArr = [];
      // }

      this.dayMarkerData = this.dayMarkerData.filter(dpd => dpd.type === "marker");

      if (this.dayMarkerData.length > 1) {
        //this.markers = []
        //this.editArr = []
        this.dayMarkerData = this.dayMarkerData.filter(item => item.time.some(it => it.timeId !== timerangeId))

      } else {
        console.log("Something else!!")
        this.dayMarkerData[0].time = this.dayMarkerData[0].time.filter(item => item.timeId !== timerangeId);

      }

      if (this.dayMarkerData[0].time.length === 0) {
        this.isTimeToEdit = false;
      }
      //this.updateTimesAndMarkers();

      //this.editArr = this.editArr.filter(ea => ea.type === "marker")

      //const index = this.editArr.findIndex(eaf => eaf.time.filter(eat => aet.))

      //this.editArr.filter(ea => ea.type === "marker" && ea.time.includes(timerangeId));
      // this.editArr.forEach(ea => {
      //   if (ea.type === "marker")
      //     console.log("xxx " + ea.time.map(a => a.timeId))
      // })



      //this.editArr = this.editArr.time.filter(eat => eat.time.timeId !== timerangeId);
      //this.editArr.time = this.editArr.filter(eat => eat.type === "marker" && eat.time.timeId !== timerangeId)
      // this.times = [];
      // this.markers = [];
      //
      //this.updateTimesAndMarkers();
      //
      // const includesMarkers = this.editArr.filter(ea => ea.type === "marker")
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

      this.providerTimes.forEach((times, index) => {
        this.setTimeMarkers(times, index)
        this.initializeTime(times);
      })


      // NB ------------------------------------------------------

      let dayHighlightData = [];

      let time = {}
      this.editArr = [];
      this.dayMarkerData = [];

      console.log("------------- PT -------- " + this.providerTimes.length)
      console.log("------------- ML --------- " + this.markers.length)

      this.filled_days.forEach(f => {
        if (this.date[0].getDate() === f.day) {
          console.log("On")
          this.isTimeToEdit = true;
          dayHighlightData.push({
            type: "highlight",
            day: this.date[0].getDate(),
            weekDay: this.weekDay,
            hours: f.hours,
            minutes: f.minutes,
            booking: this.bookingsConfirmed.filter(bc => bc.onTime[0].day === this.date[0].getDate())
          });

        } else {
          console.log("Ei ole")
        }

      })
      let d;

      //TODO siin probleem
      const timeContents = [];
      this.markers.forEach(m => {
        if (m.date.getDate() === savedTimeRange.dayFrom) {
          this.isTimeToEdit = true;
          time = {
            day: savedTimeRange.dayFrom,
            weekDay: this.weekDay,
            time: m.content
          }
          timeContents.push(m.content)
          //this.editArr.push(time);

        }

      })

      this.dayMarkerData = this.dayMarkerData.concat({
        type: "marker",
        day: savedTimeRange.dayFrom,
        weekday: this.weekDay,
        time: timeContents
      })
      // this.dayPanelData = {
      //   type: "marker",
      //   day: savedTimeRange.dayFrom,
      //   weekday: this.weekDay,
      //   time: timeContents
      //
      // }
      this.dayMarkerData = this.dayMarkerData.concat(dayHighlightData);
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




        this.isEditTime = false;

        //this.providerTimes = this.providerTimes.concat(edited)

        //this.testii = edited;



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
    onEdit (id, index) {
      console.log("Editing time id " + id)
      console.log("Index on " + index)
      this.editMarkedTimeID = id;
      this.editMarketIndex = index;


      this.isEditTime = true;

    },
    async handleTime (date) {

      this.xxx = date
      console.log("Time is handled " + date[0].hours + " " + date[1].hours )
      console.log("ID NOW HERE" + this.editMarkedTimeID)

      const offerForEdit = {
        hoursFrom: date[0].hours,
        minutesFrom: date[0].minutes,
        hoursTo: date[1].hours,
        minutesTo: date[1].minutes
      }

      this.times[this.editMarketIndex] = [{hours: date[0].hours, minutes: date[0].minutes}, {hours: date[1].hours, minutes: date[1].minutes}];


      const edited = await availableService.updateOffer(this.editMarkedTimeID, offerForEdit)
      console.log("Offer edited: " + edited)
      this.timeEditSuccessMessage = "Aika muokattu onnistuneesti!";

      setTimeout(() => {
        this.timeEditSuccessMessage = null
      }, 2000)
      this.isTimeToEdit = false;

      this.providerTimes = this.providerTimes.filter(time => time.id !== this.editMarkedTimeID ? time : edited);

      //this.markers.map(marker => marker.content.timeId === this.editMarkedTimeID ? )
      const startHours = date[0].hours >= 10 ? date[0].hours : "0" + date[0].hours;
      const endHours = date[1].hours >= 10 ? date[1].hours : "0" + date[1].hours;
      const startMinutes = date[0].minutes >= 10 ? date[0].minutes : "0" + date[0].minutes;
      const endMinutes = date[1].minutes >= 10 ? date[1].minutes : "0" + date[1].minutes;
      let newTimeContent = startHours + " : " + startMinutes + " - " + endHours + " : " + endMinutes;


      this.markers.map(marker => marker.content.timeId === this.editMarkedTimeID ? marker.content.text = newTimeContent : marker);

      //this.dayMarkerData = this.dayMarkerData[0].time.map(item => item.timeId !== this.editMarkedTimeID);

      // this.providerTimes.forEach((offer, index) => {
      //   this.setTimeMarkers(offer, index);
      // })

      this.isEditTime = false;
      //this.isConfimTime = true;
      this.timeToEdit = date;


      // if (this.datepicker) {
      //   console.log("Datepicker value: " + this.datepicker.value.closeMenu())
      // }


      //this.isEditTime = false;




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



    async setTimeMarkers (offer, index) {
      //this.markers = [];
      console.log("KERTA " + offer.id)
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

      console.log("MAKKED DAY " + markedDay.getDate())

      console.log("Test markers: " + new Date(offer.yearFrom, offer.monthFrom, offer.dayFrom, offer.hoursFrom, offer.minutesFrom))
      let i;

      const mDate = new Date(offer.yearFrom, offer.monthFrom, offer.dayFrom, offer.hoursFrom, offer.minutesFrom);
      const lastDate = new Date(offer.yearTo, offer.monthTo, offer.dayTo, offer.hoursTo, offer.minutesTo);

      const startHours = offer.hoursFrom >= 10 ? offer.hoursFrom : "0" + offer.hoursFrom;
      const endHours = offer.hoursTo >= 10 ? offer.hoursTo : "0" + offer.hoursTo;
      const startMinutes = offer.minutesFrom >= 10 ? offer.minutesFrom : "0" + offer.minutesFrom;
      const endMinutes = offer.minutesTo >= 10 ? offer.minutesTo : "0" + offer.minutesTo;
      let timeContent = startHours + " : " + startMinutes + " - " + endHours + " : " + endMinutes;

      let content = {text: timeContent, index: index, timeId: offer.id, date: mDate,  color: 'red'};


      this.contents.push({text: timeContent, index: index, timeId: offer.id, color: 'red'})

      let mContent = {text: timeContent, index: index, timeId: offer.id, color: 'red'}

      console.log("Marker added " + offer.id)
      if (this.markers)
      if (lastDate >= new Date()) {
        this.markers = this.markers.concat({
          dFrom: offer.dayFrom,
          date: markedDay,
          type: 'line',
          color: 'orange',
          content: content
        })
      } else {
        await availableService.removeTimeOffer(this.provider.id, offer.id);
        //this.markers = this.markers.filter(marker => marker.content.timeId !== marker.id);
        //this.providerTimes = this.providerTimes.filter(time => time.id !== marker.id);
      }




      //this.editArr.time = this.contents;



      console.log("Time pikkus " + this.times.length)
      this.times.forEach((time, index) => {

      //   if (time[0].day === offer.dayFrom) {
      //
      //     let timeContent = time[0].hours + " : " + time[0].minutes + " - " + time[1].hours + " : " + time[1].minutes;
      //     this.contents.push({text: timeContent, index: index, timeId: this.providerTimes[index].id, color: 'red'})
      //   }
      //
      //   if (!this.markers.some(m => m.content.find(c => c.timeId !== this.providerTimes[index].id))) {
      //   }
      //
      //   console.log("Marker added " + offer.id)
      //   //if (this.markers)
      //   this.markers = this.markers.concat({
      //     dFrom: offer.dayFrom,
      //     date: markedDay,
      //     type: 'line',
      //     color: 'orange',
      //     content: this.contents
      //   })
      })

    },
    async providerData () {
      //console.log("User id in provider panel: " + this.userId)
      const provider = await providerService.getProvider(this.userId);

      // this.filled_days.forEach(fd => {
      //   this.filled = [
      //     ...this.filled,
      //     addDays(new Date(), fd.day - new Date().getDate())
      //   ]
      // })

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

        this.providerTimes = provider.timeoffer;

        if (!provider.isAvailable24_7) {
          this.isProviderCalendar = true;
        }
        //console.log("Provider rooms are: " + provider.room.map(pr => pr));
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



        this.providerTimes.forEach((offer, index) => {
          this.setTimeMarkers(offer, index);
        })
      }

      //this.removeExpiredDateTime();

      console.log("Provider times pikkus " + this.providerTimes.length)
      console.log("Markerite pikkus " + this.markers.length)

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
      const compareDate = new Date(offer.yearFrom, offer.monthFrom, offer.dayFrom, offer.hoursFrom, offer.minutesFrom);
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
      if (compareDate >= new Date()) {
        this.times.push(time)
      }


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




#wrapper{position:relative; height:40px; width:100%;}
//#wrapper p{position:absolute;  top:0;left:0; display:block; white-space:nowrap}
</style>