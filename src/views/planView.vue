<template>
  <div>
    <div class="container mt-5 mb-md-4 py-5">
      <!-- Breadcrumb-->
      <nav class="mb-4 pt-md-3" aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">خانه</a></li>
          <li class="breadcrumb-item"><a href="/record">ثبت ملک</a></li>
          <li class="breadcrumb-item active" aria-current="page">ارتقا آگهی</li>
        </ol>
      </nav>
      <h1 class="h4 mb-3">پلن های بروزرسانی</h1>
      <p class="pb-2 mb-4 fs-base">
        پلن مناسب خود را جهت بروز رسانی آگهی ملک خریداری نمایید.
      </p>
      <div class="row">
        <div v-for="plan in plans" :key="plan.id" class="col-sm-6 col-md-4 mb-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <img
                class="d-block mx-auto mt-2 mb-4"
                :src="plan.imgSrc"
                width="72"
                alt="Icon"
              />
              <h2 class="h5 fw-normal text-center py-1 mb-0">
                {{ plan.name }}
              </h2>
              <div class="d-flex align-items-end justify-content-center mb-4">
                <div class="h4 mb-0">
                  {{new Intl.NumberFormat("fa-IR").format(
                    plan.price 
                            )}}
                  
                  تومان</div>
                <div class="pb-2 ps-2">/{{ plan.time }}</div>
              </div>
              <ul
                class="list-unstyled d-block mb-0 mx-auto"
                style="max-width: 16rem"
              >
               
                <li class="d-flex" v-for="planDic in plan.dicPlan" :key="planDic.id">
          
                  <i :class="[{ 'fi-check': true, 'text-primary': planDic.active, 'text-muted': !planDic.active }, 'fs-sm', 'mt-1', 'me-2']"></i>
                  <span>{{ planDic.dic }}</span>
                </li>
         
              </ul>
            </div>
            <div class="card-footer py-2 border-0">
              <div class="border-top text-center pt-4 pb-3">
                <button class="btn btn-outline-primary" @click="selectPlan(plan.id)">انتخاب پلن</button>
              </div>
            </div>
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
      plans: [
        {
          id: 1,
          imgSrc: "/pricing/icon-1.svg",
          name: "پلن پایه",
          price: 50000,
          time: "ماهانه",
          dicPlan: [
            { id: 1, dic: "افزایش 3 برابری بازدید"  , active : true},
            { id: 2, dic: "اعتبار برای 3 روز" , active : true },
            { id: 3, dic: " آپدیت آگهی به لیست اول"  , active : false},
            { id: 4, dic: "جزء نشان ویژه در نتایج" , active : false },
          ],
        },
        {
          id: 2,
          imgSrc: "/pricing/icon-2.svg",
          name: "پلن برنزی",
          price: 250000,
          time: "ماهانه",
          dicPlan: [
            { id: 1, dic: "افزایش 5 برابری بازدید" , active : true },
            { id: 2, dic: "اعتبار برای 5 روز"  , active : true},
            { id: 3, dic: " آپدیت آگهی به لیست اول"  , active : false},
            { id: 4, dic: "جزء نشان ویژه در نتایج" , active : false },
          ],
        },
        {
          id: 3,
          imgSrc: "/pricing/icon-3.svg",
          name: "پلن طلایی",
          price: 500000,
          time: "15 روزه",
          dicPlan: [
            { id: 1, dic: "افزایش 10 برابری بازدید"  , active : true},
            { id: 2, dic: "اعتبار برای 10 روز"  , active : true},
            { id: 3, dic: " آپدیت آگهی به لیست اول" , active : true },
            { id: 4, dic: "جزء نشان ویژه در نتایج" , active : true },
          ],
        },
      ],
     
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
          console.log(res.data);
          // this.plan = res.data
        })
        .catch((error) => console.log(error));
    },
  
  calculateTotal() {
    let total = 0;
    for (const card of this.cardBox) {
      total += card.priceBox;
    }
    return total;
  },
  selectPlan(planId) {
    
      const selectedPlan = this.plans.find(plan => plan.id === planId);
      
      axios.post('https://jsonplaceholder.typicode.com/posts', selectedPlan)
        .then(response => {
          console.log('Response:', response.data);
      
        })
        .catch(error => {
          console.error('Error:', error);
          
        });
    }

  },
};
</script>
<style scoped></style>
