<template>
  <div class="tab-info">
    <div class="acc-body">
      <div class="main-wraper padd-70-70">
        <div class="container box">
          <div
            v-for="items in community"
            v-bind:key="items.product_id"
            class="item hotels gal-item style-3 col-mob-12 col-xs-6 col-sm-4"
          >
            <a
              class="black-hover"
              :href="
                'productDetail?page=6&group=' +
                items.product_group_id +
                '&id=' +
                items.product_id
              "
            >
              <div class="gal-item-icon">
                <img
                  style="height: 375px"
                  class="img-full img-responsive"
                  :src="items.product_image_cover_link"
                  alt=""
                />
                <div class="price price-s-1">ราคา</div>
                <div class="tour-layer delay-1"></div>
                <div class="vertical-align">
                  <span class="c-button small bg-white delay-2"
                    ><span>view more</span></span
                  >
                </div>
              </div>
              <div class="gal-item-desc delay-1">
                <h4>
                  <b class="text-letter">{{ items.product_name }}</b>
                </h4>
                <h5></h5>
              </div>
            </a>
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
  name: "Tab3",
  setup() {
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const community = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/product/` + id
      );
      community.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { community };
  },
};
</script>

<style>
.text-letter {
  letter-spacing: 0;
}
</style>
