<template>
  <div class="main-wraper padd-120">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="second-title">
            <h2 class="text-letter">สถานที่อื่นๆ</h2>
            <p class="color-grey">
              ชุมชนต่างๆของแต่ละจังหวัด ที่มีจุดเด่นและเอกลักษณ์ที่เป็นของตัวเอง
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="arrows">
          <div
            class="swiper-container pad-15"
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
          >
            <div class="swiper-wrapper">
              <div
                v-for="items in community"
                v-bind:key="items.community_id"
                class="swiper-slide"
              >
                <div class="hotel-item style-2">
                  <div class="radius-top">
                    <img :src="items.community_image_cover_link" alt="" />
                    <div class="price price-s-1">
                      {{ items.community_name }}
                    </div>
                  </div>
                  <div class="title">
                    <h4>
                      <b>{{ items.community_name }}</b>
                    </h4>
                    <h4>
                      จังหวัด : <b>{{ items.province_name }}</b>
                    </h4>
                    <div class="rate-wrap">
                      <div class="rate">
                        <span class="fa fa-star color-yellow"></span>
                        <span class="fa fa-star color-yellow"></span>
                        <span class="fa fa-star color-yellow"></span>
                        <span class="fa fa-star color-yellow"></span>
                        <span class="fa fa-star color-yellow"></span>
                      </div>
                      <i>485 rewies</i>
                    </div>
                    <a
                      :href="'communitydetail?id=' + items.community_id"
                      class="c-button b-40 bg-red-3 hv-red-3-o"
                      >เพิ่มเติม</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="pagination poin-style-2"></div>
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
  name: "Other",
  setup() {
    const community = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/community`
      );
      community.value = response.data.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { community };
  },
};
</script>

<style scoped>
.text-letter {
  letter-spacing: 0;
}
.img-other {
  width: 100%;
  height: 250px;
}
</style>
