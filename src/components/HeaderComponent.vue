<template>
  <div>
    <header
      class="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      data-scroll-header
    >
      <div class="container">
        <a class="navbar-brand ms-3 ms-xl-4 logo" href="/">
          <img class="d-block" src="/logo/sorena.png" width="30" alt="Finder"
        /></a>
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a
          class="btn btn-sm text-primary d-none d-lg-block order-lg-3"
          href="/auth/login"
          ><i class="fi-user me-2"></i>ورود به حساب کاربری</a
        >
        <a class="btn btn-primary btn-sm ms-2 order-lg-3" href="/record"
          ><i class="fi-plus me-2"></i>ثبت<span class="d-none d-sm-inline">
            ملک</span
          ></a
        >
        <div class="collapse navbar-collapse order-lg-2" id="navbarNav">
          <ul class="navbar-nav navbar-nav-scroll" style="max-height: 35rem">
            <!-- Menu items-->

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-item" href="/">صفحه اصلی</a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >املاک</a
              >
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/rent">ملک برای اجاره</a>
                </li>
                <li><a class="dropdown-item" href="/sell">ملک برای فروش</a></li>
                <li><a class="dropdown-item" href="/detailsView">جزئیات</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >حساب کاربری</a
              >
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/profile"
                    >اطلاعات حساب کاربری</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/userPassword"
                    >گذرواژه و امنیتی</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/myProperty">مشخصات من</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/liveHome">لیست مورد علاقه</a>
                </li>
                <li><a class="dropdown-item" href="/comments">نظرات</a></li>
                <li>
                  <a class="dropdown-item" href="/notification">اطلاعیه ها</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/auth/login">ورود به اکانت</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/auth/register">ثبت نام</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >ثبت ملک</a
              >
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/record">ثبت</a></li>
                <li><a class="dropdown-item" href="/plan">ارتقا</a></li>
                <li><a class="dropdown-item" href="/properitins">جزئیات</a></li>
                <li><a class="dropdown-item" href="/comments">نظرات</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >صفحات</a
              >
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/about">درباره ما</a></li>
                <li><a class="dropdown-item" href="/blog">بلاگ</a></li>
                <li>
                  <a class="dropdown-item" href="/contactUs">تماس با ما</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/support">سوالات متداول</a>
                </li>
                <li><a class="dropdown-item" href="/404">صفحه 404</a></li>
              </ul>
            </li>
            <li class="nav-item d-lg-none">
              <a class="nav-link" href="#signin-modal" data-bs-toggle="modal"
                ><i class="fi-user me-2"></i>ورود به حساب کاربری</a
              >
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>
<script></script>
<style scoped></style>
