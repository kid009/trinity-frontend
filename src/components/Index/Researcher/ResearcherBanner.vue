<template>
  <!--BANNER HOME RESEARCHER-->
  <div class="banner u-diagonal">
    <img
      class="banner__hero-image"
      src="images/index/researcherbanner.jpg"
      alt="Imagen del banner"
    />
    <div class="banner__content">
      <h1 class="banner__title">กลุ่มนักวิจัย</h1>
      <hr />
      <p class="banner__description"></p>
      <p>หน่วยงานรัฐ</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResearcherBanner",
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 14px;
  }
}

h1 {
  margin-top: 0;
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
