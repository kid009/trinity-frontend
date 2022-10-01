<template>
  <div class="touristroute">
    <Banner
      msg="เส้นทางท่องเที่ยวแนะนำ"
      img="images/travel10.jpg"
    />
    <div class="list-wrapper bg-grey-2">
      <div class="container box">
        <div class="row padd-90">
          <SideBar />
          <ListView />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../../components/Banner.vue";
import SideBar from "../../components/TouristRoute/SideBar.vue";
import ListView from "../../components/TouristRoute/TouristRouteSubRoute/ListView.vue";

export default {
  name: "TouristRouteSubRoute",
  components: {
    Banner,
    SideBar,
    ListView,
  },
};
</script>
