<template>
  <div>
    <h1 style="margin-top: 50px; margin-bottom: 50px">Asiakkaan hallintapaneeli...</h1>
  </div>
</template>

<script>
import providerService from '../service/providers'
export default {
  name: "recipient-panel",
  data () {
    return {
      providers: []
    }
  },
  async mounted () {
    const providers = await providerService.getProviders()
    console.log("Providers: " + providers.map(p => p.user.username))

    this.providers = providers
  }
}
</script>

<style scoped>

</style>