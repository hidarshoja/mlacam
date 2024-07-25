<template>
  <div>
    <!-- Page container-->
    <div class="container-fluid mt-5 pt-5 p-0">
      <div class="row g-0 mt-n3">
        <!-- Filters sidebar (Offcanvas on mobile)-->
        <aside
          class="col-lg-4 col-xl-3 border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2"
        >
          <div class="offcanvas-lg offcanvas-end" id="filters-sidebar">
            <div class="offcanvas-header d-flex d-lg-none align-items-center">
              <h2 class="h5 mb-0">فیلتر جستجو</h2>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="offcanvas"
                data-bs-target="#filters-sidebar"
              ></button>
            </div>
          </div>
          <div
            class="offcanvas-header d-block border-bottom pt-0 pt-lg-4 px-lg-0"
          >
            <ul class="nav nav-tabs mb-0">
              <li class="nav-item">
                <a class="nav-link active" href="/rent"
                  ><i class="fi-rent fs-base me-2"></i>برای اجاره</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/sell"
                  ><i class="fi-home fs-base me-2"></i>برای فروش</a
                >
              </li>
            </ul>
          </div>
          <div class="offcanvas-body py-lg-4">
            <div class="pb-4 mb-2">
              <h3 class="h6">موقعیت مکانی</h3>
              <select class="form-select mb-2" v-model="selectedCity">
                <option value="" disabled>انتخاب شهر</option>
                <option value="Tehran">تهران</option>
                <option value="Mashhad">مشهد</option>
                <option value="Esfahan">اصفهان</option>
                <option value="Tabrez" selected>تبریز</option>
                <option value="Bojnord">بجنورد</option>
              </select>
              <select class="form-select" v-model="selectedRegion">
                <option value="" selected disabled>انتخاب منطقه</option>
                <option value="Brooklyn">1</option>
                <option value="Manhattan">2</option>
                <option value="Staten Island">3</option>
                <option value="The Bronx">4</option>
                <option value="Queens">5</option>
              </select>
            </div>
            <div class="pb-4 mb-2">
              <h3 class="h6">نوع ملک</h3>
              <div
                class="overflow-auto"
                data-simplebar
                data-simplebar-auto-hide="false"
                data-simplebar-direction="rtl"
                style="height: 11rem"
              >
                <div
                  class="form-check"
                  v-for="propertyType in propertyTypes"
                  :key="propertyType.id"
                >
                  <input
                    v-model="selectedPropertyTypes"
                    class="form-check-input"
                    type="checkbox"
                    :id="propertyType.id"
                    :value="propertyType.id"
                  />
                  <label
                    class="form-check-label fs-sm"
                    :for="propertyType.id"
                    >{{ propertyType.label }}</label
                  >
                </div>
              </div>
              <div class="pb-4 mb-2">
                <h3 class="h6">قیمت اجاره</h3>
                <!-- start nemodar price -->
                <div>
                  <div class="parent">
                    <div class="div2">
                      <div class="slider3" style="width: 150px">
                        <input
                          class="inputRange"
                          type="range"
                          min="0"
                          max="1000000"
                          v-model="sliderValue2"
                          @input="updateRangeValue2"
                        />
                      </div>
                      <div class="slider4" style="width: 75px">
                        <input
                          class="inputRange"
                          type="range"
                          min="0"
                          max="2000"
                          v-model="sliderValue"
                          @input="updateRangeValue"
                        />
                      </div>
                    </div>
                    <div class="textDiv">
                      <p id="rangeValue">حداقل : {{ sliderValue }} ت</p>
                      <p id="rangeValue">حداکثر : {{ sliderValue2 }} ت</p>
                    </div>
                  </div>
                </div>
                <!-- end nemodar price -->
              </div>
              <!--  -->
              <div class="pb-4 mb-2">
                <h3 class="h6 pt-1">تعداد اتاق خواب و سرویس بهداشتی</h3>
                <label class="d-block fs-sm mb-1">تعداد اتاق</label>
                <div
                  class="btn-group btn-group-sm"
                  role="group"
                  aria-label="Choose number of bedrooms"
                  v-for="houseType in houseTypes"
                  :key="houseType.id"
                >
                <input
                    v-model="selectedHouseTypes"
                    class="btn-check"
                    type="radio"
                    :id="houseType.id"
                    :value="houseType.id"
                  />
                  <label
                    class="btn btn-outline-secondary fw-normal"
                    :for="houseType.id"
                    >{{ houseType.label }}</label
                  >
                </div>
              </div>
              <div class="pb-4 mb-2">
                <h3 class="h6 pt-1">متراژ (مترمربع)</h3>
                <div class="d-flex align-items-center">
                  <input
                    class="form-control w-100"
                    type="number"
                    min="20"
                    max="500"
                    step="10"
                    placeholder="حداقل"
                    v-model="minArea"
                  />
                  <div class="mx-2">&mdash;</div>
                  <input
                    v-model="maxArea"
                    class="form-control w-100"
                    type="number"
                    min="20"
                    max="500"
                    step="10"
                    placeholder="حداکثر"
                  />
                </div>
              </div>
              <div class="pb-4 mb-2">
                <h3 class="h6">امکانات رفاهی</h3>
                <div
                  class="overflow-auto"
                  data-simplebar
                  data-simplebar-auto-hide="false"
                  data-simplebar-direction="rtl"
                  style="height: 11rem"
                >
                  <div 
                  class="form-check"
                  v-for="facilitiesType in facilitiesTypes"
                  :key="facilitiesType.id">
                    <input
                      v-model="selectedfacilitiesTypes"
                      class="form-check-input"
                      type="checkbox"
                      :id="facilitiesType.id"
                      :value="facilitiesType.id"
                    />
                    <label 
                    class="form-check-label fs-sm" 
                    :for="facilitiesType.id" >{{ facilitiesType.label }}
                    </label>
                  </div>
                </div>
              </div>
              <div class="pb-4 mb-2">
                <h3 class="h6">نگهداری حیوان خانگی</h3>
                <div class="form-check"
                v-for="animal in animals"
                :key="animal.id"
                >
                  <input
                  v-model="animalSelected"
                    class="form-check-input"
                    type="checkbox"
                    :id="animal.id"
                    :value ="animal.id"
                  />
                  <label class="form-check-label fs-sm"
                  :for="animal.id"
                    >{{ animal.label }}  </label
                  >
                </div>
               
              </div>
             
              <div class="border-top py-4">
                <button
                  class="btn btn-outline-primary"
                  @click="applyFilters"
                  type="button"
                >
                  <i class="fi-rotate-right me-2"></i>اعمال فیلتر
                </button>
              </div>
            </div>
          </div>
        </aside>
        <!-- Page content-->
        <div
          class="col-lg-8 col-xl-9 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5"
        >
          <!-- Map popup-->
          <div class="map-popup invisible" id="map">
            <button
              class="btn btn-icon btn-light btn-sm shadow-sm rounded-circle"
              type="button"
              data-bs-toggle-class="invisible"
              data-bs-target="#map"
            >
              <i class="fi-x fs-xs"></i>
            </button>
            <div
              class="interactive-map"
              data-map-options-json="https://finder.createx.studio/json/map-options-real-estate-rent.json"
            ></div>
          </div>
          <!-- Breadcrumb-->
          <nav class="mb-3 pt-md-2" aria-label="Breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">خانه</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                ملک برای اجاره
              </li>
            </ol>
          </nav>
          <!-- Title-->
          <div
            class="d-sm-flex align-items-center justify-content-between pb-3 pb-sm-4"
          >
            <h1 class="h4 mb-sm-0">لیست املاک برای اجاره</h1>
            <a
              class="d-inline-block fw-bold text-decoration-none py-1"
              href="#"
              data-bs-toggle-class="invisible"
              data-bs-target="#map"
              ><i class="fi-map me-2"></i>مشاهده نقشه</a
            >
          </div>
          <!-- Sorting-->
          <div
            class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2"
          >
            <div class="d-flex align-items-center flex-shrink-0">
              <label class="fs-sm me-2 pe-1 text-nowrap" for="sortby"
                ><i class="fi-arrows-sort text-muted mt-n1 me-2"></i>مرتب سازی
                براساس:
              </label>
              <select v-model="selectedOption" class="form-select form-select-sm" id="sortby">
                <option>جدیدترین</option>
                <option>پربازدیدترین</option>
                <option>قیمت بالا</option>
                <option>قیمت پایین</option>
                <option>امتیاز بالا</option>
                <option>امتیاز میانگین</option>
              </select>
            </div>
            <hr class="d-none d-sm-block w-100 mx-4" />
            <div
              class="d-none d-sm-flex align-items-center flex-shrink-0 text-muted"
            >
              <i class="fi-check-circle me-2"></i>
              <span class="fs-sm mt-n1" :key="index"
                >{{ items.length }} نتیجه یافت شد</span
              >
            </div>
          </div>
          <!-- Catalog grid-->
          <div class="row g-4 py-4">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="col-sm-6 col-xl-4"
            >
              <div class="card shadow-sm card-hover border-0 h-100">
                <!-- تصاویر و سایر محتواها -->
                <div class="tns-carousel-wrapper card-img-top card-img-hover">
                  <a class="img-overlay" :href="item.link"></a>
                  <div class="position-absolute start-0 top-0 pt-3 ps-3">
                    <span class="d-table badge bg-success mb-1">{{
                      item.status1
                    }}</span>
                    <span class="d-table badge bg-info">{{
                      item.status2
                    }}</span>
                  </div>
                  <div class="content-overlay end-0 top-0 pt-3 pe-3">
                    <button
                      class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                      type="button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="نشان کردن"
                    >
                      <i class="fi-heart"></i>
                    </button>
                  </div>
                  <!-- start slider -->
                  <div :id="'carouselExample' + index" class="carousel slide">
                    <div class="carousel-inner">
                      <div
                        v-for="(image, imageIndex) in item.images"
                        :key="imageIndex"
                        class="carousel-item"
                        :class="{ active: imageIndex === 0 }"
                      >
                        <img :src="image" class="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      :data-bs-target="'#carouselExample' + index"
                      data-bs-slide="prev"
                      type="button"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      :data-bs-target="'#carouselExample' + index"
                      data-bs-slide="next"
                      type="button"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <!-- end slider -->
                </div>

                <!-- اطلاعات هر ایتم -->
                <div class="card-body position-relative pb-3">
                  <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">
                    {{ item.type }}
                  </h4>
                  <h3 class="h6 mb-2 fs-base">
                    <router-link
                      class="nav-link stretched-link"
                      :to="item.link"
                      >{{ item.title }}</router-link
                    >
                  </h3>
                  <p class="mb-2 fs-sm text-muted">{{ item.location }}</p>
                  <div class="fw-bold">
                    <i
                      class="fi-cash mt-n1 me-2 lead align-middle opacity-70"
                    ></i>
                    {{ item.price }}
                  </div>
                </div>

                <!-- اطلاعات تعداد اتاق‌ها و سایر ویژگی‌ها -->
                <div
                  class="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap"
                >
                  <span class="d-inline-block mx-1 px-2 fs-sm">
                    {{ item.bedrooms
                    }}<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i>
                  </span>
                  <span class="d-inline-block mx-1 px-2 fs-sm">
                    {{ item.bathrooms
                    }}<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i>
                  </span>
                  <span class="d-inline-block mx-1 px-2 fs-sm">
                    {{ item.cars
                    }}<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- Pagination-->
          <nav class="border-top pb-md-4 pt-4 mt-2" aria-label="Pagination">
            <ul class="pagination mb-1">
              <li class="page-item d-sm-none">
                <span class="page-link page-link-static">1 / 5</span>
              </li>
              <li
                class="page-item active d-none d-sm-block"
                aria-current="page"
              >
                <span class="page-link"
                  >1<span class="visually-hidden">(صفحه جاری)</span></span
                >
              </li>
              <li class="page-item d-none d-sm-block">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item d-none d-sm-block">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item d-none d-sm-block">...</li>
              <li class="page-item d-none d-sm-block">
                <a class="page-link" href="#">8</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next"
                  ><i class="fi-chevron-right"></i
                ></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import rangeComponent from "@/components/rangeComponent.vue";
import axios from "axios";
export default {
  data() {
    return {
      selectedCity: "",
      selectedRegion: "",
      sliderValue: 0,
        halfMaxValue: 0,
        sliderValue2: 2000,
        halfMaxValue2: 2000,
        minArea: null,
        maxArea : null ,
        selectedOption: 'جدیدترین',

      items: [
        {
          type: "اجاره",
          link: "/detailsView",
          status1: "تایید",
          status2: "جدید",
          images: [
            "/real-estate/catalog/14.jpg",
            "/real-estate/catalog/15.jpg",
            "/real-estate/catalog/16.jpg",
          ],
          title: "اقامتگاه ویلایی | 200 متر مربع",
          location: "ایران، تهران ، خیابان آزادی",
          price: "1652000 تومان",
          bedrooms: 3,
          bathrooms: 2,
          cars: 1,
        },
        {
          type: "اجاره",
          link: "/detailsView",
          status1: "تایید",
          status2: "جدید",
          images: [
            "/real-estate/catalog/11.jpg",
            "/real-estate/catalog/12.jpg",
            "/real-estate/catalog/13.jpg",
          ],
          title: "اقامتگاه ویلایی | 200 متر مربع",
          location: "ایران، تهران ، خیابان آزادی",
          price: "4652000 تومان",
          bedrooms: 3,
          bathrooms: 2,
          cars: 1,
        },
        {
          type: "اجاره",
          link: "/detailsView",
          status1: "تایید",
          status2: "جدید",
          images: [
            "/real-estate/catalog/07.jpg",
            "/real-estate/catalog/08.jpg",
            "/real-estate/catalog/09.jpg",
          ],
          title: "اقامتگاه ویلایی | 200 متر مربع",
          location: "ایران، تهران ، خیابان آزادی",
          price: "2652000 تومان",
          bedrooms: 3,
          bathrooms: 2,
          cars: 1,
        },
      ],
      propertyTypes: [
        { id: "house", label: "خانه" },
        { id: "apartment", label: "آپارتمان" },
        { id: "room", label: "سوئیت" },
        { id: "office", label: "دفتر کار" },
        { id: "commercial", label: "تجاری" },
        { id: "land", label: "زمین" },
        { id: "daily", label: "ویلا" },
        { id: "new-building", label: "اقامتگاه روستایی" },
        { id: "parking-lot", label: "آپارتمان تازه ساخت" },
      ],
      facilitiesTypes : [
      { id: "balcony", label: "بالکن" },
        { id: "Warehouse", label: "انباری" },
        { id: "club", label: "باشگاه" },
        { id: "parking", label: "پارکینگ" },
        { id: "pool", label: "استخر" },
        { id: "Wi-Fi", label: "وای فای" },
        { id: "laundry", label: "لباسشویی" },
        { id: "washing", label: "ظرفشویی" },
        { id: "CCTV", label: "دوربین مدار بسته" },
      ],
      animals :[
        {id:"cat" , label :"گربه مجاز است"},
        {id:"dog" , label : "سگ مجاز است"}
      ],
       animalSelected :[],
      selectedPropertyTypes: [],
      selectedfacilitiesTypes :[],
      houseTypes : [
      { id: 1, label: "1" },
        { id: 2, label: "2" },
        { id: 3, label: "3" },
        { id: 4, label: "+4" },
      ],
      selectedHouseTypes: "",
    };
  }, 
  watch: {
    // Watch for changes in the selected option
    selectedOption: 'fetchDataSelect',
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
          console.log("rentHomeComponent", res.data);
          // this.items = res.data
        })
        .catch((error) => {
          console.error(error);
        });
    },
    applyFilters() {
      const filtersData = {
        city: this.selectedCity,
        region: this.selectedRegion,
        selectedPropertyTypes: this.selectedPropertyTypes,
        rangePrice : [this.sliderValue, this.sliderValue2],
        houseNumber : this.selectedHouseTypes,
        Meterage : {min :this.minArea , max : this.maxArea },
        facilitie : this.selectedfacilitiesTypes,
        animal : this.animalSelected
       
      };
      axios
        .post("https://jsonplaceholder.typicode.com/posts", filtersData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.error(error));
    }, 
     updateRangeValue() {
        if (parseInt(this.sliderValue) < this.halfMaxValue) {
          this.sliderValue = this.halfMaxValue;
        }
      },
      updateRangeValue2() {
        if (parseInt(this.sliderValue2) < this.halfMaxValue2) {
          this.sliderValue2 = this.halfMaxValue2;
        }
      },
      async fetchDataSelect() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        //items= response.data;
       console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    mounted() {
    this.fetchDataSelect();
  },
  },
};
</script>
<style scoped>
      .textDiv{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0 30px 30px;
  }
  .parent {
    width: 100%;
  }
  .div2 {
    
    position: relative;
    width: 225px;
    height: 5px;
    background-color: rgb(128, 127, 125);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    
  }
  .slider3{
    position: absolute;
    left: 0px;
  }
  
  .slider4{
    position: absolute;
    right: 0;
  }
  input[type="range"].inputRange {
   
    -webkit-appearance: none;
    -moz-apperance: none;
    appearance: none;
   
    
    width: 100%;
    height: 5px;
    background: linear-gradient(
      to right,
      var(--slider-value),
      #ccc var(--slider-value),
      #ccc
    );
    border-radius: 5px;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
  }
  
  input[type="range"].inputRange:hover {
    opacity: 1;
  }
</style>
