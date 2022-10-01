<template>
  <div>
    <!-- <Banner msg="กิจกรรมท่องเที่ยว" img="images/thaipeople.jpg" /> -->
    <div class="top-baner map-baner">
      <div class="">
        <div
          id="map-canvas"
          class="bg-bg-chrome"
          v-lazy="'images/bg/bg_activitys.jpg'"
        >
          <div id="map-canvas" class="bg-bg-chrome color-bg-img"></div>
        </div>
        <div class="inner_position_top_bottom">
          <h1 class="shadow">กิจกรรมท่องเที่ยว</h1>
        </div>
      </div>
    </div>
    <div class="list-wrapper bg-white">
      <div class="container box">
        <div class="row">
          <ActivitySideBar />
          <ActivityGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Banner from "../../components/Banner.vue";
import ActivitySideBar from "../../components/TouristRoute/Activity/ActivitySideBar.vue";
import ActivityGrid from "../../components/TouristRoute/Activity/ActivityGrid.vue";

export default {
  name: "ActivityIndex",
  components: {
    // Banner,
    ActivitySideBar,
    ActivityGrid,
  },
};
</script>

<style scoped>
.padd-90-0 {
  margin-top: 20px;
}
.map-baner {
  padding-top: 0px;
}
.map-baner #map-canvas {
  height: 350px;
}
h1 {
  font-size: 64px;
  line-height: 60px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: white;
  text-shadow: 1px 1px 3px #000000;
}
.color-bg-img {
  background: rgba(255, 0, 0, 0);
  background: -webkit-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: -o-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: -moz-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0), #000000);
}
.inner_position_top_bottom {
  position: absolute;
  display: block;
  text-align: center;
  height: 50px;
  width: 100%;
  bottom: 110px;
  z-index: 999;
}
</style>
