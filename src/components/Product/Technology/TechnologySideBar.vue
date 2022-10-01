<template>
  <!-- <div class="col-xs-12 col-sm-4 col-md-3"> -->
  <div>
    <div class="sidebar bg-white clearfix">
      <SideSearch
        msgplace="พิมพ์เทคโนโลยีการค้นหา"
        namepage="technologypage"
        page="1"
      />
      <div class="sidebar-block">
        <h4
          id="letter-product"
          class="sidebar-title color-dark-2 letter-spacing"
        >
          หมวดหมู่เทคโนโลยี
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
            v-for="items in technologyGroup"
            v-bind:key="items.researcher_technology_group_id"
          >
            <button
              class="cat-drop"
              @click="on_click(1, items.researcher_technology_group_id, 0)"
              id="letter-travel"
            >
              {{ items.researcher_technology_group_name }}
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
  name: "TechnologySideBar",
  components: {
    SideSearch,
  },

  setup() {
    const technologyGroup = ref([]);
    const message = ref();

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherTechnologyGroup`
      );
      technologyGroup.value = response.data.data;
    };

    function on_click(page, group, id) {
      window.location =
        "technologypage?page=" + page + "&group=" + group + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return { technologyGroup, on_click, message };
  },
};
</script>

<style></style>
