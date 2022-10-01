<template>
  <div class="main-wraper padd-90 background-block">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
          <div class="second-title">
            <h2 class="color-white">ความรู้งานวิจัย</h2>
            <hr />
          </div>
        </div>
      </div>
      <div class="arrows">
        <div
          class="
            swiper-container
            testi-slider
            swiper-swiper-unique-id-1
            initialized
          "
          data-autoplay="0"
          data-loop="0"
          data-speed="900"
          data-center="0"
          data-slides-per-view="1"
          id="swiper-unique-id-1"
        >
          <div
            class="swiper-wrapper"
            style="
              width: 1880px;
              transform: translate3d(-940px, 0px, 0px);
              transition-duration: 0s;
              height: 188px;
            "
          >
            <div
              class="swiper-slide"
              data-val="0"
              style="width: 940px; height: 188px"
              v-for="item in researcherproduct"
              v-bind:key="item.researcher_knowhow_id"
            >
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
                    <div class="sg-testimonals">
                      <img
                        class="sg-image"
                        :src="item.researcher_knowhow_image_cover_link"
                        alt=""
                      />
                      <h3 class="color-white">
                        {{ item.researcher_knowhow_name }}
                      </h3>
                      <p
                        class="f-14 color-white-light"
                        v-html="item.researcher_knowhow_detail"
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              pagination pagination-hidden
              poin-style-1
              pagination-swiper-unique-id-1
            "
          >
            <span class="swiper-pagination-switch"></span
            ><span
              class="
                swiper-pagination-switch
                swiper-visible-switch
                swiper-active-switch
              "
            ></span>
          </div>
          <div class="arrow-wrapp arr-s-5">
            <div class="cont-1170">
              <div class="swiper-arrow-left sw-arrow">
                <span class="fa fa-angle-left"></span>
              </div>
              <div class="swiper-arrow-right sw-arrow">
                <span class="fa fa-angle-right"></span>
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
  name: "ResearcherProduct",
  setup() {
    const researcherproduct = ref([]);

    const getData = async () => {
      const response = await axios.get(`${BASE_API_URL}/Researcher/Knowhow`);
      researcherproduct.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { researcherproduct };
  },
};
</script>

<style scoped>
hr {
  width: 80%;
  border: 1px dashed #bebebe;
}
.header-text {
  padding-top: 50px;
  text-align: center;
}

.sg-testimonals .sg-image {
  border-radius: 10px;
}
.sg-testimonals img {
  height: 300px;
}
.second-title {
  position: relative;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 65px;
}
.main-wraper {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: block;
  background-color: #263b50;
}
.sg-testimonals img[data-v-0da7314d] {
  height: 300px;
  width: 300px;
  object-fit: cover;
}
</style>