<template>
  <div
    class="tour-info-line clearfix"
    v-for="items in Technology"
    v-bind:key="items.researcher_technology_id"
  >
    <div>
      <div class="detail-content color-1">
        <hr />
        <div class="detail-content-block">
          <h3 style="text-align: center" id="page-detail">
            รายละเอียดเทคโนโลยี
          </h3>
          <p
            id="text-detail-product-detail"
            class="fontstyle"
            v-html="items.researcher_technology_detail"
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
    const Technology = ref([]);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherTechnologyDetail/` + id
      );

      Technology.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return {
      Technology,

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
