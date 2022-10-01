<template>
  <!-- <div class="banner">
    <div>
      <div class="banner-img">
        <img :src="img" alt="" />
      </div>
      <div class="banner-text">
        <h2>
          {{ name }}
        </h2>
        <br />
      </div>
    </div>
  </div> -->

  <div class="top-baner map-baner padd-90-0">
    <div class="">
      <div id="map-canvas" class="bg-bg-chrome" v-lazy="img">
        <div id="map-canvas" class="bg-bg-chrome color-bg-img"></div>
      </div>

      <div class="vertical-bottom">
        <div class="text_center">
          <h2>
            {{ name }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FacilitationBanner",
  props: {
    name: String,
    img: String,
  },
};
</script>

<style scoped>
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

.vertical-bottom {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 170px;
}

.text_center {
  text-align: center;
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
.map-baner #map-canvas {
  height: 380px;
  width: 100%;
}
.map-baner {
  padding-top: 0px;
}
h2 {
  font-size: 28px;
  line-height: 0.563rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
</style>
