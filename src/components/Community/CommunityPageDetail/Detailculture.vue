<template>
  <!-- BLOG -->
  <!-- <div
    v-for="items in culture"
    v-bind:key="items.culture_id"
    class="detail-wrapper"
  >
    <div v-if="items.culture_id == cultureid">
      <div class="container box">
        <div class="row padd-90">
          <div class="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
            <div class="blog-list">
              <div class="blog-list-entry style-2">
                <div class="blog-list-top">
                  <img
                    class="img-responsive img-full"
                    :src="items.culture_image_cover_link"
                    alt=""
                  />
                </div>
                <h4 class="blog-list-title">
                  <a class="color-dark-2 link-dr-blue-2" href="#">{{
                    items.culture_name
                  }}</a>
                </h4>
                <div class="tour-info-line clearfix">
                  <div class="tour-info fl">
                    <img src="img/calendar_icon_grey.png" alt="" />
                    <span class="font-style-2 color-dark-2"
                      >เริ่มวันที่ {{ items.culture_start_date }} ถึง
                      {{ items.culture_end_date }}</span
                    >
                  </div>
                  <div class="tour-info fl">
                    <img src="img/people_icon_grey.png" alt="" />
                    <span class="font-style-2 color-dark-2">{{
                      items.province_name
                    }}</span>
                  </div>
                  <div class="tour-info fl">
                    <img src="img/comment_icon_grey.png" alt="" />
                    <span class="font-style-2 color-dark-2">10 รีวิว</span>
                  </div>
                </div>
                <div
                  class="blog-list-text color-grey-3"
                  v-html="items.culture_detail"
                ></div>
              </div>
              <hr />
              <div v-show="items.culture_video" class="blog-list-entry style-2">
                <div class="blog-list-top">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe :src="items.culture_video"></iframe>
                  </div>
                </div>
                <hr />
              </div>
              <div class="blog-list-entry style-2">
                <div class="blog-list-top">
                  <blockquote class="blockquote color-1">
                    <p>{{ items.culture_information }}</p>
                    <footer>
                      <cite title="Source Title"
                        >{{ items.tambon_name }} | {{ items.amphur_name }}|
                        {{ items.province_name }}</cite
                      >
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div class="blog-list-entry style-2">
                <div class="blog-list-top">
                  <div class="slider-wth-thumbs style-2 arrows">
                    <div
                      class="swiper-container thumbnails-preview"
                      data-autoplay="0"
                      data-loop="1"
                      data-speed="500"
                      data-center="0"
                      data-slides-per-view="1"
                    >
                      <div class="swiper-wrapper">
                        <div class="swiper-slide active" data-val="0">
                          <img
                            class="img-responsive img-full img-size"
                            :src="cultureImg"
                            alt=""
                          />
                        </div>
                        <div
                          v-for="items in cultureImages"
                          v-bind:key="items.culture_id"
                          class="swiper-slide"
                          data-val="{{countImages++}}"
                        >
                          <img
                            class="img-responsive img-full img-size"
                            :src="items.community_image_file_link"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="pagination pagination-hidden"></div>
                      <div class="arrow-wrapp arr-s-3">
                        <div class="swiper-arrow-left sw-arrow">
                          <span class="fa fa-angle-left"></span>
                        </div>
                        <div class="swiper-arrow-right sw-arrow">
                          <span class="fa fa-angle-right"></span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="swiper-container thumbnails"
                      data-autoplay="0"
                      data-loop="0"
                      data-speed="500"
                      data-center="0"
                      data-slides-per-view="responsive"
                      data-mob-slides="2"
                      data-xs-slides="3"
                      data-sm-slides="4"
                      data-md-slides="5"
                      data-lg-slides="5"
                      data-add-slides="5"
                    >
                      <div class="swiper-wrapper">
                        <div class="swiper-slide current active" data-val="0">
                          <img
                            class="img-responsive img-full img-size-sm"
                            :src="cultureImg"
                            alt=""
                          />
                        </div>
                        <div
                          v-for="items in cultureImages"
                          v-bind:key="items.culture_id"
                          class="swiper-slide current active"
                          data-val="{{countImagess++}}"
                        >
                          <img
                            class="img-responsive img-full img-size-sm"
                            :src="items.community_image_file_link"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="pagination hidden"></div>
                    </div>
                  </div>
                </div>
                <a
                  :href="items.culture_link"
                  class="c-button small bg-dr-blue-2 hv-dr-blue-2-o"
                  ><span>ไปยังเว็บไซต์</span></a
                >
              </div>
              <div class="c_pagination clearfix">
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-------------------------------------------------------------------------------------  -->
  <div class="container">
    <div
      class="row padd-70-70"
      v-for="items in culture"
      v-bind:key="items.culture_id"
    >
      <div class="col-xs-12">
        <div v-if="items.culture_id == cultureid">
          <div class="tour-info-line clearfix">
            <div>
              <div class="detail-content color-1">
                <div class="detail-top slider-wth-thumbs style-2">
                  <!-- <div class="blog-list-top">
                    <img
                      class="img-responsive img-full"
                      :src="items.culture_image_cover_link"
                      alt=""
                    />
                  </div> -->
                  <br />
                  <h3 style="text-align: center" class="text_black fontstyle">
                    {{ items.culture_name }}
                  </h3>
                  <div class="blog-list">
                    <div class="blog-list-entry style-2">
                      <div class="tour-info-line clearfix center">
                        <div class="tour-info fl">
                          <img src="img/calendar_icon_grey.png" alt="" />
                          <span class="font-style-2 color-dark-2"
                            >เริ่มวันที่ {{ items.culture_start_date }} ถึง
                            {{ items.culture_end_date }}</span
                          >
                        </div>
                        <div class="tour-info fl">
                          <img src="img/people_icon_grey.png" alt="" />
                          <span class="font-style-2 color-dark-2">{{
                            items.province_name
                          }}</span>
                        </div>
                        <div class="tour-info fl">
                          <img src="img/comment_icon_grey.png" alt="" />
                          <span class="font-style-2 color-dark-2"
                            >10 รีวิว</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div class="detail-content">
                    <div class="detail-content-block">
                      <vueper-slides
                        ref="vueperslides1"
                        :touchable="false"
                        fade
                        :autoplay="false"
                        :bullets="false"
                        @slide="
                          $refs.vueperslides2.goToSlide(
                            $event.currentSlide.index,
                            {
                              emit: false,
                            }
                          )
                        "
                        fixed-height="500px"
                        width="auto"
                      >
                        <vueper-slide
                          v-for="(slide, i) in imgAll"
                          :key="i"
                          :image="slide"
                          @click="() => showImg(index)"
                        >
                        </vueper-slide>
                      </vueper-slides>

                      <vueper-slides
                        class="no-shadow thumbnails"
                        ref="vueperslides2"
                        @slide="
                          $refs.vueperslides1.goToSlide(
                            $event.currentSlide.index,
                            {
                              emit: false,
                            }
                          )
                        "
                        :visible-slides="5"
                        fixed-height="75px"
                        :bullets="false"
                        :touchable="false"
                        :gap="2.5"
                        :arrows="false"
                      >
                        <vueper-slide
                          v-for="(slide, i) in imgAll"
                          :key="i"
                          :image="slide"
                          @click="$refs.vueperslides2.goToSlide(i)"
                        >
                        </vueper-slide>
                      </vueper-slides>
                      <vue-easy-lightbox
                        :visible="visible"
                        :imgs="imgAll"
                        :index="index"
                        @hide="handleHide"
                        class="img-zindex"
                      ></vue-easy-lightbox>

                      <p class="fontstyle" v-html="items.culture_detail"></p>
                    </div>
                  </div>
                </div>

                <div style="text-align: center" v-if="vdo != ''">
                  <hr />
                  <h3 style="text-align: center" class="text_black fontstyle">
                    วิดีโอแนะนำ
                  </h3>

                  <iframe
                    :src="'https://www.youtube.com/embed/' + vdo"
                    width="100%"
                    height="415"
                    controls
                    autoplay
                  ></iframe>
                </div>

                <hr />
                <div class="detail-content-block clearfix">
                  <a target="_blank" v-bind:href="items.culture_link">
                    <div class="tags-title color-dark-2 fontstyle">
                      link: คลิกอ่านเพิ่มเติม
                      <img
                        id="img-resize"
                        src="images/product/link.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-------------------------------------------------------------------------------------  -->
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "Detailculture",
  components: {
    VueperSlides,
    VueperSlide,
    VueEasyLightbox,
  },
  data() {
    return {
      visible: false,
      index: 0, // default: 0
      imgs: [
        "https://via.placeholder.com/450.png/",
        { src: "https://via.placeholder.com/450.png/", title: "this is title" },
      ],
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
  setup() {
    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    let cultureid = window.location.search;
    cultureid = cultureid.split("=");
    cultureid = cultureid[2];
    cultureid = cultureid.substring(0, cultureid.length - 3);

    const culture = ref([]);
    const cultureImg = ref([]);
    const cultureImages = ref([]);

    let countImages = 1;
    let countImagess = 1;

    const imgAll = ref([]);
    const Images = ref([]);

    const vdo = ref([]);

    let linkvdo = "";
    const changLinkvdo = (linkvdo) => {
      if (linkvdo != null) {
        if (linkvdo.includes("https://www.youtube.com/watch?v=")) {
          vdo.value = linkvdo.slice(32);
        } else if (linkvdo.includes("https://youtu.be/")) {
          vdo.value = linkvdo.slice(17);
        } else if (linkvdo.includes("https://www.youtube.com/embed/")) {
          vdo.value = linkvdo.slice(30);
        }
      }
    };

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/culture/` + id
      );
      culture.value = response.data.data;
      linkvdo = response.data.data[0].culture_video;
      changLinkvdo(linkvdo);

      for (let key in culture.value) {
        let Images = culture.value[key];
        if (Images.culture_id == cultureid) {
          cultureImg.value = Images.culture_image_cover_link;
        }
      }

      const responseImages = await axios.get(
        `${BASE_API_URL}/community-tourism/cultureImages/` + id
      );
      cultureImages.value = responseImages.data.data;
      Images.value = responseImages.data.data;
      imgAll.value.push(response.data.data[0].culture_image_cover_link);

      for (let key in responseImages.data.data) {
        let imageAll = responseImages.data.data[key];
        imgAll.value.push(imageAll.community_image_file_link);
      }
    };

    onMounted(() => {
      getData();
    });

    return {
      culture,
      cultureImages,
      cultureid,
      countImages,
      countImagess,
      cultureImg,
      imgAll,
      Images,
      vdo,
      linkvdo,
    };
  },
};
</script>

<style scoped>
.fontstyle {
  font-family: "Prompt", sans-serif;
}
.padd-70-70 {
  padding-top: 20px;
  padding-bottom: 70px;
}
.img-zindex {
  z-index: 100000;
}
.img-full {
  display: block;
  margin: auto;
  width: 100%;
  height: 400px;
}
.center {
  display: block;
  margin: auto;
}
.blog-list {
  margin-bottom: 10px;
}
.blog-list-entry {
  margin-bottom: 10px;
}
.blog-list-top {
  margin-bottom: 10px;
}
.tags-title {
  color: white;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  background-color: #206ab0;
  padding: 10px;
  border-radius: 10px;
  /* margin-top: 150px; */
  display: block;
  margin: auto;
}
#img-resize {
  margin-left: 10px;
  margin-bottom: 0px;
  width: 37px;
  height: auto;
  vertical-align: middle;
}
.img-size {
  height: 700px;
}
.img-size-sm {
  height: 200px;
}
</style>
