<template>
  <!-- <BannerSearch
    msg="นวัตกรรมผลิตภัณฑ์"
    img="images/floating-market_1.jpg"
    msgplace="พิมพ์นวัตกรรมผลิตภัณฑ์ที่ต้องการค้นหา"
    page="1"
    namepage="producttouristindexpage"
  /> -->
  <Banner msg="นวัตกรรมการท่องเที่ยวโดยชุมชน" img="images/baner/success1.jpg" />
  <div class="list-wrapper bg-grey-2">
    <div class="container box">
      <div class="row">
        <div class="col-xs-12 col-md-3">
          <!-- <div class="right-sidebar"> -->
          <ProductTouristSideBar />
          <!-- </div> -->
        </div>
        <div class="col-xs-12 col-md-9">
          <ProductTouristGridSlide />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BannerSearch from "../../components/BannerSearch.vue";
import Banner from "../../components/Banner.vue";
import ProductTouristGridSlide from "../../components/ProductTouristPageCompo/ProductTouristPage/ProductTouristGridSlide.vue";
import ProductTouristSideBar from "../../components/ProductTouristPageCompo/ProductTouristPage/ProductTouristSideBar.vue";

export default {
  name: "ProductTouristIndexPage",

  components: {
    // BannerSearch,
    Banner,
    ProductTouristGridSlide,
    ProductTouristSideBar,
  },
};
</script>

<style></style>
