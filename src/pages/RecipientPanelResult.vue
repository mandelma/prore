<template>


  <MDBContainer v-if="isProviderSelected">
    <recipientFinal
        @cansel:final = handleCanselFinal
        @provider:ordered = orderSuccess
        :test = test
        :provider = selectedProvider
        :offer = offer
        :proSlides = proSlides
        :room = room
        :available = availability
        :booking = booking

        :chatusers = chatusers

        :initialize_chat = handleInitializeChat

        :selecteduser = selecteduser
        :messages = messages
        @message = onMessage
        @select = selectUser
        @noSelect = noSelectUser
        @create_chat_panel = handleCreateChatPanel

    />

  </MDBContainer>
  <MDBContainer v-else>
    <div style="display: flex; justify-content: right; padding: 20px;">
      <MDBBtnClose
          white
          style="cursor: pointer;"
          @click="canselResult"
      />
    </div>

<!--    <MDBIcon-->
<!--        style="float:right; cursor: pointer;"-->
<!--        @click="canselResult"-->
<!--        size="3x"-->
<!--    >-->
<!--      <i class="fas fa-undo"></i>-->
<!--    </MDBIcon>-->

    <h2>Tarvin tässä osaaja - {{line}}</h2>

    <h5 v-if="booking.created_ms - new Date().getTime() <= 0 && booking.offers.length < 1" class="expired_date">
      Päivämäärä on vanhentunut. Muokkaa päivämäärä tai poista tilaus!
    </h5>
    <successMessage
        :message = orderMessage
    />
    <MDBRow style="margin-top: 50px;">
      <MDBCol>

        <MDBTable border="primary" style="font-size: 18px; color: #dddddd; text-align: left;">
          <tbody>
          <tr>
            <td v-if="!isEditDescription">
              {{booking.description}}


            </td>
            <td v-else>
              <MDBRow>
                <MDBCol >
                  <MDBTextarea
                      label="Muokkaa tehtävän kuvausta..."
                      white
                      rows="4" v-model="description"
                      style="font-size: 14px; padding: 20px;"
                  />
                </MDBCol>
                <MDBCol col="1">
                  <MDBBtnClose
                      white
                      @click="isEditDescription = false"
                      style="float: right; cursor: pointer"

                  />
                </MDBCol>
              </MDBRow>




            </td>
          </tr>
          <tr v-if="booking.offers.length < 1">
            <td v-if="!isEditDescription">
              <MDBBtn outline="info" block size="lg" @click="pressedEditDescription">Muokkaa tehtävän kuvausta</MDBBtn>
            </td>
            <td v-else>
              <MDBBtn outline="info" block size="lg" @click="saveEditedDescription">Tallenna tehtävän kuvaus</MDBBtn>
            </td>
          </tr>
          <tr>
            <td v-if="!isEditDate">
              <h3 :class="{expired_date: booking.created_ms - new Date().getTime() <= 0 && booking.offers.length < 1}">{{bookingDateToDisplay}}</h3>
              <MDBBtn v-if="booking.offers.length < 1" block size="lg" outline="info" @click="editDate">
                <span :class="{expired_warning: booking.created_ms - new Date().getTime() <= 0}">Muokkaa päivämäärä</span>
              </MDBBtn>
            </td>
            <td v-else>
              <MDBRow>
                <MDBCol col="8">
                  <h3 :class="{expired_date: booking.created_ms - new Date().getTime() <= 0}">{{bookingDateToDisplay}}</h3>

                  <VueDatePicker
                      style="margin-bottom: 20px;"
                      dark
                      v-model="bookingDate"
                      :min-date="new Date()"
                      placeholder="Valitse sopivaa aika..."
                      @internal-model-change="handleInternalDate"
                      :state="isNoDate ? false : null"
                  >

                  </VueDatePicker>
                </MDBCol>
                <MDBCol col="4">
                  <MDBBtnClose
                      white
                      @click="isEditDate = false"
                      style="float: right; cursor: pointer"

                  />
                </MDBCol>
              </MDBRow>

            </td>

          </tr>

          </tbody>
        </MDBTable>

        <div v-for="(im, i) in images" :key="i">
          <img
              class="loading"
              style="width: 100%;"
              :src="im.blob ? im.blob : require(`/server/uploads/${im.name}`)"
              :alt="im.name"
          />

          <MDBBtn v-if="!isEditPanel" block outline="success" @click="pressEditPanel(i)">Muokkaa kuva</MDBBtn>
          <div class="edit-panel" v-if="isEditPanel && imageIndex === i">

            <MDBRow v-if="booking.offers.length < 1">
              <MDBCol>
                <MDBBtnClose
                    v-if="!value"
                    white
                    class="close-btn"
                    style="float: right;"
                    @click="closeEditPanel"
                />
                <input  id="file-upload" type="file" @change="handleFileChange($event, i)"/>
                <label  for="file-upload" class="custom-file-upload">
                  <span v-if="value">
                  Muokka tehtävän kuvausta: {{value.name}}

                   </span>
                  <span v-else>Valitse uusi kuva tehtävästä</span>
                </label>
                <MDBBtn v-if="isEditImage" block color="success" @click="uploadEditedImage(i)">Upload edited image</MDBBtn>
                <MDBBtn class="btn" block size="lg" color="danger" @click="removeImg(i)">Poista kuva</MDBBtn>
              </MDBCol>
              <MDBCol v-if="value">
                <MDBBtnClose
                    white
                    class="close-btn"
                    style="float: right;"
                    @click="closeEditPanel"
                />
                <img
                    style="width:100px; padding-top: 20px;"
                    :src="this.showImage"
                    alt="addEdit"
                />
              </MDBCol>
            </MDBRow>

          </div>




        </div>

        <MDBBtn v-if="!isPressedAddlmage & booking.offers.length < 1" block color="primary" @click="pressedAddImage">Lisää uusi kuva tehtävästä</MDBBtn>
        <div class="add-panel" v-if="isPressedAddlmage && isAddImagePanel">


          <MDBRow>

            <MDBCol>
              <MDBBtnClose
                  v-if="!value"
                  white
                  class="close-btn"
                  @click="closeAddPanel"
              />
              <input   id="file-upload-x" type="file" @change="handleFileChange($event, i)"/>
              <label  for="file-upload-x" class="custom-file-upload">
                  <span v-if="value">
                  Muokka tehtävän kuvausta: {{value.name}}
+
                   </span>
                <span v-else>Valitse lisää kuva tehtävästä</span>
              </label>
              <MDBBtn v-if="isAddImage" block outline="primary" @click="addAdditionalImage">Tallenna kuva</MDBBtn>
            </MDBCol>
            <MDBCol v-if="value">
              <MDBBtnClose
                  class="close-btn"
                  white
                  @click="closeAddPanel"
              />
              <img
                  style="width:100px"
                  :src="this.showImage"
                  alt="addShow"
              />
            </MDBCol>
          </MDBRow>

        </div>


      </MDBCol>
<!--      <MDBCol v-if="isOrdered">-->

<!--      </MDBCol>-->
<!--      <MDBCol lg="6" v-else>-->
<!--        <div v-if="providers.length > 0">-->
<!--          <div class="ui large form">-->
<!--            <div class="field">-->
<!--              <h3 style="margin-bottom: 20px;">Palveluntarjoajat</h3>-->
<!--              <select style="padding: 20px; background-color: #3c3535; color: lightgrey; font-size: 18px;" id="listOfProviders" v-model="filterResult" @click="addFilter">-->
<!--                <option value="">Suodata...</option>-->
<!--                <option value="distance">Etäisyyden mukaan - lähin ensin</option>-->
<!--                <option value="rating">positiivisen palauteen mukaan</option>-->
<!--                &lt;!&ndash;                <option>Rating</option>&ndash;&gt;-->
<!--                &lt;!&ndash;                <option>Else more</option>&ndash;&gt;-->
<!--              </select>-->
<!--            </div>-->

<!--          </div>-->
<!--          <br>-->

<!--          <MDBTable  style="font-size: 18px; text-align: center; position: relative;">-->
<!--            <tbody>-->
<!--            <tr v-for="provider in providers" :key="provider.id">-->


<!--              <td v-if="provider.timeoffer.map(to =>-->

<!--                datetime.providerMatchingForClient(-->
<!--                    bookingTime,-->
<!--                    {y: to.yearFrom, m: to.monthFrom, d: to.dayFrom, hour: to.hoursFrom, min: to.minutesFrom},-->
<!--                    {y: to.yearTo, m: to.monthTo, d: to.dayTo, hour: to.hoursTo, min: to.minutesTo}-->
<!--                )-->
<!--              ).includes(true)">-->
<!--                <MDBBtn class="provider-selection"-->
<!--                        outline="success"-->
<!--                        size="lg"-->
<!--                        @click="getProviderInfo(provider,'green')"-->
<!--                >-->

<!--                  {{provider.yritys}}<br>-->
<!--                  <span style="font-size: 14px;">Etäisyys: {{provider.distance}} km</span><br>-->
<!--                  <span style="font-size: 14px;">{{provider.priceByHour ? (provider.priceByHour + " eur / tunti") : "Urakkahinta"}}</span>-->

<!--                </MDBBtn>-->

<!--                <MDBBadge-->

<!--                    color="success"-->
<!--                    class="translate-middle p-4"-->
<!--                    pill-->
<!--                    notification-->
<!--                ><span style=" font-size: 14px;">-->
<!--                Saatavilla &nbsp;-->
<!--                <img-->
<!--                    style="width: 20px;"-->
<!--                    :src="require(`@/assets/ok.png`)"-->
<!--                    alt="ok"-->
<!--                />-->
<!--              </span>-->
<!--                </MDBBadge>-->







<!--              </td>-->
<!--              <td v-else>-->

<!--                <MDBBtn-->
<!--                    class="provider-selection"-->
<!--                    outline="info"-->
<!--                    size="lg"-->
<!--                    @click="getProviderInfo(provider, 'orange')"-->
<!--                >-->

<!--                  {{provider.yritys}} <br>-->
<!--                  <span style="font-size: 14px;">Etäisyys: {{provider.distance}} km</span><br>-->
<!--                  <span style="font-size: 14px;">{{provider.priceByHour ? (provider.priceByHour + " eur / tunti") : "Urakkahinta"}}</span>-->
<!--                </MDBBtn>-->



<!--                <MDBBadge-->

<!--                    color="info"-->
<!--                    class="translate-middle p-4"-->
<!--                    pill-->
<!--                    notification-->
<!--                ><span style=" font-size: 14px; ">Sovittaessa</span></MDBBadge>-->

<!--              </td>-->

<!--            </tr>-->
<!--            <tr>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--          </MDBTable>-->



<!--          &lt;!&ndash;          Booking {{booking}}&ndash;&gt;-->

<!--        </div>-->
<!--        <div v-else>-->
<!--          <h2 style="width: 100%;">Yrityksiä hetkellä ei löytyy</h2>-->
<!--        </div>-->



<!--      </MDBCol>-->

<!--      booking {{booking}}-->

      <MDBCol v-if="!booking.isIncludeOffers">
          <div v-if="providers.length > 0">
            <div class="ui large form">
              <div class="field">
                <h3 style="margin-bottom: 20px;">Palveluntarjoajat</h3>
                <select style="padding: 20px; background-color: #3c3535; color: lightgrey; font-size: 18px;" id="listOfProviders" v-model="filterResult" @click="addFilter">
                  <option value="">Suodata...</option>
                  <option value="distance">Etäisyyden mukaan - lähin ensin</option>
                  <option value="rating">positiivisen palauteen mukaan</option>
                  <!--                <option>Rating</option>-->
                  <!--                <option>Else more</option>-->
                </select>
              </div>

            </div>
            <br>

            <MDBTable  style="font-size: 18px; text-align: center; position: relative;">
              <tbody>
              <tr v-for="provider in providers" :key="provider.id">


                <td v-if="provider.timeoffer.map(to =>

                  datetime.providerMatchingForClient(
                      bookingTime,
                      {y: to.yearFrom, m: to.monthFrom, d: to.dayFrom, hour: to.hoursFrom, min: to.minutesFrom},
                      {y: to.yearTo, m: to.monthTo, d: to.dayTo, hour: to.hoursTo, min: to.minutesTo}
                  )
                ).includes(true)">
                  <MDBBtn class="provider-selection"
                          outline="success"
                          size="lg"
                          @click="getProviderInfo(provider,'green')"
                  >

                    {{provider.yritys}}<br>
                    <span style="font-size: 14px;">Etäisyys: {{provider.distance}} km</span><br>
                    <span style="font-size: 14px;">{{provider.priceByHour ? (provider.priceByHour + " eur / tunti") : "Urakkahinta"}}</span>

                  </MDBBtn>

                  <MDBBadge

                      color="success"
                      class="translate-middle p-4"
                      pill
                      notification
                  ><span style=" font-size: 14px;">
                  Saatavilla &nbsp;
                  <img
                      style="width: 20px;"
                      :src="require(`@/assets/ok.png`)"
                      alt="ok"
                  />
                </span>
                  </MDBBadge>







                </td>
                <td v-else>

                  <MDBBtn
                      class="provider-selection"
                      outline="info"
                      size="lg"
                      @click="getProviderInfo(provider, 'orange')"
                  >

                    {{provider.yritys}} <br>
                    <span style="font-size: 14px;">Etäisyys: {{provider.distance}} km</span><br>
                    <span style="font-size: 14px;">{{provider.priceByHour ? (provider.priceByHour + " eur / tunti") : "Urakkahinta"}}</span>
                  </MDBBtn>



                  <MDBBadge

                      color="info"
                      class="translate-middle p-4"
                      pill
                      notification
                  ><span style=" font-size: 14px; ">Sovittaessa</span></MDBBadge>

                </td>

              </tr>
              <tr>
              </tr>
              </tbody>
            </MDBTable>



            <!--          Booking {{booking}}-->

          </div>
          <div v-else>
            <h2 style="width: 100%;">Yrityksiä hetkellä ei löytyy</h2>
          </div>
      </MDBCol>
      <MDBCol lg="6" v-else>
        <div v-if="booking.offers.length > 0">
          <div class="ui large form">
            <div class="field">
              <h3 style="margin-bottom: 20px;">Tarjoukset</h3>
              <select style="padding: 20px; background-color: #3c3535; color: lightgrey; font-size: 18px;" id="listOfProviders" v-model="filterResult" @click="addFilter">
                <option value="">Suodata...</option>
                <option value="distance">Etäisyyden mukaan - lähin ensin</option>
                <option value="rating">positiivisen palauteen mukaan</option>
                <!--                <option>Rating</option>-->
                <!--                <option>Else more</option>-->
              </select>
            </div>

          </div>
          <br>

          <MDBTable  style="font-size: 18px; text-align: center; position: relative;">
            <tbody>
            <tr v-for="offer in booking.offers" :key="offer.id">


              <td v-if="offer.provider.timeoffer.map(to =>

                datetime.providerMatchingForClient(
                    bookingTime,
                    {y: to.yearFrom, m: to.monthFrom, d: to.dayFrom, hour: to.hoursFrom, min: to.minutesFrom},
                    {y: to.yearTo, m: to.monthTo, d: to.dayTo, hour: to.hoursTo, min: to.minutesTo}
                )
              ).includes(true)">
                <MDBBtn class="provider-selection"
                        outline="success"
                        size="lg"
                        @click="getProviderInfo(offer.provider, offer, 'green')"
                >

                  {{offer.provider.yritys}}<br>
                  <span style="font-size: 14px;">Etäisyys: {{offer.provider.distance}} km</span><br>
                  <span style="font-size: 14px;">{{offer.price}} eur</span>

                </MDBBtn>

                <MDBBadge

                    color="success"
                    class="translate-middle p-4"
                    pill
                    notification
                ><span style=" font-size: 14px;">
                Saatavilla &nbsp;
                <img
                    style="width: 20px;"
                    :src="require(`@/assets/ok.png`)"
                    alt="ok"
                />
              </span>
                </MDBBadge>







              </td>
              <td v-else>

                <MDBBtn
                    class="provider-selection"
                    outline="info"
                    size="lg"
                    @click="getProviderInfo(offer.provider, offer, 'orange')"
                >

                  {{offer.provider.yritys}} <br>
                  <span style="font-size: 14px;">Etäisyys: {{offer.distance}} km</span><br>
                  <span style="font-size: 14px;">{{offer.price}} eur</span>
                </MDBBtn>



                <MDBBadge

                    color="info"
                    class="translate-middle p-4"
                    pill
                    notification
                ><span style=" font-size: 14px; ">{{offer.price}} eur</span></MDBBadge>

              </td>

            </tr>
            <tr>
            </tr>
            </tbody>
          </MDBTable>

        </div>
        <div v-else>
          <h2 style="width: 100%;">Tarjouksia hetkellä ei löytyy</h2>
        </div>



      </MDBCol>

      <MDBBtn block outline="danger" size="lg" @click="removeBooking">Poista tilaus</MDBBtn>
    </MDBRow>

  </MDBContainer>

</template>

<script>
/* eslint-disable */
import {
  MDBBtn, MDBContainer, MDBTable, MDBRow,
  MDBBtnClose,
  MDBCol, MDBTextarea,
  MDBIcon,
  MDBBadge,
}from "mdb-vue-ui-kit";
import dt from '../components/controllers/datetime'
import recipientFinal from '../pages/RecipientPanelFinal'
import successMessage from '../components/notifications/successMessage'
import dist from '../components/controllers/distance'
import providerService from '../service/providers'
import imageService from '../service/image'
import VueDatePicker from '@vuepic/vue-datepicker';
//import socket from "@/socket";
import {ref} from 'vue'
import recipientService from "@/service/recipients";
import socket from "@/socket";
import uploadService from "@/service/image";
//import socket from "@/socket";


export default {
  name: "recipient-panel-result",
  props: {
    test: Boolean,
    chatusers: Array,

    selecteduser: null,
    messages: Array,
    loggedInUser: Object,
    booking: null,
    images: Array,
    bookingTime: null,
    providers: Array,
    confirmedBookings: Array,
    line: String
  },
  data () {
    return {
      //image: [],
      offer: null,
      chatUser: null,
      initializeChatRoom: {},
      chatRoomData: {},
      count: 0,
      datetime: dt,
      distance: dist,
      selectedProvider: null,
      proSlides: [],
      isProviderSelected: false,
      availability: "",
      orderMessage: null,
      isOrdered: false,
      isEditDescription: false,
      description: this.booking.description,

      isEditDate: false,
      bookingDate: null,
      bookingDateToDisplay: this.booking.date,
      //isAddImage: false,
      isAddFirstImage: false,
      isPressedAddlmage: false,
      isAddImage: false,
      isAddImagePanel: false,
      isEditImage: false,


      isUploadImage: false,
      isUploaded: false,
      isImageCreated: false,
      isAddNewImage: false,
      isEditPanel: false,

      value: null,
      imageIndex: 0,
      file: null,
      isImageSelected: false,
      isAdditionalImageSelected: false,
      showImage: null,
      tempImages: [],
      imagesx: [],
      imagesxxx: [],
      room: "",
      roomUserCount: 0,
      filterResult: "",
    }
  },

  components: {
    successMessage,
    VueDatePicker,
    dist,
    recipientFinal,
    MDBBtn,
    MDBBtnClose,
    MDBContainer,
    MDBTable,
    MDBRow,
    MDBCol,
    MDBTextarea,
    MDBIcon,
    MDBBadge
  },

  methods: {

    editDate () {
      this.isEditDate = true;


    },
    async handleInternalDate () {

      if (this.bookingDate) {
        console.log("new date: " +  new Date(this.bookingDate).getTime());
        this.bookingDateToDisplay = (this.bookingDate.getMonth() + 1) + "/" + this.bookingDate.getDate() + "/" +  this.bookingDate.getFullYear();
        console.log("eeeeee " + (this.bookingDate.getMonth() + 1) + "/" + this.bookingDate.getDate() + "/" +  this.bookingDate.getFullYear());
        const dateInMs = new Date(this.bookingDate).getTime();
        await recipientService.newDate(this.booking.id, {
          year: this.bookingDate.getFullYear(),
          month: this.bookingDate.getMonth(),
          day: this.bookingDate.getDate(),
          hours: this.bookingDate.getHours(),
          minutes: this.bookingDate.getMinutes(),
          date_ms: dateInMs
        })

        const updatedDate = {
          year: this.bookingDate.getFullYear(),
          month: this.bookingDate.getMonth(),
          day: this.bookingDate.getDate(),
          hours: this.bookingDate.getHours(),
          minutes: this.bookingDate.getMinutes()
        }

        this.$emit("updateBookingDate", this.booking, updatedDate);
      }
      //this.isEditDate = false;
      console.log("Date is handled")
     // console.log("Selected date: " + this.date)
    },
    handleFileChange(e, i) {
      //this.$emit('input', e.target.client[0])
      console.log("i in file change " + i)
      this.imageIndex = i;
      try {

        const files = e.target.files[0]
        console.log('event target client ', e.target.files[0])

        if (files) {
          const tempImage = URL.createObjectURL(files)
          this.tempImages.push(tempImage);
          this.showImage = URL.createObjectURL(files)
          this.file = e.target.files[0]

          this.isAddImage = true;
          this.isEditImage = true;
        }

      } catch (err) {
        console.log('Error:', err)
      }

      this.value = e.target.files[0]
      // if (e.target.files[0]) {
      //   this.isImageSelected = true;
      // } else {
      //   this.isImageSelected = false;
      // }
    },
    pressedAddImage () {
      this.isAddImage = false
      this.isEditImage = false;
      this.isEditPanel = false;
      this.isPressedAddlmage = true;
      this.isAddImagePanel = true;
    },
    async addImage () {


    },
    pressEditPanel (index) {
      //this.isImageSelected = false;
      this.isEditImage = false;
      this.value = null;
      this.imageIndex = index;
      //this.isEditImage = true;

      this.isEditPanel = true;
      this.isAddImagePanel = false
      //this.isImageCreated = false;
      //this.isUploaded = false;

      //this.showImage = null;
      //this.value = null;
    },
    closeEditPanel () {
      //this.imageIndex = index;
      //this.isEditImage = true;
      this.isAddImagePanel = false
      this.isEditPanel = false
      this.isEditImage = false;
      this.value = null;
    },
    closeAddPanel () {
      this.isAddImagePanel = false
      this.isPressedAddlmage = false;
      this.value = null;
    },
    async uploadEditedImage (index, img) {

      console.log("Edited image index is: " + index);

      this.isEditPanel = false;
      this.isEditImage = false;

      // this.images.push({
      //   blob: this.showImage
      // })





      const data = new FormData();
      data.append('file', this.file, this.file.name)

      //this.$emit("editImage", index, image.imgCreated._id,  this.showImage);
      console.log("Image id " + this.images[index]._id)

      //this.images[this.imageIndex] = {_id: image._id, blob: this.showImage}



      const image = await imageService.updateImage(this.images[index]._id, data);

      if (image) {
        this.images[this.imageIndex] = {_id: this.images[index]._id, blob: this.showImage}

        this.images.forEach(img => {
          console.log("Image name " + img._id)
        })


        //this.$emit("editImage", index, image.imgCreated._id,  this.showImage);
        console.log("New image id is " + image._id)
        this.imgId = image._id;
        this.file = null;

        //this.$emit("editImage", image, img)



        this.isEditPanel = false;

      }

      //this.imageIndex = null;

    },
    async addAdditionalImage () {
      this.value = null;
      this.isAddImagePanel = false;
      this.isAddImage = false;
      this.isPressedAddlmage = false;
      const data = new FormData();

      data.append('file', this.file, this.file.name)
      const img = await imageService.create(data);
      await recipientService.addImage(this.booking.id, img.imgCreated._id)
      if (img) {
        const image = {
          _id: img.imgCreated._id,
          blob: this.showImage
        }
        this.$emit("addImage", image, this.booking.id);
      }


      // this.images.push({
      //   _id: img.imgCreated._id,
      //   blob: this.showImage
      // })


    },
    async removeImg (id) {
      //this.value = null;
      if (!this.images[id].blob) {
        console.log("removed image is blob")

      }

      console.log("removable image id is " + this.images[id]._id)

      await recipientService.removeImage(this.booking.id, this.images[id]._id);
      await imageService.remove(this.images[id]._id, this.booking.id);

      this.$emit("removeImage", id);

      this.isEditPanel = false;


      //this.imageIndex = null
      //this.isEditDescription = false;

      //this.isImageSelected = false;
      //this.showImage = null;
    },
    getDistance () {
      //console.log("Distance +++++??? " + dist.distance())
      console.log("sss " + dist.test())
    },
    selectUser (user) {
      this.$emit('select', user);
    },
    noSelectUser () {
      this.$emit("noSelect");
    },
    onMessage (content, date) {
      this.$emit("message", content, date);
    },
    initializeChat () {
      this.$emit("initializeChat", {
        initChatRoom: this.initializeChatRoom,
        chatData: this.chatRoomData
      });
    },
    handleCreateChatPanel () {
      console.log("Final info in result pressed ");
      //this.$emit("finalinfo", data)

      console.log("recipient result xxxxx " + this.chatRoomData.username)
      this.initializeChat();
    },
    // Chat data to App
    // handleInitializeChat () {
    //   //socket.emit("create room users", this.initializeChatRoom)
    //
    //   console.log("recipient result xxxxx---------xxx----------xxxxxxxxxx ")
    //   this.$emit("initializeChat", {
    //     initChatRoom: this.initializeChatRoom,
    //     chatData: this.chatRoomData
    //   });
    // },

    async pressAddFirstImage () {
      this.isAddFirstImage = true;
      this.imageIndex = 0;
    },

    pressAdditionalImage (index) {
      //this.imageIndex = this.booking[0].image.length - 1;
      this.isAddImage = true;
      this.imageIndex = this.images.length;
      //this.imageIndex = "new";
      //this.isAddNewImage = true;

      console.log("Images index = " + this.imageIndex);
      this.isAddImage = true;
    },



    async uploadFirstImage (index) {
      const data = new FormData();
      this.isUploadImage = true;
      this.imageIndex = 0;
      //this.isUploaded = true;
      //isUploaded && imageIndex === i
      data.append('file', this.file, this.file.name)
      const img = await imageService.create(data);
      await recipientService.addImage(this.booking.id, img.imgCreated._id);

      if (img) {
        this.file = null;

        const image = {
          _id: img.imgCreated._id,
          image: img.imgCreated.image,
          name: img.imgCreated.name
        }

        this.$emit("addImage", image);

        this.imageIndex = 0;

        this.isImageSelected = false;
        this.isUploaded = true;


      }



    },
    async uploadAdditionalImage () {
      this.isAdditionalImageSelected = false;
      this.isAddImage = false;
      this.value = null;
      //this.isEditImage = false;
      //this.imageIndex = null;
      //this.imageIndex = this.booking[0].image.length - 1;
      console.log("Image index index " + this.imageIndex)
      const data = new FormData();

      this.isUploadImage = true;
      //this.imageIndex = 0;
      this.isUploaded = true;
      //isUploaded && imageIndex === i
      data.append('file', this.file, this.file.name)
      const img = await imageService.create(data);
      await recipientService.addImage(this.booking.id, img.imgCreated._id);

      if (img) {
        //this.imgId = img.imgCreated._id;
        this.file = null;
        //this.showImage = null;
        //this.value = null;

        //console.log("xxx " + img.imgCreated._id)
        //console.log("Image itself " + img.imgCreated.image)
        //await recipientService.addImage(this.booking[0].id, img.imgCreated._id);
        const image = {
          _id: img.imgCreated._id,
          image: img.imgCreated.image,
          name: img.imgCreated.name
        }

        //this.imagesxxx.push(image);

        this.$emit("addImage", image);

        //this.images.push(image);

        // const booking = await recipientService.getBookingById(this.booking[0].id);
        //
        // setTimeout( async () => {
        //   booking[0].image.forEach(im=> {
        //     this.images.push(im)
        //   })
        //   //this.images = this.images.concat(booking[0].image)
        // }, 500)


        /*const booking = await recipientService.getBookingById(this.booking[0].id);

        this.imagesxxx = booking[0].image
*/

        this.isImageSelected = false;
        this.isUploaded = true;



        //this.imageIndex = null;
      }



    },

    pressedEditDescription () {
      this.isEditDescription = true
      console.log("Descripton: " + this.description);
    },
    saveEditedDescription () {
      this.isEditDescription = false;
      const description = {
        description: this.description
      }
      this.$emit("editDescription", this.description);
      recipientService.editDescription(this.booking.id, description)
      //this.description = "";
    },
    cancelEditDescription () {
      console.log("Is here something happening??")
    },
    providerGetBooking (id, booking) {
      //const id = this.provider.user.id;
      console.log("Sended to user id... " + id)
      socket.emit("accept provider", {
        id,
        booking: booking
      })
    },

    // For just confirm provider
    async orderSuccess (prov) {
      if (this.booking.isIncludeOffers) {
        this.canselResult();

        this.$emit("offer_confirmed", this.booking);

        const pro = await providerService.getProvByProvId(prov.id);
        console.log("Offer confirmation user id " + pro.user.id);
        socket.emit("confirm offer", pro.user.id, this.booking);
        const providerID = {
          providerID: this.selectedProvider.id
        };

        await recipientService.updateRecipient(this.booking.id, {status: "confirmed"});

        const recipientId = this.booking.id;

      } else {
        this.isProviderSelected = false;

        //this.orderMessage = "Tilaus on lähetetty vahvistettavaksi! Kiitos!";
        console.log("Provider id " + prov.id)
        console.log("Recpient id: " + this.booking.id);

        const providerID = {
          providerID: this.selectedProvider.id
        };


        //await recipientService.addProviderID(this.booking[0].id, providerID);

        await recipientService.addProviderData(this.booking.id, this.selectedProvider.id);

        //socket.emit("send booking notification", this.booking[0], this.selectedProvider.id);

        //const providerName =
        //const status = "notSeen";
        const createBookingStatus = await recipientService.updateRecipient(this.booking.id, {status: "notSeen"});
        //console.log("Is status updated: " + createBookingStatus.status);


        const recipientId = this.booking.id;

        //--------------- About need delete selected and confirmed provider ------------

        //const booking = await providerServise.updateProvider(provId, {booking: [this.booking.id]})
        // To ordered
        const booking = await providerService.addProviderBooking(prov.id, recipientId);
        if (booking === "Recipient is added!") {
          const chatUserDataNavbar = {
            status: "",
            userID: prov.user.id,
            name: prov.user.username,
            room: this.room
          };
          this.$emit('client:confirmed_provider', prov.id, this.booking, chatUserDataNavbar);
          //this.$emit('set:order:to:send', prov.id, this.booking, chatUserDataNavbar)

          this.roomToDb(prov.id, {userID: this.booking.user.id, client: this.booking.user.username, room: this.room});
          //this.providerGetBooking(prov.user.id, booking);
          const id = prov.user.id;

          socket.emit("accept provider", {
            id,
            booking: this.booking,
          })

          // this.orderMessage = "Tilaus on lähetetty vahvistettavaksi! Kiitos!";
          //
          // console.log("Booking made - id: " + booking.id);
          //
          // this.isOrdered = true;
          //
          // setTimeout(() => {
          //   this.orderMessage = null;
          // }, 3000)

        }

        this.initializeChat();
      }

    },
    // For price offers
    async orderSuccess_standing (prov) {
      this.isProviderSelected = false;

      console.log("Provider id " + prov.id)
      console.log("Recpient id: " + this.booking.id);

      this.canselResult();

      this.$emit("offer_confirmed", this.booking);
      const providerID = {
        providerID: this.selectedProvider.id
      };


      //await recipientService.addProviderID(this.booking[0].id, providerID);

      //await recipientService.addProviderData(this.booking.id, this.selectedProvider.id);

      //socket.emit("send booking notification", this.booking[0], this.selectedProvider.id);

      //const providerName =
      //const status = "notSeen";
      const createBookingStatus = await recipientService.updateRecipient(this.booking.id, {status: "confirmed"});



      const recipientId = this.booking.id;

      //--------------- About need delete selected and confirmed provider ------------

      //const booking = await providerServise.updateProvider(provId, {booking: [this.booking.id]})
      // To ordered
      //const booking = await providerService.addProviderBooking(prov.id, recipientId);
      // if (booking === "Recipient is added!") {
      //   const chatUserDataNavbar = {
      //     status: "",
      //     userID: prov.user.id,
      //     name: prov.user.username,
      //     room: this.room
      //   };
      //   this.$emit('client:confirmed_provider', prov.id, this.booking, chatUserDataNavbar);
      //   //this.$emit('set:order:to:send', prov.id, this.booking, chatUserDataNavbar)
      //
      //   this.roomToDb(prov.id, {userID: this.booking.user.id, client: this.booking.user.username, room: this.room});
      //   //this.providerGetBooking(prov.user.id, booking);
      //   const id = prov.user.id;
      //
      //
      //
      // }

      // socket.emit("accept provider", {
      //   id,
      //   booking: this.booking,
      // })

      //this.orderMessage = "Tilaus on lähetetty vahvistettavaksi! Kiitos!";



      // this.isOrdered = true;
      //
      // setTimeout(() => {
      //   this.orderMessage = null;
      // }, 3000)

      //this.initializeChat();

    },
    getProviderInfo (provider, offer, marker) {
      this.proSlides = [];
      this.offer = offer;
      this.selectedProvider = provider;
      provider.reference.forEach(slide => {
        this.proSlides = [
            ...this.proSlides,
          {
            id: slide.id,
            size: '1400-933',
            src: require(`/server/uploads/pro/${slide.name}`),
            thumb: require(`/server/uploads/pro/${slide.name}`),
            subHtml: `<div class="lightGallery-captions">
                <h2>Terve</h2>

            </div>"`
          }
        ]
      })
      this.availability = marker;
      this.isProviderSelected = true;

      this.room = provider.yritys + this.chatUser.username

      let room = "";
      let username = "";

      if (this.chatUser) {
        username = this.chatUser.username;
        room = provider.yritys + username;
      }

      const chatCredentials = {
        room: room,
        proID: provider.user.id,
        pro: provider.yritys,
        userID: provider.user.id,
        username: provider.user.username,
      }

      const id = provider.user.id;
      const name = provider.user.username;

      this.initializeChatRoom = {
        room: room,
        pro: provider.yritys,
        status: "booking panel",
        username: username,
        providerUsername: provider.user.username,
        providerID: provider.user.id
      }

      this.chatRoomData = chatCredentials;

      //this.$emit("chatCredentials", chatCredentials)


    },
    async roomToDb (id, room) {
      await providerService.addRoom(id, room)
    },
    addFilter () {
      const filterListedProviders = document.getElementById("listOfProviders")

      filterListedProviders.addEventListener("change", (event) => {
        console.log("Filtered provider: " + event.target.value);
        this.$emit("filter_provider", event.target.value);

      })
    },
    handleCanselFinal (result) {
      this.isProviderSelected = result;
    },
    canselResult () {
      this.$emit('cansel:result', false)
    },
    async removeBooking () {
      console.log("In start booking id " + this.booking.id)
      if (confirm("Oletko varmaa, että haluat poistaa tilauksen!?") === true) {
        console.log("You pressed OK!")


        this.$emit("removeBooking", this.booking.id);

      } else {
        console.log("You canceled!")
      }
      //await recipientService.removeBooking(this.booking[0].id);

      this.images.forEach(img => {
        console.log("Images ## " + img._id);
        imageService.cleanAllRecipientImages(img._id)
      })

    },
  },

  async mounted() {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.chatUser = user;

    }


  }
}
</script>


<style scoped>
.edit-panel {
  border: solid grey;
  padding: 20px;
  margin: 20px 0 20px 0;
}
.add-panel {
  border: solid grey;
  padding: 20px;
  margin: 20px 0 20px 0;
}
.add-additional-panel {
  border: solid blue;
}
.btn {
  padding: 20px;
  margin: 20px 0 20px 0;
}
.close-btn {
  float: right;
  padding: 20px;
}
img.loading {
  width: 100%;
  height: 400px;
  background: transparent url(https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif) no-repeat scroll center center;
}
.success {
  color: white;
  background: #7bc47b;
  font-size: 20px;
  border: solid #0e920e;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  width: 100%;

  color: white;
  font-size: 18px;
  background-color: #87958e;
  border: 1px solid #ccc;
  display: inline-block;
  padding: 20px 12px;
  margin-bottom: 0;
  cursor: pointer;
}
.imageSection {
  margin-bottom: 20px;
}
.provider-selection {
  width: 300px;
  padding: 20px;
  background-color: darkslategrey;
  border: solid #4c4949;
  color: #f0eeee;
  font-size: 150%;
}

@media only screen and (max-width: 1000px) {
  .provider-selection {
    width: 250px;
    padding: 20px;
    background-color: darkslategrey;
    border: solid #4c4949;
    color: #f0eeee;
    font-size: 150%;
  }
}

select option {
  border: solid red;
}
.expired_warning {
  color: palevioletred;
}
.expired_date {
  color: palevioletred;
  border: 1px solid #F05C5CFF;
  margin-top: 17px;
  padding: 7px;
}

</style>