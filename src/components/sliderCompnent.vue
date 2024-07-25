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
          <div class="carousel__item flex relative flex-col bg-[#17202a]">
            <div class="card-container">
              <div class="card shadow-sm card-hover border-0 h-100">
                <div class="card-img-top card-img-hover">
                  <a class="img-overlay" href="real-estate-single-v1.html"></a>
                  <div class="position-absolute start-0 top-0 pt-3 ps-3">
                    <span class="d-table badge bg-success mb-1">{{
                      photo.status
                    }}</span
                    ><span class="d-table badge bg-info">{{
                      photo.label
                    }}</span>
                  </div>
                  <div class="content-overlay end-0 top-0 pt-3 pe-3">
                    <button
                      class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                      type="button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="افزودن به علاقه مندی"
                    >
                      <i class="fi-heart"></i>
                    </button>
                  </div>
                  <img :src="photo.src" alt="Image" />
                </div>
                <div class="card-body position-relative pb-3">
                  <h4 class="mb-1 fs-sm fw-normal text-uppercase text-primary">
                    {{ photo.category }}
                  </h4>
                  <h3 class="h6 mb-2 fs-base">
                    <a
                      class="nav-link stretched-link"
                      href="real-estate-single-v1.html"
                    >
                      {{ photo.title }}
                    </a>
                  </h3>
                  <p class="mb-2 fs-sm text-muted">{{ photo.description }}</p>
                  <div>
                    <i
                      class="fi-cash mt-n1 me-2 lead align-middle opacity-70"
                    ></i
                    >{{ photo.price }}
                  </div>
                </div>
                <div
                  class="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap"
                >
                  <span class="d-inline-block mx-1 px-2 fs-sm"
                    >3<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span
                  ><span class="d-inline-block mx-1 px-2 fs-sm"
                    >2<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span
                  ><span class="d-inline-block mx-1 px-2 fs-sm"
                    >2<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
    <div class="laptop">
      <Carousel
        :items-to-show="2.5"
        :wrap-around="true"
        autoplay="3000"
        dir="rtl"
      >
        <Slide v-for="(photo, index) in photos" :key="index">
          <div class="carousel__item flex relative flex-col bg-[#17202a]">
            <div class="card-container">
              <div class="card shadow-sm card-hover border-0 h-100">
                <div class="card-img-top card-img-hover">
                  <a class="img-overlay" href="real-estate-single-v1.html"></a>
                  <div class="position-absolute start-0 top-0 pt-3 ps-3">
                    <span class="d-table badge bg-success mb-1">{{
                      photo.status
                    }}</span
                    ><span class="d-table badge bg-info">{{
                      photo.label
                    }}</span>
                  </div>
                  <div class="content-overlay end-0 top-0 pt-3 pe-3">
                    <button
                      class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                      type="button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="افزودن به علاقه مندی"
                    >
                      <i class="fi-heart"></i>
                    </button>
                  </div>
                  <img :src="photo.src" alt="Image" />
                </div>
                <div class="card-body position-relative pb-3">
                  <h4 class="mb-1 fs-sm fw-normal text-uppercase text-primary">
                    {{ photo.category }}
                  </h4>
                  <h3 class="h6 mb-2 fs-base">
                    <a
                      class="nav-link stretched-link"
                      href="real-estate-single-v1.html"
                    >
                      {{ photo.title }}
                    </a>
                  </h3>
                  <p class="mb-2 fs-sm text-muted">{{ photo.description }}</p>
                  <div>
                    <i
                      class="fi-cash mt-n1 me-2 lead align-middle opacity-70"
                    ></i
                    >{{ photo.price }}
                  </div>
                </div>
                <div
                  class="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap"
                >
                  <span class="d-inline-block mx-1 px-2 fs-sm"
                    >3<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span
                  ><span class="d-inline-block mx-1 px-2 fs-sm"
                    >2<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span
                  ><span class="d-inline-block mx-1 px-2 fs-sm"
                    >2<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i
                  ></span>
                </div>
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
          src: "/real-estate/catalog/01.jpg",
          status: "تایید",
          label: "جدید",
          link: "real-estate-single-v1.html",
          category: "اجاره",
          title: `آپارتمان  | 85 مترمربع`,
          description: "آپارتمان مدرن استخردار",
          price: "250000 ت",
        },
        {
          src: "/real-estate/catalog/02.jpg",
          status: "تایید",
          label: "جدید",
          link: "real-estate-single-v1.html",
          category: "اجاره",
          title: `آپارتمان  | 75 مترمربع`,
          description: "آپارتمان کنار ساحل استخردار",
          price: "250000 ت",
        },
        {
          src: "/real-estate/catalog/03.jpg",
          status: "تایید",
          label: "ویژه",
          link: "real-estate-single-v1.html",
          category: "اجاره",
          title: `آپارتمان | 110 مترمربع`,
          description: "آپارتمان مدرن استخردار",
          price: "250000 ت",
        },
        {
          src: "/real-estate/catalog/04.jpg",
          status: "تایید",
          label: "جدید",
          link: "real-estate-single-v1.html",
          category: "اجاره",
          title: `آپارتمان  | 85 مترمربع`,
          description: "آپارتمان  سونا",
          price: "250000 ت",
        },
        {
          src: "/real-estate/catalog/05.jpg",
          status: "تایید",
          label: "ویژه",
          link: "real-estate-single-v1.html",
          category: "اجاره",
          title: `آپارتمان | 85 مترمربع`,
          description: "آپارتمان مدرن استخردار",
          price: "250000 ت",
        },
        {
          src: "/real-estate/catalog/04.jpg",
          status: "تایید",
          label: "جدید",
          link: "real-estate-single-v1.html",
          category: "اجاره",
          title: `آپارتمان  | 85 مترمربع`,
          description: "آپارتمان مدرن استخردار",
          price: "250000 ت",
        },
      ],
    };
  },
  mounted () {
    this.fetchData();
  },
  methods : {
    fetchData () {
      axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then( res => {
        console.log(res.data);
        // this.photos = res.data
      })
      .catch( error => {
        console.error(error);
      })
    }
  }
});
</script>
<style scoped>
.card-container {
  margin-right: 50px;
  min-height: 600px;
}

.Mobile {
    display: none;
}
@media only screen and (max-width: 768px){
    .Mobile {
    display: block;
} 
.laptop{
    display: none;
}
.card-container {
  margin-right: 0px;

}
}

@media only screen and (min-width: 768.1px){
    .Mobile {
    display: none;
} 
.laptop{
    display: block;
}
}
</style>
