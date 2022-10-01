<template>
  <Banner
    msg="ผลิตภัณฑ์ธุรกิจ"
    img="https://trinitytrip.com/image/community/community_65c1e6a429bf773686649de04dfddbb8_20211122064844000000.jpg"
  />
  <div class="list-wrapper bg-grey-2">
    <div class="container box">
      <div class="row">
        <div class="col-xs-12 col-md-3">
          <BusinessProductBusinessSideBar />
        </div>
        <div class="col-xs-12 col-md-9">
          <BusinessProductBusinessGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../../components/Banner.vue";
import BusinessProductBusinessGrid from "../../../components/Business/BusinessProductBusiness/BusinessProductBusinessGrid.vue";
import BusinessProductBusinessSideBar from "../../../components/Business/BusinessProductBusiness/BusinessProductBusinessSideBar.vue";

export default {
  name: "BusinessProductBusinessIndexPage",
  components: {
    Banner,
    BusinessProductBusinessGrid,
    BusinessProductBusinessSideBar,
  },
};
</script>

<style></style>
