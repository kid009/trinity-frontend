<template>
  <div class="TouristRouteIndex">
    <!-- <BannerSearch
      msg="เส้นทางท่องเที่ยวแนะนำ"
      img="images/travel10.jpg"
      msgplace="พิมพ์เส้นทางที่ต้องการค้นหา"
      page="1"
      namepage="touristroute"
    /> -->
    <Banner msg="เส้นทางท่องเที่ยวแนะนำ" img="images/travel10.jpg" />
    <div class="list-wrapper bg-grey-2">
      <div class="container box">
        <div class="row">
          <SideBar />
          <GridMenu />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import BannerSearch from "../../components/BannerSearch.vue";
import Banner from "../../components/Banner.vue";
import GridMenu from "../../components/TouristRoute/GridMenu.vue";
import SideBar from "../../components/TouristRoute/SideBar.vue";

export default {
  name: "TouristRouteIndex",
  components: {
    // BannerSearch,
    Banner,
    GridMenu,
    SideBar,
  },
};
</script>
