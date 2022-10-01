<template>
  <Banner
    msg="นวัตกรรมสิ่งประดิษฐ์"
    img="https://trinitytrip.com/image/community/community_db9df9e75f391bdff71fe7c6a7696ca9_20211122055508000000.jpg"
  />

  <div class="list-wrapper bg-grey-2">
    <div class="container box">
      <div class="row">
        <div class="col-xs-12 col-md-3">
          <InnovationObjectSideBar />
        </div>
        <div class="col-xs-12 col-md-9">
          <InnovationObjectGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../../components/Banner.vue";
import InnovationObjectGrid from "../../../components/Product/InnovationObject/InnovationObjectGrid.vue";
import InnovationObjectSideBar from "../../../components/Product/InnovationObject/InnovationObjectSideBar.vue";

export default {
  name: "InnovationObjectPage",
  components: {
    Banner,
    InnovationObjectGrid,
    InnovationObjectSideBar,
  },
};
</script>

<style></style>
