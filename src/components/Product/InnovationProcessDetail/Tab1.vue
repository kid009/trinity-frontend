<template>
  <div
    class="tour-info-line clearfix"
    v-for="items in innovation"
    v-bind:key="items.researcher_innovation_id"
  >
    <div v-if="items.researcher_innovation_id == id">
      <div class="detail-content color-1">
        <div class="detail-top slider-wth-thumbs style-2">
          <br />
          <h3 style="text-align: center" id="page-detail" class="color-dark-2">
            {{ items.researcher_innovation_name }}
          </h3>
          <hr />
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
          </div>
        </div>
        <hr />
        <div class="detail-content-block">
          <h3
            style="text-align: center"
            id="page-detail"
            class="detail-title color-dark-2"
          >
            รายละเอียดผลิตภัณฑ์
          </h3>
          <p
            id="text-detail-product-detail"
            v-html="items.researcher_innovation_detail"
          ></p>
        </div>

        <hr />
        <div class="detail-content-block clearfix">
          <div class="tags-title color-dark-2">link:</div>
          <ul class="clearfix">
            <a target="_blank" v-bind:href="items.researcher_innovation_link"
              ><img id="img-resize" src="images/product/link.png" alt=""
            /></a>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div
    class="tour-info-line clearfix"
    v-for="items in TourismProduct"
    v-bind:key="items.researcher_tourism_product_id"
  >
    <div v-if="items.researcher_tourism_product_id == id">
      <div class="detail-content color-1">
        <div class="detail-top slider-wth-thumbs style-2">
          <br />
          <h3 style="text-align: center" id="page-detail">
            {{ items.researcher_tourism_product_name }}
          </h3>
          <hr />
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
                <div class="borders">
                  <img
                    id="img-blog"
                    class="img-responsive img-full"
                    :src="items.researcher_tourism_product_image_cover_link"
                    alt=""
                  />

                  <!-- <img id="img-blog" class="img-responsive img-full " src=""  alt="">   
					
									<img id="img-blog" class="img-responsive img-full " src=""  alt="">    -->
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
                  :src="items.researcher_tourism_product_image_cover_link"
                  alt=""
                />

                <!-- <img id="img-select" class="img-responsive img-full" src=""  alt="">   
						
									<img id="img-select" class="img-responsive img-full" src=""  alt="">    -->
              </div>
            </div>
            <div class="pagination hidden"></div>
          </div>
        </div>
        <hr />
        <div class="detail-content-block">
          <h3 style="text-align: center" id="page-detail">
            รายละเอียดผลิตภัณฑ์
          </h3>
          <p
            id="text-detail-product-detail"
            v-html="items.researcher_tourism_product_detail"
          ></p>
        </div>
        <hr />
        <div class="detail-content-block clearfix">
          <div class="tags-title color-dark-2">link:</div>
          <ul class="clearfix">
            <a
              target="_blank"
              v-bind:href="items.researcher_tourism_product_link"
              ><img id="img-resize" src="images/product/link.png" alt=""
            /></a>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div
    class="tour-info-line clearfix"
    v-for="items in Technology"
    v-bind:key="items.researcher_technology_id"
  >
    <div v-if="items.researcher_technology_id == id">
      <div class="detail-content color-1">
        <div class="detail-top slider-wth-thumbs style-2">
          <br />
          <h3 style="text-align: center" id="page-detail">
            {{ items.researcher_technology_name }}
          </h3>
          <hr />
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
                <div class="borders">
                  <img
                    id="img-blog"
                    class="img-responsive img-full"
                    :src="items.researcher_technology_image_cover_link"
                    alt=""
                  />

                  <!-- <img id="img-blog" class="img-responsive img-full " src=""  alt="">   
					
									<img id="img-blog" class="img-responsive img-full " src=""  alt="">    -->
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
                  :src="items.researcher_technology_image_cover_link"
                  alt=""
                />

                <!-- <img id="img-select" class="img-responsive img-full" src=""  alt="">   
						
									<img id="img-select" class="img-responsive img-full" src=""  alt="">    -->
              </div>

              <div class="swiper-slide" data-val="<?php echo $i; ?>">
                <img
                  id="img-select"
                  class="img-responsive img-full"
                  src=""
                  alt=""
                />
              </div>
            </div>
            <div class="pagination hidden"></div>
          </div>
        </div>
        <hr />
        <div class="detail-content-block">
          <h3 style="text-align: center" id="page-detail">
            รายละเอียดผลิตภัณฑ์
          </h3>
          <p
            id="text-detail-product-detail"
            v-html="items.researcher_technology_detail"
          ></p>
        </div>
        <hr />
        <div class="detail-content-block clearfix">
          <div class="tags-title color-dark-2">link:</div>
          <ul class="clearfix">
            <a target="_blank" v-bind:href="items.researcher_technology_link"
              ><img id="img-resize" src="images/product/link.png" alt=""
            /></a>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div
    class="tour-info-line clearfix"
    v-for="items in ProductCommunity"
    v-bind:key="items.bussiness_product_community_id"
  >
    <div v-if="items.bussiness_product_community_id == id">
      <div class="detail-content color-1">
        <div class="detail-top slider-wth-thumbs style-2">
          <br />
          <h3 style="text-align: center" id="page-detail">
            {{ items.bussiness_product_community_name }}
          </h3>
          <hr />
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
                <div class="borders">
                  <img
                    id="img-blog"
                    class="img-responsive img-full"
                    :src="items.bussiness_product_community_image_cover_link"
                    alt=""
                  />

                  <!-- <img id="img-blog" class="img-responsive img-full " src=""  alt="">   
					
									<img id="img-blog" class="img-responsive img-full " src=""  alt="">    -->
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
                  :src="items.bussiness_product_community_image_cover_link"
                  alt=""
                />

                <!-- <img id="img-select" class="img-responsive img-full" src=""  alt="">   
						
									<img id="img-select" class="img-responsive img-full" src=""  alt="">    -->
              </div>

              <div class="swiper-slide" data-val="<?php echo $i; ?>">
                <img
                  id="img-select"
                  class="img-responsive img-full"
                  src=""
                  alt=""
                />
              </div>
            </div>
            <div class="pagination hidden"></div>
          </div>
        </div>
        <hr />
        <div class="detail-content-block">
          <h3 style="text-align: center" id="page-detail">
            รายละเอียดผลิตภัณฑ์
          </h3>
          <p
            id="text-detail-product-detail"
            v-html="items.bussiness_product_community_detail"
          ></p>
        </div>
        <hr />
        <div class="detail-content-block clearfix">
          <div class="tags-title color-dark-2">link:</div>
          <ul class="clearfix">
            <a
              target="_blank"
              v-bind:href="items.bussiness_product_community_link"
              ><img id="img-resize" src="images/product/link.png" alt=""
            /></a>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div
    class="tour-info-line clearfix"
    v-for="items in businessProduct"
    v-bind:key="items.bussiness_product_id"
  >
    <div v-if="items.bussiness_product_id == id">
      <div class="detail-content color-1">
        <div class="detail-top slider-wth-thumbs style-2">
          <br />
          <h3 style="text-align: center" id="page-detail">
            {{ items.bussiness_product_name }}
          </h3>
          <hr />
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
                <div class="borders">
                  <img
                    id="img-blog"
                    class="img-responsive img-full"
                    :src="items.bussiness_product_image_cover_link"
                    alt=""
                  />

                  <!-- <img id="img-blog" class="img-responsive img-full " src=""  alt="">   
					
									<img id="img-blog" class="img-responsive img-full " src=""  alt="">    -->
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
                  :src="items.bussiness_product_image_cover_link"
                  alt=""
                />

                <!-- <img id="img-select" class="img-responsive img-full" src=""  alt="">   
						
									<img id="img-select" class="img-responsive img-full" src=""  alt="">    -->
              </div>

              <div class="swiper-slide" data-val="<?php echo $i; ?>">
                <img
                  id="img-select"
                  class="img-responsive img-full"
                  src=""
                  alt=""
                />
              </div>
            </div>
            <div class="pagination hidden"></div>
          </div>
        </div>
        <hr />
        <div class="detail-content-block">
          <h3 style="text-align: center" id="page-detail">
            รายละเอียดผลิตภัณฑ์
          </h3>
          <p
            id="text-detail-product-detail"
            v-html="items.bussiness_product_detail"
          ></p>
        </div>
        <hr />
        <div class="detail-content-block clearfix">
          <div class="tags-title color-dark-2">link:</div>
          <ul class="clearfix">
            <a target="_blank" v-bind:href="items.bussiness_product_link"
              ><img id="img-resize" src="images/product/link.png" alt=""
            /></a>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div
    class="tour-info-line clearfix"
    v-for="items in Product"
    v-bind:key="items.product_id"
  >
    <div v-if="items.product_id == id">
      <div class="detail-content color-1">
        <div class="detail-top slider-wth-thumbs style-2">
          <br />
          <h3 style="text-align: center" id="page-detail">
            {{ items.product_name }}
          </h3>
          <hr />
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
                <div class="borders">
                  <img
                    id="img-blog"
                    class="img-responsive img-full"
                    :src="items.product_image_cover_link"
                    alt=""
                  />

                  <!-- <img id="img-blog" class="img-responsive img-full " src=""  alt="">   
					
									<img id="img-blog" class="img-responsive img-full " src=""  alt="">    -->
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
                  :src="items.product_image_cover_link"
                  alt=""
                />

                <!-- <img id="img-select" class="img-responsive img-full" src=""  alt="">   
						
									<img id="img-select" class="img-responsive img-full" src=""  alt="">    -->
              </div>
            </div>
            <div class="pagination hidden"></div>
          </div>
        </div>
        <hr />
        <div class="detail-content-block">
          <h3 style="text-align: center" id="page-detail">
            รายละเอียดผลิตภัณฑ์
          </h3>
          <p id="text-detail-product-detail" v-html="items.product_detail"></p>
        </div>
        <hr />
        <div class="detail-content-block clearfix">
          <div class="tags-title color-dark-2">link:</div>
          <ul class="clearfix">
            <a target="_blank" v-bind:href="items.product_link"
              ><img id="img-resize" src="images/product/link.png" alt=""
            /></a>
          </ul>
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
  name: "Tab1",

  setup() {
    const TourismProduct = ref([]);
    const innovation = ref([]);
    const Technology = ref([]);
    const ProductCommunity = ref([]);
    const businessProduct = ref([]);
    const Product = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      if (page == 1) {
        const response = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherInnovationDetail/${id}`
        );
        innovation.value = response.data.data;
        console.log(response.data.data);
      } else if (page == 2) {
        const responses = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTourismProductDetail/${id}`
        );
        TourismProduct.value = responses.data.data;
        console.log(responses.data.data);
      } else if (page == 3) {
        const responsess = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTechnologyDetail/${id}`
        );
        Technology.value = responsess.data.data;
        console.log(responsess.data.data);
      } else if (page == 4) {
        const responsesss = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProductCommunityDetail/${id}`
        );
        ProductCommunity.value = responsesss.data.data;
        console.log(responsesss.data.data);
      } else if (page == 5) {
        const responsessss = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProductDetail/${id}`
        );
        businessProduct.value = responsessss.data.data;
        console.log(responsessss.data.data);
      } else if (page == 6) {
        const responsesssss = await axios.get(
          `${BASE_API_URL}/innovation-product/productDetail/${id}`
        );
        Product.value = responsesssss.data.data;
        console.log(responsesssss.data.data);
      }
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
      id,
      page,
      group,
    };
  },
};
</script>

<style scoped>
.borders {
  height: 500px;
}
</style>
