<template>
  <div class="pro-panel-feedback" >
    <h4 style="text-align: right; cursor: pointer; color: green;" @click="$emit('closeFeedbackList')">Valmis</h4>

    <div style="text-align: left;" v-for="fb in feedback" :key="fb.id">
      <h2 style="margin-bottom: 10px;">{{fb.pos}}</h2>
    </div>
    <h3>{{feedback.length > 0 ? feedback.pos  : "Ei arvostelua vielä!"}}</h3>

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