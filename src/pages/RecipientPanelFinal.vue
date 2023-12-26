<template>
  <div>
    <!--
    <MDBContainer style="margin-top: 30px;">
    -->
<!--    users {{chatusers}}-->
      <h2>- {{ provider.yritys }} -</h2>

      <MDBTable style="font-size: 18px; text-align: center;">
        <tbody>
        <tr>

          <td>
            <MDBRow >
              <MDBCol>

                <MDBIcon style="padding: 10px; cursor: pointer;" i class="far fa-thumbs-up" size="2x"
                @click="getPositiveFeedback"></MDBIcon>


                <MDBBadge color="success" class="translate-middle p-1"
                          pill
                          notification>{{provider.rating.positive}}</MDBBadge>
                <div v-if="isPositive">
                  <PositiveFeedback

                      :feedback = provider.feedback
                      @close:comments = closeComments
                  />
                </div>


              </MDBCol>
              <MDBCol>

                <MDBIcon
                    style="padding: 10px; cursor: pointer;" i
                    class="far fa-thumbs-down" size="2x" @click="getNegativeFeedback"></MDBIcon>


                <MDBBadge color="danger" class="translate-middle p-1"
                          pill
                          size="lg"
                          notification>{{provider.rating.negative}}</MDBBadge>

                <NegativeFeedback
                    v-if="isNegative"
                    :feedback = provider.feedback
                    @close:comments = closeComments
                />

              </MDBCol>
            </MDBRow>

          </td>
        </tr>
        </tbody>
      </MDBTable>

<!--    selecteduser in recipient panel final {{selecteduser}}-->
<!--    Chat users on line: {{roomUserCount}}-->
<!--    <MDBBtn-->
<!--        v-if="!isPressedOpenChat"-->
<!--        type="submit"-->
<!--        size="lg"-->
<!--        color="success"-->
<!--        @click="openChat"-->
<!--    >-->
<!--      Ava chat-->
<!--    </MDBBtn>-->

<!--    !isPressedOpenChat-->



<!--    <MDBBtn-->
<!--        v-if="!isPressedOpenChat"-->
<!--        style="margin-bottom: 20px;"-->
<!--        type="submit"-->
<!--        size="lg"-->
<!--        color="success"-->
<!--        @click="openChat"-->
<!--    >-->
<!--      Vaata rohkem infot-->
<!--    </MDBBtn>-->

<!--    <MDBBtn-->
<!--        v-if="!isPressedContactToUser"-->
<!--        style="margin-bottom: 20px;"-->
<!--        type="submit"-->
<!--        size="lg"-->
<!--        color="success"-->
<!--        @click="contactToUser"-->
<!--    >-->
<!--      Saada kasutajale sõnum-->
<!--    </MDBBtn>-->






<!--    <MDBBtn-->
<!--        v-if="!isPressedContactToUser"-->
<!--        type="submit"-->
<!--        size="lg"-->
<!--        color="success"-->
<!--        @click="contactToUser"-->
<!--    >-->
<!--      contact to user-->
<!--    </MDBBtn>-->

<!--    !isPressedContactToUser-->

<!--    <user-dialog-->
<!--        v-if="isChat"-->
<!--        :key="count"-->
<!--        :chatusers = chatusers-->
<!--    />-->

    <live-chat
        :chatusers = chatusers
        :messages =messages
        :selecteduser = selecteduser
        @select:user = selectUser
        @on:message = onMessage
    />

    

<!--    <div v-for="user in chatusers" :key="user.id">-->
<!--      <User-->
<!--          :user = user-->
<!--          :selected="selectedUser === user"-->
<!--          @select="selectUser(user)"-->
<!--      />-->
<!--    </div>-->

<!--    <MessagePanel-->
<!--        v-if="selectedUser"-->
<!--        :user = selectedUser-->
<!--        :messages = messages-->
<!--        @new:message="onMessage"-->
<!--    />-->


<!--    <form @submit.prevent="sendToApp">-->
<!--      <MDBBtn color="danger" type="submit">Info to App page</MDBBtn>-->
<!--    </form>-->

<!--    <form @submit.prevent="avajauuenda">-->
<!--      <MDBBtn-->

<!--          type="submit"-->
<!--          size="lg"-->
<!--          color="success"-->

<!--      >-->
<!--        uuenda ja ava-->
<!--      </MDBBtn>-->
<!--    </form>-->







<!--    <liveChat-->

<!--        style="margin-bottom: 20px;"-->
<!--        :un = booking[0].user.username-->
<!--        :ri = room-->
<!--        :key="count"-->
<!--        :room = room-->
<!--        @test = test-->
<!--    />-->






<!--    <span v-if="!isChat" @click="renderComponent">Click to reload render-component</span>-->

<!--    <MDBBtn v-if="!isChat" size="lg" color="success" block @click="renderComponent">-->
<!--      Saada töö tegijale sõnum-->
<!--    </MDBBtn>-->

<!--    <MDBBtn color="info" size="lg" @click="makeDiil">-->
<!--      -&#45;&#45; Suhtle töö pakkujaga -&#45;&#45;-->
<!--    </MDBBtn>-->
    <MDBBtn outline="info" block size="lg" @click="handleOrder(provider.id)">
      Tilaa yritys
    </MDBBtn>




    <MDBBtn outline="secondary" block size="lg" @click="canselRecipientFinal">
      Poistu
    </MDBBtn>
    <!--
    </MDBContainer>
    -->
<!--    BookingBB {{booking}}-->
  </div>
</template>

<script>
/* eslint-disable */
import {
  MDBBtn,
  //MDBContainer,
  MDBTable,
  MDBRow,
  MDBCol,
  MDBIcon, MDBBadge
}from "mdb-vue-ui-kit";
import PositiveFeedback from "@/components/PositiveFeedback";
import NegativeFeedback from "@/components/NegativeFeedback"
import liveChat from '../pages/LiveChat'
//import UserDialog from './LiveChat'
import socket from "@/socket";
import User from '../components/chatio/User'
import MessagePanel from '../components/chatio/MessagePanel.vue'
//import DialogPanel from "@/components/DialogPanel";
//import UserDialog from "@/pages/UserDialog";
//import socket from "@/socket";
//import socket from "@/socket";
/*{{provider.timeoffer.map(to =>

datetime.providerMatchingForClient(
    bookingTime,
    {y: to.yearFrom, m: to.monthFrom, d: to.dayFrom, hour: to.hoursFrom, min: to.minutesFrom},
    {y: to.yearTo, m: to.monthTo, d: to.dayTo, hour: to.hoursTo, min: to.minutesTo}
)
)
}}*/
export default {
  name: "recipient-final",
  props: {
    chatusers: Array,
    selecteduser: null,
    messages: Array,
    provider: Object,
    room: String,
    roomUserCount: Number,
    available: String,
    booking: Array
  },
  components: {
    User,
    MessagePanel,
    //UserDialog,
    //DialogPanel,
    PositiveFeedback,
    NegativeFeedback,
    liveChat,
    MDBBtn,
    //MDBContainer,
    MDBTable,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBadge
  },
  data() {
    return {
      selectedUser: null,
      isPositive: false,
      isNegative: false,

      isChat: false,
      isPressedOpenChat: false,
      isPressedContactToUser: false,
      isConnection: false,
      isTwoUsers: false,

      feedback: this.provider.feedback,

      //room: "",

      isPressedFinal: false,

      //isRoom: false,
      count: 0,
      userCount: 0
    }
  },
  mounted () {

  },
  methods: {
    chatCredentials () {

    },

    sendToApp () {
      console.log("Pressed")
      this.$emit("finalinfo", "Tere siit finaalist")

    },

    selectUser(user) {
      this.$emit("select", user)
      //if (!user.self)
      //this.selectedUser = user;
    },

    onMessage(content, date) {

      this.$emit("message", content, date)

      // if (this.selectedUser) {
      //   console.log("Selected user: " + this.selectedUser.username);
      //   socket.emit("private message", {
      //     content,
      //     date,
      //     to: this.selectedUser.userID,
      //   });
      //   this.selectedUser.messages.push({
      //     content,
      //     date,
      //     fromSelf: true,
      //   });
      // }
    },




    test (state) {
      console.log("From chat: " + state)
    },

    openChat () {
      this.isChat = true;
      this.count++;
      // socket.on('get updated room users', (data) => {
      //   console.log("Data users length " + data.users.length)
      //
      //   if (data.users.length > 1) {
      //
      //     this.isTwoUsers = true;
      //
      //   }
      // })

      //this.isChat = true;

      console.log("this room is " + this.room)
    },

    // Uus teema homseks valmis aretada!!!

    contactToUser() {

      this.isPressedContactToUser = true;
      socket.emit('updateRoom', this.room);
      socket.on('get updated room users', (data) => {
        console.log("New users update " + data.users.length)
        if (data.users.length > 1) {
          this.isConnection = true;
          //this.isTwoUsers = true;
        } else {
          this.isConnection = false;
        }

      })
      this.isPressedFinal = true;
      this.isChat = true;

      // socket.disconnect()
      // socket.connect()
    },







    // openChat () {
    //
    //
    //
    //   socket.on('get room users', (data) => {
    //     console.log("Data users length " + data.users.length)
    //
    //     if (data.users.length > 1) {
    //
    //       this.isTwoUsers = true;
    //
    //     }
    //   })
    //
    //   //this.isChat = true;
    //
    //   this.isPressedOpenChat = true;
    //
    //   for (let i = 0; i < 2; i++) {
    //     this.count ++;
    //   }
    //   //this.count ++
    //
    //
    // },
    //
    // // Uus teema homseks valmis aretada!!!
    //
    // contactToUser() {
    //
    //   this.isPressedContactToUser = true;
    //   socket.emit('updateRoom', this.room);
    //   socket.on('get updated room users', (data) => {
    //     console.log("New users update " + data.users.length)
    //     if (data.users.length > 1) {
    //       this.isConnection = true;
    //       //this.isTwoUsers = true;
    //     } else {
    //       this.isConnection = false;
    //     }
    //
    //   })
    //   this.isPressedFinal = true;
    //   this.isChat = true;
    //
    //   socket.disconnect()
    //   socket.connect()
    // },


    handleOrder (id) {
      this.$emit('provider:ordered', id)
    },
    getPositiveFeedback () {
      this.isPositive = true;
      this.isNegative = false;

    },
    getNegativeFeedback () {
      this.isNegative = true;
      this.isPositive = false;
      //console.log("Feedback")
    },
    closeComments (result) {
      this.isPositive = this.isNegative = result;
      console.log("result " + result)
    },
    canselRecipientFinal () {
      //this.$router.push("/recipient-result");
      //socket.emit('unsubscribe')
      //window.localStorage.removeItem('sessionID')
      //location.reload();

      this.isChat = false;

      this.$emit('cansel:final', false)

    }
  },

}
</script>

<style scoped>

</style>