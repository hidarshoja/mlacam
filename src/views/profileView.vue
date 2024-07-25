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
            اطلاعات حساب کاربری
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
                    :src="selectedImage"
                    alt="انتخاب عکس پرفایل"
                    style="
                      width: 48px;
                      height: 48px;
                      border-radius: 50%;
                      cursor: pointer;
                    "
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
                    <a class="nav-link fw-normal p-0" href="tel:3025550107">
                      <i class="fi-phone opacity-60 me-2"></i>(302) 555-0107</a
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
              href="/realstate/profileUsers"
              ><i class="fi-plus me-2"></i>در خواست همکاری</a
            ><a
              class="btn btn-outline-secondary d-block d-md-none w-100 mb-3"
              href="#account-nav"
              data-bs-toggle="collapse"
              ><i class="fi-align-justify me-2"></i>منو</a
            >
            <div class="collapse d-md-block mt-3" id="account-nav">
              <div class="card-nav">
                <a
                  class="card-nav-link active"
                  href="/profile"
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
          <div>
            <h1 class="h2">اطلاعات حساب کاربری</h1>
        
          </div>
          
       
          <label class="form-label pt-2" for="account-bio">توضیح مختصر</label>
          <div class="row pb-2">
            <div class="col-lg-9 col-sm-8 mb-4">
              <textarea
                v-model="bio"
                class="form-control"
                id="account-bio"
                rows="6"
                placeholder="بیوگرافی خود را اینجا بنویسید"
              ></textarea>
            </div>
            <div class="col-lg-3 col-sm-4 mb-4" style="margin-top: -20px;">
              <div style="display: flex; align-items: center; justify-content: center; width: 100%; flex-direction: column;">
                <h6 style="font-size: 14px; color: rgb(43, 42, 42);">تغییر عکس پرفایل</h6>
                <input
                 
                  type="file"
                  ref="fileInput"
                  style="display: none"
                  @change="onFileChange"
                />

                <div @click="openFileInput" >
                  <img
                    :src="selectedImage"
                    alt="انتخاب عکس پرفایل"
                    style="
                      width: 129px;
                      height: 129px;
                      border-radius: 5px;
                      cursor: pointer;
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        
          <div class="border rounded-3 p-3 mb-4" id="personal-info">
            <!-- Name-->
            <div class="border-bottom pb-3 mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="ps-2">
                  <label class="form-label fw-bold">نام کامل</label>
                  <div id="name-value">{{ name }}</div>
                </div>
                <div class="me-n3" data-bs-toggle="tooltip" title="ویرایش">
                  <a
                    class="nav-link py-0"
                    href="#name-collapse"
                    data-bs-toggle="collapse"
                    ><i class="fi-edit"></i
                  ></a>
                </div>
              </div>
              <div
                class="collapse"
                id="name-collapse"
                data-bs-parent="#personal-info"
              >
                <input
                  ref="nameInput"
                  v-model="name"
                  class="form-control mt-3"
                  type="text"
                
                  value="Annette Black"
                />
              </div>
            </div>
            <!-- Email-->
            <div class="border-bottom pb-3 mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="ps-2">
                  <label class="form-label fw-bold">پست الکترونیکی</label>
                  <div id="email-value">{{ email }}</div>
                </div>
                <div class="me-n3" data-bs-toggle="tooltip" title="ویرایش">
                  <a
                    class="nav-link py-0"
                    href="#email-collapse"
                    data-bs-toggle="collapse"
                    ><i class="fi-edit"></i
                  ></a>
                </div>
              </div>
              <div
                class="collapse"
                id="email-collapse"
                data-bs-parent="#personal-info"
              >
                <input
                ref="emailInput"
                  v-model="email"
                  class="form-control mt-3"
                  type="email"
                  value="annette_black@email.com"
                />
              </div>
            </div>
            <!-- Phone number-->
            <div class="border-bottom pb-3 mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="ps-2">
                  <label class="form-label fw-bold">شماره تماس</label>
                  <div id="phone-value">{{ phone }}</div>
                </div>
                <div class="me-n3" data-bs-toggle="tooltip" title="ویرایش">
                  <a
                    class="nav-link py-0"
                    href="#phone-collapse"
                    data-bs-toggle="collapse"
                    ><i class="fi-edit"></i
                  ></a>
                </div>
              </div>
              <div
                class="collapse"
                id="phone-collapse"
                data-bs-parent="#personal-info"
              >
                <input
                  class="form-control mt-3"
                  ref="phoneInput"
                  type="text"
                  v-model="phone"
                  value="(302) 555-0107"
                />
              </div>
            </div>
            <!-- Company name-->
            <div class="border-bottom pb-3 mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="ps-2">
                  <label class="form-label fw-bold">نام شرکت</label>
                  <div id="company-value"> {{ company }}</div>
                </div>
                <div class="me-n3" data-bs-toggle="tooltip" title="ویرایش">
                  <a
                    class="nav-link py-0"
                    href="#company-collapse"
                    data-bs-toggle="collapse"
                    ><i class="fi-edit"></i
                  ></a>
                </div>
              </div>
              <div
                class="collapse"
                id="company-collapse"
                data-bs-parent="#personal-info"
              >
                <input
                  class="form-control mt-3"
                  type="text"
                  ref="companyInput"
                  v-model="company"
                  placeholder="Enter company name"
                />
              </div>
            </div>
            <!-- Address-->
            <div>
              <div class="d-flex align-items-center justify-content-between">
                <div class="ps-2">
                  <label class="form-label fw-bold">آدرس</label>
                  <div id="address-value">{{ address }}</div>
                </div>
                <div class="me-n3" data-bs-toggle="tooltip" title="ویرایش">
                  <a
                    class="nav-link py-0"
                    href="#address-collapse"
                    data-bs-toggle="collapse"
                    ><i class="fi-edit"></i
                  ></a>
                </div>
              </div>
              <div
                class="collapse"
                id="address-collapse"
                data-bs-parent="#personal-info"
              >
                <input
                  class="form-control mt-3"
                  type="text"
                  v-model="address"
                  ref="addressInput"
                  placeholder="Enter address"
                />
              </div>
            </div>
          </div>
          <!-- Socials-->
          <div class="pt-2">
            <label class="form-label fw-bold mb-3">شبکه های اجتماعی</label>
          </div>
          <div class="d-flex align-items-center mb-3">
            <div
              class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3"
            >
              <i class="fi-facebook text-body"></i>
            </div>
            <input
              v-model="fecebook"
      
              class="form-control"
              type="text"
              placeholder="اکانت فیسبوک"
            />
          </div>
          <div class="d-flex align-items-center mb-3">
            <div
              class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3"
            >
              <i class="fi-linkedin text-body"></i>
            </div>
            <input
              class="form-control"
              type="text"
              placeholder="اکانت لینکدین"
              v-model="linkdien"
            />
          </div>
          <div class="d-flex align-items-center mb-3">
            <div
              class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3"
            >
              <i class="fi-twitter text-body"></i>
            </div>
            <input
              class="form-control"
              type="text"
              placeholder="اکانت توییتر"
              v-model="twitter"
            />
          </div>
          <div class="collapse" id="showMoreSocials">
            <div class="d-flex align-items-center mb-3">
              <div
                class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3"
              >
                <i class="fi-instagram text-body"></i>
              </div>
              <input
                class="form-control"
                type="text"
                placeholder="اکانت اینستاگرام"
                v-model="instagram"
              />
            </div>
           
          </div>
          <a
            class="collapse-label collapsed d-inline-block fs-sm fw-bold text-decoration-none pt-2 pb-3"
            href="#showMoreSocials"
            data-bs-toggle="collapse"
            data-bs-label-collapsed="مشاهده بیشتر"
            data-bs-label-expanded="بستن"
            role="button"
            aria-expanded="false"
            aria-controls="showMoreSocials"
            ><i class="fi-arrow-down me-2"></i
          ></a>
          <div
            class="d-flex align-items-center justify-content-between border-top mt-4 pt-4 pb-1"
          >
            <button class="btn btn-primary px-3 px-sm-4" type="button" @click="saveChanges">
              ذخیره تغییرات
            </button>
          
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
      selectedImage: "/avatars/03.jpg",
      name: "Annette Black",
      email : "annette_black@email.com",
      bio : "",
      phone : "(302) 555-0107",
      company : "نام شرکت را وارد کنید",
      address : "آدرس را وارد کنید",
      fecebook : "",
      linkdien : "",
      twitter : "",
      instagram : "",

    };
  },
  methods: {
    openFileInput() {
     
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    fetchProfile(){
      axios.get("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        console.log("fetchProfile" , res.data);
      })
      .catch((error) => {
        console.log(error);
      })
    },
    saveChanges() {
      let user = {

        name: this.name,
       email : this.email,
       bio : this.bio,
       phone : this.phone,
       company : this.company,
       address : this.address,
       fecebook : this.fecebook,
       linkdien : this.linkdien,
       twitter : this.twitter,
       instagram : this.instagram,
      }
     axios.post("https://jsonplaceholder.typicode.com/posts", user)
     .then((response) => {
       console.log(response.data);
      
     })
     .catch((error) => {
       console.error(error);
      
     });
   },
  
    
  },
  
  mounted(){
    this.fetchProfile();
  }
};
</script>
<style scoped></style>
