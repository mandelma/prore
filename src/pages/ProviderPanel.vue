<template>
  <div>
    <h1 style="margin-top: 50px; margin-bottom: 50px">TMI:n hallintapaneeli...</h1>

    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <VueDatePicker
              style="margin-bottom: 50px;"
              range
              v-model="date"
              @update:model-value="handleDate"
              inline

              :min-date="new Date()"
              :markers="markers"

              :month-change-on-scroll="false"
          >


            <template #marker-tooltip="{ tooltip}" >

              <VueDatePicker
                  v-model="times[tooltip.index]"

                  @update:model-value="handleTime"
                  range
                  time-picker
                  :min-time="{ hours: times[tooltip.index][0].hours, minutes: times[tooltip.index][0].minutes }"
                  minutes-grid-increment="10"
                  @open="alertFn(tooltip.index)"
              >

                <template #trigger  >

                  <div @click="test(tooltip.index)" style="cursor: pointer;">


                    {{times[tooltip.index][0].hours >= 10 ? times[tooltip.index][0].hours : "0" + times[tooltip.index][0].hours}} :
                    {{times[tooltip.index][0].minutes >= 10 ? times[tooltip.index][0].minutes : "0" + times[tooltip.index][0].minutes}} -
                    {{times[tooltip.index][1].hours >= 10 ? times[tooltip.index][1].hours : "0" + times[tooltip.index][1].hours}} :
                    {{times[tooltip.index][1].minutes >= 10 ? times[tooltip.index][1].minutes : "0" + times[tooltip.index][1].minutes}}

                    <!--
                    {{times[tooltip.index][0].hours}} : {{times[tooltip.index][0].minutes}} -
                    {{times[tooltip.index][1].hours}} : {{times[tooltip.index][1].minutes}}
                    -->
                    <!--
                    {{tooltip.hFrom}} : {{tooltip.mFrom}} -
                    {{tooltip.hTo}} : {{tooltip.mTo}}
                    -->
                    &nbsp;&nbsp;
                    <MDBIcon>
                      <i class="fas fa-edit"></i>
                    </MDBIcon>

                  </div>

                </template>

              </VueDatePicker>
              &nbsp;&nbsp;
              <MDBIcon @click="delTimeRange(tooltip.timeId)">
                <i class="fas fa-times"></i>
              </MDBIcon>

              <!--
              {{tooltip.offerId}}&nbsp;&nbsp;
              {{tooltip.index}}
              -->

            </template>


          </VueDatePicker>

        </MDBCol>
        <MDBCol v-if="isEditPrice">
          <editPrice
            @cancel:editPrice = cancelEditPrice
            @save:editedPrice = saveEditedPrice
          />
        </MDBCol>
        <MDBCol v-else>
          <h2>{{provider.yritys}}:</h2>
          <errorNotification
              :message = errorMessage
          />
          <successNotification
            :message = successMessage
          />
          <MDBTable borderless style="font-size: 18px; text-align: left;">
            <tbody>
            <tr>
              <td>
                {{provider.address}}
              </td>
              <td>
                <MDBBtn outline="info" block size="lg" @click="editAddress">Muokkaa osoitetta</MDBBtn>
              </td>
            </tr>
            <tr>
              <td v-for="(pro, i) in provider.profession" :key="i">
                {{pro}}
              </td>
              <td>
                <MDBBtn outline="info" block size="lg" @click="editProfession">Muokkaa ammattia</MDBBtn>
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

            </tbody>
          </MDBTable>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import providerService from '../service/providers'
import editPrice from '../components/EditPrice'
import errorNotification from '../components/notifications/errorMessage'
import successNotification from '../components/notifications/successMessage'
// inline auto-apply
import {
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBBtn
}from "mdb-vue-ui-kit";
import {ref} from "vue";
import addDays from "date-fns/addDays";
import availableService from '../service/calendarOffers';
export default {
  name: "Provider-panel",
  components: {
    errorNotification,
    successNotification,
    editPrice,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBTable,
    MDBBtn,
    VueDatePicker
  },
  data () {
    return {
      testi: {}
    }
  },
  setup () {
    const datee = ref(null)
    const isEditPrice = ref(false)
    const clearTime = ref(null)
    const dateTest = ref(null)
    const date = ref(null)
    const markers = ref([])
    const contents = ref([])
    const isContents = ref(false)
    const markedDays = ref([])
    const time = ref({})
    const times = ref([])
    const datetime = ref({})
    const userId = ref("")
    const provider = ref({})
    const providerTimes = ref([])
    const errorMessage = ref(null)
    const successMessage = ref(null)
    return {
      datee,
      isEditPrice,
      clearTime,
      dateTest,
      date,
      markers,
      contents,
      isContents,
      markedDays,
      time,
      times,
      datetime,
      userId,
      provider,
      providerTimes,
      errorMessage,
      successMessage
    }
  },

  mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.userId = user.id
      //console.log("User token: " + this.loggedUser.token)
      //console.log("User id in provider panel: " + user.id)
      // this.datee = (
      //     [
      //       {
      //         day: 20,
      //         hours: 10,
      //         minutes: 15
      //       },
      //       {
      //         day: 20,
      //         hours: 11,
      //         minutes: 20
      //       }
      //     ]
      //
      // )
    }




    this.providerData();

  },
  methods: {
    editPrice () {
      this.isEditPrice = true;
    },
    async saveEditedPrice (newPrice) {
      console.log("New price is: " + newPrice);
      const providerSalary = {
        priceByHour: newPrice
      }
      const updated = await providerService.updateProvider(this.provider.id, providerSalary)
      if (updated) {
        this.provider.priceByHour = newPrice;
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
    removeExpiredDateTime () {
      this.providerTimes.forEach(timerange => {
        if (timerange.monthFrom === new Date().getMonth() && timerange.dayFrom < new Date().getDate()) {

          console.log("Times what to remove: " + timerange.id)
          this.delTimeRange(timerange.id);
        }
      })

    },
    async editTimeTest () {
      const newTimeoffer = {hoursFrom: 1};
      await availableService.updateOffer('6431407f53469b1f48eeb2f0', newTimeoffer)
      //console.log("Is time updated? " + this.provider.timeoffer.map(p => p.hoursFrom));
      //console.log("Updated: " + updateTime.hoursFrom)
    },
    async delTimeRange (timerangeId) {
      const removed = await availableService.removeTimeOffer(this.provider.id, timerangeId);
      console.log("Is time removed? " + removed.id)
      console.log("Aga id argumendina? " + timerangeId)
      this.providerTimes = this.providerTimes.filter(time => time.id !== timerangeId);
      this.times = [];
      this.markers = [];

      this.providerTimes.forEach(offer => {
        this.initializeTime(offer);
      })

      this.providerTimes.forEach(times => {
        console.log("Provider times: " + times.dayFrom);
        this.setTimeMarkers(times)
      })

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
        monthFrom: this.date[0].getMonth(),
        dayFrom: this.date[0].getDate(),
        hoursFrom: this.date[0].getHours(),
        minutesFrom: this.date[0].getMinutes(),
        monthTo: this.date[1].getMonth(),
        dayTo: this.date[1].getDate(),
        hoursTo: this.date[1].getHours(),
        minutesTo: this.date[1].getMinutes()
      }


      const savedTimeRange = await availableService.addAdditionalOffer(this.provider.id, timeDate);
      //console.log("Saved? " + savedTimeRange);
      //this.providerTimes = this.providerTimes.concat(savedTimeRange)
      //console.log("Test closing")
      //this.times = this.times.concat([{day: 19, hours: 5, minutes: 2}, {hours: 7, minutes: 25}]);
     // this.providerTimes.push({ monthFrom: 3, dayFrom: 19, hoursFrom: 5, minutesFrom: 0, monthTo: 3, dayTo: 10, hoursTo: 17, minutesTo: 32, id: "64347d860033a3e590bbd2f7"});
      this.providerTimes = this.providerTimes.concat(savedTimeRange);
      this.times = [];
      this.markers = [];
      this.providerTimes.forEach(offer => {
        this.initializeTime(offer);
      })

      this.providerTimes.forEach(times => {
        console.log("Provider times: " + times.hoursFrom)
        this.setTimeMarkers(times)
      })
      //this.providerData ();
    },
    handleTime () {
      console.log("Time is handled")
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
        monthFrom: this.date[0].getMonth(),
        dayFrom: this.date[0].getDate(),
        hoursFrom: this.date[0].getHours(),
        minutesFrom: this.date[0].getMinutes(),
        monthTo: this.date[1].getMonth(),
        dayTo: this.date[1].getDate(),
        hoursTo: this.date[1].getHours(),
        minutesTo: this.date[1].getMinutes()
      }
      const saved = await availableService.addAdditionalOffer(this.provider.id, availableDate);
      console.log("Saved? " + saved);
    },
    initializeMarkers (day) {
      if (this.contents.length > 0) {
        this.markers.push(
            {
              date: addDays(new Date(), day),
              type: 'line',
              color: 'orange',
              tooltip: this.contents
            }
        )
      }

    },
    setTimeMarkers (offer) {
      let markedDay = null;
      this.contents = [];
      markedDay = offer.dayFrom - new Date().getDate()

      let timeIds = [];

      this.times.forEach((time, index) => {

        if (time[0].day === offer.dayFrom) {
          timeIds = timeIds.concat(offer.id)
          //this.contents.push({text: "Muokka", index: index, hours: time.hours, minutes: time, color: 'orange'})

          this.contents.push({text: "Muokka", index: index, timeId: this.providerTimes[index].id, hFrom: time[0].hours, mFrom: time[0].minutes,
            hTo: time[1].hours, mTo: time[1].minutes, color: 'orange'})

          // this.contents.push({text: "Muokka", index: index, timeId: offer.id, hFrom: time[0].hours, mFrom: time[0].minutes,
          //   hTo: time[1].hours, mTo: time[1].minutes, color: 'orange'})

          // this.contents.push({text: "Muokka", index: index, timeId: timeIds[index], hFrom: time[0].hours, mFrom: time[0].minutes,
          //   hTo: time[1].hours, mTo: time[1].minutes, color: 'orange'})

          this.markers.push(
              {
                date: addDays(new Date(), markedDay),
                type: 'line',
                color: 'orange',
                tooltip: this.contents
              }
          )

        }

      })
    },
    async providerData () {
      console.log("User id in provider panel: " + this.userId)
      const provider = await providerService.getProvider(this.userId);

      if (provider) {



        this.provider = provider;

        this.providerTimes = provider.timeoffer;

        this.times = []
        //let timeArr = [];
        this.providerTimes.forEach(offer => {
        //this.provider.timeoffer.forEach(offer => {
          this.initializeTime(offer);
          //timeArr.push(offer)
        })
        this.providerTimes.forEach(offer => {
        //this.provider.timeoffer.forEach((offer) => {

          this.setTimeMarkers(offer);
        //   let markedDay = null;
        //   this.contents = [];
        //   markedDay = offer.dayFrom - new Date().getDate()
        //
        //   this.times.forEach((time, index) => {
        //
        //     if (time[0].day === offer.dayFrom) {
        //       console.log("Here is same day: ")
        //
        //       //this.contents.push({text: "Muokka", index: index, hours: time.hours, minutes: time, color: 'orange'})
        //
        //       this.contents.push({text: "Muokka", index: index, timeId: this.provider.timeoffer[index].id, hFrom: time[0].hours, mFrom: time[0].minutes,
        //         hTo: time[1].hours, mTo: time[1].minutes, color: 'orange'})
        //
        //       this.markers.push(
        //           {
        //             date: addDays(new Date(), markedDay),
        //             type: 'line',
        //             color: 'orange',
        //             tooltip: this.contents
        //           }
        //       )
        //
        //     }
        //
        //   })
          //this.initializeMarkers (markedDay);

        })

      }

      console.log("Saadud pakkuja: " + this.provider.id)

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
  }
}
</script>

<style>
.center {
  margin: auto;
  width: 25%;

  padding: 7px;
}
.error {
  color: red;
  background: lightgrey;
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.success {
  color: blue;
  background: lightgrey;
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

</style>