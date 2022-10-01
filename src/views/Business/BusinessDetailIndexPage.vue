<template>
  <div>
    <Banner />
    <Detail />
  </div>
</template>

<script>
import Banner from "../../components/Index/BussinessIndex/BusinessDetail/Banner.vue";

import Detail from "../../components/Index/BussinessIndex/BusinessDetail/Detail.vue";
export default {
  name: "BusinessDetailIndexPage",
  components: {
    Banner,
    Detail,
  },
};
</script>

<style></style>
