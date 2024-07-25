<template>
  <div>
    <div class="container mt-5 mb-md-4 pt-5">
      <nav class="mb-3 pt-md-3" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">خانه</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            سوالات متداول
          </li>
        </ol>
      </nav>
    </div>
    <!-- Page header-->
    <section class="container mb-4 pb-lg-5">
      <h1 class="mx-auto mb-4 pb-2 text-center" style="max-width: 856px">
        سلام چجوری میتونیم کمک کنیم؟
      </h1>
      <!-- Search form-->

      <div class="d-flex flex-md-row flex-column align-items-md-center">
        <div class="pb-2 mb-2 me-2 flex-shrink-0 fw-bold">بخش های محبوب:</div>
        <div class="text-nowrap overflow-auto pb-2">
          <div>
            <a
              class="btn btn-xs btn-outline-secondary rounded-pill fw-normal mb-2 me-2"
              href="#"
              >نوتیفیکشن</a
            ><a
              class="btn btn-xs btn-outline-secondary rounded-pill fw-normal mb-2 me-2"
              href="#"
              >عضویت در سایت</a
            ><a
              class="btn btn-xs btn-outline-secondary rounded-pill fw-normal mb-2 me-2"
              href="#"
              >روند معاملات</a
            ><a
              class="btn btn-xs btn-outline-secondary rounded-pill fw-normal mb-2 me-2"
              href="#"
              >سوالات حساب کاربری</a
            ><a
              class="btn btn-xs btn-outline-secondary rounded-pill fw-normal mb-2 me-2"
              href="#"
              >رهن مسکن</a
            ><a
              class="btn btn-xs btn-outline-secondary rounded-pill fw-normal mb-2 me-2"
              href="#"
              >راهنما</a
            >
          </div>
        </div>
      </div>
    </section>
    <!-- Page content-->
    <section class="container mb-md-5 mb-4 pb-lg-5">
      <div class="row">
        <!-- Sidebar offcanvas-->
        <aside class="col-xl-2 col-lg-3">
          <div class="offcanvas-lg offcanvas-end" id="help-sidebar">
            <div class="offcanvas-header shadow-sm mb-2">
              <h2 class="h5 mb-0">سوالات متداول</h2>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="offcanvas"
                data-bs-target="#help-sidebar"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul
                class="nav nav-tabs navbar-nav flex-column m-0 text-lg-center"
              >
                <li class="nav-item px-0">
                  <a
                    class="nav-link px-3"
                    :class="{ active: activeTabs === 'tenant' }"
                    @click="handelTabs('tenant')"
                    href="#"
                    >مستاجران و اجاره ها</a
                  >
                </li>
                <li class="nav-item px-0">
                  <a
                    class="nav-link px-3"
                    :class="{ active: activeTabs === 'buy' }"
                    @click="handelTabs('buy')"
                    href="#"
                    >خریداران ملک</a
                  >
                </li>
                <li class="nav-item px-0">
                  <a
                    class="nav-link px-3"
                    :class="{ active: activeTabs === 'landlord' }"
                    @click="handelTabs('landlord')"
                    href="#"
                    >صاحبان املاک</a
                  >
                </li>
                <li class="nav-item px-0">
                  <a
                    class="nav-link px-3"
                    :class="{ active: activeTabs === 'Rent' }"
                    @click="handelTabs('Rent')"
                    href="#"
                    >رهن و اجاره</a
                  >
                </li>
                <li class="nav-item px-0">
                  <a
                    class="nav-link px-3"
                    :class="{ active: activeTabs === 'Mobile' }"
                    @click="handelTabs('Mobile')"
                    href="#"
                    >سوالات نسخه اپلیکیشن</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <!-- Content-->
        <div
          class="col-lg-9 offset-xl-1 col-lg-8 faq-real"
          v-if="activeTabs === 'tenant'"
        >
          <h2 class="mb-md-4 mb-3 pb-md-2">مستاجران و اجاره ها</h2>
          <div v-for="(faq, index) in tenantFaqs" :key="index" class="pb-md-2">
            <h3 class="h5">{{ faq.question }}</h3>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
        <div
          class="col-lg-9 offset-xl-1 col-lg-8 faq-real"
          v-if="activeTabs === 'buy'"
        >
          <h2 class="mb-md-4 mb-3 pb-md-2">خریدارن ملک</h2>
          <div class="pb-md-2" v-for="(faq, index) in buyerFaqs" :key="index">
            <h3 class="h5">
              {{ faq.question }}
            </h3>
            <p>
              {{ faq.answer }}
            </p>
          </div>  
        </div>
        <div
          class="col-lg-9 offset-xl-1 col-lg-8 faq-real"
          v-if="activeTabs === 'landlord'"
        >
          <h2 class="mb-md-4 mb-3 pb-md-2">صاحبان ملک</h2>
          <div class="pb-md-2" v-for="(faq, index) in landholderFaqs" :key="index">
            <h3 class="h5">
              {{ faq.question }}
            </h3>
            <p>
              {{ faq.answer }}
            </p>
          </div>  
        </div>
        <div
          class="col-lg-9 offset-xl-1 col-lg-8 faq-real"
          v-if="activeTabs === 'Rent'"
        >
          <h2 class="mb-md-4 mb-3 pb-md-2">رهن و اجاره</h2>
          <div class="pb-md-2" v-for="(faq, index) in mortgageFaqs" :key="index">
            <h3 class="h5">
              {{ faq.question }}
            </h3>
            <p>
              {{ faq.answer }}
            </p>
          </div>  
        </div>
        <div
          class="col-lg-9 offset-xl-1 col-lg-8 faq-real"
          v-if="activeTabs === 'Mobile'"
        >
          <h2 class="mb-md-4 mb-3 pb-md-2">سوالات اپلیکیشن</h2>
          <div class="pb-md-2" v-for="(faq, index) in mobileFaqs" :key="index">
            <h3 class="h5">
              {{ faq.question }}
            </h3>
            <p>
              {{ faq.answer }}
            </p>
          </div>  
        </div>
      </div>
    </section>
    <!-- Contact us-->
    <section class="container mb-5 pb-lg-5">
      <div class="row align-items-sm-center">
        <div class="col-sm-5">
          <img
            src="/real-estate/illustrations/support.svg"
            alt="Illustration"
            class="rotate-img"
          />
        </div>
        <div class="col-md-6 offset-md-1 col-sm-7 text-sm-end text-center">
          <h2 class="mb-4 pb-md-3">
            چیزی را که به دنبالش هستید پیدا نمی کنید؟
          </h2>
          <a class="btn btn-lg btn-primary" href="real-estate-contacts.html"
            >اکنون با ما تماس بگیرید!</a
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  
  data() {
    return {
      activeTabs: "tenant",
      tenantFaqs: [
        {
          question: "چرا نمی توانم هویت خود را تأیید کنم؟",
          answer:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ..." 
        },
        {
          question: "مبالغ اجاره به چه صورت باید پرداخت گردد ؟",
          answer: "پاسخ به سوال دوم"
        },
        {
          question: "ایا مالک می توانند قبل از اتمام قرار داد واحد را تخلیه کند ؟",
          answer: "پاسخ به سوال سوم"
        },
      ],
      buyerFaqs: [
        {
          question: "آیا لیست های اجاره ای در برای کلاهبرداری فیلتر شده است؟",
          answer:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ..." 
        },
        {
          question: "لیست های اجاره ای چگونه در قرار می گیرند؟",
          answer: "پاسخ به سوال دوم"
        },
        {
          question: "چگونه می توانم درباره حقوق خود به عنوان مستاجر اطلاعات بیشتری کسب کنم؟",
          answer: "پاسخ به سوال سوم"
        },
      ],
      landholderFaqs :[
      {
          question: "آیا لیست های اجاره ای در برای کلاهبرداری فیلتر شده است؟",
          answer:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ..." 
        },
        {
          question: "لیست های اجاره ای چگونه در قرار می گیرند؟",
          answer: "پاسخ به سوال دوم"
        },
      ],
      mortgageFaqs : [
      {
          question: "آیا لیست های اجاره ای در برای کلاهبرداری فیلتر شده است؟",
          answer:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ..." 
        },
        {
          question: "لیست های اجاره ای چگونه در قرار می گیرند؟",
          answer: "پاسخ به سوال دوم"
        },
      ],
      mobileFaqs : [
      {
          question: "آیا نسخه موبایلی  فیلتر شده است؟",
          answer:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ..." 
        },
      ] 
    };
  },
  created() {
   
    this.fetchData();
  },
  methods: {
    handelTabs(tab) {
      this.activeTabs = tab;
    },

    async fetchData() {
      try {
    
        const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('مستاجر:', response1.data);
       
        const response2 = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
        console.log('خریدار:', response2.data);
      
        const response3 = await axios.get('https://jsonplaceholder.typicode.com/posts/3');
        console.log('صاحب ملک:', response3.data);

        const response4 = await axios.get('https://jsonplaceholder.typicode.com/posts/4');
        console.log('رهن و اجاره:', response4.data);

        const response5 = await axios.get('https://jsonplaceholder.typicode.com/posts/5');
        console.log('سوال موبایل:', response5.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    
  },
};
</script>
<style scoped></style>
