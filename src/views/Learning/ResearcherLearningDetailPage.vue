<template>
  <div>
    <Banner msg="ความรู้งานวิจัย/โครงการ" img="images/knowhow.jpg" />
    <div class="list-wrapper bg-grey-2">
      <div class="container box">
        <div class="row padd-90">
          <div class="col-xs-12 col-md-6 col-md-push-3">
            <Details />
          </div>
          <div class="col-xs-12 col-md-3 col-md-pull-6">
            <div class="right-sidebar">
              <ResearcherKnowhowSideBar />
            </div>
          </div>
          <Contact />
          <Other />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResearcherKnowhowSideBar from "../../components/Learning/ResearcherLearnningKnowhow/ResearcherKnowhowSideBar.vue";
import Details from "../../components/Learning/ResearcherLearnningKnowhowDetail/Details.vue";
import Contact from "../../components/Learning/ResearcherLearnningKnowhowDetail/Contact.vue";
import Other from "../../components/Learning/ResearcherLearnningKnowhowDetail/Other.vue";
import Banner from "../../components/Banner.vue";
export default {
  name: "ResearcherLearningDetailPage",

  components: {
    Banner,
    Details,
    ResearcherKnowhowSideBar,
    Contact,
    Other,
  },
};
</script>

<style></style>
