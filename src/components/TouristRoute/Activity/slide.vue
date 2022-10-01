<template>
  <!-- <Carousel :items-to-show="1" :wrap-around="true" :mouseDrag="true">
    <Slide v-for="item in imgall" :key="item.activity_id">
      <div class="carousel__item">
        <img :src="item.community_image_file" alt="" />
      </div>
    </Slide>
    <template #addons>
      <Pagination />
      <Navigation class="bg-color" />
    </template>
  </Carousel>
  <div class="box-img-slide"><img src="" alt="" /></div> -->

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
    fixed-height="340px"
  >
    <vueper-slide
      :visible="visible"
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

  <!--------------------------------------- ----------------->
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";
import { defineComponent } from "vue";
// import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

// import "vue3-carousel/dist/carousel.css";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import VueEasyLightbox from "vue-easy-lightbox";
export default defineComponent({
  name: "WrapAround",
  components: {
    VueperSlides,
    VueperSlide,
    VueEasyLightbox,
    // Carousel,
    // Slide,
    // Navigation,
    // Pagination,
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
    const activity = ref([]);

    const imgall = ref([]);
    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const Images = ref([]);

    const imgAll = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/tourism-route/activitDetail/` + id
      );
      const responseImg = await axios.get(
        `${BASE_API_URL}/tourism-route/activitDetailImage/` + id
      );
      activity.value = response.data.data;

      imgall.value = responseImg.data.data;

      imgAll.value.push(response.data.data[0].activity_image_cover);

      const responseImages = await axios.get(
        `${BASE_API_URL}/tourism-route/activitDetailImage/` + id
      );
      Images.value = responseImages.data.data;

      for (let key in responseImages.data.data) {
        let imageAll = responseImages.data.data[key];
        imgAll.value.push(imageAll.community_image_file);
      }
    };

    onMounted(() => {
      getData();
    });

    return { activity, page, group, id, imgall, Images, imgAll };
  },
});
</script>

<style scoped>
.img-zindex {
  z-index: 100000;
}
.carousel__item img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
.bg-colot {
  background-color: rgb(0, 0, 0) !important;
}
.carousel__pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  overflow: hidden;
}
</style>
