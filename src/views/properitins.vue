<template>
  <div>
    <!-- Message modal-->
    <div class="modal fade" id="message-modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="fs-base modal-title">ارسال پیام به فلوید مایلز</h3>
            <button
              class="btn-close me-0"
              type="button"
              data-bs-dismiss="modal"
            ></button>
          </div>
        </div>
      </div>
    </div>
    <!-- Page container-->
    <div class="container mt-5 mb-md-4 py-5">
      <!-- Breadcrumb-->
      <nav class="mb-4 pt-md-3" aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="real-estate-home-v1.html">خانه</a>
          </li>
          <li class="breadcrumb-item"><a href="#">نمایندگان</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            فلوید مایلز
          </li>
        </ol>
      </nav>
      <div class="row">
        <!-- Sidebar (Agent's info)-->
        <aside class="col-lg-3 col-md-4 mb-5">
          <div class="pe-lg-3">
            <img
              class="d-block rounded-circle mx-auto mx-md-0 mb-3"
              src="/avatars/31.jpg"
              width="120"
              alt="Floyd Miles"
            />
            <h2 class="h4 text-center text-md-start mb-1 font-vair">
              فلوید مایلز
            </h2>
            <p class="text-center text-md-start mb-2 pb-1">
              نماینده گروه امپراتوری املاک
            </p>
            <div
              class="d-flex justify-content-center justify-content-md-start border-bottom pb-4 mb-4"
            >
              <span class="star-rating"
                ><i class="star-rating-icon fi-star-filled active"></i
                ><i class="star-rating-icon fi-star-filled active"></i
                ><i class="star-rating-icon fi-star-filled active"></i
                ><i class="star-rating-icon fi-star-filled active"></i
                ><i class="star-rating-icon fi-star-filled active"></i></span
              ><a class="ms-2" href="/comments">45 نظر</a>
            </div>
            <div class="border-bottom pb-4 mb-4">
              <p class="fs-sm mb-0">
                سلام! من بهترن اقامتگاه را برای شماانتخاب میکنم ، لورم ایپسوم
                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                سطرآنچنان که لازم است.
              </p>
              <div class="collapse" id="seeMore">
                <p class="fs-sm mb-0">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
              <div class="text-right text-md-start">
                <a
                  class="collapse-label collapsed fs-sm"
                  href="#seeMore"
                  data-bs-toggle="collapse"
                  data-bs-label-collapsed="مشاهده بیشتر"
                  data-bs-label-expanded="بستن"
                  role="button"
                  aria-expanded="false"
                  aria-controls="seeMore"
                ></a>
              </div>
            </div>
            <ul class="d-table list-unstyled mx-auto mx-md-0 mb-3 mb-md-4">
              <li class="mb-2">
                <a class="nav-link fw-normal p-0" href="tel:3025550107"
                  ><i class="fi-phone text-primary mt-n1 me-2 align-middle"></i
                  >(302) 555-0107</a
                >
              </li>
              <li>
                <a
                  class="nav-link fw-normal p-0"
                  href="mailto:floyd_miles@email.com"
                  ><i class="fi-mail text-primary mt-n1 me-2 align-middle"></i
                  >floyd_miles@email.com</a
                >
              </li>
            </ul>
            <div class="text-center text-md-start">
              <a
                class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2"
                href="#"
                ><i class="fi-facebook"></i></a
              ><a
                class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm"
                href="#"
                ><i class="fi-linkedin"></i
              ></a>
            </div>
          </div>
        </aside>
        <!-- Content-->
        <div class="col-lg-9 col-md-8">
          <h1 class="h2 text-right text-sm-start mb-4 font-vazir">
            ملک های پیشنهادی
          </h1>
          <!-- Nav tabs + Sorting-->
          <div
            class="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-4"
          >
            <ul class="nav nav-tabs flex-nowrap mb-sm-0" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link fs-sm active"
                  href="#for-rent"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="for-rent"
                  aria-selected="true"
                  >اجاره</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link fs-sm"
                  href="#for-sale"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="for-sale"
                  aria-selected="false"
                  >فروش</a
                >
              </li>
            </ul>
            <div class="d-flex align-items-center ms-sm-4">
              <label class="fs-sm me-2 pe-1 text-nowrap" for="sortby"
                ><i class="fi-arrows-sort text-muted mt-n1 me-2"></i>مرتب سازی
                براساس:</label
              >
              <select v-model="selectedOption" class="form-select form-select-sm" id="sortby"  @change="fetchDataSelect">
                <option>جدیدترین</option>
                <option>پربازدیدترین</option>
                <option>قیمت بالا</option>
                <option>قیمت پایین</option>
                <option>امتیاز بالا</option>
                <option>امتیاز میانگین</option>
              </select>
            </div>
          </div>
          <div class="tab-content">
            <!-- For rent tab-->
            <div
              class="tab-pane fade show active"
              id="for-rent"
              role="tabpanel"
            >
              <div class="row g-4 g-md-3 g-lg-4 pt-2">
                <div class="row g-4 py-4">
                  <div
                    v-for="(item, index) in itemsRent"
                    :key="index"
                    class="col-sm-6 col-xl-4"
                  >
                    <div class="card shadow-sm card-hover border-0 h-100">
                      <!-- تصاویر و سایر محتواها -->
                      <div
                        class="tns-carousel-wrapper card-img-top card-img-hover"
                      >
                        <a class="img-overlay" :href="item.link"></a>
                        <div class="position-absolute start-0 top-0 pt-3 ps-3">
                          
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
                        <div
                          :id="'carouselExample' + index"
                          class="carousel slide"
                        >
                          <div class="carousel-inner">
                            <div
                              v-for="(image, imageIndex) in item.images"
                              :key="imageIndex"
                              class="carousel-item"
                              :class="{ active: imageIndex === 0 }"
                            >
                              <img
                                :src="image"
                                class="d-block w-100"
                                alt="..."
                              />
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
                        <h4
                          class="mb-1 fs-xs fw-normal text-uppercase text-primary"
                        >
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
              </div>
            </div>
            <!-- For sale tab-->

            <div
              class="tab-pane fade show active"
              id="for-rent"
              role="tabpanel"
            >
              <div class="row g-4 g-md-3 g-lg-4 pt-2">
                <div class="row g-4 py-4">
                  <div
                    v-for="(item, index) in itemsSell"
                    :key="index"
                    class="col-sm-6 col-xl-4"
                  >
                    <div class="card shadow-sm card-hover border-0 h-100">
                      <!-- تصاویر و سایر محتواها -->
                      <div
                        class="tns-carousel-wrapper card-img-top card-img-hover"
                      >
                        <a class="img-overlay" :href="item.link"></a>
                        <div class="position-absolute start-0 top-0 pt-3 ps-3">
                          
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
                        <div
                          :id="'carouselExample1' + index"
                          class="carousel slide"
                        >
                          <div class="carousel-inner">
                            <div
                              v-for="(image, imageIndex) in item.images"
                              :key="imageIndex"
                              class="carousel-item"
                              :class="{ active: imageIndex === 0 }"
                            >
                              <img
                                :src="image"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                          <button
                            class="carousel-control-prev"
                            :data-bs-target="'#carouselExample1' + index"
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
                        <h4
                          class="mb-1 fs-xs fw-normal text-uppercase text-primary"
                        >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedOption: 'جدیدترین',
      itemsRent: [
        {
          type: "اجاره",
          link: "/detailsView",
          
          status2: "جدید",
          images: [
            "/real-estate/catalog/16.jpg",
            "/real-estate/catalog/15.jpg",
            "/real-estate/catalog/14.jpg",
          ],
          title: "اقامتگاه ویلایی | 200 متر مربع",
          location: "ایران، تهران ، خیابان آزادی",
          price: 1652000,
          bedrooms: 3,
          bathrooms: 2,
          cars: 1,
        },
        {
          type: "اجاره",
          link: "/detailsView",
          
          status2: "جدید",
          images: [
            "/real-estate/catalog/13.jpg",
            "/real-estate/catalog/12.jpg",
            "/real-estate/catalog/11.jpg",
          ],
          title: "اقامتگاه ویلایی | 200 متر مربع",
          location: "ایران، تهران ، خیابان آزادی",
          price: 4652000,
          bedrooms: 3,
          bathrooms: 2,
          cars: 1,
        },
        {
          type: "اجاره",
          link: "/detailsView",
         
          status2: "جدید",
          images: [
            "/real-estate/catalog/10.jpg",
            "/real-estate/catalog/08.jpg",
            "/real-estate/catalog/09.jpg",
          ],
          title: "اقامتگاه ویلایی | 200 متر مربع",
          location: "ایران، تهران ، خیابان آزادی",
          price: 2652000,
          bedrooms: 3,
          bathrooms: 2,
          cars: 1,
        },
        {
          type: "اجاره",
          link: "/detailsView",
         
          status2: "جدید",
          images: [
            "/real-estate/catalog/19.jpg",
            "/real-estate/catalog/15.jpg",
            "/real-estate/catalog/14.jpg",
          ],
          title: "اقامتگاه ویلایی | 200 متر مربع",
          location: "ایران، تهران ، خیابان آزادی",
          price: 1652000,
          bedrooms: 3,
          bathrooms: 2,
          cars: 1,
        },
        {
          type: "اجاره",
          link: "/detailsView",
         
          status2: "جدید",
          images: [
            "/real-estate/catalog/17.jpg",
            "/real-estate/catalog/12.jpg",
            "/real-estate/catalog/11.jpg",
          ],
          title: "اقامتگاه ویلایی | 200 متر مربع",
          location: "ایران، تهران ، خیابان آزادی",
          price: 4652000,
          bedrooms: 3,
          bathrooms: 2,
          cars: 1,
        },
        {
          type: "اجاره",
          link: "/detailsView",
         
          status2: "جدید",
          images: [
            "/real-estate/catalog/18.jpg",
            "/real-estate/catalog/08.jpg",
            "/real-estate/catalog/09.jpg",
          ],
          title: "اقامتگاه ویلایی | 200 متر مربع",
          location: "ایران، تهران ، خیابان آزادی",
          price: 2652000,
          bedrooms: 3,
          bathrooms: 2,
          cars: 1,
        },
      ],
      itemsSell: [
        {
          type: "اجاره",
          link: "/detailsView",
         
          status2: "جدید",
          images: [
            "/real-estate/catalog/10.jpg",
            "/real-estate/catalog/08.jpg",
            "/real-estate/catalog/09.jpg",
          ],
          title: "اقامتگاه ویلایی | 200 متر مربع",
          location: "ایران، تهران ، خیابان آزادی",
          price: 2652000,
          bedrooms: 3,
          bathrooms: 2,
          cars: 1,
        },

        {
          type: "اجاره",
          link: "/detailsView",
          
          status2: "جدید",
          images: [
            "/real-estate/catalog/18.jpg",
            "/real-estate/catalog/08.jpg",
            "/real-estate/catalog/09.jpg",
          ],
          title: "اقامتگاه ویلایی | 200 متر مربع",
          location: "ایران، تهران ، خیابان آزادی",
          price: 2652000,
          bedrooms: 3,
          bathrooms: 2,
          cars: 1,
        },

        {
          type: "اجاره",
          link: "/detailsView",
          
          status2: "جدید",
          images: [
            "/real-estate/catalog/13.jpg",
            "/real-estate/catalog/12.jpg",
            "/real-estate/catalog/11.jpg",
          ],
          title: "اقامتگاه ویلایی | 200 متر مربع",
          location: "ایران، تهران ، خیابان آزادی",
          price: 4652000,
          bedrooms: 3,
          bathrooms: 2,
          cars: 1,
        },
      ],
    };
  },

  methods : {
    async fetchDataSelect() {
      try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts" , this.selectedOption);
        //items= response.data;
       console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    fetchData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/2")
        .then((res) => {
          console.log("sellHomeComponent", res.data);
          // this.items = res.data
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
 
  this.fetchData();
},
};


</script>
<style scoped>
.textDiv {
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
.slider3 {
  position: absolute;
  left: 0px;
}

.slider4 {
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
