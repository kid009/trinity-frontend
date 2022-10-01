<template>
  <div class="banner u-diagonal">
    <img class="banner__hero-image" :src="img" alt="Imagen del banner" />
    <div class="subscribe-form banner-top">
      <div class="banner__content">
        <h2 class="banner__title">{{ msg }}</h2>
        <hr />
      </div>
      <div class="subscribe-input input-style-1 input-style-2 fl">
        <input
          class="fontstyle"
          v-model="message"
          type="text"
          required=""
          :placeholder="msgplace"
        />
      </div>
      <button
        type="submit"
        class="c-button b-60 bg-red-3 hv-red-3-o fr"
        @click="on_click(page, 0, message, namepage)"
      >
        <span>ค้นหา</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "BannerSearch",
  props: {
    msg: String,
    msgplace: String,
    img: String,
    page: String,
    namepage: String,
  },
  setup() {
    const message = ref();

    function on_click(page, group, id, namepage) {
      window.location =
        namepage + "?page=" + page + "&group=" + group + "&id=" + id;
    }

    return { on_click, message };
  },
};
</script>

<style scoped>
.topic-page {
  letter-spacing: 0;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#img-top-page {
  filter: blur(2px);
}
#frame-img {
  height: 400px;
}
</style>
<style scoped>
h2 {
  margin-top: 0;
  letter-spacing: 0;
  text-shadow: #000 0.1em 0.1em 0.2em;
  color: white;
  font-weight: 500;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  width: 400px;
  border-top: 1px solid #eee;
}
img {
  width: 100%;
  min-width: 100%;
  height: auto;
}
/*--------------------------*\
	Hero image
\*--------------------------*/
.banner {
  display: flex;
  position: relative;
  padding: 7rem 1rem 3rem;
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
  object-position: 100% 27%;
  filter: brightness(0.5);
}
.banner__content {
  margin: auto;
  position: relative;
}
.banner__title {
  text-transform: uppercase;
}
.banner-top {
  display: block;
  margin: auto;
}
</style>
