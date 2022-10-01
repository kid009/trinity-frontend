<template>
  <div>
    <Banner msg="ความรู้ธุรกิจ" img="images/knowhow.jpg" />
    <div class="list-wrapper bg-grey-2">
      <div class="container box">
        <div class="row">
          <div class="col-xs-12 col-md-3">
            <BusinessLearnningKnowhowSideBar />
          </div>
          <div class="col-xs-12 col-md-9">
            <BusinessLearnningKnowhowIndexGrid />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Banner.vue";
import BusinessLearnningKnowhowIndexGrid from "../../components/Learning/BusinessLearnningKnowhow/BusinessLearnningKnowhowIndexGrid.vue";
import BusinessLearnningKnowhowSideBar from "../../components/Learning/BusinessLearnningKnowhow/BusinessLearnningKnowhowSideBar.vue";

export default {
  name: "BusinessLearnningKnowhowIndexPage",
  components: {
    Banner,
    BusinessLearnningKnowhowSideBar,
    BusinessLearnningKnowhowIndexGrid,
  },
};
</script>

<style></style>
