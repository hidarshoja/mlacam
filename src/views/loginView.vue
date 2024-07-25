<template>
  <div>
    <div
      class="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5"
    >
      <div class="card card-body" style="max-width: 940px">
        <a
          class="position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3"
          href="#"
          onclick="window.history.go(-1); return false;"
          ><i class="fi-arrow-long-right fs-base me-2"></i>برگشت</a
        >
        <div class="row mx-0 align-items-center">
          <div class="col-md-6 border-end-md p-4 p-sm-5">
            <h2 class="h3 mb-4 mb-sm-5">سلام!<br />به سایت ما خوش آمدید.</h2>
            <img
              class="d-block mx-auto rotate-img"
              src="/signin-modal/signin.svg"
              width="344"
              alt="Illustartion"
            />
            <div class="mt-4 mt-sm-5">
              هنوز ثبت نام نکرده اید؟ <a href="/auth/register">ثبت نام</a>
            </div>
          </div>
          <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
            <a class="btn btn-outline-info w-100 mb-3" href="#"
              ><i class="fi-google fs-lg me-1"></i>ورود با اکانت گوگل</a
            ><a class="btn btn-outline-info w-100 mb-3" href="#"
              ><i class="fi-facebook fs-lg me-1"></i>ورود با اکانت فیسبوک</a
            >
            <div class="d-flex align-items-center py-3 mb-3">
              <hr class="w-100" />
              <div class="px-3">یـا</div>
              <hr class="w-100" />
            </div>
            <form class="needs-validation" novalidate>
              <div class="mb-4">
                <label class="form-label mb-2" for="signin-email"
                  >پست الکترونیکی</label
                >
                <input
                  class="form-control"
                  type="email"
                  id="signin-email"
                  placeholder="ایمیل"
                  required
                />
              </div>
              <div class="mb-4">
                <div
                  class="d-flex align-items-center justify-content-between mb-2"
                >
                  <label class="form-label mb-0" for="signin-password"
                    >رمز عبور</label
                  ><a class="fs-sm" href="#">رمز عبور را فراموش کرده اید؟</a>
                </div>
                <div class="password-toggle">
                  <input
                    class="form-control"
                    type="password"
                    id="signin-password"
                    placeholder="پسوورد خود را وارد کنید"
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
              <button class="btn btn-primary btn-lg w-100" type="submit">
                ورود به حساب کاربری
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
   export default {
    
   }
</script>
<style scoped></style>
