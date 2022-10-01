<template>
  <div class="sidebar bg-white clearfix">
    <div class="sidebar-block">
      <h4 id="letter-product" class="sidebar-title color-dark-2 letter-spacing">
        หมวดหมู่API
      </h4>
      <ul class="sidebar-category color-4">
        <li class="active">
          <a class="cat-drop" href="DataApi" id="letter-travel">
            ทั้งหมด
          </a>
        </li>

        <li v-for="item in Group" :key="item">
          <a
            :href="'DataApi?id=' + item.api_url_group"
            class="cat"
            id="letter-travel"
            >{{ item.api_url_group }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";
export default {
  name: "DataSideBar",
  setup() {
    const Group = ref([]);

    const getData = async () => {
      const response = await axios.get(`${BASE_API_URL}/OpenData/Group`);
      Group.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { Group };
  },
};
</script>

<style></style>
