<template>
  <div
    class="tour-info-line clearfix"
    v-for="items in innovation"
    v-bind:key="items.researcher_innovation_id"
  >
    <div>
      <div class="detail-content color-1">
        <div class="detail-top slider-wth-thumbs style-2">
          <br />
          <h3
            style="text-align: center"
            id="page-detail"
            class="color-dark-2 fontstyle"
          >
            {{ items.researcher_innovation_name }}
          </h3>
          <hr />
          <!------------------------------------------- ------------------------------------------->

          <div class="detail-content">
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
                  v-for="(slide, i) in imgAll"
                  :key="i"
                  :title="name"
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
              <!-- <div class="slider-wth-thumbs style-2">
                <div
                  class="swiper-container thumbnails-preview"
                  data-autoplay="0"
                  data-loop="0"
                  data-speed="500"
                  data-center="0"
                  data-slides-per-view="1"
                >
                  <div class="swiper-wrapper">
                    <div class="swiper-slide active" data-val="0">
                      <img
                        class="img-responsive img-full"
                        id="img-blog"
                        :src="items.researcher_innovation_image_cover_link"
                        alt=""
                      />
                    </div>
                    <div
                      class="swiper-slide"
                      data-val="1"
                      v-for="items in innovationImages"
                      v-bind:key="items.researcher_innovation_id"
                    >
                      <div class="borders">
                        <img
                          class="img-responsive img-full"
                          id="img-blog"
                          :src="items.research_image_file_link"
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
                  <div class="swiper-wrapper">
                    <div class="swiper-slide current active" data-val="0">
                      <img
                        class="img-responsive img-full"
                        id="img-select"
                        :src="items.researcher_innovation_image_cover_link"
                        alt=""
                      />
                    </div>

                    <div
                      class="swiper-slide"
                      data-val="1"
                      v-for="items in innovationImages"
                      v-bind:key="items.researcher_innovation_id"
                    >
                      <img
                        class="img-responsive img-full"
                        id="img-select"
                        :src="items.research_image_file_link"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="pagination hidden"></div>
                </div>
              </div> -->
            </div>
          </div>

          <!------------------------------------------------- -------------------------------------->
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
                    :src="items.researcher_innovation_image_cover_link"
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
                  :src="items.researcher_innovation_image_cover_link"
                  alt=""
                />
              </div>
            </div>
            <div class="pagination hidden"></div>
          </div>-->
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
        <div class="detail-content-block clearfix">
          <h3 style="text-align: center" id="page-detail">
            สแกนคิวอาร์โค้ดเพื่ออ่านเพิ่มเติม
          </h3>
          <img
            v-show="items.researcher_innovation_qrcode_link != null"
            class="img-qr"
            :src="items.researcher_innovation_qrcode_link"
            alt=""
          />
        </div>
        <div class="detail-content-block clearfix">
          <a target="_blank" v-bind:href="items.researcher_innovation_link">
            <div class="tags-title color-dark-2">
              link: คลิกอ่านเพิ่มเติม
              <img id="img-resize" src="images/product/link.png" alt="" />
            </div>
          </a>
        </div>
        <!-- <div class="detail-content-block clearfix">
          <div class="tags-title color-dark-2">link:</div>
          <ul class="clearfix">
            <a target="_blank" v-bind:href="items.researcher_innovation_link"
              ><img id="img-resize" src="images/product/link.png" alt=""
            /></a>
          </ul>
        </div> -->
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
  name: "Tab1",
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
    const innovation = ref([]);
    const innovationImages = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const vdo = ref([]);

    let linkvdo = "";
    const changLinkvdo = (linkvdo) => {
      if (linkvdo.includes("https://www.youtube.com/watch?v=")) {
        vdo.value = linkvdo.slice(32);
      } else if (linkvdo.includes("https://youtu.be/")) {
        vdo.value = linkvdo.slice(17);
      } else if (linkvdo.includes("https://www.youtube.com/embed/")) {
        vdo.value = linkvdo.slice(30);
      }
    };

    const Images = ref([]);

    const imgAll = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherInnovationDetail/${id}`
      );
      innovation.value = response.data.data;
      linkvdo = response.data.data[0].researcher_innovation_vdo;
      changLinkvdo(linkvdo);

      // const responseImages = await axios.get(
      //   `${BASE_API_URL}/innovation-product/researcherInnovationImages/${id}`
      // );
      // innovationImages.value = responseImages.data.data;

      imgAll.value.push(
        response.data.data[0].researcher_innovation_image_cover_link
      );

      const responseImages = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherInnovationImages/` + id
      );
      Images.value = responseImages.data.data;

      for (let key in responseImages.data.data) {
        let imageAll = responseImages.data.data[key];
        imgAll.value.push(imageAll.research_image_file_link);
      }
    };

    onMounted(() => {
      getData();
    });

    return {
      innovation,
      innovationImages,

      id,
      page,
      group,

      linkvdo,
      vdo,
      Images,
      imgAll,
    };
  },
});
</script>

<style scoped>
.img-zindex {
  z-index: 100000;
}
.detail-content-block {
  margin-bottom: 10px;
}
.img-qr {
  width: 100%;
  max-width: 300px;
  height: 300px;
  display: block;
  margin: auto;
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
