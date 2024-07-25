<template>
  <div>
    <div class="container pt-5 pb-lg-4 mt-5 mb-sm-2">
      <!-- Breadcrumb-->
      <nav class="mb-4 pt-md-3" aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">خانه</a></li>
          <li class="breadcrumb-item"><a href="/profile">حساب کاربری</a></li>
          <li class="breadcrumb-item active" aria-current="page">املاک من</li>
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
                >
                <a class="card-nav-link" href="/userPassword"
                  ><i class="fi-lock opacity-60 me-2"></i>گذرواژه و امنیتی</a
                >
                <a class="card-nav-link active" href="/myProperty"
                  ><i class="fi-home opacity-60 me-2"></i>املاک من</a
                >
                <a
                  class="card-nav-link"
                  href="/liveHome"
                  ><i class="fi-heart opacity-60 me-2"></i>موردعلاقه ها</a
                >
                <a class="card-nav-link" href="/comments"
                  ><i class="fi-star opacity-60 me-2"></i>نظرات</a
                >
                <a
                  class="card-nav-link"
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
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h1 class="h2 mb-0">املاک من</h1>
           
          </div>
          <p class="pt-1 mb-4">
            در اینجا می توانید پیشنهادات ملک خود را مشاهده کرده و به راحتی آنها
            را ویرایش کنید.
          </p>
          <!-- start tabs -->
                 <tabsMyPropertyComponent />
          <!-- end tabs-->
        
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import tabsMyPropertyComponent from '@/components/tabsMyPropertyComponent.vue';

    export default {
        components : {
            tabsMyPropertyComponent,
        }
    }
</script>
<style scoped></style>
