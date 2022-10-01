<template>
  <div>
    <div class="sidebar bg-white clearfix">
      <SideSearch
        msgplace="พิมพ์ผลิตภัณฑ์ธุรกิจที่ต้องการค้นหา"
        namepage="businessproductbusinessindexpage"
        page="1"
      />
      <div class="sidebar-block">
        <h4
          id="letter-product"
          class="sidebar-title color-dark-2 letter-spacing"
        >
          หมวดหมู่ผลิตภัณฑ์ธุรกิจ
        </h4>
        <ul class="sidebar-category color-4">
          <li class="active">
            <button
              class="cat-drop"
              @click="on_click(1, 0, 0)"
              id="letter-travel"
            >
              ทั้งหมด
            </button>
          </li>
          <li
            v-for="items in BussinessProductGroup"
            v-bind:key="items.bussiness_product_group_id"
          >
            <button
              class="cat-drop"
              @click="on_click(1, items.bussiness_product_group_id, 0)"
              id="letter-travel"
            >
              {{ items.bussiness_product_group_name }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";
import SideSearch from "../../SideSearch.vue";

export default {
  name: "BusinessProductBusinessSideBar",
  components: {
    SideSearch,
  },
  setup() {
    const BussinessProductGroup = ref([]);
    const message = ref();

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/businesstourism/BussinessProductGroup`
      );
      BussinessProductGroup.value = response.data.data;
    };

    function on_click(page, group, id) {
      window.location =
        "businessproductbusinessindexpage?page=" +
        page +
        "&group=" +
        group +
        "&id=" +
        id;
    }

    onMounted(() => {
      getData();
    });

    return { BussinessProductGroup, on_click, message };
  },
};
</script>

<style></style>
