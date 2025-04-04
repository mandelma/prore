<template>
  <div style="padding-top: 25px;">
    <MDBContainer>
      <MDBRow>
        <MDBCol lg="8">
          <div >
            <VueDatePicker
                dark
                style="margin-bottom: 50px; justify-content: center;"
                @internal-model-change="handleInternal"

                @overlay-toggle="onOverlayToggle"

                range auto-range="0"
                v-model="date"
                @update:model-value="handleDate"
                inline
                locale="fi" selectText="Valitse"
                :min-date="new Date()"
                :markers="markers"
                :highlight="filled"
                :teleport="true"
                :month-change-on-scroll="false"


                ref="datepicker"
                :key="pickerKey"

            >

            </VueDatePicker>
<!--            @update:modelValue="handleDateUpdate"  :flow="['calendar', 'time']"-->
          </div>
        </MDBCol>
        <MDBCol style="position: relative;">
          <div class="calendar-info">

            <h4 v-if="dateToDisplay">
              {{dateToDisplay}}
            </h4>
<!--            <h4 v-else class="middle">-->
<!--              Hello world-->
<!--            </h4>-->
<!--            <h2 class="middle">Hello world</h2>-->

            <div v-if="dayMarkerData.length > 0"  style="padding-bottom: 20px; padding-top: 20px;margin-bottom: 10px;">
              <div v-for="(item, i) in dayMarkerData" :key=" i">

                <MDBTable dark striped  borderless style="margin-right: 2px; font-size: 14px; color: #ddd; text-align: left;" >

                  <tbody >
                  <tr  v-for="(time, index) in item.time" :key="index">

                    <td style="border-left: 3px solid orange;">
                      {{time.text}}

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

                    <td style="border-left: 3px solid #35BBC7FF;">
                      {{item.hours >= 10 ? item.hours : "0" + item.hours}} :
                      {{item.minutes >= 10 ? item.minutes : "0" + item.minutes}}
                    </td>
                    <td colspan="4">
                      <MDBBtn v-if=" dayPanelIndex === null || dayPanelIndex !== i" block color="dark" @click="openTask(i)">
                        Ava
                      </MDBBtn>
<!--                      v-if="dayPanelIndex === i "-->
                      <MDBBtn v-else block color="dark" @click="closeTask(i)">
                        Sulje
                      </MDBBtn>
                    </td>


                  </tr>

                  <tr v-if="item.type === 'highlight' && dayPanelIndex === i" class="table-dark">

                    <td colspan="5  ">
                      <div  class="flex flex-wrap align-items-center justify-content-center">
                        <div v-for="(booking, num) in item.booking" :key="num" class="scalein animation-duration-3000 animation-iteration flex align-items-center justify-content-center
                        font-bold   w-full">
                          <div >
                            <info
                                v-if="booking.onTime[0].day === item.day && dayPanelIndex === i"
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

<!--              <div style="display: flex; justify-content: right; padding: 20px;">-->
<!--                <span style="color: greenyellow; cursor: pointer;" @click="closeDayPanel">Valmis</span>-->
<!--              </div>-->

            </div>
            <div v-else>
              <h4 class="middle">EI MERKINTOJA</h4>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
<!--      DayPanelIndex {{dayPanelIndex}}<br>-->
<!--      dayPanelData length {{dayMarkerData.length}}<br>-->
<!--      dayPanelData {{dayMarkerData}}-->
    </MDBContainer>
  </div>

</template>

<script>
/* eslint-disable */
import {
  MDBContainer, MDBRow, MDBCol, MDBTable, MDBIcon, MDBBtn, MDBBtnClose
} from 'mdb-vue-ui-kit';
import VueDatePicker from '@vuepic/vue-datepicker';

import info from '../components/CompletedBookingPanel'
import { ref } from 'vue';
//import df from '../components/controllers/formatDate'
import '@/css/style.css';
import '@/css/notification.css'
import addDays from "date-fns/addDays";
import availableService from "@/service/calendarOffers";
import providerService from "@/service/providers";
export default {
  name: "Calendar",
  props: {
    userIsProvider: Object,
    bookings: Array,
    filled_days: Array,
    filled: Array,
    bookingsConfirmed: Array
  },
  components: {
    VueDatePicker,
    info,
    //df,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTable,
    MDBIcon,
    MDBBtn,
    MDBBtnClose
  },
  data () {
    const date = ref()
    const datepicker = ref(null)
    const pickerKey = ref(null)
    const openCalendar = () => {
      datepicker.value.toggleMenu();
    };
    return {
      open: false,
      date,
      datepicker,
      pickerKey,
      openCalendar,
      provider: {},
      providerTimes: [],
      times: [],
      dayMarkerData: [],
      editedMarkerID: null,
      editedMarkerIndex: null,
      dayPanelIndex: null,
      userId: null,
      dateToDisplay: null,
      markers: [],
      isHandleInternal: false
      //d_f: df
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
  mounted ()  {
    //this.dateToDisplay = this.fDateString(new Date());
    if (this.datepicker) {
      console.log("Yes it is datepicker instance...")
      // Close the menu programmatically
      this.datepicker.openMenu()
    }
  },
  methods: {
    onOverlayToggle(overlay) {
      console.log(`Overlay ${overlay.overlay} is ${overlay.open ? 'opened' : 'closed'}`);
    },
    fDateString (date) {
      const month = [];
      month[0]="Tammikuu";
      month[1]="Helmikuu";
      month[2]="Maaliskuu";
      month[3]="Huhtikuu";
      month[4]="Toukokuu";
      month[5]="Kesäkuu";
      month[6]="Heinäkuu";
      month[7]="Elokuu";
      month[8]="Syyskuu";
      month[9]="Lokakuu";
      month[10]="Marraskuu";
      month[11]="Joulukuu";

      const fDate = new Date(date);

      return  month[new Date(date).getMonth()] + " " + fDate.getDate() + " / " + fDate.getFullYear();
    },
    handleInternal (date) {

      // if (date) {
      //   this.pickerKey = null; // Force Vue to re-render the picker
      // }
      console.log("Pickerkey ---- " + this.pickerKey)

      // this.editArr = [];
      //
      // let editarr = []
      // this.dayMarkerData = [];
      // this.editTime = {}
      // //let editTimeArr = []
      // this.isTimeToEdit = false;
      // if (date) {
      //   console.log("DATE" + date[0].getDate())
      //
      //   this.activeDate = date[0].getDate();
      //   this.dateForTimeEdit = date;
      //
      //   console.log("get date " + this.activeDate)
      //   let dateStr = date.toString().substring(8, 10)
      //   let dateInt = parseInt(dateStr);
      //
      //   this.weekDay = date.toString().substring(0, 3)
      //
      //   let time = {}
      //   let content = {}
      //
      //   console.log("length xxxxxxxx " + this.markers.length)
      //
      //   this.filled_days.forEach(f => {
      //     if (dateInt === f.day) {
      //       console.log("On")
      //       this.isTimeToEdit = true;
      //       editarr.push({
      //         type: "highlight",
      //         day: dateInt,
      //         weekDay: this.weekDay,
      //         hours: f.hours,
      //         minutes: f.minutes,
      //         booking: this.bookingsConfirmed.filter(bc => bc.onTime[0].day === dateInt)
      //       });
      //
      //     } else {
      //       console.log("Ei ole")
      //     }
      //
      //   })
      //
      //   let isCompared = false;
      //   const markerType = ""
      //
      //   const markerContents = [];
      //   this.markers.forEach(m => {
      //     if (m.date.getDate() === dateInt) {
      //       isCompared = true;
      //       this.isTimeToEdit = true
      //       time = {
      //         type: "marker",
      //         day: dateInt,
      //         weekDay: this.weekDay,
      //         time: m.content
      //       }
      //       markerContents.push(m.content);
      //       this.editArr.push(time)
      //     }
      //
      //   })
      //
      //   if (isCompared) {
      //     this.dayMarkerData = this.dayMarkerData.concat({
      //       type: "marker",
      //       day: dateInt,
      //       weekday: this.weekDay,
      //       time: markerContents
      //
      //     })
      //
      //   }
      //
      //   this.times = []
      //   if (this.providerTimes) {
      //     this.providerTimes.forEach(offer => {
      //       this.initializeTime(offer);
      //     })
      //   }
      //
      //   this.editArr = this.editArr.concat(editarr);
      //   this.dayMarkerData = this.dayMarkerData.concat(editarr);
      //
      // }


      this.dayMarkerData = [];
      let filledContainer = [];
      let markerContainer = [];
      let markerContents = [];

      if (date) {
        this.isHandleInternal = true;
        // console.log("DATE" + date[0].getDate())
        // console.log("date format: " + this.fDateString(date[0]))
        this.dateToDisplay = this.fDateString(date[0]);




        const weekDay = date.toString().substring(0, 3)
        const day = date[0].getDate();
        const month = date[0].getMonth();
        let time = {}
        let content = {}

        console.log("length xxxxxxxx " + this.markers.length)

        this.filled_days.forEach(f => {
          if (day === f.day) {
            console.log("On see päev " + day)
            //this.isTimeToEdit = true;
            filledContainer.push({
              type: "highlight",
              day: day,
              weekDay: weekDay,
              hours: f.hours,
              minutes: f.minutes,
              booking: this.bookingsConfirmed.filter(bc => bc.onTime[0].day === day)
            });

          } else {
            console.log("Ei ole")
          }

        })

        let isCompared = false;
        const markerType = ""

        const markerContents = [];
        this.markers.forEach(m => {
          if (m.date.getDate() === day) {
            isCompared = true;
            //this.isTimeToEdit = true
            time = {
              type: "marker",
              day: day,
              weekDay: weekDay,
              time: m.content
            }
            markerContents.push(m.content);
            markerContainer.push(time)
          }

        })

        if (isCompared) {
          this.dayMarkerData = this.dayMarkerData.concat({
            type: "marker",
            day: day,
            weekday: weekDay,
            time: markerContents

          })

        }

        this.times = []
        if (this.providerTimes) {
          this.providerTimes.forEach(offer => {
            this.initializeTime(offer);
          })
        }

        //this.editArr = this.editArr.concat(editarr);
        this.dayMarkerData = this.dayMarkerData.concat(filledContainer);


      }

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
        }

      console.log("Time pikkus " + this.times.length)

    },
    async handleDate (value) {
      console.log("Date handled! " +  value)


      if (value) {
        this.pickerKey++; // Force Vue to re-render the picker
      }
      console.log("Pickerkey ---- " + this.pickerKey)

      const createdDate = {
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




      const savedTimeRange = await availableService.addAdditionalOffer(this.provider.id, createdDate);

      //console.log("Provider times " + this.providerTimes)
      if (savedTimeRange) {
        this.providerTimes = this.providerTimes.concat(savedTimeRange);
      }


      this.times = [];
      this.markers = [];

      this.providerTimes.forEach((times, index) => {
        this.setTimeMarkers(times, index)
        this.initializeTime(times);
      })


      // NB ------------------------------------------------------

      let dayHighlightContents = [];

      let time = {}
      this.editArr = [];
      this.dayMarkerData = [];

      console.log("------------- PT -------- " + this.providerTimes.length)
      console.log("------------- ML --------- " + this.markers.length)

      this.filled_days.forEach(fd => {
        if (this.date[0].getDate() === fd.day) {
          console.log("On")
          this.isTimeToEdit = true;
          dayHighlightContents.push({
            type: "highlight",
            day: this.date[0].getDate(),
            weekDay: "Laupäev",
            hours: fd.hours,
            minutes: fd.minutes,
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
            weekDay: "Laupäev",
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
      this.dayMarkerData = this.dayMarkerData.concat(dayHighlightContents);

      //this.pickerKey = null;

      console.log("Value ----------  " + value[0].getHours());
      // this.$nextTick(() => {
      //   console.log("NextTick....");
      //   this.date = new Date(value); // Ensure reactivity
      // });


      // if (value && typeof value === 'object' && value[0].getHours() !== undefined) {
      //   console.log("Value xxx " + value);
      //   // The time has been selected, so force the calendar view
      //   this.$nextTick(() => {
      //     console.log("NextTick....--...");
      //     this.date = new Date(value); // Ensure reactivity
      //   });
      // }

    },
    handleDateUpdate (value) {
      console.log("Value ----------  " + value[0].getHours());
      this.$nextTick(() => {
        console.log("NextTick....");
        this.date = new Date(value); // Ensure reactivity
      });
      if (value && typeof value === 'object' && value[0].getHours() !== undefined) {
        console.log("Value xxx " + value);
        // The time has been selected, so force the calendar view
        this.$nextTick(() => {
          this.date = new Date(value); // Ensure reactivity
        });
      }
    },
    onEdit (id, index) {
      console.log("Editing time id " + id)
      console.log("Index on " + index)
      this.editedMarkerID = id;
      this.editedMarkerIndex = index;


      //this.isEditTime = true;

    },
    async handleTime (date) {

      this.xxx = date
      console.log("Time is handled " + date[0].hours + " " + date[1].hours )
      console.log("ID NOW HERE" + this.editedMarkerID)

      const offerForEdit = {
        hoursFrom: date[0].hours,
        minutesFrom: date[0].minutes,
        hoursTo: date[1].hours,
        minutesTo: date[1].minutes
      }

      this.times[this.editedMarkerIndex] = [{hours: date[0].hours, minutes: date[0].minutes}, {hours: date[1].hours, minutes: date[1].minutes}];


      const edited = await availableService.updateOffer(this.editedMarkerID, offerForEdit)
      console.log("Offer edited: " + edited)
      this.timeEditSuccessMessage = "Aika muokattu onnistuneesti!";

      setTimeout(() => {
        this.timeEditSuccessMessage = null
      }, 2000)
      this.isTimeToEdit = false;

      this.providerTimes = this.providerTimes.filter(time => time.id !== this.editedMarkerID ? time : edited);

      const startHours = date[0].hours >= 10 ? date[0].hours : "0" + date[0].hours;
      const endHours = date[1].hours >= 10 ? date[1].hours : "0" + date[1].hours;
      const startMinutes = date[0].minutes >= 10 ? date[0].minutes : "0" + date[0].minutes;
      const endMinutes = date[1].minutes >= 10 ? date[1].minutes : "0" + date[1].minutes;
      let newTimeContent = startHours + " : " + startMinutes + " - " + endHours + " : " + endMinutes;

      this.markers.map(marker => marker.content.timeId === this.editedMarkerID ? marker.content.text = newTimeContent : marker);

      //this.isEditTime = false;

      //this.timeToEdit = date;

    },
    async delTimeRange (rangeId, index) {
      await availableService.removeTimeOffer(this.provider.id, rangeId);

      console.log("Id argumendina? " + rangeId)

      this.times.splice(index, 1);

      this.providerTimes = this.providerTimes.filter(time => time.id !== rangeId);


      this.markers = this.markers.filter(marker => marker.content.timeId !== rangeId);

      console.log("MARKERS LEN " + this.markers.length)
      const highlights = this.dayMarkerData.filter(dpd => dpd.type === "highlight");

      this.dayMarkerData = this.dayMarkerData.filter(dpd => dpd.type === "marker");

      //this.dayMarkerData[0].time = this.dayMarkerData[0].time.filter(item => item.timeId !== rangeId);

      //this.dayMarkerData = this.dayMarkerData.filter(dmd => dmd.type === "marker").filter(item => item.time.some(it => it.timeId !== rangeId))




      if (this.dayMarkerData.length > 1) {
        this.dayMarkerData = this.dayMarkerData.filter(item => item.time.some(it => it.timeId !== rangeId))


      } else {
        console.log("Something else!!")
        this.dayMarkerData[0].time = this.dayMarkerData[0].time.filter(item => item.timeId !== rangeId);
      }
      this.dayMarkerData = this.dayMarkerData.concat(highlights);

      if (this.dayMarkerData[0].time.length === 0) {
        //this.isTimeToEdit = false;
        console.log("No times to display!!")
      }
    },

    openTask (index) {
      this.dayPanelIndex = index;
      //this.isHandleTask = true;

      //this.isDisplayConfirmed = true;
      console.log("Index in open - " + index);
    },
    closeTask (index) {
      this.dayPanelIndex = null;
      //this.isHandletask = false;
      //this.isDisplayConfirmed = false;
      console.log("Index in close - " + index);
    },

    async providerData () {
      const provider = await providerService.getProvider(this.userId);

      if (provider) {
        this.provider = provider;

        //this.creditLeft = ((provider.proTime - new Date().getTime()) / 86400000).toFixed() < 0 ? 0 : ((provider.proTime - new Date().getTime()) / 86400000).toFixed();

        this.providerTimes = provider.timeoffer;
      }

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
  }
}
</script>

<style lang="scss">
//@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css");
//@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css");

:root {
  --text-color: #9cebeb;
  --dp-cell-size: 60px;
  --dp-cell-padding: 10px;
  --dp-month-year-row-button-size: 45px;
  --dp-button-icon-height: 30px;
  --dp-font-size: 1.5rem;

}

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
  //--dp-highlight-color: rgb(64, 64, 39);
  --dp-highlight-color: rgb(53, 187, 199);
  --dp-range-between-dates-background-color: var(--dp-hover-color, #484848);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color, #fff);
  --dp-range-between-border-color: var(--dp-hover-color, #fff);
}

.calendar-info {
  background-color: #2e2b2b;

  height: 500px;
  overflow-y: scroll;

  padding: 13px;
}


@media only screen and (max-width: 500px) {

  :root {
    --text-color: #9cebeb;
    --dp-cell-size: 35px;
    --dp-cell-padding: 5px;
    --dp-month-year-row-button-size: 35px;
    --dp-font-size: 1rem;
    --dp-highlight-color: rgb(245, 131, 156);
  }
  .calendar-info {
    background-color: #2e2b2b;
    height: 400px;
    overflow-y: scroll;

    padding: 13px;
  }
}


.middle {
  color: #969595;
  position : absolute;
  width    : 200px;
  height   : 100px;
  left     : 50%;
  top      : 50%;
  margin-left : -100px; /* half of the width  */
  margin-top  : -100px; /* half of the height */
}
.center-block {
  top:50%;
  left: 50%;
  transform: translate3d(-50%,-50%, 0);
  position: absolute;
}
</style>