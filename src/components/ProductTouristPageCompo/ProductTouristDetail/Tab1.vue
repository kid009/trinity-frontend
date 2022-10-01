<template>
  <div>
    <div class="tour-info-line clearfix">
      <div>
        <div class="detail-content color-1">
          <div class="detail-top slider-wth-thumbs style-2">
            <br />
            <h3
              style="text-align: center"
              id="page-detail"
              class="color-dark-2"
            >
              {{ name }}
            </h3>
            <hr />
            <!------------------------------------------- ------------------------------------------->

            <div class="detail-content">
              <div class="detail-content-block">
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
            </div>
          </div>

          <div style="text-align: center" v-if="vdo != ''">
            <hr />
            <h3 style="text-align: center" id="page-detail">วิดีโอแนะนำ</h3>

            <iframe
              :src="'https://www.youtube.com/embed/' + vdo"
              width="100%"
              height="315"
              controls
              autoplay
            ></iframe>
          </div>
          <hr />

          <div class="row">
            <div class="col-xs-12">
              <div class="">
                <div
                  class="detail-content-block clearfix"
                  v-if="qrcode != null"
                >
                  <h3 style="text-align: center" id="page-detail">
                    สแกนคิวอาร์โค้ดเพื่ออ่านเพิ่มเติม
                  </h3>
                  <img
                    v-show="countError == 2"
                    class="img-qr"
                    :src="qrcode"
                    alt=""
                    @error="checkImg()"
                  />
                  <img
                    v-show="countError == 3"
                    class="img-qr"
                    src="images/nopicture.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="">
                <div class="detail-content-block clearfix">
                  <a target="_blank" v-bind:href="link">
                    <div class="tags-title color-dark-2">
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

          <!-- <hr />
          <div class="detail-content-block clearfix">
            <a target="_blank" v-bind:href="link">
              <div class="tags-title color-dark-2">
                link: คลิกอ่านเพิ่มเติม
                <img id="img-resize" src="images/product/link.png" alt="" />
              </div>
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import { defineComponent } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import VueEasyLightbox from "vue-easy-lightbox";

export default defineComponent({
  name: "Tab1",
  props: {
    idProduct: String,
    name: String,
    image: String,
    link: String,
    qrcode: String,
    vdo: String,
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
    const countError = ref(1);
    function checkImg() {
      countError.value++;
    }
    const countErrorImg = ref(1);
    function checkImgs() {
      countErrorImg.value++;
    }
    return { checkImg, countError, countErrorImg, checkImgs };
  },
});
</script>
<style>
.vel-btns-wrapper .btn__next {
  right: 12px;
  border-radius: 20px;
  background-color: rgb(0, 162, 231);
}
.vel-btns-wrapper .btn__prev {
  left: 12px;
  border-radius: 20px;
  background-color: rgb(0, 162, 231);
}
</style>

<style scoped>
.img-zindex {
  z-index: 100000;
}
#img_travels {
  width: auto;
  max-width: 300px;
  height: 260px;
  overflow: hidden;
  display: block;
  margin: auto;
}
/* .radius-top {
  height: 300px;
} */
.radius-top img {
  width: 100%;

  object-fit: cover;
  display: block;
  height: 300px;
}
.img_hight {
  height: 500px;
}
.video {
  width: 100%;
  height: 430;
}
.img-qr {
  width: 100%;
  max-width: 300px;
  height: 300px;
  display: block;
  margin: auto;
}

.borders {
  height: 500px;
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
.detail-content-block {
  margin-bottom: 10px;
}

.position_link {
  min-height: 10em;
  display: table-cell;
  vertical-align: middle;
}
#img-resize {
  margin-left: 10px;
  margin-bottom: 0px;
  width: 37px;
  height: auto;
  vertical-align: middle;
}
@media screen and (max-width: 600px) {
  .tags-title {
    color: white;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    background-color: #206ab0;
    padding: 10px;
    border-radius: 10px;
    margin-top: 0px;
    display: block;
    margin: auto;
  }
}
@media screen and (max-width: 1280px) {
  #img-resize {
    margin-left: 10px;
    margin-bottom: 0px;
    width: 30px;
    height: auto;
    vertical-align: middle;
  }
}
</style>
