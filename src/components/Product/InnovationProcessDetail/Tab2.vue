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
        </div>
      </div>
      <hr />
      <div class="detail-content-block">
        <h3 style="text-align: center" id="page-detail">รายละเอียดผลิตภัณฑ์</h3>
        <br />
        <p
          id="text-detail-product-detail"
          v-html="items.researcher_output_apply_detail"
        ></p>

        <hr />
        <div class="second-title">
          <h3 id="page-detail" class="subtitle color-dr-black-2">
            วิดีโอแนะนำผลิตภัณฑ์
          </h3>

          <br />

          <!-- TEAM -->
          <div class="main-wraper padd-90">
            <div>
              <iframe
                width="100%"
                height="430px"
                :src="
                  'https://www.youtube.com/embed' + researcher_output_apply_vdo
                "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div class="detail-content-block clearfix">
        <div class="tags-title color-dark-2">link:</div>
        <ul class="clearfix">
          <a target="_blank" v-bind:href="items.researcher_output_apply_link"
            ><img id="img-resize" src="images/product/link.png" alt=""
          /></a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "Tab2",
  methods: {
    getId(url) {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);

      return match && match[2].length === 11 ? match[2] : null;
    },
  },
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
          `${BASE_API_URL}/innovation-product/researcherInnovationOutput/${id}`
        );
        innovation.value = response.data.data;
        //console.log(response.data.data);
      } else if (page == 2) {
        const responses = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTourismProductOutput/${id}`
        );
        TourismProduct.value = responses.data.data;
        //console.log(responses.data.data);
      } else if (page == 3) {
        const responsess = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTechnologyOutput/${id}`
        );
        Technology.value = responsess.data.data;
        //console.log(responsess.data.data);
      } else if (page == 4) {
        const responsesss = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProductCommunityOutput/${id}`
        );
        ProductCommunity.value = responsesss.data.data;
        //console.log(responsesss.data.data);
      } else if (page == 5) {
        const responsessss = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProductOrganize/${id}`
        );
        businessProduct.value = responsessss.data.data;
        //console.log(responsessss.data.data);
      } else if (page == 6) {
        const responsesssss = await axios.get(
          `${BASE_API_URL}/innovation-product/productOutput/${id}`
        );
        Product.value = responsesssss.data.data;
        //console.log(responsesssss.data.data);
      }
    };

    onMounted(() => {
      getData();
    });

    return {
      //   getId,
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
