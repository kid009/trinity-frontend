<template>
  <!-- <div class="banner">
    <div
      v-for="items in bannerdetail.slice(0, 1)"
      v-bind:key="items.activity_id"
    >
      <div class="banner-img">
        <img :src="items.activity_image_cover" alt="" />
      </div>
      <div class="banner-text">
        <h2>
          {{ items.activity_name }}
        </h2>
        <br />
      </div>
      
    </div>
  </div> -->

  <div class="top-baner map-baner">
    <div
      class=""
      v-for="items in bannerdetail.slice(0, 1)"
      v-bind:key="items.activity_id"
    >
      <div
        id="map-canvas"
        class="bg-bg-chrome"
        v-lazy="items.activity_image_cover"
      >
        <div id="map-canvas" class="bg-bg-chrome color-bg-img"></div>
      </div>
      <!-- <div class="inner_position_top_bottom">
        <h1 class="shadow">นวัตกรรมเทคโนโลยีการท่องเที่ยวโดยชุมชน</h1>
      </div> -->
      <div class="vertical-bottom">
        <div class="text_center">
          <h2 class="shadow">{{ items.activity_name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";
export default {
  name: "Banner",
  setup() {
    const bannerdetail = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/tourism-route/activitDetail/` + id
      );
      bannerdetail.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { bannerdetail, page, group, id };
  },
};
</script>

<style scoped>
.map-baner {
  padding-top: 0px;
}
.map-baner #map-canvas {
  height: 300px;
}
h2 {
  font-size: 44px;
  line-height: 60px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: white;
  text-shadow: 1px 1px 3px #000000;
}
.color-bg-img {
  background: rgba(255, 0, 0, 0);
  background: -webkit-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: -o-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: -moz-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0), #000000);
}

.vertical-bottom {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding-right: 5px;
  padding-left: 5px;
  padding-bottom: 110px;
}
.text_center {
  text-align: center;
}
@media screen and (max-width: 600px) {
  h2 {
    font-size: 30px;
    line-height: 60px;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 0;
    color: white;
    text-shadow: 1px 1px 3px #000000;
  }
}

.text_center {
  text-align: center;
}
.banner {
  text-align: center;
}
.banner-img {
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.banner-img img {
  height: 300px;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}
.banner-text {
  width: 80%;
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
  position: absolute;
  top: 20%;
  right: -43%;
  left: 67%;
  transform: translate(-70%, -50%);
  color: white;

  color: white;
}
.banner-text h2 {
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0px;
}
</style>
