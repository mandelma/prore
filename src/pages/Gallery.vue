<template>
 <MDBContainer style="padding-top: 200px;">
   <h2>Kuvia tehtyistä työistä</h2>
<!--   :data-sub-html="`<h2 >Hei </h2><button type = 'button' onclick = 'delImage' >Delete image ${item.id}</button>`"-->
   <button v-on:click="updateSlides">Lisää uusi kuva</button>
   <lightgallery
       id="update"
       :settings="{ speed: 500, height: height, plugins: plugins }"
       :onInit="onInit"
       :onBeforeSlide="onBeforeSlide"
   >
     <a
         v-for="item in items"

         :key="item.id"
         :data-lg-size="item.size"

         class="gallery-item"
         :data-src="item.src"
     >
       <img style="margin-bottom: 10px; width: 130px; height: 80px; justify-content: left;" class="img-responsive" :src="item.thumb" />



     </a>

   </lightgallery>

<!--   aa {{aa}}-->

 </MDBContainer>
</template>

<script>
/* eslint-disable */
import Lightgallery from 'lightgallery/vue';
//import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
let lightGallery = null;


import {
  MDBContainer,
  MDBBtn
} from 'mdb-vue-ui-kit'
export default {
  name: "Gallery",
  components: {
    Lightgallery,
    MDBContainer,
    MDBBtn
  },
  watch: {
    items(newVal, oldVal) {
      this.$nextTick(() => {
        lightGallery.refresh();
      });
    },
  },
  data () {
    return {
      plugins: [lgZoom],
      height:' 100px',
      id: null,
      aa: 0,

      items: [
        {
          id: '1',
          size: '1400-933',
          src:
              'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
          thumb:
              'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80',
          subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                <p>Published on November 13, 2018</p>
            </div>`,
        },

        {
          id: '2',
          size: '1400-933',
          src:
              'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
          thumb:
              'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80',
          subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
                <p>Published on September 14, 2016</p>
            </div>`,
        },
        {
          id: '3',
          size: '1400-932',
          src:
              'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
          thumb:
              'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
          subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
        },
        {
          id: '4',
          //size: '1000-400',
          src: require(`@/assets/avatar/avatar.png?w=200`),
          thumb:  require(`@/assets/avatar/avatar.png?w=200`),
          subHtml: `<div class="lightGallery-captions">

                <button>Delete image</button>
            </div>"`
        }
      ],
    }
  },
  mounted () {



  },
  methods: {
    delImage () {

      // let btn = document.getElementById("123");
      // btn.addEventListener(onclick, () => {
      //   console.log("Deleting image...")
      // })
      console.log("Deleting image...")
    },
    onInit (detail)  {


      //console.log("Slide " + plugin.slide())
      console.log("Details " + detail.instance.index)
      lightGallery = detail.instance;
      console.log("Index " + detail.index)
      const $btn = '<button style="margin-left: 100px;" type="button" aria-label="View source" id="lg-delete">Custom button</button>';
      lightGallery.outer.find('.lg-toolbar').append($btn);
      document.getElementById("lg-delete").addEventListener("click", () => {
        console.log("custom button click " + this.aa);

        // let gItems = JSON.parse(
        //     JSON.stringify(lightGallery.items),
        // );
        //gItems.shift();
        //updateSlideInstance.updateSlides(items, 1);
      });



      // let updateSlideInstance = detail.instance;
      // const addBtn =
      //     '<button type="button" aria-label="Add slide" class="lg-icon" id="lg-add"><svg>...</svg></button>';
      // const deleteBtn =
      //     '<button type="button" aria-label="Remove slide" class="lg-icon" id="lg-delete"> <svg>...</svg></button>';
      //
      // updateSlideInstance.outer.find('.lg-toolbar').append(deleteBtn);
      // updateSlideInstance.outer.find('.lg-toolbar').append(addBtn);

      // make use on lightGallery init event to add custom buttons into the toolbar
      // $lgDemoUpdateSlides.addEventListener('lgInit', (event) => {
      //   let updateSlideInstance = event.detail.instance;
      //   const addBtn =
      //       '<button type="button" aria-label="Add slide" class="lg-icon" id="lg-add"><svg>...</svg></button>';
      //   const deleteBtn =
      //       '<button type="button" aria-label="Remove slide" class="lg-icon" id="lg-delete"> <svg>...</svg></button>';
      //
      //   updateSlideInstance.outer.find('.lg-toolbar').append(deleteBtn);
      //   updateSlideInstance.outer.find('.lg-toolbar').append(addBtn);


      //});

      //lightGallery.outer.find('.lg-toolbar').append($btn);
    },
    updateSlides: function () {
      this.items = [
        ...this.items,
        {
          id: '4',
          size: '1400-933',
          src:
              'https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
          thumb:
              'https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
          subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
                <p>Published on January 6, 2021</p>
            </div>`,
        },
      ];
        lightGallery.refresh();
    },
    onBeforeSlide(index)  {
      console.log('calling before slide ' + typeof index.index);
      let tasku = index.index;
      console.log("Tasku " + tasku)
      this.aa = tasku;
    },
  }
}
</script>

<style scoped>
body {
  margin: 0;
}

.gallery-item {
  margin: 20px;

}
</style>