<template>
    <div class="sliderCity">
      <div class="Mobile">
        <Carousel
          :items-to-show="1"
          :wrap-around="true"
          autoplay="3000"
          dir="rtl"
        >
        <Slide v-for="(photo, index) in photos" :key="index">
            <div class="carousel__item flex relative flex-col bg-[#17202a]">
              <div class="card-container">
                <div class="col"><a class="card shadow-sm card-hover border-0" href="real-estate-catalog-rent.html">
                <div class="card-img-top card-img-hover"><span class="img-overlay opacity-65"></span><img :src="photo.src" alt="Chicago">
                  <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                    <div class="w-100 p-1">
                      <div class="mb-2">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>ملک برای فروش</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 37%" aria-valuenow="37" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">268</span>
                        </div>
                      </div>
                      <div class="pt-1">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>ملک برای اجاره</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">1540</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body text-center">
                  <h3 class="mb-0 fs-base text-nav">{{ photo.city }}</h3>
                </div></a></div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="laptop">
        <Carousel
          :items-to-show="3"
          :wrap-around="true"
          autoplay="3000"
          dir="rtl"
        >
          <Slide v-for="(photo, index) in photos" :key="index">
            <div class="carousel__item flex relative flex-col bg-[#17202a]">
              <div class="card-container">
                <div class="col"><a class="card shadow-sm card-hover border-0" href="real-estate-catalog-rent.html">
                <div class="card-img-top card-img-hover"><span class="img-overlay opacity-65"></span><img :src="photo.src" alt="Chicago">
                  <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                    <div class="w-100 p-1">
                      <div class="mb-2">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>ملک برای فروش</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 37%" aria-valuenow="37" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">268</span>
                        </div>
                      </div>
                      <div class="pt-1">
                        <h4 class="mb-2 fs-xs fw-normal text-light"><i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>ملک برای اجاره</h4>
                        <div class="d-flex align-items-center">
                          <div class="progress progress-light w-100">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                          </div><span class="text-light fs-sm ps-1 ms-2">1540</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body text-center">
                  <h3 class="mb-0 fs-base text-nav">{{ photo.city }}</h3>
                </div></a></div>
              </div>
            </div>
          </Slide>
       
      </Carousel>
  </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { Carousel, Navigation, Slide ,  } from "vue3-carousel";
  import axios from "axios";
  import "vue3-carousel/dist/carousel.css";
  
  export default defineComponent({
    name: "WrapAround",
    components: {
      Carousel,
      Slide,
      Navigation,
      
    },
    data() {
      return {
        photos: [
          {
            src: "/real-estate/catalog/01.jpg",
           
            city: "ناظر آباد",
           
          },
          {
            src: "/real-estate/catalog/02.jpg",
           
            city: "شیراز",
           
          },
          {
            src: "/real-estate/catalog/03.jpg",
          
            city: "مشهد",
           
          },
          {
            src: "/real-estate/catalog/04.jpg",
           
            city: "اصفهان",
          
          },
          {
            src: "/real-estate/catalog/05.jpg",
           
            city: "تهران  ",
           
          },
          {
            src: "/real-estate/catalog/04.jpg",
          
            city: " بجنورد",
          
          },
        ],
      };
    },
    mounted() {
      this.fetchData();
      
    },
    methods : {
      fetchData () {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
          console.log("sliderCityComponent" , res.data);
          //this.photos = res.data
        })
        .catch((error) => {
          console.error(error);
        })
      }
    }
  });
  </script>
  <style scoped>
  .card-container {
    margin-right: 50px;
    min-height: 400px;
  }
  
  .Mobile {
      display: none;
  }

  @media only screen and (max-width: 768px){
      .Mobile {
      display: block;
  } 
  .card-container {
    margin-right: 5px;
    min-height: 650px;
  }
  .laptop{
      display: none;
  }
  .card-container {
    margin-right: 0px;
  
  }
  .sliderCity{
    min-height: 400px;
    max-height: 500px;
    padding-bottom: 30px;
  }
  }

  
  @media only screen and (min-width: 768.1px){
      .Mobile {
      display: none;
  } 
  .laptop{
      display: block;
  }
  .sliderCity{
    height: 400px;
    padding-bottom: 30px;
  }
  }
  </style>
  