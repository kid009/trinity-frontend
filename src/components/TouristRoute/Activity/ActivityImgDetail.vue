<template>
  <div class="container">
    <div class="row">
      <div class="arrows">
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
              v-for="items in activitydetailimg.slice(0,1)"
              v-bind:key="items.activity_id"
            >
              <div class="hotel-item style-2">
                <div class="radius-top">
                  <img :src="items.activity_image_cover" alt="" />
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
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";
export default {
  name: "ActivityImgDetail",
  setup() {
    const activitydetailimg = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/tourism-route/activitDetail/` + id
      );
      activitydetailimg.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { activitydetailimg, page, group, id };
  },
};
</script>

<style>
</style>