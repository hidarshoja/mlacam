<template>
  <ul class="nav nav-tabs border-bottom mb-4" role="tablist">
    <li class="nav-item mb-3">
      <a
        class="nav-link"
        href="#"
        role="tab"
        aria-selected="true"
        :class="{ active: activeTab === 'publish' }"
        @click="toggleDiv('publish')"
      >
        <i class="fi-file fs-base me-2"></i>منتشر شده</a
      >
    </li>
    <li class="nav-item mb-3">
      <a
        class="nav-link"
        href="#"
        role="tab"
        aria-selected="false"
        @click="toggleDiv('draft')"
        :class="{ active: activeTab === 'draft' }"
        ><i class="fi-file-clean fs-base me-2"></i>پیش نویس</a
      >
    </li>
    <li class="nav-item mb-3">
      <a
        class="nav-link"
        href="#"
        role="tab"
        aria-selected="false"
        @click="toggleDiv('archive')"
        :class="{ active: activeTab === 'archive' }"
        ><i class="fi-archive fs-base me-2"></i>آرشیو</a
      >
    </li>
  </ul>
  <div class="publish" v-if="activeTab === 'publish'">
    <div v-if="itemsPublished.length > 0" class="publish">
      <div v-for="item  in itemsPublished" :key="item.id" class="card card-hover card-horizontal border-0 shadow-sm mb-4">
        <a
          class="card-img-top"
          :style="'background-image: url(' + item.imageUrl + ')'"
        >
          <div class="position-absolute start-0 top-0 pt-3 ps-3">
            <span style="border-radius: 8px; padding: 3px; color: white; font-size: 12px;"  :class="{'bg-info': item.status === 'جدید', 'bg-success': item.status === 'تایید'}">{{ item.status }}</span>
          </div></a
        >
        <div class="card-body position-relative pb-3">
          <div class="dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3">
            <button
              class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm"
              type="button"
              id="contextMenu1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fi-dots-vertical"></i>
            </button>
            <ul class="dropdown-menu my-1" aria-labelledby="contextMenu1">
              <li>
              
                  <button class="dropdown-item" type="button" @click="$router.push(`/edit/${item.id}`)">
                  <i class="fi-edit opacity-60 me-2"></i>ویرایش
                 </button>
                
              </li>
              <li>
                <button class="dropdown-item" type="button" @click="$router.push('/plan')">
                  <i class="fi-flame opacity-60 me-2"></i>نردبان
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button" @click="toggleStatus(item.id)">
                  <i class="fi-power opacity-60 me-2"></i>
                  {{ item.isActive ? 'فعال' : 'غیرفعال' }}
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button" @click="deletePost(item.id)">
                  <i class="fi-trash opacity-60 me-2"></i>حذف
                </button>
              </li>
            </ul>
          </div>
          <h4 class="mb-1 fs-sm fw-normal text-uppercase text-primary">{{ item.type }}</h4>
          <h3 class="h6 mb-2 fs-base">
            <a class="nav-link stretched-link" href="/"> 
              {{ item.type2 }}  
              </a
            >
          </h3>
          <p class="mb-2 fs-sm text-muted">
            {{ item.address }}
          </p>
          <div>
            <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>شروع
            قیمت از {{ item.price }} ت
          </div>
          <div
            class="d-flex align-items-center justify-content-center justify-content-sm-start border-top pt-3 pb-2 mt-3 text-nowrap"
          >
            <!-- <span class="d-inline-block me-4 fs-sm"
              >{{ item.sleep }}<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span
            > -->
            <span class="d-inline-block me-4 fs-sm"
              >{{ item.room}}<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span
            ><span class="d-inline-block fs-sm"
              >{{ item.Parking}}<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3 class="pt-5">موردی در آرشیو وجود ندارد.</h3>
      <img src="/fileImg.jpg" alt="file" width="400px" />
    </div>
  </div>
  <div class="draft" v-if="activeTab === 'draft'">
    <div v-if="itemDraft.length > 0" class="draft">
      <!-- Item-->
      <div v-for="item in itemDraft" :key="item.id" class="card card-hover card-horizontal border-0 shadow-sm mb-4">
        <a
          class="card-img-top"
          :style="'background-image: url(' + item.imageUrl + ')'"
        >
          <div class="position-absolute start-0 top-0 pt-3 ps-3">
            <span class="d-table badge bg-info">پیش نویس شده</span>
          </div></a
        >
        <div class="card-body position-relative pb-3">
          <div class="dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3">
            <button
              class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm"
              type="button"
              id="contextMenu1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fi-dots-vertical"></i>
            </button>
            <ul class="dropdown-menu my-1" aria-labelledby="contextMenu1">
              <li>
                <button
                  class="dropdown-item"
                  type="button"
                  @click="$router.push(`/edit/${item.id}`)"
                >
                  <i class="fi-edit opacity-60 me-2"></i>ویرایش
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button" @click="$router.push('/plan')">
                  <i class="fi-flame opacity-60 me-2"></i>نردبان
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button" @click="toggleStatus(item.id)">
                  <i class="fi-power opacity-60 me-2"></i>
                  {{ item.isActive ? 'فعال' : 'غیرفعال' }}
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button" @click="deletePost(item.id)">
                  <i class="fi-trash opacity-60 me-2"></i>حذف
                </button>
              </li>
            </ul>
          </div>
          <h4 class="mb-1 fs-sm fw-normal text-uppercase text-primary">{{ item.type }}</h4>
          <h3 class="h6 mb-2 fs-base">
            <a class="nav-link stretched-link" href="/"
              > {{ item.type2 }} </a
            >
          </h3>
          <p class="mb-2 fs-sm text-muted"> {{ item.address }}</p>
          <div>
            <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>شروع
            قیمت از {{ item.price }} ت
          </div>
          <div
            class="d-flex align-items-center justify-content-center justify-content-sm-start border-top pt-3 pb-2 mt-3 text-nowrap"
          >
            <!-- <span class="d-inline-block me-4 fs-sm"
              >{{ item.sleep}}<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span
            > -->
            <span class="d-inline-block me-4 fs-sm"
              >{{ item.room}}<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span
            ><span class="d-inline-block fs-sm"
              >{{ item.Parking }}<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3 class="pt-5">موردی در آرشیو وجود ندارد.</h3>
      <img src="/fileImg.jpg" alt="file" width="400px" />
    </div>
  </div>
  <div class="archive" v-if="activeTab === 'archive'">
    <div v-if="itemsArchive.length > 0" class="archive">
      <!-- Item-->
      <div v-for="item in itemsArchive" :key="item.id" class="card card-hover card-horizontal border-0 shadow-sm mb-4">
        <a
          class="card-img-top"
          :style="'background-image: url(' + item.imageUrl + ')'"
        >
          <div class="position-absolute start-0 top-0 pt-3 ps-3">
            <span class="d-table badge bg-info">پیش نویس شده</span>
          </div></a
        >
        <div class="card-body position-relative pb-3">
          <div class="dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3">
            <button
              class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm"
              type="button"
              id="contextMenu1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fi-dots-vertical"></i>
            </button>
            <ul class="dropdown-menu my-1" aria-labelledby="contextMenu1">
              <li>
                <button
                  class="dropdown-item"
                  type="button"
                  @click="$router.push(`/edit/${item.id}`)"
                >
                  <i class="fi-edit opacity-60 me-2"></i>ویرایش
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button" @click="$router.push('/plan')">
                  <i class="fi-flame opacity-60 me-2"></i>نردبان
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button" @click="toggleStatus(item.id)">
                  <i class="fi-power opacity-60 me-2"></i>
                  {{ item.isActive ? 'فعال' : 'غیرفعال' }}
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button" @click="deletePost(item.id)">
                  <i class="fi-trash opacity-60 me-2"></i>حذف
                </button>
              </li>
            </ul>
          </div>
          <h4 class="mb-1 fs-sm fw-normal text-uppercase text-primary">{{ item.type }}</h4>
          <h3 class="h6 mb-2 fs-base">
            <a class="nav-link stretched-link" href="/"
              > {{ item.type2 }}   </a
            >
          </h3>
          <p class="mb-2 fs-sm text-muted"> {{ item.address }}</p>
          <div>
            <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>شروع
            قیمت از {{ item.price }} ت
          </div>
          <div
            class="d-flex align-items-center justify-content-center justify-content-sm-start border-top pt-3 pb-2 mt-3 text-nowrap"
          >
            <span class="d-inline-block me-4 fs-sm"
              >{{ item.sleep}}<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span
            ><span class="d-inline-block me-4 fs-sm"
              >{{ item.room}}<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span
            ><span class="d-inline-block fs-sm"
              >{{ item.Parking }}<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3 class="pt-5">موردی در آرشیو وجود ندارد.</h3>
      <img src="/fileImg.jpg" alt="file" width="400px" />
    </div>
  </div>


</template>
<script>
let url1 = "https://jsonplaceholder.typicode.com/posts/1";
let url2 = "https://jsonplaceholder.typicode.com/posts/2";
let url3 = "https://jsonplaceholder.typicode.com/posts/3";
import axios  from 'axios';

export default {
  data() {
    return {
      activeTab: "publish",
      editedProductName: "",
      postData: null,
      itemsPublished : [
        {
          id : 1 , 
          type : "اجاره",
          type2 : "آپارتمان 4 خواب | 185 متر مربع",
          address : "ایران، تهران ، خیابان آزادی",
          price : "3000000",
          sleep : 3,
          room : 4 ,
          Parking : 2,
          imageUrl : "/real-estate/catalog/08.jpg",
          isActive: true,
          status : "جدید"
        },
        {
          id : 2 , 
          type : "فروش",
          type2 : "آپارتمان 2 خواب | 115 متر مربع",
          address : "ایران، تهران ، خیابان آزادی",
          price : "2100000",
          sleep : 3,
          room : 2 ,
          Parking : 2,
          imageUrl : "/real-estate/catalog/22.jpg",
          isActive: true,
          status : "تایید"
        },
        {
          id : 3 , 
          type : "اجاره",
          type2 : "ویلا شمال رامسر| 185 متر مربع",
          address : "ایران، رامسر ، خیابان آزادی",
          price : "2000000",
          sleep : 5,
          room : 2 ,
          Parking : 4,
          imageUrl : "/real-estate/catalog/10.jpg",
          isActive: true,
          status : "جدید"
        },
      ],
      itemDraft : [
      {
          id : 1 , 
          type : "اجاره",
          type2 : "آپارتمان 2 خواب | 115 متر مربع",
          address : "ایران، تهران ، خیابان جمهوری",
          price : "3000000",
          sleep : 3,
          room : 4 ,
          Parking : 2,
          imageUrl : "/real-estate/catalog/09.jpg",
          isActive: true,
        },
        {
          id : 2 , 
          type : "فروش",
          type2 : "آپارتمان 3 خواب | 125 متر مربع",
          address : "ایران، تهران ، خیابان آزادی",
          price : "2100000",
          sleep : 3,
          room : 2 ,
          Parking : 2,
          isActive: true,
          imageUrl : "/real-estate/catalog/21.jpg",
        },
        {
          id : 3 , 
          type : "اجاره",
          type2 : "ویلا شمال کیش| 185 متر مربع",
          address : "ایران، کیش ، خیابان آزادی",
          price : "2000000",
          sleep : 5,
          room : 2 ,
          Parking : 4,
          imageUrl : "/real-estate/catalog/10.jpg",
          isActive: true,
        },
        {
          id : 4 , 
          type : "اجاره",
          type2 : "ویلا شمال قشم| 185 متر مربع",
          address : "ایران، قشم ، خیابان آزادی",
          price : "2000000",
          sleep : 5,
          room : 2 ,
          Parking : 4,
          imageUrl : "/real-estate/catalog/11.jpg",
          isActive: true,
        },
      ],
      itemsArchive : [

      ]
    };
  },
  methods: {
    toggleDiv(tab) {
      this.activeTab = tab;
    },
    
    closeEditModal() {
      $('#editModal').modal('hide');
    },
    saveChanges() {
        this.closeEditModal();
    },
    deletePost(postId) {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
          console.log('محصول با موفقیت حذف شد', response.data);
        })
        .catch(error => {
          console.error('خطا در حذف محصول', error);
        });
    },
    toggleStatus(itemId) {
      const item = this.itemsPublished.find(item => item.id === itemId);

      if (item) {
        // تغییر وضعیت isActive
        item.isActive = !item.isActive;

        // ارسال درخواست به‌روزرسانی
        axios.patch(`https://jsonplaceholder.typicode.com/posts/${itemId}`, {
          isActive: item.isActive,
        })
        .then(response => {
          console.log('وضعیت با موفقیت به‌روزرسانی شد', response.data);
          // اینجا می‌توانید هر اقدام دیگری که نیاز دارید انجام دهید
        })
        .catch(error => {
          console.error('خطا در به‌روزرسانی وضعیت', error);
        });
      }
    },
  },
  mounted() {
    
    axios.get(url1)
      .then(response => {
      
       // this.itemsPublished = response.data;
        console.log( "منتشر شده ها",response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      axios.get(url2)
      .then(response => {
      
        //this.itemDraft = response.data;
        console.log( "پیش نویس",response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      axios.get(url3)
      .then(response => {
      
        //this.itemsArchive = response.data;
        console.log( "آرشیو",response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
};
</script>
<style scoped>
.archive {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
