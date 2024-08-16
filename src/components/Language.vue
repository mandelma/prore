<template>
  <MDBContainer>


    <MDBBtn color="dark" style="width: 200px; height: 70px; margin-top: 20px;" size="lg" @click="setLanguage('fin')">
      <img
          style="width: 50px; margin-right: 20px;"
          :src="require(`@/assets/fin_1.png`)"
          alt="fin"
      />
      Suomi
    </MDBBtn>
    <MDBBtn color="dark" style="width: 200px; height: 70px; margin-top: 20px;" size="lg" @click="setLanguage('en')">
      <img
          style="width: 50px; margin-right: 20px;"
          :src="require(`@/assets/en.png`)"
          alt="en"
      />
      English
    </MDBBtn>
<!--    <p>{{ t('welcome') }}</p>-->



  </MDBContainer>

</template>

<script>
import {MDBContainer, MDBBtn} from 'mdb-vue-ui-kit'
import { useI18n } from 'vue-i18n';
import { watchEffect } from 'vue';
export default {
  name: "Language",
  components: {
    MDBContainer,
    MDBBtn
  },

  // setup () {
  //   const { locale } = useI18n;
  //   const { t } = useI18n();
  //
  //   return {
  //
  //   }
  // },

  data () {
    const { locale } = useI18n();


    watchEffect(() => {
      const storedLang = localStorage.getItem('lang');
      if (storedLang) {

        this.locale = storedLang;
      }
    });
    return {
      locale,
      //t,
      watchEffect
    }
  },
  methods: {
    setLanguage (newLang) {
      console.log("New language is " + newLang)
      this.locale = newLang;
      //localStorage.setItem('lang', newLang);
      localStorage.setItem('lang', newLang )

      this.$router.push('/');
    }
  },
}
</script>

<style scoped>

</style>