<template>
  <div class="detail-header style-3">
    <h2 id="text-detail" class="detail-title color-dark-2">
      {{ blog_name }}
    </h2>
    <div class="tour-info-line clearfix">
      <div class="tour-info">
        <img src="img/calendar_icon_grey.png" alt="" />
        <span class="font-style-2 color-dark-2">{{ blog_province_name }}</span>
      </div>
      <div class="tour-info">
        <img src="img/people_icon_grey.png" alt="" />
        <span class="font-style-2 color-dark-2"
          >By : {{ blog_amphur_name }}</span
        >
      </div>
      <div class="tour-info">
        <img src="img/comment_icon_grey.png" alt="" />
        <span class="font-style-2 color-dark-2">{{ blog_tambon_name }}</span>
      </div>
    </div>
  </div>
  <div class="detail-content">
    <div class="detail-content-block">
      <div class="slider-wth-thumbs style-2">
        <div class="">
          <vueper-slides
            ref="vueperslides1"
            :touchable="false"
            fade
            :autoplay="false"
            :bullets="false"
            @slide="
              $refs.vueperslides2.goToSlide($event.currentSlide.index, {
                emit: false,
              })
            "
            fixed-height="400px"
          >
            <vueper-slide
              :visible="visible"
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
              $refs.vueperslides1.goToSlide($event.currentSlide.index, {
                emit: false,
              })
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
        </div>
        <!-- <div
          class="swiper-container thumbnails-preview"
          data-autoplay="0"
          data-loop="0"
          data-speed="500"
          data-center="0"
          data-slides-per-view="1"
        >
          <div id="img-background" class="swiper-wrapper">
            <div class="swiper-slide active" data-val="0">
              <img
                id="img-blog"
                class="img-responsive img-full"
                :src="blog_image_cover_link"
                alt=""
              />
            </div>
          </div>
          <div class="pagination pagination-hidden"></div>
        </div>
        <div
          class="swiper-container thumbnails"
          data-autoplay="0"
          data-loop="0"
          data-speed="500"
          data-center="0"
          data-slides-per-view="responsive"
          data-xs-slides="3"
          data-sm-slides="5"
          data-md-slides="5"
          data-lg-slides="5"
          data-add-slides="5"
        >
          <div id="img-background" class="swiper-wrapper">
            <div class="swiper-slide current active" data-val="0">
              <img
                id="img-select"
                class="img-responsive img-full"
                :src="blog_image_cover_link"
                alt=""
              />
            </div>
          </div>
          <div class="pagination hidden"></div>
        </div> -->
      </div>
      <h3 id="text-detail" v-html="blog_detail"></h3>
      <p></p>
      <h5 id="text-detail" v-html="blog_detail_en"></h5>
      <p></p>
      <div
        class="embed-responsive embed-responsive-16by9"
        v-if="blog_vdo != ''"
      >
        <!-- <iframe :src="blog_vdo" allowfullscreen></iframe> -->
        <div style="text-align: center">
          <hr />
          <h3 style="text-align: center" id="page-detail">วิดีโอแนะนำ</h3>

          <iframe
            :src="'https://www.youtube.com/embed/' + blog_vdo"
            width="100%"
            height="315"
            controls
            autoplay
          ></iframe>
        </div>
      </div>
      <div class="tags clearfix">
        <!-- <div class="tags-title color-dark-2">link:</div>
        <ul class="clearfix">
          <li>
            &nbsp;<a target="_blank" v-bind:href="blog_link"
              ><img id="img-resize" src="images/product/link.png" alt=""
            /></a>
          </li>
        </ul> -->
        <div class="detail-content-block clearfix">
          <a target="_blank" v-bind:href="blog_link">
            <div class="tags-title color-dark-2">
              link: คลิกอ่านเพิ่มเติม
              <img id="img-resize" src="images/product/link.png" alt="" />
            </div>
          </a>
        </div>
      </div>
      <div class="share clearfix">
        <div class="share-title color-dark-2">share:</div>
        <div
          class="fb-share-button"
          data-href="http://54.169.131.81/sprintvillagear/blog_details.php?detail"
          data-layout="box_count"
          data-size="small"
        >
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
            class="fb-xfbml-parse-ignore"
            >แชร์</a
          >
        </div>

        <li class="color-tw">
          <a
            tarket="_blank"
            href="https://twitter.com/share?url=http://54.169.131.81/sprintvillagear/blog_details.php?detail"
            ><i class="fa fa-twitter"></i>twitter</a
          >
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import VueEasyLightbox from "vue-easy-lightbox";
export default {
  name: "Content",
  props: {
    blog_name: String,
    blog_province_name: String,
    blog_amphur_name: String,
    blog_tambon_name: String,
    blog_image_cover_link: String,
    blog_detail: String,
    blog_detail_en: String,
    blog_vdo: String,
    blog_link: String,
    imgAll: String,
  },
  components: {
    VueperSlides,
    VueperSlide,
    VueEasyLightbox,
  },
  // data: () => ({
  //   slides: [
  //     {
  //       title: "img",
  //       image:
  //         "https://cdn.pixabay.com/photo/2020/03/26/10/58/norway-4970080_960_720.jpg",
  //     },
  //   ],
  // }),
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

  computed: {
    videoElement() {
      return this.$refs.video;
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.img-zindex {
  z-index: 100000;
}
#img-blog {
  width: auto;
  max-width: 100%;
  height: 500px;
  overflow: hidden;
  display: block;
  margin: auto;
}
#img-select {
  width: auto;
  height: 150px;
  overflow: hidden;
  display: block;
  margin: auto;
}
#img-background {
  background-color: #f5f5f5;
}
#img-other-blog {
  width: auto;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
#text-detail {
  letter-spacing: 0;
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
</style>
