<template>
  <div class="home">
    <div v-if="role_id == 26">
      <div class="CommunityIndex">
        <!-- <Banner msg="ท่องเที่ยวโดยชุมชน" img="images/baner/baner-car.jpeg" /> -->
        <div class="position_index"><CommunityIndexPage /></div>
      </div>
    </div>
    <div v-else-if="role_id == 25">
      <BusinessBanner />
      <BussinessGroup />
    </div>
    <div v-else-if="role_id == 23">
      <ResearcherBanner />
      <ResearcherInnovation />
      <ResearcherGroup />
    </div>
    <div v-else-if="role_id == 2">
      <FormIndexPage />
    </div>
    <!-- <div class="grid-bg">
        <img src="images/home1.png" alt="" />
      </div> -->
    <!-- <div class="grid-bgs">
        images/home1.png
        <img src="https://wallpaperaccess.com/full/1556608.jpg" alt="" />
      </div> -->
    <!-- <GridIndexPage /> -->
    <!-- <Login />

      <GridMidIndexPage />
      <Tourist /> -->

    <!-- <FormTrip />
      <Activity />
      <RecommendCommunity /> -->
    <div v-else-if="role_id == 1"><GridIndexPage /> <AllMainPage /></div>
    <div v-else-if="role_id == 27"><GridIndexPage /> <AllMainPage /></div>

    <div v-else>
      <NavBarPublic />
      <div class="position_index"><GridIndexPage /> <AllMainPage /></div>

      <!-- <MainCommunity />
      <MainProduct />
      <MainEvent />
      <MainRoute /> -->
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../constants";
import { useRouter } from "vue-router";

import FormIndexPage from "../components/PlanTrip/Index/FormIndexPage.vue";
// import RecommendCommunity from "../components/PlanTrip/RecommendCommunity.vue";
// import Activity from "../components/Index/Activity.vue";

// import Banner from "../components/Banner.vue";
import CommunityIndexPage from "../components/Community/CommunityIndexPage.vue";

import BusinessBanner from "../components/Index/BussinessIndex/BusinessBanner.vue";
import BussinessGroup from "../components/Index/BussinessIndex/BussinessGroup.vue";

import ResearcherBanner from "../components/Index/Researcher/ResearcherBanner.vue";
import ResearcherInnovation from "../components/Index/Researcher/ResearcherInnovation.vue";

import ResearcherGroup from "../components/Index/Researcher/ResearcherGroup.vue";

// import Grid from "../components/Index/HomeDef/Grid.vue";
import GridIndexPage from "../components/Index/HomeIndexPage/GridIndexPage.vue";
// import GridMidIndexPage from "../components/Index/HomeIndexPage/GridMidIndexPage.vue";
// import Tourist from "../components/Index/HomeIndexPage/Tourist.vue";
// import Login from "../components/Index/HomeIndexPage/Login.vue";
import NavBarPublic from "../components/NavBarPublic.vue";
import AllMainPage from "../components/Index/AllMainPage.vue";
// import MainCommunity from "../components/Index/MainCommunity.vue";
// import MainProduct from "../components/Index/MainProduct.vue";
// import MainEvent from "../components/Index/MainEvent.vue";
// import MainRoute from "../components/Index/MainRoute.vue";

export default {
  name: "Home",
  components: {
    GridIndexPage,
    AllMainPage,
    NavBarPublic,
    // MainCommunity,
    // MainEvent,
    // MainRoute,
    // MainProduct,
    // GridMidIndexPage,
    // Tourist,
    // Login,

    // Grid,

    FormIndexPage,
    // RecommendCommunity,
    // Activity,

    // Banner,
    CommunityIndexPage,

    BusinessBanner,
    BussinessGroup,

    ResearcherBanner,
    ResearcherInnovation,

    ResearcherGroup,
  },
  setup() {
    const session = sessionStorage.getItem("session_id");
    const formCreatetrip = sessionStorage.getItem("formCreatetrip");
    const role_id = localStorage.getItem("role_id");
    const router = useRouter();

    localStorage.setItem("module", "trinitytrip");

    if (role_id == 2) {
      if (formCreatetrip) {
        let text = "ต้องการวางแผนการเดินทางต่อหรือไม่!";
        if (confirm(text) == true) {
          router.replace("formCreate");
        } else {
          window.location = "home";
          sessionStorage.clear();
        }
      }
    }

    const getData = async () => {
      if (session == null) {
        const response = await axios.get(`${BASE_API_URL}/auth/sessionId`);
        sessionStorage.setItem("session_id", response.data.data);

        const responsesessionId = await axios.get(
          `${BASE_API_URL}/auth/sessionAnalytics/` + response.data.data
        );
        responsesessionId.data.data;
      }
    };

    onMounted(() => {
      getData();
    });

    return { role_id };
  },
};
</script>
<style scoped>
.grid-bg {
  width: auto;
  position: relative;
  background-color: #333333;
}
.grid-bg img {
  width: 100%;
  height: 67.5rem;
}
.grid-bgs {
  position: absolute;
  display: block;
  text-align: center;
  height: 50px;
  width: 100%;
  top: 15%;
  /* left: 10px;
  right: 10px; */
  z-index: 1000;
}
.grid-bgs img {
  width: 1024px;
  height: 768px;
}
.position_index {
  margin-top: 100px;
}

@media screen and (max-width: 600px) {
  .position_index {
    margin-top: 50px;
  }
}
</style>
