<template>
  <div v-if="module == 'trinitytrip'">
    <div v-if="role_id == 26">
      <NavBarcommunity />
    </div>
    <div v-else-if="role_id == 25">
      <NavBarBussiness />
    </div>
    <div v-else-if="role_id == 23">
      <nav-bar-reserarcher />
    </div>
    <div v-else-if="role_id == 2" style="margin-bottom: 100px">
      <NavBarTourism />
    </div>

    <div v-else-if="role_id == 1" style="margin-bottom: 100px">
      <NavBars />
    </div>
    <div v-else-if="role_id == 27" style="margin-bottom: 100px">
      <NavBars />
    </div>
    <div v-else>
      <div class="position_index"><NavBarPublic /></div>
    </div>
  </div>

  <div class="sprintvillagear">
    <router-view />
    <!-- <Footer /> -->
    <Footer2 />
  </div>
</template>

<script>
import NavBars from "../components/NavBars.vue";
import NavBarTourism from "../components/NavBarTourism.vue";
import NavBarcommunity from "../components/NavBarcommunity.vue";
import NavBarBussiness from "../components/NavBarBussiness.vue";
import NavBarReserarcher from "../components/NavBarReserarcher.vue";
// import NavBarPublic from "../components/NavBarPublic.vue";
// import Footer from "../components/Footer.vue";
import Footer2 from "../components/Footer2.vue";
import NavBarPublic from "../components/NavBarPublic.vue";

export default {
  name: "SprintVillagear",
  components: {
    NavBars,
    NavBarTourism,
    NavBarcommunity,
    NavBarBussiness,
    NavBarReserarcher,
    // NavBarPublic,
    // Footer,
    Footer2,
    NavBarPublic,
  },
  setup() {
    // const pages = sessionStorage.getItem("pages");
    // if (pages == null) {
    //   window.location = "home";
    //   sessionStorage.setItem("pages", "home");
    // }

    const role_id = localStorage.getItem("role_id");
    const module = localStorage.getItem("module");

    return { role_id, module };
  },
};
</script>

<style scoped>
.position_index {
  margin-top: 100px;
}

@media screen and (max-width: 600px) {
  .position_index {
    margin-top: 50px;
  }
}
</style>
