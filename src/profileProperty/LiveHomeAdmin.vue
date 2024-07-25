<template>
    <div>
      <div class="container pt-5 pb-lg-4 mt-5 mb-sm-2">
        <!-- Breadcrumb-->
        <nav class="mb-4 pt-md-3" aria-label="Breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/">بازگشت به صفحه اصلی</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/realstate/profileUsers">حساب کاربری</a>
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
                class="btn btn-outline-secondary d-block d-md-none w-100 mb-3"
                href="#account-nav"
                data-bs-toggle="collapse"
                ><i class="fi-align-justify me-2"></i>منو</a
              >
              <div class="collapse d-md-block mt-3" id="account-nav">
                <div class="card-nav">
                  <a class="card-nav-link" href="/realstate/profileUsers"
                    ><i class="fi-user opacity-60 me-2"></i> صفحه اصلی پرفایل</a
                  ><a
                    class="card-nav-link"
                    href="/realstate/adminPassword"
                    ><i class="fi-lock opacity-60 me-2"></i>گذرواژه و امنیتی</a
                  ><a
                    class="card-nav-link"
                    href="/realstate/myHome"
                    ><i class="fi-home opacity-60 me-2"></i>لیست املاک من</a
                  ><a
                    class="card-nav-link active"
                    href="/realstate/liveHomeAdmin"
                    ><i class="fi-heart opacity-60 me-2"></i>موردعلاقه ها</a
                  ><a
                    class="card-nav-link"
                    href="/realstate/commentsAdmin"
                    ><i class="fi-star opacity-60 me-2"></i>صندوق پیام</a
                  ><a
                    class="card-nav-link"
                    href="/notification"
                    ><i class="fi-bell opacity-60 me-2"></i>لیست تراکنش های مالی</a
                  ><a class="card-nav-link" href="/support"
                    ><i class="fi-help opacity-60 me-2"></i>شارژ کیف پول</a
                  ><a class="card-nav-link" href="#"
                    ><i class="fi-logout opacity-60 me-2"></i>خروج</a
                  >
                </div>
              </div>
            </div>
          </aside>
          <!-- Content-->
          <div class="col-lg-8 col-md-7 mb-5">
            <div
              class="d-flex align-items-center justify-content-between mb-4 pb-2"
            >
              <h1 class="h2 mb-0">لیست مورد علاقه ها</h1>
             
            </div>
            <!-- Item-->
        
            <div v-for="item in liveHome" :key="item.id" class="card card-hover card-horizontal border-0 shadow-sm mb-4">
              <div
                class="card-img-top position-relative"
                :style="{ 'background-image': 'url(' + item.imageUrl + ')' }"
              >
                <a class="stretched-link" href="real-estate-single-v1.html"></a>
                <div class="position-absolute start-0 top-0 pt-3 ps-3">
                  <span class="d-table badge bg-success mb-1">{{ item.type }}</span
                  ><span class="d-table badge bg-info">{{ item.status }}</span>
                </div>
                <div class="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                  <button
                    class="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="حذف از مورد علاقه"
                    @click="removeFromFavorites(item.id)"
                  >
                    <i class="fi-heart-filled"></i>
                  </button>
                </div>
              </div>
              <div class="card-body position-relative pb-3">
                <div class="d-flex justify-content-between align-items-center">
                  <h4 class="mb-1 fs-sm fw-normal text-uppercase text-primary">
                  {{ item.type3 }}
                </h4>
               
                </div>
                <h3 class="h6 mb-2 fs-base">
                  <p
                    class="nav-link stretched-link"
                  >
                      {{ item.type2 }}
                  </p>
                  
                </h3>
                <p class="mb-2 fs-sm text-muted">{{ item.address }}</p>
                <div>
                  <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i
                  >شروع قیمت از {{ item.price }} ت
                </div>
                <div
                  class="d-flex align-items-center justify-content-center justify-content-sm-start border-top pt-3 pb-2 mt-3 text-nowrap"
                >
                 
                 <span class="d-inline-block me-4 fs-sm"
                    >{{ item.room }}<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span
                  ><span class="d-inline-block fs-sm"
                    >{{ item.Parking }}<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i
                  ></span>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
    import axios  from 'axios';
       export default {
   
    data() {
      return {
        liveHome: [
          {
            id: 1,
            type: "فعال",
            type2: "آپارتمان 4 خواب | 185 متر مربع",
            address: "ایران، تهران ، خیابان آزادی",
            price: "3000000",
            sleep: 3,
            room: 4,
            Parking: 2,
            imageUrl: "/real-estate/catalog/08.jpg",
            status: "جدید",
            type3 : "فروش",
            isActive : true
          },
          {
            id: 2,
            type: "فعال",
            type2: "آپارتمان 2 خواب | 115 متر مربع",
            address: "ایران، تهران ، خیابان آزادی",
            price: "2100000",
            sleep: 3,
            room: 2,
            Parking: 2,
            imageUrl: "/real-estate/catalog/22.jpg",
            status: "غیرفعال",
            type3 : "اجاره",
            isActive : true
          },
          {
            id: 3,
            type: "فعال",
            type2: "ویلا شمال رامسر| 185 متر مربع",
            address: "ایران، رامسر ، خیابان آزادی",
            price: "2000000",
            sleep: 5,
            room: 2,
            Parking: 4,
            imageUrl: "/real-estate/catalog/10.jpg",
            status: "جدید",
            type3 : "فروش",
            isActive : true
          },
          {
            id : 4 , 
            type : "پیش نویس",
            type2 : "آپارتمان 2 خواب | 115 متر مربع",
            address : "ایران، تهران ، خیابان جمهوری",
            price : "3000000",
            sleep : 3,
            room : 4 ,
            Parking : 2,
            imageUrl : "/real-estate/catalog/09.jpg",
            type3 : "فروش",
            status: "3سال پیش",
            isActive : true
          },
          {
            id : 5 , 
            type : "آرشیو",
            type2 : "آپارتمان 3 خواب | 125 متر مربع",
            address : "ایران، تهران ، خیابان آزادی",
            price : "2100000",
            sleep : 3,
            room : 2 ,
            Parking : 2,
            imageUrl : "/real-estate/catalog/21.jpg",
            type3 : "اجاره",
            status: "جدید",
            isActive : true
          },
          {
            id : 6 , 
            type : "فعال",
            type2 : "ویلا شمال کیش| 185 متر مربع",
            address : "ایران، کیش ، خیابان آزادی",
            price : "2000000",
            sleep : 5,
            room : 2 ,
            Parking : 4,
            imageUrl : "/real-estate/catalog/16.jpg",
            type3 : "فروش",
            status: "2سال پیش",
            isActive : true
          },
         
        ],
       
     
  
      };
    },
    methods: {
      removeFromFavorites(itemId) {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
          .then(response => {
            console.log(`محصول با شناسه ${itemId} از علاقه مندی‌ها حذف شد.`);
          })
          .catch(error => {
            console.error(`خطا در حذف محصول با شناسه ${itemId}:`, error);
          });
      }
    }
  };
  </script>
  <style scoped></style>
  