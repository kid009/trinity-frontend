<template>
  <div
    class="tour-info-line clearfix"
    v-for="items in innovation"
    v-bind:key="items.researcher_innovation_id"
  >
    <div v-if="items.researcher_innovation_id == id">
      <div class="detail-content color-1">
        <hr />
        <div class="detail-content-block">
          <h3
            style="text-align: center"
            id="page-detail"
            class="color-dark-2 fontstyle"
          >
            รายละเอียดนวัตกรรม
          </h3>
          <p
            class="fontstyle"
            id="text-detail-product-detail"
            v-html="items.researcher_innovation_detail"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../../constants";

export default {
  name: "TabDetail",
  setup() {
    const innovation = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherInnovationDetail/${id}`
      );
      innovation.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return {
      innovation,

      id,
      page,
      group,
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
