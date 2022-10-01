<template>
  <div
    class="tour-info-line clearfix"
    v-for="items in innovation"
    v-bind:key="items.researcher_output_apply_id"
  >
    <div class="detail-content color-1">
      <div class="detail-top slider-wth-thumbs style-2">
        <br />
        <h3 style="text-align: center" id="page-detail">
          {{ items.researcher_output_apply_name }}
        </h3>
        <hr />
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

        <!-- <div
          class="swiper-container thumbnails-preview"
          data-autoplay="0"
          data-loop="0"
          data-speed="500"
          data-center="0"
          data-slides-per-view="1"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide active" data-val="0">
              <div class="borders">
                <img
                  id="img-blog"
                  :src="items.researcher_output_apply_image_cover_link"
                  alt=""
                />
              </div>
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
          <hr />
          <div class="swiper-wrapper">
            <div class="swiper-slide active" data-val="0">
              <img
                id="img-select"
                class="img-responsive img-full"
                :src="items.researcher_output_apply_image_cover_link"
                alt=""
              />
            </div>
          </div>
          <div class="pagination hidden"></div>
        </div> -->
      </div>
      <hr />
      <div class="detail-content-block">
        <h3 style="text-align: center" id="page-detail">รายละเอียด</h3>
        <br />
        <p
          id="text-detail-product-detail"
          v-html="items.researcher_output_apply_detail"
        ></p>

        <div class="second-title" v-if="vdo != ''">
          <hr />
          <h3 id="page-detail" class="subtitle color-dr-black-2">
            วิดีโอแนะนำ
          </h3>

          <br />

          <!-- TEAM -->
          <div class="main-wraper">
            <div>
              <iframe
                :src="'https://www.youtube.com/embed/' + vdo"
                width="100%"
                height="315"
                controls
                autoplay
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <!-- <div class="detail-content-block clearfix">
        <div class="tags-title color-dark-2">link:</div>
        <ul class="clearfix">
          <a target="_blank" v-bind:href="items.researcher_output_apply_link"
            ><img id="img-resize" src="images/product/link.png" alt=""
          /></a>
        </ul>
      </div> -->
      <div class="detail-content-block clearfix">
        <a target="_blank" v-bind:href="items.researcher_output_apply_link">
          <div class="tags-title color-dark-2">
            link: คลิกอ่านเพิ่มเติม
            <img id="img-resize" src="images/product/link.png" alt="" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "Tab2",
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
  // methods: {
  //   showImg(index) {
  //     this.index = index;
  //     this.visible = true;
  //   },
  //   handleHide() {
  //     this.visible = false;
  //   },
  // },
  methods: {
    getId(url) {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);

      return match && match[2].length === 11 ? match[2] : null;
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
  setup() {
    const innovation = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const vdo = ref([]);

    const imgAll = ref([]);
    const Images = ref([]);

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
        `${BASE_API_URL}/innovation-product/researcherInnovationOutput/` + id
      );
      innovation.value = response.data.data;
      linkvdo = response.data.data[0].researcher_output_apply_vdo;
      changLinkvdo(linkvdo);

      imgAll.value.push(
        response.data.data[0].researcher_output_apply_image_cover_link
      );
      //console.log(response.data.data);
    };

    onMounted(() => {
      getData();
    });

    return {
      //   getId,
      innovation,

      id,
      page,
      group,
      vdo,
      linkvdo,
      imgAll,
      Images,
    };
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
}
#img-resize {
  margin-left: 10px;
  margin-bottom: 0px;
  width: 37px;
  height: auto;
  vertical-align: middle;
}
</style>
