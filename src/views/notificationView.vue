<template>
  <div>
    <div class="container pt-5 pb-lg-4 mt-5 mb-sm-2">
      <!-- Breadcrumb-->
      <nav class="mb-4 pt-md-3" aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">خانه</a>
          </li>
          <li class="breadcrumb-item">
            <a href="/profile">حساب کاربری</a>
          </li>
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
              href="/record"
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
                ><a
                  class="card-nav-link"
                  href="/userPassword"
                  ><i class="fi-lock opacity-60 me-2"></i>گذرواژه و امنیتی</a
                ><a
                  class="card-nav-link"
                  href="/myProperty"
                  ><i class="fi-home opacity-60 me-2"></i>املاک من</a
                ><a
                  class="card-nav-link"
                  href="/liveHome"
                  ><i class="fi-heart opacity-60 me-2"></i>موردعلاقه ها</a
                ><a
                  class="card-nav-link"
                  href="/comments"
                  ><i class="fi-star opacity-60 me-2"></i>نظرات</a
                >
                <a
                  class="card-nav-link active"
                  href="/notification"
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
          <h1 class="h2">لیست اطلاعیه ها</h1>
          <p class="pt-1 mb-4">
            دریافت به روزرسانی های واقعی در مورد خانه ها ، محله ها و موارد دیگر.
          </p>
          <!-- Nav tabs-->
          <ul
            class="nav nav-tabs flex-column flex-sm-row align-items-stretch align-items-sm-start border-bottom mb-4"
            role="tablist"
          >
            <li class="nav-item me-sm-3 mb-3">
              <a
                class="nav-link text-center active"
                href="#notifications-rent"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="notifications-rent"
                aria-selected="true"
                >نوتیفیکیشن های اجاره</a
              >
            </li>
            <li class="nav-item mb-3">
              <a
                class="nav-link text-center"
                href="#notifications-sale"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="notifications-sale"
                aria-selected="false"
                >نوتیفیکیشن های فروش</a
              >
            </li>
          </ul>
          <!-- Tabs content-->
          <div class="tab-content py-2" id="notification-settings">
            <!-- Rent notifications tab-->
            <div
              class="tab-pane fade show active"
              id="notifications-rent"
              role="tabpanel"
            >
              <div class="d-flex justify-content-between mb-4">
                <div class="me-2">
                  <h6 class="mb-1">آگهی های جدید اجاره</h6>
                  <p class="fs-sm mb-0">
                    اجاره های جدید که با شما مطابقت دارد<a
                    href="/liveHome"
                    >
                      لیست موردعلاقه</a
                    >
                  </p>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="new-rental"
                    v-model="isCheckboxChecked"
                  />
                  <label class="form-check-label" for="new-rental"></label>
                </div>
              </div>
              <div class="d-flex justify-content-between mb-4">
                <div class="me-2">
                  <h6 class="mb-1">به روز رسانی وضعیت اجاره</h6>
                  <p class="fs-sm mb-0">
                    به روزرسانی هایی مانند تغییرات قیمت و غیرفعال شدن آگهی
                    <a href="/liveHome"
                      >لیست موردعلاقه</a
                    >
                  </p>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="rental-update"
                    checked
                  />
                  <label class="form-check-label" for="rental-update"></label>
                </div>
              </div>
              <div class="d-flex justify-content-between mb-4">
                <div class="me-2">
                  <h6 class="mb-1">پیشنهادات سایت</h6>
                  <p class="fs-sm mb-0">
                    اجاره هایی که فکر می کنیم دوست دارید. این توصیه ها ممکن است
                    کمی خارج از معیارهای جستجوی شما باشد
                  </p>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="rental-recomendation"
                  />
                  <label
                    class="form-check-label"
                    for="rental-recomendation"
                  ></label>
                </div>
              </div>
            </div>
            <!-- Sale notifications tab-->
            <div class="tab-pane fade" id="notifications-sale" role="tabpanel">
              <div class="d-flex justify-content-between mb-4">
                <div class="me-2">
                  <h6 class="mb-1">آگهی های جدید فروش</h6>
                  <p class="fs-sm mb-0">
                    فروش های جدید متناسب با شما
                    <a href="/liveHome">
                      لیست مورد علاقه</a
                    >
                  </p>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="new-sale"
                    checked
                  />
                  <label class="form-check-label" for="new-sale"></label>
                </div>
              </div>
              <div class="d-flex justify-content-between mb-4">
                <div class="me-2">
                  <h6 class="mb-1">به روز رسانی وضعیت اجاره</h6>
                  <p class="fs-sm mb-0">
                    به روزرسانی هایی مانند تغییرات قیمت و غیرفعال شدن آگهی
                    <a href="/liveHome"
                      >لیست موردعلاقه</a
                    >
                  </p>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="sale-update"
                  />
                  <label class="form-check-label" for="sale-update"></label>
                </div>
              </div>
              <div class="d-flex justify-content-between mb-4">
                <div class="me-2">
                  <h6 class="mb-1">پیشنهادات سایت</h6>
                  <p class="fs-sm mb-0">
                    اجاره هایی که فکر می کنیم دوست دارید. این توصیه ها ممکن است
                    کمی خارج از معیارهای جستجوی شما باشد
                  </p>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="sale-recomendation"
                  />
                  <label
                    class="form-check-label"
                    for="sale-recomendation"
                  ></label>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-4">
              <div class="me-2">
                <h6 class="mb-1">اخبار ویژه</h6>
                <p class="fs-sm mb-0">
                  اخبار و نکاتی که ممکن است به آنها علاقه داشته باشید
                </p>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="featured-news"
                  checked
                />
                <label class="form-check-label" for="featured-news"></label>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-4">
              <div class="me-2">
                <h6 class="mb-1">سایر موارد</h6>
                <p class="fs-sm mb-0">
                  اعلان های گاه به گاه در مورد ویژگی های جدید برای پیدا کردن
                  اجاره مناسب آسان
                </p>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="extras" />
                <label class="form-check-label" for="extras"></label>
              </div>
            </div>
          </div>
          <div class="border-top pt-4">
            <button class="btn btn-primary btn-lg w-100 mb-3" @click="sendChanges">اعمال تغییرات</button>
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
      isCheckboxChecked: false, // Set the default value to false
    };
  },
  methods: {
    async sendChanges() {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          newAdd: this.isCheckboxChecked,
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
