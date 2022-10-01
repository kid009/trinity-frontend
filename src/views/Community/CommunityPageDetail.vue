<template>
  <div class="CommunityPageDetail">
    <Banner />
    <div v-if="page == 'tradition'">
      <Detailtrandition />
    </div>
    <div v-else-if="page == 'cultu'">
      <Detailculture />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

import Banner from "../../components/Community/CommunityDetail/Banner.vue";
import Detailtrandition from "../../components/Community/CommunityPageDetail/Detailtrandition.vue";
import Detailculture from "../../components/Community/CommunityPageDetail/Detailculture.vue";

export default {
  name: "CommunityPageDetail",

  components: {
    Banner,
    Detailtrandition,
    Detailculture,
  },
  setup() {
    let page = window.location.search;
    page = page.split("=");
    page = page[1];
    page = page.substring(0, page.length - 12);

    return { page };
  },
};
</script>
