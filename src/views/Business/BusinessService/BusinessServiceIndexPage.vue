<template>
  <Banner
    msg="การบริการ"
    img="https://trinitytrip.com/image/community/community_65c1e6a429bf773686649de04dfddbb8_20211122064844000000.jpg"
  />

  <div class="list-wrapper bg-grey-2">
    <div class="container box">
      <div class="row">
        <div class="col-xs-12 col-md-3">
          <BusinessServiceSideBar />
        </div>
        <div class="col-xs-12 col-md-9">
          <BusinessServiceGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../../components/Banner.vue";
import BusinessServiceGrid from "../../../components/Business/BusinessService/BusinessServiceGrid.vue";
import BusinessServiceSideBar from "../../../components/Business/BusinessService/BusinessServiceSideBar.vue";

// import InnovationProcessGrid from "../../../components/Product/InnovationProcess/InnovationProcessGrid.vue";
// import InnovationProcessSideBar from "../../../components/Product/InnovationProcess/InnovationProcessSideBar.vue";

export default {
  name: "BusinessServiceIndexPage",

  components: {
    Banner,
    BusinessServiceGrid,
    BusinessServiceSideBar,
  },
};
</script>

<style></style>
