<template>
  <div style="overflow: hidden">
    <Carousel
      id="gallery"
      :items-to-show="1"
      :wrap-around="false"
      v-model="currentSlide"
    >
      <Slide v-for="(photo, index) in img" :key="index">
        <div class="carousel__item">
            <img :src="photo.src" alt="Image" class="img_carousel"/>  
        </div>
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="(photo, index) in img" :key="index" class="slider-carousel">
        <div class="carousel__item" @click="slideTo(index)" style="cursor: pointer; width: 150px; height: 150px; margin: 50px 0; border-radius: 10px;">
          <img class="img_carousel" :src="photo.src" :alt="photo.title" style="width: 100%; height: 100%; object-fit: cover; " />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      img: [
        {
          src: "/real-estate/catalog/01.jpg",
          title :"عکس 1"
        },
        {
          src: "/real-estate/catalog/02.jpg",
          title :"عکس 2"
        },
        {
          src: "/real-estate/catalog/03.jpg",
          title :"عکس 3"
        },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
});
</script>
<style scoped>
   .img_carousel{
    -webkit-box-shadow: 0 10px 6px -6px #777;
     -moz-box-shadow: 0 10px 6px -6px #777;
          box-shadow: 0 10px 6px -6px #777;
          border-radius: 8px; 
   }

   @media only screen and (max-width:650px){

     .slider-carousel{
      display: none;
     }
   }
</style>
