<template>
  <div>
    <div class="container pt-5 pb-lg-4 mt-5 mb-sm-2">
      <!-- Breadcrumb-->
      <nav class="mb-4 pt-md-3" aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">خانه</a></li>
          <li class="breadcrumb-item"><a href="/profile">حساب کاربری</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            مورد علاقه ها
          </li>
        </ol>
      </nav>
      <!-- Page content-->
      <div class="row">
        <!-- Sidebar-->
        <aside class="col-lg-4 col-md-5 pe-xl-4 mb-5">
          <!-- Account nav-->
          <div class="card card-body border-0 shadow-sm pb-1 me-lg-1">
            <div
              class="d-flex d-md-block d-lg-flex align-items-start pt-lg-2 mb-4"
            >
              <img
                class="rounded-circle"
                src="/avatars/03.jpg"
                width="48"
                alt=""
              />
              <div class="pt-md-2 pt-lg-0 ps-3 ps-md-0 ps-lg-3">
                <h2 class="fs-lg mb-0">آنت بلک</h2>
                <span class="star-rating"
                  ><i class="star-rating-icon fi-star-filled active"></i
                  ><i class="star-rating-icon fi-star-filled active"></i
                  ><i class="star-rating-icon fi-star-filled active"></i
                  ><i class="star-rating-icon fi-star-filled active"></i
                  ><i class="star-rating-icon fi-star-filled active"></i
                ></span>
                <ul class="list-unstyled fs-sm mt-3 mb-0">
                  <li>
                    <a class="nav-link fw-normal p-0" href="tel:3025550107"
                      ><i class="fi-phone opacity-60 me-2"></i>(302) 555-0107</a
                    >
                  </li>
                  <li>
                    <a
                      class="nav-link fw-normal p-0"
                      href="mailto:annette_black@email.com"
                      ><i class="fi-mail opacity-60 me-2"></i
                      >annette_black@email.com</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <a
              class="btn btn-primary btn-lg w-100 mb-3"
              href="real-estate-add-property.html"
              ><i class="fi-plus me-2"></i> ثبت ملک</a
            ><a
              class="btn btn-outline-secondary d-block d-md-none w-100 mb-3"
              href="#account-nav"
              data-bs-toggle="collapse"
              ><i class="fi-align-justify me-2"></i>منو</a
            >
            <div class="collapse d-md-block mt-3" id="account-nav">
              <div class="card-nav">
                <a class="card-nav-link" href="/profile"
                  ><i class="fi-user opacity-60 me-2"></i>اطلاعات حساب کاربری</a
                >
                <a class="card-nav-link" href="/userPassword"
                  ><i class="fi-lock opacity-60 me-2"></i>گذرواژه و امنیتی</a
                >
                <a class="card-nav-link" href="/myProperty"
                  ><i class="fi-home opacity-60 me-2"></i>املاک من</a
                >
                <a class="card-nav-link" href="/liveHome"
                  ><i class="fi-heart opacity-60 me-2"></i>موردعلاقه ها</a
                >
                <a class="card-nav-link active" href="/comments"
                  ><i class="fi-star opacity-60 me-2"></i>نظرات</a
                >
                <a class="card-nav-link" href="/notification"
                  ><i class="fi-bell opacity-60 me-2"></i>اطلاعیه ها</a
                >
                <a class="card-nav-link" href="/support"
                  ><i class="fi-help opacity-60 me-2"></i>پشتیبانی</a
                >
                <a class="card-nav-link" href="#"
                  ><i class="fi-logout opacity-60 me-2"></i>خروج</a
                >
              </div>
            </div>
          </div>
        </aside>
        <!-- Content-->
        <div class="col-lg-8 col-md-7 mb-5">
          <h1 class="h2">لیست نظرات</h1>
          <p class="pt-1 mb-4">
            نظراتی که دریافت کرده اید هم در اینجا و هم در نمایه عمومی شما قابل
            مشاهده است.
          </p>
          <!-- Nav tabs-->
          <ul
            class="nav nav-tabs flex-column flex-sm-row align-items-stretch align-items-sm-start border-bottom mb-4"
            role="tablist"
          >
            <li class="nav-item me-sm-3 mb-3">
              <a
                class="nav-link text-center active"
                href="#reviews-about-you"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="reviews-about-you"
                aria-selected="true"
                >نظرات ثبت شده دیگران</a
              >
            </li>
            <li class="nav-item mb-3">
              <a
                class="nav-link text-center"
                href="#reviews-by-you"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="reviews-by-you"
                aria-selected="false"
                >نظرات ثبت شده شما</a
              >
            </li>
          </ul>
          <!-- Tabs content-->
          <div class="tab-content pt-2">
            <!-- Reviews about you tab-->
            <div
              class="tab-pane fade show active"
              id="reviews-about-you"
              role="tabpanel"
            >
              <div
                class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between pb-4 mb-2 mb-md-3"
              >
                <h3 class="h5 mb-sm-0 font-vazir">
                  <i
                    class="fi-star-filled mt-n1 me-2 lead align-middle text-warning"
                  ></i
                  >4,9 ( {{ comments.length }} نظر ثبت شده)
                </h3>
                <div class="d-flex align-items-center ms-sm-4">
                  <label
                    class="fs-sm me-2 pe-1 text-nowrap"
                    for="review-sorting1"
                    ><i class="fi-arrows-sort text-muted mt-n1 me-2"></i>مرتب
                    سازی براساس:
                  </label>
                  <select
                    class="form-select form-select-sm"
                    id="review-sorting2"
                    v-model="selectedOption"
                    @change="handleOptionChange"
                  >
                    <option value="newest">جدیدترین</option>
                    <option value="oldest">قدیمی ترین</option>
                    <option value="liked">مورد پسند</option>
                    <option value="highRated">امتیاز بالا</option>
                    <option value="lowRated">امتیاز پایین</option>
                  </select>
                </div>
              </div>
              <!-- Review-->
              <div
                class="mb-4 pb-4 border-bottom"
                v-for="item in comments"
                :key="item.id"
              >
                <div class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center ps-2">
                    <img
                      class="rounded-circle me-1"
                      :src="item.imgSrc"
                      width="48"
                      alt="Avatar"
                    />
                    <div class="ps-2">
                      <h6 class="fs-base mb-0">{{ item.name }}</h6>
                      <span class="star-rating"
                        ><i class="star-rating-icon fi-star-filled active"></i
                        ><i class="star-rating-icon fi-star-filled active"></i
                        ><i class="star-rating-icon fi-star-filled active"></i
                        ><i class="star-rating-icon fi-star-filled active"></i
                        ><i class="star-rating-icon fi-star-filled active"></i
                      ></span>
                    </div>
                  </div>
                  <span class="text-muted fs-sm">{{ item.data }}</span>
                </div>
                <p>
                  {{ item.dic }}
                </p>
                <div class="d-flex align-items-center">
                  <button class="btn-like" type="button">
                    <i class="fi-like"></i><span>({{ item.like }})</span>
                  </button>
                  <div class="border-end me-1">&nbsp;</div>
                  <button class="btn-dislike" type="button">
                    <i class="fi-dislike"></i><span>({{ item.dislike }})</span>
                  </button>
                </div>
              </div>

              <!-- Pagination-->
              <nav class="mt-2" aria-label="Reviews pagination">
                <ul class="pagination">
                  <li class="page-item d-sm-none">
                    <span class="page-link page-link-static">1 / 5</span>
                  </li>
                  <li
                    class="page-item active d-none d-sm-block"
                    aria-current="page"
                  >
                    <span class="page-link"
                      >1<span class="visually-hidden">(current)</span></span
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
            <!-- Reviews by you tab-->
            <div class="tab-pane fade" id="reviews-by-you" role="tabpanel">
              <div
                class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between pb-4 mb-2 mb-md-3"
              >
                <h3 class="h4 mb-sm-0">{{ myComments.length }} نظر ثبت شده</h3>
                <div class="d-flex align-items-center ms-sm-4">
                  <label
                    class="fs-sm me-2 pe-1 text-nowrap"
                    for="review-sorting2"
                    ><i class="fi-arrows-sort text-muted mt-n1 me-2"></i>مرتب
                    سازی براساس:
                  </label>
                  <select
                    class="form-select form-select-sm"
                    id="review-sorting2"
                    v-model="selectedOption"
                    @change="handleOptionChange"
                  >
                    <option value="newest">جدیدترین</option>
                    <option value="oldest">قدیمی ترین</option>
                    <option value="liked">مورد پسند</option>
                    <option value="highRated">امتیاز بالا</option>
                    <option value="lowRated">امتیاز پایین</option>
                  </select>
                </div>
              </div>
              <!-- Review-->
              <div
                class="mb-4 pb-4 border-bottom"
                v-for="comment in myComments"
                :key="comment.id"
              >
                <div class="d-flex justify-content-between mb-3">
                  <div class="ps-2">
                    <h6 class="mb-0">
                      <span class="fw-normal text-muted me-1">برای: </span>
                      {{ comment.name }}
                    </h6>
                    <span class="star-rating"
                      ><i class="star-rating-icon fi-star-filled active"></i
                      ><i class="star-rating-icon fi-star-filled active"></i
                      ><i class="star-rating-icon fi-star"></i
                      ><i class="star-rating-icon fi-star"></i
                      ><i class="star-rating-icon fi-star"></i
                    ></span>
                  </div>
                  <span class="text-muted fs-sm">{{ comment.data }} </span>
                </div>
                <p>
                  {{ comment.dic }}
                </p>
                <div class="d-flex align-items-center">
                  <button class="btn-like" type="button">
                    <i class="fi-like"></i><span>({{ comment.like }})</span>
                  </button>
                  <div class="border-end me-1">&nbsp;</div>
                  <button class="btn-dislike" type="button">
                    <i class="fi-dislike"></i
                    ><span>({{ comment.dislike }})</span>
                  </button>
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
import axios from "axios";

export default {
  data() {
    return {
      comments: [
        {
          id: 1,
          name: "میلاد فاضلیان",
          imgSrc: "/avatars/04.jpg",
          data: "14 خرداد , 1402",
          dic: " لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسو استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد.",
          like: 5,
          dislike: 3,
        },
        {
          id: 2,
          name: "زهرا سیدی",
          imgSrc: "/avatars/40.jpg",
          data: "19 خرداد , 1403",
          dic: " لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسو استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد.",
          like: 5,
          dislike: 3,
        },
        {
          id: 3,
          name: "میلاد رحیمی",
          imgSrc: "/avatars/07.jpg",
          data: "14 خرداد , 1401",
          dic: " لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسو استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد.",
          like: 5,
          dislike: 3,
        },
        {
          id: 4,
          name: "مریم محمدی",
          imgSrc: "/avatars/32.jpg",
          data: "14 خرداد , 1402",
          dic: " لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسو استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد.",
          like: 5,
          dislike: 3,
        },
        {
          id: 5,
          name: "میلاد احمدی",
          imgSrc: "/avatars/09.jpg",
          data: "14 خرداد , 1400",
          dic: " لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسو استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد.",
          like: 5,
          dislike: 3,
        },
      ],
      myComments: [
        {
          id: 1,
          name: "آپارتمان سه خواب",

          data: "14 خرداد , 1402",
          dic: " لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسو استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد.",
          like: 5,
          dislike: 3,
        },
        {
          id: 2,
          name: "آپارتمان کیش",

          data: "19 خرداد , 1403",
          dic: " لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسو استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد.",
          like: 5,
          dislike: 3,
        },
        {
          id: 3,
          name: "ویلا رامسر",

          data: "14 خرداد , 1401",
          dic: " لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسو استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد.",
          like: 5,
          dislike: 3,
        },
      ],
      selectedOption: 'newest',
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log("در خواست نظرات کلی  ", res.data);
        // this.comments = res.data
      })
      .catch((error) => {
        console.error("خطا در ارسال درخواست GET", error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        console.log("در خواست نظرات خودم  ", res.data);
        // this.myComments = res.data
      })
      .catch((error) => {
        console.error("خطا در ارسال درخواست GET", error);
      });
  },
  methods: {
    async handleOptionChange() {
      
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          sortingOption: this.selectedOption,
        });


        console.log(response.data);
      } catch (error) {
      
        console.error(error);
      }
    },
  },
};
</script>
<style scoped></style>
