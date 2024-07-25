<template>
  <div>
   
    <section class="container mt-5 mb-lg-5 mb-4 pt-5 pb-lg-5">
      <!-- Breadcrumb-->
      <nav class="mb-3 pt-md-3" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">خانه</a></li>
          <li class="breadcrumb-item"><a href="/rent">ملک برای اجاره</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            اقامتگاه ویلایی
          </li>
        </ol>
      </nav>
      <div class="row gy-5 pt-lg-2">
        <div class="col-lg-7">
          <div class="d-flex flex-column">
            <sliderTwoComponent />

            <div class="order-lg-2 order-1">
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <h1 class="h2 mb-2">آپارتمان 85 متری</h1>
                <h1 class="h5 mb-2"><span class="btnSpan" @click="toggleModal">مشاهده ویدئو</span></h1>
              </div>
              <p class="mb-2 pb-1 fs-base">
                تهران، سعادت آباد، خیابان سرو غربی، مجتمع نواب
              </p>
              <ul class="d-flex mb-4 pb-lg-2 list-unstyled">
                <li class="me-3 pe-3 border-end">
                  <b class="me-1">4</b
                  ><i class="fi-bed mt-n1 lead align-middle text-muted"></i>
                </li>
                <li class="me-3 pe-3 border-end">
                  <b class="me-1">2</b
                  ><i class="fi-bath mt-n1 lead align-middle text-muted"></i>
                </li>
                <li class="me-3 pe-3 border-end">
                  <b class="me-1">2</b
                  ><i class="fi-car mt-n1 lead align-middle text-muted"></i>
                </li>
                <li><b>85 </b>مترمربع</li>
              </ul>
            </div>
          </div>
          <!-- Overview-->
          <h2 class="h5">توضیحات</h2>
          <p class="mb-4 pb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <!-- Rental agent-->
          <h2 class="h5">املاک امپراتور</h2>
          <div class="card card-horizontal">
            <div
              class="card-img-top bg-position-center-x"
              style="background-image: url(/real-estate/agents/01.jpg)"
            ></div>
            <blockquote class="blockquote card-body p-4">
              <p class="mb-4">
                لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
                استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر
                می گیرد. لورم ایپسوم استاندارد صنعت بوده است.
              </p>
              <footer class="d-flex justify-content-between">
                <div class="pe-3">
                  <h6 class="mb-0">بنفشه کریمی</h6>
                  <div class="text-muted fw-normal fs-sm mb-3">
                    نماینده گروه امپراتوری املاک
                  </div>
                  <a
                    class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2"
                    href="#"
                    ><i class="fi-facebook"></i></a
                  ><a
                    class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2"
                    href="#"
                    ><i class="fi-twitter"></i></a
                  ><a
                    class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2"
                    href="#"
                    ><i class="fi-instagram"></i
                  ></a>
                </div>
                <div>
                  <span class="star-rating"
                    ><i class="star-rating-icon fi-star-filled active"></i
                    ><i class="star-rating-icon fi-star-filled active"></i
                    ><i class="star-rating-icon fi-star-filled active"></i
                    ><i class="star-rating-icon fi-star-filled active"></i
                    ><i class="star-rating-icon fi-star-filled active"></i
                  ></span>
                  <div class="text-muted fs-sm mt-1">24 دیدگاه</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <!-- Sidebar with details-->
        <aside class="col-lg-5">
          <div class="ps-lg-5">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div>
                <span class="badge bg-success me-2 mb-2">تایید شده</span
                ><span class="badge bg-info me-2 mb-2">جدید</span>
              </div>
              <div class="text-nowrap">
                <button
                  class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                  type="button"
                  data-bs-toggle="tooltip"
                  title="نشان کردن"
                >
                  <i class="fi-heart"></i>
                </button>
                <div
                  class="dropdown d-inline-block relative"
                  data-bs-toggle="tooltip"
                  title="اشتراک گذاری"
                >
                <p style="font-size: 12px; position: absolute; top: -18px; left: -15px;" :style="{ display: showMessage ? 'block' : 'none' }">لینک کپی شد</p>
                  <button
                    class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    @click="copyURL"
                  >
                    <i class="fi-share"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end my-1">
                    <button class="dropdown-item" type="button">
                      <i class="fi-facebook fs-base opacity-75 me-2"></i>فیسبوک
                    </button>
                    <button class="dropdown-item" type="button">
                      <i class="fi-twitter fs-base opacity-75 me-2"></i>توییتر
                    </button>
                    <button class="dropdown-item" type="button">
                      <i class="fi-instagram fs-base opacity-75 me-2"></i
                      >اینستاگرام
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h3 class="h5 mb-2">اجاره ملک:</h3>
            <h2 class="h3 mb-4 pb-2">
              2,150,000 تومان<span
                class="d-inline-block ms-1 fs-base fw-normal text-body"
                >/ماهیانه</span
              >
            </h2>
            <!-- Property details-->
            <div class="card border-0 bg-secondary mb-4">
              <div class="card-body">
                <h5 class="mb-0 pb-3">مشخصات</h5>
                <ul class="list-unstyled mt-n2 mb-0">
                  <li class="mt-2 mb-0"><b>نوع: </b>آپارتمان</li>
                  <li class="mt-2 mb-0"><b>متراژ (مترمربع): </b>85 مترمربع</li>
                  <li class="mt-2 mb-0"><b>سال ساخت: </b>1380</li>
                  <li class="mt-2 mb-0"><b>تعداد اتاق: </b>4</li>
                  <li class="mt-2 mb-0"><b>تعداد سرویس بهداشتی: </b>2</li>
                  <li class="mt-2 mb-0"><b>پارکینگ: </b>دارد</li>
                  <li class="mt-2 mb-0"><b>حیوانات خانگی مجاز: </b>فقط گربه</li>
                </ul>
              </div>
            </div>
            <a class="btn btn-lg btn-primary w-100 mb-3" href="/commentsUser"
              > نظرات کاربران</a
            >
          
            <!-- Amenities-->
            <div class="card border-0 bg-secondary mb-4">
              <div class="card-body">
                <h5>امکانات رفاهی</h5>
                <ul
                  class="list-unstyled row row-cols-md-2 row-cols-1 gy-2 mb-0 text-nowrap"
                >
                  <li class="col">
                    <i class="fi-wifi mt-n1 me-2 fs-lg align-middle"></i>وای فای
                  </li>
                  <li class="col">
                    <i class="fi-thermometer mt-n1 me-2 fs-lg align-middle"></i
                    >سیستم گرمایشی
                  </li>
                  <li class="col">
                    <i class="fi-dish mt-n1 me-2 fs-lg align-middle"></i>استخر
                  </li>
                  <li class="col">
                    <i class="fi-parking mt-n1 me-2 fs-lg align-middle"></i
                    >پارکینگ
                  </li>
                  <li class="col">
                    <i class="fi-snowflake mt-n1 me-2 fs-lg align-middle"></i
                    >تهویه هوا
                  </li>
                  <li class="col">
                    <i class="fi-iron mt-n1 me-2 fs-lg align-middle"></i>گاز
                    رومیزی
                  </li>
                  <li class="col">
                    <i class="fi-tv mt-n1 me-2 fs-lg align-middle"></i>تلویزیون
                  </li>
                  <li class="col">
                    <i class="fi-laundry mt-n1 me-2 fs-lg align-middle"></i
                    >ماشین لباسشویی
                  </li>
                  <li class="col">
                    <i class="fi-cctv mt-n1 me-2 fs-lg align-middle"></i>دوربین
                    مداربسته
                  </li>
                  <li class="col">
                    <i class="fi-no-smoke mt-n1 me-2 fs-lg align-middle"></i
                    >سیگار ممنوع
                  </li>
                </ul>
                <div class="collapse" id="seeMoreAmenities">
                  <ul
                    class="list-unstyled row row-cols-md-2 row-cols-1 gy-2 pt-2 mb-0 text-nowrap"
                  >
                    <li class="col">
                      <i class="fi-double-bed mt-n1 me-2 fs-lg align-middle"></i
                      >2 خواب
                    </li>
                    <li class="col">
                      <i class="fi-bed mt-n1 me-2 fs-lg align-middle"></i>1 خواب
                    </li>
                  </ul>
                </div>
                <a
                  class="collapse-label collapsed d-inline-block mt-3"
                  href="#seeMoreAmenities"
                  data-bs-toggle="collapse"
                  data-bs-label-collapsed="مشاهده بیشتر"
                  data-bs-label-expanded="بستن"
                  role="button"
                  aria-expanded="false"
                  aria-controls="seeMoreAmenities"
                ></a>
              </div>
            </div>
            <!-- Not included in rent-->
            <div class="card border-0 bg-secondary mb-4">
              <div class="card-body">
                <h5>جهت بازدید با ما در تماس باشید</h5>
                <ul
                  class="list-unstyled row row-cols-md-2 row-cols-1 gy-2 mb-0 text-nowrap"
                >
                  <li class="col">آقای رضا سعادت</li>
                  <li class="col">09375001255</li>
                  <li class="col">تهران ، خیابان جمهوری ، جمهوری هشت پلاک 3</li>
                </ul>
              </div>
            </div>
            <!-- Post meta-->
            <ul class="d-flex mb-4 list-unstyled fs-sm">
              <li class="me-3 pe-3 border-end">
                تاریخ انتشار: <b> 26 بهمن</b>
              </li>
              <li class="me-3 pe-3 border-end">شماره آگهی: <b>681013232</b></li>
              <li class="me-3 pe-3">بازدید: <b>48 نفر</b></li>
            </ul>
          </div>
        </aside>
      </div>

      <!-- component img start-->

      <!-- component img end -->
    </section>
    <section class="container mb-5 pb-2 pb-lg-4">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="h3 mb-0">بازدیدهای اخیر</h2>
        <a
          class="btn btn-link fw-normal p-0"
          href="real-estate-catalog-rent.html"
          >مشاهده همه<i class="fi-arrow-long-left ms-2"></i
        ></a>
      </div>
      <!-- start slider -->
      <sliderCompnent />
      <!-- end slider -->
    </section>
    <div class="modal modal-lg" :class="{ 'show': showModal }">
      <div class="modal-dialog modal-dialog-centered" style="width: 800px; height: 200px;">
        <div class="modal-content">
          <div class="modal-header">
         
            <button type="button" class="btn-close" @click="toggleModal"></button>
          </div>
          <div class="modal-body">
            <video class="videoModal" src="/video/x2.mp4" controls></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sliderTwoComponent from "@/components/sliderTwoComponent.vue";
import sliderCompnent from "@/components/sliderCompnent.vue";
import axios from "axios";

export default {
  data() {
    return {
      showModal: false,
      showMessage: false
    };
  },
  components: {
    sliderTwoComponent,
    sliderCompnent,
  },
  methods: {
    fecthDetails() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/2")
        .then((res) => {
          console.log("fecthDetails", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    copyURL() {
      const currentURL = window.location.href;
      
      navigator.clipboard.writeText(currentURL)
        .then(() => {
          console.log('URL copied:', currentURL);
          this.showMessage = true;
          setTimeout(() => {
            this.showMessage = false;
          }, 5000); // 5 ثانیه
        })
        .catch((error) => {
          console.error('Error copying URL:', error);
        });
    }
  },
  mounted() {
    // Fetch initial data when the component is mounted
    this.fecthDetails();
  },
};
</script>
<style scoped>
/* ایجاد پوشش پس زمینه تاریک برای مدال */
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

/* پنجره مدال */
.modal {
  display: none; 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}


.show {
  display: block;
}


.modal-content {
  background-color: #fefefe;
 
  
  border: 1px solid #888;

}

/* بستن مدال */
.btn-close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.btn-close:hover,
.btn-close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.btnSpan {
  color: #fd5631;
  cursor: pointer;
}
video.videoModal{
  width: -webkit-fill-available;
}
</style>