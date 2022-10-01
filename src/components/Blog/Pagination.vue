<template>
  <div class="c_pagination clearfix padd-120">
   <a
      @click="on_click(page, group, --id)"
      class="c-button b-40 bg-red-3 hv-red-3-o fl"
      >ก่อนหน้า</a
    >
    <a
      @click="on_click(page, group, ++id)"
      class="c-button b-40 bg-red-3 hv-red-3-o fr"
      >หน้าถัดไป</a
    >
    <ul class="cp_content color-4">
       <li class="active"><a @click="on_click(page, group, 1)">1</a></li>
    </ul>
  </div>
</template>

<script>

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";


export default {
  name: "Pagination",
  
  setup() {
    const pages_size = ref([]);

    /*getค่าpage*/

    let page = window.location.search.substr(6, 1);

    let pages ="";

        if (page == 1) {
      pages = "Experience";
    } else if (page == 2) {
      pages = "Knowhow";
    } else if (page == 3) {
      pages = "Impressive";
    } else if (page == 4) {
      pages = "Story";
    }

    /*getค่าgroup*/
    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let groups = ""
    if(group == "undefined"){
      group = 0
    }else if(group.length > 2){
      groups =  group
    }

    /*getค่าid*/
    let id = window.location.search;
    id = id.split("=");
    id = id[3];


   const getData = async () => {
      const response = await axios.get(`${BASE_API_URL}/blog/tourism` + pages+'?name='+groups);
      pages_size.value = response.data.data.current_page;
      console.log(pages_size.value)
    };


    onMounted(() => {
      getData();
    });

    function on_click(page, group, id) {
      window.location =
        "blog?page=" + page + "&group=" + group + "&id=" + id;
    }

    return { pages, on_click, page, id, group,pages_size };
  },
};
</script>

<style></style>
