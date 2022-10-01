<template>
  <div class="col-xs-12 col-sm-4 col-md-3">
    <div class="sidebar bg-white clearfix">
      <SideSearch
        msgplace="พิมพ์นวัฒกรรมกระบวนการที่ต้องการค้นหา"
        namepage="innovationprocesspage"
        page="1"
      />
      <div class="sidebar-block">
        <h4
          id="letter-product"
          class="sidebar-title color-dark-2 letter-spacing"
        >
          หมวดหมู่นวัตกรรมกระบวนการ
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
            v-for="items in innovationobjectGroup"
            v-bind:key="items.researcher_innovation_group_id"
          >
            <button
              v-show="items.researcher_innovation_group_id != 6"
              class="cat-drop"
              @click="on_click(1, items.researcher_innovation_group_id, 0)"
              id="letter-travel"
            >
              {{ items.researcher_innovation_group_name }}
            </button>

            <!-- <button
                v-if="items.researcher_innovation_group_id == 6 "
                class="cat-drop"
                @click="on_click('innovationprocesspage', 0, 0)"
                id="letter-travel"
                
              >
                {{ items.researcher_innovation_group_name }}
              </button> -->
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
  name: "InnovationProcessSideBar",
  components: {
    SideSearch,
  },
  setup() {
    const innovationobjectGroup = ref([]);
    const message = ref();

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherInnovationGroup`
      );
      innovationobjectGroup.value = response.data.data;
    };

    function on_click(page, group, id) {
      if (page == "innovationprocesspage") {
        window.location =
          "innovationprocesspage?page=1&group=" + group + "&id=" + id;
      } else {
        window.location =
          "innovationobjectpage?page=" + page + "&group=" + group + "&id=" + id;
      }
    }

    onMounted(() => {
      getData();
    });

    return { innovationobjectGroup, on_click, message };
  },
};
</script>

<style></style>
