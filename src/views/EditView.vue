<template>
  <div>
    <!-- Preview modal-->
    <div class="modal fade" id="preview-modal" tabindex="-1">
      <div class="modal-dialog modal-fullscreen" role="document">
        <div class="modal-content">
          <div class="modal-header d-block d-sm-flex">
            <h3 class="h5 text-muted fw-normal modal-title d-none d-sm-block">
              پیش نمایش ملک
            </h3>
            <div class="d-flex align-items-center">
              <a class="btn btn-primary btn-sm me-4" href="/plan"
                >ذخیره و ادامه</a
              ><span class="fs-xs text-muted ms-auto me-2">بستن</span>
              <button
                class="btn-close me-0"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
          </div>
          <div class="modal-body p-0">
            <div class="container mt-2 mt-sm-0 py-4 py-sm-5">
              <h1 class="h2 mb-2">ویلا بلوک آبشار</h1>
              <p class="mb-2 pb-1 fs-base">ایران، استان تهران، خیابان آزادی</p>
              <ul class="d-flex mb-4 list-unstyled">
                <li class="me-3 pe-3 border-end">
                  <b class="me-1">4</b
                  ><i class="fi-bed mt-n1 lead align-middle text-muted"></i>
                </li>
                <li class="me-3 pe-3 border-end">
                  <b class="me-1">2</b
                  ><i class="fi-bath mt-n1 lead align-middle text-muted"></i>
                </li>
                <li class="me-3 pe-3 border-end">
                  <b class="me-1">2</b
                  ><i class="fi-car mt-n1 lead align-middle text-muted"></i>
                </li>
                <li><b>560 </b> مترمربع</li>
              </ul>
              <div class="overflow-auto pb-3 px-2 mx-n2 mb-4" data-simplebar>
                <div class="row g-2 g-md-3" style="min-width: 30rem">
                  <div class="col-8">
                    <img
                      class="rounded rounded-md-3"
                      src="/real-estate/single/01.jpg"
                      alt="Gallery thumbnail"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="rounded rounded-md-3 mb-2 mb-md-3"
                      src="/real-estate/single/02.jpg"
                      alt="Gallery thumbnail"
                    /><img
                      class="rounded rounded-md-3"
                      src="/real-estate/single/03.jpg"
                      alt="Gallery thumbnail"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-7 mb-md-0 mb-4">
                  <span class="badge bg-success me-2 mb-3">تایید</span
                  ><span class="badge bg-info me-2 mb-3">جدید</span>
                  <h2 class="h3 mb-4 pb-4 border-bottom">
                    2000000 ت<span
                      class="d-inline-block ms-1 fs-base fw-normal text-body"
                      >/ماهیانه</span
                    >
                  </h2>
                  <!-- Overview-->
                  <div class="mb-4 pb-md-3">
                    <h3 class="h4">اطلاعات عمومی</h3>
                    <p class="mb-1">
                      لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
                      استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را
                      در بر می گیرد.لورم ایپسوم ساختار چاپ و متن را در بر می
                      گیرد. لورم ایپسوم استاندارد صنعت بوده است. لورم ایپسوم
                      ساختار چاپ و متن را در بر می گیرد.
                    </p>
                    <div class="collapse" id="seeMoreOverview">
                      <p class="mb-1">
                        لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم
                        ایپسوم استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و
                        متن را در بر می گیرد.لورم ایپسوم ساختار چاپ و متن را در
                        بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است. لورم
                        ایپسوم ساختار چاپ و متن را در بر می گیرد.
                      </p>
                    </div>
                    <a
                      class="collapse-label collapsed"
                      href="#seeMoreOverview"
                      data-bs-toggle="collapse"
                      data-bs-label-collapsed="مشاهده بیشتر"
                      data-bs-label-expanded="بستن"
                      role="button"
                      aria-expanded="false"
                      aria-controls="seeMoreOverview"
                    ></a>
                  </div>
                  <!-- Property Details-->
                  <div class="mb-4 pb-md-3">
                    <h3 class="h4">جزئیات ملک</h3>
                    <ul class="list-unstyled mb-0">
                      <li><b>نوع: </b>آپارتمان</li>
                      <li><b>متراژ: </b>150 مترمربع</li>
                      <li><b>سال ساخت: </b>1380</li>
                      <li><b>تعداد اتاق خواب: </b>4</li>
                      <li><b>تعداد سرویس بهداشتی: </b>2</li>
                      <li><b>پارکینگ: </b>دارد</li>
                      <li><b>بالکن: </b>ندارد</li>
                    </ul>
                  </div>
                  <!-- Amenities-->
                  <div class="mb-sm-3">
                    <h3 class="h4">امکانات رفاهی</h3>
                    <ul
                      class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap"
                    >
                      <li class="col">
                        <i class="fi-wifi mt-n1 me-2 fs-lg align-middle"></i>وای
                        فای
                      </li>
                      <li class="col">
                        <i
                          class="fi-thermometer mt-n1 me-2 fs-lg align-middle"
                        ></i
                        >سیستم گرمایشی
                      </li>
                      <li class="col">
                        <i class="fi-dish mt-n1 me-2 fs-lg align-middle"></i
                        >استخر
                      </li>
                      <li class="col">
                        <i class="fi-parking mt-n1 me-2 fs-lg align-middle"></i
                        >پارکینگ
                      </li>
                      <li class="col">
                        <i
                          class="fi-snowflake mt-n1 me-2 fs-lg align-middle"
                        ></i
                        >تهویه هوا
                      </li>
                      <li class="col">
                        <i class="fi-iron mt-n1 me-2 fs-lg align-middle"></i>گاز
                        رومیزی
                      </li>
                      <li class="col">
                        <i class="fi-tv mt-n1 me-2 fs-lg align-middle"></i
                        >تلویزیون
                      </li>
                      <li class="col">
                        <i class="fi-laundry mt-n1 me-2 fs-lg align-middle"></i
                        >ماشین لباسشویی
                      </li>
                      <li class="col">
                        <i class="fi-cctv mt-n1 me-2 fs-lg align-middle"></i
                        >دوربین مداربسته
                      </li>
                    </ul>
                    <div class="collapse" id="seeMoreAmenities">
                      <ul
                        class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap"
                      >
                        <li class="col">
                          <i
                            class="fi-no-smoke mt-n1 me-2 fs-lg align-middle"
                          ></i
                          >سیگار ممنوع
                        </li>
                        <li class="col">
                          <i class="fi-pet mt-n1 me-2 fs-lg align-middle"></i
                          >گربه
                        </li>
                        <li class="col">
                          <i
                            class="fi-swimming-pool mt-n1 me-2 fs-lg align-middle"
                          ></i
                          >استخر
                        </li>
                        <li class="col">
                          <i
                            class="fi-double-bed mt-n1 me-2 fs-lg align-middle"
                          ></i
                          >2 خواب
                        </li>
                        <li class="col">
                          <i class="fi-bed mt-n1 me-2 fs-lg align-middle"></i>1
                          خواب
                        </li>
                      </ul>
                    </div>
                    <a
                      class="collapse-label collapsed"
                      href="#seeMoreAmenities"
                      data-bs-toggle="collapse"
                      data-bs-label-collapsed="مشاهده بیشتر"
                      data-bs-label-expanded="بستن"
                      role="button"
                      aria-expanded="false"
                      aria-controls="seeMoreAmenities"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page container-->
    <div class="container mt-5 mb-md-4 py-5">
      <div class="row">
        <!-- Page content-->
        <div class="col-lg-8 add-property">
          <!-- Breadcrumb-->
          <nav class="mb-3 pt-md-3" aria-label="Breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">خانه</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                ویرایش ملک
              </li>
            </ol>
          </nav>
          <!-- Title-->
          <div class="mb-4">
            <h1 class="h2 mb-0">ویرایش ملک</h1>
            <div class="d-lg-none pt-3 mb-2">65% اطلاعات تکمیل شده است.</div>
            <div class="progress d-lg-none mb-4" style="height: 0.25rem">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style="width: 65%"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <!-- Basic info-->
         
            <section
            v-for="item in filteredItems" :key="item.id"
              class="card card-body border-0 shadow-sm p-4 mb-4"
              id="basic-info"
            >
              <h2 class="h5 mb-4">
                <i class="fi-info-circle text-primary fs-5 mt-n1 me-2"></i>اطلاعات
                پایه
              </h2>
              <h2 class="h5 mb-4">
               
                {{ item.type2 }}
              </h2>
              <div class="mb-3">
                <label class="form-label" for="ap-title"
                  >نام ملک <span class="text-danger">*</span></label
                >
                <input
                  class="form-control"
                  type="text"
                  id="ap-title"
                  placeholder="نام ملک"
                  v-model="item.type2"
                  required
                /><span class="form-text">48 کاراکتر باقی مانده است </span>
              </div>
              <div class="row">
                <div class="col-sm-6 mb-3">
                  <label class="form-label" for="ap-category"
                    >دسته بندی <span class="text-danger">*</span></label
                  >
                  <select class="form-select" id="ap-category" required>
                    <option value="" disabled hidden>انتخاب دسته بندی</option>
                    <option value="Rent">اجاره</option>
                    <option value="Sell">فروش</option>
                  </select>
                </div>
                <div class="col-sm-6 mb-3">
                  <label class="form-label" for="ap-type"
                    >نوع ملک <span class="text-danger">*</span></label
                  >
                  <select class="form-select" id="ap-type" required>
                    <option value="" disabled hidden>انتخاب نوع ملک</option>
                    <option value="Apartment">آپارتمان</option>
                    <option value="House">خانه</option>
                    <option value="Commercial">اداری</option>
                    <option value="Commercial">سوئیت</option>
                    <option value="New building">آپارتمان نوساز</option>
                  </select>
                </div>
              </div>
              <div class="form-label fw-bold pt-3 pb-2">
                آیا به عنوان یک شخص حقوقی آگهی ثبت می کنید؟
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="ap-company"
                  name="ap-business-type"
                />
                <label class="form-check-label" for="ap-company"
                  >ملک تجاری می باشد.</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="ap-individual"
                  name="ap-business-type"
                  checked
                />
                <label class="form-check-label" for="ap-individual"
                  >ملک شخصی می باشد.</label
                >
              </div>
            </section>
          
          
          <!-- Location-->
          <section
            class="card card-body border-0 shadow-sm p-4 mb-4"
            id="location"
          >
            <h2 class="h5 mb-4">
              <i class="fi-map-pin text-primary fs-5 mt-n1 me-2"></i>موقعیت
              مکانی
            </h2>
            <div class="row">
              <div class="col-sm-6 mb-3">
                <label class="form-label" for="ap-country">
                  استان <span class="text-danger">*</span></label
                >
                <select class="form-select" id="ap-country" required>
                  <option value="" disabled>انتخاب استان</option>
                  <option value="Australia" selected>خراسان شمالی</option>
                  <option value="Belgium">خراسان رضوی</option>
                  <option value="Canada">تهران</option>
                  <option value="Germany">اصفهان</option>
                  <option value="United States">آذربایجان شرقی</option>
                </select>
              </div>
              <div class="col-sm-6 mb-3">
                <label class="form-label" for="ap-city"
                  >شهر <span class="text-danger">*</span></label
                >
                <select class="form-select" id="ap-city" required>
                  <option value="" disabled>انتخاب شهر</option>
                  <option value="Chicago" selected>بجنورد</option>
                  <option value="Dallas">مشهد</option>
                  <option value="Los Angeles">تهران</option>
                  <option value="New York">اصفهان</option>
                  <option value="San Diego">تبریز</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-8 mb-3">
                <label class="form-label" for="ap-district"
                  >منطقه <span class="text-danger">*</span></label
                >
                <select class="form-select" id="ap-district" required>
                  <option value="" disabled>انتخاب منطقه</option>
                  <option value="Brooklyn">منطقه 1</option>
                  <option value="Manhattan">منطقه 2</option>
                  <option value="Staten Island">منطقه 3</option>
                  <option value="The Bronx">منطقه 4</option>
                  <option value="Queens" selected>منطقه 5</option>
                </select>
              </div>
              <div class="col-sm-4 mb-3">
                <label class="form-label" for="ap-zip"
                  >کد پستی <span class="text-danger">*</span></label
                >
                <input
                  class="form-control"
                  type="text"
                  id="ap-zip"
                  placeholder="Enter Zip code"
                  value="67234"
                  required
                />
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label" for="ap-address"
                >آدرس <span class="text-danger">*</span></label
              >
              <input
                class="form-control"
                type="text"
                id="ap-address"
                value="خیابان قائم مقام فراهانی پلاک 210"
                required
              />
            </div>
            <div class="form-label fw-bold pt-3 pb-2">نمایش روی نقشه</div>
            <mapComponent />
            <!-- map -->
          </section>
          <!-- Property details-->
          <section
            class="card card-body border-0 shadow-sm p-4 mb-4"
            id="details"
          >
            <h2 class="h5 mb-4">
              <i class="fi-edit text-primary fs-5 mt-n1 me-2"></i>جزئیات ملک
            </h2>
            <div class="mb-4" style="max-width: 25rem">
              <label class="form-label" for="ap-area"
                >مساحت کل بر اساس متر مربع</label
              >
              <input
                class="form-control"
                type="number"
                id="ap-area"
                min="20"
                placeholder="متراژ را وارد کنید"
                value="120"
                required
              />
            </div>
            <div class="mb-4">
              <label class="form-label d-block fw-bold mb-2 pb-1"
                >تعداد اتاق خواب</label
              >
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Choose number of bedrooms"
              >
                <input
                  class="btn-check"
                  type="radio"
                  id="studio"
                  name="bedrooms"
                />
                <label class="btn btn-outline-secondary fw-normal" for="studio"
                  >0</label
                >
                <input
                  class="btn-check"
                  type="radio"
                  id="bedrooms-1"
                  name="bedrooms"
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="bedrooms-1"
                  >1</label
                >
                <input
                  class="btn-check"
                  type="radio"
                  id="bedrooms-2"
                  name="bedrooms"
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="bedrooms-2"
                  >2</label
                >
                <input
                  class="btn-check"
                  type="radio"
                  id="bedrooms-3"
                  name="bedrooms"
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="bedrooms-3"
                  >3</label
                >
                <input
                  class="btn-check"
                  type="radio"
                  id="bedrooms-4"
                  name="bedrooms"
                  checked
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="bedrooms-4"
                  >4</label
                >
                <input
                  class="btn-check"
                  type="radio"
                  id="bedrooms-5"
                  name="bedrooms"
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="bedrooms-5"
                  >5+</label
                >
              </div>
            </div>
            <div class="mb-4">
              <label class="form-label d-block fw-bold mb-2 pb-1"
                >تعداد سرویس بهداشتی</label
              >
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Choose number of bathrooms"
              >
                <input
                  class="btn-check"
                  type="radio"
                  id="bathrooms-1"
                  name="bathrooms"
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="bathrooms-1"
                  >1</label
                >
                <input
                  class="btn-check"
                  type="radio"
                  id="bathrooms-2"
                  name="bathrooms"
                  checked
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="bathrooms-2"
                  >2</label
                >
                <input
                  class="btn-check"
                  type="radio"
                  id="bathrooms-3"
                  name="bathrooms"
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="bathrooms-3"
                  >3</label
                >
                <input
                  class="btn-check"
                  type="radio"
                  id="bathrooms-4"
                  name="bathrooms"
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="bathrooms-4"
                  >4</label
                >
              </div>
            </div>
            <div class="mb-4">
              <label class="form-label d-block fw-bold mb-2 pb-1"
                >تعداد پارکینگ</label
              >
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Choose number of parking spots"
              >
                <input
                  class="btn-check"
                  type="radio"
                  id="parking-1"
                  name="parking"
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="parking-1"
                  >1</label
                >
                <input
                  class="btn-check"
                  type="radio"
                  id="parking-2"
                  name="parking"
                  checked
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="parking-2"
                  >2</label
                >
                <input
                  class="btn-check"
                  type="radio"
                  id="parking-3"
                  name="parking"
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="parking-3"
                  >3</label
                >
                <input
                  class="btn-check"
                  type="radio"
                  id="parking-4"
                  name="parking"
                />
                <label
                  class="btn btn-outline-secondary fw-normal"
                  for="parking-4"
                  >4</label
                >
              </div>
            </div>
            <div class="mb-4">
              <label class="form-label d-block fw-bold mb-2 pb-1"
                >امکانات رفاهی</label
              >
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="wifi"
                      checked
                    />
                    <label class="form-check-label" for="wifi">وای فای</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="air-condition"
                      checked
                    />
                    <label class="form-check-label" for="air-condition"
                      >تهویه هوا</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="balcony"
                    />
                    <label class="form-check-label" for="balcony">بالکن</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="garage"
                    />
                    <label class="form-check-label" for="garage">گاراژ</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gym" />
                    <label class="form-check-label" for="gym"
                      >باشگاه بدنسازی</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="free-parking"
                      checked
                    />
                    <label class="form-check-label" for="free-parking"
                      >پارکینگ رایگان</label
                    >
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="pets-friendly"
                    />
                    <label class="form-check-label" for="pets-friendly"
                      >نگهداری حیوانات خانگی</label
                    >
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="pool" />
                    <label class="form-check-label" for="pool">استخر</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="bar" />
                    <label class="form-check-label" for="bar"
                      >دسترسی به مترو</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="tv"
                      checked
                    />
                    <label class="form-check-label" for="tv">تلویزیون</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="linens"
                      checked
                    />
                    <label class="form-check-label" for="linens">تراس</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="heating"
                      checked
                    />
                    <label class="form-check-label" for="heating"
                      >سیستم گرمایشی</label
                    >
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="dishwasher"
                    />
                    <label class="form-check-label" for="dishwasher"
                      >ماشین لباسشویی</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="iron"
                      checked
                    />
                    <label class="form-check-label" for="iron"
                      >گاز رومیزی</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="hair-dryer"
                      checked
                    />
                    <label class="form-check-label" for="hair-dryer"
                      >آسانسور</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="kitchen"
                      checked
                    />
                    <label class="form-check-label" for="kitchen"
                      >آشپزخانه</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="breakfast"
                    />
                    <label class="form-check-label" for="breakfast"
                      >صبحانه</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="security-cameras"
                    />
                    <label class="form-check-label" for="security-cameras"
                      >دوربین مداربسته</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-4">
              <label class="form-label d-block fw-bold mb-2 pb-1"
                >نگهداری حیوانات خانگی</label
              >
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="allow-cats"
                    />
                    <label class="form-check-label" for="allow-cats"
                      >گربه مجاز است</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="allow-dogs"
                    />
                    <label class="form-check-label" for="allow-dogs"
                      >سگ مجار است</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <label class="form-label" for="ap-description">توضیحات </label>
            <textarea
              class="form-control"
              id="ap-description"
              rows="5"
              placeholder="ملک خود را شرح دهید"
            ></textarea
            ><span class="form-text">1500 کاراکتر باقی مانده است</span>
          </section>
          <!-- Price-->
          <section
            class="card card-body border-0 shadow-sm p-4 mb-4"
            id="price"
          >
            <h2 class="h5 mb-4">
              <i class="fi-cash text-primary fs-5 mt-n1 me-2"></i>قیمت
            </h2>
            <label class="form-label" for="ap-price"
              >قیمت <span class="text-danger">*</span></label
            >
            <div class="d-sm-flex">
              <input
                class="form-control w-100 me-2 mb-2"
                type="number"
                id="ap-price"
                min="200"
                step="50"
                required
              />
              <select class="form-select w-50 me-2 mb-2">
                <option value="usd">تومان</option>
                <option value="eur">یورو</option>
                <option value="gbp">دلار</option>
                <option value="jpy">پوند</option>
              </select>
              <select class="form-select w-50 mb-2">
                <option value="day">روزانه</option>
                <option value="week">هفتگی</option>
                <option value="month" selected>ماهیانه</option>
                <option value="year">سالیانه</option>
              </select>
            </div>
          </section>
          <!-- Photos / video-->
          <section
            class="card card-body border-0 shadow-sm p-4 mb-4"
            id="photos"
          >
            <h2 class="h5 mb-4">
              <i class="fi-image text-primary fs-5 mt-n1 me-2"></i>عکس / ویدئو
            </h2>
            <div class="alert alert-info mb-4" role="alert">
              <div class="d-flex">
                <i class="fi-alert-circle me-2 me-sm-3"></i>
                <p class="fs-sm mb-1">
                  حداکثر حجم عکس 8 مگابایت است. فرمت ها: jpeg ، jpg ، png. ابتدا
                  تصویر اصلی را قرار دهید.<br />حداکثر حجم فیلم 10 مگابایت است.
                  فرمت ها: mp4 ، mov.
                </p>
              </div>
            </div>

            <div
              class="file-input"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <input
                type="file"
                name="file-input"
                id="file-input"
                class="file-input__input"
              />
              <label class="file-input__label" for="file-input">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="upload"
                  class="svg-inline--fa fa-upload fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path>
                </svg>
                <span>آپلود عکس و ویدئو </span></label
              >
            </div>
          </section>
          <!-- Contacts-->
          <section
            class="card card-body border-0 shadow-sm p-4 mb-4"
            id="contacts"
          >
            <h2 class="h5 mb-4">
              <i class="fi-phone text-primary fs-5 mt-n1 me-2"></i>تماس با ما
            </h2>
            <div class="row">
              <div class="col-sm-6 mb-3">
                <label class="form-label" for="ap-fn"
                  >نام <span class="text-danger">*</span></label
                >
                <input
                  class="form-control"
                  type="text"
                  id="ap-fn"
                  value="آنت"
                  placeholder="نام خود را وارد کنید"
                  required
                />
              </div>
              <div class="col-sm-6 mb-3">
                <label class="form-label" for="ap-sn"
                  >نام خانوادگی <span class="text-danger">*</span></label
                >
                <input
                  class="form-control"
                  type="text"
                  id="ap-sn"
                  value="بلک"
                  placeholder="نام خانوادگی خود را وارد کنید"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 mb-3">
                <label class="form-label" for="ap-email"
                  >پست الکترونیکی<span class="text-danger">*</span></label
                >
                <input
                  class="form-control"
                  type="text"
                  id="ap-email"
                  value="annette_black@email.com"
                  placeholder="ایمیل"
                />
              </div>
              <div class="col-sm-6 mb-3">
                <label class="form-label" for="ap-phone"
                  >شماره تماس <span class="text-danger">*</span></label
                >
                <input
                  class="form-control"
                  type="tel"
                  id="ap-phone"
                  data-format="custom"
                  data-delimiter="-"
                  data-blocks="3 3 4"
                  value="302-555-0107"
                  placeholder="000-000-0000"
                />
              </div>
            </div>
            <label class="form-label" for="ap-company-name">نام شرکت</label>
            <input
              class="form-control"
              type="text"
              id="ap-company-name"
              placeholder="نام شرکت را وارد کنید"
            />
          </section>
          <!-- Action buttons -->
          <section class="d-sm-flex justify-content-between pt-2">
            <a
              class="btn btn-outline-primary btn-lg d-block ps-3 mb-3 mb-sm-2"
              href="#preview-modal"
              data-bs-toggle="modal"
              ><i class="fi-eye-on me-2"></i>پیش نمایش</a
            ><a
              class="btn btn-primary btn-lg d-block mb-2"
              href="real-estate-property-promotion.html"
              >ذخیره و ادامه</a
            >
          </section>
        </div>
        <!-- Progress of completion-->
        <aside class="col-lg-3 offset-lg-1 d-none d-lg-block">
          <div class="sticky-top pt-5">
            <h6 class="pt-5 mt-3 mb-2">65% محتوا تکمیل شده است.</h6>
            <div class="progress mb-4" style="height: 0.25rem">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style="width: 65%"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <ul class="list-unstyled">
              <li class="d-flex align-items-center">
                <i class="fi-check text-primary me-2"></i
                ><a
                  class="nav-link fw-normal ps-1 p-0"
                  href="#basic-info"
                  data-scroll
                  data-scroll-offset="20"
                  >اطلاعات شخصی</a
                >
              </li>
              <li class="d-flex align-items-center">
                <i class="fi-check text-primary me-2"></i
                ><a
                  class="nav-link fw-normal ps-1 p-0"
                  href="#location"
                  data-scroll
                  data-scroll-offset="20"
                  >موقعیت مکانی</a
                >
              </li>
              <li class="d-flex align-items-center">
                <i class="fi-check text-primary me-2"></i
                ><a
                  class="nav-link fw-normal ps-1 p-0"
                  href="#details"
                  data-scroll
                  >جزئیات ملک</a
                >
              </li>
              <li class="d-flex align-items-center">
                <i class="fi-check text-muted me-2"></i
                ><a
                  class="nav-link fw-normal ps-1 p-0"
                  href="#price"
                  data-scroll
                  data-scroll-offset="20"
                  >قیمت</a
                >
              </li>
              <li class="d-flex align-items-center">
                <i class="fi-check text-muted me-2"></i
                ><a
                  class="nav-link fw-normal ps-1 p-0"
                  href="#photos"
                  data-scroll
                  data-scroll-offset="20"
                  >عکس / ویدئو</a
                >
              </li>
              <li class="d-flex align-items-center">
                <i class="fi-check text-primary me-2"></i
                ><a
                  class="nav-link fw-normal ps-1 p-0"
                  href="#contacts"
                  data-scroll
                  data-scroll-offset="20"
                  >تماس با ما</a
                >
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
<script>
import mapComponent from "@/components/mapComponent.vue";
export default {
  components: {
    mapComponent,
  },
  data() {
    return {
      itemsPublished: [
        {
          id: 1,
          type: "اجاره",
          type2: "آپارتمان 4 خواب | 185 متر مربع",
          address: "ایران، تهران ، خیابان آزادی",
          price: "3000000",
          sleep: 3,
          room: 4,
          Parking: 2,
          imageUrl: "/real-estate/catalog/08.jpg",
          status: "جدید",
        },
        {
          id: 2,
          type: "فروش",
          type2: "آپارتمان 2 خواب | 115 متر مربع",
          address: "ایران، تهران ، خیابان آزادی",
          price: "2100000",
          sleep: 3,
          room: 2,
          Parking: 2,
          imageUrl: "/real-estate/catalog/22.jpg",
          status: "تایید",
        },
        {
          id: 3,
          type: "اجاره",
          type2: "ویلا شمال رامسر| 185 متر مربع",
          address: "ایران، رامسر ، خیابان آزادی",
          price: "2000000",
          sleep: 5,
          room: 2,
          Parking: 4,
          imageUrl: "/real-estate/catalog/10.jpg",
          status: "جدید",
        },
        {
          id : 4 , 
          type : "اجاره",
          type2 : "آپارتمان 2 خواب | 115 متر مربع",
          address : "ایران، تهران ، خیابان جمهوری",
          price : "3000000",
          sleep : 3,
          room : 4 ,
          Parking : 2,
          imageUrl : "/real-estate/catalog/09.jpg",
        },
        {
          id : 5 , 
          type : "فروش",
          type2 : "آپارتمان 3 خواب | 125 متر مربع",
          address : "ایران، تهران ، خیابان آزادی",
          price : "2100000",
          sleep : 3,
          room : 2 ,
          Parking : 2,
          imageUrl : "/real-estate/catalog/21.jpg",
        },
        {
          id : 6 , 
          type : "اجاره",
          type2 : "ویلا شمال کیش| 185 متر مربع",
          address : "ایران، کیش ، خیابان آزادی",
          price : "2000000",
          sleep : 5,
          room : 2 ,
          Parking : 4,
          imageUrl : "/real-estate/catalog/10.jpg",
        },
        {
          id : 7 , 
          type : "اجاره",
          type2 : "ویلا شمال قشم| 185 متر مربع",
          address : "ایران، قشم ، خیابان آزادی",
          price : "2000000",
          sleep : 5,
          room : 2 ,
          Parking : 4,
          imageUrl : "/real-estate/catalog/11.jpg",
        }
      ],
     
      filteredItems: [],

    };
  },
  created() {
    const productId = Number(this.$route.params.productId);
  
    this.filteredItems = this.itemsPublished.filter(item => item.id == productId);
   
    console.log("filter",this.filteredItems);
    console.log(productId);

  },
};
</script>
<style scoped>
.file-input__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.file-input__label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  font-size: 14px;
  padding: 10px 12px;
  background-color: #4245a8;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
}

.file-input__label svg {
  height: 16px;
  margin-right: 4px;
}
</style>
