<template>
  <Banner
    msg="ผลิตภัณฑ์ท่องเที่ยว"
    img="https://trinitytrip.com/image/community/community_65c1e6a429bf773686649de04dfddbb8_20211122064844000000.jpg"
  />
  <div class="list-wrapper bg-grey-2">
    <div class="container box">
      <div class="row">
        <div class="col-xs-12 col-md-3">
          <BusinessProductTouristSideBar />
        </div>
        <div class="col-xs-12 col-md-9">
          <BusinessProductTouristGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../../components/Banner.vue";
import BusinessProductTouristGrid from "../../../components/Business/BusinessProductTourist/BusinessProductTouristGrid.vue";
import BusinessProductTouristSideBar from "../../../components/Business/BusinessProductTourist/BusinessProductTouristSideBar.vue";

export default {
  name: "BusinessProductTouristIndexPage",

  components: {
    Banner,
    BusinessProductTouristGrid,
    BusinessProductTouristSideBar,
  },
};
</script>

<style></style>
