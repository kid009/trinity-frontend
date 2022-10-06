<template>
  <div class="col-xs-12 col-sm-8 col-md-9">
    <div class="grid-content clearfix">
      <!----------------------- innovation ------------------------------------------------------------->

      <div class="col-xs-12 col-sm-12 col-md-11">
        <div class="detail-header style-2">
          <div class="">
            <div v-if="group == 0">
              <h3 class="letter-layout">เทคโนโลยี</h3>
            </div>
            <div v-if="group == 1">
              <h3 class="letter-layout">เทคโนโลยี</h3>
            </div>
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
                    class="swiper-slide"
                    v-for="items in innovation"
                    v-bind:key="items.researcher_innovation_id"
                  >
                    <div class="hotel-item style-2">
                      <div class="gal-item-icon">
                        <div class="radius-top cell-view border">
                          <img
                            id="img-travel"
                            :src="items.researcher_innovation_image_cover_link"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="title">
                        <h4>{{ items.researcher_innovation_name }}</h4>
                        <button
                          class="c-button b-40 bg-red-3 hv-red-3-o"
                          type="button"
                          @click="
                            on_click(
                              1,
                              items.researcher_innovation_group_id,
                              items.researcher_innovation_id,
                              'productDetail'
                            )
                          "
                        >
                          เพิ่มเติม
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pagination poin-style-2"></div>
              </div>
            </div>
          </div>

          <!--------------------------------- innovation -------------------------------------------------->

          <!----------------------- TourismProduct ------------------------------------------------------------->

          <div class="">
            <div v-if="group == 0">
              <h3 class="letter-layout">นวัตกรรมผลิตภัณฑ์</h3>
            </div>
            <div v-if="group == 2">
              <h3 class="letter-layout">นวัตกรรมผลิตภัณฑ์</h3>
            </div>
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
                    class="swiper-slide"
                    v-for="item in TourismProduct"
                    v-bind:key="item.researcher_tourism_product_id"
                  >
                    <div class="hotel-item style-2">
                      <div class="gal-item-icon">
                        <div class="radius-top cell-view border">
                          <img
                            id="img-travel"
                            :src="item.researcher_tourism_product_image_cover"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="title">
                        <h4>{{ item.researcher_tourism_product_name }}</h4>
                        <button
                          class="c-button b-40 bg-red-3 hv-red-3-o"
                          type="button"
                          @click="
                            on_click(
                              2,
                              item.researcher_tourism_product_group_id,
                              item.researcher_tourism_product_id,
                              'productDetail'
                            )
                          "
                        >
                          เพิ่มเติม
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pagination poin-style-2"></div>
              </div>
            </div>
          </div>

          <!--------------------------------- TourismProduct -------------------------------------------------->

          <!----------------------- Technology ------------------------------------------------------------->

          <div class="">
            <div v-if="group == 0">
              <h3 class="letter-layout">สินค้าในชุมชน</h3>
            </div>
            <div v-if="group == 3">
              <h3 class="letter-layout">สินค้าในชุมชน</h3>
            </div>
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
                    class="swiper-slide"
                    v-for="item in Technology"
                    v-bind:key="item.researcher_technology_id"
                  >
                    <div class="hotel-item style-2">
                      <div class="gal-item-icon">
                        <div class="radius-top cell-view border">
                          <img
                            id="img-travel"
                            :src="item.researcher_technology_image_cover_link"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="title">
                        <h4>{{ item.researcher_technology_name }}</h4>
                        <button
                          class="c-button b-40 bg-red-3 hv-red-3-o"
                          type="button"
                          @click="
                            on_click(
                              3,
                              item.researcher_technology_group_id,
                              item.researcher_technology_id,
                              'productDetail'
                            )
                          "
                        >
                          เพิ่มเติม
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pagination poin-style-2"></div>
              </div>
            </div>
          </div>

          <!--------------------------------- Technology -------------------------------------------------->

          <!----------------------- ProductCommunity ------------------------------------------------------------->

          <div class="">
            <div v-if="group == 0">
              <h3 class="letter-layout">ผลิตภัณฑ์ธุรกิจ</h3>
            </div>
            <div v-if="group == 4">
              <h3 class="letter-layout">ผลิตภัณฑ์ธุรกิจ</h3>
            </div>
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
                    class="swiper-slide"
                    v-for="item in ProductCommunity"
                    v-bind:key="item.bussiness_product_community_id"
                  >
                    <div class="hotel-item style-2">
                      <div class="gal-item-icon">
                        <div class="radius-top cell-view border">
                          <img
                            id="img-travel"
                            :src="item.bussiness_product_community_image_cover"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="title">
                        <h4>{{ item.bussiness_product_community_name }}</h4>
                        <button
                          class="c-button b-40 bg-red-3 hv-red-3-o"
                          type="button"
                          @click="
                            on_click(
                              4,
                              item.bussiness_product_community_group_id,
                              item.bussiness_product_community_id,
                              'productDetail'
                            )
                          "
                        >
                          เพิ่มเติม
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pagination poin-style-2"></div>
              </div>
            </div>
          </div>

          <!--------------------------------- ProductCommunity -------------------------------------------------->

          <!----------------------- businessProduct ------------------------------------------------------------->

          <div class="">
            <div v-if="group == 0">
              <h3 class="letter-layout">ผลิตภัณฑ์ท่องเที่ยว</h3>
            </div>
            <div v-if="group == 5">
              <h3 class="letter-layout">ผลิตภัณฑ์ท่องเที่ยว</h3>
            </div>
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
                    class="swiper-slide"
                    v-for="item in businessProduct"
                    v-bind:key="item.bussiness_product_id"
                  >
                    <div class="hotel-item style-2">
                      <div class="gal-item-icon">
                        <div class="radius-top cell-view border">
                          <img
                            id="img-travel"
                            :src="item.bussiness_product_image_cover"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="title">
                        <h4>{{ item.bussiness_product_name }}</h4>
                        <button
                          class="c-button b-40 bg-red-3 hv-red-3-o"
                          type="button"
                          @click="
                            on_click(
                              5,
                              item.bussiness_product_group_id,
                              item.bussiness_product_id,
                              'productDetail'
                            )
                          "
                        >
                          เพิ่มเติม
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pagination poin-style-2"></div>
              </div>
            </div>
          </div>

          <!--------------------------------- businessProduct -------------------------------------------------->

          <!----------------------- Product ------------------------------------------------------------->

          <div class="">
            <div v-if="group == 0">
              <h3 class="letter-layout">ผลิตภัณฑ์ชุมชน</h3>
            </div>
            <div v-if="group == 6">
              <h3 class="letter-layout">ผลิตภัณฑ์ชุมชน</h3>
            </div>
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
                    class="swiper-slide"
                    v-for="item in Product"
                    v-bind:key="item.product_id"
                  >
                    <div class="hotel-item style-2">
                      <div class="gal-item-icon">
                        <div class="radius-top cell-view border">
                          <img
                            id="img-travel"
                            :src="item.product_image_cover"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="title">
                        <h4>{{ item.product_name }}</h4>
                        <button
                          class="c-button b-40 bg-red-3 hv-red-3-o"
                          type="button"
                          @click="
                            on_click(
                              6,
                              item.product_group_id,
                              item.product_id,
                              'productDetail'
                            )
                          "
                        >
                          เพิ่มเติม
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pagination poin-style-2"></div>
              </div>
            </div>
          </div>

          <!--------------------------------- Product -------------------------------------------------->
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
  name: "GridMenu",
  components: {},

  setup() {
    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const TourismProduct = ref([]);
    const innovation = ref([]);
    const Technology = ref([]);
    const ProductCommunity = ref([]);
    const businessProduct = ref([]);
    const Product = ref([]);

    const getData = async () => {
      if (group == 0) {
        const response = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherInnovation`
        );
        innovation.value = response.data.data.data;

        const responses = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTourismProduct`
        );
        TourismProduct.value = responses.data.data.data;

        const responsess = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTechnology`
        );
        Technology.value = responsess.data.data.data;

        const responsesss = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProductCommunity`
        );
        ProductCommunity.value = responsesss.data.data.data;

        const responsessss = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProduct`
        );
        businessProduct.value = responsessss.data.data.data;

        const responsesssss = await axios.get(
          `${BASE_API_URL}/innovation-product/product`
        );
        Product.value = responsesssss.data.data.data;
      } else if (group == 1) {
        const response = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherInnovation`
        );
        innovation.value = response.data.data.data;
      } else if (group == 2) {
        const responses = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTourismProduct`
        );
        TourismProduct.value = responses.data.data.data;
      } else if (group == 3) {
        const responsess = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTechnology`
        );
        Technology.value = responsess.data.data.data;
      } else if (group == 4) {
        const responsesss = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProductCommunity`
        );
        ProductCommunity.value = responsesss.data.data.data;
      } else if (group == 5) {
        const responsessss = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProduct`
        );
        businessProduct.value = responsessss.data.data.data;
      } else if (group == 6) {
        const responsesssss = await axios.get(
          `${BASE_API_URL}/innovation-product/product`
        );
        Product.value = responsesssss.data.data.data;
      }
    };

    const on_click = (page, group, id, name) => {
      window.location =
        name + "?page=" + page + "&group=" + group + "&id=" + id;
    };

    onMounted(() => {
      getData();
    });

    return {
      innovation,
      TourismProduct,
      Technology,
      ProductCommunity,
      businessProduct,
      Product,
      on_click,
      id,
      page,
      group,
    };
  },
};
</script>

<style>
#img-travel {
  width: auto;
  max-width: 300px;
  height: 230px;
  overflow: hidden;
  display: block;
  margin: auto;
}
.border {
  border: 10px solid #ffffff;
  padding: 5px;
  width: 100%;
  height: 250px;
  background-color: #f5f5f5;
}
#h4-topic-product {
  letter-spacing: 0;
}
</style>
