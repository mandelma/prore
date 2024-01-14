<template>
  <div>
    <h4 style="text-align: right; cursor: pointer; color: green;" @click="$emit('closeFeedbackList')">Valmis</h4>

    <h3>{{feedback.length > 0 ? feedback.pos.concat(feedback,neg) : "Ei arvostelua vielä!"}}</h3>

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