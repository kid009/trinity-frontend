<template>
  <NavBars />
  <div class="about">
    <h1>This is an about page</h1>
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src

import NavBars from "../components/NavBars.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "About",
  components: {
    NavBars,
    Footer,
  },
};
</script>
