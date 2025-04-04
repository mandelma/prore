<template>

  <MDBContainer style="padding-top: 50px;">

    <div style="display: flex; justify-content: right; padding: 13px;">
      <MDBBtnClose
          white
          @click="backFromFeedbackClient"
      />
    </div>

    <warning-message
        :message = rateWarning
    />
    <error-message
        :message = ratingError
    />



    <div class="container mt-5">
      <MDBCard  text="white" bg="dark" class="p-4">
        <MDBCardBody >
          <h3  class="text-center mb-4">{{customer.company}} odottaa palautetta tarjoamastaan palvelusta!</h3>

          <div class="starContainer">
            <span
                v-for="star in 5"
                :key="star"
                @click="rating = star"
                style="font-size: 33px; cursor: pointer;"
                :class="star <= rating ? 'text-yellow' : 'text-gray'"
            >★</span>
          </div>

          <!-- Comment Box -->
          <MDBTextarea
              white
              v-if="rating > 0"
              v-model="feedbackContent"
              type="textarea"
              label="Anna haluttaessa arvostelua!"
              rows="3"
              class="mb-3"
          />

          <!-- Submit Button -->

          <button
              class="mt-4 w-full bg-blue-500 text-white py-2 rounded-md disabled:opacity-50"
              @click="confirmFeedback"
              :disabled="feedbackContent === '' && rating === 0"
          >
            Lähettää palaute
          </button>


        </MDBCardBody>

      </MDBCard><br>
      <p style="float: right; color: #e4548e; cursor: pointer;" @click="noRatingToConfirm">En halua antaa palautetta</p><br><br>
    </div>



<!--    <div class="container mt-5">-->
<!--      <MDBCard  text="white" bg="dark" class="p-4">-->
<!--        <MDBCardBody >-->
<!--          <h3  class="text-center mb-4">{{customer.company}} odottaa palautetta tarjoamastaan palvelusta!</h3>-->

<!--          &lt;!&ndash; Positive / Negative Feedback &ndash;&gt;-->
<!--          <MDBRow style="margin-bottom: 30px;" class="mb-3">-->
<!--            <MDBCol col="6">-->
<!--              <MDBIcon  style="padding: 10px; cursor: pointer; " i class="fas fa-smile" size="3x"-->
<!--                        @click="ratePlus"></MDBIcon>-->

<!--              <MDBBadge color="success" class="translate-middle p-1"-->
<!--                        pill-->
<!--                        notification-->
<!--              >-->
<!--                <p style="min-width: 19px; font-size: 14px;">{{positiveRating}}</p>-->

<!--              </MDBBadge>-->
<!--            </MDBCol>-->
<!--            <MDBCol col="6">-->
<!--              <MDBIcon  style="padding: 10px; cursor: pointer;" class="far fa-frown" size="3x"-->
<!--                        @click="rateMinus"></MDBIcon>-->


<!--              <MDBBadge color="danger" class="translate-middle p-1"-->

<!--                        pill-->
<!--                        notification>-->
<!--                <p style="min-width: 19px; font-size: 14px">{{negativeRating}}</p>-->
<!--              </MDBBadge>-->
<!--            </MDBCol>-->
<!--          </MDBRow>-->

<!--          &lt;!&ndash; Comment Box &ndash;&gt;-->
<!--          <MDBTextarea-->
<!--              white-->
<!--              v-if="isRatingGiven"-->
<!--              v-model="feedbackContent"-->
<!--              type="textarea"-->
<!--              label="Additional Comments"-->
<!--              rows="3"-->
<!--              class="mb-3"-->
<!--          />-->

<!--          &lt;!&ndash; Submit Button &ndash;&gt;-->

<!--          <button-->
<!--              class="mt-4 w-full bg-blue-500 text-white py-2 rounded-md disabled:opacity-50"-->
<!--              @click="confirmFeedback"-->
<!--              :disabled="!isRatingGiven "-->
<!--          >-->
<!--            Lähettää palaute-->
<!--          </button>-->


<!--        </MDBCardBody>-->

<!--      </MDBCard><br>-->
<!--      <p style="float: right; color: #e4548e; cursor: pointer;" @click="noRatingToConfirm">En halua antaa palautetta</p><br><br>-->
<!--    </div>-->

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
  MDBBtnClose,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRadio
} from 'mdb-vue-ui-kit'
import monthConverter from '../components/controllers/month-converter'
import warningMessage from "@/components/notifications/warningMessage";
import errorMessage from "@/components/notifications/errorMessage";
import recipientService from "@/service/recipients";
import providerService from "@/service/providers"
import clientHistoryService from "../../server/models/clientHistory"
import '@/css/notification.css';
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
    MDBBtnClose,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRadio
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
      rateWarning: null,
      ratingError: null,

      feedbackContent: "",
      rating: 0,

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
        pos: date + ": " + "( " + this.author.username + " ) " +  this.feedbackContent
      }
      const negFeedback = {
        neg: date + ": " + "( " + this.author.username + " ) " + this.feedbackContent
      }
      const givenRating = {
        positive: this.rating,
        negative: this.negativeRating
      }
      if (this.feedbackContent.length > 0) {
        await providerService.addPositiveFeedback(id, posFeedback);
        this.feedbackContent = "";

        // if (this.isRatedPlus) {
        //   await providerService.addPositiveFeedback(id, posFeedback);
        //   this.feedbackContent = "";
        // }
        // if (this.isRatedMinus) {
        //   console.log("Rated minus")
        //   await providerService.addNegativeFeedback(id, negFeedback);
        //   this.feedbackContent = "";
        // }
      }
      // Add rating to provider to database
      await providerService.setPositiveRating(id, {star: this.rating});
      this.$emit("isRated", this.customer.proID, "rated", this.customer.company, givenRating)
      this.$router.go(-1)

      // if (this.isRatedPlus) {
      //   await providerService.setPositiveRating(id);
      //
      //   this.$emit("isRated", this.customer.proID, "positiivista", this.customer.company, rating)
      //   this.$router.go(-1)
      // }
      // if (this.isRatedMinus) {
      //   await providerService.setNegativeRating(id);
      //   this.$emit("isRated", this.customer.proID, "negatiivista", this.customer.company, rating)
      //   this.$router.go(-1)
      // }

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

<style>
.starContainer {
  display: flex;
  justify-content: space-around;

  margin-bottom: 13px;
}
.text-yellow {
  color: yellow;
}
.text-gray {
  color: gray;
}
/*.warning {*/
/*  width: 70%;*/
/*  margin: auto;*/
/*  color: white;*/
/*  background: #999797;*/
/*  font-size: 20px;*/
/*  border: solid #baad0d;*/
/*  border-radius: 5px;*/
/*  padding: 10px;*/
/*  margin-bottom: 10px;*/
/*}*/
.rating {
  padding: 20px;
}
</style>