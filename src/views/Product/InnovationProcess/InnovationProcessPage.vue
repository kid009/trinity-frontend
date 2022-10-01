<template>
  <Banner
    msg="นวัตกรรมกระบวนการ"
    img="https://trinitytrip.com/image/community/community_65c1e6a429bf773686649de04dfddbb8_20211122064844000000.jpg"
  />
  <div class="list-wrapper bg-grey-2">
    <div class="container box">
      <div class="row">
        <InnovationProcessSideBar />
        <InnovationProcessGrid />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../../components/Banner.vue";
import InnovationProcessGrid from "../../../components/Product/InnovationProcess/InnovationProcessGrid.vue";
import InnovationProcessSideBar from "../../../components/Product/InnovationProcess/InnovationProcessSideBar.vue";

export default {
  name: "InnovationProcessPage",
  components: {
    Banner,
    InnovationProcessGrid,
    InnovationProcessSideBar,
  },
};
</script>

<style></style>
