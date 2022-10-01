<template>
  <div class="hotel-items">
    <div class="padd-10-01">
      <div class="col-xs-12 col-md-4">
        <div class="vl">
          <div class="detail-content color-1">
            <h3 style="text-align: center" class="fontstyle">
              ชุมชนที่นำไปใช้
            </h3>
            <div class="bg_com">
              <a :href="community_name_link + community_id">
                <!-- <img class="img-qr" src="images/nopicture.jpg" alt="" /> -->
                <img class="img-qr" :src="images_community" alt=""
              /></a>
              <div class="text_center">
                <h4 class="textshadow fontstyle">
                  {{ community_name }}
                </h4>
              </div>
            </div>
            <br />
          </div>
          <br />
          <br />

          <div class="detail-content color-1">
            <h3 style="text-align: center" class="fontstyle">
              สแกนคิวอาร์โค้ดเพื่ออ่านเพิ่มเติม
            </h3>
            <div class="bg_qr">
              <img
                v-show="countError == 2"
                class="img-qr"
                :src="qrcode"
                alt="QRCode"
                @error="checkImg()"
              />
              <img
                v-show="countError == 3"
                class="img-qr"
                src="images/nopicture.jpg"
                alt="QRCode"
              />
            </div>
            <br />
            <div class="">
              <a target="_blank" v-bind:href="link">
                <div class="tags-title color-dark-2 fontstyle">
                  link: คลิกอ่านเพิ่มเติม
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-8">
        <div class="detail-content color-1">
          <div class="">
            <h3 class="fontstyle text_color" v-html="detail"></h3>
          </div>
        </div>

        <div class="detail-content-block" v-if="imgAllApply != ''">
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
            fixed-height="470px"
          >
            <vueper-slide
              v-for="(slide, i) in imgAllApply"
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
              v-for="(slide, i) in imgAllApply"
              :key="i"
              :image="slide"
              @click="$refs.vueperslides2.goToSlide(i)"
            >
            </vueper-slide>
          </vueper-slides>
          <vue-easy-lightbox
            :visible="visible"
            :imgs="imgAllApply"
            :index="index"
            @hide="handleHide"
            class="img-zindex"
          ></vue-easy-lightbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import VueEasyLightbox from "vue-easy-lightbox";

import { ref } from "vue";
export default defineComponent({
  name: "TabData",
  props: {
    idProduct: String,
    // name: String,
    link: String,
    qrcode: String,
    detail: String,
    imgAllApply: String,
    community_name_link: String,
    images_community: String,
    community_id: String,
    community_name: String,
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
  setup() {
    const countError = ref(1);
    function checkImg() {
      countError.value++;
    }
    return { checkImg, countError };
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
h4 {
  /* position: relative; */
  font-size: 20px;
  line-height: 1.863rem;
  font-weight: 550;
  text-transform: capitalize;
  letter-spacing: 0px;
  color: rgba(0, 88, 141, 255);
  /* text-shadow: 2px 2px 2px #000000; */
}
.vertical-bottom {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
}
.text_center {
  text-align: center;
}
.img-zindex {
  z-index: 100000;
}
.fontstyle {
  font-family: "Prompt", sans-serif;
}
.padd-10-01 {
  padding-top: 20px;
}
.vl {
  position: relative;
  border-right: 3px solid rgba(0, 88, 141, 255);
  height: 100%;
  padding-right: 15px;
  padding-left: 5px;
  padding-top: 15px;
}
.img-qr {
  width: 100%;
  max-width: 200px;
  height: 200px;
  display: block;
  margin: auto;
  box-shadow: 2px 1px 5px #222222;
}
.bg_com:hover {
  transform: scale(1.1);
}
.bg_com {
  background-color: rgba(8, 114, 201, 0);
  border-radius: 15px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  max-width: 230px;
  display: block;
  margin: auto;
}
.bg_qr {
  background-color: rgba(0, 88, 141, 255);
  border-radius: 15px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  max-width: 230px;
  display: block;
  margin: auto;
}
.tags-title {
  color: white;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  background-color: rgba(0, 88, 141, 255);
  padding: 10px;
  border-radius: 10px;
  padding-top: 10px;
  display: block;
  margin: auto;
}
.hotel-items {
  border-radius: 15px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 15px;
  padding-bottom: 10px;
  /* box-shadow: 2px 1px 5px #222222; */
  background: rgb(255, 255, 255);
}
.hotel-items {
  position: relative;
  width: 100%;
  float: left;
  display: inline-block;
  box-shadow: 4px 3px 5px 0px rgb(0 0 0 / 3%);
}
.text_color {
  color: rgba(0, 88, 141, 255);
}
h3 {
  /* position: relative; */
  font-size: 28px;
  line-height: 1.863rem;
  font-weight: 550;
  text-transform: capitalize;
  letter-spacing: 0;
  color: rgba(0, 88, 141, 255);
}
</style>
