<template>
  <!-- <BannerSearch
    msg="นวัตกรรมผลิตภัณฑ์"
    img="images/floating-market_1.jpg"
    msgplace="พิมพ์นวัตกรรมผลิตภัณฑ์ที่ต้องการค้นหา"
    page="1"
    namepage="producttouristindexpage"
  /> -->
  <!-- <Banner msg="นวัตกรรมการท่องเที่ยวโดยชุมชน" img="images/baner/success1.jpg" /> -->
  <div class="top-baner map-baner">
    <div class="">
      <div
        id="map-canvas"
        class="bg-bg-chrome"
        v-lazy="'images/bg/bg_products.jpg'"
      >
        <div id="map-canvas" class="bg-bg-chrome color-bg-img"></div>
      </div>
      <!-- <div class="inner_position_top_bottom">
        <h1 class="shadow">นวัตกรรมเทคโนโลยีการท่องเที่ยวโดยชุมชน</h1>
      </div> -->
      <div class="vertical-bottom">
        <div class="text_center">
          <h1 class="shadow">นวัตกรรมเทคโนโลยีการท่องเที่ยวโดยชุมชน</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="list-wrapper bg-grey-2">
    <div class="container box">
      <div class="row">
        <ProductIndexGrid />
      </div>
    </div>
  </div>
</template>

<script>
// import BannerSearch from "../../components/BannerSearch.vue";
// import Banner from "../../components/Banner.vue";
import ProductIndexGrid from "../../components/ProductTouristPageCompo/ProductTouristPage/ProductIndexGrid.vue";

export default {
  name: "ProductIndex",

  components: {
    // BannerSearch,
    // Banner,
    ProductIndexGrid,
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
  height: 500px;
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
.vertical-bottom {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding-right: 5px;
  padding-left: 5px;
  padding-bottom: 110px;
}
.text_center {
  text-align: center;
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 40px;
    line-height: 60px;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 0;
    color: white;
    text-shadow: 1px 1px 3px #000000;
  }
}
</style>
