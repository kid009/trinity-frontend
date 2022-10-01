<template>
  <div class="top-baner">
    <div class="clip">
      <div
        class="bg bg-bg-chrome act"
        style="background-image: url(images/bg/bg12.jpg)"
      ></div>
    </div>
    <div class="list-wrapper padd-90">
      <div class="container box">
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-md-4"><ShowTimeLine /></div>
          <div class="col-xs-12 col-sm-4 col-md-8"><FormShowTrip /></div>
        </div>

        <!-- <TimeLine /> -->
      </div>
    </div>
  </div>
</template>

<script>
// import TimeLine from "../../components/PlanTrip/ShowTrip/TimeLine.vue";
import ShowTimeLine from "../../components/PlanTrip/ShowTripNew/ShowTimeLine.vue";
import FormShowTrip from "../../components/PlanTrip/ShowTripNew/FormShowTrip.vue";
export default {
  name: "ShowTrip",
  components: {
    // TimeLine,
    ShowTimeLine,
    FormShowTrip,
  },
};
</script>

<style scoped>
.container.box {
  width: 100%;
  padding-right: 40px;
  padding-left: 60px;
}
@media screen and (max-width: 600px) {
  .container.box {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
  }
}
</style>
