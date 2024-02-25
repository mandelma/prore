<template>

<div v-if="userIn" class="panel">
  <div class="messages" ref="chatArea">
    <div class="inner" ref="refscrollHeight">
      <div >
        <div >
          <div class="messagesBody" >
            <div v-for="(message, index) in messages" :key="index">
              <div class="messageRow" v-if="message.userID !== userIn.id">

                <div >
                  <div class="displayName"><MDBIcon size="2x"><i class="fas fa-user-circle"></i></MDBIcon>   {{message.username}}</div>
                  <div  class="messageBlue">
                    <div>
                      <p class="messageContent">{{message.content}}</p>
                    </div>
                    <div class="messageTimeStampRight">{{message.date}}</div>
                  </div>


                </div>
              </div>
              <div v-else class="messageRowRight">
                <div class="messageOrange">
                  <p class="messageContent">{{message.content}}</p>
                  <div class="messageTimeStampRight">{{message.date}}</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>




  </div>

  <form @submit.prevent="onSubmit">

    <textarea
        v-model="msg"
        rows="2"
        placeholder="Kirjoita viesti..."
    />
    <!--      <a href="javascript:">ENTER</a>-->
    <button :disabled="!isValid" class="send">
      <MDBIcon>
        <i class="fas fa-arrow-right"></i>
      </MDBIcon>
    </button>
  </form>

</div>

</template>

<script>

//import StatusIcon from "./StatusIcon";
//import {ref} from "vue";
import {MDBIcon} from 'mdb-vue-ui-kit'
import dateFormat from 'dateformat'
//import socket from "@/socket";
import { ref, nextTick, onUpdated } from 'vue'
//import { ref } from "vue";



export default {
  name: "MessagePanel",
  components: {
    MDBIcon,
    //StatusIcon,
  },
  props: {
    test: Boolean,
    user: Object,
    messages: Array,
    initMessages: Array
  },
  data() {
    return {
      userIn: null,
      msg: ""
    };
  },
  setup () {
    let chatArea = ref(null)
    let refscrollHeight = ref(null)

    const update = () => {
      nextTick(() => {
        chatArea.value.scrollTo({
          behavior: 'smooth',
          top: refscrollHeight.value.clientHeight,
        })
      })
    }

    onUpdated(update)
    return {
      update,
      chatArea,
      refscrollHeight,
    }
  },
  watch: {

    // scroll to end when message send or select another chat
    messages: async function () {
      console.log("Watching...");
      await this.scrollToEnd();
    }

  },

  mounted () {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.userIn = user;
    }
  },

  methods: {
    async onSubmit() {
      const now = new Date();
      this.$emit("new:message", this.msg, dateFormat(now, 'dd-mm-yyyy,  HH:MM'),);
      this.msg = "";



      // var objDiv = document.getElementById("alue");
      // objDiv.scrollTop = objDiv.scrollHeight;

      // this.$nextTick(() => {
      //   this.$refs.chatPanel.scrollTop = this.$refs.chatPanel.scrollHeight
      // })


    },
    displaySender(message, index) {
      return (
          index === 0 ||
          this.user.messages[index - 1].fromSelf !==
          this.user.messages[index].fromSelf
      );
    },
    async scrollToEnd() {
      try {
        if (this.messages && this.messages.length > 0) {
          console.log("Is in end ------------ " + this.messages.length)
          const id = await this.messages[this.messages.length-1].id;
          document.getElementById(id).scrollIntoView({ block: "start" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    isValid() {
      return this.msg.length > 0;
    },
  },



};
</script>

<style scoped>

.paper {
  /*width: 80vw;*/

  width: 100%;
  /*height: 80vh;*/
  border: solid green;
  /*max-width: 500px;*/
  max-height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.container {
  /*width: 100vw;*/
  /*height: 100vh;*/

  border: solid red;
  width: 100%;
  height: 400px;
  display: flex;
  /*align-items: center;*/
  justify-content: center;
}
.messagesBody {
  width: calc( 100% - 10px );
  margin: 10px;
  /*overflow-y: hidden;*/

  height: calc( 100% - 80px );

}

.messageBody:hover {
  overflow-y: hidden;
}

.messageRow {
  display: flex;
}
.messageRowRight {
  display: flex;
  justify-content: flex-end;

}
.messageBlue {
  position: relative;
  /*margin-left: 20px;*/
  margin-bottom: 10px;
  padding: 20px;
  background-color: #437b9e;
  color: white;

  width: 200px;

  text-align: left;
  font: 400 .9em 'Open Sans', sans-serif;
  font-size: 17px;
  border: 1px solid #3d6b88;
  border-radius: 10px;

}
.messageOrange {
  position: relative;
  /*margin-right: 20px;*/
  margin-bottom: 10px;
  padding: 20px;
  background-color: #7b694a;
  color: white;
  width: 200px;

  text-align: left;
  font: 400 .9em 'Open Sans', sans-serif;
  font-size: 17px;
  border: 1px solid #8b7718;
  border-radius: 10px;


}

.messageContent {
  padding: 0;
  margin: 0
}
.messageTimeStampRight {
  position: absolute;
  color: #ea6618;
  font-size: .85em;
  font-weight: 400;
  margin-top: 10px;
  bottom: -3px;
  padding: 5px;
  right: 5px;

}

.displayName {
  /*margin-left: 20px;*/
  font-weight: bold;
  text-align: left;
}

.sender {
  font-weight: bold;
  margin-top: 5px;
}
.date {
  color: blue;
}

/*.form {*/
/*  padding: 10px;*/
/*}*/

/*.input {*/
/*  width: 80%;*/
/*  resize: none;*/
/*  padding: 10px;*/
/*  line-height: 1.5;*/
/*  border-radius: 5px;*/
/*  border: 1px solid #000;*/
/*}*/

/*.send-button {*/
/*  vertical-align: top;*/
/*}*/



.chat-panel {
  /*margin-top: 50px;*/
  height: 400px;
  background: linear-gradient(
      90deg,
      rgba(188, 255, 147, 1) 0%,
      rgba(88, 245, 158, 1) 53%,
      rgba(0, 237, 69, 1) 100%
  );

}
.chat-panel:hover {
  overflow-y: hidden;
}
.panel {

  /*display: flex;*/
  /*flex-direction: column;*/
  /*position: relative;*/

  padding: 10px;
  /*margin: 0 auto;*/
  /*max-width: 300px;*/
  width: 100%;
  height: 400px;
  margin-bottom: 15px;
  /*height: 500px;*/


  /*
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  */

  border-radius: 10px;
  border: 1px solid #a6a8a6;


}
.messages {
  /*text-align: left;*/
  height: 300px;
  width: 100%;
  overflow-y: auto;
  scrollbar-face-color: red;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: white;

}
.messages:hover {

}



.user-self {

  text-align: right;
  color: blue;
}
.user-them {

  color: red;
}
.inner {
  padding: 10px;
}

form{
  position: relative;
  margin-top: 10px;
  display: flex;
}

.text {
  /*width: 50%;*/
  background-color: #6e716e;
  color: #ddd;
  display: inline-flex;
  margin-top: 5px;
  text-align: left;
  flex-direction: column;
  /*justify-content: flex-end;*/

  border-radius: 10%;
  padding: 0.8rem;
  overflow-wrap: break-word;

}
.myText {
  background-color: #6e716e;
  color: red;
}

input {
  width: 100%;
  border: none;
  height: 20px;
  padding: 20px;
  border-top: 1px solid #999;
  border-radius: 0;
  outline: none;
}
textarea {
  width: 100%;
  overflow-y: hidden;
  border:none;
  outline: none;
  border-top: 1px solid #999;
}

button {
  border: none;
  border-top: 1px solid #999;
  padding-left: 10px;
  outline: none;
  background: none;

  right: 3px;
  top: 4px;
  font-size: 24px;
}
button:hover {
  cursor: pointer;
  color: green;
}
</style>
