<template>
  <div
    class="tour-info-line clearfix"
    v-for="items in BusinessKnowhowDetail"
    v-bind:key="items.bussiness_knowhow_id"
  >
    <div>
      <div class="detail-content color-1">
        <hr />
        <div class="detail-content-block">
          <h3 style="text-align: center" id="page-detail" class="color-dark-2">
            รายละเอียดความรู้
          </h3>
          <p
            id="text-detail-product-detail"
            v-html="items.bussiness_knowhow_detail"
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
    const BusinessKnowhowDetail = ref([]);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const responses = await axios.get(
        `${BASE_API_URL}/businesstourism/BusinessKnowhowDetail/` + id
      );
      BusinessKnowhowDetail.value = responses.data.data;
    };

    onMounted(() => {
      getData();
    });

    return {
      BusinessKnowhowDetail,

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
