<template>
  <div
    class="banner u-diagonal"
    v-for="items in business"
    v-bind:key="items.bussiness_id"
  >
    <img
      v-if="
        items.bussiness_image_background_cover_link !=
        'https://trinitytrip.com/image/bussiness/background/'
      "
      class="banner__hero-image"
      :src="items.bussiness_image_background_cover_link"
      alt="Imagen del banner"
    />
    <img
      v-else
      class="banner__hero-image"
      src="https://cdn.pixabay.com/photo/2020/05/31/04/36/investment-5241253_960_720.jpg"
      alt="Imagen del banner"
    />
    <div class="banner__content">
      <h1 class="banner__title">ธุรกิจ</h1>
      <hr />
      <!-- <p class="banner__description"></p>
      <p>หน่วยงานรัฐ</p> -->
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../../constants";

export default {
  name: "Banner",

  setup() {
    const business = ref([]);

    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const getData = async () => {
      const responsebusiness = await axios.get(
        `${BASE_API_URL}/businesstourism/BusinessDetail/` + id
      );
      business.value = responsebusiness.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { business, id };
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 32px !important;
    letter-spacing: 0px !important;
  }
  p {
    font-size: 14px;
  }
}

h1 {
  margin-top: 0;
  font-size: 42px;
  font-weight: 600;
  line-height: 70px;
  text-transform: uppercase;
  letter-spacing: 5px;
}

p {
  margin: 0;
  font-size: 20px;
}

img {
  width: 100%;
  min-width: 100%;
  height: auto;
}

/* .u-diagonal {
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
} */

/*--------------------------*\
	Hero image
\*--------------------------*/
.banner {
  display: flex;
  position: relative;
  padding: 12rem 1rem 7rem;
  color: #fff;
  background-color: var(--primary-color);
  text-align: center;
}
.banner__hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.5);
  /* opacity: 0.2; */
}
.banner__content {
  margin: auto;
  position: relative;
}
.banner__title {
  text-transform: uppercase;
}
</style>
