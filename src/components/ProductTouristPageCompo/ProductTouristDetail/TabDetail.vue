<template>
  <div>
    <div class="tour-info-line clearfix">
      <div>
        <div class="detail-content color-1">
          <hr />
          <div class="detail-content-block">
            <h3 style="text-align: center" id="page-detail">รายละเอียด</h3>
            <p id="text-detail-product-detail" v-html="detail"></p>
          </div>
          <div class="detail-content">
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
                fixed-height="500px"
              >
                <vueper-slide
                  :visible="visible"
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
            </div>
          </div>
          <vue-easy-lightbox
            :visible="visible"
            :imgs="imgAllApply"
            :index="index"
            @hide="handleHide"
            class="img-zindex"
          ></vue-easy-lightbox>
          <hr />
          <div class="detail-content-block" v-if="check != 1">
            <h3 style="text-align: center" id="page-detail">โปรโมชั่น</h3>
            <span class="text-color"
              >รหัสสินค้า:
              <p id="text-detail-product-detail" v-html="product_code"></p>
            </span>
            <span class="text-color"
              >ราคา:
              <p id="text-detail-product-detail" v-html="product_price"></p>
            </span>
            <span class="text-color"
              >หน่วยสินค้า:
              <p id="text-detail-product-detail" v-html="product_unit"></p
            ></span>
            <span class="text-color"
              >โปรโมชั่น:
              <p id="text-detail-product-detail" v-html="product_promotion"></p
            ></span>
          </div>
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

export default defineComponent({
  name: "TabDetail",
  props: {
    detail: String,
    product_price: String,
    product_unit: String,
    product_promotion: String,
    product_code: String,
    imgAllApply: String,
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
    let page = window.location.search;
    page = page.split("=");
    page = page[1];
    page = page.substring(0, page.length - 6);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    let check = "";

    if (page == "researcher_technology") {
      check = 1;
    } else if (page == "researcher_innovation") {
      check = 1;
    } else if (page == "researcher_tourism_product") {
      check = 1;
    }

    // console.log(this.imgAllApply);

    return { id, page, group, check };
  },
});
</script>

<style scoped>
.img-zindex {
  z-index: 100000;
}
.img-qr {
  width: 100%;
  max-width: 300px;
  height: 350px;
  display: block;
  margin: auto;
}

.borders {
  height: 500px;
}
.text-color {
  color: rgb(0, 0, 0);
}
</style>
