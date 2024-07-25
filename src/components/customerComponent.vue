<template>
     <div class="Mobile">
        <Carousel v-bind="settings" :autoplay="3000"  :items-to-show="1" :wrap-around="true">
    <Slide v-for="user in users" :key="user.id">
      <div class="carousel__item">
        <div class="d-flex flex-md-row flex-column align-items-md-start mx-3 py-3">
            <img class="d-md-block d-none ms-4 rounded-3" :src="user.src" width="306" alt="Customer image">
              <div class="card border-0 shadow-sm h-100">
                <blockquote class="blockquote card-body">
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد .</p>
                  <footer class="d-flex align-items-center">
                    <img src="/job-board/company/zalo-lg.png" width="56" alt="Logo">
                    <div class="pe-3">
                      <h6 class="fs-base mb-0">{{ user.job }}</h6>
                      <div class="text-muted fw-normal fs-sm"> {{ user.name }}</div>
                    </div>
                  </footer>
                </blockquote>
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
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  export default defineComponent({
    name: 'ExamplePagination',
    components: {
      Pagination,
      Carousel,
      Slide,
      Navigation,
    },
    data: () => ({
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      users: [
      { id: 1, name: "رضا شکاری", job: "مدیر شرکت سورنا ", src: "/real-estate/about/testimonials/01.jpg" },
      { id: 2, name: "مینا احمدی", job: "مدیر جهاد کشاورزی ", src: "/real-estate/about/testimonials/02.jpg" }
      
    ],
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: 'start',
        },
      },
    }),
  })
  </script>
  