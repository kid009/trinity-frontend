<template>
  <div
    class="tour-info-line clearfix"
    v-for="items in TourismProduct"
    v-bind:key="items.researcher_tourism_product_id"
  >
    <div>
      <div class="detail-content color-1">
        <hr />
        <div class="detail-content-block">
          <h3 style="text-align: center" id="page-detail" class="color-dark-2">
            รายละเอียดนวัตกรรมท่องเที่ยว
          </h3>
          <p
            id="text-detail-product-detail page-detail"
            class="fontstyle"
            v-html="items.researcher_tourism_product_detail"
          ></p>
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
  name: "TabDetail",
  setup() {
    const TourismProduct = ref([]);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const responses = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherTourismProductDetail/` +
          id
      );
      TourismProduct.value = responses.data.data;
    };

    onMounted(() => {
      getData();
    });

    return {
      TourismProduct,

      id,
    };
  },
};
</script>

<style scoped>
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
</style>
