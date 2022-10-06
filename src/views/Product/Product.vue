<template>
  <div class="product">
    <BannerSearch
      msg="นวัฒกรรมผลิตภัณฑ์"
      img="images/floating-market_1.jpg"
      msgplace="พิมพ์นวัตกรรมผลิตภัณฑ์การค้นหา"
      page="1"
      namepage="product"
    />
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
import BannerSearch from "../../components/BannerSearch.vue";
import GridMenu from "../../components/Product/GridMenu.vue";
import SideBar from "../../components/Product/SideBar.vue";
export default {
  name: "Product",
  components: {
    BannerSearch,
    GridMenu,
    SideBar,
  },
};
</script>
