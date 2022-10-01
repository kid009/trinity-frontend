<template>
  <Banner msg="Case Study" img="images/office.jpg" />
  <div class="container">
    <div
      v-for="items in casestudy.slice(0, 2)"
      v-bind:key="items.best_study_id"
    >
      <div class="study">
        <div class="row padd-90">
          <div class="col-xs-12 col-md-8">
            <div class="detail-content color-1">
              <div class="detail-content-block">
                <h3 class="text-letter" v-html="items.best_study_name"></h3>
                <p v-html="items.best_study_detail"></p>
                <div class="detail-top slider-wth-thumbs style-2">
                  <img :src="items.best_study_image_cover_link" />
                </div>
                <hr />
                <div class="video-text">
                  <h3>วีดีโอ</h3>
                </div>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    :src="items.best_study_vdo"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="right-sidebar">
              <div class="detail-block bg-dr-blue">
                <h4 class="color-white">ข้อมูลติดต่อ</h4>
                <div class="contect-img">
                  <img :src="items.best_study_image_contact" alt="" />
                </div>
                <div class="details-desc">
                  <p class="color-grey-9">
                    ชื่อ:
                    <span
                      class="color-white"
                      v-html="items.best_study_name_contact"
                    ></span>
                  </p>
                  <p class="color-grey-9">
                    เบอร์โทร:
                    <span
                      class="color-white"
                      v-html="items.best_study_telephone"
                    ></span>
                  </p>
                  <p class="color-grey-9">
                    อีเมลล์:
                    <span
                      class="color-white"
                      v-html="items.best_study_email"
                    ></span>
                  </p>
                  <div class="icon-contaxt">
                    <a :href="items.best_study_facebook">
                      <img src="images/icon/facebook.png" alt=""
                    /></a>

                    <a :href="items.best_study_line">
                      <img src="images/icon/line.png" alt=""
                    /></a>

                    <a :href="items.best_study_instagram">
                      <img src="images/icon/instagram.png" alt=""
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";
import Banner from "../Banner.vue";
export default {
  name: "CaseStudy",
  components: { Banner },
  setup() {
    const casestudy = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/casestudy`
      );
      casestudy.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { casestudy };
  },
};
</script>

<style scoped>
.text-letter {
  letter-spacing: 0;
}
.video-text {
  text-align: center;
  color: #206ab0;
}
.study {
  margin-top: 40px;
  margin-bottom: 40px;
}
.icon-contaxt img {
  width: 36px;
  height: auto;
  margin-right: 10px;
}
.contect-img img {
  width: auto;
  height: 142px;

  -o-object-fit: cover;
  object-fit: cover;
}
.contect-img {
  text-align: center;
  padding: 10px 0px 10px 0px;
}
.color-grey-9 {
  color: #ffffff;
}
.detail-block h4 {
  font-size: 22px;
  line-height: 25px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 22px;
}
.embed-responsive {
  background-color: #868080;
}
</style>
