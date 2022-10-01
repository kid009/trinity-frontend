<template>
  <Banner msg="นวัตกรรมท่องเที่ยว" img="images/earth-g.jpg" />
  <div class="list-wrapper bg-grey-2">
    <div class="container box">
      <div class="row">
        <div class="col-xs-12 col-md-3">
          <ResearcherProductSideBar />
        </div>
        <div class="col-xs-12 col-md-9">
          <ResearcherProductGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../../components/Banner.vue";
import ResearcherProductGrid from "../../../components/Product/ResearcherProduct/ResearcherProductGrid.vue";
import ResearcherProductSideBar from "../../../components/Product/ResearcherProduct/ResearcherProductSideBar.vue";

export default {
  name: "ResearcherProductPage",

  components: {
    Banner,
    ResearcherProductGrid,
    ResearcherProductSideBar,
  },
};
</script>

<style></style>
