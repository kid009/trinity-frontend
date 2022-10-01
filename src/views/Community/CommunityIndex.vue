<template>
  <div class="CommunityIndex">
    <!-- <Banner
    msg="ท่องเที่ยวโดยชุมชน"
    img="images/baner/baner-car.jpeg"
    /> -->
    <!-- <div style="margin-top: 80px">
      <CommunityIndexPage />
    </div> -->
    <!-- <MapCommunity />
    <GirdMenu /> -->

    <div v-if="role_id == 26">
      <div class="CommunityIndex">
        <div style="margin-top: 80px"><CommunityIndexPage /></div>
      </div>
    </div>
    <div v-else-if="role_id == 25">
      <div style="margin-top: 80px"><CommunityIndexPage /></div>
    </div>
    <div v-else-if="role_id == 23">
      <div style="margin-top: 80px"><CommunityIndexPage /></div>
    </div>
    <div v-else-if="role_id == 2">
      <div style="margin-top: 80px"><CommunityIndexPage /></div>
    </div>
    <div v-else-if="role_id == 27">
      <div style="margin-top: 80px"><CommunityIndexPage /></div>
    </div>
    <div v-else-if="role_id == 1">
      <div style="margin-top: 80px"><CommunityIndexPage /></div>
    </div>

    <!-- <div class="grid-bg">
        <img src="images/home1.png" alt="" />
      </div> -->
    <!-- <div class="grid-bgs">
        images/home1.png
        <img src="https://wallpaperaccess.com/full/1556608.jpg" alt="" />
      </div> -->
    <!-- <GridIndexPage /> -->
    <!-- <Login />

      <GridMidIndexPage />
      <Tourist /> -->

    <!-- <FormTrip />
      <Activity />
      <RecommendCommunity /> -->

    <div v-else>
      <div style="margin-top: 0px"><CommunityIndexPage /></div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

// import Banner from "../../components/Banner.vue";
// import MapCommunity from "../../components/Community/MapCommunity.vue";
// import GirdMenu from "../../components/Community/GirdMenu.vue";

import CommunityIndexPage from "../../components/Community/CommunityIndexPage.vue";
export default {
  name: "CommunityIndex",

  components: {
    // Banner,
    // MapCommunity,
    // GirdMenu,

    CommunityIndexPage,
  },
  setup() {
    const role_id = localStorage.getItem("role_id");

    return { role_id };
  },
};
</script>
