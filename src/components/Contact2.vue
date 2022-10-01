<template>
  <article>
    <h4 class="h4"></h4>
    <div class="imgcontact">
      <img
        v-show="user_image_cover != 'https://trinitytrip.com/image/account/'"
        :src="user_image_cover"
        alt=""
      />

      <img
        v-show="user_image_cover == 'https://trinitytrip.com/image/account/'"
        src="images/img-non/user.png"
        alt=""
      />
    </div>

    <p>
      ติดต่อ: <span>{{ user_name }}{{ user_surname }}</span>
    </p>
    <p>เบอร์โทร: <span v-html="user_telephone"></span></p>
    <!-- <p>อีเมลล์ : <span v-html="activity_email"></span></p> -->
    <div class="icon-contaxt">
      <a target="_" :href="user_line">
        <img src="images/icon/line.png" alt=""
      /></a>

      <a target="_" :href="user_facebook">
        <img src="images/icon/facebook.png" alt=""
      /></a>

      <a target="_" :href="user_instragram">
        <img src="images/product/instagrams.png" alt=""
      /></a>

      <a target="_" :href="researcher_innovation_link">
        <img src="images/product/link.png" alt=""
      /></a>
    </div>
  </article>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Contact2",
  props: {
    user_name: String,
    user_telephone: String,
    user_line: String,
    user_facebook: String,
    user_instragram: String,
    researcher_innovation_link: String,
    user_image_cover: String,
    community_id: String,
  },
  mounted() {
    console.log(this.user_image_cover);
  },
  setup() {
    const countError = ref(1);
    function checkImg() {
      countError.value++;
    }

    return { checkImg, countError };
  },
};
</script>

<style scoped>
.img-siez-detail {
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 500px;
  display: block;
  margin: auto;
}
.grid-container {
  min-height: 100%;
  width: 100%;
  background-color: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(5, max-content);
  row-gap: 0.5rem;
}

.main2 {
  grid-column: 1/-1;
  grid-row: 3/4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
}

.item {
  padding: 0rem;
  color: white;
  font-size: 2.5rem;

  border-radius: 0.2rem;
  /* display: flex; */
  justify-content: center;
  /* align-items: center; */
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  height: fit-content;
}
.item h3 {
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
  font-weight: 500;
  letter-spacing: 0px;
}
.item img {
  width: 100%;
  border-radius: 0.2rem;
  height: 100%;
  object-fit: cover;
}
.item--main2 {
  grid-column: 1/4;
  height: 61vh;
  /* background-color: #847996; */
}
@media only screen and (max-width: 41.875em) {
  .item--main2 {
    grid-column: 1/-1;
  }
}
.item--aside {
  grid-column: 4/5;
  /* background-color: #01588d; */
}
@media only screen and (max-width: 41.875em) {
  .item--aside {
    grid-column: 1/-1;
  }
}
.contact-detail {
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 10px;
}
hr {
  color: white;
  width: 50%;
}
.details-btn {
  text-align: center;
}
.details-btn .c-button:first-child {
  margin-bottom: 15px;
  border-radius: 10px;
}
.icon-contaxt {
  padding: 10px;
  align-self: center;
  text-align: center;
  margin-top: 20px;
}
.icon-contaxt img {
  padding: 1px;
  text-align: center;
  width: 41px;
  margin: 5px;
  box-shadow: 1px 1px 0px #f8f8f8;
}
@media only screen and (min-width: 768px) {
  .icon-contaxt img {
    width: 30px;
  }
}
.detail-header {
  text-align: start;

  margin-bottom: 0px;
}
.detail-header h3 {
  font-weight: 400;
  letter-spacing: 0px;
  color: #206ab0;
  padding-bottom: 15px;
}
.detail-header h4 {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #206ab0;
}
.icon-contaxt {
  padding: 0px;
  align-self: stretch;
  text-align: center;
  margin-top: 20px;
}
.icon-contaxt img {
  padding: 1px;
  text-align: start;
  width: 41px;
  margin: 0px;
  box-shadow: 1px 1px 0px #f8f8f8;
}
@media only screen and (min-width: 768px) {
  .icon-contaxt img {
    width: 30px;
  }
}
/*--------step-1----------*/
main {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0px 80px 0px 80px;
  width: 100%;
  display: grid;
  /* Define Auto Row size */
  grid-auto-rows: auto;
  /*Define our columns */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  grid-gap: 1em;
}

article {
  border-radius: 5px;
  padding: 20px;
  border: 2px solid #1f69b0;
  background-color: #fff;
}
article .imgcontact img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-top: 10px;
  margin-bottom: 20px;
}
article .imgcontact {
  text-align: center;
}
article h4 {
  padding-bottom: 20px;
  font-weight: 600;
  color: #1f69b0;
  margin-top: 10px;
}
.h4 {
  padding-bottom: 0px;
  font-weight: 600;
  color: #1f69b0;
  margin-top: 10px;
  text-align: center;
}
article p {
  padding-bottom: 10px;
  color: #1f69b0;
  font-weight: 500;
  font-size: 20px;
}
article:nth-child(odd) {
  background-color: #ffffff;
}

article:nth-child(even) {
  color: white;
  height: fit-content;
  width: fit-content;

  background-color: #ffffff !important;
  justify-self: end;
}
@media only screen and (max-width: 768px) {
  main {
    grid-template-columns: repeat(1, Auto);
    padding: 0 30px;
  }
  article:nth-child(even) {
    color: white;
    height: fit-content;
    width: 100%;
    /* background-color: #022c5447; */
    justify-self: center;
    text-align: center;
  }
}
/*--------step-1----------*/

/*--------step-2----------*/
.second-title {
  padding-top: 30px;
}
.world-country h3 {
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0px;
}
.color-dark-2 {
  color: #206ab0;
}
@media only screen and (max-width: 768px) {
  .world-country {
    margin-top: 40px;
    text-align: center;
  }
}
/*--------step-2----------*/
.world-city {
  position: relative;
  min-height: 299px;
  text-align: center;
  margin-bottom: 0px;
}
.img-siez-detail {
  width: 100%;
  max-width: 300px;

  max-height: 500px;
  display: block;
  height: 300px;
  object-fit: cover;
  margin: auto;
}
</style>
