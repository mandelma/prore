<template>
  <div>

  </div>
  <p style="">
    {{user.username}}
    <i class="icon" :class="{ connected: connected }" style="padding: 10px; margin-left: 10px;"></i>
  </p>


</template>

<script>
//import {MDBIcon} from "mdb-vue-ui-kit";
export default {
  name: "StatusIcon",

  components: {
    //MDBIcon
  },
  props: {
    connected: Boolean,
    user: Object
  }
}
</script>

<style scoped>
.icon {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  display: inline-block;
  background-color: #e38968;
  margin-right: 6px;
}

.icon.connected {
  background-color: #86bb71;
}
</style>