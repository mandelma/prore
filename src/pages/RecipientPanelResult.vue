<template>


  <MDBContainer v-if="isProviderSelected">
    <recipientFinal
      @cansel:final = handleCanselFinal
      @provider:ordered = orderSuccess
      :provider = selectedProvider
      :room = room
      :available = availability
      :booking = booking

      :chatusers = chatusers
      :selecteduser = selecteduser
      :messages = messages
      @message = onMessage
      @select = selectUser
      @finalinfo = finalinfo

    />

  </MDBContainer>
  <MDBContainer v-else>
    <h3>Päivämäärä: {{booking[0].date}}</h3>

    <h2>Tarvin tässä osaaja - {{line}}</h2>

    <successMessage
      :message = orderMessage
    />

    <MDBRow>
      <MDBCol>
        <MDBTable border="primary" style="font-size: 18px; text-align: left;">
          <tbody>
          <tr>
            <td v-if="!isEditDescription">
              {{booking[0].description}}

            </td>
            <td v-else>
              <MDBTextarea label="Uusi kuvaus" rows="4" v-model="description" />
            </td>
          </tr>
          <tr>
            <td v-if="!isEditDescription">
              <MDBBtn outline="info" block size="lg" @click="isEditDescription = true">Muokkaa tehtävän kuvausta</MDBBtn>
            </td>
            <td v-else>
              <MDBBtn outline="info" block size="lg" @click="saveEditedDescription">Tallenna tehtävän kuvaus</MDBBtn>
            </td>
          </tr>

          </tbody>
        </MDBTable>
        <MDBRow v-if="booking[0].image === null || booking[0].image.length === 0">
          <MDBCol>

            <MDBBtn v-if="!isAddImage" block color="primary" @click="pressAddFirstImage">Add image</MDBBtn>
            <label v-if="isAddImage" for="file-upload" class="custom-file-upload">
                    <span v-if="value">
                    Muokkaa kuva: {{value.name}}

                     </span>
              <span v-else>Valitse kuva tehtävästä</span>
            </label>
            <input  id="file-upload" type="file" @change="handleFileChange"/>
              <img v-if="showImage && !isUploaded" :src="showImage" style="width: 200px; margin-bottom: 20px;" alt="..."/>
            <MDBBtn v-if="isImageSelected" block size="lg" @click="uploadFirstImage(i)">Upload image</MDBBtn>
          </MDBCol>
        </MDBRow>
<!--        <div v-if="isUploadImage && images.length === 0" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>-->
        <div>

          <MDBRow class="imageSection" v-for="(image, i) in images" :key="i">

            <MDBCol v-if="image.name">
              <img

                  :src="showImage && isUploaded && (imageIndex === i) ? showImage : require(`@/assets/client/${image.name}`)"
                  class = "loading"
                  style="width: 100%; margin-bottom: 20px;"
                  alt="kuva"
              />

              <div >
                <MDBBtn
                    v-if="!isEditImage || imageIndex !== i"
                    outline="info"
                    block
                    size="lg"
                    @click="pressEditImage(i)"
                >
                  Muokkaa kuva tehtävästä
                </MDBBtn>
                <div v-if="imageIndex === i" style="border: 1px solid grey; padding: 10px;">
                  <MDBBtnClose style="float: right;" @click="closeEditImage">

                  </MDBBtnClose>
                  <label for="file-upload" class="custom-file-upload">
                    <span v-if="value">
                    Muokkaa kuva: {{value.name}}

                     </span>
                    <span v-else>Valitse uusi kuva tehtävästä</span>
                  </label>


                  <input  id="file-upload" type="file" @change="handleFileChange"/>
                  <MDBBtn v-if="isImageSelected" block size="lg" @click="uploadEditedImage(image, i)">Change image</MDBBtn>
                  <MDBBtn block color="danger" size="lg" @click="removeImg(image._id)">Remove image</MDBBtn>'
                  <img v-if="showImage && !isImageCreated " :src="showImage" style="width: 200px; margin-bottom: 20px;" alt="..."/>

<!--                  <MDBBtn v-if="isImageSelected" block size="lg" @click="uploadFirstImage(i)">Upload image</MDBBtn>-->
                </div>

              </div>


            </MDBCol>

          </MDBRow>
          <div v-if="booking[0].image !== null">
            <MDBBtn
                v-if="booking[0].image.length > 0"
                style="margin-bottom: 20px;"
                block
                size="lg"
                outline="success"
                @click="pressAdditionalImage">
              Lataa uusi kuva
            </MDBBtn>

          </div>


          <label v-if="isAddImage" for="file-upload" class="custom-file-upload">
                    <span v-if="value">
                    Muokkaa kuva: {{value.name}}

                     </span>
            <span v-else>Valitse kuva tehtävästä</span>
          </label>
          <input  id="file-upload" type="file" @change="handleFileChange"/>

          <MDBBtn v-if="isImageSelected" block size="lg" @click="uploadAdditionalImage">Lataa uusi kuva tehtävästä</MDBBtn>
<!--          <MDBBtn block color="danger" size="lg" @click="removeImg(image._id)">Remove image</MDBBtn>'-->
          <img v-if="showImage && !isImageCreated " :src="showImage" style="width: 200px; margin-bottom: 20px;" alt="..."/>

        </div>

<!--        images {{booking}}-->
        <MDBRow>
          <MDBCol>
<!--            <div >
              <MDBBtn v-if="!isEditImage" outline="info" block size="lg" @click="isEditImage = true">Muokkaa tehtävän kuvausta</MDBBtn>
              <input v-else id="file-upload" type="file" @change="handleFileChange"/>
              <MDBBtn v-if="isImageSelected" block size="lg" @click="uploadEditedImage(image._id)">Change image</MDBBtn>
              <img v-if="showImage" :src="showImage" style="width: 200px; margin-bottom: 20px;" alt="..."/>
            </div>-->
          </MDBCol>
        </MDBRow>





      </MDBCol>
      <MDBCol v-if="isOrdered">
        <h2>Ordered</h2>
      </MDBCol>
      <MDBCol v-else>
        <div v-if="providers.length > 0">
          <div class="ui large form">
            <div class="field">
              <select id="listOfProviders" v-model="filterResult" @click="addFilter">
                <option disabled value="">Suodatin...</option>
                <option value="distance">Etäisyyden mukaan</option>
                <option value="rating">positiivisen palauteen mukaan</option>
<!--                <option>Rating</option>-->
<!--                <option>Else more</option>-->
              </select>
            </div>

          </div>
          <br>

          <MDBTable  style="font-size: 18px; text-align: center;">
            <tbody>
            <tr v-for="provider in providers" :key="provider.id">
              <td v-if="provider.timeoffer.map(to =>

                datetime.providerMatchingForClient(
                    bookingTime,
                    {y: to.yearFrom, m: to.monthFrom, d: to.dayFrom, hour: to.hoursFrom, min: to.minutesFrom},
                    {y: to.yearTo, m: to.monthTo, d: to.dayTo, hour: to.hoursTo, min: to.minutesTo}
                )
              ).includes(true)">
                <MDBBtn style="width: 200px; padding: 20px; background-color: grey; border: solid #4c4949;color: #f0eeee; font-size: 150%;"
                        outline="info"
                        size="lg"
                        @click="getProviderInfo(provider,'green')"
                >
                  {{provider.yritys}}
                </MDBBtn>
                <MDBBadge
                    color="success"
                    class="translate-middle p-1"
                    pill
                    notification
                ><h4>Saatavilla sen aikaan</h4>
                </MDBBadge>
              </td>
              <td v-else>

                <MDBBtn
                    style="width: 200px; padding: 20px; background-color: #827f7f; border: solid #5f5d5d;color: #f0eeee; font-size: 150%;"
                    size="lg"
                    @click="getProviderInfo(provider, 'orange')"
                >
                  {{provider.yritys}} <br>
                  <span style="font-size: 14px;">Etäisyys: {{provider.distance}} km</span>
                </MDBBtn>



                <MDBBadge
                    color="info"
                    class="translate-middle p-1"
                    pill
                    notification
                ><h4>Sovittaessa</h4></MDBBadge>

              </td>

            </tr>
            <tr>
            </tr>
            </tbody>
          </MDBTable>

<!--          Booking {{booking}}-->

        </div>
        <div v-else>
          <h2>Yrityksiä hetkellä ei löytyy</h2>
        </div>



      </MDBCol>
      <MDBBtn block outline="danger" size="lg" @click="canselResult">Takaisin</MDBBtn>
    </MDBRow>

  </MDBContainer>

</template>

<script>
/* eslint-disable */
import {
  MDBBtn, MDBContainer, MDBTable, MDBRow,
  MDBBtnClose,
  MDBCol, MDBTextarea,
  //MDBIcon,
  MDBBadge,
}from "mdb-vue-ui-kit";
import dt from '../components/controllers/datetime'
import recipientFinal from '../pages/RecipientPanelFinal'
import successMessage from '../components/notifications/successMessage'
import dist from '../components/controllers/distance'
import providerService from '../service/providers'
import imageService from '../service/image'
//import socket from "@/socket";
import {ref} from 'vue'
import recipientService from "@/service/recipients";
import socket from "@/socket";
import uploadService from "@/service/image";
//import socket from "@/socket";


export default {
  name: "recipient-panel-result",
  props: {
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
      chatUser: {},
      count: 0,
      datetime: dt,
      distance: dist,
      selectedProvider: null,
      isProviderSelected: false,
      availability: "",
      orderMessage: null,
      isOrdered: false,
      isEditDescription: false,
      description: this.booking[0].description,
      isAddImage: false,
      isEditImage: false,
      isUploadImage: false,
      isUploaded: false,
      isImageCreated: false,
      isAddNewImage: false,

      value: null,
      imageIndex: null,
      file: null,
      isImageSelected: false,
      showImage: null,
      tempImages: [],
      imagesx: [],
      imagesxxx: [],
      room: "",
      roomUserCount: 0,
      filterResult: ""
    }
  },

  components: {
    successMessage,
    dist,
    recipientFinal,
    MDBBtn,
    MDBBtnClose,
    MDBContainer,
    MDBTable,
    MDBRow,
    MDBCol,
    MDBTextarea,
    //MDBIcon,
    MDBBadge
  },
  methods: {
    getDistance () {
      //console.log("Distance +++++??? " + dist.distance())
      console.log("sss " + dist.test())
    },
    selectUser (user) {
      this.$emit('select', user);
    },
    onMessage (content, date) {
      this.$emit("message", content, date);
    },
    finalinfo (data) {
      console.log("Final info in result pressed ");
      this.$emit("finalinfo", data)

    },
    getChatCredentials () {

    },
    async pressAddFirstImage () {
      this.isAddImage = true;
      this.imageIndex = 0;
    },
    pressEditImage (index) {
      this.isImageSelected = false;
      this.imageIndex = index;
      this.isEditImage = true;
      this.isImageCreated = false;
      this.isUploaded = false;

      this.showImage = null;
      this.value = null;
    },
    pressAdditionalImage (index) {
      //this.imageIndex = this.booking[0].image.length - 1;
      this.imageIndex = this.images.length;
      //this.imageIndex = "new";
      this.isAddNewImage = true;
      console.log("Images index = " + this.imageIndex);
      this.isAddImage = true;
    },
    closeEditImage () {
      this.imageIndex = null;
    },
    handleFileChange(e) {
      //this.$emit('input', e.target.client[0])

      try {

        const files = e.target.files[0]
        console.log('event target client ', e.target.files[0])
        if (files) {
          const tempImage = URL.createObjectURL(files)
          this.tempImages.push(tempImage);
          this.showImage = URL.createObjectURL(files)
          this.file = e.target.files[0];
        }

      } catch (err) {
        console.log('Error:', err)
      }

      this.value = e.target.files[0]
      if (e.target.files[0]) {
        this.isImageSelected = true;
      } else {
        this.isImageSelected = false;
      }
    },

    async removeImg (id) {
      //this.value = null;
      this.$emit("removeImage", id);

      //this.imagesxxx= this.imagesxxx.filter(img => img._id !== id);
      await recipientService.removeImage(this.booking[0].id, id);
      await imageService.remove(id, this.booking[0].id);




      this.isImageSelected = false;
      this.showImage = null;
    },
    async uploadFirstImage (index) {
      const data = new FormData();
      this.isUploadImage = true;
      //this.imageIndex = 0;
      //this.isUploaded = true;
      //isUploaded && imageIndex === i
      data.append('file', this.file, this.file.name)
      const img = await imageService.create(data);
      await recipientService.addImage(this.booking[0].id, img.imgCreated._id);

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

        this.imageIndex = null;
      }



    },
    async uploadAdditionalImage () {

      //this.imageIndex = this.booking[0].image.length - 1;
      console.log("Image index index " + this.imageIndex)
      const data = new FormData();
      this.isUploadImage = true;
      //this.imageIndex = 0;
      this.isUploaded = true;
      //isUploaded && imageIndex === i
      data.append('file', this.file, this.file.name)
      const img = await imageService.create(data);
      await recipientService.addImage(this.booking[0].id, img.imgCreated._id);

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

       /* this.isAddImage = false;
        this.isImageCreated = false;
        this.isAddNewImage = false;*/

        //this.imageIndex = null;
      }



    },
    async uploadEditedImage (image, index) {

      console.log("Edited image index is: " + index);
      //this.imageIndex = index;
      this.isUploaded = true;
      this.isImageCreated = true;
      const data = new FormData();
      data.append('file', this.file, this.file.name)
      const img = await imageService.updateImage(image._id, data);



      if (img) {


        //console.log("New image name is " + img.name)
        //this.imgId = img.imgCreated._id;
        this.file = null;

        this.$emit("editImage", image, img)

        setTimeout( async () => {

          /*var index = this.images.indexOf(image);

          if (index !== -1) {
            this.images[index] = img;
          }*/

          //this.images.forEach((item, i) => { if (item.name === this.booking[0].image[i].name) this.images[i] = img; });

        }, 2000)


        this.isImageSelected = false;
        this.isEditImage = false;
        this.isUploaded = true;

        this.imageIndex = null;
      }

    },
    saveEditedDescription () {
      this.isEditDescription = false;
      const description = {
        description: this.description
      }
      this.$emit("editDescription", this.description);
      recipientService.editDescription(this.booking[0].id, description)
      this.description = "";
    },
    async orderSuccess (provId) {
      //console.log("Ordered!!!")

      this.isProviderSelected = false;

      //this.orderMessage = "Tilaus on lähetetty vahvistettavaksi! Kiitos!";
      console.log("Provider id " + provId)
      console.log("Recpient id: " + this.booking[0].id);

      const providerID = {
        providerID: this.selectedProvider.id
      };


      //await recipientService.addProviderID(this.booking[0].id, providerID);

      await recipientService.addProviderData(this.booking[0].id, this.selectedProvider.id);

      //socket.emit("send booking notification", this.booking[0], this.selectedProvider.id);

      //const providerName =
      //const status = "notSeen";
      const createBookingStatus = await recipientService.updateRecipient(this.booking[0].id, {status: "notSeen"});
      console.log("Is status updated: " + createBookingStatus.status);
      this.$emit('remove:confirmed:provider', provId);
      this.$emit('set:order:to:send', this.booking[0].id)

      const recipientId = this.booking[0].id;

      //--------------- About need delete selected and confirmed provider ------------

      //const booking = await providerServise.updateProvider(provId, {booking: [this.booking.id]})

      const booking = await providerService.addProviderBooking(provId, recipientId);
      if (booking === "Recipient is added!") {
        this.orderMessage = "Tilaus on lähetetty vahvistettavaksi! Kiitos!";

        console.log("Booking made - id: " + booking.id);

        this.isOrdered = true;

        setTimeout(() => {
          this.orderMessage = null;
        }, 3000)
      } else {
        this.orderMessage = "Olet lähetänyt tilauksen!"
        setTimeout(() => {
          this.orderMessage = null;
        }, 3000)
        //console.log("Yritys on jo tilattu!")
      }



    },
    getProviderInfo (provider, marker) {

      this.selectedProvider = provider;
      this.availability = marker;
      this.isProviderSelected = true;

      //console.log("Booking username " + this.booking[0].user.username)
      //console.log("Recipient room: " + (provider.yritys + this.booking[0].user.username))
      this.room = provider.yritys + this.booking[0].user.username

      socket.emit("room users count")
      socket.on('get room users count', (data) => {
        console.log("Can we get users data from backend in recipient final??? " + data.users.length)
        this.roomUserCount = data.users.length;
      })

      const username = this.booking[0].user.username;
      const room = provider.yritys + this.booking[0].user.username;



      const chatCredentials = {
        room: room,
        userID: this.chatUser.id,
        username: username,
      }

      const providerDatax = {
        userID: provider.user.id,
        username: provider.user.username,
        room: room
      }

      this.$emit("provider", providerDatax);

      const providerData = "Allu"

      const id = provider.user.id;
      const name = provider.user.username;


      this.$emit("chatCredentials", chatCredentials)

      socket.emit("online", (room));

      // socket.emit("create new room user", {
      //   room: room,
      //   username: username
      // })
      socket.emit("create room users", {
        room: room,
        username: username,
        providerUsername: provider.user.username,
        providerID: provider.user.id
      })

      //socket.emit("update room", room, id, name)
      // let rooms = ["Oopersama", "tvsama"]
      // socket.emit("join all room", rooms);
      // iolrhjwefiogäqhj
    },
    addFilter () {
      const filterListedProviders = document.getElementById("listOfProviders")

      filterListedProviders.addEventListener("change", (event) => {
        console.log("Filtered provider: " + event.target.value);
        this.$emit("filter_provider", event.target.value);
        // if (event.target.value === "distance") {
        //   this.$emit("filter_provider", event.target.value);
        // } else if (event.target.value === "feedback") {
        //
        //   this.$emit("filter_feedback")
        // }



      })
    },
    handleCanselFinal (result) {
      this.isProviderSelected = result;
    },
    canselResult () {
      this.$emit('cansel:result', false)
    }
  },
  async mounted() {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.chatUser = user;

      /*const booking = await recipientService.getBookingById(this.booking[0].id);
      this.imagesxxx = booking[0].image*/
      /*booking[0].image.forEach(bi => {
        this.tempImages.push(bi.name)
      })*/





      //this.joinServer(username, userID);
    }


  }
}
</script>


<style scoped>
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
  background-color: #87958e;
  border: 1px solid #ccc;
  display: inline-block;
  padding: 10px 12px;
  margin-bottom: 10px;
  cursor: pointer;
}
.imageSection {
  margin-bottom: 20px;
}
</style>