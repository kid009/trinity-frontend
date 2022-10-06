<template>
  <div class="grid-travel">
    <div class="grid">
      <div class="col"><TravelWay /></div>
      <div class="col"><SelectStart /></div>
    </div>
    <div><NameTrvel /></div>
  </div>
</template>

<script>
import TravelWay from "./TravelWay.vue";
import NameTrvel from "./NameTravel.vue";
import SelectStart from "./SelectStart.vue";

export default {
  name: "GridTravel",
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
.grid {
  display: grid;
  grid-template-columns: 30% auto;
  column-gap: 20px;
}
.col {
  padding: 20px;
}
</style>
