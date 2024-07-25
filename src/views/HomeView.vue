<script>
import sliderCompnent from "@/components/sliderCompnent.vue";
import tabHomeComponent from "@/components/tabHomeComponent.vue";
import sliderCityComponent from "@/components/sliderCityComponent.vue";
import sliderAmlakComponent from "@/components/sliderAmlakComponent.vue";

export default {
  components: {
    sliderCompnent,
    tabHomeComponent,
    sliderCityComponent,
    sliderAmlakComponent,
  },
  data() {
    return {
      priceValue: 0,
      displayValue: "0 میلیارد",
      priceValue2: 0,
      displayValue2: "0 میلیون",
      items: [
      {
        src1: "/real-estate/brands/01_color.svg",
        src2: "/real-estate/brands/01_gray.svg"
      },
      {
        src1: "/real-estate/brands/02_color.svg",
        src2: "/real-estate/brands/02_gray.svg"
      },
      {
        src1: "/real-estate/brands/03_color.svg",
        src2: "/real-estate/brands/03_gray.svg"
      },
      {
        src1: "/real-estate/brands/04_color.svg",
        src2: "/real-estate/brands/04_gray.svg"
      },
      {
        src1: "/real-estate/brands/05_color.svg",
        src2: "/real-estate/brands/05_gray.svg"
      },
      {
        src1: "/real-estate/brands/06_color.svg",
        src2: "/real-estate/brands/06_gray.svg"
      }
    ]
    };
  },
  methods: {
    updateDisplayValue() {
      this.displayValue = `${this.priceValue} میلیارد`;
    },
    updateDisplayValue2() {
      this.displayValue2 = `${this.priceValue2} میلیون`;
    },
  },
};
</script>

<template>
  <div>
    <section class="container pt-5 my-5 pb-lg-4">
      <div class="row pt-0 pt-md-2 pt-lg-0">
        <div class="col-xl-7 col-lg-6 col-md-5 order-md-2 mb-4 mb-lg-3">
          <img src="/real-estate/hero-image.jpg" alt="Hero image" />
        </div>
        <div
          class="col-xl-5 col-lg-6 col-md-7 order-md-1 pt-xl-5 pe-lg-0 mb-3 text-md-start text-center"
        >
          <h1 class="display-4 mt-lg-5 mb-md-4 mb-3 pt-md-4 pb-lg-2">
            نرخ ارزان ترین خانه <br />
            در مکان دلخواه شما
          </h1>
          <p class="position-relative lead ms-lg-n5 fs-6">
            لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم استاندارد
            صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم
            ایپسوم استاندارد صنعت بوده است.
          </p>
        </div>
        <!-- Search property form group-->
        <div class="col-xl-8 col-lg-10 order-3 mt-lg-n5">
          <form class="form-group d-block panel-search">
            <div class="row g-0 ms-sm-n2">
              <div class="col-md-8 d-sm-flex align-items-center">
                <div
                  class="dropdown w-sm-50 border-end-sm"
                  data-bs-toggle="select"
                >
                  <button
                    class="btn btn-link dropdown-toggle ps-2 ps-sm-3"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i class="fi-home me-2"></i
                    ><span class="dropdown-toggle-label">اجاره</span>
                  </button>
                  <input type="hidden" />
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#"
                        ><span class="dropdown-item-label">اجاره</span></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><span class="dropdown-item-label">فروش</span></a
                      >
                    </li>
                  </ul>
                </div>
                <hr class="d-sm-none my-2" />
                <div
                  class="dropdown w-sm-50 border-end-sm"
                  data-bs-toggle="select"
                >
                  <button
                    class="btn btn-link dropdown-toggle ps-2 ps-sm-3"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i class="fi-map-pin me-2"></i
                    ><span class="dropdown-toggle-label">موقعیت</span>
                  </button>
                  <input type="hidden" />
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#"
                        ><span class="dropdown-item-label">نیویورک</span></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><span class="dropdown-item-label">شیکاگو</span></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><span class="dropdown-item-label">لوس آنجلس</span></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><span class="dropdown-item-label"
                          >سن فرانسیسکو</span
                        ></a
                      >
                    </li>
                  </ul>
                </div>
                <hr class="d-sm-none my-2" />
                <div
                  class="dropdown w-sm-50 border-end-md"
                  data-bs-toggle="select"
                >
                  <button
                    class="btn btn-link dropdown-toggle ps-2 ps-sm-3"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i class="fi-list me-2"></i
                    ><span class="dropdown-toggle-label">نوع ملک</span>
                  </button>
                  <input type="hidden" />
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#"
                        ><span class="dropdown-item-label">خانه</span></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><span class="dropdown-item-label">آپارتمان</span></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><span class="dropdown-item-label"
                          >تجاری و اداری</span
                        ></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><span class="dropdown-item-label">سوئیت</span></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><span class="dropdown-item-label">زمین</span></a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <hr class="d-md-none mt-2" />
              <div class="col-md-4 d-sm-flex align-items-center pt-4 pt-md-0">
               <div>
                <div
                  class="d-flex align-items-center w-100 pt-2 pb-4 py-sm-0 ps-2 ps-sm-3"
                >
                  <i class="fi-cash fs-lg text-muted me-2"></i
                  ><span class="text-muted me-2">قیمت</span>
                  <div>
                    <div class="px-2">
                      <small class="form-text text-muted">{{
                        displayValue
                      }}</small>
                      <input
                        type="range"
                        class="form-range"
                        id="priceRange"
                        min="0"
                        max="1000"
                        v-model="priceValue"
                        @input="updateDisplayValue"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center w-100 pt-2 pb-4 py-sm-0 ps-2 ps-sm-3"
                >
                  <i class="fi-cash fs-lg text-muted me-2"></i
                  ><span class="text-muted me-2">قیمت</span>
                  <div>
                    <div class="px-2">
                      <small class="form-text text-muted">{{
                        displayValue2
                      }}</small>
                      <input
                        type="range"
                        class="form-range"
                        id="priceRange"
                        min="0"
                        max="999"
                        v-model="priceValue2"
                        @input="updateDisplayValue2"
                      />
                    </div>
                  </div>
                </div>
               </div>
                <button
                  class="btn btn-icon btn-primary px-3 w-100 w-sm-auto flex-shrink-0"
                  type="button"
                >
                  <i class="fi-search"></i
                  ><span class="d-sm-none d-inline-block ms-2"> جستجو</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section class="container mb-5">
      <div class="row row-cols-lg-6 row-cols-sm-3 row-cols-2 g-3 g-xl-4">
        <div class="col">
          <a
            class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center"
            href="/rent"
          >
            <div
              class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"
            >
              <i class="fi-real-estate-house"></i>
            </div>
            <h3 class="icon-box-title fs-base mb-0">خانه</h3></a
          >
        </div>
        <div class="col">
          <a
            class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center"
            href="/sell"
          >
            <div
              class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"
            >
              <i class="fi-apartment"></i>
            </div>
            <h3 class="icon-box-title fs-base mb-0">آپارتمان</h3></a
          >
        </div>
        <div class="col">
          <a
            class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center"
            href="/sell"
          >
            <div
              class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"
            >
              <i class="fi-shop"></i>
            </div>
            <h3 class="icon-box-title fs-base mb-0">تجاری و اداری</h3></a
          >
        </div>
        <div class="col">
          <a
            class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center"
            href="/sell"
          >
            <div
              class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"
            >
              <i class="fi-rent"></i>
            </div>
            <h3 class="icon-box-title fs-base mb-0">سوئیت</h3></a
          >
        </div>
        <div class="col">
          <a
            class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center"
            href="/sell"
          >
            <div
              class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"
            >
              <i class="fi-house-chosen"></i>
            </div>
            <h3 class="icon-box-title fs-base mb-0">زمین</h3></a
          >
        </div>
        <div class="col">
          <div class="dropdown h-100">
            <a
              class="icon-box card card-body h-100 border-0 shadow-sm card-hover text-center"
              href="#"
              data-bs-toggle="dropdown"
            >
              <div
                class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"
              >
                <i class="fi-dots-horisontal"></i>
              </div>
              <h3 class="icon-box-title fs-base mb-0">سایر</h3></a
            >
            <div class="dropdown-menu dropdown-menu-end my-1">
              <a class="dropdown-item" href="/sell"
                ><i class="fi-single-bed fs-base opacity-60 me-2"></i>سوئیت</a
              ><a class="dropdown-item" href="/rent"
                ><i class="fi-computer fs-base opacity-60 me-2"></i>دفتر کار</a
              ><a class="dropdown-item" href="/sell"
                ><i class="fi-real-estate-buy fs-base opacity-60 me-2"></i
                >زمین</a
              ><a class="dropdown-item" href="/rent"
                ><i class="fi-parking fs-base opacity-60 me-2"></i>خانه حیاط
                دار</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mb-5 mt-n3 mt-lg-0">
      <div
        class="tns-carousel-wrapper tns-nav-outside tns-nav-outside-flush mx-n2"
        dir="ltr"
      >
        <div class="d-flex flex-wrap">
          <div class="col">
            <div
              class="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center"
            >
              <img
                class="d-block mx-auto my-3"
                src="/real-estate/illustrations/buy.svg"
                width="256"
                alt="Illustration"
              />

              <div class="card-body">
                <h2 class="h5 card-title">خرید یک ملک</h2>
                <p class="card-text fs-sm">
                  لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
                  استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر
                  می گیرد.
                </p>
              </div>
              <div class="card-footer pt-0 border-0">
                <a class="btn btn-outline-primary stretched-link" href="/sell"
                  >جستجوی خانه</a
                >
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center"
            >
              <img
                class="d-block mx-auto my-3"
                src="/real-estate/illustrations/sell.svg"
                width="256"
                alt="Illustration"
              />
              <div class="card-body">
                <h2 class="h5 card-title">فروش یک ملک</h2>
                <p class="card-text fs-sm">
                  لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
                  استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر
                  می گیرد.
                </p>
              </div>
              <div class="card-footer pt-0 border-0">
                <a class="btn btn-outline-primary stretched-link" href="/rent"
                  >مکان کسب و کار</a
                >
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center"
            >
              <img
                class="d-block mx-auto my-3"
                src="/real-estate/illustrations/rent.svg"
                width="256"
                alt="Illustration"
              />
              <div class="card-body">
                <h2 class="h5 card-title">اجاره یک ملک</h2>
                <p class="card-text fs-sm">
                  لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
                  استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر
                  می گیرد.
                </p>
              </div>
              <div class="card-footer pt-0 border-0">
                <a class="btn btn-outline-primary stretched-link" href="/rent"
                  >یافتن اجاره خانه</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="mt-n1 mb-5 d-md-none" />
    <section class="container mb-5 pb-md-4">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="h3 mb-0">خانه های ویژه ما</h2>
        <a
          class="btn btn-link fw-normal p-0"
          href="real-estate-catalog-rent.html"
          >مشاهده همه <i class="fi-arrow-long-left ms-2"></i
        ></a>
      </div>
      <sliderCompnent />
    </section>
    <!-- start tab -->
    <tabHomeComponent />
    <!-- end tab -->
    <section class="container mb-5 pb-2 pb-lg-4">
      <div class="row align-items-center">
        <div class="col-md-5">
          <img
            class="d-block mx-md-0 mx-auto mb-md-0 mb-4 rotate-img"
            src="/real-estate/illustrations/calculator.svg"
            width="416"
            alt="Illustration"
          />
        </div>
        <div class="col-xxl-6 col-md-7 text-md-start text-center">
          <h2 class="">محاسبه آنلاین و سریع هزینه ملک دلخواه شما</h2>
          <p class="pb-3 fs-base">
            ما املاک خوب زیادی داریم و یکی از آنها این املاک است و برای آن
            کاتالوگ شما را ترتیب داده ایم. لطفا بر روی زیر کلیک کنید! <br />
            فضای داخلی از حجم ، فضا ، هوا ، نسبت ، با نور و روحیه خاص. این فضای
            داخلی برای همیشه ماندگار است. این واقعا موثر است و ما می توانیم به
            راحتی این کار را برای مشتریان خود مدیریت کنیم.
          </p>
          <a
            class="btn btn-lg btn-primary"
            href="#cost-calculator"
            data-bs-toggle="modal"
            ><i class="fi-calculator me-2"></i>شروع کن</a
          >
        </div>
      </div>
    </section>
    <!-- slider city -->
    <section class="container">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="h3 mb-0">شهرهای پیشنهادی ما</h2>
        <a
          class="btn btn-link fw-normal ms-md-3 pb-0 px-0"
          href="real-estate-catalog-rent.html"
          >مشاهده همه <i class="fi-arrow-long-left ms-2"></i
        ></a>
      </div>
      <sliderCityComponent />
    </section>
    <!-- end slider city -->
    <section class="container mb-5 pb-2 pb-lg-4">
      <h2 class="h3 mb-4 text-right text-md-start">مشاوران املاک</h2>

      <div class="d-flex flex-row justify-content-between w-100">
        <div  v-for="(item, index) in items" :key="index">
          <a class="swap-image" href="#"
            ><img
              class="swap-to"
              :src="item.src1"
              alt="Logo"
              width="196" />
              <img
              class="swap-from"
              :src="item.src2"
              alt="Logo"
              width="196"
          /></a>
        </div>
     
      </div>
    </section>

    <section class="container mb-5 pb-2 pb-lg-4">
      <h2 class="h3 mb-4 pb-3 text-right text-md-start">
        برترین مشاوران املاک
      </h2>
      <sliderAmlakComponent />
    </section>
  </div>
</template>
<style></style>
