<template>
  <div
    class="tour-info-line clearfix"
    v-for="items in KnowhowDetail"
    v-bind:key="items.researcher_knowhow_id"
  >
    <div>
      <div class="detail-content color-1">
        <hr />
        <div class="detail-content-block">
          <h3 style="text-align: center" id="page-detail" class="color-dark-2">
            รายละเอียดความรู้
          </h3>
          <p
            id="text-detail-product-detail page-detail"
            class="fontstyle"
            v-html="items.researcher_knowhow_detail"
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
    const KnowhowDetail = ref([]);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const responses = await axios.get(
        `${BASE_API_URL}/Researcher/KnowhowDetail/` + id
      );
      KnowhowDetail.value = responses.data.data;
    };

    onMounted(() => {
      getData();
    });

    return {
      KnowhowDetail,

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
