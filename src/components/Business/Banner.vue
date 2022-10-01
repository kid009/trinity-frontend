<template>
  <div
    class="inner-banner style-5"
    v-for="items in business"
    v-bind:key="items.business_id"
  >
    <img
      class="hero image-as-background size-img-wh"
      :src="items.bussiness_image_cover_link"
      alt=""
      onerror="this.src='/images/img-non/business-bg.jpg'"
    />

    <div class="vertical-align">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-8 col-md-offset-2">
            <div class="borger-baner">
              <h1 class="hero-title">{{ items.bussiness_name }}</h1>
              <hr />
              <p class="color-namep">{{ items.bussiness_name_en }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "Banner",

  setup() {
    const business = ref([]);

    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/plan/BussinessDetail?bussiness_id=` + id
      );
      business.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { business, id };
  },
};
</script>

<style scoped>
/*--------------------------Baner---------------------------- */
.hero {
  background-position: 50% 50%; /* This could be 50% 50%, 0 0, or really anything.  The world is your stinky little oyster! */
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media screen and (min-width: 640px) {
    background-position: 50% 0;
    height: 300px;
  }

  @media screen and (min-width: 1366px) {
    height: 450px;
  }
}

.hero-container {
  box-sizing: border-box;
  height: auto;
  padding: 100px 50px;
  position: relative;
  text-align: center;
  z-index: 2;

  @media screen and (min-width: 640px) {
    height: 100%;
  }
}
.hero-container p {
  color: White;
}
.hero-title {
  color: White;

  font-size: 36px;
  font-weight: 500;
  letter-spacing: 1px;
}
.borger-baner {
  border: 2px solid White;
  backdrop-filter: blur(5px);
  padding: 20px 10px 20px 10px;
}
hr {
  width: 100px;
  box-shadow: 1px 1px 2px black;
}
.color-namep {
  color: White;
}
.size-img-wh {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
h1 {
  text-shadow: 1px 1px 2px black;
}
p {
  text-shadow: 1px 1px 2px black;
}
</style>