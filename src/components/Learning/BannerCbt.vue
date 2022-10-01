<template>
 
  <div id="frame-img" class="inner-banner style-4">
    <img id="img-top-page" class="center-image" src="images/product/product-4.jpg" alt="" />
    <div class="vertical-align">
      <div class="container">
        <h2 id="h2-topic-page" class="color-white">การท่องเที่ยวโดยชุมชน (Community Based Tourism CBT)</h2>
        <hr>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "BannerCbt",
};
</script>

<style scoped>
#h2-topic-page {
  margin-bottom: 20px;
  letter-spacing: 0;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#img-top-page {
  filter: blur(2px);
}
#frame-img {
  height: 200px;
  background-position: 77% 28%;
}
.inner-banner.style-4 {
    min-height: 200px;

}
#h2-topic-page {
    margin-top: 0px;
    letter-spacing: 0;
    text-shadow: black 0.1em 0.1em 0.2em;
}
h2{
  font-weight: 500;
}
#frame-img img{
height: 100%;
}
.center-image{
  object-fit: cover;
}
hr{
  width: 60%;
}
</style>