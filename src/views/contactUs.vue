<template>
  <div>
    <div class="container mt-5 mb-md-4 pt-5">
      <nav class="mb-3 pt-md-3" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">خانه</a></li>
          <li class="breadcrumb-item active" aria-current="page">تماس با ما</li>
        </ol>
      </nav>
    </div>
    <!-- Hero-->
    <section class="container mb-5 pb-2 pb-md-4 pb-lg-5">
      <div class="row align-items-md-start align-items-center gy-4">
        <div class="col-lg-5 col-md-6">
          <div
            class="mx-md-0 mx-auto mb-md-5 mb-4 pb-md-4 text-md-start text-center"
            style="max-width: 416px"
          >
            <h1 class="mb-4">با ما در ارتباط باشید!</h1>
            <p class="mb-0 fs-base text-muted">
              فرم را تکمیل کنید و تیم ما سعی می کند در مدت 24 ساعت با شما تماس
              بگیرد.
            </p>
          </div>
          <img
            class="d-block mx-auto rotate-img"
            src="/real-estate/illustrations/contact.svg"
            alt="Illustration"
          />
        </div>
        <div class="col-md-6 offset-lg-1">
          <div class="card border-0 bg-secondary p-sm-3 p-2">
            <div class="card-body m-1">
              <form
                class="needs-validation"
                @submit.prevent="submitForm"
                novalidate
              >
                <div class="mb-4">
                  <label class="form-label" for="c-name">نام خانوادگی</label>
                  <input
                    v-model="formData.name"
                    class="form-control form-control-lg"
                    id="c-name"
                    type="text"
                    required
                  />
                  <div class="invalid-tooltip mt-1">
                    لطفا نام و نام خانوادگی خود را وارد کنید
                  </div>
                </div>
                <div class="mb-4">
                  <label class="form-label" for="c-email">پست الکترونیکی</label>
                  <input
                    v-model="formData.email"
                    class="form-control form-control-lg"
                    id="c-email"
                    type="email"
                    required
                  />
                  <div class="invalid-tooltip mt-1">لطفا ایمیل</div>
                </div>
                <div class="mb-4">
                  <label class="form-label" for="c-message">متن درخواست</label>
                  <textarea
                    v-model="formData.message"
                    class="form-control form-control-lg"
                    id="c-message"
                    rows="4"
                    placeholder="متن مورد نظر خود را بنویسید ..."
                    required
                  ></textarea>
                  <div class="invalid-tooltip mt-1">
                    لطفا پیام خود را وارد کنید
                  </div>
                </div>
                <div class="pt-sm-2 pt-1">
                  <button
                    class="btn btn-lg btn-primary w-sm-auto w-100"
                    type="submit"
                  >
                    ارسال فرم
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact cards-->
    <section class="container mb-5 pb-2 pb-md-4 pb-lg-5">
      <div class="row g-4">
        <div class="col-md-4" v-for="(item, index) in items" :key="index">
          <a class="icon-box card card-hover h-100" :href="item.link">
            <div class="card-body">
              <div
                class="icon-box-media text-primary rounded-circle shadow-sm mb-3"
              >
                <i :class="item.iconClass"></i>
              </div>
              <span class="d-block mb-1 text-body">{{ item.title }}</span>
              <h3 class="h5 icon-box-title mb-0 opacity-90 ltr">
                {{ item.subtitle }}
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      items: [
        {
          title: "ارسال ایمیل",
          subtitle: "example@email.com",
          link: "mailto:example@email.com",
          iconClass: "fi-mail",
        },
        {
          title: "تماس در 7 روز هفته (24/7)",
          subtitle: "(021) 224-1523",
          link: "tel:4065550120",
          iconClass: "fi-device-mobile",
        },
        {
          title: "آدرس دفتر ما",
          subtitle: "تهران خیابان هجرت",
          link: "#",
          iconClass: "fi-map-pin",
        },
      ],
      postData: null,
      email: "",
      numberPhone: "",
      address: "",
    };
  },

  methods: {
    fecthDetails() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/2")
        .then((res) => {
          console.log("fecthDetails", res.data);
          // this.email = res.data;
          // this.numberPhone = res.data;
          // this.address = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async submitForm() {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          this.formData
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fecthDetails();
  },
};
</script>
