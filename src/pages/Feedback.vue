<template>
  <div v-if="!fbc.ordered" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <MDBContainer v-else style="padding-top: 70px;">

<!--    <MDBTable borderless style="font-size: 18px; text-align: left; width: 30%; margin: auto;">
      <tbody>
      <tr>
        <td>
          Ajankohta
        </td>
        <td v-if="fbc">
          <month-converter
              :num="fbc.onTime[0].month"
          />
          -{{ fbc.onTime[0].day }}
        </td>
      </tr>
      <tr>
        <td>
          Tarjottu palvelu
        </td>
        <td >
          {{fbc.header}}
        </td>
      </tr>
      <tr>
        <td>
          Yritys
        </td>
        <td>
          {{fbc.ordered[0].yritys}}
        </td>
      </tr>
      </tbody>
    </MDBTable>-->
    <MDBBtnClose
        style="float: right;"
        @click="backFromFeedbackClient"
    />

    <MDBRow style="padding-bottom: 20px;">
      <MDBCol>
        <img
            style="width: 300px;"
            :src="require(`@/assets/feedback.png`)"
          alt="feedback"
        />
      </MDBCol>
      <MDBCol>
        <p style="font-size: 16px;"><b>{{fbc.ordered[0].yritys}}</b> odottaa palautetta tarjoamastaan palvelusta <b> "{{fbc.header}}"  <month-converter
            :num="fbc.onTime[0].month"
        />
          - {{ fbc.onTime[0].day }} - {{ fbc.onTime[0].year }}</b></p>
<!--        <MDBTable borderless style="font-size: 18px; text-align: left;">-->
<!--          <tbody>-->
<!--          <tr>-->
<!--            <td>-->

<!--            </td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </MDBTable>-->
      </MDBCol>
    </MDBRow>

    <warning-message
        :message = rateWarning
    />
    <error-message
        :message = ratingError
    />
    '
    <h3   >Voit antaa palautetta painamalla valitsemasi kuvaketta!</h3>

    <MDBRow>





      <MDBCol  style="padding:20px;">
        <MDBRow class="rating">
          <MDBCol>
            <MDBIcon  style="padding: 10px; cursor: pointer;" i class="fas fa-smile" size="3x"
                      @click="ratePlus"></MDBIcon>



            <MDBBadge color="success" class="translate-middle p-1"
                      pill
                      notification>
              <h2>{{positiveRating}}</h2>
            </MDBBadge>
          </MDBCol>
          <MDBCol>
            <MDBIcon  style="padding: 10px; cursor: pointer;" class="far fa-frown" size="3x"
                      @click="rateMinus"></MDBIcon>


            <MDBBadge color="danger" class="translate-middle p-1"
                      pill
                      notification>
              <h2>{{negativeRating}}</h2>
            </MDBBadge>
          </MDBCol>
          <MDBCol>
            <img
                :src="require(`@/assets/rating-time.jpg`)"
                alt="rating-time"
            />
          </MDBCol>

        </MDBRow>




        <div v-if="isRatingGiven">
          <h2 v-if="!isReview">Kiitos palautteesta!</h2>
          <h2 v-else>Arvostelee!</h2>
          <MDBTextarea
              v-if="isReview"
              style="margin-bottom: 20px;"
              label="Message"
              rows="4"
              v-model="feedback"
          />
          <MDBBtn color="grey" size="lg" @click="isReview = !isReview">
            {{!isReview ? "Kirjoittaa halutessasi arvostelu" : "Poistu arvostelusta"}}
          </MDBBtn>

        </div>

      </MDBCol>

    </MDBRow>

    <MDBBtn v-if="isRatingGiven" outline="grey" size="lg" block @click="reload()">Muokkaa antamasi palaute!</MDBBtn>
    <MDBBtn v-if="isRatingGiven" style="margin-bottom: 20px;" block color="success" size="lg" @click="confirmFeedback">Lähetää palaute</MDBBtn>

  </MDBContainer>

</template>

<script>
/* eslint-disable */
import {
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBadge,
  MDBTextarea,
  MDBTable,
  MDBBtnClose
} from 'mdb-vue-ui-kit'
import monthConverter from '../components/controllers/month-converter'
import warningMessage from "@/components/notifications/warningMessage";
import errorMessage from "@/components/notifications/errorMessage";
import recipientService from "@/service/recipients";
import providerService from "@/service/providers"
import dateFormat from "dateformat";
export default {
  name: "Feedback",
  props: {
    //feedbackClient: Object
  },
  components: {
    monthConverter,

    warningMessage,
    errorMessage,
    MDBContainer,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBadge,
    MDBTextarea,
    MDBTable,
    MDBBtnClose
  },
  data () {
    return {
      user: null,
      fbc: {},
      isRatingGiven: false,
      isReview: false,
      ratedTimes: 0,
      isRatedPos: false,
      isRatedMinus: false,
      positiveRating: 0,
      negativeRating: 0,
      feedback: "",
      rateWarning: null,
      ratingError: null
    }
  },
  methods: {
    reload() {
      location.reload();
    },
    async getClient (id) {
      const bookings = await recipientService.getOwnBookings(id);
      console.log("booking client " )
      const feedback = bookings.find(booking => booking.isFeedbackClient === true)
      this.positiveRating = feedback.ordered[0].rating.positive;
      this.negativeRating = feedback.ordered[0].rating.negative;
      this.fbc= feedback;

    },
    ratePlus () {
      this.isRated = true;

      if (!this.isRatedMinus) {
        this.ratedTimes+=1;

        if (this.ratedTimes === 1) {
          this.positiveRating = this.positiveRating + 1;

          this.isRatingGiven = true;
        } else {
          console.log("Not, only one time is allowed!")

          this.rateWarning = "Arvostella saa vain kerran!"
          setTimeout(() => {
            this.rateWarning = null;
          }, 3000);
        }
        this.isRatedPlus = true;
        this.isRatedMinus = false;
      } else {
        console.log("Not, only one time is allowed!")

        this.rateWarning = "Arvostella saa vain kerran!"
        setTimeout(() => {
          this.rateWarning = null;
        }, 3000);
      }


      /*if (!this.isRatedMinus)
        this.ratedTimes+=1;

      this.isRatedPlus = true;
      this.isRatedMinus = false;
      if (this.ratedTimes === 1) {
        this.positiveRating = this.positiveRating + 1;

        this.isRatingGiven = true;
      } else {
        console.log("Not, only one time is allowed!")

        this.rateWarning = "Arvostella saa vain kerran!"
        setTimeout(() => {
          this.rateWarning = null;
        }, 3000);
      }*/
    },
    rateMinus () {
      this.isRated = true;

      if (!this.isRatedPlus) {
        this.ratedTimes += 1

        if (this.ratedTimes === 1) {
          this.negativeRating = this.negativeRating + 1;
          this.isRatingGiven = true;
        } else {

          this.rateWarning = "Arvostella saa vain kerran, negatiivisen tai positiivisen!"
          setTimeout(() => {
            this.rateWarning = null;
          }, 3000);
        }

        this.isRatedPlus = false;
        this.isRatedMinus = true;
      } else {
        this.rateWarning = "Arvostella saa vain kerran, negatiivisen tai positiivisen!"
        setTimeout(() => {
          this.rateWarning = null;
        }, 3000);
      }

    },

    async confirmFeedback () {
      const id = this.fbc.ordered[0].id;
      const now = new Date();
      const date = dateFormat(now, 'dd-mm-yyyy,  HH:MM')

      const posFeedback = {
        pos: date + ": " + this.feedback
      }
      const negFeedback = {
        neg: date + ": " + this.feedback
      }
      if (this.feedback.length > 0) {
        if (this.isRatedPlus) {
          await providerService.addPositiveFeedback(id, posFeedback);
          this.feedback = "";
        }
        if (this.isRatedMinus) {
          await providerService.addNegativeFeedback(id, negFeedback);
          this.feedback = "";
        }
      }
      // Add rating to provider to database
      if (this.isRatedPlus) {
        await providerService.setPositiveRating(id);
        this.$emit("isRated", this.fbc.id, "positiivista", this.fbc.ordered[0].yritys)
        this.$router.push('/')
      }
      if (this.isRatedMinus) {
        await providerService.setNegativeRating(id);
        this.$emit("isRated", this.fbc.id, "negatiivista", this.fbc.ordered[0].yritys)
        this.$router.push('/')
      }

    },
    backFromFeedbackClient () {
      this.$router.go(-1);
    },

  },
  mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      this.getClient(user.id);
    } else {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.warning {
  width: 70%;
  margin: auto;
  color: white;
  background: #999797;
  font-size: 20px;
  border: solid #baad0d;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.rating {
  padding: 20px;
}
</style>