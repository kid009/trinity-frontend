<template>
  <div
    v-for="items in casestudy.slice(0, 1)"
    v-bind:key="items.best_study_id"
    class="detail-wrapper"
  >
    <div class="container">
      <div class="detail-header">
        <div class="row">
          <div class="col-xs-12 col-sm-8">
            <h2 class="color-dark-2 text-letter fontstyle" id="page-detail">
              {{ items.best_study_name }}
            </h2>
          </div>
          <div class="col-xs-12 col-sm-4"></div>
        </div>
      </div>
      <div class="row padd-90">
        <div class="col-xs-12 col-md-8">
          <div class="detail-content">
            <div class="detail-top radius-top">
              <img
                class="img-responsive img-box"
                :src="items.best_study_image_cover_link"
                alt=""
              />
            </div>

            <div class="detail-content-block clearfix">
              <h3 class="color-dark-2 fontstyle" id="page-detail">
                {{ items.best_study_name }}
              </h3>
              <p id="page-detail" v-html="items.best_study_detail"></p>

              <div v-show="items.best_study_result != ''">
                <h5>ผลลัพธ์</h5>

                <p v-html="items.best_study_result"></p>
                <img class="left-img" src="img/detail/flight_2.jpg" alt="" />
                <ul>
                  <li>Shopping history</li>
                  <li>Hot offers according your settings</li>
                  <li>Multi-product search</li>
                  <li>Opportunity to share with friends</li>
                  <li>Hot offers according your settings</li>
                  <li>Multi-product search</li>
                  <li>Opportunity to share with friends</li>
                  <li>Multi-product search</li>
                </ul>
              </div>

              <div v-show="items.best_study_apply != ''">
                <h5>การนำมาใช้ประโยชน์</h5>

                <p v-html="items.best_study_apply"></p>

                <img class="right-img" src="img/detail/flight_3.jpg" alt="" />
                <ul>
                  <li>Shopping history</li>
                  <li>Hot offers according your settings</li>
                  <li>Multi-product search</li>
                  <li>Opportunity to share with friends</li>
                  <li>Hot offers according your settings</li>
                  <li>Multi-product search</li>
                  <li>Opportunity to share with friends</li>
                  <li>Multi-product search</li>
                </ul>
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
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "CaseStudys",
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
.radius-top {
  max-width: 100%;

  object-fit: cover;
  display: block;
  height: 500px;
}
.img-box {
  width: 100%;
  height: 100%;
}
</style>
<style scoped>
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
