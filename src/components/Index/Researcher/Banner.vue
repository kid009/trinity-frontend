<template>
  <div class="banner u-diagonal">
    <img
      class="banner__hero-image"
      src="images/knowhow.jpg"
      alt="Imagen del banner"
    />
    <div class="banner__content">
      <h1 class="banner__title">นวัตกรรมงานวิจัย/โครงการ</h1>
      <hr />
      <!-- <p class="banner__description"></p>
      <p>หน่วยงานรัฐ</p> -->
    </div>
  </div>
  <!--HOTEL-ITEM-->
  <!-- <div class="main-wraper padd-90">
    <img class="center-image" src="images/knowhow.jpg" alt="" />
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
          <div class="second-title">
            <h2 class="color-white topic-page">นวัตกรรมงานวิจัย/โครงการ</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2"> -->
  <!-- <div class="subscribe-form">
            <div class="subscribe-input input-style-1 input-style-2 fl">
              <input
                v-model="message"
                type="text"
                required=""
                placeholder="พิมพ์นวัฒกรรมกระบวนการที่ต้องการค้นหา"
              />
            </div>
            <button
              type="submit"
              class="c-button b-60 bg-red-3 hv-red-3-o fr"
              @click="on_click(1, message)"
            >
              <img src="img/search_icon.png" alt="" /><span>ค้นหา</span>
            </button>
          </div> -->
  <!-- </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { ref } from "vue";

export default {
  name: "Banner",
  setup() {
    const message = ref();

    function on_click(page, id) {
      window.location =
        "innovationprocesspage?page=" + page + "&group=0&id=" + id;
    }

    return { on_click, message };
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .banner__content h1 {
    font-size: 40px;
  }
}

.banner__content h1 {
  margin-top: 0;
  font-weight: 600;
  font-size: 50px;
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
/* .topic-page {
  letter-spacing: 0;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#img-top-page {
  filter: blur(2px);
}
#frame-img {
  height: 400px;
}
.input-style-1 input {
    width: 100%;
    border: 1px solid #f8f8f8;
    border-radius: 25px;
    background: none;
    height: 60px;
    background-color: #f0f8ff00;
    padding: 0px 20px 0px 30px;
    color: #000000;
    backdrop-filter: blur(30px);
} */
</style>
