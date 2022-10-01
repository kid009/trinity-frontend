<template>
  <div class="container">
    <div class="row">
      <div
        class="swiper-container swiper-swiper-unique-id-1 initialized"
        data-autoplay="0"
        data-loop="0"
        data-speed="1000"
        data-slides-per-view="responsive"
        data-mob-slides="1"
        data-xs-slides="2"
        data-sm-slides="4"
        data-md-slides="5"
        data-lg-slides="6"
        data-add-slides="6"
        id="swiper-unique-id-1"
      >
        <div class="swiper-wrapper" style="width: 1827px; height: 320px">
          <div
            class="swiper-slide swiper-slide-visible swiper-slide-active"
            style="width: 203px; height: 320px"
            v-for="items in imagecarousel"
            v-bind:key="items.bussiness_id"
          >
            <div class="tour-item">
              <div class="radius-top">
                <img :src="items.bussiness_image_cover_link" alt="" />
                <div class="tour-weather">
                  <img :src="items.bussiness_image_cover_link" alt="" />+30<span
                    class="sup"
                    >o</span
                  >C
                </div>
              </div>
              <div class="tour-desc bg-white">
                <h4>
                  <a class="tour-title color-dark-2 link-blue" href="#"
                    >mauritius</a
                  >
                </h4>
                <div class="tour-text color-grey-3">Cursus libero purus</div>
                <div class="tour-price">
                  from <span class="color-blue">$860</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination poin-style-2 pagination-swiper-unique-id-1">
          <span
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
            style="display: inline-block"
          ></span
          ><span
            class="swiper-pagination-switch swiper-visible-switch"
            style="display: inline-block"
          ></span
          ><span
            class="swiper-pagination-switch swiper-visible-switch"
            style="display: inline-block"
          ></span
          ><span class="swiper-pagination-switch" style="display: none"></span
          ><span class="swiper-pagination-switch" style="display: none"></span
          ><span class="swiper-pagination-switch" style="display: none"></span
          ><span class="swiper-pagination-switch" style="display: none"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";
export default {
  name: "ImageCarousel",
  setup() {
    const imagecarousel = ref([]);
    let id = "";
    id = id.split("=");
    id = id[1];
    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/plan/BussinessDetail?bussiness_id=` + id
      );
      imagecarousel.value = response.data.data;
      console.log(response.data.data);
    };

    onMounted(() => {
      getData();
    });

    return { imagecarousel, id };
  },
};
</script>

<style scoped></style>
