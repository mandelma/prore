<template>

  <div class="panel">
    <div class="messages" ref="messagesRef">
      <div class="inner">
        <div v-for="(message, index) in user.messages"
             :key="index"
             class="message"
        >
          <div v-if="displaySender(message, index)" class="sender">
            {{ message.fromSelf ? "Mina" : user.username }}
          </div>

          <div>
            {{message.username}}
          </div>

          <!--
          <div v-if="message.uid === uuid" class="user-self">
            You: &nbsp;
          </div>
          <div v-else class="user-them">
            Them: &nbsp;
          </div>
          -->
          <div class="text">{{message.content}}</div><br/>
          {{message.date}}

        </div>
      </div>

    </div>
    <form @submit.prevent="onSubmit">

      <input
          v-model="msg"
          placeholder="Kirjoita viesti..."

      />
      <button :disabled="!isValid">+</button>
    </form>
  </div>

<!--  {{initMessages}}-->

</template>

<script>
//import StatusIcon from "./StatusIcon";
import dateFormat from 'dateformat'

export default {
  name: "MessagePanel",
  components: {
    //StatusIcon,
  },
  props: {
    user: Object,
    initMessages: Array
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    onSubmit() {
      const now = new Date();
      this.$emit("new:message", this.msg, dateFormat(now, 'dd-mm-yyyy,  HH:MM'),);
      this.msg = "";
    },
    displaySender(message, index) {
      return (
          index === 0 ||
          this.user.messages[index - 1].fromSelf !==
          this.user.messages[index].fromSelf
      );
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
/*.header {*/
/*  line-height: 200px;*/
/*  padding: 10px 20px;*/
/*  border-bottom: 1px solid #dddddd;*/
/*}*/

/*.messages {*/
/*  margin: 0;*/
/*  padding: 20px;*/
/*}*/

/*.message {*/
/*  list-style: none;*/
/*}*/

.sender {
  font-weight: bold;
  margin-top: 5px;
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
  /*
  background: linear-gradient(
      90deg,
      rgba(188, 255, 147, 1) 0%,
      rgba(88, 245, 158, 1) 53%,
      rgba(0, 237, 69, 1) 100%
  );
  */

}
.chat-panel:hover {
  overflow-y: hidden;
}
.panel {

  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 auto;
  max-width: 300px;
  height: 300px;
  /*
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  */

  border-radius: 10px;
  border: 1px solid #a6a8a6;


}
.messages {
  text-align: left;
  height: 100%;
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
  justify-content: flex-end;
  border-radius: 10%;
  padding: 0.8rem;
  overflow-wrap: break-word;

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

button {
  border: none;
  outline: none;
  background: none;
  position: absolute;

  right: 3px;
  top: 4px;
  font-size: 24px;
}
</style>
