<template>
  <NavbarApi />
  <Banner msg="OpenData API" img="images/earth-g.jpg" />
  <div class="main-wraper padd-20-70 bg-grey-2">
    <div class="container box">
      <div class="row">
        <div class="col-xs-12">
          <div class="col-md-3"><DataSideBar /></div>
          <div class="col-md-9"><DataPage /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/OpenData/Banner.vue";
import NavbarApi from "../../components/OpenData/NavbarApi.vue";
import DataSideBar from "../../components/OpenData/DataSideBar.vue";
import DataPage from "../../components/OpenData/DataPage.vue";
import { onMounted } from "vue";
export default {
  name: "DataApi",

  components: {
    NavbarApi,
    Banner,
    DataSideBar,
    DataPage,
  },
  setup() {
    const id_api = atob(localStorage.getItem("aWRfYXBp"));
    const id_null = atob("null");

    onMounted(() => {
      if (id_api == id_null) {
        window.location = "Api";
      }
    });
    return { id_null, id_api };
  },
};
</script>

<style scoped>
.padd-20-70 {
  padding-top: 20px;
  padding-bottom: 70px;
}
</style>
