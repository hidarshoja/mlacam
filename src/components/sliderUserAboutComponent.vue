<template>
    <div class="Mobile">
        <Carousel v-bind="settings" :autoplay="3000"  :items-to-show="1" :wrap-around="true">
    <Slide v-for="user in users" :key="user.id">
      <div class="carousel__item">
        <div class="col" style="margin-bottom: 30px;">
          <div class="card border-0 shadow-sm">
            <img
              class="card-img-top"
              :src="user.src"
              alt="Dianne Russell"
            />
            <div class="card-body text-center">
              <h3 class="h5 card-title mb-2"> {{ user.name }}</h3>
              <span class="d-inline-block mb-3 fs-sm">{{ user.job }} </span>
              <div class="pt-1">
                <a
                  class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2"
                  href="#"
                  ><i class="fi-facebook"></i></a
                ><a
                  class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2"
                  href="#"
                  ><i class="fi-twitter"></i></a
                ><a
                  class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2"
                  href="#"
                  ><i class="fi-instagram"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
    </div>
    <div class="laptop">
        <Carousel v-bind="settings" :autoplay="3000"  :items-to-show="3.5" :wrap-around="true">
          <Slide v-for="user in users" :key="user.id">
            <div class="carousel__item">
              <div class="col" style="margin-right: 30px; margin-bottom: 30px;">
                <div class="card border-0 shadow-sm">
                  <img
                    class="card-img-top"
                    :src="user.src"
                    alt="Dianne Russell"
                  />
                  <div class="card-body text-center">
                    <h3 class="h5 card-title mb-2"> {{ user.name }}</h3>
                    <span class="d-inline-block mb-3 fs-sm">{{ user.job }} </span>
                    <div class="pt-1">
                      <a
                        class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2"
                        href="#"
                        ><i class="fi-facebook"></i></a
                      ><a
                        class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2"
                        href="#"
                        ><i class="fi-twitter"></i></a
                      ><a
                        class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2"
                        href="#"
                        ><i class="fi-instagram"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
      
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    users: [
      { id: 1, name: "رضا شکاری", job: "مدیر شرکت ", src: "/real-estate/about/team/01.jpg" },
      { id: 2, name: "مینا احمدی", job: "مدیر فروش ", src: "/real-estate/about/team/02.jpg" },
      { id: 3, name: "محسن شکاری", job: "مدیر فنی ", src: "/real-estate/about/team/03.jpg" },
      { id: 4, name: "رضا وحیدی", job: "مدیر تولید محتوا ", src: "/real-estate/about/team/04.jpg" },
      { id: 5, name: "حسین نامداری", job: "برنامه نویس ", src: "/real-estate/about/team/01.jpg" },
      { id: 6, name: "ژاله محمدی", job: " طراح ", src: "/real-estate/about/team/02.jpg" },
      { id: 7, name: "بیتا شکاری", job: "   بازاریاب ", src: "/real-estate/about/team/03.jpg" },
    ],
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
});
</script>
<style scoped>
    .Mobile {
        display: none;
    }
    
   @media only screen and (max-width:768px){

    .Mobile {
        display: block;
    }
    .laptop {
    display: none;
}
}
@media only screen and (min-width:768.1px){

.laptop {
    display: block;
}
}
</style>
