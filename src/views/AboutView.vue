<template>
  <div>
    <div class="container mt-5 mb-md-4 pt-5">
      <nav class="mb-3 pt-md-3" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">خانه</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">درباره ما</li>
        </ol>
      </nav>
    </div>
    <!-- Page header-->
    <section class="container mb-5 pb-2">
      <div class="row align-items-center justify-content-center">
        <!-- Hero content-->
        <div
          class="col-lg-4 col-md-5 col-sm-9 order-md-1 order-2 text-md-start text-center"
        >
          <h1 class="mb-4">درباره سایت</h1>
          <p class="mb-4 pb-3 fs-lg">
            ما خدمات کاملی را برای فروش، خرید یا اجاره املاک و مستغلات ارائه می
            دهیم. ما بیش از 10 سال است که کار می کنیم. میلیون ها آپارتمان و خانه
            را در Finder جستجو کنید.
          </p>
          <a class="btn btn-lg btn-primary" href="/contactUs"
            >تماس با ما</a
          >
        </div>
        <!-- Hero carousel-->
        <div class="col-lg-7 col-md-6 offset-md-1 col-12 order-md-2 order-1">
          <sliderAboutComponent />
        </div>
      </div>
    </section>
    <!-- Why choose us?-->
    <section class="container mb-2 mb-xl-5 pb-lg-4">
      <h2 class="h3 mb-4">دلیل انتخاب شرکت ما</h2>
      <!-- Features carousel-->
      <div class="boxAbout">
        <!-- Feature slide-->
        <div>
          <div class="card border-0">
            <div class="card-body">
              <svg
                class="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="#fd5631"
              >
                <path
                  d="M13.585 21.456a10.416 10.416 0 1 0 20.832 0c0-5.76-4.656-10.464-10.416-10.464s-10.416 4.704-10.416 10.464zm18.096 0c0 4.224-3.456 7.68-7.68 7.68s-7.68-3.456-7.68-7.68 3.456-7.68 7.68-7.68 7.68 3.408 7.68 7.68zm-10.225-.96a1.36 1.36 0 0 0-1.92 0 1.36 1.36 0 0 0 0 1.92l2.352 2.352c.24.24.624.384.96.384s.72-.144.96-.384l4.512-4.512a1.36 1.36 0 0 0 0-1.92 1.36 1.36 0 0 0-1.92 0l-3.552 3.552-1.392-1.392zM42 10.512C29.568 5.568 24.96 1.584 24.912 1.536c-.528-.48-1.296-.48-1.824 0C23.04 1.584 18.48 5.52 6 10.512c-.528.192-.864.72-.864 1.248 0 24.576 17.424 34.464 18.192 34.848.192.096.432.192.672.192a1.2 1.2 0 0 0 .672-.192c.72-.384 18.192-10.272 18.192-34.848 0-.528-.336-1.056-.864-1.248zM24 43.824C20.928 41.808 8.304 32.352 7.872 12.72 17.328 8.88 22.128 5.664 24 4.32c1.872 1.392 6.672 4.56 16.128 8.4C39.744 32.352 27.072 41.808 24 43.824z"
                ></path>
              </svg>
              <h3 class="h5 card-title pb-1">امنیت الویت ماست</h3>
              <p class="card-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
          </div>
        </div>
        <!-- Feature slide-->
        <div>
          <div class="card border-0">
            <div class="card-body">
              <svg
                class="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="#fd5631"
              >
                <path
                  d="M39.976 40.416l-5.667-26.529c-.098-.44-.391-.831-.782-1.026L20.531 6.217l-.928-4.202c-.195-.831-.977-1.368-1.808-1.173s-1.368.977-1.172 1.808l.879 4.202-9.136 11.335c-.293.342-.391.831-.293 1.27l5.618 26.529c.195.831.977 1.368 1.808 1.173l23.304-4.934a1.59 1.59 0 0 0 1.173-1.808zm-23.597 3.469L11.2 19.554l7.182-8.843.635 2.931c.195.831.977 1.368 1.808 1.172s1.368-.977 1.172-1.808l-.635-2.931 10.162 5.179 5.179 24.33-20.324 4.299zm7.963-17.149l-2.052.44a1.54 1.54 0 0 1-1.857-1.27c-.146-.831.44-1.612 1.27-1.759l2.052-.44c.684-.146 1.368.195 1.71.782.098.244.342.342.586.293l1.954-.44c.293-.049.489-.391.391-.684-.733-2.003-2.736-3.225-4.837-3.029l-.391-1.954c-.049-.293-.342-.489-.635-.391l-1.954.391c-.293.049-.489.342-.391.635l.391 1.954c-2.247.733-3.664 3.029-3.127 5.374.586 2.492 3.078 4.006 5.521 3.469l2.003-.44c.831-.195 1.661.293 1.857 1.124.244.879-.293 1.71-1.172 1.905l-2.101.44c-.684.147-1.368-.195-1.71-.782-.098-.195-.342-.342-.586-.293l-1.954.44c-.342.049-.488.391-.391.684.733 2.003 2.736 3.224 4.837 3.029l.391 1.905c.049.293.342.489.635.391l1.954-.391c.293-.049.489-.342.391-.635l-.391-1.905c2.247-.733 3.664-3.029 3.127-5.374-.538-2.492-3.029-4.006-5.521-3.469z"
                ></path>
              </svg>
              <h3 class="h5 card-title pb-1">قیمت مناسب</h3>
              <p class="card-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
          </div>
        </div>
        <!-- Feature slide-->
        <div>
          <div class="card border-0">
            <div class="card-body">
              <svg
                class="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.493 32.863a6.53 6.53 0 0 1-5.446-6.441v-3.981a6.53 6.53 0 0 1 1.913-4.619c1.225-1.225 2.887-1.913 4.619-1.913h.435C7.709 7.137 15.048.234 24 .234s16.291 6.903 16.986 15.675h.435a6.53 6.53 0 0 1 6.532 6.532v3.981a6.53 6.53 0 0 1-6.532 6.532h-1.928a1.45 1.45 0 0 1-1.447-1.448V17.274A14.05 14.05 0 0 0 24 3.228 14.05 14.05 0 0 0 9.954 17.274v14.232a1.45 1.45 0 0 1-1.447 1.448h0a8.87 8.87 0 0 0 8.821 7.935h.199c.248-.839.702-1.611 1.332-2.241.991-.991 2.336-1.548 3.738-1.548h2.807a5.29 5.29 0 0 1 5.287 5.286 5.29 5.29 0 0 1-5.287 5.287h-2.807a5.29 5.29 0 0 1-5.071-3.789h-.198c-3.147 0-6.164-1.25-8.39-3.475-2.025-2.025-3.242-4.707-3.445-7.545zm22.203 9.523c0-1.266-1.026-2.292-2.292-2.292h-2.807a2.29 2.29 0 0 0-2.292 2.292c0 1.266 1.026 2.292 2.292 2.292h2.807c1.266 0 2.292-1.026 2.292-2.292zM6.96 18.903h-.381a3.54 3.54 0 0 0-3.538 3.538v3.981a3.54 3.54 0 0 0 3.538 3.538h.381V18.903zm34.08 0V29.96h.381a3.54 3.54 0 0 0 3.538-3.538v-3.981a3.54 3.54 0 0 0-3.538-3.538h-.381z"
                  fill="#fd5631"
                ></path>
              </svg>
              <h3 class="h5 card-title pb-1">پشتیبانی 24/7 آنلاین</h3>
              <p class="card-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- How it works-->
    <section class="container mb-5 pb-2 pb-lg-4">
      <div class="row gy-4">
        <div class="col-md-5 col-12">
          <img
            class="d-block mx-auto rotate-img"
            src="/real-estate/illustrations/find.svg"
            alt="Illustration"
          />
        </div>
        <div class="col-lg-6 offset-lg-1 col-md-7 col-12">
          <h2 class="h3 mb-lg-5 mb-sm-4">روند همکاری مشاوران املاک</h2>
          <div class="steps steps-vertical">
            <div class="step active">
              <div class="step-progress">
                <span class="step-number">1</span>
              </div>
              <div class="step-label me-4">
                <h3 class="h5 mb-2 pb-1">انتخاب ملک موردپسند</h3>
                <p class="mb-0">
                  از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                  شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد.
                </p>
              </div>
            </div>
            <div class="step active">
              <div class="step-progress">
                <span class="step-number">2</span>
              </div>
              <div class="step-label me-4">
                <h3 class="h5 mb-2 pb-1">ارسال ملک برای مشاوران</h3>
                <p class="mb-0">
                  از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                  شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد.
                </p>
              </div>
            </div>
            <div class="step active">
              <div class="step-progress">
                <span class="step-number">3</span>
              </div>
              <div class="step-label me-4">
                <h3 class="h5 mb-2 pb-1">پرداخت هزینه از درگاه مطمئن</h3>
                <p class="mb-0">
                  از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                  شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Meet our professional team-->
    <section class="container mb-5 pb-2 pb-lg-4">
      <div
        class="d-flex align-items-end justify-content-sm-between justify-content-center mb-3"
      >
        <h2 class="h3 mb-0 text-sm-start text-center">
          مشاوران با تجربه سایت املاک
        </h2>
        <div
          class="tns-carousel-controls tns-controls-static d-sm-flex d-none ms-4"
          id="external-controls"
        >
          <button class="mx-2" type="button">
            <i class="fi-chevron-left"></i>
          </button>
          <button class="mx-2" type="button">
            <i class="fi-chevron-right"></i>
          </button>
        </div>
      </div>
      <!-- Team carousel-->

      <div>
        <sliderUserAboutComponent />
      </div>
    </section>
    <!-- Our partners (carousel)-->
    <section class="container mb-5 pb-4">
      <h2 class="h3 mb-4 text-center">برترین مشاوران املاک</h2>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <div>
          <a class="swap-image" href="#"
            ><img
              class="swap-to"
              src="/real-estate/brands/01_color.svg"
              alt="Logo"
              width="196" />
              <img
              class="swap-from"
              src="/real-estate/brands/01_gray.svg"
              alt="Logo"
              width="196"
          /></a>
        </div>
        <div>
          <a class="swap-image" href="#"
            ><img
              class="swap-to"
              src="/real-estate/brands/02_color.svg"
              alt="Logo"
              width="196" />
              <img
              class="swap-from"
              src="/real-estate/brands/02_gray.svg"
              alt="Logo"
              width="196"
          /></a>
        </div>
        <div>
          <a class="swap-image" href="#"
            ><img
              class="swap-to"
              src="/real-estate/brands/03_color.svg"
              alt="Logo"
              width="196" /><img
              class="swap-from"
              src="/real-estate/brands/03_gray.svg"
              alt="Logo"
              width="196"
          /></a>
        </div>
        <div>
          <a class="swap-image" href="#"
            ><img
              class="swap-to"
              src="/real-estate/brands/04_color.svg"
              alt="Logo"
              width="196" /><img
              class="swap-from"
              src="/real-estate/brands/04_gray.svg"
              alt="Logo"
              width="196"
          /></a>
        </div>
        <div>
          <a class="swap-image" href="#"
            ><img
              class="swap-to"
              src="/real-estate/brands/05_color.svg"
              alt="Logo"
              width="196" /><img
              class="swap-from"
              src="/real-estate/brands/05_gray.svg"
              alt="Logo"
              width="196"
          /></a>
        </div>
        <div>
          <a class="swap-image" href="#"
            ><img
              class="swap-to"
              src="/real-estate/brands/06_color.svg"
              alt="Logo"
              width="196" /><img
              class="swap-from"
              src="/real-estate/brands/06_gray.svg"
              alt="Logo"
              width="196"
          /></a>
        </div>
      </div>
    </section>
    <!-- Hear from our customers-->
    <section class="container mb-5 pb-xl-5 pb-md-2">
      <h2 class="h3 mb-3 text-center">نظرات مشتریان</h2>
      <customerComponent />
    </section>

    <section class="container mb-5 pb-sm-3 pb-lg-4">
      <div class="bg-secondary rounded-3">
        <div
          class="col-md-11 col-12 offset-md-1 p-md-0 p-2 d-flex align-items-center justify-content-between"
        >
          <div class="me-md-5 py-md-5 px-md-0  p-4" style="max-width: 526px; padding-right: 10px !important;">
            <h2 class="mb-md-4">
              با اطمینان ملک بخرید <br />
              فروش ملک با بهترین قیمت
            </h2>
            <p class="mb-4 pb-md-3 fs-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          
          </div>
          <div class="col-4 d-md-block d-none align-self-end px-0">
            <img
              class="mt-n5"
              src="/real-estate/about/01.png"
              width="406"
              alt="Cover image"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Recent posts-->
    <section class="container mb-5 pb-lg-5">
      <div
        class="d-sm-flex align-items-center justify-content-between mb-4 pb-2"
      >
        <h2 class="h3 mb-sm-0">مقالات برگزیده این هفته</h2>
        <a
          class="btn btn-link fw-normal me-sm-3 p-0"
          href="real-estate-blog.html"
          >مشاهده همه<i class="fi-arrow-long-left ms-2"></i
        ></a>
      </div>
      <!-- Carousel-->
      <div class="d-flex align-items-center justify-content-between">
        <!-- Item-->
        <article>
          <a class="d-block mb-3" href="#"
            ><img
              class="rounded-3"
              src="/real-estate/blog/05.jpg"
              alt="Post image" /></a
          ><a class="fs-sm text-uppercase text-decoration-none" href="#"
            >تحلیل بازار املاک</a
          >
          <h3 class="fs-base pt-1">
            <a class="nav-link" href="real-estate-blog-single.html"
              >10 روند شیک دکوراسیون اتاق ناهارخوری برای فصل بهار</a
            >
          </h3>
          <a class="d-flex align-items-center text-decoration-none" href="#"
            ><img
              class="rounded-circle"
              src="/avatars/12.jpg"
              width="44"
              alt="Avatar"
            />
            <div class="ps-2">
              <h6 class="fs-sm text-nav lh-base mb-1">کودی فیشر</h6>
              <div class="d-flex text-body fs-xs">
                <span class="me-2 pe-1"
                  ><i
                    class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"
                  ></i
                  >24 فروردین</span
                ><span
                  ><i
                    class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"
                  ></i
                  >0 نظر</span
                >
              </div>
            </div></a
          >
        </article>
        <!-- Item-->
        <article style="margin: 0 5px">
          <a class="d-block mb-3" href="#"
            ><img
              class="roYourunded-3"
              src="/real-estate/blog/01.jpg"
              alt="Post image" /></a
          ><a class="fs-sm text-uppercase text-decoration-none" href="#"
            >نکات و ترفندها</a
          >
          <h3 class="fs-base pt-1">
            <a class="nav-link" href="#"
              >7 نکته برای دستیابی به حداکثر آرامش</a
            >
          </h3>
          <a class="d-flex align-items-center text-decoration-none" href="#"
            ><img
              class="rounded-circle"
              src="/avatars/08.jpg"
              width="44"
              alt="Avatar"
            />
            <div class="ps-2">
              <h6 class="fs-sm text-nav lh-base mb-1">دارل استوارد</h6>
              <div class="d-flex text-body fs-xs">
                <span class="me-2 pe-1"
                  ><i
                    class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"
                  ></i
                  >15 اردیبهشت</span
                ><span
                  ><i
                    class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"
                  ></i
                  >2 نظر ثبت شده</span
                >
              </div>
            </div></a
          >
        </article>
        <!-- Item-->
        <article>
          <a class="d-block mb-3" href="#"
            ><img
              class="rounded-3"
              src="/real-estate/blog/03.jpg"
              alt="Post image" /></a
          ><a class="fs-sm text-uppercase text-decoration-none" href="#"
            >سبک زندگی</a
          >
          <h3 class="fs-base pt-1">
            <a class="nav-link" href="#"
              >5 پروژه آسان و جاه طلبانه برای بهبود خانه شما</a
            >
          </h3>
          <a class="d-flex align-items-center text-decoration-none" href="#"
            ><img
              class="rounded-circle"
              src="/avatars/03.jpg"
              width="44"
              alt="Avatar"
            />
            <div class="ps-2">
              <h6 class="fs-sm text-nav lh-base mb-1">کاترین مورفی</h6>
              <div class="d-flex text-body fs-xs">
                <span class="me-2 pe-1"
                  ><i
                    class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"
                  ></i
                  >28 خرداد</span
                ><span
                  ><i
                    class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"
                  ></i
                  >4 نظر ثبت شده</span
                >
              </div>
            </div></a
          >
        </article>
      </div>
    </section>
  </div>
</template>
<script>
import sliderAboutComponent from "../components/sliderAboutComponent.vue";
import sliderUserAboutComponent from "@/components/sliderUserAboutComponent.vue";
import customerComponent from "@/components/customerComponent.vue";
export default {
  components: {
    sliderAboutComponent,
    sliderUserAboutComponent,
    customerComponent,
  },
};
</script>
<style scoped>
.boxAbout {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media only screen and (max-width: 768px) {
  .boxAbout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
