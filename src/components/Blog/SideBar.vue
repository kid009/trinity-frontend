<template>
  <div class="col-xs-12 col-sm-4 col-md-3">
    <div class="sidebar bg-white clearfix">
      <SideSearch
        msgplace="พิมพ์บทความที่ต้องการค้นหา"
        namepage="blog"
        :page="page"
      />
      <div class="sidebar-block">
        <h4 class="sidebar-title color-dark-2 letter-spacing">หมวดหมู่</h4>
        <ul class="sidebar-category color-1">
          <li class="active">
            <a @click="on_click(page, 0, 0)">ทั้งหมด</a>
          </li>
          <li
            v-for="items in blogGroup"
            v-bind:key="items.tourism_experience_group_id"
          >
            <a @click="on_click(page, items.tourism_experience_group_id, 0)">
              {{ items.tourism_experience_group_name }} <span class="fr"></span
            ></a>
          </li>
          <li
            v-for="items in blogGroup"
            v-bind:key="items.tourism_knowhow_group_id"
          >
            <a @click="on_click(page, items.tourism_knowhow_group_id, 0)"
              >{{ items.tourism_knowhow_group_name }}<span class="fr"></span
            ></a>
          </li>
          <li
            v-for="items in blogGroup"
            v-bind:key="items.tourism_impressive_group_id"
          >
            <a @click="on_click(page, items.tourism_impressive_group_id, 0)"
              >{{ items.tourism_impressive_group_name }}<span class="fr"></span
            ></a>
          </li>
          <li
            v-for="items in blogGroup"
            v-bind:key="items.tourism_story_group_id"
          >
            <a @click="on_click(page, items.tourism_story_group_id, 0)"
              >{{ items.tourism_story_group_name }}<span class="fr"></span
            ></a>
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
    const blogGroup = ref([]);

    let page = window.location.search;
    page = page.split("=");
    page = page[1];
    page = page.substring(0, page.length - 6);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/blog/` + page + "Group"
      );
      blogGroup.value = response.data.data;
      console.log(response.data.data);
    };

    function on_click(page, group, id) {
      window.location = "blog?page=" + page + "&group=" + group + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return {
      id,
      page,
      group,
      on_click,
      blogGroup,
    };
  },
};
</script>

<style></style>
