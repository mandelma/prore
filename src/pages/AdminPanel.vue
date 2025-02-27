<template>
  <div style="padding-top: 20px;">Admin sivu:</div>
  <MDBContainer>

    <MDBRow>
      <MDBCol lg="4">
        <MDBCard style="text-align: left;" text="white" bg="dark" class="mb-3">
          <MDBCardBody>
            <MDBCardTitle>
              <div style="display: flex; justify-content: space-between;">
                <p style="color: #a09d9d;">Orders</p>
                <MDBIcon size="2x">
                  <i class="fas fa-umbrella"></i>
                </MDBIcon>
              </div>

            </MDBCardTitle>
            <MDBCardText>
              <h3>152</h3>
            </MDBCardText>
            <p style="font-size: 17px;"><span style="color:limegreen;">24 new</span> <span style="color: #a09d9d;">today</span></p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol lg="4">
        <MDBCard style="text-align: left;" text="white" bg="dark" class="mb-3">
          <MDBCardBody>
            <MDBCardTitle>
              <div style="display: flex; justify-content: space-between;">
                <p style="color: #a09d9d;">Orders</p>
                <MDBIcon size="2x">
                  <i class="fas fa-umbrella"></i>
                </MDBIcon>
              </div>

            </MDBCardTitle>
            <MDBCardText>
              <h3>152</h3>
            </MDBCardText>
            <p style="font-size: 17px;"><span style="color:limegreen;">24 new</span> <span style="color: #a09d9d;">today</span></p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol lg="4">
        <MDBCard style="text-align: left;" text="white" bg="dark" class="mb-3">
          <MDBCardBody>
            <MDBCardTitle>
              <div style="display: flex; justify-content: space-between;">
                <p style="color: #a09d9d;">Orders</p>
                <MDBIcon size="2x">
                  <i class="fas fa-umbrella"></i>
                </MDBIcon>
              </div>

            </MDBCardTitle>
            <MDBCardText>
              <h3>152</h3>
            </MDBCardText>
            <p style="font-size: 17px;"><span style="color:limegreen;">24 new</span> <span style="color: #a09d9d;">today</span></p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol lg="4">
        <MDBCard style="text-align: left;" text="white" bg="dark" class="mb-3">
          <MDBCardBody>
            <MDBCardTitle>
              <div style="display: flex; justify-content: space-between;">
                <p style="color: #a09d9d;">Orders</p>
                <MDBIcon size="2x">
                  <i class="fas fa-umbrella"></i>
                </MDBIcon>
              </div>

            </MDBCardTitle>
            <MDBCardText>
              <h3>152</h3>
            </MDBCardText>
            <p style="font-size: 17px;"><span style="color:limegreen;">24 new</span> <span style="color: #a09d9d;">today</span></p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>

    <MDBRow>
      <MDBCol>

        <MDBInput
            white
            v-model="search1"
            label="Hola amigo"
            inputGroup
            :formOutline="true"
            wrapperClass="mb-3"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
        >
          <MDBBtn color="success" @click="showAlert">
            <MDBIcon icon="search" />
          </MDBBtn>
        </MDBInput>
        <MDBListGroup dark numbered style="min-width: 22rem">
          <MDBListGroupItem
              class="d-flex justify-content-between align-items-start" color="dark"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">Subheading</div>
              <p style="color: #a09d9d;">Content for list item</p>
            </div>
            <MDBBadge class="badge-primary" pill>14</MDBBadge>
          </MDBListGroupItem>
          <MDBListGroupItem
              class="d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">Subheading</div>
              Content for list item
            </div>
            <MDBBadge class="badge-primary" pill>14</MDBBadge>
          </MDBListGroupItem>
          <MDBListGroupItem
              class="d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">Subheading</div>
              Content for list item
            </div>
            <MDBBadge class="badge-primary" pill>14</MDBBadge>
          </MDBListGroupItem>
        </MDBListGroup>
      </MDBCol>

    </MDBRow>


    <MDBRow>
      <MDBCol>
        <MDBBtn
            color="secondary"
            block
            size="lg"
            @click="printProviders"
        >
          Teenuse pakkujad
        </MDBBtn>

        <MDBBtn
            color="secondary"
            block
            size="lg"
            @click="getMore"
        >
          Teenuse saajad
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
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBBadge,
  MDBInput,
  MDBBtn
} from 'mdb-vue-ui-kit'
import {ref} from 'vue'
//import adminData from "@/components/AdminData"
import providerTable from "@/service/providers"
export default {
  name: "AdminPanel",
  components: {
    //adminData,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBBadge,
    MDBInput,
    MDBBtn
  },
  setup () {
    const search1 = ref('');
    const showAlert = () => alert(search1.value);
    return {
      search1,
      showAlert
    }
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