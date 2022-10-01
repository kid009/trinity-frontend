<template>
  <div>
    <div class="sidebar bg-white clearfix">
      <SideSearch
        msgplace="พิมพ์ผลิตภัณฑ์ชุมชนที่ต้องการค้นหา"
        namepage="businessproductcommunityindexpage"
        page="1"
      />
      <div class="sidebar-block">
        <h4
          id="letter-product"
          class="sidebar-title color-dark-2 letter-spacing"
        >
          หมวดหมู่ผลิตภัณฑ์ชุมชน
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
            v-for="items in BussinessProductCommunityGroup"
            v-bind:key="items.bussiness_product_community_group_id"
          >
            <button
              class="cat-drop"
              @click="
                on_click(1, items.bussiness_product_community_group_id, 0)
              "
              id="letter-travel"
            >
              {{ items.bussiness_product_community_group_name }}
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
  name: "BusinessProductCommunitySideBar",
  components: {
    SideSearch,
  },
  setup() {
    const BussinessProductCommunityGroup = ref([]);
    const message = ref();

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/businesstourism/BussinessProductCommunityGroup`
      );
      BussinessProductCommunityGroup.value = response.data.data;
    };

    function on_click(page, group, id) {
      window.location =
        "businessproductcommunityindexpage?page=" +
        page +
        "&group=" +
        group +
        "&id=" +
        id;
    }

    onMounted(() => {
      getData();
    });

    return { BussinessProductCommunityGroup, on_click, message };
  },
};
</script>

<style></style>
