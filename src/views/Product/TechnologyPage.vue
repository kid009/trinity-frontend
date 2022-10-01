<template>
  <Banner msg="เทคโนโลยี" img="images/earth-g.jpg" />
  <div class="list-wrapper bg-grey-2">
    <div class="container box">
      <div class="row">
        <div class="col-xs-12 col-md-3">
          <TechnologySideBar />
        </div>
        <div class="col-xs-12 col-md-9">
          <TechnologyGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Banner.vue";
import TechnologyGrid from "../../components/Product/Technology/TechnologyGrid.vue";
import TechnologySideBar from "../../components/Product/Technology/TechnologySideBar.vue";

export default {
  name: "TechnologyPage",
  components: {
    Banner,
    TechnologyGrid,
    TechnologySideBar,
  },
};
</script>

<style></style>
