<template>
  <!-- <div class="col-xs-12 col-sm-4 col-md-3"> -->
  <div>
    <div class="sidebar bg-white clearfix">
      <SideSearch
        msgplace="พิมพ์นวัตกรรมท่องเที่ยวที่ต้องการค้นหา"
        namepage="researcherproductpage"
        page="1"
      />
      <div class="sidebar-block">
        <h4
          id="letter-product"
          class="sidebar-title color-dark-2 letter-spacing"
        >
          หมวดหมู่นวัตกรรมท่องเที่ยว
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
            v-for="items in researcherTourismProductGroup"
            v-bind:key="items.researcher_tourism_product_group_id"
          >
            <button
              class="cat-drop"
              @click="on_click(1, items.researcher_tourism_product_group_id, 0)"
              id="letter-travel"
            >
              {{ items.researcher_tourism_product_group_name }}
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
  name: "ResearcherProductSideBar",
  components: {
    SideSearch,
  },
  setup() {
    const researcherTourismProductGroup = ref([]);
    const message = ref();

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/Researcher/researcherTourismProductGroup`
      );
      researcherTourismProductGroup.value = response.data.data;
    };

    function on_click(page, group, id) {
      window.location =
        "researcherproductpage?page=" + page + "&group=" + group + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return { researcherTourismProductGroup, on_click, message };
  },
};
</script>

<style></style>
