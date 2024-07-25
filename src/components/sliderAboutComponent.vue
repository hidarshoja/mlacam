<template>
    <Carousel :items-to-show="1" :wrap-around="true">
      <Slide v-for="(photo, index) in photos" :key="index">
        <div class="carousel__item">
            <img class="imgSliderAbout" :src="photo.src" alt="Chicago">
        </div>
      </Slide>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'WrapAround',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data() {
        return {
            photos : [
                {
                    src : "/real-estate/about/hero/01.jpg",
                },
                {
                    src : "/real-estate/about/hero/02.jpg",
                }
                
            ]
        }
    }
  })
  </script>
  <style scoped> 
     .imgSliderAbout{
        width: 100%;
        border-radius: 8px;
        -webkit-box-shadow: 0 10px 6px -6px #777;
     -moz-box-shadow: 0 10px 6px -6px #777;
          box-shadow: 0 10px 6px -6px #777;
     }
 </style>