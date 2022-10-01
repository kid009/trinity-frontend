<template>
  <div>
    <Banner msg="ความรู้งานวิจัย/โครงการ" img="images/knowhow.jpg" />
    <div class="list-wrapper bg-grey-2">
      <div class="container box">
        <div class="row">
          <div class="col-xs-12 col-md-3">
            <ResearcherKnowhowSideBar />
          </div>
          <div class="col-xs-12 col-md-9">
            <ResearcherKnowhowIndexGrid />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResearcherKnowhowSideBar from "../../components/Learning/ResearcherLearnningKnowhow/ResearcherKnowhowSideBar.vue";
import ResearcherKnowhowIndexGrid from "../../components/Learning/ResearcherLearnningKnowhow/ResearcherKnowhowIndexGrid.vue";
import Banner from "../../components/Banner.vue";
export default {
  name: "ResearcherLearningIndex",
  components: {
    Banner,
    ResearcherKnowhowSideBar,
    ResearcherKnowhowIndexGrid,
  },
};
</script>

<style></style>
