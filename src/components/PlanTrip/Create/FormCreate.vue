<template>
  <main>
    <!-- <div class="container">
      <div class="row">
        <div class="col-xs-12"> -->
    <div class="top-baner">
      <div class="clip">
        <div
          class="bg bg-bg-chrome act"
          style="background-image: url(images/bg/bg12.jpg)"
        ></div>
      </div>
      <div class="container box">
        <div class="row padd-20-0">
          <div class="col-md-3">
            <TravelWay />
          </div>

          <div class="col-md-9">
            <SelectStart />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div><NameTrvel /></div>
          </div>
        </div>
      </div>
      <!-- </div>
        </div>
      </div> -->
    </div>
  </main>
</template>

<script>
import TravelWay from "./TravelWay.vue";
import NameTrvel from "./NameTravel.vue";
import SelectStart from "./SelectStart.vue";

export default {
  name: "FormCreate",
  components: {
    NameTrvel,
    TravelWay,
    SelectStart,
  },
};
</script>

<style scoped>
.grid-travel {
  background: linear-gradient(-90deg, #093, #12e258, #96dbc7);
}
.padd-20-0 {
  padding-top: 30px;
  padding-right: 30px;
  padding-left: 30px;
}
@media screen and (max-width: 600px) {
  .padd-20-0 {
    padding-top: 30px;
    padding-right: 10px;
    padding-left: 10px;
  }
}
</style>
