<template>
  <Banner
    msg="ผลิตภัณฑ์ชุมชน"
    img="https://trinitytrip.com/image/community/community_65c1e6a429bf773686649de04dfddbb8_20211122064844000000.jpg"
  />
  <div class="list-wrapper bg-grey-2">
    <div class="container box">
      <div class="row">
        <div class="col-xs-12 col-md-3">
          <BusinessProductCommunitySideBar />
        </div>
        <div class="col-xs-12 col-md-9">
          <BusinessProductCommunityGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../../components/Banner.vue";
import BusinessProductCommunityGrid from "../../../components/Business/BusinessProductCommunity/BusinessProductCommunityGrid.vue";
import BusinessProductCommunitySideBar from "../../../components/Business/BusinessProductCommunity/BusinessProductCommunitySideBar.vue";

export default {
  name: "BusinessProductCommunityIndexPage",
  components: {
    Banner,
    BusinessProductCommunityGrid,
    BusinessProductCommunitySideBar,
  },
};
</script>

<style></style>
