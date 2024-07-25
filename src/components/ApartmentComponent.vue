<template>
  <div>
    <div class="row g-4">
      <div class="col-md-6">

        <div class="col-md-12" :class="{ 'tag-pt-3': index !== 0 }" v-for="(photo, index) in photos" :key="index">
          <div

            class="card bg-size-cover  bg-position-center border-0 overflow-hidden"
            :style="{ 'background-image': 'url(' + photo.src + ')' }"
          >
            <span class="img-gradient-overlay"></span>
            <div class="card-body content-overlay pb-0">
              <span class="badge bg-info fs-sm">جدید</span>
            </div>
            <div class="card-footer content-overlay border-0 pt-0 pb-4">
              <div
                class="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5"
              >
                <a

                  class="text-decoration-none text-light pe-2"
                  href="real-estate-single-v1.html"
                >
                  <div class="fs-sm text-uppercase pt-2 mb-1">{{ photo.label }}</div>
                  <h3 class="h5 text-light mb-1">{{ photo.description }}</h3>
                  <div class="fs-sm opacity-70">
                    <i class="fi-map-pin me-1"></i>  
                    {{ photo.adress }}
                  </div></a
                >
                <div class="btn-group ms-n2 ms-sm-0 mt-3">
                  <a
                    class="btn btn-primary px-3
                    py-1"
                    href="real-estate-single-v1.html"
                    style="height: 2.75rem"
                    > {{ photo.price }}</a
                  >
                  <button
                    class="btn btn-primary btn-icon border-end-0 border-top-0 border-bottom-0 border-light fs-sm"
                    type="button"
                  >
                    <i class="fi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
      <div class="col-md-6" v-for="(photo, index) in photosSlide2" :key="index">
        <div
          class="card bg-size-cover bg-position-center border-0 overflow-hidden h-100"
          :style="{ 'background-image': 'url(' + photo.src + ')' }"
        >
          <span class="img-gradient-overlay"></span>
          <div class="card-body content-overlay pb-0">
            <div class="d-flex">
              <span class="badge bg-success fs-sm me-2">تایید</span
              ><span class="badge bg-info fs-sm">جدید</span>
            </div>
          </div>
          <div class="card-footer content-overlay border-0 pt-0 pb-4">
            <div
              class="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5"
            >
              <a
                class="text-decoration-none text-light pe-2"
                href="real-estate-single-v1.html"
              >
                <div class="fs-sm text-uppercase pt-2 mb-1">اجاره ای</div>
                <h3 class="h5 text-light mb-1"> {{ photo.description }}</h3>
                <div class="fs-sm opacity-70">
                  <i class="fi-map-pin me-1"></i>     
                  {{ photo.adress }}
                </div></a
              >
              <div class="btn-group ms-n2 ms-sm-0 mt-3">
                <a
                  class="btn btn-primary px-3"
                  href="real-estate-single-v1.html"
                  style="height: 2.75rem"
                  >   {{ photo.price }} </a
                >
                <button
                  class="btn btn-primary btn-icon border-end-0 border-top-0 border-bottom-0 border-light fs-sm"
                  type="button"
                >
                  <i class="fi-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      photos: [
        {
          src: "/real-estate/catalog/01.jpg",
          status: "تایید",
          label: "فروشی",
          adress: "استان خراسان شمالی ، شهر بجنورد ، کوچه امامی 15",
          category: "اجاره",
          title: `آپارتمان  | 85 مترمربع`,
          description: "آپارتمان مدرن استخردار",
          price: "شروع قیمت از 58.000.000 ت",
        },
        {
          src: "/real-estate/catalog/02.jpg",
          status: "تایید",
          label: "جدید",
          adress: "استان خراسان شمالی ، شهر بجنورد ، کوچه امامی 10",
          category: "اجاره",
          title: `آپارتمان  | 75 مترمربع`,
          description: "آپارتمان کنار ساحل استخردار",
          price: "شروع قیمت از 158.000.000 ت",
        }
        
      ],
      photosSlide2 :[
      {
          src: "/real-estate/catalog/03.jpg",
          status: "تایید",
          label: "فروشی",
          adress: "استان خراسان شمالی ، شهر بجنورد ، کوچه عزیز مصر 10",
          category: "اجاره",
          title: `آپارتمان  | 85 مترمربع`,
          description: "آپارتمان  نیاوران",
          price: "شروع قیمت از 58.000.000 ت",
        },
      ]
    };
  },
  mounted() {
    this.fetchData();
    this.fetchData2()
  },
  methods: {
    fetchData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/2")
        .then((res) => {
          console.log(res.data);
          // this.photos = res.data
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchData2() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/3")
        .then((res) => {
          console.log(res.data);
          // this.photosSlide = res.data
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>

.tag-pt-3:not(:first-child) {
  padding-top: 1rem !important; 
}
</style>