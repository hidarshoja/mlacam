<template>
  <div>
    <section class="container pb-4 pt-1 mb-5">
      <div
        class="d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-2"
      >
        <div
          class="d-flex w-100 align-items-center justify-content-between justify-content-lg-start"
        >
          <h2 class="h3 mb-0 me-md-4">ملک های جدید اضافه شده</h2>
          <div class="dropdown d-md-none" data-bs-toggle="select">
            <button
              class="btn btn-outline-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              <span class="dropdown-toggle-label">خانه</span>
            </button>
            <input type="hidden" />
            <div class="dropdown-menu">
              <span class="dropdown-item">
                <span class="dropdown-item-label"
                @click="showComponent('apartment')"
                >آپارتمان</span>
            </span >
              <span class="dropdown-item">
                <span class="dropdown-item-label"
                @click="showComponent('home')"
                >خانه</span>
             </span>
              <span class="dropdown-item">
                <span class="dropdown-item-label"
                @click="showComponent('Suite')"
                >سوئیت</span>
             </span>
              <span class="dropdown-item">
                <span class="dropdown-item-label"
                @click="showComponent('office')"
                >دفتر تجاری</span>
              </span>
            </div>
          </div>
          <ul class="nav nav-tabs d-none d-md-flex ps-lg-2 mb-0">
            <li class="nav-item">
              <span
                class="nav-link fs-sm mb-2 mb-md-0"
                @click="showComponent('apartment')"
                :class="{ 'active': activeComponent === 'apartment' }"
                >آپارتمان</span>
            </li>
            <li class="nav-item">
              <span
                class="nav-link fs-sm mb-2 mb-md-0"
                :class="{ 'active': activeComponent === 'home' }" 
                @click="showComponent('home')"
                >خانه</span
              >
            </li>
            <li class="nav-item">
              <span
                class="nav-link fs-sm mb-2 mb-md-0"
                @click="showComponent('Suite')"
                :class="{ 'active': activeComponent === 'Suite' }"
                >سوئیت</span
              >
            </li>
            <li class="nav-item">
              <span
                class="nav-link fs-sm mb-2 mb-md-0"
                @click="showComponent('office')"
                :class="{ 'active': activeComponent === 'office' }"
                >دفتر تجاری</span
              >
            </li>
          </ul>
        </div>
        <a
          class="btn btn-link fw-normal d-none d-lg-block p-0"
          href="real-estate-catalog-rent.html"
          >مشاهده همه <i class="fi-arrow-long-left me-2"></i
        ></a>
      </div>
      <div v-if="activeComponent === 'apartment'" class="apartment">
        <ApartmentComponent />
      </div>
      <div v-else-if="activeComponent === 'home'" class="home">
        <HomeComponent />
     </div>
      <div v-else-if="activeComponent === 'Suite'" class="Suite">
        <SuiteComponent />
     </div>
      <div v-else-if="activeComponent === 'office'" class="office">
        <officeComponent />  
    </div>
    </section>
  </div>
</template>
<script>
import ApartmentComponent from "./ApartmentComponent.vue";
import HomeComponent from "./HomeComponent.vue";
import SuiteComponent from "./SuiteComponent.vue";
import officeComponent from "./officeComponent.vue"
export default {
  data() {
    return {
      activeComponent: "apartment",
    };
  },
  methods: {
    showComponent(componentName) {
        console.log("Changing active component to:", componentName);
      this.activeComponent = componentName;
    },
  },
  components: {
    ApartmentComponent,
    HomeComponent,
    SuiteComponent,
    officeComponent
  },
};
</script>
<style scoped>
 span.nav-link {
    cursor: pointer !important;
   }
</style>