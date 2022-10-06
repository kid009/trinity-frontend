<template>
  <div class="blog">
    <!-- <BannerSearch
      msg="BLOG"
      img="https://cdn.pixabay.com/photo/2015/05/31/11/25/girl-791177_960_720.jpg"
      msgplace="พิมพ์บทความที่ต้องการค้นหา"
      :page="page"
      namepage="blog"
    /> -->
    <Banner
      msg="BLOG"
      img="https://cdn.pixabay.com/photo/2015/05/31/11/25/girl-791177_960_720.jpg"
    />

    <div class="list-wrapper bg-grey-2">
      <div class="container box">
        <div class="row">
          <SideBar />
          <GirdMenu :GirdMenu="blog" :page="page" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

import Banner from "../../components/Banner.vue";
import GirdMenu from "../../components/Blog/GirdMenu.vue";
import SideBar from "../../components/Blog/SideBar.vue";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "Blog",
  components: {
    GirdMenu,
    SideBar,
    Banner,
  },
  setup() {
    const blog = ref([]);

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
      if (page == "tourismExperience") {
        const response = await axios.get(
          `${BASE_API_URL}/blog/tourismExperience?page=1` +
            "&group=" +
            group +
            "&id=" +
            id
        );
        blog.value = response.data.data;
      } else if (page == "tourismKnowhow") {
        const response = await axios.get(
          `${BASE_API_URL}/blog/tourismKnowhow?page=1` +
            "&group=" +
            group +
            "&id=" +
            id
        );
        blog.value = response.data.data;
      } else if (page == "tourismImpressive") {
        const response = await axios.get(
          `${BASE_API_URL}/blog/tourismImpressive?page=1` +
            "&group=" +
            group +
            "&id=" +
            id
        );
        blog.value = response.data.data;
      } else if (page == "tourismStory") {
        const response = await axios.get(
          `${BASE_API_URL}/blog/tourismStory?page=1` +
            "&group=" +
            group +
            "&id=" +
            id
        );
        blog.value = response.data.data;
      }
    };

    onMounted(() => {
      getData();
    });

    return {
      id,
      page,
      group,

      blog,
    };
  },
};
</script>
