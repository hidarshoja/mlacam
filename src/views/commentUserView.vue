<template>
  <div>
    <div class="container mt-5 mb-md-4 py-5">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="mb-4 mb-md-5" id="comments">
            <h3 class="mb-4 pb-2 font-vazir">
              {{ comments.length }} نظر ثبت شده
            </h3>
            <!-- Loop through comments -->
            <div
              v-for="(comment, index) in comments"
              :key="index"
              class="border-bottom pb-4 mb-4"
            >
              <p>{{ comment.text }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center pe-2">
                  <img
                    class="rounded-circle me-1"
                    :src="comment.avatar"
                    width="48"
                    :alt="comment.author"
                  />
                  <div class="ps-2">
                    <h6 class="fs-base mb-0">{{ comment.author }}</h6>
                    <span class="text-muted fs-sm">{{ comment.date }}</span>
                  </div>
                </div>
                <button
                  class="btn btn-link btn-sm"
                  type="button"
                  @click="openModal(comment)"
                >
                  <i class="fi-reply fs-lg me-2"></i
                  ><span class="fw-normal">پاسخ</span>
                </button>
              </div>
              <!-- Reply to comment -->
              <div style="display: flex; align-items: center; justify-content: end;" v-if="comment.response">
                <div
                  class="border-end border-4 pe-4 me-4 mt-4"
                  style="
                    text-align: end;
                    background-color: rgba(189, 189, 189, 0.575);
                    border-radius: 12px;
                    padding: 10px;
                    width: 80%;
                  "
                >
                  <p style="color: rgb(37, 37, 37);">{{ comment.reply }}</p>
                  <div
                    class="d-flex align-content-center justify-content-end pe-2"
                  >
                    <div class="ps-2">
                      <h6 class="fs-base mb-0">{{ comment.replyAuthor }}</h6>
                      <span class="text-muted fs-sm" >{{
                        comment.replyDate
                      }}</span>
                    </div>
                    <img
                      class="rounded-circle me-1"
                      :src="comment.replyAvatar"
                      width="48"
                      :alt="comment.replyAuthor"
                      style="margin-right: 10px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Comment form-->
      <div class="card py-md-4 py-3 shadow-sm">
        <div class="card-body col-lg-8 col-md-10 mx-auto px-md-0 px-4">
          <h3 class="mb-4 pb-sm-2 font-vazir">ثبت نظر شما</h3>
          <form
            @submit.prevent="submitForm"
            class="needs-validation row gy-md-4 gy-3"
            novalidate
          >
            <div class="col-sm-6">
              <label class="form-label" for="comment-name">نام</label>
              <input
                v-model="name"
                class="form-control form-control-lg"
                type="text"
                id="comment-name"
                placeholder="نـام"
                required
              />
              <div class="invalid-feedback">نام خود را وارد کنید</div>
            </div>
            <div class="col-sm-6">
              <label class="form-label" for="comment-email"
                >پست الکترونیکی</label
              >
              <input
                v-model="email"
                class="form-control form-control-lg"
                type="email"
                id="comment-email"
                placeholder="پست الکترونیکی"
                required
              />
              <div class="invalid-feedback">یک ایمیل معتبر وارد کنید</div>
            </div>
            <div class="col-12">
              <label class="form-label" for="comment-text">پیام</label>
              <textarea
                v-model="comment"
                class="form-control form-control-lg"
                id="comment-text"
                rows="4"
                placeholder="ثبت نظر"
                required
              ></textarea>
              <div class="invalid-feedback">نظر خود را تایپ کنید</div>
            </div>
            <div class="col-12 py-2">
              <button class="btn btn-lg btn-primary" type="submit">
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Modal -->

    <div
      class="modal modal-lg"
      :class="showModal ? 'd-block' : 'd-none'"
      tabindex="-1"
      role="dialog"
      style="background-color: rgba(80, 79, 79, 0.616)"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-between">
            <div>
              <h5 class="modal-title">{{ modalTitle }}</h5>
            </div>
            <div>
              <button
                type="button"
                class="btn-close"
                @click="closeModal"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitReply">
              <div class="mb-3">
                <label for="name" class="form-label">نام شما:</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="replyName"
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">پیام شما:</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                  v-model="replyMessage"
                ></textarea>
              </div>
              <div class="d-flex align-content-center justify-content-end">
                <button type="submit" class="btn btn-primary">ارسال</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal -->
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      comment: "",

      comments: [
        {
          text: " حال و آینده شناخت فراوا جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری ر برای طراحان رایانه ایعلی الخصوص طراحان خلاقی و فرهنگ پیشرو د  زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و  دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.",
          author: "میلاد فاضلیان",
          date: "3 روز گذشته",
          avatar: "/avatars/05.jpg",
          response :  true ,
          reply:
            "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و ب استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
          replyAuthor: "حیدر شجاع",
          replyDate: "2روز گذشته",
          replyAvatar: "/avatars/01.jpg",
        },
        {
          text: "تمرینات خوبی را پشت سر گذاشتیم، امروز در ریاض تمرین خوبی داشتیم، پرقدرت و امیدوار می‌رویم که بازی را با اختلاف ۲ گل ببریم و بازی را به وقت اضافه ببریم.",
          author: "زهرا حمدی",
          date: "3 روز گذشته",
          avatar: "/avatars/03.jpg",
          response :  false ,
        },
        {
          text: "  شرایط واقعا سخت است اما ناامید نیستیمو تلاشمان را می‌کنیم، با تمام وجودمان تلاش می‌کنیم تا نتیجه لازم را بگیریم و صعود کنیم.",
          author: "سیاوش احمدی",
          date: "3 روز گذشته",
          avatar: "/avatars/04.jpg",
          response :  false ,
        },
      ],
      showModal: false,
      modalTitle: "",
      replyName: "",
      replyMessage: "",
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
    submitForm() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          name: this.name,
          email: this.email,
          comment: this.comment,
        })
        .then((response) => {
          console.log("Response from server:", response.data);
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    },
    fetchComments() {
      axios
        .get("https://api.example.com/comments")
        .then((res) => {
          // this.comments = res.data; // Set comments data from API response
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openModal(comment) {
      this.showModal = true;
      
      this.modalTitle = `پیام شما برای ${comment.author}`;
    },
    closeModal() {
      this.showModal = false;
      this.modalTitle = "";
      this.replyName = "";
      this.replyMessage = "";
    },

    async submitReply() {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name: this.replyName,
        message: this.replyMessage
      });
      console.log('پاسخ سرور:', response.data);
     
    } catch (error) {
      console.error('خطا در ارسال درخواست:', error);
    }
    this.closeModal();
  }
  },
  mounted() {
    this.fecthDetails();
    this.fetchComments();
  },
};
</script>
