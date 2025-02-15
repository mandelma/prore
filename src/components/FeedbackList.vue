<template>
  <div class="pro-panel-feedback" >
    <p style="text-align: right; cursor: pointer; color: green;" @click="$emit('closeFeedbackList')">Valmis</p>

    <div style="text-align: left;" v-for="fb in feedback" :key="fb.id">
      <p style="margin-bottom: 10px;">{{fb.pos}}</p>
    </div>
    <p>{{feedback.length > 0 ? feedback.pos  : "Ei arvostelua vielä!"}}</p>

  </div>
</template>

<script>
export default {
  name: "FeedbackList",
  props: {
    feedback: Array
  }
}
</script>

<style scoped>

</style>