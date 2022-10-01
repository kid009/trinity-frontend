<template>
  <div class="">
    <div class="top-baner map-baner">
      <div class="">
        <div
          id="map-canvas"
          class="bg-bg-chrome"
          v-lazy="'images/bg/bg_leans.jpg'"
        >
          <div id="map-canvas" class="bg-bg-chrome color-bg-img"></div>
        </div>

        <div class="vertical-bottom">
          <div class="text_center">
            <h1 class="shadow text_white fontstyle">การท่องเที่ยวโดยชุมชน</h1>
            <h3 class="shadow text_white fontstyle">
              (COMMUNITY BASED TOURISM CBT)
            </h3>
            <h4 class="text_white fontstyle">
              คือ การท่องเที่ยวที่คำนึงถึงความยั่งยืนของสิ่งแวดล้อม สังคม
              และวัฒนธรรมของชุมชนกำหนด ทิศทางโดยชุมชน จัดการโดยชุมชน
            </h4>
            <h4 class="text_white fontstyle">
              เพื่อชุมชน และชุมชนมีบทบาทเป็นเจ้าของในการจัดการ ดูแล
              เพื่อให้เกิดการเรียนรู้แก่ผู้มาเยือน
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row padd-70-70">
        <div class="col-xs-12">
          <div v-for="item in knowledgemanagement" :key="item">
            <div class="tour-info-line clearfix">
              <div>
                <div class="detail-content color-1">
                  <div class="detail-top slider-wth-thumbs style-2">
                    <br />
                    <h3 style="text-align: center" class="text_black fontstyle">
                      {{ item.knowledge_management_name }}
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

                        <p
                          class="fontstyle"
                          v-html="item.knowledge_management_detail"
                        ></p>
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
                    <a
                      target="_blank"
                      v-bind:href="item.knowledge_management_link"
                    >
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
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../../constants";

import { defineComponent } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import VueEasyLightbox from "vue-easy-lightbox";

export default defineComponent({
  name: "LearningDetail",
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
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const knowledgemanagement = ref([]);
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
        `${BASE_API_URL}/home/knowledgemanagementDetail/` + id
      );
      knowledgemanagement.value = response.data.data;
      linkvdo = response.data.data[0].knowledge_management_vdo;
      changLinkvdo(linkvdo);
      //   console.log(knowledgemanagement.value);
      const responseImages = await axios.get(
        `${BASE_API_URL}/home/knowledgemanagementImage/` + id
      );
      Images.value = responseImages.data.data;
      imgAll.value.push(
        response.data.data[0].knowledge_management_image_cover_link
      );

      for (let key in responseImages.data.data) {
        let imageAll = responseImages.data.data[key];
        imgAll.value.push(imageAll.knowledge_management_image_file_link);
      }

      //   console.log(imgAll.value);
    };

    onMounted(() => {
      getData();
    });

    return { knowledgemanagement, imgAll, Images, vdo, linkvdo };
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
.fontstyle {
  font-family: "Prompt", sans-serif;
}
#img_blog {
  width: auto;
  max-width: 100%;
  height: 500px;
  overflow: hidden;
  display: block;
  margin: auto;
}
#img_select {
  width: auto;
  height: 150px;
  overflow: hidden;
  display: block;
  margin: auto;
}
.map-baner {
  padding-top: 0px;
}
.map-baner #map-canvas {
  height: 380px;
}
h1 {
  font-size: 64px;
  line-height: 60px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: white;
  text-shadow: 1px 1px 3px #000000;
}
.color-bg-img {
  background: rgba(255, 0, 0, 0);
  background: -webkit-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: -o-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: -moz-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0), #000000);
}

.vertical-bottom {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding-right: 5px;
  padding-left: 5px;
  padding-bottom: 90px;
}
.text_center {
  text-align: center;
}
.text_black {
  color: rgb(0, 0, 0);
}

.text_white {
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
h1 {
  font-size: 74px;
  line-height: 60px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;

  text-shadow: 2px 2px 3px #000000;
}

h3 {
  font-size: 1.4rem;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
}
h4 {
  font-size: 22px;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;

  text-shadow: 2px 2px 3px #000000;
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
@media screen and (max-width: 600px) {
  h1 {
    font-size: 38px;
    line-height: 60px;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 1px;

    text-shadow: 2px 2px 3px #000000;
  }
  h3 {
    font-size: 22px;
    line-height: 2.363rem;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 1px;
  }
  h4 {
    font-size: 16px;
    line-height: 2.363rem;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 1px;

    text-shadow: 2px 2px 3px #000000;
  }
}
</style>
