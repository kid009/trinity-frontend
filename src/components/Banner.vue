<template>
  <div class="banner u-diagonal">
    <img class="banner__hero-image" :src="img" alt="Imagen del banner" />
    <div class="banner__content">
      <h2 class="banner__title">{{ msg }}</h2>
      <hr />
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
  props: {
    msg: String,
    img: String,
  },
};
</script>
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
</style>
