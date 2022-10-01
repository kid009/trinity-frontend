<template>
  <div class="col-xs-12 col-sm-4 col-md-3">
    <div class="sidebar bg-white clearfix">
      <SideSearch
        msgplace="พิมพ์เส้นทางท่องเที่ยวที่ต้องการค้นหา"
        namepage="touristroute"
        page="1"
      />
      <div class="sidebar-block">
        <h4 id="letter-travel" class="sidebar-title color-dark-2 letter-spacing">
          หมวดหมู่เส้นทาง
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
            v-for="items in routeGroup"
            v-bind:key="items.tourism_route_group_id"
          >
            <button
              class="cat-drop"
              @click="on_click(1, items.tourism_route_group_id, 0)"
              id="letter-travel"
            >
              {{ items.tourism_route_group_name }}
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
import { BASE_API_URL } from "../../constants";
import SideSearch from "../SideSearch.vue";

export default {
  name: "SideBar",
  components: {
    SideSearch,
  },
  setup() {
    const routeGroup = ref([]);
    const message = ref();

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/tourism-route/routeGroup`
      );
      routeGroup.value = response.data.data;
    };

    function on_click(page, group, id) {
      window.location =
        "touristroute?page=" + page + "&group=" + group + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return { routeGroup, on_click, message };
  },
};
</script>

<style></style>
