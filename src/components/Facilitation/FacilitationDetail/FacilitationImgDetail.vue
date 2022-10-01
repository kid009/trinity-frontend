<template>
  <!------------------------------------------------ hotel ---------------------------------------->

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div><h3>รูปภาพและสินค้าบริการ</h3></div>
        <div class="detail-content-block">
          <!-- <vueper-slides
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
        </vueper-slides> -->

          <vue-easy-lightbox
            :visible="visible"
            :imgs="imgAll"
            :index="index"
            @hide="handleHide"
            class="img-zindex"
          ></vue-easy-lightbox>

          <vueper-slides
            class="no-shadow"
            :visible-slides="3"
            slide-multiple
            :gap="3"
            :slide-ratio="1 / 4"
            :dragging-distance="200"
            :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
          >
            <vueper-slide
              v-for="(slide, i) in imgAll"
              :key="i"
              :image="slide"
              @click="() => showImg(index)"
              class="img_pop"
            />
          </vueper-slides>
        </div>

        <!-- <div class="arrows">
        <div
          class="swiper-container pad-15 swiper-swiper-unique-id-7 initialized"
          data-autoplay="0"
          data-loop="0"
          data-speed="1000"
          data-slides-per-view="responsive"
          data-mob-slides="1"
          data-xs-slides="2"
          data-sm-slides="2"
          data-md-slides="3"
          data-lg-slides="3"
          data-add-slides="3"
          id="swiper-unique-id-7"
        >
          <div
            class="swiper-wrapper"
            style="
              width: 1944px;
              transition-duration: 0s;

              height: 629px;
            "
          >
            <div
              class="swiper-slide swiper-slide-visible swiper-slide-active"
              style="width: 324px; height: 629px"
            >
              <div class="hotel-item style-2">
                <div class="radius-top">
                  <img :src="img" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="pagination poin-style-2 pagination-swiper-unique-id-7">
            <span
              class="swiper-pagination-switch"
              style="display: inline-block"
            ></span
            ><span
              class="swiper-pagination-switch"
              style="display: inline-block"
            ></span
            ><span
              class="
                swiper-pagination-switch
                swiper-visible-switch
                swiper-active-switch
              "
              style="display: inline-block"
            ></span
            ><span
              class="swiper-pagination-switch swiper-visible-switch"
              style="display: inline-block"
            ></span
            ><span
              class="swiper-pagination-switch swiper-visible-switch"
              style="display: none"
            ></span
            ><span
              class="swiper-pagination-switch"
              style="display: none"
            ></span>
          </div>
        </div>
      </div> -->
      </div>
    </div>
  </div>

  <!------------------------------------------------ hotel ---------------------------------------->
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "FacilitationImgDetail",
  props: {
    img: String,
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
};
</script>

<style scoped>
.img_pop:hover {
  transform: scale(1.1);
}
.img-zindex {
  z-index: 100000;
}
h3 {
  font-family: "Prompt", sans-serif;
  letter-spacing: 1px;
  font-weight: 600;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #206ab0;
}
</style>
