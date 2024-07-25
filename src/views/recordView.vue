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
              <a data-bs-dismiss="modal" class="btn btn-primary btn-sm me-4"  href="#"
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
              <h1 class="h2 mb-2">{{ this.propertyTitle }}</h1>
              <p class="mb-2 pb-1 fs-base">{{ this.addressInput }}</p>
              <ul class="d-flex mb-4 list-unstyled">
                <li class="me-3 pe-3 border-end">
                  <b class="me-1">{{ this.selectedBedrooms }}</b
                  ><i class="fi-bed mt-n1 lead align-middle text-muted"></i>
                </li>
                <li class="me-3 pe-3 border-end">
                  <b class="me-1">{{ this.service }}</b
                  ><i class="fi-bath mt-n1 lead align-middle text-muted"></i>
                </li>
                <li class="me-3 pe-3 border-end">
                  <b class="me-1">{{ this.parking }}</b
                  ><i class="fi-car mt-n1 lead align-middle text-muted"></i>
                </li>
                <li>
                  <b>{{ this.meterageInput }} </b> مترمربع
                </li>
              </ul>
              <div class="overflow-auto pb-3 px-2 mx-n2 mb-4" data-simplebar>
                <div class="row g-2 g-md-3" style="min-width: 30rem">
                  <div class="col-8">
                    <img
                      v-if="
                        imageUrls.length > 0 &&
                        (videoUrls.length === 0 || !videoUrls[0])
                      "
                      width="100%"
                      height="510px"
                      :src="imageUrls[0]"
                      alt=""
                    />
                    <video
                      v-if="videoUrls.length > 0 && videoUrls[0]"
                      width="100%"
                      height="610px"
                      style="margin-top: -75px;"
                      controls
                    >
                      <source :src="videoUrls[0]" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div class="col-4">
                    <img
                      v-if="imageUrls.length > 0"
                      width="100%"
                      height="200px"
                      :src="imageUrls[0]"
                      alt=""
                    />
                    <img
                      v-if="imageUrls.length > 1"
                      width="100%"
                      height="200px"
                      style="margin-top: 15px"
                      :src="imageUrls[1]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-7 mb-md-0 mb-4">
                  <span class="badge bg-success me-2 mb-3">تایید</span
                  ><span class="badge bg-info me-2 mb-3">جدید</span>
                  <h2 class="h3 mb-4 pb-4 border-bottom">
                    {{ price.value }}

                    <span
                      class="d-inline-block ms-1 fs-base fw-normal text-body"
                      v-if="price.currency === 'toman'"
                      >/تومان</span
                    >
                    <span
                      class="d-inline-block ms-1 fs-base fw-normal text-body"
                      v-else-if="price.currency === 'dollar'"
                      >/دلار</span
                    >
                    <span
                      class="d-inline-block ms-1 fs-base fw-normal text-body"
                      v-if="price.duration === 'day'"
                      >/روزانه</span
                    >
                    <span
                      class="d-inline-block ms-1 fs-base fw-normal text-body"
                      v-else-if="price.duration === 'week'"
                      >/هفتگی</span
                    >
                    <span
                      class="d-inline-block ms-1 fs-base fw-normal text-body"
                      v-else-if="price.duration === 'month'"
                      >/ماهیانه</span
                    >
                    <span
                      class="d-inline-block ms-1 fs-base fw-normal text-body"
                      v-else-if="price.duration === 'year'"
                      >/سالیانه</span
                    >
                  </h2>
                  <!-- Overview-->
                  <div class="mb-4 pb-md-3">
                    <h3 class="h4">توضیحات در مورد ملک</h3>
                    <p class="mb-1">
                      {{ dicText }}
                    </p>
                  </div>
                  <!-- Property Details-->
                  <div class="mb-4 pb-md-3">
                    <h3 class="h4">جزئیات ملک</h3>
                    <ul class="list-unstyled mb-0">
                      <li><b>نوع: </b>{{ propertyType }}</li>
                      <li><b>متراژ: </b>{{ meterageInput }} مترمربع</li>
                      <li><b>تعداد اتاق خواب: </b>{{ selectedBedrooms }}</li>
                      <li><b>تعداد سرویس بهداشتی: </b>{{ service }}</li>
                      <li><b>پارکینگ: </b>{{ parking }}</li>
                    </ul>
                  </div>
                  <!-- Amenities-->
                  <div class="mb-sm-3">
                    <h3 class="h4">امکانات رفاهی</h3>
                    <ul
                      class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap"
                    >
                      <li
                        v-for="(item, index) in selectedCheckboxes"
                        class="col"
                        :key="index"
                      >
                        <i
                          class="mt-n1 me-2 fs-lg align-middle"
                          :class="item.icon"
                        ></i>
                        {{ item.name }}
                      </li>
                    </ul>
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
                ثبت ملک
              </li>
            </ol>
          </nav>
          <!-- Title-->
          <div class="mb-4">
            <h1 class="h2 mb-0">ثبت ملک جدید</h1>
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
            class="card card-body border-0 shadow-sm p-4 mb-4"
            id="basic-info"
          >
            <h2 class="h5 mb-4">
              <i class="fi-info-circle text-primary fs-5 mt-n1 me-2"></i>اطلاعات
              پایه
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
                value="اقامتگاه ویلایی"
                v-model="propertyTitle"
                required
              />
              <span class="form-text">48 کاراکتر باقی مانده است </span>
            </div>
            <div class="row">
              <div class="col-sm-6 mb-3">
                <label class="form-label" for="ap-category"
                  >دسته بندی <span class="text-danger">*</span></label
                >
                <select
                  class="form-select"
                  v-model="propertyCategory"
                  id="ap-category"
                  required
                >
                  <option value="" disabled hidden>انتخاب دسته بندی</option>
                  <option value="اجاره">اجاره</option>
                  <option value="فروش">فروش</option>
                </select>
              </div>
              <div class="col-sm-6 mb-3">
                <label class="form-label" for="ap-type"
                  >نوع ملک <span class="text-danger">*</span></label
                >
                <select
                  class="form-select"
                  id="ap-type"
                  v-model="propertyType"
                  required
                >
                  <option value="" disabled hidden>انتخاب نوع ملک</option>
                  <option value="آپارتمان">آپارتمان</option>
                  <option value="خانه">خانه</option>
                  <option value="اداری">اداری</option>
                  <option value="سوئیت">سوئیت</option>
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
                @click="updateBusinessType('company')"
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
                @click="updateBusinessType('individual')"
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
                <select
                  class="form-select"
                  id="ap-country"
                  v-model="citySelected"
                  required
                >
                  <option value="" disabled>انتخاب استان</option>
                  <option value="bojnord" selected>خراسان شمالی</option>
                  <option value="mashahad">خراسان رضوی</option>
                  <option value="tehran">تهران</option>
                  <option value="esfhan">اصفهان</option>
                  <option value="azarba">آذربایجان شرقی</option>
                </select>
              </div>
              <div class="col-sm-6 mb-3">
                <label class="form-label" for="ap-city"
                  >شهر <span class="text-danger">*</span></label
                >
                <select
                  class="form-select"
                  id="ap-city"
                  v-model="citySelect"
                  required
                >
                  <option value="" disabled>انتخاب شهر</option>
                  <option value="bojnord" selected>بجنورد</option>
                  <option value="mashhad">مشهد</option>
                  <option value="tehran">تهران</option>
                  <option value="esfhan">اصفهان</option>
                  <option value="tabriz">تبریز</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-8 mb-3">
                <label class="form-label" for="ap-district"
                  >منطقه <span class="text-danger">*</span></label
                >
                <select
                  class="form-select"
                  id="ap-district"
                  v-model="areaSelect"
                  required
                >
                  <option value="" disabled>انتخاب منطقه</option>
                  <option value="1">منطقه 1</option>
                  <option value="2">منطقه 2</option>
                  <option value="3">منطقه 3</option>
                  <option value="4">منطقه 4</option>
                  <option value="5" selected>منطقه 5</option>
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
                  placeholder="0000000"
                  value="67234"
                  required
                  v-model="postalCode"
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
                v-model="addressInput"
                required
              />
            </div>
            <!-- <div class="form-label fw-bold pt-3 pb-2">نمایش روی نقشه</div>
            <mapComponent /> -->
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
                type="text"
                id="ap-area"
                value="210"
                v-model="meterageInput"
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
                  v-model="selectedBedrooms"
                  value="0"
                />
                <label class="btn btn-outline-secondary fw-normal" for="studio"
                  >0</label
                >
                <input
                  class="btn-check"
                  type="radio"
                  id="bedrooms-1"
                  name="bedrooms"
                  v-model="selectedBedrooms"
                  value="1"
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
                  v-model="selectedBedrooms"
                  value="2"
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
                  v-model="selectedBedrooms"
                  value="3"
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
                  v-model="selectedBedrooms"
                  checked
                  value="4"
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
                  value="5"
                  v-model="selectedBedrooms"
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
                  v-model="service"
                  value="1"
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
                  v-model="service"
                  value="2"
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
                  v-model="service"
                  value="3"
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
                  v-model="service"
                  value="4"
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
                  value="1"
                  v-model="parking"
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
                  value="2"
                  v-model="parking"
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
                  value="3"
                  v-model="parking"
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
                  value="4"
                  v-model="parking"
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
                  <div
                    class="form-check"
                    @click="
                      updateCheckbox({ name: 'وای فای', icon: 'fi-wifi' })
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="wifi"
                    />
                    <label class="form-check-label" for="wifi">وای فای</label>
                  </div>

                  <div
                    class="form-check"
                    @click="
                      updateCheckbox({
                        name: 'تهویه هوا',
                        icon: 'fi-snowflake',
                      })
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="air-condition"
                    />
                    <label class="form-check-label" for="air-condition"
                      >تهویه هوا</label
                    >
                  </div>

                  <div
                    class="form-check"
                    @click="
                      updateCheckbox({
                        name: 'باشگاه بدنسازی',
                        icon: 'fi-snowflake',
                      })
                    "
                  >
                    <input class="form-check-input" type="checkbox" id="gym" />
                    <label class="form-check-label" for="gym"
                      >باشگاه بدنسازی</label
                    >
                  </div>
                  <div
                    class="form-check"
                    @click="
                      updateCheckbox({ name: 'پارکینگ', icon: 'fi-parking' })
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="free-parking"
                    />
                    <label class="form-check-label" for="free-parking"
                      >پارکینگ رایگان</label
                    >
                  </div>
                </div>
                <div class="col-sm-4">
                  <div
                    class="form-check"
                    @click="updateCheckbox({ name: 'حیوانات', icon: 'fi-pet' })"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="pets-friendly"
                    />
                    <label class="form-check-label" for="pets-friendly"
                      >نگهداری حیوانات خانگی</label
                    >
                  </div>
                  <div
                    class="form-check"
                    @click="updateCheckbox({ name: 'استخر', icon: 'fi-dish' })"
                  >
                    <input class="form-check-input" type="checkbox" id="pool" />
                    <label class="form-check-label" for="pool">استخر</label>
                  </div>

                  <div
                    class="form-check"
                    @click="updateCheckbox({ name: 'تلویزیون', icon: 'fi-tv' })"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="tv"
                    />
                    <label class="form-check-label" for="tv">تلویزیون</label>
                  </div>

                  <div
                    class="form-check"
                    @click="
                      updateCheckbox({
                        name: 'سیستم گرمایشی',
                        icon: 'fi-thermometer',
                      })
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="heating"
                    />
                    <label class="form-check-label" for="heating"
                      >سیستم گرمایشی</label
                    >
                  </div>
                </div>
                <div class="col-sm-4">
                  <div
                    class="form-check"
                    @click="
                      updateCheckbox({
                        name: 'ماشین لباسشویی',
                        icon: 'fi-laundry',
                      })
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="dishwasher"
                    />
                    <label class="form-check-label" for="dishwasher"
                      >ماشین لباسشویی</label
                    >
                  </div>

                  <div
                    class="form-check"
                    @click="
                      updateCheckbox({ name: 'آسانسور', icon: 'fi-cctv' })
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="hair-dryer"
                    />
                    <label class="form-check-label" for="hair-dryer"
                      >آسانسور</label
                    >
                  </div>
                  <div
                    class="form-check"
                    @click="
                      updateCheckbox({ name: 'آشپزخانه', icon: 'fi-iron' })
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="kitchen"
                    />
                    <label class="form-check-label" for="kitchen"
                      >آشپزخانه</label
                    >
                  </div>

                  <div
                    class="form-check"
                    @click="
                      updateCheckbox({
                        name: 'دوربین مدار بسته',
                        icon: 'fi-cctv',
                      })
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="security-cameras"
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
                      v-model="animal.allowCats"
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
                      v-model="animal.allowDogs"
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
              v-model="dicText"
            ></textarea>
            <span class="form-text">1500 کاراکتر باقی مانده است</span>
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
                v-model="price.value"
                required
              />
              <select
                v-model="price.currency"
                class="form-select w-50 me-2 mb-2"
              >
                <option value="toman">تومان</option>
                <option value="dollar">دلار</option>
              </select>
              <select v-model="price.duration" class="form-select w-50 mb-2">
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
            <div class="imgDiv">
              <img
                v-for="(image, index) in imageUrls"
                width="150px"
                :key="index"
                :src="image"
                alt=""
                style="margin-right: 10px;"
              />
            </div>
            <div class="mt-2">
             
              <video
                v-if="videoUrls.length > 0 && videoUrls[0]"
                width="150px"
                height="110px"
                controls
                style="margin-right: 10px;"
              >
                <source :src="videoUrls[0]" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
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
                ref="fileInput"
                type="file"
                name="file-input"
                id="file-input"
                class="file-input__input"
                @change="handleFileUpload"
                multiple
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
                  placeholder="نام خود را وارد کنید"
                  v-model="contactUs.contactFirstName"
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
                  v-model="contactUs.contactLastName"
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
                  v-model="contactUs.contactEmail"
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
                  placeholder="000-000-0000"
                  v-model="contactUs.contactPhone"
                />
              </div>
            </div>
            <label class="form-label" for="ap-company-name">نام شرکت</label>
            <input
              class="form-control"
              type="text"
              id="ap-company-name"
              placeholder="نام شرکت را وارد کنید"
              v-model="contactUs.companyName"
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
              @click.prevent="saveAndContinue"
              class="btn btn-primary btn-lg d-block mb-2"
              href="#"
              >ذخیره و ادامه</a
            >
          </section>
        </div>
        <!-- Progress of completion-->
        <aside class="col-lg-3 offset-lg-1 d-none d-lg-block">
          <div class="sticky-top pt-5">
            <h6 class="pt-5 mt-3 mb-2"> محتوای زیر را  تکمیل کنید .</h6>
            <div class="progress mb-4" style="height: 0.25rem">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style="width: 100%"
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
                  data-scroll-offset="20"
                  >جزئیات ملک</a
                >
              </li>
              <li class="d-flex align-items-center">
                <i class="fi-check text-primary me-2"></i
                ><a
                  class="nav-link fw-normal ps-1 p-0"
                  href="#price"
                  data-scroll
                  data-scroll-offset="20"
                  >قیمت</a
                >
              </li>
              <li class="d-flex align-items-center">
                <i class="fi-check text-primary me-2"></i
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
import axios from "axios";

export default {
  components: {
    mapComponent,
  },
  data() {
    return {
      contactUs: {
        contactFirstName: "",
        contactLastName: "",
        contactEmail: "",
        contactPhone: "",
        companyName: "",
      },
      imageUrls: [],
      videoUrls: [],
      selectedFile: null,
      propertyTitle: "اقامتگاه ویلایی",
      propertyCategory: "",
      propertyType: "",
      selectedBusinessType: "",
      citySelected: "",
      citySelect: "",
      areaSelect: "",
      postalCode: "",
      addressInput: "",
      meterageInput: "",
      selectedBedrooms: "4",
      service: "2",
      parking: "",
      selectedCheckboxes: [],
      dicText: "",
      animal: {
        allowCats: false,
        allowDogs: false,
      },
      price: {
        value: 0,
        currency: "toman",
        duration: "month",
      },
    };
  },
  methods: {
  
    handleFileUpload() {
      const fileInput = this.$refs.fileInput;
      const selectedFiles = fileInput.files;

      if (selectedFiles.length > 0) {
    const fileSize = selectedFiles[0].size; // Get file size in bytes
    const maxSize = 10 * 1024 * 1024; // 10 megabytes in bytes

    if (fileSize > maxSize) {
      // Display an error message or handle the oversized file in your preferred way
     alert("حجم فایل باید زیر ده مگابایت باشد .");
      return; // Stop further processing
    }
  }

      for (let i = 0; i < selectedFiles.length; i++) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          const fileUrl = fileReader.result;

          // Check if the file is an image or video based on its type
          if (selectedFiles[i].type.startsWith("image/")) {
            this.imageUrls.push(fileUrl);
          } else if (selectedFiles[i].type.startsWith("video/")) {
            this.videoUrls.push(fileUrl);
          }
          console.log("عکس", this.imageUrls);
          console.log("ویدیو", this.videoUrls);
        };
        fileReader.readAsDataURL(selectedFiles[i]);
      }
    },
    updateCheckbox(value) {
      const isDuplicate = this.selectedCheckboxes.findIndex((obj) => {
        return obj.name === value.name;
      });

      if (isDuplicate === -1) {
        this.selectedCheckboxes.push(value);
      } else {
        this.selectedCheckboxes = this.selectedCheckboxes.filter(
          (item, index) => index !== isDuplicate
        );
      }
    },
    async saveAndContinue() {
       
      if (this.videoUrls.length > 1) {
    this.videoUrls = [this.videoUrls[0]];
  } 
  console.log(this.videoUrls);
      if (this.propertyTitle && this.propertyCategory) {
        try {
          const dataToSend = {
            contactUs: { ...this.contactUs },
            title: this.propertyTitle,
            category: this.propertyCategory,
            type: this.propertyType,
            type2: this.selectedBusinessType,
            city: this.citySelected,
            city2: this.citySelect,
            area: this.areaSelect,
            postalCode: this.postalCode,
            address: this.addressInput,
            Bedrooms: this.selectedBedrooms,
            service: this.service,
            parking: this.parking,
            selectedCheckboxes: this.selectedCheckboxes,
            animal: this.animal,
            dicText: this.dicText,
            price: this.price,
            file: this.selectedFile,
            meter: this.meterageInput,
            img : this.imageUrls,
            video : this.videoUrls
          };

          if (this.selectedFile) {
            if (this.selectedFile.size > 8 * 1024 * 1024) {
              alert("حجم فایل باید کمتر از 8 مگابایت باشد.");
              return;
            }
          }
          console.log(dataToSend);

          const response = await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            dataToSend,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log("Response:", response.data);
          this.$router.push("/plan");
        } catch (error) {
          console.error("Error sending data:", error);
        }
      } else {
        alert("Please fill in all the required fields");
      }
    },
    async updateBusinessType(type) {
      this.selectedBusinessType = type;
    },
    handleBedroomsClick(value) {
      this.selectedBedrooms = value;
    },
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
