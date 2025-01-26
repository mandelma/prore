<template>

  <MDBContainer style="padding-top: 70px;">
    <div style="display: flex; justify-content: right; padding: 13px;">
      <MDBBtnClose
          white

          @click="backFromFeedbackClient"
      />
    </div>


    <MDBRow style="padding-bottom: 20px;">
      <MDBCol>
<!--        <img-->
<!--            style="width: 100px;"-->
<!--            :src="require(`@/assets/feedback.png`)"-->
<!--          alt="feedback"-->
<!--        />-->
      </MDBCol>
      <MDBCol>
        <p style="font-size: 16px;"><b>{{customer.company}}</b> odottaa palautetta tarjoamastaan palvelusta <b> "{{customer.header}}"
          - {{customer.date}}</b></p>

      </MDBCol>
    </MDBRow>

    <warning-message
        :message = rateWarning
    />
    <error-message
        :message = ratingError
    />

    <h3   >Voit antaa palautetta painamalla valitsemasi kuvaketta!</h3>

    <MDBRow style="position: relative;">
      <MDBCol  style="padding:20px;">
        <MDBRow class="rating">
          <MDBCol>
            <MDBIcon  style="padding: 10px; cursor: pointer;" i class="fas fa-smile" size="3x"
                      @click="ratePlus"></MDBIcon>

            <MDBBadge color="success" class="translate-middle p-1"

                      pill
                      notification
            >
              <h2 style="min-width: 33px;">{{positiveRating}}</h2>
            </MDBBadge>
          </MDBCol>
          <MDBCol>
            <MDBIcon  style="padding: 10px; cursor: pointer;" class="far fa-frown" size="3x"
                      @click="rateMinus"></MDBIcon>


            <MDBBadge color="danger" class="translate-middle p-1"

                      pill
                      notification>
              <h3 style="min-width: 33px;">{{negativeRating}}</h3>
            </MDBBadge>
          </MDBCol>
          <MDBCol>
            <img
                style="width: 300px;"
                :src="require(`@/assets/is_feedback.png`)"
                alt="rating-time"
            />
          </MDBCol>

        </MDBRow>




        <div v-if="isRatingGiven">
          <h2 v-if="!isReview">Kiitos palautteesta!</h2>
          <h2 v-else>Arvostelee!</h2>
          <MDBTextarea
              v-if="isReview"
              white
              style="margin-bottom: 20px;"
              label="Message"
              rows="4"
              v-model="feedback"
          />
          <MDBBtn outline="info" size="lg" @click="isReview = !isReview">
            <p style="color: deepskyblue;">{{!isReview ? "Kirjoittaa halutessasi arvostelu" : "Poistu arvostelusta"}}</p>
          </MDBBtn>

        </div>

      </MDBCol>

    </MDBRow>

    <MDBBtn v-if="!isRatingGiven" block outline="danger" size="sm" @click="noRatingToConfirm">En haluaa antaa palautetta!</MDBBtn>

    <MDBBtn v-if="isRatingGiven" outline="info" size="lg" block @click="reload()">Muokkaa antamasi palautesi!</MDBBtn>
    <MDBBtn v-if="isRatingGiven" style="margin-bottom: 20px;" block color="success" size="lg" @click="confirmFeedback">Lähettää palaute</MDBBtn>

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
import clientHistoryService from "../../server/models/clientHistory"
import dateFormat from "dateformat";
export default {
  name: "Feedback",
  props: {
    customer: Object
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
      author: null,
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
      const bookings = await clientHistoryService.getClientHistory();
      const feedback = bookings.find(booking => booking.status === "no rated")
      this.positiveRating = feedback.rating.positive;
      this.negativeRating = feedback.rating.negative;
      this.fbc= feedback;

    },
    ratePlus () {
      this.isRated = true;
      console.log("Pos rating before " + this.positiveRating)
      if (!this.isRatedMinus) {
        this.ratedTimes+=1;

        if (this.ratedTimes === 1) {
          this.positiveRating = this.positiveRating + 1;
          console.log("Pos rating after " + this.positiveRating)
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
      const id = this.customer.proID;
      const now = new Date();
      const date = dateFormat(now, 'dd-mm-yyyy,  HH:MM')

      const posFeedback = {
        pos: date + ": " + "( " + this.author.username + " ) " +  this.feedback
      }
      const negFeedback = {
        neg: date + ": " + "( " + this.author.username + " ) " + this.feedback
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
        this.$emit("isRated", this.customer.proID, "positiivista", this.customer.company)
        this.$router.go(-1)
      }
      if (this.isRatedMinus) {
        await providerService.setNegativeRating(id);
        this.$emit("isRated", this.customer.proID, "negatiivista", this.customer.company)
        this.$router.go(-1)
      }

    },
    noRatingToConfirm () {
      this.$emit("isRated", this.customer.proID, "no-rating", this.customer.company)
      this.$router.go(-1)
    },
    backFromFeedbackClient () {
      this.$router.go(-1);
    },

  },
  mounted () {
    //console.log("Customer data " + this.customer.ordered[0].rating.positive)

    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      this.author = user;
      this.positiveRating = this.customer.rating.positive;
      this.negativeRating = this.customer.rating.negative;
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