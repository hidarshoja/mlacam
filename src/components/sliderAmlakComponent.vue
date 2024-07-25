<template>
    <div>
      <div class="Mobile">
        <Carousel
          :items-to-show="1"
          :wrap-around="true"
          autoplay="3000"
          dir="rtl"
        >
          <Slide v-for="(photo, index) in photos" :key="index">
            <div class="">
          <div class="">
            <div>
              <div class="row align-items-center">
                <div class="col-xl-4 d-none d-xl-block"><img class="rounded-3" :src="photo.src" alt="Agent picture"></div>
                <div class="col-xl-4 col-md-5 col-sm-4"><img class="rounded-3" :src="photo.src2" alt="Agent picture"></div>
                <div class="col-xl-4 col-md-7 col-sm-8 px-4 px-sm-3 px-md-0 ms-md-n4 mt-n5 mt-sm-0 py-3">
                  <div class="card border-0 shadow-sm ms-sm-n5">
                    <blockquote class="blockquote card-body">
                      <h4 style="max-width: 22rem;font-family:vazir-bold">&quot;  
                      {{ photo.title }}
                        &quot;</h4>
                      <p class="d-sm-none d-lg-block">لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است.</p>
                      <footer class="d-flex justify-content-between">
                        <div class="pe-3"><a class="text-decoration-none" href="real-estate-vendor-properties.html">
                            <h6 class="mb-0">فلوید مایلز</h6>
                            <div class="text-muted fw-normal fs-sm mb-3">نماینده گروه امپراتوری املاک</div></a><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="#"><i class="fi-facebook"></i></a><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="#"><i class="fi-twitter"></i></a><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="#"><i class="fi-linkedin"></i></a></div>
                        <div><span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i></span>
                          <div class="text-muted fs-sm mt-1">45 نظر</div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div>
         
            </div>
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
            src: "/real-estate/agents/01.jpg",
            src2:"/real-estate/agents/02.jpg",
            title: " من بهترین اقامتگاه را برای شما انتخاب می کنم",
           
          },
          {
            src: "/real-estate/agents/02.jpg",
            src2:"/real-estate/agents/03.jpg",
            title: "من نه نمی گویم ، من فقط راهی برای کار کردن پیدا کردم",
           
          },
          {
            src: "/real-estate/agents/03.jpg",
            src2:"/real-estate/agents/01.jpg",
            title: "بهترین انتخاب اینجاست",
           
          },
          
        ],
      };
    },
    mounted (){
      this.fetchData();
    },
    methods : {
      fetchData (){
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
          console.log("sliderAmlakComponent" ,res.data);
          // this.photos = res.data
        })
        .catch((error) => {
          console.error(error);
        });
      }
    }
  });
  </script>
  <style scoped>
  </style>