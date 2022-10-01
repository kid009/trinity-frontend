<template>
  <NavBars />
  <div class="pagelayout">
    <h1>This is an page_layout page</h1>
    <Footer />
    <Footer2 />
  </div>
</template>
<script>
// @ is an alias to /src

import NavBars from "../components/NavBars.vue";
import Footer from "../components/Footer.vue";
import Footer2 from "../components/Footer2.vue";
export default {
  name: "PageLayout",
  components: {
    NavBars,
    Footer,
    Footer2,
  },
};
</script>
