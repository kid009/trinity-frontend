<template>
  <div
    class="detail-content-block"
    v-for="items in innovation"
    v-bind:key="items.researcher_innovation_id"
  >
    <h3 style="text-align: center" id="page-detail" class="color-dark-2">
      รายละเอียดนวัตกรรม
    </h3>
    <p
      id="text-detail-product-detail"
      class="fontstyle"
      v-html="items.researcher_innovation_detail"
    ></p>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";
export default {
  name: "TabDetail",

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

<style></style>
