<template>
  <div class="CommunityDetail">
    <Banner />
    <Detail />
    <Other
      topic_name="สถานที่อื่นๆ"
      items_link_name="communitydetail?id="
      :items_id1="community1.community_id"
      :items_gird_name1="community1.community_name"
      :items_image_cover1="community1.community_image_cover_link"
      :items_id2="community2.community_id"
      :items_gird_name2="community2.community_name"
      :items_image_cover2="community2.community_image_cover_link"
      :items_id3="community3.community_id"
      :items_gird_name3="community3.community_name"
      :items_image_cover3="community3.community_image_cover_link"
    />
  </div>
</template>
<script>
// @ is an alias to /src

import Banner from "../../components/Community/CommunityDetail/Banner.vue";
import Detail from "../../components/Community/CommunityDetail/Detail.vue";
import Other from "../../components/Other.vue";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "CommunityDetail",

  components: {
    Banner,
    Detail,
    Other,
  },
  setup() {
    const community1 = ref([]);
    const community2 = ref([]);
    const community3 = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/CommunityAll/0`
      );

      community1.value = response.data.data[0];
      community2.value = response.data.data[1];
      community3.value = response.data.data[2];
    };

    onMounted(() => {
      getData();
    });

    return { community1, community2, community3 };
  },
};
</script>
