<template>
  <!-- <div class="col-xs-12 col-sm-4 col-md-3"> -->
  <div>
    <div class="sidebar bg-white clearfix">
      <SideSearch
        msgplace="พิมพ์ความรู้งานวิจัย/โครงการที่ต้องการค้นหา"
        namepage="researcherlearningindex"
        page="1"
      />
      <div class="sidebar-block">
        <h4
          id="letter-travel"
          class="sidebar-title color-dark-2 letter-spacing"
        >
          หมวดหมู่ความรู้งานวิจัย/โครงการ
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
            v-for="items in researcherKnowhowGroup"
            v-bind:key="items.researcher_knowhow_group_id"
          >
            <button
              class="cat-drop"
              @click="on_click(1, items.researcher_knowhow_group_id, 0)"
              id="letter-travel"
            >
              {{ items.researcher_knowhow_group_name }}
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
  name: "ResearcherKnowhowSideBar",
  components: {
    SideSearch,
  },
  setup() {
    const researcherKnowhowGroup = ref([]);
    const message = ref();

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/Researcher/KnowhowAllGroup`
      );
      researcherKnowhowGroup.value = response.data.data;
    };

    function on_click(page, group, id) {
      window.location =
        "researcherlearningindex?page=" +
        page +
        "&group=" +
        group +
        "&id=" +
        id;
    }

    onMounted(() => {
      getData();
    });

    return { researcherKnowhowGroup, on_click, message };
  },
};
</script>

<style scoped>
button {
  text-align: start;
  color: #000;
}
.sidebar {
  padding: 15px 20px 20px 15px;
}
button:hover {
  color: #01588d;
  border-bottom: 2px solid cadetblue;
}
</style>
