<template>
  <div class="col-xs-12 col-sm-4 col-md-3">
    <SideSearch
      msgplace="พิมพ์กิจกรรมท่องเที่ยวที่ต้องการค้นหา"
      namepage="activityindex"
      page="1"
    />
    <div class="sidebar bg_color clearfix">
      <div class="sidebar-block">
        <h4 id="letter-travel" class="sidebar-title color-white letter-spacing">
          หมวดหมู่เส้นทาง
        </h4>
        <ul class="sidebar-category color-4">
          <li class="active">
            <button
              class="cat-drop color-white"
              @click="on_click(1, 0, 0)"
              id="letter-travel"
            >
              ทั้งหมด
            </button>
          </li>
          <li
            v-for="items in activityGroup"
            v-bind:key="items.activity_group_id"
          >
            <button
              class="cat-drop color-white"
              @click="on_click(1, items.activity_group_id, 0)"
              id="letter-travel"
            >
              {{ items.activity_group_name }}
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
  name: "ActivitySideBar",
  components: {
    SideSearch,
  },

  setup() {
    const activityGroup = ref([]);
    const message = ref();

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/tourism-route/activitGroup`
      );
      activityGroup.value = response.data.data;
    };

    function on_click(page, group, id) {
      window.location =
        "activityindex?page=" + page + "&group=" + group + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return { activityGroup, on_click, message };
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
  color: #ffffff;
  border-bottom: 2px solid cadetblue;
}
button {
  color: #ffffff;
}
.bg_color {
  background: #01588d;
}
</style>
