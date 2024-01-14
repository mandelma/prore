<template>
  <div style="padding-top: 20px;">Admin sivu:</div>
  <MDBContainer>
    <MDBRow>
      <MDBCol>
        <MDBBtn
            color="secondary"
            block
            @click="printProviders"
        >
          Pakkujad
        </MDBBtn>

        <MDBBtn
            color="secondary"
            block
            @click="getMore"
        >
          More
        </MDBBtn>
      </MDBCol>

      <MDBCol>

<!--        <MDBBtn-->
<!--            color="secondary"-->
<!--            block-->
<!--            @click="filter"-->
<!--        >-->
<!--          Suodata-->
<!--        </MDBBtn>-->

<!--        <admin-data-->
<!--            :dataList = dataList-->
<!--            :more = more-->
<!--        />-->
        <div v-if="isGetProviders">
          <ul v-for="provider in dataList" :key="provider.id">
            <li>
              {{provider.user.firstName}}
            </li>
          </ul>
        </div>
        <div v-else-if="isGetMore">
          Here is {{more}}
        </div>

      </MDBCol>
    </MDBRow>
<!--    providers {{dataList}}-->
  </MDBContainer>
</template>

<script>
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-vue-ui-kit'
//import adminData from "@/components/AdminData"
import providerTable from "@/service/providers"
export default {
  name: "AdminPanel",
  components: {
    //adminData,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
  },
  data () {
    return {
      isGetProviders: false,
      isGetmore: "",
      dataList: [],
      more: ""
    }
  },

  methods: {
    async printProviders () {
      const providers = await providerTable.getProviders();
      this.dataList = providers;
      this.isGetProviders = true;
      this.isGetMore = false;
    },
    getMore () {
      this.more = "more info..."
      this.isGetMore = true;
      this.isGetProviders = false;
    },
    filter () {
      console.log("Filtering...")
      const items = [
        {
          item: "Yks",
          isTrue: false
        },
        {
          item: "Kaks",
          isTrue: true
        },
        {
          item: "Kolm",
          isTrue: false
        },
        {
          item: "Neli",
          isTrue: true
        },
        {
          item: "Viis",
          isTrue: true
        },
      ]

      items.map(item => console.log(item.item))

      let selectedFalse = items.filter(item => !item.isTrue);
      selectedFalse.map(item => console.log("selected false: " + item.item));

      let selectedTrue = items.filter(item => item.isTrue)

      selectedTrue.map(item => console.log("selected: " + item.item));

      let finalItems = selectedTrue.concat(selectedFalse);

      finalItems.map(item => console.log("Final items: " + item.item));
    }
  }



}
</script>

<style scoped>

</style>