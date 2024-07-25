<template>
  <div>
    <div class="container mt-5 mb-md-4 py-5">
      <!-- Breadcrumb + page title-->
      <nav class="mb-3 pt-md-3" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">خانه</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">مقالات</li>
        </ol>
      </nav>
      <h1
        class="h3 d-flex align-items-end justify-content-between mb-4 font-vazir"
      >
        اخبار املاک
      </h1>

      <div>
        <!-- Item-->
        <div>
          <article
            class="row"
            v-for="(blogPost, index) in blogPosts"
            :key="index"
          >
            <div class="col-md-7 col-lg-8 mb-lg-0 mb-3 mb-md-0">
              <a
                class="d-block position-relative"
                href="/detailsBlog"
              >
                <span
                  class="badge bg-success position-absolute top-0 start-0 m-3 fs-sm"
                  >اسپانسر</span
                >
                <img
                  class="rounded-3"
                  :src="blogPost.image"
                  :alt="'Post image ' + index"
                />
              </a>
            </div>
            <div class="col-md-5 col-lg-4">
              <a
                class="fs-sm text-uppercase text-decoration-none"
                href="/detailsBlog">{{ blogPost.category }}</a
              >
              <h2 class="h5 pt-1">
                <a class="nav-link" href="/detailsBlog">{{
                  blogPost.title
                }}</a>
              </h2>
              <p class="d-md-none d-xl-block mb-4 line-h18">
                {{ blogPost.excerpt }}
              </p>
              <a
                class="d-flex align-items-center text-decoration-none"
                href="/detailsBlog"
              >
                <img
                  class="rounded-circle"
                  :src="blogPost.author.avatar"
                  width="48"
                  :alt="blogPost.author.name"
                />
                <div class="ps-2">
                  <h6 class="fs-base text-nav lh-base mb-1">
                    {{ blogPost.author.name }}
                  </h6>
                  <div class="d-flex text-body fs-sm">
                    <span class="me-2 pe-1"
                      ><i class="fi-calendar-alt opacity-60 mt-n1 me-1"></i
                      >{{ blogPost.date }}</span
                    >
                    <span
                      ><i class="fi-chat-circle opacity-60 mt-n1 me-1"></i
                      >{{ blogPost.comments }} کامنت</span
                    >
                  </div>
                </div>
              </a>
            </div>
          </article>
        </div>
      </div>

      <!-- Carousel custom controls-->
      <div
        class="tns-carousel-controls pb-5 pt-2 mt-4 mb-lg-3"
        id="sponsored-news-controls"
      >
        <button class="me-3" type="button">
          <i class="fi-chevron-left fs-xs"></i>
        </button>
        <button type="button"><i class="fi-chevron-right fs-xs"></i></button>
      </div>
      <!-- Search bar + filters-->
      <div class="row gy-3 mb-4 pb-2">
        <div class="col-md-6 order-md-1 order-2">
          <div class="position-relative">
            <input
              v-model="searchText"
              @keydown.enter="search"
              class="form-control pe-5"
              type="text"
              placeholder="جستجو مقاله براساس کلمات کلیدی"
            /><i
              @click="search"
              class="fi-search position-absolute top-50 end-0 translate-middle-y me-3"
            ></i>
          </div>
        </div>
        <div class="col-lg-6 col-md-8 offset-lg-2 order-md-2 order-1"></div>
      </div>
      <!-- Articles grid-->
      <div class="row row-cols-md-2 row-cols-1 gy-md-5 gy-4 mb-lg-5 mb-4 blog-list">
        <article class="col pb-2 pb-md-1" v-for="(blogPost, index) in blogListPosts" :key="index">
          <a class="d-block position-relative mb-3" href="/detailsBlog"
            >
               <img
                  class="rounded-3"
                  :src="blogPost.image"
                  :alt="'Post image ' + index"
                />
              </a
          ><a class="fs-sm text-uppercase text-decoration-none" href="/detailsBlog"
            >{{ blogPost.category }}</a
          >
          <h3 class="h5 mb-2 pt-1">
            <a class="nav-link" href="/detailsBlog">
              {{ blogPost.title }}
              </a>
          </h3>
          <p class="mb-3">
            {{ blogPost.excerpt }}
          </p>
          <a class="d-flex align-items-center text-decoration-none" href="/detailsBlog"
            >
            <img
                  class="rounded-circle"
                  :src="blogPost.author.avatar"
                  width="48"
                  :alt="blogPost.author.name"
                />
            <div class="ps-2">
              <h6 class="fs-base text-nav lh-base mb-1">
                {{ blogPost.author.name }}
              </h6>
              <div class="d-flex text-body fs-sm">
                <span class="me-2 pe-1"
                  ><i
                    class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"
                  ></i
                  >{{ blogPost.date }} </span
                ><span
                  ><i
                    class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"
                  ></i
                  >{{ blogPost.comments }} کامنت</span
                >
              </div>
            </div></a
          >
        </article> 
      </div>
      <!-- Pagination-->
      <nav class="pt-4 pb-2 border-top" aria-label="Blog pagination">
        <ul class="pagination mb-0">
          <li class="page-item d-sm-none">
            <span class="page-link page-link-static">1 / 8</span>
          </li>
          <li class="page-item active d-none d-sm-block" aria-current="page">
            <span class="page-link"
              >1<span class="visually-hidden">(current)</span></span
            >
          </li>
          <li class="page-item d-none d-sm-block">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item d-none d-sm-block">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item d-none d-sm-block">...</li>
          <li class="page-item d-none d-sm-block">
            <a class="page-link" href="#">8</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next"
              ><i class="fi-chevron-right"></i
            ></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          image: "/real-estate/blog/01.jpg",
          category: "نکات و ترفندها",
          title:
            "به دنبال مکان جدیدی هستید؟ از این زمان برای ایجاد لیست دلخواه خود استفاده کنید",
          excerpt:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
          author: {
            name: "کریستین واتسون",
            avatar: "/avatars/06.jpg",
          },
          date: "13 اسفند",
          comments: 0,
        },
      ],
      blogListPosts: [
        {
          id: 1,
          image: "/real-estate/blog/01.jpg",
          category: "نکات و ترفندها",
          title:
            "به دنبال مکان جدیدی هستید؟ از این زمان برای ایجاد لیست دلخواه خود استفاده کنید",
          excerpt:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
          author: {
            name: "کریستین ",
            avatar: "/avatars/02.jpg",
          },
          date: "23 اسفند",
          comments: 4,
        },
        {
          id: 2,
          image: "/real-estate/blog/02.jpg",
          category: "تخفیفات",
          title:
            "به دنبال مکان جدیدی هستید؟ از این زمان برای ایجاد لیست دلخواه خود استفاده کنید",
          excerpt:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
          author: {
            name: "کریستین ",
            avatar: "/avatars/05.jpg",
          },
          date: "16 اسفند",
          comments: 10,
        },
        {
          id: 3,
          image: "/real-estate/blog/03.jpg",
          category: "نحوه پرداخت",
          title:
            "به دنبال مکان جدیدی هستید؟ از این زمان برای ایجاد لیست دلخواه خود استفاده کنید",
          excerpt:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
          author: {
            name: "کریستین واتسون",
            avatar: "/avatars/02.jpg",
          },
          date: "03 اسفند",
          comments: 3,
        },
        {
          id: 4,
          image: "/real-estate/blog/04.jpg",
          category: "نکات و ترفندها",
          title:
            "به دنبال مکان جدیدی هستید؟ از این زمان برای ایجاد لیست دلخواه خود استفاده کنید",
          excerpt:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
          author: {
            name: "رضا واتسون",
            avatar: "/avatars/04.jpg",
          },
          date: "11 اسفند",
          comments: 6,
        },
        {
          id: 5,
          image: "/real-estate/blog/05.jpg",
          category: "خریدها",
          title:
            "به دنبال مکان جدیدی هستید؟ از این زمان برای ایجاد لیست دلخواه خود استفاده کنید",
          excerpt:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
          author: {
            name: "کریستین رونالدو",
            avatar: "/avatars/06.jpg",
          },
          date: "03 اسفند",
          comments: 3,
        },
        {
          id: 6,
          image: "/real-estate/blog/01.jpg",
          category: "نکات و ترفندها",
          title:
            "به دنبال مکان جدیدی هستید؟ از این زمان برای ایجاد لیست دلخواه خود استفاده کنید",
          excerpt:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
          author: {
            name: "کریستین واتسون",
            avatar: "/avatars/03.jpg",
          },
          date: "13 اسفند",
          comments: 0,
        },
      ],
      searchText: ''
    };
  },
  methods: {
    fecthDetails() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/2")
        .then((res) => {
          console.log("fecthDetails", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    search() {
      
      axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          searchText: this.searchText 
        }
      })
      .then(response => {
       
        console.log(response.data);
        console.log(this.searchText);
      })
      .catch(error => {
      
        console.error('Error searching:', error);
      });
    
  }
  },
  mounted() {
    this.fecthDetails();
  },
};
</script>
