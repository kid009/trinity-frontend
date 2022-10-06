<template>
  <div class="clearfix bg-white">
    <div class="container">
      <div class="detail-header style-2 position-body">
        <h2 v-if="id != null" class="color-dark-2 letter-spacing">{{ id }}</h2>
        <h2 v-else class="color-dark-2 letter-spacing">ทั้งหมด</h2>
        <br />
        <div v-for="item in api" :key="item" class="tour-info-line clearfix">
          <h3 class="letter-spacing">{{ item.api_url_name }}</h3>
          <a target="_" class="text-line" :href="item.api_url_link">{{
            item.api_url_link
          }}</a
          ><br />
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
  name: "DataPage",
  setup() {
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const api = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/OpenData/apiLink/` + id
      );
      api.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });
    return { id, api };
  },
};
</script>

<style scoped>
.text-spaec {
  letter-spacing: 0px;
}
.text-line {
  text-decoration: underline;
}
.position-body {
  flex: 1 1 auto;
  padding: 1.5rem;
}
</style>
