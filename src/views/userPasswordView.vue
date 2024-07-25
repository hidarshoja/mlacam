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
            گذرواژه و امنیتی
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
                ><a
                  class="card-nav-link active"
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
                ><a
                  class="card-nav-link"
                  href="/notification"
                  ><i class="fi-bell opacity-60 me-2"></i>اطلاعیه ها</a
                ><a class="card-nav-link" href="/support"
                  ><i class="fi-help opacity-60 me-2"></i>پشتیبانی</a
                ><a class="card-nav-link" href="#"
                  ><i class="fi-logout opacity-60 me-2"></i>خروج</a
                >
              </div>
            </div>
          </div>
        </aside>
        <!-- Content-->
        <div class="col-lg-8 col-md-7 mb-5 account">
          <h1 class="h2">گذرواژه و امنیتی</h1>
          <p class="pt-1">
            تنظیمات رمز عبور خود را مدیریت کرده و حساب خود را ایمن کنید.
          </p>
          <!-- <h2 class="h5">تغییر رمز عبور</h2> -->
          <form class="needs-validation pb-4" novalidate  @submit.prevent="changePassword">
            <div class="row align-items-end mb-2">
              <div class="col-sm-6 mb-2">
                <label class="form-label" for="account-password"
                  >رمز عبور فعلی</label
                >
                <div class="password-toggle">
                  <input
                    v-model="password"
                    class="form-control"
                    type="password"
                    id="account-password"
                    required
                  />
                  <label
                    class="password-toggle-btn"
                    aria-label="Show/hide password"
                  >
                    <input class="password-toggle-check" type="checkbox" /><span
                      class="password-toggle-indicator"
                    ></span>
                  </label>
                </div>
              </div>
              <div class="col-sm-6 mb-2">
                <a class="d-inline-block mb-2" href="#"
                  >رمز عبور را فراموش کرده اید؟</a
                >
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-6 mb-3">
                <label class="form-label" for="account-password-new"
                  >رمز عبور جدید</label
                >
                <div class="password-toggle">
                  <input
                    class="form-control"
                    v-model="passwordNew"
                    type="password"
                    id="account-password-new"
                    required
                  />
                  <label
                    class="password-toggle-btn"
                    aria-label="Show/hide password"
                  >
                    <input class="password-toggle-check" type="checkbox" /><span
                      class="password-toggle-indicator"
                    ></span>
                  </label>
                </div>
              </div>
              <div class="col-sm-6 mb-3">
                <label class="form-label" for="account-password-confirm"
                  >رمز عبور جدید</label
                >
                <div class="password-toggle">
                  <input
                    class="form-control"
                    v-model="passwordNew2"
                    type="password"
                    id="account-password-confirm"
                    required
                  />
                  <label
                    class="password-toggle-btn"
                    aria-label="Show/hide password"
                  >
                    <input class="password-toggle-check" type="checkbox" /><span
                      class="password-toggle-indicator"
                    ></span>
                  </label>
                </div>
              </div>
            </div>
            <button class="btn btn-outline-primary" type="submit">
              ثبت تغییرات
            </button>
          </form>
          <div class="border-top pt-4 mt-3"></div>
          <h2 class="h5 pt-2 mb-4 font-vazir">
            با چه سیستم و کدام کشور وارد حساب کاربری خود شده اید؟
          </h2>
          <div class="d-flex border-bottom pb-3 mb-3">
            <i class="fi-device-desktop fs-5 text-muted ms-1"></i>
            <div class="ps-2">
              <div class="mb-1 font-vazir">Mac – ایران, تهران</div>
              <span class="d-inline-block fs-sm text-muted border-end pe-2 me-2"
                >مرورگر کروم</span
              ><span class="fs-sm fw-bold text-success">هم اکنون فعال</span>
            </div>
          </div>
          <div class="d-flex border-bottom pb-3 mb-3">
            <i class="fi-device-mobile fs-5 text-muted ms-1"></i>
            <div class="ps-2">
              <div class="mb-1 font-vazir">iPhone 12 – ایران, مشهد</div>
              <span class="d-inline-block fs-sm text-muted border-end pe-2 me-2"
                >اپلیکیشن فایندر</span
              ><span class="fs-sm text-muted">20 ساعت پیش</span>
            </div>
            <div class="align-self-center ms-auto">
              <div class="dropdown">
                <button
                  class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm"
                  type="button"
                  id="contextMenu1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fi-dots-vertical"></i>
                </button>
                <ul
                  class="dropdown-menu pb-3 my-1"
                  aria-labelledby="contextMenu1"
                >
                  <li>
                    <a class="dropdown-item text-body" href="#">فعلا نه</a>
                  </li>
                  <li>
                    <a class="d-block px-3" href="#">خروج از حساب کاربری</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="d-flex border-bottom pb-3 mb-3">
            <i class="fi-device-desktop fs-5 text-muted ms-1"></i>
            <div class="ps-2">
              <div class="mb-1 font-vazir">Windows 10.1 – ایران, شیراز</div>
              <span class="d-inline-block fs-sm text-muted border-end pe-2 me-2"
                >مرورگر کروم</span
              ><span class="fs-sm text-muted">خرداد 8:24 بعد ازظهر</span>
            </div>
            <div class="align-self-center ms-auto">
              <div class="dropdown">
                <button
                  class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm"
                  type="button"
                  id="contextMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fi-dots-vertical"></i>
                </button>
                <ul
                  class="dropdown-menu pb-3 my-1"
                  aria-labelledby="contextMenu2"
                >
                  <li>
                    <a class="dropdown-item text-body" href="#">فعلا نه</a>
                  </li>
                  <li>
                    <a class="d-block px-3" href="#">خروج از حساب کاربری</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a class="d-inline-block fw-bold text-decoration-none mt-3" href="#"
            >خروج از تمام sessions ها
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

   export default {
    data (){
      return {
        password : "",
        passwordNew : "",
        passwordNew2 : ""
      }
    },
    methods : {
      changePassword () {
        let userPassword ={
          password : this.password,
          newPassword : this.passwordNew,
          newPassword2 : this.passwordNew2
        }
        axios.post("https://jsonplaceholder.typicode.com/posts", userPassword)
        .then((response) => {
        console.log(response.data);
         })
        .catch((error) => {
         console.error(error);
        });
      }
    }

   }
</script>
<style scoped></style>
