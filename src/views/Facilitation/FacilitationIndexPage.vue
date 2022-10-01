<template>
  <div>
    <Banner msg="อำนวยความสะดวก" img="images/sea4.jpg" />
    <div class="list-wrapper bg-grey-2">
      <div class="container box">
        <div class="row">
          <FacilitationPageSideBar />
          <div class="col-xs-12 col-sm-4 col-md-6">
            <FacilitationGrid />
          </div>
          <Advert />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Banner.vue";
import FacilitationGrid from "../../components/Facilitation/FacilitationPage/FacilitationGrid.vue";
import Advert from "../../components/Facilitation/FacilitationPage/Advert.vue";
import FacilitationPageSideBar from "../../components/Facilitation/FacilitationPage/FacilitationPageSideBar.vue";

export default {
  name: "FacilitationIndexPage",
  components: {
    Banner,
    FacilitationPageSideBar,
    FacilitationGrid,

    Advert,
  },
};
</script>

<style></style>
